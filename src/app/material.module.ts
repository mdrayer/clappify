import { NgModule } from '@angular/core';

import {
  MatSlideToggleModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSlideToggleModule,
  ],
  exports: [
    MatSlideToggleModule,
  ]
})
export class MaterialModule {}
