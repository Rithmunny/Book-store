import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCategorizeComponent } from './book-categorize.component';

describe('BookCategorizeComponent', () => {
  let component: BookCategorizeComponent;
  let fixture: ComponentFixture<BookCategorizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCategorizeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookCategorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
