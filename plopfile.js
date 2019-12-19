const viewGenerator = require('./plop-templates/view/prompt')
const componentGenerator = require('./plop-templates/component/prompt')

module.exports = function(plop) {
	plop.setGenerator('view一般页面模板', viewGenerator)
	plop.setGenerator('component组件模板', componentGenerator)
}
