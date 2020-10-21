import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreLibComponent } from './core-lib.component';



@NgModule({
  declarations: [CoreLibComponent],
  imports: [
    CommonModule
  ],
  exports: [CoreLibComponent]
})
export class CoreLibModule { }
