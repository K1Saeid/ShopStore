import { Component, Input } from '@angular/core';
import { NgForOf, NgIf, NgStyle } from "@angular/common";
import { ProductComponent } from "./product/product.component";
import { FilterComponent } from "./filter/filter.component";
import { SearchComponent } from '../search/search.component';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../Models/Products';


@Component({
  selector: 'product-list',
  standalone: true,
  imports: [NgForOf, ProductComponent, FilterComponent , NgIf , SearchComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  
  products: any[] = [];
  selectedProduct: Product;
  totalProducts: number = 0;
  totalProductInstock: number = 0;
  totalProductOutofstock: number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;

      
      this.totalProducts = this.products.length;
      this.totalProductInstock = this.products.filter(p => p.inStock === true).length;
      this.totalProductOutofstock = this.products.filter(p => p.inStock === false).length;
    });
  }


  
  @Input()
  searchText: string = '';
  onSearchChanged(value: string) {
    this.searchText = value;
  }


  selectedFilterRadioButton: string = 'All';  

  
  onFilterChanged(value: string) {
    this.selectedFilterRadioButton = value;
  }
  shouldShowProduct(prod: any): boolean {
    const matchesFilter =
      this.selectedFilterRadioButton === 'All' ||
      prod.inStock.toString() === this.selectedFilterRadioButton;

    const matchesSearch =
      this.searchText === '' ||
      prod.name.toLowerCase().includes(this.searchText.toLowerCase());

    return matchesFilter && matchesSearch;
  }
  onSelectProduct(product: Product) { // 👈 تابع جدید
    this.selectedProduct = product;
  }

}
