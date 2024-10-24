import { Component } from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {HeroComponent} from './components/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TranslateModule,
    HeroComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
