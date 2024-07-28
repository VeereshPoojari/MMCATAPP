import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateEmpleeComponent } from './create-update-emplee.component';

describe('CreateUpdateEmpleeComponent', () => {
  let component: CreateUpdateEmpleeComponent;
  let fixture: ComponentFixture<CreateUpdateEmpleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUpdateEmpleeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateUpdateEmpleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
