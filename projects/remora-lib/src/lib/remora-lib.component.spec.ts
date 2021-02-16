import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoraLibComponent } from './remora-lib.component';

describe('RemoraLibComponent', () => {
  let component: RemoraLibComponent;
  let fixture: ComponentFixture<RemoraLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoraLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoraLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
