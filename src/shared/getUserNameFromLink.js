export function getUserNameFromLink(link) {
	console.log(link)
	return link.substr(link.lastIndexOf('/')+1);
}