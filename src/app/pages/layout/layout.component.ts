import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent {

  constructor(private router: Router){}

  public logout(): void {
    localStorage.clear()
    this.router.navigateByUrl('login')
  }

}