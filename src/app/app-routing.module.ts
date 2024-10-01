import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PositionsComponent } from './pages/positions/positions.component';
import { HomeComponent } from './pages/home/home.component';
import { CollaboratorsComponent } from './pages/collaborators/collaborators.component';
import { CollaboratorsFormComponent } from './pages/collaborators/collaborators-form/collaborators-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  { path: 'positions', component: PositionsComponent },
  { path: 'home', component: HomeComponent },

  //colaboradores
  { path: 'collaborators', component: CollaboratorsComponent },
  { path: 'collaborators/new', component: CollaboratorsFormComponent },
  { path: 'collaborators/edit/:id', component: CollaboratorsFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
