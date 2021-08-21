import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detalle } from './components/Detalle/detalle.component';
import { Home } from './components/Home/home.component';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'detalle/:codigo', component:Detalle }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
