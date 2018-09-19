import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { UIRouterModule, RootModule } from '@uirouter/angular';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';


// Rotas da URL

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
      name: "alterarSenha",
      url: "/alterarsenha",
      component: AlterarSenhaComponent

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
    AlterarSenhaComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot(rootModule),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
