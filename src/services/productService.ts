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