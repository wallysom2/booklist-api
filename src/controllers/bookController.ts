import { Request, Response } from "express";
import db from "../config/database.js";
import { QueryResult } from "pg";

async function getAllBooks (req: Request, res: Response) : Promise<Response> {
try {
  const response: QueryResult = await db.query("SELECT * FROM books");
  res.status(200).send(response.rows);
} catch (error) {
  console.log(error);
  return res.status(500).send("Internal Server Error");
  
}
}

async function getBookById (req: Request, res: Response) : Promise<Response> {
  try {
    const id: number = parseInt(req.params.id);
    const response: QueryResult = await db.query("SELECT * FROM books WHERE id = $1", [id]);
    return res.status(200).send(response.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
}

async function insertBook (req: Request, res: Response) : Promise<Response> {
  try {
    const { title, author, pages, genre } = req.body;
    const response: QueryResult = await db.query("INSERT INTO books (title, author, pages, genre) VALUES ($1, $2, $3, $4)", [title, author, pages, genre]);
    return res.status(200).send("Book inserted successfully" );
    
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
}

async function deleteBook (req: Request, res: Response) : Promise<Response> {
  try {
    const id: number = parseInt(req.params.id);
    const response: QueryResult = await db.query("DELETE FROM books WHERE id = $1", [id]);
    return res.status(200).send("Book deleted successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
}

const bookController = {
  getAllBooks,
  getBookById,
  insertBook,
  deleteBook
}

export default bookController;