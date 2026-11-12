// Main UI: navigation highlight, card tilt, contact form validation, particle background
(function(){
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
addEventListener('load',function(){setTimeout(function(){document.getElementById('load').classList.add('out')},700)});
// nav highlight
var links=[].slice.call(document.querySelectorAll('nav a'));
var obs=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){links.forEach(function(l){l.classList.toggle('on',l.getAttribute('href')==='#'+x.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('section').forEach(function(s){obs.observe(s)});
var top=document.getElementById('top');
addEventListener('scroll',function(){top.classList.toggle('show',scrollY>600)},{passive:true});
top.onclick=function(){scrollTo({top:0})};
// 3D card tilt
if(matchMedia('(hover:hover)').matches&&!reduce){document.querySelectorAll('.proj .card').forEach(function(c){c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='rotateY('+x*8+'deg) rotateX('+-y*8+'deg)'});c.addEventListener('mouseleave',function(){c.style.transform=''})})}
// form
var f=document.getElementById('f');
f.addEventListener('submit',function(ev){ev.preventDefault();
var v=function(i){return document.getElementById(i).value.trim()},ok=true;
function set(id,t){document.getElementById(id).textContent=t;if(t)ok=false}
set('en',v('n').length<2?'Enter your name.':'');
set('ee',/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v('e'))?'':'Enter a valid email address.');
set('es',v('s').length<3?'Enter a subject.':'');
set('em',v('m').length<10?'Write at least 10 characters.':'');
if(!ok)return;
var body=v('m')+'\n\nFrom: '+v('n')+' ('+v('e')+')';
location.href='mailto:razayasir889@gmail.com?subject='+encodeURIComponent(v('s'))+'&body='+encodeURIComponent(body);
document.getElementById('msg').textContent='Your email app should open now. Press send there to deliver the message.';
});
// 3D background
var cv=document.getElementById('bg');
try{
if(!window.THREE)throw 0;
var gl=document.createElement('canvas').getContext('webgl');if(!gl)throw 0;
var mobile=innerWidth<760,N=mobile?38:70;
var R=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:false});
R.setPixelRatio(Math.min(devicePixelRatio,1.5));R.setSize(innerWidth,innerHeight);
var S=new THREE.Scene(),C=new THREE.PerspectiveCamera(60,innerWidth/innerHeight,.1,100);C.position.z=18;
var pts=[],pos=new Float32Array(N*3),vel=[];
for(var i=0;i<N;i++){var p=[(Math.random()-.5)*34,(Math.random()-.5)*20,(Math.random()-.5)*14];pts.push(p);vel.push([(Math.random()-.5)*.012,(Math.random()-.5)*.012,0])}
var g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pos,3));
var group=new THREE.Group();S.add(group);
group.add(new THREE.Points(g,new THREE.PointsMaterial({color:0x8a7bf0,size:.22,transparent:true,opacity:.8})));
var lg=new THREE.BufferGeometry(),lp=new Float32Array(N*N*6);lg.setAttribute('position',new THREE.BufferAttribute(lp,3));
group.add(new THREE.LineSegments(lg,new THREE.LineBasicMaterial({color:0x35b6d3,transparent:true,opacity:.22})));
var shapes=[new THREE.IcosahedronGeometry(1.5,0),new THREE.OctahedronGeometry(1.2,0),new THREE.TorusGeometry(1,.3,8,24)],objs=[];
for(var k=0;k<(mobile?3:6);k++){var m=new THREE.Mesh(shapes[k%3],new THREE.MeshBasicMaterial({color:k%2?0x6f5de0:0x35b6d3,wireframe:true,transparent:true,opacity:.35}));m.position.set((Math.random()-.5)*28,(Math.random()-.5)*14,-4-Math.random()*4);group.add(m);objs.push(m)}
var mx=0,my=0;addEventListener('pointermove',function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
addEventListener('resize',function(){R.setSize(innerWidth,innerHeight);C.aspect=innerWidth/innerHeight;C.updateProjectionMatrix()});
var D=5.5;
function tick(){
for(var i=0;i<N;i++){var p=pts[i];if(!reduce){p[0]+=vel[i][0];p[1]+=vel[i][1];if(Math.abs(p[0])>17)vel[i][0]*=-1;if(Math.abs(p[1])>10)vel[i][1]*=-1}pos[i*3]=p[0];pos[i*3+1]=p[1];pos[i*3+2]=p[2]}
var n=0;for(var a=0;a<N;a++)for(var b=a+1;b<N;b++){var A=pts[a],B=pts[b];if(Math.abs(A[0]-B[0])<D&&Math.abs(A[1]-B[1])<D&&Math.abs(A[2]-B[2])<D){lp.set([A[0],A[1],A[2],B[0],B[1],B[2]],n*6);n++}}
lg.setDrawRange(0,n*2);lg.attributes.position.needsUpdate=true;g.attributes.position.needsUpdate=true;
objs.forEach(function(o,i){if(!reduce){o.rotation.x+=.003*(i+1);o.rotation.y+=.004}});
group.rotation.y+=(mx*.4-group.rotation.y)*.03;group.rotation.x+=(my*.25-group.rotation.x)*.03;
group.position.y=scrollY*.002;
R.render(S,C);if(!reduce||true)requestAnimationFrame(tick)}
tick();
}catch(e){cv.style.display='none'}
})();
