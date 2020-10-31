import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarpenterPage } from './carpenter.page';

describe('CarpenterPage', () => {
  let component: CarpenterPage;
  let fixture: ComponentFixture<CarpenterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpenterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarpenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
