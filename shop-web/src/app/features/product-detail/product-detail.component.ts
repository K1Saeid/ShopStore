import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { NgIf, NgForOf, NgStyle } from '@angular/common';
import { ProductListComponent } from '../../Core/container/product-list/product-list.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf, NgForOf, NgStyle], // ✅ ProductListComponent حذف شد
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() productListComp!: ProductListComponent;
  product: any;
  colors: string[] = [];
  sizes: string[] = [];
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.productListComp?.selectedProduct) {
      this.product = this.productListComp.selectedProduct;
      this.colors = this.product.colors?.split(',').map((c: string) => c.trim().toLowerCase());
      this.sizes = this.product.sizes?.split(',').map((s: string) => s.trim());
      this.loading = false;
      return;
    }

    
  }

  closeDetail() {
    this.productListComp.selectedProduct = undefined;
  }

}
