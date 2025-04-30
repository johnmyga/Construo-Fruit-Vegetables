import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { ActivatedRoute }                                from '@angular/router';
import { MatPaginatorModule, PageEvent }                 from '@angular/material/paginator';
import { CommonModule }                           from '@angular/common';
import { ProductCardComponent }                          from '../product-card/product-card.component';
import { ProductService }                                from '../../core/services/product.service';
import {MatButtonToggleChange, MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    ProductCardComponent, 
    MatButtonToggleModule
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  private route          = inject(ActivatedRoute);
  private productService = inject(ProductService);

  // signal for full filtered list
  public readonly products = this.productService.products;

  // pagination
  public readonly pageSize   = 6;
  public pageIndex           = signal(0);

  // slice out current page
  public readonly pagedProducts = computed(() => {
    const all = this.products();
    const start = this.pageIndex() * this.pageSize;
    return all.slice(start, start + this.pageSize);
  });

  // total length for paginator
  public readonly length = computed(() => this.products().length);

  ngOnInit(): void {
    this.route.data.subscribe(({ filter }) => {
      this.productService.resetInputFilters()
      if (filter === 'Fruit' || filter === 'Vegetable') {
        this.productService.filterByType(filter);
      } else {
        this.productService.resetFilters();
      }
      this.pageIndex.set(0);  // reset to first page
    });
  }

  onPage(event: PageEvent) {
    this.pageIndex.set(event.pageIndex);
  }

  filterApplied(event: MatButtonToggleChange){
    console.log(event);
    this.productService.filterByAtributte(event.value)
    
  }
}
