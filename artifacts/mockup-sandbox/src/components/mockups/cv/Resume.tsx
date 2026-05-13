import './_group.css';

const techStack = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'EJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg' },
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
      { name: 'MS Office', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg' },
      { name: 'AI Tools', icon: null },
      { name: 'Social Media', icon: null },
    ],
  },
];

const projects = [
  {
    title: 'Real-World Mobile Applications',
    description: 'Designed and developed productive mobile-first applications solving practical user problems, with focus on clean architecture and intuitive experience.',
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
  { lang: 'Urdu', level: 'Native', fill: 5 },
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
              width: '28px',
              height: '3px',
              borderRadius: '2px',
              background: `linear-gradient(to right, #1E3A5F ${fraction * 100}%, #E5E3DF ${fraction * 100}%)`,
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
      padding: '8px 14px',
      borderRadius: '8px',
      background: '#FFFFFF',
      border: '1px solid #E5E3DF',
      fontSize: '13px',
      fontWeight: 500,
      color: '#222222',
      letterSpacing: '-0.01em',
    }}>
      {icon ? (
        <img src={icon} alt={name} width={16} height={16} style={{ objectFit: 'contain', filter: 'none' }} />
      ) : (
        <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#1E3A5F', opacity: 0.5 }} />
      )}
      {name}
    </div>
  );
}

