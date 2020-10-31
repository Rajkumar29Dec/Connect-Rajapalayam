import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SocialworkersPage } from './socialworkers.page';

describe('SocialworkersPage', () => {
  let component: SocialworkersPage;
  let fixture: ComponentFixture<SocialworkersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialworkersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SocialworkersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
