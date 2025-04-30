import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from "./products/product-list/product-list.component";
import { LayoutComponent } from "./layout/layout/layout.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'joao-fruit-vegetables-store';
}
