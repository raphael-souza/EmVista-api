import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import { User } from './User';

@Entity()
export class FinancialAsset {

  constructor( code: string, broker: string, purchaseDate: Date, typeNegociation: string, amount: number, 
    created_at: Date, user: User){
      this.code = code;
      this.broker = broker;
      this.purchaseDate = purchaseDate;
      this.amount = amount;
      this.createdAt = created_at;
      this.user = user;
      this.typeNegociation = typeNegociation;
  }

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  typeNegociation:string
  
  @Column()
  code: string;

  @Column()
  broker: string;

  @Column()
  purchaseDate: Date;

  @Column()
  amount: number;

  @Column({ nullable: false, type: "float", default: 0.0 })
  purchasePrice: number;

  @Column({ nullable: false, type: "float", default: 0.0 })
  amountInvested: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(type => User, user => user.financialAssets)  user: User;

}
