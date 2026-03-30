// ── i18n ─────────────────────────────────────────────────────────────────
const T = {
  zh: {
    brandSub:      'YIELD CALCULATOR',
    headerBadge:   'MICA 合规 · 实时估算',
    heroEyebrow:   'REAL WORLD ASSETS · TOKENIZATION',
    heroTitle:     '你的欧洲房产<br><span>收益是多少？</span>',
    heroDesc:      '输入投资金额，立即查看欧洲主要城市代币化房产的预期年收益、月分红，以及你持有的 token 数量。从 €100 起投，无需银行，无需中介。',
    labelAmount:   '投资金额',
    badgeRequired: '必填',
    labelAmountEur:'投资金额 (EUR)',
    labelDuration: '投资期限',
    dur:           ['1年', '3年', '5年', '10年'],
    labelCity:     '选择城市',
    badgeMarket:   '欧洲市场',
    labelTotal:    '预期总回报',
    labelMonthly:  '月均分红',
    labelTokens:   '持有 Token 数',
    labelBreakdown:'各城市收益对比',
    btnShare:      '分享结果',
    btnCopy:       '复制链接',
    disclaimer:    '<strong>风险提示：</strong>以上数据为基于市场历史数据的估算，不构成投资建议。代币化房产存在市场风险，二级市场流动性有限，部分法律结构尚未经过法院验证。投资前请阅读完整项目文件，建议作为多元化组合的补充，而非全部资金。如有项目承诺"保证收益"，请立即远离。',
    info1:         '2025年全球 RWA 市场规模，3年增长 308%',
    info2:         '最低投资门槛，欧洲 MiCA 合规平台',
    info3:         '机构投资者已涉足或计划涉足 RWA',
    footerMeta:    'MSC STRATEGY & DIGITAL TRANSFORMATION · IÉSEG PARIS · WEB3',
    footerRight:   'RWA INTELLIGENCE · REPORT SERIES<br>数据：BCG · RIPPLE · DELOITTE · MCKINSEY · 2026',
    toastShare:    '✓ 已复制分享文案',
    toastCopy:     '✓ 链接已复制',
    toastFail:     '请手动复制浏览器地址栏',
    rTotalSub:     p  => `+${p}% 总回报率`,
    rMonthlySub:   v  => `年收益 ${v}`,
    rTokensSub:    p  => `持有 ${p}% 房产份额`,
    barLeft:       v  => `本金 ${v}`,
    barRight:      (v,p) => `收益 ${v} (+${p}%)`,
    eyebrow:       (fl,n,y,yr) => `${fl} ${n} · ${y}% 年化 · ${yr}年期估算`,
    cityYield:     (y,d) => `${y}% / 年 · ${d}`,
    activeBadge:   '当前',
    brSub:         (d,y) => `${d} · ${y}% 年化`,
    brMo:          v => `${v}/月`,
    shareText:     (a,fl,n,tot,mo,url) =>
      `💡 我用 RWA Intelligence 计算了一下：\n投资 €${a.toLocaleString()} 在 ${fl}${n} 代币化房产\n预期收益 ${tot}，月均分红 ${mo}\n\n👉 算一算你的收益：${url}`,
  },
  en: {
    brandSub:      'YIELD CALCULATOR',
    headerBadge:   'MiCA COMPLIANT · LIVE ESTIMATES',
    heroEyebrow:   'REAL WORLD ASSETS · TOKENIZATION',
    heroTitle:     'What are your European<br><span>real estate returns?</span>',
    heroDesc:      'Enter your investment and instantly see expected annual yield, monthly income, and token holdings from tokenized European real estate. Starting from €100 — no bank, no broker.',
    labelAmount:   'Investment amount',
    badgeRequired: 'Required',
    labelAmountEur:'Amount (EUR)',
    labelDuration: 'Time horizon',
    dur:           ['1 yr', '3 yrs', '5 yrs', '10 yrs'],
    labelCity:     'Choose city',
    badgeMarket:   'European market',
    labelTotal:    'Total return',
    labelMonthly:  'Monthly income',
    labelTokens:   'Tokens held',
    labelBreakdown:'City comparison',
    btnShare:      'Share result',
    btnCopy:       'Copy link',
    disclaimer:    '<strong>Risk notice:</strong> Figures are estimates based on historical market data and do not constitute investment advice. Tokenized real estate carries market risk; secondary market liquidity is limited and some legal structures have not been court-tested. Read full project documentation before investing. Treat as a portfolio complement, not your entire savings. Walk away from any project promising "guaranteed returns".',
    info1:         'Global RWA market in 2025, up 308% in 3 years',
    info2:         'Minimum investment on MiCA-compliant EU platforms',
    info3:         'Institutional investors already in or planning RWA exposure',
    footerMeta:    'MSC STRATEGY & DIGITAL TRANSFORMATION · IÉSEG PARIS · WEB3',
    footerRight:   'RWA INTELLIGENCE · REPORT SERIES<br>SOURCES: BCG · RIPPLE · DELOITTE · MCKINSEY · 2026',
    toastShare:    '✓ Share text copied',
    toastCopy:     '✓ Link copied',
    toastFail:     'Please copy the URL manually',
    rTotalSub:     p  => `+${p}% total ROI`,
    rMonthlySub:   v  => `Annual yield ${v}`,
    rTokensSub:    p  => `${p}% property share`,
    barLeft:       v  => `Principal ${v}`,
    barRight:      (v,p) => `Yield ${v} (+${p}%)`,
    eyebrow:       (fl,n,y,yr) => `${fl} ${n} · ${y}% P.A. · ${yr}-YR ESTIMATE`,
    cityYield:     (y,d) => `${y}% / yr · ${d}`,
    activeBadge:   'Selected',
    brSub:         (d,y) => `${d} · ${y}% yield`,
    brMo:          v => `${v} / mo`,
    shareText:     (a,fl,n,tot,mo,url) =>
      `💡 I just calculated my RWA returns:\n€${a.toLocaleString()} in ${fl} ${n} tokenized real estate\nExpected return: ${tot} — monthly: ${mo}\n\n👉 Calculate yours: ${url}`,
  }
};

