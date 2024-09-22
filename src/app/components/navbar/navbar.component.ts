import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  faBars = faBars;
  ishidden = true;
  shoppingIcon = faShoppingBag;

  toggleHide() {
    this.ishidden = !this.ishidden;
  }
}
