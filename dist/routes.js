"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var FinancialAssetController_1 = require("./controller/FinancialAssetController");
var TaskController_1 = require("./controller/TaskController");
var authMiddleware_1 = require("./middlewares/authMiddleware");
var UserController_1 = require("./controller/UserController");
var AuthController_1 = require("./controller/AuthController");
var routes = express_1.Router();
routes.get('/', function (request, response) {
    return response.json({ message: "AOBA! chique!?" });
});
routes.get('/tasks', TaskController_1.getTasks);
routes.get('/task/:id', TaskController_1.getTask);
routes.post('/task', TaskController_1.savetask);
routes.put('/task/:id', TaskController_1.updateTask);
routes.patch('/task/:id', TaskController_1.finishedTask);
routes.delete('/task/:id', TaskController_1.removedTask);
routes.get('/financial-assets', FinancialAssetController_1.getFinAssets);
routes.get('/financial-asset/:id', FinancialAssetController_1.getFinAsset);
routes.post('/financial-asset', FinancialAssetController_1.saveFinAsset);
// ------- //
routes.post('/users', UserController_1.default.store);
routes.post('/auth', AuthController_1.default.authenticate);
routes.get('/users', authMiddleware_1.default, UserController_1.default.index);
exports.default = routes;
//# sourceMappingURL=routes.js.map