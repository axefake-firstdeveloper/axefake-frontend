import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [LayoutModule]
})
export class SharedModule { }
