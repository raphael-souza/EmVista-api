import { Router } from 'express';
import { FinancialAssetController } from '../useCases/createUser/FinancialAssetController';
import { UserController } from '../useCases/createUser/userController';
import { FinancialAsset } from '../entity/FinancialAsset';

export const routerFinancialAsset = Router();
const userController = new UserController();
const finAssetController = new FinancialAssetController();

routerFinancialAsset.post('/', async (req,res) => {
    const {
        userId,
        code, 
        broker, 
        purchaseDate,
        typeNegociation, 
        amount, 
        createdAt
    } = req.body;
    
    const userSelected = await userController.getById(userId);

    if (userSelected) {
        const finAsset = new FinancialAsset(code, broker, purchaseDate, typeNegociation, amount, createdAt, userSelected);
        const savedFinAsset = await finAssetController.save(finAsset);

        return res.status(200).json(savedFinAsset);
    } else {
        return res.status(404).json({mensagem: "usuário atrelado ao ativo não foi encontrado."});
    }
})