import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor],
  template: `
    <section class="hero">
      <div class="hero-grid"></div><div class="hero-glow glow-one"></div><div class="hero-glow glow-two"></div>
      <div class="hero-copy reveal">
        <div class="eyebrow"><span></span> DIGITAL AGENCY • WEB • MOBILE • SYSTEMS</div>
        <h1>Ideas become<br><em>digital.</em></h1>
        <p class="hero-sub">FEKRA turns ambitious ideas into polished websites, mobile apps, software systems, brands and digital experiences built around real business needs.</p>
        <div class="hero-actions"><a class="btn primary" routerLink="/contact">Start your project <span>↗</span></a><a class="btn ghost" href="#capabilities">Explore capabilities <span>↓</span></a></div>
        <div class="hero-trust"><span>01</span><span>DESIGN</span><i></i><span>02</span><span>DEVELOPMENT</span><i></i><span>03</span><span>LAUNCH</span></div>
      </div>
      <div class="hero-orbit" aria-hidden="true"><div class="orbit orbit-a"></div><div class="orbit orbit-b"></div><div class="orbit orbit-c"></div><div class="orbit-dot dot-a"></div><div class="orbit-dot dot-b"></div><div class="orbit-core"><img class="orbit-icon mark-icon" src="fekra-mark.svg" alt=""></div></div>
      <div class="hero-scroll">SCROLL TO EXPLORE <span></span></div>
    </section>

    <section class="marquee" aria-hidden="true"><div class="marquee-track"><span>WEB DEVELOPMENT</span><b>✦</b><span>MOBILE APPS</span><b>✦</b><span>SOFTWARE SYSTEMS</span><b>✦</b><span>UI/UX & BRANDING</span><b>✦</b><span>ACADEMIC SUPPORT</span><b>✦</b><span>CAREER SERVICES</span><b>✦</b><span>DIGITAL INVITATIONS</span><b>✦</b></div></section>

    <section class="statement section reveal" id="capabilities"><div class="section-tag">01 / THE FEKRA WAY</div><div class="statement-text">One creative technology partner for the <span>entire digital journey.</span></div><p class="statement-note">From a first idea to a launched product, FEKRA connects strategy, design, engineering and digital support without unnecessary handoffs.</p></section>

    <section class="services-preview section">
      <div class="section-head reveal"><div><div class="section-tag">02 / CAPABILITIES</div><h2>Everything you need.<br><span>Under one roof.</span></h2></div><a routerLink="/services" class="text-link">View all services ↗</a></div>
      <div class="service-grid">
        <article class="service-card reveal" *ngFor="let s of services; let i=index" [style.--delay.ms]="i * 70"><span class="num">0{{i+1}}</span><div class="service-icon">{{s.icon}}</div><h3>{{s.title}}</h3><p>{{s.text}}</p><div class="service-mini">{{s.count }}+ capabilities</div><a routerLink="/services">Explore <span>↗</span></a></article>
      </div>
    </section>

    <section class="numbers section">
      <div class="number-card scale-in"><span>07</span><strong>Service lines</strong><small>From digital products to career services.</small></div>
      <div class="number-card scale-in"><span>01</span><strong>Connected team</strong><small>Design, development and delivery in one place.</small></div>
      <div class="number-card scale-in"><span>∞</span><strong>Possibilities</strong><small>Custom solutions shaped around your actual needs.</small></div>
    </section>

    <section class="featured section"><div class="section-head reveal"><div><div class="section-tag">03 / SELECTED BUILDS</div><h2>Real products.<br><span>Real digital layers.</span></h2></div><a routerLink="/projects" class="text-link">See all projects ↗</a></div><div class="project-feature reveal-right"><div class="project-art art-one"><div class="floating-ui ui-one">WEB</div><div class="floating-ui ui-two">MOBILE</div><div class="floating-ui ui-three">SYSTEM</div><div class="mock-browser"><div class="mock-top"><b>FEKRA</b><span>● ● ●</span></div><div class="mock-body"><small>DIGITAL PRODUCT</small><strong>Build.<br>Launch.<br><em>Grow.</em></strong><div class="mock-bar"></div></div></div></div><div class="project-info"><div class="project-kicker">01 — END-TO-END EXPERIENCE</div><h3>From first sketch<br>to <span>live product.</span></h3><p>We can design the interface, engineer the product, connect APIs and services, prepare dashboards and help take the result from concept to launch.</p><div class="chips"><span>UI/UX</span><span>Angular</span><span>Flutter</span><span>.NET</span><span>Firebase</span><span>APIs</span></div><a class="btn small-btn" routerLink="/projects">Explore selected work ↗</a></div></div></section>

    <section class="process section"><div class="section-tag reveal">04 / PROCESS</div><h2 class="reveal">Think. Design. <span>Build. Grow.</span></h2><div class="process-line"><div class="stagger-item" *ngFor="let p of process;let i=index" [style.--delay.ms]="i * 100"><b>0{{i+1}}</b><div class="process-marker"></div><h3>{{p.t}}</h3><p>{{p.d}}</p></div></div></section>

    <section class="cta-band"><div class="cta-grid"></div><div class="cta-shape"></div><div class="section-tag">05 / YOUR NEXT MOVE</div><h2>Have an idea?<br><span>Let's build it.</span></h2><p>Tell us what you are trying to create. We will help turn the rough idea into a clear digital direction.</p><a class="btn light" routerLink="/contact">Start a conversation ↗</a></section>
  `
})
export class HomeComponent {
  services = [
    { icon:'◫', title:'Web Development', count:8, text:'Websites, landing pages, e-commerce, dashboards, admin panels, web apps and booking experiences for businesses.' },
    { icon:'⌁', title:'Mobile App Development', count:6, text:'Android & iOS apps with Flutter, APIs and Firebase for stores, services, bookings and custom products.' },
    { icon:'▱', title:'Software Systems', count:10, text:'Management, POS, inventory, HR, CRM, school, academy, restaurant and custom business systems.' },
    { icon:'✦', title:'UI/UX & Branding', count:7, text:'UI/UX, website and app design, logos, brand identity, social media design and scalable design systems.' },
    { icon:'⌘', title:'Academic Projects', count:9, text:'Graduation and university software projects, documentation, presentations, UML, ERD, Use Cases and preparation.' },
    { icon:'↗', title:'Career Services', count:7, text:'ATS-friendly CVs, CV design, portfolios, LinkedIn profiles, personal websites, cover letters and optimization.' },
    { icon:'♡', title:'Digital Invitations', count:6, text:'Interactive wedding, engagement, birthday, graduation and event invitations with RSVP, music, maps and countdowns.' }
  ];
  process = [
    { t:'Discover', d:'Understand the idea, business, audience and the outcome that matters.' },
    { t:'Design', d:'Shape the experience, interface, visual language and product structure.' },
    { t:'Build', d:'Engineer the product, connect APIs, test the details and make it responsive.' },
    { t:'Launch', d:'Prepare the final product, handover and the next steps for growth.' }
  ];
}
