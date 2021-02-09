import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewGiphyComponent } from './preview-giphy.component';

describe('PreviewGiphyComponent', () => {
  let component: PreviewGiphyComponent;
  let fixture: ComponentFixture<PreviewGiphyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewGiphyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewGiphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
