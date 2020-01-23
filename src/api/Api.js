import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

const apiUrl = 'https://api.vk.com/method';

class Api {

	static async search() {
		return await axios({
			url: `${apiUrl}/users.get?user_ids=aleksey_vol&fields=bdate&access_token=&v=5.103`,
			adapter: jsonpAdapter,
		})
	};
};

export default Api;