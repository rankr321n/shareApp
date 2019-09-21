import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendlistComponent } from './FriendModule/friendlist/friendlist.component';
import { AddfriendComponent } from './FriendModule/addfriend/addfriend.component';
import { HomeComponent } from './home/home.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { SidenavComponent } from '../AdminModule/admin/admindashboard/sidenav/sidenav.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TermsComponent } from './terms/terms.component';
import { UserTermsComponent } from './user-terms/user-terms.component';



@NgModule({
  declarations: [FriendlistComponent, AddfriendComponent, HomeComponent, UpdateProfileComponent,SidenavComponent, UserHeaderComponent, AboutusComponent, TermsComponent, UserTermsComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
