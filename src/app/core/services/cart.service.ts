import { Injectable, signal, computed } from '@angular/core';
import { ProductModel } from '../models/product.model';

export interface CartItem {
  product: ProductModel;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private _items = signal<Record<number, CartItem>>({});
  totalValue = computed(() => {
    return this.items()
      .reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );
  })

  public readonly items = computed(() => Object.values(this._items()));

  // Total count (sum of quantities)
  public readonly totalQuantity = computed(() =>
    this.items().reduce((sum, item) => sum + item.quantity, 0)
  );

  addItem(product: ProductModel, qty: number) {
    const id = product.id;
    const current = this._items()[id];
    const updatedQty = (current?.quantity ?? 0) + qty;

    this._items.update(items => ({
      ...items,
      [id]: { product, quantity: updatedQty }
    }));
    console.log('MY ITEMS :',this.items());
    
  }

  removeItem(productId: number) {
    this._items.update(items => {
      const clone = { ...items };
      delete clone[productId];
      return clone;
    });
  }
}
