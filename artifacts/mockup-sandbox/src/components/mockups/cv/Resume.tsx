import './_group.css';

const C = {
  bg:         '#F7F7F5',
  surface:    '#FFFFFF',
  heading:    '#18181B',
  accent:     '#3F4E68',
  body:       '#4B5563',
  meta:       '#7C8593',
  divider:    '#DCE3EA',
  tagBg:      '#EEF2F7',
  tagText:    '#3F4E68',
  barFill:    '#3F4E68',
  barEmpty:   '#D8DEE6',
  subtleIcon: '#9BAAB8',
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
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'EJS',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ],
  },
  {
    category: 'Tools & Skills',
    items: [
      { name: 'MS Office',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg' },
      { name: 'AI Tools',     icon: null },
      { name: 'Social Media', icon: null },
    ],
  },
];

const projects = [
  {
    title: 'Real-World Mobile Applications',
    description: 'Designed and developed productive mobile-first applications solving practical user problems, with a focus on clean architecture and intuitive experience.',
    tags: ['Node.js', 'MongoDB', 'JavaScript'],
  },
  {
    title: 'Digital Systems & Automation',
    description: 'Built practical digital solutions through experimentation and independent research — from dynamic web apps to automated workflows.',
    tags: ['Full Stack', 'EJS', 'CSS3'],
  },
  {
    title: 'AI-Integrated Experiences',
    description: 'Explored and integrated AI tools into digital workflows, building experiences that leverage emerging technology for real-world utility.',
    tags: ['AI Tools', 'JavaScript'],
  },
];

const languages = [
  { lang: 'Urdu',    level: 'Native',            fill: 5 },
  { lang: 'English', level: 'Upper Intermediate', fill: 3.5 },
];

const interests = [
  'Emerging Technologies',
  'Psychology',
  'Deep Thinking',
  'Independent Learning',
  'Creative Development',
  'AI Systems Exploration',
];

const strengths = [
  'Creative Problem Solving',
  'Strategic Thinking',
  'Deep Focus',
  'Independent Development',
  'Strong Curiosity',
  'Innovation Mindset',
];

const learning = [
  'Vibe Coding',
  'Communication Skills',
  'AI Systems Exploration',
];

/* ─── Language bar ─── */
function LanguageBar({ fill }: { fill: number }) {
  const total = 5;
  return (
    <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
      {Array.from({ length: total }).map((_, i) => {
        const fraction = Math.min(1, Math.max(0, fill - i));
        return (
          <div key={i} style={{
            width: '32px',
            height: '4px',
            borderRadius: '3px',
            background: `linear-gradient(to right, ${C.barFill} ${fraction * 100}%, ${C.barEmpty} ${fraction * 100}%)`,
          }} />
        );
      })}
    </div>
  );
}

/* ─── Tech chip ─── */
function TechIcon({ name, icon }: { name: string; icon: string | null }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '7px',
      padding: '7px 14px',
      borderRadius: '8px',
      background: C.surface,
      border: `1px solid ${C.divider}`,
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      fontSize: '12.5px',
      fontWeight: 500,
      color: C.heading,
      letterSpacing: '-0.01em',
    }}>
      {icon ? (
        <img src={icon} alt={name} width={14} height={14} style={{ objectFit: 'contain', flexShrink: 0 }} />
      ) : (
        <div style={{ width: 7, height: 7, borderRadius: '50%', background: C.accent, opacity: 0.45, flexShrink: 0 }} />
      )}
      {name}
    </div>
  );
}

