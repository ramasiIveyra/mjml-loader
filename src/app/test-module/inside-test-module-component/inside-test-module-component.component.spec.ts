import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideTestModuleComponentComponent } from './inside-test-module-component.component';

describe('InsideTestModuleComponentComponent', () => {
  let component: InsideTestModuleComponentComponent;
  let fixture: ComponentFixture<InsideTestModuleComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsideTestModuleComponentComponent]
    });
    fixture = TestBed.createComponent(InsideTestModuleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
