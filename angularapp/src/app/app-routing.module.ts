import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminViewResortComponent } from './components/admin-view-resort/admin-view-resort.component';
import { AdminViewBookingComponent } from './components/admin-view-booking/admin-view-booking.component';
import { AdminViewReviewComponent } from './components/admin-view-review/admin-view-review.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { CustomerViewBookingComponent } from './components/customer-view-booking/customer-view-booking.component';
import { CustomerViewResortComponent } from './components/customer-view-resort/customer-view-resort.component';
import { CustomerViewReviewComponent } from './components/customer-view-review/customer-view-review.component';
import { AddResortComponent } from './components/add-resort/add-resort.component';
import { AddBookingComponent } from './components/add-booking/add-booking.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { ErrorComponent } from './components/error/error.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  // {path:"", component:HomeComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"registration", component:RegistrationComponent},
  {path:"login", component:LoginComponent},
  {path:"adminDashboard", component:AdminDashboardComponent,canActivate:[AuthGuard]},
  {path:"addResort", component:AddResortComponent,canActivate:[AuthGuard]},
  {path:"adminViewResort", component:AdminViewResortComponent,canActivate:[AuthGuard]},
  {path:"adminViewBooking", component:AdminViewBookingComponent,canActivate:[AuthGuard]},
  {path:"adminViewReview", component:AdminViewReviewComponent,canActivate:[AuthGuard]},
  {path:"customerDashboard", component:CustomerDashboardComponent,canActivate:[AuthGuard]},
  {path:"customerViewBooking", component:CustomerViewBookingComponent,canActivate:[AuthGuard]},
  {path:"customerViewResort", component:CustomerViewResortComponent,canActivate:[AuthGuard]},
  {path:"customerViewReview", component:CustomerViewReviewComponent,canActivate:[AuthGuard]},
  {path:"addBooking", component:AddBookingComponent,canActivate:[AuthGuard]},
  {path:"addReview", component:AddReviewComponent,canActivate:[AuthGuard]},
  { path: "error", component: ErrorComponent },
  { path: '**', redirectTo: '/error' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
