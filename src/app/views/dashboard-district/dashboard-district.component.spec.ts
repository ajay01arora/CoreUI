import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDistrictComponent } from './dashboard-district.component';

describe('DashboardDistrictComponent', () => {
  let component: DashboardDistrictComponent;
  let fixture: ComponentFixture<DashboardDistrictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDistrictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
