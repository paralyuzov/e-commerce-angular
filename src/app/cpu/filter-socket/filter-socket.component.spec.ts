import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSocketComponent } from './filter-socket.component';

describe('FilterSocketComponent', () => {
  let component: FilterSocketComponent;
  let fixture: ComponentFixture<FilterSocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterSocketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterSocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
