/* wireframes/_nav.js : the single registry of wireframe screens.
   Stage 04 step 3, filled in BEFORE the first screen is drawn, which is the point of it:
   every screen of the map stands here from the start with a status, so "how much is left"
   is visible in the browser at every step instead of being counted at the end. A missing
   file is invisible; an empty row in a register is not.

   Own namespace on purpose. The roadmap of the whole project lives in the root /_nav.js
   under NAV* globals and nav-* classes, and overview.html loads both registries at once,
   so a name collision would silently render the wrong array in the roadmap.

   One record per SCREEN. States are not screens: they are pages of their own file, listed
   under their screen, and that is what the three level tree in the panel renders.
     label   human name
     node    X.Y from ia/docs/sitemap.md
     cluster the IA cluster, used to group both the panel and the coverage map
     scope   MVP or ПОТІМ, carried over from the map, never re-derived here
     file    the page, relative to wireframes/. null until the screen is built
     spec    the IA node page in ia/, for the cross link at the bottom of the panel
     states  [{ label, file, node }], file null until built
     status  'built' when the screen and all its listed states exist, else 'spec' */

window.WF_NAV = [
  { cluster:'0. Global frame', kind:'component', label:'Global navigation', node:'0.1', scope:'MVP', file:null, spec:'navigation.html', states:[], status:'spec' },
  { cluster:'0. Global frame', kind:'component', label:'Footer', node:'0.2', scope:'MVP', file:null, spec:'footer.html', states:[], status:'spec' },
  { cluster:'0. Global frame', kind:'component', label:'Toast and inline feedback', node:'0.3', scope:'MVP', file:null, spec:'toasts.html', states:[], status:'spec' },
  { cluster:'0. Global frame', kind:'component', label:'State vocabulary', node:'0.4', scope:'MVP', file:null, spec:'state-vocabulary.html', states:[], status:'spec' },

  { cluster:'1. Sign in', label:'Sign in through SSO', node:'1.1', scope:'MVP', file:null, spec:'sign-in.html', status:'spec', states:[
    { label:'Loading: the provider answers', node:'1.2', file:null },
    { label:'Error: authentication failed', node:'1.3', file:null }
  ]},

  { cluster:'2. The number card', label:'The number card', node:'2.1', scope:'MVP', file:'number-card.html', spec:'number-card.html', status:'built', flow:1, states:[
    { label:'Loading: the value is queried', node:'2.2', file:'number-card-loading.html' },
    { label:'Source is down', node:'2.4', file:'number-card-source-down.html' },
    { label:'Definition changed', node:'2.5', file:'number-card-definition-changed.html' },
    { label:'Empty: nothing returned', node:'2.6', file:'number-card-empty.html' },
    { label:'Owner named, no value', node:'2.10', file:'number-card-owner-only.html' },
    { label:'Signed in analyst', node:'2.1', file:'number-card-analyst.html' },
    { label:'Source down and changed', node:'2.4 + 2.5', file:'number-card-down-and-changed.html' },
    { label:'Empty and changed', node:'2.6 + 2.5', file:'number-card-empty-and-changed.html' },
    { label:'Not readable without an account', node:'2.9', file:null, deferred:true }
  ]},
  { cluster:'2. The number card', label:'Where this number came from', node:'2.7', scope:'MVP', file:'source-layer.html', spec:'source-layer.html', status:'built', flow:1, states:[
    { label:'Open while the source is down', node:'2.7', file:'source-layer-source-down.html' },
    { label:'Open on a bare URL', node:'2.7', file:'source-layer-bare-url.html' },
    { label:'Open with restricted visibility', node:'2.7', file:null, deferred:true }
  ]},
  { cluster:'2. The number card', label:'Send this number', node:'2.8', scope:'MVP', file:'send.html', spec:'send.html', status:'built', flow:1, states:[
    { label:'Copied', node:'0.3', file:'send-copied.html' },
    { label:'Clipboard unavailable', node:'2.8', file:'send-clipboard-unavailable.html' },
    { label:'Sending a card that is down', node:'2.4', file:'send-source-down.html' }
  ]},

  { cluster:'3. Sources', label:'Sources', node:'3.1', scope:'MVP', file:null, spec:'sources.html', status:'spec', states:[
    { label:'Empty: no sources connected', node:'3.5', file:null }
  ]},
  { cluster:'3. Sources', label:'Connect a source', node:'3.2', scope:'MVP', file:null, spec:'connect-source.html', status:'spec', states:[
    { label:'Loading: testing the connection', node:'3.3', file:null },
    { label:'Error: connection failed', node:'3.4', file:null }
  ]},

  { cluster:'4. Registry and definition', label:'Metric registry', node:'4.1', scope:'MVP', file:null, spec:'metric-registry.html', status:'spec', states:[
    { label:'Empty: no metrics yet', node:'4.2', file:null },
    { label:'Search results', node:'4.3', file:null }
  ]},
  { cluster:'4. Registry and definition', label:'Define a metric', node:'4.4', scope:'MVP', file:null, spec:'define-metric.html', status:'spec', states:[
    { label:'Loading: the definition runs', node:'4.5', file:null },
    { label:'Error: the definition does not run', node:'4.6', file:null },
    { label:'Editing, previous version retained', node:'4.7', file:null }
  ]},

  { cluster:'5. Workspace', label:'Workspace and people', node:'5.1', scope:'ПОТІМ', file:null, spec:'workspace.html', states:[], status:'spec' },
  { cluster:'5. Workspace', label:'Plan and seats', node:'5.2', scope:'ПОТІМ', file:null, spec:'workspace.html', states:[], status:'spec' },

  { cluster:'6. Public surface', label:'Product page', node:'6.1', scope:'MVP', file:null, spec:'product-page.html', states:[], status:'spec' },
  { cluster:'6. Public surface', label:'Privacy policy', node:'6.5', scope:'MVP', file:null, spec:'legal-and-content.html', states:[], status:'spec' },
  { cluster:'6. Public surface', label:'Terms of service', node:'6.6', scope:'MVP', file:null, spec:'legal-and-content.html', states:[], status:'spec' },
  { cluster:'6. Public surface', label:'Trust and security', node:'6.2', scope:'ПОТІМ', file:null, spec:'trust-security.html', states:[], status:'spec' },
  { cluster:'6. Public surface', label:'Pricing', node:'6.3', scope:'ПОТІМ', file:null, spec:'pricing.html', states:[], status:'spec' },
  { cluster:'6. Public surface', label:'Documentation', node:'6.4', scope:'ПОТІМ', file:null, spec:'legal-and-content.html', states:[], status:'spec' },
  { cluster:'6. Public surface', label:'Support and contact', node:'6.7', scope:'ПОТІМ', file:null, spec:'legal-and-content.html', states:[], status:'spec' },

  { cluster:'7. System nodes', label:'404', node:'7.1', scope:'MVP', file:null, spec:'system-pages.html', states:[], status:'spec' },
  { cluster:'7. System nodes', label:'500', node:'7.2', scope:'MVP', file:null, spec:'system-pages.html', states:[], status:'spec' },
  { cluster:'7. System nodes', label:'Maintenance', node:'7.3', scope:'ПОТІМ', file:null, spec:'system-pages.html', states:[], status:'spec' },
  { cluster:'7. System nodes', label:'Cookie notice', node:'7.4', scope:'ПОТІМ', file:null, spec:'system-pages.html', states:[], status:'spec' }
];

