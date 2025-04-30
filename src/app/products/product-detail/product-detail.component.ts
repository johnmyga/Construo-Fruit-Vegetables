import { Component, inject, computed, signal } from '@angular/core';
import { ActivatedRoute }               from '@angular/router';
import { ProductService }               from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule, NgModel } from '@angular/forms';
import { ProductModel } from '../../core/models/product.model';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  imports: [FormsModule, MatButtonModule, MatInput, MatFormField, MatLabel],
  providers: [NgModel]
})
export class ProductDetailComponent {
  private route       = inject(ActivatedRoute);
  private svc         = inject(ProductService);
  private cartService = inject(CartService);

  // reactive paramMap → id
  private paramMap = toSignal(
    this.route.paramMap,
    { initialValue: this.route.snapshot.paramMap }
  );
  public readonly id      = computed(() => Number(this.paramMap().get('id')));
  public readonly product = computed(() =>
    this.svc.products().find(p => p.id === this.id())
  );

  // user‐entered quantity (default 1)
  public quantity: number = 1;

  // Called when “Add to Cart” is clicked
  onAddToCart() {
    if(this.product()){  
      this.cartService.addItem((this.product() as ProductModel), this.quantity)
    }
  }
}