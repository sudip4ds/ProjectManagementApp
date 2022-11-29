import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpProjectComponent } from './emp-project.component';

describe('EmpProjectComponent', () => {
  let component: EmpProjectComponent;
  let fixture: ComponentFixture<EmpProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
