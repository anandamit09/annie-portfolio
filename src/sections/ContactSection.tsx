import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import type { ReactNode } from 'react';
import FadeIn from '../components/FadeIn';
import { ContactButton } from '../components/Buttons';
import { site } from '../config';

export default function ContactSection() {
  const socials = site.socials.filter((s) => s.url);
  const hasEmail = Boolean(site.email);
  const hasPhone = Boolean(site.phone && site.phoneHref);

  return (
    <section id="contact" className="grain relative z-20 overflow-x-clip bg-night px-5 pb-10 pt-28 sm:px-8 md:px-10 md:pt-40">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-berry to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <FadeIn y={20}>
          <span className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.35em] text-berry sm:text-sm">The last page</span>
        </FadeIn>
        <FadeIn delay={0.1} y={40}>
          <h2 className="text-gradient font-black uppercase leading-[0.9] tracking-tight" style={{ fontSize: 'clamp(2.6rem, 10vw, 150px)' }}>
            Have a project
            <br />
            in mind<span className="text-gradient-berry">?</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2} y={20}>
          <p className="mt-8 max-w-md font-light text-cream sm:mt-10" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.4rem)' }}>
            Let’s connect over textiles, ideas and possibilities.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} y={20} className="mt-12 flex w-full flex-col items-center gap-8 sm:mt-14">
          <ContactButton href={hasEmail ? `mailto:${site.email}` : hasPhone ? site.phoneHref : '#contact'} label="Contact Me" />

          <div className="w-full max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-cream/60">{site.designer} · Textile Designer</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {hasEmail && (
                <li>
                  <ContactCard href={`mailto:${site.email}`} label="Email" value={site.email} icon={<Mail aria-hidden className="h-5 w-5" />} />
                </li>
              )}
              {hasPhone && (
                <li>
                  <ContactCard href={site.phoneHref} label="Phone" value={site.phone} icon={<Phone aria-hidden className="h-5 w-5" />} />
                </li>
              )}
            </ul>
          </div>

          {socials.length > 0 && (
            <ul className="flex flex-wrap justify-center gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-cream/40 px-4 py-2 text-xs font-medium uppercase tracking-widest text-cream transition-colors hover:border-berry hover:bg-berry hover:text-bone"
                  >
                    {s.label}
                    <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </FadeIn>
      </div>

      <footer className="mx-auto mt-28 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-cream/15 pt-8 text-xs uppercase tracking-[0.25em] text-cream/60 sm:flex-row md:mt-40">
        <span>Annie — Textile Designer · {site.designer}</span>
        <a href="#top" className="transition-colors hover:text-berry">
          Back to top ↑
        </a>
      </footer>
    </section>
  );
}

function ContactCard({ href, label, value, icon }: { href: string; label: string; value: string; icon: ReactNode }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 rounded-[28px] border border-cream/20 bg-surface px-5 py-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-berry hover:shadow-[0_18px_50px_-24px_rgba(161,30,89,0.9)] sm:px-6 sm:py-5"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-berry text-bone transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-cream/60">{label}</span>
        <span className="truncate font-medium text-cream transition-colors group-hover:text-bone" style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)' }}>
          {value}
        </span>
      </span>
      <ArrowUpRight aria-hidden className="ml-auto h-5 w-5 shrink-0 text-cream/50 transition-all duration-300 group-hover:rotate-45 group-hover:text-berry" />
    </a>
  );
}
