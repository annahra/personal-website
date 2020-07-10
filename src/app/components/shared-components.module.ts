import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalCardComponent } from './personal-card/personal-card.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';



@NgModule({
  declarations: [
    PersonalCardComponent,
    SkillsSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonalCardComponent,
    SkillsSectionComponent
  ]
})
export class SharedComponentsModule { }
