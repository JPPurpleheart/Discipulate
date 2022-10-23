import { Component, OnInit } from '@angular/core';
import { APIConnectionsService } from '../../core/services/apiconnections.service';
import { TokenHandlerService } from '../../core/services/token-handler.service';
import { AuthHandlerService } from 'src/app/core/services/auth-handler.service';
import{ Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  }

  constructor(private apiconnection: APIConnectionsService, private tokenHandler: TokenHandlerService, private authHandler: AuthHandlerService, private router: Router) { }

  public error = null;

  ngOnInit(): void {
  }

  submitLogin() {
    // console.log(this.form);
    return this.apiconnection.login(this.form).subscribe(
      data=>this.handleResponse(data),
      error=>this.handleError(error)
    );
  }

  handleResponse(data:any) {
    console.log(data.access_token);
    this.tokenHandler.handle(data.access_token);
    this.authHandler.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error: any) {
    this.error = error.error.error;
  }

}
