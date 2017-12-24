/**
 * 模块依赖
 */

const Excel = require('exceljs');
const namespace = 'ibird-impexp';
const api = {};

/**
 * 加载插件
 * @param app
 * @param options
 */
function onLoad(app, options) {
    console.log(app);
}

/**
 * 导出模块
 */
module.exports = {
    namespace,
    onLoad,
    api
};