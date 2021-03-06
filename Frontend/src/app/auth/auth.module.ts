import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./register/register.component";
import { ForgotComponent } from "./forgot/forgot.component";

import { VerifyComponent } from './verify/verify.component';
import { CompleteComponent } from './complete/complete.component';
import { ErrorComponent } from './error/error.component';
import { InterceptorService } from './interceptor.service';

@NgModule({
  declarations: [RegisterComponent, ForgotComponent, VerifyComponent, CompleteComponent, ErrorComponent,InterceptorService],
  imports: [CommonModule]
})
export class AuthModule {
  constructor(){}
  
}
