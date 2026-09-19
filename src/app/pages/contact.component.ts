import { Component } from '@angular/core'; import { NgFor } from '@angular/common'; import { FormsModule } from '@angular/forms';
@Component({selector:'app-contact',standalone:true,imports:[FormsModule, NgFor],template:`
<section class="page-hero contact-hero"><div class="section-tag reveal">CONTACT / START HERE</div><h1 class="reveal">Tell us the<br><span>Fekra.</span></h1><p class="reveal">Have a business idea, app, system, brand, academic project or digital invitation in mind? Start with the rough version.</p></section>
<section class="contact section"><form (ngSubmit)="submitBrief(f)" #f="ngForm" class="contact-form reveal-left"><div class="form-row"><label>Name<input name="name" ngModel required placeholder="Your name"></label><label>Email<input name="email" ngModel required type="email" placeholder="you@company.com"></label></div><label>Phone<input name="phone" ngModel placeholder="01554889771"></label><label>What do you need?<select name="service" ngModel><option value="">Select a service</option><option *ngFor="let s of services">{{s}}</option></select></label><label>Tell us about the project<textarea name="message" ngModel rows="6" placeholder="A few words about your idea..."></textarea></label><button class="btn primary" [disabled]="!f.valid">Send project brief ↗</button><p class="success" *ngIf="submitted">Your email app is opening with the project brief ready to send to FEKRA.</p></form><aside class="contact-aside reveal-right"><div class="section-tag">DIRECT CONTACT</div><h3>Let's talk.</h3><p>Use whichever channel is easiest. We are ready to discuss websites, apps, systems, design, academic support, career services and digital invitations.</p><a class="contact-detail" href="mailto:fekra.degital.agency@gmail.com"><span>Email</span><b>fekra.degital.agency@gmail.com</b></a><a class="contact-detail" href="tel:01554889771"><span>Phone</span><b>01554889771</b></a><a class="contact-detail" href="https://wa.me/201554889771" target="_blank" rel="noopener"><span>WhatsApp</span><b>Chat with FEKRA ↗</b></a><div class="contact-detail"><span>Availability</span><b>Projects • Partnerships • Custom Builds</b></div></aside></section>`})
export class ContactComponent {
  submitted=false;
  services=['Web Development','Mobile App Development','Software Systems','UI/UX & Branding','Academic Project Development & Support','Career Services','Digital Invitations'];

  submitBrief(form: any): void {
    if (!form.valid) return;
    const v = form.value;
    const subject = encodeURIComponent(`New FEKRA Project Brief — ${v.name}`);
    const body = encodeURIComponent(
      `Name: ${v.name}\nEmail: ${v.email}\nPhone: ${v.phone || '-'}\nService: ${v.service || '-'}\n\nProject details:\n${v.message || '-'}\n\nFEKRA Digital Agency`
    );
    window.location.href = `mailto:fekra.degital.agency@gmail.com?subject=${subject}&body=${body}`;
    this.submitted = true;
  }
}
