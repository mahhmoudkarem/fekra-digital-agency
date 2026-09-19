import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector:'app-services', standalone:true, imports:[NgFor, RouterLink],
  template:`
    <section class="page-hero"><div class="page-hero-orb"></div><div class="section-tag reveal">SERVICES / WHAT WE DO</div><h1 class="reveal">A full digital<br><span>capability stack.</span></h1><p class="reveal">Seven service lines, dozens of capabilities, and one goal: build the right digital solution for the job.</p></section>
    <section class="services-list section">
      <article *ngFor="let s of services;let i=index" class="big-service reveal" [style.--delay.ms]="i * 80">
        <div class="big-num">0{{i+1}}</div><div class="big-icon">{{s.icon}}</div><div class="big-copy"><div class="service-label">{{s.label}}</div><h2>{{s.title}}</h2><p>{{s.text}}</p><div class="tag-row"><span *ngFor="let x of s.tags">{{x}}</span></div></div><div class="arrow">↗</div>
      </article>
    </section>
    <section class="service-bottom section"><div class="service-bottom-copy reveal-left"><div class="section-tag">BUILT AROUND YOUR BUSINESS</div><h2>Not every business needs the same <span>solution.</span></h2><p>That is why FEKRA does not sell one fixed template. We combine the capabilities above according to the project: a website with a dashboard, an app connected to APIs, a complete POS, an interactive invitation or a personal career presence.</p></div><div class="capability-wheel scale-in"><span>IDEA</span><i></i><span>DESIGN</span><i></i><span>BUILD</span><i></i><span>LAUNCH</span></div></section>
    <section class="cta-band compact"><div class="section-tag">READY WHEN YOU ARE</div><h2>Bring the <span>Fekra.</span></h2><a class="btn light" routerLink="/contact">Tell us about it ↗</a></section>
  `
})
export class ServicesComponent { services = [
  {icon:'◫',label:'01 / WEB',title:'Web Development',text:'Complete web experiences from a focused landing page to a full business platform.',tags:['Websites','Landing Pages','E-commerce','Dashboards','Admin Panels','Web Applications','Booking Systems','Corporate / Restaurant / Clinic Sites']},
  {icon:'⌁',label:'02 / MOBILE',title:'Mobile App Development',text:'Cross-platform products for Android and iOS with the integrations your app needs.',tags:['Android','iOS','Flutter Apps','Store Apps','Service Apps','Booking Apps','REST APIs','Firebase']},
  {icon:'▱',label:'03 / SYSTEMS',title:'Software Systems',text:'Custom internal and customer-facing systems designed around how your business actually works.',tags:['Management','POS','Inventory','HR','Booking','CRM','School / Academy','Restaurant','Dashboards','Custom Business Systems']},
  {icon:'✦',label:'04 / DESIGN',title:'UI/UX & Branding',text:'A visual and product language that makes your business easier to understand and remember.',tags:['UI/UX','Website Design','Mobile App Design','Logo Design','Brand Identity','Social Media Design','Design Systems']},
  {icon:'⌘',label:'05 / ACADEMIC',title:'Academic Project Development & Support',text:'Professional software project development and preparation presented as structured academic support.',tags:['Graduation Projects','University Projects','Software Projects','Flutter Projects','Web Projects','Documentation','Presentations','UML / ERD / Use Case','Project Explanation']},
  {icon:'↗',label:'06 / CAREER',title:'Career Services',text:'A stronger digital presence for students and professionals preparing for the next opportunity.',tags:['ATS-Friendly CV','CV Design','Portfolio','LinkedIn Profile','Personal Website','Cover Letter','Resume Optimization']},
  {icon:'♡',label:'07 / INVITATIONS',title:'Digital Invitations',text:'Interactive invitations that feel like a real digital experience rather than a static image.',tags:['Wedding','Engagement','Birthday','Graduation','Baby Shower','Events','Music','Photos','Location','Countdown','RSVP','Google Maps']}
]; }
