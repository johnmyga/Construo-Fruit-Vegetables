import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductService } from '../../core/services/product.service';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { MatBadge } from '@angular/material/badge';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterLink,
    MatBadge
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private productService = inject(ProductService);
  private cartService = inject(CartService)

  public readonly cartCount = this.cartService.totalQuantity;

  onSearch(value: string) {
    this.productService.filterByName(value);
  }

}
