import './_group.css';
import { Mail, PhoneCall, MapPin } from 'lucide-react';

/* ─── Design tokens ─────────────────────────────────────── */
const C = {
  bg:          '#F7F7F5',
  surface:     '#FFFFFF',
  name:        '#0D1117',
  heading:     '#18181B',
  accent:      '#355CDE',
  accentLight: '#4171F5',
  body:        '#374151',
  meta:        '#6B7A8D',
  subtle:      '#9BAAB8',
  divider:     '#E4EAF2',
  /* chip variants */
  chip: {
    frontend: { bg: '#EEF4FF', border: '#C7D7FF', text: '#355CDE' },
    backend:  { bg: '#EDFBF5', border: '#A8DFCA', text: '#1A7A5C' },
    tools:    { bg: '#F3F0FF', border: '#C9BCFA', text: '#5444C4' },
  },
  /* strength chips */
  tag: { bg: '#EEF4FF', border: '#D6E4FF', text: '#355CDE' },
  /* language bars */
  barFill:  '#355CDE',
  barEmpty: '#DCE6FF',
};

/* ─── Data ──────────────────────────────────────────────── */
const techStack = [
  {
    category: 'Frontend',
    variant: 'frontend' as const,
    items: [
      { name: 'HTML5',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    ],
  },
  {
    category: 'Backend & Database',
    variant: 'backend' as const,
    items: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'EJS',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ],
  },
  {
    category: 'Tools',
    variant: 'tools' as const,
    items: [
      { name: 'MS Office',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg' },
      { name: 'AI Tools',     icon: null },
      { name: 'Social Media', icon: null },
    ],
  },
];

const focusAreas = [
  'Web Application Development',
  'Mobile App Experimentation',
  'AI Workflow Exploration',
  'Productive Digital Systems',
];

const languages = [
  { lang: 'Urdu',    level: 'Native',            fill: 5 },
  { lang: 'English', level: 'Upper Intermediate', fill: 3.5 },
];

const strengths = [
  'Creative Problem Solving',
  'Strategic Thinking',
  'Deep Focus',
  'Independent Development',
  'Strong Curiosity',
  'Innovation Mindset',
];

const learning = ['Vibe Coding', 'Communication Skills', 'AI Systems'];

/* ─── Sub-components ────────────────────────────────────── */
function LanguageBar({ fill }: { fill: number }) {
  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {Array.from({ length: 5 }).map((_, i) => {
        const frac = Math.min(1, Math.max(0, fill - i));
        return (
          <div key={i} style={{
            width: '30px', height: '3px', borderRadius: '2px',
            background: `linear-gradient(to right, ${C.barFill} ${frac * 100}%, ${C.barEmpty} ${frac * 100}%)`,
          }} />
        );
      })}
    </div>
  );
}

