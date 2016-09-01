function GetGreatness() {
  var synonyms = new Array(
    'Again',
    'Also',
    'Further',
    'Likewise',
    'More',
    'Still',
    'Too',
    'Besides',
    'Additionally',
    'Along',
    'Along With',
    'And',
    'As Well',
    'As Well As',
    'Conjointly',
    'Furthermore',
    'In Conjunction With',
    'In Like Manner',
    'Including',
    'More Than That',
    'Moreover',
    'On Top Of',
    'Over And Above',
    'Plus',
    'To Boot',
    'Together With',
    'Withal'
  );
  var great_uno = synonyms[Math.floor(Math.random() * synonyms.length)];
  var great_dos = synonyms[Math.floor(Math.random() * synonyms.length)];
  document.getElementById('greatness').innerHTML= great_uno + ' ' + great_dos;
};