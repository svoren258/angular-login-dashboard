import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmittedDataComponent } from './submitted-data.component';



@NgModule({
  declarations: [SubmittedDataComponent],
  exports: [SubmittedDataComponent],
  imports: [
    CommonModule
  ]
})
export class SubmittedDataModule { }
