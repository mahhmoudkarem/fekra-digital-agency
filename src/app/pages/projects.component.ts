import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({selector:'app-projects',standalone:true,imports:[NgFor,RouterLink],template:`
<section class="page-hero"><div class="section-tag reveal">{{ ar ? 'المشروعات / نماذج مختارة' : 'PROJECTS / SELECTED BUILDS' }}</div><h1 class="reveal">{{ ar ? 'مشروعات تجعل' : 'Work that makes' }}<br><span>{{ ar ? 'الأفكار مرئية.' : 'ideas visible.' }}</span></h1><p class="reveal">{{ ar ? 'نماذج من المنتجات الرقمية والأنظمة وتجارب الهوية التي تستطيع فكرا تنفيذها.' : 'A showcase of the kind of digital products, systems, electronic platforms and brand experiences FEKRA can create.' }}</p></section>
<section class="projects section"><article class="case reveal" *ngFor="let p of projects;let i=index"><div class="case-visual" [class]="p.cls"><div class="case-glow"></div><div class="case-inner"><span>{{p.category}}</span><strong>{{p.visual}}</strong><small>{{p.stack}}</small></div></div><div class="case-copy"><div class="section-tag">0{{i+1}} / {{p.category}}</div><h2>{{p.title}}</h2><p>{{ ar ? p.arDesc : p.desc }}</p><div class="tag-row"><span *ngFor="let x of p.tags">{{x}}</span></div></div></article></section>
<section class="project-note section reveal"><div><div class="section-tag">{{ ar ? 'أكثر من مجرد معرض أعمال' : 'MORE THAN A SHOWCASE' }}</div><h2>{{ ar ? 'مشروعك ممكن يكون' : 'Your project can be the next' }} <span>{{ ar ? 'المشروع القادم.' : 'case study.' }}</span></h2></div><p>{{ ar ? 'فكرا جاهزة للتعامل مع مواقع عامة ومنتجات موبايل وأنظمة تشغيلية ومنصات إلكترونية وتصميم ومشروعات أكاديمية ودعوات رقمية.' : 'FEKRA is built to handle public websites, mobile products, operational systems, electronic platforms, design work, academic software and digital invitations.' }}</p></section>
<section class="cta-band compact"><div class="section-tag">{{ ar ? 'مشروعك ممكن يكون التالي' : 'YOUR PROJECT COULD BE NEXT' }}</div><h2>{{ ar ? 'خلينا نخليه' : "Let's make it" }}<br><span>{{ ar ? 'يستحق العرض.' : 'worth showing.' }}</span></h2><a class="btn light" routerLink="/contact">{{ ar ? 'ابدأ مشروعك' : 'Start a project' }} ↗</a></section>`})
export class ProjectsComponent {
  get ar(): boolean { return this.languageService.isArabic(); }
  constructor(private languageService: LanguageService) {}
  projects=[
    {title:'Luna Accessories',category:'WEB / E-COMMERCE',visual:'LUNA / SHOP',stack:'Angular • Firebase',desc:'A polished accessories storefront direction focused on product presentation, responsive browsing and a memorable brand identity.',arDesc:'متجر إكسسوارات يركز على عرض المنتجات والتصفح المتجاوب وهوية بصرية مميزة.',tags:['E-commerce','Angular','Branding'],cls:'case-purple'},
    {title:'Gym Management Platform',category:'MOBILE / MANAGEMENT',visual:'GYM / CONTROL',stack:'Flutter • Firebase • BLoC',desc:'A mobile management experience designed for day-to-day gym operations, with a structured architecture and connected backend services.',arDesc:'تجربة موبايل لإدارة عمليات الجيم اليومية مع هيكل منظم وخدمات Backend متصلة.',tags:['Flutter','Firebase','Management'],cls:'case-dark'},
    {title:'Fruit Hub',category:'MOBILE / E-COMMERCE',visual:'FRUIT / SHOP',stack:'Flutter • Supabase • APIs',desc:'An e-commerce mobile concept for discovering products and moving through a clean shopping journey.',arDesc:'تطبيق تجارة إلكترونية لاكتشاف المنتجات وتجربة شراء بسيطة وواضحة.',tags:['Mobile','E-commerce','APIs'],cls:'case-light'},
    {title:'ElZainhom',category:'WEB / BUSINESS SYSTEM',visual:'BUSINESS / GROW',stack:'Angular • .NET • APIs',desc:'A business website and management direction combining customer information, product categories, contact flows and an admin experience.',arDesc:'موقع ونظام أعمال يجمع بيانات العملاء وتصنيفات المنتجات وتدفقات التواصل وتجربة الإدارة.',tags:['Angular','.NET','Admin Panel'],cls:'case-purple'}
  ];
}
