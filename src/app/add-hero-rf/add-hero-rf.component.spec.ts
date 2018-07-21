import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHeroRfComponent } from './add-hero-rf.component';

describe('AddHeroRfComponent', () => {
  let component: AddHeroRfComponent;
  let fixture: ComponentFixture<AddHeroRfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHeroRfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHeroRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
