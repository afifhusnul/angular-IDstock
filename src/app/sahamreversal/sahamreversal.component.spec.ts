import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SahamreversalComponent } from './sahamreversal.component';

describe('SahamreversalComponent', () => {
  let component: SahamreversalComponent;
  let fixture: ComponentFixture<SahamreversalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SahamreversalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SahamreversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
