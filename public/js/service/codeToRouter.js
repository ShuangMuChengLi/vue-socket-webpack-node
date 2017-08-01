/**
 * Created by lin on 2017/7/18.
 */
const cmsList = resolve => {
	require.ensure(["../../html/components/index-component.vue"], () => {
		resolve(require("../../html/components/index-component.vue"))
	})
};
let codeToRouter ={
	"news":{ path: '/', component: cmsList }
};
module.exports = codeToRouter;