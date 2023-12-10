import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeatComponent } from './teat.component';

describe('TeatComponent', () => {
  let component: TeatComponent;
  let fixture: ComponentFixture<TeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
