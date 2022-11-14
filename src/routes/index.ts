import { Router } from 'express';
import bookController from './../controllers/bookController.js';

const router: Router = Router();

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.insertBook);
//router.put('/:id', updateBook);
//router.delete('/:id', deleteBook);

export default router;