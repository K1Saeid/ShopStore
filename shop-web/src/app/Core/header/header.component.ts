import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { TopHeaderComponent } from "./top-header/top-header.component";
import { UserService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule, NgIf, RouterLink, TopMenuComponent, MainMenuComponent],
})
export class HeaderComponent implements OnInit {
  user: any = null;
  menuOpen: boolean = false;

  constructor(private userService: UserService, private el: ElementRef, private router: Router) {}

  ngOnInit(): void {
    this.userService.currentUser$.subscribe(u => this.user = u);
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
  }

  toggleMenu(ev: MouseEvent) {
  
    this.menuOpen = !this.menuOpen;
  }

  logout(ev?: MouseEvent): void {
    ev?.preventDefault();//prevent page reload
    this.userService.logout();// verwijder user uit service
    localStorage.removeItem('user');// verwijder user uit local storage
    this.user = null;
    this.menuOpen = false;
    this.router.navigate(['/']);
  }
  @HostListener('document:click', ['$event'])
  onDocClick(e: MouseEvent): void {
    if (this.menuOpen && !this.el.nativeElement.contains(e.target)) {
      this.menuOpen = false;
    }
  }

}
