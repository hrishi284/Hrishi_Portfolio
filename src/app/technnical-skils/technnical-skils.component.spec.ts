import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnnicalSkilsComponent } from './technnical-skils.component';

describe('TechnnicalSkilsComponent', () => {
  let component: TechnnicalSkilsComponent;
  let fixture: ComponentFixture<TechnnicalSkilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnnicalSkilsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnnicalSkilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
