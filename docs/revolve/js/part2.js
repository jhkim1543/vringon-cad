var Di={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ui={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kf=0,Zc=1,zf=2;var Yr=1,Oa=2,qs=3,ei=0,Ve=1,en=2,Gn=0,Ji=1,Kc=2,Jc=3,jc=4,Vf=5;var Ci=100,Hf=101,Gf=102,$f=103,Wf=104,Xf=200,qf=201,Yf=202,Zf=203,Qo=204,ta=205,Kf=206,Jf=207,jf=208,Qf=209,td=210,ed=211,nd=212,id=213,sd=214,ea=0,na=1,ia=2,ji=3,sa=4,ra=5,oa=6,aa=7,Ba=0,rd=1,od=2,Nn=0,Qc=1,th=2,eh=3,Zr=4,nh=5,ih=6,sh=7;var rh=300,Fi=301,is=302,ka=303,za=304,Kr=306,Ls=1e3,Mn=1001,Ns=1002,Le=1003,Va=1004;var ss=1005;var De=1006,Ys=1007;var $n=1008;var nn=1009,oh=1010,ah=1011,Zs=1012,Ha=1013,Dn=1014,Sn=1015,Wn=1016,Ga=1017,$a=1018,Ks=1020,lh=35902,ch=35899,hh=1021,uh=1022,sn=1023,zn=1026,Oi=1027,Wa=1028,Xa=1029,Bi=1030,qa=1031;var Ya=1033,Jr=33776,jr=33777,Qr=33778,to=33779,Za=35840,Ka=35841,Ja=35842,ja=35843,Qa=36196,tl=37492,el=37496,nl=37488,il=37489,eo=37490,sl=37491,rl=37808,ol=37809,al=37810,ll=37811,cl=37812,hl=37813,ul=37814,fl=37815,dl=37816,pl=37817,ml=37818,gl=37819,xl=37820,yl=37821,_l=36492,vl=36494,Ml=36495,bl=36283,Sl=36284,no=36285,wl=36286;var Qi=2300,Ds=2301,jo=2302,Uc=2303,Fc=2400,Oc=2401,Bc=2402;var ad=3200;var io=0,ld=1,pn="",Ie="srgb",xr="srgb-linear",yr="linear",fe="srgb";var Yi=7680;var kc=519,cd=512,hd=513,ud=514,Tl=515,fd=516,dd=517,El=518,pd=519,zc=35044;var fh="300 es",Pn=2e3,Us=2001;function rg(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function og(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function _r(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function md(){let n=_r("canvas");return n.style.display="block",n}var of={},Fs=null;function dh(...n){let t="THREE."+n.shift();Fs?Fs("log",t,...n):console.log(t,...n)}function gd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ht(...n){n=gd(n);let t="THREE."+n.shift();if(Fs)Fs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Yt(...n){n=gd(n);let t="THREE."+n.shift();if(Fs)Fs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ki(...n){let t=n.join(" ");t in of||(of[t]=!0,Ht(...n))}function xd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var yd={[ea]:na,[ia]:oa,[sa]:aa,[ji]:ra,[na]:ea,[oa]:ia,[aa]:sa,[ra]:ji},In=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],af=1234567,dr=Math.PI/180,Os=180/Math.PI;function rs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]).toLowerCase()}function Qt(n,t,e){return Math.max(t,Math.min(e,n))}function ph(n,t){return(n%t+t)%t}function ag(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function lg(n,t,e){return n!==t?(e-n)/(t-n):0}function pr(n,t,e){return(1-e)*n+e*t}function cg(n,t,e,i){return pr(n,t,1-Math.exp(-e*i))}function hg(n,t=1){return t-Math.abs(ph(n,t*2)-t)}function ug(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function fg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function dg(n,t){return n+Math.floor(Math.random()*(t-n+1))}function pg(n,t){return n+Math.random()*(t-n)}function mg(n){return n*(.5-Math.random())}function gg(n){n!==void 0&&(af=n);let t=af+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xg(n){return n*dr}function yg(n){return n*Os}function _g(n){return(n&n-1)===0&&n!==0}function vg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Mg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function bg(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),f=o((t-i)/2),d=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*h,a*c);break;default:Ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ps(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Je(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var li={DEG2RAD:dr,RAD2DEG:Os,generateUUID:rs,clamp:Qt,euclideanModulo:ph,mapLinear:ag,inverseLerp:lg,lerp:pr,damp:cg,pingpong:hg,smoothstep:ug,smootherstep:fg,randInt:dg,randFloat:pg,randFloatSpread:mg,seededRandom:gg,degToRad:xg,radToDeg:yg,isPowerOfTwo:_g,ceilPowerOfTwo:vg,floorPowerOfTwo:Mg,setQuaternionFromProperEuler:bg,normalize:Je,denormalize:Ps},ht=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(u!==y||l!==f||c!==d||h!==g){let p=l*f+c*d+h*g+u*y;p<0&&(f=-f,d=-d,g=-g,y=-y,p=-p);let m=1-a;if(p<.9995){let T=Math.acos(p),w=Math.sin(T);m=Math.sin(m*T)/w,a=Math.sin(a*T)/w,l=l*m+f*a,c=c*m+d*a,h=h*m+g*a,u=u*m+y*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+g*a,u=u*m+y*a;let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return cc.copy(this).projectOnVector(t),this.sub(cc)}reflect(t){return this.sub(cc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},cc=new I,lf=new Qe,Xt=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],y=s[0],p=s[3],m=s[6],T=s[1],w=s[4],_=s[7],v=s[2],S=s[5],b=s[8];return r[0]=o*y+a*T+l*v,r[3]=o*p+a*w+l*S,r[6]=o*m+a*_+l*b,r[1]=c*y+h*T+u*v,r[4]=c*p+h*w+u*S,r[7]=c*m+h*_+u*b,r[2]=f*y+d*T+g*v,r[5]=f*p+d*w+g*S,r[8]=f*m+d*_+g*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*c-h*i)*y,t[2]=(a*i-s*o)*y,t[3]=f*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(i*l-c*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ki("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hc.makeScale(t,e)),this}rotate(t){return Ki("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hc.makeRotation(-t)),this}translate(t,e){return Ki("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},hc=new Xt,cf=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hf=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sg(){let n={enabled:!0,workingColorSpace:xr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===fe&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fe&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pn?yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ki("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ki("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[xr]:{primaries:t,whitePoint:i,transfer:yr,toXYZ:cf,fromXYZ:hf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:cf,fromXYZ:hf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),n}var ne=Sg();function ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var xs,Bs=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{xs===void 0&&(xs=_r("canvas")),xs.width=t.width,xs.height=t.height;let s=xs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=xs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=_r("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ti(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ti(e[i]/255)*255):e[i]=ti(e[i]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wg=0,ni=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=rs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(uc(s[o].image)):r.push(uc(s[o]))}else r=uc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function uc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bs.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}var Tg=0,fc=new I,tn=class n extends In{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Mn,s=Mn,r=De,o=$n,a=sn,l=nn,c=n.DEFAULT_ANISOTROPY,h=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=rs(),this.name="",this.source=new ni(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fc).x}get height(){return this.source.getSize(fc).y}get depth(){return this.source.getSize(fc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ls:t.x=t.x-Math.floor(t.x);break;case Mn:t.x=t.x<0?0:1;break;case Ns:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ls:t.y=t.y-Math.floor(t.y);break;case Mn:t.y=t.y<0?0:1;break;case Ns:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=rh;tn.DEFAULT_ANISOTROPY=1;var be=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,_=(d+1)/2,v=(m+1)/2,S=(h+f)/4,b=(u+y)/4,x=(g+p)/4;return w>_&&w>v?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=S/i,r=b/i):_>v?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=S/s,r=x/s):v<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),i=b/r,s=x/r),this.set(i,s,r,e),this}let T=Math.sqrt((p-g)*(p-g)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(u-y)/T,this.z=(f-h)/T,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},la=class extends In{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:De,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new tn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:De,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ni(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends la{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},vr=class extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ca=class extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var he=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,r,o,a,l,c,h,u,f,d,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,f,d,g,y,p)}set(t,e,i,s,r,o,a,l,c,h,u,f,d,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/ys.setFromMatrixColumn(t,0).length(),r=1/ys.setFromMatrixColumn(t,1).length(),o=1/ys.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-y*c,e[9]=-a*l,e[2]=y-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,y=c*u;e[0]=f+y*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=y+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,y=c*u;e[0]=f-y*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=y-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+y,e[1]=l*u,e[5]=y*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-y*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+y,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Eg,t,Ag)}lookAt(t,e,i){let s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Mi.crossVectors(i,ln),Mi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Mi.crossVectors(i,ln)),Mi.normalize(),Ao.crossVectors(ln,Mi),s[0]=Mi.x,s[4]=Ao.x,s[8]=ln.x,s[1]=Mi.y,s[5]=Ao.y,s[9]=ln.y,s[2]=Mi.z,s[6]=Ao.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],y=i[6],p=i[10],m=i[14],T=i[3],w=i[7],_=i[11],v=i[15],S=s[0],b=s[4],x=s[8],A=s[12],R=s[1],P=s[5],L=s[9],k=s[13],z=s[2],N=s[6],V=s[10],F=s[14],X=s[3],J=s[7],lt=s[11],rt=s[15];return r[0]=o*S+a*R+l*z+c*X,r[4]=o*b+a*P+l*N+c*J,r[8]=o*x+a*L+l*V+c*lt,r[12]=o*A+a*k+l*F+c*rt,r[1]=h*S+u*R+f*z+d*X,r[5]=h*b+u*P+f*N+d*J,r[9]=h*x+u*L+f*V+d*lt,r[13]=h*A+u*k+f*F+d*rt,r[2]=g*S+y*R+p*z+m*X,r[6]=g*b+y*P+p*N+m*J,r[10]=g*x+y*L+p*V+m*lt,r[14]=g*A+y*k+p*F+m*rt,r[3]=T*S+w*R+_*z+v*X,r[7]=T*b+w*P+_*N+v*J,r[11]=T*x+w*L+_*V+v*lt,r[15]=T*A+w*k+_*F+v*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],y=t[7],p=t[11],m=t[15],T=l*d-c*f,w=a*d-c*u,_=a*f-l*u,v=o*d-c*h,S=o*f-l*h,b=o*u-a*h;return e*(y*T-p*w+m*_)-i*(g*T-p*v+m*S)+s*(g*w-y*v+m*b)-r*(g*_-y*S+p*b)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],y=t[13],p=t[14],m=t[15],T=e*a-i*o,w=e*l-s*o,_=e*c-r*o,v=i*l-s*a,S=i*c-r*a,b=s*c-r*l,x=h*y-u*g,A=h*p-f*g,R=h*m-d*g,P=u*p-f*y,L=u*m-d*y,k=f*m-d*p,z=T*k-w*L+_*P+v*R-S*A+b*x;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/z;return t[0]=(a*k-l*L+c*P)*N,t[1]=(s*L-i*k-r*P)*N,t[2]=(y*b-p*S+m*v)*N,t[3]=(f*S-u*b-d*v)*N,t[4]=(l*R-o*k-c*A)*N,t[5]=(e*k-s*R+r*A)*N,t[6]=(p*_-g*b-m*w)*N,t[7]=(h*b-f*_+d*w)*N,t[8]=(o*L-a*R+c*x)*N,t[9]=(i*R-e*L-r*x)*N,t[10]=(g*S-y*_+m*T)*N,t[11]=(u*_-h*S-d*T)*N,t[12]=(a*A-o*P-l*x)*N,t[13]=(e*P-i*A+s*x)*N,t[14]=(y*w-g*v-p*T)*N,t[15]=(h*v-u*w+f*T)*N,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,y=o*h,p=o*u,m=a*u,T=l*c,w=l*h,_=l*u,v=i.x,S=i.y,b=i.z;return s[0]=(1-(y+m))*v,s[1]=(d+_)*v,s[2]=(g-w)*v,s[3]=0,s[4]=(d-_)*S,s[5]=(1-(f+m))*S,s[6]=(p+T)*S,s[7]=0,s[8]=(g+w)*b,s[9]=(p-T)*b,s[10]=(1-(f+y))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=ys.set(s[0],s[1],s[2]).length(),a=ys.set(s[4],s[5],s[6]).length(),l=ys.set(s[8],s[9],s[10]).length();r<0&&(o=-o),An.copy(this);let c=1/o,h=1/a,u=1/l;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,e.setFromRotationMatrix(An),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=Pn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s),g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===Pn)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Us)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Pn,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-s),f=-(e+t)/(e-t),d=-(i+s)/(i-s),g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===Pn)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===Us)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ys=new I,An=new he,Eg=new I(0,0,0),Ag=new I(1,1,1),Mi=new I,Ao=new I,ln=new I,uf=new he,ff=new Qe,Vn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return uf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ff.setFromEuler(this),this.setFromQuaternion(ff,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var Mr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Cg=0,df=new I,_s=new Qe,Zn=new he,Co=new I,rr=new I,Rg=new I,Pg=new Qe,pf=new I(1,0,0),mf=new I(0,1,0),gf=new I(0,0,1),xf={type:"added"},Ig={type:"removed"},vs={type:"childadded",child:null},dc={type:"childremoved",child:null},Ue=class n extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new I,e=new Vn,i=new Qe,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Xt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.multiply(_s),this}rotateOnWorldAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.premultiply(_s),this}rotateX(t){return this.rotateOnAxis(pf,t)}rotateY(t){return this.rotateOnAxis(mf,t)}rotateZ(t){return this.rotateOnAxis(gf,t)}translateOnAxis(t,e){return df.copy(t).applyQuaternion(this.quaternion),this.position.add(df.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pf,t)}translateY(t){return this.translateOnAxis(mf,t)}translateZ(t){return this.translateOnAxis(gf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Co.copy(t):Co.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(rr,Co,this.up):Zn.lookAt(Co,rr,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(Zn),this.quaternion.premultiply(_s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xf),vs.child=t,this.dispatchEvent(vs),vs.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ig),dc.child=t,this.dispatchEvent(dc),dc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xf),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,t,Rg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Pg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ue.DEFAULT_UP=new I(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var je=class extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}},Lg={type:"move"},ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,i),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new je;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},_d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function pc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Bt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ne.workingColorSpace){if(t=ph(t,1),e=Qt(e,0,1),i=Qt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=pc(o,r,t+1/3),this.g=pc(o,r,t),this.b=pc(o,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=Ie){function i(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let i=_d[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return ne.workingToColorSpace(qe.copy(this),t),Math.round(Qt(qe.r*255,0,255))*65536+Math.round(Qt(qe.g*255,0,255))*256+Math.round(Qt(qe.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(qe.copy(this),e);let i=qe.r,s=qe.g,r=qe.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Ie){ne.workingToColorSpace(qe.copy(this),t);let e=qe.r,i=qe.g,s=qe.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(Ro);let i=pr(bi.h,Ro.h,e),s=pr(bi.s,Ro.s,e),r=pr(bi.l,Ro.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new Bt;Bt.NAMES=_d;var Hn=class extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Cn=new I,Kn=new I,mc=new I,Jn=new I,Ms=new I,bs=new I,yf=new I,gc=new I,xc=new I,yc=new I,_c=new be,vc=new be,Mc=new be,Ai=class n{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Cn.subVectors(t,e),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Cn.subVectors(s,e),Kn.subVectors(i,e),mc.subVectors(t,e);let o=Cn.dot(Cn),a=Cn.dot(Kn),l=Cn.dot(mc),c=Kn.dot(Kn),h=Kn.dot(mc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return _c.setScalar(0),vc.setScalar(0),Mc.setScalar(0),_c.fromBufferAttribute(t,e),vc.fromBufferAttribute(t,i),Mc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(_c,r.x),o.addScaledVector(vc,r.y),o.addScaledVector(Mc,r.z),o}static isFrontFacing(t,e,i,s){return Cn.subVectors(i,e),Kn.subVectors(t,e),Cn.cross(Kn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Cn.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Ms.subVectors(s,i),bs.subVectors(r,i),gc.subVectors(t,i);let l=Ms.dot(gc),c=bs.dot(gc);if(l<=0&&c<=0)return e.copy(i);xc.subVectors(t,s);let h=Ms.dot(xc),u=bs.dot(xc);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Ms,o);yc.subVectors(t,r);let d=Ms.dot(yc),g=bs.dot(yc);if(g>=0&&d<=g)return e.copy(r);let y=d*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(bs,a);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return yf.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(yf,a);let m=1/(p+y+f);return o=y*m,a=f*m,e.copy(i).addScaledVector(Ms,o).addScaledVector(bs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ye=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Po.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Po.copy(i.boundingBox)),Po.applyMatrix4(t.matrixWorld),this.union(Po)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(or),Io.subVectors(this.max,or),Ss.subVectors(t.a,or),ws.subVectors(t.b,or),Ts.subVectors(t.c,or),Si.subVectors(ws,Ss),wi.subVectors(Ts,ws),$i.subVectors(Ss,Ts);let e=[0,-Si.z,Si.y,0,-wi.z,wi.y,0,-$i.z,$i.y,Si.z,0,-Si.x,wi.z,0,-wi.x,$i.z,0,-$i.x,-Si.y,Si.x,0,-wi.y,wi.x,0,-$i.y,$i.x,0];return!bc(e,Ss,ws,Ts,Io)||(e=[1,0,0,0,1,0,0,0,1],!bc(e,Ss,ws,Ts,Io))?!1:(Lo.crossVectors(Si,wi),e=[Lo.x,Lo.y,Lo.z],bc(e,Ss,ws,Ts,Io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},jn=[new I,new I,new I,new I,new I,new I,new I,new I],Rn=new I,Po=new Ye,Ss=new I,ws=new I,Ts=new I,Si=new I,wi=new I,$i=new I,or=new I,Io=new I,Lo=new I,Wi=new I;function bc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Wi.fromArray(n,r);let a=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),l=t.dot(Wi),c=e.dot(Wi),h=i.dot(Wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Pe=new I,No=new ht,Ng=0,Te=class extends In{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ng++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=zc,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)No.fromBufferAttribute(this,e),No.applyMatrix3(t),this.setXY(e,No.x,No.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ps(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Je(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ps(e,this.array)),e}setX(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ps(e,this.array)),e}setY(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ps(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ps(e,this.array)),e}setW(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),i=Je(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),i=Je(i,this.array),s=Je(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),i=Je(i,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zc&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var br=class extends Te{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Sr=class extends Te{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ye=class extends Te{constructor(t,e,i){super(new Float32Array(t),e,i)}},Dg=new Ye,ar=new I,Sc=new I,ii=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Dg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ar.subVectors(t,this.center);let e=ar.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ar,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ar.copy(t.center).add(Sc)),this.expandByPoint(ar.copy(t.center).sub(Sc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ug=0,_n=new he,wc=new Ue,Es=new I,cn=new Ye,lr=new Ye,ze=new I,Fe=class n extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rg(t)?Sr:br)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Xt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,i){return _n.makeTranslation(t,e,i),this.applyMatrix4(_n),this}scale(t,e,i){return _n.makeScale(t,e,i),this.applyMatrix4(_n),this}lookAt(t){return wc.lookAt(t),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ye(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ye);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let i=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];lr.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(cn.min,lr.min),cn.expandByPoint(ze),ze.addVectors(cn.max,lr.max),cn.expandByPoint(ze)):(cn.expandByPoint(lr.min),cn.expandByPoint(lr.max))}cn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ze.fromBufferAttribute(a,c),l&&(Es.fromBufferAttribute(t,c),ze.add(Es)),s=Math.max(s,i.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Te(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new I,l[x]=new I;let c=new I,h=new I,u=new I,f=new ht,d=new ht,g=new ht,y=new I,p=new I;function m(x,A,R){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,A),u.fromBufferAttribute(i,R),f.fromBufferAttribute(r,x),d.fromBufferAttribute(r,A),g.fromBufferAttribute(r,R),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),a[x].add(y),a[A].add(y),a[R].add(y),l[x].add(p),l[A].add(p),l[R].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let x=0,A=T.length;x<A;++x){let R=T[x],P=R.start,L=R.count;for(let k=P,z=P+L;k<z;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let w=new I,_=new I,v=new I,S=new I;function b(x){v.fromBufferAttribute(s,x),S.copy(v);let A=a[x];w.copy(A),w.sub(v.multiplyScalar(v.dot(A))).normalize(),_.crossVectors(S,A);let P=_.dot(l[x])<0?-1:1;o.setXYZW(x,w.x,w.y,w.z,P)}for(let x=0,A=T.length;x<A;++x){let R=T[x],P=R.start,L=R.count;for(let k=P,z=P+L;k<z;k+=3)b(t.getX(k+0)),b(t.getX(k+1)),b(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),y=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new Te(f,h,u)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Fg=0,Ln=class extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=Ji,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=ta,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(i.blending=this.blending),this.side!==ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qo&&(i.blendSrc=this.blendSrc),this.blendDst!==ta&&(i.blendDst=this.blendDst),this.blendEquation!==Ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ht().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ht().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Qn=new I,Tc=new I,Do=new I,Ti=new I,Ec=new I,Uo=new I,Ac=new I,ts=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Tc.copy(t).add(e).multiplyScalar(.5),Do.copy(e).sub(t).normalize(),Ti.copy(this.origin).sub(Tc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Do),a=Ti.dot(this.direction),l=-Ti.dot(Do),c=Ti.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let y=1/h;u*=y,f*=y,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Tc).addScaledVector(Do,f),d}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);let i=Qn.dot(this.direction),s=Qn.dot(Qn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,i,s,r){Ec.subVectors(e,t),Uo.subVectors(i,t),Ac.crossVectors(Ec,Uo);let o=this.direction.dot(Ac),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,t);let l=a*this.direction.dot(Uo.crossVectors(Ti,Uo));if(l<0)return null;let c=a*this.direction.dot(Ec.cross(Ti));if(c<0||l+c>o)return null;let h=-a*Ti.dot(Ac);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zs=class extends Ln{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},_f=new he,Xi=new ts,Fo=new ii,vf=new I,Oo=new I,Bo=new I,ko=new I,Cc=new I,zo=new I,Mf=new I,Vo=new I,ae=class extends Ue{constructor(t=new Fe,e=new zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Cc.fromBufferAttribute(u,t),o?zo.addScaledVector(Cc,h):zo.addScaledVector(Cc.sub(e),h))}e.add(zo)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(r),Xi.copy(t.ray).recast(t.near),!(Fo.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(Fo,vf)===null||Xi.origin.distanceToSquared(vf)>(t.far-t.near)**2))&&(_f.copy(r).invert(),Xi.copy(t.ray).applyMatrix4(_f),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=o[p.materialIndex],T=Math.max(p.start,d.start),w=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let _=T,v=w;_<v;_+=3){let S=a.getX(_),b=a.getX(_+1),x=a.getX(_+2);s=Ho(this,m,t,i,c,h,u,S,b,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let T=a.getX(p),w=a.getX(p+1),_=a.getX(p+2);s=Ho(this,o,t,i,c,h,u,T,w,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=o[p.materialIndex],T=Math.max(p.start,d.start),w=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let _=T,v=w;_<v;_+=3){let S=_,b=_+1,x=_+2;s=Ho(this,m,t,i,c,h,u,S,b,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let T=p,w=p+1,_=p+2;s=Ho(this,o,t,i,c,h,u,T,w,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Og(n,t,e,i,s,r,o,a){let l;if(t.side===Ve?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ei,a),l===null)return null;Vo.copy(a),Vo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Vo);return c<e.near||c>e.far?null:{distance:c,point:Vo.clone(),object:n}}function Ho(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Oo),n.getVertexPosition(l,Bo),n.getVertexPosition(c,ko);let h=Og(n,t,e,i,Oo,Bo,ko,Mf);if(h){let u=new I;Ai.getBarycoord(Mf,Oo,Bo,ko,u),s&&(h.uv=Ai.getInterpolatedAttribute(s,a,l,c,u,new ht)),r&&(h.uv1=Ai.getInterpolatedAttribute(r,a,l,c,u,new ht)),o&&(h.normal=Ai.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new I,materialIndex:0};Ai.getNormal(Oo,Bo,ko,f.normal),h.face=f,h.barycoord=u}return h}var wr=class extends tn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Le,h=Le,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tr=class extends Te{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},As=new he,bf=new he,Go=[],Sf=new Ye,Bg=new he,cr=new ae,hr=new ii,Er=class extends ae{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Tr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Bg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ye),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,As),Sf.copy(t.boundingBox).applyMatrix4(As),this.boundingBox.union(Sf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,As),hr.copy(t.boundingSphere).applyMatrix4(As),this.boundingSphere.union(hr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(i),t.ray.intersectsSphere(hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,As),bf.multiplyMatrices(i,As),cr.matrixWorld=bf,cr.raycast(t,Go);for(let o=0,a=Go.length;o<a;o++){let l=Go[o];l.instanceId=r,l.object=this,e.push(l)}Go.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new wr(new Float32Array(s*this.count),s,this.count,Wa,Sn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Rc=new I,kg=new I,zg=new Xt,vn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Rc.subVectors(i,e).cross(kg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Rc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||zg.getNormalMatrix(t),s=this.coplanarPoint(Rc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},qi=new ii,Vg=new ht(.5,.5),$o=new I,Vs=class{constructor(t=new vn,e=new vn,i=new vn,s=new vn,r=new vn,o=new vn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Pn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],y=r[9],p=r[10],m=r[11],T=r[12],w=r[13],_=r[14],v=r[15];if(s[0].setComponents(c-o,d-h,m-g,v-T).normalize(),s[1].setComponents(c+o,d+h,m+g,v+T).normalize(),s[2].setComponents(c+a,d+u,m+y,v+w).normalize(),s[3].setComponents(c-a,d-u,m-y,v-w).normalize(),i)s[4].setComponents(l,f,p,_).normalize(),s[5].setComponents(c-l,d-f,m-p,v-_).normalize();else if(s[4].setComponents(c-l,d-f,m-p,v-_).normalize(),e===Pn)s[5].setComponents(c+l,d+f,m+p,v+_).normalize();else if(e===Us)s[5].setComponents(l,f,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(t){qi.center.set(0,0,0);let e=Vg.distanceTo(t.center);return qi.radius=.7071067811865476+e,qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if($o.x=s.normal.x>0?t.max.x:t.min.x,$o.y=s.normal.y>0?t.max.y:t.min.y,$o.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($o)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ar=class extends Ln{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ha=new I,ua=new I,wf=new he,ur=new ts,Wo=new ii,Pc=new I,Tf=new I,fa=class extends Ue{constructor(t=new Fe,e=new Ar){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)ha.fromBufferAttribute(e,s-1),ua.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ha.distanceTo(ua);t.setAttribute("lineDistance",new ye(i,1))}else Ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wo.copy(i.boundingSphere),Wo.applyMatrix4(s),Wo.radius+=r,t.ray.intersectsSphere(Wo)===!1)return;wf.copy(s).invert(),ur.copy(t.ray).applyMatrix4(wf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=d,p=g-1;y<p;y+=c){let m=h.getX(y),T=h.getX(y+1),w=Xo(this,t,ur,l,m,T,y);w&&e.push(w)}if(this.isLineLoop){let y=h.getX(g-1),p=h.getX(d),m=Xo(this,t,ur,l,y,p,g-1);m&&e.push(m)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let y=d,p=g-1;y<p;y+=c){let m=Xo(this,t,ur,l,y,y+1,y);m&&e.push(m)}if(this.isLineLoop){let y=Xo(this,t,ur,l,g-1,d,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xo(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(ha.fromBufferAttribute(a,s),ua.fromBufferAttribute(a,r),e.distanceSqToSegment(ha,ua,Pc,Tf)>i)return;Pc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Pc);if(!(c<t.near||c>t.far))return{distance:c,point:Tf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Ef=new I,Af=new I,da=class extends fa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Ef.fromBufferAttribute(e,s),Af.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ef.distanceTo(Af);t.setAttribute("lineDistance",new ye(i,1))}else Ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ri=class extends tn{constructor(t,e,i,s,r,o,a,l,c,h,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isCompressedTexture=!0,this.image={width:e,height:i},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}};var Cr=class extends tn{constructor(t=[],e=Fi,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var si=class extends tn{constructor(t,e,i=Dn,s,r,o,a=Le,l=Le,c,h=zn,u=1){if(h!==zn&&h!==Oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ni(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},pa=class extends si{constructor(t,e=Dn,i=Fi,s,r,o=Le,a=Le,l,c=zn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Rr=class extends tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ri=class n extends Fe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2));function g(y,p,m,T,w,_,v,S,b,x,A){let R=_/b,P=v/x,L=_/2,k=v/2,z=S/2,N=b+1,V=x+1,F=0,X=0,J=new I;for(let lt=0;lt<V;lt++){let rt=lt*P-k;for(let nt=0;nt<N;nt++){let ft=nt*R-L;J[y]=ft*T,J[p]=rt*w,J[m]=z,c.push(J.x,J.y,J.z),J[y]=0,J[p]=0,J[m]=S>0?1:-1,h.push(J.x,J.y,J.z),u.push(nt/b),u.push(1-lt/x),F+=1}}for(let lt=0;lt<x;lt++)for(let rt=0;rt<b;rt++){let nt=f+rt+N*lt,ft=f+rt+N*(lt+1),ut=f+(rt+1)+N*(lt+1),pt=f+(rt+1)+N*lt;l.push(nt,ft,pt),l.push(ft,ut,pt),X+=6}a.addGroup(d,X,A),d+=X,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Pr=class n extends Fe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new I,h=new ht;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ye(o,3)),this.setAttribute("normal",new ye(a,3)),this.setAttribute("uv",new ye(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}};var un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ht:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new I,s=[],r=[],o=[],a=new I,l=new he;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Qt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Qt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Hs=class extends un{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ht){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ma=class extends Hs{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function mh(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Cf=new I,Rf=new I,Ic=new mh,Lc=new mh,Nc=new mh,ga=class extends un{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new I){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Rf.subVectors(s[0],s[1]).add(s[0]),c=Rf);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Cf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Cf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),y=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),Ic.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,y,p),Lc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,y,p),Nc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(Ic.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Lc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Nc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Ic.calc(l),Lc.calc(l),Nc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Pf(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Hg(n,t){let e=1-n;return e*e*t}function Gg(n,t){return 2*(1-n)*n*t}function $g(n,t){return n*n*t}function mr(n,t,e,i){return Hg(n,t)+Gg(n,e)+$g(n,i)}function Wg(n,t){let e=1-n;return e*e*e*t}function Xg(n,t){let e=1-n;return 3*e*e*n*t}function qg(n,t){return 3*(1-n)*n*n*t}function Yg(n,t){return n*n*n*t}function gr(n,t,e,i,s){return Wg(n,t)+Xg(n,e)+qg(n,i)+Yg(n,s)}var Ir=class extends un{constructor(t=new ht,e=new ht,i=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ht){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(gr(t,s.x,r.x,o.x,a.x),gr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xa=class extends un{constructor(t=new I,e=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new I){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(gr(t,s.x,r.x,o.x,a.x),gr(t,s.y,r.y,o.y,a.y),gr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Lr=class extends un{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ya=class extends un{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nr=class extends un{constructor(t=new ht,e=new ht,i=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ht){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(mr(t,s.x,r.x,o.x),mr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_a=class extends un{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(mr(t,s.x,r.x,o.x),mr(t,s.y,r.y,o.y),mr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dr=class extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Pf(a,l.x,c.x,h.x,u.x),Pf(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new ht().fromArray(s))}return this}},Vc=Object.freeze({__proto__:null,ArcCurve:ma,CatmullRomCurve3:ga,CubicBezierCurve:Ir,CubicBezierCurve3:xa,EllipseCurve:Hs,LineCurve:Lr,LineCurve3:ya,QuadraticBezierCurve:Nr,QuadraticBezierCurve3:_a,SplineCurve:Dr}),va=class extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Vc[s.type]().fromJSON(s))}return this}},oi=class extends va{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Lr(this.currentPoint.clone(),new ht(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Nr(this.currentPoint.clone(),new ht(t,e),new ht(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new Ir(this.currentPoint.clone(),new ht(t,e),new ht(i,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Dr(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let c=new Hs(t,e,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ai=class extends oi{constructor(t){super(t),this.uuid=rs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new oi().fromJSON(s))}return this}};function Zg(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=vd(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=t0(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let h=a,u=l;for(let f=e;f<s;f+=e){let d=n[f],g=n[f+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ur(r,o,e,a,l,c,0),o}function vd(n,t,e,i,s){let r;if(s===u0(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=If(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=If(o/i|0,n[o],n[o+1],r);return r&&Gs(r,r.next)&&(Or(r),r=r.next),r}function es(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Gs(e,e.next)||we(e.prev,e,e.next)===0)){if(Or(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ur(n,t,e,i,s,r,o){if(!n)return;!o&&r&&r0(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Jg(n,i,s,r):Kg(n)){t.push(l.i,n.i,c.i),Or(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=jg(es(n),t),Ur(n,t,e,i,s,r,2)):o===2&&Qg(n,t,e,i,s,r):Ur(es(n),t,e,i,s,r,1);break}}}function Kg(n){let t=n.prev,e=n,i=n.next;if(we(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&fr(s,a,r,l,o,c,g.x,g.y)&&we(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Jg(n,t,e,i){let s=n.prev,r=n,o=n.next;if(we(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),g=Math.min(h,u,f),y=Math.max(a,l,c),p=Math.max(h,u,f),m=Hc(d,g,t,e,i),T=Hc(y,p,t,e,i),w=n.prevZ,_=n.nextZ;for(;w&&w.z>=m&&_&&_.z<=T;){if(w.x>=d&&w.x<=y&&w.y>=g&&w.y<=p&&w!==s&&w!==o&&fr(a,h,l,u,c,f,w.x,w.y)&&we(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=d&&_.x<=y&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&fr(a,h,l,u,c,f,_.x,_.y)&&we(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=m;){if(w.x>=d&&w.x<=y&&w.y>=g&&w.y<=p&&w!==s&&w!==o&&fr(a,h,l,u,c,f,w.x,w.y)&&we(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=T;){if(_.x>=d&&_.x<=y&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&fr(a,h,l,u,c,f,_.x,_.y)&&we(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function jg(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Gs(i,s)&&bd(i,e,e.next,s)&&Fr(i,s)&&Fr(s,i)&&(t.push(i.i,e.i,s.i),Or(e),Or(e.next),e=n=s),e=e.next}while(e!==n);return es(e)}function Qg(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&l0(o,a)){let l=Sd(o,a);o=es(o,o.next),l=es(l,l.next),Ur(o,t,e,i,s,r,0),Ur(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function t0(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=vd(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(a0(c))}s.sort(e0);for(let r=0;r<s.length;r++)e=n0(s[r],e);return e}function e0(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function n0(n,t){let e=i0(n,t);if(!e)return t;let i=Sd(e,n);return es(i,i.next),es(e,e.next)}function i0(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(Gs(n,e))return e;do{if(Gs(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Md(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let u=Math.abs(s-e.y)/(i-e.x);Fr(e,n)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&s0(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function s0(n,t){return we(n.prev,n,t.prev)<0&&we(t.next,n,n.next)<0}function r0(n,t,e,i){let s=n;do s.z===0&&(s.z=Hc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,o0(s)}function o0(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function Hc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function a0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Md(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function fr(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&Md(n,t,e,i,s,r,o,a)}function l0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!c0(n,t)&&(Fr(n,t)&&Fr(t,n)&&h0(n,t)&&(we(n.prev,n,t.prev)||we(n,t.prev,t))||Gs(n,t)&&we(n.prev,n,n.next)>0&&we(t.prev,t,t.next)>0)}function we(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Gs(n,t){return n.x===t.x&&n.y===t.y}function bd(n,t,e,i){let s=Yo(we(n,t,e)),r=Yo(we(n,t,i)),o=Yo(we(e,i,n)),a=Yo(we(e,i,t));return!!(s!==r&&o!==a||s===0&&qo(n,e,t)||r===0&&qo(n,i,t)||o===0&&qo(e,n,i)||a===0&&qo(e,t,i))}function qo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Yo(n){return n>0?1:n<0?-1:0}function c0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&bd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Fr(n,t){return we(n.prev,n,n.next)<0?we(n,t,n.next)>=0&&we(n,n.prev,t)>=0:we(n,t,n.prev)<0||we(n,n.next,t)<0}function h0(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Sd(n,t){let e=Gc(n.i,n.x,n.y),i=Gc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function If(n,t,e,i){let s=Gc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Or(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Gc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function u0(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var $c=class{static triangulate(t,e,i=2){return Zg(t,e,i)}},Zi=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Lf(t),Nf(i,t);let o=t.length;e.forEach(Lf);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Nf(i,e[l]);let a=$c.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Lf(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Nf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Pi=class n extends Fe{constructor(t=new ai([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ye(s,3)),this.setAttribute("uv",new ye(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:f0,w,_=!1,v,S,b,x;if(m){w=m.getSpacedPoints(h),_=!0,f=!1;let Q=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(h,Q),S=new I,b=new I,x=new I}f||(p=0,d=0,g=0,y=0);let A=a.extractPoints(c),R=A.shape,P=A.holes;if(!Zi.isClockWise(R)){R=R.reverse();for(let Q=0,it=P.length;Q<it;Q++){let st=P[Q];Zi.isClockWise(st)&&(P[Q]=st.reverse())}}function k(Q){let st=10000000000000001e-36,yt=Q[0];for(let _t=1;_t<=Q.length;_t++){let kt=_t%Q.length,Lt=Q[kt],Gt=Lt.x-yt.x,Zt=Lt.y-yt.y,D=Gt*Gt+Zt*Zt,le=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(yt.x),Math.abs(yt.y)),jt=st*le*le;if(D<=jt){Q.splice(kt,1),_t--;continue}yt=Lt}}k(R),P.forEach(k);let z=P.length,N=R;for(let Q=0;Q<z;Q++){let it=P[Q];R=R.concat(it)}function V(Q,it,st){return it||Yt("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(it,st)}let F=R.length;function X(Q,it,st){let yt,_t,kt,Lt=Q.x-it.x,Gt=Q.y-it.y,Zt=st.x-Q.x,D=st.y-Q.y,le=Lt*Lt+Gt*Gt,jt=Lt*D-Gt*Zt;if(Math.abs(jt)>Number.EPSILON){let C=Math.sqrt(le),M=Math.sqrt(Zt*Zt+D*D),B=it.x-Gt/C,G=it.y+Lt/C,Y=st.x-D/M,dt=st.y+Zt/M,mt=((Y-B)*D-(dt-G)*Zt)/(Lt*D-Gt*Zt);yt=B+Lt*mt-Q.x,_t=G+Gt*mt-Q.y;let Z=yt*yt+_t*_t;if(Z<=2)return new ht(yt,_t);kt=Math.sqrt(Z/2)}else{let C=!1;Lt>Number.EPSILON?Zt>Number.EPSILON&&(C=!0):Lt<-Number.EPSILON?Zt<-Number.EPSILON&&(C=!0):Math.sign(Gt)===Math.sign(D)&&(C=!0),C?(yt=-Gt,_t=Lt,kt=Math.sqrt(le)):(yt=Lt,_t=Gt,kt=Math.sqrt(le/2))}return new ht(yt/kt,_t/kt)}let J=[];for(let Q=0,it=N.length,st=it-1,yt=Q+1;Q<it;Q++,st++,yt++)st===it&&(st=0),yt===it&&(yt=0),J[Q]=X(N[Q],N[st],N[yt]);let lt=[],rt,nt=J.concat();for(let Q=0,it=z;Q<it;Q++){let st=P[Q];rt=[];for(let yt=0,_t=st.length,kt=_t-1,Lt=yt+1;yt<_t;yt++,kt++,Lt++)kt===_t&&(kt=0),Lt===_t&&(Lt=0),rt[yt]=X(st[yt],st[kt],st[Lt]);lt.push(rt),nt=nt.concat(rt)}let ft;if(p===0)ft=Zi.triangulateShape(N,P);else{let Q=[],it=[];for(let st=0;st<p;st++){let yt=st/p,_t=d*Math.cos(yt*Math.PI/2),kt=g*Math.sin(yt*Math.PI/2)+y;for(let Lt=0,Gt=N.length;Lt<Gt;Lt++){let Zt=V(N[Lt],J[Lt],kt);gt(Zt.x,Zt.y,-_t),yt===0&&Q.push(Zt)}for(let Lt=0,Gt=z;Lt<Gt;Lt++){let Zt=P[Lt];rt=lt[Lt];let D=[];for(let le=0,jt=Zt.length;le<jt;le++){let C=V(Zt[le],rt[le],kt);gt(C.x,C.y,-_t),yt===0&&D.push(C)}yt===0&&it.push(D)}}ft=Zi.triangulateShape(Q,it)}let ut=ft.length,pt=g+y;for(let Q=0;Q<F;Q++){let it=f?V(R[Q],nt[Q],pt):R[Q];_?(b.copy(v.normals[0]).multiplyScalar(it.x),S.copy(v.binormals[0]).multiplyScalar(it.y),x.copy(w[0]).add(b).add(S),gt(x.x,x.y,x.z)):gt(it.x,it.y,0)}for(let Q=1;Q<=h;Q++)for(let it=0;it<F;it++){let st=f?V(R[it],nt[it],pt):R[it];_?(b.copy(v.normals[Q]).multiplyScalar(st.x),S.copy(v.binormals[Q]).multiplyScalar(st.y),x.copy(w[Q]).add(b).add(S),gt(x.x,x.y,x.z)):gt(st.x,st.y,u/h*Q)}for(let Q=p-1;Q>=0;Q--){let it=Q/p,st=d*Math.cos(it*Math.PI/2),yt=g*Math.sin(it*Math.PI/2)+y;for(let _t=0,kt=N.length;_t<kt;_t++){let Lt=V(N[_t],J[_t],yt);gt(Lt.x,Lt.y,u+st)}for(let _t=0,kt=P.length;_t<kt;_t++){let Lt=P[_t];rt=lt[_t];for(let Gt=0,Zt=Lt.length;Gt<Zt;Gt++){let D=V(Lt[Gt],rt[Gt],yt);_?gt(D.x,D.y+w[h-1].y,w[h-1].x+st):gt(D.x,D.y,u+st)}}}H(),K();function H(){let Q=s.length/3;if(f){let it=0,st=F*it;for(let yt=0;yt<ut;yt++){let _t=ft[yt];Et(_t[2]+st,_t[1]+st,_t[0]+st)}it=h+p*2,st=F*it;for(let yt=0;yt<ut;yt++){let _t=ft[yt];Et(_t[0]+st,_t[1]+st,_t[2]+st)}}else{for(let it=0;it<ut;it++){let st=ft[it];Et(st[2],st[1],st[0])}for(let it=0;it<ut;it++){let st=ft[it];Et(st[0]+F*h,st[1]+F*h,st[2]+F*h)}}i.addGroup(Q,s.length/3-Q,0)}function K(){let Q=s.length/3,it=0;j(N,it),it+=N.length;for(let st=0,yt=P.length;st<yt;st++){let _t=P[st];j(_t,it),it+=_t.length}i.addGroup(Q,s.length/3-Q,1)}function j(Q,it){let st=Q.length;for(;--st>=0;){let yt=st,_t=st-1;_t<0&&(_t=Q.length-1);for(let kt=0,Lt=h+p*2;kt<Lt;kt++){let Gt=F*kt,Zt=F*(kt+1),D=it+yt+Gt,le=it+_t+Gt,jt=it+_t+Zt,C=it+yt+Zt;Pt(D,le,jt,C)}}}function gt(Q,it,st){l.push(Q),l.push(it),l.push(st)}function Et(Q,it,st){Wt(Q),Wt(it),Wt(st);let yt=s.length/3,_t=T.generateTopUV(i,s,yt-3,yt-2,yt-1);xt(_t[0]),xt(_t[1]),xt(_t[2])}function Pt(Q,it,st,yt){Wt(Q),Wt(it),Wt(yt),Wt(it),Wt(st),Wt(yt);let _t=s.length/3,kt=T.generateSideWallUV(i,s,_t-6,_t-3,_t-2,_t-1);xt(kt[0]),xt(kt[1]),xt(kt[3]),xt(kt[1]),xt(kt[2]),xt(kt[3])}function Wt(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function xt(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return d0(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Vc[s.type]().fromJSON(s)),new n(i,t.options)}},f0={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new ht(r,o),new ht(a,l),new ht(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],y=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ht(o,1-l),new ht(c,1-u),new ht(f,1-g),new ht(y,1-m)]:[new ht(a,1-l),new ht(h,1-u),new ht(d,1-g),new ht(p,1-m)]}};function d0(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Br=class n extends Fe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let T=m*f-o;for(let w=0;w<c;w++){let _=w*u-r;g.push(_,-T,0),y.push(0,0,1),p.push(w/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<a;T++){let w=T+c*m,_=T+c*(m+1),v=T+1+c*(m+1),S=T+1+c*m;d.push(w,_,S),d.push(_,v,S)}this.setIndex(d),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(y,3)),this.setAttribute("uv",new ye(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var kr=class extends Ln{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Bt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function os(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Df(s))s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Df(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Ze(n){let t={};for(let e=0;e<n.length;e++){let i=os(n[e]);for(let s in i)t[s]=i[s]}return t}function Df(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function p0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function gh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var wd={clone:os,merge:Ze},m0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends Ln{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m0,this.fragmentShader=g0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=p0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Bt().setHex(s.value);break;case"v2":this.uniforms[i].value=new ht().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new be().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Xt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new he().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ma=class extends fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},bn=class extends Ln{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=io,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var zr=class extends Ln{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=io,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Ba,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ba=class extends Ln{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Sa=class extends Ln{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Zo(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}var Ii=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break e}o=e.length;break n}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break e}o=i,i=0;break n}break t}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wa=class extends Ii{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fc,endingEnd:Fc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Oc:r=t,a=2*e-i;break;case Bc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Oc:o=t,l=2*i-e;break;case Bc:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),y=g*g,p=y*g,m=-f*p+2*f*y-f*g,T=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*g+1,w=(-1-d)*p+(1.5+d)*y+.5*g,_=d*p-d*y;for(let v=0;v!==a;++v)r[v]=m*o[h+v]+T*o[c+v]+w*o[l+v]+_*o[u+v];return r}},Ta=class extends Ii{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Ea=class extends Ii{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Aa=class extends Ii{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-e)/(s-e),y=1-g;for(let p=0;p!==a;++p)r[p]=o[c+p]*y+o[l+p]*g;return r}let f=a*2,d=t-1;for(let g=0;g!==a;++g){let y=o[c+g],p=o[l+g],m=d*f+g*2,T=u[m],w=u[m+1],_=t*f+g*2,v=h[_],S=h[_+1],b=(i-e)/(s-e),x,A,R,P,L;for(let k=0;k<8;k++){x=b*b,A=x*b,R=1-b,P=R*R,L=P*R;let N=L*e+3*P*b*T+3*R*x*v+A*s-i;if(Math.abs(N)<1e-10)break;let V=3*P*(T-e)+6*R*b*(v-T)+3*x*(s-v);if(Math.abs(V)<1e-10)break;b=b-N/V,b=Math.max(0,Math.min(1,b))}r[g]=L*y+3*P*b*w+3*R*x*S+A*p}return r}},dn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zo(e,this.TimeBufferType),this.values=Zo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Zo(t.times,Array),values:Zo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Aa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Qi:e=this.InterpolantFactoryMethodDiscrete;break;case Ds:e=this.InterpolantFactoryMethodLinear;break;case jo:e=this.InterpolantFactoryMethodSmooth;break;case Uc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ht("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qi;case this.InterpolantFactoryMethodLinear:return Ds;case this.InterpolantFactoryMethodSmooth:return jo;case this.InterpolantFactoryMethodBezier:return Uc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Yt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&og(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===jo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let y=e[u+g];if(y!==e[f+g]||y!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=Ds;var Li=class extends dn{constructor(t,e,i){super(t,e,i)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Qi;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends dn{constructor(t,e,i,s){super(t,e,i,s)}};Ca.prototype.ValueTypeName="color";var Ra=class extends dn{constructor(t,e,i,s){super(t,e,i,s)}};Ra.prototype.ValueTypeName="number";var Pa=class extends Ii{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Qe.slerpFlat(r,0,o,c-a,o,c,l);return r}},Vr=class extends dn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Pa(this.times,this.values,this.getValueSize(),t)}};Vr.prototype.ValueTypeName="quaternion";Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends dn{constructor(t,e,i){super(t,e,i)}};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Qi;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends dn{constructor(t,e,i,s){super(t,e,i,s)}};Ia.prototype.ValueTypeName="vector";var La=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Td=new La,Na=class{constructor(t){this.manager=t!==void 0?t:Td,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Na.DEFAULT_MATERIAL_NAME="__DEFAULT";var ns=class extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Hr=class extends ns{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Dc=new he,Uf=new I,Ff=new I,Da=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vs,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Uf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uf),Ff.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ff),e.updateMatrixWorld(),Dc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dc,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Us||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ko=new I,Jo=new Qe,kn=new I,Gr=class extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ko,Jo,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ko,Jo,kn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ko,Jo,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ko,Jo,kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ei=new I,Of=new ht,Bf=new ht,He=class extends Gr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,Of,Bf),e.subVectors(Bf,Of)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(dr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Wc=class extends Da{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0}},$r=class extends ns{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Wc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},$s=class extends Gr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Xc=class extends Da{constructor(){super(new $s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ws=class extends ns{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new Xc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Wr=class extends ns{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Cs=-90,Rs=1,Ua=class extends Ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new He(Cs,Rs,t,e);s.layers=this.layers,this.add(s);let r=new He(Cs,Rs,t,e);r.layers=this.layers,this.add(r);let o=new He(Cs,Rs,t,e);o.layers=this.layers,this.add(o);let a=new He(Cs,Rs,t,e);a.layers=this.layers,this.add(a);let l=new He(Cs,Rs,t,e);l.layers=this.layers,this.add(l);let c=new He(Cs,Rs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Us)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Fa=class extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var xh="\\[\\]\\.:\\/",x0=new RegExp("["+xh+"]","g"),yh="[^"+xh+"]",y0="[^"+xh.replace("\\.","")+"]",_0=/((?:WC+[\/:])*)/.source.replace("WC",yh),v0=/(WCOD+)?/.source.replace("WCOD",y0),M0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yh),b0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yh),S0=new RegExp("^"+_0+v0+M0+b0+"$"),w0=["material","materials","bones","map"],qc=class{constructor(t,e,i){let s=i||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},oe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(x0,"")}static parseTrackName(t){let e=S0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);w0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=qc;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qb=new Float32Array(1);var Xs=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Yc=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};var Xr=class extends da{constructor(t=10,e=10,i=4473924,s=8947848){i=new Bt(i),s=new Bt(s);let r=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,d=0,g=-a;f<=e;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let y=f===r?i:s;y.toArray(c,d),d+=3,y.toArray(c,d),d+=3,y.toArray(c,d),d+=3,y.toArray(c,d),d+=3}let h=new Fe;h.setAttribute("position",new ye(l,3)),h.setAttribute("color",new ye(c,3));let u=new Ar({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var qr=class extends In{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Ht("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function _h(n,t,e,i){let s=T0(i);switch(e){case hh:return n*t;case Wa:return n*t/s.components*s.byteLength;case Xa:return n*t/s.components*s.byteLength;case Bi:return n*t*2/s.components*s.byteLength;case qa:return n*t*2/s.components*s.byteLength;case uh:return n*t*3/s.components*s.byteLength;case sn:return n*t*4/s.components*s.byteLength;case Ya:return n*t*4/s.components*s.byteLength;case Jr:case jr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Qr:case to:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ka:case ja:return Math.max(n,16)*Math.max(t,8)/4;case Za:case Ja:return Math.max(n,8)*Math.max(t,8)/2;case Qa:case tl:case nl:case il:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case el:case eo:case sl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ol:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case al:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ll:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case cl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case hl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ul:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case fl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case dl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case pl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ml:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case gl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case xl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case yl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case _l:case vl:case Ml:return Math.ceil(n/4)*Math.ceil(t/4)*16;case bl:case Sl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case no:case wl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function T0(n){switch(n){case nn:case oh:return{byteLength:1,components:1};case Zs:case ah:case Wn:return{byteLength:2,components:1};case Ga:case $a:return{byteLength:2,components:4};case Dn:case Ha:case Sn:return{byteLength:4,components:1};case lh:case ch:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Yd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function A0(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],y=u[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,u[f]=y)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let y=u[d];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var C0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,P0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,N0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,U0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,O0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,k0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,V0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,H0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,J0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,j0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Q0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",rx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ox=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ax=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ux=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,px=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_x=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,vx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ex=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ax=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Px=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ix=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ux=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$x=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ty=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ey=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ny=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,sy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ry=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ay=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ly=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,uy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,py=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,my=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_y=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,My=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,by=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ay=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ry=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ny=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Uy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Oy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,By=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ky=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$y=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ky=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,i_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:C0,alphahash_pars_fragment:R0,alphamap_fragment:P0,alphamap_pars_fragment:I0,alphatest_fragment:L0,alphatest_pars_fragment:N0,aomap_fragment:D0,aomap_pars_fragment:U0,batching_pars_vertex:F0,batching_vertex:O0,begin_vertex:B0,beginnormal_vertex:k0,bsdfs:z0,iridescence_fragment:V0,bumpmap_pars_fragment:H0,clipping_planes_fragment:G0,clipping_planes_pars_fragment:$0,clipping_planes_pars_vertex:W0,clipping_planes_vertex:X0,color_fragment:q0,color_pars_fragment:Y0,color_pars_vertex:Z0,color_vertex:K0,common:J0,cube_uv_reflection_fragment:j0,defaultnormal_vertex:Q0,displacementmap_pars_vertex:tx,displacementmap_vertex:ex,emissivemap_fragment:nx,emissivemap_pars_fragment:ix,colorspace_fragment:sx,colorspace_pars_fragment:rx,envmap_fragment:ox,envmap_common_pars_fragment:ax,envmap_pars_fragment:lx,envmap_pars_vertex:cx,envmap_physical_pars_fragment:vx,envmap_vertex:hx,fog_vertex:ux,fog_pars_vertex:fx,fog_fragment:dx,fog_pars_fragment:px,gradientmap_pars_fragment:mx,lightmap_pars_fragment:gx,lights_lambert_fragment:xx,lights_lambert_pars_fragment:yx,lights_pars_begin:_x,lights_toon_fragment:Mx,lights_toon_pars_fragment:bx,lights_phong_fragment:Sx,lights_phong_pars_fragment:wx,lights_physical_fragment:Tx,lights_physical_pars_fragment:Ex,lights_fragment_begin:Ax,lights_fragment_maps:Cx,lights_fragment_end:Rx,lightprobes_pars_fragment:Px,logdepthbuf_fragment:Ix,logdepthbuf_pars_fragment:Lx,logdepthbuf_pars_vertex:Nx,logdepthbuf_vertex:Dx,map_fragment:Ux,map_pars_fragment:Fx,map_particle_fragment:Ox,map_particle_pars_fragment:Bx,metalnessmap_fragment:kx,metalnessmap_pars_fragment:zx,morphinstance_vertex:Vx,morphcolor_vertex:Hx,morphnormal_vertex:Gx,morphtarget_pars_vertex:$x,morphtarget_vertex:Wx,normal_fragment_begin:Xx,normal_fragment_maps:qx,normal_pars_fragment:Yx,normal_pars_vertex:Zx,normal_vertex:Kx,normalmap_pars_fragment:Jx,clearcoat_normal_fragment_begin:jx,clearcoat_normal_fragment_maps:Qx,clearcoat_pars_fragment:ty,iridescence_pars_fragment:ey,opaque_fragment:ny,packing:iy,premultiplied_alpha_fragment:sy,project_vertex:ry,dithering_fragment:oy,dithering_pars_fragment:ay,roughnessmap_fragment:ly,roughnessmap_pars_fragment:cy,shadowmap_pars_fragment:hy,shadowmap_pars_vertex:uy,shadowmap_vertex:fy,shadowmask_pars_fragment:dy,skinbase_vertex:py,skinning_pars_vertex:my,skinning_vertex:gy,skinnormal_vertex:xy,specularmap_fragment:yy,specularmap_pars_fragment:_y,tonemapping_fragment:vy,tonemapping_pars_fragment:My,transmission_fragment:by,transmission_pars_fragment:Sy,uv_pars_fragment:wy,uv_pars_vertex:Ty,uv_vertex:Ey,worldpos_vertex:Ay,background_vert:Cy,background_frag:Ry,backgroundCube_vert:Py,backgroundCube_frag:Iy,cube_vert:Ly,cube_frag:Ny,depth_vert:Dy,depth_frag:Uy,distance_vert:Fy,distance_frag:Oy,equirect_vert:By,equirect_frag:ky,linedashed_vert:zy,linedashed_frag:Vy,meshbasic_vert:Hy,meshbasic_frag:Gy,meshlambert_vert:$y,meshlambert_frag:Wy,meshmatcap_vert:Xy,meshmatcap_frag:qy,meshnormal_vert:Yy,meshnormal_frag:Zy,meshphong_vert:Ky,meshphong_frag:Jy,meshphysical_vert:jy,meshphysical_frag:Qy,meshtoon_vert:t_,meshtoon_frag:e_,points_vert:n_,points_frag:i_,shadow_vert:s_,shadow_frag:r_,sprite_vert:o_,sprite_frag:a_},Tt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},qn={basic:{uniforms:Ze([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Ze([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Ze([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Ze([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Ze([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Ze([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Ze([Tt.points,Tt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Ze([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Ze([Tt.common,Tt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Ze([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Ze([Tt.sprite,Tt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:Ze([Tt.common,Tt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:Ze([Tt.lights,Tt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};qn.physical={uniforms:Ze([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Al={r:0,b:0,g:0},l_=new he,Zd=new Xt;Zd.set(-1,0,0,0,1,0,0,0,1);function c_(n,t,e,i,s,r){let o=new Bt(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(T){let w=T.isScene===!0?T.background:null;if(w&&w.isTexture){let _=T.backgroundBlurriness>0;w=t.get(w,_)}return w}function g(T){let w=!1,_=d(T);_===null?p(o,a):_&&_.isColor&&(p(_,1),w=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(T,w){let _=d(w);_&&(_.isCubeTexture||_.mapping===Kr)?(c===void 0&&(c=new ae(new ri(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:os(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,S,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(l_.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zd),c.material.toneMapped=ne.getTransfer(_.colorSpace)!==fe,(h!==_||u!==_.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,f=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ae(new Br(2,2),new fn({name:"BackgroundMaterial",uniforms:os(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ne.getTransfer(_.colorSpace)!==fe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,f=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,w){T.getRGB(Al,gh(n)),e.buffers.color.setClear(Al.r,Al.g,Al.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,w=1){o.set(T),a=w,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(T){a=T,p(o,a)},render:g,addToRenderList:y,dispose:m}}function h_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(P,L,k,z,N){let V=!1,F=u(P,z,k,L);r!==F&&(r=F,c(r.object)),V=d(P,z,k,N),V&&g(P,z,k,N),N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,_(P,L,k,z),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function u(P,L,k,z){let N=z.wireframe===!0,V=i[L.id];V===void 0&&(V={},i[L.id]=V);let F=P.isInstancedMesh===!0?P.id:0,X=V[F];X===void 0&&(X={},V[F]=X);let J=X[k.id];J===void 0&&(J={},X[k.id]=J);let lt=J[N];return lt===void 0&&(lt=f(l()),J[N]=lt),lt}function f(P){let L=[],k=[],z=[];for(let N=0;N<e;N++)L[N]=0,k[N]=0,z[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:z,object:P,attributes:{},index:null}}function d(P,L,k,z){let N=r.attributes,V=L.attributes,F=0,X=k.getAttributes();for(let J in X)if(X[J].location>=0){let rt=N[J],nt=V[J];if(nt===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(nt=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(nt=P.instanceColor)),rt===void 0||rt.attribute!==nt||nt&&rt.data!==nt.data)return!0;F++}return r.attributesNum!==F||r.index!==z}function g(P,L,k,z){let N={},V=L.attributes,F=0,X=k.getAttributes();for(let J in X)if(X[J].location>=0){let rt=V[J];rt===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(rt=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(rt=P.instanceColor));let nt={};nt.attribute=rt,rt&&rt.data&&(nt.data=rt.data),N[J]=nt,F++}r.attributes=N,r.attributesNum=F,r.index=z}function y(){let P=r.newAttributes;for(let L=0,k=P.length;L<k;L++)P[L]=0}function p(P){m(P,0)}function m(P,L){let k=r.newAttributes,z=r.enabledAttributes,N=r.attributeDivisors;k[P]=1,z[P]===0&&(n.enableVertexAttribArray(P),z[P]=1),N[P]!==L&&(n.vertexAttribDivisor(P,L),N[P]=L)}function T(){let P=r.newAttributes,L=r.enabledAttributes;for(let k=0,z=L.length;k<z;k++)L[k]!==P[k]&&(n.disableVertexAttribArray(k),L[k]=0)}function w(P,L,k,z,N,V,F){F===!0?n.vertexAttribIPointer(P,L,k,N,V):n.vertexAttribPointer(P,L,k,z,N,V)}function _(P,L,k,z){y();let N=z.attributes,V=k.getAttributes(),F=L.defaultAttributeValues;for(let X in V){let J=V[X];if(J.location>=0){let lt=N[X];if(lt===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(lt=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(lt=P.instanceColor)),lt!==void 0){let rt=lt.normalized,nt=lt.itemSize,ft=t.get(lt);if(ft===void 0)continue;let ut=ft.buffer,pt=ft.type,H=ft.bytesPerElement,K=pt===n.INT||pt===n.UNSIGNED_INT||lt.gpuType===Ha;if(lt.isInterleavedBufferAttribute){let j=lt.data,gt=j.stride,Et=lt.offset;if(j.isInstancedInterleavedBuffer){for(let Pt=0;Pt<J.locationSize;Pt++)m(J.location+Pt,j.meshPerAttribute);P.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Pt=0;Pt<J.locationSize;Pt++)p(J.location+Pt);n.bindBuffer(n.ARRAY_BUFFER,ut);for(let Pt=0;Pt<J.locationSize;Pt++)w(J.location+Pt,nt/J.locationSize,pt,rt,gt*H,(Et+nt/J.locationSize*Pt)*H,K)}else{if(lt.isInstancedBufferAttribute){for(let j=0;j<J.locationSize;j++)m(J.location+j,lt.meshPerAttribute);P.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let j=0;j<J.locationSize;j++)p(J.location+j);n.bindBuffer(n.ARRAY_BUFFER,ut);for(let j=0;j<J.locationSize;j++)w(J.location+j,nt/J.locationSize,pt,rt,nt*H,nt/J.locationSize*j*H,K)}}else if(F!==void 0){let rt=F[X];if(rt!==void 0)switch(rt.length){case 2:n.vertexAttrib2fv(J.location,rt);break;case 3:n.vertexAttrib3fv(J.location,rt);break;case 4:n.vertexAttrib4fv(J.location,rt);break;default:n.vertexAttrib1fv(J.location,rt)}}}}T()}function v(){A();for(let P in i){let L=i[P];for(let k in L){let z=L[k];for(let N in z){let V=z[N];for(let F in V)h(V[F].object),delete V[F];delete z[N]}}delete i[P]}}function S(P){if(i[P.id]===void 0)return;let L=i[P.id];for(let k in L){let z=L[k];for(let N in z){let V=z[N];for(let F in V)h(V[F].object),delete V[F];delete z[N]}}delete i[P.id]}function b(P){for(let L in i){let k=i[L];for(let z in k){let N=k[z];if(N[P.id]===void 0)continue;let V=N[P.id];for(let F in V)h(V[F].object),delete V[F];delete N[P.id]}}}function x(P){for(let L in i){let k=i[L],z=P.isInstancedMesh===!0?P.id:0,N=k[z];if(N!==void 0){for(let V in N){let F=N[V];for(let X in F)h(F[X].object),delete F[X];delete N[V]}delete k[z],Object.keys(k).length===0&&delete i[L]}}}function A(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:R,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:b,initAttributes:y,enableAttribute:p,disableUnusedAttributes:T}}function u_(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function f_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==sn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let x=b===Wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==nn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Sn&&!x)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:_,maxSamples:v,samples:S}}function d_(n){let t=this,e=null,i=0,s=!1,r=!1,o=new vn,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let T=r?0:i,w=T*4,_=m.clippingState||null;l.value=_,_=h(g,f,w,d);for(let v=0;v!==w;++v)_[v]=e[v];m.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let m=d+y*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,_=d;w!==y;++w,_+=4)o.copy(u[w]).applyMatrix4(T,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var ki=4,Ed=[.125,.215,.35,.446,.526,.582],as=20,p_=256,so=new $s,Ad=new Bt,vh=null,Mh=0,bh=0,Sh=!1,m_=new I,Qs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=m_}=r;vh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vh,Mh,bh),this._renderer.xr.enabled=Sh,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fi||t.mapping===is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:De,minFilter:De,generateMipmaps:!1,type:Wn,format:sn,colorSpace:xr,depthBuffer:!1},s=Cd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cd(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=g_(r)),this._blurMaterial=y_(r,t,e),this._ggxMaterial=x_(r,t,e)}return s}_compileMaterial(t){let e=new ae(new Fe,t);this._renderer.compile(e,so)}_sceneToCubeUV(t,e,i,s,r){let l=new He(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Ad),u.toneMapping=Nn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ae(new ri,new zs({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,m=!1,T=t.background;T?T.isColor&&(p.color.copy(T),t.background=null,m=!0):(p.color.copy(Ad),m=!0);for(let w=0;w<6;w++){let _=w%3;_===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):_===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let v=this._cubeSize;Js(s,_*v,w>2?v:0,v,v),u.setRenderTarget(s),m&&u.render(y,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=T}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Fi||t.mapping===is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Js(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,so)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,d=u*f,{_lodMax:g}=this,y=this._sizeLods[i],p=3*y*(i>g-ki?i-g+ki:0),m=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Js(r,p,m,3*y,2*y),s.setRenderTarget(r),s.render(a,so),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Js(t,p,m,3*y,2*y),s.setRenderTarget(t),s.render(a,so)}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Yt("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[s];u.material=c;let f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*as-1),y=r/g,p=isFinite(r)?1+Math.floor(h*y):as;p>as&&Ht(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${as}`);let m=[],T=0;for(let b=0;b<as;++b){let x=b/y,A=Math.exp(-x*x/2);m.push(A),b===0?T+=A:b<p&&(T+=2*A)}for(let b=0;b<m.length;b++)m[b]=m[b]/T;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-i;let _=this._sizeLods[s],v=3*_*(s>w-ki?s-w+ki:0),S=4*(this._cubeSize-_);Js(e,v,S,3*_,2*_),l.setRenderTarget(e),l.render(u,so)}};function g_(n){let t=[],e=[],i=[],s=n,r=n-ki+1+Ed.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ki?l=Ed[o-n+ki-1]:o===0&&(l=0),e.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,y=3,p=2,m=1,T=new Float32Array(y*g*d),w=new Float32Array(p*g*d),_=new Float32Array(m*g*d);for(let S=0;S<d;S++){let b=S%3*2/3-1,x=S>2?0:-1,A=[b,x,0,b+2/3,x,0,b+2/3,x+1,0,b,x,0,b+2/3,x+1,0,b,x+1,0];T.set(A,y*g*S),w.set(f,p*g*S);let R=[S,S,S,S,S,S];_.set(R,m*g*S)}let v=new Fe;v.setAttribute("position",new Te(T,y)),v.setAttribute("uv",new Te(w,p)),v.setAttribute("faceIndex",new Te(_,m)),i.push(new ae(v,null)),s>ki&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Cd(n,t,e){let i=new hn(n,t,e);return i.texture.mapping=Kr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Js(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function x_(n,t,e){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:p_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Il(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function y_(n,t,e){let i=new Float32Array(as),s=new I(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Rd(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Pd(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Il(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Rl=class extends hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Cr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ri(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ve,blending:Gn});r.uniforms.tEquirect.value=e;let o=new ae(s,r),a=e.minFilter;return e.minFilter===$n&&(e.minFilter=De),new Ua(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function __(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===ka||d===za)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let y=new Rl(g.height);return y.fromEquirectangularTexture(n,f),t.set(f,y),f.addEventListener("dispose",c),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,g=d===ka||d===za,y=d===Fi||d===is;if(g||y){let p=e.get(f),m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new Qs(n)),p=g?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let T=f.image;return g&&T&&T.height>0||y&&T&&l(T)?(i===null&&(i=new Qs(n)),p=g?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function a(f,d){return d===ka?f.mapping=Fi:d===za&&(f.mapping=is),f}function l(f){let d=0,g=6;for(let y=0;y<g;y++)f[y]!==void 0&&d++;return d===g}function c(f){let d=f.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function v_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ki("WebGLRenderer: "+i+" extension not supported."),s}}}function M_(n,t,e,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],n.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,g=u.attributes.position,y=0;if(g===void 0)return;if(d!==null){let T=d.array;y=d.version;for(let w=0,_=T.length;w<_;w+=3){let v=T[w+0],S=T[w+1],b=T[w+2];f.push(v,S,S,b,b,v)}}else{let T=g.array;y=g.version;for(let w=0,_=T.length/3-1;w<_;w+=3){let v=w+0,S=w+1,b=w+2;f.push(v,S,S,b,b,v)}}let p=new(g.count>=65535?Sr:br)(f,1);p.version=y;let m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function b_(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*o),e.update(f,i,1)}function c(u,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,u*o,d),e.update(f,i,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,d);let y=0;for(let p=0;p<d;p++)y+=f[p];e.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function S_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Yt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function w_(n,t,e){let i=new WeakMap,s=new be;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let A=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],w=0;d===!0&&(w=1),g===!0&&(w=2),y===!0&&(w=3);let _=a.attributes.position.count*w,v=1;_>t.maxTextureSize&&(v=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let S=new Float32Array(_*v*4*u),b=new vr(S,_,v,u);b.type=Sn,b.needsUpdate=!0;let x=w*4;for(let R=0;R<u;R++){let P=p[R],L=m[R],k=T[R],z=_*v*4*R;for(let N=0;N<P.count;N++){let V=N*x;d===!0&&(s.fromBufferAttribute(P,N),S[z+V+0]=s.x,S[z+V+1]=s.y,S[z+V+2]=s.z,S[z+V+3]=0),g===!0&&(s.fromBufferAttribute(L,N),S[z+V+4]=s.x,S[z+V+5]=s.y,S[z+V+6]=s.z,S[z+V+7]=0),y===!0&&(s.fromBufferAttribute(k,N),S[z+V+8]=s.x,S[z+V+9]=s.y,S[z+V+10]=s.z,S[z+V+11]=k.itemSize===4?s.w:1)}}f={count:u,texture:b,size:new ht(_,v)},i.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function T_(n,t,e,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var E_={[Qc]:"LINEAR_TONE_MAPPING",[th]:"REINHARD_TONE_MAPPING",[eh]:"CINEON_TONE_MAPPING",[Zr]:"ACES_FILMIC_TONE_MAPPING",[ih]:"AGX_TONE_MAPPING",[sh]:"NEUTRAL_TONE_MAPPING",[nh]:"CUSTOM_TONE_MAPPING"};function A_(n,t,e,i,s,r){let o=new hn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new si(t,e):void 0}),a=new hn(t,e,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),l=new Fe;l.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ye([0,2,0,0,2,0],2));let c=new Ma({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new ae(l,c),u=new $s(-1,1,1,-1,0,1),f=null,d=null,g=!1,y,p=null,m=[],T=!1;this.setSize=function(w,_){o.setSize(w,_),a.setSize(w,_);for(let v=0;v<m.length;v++){let S=m[v];S.setSize&&S.setSize(w,_)}},this.setEffects=function(w){m=w,T=m.length>0&&m[0].isRenderPass===!0;let _=o.width,v=o.height;for(let S=0;S<m.length;S++){let b=m[S];b.setSize&&b.setSize(_,v)}},this.begin=function(w,_){if(g||w.toneMapping===Nn&&m.length===0)return!1;if(p=_,_!==null){let v=_.width,S=_.height;(o.width!==v||o.height!==S)&&this.setSize(v,S)}return T===!1&&w.setRenderTarget(o),y=w.toneMapping,w.toneMapping=Nn,!0},this.hasRenderPass=function(){return T},this.end=function(w,_){w.toneMapping=y,g=!0;let v=o,S=a;for(let b=0;b<m.length;b++){let x=m[b];if(x.enabled!==!1&&(x.render(w,S,v,_),x.needsSwap!==!1)){let A=v;v=S,S=A}}if(f!==w.outputColorSpace||d!==w.toneMapping){f=w.outputColorSpace,d=w.toneMapping,c.defines={},ne.getTransfer(f)===fe&&(c.defines.SRGB_TRANSFER="");let b=E_[d];b&&(c.defines[b]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=v.texture,w.setRenderTarget(p),w.render(h,u),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}var Kd=new tn,Eh=new si(1,1),Jd=new vr,jd=new ca,Qd=new Cr,Id=[],Ld=[],Nd=new Float32Array(16),Dd=new Float32Array(9),Ud=new Float32Array(4);function tr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Id[s];if(r===void 0&&(r=new Float32Array(s),Id[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Oe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ll(n,t){let e=Ld[t];e===void 0&&(e=new Int32Array(t),Ld[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function C_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function R_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2fv(this.addr,t),Be(e,t)}}function P_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;n.uniform3fv(this.addr,t),Be(e,t)}}function I_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4fv(this.addr,t),Be(e,t)}}function L_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;Ud.set(i),n.uniformMatrix2fv(this.addr,!1,Ud),Be(e,i)}}function N_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;Dd.set(i),n.uniformMatrix3fv(this.addr,!1,Dd),Be(e,i)}}function D_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;Nd.set(i),n.uniformMatrix4fv(this.addr,!1,Nd),Be(e,i)}}function U_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function F_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2iv(this.addr,t),Be(e,t)}}function O_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3iv(this.addr,t),Be(e,t)}}function B_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4iv(this.addr,t),Be(e,t)}}function k_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function z_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2uiv(this.addr,t),Be(e,t)}}function V_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3uiv(this.addr,t),Be(e,t)}}function H_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4uiv(this.addr,t),Be(e,t)}}function G_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Eh.compareFunction=e.isReversedDepthBuffer()?El:Tl,r=Eh):r=Kd,e.setTexture2D(t||r,s)}function $_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||jd,s)}function W_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Qd,s)}function X_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Jd,s)}function q_(n){switch(n){case 5126:return C_;case 35664:return R_;case 35665:return P_;case 35666:return I_;case 35674:return L_;case 35675:return N_;case 35676:return D_;case 5124:case 35670:return U_;case 35667:case 35671:return F_;case 35668:case 35672:return O_;case 35669:case 35673:return B_;case 5125:return k_;case 36294:return z_;case 36295:return V_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return G_;case 35679:case 36299:case 36307:return $_;case 35680:case 36300:case 36308:case 36293:return W_;case 36289:case 36303:case 36311:case 36292:return X_}}function Y_(n,t){n.uniform1fv(this.addr,t)}function Z_(n,t){let e=tr(t,this.size,2);n.uniform2fv(this.addr,e)}function K_(n,t){let e=tr(t,this.size,3);n.uniform3fv(this.addr,e)}function J_(n,t){let e=tr(t,this.size,4);n.uniform4fv(this.addr,e)}function j_(n,t){let e=tr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Q_(n,t){let e=tr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function tv(n,t){let e=tr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ev(n,t){n.uniform1iv(this.addr,t)}function nv(n,t){n.uniform2iv(this.addr,t)}function iv(n,t){n.uniform3iv(this.addr,t)}function sv(n,t){n.uniform4iv(this.addr,t)}function rv(n,t){n.uniform1uiv(this.addr,t)}function ov(n,t){n.uniform2uiv(this.addr,t)}function av(n,t){n.uniform3uiv(this.addr,t)}function lv(n,t){n.uniform4uiv(this.addr,t)}function cv(n,t,e){let i=this.cache,s=t.length,r=Ll(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Eh:o=Kd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function hv(n,t,e){let i=this.cache,s=t.length,r=Ll(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||jd,r[o])}function uv(n,t,e){let i=this.cache,s=t.length,r=Ll(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Qd,r[o])}function fv(n,t,e){let i=this.cache,s=t.length,r=Ll(e,s);Oe(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Jd,r[o])}function dv(n){switch(n){case 5126:return Y_;case 35664:return Z_;case 35665:return K_;case 35666:return J_;case 35674:return j_;case 35675:return Q_;case 35676:return tv;case 5124:case 35670:return ev;case 35667:case 35671:return nv;case 35668:case 35672:return iv;case 35669:case 35673:return sv;case 5125:return rv;case 36294:return ov;case 36295:return av;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return cv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return uv;case 36289:case 36303:case 36311:case 36292:return fv}}var Ah=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=q_(e.type)}},Ch=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dv(e.type)}},Rh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},wh=/(\w+)(\])?(\[|\.)?/g;function Fd(n,t){n.seq.push(t),n.map[t.id]=t}function pv(n,t,e){let i=n.name,s=i.length;for(wh.lastIndex=0;;){let r=wh.exec(i),o=wh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Fd(e,c===void 0?new Ah(a,n,t):new Ch(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Rh(a),Fd(e,u)),e=u}}}var js=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);pv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Od(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var mv=37297,gv=0;function xv(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Bd=new Xt;function yv(n){ne._getMatrix(Bd,ne.workingColorSpace,n);let t=`mat3( ${Bd.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(n)){case yr:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function kd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+xv(n.getShaderSource(t),a)}else return r}function _v(n,t){let e=yv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var vv={[Qc]:"Linear",[th]:"Reinhard",[eh]:"Cineon",[Zr]:"ACESFilmic",[ih]:"AgX",[sh]:"Neutral",[nh]:"Custom"};function Mv(n,t){let e=vv[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Cl=new I;function bv(){ne.getLuminanceCoefficients(Cl);let n=Cl.x.toFixed(4),t=Cl.y.toFixed(4),e=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function wv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Tv(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function oo(n){return n!==""}function zd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ev=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(n){return n.replace(Ev,Cv)}var Av=new Map;function Cv(n,t){let e=te[t];if(e===void 0){let i=Av.get(t);if(i!==void 0)e=te[i],Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ph(e)}var Rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hd(n){return n.replace(Rv,Pv)}function Pv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Iv={[Yr]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};function Lv(n){return Iv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Nv={[Fi]:"ENVMAP_TYPE_CUBE",[is]:"ENVMAP_TYPE_CUBE",[Kr]:"ENVMAP_TYPE_CUBE_UV"};function Dv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Nv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Uv={[is]:"ENVMAP_MODE_REFRACTION"};function Fv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Uv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ov={[Ba]:"ENVMAP_BLENDING_MULTIPLY",[rd]:"ENVMAP_BLENDING_MIX",[od]:"ENVMAP_BLENDING_ADD"};function Bv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Ov[n.combine]||"ENVMAP_BLENDING_NONE"}function kv(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function zv(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Lv(e),c=Dv(e),h=Fv(e),u=Bv(e),f=kv(e),d=Sv(e),g=wv(r),y=s.createProgram(),p,m,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(oo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(oo).join(`
`),m.length>0&&(m+=`
`)):(p=[Gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),m=[Gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?te.tonemapping_pars_fragment:"",e.toneMapping!==Nn?Mv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,_v("linearToOutputTexel",e.outputColorSpace),bv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(oo).join(`
`)),o=Ph(o),o=zd(o,e),o=Vd(o,e),a=Ph(a),a=zd(a,e),a=Vd(a,e),o=Hd(o),a=Hd(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=T+p+o,_=T+m+a,v=Od(s,s.VERTEX_SHADER,w),S=Od(s,s.FRAGMENT_SHADER,_);s.attachShader(y,v),s.attachShader(y,S),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function b(P){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(y)||"",k=s.getShaderInfoLog(v)||"",z=s.getShaderInfoLog(S)||"",N=L.trim(),V=k.trim(),F=z.trim(),X=!0,J=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,v,S);else{let lt=kd(s,v,"vertex"),rt=kd(s,S,"fragment");Yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+lt+`
`+rt)}else N!==""?Ht("WebGLProgram: Program Info Log:",N):(V===""||F==="")&&(J=!1);J&&(P.diagnostics={runnable:X,programLog:N,vertexShader:{log:V,prefix:p},fragmentShader:{log:F,prefix:m}})}s.deleteShader(v),s.deleteShader(S),x=new js(s,y),A=Tv(s,y)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let A;this.getAttributes=function(){return A===void 0&&b(this),A};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(y,mv)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gv++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=v,this.fragmentShader=S,this}var Vv=0,Ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Lh(t),e.set(t,i)),i}},Lh=class{constructor(t){this.id=Vv++,this.code=t,this.usedTimes=0}};function Hv(n){return n===Bi||n===eo||n===no}function Gv(n,t,e,i,s,r){let o=new Mr,a=new Ih,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,f=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,A,R,P,L,k){let z=P.fog,N=L.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,X=t.get(x.envMap||V,F),J=X&&X.mapping===Kr?X.image.height:null,lt=d[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Ht("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let rt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,nt=rt!==void 0?rt.length:0,ft=0;N.morphAttributes.position!==void 0&&(ft=1),N.morphAttributes.normal!==void 0&&(ft=2),N.morphAttributes.color!==void 0&&(ft=3);let ut,pt,H,K;if(lt){let Dt=qn[lt];ut=Dt.vertexShader,pt=Dt.fragmentShader}else{ut=x.vertexShader,pt=x.fragmentShader;let Dt=a.getVertexShaderStage(x),Ee=a.getFragmentShaderStage(x);a.update(x,Dt,Ee),H=Dt.id,K=Ee.id}let j=n.getRenderTarget(),gt=n.state.buffers.depth.getReversed(),Et=L.isInstancedMesh===!0,Pt=L.isBatchedMesh===!0,Wt=!!x.map,xt=!!x.matcap,Q=!!X,it=!!x.aoMap,st=!!x.lightMap,yt=!!x.bumpMap&&x.wireframe===!1,_t=!!x.normalMap,kt=!!x.displacementMap,Lt=!!x.emissiveMap,Gt=!!x.metalnessMap,Zt=!!x.roughnessMap,D=x.anisotropy>0,le=x.clearcoat>0,jt=x.dispersion>0,C=x.iridescence>0,M=x.sheen>0,B=x.transmission>0,G=D&&!!x.anisotropyMap,Y=le&&!!x.clearcoatMap,dt=le&&!!x.clearcoatNormalMap,mt=le&&!!x.clearcoatRoughnessMap,Z=C&&!!x.iridescenceMap,tt=C&&!!x.iridescenceThicknessMap,vt=M&&!!x.sheenColorMap,Ft=M&&!!x.sheenRoughnessMap,bt=!!x.specularMap,St=!!x.specularColorMap,$t=!!x.specularIntensityMap,qt=B&&!!x.transmissionMap,Kt=B&&!!x.thicknessMap,U=!!x.gradientMap,Mt=!!x.alphaMap,et=x.alphaTest>0,wt=!!x.alphaHash,Rt=!!x.extensions,ot=Nn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ot=n.toneMapping);let Ot={shaderID:lt,shaderType:x.type,shaderName:x.name,vertexShader:ut,fragmentShader:pt,defines:x.defines,customVertexShaderID:H,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Pt,batchingColor:Pt&&L._colorsTexture!==null,instancing:Et,instancingColor:Et&&L.instanceColor!==null,instancingMorph:Et&&L.morphTexture!==null,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Wt,matcap:xt,envMap:Q,envMapMode:Q&&X.mapping,envMapCubeUVHeight:J,aoMap:it,lightMap:st,bumpMap:yt,normalMap:_t,displacementMap:kt,emissiveMap:Lt,normalMapObjectSpace:_t&&x.normalMapType===ld,normalMapTangentSpace:_t&&x.normalMapType===io,packedNormalMap:_t&&x.normalMapType===io&&Hv(x.normalMap.format),metalnessMap:Gt,roughnessMap:Zt,anisotropy:D,anisotropyMap:G,clearcoat:le,clearcoatMap:Y,clearcoatNormalMap:dt,clearcoatRoughnessMap:mt,dispersion:jt,iridescence:C,iridescenceMap:Z,iridescenceThicknessMap:tt,sheen:M,sheenColorMap:vt,sheenRoughnessMap:Ft,specularMap:bt,specularColorMap:St,specularIntensityMap:$t,transmission:B,transmissionMap:qt,thicknessMap:Kt,gradientMap:U,opaque:x.transparent===!1&&x.blending===Ji&&x.alphaToCoverage===!1,alphaMap:Mt,alphaTest:et,alphaHash:wt,combine:x.combine,mapUv:Wt&&g(x.map.channel),aoMapUv:it&&g(x.aoMap.channel),lightMapUv:st&&g(x.lightMap.channel),bumpMapUv:yt&&g(x.bumpMap.channel),normalMapUv:_t&&g(x.normalMap.channel),displacementMapUv:kt&&g(x.displacementMap.channel),emissiveMapUv:Lt&&g(x.emissiveMap.channel),metalnessMapUv:Gt&&g(x.metalnessMap.channel),roughnessMapUv:Zt&&g(x.roughnessMap.channel),anisotropyMapUv:G&&g(x.anisotropyMap.channel),clearcoatMapUv:Y&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:dt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&g(x.sheenRoughnessMap.channel),specularMapUv:bt&&g(x.specularMap.channel),specularColorMapUv:St&&g(x.specularColorMap.channel),specularIntensityMapUv:$t&&g(x.specularIntensityMap.channel),transmissionMapUv:qt&&g(x.transmissionMap.channel),thicknessMapUv:Kt&&g(x.thicknessMap.channel),alphaMapUv:Mt&&g(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(_t||D),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(Wt||Mt),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&_t===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:gt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:ft,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,decodeVideoTexture:Wt&&x.map.isVideoTexture===!0&&ne.getTransfer(x.map.colorSpace)===fe,decodeVideoTextureEmissive:Lt&&x.emissiveMap.isVideoTexture===!0&&ne.getTransfer(x.emissiveMap.colorSpace)===fe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===en,flipSided:x.side===Ve,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Rt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&x.extensions.multiDraw===!0||Pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ot.vertexUv1s=l.has(1),Ot.vertexUv2s=l.has(2),Ot.vertexUv3s=l.has(3),l.clear(),Ot}function p(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)A.push(R),A.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(A,x),T(A,x),A.push(n.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function m(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function T(x,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function w(x){let A=d[x.type],R;if(A){let P=qn[A];R=wd.clone(P.uniforms)}else R=x.uniforms;return R}function _(x,A){let R=h.get(A);return R!==void 0?++R.usedTimes:(R=new zv(n,A,x,s),c.push(R),h.set(A,R)),R}function v(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function b(){a.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:w,acquireProgram:_,releaseProgram:v,releaseShaderCache:S,programs:c,dispose:b}}function $v(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Wv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function $d(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Wd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,g,y,p,m){let T=n[t];return T===void 0?(T={id:f.id,object:f,geometry:d,material:g,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:p,group:m},n[t]=T):(T.id=f.id,T.object=f,T.geometry=d,T.material=g,T.materialVariant=o(f),T.groupOrder=y,T.renderOrder=f.renderOrder,T.z=p,T.group=m),t++,T}function l(f,d,g,y,p,m){let T=a(f,d,g,y,p,m);g.transmission>0?i.push(T):g.transparent===!0?s.push(T):e.push(T)}function c(f,d,g,y,p,m){let T=a(f,d,g,y,p,m);g.transmission>0?i.unshift(T):g.transparent===!0?s.unshift(T):e.unshift(T)}function h(f,d,g){e.length>1&&e.sort(f||Wv),i.length>1&&i.sort(d||$d),s.length>1&&s.sort(d||$d),g&&(e.reverse(),i.reverse(),s.reverse())}function u(){for(let f=t,d=n.length;f<d;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Xv(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Wd,n.set(i,[o])):s>=r.length?(o=new Wd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function qv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Bt};break;case"SpotLight":e={position:new I,direction:new I,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function Yv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Zv=0;function Kv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Jv(n){let t=new qv,e=Yv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new he,o=new he;function a(c){let h=0,u=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,g=0,y=0,p=0,m=0,T=0,w=0,_=0,v=0,S=0,b=0;c.sort(Kv);for(let A=0,R=c.length;A<R;A++){let P=c[A],L=P.color,k=P.intensity,z=P.distance,N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Bi?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=L.r*k,u+=L.g*k,f+=L.b*k;else if(P.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(P.sh.coefficients[V],k);b++}else if(P.isDirectionalLight){let V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let F=P.shadow,X=e.get(P);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,i.directionalShadow[d]=X,i.directionalShadowMap[d]=N,i.directionalShadowMatrix[d]=P.shadow.matrix,T++}i.directional[d]=V,d++}else if(P.isSpotLight){let V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(L).multiplyScalar(k),V.distance=z,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,i.spot[y]=V;let F=P.shadow;if(P.map&&(i.spotLightMap[v]=P.map,v++,F.updateMatrices(P),P.castShadow&&S++),i.spotLightMatrix[y]=F.matrix,P.castShadow){let X=e.get(P);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,i.spotShadow[y]=X,i.spotShadowMap[y]=N,_++}y++}else if(P.isRectAreaLight){let V=t.get(P);V.color.copy(L).multiplyScalar(k),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=V,p++}else if(P.isPointLight){let V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){let F=P.shadow,X=e.get(P);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,X.shadowCameraNear=F.camera.near,X.shadowCameraFar=F.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=P.shadow.matrix,w++}i.point[g]=V,g++}else if(P.isHemisphereLight){let V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(k),V.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[m]=V,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Tt.LTC_FLOAT_1,i.rectAreaLTC2=Tt.LTC_FLOAT_2):(i.rectAreaLTC1=Tt.LTC_HALF_1,i.rectAreaLTC2=Tt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let x=i.hash;(x.directionalLength!==d||x.pointLength!==g||x.spotLength!==y||x.rectAreaLength!==p||x.hemiLength!==m||x.numDirectionalShadows!==T||x.numPointShadows!==w||x.numSpotShadows!==_||x.numSpotMaps!==v||x.numLightProbes!==b)&&(i.directional.length=d,i.spot.length=y,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=_+v-S,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=b,x.directionalLength=d,x.pointLength=g,x.spotLength=y,x.rectAreaLength=p,x.hemiLength=m,x.numDirectionalShadows=T,x.numPointShadows=w,x.numSpotShadows=_,x.numSpotMaps=v,x.numLightProbes=b,i.version=Zv++)}function l(c,h){let u=0,f=0,d=0,g=0,y=0,p=h.matrixWorldInverse;for(let m=0,T=c.length;m<T;m++){let w=c[m];if(w.isDirectionalLight){let _=i.directional[u];_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),u++}else if(w.isSpotLight){let _=i.spot[d];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),d++}else if(w.isRectAreaLight){let _=i.rectArea[g];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(p),o.identity(),r.copy(w.matrixWorld),r.premultiply(p),o.extractRotation(r),_.halfWidth.set(w.width*.5,0,0),_.halfHeight.set(0,w.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(p),f++}else if(w.isHemisphereLight){let _=i.hemi[y];_.direction.setFromMatrixPosition(w.matrixWorld),_.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:i}}function Xd(n){let t=new Jv(n),e=[],i=[],s=[];function r(f){u.camera=f,e.length=0,i.length=0,s.length=0}function o(f){e.push(f)}function a(f){i.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function jv(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Xd(n),t.set(s,[a])):r>=o.length?(a=new Xd(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Qv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,eM=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],nM=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],qd=new he,ro=new I,Th=new I;function iM(n,t,e){let i=new Vs,s=new ht,r=new ht,o=new be,a=new ba,l=new Sa,c={},h=e.maxTextureSize,u={[ei]:Ve,[Ve]:ei,[en]:en},f=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Qv,fragmentShader:tM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Fe;g.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ae(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yr;let m=this.type;this.render=function(S,b,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===Oa&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Yr);let A=n.getRenderTarget(),R=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Gn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let k=m!==this.type;k&&b.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(N=>N.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,N=S.length;z<N;z++){let V=S[z],F=V.shadow;if(F===void 0){Ht("WebGLShadowMap:",V,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let X=F.getFrameExtents();s.multiply(X),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,F.mapSize.y=r.y));let J=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=J,F.map===null||k===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===qs){if(V.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new hn(s.x,s.y,{format:Bi,type:Wn,minFilter:De,magFilter:De,generateMipmaps:!1}),F.map.texture.name=V.name+".shadowMap",F.map.depthTexture=new si(s.x,s.y,Sn),F.map.depthTexture.name=V.name+".shadowMapDepth",F.map.depthTexture.format=zn,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Le,F.map.depthTexture.magFilter=Le}else V.isPointLight?(F.map=new Rl(s.x),F.map.depthTexture=new pa(s.x,Dn)):(F.map=new hn(s.x,s.y),F.map.depthTexture=new si(s.x,s.y,Dn)),F.map.depthTexture.name=V.name+".shadowMap",F.map.depthTexture.format=zn,this.type===Yr?(F.map.depthTexture.compareFunction=J?El:Tl,F.map.depthTexture.minFilter=De,F.map.depthTexture.magFilter=De):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Le,F.map.depthTexture.magFilter=Le);F.camera.updateProjectionMatrix()}let lt=F.map.isWebGLCubeRenderTarget?6:1;for(let rt=0;rt<lt;rt++){if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,rt),n.clear();else{rt===0&&(n.setRenderTarget(F.map),n.clear());let nt=F.getViewport(rt);o.set(r.x*nt.x,r.y*nt.y,r.x*nt.z,r.y*nt.w),L.viewport(o)}if(V.isPointLight){let nt=F.camera,ft=F.matrix,ut=V.distance||nt.far;ut!==nt.far&&(nt.far=ut,nt.updateProjectionMatrix()),ro.setFromMatrixPosition(V.matrixWorld),nt.position.copy(ro),Th.copy(nt.position),Th.add(eM[rt]),nt.up.copy(nM[rt]),nt.lookAt(Th),nt.updateMatrixWorld(),ft.makeTranslation(-ro.x,-ro.y,-ro.z),qd.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),F._frustum.setFromProjectionMatrix(qd,nt.coordinateSystem,nt.reversedDepth)}else F.updateMatrices(V);i=F.getFrustum(),_(b,x,F.camera,V,this.type)}F.isPointLightShadow!==!0&&this.type===qs&&T(F,x),F.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(A,R,P)};function T(S,b){let x=t.update(y);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new hn(s.x,s.y,{format:Bi,type:Wn})),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(b,null,x,f,y,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(b,null,x,d,y,null)}function w(S,b,x,A){let R=null,P=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)R=P;else if(R=x.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let L=R.uuid,k=b.uuid,z=c[L];z===void 0&&(z={},c[L]=z);let N=z[k];N===void 0&&(N=R.clone(),z[k]=N,b.addEventListener("dispose",v)),R=N}if(R.visible=b.visible,R.wireframe=b.wireframe,A===qs?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:u[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,R.map=b.map,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=n.properties.get(R);L.light=x}return R}function _(S,b,x,A,R){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===qs)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let k=t.update(S),z=S.material;if(Array.isArray(z)){let N=k.groups;for(let V=0,F=N.length;V<F;V++){let X=N[V],J=z[X.materialIndex];if(J&&J.visible){let lt=w(S,J,A,R);S.onBeforeShadow(n,S,b,x,k,lt,X),n.renderBufferDirect(x,null,k,lt,S,X),S.onAfterShadow(n,S,b,x,k,lt,X)}}}else if(z.visible){let N=w(S,z,A,R);S.onBeforeShadow(n,S,b,x,k,N,null),n.renderBufferDirect(x,null,k,N,S,null),S.onAfterShadow(n,S,b,x,k,N,null)}}let L=S.children;for(let k=0,z=L.length;k<z;k++)_(L[k],b,x,A,R)}function v(S){S.target.removeEventListener("dispose",v);for(let x in c){let A=c[x],R=S.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function sM(n,t){function e(){let U=!1,Mt=new be,et=null,wt=new be(0,0,0,0);return{setMask:function(Rt){et!==Rt&&!U&&(n.colorMask(Rt,Rt,Rt,Rt),et=Rt)},setLocked:function(Rt){U=Rt},setClear:function(Rt,ot,Ot,Dt,Ee){Ee===!0&&(Rt*=Dt,ot*=Dt,Ot*=Dt),Mt.set(Rt,ot,Ot,Dt),wt.equals(Mt)===!1&&(n.clearColor(Rt,ot,Ot,Dt),wt.copy(Mt))},reset:function(){U=!1,et=null,wt.set(-1,0,0,0)}}}function i(){let U=!1,Mt=!1,et=null,wt=null,Rt=null;return{setReversed:function(ot){if(Mt!==ot){let Ot=t.get("EXT_clip_control");ot?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),Mt=ot;let Dt=Rt;Rt=null,this.setClear(Dt)}},getReversed:function(){return Mt},setTest:function(ot){ot?j(n.DEPTH_TEST):gt(n.DEPTH_TEST)},setMask:function(ot){et!==ot&&!U&&(n.depthMask(ot),et=ot)},setFunc:function(ot){if(Mt&&(ot=yd[ot]),wt!==ot){switch(ot){case ea:n.depthFunc(n.NEVER);break;case na:n.depthFunc(n.ALWAYS);break;case ia:n.depthFunc(n.LESS);break;case ji:n.depthFunc(n.LEQUAL);break;case sa:n.depthFunc(n.EQUAL);break;case ra:n.depthFunc(n.GEQUAL);break;case oa:n.depthFunc(n.GREATER);break;case aa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}wt=ot}},setLocked:function(ot){U=ot},setClear:function(ot){Rt!==ot&&(Rt=ot,Mt&&(ot=1-ot),n.clearDepth(ot))},reset:function(){U=!1,et=null,wt=null,Rt=null,Mt=!1}}}function s(){let U=!1,Mt=null,et=null,wt=null,Rt=null,ot=null,Ot=null,Dt=null,Ee=null;return{setTest:function(ve){U||(ve?j(n.STENCIL_TEST):gt(n.STENCIL_TEST))},setMask:function(ve){Mt!==ve&&!U&&(n.stencilMask(ve),Mt=ve)},setFunc:function(ve,Fn,On){(et!==ve||wt!==Fn||Rt!==On)&&(n.stencilFunc(ve,Fn,On),et=ve,wt=Fn,Rt=On)},setOp:function(ve,Fn,On){(ot!==ve||Ot!==Fn||Dt!==On)&&(n.stencilOp(ve,Fn,On),ot=ve,Ot=Fn,Dt=On)},setLocked:function(ve){U=ve},setClear:function(ve){Ee!==ve&&(n.clearStencil(ve),Ee=ve)},reset:function(){U=!1,Mt=null,et=null,wt=null,Rt=null,ot=null,Ot=null,Dt=null,Ee=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,g=[],y=null,p=!1,m=null,T=null,w=null,_=null,v=null,S=null,b=null,x=new Bt(0,0,0),A=0,R=!1,P=null,L=null,k=null,z=null,N=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,X=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(J)[1]),F=X>=1):J.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),F=X>=2);let lt=null,rt={},nt=n.getParameter(n.SCISSOR_BOX),ft=n.getParameter(n.VIEWPORT),ut=new be().fromArray(nt),pt=new be().fromArray(ft);function H(U,Mt,et,wt){let Rt=new Uint8Array(4),ot=n.createTexture();n.bindTexture(U,ot),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ot=0;Ot<et;Ot++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,wt,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(Mt+Ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return ot}let K={};K[n.TEXTURE_2D]=H(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=H(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=H(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=H(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(n.DEPTH_TEST),o.setFunc(ji),yt(!1),_t(Zc),j(n.CULL_FACE),it(Gn);function j(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function gt(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Et(U,Mt){return f[U]!==Mt?(n.bindFramebuffer(U,Mt),f[U]=Mt,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Mt),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Pt(U,Mt){let et=g,wt=!1;if(U){et=d.get(Mt),et===void 0&&(et=[],d.set(Mt,et));let Rt=U.textures;if(et.length!==Rt.length||et[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,Ot=Rt.length;ot<Ot;ot++)et[ot]=n.COLOR_ATTACHMENT0+ot;et.length=Rt.length,wt=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,wt=!0);wt&&n.drawBuffers(et)}function Wt(U){return y!==U?(n.useProgram(U),y=U,!0):!1}let xt={[Ci]:n.FUNC_ADD,[Hf]:n.FUNC_SUBTRACT,[Gf]:n.FUNC_REVERSE_SUBTRACT};xt[$f]=n.MIN,xt[Wf]=n.MAX;let Q={[Xf]:n.ZERO,[qf]:n.ONE,[Yf]:n.SRC_COLOR,[Qo]:n.SRC_ALPHA,[td]:n.SRC_ALPHA_SATURATE,[jf]:n.DST_COLOR,[Kf]:n.DST_ALPHA,[Zf]:n.ONE_MINUS_SRC_COLOR,[ta]:n.ONE_MINUS_SRC_ALPHA,[Qf]:n.ONE_MINUS_DST_COLOR,[Jf]:n.ONE_MINUS_DST_ALPHA,[ed]:n.CONSTANT_COLOR,[nd]:n.ONE_MINUS_CONSTANT_COLOR,[id]:n.CONSTANT_ALPHA,[sd]:n.ONE_MINUS_CONSTANT_ALPHA};function it(U,Mt,et,wt,Rt,ot,Ot,Dt,Ee,ve){if(U===Gn){p===!0&&(gt(n.BLEND),p=!1);return}if(p===!1&&(j(n.BLEND),p=!0),U!==Vf){if(U!==m||ve!==R){if((T!==Ci||v!==Ci)&&(n.blendEquation(n.FUNC_ADD),T=Ci,v=Ci),ve)switch(U){case Ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFunc(n.ONE,n.ONE);break;case Jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Yt("WebGLState: Invalid blending: ",U);break}else switch(U){case Ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Jc:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jc:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",U);break}w=null,_=null,S=null,b=null,x.set(0,0,0),A=0,m=U,R=ve}return}Rt=Rt||Mt,ot=ot||et,Ot=Ot||wt,(Mt!==T||Rt!==v)&&(n.blendEquationSeparate(xt[Mt],xt[Rt]),T=Mt,v=Rt),(et!==w||wt!==_||ot!==S||Ot!==b)&&(n.blendFuncSeparate(Q[et],Q[wt],Q[ot],Q[Ot]),w=et,_=wt,S=ot,b=Ot),(Dt.equals(x)===!1||Ee!==A)&&(n.blendColor(Dt.r,Dt.g,Dt.b,Ee),x.copy(Dt),A=Ee),m=U,R=!1}function st(U,Mt){U.side===en?gt(n.CULL_FACE):j(n.CULL_FACE);let et=U.side===Ve;Mt&&(et=!et),yt(et),U.blending===Ji&&U.transparent===!1?it(Gn):it(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let wt=U.stencilWrite;a.setTest(wt),wt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Lt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):gt(n.SAMPLE_ALPHA_TO_COVERAGE)}function yt(U){P!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),P=U)}function _t(U){U!==kf?(j(n.CULL_FACE),U!==L&&(U===Zc?n.cullFace(n.BACK):U===zf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):gt(n.CULL_FACE),L=U}function kt(U){U!==k&&(F&&n.lineWidth(U),k=U)}function Lt(U,Mt,et){U?(j(n.POLYGON_OFFSET_FILL),(z!==Mt||N!==et)&&(z=Mt,N=et,o.getReversed()&&(Mt=-Mt),n.polygonOffset(Mt,et))):gt(n.POLYGON_OFFSET_FILL)}function Gt(U){U?j(n.SCISSOR_TEST):gt(n.SCISSOR_TEST)}function Zt(U){U===void 0&&(U=n.TEXTURE0+V-1),lt!==U&&(n.activeTexture(U),lt=U)}function D(U,Mt,et){et===void 0&&(lt===null?et=n.TEXTURE0+V-1:et=lt);let wt=rt[et];wt===void 0&&(wt={type:void 0,texture:void 0},rt[et]=wt),(wt.type!==U||wt.texture!==Mt)&&(lt!==et&&(n.activeTexture(et),lt=et),n.bindTexture(U,Mt||K[U]),wt.type=U,wt.texture=Mt)}function le(){let U=rt[lt];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function jt(){try{n.compressedTexImage2D(...arguments)}catch(U){Yt("WebGLState:",U)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(U){Yt("WebGLState:",U)}}function M(){try{n.texSubImage2D(...arguments)}catch(U){Yt("WebGLState:",U)}}function B(){try{n.texSubImage3D(...arguments)}catch(U){Yt("WebGLState:",U)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(U){Yt("WebGLState:",U)}}function Y(){try{n.compressedTexSubImage3D(...arguments)}catch(U){Yt("WebGLState:",U)}}function dt(){try{n.texStorage2D(...arguments)}catch(U){Yt("WebGLState:",U)}}function mt(){try{n.texStorage3D(...arguments)}catch(U){Yt("WebGLState:",U)}}function Z(){try{n.texImage2D(...arguments)}catch(U){Yt("WebGLState:",U)}}function tt(){try{n.texImage3D(...arguments)}catch(U){Yt("WebGLState:",U)}}function vt(U){return u[U]!==void 0?u[U]:n.getParameter(U)}function Ft(U,Mt){u[U]!==Mt&&(n.pixelStorei(U,Mt),u[U]=Mt)}function bt(U){ut.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ut.copy(U))}function St(U){pt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),pt.copy(U))}function $t(U,Mt){let et=c.get(Mt);et===void 0&&(et=new WeakMap,c.set(Mt,et));let wt=et.get(U);wt===void 0&&(wt=n.getUniformBlockIndex(Mt,U.name),et.set(U,wt))}function qt(U,Mt){let wt=c.get(Mt).get(U);l.get(Mt)!==wt&&(n.uniformBlockBinding(Mt,wt,U.__bindingPointIndex),l.set(Mt,wt))}function Kt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},lt=null,rt={},f={},d=new WeakMap,g=[],y=null,p=!1,m=null,T=null,w=null,_=null,v=null,S=null,b=null,x=new Bt(0,0,0),A=0,R=!1,P=null,L=null,k=null,z=null,N=null,ut.set(0,0,n.canvas.width,n.canvas.height),pt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:gt,bindFramebuffer:Et,drawBuffers:Pt,useProgram:Wt,setBlending:it,setMaterial:st,setFlipSided:yt,setCullFace:_t,setLineWidth:kt,setPolygonOffset:Lt,setScissorTest:Gt,activeTexture:Zt,bindTexture:D,unbindTexture:le,compressedTexImage2D:jt,compressedTexImage3D:C,texImage2D:Z,texImage3D:tt,pixelStorei:Ft,getParameter:vt,updateUBOMapping:$t,uniformBlockBinding:qt,texStorage2D:dt,texStorage3D:mt,texSubImage2D:M,texSubImage3D:B,compressedTexSubImage2D:G,compressedTexSubImage3D:Y,scissor:bt,viewport:St,reset:Kt}}function rM(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap,u=new Set,f,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,M){return g?new OffscreenCanvas(C,M):_r("canvas")}function p(C,M,B){let G=1,Y=jt(C);if((Y.width>B||Y.height>B)&&(G=B/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let dt=Math.floor(G*Y.width),mt=Math.floor(G*Y.height);f===void 0&&(f=y(dt,mt));let Z=M?y(dt,mt):f;return Z.width=dt,Z.height=mt,Z.getContext("2d").drawImage(C,0,0,dt,mt),Ht("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+dt+"x"+mt+")."),Z}else return"data"in C&&Ht("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),C;return C}function m(C){return C.generateMipmaps}function T(C){n.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(C,M,B,G,Y,dt=!1){if(C!==null){if(n[C]!==void 0)return n[C];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let mt;G&&(mt=t.get("EXT_texture_norm16"),mt||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=M;if(M===n.RED&&(B===n.FLOAT&&(Z=n.R32F),B===n.HALF_FLOAT&&(Z=n.R16F),B===n.UNSIGNED_BYTE&&(Z=n.R8),B===n.UNSIGNED_SHORT&&mt&&(Z=mt.R16_EXT),B===n.SHORT&&mt&&(Z=mt.R16_SNORM_EXT)),M===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.R8UI),B===n.UNSIGNED_SHORT&&(Z=n.R16UI),B===n.UNSIGNED_INT&&(Z=n.R32UI),B===n.BYTE&&(Z=n.R8I),B===n.SHORT&&(Z=n.R16I),B===n.INT&&(Z=n.R32I)),M===n.RG&&(B===n.FLOAT&&(Z=n.RG32F),B===n.HALF_FLOAT&&(Z=n.RG16F),B===n.UNSIGNED_BYTE&&(Z=n.RG8),B===n.UNSIGNED_SHORT&&mt&&(Z=mt.RG16_EXT),B===n.SHORT&&mt&&(Z=mt.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RG8UI),B===n.UNSIGNED_SHORT&&(Z=n.RG16UI),B===n.UNSIGNED_INT&&(Z=n.RG32UI),B===n.BYTE&&(Z=n.RG8I),B===n.SHORT&&(Z=n.RG16I),B===n.INT&&(Z=n.RG32I)),M===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),B===n.UNSIGNED_INT&&(Z=n.RGB32UI),B===n.BYTE&&(Z=n.RGB8I),B===n.SHORT&&(Z=n.RGB16I),B===n.INT&&(Z=n.RGB32I)),M===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),B===n.UNSIGNED_INT&&(Z=n.RGBA32UI),B===n.BYTE&&(Z=n.RGBA8I),B===n.SHORT&&(Z=n.RGBA16I),B===n.INT&&(Z=n.RGBA32I)),M===n.RGB&&(B===n.UNSIGNED_SHORT&&mt&&(Z=mt.RGB16_EXT),B===n.SHORT&&mt&&(Z=mt.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),M===n.RGBA){let tt=dt?yr:ne.getTransfer(Y);B===n.FLOAT&&(Z=n.RGBA32F),B===n.HALF_FLOAT&&(Z=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Z=tt===fe?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&mt&&(Z=mt.RGBA16_EXT),B===n.SHORT&&mt&&(Z=mt.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(C,M){let B;return C?M===null||M===Dn||M===Ks?B=n.DEPTH24_STENCIL8:M===Sn?B=n.DEPTH32F_STENCIL8:M===Zs&&(B=n.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Dn||M===Ks?B=n.DEPTH_COMPONENT24:M===Sn?B=n.DEPTH_COMPONENT32F:M===Zs&&(B=n.DEPTH_COMPONENT16),B}function S(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Le&&C.minFilter!==De?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function b(C){let M=C.target;M.removeEventListener("dispose",b),A(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&u.delete(M)}function x(C){let M=C.target;M.removeEventListener("dispose",x),P(M)}function A(C){let M=i.get(C);if(M.__webglInit===void 0)return;let B=C.source,G=d.get(B);if(G){let Y=G[M.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&R(C),Object.keys(G).length===0&&d.delete(B)}i.remove(C)}function R(C){let M=i.get(C);n.deleteTexture(M.__webglTexture);let B=C.source,G=d.get(B);delete G[M.__cacheKey],o.memory.textures--}function P(C){let M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(M.__webglFramebuffer[G]))for(let Y=0;Y<M.__webglFramebuffer[G].length;Y++)n.deleteFramebuffer(M.__webglFramebuffer[G][Y]);else n.deleteFramebuffer(M.__webglFramebuffer[G]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[G])}else{if(Array.isArray(M.__webglFramebuffer))for(let G=0;G<M.__webglFramebuffer.length;G++)n.deleteFramebuffer(M.__webglFramebuffer[G]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let G=0;G<M.__webglColorRenderbuffer.length;G++)M.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[G]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let B=C.textures;for(let G=0,Y=B.length;G<Y;G++){let dt=i.get(B[G]);dt.__webglTexture&&(n.deleteTexture(dt.__webglTexture),o.memory.textures--),i.remove(B[G])}i.remove(C)}let L=0;function k(){L=0}function z(){return L}function N(C){L=C}function V(){let C=L;return C>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function F(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function X(C,M){let B=i.get(C);if(C.isVideoTexture&&D(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){let G=C.image;if(G===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(B,C,M);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+M)}function J(C,M){let B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){gt(B,C,M);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+M)}function lt(C,M){let B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){gt(B,C,M);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+M)}function rt(C,M){let B=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){Et(B,C,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+M)}let nt={[Ls]:n.REPEAT,[Mn]:n.CLAMP_TO_EDGE,[Ns]:n.MIRRORED_REPEAT},ft={[Le]:n.NEAREST,[Va]:n.NEAREST_MIPMAP_NEAREST,[ss]:n.NEAREST_MIPMAP_LINEAR,[De]:n.LINEAR,[Ys]:n.LINEAR_MIPMAP_NEAREST,[$n]:n.LINEAR_MIPMAP_LINEAR},ut={[cd]:n.NEVER,[pd]:n.ALWAYS,[hd]:n.LESS,[Tl]:n.LEQUAL,[ud]:n.EQUAL,[El]:n.GEQUAL,[fd]:n.GREATER,[dd]:n.NOTEQUAL};function pt(C,M){if(M.type===Sn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===De||M.magFilter===Ys||M.magFilter===ss||M.magFilter===$n||M.minFilter===De||M.minFilter===Ys||M.minFilter===ss||M.minFilter===$n)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,nt[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,nt[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,nt[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ft[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ft[M.minFilter]),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ut[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Le||M.minFilter!==ss&&M.minFilter!==$n||M.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function H(C,M){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",b));let G=M.source,Y=d.get(G);Y===void 0&&(Y={},d.set(G,Y));let dt=F(M);if(dt!==C.__cacheKey){Y[dt]===void 0&&(Y[dt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Y[dt].usedTimes++;let mt=Y[C.__cacheKey];mt!==void 0&&(Y[C.__cacheKey].usedTimes--,mt.usedTimes===0&&R(M)),C.__cacheKey=dt,C.__webglTexture=Y[dt].texture}return B}function K(C,M,B){return Math.floor(Math.floor(C/B)/M)}function j(C,M,B,G){let dt=C.updateRanges;if(dt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,B,G,M.data);else{dt.sort((Ft,bt)=>Ft.start-bt.start);let mt=0;for(let Ft=1;Ft<dt.length;Ft++){let bt=dt[mt],St=dt[Ft],$t=bt.start+bt.count,qt=K(St.start,M.width,4),Kt=K(bt.start,M.width,4);St.start<=$t+1&&qt===Kt&&K(St.start+St.count-1,M.width,4)===qt?bt.count=Math.max(bt.count,St.start+St.count-bt.start):(++mt,dt[mt]=St)}dt.length=mt+1;let Z=e.getParameter(n.UNPACK_ROW_LENGTH),tt=e.getParameter(n.UNPACK_SKIP_PIXELS),vt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let Ft=0,bt=dt.length;Ft<bt;Ft++){let St=dt[Ft],$t=Math.floor(St.start/4),qt=Math.ceil(St.count/4),Kt=$t%M.width,U=Math.floor($t/M.width),Mt=qt,et=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(n.UNPACK_SKIP_ROWS,U),e.texSubImage2D(n.TEXTURE_2D,0,Kt,U,Mt,et,B,G,M.data)}C.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Z),e.pixelStorei(n.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(n.UNPACK_SKIP_ROWS,vt)}}function gt(C,M,B){let G=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(G=n.TEXTURE_3D);let Y=H(C,M),dt=M.source;e.bindTexture(G,C.__webglTexture,n.TEXTURE0+B);let mt=i.get(dt);if(dt.version!==mt.__version||Y===!0){if(e.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let et=ne.getPrimaries(ne.workingColorSpace),wt=M.colorSpace===pn?null:ne.getPrimaries(M.colorSpace),Rt=M.colorSpace===pn||et===wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let tt=p(M.image,!1,s.maxTextureSize);tt=le(M,tt);let vt=r.convert(M.format,M.colorSpace),Ft=r.convert(M.type),bt=_(M.internalFormat,vt,Ft,M.normalized,M.colorSpace,M.isVideoTexture);pt(G,M);let St,$t=M.mipmaps,qt=M.isVideoTexture!==!0,Kt=mt.__version===void 0||Y===!0,U=dt.dataReady,Mt=S(M,tt);if(M.isDepthTexture)bt=v(M.format===Oi,M.type),Kt&&(qt?e.texStorage2D(n.TEXTURE_2D,1,bt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,bt,tt.width,tt.height,0,vt,Ft,null));else if(M.isDataTexture)if($t.length>0){qt&&Kt&&e.texStorage2D(n.TEXTURE_2D,Mt,bt,$t[0].width,$t[0].height);for(let et=0,wt=$t.length;et<wt;et++)St=$t[et],qt?U&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,St.width,St.height,vt,Ft,St.data):e.texImage2D(n.TEXTURE_2D,et,bt,St.width,St.height,0,vt,Ft,St.data);M.generateMipmaps=!1}else qt?(Kt&&e.texStorage2D(n.TEXTURE_2D,Mt,bt,tt.width,tt.height),U&&j(M,tt,vt,Ft)):e.texImage2D(n.TEXTURE_2D,0,bt,tt.width,tt.height,0,vt,Ft,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qt&&Kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,bt,$t[0].width,$t[0].height,tt.depth);for(let et=0,wt=$t.length;et<wt;et++)if(St=$t[et],M.format!==sn)if(vt!==null)if(qt){if(U)if(M.layerUpdates.size>0){let Rt=_h(St.width,St.height,M.format,M.type);for(let ot of M.layerUpdates){let Ot=St.data.subarray(ot*Rt/St.data.BYTES_PER_ELEMENT,(ot+1)*Rt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,ot,St.width,St.height,1,vt,Ot)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,St.width,St.height,tt.depth,vt,St.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,bt,St.width,St.height,tt.depth,0,St.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,St.width,St.height,tt.depth,vt,Ft,St.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,bt,St.width,St.height,tt.depth,0,vt,Ft,St.data)}else{qt&&Kt&&e.texStorage2D(n.TEXTURE_2D,Mt,bt,$t[0].width,$t[0].height);for(let et=0,wt=$t.length;et<wt;et++)St=$t[et],M.format!==sn?vt!==null?qt?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,St.width,St.height,vt,St.data):e.compressedTexImage2D(n.TEXTURE_2D,et,bt,St.width,St.height,0,St.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?U&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,St.width,St.height,vt,Ft,St.data):e.texImage2D(n.TEXTURE_2D,et,bt,St.width,St.height,0,vt,Ft,St.data)}else if(M.isDataArrayTexture)if(qt){if(Kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,bt,tt.width,tt.height,tt.depth),U)if(M.layerUpdates.size>0){let et=_h(tt.width,tt.height,M.format,M.type);for(let wt of M.layerUpdates){let Rt=tt.data.subarray(wt*et/tt.data.BYTES_PER_ELEMENT,(wt+1)*et/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,wt,tt.width,tt.height,1,vt,Ft,Rt)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,vt,Ft,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,bt,tt.width,tt.height,tt.depth,0,vt,Ft,tt.data);else if(M.isData3DTexture)qt?(Kt&&e.texStorage3D(n.TEXTURE_3D,Mt,bt,tt.width,tt.height,tt.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,vt,Ft,tt.data)):e.texImage3D(n.TEXTURE_3D,0,bt,tt.width,tt.height,tt.depth,0,vt,Ft,tt.data);else if(M.isFramebufferTexture){if(Kt)if(qt)e.texStorage2D(n.TEXTURE_2D,Mt,bt,tt.width,tt.height);else{let et=tt.width,wt=tt.height;for(let Rt=0;Rt<Mt;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,bt,et,wt,0,vt,Ft,null),et>>=1,wt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){let et=n.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),tt.parentNode!==et){et.appendChild(tt),u.add(M),et.onpaint=wt=>{let Rt=wt.changedElements;for(let ot of u)Rt.includes(ot.image)&&(ot.needsUpdate=!0)},et.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,tt);else{let Rt=n.RGBA,ot=n.RGBA,Ot=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Rt,ot,Ot,tt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if($t.length>0){if(qt&&Kt){let et=jt($t[0]);e.texStorage2D(n.TEXTURE_2D,Mt,bt,et.width,et.height)}for(let et=0,wt=$t.length;et<wt;et++)St=$t[et],qt?U&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,vt,Ft,St):e.texImage2D(n.TEXTURE_2D,et,bt,vt,Ft,St);M.generateMipmaps=!1}else if(qt){if(Kt){let et=jt(tt);e.texStorage2D(n.TEXTURE_2D,Mt,bt,et.width,et.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,Ft,tt)}else e.texImage2D(n.TEXTURE_2D,0,bt,vt,Ft,tt);m(M)&&T(G),mt.__version=dt.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Et(C,M,B){if(M.image.length!==6)return;let G=H(C,M),Y=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+B);let dt=i.get(Y);if(Y.version!==dt.__version||G===!0){e.activeTexture(n.TEXTURE0+B);let mt=ne.getPrimaries(ne.workingColorSpace),Z=M.colorSpace===pn?null:ne.getPrimaries(M.colorSpace),tt=M.colorSpace===pn||mt===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let vt=M.isCompressedTexture||M.image[0].isCompressedTexture,Ft=M.image[0]&&M.image[0].isDataTexture,bt=[];for(let ot=0;ot<6;ot++)!vt&&!Ft?bt[ot]=p(M.image[ot],!0,s.maxCubemapSize):bt[ot]=Ft?M.image[ot].image:M.image[ot],bt[ot]=le(M,bt[ot]);let St=bt[0],$t=r.convert(M.format,M.colorSpace),qt=r.convert(M.type),Kt=_(M.internalFormat,$t,qt,M.normalized,M.colorSpace),U=M.isVideoTexture!==!0,Mt=dt.__version===void 0||G===!0,et=Y.dataReady,wt=S(M,St);pt(n.TEXTURE_CUBE_MAP,M);let Rt;if(vt){U&&Mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Kt,St.width,St.height);for(let ot=0;ot<6;ot++){Rt=bt[ot].mipmaps;for(let Ot=0;Ot<Rt.length;Ot++){let Dt=Rt[Ot];M.format!==sn?$t!==null?U?et&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ot,0,0,Dt.width,Dt.height,$t,Dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ot,Kt,Dt.width,Dt.height,0,Dt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ot,0,0,Dt.width,Dt.height,$t,qt,Dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ot,Kt,Dt.width,Dt.height,0,$t,qt,Dt.data)}}}else{if(Rt=M.mipmaps,U&&Mt){Rt.length>0&&wt++;let ot=jt(bt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Kt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(Ft){U?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,bt[ot].width,bt[ot].height,$t,qt,bt[ot].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Kt,bt[ot].width,bt[ot].height,0,$t,qt,bt[ot].data);for(let Ot=0;Ot<Rt.length;Ot++){let Ee=Rt[Ot].image[ot].image;U?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ot+1,0,0,Ee.width,Ee.height,$t,qt,Ee.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ot+1,Kt,Ee.width,Ee.height,0,$t,qt,Ee.data)}}else{U?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,$t,qt,bt[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Kt,$t,qt,bt[ot]);for(let Ot=0;Ot<Rt.length;Ot++){let Dt=Rt[Ot];U?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ot+1,0,0,$t,qt,Dt.image[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ot+1,Kt,$t,qt,Dt.image[ot])}}}m(M)&&T(n.TEXTURE_CUBE_MAP),dt.__version=Y.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Pt(C,M,B,G,Y,dt){let mt=r.convert(B.format,B.colorSpace),Z=r.convert(B.type),tt=_(B.internalFormat,mt,Z,B.normalized,B.colorSpace),vt=i.get(M),Ft=i.get(B);if(Ft.__renderTarget=M,!vt.__hasExternalTextures){let bt=Math.max(1,M.width>>dt),St=Math.max(1,M.height>>dt);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?e.texImage3D(Y,dt,tt,bt,St,M.depth,0,mt,Z,null):e.texImage2D(Y,dt,tt,bt,St,0,mt,Z,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Zt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,Y,Ft.__webglTexture,0,Gt(M)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,Y,Ft.__webglTexture,dt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(C,M,B){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer){let G=M.depthTexture,Y=G&&G.isDepthTexture?G.type:null,dt=v(M.stencilBuffer,Y),mt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Zt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Gt(M),dt,M.width,M.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt(M),dt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,dt,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,C)}else{let G=M.textures;for(let Y=0;Y<G.length;Y++){let dt=G[Y],mt=r.convert(dt.format,dt.colorSpace),Z=r.convert(dt.type),tt=_(dt.internalFormat,mt,Z,dt.normalized,dt.colorSpace);Zt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Gt(M),tt,M.width,M.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt(M),tt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,tt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xt(C,M,B){let G=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=i.get(M.depthTexture);if(Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,M.depthTexture.addEventListener("dispose",b)),Y.__webglTexture===void 0){Y.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),pt(n.TEXTURE_CUBE_MAP,M.depthTexture);let vt=r.convert(M.depthTexture.format),Ft=r.convert(M.depthTexture.type),bt;M.depthTexture.format===zn?bt=n.DEPTH_COMPONENT24:M.depthTexture.format===Oi&&(bt=n.DEPTH24_STENCIL8);for(let St=0;St<6;St++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,bt,M.width,M.height,0,vt,Ft,null)}}else X(M.depthTexture,0);let dt=Y.__webglTexture,mt=Gt(M),Z=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,tt=M.depthTexture.format===Oi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===zn)Zt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,Z,dt,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,tt,Z,dt,0);else if(M.depthTexture.format===Oi)Zt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,Z,dt,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,tt,Z,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Q(C){let M=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let G=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),G){let Y=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),M.__depthDisposeCallback=Y}M.__boundDepthTexture=G}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let G=0;G<6;G++)xt(M.__webglFramebuffer[G],C,G);else{let G=C.texture.mipmaps;G&&G.length>0?xt(M.__webglFramebuffer[0],C,0):xt(M.__webglFramebuffer,C,0)}else if(B){M.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[G]),M.__webglDepthbuffer[G]===void 0)M.__webglDepthbuffer[G]=n.createRenderbuffer(),Wt(M.__webglDepthbuffer[G],C,!1);else{let Y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=M.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,dt)}}else{let G=C.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Wt(M.__webglDepthbuffer,C,!1);else{let Y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,dt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function it(C,M,B){let G=i.get(C);M!==void 0&&Pt(G.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Q(C)}function st(C){let M=C.texture,B=i.get(C),G=i.get(M);C.addEventListener("dispose",x);let Y=C.textures,dt=C.isWebGLCubeRenderTarget===!0,mt=Y.length>1;if(mt||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=M.version,o.memory.textures++),dt){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let tt=0;tt<M.mipmaps.length;tt++)B.__webglFramebuffer[Z][tt]=n.createFramebuffer()}else B.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<M.mipmaps.length;Z++)B.__webglFramebuffer[Z]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(mt)for(let Z=0,tt=Y.length;Z<tt;Z++){let vt=i.get(Y[Z]);vt.__webglTexture===void 0&&(vt.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Zt(C)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){let tt=Y[Z];B.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);let vt=r.convert(tt.format,tt.colorSpace),Ft=r.convert(tt.type),bt=_(tt.internalFormat,vt,Ft,tt.normalized,tt.colorSpace,C.isXRRenderTarget===!0),St=Gt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,St,bt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Wt(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(dt){e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),pt(n.TEXTURE_CUBE_MAP,M);for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0)for(let tt=0;tt<M.mipmaps.length;tt++)Pt(B.__webglFramebuffer[Z][tt],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,tt);else Pt(B.__webglFramebuffer[Z],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(M)&&T(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let Z=0,tt=Y.length;Z<tt;Z++){let vt=Y[Z],Ft=i.get(vt),bt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(bt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(bt,Ft.__webglTexture),pt(bt,vt),Pt(B.__webglFramebuffer,C,vt,n.COLOR_ATTACHMENT0+Z,bt,0),m(vt)&&T(bt)}e.unbindTexture()}else{let Z=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Z,G.__webglTexture),pt(Z,M),M.mipmaps&&M.mipmaps.length>0)for(let tt=0;tt<M.mipmaps.length;tt++)Pt(B.__webglFramebuffer[tt],C,M,n.COLOR_ATTACHMENT0,Z,tt);else Pt(B.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,Z,0);m(M)&&T(Z),e.unbindTexture()}C.depthBuffer&&Q(C)}function yt(C){let M=C.textures;for(let B=0,G=M.length;B<G;B++){let Y=M[B];if(m(Y)){let dt=w(C),mt=i.get(Y).__webglTexture;e.bindTexture(dt,mt),T(dt),e.unbindTexture()}}}let _t=[],kt=[];function Lt(C){if(C.samples>0){if(Zt(C)===!1){let M=C.textures,B=C.width,G=C.height,Y=n.COLOR_BUFFER_BIT,dt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=i.get(C),Z=M.length>1;if(Z)for(let vt=0;vt<M.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let tt=C.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let vt=0;vt<M.length;vt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,mt.__webglColorRenderbuffer[vt]);let Ft=i.get(M[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ft,0)}n.blitFramebuffer(0,0,B,G,0,0,B,G,Y,n.NEAREST),l===!0&&(_t.length=0,kt.length=0,_t.push(n.COLOR_ATTACHMENT0+vt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(_t.push(dt),kt.push(dt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,kt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_t))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let vt=0;vt<M.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,mt.__webglColorRenderbuffer[vt]);let Ft=i.get(M[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,Ft,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let M=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Gt(C){return Math.min(s.maxSamples,C.samples)}function Zt(C){let M=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function D(C){let M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function le(C,M){let B=C.colorSpace,G=C.format,Y=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==xr&&B!==pn&&(ne.getTransfer(B)===fe?(G!==sn||Y!==nn)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",B)),M}function jt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.getTextureUnits=z,this.setTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=J,this.setTexture3D=lt,this.setTextureCube=rt,this.rebindTextures=it,this.setupRenderTarget=st,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function oM(n,t){function e(i,s=pn){let r,o=ne.getTransfer(s);if(i===nn)return n.UNSIGNED_BYTE;if(i===Ga)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$a)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ch)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===oh)return n.BYTE;if(i===ah)return n.SHORT;if(i===Zs)return n.UNSIGNED_SHORT;if(i===Ha)return n.INT;if(i===Dn)return n.UNSIGNED_INT;if(i===Sn)return n.FLOAT;if(i===Wn)return n.HALF_FLOAT;if(i===hh)return n.ALPHA;if(i===uh)return n.RGB;if(i===sn)return n.RGBA;if(i===zn)return n.DEPTH_COMPONENT;if(i===Oi)return n.DEPTH_STENCIL;if(i===Wa)return n.RED;if(i===Xa)return n.RED_INTEGER;if(i===Bi)return n.RG;if(i===qa)return n.RG_INTEGER;if(i===Ya)return n.RGBA_INTEGER;if(i===Jr||i===jr||i===Qr||i===to)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===to)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Za||i===Ka||i===Ja||i===ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qa||i===tl||i===el||i===nl||i===il||i===eo||i===sl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Qa||i===tl)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===el)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===nl)return r.COMPRESSED_R11_EAC;if(i===il)return r.COMPRESSED_SIGNED_R11_EAC;if(i===eo)return r.COMPRESSED_RG11_EAC;if(i===sl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===rl||i===ol||i===al||i===ll||i===cl||i===hl||i===ul||i===fl||i===dl||i===pl||i===ml||i===gl||i===xl||i===yl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===rl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ol)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===al)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ll)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ul)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ml)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_l||i===vl||i===Ml)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===_l)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bl||i===Sl||i===no||i===wl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===bl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===no)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var aM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Nh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Rr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new fn({vertexShader:aM,fragmentShader:lM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ae(new Br(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dh=class extends In{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,y=typeof XRWebGLBinding<"u",p=new Nh,m={},T=e.getContextAttributes(),w=null,_=null,v=[],S=[],b=new ht,x=null,A=new He;A.viewport=new be;let R=new He;R.viewport=new be;let P=[A,R],L=new Fa,k=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let K=v[H];return K===void 0&&(K=new ks,v[H]=K),K.getTargetRaySpace()},this.getControllerGrip=function(H){let K=v[H];return K===void 0&&(K=new ks,v[H]=K),K.getGripSpace()},this.getHand=function(H){let K=v[H];return K===void 0&&(K=new ks,v[H]=K),K.getHandSpace()};function N(H){let K=S.indexOf(H.inputSource);if(K===-1)return;let j=v[K];j!==void 0&&(j.update(H.inputSource,H.frame,c||o),j.dispatchEvent({type:H.type,data:H.inputSource}))}function V(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",F);for(let H=0;H<v.length;H++){let K=S[H];K!==null&&(S[H]=null,v[H].disconnect(K))}k=null,z=null,p.reset();for(let H in m)delete m[H];t.setRenderTarget(w),d=null,f=null,u=null,s=null,_=null,pt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",V),s.addEventListener("inputsourceschange",F),T.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(b),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,gt=null,Et=null;T.depth&&(Et=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=T.stencil?Oi:zn,gt=T.stencil?Ks:Dn);let Pt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Pt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new hn(f.textureWidth,f.textureHeight,{format:sn,type:nn,depthTexture:new si(f.textureWidth,f.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let j={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new hn(d.framebufferWidth,d.framebufferHeight,{format:sn,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),pt.setContext(s),pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function F(H){for(let K=0;K<H.removed.length;K++){let j=H.removed[K],gt=S.indexOf(j);gt>=0&&(S[gt]=null,v[gt].disconnect(j))}for(let K=0;K<H.added.length;K++){let j=H.added[K],gt=S.indexOf(j);if(gt===-1){for(let Pt=0;Pt<v.length;Pt++)if(Pt>=S.length){S.push(j),gt=Pt;break}else if(S[Pt]===null){S[Pt]=j,gt=Pt;break}if(gt===-1)break}let Et=v[gt];Et&&Et.connect(j)}}let X=new I,J=new I;function lt(H,K,j){X.setFromMatrixPosition(K.matrixWorld),J.setFromMatrixPosition(j.matrixWorld);let gt=X.distanceTo(J),Et=K.projectionMatrix.elements,Pt=j.projectionMatrix.elements,Wt=Et[14]/(Et[10]-1),xt=Et[14]/(Et[10]+1),Q=(Et[9]+1)/Et[5],it=(Et[9]-1)/Et[5],st=(Et[8]-1)/Et[0],yt=(Pt[8]+1)/Pt[0],_t=Wt*st,kt=Wt*yt,Lt=gt/(-st+yt),Gt=Lt*-st;if(K.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Gt),H.translateZ(Lt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Et[10]===-1)H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Zt=Wt+Lt,D=xt+Lt,le=_t-Gt,jt=kt+(gt-Gt),C=Q*xt/D*Zt,M=it*xt/D*Zt;H.projectionMatrix.makePerspective(le,jt,C,M,Zt,D),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function rt(H,K){K===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(K.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let K=H.near,j=H.far;p.texture!==null&&(p.depthNear>0&&(K=p.depthNear),p.depthFar>0&&(j=p.depthFar)),L.near=R.near=A.near=K,L.far=R.far=A.far=j,(k!==L.near||z!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),k=L.near,z=L.far),L.layers.mask=H.layers.mask|6,A.layers.mask=L.layers.mask&-5,R.layers.mask=L.layers.mask&-3;let gt=H.parent,Et=L.cameras;rt(L,gt);for(let Pt=0;Pt<Et.length;Pt++)rt(Et[Pt],gt);Et.length===2?lt(L,A,R):L.projectionMatrix.copy(A.projectionMatrix),nt(H,L,gt)};function nt(H,K,j){j===null?H.matrix.copy(K.matrixWorld):(H.matrix.copy(j.matrixWorld),H.matrix.invert(),H.matrix.multiply(K.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Os*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(H){return m[H]};let ft=null;function ut(H,K){if(h=K.getViewerPose(c||o),g=K,h!==null){let j=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let gt=!1;j.length!==L.cameras.length&&(L.cameras.length=0,gt=!0);for(let xt=0;xt<j.length;xt++){let Q=j[xt],it=null;if(d!==null)it=d.getViewport(Q);else{let yt=u.getViewSubImage(f,Q);it=yt.viewport,xt===0&&(t.setRenderTargetTextures(_,yt.colorTexture,yt.depthStencilTexture),t.setRenderTarget(_))}let st=P[xt];st===void 0&&(st=new He,st.layers.enable(xt),st.viewport=new be,P[xt]=st),st.matrix.fromArray(Q.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Q.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(it.x,it.y,it.width,it.height),xt===0&&(L.matrix.copy(st.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),gt===!0&&L.cameras.push(st)}let Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=i.getBinding();let xt=u.getDepthInformation(j[0]);xt&&xt.isValid&&xt.texture&&p.init(xt,s.renderState)}if(Et&&Et.includes("camera-access")&&y){t.state.unbindTexture(),u=i.getBinding();for(let xt=0;xt<j.length;xt++){let Q=j[xt].camera;if(Q){let it=m[Q];it||(it=new Rr,m[Q]=it);let st=u.getCameraImage(Q);it.sourceTexture=st}}}}for(let j=0;j<v.length;j++){let gt=S[j],Et=v[j];gt!==null&&Et!==void 0&&Et.update(gt,K,c||o)}ft&&ft(H,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}let pt=new Yd;pt.setAnimationLoop(ut),this.setAnimationLoop=function(H){ft=H},this.dispose=function(){}}},cM=new he,tp=new Xt;tp.set(-1,0,0,0,1,0,0,0,1);function hM(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,gh(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,T,w,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,T,w):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ve&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ve&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let T=t.get(m),w=T.envMap,_=T.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(cM.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(tp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,T,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=w*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,T){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ve&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let T=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function uM(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let S=v.program;i.uniformBlockBinding(_,S)}function c(_,v){let S=s[_.id];S===void 0&&(p(_),S=h(_),s[_.id]=S,_.addEventListener("dispose",T));let b=v.program;i.updateUBOMapping(_,b);let x=t.render.frame;r[_.id]!==x&&(f(_),r[_.id]=x)}function h(_){let v=u();_.__bindingPointIndex=v;let S=n.createBuffer(),b=_.__size,x=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,b,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,S),S}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let v=s[_.id],S=_.uniforms,b=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let x=0,A=S.length;x<A;x++){let R=S[x];if(Array.isArray(R))for(let P=0,L=R.length;P<L;P++)d(R[P],x,P,b);else d(R,x,0,b)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(_,v,S,b){if(y(_,v,S,b)===!0){let x=_.__offset,A=_.value;if(Array.isArray(A)){let R=0;for(let P=0;P<A.length;P++){let L=A[P],k=m(L);g(L,_.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,_.__data)}}function g(_,v,S){typeof _=="number"||typeof _=="boolean"?v[0]=_:_.isMatrix3?(v[0]=_.elements[0],v[1]=_.elements[1],v[2]=_.elements[2],v[3]=0,v[4]=_.elements[3],v[5]=_.elements[4],v[6]=_.elements[5],v[7]=0,v[8]=_.elements[6],v[9]=_.elements[7],v[10]=_.elements[8],v[11]=0):ArrayBuffer.isView(_)?v.set(new _.constructor(_.buffer,_.byteOffset,v.length)):_.toArray(v,S)}function y(_,v,S,b){let x=_.value,A=v+"_"+S;if(b[A]===void 0)return typeof x=="number"||typeof x=="boolean"?b[A]=x:ArrayBuffer.isView(x)?b[A]=x.slice():b[A]=x.clone(),!0;{let R=b[A];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return b[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function p(_){let v=_.uniforms,S=0,b=16;for(let A=0,R=v.length;A<R;A++){let P=Array.isArray(v[A])?v[A]:[v[A]];for(let L=0,k=P.length;L<k;L++){let z=P[L],N=Array.isArray(z.value)?z.value:[z.value];for(let V=0,F=N.length;V<F;V++){let X=N[V],J=m(X),lt=S%b,rt=lt%J.boundary,nt=lt+rt;S+=rt,nt!==0&&b-nt<J.storage&&(S+=b-nt),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=J.storage}}}let x=S%b;return x>0&&(S+=b-x),_.__size=S,_.__cache={},this}function m(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",_),v}function T(_){let v=_.target;v.removeEventListener("dispose",T);let S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function w(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:w}}var fM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xn=null;function dM(){return Xn===null&&(Xn=new wr(fM,16,16,Bi,Wn),Xn.name="DFG_LUT",Xn.minFilter=De,Xn.magFilter=De,Xn.wrapS=Mn,Xn.wrapT=Mn,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}var Pl=class{constructor(t={}){let{canvas:e=md(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=nn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let y=d,p=new Set([Ya,qa,Xa]),m=new Set([nn,Dn,Zs,Ks,Ga,$a]),T=new Uint32Array(4),w=new Int32Array(4),_=new I,v=null,S=null,b=[],x=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,L=null,k=null,z=null,N=null;this._outputColorSpace=Ie;let V=0,F=0,X=null,J=-1,lt=null,rt=new be,nt=new be,ft=null,ut=new Bt(0),pt=0,H=e.width,K=e.height,j=1,gt=null,Et=null,Pt=new be(0,0,H,K),Wt=new be(0,0,H,K),xt=!1,Q=new Vs,it=!1,st=!1,yt=new he,_t=new I,kt=new be,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function Zt(){return X===null?j:1}let D=i;function le(E,O){return e.getContext(E,O)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",Fn,!1),D===null){let O="webgl2";if(D=le(O,E),D===null)throw le(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw Yt("WebGLRenderer: "+E.message),E}let jt,C,M,B,G,Y,dt,mt,Z,tt,vt,Ft,bt,St,$t,qt,Kt,U,Mt,et,wt,Rt,ot;function Ot(){jt=new v_(D),jt.init(),wt=new oM(D,jt),C=new f_(D,jt,t,wt),M=new sM(D,jt),C.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),k=D.createFramebuffer(),z=D.createFramebuffer(),N=D.createFramebuffer(),B=new S_(D),G=new $v,Y=new rM(D,jt,M,G,C,wt,B),dt=new __(R),mt=new A0(D),Rt=new h_(D,mt),Z=new M_(D,mt,B,Rt),tt=new T_(D,Z,mt,Rt,B),U=new w_(D,C,Y),$t=new d_(G),vt=new Gv(R,dt,jt,C,Rt,$t),Ft=new hM(R,G),bt=new Xv,St=new jv(jt),Kt=new c_(R,dt,M,tt,g,l),qt=new iM(R,tt,C),ot=new uM(D,B,C,M),Mt=new u_(D,jt,B),et=new b_(D,jt,B),B.programs=vt.programs,R.capabilities=C,R.extensions=jt,R.properties=G,R.renderLists=bt,R.shadowMap=qt,R.state=M,R.info=B}Ot(),y!==nn&&(A=new A_(y,e.width,e.height,a,s,r));let Dt=new Dh(R,D);this.xr=Dt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let E=jt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=jt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(H,K,!1))},this.getSize=function(E){return E.set(H,K)},this.setSize=function(E,O,q=!0){if(Dt.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,K=O,e.width=Math.floor(E*j),e.height=Math.floor(O*j),q===!0&&(e.style.width=E+"px",e.style.height=O+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(H*j,K*j).floor()},this.setDrawingBufferSize=function(E,O,q){H=E,K=O,j=q,e.width=Math.floor(E*q),e.height=Math.floor(O*q),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(y===nn){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(rt)},this.getViewport=function(E){return E.copy(Pt)},this.setViewport=function(E,O,q,$){E.isVector4?Pt.set(E.x,E.y,E.z,E.w):Pt.set(E,O,q,$),M.viewport(rt.copy(Pt).multiplyScalar(j).round())},this.getScissor=function(E){return E.copy(Wt)},this.setScissor=function(E,O,q,$){E.isVector4?Wt.set(E.x,E.y,E.z,E.w):Wt.set(E,O,q,$),M.scissor(nt.copy(Wt).multiplyScalar(j).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(E){M.setScissorTest(xt=E)},this.setOpaqueSort=function(E){gt=E},this.setTransparentSort=function(E){Et=E},this.getClearColor=function(E){return E.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,q=!0){let $=0;if(E){let W=!1;if(X!==null){let Ct=X.texture.format;W=p.has(Ct)}if(W){let Ct=X.texture.type,Nt=m.has(Ct),At=Kt.getClearColor(),Ut=Kt.getClearAlpha(),zt=At.r,Jt=At.g,ee=At.b;Nt?(T[0]=zt,T[1]=Jt,T[2]=ee,T[3]=Ut,D.clearBufferuiv(D.COLOR,0,T)):(w[0]=zt,w[1]=Jt,w[2]=ee,w[3]=Ut,D.clearBufferiv(D.COLOR,0,w))}else $|=D.COLOR_BUFFER_BIT}O&&($|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Fn,!1),Kt.dispose(),bt.dispose(),St.dispose(),G.dispose(),dt.dispose(),tt.dispose(),Rt.dispose(),ot.dispose(),vt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",Ju),Dt.removeEventListener("sessionend",ju),Gi.stop()};function Ee(E){E.preventDefault(),dh("WebGLRenderer: Context Lost."),P=!0}function ve(){dh("WebGLRenderer: Context Restored."),P=!1;let E=B.autoReset,O=qt.enabled,q=qt.autoUpdate,$=qt.needsUpdate,W=qt.type;Ot(),B.autoReset=E,qt.enabled=O,qt.autoUpdate=q,qt.needsUpdate=$,qt.type=W}function Fn(E){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function On(E){let O=E.target;O.removeEventListener("dispose",On),jm(O)}function jm(E){Qm(E),G.remove(E)}function Qm(E){let O=G.get(E).programs;O!==void 0&&(O.forEach(function(q){vt.releaseProgram(q)}),E.isShaderMaterial&&vt.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,q,$,W,Ct){O===null&&(O=Lt);let Nt=W.isMesh&&W.matrixWorld.determinantAffine()<0,At=ng(E,O,q,$,W);M.setMaterial($,Nt);let Ut=q.index,zt=1;if($.wireframe===!0){if(Ut=Z.getWireframeAttribute(q),Ut===void 0)return;zt=2}let Jt=q.drawRange,ee=q.attributes.position,Vt=Jt.start*zt,de=(Jt.start+Jt.count)*zt;Ct!==null&&(Vt=Math.max(Vt,Ct.start*zt),de=Math.min(de,(Ct.start+Ct.count)*zt)),Ut!==null?(Vt=Math.max(Vt,0),de=Math.min(de,Ut.count)):ee!=null&&(Vt=Math.max(Vt,0),de=Math.min(de,ee.count));let Ce=de-Vt;if(Ce<0||Ce===1/0)return;Rt.setup(W,$,At,q,Ut);let Ae,ge=Mt;if(Ut!==null&&(Ae=mt.get(Ut),ge=et,ge.setIndex(Ae)),W.isMesh)$.wireframe===!0?(M.setLineWidth($.wireframeLinewidth*Zt()),ge.setMode(D.LINES)):ge.setMode(D.TRIANGLES);else if(W.isLine){let We=$.linewidth;We===void 0&&(We=1),M.setLineWidth(We*Zt()),W.isLineSegments?ge.setMode(D.LINES):W.isLineLoop?ge.setMode(D.LINE_LOOP):ge.setMode(D.LINE_STRIP)}else W.isPoints?ge.setMode(D.POINTS):W.isSprite&&ge.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))ge.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let We=W._multiDrawStarts,It=W._multiDrawCounts,an=W._multiDrawCount,re=Ut?mt.get(Ut).bytesPerElement:1,yn=G.get($).currentProgram.getUniforms();for(let Bn=0;Bn<an;Bn++)yn.setValue(D,"_gl_DrawID",Bn),ge.render(We[Bn]/re,It[Bn])}else if(W.isInstancedMesh)ge.renderInstances(Vt,Ce,W.count);else if(q.isInstancedBufferGeometry){let We=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,It=Math.min(q.instanceCount,We);ge.renderInstances(Vt,Ce,It)}else ge.render(Vt,Ce)};function Ku(E,O,q){E.transparent===!0&&E.side===en&&E.forceSinglePass===!1?(E.side=Ve,E.needsUpdate=!0,Eo(E,O,q),E.side=ei,E.needsUpdate=!0,Eo(E,O,q),E.side=en):Eo(E,O,q)}this.compile=function(E,O,q=null){q===null&&(q=E),S=St.get(q),S.init(O),x.push(S),q.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),E!==q&&E.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),S.setupLights();let $=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Ct=W.material;if(Ct)if(Array.isArray(Ct))for(let Nt=0;Nt<Ct.length;Nt++){let At=Ct[Nt];Ku(At,q,W),$.add(At)}else Ku(Ct,q,W),$.add(Ct)}),S=x.pop(),$},this.compileAsync=function(E,O,q=null){let $=this.compile(E,O,q);return new Promise(W=>{function Ct(){if($.forEach(function(Nt){G.get(Nt).currentProgram.isReady()&&$.delete(Nt)}),$.size===0){W(E);return}setTimeout(Ct,10)}jt.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let ac=null;function tg(E){ac&&ac(E)}function Ju(){Gi.stop()}function ju(){Gi.start()}let Gi=new Yd;Gi.setAnimationLoop(tg),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(E){ac=E,Dt.setAnimationLoop(E),E===null?Gi.stop():Gi.start()},Dt.addEventListener("sessionstart",Ju),Dt.addEventListener("sessionend",ju),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(E,O);let q=Dt.enabled===!0&&Dt.isPresenting===!0,$=A!==null&&(X===null||q)&&A.begin(R,X);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(O),O=Dt.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,O,X),S=St.get(E,x.length),S.init(O),S.state.textureUnits=Y.getTextureUnits(),x.push(S),yt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Q.setFromProjectionMatrix(yt,Pn,O.reversedDepth),st=this.localClippingEnabled,it=$t.init(this.clippingPlanes,st),v=bt.get(E,b.length),v.init(),b.push(v),Dt.enabled===!0&&Dt.isPresenting===!0){let Nt=R.xr.getDepthSensingMesh();Nt!==null&&lc(Nt,O,-1/0,R.sortObjects)}lc(E,O,0,R.sortObjects),v.finish(),R.sortObjects===!0&&v.sort(gt,Et,O.reversedDepth),Gt=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,Gt&&Kt.addToRenderList(v,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),it===!0&&$t.beginShadows();let W=S.state.shadowsArray;if(qt.render(W,E,O),it===!0&&$t.endShadows(),($&&A.hasRenderPass())===!1){let Nt=v.opaque,At=v.transmissive;if(S.setupLights(),O.isArrayCamera){let Ut=O.cameras;if(At.length>0)for(let zt=0,Jt=Ut.length;zt<Jt;zt++){let ee=Ut[zt];tf(Nt,At,E,ee)}Gt&&Kt.render(E);for(let zt=0,Jt=Ut.length;zt<Jt;zt++){let ee=Ut[zt];Qu(v,E,ee,ee.viewport)}}else At.length>0&&tf(Nt,At,E,O),Gt&&Kt.render(E),Qu(v,E,O)}X!==null&&F===0&&(Y.updateMultisampleRenderTarget(X),Y.updateRenderTargetMipmap(X)),$&&A.end(R),E.isScene===!0&&E.onAfterRender(R,E,O),Rt.resetDefaultState(),J=-1,lt=null,x.pop(),x.length>0?(S=x[x.length-1],Y.setTextureUnits(S.state.textureUnits),it===!0&&$t.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,b.pop(),b.length>0?v=b[b.length-1]:v=null,L!==null&&L.renderEnd()};function lc(E,O,q,$){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLightProbeGrid)S.pushLightProbeGrid(E);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){$&&kt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(yt);let Nt=tt.update(E),At=E.material;At.visible&&v.push(E,Nt,At,q,kt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Q.intersectsObject(E))){let Nt=tt.update(E),At=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),kt.copy(E.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),kt.copy(Nt.boundingSphere.center)),kt.applyMatrix4(E.matrixWorld).applyMatrix4(yt)),Array.isArray(At)){let Ut=Nt.groups;for(let zt=0,Jt=Ut.length;zt<Jt;zt++){let ee=Ut[zt],Vt=At[ee.materialIndex];Vt&&Vt.visible&&v.push(E,Nt,Vt,q,kt.z,ee)}}else At.visible&&v.push(E,Nt,At,q,kt.z,null)}}let Ct=E.children;for(let Nt=0,At=Ct.length;Nt<At;Nt++)lc(Ct[Nt],O,q,$)}function Qu(E,O,q,$){let{opaque:W,transmissive:Ct,transparent:Nt}=E;S.setupLightsView(q),it===!0&&$t.setGlobalState(R.clippingPlanes,q),$&&M.viewport(rt.copy($)),W.length>0&&To(W,O,q),Ct.length>0&&To(Ct,O,q),Nt.length>0&&To(Nt,O,q),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function tf(E,O,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[$.id]===void 0){let Vt=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[$.id]=new hn(1,1,{generateMipmaps:!0,type:Vt?Wn:nn,minFilter:$n,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let Ct=S.state.transmissionRenderTarget[$.id],Nt=$.viewport||rt;Ct.setSize(Nt.z*R.transmissionResolutionScale,Nt.w*R.transmissionResolutionScale);let At=R.getRenderTarget(),Ut=R.getActiveCubeFace(),zt=R.getActiveMipmapLevel();R.setRenderTarget(Ct),R.getClearColor(ut),pt=R.getClearAlpha(),pt<1&&R.setClearColor(16777215,.5),R.clear(),Gt&&Kt.render(q);let Jt=R.toneMapping;R.toneMapping=Nn;let ee=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),S.setupLightsView($),it===!0&&$t.setGlobalState(R.clippingPlanes,$),To(E,q,$),Y.updateMultisampleRenderTarget(Ct),Y.updateRenderTargetMipmap(Ct),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let de=0,Ce=O.length;de<Ce;de++){let Ae=O[de],{object:ge,geometry:We,material:It,group:an}=Ae;if(It.side===en&&ge.layers.test($.layers)){let re=It.side;It.side=Ve,It.needsUpdate=!0,ef(ge,q,$,We,It,an),It.side=re,It.needsUpdate=!0,Vt=!0}}Vt===!0&&(Y.updateMultisampleRenderTarget(Ct),Y.updateRenderTargetMipmap(Ct))}R.setRenderTarget(At,Ut,zt),R.setClearColor(ut,pt),ee!==void 0&&($.viewport=ee),R.toneMapping=Jt}function To(E,O,q){let $=O.isScene===!0?O.overrideMaterial:null;for(let W=0,Ct=E.length;W<Ct;W++){let Nt=E[W],{object:At,geometry:Ut,group:zt}=Nt,Jt=Nt.material;Jt.allowOverride===!0&&$!==null&&(Jt=$),At.layers.test(q.layers)&&ef(At,O,q,Ut,Jt,zt)}}function ef(E,O,q,$,W,Ct){E.onBeforeRender(R,O,q,$,W,Ct),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(R,O,q,$,E,Ct),W.transparent===!0&&W.side===en&&W.forceSinglePass===!1?(W.side=Ve,W.needsUpdate=!0,R.renderBufferDirect(q,O,$,W,E,Ct),W.side=ei,W.needsUpdate=!0,R.renderBufferDirect(q,O,$,W,E,Ct),W.side=en):R.renderBufferDirect(q,O,$,W,E,Ct),E.onAfterRender(R,O,q,$,W,Ct)}function Eo(E,O,q){O.isScene!==!0&&(O=Lt);let $=G.get(E),W=S.state.lights,Ct=S.state.shadowsArray,Nt=W.state.version,At=vt.getParameters(E,W.state,Ct,O,q,S.state.lightProbeGridArray),Ut=vt.getProgramCacheKey(At),zt=$.programs;$.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,$.fog=O.fog;let Jt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;$.envMap=dt.get(E.envMap||$.environment,Jt),$.envMapRotation=$.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,zt===void 0&&(E.addEventListener("dispose",On),zt=new Map,$.programs=zt);let ee=zt.get(Ut);if(ee!==void 0){if($.currentProgram===ee&&$.lightsStateVersion===Nt)return sf(E,At),ee}else At.uniforms=vt.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,q,At),E.onBeforeCompile(At,R),ee=vt.acquireProgram(At,Ut),zt.set(Ut,ee),$.uniforms=At.uniforms;let Vt=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Vt.clippingPlanes=$t.uniform),sf(E,At),$.needsLights=sg(E),$.lightsStateVersion=Nt,$.needsLights&&(Vt.ambientLightColor.value=W.state.ambient,Vt.lightProbe.value=W.state.probe,Vt.directionalLights.value=W.state.directional,Vt.directionalLightShadows.value=W.state.directionalShadow,Vt.spotLights.value=W.state.spot,Vt.spotLightShadows.value=W.state.spotShadow,Vt.rectAreaLights.value=W.state.rectArea,Vt.ltc_1.value=W.state.rectAreaLTC1,Vt.ltc_2.value=W.state.rectAreaLTC2,Vt.pointLights.value=W.state.point,Vt.pointLightShadows.value=W.state.pointShadow,Vt.hemisphereLights.value=W.state.hemi,Vt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Vt.spotLightMatrix.value=W.state.spotLightMatrix,Vt.spotLightMap.value=W.state.spotLightMap,Vt.pointShadowMatrix.value=W.state.pointShadowMatrix),$.lightProbeGrid=S.state.lightProbeGridArray.length>0,$.currentProgram=ee,$.uniformsList=null,ee}function nf(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=js.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function sf(E,O){let q=G.get(E);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function eg(E,O){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;_.setFromMatrixPosition(O.matrixWorld);for(let q=0,$=E.length;q<$;q++){let W=E[q];if(W.texture!==null&&W.boundingBox.containsPoint(_))return W}return null}function ng(E,O,q,$,W){O.isScene!==!0&&(O=Lt),Y.resetTextureUnits();let Ct=O.fog,Nt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?O.environment:null,At=X===null?R.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ne.workingColorSpace,Ut=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,zt=dt.get($.envMap||Nt,Ut),Jt=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ee=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Vt=!!q.morphAttributes.position,de=!!q.morphAttributes.normal,Ce=!!q.morphAttributes.color,Ae=Nn;$.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ae=R.toneMapping);let ge=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,We=ge!==void 0?ge.length:0,It=G.get($),an=S.state.lights;if(it===!0&&(st===!0||E!==lt)){let Me=E===lt&&$.id===J;$t.setState($,E,Me)}let re=!1;$.version===It.__version?(It.needsLights&&It.lightsStateVersion!==an.state.version||It.outputColorSpace!==At||W.isBatchedMesh&&It.batching===!1||!W.isBatchedMesh&&It.batching===!0||W.isBatchedMesh&&It.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&It.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&It.instancing===!1||!W.isInstancedMesh&&It.instancing===!0||W.isSkinnedMesh&&It.skinning===!1||!W.isSkinnedMesh&&It.skinning===!0||W.isInstancedMesh&&It.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&It.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&It.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&It.instancingMorph===!1&&W.morphTexture!==null||It.envMap!==zt||$.fog===!0&&It.fog!==Ct||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==$t.numPlanes||It.numIntersection!==$t.numIntersection)||It.vertexAlphas!==Jt||It.vertexTangents!==ee||It.morphTargets!==Vt||It.morphNormals!==de||It.morphColors!==Ce||It.toneMapping!==Ae||It.morphTargetsCount!==We||!!It.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,It.__version=$.version);let yn=It.currentProgram;re===!0&&(yn=Eo($,O,W),L&&$.isNodeMaterial&&L.onUpdateProgram($,yn,It));let Bn=!1,yi=!1,ms=!1,xe=yn.getUniforms(),Re=It.uniforms;if(M.useProgram(yn.program)&&(Bn=!0,yi=!0,ms=!0),$.id!==J&&(J=$.id,yi=!0),It.needsLights){let Me=eg(S.state.lightProbeGridArray,W);It.lightProbeGrid!==Me&&(It.lightProbeGrid=Me,yi=!0)}if(Bn||lt!==E){M.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),xe.setValue(D,"projectionMatrix",E.projectionMatrix),xe.setValue(D,"viewMatrix",E.matrixWorldInverse);let vi=xe.map.cameraPosition;vi!==void 0&&vi.setValue(D,_t.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&xe.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&xe.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),lt!==E&&(lt=E,yi=!0,ms=!0)}if(It.needsLights&&(an.state.directionalShadowMap.length>0&&xe.setValue(D,"directionalShadowMap",an.state.directionalShadowMap,Y),an.state.spotShadowMap.length>0&&xe.setValue(D,"spotShadowMap",an.state.spotShadowMap,Y),an.state.pointShadowMap.length>0&&xe.setValue(D,"pointShadowMap",an.state.pointShadowMap,Y)),W.isSkinnedMesh){xe.setOptional(D,W,"bindMatrix"),xe.setOptional(D,W,"bindMatrixInverse");let Me=W.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),xe.setValue(D,"boneTexture",Me.boneTexture,Y))}W.isBatchedMesh&&(xe.setOptional(D,W,"batchingTexture"),xe.setValue(D,"batchingTexture",W._matricesTexture,Y),xe.setOptional(D,W,"batchingIdTexture"),xe.setValue(D,"batchingIdTexture",W._indirectTexture,Y),xe.setOptional(D,W,"batchingColorTexture"),W._colorsTexture!==null&&xe.setValue(D,"batchingColorTexture",W._colorsTexture,Y));let _i=q.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&U.update(W,q,yn),(yi||It.receiveShadow!==W.receiveShadow)&&(It.receiveShadow=W.receiveShadow,xe.setValue(D,"receiveShadow",W.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&O.environment!==null&&(Re.envMapIntensity.value=O.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=dM()),yi){if(xe.setValue(D,"toneMappingExposure",R.toneMappingExposure),It.needsLights&&ig(Re,ms),Ct&&$.fog===!0&&Ft.refreshFogUniforms(Re,Ct),Ft.refreshMaterialUniforms(Re,$,j,K,S.state.transmissionRenderTarget[E.id]),It.needsLights&&It.lightProbeGrid){let Me=It.lightProbeGrid;Re.probesSH.value=Me.texture,Re.probesMin.value.copy(Me.boundingBox.min),Re.probesMax.value.copy(Me.boundingBox.max),Re.probesResolution.value.copy(Me.resolution)}js.upload(D,nf(It),Re,Y)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(js.upload(D,nf(It),Re,Y),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&xe.setValue(D,"center",W.center),xe.setValue(D,"modelViewMatrix",W.modelViewMatrix),xe.setValue(D,"normalMatrix",W.normalMatrix),xe.setValue(D,"modelMatrix",W.matrixWorld),$.uniformsGroups!==void 0){let Me=$.uniformsGroups;for(let vi=0,gs=Me.length;vi<gs;vi++){let rf=Me[vi];ot.update(rf,yn),ot.bind(rf,yn)}}return yn}function ig(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function sg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(E,O,q){let $=G.get(E);$.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),G.get(E.texture).__webglTexture=O,G.get(E.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let q=G.get(E);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,q=0){X=E,V=O,F=q;let $=null,W=!1,Ct=!1;if(E){let At=G.get(E);if(At.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(D.FRAMEBUFFER,At.__webglFramebuffer),rt.copy(E.viewport),nt.copy(E.scissor),ft=E.scissorTest,M.viewport(rt),M.scissor(nt),M.setScissorTest(ft),J=-1;return}else if(At.__webglFramebuffer===void 0)Y.setupRenderTarget(E);else if(At.__hasExternalTextures)Y.rebindTextures(E,G.get(E.texture).__webglTexture,G.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Jt=E.depthTexture;if(At.__boundDepthTexture!==Jt){if(Jt!==null&&G.has(Jt)&&(E.width!==Jt.image.width||E.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(E)}}let Ut=E.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(Ct=!0);let zt=G.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(zt[O])?$=zt[O][q]:$=zt[O],W=!0):E.samples>0&&Y.useMultisampledRTT(E)===!1?$=G.get(E).__webglMultisampledFramebuffer:Array.isArray(zt)?$=zt[q]:$=zt,rt.copy(E.viewport),nt.copy(E.scissor),ft=E.scissorTest}else rt.copy(Pt).multiplyScalar(j).floor(),nt.copy(Wt).multiplyScalar(j).floor(),ft=xt;if(q!==0&&($=k),M.bindFramebuffer(D.FRAMEBUFFER,$)&&M.drawBuffers(E,$),M.viewport(rt),M.scissor(nt),M.setScissorTest(ft),W){let At=G.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,At.__webglTexture,q)}else if(Ct){let At=O;for(let Ut=0;Ut<E.textures.length;Ut++){let zt=G.get(E.textures[Ut]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ut,zt.__webglTexture,q,At)}}else if(E!==null&&q!==0){let At=G.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,At.__webglTexture,q)}J=-1},this.readRenderTargetPixels=function(E,O,q,$,W,Ct,Nt,At=0){if(!(E&&E.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ut=Ut[Nt]),Ut){M.bindFramebuffer(D.FRAMEBUFFER,Ut);try{let zt=E.textures[At],Jt=zt.format,ee=zt.type;if(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+At),!C.textureFormatReadable(Jt)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(ee)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-$&&q>=0&&q<=E.height-W&&D.readPixels(O,q,$,W,wt.convert(Jt),wt.convert(ee),Ct)}finally{let zt=X!==null?G.get(X).__webglFramebuffer:null;M.bindFramebuffer(D.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(E,O,q,$,W,Ct,Nt,At=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ut=Ut[Nt]),Ut)if(O>=0&&O<=E.width-$&&q>=0&&q<=E.height-W){M.bindFramebuffer(D.FRAMEBUFFER,Ut);let zt=E.textures[At],Jt=zt.format,ee=zt.type;if(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+At),!C.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Vt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Vt),D.bufferData(D.PIXEL_PACK_BUFFER,Ct.byteLength,D.STREAM_READ),D.readPixels(O,q,$,W,wt.convert(Jt),wt.convert(ee),0);let de=X!==null?G.get(X).__webglFramebuffer:null;M.bindFramebuffer(D.FRAMEBUFFER,de);let Ce=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await xd(D,Ce,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Vt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ct),D.deleteBuffer(Vt),D.deleteSync(Ce),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,q=0){let $=Math.pow(2,-q),W=Math.floor(E.image.width*$),Ct=Math.floor(E.image.height*$),Nt=O!==null?O.x:0,At=O!==null?O.y:0;Y.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,Nt,At,W,Ct),M.unbindTexture()},this.copyTextureToTexture=function(E,O,q=null,$=null,W=0,Ct=0){let Nt,At,Ut,zt,Jt,ee,Vt,de,Ce,Ae=E.isCompressedTexture?E.mipmaps[Ct]:E.image;if(q!==null)Nt=q.max.x-q.min.x,At=q.max.y-q.min.y,Ut=q.isBox3?q.max.z-q.min.z:1,zt=q.min.x,Jt=q.min.y,ee=q.isBox3?q.min.z:0;else{let Re=Math.pow(2,-W);Nt=Math.floor(Ae.width*Re),At=Math.floor(Ae.height*Re),E.isDataArrayTexture?Ut=Ae.depth:E.isData3DTexture?Ut=Math.floor(Ae.depth*Re):Ut=1,zt=0,Jt=0,ee=0}$!==null?(Vt=$.x,de=$.y,Ce=$.z):(Vt=0,de=0,Ce=0);let ge=wt.convert(O.format),We=wt.convert(O.type),It;O.isData3DTexture?(Y.setTexture3D(O,0),It=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Y.setTexture2DArray(O,0),It=D.TEXTURE_2D_ARRAY):(Y.setTexture2D(O,0),It=D.TEXTURE_2D),M.activeTexture(D.TEXTURE0),M.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),M.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),M.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);let an=M.getParameter(D.UNPACK_ROW_LENGTH),re=M.getParameter(D.UNPACK_IMAGE_HEIGHT),yn=M.getParameter(D.UNPACK_SKIP_PIXELS),Bn=M.getParameter(D.UNPACK_SKIP_ROWS),yi=M.getParameter(D.UNPACK_SKIP_IMAGES);M.pixelStorei(D.UNPACK_ROW_LENGTH,Ae.width),M.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ae.height),M.pixelStorei(D.UNPACK_SKIP_PIXELS,zt),M.pixelStorei(D.UNPACK_SKIP_ROWS,Jt),M.pixelStorei(D.UNPACK_SKIP_IMAGES,ee);let ms=E.isDataArrayTexture||E.isData3DTexture,xe=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let Re=G.get(E),_i=G.get(O),Me=G.get(Re.__renderTarget),vi=G.get(_i.__renderTarget);M.bindFramebuffer(D.READ_FRAMEBUFFER,Me.__webglFramebuffer),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let gs=0;gs<Ut;gs++)ms&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(E).__webglTexture,W,ee+gs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(O).__webglTexture,Ct,Ce+gs)),D.blitFramebuffer(zt,Jt,Nt,At,Vt,de,Nt,At,D.DEPTH_BUFFER_BIT,D.NEAREST);M.bindFramebuffer(D.READ_FRAMEBUFFER,null),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||G.has(E)){let Re=G.get(E),_i=G.get(O);M.bindFramebuffer(D.READ_FRAMEBUFFER,z),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,N);for(let Me=0;Me<Ut;Me++)ms?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.__webglTexture,W,ee+Me):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Re.__webglTexture,W),xe?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_i.__webglTexture,Ct,Ce+Me):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_i.__webglTexture,Ct),W!==0?D.blitFramebuffer(zt,Jt,Nt,At,Vt,de,Nt,At,D.COLOR_BUFFER_BIT,D.NEAREST):xe?D.copyTexSubImage3D(It,Ct,Vt,de,Ce+Me,zt,Jt,Nt,At):D.copyTexSubImage2D(It,Ct,Vt,de,zt,Jt,Nt,At);M.bindFramebuffer(D.READ_FRAMEBUFFER,null),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else xe?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(It,Ct,Vt,de,Ce,Nt,At,Ut,ge,We,Ae.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(It,Ct,Vt,de,Ce,Nt,At,Ut,ge,Ae.data):D.texSubImage3D(It,Ct,Vt,de,Ce,Nt,At,Ut,ge,We,Ae):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ct,Vt,de,Nt,At,ge,We,Ae.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ct,Vt,de,Ae.width,Ae.height,ge,Ae.data):D.texSubImage2D(D.TEXTURE_2D,Ct,Vt,de,Nt,At,ge,We,Ae);M.pixelStorei(D.UNPACK_ROW_LENGTH,an),M.pixelStorei(D.UNPACK_IMAGE_HEIGHT,re),M.pixelStorei(D.UNPACK_SKIP_PIXELS,yn),M.pixelStorei(D.UNPACK_SKIP_ROWS,Bn),M.pixelStorei(D.UNPACK_SKIP_IMAGES,yi),Ct===0&&O.generateMipmaps&&D.generateMipmap(It),M.unbindTexture()},this.initRenderTarget=function(E){G.get(E).__webglFramebuffer===void 0&&Y.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Y.setTextureCube(E,0):E.isData3DTexture?Y.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Y.setTexture2DArray(E,0):Y.setTexture2D(E,0),M.unbindTexture()},this.resetState=function(){V=0,F=0,X=null,M.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var ep={type:"change"},Oh={type:"start"},ip={type:"end"},Nl=new ts,np=new vn,pM=Math.cos(70*li.DEG2RAD),ke=new I,rn=2*Math.PI,pe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fh=1e-6,Dl=class extends qr{constructor(t,e=null){super(t,e),this.state=pe.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Di.ROTATE,MIDDLE:Di.DOLLY,RIGHT:Di.PAN},this.touches={ONE:Ui.ROTATE,TWO:Ui.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Qe,this._lastTargetPosition=new I,this._quat=new Qe().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xs,this._sphericalDelta=new Xs,this._scale=1,this._panOffset=new I,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new I,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gM.bind(this),this._onPointerDown=mM.bind(this),this._onPointerUp=xM.bind(this),this._onContextMenu=wM.bind(this),this._onMouseWheel=vM.bind(this),this._onKeyDown=MM.bind(this),this._onTouchStart=bM.bind(this),this._onTouchMove=SM.bind(this),this._onMouseDown=yM.bind(this),this._onMouseMove=_M.bind(this),this._interceptControlDown=TM.bind(this),this._interceptControlUp=EM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ep),this.update(),this.state=pe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;ke.copy(e).sub(this.target),ke.applyQuaternion(this._quat),this._spherical.setFromVector3(ke),this.autoRotate&&this.state===pe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=rn:i>Math.PI&&(i-=rn),s<-Math.PI?s+=rn:s>Math.PI&&(s-=rn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ke.setFromSpherical(this._spherical),ke.applyQuaternion(this._quatInverse),e.copy(this.target).add(ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=ke.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Nl.origin.copy(this.object.position),Nl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Nl.direction))<pM?this.object.lookAt(this.target):(np.setFromNormalAndCoplanarPoint(this.object.up,this.target),Nl.intersectPlane(np,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Fh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fh||this._lastTargetPosition.distanceToSquared(this.target)>Fh?(this.dispatchEvent(ep),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?rn/60*this.autoRotateSpeed*t:rn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ke.setFromMatrixColumn(e,0),ke.multiplyScalar(-t),this._panOffset.add(ke)}_panUp(t,e){this.screenSpacePanning===!0?ke.setFromMatrixColumn(e,1):(ke.setFromMatrixColumn(e,0),ke.crossVectors(this.object.up,ke)),ke.multiplyScalar(t),this._panOffset.add(ke)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ke.copy(s).sub(this.target);let r=ke.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function mM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function gM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function xM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ip),this.state=pe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function yM(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Di.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=pe.DOLLY;break;case Di.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pe.ROTATE}break;case Di.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pe.PAN}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(Oh)}function _M(n){switch(this.state){case pe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case pe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function vM(n){this.enabled===!1||this.enableZoom===!1||this.state!==pe.NONE||(n.preventDefault(),this.dispatchEvent(Oh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ip))}function MM(n){this.enabled!==!1&&this._handleKeyDown(n)}function bM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ui.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=pe.TOUCH_ROTATE;break;case Ui.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=pe.TOUCH_PAN;break;default:this.state=pe.NONE}break;case 2:switch(this.touches.TWO){case Ui.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=pe.TOUCH_DOLLY_PAN;break;case Ui.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=pe.TOUCH_DOLLY_ROTATE;break;default:this.state=pe.NONE}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(Oh)}function SM(n){switch(this._trackPointer(n),this.state){case pe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case pe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case pe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case pe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=pe.NONE}}function wM(n){this.enabled!==!1&&n.preventDefault()}function TM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function EM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ul=class extends Hn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new ri;t.deleteAttribute("uv");let e=new bn({side:Ve}),i=new bn,s=new $r(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ae(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Er(t,i,6),a=new Ue;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new ae(t,er(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ae(t,er(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new ae(t,er(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new ae(t,er(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new ae(t,er(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new ae(t,er(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function er(n){return new zr({color:0,emissive:16777215,emissiveIntensity:n})}import Gb from"../vendor/tesseract/tesseract.esm.min.js";var Bh={3:.5,4:.7,5:.8,6:1,8:1.25,10:1.5,12:1.75,14:2,16:2,18:2.5,20:2.5,22:2.5,24:3,27:3,30:3.5,33:3.5,36:4,39:4,42:4.5,45:4.5,48:5};function kh(n){let t=/^M\s*(\d+(?:\.\d+)?)\s*(?:[x×X]\s*(\d+(?:\.\d+)?))?\s*(?:-?\s*(\d[a-zA-Z]{1,2}))?/.exec(String(n||"").trim());if(!t)return null;let e=Number(t[1]),i=t[2]?Number(t[2]):Bh[e]||null;return{nominal:e,pitch:i,cls:t[3]||null,fine:!!t[2]&&Bh[e]!==i}}var AM={1:2.12,1.6:3.35,2:4.25,2.5:5.3,3.15:6.7,4:8.5,5:10.6,6.3:13.2,8:17};function zh(n){let t=AM[n]||+(2.12*n).toFixed(2);return{d:n,D:t,pilot_depth:+(2*n).toFixed(2),cone_depth:+((t-n)/2/Math.tan(Math.PI/6)).toFixed(3)}}var CM={S45C:7.85,SM45C:7.85,SCM440:7.85,SCM415:7.85,SNCM439:7.85,SS400:7.85,SUJ2:7.81,"S45C-H":7.85,SUS304:7.93,SUS303:7.93,SUS316:7.98,SUS420J2:7.75,SUS440C:7.68,A6061:2.7,A7075:2.81,AL6061:2.7,"AL6061-T6":2.7,A5052:2.68,C3604:8.5,C2801:8.4,\uD669\uB3D9:8.5,\uCCAD\uB3D9:8.8,C5191:8.8,PBC2:8.8,POM:1.41,MC\uB098\uC77C\uB860:1.16,PEEK:1.32,PTFE:2.2};function sp(n){if(!n)return 7.85;let t=String(n).replace(/\s+/g,"").toUpperCase();for(let[e,i]of Object.entries(CM))if(e.toUpperCase()===t)return i;return/SUS|STS|스테인리스/i.test(t)?7.93:/AL|A[567]\d{3}|알루미늄/i.test(t)?2.7:/C\d{4}|황동|BRASS/i.test(t)?8.5:/POM|나일론|PA|PEEK|PTFE|수지/i.test(t)?1.4:7.85}var rp="vringon-shaft/1.0",ci=(n,t={})=>({type:"number",description:n,...t}),Ne=(n,t={})=>({type:"number",exclusiveMinimum:0,description:n,...t}),ce=(n,t={})=>({type:"string",description:n,...t}),RM=n=>({...n,type:[n.type,"null"]}),PM=["cyl","taper","thread"],IM=["chamfer","fillet","round","undercut"],LM=["snap_ring","relief","o_ring","generic"],NM=["keyway","center_hole","cross_hole","flat","hex","knurl","hex_socket"],DM=["shaft","bushing","pin","roller","spacer","flange","sleeve","spindle","other"],lT={$schema:"http://json-schema.org/draft-07/schema#",$id:"https://vringon.ai/schema/shaft_dsl.schema.json",title:"VRINGON \uD68C\uC804\uCCB4 DSL",description:"\uD68C\uC804\uCCB4 \uBD80\uD488 \uD558\uB098. \uC138\uADF8\uBA3C\uD2B8(\uCD95 \uBC29\uD5A5 \uC678\uD615) + \uC804\uC774(\uBAA8\uC11C\uB9AC) + \uD648 + \uBCF4\uC5B4(\uB0B4\uACBD) + \uBE44\uCD95\uB300\uCE6D \uD53C\uCC98.",type:"object",additionalProperties:!1,required:["dsl","segments"],properties:{dsl:ce("DSL \uBC84\uC804 \uD0DC\uADF8. \uD56D\uC0C1 'vringon-shaft/1.0'.",{const:rp}),id:ce("\uC2AC\uB7EC\uADF8 \uC2DD\uBCC4\uC790 (\uC608: stepped-shaft-01)."),name:ce("\uC601\uBB38 \uBD80\uD488\uBA85."),name_ko:ce("\uD55C\uAE00 \uBD80\uD488\uBA85."),part_class:ce("\uBD80\uD488 \uBD84\uB958.",{enum:DM}),units:ce("\uAE38\uC774 \uB2E8\uC704. mm \uACE0\uC815.",{enum:["mm"]}),material:ce("\uC7AC\uC9C8 (\uC608: S45C, SUS304, A6061)."),drawing:{type:"object",additionalProperties:!1,description:"\uB3C4\uBA74 \uBA54\uD0C0 (\uD45C\uC81C\uB780).",properties:{number:ce("\uB3C4\uBC88."),scale:ce("\uCC99\uB3C4 (\uC608: 1:1)."),projection:ce("\uD22C\uC0C1\uBC95.",{enum:["third","first"]}),notes:{type:"array",items:{type:"string"},description:"\uC77C\uBC18 \uC8FC\uAE30."}}},segments:{type:"array",minItems:1,maxItems:24,description:"\uC67C\uCABD\uBD80\uD130 \uC624\uB978\uCABD\uC73C\uB85C \uC774\uC5B4\uC9C0\uB294 \uC678\uD615 \uC138\uADF8\uBA3C\uD2B8. \uAE38\uC774\uC758 \uD569\uC774 \uC804\uCCB4 \uAE38\uC774.",items:{type:"object",additionalProperties:!1,required:["type","length"],properties:{type:ce("cyl=\uC6D0\uD1B5, taper=\uD14C\uC774\uD37C(\uC6D0\uCD94), thread=\uC218\uB098\uC0AC(\uD638\uCE6D\uACBD=diameter).",{enum:PM}),length:Ne("\uCD95 \uBC29\uD5A5 \uAE38\uC774 (mm)."),diameter:Ne("cyl\xB7thread \uC758 \uC9C0\uB984 (mm). thread \uB294 \uD638\uCE6D\uACBD(\uBC14\uAE65\uC9C0\uB984)."),d_start:Ne("taper \uC2DC\uC791(\uC67C\uCABD) \uC9C0\uB984 (mm)."),d_end:Ne("taper \uB05D(\uC624\uB978\uCABD) \uC9C0\uB984 (mm)."),spec:ce("thread \uD638\uCE6D (\uC608: M20x1.5, M12). \uD53C\uCE58 \uC0DD\uB7B5 \uC2DC \uBCF4\uD1B5\uB098\uC0AC."),pitch:Ne("thread \uD53C\uCE58 (mm). spec \uC5D0\uC11C \uC720\uB3C4\uB418\uBA74 \uC0DD\uB7B5 \uAC00\uB2A5."),hand:ce("\uB098\uC0AC \uBC29\uD5A5.",{enum:["right","left"]}),tolerance:ce("\uCE58\uC218 \uACF5\uCC28 \uD45C\uAE30 (\uC608: h6, k6, \xB10.05, -0.013/-0.028)."),roughness:ce("\uD45C\uBA74 \uAC70\uCE60\uAE30 \uD45C\uAE30 (\uC608: Ra 0.8)."),label:ce("\uC6A9\uB3C4 \uB77C\uBCA8 (\uC608: \uBCA0\uC5B4\uB9C1 \uC790\uB9AC, \uAE30\uC5B4 \uC790\uB9AC).")}}},transitions:{type:"array",maxItems:48,description:"\uACBD\uACC4(\uB05D\uBA74\xB7\uB2E8\uCC28)\uC758 \uBAA8\uC11C\uB9AC \uCC98\uB9AC. at=0 \uC67C\uCABD \uB05D, at=n \uC624\uB978\uCABD \uB05D, at=k \uB294 \uC138\uADF8\uBA3C\uD2B8 k-1|k \uB2E8\uCC28.",items:{type:"object",additionalProperties:!1,required:["at","type"],properties:{at:{type:"integer",minimum:0,description:"\uACBD\uACC4 \uBC88\uD638."},type:ce("chamfer=\uBCFC\uB85D \uBAA8\uC11C\uB9AC \uBAA8\uB530\uAE30, fillet=\uB2E8\uCC28 \uC624\uBAA9 \uBAA8\uC11C\uB9AC \uD544\uB81B, round=\uBCFC\uB85D \uBAA8\uC11C\uB9AC \uB77C\uC6B4\uB4DC, undercut=\uB2E8\uCC28 \uB3C4\uD53C\uD648.",{enum:IM}),size:Ne("chamfer \uCD95 \uBC29\uD5A5 \uAE38\uC774 C (mm)."),angle:ci("chamfer \uAC01\uB3C4(\uCD95 \uAE30\uC900, \uB3C4). \uAE30\uBCF8 45.",{minimum:5,maximum:85}),radius:Ne("fillet\xB7round \uBC18\uACBD R (mm)."),width:Ne("undercut \uD3ED (mm)."),depth:Ne("undercut \uAE4A\uC774 (mm, \uBC18\uACBD \uBC29\uD5A5)."),standard:ce("\uADDC\uACA9 \uD45C\uAE30 (\uC608: DIN 76-A, DIN 509-E).")}}},grooves:{type:"array",maxItems:24,description:"\uC138\uADF8\uBA3C\uD2B8 \uC548\uC758 \uD658\uD615 \uD648 (\uBA48\uCDA4\uB9C1 \uD648\xB7\uC624\uB9C1 \uD648 \uB4F1). \uD68C\uC804 \uB300\uCE6D.",items:{type:"object",additionalProperties:!1,required:["segment","offset","width","depth"],properties:{segment:{type:"integer",minimum:0,description:"\uC138\uADF8\uBA3C\uD2B8 \uC778\uB371\uC2A4."},offset:ci("\uC138\uADF8\uBA3C\uD2B8 \uC67C\uCABD \uC2DC\uC791\uC5D0\uC11C \uD648 \uC67C\uCABD \uBCBD\uAE4C\uC9C0 (mm).",{minimum:0}),width:Ne("\uD648 \uD3ED (mm)."),depth:Ne("\uD648 \uAE4A\uC774 (mm, \uBC18\uACBD \uBC29\uD5A5)."),kind:ce("\uD648 \uC885\uB958.",{enum:LM}),corner_radius:ci("\uD648 \uBC14\uB2E5 \uBAA8\uC11C\uB9AC R (mm).",{minimum:0}),standard:ce("\uADDC\uACA9 \uD45C\uAE30 (\uC608: DIN 471 \u230019\xD71.3).")}}},bore:RM({type:"object",additionalProperties:!1,required:["segments"],description:"\uCD95 \uC911\uC2EC \uBCF4\uC5B4(\uB0B4\uACBD). \uC5C6\uC73C\uBA74 null. through \uBA74 \uC138\uADF8\uBA3C\uD2B8 \uAE38\uC774 \uD569 = \uC804\uCCB4 \uAE38\uC774.",properties:{through:{type:"boolean",description:"\uAD00\uD1B5 \uC5EC\uBD80."},from:ce("\uB9C9\uD78C \uBCF4\uC5B4\uC758 \uC2DC\uC791 \uB05D\uBA74.",{enum:["left","right"]}),segments:{type:"array",minItems:1,maxItems:12,items:{type:"object",additionalProperties:!1,required:["length","diameter"],properties:{length:Ne("\uBCF4\uC5B4 \uC138\uADF8\uBA3C\uD2B8 \uAE38\uC774 (mm)."),diameter:Ne("\uBCF4\uC5B4 \uC9C0\uB984 (mm)."),tolerance:ce("\uACF5\uCC28 \uD45C\uAE30 (\uC608: H7)."),thread:ce("\uC554\uB098\uC0AC \uD638\uCE6D (\uC608: M8). \uC788\uC73C\uBA74 \uC774 \uBCF4\uC5B4 \uC138\uADF8\uBA3C\uD2B8\uAC00 \uD0ED \uAD6C\uBA4D.")}}},chamfer_left:ci("\uC67C\uCABD \uC785\uAD6C \uBAA8\uB530\uAE30 C (mm).",{minimum:0}),chamfer_right:ci("\uC624\uB978\uCABD \uC785\uAD6C \uBAA8\uB530\uAE30 C (mm).",{minimum:0})}}),features:{type:"array",maxItems:24,description:"\uBE44\uCD95\uB300\uCE6D\xB7\uAD6D\uBD80 \uD53C\uCC98. type \uC5D0 \uB530\uB77C \uC4F0\uB294 \uD544\uB4DC\uAC00 \uB2E4\uB974\uB2E4.",items:{type:"object",additionalProperties:!1,required:["type"],properties:{type:ce("keyway=\uD0A4\uD648, center_hole=\uC13C\uD130\uAD6C\uBA4D, cross_hole=\uD6A1\uAD6C\uBA4D, flat=\uD3C9\uBA74\uAC00\uACF5(D\uCEF7), hex=\uC721\uAC01, knurl=\uB110\uB9C1, hex_socket=\uB05D\uBA74 \uC721\uAC01 \uC18C\uCF13(\uB80C\uCE58 \uAD6C\uBA4D).",{enum:NM}),segment:{type:"integer",minimum:0,description:"keyway\xB7flat\xB7hex\xB7knurl \uC774 \uB193\uC774\uB294 \uC138\uADF8\uBA3C\uD2B8."},offset:ci("\uC138\uADF8\uBA3C\uD2B8 \uC2DC\uC791\uC5D0\uC11C \uD53C\uCC98 \uC2DC\uC791\uAE4C\uC9C0 (mm).",{minimum:0}),length:Ne("keyway\xB7flat\xB7knurl \uAE38\uC774 (mm)."),width:Ne("keyway \uD3ED b (mm)."),depth:Ne("keyway \uAE4A\uC774 t1 \xB7 flat \uAE4A\uC774 \xB7 hex_socket \uAE4A\uC774 (mm)."),angle:ci("\uB458\uB808 \uAC01\uB3C4 (\uB3C4). 0=\uC815\uBA74(+Z), 90=\uC704(+Y).",{minimum:0,maximum:360}),kind:ce("keyway \uD615\uC2DD.",{enum:["parallel","woodruff"]}),end:ce("center_hole\xB7hex_socket \uC774 \uC788\uB294 \uB05D\uBA74.",{enum:["left","right"]}),form:ce("center_hole \uD615\uC2DD (DIN 332).",{enum:["A","B","R"]}),d:Ne("center_hole \uD30C\uC77C\uB7FF \uC9C0\uB984 (mm)."),position:ci("cross_hole \uC911\uC2EC\uC758 x \uC704\uCE58 (\uC67C\uCABD \uB05D \uAE30\uC900, mm).",{minimum:0}),diameter:Ne("cross_hole \uC9C0\uB984 (mm)."),through:{type:"boolean",description:"cross_hole \uAD00\uD1B5 \uC5EC\uBD80."},count:{type:"integer",minimum:1,maximum:2,description:"flat \uAC1C\uC218 (2=\uB9C8\uC8FC\uBCF4\uB294 \uB450 \uBA74)."},across_flats:Ne("hex\xB7hex_socket \uB300\uBCC0 \uAC70\uB9AC (mm)."),pitch:Ne("knurl \uD53C\uCE58 (mm)."),pattern:ce("knurl \uBB34\uB2AC.",{enum:["straight","diamond"]}),standard:ce("\uADDC\uACA9 \uD45C\uAE30 (\uC608: DIN 6885 8\xD77, DIN 332-A2.5).")}}},meta:{type:"object",additionalProperties:!0,description:"\uCD9C\uCC98\xB7\uC2E0\uB8B0\uB3C4 \uB4F1 \uBA54\uD0C0. \uAE30\uD558\uC5D0 \uC601\uD5A5 \uC5C6\uC74C.",properties:{source:ce("golden | synthetic | extracted | edited"),confidence:ci("\uD310\uB3C5 \uC2E0\uB8B0\uB3C4 0~1.",{minimum:0,maximum:1}),notes:{type:"array",items:{type:"string"}},generator:ce("\uC0DD\uC131 \uB3C4\uAD6C/\uBC84\uC804."),seed:{type:"integer"},archetype:ce("\uC0D8\uD50C\uB7EC \uC544\uD0A4\uD0C0\uC785."),valid:{type:"boolean"}}}}};function zi(n){if(n.type==="taper")return[n.d_start,n.d_end];let t=n.diameter;if(!(t>0)&&n.type==="thread"){let e=kh(n.spec);e&&(t=e.nominal)}return[t,t]}function cs(n){return(n.segments||[]).reduce((t,e)=>t+(Number(e.length)||0),0)}function Vh(n){let t=0;for(let e of n.segments||[])for(let i of zi(e))Number.isFinite(i)&&(t=Math.max(t,i));return t}function Hh(n){let t=[],e=0;for(let i of n.segments||[])t.push([e,e+i.length]),e+=i.length;return t}function Gh(n,t){let e=Hh(n);for(let i=0;i<e.length;i++){let[s,r]=e[i];if(t>=s-1e-9&&t<=r+1e-9){let o=n.segments[i];return o.type==="taper"?o.d_start+(o.d_end-o.d_start)*Math.min(1,Math.max(0,(t-s)/(r-s))):o.diameter}}return 0}function $h(n,t){let e=n.bore;if(!e||!e.segments?.length)return 0;let i=cs(n),s=!e.through&&e.from==="right",r=s?i:0;for(let o of e.segments){let a=s?r-o.length:r,l=s?r:r+o.length;if(t>=a-1e-9&&t<=l+1e-9)return o.diameter;r=s?a:l}return 0}function Fl(n,t=110){let{width:e,height:i,data:s}=n,r=new Uint8Array(e*i);for(let o=0,a=0;o<e*i;o++,a+=4){if(s[a+3]<40)continue;.299*s[a]+.587*s[a+1]+.114*s[a+2]<t&&(r[o]=1)}return{w:e,h:i,mask:r}}function Ol(n,t,e){let i=new Uint8Array(t*e);for(let s=1;s<e-1;s++)for(let r=1;r<t-1;r++){let o=s*t+r;n[o]&&n[o-1]&&n[o+1]&&n[o-t]&&n[o+t]&&(i[o]=1)}return i}function op(n,t,e){let i=new Uint8Array(t*e);for(let s=1;s<e-1;s++)for(let r=1;r<t-1;r++){let o=s*t+r;(n[o]||n[o-1]||n[o+1]||n[o-t]||n[o+t])&&(i[o]=1)}return i}function ap(n,t,e,i=6){let s=new Int32Array(t*e),r=[],o=new Int32Array(t*e),a=1;for(let l=0;l<t*e;l++){if(!n[l]||s[l])continue;let c=0;o[c++]=l,s[l]=a;let h=0,u=t,f=0,d=e,g=0,y=0,p=0;for(;c;){let m=o[--c];h++;let T=m%t,w=(m-T)/t;T<u&&(u=T),T>f&&(f=T),w<d&&(d=w),w>g&&(g=w),y+=T,p+=w,T>0&&n[m-1]&&!s[m-1]&&(s[m-1]=a,o[c++]=m-1),T<t-1&&n[m+1]&&!s[m+1]&&(s[m+1]=a,o[c++]=m+1),w>0&&n[m-t]&&!s[m-t]&&(s[m-t]=a,o[c++]=m-t),w<e-1&&n[m+t]&&!s[m+t]&&(s[m+t]=a,o[c++]=m+t)}h>=i&&r.push({id:a,n:h,x0:u,x1:f,y0:d,y1:g,w:f-u+1,h:g-d+1,cx:y/h,cy:p/h}),a++}return{label:s,comps:r}}function Bl(n){return n<=2?0:n<=6?1:n<=9?2:3}function kl(n,t,e){let i=new Array(12).fill(0);for(let o=0;o<e;o+=2){let a=0;for(let l=0;l<t;l++)n[o*t+l]?a++:(a>0&&a<12&&i[a]++,a=0)}let s=1,r=-1;for(let o=1;o<12;o++)i[o]*o>r&&(r=i[o]*o,s=o);return s}function hp(n,t={}){let e=n.width,i=n.height,{mask:s}=Fl(n,t.threshold??105),r=Bl(kl(s,e,i)),o=s;for(let p=0;p<r;p++)o=Ol(o,e,i);let{label:a,comps:l}=ap(o,e,i,8),c=l.filter(p=>p.w>e*.85&&p.h>i*.85),h=l.filter(p=>!c.includes(p)&&p.n>=Math.max(40,e*i*2e-5)&&p.w>=10&&p.h>=6);if(!h.length)return{ok:!1,views:[],reason:"\uB3C4\uBA74\uC5D0\uC11C \uD615\uC0C1\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4"};let u=Math.max(12,e*(t.gap??.035)),f=h.map((p,m)=>m),d=p=>f[p]===p?p:f[p]=d(f[p]);for(let p=0;p<h.length;p++)for(let m=p+1;m<h.length;m++){let T=h[p],w=h[m],_=Math.max(0,Math.max(T.x0,w.x0)-Math.min(T.x1,w.x1)),v=Math.max(0,Math.max(T.y0,w.y0)-Math.min(T.y1,w.y1));_<u&&v<u&&(f[d(p)]=d(m))}let g=new Map;h.forEach((p,m)=>{let T=d(m);g.has(T)||g.set(T,[]),g.get(T).push(p)});let y=[];for(let p of g.values()){let m=Math.min(...p.map(P=>P.x0)),T=Math.max(...p.map(P=>P.x1)),w=Math.min(...p.map(P=>P.y0)),_=Math.max(...p.map(P=>P.y1)),v=T-m+1,S=_-w+1;if(v<e*.05||S<i*.025)continue;let b=p.reduce((P,L)=>P+L.n,0),x=p.reduce((P,L)=>L.w*L.h>P.w*P.h?L:P),A={x0:x.x0,y0:x.y0,x1:x.x1,y1:x.y1,W:x.w,H:x.h,comp:x},R={id:y.length+1,x0:m,y0:w,x1:T,y1:_,W:v,H:S,ink:b,part:A,comps:p,ids:new Set(p.map(P=>P.id)),label:a,imgW:e,imgH:i,cx(){return(this.part.x0+this.part.x1)/2},cy(){return(this.part.y0+this.part.y1)/2}};Object.assign(R,UM(R)),R.revolveScore=FM(R),y.push(R)}return y.sort((p,m)=>m.ink-p.ink),y.forEach((p,m)=>p.id=m+1),{ok:y.length>0,views:y,w:e,h:i,label:a}}function UM(n){let{label:t,imgW:e}=n,i=n.W,s=new Float64Array(i).fill(1/0),r=new Float64Array(i).fill(-1/0);for(let v=n.y0;v<=n.y1;v++)for(let S=n.x0;S<=n.x1;S++){if(!n.ids.has(t[v*e+S]))continue;let b=S-n.x0;v<s[b]&&(s[b]=v),v>r[b]&&(r[b]=v)}let o=[];for(let v=0;v<i;v++)Number.isFinite(s[v])&&o.push((s[v]+r[v])/2);o.sort((v,S)=>v-S);let a=o.length?o[Math.floor(o.length/2)]:(n.y0+n.y1)/2,l=new Float64Array(i),c=new Float64Array(i),h=new Uint8Array(i),u=0;for(let v=0;v<i;v++)Number.isFinite(s[v])&&(h[v]=1,l[v]=Math.max(0,a-s[v]),c[v]=Math.max(0,r[v]-a),u=Math.max(u,l[v],c[v]));let f=u*.04,d=0,g=0,y=0,p=0,m=0,T=NaN,w=0,_=0;for(let v=0;v<i;v++){if(!h[v])continue;l[v]>f&&c[v]>f&&(d++,g+=Math.abs(l[v]-c[v]),y+=Math.max(l[v],c[v]));let S=Math.max(l[v],c[v]);Number.isFinite(T)&&(m++,Math.abs(S-T)<=Math.max(1,u*.004)&&p++),T=S;let b=(v+.5)/i*2-1;w+=Math.abs(S-u*Math.sqrt(Math.max(0,1-b*b))),_+=u}return{axis:a,rTop:l,rBot:c,hasCol:h,rmax:u,signals:{both:d/i,asym:d?g/y:1,flat:m?p/m:0,aspect:i/Math.max(1,n.H),circleErr:_?w/_:1}}}function FM(n){let t=n.signals;return+((1-Math.min(1,t.asym/.25))*.45+Math.min(1,t.flat/.8)*.3+Math.min(1,t.aspect/2)*.15+Math.min(1,t.both/.8)*.1).toFixed(3)}function up(n,t=400){let e=new Float64Array(t);for(let s=0;s<t;s++){let r=Math.min(n.W-1,Math.floor((s+.5)*n.W/t));e[s]=n.hasCol[r]?(n.rTop[r]+n.rBot[r])/2:0}let i=-1;for(let s=0;s<t;s++)if(e[s]>0){if(i>=0&&s-i>1)for(let r=i+1;r<s;r++)e[r]=e[i]+(e[s]-e[i])*(r-i)/(s-i);i=s}return e}function fp(n,t={}){let e=n.part?.comp||n.comps.reduce((l,c)=>c.w*c.h>l.w*l.h?c:l),i=lp(n,e),s=i?cp(i,i.solid,e):null;if(!s||s.length<3)return{outer:null,holes:[],ignored:[]};let r=[],o=[],a=t.minHole??.025;for(let l of n.comps){if(l===e)continue;let c=l.x0>e.x0&&l.x1<e.x1&&l.y0>e.y0&&l.y1<e.y1,h=l.w>=e.w*a&&l.h>=e.h*a,u=l.w<e.w*.9&&l.h<e.h*.9;if(!(c&&h&&u))continue;let f=lp(n,l);if(!f||f.cavityRatio<.45)continue;let d=cp(f,f.cavity,e);if(!d||d.length<6)continue;let g=Math.abs(OM(d)),y=l.w*l.h;if(g/y>.9){o.push({kind:"inner-edge",w:l.w,h:l.h});continue}r.push(d)}return{outer:s,holes:r,ignored:o}}function lp(n,t){let e=n.imgW,i=n.label,s=t.id,r=t.w+2,o=t.h+2,a=t.x0-1,l=t.y0-1,c=new Uint8Array(r*o),h=new Uint8Array(r*o);for(let y=0;y<o;y++)for(let p=0;p<r;p++){let m=a+p,T=l+y;m>=0&&T>=0&&m<e&&T<n.imgH&&i[T*e+m]===s&&(c[y*r+p]=1)}let u=[];for(let y=0;y<r;y++)u.push(y,(o-1)*r+y);for(let y=0;y<o;y++)u.push(y*r,y*r+r-1);for(;u.length;){let y=u.pop();if(h[y]||c[y])continue;h[y]=1;let p=y%r,m=(y-p)/r;p>0&&u.push(y-1),p<r-1&&u.push(y+1),m>0&&u.push(y-r),m<o-1&&u.push(y+r)}let f=new Uint8Array(r*o),d=new Uint8Array(r*o),g=0;for(let y=0;y<r*o;y++)!c[y]&&!h[y]&&(f[y]=1,g++),d[y]=c[y]||f[y];return{W:r,H:o,ox:a,oy:l,ink:c,cavity:f,solid:d,cavityRatio:g/(r*o)}}function cp(n,t,e){let{W:i,H:s,ox:r,oy:o}=n,a=(v,S)=>v>=0&&S>=0&&v<i&&S<s?t[S*i+v]:0,l=-1,c=-1;t:for(let v=0;v<s;v++)for(let S=0;S<i;S++)if(a(S,v)){l=S,c=v;break t}if(l<0)return null;let h=[[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]],u=[],f=l,d=c,g=6,y=0,p=(i+s)*12+4e3;do{u.push([f,d]);let v=!1;for(let S=0;S<8;S++){let b=(g+6+S)%8,x=f+h[b][0],A=d+h[b][1];if(a(x,A)){f=x,d=A,g=b,v=!0;break}}if(!v)break}while((f!==l||d!==c)&&++y<p);if(u.length<8)return null;let m=Math.max(1.2,Math.min(i,s)*.008),w=Wh(u.map(([v,S])=>({x:v,y:S})),m).map(v=>[v.x+r-e.x0,v.y+o-e.y0]),_=(v,S)=>Math.hypot(v[0]-S[0],v[1]-S[1])<2.5;for(w=w.filter((v,S)=>S===0||!_(v,w[S-1]));w.length>3&&_(w[0],w[w.length-1]);)w.pop();return w}function OM(n){let t=0;for(let e=0;e<n.length;e++){let[i,s]=n[e],[r,o]=n[(e+1)%n.length];t+=i*o-r*s}return t/2}function Wh(n,t){if(n.length<3)return n.slice();let e=n[0],i=n[n.length-1],s=-1,r=0,o=i.x-e.x,a=i.y-e.y,l=Math.hypot(o,a)||1;for(let c=1;c<n.length-1;c++){let h=n[c],u=Math.abs(a*h.x-o*h.y+i.x*e.y-i.y*e.x)/l;u>r&&(r=u,s=c)}return r>t?Wh(n.slice(0,s+1),t).slice(0,-1).concat(Wh(n.slice(s),t)):[e,i]}var zl=null;async function pp(n,t){return zl||(zl=(async()=>{let e={gzip:!0,cacheMethod:n.cacheMethod||"none",logger:n.logger||(()=>{})};n.workerPath&&(e.workerPath=n.workerPath),n.corePath&&(e.corePath=n.corePath),n.langPath&&(e.langPath=n.langPath);let i=await t("eng",1,e);return await i.setParameters({tessedit_char_whitelist:"0123456789.,-x\xD7XRC\u2300\xD8\u25A1",tessedit_pageseg_mode:"11",preserve_interword_spaces:"1"}),i})(),zl)}async function mp(n,t,{scale:e=1}={}){let{data:i}=await n.recognize(t,{},{blocks:!0}),s=[];(a=>{for(let l of a||[])for(let c of l.paragraphs||[])for(let h of c.lines||[])for(let u of h.words||[])s.push(u)})(i.blocks);let o=[];for(let a of s){let l=String(a.text||"").trim(),c=/(?:^|[^0-9.])((?:\d+\.\d+)|(?:\d+))(?!\d)/.exec(l.replace(/,/g,"."));if(!c)continue;let h=Number(c[1]);if(!Number.isFinite(h)||h<=0||h>5e3)continue;let u=/[⌀Ø]/.test(l)?"dia":/^R/i.test(l)?"radius":/^C/i.test(l)||/-C/i.test(l)?"chamfer":/□/.test(l)?"square":"linear",f=/^(\d+)-/.exec(l),d=a.bbox;o.push({text:l,value:h,kind:u,count:f?Number(f[1]):1,conf:a.confidence,x0:d.x0/e,y0:d.y0/e,x1:d.x1/e,y1:d.y1/e,cx:(d.x0+d.x1)/2/e,cy:(d.y0+d.y1)/2/e})}return o}function BM(n,t={}){let e=n.width,i=n.height,{mask:s}=Fl(n,t.threshold??110),r=kl(s,e,i),o=Bl(r),a=s;for(let v=0;v<o;v++)a=Ol(a,e,i);let l=a;for(let v=0;v<o+1;v++)l=op(l,e,i);let c=new Uint8Array(e*i);for(let v=0;v<e*i;v++)s[v]&&!l[v]&&(c[v]=1);let h=Math.max(18,Math.round(Math.min(e,i)*(t.minLenFrac??.02))),u=[],f=[];for(let v=0;v<i;v++){let S=0;for(let b=0;b<=e;b++)b<e&&c[v*e+b]?S++:(S>=h&&u.push({x0:b-S,x1:b-1,y:v,len:S}),S=0)}for(let v=0;v<e;v++){let S=0;for(let b=0;b<=i;b++)b<i&&c[b*e+v]?S++:(S>=h&&f.push({y0:b-S,y1:b-1,x:v,len:S}),S=0)}let d=(v,S)=>{let b=S,x=S;for(;b>0&&s[(b-1)*e+v];)b--;for(;x<i-1&&s[(x+1)*e+v];)x++;return x-b+1},g=(v,S)=>{let b=v,x=v;for(;b>0&&s[S*e+b-1];)b--;for(;x<e-1&&s[S*e+x+1];)x++;return x-b+1},y=Math.max(14,r*5),p=(v,S)=>d(v,S)>=y,m=(v,S)=>g(v,S)>=y,T=Math.max(16,r*12);for(let v of u){let S=v.x0-1,b=0;for(;S>=0&&b<T&&s[v.y*e+S]&&!p(S,v.y);)S--,b++;for(v.x0=S+1,S=v.x1+1,b=0;S<e&&b<T&&s[v.y*e+S]&&!p(S,v.y);)S++,b++;v.x1=S-1,v.len=v.x1-v.x0+1}for(let v of f){let S=v.y0-1,b=0;for(;S>=0&&b<T&&s[S*e+v.x]&&!m(v.x,S);)S--,b++;for(v.y0=S+1,S=v.y1+1,b=0;S<i&&b<T&&s[S*e+v.x]&&!m(v.x,S);)S++,b++;v.y1=S-1,v.len=v.y1-v.y0+1}let w=dp(u,(v,S)=>Math.abs(v.y-S.y)<=2&&Math.abs(v.x0-S.x0)<=3&&Math.abs(v.x1-S.x1)<=3),_=dp(f,(v,S)=>Math.abs(v.x-S.x)<=2&&Math.abs(v.y0-S.y0)<=3&&Math.abs(v.y1-S.y1)<=3);return{horizontal:w,vertical:_,strokePx:r}}function dp(n,t){let e=[];for(let i of n){let s=e.find(r=>t(r,i));if(s){s.n=(s.n||1)+1;continue}e.push({...i,n:1})}return e}function kM(n,t,e={}){let i=[],s=e.near??40;for(let r of n){if(r.kind!=="linear"&&r.kind!=="square")continue;let o=null;for(let a of t.horizontal){let l=(a.x0+a.x1)/2,c=Math.abs(r.cx-l),h=a.y-r.cy;if(h<-6||h>s||c>Math.max(24,a.len*.25))continue;let u=h+c*.5;(!o||u<o.score)&&(o={score:u,len:a.len,dir:"h",line:a})}for(let a of t.vertical){let l=(a.y0+a.y1)/2,c=Math.abs(r.cy-l),h=r.cx-a.x;if(Math.abs(h)>s||c>Math.max(24,a.len*.25))continue;let u=Math.abs(h)+c*.5;(!o||u<o.score)&&(o={score:u,len:a.len,dir:"v",line:a})}o&&i.push({token:r,dir:o.dir,lenPx:o.len,mmPerPx:r.value/o.len,line:o.line})}return i}function zM(n,t=.05){if(!n.length)return{ok:!1,reason:"\uCE58\uC218 \uBB38\uC790\uC640 \uCE58\uC218\uC120\uC744 \uC9DD\uC9C0\uC744 \uC218 \uC5C6\uC5C8\uC2B5\uB2C8\uB2E4"};let e=null;for(let a of n){let l=n.filter(c=>Math.abs(c.mmPerPx-a.mmPerPx)/a.mmPerPx<=t);(!e||l.length>e.group.length)&&(e={center:a.mmPerPx,group:l})}let i=e.group.map(a=>a.mmPerPx).sort((a,l)=>a-l),s=i[Math.floor(i.length/2)],r=e.group.length,o=n.length;return{ok:r>=2||r===1&&o===1,mmPerPx:s,agree:r,total:o,confidence:r/o,used:e.group.map(a=>({text:a.token.text,value:a.token.value,lenPx:a.lenPx,dir:a.dir})),rejected:n.filter(a=>!e.group.includes(a)).map(a=>({text:a.token.text,value:a.token.value,lenPx:a.lenPx}))}}function gp(n,t){let e=BM(t),i=kM(n,e);return{...zM(i),lines:e,pairs:i,tokens:n}}var xp=1e-5,yp=0,Xh=1,Vl=2,_p=3,qh=class n{constructor(t,e){this.pos=t,this.normal=e}clone(){return new n(this.pos.clone(),this.normal.clone())}flip(){this.normal.negate()}interpolate(t,e){return new n(this.pos.clone().lerp(t.pos,e),this.normal.clone().lerp(t.normal,e).normalize())}},Yh=class n{constructor(t,e){this.normal=t,this.w=e}static fromPoints(t,e,i){let s=new I().subVectors(e,t).cross(new I().subVectors(i,t)).normalize();return new n(s,s.dot(t))}clone(){return new n(this.normal.clone(),this.w)}flip(){this.normal.negate(),this.w=-this.w}splitPolygon(t,e,i,s,r){let o=0,a=[];for(let l of t.vertices){let c=this.normal.dot(l.pos)-this.w,h=c<-xp?Vl:c>xp?Xh:yp;o|=h,a.push(h)}switch(o){case yp:(this.normal.dot(t.plane.normal)>0?e:i).push(t);break;case Xh:s.push(t);break;case Vl:r.push(t);break;case _p:{let l=[],c=[],h=t.vertices.length;for(let u=0;u<h;u++){let f=(u+1)%h,d=a[u],g=a[f],y=t.vertices[u],p=t.vertices[f];if(d!==Vl&&l.push(y),d!==Xh&&c.push(d!==Vl?y.clone():y),(d|g)===_p){let m=(this.w-this.normal.dot(y.pos))/this.normal.dot(new I().subVectors(p.pos,y.pos)),T=y.interpolate(p,m);l.push(T),c.push(T.clone())}}l.length>=3&&s.push(new ao(l,t.shared)),c.length>=3&&r.push(new ao(c,t.shared));break}}}},ao=class n{constructor(t,e){this.vertices=t,this.shared=e,this.plane=Yh.fromPoints(t[0].pos,t[1].pos,t[2].pos)}clone(){return new n(this.vertices.map(t=>t.clone()),this.shared)}flip(){this.vertices.reverse().forEach(t=>t.flip()),this.plane.flip()}},Vi=class n{constructor(t){this.plane=null,this.front=null,this.back=null,this.polygons=[],t&&this.build(t)}clone(){let t=new n;return t.plane=this.plane&&this.plane.clone(),t.front=this.front&&this.front.clone(),t.back=this.back&&this.back.clone(),t.polygons=this.polygons.map(e=>e.clone()),t}invert(){for(let e of this.polygons)e.flip();this.plane&&this.plane.flip(),this.front&&this.front.invert(),this.back&&this.back.invert();let t=this.front;this.front=this.back,this.back=t}clipPolygons(t){if(!this.plane)return t.slice();let e=[],i=[];for(let s of t)this.plane.splitPolygon(s,e,i,e,i);return this.front&&(e=this.front.clipPolygons(e)),i=this.back?this.back.clipPolygons(i):[],e.concat(i)}clipTo(t){this.polygons=t.clipPolygons(this.polygons),this.front&&this.front.clipTo(t),this.back&&this.back.clipTo(t)}allPolygons(){let t=this.polygons.slice();return this.front&&(t=t.concat(this.front.allPolygons())),this.back&&(t=t.concat(this.back.allPolygons())),t}build(t){if(!t.length)return;this.plane||(this.plane=t[Math.floor(t.length/2)].plane.clone());let e=[],i=[];for(let s of t)this.plane.splitPolygon(s,this.polygons,this.polygons,e,i);e.length&&(this.front||(this.front=new n),this.front.build(e)),i.length&&(this.back||(this.back=new n),this.back.build(i))}},lo=class n{constructor(t=[]){this.polygons=t}clone(){return new n(this.polygons.map(t=>t.clone()))}union(t){let e=new Vi(this.clone().polygons),i=new Vi(t.clone().polygons);return e.clipTo(i),i.clipTo(e),i.invert(),i.clipTo(e),i.invert(),e.build(i.allPolygons()),new n(e.allPolygons())}subtract(t){let e=new Vi(this.clone().polygons),i=new Vi(t.clone().polygons);return e.invert(),e.clipTo(i),i.clipTo(e),i.invert(),i.clipTo(e),i.invert(),e.build(i.allPolygons()),e.invert(),new n(e.allPolygons())}intersect(t){let e=new Vi(this.clone().polygons),i=new Vi(t.clone().polygons);return e.invert(),i.clipTo(e),i.invert(),e.clipTo(i),i.clipTo(e),e.build(i.allPolygons()),e.invert(),new n(e.allPolygons())}static fromGeometry(t,e=null,i=0){let s=t.index?t.toNonIndexed():t,r=s.getAttribute("position"),o=s.getAttribute("normal"),a=e?new Xt().getNormalMatrix(e):null,l=[];for(let c=0;c<r.count;c+=3){let h=[];for(let y=0;y<3;y++){let p=new I().fromBufferAttribute(r,c+y);e&&p.applyMatrix4(e);let m=o?new I().fromBufferAttribute(o,c+y):new I;a&&m.applyMatrix3(a).normalize(),h.push(new qh(p,m))}let u=h[0].pos,f=h[1].pos,d=h[2].pos,g=new I().subVectors(f,u).cross(new I().subVectors(d,u));g.lengthSq()<1e-14||(o||(g.normalize(),h.forEach(y=>y.normal.copy(g))),l.push(new ao(h,i)))}return s!==t&&s.dispose(),new n(l)}toGeometry(){let t=[],e=[],i=[],s=null,r=0;for(let a of this.polygons){let l=a.vertices;s!==null&&a.shared!==s&&(i.push([r,t.length/3-r,s]),r=t.length/3),s=a.shared;for(let c=2;c<l.length;c++)for(let h of[l[0],l[c-1],l[c]])t.push(h.pos.x,h.pos.y,h.pos.z),e.push(h.normal.x,h.normal.y,h.normal.z)}s!==null&&i.push([r,t.length/3-r,s]);let o=new Fe;o.setAttribute("position",new ye(t,3)),o.setAttribute("normal",new ye(e,3));for(let[a,l,c]of i)o.addGroup(a,l,c);return o}};var ho=[{id:"front",ko:"\uC815\uBA74\uB3C4",axis:"Z",face:"front"},{id:"top",ko:"\uC717\uBA74\uB3C4",axis:"Y",face:"top"},{id:"right",ko:"\uC6B0\uCE21\uBA74\uB3C4",axis:"X",face:"right"},{id:"left",ko:"\uC88C\uCE21\uBA74\uB3C4",axis:"X",face:"left"},{id:"bottom",ko:"\uC544\uB7AB\uBA74\uB3C4",axis:"Y",face:"bottom"},{id:"back",ko:"\uB4B7\uBA74\uB3C4",axis:"Z",face:"back"},{id:"iso",ko:"\uB4F1\uAC01 (\uCC38\uACE0)",axis:null},{id:"section",ko:"\uB2E8\uBA74 (\uCC38\uACE0)",axis:null},{id:"detail",ko:"\uC0C1\uC138 (\uCC38\uACE0)",axis:null},{id:"skip",ko:"\uC4F0\uC9C0 \uC54A\uC74C",axis:null}],Mp=Object.fromEntries(ho.map(n=>[n.id,n.ko])),VM=new Set(["front","top","right","left","bottom","back"]),hi=n=>VM.has(n);function Zh(n){return{front:["X","Y"],back:["X","Y"],top:["X","Z"],bottom:["X","Z"],right:["Z","Y"],left:["Z","Y"]}[n]||null}function Kh(n,t="third"){if(!n.length)return{};let e=a=>a.part||a,i=(a,l,c)=>{let h=e(a),u=e(l);if(c==="x"){let d=Math.max(6,Math.min(h.W,u.W)*.04);return Math.abs(h.x0-u.x0)<=d&&Math.abs(h.x1-u.x1)<=d}let f=Math.max(6,Math.min(h.H,u.H)*.04);return Math.abs(h.y0-u.y0)<=f&&Math.abs(h.y1-u.y1)<=f},s=n.map(a=>{let l=n.some(h=>h!==a&&i(a,h,"x")),c=n.some(h=>h!==a&&i(a,h,"y"));return{v:a,n:(l?1:0)+(c?1:0)}});s.sort((a,l)=>l.n-a.n||l.v.ink-a.v.ink);let r=s[0].v,o={[r.id]:"front"};for(let a of n){if(a===r)continue;let l=i(a,r,"x"),c=i(a,r,"y");if(l&&!c){let h=a.cy()<r.cy();o[a.id]=t==="third"?h?"top":"bottom":h?"bottom":"top"}else if(c&&!l){let h=a.cx()>r.cx();o[a.id]=t==="third"?h?"right":"left":h?"left":"right"}else o[a.id]="iso"}return o}function bp(n,t,e){let{X:i,Y:s,Z:r}=t;switch(n){case"front":return{to2d:(o,a)=>[o*e,s-a*e],rot:null,depth:"Z"};case"back":return{to2d:(o,a)=>[i-o*e,s-a*e],rot:null,depth:"Z"};case"top":return{to2d:(o,a)=>[o*e,-(a*e)],rot:["X",-Math.PI/2],depth:"Y"};case"bottom":return{to2d:(o,a)=>[o*e,-(r-a*e)],rot:["X",-Math.PI/2],depth:"Y"};case"right":return{to2d:(o,a)=>[-(r-o*e),s-a*e],rot:["Y",Math.PI/2],depth:"X"};case"left":return{to2d:(o,a)=>[-(o*e),s-a*e],rot:["Y",Math.PI/2],depth:"X"};default:return null}}function co(n,t){let e=0;for(let i=0;i<n.length;i++){let s=n[i],r=n[(i+1)%n.length];e+=s.x*r.y-r.x*s.y}return e>0===t?n:n.slice().reverse()}function HM(n,t,e,i,{pad:s=0}={}){let r=bp(t,i,e);if(!r||!n.contours?.outer)return null;let o=new ai(co(n.contours.outer.map(([c,h])=>new ht(...r.to2d(c,h))),!0));for(let c of n.contours.holes||[])c.length>=3&&o.holes.push(new oi(co(c.map(([h,u])=>new ht(...r.to2d(h,u))),!1)));let a=i[r.depth],l=new Pi(o,{depth:a+2*s,bevelEnabled:!1,curveSegments:4});return l.translate(0,0,-s),r.rot&&(r.rot[0]==="X"?l.rotateX(r.rot[1]):l.rotateY(r.rot[1])),l.computeVertexNormals(),l}function GM(n,t){let e={X:[],Y:[],Z:[]};for(let{view:r,role:o}of n){let a=Zh(o);if(!a)continue;let l=r.part||r;e[a[0]].push({role:o,mm:l.W*t}),e[a[1]].push({role:o,mm:l.H*t})}let i={},s=[];for(let r of["X","Y","Z"]){let o=e[r];if(!o.length){i[r]=null;continue}let a=o.find(c=>c.role==="front")||o[0];i[r]=a.mm;let l=o.filter(c=>c!==a);for(let c of l){let h=Math.abs(c.mm-a.mm)/Math.max(a.mm,1e-6);s.push({axis:r,a,b:c,diffPct:+(h*100).toFixed(1),ok:h<=.03})}}return{ext:i,checks:s,votes:e}}function Sp(n,t,e={}){let i=n.filter(y=>hi(y.role)&&y.view.contours?.outer),s=[];if(i.length<2&&!e.thickness)return{ok:!1,reason:"\uC815\uD22C\uC0C1 \uBDF0\uAC00 \uB458 \uC774\uC0C1 \uD544\uC694\uD569\uB2C8\uB2E4(\uC815\uBA74\uB3C4 + \uC717\uBA74\uB3C4 \uB610\uB294 \uCE21\uBA74\uB3C4). \uBDF0\uAC00 \uD558\uB098\uBA74 \uB450\uAED8\uB97C \uB123\uC5B4 \uD310\uC73C\uB85C \uB9CC\uB4DC\uC138\uC694."};let{ext:r,checks:o}=GM(i,t);for(let y of["X","Y","Z"])if(!r[y]){if(!e.thickness)return{ok:!1,reason:`${y} \uCD95 \uD06C\uAE30\uB97C \uC815\uD558\uB294 \uBDF0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 \uBC29\uD5A5\uC758 \uBDF0\uB97C \uC9C0\uC815\uD558\uAC70\uB098 \uB450\uAED8\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694.`};r[y]=e.thickness,s.push(`${y} \uCD95\uC740 \uB450\uAED8 \uC785\uB825\uAC12 ${e.thickness}mm \uB85C \uC815\uD588\uC2B5\uB2C8\uB2E4`)}let a={X:0,Y:0,Z:0};for(let y of i){let p=Zh(y.role);a[p[0]]++,a[p[1]]++}let l=null,c=[],h=new I(r.X/2,r.Y/2,r.Z/2);if(i.forEach((y,p)=>{let m=ho.find(v=>v.id===y.role).axis,T=a[m]>0?Math.max(.2,r[m]*.01):0,w=HM(y.view,y.role,t,r,{pad:T});if(!w)return;if(p>0){let v=1+p*3e-4;w.translate(-h.x,-h.y,-h.z),w.scale(v,v,v),w.translate(h.x,h.y,h.z)}c.push(w);let _=lo.fromGeometry(w);l=l?l.intersect(_):_}),!l)return{ok:!1,reason:"\uBC00\uC5B4\uB0BC \uC724\uACFD\uC774 \uC5C6\uC2B5\uB2C8\uB2E4"};let u=l.toGeometry();u.computeVertexNormals(),u.computeBoundingBox();let f=u.boundingBox,d={X:f.max.x-f.min.x,Y:f.max.y-f.min.y,Z:f.max.z-f.min.z},g=Hl(u);for(let y of c)y.dispose();return{ok:!0,geometry:u,ext:r,size:d,volume_cm3:g/1e3,checks:o,notes:s,views:i.map(y=>y.role)}}function Hl(n){let t=n.attributes.position,e=n.index,i=new I,s=new I,r=new I,o=0,a=(l,c,h)=>{i.fromBufferAttribute(t,l),s.fromBufferAttribute(t,c),r.fromBufferAttribute(t,h),o+=i.dot(s.clone().cross(r))/6};if(e)for(let l=0;l<e.count;l+=3)a(e.getX(l),e.getX(l+1),e.getX(l+2));else for(let l=0;l<t.count;l+=3)a(l,l+1,l+2);return Math.abs(o)}function wp(n,t,e,i,s,r=220){if(!bp(e,s,i))return null;let a=Zh(e),l=t.part||t,c=l.W*i,h=l.H*i,u=r/Math.max(c,1e-6),f=r/Math.max(h,1e-6),d=new Uint8Array(r*r),g=new Uint8Array(r*r),y=b=>{let x=P=>P==="X"?b.x:P==="Y"?b.y:b.z,A,R;switch(e){case"front":A=x("X"),R=s.Y-x("Y");break;case"back":A=s.X-x("X"),R=s.Y-x("Y");break;case"top":A=x("X"),R=x("Z");break;case"bottom":A=x("X"),R=s.Z-x("Z");break;case"right":A=s.Z-x("Z"),R=s.Y-x("Y");break;case"left":A=x("Z"),R=s.Y-x("Y");break}return[A*u,R*f]},p=n.attributes.position,m=n.index,T=[new I,new I,new I],w=(b,x,A)=>{T[0].fromBufferAttribute(p,b),T[1].fromBufferAttribute(p,x),T[2].fromBufferAttribute(p,A),$M(d,r,y(T[0]),y(T[1]),y(T[2]))};if(m)for(let b=0;b<m.count;b+=3)w(m.getX(b),m.getX(b+1),m.getX(b+2));else for(let b=0;b<p.count;b+=3)w(b,b+1,b+2);let _=b=>[b[0]*i*u,b[1]*i*f];vp(g,r,t.contours.outer.map(_),1);for(let b of t.contours.holes||[])vp(g,r,b.map(_),0);let v=0,S=0;for(let b=0;b<r*r;b++){let x=d[b],A=g[b];x&&A&&v++,(x||A)&&S++}return{iou:S?v/S:0,role:e}}function $M(n,t,e,i,s){let r=Math.max(0,Math.floor(Math.min(e[1],i[1],s[1]))),o=Math.min(t-1,Math.ceil(Math.max(e[1],i[1],s[1])));for(let a=r;a<=o;a++){let l=a+.5,c=[],h=(d,g)=>{(d[1]<=l&&g[1]>l||g[1]<=l&&d[1]>l)&&c.push(d[0]+(l-d[1])*(g[0]-d[0])/(g[1]-d[1]))};if(h(e,i),h(i,s),h(s,e),c.length<2)continue;c.sort((d,g)=>d-g);let u=Math.max(0,Math.floor(c[0])),f=Math.min(t-1,Math.ceil(c[c.length-1]));for(let d=u;d<=f;d++)n[a*t+d]=1}}function vp(n,t,e,i){let s=Math.max(0,Math.floor(Math.min(...e.map(o=>o[1])))),r=Math.min(t-1,Math.ceil(Math.max(...e.map(o=>o[1]))));for(let o=s;o<=r;o++){let a=o+.5,l=[];for(let c=0;c<e.length;c++){let h=e[c],u=e[(c+1)%e.length];(h[1]<=a&&u[1]>a||u[1]<=a&&h[1]>a)&&l.push(h[0]+(a-h[1])*(u[0]-h[0])/(u[1]-h[1]))}l.sort((c,h)=>c-h);for(let c=0;c+1<l.length;c+=2){let h=Math.max(0,Math.floor(l[c])),u=Math.min(t-1,Math.ceil(l[c+1]));for(let f=h;f<=u;f++)n[o*t+f]=i}}}function Tp(n){let t=n.filter(i=>hi(i.role)),e=n.some(i=>i.role==="section");if(t.length>=2)return{method:"ortho",why:`\uC815\uD22C\uC0C1 \uBDF0 ${t.length}\uAC1C\uB85C \uB9CC\uB4ED\uB2C8\uB2E4`};if(t.length===1){let i=t[0].view;return i.revolveScore>=.85&&i.signals.aspect>1.2?{method:"revolve",why:"\uBDF0\uAC00 \uD558\uB098\uB77C \uD68C\uC804\uCCB4\uB85C \uB9CC\uB4ED\uB2C8\uB2E4"}:{method:"plate",why:"\uBDF0\uAC00 \uD558\uB098\uB77C \uB450\uAED8\uB97C \uB123\uC5B4 \uD310\uC73C\uB85C \uB9CC\uB4ED\uB2C8\uB2E4"}}return e?{method:"unsupported",why:"\uB2E8\uBA74\uB3C4\uB85C\uB9CC \uC815\uC758\uB418\uB294 \uBD80\uD488\uC740 \uB9CC\uB4E4\uC9C0 \uBABB\uD569\uB2C8\uB2E4"}:{method:"none",why:"\uC815\uBA74, \uC717\uBA74, \uCE21\uBA74 \uC911 \uD558\uB098 \uC774\uC0C1\uC744 \uC9C0\uC815\uD558\uC138\uC694"}}var uo=Math.PI/180;function Gl(n,t,e,i,s,r,o){let a=[];for(let l=0;l<=r;l++){let c=(i+(s-i)*l/r)*uo;a.push({x:n+e*Math.cos(c),r:t+e*Math.sin(c),tag:l===0||l===r?o:`${o}_arc`})}return a}function Ep(n,t){let e={};for(let i of n.transitions||[])i.at===t&&(e[i.type]=i);return e}function Jh(n,t=10){let e=n.segments||[],i=Hh(n),s=e.length,r=[],o=[],a=(c,h,u)=>r.push({x:c,r:h,tag:u});for(let c=0;c<s;c++){let h=e[c],[u,f]=i[c],[d,g]=zi(h),y=d/2,p=g/2,m=x=>y+(p-y)*(x-u)/(f-u||1),T=Ep(n,c),w="none";if(c===0)w="convex";else{let x=zi(e[c-1])[1]/2;w=y>x+1e-9?"convex":y<x-1e-9?"concave":"flush"}let _=Ep(n,c+1),v="none";if(c===s-1)v="convex";else{let x=zi(e[c+1])[0]/2;v=p>x+1e-9?"convex":p<x-1e-9?"concave":"flush"}let S=u;if(w==="convex"&&T.chamfer?.size>0){let x=T.chamfer,A=x.size*Math.tan((x.angle||45)*uo);a(u,y-A,"chamfer"),a(u+x.size,m(u+x.size),"chamfer_end"),S=u+x.size}else if(w==="convex"&&T.round?.radius>0){let x=T.round.radius;r.push(...Gl(u+x,y-x,x,180,90,t,"round")),S=u+x}else if(w==="concave"&&T.undercut?.width>0){let x=T.undercut;a(u,y-x.depth,"undercut"),a(u+x.width,y-x.depth,"undercut"),a(u+x.width,m(u+x.width),"undercut_end"),S=u+x.width,T.fillet&&o.push(`\uACBD\uACC4 ${c}: \uB3C4\uD53C\uD648\uACFC \uD544\uB81B\uC774 \uD568\uAED8 \uC788\uC5B4 \uD544\uB81B\uC740 \uBB34\uC2DC\uD588\uC2B5\uB2C8\uB2E4.`)}else if(w==="concave"&&T.fillet?.radius>0){let x=T.fillet.radius;r.push(...Gl(u+x,y+x,x,180,270,t,"fillet")),S=u+x}else a(u,y,"corner");let b=(n.grooves||[]).filter(x=>x.segment===c).sort((x,A)=>x.offset-A.offset);for(let x of b){let A=u+x.offset,R=u+x.offset+x.width;if(A<S-1e-9){o.push(`grooves: \uC138\uADF8\uBA3C\uD2B8 ${c} \uC758 \uD648(offset ${x.offset}) \uC774 \uBAA8\uC11C\uB9AC \uCC98\uB9AC\uC640 \uACB9\uCCD0 \uAC74\uB108\uB6F0\uC5C8\uC2B5\uB2C8\uB2E4.`);continue}a(A,m(A),"groove"),a(A,m(A)-x.depth,"groove_floor"),a(R,m(R)-x.depth,"groove_floor"),a(R,m(R),"groove_end"),S=R}if(v==="convex"&&_.chamfer?.size>0){let x=_.chamfer,A=x.size*Math.tan((x.angle||45)*uo);f-x.size<S-1e-9&&o.push(`\uACBD\uACC4 ${c+1}: \uBAA8\uB530\uAE30\uAC00 \uC55E\uC120 \uD53C\uCC98\uC640 \uACB9\uCE69\uB2C8\uB2E4.`),a(f-x.size,m(f-x.size),"chamfer_start"),a(f,p-A,"chamfer")}else if(v==="convex"&&_.round?.radius>0){let x=_.round.radius;r.push(...Gl(f-x,p-x,x,90,0,t,"round"))}else if(v==="concave"&&_.undercut?.width>0){let x=_.undercut;a(f-x.width,m(f-x.width),"undercut_start"),a(f-x.width,p-x.depth,"undercut"),a(f,p-x.depth,"undercut"),_.fillet&&o.push(`\uACBD\uACC4 ${c+1}: \uB3C4\uD53C\uD648\uACFC \uD544\uB81B\uC774 \uD568\uAED8 \uC788\uC5B4 \uD544\uB81B\uC740 \uBB34\uC2DC\uD588\uC2B5\uB2C8\uB2E4.`)}else if(v==="concave"&&_.fillet?.radius>0){let x=_.fillet.radius;r.push(...Gl(f-x,p+x,x,270,360,t,"fillet"))}else a(f,p,"corner")}let l=[];for(let c of r){let h=l[l.length-1];h&&Math.abs(h.x-c.x)<1e-9&&Math.abs(h.r-c.r)<1e-9||l.push(c)}return{points:l,notes:o}}function jh(n,t=10){let e=cs(n),i=[],s=(f,d,g)=>i.push({x:f,r:d,tag:g}),r=Object.fromEntries((n.features||[]).filter(f=>f.type==="center_hole").map(f=>[f.end,f])),o=()=>{let f=r.left;if(!f){s(0,0,"axis");return}let d=zh(f.d||2),g=d.d/2/Math.tan(59*uo);s(0,d.D/2,"center_hole"),s(d.cone_depth,d.d/2,"center_hole"),s(d.cone_depth+d.pilot_depth,d.d/2,"center_hole"),s(d.cone_depth+d.pilot_depth+g,0,"center_hole_tip")},a=()=>{let f=r.right;if(!f){s(e,0,"axis");return}let d=zh(f.d||2),g=d.d/2/Math.tan(59*uo);s(e-d.cone_depth-d.pilot_depth-g,0,"center_hole_tip"),s(e-d.cone_depth-d.pilot_depth,d.d/2,"center_hole"),s(e-d.cone_depth,d.d/2,"center_hole"),s(e,d.D/2,"center_hole")},l=n.bore;if(!l||!l.segments?.length)return o(),a(),{points:Ap(i)};let c=l.segments,h=l.chamfer_left||0,u=l.chamfer_right||0;if(l.through){let f=0;c.forEach((d,g)=>{let y=d.diameter/2;g===0?h>0?(s(0,y+h,"bore_chamfer"),s(h,y,"bore_chamfer_end")):s(0,y,"bore"):s(f,y,"bore_step");let p=f+d.length;g===c.length-1&&u>0?(s(p-u,y,"bore_chamfer_start"),s(p,y+u,"bore_chamfer")):s(p,y,"bore"),f=p})}else if(l.from==="right"){o();let f=c.reduce((y,p)=>y+p.length,0),d=e-f;s(d,0,"bore_bottom");let g=[...c].reverse();g.forEach((y,p)=>{let m=y.diameter/2;s(d,m,p===0?"bore_bottom":"bore_step");let T=d+y.length;p===g.length-1&&u>0?(s(T-u,m,"bore_chamfer_start"),s(T,m+u,"bore_chamfer")):s(T,m,"bore"),d=T})}else{let f=0;c.forEach((d,g)=>{let y=d.diameter/2;g===0?h>0?(s(0,y+h,"bore_chamfer"),s(h,y,"bore_chamfer_end")):s(0,y,"bore"):s(f,y,"bore_step");let p=f+d.length;s(p,y,"bore"),f=p}),s(f,0,"bore_bottom"),a()}return{points:Ap(i)}}function Ap(n){let t=[];for(let e of n){let i=t[t.length-1];i&&Math.abs(i.x-e.x)<1e-9&&Math.abs(i.r-e.r)<1e-9||t.push(e)}return t}function WM(n,t,e=720){let i=Math.PI*n*n,s=0,r=(t.width||0)/2,o=t.depth||0,a=(t.across_flats||0)/2;for(let l=0;l<e;l++){let c=2*Math.PI*(l+.5)/e,h=n;if(t.type==="keyway"){let u=Math.cos(c),f=Math.abs(Math.sin(c));u>0&&((n-o)*f<=r*u?h=Math.min(n,(n-o)/u):n*f<=r&&(h=Math.min(n,r/f)))}else if(t.type==="flat"){let u=Math.cos(c),f=t.count===2?2:1;u>0&&(h=Math.min(n,(n-o)/u)),f===2&&u<0&&(h=Math.min(n,(n-o)/-u))}else if(t.type==="hex"){let u=(c+Math.PI/6)%(Math.PI/3)-Math.PI/6;h=Math.min(n,a/Math.cos(u))}s+=.5*h*h*(2*Math.PI/e)}return Math.max(0,i-s)}function Cp(n){let t=0;for(let e=1;e<n.length;e++){let i=n[e-1],s=n[e];t+=Math.PI/3*(s.x-i.x)*(i.r*i.r+i.r*s.r+s.r*s.r)}return t}function XM(n,t=12){let e=Jh(n,t).points,i=jh(n,t).points,s=Cp(e)-Cp(i),r=[];for(let o of n.features||[])if(["keyway","flat","hex"].includes(o.type)&&o.segment>=0&&o.segment<(n.segments||[]).length){let a=n.segments[o.segment],l=Math.min(...zi(a))/2,c=o.type==="hex"?a.length:o.length,h=WM(l,o);r.push({type:o.type,mm3:h*c}),s-=h*c}else if(o.type==="hex_socket"){let a=Math.sqrt(3)/2*o.across_flats*o.across_flats*o.depth;r.push({type:o.type,mm3:a}),s-=a}else if(o.type==="cross_hole"){let a=Gh(n,o.position),l=$h(n,o.position),c=o.through===!1?Math.min(o.depth||0,a):Math.max(0,a-l),h=Math.PI*(o.diameter/2)**2*c;r.push({type:o.type,mm3:h}),s-=h}return{volume_mm3:Math.max(0,s),removed:r}}function Rp(n,t=7.85){let{volume_mm3:e,removed:i}=XM(n);return{volume_mm3:e,volume_cm3:e/1e3,mass_g:e/1e3*t,removed:i}}var YM=Math.PI/180;function Pp(n,t=96,e=30,i=0,s=2*Math.PI){let r=n.filter((b,x)=>x===0||Math.abs(b.x-n[x-1].x)>1e-9||Math.abs(b.r-n[x-1].r)>1e-9),o=r.length;if(o<2)return new Fe;let a=[];for(let b=0;b<o-1;b++){let x=r[b+1].x-r[b].x,A=r[b+1].r-r[b].r,R=Math.hypot(x,A)||1;a.push({x:-A/R,r:x/R})}let l=[];for(let b=0;b<o;b++){let x=a[b-1],A=a[b];if(!x)l.push([A]);else if(!A)l.push([x]);else{let R=x.x*A.x+x.r*A.r;if(Math.acos(Math.max(-1,Math.min(1,R)))<e*YM){let P=x.x+A.x,L=x.r+A.r,k=Math.hypot(P,L)||1;l.push([{x:P/k,r:L/k}])}else l.push([x,A])}}let c=[],h=[],u=[],f=[],d=t+1;for(let b=0;b<o;b++){let x=[];for(let A of l[b]){x.push(c.length/3);for(let R=0;R<=t;R++){let P=i+s*R/t,L=Math.sin(P),k=Math.cos(P);c.push(r[b].x,r[b].r*L,r[b].r*k),h.push(A.x,A.r*L,A.r*k)}}f.push(x)}for(let b=0;b<o-1;b++){let x=f[b][f[b].length-1],A=f[b+1][0],R=r[b].r<1e-9,P=r[b+1].r<1e-9;for(let L=0;L<t;L++){let k=x+L,z=x+L+1,N=A+L,V=A+L+1;R||u.push(k,N,z),P||u.push(z,N,V)}}let g=new Fe;g.setAttribute("position",new ye(c,3)),g.setAttribute("normal",new ye(h,3)),g.setIndex(u);let y=new I,p=new I,m=new I,T=new I,w=g.getAttribute("position"),_=g.getAttribute("normal"),v=0,S=0;for(let b=0;b<u.length&&S<12;b+=3){y.fromBufferAttribute(w,u[b]),p.fromBufferAttribute(w,u[b+1]),m.fromBufferAttribute(w,u[b+2]);let x=p.clone().sub(y).cross(m.clone().sub(y));x.lengthSq()<1e-10||(T.fromBufferAttribute(_,u[b]).add(new I().fromBufferAttribute(_,u[b+1])).add(new I().fromBufferAttribute(_,u[b+2])),v+=x.dot(T)<0?1:-1,S++)}if(v>0){for(let b=0;b<u.length;b+=3){let x=u[b+1];u[b+1]=u[b+2],u[b+2]=x}g.setIndex(u)}return g}function Ip(){let n={metalness:.86,roughness:.34,envMapIntensity:1};return{revolve:new bn({...n,color:12172741,name:"revolve"}),plate:new bn({...n,color:10465480,roughness:.42,name:"plate"}),extrude:new bn({...n,color:12629148,roughness:.5,metalness:.6,name:"extrude"}),selected:new bn({...n,color:8161791,roughness:.3,name:"selected"})}}function Qh(n,t){if(n.length<3)return n.slice();let e=n[0],i=n[n.length-1],s=-1,r=0,o=i.x-e.x,a=i.r-e.r,l=Math.hypot(o,a)||1;for(let c=1;c<n.length-1;c++){let h=n[c],u=Math.abs(a*h.x-o*h.r+i.x*e.r-i.r*e.x)/l;u>r&&(r=u,s=c)}return r>t?Qh(n.slice(0,s+1),t).slice(0,-1).concat(Qh(n.slice(s),t)):[e,i]}function Lp(n,t,{radial:e=96,material:i,tol:s=.004}={}){let r=n.length,o=[];for(let h=0;h<r;h++)o.push({x:(h+.5)/r*t,r:Math.max(.01,n[h])});o=Qh(o,Math.max(.05,t*s)),o=[{x:0,r:0},...o,{x:t,r:0}];let a=Pp(o,e,28);a.computeBoundingBox();let l=a.boundingBox.getCenter(new I);a.translate(-l.x,-l.y,-l.z);let c=new ae(a,i);return c.castShadow=c.receiveShadow=!0,c.userData.axis=[1,0,0],c.userData.holes=[],c}function Np(n,t,e,{material:i,bevel:s=0}={}){if(!n||n.length<3)return null;let r=new ai(co(n.map(([c,h])=>new ht(c,-h)),!0));for(let c of t||[])!c||c.length<3||r.holes.push(new oi(co(c.map(([h,u])=>new ht(h,-u)),!1)));let o=new Pi(r,{depth:Math.max(.2,e),bevelEnabled:s>0,bevelSize:s,bevelThickness:s,bevelSegments:2,curveSegments:4});o.computeVertexNormals(),o.computeBoundingBox();let a=o.boundingBox.getCenter(new I);o.translate(-a.x,-a.y,-a.z);let l=new ae(o,i);return l.castShadow=l.receiveShadow=!0,l.userData.axis=[0,0,1],l.userData.holes=(t||[]).filter(c=>c&&c.length>=3).map(c=>{let h=0,u=0;for(let[y,p]of c)h+=y,u+=-p;let f=h/c.length,d=u/c.length,g=0;for(let[y,p]of c)g+=Math.hypot(y-f,-p-d);return{x:f-a.x,y:d-a.y,z:0,r:+(g/c.length).toFixed(2)}}),l}var Dp={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]},Hi=class{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(t){return new su(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new xu(t)})}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}setTextureUtils(t){return this.textureUtils=t,this}parse(t,e,i,s){let r=new iu,o=[];for(let a=0,l=this.pluginCallbacks.length;a<l;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(t,e,s).catch(i)}parseAsync(t,e){let i=this;return new Promise(function(s,r){i.parse(t,s,r,e)})}},ie={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},tu="KHR_mesh_quantization",mn={};mn[Le]=ie.NEAREST;mn[Va]=ie.NEAREST_MIPMAP_NEAREST;mn[ss]=ie.NEAREST_MIPMAP_LINEAR;mn[De]=ie.LINEAR;mn[Ys]=ie.LINEAR_MIPMAP_NEAREST;mn[$n]=ie.LINEAR_MIPMAP_LINEAR;mn[Mn]=ie.CLAMP_TO_EDGE;mn[Ls]=ie.REPEAT;mn[Ns]=ie.MIRRORED_REPEAT;var Up={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},ZM=new Bt,Fp=12,KM=1179937895,JM=2,Op=8,jM=1313821514,QM=5130562;function ui(n,t){return n.length===t.length&&n.every(function(e,i){return e===t[i]})}function tb(n){return new TextEncoder().encode(n).buffer}function eb(n){return ui(n.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function nb(n,t,e){let i={min:new Array(n.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(n.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=t;s<t+e;s++)for(let r=0;r<n.itemSize;r++){let o;n.itemSize>4?o=n.array[s*n.itemSize+r]:(r===0?o=n.getX(s):r===1?o=n.getY(s):r===2?o=n.getZ(s):r===3&&(o=n.getW(s)),n.normalized===!0&&(o=li.normalize(o,n.array))),i.min[r]=Math.min(i.min[r],o),i.max[r]=Math.max(i.max[r],o)}return i}function Bp(n){return Math.ceil(n/4)*4}function eu(n,t=0){let e=Bp(n.byteLength);if(e!==n.byteLength){let i=new Uint8Array(e);if(i.set(new Uint8Array(n)),t!==0)for(let s=n.byteLength;s<e;s++)i[s]=t;return i.buffer}return n}function nu(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function ib(n,t){if(typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas){let e;return t==="image/jpeg"?e=.92:t==="image/webp"&&(e=.8),n.convertToBlob({type:t,quality:e})}else return new Promise(e=>n.toBlob(e,t))}var iu=class{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r185"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(t){this.plugins=t}setTextureUtils(t){this.textureUtils=t}async writeAsync(t,e,i={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},i),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(t),await Promise.all(this.pending);let s=this,r=s.buffers,o=s.json;i=s.options;let a=s.extensionsUsed,l=s.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(a),u=Object.keys(l);if(h.length>0&&(o.extensionsUsed=h),u.length>0&&(o.extensionsRequired=u),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=c.size),i.binary===!0){let f=new FileReader;f.readAsArrayBuffer(c),f.onloadend=function(){let d=eu(f.result),g=new DataView(new ArrayBuffer(Op));g.setUint32(0,d.byteLength,!0),g.setUint32(4,QM,!0);let y=eu(tb(JSON.stringify(o)),32),p=new DataView(new ArrayBuffer(Op));p.setUint32(0,y.byteLength,!0),p.setUint32(4,jM,!0);let m=new ArrayBuffer(Fp),T=new DataView(m);T.setUint32(0,KM,!0),T.setUint32(4,JM,!0);let w=Fp+p.byteLength+y.byteLength+g.byteLength+d.byteLength;T.setUint32(8,w,!0);let _=new Blob([m,p,y,g,d],{type:"application/octet-stream"}),v=new FileReader;v.readAsArrayBuffer(_),v.onloadend=function(){e(v.result)}}}else if(o.buffers&&o.buffers.length>0){let f=new FileReader;f.readAsDataURL(c),f.onloadend=function(){let d=f.result;o.buffers[0].uri=d,e(o)}}else e(o)}serializeUserData(t,e){if(Object.keys(t.userData).length===0)return;let i=this.options,s=this.extensionsUsed;try{let r=JSON.parse(JSON.stringify(t.userData));if(i.includeCustomExtensions&&r.gltfExtensions){e.extensions===void 0&&(e.extensions={});for(let o in r.gltfExtensions)e.extensions[o]=r.gltfExtensions[o],s[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(e.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+t.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(t,e=!1){if(this.uids.has(t)===!1){let s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(t,s)}return this.uids.get(t).get(e)}isNormalizedNormalAttribute(t){if(this.cache.attributesNormalized.has(t))return!1;let i=new I;for(let s=0,r=t.count;s<r;s++)if(Math.abs(i.fromBufferAttribute(t,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(t){let e=this.cache;if(e.attributesNormalized.has(t))return e.attributesNormalized.get(t);let i=t.clone(),s=new I;for(let r=0,o=i.count;r<o;r++)s.fromBufferAttribute(i,r),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),i.setXYZ(r,s.x,s.y,s.z);return e.attributesNormalized.set(t,i),i}applyTextureTransform(t,e){let i=!1,s={};(e.offset.x!==0||e.offset.y!==0)&&(s.offset=e.offset.toArray(),i=!0),e.rotation!==0&&(s.rotation=e.rotation,i=!0),(e.repeat.x!==1||e.repeat.y!==1)&&(s.scale=e.repeat.toArray(),i=!0),i&&(t.extensions=t.extensions||{},t.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(t,e){if(t===e)return t;function i(d){return d.colorSpace===Ie?function(y){return y<.04045?y*.0773993808:Math.pow(y*.9478672986+.0521327014,2.4)}:function(y){return y}}t instanceof Ri&&(t=await this.decompressTextureAsync(t)),e instanceof Ri&&(e=await this.decompressTextureAsync(e));let s=t?t.image:null,r=e?e.image:null,o=Math.max(s?s.width:0,r?r.width:0),a=Math.max(s?s.height:0,r?r.height:0),l=nu();l.width=o,l.height=a;let c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,o,a);let h=c.getImageData(0,0,o,a);if(s){c.drawImage(s,0,0,o,a);let d=i(t),g=c.getImageData(0,0,o,a).data;for(let y=2;y<g.length;y+=4)h.data[y]=d(g[y]/256)*256}if(r){c.drawImage(r,0,0,o,a);let d=i(e),g=c.getImageData(0,0,o,a).data;for(let y=1;y<g.length;y+=4)h.data[y]=d(g[y]/256)*256}c.putImageData(h,0,0);let f=(t||e).clone();return f.source=new ni(l),f.colorSpace=pn,f.channel=(t||e).channel,t&&e&&t.channel!==e.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),f}async buildNormalMapTextureAsync(t,e,i){t instanceof Ri&&(t=await this.decompressTextureAsync(t));let s=t.image,r=nu();r.width=s.width,r.height=s.height;let o=r.getContext("2d",{willReadFrequently:!0});o.drawImage(s,0,0,r.width,r.height);let a=o.getImageData(0,0,r.width,r.height),l=a.data;for(let h=0;h<l.length;h+=4)e&&(l[h+0]=255-l[h+0]),i&&(l[h+1]=255-l[h+1]);o.putImageData(a,0,0);let c=t.clone();return c.source=new ni(r),c}async decompressTextureAsync(t,e=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(t,e)}processBuffer(t){let e=this.json,i=this.buffers;return e.buffers||(e.buffers=[{byteLength:0}]),i.push(t),0}processBufferView(t,e,i,s,r){let o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(e){case ie.BYTE:case ie.UNSIGNED_BYTE:a=1;break;case ie.SHORT:case ie.UNSIGNED_SHORT:a=2;break;default:a=4}let l=t.itemSize*a;r===ie.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);let c=Bp(s*l),h=new DataView(new ArrayBuffer(c)),u=0;for(let g=i;g<i+s;g++){for(let y=0;y<t.itemSize;y++){let p;t.itemSize>4?p=t.array[g*t.itemSize+y]:(y===0?p=t.getX(g):y===1?p=t.getY(g):y===2?p=t.getZ(g):y===3&&(p=t.getW(g)),t.normalized===!0&&(p=li.normalize(p,t.array))),e===ie.FLOAT?h.setFloat32(u,p,!0):e===ie.INT?h.setInt32(u,p,!0):e===ie.UNSIGNED_INT?h.setUint32(u,p,!0):e===ie.SHORT?h.setInt16(u,p,!0):e===ie.UNSIGNED_SHORT?h.setUint16(u,p,!0):e===ie.BYTE?h.setInt8(u,p):e===ie.UNSIGNED_BYTE&&h.setUint8(u,p),u+=a}u%l!==0&&(u+=l-u%l)}let f={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(f.target=r),r===ie.ARRAY_BUFFER&&(f.byteStride=l),this.byteOffset+=c,o.bufferViews.push(f),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(t){let e=this,i=e.json;return i.bufferViews||(i.bufferViews=[]),new Promise(function(s){let r=new FileReader;r.readAsArrayBuffer(t),r.onloadend=function(){let o=eu(r.result),a={buffer:e.processBuffer(o),byteOffset:e.byteOffset,byteLength:o.byteLength};e.byteOffset+=o.byteLength,s(i.bufferViews.push(a)-1)}})}processAccessor(t,e,i,s){let r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},a;if(t.array.constructor===Float32Array)a=ie.FLOAT;else if(t.array.constructor===Int32Array)a=ie.INT;else if(t.array.constructor===Uint32Array)a=ie.UNSIGNED_INT;else if(t.array.constructor===Int16Array)a=ie.SHORT;else if(t.array.constructor===Uint16Array)a=ie.UNSIGNED_SHORT;else if(t.array.constructor===Int8Array)a=ie.BYTE;else if(t.array.constructor===Uint8Array)a=ie.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+t.array.constructor.name);if(i===void 0&&(i=0),(s===void 0||s===1/0)&&(s=t.count),s===0)return null;let l=nb(t,i,s),c;e!==void 0&&(c=t===e.index?ie.ELEMENT_ARRAY_BUFFER:ie.ARRAY_BUFFER);let h=this.processBufferView(t,a,i,s,c),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:a,count:s,max:l.max,min:l.min,type:o[t.itemSize]};return t.normalized===!0&&(u.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(u)-1}processImage(t,e,i,s="image/png"){if(t!==null){let r=this,o=r.cache,a=r.json,l=r.options,c=r.pending;o.images.has(t)||o.images.set(t,{});let h=o.images.get(t),u=s+":flipY/"+i.toString();if(h[u]!==void 0)return h[u];a.images||(a.images=[]);let f={mimeType:s},d=nu();d.width=Math.min(t.width,l.maxTextureSize),d.height=Math.min(t.height,l.maxTextureSize);let g=d.getContext("2d",{willReadFrequently:!0});if(i===!0&&(g.translate(0,d.height),g.scale(1,-1)),t.data!==void 0){e!==sn&&console.error("GLTFExporter: Only RGBAFormat is supported.",e),(t.width>l.maxTextureSize||t.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",t);let p=new Uint8ClampedArray(t.height*t.width*4);for(let m=0;m<p.length;m+=4)p[m+0]=t.data[m+0],p[m+1]=t.data[m+1],p[m+2]=t.data[m+2],p[m+3]=t.data[m+3];g.putImageData(new ImageData(p,t.width,t.height),0,0)}else if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas)g.drawImage(t,0,0,d.width,d.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(ib(d,s).then(p=>r.processBufferViewImage(p)).then(p=>{f.bufferView=p})):f.uri=Bs.getDataURL(d,s);let y=a.images.push(f)-1;return h[u]=y,y}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(t){let e=this.json;e.samplers||(e.samplers=[]);let i={magFilter:mn[t.magFilter],minFilter:mn[t.minFilter],wrapS:mn[t.wrapS],wrapT:mn[t.wrapT]};return e.samplers.push(i)-1}async processTextureAsync(t){let i=this.options,s=this.cache,r=this.json;if(s.textures.has(t))return s.textures.get(t);r.textures||(r.textures=[]),t instanceof Ri&&(t=await this.decompressTextureAsync(t,i.maxTextureSize));let o=t.userData.mimeType,a=this.processImage(t.image,t.format,t.flipY,o),l={sampler:this.processSampler(t)};o==="image/webp"?(l.extensions=l.extensions||{},l.extensions.EXT_texture_webp={source:a},this.extensionsUsed.EXT_texture_webp=!0,this.extensionsRequired.EXT_texture_webp=!0):l.source=a,t.name&&(l.name=t.name),await this._invokeAllAsync(async function(h){h.writeTexture&&await h.writeTexture(t,l)});let c=r.textures.push(l)-1;return s.textures.set(t,c),c}async processMaterialAsync(t,e){let i=this.cache,s=this.json,r=e!==void 0&&e.hasAttribute("tangent"),o=t.normalMap?t.uuid+":"+r:t.uuid;if(i.materials.has(o))return i.materials.get(o);if(t.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;s.materials||(s.materials=[]);let a={pbrMetallicRoughness:{}};t.isMeshStandardMaterial!==!0&&t.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let l=t.color.toArray().concat([t.opacity]);if(ui(l,[1,1,1,1])||(a.pbrMetallicRoughness.baseColorFactor=l),t.isMeshStandardMaterial?(a.pbrMetallicRoughness.metallicFactor=t.metalness,a.pbrMetallicRoughness.roughnessFactor=t.roughness):(a.pbrMetallicRoughness.metallicFactor=0,a.pbrMetallicRoughness.roughnessFactor=1),t.metalnessMap||t.roughnessMap){let h=await this.buildMetalRoughTextureAsync(t.metalnessMap,t.roughnessMap),u={index:await this.processTextureAsync(h),texCoord:h.channel};this.applyTextureTransform(u,h),a.pbrMetallicRoughness.metallicRoughnessTexture=u}if(t.map){let h={index:await this.processTextureAsync(t.map),texCoord:t.map.channel};this.applyTextureTransform(h,t.map),a.pbrMetallicRoughness.baseColorTexture=h}if(t.emissive){let h=t.emissive;if(Math.max(h.r,h.g,h.b)>0&&(a.emissiveFactor=t.emissive.toArray()),t.emissiveMap){let f={index:await this.processTextureAsync(t.emissiveMap),texCoord:t.emissiveMap.channel};this.applyTextureTransform(f,t.emissiveMap),a.emissiveTexture=f}}if(t.normalMap){let h=t.normalScale,u=h.x<0,f=r?h.y<0:h.y>0,d=t.normalMap;(u||f)&&(d=await this.buildNormalMapTextureAsync(t.normalMap,u,f));let g={index:await this.processTextureAsync(d),texCoord:t.normalMap.channel};Math.abs(h.x)!==1&&(g.scale=Math.abs(h.x)),this.applyTextureTransform(g,t.normalMap),a.normalTexture=g}if(t.aoMap){let h={index:await this.processTextureAsync(t.aoMap),texCoord:t.aoMap.channel};t.aoMapIntensity!==1&&(h.strength=t.aoMapIntensity),this.applyTextureTransform(h,t.aoMap),a.occlusionTexture=h}t.transparent?a.alphaMode="BLEND":t.alphaTest>0&&(a.alphaMode="MASK",a.alphaCutoff=t.alphaTest),t.side===en&&(a.doubleSided=!0),t.name!==""&&(a.name=t.name),this.serializeUserData(t,a),await this._invokeAllAsync(async function(h){h.writeMaterialAsync&&await h.writeMaterialAsync(t,a)});let c=s.materials.push(a)-1;return i.materials.set(o,c),c}async processMeshAsync(t){let e=this.cache,i=this.json,s=[t.geometry.uuid];if(Array.isArray(t.material))for(let _=0,v=t.material.length;_<v;_++)s.push(t.material[_].uuid);else s.push(t.material.uuid);let r=s.join(":");if(e.meshes.has(r))return e.meshes.get(r);let o=t.geometry,a;t.isLineSegments?a=ie.LINES:t.isLineLoop?a=ie.LINE_LOOP:t.isLine?a=ie.LINE_STRIP:t.isPoints?a=ie.POINTS:a=t.material.wireframe?ie.LINES:ie.TRIANGLES;let l={},c={},h=[],u=[],f={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},d=o.getAttribute("normal");d!==void 0&&!this.isNormalizedNormalAttribute(d)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(d)));let g=null;for(let _ in o.attributes){if(_.slice(0,5)==="morph")continue;let v=o.attributes[_];if(_=f[_]||_.toUpperCase(),!/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(_)&&!_.startsWith("_")&&(_="_"+_),e.attributes.has(this.getUID(v))){c[_]=e.attributes.get(this.getUID(v));continue}g=null;let b=v.array;_==="JOINTS_0"&&!(b instanceof Uint16Array)&&!(b instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=Hi.Utils.toTypedBufferAttribute(v,Uint16Array)):(b instanceof Uint32Array||b instanceof Int32Array)&&!_.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${_}" converted to type FLOAT.`),g=Hi.Utils.toTypedBufferAttribute(v,Float32Array));let x=this.processAccessor(g||v,o);x!==null&&(_.startsWith("_")||this.detectMeshQuantization(_,v),c[_]=x,e.attributes.set(this.getUID(v),x))}if(d!==void 0&&o.setAttribute("normal",d),Object.keys(c).length===0)return null;if(t.morphTargetInfluences!==void 0&&t.morphTargetInfluences.length>0){let _=[],v=[],S={};if(t.morphTargetDictionary!==void 0)for(let b in t.morphTargetDictionary)S[t.morphTargetDictionary[b]]=b;for(let b=0;b<t.morphTargetInfluences.length;++b){let x={},A=!1;for(let R in o.morphAttributes){if(R!=="position"&&R!=="normal"){A||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),A=!0);continue}let P=o.morphAttributes[R][b],L=R.toUpperCase(),k=o.attributes[R];if(e.attributes.has(this.getUID(P,!0))){x[L]=e.attributes.get(this.getUID(P,!0));continue}let z=P.clone();if(!o.morphTargetsRelative)for(let N=0,V=P.count;N<V;N++)for(let F=0;F<P.itemSize;F++)F===0&&z.setX(N,P.getX(N)-k.getX(N)),F===1&&z.setY(N,P.getY(N)-k.getY(N)),F===2&&z.setZ(N,P.getZ(N)-k.getZ(N)),F===3&&z.setW(N,P.getW(N)-k.getW(N));x[L]=this.processAccessor(z,o),e.attributes.set(this.getUID(k,!0),x[L])}u.push(x),_.push(t.morphTargetInfluences[b]),t.morphTargetDictionary!==void 0&&v.push(S[b])}l.weights=_,v.length>0&&(l.extras={},l.extras.targetNames=v)}let y=Array.isArray(t.material);if(y&&o.groups.length===0)return null;let p=!1;if(y&&o.index===null){let _=[];for(let v=0,S=o.attributes.position.count;v<S;v++)_[v]=v;o.setIndex(_),p=!0}let m=y?t.material:[t.material],T=y?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let _=0,v=T.length;_<v;_++){let S={mode:a,attributes:c};if(this.serializeUserData(o,S),u.length>0&&(S.targets=u),o.index!==null){let x=this.getUID(o.index);(T[_].start!==void 0||T[_].count!==void 0)&&(x+=":"+T[_].start+":"+T[_].count),e.attributes.has(x)?S.indices=e.attributes.get(x):(S.indices=this.processAccessor(o.index,o,T[_].start,T[_].count),e.attributes.set(x,S.indices)),S.indices===null&&delete S.indices}let b=await this.processMaterialAsync(m[T[_].materialIndex],o);b!==null&&(S.material=b),h.push(S)}p===!0&&o.setIndex(null),l.primitives=h,i.meshes||(i.meshes=[]),await this._invokeAllAsync(function(_){_.writeMesh&&_.writeMesh(t,l)});let w=i.meshes.push(l)-1;return e.meshes.set(r,w),w}detectMeshQuantization(t,e){if(this.extensionsUsed[tu])return;let i;switch(e.array.constructor){case Int8Array:i="byte";break;case Uint8Array:i="unsigned byte";break;case Int16Array:i="short";break;case Uint16Array:i="unsigned short";break;default:return}e.normalized&&(i+=" normalized");let s=t.split("_",1)[0];Dp[s]&&Dp[s].includes(i)&&(this.extensionsUsed[tu]=!0,this.extensionsRequired[tu]=!0)}processCamera(t){let e=this.json;e.cameras||(e.cameras=[]);let i=t.isOrthographicCamera,s={type:i?"orthographic":"perspective"};return i?s.orthographic={xmag:t.right*2,ymag:t.top*2,zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near}:s.perspective={aspectRatio:t.aspect,yfov:li.degToRad(t.fov),zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near},t.name!==""&&(s.name=t.type),e.cameras.push(s)-1}processAnimation(t,e){let i=this.json,s=this.nodeMap;i.animations||(i.animations=[]),t=Hi.Utils.mergeMorphTargetTracks(t.clone(),e);let r=t.tracks,o=[],a=[];for(let c=0;c<r.length;++c){let h=r[c],u=oe.parseTrackName(h.name),f=oe.findNode(e,u.nodeName),d=Up[u.propertyName];if(u.objectName==="bones"&&(f.isSkinnedMesh===!0?f=f.skeleton.getBoneByName(u.objectIndex):f=void 0),!f||!d){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',h.name);continue}let g=1,y=h.values.length/h.times.length;d===Up.morphTargetInfluences&&(y/=f.morphTargetInfluences.length);let p;h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(p="CUBICSPLINE",y/=3):h.getInterpolation()===Qi?p="STEP":p="LINEAR",a.push({input:this.processAccessor(new Te(h.times,g)),output:this.processAccessor(new Te(h.values,y)),interpolation:p}),o.push({sampler:a.length-1,target:{node:s.get(f),path:d}})}let l={name:t.name||"clip_"+i.animations.length,samplers:a,channels:o};return this.serializeUserData(t,l),i.animations.push(l),i.animations.length-1}processSkin(t){let e=this.json,i=this.nodeMap,s=e.nodes[i.get(t)],r=t.skeleton;if(r===void 0)return null;let o=t.skeleton.bones[0];if(o===void 0)return null;let a=[],l=new Float32Array(r.bones.length*16),c=new he;for(let u=0;u<r.bones.length;++u)a.push(i.get(r.bones[u])),c.copy(r.boneInverses[u]),c.multiply(t.bindMatrix).toArray(l,u*16);return e.skins===void 0&&(e.skins=[]),e.skins.push({inverseBindMatrices:this.processAccessor(new Te(l,16)),joints:a,skeleton:i.get(o)}),s.skin=e.skins.length-1}async processNodeAsync(t){let e=this.json,i=this.options,s=this.nodeMap;if(e.nodes||(e.nodes=[]),t.pivot!==null)return await this._processNodeWithPivotAsync(t);let r={};if(i.trs){let a=t.quaternion.toArray(),l=t.position.toArray(),c=t.scale.toArray();ui(a,[0,0,0,1])||(r.rotation=a),ui(l,[0,0,0])||(r.translation=l),ui(c,[1,1,1])||(r.scale=c)}else t.matrixAutoUpdate&&t.updateMatrix(),eb(t.matrix)===!1&&(r.matrix=t.matrix.elements);if(t.name!==""&&(r.name=String(t.name)),this.serializeUserData(t,r),t.isMesh||t.isLine||t.isPoints){let a=await this.processMeshAsync(t);a!==null&&(r.mesh=a)}else t.isCamera&&(r.camera=this.processCamera(t));t.isSkinnedMesh&&this.skins.push(t);let o=e.nodes.push(r)-1;if(s.set(t,o),t.children.length>0){let a=[];for(let l=0,c=t.children.length;l<c;l++){let h=t.children[l];if(h.visible||i.onlyVisible===!1){let u=await this.processNodeAsync(h);u!==null&&a.push(u)}}a.length>0&&(r.children=a)}return await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(t,r)}),o}async _processNodeWithPivotAsync(t){let e=this.json,i=this.options,s=this.nodeMap,r=t.pivot,o={},a=t.quaternion.toArray(),l=[t.position.x+r.x,t.position.y+r.y,t.position.z+r.z],c=t.scale.toArray();ui(a,[0,0,0,1])||(o.rotation=a),ui(l,[0,0,0])||(o.translation=l),ui(c,[1,1,1])||(o.scale=c),o.extras={pivot:r.toArray()},t.name!==""&&(o.name=String(t.name)),this.serializeUserData(t,o);let h=e.nodes.push(o)-1;s.set(t,h);let u={},f=[-r.x,-r.y,-r.z];if(ui(f,[0,0,0])||(u.translation=f),t.isMesh||t.isLine||t.isPoints){let y=await this.processMeshAsync(t);y!==null&&(u.mesh=y)}else t.isCamera&&(u.camera=this.processCamera(t));t.isSkinnedMesh&&this.skins.push(t);let g=[e.nodes.push(u)-1];if(t.children.length>0){let y=[];for(let p=0,m=t.children.length;p<m;p++){let T=t.children[p];if(T.visible||i.onlyVisible===!1){let w=await this.processNodeAsync(T);w!==null&&y.push(w)}}y.length>0&&(u.children=y)}return o.children=g,await this._invokeAllAsync(function(y){y.writeNode&&y.writeNode(t,o)}),h}async processSceneAsync(t){let e=this.json,i=this.options;e.scenes||(e.scenes=[],e.scene=0);let s={};t.name!==""&&(s.name=t.name),e.scenes.push(s);let r=[];for(let o=0,a=t.children.length;o<a;o++){let l=t.children[o];if(l.visible||i.onlyVisible===!1){let c=await this.processNodeAsync(l);c!==null&&r.push(c)}}r.length>0&&(s.nodes=r),this.serializeUserData(t,s)}async processObjectsAsync(t){let e=new Hn;e.name="AuxScene";for(let i=0;i<t.length;i++)e.children.push(t[i]);await this.processSceneAsync(e)}async processInputAsync(t){let e=this.options;t=t instanceof Array?t:[t],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(t)});let i=[];for(let s=0;s<t.length;s++)t[s]instanceof Hn?await this.processSceneAsync(t[s]):i.push(t[s]);i.length>0&&await this.processObjectsAsync(i);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);if(t.length===1)for(let s=0;s<e.animations.length;++s)this.processAnimation(e.animations[s],t[0]);else for(let s=0;s<t.length;s++){let r=e.animations[s]||[];for(let o=0;o<r.length;++o)this.processAnimation(r[o],t[s])}await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(t)})}async _invokeAllAsync(t){for(let e=0,i=this.plugins.length;e<i;e++)await t(this.plugins[e])}},su=class{constructor(t){this.writer=t,this.name="KHR_lights_punctual"}writeNode(t,e){if(!t.isLight)return;if(!t.isDirectionalLight&&!t.isPointLight&&!t.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",t);return}let i=this.writer,s=i.json,r=i.extensionsUsed,o={};t.name&&(o.name=t.name),o.color=t.color.toArray(),o.intensity=t.intensity,t.isDirectionalLight?o.type="directional":t.isPointLight?(o.type="point",t.distance>0&&(o.range=t.distance)):t.isSpotLight&&(o.type="spot",t.distance>0&&(o.range=t.distance),o.spot={},o.spot.innerConeAngle=(1-t.penumbra)*t.angle,o.spot.outerConeAngle=t.angle),t.decay!==void 0&&t.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),t.target&&(t.target.parent!==t||t.target.position.x!==0||t.target.position.y!==0||t.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},r[this.name]=!0);let a=s.extensions[this.name].lights;a.push(o),e.extensions=e.extensions||{},e.extensions[this.name]={light:a.length-1}}},ru=class{constructor(t){this.writer=t,this.name="KHR_materials_unlit"}async writeMaterialAsync(t,e){if(!t.isMeshBasicMaterial)return;let s=this.writer.extensionsUsed;e.extensions=e.extensions||{},e.extensions[this.name]={},s[this.name]=!0,e.pbrMetallicRoughness.metallicFactor=0,e.pbrMetallicRoughness.roughnessFactor=.9}},ou=class{constructor(t){this.writer=t,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.clearcoat===0)return;let i=this.writer,s=i.extensionsUsed,r={};if(r.clearcoatFactor=t.clearcoat,t.clearcoatMap){let o={index:await i.processTextureAsync(t.clearcoatMap),texCoord:t.clearcoatMap.channel};i.applyTextureTransform(o,t.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=t.clearcoatRoughness,t.clearcoatRoughnessMap){let o={index:await i.processTextureAsync(t.clearcoatRoughnessMap),texCoord:t.clearcoatRoughnessMap.channel};i.applyTextureTransform(o,t.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(t.clearcoatNormalMap){let o={index:await i.processTextureAsync(t.clearcoatNormalMap),texCoord:t.clearcoatNormalMap.channel};t.clearcoatNormalScale.x!==1&&(o.scale=t.clearcoatNormalScale.x),i.applyTextureTransform(o,t.clearcoatNormalMap),r.clearcoatNormalTexture=o}e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},au=class{constructor(t){this.writer=t,this.name="KHR_materials_dispersion"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.dispersion===0)return;let s=this.writer.extensionsUsed,r={};r.dispersion=t.dispersion,e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},lu=class{constructor(t){this.writer=t,this.name="KHR_materials_iridescence"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.iridescence===0)return;let i=this.writer,s=i.extensionsUsed,r={};if(r.iridescenceFactor=t.iridescence,t.iridescenceMap){let o={index:await i.processTextureAsync(t.iridescenceMap),texCoord:t.iridescenceMap.channel};i.applyTextureTransform(o,t.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=t.iridescenceIOR,r.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1],t.iridescenceThicknessMap){let o={index:await i.processTextureAsync(t.iridescenceThicknessMap),texCoord:t.iridescenceThicknessMap.channel};i.applyTextureTransform(o,t.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},cu=class{constructor(t){this.writer=t,this.name="KHR_materials_transmission"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;let i=this.writer,s=i.extensionsUsed,r={};if(r.transmissionFactor=t.transmission,t.transmissionMap){let o={index:await i.processTextureAsync(t.transmissionMap),texCoord:t.transmissionMap.channel};i.applyTextureTransform(o,t.transmissionMap),r.transmissionTexture=o}e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},hu=class{constructor(t){this.writer=t,this.name="KHR_materials_volume"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;let i=this.writer,s=i.extensionsUsed,r={};if(r.thicknessFactor=t.thickness,t.thicknessMap){let o={index:await i.processTextureAsync(t.thicknessMap),texCoord:t.thicknessMap.channel};i.applyTextureTransform(o,t.thicknessMap),r.thicknessTexture=o}t.attenuationDistance!==1/0&&(r.attenuationDistance=t.attenuationDistance),r.attenuationColor=t.attenuationColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},uu=class{constructor(t){this.writer=t,this.name="KHR_materials_ior"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.ior===1.5)return;let s=this.writer.extensionsUsed,r={};r.ior=t.ior,e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},fu=class{constructor(t){this.writer=t,this.name="KHR_materials_specular"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.specularIntensity===1&&t.specularColor.equals(ZM)&&!t.specularIntensityMap&&!t.specularColorMap)return;let i=this.writer,s=i.extensionsUsed,r={};if(t.specularIntensityMap){let o={index:await i.processTextureAsync(t.specularIntensityMap),texCoord:t.specularIntensityMap.channel};i.applyTextureTransform(o,t.specularIntensityMap),r.specularTexture=o}if(t.specularColorMap){let o={index:await i.processTextureAsync(t.specularColorMap),texCoord:t.specularColorMap.channel};i.applyTextureTransform(o,t.specularColorMap),r.specularColorTexture=o}r.specularFactor=t.specularIntensity,r.specularColorFactor=t.specularColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},du=class{constructor(t){this.writer=t,this.name="KHR_materials_sheen"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.sheen==0)return;let i=this.writer,s=i.extensionsUsed,r={};if(t.sheenRoughnessMap){let o={index:await i.processTextureAsync(t.sheenRoughnessMap),texCoord:t.sheenRoughnessMap.channel};i.applyTextureTransform(o,t.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(t.sheenColorMap){let o={index:await i.processTextureAsync(t.sheenColorMap),texCoord:t.sheenColorMap.channel};i.applyTextureTransform(o,t.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=t.sheenRoughness,r.sheenColorFactor=t.sheenColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},pu=class{constructor(t){this.writer=t,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.anisotropy==0)return;let i=this.writer,s=i.extensionsUsed,r={};if(t.anisotropyMap){let o={index:await i.processTextureAsync(t.anisotropyMap)};i.applyTextureTransform(o,t.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=t.anisotropy,r.anisotropyRotation=t.anisotropyRotation,e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},mu=class{constructor(t){this.writer=t,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.emissiveIntensity===1)return;let s=this.writer.extensionsUsed,r={};r.emissiveStrength=t.emissiveIntensity,e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},gu=class{constructor(t){this.writer=t,this.name="EXT_materials_bump"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.bumpScale===1&&!t.bumpMap)return;let i=this.writer,s=i.extensionsUsed,r={};if(t.bumpMap){let o={index:await i.processTextureAsync(t.bumpMap),texCoord:t.bumpMap.channel};i.applyTextureTransform(o,t.bumpMap),r.bumpTexture=o}r.bumpFactor=t.bumpScale,e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},xu=class{constructor(t){this.writer=t,this.name="EXT_mesh_gpu_instancing"}writeNode(t,e){if(!t.isInstancedMesh)return;let i=this.writer,s=t,r=new Float32Array(s.count*3),o=new Float32Array(s.count*4),a=new Float32Array(s.count*3),l=new he,c=new I,h=new Qe,u=new I;for(let d=0;d<s.count;d++)s.getMatrixAt(d,l),l.decompose(c,h,u),c.toArray(r,d*3),h.toArray(o,d*4),u.toArray(a,d*3);let f={TRANSLATION:i.processAccessor(new Te(r,3)),ROTATION:i.processAccessor(new Te(o,4)),SCALE:i.processAccessor(new Te(a,3))};s.instanceColor&&(f._COLOR_0=i.processAccessor(s.instanceColor)),e.extensions=e.extensions||{},e.extensions[this.name]={attributes:f},i.extensionsUsed[this.name]=!0,i.extensionsRequired[this.name]=!0}};Hi.Utils={insertKeyframe:function(n,t){let i=n.getValueSize(),s=new n.TimeBufferType(n.times.length+1),r=new n.ValueBufferType(n.values.length+i),o=n.createInterpolant(new n.ValueBufferType(i)),a;if(n.times.length===0){s[0]=t;for(let l=0;l<i;l++)r[l]=0;a=0}else if(t<n.times[0]){if(Math.abs(n.times[0]-t)<.001)return 0;s[0]=t,s.set(n.times,1),r.set(o.evaluate(t),0),r.set(n.values,i),a=0}else if(t>n.times[n.times.length-1]){if(Math.abs(n.times[n.times.length-1]-t)<.001)return n.times.length-1;s[s.length-1]=t,s.set(n.times,0),r.set(n.values,0),r.set(o.evaluate(t),n.values.length),a=s.length-1}else for(let l=0;l<n.times.length;l++){if(Math.abs(n.times[l]-t)<.001)return l;if(n.times[l]<t&&n.times[l+1]>t){s.set(n.times.slice(0,l+1),0),s[l+1]=t,s.set(n.times.slice(l+1),l+2),r.set(n.values.slice(0,(l+1)*i),0),r.set(o.evaluate(t),(l+1)*i),r.set(n.values.slice((l+1)*i),(l+2)*i),a=l+1;break}}return n.times=s,n.values=r,a},mergeMorphTargetTracks:function(n,t){let e=[],i={},s=n.tracks;for(let r=0;r<s.length;++r){let o=s[r],a=oe.parseTrackName(o.name),l=oe.findNode(t,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){e.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(Ds)}let c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[a.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let u;if(i[l.uuid]===void 0){u=o.clone();let d=new u.ValueBufferType(c*u.times.length);for(let g=0;g<u.times.length;g++)d[g*c+h]=u.values[g];u.name=(a.nodeName||"")+".morphTargetInfluences",u.values=d,i[l.uuid]=u,e.push(u);continue}let f=o.createInterpolant(new o.ValueBufferType(1));u=i[l.uuid];for(let d=0;d<u.times.length;d++)u.values[d*c+h]=f.evaluate(u.times[d]);for(let d=0;d<o.times.length;d++){let g=this.insertKeyframe(u,o.times[d]);u.values[g*c+h]=o.values[d]}}return n.tracks=e,n},toTypedBufferAttribute:function(n,t){let e=new Te(new t(n.count*n.itemSize),n.itemSize,!1);if(!n.normalized&&!n.isInterleavedBufferAttribute)return e.array.set(n.array),e;for(let i=0,s=n.count;i<s;i++)for(let r=0;r<n.itemSize;r++)e.setComponent(i,r,n.getComponent(i,r));return e}};var $l=class{parse(t,e={}){e=Object.assign({binary:!1},e);let i=e.binary,s=[],r=0;t.traverse(function(m){if(m.isMesh){let T=m.geometry,w=T.index,_=T.getAttribute("position");r+=w!==null?w.count/3:_.count/3,s.push({object3d:m,geometry:T})}});let o,a=80;if(i===!0){let m=r*2+r*3*4*4+80+4,T=new ArrayBuffer(m);o=new DataView(T),o.setUint32(a,r,!0),a+=4}else o="",o+=`solid exported
`;let l=new I,c=new I,h=new I,u=new I,f=new I,d=new I;for(let m=0,T=s.length;m<T;m++){let w=s[m].object3d,_=s[m].geometry,v=_.index,S=_.getAttribute("position");if(v!==null)for(let b=0;b<v.count;b+=3){let x=v.getX(b+0),A=v.getX(b+1),R=v.getX(b+2);g(x,A,R,S,w)}else for(let b=0;b<S.count;b+=3){let x=b+0,A=b+1,R=b+2;g(x,A,R,S,w)}}return i===!1&&(o+=`endsolid exported
`),o;function g(m,T,w,_,v){l.fromBufferAttribute(_,m),c.fromBufferAttribute(_,T),h.fromBufferAttribute(_,w),v.isSkinnedMesh===!0&&(v.applyBoneTransform(m,l),v.applyBoneTransform(T,c),v.applyBoneTransform(w,h)),l.applyMatrix4(v.matrixWorld),c.applyMatrix4(v.matrixWorld),h.applyMatrix4(v.matrixWorld),y(l,c,h),p(l),p(c),p(h),i===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function y(m,T,w){u.subVectors(w,T),f.subVectors(m,T),u.cross(f).normalize(),d.copy(u).normalize(),i===!0?(o.setFloat32(a,d.x,!0),a+=4,o.setFloat32(a,d.y,!0),a+=4,o.setFloat32(a,d.z,!0),a+=4):(o+="	facet normal "+d.x+" "+d.y+" "+d.z+`
`,o+=`		outer loop
`)}function p(m){i===!0?(o.setFloat32(a,m.x,!0),a+=4,o.setFloat32(a,m.y,!0),a+=4,o.setFloat32(a,m.z,!0),a+=4):o+="			vertex "+m.x+" "+m.y+" "+m.z+`
`}}};var Wl=class{parse(t,e,i={}){function s(R){t.traverse(function(P){if(P.isMesh===!0||P.isPoints){let L=P,k=L.geometry;k.hasAttribute("position")===!0&&R(L,k)}})}i=Object.assign({binary:!1,excludeAttributes:[],littleEndian:!1,customPropertyMapping:{}},i);let o=i.excludeAttributes,a=i.customPropertyMapping,l=Object.keys(a),c=!0,h=!1,u=!1,f=!1,d="float",g="float",y="float",p="uchar",m={};for(let R of l)m[R]="float";let T=0,w=0;t.traverse(function(R){if(R.isMesh===!0){let L=R.geometry,k=L.getAttribute("position"),z=L.getAttribute("normal"),N=L.getAttribute("uv"),V=L.getAttribute("color"),F=L.getIndex();if(k===void 0)return;T+=k.count,w+=F?F.count/3:k.count/3,d=fi(k.array),z!==void 0&&(h=!0,g=fi(z.array)),N!==void 0&&(f=!0,y=fi(N.array)),V!==void 0&&(u=!0,p=fi(V.array));for(let X of l){let J=L.getAttribute(X);J!==void 0&&(m[X]=fi(J.array))}}else if(R.isPoints){let L=R.geometry,k=L.getAttribute("position"),z=L.getAttribute("normal"),N=L.getAttribute("color");T+=k.count,d=fi(k.array),z!==void 0&&(h=!0,g=fi(z.array)),N!==void 0&&(u=!0,p=fi(N.array));for(let V of l){let F=L.getAttribute(V);F!==void 0&&(m[V]=fi(F.array))}c=!1}});let _=new Bt;if(c=c&&o.indexOf("index")===-1,h=h&&o.indexOf("normal")===-1,u=u&&o.indexOf("color")===-1,f=f&&o.indexOf("uv")===-1,c&&w!==Math.floor(w))return console.error("PLYExporter: Failed to generate a valid PLY file with triangle indices because the number of indices is not divisible by 3."),null;let v=4,S=`ply
format ${i.binary?i.littleEndian?"binary_little_endian":"binary_big_endian":"ascii"} 1.0
element vertex ${T}
property ${d} x
property ${d} y
property ${d} z
`;h===!0&&(S+=`property ${g} nx
property ${g} ny
property ${g} nz
`),f===!0&&(S+=`property ${y} s
property ${y} t
`),u===!0&&(S+=`property ${p} red
property ${p} green
property ${p} blue
`);for(let R of l){let P=m[R];for(let L of a[R])S+=`property ${P} ${L}
`}c===!0&&(S+=`element face ${w}
property list uchar int vertex_index
`),S+=`end_header
`;let b=new I,x=new Xt,A=null;if(i.binary===!0){let R=new TextEncoder().encode(S),P=fo(d),L=h?fo(g):null,k=f?fo(y):null,z=u?fo(p):null,N=hs(p),V=zp(p),F={},X={},J=0;for(let H of l){let K=m[H],j=fo(K);F[H]=j,X[H]=hs(K),J+=a[H].length*j.size}let lt=T*(3*P.size+(h?3*L.size:0)+(f?2*k.size:0)+(u?3*z.size:0)+J),rt=c?w*(v*3+1):0,nt=new DataView(new ArrayBuffer(R.length+lt+rt));new Uint8Array(nt.buffer).set(R,0);let ft=R.length,ut=R.length+lt,pt=0;s(function(H,K){let j=K.getAttribute("position"),gt=K.getAttribute("normal"),Et=K.getAttribute("uv"),Pt=K.getAttribute("color"),Wt=K.getIndex();x.getNormalMatrix(H.matrixWorld);for(let xt=0,Q=j.count;xt<Q;xt++){if(b.fromBufferAttribute(j,xt),b.applyMatrix4(H.matrixWorld),P.write(nt,ft,b.x,i.littleEndian),ft+=P.size,P.write(nt,ft,b.y,i.littleEndian),ft+=P.size,P.write(nt,ft,b.z,i.littleEndian),ft+=P.size,h===!0&&(gt!=null?(b.fromBufferAttribute(gt,xt),b.applyMatrix3(x).normalize(),L.write(nt,ft,b.x,i.littleEndian),ft+=L.size,L.write(nt,ft,b.y,i.littleEndian),ft+=L.size,L.write(nt,ft,b.z,i.littleEndian),ft+=L.size):(L.write(nt,ft,0,i.littleEndian),ft+=L.size,L.write(nt,ft,0,i.littleEndian),ft+=L.size,L.write(nt,ft,0,i.littleEndian),ft+=L.size)),f===!0&&(Et!=null?(k.write(nt,ft,Et.getX(xt),i.littleEndian),ft+=k.size,k.write(nt,ft,Et.getY(xt),i.littleEndian),ft+=k.size):(k.write(nt,ft,0,i.littleEndian),ft+=k.size,k.write(nt,ft,0,i.littleEndian),ft+=k.size)),u===!0)if(Pt!=null){_.fromBufferAttribute(Pt,xt),ne.workingToColorSpace(_,Ie);let it=N?_.r:Math.round(_.r*V),st=N?_.g:Math.round(_.g*V),yt=N?_.b:Math.round(_.b*V);z.write(nt,ft,it,i.littleEndian),ft+=z.size,z.write(nt,ft,st,i.littleEndian),ft+=z.size,z.write(nt,ft,yt,i.littleEndian),ft+=z.size}else{let it=N?1:V;z.write(nt,ft,it,i.littleEndian),ft+=z.size,z.write(nt,ft,it,i.littleEndian),ft+=z.size,z.write(nt,ft,it,i.littleEndian),ft+=z.size}for(let it of l){let st=F[it],yt=a[it].length,_t=K.getAttribute(it),kt=X[it];for(let Lt=0;Lt<yt;Lt++){let Gt=_t!=null?kp(_t,xt,Lt):0;st.write(nt,ft,kt?Gt:Math.round(Gt),i.littleEndian),ft+=st.size}}}if(c===!0)if(Wt!==null)for(let xt=0,Q=Wt.count;xt<Q;xt+=3)nt.setUint8(ut,3),ut+=1,nt.setUint32(ut,Wt.getX(xt+0)+pt,i.littleEndian),ut+=v,nt.setUint32(ut,Wt.getX(xt+1)+pt,i.littleEndian),ut+=v,nt.setUint32(ut,Wt.getX(xt+2)+pt,i.littleEndian),ut+=v;else for(let xt=0,Q=j.count;xt<Q;xt+=3)nt.setUint8(ut,3),ut+=1,nt.setUint32(ut,pt+xt,i.littleEndian),ut+=v,nt.setUint32(ut,pt+xt+1,i.littleEndian),ut+=v,nt.setUint32(ut,pt+xt+2,i.littleEndian),ut+=v;pt+=j.count}),A=nt.buffer}else{let R=0,P="",L="",k=hs(d),z=hs(g),N=hs(y),V=hs(p),F=zp(p),X={};for(let lt of l)X[lt]=hs(m[lt]);let J=(lt,rt)=>rt?lt:Math.round(lt);s(function(lt,rt){let nt=rt.getAttribute("position"),ft=rt.getAttribute("normal"),ut=rt.getAttribute("uv"),pt=rt.getAttribute("color"),H=rt.getIndex();x.getNormalMatrix(lt.matrixWorld);for(let K=0,j=nt.count;K<j;K++){b.fromBufferAttribute(nt,K),b.applyMatrix4(lt.matrixWorld);let gt=J(b.x,k)+" "+J(b.y,k)+" "+J(b.z,k);if(h===!0&&(ft!=null?(b.fromBufferAttribute(ft,K),b.applyMatrix3(x).normalize(),gt+=" "+J(b.x,z)+" "+J(b.y,z)+" "+J(b.z,z)):gt+=" 0 0 0"),f===!0&&(ut!=null?gt+=" "+J(ut.getX(K),N)+" "+J(ut.getY(K),N):gt+=" 0 0"),u===!0)if(pt!=null){_.fromBufferAttribute(pt,K),ne.workingToColorSpace(_,Ie);let Et=V?_.r:Math.round(_.r*F),Pt=V?_.g:Math.round(_.g*F),Wt=V?_.b:Math.round(_.b*F);gt+=` ${Et} ${Pt} ${Wt}`}else{let Et=V?1:F;gt+=` ${Et} ${Et} ${Et}`}for(let Et of l){let Pt=a[Et].length,Wt=rt.getAttribute(Et),xt=X[Et];for(let Q=0;Q<Pt;Q++){let it=Wt!=null?kp(Wt,K,Q):0;gt+=" "+J(it,xt)}}P+=gt+`
`}if(c===!0){if(H!==null)for(let K=0,j=H.count;K<j;K+=3)L+=`3 ${H.getX(K+0)+R}`,L+=` ${H.getX(K+1)+R}`,L+=` ${H.getX(K+2)+R}
`;else for(let K=0,j=nt.count;K<j;K+=3)L+=`3 ${R+K} ${R+K+1} ${R+K+2}
`;w+=H?H.count/3:nt.count/3}R+=nt.count}),A=`${S}${P}${c?`${L}
`:`
`}`}return typeof e=="function"&&requestAnimationFrame(()=>e(A)),A}};function fi(n){return n instanceof Int8Array?"char":n instanceof Uint8Array||n instanceof Uint8ClampedArray?"uchar":n instanceof Int16Array?"short":n instanceof Uint16Array?"ushort":n instanceof Int32Array?"int":n instanceof Uint32Array?"uint":n instanceof Float32Array?"float":n instanceof Float64Array?"double":"float"}function fo(n){switch(n){case"char":return{write:(t,e,i)=>t.setInt8(e,i),size:1};case"uchar":return{write:(t,e,i)=>t.setUint8(e,i),size:1};case"short":return{write:(t,e,i,s)=>t.setInt16(e,i,s),size:2};case"ushort":return{write:(t,e,i,s)=>t.setUint16(e,i,s),size:2};case"int":return{write:(t,e,i,s)=>t.setInt32(e,i,s),size:4};case"uint":return{write:(t,e,i,s)=>t.setUint32(e,i,s),size:4};case"float":return{write:(t,e,i,s)=>t.setFloat32(e,i,s),size:4};case"double":return{write:(t,e,i,s)=>t.setFloat64(e,i,s),size:8}}}function hs(n){return n==="float"||n==="double"}function kp(n,t,e){switch(e){case 0:return n.getX(t);case 1:return n.getY(t);case 2:return n.getZ(t);case 3:return n.getW(t)}}function zp(n){switch(n){case"uchar":return 255;case"ushort":return 65535;default:return 1}}var $e=Uint8Array,gn=Uint16Array,Su=Int32Array,wu=new $e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Tu=new $e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Vp=new $e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),qp=function(n,t){for(var e=new gn(31),i=0;i<31;++i)e[i]=t+=1<<n[i-1];for(var s=new Su(e[30]),i=1;i<30;++i)for(var r=e[i];r<e[i+1];++r)s[r]=r-e[i]<<5|i;return{b:e,r:s}},Yp=qp(wu,2),sb=Yp.b,_u=Yp.r;sb[28]=258,_u[258]=28;var Zp=qp(Tu,0),VT=Zp.b,Hp=Zp.r,vu=new gn(32768);for(ue=0;ue<32768;++ue)di=(ue&43690)>>1|(ue&21845)<<1,di=(di&52428)>>2|(di&13107)<<2,di=(di&61680)>>4|(di&3855)<<4,vu[ue]=((di&65280)>>8|(di&255)<<8)>>1;var di,ue,go=(function(n,t,e){for(var i=n.length,s=0,r=new gn(t);s<i;++s)n[s]&&++r[n[s]-1];var o=new gn(t);for(s=1;s<t;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(e){a=new gn(1<<t);var l=15-t;for(s=0;s<i;++s)if(n[s])for(var c=s<<4|n[s],h=t-n[s],u=o[n[s]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)a[vu[u]>>l]=c}else for(a=new gn(i),s=0;s<i;++s)n[s]&&(a[s]=vu[o[n[s]-1]++]>>15-n[s]);return a}),us=new $e(288);for(ue=0;ue<144;++ue)us[ue]=8;var ue;for(ue=144;ue<256;++ue)us[ue]=9;var ue;for(ue=256;ue<280;++ue)us[ue]=7;var ue;for(ue=280;ue<288;++ue)us[ue]=8;var ue,Xl=new $e(32);for(ue=0;ue<32;++ue)Xl[ue]=5;var ue,rb=go(us,9,0);var ob=go(Xl,5,0);var Kp=function(n){return(n+7)/8|0},Jp=function(n,t,e){return(t==null||t<0)&&(t=0),(e==null||e>n.length)&&(e=n.length),new $e(n.subarray(t,e))};var ab=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ql=function(n,t,e){var i=new Error(t||ab[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,ql),!e)throw i;return i};var pi=function(n,t,e){e<<=t&7;var i=t/8|0;n[i]|=e,n[i+1]|=e>>8},po=function(n,t,e){e<<=t&7;var i=t/8|0;n[i]|=e,n[i+1]|=e>>8,n[i+2]|=e>>16},yu=function(n,t){for(var e=[],i=0;i<n.length;++i)n[i]&&e.push({s:i,f:n[i]});var s=e.length,r=e.slice();if(!s)return{t:Qp,l:0};if(s==1){var o=new $e(e[0].s+1);return o[e[0].s]=1,{t:o,l:1}}e.sort(function(v,S){return v.f-S.f}),e.push({s:-1,f:25001});var a=e[0],l=e[1],c=0,h=1,u=2;for(e[0]={s:-1,f:a.f+l.f,l:a,r:l};h!=s-1;)a=e[e[c].f<e[u].f?c++:u++],l=e[c!=h&&e[c].f<e[u].f?c++:u++],e[h++]={s:-1,f:a.f+l.f,l:a,r:l};for(var f=r[0].s,i=1;i<s;++i)r[i].s>f&&(f=r[i].s);var d=new gn(f+1),g=Mu(e[h-1],d,0);if(g>t){var i=0,y=0,p=g-t,m=1<<p;for(r.sort(function(S,b){return d[b.s]-d[S.s]||S.f-b.f});i<s;++i){var T=r[i].s;if(d[T]>t)y+=m-(1<<g-d[T]),d[T]=t;else break}for(y>>=p;y>0;){var w=r[i].s;d[w]<t?y-=1<<t-d[w]++-1:++i}for(;i>=0&&y;--i){var _=r[i].s;d[_]==t&&(--d[_],++y)}g=t}return{t:new $e(d),l:g}},Mu=function(n,t,e){return n.s==-1?Math.max(Mu(n.l,t,e+1),Mu(n.r,t,e+1)):t[n.s]=e},Gp=function(n){for(var t=n.length;t&&!n[--t];);for(var e=new gn(++t),i=0,s=n[0],r=1,o=function(l){e[i++]=l},a=1;a<=t;++a)if(n[a]==s&&a!=t)++r;else{if(!s&&r>2){for(;r>138;r-=138)o(32754);r>2&&(o(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(o(s),--r;r>6;r-=6)o(8304);r>2&&(o(r-3<<5|8208),r=0)}for(;r--;)o(s);r=1,s=n[a]}return{c:e.subarray(0,i),n:t}},mo=function(n,t){for(var e=0,i=0;i<t.length;++i)e+=n[i]*t[i];return e},jp=function(n,t,e){var i=e.length,s=Kp(t+2);n[s]=i&255,n[s+1]=i>>8,n[s+2]=n[s]^255,n[s+3]=n[s+1]^255;for(var r=0;r<i;++r)n[s+r+4]=e[r];return(s+4+i)*8},$p=function(n,t,e,i,s,r,o,a,l,c,h){pi(t,h++,e),++s[256];for(var u=yu(s,15),f=u.t,d=u.l,g=yu(r,15),y=g.t,p=g.l,m=Gp(f),T=m.c,w=m.n,_=Gp(y),v=_.c,S=_.n,b=new gn(19),x=0;x<T.length;++x)++b[T[x]&31];for(var x=0;x<v.length;++x)++b[v[x]&31];for(var A=yu(b,7),R=A.t,P=A.l,L=19;L>4&&!R[Vp[L-1]];--L);var k=c+5<<3,z=mo(s,us)+mo(r,Xl)+o,N=mo(s,f)+mo(r,y)+o+14+3*L+mo(b,R)+2*b[16]+3*b[17]+7*b[18];if(l>=0&&k<=z&&k<=N)return jp(t,h,n.subarray(l,l+c));var V,F,X,J;if(pi(t,h,1+(N<z)),h+=2,N<z){V=go(f,d,0),F=f,X=go(y,p,0),J=y;var lt=go(R,P,0);pi(t,h,w-257),pi(t,h+5,S-1),pi(t,h+10,L-4),h+=14;for(var x=0;x<L;++x)pi(t,h+3*x,R[Vp[x]]);h+=3*L;for(var rt=[T,v],nt=0;nt<2;++nt)for(var ft=rt[nt],x=0;x<ft.length;++x){var ut=ft[x]&31;pi(t,h,lt[ut]),h+=R[ut],ut>15&&(pi(t,h,ft[x]>>5&127),h+=ft[x]>>12)}}else V=rb,F=us,X=ob,J=Xl;for(var x=0;x<a;++x){var pt=i[x];if(pt>255){var ut=pt>>18&31;po(t,h,V[ut+257]),h+=F[ut+257],ut>7&&(pi(t,h,pt>>23&31),h+=wu[ut]);var H=pt&31;po(t,h,X[H]),h+=J[H],H>3&&(po(t,h,pt>>5&8191),h+=Tu[H])}else po(t,h,V[pt]),h+=F[pt]}return po(t,h,V[256]),h+F[256]},lb=new Su([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Qp=new $e(0),cb=function(n,t,e,i,s,r){var o=r.z||n.length,a=new $e(i+o+5*(1+Math.ceil(o/7e3))+s),l=a.subarray(i,a.length-s),c=r.l,h=(r.r||0)&7;if(t){h&&(l[0]=r.r>>3);for(var u=lb[t-1],f=u>>13,d=u&8191,g=(1<<e)-1,y=r.p||new gn(32768),p=r.h||new gn(g+1),m=Math.ceil(e/3),T=2*m,w=function(Q){return(n[Q]^n[Q+1]<<m^n[Q+2]<<T)&g},_=new Su(25e3),v=new gn(288),S=new gn(32),b=0,x=0,A=r.i||0,R=0,P=r.w||0,L=0;A+2<o;++A){var k=w(A),z=A&32767,N=p[k];if(y[z]=N,p[k]=z,P<=A){var V=o-A;if((b>7e3||R>24576)&&(V>423||!c)){h=$p(n,l,0,_,v,S,x,R,L,A-L,h),R=b=x=0,L=A;for(var F=0;F<286;++F)v[F]=0;for(var F=0;F<30;++F)S[F]=0}var X=2,J=0,lt=d,rt=z-N&32767;if(V>2&&k==w(A-rt))for(var nt=Math.min(f,V)-1,ft=Math.min(32767,A),ut=Math.min(258,V);rt<=ft&&--lt&&z!=N;){if(n[A+X]==n[A+X-rt]){for(var pt=0;pt<ut&&n[A+pt]==n[A+pt-rt];++pt);if(pt>X){if(X=pt,J=rt,pt>nt)break;for(var H=Math.min(rt,pt-2),K=0,F=0;F<H;++F){var j=A-rt+F&32767,gt=y[j],Et=j-gt&32767;Et>K&&(K=Et,N=j)}}}z=N,N=y[z],rt+=z-N&32767}if(J){_[R++]=268435456|_u[X]<<18|Hp[J];var Pt=_u[X]&31,Wt=Hp[J]&31;x+=wu[Pt]+Tu[Wt],++v[257+Pt],++S[Wt],P=A+X,++b}else _[R++]=n[A],++v[n[A]]}}for(A=Math.max(A,P);A<o;++A)_[R++]=n[A],++v[n[A]];h=$p(n,l,c,_,v,S,x,R,L,A-L,h),c||(r.r=h&7|l[h/8|0]<<3,h-=7,r.h=p,r.p=y,r.i=A,r.w=P)}else{for(var A=r.w||0;A<o+c;A+=65535){var xt=A+65535;xt>=o&&(l[h/8|0]=c,xt=o),h=jp(l,h+1,n.subarray(A,xt))}r.i=o}return Jp(a,0,i+Kp(h)+s)},hb=(function(){for(var n=new Int32Array(256),t=0;t<256;++t){for(var e=t,i=9;--i;)e=(e&1&&-306674912)^e>>>1;n[t]=e}return n})(),ub=function(){var n=-1;return{p:function(t){for(var e=n,i=0;i<t.length;++i)e=hb[e&255^t[i]]^e>>>8;n=e},d:function(){return~n}}};var fb=function(n,t,e,i,s){if(!s&&(s={l:1},t.dictionary)){var r=t.dictionary.subarray(-32768),o=new $e(r.length+n.length);o.set(r),o.set(n,r.length),n=o,s.w=r.length}return cb(n,t.level==null?6:t.level,t.mem==null?s.l?Math.ceil(Math.max(8,Math.min(13,Math.log(n.length)))*1.5):20:12+t.mem,e,i,s)},tm=function(n,t){var e={};for(var i in n)e[i]=n[i];for(var i in t)e[i]=t[i];return e};var Ge=function(n,t,e){for(;e;++t)n[t]=e,e>>>=8};function db(n,t){return fb(n,t||{},0,0)}var em=function(n,t,e,i){for(var s in n){var r=n[s],o=t+s,a=i;Array.isArray(r)&&(a=tm(i,r[1]),r=r[0]),r instanceof $e?e[o]=[r,a]:(e[o+="/"]=[new $e(0),a],em(r,o,e,i))}},Wp=typeof TextEncoder<"u"&&new TextEncoder,pb=typeof TextDecoder<"u"&&new TextDecoder,mb=0;try{pb.decode(Qp,{stream:!0}),mb=1}catch{}function xo(n,t){if(t){for(var e=new $e(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(Wp)return Wp.encode(n);for(var s=n.length,r=new $e(n.length+(n.length>>1)),o=0,a=function(h){r[o++]=h},i=0;i<s;++i){if(o+5>r.length){var l=new $e(o+8+(s-i<<1));l.set(r),r=l}var c=n.charCodeAt(i);c<128||t?a(c):c<2048?(a(192|c>>6),a(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|n.charCodeAt(++i)&1023,a(240|c>>18),a(128|c>>12&63),a(128|c>>6&63),a(128|c&63)):(a(224|c>>12),a(128|c>>6&63),a(128|c&63))}return Jp(r,0,o)}var bu=function(n){var t=0;if(n)for(var e in n){var i=n[e].length;i>65535&&ql(9),t+=i+4}return t},Xp=function(n,t,e,i,s,r,o,a){var l=i.length,c=e.extra,h=a&&a.length,u=bu(c);Ge(n,t,o!=null?33639248:67324752),t+=4,o!=null&&(n[t++]=20,n[t++]=e.os),n[t]=20,t+=2,n[t++]=e.flag<<1|(r<0&&8),n[t++]=s&&8,n[t++]=e.compression&255,n[t++]=e.compression>>8;var f=new Date(e.mtime==null?Date.now():e.mtime),d=f.getFullYear()-1980;if((d<0||d>119)&&ql(10),Ge(n,t,d<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),t+=4,r!=-1&&(Ge(n,t,e.crc),Ge(n,t+4,r<0?-r-2:r),Ge(n,t+8,e.size)),Ge(n,t+12,l),Ge(n,t+14,u),t+=16,o!=null&&(Ge(n,t,h),Ge(n,t+6,e.attrs),Ge(n,t+10,o),t+=14),n.set(i,t),t+=l,u)for(var g in c){var y=c[g],p=y.length;Ge(n,t,+g),Ge(n,t+2,p),n.set(y,t+4),t+=4+p}return h&&(n.set(a,t),t+=h),t},gb=function(n,t,e,i,s){Ge(n,t,101010256),Ge(n,t+8,e),Ge(n,t+10,e),Ge(n,t+12,i),Ge(n,t+16,s)};function nm(n,t){t||(t={});var e={},i=[];em(n,"",e,t);var s=0,r=0;for(var o in e){var a=e[o],l=a[0],c=a[1],h=c.level==0?0:8,u=xo(o),f=u.length,d=c.comment,g=d&&xo(d),y=g&&g.length,p=bu(c.extra);f>65535&&ql(11);var m=h?db(l,c):l,T=m.length,w=ub();w.p(l),i.push(tm(c,{size:l.length,crc:w.d(),c:m,f:u,m:g,u:f!=o.length||g&&d.length!=y,o:s,compression:h})),s+=30+f+p+T,r+=76+2*(f+p)+(y||0)+T}for(var _=new $e(r+22),v=s,S=r-s,b=0;b<i.length;++b){var u=i[b];Xp(_,u.o,u,u.f,u.u,u.c.length);var x=30+u.f.length+bu(u.extra);_.set(u.c,u.o+x),Xp(_,s,u,u.f,u.u,u.c.length,u.o,u.m),s+=16+x+(u.m?u.m.length:0)}return gb(_,s,i.length,S,v),_}var Ke=class{constructor(t,e="",i=[],s=[]){this.name=t,this.type=e,this.metadata=i,this.properties=s,this.children=[]}addMetadata(t,e){this.metadata.push({key:t,value:e})}addProperty(t,e=[]){this.properties.push({property:t,metadata:e})}addChild(t){this.children.push(t)}toString(t=0){let e="	".repeat(t),i=this.metadata.map(h=>{let u=h.key,f=h.value;if(Array.isArray(f)){let d=[];return d.push(`${u} = {`),f.forEach(g=>{d.push(`${e}		${g}`)}),d.push(`${e}	}`),d.join(`
`)}else return`${u} = ${f}`}),s=i.length?` (
${i.map(h=>`${e}	${h}`).join(`
`)}
${e})`:"",r=this.properties.map(h=>{let u=h.property.replace(/\n/g,`
`+e+"	"),f=h.metadata.length?` (
${h.metadata.map(d=>`${e}		${d}`).join(`
`)}
${e}	)`:"";return`${e}	${u}${f}`}),o=this.children.map(h=>h.toString(t+1)),a=[];if(r.length>0&&a.push(...r),o.length>0){r.length>0&&a.push("");for(let h=0;h<o.length;h++)a.push(o[h]),h<o.length-1&&a.push("")}let l=a.join(`
`),c=this.type?this.type+" ":"";return`${e}def ${c}"${this.name}"${s}
${e}{
${l}
${e}}`}},Zl=class{constructor(){this.textureUtils=null}setTextureUtils(t){this.textureUtils=t}parse(t,e,i,s){this.parseAsync(t,s).then(e).catch(i)}async parseAsync(t,e={}){e=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,onlyVisible:!0,quickLookCompatible:!1,maxTextureSize:1024,animations:[],animationFrameRate:60},e);let i=new Set,s={},r="model.usda";s[r]=null;let o=yb(t,e.animations);e.animationTracks=o;let a=new Ke("Root","Xform"),l=new Ke("Scenes","Scope");l.addMetadata("kind",'"sceneLibrary"'),a.addChild(l);let c="Scene",h=new Ke(c,"Xform");h.addMetadata("customData",["bool preliminary_collidesWithEnvironment = 0",`string sceneName = "${c}"`]),h.addMetadata("sceneName",`"${c}"`),e.includeAnchoringProperties&&(h.addProperty(`token preliminary:anchoring:type = "${e.ar.anchoring.type}"`),h.addProperty(`token preliminary:planeAnchoring:alignment = "${e.ar.planeAnchoring.alignment}"`)),l.addChild(h);let u,f={},d={};t.isScene?cm(t,h,f,i,s,e):hm(t,h,f,i,s,e);let g=Ab(f,d,e.quickLookCompatible),y=o.size>0?{fps:e.animationFrameRate,endTimeCode:_b(e.animations)*e.animationFrameRate}:null;u=lm(y)+`
`+a.toString()+`

`+g.toString(),s[r]=xo(u),u=null;for(let m in d){let T=d[m];if(T.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");T=await this.textureUtils.decompress(T)}let w=xb(T.image,T.flipY,e.maxTextureSize),_=T.userData.mimeType==="image/jpeg"?"image/jpeg":"image/png",v=await new Promise(S=>w.toBlob(S,_));s[`textures/Texture_${m}.${am(T)}`]=new Uint8Array(await v.arrayBuffer())}let p=0;for(let m in s){let T=s[m],w=34+m.length;p+=w;let _=p&63;if(_!==4){let v=64-_,S=new Uint8Array(v);s[m]=[T,{extra:{12345:S}}]}p=T.length}return nm(s,{level:0})}};function om(n,t){let e=n.name;return e=e.replace(/[^A-Za-z0-9_]/g,""),/^[0-9]/.test(e)&&(e="_"+e),e===""&&(n.isCamera?e="Camera":e="Object"),t.has(e)&&(e=e+"_"+n.id),t.add(e),e}function am(n){return n.userData.mimeType==="image/jpeg"?"jpg":"png"}function xb(n,t,e){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){let i=e/Math.max(n.width,n.height),s=document.createElement("canvas");s.width=n.width*Math.min(1,i),s.height=n.height*Math.min(1,i);let r=s.getContext("2d");return t===!0&&(r.translate(0,s.height),r.scale(1,-1)),r.drawImage(n,0,0,s.width,s.height),s}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}var se=7;function lm(n=null){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"${n?`
	startTimeCode = 0
	endTimeCode = ${n.endTimeCode}
	timeCodesPerSecond = ${n.fps}
	framesPerSecond = ${n.fps}`:""}
)
`}function yb(n,t){let e=new Map;for(let i=0;i<t.length;i++){let s=t[i];for(let r=0;r<s.tracks.length;r++){let o=s.tracks[r],a=oe.parseTrackName(o.name),l=oe.findNode(n,a.nodeName);if(l==null)continue;let c=a.propertyName;if(c!=="position"&&c!=="quaternion"&&c!=="scale")continue;let h=e.get(l);h===void 0&&(h={},e.set(l,h)),h[c]=o}}return e}function _b(n){let t=0;for(let e=0;e<n.length;e++)n[e].duration>t&&(t=n[e].duration);return t}function im(n,t,e,i){let s=e.times,r=e.values,o=[];for(let a=0;a<s.length;a++){let l=a*3;o.push(`${(s[a]*i).toPrecision(se)}: (${r[l].toPrecision(se)}, ${r[l+1].toPrecision(se)}, ${r[l+2].toPrecision(se)})`)}return`${t} ${n}.timeSamples = {
	${o.join(`,
	`)},
}`}function vb(n,t){let e=n.times,i=n.values,s=[];for(let r=0;r<e.length;r++){let o=r*4;s.push(`${(e[r]*t).toPrecision(se)}: (${i[o+3].toPrecision(se)}, ${i[o].toPrecision(se)}, ${i[o+1].toPrecision(se)}, ${i[o+2].toPrecision(se)})`)}return`quatf xformOp:orient.timeSamples = {
	${s.join(`,
	`)},
}`}function cm(n,t,e,i,s,r){for(let o=0,a=n.children.length;o<a;o++)hm(n.children[o],t,e,i,s,r)}function hm(n,t,e,i,s,r){if(n.visible===!1&&r.onlyVisible===!0)return;let o;if(n.isMesh){let a=n.geometry,l=Array.isArray(n.material),c=l?n.material:[n.material];for(let u=0;u<c.length;u++){let f=c[u];f.isMeshStandardMaterial||console.warn("THREE.USDZExporter: Use MeshStandardMaterial for best results."),f.uuid in e||(e[f.uuid]=f)}let h=c.map(u=>e[u.uuid]);if(l===!1){let u=`geometries/Geometry_${a.id}.usda`;if(!(u in s)){let f=Sb(a);s[u]=xo(lm()+`
`+f.toString())}}o=Mb(n,a,h,i,r)}else n.isCamera?o=Pb(n,i,r):o=fm(n,i,r);t.addChild(o),cm(n,o,e,i,s,r)}function um(n,t,e){let i=e.animationTracks.get(t),s=t.pivot!==null;if(!s&&i===void 0){let c=bb(t.matrix);n.addProperty(`matrix4d xformOp:transform = ${c}`),n.addProperty('uniform token[] xformOpOrder = ["xformOp:transform"]');return}let r=e.animationFrameRate,o=t.position,a=t.quaternion,l=t.scale;if(i!==void 0&&i.position!==void 0?n.addProperty(im("xformOp:translate","float3",i.position,r)):n.addProperty(`float3 xformOp:translate = (${o.x.toPrecision(se)}, ${o.y.toPrecision(se)}, ${o.z.toPrecision(se)})`),s){let c=t.pivot;n.addProperty(`float3 xformOp:translate:pivot = (${c.x.toPrecision(se)}, ${c.y.toPrecision(se)}, ${c.z.toPrecision(se)})`)}i!==void 0&&i.quaternion!==void 0?n.addProperty(vb(i.quaternion,r)):n.addProperty(`quatf xformOp:orient = (${a.w.toPrecision(se)}, ${a.x.toPrecision(se)}, ${a.y.toPrecision(se)}, ${a.z.toPrecision(se)})`),i!==void 0&&i.scale!==void 0?n.addProperty(im("xformOp:scale","float3",i.scale,r)):n.addProperty(`float3 xformOp:scale = (${l.x.toPrecision(se)}, ${l.y.toPrecision(se)}, ${l.z.toPrecision(se)})`),s?n.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:translate:pivot", "xformOp:orient", "xformOp:scale", "!invert!xformOp:translate:pivot"]'):n.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:orient", "xformOp:scale"]')}function fm(n,t,e){let i=om(n,t);n.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n);let s=new Ke(i,"Xform");return um(s,n,e),s}function Mb(n,t,e,i,s){let r=fm(n,i,s);return e.length===1?(r.addMetadata("prepend references",`@./geometries/Geometry_${t.id}.usda@</Geometry>`),r.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),r.addProperty(`rel material:binding = </Materials/Material_${e[0].id}>`)):r.addChild(dm(t,e)),r}function bb(n){let t=n.elements;return`( ${Yl(t,0)}, ${Yl(t,4)}, ${Yl(t,8)}, ${Yl(t,12)} )`}function Yl(n,t){return`(${n[t+0]}, ${n[t+1]}, ${n[t+2]}, ${n[t+3]})`}function Sb(n){let t=new Ke("Geometry"),e=dm(n);return t.addChild(e),t}function dm(n,t=null){let e="Geometry",i=n.attributes,s=i.position.count,r=new Ke(e,"Mesh");r.addProperty(`int[] faceVertexCounts = [${wb(n)}]`),r.addProperty(`int[] faceVertexIndices = [${Tb(n)}]`),r.addProperty(`normal3f[] normals = [${Eu(i.normal,s)}]`,['interpolation = "vertex"']),r.addProperty(`point3f[] points = [${Eu(i.position,s)}]`);for(let a=0;a<4;a++){let l=a>0?a:"",c=i["uv"+l];c!==void 0&&r.addProperty(`texCoord2f[] primvars:st${l} = [${Eb(c)}]`,['interpolation = "vertex"'])}let o=i.color;if(o!==void 0&&r.addProperty(`color3f[] primvars:displayColor = [${Eu(o,s)}]`,['interpolation = "vertex"']),r.addProperty('uniform token subdivisionScheme = "none"'),t!==null){let a=n.groups,l=(n.index!==null?n.index.count:i.position.count)/3;for(let c=0;c<a.length;c++){let h=a[c],u=t[h.materialIndex];if(u===void 0)continue;let f=Math.floor(h.start/3),d=Math.min(f+Math.floor(h.count/3),l),g=[];for(let p=f;p<d;p++)g.push(p);let y=new Ke(`subset_${c}`,"GeomSubset");y.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),y.addProperty('uniform token elementType = "face"'),y.addProperty('uniform token familyName = "materialBind"'),y.addProperty(`int[] indices = [${g.join(", ")}]`),y.addProperty(`rel material:binding = </Materials/Material_${u.id}>`),r.addChild(y)}}return r}function wb(n){let t=n.index!==null?n.index.count:n.attributes.position.count;return Array(t/3).fill(3).join(", ")}function Tb(n){let t=n.index,e=[];if(t!==null)for(let i=0;i<t.count;i++)e.push(t.getX(i));else{let i=n.attributes.position.count;for(let s=0;s<i;s++)e.push(s)}return e.join(", ")}function Eu(n,t){if(n===void 0)return console.warn("USDZExporter: Normals missing."),Array(t).fill("(0, 0, 0)").join(", ");let e=[];for(let i=0;i<n.count;i++){let s=n.getX(i),r=n.getY(i),o=n.getZ(i);e.push(`(${s.toPrecision(se)}, ${r.toPrecision(se)}, ${o.toPrecision(se)})`)}return e.join(", ")}function Eb(n){let t=[];for(let e=0;e<n.count;e++){let i=n.getX(e),s=n.getY(e);t.push(`(${i.toPrecision(se)}, ${1-s.toPrecision(se)})`)}return t.join(", ")}function Ab(n,t,e=!1){let i=new Ke("Materials");for(let s in n){let r=n[s];i.addChild(Cb(r,t,e))}return i}function Cb(n,t,e=!1){let i=new Ke(`Material_${n.id}`,"Material");function s(o,a,l){let c=o.source.id+"_"+o.flipY;t[c]=o;let h=o.channel>0?"st"+o.channel:"st",u={1e3:"repeat",1001:"clamp",1002:"mirror"},f=o.repeat.clone(),d=o.offset.clone(),g=o.rotation,y=Math.sin(g),p=Math.cos(g);d.y=1-d.y-f.y,e?(d.x=d.x/f.x,d.y=d.y/f.y,d.x+=y/f.x,d.y+=p-1):(d.x+=y*f.x,d.y+=(1-p)*f.y);let m=new Ke(`PrimvarReader_${a}`,"Shader");m.addProperty('uniform token info:id = "UsdPrimvarReader_float2"'),m.addProperty("float2 inputs:fallback = (0.0, 0.0)"),m.addProperty(`string inputs:varname = "${h}"`),m.addProperty("float2 outputs:result");let T=new Ke(`Transform2d_${a}`,"Shader");T.addProperty('uniform token info:id = "UsdTransform2d"'),T.addProperty(`float2 inputs:in.connect = </Materials/Material_${n.id}/PrimvarReader_${a}.outputs:result>`),T.addProperty(`float inputs:rotation = ${(g*(180/Math.PI)).toFixed(se)}`),T.addProperty(`float2 inputs:scale = ${rm(f)}`),T.addProperty(`float2 inputs:translation = ${rm(d)}`),T.addProperty("float2 outputs:result");let w=new Ke(`Texture_${o.id}_${a}`,"Shader");if(w.addProperty('uniform token info:id = "UsdUVTexture"'),w.addProperty(`asset inputs:file = @textures/Texture_${c}.${am(o)}@`),w.addProperty(`float2 inputs:st.connect = </Materials/Material_${n.id}/Transform2d_${a}.outputs:result>`),l!==void 0){let _=a==="diffuse"?n.opacity:1;w.addProperty(`float4 inputs:scale = ${Rb(l,_)}`)}if(a==="normal"){let _=n.normalScale.x;w.addProperty(`float4 inputs:scale = (${2*_}, ${2*_}, 2, 1)`),w.addProperty(`float4 inputs:bias = (${-_}, ${-_}, -1, 0)`)}return w.addProperty(`token inputs:sourceColorSpace = "${o.colorSpace===pn?"raw":"sRGB"}"`),w.addProperty(`token inputs:wrapS = "${u[o.wrapS]}"`),w.addProperty(`token inputs:wrapT = "${u[o.wrapT]}"`),w.addProperty("float outputs:r"),w.addProperty("float outputs:g"),w.addProperty("float outputs:b"),w.addProperty("float3 outputs:rgb"),(n.transparent||n.alphaTest>0)&&w.addProperty("float outputs:a"),[m,T,w]}n.side===en&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",n);let r=new Ke("PreviewSurface","Shader");if(r.addProperty('uniform token info:id = "UsdPreviewSurface"'),n.map!==null?(r.addProperty(`color3f inputs:diffuseColor.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:rgb>`),n.transparent?r.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`):n.alphaTest>0&&(r.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`),r.addProperty(`float inputs:opacityThreshold = ${n.alphaTest}`)),s(n.map,"diffuse",n.color).forEach(a=>i.addChild(a))):r.addProperty(`color3f inputs:diffuseColor = ${sm(n.color)}`),n.emissive){let o=n.emissiveIntensity??1;if(n.emissiveMap){r.addProperty(`color3f inputs:emissiveColor.connect = </Materials/Material_${n.id}/Texture_${n.emissiveMap.id}_emissive.outputs:rgb>`);let a=new Bt(n.emissive.r*o,n.emissive.g*o,n.emissive.b*o);s(n.emissiveMap,"emissive",a).forEach(c=>i.addChild(c))}else n.emissive.getHex()>0&&r.addProperty(`color3f inputs:emissiveColor = ${sm(n.emissive)}`)}if(n.normalMap&&(r.addProperty(`normal3f inputs:normal.connect = </Materials/Material_${n.id}/Texture_${n.normalMap.id}_normal.outputs:rgb>`),s(n.normalMap,"normal").forEach(a=>i.addChild(a))),n.aoMap){r.addProperty(`float inputs:occlusion.connect = </Materials/Material_${n.id}/Texture_${n.aoMap.id}_occlusion.outputs:r>`);let o=n.aoMapIntensity??1,a=new Bt(o,o,o);s(n.aoMap,"occlusion",a).forEach(c=>i.addChild(c))}if(n.roughnessMap){r.addProperty(`float inputs:roughness.connect = </Materials/Material_${n.id}/Texture_${n.roughnessMap.id}_roughness.outputs:g>`);let o=new Bt(n.roughness,n.roughness,n.roughness);s(n.roughnessMap,"roughness",o).forEach(l=>i.addChild(l))}else r.addProperty(`float inputs:roughness = ${n.roughness??1}`);if(n.metalnessMap){r.addProperty(`float inputs:metallic.connect = </Materials/Material_${n.id}/Texture_${n.metalnessMap.id}_metallic.outputs:b>`);let o=new Bt(n.metalness,n.metalness,n.metalness);s(n.metalnessMap,"metallic",o).forEach(l=>i.addChild(l))}else r.addProperty(`float inputs:metallic = ${n.metalness??0}`);if(n.alphaMap?(r.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.alphaMap.id}_opacity.outputs:r>`),r.addProperty("float inputs:opacityThreshold = 0.0001"),s(n.alphaMap,"opacity").forEach(a=>i.addChild(a))):r.addProperty(`float inputs:opacity = ${n.opacity}`),n.isMeshPhysicalMaterial){if(n.clearcoatMap!==null){r.addProperty(`float inputs:clearcoat.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatMap.id}_clearcoat.outputs:r>`);let o=new Bt(n.clearcoat,n.clearcoat,n.clearcoat);s(n.clearcoatMap,"clearcoat",o).forEach(l=>i.addChild(l))}else r.addProperty(`float inputs:clearcoat = ${n.clearcoat}`);if(n.clearcoatRoughnessMap!==null){r.addProperty(`float inputs:clearcoatRoughness.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`);let o=new Bt(n.clearcoatRoughness,n.clearcoatRoughness,n.clearcoatRoughness);s(n.clearcoatRoughnessMap,"clearcoatRoughness",o).forEach(l=>i.addChild(l))}else r.addProperty(`float inputs:clearcoatRoughness = ${n.clearcoatRoughness}`);r.addProperty(`float inputs:ior = ${n.ior}`)}return r.addProperty("int inputs:useSpecularWorkflow = 0"),r.addProperty("token outputs:surface"),i.addChild(r),i.addProperty(`token outputs:surface.connect = </Materials/Material_${n.id}/PreviewSurface.outputs:surface>`),i}function sm(n){return`(${n.r}, ${n.g}, ${n.b})`}function Rb(n,t=1){return`(${n.r}, ${n.g}, ${n.b}, ${t})`}function rm(n){return`(${n.x}, ${n.y})`}function Pb(n,t,e){let i=om(n,t);n.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n);let s=new Ke(i,"Camera");um(s,n,e);let r=n.isOrthographicCamera?"orthographic":"perspective";s.addProperty(`token projection = "${r}"`);let o=`(${n.near.toPrecision(se)}, ${n.far.toPrecision(se)})`;s.addProperty(`float2 clippingRange = ${o}`);let a;n.isOrthographicCamera?a=((Math.abs(n.left)+Math.abs(n.right))*10).toPrecision(se):a=n.getFilmWidth().toPrecision(se),s.addProperty(`float horizontalAperture = ${a}`);let l;if(n.isOrthographicCamera?l=((Math.abs(n.top)+Math.abs(n.bottom))*10).toPrecision(se):l=n.getFilmHeight().toPrecision(se),s.addProperty(`float verticalAperture = ${l}`),n.isPerspectiveCamera){let c=n.getFocalLength().toPrecision(se);s.addProperty(`float focalLength = ${c}`);let h=n.focus.toPrecision(se);s.addProperty(`float focusDistance = ${h}`)}return s}var yo=n=>{isFinite(n)||(n=0);let t=(Math.round(n*1e5)/1e5).toString();return t==="-0"&&(t="0"),t},Au=n=>String(n||"mesh").replace(/[^A-Za-z0-9_]/g,"_")||"mesh";function Ib(n){n.updateWorldMatrix(!0,!0);let t=[],e=new I,i=new I;return n.traverse(s=>{if(!s.isMesh||!s.visible||!s.geometry||s.name.endsWith(":cut")||s.name.startsWith("ghost"))return;for(let f=s;f;f=f.parent)if(f.userData?.isMarker||String(f.name).startsWith("marker:"))return;let r=s.geometry.index?s.geometry.toNonIndexed():s.geometry,o=r.getAttribute("position"),a=r.getAttribute("normal"),l=new Xt().getNormalMatrix(s.matrixWorld),c=[],h=[];for(let f=0;f<o.count;f++)e.fromBufferAttribute(o,f).applyMatrix4(s.matrixWorld),c.push(e.x,e.y,e.z),a&&(i.fromBufferAttribute(a,f).applyMatrix3(l).normalize(),h.push(i.x,i.y,i.z));r!==s.geometry&&r.dispose();let u=s.material?.color?s.material.color:new Bt(.72,.74,.77);t.push({name:s.name||"mesh",verts:c,normals:h,color:[u.r,u.g,u.b],material:s.material?.name||"steel"})}),t}function Cu(n,t={}){let e=Ib(n),i=new Date,s=[],r=c=>s.push(c);r("; FBX 7.4.0 project file"),r("; VRINGON CAD \u2014 revolve part (mm)"),r(""),r("FBXHeaderExtension:  {"),r("	FBXHeaderVersion: 1003"),r("	FBXVersion: 7400"),r(`	CreationTimeStamp:  {
		Version: 1000
		Year: ${i.getFullYear()}
		Month: ${i.getMonth()+1}
		Day: ${i.getDate()}
		Hour: ${i.getHours()}
		Minute: ${i.getMinutes()}
		Second: ${i.getSeconds()}
		Millisecond: 0
	}`),r('	Creator: "VRINGON CAD revolve exporter"'),r("}"),r("GlobalSettings:  {"),r("	Version: 1000"),r("	Properties70:  {"),r('		P: "UpAxis", "int", "Integer", "",1'),r('		P: "UpAxisSign", "int", "Integer", "",1'),r('		P: "FrontAxis", "int", "Integer", "",2'),r('		P: "FrontAxisSign", "int", "Integer", "",1'),r('		P: "CoordAxis", "int", "Integer", "",0'),r('		P: "CoordAxisSign", "int", "Integer", "",1'),r('		P: "OriginalUpAxis", "int", "Integer", "",1'),r('		P: "OriginalUpAxisSign", "int", "Integer", "",1'),r('		P: "UnitScaleFactor", "double", "Number", "",0.1'),r('		P: "OriginalUnitScaleFactor", "double", "Number", "",0.1'),r('		P: "AmbientColor", "ColorRGB", "Color", "",0,0,0'),r('		P: "DefaultCamera", "KString", "", "", "Producer Perspective"'),r('		P: "TimeMode", "enum", "", "",11'),r('		P: "TimeSpanStart", "KTime", "Time", "",0'),r('		P: "TimeSpanStop", "KTime", "Time", "",46186158000'),r('		P: "CustomFrameRate", "double", "Number", "",-1'),r("	}"),r("}"),r("Documents:  {"),r("	Count: 1"),r('	Document: 1000000, "", "Scene" {'),r(`		Properties70:  {
			P: "SourceObject", "object", "", ""
			P: "ActiveAnimStackName", "KString", "", "", ""
		}`),r("		RootNode: 0"),r("	}"),r("}"),r(`References:  {
}`);let o=e.length,a=e.length;r("Definitions:  {"),r("	Version: 100"),r(`	Count: ${1+o+o+a}`),r(`	ObjectType: "GlobalSettings" {
		Count: 1
	}`),r(`	ObjectType: "Model" {
		Count: ${o}
		PropertyTemplate: "FbxNode" {
			Properties70:  {
				P: "Lcl Translation", "Lcl Translation", "", "A",0,0,0
				P: "Lcl Rotation", "Lcl Rotation", "", "A",0,0,0
				P: "Lcl Scaling", "Lcl Scaling", "", "A",1,1,1
				P: "Visibility", "Visibility", "", "A",1
			}
		}
	}`),r(`	ObjectType: "Geometry" {
		Count: ${o}
		PropertyTemplate: "FbxMesh" {
			Properties70:  {
				P: "Color", "ColorRGB", "Color", "",0.8,0.8,0.8
				P: "Primary Visibility", "bool", "", "",1
				P: "Casts Shadows", "bool", "", "",1
				P: "Receive Shadows", "bool", "", "",1
			}
		}
	}`),r(`	ObjectType: "Material" {
		Count: ${a}
		PropertyTemplate: "FbxSurfacePhong" {
			Properties70:  {
				P: "ShadingModel", "KString", "", "", "Phong"
				P: "DiffuseColor", "Color", "", "A",0.8,0.8,0.8
				P: "SpecularColor", "Color", "", "A",0.2,0.2,0.2
				P: "Shininess", "Number", "", "A",20
			}
		}
	}`),r("}"),r("Objects:  {");let l=[];e.forEach((c,h)=>{let u=2e6+h,f=3e6+h,d=4e6+h;l.push({gid:u,mid:f,matid:d});let g=c.verts.length/3,y=[];for(let w=0;w<g;w+=3)y.push(w,w+1,-(w+2)-1);r(`	Geometry: ${u}, "Geometry::${Au(c.name)}", "Mesh" {`),r(`		Vertices: *${c.verts.length} {
			a: ${c.verts.map(yo).join(",")}
		}`),r(`		PolygonVertexIndex: *${y.length} {
			a: ${y.join(",")}
		}`),r("		GeometryVersion: 124"),c.normals.length===c.verts.length&&r(`		LayerElementNormal: 0 {
			Version: 101
			Name: ""
			MappingInformationType: "ByPolygonVertex"
			ReferenceInformationType: "Direct"
			Normals: *${c.normals.length} {
				a: ${c.normals.map(yo).join(",")}
			}
		}`),r(`		LayerElementMaterial: 0 {
			Version: 101
			Name: ""
			MappingInformationType: "AllSame"
			ReferenceInformationType: "IndexToDirect"
			Materials: *1 {
				a: 0
			}
		}`),r(`		Layer: 0 {
			Version: 100
			LayerElement:  {
				Type: "LayerElementNormal"
				TypedIndex: 0
			}
			LayerElement:  {
				Type: "LayerElementMaterial"
				TypedIndex: 0
			}
		}`),r("	}"),r(`	Model: ${f}, "Model::${Au(c.name)}", "Mesh" {
		Version: 232
		Properties70:  {
			P: "InheritType", "enum", "", "",1
			P: "DefaultAttributeIndex", "int", "Integer", "",0
			P: "Lcl Translation", "Lcl Translation", "", "A",0,0,0
		}
		Shading: T
		Culling: "CullingOff"
	}`);let[p,m,T]=c.color;r(`	Material: ${d}, "Material::${Au(c.material)}", "" {
		Version: 102
		ShadingModel: "phong"
		MultiLayer: 0
		Properties70:  {
			P: "ShadingModel", "KString", "", "", "Phong"
			P: "DiffuseColor", "Color", "", "A",${yo(p)},${yo(m)},${yo(T)}
			P: "SpecularColor", "Color", "", "A",0.5,0.5,0.5
			P: "Shininess", "Number", "", "A",40
			P: "Opacity", "Number", "", "A",1
		}
	}`)}),r("}"),r("Connections:  {");for(let{gid:c,mid:h,matid:u}of l)r(`	;Model::mesh, Model::RootNode
	C: "OO",${h},0`),r(`	;Geometry::mesh, Model::mesh
	C: "OO",${c},${h}`),r(`	;Material::mat, Model::mesh
	C: "OO",${u},${h}`);return r("}"),r(`Takes:  {
	Current: ""
}`),s.join(`
`)+`
`}var jT=Math.PI/180;function Kl(n){for(let t=n;t;t=t.parent)if(t.userData?.isMarker||String(t.name).startsWith("marker:"))return!0;return!1}function Ru(n,t=null){n.updateWorldMatrix(!0,!0);let e=[],i=new I;return n.traverse(s=>{if(!s.isMesh||!s.visible||!s.geometry||s.name.endsWith(":cut")||s.name.startsWith("ghost")||Kl(s)||t&&!t(s))return;let r=s.geometry.index?s.geometry.toNonIndexed():s.geometry,o=r.getAttribute("position"),a=[];for(let l=0;l<o.count;l++)i.fromBufferAttribute(o,l).applyMatrix4(s.matrixWorld),a.push(i.x,i.y,i.z);r!==s.geometry&&r.dispose(),e.push({name:s.name||"part",tris:a})}),e}var me=n=>{isFinite(n)||(n=0);let t=n.toFixed(5);return t==="-0.00000"?"0.00000":t},mi=n=>String(n).replace(/[^A-Za-z0-9_\- ]/g,"_");function mm(n,t="vringon_shaft",e=null){let i=Ru(n);e&&(e.freeEdges=0,e.nonManifold=0,e.faces=0);let s=[],r=0,o=R=>(r+=1,s.push(`#${r}=${R};`),r),a=o("APPLICATION_CONTEXT('core data for automotive mechanical design processes')");o(`APPLICATION_PROTOCOL_DEFINITION('international standard','automotive_design',2000,#${a})`);let l=o(`PRODUCT_CONTEXT('',#${a},'mechanical')`),c=o(`PRODUCT('${mi(t)}','${mi(t)}','VRINGON revolve part',(#${l}))`),h=o(`PRODUCT_DEFINITION_FORMATION('','',#${c})`),u=o(`PRODUCT_DEFINITION_CONTEXT('part definition',#${a},'design')`),f=o(`PRODUCT_DEFINITION('design','',#${h},#${u})`),d=o(`PRODUCT_DEFINITION_SHAPE('','',#${f})`),g=o("(LENGTH_UNIT()NAMED_UNIT(*)SI_UNIT(.MILLI.,.METRE.))"),y=o("(NAMED_UNIT(*)PLANE_ANGLE_UNIT()SI_UNIT($,.RADIAN.))"),p=o("(NAMED_UNIT(*)SI_UNIT($,.STERADIAN.)SOLID_ANGLE_UNIT())"),m=o(`UNCERTAINTY_MEASURE_WITH_UNIT(LENGTH_MEASURE(0.01),#${g},'distance_accuracy_value','')`),T=o(`(GEOMETRIC_REPRESENTATION_CONTEXT(3)GLOBAL_UNCERTAINTY_ASSIGNED_CONTEXT((#${m}))GLOBAL_UNIT_ASSIGNED_CONTEXT((#${g},#${y},#${p}))REPRESENTATION_CONTEXT('Context #1','3D Context'))`),w=o("CARTESIAN_POINT('',(0.,0.,0.))"),_=o("DIRECTION('',(0.,0.,1.))"),v=o("DIRECTION('',(1.,0.,0.))"),S=o(`AXIS2_PLACEMENT_3D('',#${w},#${_},#${v})`),b=[];for(let R of i){let{tris:P,name:L}=R,k=new Map,z=[],N=[],V=[],F=[];for(let ut=0;ut<P.length;ut+=3){let pt=`${Math.round(P[ut]*1e4)}_${Math.round(P[ut+1]*1e4)}_${Math.round(P[ut+2]*1e4)}`,H=k.get(pt);if(H===void 0){H=z.length,k.set(pt,H);let K=o(`CARTESIAN_POINT('',(${me(P[ut])},${me(P[ut+1])},${me(P[ut+2])}))`);z.push(K),N.push(o(`VERTEX_POINT('',#${K})`)),V.push(P[ut],P[ut+1],P[ut+2])}F.push(H)}let X=(ut,pt)=>V[ut*3+pt],J=new Map,lt=new Map,rt=(ut,pt)=>{let H=ut<pt?`${ut}_${pt}`:`${pt}_${ut}`;lt.set(H,(lt.get(H)||0)+1);let K=J.get(H);if(!K){let j=ut<pt?ut:pt,gt=ut<pt?pt:ut,Et=X(gt,0)-X(j,0),Pt=X(gt,1)-X(j,1),Wt=X(gt,2)-X(j,2),xt=Math.hypot(Et,Pt,Wt)||1,Q=o(`DIRECTION('',(${me(Et/xt)},${me(Pt/xt)},${me(Wt/xt)}))`),it=o(`VECTOR('',#${Q},${me(xt)})`),st=o(`LINE('',#${z[j]},#${it})`);K=o(`EDGE_CURVE('',#${N[j]},#${N[gt]},#${st},.T.)`),J.set(H,K)}return{ec:K,fwd:ut<pt}},nt=[];for(let ut=0;ut<F.length;ut+=3){let pt=F[ut],H=F[ut+1],K=F[ut+2];if(pt===H||H===K||pt===K)continue;let j=X(pt,0),gt=X(pt,1),Et=X(pt,2),Pt=X(H,0),Wt=X(H,1),xt=X(H,2),Q=X(K,0),it=X(K,1),st=X(K,2),yt=(Wt-gt)*(st-Et)-(xt-Et)*(it-gt),_t=(xt-Et)*(Q-j)-(Pt-j)*(st-Et),kt=(Pt-j)*(it-gt)-(Wt-gt)*(Q-j),Lt=Math.hypot(yt,_t,kt);if(Lt<1e-9)continue;yt/=Lt,_t/=Lt,kt/=Lt;let Gt=Pt-j,Zt=Wt-gt,D=xt-Et,le=Math.hypot(Gt,Zt,D)||1;Gt/=le,Zt/=le,D/=le;let jt=rt(pt,H),C=rt(H,K),M=rt(K,pt),B=o(`ORIENTED_EDGE('',*,*,#${jt.ec},${jt.fwd?".T.":".F."})`),G=o(`ORIENTED_EDGE('',*,*,#${C.ec},${C.fwd?".T.":".F."})`),Y=o(`ORIENTED_EDGE('',*,*,#${M.ec},${M.fwd?".T.":".F."})`),dt=o(`EDGE_LOOP('',(#${B},#${G},#${Y}))`),mt=o(`FACE_OUTER_BOUND('',#${dt},.T.)`),Z=o(`CARTESIAN_POINT('',(${me(j)},${me(gt)},${me(Et)}))`),tt=o(`DIRECTION('',(${me(yt)},${me(_t)},${me(kt)}))`),vt=o(`DIRECTION('',(${me(Gt)},${me(Zt)},${me(D)}))`),Ft=o(`AXIS2_PLACEMENT_3D('',#${Z},#${tt},#${vt})`),bt=o(`PLANE('',#${Ft})`);nt.push(o(`ADVANCED_FACE('',(#${mt}),#${bt},.T.)`))}if(!nt.length)continue;if(e){for(let ut of lt.values())ut===1?e.freeEdges++:ut>2&&e.nonManifold++;e.faces+=nt.length}let ft=o(`CLOSED_SHELL('',(${nt.map(ut=>"#"+ut).join(",")}))`);b.push(o(`MANIFOLD_SOLID_BREP('${mi(L)}',#${ft})`))}let x=o(`ADVANCED_BREP_SHAPE_REPRESENTATION('${mi(t)}',(#${S},${b.map(R=>"#"+R).join(",")}),#${T})`);o(`SHAPE_DEFINITION_REPRESENTATION(#${d},#${x})`);let A=new Date().toISOString().slice(0,19);return["ISO-10303-21;","HEADER;","FILE_DESCRIPTION(('VRINGON revolve faceted B-Rep export'),'2;1');",`FILE_NAME('${mi(t)}.step','${A}',('VRINGON CAD'),('VRINGON Inc.'),'VRINGON CAD 1.0','VRINGON CAD','');`,"FILE_SCHEMA(('AUTOMOTIVE_DESIGN { 1 0 10303 214 1 1 1 1 }'));","ENDSEC;","DATA;",...s,"ENDSEC;","END-ISO-10303-21;",""].join(`
`)}function gm(n){let t=Ru(n),e=["# VRINGON revolve export (mm)"],i=1;for(let s of t){e.push(`o ${mi(s.name)}`);let r=s.tris,o=r.length/3;for(let a=0;a<r.length;a+=3)e.push(`v ${me(r[a])} ${me(r[a+1])} ${me(r[a+2])}`);for(let a=0;a<o;a+=3)e.push(`f ${i+a} ${i+a+1} ${i+a+2}`);i+=o}return e.push(""),e.join(`
`)}function xm(n){let t=new je;return n.traverse(e=>{if(e.isMesh&&!e.name.endsWith(":cut")&&!e.name.startsWith("ghost")&&!Kl(e)){let i=new ae(e.geometry,e.material);i.applyMatrix4(e.matrixWorld),t.add(i)}}),new $l().parse(t,{binary:!0})}function ym(n){let t=new je;return n.traverse(e=>{if(e.isMesh&&!e.name.endsWith(":cut")&&!e.name.startsWith("ghost")&&!Kl(e)){let i=new ae(e.geometry,e.material);i.name=e.name,i.applyMatrix4(e.matrixWorld),t.add(i)}}),new Promise((e,i)=>new Hi().parse(t,e,i,{binary:!0}))}function _m(n){let t=new je;return n.traverse(e=>{if(e.isMesh&&!e.name.endsWith(":cut")&&!e.name.startsWith("ghost")&&!Kl(e)){let i=new ae(e.geometry,e.material);i.name=e.name,i.applyMatrix4(e.matrixWorld),t.add(i)}}),t}function vm(n){return new Wl().parse(_m(n),null,{binary:!1})}function Mm(n){let t=_m(n),e=new je;return e.name="mm_to_m",e.scale.setScalar(.001),e.add(t),e.updateMatrixWorld(!0),new Zl().parseAsync(e,{includeAnchoringProperties:!1})}function bm(n,t,e={}){let i=Ru(n),s=l=>`"${String(l).replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`,r=[];if(t&&t.part2){let l=mi(t.sheet||"part").replace(/[^A-Za-z0-9_]/g,"_")||"part";return r.push("#usda 1.0","(",`    defaultPrim = "${l}"`,"    metersPerUnit = 0.001",'    upAxis = "Y"','    doc = "VRINGON multiview part \u2014 reconstructed from orthographic views"',")",""),r.push(`def Xform "${l}" (`,'    kind = "component"',")","{"),r.push('    custom string vringon:source = "multiview"'),r.push(`    custom string vringon:spec_json = ${s(JSON.stringify(t))}`),r.push(`    custom double vringon:mm_per_px = ${t.mm_per_px||0}`),t.result?.size&&r.push(`    custom double3 vringon:size_mm = (${t.result.size.X}, ${t.result.size.Y}, ${t.result.size.Z})`),t.result?.volume!=null&&r.push(`    custom double vringon:volume_cm3 = ${t.result.volume}`),r.push(""),pm(r,i,s),r.push("}",""),r.join(`
`)}let o=mi(t.id||t.name||"shaft").replace(/[^A-Za-z0-9_]/g,"_")||"shaft",a=Rp(t,sp(t.material));return r.push("#usda 1.0","(",`    defaultPrim = "${o}"`,"    metersPerUnit = 0.001",'    upAxis = "Y"','    doc = "VRINGON revolve part \u2014 generated from shaft DSL"',")",""),r.push(`def Xform "${o}" (`,'    kind = "component"',")","{"),r.push(`    custom string vringon:dsl_version = ${s(t.dsl||"vringon-shaft/1.0")}`),r.push(`    custom string vringon:dsl_json = ${s(JSON.stringify(t))}`),r.push(`    custom string vringon:name_ko = ${s(t.name_ko||"")}`),r.push(`    custom string vringon:material = ${s(t.material||"")}`),r.push(`    custom double vringon:length_mm = ${cs(t)}`),r.push(`    custom double vringon:max_diameter_mm = ${Vh(t)}`),r.push(`    custom double vringon:volume_mm3 = ${a.volume_mm3.toFixed(3)}`),r.push(`    custom double vringon:mass_g = ${a.mass_g.toFixed(3)}`),r.push(`    custom double[] vringon:segment_lengths_mm = [${(t.segments||[]).map(l=>l.length).join(", ")}]`),r.push(`    custom double[] vringon:segment_diameters_mm = [${(t.segments||[]).map(l=>l.type==="taper"?l.d_start:l.diameter).join(", ")}]`),r.push(`    custom string[] vringon:segment_types = [${(t.segments||[]).map(l=>s(l.type)).join(", ")}]`),r.push(`    custom string[] vringon:features = [${(t.features||[]).map(l=>s(l.type)).join(", ")}]`),r.push(""),pm(r,i,s),r.push("}",""),r.join(`
`)}function pm(n,t,e){for(let i of t){let s=i.tris,r=s.length/3,o=[];for(let y=0;y<s.length;y+=3)o.push(`(${me(s[y])}, ${me(s[y+1])}, ${me(s[y+2])})`);let a=new Array(r/3).fill(3).join(", "),l=Array.from({length:r},(y,p)=>p).join(", "),c=1/0,h=1/0,u=1/0,f=-1/0,d=-1/0,g=-1/0;for(let y=0;y<s.length;y+=3)c=Math.min(c,s[y]),f=Math.max(f,s[y]),h=Math.min(h,s[y+1]),d=Math.max(d,s[y+1]),u=Math.min(u,s[y+2]),g=Math.max(g,s[y+2]);n.push(`    def Mesh "${mi(i.name).replace(/[^A-Za-z0-9_]/g,"_")||"mesh"}"`,"    {"),n.push(`        float3[] extent = [(${me(c)}, ${me(h)}, ${me(u)}), (${me(f)}, ${me(d)}, ${me(g)})]`),n.push(`        int[] faceVertexCounts = [${a}]`),n.push(`        int[] faceVertexIndices = [${l}]`),n.push(`        point3f[] points = [${o.join(", ")}]`),n.push('        uniform token subdivisionScheme = "none"'),n.push("        color3f[] primvars:displayColor = [(0.72, 0.74, 0.77)]"),n.push("    }")}}function Yn(n,t,e="application/octet-stream"){let i=n instanceof Blob?n:new Blob([n],{type:e}),s=URL.createObjectURL(i),r=document.createElement("a");return r.href=s,r.download=t,document.body.appendChild(r),r.click(),setTimeout(()=>{URL.revokeObjectURL(s),r.remove()},800),i.size}var Pu={part1:"vringon.revolve.tour.v1",part2:"vringon.part2.tour.v1",sculpt:"vringon.sculpt.tour.v1"},vo=n=>document.getElementById(n),wm=[{el:"chips",place:"right",title:"\uC0D8\uD50C \uB3C4\uBA74\uC73C\uB85C \uC2DC\uC791",body:"\uCE74\uB4DC\uB97C \uB204\uB974\uBA74 \uADF8 \uB3C4\uBA74\uC73C\uB85C \uBC14\uB85C \uC9C4\uD589\uB429\uB2C8\uB2E4. \uCC98\uC74C\uC774\uB77C\uBA74 \uC5EC\uAE30\uC11C \uC2DC\uC791\uD558\uC138\uC694."},{el:"drop",place:"right",title:"\uB0B4 \uB3C4\uBA74 \uC62C\uB9AC\uAE30",body:"\uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4 \uD55C \uC7A5\uC744 \uC62C\uB9BD\uB2C8\uB2E4. \uC544\uB798\uC5D0\uC11C \uBD80\uD488 \uC720\uD615\uC744 \uBA3C\uC800 \uACE8\uB77C \uB450\uBA74 \uADF8 \uC720\uD615\uC5D0 \uB9DE\uAC8C \uC2DC\uBBAC\uB808\uC774\uC158\uD569\uB2C8\uB2E4.",link:{href:"./guide.html",text:"\uC62C\uB9AC\uAE30 \uC548\uB0B4 \uC5F4\uAE30"}},{el:"stepper",place:"bottom",title:"\uB124 \uB2E8\uACC4\uB85C \uC9C4\uD589",body:"\uB3C4\uBA74 \uC785\uB825, \uD310\uB3C5, 3D CAD, \uAC80\uC99D \uC21C\uC11C\uC785\uB2C8\uB2E4. \uC9C0\uAE08 \uB2E8\uACC4\uAC00 \uC704\uCABD\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4."},{el:"stageNext",fallback:"stage",fallbackBox:{right:18,bottom:84,w:150,h:42},place:"top",title:"\uB2E4\uC74C \uB2E8\uACC4 \uBC84\uD2BC",body:"\uC624\uB978\uCABD \uC544\uB798 \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uB2E4\uC74C \uB2E8\uACC4\uAC00 \uC2E4\uD589\uB429\uB2C8\uB2E4. \uBC84\uD2BC \uC704 \uD55C \uC904\uC774 \uADF8 \uB2E8\uACC4\uAC00 \uD558\uB294 \uC77C\uC785\uB2C8\uB2E4."},{el:"stageActions",fallback:"stage",fallbackBox:{right:14,top:122,w:210,h:34},narrowBox:{left:8,top:52,w:300,h:34},place:"left",title:"\uBCF4\uAE30 \uC804\uD658\uACFC \uC870\uB9BD \xB7 \uC2DC\uBBAC",body:"\uB2E8\uBA74\uACFC \uB3C4\uBA74\uC744 \uBC88\uAC08\uC544 \uBCF4\uACE0, \uC870\uB9BD \xB7 \uC2DC\uBBAC\uC744 \uCF1C\uBA74 \uC0C1\uB300 \uBD80\uD488\uACFC \uD68C\uC804\uC774 \uBD99\uC2B5\uB2C8\uB2E4. \uB044\uBA74 \uBD80\uD488\uB9CC \uB0A8\uC2B5\uB2C8\uB2E4."},{el:"sideRight",place:"left",title:"\uACB0\uACFC\uC640 \uB0B4\uB824\uBC1B\uAE30",body:"\uD310\uB3C5\uD55C \uCE58\uC218\uB97C \uACE0\uCE58\uBA74 3D\uC640 \uB3C4\uBA74\uC774 \uD568\uAED8 \uBC14\uB01D\uB2C8\uB2E4. 3D\uAC00 \uB9CC\uB4E4\uC5B4\uC9C0\uBA74 \uB9E8 \uC544\uB798 \uB0B4\uBCF4\uB0B4\uAE30\uC5D0\uC11C STEP, STL, GLB \uB4F1\uC73C\uB85C \uBC1B\uC2B5\uB2C8\uB2E4."}],Lb=[{el:"chips",place:"right",title:"\uC608\uC2DC \uB3C4\uBA74\uC73C\uB85C \uC2DC\uC791",body:"\uD55C \uBD80\uD488\uC744 \uC815\uBA74 \xB7 \uC717\uBA74 \xB7 \uCE21\uBA74\uC73C\uB85C \uADF8\uB9B0 \uB3C4\uBA74\uB4E4\uC785\uB2C8\uB2E4. \uC138 \uBC88\uC9F8(\uACE1\uAD00)\uB294 \uC774 \uBC84\uC804\uC774 \uB9CC\uB4E4\uC9C0 \uBABB\uD558\uB294 \uBD80\uB958\uB77C \uC774\uC720\uB97C \uBCF4\uC5EC \uC90D\uB2C8\uB2E4."},{el:"drop",place:"right",title:"\uB0B4 \uB3C4\uBA74 \uC62C\uB9AC\uAE30",body:"\uC5EC\uB7EC \uD22C\uC0C1\uB3C4\uAC00 \uD55C \uC7A5\uC5D0 \uC788\uB294 \uD55C \uBD80\uD488 \uB3C4\uBA74\uC744 \uC62C\uB9BD\uB2C8\uB2E4. \uC62C\uB9AC\uBA74 \uBDF0\uB97C \uB098\uB204\uACE0, \uBC29\uD5A5\uC744 \uCD94\uCC9C\uD558\uACE0, \uCE58\uC218 \uBB38\uC790\uB97C \uC77D\uC2B5\uB2C8\uB2E4.",link:{href:"./guide.html#part2",text:"\uC62C\uB9AC\uAE30 \uC548\uB0B4 \uC5F4\uAE30"}},{el:"viewBlock",fallback:"stage",fallbackBox:{left:40,top:90,w:260,h:140},place:"right",title:"\uBDF0\uB9C8\uB2E4 \uBC29\uD5A5 \uD655\uC778",body:"\uCD94\uCC9C\uB41C \uBC29\uD5A5(\uC815\uBA74 \xB7 \uC717\uBA74 \xB7 \uC6B0\uCE21\uBA74 \xB7 \uB4F1\uAC01 \uCC38\uACE0)\uC774 \uB9DE\uB294\uC9C0 \uBD05\uB2C8\uB2E4. \uAE30\uD558\uB9CC\uC73C\uB85C\uB294 \uBC29\uD5A5\uC744 \uD655\uC2E0\uD560 \uC218 \uC5C6\uC5B4 \uC0AC\uB78C\uC774 \uD655\uC815\uD569\uB2C8\uB2E4."},{el:"cubeBlock",place:"left",title:"\uC815\uC721\uBA74\uCCB4\uB85C \uBC29\uD5A5 \uC8FC\uAE30",body:"\uBDF0\uB97C \uACE0\uB978 \uB4A4 \uC815\uC721\uBA74\uCCB4\uC758 \uBA74\uC744 \uB204\uB974\uBA74 \uADF8 \uBDF0\uAC00 \uADF8 \uBC29\uD5A5\uC774 \uB429\uB2C8\uB2E4. \uC815\uD22C\uC0C1 \uBC29\uD5A5\uC740 \uBDF0 \uD558\uB098\uC5D0\uB9CC \uC904 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},{el:"dimBlock",fallback:"sideRight",fallbackBox:{right:20,top:220,w:260,h:150},place:"left",title:"\uCE58\uC218\uB294 \uB3C4\uBA74\uC5D0\uC11C \uC77D\uC2B5\uB2C8\uB2E4",body:"\uCE58\uC218 \uBB38\uC790\uB97C \uC77D\uC5B4 \uCE58\uC218\uC120\uACFC \uC9DD\uC9C0\uC5B4 \uCD95\uCC99\uC744 \uC815\uD569\uB2C8\uB2E4. \uC11C\uB85C \uB9DE\uB294 \uCE58\uC218\uAC00 \uB9CE\uC744\uC218\uB85D \uBBFF\uC744 \uB9CC\uD569\uB2C8\uB2E4. \uBABB \uC77D\uC73C\uBA74 \uADF8\uB54C\uB9CC \uD55C \uCE58\uC218\uB97C \uBB3B\uC2B5\uB2C8\uB2E4."},{el:"methodBlock",fallback:"sideRight",fallbackBox:{right:20,top:380,w:260,h:150},place:"left",title:"\uB9CC\uB4E4\uACE0 \uC815\uD569 \uBCF4\uAE30",body:"\uAC01 \uBDF0\uC758 \uC724\uACFD\uC744 \uADF8 \uBC29\uD5A5\uC73C\uB85C \uBC00\uC5B4\uB0B4 \uAD50\uC9D1\uD569\uD569\uB2C8\uB2E4. \uB9CC\uB4E0 3D \uB97C \uAC01 \uBDF0\uB85C \uB2E4\uC2DC \uD22C\uC601\uD574 \uB3C4\uBA74\uACFC \uC5BC\uB9C8\uB098 \uACB9\uCE58\uB294\uC9C0 \uBCF4\uC5EC \uC90D\uB2C8\uB2E4."}],nr=wm,gi=0,Se=null,Iu=null,Lu=Pu.part1;function Nb(n){let t=vo(n.el)||vo(n.fallback||"stage");if(!t)return;let e=t.closest(".side.left")?"left":t.closest(".side.right")?"right":t.closest(".stage")||t.id==="stage"?"stage":null,i=e&&document.querySelector(`.pane-tabs [data-pane="${e}"]`);i&&i.offsetParent!==null&&!i.classList.contains("on")&&i.click()}function Db(n){Nb(n);let t=vo(n.el),e=t&&t.getBoundingClientRect();if(e&&e.width>4&&e.height>4&&t.offsetParent!==null)return e;let i=vo(n.fallback||"stage");if(!i)return null;let s=matchMedia("(max-width: 1023px)").matches,r=i.getBoundingClientRect(),o=s&&n.narrowBox||n.fallbackBox||{},a=o.w||200,l=o.h||40,c=o.right!==void 0?r.right-o.right-a:r.left+(o.left||0),h=o.bottom!==void 0?r.bottom-o.bottom-l:r.top+(o.top||0);return{left:c,top:h,right:c+a,bottom:h+l,width:a,height:l}}function Tm(n){let t=Db(n),e=Se.querySelector(".tour-hole"),i=Se.querySelector(".tour-card");if(!t){Se.classList.add("center"),e.style.display="none";return}Se.classList.remove("center");let s=8;e.style.display="",e.style.left=`${t.left-s}px`,e.style.top=`${t.top-s}px`,e.style.width=`${t.width+s*2}px`,e.style.height=`${t.height+s*2}px`;let r=i.offsetWidth||320,o=i.offsetHeight||150,a=16,l,c;n.place==="right"?(l=t.right+a,c=t.top):n.place==="left"?(l=t.left-r-a,c=t.top):n.place==="top"?(l=t.right-r,c=t.top-o-a):(l=t.left+t.width/2-r/2,c=t.bottom+a),l=Math.min(Math.max(12,l),innerWidth-r-12),c=Math.min(Math.max(12,c),innerHeight-o-12),i.style.left=`${l}px`,i.style.top=`${c}px`}function Em(){let n=nr[gi];Se.querySelector(".tour-n").textContent=`${gi+1} / ${nr.length}`,Se.querySelector(".tour-t").textContent=n.title,Se.querySelector(".tour-b").textContent=n.body;let t=Se.querySelector(".tour-link");n.link?(t.style.display="",t.href=n.link.href,t.textContent=n.link.text):t.style.display="none",Se.querySelector(".tour-next").textContent=gi===nr.length-1?"\uC2DC\uC791\uD558\uAE30":"\uB2E4\uC74C",Se.querySelector(".tour-prev").style.visibility=gi?"":"hidden",setTimeout(()=>Tm(n),0)}function Jl(){try{localStorage.setItem(Lu,"1")}catch{}removeEventListener("keydown",Iu),removeEventListener("resize",Am),Se?.remove(),Se=null}function Am(){Se&&Tm(nr[gi])}function _o(n=1){if(gi+n>=nr.length)return Jl();gi=Math.max(0,gi+n),Em()}function Sm(){Se||(gi=0,Se=document.createElement("div"),Se.className="tour",Se.innerHTML=`<div class="tour-hole"></div>
    <div class="tour-card">
      <div class="tour-n"></div>
      <b class="tour-t"></b>
      <p class="tour-b"></p>
      <a class="tour-link" target="_blank"></a>
      <div class="tour-row">
        <button class="tour-skip">\uAC74\uB108\uB6F0\uAE30</button>
        <span style="flex:1"></span>
        <button class="tour-prev">\uC774\uC804</button>
        <button class="tour-next"></button>
      </div>
    </div>`,document.body.appendChild(Se),Se.querySelector(".tour-next").onclick=()=>_o(1),Se.querySelector(".tour-prev").onclick=()=>_o(-1),Se.querySelector(".tour-skip").onclick=Jl,Se.onclick=n=>{n.target===Se&&_o(1)},Iu=n=>{n.key==="Escape"?Jl():n.key==="Enter"||n.key==="ArrowRight"?_o(1):n.key==="ArrowLeft"&&_o(-1)},addEventListener("keydown",Iu),addEventListener("resize",Am),Em())}var Ub=[{el:"prompt",place:"right",title:"\uD55C \uC904\uB85C \uC124\uBA85\uD558\uAE30",body:"\uB9CC\uB4E4 \uBB3C\uCCB4\uB97C \uD55C \uC904\uB85C \uC801\uC2B5\uB2C8\uB2E4. \uC544\uB798 \uC608\uC2DC\uB97C \uB20C\uB7EC \uCC44\uC6B8 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4."},{el:"drop",place:"right",title:"\uC0AC\uC9C4\uC73C\uB85C\uB3C4 \uB429\uB2C8\uB2E4",body:"\uBB3C\uCCB4 \uD558\uB098\uAC00 \uC628\uC804\uD788 \uBCF4\uC774\uB294 \uC0AC\uC9C4 \uD55C \uC7A5\uC744 \uC62C\uB9BD\uB2C8\uB2E4. \uAC00\uB824\uC9C4 \uB4B7\uBA74\uC740 \uC55E\uBA74\uC5D0\uC11C \uC720\uCD94\uD569\uB2C8\uB2E4."},{el:"chips",place:"right",title:"\uC608\uC2DC\uB85C \uBA3C\uC800 \uBCF4\uAE30",body:"\uBBF8\uB9AC \uB9CC\uB4E4\uC5B4 \uB454 \uC608\uC2DC\uC785\uB2C8\uB2E4. \uC11C\uBC84 \uC5C6\uC774\uB3C4 \uB20C\uB7EC\uC11C \uBC14\uB85C \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4."},{el:"parts",fallback:"sideRight",fallbackBox:{left:12,top:90,w:240,h:160},place:"left",title:"\uD30C\uD2B8 \uBD84\uB9AC",body:"\uBD80\uD488\uC774 \uD2B8\uB9AC\uB85C \uB098\uB258\uC5B4 \uB098\uC635\uB2C8\uB2E4. \uBAA9\uB85D\uC5D0\uC11C \uACE0\uB974\uBA74 \uADF8 \uBD80\uD488\uB9CC \uB0A8\uACE0, \uBD84\uB9AC \uB9C9\uB300\uB85C \uBC8C\uB824 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4."}];function Cm(n="part1"){nr=n==="part2"?Lb:n==="sculpt"?Ub:wm,Lu=Pu[n]||Pu.part1;let t=vo("btnTour");t&&(t.onclick=()=>{Se?Jl():Sm()});let e=!1;try{e=localStorage.getItem(Lu)==="1"}catch{}e||setTimeout(Sm,700)}var Rm={"\uC62C\uB9AC\uAE30 \uC548\uB0B4":"Upload guide",\uC0AC\uC6A9\uBC95:"How to use","\uC0C8 \uD504\uB85C\uC81D\uD2B8":"New project","\uC0C8 \uB3C4\uBA74":"New drawing",\uB3C4\uBA74:"Drawing",\uC18D\uC131:"Properties",\uBD80\uD488:"Part","\uBD80\uD488 \uB9CC\uB4E4\uAE30":"Build part",\uCC98\uC74C\uC73C\uB85C:"Start over","\uCC98\uC74C\uC73C\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4":"Back to start","\uD655\uC778 \uC911\u2026":"Checking\u2026","\uCCB4\uD5D8 \uBAA8\uB4DC":"Demo mode","AI \uD310\uB3C5 \uC0AC\uC6A9":"AI reading on","\uBB38\uC790 \uC778\uC2DD \uC900\uBE44 \uC911\u2026":"Text recognition loading\u2026","\uBB38\uC790 \uC778\uC2DD \uBD88\uB7EC\uC624\uB294 \uC911\u2026":"Loading text recognition\u2026","\uBB38\uC790 \uC778\uC2DD \uC900\uBE44\uB428":"Text recognition ready","\uBB38\uC790 \uC778\uC2DD \uC5C6\uC74C":"No text recognition","\uCE58\uC218 \uBB38\uC790\uB97C \uC77D\uB294 \uC5D4\uC9C4 \uC0C1\uD0DC":"Text recognition engine status","\uC0AC\uC6A9\uBC95 \uB2E4\uC2DC \uBCF4\uAE30":"Show the walkthrough again","VRINGON CAD":"VRINGON CAD","\uB3C4\uBA74\uC744 \uC77D\uC5B4 3D\uB85C \uB9CC\uB4ED\uB2C8\uB2E4":"Read a drawing, get 3D","\uD68C\uC804\uCCB4\uB294 \uD55C \uC7A5\uC73C\uB85C, \uADF8 \uBC16\uC758 \uBD80\uD488\uC740 \uC5EC\uB7EC \uBDF0\uB85C \uB9CC\uB4ED\uB2C8\uB2E4.":"Turned parts from one view; everything else from several views.",\uC644\uC131:"Ready",\uCD94\uCC9C:"Recommended","\uB2E8\uC77C \uB3C4\uBA74 \uD68C\uC804\uCCB4":"Turned part, one view","\uB2E4\uC2DC\uC810 \uB3C4\uBA74\uC5D0\uC11C \uBD80\uD488 \uD558\uB098":"One part from several views","\uCD95, \uBD80\uC2DC, \uD540, \uBCFC\uD2B8\uCC98\uB7FC \uC120\uBC18\uC5D0\uC11C \uAE4E\uB294 \uBD80\uD488\uC758 \uC815\uBA74\uB3C4 \uD55C \uC7A5\uC744 \uC77D\uC5B4 3D\uB97C \uB9CC\uB4ED\uB2C8\uB2E4.":"Reads one front view of a lathe-turned part (shaft, bushing, pin, bolt) and builds the 3D.","\uC678\uD615 \uC77C\uCE58 99.9%, \uCE58\uC218 \uC77C\uCE58 97%":"Outline match 99.9%, dimension match 97%","STEP, STL, GLB, OBJ, FBX, USD":"STEP, STL, GLB, OBJ, FBX, USD","\uC870\uB9BD\uACFC \uD68C\uC804 \uC2DC\uBBAC\uB808\uC774\uC158":"Assembly and motion simulation","\uC77D\uC744 \uC218 \uC5C6\uB294 \uB3C4\uBA74\uC740 \uBBF8\uB9AC \uC54C\uB824 \uC90D\uB2C8\uB2E4":"Tells you up front when a drawing can't be read","Part 1 \uC5F4\uAE30 \u203A":"Open Part 1 \u203A","\uC815\uBA74, \uC717\uBA74, \uCE21\uBA74\uC774 \uD55C \uC7A5\uC5D0 \uC788\uB294 \uB3C4\uBA74\uC5D0\uC11C \uBDF0\uB9C8\uB2E4 \uBC29\uD5A5\uC744 \uC815\uD558\uACE0 \uCE58\uC218\uB97C \uC77D\uC5B4 \uBD80\uD488 \uD558\uB098\uB97C \uB9CC\uB4ED\uB2C8\uB2E4.":"You set a direction for each view on a multi-view sheet; it reads the dimensions and builds one part.","\uBDF0 \uC790\uB3D9 \uBD84\uD560\uACFC \uBC29\uD5A5 \uCD94\uCC9C":"Automatic view split with suggested directions","\uCE58\uC218\uB97C \uC77D\uC5B4 \uCD95\uCC99 \uACB0\uC815":"Scale from the dimension text","\uBE0C\uB798\uD0B7 \uD06C\uAE30 \uC624\uCC28 0.7%, \uBDF0 \uC815\uD569 99%":"Bracket size error 0.7%, view match 99%","\uB9CC\uB4E0 3D\uB97C \uB3C4\uBA74\uACFC \uB2E4\uC2DC \uB300\uC870":"Re-checks the 3D against the drawing","Part 2 \uC5F4\uAE30 \u203A":"Open Part 2 \u203A","\uC5B4\uB5A4 \uB3C4\uBA74\uC744 \uC62C\uB9AC\uB294\uC9C0\uB294 {} \uC5D0 \uC788\uC2B5\uB2C8\uB2E4.":"What to upload is explained in the {}.","Part 1 \xB7 \uB2E8\uC77C \uB3C4\uBA74 \uD68C\uC804\uCCB4":"Part 1 \xB7 Turned part, one view","\uB3C4\uBA74 \uC774\uBBF8\uC9C0 \uC62C\uB9AC\uAE30":"Upload a drawing","\uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4 \uD55C \uC7A5 \xB7 PNG JPG SVG":"One front view of a turned part \xB7 PNG JPG SVG","\uBD80\uD488 \uC720\uD615":"Part type","\uBAA8\uB984 (\uD310\uB3C5 \uB4A4 \uCD94\uC815)":"Unknown (inferred after reading)","\uC62C\uB9AC\uAE30 \uC804\uC5D0 \uC54C\uB824 \uC8FC\uBA74 \uADF8 \uC720\uD615\uC5D0 \uB9DE\uB294 \uC2DC\uBBAC\uB808\uC774\uC158\uC744 \uACC4\uD68D\uD569\uB2C8\uB2E4.":"Tell us before uploading and the simulation is planned for that type.","\uC804\uCCB4 \uAE38\uC774 (mm)":"Overall length (mm)","\uC608: 100":"e.g. 100","\uC608: 120":"e.g. 120","\uC62C\uB9B0 \uB3C4\uBA74\uC740 \uC678\uD615 \uBE44\uC728\uACFC \uC774 \uAC12\uC73C\uB85C \uC2E4\uC81C \uCE58\uC218\uB97C \uC815\uD569\uB2C8\uB2E4.":"Uploads get real dimensions from the outline ratio and this value.","\uD310\uB3C5 \uBC29\uC2DD":"Reading method",\uC790\uB3D9:"Auto",\uC678\uD615:"Outline","AI \uD310\uB3C5":"AI reading","\uC815\uBC00 \uD310\uB3C5 (\uB290\uB9BC)":"Careful reading (slower)","\uC11C\uBC84 \uBAA8\uB4DC\uC5D0\uC11C\uB9CC":"Server mode only","\uC0D8\uD50C \uB3C4\uBA74":"Sample drawings","\uBB34\uC791\uC704 \uB3C4\uBA74 \uB9CC\uB4E4\uAE30":"Random drawing","\uC0C8 \uBD80\uD488\uC744 \uB9CC\uB4E4\uC5B4 \uB3C4\uBA74\uC744 \uADF8\uB9BD\uB2C8\uB2E4":"Makes a new part and draws it",\uC9C4\uD589:"Progress","\uC774 \uD398\uC774\uC9C0\uC5D0 \uB300\uD574":"About this page","\uB3C4\uBA74\uC744 \uC77D\uC5B4 \uCE58\uC218 \uC0AC\uC591\uC73C\uB85C \uC62E\uAE30\uACE0, \uADF8 \uC0AC\uC591\uC5D0\uC11C 3D\uC640 \uB3C4\uBA74\uC744 \uB2E4\uC2DC \uB9CC\uB4ED\uB2C8\uB2E4.":"Reads the drawing into a dimension spec, then rebuilds the 3D and the drawing from that spec.","\uC0D8\uD50C\uC740 {} \uB97C \uBCF4\uC5EC \uC8FC\uACE0, \uC62C\uB9B0 \uB3C4\uBA74\uC740 \uC774 \uBE0C\uB77C\uC6B0\uC800\uAC00 {} \uC0AC\uC591\uC744 \uB9CC\uB4ED\uB2C8\uB2E4. \uCE58\uC218 \uBB38\uC790\uAE4C\uC9C0 \uC77D\uB294 AI \uD310\uB3C5\uC740 \uC11C\uBC84 \uBAA8\uB4DC\uC5D0\uC11C \uB3D9\uC791\uD569\uB2C8\uB2E4.":"Samples show {}, and uploads are measured {} in this browser. AI reading of the dimension text runs in server mode.","\uC678\uD615\uC744 \uC7AC\uC11C":"by outline","\uB3C4\uBA74\uC744 \uC62C\uB9AC\uBA74 {} \uC0AC\uC591\uC73C\uB85C \uC62E\uAE41\uB2C8\uB2E4. 3D, \uAC80\uC99D, \uB0B4\uB824\uBC1B\uAE30\uB294 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uBC14\uB85C \uC2E4\uD589\uB429\uB2C8\uB2E4.":"Upload a drawing and {} into a spec. 3D, checking and download all run in this browser.","AI \uAC00 \uCE58\uC218\uAE4C\uC9C0 \uC77D\uC5B4":"AI reads the dimensions","\uC67C\uCABD\uC5D0\uC11C \uC0D8\uD50C\uC744 \uACE0\uB974\uAC70\uB098 \uB3C4\uBA74\uC744 \uC62C\uB9AC\uC138\uC694":"Pick a sample on the left, or upload a drawing","\uB3C4\uBA74 \uC785\uB825":"Drawing","\uD310\uB3C5 \xB7 \uC0AC\uC591":"Reading","3D CAD":"3D CAD",\uAC80\uC99D:"Check","\uB3C4\uBA74 \uBD88\uB7EC\uC624\uAE30":"Load drawing","\uD310\uB3C5 \uC2DC\uC791":"Start reading","3D CAD \uB9CC\uB4E4\uAE30":"Build 3D CAD","\uAC80\uC99D \uC2E4\uD589":"Run check","\uB3C4\uBA74\uC744 \uC2DC\uD2B8\uC5D0 \uC62C\uB9BD\uB2C8\uB2E4":"Puts the drawing on the sheet","\uB3C4\uBA74\uC744 \uC77D\uC5B4 \uCE58\uC218 \uC0AC\uC591\uC73C\uB85C \uC62E\uAE41\uB2C8\uB2E4":"Reads the drawing into a dimension spec","\uC0AC\uC591\uB300\uB85C 3D \uD615\uC0C1\uC744 \uB9CC\uB4ED\uB2C8\uB2E4":"Builds the 3D shape from the spec","\uC0AC\uC591\uC73C\uB85C \uB2E4\uC2DC \uADF8\uB9B0 \uC678\uD615\uC744 \uB3C4\uBA74\uACFC \uB300\uC870\uD569\uB2C8\uB2E4":"Compares the outline redrawn from the spec with the drawing","\uC774 \uB2E8\uACC4\uB85C \uB3CC\uC544\uAC00\uAE30":"Go back to this step","\uC9C0\uAE08 \uB2E8\uACC4":"Current step","\uB2E4\uC74C \uB2E8\uACC4 \uC2E4\uD589":"Run the next step","{n}\uB2E8\uACC4\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4":"Back to step {n}","\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC2E4\uD589":"runs in this browser","\uC11C\uBC84 AI \uD310\uB3C5":"server AI reading","\uB2E8\uBA74 \uBCF4\uAE30":"Section view","\uB2E8\uBA74 \uB2EB\uAE30":"Close section","\uB3C4\uBA74 \uBCF4\uAE30":"Show drawing","\uC7AC\uC0DD\uC131 \uB3C4\uBA74":"Redrawn view","\uC6D0\uBCF8 \uB3C4\uBA74":"Original drawing","\uC9C0\uAE08 \uC0AC\uC591\uC73C\uB85C \uB2E4\uC2DC \uADF8\uB9B0 \uB3C4\uBA74\uACFC \uC6D0\uBCF8 \uB3C4\uBA74\uC744 \uBC88\uAC08\uC544 \uBD05\uB2C8\uB2E4":"Switches between the drawing redrawn from the spec and the original","\uC815\uB2F5 \uC0AC\uC591 \uBCF4\uAE30":"Show reference spec","\uD310\uB3C5 \uACB0\uACFC\uB85C":"Back to reading","\uC870\uB9BD \xB7 \uC2DC\uBBAC \uCF1C\uAE30":"Assembly \xB7 motion on","\uC870\uB9BD \xB7 \uC2DC\uBBAC \uB044\uAE30":"Assembly \xB7 motion off","\uC0C1\uB300 \uBD80\uD488\uC744 \uB9CC\uB4E4\uC5B4 \uBD84\uD574\uC640 \uD68C\uC804\uC744 \uBCF4\uC5EC \uC90D\uB2C8\uB2E4. \uB044\uBA74 \uBD80\uD488\uB9CC \uB0A8\uC2B5\uB2C8\uB2E4":"Adds mating parts and shows disassembly and rotation. Turn off to keep just the part","\uD654\uBA74 \uB9DE\uCDA4":"Fit view",\uADF8\uB9AC\uB4DC:"Grid",\uD134\uD14C\uC774\uBE14:"Turntable",\uD68C\uC804:"Rotate","\uB098\uC0AC \uCCB4\uACB0":"Screw in","1\uD68C\uC804\uC5D0 \uD53C\uCE58\uB9CC\uD07C \uC804\uC9C4\uD569\uB2C8\uB2E4":"One turn advances by the pitch",\uC870\uB9BD:"Assemble",\uC815\uC9C0:"Stop",\uBD84\uD574:"Explode","\uBD80\uD488\uB9CC \uBCF4\uAE30\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4":"Back to the part only",\uBAA8\uB378:"Model","\uC804\uCCB4 \uAE38\uC774":"Overall length","\uCD5C\uB300 \uC9C0\uB984":"Max diameter","\uBD80\uD53C \xB7 \uC9C8\uB7C9":"Volume \xB7 mass",\uC7AC\uC9C8:"Material","\uC0BC\uAC01\uD615 \xB7 \uC0DD\uC131 \uC2DC\uAC04":"Triangles \xB7 build time",\uD310\uB3C5:"Reading",\uC2E0\uB8B0\uB3C4:"Confidence","\uC77D\uC740 \uCE58\uC218 \uBB38\uC790":"Dimension text read",\uC18C\uC694:"Time","\uBD80\uD488 \uD574\uC11D":"Part analysis","\uD575\uC2EC \uD615\uC0C1":"Key features","\uC81C\uC791 \uC2DC \uC720\uC758":"Notes for making it","\uB3C4\uBA74\uB9CC\uC73C\uB85C \uC54C \uC218 \uC5C6\uB294 \uAC83":"Not knowable from the drawing alone","\uD574\uC11D \uC911\u2026":"Analysing\u2026",\uC5C6\uC74C:"None","\uC11C\uBC84 \uBAA8\uB4DC\uC5D0\uC11C \uB3C4\uBA74\uC744 \uC62C\uB9AC\uBA74 \uD574\uC11D\uD569\uB2C8\uB2E4":"Upload a drawing in server mode to get an analysis","\uD574\uC11D\uC744 \uBC1B\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4":"No analysis came back","\uBBF8\uB9AC \uB9CC\uB4E0 \uD574\uC11D (\uB3C4\uBA74 \uBB38\uC790 \uC778\uC2DD + \uD310\uB3C5 \uC0AC\uC591 + \uC774\uBBF8\uC9C0)":"Pre-built analysis (text recognition + spec + image)","\uC9C0\uAE08 \uD574\uC11D (\uB3C4\uBA74 \uBB38\uC790 {n}\uAC1C + \uC0AC\uC591 + \uC774\uBBF8\uC9C0, {n}\uCD08)":"Analysed now ({n} text tokens + spec + image, {n}s)","\xB7 \uC2E0\uB8B0\uB3C4 {n}%":" \xB7 confidence {n}%",\uC138\uADF8\uBA3C\uD2B8:"Segments","+ \uCD94\uAC00":"+ Add","\uB05D\uC5D0 \uC6D0\uD1B5 \uCD94\uAC00":"Add a cylinder at the end",\uD615\uC2DD:"Type",\uAE38\uC774:"Length","\uC9C0\uB984 \xB7 \uD638\uCE6D":"Diameter \xB7 size",\uC6D0\uD1B5:"Cylinder",\uD14C\uC774\uD37C:"Taper",\uB098\uC0AC:"Thread",\uC0AD\uC81C:"Delete","\uAC12\uC744 \uACE0\uCE58\uBA74 3D\uC640 \uB3C4\uBA74\uC774 \uD568\uAED8 \uBC14\uB01D\uB2C8\uB2E4.":"Editing a value updates the 3D and the drawing together.","\uC804\uC774 \xB7 \uD648 \xB7 \uD53C\uCC98":"Transitions \xB7 grooves \xB7 features","\uC804\uC774\xB7\uD648\xB7\uD53C\uCC98\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.":"No transitions, grooves or features.","\uC0AC\uC591 (JSON)":"Spec (JSON)",\uB418\uB3CC\uB9AC\uAE30:"Revert",\uC801\uC6A9:"Apply","\uD615\uC0C1 \uAC80\uC99D \uD1B5\uACFC. \uAC12\uC744 \uACE0\uCE58\uBA74 3D, \uB3C4\uBA74, \uAC80\uC99D\uC774 \uB2E4\uC2DC \uACC4\uC0B0\uB429\uB2C8\uB2E4.":"Shape check passed. Editing a value recomputes the 3D, drawing and check.","\uD615\uC0C1 \uC624\uB958: {}":"Shape error: {}","\uC8FC\uC758: {}":"Warning: {}","\uC0AC\uC591\uC744 \uC801\uC6A9\uD588\uC2B5\uB2C8\uB2E4":"Spec applied","\uD310\uB3C5 \uACB0\uACFC\uB85C \uB418\uB3CC\uB838\uC2B5\uB2C8\uB2E4":"Reverted to the reading","\uC815\uB2F5 \uC0AC\uC591\uC744 \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4 (\uB3C4\uBA74\uC744 \uB9CC\uB4E0 \uC6D0\uBCF8)":"Loaded the reference spec (the source of this drawing)","\uD310\uB3C5 \uACB0\uACFC\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4":"Back to the reading","\uACE0\uCE60 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4: {}":"Can't apply: {}","\uC138\uADF8\uBA3C\uD2B8\uB294 \uCD5C\uC18C \uD558\uB098\uC785\uB2C8\uB2E4":"At least one segment is required","\uB3C4\uBA74 \uC678\uD615 \uC77C\uCE58":"Outline match","\uCE58\uC218 \uC77C\uCE58":"Dimension match","\uD615\uC0C1 \uC720\uD6A8\uC131":"Shape validity","\uC885\uD569 \uC2E0\uB8B0\uB3C4":"Overall confidence",\uD1B5\uACFC:"Pass","\uD655\uC778 \uD544\uC694":"Check needed",\uBD88\uC77C\uCE58:"Mismatch","\uC720\uD6A8\uD558\uC9C0 \uC54A\uC74C":"Invalid","\uCE21\uC815 \uC5C6\uC74C":"Not measured","\uBB38\uC790 \uC548 \uC77D\uC74C":"Text not read","\uC678\uD615\uB9CC (\uBB38\uC790 \uC548 \uC77D\uC74C)":"Outline only (text not read)","\uD1B5\uACFC (\uC8FC\uC758 {n})":"Pass ({n} warnings)","\uC624\uB958 {n}":"{n} errors","\uC815\uB2F5 \uC0AC\uC591 \uB300\uBE44 (\uC774 \uB3C4\uBA74\uC740 \uC815\uB2F5\uC5D0\uC11C \uADF8\uB838\uC2B5\uB2C8\uB2E4)":"Against the reference spec (this drawing came from it)",\uD56D\uBAA9:"Item",\uC77C\uCE58:"Match",\uD53C\uCC98:"Features",\uC804\uC774:"Transitions",\uCE58\uC218:"Dimensions","\uC644\uC804 \uC77C\uCE58":"Exact match",\uC608:"Yes",\uC544\uB2C8\uC624:"No","{n}\uAC1C":"{n}","\uC678\uD615\uC774 \uB3C4\uBA74\uACFC \uC5B4\uAE0B\uB0A9\uB2C8\uB2E4. \uC624\uB978\uCABD \uD45C\uC5D0\uC11C \uC138\uADF8\uBA3C\uD2B8 \uAE38\uC774\uC640 \uC9C0\uB984\uC744 \uACE0\uCE58\uBA74 \uBC14\uB85C \uB2E4\uC2DC \uACC4\uC0B0\uB429\uB2C8\uB2E4.":"The outline disagrees with the drawing. Edit segment lengths and diameters on the right and it recomputes.","\uC870\uB9BD \uC778\uD130\uD398\uC774\uC2A4":"Interfaces","\uBD84\uD574 \uC21C\uC11C":"Disassembly order","\uC870\uB9BD \uC810\uAC80":"Assembly checks","\uBD84\uD574\uD560 \uC0C1\uB300 \uBD80\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.":"No mating parts to remove.","\uC810\uAC80\uD560 \uACB0\uD569\uBD80\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.":"No interfaces to check.","\uBD80\uD488 \uD615\uC0C1\uC740 \uB3C4\uBA74 \uADF8\uB300\uB85C, \uC0C1\uB300 \uBD80\uD488\uC740 \uADDC\uACA9\uD45C \uADFC\uC0AC\uC785\uB2C8\uB2E4. \uD68C\uC804\uC774 \uBCF4\uC774\uB3C4\uB85D {}\uC744 \uBD99\uC600\uACE0 \uB0B4\uB824\uBC1B\uB294 \uD30C\uC77C\uC5D0\uB294 \uB4E4\uC5B4\uAC00\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.":"The part itself matches the drawing; mating parts are standard-table approximations. A {} makes rotation visible and is not included in downloads.",\uAE30\uC900\uC120:"reference line",\uC790\uC804\uCD95:"Axis of rotation",\uBA48\uCDA4\uB9C1:"Retaining ring","\uD0A4\xB7\uD5C8\uBE0C":"Key \xB7 hub","\uB098\uC0AC \uCCB4\uACB0\uBD80":"Threaded joint",\uBCA0\uC5B4\uB9C1:"Bearing",\uD540:"Pin",\uACF5\uAD6C:"Tool",\uB07C\uC6CC\uB9DE\uCDA4:"Fit","\uADDC\uACA9 \uADFC\uC0AC":"Standard approx.",\uC815\uD655:"Exact","\uC790\uC804(X\uCD95)":"Spin (X axis)","\uCD95\uBC29\uD5A5 \uC870\uB9BD":"Axial assembly","\uBC18\uACBD \uBC29\uD5A5 \uC870\uB9BD":"Radial assembly","\uB098\uC0AC \uC774\uC1A1 {n}mm/\uD68C\uC804":"Screw feed {n} mm/turn","\uC0C1\uB300 \uBD80\uD488 {n}\uAC1C \xB7 {}":"{n} mating parts \xB7 {}","\uC0C1\uB300 \uBD80\uD488 \uC5C6\uC74C (\uB2E8\uD488 \uD68C\uC804)":"No mating parts (single part)","\uACB0\uD569\uBD80 {n}\uAC1C":"{n} interfaces","\uACB0\uD569\uBD80\uAC00 \uC5C6\uC5B4 \uD68C\uC804\uB9CC \uBCF4\uC5EC \uC90D\uB2C8\uB2E4":"No interfaces, showing rotation only","\uD68C\uC804 {n} rpm. \uAE30\uC900\uC120\uC73C\uB85C \uD68C\uC804\uC774 \uBCF4\uC785\uB2C8\uB2E4":"Spinning at {n} rpm. The reference line shows the rotation","\uC774 \uBD80\uD488\uC5D0\uB294 \uB098\uC0AC \uCCB4\uACB0\uBD80\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4":"This part has no threaded joint","{n} rpm \xB7 {n} \uD68C\uC804 \xB7 {n}\xB0":"{n} rpm \xB7 {n} turns \xB7 {n}\xB0","\uCCB4\uACB0 {n} \uD68C\uC804 \xB7 {n} mm":"{n} turns in \xB7 {n} mm",\uB0B4\uBCF4\uB0B4\uAE30:"Download","\uC0C1\uB300 \uBD80\uD488(\uC870\uB9BD\uCCB4) \uD3EC\uD568\uD574 \uB0B4\uBCF4\uB0B4\uAE30":"Include mating parts","3D":"3D","\uB3C4\uBA74 \xB7 \uC0AC\uC591":"Drawing \xB7 spec",\uB0B4\uB824\uBC1B\uAE30:"Download","\uC815\uBC00 \uACE1\uBA74 \xB7 \uAE30\uACC4 CAD \uC6A9":"Exact surfaces \xB7 for mechanical CAD","\uC815\uBC00 \uACE1\uBA74 \xB7 \uC9C0\uAE08 \uC0AC\uC591\uC73C\uB85C \uC0DD\uC131":"Exact surfaces \xB7 built from the current spec","\uC0BC\uAC01\uD615 \uBA74 \uC194\uB9AC\uB4DC \xB7 \uD3B8\uC9D1\uD55C \uC0AC\uC591\uB3C4 \uBC14\uB85C":"Triangulated solid \xB7 works with edited specs","\uC0BC\uAC01\uD615 \uBA74 \uC178 \xB7 \uAC00\uACF5 \uBD80\uC704\uAC00 \uC788\uC5B4 \uC194\uB9AC\uB4DC\uB85C \uB2EB\uD788\uC9C0 \uC54A\uC74C, \uC815\uBC00 STEP \uAD8C\uC7A5":"Triangulated shell \xB7 machined areas leave it open; prefer the exact STEP","\uC0BC\uAC01\uD615 \uBA74 \uC178 (\uAD50\uC9D1\uD569 \uACB0\uACFC\uB294 \uC194\uB9AC\uB4DC\uB85C \uB2EB\uD788\uC9C0 \uC54A\uC74C)":"Triangulated shell (intersection result is not a closed solid)","3D \uD504\uB9B0\uD305":"3D printing","\uC7AC\uC9C8 \uD3EC\uD568 \xB7 \uC6F9 \uBDF0\uC5B4":"With materials \xB7 web viewers","\uBA54\uC2DC (mm)":"Mesh (mm)","Maya, 3ds Max, Unity, Unreal":"Maya, 3ds Max, Unity, Unreal","\uBA54\uC2DC\uC640 \uCE58\uC218 \uC0AC\uC591\uC744 \uD568\uAED8":"Mesh plus the dimension spec","\uBA54\uC2DC\uC640 \uBDF0\xB7\uCE58\uC218 \uC815\uBCF4\uB97C \uD568\uAED8":"Mesh plus view and dimension data","AR \uBBF8\uB9AC\uBCF4\uAE30 \uD328\uD0A4\uC9C0":"AR preview package","\uC815\uC810\uACFC \uBA74 (\uD574\uC11D \uB3C4\uAD6C)":"Vertices and faces (analysis tools)","\uC815\uC810\uACFC \uBA74":"Vertices and faces","\uB2E4\uC2DC \uADF8\uB9B0 \uC81C\uC791 \uB3C4\uBA74":"Redrawn production drawing","\uCE58\uC218 \uC0AC\uC591":"Dimension spec","\uBDF0 \uBC29\uD5A5 \xB7 \uCD95\uCC99 \xB7 \uACB0\uACFC":"View directions \xB7 scale \xB7 result","STEP \uC744 \uB9CC\uB4DC\uB294 \uC911\u2026":"Building the STEP\u2026","STEP \uB0B4\uB824\uBC1B\uC74C":"STEP downloaded","STEP \uC2E4\uD328: {}":"STEP failed: {}","\uC815\uBC00 \uACE1\uBA74 STEP \uC740 \uC0AC\uC591\uC774 \uC815\uB2F5\uACFC \uAC19\uC744 \uB54C \uBC1B\uC744 \uC218 \uC788\uACE0, \uD3B8\uC9D1\uD55C \uC0AC\uC591\uC740 \uBA74 STEP \uC73C\uB85C \uBC1B\uC2B5\uB2C8\uB2E4.":"The exact STEP is available when the spec matches the reference; edited specs come as a triangulated STEP.","\uC815\uBC00 \uACE1\uBA74 STEP \uC740 '\uC815\uB2F5 \uC0AC\uC591 \uBCF4\uAE30'\uB85C \uB418\uB3CC\uB9AC\uBA74 \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC9C0\uAE08 \uC0AC\uC591\uC740 \uBA74 STEP \uC73C\uB85C \uBC1B\uC2B5\uB2C8\uB2E4.":"Switch to the reference spec to get the exact STEP. The current spec comes as a triangulated STEP.","\uC5EC\uAE30\uC11C\uB294 \uBA74 STEP \uC744 \uBC1B\uC2B5\uB2C8\uB2E4. \uC815\uBC00 \uACE1\uBA74 STEP \uC740 \uC11C\uBC84 \uBAA8\uB4DC\uC5D0\uC11C \uC81C\uACF5\uB429\uB2C8\uB2E4.":"Here you get the triangulated STEP. The exact STEP is available in server mode.","\uB3C4\uBA74\uC5D0\uC11C \uBD80\uD488 \uC678\uD615 \uCE21\uC815":"Measuring the part outline","\uC678\uD615\uC5D0\uC11C \uCE58\uC218 \uC0AC\uC591 \uB9CC\uB4E4\uAE30":"Building the spec from the outline","\uBBF8\uB9AC \uD310\uB3C5\uD55C \uACB0\uACFC \uBD88\uB7EC\uC624\uAE30":"Loading the pre-read result","\uD615\uC0C1 \uAC80\uC99D":"Shape check","\uB2E8\uBA74 \uD504\uB85C\uD30C\uC77C\uC5D0\uC11C \uD68C\uC804 \uD615\uC0C1":"Revolving the section profile","\uD0A4\uD648, \uD3C9\uBA74, \uC721\uAC01, \uD6A1\uAD6C\uBA4D \uAC00\uACF5":"Cutting keyway, flats, hex, cross hole","\uC7AC\uC9C8 \uC801\uC6A9":"Applying materials","\uD310\uB3C5 \uC644\uB8CC \xB7 \uC138\uADF8\uBA3C\uD2B8 {n}\uAC1C":"Reading done \xB7 {n} segments","\uD310\uB3C5 \uC644\uB8CC \xB7 \uC138\uADF8\uBA3C\uD2B8 {n}\uAC1C, \uC77D\uC740 \uCE58\uC218 {n}\uAC1C":"Reading done \xB7 {n} segments, {n} dimensions read","3D \uC644\uB8CC. \uC624\uB978\uCABD\uC5D0\uC11C \uB0B4\uB824\uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4":"3D done. Download it on the right","\uAC80\uC99D \uC644\uB8CC \xB7 {}":"Check done \xB7 {}","\uB3C4\uBA74\uC744 \uC5F4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: {}":"Couldn't open the drawing: {}","\uC774\uBBF8\uC9C0\uB97C \uC5F4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4":"Couldn't open the image","\uC678\uD615\uC744 \uC7AC\uC9C0 \uBABB\uD574 \uD78C\uD2B8 \uC5C6\uC774 \uD310\uB3C5\uD569\uB2C8\uB2E4":"Couldn't measure the outline; reading without hints","\uC0D8\uD50C \uB3C4\uBA74 \xB7 {}":"Sample \xB7 {}","\uB9CC\uB4E0 \uB3C4\uBA74 \xB7 {}":"Generated \xB7 {}","\uC5C5\uB85C\uB4DC \xB7 {}":"Upload \xB7 {}","\uC7AC\uC0DD\uC131 \uB3C4\uBA74 \xB7 \uC9C0\uAE08 \uC0AC\uC591\uC73C\uB85C \uB2E4\uC2DC \uADF8\uB9BC (\uC6D0\uBCF8 \uC544\uB2D8)":"Redrawn from the current spec (not the original)","\uC11C\uBC84\uAC00 \uBBF8\uB9AC \uD310\uB3C5\uD574 \uC800\uC7A5\uD55C \uACB0\uACFC\uC785\uB2C8\uB2E4 ({n}\uCD08).":"A reading the server made and saved earlier ({n}s).","\uC11C\uBC84\uAC00 \uBBF8\uB9AC \uD310\uB3C5\uD574 \uC800\uC7A5\uD55C \uACB0\uACFC\uC785\uB2C8\uB2E4 ({n}\uCD08, \uC790\uB3D9 \uC218\uC815 1\uD68C).":"A reading the server made and saved earlier ({n}s, one self-correction).","\uC804\uCCB4 \uAE38\uC774\uB97C \uB123\uC9C0 \uC54A\uC544 \uBE44\uC728\uB9CC \uBD05\uB2C8\uB2E4. \uD654\uBA74\uC758 \uCE58\uC218\uB294 \uC804\uCCB4 \uAE38\uC774\uB97C 100mm \uB85C \uB193\uC558\uC744 \uB54C\uC758 \uBE44\uC728\uC774\uBA70 \uB3C4\uBA74\uC5D0\uC11C \uC77D\uC740 \uAC12\uC774 \uC544\uB2D9\uB2C8\uB2E4.":"Without an overall length these are ratios only, based on a 100 mm length. They are not values read from the drawing.","\uC678\uD615 \uD310\uB3C5\uC740 \uBE44\uC728\uB9CC \uC815\uD655\uD569\uB2C8\uB2E4. \uC2E4\uC81C \uCE58\uC218\uB294 \uC804\uCCB4 \uAE38\uC774({n}mm) \uD558\uB098\uB85C \uC815\uD588\uACE0, \uC13C\uD130\uAD6C\uBA4D\xB7\uACF5\uCC28\xB7\uC7AC\uC9C8\xB7\uD544\uB81B R \uC740 \uC77D\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.":"Outline reading is accurate in proportion only. Real sizes come from the overall length ({n} mm); centre holes, tolerances, material and fillet radii are not read.","\uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4\uB85C \uBCF4\uC774\uC9C0 \uC54A\uC544 \uD310\uB3C5\uC744 \uBA48\uCDC4\uC2B5\uB2C8\uB2E4.":"This doesn't look like the front view of a turned part, so reading stopped.","\uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4\uAC00 \uC544\uB2D9\uB2C8\uB2E4":"Not the front view of a turned part","\uD310\uB3C5 \uACB0\uACFC\uAC00 \uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4\uB2F5\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uACB0\uACFC\uB294 \uCC38\uACE0\uC6A9\uC785\uB2C8\uB2E4.":"The reading doesn't look like a turned part. Treat the result as a rough guide.","\uB3C4\uBA74\uC5D0\uC11C \uBD80\uD488 \uC678\uD615\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.":"Couldn't find the part outline in the drawing.","\uC5B4\uB5A4 \uB3C4\uBA74\uC744 \uC62C\uB824\uC57C \uD558\uB098\uC694":"What should I upload?","\uADF8\uB798\uB3C4 \uC77D\uC5B4 \uBCF4\uAE30":"Read it anyway","\uC2E4\uC81C \uCE58\uC218\uB97C \uACB0\uC815\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.":"Real dimensions can't be determined.","\uC2E4\uC81C \uCE58\uC218\uB97C \uACB0\uC815\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4":"Real dimensions can't be determined","\uC774 \uB3C4\uBA74\uC5D0\uC11C \uBB38\uC790\uB97C \uC77D\uC9C0 \uC54A\uC73C\uBBC0\uB85C \uBE44\uC728\uB9CC \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC67C\uCABD {} \uB97C \uB123\uC5B4 \uC8FC\uC138\uC694. \uB3C4\uBA74\uC5D0 \uCE58\uC218\uAC00 \uBB38\uC790 \uAE30\uD638(A\xB7B\xB7H \uAC19\uC740)\uB85C\uB9CC \uC801\uD600 \uC788\uB2E4\uBA74 \uADDC\uACA9\uD45C\uC758 \uAC12\uC744 \uB123\uC73C\uBA74 \uB429\uB2C8\uB2E4.":"Text isn't read from this drawing, so only proportions are known. Enter the {} on the left. If the drawing only has letter symbols (A, B, H), use the value from the size table.","\uC804\uCCB4 \uAE38\uC774(mm)":"overall length (mm)","\uC804\uCCB4 \uAE38\uC774 \uB123\uAE30":"Enter overall length","\uBE44\uC728\uB9CC \uBCF4\uAE30":"Proportions only","\uC804\uCCB4 \uAE38\uC774\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694. \uC5C6\uC73C\uBA74 \uBE44\uC728\uB9CC \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4":"Please enter the overall length, or view proportions only","\uCD95 \uC704\uC640 \uC544\uB798\uC758 \uBAA8\uC591\uC774 \uC11C\uB85C \uB2E4\uB985\uB2C8\uB2E4(\uCC28\uC774 {n}%). \uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4\uB77C\uBA74 \uCD95\uC744 \uAE30\uC900\uC73C\uB85C \uC704\uC544\uB798\uAC00 \uAC19\uC544\uC57C \uD558\uBBC0\uB85C, \uC870\uB9BD\uCCB4\uC774\uAC70\uB098 \uD68C\uC804\uCCB4\uAC00 \uC544\uB2CC \uBD80\uD488\uC73C\uB85C \uBCF4\uC785\uB2C8\uB2E4.":"The shape above and below the axis differs by {n}%. A turned part is symmetric about its axis, so this looks like an assembly or a non-turned part.","\uC815\uBA74\uC5D0\uC11C \uBCF8 \uC6D0(\uC6D0\uD615 \uD22C\uC0C1)\uC73C\uB85C \uBCF4\uC785\uB2C8\uB2E4. \uC774 \uB370\uBAA8\uB294 \uCD95\uC774 \uAC00\uB85C\uB85C \uB193\uC778 \uC606\uBAA8\uC2B5 \uB3C4\uBA74\uC744 \uC77D\uC2B5\uB2C8\uB2E4.":"This looks like a circle seen head-on. This demo reads side views with the axis running horizontally.","\uC678\uD615\uC774 \uACC4\uC18D \uAD7D\uC5B4 \uC788\uC5B4 \uC6D0\uD1B5 \uAD6C\uAC04\uC774 \uAC70\uC758 \uC5C6\uC2B5\uB2C8\uB2E4(\uCD95 \uAE38\uC774\uC758 {n}%). \uC120\uBC18\uC5D0\uC11C \uAE4E\uB294 \uD68C\uC804\uCCB4 \uB3C4\uBA74\uC73C\uB85C \uBCF4\uAE30 \uC5B4\uB835\uC2B5\uB2C8\uB2E4.":"The outline curves throughout with almost no cylindrical run ({n}% of the length). This is unlikely to be a lathe-turned part.","\uD070 \uC131\uBD84\uC774 {n}\uAC1C. \uC5EC\uB7EC \uD22C\uC0C1\uB3C4\uB098 \uC870\uB9BD\uCCB4\uB85C \uBCF4\uC785\uB2C8\uB2E4. \uC774 \uB370\uBAA8\uB294 \uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4 \uD55C \uC7A5\uC744 \uC77D\uC2B5\uB2C8\uB2E4(\uB2E8\uBA74\uB3C4\xB7\uD0A4\uD648 \uB2E8\uBA74\uC740 \uC606\uC5D0 \uC788\uC5B4\uB3C4 \uB429\uB2C8\uB2E4).":"{n} large components found, so this looks like several views or an assembly. This demo reads one front view (a section or keyway detail beside it is fine).","\uBD80\uD488\uC774 \uAC00\uB85C {n}px \uB85C \uC791\uC2B5\uB2C8\uB2E4(\uAD8C\uC7A5 1,000px \uC774\uC0C1). \uC800\uD574\uC0C1 JPEG \uC740 \uC678\uD615\uC120\uACFC \uCE58\uC218\uC120\uC774 \uBD99\uC5B4 \uD310\uB3C5\uC774 \uC5B4\uAE0B\uB0A9\uB2C8\uB2E4.":"The part is only {n}px wide (1,000px or more recommended). In low-resolution JPEGs the outline and dimension lines merge.",\uCD95:"Shaft",\uD50C\uB79C\uC9C0:"Flange","\uBCFC\uD2B8\xB7\uB098\uC0AC":"Bolt \xB7 screw",\uC2A4\uD130\uB4DC:"Stud","\uAE30\uD0C0 \uD68C\uC804\uCCB4":"Other turned part","\uD68C\uC804\uC744 \uC804\uB2EC\uD558\uB294 \uCD95. \uBCA0\uC5B4\uB9C1\uC5D0 \uAC78\uB9AC\uACE0 \uD0A4\xB7\uBA48\uCDA4\uB9C1\uC73C\uB85C \uC0C1\uB300 \uBD80\uD488\uC744 \uC7A1\uB294\uB2E4.":"A shaft that transmits rotation. It rides in bearings and holds mating parts with keys and retaining rings.","\uACE0\uC18D\uC73C\uB85C \uB3C4\uB294 \uCD95. \uBCA0\uC5B4\uB9C1 \uC790\uB9AC\uC640 \uACF5\uAD6C\xB7\uCC99 \uC778\uD130\uD398\uC774\uC2A4\uAC00 \uC788\uB2E4.":"A high-speed shaft with bearing seats and a tool or chuck interface.","\uB450 \uBD80\uD488\uC744 \uC787\uB294 \uD540. \uAD6C\uBA4D\uC5D0 \uB07C\uC6B0\uACE0 \uBD84\uD560\uD540\xB7\uBA48\uCDA4\uB9C1\uC73C\uB85C \uBE60\uC9C0\uC9C0 \uC54A\uAC8C \uD55C\uB2E4. \uC2A4\uC2A4\uB85C \uB3CC\uC9C0 \uC54A\uB294\uB2E4.":"A pin joining two parts. It slides into a hole and is retained by a split pin or ring. It does not rotate on its own.","\uD558\uC6B0\uC9D5\uC5D0 \uC555\uC785\uB418\uC5B4 \uC548\uC5D0\uC11C \uB3C4\uB294 \uCD95\uC744 \uBC1B\uCE58\uB294 \uBBF8\uB044\uB7FC \uBCA0\uC5B4\uB9C1. \uBD80\uC2DC \uC790\uCCB4\uB294 \uB3CC\uC9C0 \uC54A\uB294\uB2E4.":"A plain bearing pressed into a housing to support a rotating shaft. The bushing itself does not turn.","\uCD95\uC5D0 \uB07C\uC6B0\uB294 \uD1B5. \uAC04\uACA9 \uC720\uC9C0\xB7\uBCF4\uD638\xB7\uBBF8\uB044\uB7FC\uBA74.":"A tube fitted over a shaft for spacing, protection or a sliding surface.","\uBD80\uD488 \uC0AC\uC774 \uAC04\uACA9\uC744 \uC815\uD558\uB294 \uB9C1. \uCD95\uC5D0 \uB07C\uC6CC \uBCA0\uC5B4\uB9C1\xB7\uAE30\uC5B4 \uC0AC\uC774\uC5D0 \uB454\uB2E4.":"A ring that sets the gap between parts, fitted on a shaft between bearings or gears.","\uBB3C\uAC74\uC744 \uAD74\uB9AC\uB294 \uB864\uB7EC. \uC591 \uB05D \uCD95\uC774 \uBCA0\uC5B4\uB9C1\uC5D0 \uAC78\uB9AC\uACE0 \uBAB8\uD1B5\uC774 \uB3C8\uB2E4.":"A roller. The stub shafts run in bearings and the body turns.","\uBCFC\uD2B8\uB85C \uC0C1\uB300\uC5D0 \uBD99\uB294 \uC6D0\uD310. \uCD95\uBC29\uD5A5\uC73C\uB85C \uB9DE\uB300\uC5B4 \uC870\uC778\uB2E4.":"A disc bolted to a mating face, clamped along the axis.","\uBA38\uB9AC\uB97C \uB3CC\uB824 \uC0C1\uB300 \uC554\uB098\uC0AC\uC5D0 \uCCB4\uACB0\uD558\uB294 \uBD80\uD488. 1\uD68C\uC804\uC5D0 \uD53C\uCE58\uB9CC\uD07C \uB4E4\uC5B4\uAC04\uB2E4.":"Turned by its head into a female thread; one turn advances it by the pitch.","\uC591 \uB05D\uC5D0 \uB098\uC0AC\uAC00 \uC788\uB294 \uBD09. \uD55C\uCABD\uC740 \uBAB8\uCCB4\uC5D0, \uB2E4\uB978 \uCABD\uC740 \uB108\uD2B8\uB85C.":"A rod threaded at both ends, one into the body and one for a nut.","\uC120\uBC18\uC5D0\uC11C \uAE4E\uB294 \uADF8 \uBC16\uC758 \uD68C\uC804\uCCB4.":"Another lathe-turned part.",\uC790\uC804:"Spin",\uB07C\uC6B0\uAE30:"Insert",\uCCB4\uACB0:"Screw in","\uC555\uC785\xB7\uBD84\uB9AC":"Press in \xB7 separate","\uB07C\uC6B0\uAE30\xB7\uBE7C\uAE30":"Slide on \xB7 off","\uB9DE\uB300\uAE30\xB7\uBD84\uB9AC":"Mate \xB7 separate","\uC0C1\uB300 \uCD95 \uD68C\uC804":"Mating shaft turns","\uCD95\uACFC \uD568\uAED8 \uB3C4\uB294 \uBD80\uD488(\uB0B4\uB95C\xB7\uD5C8\uBE0C\xB7\uD0A4)\uB9CC \uB3C8\uB2E4":"Only parts that turn with the shaft (inner race, hub, key) rotate","\uBCA0\uC5B4\uB9C1\xB7\uD5C8\uBE0C\xB7\uBA48\uCDA4\uB9C1\uC744 \uCD95\uBC29\uD5A5\xB7\uBC18\uACBD\uBC29\uD5A5\uC73C\uB85C \uBE80\uB2E4":"Bearings, hubs and rings come off axially and radially","\uBCA0\uC5B4\uB9C1 \uB0B4\uB95C\uB9CC \uD568\uAED8 \uB3C8\uB2E4":"Only the bearing inner race turns with it","\uC694\uD06C(\uD074\uB808\uBE44\uC2A4) \uAD6C\uBA4D\uC5D0 \uCD95\uBC29\uD5A5\uC73C\uB85C \uB123\uB294\uB2E4":"Goes axially into the yoke (clevis) holes","\uBD84\uD560\uD540\uC744 \uBC18\uACBD \uBC29\uD5A5\uC73C\uB85C \uBF51\uACE0 \uD540\uC744 \uBE80\uB2E4":"Pull the split pin radially, then withdraw the pin","\uD558\uC6B0\uC9D5\uC5D0 \uCD95\uBC29\uD5A5\uC73C\uB85C \uC555\uC785\uB418\uACE0, \uC0C1\uB300 \uCD95\uC774 \uBCF4\uC5B4\uC5D0 \uB4E4\uC5B4\uAC04\uB2E4":"Pressed axially into the housing; the mating shaft enters the bore","\uBD80\uC2DC\uB294 \uACE0\uC815, \uC548\uC758 \uCD95\uC774 \uB3C8\uB2E4":"The bushing stays put; the shaft inside turns","\uCD95\uBC29\uD5A5\uC73C\uB85C \uB07C\uC6B4\uB2E4":"Slides on axially","\uBAB8\uD1B5\uC774 \uB3C8\uB2E4":"The body turns","\uCD95\uBC29\uD5A5\uC73C\uB85C \uBD99\uC778\uB2E4":"Mates axially","1\uD68C\uC804 = \uD53C\uCE58\uB9CC\uD07C \uC804\uC9C4, \uACF5\uAD6C\uAC00 \uD568\uAED8 \uB3C8\uB2E4":"One turn advances by the pitch; the tool turns with it","\uB108\uD2B8\uAC00 \uB3CC\uBA70 \uB4E4\uC5B4\uAC04\uB2E4":"The nut turns and draws it in","\uD480\uC5B4\uC11C \uBE80\uB2E4":"Unscrew and remove","\uD310\uB3C5\uAE30\uAC00 \uBD84\uB958\uD55C \uC720\uD615":"type from the reading","\uBCF4\uC5B4\uAC00 \uC788\uC74C":"has a bore","\uD6A1\uAD6C\uBA4D\uC774 \uC788\uB294 \uB2E8\uC21C \uC6D0\uD1B5":"plain cylinder with a cross hole","\uD0A4\uD648 \uB610\uB294 \uBCA0\uC5B4\uB9C1 \uACF5\uCC28":"keyway or bearing tolerance","\uC591 \uB05D\uC774 \uB098\uC0AC\uBD80":"threaded at both ends","\uD574\uC11D \uACB0\uACFC":"from the analysis","\uC815\uBA74 \xB7 \uC717\uBA74 \xB7 \uCE21\uBA74\uC774 \uC788\uB294 \uBD80\uD488 \uB3C4\uBA74 \uD55C \uC7A5":"One sheet with front, top and side views","\uC608\uC2DC \uB3C4\uBA74":"Example drawings","\uACE1\uAD00\uC740 \uB9CC\uB4E4\uC9C0 \uBABB\uD558\uB294 \uBD80\uB958\uB77C \uC774\uC720\uB97C \uBCF4\uC5EC \uC90D\uB2C8\uB2E4.":"The elbow is a kind we can't build; the demo explains why.","L \uBE0C\uB798\uD0B7 3\uBA74\uB3C4":"L bracket, 3 views","\uBCA0\uC5B4\uB9C1 \uD558\uC6B0\uC9D5":"Bearing housing","\uC0AC\uAC01 \uD50C\uB79C\uC9C0 \uACE1\uAD00":"Square-flange elbow","\uBDF0\uC640 \uBC29\uD5A5":"Views and directions",\uD22C\uC0C1\uBC95:"Projection","3\uAC01\uBC95":"Third angle","1\uAC01\uBC95":"First angle","\uBDF0\uB97C \uACE0\uB974\uACE0 \uC624\uB978\uCABD \uC815\uC721\uBA74\uCCB4\uC5D0\uC11C \uBC29\uD5A5\uC744 \uB204\uB985\uB2C8\uB2E4. \uCC38\uACE0 \uBDF0\uB294 \uB9CC\uB4E4 \uB54C \uC4F0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.":"Pick a view, then click a face on the cube at the right. Reference views aren't used when building.","\uC67C\uCABD\uC5D0\uC11C \uC608\uC2DC\uB97C \uACE0\uB974\uAC70\uB098 \uB3C4\uBA74\uC744 \uC62C\uB9AC\uC138\uC694":"Pick an example on the left, or upload a drawing","\uC77D\uC740 \uCE58\uC218 \uD45C\uC2DC":"Show dimensions read","\uC77D\uC740 \uCE58\uC218 \uBB38\uC790\uB97C \uB3C4\uBA74 \uC704\uC5D0 \uD45C\uC2DC":"Marks the dimension text on the drawing","\uBDF0 \uBC29\uD5A5":"View direction","\uBDF0 \uC5C6\uC74C":"No view","\uBDF0 {n}":"View {n}","\uBDF0\uB97C \uACE0\uB978 \uB4A4 \uBA74\uC744 \uB204\uB974\uC138\uC694.":"Pick a view, then click a face.","\uBA3C\uC800 \uBDF0\uB97C \uACE0\uB974\uC138\uC694":"Pick a view first",\uC815\uBA74\uB3C4:"Front",\uC717\uBA74\uB3C4:"Top",\uC6B0\uCE21\uBA74\uB3C4:"Right",\uC88C\uCE21\uBA74\uB3C4:"Left",\uC544\uB7AB\uBA74\uB3C4:"Bottom",\uB4B7\uBA74\uB3C4:"Back","\uB4F1\uAC01 (\uCC38\uACE0)":"Isometric (reference)","\uB2E8\uBA74 (\uCC38\uACE0)":"Section (reference)","\uC0C1\uC138 (\uCC38\uACE0)":"Detail (reference)","\uC4F0\uC9C0 \uC54A\uC74C":"Not used",\uCD95\uCC99:"Scale","\uB9DE\uB294 \uCE58\uC218":"Agreeing dimensions","\uACE0\uB978 \uBDF0\uC758 \uAC00\uB85C \uC2E4\uC81C \uAE38\uC774 (mm)":"Real width of the selected view (mm)","\uCE58\uC218 \uB2E4\uC2DC \uC77D\uAE30":"Read dimensions again","{n}\uAC1C \uC77D\uC74C \xB7 {n}\uCD08":"{n} read \xB7 {n}s","\uC77D\uC9C0 \uBABB\uD568":"Not read","1 px = {n} mm":"1 px = {n} mm","1 px = {n} mm (\uBDF0 {n} \uAC00\uB85C {n} mm \uC785\uB825)":"1 px = {n} mm (view {n} width entered as {n} mm)","\uB9DE\uB294 \uCE58\uC218\uAC00 \uC801\uC2B5\uB2C8\uB2E4. \uC544\uB294 \uCE58\uC218 \uD558\uB098\uB97C \uB123\uC5B4 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":"Few dimensions agree. Enter one known dimension to confirm.","\uC5EC\uB7EC \uCE58\uC218\uAC00 \uAC19\uC740 \uCD95\uCC99\uC744 \uAC00\uB9AC\uD0B5\uB2C8\uB2E4.":"Several dimensions point to the same scale.","\uC785\uB825\uD55C \uCE58\uC218\uB85C \uCD95\uCC99\uC744 \uC815\uD588\uC2B5\uB2C8\uB2E4":"Scale set from the value you entered","\uCE58\uC218\uB97C \uC77D\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.":"Couldn't read the dimensions.","\uCE58\uC218 \uBB38\uC790\uC640 \uCE58\uC218\uC120\uC744 \uC9DD\uC9C0\uC744 \uC218 \uC5C6\uC5C8\uC2B5\uB2C8\uB2E4":"Couldn't pair dimension text with dimension lines","\uBB38\uC790 \uC778\uC2DD \uC5D4\uC9C4\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4 ({}).":"Couldn't load the text recognition engine ({}).","\uCE58\uC218\uB97C \uC77D\uB294 \uC911 \uC624\uB958: {}":"Error while reading dimensions: {}","\uBD80\uD488 \uC720\uD615 \xB7 \uBC29\uBC95":"Part type \xB7 method","\uC815\uD22C\uC0C1 \uAD50\uC9D1\uD569":"Orthographic intersection","\uD310 (\uB450\uAED8)":"Plate (thickness)","\uB450\uAED8 (mm)":"Thickness (mm)","\uC815\uD22C\uC0C1 \uBDF0 {n}\uAC1C\uB85C \uB9CC\uB4ED\uB2C8\uB2E4":"Built from {n} orthographic views","\uBDF0\uAC00 \uD558\uB098\uB77C \uD68C\uC804\uCCB4\uB85C \uB9CC\uB4ED\uB2C8\uB2E4":"Only one view, so it's built as a turned part","\uBDF0\uAC00 \uD558\uB098\uB77C \uB450\uAED8\uB97C \uB123\uC5B4 \uD310\uC73C\uB85C \uB9CC\uB4ED\uB2C8\uB2E4":"Only one view, so enter a thickness and it's built as a plate","\uB2E8\uBA74\uB3C4\uB85C\uB9CC \uC815\uC758\uB418\uB294 \uBD80\uD488\uC740 \uB9CC\uB4E4\uC9C0 \uBABB\uD569\uB2C8\uB2E4":"Parts defined only by a section view can't be built","\uC815\uBA74, \uC717\uBA74, \uCE21\uBA74 \uC911 \uD558\uB098 \uC774\uC0C1\uC744 \uC9C0\uC815\uD558\uC138\uC694":"Assign at least one of front, top or side","\uC9C1\uC811 \uACE0\uB984":"Chosen manually","\uBA3C\uC800 \uCE58\uC218\uB97C \uC815\uD574 \uC8FC\uC138\uC694":"Set the dimensions first","\uC774 \uBD80\uB958\uB294 \uB9CC\uB4E4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4":"This kind can't be built","1\uB2E8\uACC4 \xB7 \uAC01\uAE30\uB465":"Level 1 \xB7 prismatic","2\uB2E8\uACC4 \xB7 \uC6D0\uD1B5 \uADFC\uC0AC":"Level 2 \xB7 cylinder approx.","3\uB2E8\uACC4 \xB7 \uACE1\uBA74":"Level 3 \xB7 curved","\uC815\uD655\uD788 \uB098\uC635\uB2C8\uB2E4.":"Comes out accurate.","\uC548\uCABD \uD615\uC0C1\uC740 \uADFC\uC0AC\uC785\uB2C8\uB2E4.":"Inner shapes are approximate.","\uB9CC\uB4E4\uC9C0 \uBABB\uD558\uB294 \uBD80\uB958\uC785\uB2C8\uB2E4.":"This kind can't be built.","\uD06C\uAE30 X \xD7 Y \xD7 Z":"Size X \xD7 Y \xD7 Z",\uBD80\uD53C:"Volume",\uC0BC\uAC01\uD615:"Triangles","\uBDF0 \uC815\uD569":"View match","\uB300\uC870\uD560 \uC815\uD22C\uC0C1 \uBDF0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.":"No orthographic views to compare.","{} \uC815\uD569\uC774 \uB0AE\uC2B5\uB2C8\uB2E4. \uBC29\uD5A5\uACFC \uAD6C\uBA4D\uC744 \uD655\uC778\uD558\uC138\uC694.":"{} matches poorly. Check the direction and the holes.","\uCC28\uC774 {n}%":"{n}% apart","\uBDF0 \uB098\uB204\uAE30":"Splitting views","\uC678\uD615\uC120\uB9CC \uB0A8\uAE30\uACE0 \uC131\uBD84 \uCC3E\uAE30":"Keeping outlines, finding components","\uAC00\uAE4C\uC6B4 \uC131\uBD84\uC744 \uBDF0\uB85C \uBB36\uAE30":"Grouping nearby components into views","\uC724\uACFD \xB7 \uAD6C\uBA4D \uB530\uAE30, \uBC30\uCE58\uB85C \uBC29\uD5A5 \uCD94\uCC9C":"Tracing outlines and holes, suggesting directions","\uBDF0\uB9C8\uB2E4 \uC724\uACFD\uC744 \uADF8 \uBC29\uD5A5\uC73C\uB85C \uBC00\uC5B4\uB0B4\uAE30":"Extruding each view along its direction","\uC804\uBD80 \uAD50\uC9D1\uD569\uD558\uAE30":"Intersecting them all","\uAC01 \uBDF0\uB85C \uB2E4\uC2DC \uD22C\uC601\uD574 \uB3C4\uBA74\uACFC \uB300\uC870":"Re-projecting onto each view and comparing","\uBDF0 {n}\uAC1C. \uBC29\uD5A5\uC744 \uD655\uC778\uD558\uC138\uC694":"{n} views. Check the directions","\uBDF0\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4":"No views found","\uB3C4\uBA74\uC5D0\uC11C \uD615\uC0C1\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4":"Couldn't find any shape in the drawing","\uBD80\uD488\uC744 \uB9CC\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4":"Part built","\uC815\uD22C\uC0C1 \uBDF0\uAC00 \uB458 \uC774\uC0C1 \uD544\uC694\uD569\uB2C8\uB2E4(\uC815\uBA74\uB3C4 + \uC717\uBA74\uB3C4 \uB610\uB294 \uCE21\uBA74\uB3C4). \uBDF0\uAC00 \uD558\uB098\uBA74 \uB450\uAED8\uB97C \uB123\uC5B4 \uD310\uC73C\uB85C \uB9CC\uB4DC\uC138\uC694.":"Two or more orthographic views are needed (front plus top or side). With one view, enter a thickness to build a plate.","\uD68C\uC804\uCCB4\uB85C \uBCFC \uBDF0\uB97C \uC815\uD574 \uC8FC\uC138\uC694":"Assign a view to use as the turned part","\uD310\uC73C\uB85C \uBCFC \uBDF0\uB97C \uC815\uD574 \uC8FC\uC138\uC694":"Assign a view to use as the plate","\uC724\uACFD\uC73C\uB85C \uD615\uC0C1\uC744 \uB9CC\uB4E4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4":"Couldn't build a shape from the outline","\uC774 \uBDF0\uC5D0\uC11C \uB2EB\uD78C \uC724\uACFD\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4":"No closed outline found in this view","\uB450\uAED8 {n} mm \uB294 \uC785\uB825\uAC12\uC785\uB2C8\uB2E4":"The {n} mm thickness is a value you entered","\uBDF0 \uD558\uB098\uB97C \uCD95 \uB458\uB808\uB85C \uB3CC\uB838\uC2B5\uB2C8\uB2E4":"One view revolved about its axis","\uAD6C\uBA4D {n}":"{n} holes","\uAD6C\uBA4D {n} \xB7 \uC548\uCABD \uBAA8\uC11C\uB9AC {n}":"{n} holes \xB7 {n} inner edges","{n}\xD7{n} px":"{n}\xD7{n} px","\uB3C4\uBA74\uC744 \uC62C\uB9AC\uBA74 \uBDF0\uB97C \uC790\uB3D9\uC73C\uB85C \uB098\uB215\uB2C8\uB2E4. \uBDF0\uB97C \uACE0\uB974\uACE0 \uC720\uD615\uC744 \uC815\uD55C \uB4A4 {} \uB97C \uB204\uB974\uC138\uC694.":"Upload a drawing and the views are split automatically. Pick a view, set the type, then press {}.","\uC62C\uB9AC\uAE30 \uC804\uC5D0":"Before you upload","\uC5B4\uB5A4 \uB3C4\uBA74\uC744 \uC62C\uB9AC\uBA74 \uB418\uB098\uC694":"What can I upload?","\uD55C \uBD80\uD488\uC744 \uC5EC\uB7EC \uBC29\uD5A5\uC5D0\uC11C \uADF8\uB9B0 \uB3C4\uBA74 \uD55C \uC7A5\uC785\uB2C8\uB2E4. \uBDF0\uB9C8\uB2E4 \uBC29\uD5A5\uC744 \uC815\uD558\uBA74 \uCE58\uC218\uB97C \uC77D\uC5B4 \uBD80\uD488 \uD558\uB098\uB97C \uB9CC\uB4ED\uB2C8\uB2E4.":"One sheet showing a single part from several directions. Set a direction per view and it reads the dimensions to build one part.","\uC815\uBA74 \xB7 \uC717\uBA74 \xB7 \uCE21\uBA74\uC774 \uC788\uB294 \uD55C \uBD80\uD488 \uB3C4\uBA74":"A single-part drawing with front, top and side views","\uC870\uB9BD\uB3C4, \uC0AC\uC9C4, 3D \uB80C\uB354":"Assembly drawings, photos, 3D renders","\uBDF0\uB07C\uB9AC \uB5A8\uC5B4\uC838 \uC788\uACE0 \uC678\uD615\uC120\uC774 \uCE58\uC218\uC120\uBCF4\uB2E4 \uAD75\uAC8C":"Views set apart, outlines thicker than dimension lines","\uBDF0\uAC00 \uBD99\uC5B4 \uC788\uAC70\uB098 \uC120 \uAD75\uAE30 \uAD6C\uBD84\uC774 \uC5C6\uB294 \uB3C4\uBA74":"Views touching, or no difference in line weight","\uCE58\uC218 \uC22B\uC790\uAC00 \uCE58\uC218\uC120 \uBC14\uB85C \uC704\uB098 \uC606\uC5D0":"Dimension numbers right on or beside their dimension line","\uCE58\uC218\uAC00 \uAE30\uD638(A, B, H)\uBFD0\uC778 \uCE74\uD0C8\uB85C\uADF8 \uB3C4\uBA74":"Catalogue drawings with only letter symbols (A, B, H)","\uAC00\uB85C 1,500px \uC774\uC0C1, \uBC18\uB4EF\uD55C \uC774\uBBF8\uC9C0":"1,500px wide or more, straight image","\uD750\uB9AC\uAC70\uB098 \uAE30\uC6B8\uC5B4\uC9C4 \uC2A4\uCE94, \uC190\uADF8\uB9BC":"Blurry or skewed scans, hand sketches","1\uB2E8\uACC4":"Level 1","2\uB2E8\uACC4":"Level 2","3\uB2E8\uACC4":"Level 3","\uBE0C\uB798\uD0B7 \xB7 \uD310\uAE08 \xB7 \uAC01\uAE30\uB465":"Brackets \xB7 sheet metal \xB7 prisms","\uD558\uC6B0\uC9D5 \xB7 \uBCF4\uC2A4 \uC788\uB294 \uBAB8\uCCB4":"Housings \xB7 bodies with bosses","\uACE1\uAD00 \xB7 \uC2A4\uC715 \xB7 \uC790\uC720\uACE1\uBA74":"Elbows \xB7 sweeps \xB7 free-form","\uC815\uD655\uD788 \uB098\uC635\uB2C8\uB2E4.\uB9CC\uB4E4\uC9C0 \uBABB\uD569\uB2C8\uB2E4.":"","\uB9CC\uB4E4\uC9C0 \uBABB\uD569\uB2C8\uB2E4.":"Can't be built.","\uB450\uAED8\uB294 \uD55C \uBDF0\uB9CC\uC73C\uB85C \uC54C \uC218 \uC5C6\uC5B4 \uC9C1\uC811 \uB123\uC2B5\uB2C8\uB2E4. \uC870\uB9BD \uC704\uCE58\uB3C4 \uB3C4\uBA74\uC5D0\uC11C \uC77D\uC9C0 \uC54A\uACE0 \uD654\uBA74\uC5D0\uC11C \uB9DE\uCDA5\uB2C8\uB2E4.":"Thickness can't be known from one view, so you enter it. Assembly positions aren't read from the drawing either.","\uC790\uC138\uD55C \uC548\uB0B4":"Full guide","\uB2E4\uC2DC \uBCF4\uC9C0 \uC54A\uAE30":"Don't show again","\uD30C\uC77C \uACE0\uB974\uAE30":"Choose a file","PNG \xB7 JPG \xB7 SVG \xB7 \uC5EC\uB7EC \uD22C\uC0C1\uB3C4\uAC00 \uC788\uC5B4\uB3C4 \uB429\uB2C8\uB2E4":"PNG \xB7 JPG \xB7 SVG \xB7 multiple views are fine",\uAC74\uB108\uB6F0\uAE30:"Skip",\uC774\uC804:"Back",\uB2E4\uC74C:"Next",\uC2DC\uC791\uD558\uAE30:"Start","\uC0D8\uD50C \uB3C4\uBA74\uC73C\uB85C \uC2DC\uC791":"Start with a sample","\uCE74\uB4DC\uB97C \uB204\uB974\uBA74 \uADF8 \uB3C4\uBA74\uC73C\uB85C \uBC14\uB85C \uC9C4\uD589\uB429\uB2C8\uB2E4. \uCC98\uC74C\uC774\uB77C\uBA74 \uC5EC\uAE30\uC11C \uC2DC\uC791\uD558\uC138\uC694.":"Click a card to run that drawing. Start here if it's your first time.","\uB0B4 \uB3C4\uBA74 \uC62C\uB9AC\uAE30":"Upload your drawing","\uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4 \uD55C \uC7A5\uC744 \uC62C\uB9BD\uB2C8\uB2E4. \uC544\uB798\uC5D0\uC11C \uBD80\uD488 \uC720\uD615\uC744 \uBA3C\uC800 \uACE8\uB77C \uB450\uBA74 \uADF8 \uC720\uD615\uC5D0 \uB9DE\uAC8C \uC2DC\uBBAC\uB808\uC774\uC158\uD569\uB2C8\uB2E4.":"Upload one front view of a turned part. Pick the part type below first and the simulation is planned for it.","\uC62C\uB9AC\uAE30 \uC548\uB0B4 \uC5F4\uAE30":"Open the upload guide","\uB124 \uB2E8\uACC4\uB85C \uC9C4\uD589":"Four steps","\uB3C4\uBA74 \uC785\uB825, \uD310\uB3C5, 3D CAD, \uAC80\uC99D \uC21C\uC11C\uC785\uB2C8\uB2E4. \uC9C0\uAE08 \uB2E8\uACC4\uAC00 \uC704\uCABD\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.":"Drawing, reading, 3D CAD, check. The current step is shown at the top.","\uB2E4\uC74C \uB2E8\uACC4 \uBC84\uD2BC":"Next-step button","\uC624\uB978\uCABD \uC544\uB798 \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uB2E4\uC74C \uB2E8\uACC4\uAC00 \uC2E4\uD589\uB429\uB2C8\uB2E4. \uBC84\uD2BC \uC704 \uD55C \uC904\uC774 \uADF8 \uB2E8\uACC4\uAC00 \uD558\uB294 \uC77C\uC785\uB2C8\uB2E4.":"The button at the bottom right runs the next step. The line above it says what that step does.","\uBCF4\uAE30 \uC804\uD658\uACFC \uC870\uB9BD \xB7 \uC2DC\uBBAC":"View switches and simulation","\uB2E8\uBA74\uACFC \uB3C4\uBA74\uC744 \uBC88\uAC08\uC544 \uBCF4\uACE0, \uC870\uB9BD \xB7 \uC2DC\uBBAC\uC744 \uCF1C\uBA74 \uC0C1\uB300 \uBD80\uD488\uACFC \uD68C\uC804\uC774 \uBD99\uC2B5\uB2C8\uB2E4. \uB044\uBA74 \uBD80\uD488\uB9CC \uB0A8\uC2B5\uB2C8\uB2E4.":"Switch between section and drawing. Turning on assembly adds mating parts and motion; turning it off leaves just the part.","\uACB0\uACFC\uC640 \uB0B4\uB824\uBC1B\uAE30":"Results and download","\uD310\uB3C5\uD55C \uCE58\uC218\uB97C \uACE0\uCE58\uBA74 3D\uC640 \uB3C4\uBA74\uC774 \uD568\uAED8 \uBC14\uB01D\uB2C8\uB2E4. 3D\uAC00 \uB9CC\uB4E4\uC5B4\uC9C0\uBA74 \uB9E8 \uC544\uB798 \uB0B4\uBCF4\uB0B4\uAE30\uC5D0\uC11C STEP, STL, GLB \uB4F1\uC73C\uB85C \uBC1B\uC2B5\uB2C8\uB2E4.":"Edit a dimension and the 3D and drawing follow. Once the 3D exists, download STEP, STL, GLB and more at the bottom.","\uC608\uC2DC \uB3C4\uBA74\uC73C\uB85C \uC2DC\uC791":"Start with an example","\uD55C \uBD80\uD488\uC744 \uC815\uBA74 \xB7 \uC717\uBA74 \xB7 \uCE21\uBA74\uC73C\uB85C \uADF8\uB9B0 \uB3C4\uBA74\uB4E4\uC785\uB2C8\uB2E4. \uC138 \uBC88\uC9F8(\uACE1\uAD00)\uB294 \uC774 \uBC84\uC804\uC774 \uB9CC\uB4E4\uC9C0 \uBABB\uD558\uB294 \uBD80\uB958\uB77C \uC774\uC720\uB97C \uBCF4\uC5EC \uC90D\uB2C8\uB2E4.":"Drawings of one part in front, top and side views. The third (elbow) is a kind this version can't build, and it says why.","\uC5EC\uB7EC \uD22C\uC0C1\uB3C4\uAC00 \uD55C \uC7A5\uC5D0 \uC788\uB294 \uD55C \uBD80\uD488 \uB3C4\uBA74\uC744 \uC62C\uB9BD\uB2C8\uB2E4. \uC62C\uB9AC\uBA74 \uBDF0\uB97C \uB098\uB204\uACE0, \uBC29\uD5A5\uC744 \uCD94\uCC9C\uD558\uACE0, \uCE58\uC218 \uBB38\uC790\uB97C \uC77D\uC2B5\uB2C8\uB2E4.":"Upload a single-part drawing with several views. It splits the views, suggests directions and reads the dimension text.","\uBDF0\uB9C8\uB2E4 \uBC29\uD5A5 \uD655\uC778":"Check each direction","\uCD94\uCC9C\uB41C \uBC29\uD5A5(\uC815\uBA74 \xB7 \uC717\uBA74 \xB7 \uC6B0\uCE21\uBA74 \xB7 \uB4F1\uAC01 \uCC38\uACE0)\uC774 \uB9DE\uB294\uC9C0 \uBD05\uB2C8\uB2E4. \uAE30\uD558\uB9CC\uC73C\uB85C\uB294 \uBC29\uD5A5\uC744 \uD655\uC2E0\uD560 \uC218 \uC5C6\uC5B4 \uC0AC\uB78C\uC774 \uD655\uC815\uD569\uB2C8\uB2E4.":"Check the suggested directions. Geometry alone can't be sure which view is which, so you confirm them.","\uC815\uC721\uBA74\uCCB4\uB85C \uBC29\uD5A5 \uC8FC\uAE30":"Set direction with the cube","\uBDF0\uB97C \uACE0\uB978 \uB4A4 \uC815\uC721\uBA74\uCCB4\uC758 \uBA74\uC744 \uB204\uB974\uBA74 \uADF8 \uBDF0\uAC00 \uADF8 \uBC29\uD5A5\uC774 \uB429\uB2C8\uB2E4. \uC815\uD22C\uC0C1 \uBC29\uD5A5\uC740 \uBDF0 \uD558\uB098\uC5D0\uB9CC \uC904 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":"Pick a view, then click a cube face to assign that direction. Each orthographic direction belongs to one view.","\uCE58\uC218\uB294 \uB3C4\uBA74\uC5D0\uC11C \uC77D\uC2B5\uB2C8\uB2E4":"Dimensions come from the drawing","\uCE58\uC218 \uBB38\uC790\uB97C \uC77D\uC5B4 \uCE58\uC218\uC120\uACFC \uC9DD\uC9C0\uC5B4 \uCD95\uCC99\uC744 \uC815\uD569\uB2C8\uB2E4. \uC11C\uB85C \uB9DE\uB294 \uCE58\uC218\uAC00 \uB9CE\uC744\uC218\uB85D \uBBFF\uC744 \uB9CC\uD569\uB2C8\uB2E4. \uBABB \uC77D\uC73C\uBA74 \uADF8\uB54C\uB9CC \uD55C \uCE58\uC218\uB97C \uBB3B\uC2B5\uB2C8\uB2E4.":"Dimension text is paired with dimension lines to set the scale. The more that agree, the safer it is. Only if none can be read are you asked for one.","\uB9CC\uB4E4\uACE0 \uC815\uD569 \uBCF4\uAE30":"Build and check the match","\uAC01 \uBDF0\uC758 \uC724\uACFD\uC744 \uADF8 \uBC29\uD5A5\uC73C\uB85C \uBC00\uC5B4\uB0B4 \uAD50\uC9D1\uD569\uD569\uB2C8\uB2E4. \uB9CC\uB4E0 3D \uB97C \uAC01 \uBDF0\uB85C \uB2E4\uC2DC \uD22C\uC601\uD574 \uB3C4\uBA74\uACFC \uC5BC\uB9C8\uB098 \uACB9\uCE58\uB294\uC9C0 \uBCF4\uC5EC \uC90D\uB2C8\uB2E4.":"Each view's outline is extruded along its direction and intersected. The result is re-projected onto each view to show the overlap.",\uB2EB\uAE30:"Close","\uC815\uB2F5 \uC0AC\uC591\uC5D0\uC11C \uADF8\uB9B0 \uB3C4\uBA74\uC774\uB77C \uD310\uB3C5 \uC815\uD655\uB3C4\uB97C \uC22B\uC790\uB85C \uBCF4\uC5EC \uC90D\uB2C8\uB2E4. \uCE74\uB4DC\uB97C \uB204\uB974\uBA74 \uC5F4\uB9BD\uB2C8\uB2E4.":"These drawings come from reference specs, so reading accuracy can be shown as a number. Click a card to open it.",\uBD80\uC2DC:"Bushing","\uD074\uB808\uBE44\uC2A4 \uD540":"Clevis pin","\uD50C\uB79C\uC9C0 \uBD80\uC2DC":"Flanged bushing","\uC721\uAC01 \uB2E8\uBD99\uC774 \uCD95":"Hex stepped shaft","\uC591\uB2E8 \uB098\uC0AC \uCD95":"Double-threaded shaft","\uD14C\uC774\uD37C \uCD95":"Taper shaft","\uBAA8\uD130 \uCD95":"Motor shaft","\uB2E8\uBD99\uC774 \uCD95":"Stepped shaft",\uC2AC\uB9AC\uBE0C:"Sleeve",\uC2A4\uD398\uC774\uC11C:"Spacer",\uB864\uB7EC:"Roller",\uC2A4\uD540\uB4E4:"Spindle","\uC721\uAC01 \uBCFC\uD2B8 M10\xD740":"Hex bolt M10\xD740","\uC721\uAC01\uAD6C\uBA4D\uBD99\uC774 \uBCFC\uD2B8 M8\xD730":"Socket head cap screw M8\xD730","\uC138\uD2B8 \uC2A4\uD06C\uB8E8 M6\xD712":"Set screw M6\xD712","\uC811\uC2DC\uBA38\uB9AC \uB098\uC0AC M6\xD720":"Countersunk screw M6\xD720","\uC2A4\uD130\uB4DC \uBCFC\uD2B8 M12\xD760":"Stud bolt M12\xD760",\uD68C\uC804\uCCB4:"Turned part",\uB09C\uC774\uB3C4:"Difficulty",\uBCF4\uC5B4:"Bore",\uD3C9\uBA74:"Flat",\uC721\uAC01:"Hex",\uB110\uB9C1:"Knurl","\uC721\uAC01 \uC18C\uCF13":"Hex socket",\uD0A4\uD648:"Keyway",\uC13C\uD130\uAD6C\uBA4D:"Centre hole",\uD6A1\uAD6C\uBA4D:"Cross hole",\uBAA8\uB530\uAE30:"Chamfer",\uD544\uB81B:"Fillet",\uB77C\uC6B4\uB4DC:"Round",\uB3C4\uD53C\uD648:"Undercut",\uD648:"Groove","\uACBD\uACC4 {n} \xB7 C{n}":"Boundary {n} \xB7 C{n}","\uACBD\uACC4 {n} \xB7 C{n}\xD7{n}\xB0":"Boundary {n} \xB7 C{n}\xD7{n}\xB0","\uACBD\uACC4 {n} \xB7 R{n}":"Boundary {n} \xB7 R{n}","\uACBD\uACC4 {n} \xB7 {n}\xD7{n}":"Boundary {n} \xB7 {n}\xD7{n}","\uC67C\uCABD \xB7 {}":"Left \xB7 {}","\uC624\uB978\uCABD \xB7 {}":"Right \xB7 {}","\uC67C\uCABD \xB7 S{n} \uAE4A\uC774 {n}":"Left \xB7 S{n} depth {n}","\uC624\uB978\uCABD \xB7 S{n} \uAE4A\uC774 {n}":"Right \xB7 S{n} depth {n}","x{n} \xB7 \u2300{n} \uAD00\uD1B5":"x{n} \xB7 \u2300{n} through","x{n} \xB7 \u2300{n} \uAE4A\uC774 {n}":"x{n} \xB7 \u2300{n} depth {n}","seg {n} \xB7 +{n} \xB7 {n}\xD7{n} L{n}":"seg {n} \xB7 +{n} \xB7 {n}\xD7{n} L{n}","seg {n} \xB7 +{n} \xB7 L{n} \uAE4A\uC774 {n}":"seg {n} \xB7 +{n} \xB7 L{n} depth {n}","seg {n} \xB7 +{n} \xB7 L{n} \uAE4A\uC774 {n} \xD7{n}":"seg {n} \xB7 +{n} \xB7 L{n} depth {n} \xD7{n}","seg {n} \xB7 \uB300\uBCC0 {n}":"seg {n} \xB7 across flats {n}","seg {n} \xB7 L{n}":"seg {n} \xB7 L{n}","seg {n} \xB7 +{n} \xB7 {n}\xD7{n}":"seg {n} \xB7 +{n} \xB7 {n}\xD7{n}","seg {n} \xB7 +{n} \xB7 {n}\xD7{n} ({})":"seg {n} \xB7 +{n} \xB7 {n}\xD7{n} ({})","\uAD00\uD1B5 \xB7 \u2300{n}\xD7{n}":"Through \xB7 \u2300{n}\xD7{n}","\uB9C9\uD798({}) \xB7 \u2300{n}\xD7{n}":"Blind ({}) \xB7 \u2300{n}\xD7{n}","{n}\uB2E8\uACC4 \xB7 {}":"Step {n} \xB7 {}","\uC9C4\uD589 \uC911":"Working","{n}\uCD08":"{n}s","(\uD310\uB3C5\uAE30\uAC00 \uBD84\uB958\uD55C \uC720\uD615)":"(type from the reading)","{n}\uB2E8\uACC4 \uC2E4\uD328: {}":"Step {n} failed: {}","\uB3C4\uBA74\uC744 \uC62C\uB9AC\uBA74":"Upload a drawing and","\uC0AC\uC591\uC73C\uB85C \uC62E\uAE41\uB2C8\uB2E4. 3D, \uAC80\uC99D, \uB0B4\uB824\uBC1B\uAE30\uB294 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uBC14\uB85C \uC2E4\uD589\uB429\uB2C8\uB2E4.":"into a spec. 3D, checking and download run in this browser.",\uC0D8\uD50C\uC740:"Samples show","\uB97C \uBCF4\uC5EC \uC8FC\uACE0, \uC62C\uB9B0 \uB3C4\uBA74\uC740 \uC774 \uBE0C\uB77C\uC6B0\uC800\uAC00":", and uploads are measured in this browser","\uC0AC\uC591\uC744 \uB9CC\uB4ED\uB2C8\uB2E4. \uCE58\uC218 \uBB38\uC790\uAE4C\uC9C0 \uC77D\uB294 AI \uD310\uB3C5\uC740 \uC11C\uBC84 \uBAA8\uB4DC\uC5D0\uC11C \uB3D9\uC791\uD569\uB2C8\uB2E4.":"to build a spec. AI reading of the dimension text runs in server mode.","\uBD80\uD488 \uD615\uC0C1\uC740 \uB3C4\uBA74 \uADF8\uB300\uB85C, \uC0C1\uB300 \uBD80\uD488\uC740 \uADDC\uACA9\uD45C \uADFC\uC0AC\uC785\uB2C8\uB2E4. \uD68C\uC804\uC774 \uBCF4\uC774\uB3C4\uB85D":"The part matches the drawing; mating parts are standard-table approximations. A","\uC744 \uBD99\uC600\uACE0 \uB0B4\uB824\uBC1B\uB294 \uD30C\uC77C\uC5D0\uB294 \uB4E4\uC5B4\uAC00\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.":"makes the rotation visible and is not included in downloads.","\uC5B4\uB5A4 \uB3C4\uBA74\uC744 \uC62C\uB9AC\uB294\uC9C0\uB294":"What to upload is explained in the","\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.":".","\uC870\uB9BD \xB7 \uC2DC\uBBAC\uB808\uC774\uC158":"Assembly \xB7 simulation","\uB3C4\uBA74\uC5D0\uC11C \uACB0\uD569\uBD80 \uCC3E\uAE30 (\uBA48\uCDA4\uB9C1, \uD0A4, \uB098\uC0AC, \uACF5\uCC28)":"Finding interfaces (rings, keys, threads, tolerances)","\uC0C1\uB300 \uBD80\uD488 \uB9CC\uB4E4\uAE30 (\uADDC\uACA9\uD45C \uADFC\uC0AC)":"Building mating parts (standard-table approximations)","\uBD84\uD574 \uC21C\uC11C\uC640 \uC870\uB9BD \uC810\uAC80":"Disassembly order and assembly checks","STEP\xB7\uBA74":"STEP mesh","\uC0AC\uC591\uC5D0 \uBC18\uC601\uB418\uC9C0 \uC54A\uC740 \uCE58\uC218: {}":"Dimensions not in the spec: {}","x {n}\u2013{n} mm \xB7 \uC790\uC804(X\uCD95)":"x {n}\u2013{n} mm \xB7 spin (X axis)","x {n}\u2013{n} mm \xB7 \uCD95\uBC29\uD5A5 \uC870\uB9BD":"x {n}\u2013{n} mm \xB7 axial assembly","x {n}\u2013{n} mm \xB7 \uBC18\uACBD \uBC29\uD5A5 \uC870\uB9BD":"x {n}\u2013{n} mm \xB7 radial assembly","x {n}\u2013{n} mm \xB7 \uB098\uC0AC \uC774\uC1A1 {n}mm/\uD68C\uC804":"x {n}\u2013{n} mm \xB7 screw feed {n} mm/turn","x {n} mm \xB7 \uC790\uC804(X\uCD95)":"x {n} mm \xB7 spin (X axis)","\uC591 \uB05D \uC13C\uD130\uAD6C\uBA4D(DIN 332). \uC13C\uD130 \uC0AC\uC774\uC5D0\uC11C \uC120\uC0AD\xB7\uC5F0\uC0AD\uB418\uB294 \uD68C\uC804 \uBD80\uD488":"Centre holes at both ends (DIN 332). Turned and ground between centres","\uC13C\uD130\uAD6C\uBA4D 1\uAC1C. \uC120\uC0AD \uAE30\uC900(\uD68C\uC804 \uAC00\uACF5)":"One centre hole. Turning datum","\uBCA0\uC5B4\uB9C1 \uC790\uB9AC {n}\uACF3({}). \uD68C\uC804 \uC9C0\uC9C0":"{n} bearing seat(s) ({}). Rotational support","\uD0A4\uD648. \uD1A0\uD06C \uC804\uB2EC(\uD68C\uC804)":"Keyway. Transmits torque","\uC18D\uC774 \uBE48 \uBD80\uC2DC\xB7\uC2AC\uB9AC\uBE0C. \uBD80\uD488 \uC790\uCCB4\uBCF4\uB2E4 \uC548\uC5D0 \uB4E0 \uC0C1\uB300 \uCD95\uC774 \uC774 \uCD95\uC120\uC5D0\uC11C \uD68C\uC804\uD55C\uB2E4":"Hollow bushing or sleeve. The shaft inside turns on this axis, not the part itself","\uD68C\uC804\uCCB4 \uD615\uC0C1 \uC790\uCCB4(\uCD95 \uB300\uCE6D). \uC790\uC804\uCD95\uC740 \uCD95\uC120\uACFC \uC77C\uCE58":"The shape itself is axisymmetric, so the spin axis is the part axis","{}\uC740(\uB294) \uC2A4\uC2A4\uB85C \uB3CC\uC9C0 \uC54A\uB294 \uBD80\uD488\uC785\uB2C8\uB2E4. \uCD95\uC120\uB9CC \uCC38\uACE0":"A {} does not turn on its own. The axis is shown for reference only","\uC138\uADF8\uBA3C\uD2B8 \u2300{n}. \uAD6C\uB984 \uBCA0\uC5B4\uB9C1 \uB0B4\uB95C \uB07C\uC6CC\uB9DE\uCDA4":"Segment \u2300{n}. Rolling bearing inner-race fit","\uC138\uADF8\uBA3C\uD2B8 \u2300{n} {}. \uAD6C\uB984 \uBCA0\uC5B4\uB9C1 \uB0B4\uB95C \uB07C\uC6CC\uB9DE\uCDA4":"Segment \u2300{n} {}. Rolling bearing inner-race fit","d={n} \uACC4\uC5F4(6000/6200) \uADFC\uC0AC: \uC678\uACBD \u2300{n} \uD3ED {n}":"d={n} series (6000/6200) approximation: OD \u2300{n}, width {n}","\uD45C\uC900 \uACC4\uC5F4\uC5D0 \uC5C6\uB294 \uCD95\uACBD. \uC678\uACBD\xB7\uD3ED\uC740 \uBE44\uB840 \uADFC\uC0AC":"Not a standard bore size; OD and width are scaled approximations","\uC678\uACBD \u2300{n} {}. \uD558\uC6B0\uC9D5 \uAD6C\uBA4D(H7)\uC5D0 \uC555\uC785\uB418\uB294 \uB07C\uC6CC\uB9DE\uCDA4":"OD \u2300{n} {}. Press fit into an H7 housing bore","\uC911\uAC04~\uC5B5\uC9C0 \uB07C\uC6C0: \uC555\uC785 \uD6C4 \uD68C\uC804\uD558\uC9C0 \uC54A\uB294\uB2E4(\uC0C1\uB300 \uCD95\uC774 \uC548\uC5D0\uC11C \uB3C8\uB2E4)":"Transition to interference fit: it does not turn once pressed in","\uD5D0\uAC70\uC6B4 \uB07C\uC6C0: \uC190\uC73C\uB85C \uBC00\uC5B4 \uB123\uC744 \uC218 \uC788\uB2E4":"Clearance fit: it can be pushed in by hand","\uD648 \u2300{n}\xD7{n}. \uCD95\uC6A9 \uBA48\uCDA4\uB9C1(\uC2A4\uB0C5\uB9C1) \uC790\uB9AC":"Groove \u2300{n}\xD7{n}. Seat for an external retaining ring","\uD648 \u2300{n}\xD7{n} ({}). \uCD95\uC6A9 \uBA48\uCDA4\uB9C1(\uC2A4\uB0C5\uB9C1) \uC790\uB9AC":"Groove \u2300{n}\xD7{n} ({}). Seat for an external retaining ring","\uCD95\uACBD \u2300{n} \uD45C\uC900 \uD648: \u2300{n}\xD7{n}":"For a \u2300{n} shaft the standard groove is \u2300{n}\xD7{n}","\uCD95\uACBD \u2300{n} \uD45C\uC900 \uD648: \u2300{n}\xD7{n} (\uD45C \uBC16\xB7\uADFC\uC0AC)":"For a \u2300{n} shaft the standard groove is \u2300{n}\xD7{n} (outside the table)","\uB9C1\uC744 \uBC8C\uB824 \uBC18\uACBD \uBC29\uD5A5\uC73C\uB85C \uB07C\uC6B0\uACE0, \uCD95\uBC29\uD5A5 \uC704\uCE58\uB97C \uACE0\uC815\uD55C\uB2E4":"The ring spreads on radially and fixes the axial position","\uD0A4\uD648 {n}\xD7{n} L{n}. \uD3C9\uD589\uD0A4\uB85C \uD1A0\uD06C \uC804\uB2EC":"Keyway {n}\xD7{n} L{n}. Parallel key transmits torque","\uD0A4\uD648 {n}\xD7{n} L{n} ({}). \uD3C9\uD589\uD0A4\uB85C \uD1A0\uD06C \uC804\uB2EC":"Keyway {n}\xD7{n} L{n} ({}). Parallel key transmits torque","DIN 6885: \uD0A4 {n}\xD7{n}, \uCD95 \uD648 \uAE4A\uC774 t1={n}":"DIN 6885: key {n}\xD7{n}, shaft groove depth t1={n}","\uD45C \uBC16 \uCD95\uACBD. \uD0A4 \uB192\uC774\uB294 \uD3ED\uC5D0\uC11C \uADFC\uC0AC":"Shaft size outside the table; key height approximated from the width","\uD5C8\uBE0C(\uAE30\uC5B4\xB7\uD480\uB9AC\xB7\uCEE4\uD50C\uB9C1)\uAC00 \uCD95\uBC29\uD5A5\uC73C\uB85C \uB07C\uC6CC\uC9C0\uACE0 \uD0A4\uAC00 \uD68C\uC804\uC744 \uAD6C\uC18D\uD55C\uB2E4":"The hub (gear, pulley, coupling) slides on axially and the key locks rotation","\uB098\uC0AC {}. \uC0C1\uB300 \uC554\uB098\uC0AC(\uB108\uD2B8\xB7\uD0ED \uAD6C\uBA4D)\uC640 \uCCB4\uACB0":"Thread {}. Mates with a nut or tapped hole","ISO 4032 \uB108\uD2B8 \uADFC\uC0AC: \uB300\uBCC0 {n}, \uB192\uC774 {n}":"ISO 4032 nut approximation: {n} across flats, {n} high","1\uD68C\uC804\uB2F9 {n}mm \uC804\uC9C4(\uC624\uB978\uB098\uC0AC)":"Advances {n} mm per turn (right-hand)","\u2300{n} \uAD00\uD1B5 \uD6A1\uAD6C\uBA4D (x={n}). \uBD84\uD560\uD540\xB7\uC2A4\uD504\uB9C1\uD540\xB7\uD3C9\uD589\uD540 \uC790\uB9AC":"\u2300{n} through cross hole at x={n}. Seat for a split, spring or parallel pin","\u2300{n} \uAE4A\uC774 {n} \uD6A1\uAD6C\uBA4D (x={n}). \uBD84\uD560\uD540\xB7\uC2A4\uD504\uB9C1\uD540\xB7\uD3C9\uD589\uD540 \uC790\uB9AC":"\u2300{n} cross hole {n} deep at x={n}. Seat for a split, spring or parallel pin","\uAD00\uD1B5\uD540: \uBC18\uACBD \uBC29\uD5A5\uC73C\uB85C \uB123\uACE0 \uBC18\uB300\uD3B8\uC73C\uB85C \uBE60\uC9C4\uB2E4":"Through pin: goes in radially and out the other side","\uB9C9\uD78C \uAD6C\uBA4D: \uC138\uD2B8 \uC2A4\uD06C\uB8E8\xB7\uC704\uCE58 \uACB0\uC815 \uD540":"Blind hole: set screw or locating pin","\uB05D\uBA74 \uC721\uAC01 \uC18C\uCF13 S{n} \uAE4A\uC774 {n}. \uC721\uAC01 \uB80C\uCE58\uB85C \uC870\uC778\uB2E4":"Hex socket S{n}, {n} deep in the end face. Tightened with a hex key","\uB80C\uCE58\uB97C \uCD95\uBC29\uD5A5\uC73C\uB85C \uB123\uACE0 \uB3CC\uB9AC\uBA74 \uB098\uC0AC\uBD80\uAC00 \uC0C1\uB300 \uC554\uB098\uC0AC\uC5D0 \uCCB4\uACB0\uB41C\uB2E4":"Insert the key axially and turn; the thread screws into the mating female thread","\uC721\uAC01 \uB300\uBCC0 {n}. \uC2A4\uD328\uB108\uB85C \uC7A1\uC544 \uB3CC\uB9AC\uB294 \uBA74":"Hex {n} across flats. Gripped and turned with a spanner","\uC870\uB9BD \uC2DC \uD68C\uC804\uC744 \uB9C9\uAC70\uB098 \uC870\uC774\uB294 \uB370 \uC4F4\uB2E4":"Used to hold against rotation or to tighten during assembly","\uD3C9\uBA74(D\uCEF7) \uAE4A\uC774 {n}. \uC138\uD2B8 \uC2A4\uD06C\uB8E8\uAC00 \uB20C\uB7EC \uD68C\uC804\uC744 \uAD6C\uC18D\uD558\uAC70\uB098 \uC2A4\uD328\uB108 \uC790\uB9AC":"Flat (D-cut) {n} deep. A set screw presses on it, or it is a spanner flat","\uD3C9\uBA74(D\uCEF7) \uAE4A\uC774 {n} \xD7{n}. \uC138\uD2B8 \uC2A4\uD06C\uB8E8\uAC00 \uB20C\uB7EC \uD68C\uC804\uC744 \uAD6C\uC18D\uD558\uAC70\uB098 \uC2A4\uD328\uB108 \uC790\uB9AC":"Flats (D-cut) {n} deep \xD7{n}. A set screw presses on them, or they are spanner flats","\uBCF4\uC5B4 \u2300{n} \uAD00\uD1B5. \uC0C1\uB300 \uCD95\uC774 \uB4E4\uC5B4\uAC00\uB294 \uB07C\uC6CC\uB9DE\uCDA4":"Bore \u2300{n} through. Fit for the mating shaft","\uBCF4\uC5B4 \u2300{n} \uB9C9\uD798. \uC0C1\uB300 \uCD95\uC774 \uB4E4\uC5B4\uAC00\uB294 \uB07C\uC6CC\uB9DE\uCDA4":"Blind bore \u2300{n}. Fit for the mating shaft","\uBCF4\uC5B4 \u2300{n} {} \uAD00\uD1B5. \uC0C1\uB300 \uCD95\uC774 \uB4E4\uC5B4\uAC00\uB294 \uB07C\uC6CC\uB9DE\uCDA4":"Bore \u2300{n} {} through. Fit for the mating shaft","{} \uD5D0\uAC70\uC6B4/\uC911\uAC04 \uB07C\uC6CC\uB9DE\uCDA4. \uCD95\uBC29\uD5A5\uC73C\uB85C \uBC00\uC5B4 \uB123\uACE0 \uBE84 \uC218 \uC788\uB2E4":"{} clearance or transition fit. It slides in and out axially","\uACF5\uCC28 \uD45C\uAE30 \uC5C6\uC74C. \uB07C\uC6CC\uB9DE\uCDA4 \uB4F1\uAE09 \uBBF8\uC0C1":"No tolerance given, so the fit class is unknown","\uD14C\uC774\uD37C \u2300{n}\u2192\u2300{n} (\uAE30\uC6B8\uAE30 1:{n}). \uD14C\uC774\uD37C \uD5C8\uBE0C \uC555\uC785/\uC5B5\uC9C0 \uB07C\uC6C0":"Taper \u2300{n}\u2192\u2300{n} (1:{n}). Press fit for a tapered hub","\uC791\uC740 \uCABD\uC5D0\uC11C \uB07C\uC6CC \uCD95\uBC29\uD5A5\uC73C\uB85C \uC870\uC774\uBA74 \uB9C8\uCC30\uB85C \uD1A0\uD06C\uB97C \uC804\uB2EC\uD55C\uB2E4":"Pushed on from the small end and clamped axially, it transmits torque by friction","\u2300{n} \uBAB8\uD1B5. \uC694\uD06C(\uD074\uB808\uBE44\uC2A4) \uB450 \uADC0\uC758 \uAD6C\uBA4D\uC5D0 \uB07C\uC6CC\uC9C4\uB2E4":"\u2300{n} body. Fits through the holes in both ears of the yoke (clevis)","\u2300{n} {} \uBAB8\uD1B5. \uC694\uD06C(\uD074\uB808\uBE44\uC2A4) \uB450 \uADC0\uC758 \uAD6C\uBA4D\uC5D0 \uB07C\uC6CC\uC9C4\uB2E4":"\u2300{n} {} body. Fits through the holes in both ears of the yoke (clevis)","\uD540\uC740 \uCD95\uBC29\uD5A5\uC73C\uB85C \uB123\uACE0, \uBD84\uD560\uD540\xB7\uBA48\uCDA4\uB9C1\uC774 \uBE60\uC9D0\uC744 \uB9C9\uB294\uB2E4":"The pin goes in axially; a split pin or ring keeps it from backing out","\uB3C4\uBA74\uC5D0\uC11C \uC0C1\uB300 \uBD80\uD488\uACFC \uACB0\uD569\uD558\uB294 \uD45C\uAE30(\uBA48\uCDA4\uB9C1 \uD648\xB7\uD0A4\uD648\xB7\uB098\uC0AC\xB7\uBCF4\uC5B4\xB7\uD6A1\uAD6C\uBA4D)\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uB2E8\uD488 \uD68C\uC804\uB9CC \uBCF4\uC5EC \uC90D\uB2C8\uB2E4.":"No mating features (ring groove, keyway, thread, bore, cross hole) were found, so only the part's rotation is shown.",\uBD84\uD560\uD540:"Split pin",\uB108\uD2B8:"Nut","\uBCA0\uC5B4\uB9C1 \uC790\uB9AC \uAE38\uC774":"Bearing seat length","{n} / \uD3ED {n}":"{n} / width {n}","\uC790\uB9AC \uAE38\uC774\uAC00 \uBCA0\uC5B4\uB9C1 \uD3ED\uBCF4\uB2E4 \uC9E7\uC73C\uBA74 \uB0B4\uB95C\uC774 \uB2E8\uCC28\uC5D0 \uB2FF\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4(\uADFC\uC0AC \uACC4\uC5F4).":"If the seat is shorter than the bearing width, the inner race won't reach the shoulder.","\uBA48\uCDA4\uB9C1 \uBB3C\uB9BC \uAE4A\uC774":"Ring engagement depth","\uD648 \uAE4A\uC774 = (\uCD95 \u2300{n} \u2212 \uD648 \u2300{n})/2. {n}mm \uBBF8\uB9CC\uC774\uBA74 \uB9C1\uC774 \uBE60\uC9D1\uB2C8\uB2E4.":"Groove depth = (shaft \u2300{n} \u2212 groove \u2300{n})/2. Below {n} mm the ring can pop out.","\uD0A4 \uB3CC\uCD9C(\uD5C8\uBE0C \uCABD)":"Key protrusion (hub side)","\uD0A4 \uB192\uC774 {n} \u2212 \uCD95 \uD648 \uAE4A\uC774 {n}. \uD5C8\uBE0C \uD648\uC774 \uC774\uB9CC\uD07C \uBB3C\uB9BD\uB2C8\uB2E4.":"Key height {n} \u2212 shaft groove depth {n}. The hub slot engages by this much.","\uB108\uD2B8 \uCCB4\uACB0 \uD68C\uC804\uC218":"Nut turns to tighten","{n} \uD68C\uC804":"{n} turns","\uB098\uC0AC \uAE38\uC774 {n} \xF7 \uD53C\uCE58 {n}. \uB108\uD2B8 \uB192\uC774 {n}mm \uBCF4\uB2E4 \uC9E7\uC73C\uBA74 \uC644\uC804 \uCCB4\uACB0\uC774 \uC548 \uB429\uB2C8\uB2E4.":"Thread length {n} \xF7 pitch {n}. Shorter than the {n} mm nut height means it can't fully engage.","\uD540 \uC5EC\uC720":"Pin clearance","\uAD00\uD1B5\uD540. \uBC18\uB300\uD3B8\uC73C\uB85C \uBE60\uC9D1\uB2C8\uB2E4.":"Through pin. It exits the other side.","\uB9C9\uD78C \uAD6C\uBA4D \uAE4A\uC774 {n}":"Blind hole {n} deep","\uC678\uD615 \uD310\uB3C5":"Outline reading","\uBBF8\uB9AC \uD310\uB3C5\uD55C \uACB0\uACFC":"Pre-read result","AI \uD310\uB3C5 \xB7 \uC815\uBC00":"AI reading \xB7 careful","AI \uD310\uB3C5 \xB7 \uC790\uB3D9 \uC218\uC815":"AI reading \xB7 self-corrected","\uBBF8\uB9AC \uB9CC\uB4E0 \uD574\uC11D (\uB3C4\uBA74 \uBB38\uC790 \uC778\uC2DD + \uD310\uB3C5 \uC0AC\uC591 + \uC774\uBBF8\uC9C0) \xB7 \uC2E0\uB8B0\uB3C4 {n}%":"Pre-built analysis (text recognition, spec, image) \xB7 confidence {n}%","\uC9C0\uAE08 \uD574\uC11D (\uB3C4\uBA74 \uBB38\uC790 {n}\uAC1C + \uC0AC\uC591 + \uC774\uBBF8\uC9C0, {n}\uCD08) \xB7 \uC2E0\uB8B0\uB3C4 {n}%":"Analysed now ({n} text tokens, spec, image, {n}s) \xB7 confidence {n}%","\uBA48\uCDA4\uB9C1\uC744 \uBC8C\uB824 \uBE80\uB2E4 (x={n})":"Spread and remove the retaining ring (x={n})","\uB108\uD2B8\uB97C \uD47C\uB2E4 ({})":"Unscrew the nut ({})","\uD5C8\uBE0C\uB97C \uCD95\uBC29\uD5A5\uC73C\uB85C \uBE80 \uB4A4 \uD0A4\uB97C \uB4E4\uC5B4\uB0B8\uB2E4 (x={n})":"Slide the hub off axially, then lift out the key (x={n})","\uBCA0\uC5B4\uB9C1\uC744 \uCD95\uBC29\uD5A5\uC73C\uB85C \uBF51\uB294\uB2E4 (x={n})":"Draw the bearing off axially (x={n})","\uD558\uC6B0\uC9D5\uC5D0\uC11C \uBC00\uC5B4 \uBE80\uB2E4":"Push it out of the housing","\uC0C1\uB300 \uCD95\uC744 \uBE80\uB2E4":"Withdraw the mating shaft","\uACF5\uAD6C\uB97C \uBE80\uB2E4":"Remove the tool","\uC694\uD06C\uC5D0\uC11C \uD540\uC744 \uBE80\uB2E4":"Withdraw the pin from the yoke","\uBA48\uCDA4\uB9C1\uC744 \uBC8C\uB824 \uBC18\uACBD \uBC29\uD5A5\uC73C\uB85C \uBE7C\uB0B8\uB2E4 (x={n})":"Spread the retaining ring and lift it off radially (x={n})","\uD540\uC744 \uBC18\uACBD \uBC29\uD5A5\uC73C\uB85C \uBF51\uB294\uB2E4 (x={n})":"Pull the pin out radially (x={n})","\uB108\uD2B8\uB97C \uD480\uC5B4 \uC67C\uCABD \uB05D\uC73C\uB85C \uBE7C\uB0B8\uB2E4 ({}, 1\uD68C\uC804 {n}mm)":"Unscrew the nut off the left end ({}, {n} mm per turn)","\uB108\uD2B8\uB97C \uD480\uC5B4 \uC624\uB978\uCABD \uB05D\uC73C\uB85C \uBE7C\uB0B8\uB2E4 ({}, 1\uD68C\uC804 {n}mm)":"Unscrew the nut off the right end ({}, {n} mm per turn)","\uC721\uAC01 \uB80C\uCE58\uB97C \uC67C\uCABD \uB05D\uBA74\uC5D0\uC11C \uBE80\uB2E4":"Withdraw the hex key from the left end face","\uC721\uAC01 \uB80C\uCE58\uB97C \uC624\uB978\uCABD \uB05D\uBA74\uC5D0\uC11C \uBE80\uB2E4":"Withdraw the hex key from the right end face","\uC2A4\uD328\uB108\uB97C \uB193\uB294\uB2E4 (\uB300\uBCC0 {n})":"Release the spanner ({n} across flats)","\uBCA0\uC5B4\uB9C1\uC744 \uC67C\uCABD \uB05D \uBC29\uD5A5\uC73C\uB85C \uBF51\uB294\uB2E4 (\uB0B4\uACBD \u2300{n})":"Draw the bearing off towards the left end (bore \u2300{n})","\uBCA0\uC5B4\uB9C1\uC744 \uC624\uB978\uCABD \uB05D \uBC29\uD5A5\uC73C\uB85C \uBF51\uB294\uB2E4 (\uB0B4\uACBD \u2300{n})":"Draw the bearing off towards the right end (bore \u2300{n})","\uD5C8\uBE0C\uB97C \uCD95\uBC29\uD5A5\uC73C\uB85C \uBE7C\uACE0 \uD0A4\uB97C \uBC18\uACBD \uBC29\uD5A5\uC73C\uB85C \uB4E4\uC5B4\uB0B8\uB2E4":"Slide the hub off axially, then lift the key out radially","\uD14C\uC774\uD37C \uD5C8\uBE0C\uB97C \uD070 \uCABD\uC73C\uB85C \uBC00\uC5B4 \uBE80\uB2E4":"Push the tapered hub off towards the large end","\uC0C1\uB300 \uCD95\uC744 \uBCF4\uC5B4\uC5D0\uC11C \uBE80\uB2E4 (\u2300{n})":"Withdraw the mating shaft from the bore (\u2300{n})","\uC694\uD06C(\uD074\uB808\uBE44\uC2A4)\uC5D0\uC11C \uD540\uC744 \uBE80\uB2E4":"Withdraw the pin from the yoke (clevis)",\uBDF0:"View",\uAD6C\uBA4D:"Holes","\uC548\uCABD \uBAA8\uC11C\uB9AC":"inner edges",\uD06C\uAE30:"size",\uC640:"vs","\uC77D\uB294 \uC911\u2026":"Reading\u2026","\uC67C\uCABD \uBAA9\uB85D\uC774\uB098 \uB3C4\uBA74 \uC704 \uC0C1\uC790\uC5D0\uC11C \uBDF0\uB97C \uACE0\uB978 \uB4A4 \uBA74\uC744 \uB204\uB974\uC138\uC694.":"Pick a view from the list or the boxes on the drawing, then click a face.","\uD68C\uC804\uCCB4 \uC810\uC218":"Turned score","\uB3C4\uBA74\uC5D0\uC11C 3D":"Drawing to 3D","\uD68C\uC804\uCCB4 \uB3C4\uBA74\uC5D0\uC11C 3D CAD":"Turned drawing to 3D CAD","Part 2 \xB7 \uB2E4\uC2DC\uC810 \uB3C4\uBA74\uC5D0\uC11C \uBD80\uD488 \uD558\uB098":"Part 2 \xB7 one part from several views","2\uB2E8\uACC4 \xB7 \uD310\uB3C5":"Step 2 \xB7 Reading","3\uB2E8\uACC4 \xB7 3D CAD":"Step 3 \xB7 3D CAD","\uD310\uB3C5 \uACB0\uACFC":"As read","\uC815\uB2F5 \uC0AC\uC591":"Reference","\uBCF5\uC6D0 \uACB0\uACFC":"Rebuilt","\uB9CC\uB4E4\uC9C0 \uBABB\uD558\uB294 \uBD80\uB958":"Cannot be built","\uB2E4\uC2DC\uC810 \uB3C4\uBA74 \uB77C\uC774\uBE0C\uB7EC\uB9AC":"Multi-view drawing library","\uC67C\uCABD\uC774 \uC62C\uB9AC\uB294 \uB3C4\uBA74, \uC624\uB978\uCABD\uC774 \uADF8 \uB3C4\uBA74\uC5D0\uC11C \uB098\uC628 3D \uC785\uB2C8\uB2E4. \uCE74\uB4DC\uB97C \uB204\uB974\uBA74 \uC5F4\uB9BD\uB2C8\uB2E4.":"The drawing you would upload is on the left, the 3D that came out of it on the right. Click a card to open it.","\uC608\uC2DC \uB3C4\uBA74\uACFC \uACB0\uACFC":"Example drawings and results","\uD0C0\uACF5 \uD50C\uB808\uC774\uD2B8":"Drilled plate","\u3137 \uCC44\uB110 \uBE0C\uB798\uD0B7":"Channel bracket","\uCD95 \uC9C0\uC9C0 \uBE14\uB85D":"Shaft support block","\uBC11\uD310\uACFC \uC138\uC6C0\uD310, \uAD00\uD1B5 \uAD6C\uBA4D \uB458":"Base and upright, two through holes","\uBA74\uACFC \uB450\uAED8 \uB450 \uBDF0\uBA74 \uCDA9\uBD84\uD569\uB2C8\uB2E4":"A face view and a thickness view are enough","\uC548\uCABD\uC774 \uD30C\uC778 \uB2E8\uBA74":"A recessed section","\uC815\uBA74\uC5D0\uC11C \uBCF8 \uBCF4\uC5B4\uB294 \uADFC\uC0AC\uC785\uB2C8\uB2E4":"The bore seen face on is approximated","\uBC1C\uACFC \uBCF4\uC5B4, \uBC14\uB2E5 \uAD6C\uBA4D \uB137":"Foot, bore and four holes in the base","\uC2A4\uC715\uC774 \uD544\uC694\uD574 \uB9CC\uB4E4\uC9C0 \uBABB\uD569\uB2C8\uB2E4":"Needs a sweep, so it cannot be built","\uD5C8\uBE0C \uD50C\uB79C\uC9C0":"Hub flange",\uD3C9\uD589\uD540:"Parallel dowel pin","\uD14C\uC774\uD37C \uD540":"Taper pin","\uC204\uB354 \uBCFC\uD2B8 M8":"Shoulder bolt M8","\uB110\uB9C1 \uC190\uC7A1\uC774 \uB098\uC0AC":"Knurled thumb screw","\uD53C\uC2A4\uD1A4 \uB85C\uB4DC":"Piston rod","\uBC38\uBE0C \uC2A4\uD480":"Valve spool","\uC138\uD2B8 \uC2A4\uD06C\uB8E8 \uCE7C\uB77C":"Set screw collar","\uC815\uD22C\uC0C1 {n}\uBDF0":"{n} ortho views","\uD68C\uC804\uCCB4 \uB3C4\uBA74 \uB77C\uC774\uBE0C\uB7EC\uB9AC":"Turned-part drawing library",\uB77C\uC774\uBE0C\uB7EC\uB9AC:"Library",\uC124\uC815:"Setup",\uACB0\uACFC:"Result",\uC785\uB825:"Input"};var Im="vringon.lang",Ou=n=>/[가-힣]/.test(n),Du={ko:"\uD55C\uAD6D\uC5B4",en:"English"};function Fb(){let n=new URLSearchParams(location.search).get("lang");if(n&&Du[n])return n;try{let t=localStorage.getItem(Im);if(t&&Du[t])return t}catch{}return(navigator.language||"").toLowerCase().startsWith("ko")?"ko":"en"}var xi=Fb(),Ql=new Map,tc=[];function Ob(n){Ql.clear(),tc.length=0;for(let[t,e]of Object.entries(n)){if(!e)continue;if(!/\{n?\}/.test(t)){Ql.set(t,e);continue}let i=t.split(/(\{n\}|\{\})/),s="^",r=[];for(let o of i)o==="{n}"?(s+="(-?[\\d.,]+)",r.push("n")):o==="{}"?(s+="(.*?)",r.push("")):s+=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");s+="$",tc.push({re:new RegExp(s),en:e,holes:r})}}var Bb={...Rm};Ob(Bb);var Lm=new Set;typeof window<"u"&&(window.__i18nMissing=Lm);function _e(n,t){let e=String(n);if(t)for(let[l,c]of Object.entries(t))e=e.replaceAll(`{${l}}`,c);if(xi==="ko")return e;let i=Ql.get(e.trim());if(i!==void 0)return Pm(e,i);for(let l of tc){let c=l.re.exec(e.trim());if(!c)continue;let h=l.en,u=1;return h=h.replace(/\{n?\}/g,()=>c[u++]??""),Pm(e,h)}let s=[],r=/^([\s\u00b7\-]+)([\s\S]*)$/.exec(e);r&&s.push([r[1],r[2],""]);let o=/^(\s*\d+\.\s+)([\s\S]*)$/.exec(e);o&&s.push([o[1],o[2],""]);let a=/^([\s\u00b7\-]*)\(([\s\S]*)\)(\s*)$/.exec(e);a&&s.push([a[1]+"(",a[2],")"+a[3]]);for(let[l,c,h]of s){let u=Ql.get(c.trim());if(u!==void 0)return l+u+h;for(let f of tc){let d=f.re.exec(c.trim());if(!d)continue;let g=f.en,y=1;return g=g.replace(/\{n?\}/g,()=>d[y++]??""),l+g+h}}return Ou(e)&&Lm.add(e.trim()),e}function Pm(n,t){let e=/^\s*/.exec(n)[0],i=/\s*$/.exec(n)[0];return e+t+i}var Nm=["title","placeholder","aria-label"],kb=new Set(["SCRIPT","STYLE","CODE","PRE"]),Nu=new WeakMap;function Uu(n){let t=n.parentElement;if(!t||kb.has(t.tagName)||t.closest("[data-i18n-skip]"))return;let e=Nu.get(n)??n.nodeValue;if(!Ou(e))return;Nu.has(n)||Nu.set(n,e);let i=_e(e);n.nodeValue!==i&&(n.nodeValue=i)}function Fu(n){if(!n.closest?.("[data-i18n-skip]"))for(let t of Nm){if(!n.hasAttribute?.(t))continue;let e=`__i18n_${t}`,i=n.dataset[e]??n.getAttribute(t);if(!Ou(i))continue;n.dataset[e]===void 0&&(n.dataset[e]=i);let s=_e(i);n.getAttribute(t)!==s&&n.setAttribute(t,s)}}function Bu(n=document.body){if(!n)return;if(n.nodeType===3)return Uu(n);let t=document.createTreeWalker(n,NodeFilter.SHOW_TEXT),e=[];for(let i=t.nextNode();i;i=t.nextNode())e.push(i);e.forEach(Uu),n.nodeType===1&&Fu(n),n.querySelectorAll?.("[title],[placeholder],[aria-label]").forEach(Fu)}var jl=null;function Dm(){if(jl)return;jl=new MutationObserver(t=>{if(xi!=="ko"){jl.disconnect();for(let e of t)e.type==="characterData"?Uu(e.target):e.type==="attributes"?Fu(e.target):e.addedNodes.forEach(i=>{(i.nodeType===1||i.nodeType===3)&&Bu(i)});n()}}),n();function n(){jl.observe(document.body,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:Nm})}}function zb(n,{reload:t=!1}={}){if(!(!Du[n]||n===xi)){xi=n;try{localStorage.setItem(Im,n)}catch{}document.documentElement.lang=n;try{let e=new URL(location.href);e.searchParams.get("lang")&&e.searchParams.get("lang")!==n&&(e.searchParams.set("lang",n),history.replaceState(null,"",e.toString()))}catch{}if(t||n==="ko"){let e=new URL(location.href);e.searchParams.has("lang")&&e.searchParams.set("lang",n),location.replace(e.toString());return}Bu(document.body),Dm(),document.dispatchEvent(new CustomEvent("langchange",{detail:{lang:xi}}))}}function Vb(n=".ws-top, .nav"){let t=document.querySelector(n);if(!t)return;let e=document.createElement("div");e.className="seg lang-seg",e.setAttribute("data-i18n-skip",""),e.innerHTML='<button data-lang="ko">\uD55C\uAD6D\uC5B4</button><button data-lang="en">EN</button>';let i=t.querySelector(".sp");i&&i.nextSibling?t.insertBefore(e,i.nextSibling):t.appendChild(e);let s=()=>e.querySelectorAll("button").forEach(r=>r.classList.toggle("on",r.dataset.lang===xi));e.onclick=r=>{let o=r.target.closest("button");o&&(zb(o.dataset.lang),s())},s()}function Um({toggle:n=!0}={}){if(document.documentElement.lang=xi,xi!=="ko"&&document.title.includes("|")){let[t,...e]=document.title.split("|");document.title=t+"| "+_e(e.join("|").trim())}n&&Vb(),xi!=="ko"&&(Bu(document.body),Dm())}var Hb="(max-width: 1023px)";function Fm({body:n="wsBody",leftKo:t="\uB3C4\uBA74",rightKo:e="\uACB0\uACFC"}={}){let i=document.getElementById(n);if(!i||document.querySelector(".pane-tabs"))return null;let s=window.matchMedia(Hb),r=[{id:"left",ko:t},{id:"stage",ko:"3D"},{id:"right",ko:e}],o=document.createElement("nav");o.className="pane-tabs",o.setAttribute("data-i18n-skip",""),o.innerHTML=r.map((h,u)=>`<button data-pane="${h.id}"><span class="k">${u+1}</span>${_e(h.ko)}</button>`).join(""),i.parentNode.appendChild(o);let a="left",l=h=>{a=h,i.classList.remove("only-left","only-stage","only-right"),s.matches&&i.classList.add(`only-${h}`);for(let u of o.children){let f=u.dataset.pane===h;u.classList.toggle("on",f),f&&u.classList.remove("ready")}setTimeout(()=>window.dispatchEvent(new Event("resize")),0)},c=(h,u=!0)=>{let f=o.querySelector(`[data-pane="${h}"]`);f&&h!==a&&f.classList.toggle("ready",u)};return o.onclick=h=>{let u=h.target.closest("button");u&&l(u.dataset.pane)},l("left"),s.addEventListener?.("change",()=>{s.matches?l(a):i.classList.remove("only-left","only-stage","only-right")}),{show:l,ready:c,narrow:()=>s.matches,get current(){return a}}}var{createWorker:$b}=Gb,$u=null,fs=n=>_e(Mp[n]||n||""),nc="5ba68b77",at=n=>document.getElementById(n),Mo=n=>new Promise(t=>setTimeout(t,n)),ec=(n,t=1)=>Number.isFinite(n)?(Math.round(n*10**t)/10**t).toString():"\u2014";function wn(n,t=!1){let e=document.createElement("div");e.className=`toast${t?" ok":""}`,e.textContent=n,at("toasts").appendChild(e),setTimeout(()=>e.remove(),4200)}var ic=[{id:"bracket",name:"L \uBE0C\uB798\uD0B7 3\uBA74\uB3C4",file:"assets/part2/bracket.svg",result:"assets/part2/bracket-result.webp",level:1,views:3,note:"\uBC11\uD310\uACFC \uC138\uC6C0\uD310, \uAD00\uD1B5 \uAD6C\uBA4D \uB458"},{id:"plate",name:"\uD0C0\uACF5 \uD50C\uB808\uC774\uD2B8",file:"assets/part2/plate.svg",result:"assets/part2/plate-result.webp",level:1,views:2,note:"\uBA74\uACFC \uB450\uAED8 \uB450 \uBDF0\uBA74 \uCDA9\uBD84\uD569\uB2C8\uB2E4"},{id:"channel",name:"\u3137 \uCC44\uB110 \uBE0C\uB798\uD0B7",file:"assets/part2/channel.svg",result:"assets/part2/channel-result.webp",level:1,views:3,note:"\uC548\uCABD\uC774 \uD30C\uC778 \uB2E8\uBA74"},{id:"housing",name:"\uBCA0\uC5B4\uB9C1 \uD558\uC6B0\uC9D5",file:"assets/part2/housing.svg",result:"assets/part2/housing-result.webp",level:2,views:3,note:"\uC815\uBA74\uC5D0\uC11C \uBCF8 \uBCF4\uC5B4\uB294 \uADFC\uC0AC\uC785\uB2C8\uB2E4"},{id:"block",name:"\uCD95 \uC9C0\uC9C0 \uBE14\uB85D",file:"assets/part2/block.svg",result:"assets/part2/block-result.webp",level:2,views:3,note:"\uBC1C\uACFC \uBCF4\uC5B4, \uBC14\uB2E5 \uAD6C\uBA4D \uB137"},{id:"elbow",name:"\uC0AC\uAC01 \uD50C\uB79C\uC9C0 \uACE1\uAD00",file:"assets/part2/elbow.svg",result:null,level:3,views:2,note:"\uC2A4\uC715\uC774 \uD544\uC694\uD574 \uB9CC\uB4E4\uC9C0 \uBABB\uD569\uB2C8\uB2E4"}],ir={1:{cls:"l1",ko:"1\uB2E8\uACC4 \xB7 \uAC01\uAE30\uB465",note:"\uC815\uD655\uD788 \uB098\uC635\uB2C8\uB2E4."},2:{cls:"l2",ko:"2\uB2E8\uACC4 \xB7 \uC6D0\uD1B5 \uADFC\uC0AC",note:"\uC548\uCABD \uD615\uC0C1\uC740 \uADFC\uC0AC\uC785\uB2C8\uB2E4."},3:{cls:"l3",ko:"3\uB2E8\uACC4 \xB7 \uACE1\uBA74",note:"\uB9CC\uB4E4\uC9C0 \uBABB\uD558\uB294 \uBD80\uB958\uC785\uB2C8\uB2E4."}},ct={image:null,raster:null,png:null,views:[],pick:null,roles:{},projection:"third",ocr:null,tokens:[],scale:null,mmPerPx:0,part:null,name:"",sample:null,showDims:!1},sc=at("stage"),Tn=new Pl({antialias:!0});Tn.setPixelRatio(Math.min(devicePixelRatio,2));Tn.outputColorSpace=Ie;Tn.toneMapping=Zr;Tn.toneMappingExposure=1.45;Tn.shadowMap.enabled=!0;Tn.shadowMap.type=Oa;sc.appendChild(Tn.domElement);var ps=new Hn;ps.background=new Bt(789520);ps.environment=new Qs(Tn).fromScene(new Ul,.04).texture;var Un=new He(38,1,.5,12e3);Un.position.set(180,140,240);var So=new Dl(Un,Tn.domElement);So.enableDamping=!0;So.dampingFactor=.075;var En=new Ws(16777215,2.3);En.position.set(220,400,260);En.castShadow=!0;En.shadow.mapSize.set(2048,2048);En.shadow.camera.near=20;En.shadow.camera.far=2200;En.shadow.camera.left=En.shadow.camera.bottom=-500;En.shadow.camera.right=En.shadow.camera.top=500;En.shadow.bias=-.0012;En.shadow.normalBias=.7;ps.add(En,new Ws(13161215,.5).translateX(-320).translateY(180).translateZ(140),new Hr(12897501,3816776,1.05),new Wr(16777215,.25));var Wu=new Xr(2400,60,2763316,1710624);Wu.material.transparent=!0;Wu.material.opacity=.5;ps.add(Wu);var Bm=new ae(new Pr(1200,64).rotateX(-Math.PI/2),new kr({opacity:.4}));Bm.receiveShadow=!0;ps.add(Bm);var on=new je;ps.add(on);var ku=Ip();function Xu(){let n=sc.clientWidth,t=sc.clientHeight;!n||!t||(Tn.setSize(n,t),Un.aspect=n/t,Un.updateProjectionMatrix())}new ResizeObserver(Xu).observe(sc);Xu();Tn.setAnimationLoop(()=>{So.update(),Tn.render(ps,Un)});function km(){if(!on.children.length)return;let n=new Ye().setFromObject(on),t=n.getCenter(new I),e=Math.max(10,n.getSize(new I).length()/2);So.target.copy(t);let i=li.degToRad(Un.fov/2),s=Math.atan(Math.tan(i)*Math.max(.6,Un.aspect));Un.position.copy(t).add(new I(.5,.45,.75).normalize().multiplyScalar(e/Math.sin(Math.min(i,s))*1.15)),Un.near=Math.max(.2,e/80),Un.far=e*90,Un.updateProjectionMatrix(),So.update()}at("btnFit").onclick=km;function zm(){for(let n of on.children.slice())on.remove(n),n.geometry?.dispose();ct.part=null}function wo(n){at("sheet").classList.toggle("show",n),at("btnSheet").classList.toggle("on",n)}at("btnSheet").onclick=()=>wo(!at("sheet").classList.contains("show"));at("btnDims").onclick=()=>{ct.showDims=!ct.showDims,at("btnDims").classList.toggle("on",ct.showDims),rc(),wo(!0)};async function Wb(n,t){let e=new Image;await new Promise((h,u)=>{e.onload=h,e.onerror=()=>u(new Error("\uC774\uBBF8\uC9C0\uB97C \uC5F4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4")),e.src=n});let i=e.naturalWidth||e.width,s=e.naturalHeight||e.height,r=t?Math.min(2.6,Math.max(1,2400/Math.max(1,i))):Math.min(1.6,2400/Math.max(1,i)),o=Math.max(500,Math.round(i*r)),a=Math.max(300,Math.round(s*r)),l=document.createElement("canvas");l.width=o,l.height=a;let c=l.getContext("2d",{willReadFrequently:!0});return c.fillStyle="#fff",c.fillRect(0,0,o,a),c.drawImage(e,0,0,o,a),{imageData:c.getImageData(0,0,o,a),w:o,h:a,png:l.toDataURL("image/png")}}var Xb=n=>"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n);async function Hu(n){Xm(!1);let t=n.svg?Xb(n.svg):n.dataUrl,e;try{e=await Wb(t,!!n.svg)}catch(i){return wn(`\uB3C4\uBA74\uC744 \uC5F4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: ${i.message}`)}ct.image={url:e.png,w:e.w,h:e.h},ct.raster=e.imageData,ct.png=e.png,ct.name=n.name,ct.sample=n.sample||null,at("projName").textContent=n.name,at("sheetImg").src=e.png,at("stageEmpty").style.display="none",wo(!0),await qb(),await Gm(),$u?.ready("right",!0)}async function qb(){let n=[{text:"\uC678\uD615\uC120\uB9CC \uB0A8\uAE30\uACE0 \uC131\uBD84 \uCC3E\uAE30",state:"run"},{text:"\uAC00\uAE4C\uC6B4 \uC131\uBD84\uC744 \uBDF0\uB85C \uBB36\uAE30"},{text:"\uC724\uACFD \xB7 \uAD6C\uBA4D \uB530\uAE30, \uBC30\uCE58\uB85C \uBC29\uD5A5 \uCD94\uCC9C"}];xn(!0,"\uBDF0 \uB098\uB204\uAE30","",n),await Mo(60);let t=hp(ct.raster);if(!t.ok){xn(!1),wn(t.reason||"\uBDF0\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4");return}ct.views=t.views.map(e=>Object.assign(e,{contours:fp(e)})),ct.roles=Kh(ct.views,ct.projection),n.forEach(e=>e.state="done"),xn(!0,"\uBDF0 \uB098\uB204\uAE30","",n),await Mo(100),xn(!1),at("viewBlock").style.display="",at("methodBlock").style.display="",Vm(),rc(),oc(),sr(),Yu(ct.views.find(e=>ct.roles[e.id]==="front")||ct.views[0]),wn(`\uBDF0 ${ct.views.length}\uAC1C. \uBC29\uD5A5\uC744 \uD655\uC778\uD558\uC138\uC694`,!0)}at("projSeg").onclick=n=>{let t=n.target.closest("button");t&&(document.querySelectorAll("#projSeg button").forEach(e=>e.classList.toggle("on",e===t)),ct.projection=t.dataset.p,ct.roles=Kh(ct.views,ct.projection),qu())};function Vm(){at("viewCount").textContent=`${ct.views.length}\uAC1C`,at("viewList").innerHTML=ct.views.map(n=>`
    <div class="vrow ${ct.pick===n?"on":""}" data-v="${n.id}">
      <span class="n">${n.id}</span>
      <span class="m">${n.part.W}\xD7${n.part.H} px<br/><small>${_e("\uAD6C\uBA4D")} ${n.contours.holes.length}${n.contours.ignored.length?` \xB7 ${_e("\uC548\uCABD \uBAA8\uC11C\uB9AC")} ${n.contours.ignored.length}`:""} \xB7 ${_e("\uD68C\uC804\uCCB4 \uC810\uC218")} ${n.revolveScore.toFixed(2)}</small></span>
      <select data-role="${n.id}">${ho.map(t=>`<option value="${t.id}" ${ct.roles[n.id]===t.id?"selected":""}>${_e(t.ko)}</option>`).join("")}</select>
    </div>`).join("")}at("viewList").addEventListener("click",n=>{if(n.target.tagName==="SELECT")return;let t=n.target.closest("[data-v]");t&&Yu(ct.views.find(e=>e.id===Number(t.dataset.v)))});at("viewList").addEventListener("change",n=>{let t=n.target;t.dataset.role&&Gu(Number(t.dataset.role),t.value)});function Gu(n,t){if(hi(t))for(let e of Object.keys(ct.roles))Number(e)!==n&&ct.roles[e]===t&&(ct.roles[e]="skip");ct.roles[n]=t,qu()}function qu(){Vm(),rc(),oc(),sr()}function Yu(n){ct.pick=n||null,at("pickTag").textContent=n?`${_e("\uBDF0")} ${n.id}`:_e("\uBDF0 \uC5C6\uC74C"),qu()}function rc(){let n=at("ov");if(!ct.image)return;let{w:t,h:e}=ct.image;n.setAttribute("viewBox",`0 0 ${t} ${e}`),n.setAttribute("preserveAspectRatio","none");let i=ct.views.map(s=>{let r=ct.roles[s.id],o=!hi(r);return`<rect class="vbox ${ct.pick===s?"on":""} ${o?"ref":""}" data-v="${s.id}" x="${s.part.x0-8}" y="${s.part.y0-8}" width="${s.part.W+16}" height="${s.part.H+16}" rx="6"/>
      <text class="vlab" x="${s.part.x0-2}" y="${s.part.y0-14}">${s.id}</text><text class="vlab role" x="${s.part.x0+16}" y="${s.part.y0-14}">${fs(r)}</text>`}).join("");if(ct.showDims&&ct.scale){let s=new Set((ct.scale.used||[]).map(r=>r.text));i+=ct.tokens.map(r=>`<rect class="dimtok ${s.has(r.text)?"used":""}" x="${r.x0-2}" y="${r.y0-2}" width="${r.x1-r.x0+4}" height="${r.y1-r.y0+4}" rx="3"/>`).join("")}n.innerHTML=i,n.querySelectorAll(".vbox").forEach(s=>s.onclick=()=>Yu(ct.views.find(r=>r.id===Number(s.dataset.v))))}var Om=[{id:"top",pts:"75,12 138,42 75,72 12,42",tx:75,ty:46},{id:"front",pts:"12,42 75,72 75,132 12,102",tx:43,ty:92},{id:"right",pts:"75,72 138,42 138,102 75,132",tx:107,ty:92}];function oc(){let n=new Map(Object.entries(ct.roles).map(([e,i])=>[i,Number(e)])),t=ct.pick?ct.roles[ct.pick.id]:null;at("cube").innerHTML=Om.map(e=>{let i=n.get(e.id);return`<polygon class="f ${i?"assigned":"free"} ${t===e.id?"on":""}" data-face="${e.id}" points="${e.pts}" stroke="#0C0C10" stroke-width="1.5"/>
      <text x="${e.tx}" y="${e.ty}">${fs(e.id)}${i?` \xB7 ${_e("\uBDF0")} ${i}`:""}</text>`}).join(""),at("cube").querySelectorAll(".f").forEach(e=>e.onclick=()=>{if(!ct.pick)return wn("\uBA3C\uC800 \uBDF0\uB97C \uACE0\uB974\uC138\uC694");Gu(ct.pick.id,e.dataset.face)}),at("roleBtns").innerHTML=ho.filter(e=>!Om.some(i=>i.id===e.id)).map(e=>{let i=n.get(e.id);return`<button data-role="${e.id}" class="${t===e.id?"on":""}">${_e(e.ko)}${i&&hi(e.id)?` \xB7 ${_e("\uBDF0")} ${i}`:""}</button>`}).join(""),at("roleBtns").querySelectorAll("button").forEach(e=>e.onclick=()=>{if(!ct.pick)return wn("\uBA3C\uC800 \uBDF0\uB97C \uACE0\uB974\uC138\uC694");Gu(ct.pick.id,e.dataset.role)}),at("cubeHint").innerHTML=ct.pick?`<b>${_e("\uBDF0")} ${ct.pick.id}</b>: <b>${fs(ct.roles[ct.pick.id])}</b>`:"\uC67C\uCABD \uBAA9\uB85D\uC774\uB098 \uB3C4\uBA74 \uC704 \uC0C1\uC790\uC5D0\uC11C \uBDF0\uB97C \uACE0\uB978 \uB4A4 \uBA74\uC744 \uB204\uB974\uC138\uC694."}var zu=null;async function Hm(){return zu||(at("ocrTag").textContent="\uBB38\uC790 \uC778\uC2DD \uBD88\uB7EC\uC624\uB294 \uC911\u2026",zu=pp({workerPath:"./vendor/tesseract/worker.min.js",corePath:"./vendor/tesseract/",langPath:"./vendor/tesseract"},$b).then(n=>(at("ocrTag").textContent="\uBB38\uC790 \uC778\uC2DD \uC900\uBE44\uB428",n)).catch(n=>{throw at("ocrTag").textContent="\uBB38\uC790 \uC778\uC2DD \uC5C6\uC74C",n})),zu}async function Gm(){if(!ct.raster)return;at("dimBlock").style.display="",at("dimTag").textContent="\uC77D\uB294 \uC911\u2026",at("dimList").innerHTML="",at("dimNote").textContent="";let n;try{n=await Hm()}catch(o){return Vu(`\uBB38\uC790 \uC778\uC2DD \uC5D4\uC9C4\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4 (${o.message}).`)}let t=performance.now();try{ct.tokens=await mp(n,ct.png),ct.scale=gp(ct.tokens,ct.raster)}catch(o){return Vu(`\uCE58\uC218\uB97C \uC77D\uB294 \uC911 \uC624\uB958: ${o.message}`)}let e=ct.scale,i=Math.round(performance.now()-t);at("dimTag").textContent=`${ct.tokens.length}\uAC1C \uC77D\uC74C \xB7 ${(i/1e3).toFixed(1)}\uCD08`;let s=new Set((e.used||[]).map(o=>o.text)),r=new Set((e.rejected||[]).map(o=>o.text));at("dimList").innerHTML=ct.tokens.map(o=>`<span class="${s.has(o.text)?"used":r.has(o.text)?"rej":""}" title="${o.kind}">${o.text}</span>`).join(""),e.ok?(ct.mmPerPx=e.mmPerPx,at("dimScale").textContent=`1 px = ${e.mmPerPx.toFixed(4)} mm`,at("dimAgree").textContent=`${e.agree} / ${e.total}`,at("dimNote").innerHTML=e.agree<3?"\uB9DE\uB294 \uCE58\uC218\uAC00 \uC801\uC2B5\uB2C8\uB2E4. \uC544\uB294 \uCE58\uC218 \uD558\uB098\uB97C \uB123\uC5B4 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":"\uC5EC\uB7EC \uCE58\uC218\uAC00 \uAC19\uC740 \uCD95\uCC99\uC744 \uAC00\uB9AC\uD0B5\uB2C8\uB2E4.",at("dimManual").style.display=e.agree<3?"":"none"):Vu(e.reason||"\uCE58\uC218\uB97C \uC77D\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4."),rc(),sr()}function Vu(n){ct.mmPerPx=0,ct.scale=ct.scale&&ct.scale.ok?ct.scale:{ok:!1,used:[],rejected:[]},at("dimTag").textContent="\uC77D\uC9C0 \uBABB\uD568",at("dimScale").textContent="\u2014",at("dimAgree").textContent="\u2014",at("dimNote").innerHTML=`${n} \uACE0\uB978 \uBDF0\uC758 \uAC00\uB85C \uC2E4\uC81C \uAE38\uC774\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694.`,at("dimManual").style.display="",sr()}at("btnReadDims").onclick=Gm;at("manualLen").onchange=()=>{let n=Number(at("manualLen").value),t=ct.pick;!n||!t||(ct.mmPerPx=n/t.part.W,at("dimScale").textContent=`1 px = ${ct.mmPerPx.toFixed(4)} mm (\uBDF0 ${t.id} \uAC00\uB85C ${n} mm \uC785\uB825)`,sr(),wn("\uC785\uB825\uD55C \uCE58\uC218\uB85C \uCD95\uCC99\uC744 \uC815\uD588\uC2B5\uB2C8\uB2E4",!0))};var Yb=()=>document.querySelector("#methodSeg button.on")?.dataset.m||"auto";at("methodSeg").onclick=n=>{let t=n.target.closest("button");t&&(document.querySelectorAll("#methodSeg button").forEach(e=>e.classList.toggle("on",e===t)),sr())};function $m(){return ct.views.map(n=>({view:n,role:ct.roles[n.id]||"skip"}))}function Wm(){let n=Yb();return n!=="auto"?{method:n,why:"\uC9C1\uC811 \uACE0\uB984"}:Tp($m())}function sr(){let n=Wm();at("methodWhy").textContent=n.why,at("thickRow").style.display=n.method==="plate"?"":"none";let t=ct.sample?.level;at("levelNote").innerHTML=t?`<span class="lvl ${ir[t].cls}">${ir[t].ko}</span> ${ir[t].note}`:"";let e=n.method!=="none"&&n.method!=="unsupported"&&ct.mmPerPx>0;at("btnMake").disabled=!e,at("btnMake").textContent=n.method==="unsupported"?"\uC774 \uBD80\uB958\uB294 \uB9CC\uB4E4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4":ct.mmPerPx?"\uBD80\uD488 \uB9CC\uB4E4\uAE30":"\uBA3C\uC800 \uCE58\uC218\uB97C \uC815\uD574 \uC8FC\uC138\uC694"}at("btnMake").onclick=async()=>{let n=Wm();if(!ct.mmPerPx)return;let t=[{text:"\uBDF0\uB9C8\uB2E4 \uC724\uACFD\uC744 \uADF8 \uBC29\uD5A5\uC73C\uB85C \uBC00\uC5B4\uB0B4\uAE30",state:"run"},{text:"\uC804\uBD80 \uAD50\uC9D1\uD569\uD558\uAE30"},{text:"\uAC01 \uBDF0\uB85C \uB2E4\uC2DC \uD22C\uC601\uD574 \uB3C4\uBA74\uACFC \uB300\uC870"}];xn(!0,"\uBD80\uD488 \uB9CC\uB4E4\uAE30","",t),await Mo(60),zm();let e=null,i=null,s=ct.mmPerPx,r=$m();if(n.method==="ortho"){let a=Sp(r,s,{});if(!a.ok)return xn(!1),wn(a.reason);t[0].state=t[1].state="done",t[2].state="run",xn(!0,"\uBD80\uD488 \uB9CC\uB4E4\uAE30","",t),await Mo(30);let l=r.filter(c=>hi(c.role)).map(c=>({...wp(a.geometry,c.view,c.role,s,a.ext),viewId:c.view.id}));a.geometry.center(),e=new ae(a.geometry,ku.plate.clone()),i={kind:"ortho",size:a.size,volume:a.volume_cm3,ious:l,checks:a.checks,notes:a.notes}}else if(n.method==="revolve"){let a=r.find(f=>hi(f.role));if(!a)return xn(!1),wn("\uD68C\uC804\uCCB4\uB85C \uBCFC \uBDF0\uB97C \uC815\uD574 \uC8FC\uC138\uC694");let l=up(a.view,420),c=Float64Array.from(l,f=>f*s);e=Lp(c,a.view.part.W*s,{material:ku.revolve.clone()});let h=new Ye().setFromObject(e),u=h.getSize(new I);i={kind:"revolve",size:{X:u.x,Y:u.y,Z:u.z},volume:Hl(e.geometry)/1e3,ious:[],checks:[],notes:["\uBDF0 \uD558\uB098\uB97C \uCD95 \uB458\uB808\uB85C \uB3CC\uB838\uC2B5\uB2C8\uB2E4"]}}else if(n.method==="plate"){let a=r.find(d=>hi(d.role));if(!a)return xn(!1),wn("\uD310\uC73C\uB85C \uBCFC \uBDF0\uB97C \uC815\uD574 \uC8FC\uC138\uC694");let l=Math.max(.2,Number(at("thick").value)||10),c=a.view.contours.outer.map(([d,g])=>[d*s,g*s]),h=a.view.contours.holes.map(d=>d.map(([g,y])=>[g*s,y*s]));if(e=Np(c,h,l,{material:ku.plate.clone()}),!e)return xn(!1),wn("\uC724\uACFD\uC73C\uB85C \uD615\uC0C1\uC744 \uB9CC\uB4E4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4");let u=new Ye().setFromObject(e),f=u.getSize(new I);i={kind:"plate",size:{X:f.x,Y:f.y,Z:f.z},volume:Hl(e.geometry)/1e3,ious:[],checks:[],notes:[`\uB450\uAED8 ${l} mm \uB294 \uC785\uB825\uAC12\uC785\uB2C8\uB2E4`]}}else{xn(!1);return}e.castShadow=e.receiveShadow=!0;let o=new Ye().setFromObject(e);e.position.y-=o.min.y,on.add(e),ct.part={mesh:e,result:i},$u?.show("stage"),t.forEach(a=>a.state="done"),xn(!0,"\uBD80\uD488 \uB9CC\uB4E4\uAE30","",t),await Mo(120),xn(!1),wo(!1),km(),Zb(),Kb(),wn("\uBD80\uD488\uC744 \uB9CC\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4",!0)};function Zb(){let n=ct.part;if(!n)return at("resultBlock").style.display="none";let t=n.result;at("resultBlock").style.display="";let e=ct.sample?.level||(t.kind==="ortho"?1:2);at("lvlTag").className=`lvl ${ir[e].cls}`,at("lvlTag").textContent=ir[e].ko,at("rSize").textContent=`${ec(t.size.X)} \xD7 ${ec(t.size.Y)} \xD7 ${ec(t.size.Z)} mm`,at("rVol").textContent=`${ec(t.volume,1)} cm\xB3`,at("rTris").textContent=`${(n.mesh.geometry.attributes.position.count/3).toLocaleString()}\uAC1C`;let i=t.ious.map(r=>{let o=r.iou*100,a=o>=95?"ok":o>=85?"warn":"bad";return`<div class="r"><span>${fs(r.role)}</span><b class="${a}">${o.toFixed(1)}%</b></div>`});for(let r of t.checks)i.push(`<div class="r"><span>${r.axis} ${_e("\uD06C\uAE30")} \xB7 ${fs(r.a.role)} ${_e("\uC640")} ${fs(r.b.role)}</span><b class="${r.ok?"ok":"warn"}">\uCC28\uC774 ${r.diffPct}%</b></div>`);at("rChecks").innerHTML=i.join("")||'<div class="mini">\uB300\uC870\uD560 \uC815\uD22C\uC0C1 \uBDF0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</div>';let s=t.ious.filter(r=>r.iou<.9);at("rNote").innerHTML=(t.notes||[]).concat(s.length?[_e("{} \uC815\uD569\uC774 \uB0AE\uC2B5\uB2C8\uB2E4. \uBC29\uD5A5\uACFC \uAD6C\uBA4D\uC744 \uD655\uC778\uD558\uC138\uC694.",{"":s.map(r=>fs(r.role)).join(", ")})]:[]).join("<br/>")}function Kb(){if(!ct.part)return at("exportBlock").style.display="none";at("exportBlock").style.display="";let n=(ct.name||"part").replace(/\.[^.]+$/,"").replace(/[^A-Za-z0-9_-]+/g,"_")||"part",t=(s,r,o)=>{let a=document.createElement("div");return a.className="exp",a.innerHTML=`<span class="f">${s}</span><span class="n">${r}</span><button title="\uB0B4\uB824\uBC1B\uAE30"><svg><use href="#i-dl"/></svg></button>`,a.querySelector("button").onclick=o,a},e=at("dlList");e.innerHTML="";let i={part2:!0,sheet:ct.name,mm_per_px:ct.mmPerPx,roles:Object.fromEntries(ct.views.map(s=>[s.id,ct.roles[s.id]])),result:ct.part.result};e.appendChild(t("STEP\xB7\uBA74","\uC0BC\uAC01\uD615 \uBA74 \uC178 (\uAD50\uC9D1\uD569 \uACB0\uACFC\uB294 \uC194\uB9AC\uB4DC\uB85C \uB2EB\uD788\uC9C0 \uC54A\uC74C)",()=>Yn(mm(on,n),`${n}.step`,"application/step"))),e.appendChild(t("STL","3D \uD504\uB9B0\uD305",()=>Yn(xm(on),`${n}.stl`,"model/stl"))),e.appendChild(t("GLB","\uC7AC\uC9C8 \uD3EC\uD568 \xB7 \uC6F9 \uBDF0\uC5B4",async()=>Yn(await ym(on),`${n}.glb`,"model/gltf-binary"))),e.appendChild(t("OBJ","\uBA54\uC2DC (mm)",()=>Yn(gm(on),`${n}.obj`,"text/plain"))),e.appendChild(t("FBX","Maya, 3ds Max, Unity, Unreal",()=>Yn(Cu(on),`${n}.fbx`,"application/octet-stream"))),e.appendChild(t("USD","\uBA54\uC2DC\uC640 \uBDF0\xB7\uCE58\uC218 \uC815\uBCF4\uB97C \uD568\uAED8",()=>Yn(bm(on,i),`${n}.usda`,"text/plain"))),e.appendChild(t("USDZ","AR \uBBF8\uB9AC\uBCF4\uAE30 \uD328\uD0A4\uC9C0",async()=>Yn(await Mm(on),`${n}.usdz`,"model/vnd.usdz+zip"))),e.appendChild(t("PLY","\uC815\uC810\uACFC \uBA74",()=>Yn(vm(on),`${n}.ply`,"text/plain"))),e.appendChild(t("JSON","\uBDF0 \uBC29\uD5A5 \xB7 \uCD95\uCC99 \xB7 \uACB0\uACFC",()=>Yn(new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),`${n}.part2.json`))),at("exportNote").textContent=""}function xn(n,t,e,i){at("gen").classList.toggle("on",n),t&&(at("genTitle").textContent=t),e!==void 0&&(at("genSub").textContent=e),at("genBar").style.width=`${(i||[]).filter(s=>s.state==="done").length/Math.max(1,(i||[]).length)*100}%`,at("genSteps").innerHTML=(i||[]).map(s=>`<div class="gen-step ${s.state||""}"><span class="dot"></span>${s.text}</div>`).join("")}function Xm(n=!0){zm(),ct.views=[],ct.pick=null,ct.roles={},ct.tokens=[],ct.scale=null,ct.mmPerPx=0,ct.sample=null;for(let t of["viewBlock","dimBlock","methodBlock","resultBlock","exportBlock"])at(t).style.display="none";at("ov").innerHTML="",at("manualLen").value="",at("dimManual").style.display="none",oc(),at("pickTag").textContent="\uBDF0 \uC5C6\uC74C",n&&(ct.image=null,ct.raster=null,at("projName").textContent="\uC0C8 \uB3C4\uBA74",wo(!1),at("stageEmpty").style.display="")}at("btnNew").onclick=()=>{Xm(!0),wn("\uCC98\uC74C\uC73C\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4")};var ds=at("drop"),bo=at("file"),qm="vringon.part2.check.v2";function Ym(){at("checkModal").classList.add("show")}function Zm(n){if(at("checkModal").classList.remove("show"),at("chkSkip").checked)try{localStorage.setItem(qm,"1")}catch{}n&&bo.click()}at("btnPickFile").onclick=()=>Zm(!0);at("checkModal").onclick=n=>{n.target===at("checkModal")&&Zm(!1)};at("linkCheck").onclick=n=>{n.preventDefault(),Ym()};ds.onclick=()=>{let n=!1;try{n=localStorage.getItem(qm)==="1"}catch{}n?bo.click():Ym()};bo.onchange=async()=>{let n=bo.files[0];n&&await Km(n),bo.value=""};ds.ondragover=n=>{n.preventDefault(),ds.classList.add("over")};ds.ondragleave=()=>ds.classList.remove("over");ds.ondrop=async n=>{n.preventDefault(),ds.classList.remove("over");let t=n.dataTransfer.files?.[0];t&&await Km(t)};async function Km(n){if(/svg/i.test(n.type)||/\.svg$/i.test(n.name))return Hu({name:n.name,svg:await n.text()});let e=await new Promise((i,s)=>{let r=new FileReader;r.onload=()=>i(r.result),r.onerror=s,r.readAsDataURL(n)});return Hu({name:n.name,dataUrl:e})}at("chips").innerHTML=ic.map(n=>`<button class="sample" data-id="${n.id}" title="${n.name}"><img class="thumb" src="./${n.file}?v=${nc}" alt="" loading="lazy" style="background:#fff" /><span class="lb">${n.name}</span></button>`).join("");async function Jm(n){let t=ic.find(i=>i.id===n);if(!t)return;let e=await fetch(`./${t.file}?v=${nc}`).then(i=>i.text());await Hu({name:t.name,svg:e,sample:t})}at("chips").onclick=n=>{let t=n.target.closest(".sample");t&&Jm(t.dataset.id)};function Jb(){at("libCount").textContent=`${ic.length}`,at("libGrid").innerHTML=ic.map(n=>{let t=ir[n.level],e=n.result?`<figure><img src="./${n.result}?v=${nc}" alt="" loading="lazy" /><figcaption>${_e("\uBCF5\uC6D0 \uACB0\uACFC")}</figcaption></figure>`:`<figure class="none"><span>${_e("\uB9CC\uB4E4\uC9C0 \uBABB\uD558\uB294 \uBD80\uB958")}</span></figure>`;return`<button class="item" data-id="${n.id}">
      <div class="pair"><figure><img src="./${n.file}?v=${nc}" alt="" loading="lazy" /><figcaption>${_e("\uB3C4\uBA74")}</figcaption></figure>${e}</div>
      <div class="meta"><div class="t">${_e(n.name)}</div>
      <div class="d">${_e("\uC815\uD22C\uC0C1 {n}\uBDF0",{n:n.views})} \xB7 ${_e(t.ko)} \xB7 ${_e(n.note)}</div></div>
    </button>`}).join("")}at("libGrid").onclick=n=>{let t=n.target.closest(".item");t&&(Zu(),Jm(t.dataset.id))};function jb(){at("lib").style.display="",at("wsBody").style.display="none",Jb()}function Zu(){at("lib").style.display="none",at("wsBody").style.display="",Xu()}at("btnLib").onclick=()=>at("lib").style.display==="none"?jb():Zu();at("btnLibClose").onclick=Zu;oc();Um();$u=Fm({leftKo:"\uB3C4\uBA74",rightKo:"\uC124\uC815"});Cm("part2");Hm().catch(()=>{});
