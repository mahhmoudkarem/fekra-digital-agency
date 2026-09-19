import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgClass],
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
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a>
          <a routerLink="/services" routerLinkActive="active">Services</a>
          <a routerLink="/projects" routerLinkActive="active">Projects</a>
          <a routerLink="/about" routerLinkActive="active">About</a>
          <a routerLink="/contact" routerLinkActive="active">Contact</a>
        </nav>

        <div class="nav-tools">
          <button class="theme-toggle" type="button" (click)="toggleTheme()" [attr.aria-label]="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'">
            <span class="theme-icon">{{ theme === 'dark' ? '☼' : '◐' }}</span>
            <span>{{ theme === 'dark' ? 'Light' : 'Dark' }}</span>
          </button>
          <a class="nav-cta" routerLink="/contact" (click)="closeMenu()">Start a project <span>↗</span></a>
          <button class="menu-toggle" type="button" (click)="menuOpen = !menuOpen" aria-label="Toggle menu"><span></span><span></span></button>
        </div>

        <nav class="mobile-nav" [class.open]="menuOpen">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" (click)="closeMenu()">Home</a>
          <a routerLink="/services" routerLinkActive="active" (click)="closeMenu()">Services</a>
          <a routerLink="/projects" routerLinkActive="active" (click)="closeMenu()">Projects</a>
          <a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">About</a>
          <a routerLink="/contact" routerLinkActive="active" (click)="closeMenu()">Contact</a>
        </nav>
      </header>

      <main><router-outlet></router-outlet></main>

      <footer class="footer">
        <div class="footer-main">
          <img class="footer-logo" [src]="theme === 'dark' ? 'fekra-logo-on-dark.svg' : 'fekra-logo-on-light.svg'" alt="FEKRA Digital Agency">
          <p>Turning Ideas Into Digital Solutions.</p>
          <a class="footer-mail" href="mailto:fekra.degital.agency@gmail.com">fekra.degital.agency@gmail.com</a>
        </div>
        <div class="footer-links"><a routerLink="/services">Services</a><a routerLink="/projects">Projects</a><a routerLink="/about">About</a><a routerLink="/contact">Contact</a></div>
        <div class="footer-contact"><span>Let's build something valuable.</span><a href="tel:01554889771">01554889771</a></div>
        <div class="footer-bottom"><span>© 2026 FEKRA Digital Agency</span><span>Web • Mobile • Systems • UI/UX • Academic • Career • Invitations</span></div>
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

  constructor(private router: Router) {}

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

  closeMenu(): void { this.menuOpen = false; }

  private applyTheme(): void {
    document.documentElement.dataset['theme'] = this.theme;
  }

  private observeAnimations(): void {
    this.observer?.disconnect();
    const items = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .scale-in, .stagger-item');
    if (!('IntersectionObserver' in window)) { items.forEach(el => el.classList.add('in-view')); return; }
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          this.observer?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    items.forEach(el => this.observer?.observe(el));
  }
}
