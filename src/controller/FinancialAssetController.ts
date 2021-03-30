import { getManager } from "typeorm";
import { FinancialAsset } from "../entity/FinancialAsset";

export class FinancialAssetController {

  async save(finAsset: FinancialAsset) {
    const finAssetSaved = await getManager().save(finAsset);
      
    return finAssetSaved;
  }

  
}