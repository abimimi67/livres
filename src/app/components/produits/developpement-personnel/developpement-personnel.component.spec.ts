import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppementPersonnelComponent } from './developpement-personnel.component';

describe('DeveloppementPersonnelComponent', () => {
  let component: DeveloppementPersonnelComponent;
  let fixture: ComponentFixture<DeveloppementPersonnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloppementPersonnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloppementPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
