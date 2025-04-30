import { Component, inject }        from '@angular/core';
import { CommonModule, NgFor }      from '@angular/common';
import { MatButtonModule }          from '@angular/material/button';
import { MatTableModule }           from '@angular/material/table';
import { CartService, CartItem }    from '../../core/services/cart.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIcon
  ],
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
  private cartService = inject(CartService);
  public readonly items = this.cartService.items;
  public readonly totalAmount = this.cartService.totalValue;

  onRemove(id: number) {
    this.cartService.removeItem(id);
  }
}
