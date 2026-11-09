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