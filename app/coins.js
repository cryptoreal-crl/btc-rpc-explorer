var btc = require("./coins/btc.js");
var ltc = require("./coins/ltc.js");
var crl = require("./coins/crl.js");

module.exports = {
	"BTC": btc,
	"LTC": ltc,
	"CRL": crl,
	"coins":["BTC", "LTC", "CRL"]
};
