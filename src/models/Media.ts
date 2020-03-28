import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { db } from '../config/database'

export class Media extends Model {
  public id!: number;
  public file!: string;
  public note!: string;
  public semester!: Date;

  public exhibitionId!: number;
  public publicationId!: number;
  public informationId!: number;

  public src!: string;
  public src_cover!: string;
  public src_thumb!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export interface MediaInterface {
  id: number;
  file: string;
  note: string;
  semester: Date;
  exhibitionId: number;
  publicationId: number;
  informationId: number;
}

Media.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  file: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  semester: {
    type: DataTypes.STRING(7),
  },
  note: DataTypes.STRING

}, {
  sequelize: db,
  tableName: 'media',
});