/* The flows of the product, from ia/docs/flows.md. Screens are named by node so that a
   renamed file never has to be chased through two files. */
window.WF_FLOWS = [
  { n:1, label:'Flow 1. The main job: how far the number can be trusted',
    note:'The reader. Assembled first, and it is the flow this stage starts from.',
    nodes:['2.1','2.7','2.8'] },
  { n:2, label:'Flow 2. R1: who is answerable',
    note:'The same card. The job closes on the attribution line, and 2.10 is its reduced form.',
    nodes:['2.1'] },
  { n:3, label:'Flow 3. R4: an old figure does not travel as a current one',
    note:'The same card again, entered from a link that carries the moment it was read.',
    nodes:['2.1'] },
  { n:4, label:"Flow 4. R5: the definition stops living in somebody's head",
    note:'The analyst. Six screens, four loadings and four recoverable errors. Step 8 round.',
    nodes:['1.1','3.2','3.1','4.1','4.4','2.8'] }
];

/* Global components, node 0.2 and the ones that follow it. A screen carries a
   placeholder and this file fills it, so that twenty screens do not carry twenty
   editions of the same footer. The header of the analyst's screens (node 0.1) becomes a
   component here when the first analyst screen exists, and not before: a renderer with
   no caller is a thing invented ahead of its need. */
