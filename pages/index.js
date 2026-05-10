import { useState, useRef, useEffect } from "react";
import { CHAPTER_DATA, EVENTS, ENDING_TYPES } from "./data";

const SPOONS = {
  gold:   { label:"금수저", color:"#B45309", bg:"#FEF3C7", border:"#F59E0B", desc:"재벌가 자녀. 강남 대형 아파트, 해외여행 연 2회 이상, 유학, 개인 과외 다수. 돈 걱정은 평생 없음.", startStats:{ happiness:70, money:95, relation:60, pride:65 } },
  silver: { label:"은수저", color:"#4B5563", bg:"#F3F4F6", border:"#9CA3AF", desc:"안정적인 중상류층 가정. 좋은 동네 아파트, 학원 여러 개, 가족 여행 연 1회. 돈 때문에 불편하거나 눈치 본 적 없음.", startStats:{ happiness:62, money:72, relation:58, pride:60 } },
  bronze: { label:"동수저", color:"#92400E", bg:"#FFF7ED", border:"#D97706", desc:"서민 가정. 부모님 맞벌이, 학원은 한두 개. 여유롭진 않지만 굶지는 않음. 가끔 돈 얘기가 집안에서 나옴.", startStats:{ happiness:48, money:35, relation:52, pride:50 } },
  dirt:   { label:"흙수저", color:"#374151", bg:"#F9FAFB", border:"#6B7280", desc:"기초생활수급 가정. 고시원이나 반지하, 결식 경험, 편의점 도시락이 일상. 돈 걱정이 항상 있음.", startStats:{ happiness:35, money:15, relation:45, pride:38 } },
};
const SPOON_ORDER = ["gold","silver","bronze","dirt"];
const OBJECTS = [
  { id:"compass", emoji:"🧭", name:"낡은 나침반" },
  { id:"seed",    emoji:"🌱", name:"작은 씨앗" },
  { id:"key",     emoji:"🗝️",  name:"녹슨 열쇠" },
  { id:"book",    emoji:"📖", name:"오래된 책" },
  { id:"coin",    emoji:"🪙", name:"동전 하나" },
  { id:"thread",  emoji:"🧵", name:"붉은 실" },
  { id:"lantern", emoji:"🏮", name:"작은 등불" },
  { id:"mirror",  emoji:"🪞", name:"손거울" },
];
const WEATHER_BG = {
  sunny:  { bg:"linear-gradient(150deg,#87CEEB,#FFFDE7)", icon:"☀️" },
  cloudy: { bg:"linear-gradient(150deg,#CFD8DC,#ECEFF1)", icon:"☁️" },
  rain:   { bg:"linear-gradient(150deg,#546E7A,#90A4AE)", icon:"🌧" },
  night:  { bg:"linear-gradient(150deg,#1a1a2e,#2d2d44)", icon:"🌙" },
  sunset: { bg:"linear-gradient(150deg,#FF7043,#FFE082)", icon:"🌅" },
  snow:   { bg:"linear-gradient(150deg,#B3E5FC,#E1F5FE)", icon:"❄️" },
};

function StatBar({ label, value, color }) {
  return (
    <div style={{ flex:1, minWidth:0 }}>
      <div style={{ fontSize:10, color:"#9CA3AF", marginBottom:3 }}>{label}</div>
      <div style={{ height:4, background:"#E5E7EB", borderRadius:3, overflow:"hidden" }}>
        <div style={{ height:"100%", width:`${Math.max(0,Math.min(100,value))}%`, background:color, borderRadius:3, transition:"width 0.5s ease" }}/>
      </div>
    </div>
  );
}

