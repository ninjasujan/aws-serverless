import { v4 } from "uuid";

export const getuuid = () => {
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
