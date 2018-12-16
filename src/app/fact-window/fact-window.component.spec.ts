import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactWindowComponent } from './fact-window.component';

describe('FactWindowComponent', () => {
  let component: FactWindowComponent;
  let fixture: ComponentFixture<FactWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
