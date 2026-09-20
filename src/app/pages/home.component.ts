import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor],
  template: `
    <section class="hero">
      <div class="hero-grid"></div><div class="hero-glow glow-one"></div><div class="hero-glow glow-two"></div>
      <div class="hero-copy reveal">
        <div class="eyebrow"><span></span> {{ ar ? 'وكالة رقمية • مواقع • تطبيقات • منصات إلكترونية' : 'DIGITAL AGENCY • WEB • MOBILE • ELECTRONIC PLATFORMS' }}</div>
        <h1>{{ ar ? 'الأفكار تصبح' : 'Ideas become' }}<br><em>{{ ar ? 'رقمية.' : 'digital.' }}</em></h1>
        <p class="hero-sub">{{ ar ? 'نحوّل الأفكار إلى مواقع وتطبيقات وأنظمة ومنصات إلكترونية وهوية بصرية وتجارب رقمية مصممة حول احتياجات مشروعك.' : 'FEKRA turns ambitious ideas into polished websites, mobile apps, electronic platforms, software systems, brands and digital experiences built around real business needs.' }}</p>
        <div class="hero-actions"><a class="btn primary" routerLink="/contact">{{ ar ? 'ابدأ مشروعك' : 'Start your project' }} <span>↗</span></a><a class="btn ghost" href="#capabilities">{{ ar ? 'اكتشف خدماتنا' : 'Explore capabilities' }} <span>↓</span></a></div>
        <div class="hero-trust"><span>01</span><span>DESIGN</span><i></i><span>02</span><span>DEVELOPMENT</span><i></i><span>03</span><span>LAUNCH</span></div>
      </div>
      <div class="hero-orbit" aria-hidden="true"><div class="orbit orbit-a"></div><div class="orbit orbit-b"></div><div class="orbit orbit-c"></div><div class="orbit-dot dot-a"></div><div class="orbit-dot dot-b"></div><div class="orbit-core"><img class="orbit-icon mark-icon" src="fekra-mark.svg" alt=""></div></div>
      <div class="hero-scroll">SCROLL TO EXPLORE <span></span></div>
    </section>

    <section class="marquee" aria-hidden="true"><div class="marquee-track"><span>WEB DEVELOPMENT</span><b>✦</b><span>MOBILE APPS</span><b>✦</b><span>SOFTWARE SYSTEMS</span><b>✦</b><span>UI/UX & BRANDING</span><b>✦</b><span>ACADEMIC SUPPORT</span><b>✦</b><span>CAREER SERVICES</span><b>✦</b><span>DIGITAL INVITATIONS</span><b>✦</b></div></section>

    <section class="statement section reveal" id="capabilities"><div class="section-tag">01 / THE FEKRA WAY</div><div class="statement-text">{{ ar ? 'شريك تقني وإبداعي واحد لكل' : 'One creative technology partner for the' }} <span>{{ ar ? 'رحلتك الرقمية.' : 'entire digital journey.' }}</span></div><p class="statement-note">{{ ar ? 'من الفكرة الأولى إلى المنتج المُطلق، فكرا تربط الاستراتيجية والتصميم والهندسة والدعم الرقمي دون تسليمات زائدة.' : 'From a first idea to a launched product, FEKRA connects strategy, design, engineering and digital support without unnecessary handoffs.' }}</p></section>

    <section class="services-preview section">
      <div class="section-head reveal"><div><div class="section-tag">02 / {{ ar ? 'خدماتنا' : 'CAPABILITIES' }}</div><h2>{{ ar ? 'كل ما تحتاجه.' : 'Everything you need.' }}<br><span>{{ ar ? 'في مكان واحد.' : 'Under one roof.' }}</span></h2></div><a routerLink="/services" class="text-link">{{ ar ? 'كل الخدمات' : 'View all services' }} ↗</a></div>
      <div class="service-grid">
        <article class="service-card reveal" *ngFor="let s of services; let i=index" [style.--delay.ms]="i * 70"><span class="num">0{{i+1}}</span><div class="service-icon">{{s.icon}}</div><h3>{{ ar ? s.arTitle : s.title }}</h3><p>{{ ar ? s.arText : s.text }}</p><div class="service-mini">{{s.count}}+ {{ ar ? 'إمكانية' : 'capabilities' }}</div><a routerLink="/services">{{ ar ? 'المزيد' : 'Explore' }} <span>↗</span></a></article>
      </div>
    </section>

    <section class="numbers section">
      <div class="number-card scale-in"><span>07</span><strong>{{ ar ? 'مجالات خدمة' : 'Service lines' }}</strong><small>{{ ar ? 'من المنتجات الرقمية إلى خدمات المسار المهني.' : 'From digital products to career services.' }}</small></div>
      <div class="number-card scale-in"><span>01</span><strong>{{ ar ? 'فريق متكامل' : 'Connected team' }}</strong><small>{{ ar ? 'تصميم وتطوير وتسليم في مكان واحد.' : 'Design, development and delivery in one place.' }}</small></div>
      <div class="number-card scale-in"><span>∞</span><strong>{{ ar ? 'إمكانيات بلا حدود' : 'Possibilities' }}</strong><small>{{ ar ? 'حلول مخصصة حسب احتياجاتك الحقيقية.' : 'Custom solutions shaped around your actual needs.' }}</small></div>
    </section>

    <section class="featured section"><div class="section-head reveal"><div><div class="section-tag">03 / {{ ar ? 'أعمال مختارة' : 'SELECTED BUILDS' }}</div><h2>{{ ar ? 'منتجات حقيقية.' : 'Real products.' }}<br><span>{{ ar ? 'طبقات رقمية حقيقية.' : 'Real digital layers.' }}</span></h2></div><a routerLink="/projects" class="text-link">{{ ar ? 'كل المشروعات' : 'See all projects' }} ↗</a></div><div class="project-feature reveal-right"><div class="project-art art-one"><div class="floating-ui ui-one">WEB</div><div class="floating-ui ui-two">MOBILE</div><div class="floating-ui ui-three">SYSTEM</div><div class="mock-browser"><div class="mock-top"><b>FEKRA</b><span>● ● ●</span></div><div class="mock-body"><small>{{ ar ? 'منتج رقمي' : 'DIGITAL PRODUCT' }}</small><strong>{{ ar ? 'ابنِ.' : 'Build.' }}<br>{{ ar ? 'أطلق.' : 'Launch.' }}<br><em>{{ ar ? 'انمُ.' : 'Grow.' }}</em></strong><div class="mock-bar"></div></div></div></div><div class="project-info"><div class="project-kicker">01 — {{ ar ? 'تجربة متكاملة من البداية للنهاية' : 'END-TO-END EXPERIENCE' }}</div><h3>{{ ar ? 'من أول رسمة' : 'From first sketch' }}<br><span>{{ ar ? 'إلى منتج جاهز على الإنترنت.' : 'to live product.' }}</span></h3><p>{{ ar ? 'نصمم الواجهة، نبني المنتج، نربط الـ APIs والخدمات، نجهز لوحات التحكم ونساعد نوصل الفكرة من التصور إلى الإطلاق.' : 'We can design the interface, engineer the product, connect APIs and services, prepare dashboards and help take the result from concept to launch.' }}</p><div class="chips"><span>UI/UX</span><span>Angular</span><span>Flutter</span><span>.NET</span><span>Firebase</span><span>APIs</span></div><a class="btn small-btn" routerLink="/projects">{{ ar ? 'شوف أعمالنا' : 'Explore selected work' }} ↗</a></div></div></section>

    <section class="process section"><div class="section-tag reveal">04 / {{ ar ? 'خطوات العمل' : 'PROCESS' }}</div><h2 class="reveal">{{ ar ? 'فكّر. صمّم.' : 'Think. Design.' }} <span>{{ ar ? 'ابنِ. انمُ.' : 'Build. Grow.' }}</span></h2><div class="process-line"><div class="stagger-item" *ngFor="let p of process;let i=index" [style.--delay.ms]="i * 100"><b>0{{i+1}}</b><div class="process-marker"></div><h3>{{ ar ? p.arT : p.t }}</h3><p>{{ ar ? p.arD : p.d }}</p></div></div></section>

    <section class="cta-band"><div class="cta-grid"></div><div class="cta-shape"></div><div class="section-tag">05 / {{ ar ? 'خطوتك القادمة' : 'YOUR NEXT MOVE' }}</div><h2>{{ ar ? 'عندك فكرة؟' : 'Have an idea?' }}<br><span>{{ ar ? 'خلينا نبنيها.' : "Let's build it." }}</span></h2><p>{{ ar ? 'احكيلنا عن فكرتك وسنساعدك نحولها إلى اتجاه رقمي واضح.' : 'Tell us what you are trying to create. We will help turn the rough idea into a clear digital direction.' }}</p><a class="btn light" routerLink="/contact">{{ ar ? 'ابدأ محادثة' : 'Start a conversation' }} ↗</a></section>
  `
})
export class HomeComponent {
  get ar(): boolean { return this.languageService.isArabic(); }

