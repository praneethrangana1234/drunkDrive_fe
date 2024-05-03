import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';


@Component({
  selector: 'app-underwriting-navigation',
  templateUrl: './underwriting-navigation.component.html',
  styleUrls: ['./underwriting-navigation.component.scss']
})
export class UnderwritingNavigationComponent implements OnInit {

  @ViewChild('drawer', { static: false }) drawer: MatSidenav;

  constructor(
    private breakpointObserver: BreakpointObserver,
    
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  isHandset$: Observable<any> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  async toggle() {
    // await this.sleep();
    this.drawer.toggle();
  }

  logout(): void {
    //this._authService.logout();
    //this._router.navigate(['/auth/login']);
    this._router.navigate(['']);

  }

}
