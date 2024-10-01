import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CollaboratorsFormComponent } from './pages/collaborators/collaborators-form/collaborators-form.component';
import { CollaboratorsComponent } from './pages/collaborators/collaborators.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CollaboratorsComponent,
    CollaboratorsFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
