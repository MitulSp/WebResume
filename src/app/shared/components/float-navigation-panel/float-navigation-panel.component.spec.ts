import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatNavigationPanelComponent } from './float-navigation-panel.component';

describe('FloatNavigationPanelComponent', () => {
  let component: FloatNavigationPanelComponent;
  let fixture: ComponentFixture<FloatNavigationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatNavigationPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatNavigationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
