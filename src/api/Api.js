import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

const apiUrl = 'https://api.vk.com/method';

class Api {
	static async getFriends(userId) {
		let response = await axios({
			url: `${apiUrl}/friends.get?user_id=${userId}&fields=bdate&access_token=${process.env.REACT_APP_ACCESS_TOKEN}&v=5.103`,
			adapter: jsonpAdapter,
		});
		return response.data.response;
	};

	static async searchIdsByNames(userName, findingUserName) {
		let response = await axios({
			url: `${apiUrl}/users.get?user_ids=${userName},${findingUserName}&fields=bdate&access_token=${process.env.REACT_APP_ACCESS_TOKEN}&v=5.103`,
			adapter: jsonpAdapter,
		});
		return {
			userId: response.data.response[0].id,
			findingUserId: response.data.response[1].id,
		};
	};

}

export default Api;