
var iSrc = 0;
var iAudio = null;
var myList = null;

function iMusicReady(sqlQuery){
	if(sqlQuery){
		webdb.executeSql('CREATE TABLE IF NOT EXISTS iosmusic (ID INTEGER PRIMARY KEY ASC, json TEXT)', [],
			function(tx, r){},
			function(tx, e){});
			
		webdb.executeSql('SELECT * FROM iosmusic ORDER BY ID ASC', [],
				function(tx, r){
					var rows = r.rows,
					tot = rows.length;
					if(tot <= 0){
						$('.iMusic-songName .iMusic-name').html(language.no_songs);
						$('.iMusic-songName .iMusic-artist').html(language.add_songs);
						$('.iMusic-songName').removeClass('oculto');
					}
					for(var i=0; i<tot; i++){
						var row = rows.item(i);
						iMusic_AddItem(row.ID, JSON.parse(row.json));
					}
				},
				function(tx, e){});				
	}
}
function iMusic_AddItem(id, data){
//	var name = data.filename;
	var name = "No name";
	var span = "";
	var artist = "";
	if(data.title != "" 
		&& data.title != undefined ){
		name = data.title;
	}
	if(data.artist != ""
		&& data.artist != undefined){
		artist = data.artist;
	}
	var datatitle = name;
	if(artist != ""){
		datatitle = name+' - '+artist;
		span = "twolines";
	}
	
	var it = $('<div id="iMusic-'+id+'" onclick="iAudio_playsong(this);" class="iMusic-item" data-id="'+id+'" data-title="'+datatitle+'" data-url="'+data.ipodurl+'">');
	var cont = '<div class="container">'+
	'<div class="iMusic-name">'+name+'</div>'+
	'<div class="iMusic-artist">'+artist+'</div>'+
	'</div>'+
	'<div class="iDelbtn '+span+'">'+language.delete+'</div>';
	it.html(cont);
	iMusic_ActionListener(it);
	$('.iMusic-list').append(it);
}
function iMusic_ActionListener(it){
	if(it.hasClass('hasDelLis')) return false;
	it.addClass('hasDelLis');
	var box = it.get(0);
		it._StartX = 0;

	box.addEventListener('touchstart', function(e){
			var touchobj = e.changedTouches[0]; // reference first touch point (ie: first finger)
			if(it._StartX == 0){
				it._StartX = parseInt(touchobj.clientX);
			}
			/*
			if(parseInt(touchobj.clientX) < it._StartX){
				it.css( '-webkit-transform', 'translate3d('+(touchobj.clientX - it._StartX)+'px, 0, 0);' );
			}else{
				it.css( '-webkit-transform', 'translate3d(0, 0, 0);' );
			}
			*/
		if( e.target == box){
			e.preventDefault();
		}
	}, false);
	
	
	box.addEventListener('touchend', function(e){
		
		if($(e.target).hasClass('iDelbtn')){
			iMusic_Delete('#'+$(e.target).parent().attr('id'));
			e.preventDefault();
		}else{
			
			var touchobj = e.changedTouches[0];
			var dis = parseInt(touchobj.clientX) - it._StartX;
			it._StartX = 0;
			
			if(dis < -150){
				it.addClass('deleting');
			}else{
				it.removeClass('deleting');
			}
		}
	}, false);
}
function iMusic_Delete(id){
	var it = $(id);
	it.removeClass('deleting');
	it.addClass('borrando');
	setTimeout(function(){				
		webdb.executeSql('DELETE FROM iosmusic WHERE ID='+it.attr('data-id'), [],
		function(tx, r){
			if(iSrc == it.attr('data-id')){
				iAudio_nextprev('next', function(){
				//	window.plugins.iOSAudioPicker.deleteSongs(iAudio_delSuccess, iAudio_delError,'false', it.attr('data-url'));
					it.remove();
				});
			}else{
			//	window.plugins.iOSAudioPicker.deleteSongs(iAudio_delSuccess, iAudio_delError,'false', it.attr('data-url'));
				it.remove();
			}
		},
		function(tx, e){
			it.removeClass('borrando');
			//error
		});
		
	}, 200);
}

