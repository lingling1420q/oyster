import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryItemComponent } from './category-item.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CategoryItemProps } from '../../../typing/feed';
import { MatDialogModule } from '@angular/material';

describe('CategoryItemComponent', () => {
  let component: CategoryItemComponent;
  let fixture: ComponentFixture<CategoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryItemComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryItemComponent);
    component = fixture.componentInstance;
    component.category = {} as CategoryItemProps;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
