import { Injectable, signal } from '@angular/core';

export type SiteLanguage = 'en' | 'ar';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly language = signal<SiteLanguage>('en');

  constructor() {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('fekra-language');
      if (saved === 'ar' || saved === 'en') this.language.set(saved);
    }
    this.apply();
  }

  isArabic(): boolean { return this.language() === 'ar'; }

  toggle(): void {
    this.language.set(this.isArabic() ? 'en' : 'ar');
    if (typeof localStorage !== 'undefined') localStorage.setItem('fekra-language', this.language());
    this.apply();
  }

  set(value: SiteLanguage): void {
    this.language.set(value);
    if (typeof localStorage !== 'undefined') localStorage.setItem('fekra-language', value);
    this.apply();
  }

  private apply(): void {
    if (typeof document === 'undefined') return;
    document.documentElement.lang = this.language();
    document.documentElement.dir = this.isArabic() ? 'rtl' : 'ltr';
    document.documentElement.dataset['lang'] = this.language();
  }
}
