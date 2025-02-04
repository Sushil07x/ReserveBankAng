import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAdminComponent } from './loan-admin.component';

describe('LoanAdminComponent', () => {
  let component: LoanAdminComponent;
  let fixture: ComponentFixture<LoanAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoanAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
