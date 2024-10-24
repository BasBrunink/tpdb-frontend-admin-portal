import { Component } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'home-hero',
  standalone: true,
  imports: [
    MatCardModule,
    NgOptimizedImage
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
