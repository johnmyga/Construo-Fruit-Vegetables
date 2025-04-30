import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProductModel } from '../../core/models/product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  product = input.required<ProductModel>();
}
