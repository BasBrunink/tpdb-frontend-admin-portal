import { Component } from '@angular/core';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatOption, MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslateModule,
    MatToolbar,
    MatSelect,
    MatOption
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  currentLanguage: string;
  constructor(public translate: TranslateService) {
    this.currentLanguage = translate.currentLang;
  }

  useLanguage(language: string) {
    this.translate.use(language)
    this.currentLanguage = language;

  }
}