window.WF_GLOBALS = {
  /* The minimal footer variant: the only global surface a reader ever sees. It renders a
     target as a LINK when that screen exists in the registry and as TEXT when it does
     not, which is the IA rule about navigational elements applied automatically instead
     of remembered by hand. */
  footer: function (mount) {
    var trust = 'Plumb stores definitions, owners and lineage. Never your data rows: ' +
                'this number was queried from your source when you opened the page.';
    var targets = [
      { node:'6.1', label:'What Plumb is' },
      { node:'6.5', label:'Privacy' },
      { node:'6.6', label:'Terms' }
    ];
    var f = document.createElement('footer');
    f.className = 'wf-footer';
    var t = document.createElement('span');
    t.textContent = trust;
    f.appendChild(t);
    var links = document.createElement('span');
    links.className = 'wf-footer__links';
    targets.forEach(function (t2) {
      var s2 = (window.WF_NAV || []).filter(function (x) { return x.node === t2.node; })[0];
      var e;
      if (s2 && s2.file) { e = document.createElement('a'); e.href = s2.file; }
      else { e = document.createElement('span'); e.className = 'wf-pending'; }
      e.textContent = t2.label;
      links.appendChild(e);
    });
    f.appendChild(links);
    mount.appendChild(f);
  }
};

