import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/core';
import { EndpointsService } from '../endpoints.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public AutenticarUsuarioRequest : any  = {};

  constructor(private rota: StateService, private webservices : EndpointsService ) { }

  ngOnInit() {
  }


  autenticar(){

    this.webservices.autenticarLogin(this.AutenticarUsuarioRequest).then( request =>{

          console.log(request)});
    };
    
  }




