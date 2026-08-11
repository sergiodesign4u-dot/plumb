/* Plumb, detail IA node registry.
   Own namespace on purpose: the roadmap of all pages lives in the root /_nav.js
   under NAV* globals and nav-* classes. Both registries run on structure.html at
   once, so a name collision would break the roadmap silently.

   One record per node: { label, file, group, node }
     label  human name, shown on the chip next to its number
     file   the node page, relative to ia/
     group  'global' or 'pages', exactly the GROUP column in ia/docs/sitemap.md
     node   the X.Y number, which is also the anchor on structure.html

   Nodes are added as they are written. Empty at the start of step 1 by design:
   the map grows discover-as-you-go and the hub fills itself from here. */

window.IA_NAV = [
  { label: 'Global navigation', file: 'navigation.html', group: 'global', node: '0.1', type: 'section' },
  { label: 'Footer',             file: 'footer.html',     group: 'global', node: '0.2', type: 'section' },
  { label: 'Toast and inline feedback', file: 'toasts.html', group: 'global', node: '0.3', type: 'section' }
];

(function () {
  var mount = document.getElementById('ia-structure');
  if (!mount) return;

  var groups = [
    { key: 'global', title: 'Global elements' },
    { key: 'pages',  title: 'Pages' }
  ];

  var active = (location.hash || '').replace('#', '');
  var total = 0;

  groups.forEach(function (g) {
    var items = (window.IA_NAV || []).filter(function (n) { return n.group === g.key; });
    if (!items.length) return;
    total += items.length;

    items.sort(function (a, b) {
      var pa = a.node.split('.').map(Number), pb = b.node.split('.').map(Number);
      return pa[0] - pb[0] || pa[1] - pb[1];
    });

    var sec = document.createElement('section');
    sec.className = 'ia-group';

    var h = document.createElement('h3');
    h.className = 'ia-group-title';
    h.textContent = g.title;
    sec.appendChild(h);

    var wrap = document.createElement('div');
    wrap.className = 'ia-chips';

    items.forEach(function (n) {
      var a = document.createElement('a');
      a.className = 'ia-chip' + (n.node === active ? ' is-active' : '');
      a.href = n.file;
      a.id = n.node;

      var num = document.createElement('span');
      num.className = 'ia-chip-num';
      num.textContent = n.node;
      a.appendChild(num);

      var lab = document.createElement('span');
      lab.className = 'ia-chip-label';
      lab.textContent = n.label;
      a.appendChild(lab);

      if (n.type) {
        var t = document.createElement('span');
        t.className = 'ia-chip-type';
        t.textContent = n.type;
        a.appendChild(t);
      }

      wrap.appendChild(a);
    });

    sec.appendChild(wrap);
    mount.appendChild(sec);
  });

  if (!total) {
    var p = document.createElement('p');
    p.className = 'ia-empty';
    p.textContent = 'No nodes written yet. Chips appear here as each node is specified, one at a time.';
    mount.appendChild(p);
  }
})();
