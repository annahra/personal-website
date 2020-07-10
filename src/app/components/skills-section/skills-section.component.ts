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
     logo: "html-5",
     val: "0.7"
   },
   {
    name: "CSS3",
    logo: "css3",
    val: "0.7"
   },
   {
     name: "Javascript",
     logo: "javascript-logo",
     val: "0.7"
   },
   {
     name: "Angular",
     logo: "angularjs",
     val: "0.65"
   },
   {
     name: "Ionic",
     logo: "ionic",
     val: "0.8"
   },
   {
    name: "Java",
    logo: "java",
    val: "0.9"
   },
   {
     name: "Typescript",
     logo: "typescript",
     val: "0.7"
   },
   {
     name: "Github",
     logo: "github",
     val: "0.85"
   },
   {
     name: "Visual Studio Code",
     logo: "visual-studio-logo",
     val: "0.8"
   },
   {
     name: "Arduino",
     logo: "arduino",
     val: "0.5"
   }
  ];

  constructor() { }

  ngOnInit() {}

}
