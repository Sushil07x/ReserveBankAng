import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RupeerequestComponent } from './rupeerequest.component';

describe('RupeerequestComponent', () => {
  let component: RupeerequestComponent;
  let fixture: ComponentFixture<RupeerequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RupeerequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RupeerequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
