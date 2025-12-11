import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Random } from '../random';


@Component({
  selector: 'app-random',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random.html',
  styleUrl: './random.css',
})
export class RandomComponent {

  @Input() max: number = 10;  // wartość domyślna

  generatedNumber: number = 0;

  constructor(private randomService: Random) {}

  generate() {
    this.generatedNumber = this.randomService.getRandom(this.max);
  }

  isLow(): boolean {
    return this.generatedNumber <= (0.5 * this.max);
  }
}
