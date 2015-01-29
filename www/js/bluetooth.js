var bluetoothle,
alerts = {
	error_inicio : 'El servicio bluetooth no se ha podido iniciar, intentelo mas tarde.'
	, activar : 'Iniciar dispositivo bluetooth?'
	, disp_find : '.disp-find'
	, error_scan : 'Error al momento de mostrar los dispositivos disponibles.'
	, error_conectar : 'No se pudo enlazar con el dispositivo, intentelo nuevamente'
	, error_stop_scan : 'Error al detener el scaneo de dispositivos.'
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
    startScan();
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
  if (obj.status == "scanResult")
  {

    addDevice(obj.address, obj.name);
  }
  else if (obj.status == "scanStarted")
  {
  //  mensaje("Scan Started");
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
	it = $('<div>');
	it.text(name);
	it.addClass('btn btn-default');
	it.attr('onclick', 'addDisp('+name+', '+ address +');');
	padre.prepend(it);
}

function connect(address)
{
  var paramsObj = {address:address};
  bluetoothle.connect(connectSuccess, connectError, paramsObj);
  return false;
}

function connectSuccess(obj)
{

  if (obj.status == "connected")
  {
	//CONECTADO
	

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
