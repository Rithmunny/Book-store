import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-book-categorize',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule here
  templateUrl: './book-categorize.component.html',
  styleUrls: ['./book-categorize.component.scss']
})
export class BookCategorizeComponent {
  categories: string[] = [];
  newCategory: string = '';
  editIndex: number | null = null;
  editedCategory: string = '';

  addCategory(): void {
    if (this.newCategory.trim() && !this.categories.includes(this.newCategory.trim())) {
      this.categories.push(this.newCategory.trim());
      this.newCategory = '';
    } else {
      alert('Category name cannot be empty or duplicate!');
    }
  }

  removeCategory(index: number): void {
    this.categories.splice(index, 1);
  }

  editCategory(index: number): void {
    this.editIndex = index;
    this.editedCategory = this.categories[index];
  }

  saveEdit(): void {
    if (this.editedCategory.trim() && !this.categories.includes(this.editedCategory.trim())) {
      if (this.editIndex !== null) {
        this.categories[this.editIndex] = this.editedCategory.trim();
      }
      this.cancelEdit();
    } else {
      alert('Edited category name cannot be empty or duplicate!');
    }
  }

  cancelEdit(): void {
    this.editIndex = null;
    this.editedCategory = '';
  }
}
