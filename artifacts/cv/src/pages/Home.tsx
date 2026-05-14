import React from 'react';
import { Mail, PhoneCall, MapPin, Lightbulb, Brain, Focus, Code2, Search, Sparkles, GraduationCap } from 'lucide-react';

const C = {
  bg:         '#F7F7F5',
  surface:    '#FFFFFF',
  name:       '#111827',
  heading:    '#18181B',
  accent:     '#355CDE',
  body:       '#4B5563',
  meta:       '#7C8593',
  divider:    '#E4EAF2',
  tagBg:      '#EEF4FF',
  tagText:    '#355CDE',
  tagBorder:  '#D6E4FF',
  techBorder: '#C7D7FF',
  barFill:    '#355CDE',
  barEmpty:   '#DCE6FF',
  subtle:     '#9BAAB8',
};

const techStack = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML5',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    ],
  },
  {
    category: 'Backend & Database',
    items: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'EJS',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ],
  },
  {
    category: 'Tools',
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
  { label: 'Creative Problem Solving', icon: Lightbulb },
  { label: 'Strategic Thinking',       icon: Brain },
  { label: 'Deep Focus',               icon: Focus },
  { label: 'Independent Development',  icon: Code2 },
  { label: 'Strong Curiosity',         icon: Search },
  { label: 'Innovation Mindset',       icon: Sparkles },
];

const learning = [
  'Vibe Coding',
  'Communication Skills',
  'AI Systems',
];

function LanguageBar({ fill }: { fill: number }) {
  const total = 5;
  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {Array.from({ length: total }).map((_, i) => {
        const fraction = Math.min(1, Math.max(0, fill - i));
        return (
          <div key={i} style={{
            width: '28px',
            height: '3px',
            borderRadius: '2px',
            background: `linear-gradient(to right, ${C.barFill} ${fraction * 100}%, ${C.barEmpty} ${fraction * 100}%)`,
          }} />
        );
      })}
    </div>
  );
}

function TechItem({ name, icon }: { name: string; icon: string | null }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
      {icon
        ? <img src={icon} alt={name} width={14} height={14} style={{ objectFit: 'contain', flexShrink: 0 }} />
        : <div style={{ width: 5, height: 5, borderRadius: '50%', background: C.accent, opacity: 0.6, flexShrink: 0 }} />
      }
      <span style={{ fontSize: '13px', color: C.heading, fontWeight: 500, letterSpacing: '-0.01em' }}>{name}</span>
    </div>
  );
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
      <span style={{
        fontSize: '11px',
        fontWeight: 700,
        color: C.accent,
        letterSpacing: '0.07em',
        textTransform: 'uppercase' as const,
        whiteSpace: 'nowrap' as const,
      }}>{label}</span>
      <div style={{ flex: 1, height: '1px', background: C.divider }} />
    </div>
  );
}

function SectionHeaderSmall({ label, icon: Icon }: { label: string; icon?: React.ElementType }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
      {Icon && <Icon size={12} strokeWidth={2} style={{ color: C.accent, opacity: 0.85, flexShrink: 0 }} />}
      <p style={{
        fontSize: '10px',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase' as const,
        color: C.accent,
        margin: 0,
      }}>{label}</p>
      <div style={{ flex: 1, height: '1px', background: C.divider, marginLeft: '4px' }} />
    </div>
  );
}

