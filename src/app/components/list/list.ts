import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PersonService } from '../../services/person';
import { Person } from '../../models/person';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatCardModule, MatDividerModule,MatListModule],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class ListComponent implements OnInit {

  persons = signal<Person[]>([]);

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getAll().subscribe(data => {
      console.log('LIST COMPONENT DOSTAŁ:', data);
      this.persons.set(data);
    });
  }

  delete(id: number): void {
    this.personService.delete(id).subscribe(() => {
      this.persons.update(p => p.filter(x => x.id !== id));
    });
  }
}
