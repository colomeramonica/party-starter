import { connection } from "@/services/database";

export class CharacterRepository {
  constructor() {}

  public async createCharacter(
    userId: string,
    name: string,
    summary: string,
    characterClass: string,
    characterRace: string,
    hasParty: boolean
  ) {
    const sql = `INSERT INTO characters (user_id, name, summary, characterClass, characterRace, hasParty) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [userId, name, summary, characterClass, characterRace, hasParty];

    return new Promise((resolve, reject) => {
      connection.query(sql, values, (err: any, result: any) => {
        if (err) {
          reject(err);
        }
        resolve(result);
        return result;
      });
    });
  }
}