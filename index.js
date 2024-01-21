'use strict';

let isDev = false;
const { protocol, hostname } = window.location;



	if(
		(protocol === 'http:' || protocol === 'https:') ||
		(hostname === 'localhost' || hostname.startsWith('localhost:'))

	) {
		isDev = true;
	}

module.exports.isDev = isDev;


