import { NgModule } from '@angular/core';

import { CoreLibModule } from 'coreLib';

import { UserLibComponent } from './user-lib.component';

@NgModule({
  declarations: [UserLibComponent],
  imports: [
    CoreLibModule
  ],
  exports: [UserLibComponent]
})
export class UserLibModule { }
