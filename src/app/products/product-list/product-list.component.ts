import { Component, effect, inject, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { NgFor } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [ ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  public readonly products = this.productService.products;

  ngOnInit(): void {
    this.route.data.subscribe(({ filter }) => {
      if (filter === 'Fruit' || filter === 'Vegetable') {
        this.productService.filterByType(filter);
      } else {
        this.productService.resetFilters();
      }
    });
  }
}