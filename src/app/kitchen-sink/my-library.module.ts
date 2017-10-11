import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';

export { HeaderComponent } from './header/header.component';
export { FooterComponent } from './footer/footer.component';
export { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
  ]
})
export class KitchenSinkModule { }
