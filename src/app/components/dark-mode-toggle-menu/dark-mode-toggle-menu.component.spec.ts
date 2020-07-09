import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DarkModeToggleMenuComponent } from './dark-mode-toggle-menu.component';

describe('DarkModeToggleMenuComponent', () => {
  let component: DarkModeToggleMenuComponent;
  let fixture: ComponentFixture<DarkModeToggleMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkModeToggleMenuComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DarkModeToggleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
