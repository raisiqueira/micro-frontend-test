import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPageComponent } from './app-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'hey-ng',
    component: AppPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
