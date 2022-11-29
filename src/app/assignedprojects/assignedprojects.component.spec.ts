import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedprojectsComponent } from './assignedprojects.component';

describe('AssignedprojectsComponent', () => {
  let component: AssignedprojectsComponent;
  let fixture: ComponentFixture<AssignedprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedprojectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignedprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
