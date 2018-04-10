import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubboardComponent } from './subboard.component';

describe('SubboardComponent', () => {
  let component: SubboardComponent;
  let fixture: ComponentFixture<SubboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubboardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
