import Api from '../api/Api';

let usersArray = [];
let iterationCount = 0;

export async function finding(ids) {
	await findByFriends(ids.userId, ids.findingUserId);

}

async function findByFriends(userId, findingUserId) {
	let friends =  await Api.getFriends(userId);
	console.log(friends);
	if (!friends) return false;
	usersArray.push(userId);
	let isFind = false;
	friends.items.forEach(user => {
		if (user.id === findingUserId) {
			usersArray.push(user.id);
			isFind = true;
		}
	});
	if (isFind) {
		console.log(isFind, usersArray);
		return null;
	}
	for (const user of friends.items) {
		let res = await findByFriendsOfFriend(user.id, findingUserId);
		if (res) {
			isFind = true;
		}
	}
	if (isFind) {
		console.log(isFind, usersArray);
		return null;
	}
	iterationCount++;
	if (iterationCount > 3) {
		console.log(isFind, usersArray);
		return null;
	}
	for (const user of friends.items) {
		await findByFriends(user.id, findingUserId);
	}
	console.log(isFind, usersArray)
}

/*async function findByFriends(userId, findingUserId) {
	let friends =  await Api.getFriends(userId);
	console.log(friends);
	usersArray.push(userId);
	let isFind = false;
	friends.items.forEach(user => {
		if (user.id === findingUserId) {
			usersArray.push(user.id);
			isFind = true;
		}
	});
	if (isFind) {
		console.log(isFind, usersArray);
		return null;
	}
	for (const user of friends.items) {
		let res = await findByFriendsOfFriend(user.id, findingUserId);
		if (res) {
			isFind = true;
		}
	}
	for (const user of friends.items) {
		await findByFriends(user.id, findingUserId);
	}
	console.log(isFind, usersArray)
}*/

async function findByFriendsOfFriend(userId, findingUserId) {
	let friends = await Api.getFriends(userId);
	if (!friends) return false;
	let isFind = false;
	friends.items.forEach(user => {
		if (user.id === findingUserId) {
			isFind = true;
			usersArray.push(userId);
			usersArray.push(user.id);
		}
	});

	return isFind;
}