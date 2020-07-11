import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalCardComponent } from './personal-card/personal-card.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { PortfolioSlidesComponent } from './portfolio-slides/portfolio-slides.component';
import { MainMenuComponent } from './main-menu/main-menu.component';



@NgModule({
  declarations: [
    PersonalCardComponent,
    SkillsSectionComponent,
    PortfolioSlidesComponent,
    MainMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonalCardComponent,
    SkillsSectionComponent,
    PortfolioSlidesComponent,
    MainMenuComponent
  ]
})
export class SharedComponentsModule { }
