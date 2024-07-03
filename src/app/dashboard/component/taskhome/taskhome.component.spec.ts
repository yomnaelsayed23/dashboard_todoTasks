import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskhomeComponent } from './taskhome.component';

describe('TaskhomeComponent', () => {
  let component: TaskhomeComponent;
  let fixture: ComponentFixture<TaskhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskhomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
