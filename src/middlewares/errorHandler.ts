import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { DuplicateProductException } from '../exceptions/duplicateProductException';
import { InvalidPriceException } from '../exceptions/invalidPriceException';
import { NotFoundException } from '../exceptions/notFoundException';

export const errorHandler: ErrorRequestHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    console.error(`[Error] ${err.name}: ${err.message}`);
    console.error(err.stack);

    if (err instanceof DuplicateProductException) {
        res.status(409).json({
            success: false,
            error: {
                code: 'DUPLICATE_PRODUCT',
                message: err.message,
                details: err.details
            }
        });
        return;
    }

    if (err instanceof InvalidPriceException) {
        res.status(400).json({
            success: false,
            error: {
                code: 'INVALID_PRICE',
                message: err.message,
                details: err.details
            }
        });
        return;
    }

    if (err instanceof NotFoundException) {
        res.status(404).json({
            success: false,
            error: {
                code: 'NOT_FOUND',
                message: err.message,
                details: err.details
            }
        });
        return;
    }

    if (err.name === 'ValidationError') {
        res.status(400).json({
            success: false,
            error: {
                code: 'VALIDATION_ERROR',
                message: 'Request validation failed',
                details: (err as any).details || err.message
            }
        });
        return;
    }

    if (err.name === 'CastError' && err.message.includes('ObjectId')) {
        res.status(400).json({
            success: false,
            error: {
                code: 'INVALID_ID_FORMAT',
                message: 'The provided ID has an invalid format'
            }
        });
        return;
    }

    res.status(500).json({
        success: false,
        error: {
            code: 'INTERNAL_SERVER_ERROR',
            message: 'An unexpected error occurred',
            details: process.env.NODE_ENV === 'development' ? err.message : undefined
        }
    });
};

export const notFoundHandler = (req: Request, res: Response): void => {
    res.status(404).json({
        success: false,
        error: {
            code: 'ROUTE_NOT_FOUND',
            message: `Cannot ${req.method} ${req.path}`
        }
    });
};