/* ─── Main component ─── */
export function Resume() {
  return (
    <div style={{
      minHeight: '100vh',
      background: C.bg,
      display: 'flex',
      justifyContent: 'center',
      padding: '52px 24px 88px',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      WebkitFontSmoothing: 'antialiased',
    } as React.CSSProperties}>

      {/* Card */}
      <div style={{
        width: '100%',
        maxWidth: '860px',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '18px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)',
        overflow: 'hidden',
      }}>

        {/* ── HERO ── */}
        <section style={{
          background: C.surface,
          padding: '56px 60px 52px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          borderBottom: `1px solid ${C.divider}`,
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative bg wash */}
          <div style={{
            position: 'absolute',
            top: '-60px', right: '-60px',
            width: '380px', height: '380px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(63,78,104,0.04) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />

          {/* Left: Identity */}
          <div style={{ flex: 1, minWidth: 0 }}>

            {/* Status badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              marginBottom: '24px',
              padding: '5px 11px 5px 9px',
              borderRadius: '20px',
              background: C.tagBg,
              border: `1px solid rgba(63,78,104,0.14)`,
              fontSize: '10px',
              fontWeight: 600,
              color: C.accent,
              letterSpacing: '0.09em',
              textTransform: 'uppercase' as const,
            }}>
              {/* Pulse dot */}
              <span style={{ position: 'relative', display: 'inline-flex', width: 7, height: 7 }}>
                <span style={{
                  position: 'absolute',
                  width: '100%', height: '100%',
                  borderRadius: '50%',
                  background: '#4CAF82',
                  opacity: 0.35,
                  transform: 'scale(1.8)',
                }} />
                <span style={{
                  width: '100%', height: '100%',
                  borderRadius: '50%',
                  background: '#4CAF82',
                  display: 'inline-block',
                }} />
              </span>
              Available for Opportunities
            </div>

            {/* Name */}
            <h1 style={{
              fontSize: '44px',
              fontWeight: 800,
              color: C.heading,
              letterSpacing: '-0.035em',
              lineHeight: 1.05,
              margin: '0 0 10px',
            }}>
              Khuzaima Asif
            </h1>

            {/* Role */}
            <p style={{
              fontSize: '15px',
              fontWeight: 500,
              color: C.accent,
              letterSpacing: '0.005em',
              margin: '0 0 22px',
              opacity: 0.9,
            }}>
              Full Stack Web Developer
            </p>

            {/* Bio */}
            <p style={{
              fontSize: '13.5px',
              lineHeight: 1.8,
              color: C.body,
              maxWidth: '400px',
              margin: '0 0 32px',
              fontWeight: 400,
            }}>
              Creative developer focused on practical digital solutions, emerging technologies, and independent project development. Driven by the intersection of clean code, intelligent systems, and real-world impact.
            </p>

            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '10px' }}>
              {[
                { icon: '✉', label: 'khuzaimadeveloper777@gmail.com', href: 'mailto:khuzaimadeveloper777@gmail.com' },
                { icon: '✆', label: '+92 370 6134825',                 href: 'tel:+923706134825' },
                { icon: '◎', label: 'Bahawalpur, Pakistan',            href: null },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    fontSize: '11px',
                    color: C.subtleIcon,
                    width: '16px',
                    textAlign: 'center' as const,
                    flexShrink: 0,
                    lineHeight: 1,
                  }}>{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} style={{
                      fontSize: '12.5px',
                      color: C.body,
                      fontWeight: 400,
                      textDecoration: 'none',
                      letterSpacing: '0',
                    }}>{item.label}</a>
                  ) : (
                    <span style={{
                      fontSize: '12.5px',
                      color: C.body,
                      fontWeight: 400,
                    }}>{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div style={{
            marginLeft: '56px',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'flex-start',
            paddingTop: '4px',
          }}>
            {/* Ring */}
            <div style={{
              padding: '3px',
              borderRadius: '50%',
              background: `linear-gradient(145deg, ${C.accent} 0%, #A0B4CA 60%, ${C.divider} 100%)`,
              boxShadow: '0 10px 36px rgba(63,78,104,0.16)',
            }}>
              <div style={{ padding: '3px', borderRadius: '50%', background: C.surface }}>
                <div style={{ width: '190px', height: '190px', borderRadius: '50%', overflow: 'hidden' }}>
                  <img
                    src="/__mockup/profile.png"
                    alt="Khuzaima Asif"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      filter: 'grayscale(60%) contrast(1.0) brightness(1.05) saturate(0.5)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BODY ── */}
        <div style={{ background: C.surface, display: 'flex' }}>

          {/* Left column */}
          <div style={{
            flex: '1',
            padding: '48px 40px 52px 60px',
            borderRight: `1px solid ${C.divider}`,
            minWidth: 0,
          }}>

            <SectionHeader label="Technical Skills" />
            <div style={{ marginBottom: '44px' }}>
              {techStack.map((group) => (
                <div key={group.category} style={{ marginBottom: '18px' }}>
                  <p style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.09em',
                    textTransform: 'uppercase' as const,
                    color: C.subtleIcon,
                    margin: '0 0 9px',
                  }}>{group.category}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '7px' }}>
                    {group.items.map((item) => (
                      <TechIcon key={item.name} name={item.name} icon={item.icon} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <SectionHeader label="Selected Projects" />
            <div style={{ marginBottom: '44px' }}>
              {projects.map((p, i) => (
                <div key={i} style={{
                  marginBottom: '26px',
                  paddingBottom: '26px',
                  borderBottom: i < projects.length - 1 ? `1px solid ${C.divider}` : 'none',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '7px' }}>
                    <div style={{ width: '3px', height: '14px', borderRadius: '2px', background: C.accent, opacity: 0.6, flexShrink: 0 }} />
                    <p style={{
                      fontSize: '13.5px',
                      fontWeight: 650 as unknown as number,
                      color: C.heading,
                      letterSpacing: '-0.015em',
                      margin: 0,
                    }}>{p.title}</p>
                  </div>
                  <p style={{
                    fontSize: '12.5px',
                    lineHeight: 1.72,
                    color: C.meta,
                    margin: '0 0 11px',
                    fontWeight: 400,
                    paddingLeft: '11px',
                  }}>{p.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '6px', paddingLeft: '11px' }}>
                    {p.tags.map((tag) => (
                      <span key={tag} style={{
                        fontSize: '10.5px',
                        fontWeight: 600,
                        color: C.tagText,
                        background: C.tagBg,
                        padding: '3px 9px',
                        borderRadius: '5px',
                        border: `1px solid rgba(63,78,104,0.12)`,
                        boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                        letterSpacing: '0.01em',
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <SectionHeader label="Core Strengths" />
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '8px', marginBottom: '44px' }}>
              {strengths.map((s) => (
                <span key={s} style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  color: C.tagText,
                  background: C.tagBg,
                  padding: '7px 14px',
                  borderRadius: '8px',
                  border: `1px solid rgba(63,78,104,0.12)`,
                  boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                  letterSpacing: '-0.005em',
                }}>{s}</span>
              ))}
            </div>

          </div>

          {/* Right column */}
          <div style={{
            width: '258px',
            flexShrink: 0,
            padding: '48px 44px 52px 32px',
            display: 'flex',
            flexDirection: 'column' as const,
          }}>

            <SectionHeaderSmall label="Education" />
            <div style={{ marginBottom: '34px' }}>
              <p style={{
                fontSize: '13px',
                fontWeight: 600,
                color: C.heading,
                margin: '0 0 4px',
                letterSpacing: '-0.015em',
                lineHeight: 1.4,
              }}>UK Level-3 Diploma</p>
              <p style={{
                fontSize: '12px',
                color: C.body,
                margin: '0 0 4px',
                lineHeight: 1.55,
                fontWeight: 400,
              }}>Information Technology &amp; Cybersecurity</p>
              <p style={{
                fontSize: '11.5px',
                color: C.meta,
                margin: '0 0 5px',
                fontWeight: 400,
              }}>Superior College Bahawalpur</p>
              <span style={{
                display: 'inline-block',
                fontSize: '10.5px',
                color: C.subtleIcon,
                fontWeight: 500,
                letterSpacing: '0.02em',
                background: C.bg,
                padding: '2px 7px',
                borderRadius: '4px',
              }}>Jun 2025 – 2026</span>
            </div>

            <SectionHeaderSmall label="Experience" />
            <div style={{ marginBottom: '34px' }}>
              <p style={{
                fontSize: '13px',
                fontWeight: 600,
                color: C.heading,
                margin: '0 0 3px',
                letterSpacing: '-0.015em',
              }}>Full Stack Web Developer</p>
              <p style={{
                fontSize: '12px',
                color: C.body,
                margin: '0 0 10px',
                fontWeight: 400,
              }}>Independent / Freelance</p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 10px',
                background: C.tagBg,
                borderRadius: '20px',
                border: `1px solid rgba(63,78,104,0.12)`,
              }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#4CAF82' }} />
                <span style={{ fontSize: '11px', fontWeight: 600, color: C.accent, letterSpacing: '0.02em' }}>1+ Year Active</span>
              </div>
            </div>

            <SectionHeaderSmall label="Languages" />
            <div style={{ marginBottom: '34px' }}>
              {languages.map((l) => (
                <div key={l.lang} style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                    <span style={{ fontSize: '12.5px', fontWeight: 600, color: C.heading, letterSpacing: '-0.01em' }}>{l.lang}</span>
                    <span style={{ fontSize: '10.5px', color: C.meta, fontWeight: 400 }}>{l.level}</span>
                  </div>
                  <LanguageBar fill={l.fill} />
                </div>
              ))}
            </div>

            <SectionHeaderSmall label="Interests & Exploration" />
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '7px', marginBottom: '34px' }}>
              {interests.map((i) => (
                <span key={i} style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  color: C.tagText,
                  background: C.tagBg,
                  padding: '5px 10px',
                  borderRadius: '6px',
                  border: `1px solid rgba(63,78,104,0.1)`,
                  boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                }}>{i}</span>
              ))}
            </div>

            <SectionHeaderSmall label="Currently Learning" />
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '9px' }}>
              {learning.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '4px', height: '4px',
                    borderRadius: '50%',
                    background: C.accent,
                    flexShrink: 0,
                    opacity: 0.5,
                  }} />
                  <span style={{ fontSize: '12px', color: C.body, fontWeight: 500, letterSpacing: '-0.005em' }}>{item}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ── FOOTER ── */}
        <div style={{
          background: C.surface,
          borderTop: `1px solid ${C.divider}`,
          padding: '20px 60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{ fontSize: '11px', color: C.subtleIcon, fontWeight: 400, letterSpacing: '0.01em' }}>
            Khuzaima Asif · Full Stack Developer · Pakistan
          </span>
          <span style={{ fontSize: '11px', color: C.subtleIcon, fontWeight: 400, letterSpacing: '0.005em' }}>
            khuzaimadeveloper777@gmail.com
          </span>
        </div>

      </div>
    </div>
  );
}

/* ─── Section Headers ─── */
function SectionHeader({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
      <span style={{
        fontSize: '11px',
        fontWeight: 700,
        color: C.heading,
        letterSpacing: '0.08em',
        textTransform: 'uppercase' as const,
        whiteSpace: 'nowrap' as const,
        opacity: 0.75,
      }}>{label}</span>
      <div style={{ flex: 1, height: '1px', background: C.divider }} />
    </div>
  );
}

function SectionHeaderSmall({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
      <div style={{ width: '2px', height: '10px', borderRadius: '1px', background: C.accent, opacity: 0.4, flexShrink: 0 }} />
      <p style={{
        fontSize: '9.5px',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase' as const,
        color: C.subtleIcon,
        margin: 0,
      }}>{label}</p>
    </div>
  );
}
