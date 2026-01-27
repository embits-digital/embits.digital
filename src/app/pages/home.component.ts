import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { SITE } from '../content';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="shell">
      <header class="hero">
        <div class="brand">
          <div class="logo" aria-hidden="true"></div>
          <div class="titles">
            <h1 style="text-transform: uppercase;">{{ site.brand }}</h1>
            <p class="tagline">{{ site.tagline }}</p>
          </div>
        </div>

        <a class="cta" [href]="site.contact.linkedinUrl" target="_blank" rel="noopener noreferrer">
          {{ site.contact.primaryActionLabel }}
        </a>
      </header>

      <section class="card" aria-labelledby="about">
        <h2 id="about">Overview</h2>
        <p *ngFor="let p of site.aboutShort">{{ p }}</p>
      </section>

      <section class="card" aria-labelledby="engagements">
        <h2 id="engagements">{{ site.engagementsTitle }}</h2>
        <ul>
          <li *ngFor="let item of site.engagements">{{ item }}</li>
        </ul>
        <p class="disclaimer">* {{ site.disclaimer }}</p>
        <ul class="chips">
          <li *ngFor="let s of site.services" class="chip">{{ s }}</li>
        </ul>
      </section>

      <footer class="footer">
        <a href="mailto:elionai@embits.digital" target="_blank" rel="noopener noreferrer">elionai&#64;embits.digital</a>
        <span class="dot">·</span>
        <a [href]="site.contact.linkedinUrl" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </footer>
    </main>
  `,
  styles: [`
    :host { display: block; }
    .shell { max-width: 920px; margin: 0 auto; padding: 48px 20px; font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
    .hero { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; margin-bottom: 28px; }
    .brand { display: flex; gap: 16px; align-items: center; }
    .logo {
      width: 64px;
      height: 64px;
      border-radius: 14px;
      background-image: url('/embits.digital/embits_digital_logo.jpeg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    h1 { font-size: 28px; margin: 0; letter-spacing: .2px; }
    .tagline { margin: 6px 0 0; color: rgba(0,0,0,.72); }
    .meta { margin: 6px 0 0; color: rgba(0,0,0,.55); font-size: 13px; }
    .cta { align-self: center; text-decoration: none; padding: 10px 14px; border: 1px solid rgba(0,0,0,.14); border-radius: 10px; color: rgba(0,0,0,.82); }
    .card { padding: 18px 18px; margin: 12px 0; }
    h2 { margin: 0 0 10px; font-size: 16px; letter-spacing: .2px; }
    p { margin: 0 0 10px; line-height: 1.55; color: rgba(0,0,0,.78); }
    ul { margin: 0; padding-left: 18px; color: rgba(0,0,0,.78); }
    li { margin: 6px 0; line-height: 1.45; }
    .disclaimer { margin-top: 10px; font-size: 13px; color: rgba(0,0,0,.58); }
    .chips { list-style: none; padding: 18px 0 0 0; margin: 0; display: flex; gap: 8px; flex-wrap: wrap; }
    .chip { padding: 8px 10px; border: 1px solid rgba(0,0,0,.10); border-radius: 999px; font-size: 13px; }
    .footer { margin: 22px 0 0 28px; display: flex; gap: 10px; align-items: center; color: rgba(0,0,0,.58); font-size: 13px; }
    .footer a { color: inherit; text-decoration: none; border-bottom: 1px solid rgba(0,0,0,.18); }
    .dot { opacity: .6; }
    @media (max-width: 640px) { .hero { flex-direction: column; align-items: stretch; } .cta { align-self: flex-start; } }
  `],
})
export class HomeComponent {
  site = SITE;

  private title = inject(Title);
  private meta = inject(Meta);

  constructor() {
    this.title.setTitle(`${this.site.brand} — ${this.site.tagline}`);
    this.meta.updateTag({ name: 'description', content: this.site.aboutShort.join(' ') });
    this.meta.updateTag({ name: 'robots', content: 'index,follow' });
  }
}
