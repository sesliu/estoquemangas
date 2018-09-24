import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor (public mensagem : ToastsManager, 
               vRef : ViewContainerRef){

this.mensagem.setRootViewContainerRef(vRef);

}
}