function TechChip({ name, icon, variant }: { name: string; icon: string | null; variant: 'frontend' | 'backend' | 'tools' }) {
  const v = C.chip[variant];
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '6px',
      padding: '5px 11px', borderRadius: '6px',
      background: v.bg, border: `1px solid ${v.border}`,
      fontSize: '12px', fontWeight: 500, color: v.text,
      letterSpacing: '-0.01em',
    }}>
      {icon
        ? <img src={icon} alt={name} width={13} height={13} style={{ objectFit: 'contain' }} />
        : <div style={{ width: 6, height: 6, borderRadius: '50%', background: v.text, opacity: 0.45 }} />
      }
      {name}
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────── */
export function Resume() {
  return (
    <div style={{
      minHeight: '100vh',
      background: C.bg,
      backgroundImage: 'radial-gradient(circle, rgba(53,92,222,0.055) 1px, transparent 1px)',
      backgroundSize: '22px 22px',
      display: 'flex',
      justifyContent: 'center',
      padding: '52px 24px 88px',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    }}>
      <div style={{ width: '100%', maxWidth: '860px', display: 'flex', flexDirection: 'column' }}>

        {/* ── HERO ───────────────────────────────────────── */}
        <section style={{
          background: C.surface,
          borderRadius: '18px 18px 0 0',
          padding: '52px 60px 48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          borderBottom: `1px solid ${C.divider}`,
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 1px 0 0 rgba(53,92,222,0.06)',
        }}>
          {/* Corner accent blob */}
          <div style={{
            position: 'absolute', top: 0, right: 0,
            width: '340px', height: '340px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(53,92,222,0.06) 0%, transparent 65%)',
            transform: 'translate(25%, -30%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: 0, left: 0,
            width: '200px', height: '200px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(53,92,222,0.03) 0%, transparent 70%)',
            transform: 'translate(-40%, 40%)',
            pointerEvents: 'none',
          }} />

          {/* ── Left: 60% identity ── */}
          <div style={{ flex: '0 0 60%', maxWidth: '60%', paddingRight: '32px' }}>

            {/* Status badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              marginBottom: '22px', padding: '4px 12px',
              borderRadius: '20px',
              background: C.tag.bg,
              border: `1px solid ${C.tag.border}`,
              fontSize: '10px', fontWeight: 700, color: C.accent,
              letterSpacing: '0.1em', textTransform: 'uppercase' as const,
            }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E', display: 'inline-block', boxShadow: '0 0 5px rgba(34,197,94,0.6)' }} />
              Available for Opportunities
            </div>

            <h1 style={{
              fontSize: '44px', fontWeight: 800,
              color: C.name,
              letterSpacing: '-0.04em', lineHeight: 1.08,
              margin: '0 0 8px',
            }}>
              Khuzaima Asif
            </h1>

            <p style={{
              fontSize: '15.5px', fontWeight: 500,
              color: C.accentLight,
              letterSpacing: '-0.01em',
              margin: '0 0 20px',
            }}>
              Full Stack Web Developer
            </p>

            <p style={{
              fontSize: '13.5px', lineHeight: 1.75,
              color: C.body,
              maxWidth: '380px',
              margin: '0 0 28px',
              fontWeight: 400,
            }}>
              IT &amp; Cybersecurity student focused on web development,
              practical digital solutions, and modern technologies.
              Passionate about building innovative systems through
              independent learning and experimentation.
            </p>

            {/* Contact row */}
            <style>{`
              .cv-contact-item { display:flex; align-items:center; transition: transform 0.25s ease; }
              .cv-contact-item:hover { transform: translateY(-2px); }
              .cv-contact-item:hover .cv-ci { filter: drop-shadow(0 0 5px rgba(53,92,222,0.5)); }
              .cv-ci { transition: filter 0.25s ease; flex-shrink:0; }
            `}</style>
            {(() => {
              const contacts = [
                { Icon: Mail,      label: 'khuzaimadeveloper777@gmail.com', href: 'mailto:khuzaimadeveloper777@gmail.com' },
                { Icon: PhoneCall, label: '+92 370 6134825',                 href: 'tel:+923706134825' },
                { Icon: MapPin,    label: 'Bahawalpur, Pakistan',            href: null },
              ];
              return (
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' as const, rowGap: '10px' }}>
                  {contacts.map((item, idx) => {
                    const inner = (
                      <div className="cv-contact-item" style={{ gap: '8px', cursor: item.href ? 'pointer' : 'default' }}>
                        <item.Icon className="cv-ci" size={16} strokeWidth={2.2} color={C.accent} />
                        <span style={{ fontSize: '12.5px', color: C.body, fontWeight: 400, letterSpacing: '-0.01em' }}>
                          {item.label}
                        </span>
                      </div>
                    );
                    return (
                      <div key={item.label} style={{ display: 'flex', alignItems: 'center' }}>
                        {item.href
                          ? <a href={item.href} style={{ textDecoration: 'none' }}>{inner}</a>
                          : inner
                        }
                        {idx < contacts.length - 1 && (
                          <span style={{ color: C.divider, margin: '0 14px', fontSize: '14px', userSelect: 'none' as const }}>·</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })()}
          </div>

          {/* ── Right: 40% photo ── */}
          <div style={{
            flex: '0 0 40%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            paddingTop: '10px',
          }}>
            <div style={{ position: 'relative' }}>
              {/* Radial glow behind photo */}
              <div style={{
                position: 'absolute', inset: '-22px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(53,92,222,0.12) 0%, transparent 68%)',
                pointerEvents: 'none',
              }} />
              {/* Outer decorative ring */}
              <div style={{
                padding: '3px',
                borderRadius: '50%',
                background: `conic-gradient(${C.accent} 0deg, rgba(53,92,222,0.2) 180deg, ${C.accent} 360deg)`,
                boxShadow: '0 8px 30px rgba(53,92,222,0.18)',
              }}>
                {/* White gap */}
                <div style={{ padding: '3px', borderRadius: '50%', background: C.surface }}>
                  <div style={{ width: '182px', height: '182px', borderRadius: '50%', overflow: 'hidden' }}>
                    <img
                      src="/__mockup/profile.png"
                      alt="Khuzaima Asif"
                      style={{
                        width: '100%', height: '100%',
                        objectFit: 'cover', objectPosition: 'top center',
                        filter: 'grayscale(45%) contrast(1.03) brightness(1.05)',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BODY ────────────────────────────────────────── */}
        <div style={{ background: C.surface, display: 'flex' }}>

          {/* Left column */}
          <div style={{ flex: 1, padding: '44px 40px 52px 60px', borderRight: `1px solid ${C.divider}` }}>

            <SectionHeader label="Technical Skills" />
            <div style={{ marginBottom: '40px' }}>
              {techStack.map((group) => (
                <div key={group.category} style={{ display: 'flex', gap: '0', marginBottom: '10px', alignItems: 'baseline' }}>
                  <span style={{
                    fontSize: '10px', fontWeight: 700, letterSpacing: '0.07em',
                    textTransform: 'uppercase' as const,
                    color: C.chip[group.variant].text,
                    opacity: 0.75,
                    flexShrink: 0,
                    width: '136px',
                  }}>{group.category}</span>
                  <span style={{ fontSize: '13px', color: C.body, fontWeight: 400, lineHeight: 1.6 }}>
                    {group.items.map((item) => item.name).join(',  ')}
                  </span>
                </div>
              ))}
            </div>

            <SectionHeader label="Development Focus" />
            <div style={{ marginBottom: '40px' }}>
              {focusAreas.map((area) => (
                <div key={area} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '11px' }}>
                  <div style={{
                    width: '5px', height: '5px', borderRadius: '50%',
                    background: C.accent, flexShrink: 0, opacity: 0.65,
                  }} />
                  <span style={{ fontSize: '13.5px', color: C.body, fontWeight: 400, lineHeight: 1.5 }}>{area}</span>
                </div>
              ))}
            </div>

            <SectionHeader label="Core Strengths" />
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '7px' }}>
              {strengths.map((s) => (
                <span key={s} style={{
                  fontSize: '11.5px', fontWeight: 500,
                  color: C.tag.text,
                  background: C.tag.bg,
                  padding: '5px 12px',
                  borderRadius: '6px',
                  border: `1px solid ${C.tag.border}`,
                }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div style={{
            width: '248px', flexShrink: 0,
            padding: '44px 40px 52px 30px',
            display: 'flex', flexDirection: 'column' as const,
          }}>

            <SectionHeaderSmall label="Education" />
            <div style={{ marginBottom: '36px' }}>
              <p style={{ fontSize: '13px', fontWeight: 700, color: C.heading, margin: '0 0 4px', letterSpacing: '-0.01em' }}>
                UK Level-3 Diploma
              </p>
              <p style={{ fontSize: '12px', color: C.body, margin: '0 0 3px', lineHeight: 1.55, fontWeight: 400 }}>
                IT &amp; Cybersecurity
              </p>
              <p style={{ fontSize: '11.5px', color: C.meta, margin: '0 0 5px', fontWeight: 400 }}>
                Superior College, Bahawalpur
              </p>
              <span style={{
                display: 'inline-block',
                fontSize: '10.5px', color: C.subtle, fontWeight: 500,
                letterSpacing: '0.03em',
                background: '#F4F6FA', borderRadius: '4px',
                padding: '2px 7px',
              }}>Jun 2025 – 2026</span>
            </div>

            <SectionHeaderSmall label="Experience" />
            <div style={{ marginBottom: '36px' }}>
              <p style={{ fontSize: '13px', fontWeight: 700, color: C.heading, margin: '0 0 3px', letterSpacing: '-0.01em' }}>
                Full Stack Developer
              </p>
              <p style={{ fontSize: '12px', color: C.body, margin: '0 0 9px', fontWeight: 400 }}>
                Independent / Freelance
              </p>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '3px 10px', background: C.tag.bg, borderRadius: '20px',
                border: `1px solid ${C.tag.border}`,
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: C.accent, display: 'inline-block' }} />
                <span style={{ fontSize: '11px', fontWeight: 600, color: C.accent, letterSpacing: '0.02em' }}>1+ Year</span>
              </div>
            </div>

            <SectionHeaderSmall label="Languages" />
            <div style={{ marginBottom: '36px' }}>
              {languages.map((l) => (
                <div key={l.lang} style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '7px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: C.heading }}>{l.lang}</span>
                    <span style={{ fontSize: '10.5px', color: C.meta, fontWeight: 400 }}>{l.level}</span>
                  </div>
                  <LanguageBar fill={l.fill} />
                </div>
              ))}
            </div>

            <SectionHeaderSmall label="Currently Learning" />
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '10px' }}>
              {learning.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '4px', height: '4px', borderRadius: '50%',
                    background: C.accent, flexShrink: 0, opacity: 0.55,
                  }} />
                  <span style={{ fontSize: '12.5px', color: C.body, fontWeight: 400 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FOOTER ──────────────────────────────────────── */}
        <section style={{
          background: C.surface,
          borderRadius: '0 0 18px 18px',
          borderTop: `1px solid ${C.divider}`,
          padding: '14px 60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <span style={{ fontSize: '10.5px', color: C.subtle, fontWeight: 400, letterSpacing: '0.04em' }}>
            khuzaimadeveloper777@gmail.com &nbsp;·&nbsp; Bahawalpur, Pakistan
          </span>
        </section>

      </div>
    </div>
  );
}

/* ─── Section headings ───────────────────────────────────── */
function SectionHeader({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
      <div style={{ width: '3px', height: '13px', borderRadius: '2px', background: C.accent, flexShrink: 0 }} />
      <span style={{
        fontSize: '10.5px', fontWeight: 700, color: C.accent,
        letterSpacing: '0.08em', textTransform: 'uppercase' as const, whiteSpace: 'nowrap' as const,
      }}>{label}</span>
      <div style={{ flex: 1, height: '1px', background: C.divider }} />
    </div>
  );
}

function SectionHeaderSmall({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
      <div style={{ width: '2px', height: '10px', borderRadius: '2px', background: C.accent, opacity: 0.7, flexShrink: 0 }} />
      <p style={{
        fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.1em',
        textTransform: 'uppercase' as const, color: C.accent, margin: 0,
      }}>{label}</p>
    </div>
  );
}
