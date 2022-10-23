import { Component, OnInit } from '@angular/core';
import { APIConnectionsService } from '../../core/services/apiconnections.service';
import { TokenHandlerService } from '../../core/services/token-handler.service';

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

  constructor(private apiconnection: APIConnectionsService, private tokenHandler: TokenHandlerService) { }

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
  }

  handleError(error: any) {
    this.error = error.error.error;
  }

}
