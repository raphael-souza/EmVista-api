import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { FinancialAsset } from "./FinancialAsset";

@Entity()
export class User {
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @OneToMany(() => FinancialAsset, financialAsset => financialAsset.user )
    financialAssets: FinancialAsset[];

}
