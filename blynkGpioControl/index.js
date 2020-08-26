var Blynk = require('blynk-library');
var Gpio = require('onoff').Gpio;
var led = new Gpio(18, 'out');

var AUTH = 'n6EDAUGQd4VZdb9W-A02kUJ_TKimjTgK';

var blynk = new Blynk.Blynk(AUTH);

var v0 = new blynk.VirtualPin(0);

v0.on('write', function(param) {
	if (param[0] == '1') {
		led.writeSync(1);
	} else {
		led.writeSync(0);
	}
	
});