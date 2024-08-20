import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { AddBookingComponent } from './components/add-booking/add-booking.component';
import { AddResortComponent } from './components/add-resort/add-resort.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminViewBookingComponent } from './components/admin-view-booking/admin-view-booking.component';
import { AdminViewResortComponent } from './components/admin-view-resort/admin-view-resort.component';
import { AdminViewReviewComponent } from './components/admin-view-review/admin-view-review.component';
import { AuthguardComponent } from './components/authguard/authguard.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { CustomerViewBookingComponent } from './components/customer-view-booking/customer-view-booking.component';
import { CustomerViewResortComponent } from './components/customer-view-resort/customer-view-resort.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerViewReviewComponent } from './components/customer-view-review/customer-view-review.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthorizationInterceptor } from './interceptor/authorization-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
    AddBookingComponent,
    AddResortComponent,
    AddReviewComponent,
    AdminDashboardComponent,
    AdminViewBookingComponent,
    AdminViewResortComponent,
    AdminViewReviewComponent,
    AuthguardComponent,
    CustomerDashboardComponent,
    CustomerViewBookingComponent,
    CustomerViewResortComponent,
    LoginComponent,
    CustomerViewReviewComponent,
    NavbarComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:
      HTTP_INTERCEPTORS
      ,
      useClass
      :
      AuthorizationInterceptor
      ,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
