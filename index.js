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
function onload(app, options) {
    const config = app.c();
    const metadataGetter = typeof options.metadataGetter === 'function' || (() => config.models);
    app.on('ibird-mongoose:model:post', (obj) => {

    });
    const metadata = metadataGetter();

    
}

/**
 * 导出模块
 */
module.exports = {
    namespace,
    onload,
    api
};