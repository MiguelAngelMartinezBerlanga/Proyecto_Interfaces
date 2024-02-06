import { Injectable } from '@angular/core';
import { Producto } from 'src/app/shared/models/product';

@Injectable({ providedIn: 'root' })
export class SharedService {
    private _product: Producto = {}

    setProducto(value: Producto) {
        this._product = value
    }
    
    get producto(): Producto {
        return this._product;
    }

    private _productsCesta: Producto[] = [];

    get productsCesta() {
        return [...this._productsCesta];
    }

    addProduct(producto: Producto) {
        this._productsCesta.push(producto)
    }

    clearProducts(): void {
        this._productsCesta = [];
    }

    private _subtotal: number = 0;

    calcularSubtotal() {
        this._subtotal = 0;

        this.productsCesta.forEach((producto: Producto) => {
            this._subtotal += (producto.price ?? 0) * (producto.cantidad ?? 0);
        });
    }

    get subtotal() {
        return this._subtotal
    }

    private _total: number = 0;

    private _impuestos: number = 0.1;

    calcularTotal() {
        this._total = 0;
        this._total += this.subtotal + (this.subtotal * this._impuestos)
    }

    get total() {
        return this._total
    }

    get impuestos() {
        return this._impuestos
    }
}