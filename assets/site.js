const path=location.pathname.replace(/\/+$/,'/')||'/';
const menu=document.querySelector('.menu');
const links=document.querySelector('.nav-links');
const closeMenu=()=>{links?.classList.remove('open');menu?.setAttribute('aria-expanded','false');menu?.setAttribute('aria-label','메뉴 열기');};
menu?.addEventListener('click',()=>{const open=links?.classList.toggle('open');menu.setAttribute('aria-expanded',String(!!open));menu.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');});
links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();}});
const toc=document.querySelector('.case-nav details');
const mobile=matchMedia('(max-width:850px)');
const syncToc=()=>{if(toc)toc.open=!mobile.matches;};
syncToc();mobile.addEventListener('change',syncToc);
toc?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(mobile.matches)toc.open=false;}));
if(path==='/portfolio/trend-analyzer/'){
  const problem=document.querySelector('#problem');
  problem?.insertAdjacentHTML('beforebegin',`<section class="case-section engineering-summary"><div class="wrap case-grid"><h2>Service at a Glance</h2><div class="case-copy"><h3>오늘 주목할 IT 이슈와 그 근거 기사를 빠르게 찾습니다.</h3><div class="pipeline-map compact-map"><span>News Channels</span><span>Keyword Extraction</span><span>Popular / Rising</span><span>Trend Dashboard</span><span>Related Articles</span></div><p>사용자에게 보이는 핵심은 키워드 랭킹·급상승 흐름·관련 기사입니다. Data / Backend / Database / Frontend / Cloud & Delivery / Troubleshooting은 이 기능을 구현하고 운영하기 위해 연결한 엔지니어링 범위입니다.</p></div></div></section>`);
  document.querySelector('#service')?.insertAdjacentHTML('beforebegin',`<section class="case-section" id="oracle"><div class="wrap case-grid"><h2>Database</h2><div class="case-copy"><h3>Oracle 연결 환경, schema와 운영 장애를 관리했습니다.</h3><div class="delivery-flow db-flow"><span class="delivery-step">Local Oracle</span><span class="delivery-arrow">→</span><span class="delivery-step">Flyway</span><span class="delivery-arrow">→</span><span class="delivery-step">Operating Oracle</span></div><ul class="bullets"><li>Docker Oracle local environment와 Spring local profile 구성</li><li>operating Wallet datasource profile 분리</li><li>Flyway schema migration 관리</li><li>운영 로그로 ORA-12838 원인을 진단하고 직렬 DML 방식으로 수정</li></ul><div class="notice warning">직접 수행 범위는 <strong>Oracle 운영 DB 연결·환경 분리·스키마 관리·장애 대응</strong>입니다. Oracle instance provisioning으로 표현하지 않습니다.</div></div></div></section>`);
  document.querySelector('#verification')?.insertAdjacentHTML('beforebegin',`<section class="case-section" id="delivery"><div class="wrap case-grid"><h2>Cloud & Delivery</h2><div class="case-copy"><div class="delivery-flow"><span class="delivery-step">Code</span><span class="delivery-arrow">→</span><span class="delivery-step">Quality Gate</span><span class="delivery-arrow">→</span><span class="delivery-step">SHA Image</span><span class="delivery-arrow">→</span><span class="delivery-step">OCIR</span><span class="delivery-arrow">→</span><span class="delivery-step">OCI</span><span class="delivery-arrow">→</span><span class="delivery-step">Healthcheck</span></div><ul class="bullets"><li>Spring / React / Python PR quality gate</li><li>main push commit SHA Docker images와 OCIR push</li><li>OCI Compose deploy와 healthcheck</li><li>deployment failure gate와 controlled redeploy</li></ul><div class="state-ladder"><span>Test</span><span>CI</span><span>Deploy</span><span>Runtime</span></div></div></div></section>`);
  const nav=document.querySelector('.case-nav .wrap');
  nav?.querySelector('a[href="#service"]')?.insertAdjacentHTML('beforebegin','<a href="#oracle">Database</a>');
  nav?.querySelector('a[href="#verification"]')?.insertAdjacentHTML('beforebegin','<a href="#delivery">Cloud & Delivery</a>');
}
