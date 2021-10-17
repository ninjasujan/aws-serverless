const { nanoid } =
	process.env.STAGE === "test"
		? require("../layer/nodejs/node_modules/nanoid")
		: require("nanoid");

module.exports.getNanoId = async (event) => {
	try {
		return {
			statusCode: 200,
			body: JSON.stringify({ nanoid: nanoid(7) }),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify(error),
		};
	}
};
