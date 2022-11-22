import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMoreNewsComponent } from './section-more-news.component';

describe('SectionMoreNewsComponent', () => {
  let component: SectionMoreNewsComponent;
  let fixture: ComponentFixture<SectionMoreNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionMoreNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMoreNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
