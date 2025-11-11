import { Component } from '@angular/core';
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { TopHeaderComponent } from "./top-header/top-header.component"; 

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [TopMenuComponent, MainMenuComponent, TopHeaderComponent]
})
export class HeaderComponent {
}
