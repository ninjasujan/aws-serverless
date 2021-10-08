const AWS = require("aws-sdk");

const updateTodo = async (event) => {
	try {
		const dynamodb = new AWS.DynamoDB.DocumentClient();

		const { id } = event.pathParameters;
		const { completed } = JSON.parse(event.body);

		const result = await dynamodb
			.update({
				TableName: "TodoTable",
				Key: { id },
				UpdateExpression: "set completed = :completed",
				ExpressionAttributeValues: {
					":completed": completed,
				},
				ReturnValues: "ALL_NEW",
			})
			.promise();

		return {
			statusCode: 200,
			body: JSON.stringify({ message: "Todo updated" }),
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
	handler: updateTodo,
};
