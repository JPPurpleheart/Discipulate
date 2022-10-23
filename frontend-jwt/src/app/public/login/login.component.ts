import { Component, OnInit } from '@angular/core';
import { APIConnectionsService } from '../../core/services/apiconnections.service';

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

  constructor(private apiconnection: APIConnectionsService) { }

  public error = null;

  ngOnInit(): void {
  }

  submitLogin() {
    console.log(this.form);
    return this.apiconnection.login(this.form).subscribe(
      data=>console.log(data),
      error=>this.handleError(error)
    );
  }

  handleError(error: any) {
    this.error = error.error.error;
  }

}
