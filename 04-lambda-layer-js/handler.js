"use strict";

const { v4 } = require("uuid");

module.exports.getuuid = async (event) => {
	try {
		return {
			statusCode: 200,
			body: JSON.stringify({ uuid: v4() }),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify(error),
		};
	}
};
