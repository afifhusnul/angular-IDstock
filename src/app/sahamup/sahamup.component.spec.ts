import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SahamupComponent } from './sahamup.component';

describe('SahamupComponent', () => {
  let component: SahamupComponent;
  let fixture: ComponentFixture<SahamupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SahamupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SahamupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
