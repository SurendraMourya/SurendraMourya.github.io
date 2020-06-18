import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  Injectable,
  ErrorHandler,
  Inject,
  PLATFORM_ID,
  APP_ID
} from '@angular/core'

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { MaterialModule } from './shared/modules/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { HomeComponent } from './home/home.component'

import { IntroComponent } from './home/intro/intro.component'
import { ContactComponent } from './home/contact/contact.component'
import { BiographyComponent } from './home/biography/biography.component'
import { PortfolioComponent } from './home/portfolio/portfolio.component'
import { FooterComponent } from './shared/components/footer/footer.component'


import { isPlatformBrowser } from '@angular/common'
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    IntroComponent,
    PortfolioComponent,
    BiographyComponent,
    ContactComponent,
    FooterComponent,    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId)
      ? 'in the browser'
      : 'on the server'
    console.log(`Running ${platform} with appId=${appId}`)
  }
}
