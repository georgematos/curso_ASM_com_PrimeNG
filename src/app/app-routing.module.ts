import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'usuario', component: UsuarioComponent},
  { path: '', pathMatch:'full', redirectTo: '/home'},
];

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
