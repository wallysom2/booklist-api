import { Router } from 'express';
import { getAllBooks } from './../controllers/bookController.js';

const router: Router = Router();

router.get('/', getAllBooks);
//router.get('/:id', getBookById);
//router.post('/', createBook);
//router.put('/:id', updateBook);
//router.delete('/:id', deleteBook);

export default router;