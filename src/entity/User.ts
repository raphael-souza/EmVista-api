import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BeforeInsert, BeforeUpdate} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import * as bcrypt from "bcryptjs";

import { FinancialAsset } from "./FinancialAsset";

@Entity()
export class User {
    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;
   
    @Column()
    @Length(4, 100)
    password: string;

    @OneToMany(type => FinancialAsset, financialAsset => financialAsset.user ) financialAssets: FinancialAsset[];

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        this.password = await bcrypt.hashSync(this.password, 8);
    }
}
export default User
