import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-dark-mode-toggle-menu',
  templateUrl: './dark-mode-toggle-menu.component.html',
  styleUrls: ['./dark-mode-toggle-menu.component.scss'],
})
export class DarkModeToggleMenuComponent implements OnInit {

  constructor() {
   
  }

  ngOnInit() {}

  onClick(event){
    let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    systemDark.addListener(this.colorTest);
    if(event.detail.checked){
      document.body.setAttribute('data-theme', 'dark');
    }
    else{
      document.body.setAttribute('data-theme', 'light');
    }
  }

   colorTest(systemInitiatedDark) {
    if (systemInitiatedDark.matches) {
      document.body.setAttribute('data-theme', 'dark');		
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }

  
}
