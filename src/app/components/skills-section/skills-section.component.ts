import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss'],
})
export class SkillsSectionComponent implements OnInit {

  icons = [
   {
     name: "HTML5",
     logo: "html-5"
   },
   {
    name: "CSS3",
    logo: "css3"
   },
   {
     name: "Javascript",
     logo: "javascript-logo"
   },
   {
     name: "Angular",
     logo: "angularjs"
   },
   {
     name: "Ionic",
     logo: "ionic"
   },
   {
    name: "Java",
    logo: "java"
   },
   {
     name: "Typescript",
     logo: "typescript"
   },
   {
     name: "Github",
     logo: "github"
   },
   {
     name: "Visual Studio Code",
     logo: "visual-studio-logo"
   },
   {
     name: "Arduino",
     logo: "arduino"
   }
  ];

  constructor() { }

  ngOnInit() {}

}
