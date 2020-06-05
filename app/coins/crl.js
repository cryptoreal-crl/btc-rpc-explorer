var Decimal = require("decimal.js");
Decimal8 = Decimal.clone({ precision:8, rounding:8 });

var currencyUnits = [
	{
		type:"native",
		name:"CRL",
		multiplier:1,
		default:true,
		values:["", "crl", "CRL"],
		decimalPlaces:8
	},
	{
		type:"native",
		name:"mCRL",
		multiplier:1000,
		values:["mcrl"],
		decimalPlaces:5
	},
	{
		type:"native",
		name:"bits",
		multiplier:1000000,
		values:["bits"],
		decimalPlaces:2
	},
	{
		type:"native",
		name:"sat",
		multiplier:100000000,
		values:["sat", "satoshi"],
		decimalPlaces:0
	},
	{
		type:"exchanged",
		name:"USD",
		multiplier:"usd",
		values:["usd"],
		decimalPlaces:2,
		symbol:"$"
	},
	{
		type:"exchanged",
		name:"EUR",
		multiplier:"eur",
		values:["eur"],
		decimalPlaces:2,
		symbol:"€"
	},
];

module.exports = {
	name:"CryptoReal",
	ticker:"CRL",
	logoUrlsByNetwork:{
		"main":"/img/logo/crl.svg",
		"test":"/img/logo/tcrl.svg",
		"regtest":"/img/logo/tcrl.svg"
	},
	siteTitlesByNetwork: {
		"main":"Bitcoin Explorer",
		"test":"Testnet Explorer",
		"regtest":"Regtest Explorer"
	},
	siteDescriptionHtml:"<b>CRL Explorer</b> is <a href='https://github.com/janoside/crl-rpc-explorer). If you run your own [Bitcoin Full Node](https://bitcoin.org/en/full-node), **CRL Explorer** can easily run alongside it, communicating via RPC calls. See the project [ReadMe](https://github.com/janoside/crl-rpc-explorer) for a list of features and instructions for running.",
	nodeTitle:"Bitcoin Full Node",
	nodeUrl:"https://bitcoin.org/en/full-node",
	demoSiteUrl: "https://explorer.crl21.org",
	miningPoolsConfigUrls:[
		"https://raw.githubusercontent.com/crlcom/Blockchain-Known-Pools/master/pools.json",
		"https://raw.githubusercontent.com/blockchain/Blockchain-Known-Pools/master/pools.json"
	],
	maxBlockWeight: 4000000,
	maxBlockSize: 1000000,
	difficultyAdjustmentBlockCount: 2016,
	maxSupplyByNetwork: {
		"main": new Decimal(20999817.31308491), // ref: https://bitcoin.stackexchange.com/a/38998
		"test": new Decimal(21000000),
		"regtest": new Decimal(21000000)
	},
	targetBlockTimeSeconds: 600,
	targetBlockTimeMinutes: 10,
	currencyUnits:currencyUnits,
	currencyUnitsByName:{"CRL":currencyUnits[0], "mCRL":currencyUnits[1], "bits":currencyUnits[2], "sat":currencyUnits[3]},
	baseCurrencyUnit:currencyUnits[3],
	defaultCurrencyUnit:currencyUnits[0],
	feeSatoshiPerByteBucketMaxima: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 50, 75, 100, 150],
	genesisBlockHashesByNetwork:{
		"main":    "00000254f8c868d071e116bbfdd1baf3497823501e87fa11a6a6fcd77c3ce2c4",
		"test":    "00000254f8c868d071e116bbfdd1baf3497823501e87fa11a6a6fcd77c3ce2c4",
		"regtest": "00000254f8c868d071e116bbfdd1baf3497823501e87fa11a6a6fcd77c3ce2c4"
	},
	genesisCoinbaseTransactionIdsByNetwork: {
		"main":    "156dab277f6bea435b9412657450919632cd5eb548dcbb928a1b1d85e11692b1",
		"test":    "156dab277f6bea435b9412657450919632cd5eb548dcbb928a1b1d85e11692b1",
		"regtest": "156dab277f6bea435b9412657450919632cd5eb548dcbb928a1b1d85e11692b1"
	},
	genesisCoinbaseTransactionsByNetwork:{
		"main": {
			"hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0804ffff001d02fd04ffffffff0100f2052a01000000434104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac00000000",
			"txid": "156dab277f6bea435b9412657450919632cd5eb548dcbb928a1b1d85e11692b1",
			"hash": "156dab277f6bea435b9412657450919632cd5eb548dcbb928a1b1d85e11692b1",
			"size": 204,
			"vsize": 204,
			"version": 1,
			"confirmations":475000,
			"vin": [
				{
					"coinbase": "04ffff001d0104385468652054696d65733a2031312f4d61792f3230323020426974636f696e2773202768616c76656e696e6727206973207570706f6e207573",
					"sequence": 4294967295
				}
			],
			"vout": [
				{
					"value": 50,
					"n": 0,
					"scriptPubKey": {
						"asm": "04f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446a OP_CHECKSIG",
						"hex": "4104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac",
						"reqSigs": 1,
						"type": "pubkey",
						"addresses": [
							"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
						]
					}
				}
			],
			"blockhash": "00000254f8c868d071e116bbfdd1baf3497823501e87fa11a6a6fcd77c3ce2c4",
			"time": 1230988505,
			"blocktime": 1230988505
		},
		"test": {
			"hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4d04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac00000000",
			"txid": "156dab277f6bea435b9412657450919632cd5eb548dcbb928a1b1d85e11692b1",
			"hash": "156dab277f6bea435b9412657450919632cd5eb548dcbb928a1b1d85e11692b1",
			"version": 1,
			"size": 204,
			"vsize": 204,
			"weight": 816,
			"locktime": 0,
			"vin": [
				{
					"coinbase": "04ffff001d0104385468652054696d65733a2031312f4d61792f3230323020426974636f696e2773202768616c76656e696e6727206973207570706f6e207573",
					"sequence": 4294967295
				}
			],
			"vout": [
				{
					"value": 50.00000000,
					"n": 0,
					"scriptPubKey": {
						"asm": "04678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f OP_CHECKSIG",
						"hex": "4104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac",
						"reqSigs": 1,
						"type": "pubkey",
						"addresses": [
							"mpXwg4jMtRhuSpVq4xS3HFHmCmWp9NyGKt"
						]
					}
				}
			],
			"blockhash": "00000254f8c868d071e116bbfdd1baf3497823501e87fa11a6a6fcd77c3ce2c4",
			"time": 1296688602,
			"blocktime": 1296688602
		},
		"regtest": {
			"hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4d04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac00000000",
			"txid": "156dab277f6bea435b9412657450919632cd5eb548dcbb928a1b1d85e11692b1",
			"hash": "156dab277f6bea435b9412657450919632cd5eb548dcbb928a1b1d85e11692b1",
			"version": 1,
			"size": 204,
			"vsize": 204,
			"weight": 816,
			"locktime": 0,
			"vin": [
				{
					"coinbase": "04ffff001d0104385468652054696d65733a2031312f4d61792f3230323020426974636f696e2773202768616c76656e696e6727206973207570706f6e207573",
					"sequence": 4294967295
				}
			],
			"vout": [
				{
					"value": 50.00000000,
					"n": 0,
					"scriptPubKey": {
						"asm": "04678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f OP_CHECKSIG",
						"hex": "4104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac",
						"type": "pubkey"
					}
				}
			],
			"blockhash": "00000254f8c868d071e116bbfdd1baf3497823501e87fa11a6a6fcd77c3ce2c4",
			"time": 1296688602,
			"blocktime": 1296688602
		}
	},
	genesisBlockStatsByNetwork:{
		"main": {
			"avgfee": 0,
			"avgfeerate": 0,
			"avgtxsize": 0,
			"blockhash": "00000254f8c868d071e116bbfdd1baf3497823501e87fa11a6a6fcd77c3ce2c4",
			"feerate_percentiles": [
				0,
				0,
				0,
				0,
				0
			],
			"height": 0,
			"ins": 0,
			"maxfee": 0,
			"maxfeerate": 0,
			"maxtxsize": 0,
			"medianfee": 0,
			"mediantime": 1590515328,
			"mediantxsize": 0,
			"minfee": 0,
			"minfeerate": 0,
			"mintxsize": 0,
			"outs": 1,
			"subsidy": 5000000000,
			"swtotal_size": 0,
			"swtotal_weight": 0,
			"swtxs": 0,
			"time": 1590515328,
			"total_out": 0,
			"total_size": 0,
			"total_weight": 0,
			"totalfee": 0,
			"txs": 1,
			"utxo_increase": 1,
			"utxo_size_inc": 117
		},
		"test": {
			"avgfee": 0,
			"avgfeerate": 0,
			"avgtxsize": 0,
			"blockhash": "00000254f8c868d071e116bbfdd1baf3497823501e87fa11a6a6fcd77c3ce2c4",
			"feerate_percentiles": [
				0,
				0,
				0,
				0,
				0
			],
			"height": 0,
			"ins": 0,
			"maxfee": 0,
			"maxfeerate": 0,
			"maxtxsize": 0,
			"medianfee": 0,
			"mediantime": 1590515328,
			"mediantxsize": 0,
			"minfee": 0,
			"minfeerate": 0,
			"mintxsize": 0,
			"outs": 1,
			"subsidy": 5000000000,
			"swtotal_size": 0,
			"swtotal_weight": 0,
			"swtxs": 0,
			"time": 1590515328,
			"total_out": 0,
			"total_size": 0,
			"total_weight": 0,
			"totalfee": 0,
			"txs": 1,
			"utxo_increase": 1,
			"utxo_size_inc": 117
		}
	},
	genesisCoinbaseOutputAddressScripthash:"4104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac",
	historicalData: [
		{
			type: "blockheight",
			date: "2020-05-26",
			chain: "main",
			blockHeight: 0,
			blockHash: "00000254f8c868d071e116bbfdd1baf3497823501e87fa11a6a6fcd77c3ce2c4",
			summary: "The Cryptoreal Genesis Block.",
			alertBodyHtml: "This is the first block in the CryptoReal blockchain.",
			referenceUrl: "https://en.bitcoin.it/wiki/Genesis_block"
		},
	],
	exchangeRateData:{
		jsonUrl:"https://api.coindesk.com/v1/bpi/currentprice.json",
		responseBodySelectorFunction:function(responseBody) {
			//console.log("Exchange Rate Response: " + JSON.stringify(responseBody));

			var exchangedCurrencies = ["USD", "GBP", "EUR"];

			if (responseBody.bpi) {
				var exchangeRates = {};

				for (var i = 0; i < exchangedCurrencies.length; i++) {
					if (responseBody.bpi[exchangedCurrencies[i]]) {
						exchangeRates[exchangedCurrencies[i].toLowerCase()] = responseBody.bpi[exchangedCurrencies[i]].rate_float;
					}
				}

				return exchangeRates;
			}
			
			return null;
		}
	},
	blockRewardFunction:function(blockHeight, chain) {
		var eras = [ new Decimal8(50) ];
		for (var i = 1; i < 34; i++) {
			var previous = eras[i - 1];
			eras.push(new Decimal8(previous).dividedBy(2));
		}

		var halvingBlockInterval = (chain == "regtest" ? 150 : 210000);
		var index = Math.floor(blockHeight / halvingBlockInterval);

		return eras[index];
	}
};
