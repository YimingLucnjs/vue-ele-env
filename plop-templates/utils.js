const fs = require('fs');
const path = require('path');
exports.notEmpty = name => {
	return v => {
		if (!v || v.trim === '') {
			return `${name} is required`
		} else {
			return true
		}
	}
}

exports.notBigHump = name => {
	return v => {
		if(!(/^[A-Z]([A-z]+)$/).test(v)) {
			return `${name} 必须是大驼峰，请ctrl + c退出命令行重新输入`
		} else {
			return true
		}
	}
}

exports.isNewDevloper = devloper => {
	const routerPath = path.resolve('src', 'router', 'testrouter')
	const fileList = fs.readdirSync(routerPath) || [];
	if( devloper === 'index' ){
		throw new Error('index为文件保留字')
	} else if( !~fileList.indexOf(`${devloper}.js`) ) {
		return true
	} else {
		return false
	}

}