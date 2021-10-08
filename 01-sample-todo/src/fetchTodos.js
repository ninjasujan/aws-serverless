const AWS = require("aws-sdk");

const fetchTodos = async (event) => {
	try {
		const dynamodb = new AWS.DynamoDB.DocumentClient();

		let todos;

		const result = await dynamodb.scan({ TableName: "TodoTable" }).promise();

		return {
			statusCode: 200,
			body: JSON.stringify(result.Items),
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
	handler: fetchTodos,
};
