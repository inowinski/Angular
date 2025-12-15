import { Injectable } from '@angular/core';
import { Person } from '../models/person';

const STORAGE_KEY = 'persons';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private load(): Person[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  private save(persons: Person[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persons));
  }

  getAll(): Person[] {
    return this.load();
  }

  getByIndex(index: number): Person | undefined {
    const persons = this.load();
    return persons[index];
  }

  add(person: Person): void {
    const persons = this.load();
    persons.push(person);
    this.save(persons);
  }

  delete(index: number): void {
    const persons = this.load();
    persons.splice(index, 1);
    this.save(persons);
  }
}
