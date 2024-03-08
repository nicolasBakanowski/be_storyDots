import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Product = sequelize.define(
  'Product',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    id_brands: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'brands', 
        key: 'id',      
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  },
  {
    tableName: 'products',
    timestamps: true,
  }
);

export default Product;
