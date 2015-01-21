var bluetoothle;

var jqmReady = $.Deferred();
var pgReady = $.Deferred();

var app =
{
  callback: null,
  initialize: function(callback) 
  {
    this.callback = callback;
    
    //If testing on a desktop, automatically resolve PhoneGap
    if (document.URL.match(/^https?:/) || document.URL.match(/^file:/))
    {
      pgReady.resolve();
    }
    //Else if on a mobile device, add event listener for deviceready
    else 
    {
      document.addEventListener("deviceready", onDeviceReady, false);
    }
  }
};

$(document).on("pagecreate", function()
{
	//Resolve jQuery Mobile
  jqmReady.resolve();
  $(document).off("pagecreate");
});

$.when(jqmReady, pgReady).then(function()
{
	//When PhoneGap and jQuery Mobile are resolved, start the app
  if (app.callback !== null)
  {
    app.callback();
  }
});

function onDeviceReady()
{
	//Resolve PhoneGap after deviceready has fired
	pgReady.resolve();
}

app.initialize(function() 
{
	$("a.initialize").on("vclick", initialize);
  
  $("a.enable").on("vclick", enable);
  
  $("a.disable").on("vclick", disable);
  
  $("a.startScan").on("vclick", startScan);
  
  $("a.stopScan").on("vclick", stopScan);
  
  $("a.retrieveConnected").on("vclick", retrieveConnected);
  
  $("a.isInitialized").on("vclick", isInitialized);
  
  $("a.isEnabled").on("vclick", isEnabled);

  $("a.isScanning").on("vclick", isScanning);
  
  $(document).on("vclick", "a.connect", function()
  {
  	var address = getAddress($(this));
  	
  	connect(address);
  	
  	return false;
  });
  
  $(document).on("vclick", "a.reconnect", function()
  {
  	var address = getAddress($(this));
  	
  	reconnect(address);
  	
  	return false;
  });
  
  $(document).on("vclick", "a.disconnect", function()
  {
  	var address = getAddress($(this));
  	
  	disconnect(address);
  	
  	return false;
  });
  
  $(document).on("vclick", "a.close", function()
  {
  	var address = getAddress($(this));
  	
  	close(address);
  	
  	return false;
  });
  
  $(document).on("vclick", "a.discover", function()
  {
  	var address = getAddress($(this));
  	
  	discover(address);
  	
  	return false;
  });
  
  $(document).on("vclick", "a.services", function()
  {
  	var address = getAddress($(this));
  	
  	services(address);
  	
  	return false;
  });
  
  $(document).on("vclick", "a.rssi", function()
  {
  	var address = getAddress($(this));
  	
  	rssi(address);
  	
  	return false;
  });
  
  $(document).on("vclick", "a.isConnected", function()
  {
  	var address = getAddress($(this));
  	
  	isConnected(address);
  	
  	return false;
  });
  
  $(document).on("vclick", "a.isDiscovered", function()
  {
  	var address = getAddress($(this));
  	
  	isDiscovered(address);
  	
  	return false;
  });
  
  $(document).on("vclick", "a.characteristics", function()
  {
  	var address = getAddress($(this));
  	var serviceUuid = getServiceUuid($(this));
  	
  	characteristics(address, serviceUuid);
  	
  	return false;
  });
  
  $(document).on("vclick", "a.read", function()
  {
  	var address = getAddress($(this));
  	var serviceUuid = getServiceUuid($(this));
  	var characteristicUuid = getCharacteristicUuid($(this));
  	
  	read(address, serviceUuid, characteristicUuid);
  	
  	return false;
  });
  
  $(document).on("vclick", "a.subscribe", function()
  {
  	var address = getAddress($(this));
  	var serviceUuid = getServiceUuid($(this));
  	var characteristicUuid = getCharacteristicUuid($(this));
  	
  	subscribe(address, serviceUuid, characteristicUuid);
  	
  	return false;
  });
  
  $(document).on("vclick", "a.unsubscribe", function()
  {
  	var address = getAddress($(this));
  	var serviceUuid = getServiceUuid($(this));
  	var characteristicUuid = getCharacteristicUuid($(this));
  	
  	unsubscribe(address, serviceUuid, characteristicUuid);
  	
  	return false;
  });
  
  $(document).on("vclick", "a.write", function()
  {
  	var address = getAddress($(this));
  	var serviceUuid = getServiceUuid($(this));
  	var characteristicUuid = getCharacteristicUuid($(this));
  	
  	var bytes = new Uint8Array(1);
  	bytes[0] = 0;
  	var value = bluetoothle.bytesToEncodedString(bytes);
  	
  	write(address, serviceUuid, characteristicUuid, value);
  	
  	return false;
  });
  
  $(document).on("vclick", "a.descriptors", function()
  {
  	var address = getAddress($(this));
  	var serviceUuid = getServiceUuid($(this));
  	var characteristicUuid = getCharacteristicUuid($(this));
  	
  	descriptors(address, serviceUuid, characteristicUuid);
  	
  	return false;
  });
  
  $(document).on("vclick", "a.readDescriptor", function()
  {
  	var address = getAddress($(this));
  	var serviceUuid = getServiceUuid($(this));
  	var characteristicUuid = getCharacteristicUuid($(this));
  	var descriptorUuid = getDescriptorUuid($(this));
  	
  	readDescriptor(address, serviceUuid, characteristicUuid, descriptorUuid);
  	
  	return false;
  });
  
  $(document).on("vclick", "a.writeDescriptor", function()
  {
  	var address = getAddress($(this));
  	var serviceUuid = getServiceUuid($(this));
  	var characteristicUuid = getCharacteristicUuid($(this));
  	var descriptorUuid = getDescriptorUuid($(this));
  	
  	var bytes = new Uint8Array(1);
  	bytes[0] = 0;
  	var value = bluetoothle.bytesToEncodedString(bytes);
  	
  	writeDescriptor(address, serviceUuid, characteristicUuid, descriptorUuid, value);
  	
  	return false;
  });
  
  $(document).on("vclick", ".toggle", function()
  {
  	var $item = $(this);

  	if ($item.hasClass("active"))
  	{
  		$item.removeClass("active");
  	}
  	else
  	{
  		$item.addClass("active");
  	}
  });
});

