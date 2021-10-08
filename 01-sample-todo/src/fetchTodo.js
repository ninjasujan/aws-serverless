const AWS = require("aws-sdk");

const fetchTodo = async (event) => {
	try {
		const dynamodb = new AWS.DynamoDB.DocumentClient();

		const { id } = event.pathParameters;

		const result = await dynamodb
			.get({ TableName: "TodoTable", Key: { id } })
			.promise();

		return {
			statusCode: 200,
			body: JSON.stringify(result.Item),
		};
	} catch (error) {
		console.log(error);
		return {
			statusCode: 500,
			body: JSON.stringify(err),
		};
	}
};

module.exports = {
	handler: fetchTodo,
};
