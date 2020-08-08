import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomansPoliciersComponent } from './romans-policiers.component';

describe('RomansPoliciersComponent', () => {
  let component: RomansPoliciersComponent;
  let fixture: ComponentFixture<RomansPoliciersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomansPoliciersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomansPoliciersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