function initialize()
{
	var paramsObj = {request:true};
	
	mensaje("Initialize : " + JSON.stringify(paramsObj));
	
	bluetoothle.initialize(initializeSuccess, initializeError, paramsObj);
	
	return false;
}

function initializeSuccess(obj)
{
	mensaje("Initialize Success : " + JSON.stringify(obj));
	
  if (obj.status == "enabled")
  {
  	mensaje("Enabled");
  }
  else
  {
  	mensaje("Unexpected Initialize Status");
  }
}

function initializeError(obj)
{
  mensaje("Initialize Error : " + JSON.stringify(obj));
}

function enable()
{
	mensaje("Enable");
	
	bluetoothle.enable(enableSuccess, enableError);
	
	return false;
}

function enableSuccess(obj)
{
	mensaje("Enable Success : " + JSON.stringify(obj));
	
  if (obj.status == "enabled")
  {
  	mensaje("Enabled");
  }
  else
  {
  	mensaje("Unexpected Enable Status");
  }
}

function enableError(obj)
{
  mensaje("Enable Error : " + JSON.stringify(obj));
}

function disable()
{
	mensaje("Disable");
	
	bluetoothle.disable(disableSuccess, disableError);
	
	return false;
}

function disableSuccess(obj)
{
	mensaje("Disable Success : " + JSON.stringify(obj));
	
  if (obj.status == "disabled")
  {
  	mensaje("Disabled");
  }
  else
  {
  	mensaje("Unexpected Disable Status");
  }
}

function disableError(obj)
{
  mensaje("Disable Error : " + JSON.stringify(obj));
}

