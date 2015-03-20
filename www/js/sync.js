/*! web worker calls */
self.addEventListener('message', function(e) {
	var obj = JSON.parse(e.data);
	switch (obj.fun) {
		case "sincronizar":
			sincronizar({ 
				url : obj.url 
				,cha : obj.chain 
				,res: function(resp){
					self.postMessage(resp);
				}
			});
		break;
		default :
			self.postMessage(JSON.stringify({success: false, msj: 'funcion no recibida' }));
	}
	
}, false);
/*! web worker calls */

var SES = localStorage;

/*! SQL LITE */
var webdb = {};
webdb.db = null;
// Función para crear la base de datos
webdb.open = function(options) {
	if (typeof openDatabase == "undefined") return;
	// Opciones por defecto
   	var options = options || {};
	options.name = options.name || 'noname';
	options.mb = options.mb || 5;
	options.description = options.description || 'no description';
	options.version = options.version || '1.0';
	// Definimos el tamaño en MB
   	var dbSize = options.mb * 1024 * 1024;
	// Cargamos la base de datos
   	webdb.db = openDatabase(options.name, options.version, options.description, dbSize);
}
// ExecuteSql
webdb.executeSql = function(sql, data, onSuccess, onError){
	if (!webdb.db) return;
	webdb.db.transaction(function(tx){tx.executeSql(sql, data,onSuccess,onError);});
}
// Base de datos
var opt = {
	name: "sforza",
	mb: 2,
	description: "Base de datos local de sforza",
	version: "1.0"
};
// Abrimos la base de datos
webdb.open(opt);
/*! END SQL LITE */

//simple XHR request in pure JavaScript
function ajax(obj) {
	var xhr;
 
	if(typeof XMLHttpRequest !== 'undefined') xhr = new XMLHttpRequest();
	else {
		var versions = ["MSXML2.XmlHttp.5.0", 
			 	"MSXML2.XmlHttp.4.0",
			 	"MSXML2.XmlHttp.3.0", 
			 	"MSXML2.XmlHttp.2.0",
			 	"Microsoft.XmlHttp"]
 
		for(var i = 0, len = versions.length; i < len; i++) {
		try {
			xhr = new ActiveXObject(versions[i]);
			break;
		}
			catch(e){}
		} // end for
	}
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				if (obj.success) obj.success(JSON.parse(xhr.responseText));
			} else {
				var error = xhr.responseText ? JSON.parse(xhr.responseText).error : {message: 'An error has occurred'};
				if (obj.error) obj.error(error);
			}
		}
	}
	var method = obj.method || 'GET';
	//
	xhr.open(method, obj.url, true);
	xhr.responseType = 'application/json';
	xhr.crossDomain = true;
	//
	if(obj.params){
		//POST
		var str = JSON.stringify(obj.params);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.send(str);
	}else{
		xhr.send();
	}
}
function sincronizar(obj){
	//
	var online = navigator.onLine;
	if(online === false){
		return false;
	}
	//
	var id = obj.id || 0,
		func = obj.res;
	
	if(id == 0){
		webdb.executeSql('SELECT ID, sync FROM actividad', [],
		function(tx, r){
			var rows = r.rows,
				items = [],
				tot = rows.length;
			for(var i=0; i<tot; i++){
				var row = rows.item(i);
				items.push(row);
			}
			var func = obj.res;
			
			func('se va a enviar la data a : '+obj.url+'input/verificar');
			
			if(items.length > 0){
				ajax({
					url: obj.url+'input/verificar'
					,method: 'POST'
					,params: {chain: obj.cha, data: items}
					,success: function(resp){
						func(JSON.stringify(resp));
					}
					,error: function(error){
						func(JSON.stringify(error));
					}
				});
			}
		},
		function(tx, e){});
	}else{
		//
		webdb.executeSql('SELECT * FROM actividad WHERE sync = ? ORDER BY ID ASC LIMIT 1', ['NO'],
		function(tx, r){
			var rows = r.rows,
				tot = rows.length;
			for(var i=0; i<tot; i++){
				var row = rows.item(i);
				mensaje('Enviando: '+JSON.stringify(row));
				post(SITE+'input', { 
					chain: row.chain
					,json: row.json 
					,data: row.data 
				}, function(data){
					if(data.status){
						webdb.executeSql('UPDATE actividad SET sync=? WHERE ID = ?', [data.sync, row.ID],
						function(tx, r){
							var nnu = nu-1;
							if(nnu > 0){
								sincronizar(nnu);
							}
						},
						function(tx, e){});
					}
				});
			}
		},
		function(tx, e){});
	}
}