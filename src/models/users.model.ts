import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { User } from '../interfaces';

export default class UserModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  createUser = async (user: User) => {
    try {
      const { username, vocation, level, password } = user;
      const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
        'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
        [username, vocation, level, password],
      );
    
      return { id: insertId, ...user };        
    } catch (error) {
      console.error('Failed to insert user to database:', error);
      throw error;
    }
  };

  login = async (username: string, password: string) => {
    try {
      const [rows] = await this.connection.execute<(
      RowDataPacket)[]>(
        'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',
        [username, password],
        );
      const [userLogin] = rows as User[];
      return { ...userLogin };
    } catch (error) {
      console.error('Failed to get user from database:', error);
      throw error;
    }
  };
}