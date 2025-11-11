import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Core/header/header.component";
import { TopHeaderComponent } from "./Core/header/top-header/top-header.component";
import { ContainerComponent } from "./Core/container/container.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ContainerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-web';
}

