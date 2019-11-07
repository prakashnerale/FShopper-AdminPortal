import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './core/app.routing';
import 'hammerjs';
import { CustomMaterialModule } from './core/material.module';//material module is imported from core folder
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import { LoginService } from './services/login.service';
import {AddItemService} from './services/add-item.service';
import { ToastrServiceService } from './Services/toastr-service.service';
import { UploadImageService } from './Services/upload-image.service';
import { GetItemlistService } from './Services/get-itemlist.service';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ViewListComponent } from './components/view-list/view-list.component';
import { ViewItemComponent } from './components/view-item/view-item.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    HomePageComponent,
    AddItemComponent,
    ViewListComponent,
    ViewItemComponent,
    EditItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    routing,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  
  providers: [
    LoginService,
    AddItemService,
    ToastrServiceService,
    UploadImageService,
    GetItemlistService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
