// About section: 3D character working on a laptop (Three.js)
(function(){
var box=document.getElementById('about3d');if(!box)return;
try{
if(!window.THREE)throw 0;
var rd=matchMedia('(prefers-reduced-motion: reduce)').matches;
var R=new THREE.WebGLRenderer({canvas:document.getElementById('ch2'),alpha:true,antialias:true});
R.setPixelRatio(Math.min(devicePixelRatio,2));R.shadowMap.enabled=true;R.shadowMap.type=THREE.PCFSoftShadowMap;
var S=new THREE.Scene(),C=new THREE.PerspectiveCamera(46,1,.1,60);
S.add(new THREE.HemisphereLight(0xe4e9ff,0x2b3269,.9));
var dl=new THREE.DirectionalLight(0xfff3e0,.9);dl.position.set(3,7,6);dl.castShadow=true;dl.shadow.mapSize.set(1024,1024);
var q=dl.shadow.camera;q.left=-5;q.right=5;q.top=5;q.bottom=-5;q.near=1;q.far=20;dl.shadow.bias=-.0005;S.add(dl);
var gl=new THREE.PointLight(0x7fdcf0,1.1,5);gl.position.set(0,1.8,-.1);S.add(gl);
function M(c,r){return new THREE.MeshStandardMaterial({color:c,roughness:r==null?.6:r})}
function reg(m,p){m.castShadow=true;m.receiveShadow=true;(p||S).add(m);return m}
function bx(w,h,d,c,x,y,z,p){var m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),M(c));m.position.set(x,y,z);return reg(m,p)}
function sp(r,c,x,y,z,p,sx,sy,sz){var m=new THREE.Mesh(new THREE.SphereGeometry(r,28,20),M(c,.7));m.position.set(x,y,z);if(sx)m.scale.set(sx,sy,sz);return reg(m,p)}
function cy(r,h,c,x,y,z,p,r2){var m=new THREE.Mesh(new THREE.CylinderGeometry(r,r2==null?r:r2,h,32),M(c));m.position.set(x,y,z);return reg(m,p)}
function limb(r,c){var g=new THREE.CylinderGeometry(r,r*.9,1,14);g.rotateX(Math.PI/2);g.translate(0,0,.5);return reg(new THREE.Mesh(g,M(c,.8)))}
function aim(m,a,t){m.position.copy(a);m.scale.z=a.distanceTo(t);m.lookAt(t)}
var V=function(x,y,z){return new THREE.Vector3(x,y,z)};
// floor (dark indigo) and desk (light wood)
cy(3,.1,0x30377a,0,-.05,-.3);cy(1.6,.03,0xb7aaf5,0,.02,-1.1);
bx(3.4,.12,1.6,0xe0bf92,0,.95,.1);
[[-1.6,-.65],[1.6,-.65],[-1.6,.85],[1.6,.85]].forEach(function(l){bx(.1,.9,.1,0x1f2450,l[0],.5,l[1])});
// laptop: base + lid tilted back, glowing logo on lid
bx(1.5,.04,.95,0xaeb6e0,0,1.03,.1);
var lg=new THREE.Group();lg.position.set(0,1.05,.55);lg.rotation.x=.3;S.add(lg);
bx(1.5,.95,.04,0x8f98cc,0,.48,0,lg);
var logo=new THREE.Mesh(new THREE.CircleGeometry(.11,24),new THREE.MeshBasicMaterial({color:0x7fdcf0}));logo.position.set(0,.5,.025);lg.add(logo);
cy(.1,.1,0xb7a9ff,1.2,1.12,.5);
// character (faces camera, looks at screen)
var skin=0xb98660,hood=0xe86f9a,jeans=0x3d5a9e,hair=0x16162a,cz=-1.25;
cy(.05,.4,0x9aa0c8,0,.3,cz);bx(1,.1,.9,0x35b6d3,0,.52,cz);bx(1,.9,.1,0x35b6d3,0,1.0,cz-.5);
sp(.45,jeans,0,.75,cz,null,1,.5,1.1);
var tors=cy(.44,1.0,hood,0,1.45,cz,null,.5);
sp(.17,hood,-.5,1.85,cz);sp(.17,hood,.5,1.85,cz);sp(.3,hood,0,2.0,cz-.15,null,1.2,.55,.7);cy(.1,.22,skin,0,2.12,cz);
var hd=new THREE.Group();hd.position.set(0,2.42,cz);S.add(hd);
sp(.3,skin,0,0,0,hd,1,1.12,1.05);
var eyes=[];
[-1,1].forEach(function(s){sp(.06,skin,s*.3,0,0,hd,.6,1,1);eyes.push(sp(.05,0xffffff,s*.11,.03,.25,hd,1,.75,.5));sp(.026,0x1b1b2e,s*.11,.0,.28,hd);bx(.11,.02,.02,hair,s*.11,.11,.27,hd);
var cup=cy(.1,.08,0x35b6d3,s*.34,0,0,hd);cup.rotation.z=Math.PI/2});
sp(.04,skin,0,-.04,.3,hd);
var sm=new THREE.Mesh(new THREE.TorusGeometry(.07,.012,8,16,Math.PI),M(0x7a3b2e));sm.rotation.z=Math.PI;sm.position.set(0,-.1,.28);hd.add(sm);
sp(.32,hair,0,.1,-.06,hd,1.02,.85,1.08);sp(.3,hair,0,.2,.1,hd,1,.5,.7);
var hb=new THREE.Mesh(new THREE.TorusGeometry(.35,.035,10,28,Math.PI),M(0x35b6d3));hb.position.y=.02;hd.add(hb);
[-1,1].forEach(function(s){var hp=V(s*.22,.75,cz+.1),kn=V(s*.22,.72,-.45),ft=V(s*.22,.12,-.5);aim(limb(.16,jeans),hp,kn);aim(limb(.13,jeans),kn,ft);sp(.14,jeans,s*.22,.72,-.45);bx(.3,.12,.5,0xf4f4fa,s*.22,.07,-.6)});
var arms=[-1,1].map(function(s){var sh=V(s*.5,1.85,cz),el=V(s*.66,1.4,cz+.3);sp(.12,hood,el.x,el.y,el.z);return{s:s,sh:sh,el:el,u:limb(.12,hood),f:limb(.1,hood),h:sp(.09,skin,0,0,0,null,1,.55,1.3)}});
// floating code symbols
function tag(txt,col,x,y,z){var c=document.createElement('canvas');c.width=c.height=128;var g=c.getContext('2d');g.fillStyle='rgba(20,27,58,.85)';g.beginPath();g.arc(64,64,60,0,7);g.fill();g.fillStyle=col;g.font='bold 40px monospace';g.textAlign='center';g.fillText(txt,64,78);
var s=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(c)}));s.position.set(x,y,z);s.scale.set(.7,.7,1);S.add(s);return s}
var fl=[tag('</>','#7fdcf0',-1.7,2.6,0),tag('{ }','#a99bff',1.7,2.9,-.4),tag('py','#f7c873',1.5,1.8,.8)];
function fit(){var w=box.clientWidth||300,h=box.clientHeight||300;R.setSize(w,h,false);C.aspect=w/h;C.updateProjectionMatrix()}
addEventListener('resize',fit);fit();
var mx=0,vis=true,f=0;addEventListener('pointermove',function(e){mx=e.clientX/innerWidth-.5});
new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(box);
function loop(ms){var t=rd?1:ms/1000;
if(vis||f===0){
arms.forEach(function(a,i){var tap=rd?0:Math.max(0,Math.sin(t*10+i*2.3))*.05,hand=V(a.s*.3+(rd?0:Math.sin(t*2.2+i)*.06),1.1+tap,-.2);aim(a.u,a.sh,a.el);aim(a.f,a.el,hand);a.h.position.copy(hand)});
tors.scale.set(1,1+(rd?0:Math.sin(t*1.6)*.012),.68);
hd.rotation.x=.12+(rd?0:Math.sin(t*1.4)*.04);hd.rotation.y=rd?0:Math.sin(t*.6)*.15;
var bl=(!rd&&(t%4)<.12)?.1:1;eyes.forEach(function(e){e.scale.y=.75*bl});
fl.forEach(function(s,i){s.position.y+=rd?0:Math.sin(t*1.2+i*2)*.002});
logo.material.color.setHSL(.52+(rd?0:Math.sin(t*.8)*.05),.8,.65);
C.position.set((rd?0:Math.sin(t*.35)*.7)+mx*1.2,3.5,6.3);C.lookAt(0,1.55,-.5);
R.render(S,C)}
f++;if(!rd)requestAnimationFrame(loop)}
requestAnimationFrame(loop);
}catch(e){var cc=document.getElementById('ch2');if(cc)cc.style.display='none'}
})();
