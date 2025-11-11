import { NgStyle,NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-product',
  imports: [NgStyle, NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  @Input()
  product:any;
}
