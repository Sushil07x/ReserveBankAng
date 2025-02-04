import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RupeeRequestComponent } from './rupee-request.component';

describe('RupeeRequestComponent', () => {
  let component: RupeeRequestComponent;
  let fixture: ComponentFixture<RupeeRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RupeeRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RupeeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
