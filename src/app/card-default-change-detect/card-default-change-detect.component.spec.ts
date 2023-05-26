import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDefaultChangeDetectComponent } from './card-default-change-detect.component';

describe('CardDefaultChangeDetectComponent', () => {
  let component: CardDefaultChangeDetectComponent;
  let fixture: ComponentFixture<CardDefaultChangeDetectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDefaultChangeDetectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDefaultChangeDetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
