import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProductModel } from '../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  product = input.required<ProductModel>();
}
