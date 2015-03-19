/*! web worker */
self.addEventListener('message', function(e) {
	//sincronizar({ 
	//	url : e.data, 
	//	,res: function(resp){
	//		self.postMessage(resp);
	//	}
	//});
	
	setTimeout(function(){
		self.postMessage('El Worker se esta ejecutando :: recibio '+ e.data);
	}, 2000);
	
}, false);
/*! web worker */