function startScan()
{
	//TODO Disconnect / Close all addresses and empty
	
	var paramsObj = {serviceUuids:[]};
	
	mensaje("Start Scan : " + JSON.stringify(paramsObj));
	
  bluetoothle.startScan(startScanSuccess, startScanError, paramsObj);
  
  return false;
}

function startScanSuccess(obj)
{
	mensaje("Start Scan Success : " + JSON.stringify(obj));
	
  if (obj.status == "scanResult")
  {
    mensaje("Scan Result");
    
    addDevice(obj.address, obj.name);
  }
  else if (obj.status == "scanStarted")
  {
    mensaje("Scan Started");
  }
  else
  {
  	mensaje("Unexpected Start Scan Status");
  }
}

function startScanError(obj)
{
  mensaje("Start Scan Error : " + JSON.stringify(obj));
}

function stopScan()
{
	mensaje("Stop Scan");
	
  bluetoothle.stopScan(stopScanSuccess, stopScanError);
  
  return false;
}

function stopScanSuccess(obj)
{
	mensaje("Stop Scan Success : " + JSON.stringify(obj));
	
  if (obj.status == "scanStopped")
  {
    mensaje("Scan Stopped");
  }
  else
  {
  	mensaje("Unexpected Stop Scan Status");
  }
}

function stopScanError(obj)
{
  mensaje("Stop Scan Error : " + JSON.stringify(obj));
}

function retrieveConnected()
{
	//TODO Add to readme that at least one is required
	var paramsObj = {serviceUuids:["180D"]};
	
	mensaje("Retrieve Connected : " + JSON.stringify(paramsObj));
	
	bluetoothle.retrieveConnected(retrieveConnectedSuccess, retrieveConnectedError, paramsObj);
	
	return false;
}

function retrieveConnectedSuccess(obj)
{
	mensaje("Retrieve Connected Success : " + JSON.stringify(obj));
  
	for (var i = 0; i < obj.length; i++)
	{
		addDevice(obj[i]);
	}
}

function retrieveConnectedError(obj)
{
	mensaje("Retrieve Connected Error : " + JSON.stringify(obj));
}

function isInitialized()
{
	mensaje("Is Initialized");
	
  bluetoothle.isInitialized(isInitializedSuccess);
  
  return false;
}

function isInitializedSuccess(obj)
{
	mensaje("Is Initialized Success : " + JSON.stringify(obj));
	
  if (obj.isInitialized)
  {
    mensaje("Is Initialized : true");
  }
  else
  {
  	mensaje("Is Initialized : false");
  }
}

function isEnabled()
{
	mensaje("Is Enabled");
	
  bluetoothle.isEnabled(isEnabledSuccess);
  
  return false;
}

function isEnabledSuccess(obj)
{
	mensaje("Is Enabled Success : " + JSON.stringify(obj));
	
  if (obj.isEnabled)
  {
    mensaje("Is Enabled : true");
  }
  else
  {
  	mensaje("Is Enabled : false");
  }
}

function isScanning()
{
	mensaje("Is Scanning");
	
  bluetoothle.isScanning(isScanningSuccess);
  
  return false;
}

function isScanningSuccess(obj)
{
	mensaje("Is Scanning Success : " + JSON.stringify(obj));
	
  if (obj.isScanning)
  {
    mensaje("Is Scanning : true");
  }
  else
  {
  	mensaje("Is Scanning : false");
  }
}

function connect(address)
{
  var paramsObj = {address:address};
 	
 	mensaje("Connect : " + JSON.stringify(paramsObj));
 	
  bluetoothle.connect(connectSuccess, connectError, paramsObj);
  
  return false;
}

function connectSuccess(obj)
{
	mensaje("Connect Success : " + JSON.stringify(obj));
	
  if (obj.status == "connected")
  {
  	mensaje("Connected");
  }
  else if (obj.status == "connecting")
  {
  	mensaje("Connecting");
  }
	else
  {
  	mensaje("Unexpected Connect Status");
  }
}

