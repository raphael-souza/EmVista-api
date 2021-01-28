"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
function authMiddleware(req, res, next) {
    var authorization = req.headers.authorization;
    if (!authorization) {
        return res.sendStatus(401);
    }
    var token = authorization.replace('Bearer', '').trim();
    try {
        console.log('verificando Token');
        var data = jwt.verify(token, 'secret');
        var id = data.id;
        req.userId = id;
        return next();
    }
    catch (_a) {
        console.error('token não voi validado corretamente!');
        return res.sendStatus(401);
    }
}
exports.default = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map