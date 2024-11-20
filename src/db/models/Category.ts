import { DataTypes, Model, Optional } from "sequelize";
import connection from "../../config/dbConnect";

interface CategoryAttributes {
  id?: number,
  name?: string | null,
  createdAt?: Date,
  updatedAt?: Date
}

export interface CategoryInput extends Optional<CategoryAttributes, 'id'> { }
export interface CategoryOutput extends Required<CategoryAttributes> { }

class Category extends Model<CategoryAttributes, CategoryInput> implements CategoryAttributes {
  public id!: number;
  public name!: string | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Category.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: true,
    type: DataTypes.STRING
  }
}, {
  timestamps: true,
  sequelize: connection,
  underscored: false
})

export default Category;