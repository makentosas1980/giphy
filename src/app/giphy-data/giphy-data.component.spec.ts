import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyDataComponent } from './giphy-data.component';

describe('GiphyDataComponent', () => {
  let component: GiphyDataComponent;
  let fixture: ComponentFixture<GiphyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiphyDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