// ── City data ─────────────────────────────────────────────────────────────
const CITIES = [
  { id:'paris',     zh:'巴黎',        en:'Paris',      flag:'🇫🇷', yield:6.8, dzh:'商业办公', den:'Commercial',  color:'#1a56e8' },
  { id:'berlin',    zh:'柏林',        en:'Berlin',     flag:'🇩🇪', yield:5.9, dzh:'物流仓储', den:'Logistics',   color:'#0d9e7a' },
  { id:'lisbon',    zh:'里斯本',      en:'Lisbon',     flag:'🇵🇹', yield:7.2, dzh:'住宅公寓', den:'Residential', color:'#c47a0a' },
  { id:'amsterdam', zh:'阿姆斯特丹', en:'Amsterdam',  flag:'🇳🇱', yield:6.1, dzh:'混合用途', den:'Mixed-use',   color:'#9333ea' },
  { id:'madrid',    zh:'马德里',      en:'Madrid',     flag:'🇪🇸', yield:5.5, dzh:'零售商业', den:'Retail',      color:'#e8344a' },
  { id:'milan',     zh:'米兰',        en:'Milan',      flag:'🇮🇹', yield:4.8, dzh:'政府债券', den:'Gov. Bond',   color:'#2a6e8a' },
];

// ── State ─────────────────────────────────────────────────────────────────
let state = { amount: 1000, years: 3, cityId: 'paris', lang: 'zh' };

// ── Language switch ───────────────────────────────────────────────────────
function setLang(lang) {
  state.lang = lang;
  document.documentElement.lang = lang;
  document.getElementById('btnZh').classList.toggle('active', lang === 'zh');
  document.getElementById('btnEn').classList.toggle('active', lang === 'en');

  const t = T[lang];
  const plain = [
    'brandSub','headerBadge','labelAmount','badgeRequired','labelAmountEur',
    'labelDuration','labelCity','badgeMarket','labelTotal','labelMonthly',
    'labelTokens','labelBreakdown','btnShare','btnCopy','info1','info2','info3','footerMeta'
  ];
  plain.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = t[id];
  });

  document.getElementById('heroTitle').innerHTML   = t.heroTitle;
  document.getElementById('heroEyebrow').textContent = t.heroEyebrow;
  document.getElementById('heroDesc').textContent  = t.heroDesc;
  document.getElementById('disclaimerBox').innerHTML = t.disclaimer;
  document.getElementById('footerRight').innerHTML = t.footerRight;

  const durs = [1, 3, 5, 10];
  durs.forEach((d, i) => {
    document.getElementById('dur' + d).textContent = t.dur[i];
  });

  buildCities();
  render();
}

// ── Build city grid ───────────────────────────────────────────────────────
function buildCities() {
  const t = T[state.lang];
  document.getElementById('cityGrid').innerHTML = CITIES.map(c => {
    const name = state.lang === 'zh' ? c.zh : c.en;
    const desc = state.lang === 'zh' ? c.dzh : c.den;
    return `<button class="city-btn ${c.id === state.cityId ? 'active' : ''}"
      onclick="setCity('${c.id}')" id="city-${c.id}">
      <span class="city-btn-name">${c.flag} ${name}</span>
      <span class="city-btn-yield">${t.cityYield(c.yield, desc)}</span>
    </button>`;
  }).join('');
}

// ── Sync amount & slider ──────────────────────────────────────────────────
function sync(src) {
  const inp = document.getElementById('amount');
  const sl  = document.getElementById('amountSlider');
  if (src === 'amount') {
    let v = parseInt(inp.value) || 100;
    v = Math.max(100, Math.min(1000000, v));
    state.amount = v;
    sl.value = Math.min(v, 50000);
  } else {
    state.amount = parseInt(sl.value);
    inp.value = state.amount;
  }
  render();
}

