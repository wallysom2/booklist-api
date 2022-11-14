import db from "../config/database.js";

async function getAllBooks() {
  const response = await db.query(
    "SELECT * FROM books");
  return response.rows;
}

const bookRepository = {
    getAllBooks

 }
 
 export default bookRepository;