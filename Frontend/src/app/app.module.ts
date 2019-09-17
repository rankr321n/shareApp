import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { ForgotComponent } from "./auth/forgot/forgot.component";
import { AuthorizeService } from "./auth/authorize.service";
import { HttpClientModule } from "@angular/common/http";
import { AdmindashboardComponent } from "./AdminModule/admin/admindashboard/admindashboard.component";
import { HeaderComponent } from "./AdminModule/admin/admindashboard/header/header.component";
import { FooterComponent } from "./AdminModule/admin/admindashboard/footer/footer.component";
import { SidenavComponent } from "./AdminModule/admin/admindashboard/sidenav/sidenav.component";
import { UserManagementComponent } from "./AdminModule/admin/admindashboard/user-management/user-management.component";
import { TermsComponent } from "./AdminModule/admin/admindashboard/terms/terms.component";
import { ModalComponent } from "./AdminModule/admin/admindashboard/modal/modal.component";
import { AuthGuard } from "./auth/auth.guard";
import { VerifyComponent } from "./auth/verify/verify.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    AdmindashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    UserManagementComponent,
    TermsComponent,
    ModalComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: "never" }),
    HttpClientModule
  ],
  providers: [AuthorizeService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
