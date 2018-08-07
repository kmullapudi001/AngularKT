import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule   } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { DummyComponent } from './dummy/dummy.component';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import { BoldHoverDirective } from './bold.directive';
import { BindingsComponent } from './bindings/bindings.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    DummyComponent,
    BoldHoverDirective,
    BindingsComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, AppRoutingModule, HttpModule,FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
