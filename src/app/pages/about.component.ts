import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({selector:'app-about',standalone:true,imports:[RouterLink],template:`
<section class="page-hero"><div class="section-tag reveal">{{ ar ? 'عن فكرا / الحكاية' : 'ABOUT / THE STORY' }}</div><h1 class="reveal">{{ ar ? 'أكثر من كود.' : 'More than code.' }}<br><span>{{ ar ? 'شريكك الرقمي.' : 'A digital partner.' }}</span></h1><p class="reveal">{{ ar ? 'فكرا تجمع الأفكار والتصميم والتكنولوجيا والتنفيذ لبناء مواقع وتطبيقات ومنصات إلكترونية وحلول رقمية واضحة ومفيدة.' : 'FEKRA brings ideas, design, technology and execution together to make websites, apps, electronic platforms and digital products feel clear, useful and intentional.' }}</p></section>
<section class="about-story section"><div class="story-big reveal-left">A <span>Fekra</span><br>{{ ar ? 'هنا تبدأ الفكرة.' : 'is where it starts.' }}</div><div class="story-copy reveal-right"><p>{{ ar ? 'فكرا وكالة رقمية حديثة مبنية على إيمان بسيط: كل منتج رقمي جيد يبدأ بفكرة واضحة ويستحق تنفيذًا مدروسًا.' : 'FEKRA is a modern digital agency built around a simple belief: every good digital product starts with a clear idea and deserves thoughtful execution.' }}</p><p>{{ ar ? 'نعمل على المواقع والتطبيقات والمنصات الإلكترونية والأنظمة والتصميم والمشروعات الأكاديمية والحضور المهني والدعوات التفاعلية.' : 'We work across websites, apps, electronic platforms, systems, design, academic software, career presence and interactive invitations.' }}</p><div class="mini-stats"><div><b>01</b><span>{{ ar ? 'تفكير يبدأ من الفكرة' : 'Idea-first thinking' }}</span></div><div><b>02</b><span>{{ ar ? 'تنفيذ متكامل' : 'End-to-end delivery' }}</span></div><div><b>03</b><span>{{ ar ? 'جاهزون للنمو' : 'Built for growth' }}</span></div></div></div></section>
<section class="values section"><div class="section-tag reveal">{{ ar ? 'قيمنا / كيف نعمل' : 'VALUES / HOW WE WORK' }}</div><div class="values-grid"><div class="reveal" *ngFor="let v of values;let i=index"><b>0{{i+1}}</b><h3>{{ ar ? v.arT : v.t }}</h3><p>{{ ar ? v.arD : v.d }}</p></div></div></section>
<section class="cta-band compact"><div class="section-tag">{{ ar ? 'اعمل مع فكرا' : 'WORK WITH FEKRA' }}</div><h2>{{ ar ? 'خلينا نحول' : "Let's turn your" }}<br><span>{{ ar ? 'فكرتك إلى قيمة.' : 'idea into value.' }}</span></h2><a class="btn light" routerLink="/contact">{{ ar ? 'ابدأ محادثة' : 'Start a conversation' }} ↗</a></section>`})
export class AboutComponent {
  get ar(): boolean { return this.languageService.isArabic(); }
  constructor(private languageService: LanguageService) {}
  values=[
    {t:'Clarity',arT:'الوضوح',d:'Simple communication, clear scope and focused solutions.',arD:'تواصل بسيط ونطاق واضح وحلول مركزة.'},
    {t:'Craft',arT:'الإتقان',d:'Interfaces and systems where the details have a reason.',arD:'واجهات وأنظمة لكل تفصيلة فيها هدف.'},
    {t:'Flexibility',arT:'المرونة',d:'The stack and workflow follow the project, not the other way around.',arD:'التقنيات وطريقة العمل تتبع احتياجات المشروع.'},
    {t:'Reliability',arT:'الاعتمادية',d:'A product should be understandable, maintainable and ready for its next step.',arD:'المنتج يكون مفهومًا وقابلًا للصيانة وجاهزًا للخطوة التالية.'}
  ];
}
