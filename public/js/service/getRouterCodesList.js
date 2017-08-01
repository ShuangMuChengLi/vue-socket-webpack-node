/**
 * Created by lin on 2017/7/18.
 */
function getRouterCodesList(data) {
	let codes = [];
	function getList(data) {
		for(let i in data){
			if(data[i].clientUrlValue != ""){
				codes.push(data[i].clientUrlValue);
			}
			let secondMenus = data[i].children;
			if(secondMenus.length !== 0){
				getList(secondMenus);
			}
		}
	}
	getList(data);
	return codes;
}
module.exports = getRouterCodesList;