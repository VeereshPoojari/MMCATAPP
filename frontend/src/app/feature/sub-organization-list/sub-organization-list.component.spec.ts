import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubOrganizationListComponent } from './sub-organization-list.component';

describe('SubOrganizationListComponent', () => {
  let component: SubOrganizationListComponent;
  let fixture: ComponentFixture<SubOrganizationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubOrganizationListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubOrganizationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
