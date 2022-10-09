const { defineConfig } = require('@vue/cli-service')
const vetur = require('@volar-plugins/vetur');
module.exports = defineConfig({
  transpileDependencies: true,
  plugins: [
		vetur(),
	],
})
