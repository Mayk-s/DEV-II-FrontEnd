import { DetalhesSolicitacaoComponent } from './../detalhes-solicitacao/detalhes-solicitacao.component';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.scss']
})
export class SolicitacaoComponent {

  @Input() solicitacao = {
    titulo: 'teste',
    conteudo:'teste conteudo',
    status:'negado'
  }

  constructor(private dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DetalhesSolicitacaoComponent, {
      // width: '80%',
      // height: '80%',

      data: this.solicitacao // Passa os dados da solicitação para o modal
    });

    dialogRef.afterClosed().subscribe(result => {
      // Lógica a ser executada após o fechamento do modal, se necessário
    });
  }



  statusSolicitacao(): string{
    if(this.solicitacao.status == 'aprovado'){
      return 'statusColor1'
    }

    if(this.solicitacao.status == 'em andamento'){
      return 'statusColor2'
    }

    if(this.solicitacao.status == 'negado'){
      return 'statusColor3'
    }
    return 'statusColor1'
  }

}
