import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompounderPage } from './compounder.page';

describe('CompounderPage', () => {
  let component: CompounderPage;
  let fixture: ComponentFixture<CompounderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompounderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompounderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
