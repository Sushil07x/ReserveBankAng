import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineRuleComponent } from './define-rule.component';

describe('DefineRuleComponent', () => {
  let component: DefineRuleComponent;
  let fixture: ComponentFixture<DefineRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefineRuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefineRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
