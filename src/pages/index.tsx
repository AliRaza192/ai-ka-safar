import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home(): ReactNode {
  return (
    <Layout title="AI ka Safar" description="Aasan Roman Urdu mein AI Agents seekhein">
      
      {/* Hero Section */}
      <header className={styles.heroBanner}>
        <div className={styles.heroLeft}>
          <div className={styles.topBadge}>
            <span className={styles.badge}>AI ka Naya Daur</span>
            <span className={styles.badgeLine}></span>
            <span className={styles.badgeText}>DIGITAL FTEs BANAO AUR KAMAAO</span>
          </div>
          <h1 className={styles.heroTitle}>
            AI KA<br />
            <span className={styles.heroTitleAccent}>SAFAR</span>
          </h1>
          <p className={styles.heroDesc}>
            <strong>Spec-driven, insani nigrani</strong> ke saath AI-Native Companies banana seekhein. 
            Digital FTEs — yaani <strong>woh AI workers jo agle daur ki companies chalayenge</strong> — 
            unhe banao, deploy karo, aur unse kamaao.
          </p>
          <p className={styles.heroSubDesc}>
            Engineers, domain experts, aur enterprise leaders ke liye — jo Agent era ki workforce banana chahte hain.
          </p>
          <div className={styles.heroButtons}>
            <Link className={styles.btnPrimary} to="docs/about">
              PARHNA SHURU KAREIN →
            </Link>
            <a className={styles.btnSecondary} href="https://panaversity.org/" target="_blank" rel="noopener noreferrer">
              Panaversity Dekhein
            </a>
          </div>
          <div className={styles.statsRow}>
            <span className={styles.greenDot}></span>
            <strong>21,215+</strong>
            <span>professionals seekh rahe hain</span>
          </div>
          <div className={styles.authors}>
            <span className={styles.authorLabel}>Likha hai:</span>
            <div className={styles.authorList}>
              {[
                {initials:'ZK', name:'Zia Khan'},
                {initials:'WK', name:'Wania Kazmi'},
                {initials:'MJ', name:'Muhammad Junaid'},
                {initials:'MR', name:'M Rehan ul Haq'},
              ].map((a) => (
                <div key={a.initials} className={styles.authorChip}>
                  <span className={styles.authorAvatar}>{a.initials}</span>
                  <span>{a.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.bookWrapper}>
            <div className={styles.bookCover}>
              <img src="/img/new-book-cover.png" alt="AI ka Safar Book Cover" />
            </div>
          </div>
        </div>
      </header>

      {/* Quote Section */}
      <section className={styles.quoteSection}>
        <div className={styles.quoteInner}>
          <div className={styles.quoteIcon}>"</div>
          <h2 className={styles.quoteText}>
            Digital FTEs banao jo 24/7 kaam karein. Tumhara domain expertise — chahe sales ho, legal, finance, ya healthcare — ek autonomous AI agent ban jata hai jo kabhi nahi sota.
          </h2>
          <p className={styles.quoteSubText}>
            Apni knowledge ko scalable digital products mein tabdeel karo jo <strong>recurring revenue</strong> generate karein — sote waqt bhi.
          </p>
          <div className={styles.threeCards}>
            {[
              {emoji:'🏭', title:'Banao', desc:'AI Coding Agents (Claude Code) use karke apni expertise ko deployable agents mein dhalein'},
              {emoji:'📦', title:'Package Karein', desc:'OpenAI ya Anthropic Agent SDKs ke saath production-ready Digital FTEs mein bundle karein'},
              {emoji:'💰', title:'Kamaao', desc:'Managed subscriptions, success fees, ya enterprise licenses ke tor par bechein'},
            ].map((c) => (
              <div key={c.title} className={styles.card}>
                <div className={styles.cardEmoji}>{c.emoji}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FTE Comparison Table */}
      <section className={styles.tableSection}>
        <div className={styles.sectionInner}>
          <p className={styles.sectionLabel}>Munafa ka Hisaab</p>
          <h2 className={styles.sectionTitle}>Insani FTE vs Digital FTE</h2>
          <p className={styles.sectionSubtitle}>Digital FTE hafte mein 168 ghante kaam karta hai bina thake. Yeh <strong>4 guna zyada kaam</strong> hai — kaafi kam qeemat par.</p>
          <div className={styles.compTable}>
            {[
              ['Feature', 'Insani FTE', 'Digital FTE'],
              ['Availability', '40 ghante/hafte', '168 ghante/hafte (24/7)'],
              ['Maheene ka Kharcha', '$4,000 – $8,000+', '$500 – $2,000'],
              ['Shuru Hone ka Waqt', '3 – 6 maheene', 'Fauran deploy'],
              ['Consistency', 'Variable (85–95%)', 'Predictable (99%+)'],
              ['Scaling', 'Linear (10x ke liye 10 log chahiye)', 'Exponential (fauran clone)'],
              ['Kaam ki Qeemat', '$30 – $60', '$3 – $6'],
            ].map((row, i) => (
              <div key={i} className={`${styles.tableRow} ${i === 0 ? styles.tableHeader : ''}`}>
                <div className={styles.tableCell}>{row[0]}</div>
                <div className={styles.tableCell}>{row[1]}</div>
                <div className={`${styles.tableCell} ${styles.tableCellAccent}`}>{row[2]}</div>
              </div>
            ))}
          </div>
          <div className={styles.statsCards}>
            {[
              {num:'85-90%', label:'Kharche ki Bachat'},
              {num:'4.2x', label:'Zyada Ghante Hafte Mein'},
              {num:'9,000', label:'Ghante/Saal (insaan: 2,000)'},
            ].map((s) => (
              <div key={s.num} className={styles.statCard}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Development Spectrum */}
      <section className={styles.spectrumSection}>
        <div className={styles.sectionInner}>
          <p className={styles.sectionLabel}>AI Development ko Samjhein</p>
          <h2 className={styles.sectionTitle}>AI Development ka Spectrum</h2>
          <p className={styles.sectionSubtitle}>Software development mein AI ke teen alag tareeqe. Yeh kitaab AI-Driven aur AI-Native dono sikhati hai.</p>
          <div className={styles.threeCards}>
            {[
              {title:'AI Assisted', sub:'AI Madad Karta Hai', desc:'AI code completion, debugging, aur documentation se tumhari productivity badhata hai.', points:['Code completion & suggestions','Bug detection & debugging','Documentation generation'], eg:'Misaal: Copilot se React website jaldi banana'},
              {title:'AI Driven', sub:'AI Saath Milke Banata Hai', desc:'AI specifications se code generate karta hai. Tum architect, director, aur reviewer ho.', points:['Specs se code generation','Automated testing','Architecture from requirements'], eg:'Misaal: REST API ki spec likho, AI poora FastAPI backend banaye', featured:true},
              {title:'AI Native', sub:'AI Khud Software Hai', desc:'Applications jo AI capabilities ke ird-gird design ki gayi hain. LLMs core components hain.', points:['Natural language interfaces','Intelligent automation','Agent orchestration'], eg:'Misaal: Customer support agent jo tickets khud resolve kare', featured:true},
            ].map((c) => (
              <div key={c.title} className={`${styles.card} ${c.featured ? styles.cardFeatured : ''}`}>
                <h3>{c.title}</h3>
                <p className={styles.cardSub}>{c.sub}</p>
                <p>{c.desc}</p>
                <ul>
                  {c.points.map(p => <li key={p}>{p}</li>)}
                </ul>
                <div className={styles.cardFooter}>{c.eg}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Different */}
      <section className={styles.pillarsSection}>
        <div className={styles.sectionInner}>
          <p className={styles.sectionLabel}>Core Pillars</p>
          <h2 className={styles.sectionTitle}>YEH KITAAB ALAG KYUN HAI</h2>
          <div className={styles.sixGrid}>
            {[
              {title:'Co-Learning Philosophy', desc:'AI agents ke saath milke seekhein. Sirf tool ki tarah nahi, balki saath milke create karein.'},
              {title:'Do Zabanon ki Maharat', desc:'Python reasoning ke liye, TypeScript interaction ke liye. AI-native bilingual stack master karein.'},
              {title:'Spec-Driven Development', desc:'Aise specifications likhein jo insan aur AI dono samjhein. Specs intelligent systems ke liye executable blueprints ban jaati hain.'},
              {title:'Agentic AI Systems', desc:'OpenAI Agents SDK aur Google ADK se banao. Aise agents jo sochein, karein, aur mil ke kaam karein.'},
              {title:'Production-Ready Architecture', desc:'Docker, Kubernetes, Dapr, aur Ray ke saath cloud-native deployment. Scalable, secure systems.'},
              {title:'Mukammal Seekhne ka Safar', desc:'Thinking foundations se lekar production AI workforces deploy karne tak — finance, banking, legal mein.'},
            ].map((p) => (
              <div key={p.title} className={styles.pillarCard}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.sectionInner}>
          <p className={styles.sectionLabel}>Hamara Maqsad</p>
          <h2 className={styles.sectionTitle}>Teen Advantages</h2>
          <p className={styles.sectionSubtitle}>Yeh kitaab sirf technology nahi sikhati — yeh tumhein ek naya professional banati hai.</p>
          <div className={styles.threeCards}>
            {[
              {icon:'🎯', title:'Speed to Deploy', desc:'Ek hafte mein pehla agent banao. Mahiney lagane ki zaroorat nahi. Hands-on projects se fori confidence aata hai.'},
              {icon:'🧠', title:'Deep Understanding', desc:'Sirf tool use karna nahi — architecture samjho. Kab konsa pattern use karna hai, yeh decision-making seekho.'},
              {icon:'💼', title:'Career Leverage', desc:'AI-Native skills 2026 mein sabse zyada demand mein hain. Domain experts jo AI bhi samajhte hain — yeh next generation hai.'},
            ].map((c) => (
              <div key={c.title} className={styles.card}>
                <div className={styles.cardEmoji}>{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Maturity Levels */}
      <section className={styles.maturitySection}>
        <div className={styles.sectionInner}>
          <p className={styles.sectionLabel}>AI Maturity</p>
          <h2 className={styles.sectionTitle}>Paanch Levels ka Safar</h2>
          <p className={styles.sectionSubtitle}>Har company apni jagah hai. Tum kahan ho?</p>
          <div className={styles.maturityTrack}>
            {[
              {level:'L1', title:'Explorer', desc:'Individual AI tools use karte hain', color:'#94a3b8'},
              {level:'L2', title:'Adopter', desc:'Teams AI workflows follow karti hain', color:'#60a5fa'},
              {level:'L3', title:'Builder', desc:'Custom AI agents banaye ja rahe hain', color:'#34d399'},
              {level:'L4', title:'Manufacturer', desc:'AI Workers produce ho rahe hain', color:'#25c2a0'},
              {level:'L5', title:'AI-Native', desc:'Company AI par chalti hai', color:'#f59e0b'},
            ].map((l, i) => (
              <div key={l.level} className={styles.maturityStep}>
                <div className={styles.maturityLevel} style={{background: l.color}}>{l.level}</div>
                <h4>{l.title}</h4>
                <p>{l.desc}</p>
                {i < 4 && <div className={styles.maturityArrow}>→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional vs AI-Native */}
      <section className={styles.comparisonSection}>
        <div className={styles.sectionInner}>
          <p className={styles.sectionLabel}>Farq Dekhein</p>
          <h2 className={styles.sectionTitle}>Traditional vs AI-Native Company</h2>
          <div className={styles.compareGrid}>
            <div className={styles.compareCol}>
              <h3 className={styles.compareHeader}>Traditional Company</h3>
              <ul className={styles.compareList}>
                <li>Software bechte hain</li>
                <li>Insaan kaam karte hain</li>
                <li>Scale karne ke liye hiring chahiye</li>
                <li>Revenue linear hai</li>
                <li>Competitors easily copy kar sakte hain</li>
              </ul>
            </div>
            <div className={`${styles.compareCol} ${styles.compareColHighlight}`}>
              <h3 className={styles.compareHeader}>AI-Native Company</h3>
              <ul className={styles.compareList}>
                <li>✓ AI Employees bechte hain</li>
                <li>✓ Agents kaam karte hain</li>
                <li>✓ Scale ek button se hota hai</li>
                <li>✓ Revenue exponential hai</li>
                <li>✓ Moat domain data hai</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Monetize Expertise */}
      <section className={styles.monetizeSection}>
        <div className={styles.sectionInner}>
          <p className={styles.sectionLabel}>Paisa Kamaao</p>
          <h2 className={styles.sectionTitle}>Apni Expertise Monetize Karo</h2>
          <p className={styles.sectionSubtitle}>Char tareeqe hain jo tum apne domain knowledge ko revenue mein badal sakte ho.</p>
          <div className={styles.threeCards}>
            {[
              {title:'Managed Subscription', desc:'Monthly fee par apna AI agent managed karo. Client sirf result dekhta hai.', price:'$500–$5K/mo'},
              {title:'Success Fee', desc:'Outcome-based pricing. Jab agent kaam kare, tab paisa.', price:'10–20% of value'},
              {title:'Enterprise License', desc:'Badi companies ko annual license do. Custom integrations, dedicated support.', price:'$50K–$500K/yr'},
              {title:'Vertical SaaS', desc:'Ek specific industry ke liye complete AI solution banao.', price:'$100–$1K/seat'},
            ].map((c) => (
              <div key={c.title} className={styles.card}>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className={styles.cardPrice}>{c.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.sectionInner}>
          <div className={styles.ctaGrid}>
            <div>
              <h2 className={styles.ctaTitle}>AI Agents Banana Shuru Karein?</h2>
              <p className={styles.ctaDesc}>Agent factory framework seekhna shuru karein. Intelligent AI employees banao jis par tumhari organization bharosa kar sake aur deploy kar sake.</p>
              <div className={styles.heroButtons}>
                <Link className={styles.btnPrimary} to="docs/about">
                  PARHNA SHURU KAREIN →
                </Link>
                <a className={styles.btnSecondary} href="https://panaversity.org/" target="_blank" rel="noopener noreferrer">
                  Panaversity Dekhein
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
