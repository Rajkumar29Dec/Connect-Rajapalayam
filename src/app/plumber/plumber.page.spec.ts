import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlumberPage } from './plumber.page';

describe('PlumberPage', () => {
  let component: PlumberPage;
  let fixture: ComponentFixture<PlumberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlumberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
