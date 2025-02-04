import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RupeeAdminComponent } from './rupee-admin.component';

describe('RupeeAdminComponent', () => {
  let component: RupeeAdminComponent;
  let fixture: ComponentFixture<RupeeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RupeeAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RupeeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
