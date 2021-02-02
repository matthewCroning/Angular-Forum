import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadSearchComponent } from './thread-search.component';

describe('ThreadSearchComponent', () => {
  let component: ThreadSearchComponent;
  let fixture: ComponentFixture<ThreadSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
