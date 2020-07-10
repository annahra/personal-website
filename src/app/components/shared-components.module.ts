import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalCardComponent } from './personal-card/personal-card.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { PortfolioSlidesComponent } from './portfolio-slides/portfolio-slides.component';



@NgModule({
  declarations: [
    PersonalCardComponent,
    SkillsSectionComponent,
    PortfolioSlidesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonalCardComponent,
    SkillsSectionComponent,
    PortfolioSlidesComponent
  ]
})
export class SharedComponentsModule { }
