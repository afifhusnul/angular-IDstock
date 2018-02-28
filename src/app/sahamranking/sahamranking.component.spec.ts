import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SahamrankingComponent } from './sahamranking.component';

describe('SahamrankingComponent', () => {
  let component: SahamrankingComponent;
  let fixture: ComponentFixture<SahamrankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SahamrankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SahamrankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
