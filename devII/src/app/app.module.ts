import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnaliseDocsComponent } from './analise-docs/analise-docs.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormularioCadastroAlunoComponent } from './formulario-cadastro-aluno/formulario-cadastro-aluno.component';
import { FormularioServidorComponent } from './formulario-servidor/formulario-servidor.component';
import { ListaSolicitacoesAlunoComponent } from './lista-solicitacoes-aluno/lista-solicitacoes-aluno.component';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { DetalhesSolicitacaoComponent } from './detalhes-solicitacao/detalhes-solicitacao.component';
import { MatDialogModule } from '@angular/material/dialog';

const ANGULAR_MODULES = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  HttpClientModule,
  MatToolbarModule,
  ReactiveFormsModule,
  FormsModule,
  MatDialogModule
];

const COMPONENTS = [
  AppComponent,
  AnaliseDocsComponent,
  LoginComponent,
  FormularioCadastroAlunoComponent,
  FormularioServidorComponent
];

@NgModule({
  declarations: [...COMPONENTS, ListaSolicitacoesAlunoComponent, SolicitacaoComponent, DetalhesSolicitacaoComponent],
  imports: [...ANGULAR_MODULES, CoreModule, SharedModule],


  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