  constructor(private languageService: LanguageService) {}
  services = [
    { icon:'◫', title:'Web Development', arTitle:'تطوير المواقع', count:8, text:'Websites, landing pages, e-commerce, dashboards, admin panels, web apps, electronic platforms and booking experiences for businesses.', arText:'مواقع، صفحات هبوط، متاجر إلكترونية، لوحات تحكم وإدارة، تطبيقات ويب، منصات إلكترونية وأنظمة حجز للشركات.' },
    { icon:'⌁', title:'Mobile App Development', arTitle:'تطوير تطبيقات الموبايل', count:6, text:'Android & iOS apps with Flutter, APIs and Firebase for stores, services, bookings and custom products.', arText:'تطبيقات Android وiOS باستخدام Flutter مع APIs وFirebase للمتاجر والخدمات والحجوزات والمنتجات المخصصة.' },
    { icon:'▱', title:'Software Systems', arTitle:'الأنظمة البرمجية', count:10, text:'Management, POS, inventory, HR, CRM, school, academy, restaurant and custom business systems.', arText:'أنظمة إدارة، نقاط بيع، مخازن، موارد بشرية، CRM، مدارس وأكاديميات ومطاعم وأنظمة أعمال مخصصة.' },
    { icon:'✦', title:'UI/UX & Branding', arTitle:'UI/UX والهوية البصرية', count:7, text:'UI/UX, website and app design, logos, brand identity, social media design and scalable design systems.', arText:'تصميم UI/UX للمواقع والتطبيقات، لوجوهات، هوية بصرية، تصميم سوشيال ميديا وأنظمة تصميم قابلة للتوسع.' },
    { icon:'⌘', title:'Academic Projects', arTitle:'المشروعات الأكاديمية', count:9, text:'Graduation and university software projects, documentation, presentations, UML, ERD, Use Cases and preparation.', arText:'مشروعات تخرج وجامعية، توثيق، عروض تقديمية، UML وERD وUse Cases وتجهيز كامل للمناقشة.' },
    { icon:'↗', title:'Career Services', arTitle:'خدمات المسار المهني', count:7, text:'ATS-friendly CVs, CV design, portfolios, LinkedIn profiles, personal websites, cover letters and optimization.', arText:'سير ذاتية متوافقة مع ATS، تصميم CV، بورتفوليو، بروفايل LinkedIn، موقع شخصي وخطابات تقديم.' },
    { icon:'♡', title:'Digital Invitations', arTitle:'الدعوات الرقمية', count:6, text:'Interactive wedding, engagement, birthday, graduation and event invitations with RSVP, music, maps and countdowns.', arText:'دعوات تفاعلية للأفراح والخطوبة وأعياد الميلاد والتخرج والمناسبات مع RSVP وموسيقى وخرائط وعد تنازلي.' }
  ];
  process = [
    { t:'Discover', arT:'الاكتشاف', d:'Understand the idea, business, audience and the outcome that matters.', arD:'فهم الفكرة والمشروع والجمهور والنتيجة المطلوبة.' },
    { t:'Design', arT:'التصميم', d:'Shape the experience, interface, visual language and product structure.', arD:'تشكيل التجربة والواجهة واللغة البصرية وهيكل المنتج.' },
    { t:'Build', arT:'البناء', d:'Engineer the product, connect APIs, test the details and make it responsive.', arD:'بناء المنتج، ربط الـ APIs، اختبار التفاصيل وجعله متجاوبًا.' },
    { t:'Launch', arT:'الإطلاق', d:'Prepare the final product, handover and the next steps for growth.', arD:'تجهيز المنتج النهائي والتسليم وخطوات النمو القادمة.' }
  ];
}
