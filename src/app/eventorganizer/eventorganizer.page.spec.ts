import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventorganizerPage } from './eventorganizer.page';

describe('EventorganizerPage', () => {
  let component: EventorganizerPage;
  let fixture: ComponentFixture<EventorganizerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventorganizerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventorganizerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
