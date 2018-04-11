import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedSubgameComponent } from './finished-subgame.component';

describe('FinishedSubgameComponent', () => {
  let component: FinishedSubgameComponent;
  let fixture: ComponentFixture<FinishedSubgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedSubgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedSubgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
