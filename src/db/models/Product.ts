import { DataTypes, Model, Optional } from "sequelize";
import connection from "../../config/dbConnect";

interface ProductAttributes {
  id?: number,
  name?: string | null,
  desc?: Text | null,
  image?: string | null,
  category_id?: number,
  createdAt?: Date,
  updatedAt?: Date
}

export interface ProductInput extends Optional<ProductAttributes, 'id'> { }
export interface ProductOutput extends Required<ProductAttributes> { }

class Product extends Model<ProductAttributes, ProductInput> implements ProductAttributes {
  public id!: number;
  public name!: string | null;
  public desc!: Text | null;
  public image!: string | null;
  public category_id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Product.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: true,
    type: DataTypes.STRING
  },
  desc: {
    allowNull: true,
    type: DataTypes.STRING
  },
  image: {
    allowNull: true,
    type: DataTypes.STRING
  },
  category_id: {
    allowNull: true,
    type: DataTypes.INTEGER
  }
}, {
  timestamps: true,
  sequelize: connection,
  underscored: false
})

export default Product;