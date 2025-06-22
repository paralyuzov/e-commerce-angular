import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCoresComponent } from './filter-cores.component';

describe('FilterCoresComponent', () => {
  let component: FilterCoresComponent;
  let fixture: ComponentFixture<FilterCoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterCoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterCoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
