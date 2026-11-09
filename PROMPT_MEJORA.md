# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Lo que le falta a este proyecto

Esto NO lo tenes que adivinar: salio de comparar el proyecto contra la arquitectura declarada del reto y de un analisis estatico del codigo. Completalo TODO.

### Boilerplate del stack que falta

Sin esto no compila ni arranca. Es andamiaje, no toca nada de lo pedagogico:

- **src/app.module.ts** — Sin el modulo raiz, Nest no tiene arbol de dependencias que resolver y el bootstrap falla.

## Como saber que terminaste

```bash
npm install && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Backend, Especialidad Desarrollador, Tecnología Node, Advanced L2

### Brecha de conocimiento
Construir endpoints REST con validacion y manejo de errores (corrida e2e 20261109083811938), Expone endpoints REST con validacion de entrada y manejo centralizado de errores

### Misión / candidato
Exponer el catalogo de productos

### Reto
- Tema: Construccion de APIs REST con Express
- Seniority: advanced-l2
- Tipo: practical
- Título: Desarrollo de API REST para Catálogo de Productos
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Definición y Validación de Productos — objetivo: Crear endpoints para añadir y consultar productos, asegurando que los nombres no sean duplicados y los precios no sean negativos. — entregable (NO resolver): Endpoints POST y GET funcionando con validaciones de nombre y precio.
- Fase 2: Manejo Centralizado de Errores — objetivo: Implementar un mecanismo para manejar errores de manera centralizada en la API. — entregable (NO resolver): Mecanismo de manejo de errores centralizado en la API.
- Fase 3: Exposición del Catálogo de Productos — objetivo: Exponer el catálogo de productos a través de la API, asegurando que los endpoints funcionen correctamente y manejen los errores de manera adecuada. — entregable (NO resolver): API REST completa que expone el catálogo de productos con validación y manejo de errores.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "product-catalog-api",
  "version": "1.0.0",
  "description": "API REST para catálogo de productos",
  "main": "dist/main.js",
  "scripts": {
    "build": "tsc",
    "start": "node dist/main.js",
    "dev": "ts-node src/main.ts",
    "test": "jest",
    "test:watch": "jest --watch"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "class-validator": "^0.14.1",
    "dotenv": "^16.4.5",
    "express": "4.21.1",
    "express-validator": "7.2.0",
    "body-parser": "^1.20.3"
  },
  "devDependencies": {
    "@types/express": "4.17.21",
    "@types/jest": "29.5.12",
    "@types/node": "22.7.0",
    "@types/supertest": "6.0.2",
    "jest": "29.7.0",
    "supertest": "7.0.0",
    "ts-jest": "29.2.5",
    "ts-node": "10.9.2",
    "typescript": "^5.7.3"
  },
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node",
    "moduleFileExtensions": [
      "ts",
      "js"
    ],
    "transform": {
      "^.+\\.ts$": "ts-jest"
    },
    "testMatch": [
      "**/*.spec.ts"
    ]
  }
}


// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "types": ["jest", "node"]
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}

// === ARCHIVO: src/main.ts ===
import express from 'express';
import 'dotenv/config';
import productsRouter from './routes/products';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/products', productsRouter);

app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

export default app;

// === ARCHIVO: src/models/product.ts ===
import { IsString, IsNumber, IsOptional, Min } from 'class-validator';

export class CreateProductDto {
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsNumber()
    @Min(0)
    price: number;

    @IsString()
    category: string;

    constructor(name: string, price: number, category: string, description?: string) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.description = description;
    }
}

export class ProductDto {
    id: string;
    name: string;
    description?: string;
    price: number;
    category: string;

    constructor(id: string, name: string, price: number, category: string, description?: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.description = description;
    }
}

export class Product {
    id: string;
    name: string;
    description?: string;
    price: number;
    category: string;

    constructor(id: string, name: string, price: number, category: string, description?: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.description = description;
    }

    static fromCreateProductDto(dto: CreateProductDto): Product {
        return new Product(
            this.generateId(),
            dto.name,
            dto.price,
            dto.category,
            dto.description
        );
    }

    static toProductDto(product: Product): ProductDto {
        return new ProductDto(
            product.id,
            product.name,
            product.price,
            product.category,
            product.description
        );
    }

    private static generateId(): string {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
}

// === ARCHIVO: src/app.ts ===
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

// === ARCHIVO: src/routes/products.ts ===
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

// === ARCHIVO: src/services/productService.ts ===
import { Product, CreateProductDto, ProductDto } from '../models/product';
import { DuplicateProductException } from '../exceptions/duplicateProductException';
import { inMemoryDatabase } from '../utils/inMemoryDatabase';

class ProductService {
    async createProduct(dto: CreateProductDto): Promise<ProductDto> {
        const existingProducts = inMemoryDatabase.getProducts();
        const duplicate = existingProducts.find(p => p.name.toLowerCase() === dto.name.toLowerCase());
        
        if (duplicate) {
            throw new DuplicateProductException(`Ya existe un producto con el nombre: ${dto.name}`);
        }
        
        if (dto.price < 0) {
            throw new Error('El precio no puede ser negativo');
        }
        
        const product = Product.fromCreateProductDto(dto);
        inMemoryDatabase.addProduct(product);
        
        return Product.toProductDto(product);
    }
    
    async getProducts(): Promise<ProductDto[]> {
        const products = inMemoryDatabase.getProducts();
        return products.map(product => Product.toProductDto(product));
    }
    
    async getProductById(id: string): Promise<ProductDto | null> {
        const product = inMemoryDatabase.getProductById(id);
        if (!product) {
            return null;
        }
        return Product.toProductDto(product);
    }
    
    async updateProduct(id: string, dto: Partial<CreateProductDto>): Promise<ProductDto | null> {
        const product = inMemoryDatabase.getProductById(id);
        if (!product) {
            return null;
        }
        
        if (dto.name && dto.name.toLowerCase() !== product.name.toLowerCase()) {
            const existingProducts = inMemoryDatabase.getProducts();
            const duplicate = existingProducts.find(p => p.id !== id && p.name.toLowerCase() === dto.name!.toLowerCase());
            if (duplicate) {
                throw new DuplicateProductException(`Ya existe un producto con el nombre: ${dto.name}`);
            }
        }
        
        const updatedProduct = new Product(
            product.id,
            dto.name || product.name,
            dto.price ?? product.price,
            dto.category || product.category,
            dto.description ?? product.description
        );
        
        inMemoryDatabase.updateProduct(updatedProduct);
        return Product.toProductDto(updatedProduct);
    }
    
    async deleteProduct(id: string): Promise<boolean> {
        return inMemoryDatabase.deleteProduct(id);
    }
}

export const productService = new ProductService();

// === ARCHIVO: src/validators/productValidator.ts ===
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

// === ARCHIVO: src/middlewares/errorHandler.ts ===
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

// === ARCHIVO: src/exceptions/duplicateProductException.ts ===
export class DuplicateProductException extends Error {
    private readonly productName: string;
    private readonly existingProductId: string | null;
    private readonly suggestedAction: string;

    constructor(productName: string, existingProductId?: string) {
        const message = `El producto '${productName}' ya existe en el catálogo`;
        super(message);
        this.name = 'DuplicateProductException';
        this.productName = productName;
        this.existingProductId = existingProductId || null;
        this.suggestedAction = 'Utilice otro nombre para el producto o actualice el producto existente';
        
        Object.setPrototypeOf(this, DuplicateProductException.prototype);
    }

    getProductName(): string {
        return this.productName;
    }

    getExistingProductId(): string | null {
        return this.existingProductId;
    }

    getSuggestedAction(): string {
        return this.suggestedAction;
    }

    getHttpStatus(): number {
        return 409;
    }

    toJSON(): object {
        return {
            error: this.name,
            message: this.message,
            statusCode: this.getHttpStatus(),
            details: {
                productName: this.productName,
                existingProductId: this.existingProductId,
                suggestedAction: this.suggestedAction
            }
        };
    }

    toResponse(): { status: number; body: object } {
        return {
            status: this.getHttpStatus(),
            body: this.toJSON()
        };
    }
}

// === ARCHIVO: src/exceptions/invalidPriceException.ts ===
export class InvalidPriceException extends Error {
    private readonly providedPrice: number | string;
    private readonly reason: string;
    private readonly minimumAllowed: number;
    private readonly validationType: 'negative' | 'zero' | 'non-numeric' | 'exceeds-limit';

    constructor(price: number | string, reason?: string) {
        let message: string;
        let validationType: 'negative' | 'zero' | 'non-numeric' | 'exceeds-limit' = 'negative';
        
        if (typeof price === 'number') {
            if (price < 0) {
                message = `El precio ${price} es inválido: no se permiten valores negativos`;
                validationType = 'negative';
            } else if (price === 0) {
                message = `El precio no puede ser cero. Use un valor positivo mayor a cero`;
                validationType = 'zero';
            } else if (price > 1000000) {
                message = `El precio ${price} excede el límite máximo permitido de 1,000,000`;
                validationType = 'exceeds-limit';
            } else {
                message = reason || `El precio ${price} es inválido`;
            }
        } else {
            message = `El valor '${price}' no es un número válido para el precio`;
            validationType = 'non-numeric';
        }
        
        super(message);
        this.name = 'InvalidPriceException';
        this.providedPrice = price;
        this.reason = reason || message;
        this.minimumAllowed = 0.01;
        this.validationType = validationType;
        
        Object.setPrototypeOf(this, InvalidPriceException.prototype);
    }

    getProvidedPrice(): number | string {
        return this.providedPrice;
    }

    getReason(): string {
        return this.reason;
    }

    getMinimumAllowed(): number {
        return this.minimumAllowed;
    }

    getValidationType(): 'negative' | 'zero' | 'non-numeric' | 'exceeds-limit' {
        return this.validationType;
    }

    getHttpStatus(): number {
        return 400;
    }

    toJSON(): object {
        return {
            error: this.name,
            message: this.message,
            statusCode: this.getHttpStatus(),
            details: {
                providedPrice: this.providedPrice,
                reason: this.reason,
                minimumAllowed: this.minimumAllowed,
                validationType: this.validationType
            }
        };
    }

    toResponse(): { status: number; body: object } {
        return {
            status: this.getHttpStatus(),
            body: this.toJSON()
        };
    }

    static validatePrice(price: number): void {
        if (typeof price !== 'number' || isNaN(price)) {
            throw new InvalidPriceException(price, 'El precio debe ser un número válido');
        }
        if (price < 0) {
            throw new InvalidPriceException(price, 'El precio no puede ser negativo');
        }
        if (price === 0) {
            throw new InvalidPriceException(price, 'El precio debe ser mayor a cero');
        }
    }
}

// === ARCHIVO: src/exceptions/notFoundException.ts ===
export class NotFoundException extends Error {
    private readonly resourceType: string;
    private readonly resourceIdentifier: string | number;
    private readonly searchFields: Record<string, unknown>;
    private readonly suggestSearch: boolean;

    constructor(resourceType: string, identifier: string | number, additionalSearchFields?: Record<string, unknown>) {
        const message = `No se encontró el ${resourceType} con identificador '${identifier}'`;
        super(message);
        this.name = 'NotFoundException';
        this.resourceType = resourceType;
        this.resourceIdentifier = identifier;
        this.searchFields = additionalSearchFields || {};
        this.suggestSearch = Object.keys(this.searchFields).length > 0;
        
        Object.setPrototypeOf(this, NotFoundException.prototype);
    }

    getResourceType(): string {
        return this.resourceType;
    }

    getResourceIdentifier(): string | number {
        return this.resourceIdentifier;
    }

    getSearchFields(): Record<string, unknown> {
        return { ...this.searchFields };
    }

    getSuggestSearch(): boolean {
        return this.suggestSearch;
    }

    getHttpStatus(): number {
        return 404;
    }

    toJSON(): object {
        const response: Record<string, unknown> = {
            error: this.name,
            message: this.message,
            statusCode: this.getHttpStatus(),
            details: {
                resourceType: this.resourceType,
                resourceIdentifier: this.resourceIdentifier
            }
        };
        
        if (this.suggestSearch) {
            response.details.searchFields = this.searchFields;
            response.suggestion = 'Intente con otros criterios de búsqueda';
        }
        
        return response;
    }

    toResponse(): { status: number; body: object } {
        return {
            status: this.getHttpStatus(),
            body: this.toJSON()
        };
    }

    static forProduct(productId: string): NotFoundException {
        return new NotFoundException('producto', productId);
    }

    static forProductByName(productName: string): NotFoundException {
        return new NotFoundException('producto', productName, { name: productName });
    }
}

// === ARCHIVO: src/utils/inMemoryDatabase.ts ===
import { Product } from '../models/product';

/**
 * Almacenamiento temporal en memoria para simular una base de datos de productos.
 * Esta implementación proporciona operaciones CRUD básicas sobre un Map.
 */
class InMemoryDatabase {
  private products: Map<string, Product> = new Map();

  /**
   * Agrega un nuevo producto al almacenamiento.
   * @param product - El producto a almacenar
   */
  add(product: Product): void {
    this.products.set(product.id, product);
  }

  /**
   * Busca un producto por su identificador único.
   * @param id - Identificador del producto
   * @returns El producto encontrado o undefined si no existe
   */
  findById(id: string): Product | undefined {
    return this.products.get(id);
  }

  /**
   * Busca un producto por su nombre.
   * @param name - Nombre del producto a buscar
   * @returns El producto encontrado o undefined si no existe
   */
  findByName(name: string): Product | undefined {
    for (const product of this.products.values()) {
      if (product.name === name) {
        return product;
      }
    }
    return undefined;
  }

  /**
   * Obtiene todos los productos almacenados.
   * @returns Array con todos los productos
   */
  findAll(): Product[] {
    return Array.from(this.products.values());
  }

  /**
   * Verifica si existe un producto con el nombre especificado.
   * @param name - Nombre a verificar
   * @returns true si existe un producto con ese nombre
   */
  existsByName(name: string): boolean {
    return this.findByName(name) !== undefined;
  }

  /**
   * Obtiene la cantidad de productos almacenados.
   * @returns Número de productos en el almacenamiento
   */
  count(): number {
    return this.products.size;
  }

  /**
   * Limpia todos los productos del almacenamiento.
   * Útil para testing y reset de estado.
   */
  clear(): void {
    this.products.clear();
  }

  /**
   * Elimina un producto por su identificador.
   * @param id - Identificador del producto a eliminar
   * @returns true si el producto fue eliminado, false si no existía
   */
  delete(id: string): boolean {
    return this.products.delete(id);
  }
}

export const inMemoryDatabase = new InMemoryDatabase();

// === ARCHIVO: src/tests/productRoutes.spec.ts ===
import request from 'supertest';
import { CreateProductDto } from '../models/product';
import { DuplicateProductException } from '../exceptions/duplicateProductException';
import { InvalidPriceException } from '../exceptions/invalidPriceException';
import { NotFoundException } from '../exceptions/notFoundException';

/**
 * Suite de pruebas para los endpoints de productos.
 * Valida el comportamiento de la API REST incluyendo validaciones,
 * manejo de errores y respuestas exitosas.
 */
describe('Product Routes', () => {
  const baseUrl = 'http://localhost:3000';

  /**
   * Limpia el estado de la base de datos antes de cada prueba
   * para evitar interferencias entre tests.
   */
  beforeEach(() => {
    const { inMemoryDatabase } = require('../utils/inMemoryDatabase');
    inMemoryDatabase.clear();
  });

  describe('POST /products', () => {
    /**
     * Verifica que se puede crear un producto válido.
     * Escenario: Envío de datos correctos debe retornar 201 Created.
     */
    it('should create a product with valid data', async () => {
      const validProduct: Partial<CreateProductDto> = {
        name: 'Test Product',
        price: 100.50,
        category: 'Electronics',
        description: 'A test product description'
      };

      const response = await request(baseUrl)
        .post('/products')
        .send(validProduct)
        .expect('Content-Type', /json/);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe(validProduct.name);
      expect(response.body.price).toBe(validProduct.price);
      expect(response.body.category).toBe(validProduct.category);
    });

    /**
     * Verifica que se rechaza un producto con precio negativo.
     * Escenario: El precio negativo debe lanzar InvalidPriceException.
     */
    it('should reject product with negative price', async () => {
      const invalidProduct = {
        name: 'Negative Price Product',
        price: -50,
        category: 'Electronics'
      };

      const response = await request(baseUrl)
        .post('/products')
        .send(invalidProduct);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });

    /**
     * Verifica que se rechaza un producto con nombre duplicado.
     * Escenario: El nombre existente debe lanzar DuplicateProductException.
     */
    it('should reject duplicate product name', async () => {
      const productData = {
        name: 'Duplicate Test',
        price: 100,
        category: 'Books'
      };

      await request(baseUrl)
        .post('/products')
        .send(productData);

      const response = await request(baseUrl)
        .post('/products')
        .send(productData);

      expect(response.status).toBe(409);
      expect(response.body).toHaveProperty('error');
    });

    /**
     * Verifica que se rechaza un producto sin nombre.
     * Escenario: Campo requerido faltante debe retornar 400.
     */
    it('should reject product without name', async () => {
      const invalidProduct = {
        price: 50,
        category: 'Clothing'
      };

      const response = await request(baseUrl)
        .post('/products')
        .send(invalidProduct);

      expect(response.status).toBe(400);
    });

    /**
     * Verifica que se rechaza un producto sin precio.
     * Escenario: Campo requerido faltante debe retornar 400.
     */
    it('should reject product without price', async () => {
      const invalidProduct = {
        name: 'No Price Product',
        category: 'Food'
      };

      const response = await request(baseUrl)
        .post('/products')
        .send(invalidProduct);

      expect(response.status).toBe(400);
    });

    /**
     * Verifica que se rechaza un producto con precio cero.
     * Escenario: Precio cero no es válido según las reglas de negocio.
     */
    it('should reject product with zero price', async () => {
      const invalidProduct = {
        name: 'Zero Price Product',
        price: 0,
        category: 'Food'
      };

      const response = await request(baseUrl)
        .post('/products')
        .send(invalidProduct);

      expect(response.status).toBe(400);
    });

    /**
     * Verifica que se acepta un producto sin descripción (campo opcional).
     * Escenario: La descripción es opcional y no debe afectar la creación.
     */
    it('should create product without optional description', async () => {
      const productData = {
        name: 'Optional Description Product',
        price: 75,
        category: 'Toys'
      };

      const response = await request(baseUrl)
        .post('/products')
        .send(productData)
        .expect('Content-Type', /json/);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.description).toBeUndefined();
    });
  });

  describe('GET /products', () => {
    /**
     * Verifica que se retorna un array vacío cuando no hay productos.
     * Escenario: Base de datos vacía debe retornar 200 con array vacío.
     */
    it('should return empty array when no products exist', async () => {
      const response = await request(baseUrl)
        .get('/products')
        .expect('Content-Type', /json/);

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBe(0);
    });

    /**
     * Verifica que se retornan todos los productos creados.
     * Escenario: Múltiples productos deben appearing en la respuesta.
     */
    it('should return all created products', async () => {
      const product1 = {
        name: 'Product One',
        price: 50,
        category: 'Electronics'
      };

      const product2 = {
        name: 'Product Two',
        price: 75,
        category: 'Books'
      };

      await request(baseUrl).post('/products').send(product1);
      await request(baseUrl).post('/products').send(product2);

      const response = await request(baseUrl)
        .get('/products')
        .expect('Content-Type', /json/);

      expect(response.status).toBe(200);
      expect(response.body.length).toBe(2);
      expect(response.body[0].name).toBe(product1.name);
      expect(response.body[1].name).toBe(product2.name);
    });

    /**
     * Verifica que los productos tienen la estructura correcta.
     * Escenario: Los DTOs de respuesta deben incluir todos los campos.
     */
    it('should return products with correct DTO structure', async () => {
      const productData = {
        name: 'DTO Test Product',
        price: 199.99,
        category: 'Sports',
        description: 'Testing DTO structure'
      };

      await request(baseUrl).post('/products').send(productData);

      const response = await request(baseUrl).get('/products');

      expect(response.status).toBe(200);
      expect(response.body[0]).toHaveProperty('id');
      expect(response.body[0]).toHaveProperty('name');
      expect(response.body[0]).toHaveProperty('price');
      expect(response.body[0]).toHaveProperty('category');
      expect(response.body[0]).toHaveProperty('description');
    });
  });

  describe('Error Handling', () => {
    /**
     * Verifica que los errores 400 tienen formato consistente.
     * Escenario: Los errores de validación deben seguir un formato uniforme.
     */
    it('should return consistent error format for 400 errors', async () => {
      const invalidProduct = {
        name: '',
        price: -10,
        category: 'Test'
      };

      const response = await request(baseUrl)
        .post('/products')
        .send(invalidProduct);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body).toHaveProperty('message');
    });

    /**
     * Verifica que los errores 409 tienen formato consistente.
     * Escenario: Los errores de conflicto deben seguir un formato uniforme.
     */
    it('should return consistent error format for 409 errors', async () => {
      const productData = {
        name: 'Conflict Test',
        price: 100,
        category: 'Test'
      };

      await request(baseUrl).post('/products').send(productData);

      const response = await request(baseUrl)
        .post('/products')
        .send(productData);

      expect(response.status).toBe(409);
      expect(response.body).toHaveProperty('error');
      expect(response.body).toHaveProperty('message');
    });
  });
});
```
