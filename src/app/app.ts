import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RandomComponent } from './random/random';
import { ListComponent } from './list/list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListComponent,RandomComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projekt');
  protected readonly myMessage = signal('Witaj w mojej aplikacji Angular!');
}
