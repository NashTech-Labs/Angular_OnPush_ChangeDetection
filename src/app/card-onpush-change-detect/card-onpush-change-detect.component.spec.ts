import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOnpushChangeDetectComponent } from './card-onpush-change-detect.component';

describe('CardOnpushChangeDetectComponent', () => {
  let component: CardOnpushChangeDetectComponent;
  let fixture: ComponentFixture<CardOnpushChangeDetectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOnpushChangeDetectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOnpushChangeDetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
