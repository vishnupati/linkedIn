import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReggistrationComponent } from './reggistration.component';

describe('ReggistrationComponent', () => {
  let component: ReggistrationComponent;
  let fixture: ComponentFixture<ReggistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReggistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReggistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
