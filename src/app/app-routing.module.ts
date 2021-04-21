import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriaComponent } from './pasta/historia/historia.component';
import { AlunosComponent } from './pasta/alunos/alunos.component';
import { ProfessoresComponent } from './pasta/professores/professores.component';

const routes: Routes = [

  { path: 'alunos', component: AlunosComponent},
{ path: 'historia', component: HistoriaComponent},
{ path: 'professores', component: ProfessoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
