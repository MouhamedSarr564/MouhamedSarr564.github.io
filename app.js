(function(){
'use strict';
var D=window.DATA,P=D.PROFIL,PJ=D.PROJETS,CV=D.CV;
var CV_PDF='assets/docs/CV_SARR_Mouhamed.pdf';
var main=document.getElementById('main');
var esc=function(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})};
var byId={};PJ.forEach(function(p){byId[p.id]=p});
var cartes=PJ.filter(function(p){return p.cat==='carte'}),travaux=PJ.filter(function(p){return p.cat==='travail'});
var img=function(k){return 'assets/img/'+k+'.webp'};
var allKeys={};PJ.forEach(function(p){p.imgs.forEach(function(i){allKeys[i[0]]=1})});
var nFig=Object.keys(allKeys).length;
var NAV=[['profil','Profil'],['competences','Compétences'],['cartes','Cartes et figures'],['travaux','Travaux et mémoire M1'],['cv','CV']];
var SKEV={ /* compétence -> travaux où elle est mobilisée */
 'Analyse spatiale et SIG':['t1','c2','c3','c4','c1'],
 'Cartographie et gestion de données géographiques':['c6','c7','c1','c3'],
 'Télédétection et analyse raster':['t5','c7','c3'],
 'Programmation et traitement de données':['t2','c4'],
 'Google Colab':['t2'],'Python':['t2','c4']};
var LEVEL=function(v){return v>=100?'Avancé':v>=80?'Solide':v>=60?'Intermédiaire':'Notions'};
var chips=function(a){return '<div class="chips">'+a.map(function(x){return '<span class="chip">'+esc(x)+'</span>'}).join('')+'</div>'};
var link=function(p){return '#/'+(p.cat==='carte'?'cartes':'travaux')+'/'+p.id};

