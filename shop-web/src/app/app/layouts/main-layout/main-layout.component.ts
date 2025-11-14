import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../Core/header/header.component';
import { ContainerComponent } from '../../../Core/container/container.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl:'./main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {}