export function Resume() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#F8F7F5',
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
        gap: '0',
      }}>

        {/* ── HERO ── */}
        <section style={{
          background: '#FFFFFF',
          borderRadius: '16px 16px 0 0',
          padding: '52px 56px 48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          borderBottom: '1px solid #E5E3DF',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* subtle bg accent */}
          <div style={{
            position: 'absolute',
            top: 0, right: 0,
            width: '320px', height: '320px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(30,58,95,0.04) 0%, transparent 70%)',
            transform: 'translate(30%, -30%)',
            pointerEvents: 'none',
          }} />

          {/* Left: Identity */}
          <div style={{ flex: 1 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '20px',
              padding: '5px 12px',
              borderRadius: '6px',
              background: '#EFF3F8',
              fontSize: '11px',
              fontWeight: 600,
              color: '#1E3A5F',
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#1E3A5F', display: 'inline-block' }} />
              Available for Opportunities
            </div>

            <h1 style={{
              fontSize: '42px',
              fontWeight: 700,
              color: '#111111',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              margin: '0 0 8px',
            }}>
              Khuzaima Asif
            </h1>

            <p style={{
              fontSize: '17px',
              fontWeight: 500,
              color: '#2D5A8E',
              letterSpacing: '-0.01em',
              margin: '0 0 20px',
            }}>
              Full Stack Web Developer
            </p>

            <p style={{
              fontSize: '14px',
              lineHeight: 1.7,
              color: '#6B6B6B',
              maxWidth: '420px',
              margin: '0 0 32px',
              fontWeight: 400,
            }}>
              Creative developer focused on practical digital solutions, emerging technologies, and independent project development. Driven by the intersection of clean code, intelligent systems, and real-world impact.
            </p>

            {/* Contact row */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap' as const,
              gap: '20px',
            }}>
              {[
                { label: 'khuzaimadeveloper777@gmail.com', href: 'mailto:khuzaimadeveloper777@gmail.com' },
                { label: '+92 370 6134825', href: 'tel:+923706134825' },
                { label: 'Bahawalpur, Pakistan', href: null },
              ].map((item) => (
                <span key={item.label} style={{
                  fontSize: '12.5px',
                  color: '#888888',
                  fontWeight: 400,
                  letterSpacing: '0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#CCCCCC', display: 'inline-block', flexShrink: 0 }} />
                  {item.href ? (
                    <a href={item.href} style={{ color: 'inherit', textDecoration: 'none' }}>{item.label}</a>
                  ) : item.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div style={{
            marginLeft: '48px',
            flexShrink: 0,
          }}>
            <div style={{
              width: '128px',
              height: '128px',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(0,0,0,0.06)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              filter: 'grayscale(25%) contrast(1.02)',
            }}>
              <img
                src="/__mockup/profile.png"
                alt="Khuzaima Asif"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
              />
            </div>
          </div>
        </section>

        {/* ── BODY ── */}
        <div style={{
          background: '#FFFFFF',
          display: 'flex',
          gap: '0',
        }}>

          {/* Left column */}
          <div style={{
            flex: '1',
            padding: '44px 36px 44px 56px',
            borderRight: '1px solid #F0EEEA',
          }}>

            {/* Technologies */}
            <SectionHeader label="Core Technologies" />
            <div style={{ marginBottom: '40px' }}>
              {techStack.map((group) => (
                <div key={group.category} style={{ marginBottom: '20px' }}>
                  <p style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase' as const,
                    color: '#AAAAAA',
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

            {/* Projects */}
            <SectionHeader label="Selected Projects" />
            <div style={{ marginBottom: '40px' }}>
              {projects.map((p, i) => (
                <div key={i} style={{
                  marginBottom: '24px',
                  paddingBottom: '24px',
                  borderBottom: i < projects.length - 1 ? '1px solid #F0EEEA' : 'none',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                    <p style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#111111',
                      letterSpacing: '-0.01em',
                      margin: 0,
                    }}>{p.title}</p>
                  </div>
                  <p style={{
                    fontSize: '13px',
                    lineHeight: 1.65,
                    color: '#777777',
                    margin: '0 0 10px',
                    fontWeight: 400,
                  }}>{p.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '6px' }}>
                    {p.tags.map((tag) => (
                      <span key={tag} style={{
                        fontSize: '11px',
                        fontWeight: 500,
                        color: '#555555',
                        background: '#F2F1EF',
                        padding: '3px 8px',
                        borderRadius: '4px',
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Core Strengths */}
            <SectionHeader label="Core Strengths" />
            <div style={{
              display: 'flex',
              flexWrap: 'wrap' as const,
              gap: '8px',
              marginBottom: '40px',
            }}>
              {strengths.map((s) => (
                <span key={s} style={{
                  fontSize: '12.5px',
                  fontWeight: 500,
                  color: '#333333',
                  background: '#F2F1EF',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  border: '1px solid #E8E6E2',
                }}>{s}</span>
              ))}
            </div>

          </div>

          {/* Right column */}
          <div style={{
            width: '248px',
            flexShrink: 0,
            padding: '44px 40px 44px 32px',
            display: 'flex',
            flexDirection: 'column' as const,
            gap: '0',
          }}>

            {/* Education */}
            <SectionHeaderSmall label="Education" />
            <div style={{ marginBottom: '32px' }}>
              <p style={{
                fontSize: '13.5px',
                fontWeight: 600,
                color: '#111111',
                margin: '0 0 4px',
                letterSpacing: '-0.01em',
              }}>UK Level-3 Diploma</p>
              <p style={{
                fontSize: '12px',
                color: '#666666',
                margin: '0 0 4px',
                lineHeight: 1.5,
                fontWeight: 400,
              }}>Information Technology &amp; Cybersecurity</p>
              <p style={{
                fontSize: '12px',
                color: '#888888',
                margin: '0 0 4px',
                fontWeight: 400,
              }}>Superior College Bahawalpur</p>
              <p style={{
                fontSize: '11px',
                color: '#AAAAAA',
                margin: 0,
                fontWeight: 500,
                letterSpacing: '0.02em',
              }}>Jun 2025 – 2026</p>
            </div>

            {/* Experience */}
            <SectionHeaderSmall label="Experience" />
            <div style={{ marginBottom: '32px' }}>
              <p style={{
                fontSize: '13.5px',
                fontWeight: 600,
                color: '#111111',
                margin: '0 0 4px',
                letterSpacing: '-0.01em',
              }}>Full Stack Web Developer</p>
              <p style={{
                fontSize: '12px',
                color: '#666666',
                margin: '0 0 4px',
                fontWeight: 400,
              }}>Independent / Freelance</p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '3px 8px',
                background: '#EFF3F8',
                borderRadius: '5px',
                marginTop: '6px',
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#2D5A8E', display: 'inline-block' }} />
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#2D5A8E', letterSpacing: '0.02em' }}>1+ Year</span>
              </div>
            </div>

            {/* Languages */}
            <SectionHeaderSmall label="Languages" />
            <div style={{ marginBottom: '32px' }}>
              {languages.map((l) => (
                <div key={l.lang} style={{ marginBottom: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#222222' }}>{l.lang}</span>
                    <span style={{ fontSize: '11px', color: '#999999', fontWeight: 400 }}>{l.level}</span>
                  </div>
                  <LanguageBar fill={l.fill} />
                </div>
              ))}
            </div>

            {/* Interests */}
            <SectionHeaderSmall label="Interests & Exploration" />
            <div style={{
              display: 'flex',
              flexWrap: 'wrap' as const,
              gap: '7px',
              marginBottom: '32px',
            }}>
              {interests.map((i) => (
                <span key={i} style={{
                  fontSize: '11.5px',
                  fontWeight: 500,
                  color: '#555555',
                  background: '#F5F4F2',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  border: '1px solid #ECEAE6',
                }}>{i}</span>
              ))}
            </div>

            {/* Currently Learning */}
            <SectionHeaderSmall label="Currently Learning" />
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '8px' }}>
              {learning.map((item) => (
                <div key={item} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#1E3A5F',
                    flexShrink: 0,
                    opacity: 0.6,
                  }} />
                  <span style={{
                    fontSize: '12.5px',
                    color: '#555555',
                    fontWeight: 500,
                  }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <section style={{
          background: '#FFFFFF',
          borderRadius: '0 0 16px 16px',
          borderTop: '1px solid #F0EEEA',
          padding: '20px 56px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{ fontSize: '11.5px', color: '#BBBBBB', fontWeight: 400, letterSpacing: '0.01em' }}>
            Khuzaima Asif · Full Stack Developer · Pakistan
          </span>
          <span style={{ fontSize: '11.5px', color: '#BBBBBB', fontWeight: 400 }}>
            khuzaimadeveloper777@gmail.com
          </span>
        </section>

      </div>
    </div>
  );
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '20px',
    }}>
      <span style={{
        fontSize: '12px',
        fontWeight: 700,
        color: '#111111',
        letterSpacing: '0.05em',
        textTransform: 'uppercase' as const,
      }}>{label}</span>
      <div style={{ flex: 1, height: '1px', background: '#ECEAE6' }} />
    </div>
  );
}

function SectionHeaderSmall({ label }: { label: string }) {
  return (
    <p style={{
      fontSize: '10.5px',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase' as const,
      color: '#BBBBBB',
      margin: '0 0 14px',
    }}>{label}</p>
  );
}
