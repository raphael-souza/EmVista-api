import { Router } from 'express';
import { UserController } from '../controller/userController';
import { User } from '../entity/User';

export const routerUSer = Router();

const userController = new UserController()
routerUSer.post('/', async (req, res) => {
    const { name, email} = req.body;
    const user = new User(name, email);
    const userSaved = await userController.save(user);
    console.log("salvou o usuário");
    res.json(userSaved);
});

routerUSer.get('/', async (req, res) => {
    const users = await userController.returnAll();
    res.json(users);
});

// retornar todos os ativos de um usuário
routerUSer.get('/financial-assets/:userId', async (req, res) => {
    const userId = req.params.userId;
    const finAssets = await userController.getFinAssetsByUserId(userId);

    res.json({"ativos": finAssets, "message": "ativos listados com sucesso"});
})