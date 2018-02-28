import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SahamsessionComponent } from './sahamsession.component';

describe('SahamsessionComponent', () => {
  let component: SahamsessionComponent;
  let fixture: ComponentFixture<SahamsessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SahamsessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SahamsessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
