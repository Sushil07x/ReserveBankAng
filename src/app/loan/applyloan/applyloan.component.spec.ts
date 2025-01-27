import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyloanComponent } from './applyloan.component';

describe('ApplyloanComponent', () => {
  let component: ApplyloanComponent;
  let fixture: ComponentFixture<ApplyloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyloanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplyloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