function nav(route){
  document.getElementById('nav').innerHTML=NAV.map(function(n){
    return '<a href="#/'+n[0]+'"'+(route===n[0]?' aria-current="page"':'')+'>'+n[1]+'</a>'}).join('');
}
function cardHtml(p,feat){
  var im=p.imgs[0];
  var thumb=im?'<img src="'+img(im[0])+'" alt="" loading="lazy" width="640" height="480">':'<div class="card__ph">Rapport complet à télécharger</div>';
  return '<a class="card'+(feat?' card--feat':'')+'" href="'+link(p)+'"><div class="card__img">'+thumb+'</div><div class="card__b">'+
   '<span class="card__m">'+esc(p.type)+(p.annee?' · '+esc(p.annee):'')+'</span><h3>'+esc(p.titre)+'</h3><p>'+esc(p.resume)+'</p>'+chips(p.outils.slice(0,4))+'</div></a>';
}
/* ---------- pages ---------- */
function profil(){
  var t1=byId.t1,t5=byId.t5;
  var facts=[[t1.cles[0][0],t1.cles[0][1]+' (mémoire de Master 1)'],[t5.cles[0][0],t5.cles[0][1]+' (télédétection hyperspectrale)'],[String(PJ.length),'travaux détaillés, avec méthode et résultats'],[String(nFig),'cartes, graphiques et captures commentés']];
  var h='<section class="hero"><div class="hero__map" aria-hidden="true"><img src="assets/contours.svg" alt=""></div><div class="wrap hero__in">'+
   '<div><p class="eyebrow">Portfolio · Géomatique et modélisation spatiale</p><h1>SARR<br><em>Mouhamed</em></h1></div>'+
   '<p class="hero__lead">'+esc(P.accroche)+' À la recherche d\'une alternance ou d\'un stage.</p>'+
   '<div class="cta"><a class="btn btn--solid" href="#/cartes">Voir les cartes</a><a class="btn btn--ghost" href="#/travaux">Travaux et mémoire M1</a><a class="btn btn--ghost" href="'+CV_PDF+'" download>Télécharger le CV</a></div>'+
   '<div class="facts">'+facts.map(function(f){return '<div class="fact"><b>'+esc(f[0])+'</b><span>'+esc(f[1])+'</span></div>'}).join('')+'</div></div></section>';
  h+='<section class="sec"><div class="wrap two"><div><p class="eyebrow">Profil</p><h2>Du terrain à la donnée, de la donnée à la carte</h2><div style="margin-top:1.2rem">'+P.bio.map(function(b){return '<p>'+esc(b)+'</p>'}).join('')+
   '<p>Ce portfolio rassemble les cartes et analyses réalisées pendant le Master Géomatique et modélisation spatiale, ainsi que des projets personnels de cartographie. Chaque travail présente la méthode, les résultats chiffrés et les documents complets.</p></div></div>'+
   '<div><p class="eyebrow">Contact</p><dl class="info">'+P.infos.map(function(i){var v=i[0]==='Email'?'<a href="mailto:'+esc(i[1])+'">'+esc(i[1])+'</a>':i[0]==='Téléphone'?'<a href="tel:'+esc(i[1].replace(/\s/g,''))+'">'+esc(i[1])+'</a>':esc(i[1]);return '<div><dt>'+esc(i[0])+'</dt><dd>'+v+'</dd></div>'}).join('')+'</dl></div></div></section>';
  h+='<section class="sec sec--tint"><div class="wrap two"><div><p class="eyebrow">Parcours</p><h2>Formation</h2></div><ol class="tl">'+P.parcours.map(function(x){return '<li><time>'+esc(x[0])+'</time><b>'+esc(x[1].split(' – ')[0])+'</b><span>'+esc(x[1].split(' – ')[1]||'')+'</span></li>'}).join('')+'</ol></div></section>';
  h+='<section class="sec"><div class="wrap"><div class="sec__head"><div><p class="eyebrow">À la une</p><h2>Travaux récents</h2></div><a class="btn btn--line" href="#/travaux">Tous les travaux</a></div><div class="cards">'+
   cardHtml(byId.t1,true)+[byId.c6,byId.c7].map(function(p){return cardHtml(p)}).join('')+cardHtml(byId.t5)+'</div></div></section>';
  return h;
}
function competences(){
  var h='<div class="wrap page-h"><p class="eyebrow">Compétences</p><h1>Ce que je sais faire, et où je l\'ai fait</h1><p>Chaque compétence renvoie aux travaux qui la mobilisent.</p></div>';
  h+='<section class="sec"><div class="wrap two" style="align-items:start">';
  D.COMPETENCES.slice(0,2).forEach(function(g){
    h+='<div><h2 style="margin-bottom:1.5rem;font-size:1.5rem">'+esc(g[0])+'</h2><div class="sk">'+g[1].map(function(s){
      var ev=(SKEV[s[0]]||[]).map(function(id){return byId[id]}).filter(Boolean);
      return '<div class="sk__row"><div class="sk__name">'+esc(s[0])+(ev.length?'<span class="sk__ev">'+ev.slice(0,3).map(function(p){return '<a href="'+link(p)+'">'+esc(p.titre.length>34?p.titre.slice(0,32)+'…':p.titre)+'</a>'}).join('')+'</span>':'')+'</div>'+
       '<div><div class="bar" role="img" aria-label="Niveau : '+LEVEL(s[1])+'"><i style="width:'+s[1]+'%"></i></div><div class="bar__l"><span>'+LEVEL(s[1])+'</span></div></div></div>'}).join('')+'</div></div>';
  });
  h+='</div></section>';
  var tools={};PJ.forEach(function(p){p.outils.forEach(function(o){(tools[o]=tools[o]||[]).push(p.id)})});
  h+='<section class="sec sec--tint"><div class="wrap"><p class="eyebrow">Outils</p><h2 style="margin-bottom:1.5rem">Logiciels et données utilisés dans les travaux</h2>'+chips(Object.keys(tools))+'</div></section>';
  var soft=D.COMPETENCES[2];
  h+='<section class="sec"><div class="wrap"><p class="eyebrow">Savoir-être</p><h2 style="margin-bottom:1.5rem">'+esc(soft[0])+'</h2>'+chips(soft[1].map(function(s){return s[0]}))+'</div></section>';
  return h;
}
function list(arr,eyebrow,title,intro,feat){
  return '<div class="wrap page-h"><p class="eyebrow">'+eyebrow+'</p><h1>'+title+'</h1><p>'+intro+'</p></div><section class="sec" style="padding-top:1rem"><div class="wrap"><div class="cards">'+
   arr.map(function(p,i){return cardHtml(p,feat&&i===0)}).join('')+'</div></div></section>';
}
function detail(p,print){
  var arr=p.cat==='carte'?cartes:travaux,i=arr.indexOf(p),sec=p.cat==='carte'?['cartes','Cartes et figures']:['travaux','Travaux et mémoire M1'];
  var h='';
  if(!print)h+='<div class="wrap"><p class="crumb"><a href="#/'+sec[0]+'">← '+sec[1]+'</a></p></div>';
  h+='<div class="wrap pd-h"><p class="eyebrow">'+esc(p.type)+'</p><h1>'+esc(p.titre)+'</h1><p class="lead">'+esc(p.resume)+'</p><div class="meta">'+(p.annee?'<span>'+esc(p.annee)+'</span>':'')+'<span>'+esc(p.outils.join(' · '))+'</span></div></div>';
  if(p.cles.length)h+='<div class="wrap"><div class="keys">'+p.cles.map(function(k){return '<div class="key"><b>'+esc(k[0])+'</b><span>'+esc(k[1])+'</span></div>'}).join('')+'</div></div>';
  h+='<section class="sec"><div class="wrap"><p class="eyebrow">Analyse</p><div class="prose">'+p.blocs.map(function(b){return '<div class="blk">'+(b[0]?'<h3>'+esc(b[0])+'</h3>':'<h3>Présentation</h3>')+'<p>'+esc(b[1].charAt(0).toUpperCase()+b[1].slice(1))+'</p></div>'}).join('')+'</div></div></section>';
  if(p.resultats.length)h+='<section class="sec sec--tint"><div class="wrap"><p class="eyebrow">Résultats</p><h2 style="margin-bottom:1.5rem">'+esc(p.rtitre||'Résultats principaux')+'</h2><ul class="res">'+p.resultats.map(function(r){return '<li>'+esc(r)+'</li>'}).join('')+'</ul></div></section>';
  if(p.imgs.length)h+='<section class="sec"><div class="wrap"><p class="eyebrow">Cartes et figures</p><div class="figs" data-p="'+p.id+'">'+p.imgs.map(function(m,j){return '<figure class="fig"><button type="button" data-i="'+j+'" aria-label="Agrandir : '+esc(m[1])+'"><img src="'+img(m[0])+'" alt="'+esc(m[1])+'" loading="lazy"></button><figcaption>'+esc(m[1])+'</figcaption></figure>'}).join('')+'</div></div></section>';
  if(p.docs.length)h+='<section class="sec sec--tint"><div class="wrap"><p class="eyebrow">Documents</p><div class="docs">'+p.docs.map(function(d){var n=d[0].split('/').pop();return '<div class="doc"><b>'+esc(d[1])+'</b><div><a class="btn btn--dark" href="'+d[0]+'" target="_blank" rel="noopener">Ouvrir</a><a class="btn btn--line" href="'+d[0]+'" download="'+esc(n)+'">Télécharger</a></div></div>'}).join('')+'</div></div></section>';
  if(!print){var pr=arr[i-1],nx=arr[i+1];h+='<div class="wrap"><div class="pn"><div>'+(pr?'<a href="'+link(pr)+'"><small>Précédent</small>'+esc(pr.titre)+'</a>':'')+'</div><div style="text-align:right">'+(nx?'<a href="'+link(nx)+'"><small>Suivant</small>'+esc(nx.titre)+'</a>':'')+'</div></div></div>'}
  return h;
}
function cv(){
  var h='<div class="wrap page-h"><p class="eyebrow">Curriculum vitae</p><h1>'+esc(P.nom)+'</h1><p>'+esc(P.titre)+'</p><div class="cta" style="margin-top:1.5rem"><a class="btn btn--dark" href="'+CV_PDF+'" download>Télécharger le CV (PDF)</a><a class="btn btn--line" href="'+CV_PDF+'" target="_blank" rel="noopener">Ouvrir le PDF</a></div></div>';
  h+='<section class="sec" style="padding-top:1.5rem"><div class="wrap cv"><aside>'+
   '<div><h2>Contact</h2><dl class="info">'+P.infos.slice(0,3).map(function(i){return '<div><dt>'+esc(i[0])+'</dt><dd style="font-size:1rem;overflow-wrap:anywhere">'+esc(i[1])+'</dd></div>'}).join('')+'</dl></div>'+
   '<div><h2>Atouts</h2><ul>'+CV.atouts.map(function(a){return '<li>'+esc(a)+'</li>'}).join('')+'</ul></div>'+
   '<div><h2>Langues</h2>'+CV.langues.map(function(l){return '<div class="lang"><span>'+esc(l[0])+'</span><span class="dots" aria-label="'+(l[1].split('●').length-1)+' sur 5">'+esc(l[1])+'</span></div>'}).join('')+'</div></aside>'+
   '<div><section><h2>Profil professionnel</h2>'+P.bio.map(function(b){return '<p>'+esc(b)+'</p>'}).join('')+'<p>'+esc(P.accroche)+'</p></section>'+
   '<section style="margin-top:2.2rem"><h2>Expériences</h2>'+CV.experience.map(function(e){return '<div class="job"><time>'+esc(e[0])+'</time><b>'+esc(e[1])+'</b><span>'+esc(e[2])+'</span><ul>'+e[3].map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ul></div>'}).join('')+'</section>'+
   '<section style="margin-top:2.2rem"><h2>Formation</h2>'+CV.formation.map(function(f){return '<div class="job"><time>'+esc(f[0])+'</time><b>'+esc(f[1])+'</b><span>'+esc(f[2])+'</span></div>'}).join('')+'</section></div></div></section>';
  return h;
}
function tout(){
  var h=profil()+'<div class="print-sec">'+competences()+'</div><div class="print-sec">'+cv()+'</div>';
  PJ.forEach(function(p){h+='<div class="print-sec">'+detail(p,true)+'</div>'});
  return h;
}
/* ---------- router ---------- */
function render(){
  var parts=(location.hash.replace(/^#\/?/,'')||'profil').split('/'),r=parts[0],id=parts[1],h,title='SARR Mouhamed · Portfolio';
  var p=id&&byId[id];
  if(r==='profil')h=profil();
  else if(r==='competences'){h=competences();title='Compétences · '+title}
  else if(r==='cartes'){if(p&&p.cat==='carte'){h=detail(p);title=p.titre+' · '+title}else{h=list(cartes,'Cartes et figures','Cartes, figures et analyses','Cartographie thématique, analyses spatiales et projets personnels. Chaque étude présente la méthode, la lecture des cartes et les résultats chiffrés.');title='Cartes et figures · '+title}}
  else if(r==='travaux'){if(p&&p.cat==='travail'){h=detail(p);title=p.titre+' · '+title}else{h=list(travaux,'Travaux réalisés','Travaux réalisés et mémoire de Master 1','Le mémoire de Master 1 et les projets du Master Géomatique et modélisation spatiale, avec les rapports complets à télécharger.',true);title='Travaux · '+title}}
  else if(r==='cv'){h=cv();title='CV · '+title}
  else if(r==='tout'){h=tout()}
  else{h=profil();r='profil'}
  main.innerHTML=h;nav(r==='cartes'||r==='travaux'||r==='competences'||r==='cv'?r:r==='profil'?'profil':'');
  document.title=title;
  if(!window.__first||r==='tout'){window.__first=1;if(location.hash&&r!=='tout')window.scrollTo(0,0)}else{window.scrollTo(0,0);main.focus({preventScroll:true})}
}
window.addEventListener('hashchange',render);render();
/* ---------- lightbox ---------- */
var lb=document.getElementById('lb'),lbi=document.getElementById('lbi'),lbc=document.getElementById('lbc'),cur=null,idx=0;
function show(){var m=byId[cur].imgs[idx];lbi.src=img(m[0]);lbi.alt=m[1];lbc.textContent=m[1]}
main.addEventListener('click',function(e){var b=e.target.closest('.fig button');if(!b)return;cur=b.closest('.figs').dataset.p;idx=+b.dataset.i;show();lb.showModal()});
function step(d){var n=byId[cur].imgs.length;idx=(idx+d+n)%n;show()}
document.getElementById('lbx').onclick=function(){lb.close()};
document.getElementById('lbp').onclick=function(){step(-1)};
document.getElementById('lbn').onclick=function(){step(1)};
lb.addEventListener('click',function(e){if(e.target===lb)lb.close()});
lb.addEventListener('keydown',function(e){if(e.key==='ArrowLeft')step(-1);if(e.key==='ArrowRight')step(1)});
})();
