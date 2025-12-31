import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person';
import { Person } from '../../models/person';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './add-person.html',
  styleUrl: './add-person.css'
})
export class AddPersonComponent implements OnInit {

  person: Person = {};

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,   // ⬅️ WAŻNE
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // ⬅️ TU
    if (id) {
      this.personService.getById(+id)
        .subscribe(p => this.person = p);
    }
  }

  save(): void {
    if (this.person.id) {
      // EDYCJA → PUT
      this.personService.update(this.person.id, this.person)
        .subscribe(() => this.router.navigate(['']));
    } else {
      // DODAWANIE → POST
      this.personService.add(this.person)
        .subscribe(() => this.router.navigate(['']));
    }
  }
}
