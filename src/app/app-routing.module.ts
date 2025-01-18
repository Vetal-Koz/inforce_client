import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UrlsTableComponent} from "./url-shortener/urls-table/urls-table.component";
import {AddUrlComponent} from "./url-shortener/add-url/add-url.component";
import {UrlsInfoComponent} from "./url-shortener/urls-infp/urls-info.component";
import {AboutInfoComponent} from "./about/about-info/about-info.component";
import {EditAboutInfoComponent} from "./about/edit-about-info/edit-about-info.component";
import {LoginComponent} from "./auth/login/login.component";

const routes: Routes = [
  {path: '', redirectTo: '/urls', pathMatch: 'full'},
  {path: 'urls', component: UrlsTableComponent},
  { path: 'add-url', component: AddUrlComponent },
  { path: 'url-info/:id', component: UrlsInfoComponent },
  { path: 'about-info', component: AboutInfoComponent },
  { path: 'about-info-edit', component: EditAboutInfoComponent },
  { path: 'login', component: LoginComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
