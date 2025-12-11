import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class ListComponent {

  newItem: string = '';
  items: string[] = [];

  addItem() {
    const text = this.newItem.trim();
    if (text.length > 0) {
      this.items.push(text);
      this.newItem = '';
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
