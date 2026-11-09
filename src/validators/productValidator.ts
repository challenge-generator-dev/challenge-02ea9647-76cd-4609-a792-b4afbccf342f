import { body, validationResult, ValidationChain, ValidationError } from 'express-validator';

export const createProductValidationRules = (): ValidationChain[] => [
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Product name is required')
        .isLength({ min: 2, max: 100 })
        .withMessage('Product name must be between 2 and 100 characters'),
    
    body('description')
        .optional()
        .trim()
        .isLength({ max: 500 })
        .withMessage('Description cannot exceed 500 characters'),
    
    body('price')
        .notEmpty()
        .withMessage('Price is required')
        .isFloat({ min: 0.01 })
        .withMessage('Price must be a positive number'),
    
    body('category')
        .trim()
        .notEmpty()
        .withMessage('Category is required')
        .isLength({ min: 2, max: 50 })
        .withMessage('Category must be between 2 and 50 characters')
];

export const validateRequest = (req: unknown): ValidationError[] => {
    const errors = validationResult(req);
    return errors.array();
};

export const hasValidationErrors = (req: unknown): boolean => {
    return !validationResult(req).isEmpty();
};

export const getValidationErrors = (req: unknown): string[] => {
    const errors = validationResult(req);
    return errors.array().map(err => `${err.path}: ${err.msg}`);
};

export const validateProductRequest = (req: unknown): { isValid: boolean; errors: string[] } => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return { isValid: true, errors: [] };
    }
    return {
        isValid: false,
        errors: errors.array().map(err => `${err.path}: ${err.msg}`)
    };
};