function connectError(obj)
{
  mensaje("Connect Error : " + JSON.stringify(obj));
}

function reconnect(address)
{
	var paramsObj = {address:address};
		
	mensaje("Reconnect : " + JSON.stringify(paramsObj));

  bluetoothle.reconnect(reconnectSuccess, reconnectError, paramsObj);
  
  return false;
}

function reconnectSuccess(obj)
{
	mensaje("Reconnect Success : " + JSON.stringify(obj));
	
  if (obj.status == "connected")
  {
  	mensaje("Connected");
  }
  else if (obj.status == "connecting")
  {
  	mensaje("Connecting");
  }
  else
  {
  	mensaje("Unexpected Reconnect Status");
  }
}

function reconnectError(obj)
{
  mensaje("Reconnect Error : " + JSON.stringify(obj));
}

function disconnect(address)
{
	var paramsObj = {address:address};
	
	mensaje("Disconnect : " + JSON.stringify(paramsObj));
	
	bluetoothle.disconnect(disconnectSuccess, disconnectError, paramsObj);
	
	return false;
}

function disconnectSuccess(obj)
{
	mensaje("Disconnect Success : " + JSON.stringify(obj));
	
	if (obj.status == "disconnected")
  {
    mensaje("Disconnected");
  }
  else if (obj.status == "disconnecting")
  {
    mensaje("Disconnecting");
  }
  else
  {
  	mensaje("Unexpected Disconnect Status");
  }
}

function disconnectError(obj)
{
	mensaje("Disconnect Error : " + JSON.stringify(obj));
}

function close(address)
{
	var paramsObj = {address:address};
	
	mensaje("Close : " + JSON.stringify(paramsObj));
	
  bluetoothle.close(closeSuccess, closeError, paramsObj);
  
  return false;
}

function closeSuccess(obj)
{
	mensaje("Close Success : " + JSON.stringify(obj));
	
	if (obj.status == "closed")
	{
		mensaje("Closed");
	}
	else
  {
  	mensaje("Unexpected Close Status");
  }
}

function closeError(obj)
{
	mensaje("Close Error : " + JSON.stringify(obj));
}

function discover(address)
{
	var paramsObj = {address:address};
		
	mensaje("Discover : " + JSON.stringify(paramsObj));
		
	bluetoothle.discover(discoverSuccess, discoverError, paramsObj);
	
	return false;
}

function discoverSuccess(obj)
{
	mensaje("Discover Success : " + JSON.stringify(obj));
	
	if (obj.status == "discovered")
	{
		mensaje("Discovered");
		
		var address = obj.address;
		
		var services = obj.services;
		
		for (var i = 0; i < services.length; i++)
		{
			var service = services[i];
			
			addService(address, service.serviceUuid);
			
			var characteristics = service.characteristics;
			
			for (var j = 0; j < characteristics.length; j++)
			{
				var characteristic = characteristics[j];
				
				addCharacteristic(address, service.serviceUuid, characteristic.characteristicUuid);
				
				var descriptors = characteristic.descriptors;
				
				for (var k = 0; k < descriptors.length; k++)
				{
					var descriptor = descriptors[k];
					
					addDescriptor(address, service.serviceUuid, characteristic.characteristicUuid, descriptor.descriptorUuid);
				}
			}
		}
  }
  else
  {
  	mensaje("Unexpected Discover Status");
  }
}

function discoverError(obj)
{
  mensaje("Discover Error : " + JSON.stringify(obj));
}

function services(address)
{
	var paramsObj = {address:address, serviceUuids:[]};
		
	mensaje("Services : " + JSON.stringify(paramsObj));
	
	bluetoothle.services(servicesSuccess, servicesError, paramsObj);
	
	return false;
}

function servicesSuccess(obj)
{
	mensaje("Services Success : " + JSON.stringify(obj));
	
  if (obj.status == "services")
  {
  	mensaje("Services");
  	
    var serviceUuids = obj.serviceUuids;
    
    for (var i = 0; i < serviceUuids.length; i++)
    {
			addService(obj.address, serviceUuids[i]);
    }
  }
	else
  {
  	mensaje("Unexpected Services Status");
  }
}

