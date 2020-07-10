import { Component, OnInit} from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';


@Component({
  selector: 'app-dark-mode-toggle-menu',
  templateUrl: './dark-mode-toggle-menu.component.html',
  styleUrls: ['./dark-mode-toggle-menu.component.scss'],
})
export class DarkModeToggleMenuComponent implements OnInit {

  isDark:boolean;

  constructor(private dataService: SharedDataService) {
  }

  ngOnInit() {
    this.isDark = this.dataService.getDarkMode();
  }

  onClick(event){
    let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    this.dataService.toggleDarkMode(event.detail.checked);
    // systemDark.addListener(this.colorTest);
    if(event.detail.checked){
      document.body.setAttribute('data-theme', 'dark');
    }
    else{
      document.body.setAttribute('data-theme', 'light');
    }
  }

  // colorTest(systemInitiatedDark) {
  //   if (systemInitiatedDark.matches) {
  //     document.body.setAttribute('data-theme', 'dark');
  //   } else {
  //     document.body.setAttribute('data-theme', 'light');
  //   }
  // }

  
}
