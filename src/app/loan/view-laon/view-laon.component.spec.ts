import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLaonComponent } from './view-laon.component';

describe('ViewLaonComponent', () => {
  let component: ViewLaonComponent;
  let fixture: ComponentFixture<ViewLaonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewLaonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewLaonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
