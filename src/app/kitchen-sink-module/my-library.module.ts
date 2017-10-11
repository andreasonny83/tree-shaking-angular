import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { ButtonModule } from './button/button.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    ButtonModule,
  ],
  exports: [
    HeaderModule,
    FooterModule,
    ButtonModule,
  ]
})
export class KitchenSinkModule { }
