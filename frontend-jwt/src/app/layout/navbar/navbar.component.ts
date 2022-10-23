import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenHandlerService } from 'src/app/core/services/token-handler.service';
import { AuthHandlerService } from 'src/app/core/services/auth-handler.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn: boolean = false;

  constructor(private authHandler: AuthHandlerService, private tokenHandler: TokenHandlerService, private router: Router) { }

  ngOnInit(): void {
    this.authHandler.authStatus.subscribe(
      value=>{
        this.loggedIn = value;
      }
    );
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.tokenHandler.remove();
    this.authHandler.changeAuthStatus(false);
    this.router.navigateByUrl("/login");
  }

}
