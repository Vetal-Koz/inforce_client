import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlsTableComponent } from './url-shortener/urls-table/urls-table.component';
import { UrlsInfoComponent } from './url-shortener/urls-infp/urls-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AddUrlComponent } from './url-shortener/add-url/add-url.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AboutInfoComponent } from './about/about-info/about-info.component';
import { EditAboutInfoComponent } from './about/edit-about-info/edit-about-info.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlsTableComponent,
    UrlsInfoComponent,
    AddUrlComponent,
    AboutInfoComponent,
    EditAboutInfoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
