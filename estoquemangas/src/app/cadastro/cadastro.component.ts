import { Component, OnInit } from '@angular/core';
import { EndpointsService } from '../endpoints.service';
import { ToastsManager } from 'ng2-toastr';
import { StateService } from '@uirouter/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public AdicionarUsuarioRequest: any = {}
  public senhaNaoConfere: boolean = false;
  public senhaConfirma;



  constructor(private webservices: EndpointsService, private mensagem: ToastsManager, private rota: StateService) { }

  ngOnInit() {
  }


  verificarSenha() {

    if (this.AdicionarUsuarioRequest.senha != this.senhaConfirma) {

      this.senhaNaoConfere = true;
      return;
    } else {
      this.senhaNaoConfere = false;

    }

  }

  efetuarCadastro() {

    if (this.AdicionarUsuarioRequest.senha != this.senhaConfirma) {

      this.senhaNaoConfere = true;
      return;
    }
    //id: "0b7703b5-4726-4d0d-b592-fca8dc3b9851", nomeCompleto: "ulisses de Lourenço", email: "ulissescastro_RJ@gmail.com", mensagem: "Operação realizada com sucesso."}
    this.webservices.efetuarCadastro(this.AdicionarUsuarioRequest).then(request => {



      

      if (request.mensagem) {
        this.mensagem.success(request.mensagem)

        setTimeout(()=>{
          this.rota.go("login");
        },1000)
       
      } else {

        let resposta = request;
        let erro: any = {};
        erro = resposta.errors[0];
        this.mensagem.error(erro.property + ' - ' + erro.message)

      }



    }).catch()

  }
}