(function () {
  var NAV = window.WF_NAV || [];
  var footerMount = document.getElementById('wf-footer');
  if (footerMount) window.WF_GLOBALS.footer(footerMount);
  var here = (location.pathname.split('/').pop() || '');

  function byCluster(){
    var order = [], map = {};
    NAV.forEach(function(s){
      if (!map[s.cluster]) { map[s.cluster] = []; order.push(s.cluster); }
      map[s.cluster].push(s);
    });
    return order.map(function(c){ return { cluster:c, screens:map[c] }; });
  }
  function pagesOf(s){
    var n = s.file ? 1 : 0;
    (s.states || []).forEach(function(st){ if (st.file) n++; });
    return n;
  }
  function currentScreen(){
    var found = null;
    NAV.forEach(function(s){
      if (s.file === here) found = found || s;
      (s.states || []).forEach(function(st){ if (st.file === here) found = found || s; });
    });
    return found;
  }
  function el(tag, cls, text){
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function link(href, cls, text){
    var a = el(href ? 'a' : 'span', cls, text);
    if (href) a.href = href;
    return a;
  }

  /* A. The wireframe only side panel, on the screens themselves. Four blocks: a header
     that answers "where am I and which version of this screen is this", a three level
     tree, states open only under the current screen, and the way out to the IA at the
     bottom as a separate quiet block rather than as an item of the prototype. */
  var panel = document.getElementById('wf-sidebar');
  if (panel) {
    var cur = currentScreen();

    var head = el('div', 'wf-nav-head');
    head.appendChild(link('overview.html', 'wf-nav-back', 'All screens'));
    var badge = el('div');
    badge.appendChild(el('span', 'wf-nav-badge', 'Wireframes'));
    head.appendChild(badge);
    head.appendChild(el('div', 'wf-caps', 'grey clickable prototype'));
    panel.appendChild(head);

    byCluster().forEach(function(group){
      var anyPage = group.screens.some(function(s){ return s.file || (s.states||[]).some(function(st){ return st.file; }); });
      if (!anyPage) return;                       // a cluster with nothing built yet is not a tree branch
      panel.appendChild(el('div', 'wf-nav-cluster', group.cluster));
      group.screens.forEach(function(s){
        if (!s.file && !(s.states||[]).some(function(st){ return st.file; })) return;
        var isCur = (s === cur);
        var a = link(s.file, 'wf-nav-screen' + (s.file === here ? ' is-current' : ''), s.label);
        panel.appendChild(a);
        if (!isCur) return;                       // accordion: states only under the current screen
        panel.appendChild(link(s.file, 'wf-nav-state' + (s.file === here ? ' is-current' : ''), 'Ordinary'));
        (s.states || []).forEach(function(st){
          var cls = 'wf-nav-state' + (st.file === here ? ' is-current' : '') + (st.file ? '' : ' is-planned');
          var label = st.label + (st.file ? '' : (st.deferred ? ', deferred' : ', planned'));
          panel.appendChild(link(st.file, cls, label));
        });
      });
    });

    if (cur && cur.spec) {
      panel.appendChild(link('../ia/' + cur.spec, 'wf-nav-spec', 'IA specification, node ' + cur.node));
    }
  }

  /* Closing a section or a dialog returns to the state you came from, not to the ordinary
     card. Node 2.7 puts it plainly: the back button works and the open state is a real URL
     change. The href stays as the honest fallback for a page opened cold. */
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[data-wf-back]') : null;
    if (!a) return;
    var sameOrigin = document.referrer && document.referrer.indexOf(location.origin) === 0;
    if (history.length > 1 && sameOrigin) { e.preventDefault(); history.back(); }
  });

  /* B. The hub. Flow entries, then the coverage map of the whole product. */
  var flowsMount = document.getElementById('wf-flows');
  if (flowsMount) {
    (window.WF_FLOWS || []).forEach(function(f){
      var box = el('article', 'wf-flow');
      box.appendChild(el('h3', null, f.label));
      box.appendChild(el('p', 'wf-muted', f.note));
      var row = el('div', 'wf-flow-screens');
      f.nodes.forEach(function(node){
        var s = NAV.filter(function(x){ return x.node === node; })[0];
        if (!s) return;
        var chip = el('div', 'wf-flow-screen');
        chip.appendChild(link(s.file, 'wf-flow-name' + (s.file ? '' : ' is-spec'), s.node + ' ' + s.label));
        var chips = el('div', 'wf-chips');
        if (s.file) chips.appendChild(link(s.file, 'wf-chip', 'Ordinary'));
        (s.states || []).forEach(function(st){
          if (st.file) chips.appendChild(link(st.file, 'wf-chip', st.label));
          else chips.appendChild(el('span', 'wf-chip is-spec', st.label + (st.deferred ? ', deferred' : '')));
        });
        if (!chips.children.length) chips.appendChild(el('span', 'wf-chip is-spec', 'specified, not drawn'));
        chip.appendChild(chips);
        row.appendChild(chip);
      });
      box.appendChild(row);
      flowsMount.appendChild(box);
    });
  }

  var covMount = document.getElementById('wf-coverage');
  if (covMount) {
    var built = 0, spec = 0, pages = 0;
    byCluster().forEach(function(group){
      var sec = el('section', 'wf-cov-group');
      sec.appendChild(el('h3', 'wf-caps', group.cluster));
      var grid = el('div', 'wf-cov-grid');
      group.screens.forEach(function(s){
        var n = pagesOf(s);
        pages += n;
        if (n) built++; else spec++;
        var cell = el('div', 'wf-cov' + (n ? ' is-built' : ' is-spec'));
        var head = el('div', 'wf-cov-head');
        head.appendChild(el('span', 'wf-cov-node', s.node));
        head.appendChild(el('span', 'wf-cov-scope', s.scope));
        cell.appendChild(head);
        cell.appendChild(s.file ? link(s.file, 'wf-cov-name', s.label) : el('span', 'wf-cov-name', s.label));
        cell.appendChild(el('div', 'wf-cov-meta', n ? (n + (n === 1 ? ' page' : ' pages')) : 'IA only'));
        grid.appendChild(cell);
      });
      sec.appendChild(grid);
      covMount.appendChild(sec);
    });
    var count = document.getElementById('wf-count');
    if (count) count.textContent =
      built + (built === 1 ? ' screen' : ' screens') + ' built, ' +
      pages + (pages === 1 ? ' page' : ' pages') + ', ' +
      spec + ' still specification only';
  }
})();
