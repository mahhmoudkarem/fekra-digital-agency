import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe, faLanguage, faMoon, faPhone, faSun } from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FontAwesomeModule],
  template: `
    <div class="site-shell" [class.light-mode]="theme === 'light'">
      <div class="noise"></div>
      <div class="scroll-progress" [style.width.%]="scrollProgress"></div>

      <header class="nav" [class.scrolled]="scrolled" [class.menu-open]="menuOpen">
        <a class="brand" routerLink="/" (click)="closeMenu()" aria-label="FEKRA home">
          <img class="brand-logo logo-on-light" src="fekra-logo-on-light.svg" alt="FEKRA Digital Agency">
          <img class="brand-logo logo-on-dark" src="fekra-logo-on-dark.svg" alt="FEKRA Digital Agency">
        </a>

        <nav class="desktop-nav" aria-label="Main navigation">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">{{ ar ? 'الرئيسية' : 'Home' }}</a>
          <a routerLink="/services" routerLinkActive="active">{{ ar ? 'الخدمات' : 'Services' }}</a>
          <a routerLink="/projects" routerLinkActive="active">{{ ar ? 'المشروعات' : 'Projects' }}</a>
          <a routerLink="/about" routerLinkActive="active">{{ ar ? 'عن فكرا' : 'About' }}</a>
          <a routerLink="/contact" routerLinkActive="active">{{ ar ? 'تواصل معنا' : 'Contact' }}</a>
        </nav>

        <div class="nav-tools">
          <button class="language-toggle" type="button" (click)="toggleLanguage()" [attr.aria-label]="ar ? 'Switch to English' : 'التبديل للعربية'"><fa-icon [icon]="faLanguage"></fa-icon><span>{{ ar ? 'EN' : 'AR' }}</span></button>
          <button class="theme-toggle" type="button" (click)="toggleTheme()" [attr.aria-label]="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'">
            <fa-icon [icon]="theme === 'dark' ? faSun : faMoon"></fa-icon>
            <span>{{ theme === 'dark' ? (ar ? 'فاتح' : 'Light') : (ar ? 'داكن' : 'Dark') }}</span>
          </button>
          <a class="nav-cta" routerLink="/contact" (click)="closeMenu()">{{ ar ? 'ابدأ مشروعك' : 'Start a project' }} <span>↗</span></a>
          <button class="menu-toggle" type="button" (click)="menuOpen = !menuOpen" aria-label="Toggle menu"><span></span><span></span></button>
        </div>

        <nav class="mobile-nav" [class.open]="menuOpen">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" (click)="closeMenu()">{{ ar ? 'الرئيسية' : 'Home' }}</a>
          <a routerLink="/services" routerLinkActive="active" (click)="closeMenu()">{{ ar ? 'الخدمات' : 'Services' }}</a>
          <a routerLink="/projects" routerLinkActive="active" (click)="closeMenu()">{{ ar ? 'المشروعات' : 'Projects' }}</a>
          <a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">{{ ar ? 'عن فكرا' : 'About' }}</a>
          <a routerLink="/contact" routerLinkActive="active" (click)="closeMenu()">{{ ar ? 'تواصل معنا' : 'Contact' }}</a>
        </nav>
      </header>

      <main><router-outlet></router-outlet></main>

      <footer class="footer">
        <div class="footer-main">
          <img class="footer-logo" [src]="theme === 'dark' ? 'fekra-logo-on-dark.svg' : 'fekra-logo-on-light.svg'" alt="FEKRA Digital Agency">
          <p>{{ ar ? 'نحوّل الأفكار إلى حلول رقمية.' : 'Turning Ideas Into Digital Solutions.' }}</p>
          <a class="footer-mail" href="mailto:fekra.digital.agency@gmail.com"><fa-icon [icon]="faEnvelope"></fa-icon> fekra.digital.agency@gmail.com</a>
          <div class="social-links" aria-label="Social media links">
            <a href="https://www.tiktok.com/@fekra.digital.agency?_r=1&_t=ZS-99s9WfryYdz" target="_blank" rel="noopener" aria-label="TikTok"><fa-icon [icon]="faTiktok"></fa-icon></a>
            <a href="https://www.facebook.com/share/1EVr8tjWRK/?mibextid=wwXIfr" target="_blank" rel="noopener" aria-label="Facebook"><fa-icon [icon]="faFacebookF"></fa-icon></a>
            <a href="https://www.instagram.com/fekradigitalagency?stkn=MXJwM3Yybmt1ZW51Mw%3D%3D&utm_source=qr" target="_blank" rel="noopener" aria-label="Instagram"><fa-icon [icon]="faInstagram"></fa-icon></a>
            <a href="https://fekradigitalagency.vercel.app/" target="_blank" rel="noopener" aria-label="Website"><fa-icon [icon]="faGlobe"></fa-icon></a>
          </div>
        </div>
        <div class="footer-links"><a routerLink="/services">{{ ar ? 'الخدمات' : 'Services' }}</a><a routerLink="/projects">{{ ar ? 'المشروعات' : 'Projects' }}</a><a routerLink="/about">{{ ar ? 'عن فكرا' : 'About' }}</a><a routerLink="/contact">{{ ar ? 'تواصل معنا' : 'Contact' }}</a></div>
        <div class="footer-contact"><a href="tel:01554889771"><fa-icon [icon]="faPhone"></fa-icon> 01554889771</a></div>
        <div class="footer-bottom"><span>© 2026 FEKRA Digital Agency</span><span>{{ ar ? 'مواقع • تطبيقات • منصات إلكترونية • أنظمة • تصميم • دعوات رقمية' : 'Web • Mobile • Electronic Platforms • Systems • UI/UX • Invitations' }}</span></div>
      </footer>
    </div>
  `
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  scrolled = false;
  menuOpen = false;
  theme: 'dark' | 'light' = 'dark';
  scrollProgress = 0;
  private observer?: IntersectionObserver;
  private routerSub?: Subscription;

  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faTiktok = faTiktok;
  faEnvelope = faEnvelope;
  faGlobe = faGlobe;
  faLanguage = faLanguage;
  faMoon = faMoon;
  faPhone = faPhone;
  faSun = faSun;

  get ar(): boolean { return this.languageService.isArabic(); }

  constructor(private router: Router, private languageService: LanguageService) {}

  ngOnInit(): void {
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('fekra-theme') : null;
    this.theme = saved === 'light' ? 'light' : 'dark';
    this.applyTheme();
    this.routerSub = this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe(() => {
      this.menuOpen = false;
      setTimeout(() => this.observeAnimations(), 80);
    });
  }

  ngAfterViewInit(): void { setTimeout(() => this.observeAnimations(), 120); }
  ngOnDestroy(): void { this.observer?.disconnect(); this.routerSub?.unsubscribe(); }

  @HostListener('window:scroll')
  onScroll(): void {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = max > 0 ? (window.scrollY / max) * 100 : 0;
    this.scrolled = window.scrollY > 30;
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  }

  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('fekra-theme', this.theme);
    this.applyTheme();
  }

  toggleLanguage(): void { this.languageService.toggle(); }
  closeMenu(): void { this.menuOpen = false; }
  private applyTheme(): void { document.documentElement.dataset['theme'] = this.theme; }

  private observeAnimations(): void {
    this.observer?.disconnect();
    const items = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .scale-in, .stagger-item');
    if (!('IntersectionObserver' in window)) { items.forEach(el => el.classList.add('in-view')); return; }
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('in-view'); this.observer?.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    items.forEach(el => this.observer?.observe(el));
  }
}
