// 11th edition factions, grouped by grand alliance, plus a small set of original
// (non-GW) glyph icons used purely as visual shorthand per faction. These are
// hand-drawn abstract shapes, not reproductions of any official artwork/logos.
var FACTIONS = {
  'Imperium': [
    'Adepta Sororitas', 'Adeptus Custodes', 'Adeptus Mechanicus', 'Astra Militarum',
    'Imperial Knights', 'Space Marines', 'Black Templars', 'Dark Angels', 'Deathwatch',
    'Grey Knights', 'Space Wolves'
  ],
  'Chaos': [
    'Chaos Space Marines', 'Chaos Daemons', 'Chaos Knights', 'Death Guard',
    "Emperor's Children", 'Thousand Sons', 'World Eaters'
  ],
  'Xenos': [
    'Aeldari', 'Drukhari', 'Genestealer Cults', 'Leagues of Votann', 'Necrons',
    'Orks', "T'au Empire", 'Tyranids'
  ]
};

var FACTION_ICONS = {
  'Adepta Sororitas': '<path d="M12 2C9 6 7 9 7 12a5 5 0 0 0 10 0c0-2-1-3-2-4 .3 2-1 3-2 2-1.5-1-1-4-1-8Z" fill="currentColor" stroke="none"/>',
  'Adeptus Custodes': '<path d="M12 3v13M8 8l4-5 4 5M6 13c2 2 4 2 6 2s4 0 6-2"/>',
  'Adeptus Mechanicus': '<polygon points="12,3 17,6 17,14 12,17 7,14 7,6"/><circle cx="12" cy="10" r="2.2"/>',
  'Astra Militarum': '<polygon points="12,3 14.2,9.1 20.5,9.3 15.4,13.2 17.3,19.3 12,15.7 6.7,19.3 8.6,13.2 3.5,9.3 9.8,9.1"/>',
  'Imperial Knights': '<polygon points="12,3 20,12 12,21 4,12"/><line x1="12" y1="7" x2="12" y2="17"/>',
  'Space Marines': '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"/>',
  'Black Templars': '<path d="M12 3v18M6 9h12"/>',
  'Dark Angels': '<path d="M15 4a8 8 0 1 0 0 16 6.5 6.5 0 0 1 0-16Z" fill="currentColor" stroke="none"/>',
  'Deathwatch': '<polygon points="12,3 19,7.5 19,16.5 12,21 5,16.5 5,7.5"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>',
  'Grey Knights': '<path d="M12 3l6 14H6l6-14Z"/><line x1="12" y1="9" x2="12" y2="21"/>',
  'Space Wolves': '<polygon points="8,3 10,15 6,10" fill="currentColor" stroke="none"/><polygon points="16,3 18,10 14,15" fill="currentColor" stroke="none"/>',

  'Chaos Space Marines': '<path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19"/>',
  'Chaos Daemons': '<path d="M12 4a8 8 0 1 1-5.7 2.3"/><path d="M12 8a4 4 0 1 1-2.8 1.2"/>',
  'Chaos Knights': '<polygon points="12,4 20,12 12,20 4,12"/><path d="M12 4V2M20 12h2M12 20v2M4 12H2"/>',
  'Death Guard': '<path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11Z"/><circle cx="12" cy="15" r="1.3" fill="currentColor" stroke="none"/>',
  "Emperor's Children": '<path d="M9 20c0-3 2-4 4-4s3-1 3-3-2-3-4-3 1 3-1 3-3-1-3-3 2-4 5-4"/>',
  'Thousand Sons': '<path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6Z"/><circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none"/>',
  'World Eaters': '<path d="M5 19 17 7"/><path d="M14 4l6 2-2 6-4-3z" fill="currentColor" stroke="none"/>',

  'Aeldari': '<polygon points="12,2 16,12 12,22 8,12"/>',
  'Drukhari': '<path d="M6 18a10 10 0 0 1 10-14"/><path d="M16 4l3-.5-.5 3"/>',
  'Genestealer Cults': '<path d="M12 2l2 8 8 2-8 2-2 8-2-8-8-2 8-2Z"/>',
  'Leagues of Votann': '<path d="M4 16h16M6 16V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v7"/><path d="M9 20h6"/>',
  'Necrons': '<path d="M12 2v20M8 7h8M8 12h8M8 17h8"/>',
  'Orks': '<path d="M3 9 7 15 11 9 15 15 19 9 21 12"/>',
  "T'au Empire": '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="4" r="1.4" fill="currentColor" stroke="none"/><circle cx="19" cy="16" r="1.4" fill="currentColor" stroke="none"/><circle cx="5" cy="16" r="1.4" fill="currentColor" stroke="none"/>',
  'Tyranids': '<path d="M12 21 9 9M12 21 12 7M12 21 15 9"/>',

  '_other': '<circle cx="12" cy="12" r="8" stroke-dasharray="3 3"/>'
};

function factionIconSVG(name){
  var inner = FACTION_ICONS[name] || FACTION_ICONS._other;
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
    'stroke-linecap="round" stroke-linejoin="round">' + inner + '</svg>';
}
