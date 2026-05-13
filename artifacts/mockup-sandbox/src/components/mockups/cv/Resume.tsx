import './_group.css';

const C = {
  bg:         '#F7F7F5',
  surface:    '#FFFFFF',
  heading:    '#1C1C1C',
  accent:     '#42526B',
  body:       '#525252',
  meta:       '#7A7A7A',
  divider:    '#D6DCE5',
  tagBg:      '#EEF2F6',
  tagText:    '#42526B',
  barFill:    '#42526B',
  barEmpty:   '#D8DEE6',
  subtleIcon: '#A8B0BC',
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
      { name: 'MS Office',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg' },
      { name: 'AI Tools',    icon: null },
      { name: 'Social Media',icon: null },
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

function LanguageBar({ fill }: { fill: number }) {
  const total = 5;
  return (
    <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
      {Array.from({ length: total }).map((_, i) => {
        const fraction = Math.min(1, Math.max(0, fill - i));
        return (
          <div
            key={i}
            style={{
              width: '30px',
              height: '3px',
              borderRadius: '2px',
              background: `linear-gradient(to right, ${C.barFill} ${fraction * 100}%, ${C.barEmpty} ${fraction * 100}%)`,
            }}
          />
        );
      })}
    </div>
  );
}

function TechIcon({ name, icon }: { name: string; icon: string | null }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '7px 13px',
      borderRadius: '8px',
      background: C.surface,
      border: `1px solid ${C.divider}`,
      fontSize: '13px',
      fontWeight: 500,
      color: C.heading,
      letterSpacing: '-0.01em',
    }}>
      {icon ? (
        <img src={icon} alt={name} width={15} height={15} style={{ objectFit: 'contain' }} />
      ) : (
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: C.accent, opacity: 0.5 }} />
      )}
      {name}
    </div>
  );
}

