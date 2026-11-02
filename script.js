document.getElementById("y").textContent=new Date().getFullYear();
document.getElementById("f").addEventListener("submit",function(e){e.preventDefault();var d=new FormData(this);
var t="Hello Sagboss, I am "+d.get("n")+". I need: "+d.get("s")+". "+(d.get("m")||"");
window.open("https://wa.me/256761939172?text="+encodeURIComponent(t),"_blank");});
// 3D impeller + electric sparks
(function(){var c=document.getElementById("cv"),x=c.getContext("2d"),W,H,dpr=Math.min(devicePixelRatio||1,2);
function rs(){var r=c.getBoundingClientRect();W=r.width;H=r.height;c.width=W*dpr;c.height=H*dpr;x.setTransform(dpr,0,0,dpr,0,0)}rs();addEventListener("resize",rs);
var reduce=matchMedia("(prefers-reduced-motion: reduce)").matches,mx=0,my=0;
c.addEventListener("pointermove",function(e){var r=c.getBoundingClientRect();mx=(e.clientX-r.left)/r.width-.5;my=(e.clientY-r.top)/r.height-.5});
var N=7,rings=[];
for(var b=0;b<N;b++){var a0=b/N*6.283,v=[];for(var i=0;i<=14;i++){var t=i/14,r=.18+t*.62,a=a0+t*1.25;v.push([r*Math.cos(a),r*Math.sin(a),0]);}rings.push(v)}
var disc=[];for(var k=0;k<=48;k++){var a=k/48*6.283;disc.push([.84*Math.cos(a),.84*Math.sin(a),0])}
var sp=[];for(var s=0;s<70;s++)sp.push({a:Math.random()*6.283,h:Math.random()*2-1,r:1.0+Math.random()*.4,v:.004+Math.random()*.01});
function P(p,ry,rx,z){var X=p[0],Y=p[1],Z=p[2]+(z||0),cy=Math.cos(ry),sy=Math.sin(ry),x1=X*cy+Z*sy,z1=-X*sy+Z*cy,cx=Math.cos(rx),sx=Math.sin(rx),y2=Y*cx-z1*sx,z2=Y*sx+z1*cx,f=2.6/(2.6+z2);return[W/2+x1*f*W*.4,H/2+y2*f*W*.4,f]}
var tt=0;
function frame(){tt+=reduce?0:.012;x.clearRect(0,0,W,H);var ry=.7+Math.sin(tt*.6)*.35+mx*.8,rx=.55+my*.6,spin=tt*1.6;
function ring(arr,z,col,w,rot){x.beginPath();arr.forEach(function(p,i){var c=Math.cos(rot),s=Math.sin(rot),q=P([p[0]*c-p[1]*s,p[0]*s+p[1]*c,p[2]],ry,rx,z);i?x.lineTo(q[0],q[1]):x.moveTo(q[0],q[1])});x.strokeStyle=col;x.lineWidth=w;x.stroke()}
for(var z=-.16;z<=.17;z+=.08){ring(disc,z,"rgba(20,184,204,"+(.22+(z>0?.2:0))+")",1.4,0)}
for(var z2=-.16;z2<=.17;z2+=.16){rings.forEach(function(v){ring(v,z2,z2>0?"#ffb400":"rgba(255,180,0,.45)",z2>0?3:1.5,spin)})}
for(var z3=-.16;z3<=.17;z3+=.32){}
rings.forEach(function(v){var p0=v[0],c=Math.cos(spin),s=Math.sin(spin);var a=P([p0[0]*c-p0[1]*s,p0[0]*s+p0[1]*c,0],ry,rx,-.16),b=P([p0[0]*c-p0[1]*s,p0[0]*s+p0[1]*c,0],ry,rx,.16);x.beginPath();x.moveTo(a[0],a[1]);x.lineTo(b[0],b[1]);x.strokeStyle="rgba(255,255,255,.35)";x.lineWidth=1;x.stroke()});
var h=P([0,0,0],ry,rx,0);x.beginPath();x.arc(h[0],h[1],W*.035,0,6.283);x.fillStyle="#ffb400";x.fill();
sp.forEach(function(q){q.a+=q.v*(reduce?0:1);var p=P([q.r*Math.cos(q.a),q.r*Math.sin(q.a),q.h*.5],ry,rx,0);x.beginPath();x.arc(p[0],p[1],1.2+p[2]*1.4,0,6.283);x.fillStyle=Math.sin(q.a*3+tt*4)>.6?"#fff":"rgba(20,184,204,.8)";x.fill()});
if(!reduce&&Math.sin(tt*3.1)>.82){var a1=Math.random()*6.283,pa=P([Math.cos(a1)*.84,Math.sin(a1)*.84,0],ry,rx,0),pb=P([Math.cos(a1+3.14)*1.25,Math.sin(a1+3.14)*1.25,.3],ry,rx,0);x.beginPath();x.moveTo(pa[0],pa[1]);for(var i=1;i<7;i++){var f=i/7;x.lineTo(pa[0]+(pb[0]-pa[0])*f+(Math.random()-.5)*26,pa[1]+(pb[1]-pa[1])*f+(Math.random()-.5)*26)}x.lineTo(pb[0],pb[1]);x.strokeStyle="#fff";x.shadowColor="#ffb400";x.shadowBlur=14;x.lineWidth=2;x.stroke();x.shadowBlur=0}
requestAnimationFrame(frame)}
frame()})();
