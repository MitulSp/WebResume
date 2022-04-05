import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { ContactComponent } from './core/contact/contact.component';
import { MainContainerComponent } from './core/main-container/main-container.component';
import { PortfolioComponent } from './core/portfolio/portfolio.component';
import { ServicesComponent } from './core/services/services.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  }, {
    path: 'Home',
    component: MainContainerComponent
  }, {
    path: 'About',
    component: AboutComponent
  }, {
    path: 'Services',
    component: ServicesComponent
  }, {
    path: 'Portfolio',
    component: PortfolioComponent
  }, {
    path: 'Contact',
    component: ContactComponent
  }, {
    path: '**',
    component: MainContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
