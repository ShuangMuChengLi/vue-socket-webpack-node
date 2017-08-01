/**
 * Created by lin on 2017/7/18.
 */
let getRouterCodesList = require('./getRouterCodesList');
let codeToRouter = require('./codeToRouter');
function getRouterList(data) {
	let codesList = getRouterCodesList(data);
	let routerList = [];
	console.log(codesList)
	for(let i in codesList){
		let thisRouter = codeToRouter[codesList[i]];
		if(thisRouter){
			routerList.push(thisRouter);
		}
	}
	return routerList;
}
module.exports = getRouterList;