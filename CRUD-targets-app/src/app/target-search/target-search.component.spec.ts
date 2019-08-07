import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetSearchComponent } from './target-search.component';

describe('TargetSearchComponent', () => {
  let component: TargetSearchComponent;
  let fixture: ComponentFixture<TargetSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