function servicesError(obj)
{
  mensaje("Services Error : " + JSON.stringify(obj));
}

function rssi(address)
{
	var paramsObj = {address:address};
		
	mensaje("RSSI : " + JSON.stringify(paramsObj));
		
	bluetoothle.rssi(rssiSuccess, rssiError, paramsObj);
	
	return false;
}

function rssiSuccess(obj)
{
	mensaje("RSSI Success : " + JSON.stringify(obj));
	
	if (obj.status == "rssi")
	{
		mensaje("RSSI");
  }
  else
  {
  	mensaje("Unexpected RSSI Status");
  }
}

function rssiError(obj)
{
  mensaje("RSSI Error : " + JSON.stringify(obj));
}

function isConnected(address)
{
	var paramsObj = {address:address};
		
	mensaje("Is Connected : " + JSON.stringify(paramsObj));
	
  bluetoothle.isConnected(isConnectedSuccess, paramsObj);
  
  return false;
}

function isConnectedSuccess(obj)
{
	mensaje("Is Connected Success : " + JSON.stringify(obj));
	
  if (obj.isConnected)
  {
    mensaje("Is Connected : true");
  }
  else
  {
  	mensaje("Is Connected : false");
  }
}

function isDiscovered(address)
{
	var paramsObj = {address:address};
		
	mensaje("Is Discovered : " + JSON.stringify(paramsObj));
	
  bluetoothle.isDiscovered(isDiscoveredSuccess, paramsObj);
  
  return false;
}

function isDiscoveredSuccess(obj)
{
	mensaje("Is Discovered Success : " + JSON.stringify(obj));
	
  if (obj.isDiscovered)
  {
    mensaje("Is Discovered : true");
  }
  else
  {
  	mensaje("Is Discovered : false");
  }
}

function characteristics(address, serviceUuid)
{
	var paramsObj = {address:address, serviceUuid:serviceUuid, characteristicUuids:[]};
	
	mensaje("Characteristics : " + JSON.stringify(paramsObj));
	
	bluetoothle.characteristics(characteristicsSuccess, characteristicsError, paramsObj);
	
	return false;
}

function characteristicsSuccess(obj)
{
	mensaje("Characteristics Success : " + JSON.stringify(obj));
	
  if (obj.status == "characteristics")
  {
  	mensaje("Characteristics");
  	
    var characteristics = obj.characteristics;
    
    for (var i = 0; i < characteristics.length; i++)
    { 
      addCharacteristic(obj.address, obj.serviceUuid, characteristics[i].characteristicUuid);
    }
  }
	else
  {
  	mensaje("Unexpected Characteristics Status");
  }
}

function characteristicsError(obj)
{
  mensaje("Characteristics Error : " + JSON.stringify(obj));
}

function descriptors(address, serviceUuid, characteristicUuid)
{
	var paramsObj = {address:address, serviceUuid:serviceUuid, characteristicUuid:characteristicUuid};
	
	mensaje("Descriptors : " + JSON.stringify(paramsObj));
	
	bluetoothle.descriptors(descriptorsSuccess, descriptorsError, paramsObj);
	
	return false;
}

function descriptorsSuccess(obj)
{
	mensaje("Descriptors Success : " + JSON.stringify(obj));
	
  if (obj.status == "descriptors")
  {
  	mensaje("Descriptors");
  	
  	var descriptorUuids = obj.descriptorUuids;
    
    for (var i = 0; i < descriptorUuids.length; i++)
    { 
      addDescriptor(obj.address, obj.serviceUuid, obj.characteristicUuid, descriptorUuids[i]);
    }
  }
	else
  {
  	mensaje("Unexpected Descriptors Status");
  }
}

function descriptorsError(obj)
{
  mensaje("Descriptors Error : " + JSON.stringify(obj));
}

