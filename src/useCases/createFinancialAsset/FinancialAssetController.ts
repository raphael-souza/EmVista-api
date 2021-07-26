import { getManager } from "typeorm";
import { FinancialAsset } from "../../entities/FinancialAsset"

export class FinancialAssetController {

  async save(finAsset: FinancialAsset) {
    const finAssetSaved = await getManager().save(finAsset);
      
    return finAssetSaved;
  }

  
}