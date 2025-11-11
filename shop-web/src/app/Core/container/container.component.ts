import { Component, input, ViewChild } from '@angular/core';
import { SearchComponent } from "./search/search.component";
import { NgForOf, NgIf } from "@angular/common";
import { ProductListComponent } from "../../Core/container/product-list/product-list.component";
import { ProductDetailComponent } from "../../features/product-detail/product-detail.component";

@Component({
  selector: 'app-container',
  imports: [ ProductListComponent, ProductDetailComponent, NgIf],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
 // name = "John Smith";
//  addToCart: number = 0;
//   product ={
//     name:'iPhone 14 Pro',
//     price:999,
//     color:'Space Black',
//     discount:8.5,
//     inStock: 8,
//     pImage:'/assets/images/Iphone.jpg'
//   }
//  getdiscountedPrice():number{
//     return this.product.price - (this.product.price * this.product.discount / 100);
//  }

//   onNameChange(event:any){
//     //this.name = event.target.value;
//  }
//  decrementCartValue(){
//   if(this.addToCart > 0){
//     this.addToCart--;
//   }
//  }
//   incrementCardValue(){
//   if(this.product.inStock > this.addToCart){
//     this.addToCart++;
//   }
//  }
  listOfString: string[] = ['Mens Wear', 'Womens Wear', 'Kids Wear', 'Electronics', 'Home Appliances', 'Books', 'Toys', 'Sports Equipment'];
  searchText: string = '';  

  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;
  setSearchText( value: string) {
    this.searchText = value;
  }

  
} 
