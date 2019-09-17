import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { ForgotComponent } from "./auth/forgot/forgot.component";
import { AdmindashboardComponent } from "./AdminModule/admin/admindashboard/admindashboard.component";
import { UserManagementComponent } from "./AdminModule/admin/admindashboard/user-management/user-management.component";
import { TermsComponent } from "./AdminModule/admin/admindashboard/terms/terms.component";
import { ModalComponent } from "./AdminModule/admin/admindashboard/modal/modal.component";
import { AuthGuard } from "./auth/auth.guard";
import { componentFactoryName } from "@angular/compiler";
import { VerifyComponent } from "./auth/verify/verify.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "forgot", component: ForgotComponent },
  {
    path: "admin",
    component: AdmindashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: "admin/manage-user", component: UserManagementComponent },
  { path: "admin/terms", component: TermsComponent },
  { path: "alert", component: ModalComponent },
  { path: "verify/:token", component: VerifyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
