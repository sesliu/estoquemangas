import { Injectable } from '@angular/core';

@Injectable()
export class EndpointsService {

  private _url : string = "http://estoquemangas.azurewebsites.net/api"

  constructor() { }

}
