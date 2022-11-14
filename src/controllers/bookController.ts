import { Request, Response } from "express";
import db from "../config/database.js";
import { QueryResult } from "pg";

export async function getAllBooks (req: Request, res: Response) : Promise<Response> {
try {
  const response: QueryResult = await db.query("SELECT * FROM books");
  res.status(200).send(response.rows);
} catch (error) {
  console.log(error);
  return res.status(500).send("Internal Server Error");
  
}
}



