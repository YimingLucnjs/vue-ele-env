const { notEmpty } = require('../utils.js')
const moment = require('moment')
module.exports = {
  description: '新建一个页面模板，选择请直接 回车 或 输入 1 + 回车',
  prompts: [{
    type: 'input',
    name: 'name',
    message: '输入页面的名字',
    validate: notEmpty('name')
  }, {
		type: 'input',
		name: 'user',
		message: '输入页面创建者的名字',
		validate: notEmpty('user')
	},
  {
    type: 'checkbox',
    name: 'blocks',
    message: 'Blocks:',
    choices: [{
      name: '<template>',
      value: 'template',
      checked: true
    },
    {
      name: '<script>',
      value: 'script',
      checked: true
    },
    {
      name: 'style',
      value: 'style',
      checked: true
    }
    ],
    validate(value) {
      if (value.indexOf('script') === -1 && value.indexOf('template') === -1) {
        return 'View require at least a <script> or <template> tag.'
      }
      return true
    }
  }
  ],
  actions: data => {
    const name = '{{name}}'
		const user = '{{user}}'
		const date = moment().format('YYYY-MM-DD HH:mm:ss')
    const actions = [{
      type: 'add',
      path: `src/views/${name}/index.vue`,
      templateFile: 'plop-templates/view/vue.hbs',
      data: {
        name,
        date,
        user,
        template: data.blocks.includes('template'),
        script: data.blocks.includes('script'),
        style: data.blocks.includes('style')
      }
    }, {
      type: 'add',
      path: `src/views/${name}/index.scss`,
      templateFile: 'plop-templates/view/scss.hbs',
      data: {
        name,
        date,
        user,
      }
    }, {
      type: 'add',
      path: `src/views/${name}/index.js`,
      templateFile: 'plop-templates/view/js.hbs',
      data: {
        name,
        date,
        user,
      }
    }]

    return actions
  }
}
