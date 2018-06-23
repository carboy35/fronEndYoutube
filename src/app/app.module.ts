import { ColorerDirective } from './directivas/colorer-directive';
import { NgbdModalContent } from './modal-component';
import { NgbdModalComponent } from './modal-component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import  {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CreateUserComponent,
    NgbdModalComponent,
    NgbdModalContent,
    ColorerDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[NgbdModalContent]
})
export class AppModule { }
