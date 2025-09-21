import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { Task } from '../tasks/entities/task.entity';
import { User } from '../auth/entities/user.entity';

// Cargar variables de entorno
config();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || 'nestjs',
  password: process.env.DB_PASSWORD || 'nestjs123',
  database: process.env.DB_NAME || 'tasks_db',
  entities: [Task, User],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
  logging: true,
});