function RainDrop() {
  const drops = useRef(Array.from({length:20},()=>({ left:Math.random()*100, delay:Math.random()*1.5, dur:0.5+Math.random()*0.5 }))).current;
  return (
    <div style={{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"}}>
      {drops.map((d,i)=>(
        <div key={i} style={{position:"absolute",left:`${d.left}%`,top:"-10%",width:"1px",height:"18px",background:"rgba(180,220,255,0.5)",animation:`rd ${d.dur}s linear ${d.delay}s infinite`}}/>
      ))}
      <style>{`@keyframes rd{to{transform:translateY(115vh)}}`}</style>
    </div>
  );
}

async function fetchNarrative(chapter, spoonKey, gender, statsNow, historyNow) {
  const sp = SPOONS[spoonKey];
  const pronoun = gender === "male" ? "그는" : "그녀는";
  const histStr = historyNow.length ? historyNow.slice(-3).map(h=>h.choice).join(", ") : "없음";
  const sys = `당신은 인생 RPG 스토리텔러입니다. 반드시 JSON만 반환하세요 (백틱 없이):
{"narrative":"4~5문장. ${sp.label} 출신 ${gender==="male"?"남성":"여성"}(${pronoun}). 장소: ${chapter.location}. 나이: ${chapter.age}. 날씨: ${chapter.weather}. 이전선택: ${histStr}. 감각적이고 구체적인 묘사. 수저 배경 자연스럽게 반영."}`;
  const res = await fetch("/api/claude", {
    method:"POST", headers:{"Content-Type":"application/json"},
    body: JSON.stringify({ system: sys, userMessage: "장면 서사 생성." })
  });
  const data = await res.json();
  const raw = data.text || "";
  const match = raw.match(/\{[\s\S]*\}/);
  if (!match) throw new Error("parse fail");
  return JSON.parse(match[0]).narrative;
}

function getEndingType(stats) {
  return ENDING_TYPES.find(e => e.condition(stats)) || ENDING_TYPES[ENDING_TYPES.length - 1];
}

async function fetchEndingNarrative(spoonKey, gender, statsNow, historyNow) {
  const sp = SPOONS[spoonKey];
  const pronoun = gender === "male" ? "그는" : "그녀는";
  const histStr = historyNow.slice(-5).map(h=>h.choice).join(", ");
  const statDesc = `행복${statsNow.happiness} 돈${statsNow.money} 관계${statsNow.relation} 자존감${statsNow.pride}`;
  const endingType = getEndingType(statsNow);
  const sys = `당신은 인생 RPG 엔딩 작가입니다. 반드시 JSON만 반환 (백틱 없이):
{"title":"인생 제목 10자이내","narrative":"6~7문장. ${gender==="male"?"남성":"여성"}(${pronoun})의 노년. 엔딩유형: [${endingType.title}] - ${endingType.theme}. 최종스탯: ${statDesc}. 최근선택: ${histStr}. 절대로 출신 배경이나 계층을 직접 언급하지 말 것. 오직 이 사람이 살아온 방식과 선택, 그 결과만 담아낼 것.","message":"이 인생이 남긴 철학적 메시지 한 문장. 묵직하게."}`;
  const res = await fetch("/api/claude", {
    method:"POST", headers:{"Content-Type":"application/json"},
    body: JSON.stringify({ system: sys, userMessage: "엔딩 생성." })
  });
  const data = await res.json();
  const raw = data.text || "";
  const match = raw.match(/\{[\s\S]*\}/);
  if (!match) throw new Error("parse fail");
  const parsed = JSON.parse(match[0]);
  return { ...parsed, endingType };
}

export default function LifeRPG() {
  const [mounted, setMounted] = useState(false);
  const [screen, setScreen] = useState("intro");
  const [pickedObj, setPickedObj] = useState(null);
  const [spoon, setSpoon] = useState(null);
  const [gender, setGender] = useState(null);
  const [stageIdx, setStageIdx] = useState(0);
  const [stats, setStats] = useState({ happiness:50, money:50, relation:50, pride:50 });
  const [history, setHistory] = useState([]);
  const [narrative, setNarrative] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(false);
  const [choicesVisible, setChoicesVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [event, setEvent] = useState(null);
  const [endingData, setEndingData] = useState(null);
  const typingRef = useRef(null);
  const usedEvents = useRef(new Set());

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const chapters = spoon ? CHAPTER_DATA[spoon] : [];
  const chapter = chapters[stageIdx];

  function typeText(text, onDone) {
    setDisplayText(""); setTyping(true); setChoicesVisible(false);
    let i = 0;
    if (typingRef.current) clearInterval(typingRef.current);
    typingRef.current = setInterval(() => {
      i++; setDisplayText(text.slice(0,i));
      if (i >= text.length) { clearInterval(typingRef.current); setTyping(false); if (onDone) onDone(); }
    }, 18);
  }

  function skipTyping() {
    if (typingRef.current) clearInterval(typingRef.current);
    setDisplayText(narrative);
    setTyping(false); setChoicesVisible(true);
  }

  function rollEvent() {
    const available = EVENTS.filter(e => !usedEvents.current.has(e.id));
    if (available.length === 0 || Math.random() > 0.35) return null;
    return available[Math.floor(Math.random() * available.length)];
  }

  async function loadStage(idx, spoonKey, genderVal, statsNow, histNow) {
    setLoading(true); setError(null); setEvent(null);
    setChoicesVisible(false); setDisplayText(""); setNarrative("");
    const ch = CHAPTER_DATA[spoonKey][idx];
    try {
      const text = await fetchNarrative(ch, spoonKey, genderVal, statsNow, histNow);
      setNarrative(text);
      setLoading(false);
      typeText(text, () => {
        const ev = rollEvent();
        if (ev) { usedEvents.current.add(ev.id); setEvent(ev); }
        else setChoicesVisible(true);
      });
    } catch(e) {
      setLoading(false); setError("장면을 불러오지 못했어요.");
    }
  }

  async function loadEnding(spoonKey, genderVal, statsNow, histNow) {
    setScreen("ending"); setLoading(true);
    setDisplayText(""); setChoicesVisible(false); setEndingData(null);
    try {
      const data = await fetchEndingNarrative(spoonKey, genderVal, statsNow, histNow);
      setEndingData(data);
      setLoading(false);
      typeText(data.narrative, () => setChoicesVisible(true));
    } catch(e) { setLoading(false); setError("엔딩을 불러오지 못했어요."); }
  }

  function applyDelta(d, base) {
    return {
      happiness: Math.min(100,Math.max(0,(base.happiness)+(d.happiness||0))),
      money:     Math.min(100,Math.max(0,(base.money)    +(d.money||0))),
      relation:  Math.min(100,Math.max(0,(base.relation) +(d.relation||0))),
      pride:     Math.min(100,Math.max(0,(base.pride)    +(d.pride||0))),
    };
  }

  function handlePick(obj) {
    setPickedObj(obj);
    setSpoon(SPOON_ORDER[OBJECTS.findIndex(o=>o.id===obj.id) % 4]);
    setScreen("gender");
  }

  function handleGender(g) { setGender(g); setScreen("reveal"); }

  function startGame() {
    const initStats = { ...SPOONS[spoon].startStats };
    setStats(initStats); setHistory([]); setStageIdx(0);
    usedEvents.current = new Set();
    setScreen("game");
    loadStage(0, spoon, gender, initStats, []);
  }

  function handleEventChoice(choice) {
    const newStats = applyDelta(choice.delta, stats);
    setStats(newStats); setEvent(null); setChoicesVisible(true);
  }

  function handleChoice(choice) {
    const newStats = applyDelta(choice.delta, stats);
    const newHistory = [...history, { stage: chapter.stage, choice: choice.text, delta: choice.delta }];
    setStats(newStats); setHistory(newHistory); setChoicesVisible(false);
    const nextIdx = stageIdx + 1;
    if (nextIdx >= chapters.length) loadEnding(spoon, gender, newStats, newHistory);
    else { setStageIdx(nextIdx); loadStage(nextIdx, spoon, gender, newStats, newHistory); }
  }

  function handleRestart() {
    setScreen("intro"); setPickedObj(null); setSpoon(null); setGender(null);
    setStageIdx(0); setStats({ happiness:50, money:50, relation:50, pride:50 });
    setHistory([]); setNarrative(""); setDisplayText(""); setChoicesVisible(false);
    setEvent(null); setEndingData(null); setError(null);
    usedEvents.current = new Set();
  }

  const spoonData = spoon ? SPOONS[spoon] : null;
  const wx = chapter ? (WEATHER_BG[chapter.weather] || WEATHER_BG.sunny) : WEATHER_BG.sunny;
  const isEnding = screen === "ending";

  const css = `
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#FAFAFA;color:#111;}
    @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
    @keyframes pulse{0%,100%{opacity:.45}50%{opacity:1}}
    @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
    @keyframes eventIn{from{opacity:0;transform:scale(.97)}to{opacity:1;transform:none}}
    @keyframes rd{to{transform:translateY(115vh)}}
    button{font-family:inherit;cursor:pointer;}
  `;
  const wrap = { maxWidth:520, margin:"0 auto", padding:"1.25rem 1rem" };

  if (screen === "intro") return (
    <>
      <style>{css}</style>
      <div style={{ ...wrap, textAlign:"center", paddingTop:"2rem" }}>
        <img
          src="/og-image.png"
          alt="하나의 생 인생 시뮬레이터"
          style={{ width:"100%", maxWidth:480, borderRadius:14, marginBottom:28, display:"block", margin:"0 auto 28px" }}
        />
        <div style={{ fontSize:11, letterSpacing:4, color:"#9CA3AF", marginBottom:10 }}>하나의 생(生)</div>
        <h1 style={{ fontSize:28, fontWeight:500, marginBottom:14 }}>인생 시뮬레이터</h1>
        <p style={{ fontSize:14, color:"#6B7280", lineHeight:1.95, margin:"0 auto 32px", maxWidth:300 }}>
          당신은 어떤 삶을 살게 될까요.<br/>하나의 선택이 모든 것을 바꿉니다.
        </p>
        <button onClick={()=>setScreen("pick")} style={{ padding:"14px 44px", borderRadius:10, border:"1px solid #D1D5DB", background:"#fff", fontSize:15 }}>
          태어나기
        </button>
      </div>
    </>
  );

  if (screen === "pick") return (
    <>
      <style>{css}</style>
      <div style={wrap}>
        <div style={{ textAlign:"center", marginBottom:28 }}>
          <div style={{ fontSize:11, letterSpacing:3, color:"#9CA3AF", marginBottom:8 }}>탄생의 순간</div>
          <p style={{ fontSize:14, color:"#6B7280", lineHeight:1.85 }}>
            눈을 떴을 때 무언가가 보인다.<br/>아무것도 모른 채, 직감으로 하나를 고르세요.
          </p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:10 }}>
          {OBJECTS.map(obj=>(
            <button key={obj.id} onClick={()=>handlePick(obj)} style={{ padding:"22px 8px", borderRadius:12, border:"1px solid #E5E7EB", background:"#fff", display:"flex", flexDirection:"column", alignItems:"center", gap:8 }}>
              <span style={{ fontSize:34 }}>{obj.emoji}</span>
              <span style={{ fontSize:11, color:"#6B7280" }}>{obj.name}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );

  if (screen === "gender") return (
    <>
      <style>{css}</style>
      <div style={{ ...wrap, textAlign:"center", paddingTop:"3rem" }}>
        <div style={{ fontSize:11, letterSpacing:3, color:"#9CA3AF", marginBottom:28 }}>태어난 아이는</div>
        <div style={{ display:"flex", gap:14, justifyContent:"center" }}>
          {[{ val:"male", emoji:"👦", label:"남자아이" }, { val:"female", emoji:"👧", label:"여자아이" }].map(g=>(
            <button key={g.val} onClick={()=>handleGender(g.val)} style={{ padding:"28px 32px", borderRadius:14, border:"1px solid #E5E7EB", background:"#fff", display:"flex", flexDirection:"column", alignItems:"center", gap:10 }}>
              <span style={{ fontSize:42 }}>{g.emoji}</span>
              <span style={{ fontSize:14, color:"#6B7280" }}>{g.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );

  if (screen === "reveal") return (
    <>
      <style>{css}</style>
      <div style={{ ...wrap, textAlign:"center", paddingTop:"3rem" }}>
        <div style={{ fontSize:11, letterSpacing:3, color:"#9CA3AF", marginBottom:18 }}>당신이 고른 것</div>
        <div style={{ fontSize:52, marginBottom:8 }}>{pickedObj?.emoji}</div>
        <div style={{ fontSize:13, color:"#9CA3AF", marginBottom:10 }}>{pickedObj?.name}</div>
        <div style={{ fontSize:13, color:"#9CA3AF", marginBottom:32 }}>{gender==="male"?"👦 남자아이":"👧 여자아이"}</div>
        {spoonData && (
          <div style={{ animation:"fadeUp 0.7s ease forwards" }}>
            <div style={{ display:"inline-block", padding:"7px 22px", borderRadius:24, background:spoonData.bg, color:spoonData.color, fontSize:18, fontWeight:500, marginBottom:14, border:`1px solid ${spoonData.border}` }}>
              {spoonData.label}
            </div>
            <p style={{ fontSize:13, color:"#6B7280", lineHeight:1.85, margin:"0 auto 32px", maxWidth:320 }}>{spoonData.desc}</p>
            <button onClick={startGame} style={{ padding:"13px 40px", borderRadius:10, border:"1px solid #D1D5DB", background:"#fff", fontSize:14 }}>
              이 삶을 시작한다
            </button>
          </div>
        )}
      </div>
    </>
  );

  const endingWx = WEATHER_BG[endingData?.weather || "sunset"];

  return (
    <>
      <style>{css}</style>
      <div style={wrap}>
        {!isEnding && chapter && (
          <>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:8 }}>
              <div style={{ display:"flex", alignItems:"center", gap:7 }}>
                <span style={{ fontSize:11, color:"#9CA3AF" }}>{gender==="male"?"👦":"👧"} {chapter.stage}</span>
              </div>
              {typing && <button onClick={skipTyping} style={{ fontSize:11, color:"#9CA3AF", background:"none", border:"none" }}>건너뛰기</button>}
            </div>
            <div style={{ display:"flex", gap:3, marginBottom:12 }}>
              {chapters.map((_,i)=>(
                <div key={i} style={{ flex:1, height:3, borderRadius:2, background: i<stageIdx?"#60A5FA":i===stageIdx?"#3B82F6":"#E5E7EB", transition:"background 0.3s" }}/>
              ))}
            </div>
          </>
        )}

        {isEnding && (
          <div style={{ textAlign:"center", marginBottom:14 }}>
            <div style={{ fontSize:11, letterSpacing:3, color:"#9CA3AF", marginBottom:8 }}>노년 · 삶의 마지막</div>
            {endingData?.endingType && (
              <div style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"5px 16px", borderRadius:20, background:"#F3F4F6", marginBottom:8 }}>
                <span style={{ fontSize:16 }}>{endingData.endingType.emoji}</span>
                <span style={{ fontSize:12, color:"#4B5563", fontWeight:500 }}>{endingData.endingType.title} 엔딩</span>
              </div>
            )}
            {endingData?.title && <div style={{ fontSize:20, fontWeight:500, marginTop:4 }}>{endingData.title}</div>}
            {endingData?.endingType && spoonData && (
              <div style={{ fontSize:11, color:"#9CA3AF", marginTop:6 }}>
                선택이 만들어낸 결말
              </div>
            )}
          </div>
        )}

        <div style={{ display:"flex", gap:8, marginBottom:12 }}>
          <StatBar label="행복" value={stats.happiness} color="#F59E0B"/>
          <StatBar label="재산" value={stats.money}     color="#10B981"/>
          <StatBar label="관계" value={stats.relation}  color="#818CF8"/>
          <StatBar label="자존감" value={stats.pride}   color="#F472B6"/>
        </div>

        <div style={{ borderRadius:12, overflow:"hidden", border:"1px solid #E5E7EB", background:"#fff", marginBottom:10 }}>
          <div style={{ position:"relative", background: isEnding ? endingWx.bg : wx.bg, padding:"1.5rem 1rem", display:"flex", flexDirection:"column", alignItems:"center", gap:6, minHeight:110 }}>
            {(chapter?.weather==="rain" || endingData?.weather==="rain") && <RainDrop/>}
            <div style={{ fontSize:48, lineHeight:1, zIndex:1 }}>
              {isEnding ? "🕯️🌅" : (chapter?.emoji || "🌱")}
            </div>
            {!isEnding && chapter && (
              <div style={{ display:"flex", gap:8, zIndex:1 }}>
                <span style={{ fontSize:11, background:"rgba(0,0,0,0.25)", color:"#fff", padding:"2px 10px", borderRadius:20 }}>{wx.icon} {chapter.location}</span>
                <span style={{ fontSize:11, background:"rgba(0,0,0,0.25)", color:"#fff", padding:"2px 10px", borderRadius:20 }}>{chapter.age}</span>
              </div>
            )}
          </div>

          <div style={{ padding:"1.1rem 1.4rem", minHeight:80 }}>
            {loading ? (
              <div style={{ color:"#9CA3AF", fontSize:13, textAlign:"center", padding:"1.2rem 0", animation:"pulse 1.5s infinite" }}>
                {isEnding ? "인생을 마무리하는 중..." : "장면을 불러오는 중..."}
              </div>
            ) : error ? (
              <div>
                <p style={{ color:"#9CA3AF", fontSize:13, marginBottom:10 }}>{error}</p>
                <button onClick={()=>isEnding?loadEnding(spoon,gender,stats,history):loadStage(stageIdx,spoon,gender,stats,history)} style={{ fontSize:12, padding:"6px 14px", borderRadius:6, border:"1px solid #D1D5DB", background:"none" }}>다시 시도</button>
              </div>
            ) : (
              <p style={{ fontSize:14, lineHeight:2, margin:0, whiteSpace:"pre-line" }}>
                {displayText}
                {typing && <span style={{ animation:"blink 1s infinite" }}>▌</span>}
              </p>
            )}
          </div>

          {isEnding && endingData?.message && choicesVisible && (
            <div style={{ margin:"0 1.4rem 1.2rem", padding:"0.9rem 1.1rem", background:"#F9FAFB", borderRadius:8, borderLeft:"3px solid #60A5FA" }}>
              <div style={{ fontSize:10, color:"#9CA3AF", marginBottom:5, letterSpacing:1 }}>이 삶이 남긴 말</div>
              <p style={{ fontSize:13, fontStyle:"italic", margin:0, lineHeight:1.85 }}>"{endingData.message}"</p>
            </div>
          )}
        </div>

        {/* 이벤트 */}
        {event && !loading && (
          <div style={{ marginBottom:10, padding:"1rem 1.2rem", borderRadius:12, border:"1px solid #FDE68A", background:"#FFFBEB", animation:"eventIn 0.4s ease" }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
              <span style={{ fontSize:24 }}>{event.emoji}</span>
              <span style={{ fontSize:13, fontWeight:500, color:"#92400E" }}>{event.title}</span>
            </div>
            <p style={{ fontSize:13, color:"#111", margin:"0 0 12px", lineHeight:1.75 }}>{event.text}</p>
            <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
              {event.choices.map((c,i)=>(
                <button key={i} onClick={()=>handleEventChoice(c)} style={{ padding:"10px 14px", textAlign:"left", borderRadius:8, border:"1px solid #FDE68A", background:"#fff", fontSize:13, lineHeight:1.6 }}>
                  <span style={{ color:"#9CA3AF", marginRight:8, fontSize:11 }}>{["①","②","③"][i]}</span>{c.text}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 챕터 선택지 */}
        {choicesVisible && !isEnding && chapter?.choices && (
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            {chapter.choices.map((c,i)=>(
              <button key={i} onClick={()=>handleChoice(c)} style={{ padding:"13px 16px", textAlign:"left", borderRadius:10, border:"1px solid #E5E7EB", background:"#fff", fontSize:13, lineHeight:1.65 }}>
                <span style={{ color:"#9CA3AF", marginRight:9, fontSize:11 }}>{["①","②","③"][i]}</span>{c.text}
              </button>
            ))}
          </div>
        )}

        {isEnding && choicesVisible && (
          <button onClick={handleRestart} style={{ width:"100%", padding:"13px", borderRadius:10, border:"1px solid #E5E7EB", background:"#fff", fontSize:13 }}>
            다른 삶을 살아보다 ↺
          </button>
        )}
      </div>
    </>
  );
}
