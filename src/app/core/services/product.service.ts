import { Injectable, signal } from '@angular/core';
import { ProductModel } from '../../core/models/product.model';
import { MOCK_PRODUCTS } from '../../mock/data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _products = signal<ProductModel[]>(MOCK_PRODUCTS);

  get products() {
    return this._products;
  }

  filterByName(query: string) {
    this._products.set(
      MOCK_PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }

  resetFilters() {
    this._products.set(MOCK_PRODUCTS);
  }

  filterByType(type: 'Fruit' | 'Vegetable'): void {
    this._products.set(
      MOCK_PRODUCTS.filter(p => p.type === type)
    );
  }

}
