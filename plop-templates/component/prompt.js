const { notEmpty } = require('../utils.js')
const moment = require('moment')
module.exports = {
	description: 'generate vue component',
	prompts: [{
		type: 'input',
		name: 'name',
		message: 'component name please',
		validate: notEmpty('name')
	}, {
		type: 'input',
		name: 'user',
		message: 'component creater name please',
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
				return 'Components require at least a <script> or <template> tag.'
			}
			return true
		}
	}
	],
	actions: data => {
		const name = '{{properCase name}}'
		const user = '{{user}}'
		const date = moment().format('YYYY-MM-DD HH:mm:ss')
		const actions = [{
			type: 'add',
			path: `src/components/${user}/${name}/index.vue`,
			templateFile: 'plop-templates/component/vue.hbs',
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
			path: `src/components/${user}/${name}/index.scss`,
			templateFile: 'plop-templates/component/scss.hbs',
			data: {
				name,
				date,
				user,
			}
		}, {
			type: 'add',
			path: `src/components/${user}/${name}/index.js`,
			templateFile: 'plop-templates/component/js.hbs',
			data: {
				name,
				date,
				user,
			}
		}]

		return actions
	}
}
