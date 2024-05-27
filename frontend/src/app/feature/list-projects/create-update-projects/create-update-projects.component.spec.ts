import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateProjectsComponent } from './create-update-projects.component';

describe('CreateUpdateProjectsComponent', () => {
  let component: CreateUpdateProjectsComponent;
  let fixture: ComponentFixture<CreateUpdateProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUpdateProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateUpdateProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
