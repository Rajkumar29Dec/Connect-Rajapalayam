import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KothanarPage } from './kothanar.page';

describe('KothanarPage', () => {
  let component: KothanarPage;
  let fixture: ComponentFixture<KothanarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KothanarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KothanarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