export function Resume() {
  return (
    <div style={{
      minHeight: '100vh',
      background: C.bg,
      display: 'flex',
      justifyContent: 'center',
      padding: '48px 24px 80px',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    }}>
      <div style={{
        width: '100%',
        maxWidth: '840px',
        display: 'flex',
        flexDirection: 'column',
      }}>

        {/* ── HERO ── */}
        <section style={{
          background: C.surface,
          borderRadius: '16px 16px 0 0',
          padding: '52px 56px 48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          borderBottom: `1px solid ${C.divider}`,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: 0, right: 0,
            width: '320px', height: '320px',
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(66,82,107,0.05) 0%, transparent 70%)`,
            transform: 'translate(30%, -30%)',
            pointerEvents: 'none',
          }} />

          {/* Left: Identity */}
          <div style={{ flex: 1 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '22px',
              padding: '5px 12px',
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
              fontSize: '40px',
              fontWeight: 700,
              color: C.heading,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              margin: '0 0 8px',
            }}>
              Khuzaima Asif
            </h1>

            <p style={{
              fontSize: '16px',
              fontWeight: 500,
              color: C.accent,
              letterSpacing: '-0.01em',
              margin: '0 0 20px',
            }}>
              Full Stack Web Developer
            </p>

            <p style={{
              fontSize: '13.5px',
              lineHeight: 1.75,
              color: C.body,
              maxWidth: '420px',
              margin: '0 0 30px',
              fontWeight: 400,
            }}>
              Creative developer focused on practical digital solutions, emerging technologies, and independent project development. Driven by the intersection of clean code, intelligent systems, and real-world impact.
            </p>

            {/* Contact list */}
            <div style={{
              display: 'flex',
              flexDirection: 'column' as const,
              gap: '9px',
            }}>
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
                      fontSize: '13px',
                      color: C.body,
                      fontWeight: 400,
                      textDecoration: 'none',
                      letterSpacing: '-0.01em',
                    }}>{item.label}</a>
                  ) : (
                    <span style={{
                      fontSize: '13px',
                      color: C.body,
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                    }}>{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div style={{
            marginLeft: '52px',
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column' as const,
            alignItems: 'center',
          }}>
            <div style={{
              padding: '3px',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${C.accent} 0%, #8BA3BE 55%, ${C.divider} 100%)`,
              boxShadow: '0 8px 28px rgba(66,82,107,0.18)',
            }}>
              <div style={{ padding: '3px', borderRadius: '50%', background: C.surface }}>
                <div style={{ width: '148px', height: '148px', borderRadius: '50%', overflow: 'hidden' }}>
                  <img
                    src="/__mockup/profile.png"
                    alt="Khuzaima Asif"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      filter: 'grayscale(55%) contrast(1.04) brightness(1.02)',
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
            padding: '44px 36px 44px 56px',
            borderRight: `1px solid ${C.divider}`,
          }}>

            <SectionHeader label="Core Technologies" />
            <div style={{ marginBottom: '40px' }}>
              {techStack.map((group) => (
                <div key={group.category} style={{ marginBottom: '20px' }}>
                  <p style={{
                    fontSize: '10.5px',
                    fontWeight: 600,
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase' as const,
                    color: C.subtleIcon,
                    margin: '0 0 10px',
                  }}>{group.category}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '8px' }}>
                    {group.items.map((item) => (
                      <TechIcon key={item.name} name={item.name} icon={item.icon} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <SectionHeader label="Selected Projects" />
            <div style={{ marginBottom: '40px' }}>
              {projects.map((p, i) => (
                <div key={i} style={{
                  marginBottom: '24px',
                  paddingBottom: '24px',
                  borderBottom: i < projects.length - 1 ? `1px solid ${C.divider}` : 'none',
                }}>
                  <p style={{
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: C.heading,
                    letterSpacing: '-0.01em',
                    margin: '0 0 6px',
                  }}>{p.title}</p>
                  <p style={{
                    fontSize: '12.5px',
                    lineHeight: 1.7,
                    color: C.meta,
                    margin: '0 0 10px',
                    fontWeight: 400,
                  }}>{p.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '6px' }}>
                    {p.tags.map((tag) => (
                      <span key={tag} style={{
                        fontSize: '11px',
                        fontWeight: 500,
                        color: C.tagText,
                        background: C.tagBg,
                        padding: '3px 9px',
                        borderRadius: '4px',
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <SectionHeader label="Core Strengths" />
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '8px', marginBottom: '40px' }}>
              {strengths.map((s) => (
                <span key={s} style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  color: C.tagText,
                  background: C.tagBg,
                  padding: '6px 12px',
                  borderRadius: '6px',
                  border: `1px solid ${C.divider}`,
                }}>{s}</span>
              ))}
            </div>

          </div>

          {/* Right column */}
          <div style={{
            width: '252px',
            flexShrink: 0,
            padding: '44px 40px 44px 32px',
            display: 'flex',
            flexDirection: 'column' as const,
          }}>

            <SectionHeaderSmall label="Education" />
            <div style={{ marginBottom: '32px' }}>
              <p style={{
                fontSize: '13px',
                fontWeight: 600,
                color: C.heading,
                margin: '0 0 4px',
                letterSpacing: '-0.01em',
              }}>UK Level-3 Diploma</p>
              <p style={{
                fontSize: '12px',
                color: C.body,
                margin: '0 0 3px',
                lineHeight: 1.55,
                fontWeight: 400,
              }}>Information Technology &amp; Cybersecurity</p>
              <p style={{
                fontSize: '12px',
                color: C.meta,
                margin: '0 0 4px',
                fontWeight: 400,
              }}>Superior College Bahawalpur</p>
              <p style={{
                fontSize: '11px',
                color: C.subtleIcon,
                margin: 0,
                fontWeight: 500,
                letterSpacing: '0.02em',
              }}>Jun 2025 – 2026</p>
            </div>

            <SectionHeaderSmall label="Experience" />
            <div style={{ marginBottom: '32px' }}>
              <p style={{
                fontSize: '13px',
                fontWeight: 600,
                color: C.heading,
                margin: '0 0 3px',
                letterSpacing: '-0.01em',
              }}>Full Stack Web Developer</p>
              <p style={{
                fontSize: '12px',
                color: C.body,
                margin: '0 0 6px',
                fontWeight: 400,
              }}>Independent / Freelance</p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '3px 9px',
                background: C.tagBg,
                borderRadius: '5px',
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: C.accent, display: 'inline-block' }} />
                <span style={{ fontSize: '11px', fontWeight: 600, color: C.accent, letterSpacing: '0.02em' }}>1+ Year</span>
              </div>
            </div>

            <SectionHeaderSmall label="Languages" />
            <div style={{ marginBottom: '32px' }}>
              {languages.map((l) => (
                <div key={l.lang} style={{ marginBottom: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '7px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: C.heading }}>{l.lang}</span>
                    <span style={{ fontSize: '11px', color: C.meta, fontWeight: 400 }}>{l.level}</span>
                  </div>
                  <LanguageBar fill={l.fill} />
                </div>
              ))}
            </div>

            <SectionHeaderSmall label="Interests & Exploration" />
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '7px', marginBottom: '32px' }}>
              {interests.map((i) => (
                <span key={i} style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  color: C.tagText,
                  background: C.tagBg,
                  padding: '5px 10px',
                  borderRadius: '5px',
                  border: `1px solid ${C.divider}`,
                }}>{i}</span>
              ))}
            </div>

            <SectionHeaderSmall label="Currently Learning" />
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '8px' }}>
              {learning.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                  <div style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    background: C.accent,
                    flexShrink: 0,
                    opacity: 0.55,
                  }} />
                  <span style={{ fontSize: '12.5px', color: C.body, fontWeight: 500 }}>{item}</span>
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
          padding: '18px 56px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{ fontSize: '11px', color: C.subtleIcon, fontWeight: 400, letterSpacing: '0.01em' }}>
            Khuzaima Asif · Full Stack Developer · Pakistan
          </span>
          <span style={{ fontSize: '11px', color: C.subtleIcon, fontWeight: 400 }}>
            khuzaimadeveloper777@gmail.com
          </span>
        </section>

      </div>
    </div>
  );
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
      <span style={{
        fontSize: '11.5px',
        fontWeight: 700,
        color: C.heading,
        letterSpacing: '0.06em',
        textTransform: 'uppercase' as const,
        whiteSpace: 'nowrap' as const,
      }}>{label}</span>
      <div style={{ flex: 1, height: '1px', background: C.divider }} />
    </div>
  );
}

function SectionHeaderSmall({ label }: { label: string }) {
  return (
    <p style={{
      fontSize: '10px',
      fontWeight: 700,
      letterSpacing: '0.09em',
      textTransform: 'uppercase' as const,
      color: C.subtleIcon,
      margin: '0 0 14px',
    }}>{label}</p>
  );
}
