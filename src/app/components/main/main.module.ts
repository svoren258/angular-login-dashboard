import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SubmittedDataModule } from '../submitted-data/submitted-data.module';
import { UserProfileModule } from '../user-profile/user-profile.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  exports: [MainComponent],
  imports: [
    RouterModule.forChild([{
      path: '',
      component: MainComponent
    }]),
    CommonModule,
    SubmittedDataModule,
    UserProfileModule
  ]
})
export class MainModule { }
