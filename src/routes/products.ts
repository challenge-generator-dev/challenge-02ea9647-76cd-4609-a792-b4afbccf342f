import { Router, Request, Response, NextFunction } from 'express';
import { productService } from '../services/productService';
import { createProductValidationRules, validateRequest, hasValidationErrors, getValidationErrors } from '../validators/productValidator';
import { DuplicateProductException } from '../exceptions/duplicateProductException';
import { InvalidPriceException } from '../exceptions/invalidPriceException';

const router = Router();

const validateProductRequest = [
    ...createProductValidationRules(),
    (req: Request, _res: Response, next: NextFunction) => {
        if (hasValidationErrors(req)) {
            const errors = getValidationErrors(req);
            return _res.status(400).json({ 
                error: 'Validation failed', 
                details: errors,
                code: 'VALIDATION_ERROR'
            });
        }
        next();
    }
];

router.post('/', validateProductRequest, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, description, price, category } = req.body;
        
        if (price < 0) {
            throw new InvalidPriceException('El precio no puede ser negativo');
        }
        
        const createProductDto = { name, description, price, category };
        const product = await productService.createProduct(createProductDto);
        
        res.status(201).json(product);
    } catch (error) {
        if (error instanceof DuplicateProductException) {
            res.status(409).json({ error: error.message, code: 'DUPLICATE_PRODUCT' });
            return;
        }
        if (error instanceof InvalidPriceException) {
            res.status(400).json({ error: error.message, code: 'INVALID_PRICE' });
            return;
        }
        next(error);
    }
});

router.get('/', async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await productService.getProducts();
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
});

export default router;