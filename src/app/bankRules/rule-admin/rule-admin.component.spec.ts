import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleAdminComponent } from './rule-admin.component';

describe('RuleAdminComponent', () => {
  let component: RuleAdminComponent;
  let fixture: ComponentFixture<RuleAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuleAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RuleAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
