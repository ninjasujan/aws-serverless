"use strict";

module.exports.handler = async (event) => {
	try {
		return {
			statusCode: 200,
			body: JSON.stringify({ message: "lambda from dev" }),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify(error),
		};
	}
};
