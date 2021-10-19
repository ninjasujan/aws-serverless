"use strict";

module.exports.handler = async (event) => {
	try {
		return {
			statusCode: 200,
			body: JSON.stringify({ message: "lambda from prod" }),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify(error),
		};
	}
};
