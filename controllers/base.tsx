import { Response, Request } from 'express'
import connectToDatabase from '../utils/database';
import connection from '../utils/database';

class BaseController {
  static async insert(table: string, values: Array<any>) {
    try {
      let query = `INSERT INTO ${table} VALUES (${values})`;
      return await connection.query(query);
    } catch (error) {
      console.log(error)
    }
  }

  static async update(table: string, values: Array<any>, condition: string) {
    let connection = connectToDatabase();
    try {
      let query = `UPDATE ${table} SET ${values} WHERE ${condition}`;
      return await connection.query(query);
    } catch (error) {
      console.log(error)
    }
  }
}

export default BaseController