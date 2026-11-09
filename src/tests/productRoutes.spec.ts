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