import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileFormModule } from '../profile-form/profile-form.module';
import { SubmittedDataModule } from '../submitted-data/submitted-data.module';
import { UserProfileComponent } from './user-profile.component';



@NgModule({
  declarations: [UserProfileComponent],
  exports: [UserProfileComponent],
  imports: [
    CommonModule,
    ProfileFormModule,
    SubmittedDataModule
  ]
})
export class UserProfileModule { }
