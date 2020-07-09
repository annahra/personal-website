import { Component, OnInit } from '@angular/core';
import { DarkModeToggleMenuComponent } from '../dark-mode-toggle-menu/dark-mode-toggle-menu.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  async presentToggle() {
    const popover = await this.popoverCtrl.create({
      component: DarkModeToggleMenuComponent,
    })
    return await popover.present();
  }

  public openToggle() {
    this.presentToggle();
  }

}
