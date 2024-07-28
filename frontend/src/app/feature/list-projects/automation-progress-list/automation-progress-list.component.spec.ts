import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationProgressListComponent } from './automation-progress-list.component';

describe('AutomationProgressListComponent', () => {
  let component: AutomationProgressListComponent;
  let fixture: ComponentFixture<AutomationProgressListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomationProgressListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutomationProgressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
