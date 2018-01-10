module.exports = {
    "name": "Param",
    "displayName": "参数",
    "jsonSchema": {
        "type": "object",
        "properties": {
            "code": {
                "type": "string",
                "required": true,
                "title": "参数编码"
            },
            "name": {
                "type": "string",
                "required": true,
                "title": "参数名称"
            },
            "value": {
                "type": "any",
                "required": true,
                "title": "参数值"
            },
            "_id": {
                "type": "string"
            },
            "__v": {
                "type": "number"
            }
        }
    }
};