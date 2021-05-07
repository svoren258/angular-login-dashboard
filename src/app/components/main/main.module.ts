import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  exports: [MainComponent],
  imports: [
    RouterModule.forChild([{
      path: '',
      component: MainComponent
    }]),
    CommonModule
  ]
})
export class MainModule { }