function read(address, serviceUuid, characteristicUuid)
{
	var paramsObj = {address:address, serviceUuid:serviceUuid, characteristicUuid:characteristicUuid};
	
	mensaje("Read : " + JSON.stringify(paramsObj));
	
  bluetoothle.read(readSuccess, readError, paramsObj);
  
  return false;
}

function readSuccess(obj)
{
	
	if(obj.value != undefined){
		obj.ak_valor = bluetoothle.encodedStringToBytes(obj.value);	
	}
	
	mensaje("Read Success : " + JSON.stringify(obj));
	
	if (obj.status == "read")
	{
		/*var bytes = bluetoothle.encodedStringToBytes(obj.value);
		mensaje("Read : " + bytes[0]);*/
		
		mensaje("Read");
	}
	else
  {
  	mensaje("Unexpected Read Status");
  }
}

function readError(obj)
{
  mensaje("Read Error : " + JSON.stringify(obj));
}

function subscribe(address, serviceUuid, characteristicUuid)
{
	var paramsObj = {address:address, serviceUuid:serviceUuid, characteristicUuid:characteristicUuid};
	
	mensaje("Subscribe : " + JSON.stringify(paramsObj));
	
	bluetoothle.subscribe(subscribeSuccess, subscribeError, paramsObj);
	
	return false;
}

function subscribeSuccess(obj)
{	
	if(obj.value != undefined){
		obj.ak_valor = bluetoothle.encodedStringToBytes(obj.value);	
	}

	mensaje("Subscribe Success : " + JSON.stringify(obj));
	
	if (obj.status == "subscribedResult")
	{
		mensaje("Subscribed Result");
	}
	else if (obj.status == "subscribed")
	{
		mensaje("Subscribed");
	}
	else
  {
  	mensaje("Unexpected Subscribe Status");
  }
}

function subscribeError(obj)
{
  mensaje("Subscribe Error : " + JSON.stringify(obj));
}

function unsubscribe(address, serviceUuid, characteristicUuid)
{
	var paramsObj = {address:address, serviceUuid:serviceUuid, characteristicUuid:characteristicUuid};
	
	mensaje("Unsubscribe : " + JSON.stringify(paramsObj));
	
	bluetoothle.unsubscribe(unsubscribeSuccess, unsubscribeError, paramsObj);
	
	return false;
}

function unsubscribeSuccess(obj)
{
	mensaje("Unsubscribe Success : " + JSON.stringify(obj));
	
	if (obj.status == "unsubscribed")
	{
		mensaje("Unsubscribed");
	}
	else
	{
		mensaje("Unexpected Unsubscribe Status");
	}
}

function unsubscribeError(obj)
{
	mensaje("Unsubscribe Error : " + JSON.stringify(obj));
}

function write(address, serviceUuid, characteristicUuid, value)
{
	var paramsObj = {address:address, serviceUuid:serviceUuid, characteristicUuid:characteristicUuid, value:value};
	
	mensaje("Write : " + JSON.stringify(paramsObj));
	
	bluetoothle.write(writeSuccess, writeError, paramsObj);
	
	return false;
}

function writeSuccess(obj)
{
	mensaje("Write Success : " + JSON.stringify(obj));
	
	if (obj.status == "written")
	{
		mensaje("Written");
	}
	else
	{
		mensaje("Unexpected Write Status");
	}
}

function writeError(obj)
{
	mensaje("Write Error : " + JSON.stringify(obj));
}

function readDescriptor(address, serviceUuid, characteristicUuid, descriptorUuid)
{
	var paramsObj = {address:address, serviceUuid:serviceUuid, characteristicUuid:characteristicUuid, descriptorUuid:descriptorUuid};
	
	mensaje("Read Descriptor : " + JSON.stringify(paramsObj));
	
	bluetoothle.readDescriptor(readDescriptorSuccess, readDescriptorError, paramsObj);
	
	return false;
}

