import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SahammasterComponent } from './sahammaster.component';

describe('SahammasterComponent', () => {
  let component: SahammasterComponent;
  let fixture: ComponentFixture<SahammasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SahammasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SahammasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
