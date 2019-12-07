import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasictemplatedrivenformComponent } from './basictemplatedrivenform.component';

describe('BasictemplatedrivenformComponent', () => {
  let component: BasictemplatedrivenformComponent;
  let fixture: ComponentFixture<BasictemplatedrivenformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasictemplatedrivenformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasictemplatedrivenformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
