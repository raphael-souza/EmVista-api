import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class FinancialAssets {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type:string
  
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
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}