function setDur(y) {
  state.years = y;
  document.querySelectorAll('.dur-tab').forEach(b =>
    b.classList.toggle('active', parseInt(b.dataset.yr) === y)
  );
  render();
}

function setCity(id) {
  state.cityId = id;
  document.querySelectorAll('.city-btn').forEach(b => b.classList.remove('active'));
  const el = document.getElementById('city-' + id);
  if (el) el.classList.add('active');
  render();
}

// ── Core calc ─────────────────────────────────────────────────────────────
function calc(amount, yp, years) {
  const annual  = amount * (yp / 100);
  const total   = annual * years;
  const monthly = annual / 12;
  return { annual, total, monthly, tokens: amount, roi: (total / amount) * 100 };
}

function fmt(n) {
  if (n >= 10000) return '€' + (n / 1000).toFixed(1) + 'k';
  if (n >= 1000)  return '€' + n.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  return '€' + n.toFixed(2);
}

// ── Render ────────────────────────────────────────────────────────────────
function render() {
  const t    = T[state.lang];
  const city = CITIES.find(c => c.id === state.cityId);
  const r    = calc(state.amount, city.yield, state.years);
  const name = state.lang === 'zh' ? city.zh : city.en;
  const desc = state.lang === 'zh' ? city.dzh : city.den;

  document.getElementById('resultsEyebrow').textContent =
    t.eyebrow(city.flag, name, city.yield, state.years);

  document.getElementById('rTotal').textContent     = fmt(r.total);
  document.getElementById('rTotalSub').textContent  = t.rTotalSub(r.roi.toFixed(1));
  document.getElementById('rMonthly').textContent   = fmt(r.monthly);
  document.getElementById('rMonthlySub').textContent = t.rMonthlySub(fmt(r.annual));
  document.getElementById('rTokens').textContent    = r.tokens.toLocaleString();
  document.getElementById('rTokensSub').textContent =
    t.rTokensSub(((r.tokens / 2000000) * 100).toFixed(4));

  const barPct = Math.min((r.roi / 100) * 60 + 10, 85);
  document.getElementById('progressBar').style.width = barPct + '%';
  document.getElementById('barLeft').textContent  = t.barLeft(fmt(state.amount));
  document.getElementById('barRight').textContent = t.barRight(fmt(r.total), r.roi.toFixed(0));

  // Breakdown
  const sorted = [...CITIES].sort((a, b) => b.yield - a.yield);
  document.getElementById('breakdownList').innerHTML = sorted.map(c => {
    const cr    = calc(state.amount, c.yield, state.years);
    const cname = state.lang === 'zh' ? c.zh : c.en;
    const cdesc = state.lang === 'zh' ? c.dzh : c.den;
    const isA   = c.id === state.cityId;
    const badge = isA
      ? `<span style="font-family:'IBM Plex Mono',monospace;font-size:9px;background:var(--blue);color:white;padding:1px 7px;border-radius:8px;margin-left:6px;vertical-align:middle;letter-spacing:.04em">${t.activeBadge}</span>`
      : '';
    return `<div class="breakdown-row" style="${isA ? 'background:var(--blue-l);margin:0 -24px;padding:11px 24px;border-radius:8px' : ''}">
      <div class="br-left">
        <div class="br-dot" style="background:${c.color}"></div>
        <div>
          <div class="br-name">${c.flag} ${cname}${badge}</div>
          <div class="br-sub">${t.brSub(cdesc, c.yield)}</div>
        </div>
      </div>
      <div class="br-right">
        <div class="br-val">${fmt(cr.total)}</div>
        <div class="br-tokens">${t.brMo(fmt(cr.monthly))}</div>
      </div>
    </div>`;
  }).join('');
}

// ── Share & copy ──────────────────────────────────────────────────────────
function shareResult() {
  const t    = T[state.lang];
  const city = CITIES.find(c => c.id === state.cityId);
  const r    = calc(state.amount, city.yield, state.years);
  const name = state.lang === 'zh' ? city.zh : city.en;
  const text = t.shareText(state.amount, city.flag, name, fmt(r.total), fmt(r.monthly), window.location.href);
  if (navigator.share) {
    navigator.share({ title: 'RWA Intelligence', text, url: window.location.href });
  } else {
    navigator.clipboard.writeText(text).then(() => showToast(t.toastShare));
  }
}

function copyLink() {
  const t = T[state.lang];
  navigator.clipboard.writeText(window.location.href)
    .then(() => showToast(t.toastCopy))
    .catch(() => showToast(t.toastFail));
}

function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2500);
}

// ── Boot ──────────────────────────────────────────────────────────────────
setLang('zh');