const contacts = [
  { Icon: Mail,      label: 'khuzaimadeveloper777@gmail.com', href: 'mailto:khuzaimadeveloper777@gmail.com' },
  { Icon: PhoneCall, label: '+92 370 6134825',                 href: 'tel:+923706134825' },
  { Icon: MapPin,    label: 'Bahawalpur, Pakistan',            href: null },
];

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
        .cv-contact-item { transition: transform 0.3s ease; display: flex; align-items: center; gap: 8px; }
        .cv-contact-item:hover { transform: translateY(-2px); }
        .cv-contact-item:hover .cv-contact-icon { filter: drop-shadow(0 0 5px rgba(53,92,222,0.45)); }
        .cv-contact-icon { transition: filter 0.3s ease; }

        .profile-img-ring {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .profile-img-ring:hover {
          transform: scale(1.03);
          box-shadow:
            0 0 0 3px #ffffff,
            0 0 0 5.5px rgba(53,92,222,0.65),
            0 14px 36px rgba(53,92,222,0.22);
        }
        .profile-bg-glow {
          background: radial-gradient(circle at 50% 55%, rgba(53,92,222,0.11) 0%, rgba(53,92,222,0.04) 50%, transparent 72%);
        }
        .profile-bg-grid {
          background-image:
            linear-gradient(rgba(53,92,222,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(53,92,222,0.055) 1px, transparent 1px);
          background-size: 18px 18px;
          mask-image: radial-gradient(circle at 50% 50%, black 30%, transparent 72%);
          -webkit-mask-image: radial-gradient(circle at 50% 50%, black 30%, transparent 72%);
        }
      `}</style>

      <div style={{
        minHeight: '100vh',
        background: C.bg,
        display: 'flex',
        justifyContent: 'center',
        padding: '48px 24px 80px',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}>
        <div style={{ width: '100%', maxWidth: '840px', display: 'flex', flexDirection: 'column' }}>

          {/* ── HERO ── */}
          <section style={{
            background: C.surface,
            borderRadius: '16px 16px 0 0',
            padding: '48px 56px 44px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            borderBottom: `1px solid ${C.divider}`,
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: 0, right: 0,
              width: '280px', height: '280px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(53,92,222,0.04) 0%, transparent 70%)',
              transform: 'translate(30%, -30%)',
              pointerEvents: 'none',
            }} />

            {/* Left: Identity */}
            <div style={{ flex: 1 }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                marginBottom: '20px',
                padding: '4px 11px',
                borderRadius: '6px',
                background: C.tagBg,
                fontSize: '10.5px',
                fontWeight: 600,
                color: C.accent,
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: C.accent, display: 'inline-block' }} />
                Available for Opportunities
              </div>

              <h1 style={{
                fontSize: '38px',
                fontWeight: 700,
                color: C.name,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                margin: '0 0 7px',
              }}>
                Khuzaima Asif
              </h1>

              <p style={{
                fontSize: '15px',
                fontWeight: 500,
                color: C.accent,
                letterSpacing: '-0.01em',
                margin: '0 0 18px',
              }}>
                Full Stack Web Developer
              </p>

              <div style={{ margin: '0 0 26px', display: 'flex', flexDirection: 'column', gap: '7px', maxWidth: '420px' }}>
                {[
                  'IT & Cybersecurity student focused on web development, practical digital solutions, and modern technologies.',
                  'Passionate about creating impactful technologies, exploring emerging AI systems, and developing practical solutions that combine functionality, innovation, and long-term value.',
                ].map((line) => (
                  <div key={line} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: C.accent, flexShrink: 0, marginTop: '9px', opacity: 0.7 }} />
                    <span style={{ fontSize: '13.5px', lineHeight: 1.7, color: C.body, fontWeight: 400 }}>{line}</span>
                  </div>
                ))}
              </div>

              {/* Contact inline */}
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', rowGap: '8px' }}>
                {contacts.map((item, idx) => {
                  const inner = (
                    <div className="cv-contact-item" style={{ cursor: item.href ? 'pointer' : 'default' }}>
                      <item.Icon
                        className="cv-contact-icon"
                        size={17}
                        strokeWidth={2.2}
                        color={C.accent}
                        style={{ flexShrink: 0 }}
                      />
                      <span style={{ fontSize: '13px', color: C.body, fontWeight: 400, letterSpacing: '-0.01em' }}>
                        {item.label}
                      </span>
                    </div>
                  );
                  return (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'center' }}>
                      {item.href ? (
                        <a href={item.href} style={{ textDecoration: 'none' }}>{inner}</a>
                      ) : inner}
                      {idx < contacts.length - 1 && (
                        <span style={{ color: C.subtle, margin: '0 14px', fontSize: '12px', opacity: 0.35, userSelect: 'none' }}>·</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Photo */}
            <div style={{ marginLeft: '52px', marginTop: '10px', flexShrink: 0, position: 'relative', width: '190px', height: '190px' }}>
              {/* Soft radial glow behind image */}
              <div className="profile-bg-glow" style={{
                position: 'absolute',
                inset: '-28px',
                borderRadius: '50%',
                pointerEvents: 'none',
              }} />
              {/* Faint blueprint grid, masked to circle */}
              <div className="profile-bg-grid" style={{
                position: 'absolute',
                inset: '-18px',
                borderRadius: '50%',
                pointerEvents: 'none',
              }} />
              {/* Dual-ring image */}
              <div
                className="profile-img-ring"
                style={{
                  position: 'relative',
                  width: '190px',
                  height: '190px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: `
                    0 0 0 3px #ffffff,
                    0 0 0 5.5px rgba(53,92,222,0.42),
                    0 8px 28px rgba(53,92,222,0.15)
                  `,
                }}
              >
                <img
                  src="/profile.png"
                  alt="Khuzaima Asif"
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'center top',
                    display: 'block',
                    filter: 'contrast(1.04) brightness(1.03) saturate(1.05)',
                  }}
                />
              </div>
            </div>
          </section>

          {/* ── BODY ── */}
          <div style={{ background: C.surface, display: 'flex' }}>

            {/* Left column */}
            <div style={{ flex: 1, padding: '40px 36px 44px 56px', borderRight: `1px solid ${C.divider}` }}>

              <SectionHeader label="Technical Skills" />
              <div style={{ marginBottom: '36px' }}>
                {techStack.map((group, gIdx) => (
                  <div key={group.category} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    marginBottom: gIdx < techStack.length - 1 ? '16px' : '0',
                  }}>
                    <span style={{
                      fontSize: '9.5px',
                      fontWeight: 600,
                      letterSpacing: '0.07em',
                      textTransform: 'uppercase' as const,
                      color: C.subtle,
                    }}>{group.category}</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
                      {group.items.map((item) => (
                        <TechItem key={item.name} name={item.name} icon={item.icon} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <SectionHeader label="Development Focus" />
              <div style={{ marginBottom: '36px' }}>
                {focusAreas.map((area) => (
                  <div key={area} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: C.accent, flexShrink: 0, opacity: 0.7 }} />
                    <span style={{ fontSize: '13.5px', color: C.body, fontWeight: 400 }}>{area}</span>
                  </div>
                ))}
              </div>

              <SectionHeader label="Core Strengths" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 10px' }}>
                {strengths.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="strength-item"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      padding: '5px 4px',
                      borderRadius: '5px',
                      cursor: 'default',
                      transition: 'opacity 0.18s ease',
                    }}
                  >
                    <Icon size={15} strokeWidth={1.8} style={{ color: C.accent, flexShrink: 0 }} />
                    <span style={{ fontSize: '12px', fontWeight: 500, color: C.heading, lineHeight: 1 }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div style={{
              width: '240px',
              flexShrink: 0,
              padding: '40px 36px 44px 28px',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <SectionHeaderSmall label="Education" icon={GraduationCap} />
              <div style={{ marginBottom: '36px' }}>
                <p style={{ fontSize: '14px', fontWeight: 700, color: C.heading, margin: '0 0 5px', letterSpacing: '-0.02em', lineHeight: 1.3 }}>
                  UK Level-3 Diploma
                </p>
                <p style={{ fontSize: '12.5px', color: C.body, margin: '0 0 3px', lineHeight: 1.6, fontWeight: 500 }}>
                  IT &amp; Cybersecurity
                </p>
                <p style={{ fontSize: '11.5px', color: C.meta, margin: '0 0 6px', fontWeight: 400, lineHeight: 1.5 }}>
                  Superior College, Bahawalpur
                </p>
                <p style={{ fontSize: '10.5px', color: C.subtle, margin: 0, fontWeight: 500, letterSpacing: '0.03em' }}>
                  Jun 2025 – 2026
                </p>
              </div>

              <SectionHeaderSmall label="Experience" />
              <div style={{ marginBottom: '36px' }}>
                <p style={{ fontSize: '13px', fontWeight: 600, color: C.heading, margin: '0 0 3px', letterSpacing: '-0.01em' }}>
                  Full Stack Developer
                </p>
                <p style={{ fontSize: '12px', color: C.body, margin: '0 0 7px', fontWeight: 400 }}>
                  Independent / Freelance
                </p>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '3px 9px',
                  background: C.tagBg,
                  borderRadius: '5px',
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: C.accent, display: 'inline-block' }} />
                  <span style={{ fontSize: '11px', fontWeight: 600, color: C.accent, letterSpacing: '0.02em' }}>1+ Year Experience</span>
                </div>
              </div>

              <SectionHeaderSmall label="Languages" />
              <div style={{ marginBottom: '36px' }}>
                {languages.map((l) => (
                  <div key={l.lang} style={{ marginBottom: '13px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '12.5px', fontWeight: 600, color: C.heading }}>{l.lang}</span>
                      <span style={{ fontSize: '11px', color: C.meta, fontWeight: 400 }}>{l.level}</span>
                    </div>
                    <LanguageBar fill={l.fill} />
                  </div>
                ))}
              </div>

              <SectionHeaderSmall label="Currently Learning" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {learning.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: C.accent, flexShrink: 0, opacity: 0.6 }} />
                    <span style={{ fontSize: '12.5px', color: C.body, fontWeight: 400 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── FOOTER ── */}
          <section style={{
            background: C.surface,
            borderRadius: '0 0 16px 16px',
            borderTop: `1px solid ${C.divider}`,
            padding: '16px 56px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <span style={{ fontSize: '11px', color: C.subtle, fontWeight: 400, letterSpacing: '0.01em' }}>
              Khuzaima Asif · Full Stack Developer · Pakistan
            </span>
            <span style={{ fontSize: '11px', color: C.subtle, fontWeight: 400 }}>
              khuzaimadeveloper777@gmail.com
            </span>
          </section>

        </div>
      </div>
    </>
  );
}
