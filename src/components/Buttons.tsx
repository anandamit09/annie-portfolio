import { ArrowUpRight } from 'lucide-react';

type ContactButtonProps = { href?: string; label?: string; className?: string };

/** Dark → deep-red pill with white offset outline. Scrolls to the contact section by default. */
export function ContactButton({ href = '#contact', label = 'Contact Me', className = '' }: ContactButtonProps) {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center gap-2 whitespace-nowrap rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white outline outline-2 outline-offset-[-3px] outline-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-12px_rgba(159,5,5,0.9)] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
      style={{
        background: 'linear-gradient(110deg, #0C0C0C 0%, #3a0303 45%, #9F0505 100%)',
        boxShadow: 'inset 0 2px 10px rgba(255,255,255,0.12), inset 0 -6px 14px rgba(0,0,0,0.45)',
      }}
    >
      {label}
      <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

type ProjectButtonProps = { href: string; label?: string; projectName: string; ink: string; accent: string };

/** Outlined pill that opens a project's detail page, in that project's colours. */
export function ProjectButton({ href, label = 'Explore Project', projectName, ink, accent }: ProjectButtonProps) {
  return (
    <a
      href={href}
      aria-label={`${label}: ${projectName}`}
      className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 px-5 py-2 text-[0.7rem] font-medium uppercase tracking-widest transition-colors duration-300 sm:px-9 sm:py-3.5 sm:text-base"
      style={{ borderColor: ink, color: ink }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = accent;
        e.currentTarget.style.background = accent;
        e.currentTarget.style.color = '#fff';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = ink;
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = ink;
      }}
    >
      {label}
      <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
    </a>
  );
}
