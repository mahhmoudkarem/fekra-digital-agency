import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../services/language.service';

@Component({selector:'app-contact',standalone:true,imports:[FormsModule, NgFor, NgIf],template:`
<section class="page-hero contact-hero"><div class="section-tag reveal">{{ ar ? 'تواصل معنا / ابدأ هنا' : 'CONTACT / START HERE' }}</div><h1 class="reveal">{{ ar ? 'احكيلنا عن' : 'Tell us the' }}<br><span>{{ ar ? 'فكرتك.' : 'Fekra.' }}</span></h1><p class="reveal">{{ ar ? 'عندك فكرة موقع أو تطبيق أو نظام أو منصة إلكترونية أو هوية بصرية أو مشروع جامعي؟ ابدأ معانا من الفكرة الأولية.' : 'Have a business idea, app, system, electronic platform, brand, academic project or digital invitation in mind? Start with the rough version.' }}</p></section>
<section class="contact section"><form (ngSubmit)="submitBrief(f)" #f="ngForm" class="contact-form reveal-left"><div class="form-row"><label>{{ ar ? 'الاسم' : 'Name' }}<input name="name" ngModel required [placeholder]="ar ? 'اسمك' : 'Your name'"></label><label>{{ ar ? 'البريد الإلكتروني' : 'Email' }}<input name="email" ngModel required type="email" placeholder="you@company.com"></label></div><label>{{ ar ? 'رقم الهاتف' : 'Phone' }}<input name="phone" ngModel placeholder="01554889771"></label><label>{{ ar ? 'ماذا تحتاج؟' : 'What do you need?' }}<select name="service" ngModel><option value="">{{ ar ? 'اختر خدمة' : 'Select a service' }}</option><option *ngFor="let s of (ar ? servicesAr : services)">{{s}}</option></select></label><label>{{ ar ? 'احكيلنا عن المشروع' : 'Tell us about the project' }}<textarea name="message" ngModel rows="6" [placeholder]="ar ? 'اكتب نبذة عن فكرتك...' : 'A few words about your idea...'"></textarea></label><button class="btn primary" [disabled]="!f.valid">{{ ar ? 'إرسال تفاصيل المشروع' : 'Send project brief' }} ↗</button><p class="success" *ngIf="submitted">{{ ar ? 'سيتم فتح تطبيق البريد لإرسال تفاصيل المشروع إلى فكرا.' : 'Your email app is opening with the project brief ready to send to FEKRA.' }}</p></form><aside class="contact-aside reveal-right"><div class="section-tag">{{ ar ? 'تواصل مباشر' : 'DIRECT CONTACT' }}</div><h3>{{ ar ? 'خلينا نتكلم.' : "Let's talk." }}</h3><p>{{ ar ? 'اختار وسيلة التواصل الأنسب لك. جاهزين نناقش المواقع والتطبيقات والمنصات والأنظمة والتصميم والمشروعات الجامعية وخدمات المسار المهني.' : 'Use whichever channel is easiest. We are ready to discuss websites, apps, electronic platforms, systems, design, academic support, career services and digital invitations.' }}</p><a class="contact-detail" href="mailto:fekra.digital.agency@gmail.com"><span>Email</span><b>fekra.digital.agency@gmail.com</b></a><a class="contact-detail" href="tel:01554889771"><span>Phone</span><b>01554889771</b></a><a class="contact-detail" href="https://wa.me/201554889771" target="_blank" rel="noopener"><span>WhatsApp</span><b>{{ ar ? 'تحدث مع فكرا' : 'Chat with FEKRA' }} ↗</b></a><div class="contact-detail"><span>{{ ar ? 'متاحون لـ' : 'Availability' }}</span><b>{{ ar ? 'مشروعات • شراكات • حلول مخصصة' : 'Projects • Partnerships • Custom Builds' }}</b></div></aside></section>`})
export class ContactComponent {
  submitted=false;
  get ar(): boolean { return this.languageService.isArabic(); }
  services=['Web Development','Mobile App Development','Electronic Platforms','Software Systems','UI/UX & Branding','Academic Project Development & Support','Career Services','Digital Invitations'];
  servicesAr=['تطوير المواقع','تطبيقات الموبايل','منصات إلكترونية','الأنظمة البرمجية','UI/UX والهوية البصرية','المشروعات الأكاديمية','خدمات المسار المهني','الدعوات الرقمية'];

  constructor(private languageService: LanguageService) {}

  submitBrief(form: any): void {
    if (!form.valid) return;
    const v = form.value;
    const subject = encodeURIComponent(`New FEKRA Project Brief — ${v.name}`);
    const body = encodeURIComponent(`Name: ${v.name}\nEmail: ${v.email}\nPhone: ${v.phone || '-'}\nService: ${v.service || '-'}\n\nProject details:\n${v.message || '-'}\n\nFEKRA Digital Agency`);
    window.location.href = `mailto:fekra.digital.agency@gmail.com?subject=${subject}&body=${body}`;
    this.submitted = true;
  }
}
