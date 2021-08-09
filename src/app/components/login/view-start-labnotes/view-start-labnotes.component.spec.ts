import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStartLabnotesComponent } from './view-start-labnotes.component';

describe('ViewStartLabnotesComponent', () => {
  let component: ViewStartLabnotesComponent;
  let fixture: ComponentFixture<ViewStartLabnotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStartLabnotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStartLabnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
