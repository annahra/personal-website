import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalCardComponent } from './personal-card/personal-card.component';



@NgModule({
  declarations: [PersonalCardComponent],
  imports: [
    CommonModule
  ],
  exports: [PersonalCardComponent]
})
export class SharedComponentsModule { }
