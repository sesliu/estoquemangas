import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UIRouterModule, RootModule } from '@uirouter/angular';
import { ToastModule } from 'ng2-toastr';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';
import { EndpointsService } from './endpoints.service';
import { Error500Component } from './error/error500/error500.component';
import { Error404Component } from './error/error404/error404.component';
import { HttpInterceptor } from './InterceptedHttp';


// Rotas da URL

const config = {};

const rootModule: RootModule = {


  states: [
    {
      name: "login",
      url: "/login",
      component: LoginComponent
    },
    {
      name: "cadastro",
      url: "/cadastro",
      component: CadastroComponent
    },

    {
      name: "alteraSenha",
      url: "/alterarsenha",
      component: AlterarSenhaComponent

    },

    {
      name: "erro500",
      url: "/erro500",
      component: Error500Component

    },

    {
      name: "erro404",
      url: "/erro404",
      component: Error404Component

    }

  ],

  useHash: false,
  otherwise: { state: "login" }

}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    AlterarSenhaComponent,
    Error500Component,
    Error404Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgxMaskModule.forRoot(config),
    UIRouterModule.forRoot(rootModule),
    ToastModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [UIRouterModule, EndpointsService, HttpInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
