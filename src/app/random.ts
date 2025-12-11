import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Random {

  getRandom(max: number): number {
    return Math.floor(Math.random() * max) + 1;
  }
}