function iAudio_addSound(){
	window.plugins.iOSAudioPicker.getAudio(iAudio_plsuccess,iAudio_delError,'true','false');
	//
	setTimeout(function(){
		$('.bluetooth').addClass('sync');
	}, 600);
}
function iAudio_plsuccess(data, k){
	var key = k || 0;
    //console.log("Data = "+JSON.stringify(data));
	
    // iSrc = data[0].exportedurl;
    // iSrc = iSrc.replace("file://localhost/","/");
    // iSrc = decodeURI(iSrc);

	/*
	data = [{
			albumTitle: ""
			artist: "Cake"
			duration: 223.738
			exportedurl: "file:///var/mobile/Containers/Data/Application/AC8DFB8E-80C9-4122-B3A3-A3CEBFFBA9A4/Documents/Hem%20…"
			filename: "Hem of Your Garment.m4a"
			genre: "No Genre"
			image: "No Image"
			ipodurl: "ipod-library://item/item.mp3?id=8965345625436888006"
			title: "Hem of Your Garment"
		}
		...
	];
	*/
//	var fileurl = data[key].exportedurl;
//	fileurl = fileurl.replace("file:///","/");
//	fileurl = decodeURI(fileurl);
		
	console.log(data[key]);
	webdb.executeSql('INSERT INTO iosmusic ( json ) VALUES (?)', [JSON.stringify(data[key])],
		function(tx, r){
			iMusic_AddItem(r.insertId, data[key]);
			if(data[key+1] != undefined){
				iAudio_plsuccess(data, key+1);
			}else{
				$('.bluetooth').removeClass('sync');
			}
		},
		function(tx, e){
			//error
		});
	/*
    var slen = data.length;
    for(var i=0;i<slen;i++)
    {
        var fileurl = data[i].exportedurl;
        fileurl = fileurl.replace("file:///","/");
        fileurl = decodeURI(fileurl);
        srcarray.push(fileurl);
    }
    console.log(data);
	*/
}
function iAudio_playsong(elm)
{
	var obj = $(elm);
	if(iAudio == null){
		iAudio = new Audio();
		iAudio.canPlayType('audio/mp4');
		iAudio.addEventListener("ended", function(){
			console.log('finalizo');
			iAudio_nextprev('next');
		});
		
		iAudio.addEventListener("timeupdate", function(){
			var val  = ((iAudio.currentTime * 100) / iAudio.duration);
			$('#iMusicVol').val(val).css('background', '-webkit-linear-gradient(left, #5de252 0%, #5de252 ' + val + '%, #111012 ' + val + '%)');
		});
	}
	
	$('.iMusic-item').removeClass('playing');
	
	if(iSrc != obj.attr('data-id')){
		iSrc = obj.attr('data-id');
		iAudio.setAttribute("title", obj.attr('data-title'));
		iAudio.setAttribute("src", obj.attr('data-url'));
		$('.iMusic-songName .iMusic-name').html(obj.find('.iMusic-name').text());
		$('.iMusic-songName .iMusic-artist').html(obj.find('.iMusic-artist').text());
		$('.iMusic-songName').removeClass('oculto');
		iAudio.load();
		iAudio.play();
	}
	obj.addClass('playing');
	$('.iMusic-play').addClass('pause');
	var volume = iAudio.volume;
	iAudio_nextprev(false);
}
function iAudio_changevol(val)
{
	if(iAudio != null){
	//	iAudio.volume = val/100;
		var tot = iAudio.duration;
		iAudio.currentTime = (val * (tot/100));
		$('#iMusicVol').val(val).css('background', '-webkit-linear-gradient(left, #5de252 0%, #5de252 ' + val + '%, #111012 ' + val + '%)');
	}
}
function iAudio_stopsong()
{
	var boton = $('.iMusic-play');
	if($(iAudio).attr('src') == "") return false;
	//
	if(iAudio != null && boton.hasClass('pause')){
		iAudio.pause();
		boton.removeClass('pause');
	}else if(iAudio != null && !boton.hasClass('pause')){
		iAudio.play();
		boton.addClass('pause');
	}else if(iAudio == null && !boton.hasClass('pause')){
		var item = $('.iMusic-list .iMusic-item')[0];
		if(item){
			item.click();
		}
	}
}
function iAudio_nextprev(btn, func){	
	var btnNext = $('.iMusic-next');
	var btnPrev = $('.iMusic-prev');
	var actualSrc = $('#iMusic-'+iSrc);
	var nextSrc = actualSrc.next();
	var prevSrc = actualSrc.prev();
	
	if(nextSrc.length <= 0){
		btnNext.addClass('oculto');
	}else{
		btnNext.removeClass('oculto');
	}
	if(prevSrc.length <= 0){
		btnPrev.addClass('oculto');
	}else{
		btnPrev.removeClass('oculto');
	}
	
	if(btn === false) return false;
	
	if(btn == 'next'){
		if(nextSrc.length <= 0){
			iAudio_stopsong();
			if(iAudio != null){
				iAudio.setAttribute("src", "");
				iAudio.load();
			}
			$('.iMusic-songName').addClass('oculto');
		}else{
			nextSrc.click();
		}
	}else{
		prevSrc.click();
	}
	if(func){
		func();
	}
}
function iAudio_delsong()
{
    window.plugins.iOSAudioPicker.deleteSongs(iAudio_delSuccess, iAudio_delError,'false', src);
}

function iAudio_delmsong()
{
    window.plugins.iOSAudioPicker.deleteSongs(iAudio_delSuccess, iAudio_delError,'true', srcarray);
}

function iAudio_delSuccess(a)
{
    console.log(JSON.stringify(a));
}
function iAudio_delError(e)
{
    console.log(JSON.stringify(e));
}

// onSuccess Callback
// file:///var/mobile/Containers/Data/Application/9F139679-BB79-4167-BAAF-C052C47E7214/Documents/Balaclava.m4a
function iAudio_onSuccess() {
    console.log("playAudio():Audio Success");
}

// onError Callback
//
function iAudio_onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}