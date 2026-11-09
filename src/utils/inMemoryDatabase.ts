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