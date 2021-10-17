"use strict";

const { v4 } =
	process.env.STAGE === "test"
		? require("../layer/nodejs/node_modules/uuid")
		: require("uuid");

const utilFunction =
	process.env.STAGE === "dev"
		? require("../layer/nodejs/util")
		: require("/opt/nodejs/util");

module.exports.getuuid = async (event) => {
	try {
		return {
			statusCode: 200,
			body: JSON.stringify({
				uuid: v4(),
				normalizedUUID: utilFunction.normalizeText(v4()),
			}),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify(error),
		};
	}
};