function readDescriptorSuccess(obj)
{
	mensaje("Read Descriptor Success : " + JSON.stringify(obj));
	
	if (obj.status == "readDescriptor")
	{
		mensaje("Read Descriptor");
	}
	else
  {
  	mensaje("Unexpected Read Descriptor Status");
  }
}

function readDescriptorError(obj)
{
  mensaje("Read Descriptor Error : " + JSON.stringify(obj));
}

function writeDescriptor(address, serviceUuid, characteristicUuid, descriptorUuid, value)
{
	var paramsObj = {address:address, serviceUuid:serviceUuid, characteristicUuid:characteristicUuid, descriptorUuid:descriptorUuid, value:value};
	
	mensaje("Write Descriptor : " + JSON.stringify(paramsObj));
	
	bluetoothle.writeDescriptor(writeDescriptorSuccess, writeDescriptorError, paramsObj);
	
	return false;
}

function writeDescriptorSuccess(obj)
{
	mensaje("Write Descriptor Success : " + JSON.stringify(obj));
	
	if (obj.status == "writeDescriptor")
	{
		mensaje("Write Descriptor");
	}
	else
  {
  	mensaje("Unexpected Write Descriptor Status");
  }
}

function writeDescriptorError(obj)
{
  mensaje("Write Descriptor Error : " + JSON.stringify(obj));
}

function addDevice(address, name)
{
	var $devices = $(".devices");
	
	var $check = $devices.find("li[data-address='{0}']".format(address));
	if ($check.length > 0)
	{
		return;
	}
	
	var template = $("#device").text().format(address, name);

	$devices.append(template);
}

function getAddress($item)
{
	return $item.parents("li[data-address]").attr("data-address");
}

function addService(address, serviceUuid)
{
	var $devices = $(".devices");
	
	var $services = $devices.find("li[data-address='{0}'] ul.services".format(address));
	
	var $check = $services.find("li[data-serviceUuid='{0}']".format(serviceUuid));
	if ($check.length > 0)
	{
		return;
	}
	
	var template = $("#service").text().format(serviceUuid);
	
	$services.append(template);
}

function getServiceUuid($item)
{
	return $item.parents("li[data-serviceUuid]").attr("data-serviceUuid");
}

function addCharacteristic(address, serviceUuid, characteristicUuid)
{
	var $devices = $(".devices");
	
	var $services = $devices.find("li[data-address='{0}'] ul.services".format(address));

	var $characteristics = $services.find("li[data-serviceUuid='{0}'] ul.characteristics".format(serviceUuid));
	
	var $check = $characteristics.find("li[data-characteristicUuid='{0}']".format(characteristicUuid));
	if ($check.length > 0)
	{
		return;
	}

	var template = $("#characteristic").text().format(characteristicUuid);
	
	$characteristics.append(template);
}

function getCharacteristicUuid($item)
{
	return $item.parents("li[data-characteristicUuid]").attr("data-characteristicUuid");
}

function addDescriptor(address, serviceUuid, characteristicUuid, descriptorUuid)
{
	var $devices = $(".devices");
	
	var $services = $devices.find("li[data-address='{0}'] ul.services".format(address));

	var $characteristics = $services.find("li[data-serviceUuid='{0}'] ul.characteristics".format(serviceUuid));
	
	var $descriptors = $characteristics.find("li[data-characteristicUuid='{0}'] ul.descriptors".format(characteristicUuid));

	var $check = $descriptors.find("li[data-descriptorUuid='{0}']".format(descriptorUuid));
	if ($check.length > 0)
	{
		return;
	}

	var template = $("#descriptor").text().format(descriptorUuid);
	
	$descriptors.append(template);
}

function getDescriptorUuid($item)
{
	return $item.parents("li[data-descriptorUuid]").attr("data-descriptorUuid");
}

String.prototype.format = function()
{
  var args = arguments;
  return this.replace(/{(\d+)}/g, function(match, number)
  { 
    return typeof args[number] != 'undefined' ? args[number] : match;
  });
};

function mensaje(msj){
	$('#mensajes').prepend('<p>'+msj+'</p>');
}