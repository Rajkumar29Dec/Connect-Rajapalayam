import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElectricianPage } from './electrician.page';

describe('ElectricianPage', () => {
  let component: ElectricianPage;
  let fixture: ComponentFixture<ElectricianPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricianPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElectricianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
