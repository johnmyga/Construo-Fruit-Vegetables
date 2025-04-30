import { computed, Injectable, signal } from '@angular/core';
import { ProductModel } from '../../core/models/product.model';
import { MOCK_PRODUCTS } from '../../mock/data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _products = signal<ProductModel[]>(MOCK_PRODUCTS);
  private _searchQuery = signal<string>('')
  private _searchCat = signal<string[]>([])

  private _test = computed(() => {
    return this._products().filter((el) =>
      el.name.toLowerCase().includes(this._searchQuery().toLowerCase())
      && this._searchCat().every(attribute => !!el[attribute as keyof ProductModel])
    )
  })

  get products() {
    return this._test;
  }

  filterByName(query: string) {
    this._searchQuery.set(query)
  }

  resetFilters() {
    this._products.set(MOCK_PRODUCTS);
  }

  filterByType(type: 'Fruit' | 'Vegetable') {
    this._products.set(
      MOCK_PRODUCTS.filter(p => p.type === type)
    );
  }

  filterByAtributte(attr: string[]) {
    this._searchCat.set(attr)
  }

  resetInputFilters(){
    this._searchCat.set([])
    this._searchQuery.set('')
  }

}
