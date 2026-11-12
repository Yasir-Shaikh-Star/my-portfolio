// Hero: technology logos + 3D character coding at a desk (Three.js)
(function(){
var L=[['HTML5','#e44d26','#fff','5'],['CSS3','#1572b6','#fff','3'],['JavaScript','#f7df1e','#222','JS'],['Python','#3776ab','#ffd43b','Py'],['C++','#00599c','#fff','C++'],['Java','#e76f00','#fff','Ja'],['PHP','#777bb4','#fff','php'],['MySQL','#00758f','#fff','SQL'],['Bootstrap','#7952b3','#fff','B'],['Git','#f05032','#fff','Git']];
function b(x){return '<span class="lg" style="background:'+x[1]+';color:'+x[2]+'" role="img" aria-label="'+x[0]+'">'+x[3]+'</span>'}
document.getElementById('logos').innerHTML=L.map(function(x){return '<figure>'+b(x)+x[0]+'</figure>'}).join('');
var st=document.getElementById('stage'),P=[[3,6],[80,4],[88,32],[1,44],[89,64],[4,76],[70,88],[42,1]];
st.insertAdjacentHTML('beforeend',L.slice(0,8).map(function(x,i){return '<span class="fl" style="left:'+P[i][0]+'%;top:'+P[i][1]+'%;animation-delay:'+(-i*.8)+'s">'+b(x)+'</span>'}).join(''));
try{
if(!window.THREE)throw 0;
var rd=matchMedia('(prefers-reduced-motion: reduce)').matches;
var R=new THREE.WebGLRenderer({canvas:document.getElementById('ch'),alpha:true,antialias:true});
R.setPixelRatio(Math.min(devicePixelRatio,2));R.shadowMap.enabled=true;R.shadowMap.type=THREE.PCFSoftShadowMap;
var S=new THREE.Scene(),C=new THREE.PerspectiveCamera(36,1,.1,60);
S.add(new THREE.HemisphereLight(0xe4e9ff,0x2b3269,.85));
var dl=new THREE.DirectionalLight(0xfff3e0,.95);dl.position.set(4,8,6);dl.castShadow=true;dl.shadow.mapSize.set(1024,1024);
var sc2=dl.shadow.camera;sc2.left=-7;sc2.right=7;sc2.top=7;sc2.bottom=-7;sc2.near=1;sc2.far=25;dl.shadow.bias=-.0005;S.add(dl);
var sl=new THREE.PointLight(0x7fdcf0,1,6);sl.position.set(.7,2,.2);S.add(sl);
function M(c,r,e){var o={color:c,roughness:r==null?.6:r};if(e){o.emissive=e;o.emissiveIntensity=.9}return new THREE.MeshStandardMaterial(o)}
function reg(m,p){m.castShadow=true;m.receiveShadow=true;(p||S).add(m);return m}
function bx(w,h,d,c,x,y,z,p,r){var m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),M(c,r));m.position.set(x,y,z);return reg(m,p)}
function sp(r,c,x,y,z,p,sx,sy,sz){var m=new THREE.Mesh(new THREE.SphereGeometry(r,28,20),M(c,.7));m.position.set(x,y,z);if(sx)m.scale.set(sx,sy,sz);return reg(m,p)}
function cy(r,h,c,x,y,z,p,r2,e){var m=new THREE.Mesh(new THREE.CylinderGeometry(r,r2==null?r:r2,h,32),M(c,.6,e));m.position.set(x,y,z);return reg(m,p)}
function limb(r,c){var g=new THREE.CylinderGeometry(r,r*.9,1,14);g.rotateX(Math.PI/2);g.translate(0,0,.5);return reg(new THREE.Mesh(g,M(c,.8)))}
function aim(m,a,t){m.position.copy(a);m.scale.z=a.distanceTo(t);m.lookAt(t)}
var V=function(x,y,z){return new THREE.Vector3(x,y,z)};
// room: dark indigo floor, light lavender wall, warm wood desk
var sh=new THREE.Mesh(new THREE.PlaneGeometry(16,12),new THREE.ShadowMaterial({opacity:.28}));sh.rotation.x=-Math.PI/2;sh.position.set(0,.005,.8);sh.receiveShadow=true;S.add(sh);
cy(2.5,.03,0x9d8ff0,0,.02,.9);
cy(.28,.45,0xe8a87c,3.3,.23,-1.7,null,.22);
[[0,.75,0],[.15,.95,.05],[-.15,.9,-.05],[.05,1.15,0]].forEach(function(l){sp(.22,0x4fae7b,3.3+l[0],l[1],-1.7+l[2],null,1,1.4,1)});
// desk
bx(5.2,.12,2.2,0xe0bf92,0,.97,0,null,.5);
[[-2.4,-.95],[2.4,-.95],[-2.4,.95],[2.4,.95]].forEach(function(l){bx(.12,.92,.12,0x1f2450,l[0],.5,l[1])});
// monitor
bx(3.2,1.85,.1,0x151a40,.7,2.2,-.7,null,.3);bx(.18,.55,.12,0x2a2f66,.7,1.35,-.75);cy(.45,.04,0x2a2f66,.7,1.05,-.7);
var sc=document.createElement('canvas');sc.width=512;sc.height=288;var x=sc.getContext('2d'),tex=new THREE.CanvasTexture(sc);
var scr=new THREE.Mesh(new THREE.PlaneGeometry(2.98,1.68),new THREE.MeshBasicMaterial({map:tex}));scr.position.set(.7,2.2,-.64);S.add(scr);
var code=['import cv2, mediapipe','const dream = idea();','function build(app) {','  return app.ship();','}','<section id="projects">','  render(Portfolio)','git commit -m "ship it"','while (learning) grow();','SELECT * FROM donors;','def detect(hand): 21','npm run build done'],KW=/^(const|function|return|import|def|while|SELECT|from|git|npm)$/;
function draw(t){x.fillStyle='#10163a';x.fillRect(0,0,512,288);x.fillStyle='#1b2250';x.fillRect(0,0,512,26);
['#ff6b6b','#ffd166','#06d6a0'].forEach(function(c,i){x.fillStyle=c;x.beginPath();x.arc(14+i*16,13,4,0,7);x.fill()});
x.fillStyle='#2b3270';x.fillRect(110,4,110,22);x.fillStyle='#cbd5ff';x.font='12px monospace';x.fillText('portfolio.js',122,19);
x.fillStyle='#161c47';x.fillRect(0,26,44,262);x.font='15px monospace';
var off=t*18,k=Math.floor(off/24);
for(var i=0;i<12;i++){var y=56+i*24-(off%24);if(y<40)continue;var n=i+k;x.fillStyle='#5a6499';x.fillText(String(n+1),8,y);var px=56;
code[n%code.length].split(/(\s+)/).forEach(function(w){x.fillStyle=KW.test(w)?'#c792ea':/^["'<]/.test(w)?'#c3e88d':/^[0-9(]/.test(w)?'#f7c873':'#d4dbff';x.fillText(w,px,y);px+=x.measureText(w).width})}
if(Math.floor(t*2)%2){x.fillStyle='#fff';x.fillRect(56,266,9,16)}
tex.needsUpdate=true}
// keyboard, mouse, mug, lamp, books
bx(1.5,.05,.5,0x20254d,-.55,1.05,.45);
var kc=document.createElement('canvas');kc.width=300;kc.height=90;var kx=kc.getContext('2d');kx.fillStyle='#20254d';kx.fillRect(0,0,300,90);kx.fillStyle='#e6e9fb';
for(var ri=0;ri<4;ri++)for(var ci=0;ci<14;ci++)kx.fillRect(6+ci*21,6+ri*20,18,16);
var kp=new THREE.Mesh(new THREE.PlaneGeometry(1.42,.43),new THREE.MeshStandardMaterial({map:new THREE.CanvasTexture(kc),roughness:.7}));kp.rotation.x=-Math.PI/2;kp.position.set(-.55,1.081,.45);S.add(kp);
bx(.6,.01,.45,0x2a2f66,.45,1.035,.45);bx(.17,.05,.27,0xe6e9fb,.45,1.07,.45);
cy(.12,.22,0xb7a9ff,1.7,1.14,.55);cy(.1,.01,0x3b2a20,1.7,1.25,.55);
cy(.2,.05,0x2a2f66,2.1,1.06,-.6);var lm=limb(.025,0x9aa0c8);aim(lm,V(2.1,1.08,-.6),V(1.75,2.15,-.3));
var lh=cy(.06,.3,0xffd9a0,1.72,2.15,-.28,null,.22,0xffc977);lh.rotation.z=.5;
bx(.9,.12,.6,0x6f5de0,2.1,1.09,.45);bx(.8,.1,.55,0x35b6d3,2.1,1.2,.45);bx(.7,.1,.5,0xe86f9a,2.1,1.3,.45);
// character
var cx=-.7,skin=0xc99a6e,hood=0x6f5de0,jeans=0x3d5a9e,hair=0x16162a;
cy(.05,.45,0x9aa0c8,cx,.35,1.9);
for(var si=0;si<5;si++){var sg=new THREE.Group();sg.rotation.y=si*1.2566;sg.position.set(cx,.12,1.9);S.add(sg);bx(.6,.05,.07,0x4a4f85,.3,0,0,sg);sp(.06,0x20254d,.58,-.05,0,sg)}
bx(1.05,.12,.95,0x2fa7c0,cx,.62,1.9);bx(1,1,.1,0x2fa7c0,cx,1.25,2.4);
sp(.45,jeans,cx,.78,1.85,null,1,.45,1.1);
var tors=cy(.44,1.0,hood,cx,1.2,1.9,null,.5);
sp(.17,hood,cx-.5,1.62,1.9);sp(.17,hood,cx+.5,1.62,1.9);
sp(.3,hood,cx,1.74,2.04,null,1.2,.55,.7);cy(.1,.22,skin,cx,1.78,1.9);
var hd=new THREE.Group();hd.position.set(cx,2.05,1.9);S.add(hd);
sp(.3,skin,0,0,0,hd,1,1.12,1.05);
[-1,1].forEach(function(s){sp(.06,skin,s*.3,0,.02,hd,.6,1,1);sp(.05,0xffffff,s*.11,.04,-.26,hd,1,.7,.5);sp(.025,0x1b1b2e,s*.11,.04,-.29,hd);bx(.1,.02,.02,hair,s*.11,.12,-.28,hd);
var cup=cy(.1,.08,0x35b6d3,s*.34,0,0,hd);cup.rotation.z=Math.PI/2});
sp(.04,skin,0,-.04,-.31,hd);
sp(.32,hair,0,.1,.06,hd,1.02,.85,1.08);sp(.3,hair,0,.2,-.1,hd,1,.5,.7);
var hb=new THREE.Mesh(new THREE.TorusGeometry(.35,.035,10,28,Math.PI),M(0x35b6d3));hb.position.y=.02;hd.add(hb);
[-1,1].forEach(function(s){var hp=V(cx+s*.22,.78,1.75),kn=V(cx+s*.22,.8,1.15),ft=V(cx+s*.22,.2,1.2);aim(limb(.16,jeans),hp,kn);aim(limb(.13,jeans),kn,ft);sp(.14,jeans,cx+s*.22,.8,1.15);bx(.3,.12,.5,0xf4f4fa,cx+s*.22,.09,1.05);bx(.31,.03,.52,0x20254d,cx+s*.22,.02,1.05)});
var arms=[-1,1].map(function(s){var sh=V(cx+s*.5,1.62,1.9),el=V(cx+s*.62,1.12,1.65);sp(.12,hood,el.x,el.y,el.z);return{s:s,sh:sh,el:el,u:limb(.12,hood),f:limb(.1,hood),h:sp(.09,skin,0,0,0,null,1,.55,1.3)}});
function fit(){var w=st.clientWidth||300,h=st.clientHeight||300;R.setSize(w,h,false);C.aspect=w/h;C.fov=w<500?60:w<800?48:36;C.updateProjectionMatrix()}
addEventListener('resize',fit);fit();
var mx=0,vis=true,f=0;addEventListener('pointermove',function(e){mx=e.clientX/innerWidth-.5});
new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(st);
function loop(ms){var t=rd?1:ms/1000;
if(vis||f===0){
arms.forEach(function(a,i){var tap=rd?0:Math.max(0,Math.sin(t*9+i*2.1))*.05,hand=V(-.55+a.s*.3+(rd?0:Math.sin(t*2.4+i)*.07),1.13+tap,.5);aim(a.u,a.sh,a.el);aim(a.f,a.el,hand);a.h.position.copy(hand)});
tors.scale.set(1,1+(rd?0:Math.sin(t*1.6)*.012),.68);
hd.rotation.x=rd?0:Math.sin(t*1.5)*.04;hd.rotation.y=rd?0:Math.sin(t*.7)*.12-.15;
C.position.set(3.6+mx*.8,3.7,8.2);C.lookAt(.3,1.3,.2);
if(f%3===0)draw(t);
R.render(S,C)}
f++;if(!rd)requestAnimationFrame(loop)}
requestAnimationFrame(loop);
}catch(e){var cc=document.getElementById('ch');if(cc)cc.style.display='none'}
})();
