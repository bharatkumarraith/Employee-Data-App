import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UsersComponent } from './users/users.component';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddUserComponent } from './add-user/add-user.component';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddUserComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,

    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
