import express, { Application, Request, Response, NextFunction } from 'express';
import productRoutes from './routes/products';
import { errorHandler } from './middlewares/errorHandler';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`${req.method} ${req.path} - ${res.statusCode} - ${duration}ms`);
    });
    next();
});

app.get('/health', (_req: Request, res: Response) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/products', productRoutes);

app.use((_req: Request, res: Response) => {
    res.status(404).json({ error: 'Ruta no encontrada', code: 'NOT_FOUND' });
});

app.use(errorHandler);

export default app;