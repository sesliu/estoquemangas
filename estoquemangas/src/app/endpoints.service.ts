import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { toJson } from '@uirouter/core';
import { jsonpFactory } from '@angular/http/src/http_module';
import { HttpInterceptor } from './InterceptedHttp';

@Injectable()
export class EndpointsService {

  private _url : string = "http://estoquemangas.azurewebsites.net/api"

  constructor(private http: Http) {
    
  }


  autenticarLogin(AutenticarUsuarioRequest){

    let body = { AutenticarUsuarioRequest };

    return this.http.post(this._url+"/v1/Autenticacao/Autenticar",body)
           .toPromise()
           .then(request => toJson())
            

  }

  efetuarCadastro(AdicionarUsuarioRequest){

    let body = { AdicionarUsuarioRequest }

    return this.http.post(this._url+"/v1/Usuario/Adicionar", AdicionarUsuarioRequest)
          .toPromise()
          .then(response => response.json())
          .catch(response => response.json())


  }


}
