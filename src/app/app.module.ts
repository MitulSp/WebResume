import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationSidePanelComponent } from './shared/components/navigation-side-panel/navigation-side-panel.component';
import { MainContainerComponent } from './core/main-container/main-container.component';
import { AboutComponent } from './core/about/about.component';
import { ServicesComponent } from './core/services/services.component';
import { PortfolioComponent } from './core/portfolio/portfolio.component';
import { ContactComponent } from './core/contact/contact.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationSidePanelComponent,
    MainContainerComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
