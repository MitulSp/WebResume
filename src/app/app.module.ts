import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { FloatNavigationPanelComponent } from './shared/components/float-navigation-panel/float-navigation-panel.component';
import { BaseRequestService } from './services/base-request.service';

import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

export function loadBaseInfo(beasAPIURLConfig: BaseRequestService) {
  return () => beasAPIURLConfig.loadAPIConfig();
}
export function loadConfigurations(configService: BaseRequestService) {
  return () => configService.loadAppConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationSidePanelComponent,
    MainContainerComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    FloatNavigationPanelComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [BaseRequestService],
      useFactory: loadBaseInfo,
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [BaseRequestService],
      useFactory: loadConfigurations,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
