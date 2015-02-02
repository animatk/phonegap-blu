var bluetoothle,
DEVICE = 0,
alerts = {
	error_inicio : 'El servicio bluetooth no se ha podido iniciar, intentelo mas tarde.'
	, activar : 'Iniciar dispositivo bluetooth?'
	, disp_find : '.disp-find'
	, error_scan : 'Error al momento de mostrar los dispositivos disponibles.'
	, error_conectar : 'No se pudo enlazar con el dispositivo, intentelo nuevamente'
	, error_stop_scan : 'Error al detener el scaneo de dispositivos.'
	, serviceUid : '180d'
	, characterisUid : '2a37'
}

function isInitialized()
{
  bluetoothle.isInitialized(isInitializedSuccess);
  return false;
}

function isInitializedSuccess(obj)
{
  if (obj.isInitialized)
  {
    isEnabled();
  }
  else
  {
	var paramsObj = {request:true};
	bluetoothle.initialize(initializeSuccess, initializeError, paramsObj);
  }
}

function initializeSuccess(obj)
{	
  if (obj.status == "enabled")
  {
  	isEnabled();
	mensaje("inicializado correctamente. habilitara el dispositivo.");
  }
  else
  {
	alert( alerts.error_inicio + ' code : initializeSuccess' );
  }
}

function initializeError(obj)
{
	alert( alerts.error_inicio + ' code : initializeError' );
}

function isEnabled()
{
  bluetoothle.isEnabled(isEnabledSuccess);
  return false;
}

function isEnabledSuccess(obj)
{
	
  if (obj.isEnabled)
  {
    if(DEVICE != 0){
		connect( DEVICE );
	}else{
		startScan();
	}
  }
  else
  {
  	if(confirm(alerts.activar)){
		enable();
	}else{
		
		alert( alerts.error_inicio + ' code : isEnabledSuccess' );
	}
  }
}

function enable()
{
	bluetoothle.enable(enableSuccess, enableError);
	return false;
}

function enableSuccess(obj)
{	
  if (obj.status == "enabled")
  {
  	startScan();
  }
  else
  {
  	alert( alerts.error_inicio + ' code : enableSuccess' );
  }
}

function enableError(obj)
{
	alert( alerts.error_inicio + ' code : enableError' );
}

function startScan()
{
	//TODO Disconnect / Close all addresses and empty
	
	var paramsObj = {serviceUuids:[]};	
	bluetoothle.startScan(startScanSuccess, startScanError, paramsObj);
  
  return false;
}

function startScanSuccess(obj)
{
	mensaje("Escaneando");
	
  if (obj.status == "scanResult")
  {

	mensaje("Se encontro el dispositivo: "+obj.address );
    addDevice(obj.address, obj.name);
  }
  else if (obj.status == "scanStarted")
  {
  }
  else
  {
	alert( alerts.error_scan + ' code : startScanSuccess' );
  }
}

function startScanError(obj)
{
  alert( alerts.error_scan + ' code : startScanError' );
}

function stopScan()
{

  bluetoothle.stopScan(stopScanSuccess, stopScanError);
  return false;
}

function stopScanSuccess(obj)
{

  if (obj.status == "scanStopped")
  {
	
  }
  else
  {
//	alert( alerts.error_stop_scan + ' code : stopScanSuccess' );
  }
}

function stopScanError(obj)
{
//	alert( alerts.error_stop_scan + ' code : stopScanError' );
}

function addDevice(address, name){
	var padre = $( alerts.disp_find ),
	item = $( alerts.disp_find +' div[data-add="'+address+'"]' );
	
	mensaje("Nombre Dispositivo: "+name );
	
	if(name != undefined){
		if(item.length == 0){
			
			var it = $('<div>');
			it.text(name);
			it.addClass('disp-item btn btn-default');
			it.attr('data-add', address);
			it.attr('onclick', 'addDisp(\''+name+'\', \''+ address +'\');');
			padre.prepend(it);
		
			mensaje("Dispositivo: "+ address +' listado correctamente');
		}
	}
	
}

function connect(address)
{
  mensaje("se va a conectar al dispositivo: "+address);
  
  var paramsObj = {address:address};
  bluetoothle.connect(connectSuccess, connectError, paramsObj);
  return false;
}

function connectSuccess(obj)
{

  if (obj.status == "connected")
  {
	//CONECTADO
	isDiscovered(obj.address);
  }
  else if (obj.status == "connecting")
  {
  }
  else
  {
	 alert( alerts.error_conectar + ' code : connectSuccess' );
  }
}

function connectError(obj)
{
  alert( alerts.error_conectar + ' code : connectError' );
}

function isDiscovered(address)
{
	var paramsObj = {address:address};
	bluetoothle.isDiscovered(isDiscoveredSuccess, paramsObj);
	return false;
}

function isDiscoveredSuccess(obj)
{	
  if (obj.isDiscovered)
  {
    subscribe(obj.address, alerts.serviceUid, alerts.characterisUid );
  }
  else
  {
  	discover(obj.address);
  }
}


function discover(address)
{
	var paramsObj = {address:address};
	
	bluetoothle.discover(discoverSuccess, discoverError, paramsObj);
	
	return false;
}

function discoverSuccess(obj)
{
	
	if (obj.status == "discovered")
	{
		subscribe(obj.address, alerts.serviceUid, alerts.characterisUid );
	}
  else
  {
  	alert( alerts.error_conectar + ' code : discoverSuccess' );
	
  }
}

function discoverError(obj)
{
   alert( alerts.error_conectar + ' code : discoverError' );
}

function subscribe(address, serviceUuid, characteristicUuid)
{
	var paramsObj = {address:address, serviceUuid:serviceUuid, characteristicUuid:characteristicUuid};
	
	bluetoothle.subscribe(subscribeSuccess, subscribeError, paramsObj);
	
	return false;
}

function subscribeSuccess(obj)
{	
	if(obj.value != undefined){
		obj.ak_valor = bluetoothle.encodedStringToBytes(obj.value);	
		$('.PPM').html(obj.ak_valor[1]);
		addClassHRM();
	}

	if (obj.status == "subscribedResult")
	{
		
	}
	else if (obj.status == "subscribed")
	{
		
	}
	else
  {
	removeClassHRM();  
  	alert( alerts.error_conectar + ' code : subscribeSuccess' );
  }
}

function subscribeError(obj)
{
	removeClassHRM();  
	alert( alerts.error_conectar + ' code : subscribeError' );
}

function mensaje(msj){
	$('#mensajes').prepend('<p>'+msj+'</p>');
}

function addClassHRM(){
	if(DEVICE != 0){
		$('#botonDisp').attr('data-add', DEVICE);
		$('div[data-add="'+DEVICE+'"]').addClass('activo');
	}
}
function removeClassHRM(){
	$('div[data-add="'+DEVICE+'"]').removeClass('activo').attr('data-add', "");
}