import {Component, EventEmitter, Output} from '@angular/core';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';

export interface Language {
  name: string;
  icon: string;
}
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TranslateModule,
    MatToolbar,
    MatSelect,
    MatOption,
    MatIconButton,
    MatIcon,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  languageMap = new Map<string, Language>([
    ['en', { name: 'English', icon: 'fi-gb' }],
    ['de', { name: 'Deutsch', icon: 'fi-de' }],
    ['nl', { name: 'Nederlands', icon: 'fi-nl' }]
  ]);

  currentLanguage: string;
  selectedLanguage: Language;
  @Output() toggleSideNav = new EventEmitter<any>();

  constructor(public translate: TranslateService) {
    this.currentLanguage = this.translate.currentLang || 'en';  // Fallback if no currentLang
    this.selectedLanguage = this.languageMap.get(this.currentLanguage) as Language;
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;
    this.selectedLanguage = this.languageMap.get(language) as Language;  // Update selected language
  }

}
