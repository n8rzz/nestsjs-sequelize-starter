import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Retailer extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'retailer_name',
    unique: true,
  })
  retailerName: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    field: 'is_archived',
  })
  isArchived: boolean;

  @Column({
    type: 'TIMESTAMP',
    allowNull: false,
    field: 'created_at',
  })
  createdAt: Date;

  @Column({
    type: 'TIMESTAMP',
    allowNull: false,
    field: 'updated_at',
  })
  updatedAt: Date;
}
