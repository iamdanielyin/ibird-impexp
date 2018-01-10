const fs = require('fs');
const Excel = require('exceljs');
const metadata = require('./metadata');

const app = require('ibird').newApp({
    uploadDir: __dirname + '/upload'
});
app.get('/export', async ctx => {
    const workbook = new Excel.Workbook();
    workbook.creator = 'ibird';
    workbook.lastModifiedBy = 'ibird';
    workbook.created = new Date();
    workbook.modified = new Date();

    const worksheet = workbook.addWorksheet(metadata.displayName);
    const columns = [];
    const properties = metadata.jsonSchema.properties;
    for (const key in properties) {
        const column = {
            header: properties[key].title || key,
            key,
            width: 15,
            style: {
                font: {
                    size: 14
                }
            }
        };
        if (!properties[key].title) {
            column.hidden = true;
        }
        columns.push(column);
    }
    worksheet.columns = columns;
    const rows = [];
    for (let i = 1; i <= 50; i++) {
        rows.push({
            _id: i,
            code: '编码-' + i,
            name: '名称-' + i,
            value: 100 + i
        });
    }
    worksheet.addRows(rows);
    const fileName = metadata.displayName + '.xlsx';
    const filePath = process.cwd() + '/' + fileName;
    await workbook.xlsx.writeFile(process.cwd() + '/' + fileName);
    const data = fs.readFileSync(filePath);
    ctx.attachment(fileName);
    setTimeout(() => {
        fs.unlinkSync(filePath);
    }, 30 * 1000);
    ctx.body = data;
});
app.get('/import', ctx => {
    ctx.body = 'import...';
});

app.play(9999);