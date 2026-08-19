var Di={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ui={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kf=0,Zc=1,zf=2;var Yr=1,Oa=2,qs=3,ti=0,Vt=1,tn=2,Gn=0,Ji=1,Kc=2,Jc=3,jc=4,Vf=5;var Ci=100,Hf=101,Gf=102,$f=103,Wf=104,Xf=200,qf=201,Yf=202,Zf=203,Qo=204,ea=205,Kf=206,Jf=207,jf=208,Qf=209,ed=210,td=211,nd=212,id=213,sd=214,ta=0,na=1,ia=2,ji=3,sa=4,ra=5,oa=6,aa=7,Ba=0,rd=1,od=2,Nn=0,Qc=1,eh=2,th=3,Zr=4,nh=5,ih=6,sh=7;var rh=300,Fi=301,is=302,ka=303,za=304,Kr=306,Ls=1e3,Mn=1001,Ns=1002,Lt=1003,Va=1004;var ss=1005;var Dt=1006,Ys=1007;var $n=1008;var nn=1009,oh=1010,ah=1011,Zs=1012,Ha=1013,Dn=1014,Sn=1015,Wn=1016,Ga=1017,$a=1018,Ks=1020,lh=35902,ch=35899,hh=1021,uh=1022,sn=1023,zn=1026,Oi=1027,Wa=1028,Xa=1029,Bi=1030,qa=1031;var Ya=1033,Jr=33776,jr=33777,Qr=33778,eo=33779,Za=35840,Ka=35841,Ja=35842,ja=35843,Qa=36196,el=37492,tl=37496,nl=37488,il=37489,to=37490,sl=37491,rl=37808,ol=37809,al=37810,ll=37811,cl=37812,hl=37813,ul=37814,fl=37815,dl=37816,pl=37817,ml=37818,gl=37819,xl=37820,yl=37821,_l=36492,vl=36494,Ml=36495,bl=36283,Sl=36284,no=36285,wl=36286;var Qi=2300,Ds=2301,jo=2302,Uc=2303,Fc=2400,Oc=2401,Bc=2402;var ad=3200;var io=0,ld=1,pn="",It="srgb",xr="srgb-linear",yr="linear",ft="srgb";var Yi=7680;var kc=519,cd=512,hd=513,ud=514,Tl=515,fd=516,dd=517,El=518,pd=519,zc=35044;var fh="300 es",Pn=2e3,Us=2001;function og(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ag(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function _r(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function md(){let n=_r("canvas");return n.style.display="block",n}var of={},Fs=null;function dh(...n){let e="THREE."+n.shift();Fs?Fs("log",e,...n):console.log(e,...n)}function gd(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function He(...n){n=gd(n);let e="THREE."+n.shift();if(Fs)Fs("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ye(...n){n=gd(n);let e="THREE."+n.shift();if(Fs)Fs("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ki(...n){let e=n.join(" ");e in of||(of[e]=!0,He(...n))}function xd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var yd={[ta]:na,[ia]:oa,[sa]:aa,[ji]:ra,[na]:ta,[oa]:ia,[aa]:sa,[ra]:ji},In=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],af=1234567,dr=Math.PI/180,Os=180/Math.PI;function rs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function ph(n,e){return(n%e+e)%e}function lg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function cg(n,e,t){return n!==e?(t-n)/(e-n):0}function pr(n,e,t){return(1-t)*n+t*e}function hg(n,e,t,i){return pr(n,e,1-Math.exp(-t*i))}function ug(n,e=1){return e-Math.abs(ph(n,e*2)-e)}function fg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function dg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function pg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function mg(n,e){return n+Math.random()*(e-n)}function gg(n){return n*(.5-Math.random())}function xg(n){n!==void 0&&(af=n);let e=af+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yg(n){return n*dr}function _g(n){return n*Os}function vg(n){return(n&n-1)===0&&n!==0}function Mg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function bg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Sg(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*h,a*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ps(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var li={DEG2RAD:dr,RAD2DEG:Os,generateUUID:rs,clamp:Qe,euclideanModulo:ph,mapLinear:lg,inverseLerp:cg,lerp:pr,damp:hg,pingpong:ug,smoothstep:fg,smootherstep:dg,randInt:pg,randFloat:mg,randFloatSpread:gg,seededRandom:xg,degToRad:yg,radToDeg:_g,isPowerOfTwo:vg,ceilPowerOfTwo:Mg,floorPowerOfTwo:bg,setQuaternionFromProperEuler:Sg,normalize:Jt,denormalize:Ps},he=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(u!==y||l!==f||c!==d||h!==g){let p=l*f+c*d+h*g+u*y;p<0&&(f=-f,d=-d,g=-g,y=-y,p=-p);let m=1-a;if(p<.9995){let T=Math.acos(p),w=Math.sin(T);m=Math.sin(m*T)/w,a=Math.sin(a*T)/w,l=l*m+f*a,c=c*m+d*a,h=h*m+g*a,u=u*m+y*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+g*a,u=u*m+y*a;let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-a*d,e[t+2]=c*g+h*d+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cc.copy(this).projectOnVector(e),this.sub(cc)}reflect(e){return this.sub(cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},cc=new I,lf=new Qt,Xe=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],y=s[0],p=s[3],m=s[6],T=s[1],w=s[4],_=s[7],v=s[2],S=s[5],b=s[8];return r[0]=o*y+a*T+l*v,r[3]=o*p+a*w+l*S,r[6]=o*m+a*_+l*b,r[1]=c*y+h*T+u*v,r[4]=c*p+h*w+u*S,r[7]=c*m+h*_+u*b,r[2]=f*y+d*T+g*v,r[5]=f*p+d*w+g*S,r[8]=f*m+d*_+g*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=t*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*c-h*i)*y,e[2]=(a*i-s*o)*y,e[3]=f*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=d*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ki("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hc.makeScale(e,t)),this}rotate(e){return Ki("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hc.makeRotation(-e)),this}translate(e,t){return Ki("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},hc=new Xe,cf=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hf=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wg(){let n={enabled:!0,workingColorSpace:xr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ft&&(s.r=ei(s.r),s.g=ei(s.g),s.b=ei(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pn?yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ki("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ki("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[xr]:{primaries:e,whitePoint:i,transfer:yr,toXYZ:cf,fromXYZ:hf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:cf,fromXYZ:hf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),n}var nt=wg();function ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var xs,Bs=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{xs===void 0&&(xs=_r("canvas")),xs.width=e.width,xs.height=e.height;let s=xs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=xs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_r("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ei(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ei(t[i]/255)*255):t[i]=ei(t[i]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Tg=0,ni=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=rs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(uc(s[o].image)):r.push(uc(s[o]))}else r=uc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function uc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bs.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var Eg=0,fc=new I,en=class n extends In{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Mn,s=Mn,r=Dt,o=$n,a=sn,l=nn,c=n.DEFAULT_ANISOTROPY,h=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=rs(),this.name="",this.source=new ni(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fc).x}get height(){return this.source.getSize(fc).y}get depth(){return this.source.getSize(fc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ls:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case Ns:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ls:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case Ns:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=rh;en.DEFAULT_ANISOTROPY=1;var bt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,_=(d+1)/2,v=(m+1)/2,S=(h+f)/4,b=(u+y)/4,x=(g+p)/4;return w>_&&w>v?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=S/i,r=b/i):_>v?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=S/s,r=x/s):v<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),i=b/r,s=x/r),this.set(i,s,r,t),this}let T=Math.sqrt((p-g)*(p-g)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(u-y)/T,this.z=(f-h)/T,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},la=class extends In{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new en(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ni(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends la{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},vr=class extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ca=class extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ht=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,h,u,f,d,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,d,g,y,p)}set(e,t,i,s,r,o,a,l,c,h,u,f,d,g,y,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/ys.setFromMatrixColumn(e,0).length(),r=1/ys.setFromMatrixColumn(e,1).length(),o=1/ys.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,g=a*h,y=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-y*c,t[9]=-a*l,t[2]=y-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,y=c*u;t[0]=f+y*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=y+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,y=c*u;t[0]=f-y*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=y-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,g=a*h,y=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+y,t[1]=l*u,t[5]=y*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=y-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-y*u}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+y,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=y*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ag,e,Cg)}lookAt(e,t,i){let s=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Mi.crossVectors(i,ln),Mi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Mi.crossVectors(i,ln)),Mi.normalize(),Ao.crossVectors(ln,Mi),s[0]=Mi.x,s[4]=Ao.x,s[8]=ln.x,s[1]=Mi.y,s[5]=Ao.y,s[9]=ln.y,s[2]=Mi.z,s[6]=Ao.z,s[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],y=i[6],p=i[10],m=i[14],T=i[3],w=i[7],_=i[11],v=i[15],S=s[0],b=s[4],x=s[8],A=s[12],R=s[1],P=s[5],L=s[9],k=s[13],z=s[2],N=s[6],V=s[10],F=s[14],X=s[3],J=s[7],le=s[11],re=s[15];return r[0]=o*S+a*R+l*z+c*X,r[4]=o*b+a*P+l*N+c*J,r[8]=o*x+a*L+l*V+c*le,r[12]=o*A+a*k+l*F+c*re,r[1]=h*S+u*R+f*z+d*X,r[5]=h*b+u*P+f*N+d*J,r[9]=h*x+u*L+f*V+d*le,r[13]=h*A+u*k+f*F+d*re,r[2]=g*S+y*R+p*z+m*X,r[6]=g*b+y*P+p*N+m*J,r[10]=g*x+y*L+p*V+m*le,r[14]=g*A+y*k+p*F+m*re,r[3]=T*S+w*R+_*z+v*X,r[7]=T*b+w*P+_*N+v*J,r[11]=T*x+w*L+_*V+v*le,r[15]=T*A+w*k+_*F+v*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],y=e[7],p=e[11],m=e[15],T=l*d-c*f,w=a*d-c*u,_=a*f-l*u,v=o*d-c*h,S=o*f-l*h,b=o*u-a*h;return t*(y*T-p*w+m*_)-i*(g*T-p*v+m*S)+s*(g*w-y*v+m*b)-r*(g*_-y*S+p*b)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],y=e[13],p=e[14],m=e[15],T=t*a-i*o,w=t*l-s*o,_=t*c-r*o,v=i*l-s*a,S=i*c-r*a,b=s*c-r*l,x=h*y-u*g,A=h*p-f*g,R=h*m-d*g,P=u*p-f*y,L=u*m-d*y,k=f*m-d*p,z=T*k-w*L+_*P+v*R-S*A+b*x;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/z;return e[0]=(a*k-l*L+c*P)*N,e[1]=(s*L-i*k-r*P)*N,e[2]=(y*b-p*S+m*v)*N,e[3]=(f*S-u*b-d*v)*N,e[4]=(l*R-o*k-c*A)*N,e[5]=(t*k-s*R+r*A)*N,e[6]=(p*_-g*b-m*w)*N,e[7]=(h*b-f*_+d*w)*N,e[8]=(o*L-a*R+c*x)*N,e[9]=(i*R-t*L-r*x)*N,e[10]=(g*S-y*_+m*T)*N,e[11]=(u*_-h*S-d*T)*N,e[12]=(a*A-o*P-l*x)*N,e[13]=(t*P-i*A+s*x)*N,e[14]=(y*w-g*v-p*T)*N,e[15]=(h*v-u*w+f*T)*N,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,y=o*h,p=o*u,m=a*u,T=l*c,w=l*h,_=l*u,v=i.x,S=i.y,b=i.z;return s[0]=(1-(y+m))*v,s[1]=(d+_)*v,s[2]=(g-w)*v,s[3]=0,s[4]=(d-_)*S,s[5]=(1-(f+m))*S,s[6]=(p+T)*S,s[7]=0,s[8]=(g+w)*b,s[9]=(p-T)*b,s[10]=(1-(f+y))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=ys.set(s[0],s[1],s[2]).length(),a=ys.set(s[4],s[5],s[6]).length(),l=ys.set(s[8],s[9],s[10]).length();r<0&&(o=-o),An.copy(this);let c=1/o,h=1/a,u=1/l;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,t.setFromRotationMatrix(An),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Pn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s),g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===Pn)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Us)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Pn,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s),g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===Pn)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===Us)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ys=new I,An=new ht,Ag=new I(0,0,0),Cg=new I(1,1,1),Mi=new I,Ao=new I,ln=new I,uf=new ht,ff=new Qt,Vn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return uf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ff.setFromEuler(this),this.setFromQuaternion(ff,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var Mr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Rg=0,df=new I,_s=new Qt,Zn=new ht,Co=new I,rr=new I,Pg=new I,Ig=new Qt,pf=new I(1,0,0),mf=new I(0,1,0),gf=new I(0,0,1),xf={type:"added"},Lg={type:"removed"},vs={type:"childadded",child:null},dc={type:"childremoved",child:null},Ut=class n extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new Vn,i=new Qt,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Xe}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(pf,e)}rotateY(e){return this.rotateOnAxis(mf,e)}rotateZ(e){return this.rotateOnAxis(gf,e)}translateOnAxis(e,t){return df.copy(e).applyQuaternion(this.quaternion),this.position.add(df.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pf,e)}translateY(e){return this.translateOnAxis(mf,e)}translateZ(e){return this.translateOnAxis(gf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Co.copy(e):Co.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(rr,Co,this.up):Zn.lookAt(Co,rr,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(Zn),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xf),vs.child=e,this.dispatchEvent(vs),vs.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lg),dc.child=e,this.dispatchEvent(dc),dc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xf),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,Pg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Ig,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ut.DEFAULT_UP=new I(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jt=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ng={type:"move"},ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,i),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ng)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new jt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},_d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function pc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=ph(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=pc(o,r,e+1/3),this.g=pc(o,r,e),this.b=pc(o,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=It){function i(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let i=_d[e.toLowerCase()];return i!==void 0?this.setHex(i,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return nt.workingToColorSpace(qt.copy(this),e),Math.round(Qe(qt.r*255,0,255))*65536+Math.round(Qe(qt.g*255,0,255))*256+Math.round(Qe(qt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(qt.copy(this),t);let i=qt.r,s=qt.g,r=qt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=It){nt.workingToColorSpace(qt.copy(this),e);let t=qt.r,i=qt.g,s=qt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(Ro);let i=pr(bi.h,Ro.h,t),s=pr(bi.s,Ro.s,t),r=pr(bi.l,Ro.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new Be;Be.NAMES=_d;var Hn=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Cn=new I,Kn=new I,mc=new I,Jn=new I,Ms=new I,bs=new I,yf=new I,gc=new I,xc=new I,yc=new I,_c=new bt,vc=new bt,Mc=new bt,Ai=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Cn.subVectors(e,t),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Cn.subVectors(s,t),Kn.subVectors(i,t),mc.subVectors(e,t);let o=Cn.dot(Cn),a=Cn.dot(Kn),l=Cn.dot(mc),c=Kn.dot(Kn),h=Kn.dot(mc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return _c.setScalar(0),vc.setScalar(0),Mc.setScalar(0),_c.fromBufferAttribute(e,t),vc.fromBufferAttribute(e,i),Mc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(_c,r.x),o.addScaledVector(vc,r.y),o.addScaledVector(Mc,r.z),o}static isFrontFacing(e,t,i,s){return Cn.subVectors(i,t),Kn.subVectors(e,t),Cn.cross(Kn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Cn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Ms.subVectors(s,i),bs.subVectors(r,i),gc.subVectors(e,i);let l=Ms.dot(gc),c=bs.dot(gc);if(l<=0&&c<=0)return t.copy(i);xc.subVectors(e,s);let h=Ms.dot(xc),u=bs.dot(xc);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Ms,o);yc.subVectors(e,r);let d=Ms.dot(yc),g=bs.dot(yc);if(g>=0&&d<=g)return t.copy(r);let y=d*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(bs,a);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return yf.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(yf,a);let m=1/(p+y+f);return o=y*m,a=f*m,t.copy(i).addScaledVector(Ms,o).addScaledVector(bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yt=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Po.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Po.copy(i.boundingBox)),Po.applyMatrix4(e.matrixWorld),this.union(Po)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),Io.subVectors(this.max,or),Ss.subVectors(e.a,or),ws.subVectors(e.b,or),Ts.subVectors(e.c,or),Si.subVectors(ws,Ss),wi.subVectors(Ts,ws),$i.subVectors(Ss,Ts);let t=[0,-Si.z,Si.y,0,-wi.z,wi.y,0,-$i.z,$i.y,Si.z,0,-Si.x,wi.z,0,-wi.x,$i.z,0,-$i.x,-Si.y,Si.x,0,-wi.y,wi.x,0,-$i.y,$i.x,0];return!bc(t,Ss,ws,Ts,Io)||(t=[1,0,0,0,1,0,0,0,1],!bc(t,Ss,ws,Ts,Io))?!1:(Lo.crossVectors(Si,wi),t=[Lo.x,Lo.y,Lo.z],bc(t,Ss,ws,Ts,Io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},jn=[new I,new I,new I,new I,new I,new I,new I,new I],Rn=new I,Po=new Yt,Ss=new I,ws=new I,Ts=new I,Si=new I,wi=new I,$i=new I,or=new I,Io=new I,Lo=new I,Wi=new I;function bc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Wi.fromArray(n,r);let a=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),l=e.dot(Wi),c=t.dot(Wi),h=i.dot(Wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Pt=new I,No=new he,Dg=0,Tt=class extends In{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=zc,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)No.fromBufferAttribute(this,t),No.applyMatrix3(e),this.setXY(t,No.x,No.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ps(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ps(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ps(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ps(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ps(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var br=class extends Tt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Sr=class extends Tt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var yt=class extends Tt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Ug=new Yt,ar=new I,Sc=new I,ii=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ug.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);let t=ar.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ar,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(Sc)),this.expandByPoint(ar.copy(e.center).sub(Sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Fg=0,_n=new ht,wc=new Ut,Es=new I,cn=new Yt,lr=new Yt,zt=new I,Ft=class n extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(og(e)?Sr:br)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Xe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,i){return _n.makeTranslation(e,t,i),this.applyMatrix4(_n),this}scale(e,t,i){return _n.makeScale(e,t,i),this.applyMatrix4(_n),this}lookAt(e){return wc.lookAt(e),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];lr.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(cn.min,lr.min),cn.expandByPoint(zt),zt.addVectors(cn.max,lr.max),cn.expandByPoint(zt)):(cn.expandByPoint(lr.min),cn.expandByPoint(lr.max))}cn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)zt.fromBufferAttribute(a,c),l&&(Es.fromBufferAttribute(e,c),zt.add(Es)),s=Math.max(s,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Tt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new I,l[x]=new I;let c=new I,h=new I,u=new I,f=new he,d=new he,g=new he,y=new I,p=new I;function m(x,A,R){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,A),u.fromBufferAttribute(i,R),f.fromBufferAttribute(r,x),d.fromBufferAttribute(r,A),g.fromBufferAttribute(r,R),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),a[x].add(y),a[A].add(y),a[R].add(y),l[x].add(p),l[A].add(p),l[R].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let x=0,A=T.length;x<A;++x){let R=T[x],P=R.start,L=R.count;for(let k=P,z=P+L;k<z;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let w=new I,_=new I,v=new I,S=new I;function b(x){v.fromBufferAttribute(s,x),S.copy(v);let A=a[x];w.copy(A),w.sub(v.multiplyScalar(v.dot(A))).normalize(),_.crossVectors(S,A);let P=_.dot(l[x])<0?-1:1;o.setXYZW(x,w.x,w.y,w.z,P)}for(let x=0,A=T.length;x<A;++x){let R=T[x],P=R.start,L=R.count;for(let k=P,z=P+L;k<z;k+=3)b(e.getX(k+0)),b(e.getX(k+1)),b(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),y=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new Tt(f,h,u)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Og=0,Ln=class extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=Ji,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=ea,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(i.blending=this.blending),this.side!==ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qo&&(i.blendSrc=this.blendSrc),this.blendDst!==ea&&(i.blendDst=this.blendDst),this.blendEquation!==Ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new he().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Qn=new I,Tc=new I,Do=new I,Ti=new I,Ec=new I,Uo=new I,Ac=new I,es=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Tc.copy(e).add(t).multiplyScalar(.5),Do.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(Tc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Do),a=Ti.dot(this.direction),l=-Ti.dot(Do),c=Ti.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let y=1/h;u*=y,f*=y,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Tc).addScaledVector(Do,f),d}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);let i=Qn.dot(this.direction),s=Qn.dot(Qn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,i,s,r){Ec.subVectors(t,e),Uo.subVectors(i,e),Ac.crossVectors(Ec,Uo);let o=this.direction.dot(Ac),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,e);let l=a*this.direction.dot(Uo.crossVectors(Ti,Uo));if(l<0)return null;let c=a*this.direction.dot(Ec.cross(Ti));if(c<0||l+c>o)return null;let h=-a*Ti.dot(Ac);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zs=class extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_f=new ht,Xi=new es,Fo=new ii,vf=new I,Oo=new I,Bo=new I,ko=new I,Cc=new I,zo=new I,Mf=new I,Vo=new I,at=class extends Ut{constructor(e=new Ft,t=new zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Cc.fromBufferAttribute(u,e),o?zo.addScaledVector(Cc,h):zo.addScaledVector(Cc.sub(t),h))}t.add(zo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(r),Xi.copy(e.ray).recast(e.near),!(Fo.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(Fo,vf)===null||Xi.origin.distanceToSquared(vf)>(e.far-e.near)**2))&&(_f.copy(r).invert(),Xi.copy(e.ray).applyMatrix4(_f),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xi)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=o[p.materialIndex],T=Math.max(p.start,d.start),w=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let _=T,v=w;_<v;_+=3){let S=a.getX(_),b=a.getX(_+1),x=a.getX(_+2);s=Ho(this,m,e,i,c,h,u,S,b,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let T=a.getX(p),w=a.getX(p+1),_=a.getX(p+2);s=Ho(this,o,e,i,c,h,u,T,w,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],m=o[p.materialIndex],T=Math.max(p.start,d.start),w=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let _=T,v=w;_<v;_+=3){let S=_,b=_+1,x=_+2;s=Ho(this,m,e,i,c,h,u,S,b,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let T=p,w=p+1,_=p+2;s=Ho(this,o,e,i,c,h,u,T,w,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Bg(n,e,t,i,s,r,o,a){let l;if(e.side===Vt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ti,a),l===null)return null;Vo.copy(a),Vo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Vo);return c<t.near||c>t.far?null:{distance:c,point:Vo.clone(),object:n}}function Ho(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Oo),n.getVertexPosition(l,Bo),n.getVertexPosition(c,ko);let h=Bg(n,e,t,i,Oo,Bo,ko,Mf);if(h){let u=new I;Ai.getBarycoord(Mf,Oo,Bo,ko,u),s&&(h.uv=Ai.getInterpolatedAttribute(s,a,l,c,u,new he)),r&&(h.uv1=Ai.getInterpolatedAttribute(r,a,l,c,u,new he)),o&&(h.normal=Ai.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new I,materialIndex:0};Ai.getNormal(Oo,Bo,ko,f.normal),h.face=f,h.barycoord=u}return h}var wr=class extends en{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Lt,h=Lt,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tr=class extends Tt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},As=new ht,bf=new ht,Go=[],Sf=new Yt,kg=new ht,cr=new at,hr=new ii,Er=class extends at{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,kg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,As),Sf.copy(e.boundingBox).applyMatrix4(As),this.boundingBox.union(Sf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,As),hr.copy(e.boundingSphere).applyMatrix4(As),this.boundingSphere.union(hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(i),e.ray.intersectsSphere(hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,As),bf.multiplyMatrices(i,As),cr.matrixWorld=bf,cr.raycast(e,Go);for(let o=0,a=Go.length;o<a;o++){let l=Go[o];l.instanceId=r,l.object=this,t.push(l)}Go.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new wr(new Float32Array(s*this.count),s,this.count,Wa,Sn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Rc=new I,zg=new I,Vg=new Xe,vn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Rc.subVectors(i,t).cross(zg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Rc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Vg.getNormalMatrix(e),s=this.coplanarPoint(Rc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qi=new ii,Hg=new he(.5,.5),$o=new I,Vs=class{constructor(e=new vn,t=new vn,i=new vn,s=new vn,r=new vn,o=new vn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],y=r[9],p=r[10],m=r[11],T=r[12],w=r[13],_=r[14],v=r[15];if(s[0].setComponents(c-o,d-h,m-g,v-T).normalize(),s[1].setComponents(c+o,d+h,m+g,v+T).normalize(),s[2].setComponents(c+a,d+u,m+y,v+w).normalize(),s[3].setComponents(c-a,d-u,m-y,v-w).normalize(),i)s[4].setComponents(l,f,p,_).normalize(),s[5].setComponents(c-l,d-f,m-p,v-_).normalize();else if(s[4].setComponents(c-l,d-f,m-p,v-_).normalize(),t===Pn)s[5].setComponents(c+l,d+f,m+p,v+_).normalize();else if(t===Us)s[5].setComponents(l,f,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){qi.center.set(0,0,0);let t=Hg.distanceTo(e.center);return qi.radius=.7071067811865476+t,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if($o.x=s.normal.x>0?e.max.x:e.min.x,$o.y=s.normal.y>0?e.max.y:e.min.y,$o.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($o)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ar=class extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ha=new I,ua=new I,wf=new ht,ur=new es,Wo=new ii,Pc=new I,Tf=new I,fa=class extends Ut{constructor(e=new Ft,t=new Ar){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ha.fromBufferAttribute(t,s-1),ua.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ha.distanceTo(ua);e.setAttribute("lineDistance",new yt(i,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wo.copy(i.boundingSphere),Wo.applyMatrix4(s),Wo.radius+=r,e.ray.intersectsSphere(Wo)===!1)return;wf.copy(s).invert(),ur.copy(e.ray).applyMatrix4(wf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=d,p=g-1;y<p;y+=c){let m=h.getX(y),T=h.getX(y+1),w=Xo(this,e,ur,l,m,T,y);w&&t.push(w)}if(this.isLineLoop){let y=h.getX(g-1),p=h.getX(d),m=Xo(this,e,ur,l,y,p,g-1);m&&t.push(m)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let y=d,p=g-1;y<p;y+=c){let m=Xo(this,e,ur,l,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){let y=Xo(this,e,ur,l,g-1,d,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xo(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(ha.fromBufferAttribute(a,s),ua.fromBufferAttribute(a,r),t.distanceSqToSegment(ha,ua,Pc,Tf)>i)return;Pc.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Pc);if(!(c<e.near||c>e.far))return{distance:c,point:Tf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Ef=new I,Af=new I,da=class extends fa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Ef.fromBufferAttribute(t,s),Af.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ef.distanceTo(Af);e.setAttribute("lineDistance",new yt(i,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ri=class extends en{constructor(e,t,i,s,r,o,a,l,c,h,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};var Cr=class extends en{constructor(e=[],t=Fi,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var si=class extends en{constructor(e,t,i=Dn,s,r,o,a=Lt,l=Lt,c,h=zn,u=1){if(h!==zn&&h!==Oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ni(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},pa=class extends si{constructor(e,t=Dn,i=Fi,s,r,o=Lt,a=Lt,l,c=zn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Rr=class extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ri=class n extends Ft{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(u,2));function g(y,p,m,T,w,_,v,S,b,x,A){let R=_/b,P=v/x,L=_/2,k=v/2,z=S/2,N=b+1,V=x+1,F=0,X=0,J=new I;for(let le=0;le<V;le++){let re=le*P-k;for(let ne=0;ne<N;ne++){let fe=ne*R-L;J[y]=fe*T,J[p]=re*w,J[m]=z,c.push(J.x,J.y,J.z),J[y]=0,J[p]=0,J[m]=S>0?1:-1,h.push(J.x,J.y,J.z),u.push(ne/b),u.push(1-le/x),F+=1}}for(let le=0;le<x;le++)for(let re=0;re<b;re++){let ne=f+re+N*le,fe=f+re+N*(le+1),ue=f+(re+1)+N*(le+1),pe=f+(re+1)+N*le;l.push(ne,fe,pe),l.push(fe,ue,pe),X+=6}a.addGroup(d,X,A),d+=X,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Pr=class n extends Ft{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new I,h=new he;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=i+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(a,3)),this.setAttribute("uv",new yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new he:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new I,s=[],r=[],o=[],a=new I,l=new ht;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Qe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Qe(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Hs=class extends un{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new he){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ma=class extends Hs{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function mh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Cf=new I,Rf=new I,Ic=new mh,Lc=new mh,Nc=new mh,ga=class extends un{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Rf.subVectors(s[0],s[1]).add(s[0]),c=Rf);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Cf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Cf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),y=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),Ic.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,y,p),Lc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,y,p),Nc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(Ic.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Lc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Nc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Ic.calc(l),Lc.calc(l),Nc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Pf(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Gg(n,e){let t=1-n;return t*t*e}function $g(n,e){return 2*(1-n)*n*e}function Wg(n,e){return n*n*e}function mr(n,e,t,i){return Gg(n,e)+$g(n,t)+Wg(n,i)}function Xg(n,e){let t=1-n;return t*t*t*e}function qg(n,e){let t=1-n;return 3*t*t*n*e}function Yg(n,e){return 3*(1-n)*n*n*e}function Zg(n,e){return n*n*n*e}function gr(n,e,t,i,s){return Xg(n,e)+qg(n,t)+Yg(n,i)+Zg(n,s)}var Ir=class extends un{constructor(e=new he,t=new he,i=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new he){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(gr(e,s.x,r.x,o.x,a.x),gr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xa=class extends un{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(gr(e,s.x,r.x,o.x,a.x),gr(e,s.y,r.y,o.y,a.y),gr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lr=class extends un{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ya=class extends un{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nr=class extends un{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(mr(e,s.x,r.x,o.x),mr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_a=class extends un{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(mr(e,s.x,r.x,o.x),mr(e,s.y,r.y,o.y),mr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dr=class extends un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Pf(a,l.x,c.x,h.x,u.x),Pf(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},Vc=Object.freeze({__proto__:null,ArcCurve:ma,CatmullRomCurve3:ga,CubicBezierCurve:Ir,CubicBezierCurve3:xa,EllipseCurve:Hs,LineCurve:Lr,LineCurve3:ya,QuadraticBezierCurve:Nr,QuadraticBezierCurve3:_a,SplineCurve:Dr}),va=class extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Vc[s.type]().fromJSON(s))}return this}},oi=class extends va{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Lr(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Nr(this.currentPoint.clone(),new he(e,t),new he(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Ir(this.currentPoint.clone(),new he(e,t),new he(i,s),new he(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Dr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Hs(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ai=class extends oi{constructor(e){super(e),this.uuid=rs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new oi().fromJSON(s))}return this}};function Kg(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=vd(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=t0(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,u=l;for(let f=t;f<s;f+=t){let d=n[f],g=n[f+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ur(r,o,t,a,l,c,0),o}function vd(n,e,t,i,s){let r;if(s===f0(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=If(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=If(o/i|0,n[o],n[o+1],r);return r&&Gs(r,r.next)&&(Or(r),r=r.next),r}function ts(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Gs(t,t.next)||wt(t.prev,t,t.next)===0)){if(Or(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ur(n,e,t,i,s,r,o){if(!n)return;!o&&r&&o0(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?jg(n,i,s,r):Jg(n)){e.push(l.i,n.i,c.i),Or(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Qg(ts(n),e),Ur(n,e,t,i,s,r,2)):o===2&&e0(n,e,t,i,s,r):Ur(ts(n),e,t,i,s,r,1);break}}}function Jg(n){let e=n.prev,t=n,i=n.next;if(wt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&fr(s,a,r,l,o,c,g.x,g.y)&&wt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function jg(n,e,t,i){let s=n.prev,r=n,o=n.next;if(wt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),g=Math.min(h,u,f),y=Math.max(a,l,c),p=Math.max(h,u,f),m=Hc(d,g,e,t,i),T=Hc(y,p,e,t,i),w=n.prevZ,_=n.nextZ;for(;w&&w.z>=m&&_&&_.z<=T;){if(w.x>=d&&w.x<=y&&w.y>=g&&w.y<=p&&w!==s&&w!==o&&fr(a,h,l,u,c,f,w.x,w.y)&&wt(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=d&&_.x<=y&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&fr(a,h,l,u,c,f,_.x,_.y)&&wt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=m;){if(w.x>=d&&w.x<=y&&w.y>=g&&w.y<=p&&w!==s&&w!==o&&fr(a,h,l,u,c,f,w.x,w.y)&&wt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=T;){if(_.x>=d&&_.x<=y&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&fr(a,h,l,u,c,f,_.x,_.y)&&wt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Qg(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Gs(i,s)&&bd(i,t,t.next,s)&&Fr(i,s)&&Fr(s,i)&&(e.push(i.i,t.i,s.i),Or(t),Or(t.next),t=n=s),t=t.next}while(t!==n);return ts(t)}function e0(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&c0(o,a)){let l=Sd(o,a);o=ts(o,o.next),l=ts(l,l.next),Ur(o,e,t,i,s,r,0),Ur(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function t0(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=vd(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(l0(c))}s.sort(n0);for(let r=0;r<s.length;r++)t=i0(s[r],t);return t}function n0(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function i0(n,e){let t=s0(n,e);if(!t)return e;let i=Sd(t,n);return ts(i,i.next),ts(t,t.next)}function s0(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Gs(n,t))return t;do{if(Gs(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Md(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);Fr(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&r0(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function r0(n,e){return wt(n.prev,n,e.prev)<0&&wt(e.next,n,n.next)<0}function o0(n,e,t,i){let s=n;do s.z===0&&(s.z=Hc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,a0(s)}function a0(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Hc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function l0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Md(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function fr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Md(n,e,t,i,s,r,o,a)}function c0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!h0(n,e)&&(Fr(n,e)&&Fr(e,n)&&u0(n,e)&&(wt(n.prev,n,e.prev)||wt(n,e.prev,e))||Gs(n,e)&&wt(n.prev,n,n.next)>0&&wt(e.prev,e,e.next)>0)}function wt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Gs(n,e){return n.x===e.x&&n.y===e.y}function bd(n,e,t,i){let s=Yo(wt(n,e,t)),r=Yo(wt(n,e,i)),o=Yo(wt(t,i,n)),a=Yo(wt(t,i,e));return!!(s!==r&&o!==a||s===0&&qo(n,t,e)||r===0&&qo(n,i,e)||o===0&&qo(t,n,i)||a===0&&qo(t,e,i))}function qo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Yo(n){return n>0?1:n<0?-1:0}function h0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&bd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Fr(n,e){return wt(n.prev,n,n.next)<0?wt(n,e,n.next)>=0&&wt(n,n.prev,e)>=0:wt(n,e,n.prev)<0||wt(n,n.next,e)<0}function u0(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Sd(n,e){let t=Gc(n.i,n.x,n.y),i=Gc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function If(n,e,t,i){let s=Gc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Or(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Gc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function f0(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var $c=class{static triangulate(e,t,i=2){return Kg(e,t,i)}},Zi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Lf(e),Nf(i,e);let o=e.length;t.forEach(Lf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Nf(i,t[l]);let a=$c.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Lf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Nf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Pi=class n extends Ft{constructor(e=new ai([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new yt(s,3)),this.setAttribute("uv",new yt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:d0,w,_=!1,v,S,b,x;if(m){w=m.getSpacedPoints(h),_=!0,f=!1;let Q=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(h,Q),S=new I,b=new I,x=new I}f||(p=0,d=0,g=0,y=0);let A=a.extractPoints(c),R=A.shape,P=A.holes;if(!Zi.isClockWise(R)){R=R.reverse();for(let Q=0,ie=P.length;Q<ie;Q++){let se=P[Q];Zi.isClockWise(se)&&(P[Q]=se.reverse())}}function k(Q){let se=10000000000000001e-36,ye=Q[0];for(let _e=1;_e<=Q.length;_e++){let ke=_e%Q.length,Le=Q[ke],Ge=Le.x-ye.x,Ze=Le.y-ye.y,D=Ge*Ge+Ze*Ze,lt=Math.max(Math.abs(Le.x),Math.abs(Le.y),Math.abs(ye.x),Math.abs(ye.y)),je=se*lt*lt;if(D<=je){Q.splice(ke,1),_e--;continue}ye=Le}}k(R),P.forEach(k);let z=P.length,N=R;for(let Q=0;Q<z;Q++){let ie=P[Q];R=R.concat(ie)}function V(Q,ie,se){return ie||Ye("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ie,se)}let F=R.length;function X(Q,ie,se){let ye,_e,ke,Le=Q.x-ie.x,Ge=Q.y-ie.y,Ze=se.x-Q.x,D=se.y-Q.y,lt=Le*Le+Ge*Ge,je=Le*D-Ge*Ze;if(Math.abs(je)>Number.EPSILON){let C=Math.sqrt(lt),M=Math.sqrt(Ze*Ze+D*D),B=ie.x-Ge/C,G=ie.y+Le/C,Y=se.x-D/M,de=se.y+Ze/M,me=((Y-B)*D-(de-G)*Ze)/(Le*D-Ge*Ze);ye=B+Le*me-Q.x,_e=G+Ge*me-Q.y;let Z=ye*ye+_e*_e;if(Z<=2)return new he(ye,_e);ke=Math.sqrt(Z/2)}else{let C=!1;Le>Number.EPSILON?Ze>Number.EPSILON&&(C=!0):Le<-Number.EPSILON?Ze<-Number.EPSILON&&(C=!0):Math.sign(Ge)===Math.sign(D)&&(C=!0),C?(ye=-Ge,_e=Le,ke=Math.sqrt(lt)):(ye=Le,_e=Ge,ke=Math.sqrt(lt/2))}return new he(ye/ke,_e/ke)}let J=[];for(let Q=0,ie=N.length,se=ie-1,ye=Q+1;Q<ie;Q++,se++,ye++)se===ie&&(se=0),ye===ie&&(ye=0),J[Q]=X(N[Q],N[se],N[ye]);let le=[],re,ne=J.concat();for(let Q=0,ie=z;Q<ie;Q++){let se=P[Q];re=[];for(let ye=0,_e=se.length,ke=_e-1,Le=ye+1;ye<_e;ye++,ke++,Le++)ke===_e&&(ke=0),Le===_e&&(Le=0),re[ye]=X(se[ye],se[ke],se[Le]);le.push(re),ne=ne.concat(re)}let fe;if(p===0)fe=Zi.triangulateShape(N,P);else{let Q=[],ie=[];for(let se=0;se<p;se++){let ye=se/p,_e=d*Math.cos(ye*Math.PI/2),ke=g*Math.sin(ye*Math.PI/2)+y;for(let Le=0,Ge=N.length;Le<Ge;Le++){let Ze=V(N[Le],J[Le],ke);ge(Ze.x,Ze.y,-_e),ye===0&&Q.push(Ze)}for(let Le=0,Ge=z;Le<Ge;Le++){let Ze=P[Le];re=le[Le];let D=[];for(let lt=0,je=Ze.length;lt<je;lt++){let C=V(Ze[lt],re[lt],ke);ge(C.x,C.y,-_e),ye===0&&D.push(C)}ye===0&&ie.push(D)}}fe=Zi.triangulateShape(Q,ie)}let ue=fe.length,pe=g+y;for(let Q=0;Q<F;Q++){let ie=f?V(R[Q],ne[Q],pe):R[Q];_?(b.copy(v.normals[0]).multiplyScalar(ie.x),S.copy(v.binormals[0]).multiplyScalar(ie.y),x.copy(w[0]).add(b).add(S),ge(x.x,x.y,x.z)):ge(ie.x,ie.y,0)}for(let Q=1;Q<=h;Q++)for(let ie=0;ie<F;ie++){let se=f?V(R[ie],ne[ie],pe):R[ie];_?(b.copy(v.normals[Q]).multiplyScalar(se.x),S.copy(v.binormals[Q]).multiplyScalar(se.y),x.copy(w[Q]).add(b).add(S),ge(x.x,x.y,x.z)):ge(se.x,se.y,u/h*Q)}for(let Q=p-1;Q>=0;Q--){let ie=Q/p,se=d*Math.cos(ie*Math.PI/2),ye=g*Math.sin(ie*Math.PI/2)+y;for(let _e=0,ke=N.length;_e<ke;_e++){let Le=V(N[_e],J[_e],ye);ge(Le.x,Le.y,u+se)}for(let _e=0,ke=P.length;_e<ke;_e++){let Le=P[_e];re=le[_e];for(let Ge=0,Ze=Le.length;Ge<Ze;Ge++){let D=V(Le[Ge],re[Ge],ye);_?ge(D.x,D.y+w[h-1].y,w[h-1].x+se):ge(D.x,D.y,u+se)}}}H(),K();function H(){let Q=s.length/3;if(f){let ie=0,se=F*ie;for(let ye=0;ye<ue;ye++){let _e=fe[ye];Ee(_e[2]+se,_e[1]+se,_e[0]+se)}ie=h+p*2,se=F*ie;for(let ye=0;ye<ue;ye++){let _e=fe[ye];Ee(_e[0]+se,_e[1]+se,_e[2]+se)}}else{for(let ie=0;ie<ue;ie++){let se=fe[ie];Ee(se[2],se[1],se[0])}for(let ie=0;ie<ue;ie++){let se=fe[ie];Ee(se[0]+F*h,se[1]+F*h,se[2]+F*h)}}i.addGroup(Q,s.length/3-Q,0)}function K(){let Q=s.length/3,ie=0;j(N,ie),ie+=N.length;for(let se=0,ye=P.length;se<ye;se++){let _e=P[se];j(_e,ie),ie+=_e.length}i.addGroup(Q,s.length/3-Q,1)}function j(Q,ie){let se=Q.length;for(;--se>=0;){let ye=se,_e=se-1;_e<0&&(_e=Q.length-1);for(let ke=0,Le=h+p*2;ke<Le;ke++){let Ge=F*ke,Ze=F*(ke+1),D=ie+ye+Ge,lt=ie+_e+Ge,je=ie+_e+Ze,C=ie+ye+Ze;Pe(D,lt,je,C)}}}function ge(Q,ie,se){l.push(Q),l.push(ie),l.push(se)}function Ee(Q,ie,se){We(Q),We(ie),We(se);let ye=s.length/3,_e=T.generateTopUV(i,s,ye-3,ye-2,ye-1);xe(_e[0]),xe(_e[1]),xe(_e[2])}function Pe(Q,ie,se,ye){We(Q),We(ie),We(ye),We(ie),We(se),We(ye);let _e=s.length/3,ke=T.generateSideWallUV(i,s,_e-6,_e-3,_e-2,_e-1);xe(ke[0]),xe(ke[1]),xe(ke[3]),xe(ke[1]),xe(ke[2]),xe(ke[3])}function We(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function xe(Q){r.push(Q.x),r.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return p0(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Vc[s.type]().fromJSON(s)),new n(i,e.options)}},d0={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new he(r,o),new he(a,l),new he(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],y=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new he(o,1-l),new he(c,1-u),new he(f,1-g),new he(y,1-m)]:[new he(a,1-l),new he(h,1-u),new he(d,1-g),new he(p,1-m)]}};function p0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Br=class n extends Ft{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let T=m*f-o;for(let w=0;w<c;w++){let _=w*u-r;g.push(_,-T,0),y.push(0,0,1),p.push(w/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<a;T++){let w=T+c*m,_=T+c*(m+1),v=T+1+c*(m+1),S=T+1+c*m;d.push(w,_,S),d.push(_,v,S)}this.setIndex(d),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(y,3)),this.setAttribute("uv",new yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var kr=class extends Ln{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Be(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function os(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Df(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Df(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Zt(n){let e={};for(let t=0;t<n.length;t++){let i=os(n[t]);for(let s in i)e[s]=i[s]}return e}function Df(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function m0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function gh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var wd={clone:os,merge:Zt},g0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g0,this.fragmentShader=x0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=m0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Be().setHex(s.value);break;case"v2":this.uniforms[i].value=new he().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new bt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Xe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ht().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ma=class extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},bn=class extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=io,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var zr=class extends Ln{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=io,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Ba,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ba=class extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sa=class extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Zo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var Ii=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wa=class extends Ii{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fc,endingEnd:Fc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Oc:r=e,a=2*t-i;break;case Bc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Oc:o=e,l=2*i-t;break;case Bc:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),y=g*g,p=y*g,m=-f*p+2*f*y-f*g,T=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*g+1,w=(-1-d)*p+(1.5+d)*y+.5*g,_=d*p-d*y;for(let v=0;v!==a;++v)r[v]=m*o[h+v]+T*o[c+v]+w*o[l+v]+_*o[u+v];return r}},Ta=class extends Ii{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Ea=class extends Ii{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Aa=class extends Ii{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-t)/(s-t),y=1-g;for(let p=0;p!==a;++p)r[p]=o[c+p]*y+o[l+p]*g;return r}let f=a*2,d=e-1;for(let g=0;g!==a;++g){let y=o[c+g],p=o[l+g],m=d*f+g*2,T=u[m],w=u[m+1],_=e*f+g*2,v=h[_],S=h[_+1],b=(i-t)/(s-t),x,A,R,P,L;for(let k=0;k<8;k++){x=b*b,A=x*b,R=1-b,P=R*R,L=P*R;let N=L*t+3*P*b*T+3*R*x*v+A*s-i;if(Math.abs(N)<1e-10)break;let V=3*P*(T-t)+6*R*b*(v-T)+3*x*(s-v);if(Math.abs(V)<1e-10)break;b=b-N/V,b=Math.max(0,Math.min(1,b))}r[g]=L*y+3*P*b*w+3*R*x*S+A*p}return r}},dn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zo(t,this.TimeBufferType),this.values=Zo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Zo(e.times,Array),values:Zo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Aa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Qi:t=this.InterpolantFactoryMethodDiscrete;break;case Ds:t=this.InterpolantFactoryMethodLinear;break;case jo:t=this.InterpolantFactoryMethodSmooth;break;case Uc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return He("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qi;case this.InterpolantFactoryMethodLinear:return Ds;case this.InterpolantFactoryMethodSmooth:return jo;case this.InterpolantFactoryMethodBezier:return Uc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Ye("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ye("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&ag(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ye("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===jo,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let y=t[u+g];if(y!==t[f+g]||y!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=Ds;var Li=class extends dn{constructor(e,t,i){super(e,t,i)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Qi;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends dn{constructor(e,t,i,s){super(e,t,i,s)}};Ca.prototype.ValueTypeName="color";var Ra=class extends dn{constructor(e,t,i,s){super(e,t,i,s)}};Ra.prototype.ValueTypeName="number";var Pa=class extends Ii{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Qt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Vr=class extends dn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Pa(this.times,this.values,this.getValueSize(),e)}};Vr.prototype.ValueTypeName="quaternion";Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends dn{constructor(e,t,i){super(e,t,i)}};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Qi;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends dn{constructor(e,t,i,s){super(e,t,i,s)}};Ia.prototype.ValueTypeName="vector";var La=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Td=new La,Na=class{constructor(e){this.manager=e!==void 0?e:Td,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Na.DEFAULT_MATERIAL_NAME="__DEFAULT";var ns=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Hr=class extends ns{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Dc=new ht,Uf=new I,Ff=new I,Da=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vs,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Uf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uf),Ff.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ff),t.updateMatrixWorld(),Dc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Us||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ko=new I,Jo=new Qt,kn=new I,Gr=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ko,Jo,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ko,Jo,kn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ko,Jo,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ko,Jo,kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ei=new I,Of=new he,Bf=new he,Ht=class extends Gr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,Of,Bf),t.subVectors(Bf,Of)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(dr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Wc=class extends Da{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0}},$r=class extends ns{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Wc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},$s=class extends Gr{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xc=class extends Da{constructor(){super(new $s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ws=class extends ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Xc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Wr=class extends ns{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Cs=-90,Rs=1,Ua=class extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht(Cs,Rs,e,t);s.layers=this.layers,this.add(s);let r=new Ht(Cs,Rs,e,t);r.layers=this.layers,this.add(r);let o=new Ht(Cs,Rs,e,t);o.layers=this.layers,this.add(o);let a=new Ht(Cs,Rs,e,t);a.layers=this.layers,this.add(a);let l=new Ht(Cs,Rs,e,t);l.layers=this.layers,this.add(l);let c=new Ht(Cs,Rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Us)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Fa=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var xh="\\[\\]\\.:\\/",y0=new RegExp("["+xh+"]","g"),yh="[^"+xh+"]",_0="[^"+xh.replace("\\.","")+"]",v0=/((?:WC+[\/:])*)/.source.replace("WC",yh),M0=/(WCOD+)?/.source.replace("WCOD",_0),b0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yh),S0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yh),w0=new RegExp("^"+v0+M0+b0+S0+"$"),T0=["material","materials","bones","map"],qc=class{constructor(e,t,i){let s=i||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ot=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(y0,"")}static parseTrackName(e){let t=w0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);T0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=qc;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var t1=new Float32Array(1);var Xs=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Yc=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};var Xr=class extends da{constructor(e=10,t=10,i=4473924,s=8947848){i=new Be(i),s=new Be(s);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let y=f===r?i:s;y.toArray(c,d),d+=3,y.toArray(c,d),d+=3,y.toArray(c,d),d+=3,y.toArray(c,d),d+=3}let h=new Ft;h.setAttribute("position",new yt(l,3)),h.setAttribute("color",new yt(c,3));let u=new Ar({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var qr=class extends In{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){He("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function _h(n,e,t,i){let s=E0(i);switch(t){case hh:return n*e;case Wa:return n*e/s.components*s.byteLength;case Xa:return n*e/s.components*s.byteLength;case Bi:return n*e*2/s.components*s.byteLength;case qa:return n*e*2/s.components*s.byteLength;case uh:return n*e*3/s.components*s.byteLength;case sn:return n*e*4/s.components*s.byteLength;case Ya:return n*e*4/s.components*s.byteLength;case Jr:case jr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qr:case eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ka:case ja:return Math.max(n,16)*Math.max(e,8)/4;case Za:case Ja:return Math.max(n,8)*Math.max(e,8)/2;case Qa:case el:case nl:case il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case tl:case to:case sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case al:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ll:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case cl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case hl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ul:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case fl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case dl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ml:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case gl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case xl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case yl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case _l:case vl:case Ml:return Math.ceil(n/4)*Math.ceil(e/4)*16;case bl:case Sl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case no:case wl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function E0(n){switch(n){case nn:case oh:return{byteLength:1,components:1};case Zs:case ah:case Wn:return{byteLength:2,components:1};case Ga:case $a:return{byteLength:2,components:4};case Dn:case Ha:case Sn:return{byteLength:4,components:1};case lh:case ch:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Yd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function C0(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],y=u[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,u[f]=y)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let y=u[d];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var R0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P0=`#ifdef USE_ALPHAHASH
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
#endif`,I0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,D0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U0=`#ifdef USE_AOMAP
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
#endif`,F0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O0=`#ifdef USE_BATCHING
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
#endif`,B0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,H0=`#ifdef USE_IRIDESCENCE
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
#endif`,G0=`#ifdef USE_BUMPMAP
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
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,j0=`#define PI 3.141592653589793
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
} // validated`,Q0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ex=`vec3 transformedNormal = objectNormal;
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
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ox=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ax=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
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
#endif`,hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,fx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,px=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gx=`#ifdef USE_GRADIENTMAP
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
}`,xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Mx=`#ifdef USE_ENVMAP
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
#endif`,bx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ex=`PhysicalMaterial material;
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
#endif`,Ax=`uniform sampler2D dfgLUT;
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
}`,Cx=`
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
#endif`,Rx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Px=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ix=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Lx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ux=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ox=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kx=`#if defined( USE_POINTS_UV )
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
#endif`,zx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$x=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wx=`#ifdef USE_MORPHTARGETS
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
#endif`,Xx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jx=`#ifdef USE_NORMALMAP
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
#endif`,Qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ey=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,ny=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ay=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ly=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,py=`float getShadowMask() {
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
}`,my=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gy=`#ifdef USE_SKINNING
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
#endif`,xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yy=`#ifdef USE_SKINNING
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
#endif`,_y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,My=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,by=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sy=`#ifdef USE_TRANSMISSION
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
#endif`,wy=`#ifdef USE_TRANSMISSION
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
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ry=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Py=`uniform sampler2D t2D;
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
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ly=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uy=`#include <common>
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
}`,Fy=`#if DEPTH_PACKING == 3200
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
}`,Oy=`#define DISTANCE
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
}`,By=`#define DISTANCE
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
}`,ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vy=`uniform float scale;
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
}`,Hy=`uniform vec3 diffuse;
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
}`,Gy=`#include <common>
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
}`,$y=`uniform vec3 diffuse;
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
}`,Wy=`#define LAMBERT
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
}`,Xy=`#define LAMBERT
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
}`,qy=`#define MATCAP
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
}`,Yy=`#define MATCAP
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
}`,Zy=`#define NORMAL
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
}`,Ky=`#define NORMAL
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
}`,Jy=`#define PHONG
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
}`,jy=`#define PHONG
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
}`,Qy=`#define STANDARD
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
}`,e_=`#define STANDARD
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
}`,n_=`#define TOON
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
}`,i_=`uniform float size;
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
}`,s_=`uniform vec3 diffuse;
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
}`,r_=`#include <common>
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
}`,o_=`uniform vec3 color;
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
}`,a_=`uniform float rotation;
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
}`,l_=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:R0,alphahash_pars_fragment:P0,alphamap_fragment:I0,alphamap_pars_fragment:L0,alphatest_fragment:N0,alphatest_pars_fragment:D0,aomap_fragment:U0,aomap_pars_fragment:F0,batching_pars_vertex:O0,batching_vertex:B0,begin_vertex:k0,beginnormal_vertex:z0,bsdfs:V0,iridescence_fragment:H0,bumpmap_pars_fragment:G0,clipping_planes_fragment:$0,clipping_planes_pars_fragment:W0,clipping_planes_pars_vertex:X0,clipping_planes_vertex:q0,color_fragment:Y0,color_pars_fragment:Z0,color_pars_vertex:K0,color_vertex:J0,common:j0,cube_uv_reflection_fragment:Q0,defaultnormal_vertex:ex,displacementmap_pars_vertex:tx,displacementmap_vertex:nx,emissivemap_fragment:ix,emissivemap_pars_fragment:sx,colorspace_fragment:rx,colorspace_pars_fragment:ox,envmap_fragment:ax,envmap_common_pars_fragment:lx,envmap_pars_fragment:cx,envmap_pars_vertex:hx,envmap_physical_pars_fragment:Mx,envmap_vertex:ux,fog_vertex:fx,fog_pars_vertex:dx,fog_fragment:px,fog_pars_fragment:mx,gradientmap_pars_fragment:gx,lightmap_pars_fragment:xx,lights_lambert_fragment:yx,lights_lambert_pars_fragment:_x,lights_pars_begin:vx,lights_toon_fragment:bx,lights_toon_pars_fragment:Sx,lights_phong_fragment:wx,lights_phong_pars_fragment:Tx,lights_physical_fragment:Ex,lights_physical_pars_fragment:Ax,lights_fragment_begin:Cx,lights_fragment_maps:Rx,lights_fragment_end:Px,lightprobes_pars_fragment:Ix,logdepthbuf_fragment:Lx,logdepthbuf_pars_fragment:Nx,logdepthbuf_pars_vertex:Dx,logdepthbuf_vertex:Ux,map_fragment:Fx,map_pars_fragment:Ox,map_particle_fragment:Bx,map_particle_pars_fragment:kx,metalnessmap_fragment:zx,metalnessmap_pars_fragment:Vx,morphinstance_vertex:Hx,morphcolor_vertex:Gx,morphnormal_vertex:$x,morphtarget_pars_vertex:Wx,morphtarget_vertex:Xx,normal_fragment_begin:qx,normal_fragment_maps:Yx,normal_pars_fragment:Zx,normal_pars_vertex:Kx,normal_vertex:Jx,normalmap_pars_fragment:jx,clearcoat_normal_fragment_begin:Qx,clearcoat_normal_fragment_maps:ey,clearcoat_pars_fragment:ty,iridescence_pars_fragment:ny,opaque_fragment:iy,packing:sy,premultiplied_alpha_fragment:ry,project_vertex:oy,dithering_fragment:ay,dithering_pars_fragment:ly,roughnessmap_fragment:cy,roughnessmap_pars_fragment:hy,shadowmap_pars_fragment:uy,shadowmap_pars_vertex:fy,shadowmap_vertex:dy,shadowmask_pars_fragment:py,skinbase_vertex:my,skinning_pars_vertex:gy,skinning_vertex:xy,skinnormal_vertex:yy,specularmap_fragment:_y,specularmap_pars_fragment:vy,tonemapping_fragment:My,tonemapping_pars_fragment:by,transmission_fragment:Sy,transmission_pars_fragment:wy,uv_pars_fragment:Ty,uv_pars_vertex:Ey,uv_vertex:Ay,worldpos_vertex:Cy,background_vert:Ry,background_frag:Py,backgroundCube_vert:Iy,backgroundCube_frag:Ly,cube_vert:Ny,cube_frag:Dy,depth_vert:Uy,depth_frag:Fy,distance_vert:Oy,distance_frag:By,equirect_vert:ky,equirect_frag:zy,linedashed_vert:Vy,linedashed_frag:Hy,meshbasic_vert:Gy,meshbasic_frag:$y,meshlambert_vert:Wy,meshlambert_frag:Xy,meshmatcap_vert:qy,meshmatcap_frag:Yy,meshnormal_vert:Zy,meshnormal_frag:Ky,meshphong_vert:Jy,meshphong_frag:jy,meshphysical_vert:Qy,meshphysical_frag:e_,meshtoon_vert:t_,meshtoon_frag:n_,points_vert:i_,points_frag:s_,shadow_vert:r_,shadow_frag:o_,sprite_vert:a_,sprite_frag:l_},Te={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},qn={basic:{uniforms:Zt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Zt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Zt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Zt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Zt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Be(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Zt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Zt([Te.points,Te.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Zt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Zt([Te.common,Te.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Zt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Zt([Te.sprite,Te.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Zt([Te.common,Te.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Zt([Te.lights,Te.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};qn.physical={uniforms:Zt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var Al={r:0,b:0,g:0},c_=new ht,Zd=new Xe;Zd.set(-1,0,0,0,1,0,0,0,1);function h_(n,e,t,i,s,r){let o=new Be(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(T){let w=T.isScene===!0?T.background:null;if(w&&w.isTexture){let _=T.backgroundBlurriness>0;w=e.get(w,_)}return w}function g(T){let w=!1,_=d(T);_===null?p(o,a):_&&_.isColor&&(p(_,1),w=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(T,w){let _=d(w);_&&(_.isCubeTexture||_.mapping===Kr)?(c===void 0&&(c=new at(new ri(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:os(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,S,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(c_.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zd),c.material.toneMapped=nt.getTransfer(_.colorSpace)!==ft,(h!==_||u!==_.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,f=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new at(new Br(2,2),new fn({name:"BackgroundMaterial",uniforms:os(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=nt.getTransfer(_.colorSpace)!==ft,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,f=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,w){T.getRGB(Al,gh(n)),t.buffers.color.setClear(Al.r,Al.g,Al.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,w=1){o.set(T),a=w,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(T){a=T,p(o,a)},render:g,addToRenderList:y,dispose:m}}function u_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(P,L,k,z,N){let V=!1,F=u(P,z,k,L);r!==F&&(r=F,c(r.object)),V=d(P,z,k,N),V&&g(P,z,k,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,_(P,L,k,z),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function u(P,L,k,z){let N=z.wireframe===!0,V=i[L.id];V===void 0&&(V={},i[L.id]=V);let F=P.isInstancedMesh===!0?P.id:0,X=V[F];X===void 0&&(X={},V[F]=X);let J=X[k.id];J===void 0&&(J={},X[k.id]=J);let le=J[N];return le===void 0&&(le=f(l()),J[N]=le),le}function f(P){let L=[],k=[],z=[];for(let N=0;N<t;N++)L[N]=0,k[N]=0,z[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:z,object:P,attributes:{},index:null}}function d(P,L,k,z){let N=r.attributes,V=L.attributes,F=0,X=k.getAttributes();for(let J in X)if(X[J].location>=0){let re=N[J],ne=V[J];if(ne===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor)),re===void 0||re.attribute!==ne||ne&&re.data!==ne.data)return!0;F++}return r.attributesNum!==F||r.index!==z}function g(P,L,k,z){let N={},V=L.attributes,F=0,X=k.getAttributes();for(let J in X)if(X[J].location>=0){let re=V[J];re===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(re=P.instanceColor));let ne={};ne.attribute=re,re&&re.data&&(ne.data=re.data),N[J]=ne,F++}r.attributes=N,r.attributesNum=F,r.index=z}function y(){let P=r.newAttributes;for(let L=0,k=P.length;L<k;L++)P[L]=0}function p(P){m(P,0)}function m(P,L){let k=r.newAttributes,z=r.enabledAttributes,N=r.attributeDivisors;k[P]=1,z[P]===0&&(n.enableVertexAttribArray(P),z[P]=1),N[P]!==L&&(n.vertexAttribDivisor(P,L),N[P]=L)}function T(){let P=r.newAttributes,L=r.enabledAttributes;for(let k=0,z=L.length;k<z;k++)L[k]!==P[k]&&(n.disableVertexAttribArray(k),L[k]=0)}function w(P,L,k,z,N,V,F){F===!0?n.vertexAttribIPointer(P,L,k,N,V):n.vertexAttribPointer(P,L,k,z,N,V)}function _(P,L,k,z){y();let N=z.attributes,V=k.getAttributes(),F=L.defaultAttributeValues;for(let X in V){let J=V[X];if(J.location>=0){let le=N[X];if(le===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(le=P.instanceColor)),le!==void 0){let re=le.normalized,ne=le.itemSize,fe=e.get(le);if(fe===void 0)continue;let ue=fe.buffer,pe=fe.type,H=fe.bytesPerElement,K=pe===n.INT||pe===n.UNSIGNED_INT||le.gpuType===Ha;if(le.isInterleavedBufferAttribute){let j=le.data,ge=j.stride,Ee=le.offset;if(j.isInstancedInterleavedBuffer){for(let Pe=0;Pe<J.locationSize;Pe++)m(J.location+Pe,j.meshPerAttribute);P.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Pe=0;Pe<J.locationSize;Pe++)p(J.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let Pe=0;Pe<J.locationSize;Pe++)w(J.location+Pe,ne/J.locationSize,pe,re,ge*H,(Ee+ne/J.locationSize*Pe)*H,K)}else{if(le.isInstancedBufferAttribute){for(let j=0;j<J.locationSize;j++)m(J.location+j,le.meshPerAttribute);P.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let j=0;j<J.locationSize;j++)p(J.location+j);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let j=0;j<J.locationSize;j++)w(J.location+j,ne/J.locationSize,pe,re,ne*H,ne/J.locationSize*j*H,K)}}else if(F!==void 0){let re=F[X];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(J.location,re);break;case 3:n.vertexAttrib3fv(J.location,re);break;case 4:n.vertexAttrib4fv(J.location,re);break;default:n.vertexAttrib1fv(J.location,re)}}}}T()}function v(){A();for(let P in i){let L=i[P];for(let k in L){let z=L[k];for(let N in z){let V=z[N];for(let F in V)h(V[F].object),delete V[F];delete z[N]}}delete i[P]}}function S(P){if(i[P.id]===void 0)return;let L=i[P.id];for(let k in L){let z=L[k];for(let N in z){let V=z[N];for(let F in V)h(V[F].object),delete V[F];delete z[N]}}delete i[P.id]}function b(P){for(let L in i){let k=i[L];for(let z in k){let N=k[z];if(N[P.id]===void 0)continue;let V=N[P.id];for(let F in V)h(V[F].object),delete V[F];delete N[P.id]}}}function x(P){for(let L in i){let k=i[L],z=P.isInstancedMesh===!0?P.id:0,N=k[z];if(N!==void 0){for(let V in N){let F=N[V];for(let X in F)h(F[X].object),delete F[X];delete N[V]}delete k[z],Object.keys(k).length===0&&delete i[L]}}}function A(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:R,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:b,initAttributes:y,enableAttribute:p,disableUnusedAttributes:T}}function f_(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function d_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==sn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let x=b===Wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==nn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Sn&&!x)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(He("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:_,maxSamples:v,samples:S}}function p_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new vn,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let T=r?0:i,w=T*4,_=m.clippingState||null;l.value=_,_=h(g,f,w,d);for(let v=0;v!==w;++v)_[v]=t[v];m.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){let y=u!==null?u.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let m=d+y*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,_=d;w!==y;++w,_+=4)o.copy(u[w]).applyMatrix4(T,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}var ki=4,Ed=[.125,.215,.35,.446,.526,.582],as=20,m_=256,so=new $s,Ad=new Be,vh=null,Mh=0,bh=0,Sh=!1,g_=new I,Qs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=g_}=r;vh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vh,Mh,bh),this._renderer.xr.enabled=Sh,e.scissorTest=!1,Js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Wn,format:sn,colorSpace:xr,depthBuffer:!1},s=Cd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cd(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=x_(r)),this._blurMaterial=__(r,e,t),this._ggxMaterial=y_(r,e,t)}return s}_compileMaterial(e){let t=new at(new Ft,e);this._renderer.compile(t,so)}_sceneToCubeUV(e,t,i,s,r){let l=new Ht(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Ad),u.toneMapping=Nn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new at(new ri,new zs({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,p=y.material,m=!1,T=e.background;T?T.isColor&&(p.color.copy(T),e.background=null,m=!0):(p.color.copy(Ad),m=!0);for(let w=0;w<6;w++){let _=w%3;_===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):_===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let v=this._cubeSize;Js(s,_*v,w>2?v:0,v,v),u.setRenderTarget(s),m&&u.render(y,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=T}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Fi||e.mapping===is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Js(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,so)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,d=u*f,{_lodMax:g}=this,y=this._sizeLods[i],p=3*y*(i>g-ki?i-g+ki:0),m=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,Js(r,p,m,3*y,2*y),s.setRenderTarget(r),s.render(a,so),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Js(e,p,m,3*y,2*y),s.setRenderTarget(e),s.render(a,so)}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[s];u.material=c;let f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*as-1),y=r/g,p=isFinite(r)?1+Math.floor(h*y):as;p>as&&He(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${as}`);let m=[],T=0;for(let b=0;b<as;++b){let x=b/y,A=Math.exp(-x*x/2);m.push(A),b===0?T+=A:b<p&&(T+=2*A)}for(let b=0;b<m.length;b++)m[b]=m[b]/T;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-i;let _=this._sizeLods[s],v=3*_*(s>w-ki?s-w+ki:0),S=4*(this._cubeSize-_);Js(t,v,S,3*_,2*_),l.setRenderTarget(t),l.render(u,so)}};function x_(n){let e=[],t=[],i=[],s=n,r=n-ki+1+Ed.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-ki?l=Ed[o-n+ki-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,y=3,p=2,m=1,T=new Float32Array(y*g*d),w=new Float32Array(p*g*d),_=new Float32Array(m*g*d);for(let S=0;S<d;S++){let b=S%3*2/3-1,x=S>2?0:-1,A=[b,x,0,b+2/3,x,0,b+2/3,x+1,0,b,x,0,b+2/3,x+1,0,b,x+1,0];T.set(A,y*g*S),w.set(f,p*g*S);let R=[S,S,S,S,S,S];_.set(R,m*g*S)}let v=new Ft;v.setAttribute("position",new Tt(T,y)),v.setAttribute("uv",new Tt(w,p)),v.setAttribute("faceIndex",new Tt(_,m)),i.push(new at(v,null)),s>ki&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Cd(n,e,t){let i=new hn(n,e,t);return i.texture.mapping=Kr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Js(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function y_(n,e,t){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:m_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Il(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function __(n,e,t){let i=new Float32Array(as),s=new I(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Il(),fragmentShader:`

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
	`}var Rl=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Cr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ri(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Gn});r.uniforms.tEquirect.value=t;let o=new at(s,r),a=t.minFilter;return t.minFilter===$n&&(t.minFilter=Dt),new Ua(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function v_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===ka||d===za)if(e.has(f)){let g=e.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let y=new Rl(g.height);return y.fromEquirectangularTexture(n,f),e.set(f,y),f.addEventListener("dispose",c),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,g=d===ka||d===za,y=d===Fi||d===is;if(g||y){let p=t.get(f),m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new Qs(n)),p=g?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{let T=f.image;return g&&T&&T.height>0||y&&T&&l(T)?(i===null&&(i=new Qs(n)),p=g?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function a(f,d){return d===ka?f.mapping=Fi:d===za&&(f.mapping=is),f}function l(f){let d=0,g=6;for(let y=0;y<g;y++)f[y]!==void 0&&d++;return d===g}function c(f){let d=f.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function M_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ki("WebGLRenderer: "+i+" extension not supported."),s}}}function b_(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,g=u.attributes.position,y=0;if(g===void 0)return;if(d!==null){let T=d.array;y=d.version;for(let w=0,_=T.length;w<_;w+=3){let v=T[w+0],S=T[w+1],b=T[w+2];f.push(v,S,S,b,b,v)}}else{let T=g.array;y=g.version;for(let w=0,_=T.length/3-1;w<_;w+=3){let v=w+0,S=w+1,b=w+2;f.push(v,S,S,b,b,v)}}let p=new(g.count>=65535?Sr:br)(f,1);p.version=y;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function S_(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*o),t.update(f,i,1)}function c(u,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,u*o,d),t.update(f,i,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,d);let y=0;for(let p=0;p<d;p++)y+=f[p];t.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function w_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Ye("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function T_(n,e,t){let i=new WeakMap,s=new bt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let A=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],w=0;d===!0&&(w=1),g===!0&&(w=2),y===!0&&(w=3);let _=a.attributes.position.count*w,v=1;_>e.maxTextureSize&&(v=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let S=new Float32Array(_*v*4*u),b=new vr(S,_,v,u);b.type=Sn,b.needsUpdate=!0;let x=w*4;for(let R=0;R<u;R++){let P=p[R],L=m[R],k=T[R],z=_*v*4*R;for(let N=0;N<P.count;N++){let V=N*x;d===!0&&(s.fromBufferAttribute(P,N),S[z+V+0]=s.x,S[z+V+1]=s.y,S[z+V+2]=s.z,S[z+V+3]=0),g===!0&&(s.fromBufferAttribute(L,N),S[z+V+4]=s.x,S[z+V+5]=s.y,S[z+V+6]=s.z,S[z+V+7]=0),y===!0&&(s.fromBufferAttribute(k,N),S[z+V+8]=s.x,S[z+V+9]=s.y,S[z+V+10]=s.z,S[z+V+11]=k.itemSize===4?s.w:1)}}f={count:u,texture:b,size:new he(_,v)},i.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function E_(n,e,t,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var A_={[Qc]:"LINEAR_TONE_MAPPING",[eh]:"REINHARD_TONE_MAPPING",[th]:"CINEON_TONE_MAPPING",[Zr]:"ACES_FILMIC_TONE_MAPPING",[ih]:"AGX_TONE_MAPPING",[sh]:"NEUTRAL_TONE_MAPPING",[nh]:"CUSTOM_TONE_MAPPING"};function C_(n,e,t,i,s,r){let o=new hn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new si(e,t):void 0}),a=new hn(e,t,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),l=new Ft;l.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new yt([0,2,0,0,2,0],2));let c=new Ma({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new at(l,c),u=new $s(-1,1,1,-1,0,1),f=null,d=null,g=!1,y,p=null,m=[],T=!1;this.setSize=function(w,_){o.setSize(w,_),a.setSize(w,_);for(let v=0;v<m.length;v++){let S=m[v];S.setSize&&S.setSize(w,_)}},this.setEffects=function(w){m=w,T=m.length>0&&m[0].isRenderPass===!0;let _=o.width,v=o.height;for(let S=0;S<m.length;S++){let b=m[S];b.setSize&&b.setSize(_,v)}},this.begin=function(w,_){if(g||w.toneMapping===Nn&&m.length===0)return!1;if(p=_,_!==null){let v=_.width,S=_.height;(o.width!==v||o.height!==S)&&this.setSize(v,S)}return T===!1&&w.setRenderTarget(o),y=w.toneMapping,w.toneMapping=Nn,!0},this.hasRenderPass=function(){return T},this.end=function(w,_){w.toneMapping=y,g=!0;let v=o,S=a;for(let b=0;b<m.length;b++){let x=m[b];if(x.enabled!==!1&&(x.render(w,S,v,_),x.needsSwap!==!1)){let A=v;v=S,S=A}}if(f!==w.outputColorSpace||d!==w.toneMapping){f=w.outputColorSpace,d=w.toneMapping,c.defines={},nt.getTransfer(f)===ft&&(c.defines.SRGB_TRANSFER="");let b=A_[d];b&&(c.defines[b]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=v.texture,w.setRenderTarget(p),w.render(h,u),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}var Kd=new en,Eh=new si(1,1),Jd=new vr,jd=new ca,Qd=new Cr,Id=[],Ld=[],Nd=new Float32Array(16),Dd=new Float32Array(9),Ud=new Float32Array(4);function er(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Id[s];if(r===void 0&&(r=new Float32Array(s),Id[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ll(n,e){let t=Ld[e];t===void 0&&(t=new Int32Array(e),Ld[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function R_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function P_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function I_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function L_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function N_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;Ud.set(i),n.uniformMatrix2fv(this.addr,!1,Ud),Bt(t,i)}}function D_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;Dd.set(i),n.uniformMatrix3fv(this.addr,!1,Dd),Bt(t,i)}}function U_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;Nd.set(i),n.uniformMatrix4fv(this.addr,!1,Nd),Bt(t,i)}}function F_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function O_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function B_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function k_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function z_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function V_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function H_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function G_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function $_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Eh.compareFunction=t.isReversedDepthBuffer()?El:Tl,r=Eh):r=Kd,t.setTexture2D(e||r,s)}function W_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||jd,s)}function X_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Qd,s)}function q_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Jd,s)}function Y_(n){switch(n){case 5126:return R_;case 35664:return P_;case 35665:return I_;case 35666:return L_;case 35674:return N_;case 35675:return D_;case 35676:return U_;case 5124:case 35670:return F_;case 35667:case 35671:return O_;case 35668:case 35672:return B_;case 35669:case 35673:return k_;case 5125:return z_;case 36294:return V_;case 36295:return H_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return q_}}function Z_(n,e){n.uniform1fv(this.addr,e)}function K_(n,e){let t=er(e,this.size,2);n.uniform2fv(this.addr,t)}function J_(n,e){let t=er(e,this.size,3);n.uniform3fv(this.addr,t)}function j_(n,e){let t=er(e,this.size,4);n.uniform4fv(this.addr,t)}function Q_(n,e){let t=er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ev(n,e){let t=er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function tv(n,e){let t=er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function nv(n,e){n.uniform1iv(this.addr,e)}function iv(n,e){n.uniform2iv(this.addr,e)}function sv(n,e){n.uniform3iv(this.addr,e)}function rv(n,e){n.uniform4iv(this.addr,e)}function ov(n,e){n.uniform1uiv(this.addr,e)}function av(n,e){n.uniform2uiv(this.addr,e)}function lv(n,e){n.uniform3uiv(this.addr,e)}function cv(n,e){n.uniform4uiv(this.addr,e)}function hv(n,e,t){let i=this.cache,s=e.length,r=Ll(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Eh:o=Kd;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function uv(n,e,t){let i=this.cache,s=e.length,r=Ll(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||jd,r[o])}function fv(n,e,t){let i=this.cache,s=e.length,r=Ll(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Qd,r[o])}function dv(n,e,t){let i=this.cache,s=e.length,r=Ll(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Jd,r[o])}function pv(n){switch(n){case 5126:return Z_;case 35664:return K_;case 35665:return J_;case 35666:return j_;case 35674:return Q_;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return sv;case 35669:case 35673:return rv;case 5125:return ov;case 36294:return av;case 36295:return lv;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return dv}}var Ah=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Y_(t.type)}},Ch=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pv(t.type)}},Rh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},wh=/(\w+)(\])?(\[|\.)?/g;function Fd(n,e){n.seq.push(e),n.map[e.id]=e}function mv(n,e,t){let i=n.name,s=i.length;for(wh.lastIndex=0;;){let r=wh.exec(i),o=wh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Fd(t,c===void 0?new Ah(a,n,e):new Ch(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Rh(a),Fd(t,u)),t=u}}}var js=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);mv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Od(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var gv=37297,xv=0;function yv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Bd=new Xe;function _v(n){nt._getMatrix(Bd,nt.workingColorSpace,n);let e=`mat3( ${Bd.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case yr:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function kd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+yv(n.getShaderSource(e),a)}else return r}function vv(n,e){let t=_v(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Mv={[Qc]:"Linear",[eh]:"Reinhard",[th]:"Cineon",[Zr]:"ACESFilmic",[ih]:"AgX",[sh]:"Neutral",[nh]:"Custom"};function bv(n,e){let t=Mv[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Cl=new I;function Sv(){nt.getLuminanceCoefficients(Cl);let n=Cl.x.toFixed(4),e=Cl.y.toFixed(4),t=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function Tv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ev(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function oo(n){return n!==""}function zd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Av=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(n){return n.replace(Av,Rv)}var Cv=new Map;function Rv(n,e){let t=et[e];if(t===void 0){let i=Cv.get(e);if(i!==void 0)t=et[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ph(t)}var Pv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hd(n){return n.replace(Pv,Iv)}function Iv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gd(n){let e=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Lv={[Yr]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};function Nv(n){return Lv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Dv={[Fi]:"ENVMAP_TYPE_CUBE",[is]:"ENVMAP_TYPE_CUBE",[Kr]:"ENVMAP_TYPE_CUBE_UV"};function Uv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Dv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Fv={[is]:"ENVMAP_MODE_REFRACTION"};function Ov(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Fv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Bv={[Ba]:"ENVMAP_BLENDING_MULTIPLY",[rd]:"ENVMAP_BLENDING_MIX",[od]:"ENVMAP_BLENDING_ADD"};function kv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Bv[n.combine]||"ENVMAP_BLENDING_NONE"}function zv(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Vv(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Nv(t),c=Uv(t),h=Ov(t),u=kv(t),f=zv(t),d=wv(t),g=Tv(r),y=s.createProgram(),p,m,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(oo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(oo).join(`
`),m.length>0&&(m+=`
`)):(p=[Gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),m=[Gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?et.tonemapping_pars_fragment:"",t.toneMapping!==Nn?bv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,vv("linearToOutputTexel",t.outputColorSpace),Sv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oo).join(`
`)),o=Ph(o),o=zd(o,t),o=Vd(o,t),a=Ph(a),a=zd(a,t),a=Vd(a,t),o=Hd(o),a=Hd(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=T+p+o,_=T+m+a,v=Od(s,s.VERTEX_SHADER,w),S=Od(s,s.FRAGMENT_SHADER,_);s.attachShader(y,v),s.attachShader(y,S),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function b(P){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(y)||"",k=s.getShaderInfoLog(v)||"",z=s.getShaderInfoLog(S)||"",N=L.trim(),V=k.trim(),F=z.trim(),X=!0,J=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,v,S);else{let le=kd(s,v,"vertex"),re=kd(s,S,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+le+`
`+re)}else N!==""?He("WebGLProgram: Program Info Log:",N):(V===""||F==="")&&(J=!1);J&&(P.diagnostics={runnable:X,programLog:N,vertexShader:{log:V,prefix:p},fragmentShader:{log:F,prefix:m}})}s.deleteShader(v),s.deleteShader(S),x=new js(s,y),A=Ev(s,y)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let A;this.getAttributes=function(){return A===void 0&&b(this),A};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(y,gv)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xv++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=v,this.fragmentShader=S,this}var Hv=0,Ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Lh(e),t.set(e,i)),i}},Lh=class{constructor(e){this.id=Hv++,this.code=e,this.usedTimes=0}};function Gv(n){return n===Bi||n===to||n===no}function $v(n,e,t,i,s,r){let o=new Mr,a=new Ih,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,f=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,A,R,P,L,k){let z=P.fog,N=L.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,X=e.get(x.envMap||V,F),J=X&&X.mapping===Kr?X.image.height:null,le=d[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&He("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let re=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ne=re!==void 0?re.length:0,fe=0;N.morphAttributes.position!==void 0&&(fe=1),N.morphAttributes.normal!==void 0&&(fe=2),N.morphAttributes.color!==void 0&&(fe=3);let ue,pe,H,K;if(le){let De=qn[le];ue=De.vertexShader,pe=De.fragmentShader}else{ue=x.vertexShader,pe=x.fragmentShader;let De=a.getVertexShaderStage(x),Et=a.getFragmentShaderStage(x);a.update(x,De,Et),H=De.id,K=Et.id}let j=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),Ee=L.isInstancedMesh===!0,Pe=L.isBatchedMesh===!0,We=!!x.map,xe=!!x.matcap,Q=!!X,ie=!!x.aoMap,se=!!x.lightMap,ye=!!x.bumpMap&&x.wireframe===!1,_e=!!x.normalMap,ke=!!x.displacementMap,Le=!!x.emissiveMap,Ge=!!x.metalnessMap,Ze=!!x.roughnessMap,D=x.anisotropy>0,lt=x.clearcoat>0,je=x.dispersion>0,C=x.iridescence>0,M=x.sheen>0,B=x.transmission>0,G=D&&!!x.anisotropyMap,Y=lt&&!!x.clearcoatMap,de=lt&&!!x.clearcoatNormalMap,me=lt&&!!x.clearcoatRoughnessMap,Z=C&&!!x.iridescenceMap,ee=C&&!!x.iridescenceThicknessMap,ve=M&&!!x.sheenColorMap,Fe=M&&!!x.sheenRoughnessMap,be=!!x.specularMap,Se=!!x.specularColorMap,$e=!!x.specularIntensityMap,qe=B&&!!x.transmissionMap,Ke=B&&!!x.thicknessMap,U=!!x.gradientMap,Me=!!x.alphaMap,te=x.alphaTest>0,we=!!x.alphaHash,Re=!!x.extensions,oe=Nn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(oe=n.toneMapping);let Oe={shaderID:le,shaderType:x.type,shaderName:x.name,vertexShader:ue,fragmentShader:pe,defines:x.defines,customVertexShaderID:H,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Pe,batchingColor:Pe&&L._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&L.instanceColor!==null,instancingMorph:Ee&&L.morphTexture!==null,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:We,matcap:xe,envMap:Q,envMapMode:Q&&X.mapping,envMapCubeUVHeight:J,aoMap:ie,lightMap:se,bumpMap:ye,normalMap:_e,displacementMap:ke,emissiveMap:Le,normalMapObjectSpace:_e&&x.normalMapType===ld,normalMapTangentSpace:_e&&x.normalMapType===io,packedNormalMap:_e&&x.normalMapType===io&&Gv(x.normalMap.format),metalnessMap:Ge,roughnessMap:Ze,anisotropy:D,anisotropyMap:G,clearcoat:lt,clearcoatMap:Y,clearcoatNormalMap:de,clearcoatRoughnessMap:me,dispersion:je,iridescence:C,iridescenceMap:Z,iridescenceThicknessMap:ee,sheen:M,sheenColorMap:ve,sheenRoughnessMap:Fe,specularMap:be,specularColorMap:Se,specularIntensityMap:$e,transmission:B,transmissionMap:qe,thicknessMap:Ke,gradientMap:U,opaque:x.transparent===!1&&x.blending===Ji&&x.alphaToCoverage===!1,alphaMap:Me,alphaTest:te,alphaHash:we,combine:x.combine,mapUv:We&&g(x.map.channel),aoMapUv:ie&&g(x.aoMap.channel),lightMapUv:se&&g(x.lightMap.channel),bumpMapUv:ye&&g(x.bumpMap.channel),normalMapUv:_e&&g(x.normalMap.channel),displacementMapUv:ke&&g(x.displacementMap.channel),emissiveMapUv:Le&&g(x.emissiveMap.channel),metalnessMapUv:Ge&&g(x.metalnessMap.channel),roughnessMapUv:Ze&&g(x.roughnessMap.channel),anisotropyMapUv:G&&g(x.anisotropyMap.channel),clearcoatMapUv:Y&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:de&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&g(x.sheenRoughnessMap.channel),specularMapUv:be&&g(x.specularMap.channel),specularColorMapUv:Se&&g(x.specularColorMap.channel),specularIntensityMapUv:$e&&g(x.specularIntensityMap.channel),transmissionMapUv:qe&&g(x.transmissionMap.channel),thicknessMapUv:Ke&&g(x.thicknessMap.channel),alphaMapUv:Me&&g(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(_e||D),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(We||Me),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&_e===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ge,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:fe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:oe,decodeVideoTexture:We&&x.map.isVideoTexture===!0&&nt.getTransfer(x.map.colorSpace)===ft,decodeVideoTextureEmissive:Le&&x.emissiveMap.isVideoTexture===!0&&nt.getTransfer(x.emissiveMap.colorSpace)===ft,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===tn,flipSided:x.side===Vt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Re&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&x.extensions.multiDraw===!0||Pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function p(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)A.push(R),A.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(A,x),T(A,x),A.push(n.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function m(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function T(x,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function w(x){let A=d[x.type],R;if(A){let P=qn[A];R=wd.clone(P.uniforms)}else R=x.uniforms;return R}function _(x,A){let R=h.get(A);return R!==void 0?++R.usedTimes:(R=new Vv(n,A,x,s),c.push(R),h.set(A,R)),R}function v(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function b(){a.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:w,acquireProgram:_,releaseProgram:v,releaseShaderCache:S,programs:c,dispose:b}}function Wv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Xv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function $d(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,g,y,p,m){let T=n[e];return T===void 0?(T={id:f.id,object:f,geometry:d,material:g,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:p,group:m},n[e]=T):(T.id=f.id,T.object=f,T.geometry=d,T.material=g,T.materialVariant=o(f),T.groupOrder=y,T.renderOrder=f.renderOrder,T.z=p,T.group=m),e++,T}function l(f,d,g,y,p,m){let T=a(f,d,g,y,p,m);g.transmission>0?i.push(T):g.transparent===!0?s.push(T):t.push(T)}function c(f,d,g,y,p,m){let T=a(f,d,g,y,p,m);g.transmission>0?i.unshift(T):g.transparent===!0?s.unshift(T):t.unshift(T)}function h(f,d,g){t.length>1&&t.sort(f||Xv),i.length>1&&i.sort(d||$d),s.length>1&&s.sort(d||$d),g&&(t.reverse(),i.reverse(),s.reverse())}function u(){for(let f=e,d=n.length;f<d;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function qv(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Wd,n.set(i,[o])):s>=r.length?(o=new Wd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Yv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Be};break;case"SpotLight":t={position:new I,direction:new I,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function Zv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Kv=0;function Jv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jv(n){let e=new Yv,t=Zv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new ht,o=new ht;function a(c){let h=0,u=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,g=0,y=0,p=0,m=0,T=0,w=0,_=0,v=0,S=0,b=0;c.sort(Jv);for(let A=0,R=c.length;A<R;A++){let P=c[A],L=P.color,k=P.intensity,z=P.distance,N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Bi?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=L.r*k,u+=L.g*k,f+=L.b*k;else if(P.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(P.sh.coefficients[V],k);b++}else if(P.isDirectionalLight){let V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let F=P.shadow,X=t.get(P);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,i.directionalShadow[d]=X,i.directionalShadowMap[d]=N,i.directionalShadowMatrix[d]=P.shadow.matrix,T++}i.directional[d]=V,d++}else if(P.isSpotLight){let V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(L).multiplyScalar(k),V.distance=z,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,i.spot[y]=V;let F=P.shadow;if(P.map&&(i.spotLightMap[v]=P.map,v++,F.updateMatrices(P),P.castShadow&&S++),i.spotLightMatrix[y]=F.matrix,P.castShadow){let X=t.get(P);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,i.spotShadow[y]=X,i.spotShadowMap[y]=N,_++}y++}else if(P.isRectAreaLight){let V=e.get(P);V.color.copy(L).multiplyScalar(k),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=V,p++}else if(P.isPointLight){let V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){let F=P.shadow,X=t.get(P);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,X.shadowCameraNear=F.camera.near,X.shadowCameraFar=F.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=P.shadow.matrix,w++}i.point[g]=V,g++}else if(P.isHemisphereLight){let V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(k),V.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[m]=V,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let x=i.hash;(x.directionalLength!==d||x.pointLength!==g||x.spotLength!==y||x.rectAreaLength!==p||x.hemiLength!==m||x.numDirectionalShadows!==T||x.numPointShadows!==w||x.numSpotShadows!==_||x.numSpotMaps!==v||x.numLightProbes!==b)&&(i.directional.length=d,i.spot.length=y,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=_+v-S,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=b,x.directionalLength=d,x.pointLength=g,x.spotLength=y,x.rectAreaLength=p,x.hemiLength=m,x.numDirectionalShadows=T,x.numPointShadows=w,x.numSpotShadows=_,x.numSpotMaps=v,x.numLightProbes=b,i.version=Kv++)}function l(c,h){let u=0,f=0,d=0,g=0,y=0,p=h.matrixWorldInverse;for(let m=0,T=c.length;m<T;m++){let w=c[m];if(w.isDirectionalLight){let _=i.directional[u];_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),u++}else if(w.isSpotLight){let _=i.spot[d];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),d++}else if(w.isRectAreaLight){let _=i.rectArea[g];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(p),o.identity(),r.copy(w.matrixWorld),r.premultiply(p),o.extractRotation(r),_.halfWidth.set(w.width*.5,0,0),_.halfHeight.set(0,w.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(p),f++}else if(w.isHemisphereLight){let _=i.hemi[y];_.direction.setFromMatrixPosition(w.matrixWorld),_.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:i}}function Xd(n){let e=new jv(n),t=[],i=[],s=[];function r(f){u.camera=f,t.length=0,i.length=0,s.length=0}function o(f){t.push(f)}function a(f){i.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Qv(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Xd(n),e.set(s,[a])):r>=o.length?(a=new Xd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var eM=`void main() {
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
}`,nM=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],iM=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],qd=new ht,ro=new I,Th=new I;function sM(n,e,t){let i=new Vs,s=new he,r=new he,o=new bt,a=new ba,l=new Sa,c={},h=t.maxTextureSize,u={[ti]:Vt,[Vt]:ti,[tn]:tn},f=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:eM,fragmentShader:tM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ft;g.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new at(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yr;let m=this.type;this.render=function(S,b,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===Oa&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Yr);let A=n.getRenderTarget(),R=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Gn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let k=m!==this.type;k&&b.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(N=>N.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,N=S.length;z<N;z++){let V=S[z],F=V.shadow;if(F===void 0){He("WebGLShadowMap:",V,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let X=F.getFrameExtents();s.multiply(X),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,F.mapSize.y=r.y));let J=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=J,F.map===null||k===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===qs){if(V.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new hn(s.x,s.y,{format:Bi,type:Wn,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),F.map.texture.name=V.name+".shadowMap",F.map.depthTexture=new si(s.x,s.y,Sn),F.map.depthTexture.name=V.name+".shadowMapDepth",F.map.depthTexture.format=zn,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Lt,F.map.depthTexture.magFilter=Lt}else V.isPointLight?(F.map=new Rl(s.x),F.map.depthTexture=new pa(s.x,Dn)):(F.map=new hn(s.x,s.y),F.map.depthTexture=new si(s.x,s.y,Dn)),F.map.depthTexture.name=V.name+".shadowMap",F.map.depthTexture.format=zn,this.type===Yr?(F.map.depthTexture.compareFunction=J?El:Tl,F.map.depthTexture.minFilter=Dt,F.map.depthTexture.magFilter=Dt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Lt,F.map.depthTexture.magFilter=Lt);F.camera.updateProjectionMatrix()}let le=F.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<le;re++){if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,re),n.clear();else{re===0&&(n.setRenderTarget(F.map),n.clear());let ne=F.getViewport(re);o.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),L.viewport(o)}if(V.isPointLight){let ne=F.camera,fe=F.matrix,ue=V.distance||ne.far;ue!==ne.far&&(ne.far=ue,ne.updateProjectionMatrix()),ro.setFromMatrixPosition(V.matrixWorld),ne.position.copy(ro),Th.copy(ne.position),Th.add(nM[re]),ne.up.copy(iM[re]),ne.lookAt(Th),ne.updateMatrixWorld(),fe.makeTranslation(-ro.x,-ro.y,-ro.z),qd.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),F._frustum.setFromProjectionMatrix(qd,ne.coordinateSystem,ne.reversedDepth)}else F.updateMatrices(V);i=F.getFrustum(),_(b,x,F.camera,V,this.type)}F.isPointLightShadow!==!0&&this.type===qs&&T(F,x),F.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(A,R,P)};function T(S,b){let x=e.update(y);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new hn(s.x,s.y,{format:Bi,type:Wn})),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(b,null,x,f,y,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(b,null,x,d,y,null)}function w(S,b,x,A){let R=null,P=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)R=P;else if(R=x.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let L=R.uuid,k=b.uuid,z=c[L];z===void 0&&(z={},c[L]=z);let N=z[k];N===void 0&&(N=R.clone(),z[k]=N,b.addEventListener("dispose",v)),R=N}if(R.visible=b.visible,R.wireframe=b.wireframe,A===qs?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:u[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,R.map=b.map,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=n.properties.get(R);L.light=x}return R}function _(S,b,x,A,R){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===qs)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let k=e.update(S),z=S.material;if(Array.isArray(z)){let N=k.groups;for(let V=0,F=N.length;V<F;V++){let X=N[V],J=z[X.materialIndex];if(J&&J.visible){let le=w(S,J,A,R);S.onBeforeShadow(n,S,b,x,k,le,X),n.renderBufferDirect(x,null,k,le,S,X),S.onAfterShadow(n,S,b,x,k,le,X)}}}else if(z.visible){let N=w(S,z,A,R);S.onBeforeShadow(n,S,b,x,k,N,null),n.renderBufferDirect(x,null,k,N,S,null),S.onAfterShadow(n,S,b,x,k,N,null)}}let L=S.children;for(let k=0,z=L.length;k<z;k++)_(L[k],b,x,A,R)}function v(S){S.target.removeEventListener("dispose",v);for(let x in c){let A=c[x],R=S.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function rM(n,e){function t(){let U=!1,Me=new bt,te=null,we=new bt(0,0,0,0);return{setMask:function(Re){te!==Re&&!U&&(n.colorMask(Re,Re,Re,Re),te=Re)},setLocked:function(Re){U=Re},setClear:function(Re,oe,Oe,De,Et){Et===!0&&(Re*=De,oe*=De,Oe*=De),Me.set(Re,oe,Oe,De),we.equals(Me)===!1&&(n.clearColor(Re,oe,Oe,De),we.copy(Me))},reset:function(){U=!1,te=null,we.set(-1,0,0,0)}}}function i(){let U=!1,Me=!1,te=null,we=null,Re=null;return{setReversed:function(oe){if(Me!==oe){let Oe=e.get("EXT_clip_control");oe?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),Me=oe;let De=Re;Re=null,this.setClear(De)}},getReversed:function(){return Me},setTest:function(oe){oe?j(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(oe){te!==oe&&!U&&(n.depthMask(oe),te=oe)},setFunc:function(oe){if(Me&&(oe=yd[oe]),we!==oe){switch(oe){case ta:n.depthFunc(n.NEVER);break;case na:n.depthFunc(n.ALWAYS);break;case ia:n.depthFunc(n.LESS);break;case ji:n.depthFunc(n.LEQUAL);break;case sa:n.depthFunc(n.EQUAL);break;case ra:n.depthFunc(n.GEQUAL);break;case oa:n.depthFunc(n.GREATER);break;case aa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}we=oe}},setLocked:function(oe){U=oe},setClear:function(oe){Re!==oe&&(Re=oe,Me&&(oe=1-oe),n.clearDepth(oe))},reset:function(){U=!1,te=null,we=null,Re=null,Me=!1}}}function s(){let U=!1,Me=null,te=null,we=null,Re=null,oe=null,Oe=null,De=null,Et=null;return{setTest:function(vt){U||(vt?j(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(vt){Me!==vt&&!U&&(n.stencilMask(vt),Me=vt)},setFunc:function(vt,Fn,On){(te!==vt||we!==Fn||Re!==On)&&(n.stencilFunc(vt,Fn,On),te=vt,we=Fn,Re=On)},setOp:function(vt,Fn,On){(oe!==vt||Oe!==Fn||De!==On)&&(n.stencilOp(vt,Fn,On),oe=vt,Oe=Fn,De=On)},setLocked:function(vt){U=vt},setClear:function(vt){Et!==vt&&(n.clearStencil(vt),Et=vt)},reset:function(){U=!1,Me=null,te=null,we=null,Re=null,oe=null,Oe=null,De=null,Et=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,g=[],y=null,p=!1,m=null,T=null,w=null,_=null,v=null,S=null,b=null,x=new Be(0,0,0),A=0,R=!1,P=null,L=null,k=null,z=null,N=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,X=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(J)[1]),F=X>=1):J.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),F=X>=2);let le=null,re={},ne=n.getParameter(n.SCISSOR_BOX),fe=n.getParameter(n.VIEWPORT),ue=new bt().fromArray(ne),pe=new bt().fromArray(fe);function H(U,Me,te,we){let Re=new Uint8Array(4),oe=n.createTexture();n.bindTexture(U,oe),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<te;Oe++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,we,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(Me+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return oe}let K={};K[n.TEXTURE_2D]=H(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=H(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=H(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=H(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(n.DEPTH_TEST),o.setFunc(ji),ye(!1),_e(Zc),j(n.CULL_FACE),ie(Gn);function j(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function ge(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Ee(U,Me){return f[U]!==Me?(n.bindFramebuffer(U,Me),f[U]=Me,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Me),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function Pe(U,Me){let te=g,we=!1;if(U){te=d.get(Me),te===void 0&&(te=[],d.set(Me,te));let Re=U.textures;if(te.length!==Re.length||te[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Oe=Re.length;oe<Oe;oe++)te[oe]=n.COLOR_ATTACHMENT0+oe;te.length=Re.length,we=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,we=!0);we&&n.drawBuffers(te)}function We(U){return y!==U?(n.useProgram(U),y=U,!0):!1}let xe={[Ci]:n.FUNC_ADD,[Hf]:n.FUNC_SUBTRACT,[Gf]:n.FUNC_REVERSE_SUBTRACT};xe[$f]=n.MIN,xe[Wf]=n.MAX;let Q={[Xf]:n.ZERO,[qf]:n.ONE,[Yf]:n.SRC_COLOR,[Qo]:n.SRC_ALPHA,[ed]:n.SRC_ALPHA_SATURATE,[jf]:n.DST_COLOR,[Kf]:n.DST_ALPHA,[Zf]:n.ONE_MINUS_SRC_COLOR,[ea]:n.ONE_MINUS_SRC_ALPHA,[Qf]:n.ONE_MINUS_DST_COLOR,[Jf]:n.ONE_MINUS_DST_ALPHA,[td]:n.CONSTANT_COLOR,[nd]:n.ONE_MINUS_CONSTANT_COLOR,[id]:n.CONSTANT_ALPHA,[sd]:n.ONE_MINUS_CONSTANT_ALPHA};function ie(U,Me,te,we,Re,oe,Oe,De,Et,vt){if(U===Gn){p===!0&&(ge(n.BLEND),p=!1);return}if(p===!1&&(j(n.BLEND),p=!0),U!==Vf){if(U!==m||vt!==R){if((T!==Ci||v!==Ci)&&(n.blendEquation(n.FUNC_ADD),T=Ci,v=Ci),vt)switch(U){case Ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFunc(n.ONE,n.ONE);break;case Jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ye("WebGLState: Invalid blending: ",U);break}else switch(U){case Ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Jc:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jc:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",U);break}w=null,_=null,S=null,b=null,x.set(0,0,0),A=0,m=U,R=vt}return}Re=Re||Me,oe=oe||te,Oe=Oe||we,(Me!==T||Re!==v)&&(n.blendEquationSeparate(xe[Me],xe[Re]),T=Me,v=Re),(te!==w||we!==_||oe!==S||Oe!==b)&&(n.blendFuncSeparate(Q[te],Q[we],Q[oe],Q[Oe]),w=te,_=we,S=oe,b=Oe),(De.equals(x)===!1||Et!==A)&&(n.blendColor(De.r,De.g,De.b,Et),x.copy(De),A=Et),m=U,R=!1}function se(U,Me){U.side===tn?ge(n.CULL_FACE):j(n.CULL_FACE);let te=U.side===Vt;Me&&(te=!te),ye(te),U.blending===Ji&&U.transparent===!1?ie(Gn):ie(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let we=U.stencilWrite;a.setTest(we),we&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Le(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function ye(U){P!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),P=U)}function _e(U){U!==kf?(j(n.CULL_FACE),U!==L&&(U===Zc?n.cullFace(n.BACK):U===zf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),L=U}function ke(U){U!==k&&(F&&n.lineWidth(U),k=U)}function Le(U,Me,te){U?(j(n.POLYGON_OFFSET_FILL),(z!==Me||N!==te)&&(z=Me,N=te,o.getReversed()&&(Me=-Me),n.polygonOffset(Me,te))):ge(n.POLYGON_OFFSET_FILL)}function Ge(U){U?j(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function Ze(U){U===void 0&&(U=n.TEXTURE0+V-1),le!==U&&(n.activeTexture(U),le=U)}function D(U,Me,te){te===void 0&&(le===null?te=n.TEXTURE0+V-1:te=le);let we=re[te];we===void 0&&(we={type:void 0,texture:void 0},re[te]=we),(we.type!==U||we.texture!==Me)&&(le!==te&&(n.activeTexture(te),le=te),n.bindTexture(U,Me||K[U]),we.type=U,we.texture=Me)}function lt(){let U=re[le];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function je(){try{n.compressedTexImage2D(...arguments)}catch(U){Ye("WebGLState:",U)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(U){Ye("WebGLState:",U)}}function M(){try{n.texSubImage2D(...arguments)}catch(U){Ye("WebGLState:",U)}}function B(){try{n.texSubImage3D(...arguments)}catch(U){Ye("WebGLState:",U)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(U){Ye("WebGLState:",U)}}function Y(){try{n.compressedTexSubImage3D(...arguments)}catch(U){Ye("WebGLState:",U)}}function de(){try{n.texStorage2D(...arguments)}catch(U){Ye("WebGLState:",U)}}function me(){try{n.texStorage3D(...arguments)}catch(U){Ye("WebGLState:",U)}}function Z(){try{n.texImage2D(...arguments)}catch(U){Ye("WebGLState:",U)}}function ee(){try{n.texImage3D(...arguments)}catch(U){Ye("WebGLState:",U)}}function ve(U){return u[U]!==void 0?u[U]:n.getParameter(U)}function Fe(U,Me){u[U]!==Me&&(n.pixelStorei(U,Me),u[U]=Me)}function be(U){ue.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ue.copy(U))}function Se(U){pe.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),pe.copy(U))}function $e(U,Me){let te=c.get(Me);te===void 0&&(te=new WeakMap,c.set(Me,te));let we=te.get(U);we===void 0&&(we=n.getUniformBlockIndex(Me,U.name),te.set(U,we))}function qe(U,Me){let we=c.get(Me).get(U);l.get(Me)!==we&&(n.uniformBlockBinding(Me,we,U.__bindingPointIndex),l.set(Me,we))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},le=null,re={},f={},d=new WeakMap,g=[],y=null,p=!1,m=null,T=null,w=null,_=null,v=null,S=null,b=null,x=new Be(0,0,0),A=0,R=!1,P=null,L=null,k=null,z=null,N=null,ue.set(0,0,n.canvas.width,n.canvas.height),pe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:ge,bindFramebuffer:Ee,drawBuffers:Pe,useProgram:We,setBlending:ie,setMaterial:se,setFlipSided:ye,setCullFace:_e,setLineWidth:ke,setPolygonOffset:Le,setScissorTest:Ge,activeTexture:Ze,bindTexture:D,unbindTexture:lt,compressedTexImage2D:je,compressedTexImage3D:C,texImage2D:Z,texImage3D:ee,pixelStorei:Fe,getParameter:ve,updateUBOMapping:$e,uniformBlockBinding:qe,texStorage2D:de,texStorage3D:me,texSubImage2D:M,texSubImage3D:B,compressedTexSubImage2D:G,compressedTexSubImage3D:Y,scissor:be,viewport:Se,reset:Ke}}function oM(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,u=new Set,f,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,M){return g?new OffscreenCanvas(C,M):_r("canvas")}function p(C,M,B){let G=1,Y=je(C);if((Y.width>B||Y.height>B)&&(G=B/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let de=Math.floor(G*Y.width),me=Math.floor(G*Y.height);f===void 0&&(f=y(de,me));let Z=M?y(de,me):f;return Z.width=de,Z.height=me,Z.getContext("2d").drawImage(C,0,0,de,me),He("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+de+"x"+me+")."),Z}else return"data"in C&&He("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),C;return C}function m(C){return C.generateMipmaps}function T(C){n.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(C,M,B,G,Y,de=!1){if(C!==null){if(n[C]!==void 0)return n[C];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let me;G&&(me=e.get("EXT_texture_norm16"),me||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=M;if(M===n.RED&&(B===n.FLOAT&&(Z=n.R32F),B===n.HALF_FLOAT&&(Z=n.R16F),B===n.UNSIGNED_BYTE&&(Z=n.R8),B===n.UNSIGNED_SHORT&&me&&(Z=me.R16_EXT),B===n.SHORT&&me&&(Z=me.R16_SNORM_EXT)),M===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.R8UI),B===n.UNSIGNED_SHORT&&(Z=n.R16UI),B===n.UNSIGNED_INT&&(Z=n.R32UI),B===n.BYTE&&(Z=n.R8I),B===n.SHORT&&(Z=n.R16I),B===n.INT&&(Z=n.R32I)),M===n.RG&&(B===n.FLOAT&&(Z=n.RG32F),B===n.HALF_FLOAT&&(Z=n.RG16F),B===n.UNSIGNED_BYTE&&(Z=n.RG8),B===n.UNSIGNED_SHORT&&me&&(Z=me.RG16_EXT),B===n.SHORT&&me&&(Z=me.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RG8UI),B===n.UNSIGNED_SHORT&&(Z=n.RG16UI),B===n.UNSIGNED_INT&&(Z=n.RG32UI),B===n.BYTE&&(Z=n.RG8I),B===n.SHORT&&(Z=n.RG16I),B===n.INT&&(Z=n.RG32I)),M===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),B===n.UNSIGNED_INT&&(Z=n.RGB32UI),B===n.BYTE&&(Z=n.RGB8I),B===n.SHORT&&(Z=n.RGB16I),B===n.INT&&(Z=n.RGB32I)),M===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),B===n.UNSIGNED_INT&&(Z=n.RGBA32UI),B===n.BYTE&&(Z=n.RGBA8I),B===n.SHORT&&(Z=n.RGBA16I),B===n.INT&&(Z=n.RGBA32I)),M===n.RGB&&(B===n.UNSIGNED_SHORT&&me&&(Z=me.RGB16_EXT),B===n.SHORT&&me&&(Z=me.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),M===n.RGBA){let ee=de?yr:nt.getTransfer(Y);B===n.FLOAT&&(Z=n.RGBA32F),B===n.HALF_FLOAT&&(Z=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Z=ee===ft?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&me&&(Z=me.RGBA16_EXT),B===n.SHORT&&me&&(Z=me.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(C,M){let B;return C?M===null||M===Dn||M===Ks?B=n.DEPTH24_STENCIL8:M===Sn?B=n.DEPTH32F_STENCIL8:M===Zs&&(B=n.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Dn||M===Ks?B=n.DEPTH_COMPONENT24:M===Sn?B=n.DEPTH_COMPONENT32F:M===Zs&&(B=n.DEPTH_COMPONENT16),B}function S(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Lt&&C.minFilter!==Dt?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function b(C){let M=C.target;M.removeEventListener("dispose",b),A(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&u.delete(M)}function x(C){let M=C.target;M.removeEventListener("dispose",x),P(M)}function A(C){let M=i.get(C);if(M.__webglInit===void 0)return;let B=C.source,G=d.get(B);if(G){let Y=G[M.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&R(C),Object.keys(G).length===0&&d.delete(B)}i.remove(C)}function R(C){let M=i.get(C);n.deleteTexture(M.__webglTexture);let B=C.source,G=d.get(B);delete G[M.__cacheKey],o.memory.textures--}function P(C){let M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(M.__webglFramebuffer[G]))for(let Y=0;Y<M.__webglFramebuffer[G].length;Y++)n.deleteFramebuffer(M.__webglFramebuffer[G][Y]);else n.deleteFramebuffer(M.__webglFramebuffer[G]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[G])}else{if(Array.isArray(M.__webglFramebuffer))for(let G=0;G<M.__webglFramebuffer.length;G++)n.deleteFramebuffer(M.__webglFramebuffer[G]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let G=0;G<M.__webglColorRenderbuffer.length;G++)M.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[G]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let B=C.textures;for(let G=0,Y=B.length;G<Y;G++){let de=i.get(B[G]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(B[G])}i.remove(C)}let L=0;function k(){L=0}function z(){return L}function N(C){L=C}function V(){let C=L;return C>=s.maxTextures&&He("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function F(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function X(C,M){let B=i.get(C);if(C.isVideoTexture&&D(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){let G=C.image;if(G===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(B,C,M);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+M)}function J(C,M){let B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){ge(B,C,M);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+M)}function le(C,M){let B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){ge(B,C,M);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+M)}function re(C,M){let B=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){Ee(B,C,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+M)}let ne={[Ls]:n.REPEAT,[Mn]:n.CLAMP_TO_EDGE,[Ns]:n.MIRRORED_REPEAT},fe={[Lt]:n.NEAREST,[Va]:n.NEAREST_MIPMAP_NEAREST,[ss]:n.NEAREST_MIPMAP_LINEAR,[Dt]:n.LINEAR,[Ys]:n.LINEAR_MIPMAP_NEAREST,[$n]:n.LINEAR_MIPMAP_LINEAR},ue={[cd]:n.NEVER,[pd]:n.ALWAYS,[hd]:n.LESS,[Tl]:n.LEQUAL,[ud]:n.EQUAL,[El]:n.GEQUAL,[fd]:n.GREATER,[dd]:n.NOTEQUAL};function pe(C,M){if(M.type===Sn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Dt||M.magFilter===Ys||M.magFilter===ss||M.magFilter===$n||M.minFilter===Dt||M.minFilter===Ys||M.minFilter===ss||M.minFilter===$n)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ne[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ne[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ne[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,fe[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,fe[M.minFilter]),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Lt||M.minFilter!==ss&&M.minFilter!==$n||M.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function H(C,M){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",b));let G=M.source,Y=d.get(G);Y===void 0&&(Y={},d.set(G,Y));let de=F(M);if(de!==C.__cacheKey){Y[de]===void 0&&(Y[de]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Y[de].usedTimes++;let me=Y[C.__cacheKey];me!==void 0&&(Y[C.__cacheKey].usedTimes--,me.usedTimes===0&&R(M)),C.__cacheKey=de,C.__webglTexture=Y[de].texture}return B}function K(C,M,B){return Math.floor(Math.floor(C/B)/M)}function j(C,M,B,G){let de=C.updateRanges;if(de.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,B,G,M.data);else{de.sort((Fe,be)=>Fe.start-be.start);let me=0;for(let Fe=1;Fe<de.length;Fe++){let be=de[me],Se=de[Fe],$e=be.start+be.count,qe=K(Se.start,M.width,4),Ke=K(be.start,M.width,4);Se.start<=$e+1&&qe===Ke&&K(Se.start+Se.count-1,M.width,4)===qe?be.count=Math.max(be.count,Se.start+Se.count-be.start):(++me,de[me]=Se)}de.length=me+1;let Z=t.getParameter(n.UNPACK_ROW_LENGTH),ee=t.getParameter(n.UNPACK_SKIP_PIXELS),ve=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let Fe=0,be=de.length;Fe<be;Fe++){let Se=de[Fe],$e=Math.floor(Se.start/4),qe=Math.ceil(Se.count/4),Ke=$e%M.width,U=Math.floor($e/M.width),Me=qe,te=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ke),t.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Ke,U,Me,te,B,G,M.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Z),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(n.UNPACK_SKIP_ROWS,ve)}}function ge(C,M,B){let G=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(G=n.TEXTURE_3D);let Y=H(C,M),de=M.source;t.bindTexture(G,C.__webglTexture,n.TEXTURE0+B);let me=i.get(de);if(de.version!==me.__version||Y===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let te=nt.getPrimaries(nt.workingColorSpace),we=M.colorSpace===pn?null:nt.getPrimaries(M.colorSpace),Re=M.colorSpace===pn||te===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let ee=p(M.image,!1,s.maxTextureSize);ee=lt(M,ee);let ve=r.convert(M.format,M.colorSpace),Fe=r.convert(M.type),be=_(M.internalFormat,ve,Fe,M.normalized,M.colorSpace,M.isVideoTexture);pe(G,M);let Se,$e=M.mipmaps,qe=M.isVideoTexture!==!0,Ke=me.__version===void 0||Y===!0,U=de.dataReady,Me=S(M,ee);if(M.isDepthTexture)be=v(M.format===Oi,M.type),Ke&&(qe?t.texStorage2D(n.TEXTURE_2D,1,be,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,be,ee.width,ee.height,0,ve,Fe,null));else if(M.isDataTexture)if($e.length>0){qe&&Ke&&t.texStorage2D(n.TEXTURE_2D,Me,be,$e[0].width,$e[0].height);for(let te=0,we=$e.length;te<we;te++)Se=$e[te],qe?U&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Se.width,Se.height,ve,Fe,Se.data):t.texImage2D(n.TEXTURE_2D,te,be,Se.width,Se.height,0,ve,Fe,Se.data);M.generateMipmaps=!1}else qe?(Ke&&t.texStorage2D(n.TEXTURE_2D,Me,be,ee.width,ee.height),U&&j(M,ee,ve,Fe)):t.texImage2D(n.TEXTURE_2D,0,be,ee.width,ee.height,0,ve,Fe,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qe&&Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,be,$e[0].width,$e[0].height,ee.depth);for(let te=0,we=$e.length;te<we;te++)if(Se=$e[te],M.format!==sn)if(ve!==null)if(qe){if(U)if(M.layerUpdates.size>0){let Re=_h(Se.width,Se.height,M.format,M.type);for(let oe of M.layerUpdates){let Oe=Se.data.subarray(oe*Re/Se.data.BYTES_PER_ELEMENT,(oe+1)*Re/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,oe,Se.width,Se.height,1,ve,Oe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Se.width,Se.height,ee.depth,ve,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,be,Se.width,Se.height,ee.depth,0,Se.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Se.width,Se.height,ee.depth,ve,Fe,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,be,Se.width,Se.height,ee.depth,0,ve,Fe,Se.data)}else{qe&&Ke&&t.texStorage2D(n.TEXTURE_2D,Me,be,$e[0].width,$e[0].height);for(let te=0,we=$e.length;te<we;te++)Se=$e[te],M.format!==sn?ve!==null?qe?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,Se.width,Se.height,ve,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,te,be,Se.width,Se.height,0,Se.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?U&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Se.width,Se.height,ve,Fe,Se.data):t.texImage2D(n.TEXTURE_2D,te,be,Se.width,Se.height,0,ve,Fe,Se.data)}else if(M.isDataArrayTexture)if(qe){if(Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,be,ee.width,ee.height,ee.depth),U)if(M.layerUpdates.size>0){let te=_h(ee.width,ee.height,M.format,M.type);for(let we of M.layerUpdates){let Re=ee.data.subarray(we*te/ee.data.BYTES_PER_ELEMENT,(we+1)*te/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,we,ee.width,ee.height,1,ve,Fe,Re)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ve,Fe,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,ee.width,ee.height,ee.depth,0,ve,Fe,ee.data);else if(M.isData3DTexture)qe?(Ke&&t.texStorage3D(n.TEXTURE_3D,Me,be,ee.width,ee.height,ee.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ve,Fe,ee.data)):t.texImage3D(n.TEXTURE_3D,0,be,ee.width,ee.height,ee.depth,0,ve,Fe,ee.data);else if(M.isFramebufferTexture){if(Ke)if(qe)t.texStorage2D(n.TEXTURE_2D,Me,be,ee.width,ee.height);else{let te=ee.width,we=ee.height;for(let Re=0;Re<Me;Re++)t.texImage2D(n.TEXTURE_2D,Re,be,te,we,0,ve,Fe,null),te>>=1,we>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){let te=n.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ee.parentNode!==te){te.appendChild(ee),u.add(M),te.onpaint=we=>{let Re=we.changedElements;for(let oe of u)Re.includes(oe.image)&&(oe.needsUpdate=!0)},te.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ee);else{let Re=n.RGBA,oe=n.RGBA,Oe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Re,oe,Oe,ee)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if($e.length>0){if(qe&&Ke){let te=je($e[0]);t.texStorage2D(n.TEXTURE_2D,Me,be,te.width,te.height)}for(let te=0,we=$e.length;te<we;te++)Se=$e[te],qe?U&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ve,Fe,Se):t.texImage2D(n.TEXTURE_2D,te,be,ve,Fe,Se);M.generateMipmaps=!1}else if(qe){if(Ke){let te=je(ee);t.texStorage2D(n.TEXTURE_2D,Me,be,te.width,te.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Fe,ee)}else t.texImage2D(n.TEXTURE_2D,0,be,ve,Fe,ee);m(M)&&T(G),me.__version=de.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ee(C,M,B){if(M.image.length!==6)return;let G=H(C,M),Y=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+B);let de=i.get(Y);if(Y.version!==de.__version||G===!0){t.activeTexture(n.TEXTURE0+B);let me=nt.getPrimaries(nt.workingColorSpace),Z=M.colorSpace===pn?null:nt.getPrimaries(M.colorSpace),ee=M.colorSpace===pn||me===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ve=M.isCompressedTexture||M.image[0].isCompressedTexture,Fe=M.image[0]&&M.image[0].isDataTexture,be=[];for(let oe=0;oe<6;oe++)!ve&&!Fe?be[oe]=p(M.image[oe],!0,s.maxCubemapSize):be[oe]=Fe?M.image[oe].image:M.image[oe],be[oe]=lt(M,be[oe]);let Se=be[0],$e=r.convert(M.format,M.colorSpace),qe=r.convert(M.type),Ke=_(M.internalFormat,$e,qe,M.normalized,M.colorSpace),U=M.isVideoTexture!==!0,Me=de.__version===void 0||G===!0,te=Y.dataReady,we=S(M,Se);pe(n.TEXTURE_CUBE_MAP,M);let Re;if(ve){U&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,we,Ke,Se.width,Se.height);for(let oe=0;oe<6;oe++){Re=be[oe].mipmaps;for(let Oe=0;Oe<Re.length;Oe++){let De=Re[Oe];M.format!==sn?$e!==null?U?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe,0,0,De.width,De.height,$e,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe,Ke,De.width,De.height,0,De.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe,0,0,De.width,De.height,$e,qe,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe,Ke,De.width,De.height,0,$e,qe,De.data)}}}else{if(Re=M.mipmaps,U&&Me){Re.length>0&&we++;let oe=je(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,we,Ke,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Fe){U?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,be[oe].width,be[oe].height,$e,qe,be[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ke,be[oe].width,be[oe].height,0,$e,qe,be[oe].data);for(let Oe=0;Oe<Re.length;Oe++){let Et=Re[Oe].image[oe].image;U?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe+1,0,0,Et.width,Et.height,$e,qe,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe+1,Ke,Et.width,Et.height,0,$e,qe,Et.data)}}else{U?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,$e,qe,be[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ke,$e,qe,be[oe]);for(let Oe=0;Oe<Re.length;Oe++){let De=Re[Oe];U?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe+1,0,0,$e,qe,De.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Oe+1,Ke,$e,qe,De.image[oe])}}}m(M)&&T(n.TEXTURE_CUBE_MAP),de.__version=Y.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Pe(C,M,B,G,Y,de){let me=r.convert(B.format,B.colorSpace),Z=r.convert(B.type),ee=_(B.internalFormat,me,Z,B.normalized,B.colorSpace),ve=i.get(M),Fe=i.get(B);if(Fe.__renderTarget=M,!ve.__hasExternalTextures){let be=Math.max(1,M.width>>de),Se=Math.max(1,M.height>>de);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,de,ee,be,Se,M.depth,0,me,Z,null):t.texImage2D(Y,de,ee,be,Se,0,me,Z,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ze(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,Y,Fe.__webglTexture,0,Ge(M)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,Y,Fe.__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(C,M,B){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer){let G=M.depthTexture,Y=G&&G.isDepthTexture?G.type:null,de=v(M.stencilBuffer,Y),me=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ze(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge(M),de,M.width,M.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge(M),de,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,de,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,C)}else{let G=M.textures;for(let Y=0;Y<G.length;Y++){let de=G[Y],me=r.convert(de.format,de.colorSpace),Z=r.convert(de.type),ee=_(de.internalFormat,me,Z,de.normalized,de.colorSpace);Ze(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge(M),ee,M.width,M.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge(M),ee,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ee,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xe(C,M,B){let G=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=i.get(M.depthTexture);if(Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,M.depthTexture.addEventListener("dispose",b)),Y.__webglTexture===void 0){Y.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),pe(n.TEXTURE_CUBE_MAP,M.depthTexture);let ve=r.convert(M.depthTexture.format),Fe=r.convert(M.depthTexture.type),be;M.depthTexture.format===zn?be=n.DEPTH_COMPONENT24:M.depthTexture.format===Oi&&(be=n.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,be,M.width,M.height,0,ve,Fe,null)}}else X(M.depthTexture,0);let de=Y.__webglTexture,me=Ge(M),Z=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,ee=M.depthTexture.format===Oi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===zn)Ze(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,Z,de,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,ee,Z,de,0);else if(M.depthTexture.format===Oi)Ze(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,Z,de,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,ee,Z,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Q(C){let M=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let G=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),G){let Y=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),M.__depthDisposeCallback=Y}M.__boundDepthTexture=G}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let G=0;G<6;G++)xe(M.__webglFramebuffer[G],C,G);else{let G=C.texture.mipmaps;G&&G.length>0?xe(M.__webglFramebuffer[0],C,0):xe(M.__webglFramebuffer,C,0)}else if(B){M.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[G]),M.__webglDepthbuffer[G]===void 0)M.__webglDepthbuffer[G]=n.createRenderbuffer(),We(M.__webglDepthbuffer[G],C,!1);else{let Y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=M.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,de)}}else{let G=C.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),We(M.__webglDepthbuffer,C,!1);else{let Y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,de)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(C,M,B){let G=i.get(C);M!==void 0&&Pe(G.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Q(C)}function se(C){let M=C.texture,B=i.get(C),G=i.get(M);C.addEventListener("dispose",x);let Y=C.textures,de=C.isWebGLCubeRenderTarget===!0,me=Y.length>1;if(me||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=M.version,o.memory.textures++),de){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let ee=0;ee<M.mipmaps.length;ee++)B.__webglFramebuffer[Z][ee]=n.createFramebuffer()}else B.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<M.mipmaps.length;Z++)B.__webglFramebuffer[Z]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(me)for(let Z=0,ee=Y.length;Z<ee;Z++){let ve=i.get(Y[Z]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Ze(C)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){let ee=Y[Z];B.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);let ve=r.convert(ee.format,ee.colorSpace),Fe=r.convert(ee.type),be=_(ee.internalFormat,ve,Fe,ee.normalized,ee.colorSpace,C.isXRRenderTarget===!0),Se=Ge(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,be,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),We(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),pe(n.TEXTURE_CUBE_MAP,M);for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)Pe(B.__webglFramebuffer[Z][ee],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ee);else Pe(B.__webglFramebuffer[Z],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(M)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let Z=0,ee=Y.length;Z<ee;Z++){let ve=Y[Z],Fe=i.get(ve),be=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(be=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,Fe.__webglTexture),pe(be,ve),Pe(B.__webglFramebuffer,C,ve,n.COLOR_ATTACHMENT0+Z,be,0),m(ve)&&T(be)}t.unbindTexture()}else{let Z=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,G.__webglTexture),pe(Z,M),M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)Pe(B.__webglFramebuffer[ee],C,M,n.COLOR_ATTACHMENT0,Z,ee);else Pe(B.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,Z,0);m(M)&&T(Z),t.unbindTexture()}C.depthBuffer&&Q(C)}function ye(C){let M=C.textures;for(let B=0,G=M.length;B<G;B++){let Y=M[B];if(m(Y)){let de=w(C),me=i.get(Y).__webglTexture;t.bindTexture(de,me),T(de),t.unbindTexture()}}}let _e=[],ke=[];function Le(C){if(C.samples>0){if(Ze(C)===!1){let M=C.textures,B=C.width,G=C.height,Y=n.COLOR_BUFFER_BIT,de=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(C),Z=M.length>1;if(Z)for(let ve=0;ve<M.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let ee=C.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[ve]);let Fe=i.get(M[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Fe,0)}n.blitFramebuffer(0,0,B,G,0,0,B,G,Y,n.NEAREST),l===!0&&(_e.length=0,ke.length=0,_e.push(n.COLOR_ATTACHMENT0+ve),C.depthBuffer&&C.resolveDepthBuffer===!1&&(_e.push(de),ke.push(de),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ke)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_e))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let ve=0;ve<M.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,me.__webglColorRenderbuffer[ve]);let Fe=i.get(M[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let M=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Ge(C){return Math.min(s.maxSamples,C.samples)}function Ze(C){let M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function D(C){let M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function lt(C,M){let B=C.colorSpace,G=C.format,Y=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==xr&&B!==pn&&(nt.getTransfer(B)===ft?(G!==sn||Y!==nn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",B)),M}function je(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.getTextureUnits=z,this.setTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=J,this.setTexture3D=le,this.setTextureCube=re,this.rebindTextures=ie,this.setupRenderTarget=se,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function aM(n,e){function t(i,s=pn){let r,o=nt.getTransfer(s);if(i===nn)return n.UNSIGNED_BYTE;if(i===Ga)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$a)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ch)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===oh)return n.BYTE;if(i===ah)return n.SHORT;if(i===Zs)return n.UNSIGNED_SHORT;if(i===Ha)return n.INT;if(i===Dn)return n.UNSIGNED_INT;if(i===Sn)return n.FLOAT;if(i===Wn)return n.HALF_FLOAT;if(i===hh)return n.ALPHA;if(i===uh)return n.RGB;if(i===sn)return n.RGBA;if(i===zn)return n.DEPTH_COMPONENT;if(i===Oi)return n.DEPTH_STENCIL;if(i===Wa)return n.RED;if(i===Xa)return n.RED_INTEGER;if(i===Bi)return n.RG;if(i===qa)return n.RG_INTEGER;if(i===Ya)return n.RGBA_INTEGER;if(i===Jr||i===jr||i===Qr||i===eo)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Za||i===Ka||i===Ja||i===ja)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qa||i===el||i===tl||i===nl||i===il||i===to||i===sl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Qa||i===el)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===tl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===nl)return r.COMPRESSED_R11_EAC;if(i===il)return r.COMPRESSED_SIGNED_R11_EAC;if(i===to)return r.COMPRESSED_RG11_EAC;if(i===sl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===rl||i===ol||i===al||i===ll||i===cl||i===hl||i===ul||i===fl||i===dl||i===pl||i===ml||i===gl||i===xl||i===yl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===rl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ol)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===al)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ll)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ul)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ml)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yl)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_l||i===vl||i===Ml)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===_l)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bl||i===Sl||i===no||i===wl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===bl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===no)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ks?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var lM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cM=`
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

}`,Nh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Rr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new fn({vertexShader:lM,fragmentShader:cM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new Br(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dh=class extends In{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,y=typeof XRWebGLBinding<"u",p=new Nh,m={},T=t.getContextAttributes(),w=null,_=null,v=[],S=[],b=new he,x=null,A=new Ht;A.viewport=new bt;let R=new Ht;R.viewport=new bt;let P=[A,R],L=new Fa,k=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let K=v[H];return K===void 0&&(K=new ks,v[H]=K),K.getTargetRaySpace()},this.getControllerGrip=function(H){let K=v[H];return K===void 0&&(K=new ks,v[H]=K),K.getGripSpace()},this.getHand=function(H){let K=v[H];return K===void 0&&(K=new ks,v[H]=K),K.getHandSpace()};function N(H){let K=S.indexOf(H.inputSource);if(K===-1)return;let j=v[K];j!==void 0&&(j.update(H.inputSource,H.frame,c||o),j.dispatchEvent({type:H.type,data:H.inputSource}))}function V(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",F);for(let H=0;H<v.length;H++){let K=S[H];K!==null&&(S[H]=null,v[H].disconnect(K))}k=null,z=null,p.reset();for(let H in m)delete m[H];e.setRenderTarget(w),d=null,f=null,u=null,s=null,_=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",V),s.addEventListener("inputsourceschange",F),T.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(b),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,ge=null,Ee=null;T.depth&&(Ee=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=T.stencil?Oi:zn,ge=T.stencil?Ks:Dn);let Pe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Pe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new hn(f.textureWidth,f.textureHeight,{format:sn,type:nn,depthTexture:new si(f.textureWidth,f.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let j={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new hn(d.framebufferWidth,d.framebufferHeight,{format:sn,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),pe.setContext(s),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function F(H){for(let K=0;K<H.removed.length;K++){let j=H.removed[K],ge=S.indexOf(j);ge>=0&&(S[ge]=null,v[ge].disconnect(j))}for(let K=0;K<H.added.length;K++){let j=H.added[K],ge=S.indexOf(j);if(ge===-1){for(let Pe=0;Pe<v.length;Pe++)if(Pe>=S.length){S.push(j),ge=Pe;break}else if(S[Pe]===null){S[Pe]=j,ge=Pe;break}if(ge===-1)break}let Ee=v[ge];Ee&&Ee.connect(j)}}let X=new I,J=new I;function le(H,K,j){X.setFromMatrixPosition(K.matrixWorld),J.setFromMatrixPosition(j.matrixWorld);let ge=X.distanceTo(J),Ee=K.projectionMatrix.elements,Pe=j.projectionMatrix.elements,We=Ee[14]/(Ee[10]-1),xe=Ee[14]/(Ee[10]+1),Q=(Ee[9]+1)/Ee[5],ie=(Ee[9]-1)/Ee[5],se=(Ee[8]-1)/Ee[0],ye=(Pe[8]+1)/Pe[0],_e=We*se,ke=We*ye,Le=ge/(-se+ye),Ge=Le*-se;if(K.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ge),H.translateZ(Le),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Ee[10]===-1)H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Ze=We+Le,D=xe+Le,lt=_e-Ge,je=ke+(ge-Ge),C=Q*xe/D*Ze,M=ie*xe/D*Ze;H.projectionMatrix.makePerspective(lt,je,C,M,Ze,D),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function re(H,K){K===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(K.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let K=H.near,j=H.far;p.texture!==null&&(p.depthNear>0&&(K=p.depthNear),p.depthFar>0&&(j=p.depthFar)),L.near=R.near=A.near=K,L.far=R.far=A.far=j,(k!==L.near||z!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),k=L.near,z=L.far),L.layers.mask=H.layers.mask|6,A.layers.mask=L.layers.mask&-5,R.layers.mask=L.layers.mask&-3;let ge=H.parent,Ee=L.cameras;re(L,ge);for(let Pe=0;Pe<Ee.length;Pe++)re(Ee[Pe],ge);Ee.length===2?le(L,A,R):L.projectionMatrix.copy(A.projectionMatrix),ne(H,L,ge)};function ne(H,K,j){j===null?H.matrix.copy(K.matrixWorld):(H.matrix.copy(j.matrixWorld),H.matrix.invert(),H.matrix.multiply(K.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Os*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(H){return m[H]};let fe=null;function ue(H,K){if(h=K.getViewerPose(c||o),g=K,h!==null){let j=h.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let ge=!1;j.length!==L.cameras.length&&(L.cameras.length=0,ge=!0);for(let xe=0;xe<j.length;xe++){let Q=j[xe],ie=null;if(d!==null)ie=d.getViewport(Q);else{let ye=u.getViewSubImage(f,Q);ie=ye.viewport,xe===0&&(e.setRenderTargetTextures(_,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(_))}let se=P[xe];se===void 0&&(se=new Ht,se.layers.enable(xe),se.viewport=new bt,P[xe]=se),se.matrix.fromArray(Q.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Q.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(ie.x,ie.y,ie.width,ie.height),xe===0&&(L.matrix.copy(se.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ge===!0&&L.cameras.push(se)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=i.getBinding();let xe=u.getDepthInformation(j[0]);xe&&xe.isValid&&xe.texture&&p.init(xe,s.renderState)}if(Ee&&Ee.includes("camera-access")&&y){e.state.unbindTexture(),u=i.getBinding();for(let xe=0;xe<j.length;xe++){let Q=j[xe].camera;if(Q){let ie=m[Q];ie||(ie=new Rr,m[Q]=ie);let se=u.getCameraImage(Q);ie.sourceTexture=se}}}}for(let j=0;j<v.length;j++){let ge=S[j],Ee=v[j];ge!==null&&Ee!==void 0&&Ee.update(ge,K,c||o)}fe&&fe(H,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}let pe=new Yd;pe.setAnimationLoop(ue),this.setAnimationLoop=function(H){fe=H},this.dispose=function(){}}},hM=new ht,ep=new Xe;ep.set(-1,0,0,0,1,0,0,0,1);function uM(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,gh(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,T,w,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,T,w):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Vt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Vt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let T=e.get(m),w=T.envMap,_=T.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(hM.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(ep),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,T,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=w*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,T){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Vt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let T=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function fM(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){let S=v.program;i.uniformBlockBinding(_,S)}function c(_,v){let S=s[_.id];S===void 0&&(p(_),S=h(_),s[_.id]=S,_.addEventListener("dispose",T));let b=v.program;i.updateUBOMapping(_,b);let x=e.render.frame;r[_.id]!==x&&(f(_),r[_.id]=x)}function h(_){let v=u();_.__bindingPointIndex=v;let S=n.createBuffer(),b=_.__size,x=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,b,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,S),S}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let v=s[_.id],S=_.uniforms,b=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let x=0,A=S.length;x<A;x++){let R=S[x];if(Array.isArray(R))for(let P=0,L=R.length;P<L;P++)d(R[P],x,P,b);else d(R,x,0,b)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(_,v,S,b){if(y(_,v,S,b)===!0){let x=_.__offset,A=_.value;if(Array.isArray(A)){let R=0;for(let P=0;P<A.length;P++){let L=A[P],k=m(L);g(L,_.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,_.__data)}}function g(_,v,S){typeof _=="number"||typeof _=="boolean"?v[0]=_:_.isMatrix3?(v[0]=_.elements[0],v[1]=_.elements[1],v[2]=_.elements[2],v[3]=0,v[4]=_.elements[3],v[5]=_.elements[4],v[6]=_.elements[5],v[7]=0,v[8]=_.elements[6],v[9]=_.elements[7],v[10]=_.elements[8],v[11]=0):ArrayBuffer.isView(_)?v.set(new _.constructor(_.buffer,_.byteOffset,v.length)):_.toArray(v,S)}function y(_,v,S,b){let x=_.value,A=v+"_"+S;if(b[A]===void 0)return typeof x=="number"||typeof x=="boolean"?b[A]=x:ArrayBuffer.isView(x)?b[A]=x.slice():b[A]=x.clone(),!0;{let R=b[A];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return b[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function p(_){let v=_.uniforms,S=0,b=16;for(let A=0,R=v.length;A<R;A++){let P=Array.isArray(v[A])?v[A]:[v[A]];for(let L=0,k=P.length;L<k;L++){let z=P[L],N=Array.isArray(z.value)?z.value:[z.value];for(let V=0,F=N.length;V<F;V++){let X=N[V],J=m(X),le=S%b,re=le%J.boundary,ne=le+re;S+=re,ne!==0&&b-ne<J.storage&&(S+=b-ne),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=J.storage}}}let x=S%b;return x>0&&(S+=b-x),_.__size=S,_.__cache={},this}function m(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):He("WebGLRenderer: Unsupported uniform value type.",_),v}function T(_){let v=_.target;v.removeEventListener("dispose",T);let S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function w(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:w}}var dM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xn=null;function pM(){return Xn===null&&(Xn=new wr(dM,16,16,Bi,Wn),Xn.name="DFG_LUT",Xn.minFilter=Dt,Xn.magFilter=Dt,Xn.wrapS=Mn,Xn.wrapT=Mn,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}var Pl=class{constructor(e={}){let{canvas:t=md(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=nn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let y=d,p=new Set([Ya,qa,Xa]),m=new Set([nn,Dn,Zs,Ks,Ga,$a]),T=new Uint32Array(4),w=new Int32Array(4),_=new I,v=null,S=null,b=[],x=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,L=null,k=null,z=null,N=null;this._outputColorSpace=It;let V=0,F=0,X=null,J=-1,le=null,re=new bt,ne=new bt,fe=null,ue=new Be(0),pe=0,H=t.width,K=t.height,j=1,ge=null,Ee=null,Pe=new bt(0,0,H,K),We=new bt(0,0,H,K),xe=!1,Q=new Vs,ie=!1,se=!1,ye=new ht,_e=new I,ke=new bt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function Ze(){return X===null?j:1}let D=i;function lt(E,O){return t.getContext(E,O)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",Fn,!1),D===null){let O="webgl2";if(D=lt(O,E),D===null)throw lt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw Ye("WebGLRenderer: "+E.message),E}let je,C,M,B,G,Y,de,me,Z,ee,ve,Fe,be,Se,$e,qe,Ke,U,Me,te,we,Re,oe;function Oe(){je=new M_(D),je.init(),we=new aM(D,je),C=new d_(D,je,e,we),M=new rM(D,je),C.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),k=D.createFramebuffer(),z=D.createFramebuffer(),N=D.createFramebuffer(),B=new w_(D),G=new Wv,Y=new oM(D,je,M,G,C,we,B),de=new v_(R),me=new C0(D),Re=new u_(D,me),Z=new b_(D,me,B,Re),ee=new E_(D,Z,me,Re,B),U=new T_(D,C,Y),$e=new p_(G),ve=new $v(R,de,je,C,Re,$e),Fe=new uM(R,G),be=new qv,Se=new Qv(je),Ke=new h_(R,de,M,ee,g,l),qe=new sM(R,ee,C),oe=new fM(D,B,C,M),Me=new f_(D,je,B),te=new S_(D,je,B),B.programs=ve.programs,R.capabilities=C,R.extensions=je,R.properties=G,R.renderLists=be,R.shadowMap=qe,R.state=M,R.info=B}Oe(),y!==nn&&(A=new C_(y,t.width,t.height,a,s,r));let De=new Dh(R,D);this.xr=De,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let E=je.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=je.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(H,K,!1))},this.getSize=function(E){return E.set(H,K)},this.setSize=function(E,O,q=!0){if(De.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,K=O,t.width=Math.floor(E*j),t.height=Math.floor(O*j),q===!0&&(t.style.width=E+"px",t.style.height=O+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(H*j,K*j).floor()},this.setDrawingBufferSize=function(E,O,q){H=E,K=O,j=q,t.width=Math.floor(E*q),t.height=Math.floor(O*q),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(y===nn){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(re)},this.getViewport=function(E){return E.copy(Pe)},this.setViewport=function(E,O,q,$){E.isVector4?Pe.set(E.x,E.y,E.z,E.w):Pe.set(E,O,q,$),M.viewport(re.copy(Pe).multiplyScalar(j).round())},this.getScissor=function(E){return E.copy(We)},this.setScissor=function(E,O,q,$){E.isVector4?We.set(E.x,E.y,E.z,E.w):We.set(E,O,q,$),M.scissor(ne.copy(We).multiplyScalar(j).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(E){M.setScissorTest(xe=E)},this.setOpaqueSort=function(E){ge=E},this.setTransparentSort=function(E){Ee=E},this.getClearColor=function(E){return E.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,q=!0){let $=0;if(E){let W=!1;if(X!==null){let Ce=X.texture.format;W=p.has(Ce)}if(W){let Ce=X.texture.type,Ne=m.has(Ce),Ae=Ke.getClearColor(),Ue=Ke.getClearAlpha(),ze=Ae.r,Je=Ae.g,tt=Ae.b;Ne?(T[0]=ze,T[1]=Je,T[2]=tt,T[3]=Ue,D.clearBufferuiv(D.COLOR,0,T)):(w[0]=ze,w[1]=Je,w[2]=tt,w[3]=Ue,D.clearBufferiv(D.COLOR,0,w))}else $|=D.COLOR_BUFFER_BIT}O&&($|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",Fn,!1),Ke.dispose(),be.dispose(),Se.dispose(),G.dispose(),de.dispose(),ee.dispose(),Re.dispose(),oe.dispose(),ve.dispose(),De.dispose(),De.removeEventListener("sessionstart",Ju),De.removeEventListener("sessionend",ju),Gi.stop()};function Et(E){E.preventDefault(),dh("WebGLRenderer: Context Lost."),P=!0}function vt(){dh("WebGLRenderer: Context Restored."),P=!1;let E=B.autoReset,O=qe.enabled,q=qe.autoUpdate,$=qe.needsUpdate,W=qe.type;Oe(),B.autoReset=E,qe.enabled=O,qe.autoUpdate=q,qe.needsUpdate=$,qe.type=W}function Fn(E){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function On(E){let O=E.target;O.removeEventListener("dispose",On),Qm(O)}function Qm(E){eg(E),G.remove(E)}function eg(E){let O=G.get(E).programs;O!==void 0&&(O.forEach(function(q){ve.releaseProgram(q)}),E.isShaderMaterial&&ve.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,q,$,W,Ce){O===null&&(O=Le);let Ne=W.isMesh&&W.matrixWorld.determinantAffine()<0,Ae=ig(E,O,q,$,W);M.setMaterial($,Ne);let Ue=q.index,ze=1;if($.wireframe===!0){if(Ue=Z.getWireframeAttribute(q),Ue===void 0)return;ze=2}let Je=q.drawRange,tt=q.attributes.position,Ve=Je.start*ze,dt=(Je.start+Je.count)*ze;Ce!==null&&(Ve=Math.max(Ve,Ce.start*ze),dt=Math.min(dt,(Ce.start+Ce.count)*ze)),Ue!==null?(Ve=Math.max(Ve,0),dt=Math.min(dt,Ue.count)):tt!=null&&(Ve=Math.max(Ve,0),dt=Math.min(dt,tt.count));let Ct=dt-Ve;if(Ct<0||Ct===1/0)return;Re.setup(W,$,Ae,q,Ue);let At,gt=Me;if(Ue!==null&&(At=me.get(Ue),gt=te,gt.setIndex(At)),W.isMesh)$.wireframe===!0?(M.setLineWidth($.wireframeLinewidth*Ze()),gt.setMode(D.LINES)):gt.setMode(D.TRIANGLES);else if(W.isLine){let Wt=$.linewidth;Wt===void 0&&(Wt=1),M.setLineWidth(Wt*Ze()),W.isLineSegments?gt.setMode(D.LINES):W.isLineLoop?gt.setMode(D.LINE_LOOP):gt.setMode(D.LINE_STRIP)}else W.isPoints?gt.setMode(D.POINTS):W.isSprite&&gt.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(je.get("WEBGL_multi_draw"))gt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Wt=W._multiDrawStarts,Ie=W._multiDrawCounts,an=W._multiDrawCount,rt=Ue?me.get(Ue).bytesPerElement:1,yn=G.get($).currentProgram.getUniforms();for(let Bn=0;Bn<an;Bn++)yn.setValue(D,"_gl_DrawID",Bn),gt.render(Wt[Bn]/rt,Ie[Bn])}else if(W.isInstancedMesh)gt.renderInstances(Ve,Ct,W.count);else if(q.isInstancedBufferGeometry){let Wt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ie=Math.min(q.instanceCount,Wt);gt.renderInstances(Ve,Ct,Ie)}else gt.render(Ve,Ct)};function Ku(E,O,q){E.transparent===!0&&E.side===tn&&E.forceSinglePass===!1?(E.side=Vt,E.needsUpdate=!0,Eo(E,O,q),E.side=ti,E.needsUpdate=!0,Eo(E,O,q),E.side=tn):Eo(E,O,q)}this.compile=function(E,O,q=null){q===null&&(q=E),S=Se.get(q),S.init(O),x.push(S),q.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),E!==q&&E.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),S.setupLights();let $=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Ce=W.material;if(Ce)if(Array.isArray(Ce))for(let Ne=0;Ne<Ce.length;Ne++){let Ae=Ce[Ne];Ku(Ae,q,W),$.add(Ae)}else Ku(Ce,q,W),$.add(Ce)}),S=x.pop(),$},this.compileAsync=function(E,O,q=null){let $=this.compile(E,O,q);return new Promise(W=>{function Ce(){if($.forEach(function(Ne){G.get(Ne).currentProgram.isReady()&&$.delete(Ne)}),$.size===0){W(E);return}setTimeout(Ce,10)}je.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let ac=null;function tg(E){ac&&ac(E)}function Ju(){Gi.stop()}function ju(){Gi.start()}let Gi=new Yd;Gi.setAnimationLoop(tg),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(E){ac=E,De.setAnimationLoop(E),E===null?Gi.stop():Gi.start()},De.addEventListener("sessionstart",Ju),De.addEventListener("sessionend",ju),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(E,O);let q=De.enabled===!0&&De.isPresenting===!0,$=A!==null&&(X===null||q)&&A.begin(R,X);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(O),O=De.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,O,X),S=Se.get(E,x.length),S.init(O),S.state.textureUnits=Y.getTextureUnits(),x.push(S),ye.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Q.setFromProjectionMatrix(ye,Pn,O.reversedDepth),se=this.localClippingEnabled,ie=$e.init(this.clippingPlanes,se),v=be.get(E,b.length),v.init(),b.push(v),De.enabled===!0&&De.isPresenting===!0){let Ne=R.xr.getDepthSensingMesh();Ne!==null&&lc(Ne,O,-1/0,R.sortObjects)}lc(E,O,0,R.sortObjects),v.finish(),R.sortObjects===!0&&v.sort(ge,Ee,O.reversedDepth),Ge=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,Ge&&Ke.addToRenderList(v,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ie===!0&&$e.beginShadows();let W=S.state.shadowsArray;if(qe.render(W,E,O),ie===!0&&$e.endShadows(),($&&A.hasRenderPass())===!1){let Ne=v.opaque,Ae=v.transmissive;if(S.setupLights(),O.isArrayCamera){let Ue=O.cameras;if(Ae.length>0)for(let ze=0,Je=Ue.length;ze<Je;ze++){let tt=Ue[ze];ef(Ne,Ae,E,tt)}Ge&&Ke.render(E);for(let ze=0,Je=Ue.length;ze<Je;ze++){let tt=Ue[ze];Qu(v,E,tt,tt.viewport)}}else Ae.length>0&&ef(Ne,Ae,E,O),Ge&&Ke.render(E),Qu(v,E,O)}X!==null&&F===0&&(Y.updateMultisampleRenderTarget(X),Y.updateRenderTargetMipmap(X)),$&&A.end(R),E.isScene===!0&&E.onAfterRender(R,E,O),Re.resetDefaultState(),J=-1,le=null,x.pop(),x.length>0?(S=x[x.length-1],Y.setTextureUnits(S.state.textureUnits),ie===!0&&$e.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,b.pop(),b.length>0?v=b[b.length-1]:v=null,L!==null&&L.renderEnd()};function lc(E,O,q,$){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLightProbeGrid)S.pushLightProbeGrid(E);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){$&&ke.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ye);let Ne=ee.update(E),Ae=E.material;Ae.visible&&v.push(E,Ne,Ae,q,ke.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Q.intersectsObject(E))){let Ne=ee.update(E),Ae=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ke.copy(E.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),ke.copy(Ne.boundingSphere.center)),ke.applyMatrix4(E.matrixWorld).applyMatrix4(ye)),Array.isArray(Ae)){let Ue=Ne.groups;for(let ze=0,Je=Ue.length;ze<Je;ze++){let tt=Ue[ze],Ve=Ae[tt.materialIndex];Ve&&Ve.visible&&v.push(E,Ne,Ve,q,ke.z,tt)}}else Ae.visible&&v.push(E,Ne,Ae,q,ke.z,null)}}let Ce=E.children;for(let Ne=0,Ae=Ce.length;Ne<Ae;Ne++)lc(Ce[Ne],O,q,$)}function Qu(E,O,q,$){let{opaque:W,transmissive:Ce,transparent:Ne}=E;S.setupLightsView(q),ie===!0&&$e.setGlobalState(R.clippingPlanes,q),$&&M.viewport(re.copy($)),W.length>0&&To(W,O,q),Ce.length>0&&To(Ce,O,q),Ne.length>0&&To(Ne,O,q),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function ef(E,O,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[$.id]===void 0){let Ve=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[$.id]=new hn(1,1,{generateMipmaps:!0,type:Ve?Wn:nn,minFilter:$n,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let Ce=S.state.transmissionRenderTarget[$.id],Ne=$.viewport||re;Ce.setSize(Ne.z*R.transmissionResolutionScale,Ne.w*R.transmissionResolutionScale);let Ae=R.getRenderTarget(),Ue=R.getActiveCubeFace(),ze=R.getActiveMipmapLevel();R.setRenderTarget(Ce),R.getClearColor(ue),pe=R.getClearAlpha(),pe<1&&R.setClearColor(16777215,.5),R.clear(),Ge&&Ke.render(q);let Je=R.toneMapping;R.toneMapping=Nn;let tt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),S.setupLightsView($),ie===!0&&$e.setGlobalState(R.clippingPlanes,$),To(E,q,$),Y.updateMultisampleRenderTarget(Ce),Y.updateRenderTargetMipmap(Ce),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let dt=0,Ct=O.length;dt<Ct;dt++){let At=O[dt],{object:gt,geometry:Wt,material:Ie,group:an}=At;if(Ie.side===tn&&gt.layers.test($.layers)){let rt=Ie.side;Ie.side=Vt,Ie.needsUpdate=!0,tf(gt,q,$,Wt,Ie,an),Ie.side=rt,Ie.needsUpdate=!0,Ve=!0}}Ve===!0&&(Y.updateMultisampleRenderTarget(Ce),Y.updateRenderTargetMipmap(Ce))}R.setRenderTarget(Ae,Ue,ze),R.setClearColor(ue,pe),tt!==void 0&&($.viewport=tt),R.toneMapping=Je}function To(E,O,q){let $=O.isScene===!0?O.overrideMaterial:null;for(let W=0,Ce=E.length;W<Ce;W++){let Ne=E[W],{object:Ae,geometry:Ue,group:ze}=Ne,Je=Ne.material;Je.allowOverride===!0&&$!==null&&(Je=$),Ae.layers.test(q.layers)&&tf(Ae,O,q,Ue,Je,ze)}}function tf(E,O,q,$,W,Ce){E.onBeforeRender(R,O,q,$,W,Ce),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(R,O,q,$,E,Ce),W.transparent===!0&&W.side===tn&&W.forceSinglePass===!1?(W.side=Vt,W.needsUpdate=!0,R.renderBufferDirect(q,O,$,W,E,Ce),W.side=ti,W.needsUpdate=!0,R.renderBufferDirect(q,O,$,W,E,Ce),W.side=tn):R.renderBufferDirect(q,O,$,W,E,Ce),E.onAfterRender(R,O,q,$,W,Ce)}function Eo(E,O,q){O.isScene!==!0&&(O=Le);let $=G.get(E),W=S.state.lights,Ce=S.state.shadowsArray,Ne=W.state.version,Ae=ve.getParameters(E,W.state,Ce,O,q,S.state.lightProbeGridArray),Ue=ve.getProgramCacheKey(Ae),ze=$.programs;$.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,$.fog=O.fog;let Je=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;$.envMap=de.get(E.envMap||$.environment,Je),$.envMapRotation=$.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",On),ze=new Map,$.programs=ze);let tt=ze.get(Ue);if(tt!==void 0){if($.currentProgram===tt&&$.lightsStateVersion===Ne)return sf(E,Ae),tt}else Ae.uniforms=ve.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,q,Ae),E.onBeforeCompile(Ae,R),tt=ve.acquireProgram(Ae,Ue),ze.set(Ue,tt),$.uniforms=Ae.uniforms;let Ve=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ve.clippingPlanes=$e.uniform),sf(E,Ae),$.needsLights=rg(E),$.lightsStateVersion=Ne,$.needsLights&&(Ve.ambientLightColor.value=W.state.ambient,Ve.lightProbe.value=W.state.probe,Ve.directionalLights.value=W.state.directional,Ve.directionalLightShadows.value=W.state.directionalShadow,Ve.spotLights.value=W.state.spot,Ve.spotLightShadows.value=W.state.spotShadow,Ve.rectAreaLights.value=W.state.rectArea,Ve.ltc_1.value=W.state.rectAreaLTC1,Ve.ltc_2.value=W.state.rectAreaLTC2,Ve.pointLights.value=W.state.point,Ve.pointLightShadows.value=W.state.pointShadow,Ve.hemisphereLights.value=W.state.hemi,Ve.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ve.spotLightMatrix.value=W.state.spotLightMatrix,Ve.spotLightMap.value=W.state.spotLightMap,Ve.pointShadowMatrix.value=W.state.pointShadowMatrix),$.lightProbeGrid=S.state.lightProbeGridArray.length>0,$.currentProgram=tt,$.uniformsList=null,tt}function nf(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=js.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function sf(E,O){let q=G.get(E);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function ng(E,O){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;_.setFromMatrixPosition(O.matrixWorld);for(let q=0,$=E.length;q<$;q++){let W=E[q];if(W.texture!==null&&W.boundingBox.containsPoint(_))return W}return null}function ig(E,O,q,$,W){O.isScene!==!0&&(O=Le),Y.resetTextureUnits();let Ce=O.fog,Ne=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?O.environment:null,Ae=X===null?R.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:nt.workingColorSpace,Ue=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,ze=de.get($.envMap||Ne,Ue),Je=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,tt=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ve=!!q.morphAttributes.position,dt=!!q.morphAttributes.normal,Ct=!!q.morphAttributes.color,At=Nn;$.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(At=R.toneMapping);let gt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Wt=gt!==void 0?gt.length:0,Ie=G.get($),an=S.state.lights;if(ie===!0&&(se===!0||E!==le)){let Mt=E===le&&$.id===J;$e.setState($,E,Mt)}let rt=!1;$.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==an.state.version||Ie.outputColorSpace!==Ae||W.isBatchedMesh&&Ie.batching===!1||!W.isBatchedMesh&&Ie.batching===!0||W.isBatchedMesh&&Ie.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ie.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ie.instancing===!1||!W.isInstancedMesh&&Ie.instancing===!0||W.isSkinnedMesh&&Ie.skinning===!1||!W.isSkinnedMesh&&Ie.skinning===!0||W.isInstancedMesh&&Ie.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ie.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ie.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ie.instancingMorph===!1&&W.morphTexture!==null||Ie.envMap!==ze||$.fog===!0&&Ie.fog!==Ce||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==$e.numPlanes||Ie.numIntersection!==$e.numIntersection)||Ie.vertexAlphas!==Je||Ie.vertexTangents!==tt||Ie.morphTargets!==Ve||Ie.morphNormals!==dt||Ie.morphColors!==Ct||Ie.toneMapping!==At||Ie.morphTargetsCount!==Wt||!!Ie.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,Ie.__version=$.version);let yn=Ie.currentProgram;rt===!0&&(yn=Eo($,O,W),L&&$.isNodeMaterial&&L.onUpdateProgram($,yn,Ie));let Bn=!1,yi=!1,ms=!1,xt=yn.getUniforms(),Rt=Ie.uniforms;if(M.useProgram(yn.program)&&(Bn=!0,yi=!0,ms=!0),$.id!==J&&(J=$.id,yi=!0),Ie.needsLights){let Mt=ng(S.state.lightProbeGridArray,W);Ie.lightProbeGrid!==Mt&&(Ie.lightProbeGrid=Mt,yi=!0)}if(Bn||le!==E){M.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),xt.setValue(D,"projectionMatrix",E.projectionMatrix),xt.setValue(D,"viewMatrix",E.matrixWorldInverse);let vi=xt.map.cameraPosition;vi!==void 0&&vi.setValue(D,_e.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&xt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&xt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),le!==E&&(le=E,yi=!0,ms=!0)}if(Ie.needsLights&&(an.state.directionalShadowMap.length>0&&xt.setValue(D,"directionalShadowMap",an.state.directionalShadowMap,Y),an.state.spotShadowMap.length>0&&xt.setValue(D,"spotShadowMap",an.state.spotShadowMap,Y),an.state.pointShadowMap.length>0&&xt.setValue(D,"pointShadowMap",an.state.pointShadowMap,Y)),W.isSkinnedMesh){xt.setOptional(D,W,"bindMatrix"),xt.setOptional(D,W,"bindMatrixInverse");let Mt=W.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),xt.setValue(D,"boneTexture",Mt.boneTexture,Y))}W.isBatchedMesh&&(xt.setOptional(D,W,"batchingTexture"),xt.setValue(D,"batchingTexture",W._matricesTexture,Y),xt.setOptional(D,W,"batchingIdTexture"),xt.setValue(D,"batchingIdTexture",W._indirectTexture,Y),xt.setOptional(D,W,"batchingColorTexture"),W._colorsTexture!==null&&xt.setValue(D,"batchingColorTexture",W._colorsTexture,Y));let _i=q.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&U.update(W,q,yn),(yi||Ie.receiveShadow!==W.receiveShadow)&&(Ie.receiveShadow=W.receiveShadow,xt.setValue(D,"receiveShadow",W.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&O.environment!==null&&(Rt.envMapIntensity.value=O.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=pM()),yi){if(xt.setValue(D,"toneMappingExposure",R.toneMappingExposure),Ie.needsLights&&sg(Rt,ms),Ce&&$.fog===!0&&Fe.refreshFogUniforms(Rt,Ce),Fe.refreshMaterialUniforms(Rt,$,j,K,S.state.transmissionRenderTarget[E.id]),Ie.needsLights&&Ie.lightProbeGrid){let Mt=Ie.lightProbeGrid;Rt.probesSH.value=Mt.texture,Rt.probesMin.value.copy(Mt.boundingBox.min),Rt.probesMax.value.copy(Mt.boundingBox.max),Rt.probesResolution.value.copy(Mt.resolution)}js.upload(D,nf(Ie),Rt,Y)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(js.upload(D,nf(Ie),Rt,Y),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&xt.setValue(D,"center",W.center),xt.setValue(D,"modelViewMatrix",W.modelViewMatrix),xt.setValue(D,"normalMatrix",W.normalMatrix),xt.setValue(D,"modelMatrix",W.matrixWorld),$.uniformsGroups!==void 0){let Mt=$.uniformsGroups;for(let vi=0,gs=Mt.length;vi<gs;vi++){let rf=Mt[vi];oe.update(rf,yn),oe.bind(rf,yn)}}return yn}function sg(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function rg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(E,O,q){let $=G.get(E);$.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),G.get(E.texture).__webglTexture=O,G.get(E.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let q=G.get(E);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,q=0){X=E,V=O,F=q;let $=null,W=!1,Ce=!1;if(E){let Ae=G.get(E);if(Ae.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(D.FRAMEBUFFER,Ae.__webglFramebuffer),re.copy(E.viewport),ne.copy(E.scissor),fe=E.scissorTest,M.viewport(re),M.scissor(ne),M.setScissorTest(fe),J=-1;return}else if(Ae.__webglFramebuffer===void 0)Y.setupRenderTarget(E);else if(Ae.__hasExternalTextures)Y.rebindTextures(E,G.get(E.texture).__webglTexture,G.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Je=E.depthTexture;if(Ae.__boundDepthTexture!==Je){if(Je!==null&&G.has(Je)&&(E.width!==Je.image.width||E.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(E)}}let Ue=E.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Ce=!0);let ze=G.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ze[O])?$=ze[O][q]:$=ze[O],W=!0):E.samples>0&&Y.useMultisampledRTT(E)===!1?$=G.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?$=ze[q]:$=ze,re.copy(E.viewport),ne.copy(E.scissor),fe=E.scissorTest}else re.copy(Pe).multiplyScalar(j).floor(),ne.copy(We).multiplyScalar(j).floor(),fe=xe;if(q!==0&&($=k),M.bindFramebuffer(D.FRAMEBUFFER,$)&&M.drawBuffers(E,$),M.viewport(re),M.scissor(ne),M.setScissorTest(fe),W){let Ae=G.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ae.__webglTexture,q)}else if(Ce){let Ae=O;for(let Ue=0;Ue<E.textures.length;Ue++){let ze=G.get(E.textures[Ue]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ue,ze.__webglTexture,q,Ae)}}else if(E!==null&&q!==0){let Ae=G.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ae.__webglTexture,q)}J=-1},this.readRenderTargetPixels=function(E,O,q,$,W,Ce,Ne,Ae=0){if(!(E&&E.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ue=Ue[Ne]),Ue){M.bindFramebuffer(D.FRAMEBUFFER,Ue);try{let ze=E.textures[Ae],Je=ze.format,tt=ze.type;if(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ae),!C.textureFormatReadable(Je)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(tt)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-$&&q>=0&&q<=E.height-W&&D.readPixels(O,q,$,W,we.convert(Je),we.convert(tt),Ce)}finally{let ze=X!==null?G.get(X).__webglFramebuffer:null;M.bindFramebuffer(D.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(E,O,q,$,W,Ce,Ne,Ae=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ue=Ue[Ne]),Ue)if(O>=0&&O<=E.width-$&&q>=0&&q<=E.height-W){M.bindFramebuffer(D.FRAMEBUFFER,Ue);let ze=E.textures[Ae],Je=ze.format,tt=ze.type;if(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ae),!C.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ve=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ve),D.bufferData(D.PIXEL_PACK_BUFFER,Ce.byteLength,D.STREAM_READ),D.readPixels(O,q,$,W,we.convert(Je),we.convert(tt),0);let dt=X!==null?G.get(X).__webglFramebuffer:null;M.bindFramebuffer(D.FRAMEBUFFER,dt);let Ct=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await xd(D,Ct,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ve),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ce),D.deleteBuffer(Ve),D.deleteSync(Ct),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,q=0){let $=Math.pow(2,-q),W=Math.floor(E.image.width*$),Ce=Math.floor(E.image.height*$),Ne=O!==null?O.x:0,Ae=O!==null?O.y:0;Y.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,Ne,Ae,W,Ce),M.unbindTexture()},this.copyTextureToTexture=function(E,O,q=null,$=null,W=0,Ce=0){let Ne,Ae,Ue,ze,Je,tt,Ve,dt,Ct,At=E.isCompressedTexture?E.mipmaps[Ce]:E.image;if(q!==null)Ne=q.max.x-q.min.x,Ae=q.max.y-q.min.y,Ue=q.isBox3?q.max.z-q.min.z:1,ze=q.min.x,Je=q.min.y,tt=q.isBox3?q.min.z:0;else{let Rt=Math.pow(2,-W);Ne=Math.floor(At.width*Rt),Ae=Math.floor(At.height*Rt),E.isDataArrayTexture?Ue=At.depth:E.isData3DTexture?Ue=Math.floor(At.depth*Rt):Ue=1,ze=0,Je=0,tt=0}$!==null?(Ve=$.x,dt=$.y,Ct=$.z):(Ve=0,dt=0,Ct=0);let gt=we.convert(O.format),Wt=we.convert(O.type),Ie;O.isData3DTexture?(Y.setTexture3D(O,0),Ie=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Y.setTexture2DArray(O,0),Ie=D.TEXTURE_2D_ARRAY):(Y.setTexture2D(O,0),Ie=D.TEXTURE_2D),M.activeTexture(D.TEXTURE0),M.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),M.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),M.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);let an=M.getParameter(D.UNPACK_ROW_LENGTH),rt=M.getParameter(D.UNPACK_IMAGE_HEIGHT),yn=M.getParameter(D.UNPACK_SKIP_PIXELS),Bn=M.getParameter(D.UNPACK_SKIP_ROWS),yi=M.getParameter(D.UNPACK_SKIP_IMAGES);M.pixelStorei(D.UNPACK_ROW_LENGTH,At.width),M.pixelStorei(D.UNPACK_IMAGE_HEIGHT,At.height),M.pixelStorei(D.UNPACK_SKIP_PIXELS,ze),M.pixelStorei(D.UNPACK_SKIP_ROWS,Je),M.pixelStorei(D.UNPACK_SKIP_IMAGES,tt);let ms=E.isDataArrayTexture||E.isData3DTexture,xt=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let Rt=G.get(E),_i=G.get(O),Mt=G.get(Rt.__renderTarget),vi=G.get(_i.__renderTarget);M.bindFramebuffer(D.READ_FRAMEBUFFER,Mt.__webglFramebuffer),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let gs=0;gs<Ue;gs++)ms&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(E).__webglTexture,W,tt+gs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(O).__webglTexture,Ce,Ct+gs)),D.blitFramebuffer(ze,Je,Ne,Ae,Ve,dt,Ne,Ae,D.DEPTH_BUFFER_BIT,D.NEAREST);M.bindFramebuffer(D.READ_FRAMEBUFFER,null),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||G.has(E)){let Rt=G.get(E),_i=G.get(O);M.bindFramebuffer(D.READ_FRAMEBUFFER,z),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,N);for(let Mt=0;Mt<Ue;Mt++)ms?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Rt.__webglTexture,W,tt+Mt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Rt.__webglTexture,W),xt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_i.__webglTexture,Ce,Ct+Mt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_i.__webglTexture,Ce),W!==0?D.blitFramebuffer(ze,Je,Ne,Ae,Ve,dt,Ne,Ae,D.COLOR_BUFFER_BIT,D.NEAREST):xt?D.copyTexSubImage3D(Ie,Ce,Ve,dt,Ct+Mt,ze,Je,Ne,Ae):D.copyTexSubImage2D(Ie,Ce,Ve,dt,ze,Je,Ne,Ae);M.bindFramebuffer(D.READ_FRAMEBUFFER,null),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else xt?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Ie,Ce,Ve,dt,Ct,Ne,Ae,Ue,gt,Wt,At.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Ie,Ce,Ve,dt,Ct,Ne,Ae,Ue,gt,At.data):D.texSubImage3D(Ie,Ce,Ve,dt,Ct,Ne,Ae,Ue,gt,Wt,At):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ce,Ve,dt,Ne,Ae,gt,Wt,At.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ce,Ve,dt,At.width,At.height,gt,At.data):D.texSubImage2D(D.TEXTURE_2D,Ce,Ve,dt,Ne,Ae,gt,Wt,At);M.pixelStorei(D.UNPACK_ROW_LENGTH,an),M.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rt),M.pixelStorei(D.UNPACK_SKIP_PIXELS,yn),M.pixelStorei(D.UNPACK_SKIP_ROWS,Bn),M.pixelStorei(D.UNPACK_SKIP_IMAGES,yi),Ce===0&&O.generateMipmaps&&D.generateMipmap(Ie),M.unbindTexture()},this.initRenderTarget=function(E){G.get(E).__webglFramebuffer===void 0&&Y.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Y.setTextureCube(E,0):E.isData3DTexture?Y.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Y.setTexture2DArray(E,0):Y.setTexture2D(E,0),M.unbindTexture()},this.resetState=function(){V=0,F=0,X=null,M.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var tp={type:"change"},Oh={type:"start"},ip={type:"end"},Nl=new es,np=new vn,mM=Math.cos(70*li.DEG2RAD),kt=new I,rn=2*Math.PI,pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fh=1e-6,Dl=class extends qr{constructor(e,t=null){super(e,t),this.state=pt.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Di.ROTATE,MIDDLE:Di.DOLLY,RIGHT:Di.PAN},this.touches={ONE:Ui.ROTATE,TWO:Ui.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Qt,this._lastTargetPosition=new I,this._quat=new Qt().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xs,this._sphericalDelta=new Xs,this._scale=1,this._panOffset=new I,this._rotateStart=new he,this._rotateEnd=new he,this._rotateDelta=new he,this._panStart=new he,this._panEnd=new he,this._panDelta=new he,this._dollyStart=new he,this._dollyEnd=new he,this._dollyDelta=new he,this._dollyDirection=new I,this._mouse=new he,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xM.bind(this),this._onPointerDown=gM.bind(this),this._onPointerUp=yM.bind(this),this._onContextMenu=TM.bind(this),this._onMouseWheel=MM.bind(this),this._onKeyDown=bM.bind(this),this._onTouchStart=SM.bind(this),this._onTouchMove=wM.bind(this),this._onMouseDown=_M.bind(this),this._onMouseMove=vM.bind(this),this._interceptControlDown=EM.bind(this),this._interceptControlUp=AM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tp),this.update(),this.state=pt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;kt.copy(t).sub(this.target),kt.applyQuaternion(this._quat),this._spherical.setFromVector3(kt),this.autoRotate&&this.state===pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=rn:i>Math.PI&&(i-=rn),s<-Math.PI?s+=rn:s>Math.PI&&(s-=rn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(kt.setFromSpherical(this._spherical),kt.applyQuaternion(this._quatInverse),t.copy(this.target).add(kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=kt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Nl.origin.copy(this.object.position),Nl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Nl.direction))<mM?this.object.lookAt(this.target):(np.setFromNormalAndCoplanarPoint(this.object.up,this.target),Nl.intersectPlane(np,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Fh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fh||this._lastTargetPosition.distanceToSquared(this.target)>Fh?(this.dispatchEvent(tp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?rn/60*this.autoRotateSpeed*e:rn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){kt.setFromMatrixColumn(t,0),kt.multiplyScalar(-e),this._panOffset.add(kt)}_panUp(e,t){this.screenSpacePanning===!0?kt.setFromMatrixColumn(t,1):(kt.setFromMatrixColumn(t,0),kt.crossVectors(this.object.up,kt)),kt.multiplyScalar(e),this._panOffset.add(kt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;kt.copy(s).sub(this.target);let r=kt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new he,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function gM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function xM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function yM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ip),this.state=pt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function _M(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Di.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=pt.DOLLY;break;case Di.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pt.ROTATE}break;case Di.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pt.PAN}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(Oh)}function vM(n){switch(this.state){case pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function MM(n){this.enabled===!1||this.enableZoom===!1||this.state!==pt.NONE||(n.preventDefault(),this.dispatchEvent(Oh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ip))}function bM(n){this.enabled!==!1&&this._handleKeyDown(n)}function SM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ui.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=pt.TOUCH_ROTATE;break;case Ui.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=pt.TOUCH_PAN;break;default:this.state=pt.NONE}break;case 2:switch(this.touches.TWO){case Ui.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=pt.TOUCH_DOLLY_PAN;break;case Ui.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=pt.TOUCH_DOLLY_ROTATE;break;default:this.state=pt.NONE}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(Oh)}function wM(n){switch(this._trackPointer(n),this.state){case pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=pt.NONE}}function TM(n){this.enabled!==!1&&n.preventDefault()}function EM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function AM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ul=class extends Hn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new ri;e.deleteAttribute("uv");let t=new bn({side:Vt}),i=new bn,s=new $r(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new at(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Er(e,i,6),a=new Ut;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new at(e,tr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new at(e,tr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new at(e,tr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new at(e,tr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new at(e,tr(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new at(e,tr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function tr(n){return new zr({color:0,emissive:16777215,emissiveIntensity:n})}import Wb from"../vendor/tesseract/tesseract.esm.min.js";var Bh={3:.5,4:.7,5:.8,6:1,8:1.25,10:1.5,12:1.75,14:2,16:2,18:2.5,20:2.5,22:2.5,24:3,27:3,30:3.5,33:3.5,36:4,39:4,42:4.5,45:4.5,48:5};function kh(n){let e=/^M\s*(\d+(?:\.\d+)?)\s*(?:[x×X]\s*(\d+(?:\.\d+)?))?\s*(?:-?\s*(\d[a-zA-Z]{1,2}))?/.exec(String(n||"").trim());if(!e)return null;let t=Number(e[1]),i=e[2]?Number(e[2]):Bh[t]||null;return{nominal:t,pitch:i,cls:e[3]||null,fine:!!e[2]&&Bh[t]!==i}}var CM={1:2.12,1.6:3.35,2:4.25,2.5:5.3,3.15:6.7,4:8.5,5:10.6,6.3:13.2,8:17};function zh(n){let e=CM[n]||+(2.12*n).toFixed(2);return{d:n,D:e,pilot_depth:+(2*n).toFixed(2),cone_depth:+((e-n)/2/Math.tan(Math.PI/6)).toFixed(3)}}var RM={S45C:7.85,SM45C:7.85,SCM440:7.85,SCM415:7.85,SNCM439:7.85,SS400:7.85,SUJ2:7.81,"S45C-H":7.85,SUS304:7.93,SUS303:7.93,SUS316:7.98,SUS420J2:7.75,SUS440C:7.68,A6061:2.7,A7075:2.81,AL6061:2.7,"AL6061-T6":2.7,A5052:2.68,C3604:8.5,C2801:8.4,\uD669\uB3D9:8.5,\uCCAD\uB3D9:8.8,C5191:8.8,PBC2:8.8,POM:1.41,MC\uB098\uC77C\uB860:1.16,PEEK:1.32,PTFE:2.2};function sp(n){if(!n)return 7.85;let e=String(n).replace(/\s+/g,"").toUpperCase();for(let[t,i]of Object.entries(RM))if(t.toUpperCase()===e)return i;return/SUS|STS|스테인리스/i.test(e)?7.93:/AL|A[567]\d{3}|알루미늄/i.test(e)?2.7:/C\d{4}|황동|BRASS/i.test(e)?8.5:/POM|나일론|PA|PEEK|PTFE|수지/i.test(e)?1.4:7.85}var rp="vringon-shaft/1.0",ci=(n,e={})=>({type:"number",description:n,...e}),Nt=(n,e={})=>({type:"number",exclusiveMinimum:0,description:n,...e}),ct=(n,e={})=>({type:"string",description:n,...e}),PM=n=>({...n,type:[n.type,"null"]}),IM=["cyl","taper","thread"],LM=["chamfer","fillet","round","undercut"],NM=["snap_ring","relief","o_ring","generic"],DM=["keyway","center_hole","cross_hole","flat","hex","knurl","hex_socket"],UM=["shaft","bushing","pin","roller","spacer","flange","sleeve","spindle","other"],hT={$schema:"http://json-schema.org/draft-07/schema#",$id:"https://vringon.ai/schema/shaft_dsl.schema.json",title:"VRINGON \uD68C\uC804\uCCB4 DSL",description:"\uD68C\uC804\uCCB4 \uBD80\uD488 \uD558\uB098. \uC138\uADF8\uBA3C\uD2B8(\uCD95 \uBC29\uD5A5 \uC678\uD615) + \uC804\uC774(\uBAA8\uC11C\uB9AC) + \uD648 + \uBCF4\uC5B4(\uB0B4\uACBD) + \uBE44\uCD95\uB300\uCE6D \uD53C\uCC98.",type:"object",additionalProperties:!1,required:["dsl","segments"],properties:{dsl:ct("DSL \uBC84\uC804 \uD0DC\uADF8. \uD56D\uC0C1 'vringon-shaft/1.0'.",{const:rp}),id:ct("\uC2AC\uB7EC\uADF8 \uC2DD\uBCC4\uC790 (\uC608: stepped-shaft-01)."),name:ct("\uC601\uBB38 \uBD80\uD488\uBA85."),name_ko:ct("\uD55C\uAE00 \uBD80\uD488\uBA85."),part_class:ct("\uBD80\uD488 \uBD84\uB958.",{enum:UM}),units:ct("\uAE38\uC774 \uB2E8\uC704. mm \uACE0\uC815.",{enum:["mm"]}),material:ct("\uC7AC\uC9C8 (\uC608: S45C, SUS304, A6061)."),drawing:{type:"object",additionalProperties:!1,description:"\uB3C4\uBA74 \uBA54\uD0C0 (\uD45C\uC81C\uB780).",properties:{number:ct("\uB3C4\uBC88."),scale:ct("\uCC99\uB3C4 (\uC608: 1:1)."),projection:ct("\uD22C\uC0C1\uBC95.",{enum:["third","first"]}),notes:{type:"array",items:{type:"string"},description:"\uC77C\uBC18 \uC8FC\uAE30."}}},segments:{type:"array",minItems:1,maxItems:24,description:"\uC67C\uCABD\uBD80\uD130 \uC624\uB978\uCABD\uC73C\uB85C \uC774\uC5B4\uC9C0\uB294 \uC678\uD615 \uC138\uADF8\uBA3C\uD2B8. \uAE38\uC774\uC758 \uD569\uC774 \uC804\uCCB4 \uAE38\uC774.",items:{type:"object",additionalProperties:!1,required:["type","length"],properties:{type:ct("cyl=\uC6D0\uD1B5, taper=\uD14C\uC774\uD37C(\uC6D0\uCD94), thread=\uC218\uB098\uC0AC(\uD638\uCE6D\uACBD=diameter).",{enum:IM}),length:Nt("\uCD95 \uBC29\uD5A5 \uAE38\uC774 (mm)."),diameter:Nt("cyl\xB7thread \uC758 \uC9C0\uB984 (mm). thread \uB294 \uD638\uCE6D\uACBD(\uBC14\uAE65\uC9C0\uB984)."),d_start:Nt("taper \uC2DC\uC791(\uC67C\uCABD) \uC9C0\uB984 (mm)."),d_end:Nt("taper \uB05D(\uC624\uB978\uCABD) \uC9C0\uB984 (mm)."),spec:ct("thread \uD638\uCE6D (\uC608: M20x1.5, M12). \uD53C\uCE58 \uC0DD\uB7B5 \uC2DC \uBCF4\uD1B5\uB098\uC0AC."),pitch:Nt("thread \uD53C\uCE58 (mm). spec \uC5D0\uC11C \uC720\uB3C4\uB418\uBA74 \uC0DD\uB7B5 \uAC00\uB2A5."),hand:ct("\uB098\uC0AC \uBC29\uD5A5.",{enum:["right","left"]}),tolerance:ct("\uCE58\uC218 \uACF5\uCC28 \uD45C\uAE30 (\uC608: h6, k6, \xB10.05, -0.013/-0.028)."),roughness:ct("\uD45C\uBA74 \uAC70\uCE60\uAE30 \uD45C\uAE30 (\uC608: Ra 0.8)."),label:ct("\uC6A9\uB3C4 \uB77C\uBCA8 (\uC608: \uBCA0\uC5B4\uB9C1 \uC790\uB9AC, \uAE30\uC5B4 \uC790\uB9AC).")}}},transitions:{type:"array",maxItems:48,description:"\uACBD\uACC4(\uB05D\uBA74\xB7\uB2E8\uCC28)\uC758 \uBAA8\uC11C\uB9AC \uCC98\uB9AC. at=0 \uC67C\uCABD \uB05D, at=n \uC624\uB978\uCABD \uB05D, at=k \uB294 \uC138\uADF8\uBA3C\uD2B8 k-1|k \uB2E8\uCC28.",items:{type:"object",additionalProperties:!1,required:["at","type"],properties:{at:{type:"integer",minimum:0,description:"\uACBD\uACC4 \uBC88\uD638."},type:ct("chamfer=\uBCFC\uB85D \uBAA8\uC11C\uB9AC \uBAA8\uB530\uAE30, fillet=\uB2E8\uCC28 \uC624\uBAA9 \uBAA8\uC11C\uB9AC \uD544\uB81B, round=\uBCFC\uB85D \uBAA8\uC11C\uB9AC \uB77C\uC6B4\uB4DC, undercut=\uB2E8\uCC28 \uB3C4\uD53C\uD648.",{enum:LM}),size:Nt("chamfer \uCD95 \uBC29\uD5A5 \uAE38\uC774 C (mm)."),angle:ci("chamfer \uAC01\uB3C4(\uCD95 \uAE30\uC900, \uB3C4). \uAE30\uBCF8 45.",{minimum:5,maximum:85}),radius:Nt("fillet\xB7round \uBC18\uACBD R (mm)."),width:Nt("undercut \uD3ED (mm)."),depth:Nt("undercut \uAE4A\uC774 (mm, \uBC18\uACBD \uBC29\uD5A5)."),standard:ct("\uADDC\uACA9 \uD45C\uAE30 (\uC608: DIN 76-A, DIN 509-E).")}}},grooves:{type:"array",maxItems:24,description:"\uC138\uADF8\uBA3C\uD2B8 \uC548\uC758 \uD658\uD615 \uD648 (\uBA48\uCDA4\uB9C1 \uD648\xB7\uC624\uB9C1 \uD648 \uB4F1). \uD68C\uC804 \uB300\uCE6D.",items:{type:"object",additionalProperties:!1,required:["segment","offset","width","depth"],properties:{segment:{type:"integer",minimum:0,description:"\uC138\uADF8\uBA3C\uD2B8 \uC778\uB371\uC2A4."},offset:ci("\uC138\uADF8\uBA3C\uD2B8 \uC67C\uCABD \uC2DC\uC791\uC5D0\uC11C \uD648 \uC67C\uCABD \uBCBD\uAE4C\uC9C0 (mm).",{minimum:0}),width:Nt("\uD648 \uD3ED (mm)."),depth:Nt("\uD648 \uAE4A\uC774 (mm, \uBC18\uACBD \uBC29\uD5A5)."),kind:ct("\uD648 \uC885\uB958.",{enum:NM}),corner_radius:ci("\uD648 \uBC14\uB2E5 \uBAA8\uC11C\uB9AC R (mm).",{minimum:0}),standard:ct("\uADDC\uACA9 \uD45C\uAE30 (\uC608: DIN 471 \u230019\xD71.3).")}}},bore:PM({type:"object",additionalProperties:!1,required:["segments"],description:"\uCD95 \uC911\uC2EC \uBCF4\uC5B4(\uB0B4\uACBD). \uC5C6\uC73C\uBA74 null. through \uBA74 \uC138\uADF8\uBA3C\uD2B8 \uAE38\uC774 \uD569 = \uC804\uCCB4 \uAE38\uC774.",properties:{through:{type:"boolean",description:"\uAD00\uD1B5 \uC5EC\uBD80."},from:ct("\uB9C9\uD78C \uBCF4\uC5B4\uC758 \uC2DC\uC791 \uB05D\uBA74.",{enum:["left","right"]}),segments:{type:"array",minItems:1,maxItems:12,items:{type:"object",additionalProperties:!1,required:["length","diameter"],properties:{length:Nt("\uBCF4\uC5B4 \uC138\uADF8\uBA3C\uD2B8 \uAE38\uC774 (mm)."),diameter:Nt("\uBCF4\uC5B4 \uC9C0\uB984 (mm)."),tolerance:ct("\uACF5\uCC28 \uD45C\uAE30 (\uC608: H7)."),thread:ct("\uC554\uB098\uC0AC \uD638\uCE6D (\uC608: M8). \uC788\uC73C\uBA74 \uC774 \uBCF4\uC5B4 \uC138\uADF8\uBA3C\uD2B8\uAC00 \uD0ED \uAD6C\uBA4D.")}}},chamfer_left:ci("\uC67C\uCABD \uC785\uAD6C \uBAA8\uB530\uAE30 C (mm).",{minimum:0}),chamfer_right:ci("\uC624\uB978\uCABD \uC785\uAD6C \uBAA8\uB530\uAE30 C (mm).",{minimum:0})}}),features:{type:"array",maxItems:24,description:"\uBE44\uCD95\uB300\uCE6D\xB7\uAD6D\uBD80 \uD53C\uCC98. type \uC5D0 \uB530\uB77C \uC4F0\uB294 \uD544\uB4DC\uAC00 \uB2E4\uB974\uB2E4.",items:{type:"object",additionalProperties:!1,required:["type"],properties:{type:ct("keyway=\uD0A4\uD648, center_hole=\uC13C\uD130\uAD6C\uBA4D, cross_hole=\uD6A1\uAD6C\uBA4D, flat=\uD3C9\uBA74\uAC00\uACF5(D\uCEF7), hex=\uC721\uAC01, knurl=\uB110\uB9C1, hex_socket=\uB05D\uBA74 \uC721\uAC01 \uC18C\uCF13(\uB80C\uCE58 \uAD6C\uBA4D).",{enum:DM}),segment:{type:"integer",minimum:0,description:"keyway\xB7flat\xB7hex\xB7knurl \uC774 \uB193\uC774\uB294 \uC138\uADF8\uBA3C\uD2B8."},offset:ci("\uC138\uADF8\uBA3C\uD2B8 \uC2DC\uC791\uC5D0\uC11C \uD53C\uCC98 \uC2DC\uC791\uAE4C\uC9C0 (mm).",{minimum:0}),length:Nt("keyway\xB7flat\xB7knurl \uAE38\uC774 (mm)."),width:Nt("keyway \uD3ED b (mm)."),depth:Nt("keyway \uAE4A\uC774 t1 \xB7 flat \uAE4A\uC774 \xB7 hex_socket \uAE4A\uC774 (mm)."),angle:ci("\uB458\uB808 \uAC01\uB3C4 (\uB3C4). 0=\uC815\uBA74(+Z), 90=\uC704(+Y).",{minimum:0,maximum:360}),kind:ct("keyway \uD615\uC2DD.",{enum:["parallel","woodruff"]}),end:ct("center_hole\xB7hex_socket \uC774 \uC788\uB294 \uB05D\uBA74.",{enum:["left","right"]}),form:ct("center_hole \uD615\uC2DD (DIN 332).",{enum:["A","B","R"]}),d:Nt("center_hole \uD30C\uC77C\uB7FF \uC9C0\uB984 (mm)."),position:ci("cross_hole \uC911\uC2EC\uC758 x \uC704\uCE58 (\uC67C\uCABD \uB05D \uAE30\uC900, mm).",{minimum:0}),diameter:Nt("cross_hole \uC9C0\uB984 (mm)."),through:{type:"boolean",description:"cross_hole \uAD00\uD1B5 \uC5EC\uBD80."},count:{type:"integer",minimum:1,maximum:2,description:"flat \uAC1C\uC218 (2=\uB9C8\uC8FC\uBCF4\uB294 \uB450 \uBA74)."},across_flats:Nt("hex\xB7hex_socket \uB300\uBCC0 \uAC70\uB9AC (mm)."),pitch:Nt("knurl \uD53C\uCE58 (mm)."),pattern:ct("knurl \uBB34\uB2AC.",{enum:["straight","diamond"]}),standard:ct("\uADDC\uACA9 \uD45C\uAE30 (\uC608: DIN 6885 8\xD77, DIN 332-A2.5).")}}},meta:{type:"object",additionalProperties:!0,description:"\uCD9C\uCC98\xB7\uC2E0\uB8B0\uB3C4 \uB4F1 \uBA54\uD0C0. \uAE30\uD558\uC5D0 \uC601\uD5A5 \uC5C6\uC74C.",properties:{source:ct("golden | synthetic | extracted | edited"),confidence:ci("\uD310\uB3C5 \uC2E0\uB8B0\uB3C4 0~1.",{minimum:0,maximum:1}),notes:{type:"array",items:{type:"string"}},generator:ct("\uC0DD\uC131 \uB3C4\uAD6C/\uBC84\uC804."),seed:{type:"integer"},archetype:ct("\uC0D8\uD50C\uB7EC \uC544\uD0A4\uD0C0\uC785."),valid:{type:"boolean"}}}}};function zi(n){if(n.type==="taper")return[n.d_start,n.d_end];let e=n.diameter;if(!(e>0)&&n.type==="thread"){let t=kh(n.spec);t&&(e=t.nominal)}return[e,e]}function cs(n){return(n.segments||[]).reduce((e,t)=>e+(Number(t.length)||0),0)}function Vh(n){let e=0;for(let t of n.segments||[])for(let i of zi(t))Number.isFinite(i)&&(e=Math.max(e,i));return e}function Hh(n){let e=[],t=0;for(let i of n.segments||[])e.push([t,t+i.length]),t+=i.length;return e}function Gh(n,e){let t=Hh(n);for(let i=0;i<t.length;i++){let[s,r]=t[i];if(e>=s-1e-9&&e<=r+1e-9){let o=n.segments[i];return o.type==="taper"?o.d_start+(o.d_end-o.d_start)*Math.min(1,Math.max(0,(e-s)/(r-s))):o.diameter}}return 0}function $h(n,e){let t=n.bore;if(!t||!t.segments?.length)return 0;let i=cs(n),s=!t.through&&t.from==="right",r=s?i:0;for(let o of t.segments){let a=s?r-o.length:r,l=s?r:r+o.length;if(e>=a-1e-9&&e<=l+1e-9)return o.diameter;r=s?a:l}return 0}function Fl(n,e=110){let{width:t,height:i,data:s}=n,r=new Uint8Array(t*i);for(let o=0,a=0;o<t*i;o++,a+=4){if(s[a+3]<40)continue;.299*s[a]+.587*s[a+1]+.114*s[a+2]<e&&(r[o]=1)}return{w:t,h:i,mask:r}}function Ol(n,e,t){let i=new Uint8Array(e*t);for(let s=1;s<t-1;s++)for(let r=1;r<e-1;r++){let o=s*e+r;n[o]&&n[o-1]&&n[o+1]&&n[o-e]&&n[o+e]&&(i[o]=1)}return i}function op(n,e,t){let i=new Uint8Array(e*t);for(let s=1;s<t-1;s++)for(let r=1;r<e-1;r++){let o=s*e+r;(n[o]||n[o-1]||n[o+1]||n[o-e]||n[o+e])&&(i[o]=1)}return i}function ap(n,e,t,i=6){let s=new Int32Array(e*t),r=[],o=new Int32Array(e*t),a=1;for(let l=0;l<e*t;l++){if(!n[l]||s[l])continue;let c=0;o[c++]=l,s[l]=a;let h=0,u=e,f=0,d=t,g=0,y=0,p=0;for(;c;){let m=o[--c];h++;let T=m%e,w=(m-T)/e;T<u&&(u=T),T>f&&(f=T),w<d&&(d=w),w>g&&(g=w),y+=T,p+=w,T>0&&n[m-1]&&!s[m-1]&&(s[m-1]=a,o[c++]=m-1),T<e-1&&n[m+1]&&!s[m+1]&&(s[m+1]=a,o[c++]=m+1),w>0&&n[m-e]&&!s[m-e]&&(s[m-e]=a,o[c++]=m-e),w<t-1&&n[m+e]&&!s[m+e]&&(s[m+e]=a,o[c++]=m+e)}h>=i&&r.push({id:a,n:h,x0:u,x1:f,y0:d,y1:g,w:f-u+1,h:g-d+1,cx:y/h,cy:p/h}),a++}return{label:s,comps:r}}function Bl(n){return n<=2?0:n<=6?1:n<=9?2:3}function kl(n,e,t){let i=new Array(12).fill(0);for(let o=0;o<t;o+=2){let a=0;for(let l=0;l<e;l++)n[o*e+l]?a++:(a>0&&a<12&&i[a]++,a=0)}let s=1,r=-1;for(let o=1;o<12;o++)i[o]*o>r&&(r=i[o]*o,s=o);return s}function hp(n,e={}){let t=n.width,i=n.height,{mask:s}=Fl(n,e.threshold??105),r=Bl(kl(s,t,i)),o=s;for(let p=0;p<r;p++)o=Ol(o,t,i);let{label:a,comps:l}=ap(o,t,i,8),c=l.filter(p=>p.w>t*.85&&p.h>i*.85),h=l.filter(p=>!c.includes(p)&&p.n>=Math.max(40,t*i*2e-5)&&p.w>=10&&p.h>=6);if(!h.length)return{ok:!1,views:[],reason:"\uB3C4\uBA74\uC5D0\uC11C \uD615\uC0C1\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4"};let u=Math.max(12,t*(e.gap??.035)),f=h.map((p,m)=>m),d=p=>f[p]===p?p:f[p]=d(f[p]);for(let p=0;p<h.length;p++)for(let m=p+1;m<h.length;m++){let T=h[p],w=h[m],_=Math.max(0,Math.max(T.x0,w.x0)-Math.min(T.x1,w.x1)),v=Math.max(0,Math.max(T.y0,w.y0)-Math.min(T.y1,w.y1));_<u&&v<u&&(f[d(p)]=d(m))}let g=new Map;h.forEach((p,m)=>{let T=d(m);g.has(T)||g.set(T,[]),g.get(T).push(p)});let y=[];for(let p of g.values()){let m=Math.min(...p.map(P=>P.x0)),T=Math.max(...p.map(P=>P.x1)),w=Math.min(...p.map(P=>P.y0)),_=Math.max(...p.map(P=>P.y1)),v=T-m+1,S=_-w+1;if(v<t*.05||S<i*.025)continue;let b=p.reduce((P,L)=>P+L.n,0),x=p.reduce((P,L)=>L.w*L.h>P.w*P.h?L:P),A={x0:x.x0,y0:x.y0,x1:x.x1,y1:x.y1,W:x.w,H:x.h,comp:x},R={id:y.length+1,x0:m,y0:w,x1:T,y1:_,W:v,H:S,ink:b,part:A,comps:p,ids:new Set(p.map(P=>P.id)),label:a,imgW:t,imgH:i,cx(){return(this.part.x0+this.part.x1)/2},cy(){return(this.part.y0+this.part.y1)/2}};Object.assign(R,FM(R)),R.revolveScore=OM(R),y.push(R)}return y.sort((p,m)=>m.ink-p.ink),y.forEach((p,m)=>p.id=m+1),{ok:y.length>0,views:y,w:t,h:i,label:a}}function FM(n){let{label:e,imgW:t}=n,i=n.W,s=new Float64Array(i).fill(1/0),r=new Float64Array(i).fill(-1/0);for(let v=n.y0;v<=n.y1;v++)for(let S=n.x0;S<=n.x1;S++){if(!n.ids.has(e[v*t+S]))continue;let b=S-n.x0;v<s[b]&&(s[b]=v),v>r[b]&&(r[b]=v)}let o=[];for(let v=0;v<i;v++)Number.isFinite(s[v])&&o.push((s[v]+r[v])/2);o.sort((v,S)=>v-S);let a=o.length?o[Math.floor(o.length/2)]:(n.y0+n.y1)/2,l=new Float64Array(i),c=new Float64Array(i),h=new Uint8Array(i),u=0;for(let v=0;v<i;v++)Number.isFinite(s[v])&&(h[v]=1,l[v]=Math.max(0,a-s[v]),c[v]=Math.max(0,r[v]-a),u=Math.max(u,l[v],c[v]));let f=u*.04,d=0,g=0,y=0,p=0,m=0,T=NaN,w=0,_=0;for(let v=0;v<i;v++){if(!h[v])continue;l[v]>f&&c[v]>f&&(d++,g+=Math.abs(l[v]-c[v]),y+=Math.max(l[v],c[v]));let S=Math.max(l[v],c[v]);Number.isFinite(T)&&(m++,Math.abs(S-T)<=Math.max(1,u*.004)&&p++),T=S;let b=(v+.5)/i*2-1;w+=Math.abs(S-u*Math.sqrt(Math.max(0,1-b*b))),_+=u}return{axis:a,rTop:l,rBot:c,hasCol:h,rmax:u,signals:{both:d/i,asym:d?g/y:1,flat:m?p/m:0,aspect:i/Math.max(1,n.H),circleErr:_?w/_:1}}}function OM(n){let e=n.signals;return+((1-Math.min(1,e.asym/.25))*.45+Math.min(1,e.flat/.8)*.3+Math.min(1,e.aspect/2)*.15+Math.min(1,e.both/.8)*.1).toFixed(3)}function up(n,e=400){let t=new Float64Array(e);for(let s=0;s<e;s++){let r=Math.min(n.W-1,Math.floor((s+.5)*n.W/e));t[s]=n.hasCol[r]?(n.rTop[r]+n.rBot[r])/2:0}let i=-1;for(let s=0;s<e;s++)if(t[s]>0){if(i>=0&&s-i>1)for(let r=i+1;r<s;r++)t[r]=t[i]+(t[s]-t[i])*(r-i)/(s-i);i=s}return t}function fp(n,e={}){let t=n.part?.comp||n.comps.reduce((l,c)=>c.w*c.h>l.w*l.h?c:l),i=lp(n,t),s=i?cp(i,i.solid,t):null;if(!s||s.length<3)return{outer:null,holes:[],ignored:[]};let r=[],o=[],a=e.minHole??.025;for(let l of n.comps){if(l===t)continue;let c=l.x0>t.x0&&l.x1<t.x1&&l.y0>t.y0&&l.y1<t.y1,h=l.w>=t.w*a&&l.h>=t.h*a,u=l.w<t.w*.9&&l.h<t.h*.9;if(!(c&&h&&u))continue;let f=lp(n,l);if(!f||f.cavityRatio<.45)continue;let d=cp(f,f.cavity,t);if(!d||d.length<6)continue;let g=Math.abs(BM(d)),y=l.w*l.h;if(g/y>.9){o.push({kind:"inner-edge",w:l.w,h:l.h});continue}r.push(d)}return{outer:s,holes:r,ignored:o}}function lp(n,e){let t=n.imgW,i=n.label,s=e.id,r=e.w+2,o=e.h+2,a=e.x0-1,l=e.y0-1,c=new Uint8Array(r*o),h=new Uint8Array(r*o);for(let y=0;y<o;y++)for(let p=0;p<r;p++){let m=a+p,T=l+y;m>=0&&T>=0&&m<t&&T<n.imgH&&i[T*t+m]===s&&(c[y*r+p]=1)}let u=[];for(let y=0;y<r;y++)u.push(y,(o-1)*r+y);for(let y=0;y<o;y++)u.push(y*r,y*r+r-1);for(;u.length;){let y=u.pop();if(h[y]||c[y])continue;h[y]=1;let p=y%r,m=(y-p)/r;p>0&&u.push(y-1),p<r-1&&u.push(y+1),m>0&&u.push(y-r),m<o-1&&u.push(y+r)}let f=new Uint8Array(r*o),d=new Uint8Array(r*o),g=0;for(let y=0;y<r*o;y++)!c[y]&&!h[y]&&(f[y]=1,g++),d[y]=c[y]||f[y];return{W:r,H:o,ox:a,oy:l,ink:c,cavity:f,solid:d,cavityRatio:g/(r*o)}}function cp(n,e,t){let{W:i,H:s,ox:r,oy:o}=n,a=(v,S)=>v>=0&&S>=0&&v<i&&S<s?e[S*i+v]:0,l=-1,c=-1;e:for(let v=0;v<s;v++)for(let S=0;S<i;S++)if(a(S,v)){l=S,c=v;break e}if(l<0)return null;let h=[[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]],u=[],f=l,d=c,g=6,y=0,p=(i+s)*12+4e3;do{u.push([f,d]);let v=!1;for(let S=0;S<8;S++){let b=(g+6+S)%8,x=f+h[b][0],A=d+h[b][1];if(a(x,A)){f=x,d=A,g=b,v=!0;break}}if(!v)break}while((f!==l||d!==c)&&++y<p);if(u.length<8)return null;let m=Math.max(1.2,Math.min(i,s)*.008),w=Wh(u.map(([v,S])=>({x:v,y:S})),m).map(v=>[v.x+r-t.x0,v.y+o-t.y0]),_=(v,S)=>Math.hypot(v[0]-S[0],v[1]-S[1])<2.5;for(w=w.filter((v,S)=>S===0||!_(v,w[S-1]));w.length>3&&_(w[0],w[w.length-1]);)w.pop();return w}function BM(n){let e=0;for(let t=0;t<n.length;t++){let[i,s]=n[t],[r,o]=n[(t+1)%n.length];e+=i*o-r*s}return e/2}function Wh(n,e){if(n.length<3)return n.slice();let t=n[0],i=n[n.length-1],s=-1,r=0,o=i.x-t.x,a=i.y-t.y,l=Math.hypot(o,a)||1;for(let c=1;c<n.length-1;c++){let h=n[c],u=Math.abs(a*h.x-o*h.y+i.x*t.y-i.y*t.x)/l;u>r&&(r=u,s=c)}return r>e?Wh(n.slice(0,s+1),e).slice(0,-1).concat(Wh(n.slice(s),e)):[t,i]}var zl=null;async function pp(n,e){return zl||(zl=(async()=>{let t={gzip:!0,cacheMethod:n.cacheMethod||"none",logger:n.logger||(()=>{})};n.workerPath&&(t.workerPath=n.workerPath),n.corePath&&(t.corePath=n.corePath),n.langPath&&(t.langPath=n.langPath);let i=await e("eng",1,t);return await i.setParameters({tessedit_char_whitelist:"0123456789.,-x\xD7XRC\u2300\xD8\u25A1",tessedit_pageseg_mode:"11",preserve_interword_spaces:"1"}),i})(),zl)}async function mp(n,e,{scale:t=1}={}){let{data:i}=await n.recognize(e,{},{blocks:!0}),s=[];(a=>{for(let l of a||[])for(let c of l.paragraphs||[])for(let h of c.lines||[])for(let u of h.words||[])s.push(u)})(i.blocks);let o=[];for(let a of s){let l=String(a.text||"").trim(),c=/(?:^|[^0-9.])((?:\d+\.\d+)|(?:\d+))(?!\d)/.exec(l.replace(/,/g,"."));if(!c)continue;let h=Number(c[1]);if(!Number.isFinite(h)||h<=0||h>5e3)continue;let u=/[⌀Ø]/.test(l)?"dia":/^R/i.test(l)?"radius":/^C/i.test(l)||/-C/i.test(l)?"chamfer":/□/.test(l)?"square":"linear",f=/^(\d+)-/.exec(l),d=a.bbox;o.push({text:l,value:h,kind:u,count:f?Number(f[1]):1,conf:a.confidence,x0:d.x0/t,y0:d.y0/t,x1:d.x1/t,y1:d.y1/t,cx:(d.x0+d.x1)/2/t,cy:(d.y0+d.y1)/2/t})}return o}function kM(n,e={}){let t=n.width,i=n.height,{mask:s}=Fl(n,e.threshold??110),r=kl(s,t,i),o=Bl(r),a=s;for(let v=0;v<o;v++)a=Ol(a,t,i);let l=a;for(let v=0;v<o+1;v++)l=op(l,t,i);let c=new Uint8Array(t*i);for(let v=0;v<t*i;v++)s[v]&&!l[v]&&(c[v]=1);let h=Math.max(18,Math.round(Math.min(t,i)*(e.minLenFrac??.02))),u=[],f=[];for(let v=0;v<i;v++){let S=0;for(let b=0;b<=t;b++)b<t&&c[v*t+b]?S++:(S>=h&&u.push({x0:b-S,x1:b-1,y:v,len:S}),S=0)}for(let v=0;v<t;v++){let S=0;for(let b=0;b<=i;b++)b<i&&c[b*t+v]?S++:(S>=h&&f.push({y0:b-S,y1:b-1,x:v,len:S}),S=0)}let d=(v,S)=>{let b=S,x=S;for(;b>0&&s[(b-1)*t+v];)b--;for(;x<i-1&&s[(x+1)*t+v];)x++;return x-b+1},g=(v,S)=>{let b=v,x=v;for(;b>0&&s[S*t+b-1];)b--;for(;x<t-1&&s[S*t+x+1];)x++;return x-b+1},y=Math.max(14,r*5),p=(v,S)=>d(v,S)>=y,m=(v,S)=>g(v,S)>=y,T=Math.max(16,r*12);for(let v of u){let S=v.x0-1,b=0;for(;S>=0&&b<T&&s[v.y*t+S]&&!p(S,v.y);)S--,b++;for(v.x0=S+1,S=v.x1+1,b=0;S<t&&b<T&&s[v.y*t+S]&&!p(S,v.y);)S++,b++;v.x1=S-1,v.len=v.x1-v.x0+1}for(let v of f){let S=v.y0-1,b=0;for(;S>=0&&b<T&&s[S*t+v.x]&&!m(v.x,S);)S--,b++;for(v.y0=S+1,S=v.y1+1,b=0;S<i&&b<T&&s[S*t+v.x]&&!m(v.x,S);)S++,b++;v.y1=S-1,v.len=v.y1-v.y0+1}let w=dp(u,(v,S)=>Math.abs(v.y-S.y)<=2&&Math.abs(v.x0-S.x0)<=3&&Math.abs(v.x1-S.x1)<=3),_=dp(f,(v,S)=>Math.abs(v.x-S.x)<=2&&Math.abs(v.y0-S.y0)<=3&&Math.abs(v.y1-S.y1)<=3);return{horizontal:w,vertical:_,strokePx:r}}function dp(n,e){let t=[];for(let i of n){let s=t.find(r=>e(r,i));if(s){s.n=(s.n||1)+1;continue}t.push({...i,n:1})}return t}function zM(n,e,t={}){let i=[],s=t.near??40;for(let r of n){if(r.kind!=="linear"&&r.kind!=="square")continue;let o=null;for(let a of e.horizontal){let l=(a.x0+a.x1)/2,c=Math.abs(r.cx-l),h=a.y-r.cy;if(h<-6||h>s||c>Math.max(24,a.len*.25))continue;let u=h+c*.5;(!o||u<o.score)&&(o={score:u,len:a.len,dir:"h",line:a})}for(let a of e.vertical){let l=(a.y0+a.y1)/2,c=Math.abs(r.cy-l),h=r.cx-a.x;if(Math.abs(h)>s||c>Math.max(24,a.len*.25))continue;let u=Math.abs(h)+c*.5;(!o||u<o.score)&&(o={score:u,len:a.len,dir:"v",line:a})}o&&i.push({token:r,dir:o.dir,lenPx:o.len,mmPerPx:r.value/o.len,line:o.line})}return i}function VM(n,e=.05){if(!n.length)return{ok:!1,reason:"\uCE58\uC218 \uBB38\uC790\uC640 \uCE58\uC218\uC120\uC744 \uC9DD\uC9C0\uC744 \uC218 \uC5C6\uC5C8\uC2B5\uB2C8\uB2E4"};let t=null;for(let a of n){let l=n.filter(c=>Math.abs(c.mmPerPx-a.mmPerPx)/a.mmPerPx<=e);(!t||l.length>t.group.length)&&(t={center:a.mmPerPx,group:l})}let i=t.group.map(a=>a.mmPerPx).sort((a,l)=>a-l),s=i[Math.floor(i.length/2)],r=t.group.length,o=n.length;return{ok:r>=2||r===1&&o===1,mmPerPx:s,agree:r,total:o,confidence:r/o,used:t.group.map(a=>({text:a.token.text,value:a.token.value,lenPx:a.lenPx,dir:a.dir})),rejected:n.filter(a=>!t.group.includes(a)).map(a=>({text:a.token.text,value:a.token.value,lenPx:a.lenPx}))}}function gp(n,e){let t=kM(e),i=zM(n,t);return{...VM(i),lines:t,pairs:i,tokens:n}}var xp=1e-5,yp=0,Xh=1,Vl=2,_p=3,qh=class n{constructor(e,t){this.pos=e,this.normal=t}clone(){return new n(this.pos.clone(),this.normal.clone())}flip(){this.normal.negate()}interpolate(e,t){return new n(this.pos.clone().lerp(e.pos,t),this.normal.clone().lerp(e.normal,t).normalize())}},Yh=class n{constructor(e,t){this.normal=e,this.w=t}static fromPoints(e,t,i){let s=new I().subVectors(t,e).cross(new I().subVectors(i,e)).normalize();return new n(s,s.dot(e))}clone(){return new n(this.normal.clone(),this.w)}flip(){this.normal.negate(),this.w=-this.w}splitPolygon(e,t,i,s,r){let o=0,a=[];for(let l of e.vertices){let c=this.normal.dot(l.pos)-this.w,h=c<-xp?Vl:c>xp?Xh:yp;o|=h,a.push(h)}switch(o){case yp:(this.normal.dot(e.plane.normal)>0?t:i).push(e);break;case Xh:s.push(e);break;case Vl:r.push(e);break;case _p:{let l=[],c=[],h=e.vertices.length;for(let u=0;u<h;u++){let f=(u+1)%h,d=a[u],g=a[f],y=e.vertices[u],p=e.vertices[f];if(d!==Vl&&l.push(y),d!==Xh&&c.push(d!==Vl?y.clone():y),(d|g)===_p){let m=(this.w-this.normal.dot(y.pos))/this.normal.dot(new I().subVectors(p.pos,y.pos)),T=y.interpolate(p,m);l.push(T),c.push(T.clone())}}l.length>=3&&s.push(new ao(l,e.shared)),c.length>=3&&r.push(new ao(c,e.shared));break}}}},ao=class n{constructor(e,t){this.vertices=e,this.shared=t,this.plane=Yh.fromPoints(e[0].pos,e[1].pos,e[2].pos)}clone(){return new n(this.vertices.map(e=>e.clone()),this.shared)}flip(){this.vertices.reverse().forEach(e=>e.flip()),this.plane.flip()}},Vi=class n{constructor(e){this.plane=null,this.front=null,this.back=null,this.polygons=[],e&&this.build(e)}clone(){let e=new n;return e.plane=this.plane&&this.plane.clone(),e.front=this.front&&this.front.clone(),e.back=this.back&&this.back.clone(),e.polygons=this.polygons.map(t=>t.clone()),e}invert(){for(let t of this.polygons)t.flip();this.plane&&this.plane.flip(),this.front&&this.front.invert(),this.back&&this.back.invert();let e=this.front;this.front=this.back,this.back=e}clipPolygons(e){if(!this.plane)return e.slice();let t=[],i=[];for(let s of e)this.plane.splitPolygon(s,t,i,t,i);return this.front&&(t=this.front.clipPolygons(t)),i=this.back?this.back.clipPolygons(i):[],t.concat(i)}clipTo(e){this.polygons=e.clipPolygons(this.polygons),this.front&&this.front.clipTo(e),this.back&&this.back.clipTo(e)}allPolygons(){let e=this.polygons.slice();return this.front&&(e=e.concat(this.front.allPolygons())),this.back&&(e=e.concat(this.back.allPolygons())),e}build(e){if(!e.length)return;this.plane||(this.plane=e[Math.floor(e.length/2)].plane.clone());let t=[],i=[];for(let s of e)this.plane.splitPolygon(s,this.polygons,this.polygons,t,i);t.length&&(this.front||(this.front=new n),this.front.build(t)),i.length&&(this.back||(this.back=new n),this.back.build(i))}},lo=class n{constructor(e=[]){this.polygons=e}clone(){return new n(this.polygons.map(e=>e.clone()))}union(e){let t=new Vi(this.clone().polygons),i=new Vi(e.clone().polygons);return t.clipTo(i),i.clipTo(t),i.invert(),i.clipTo(t),i.invert(),t.build(i.allPolygons()),new n(t.allPolygons())}subtract(e){let t=new Vi(this.clone().polygons),i=new Vi(e.clone().polygons);return t.invert(),t.clipTo(i),i.clipTo(t),i.invert(),i.clipTo(t),i.invert(),t.build(i.allPolygons()),t.invert(),new n(t.allPolygons())}intersect(e){let t=new Vi(this.clone().polygons),i=new Vi(e.clone().polygons);return t.invert(),i.clipTo(t),i.invert(),t.clipTo(i),i.clipTo(t),t.build(i.allPolygons()),t.invert(),new n(t.allPolygons())}static fromGeometry(e,t=null,i=0){let s=e.index?e.toNonIndexed():e,r=s.getAttribute("position"),o=s.getAttribute("normal"),a=t?new Xe().getNormalMatrix(t):null,l=[];for(let c=0;c<r.count;c+=3){let h=[];for(let y=0;y<3;y++){let p=new I().fromBufferAttribute(r,c+y);t&&p.applyMatrix4(t);let m=o?new I().fromBufferAttribute(o,c+y):new I;a&&m.applyMatrix3(a).normalize(),h.push(new qh(p,m))}let u=h[0].pos,f=h[1].pos,d=h[2].pos,g=new I().subVectors(f,u).cross(new I().subVectors(d,u));g.lengthSq()<1e-14||(o||(g.normalize(),h.forEach(y=>y.normal.copy(g))),l.push(new ao(h,i)))}return s!==e&&s.dispose(),new n(l)}toGeometry(){let e=[],t=[],i=[],s=null,r=0;for(let a of this.polygons){let l=a.vertices;s!==null&&a.shared!==s&&(i.push([r,e.length/3-r,s]),r=e.length/3),s=a.shared;for(let c=2;c<l.length;c++)for(let h of[l[0],l[c-1],l[c]])e.push(h.pos.x,h.pos.y,h.pos.z),t.push(h.normal.x,h.normal.y,h.normal.z)}s!==null&&i.push([r,e.length/3-r,s]);let o=new Ft;o.setAttribute("position",new yt(e,3)),o.setAttribute("normal",new yt(t,3));for(let[a,l,c]of i)o.addGroup(a,l,c);return o}};var ho=[{id:"front",ko:"\uC815\uBA74\uB3C4",axis:"Z",face:"front"},{id:"top",ko:"\uC717\uBA74\uB3C4",axis:"Y",face:"top"},{id:"right",ko:"\uC6B0\uCE21\uBA74\uB3C4",axis:"X",face:"right"},{id:"left",ko:"\uC88C\uCE21\uBA74\uB3C4",axis:"X",face:"left"},{id:"bottom",ko:"\uC544\uB7AB\uBA74\uB3C4",axis:"Y",face:"bottom"},{id:"back",ko:"\uB4B7\uBA74\uB3C4",axis:"Z",face:"back"},{id:"iso",ko:"\uB4F1\uAC01 (\uCC38\uACE0)",axis:null},{id:"section",ko:"\uB2E8\uBA74 (\uCC38\uACE0)",axis:null},{id:"detail",ko:"\uC0C1\uC138 (\uCC38\uACE0)",axis:null},{id:"skip",ko:"\uC4F0\uC9C0 \uC54A\uC74C",axis:null}],Mp=Object.fromEntries(ho.map(n=>[n.id,n.ko])),HM=new Set(["front","top","right","left","bottom","back"]),hi=n=>HM.has(n);function Zh(n){return{front:["X","Y"],back:["X","Y"],top:["X","Z"],bottom:["X","Z"],right:["Z","Y"],left:["Z","Y"]}[n]||null}function Kh(n,e="third"){if(!n.length)return{};let t=a=>a.part||a,i=(a,l,c)=>{let h=t(a),u=t(l);if(c==="x"){let d=Math.max(6,Math.min(h.W,u.W)*.04);return Math.abs(h.x0-u.x0)<=d&&Math.abs(h.x1-u.x1)<=d}let f=Math.max(6,Math.min(h.H,u.H)*.04);return Math.abs(h.y0-u.y0)<=f&&Math.abs(h.y1-u.y1)<=f},s=n.map(a=>{let l=n.some(h=>h!==a&&i(a,h,"x")),c=n.some(h=>h!==a&&i(a,h,"y"));return{v:a,n:(l?1:0)+(c?1:0)}});s.sort((a,l)=>l.n-a.n||l.v.ink-a.v.ink);let r=s[0].v,o={[r.id]:"front"};for(let a of n){if(a===r)continue;let l=i(a,r,"x"),c=i(a,r,"y");if(l&&!c){let h=a.cy()<r.cy();o[a.id]=e==="third"?h?"top":"bottom":h?"bottom":"top"}else if(c&&!l){let h=a.cx()>r.cx();o[a.id]=e==="third"?h?"right":"left":h?"left":"right"}else o[a.id]="iso"}return o}function bp(n,e,t){let{X:i,Y:s,Z:r}=e;switch(n){case"front":return{to2d:(o,a)=>[o*t,s-a*t],rot:null,depth:"Z"};case"back":return{to2d:(o,a)=>[i-o*t,s-a*t],rot:null,depth:"Z"};case"top":return{to2d:(o,a)=>[o*t,-(a*t)],rot:["X",-Math.PI/2],depth:"Y"};case"bottom":return{to2d:(o,a)=>[o*t,-(r-a*t)],rot:["X",-Math.PI/2],depth:"Y"};case"right":return{to2d:(o,a)=>[-(r-o*t),s-a*t],rot:["Y",Math.PI/2],depth:"X"};case"left":return{to2d:(o,a)=>[-(o*t),s-a*t],rot:["Y",Math.PI/2],depth:"X"};default:return null}}function co(n,e){let t=0;for(let i=0;i<n.length;i++){let s=n[i],r=n[(i+1)%n.length];t+=s.x*r.y-r.x*s.y}return t>0===e?n:n.slice().reverse()}function GM(n,e,t,i,{pad:s=0}={}){let r=bp(e,i,t);if(!r||!n.contours?.outer)return null;let o=new ai(co(n.contours.outer.map(([c,h])=>new he(...r.to2d(c,h))),!0));for(let c of n.contours.holes||[])c.length>=3&&o.holes.push(new oi(co(c.map(([h,u])=>new he(...r.to2d(h,u))),!1)));let a=i[r.depth],l=new Pi(o,{depth:a+2*s,bevelEnabled:!1,curveSegments:4});return l.translate(0,0,-s),r.rot&&(r.rot[0]==="X"?l.rotateX(r.rot[1]):l.rotateY(r.rot[1])),l.computeVertexNormals(),l}function $M(n,e){let t={X:[],Y:[],Z:[]};for(let{view:r,role:o}of n){let a=Zh(o);if(!a)continue;let l=r.part||r;t[a[0]].push({role:o,mm:l.W*e}),t[a[1]].push({role:o,mm:l.H*e})}let i={},s=[];for(let r of["X","Y","Z"]){let o=t[r];if(!o.length){i[r]=null;continue}let a=o.find(c=>c.role==="front")||o[0];i[r]=a.mm;let l=o.filter(c=>c!==a);for(let c of l){let h=Math.abs(c.mm-a.mm)/Math.max(a.mm,1e-6);s.push({axis:r,a,b:c,diffPct:+(h*100).toFixed(1),ok:h<=.03})}}return{ext:i,checks:s,votes:t}}function Sp(n,e,t={}){let i=n.filter(y=>hi(y.role)&&y.view.contours?.outer),s=[];if(i.length<2&&!t.thickness)return{ok:!1,reason:"\uC815\uD22C\uC0C1 \uBDF0\uAC00 \uB458 \uC774\uC0C1 \uD544\uC694\uD569\uB2C8\uB2E4(\uC815\uBA74\uB3C4 + \uC717\uBA74\uB3C4 \uB610\uB294 \uCE21\uBA74\uB3C4). \uBDF0\uAC00 \uD558\uB098\uBA74 \uB450\uAED8\uB97C \uB123\uC5B4 \uD310\uC73C\uB85C \uB9CC\uB4DC\uC138\uC694."};let{ext:r,checks:o}=$M(i,e);for(let y of["X","Y","Z"])if(!r[y]){if(!t.thickness)return{ok:!1,reason:`${y} \uCD95 \uD06C\uAE30\uB97C \uC815\uD558\uB294 \uBDF0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 \uBC29\uD5A5\uC758 \uBDF0\uB97C \uC9C0\uC815\uD558\uAC70\uB098 \uB450\uAED8\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694.`};r[y]=t.thickness,s.push(`${y} \uCD95\uC740 \uB450\uAED8 \uC785\uB825\uAC12 ${t.thickness}mm \uB85C \uC815\uD588\uC2B5\uB2C8\uB2E4`)}let a={X:0,Y:0,Z:0};for(let y of i){let p=Zh(y.role);a[p[0]]++,a[p[1]]++}let l=null,c=[],h=new I(r.X/2,r.Y/2,r.Z/2);if(i.forEach((y,p)=>{let m=ho.find(v=>v.id===y.role).axis,T=a[m]>0?Math.max(.2,r[m]*.01):0,w=GM(y.view,y.role,e,r,{pad:T});if(!w)return;if(p>0){let v=1+p*3e-4;w.translate(-h.x,-h.y,-h.z),w.scale(v,v,v),w.translate(h.x,h.y,h.z)}c.push(w);let _=lo.fromGeometry(w);l=l?l.intersect(_):_}),!l)return{ok:!1,reason:"\uBC00\uC5B4\uB0BC \uC724\uACFD\uC774 \uC5C6\uC2B5\uB2C8\uB2E4"};let u=l.toGeometry();u.computeVertexNormals(),u.computeBoundingBox();let f=u.boundingBox,d={X:f.max.x-f.min.x,Y:f.max.y-f.min.y,Z:f.max.z-f.min.z},g=Hl(u);for(let y of c)y.dispose();return{ok:!0,geometry:u,ext:r,size:d,volume_cm3:g/1e3,checks:o,notes:s,views:i.map(y=>y.role)}}function Hl(n){let e=n.attributes.position,t=n.index,i=new I,s=new I,r=new I,o=0,a=(l,c,h)=>{i.fromBufferAttribute(e,l),s.fromBufferAttribute(e,c),r.fromBufferAttribute(e,h),o+=i.dot(s.clone().cross(r))/6};if(t)for(let l=0;l<t.count;l+=3)a(t.getX(l),t.getX(l+1),t.getX(l+2));else for(let l=0;l<e.count;l+=3)a(l,l+1,l+2);return Math.abs(o)}function wp(n,e,t,i,s,r=220){if(!bp(t,s,i))return null;let a=Zh(t),l=e.part||e,c=l.W*i,h=l.H*i,u=r/Math.max(c,1e-6),f=r/Math.max(h,1e-6),d=new Uint8Array(r*r),g=new Uint8Array(r*r),y=b=>{let x=P=>P==="X"?b.x:P==="Y"?b.y:b.z,A,R;switch(t){case"front":A=x("X"),R=s.Y-x("Y");break;case"back":A=s.X-x("X"),R=s.Y-x("Y");break;case"top":A=x("X"),R=x("Z");break;case"bottom":A=x("X"),R=s.Z-x("Z");break;case"right":A=s.Z-x("Z"),R=s.Y-x("Y");break;case"left":A=x("Z"),R=s.Y-x("Y");break}return[A*u,R*f]},p=n.attributes.position,m=n.index,T=[new I,new I,new I],w=(b,x,A)=>{T[0].fromBufferAttribute(p,b),T[1].fromBufferAttribute(p,x),T[2].fromBufferAttribute(p,A),WM(d,r,y(T[0]),y(T[1]),y(T[2]))};if(m)for(let b=0;b<m.count;b+=3)w(m.getX(b),m.getX(b+1),m.getX(b+2));else for(let b=0;b<p.count;b+=3)w(b,b+1,b+2);let _=b=>[b[0]*i*u,b[1]*i*f];vp(g,r,e.contours.outer.map(_),1);for(let b of e.contours.holes||[])vp(g,r,b.map(_),0);let v=0,S=0;for(let b=0;b<r*r;b++){let x=d[b],A=g[b];x&&A&&v++,(x||A)&&S++}return{iou:S?v/S:0,role:t}}function WM(n,e,t,i,s){let r=Math.max(0,Math.floor(Math.min(t[1],i[1],s[1]))),o=Math.min(e-1,Math.ceil(Math.max(t[1],i[1],s[1])));for(let a=r;a<=o;a++){let l=a+.5,c=[],h=(d,g)=>{(d[1]<=l&&g[1]>l||g[1]<=l&&d[1]>l)&&c.push(d[0]+(l-d[1])*(g[0]-d[0])/(g[1]-d[1]))};if(h(t,i),h(i,s),h(s,t),c.length<2)continue;c.sort((d,g)=>d-g);let u=Math.max(0,Math.floor(c[0])),f=Math.min(e-1,Math.ceil(c[c.length-1]));for(let d=u;d<=f;d++)n[a*e+d]=1}}function vp(n,e,t,i){let s=Math.max(0,Math.floor(Math.min(...t.map(o=>o[1])))),r=Math.min(e-1,Math.ceil(Math.max(...t.map(o=>o[1]))));for(let o=s;o<=r;o++){let a=o+.5,l=[];for(let c=0;c<t.length;c++){let h=t[c],u=t[(c+1)%t.length];(h[1]<=a&&u[1]>a||u[1]<=a&&h[1]>a)&&l.push(h[0]+(a-h[1])*(u[0]-h[0])/(u[1]-h[1]))}l.sort((c,h)=>c-h);for(let c=0;c+1<l.length;c+=2){let h=Math.max(0,Math.floor(l[c])),u=Math.min(e-1,Math.ceil(l[c+1]));for(let f=h;f<=u;f++)n[o*e+f]=i}}}function Tp(n){let e=n.filter(i=>hi(i.role)),t=n.some(i=>i.role==="section");if(e.length>=2)return{method:"ortho",why:`\uC815\uD22C\uC0C1 \uBDF0 ${e.length}\uAC1C\uB85C \uB9CC\uB4ED\uB2C8\uB2E4`};if(e.length===1){let i=e[0].view;return i.revolveScore>=.85&&i.signals.aspect>1.2?{method:"revolve",why:"\uBDF0\uAC00 \uD558\uB098\uB77C \uD68C\uC804\uCCB4\uB85C \uB9CC\uB4ED\uB2C8\uB2E4"}:{method:"plate",why:"\uBDF0\uAC00 \uD558\uB098\uB77C \uB450\uAED8\uB97C \uB123\uC5B4 \uD310\uC73C\uB85C \uB9CC\uB4ED\uB2C8\uB2E4"}}return t?{method:"unsupported",why:"\uB2E8\uBA74\uB3C4\uB85C\uB9CC \uC815\uC758\uB418\uB294 \uBD80\uD488\uC740 \uB9CC\uB4E4\uC9C0 \uBABB\uD569\uB2C8\uB2E4"}:{method:"none",why:"\uC815\uBA74, \uC717\uBA74, \uCE21\uBA74 \uC911 \uD558\uB098 \uC774\uC0C1\uC744 \uC9C0\uC815\uD558\uC138\uC694"}}var uo=Math.PI/180;function Gl(n,e,t,i,s,r,o){let a=[];for(let l=0;l<=r;l++){let c=(i+(s-i)*l/r)*uo;a.push({x:n+t*Math.cos(c),r:e+t*Math.sin(c),tag:l===0||l===r?o:`${o}_arc`})}return a}function Ep(n,e){let t={};for(let i of n.transitions||[])i.at===e&&(t[i.type]=i);return t}function Jh(n,e=10){let t=n.segments||[],i=Hh(n),s=t.length,r=[],o=[],a=(c,h,u)=>r.push({x:c,r:h,tag:u});for(let c=0;c<s;c++){let h=t[c],[u,f]=i[c],[d,g]=zi(h),y=d/2,p=g/2,m=x=>y+(p-y)*(x-u)/(f-u||1),T=Ep(n,c),w="none";if(c===0)w="convex";else{let x=zi(t[c-1])[1]/2;w=y>x+1e-9?"convex":y<x-1e-9?"concave":"flush"}let _=Ep(n,c+1),v="none";if(c===s-1)v="convex";else{let x=zi(t[c+1])[0]/2;v=p>x+1e-9?"convex":p<x-1e-9?"concave":"flush"}let S=u;if(w==="convex"&&T.chamfer?.size>0){let x=T.chamfer,A=x.size*Math.tan((x.angle||45)*uo);a(u,y-A,"chamfer"),a(u+x.size,m(u+x.size),"chamfer_end"),S=u+x.size}else if(w==="convex"&&T.round?.radius>0){let x=T.round.radius;r.push(...Gl(u+x,y-x,x,180,90,e,"round")),S=u+x}else if(w==="concave"&&T.undercut?.width>0){let x=T.undercut;a(u,y-x.depth,"undercut"),a(u+x.width,y-x.depth,"undercut"),a(u+x.width,m(u+x.width),"undercut_end"),S=u+x.width,T.fillet&&o.push(`\uACBD\uACC4 ${c}: \uB3C4\uD53C\uD648\uACFC \uD544\uB81B\uC774 \uD568\uAED8 \uC788\uC5B4 \uD544\uB81B\uC740 \uBB34\uC2DC\uD588\uC2B5\uB2C8\uB2E4.`)}else if(w==="concave"&&T.fillet?.radius>0){let x=T.fillet.radius;r.push(...Gl(u+x,y+x,x,180,270,e,"fillet")),S=u+x}else a(u,y,"corner");let b=(n.grooves||[]).filter(x=>x.segment===c).sort((x,A)=>x.offset-A.offset);for(let x of b){let A=u+x.offset,R=u+x.offset+x.width;if(A<S-1e-9){o.push(`grooves: \uC138\uADF8\uBA3C\uD2B8 ${c} \uC758 \uD648(offset ${x.offset}) \uC774 \uBAA8\uC11C\uB9AC \uCC98\uB9AC\uC640 \uACB9\uCCD0 \uAC74\uB108\uB6F0\uC5C8\uC2B5\uB2C8\uB2E4.`);continue}a(A,m(A),"groove"),a(A,m(A)-x.depth,"groove_floor"),a(R,m(R)-x.depth,"groove_floor"),a(R,m(R),"groove_end"),S=R}if(v==="convex"&&_.chamfer?.size>0){let x=_.chamfer,A=x.size*Math.tan((x.angle||45)*uo);f-x.size<S-1e-9&&o.push(`\uACBD\uACC4 ${c+1}: \uBAA8\uB530\uAE30\uAC00 \uC55E\uC120 \uD53C\uCC98\uC640 \uACB9\uCE69\uB2C8\uB2E4.`),a(f-x.size,m(f-x.size),"chamfer_start"),a(f,p-A,"chamfer")}else if(v==="convex"&&_.round?.radius>0){let x=_.round.radius;r.push(...Gl(f-x,p-x,x,90,0,e,"round"))}else if(v==="concave"&&_.undercut?.width>0){let x=_.undercut;a(f-x.width,m(f-x.width),"undercut_start"),a(f-x.width,p-x.depth,"undercut"),a(f,p-x.depth,"undercut"),_.fillet&&o.push(`\uACBD\uACC4 ${c+1}: \uB3C4\uD53C\uD648\uACFC \uD544\uB81B\uC774 \uD568\uAED8 \uC788\uC5B4 \uD544\uB81B\uC740 \uBB34\uC2DC\uD588\uC2B5\uB2C8\uB2E4.`)}else if(v==="concave"&&_.fillet?.radius>0){let x=_.fillet.radius;r.push(...Gl(f-x,p+x,x,270,360,e,"fillet"))}else a(f,p,"corner")}let l=[];for(let c of r){let h=l[l.length-1];h&&Math.abs(h.x-c.x)<1e-9&&Math.abs(h.r-c.r)<1e-9||l.push(c)}return{points:l,notes:o}}function jh(n,e=10){let t=cs(n),i=[],s=(f,d,g)=>i.push({x:f,r:d,tag:g}),r=Object.fromEntries((n.features||[]).filter(f=>f.type==="center_hole").map(f=>[f.end,f])),o=()=>{let f=r.left;if(!f){s(0,0,"axis");return}let d=zh(f.d||2),g=d.d/2/Math.tan(59*uo);s(0,d.D/2,"center_hole"),s(d.cone_depth,d.d/2,"center_hole"),s(d.cone_depth+d.pilot_depth,d.d/2,"center_hole"),s(d.cone_depth+d.pilot_depth+g,0,"center_hole_tip")},a=()=>{let f=r.right;if(!f){s(t,0,"axis");return}let d=zh(f.d||2),g=d.d/2/Math.tan(59*uo);s(t-d.cone_depth-d.pilot_depth-g,0,"center_hole_tip"),s(t-d.cone_depth-d.pilot_depth,d.d/2,"center_hole"),s(t-d.cone_depth,d.d/2,"center_hole"),s(t,d.D/2,"center_hole")},l=n.bore;if(!l||!l.segments?.length)return o(),a(),{points:Ap(i)};let c=l.segments,h=l.chamfer_left||0,u=l.chamfer_right||0;if(l.through){let f=0;c.forEach((d,g)=>{let y=d.diameter/2;g===0?h>0?(s(0,y+h,"bore_chamfer"),s(h,y,"bore_chamfer_end")):s(0,y,"bore"):s(f,y,"bore_step");let p=f+d.length;g===c.length-1&&u>0?(s(p-u,y,"bore_chamfer_start"),s(p,y+u,"bore_chamfer")):s(p,y,"bore"),f=p})}else if(l.from==="right"){o();let f=c.reduce((y,p)=>y+p.length,0),d=t-f;s(d,0,"bore_bottom");let g=[...c].reverse();g.forEach((y,p)=>{let m=y.diameter/2;s(d,m,p===0?"bore_bottom":"bore_step");let T=d+y.length;p===g.length-1&&u>0?(s(T-u,m,"bore_chamfer_start"),s(T,m+u,"bore_chamfer")):s(T,m,"bore"),d=T})}else{let f=0;c.forEach((d,g)=>{let y=d.diameter/2;g===0?h>0?(s(0,y+h,"bore_chamfer"),s(h,y,"bore_chamfer_end")):s(0,y,"bore"):s(f,y,"bore_step");let p=f+d.length;s(p,y,"bore"),f=p}),s(f,0,"bore_bottom"),a()}return{points:Ap(i)}}function Ap(n){let e=[];for(let t of n){let i=e[e.length-1];i&&Math.abs(i.x-t.x)<1e-9&&Math.abs(i.r-t.r)<1e-9||e.push(t)}return e}function XM(n,e,t=720){let i=Math.PI*n*n,s=0,r=(e.width||0)/2,o=e.depth||0,a=(e.across_flats||0)/2;for(let l=0;l<t;l++){let c=2*Math.PI*(l+.5)/t,h=n;if(e.type==="keyway"){let u=Math.cos(c),f=Math.abs(Math.sin(c));u>0&&((n-o)*f<=r*u?h=Math.min(n,(n-o)/u):n*f<=r&&(h=Math.min(n,r/f)))}else if(e.type==="flat"){let u=Math.cos(c),f=e.count===2?2:1;u>0&&(h=Math.min(n,(n-o)/u)),f===2&&u<0&&(h=Math.min(n,(n-o)/-u))}else if(e.type==="hex"){let u=(c+Math.PI/6)%(Math.PI/3)-Math.PI/6;h=Math.min(n,a/Math.cos(u))}s+=.5*h*h*(2*Math.PI/t)}return Math.max(0,i-s)}function Cp(n){let e=0;for(let t=1;t<n.length;t++){let i=n[t-1],s=n[t];e+=Math.PI/3*(s.x-i.x)*(i.r*i.r+i.r*s.r+s.r*s.r)}return e}function qM(n,e=12){let t=Jh(n,e).points,i=jh(n,e).points,s=Cp(t)-Cp(i),r=[];for(let o of n.features||[])if(["keyway","flat","hex"].includes(o.type)&&o.segment>=0&&o.segment<(n.segments||[]).length){let a=n.segments[o.segment],l=Math.min(...zi(a))/2,c=o.type==="hex"?a.length:o.length,h=XM(l,o);r.push({type:o.type,mm3:h*c}),s-=h*c}else if(o.type==="hex_socket"){let a=Math.sqrt(3)/2*o.across_flats*o.across_flats*o.depth;r.push({type:o.type,mm3:a}),s-=a}else if(o.type==="cross_hole"){let a=Gh(n,o.position),l=$h(n,o.position),c=o.through===!1?Math.min(o.depth||0,a):Math.max(0,a-l),h=Math.PI*(o.diameter/2)**2*c;r.push({type:o.type,mm3:h}),s-=h}return{volume_mm3:Math.max(0,s),removed:r}}function Rp(n,e=7.85){let{volume_mm3:t,removed:i}=qM(n);return{volume_mm3:t,volume_cm3:t/1e3,mass_g:t/1e3*e,removed:i}}var ZM=Math.PI/180;function Pp(n,e=96,t=30,i=0,s=2*Math.PI){let r=n.filter((b,x)=>x===0||Math.abs(b.x-n[x-1].x)>1e-9||Math.abs(b.r-n[x-1].r)>1e-9),o=r.length;if(o<2)return new Ft;let a=[];for(let b=0;b<o-1;b++){let x=r[b+1].x-r[b].x,A=r[b+1].r-r[b].r,R=Math.hypot(x,A)||1;a.push({x:-A/R,r:x/R})}let l=[];for(let b=0;b<o;b++){let x=a[b-1],A=a[b];if(!x)l.push([A]);else if(!A)l.push([x]);else{let R=x.x*A.x+x.r*A.r;if(Math.acos(Math.max(-1,Math.min(1,R)))<t*ZM){let P=x.x+A.x,L=x.r+A.r,k=Math.hypot(P,L)||1;l.push([{x:P/k,r:L/k}])}else l.push([x,A])}}let c=[],h=[],u=[],f=[],d=e+1;for(let b=0;b<o;b++){let x=[];for(let A of l[b]){x.push(c.length/3);for(let R=0;R<=e;R++){let P=i+s*R/e,L=Math.sin(P),k=Math.cos(P);c.push(r[b].x,r[b].r*L,r[b].r*k),h.push(A.x,A.r*L,A.r*k)}}f.push(x)}for(let b=0;b<o-1;b++){let x=f[b][f[b].length-1],A=f[b+1][0],R=r[b].r<1e-9,P=r[b+1].r<1e-9;for(let L=0;L<e;L++){let k=x+L,z=x+L+1,N=A+L,V=A+L+1;R||u.push(k,N,z),P||u.push(z,N,V)}}let g=new Ft;g.setAttribute("position",new yt(c,3)),g.setAttribute("normal",new yt(h,3)),g.setIndex(u);let y=new I,p=new I,m=new I,T=new I,w=g.getAttribute("position"),_=g.getAttribute("normal"),v=0,S=0;for(let b=0;b<u.length&&S<12;b+=3){y.fromBufferAttribute(w,u[b]),p.fromBufferAttribute(w,u[b+1]),m.fromBufferAttribute(w,u[b+2]);let x=p.clone().sub(y).cross(m.clone().sub(y));x.lengthSq()<1e-10||(T.fromBufferAttribute(_,u[b]).add(new I().fromBufferAttribute(_,u[b+1])).add(new I().fromBufferAttribute(_,u[b+2])),v+=x.dot(T)<0?1:-1,S++)}if(v>0){for(let b=0;b<u.length;b+=3){let x=u[b+1];u[b+1]=u[b+2],u[b+2]=x}g.setIndex(u)}return g}function Ip(){let n={metalness:.86,roughness:.34,envMapIntensity:1};return{revolve:new bn({...n,color:12172741,name:"revolve"}),plate:new bn({...n,color:10465480,roughness:.42,name:"plate"}),extrude:new bn({...n,color:12629148,roughness:.5,metalness:.6,name:"extrude"}),selected:new bn({...n,color:8161791,roughness:.3,name:"selected"})}}function Qh(n,e){if(n.length<3)return n.slice();let t=n[0],i=n[n.length-1],s=-1,r=0,o=i.x-t.x,a=i.r-t.r,l=Math.hypot(o,a)||1;for(let c=1;c<n.length-1;c++){let h=n[c],u=Math.abs(a*h.x-o*h.r+i.x*t.r-i.r*t.x)/l;u>r&&(r=u,s=c)}return r>e?Qh(n.slice(0,s+1),e).slice(0,-1).concat(Qh(n.slice(s),e)):[t,i]}function Lp(n,e,{radial:t=96,material:i,tol:s=.004}={}){let r=n.length,o=[];for(let h=0;h<r;h++)o.push({x:(h+.5)/r*e,r:Math.max(.01,n[h])});o=Qh(o,Math.max(.05,e*s)),o=[{x:0,r:0},...o,{x:e,r:0}];let a=Pp(o,t,28);a.computeBoundingBox();let l=a.boundingBox.getCenter(new I);a.translate(-l.x,-l.y,-l.z);let c=new at(a,i);return c.castShadow=c.receiveShadow=!0,c.userData.axis=[1,0,0],c.userData.holes=[],c}function Np(n,e,t,{material:i,bevel:s=0}={}){if(!n||n.length<3)return null;let r=new ai(co(n.map(([c,h])=>new he(c,-h)),!0));for(let c of e||[])!c||c.length<3||r.holes.push(new oi(co(c.map(([h,u])=>new he(h,-u)),!1)));let o=new Pi(r,{depth:Math.max(.2,t),bevelEnabled:s>0,bevelSize:s,bevelThickness:s,bevelSegments:2,curveSegments:4});o.computeVertexNormals(),o.computeBoundingBox();let a=o.boundingBox.getCenter(new I);o.translate(-a.x,-a.y,-a.z);let l=new at(o,i);return l.castShadow=l.receiveShadow=!0,l.userData.axis=[0,0,1],l.userData.holes=(e||[]).filter(c=>c&&c.length>=3).map(c=>{let h=0,u=0;for(let[y,p]of c)h+=y,u+=-p;let f=h/c.length,d=u/c.length,g=0;for(let[y,p]of c)g+=Math.hypot(y-f,-p-d);return{x:f-a.x,y:d-a.y,z:0,r:+(g/c.length).toFixed(2)}}),l}var Dp={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]},Hi=class{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new su(e)}),this.register(function(e){return new ru(e)}),this.register(function(e){return new cu(e)}),this.register(function(e){return new hu(e)}),this.register(function(e){return new uu(e)}),this.register(function(e){return new fu(e)}),this.register(function(e){return new ou(e)}),this.register(function(e){return new au(e)}),this.register(function(e){return new lu(e)}),this.register(function(e){return new du(e)}),this.register(function(e){return new pu(e)}),this.register(function(e){return new mu(e)}),this.register(function(e){return new gu(e)}),this.register(function(e){return new xu(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,i,s){let r=new iu,o=[];for(let a=0,l=this.pluginCallbacks.length;a<l;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,s).catch(i)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,s,r,t)})}},it={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},eu="KHR_mesh_quantization",mn={};mn[Lt]=it.NEAREST;mn[Va]=it.NEAREST_MIPMAP_NEAREST;mn[ss]=it.NEAREST_MIPMAP_LINEAR;mn[Dt]=it.LINEAR;mn[Ys]=it.LINEAR_MIPMAP_NEAREST;mn[$n]=it.LINEAR_MIPMAP_LINEAR;mn[Mn]=it.CLAMP_TO_EDGE;mn[Ls]=it.REPEAT;mn[Ns]=it.MIRRORED_REPEAT;var Up={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},KM=new Be,Fp=12,JM=1179937895,jM=2,Op=8,QM=1313821514,eb=5130562;function ui(n,e){return n.length===e.length&&n.every(function(t,i){return t===e[i]})}function tb(n){return new TextEncoder().encode(n).buffer}function nb(n){return ui(n.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function ib(n,e,t){let i={min:new Array(n.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(n.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=e;s<e+t;s++)for(let r=0;r<n.itemSize;r++){let o;n.itemSize>4?o=n.array[s*n.itemSize+r]:(r===0?o=n.getX(s):r===1?o=n.getY(s):r===2?o=n.getZ(s):r===3&&(o=n.getW(s)),n.normalized===!0&&(o=li.normalize(o,n.array))),i.min[r]=Math.min(i.min[r],o),i.max[r]=Math.max(i.max[r],o)}return i}function Bp(n){return Math.ceil(n/4)*4}function tu(n,e=0){let t=Bp(n.byteLength);if(t!==n.byteLength){let i=new Uint8Array(t);if(i.set(new Uint8Array(n)),e!==0)for(let s=n.byteLength;s<t;s++)i[s]=e;return i.buffer}return n}function nu(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function sb(n,e){if(typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas){let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),n.convertToBlob({type:e,quality:t})}else return new Promise(t=>n.toBlob(t,e))}var iu=class{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r185"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,i={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},i),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);let s=this,r=s.buffers,o=s.json;i=s.options;let a=s.extensionsUsed,l=s.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(a),u=Object.keys(l);if(h.length>0&&(o.extensionsUsed=h),u.length>0&&(o.extensionsRequired=u),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=c.size),i.binary===!0){let f=new FileReader;f.readAsArrayBuffer(c),f.onloadend=function(){let d=tu(f.result),g=new DataView(new ArrayBuffer(Op));g.setUint32(0,d.byteLength,!0),g.setUint32(4,eb,!0);let y=tu(tb(JSON.stringify(o)),32),p=new DataView(new ArrayBuffer(Op));p.setUint32(0,y.byteLength,!0),p.setUint32(4,QM,!0);let m=new ArrayBuffer(Fp),T=new DataView(m);T.setUint32(0,JM,!0),T.setUint32(4,jM,!0);let w=Fp+p.byteLength+y.byteLength+g.byteLength+d.byteLength;T.setUint32(8,w,!0);let _=new Blob([m,p,y,g,d],{type:"application/octet-stream"}),v=new FileReader;v.readAsArrayBuffer(_),v.onloadend=function(){t(v.result)}}}else if(o.buffers&&o.buffers.length>0){let f=new FileReader;f.readAsDataURL(c),f.onloadend=function(){let d=f.result;o.buffers[0].uri=d,t(o)}}else t(o)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;let i=this.options,s=this.extensionsUsed;try{let r=JSON.parse(JSON.stringify(e.userData));if(i.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(let o in r.gltfExtensions)t.extensions[o]=r.gltfExtensions[o],s[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){let s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(e,s)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;let i=new I;for(let s=0,r=e.count;s<r;s++)if(Math.abs(i.fromBufferAttribute(e,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){let t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);let i=e.clone(),s=new I;for(let r=0,o=i.count;r<o;r++)s.fromBufferAttribute(i,r),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),i.setXYZ(r,s.x,s.y,s.z);return t.attributesNormalized.set(e,i),i}applyTextureTransform(e,t){let i=!1,s={};(t.offset.x!==0||t.offset.y!==0)&&(s.offset=t.offset.toArray(),i=!0),t.rotation!==0&&(s.rotation=t.rotation,i=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(s.scale=t.repeat.toArray(),i=!0),i&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function i(d){return d.colorSpace===It?function(y){return y<.04045?y*.0773993808:Math.pow(y*.9478672986+.0521327014,2.4)}:function(y){return y}}e instanceof Ri&&(e=await this.decompressTextureAsync(e)),t instanceof Ri&&(t=await this.decompressTextureAsync(t));let s=e?e.image:null,r=t?t.image:null,o=Math.max(s?s.width:0,r?r.width:0),a=Math.max(s?s.height:0,r?r.height:0),l=nu();l.width=o,l.height=a;let c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,o,a);let h=c.getImageData(0,0,o,a);if(s){c.drawImage(s,0,0,o,a);let d=i(e),g=c.getImageData(0,0,o,a).data;for(let y=2;y<g.length;y+=4)h.data[y]=d(g[y]/256)*256}if(r){c.drawImage(r,0,0,o,a);let d=i(t),g=c.getImageData(0,0,o,a).data;for(let y=1;y<g.length;y+=4)h.data[y]=d(g[y]/256)*256}c.putImageData(h,0,0);let f=(e||t).clone();return f.source=new ni(l),f.colorSpace=pn,f.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),f}async buildNormalMapTextureAsync(e,t,i){e instanceof Ri&&(e=await this.decompressTextureAsync(e));let s=e.image,r=nu();r.width=s.width,r.height=s.height;let o=r.getContext("2d",{willReadFrequently:!0});o.drawImage(s,0,0,r.width,r.height);let a=o.getImageData(0,0,r.width,r.height),l=a.data;for(let h=0;h<l.length;h+=4)t&&(l[h+0]=255-l[h+0]),i&&(l[h+1]=255-l[h+1]);o.putImageData(a,0,0);let c=e.clone();return c.source=new ni(r),c}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){let t=this.json,i=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),i.push(e),0}processBufferView(e,t,i,s,r){let o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(t){case it.BYTE:case it.UNSIGNED_BYTE:a=1;break;case it.SHORT:case it.UNSIGNED_SHORT:a=2;break;default:a=4}let l=e.itemSize*a;r===it.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);let c=Bp(s*l),h=new DataView(new ArrayBuffer(c)),u=0;for(let g=i;g<i+s;g++){for(let y=0;y<e.itemSize;y++){let p;e.itemSize>4?p=e.array[g*e.itemSize+y]:(y===0?p=e.getX(g):y===1?p=e.getY(g):y===2?p=e.getZ(g):y===3&&(p=e.getW(g)),e.normalized===!0&&(p=li.normalize(p,e.array))),t===it.FLOAT?h.setFloat32(u,p,!0):t===it.INT?h.setInt32(u,p,!0):t===it.UNSIGNED_INT?h.setUint32(u,p,!0):t===it.SHORT?h.setInt16(u,p,!0):t===it.UNSIGNED_SHORT?h.setUint16(u,p,!0):t===it.BYTE?h.setInt8(u,p):t===it.UNSIGNED_BYTE&&h.setUint8(u,p),u+=a}u%l!==0&&(u+=l-u%l)}let f={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(f.target=r),r===it.ARRAY_BUFFER&&(f.byteStride=l),this.byteOffset+=c,o.bufferViews.push(f),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){let t=this,i=t.json;return i.bufferViews||(i.bufferViews=[]),new Promise(function(s){let r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){let o=tu(r.result),a={buffer:t.processBuffer(o),byteOffset:t.byteOffset,byteLength:o.byteLength};t.byteOffset+=o.byteLength,s(i.bufferViews.push(a)-1)}})}processAccessor(e,t,i,s){let r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},a;if(e.array.constructor===Float32Array)a=it.FLOAT;else if(e.array.constructor===Int32Array)a=it.INT;else if(e.array.constructor===Uint32Array)a=it.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=it.SHORT;else if(e.array.constructor===Uint16Array)a=it.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=it.BYTE;else if(e.array.constructor===Uint8Array)a=it.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(i===void 0&&(i=0),(s===void 0||s===1/0)&&(s=e.count),s===0)return null;let l=ib(e,i,s),c;t!==void 0&&(c=e===t.index?it.ELEMENT_ARRAY_BUFFER:it.ARRAY_BUFFER);let h=this.processBufferView(e,a,i,s,c),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:a,count:s,max:l.max,min:l.min,type:o[e.itemSize]};return e.normalized===!0&&(u.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(u)-1}processImage(e,t,i,s="image/png"){if(e!==null){let r=this,o=r.cache,a=r.json,l=r.options,c=r.pending;o.images.has(e)||o.images.set(e,{});let h=o.images.get(e),u=s+":flipY/"+i.toString();if(h[u]!==void 0)return h[u];a.images||(a.images=[]);let f={mimeType:s},d=nu();d.width=Math.min(e.width,l.maxTextureSize),d.height=Math.min(e.height,l.maxTextureSize);let g=d.getContext("2d",{willReadFrequently:!0});if(i===!0&&(g.translate(0,d.height),g.scale(1,-1)),e.data!==void 0){t!==sn&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);let p=new Uint8ClampedArray(e.height*e.width*4);for(let m=0;m<p.length;m+=4)p[m+0]=e.data[m+0],p[m+1]=e.data[m+1],p[m+2]=e.data[m+2],p[m+3]=e.data[m+3];g.putImageData(new ImageData(p,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)g.drawImage(e,0,0,d.width,d.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(sb(d,s).then(p=>r.processBufferViewImage(p)).then(p=>{f.bufferView=p})):f.uri=Bs.getDataURL(d,s);let y=a.images.push(f)-1;return h[u]=y,y}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){let t=this.json;t.samplers||(t.samplers=[]);let i={magFilter:mn[e.magFilter],minFilter:mn[e.minFilter],wrapS:mn[e.wrapS],wrapT:mn[e.wrapT]};return t.samplers.push(i)-1}async processTextureAsync(e){let i=this.options,s=this.cache,r=this.json;if(s.textures.has(e))return s.textures.get(e);r.textures||(r.textures=[]),e instanceof Ri&&(e=await this.decompressTextureAsync(e,i.maxTextureSize));let o=e.userData.mimeType,a=this.processImage(e.image,e.format,e.flipY,o),l={sampler:this.processSampler(e)};o==="image/webp"?(l.extensions=l.extensions||{},l.extensions.EXT_texture_webp={source:a},this.extensionsUsed.EXT_texture_webp=!0,this.extensionsRequired.EXT_texture_webp=!0):l.source=a,e.name&&(l.name=e.name),await this._invokeAllAsync(async function(h){h.writeTexture&&await h.writeTexture(e,l)});let c=r.textures.push(l)-1;return s.textures.set(e,c),c}async processMaterialAsync(e,t){let i=this.cache,s=this.json,r=t!==void 0&&t.hasAttribute("tangent"),o=e.normalMap?e.uuid+":"+r:e.uuid;if(i.materials.has(o))return i.materials.get(o);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;s.materials||(s.materials=[]);let a={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let l=e.color.toArray().concat([e.opacity]);if(ui(l,[1,1,1,1])||(a.pbrMetallicRoughness.baseColorFactor=l),e.isMeshStandardMaterial?(a.pbrMetallicRoughness.metallicFactor=e.metalness,a.pbrMetallicRoughness.roughnessFactor=e.roughness):(a.pbrMetallicRoughness.metallicFactor=0,a.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){let h=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),u={index:await this.processTextureAsync(h),texCoord:h.channel};this.applyTextureTransform(u,h),a.pbrMetallicRoughness.metallicRoughnessTexture=u}if(e.map){let h={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(h,e.map),a.pbrMetallicRoughness.baseColorTexture=h}if(e.emissive){let h=e.emissive;if(Math.max(h.r,h.g,h.b)>0&&(a.emissiveFactor=e.emissive.toArray()),e.emissiveMap){let f={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(f,e.emissiveMap),a.emissiveTexture=f}}if(e.normalMap){let h=e.normalScale,u=h.x<0,f=r?h.y<0:h.y>0,d=e.normalMap;(u||f)&&(d=await this.buildNormalMapTextureAsync(e.normalMap,u,f));let g={index:await this.processTextureAsync(d),texCoord:e.normalMap.channel};Math.abs(h.x)!==1&&(g.scale=Math.abs(h.x)),this.applyTextureTransform(g,e.normalMap),a.normalTexture=g}if(e.aoMap){let h={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(h.strength=e.aoMapIntensity),this.applyTextureTransform(h,e.aoMap),a.occlusionTexture=h}e.transparent?a.alphaMode="BLEND":e.alphaTest>0&&(a.alphaMode="MASK",a.alphaCutoff=e.alphaTest),e.side===tn&&(a.doubleSided=!0),e.name!==""&&(a.name=e.name),this.serializeUserData(e,a),await this._invokeAllAsync(async function(h){h.writeMaterialAsync&&await h.writeMaterialAsync(e,a)});let c=s.materials.push(a)-1;return i.materials.set(o,c),c}async processMeshAsync(e){let t=this.cache,i=this.json,s=[e.geometry.uuid];if(Array.isArray(e.material))for(let _=0,v=e.material.length;_<v;_++)s.push(e.material[_].uuid);else s.push(e.material.uuid);let r=s.join(":");if(t.meshes.has(r))return t.meshes.get(r);let o=e.geometry,a;e.isLineSegments?a=it.LINES:e.isLineLoop?a=it.LINE_LOOP:e.isLine?a=it.LINE_STRIP:e.isPoints?a=it.POINTS:a=e.material.wireframe?it.LINES:it.TRIANGLES;let l={},c={},h=[],u=[],f={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},d=o.getAttribute("normal");d!==void 0&&!this.isNormalizedNormalAttribute(d)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(d)));let g=null;for(let _ in o.attributes){if(_.slice(0,5)==="morph")continue;let v=o.attributes[_];if(_=f[_]||_.toUpperCase(),!/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(_)&&!_.startsWith("_")&&(_="_"+_),t.attributes.has(this.getUID(v))){c[_]=t.attributes.get(this.getUID(v));continue}g=null;let b=v.array;_==="JOINTS_0"&&!(b instanceof Uint16Array)&&!(b instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=Hi.Utils.toTypedBufferAttribute(v,Uint16Array)):(b instanceof Uint32Array||b instanceof Int32Array)&&!_.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${_}" converted to type FLOAT.`),g=Hi.Utils.toTypedBufferAttribute(v,Float32Array));let x=this.processAccessor(g||v,o);x!==null&&(_.startsWith("_")||this.detectMeshQuantization(_,v),c[_]=x,t.attributes.set(this.getUID(v),x))}if(d!==void 0&&o.setAttribute("normal",d),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){let _=[],v=[],S={};if(e.morphTargetDictionary!==void 0)for(let b in e.morphTargetDictionary)S[e.morphTargetDictionary[b]]=b;for(let b=0;b<e.morphTargetInfluences.length;++b){let x={},A=!1;for(let R in o.morphAttributes){if(R!=="position"&&R!=="normal"){A||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),A=!0);continue}let P=o.morphAttributes[R][b],L=R.toUpperCase(),k=o.attributes[R];if(t.attributes.has(this.getUID(P,!0))){x[L]=t.attributes.get(this.getUID(P,!0));continue}let z=P.clone();if(!o.morphTargetsRelative)for(let N=0,V=P.count;N<V;N++)for(let F=0;F<P.itemSize;F++)F===0&&z.setX(N,P.getX(N)-k.getX(N)),F===1&&z.setY(N,P.getY(N)-k.getY(N)),F===2&&z.setZ(N,P.getZ(N)-k.getZ(N)),F===3&&z.setW(N,P.getW(N)-k.getW(N));x[L]=this.processAccessor(z,o),t.attributes.set(this.getUID(k,!0),x[L])}u.push(x),_.push(e.morphTargetInfluences[b]),e.morphTargetDictionary!==void 0&&v.push(S[b])}l.weights=_,v.length>0&&(l.extras={},l.extras.targetNames=v)}let y=Array.isArray(e.material);if(y&&o.groups.length===0)return null;let p=!1;if(y&&o.index===null){let _=[];for(let v=0,S=o.attributes.position.count;v<S;v++)_[v]=v;o.setIndex(_),p=!0}let m=y?e.material:[e.material],T=y?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let _=0,v=T.length;_<v;_++){let S={mode:a,attributes:c};if(this.serializeUserData(o,S),u.length>0&&(S.targets=u),o.index!==null){let x=this.getUID(o.index);(T[_].start!==void 0||T[_].count!==void 0)&&(x+=":"+T[_].start+":"+T[_].count),t.attributes.has(x)?S.indices=t.attributes.get(x):(S.indices=this.processAccessor(o.index,o,T[_].start,T[_].count),t.attributes.set(x,S.indices)),S.indices===null&&delete S.indices}let b=await this.processMaterialAsync(m[T[_].materialIndex],o);b!==null&&(S.material=b),h.push(S)}p===!0&&o.setIndex(null),l.primitives=h,i.meshes||(i.meshes=[]),await this._invokeAllAsync(function(_){_.writeMesh&&_.writeMesh(e,l)});let w=i.meshes.push(l)-1;return t.meshes.set(r,w),w}detectMeshQuantization(e,t){if(this.extensionsUsed[eu])return;let i;switch(t.array.constructor){case Int8Array:i="byte";break;case Uint8Array:i="unsigned byte";break;case Int16Array:i="short";break;case Uint16Array:i="unsigned short";break;default:return}t.normalized&&(i+=" normalized");let s=e.split("_",1)[0];Dp[s]&&Dp[s].includes(i)&&(this.extensionsUsed[eu]=!0,this.extensionsRequired[eu]=!0)}processCamera(e){let t=this.json;t.cameras||(t.cameras=[]);let i=e.isOrthographicCamera,s={type:i?"orthographic":"perspective"};return i?s.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:s.perspective={aspectRatio:e.aspect,yfov:li.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(s.name=e.type),t.cameras.push(s)-1}processAnimation(e,t){let i=this.json,s=this.nodeMap;i.animations||(i.animations=[]),e=Hi.Utils.mergeMorphTargetTracks(e.clone(),t);let r=e.tracks,o=[],a=[];for(let c=0;c<r.length;++c){let h=r[c],u=ot.parseTrackName(h.name),f=ot.findNode(t,u.nodeName),d=Up[u.propertyName];if(u.objectName==="bones"&&(f.isSkinnedMesh===!0?f=f.skeleton.getBoneByName(u.objectIndex):f=void 0),!f||!d){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',h.name);continue}let g=1,y=h.values.length/h.times.length;d===Up.morphTargetInfluences&&(y/=f.morphTargetInfluences.length);let p;h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(p="CUBICSPLINE",y/=3):h.getInterpolation()===Qi?p="STEP":p="LINEAR",a.push({input:this.processAccessor(new Tt(h.times,g)),output:this.processAccessor(new Tt(h.values,y)),interpolation:p}),o.push({sampler:a.length-1,target:{node:s.get(f),path:d}})}let l={name:e.name||"clip_"+i.animations.length,samplers:a,channels:o};return this.serializeUserData(e,l),i.animations.push(l),i.animations.length-1}processSkin(e){let t=this.json,i=this.nodeMap,s=t.nodes[i.get(e)],r=e.skeleton;if(r===void 0)return null;let o=e.skeleton.bones[0];if(o===void 0)return null;let a=[],l=new Float32Array(r.bones.length*16),c=new ht;for(let u=0;u<r.bones.length;++u)a.push(i.get(r.bones[u])),c.copy(r.boneInverses[u]),c.multiply(e.bindMatrix).toArray(l,u*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new Tt(l,16)),joints:a,skeleton:i.get(o)}),s.skin=t.skins.length-1}async processNodeAsync(e){let t=this.json,i=this.options,s=this.nodeMap;if(t.nodes||(t.nodes=[]),e.pivot!==null)return await this._processNodeWithPivotAsync(e);let r={};if(i.trs){let a=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();ui(a,[0,0,0,1])||(r.rotation=a),ui(l,[0,0,0])||(r.translation=l),ui(c,[1,1,1])||(r.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),nb(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){let a=await this.processMeshAsync(e);a!==null&&(r.mesh=a)}else e.isCamera&&(r.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let o=t.nodes.push(r)-1;if(s.set(e,o),e.children.length>0){let a=[];for(let l=0,c=e.children.length;l<c;l++){let h=e.children[l];if(h.visible||i.onlyVisible===!1){let u=await this.processNodeAsync(h);u!==null&&a.push(u)}}a.length>0&&(r.children=a)}return await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(e,r)}),o}async _processNodeWithPivotAsync(e){let t=this.json,i=this.options,s=this.nodeMap,r=e.pivot,o={},a=e.quaternion.toArray(),l=[e.position.x+r.x,e.position.y+r.y,e.position.z+r.z],c=e.scale.toArray();ui(a,[0,0,0,1])||(o.rotation=a),ui(l,[0,0,0])||(o.translation=l),ui(c,[1,1,1])||(o.scale=c),o.extras={pivot:r.toArray()},e.name!==""&&(o.name=String(e.name)),this.serializeUserData(e,o);let h=t.nodes.push(o)-1;s.set(e,h);let u={},f=[-r.x,-r.y,-r.z];if(ui(f,[0,0,0])||(u.translation=f),e.isMesh||e.isLine||e.isPoints){let y=await this.processMeshAsync(e);y!==null&&(u.mesh=y)}else e.isCamera&&(u.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let g=[t.nodes.push(u)-1];if(e.children.length>0){let y=[];for(let p=0,m=e.children.length;p<m;p++){let T=e.children[p];if(T.visible||i.onlyVisible===!1){let w=await this.processNodeAsync(T);w!==null&&y.push(w)}}y.length>0&&(u.children=y)}return o.children=g,await this._invokeAllAsync(function(y){y.writeNode&&y.writeNode(e,o)}),h}async processSceneAsync(e){let t=this.json,i=this.options;t.scenes||(t.scenes=[],t.scene=0);let s={};e.name!==""&&(s.name=e.name),t.scenes.push(s);let r=[];for(let o=0,a=e.children.length;o<a;o++){let l=e.children[o];if(l.visible||i.onlyVisible===!1){let c=await this.processNodeAsync(l);c!==null&&r.push(c)}}r.length>0&&(s.nodes=r),this.serializeUserData(e,s)}async processObjectsAsync(e){let t=new Hn;t.name="AuxScene";for(let i=0;i<e.length;i++)t.children.push(e[i]);await this.processSceneAsync(t)}async processInputAsync(e){let t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(e)});let i=[];for(let s=0;s<e.length;s++)e[s]instanceof Hn?await this.processSceneAsync(e[s]):i.push(e[s]);i.length>0&&await this.processObjectsAsync(i);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);if(e.length===1)for(let s=0;s<t.animations.length;++s)this.processAnimation(t.animations[s],e[0]);else for(let s=0;s<e.length;s++){let r=t.animations[s]||[];for(let o=0;o<r.length;++o)this.processAnimation(r[o],e[s])}await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,i=this.plugins.length;t<i;t++)await e(this.plugins[t])}},su=class{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}let i=this.writer,s=i.json,r=i.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(1-e.penumbra)*e.angle,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},r[this.name]=!0);let a=s.extensions[this.name].lights;a.push(o),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}},ru=class{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;let s=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},s[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}},ou=class{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;let i=this.writer,s=i.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){let o={index:await i.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};i.applyTextureTransform(o,e.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){let o={index:await i.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};i.applyTextureTransform(o,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){let o={index:await i.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(o.scale=e.clearcoatNormalScale.x),i.applyTextureTransform(o,e.clearcoatNormalMap),r.clearcoatNormalTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},au=class{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;let s=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},lu=class{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;let i=this.writer,s=i.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){let o={index:await i.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};i.applyTextureTransform(o,e.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){let o={index:await i.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};i.applyTextureTransform(o,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},cu=class{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let i=this.writer,s=i.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){let o={index:await i.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};i.applyTextureTransform(o,e.transmissionMap),r.transmissionTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},hu=class{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let i=this.writer,s=i.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){let o={index:await i.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};i.applyTextureTransform(o,e.thicknessMap),r.thicknessTexture=o}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},uu=class{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;let s=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},fu=class{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(KM)&&!e.specularIntensityMap&&!e.specularColorMap)return;let i=this.writer,s=i.extensionsUsed,r={};if(e.specularIntensityMap){let o={index:await i.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};i.applyTextureTransform(o,e.specularIntensityMap),r.specularTexture=o}if(e.specularColorMap){let o={index:await i.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};i.applyTextureTransform(o,e.specularColorMap),r.specularColorTexture=o}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},du=class{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;let i=this.writer,s=i.extensionsUsed,r={};if(e.sheenRoughnessMap){let o={index:await i.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};i.applyTextureTransform(o,e.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(e.sheenColorMap){let o={index:await i.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};i.applyTextureTransform(o,e.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},pu=class{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;let i=this.writer,s=i.extensionsUsed,r={};if(e.anisotropyMap){let o={index:await i.processTextureAsync(e.anisotropyMap)};i.applyTextureTransform(o,e.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},mu=class{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;let s=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},gu=class{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;let i=this.writer,s=i.extensionsUsed,r={};if(e.bumpMap){let o={index:await i.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};i.applyTextureTransform(o,e.bumpMap),r.bumpTexture=o}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},xu=class{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;let i=this.writer,s=e,r=new Float32Array(s.count*3),o=new Float32Array(s.count*4),a=new Float32Array(s.count*3),l=new ht,c=new I,h=new Qt,u=new I;for(let d=0;d<s.count;d++)s.getMatrixAt(d,l),l.decompose(c,h,u),c.toArray(r,d*3),h.toArray(o,d*4),u.toArray(a,d*3);let f={TRANSLATION:i.processAccessor(new Tt(r,3)),ROTATION:i.processAccessor(new Tt(o,4)),SCALE:i.processAccessor(new Tt(a,3))};s.instanceColor&&(f._COLOR_0=i.processAccessor(s.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:f},i.extensionsUsed[this.name]=!0,i.extensionsRequired[this.name]=!0}};Hi.Utils={insertKeyframe:function(n,e){let i=n.getValueSize(),s=new n.TimeBufferType(n.times.length+1),r=new n.ValueBufferType(n.values.length+i),o=n.createInterpolant(new n.ValueBufferType(i)),a;if(n.times.length===0){s[0]=e;for(let l=0;l<i;l++)r[l]=0;a=0}else if(e<n.times[0]){if(Math.abs(n.times[0]-e)<.001)return 0;s[0]=e,s.set(n.times,1),r.set(o.evaluate(e),0),r.set(n.values,i),a=0}else if(e>n.times[n.times.length-1]){if(Math.abs(n.times[n.times.length-1]-e)<.001)return n.times.length-1;s[s.length-1]=e,s.set(n.times,0),r.set(n.values,0),r.set(o.evaluate(e),n.values.length),a=s.length-1}else for(let l=0;l<n.times.length;l++){if(Math.abs(n.times[l]-e)<.001)return l;if(n.times[l]<e&&n.times[l+1]>e){s.set(n.times.slice(0,l+1),0),s[l+1]=e,s.set(n.times.slice(l+1),l+2),r.set(n.values.slice(0,(l+1)*i),0),r.set(o.evaluate(e),(l+1)*i),r.set(n.values.slice((l+1)*i),(l+2)*i),a=l+1;break}}return n.times=s,n.values=r,a},mergeMorphTargetTracks:function(n,e){let t=[],i={},s=n.tracks;for(let r=0;r<s.length;++r){let o=s[r],a=ot.parseTrackName(o.name),l=ot.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(Ds)}let c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[a.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let u;if(i[l.uuid]===void 0){u=o.clone();let d=new u.ValueBufferType(c*u.times.length);for(let g=0;g<u.times.length;g++)d[g*c+h]=u.values[g];u.name=(a.nodeName||"")+".morphTargetInfluences",u.values=d,i[l.uuid]=u,t.push(u);continue}let f=o.createInterpolant(new o.ValueBufferType(1));u=i[l.uuid];for(let d=0;d<u.times.length;d++)u.values[d*c+h]=f.evaluate(u.times[d]);for(let d=0;d<o.times.length;d++){let g=this.insertKeyframe(u,o.times[d]);u.values[g*c+h]=o.values[d]}}return n.tracks=t,n},toTypedBufferAttribute:function(n,e){let t=new Tt(new e(n.count*n.itemSize),n.itemSize,!1);if(!n.normalized&&!n.isInterleavedBufferAttribute)return t.array.set(n.array),t;for(let i=0,s=n.count;i<s;i++)for(let r=0;r<n.itemSize;r++)t.setComponent(i,r,n.getComponent(i,r));return t}};var $l=class{parse(e,t={}){t=Object.assign({binary:!1},t);let i=t.binary,s=[],r=0;e.traverse(function(m){if(m.isMesh){let T=m.geometry,w=T.index,_=T.getAttribute("position");r+=w!==null?w.count/3:_.count/3,s.push({object3d:m,geometry:T})}});let o,a=80;if(i===!0){let m=r*2+r*3*4*4+80+4,T=new ArrayBuffer(m);o=new DataView(T),o.setUint32(a,r,!0),a+=4}else o="",o+=`solid exported
`;let l=new I,c=new I,h=new I,u=new I,f=new I,d=new I;for(let m=0,T=s.length;m<T;m++){let w=s[m].object3d,_=s[m].geometry,v=_.index,S=_.getAttribute("position");if(v!==null)for(let b=0;b<v.count;b+=3){let x=v.getX(b+0),A=v.getX(b+1),R=v.getX(b+2);g(x,A,R,S,w)}else for(let b=0;b<S.count;b+=3){let x=b+0,A=b+1,R=b+2;g(x,A,R,S,w)}}return i===!1&&(o+=`endsolid exported
`),o;function g(m,T,w,_,v){l.fromBufferAttribute(_,m),c.fromBufferAttribute(_,T),h.fromBufferAttribute(_,w),v.isSkinnedMesh===!0&&(v.applyBoneTransform(m,l),v.applyBoneTransform(T,c),v.applyBoneTransform(w,h)),l.applyMatrix4(v.matrixWorld),c.applyMatrix4(v.matrixWorld),h.applyMatrix4(v.matrixWorld),y(l,c,h),p(l),p(c),p(h),i===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function y(m,T,w){u.subVectors(w,T),f.subVectors(m,T),u.cross(f).normalize(),d.copy(u).normalize(),i===!0?(o.setFloat32(a,d.x,!0),a+=4,o.setFloat32(a,d.y,!0),a+=4,o.setFloat32(a,d.z,!0),a+=4):(o+="	facet normal "+d.x+" "+d.y+" "+d.z+`
`,o+=`		outer loop
`)}function p(m){i===!0?(o.setFloat32(a,m.x,!0),a+=4,o.setFloat32(a,m.y,!0),a+=4,o.setFloat32(a,m.z,!0),a+=4):o+="			vertex "+m.x+" "+m.y+" "+m.z+`
`}}};var Wl=class{parse(e,t,i={}){function s(R){e.traverse(function(P){if(P.isMesh===!0||P.isPoints){let L=P,k=L.geometry;k.hasAttribute("position")===!0&&R(L,k)}})}i=Object.assign({binary:!1,excludeAttributes:[],littleEndian:!1,customPropertyMapping:{}},i);let o=i.excludeAttributes,a=i.customPropertyMapping,l=Object.keys(a),c=!0,h=!1,u=!1,f=!1,d="float",g="float",y="float",p="uchar",m={};for(let R of l)m[R]="float";let T=0,w=0;e.traverse(function(R){if(R.isMesh===!0){let L=R.geometry,k=L.getAttribute("position"),z=L.getAttribute("normal"),N=L.getAttribute("uv"),V=L.getAttribute("color"),F=L.getIndex();if(k===void 0)return;T+=k.count,w+=F?F.count/3:k.count/3,d=fi(k.array),z!==void 0&&(h=!0,g=fi(z.array)),N!==void 0&&(f=!0,y=fi(N.array)),V!==void 0&&(u=!0,p=fi(V.array));for(let X of l){let J=L.getAttribute(X);J!==void 0&&(m[X]=fi(J.array))}}else if(R.isPoints){let L=R.geometry,k=L.getAttribute("position"),z=L.getAttribute("normal"),N=L.getAttribute("color");T+=k.count,d=fi(k.array),z!==void 0&&(h=!0,g=fi(z.array)),N!==void 0&&(u=!0,p=fi(N.array));for(let V of l){let F=L.getAttribute(V);F!==void 0&&(m[V]=fi(F.array))}c=!1}});let _=new Be;if(c=c&&o.indexOf("index")===-1,h=h&&o.indexOf("normal")===-1,u=u&&o.indexOf("color")===-1,f=f&&o.indexOf("uv")===-1,c&&w!==Math.floor(w))return console.error("PLYExporter: Failed to generate a valid PLY file with triangle indices because the number of indices is not divisible by 3."),null;let v=4,S=`ply
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
`;let b=new I,x=new Xe,A=null;if(i.binary===!0){let R=new TextEncoder().encode(S),P=fo(d),L=h?fo(g):null,k=f?fo(y):null,z=u?fo(p):null,N=hs(p),V=zp(p),F={},X={},J=0;for(let H of l){let K=m[H],j=fo(K);F[H]=j,X[H]=hs(K),J+=a[H].length*j.size}let le=T*(3*P.size+(h?3*L.size:0)+(f?2*k.size:0)+(u?3*z.size:0)+J),re=c?w*(v*3+1):0,ne=new DataView(new ArrayBuffer(R.length+le+re));new Uint8Array(ne.buffer).set(R,0);let fe=R.length,ue=R.length+le,pe=0;s(function(H,K){let j=K.getAttribute("position"),ge=K.getAttribute("normal"),Ee=K.getAttribute("uv"),Pe=K.getAttribute("color"),We=K.getIndex();x.getNormalMatrix(H.matrixWorld);for(let xe=0,Q=j.count;xe<Q;xe++){if(b.fromBufferAttribute(j,xe),b.applyMatrix4(H.matrixWorld),P.write(ne,fe,b.x,i.littleEndian),fe+=P.size,P.write(ne,fe,b.y,i.littleEndian),fe+=P.size,P.write(ne,fe,b.z,i.littleEndian),fe+=P.size,h===!0&&(ge!=null?(b.fromBufferAttribute(ge,xe),b.applyMatrix3(x).normalize(),L.write(ne,fe,b.x,i.littleEndian),fe+=L.size,L.write(ne,fe,b.y,i.littleEndian),fe+=L.size,L.write(ne,fe,b.z,i.littleEndian),fe+=L.size):(L.write(ne,fe,0,i.littleEndian),fe+=L.size,L.write(ne,fe,0,i.littleEndian),fe+=L.size,L.write(ne,fe,0,i.littleEndian),fe+=L.size)),f===!0&&(Ee!=null?(k.write(ne,fe,Ee.getX(xe),i.littleEndian),fe+=k.size,k.write(ne,fe,Ee.getY(xe),i.littleEndian),fe+=k.size):(k.write(ne,fe,0,i.littleEndian),fe+=k.size,k.write(ne,fe,0,i.littleEndian),fe+=k.size)),u===!0)if(Pe!=null){_.fromBufferAttribute(Pe,xe),nt.workingToColorSpace(_,It);let ie=N?_.r:Math.round(_.r*V),se=N?_.g:Math.round(_.g*V),ye=N?_.b:Math.round(_.b*V);z.write(ne,fe,ie,i.littleEndian),fe+=z.size,z.write(ne,fe,se,i.littleEndian),fe+=z.size,z.write(ne,fe,ye,i.littleEndian),fe+=z.size}else{let ie=N?1:V;z.write(ne,fe,ie,i.littleEndian),fe+=z.size,z.write(ne,fe,ie,i.littleEndian),fe+=z.size,z.write(ne,fe,ie,i.littleEndian),fe+=z.size}for(let ie of l){let se=F[ie],ye=a[ie].length,_e=K.getAttribute(ie),ke=X[ie];for(let Le=0;Le<ye;Le++){let Ge=_e!=null?kp(_e,xe,Le):0;se.write(ne,fe,ke?Ge:Math.round(Ge),i.littleEndian),fe+=se.size}}}if(c===!0)if(We!==null)for(let xe=0,Q=We.count;xe<Q;xe+=3)ne.setUint8(ue,3),ue+=1,ne.setUint32(ue,We.getX(xe+0)+pe,i.littleEndian),ue+=v,ne.setUint32(ue,We.getX(xe+1)+pe,i.littleEndian),ue+=v,ne.setUint32(ue,We.getX(xe+2)+pe,i.littleEndian),ue+=v;else for(let xe=0,Q=j.count;xe<Q;xe+=3)ne.setUint8(ue,3),ue+=1,ne.setUint32(ue,pe+xe,i.littleEndian),ue+=v,ne.setUint32(ue,pe+xe+1,i.littleEndian),ue+=v,ne.setUint32(ue,pe+xe+2,i.littleEndian),ue+=v;pe+=j.count}),A=ne.buffer}else{let R=0,P="",L="",k=hs(d),z=hs(g),N=hs(y),V=hs(p),F=zp(p),X={};for(let le of l)X[le]=hs(m[le]);let J=(le,re)=>re?le:Math.round(le);s(function(le,re){let ne=re.getAttribute("position"),fe=re.getAttribute("normal"),ue=re.getAttribute("uv"),pe=re.getAttribute("color"),H=re.getIndex();x.getNormalMatrix(le.matrixWorld);for(let K=0,j=ne.count;K<j;K++){b.fromBufferAttribute(ne,K),b.applyMatrix4(le.matrixWorld);let ge=J(b.x,k)+" "+J(b.y,k)+" "+J(b.z,k);if(h===!0&&(fe!=null?(b.fromBufferAttribute(fe,K),b.applyMatrix3(x).normalize(),ge+=" "+J(b.x,z)+" "+J(b.y,z)+" "+J(b.z,z)):ge+=" 0 0 0"),f===!0&&(ue!=null?ge+=" "+J(ue.getX(K),N)+" "+J(ue.getY(K),N):ge+=" 0 0"),u===!0)if(pe!=null){_.fromBufferAttribute(pe,K),nt.workingToColorSpace(_,It);let Ee=V?_.r:Math.round(_.r*F),Pe=V?_.g:Math.round(_.g*F),We=V?_.b:Math.round(_.b*F);ge+=` ${Ee} ${Pe} ${We}`}else{let Ee=V?1:F;ge+=` ${Ee} ${Ee} ${Ee}`}for(let Ee of l){let Pe=a[Ee].length,We=re.getAttribute(Ee),xe=X[Ee];for(let Q=0;Q<Pe;Q++){let ie=We!=null?kp(We,K,Q):0;ge+=" "+J(ie,xe)}}P+=ge+`
`}if(c===!0){if(H!==null)for(let K=0,j=H.count;K<j;K+=3)L+=`3 ${H.getX(K+0)+R}`,L+=` ${H.getX(K+1)+R}`,L+=` ${H.getX(K+2)+R}
`;else for(let K=0,j=ne.count;K<j;K+=3)L+=`3 ${R+K} ${R+K+1} ${R+K+2}
`;w+=H?H.count/3:ne.count/3}R+=ne.count}),A=`${S}${P}${c?`${L}
`:`
`}`}return typeof t=="function"&&requestAnimationFrame(()=>t(A)),A}};function fi(n){return n instanceof Int8Array?"char":n instanceof Uint8Array||n instanceof Uint8ClampedArray?"uchar":n instanceof Int16Array?"short":n instanceof Uint16Array?"ushort":n instanceof Int32Array?"int":n instanceof Uint32Array?"uint":n instanceof Float32Array?"float":n instanceof Float64Array?"double":"float"}function fo(n){switch(n){case"char":return{write:(e,t,i)=>e.setInt8(t,i),size:1};case"uchar":return{write:(e,t,i)=>e.setUint8(t,i),size:1};case"short":return{write:(e,t,i,s)=>e.setInt16(t,i,s),size:2};case"ushort":return{write:(e,t,i,s)=>e.setUint16(t,i,s),size:2};case"int":return{write:(e,t,i,s)=>e.setInt32(t,i,s),size:4};case"uint":return{write:(e,t,i,s)=>e.setUint32(t,i,s),size:4};case"float":return{write:(e,t,i,s)=>e.setFloat32(t,i,s),size:4};case"double":return{write:(e,t,i,s)=>e.setFloat64(t,i,s),size:8}}}function hs(n){return n==="float"||n==="double"}function kp(n,e,t){switch(t){case 0:return n.getX(e);case 1:return n.getY(e);case 2:return n.getZ(e);case 3:return n.getW(e)}}function zp(n){switch(n){case"uchar":return 255;case"ushort":return 65535;default:return 1}}var $t=Uint8Array,gn=Uint16Array,Su=Int32Array,wu=new $t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Tu=new $t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Vp=new $t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),qp=function(n,e){for(var t=new gn(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var s=new Su(t[30]),i=1;i<30;++i)for(var r=t[i];r<t[i+1];++r)s[r]=r-t[i]<<5|i;return{b:t,r:s}},Yp=qp(wu,2),rb=Yp.b,_u=Yp.r;rb[28]=258,_u[258]=28;var Zp=qp(Tu,0),GT=Zp.b,Hp=Zp.r,vu=new gn(32768);for(ut=0;ut<32768;++ut)di=(ut&43690)>>1|(ut&21845)<<1,di=(di&52428)>>2|(di&13107)<<2,di=(di&61680)>>4|(di&3855)<<4,vu[ut]=((di&65280)>>8|(di&255)<<8)>>1;var di,ut,go=(function(n,e,t){for(var i=n.length,s=0,r=new gn(e);s<i;++s)n[s]&&++r[n[s]-1];var o=new gn(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new gn(1<<e);var l=15-e;for(s=0;s<i;++s)if(n[s])for(var c=s<<4|n[s],h=e-n[s],u=o[n[s]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)a[vu[u]>>l]=c}else for(a=new gn(i),s=0;s<i;++s)n[s]&&(a[s]=vu[o[n[s]-1]++]>>15-n[s]);return a}),us=new $t(288);for(ut=0;ut<144;++ut)us[ut]=8;var ut;for(ut=144;ut<256;++ut)us[ut]=9;var ut;for(ut=256;ut<280;++ut)us[ut]=7;var ut;for(ut=280;ut<288;++ut)us[ut]=8;var ut,Xl=new $t(32);for(ut=0;ut<32;++ut)Xl[ut]=5;var ut,ob=go(us,9,0);var ab=go(Xl,5,0);var Kp=function(n){return(n+7)/8|0},Jp=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new $t(n.subarray(e,t))};var lb=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ql=function(n,e,t){var i=new Error(e||lb[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,ql),!t)throw i;return i};var pi=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8},po=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8,n[i+2]|=t>>16},yu=function(n,e){for(var t=[],i=0;i<n.length;++i)n[i]&&t.push({s:i,f:n[i]});var s=t.length,r=t.slice();if(!s)return{t:Qp,l:0};if(s==1){var o=new $t(t[0].s+1);return o[t[0].s]=1,{t:o,l:1}}t.sort(function(v,S){return v.f-S.f}),t.push({s:-1,f:25001});var a=t[0],l=t[1],c=0,h=1,u=2;for(t[0]={s:-1,f:a.f+l.f,l:a,r:l};h!=s-1;)a=t[t[c].f<t[u].f?c++:u++],l=t[c!=h&&t[c].f<t[u].f?c++:u++],t[h++]={s:-1,f:a.f+l.f,l:a,r:l};for(var f=r[0].s,i=1;i<s;++i)r[i].s>f&&(f=r[i].s);var d=new gn(f+1),g=Mu(t[h-1],d,0);if(g>e){var i=0,y=0,p=g-e,m=1<<p;for(r.sort(function(S,b){return d[b.s]-d[S.s]||S.f-b.f});i<s;++i){var T=r[i].s;if(d[T]>e)y+=m-(1<<g-d[T]),d[T]=e;else break}for(y>>=p;y>0;){var w=r[i].s;d[w]<e?y-=1<<e-d[w]++-1:++i}for(;i>=0&&y;--i){var _=r[i].s;d[_]==e&&(--d[_],++y)}g=e}return{t:new $t(d),l:g}},Mu=function(n,e,t){return n.s==-1?Math.max(Mu(n.l,e,t+1),Mu(n.r,e,t+1)):e[n.s]=t},Gp=function(n){for(var e=n.length;e&&!n[--e];);for(var t=new gn(++e),i=0,s=n[0],r=1,o=function(l){t[i++]=l},a=1;a<=e;++a)if(n[a]==s&&a!=e)++r;else{if(!s&&r>2){for(;r>138;r-=138)o(32754);r>2&&(o(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(o(s),--r;r>6;r-=6)o(8304);r>2&&(o(r-3<<5|8208),r=0)}for(;r--;)o(s);r=1,s=n[a]}return{c:t.subarray(0,i),n:e}},mo=function(n,e){for(var t=0,i=0;i<e.length;++i)t+=n[i]*e[i];return t},jp=function(n,e,t){var i=t.length,s=Kp(e+2);n[s]=i&255,n[s+1]=i>>8,n[s+2]=n[s]^255,n[s+3]=n[s+1]^255;for(var r=0;r<i;++r)n[s+r+4]=t[r];return(s+4+i)*8},$p=function(n,e,t,i,s,r,o,a,l,c,h){pi(e,h++,t),++s[256];for(var u=yu(s,15),f=u.t,d=u.l,g=yu(r,15),y=g.t,p=g.l,m=Gp(f),T=m.c,w=m.n,_=Gp(y),v=_.c,S=_.n,b=new gn(19),x=0;x<T.length;++x)++b[T[x]&31];for(var x=0;x<v.length;++x)++b[v[x]&31];for(var A=yu(b,7),R=A.t,P=A.l,L=19;L>4&&!R[Vp[L-1]];--L);var k=c+5<<3,z=mo(s,us)+mo(r,Xl)+o,N=mo(s,f)+mo(r,y)+o+14+3*L+mo(b,R)+2*b[16]+3*b[17]+7*b[18];if(l>=0&&k<=z&&k<=N)return jp(e,h,n.subarray(l,l+c));var V,F,X,J;if(pi(e,h,1+(N<z)),h+=2,N<z){V=go(f,d,0),F=f,X=go(y,p,0),J=y;var le=go(R,P,0);pi(e,h,w-257),pi(e,h+5,S-1),pi(e,h+10,L-4),h+=14;for(var x=0;x<L;++x)pi(e,h+3*x,R[Vp[x]]);h+=3*L;for(var re=[T,v],ne=0;ne<2;++ne)for(var fe=re[ne],x=0;x<fe.length;++x){var ue=fe[x]&31;pi(e,h,le[ue]),h+=R[ue],ue>15&&(pi(e,h,fe[x]>>5&127),h+=fe[x]>>12)}}else V=ob,F=us,X=ab,J=Xl;for(var x=0;x<a;++x){var pe=i[x];if(pe>255){var ue=pe>>18&31;po(e,h,V[ue+257]),h+=F[ue+257],ue>7&&(pi(e,h,pe>>23&31),h+=wu[ue]);var H=pe&31;po(e,h,X[H]),h+=J[H],H>3&&(po(e,h,pe>>5&8191),h+=Tu[H])}else po(e,h,V[pe]),h+=F[pe]}return po(e,h,V[256]),h+F[256]},cb=new Su([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Qp=new $t(0),hb=function(n,e,t,i,s,r){var o=r.z||n.length,a=new $t(i+o+5*(1+Math.ceil(o/7e3))+s),l=a.subarray(i,a.length-s),c=r.l,h=(r.r||0)&7;if(e){h&&(l[0]=r.r>>3);for(var u=cb[e-1],f=u>>13,d=u&8191,g=(1<<t)-1,y=r.p||new gn(32768),p=r.h||new gn(g+1),m=Math.ceil(t/3),T=2*m,w=function(Q){return(n[Q]^n[Q+1]<<m^n[Q+2]<<T)&g},_=new Su(25e3),v=new gn(288),S=new gn(32),b=0,x=0,A=r.i||0,R=0,P=r.w||0,L=0;A+2<o;++A){var k=w(A),z=A&32767,N=p[k];if(y[z]=N,p[k]=z,P<=A){var V=o-A;if((b>7e3||R>24576)&&(V>423||!c)){h=$p(n,l,0,_,v,S,x,R,L,A-L,h),R=b=x=0,L=A;for(var F=0;F<286;++F)v[F]=0;for(var F=0;F<30;++F)S[F]=0}var X=2,J=0,le=d,re=z-N&32767;if(V>2&&k==w(A-re))for(var ne=Math.min(f,V)-1,fe=Math.min(32767,A),ue=Math.min(258,V);re<=fe&&--le&&z!=N;){if(n[A+X]==n[A+X-re]){for(var pe=0;pe<ue&&n[A+pe]==n[A+pe-re];++pe);if(pe>X){if(X=pe,J=re,pe>ne)break;for(var H=Math.min(re,pe-2),K=0,F=0;F<H;++F){var j=A-re+F&32767,ge=y[j],Ee=j-ge&32767;Ee>K&&(K=Ee,N=j)}}}z=N,N=y[z],re+=z-N&32767}if(J){_[R++]=268435456|_u[X]<<18|Hp[J];var Pe=_u[X]&31,We=Hp[J]&31;x+=wu[Pe]+Tu[We],++v[257+Pe],++S[We],P=A+X,++b}else _[R++]=n[A],++v[n[A]]}}for(A=Math.max(A,P);A<o;++A)_[R++]=n[A],++v[n[A]];h=$p(n,l,c,_,v,S,x,R,L,A-L,h),c||(r.r=h&7|l[h/8|0]<<3,h-=7,r.h=p,r.p=y,r.i=A,r.w=P)}else{for(var A=r.w||0;A<o+c;A+=65535){var xe=A+65535;xe>=o&&(l[h/8|0]=c,xe=o),h=jp(l,h+1,n.subarray(A,xe))}r.i=o}return Jp(a,0,i+Kp(h)+s)},ub=(function(){for(var n=new Int32Array(256),e=0;e<256;++e){for(var t=e,i=9;--i;)t=(t&1&&-306674912)^t>>>1;n[e]=t}return n})(),fb=function(){var n=-1;return{p:function(e){for(var t=n,i=0;i<e.length;++i)t=ub[t&255^e[i]]^t>>>8;n=t},d:function(){return~n}}};var db=function(n,e,t,i,s){if(!s&&(s={l:1},e.dictionary)){var r=e.dictionary.subarray(-32768),o=new $t(r.length+n.length);o.set(r),o.set(n,r.length),n=o,s.w=r.length}return hb(n,e.level==null?6:e.level,e.mem==null?s.l?Math.ceil(Math.max(8,Math.min(13,Math.log(n.length)))*1.5):20:12+e.mem,t,i,s)},em=function(n,e){var t={};for(var i in n)t[i]=n[i];for(var i in e)t[i]=e[i];return t};var Gt=function(n,e,t){for(;t;++e)n[e]=t,t>>>=8};function pb(n,e){return db(n,e||{},0,0)}var tm=function(n,e,t,i){for(var s in n){var r=n[s],o=e+s,a=i;Array.isArray(r)&&(a=em(i,r[1]),r=r[0]),r instanceof $t?t[o]=[r,a]:(t[o+="/"]=[new $t(0),a],tm(r,o,t,i))}},Wp=typeof TextEncoder<"u"&&new TextEncoder,mb=typeof TextDecoder<"u"&&new TextDecoder,gb=0;try{mb.decode(Qp,{stream:!0}),gb=1}catch{}function xo(n,e){if(e){for(var t=new $t(n.length),i=0;i<n.length;++i)t[i]=n.charCodeAt(i);return t}if(Wp)return Wp.encode(n);for(var s=n.length,r=new $t(n.length+(n.length>>1)),o=0,a=function(h){r[o++]=h},i=0;i<s;++i){if(o+5>r.length){var l=new $t(o+8+(s-i<<1));l.set(r),r=l}var c=n.charCodeAt(i);c<128||e?a(c):c<2048?(a(192|c>>6),a(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|n.charCodeAt(++i)&1023,a(240|c>>18),a(128|c>>12&63),a(128|c>>6&63),a(128|c&63)):(a(224|c>>12),a(128|c>>6&63),a(128|c&63))}return Jp(r,0,o)}var bu=function(n){var e=0;if(n)for(var t in n){var i=n[t].length;i>65535&&ql(9),e+=i+4}return e},Xp=function(n,e,t,i,s,r,o,a){var l=i.length,c=t.extra,h=a&&a.length,u=bu(c);Gt(n,e,o!=null?33639248:67324752),e+=4,o!=null&&(n[e++]=20,n[e++]=t.os),n[e]=20,e+=2,n[e++]=t.flag<<1|(r<0&&8),n[e++]=s&&8,n[e++]=t.compression&255,n[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),d=f.getFullYear()-1980;if((d<0||d>119)&&ql(10),Gt(n,e,d<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,r!=-1&&(Gt(n,e,t.crc),Gt(n,e+4,r<0?-r-2:r),Gt(n,e+8,t.size)),Gt(n,e+12,l),Gt(n,e+14,u),e+=16,o!=null&&(Gt(n,e,h),Gt(n,e+6,t.attrs),Gt(n,e+10,o),e+=14),n.set(i,e),e+=l,u)for(var g in c){var y=c[g],p=y.length;Gt(n,e,+g),Gt(n,e+2,p),n.set(y,e+4),e+=4+p}return h&&(n.set(a,e),e+=h),e},xb=function(n,e,t,i,s){Gt(n,e,101010256),Gt(n,e+8,t),Gt(n,e+10,t),Gt(n,e+12,i),Gt(n,e+16,s)};function nm(n,e){e||(e={});var t={},i=[];tm(n,"",t,e);var s=0,r=0;for(var o in t){var a=t[o],l=a[0],c=a[1],h=c.level==0?0:8,u=xo(o),f=u.length,d=c.comment,g=d&&xo(d),y=g&&g.length,p=bu(c.extra);f>65535&&ql(11);var m=h?pb(l,c):l,T=m.length,w=fb();w.p(l),i.push(em(c,{size:l.length,crc:w.d(),c:m,f:u,m:g,u:f!=o.length||g&&d.length!=y,o:s,compression:h})),s+=30+f+p+T,r+=76+2*(f+p)+(y||0)+T}for(var _=new $t(r+22),v=s,S=r-s,b=0;b<i.length;++b){var u=i[b];Xp(_,u.o,u,u.f,u.u,u.c.length);var x=30+u.f.length+bu(u.extra);_.set(u.c,u.o+x),Xp(_,s,u,u.f,u.u,u.c.length,u.o,u.m),s+=16+x+(u.m?u.m.length:0)}return xb(_,s,i.length,S,v),_}var Kt=class{constructor(e,t="",i=[],s=[]){this.name=e,this.type=t,this.metadata=i,this.properties=s,this.children=[]}addMetadata(e,t){this.metadata.push({key:e,value:t})}addProperty(e,t=[]){this.properties.push({property:e,metadata:t})}addChild(e){this.children.push(e)}toString(e=0){let t="	".repeat(e),i=this.metadata.map(h=>{let u=h.key,f=h.value;if(Array.isArray(f)){let d=[];return d.push(`${u} = {`),f.forEach(g=>{d.push(`${t}		${g}`)}),d.push(`${t}	}`),d.join(`
`)}else return`${u} = ${f}`}),s=i.length?` (
${i.map(h=>`${t}	${h}`).join(`
`)}
${t})`:"",r=this.properties.map(h=>{let u=h.property.replace(/\n/g,`
`+t+"	"),f=h.metadata.length?` (
${h.metadata.map(d=>`${t}		${d}`).join(`
`)}
${t}	)`:"";return`${t}	${u}${f}`}),o=this.children.map(h=>h.toString(e+1)),a=[];if(r.length>0&&a.push(...r),o.length>0){r.length>0&&a.push("");for(let h=0;h<o.length;h++)a.push(o[h]),h<o.length-1&&a.push("")}let l=a.join(`
`),c=this.type?this.type+" ":"";return`${t}def ${c}"${this.name}"${s}
${t}{
${l}
${t}}`}},Zl=class{constructor(){this.textureUtils=null}setTextureUtils(e){this.textureUtils=e}parse(e,t,i,s){this.parseAsync(e,s).then(t).catch(i)}async parseAsync(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,onlyVisible:!0,quickLookCompatible:!1,maxTextureSize:1024,animations:[],animationFrameRate:60},t);let i=new Set,s={},r="model.usda";s[r]=null;let o=_b(e,t.animations);t.animationTracks=o;let a=new Kt("Root","Xform"),l=new Kt("Scenes","Scope");l.addMetadata("kind",'"sceneLibrary"'),a.addChild(l);let c="Scene",h=new Kt(c,"Xform");h.addMetadata("customData",["bool preliminary_collidesWithEnvironment = 0",`string sceneName = "${c}"`]),h.addMetadata("sceneName",`"${c}"`),t.includeAnchoringProperties&&(h.addProperty(`token preliminary:anchoring:type = "${t.ar.anchoring.type}"`),h.addProperty(`token preliminary:planeAnchoring:alignment = "${t.ar.planeAnchoring.alignment}"`)),l.addChild(h);let u,f={},d={};e.isScene?cm(e,h,f,i,s,t):hm(e,h,f,i,s,t);let g=Cb(f,d,t.quickLookCompatible),y=o.size>0?{fps:t.animationFrameRate,endTimeCode:vb(t.animations)*t.animationFrameRate}:null;u=lm(y)+`
`+a.toString()+`

`+g.toString(),s[r]=xo(u),u=null;for(let m in d){let T=d[m];if(T.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");T=await this.textureUtils.decompress(T)}let w=yb(T.image,T.flipY,t.maxTextureSize),_=T.userData.mimeType==="image/jpeg"?"image/jpeg":"image/png",v=await new Promise(S=>w.toBlob(S,_));s[`textures/Texture_${m}.${am(T)}`]=new Uint8Array(await v.arrayBuffer())}let p=0;for(let m in s){let T=s[m],w=34+m.length;p+=w;let _=p&63;if(_!==4){let v=64-_,S=new Uint8Array(v);s[m]=[T,{extra:{12345:S}}]}p=T.length}return nm(s,{level:0})}};function om(n,e){let t=n.name;return t=t.replace(/[^A-Za-z0-9_]/g,""),/^[0-9]/.test(t)&&(t="_"+t),t===""&&(n.isCamera?t="Camera":t="Object"),e.has(t)&&(t=t+"_"+n.id),e.add(t),t}function am(n){return n.userData.mimeType==="image/jpeg"?"jpg":"png"}function yb(n,e,t){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){let i=t/Math.max(n.width,n.height),s=document.createElement("canvas");s.width=n.width*Math.min(1,i),s.height=n.height*Math.min(1,i);let r=s.getContext("2d");return e===!0&&(r.translate(0,s.height),r.scale(1,-1)),r.drawImage(n,0,0,s.width,s.height),s}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}var st=7;function lm(n=null){return`#usda 1.0
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
`}function _b(n,e){let t=new Map;for(let i=0;i<e.length;i++){let s=e[i];for(let r=0;r<s.tracks.length;r++){let o=s.tracks[r],a=ot.parseTrackName(o.name),l=ot.findNode(n,a.nodeName);if(l==null)continue;let c=a.propertyName;if(c!=="position"&&c!=="quaternion"&&c!=="scale")continue;let h=t.get(l);h===void 0&&(h={},t.set(l,h)),h[c]=o}}return t}function vb(n){let e=0;for(let t=0;t<n.length;t++)n[t].duration>e&&(e=n[t].duration);return e}function im(n,e,t,i){let s=t.times,r=t.values,o=[];for(let a=0;a<s.length;a++){let l=a*3;o.push(`${(s[a]*i).toPrecision(st)}: (${r[l].toPrecision(st)}, ${r[l+1].toPrecision(st)}, ${r[l+2].toPrecision(st)})`)}return`${e} ${n}.timeSamples = {
	${o.join(`,
	`)},
}`}function Mb(n,e){let t=n.times,i=n.values,s=[];for(let r=0;r<t.length;r++){let o=r*4;s.push(`${(t[r]*e).toPrecision(st)}: (${i[o+3].toPrecision(st)}, ${i[o].toPrecision(st)}, ${i[o+1].toPrecision(st)}, ${i[o+2].toPrecision(st)})`)}return`quatf xformOp:orient.timeSamples = {
	${s.join(`,
	`)},
}`}function cm(n,e,t,i,s,r){for(let o=0,a=n.children.length;o<a;o++)hm(n.children[o],e,t,i,s,r)}function hm(n,e,t,i,s,r){if(n.visible===!1&&r.onlyVisible===!0)return;let o;if(n.isMesh){let a=n.geometry,l=Array.isArray(n.material),c=l?n.material:[n.material];for(let u=0;u<c.length;u++){let f=c[u];f.isMeshStandardMaterial||console.warn("THREE.USDZExporter: Use MeshStandardMaterial for best results."),f.uuid in t||(t[f.uuid]=f)}let h=c.map(u=>t[u.uuid]);if(l===!1){let u=`geometries/Geometry_${a.id}.usda`;if(!(u in s)){let f=wb(a);s[u]=xo(lm()+`
`+f.toString())}}o=bb(n,a,h,i,r)}else n.isCamera?o=Ib(n,i,r):o=fm(n,i,r);e.addChild(o),cm(n,o,t,i,s,r)}function um(n,e,t){let i=t.animationTracks.get(e),s=e.pivot!==null;if(!s&&i===void 0){let c=Sb(e.matrix);n.addProperty(`matrix4d xformOp:transform = ${c}`),n.addProperty('uniform token[] xformOpOrder = ["xformOp:transform"]');return}let r=t.animationFrameRate,o=e.position,a=e.quaternion,l=e.scale;if(i!==void 0&&i.position!==void 0?n.addProperty(im("xformOp:translate","float3",i.position,r)):n.addProperty(`float3 xformOp:translate = (${o.x.toPrecision(st)}, ${o.y.toPrecision(st)}, ${o.z.toPrecision(st)})`),s){let c=e.pivot;n.addProperty(`float3 xformOp:translate:pivot = (${c.x.toPrecision(st)}, ${c.y.toPrecision(st)}, ${c.z.toPrecision(st)})`)}i!==void 0&&i.quaternion!==void 0?n.addProperty(Mb(i.quaternion,r)):n.addProperty(`quatf xformOp:orient = (${a.w.toPrecision(st)}, ${a.x.toPrecision(st)}, ${a.y.toPrecision(st)}, ${a.z.toPrecision(st)})`),i!==void 0&&i.scale!==void 0?n.addProperty(im("xformOp:scale","float3",i.scale,r)):n.addProperty(`float3 xformOp:scale = (${l.x.toPrecision(st)}, ${l.y.toPrecision(st)}, ${l.z.toPrecision(st)})`),s?n.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:translate:pivot", "xformOp:orient", "xformOp:scale", "!invert!xformOp:translate:pivot"]'):n.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:orient", "xformOp:scale"]')}function fm(n,e,t){let i=om(n,e);n.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n);let s=new Kt(i,"Xform");return um(s,n,t),s}function bb(n,e,t,i,s){let r=fm(n,i,s);return t.length===1?(r.addMetadata("prepend references",`@./geometries/Geometry_${e.id}.usda@</Geometry>`),r.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),r.addProperty(`rel material:binding = </Materials/Material_${t[0].id}>`)):r.addChild(dm(e,t)),r}function Sb(n){let e=n.elements;return`( ${Yl(e,0)}, ${Yl(e,4)}, ${Yl(e,8)}, ${Yl(e,12)} )`}function Yl(n,e){return`(${n[e+0]}, ${n[e+1]}, ${n[e+2]}, ${n[e+3]})`}function wb(n){let e=new Kt("Geometry"),t=dm(n);return e.addChild(t),e}function dm(n,e=null){let t="Geometry",i=n.attributes,s=i.position.count,r=new Kt(t,"Mesh");r.addProperty(`int[] faceVertexCounts = [${Tb(n)}]`),r.addProperty(`int[] faceVertexIndices = [${Eb(n)}]`),r.addProperty(`normal3f[] normals = [${Eu(i.normal,s)}]`,['interpolation = "vertex"']),r.addProperty(`point3f[] points = [${Eu(i.position,s)}]`);for(let a=0;a<4;a++){let l=a>0?a:"",c=i["uv"+l];c!==void 0&&r.addProperty(`texCoord2f[] primvars:st${l} = [${Ab(c)}]`,['interpolation = "vertex"'])}let o=i.color;if(o!==void 0&&r.addProperty(`color3f[] primvars:displayColor = [${Eu(o,s)}]`,['interpolation = "vertex"']),r.addProperty('uniform token subdivisionScheme = "none"'),e!==null){let a=n.groups,l=(n.index!==null?n.index.count:i.position.count)/3;for(let c=0;c<a.length;c++){let h=a[c],u=e[h.materialIndex];if(u===void 0)continue;let f=Math.floor(h.start/3),d=Math.min(f+Math.floor(h.count/3),l),g=[];for(let p=f;p<d;p++)g.push(p);let y=new Kt(`subset_${c}`,"GeomSubset");y.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),y.addProperty('uniform token elementType = "face"'),y.addProperty('uniform token familyName = "materialBind"'),y.addProperty(`int[] indices = [${g.join(", ")}]`),y.addProperty(`rel material:binding = </Materials/Material_${u.id}>`),r.addChild(y)}}return r}function Tb(n){let e=n.index!==null?n.index.count:n.attributes.position.count;return Array(e/3).fill(3).join(", ")}function Eb(n){let e=n.index,t=[];if(e!==null)for(let i=0;i<e.count;i++)t.push(e.getX(i));else{let i=n.attributes.position.count;for(let s=0;s<i;s++)t.push(s)}return t.join(", ")}function Eu(n,e){if(n===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");let t=[];for(let i=0;i<n.count;i++){let s=n.getX(i),r=n.getY(i),o=n.getZ(i);t.push(`(${s.toPrecision(st)}, ${r.toPrecision(st)}, ${o.toPrecision(st)})`)}return t.join(", ")}function Ab(n){let e=[];for(let t=0;t<n.count;t++){let i=n.getX(t),s=n.getY(t);e.push(`(${i.toPrecision(st)}, ${1-s.toPrecision(st)})`)}return e.join(", ")}function Cb(n,e,t=!1){let i=new Kt("Materials");for(let s in n){let r=n[s];i.addChild(Rb(r,e,t))}return i}function Rb(n,e,t=!1){let i=new Kt(`Material_${n.id}`,"Material");function s(o,a,l){let c=o.source.id+"_"+o.flipY;e[c]=o;let h=o.channel>0?"st"+o.channel:"st",u={1e3:"repeat",1001:"clamp",1002:"mirror"},f=o.repeat.clone(),d=o.offset.clone(),g=o.rotation,y=Math.sin(g),p=Math.cos(g);d.y=1-d.y-f.y,t?(d.x=d.x/f.x,d.y=d.y/f.y,d.x+=y/f.x,d.y+=p-1):(d.x+=y*f.x,d.y+=(1-p)*f.y);let m=new Kt(`PrimvarReader_${a}`,"Shader");m.addProperty('uniform token info:id = "UsdPrimvarReader_float2"'),m.addProperty("float2 inputs:fallback = (0.0, 0.0)"),m.addProperty(`string inputs:varname = "${h}"`),m.addProperty("float2 outputs:result");let T=new Kt(`Transform2d_${a}`,"Shader");T.addProperty('uniform token info:id = "UsdTransform2d"'),T.addProperty(`float2 inputs:in.connect = </Materials/Material_${n.id}/PrimvarReader_${a}.outputs:result>`),T.addProperty(`float inputs:rotation = ${(g*(180/Math.PI)).toFixed(st)}`),T.addProperty(`float2 inputs:scale = ${rm(f)}`),T.addProperty(`float2 inputs:translation = ${rm(d)}`),T.addProperty("float2 outputs:result");let w=new Kt(`Texture_${o.id}_${a}`,"Shader");if(w.addProperty('uniform token info:id = "UsdUVTexture"'),w.addProperty(`asset inputs:file = @textures/Texture_${c}.${am(o)}@`),w.addProperty(`float2 inputs:st.connect = </Materials/Material_${n.id}/Transform2d_${a}.outputs:result>`),l!==void 0){let _=a==="diffuse"?n.opacity:1;w.addProperty(`float4 inputs:scale = ${Pb(l,_)}`)}if(a==="normal"){let _=n.normalScale.x;w.addProperty(`float4 inputs:scale = (${2*_}, ${2*_}, 2, 1)`),w.addProperty(`float4 inputs:bias = (${-_}, ${-_}, -1, 0)`)}return w.addProperty(`token inputs:sourceColorSpace = "${o.colorSpace===pn?"raw":"sRGB"}"`),w.addProperty(`token inputs:wrapS = "${u[o.wrapS]}"`),w.addProperty(`token inputs:wrapT = "${u[o.wrapT]}"`),w.addProperty("float outputs:r"),w.addProperty("float outputs:g"),w.addProperty("float outputs:b"),w.addProperty("float3 outputs:rgb"),(n.transparent||n.alphaTest>0)&&w.addProperty("float outputs:a"),[m,T,w]}n.side===tn&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",n);let r=new Kt("PreviewSurface","Shader");if(r.addProperty('uniform token info:id = "UsdPreviewSurface"'),n.map!==null?(r.addProperty(`color3f inputs:diffuseColor.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:rgb>`),n.transparent?r.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`):n.alphaTest>0&&(r.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`),r.addProperty(`float inputs:opacityThreshold = ${n.alphaTest}`)),s(n.map,"diffuse",n.color).forEach(a=>i.addChild(a))):r.addProperty(`color3f inputs:diffuseColor = ${sm(n.color)}`),n.emissive){let o=n.emissiveIntensity??1;if(n.emissiveMap){r.addProperty(`color3f inputs:emissiveColor.connect = </Materials/Material_${n.id}/Texture_${n.emissiveMap.id}_emissive.outputs:rgb>`);let a=new Be(n.emissive.r*o,n.emissive.g*o,n.emissive.b*o);s(n.emissiveMap,"emissive",a).forEach(c=>i.addChild(c))}else n.emissive.getHex()>0&&r.addProperty(`color3f inputs:emissiveColor = ${sm(n.emissive)}`)}if(n.normalMap&&(r.addProperty(`normal3f inputs:normal.connect = </Materials/Material_${n.id}/Texture_${n.normalMap.id}_normal.outputs:rgb>`),s(n.normalMap,"normal").forEach(a=>i.addChild(a))),n.aoMap){r.addProperty(`float inputs:occlusion.connect = </Materials/Material_${n.id}/Texture_${n.aoMap.id}_occlusion.outputs:r>`);let o=n.aoMapIntensity??1,a=new Be(o,o,o);s(n.aoMap,"occlusion",a).forEach(c=>i.addChild(c))}if(n.roughnessMap){r.addProperty(`float inputs:roughness.connect = </Materials/Material_${n.id}/Texture_${n.roughnessMap.id}_roughness.outputs:g>`);let o=new Be(n.roughness,n.roughness,n.roughness);s(n.roughnessMap,"roughness",o).forEach(l=>i.addChild(l))}else r.addProperty(`float inputs:roughness = ${n.roughness??1}`);if(n.metalnessMap){r.addProperty(`float inputs:metallic.connect = </Materials/Material_${n.id}/Texture_${n.metalnessMap.id}_metallic.outputs:b>`);let o=new Be(n.metalness,n.metalness,n.metalness);s(n.metalnessMap,"metallic",o).forEach(l=>i.addChild(l))}else r.addProperty(`float inputs:metallic = ${n.metalness??0}`);if(n.alphaMap?(r.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.alphaMap.id}_opacity.outputs:r>`),r.addProperty("float inputs:opacityThreshold = 0.0001"),s(n.alphaMap,"opacity").forEach(a=>i.addChild(a))):r.addProperty(`float inputs:opacity = ${n.opacity}`),n.isMeshPhysicalMaterial){if(n.clearcoatMap!==null){r.addProperty(`float inputs:clearcoat.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatMap.id}_clearcoat.outputs:r>`);let o=new Be(n.clearcoat,n.clearcoat,n.clearcoat);s(n.clearcoatMap,"clearcoat",o).forEach(l=>i.addChild(l))}else r.addProperty(`float inputs:clearcoat = ${n.clearcoat}`);if(n.clearcoatRoughnessMap!==null){r.addProperty(`float inputs:clearcoatRoughness.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`);let o=new Be(n.clearcoatRoughness,n.clearcoatRoughness,n.clearcoatRoughness);s(n.clearcoatRoughnessMap,"clearcoatRoughness",o).forEach(l=>i.addChild(l))}else r.addProperty(`float inputs:clearcoatRoughness = ${n.clearcoatRoughness}`);r.addProperty(`float inputs:ior = ${n.ior}`)}return r.addProperty("int inputs:useSpecularWorkflow = 0"),r.addProperty("token outputs:surface"),i.addChild(r),i.addProperty(`token outputs:surface.connect = </Materials/Material_${n.id}/PreviewSurface.outputs:surface>`),i}function sm(n){return`(${n.r}, ${n.g}, ${n.b})`}function Pb(n,e=1){return`(${n.r}, ${n.g}, ${n.b}, ${e})`}function rm(n){return`(${n.x}, ${n.y})`}function Ib(n,e,t){let i=om(n,e);n.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n);let s=new Kt(i,"Camera");um(s,n,t);let r=n.isOrthographicCamera?"orthographic":"perspective";s.addProperty(`token projection = "${r}"`);let o=`(${n.near.toPrecision(st)}, ${n.far.toPrecision(st)})`;s.addProperty(`float2 clippingRange = ${o}`);let a;n.isOrthographicCamera?a=((Math.abs(n.left)+Math.abs(n.right))*10).toPrecision(st):a=n.getFilmWidth().toPrecision(st),s.addProperty(`float horizontalAperture = ${a}`);let l;if(n.isOrthographicCamera?l=((Math.abs(n.top)+Math.abs(n.bottom))*10).toPrecision(st):l=n.getFilmHeight().toPrecision(st),s.addProperty(`float verticalAperture = ${l}`),n.isPerspectiveCamera){let c=n.getFocalLength().toPrecision(st);s.addProperty(`float focalLength = ${c}`);let h=n.focus.toPrecision(st);s.addProperty(`float focusDistance = ${h}`)}return s}var yo=n=>{isFinite(n)||(n=0);let e=(Math.round(n*1e5)/1e5).toString();return e==="-0"&&(e="0"),e},Au=n=>String(n||"mesh").replace(/[^A-Za-z0-9_]/g,"_")||"mesh";function Lb(n){n.updateWorldMatrix(!0,!0);let e=[],t=new I,i=new I;return n.traverse(s=>{if(!s.isMesh||!s.visible||!s.geometry||s.name.endsWith(":cut")||s.name.startsWith("ghost"))return;for(let f=s;f;f=f.parent)if(f.userData?.isMarker||String(f.name).startsWith("marker:"))return;let r=s.geometry.index?s.geometry.toNonIndexed():s.geometry,o=r.getAttribute("position"),a=r.getAttribute("normal"),l=new Xe().getNormalMatrix(s.matrixWorld),c=[],h=[];for(let f=0;f<o.count;f++)t.fromBufferAttribute(o,f).applyMatrix4(s.matrixWorld),c.push(t.x,t.y,t.z),a&&(i.fromBufferAttribute(a,f).applyMatrix3(l).normalize(),h.push(i.x,i.y,i.z));r!==s.geometry&&r.dispose();let u=s.material?.color?s.material.color:new Be(.72,.74,.77);e.push({name:s.name||"mesh",verts:c,normals:h,color:[u.r,u.g,u.b],material:s.material?.name||"steel"})}),e}function Cu(n,e={}){let t=Lb(n),i=new Date,s=[],r=c=>s.push(c);r("; FBX 7.4.0 project file"),r("; VRINGON CAD \u2014 revolve part (mm)"),r(""),r("FBXHeaderExtension:  {"),r("	FBXHeaderVersion: 1003"),r("	FBXVersion: 7400"),r(`	CreationTimeStamp:  {
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
}`);let o=t.length,a=t.length;r("Definitions:  {"),r("	Version: 100"),r(`	Count: ${1+o+o+a}`),r(`	ObjectType: "GlobalSettings" {
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
	}`),r("}"),r("Objects:  {");let l=[];t.forEach((c,h)=>{let u=2e6+h,f=3e6+h,d=4e6+h;l.push({gid:u,mid:f,matid:d});let g=c.verts.length/3,y=[];for(let w=0;w<g;w+=3)y.push(w,w+1,-(w+2)-1);r(`	Geometry: ${u}, "Geometry::${Au(c.name)}", "Mesh" {`),r(`		Vertices: *${c.verts.length} {
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
`}var eE=Math.PI/180;function Kl(n){for(let e=n;e;e=e.parent)if(e.userData?.isMarker||String(e.name).startsWith("marker:"))return!0;return!1}function Ru(n,e=null){n.updateWorldMatrix(!0,!0);let t=[],i=new I;return n.traverse(s=>{if(!s.isMesh||!s.visible||!s.geometry||s.name.endsWith(":cut")||s.name.startsWith("ghost")||Kl(s)||e&&!e(s))return;let r=s.geometry.index?s.geometry.toNonIndexed():s.geometry,o=r.getAttribute("position"),a=[];for(let l=0;l<o.count;l++)i.fromBufferAttribute(o,l).applyMatrix4(s.matrixWorld),a.push(i.x,i.y,i.z);r!==s.geometry&&r.dispose(),t.push({name:s.name||"part",tris:a})}),t}var mt=n=>{isFinite(n)||(n=0);let e=n.toFixed(5);return e==="-0.00000"?"0.00000":e},mi=n=>String(n).replace(/[^A-Za-z0-9_\- ]/g,"_");function mm(n,e="vringon_shaft",t=null){let i=Ru(n);t&&(t.freeEdges=0,t.nonManifold=0,t.faces=0);let s=[],r=0,o=R=>(r+=1,s.push(`#${r}=${R};`),r),a=o("APPLICATION_CONTEXT('core data for automotive mechanical design processes')");o(`APPLICATION_PROTOCOL_DEFINITION('international standard','automotive_design',2000,#${a})`);let l=o(`PRODUCT_CONTEXT('',#${a},'mechanical')`),c=o(`PRODUCT('${mi(e)}','${mi(e)}','VRINGON revolve part',(#${l}))`),h=o(`PRODUCT_DEFINITION_FORMATION('','',#${c})`),u=o(`PRODUCT_DEFINITION_CONTEXT('part definition',#${a},'design')`),f=o(`PRODUCT_DEFINITION('design','',#${h},#${u})`),d=o(`PRODUCT_DEFINITION_SHAPE('','',#${f})`),g=o("(LENGTH_UNIT()NAMED_UNIT(*)SI_UNIT(.MILLI.,.METRE.))"),y=o("(NAMED_UNIT(*)PLANE_ANGLE_UNIT()SI_UNIT($,.RADIAN.))"),p=o("(NAMED_UNIT(*)SI_UNIT($,.STERADIAN.)SOLID_ANGLE_UNIT())"),m=o(`UNCERTAINTY_MEASURE_WITH_UNIT(LENGTH_MEASURE(0.01),#${g},'distance_accuracy_value','')`),T=o(`(GEOMETRIC_REPRESENTATION_CONTEXT(3)GLOBAL_UNCERTAINTY_ASSIGNED_CONTEXT((#${m}))GLOBAL_UNIT_ASSIGNED_CONTEXT((#${g},#${y},#${p}))REPRESENTATION_CONTEXT('Context #1','3D Context'))`),w=o("CARTESIAN_POINT('',(0.,0.,0.))"),_=o("DIRECTION('',(0.,0.,1.))"),v=o("DIRECTION('',(1.,0.,0.))"),S=o(`AXIS2_PLACEMENT_3D('',#${w},#${_},#${v})`),b=[];for(let R of i){let{tris:P,name:L}=R,k=new Map,z=[],N=[],V=[],F=[];for(let ue=0;ue<P.length;ue+=3){let pe=`${Math.round(P[ue]*1e4)}_${Math.round(P[ue+1]*1e4)}_${Math.round(P[ue+2]*1e4)}`,H=k.get(pe);if(H===void 0){H=z.length,k.set(pe,H);let K=o(`CARTESIAN_POINT('',(${mt(P[ue])},${mt(P[ue+1])},${mt(P[ue+2])}))`);z.push(K),N.push(o(`VERTEX_POINT('',#${K})`)),V.push(P[ue],P[ue+1],P[ue+2])}F.push(H)}let X=(ue,pe)=>V[ue*3+pe],J=new Map,le=new Map,re=(ue,pe)=>{let H=ue<pe?`${ue}_${pe}`:`${pe}_${ue}`;le.set(H,(le.get(H)||0)+1);let K=J.get(H);if(!K){let j=ue<pe?ue:pe,ge=ue<pe?pe:ue,Ee=X(ge,0)-X(j,0),Pe=X(ge,1)-X(j,1),We=X(ge,2)-X(j,2),xe=Math.hypot(Ee,Pe,We)||1,Q=o(`DIRECTION('',(${mt(Ee/xe)},${mt(Pe/xe)},${mt(We/xe)}))`),ie=o(`VECTOR('',#${Q},${mt(xe)})`),se=o(`LINE('',#${z[j]},#${ie})`);K=o(`EDGE_CURVE('',#${N[j]},#${N[ge]},#${se},.T.)`),J.set(H,K)}return{ec:K,fwd:ue<pe}},ne=[];for(let ue=0;ue<F.length;ue+=3){let pe=F[ue],H=F[ue+1],K=F[ue+2];if(pe===H||H===K||pe===K)continue;let j=X(pe,0),ge=X(pe,1),Ee=X(pe,2),Pe=X(H,0),We=X(H,1),xe=X(H,2),Q=X(K,0),ie=X(K,1),se=X(K,2),ye=(We-ge)*(se-Ee)-(xe-Ee)*(ie-ge),_e=(xe-Ee)*(Q-j)-(Pe-j)*(se-Ee),ke=(Pe-j)*(ie-ge)-(We-ge)*(Q-j),Le=Math.hypot(ye,_e,ke);if(Le<1e-9)continue;ye/=Le,_e/=Le,ke/=Le;let Ge=Pe-j,Ze=We-ge,D=xe-Ee,lt=Math.hypot(Ge,Ze,D)||1;Ge/=lt,Ze/=lt,D/=lt;let je=re(pe,H),C=re(H,K),M=re(K,pe),B=o(`ORIENTED_EDGE('',*,*,#${je.ec},${je.fwd?".T.":".F."})`),G=o(`ORIENTED_EDGE('',*,*,#${C.ec},${C.fwd?".T.":".F."})`),Y=o(`ORIENTED_EDGE('',*,*,#${M.ec},${M.fwd?".T.":".F."})`),de=o(`EDGE_LOOP('',(#${B},#${G},#${Y}))`),me=o(`FACE_OUTER_BOUND('',#${de},.T.)`),Z=o(`CARTESIAN_POINT('',(${mt(j)},${mt(ge)},${mt(Ee)}))`),ee=o(`DIRECTION('',(${mt(ye)},${mt(_e)},${mt(ke)}))`),ve=o(`DIRECTION('',(${mt(Ge)},${mt(Ze)},${mt(D)}))`),Fe=o(`AXIS2_PLACEMENT_3D('',#${Z},#${ee},#${ve})`),be=o(`PLANE('',#${Fe})`);ne.push(o(`ADVANCED_FACE('',(#${me}),#${be},.T.)`))}if(!ne.length)continue;if(t){for(let ue of le.values())ue===1?t.freeEdges++:ue>2&&t.nonManifold++;t.faces+=ne.length}let fe=o(`CLOSED_SHELL('',(${ne.map(ue=>"#"+ue).join(",")}))`);b.push(o(`MANIFOLD_SOLID_BREP('${mi(L)}',#${fe})`))}let x=o(`ADVANCED_BREP_SHAPE_REPRESENTATION('${mi(e)}',(#${S},${b.map(R=>"#"+R).join(",")}),#${T})`);o(`SHAPE_DEFINITION_REPRESENTATION(#${d},#${x})`);let A=new Date().toISOString().slice(0,19);return["ISO-10303-21;","HEADER;","FILE_DESCRIPTION(('VRINGON revolve faceted B-Rep export'),'2;1');",`FILE_NAME('${mi(e)}.step','${A}',('VRINGON CAD'),('VRINGON Inc.'),'VRINGON CAD 1.0','VRINGON CAD','');`,"FILE_SCHEMA(('AUTOMOTIVE_DESIGN { 1 0 10303 214 1 1 1 1 }'));","ENDSEC;","DATA;",...s,"ENDSEC;","END-ISO-10303-21;",""].join(`
`)}function gm(n){let e=Ru(n),t=["# VRINGON revolve export (mm)"],i=1;for(let s of e){t.push(`o ${mi(s.name)}`);let r=s.tris,o=r.length/3;for(let a=0;a<r.length;a+=3)t.push(`v ${mt(r[a])} ${mt(r[a+1])} ${mt(r[a+2])}`);for(let a=0;a<o;a+=3)t.push(`f ${i+a} ${i+a+1} ${i+a+2}`);i+=o}return t.push(""),t.join(`
`)}function xm(n){let e=new jt;return n.traverse(t=>{if(t.isMesh&&!t.name.endsWith(":cut")&&!t.name.startsWith("ghost")&&!Kl(t)){let i=new at(t.geometry,t.material);i.applyMatrix4(t.matrixWorld),e.add(i)}}),new $l().parse(e,{binary:!0})}function ym(n){let e=new jt;return n.traverse(t=>{if(t.isMesh&&!t.name.endsWith(":cut")&&!t.name.startsWith("ghost")&&!Kl(t)){let i=new at(t.geometry,t.material);i.name=t.name,i.applyMatrix4(t.matrixWorld),e.add(i)}}),new Promise((t,i)=>new Hi().parse(e,t,i,{binary:!0}))}function _m(n){let e=new jt;return n.traverse(t=>{if(t.isMesh&&!t.name.endsWith(":cut")&&!t.name.startsWith("ghost")&&!Kl(t)){let i=new at(t.geometry,t.material);i.name=t.name,i.applyMatrix4(t.matrixWorld),e.add(i)}}),e}function vm(n){return new Wl().parse(_m(n),null,{binary:!1})}function Mm(n){let e=_m(n),t=new jt;return t.name="mm_to_m",t.scale.setScalar(.001),t.add(e),t.updateMatrixWorld(!0),new Zl().parseAsync(t,{includeAnchoringProperties:!1})}function bm(n,e,t={}){let i=Ru(n),s=l=>`"${String(l).replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`,r=[];if(e&&e.part2){let l=mi(e.sheet||"part").replace(/[^A-Za-z0-9_]/g,"_")||"part";return r.push("#usda 1.0","(",`    defaultPrim = "${l}"`,"    metersPerUnit = 0.001",'    upAxis = "Y"','    doc = "VRINGON multiview part \u2014 reconstructed from orthographic views"',")",""),r.push(`def Xform "${l}" (`,'    kind = "component"',")","{"),r.push('    custom string vringon:source = "multiview"'),r.push(`    custom string vringon:spec_json = ${s(JSON.stringify(e))}`),r.push(`    custom double vringon:mm_per_px = ${e.mm_per_px||0}`),e.result?.size&&r.push(`    custom double3 vringon:size_mm = (${e.result.size.X}, ${e.result.size.Y}, ${e.result.size.Z})`),e.result?.volume!=null&&r.push(`    custom double vringon:volume_cm3 = ${e.result.volume}`),r.push(""),pm(r,i,s),r.push("}",""),r.join(`
`)}let o=mi(e.id||e.name||"shaft").replace(/[^A-Za-z0-9_]/g,"_")||"shaft",a=Rp(e,sp(e.material));return r.push("#usda 1.0","(",`    defaultPrim = "${o}"`,"    metersPerUnit = 0.001",'    upAxis = "Y"','    doc = "VRINGON revolve part \u2014 generated from shaft DSL"',")",""),r.push(`def Xform "${o}" (`,'    kind = "component"',")","{"),r.push(`    custom string vringon:dsl_version = ${s(e.dsl||"vringon-shaft/1.0")}`),r.push(`    custom string vringon:dsl_json = ${s(JSON.stringify(e))}`),r.push(`    custom string vringon:name_ko = ${s(e.name_ko||"")}`),r.push(`    custom string vringon:material = ${s(e.material||"")}`),r.push(`    custom double vringon:length_mm = ${cs(e)}`),r.push(`    custom double vringon:max_diameter_mm = ${Vh(e)}`),r.push(`    custom double vringon:volume_mm3 = ${a.volume_mm3.toFixed(3)}`),r.push(`    custom double vringon:mass_g = ${a.mass_g.toFixed(3)}`),r.push(`    custom double[] vringon:segment_lengths_mm = [${(e.segments||[]).map(l=>l.length).join(", ")}]`),r.push(`    custom double[] vringon:segment_diameters_mm = [${(e.segments||[]).map(l=>l.type==="taper"?l.d_start:l.diameter).join(", ")}]`),r.push(`    custom string[] vringon:segment_types = [${(e.segments||[]).map(l=>s(l.type)).join(", ")}]`),r.push(`    custom string[] vringon:features = [${(e.features||[]).map(l=>s(l.type)).join(", ")}]`),r.push(""),pm(r,i,s),r.push("}",""),r.join(`
`)}function pm(n,e,t){for(let i of e){let s=i.tris,r=s.length/3,o=[];for(let y=0;y<s.length;y+=3)o.push(`(${mt(s[y])}, ${mt(s[y+1])}, ${mt(s[y+2])})`);let a=new Array(r/3).fill(3).join(", "),l=Array.from({length:r},(y,p)=>p).join(", "),c=1/0,h=1/0,u=1/0,f=-1/0,d=-1/0,g=-1/0;for(let y=0;y<s.length;y+=3)c=Math.min(c,s[y]),f=Math.max(f,s[y]),h=Math.min(h,s[y+1]),d=Math.max(d,s[y+1]),u=Math.min(u,s[y+2]),g=Math.max(g,s[y+2]);n.push(`    def Mesh "${mi(i.name).replace(/[^A-Za-z0-9_]/g,"_")||"mesh"}"`,"    {"),n.push(`        float3[] extent = [(${mt(c)}, ${mt(h)}, ${mt(u)}), (${mt(f)}, ${mt(d)}, ${mt(g)})]`),n.push(`        int[] faceVertexCounts = [${a}]`),n.push(`        int[] faceVertexIndices = [${l}]`),n.push(`        point3f[] points = [${o.join(", ")}]`),n.push('        uniform token subdivisionScheme = "none"'),n.push("        color3f[] primvars:displayColor = [(0.72, 0.74, 0.77)]"),n.push("    }")}}function Yn(n,e,t="application/octet-stream"){let i=n instanceof Blob?n:new Blob([n],{type:t}),s=URL.createObjectURL(i),r=document.createElement("a");return r.href=s,r.download=e,document.body.appendChild(r),r.click(),setTimeout(()=>{URL.revokeObjectURL(s),r.remove()},800),i.size}var Pu={part1:"vringon.revolve.tour.v1",part2:"vringon.part2.tour.v1",sculpt:"vringon.sculpt.tour.v1"},vo=n=>document.getElementById(n),wm=[{el:"chips",place:"right",title:"\uC0D8\uD50C \uB3C4\uBA74\uC73C\uB85C \uC2DC\uC791",body:"\uCE74\uB4DC\uB97C \uB204\uB974\uBA74 \uADF8 \uB3C4\uBA74\uC73C\uB85C \uBC14\uB85C \uC9C4\uD589\uB429\uB2C8\uB2E4. \uCC98\uC74C\uC774\uB77C\uBA74 \uC5EC\uAE30\uC11C \uC2DC\uC791\uD558\uC138\uC694."},{el:"drop",place:"right",title:"\uB0B4 \uB3C4\uBA74 \uC62C\uB9AC\uAE30",body:"\uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4 \uD55C \uC7A5\uC744 \uC62C\uB9BD\uB2C8\uB2E4. \uC544\uB798\uC5D0\uC11C \uBD80\uD488 \uC720\uD615\uC744 \uBA3C\uC800 \uACE8\uB77C \uB450\uBA74 \uADF8 \uC720\uD615\uC5D0 \uB9DE\uAC8C \uC2DC\uBBAC\uB808\uC774\uC158\uD569\uB2C8\uB2E4.",link:{href:"./guide.html",text:"\uC62C\uB9AC\uAE30 \uC548\uB0B4 \uC5F4\uAE30"}},{el:"stepper",place:"bottom",title:"\uB124 \uB2E8\uACC4\uB85C \uC9C4\uD589",body:"\uB3C4\uBA74 \uC785\uB825, \uD310\uB3C5, 3D CAD, \uAC80\uC99D \uC21C\uC11C\uC785\uB2C8\uB2E4. \uC9C0\uAE08 \uB2E8\uACC4\uAC00 \uC704\uCABD\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4."},{el:"stageNext",fallback:"stage",fallbackBox:{right:18,bottom:84,w:150,h:42},place:"top",title:"\uB2E4\uC74C \uB2E8\uACC4 \uBC84\uD2BC",body:"\uC624\uB978\uCABD \uC544\uB798 \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uB2E4\uC74C \uB2E8\uACC4\uAC00 \uC2E4\uD589\uB429\uB2C8\uB2E4. \uBC84\uD2BC \uC704 \uD55C \uC904\uC774 \uADF8 \uB2E8\uACC4\uAC00 \uD558\uB294 \uC77C\uC785\uB2C8\uB2E4."},{el:"stageActions",fallback:"stage",fallbackBox:{right:14,top:122,w:210,h:34},narrowBox:{left:8,top:52,w:300,h:34},place:"left",title:"\uBCF4\uAE30 \uC804\uD658\uACFC \uC870\uB9BD \xB7 \uC2DC\uBBAC",body:"\uB2E8\uBA74\uACFC \uB3C4\uBA74\uC744 \uBC88\uAC08\uC544 \uBCF4\uACE0, \uC870\uB9BD \xB7 \uC2DC\uBBAC\uC744 \uCF1C\uBA74 \uC0C1\uB300 \uBD80\uD488\uACFC \uD68C\uC804\uC774 \uBD99\uC2B5\uB2C8\uB2E4. \uB044\uBA74 \uBD80\uD488\uB9CC \uB0A8\uC2B5\uB2C8\uB2E4."},{el:"sideRight",place:"left",title:"\uACB0\uACFC\uC640 \uB0B4\uB824\uBC1B\uAE30",body:"\uD310\uB3C5\uD55C \uCE58\uC218\uB97C \uACE0\uCE58\uBA74 3D\uC640 \uB3C4\uBA74\uC774 \uD568\uAED8 \uBC14\uB01D\uB2C8\uB2E4. 3D\uAC00 \uB9CC\uB4E4\uC5B4\uC9C0\uBA74 \uB9E8 \uC544\uB798 \uB0B4\uBCF4\uB0B4\uAE30\uC5D0\uC11C STEP, STL, GLB \uB4F1\uC73C\uB85C \uBC1B\uC2B5\uB2C8\uB2E4."}],Nb=[{el:"chips",place:"right",title:"\uC608\uC2DC \uB3C4\uBA74\uC73C\uB85C \uC2DC\uC791",body:"\uD55C \uBD80\uD488\uC744 \uC815\uBA74 \xB7 \uC717\uBA74 \xB7 \uCE21\uBA74\uC73C\uB85C \uADF8\uB9B0 \uB3C4\uBA74\uB4E4\uC785\uB2C8\uB2E4. \uC138 \uBC88\uC9F8(\uACE1\uAD00)\uB294 \uC774 \uBC84\uC804\uC774 \uB9CC\uB4E4\uC9C0 \uBABB\uD558\uB294 \uBD80\uB958\uB77C \uC774\uC720\uB97C \uBCF4\uC5EC \uC90D\uB2C8\uB2E4."},{el:"drop",place:"right",title:"\uB0B4 \uB3C4\uBA74 \uC62C\uB9AC\uAE30",body:"\uC5EC\uB7EC \uD22C\uC0C1\uB3C4\uAC00 \uD55C \uC7A5\uC5D0 \uC788\uB294 \uD55C \uBD80\uD488 \uB3C4\uBA74\uC744 \uC62C\uB9BD\uB2C8\uB2E4. \uC62C\uB9AC\uBA74 \uBDF0\uB97C \uB098\uB204\uACE0, \uBC29\uD5A5\uC744 \uCD94\uCC9C\uD558\uACE0, \uCE58\uC218 \uBB38\uC790\uB97C \uC77D\uC2B5\uB2C8\uB2E4.",link:{href:"./guide.html#part2",text:"\uC62C\uB9AC\uAE30 \uC548\uB0B4 \uC5F4\uAE30"}},{el:"viewBlock",fallback:"stage",fallbackBox:{left:40,top:90,w:260,h:140},place:"right",title:"\uBDF0\uB9C8\uB2E4 \uBC29\uD5A5 \uD655\uC778",body:"\uCD94\uCC9C\uB41C \uBC29\uD5A5(\uC815\uBA74 \xB7 \uC717\uBA74 \xB7 \uC6B0\uCE21\uBA74 \xB7 \uB4F1\uAC01 \uCC38\uACE0)\uC774 \uB9DE\uB294\uC9C0 \uBD05\uB2C8\uB2E4. \uAE30\uD558\uB9CC\uC73C\uB85C\uB294 \uBC29\uD5A5\uC744 \uD655\uC2E0\uD560 \uC218 \uC5C6\uC5B4 \uC0AC\uB78C\uC774 \uD655\uC815\uD569\uB2C8\uB2E4."},{el:"cubeBlock",place:"left",title:"\uC815\uC721\uBA74\uCCB4\uB85C \uBC29\uD5A5 \uC8FC\uAE30",body:"\uBDF0\uB97C \uACE0\uB978 \uB4A4 \uC815\uC721\uBA74\uCCB4\uC758 \uBA74\uC744 \uB204\uB974\uBA74 \uADF8 \uBDF0\uAC00 \uADF8 \uBC29\uD5A5\uC774 \uB429\uB2C8\uB2E4. \uC815\uD22C\uC0C1 \uBC29\uD5A5\uC740 \uBDF0 \uD558\uB098\uC5D0\uB9CC \uC904 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},{el:"dimBlock",fallback:"sideRight",fallbackBox:{right:20,top:220,w:260,h:150},place:"left",title:"\uCE58\uC218\uB294 \uB3C4\uBA74\uC5D0\uC11C \uC77D\uC2B5\uB2C8\uB2E4",body:"\uCE58\uC218 \uBB38\uC790\uB97C \uC77D\uC5B4 \uCE58\uC218\uC120\uACFC \uC9DD\uC9C0\uC5B4 \uCD95\uCC99\uC744 \uC815\uD569\uB2C8\uB2E4. \uC11C\uB85C \uB9DE\uB294 \uCE58\uC218\uAC00 \uB9CE\uC744\uC218\uB85D \uBBFF\uC744 \uB9CC\uD569\uB2C8\uB2E4. \uBABB \uC77D\uC73C\uBA74 \uADF8\uB54C\uB9CC \uD55C \uCE58\uC218\uB97C \uBB3B\uC2B5\uB2C8\uB2E4."},{el:"methodBlock",fallback:"sideRight",fallbackBox:{right:20,top:380,w:260,h:150},place:"left",title:"\uB9CC\uB4E4\uACE0 \uC815\uD569 \uBCF4\uAE30",body:"\uAC01 \uBDF0\uC758 \uC724\uACFD\uC744 \uADF8 \uBC29\uD5A5\uC73C\uB85C \uBC00\uC5B4\uB0B4 \uAD50\uC9D1\uD569\uD569\uB2C8\uB2E4. \uB9CC\uB4E0 3D \uB97C \uAC01 \uBDF0\uB85C \uB2E4\uC2DC \uD22C\uC601\uD574 \uB3C4\uBA74\uACFC \uC5BC\uB9C8\uB098 \uACB9\uCE58\uB294\uC9C0 \uBCF4\uC5EC \uC90D\uB2C8\uB2E4."}],nr=wm,gi=0,St=null,Iu=null,Lu=Pu.part1;function Db(n){let e=vo(n.el)||vo(n.fallback||"stage");if(!e)return;let t=e.closest(".side.left")?"left":e.closest(".side.right")?"right":e.closest(".stage")||e.id==="stage"?"stage":null,i=t&&document.querySelector(`.pane-tabs [data-pane="${t}"]`);i&&i.offsetParent!==null&&!i.classList.contains("on")&&i.click()}function Ub(n){Db(n);let e=vo(n.el),t=e&&e.getBoundingClientRect();if(t&&t.width>4&&t.height>4&&e.offsetParent!==null)return t;let i=vo(n.fallback||"stage");if(!i)return null;let s=matchMedia("(max-width: 1023px)").matches,r=i.getBoundingClientRect(),o=s&&n.narrowBox||n.fallbackBox||{},a=o.w||200,l=o.h||40,c=o.right!==void 0?r.right-o.right-a:r.left+(o.left||0),h=o.bottom!==void 0?r.bottom-o.bottom-l:r.top+(o.top||0);return{left:c,top:h,right:c+a,bottom:h+l,width:a,height:l}}function Tm(n){let e=Ub(n),t=St.querySelector(".tour-hole"),i=St.querySelector(".tour-card");if(!e){St.classList.add("center"),t.style.display="none";return}St.classList.remove("center");let s=8;t.style.display="",t.style.left=`${e.left-s}px`,t.style.top=`${e.top-s}px`,t.style.width=`${e.width+s*2}px`,t.style.height=`${e.height+s*2}px`;let r=i.offsetWidth||320,o=i.offsetHeight||150,a=16,l,c;n.place==="right"?(l=e.right+a,c=e.top):n.place==="left"?(l=e.left-r-a,c=e.top):n.place==="top"?(l=e.right-r,c=e.top-o-a):(l=e.left+e.width/2-r/2,c=e.bottom+a),l=Math.min(Math.max(12,l),innerWidth-r-12),c=Math.min(Math.max(12,c),innerHeight-o-12),i.style.left=`${l}px`,i.style.top=`${c}px`}function Em(){let n=nr[gi];St.querySelector(".tour-n").textContent=`${gi+1} / ${nr.length}`,St.querySelector(".tour-t").textContent=n.title,St.querySelector(".tour-b").textContent=n.body;let e=St.querySelector(".tour-link");n.link?(e.style.display="",e.href=n.link.href,e.textContent=n.link.text):e.style.display="none",St.querySelector(".tour-next").textContent=gi===nr.length-1?"\uC2DC\uC791\uD558\uAE30":"\uB2E4\uC74C",St.querySelector(".tour-prev").style.visibility=gi?"":"hidden",setTimeout(()=>Tm(n),0)}function Jl(){try{localStorage.setItem(Lu,"1")}catch{}removeEventListener("keydown",Iu),removeEventListener("resize",Am),St?.remove(),St=null}function Am(){St&&Tm(nr[gi])}function _o(n=1){if(gi+n>=nr.length)return Jl();gi=Math.max(0,gi+n),Em()}function Sm(){St||(gi=0,St=document.createElement("div"),St.className="tour",St.innerHTML=`<div class="tour-hole"></div>
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
    </div>`,document.body.appendChild(St),St.querySelector(".tour-next").onclick=()=>_o(1),St.querySelector(".tour-prev").onclick=()=>_o(-1),St.querySelector(".tour-skip").onclick=Jl,St.onclick=n=>{n.target===St&&_o(1)},Iu=n=>{n.key==="Escape"?Jl():n.key==="Enter"||n.key==="ArrowRight"?_o(1):n.key==="ArrowLeft"&&_o(-1)},addEventListener("keydown",Iu),addEventListener("resize",Am),Em())}var Fb=[{el:"prompt",place:"right",title:"\uD55C \uC904\uB85C \uC124\uBA85\uD558\uAE30",body:"\uB9CC\uB4E4 \uBB3C\uCCB4\uB97C \uD55C \uC904\uB85C \uC801\uC2B5\uB2C8\uB2E4. \uC544\uB798 \uC608\uC2DC\uB97C \uB20C\uB7EC \uCC44\uC6B8 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4."},{el:"drop",place:"right",title:"\uC0AC\uC9C4\uC73C\uB85C\uB3C4 \uB429\uB2C8\uB2E4",body:"\uBB3C\uCCB4 \uD558\uB098\uAC00 \uC628\uC804\uD788 \uBCF4\uC774\uB294 \uC0AC\uC9C4 \uD55C \uC7A5\uC744 \uC62C\uB9BD\uB2C8\uB2E4. \uAC00\uB824\uC9C4 \uB4B7\uBA74\uC740 \uC55E\uBA74\uC5D0\uC11C \uC720\uCD94\uD569\uB2C8\uB2E4."},{el:"chips",place:"right",title:"\uC608\uC2DC\uB85C \uBA3C\uC800 \uBCF4\uAE30",body:"\uBBF8\uB9AC \uB9CC\uB4E4\uC5B4 \uB454 \uC608\uC2DC\uC785\uB2C8\uB2E4. \uC11C\uBC84 \uC5C6\uC774\uB3C4 \uB20C\uB7EC\uC11C \uBC14\uB85C \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4."},{el:"parts",fallback:"sideRight",fallbackBox:{left:12,top:90,w:240,h:160},place:"left",title:"\uD30C\uD2B8 \uBD84\uB9AC",body:"\uBD80\uD488\uC774 \uD2B8\uB9AC\uB85C \uB098\uB258\uC5B4 \uB098\uC635\uB2C8\uB2E4. \uBAA9\uB85D\uC5D0\uC11C \uACE0\uB974\uBA74 \uADF8 \uBD80\uD488\uB9CC \uB0A8\uACE0, \uBD84\uB9AC \uB9C9\uB300\uB85C \uBC8C\uB824 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4."}];function Cm(n="part1"){nr=n==="part2"?Nb:n==="sculpt"?Fb:wm,Lu=Pu[n]||Pu.part1;let e=vo("btnTour");e&&(e.onclick=()=>{St?Jl():Sm()});let t=!1;try{t=localStorage.getItem(Lu)==="1"}catch{}t||setTimeout(Sm,700)}var Rm={"\uC62C\uB9AC\uAE30 \uC548\uB0B4":"Upload guide",\uC0AC\uC6A9\uBC95:"How to use","\uC0C8 \uD504\uB85C\uC81D\uD2B8":"New project","\uC0C8 \uB3C4\uBA74":"New drawing",\uB3C4\uBA74:"Drawing",\uC18D\uC131:"Properties",\uBD80\uD488:"Part","\uBD80\uD488 \uB9CC\uB4E4\uAE30":"Build part",\uCC98\uC74C\uC73C\uB85C:"Start over","\uCC98\uC74C\uC73C\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4":"Back to start","\uD655\uC778 \uC911\u2026":"Checking\u2026","\uCCB4\uD5D8 \uBAA8\uB4DC":"Demo mode","AI \uD310\uB3C5 \uC0AC\uC6A9":"AI reading on","\uBB38\uC790 \uC778\uC2DD \uC900\uBE44 \uC911\u2026":"Text recognition loading\u2026","\uBB38\uC790 \uC778\uC2DD \uBD88\uB7EC\uC624\uB294 \uC911\u2026":"Loading text recognition\u2026","\uBB38\uC790 \uC778\uC2DD \uC900\uBE44\uB428":"Text recognition ready","\uBB38\uC790 \uC778\uC2DD \uC5C6\uC74C":"No text recognition","\uCE58\uC218 \uBB38\uC790\uB97C \uC77D\uB294 \uC5D4\uC9C4 \uC0C1\uD0DC":"Text recognition engine status","\uC0AC\uC6A9\uBC95 \uB2E4\uC2DC \uBCF4\uAE30":"Show the walkthrough again","VRINGON CAD":"VRINGON CAD","\uB3C4\uBA74\uC744 \uC77D\uC5B4 3D\uB85C \uB9CC\uB4ED\uB2C8\uB2E4":"Read a drawing, get 3D","\uD68C\uC804\uCCB4\uB294 \uD55C \uC7A5\uC73C\uB85C, \uADF8 \uBC16\uC758 \uBD80\uD488\uC740 \uC5EC\uB7EC \uBDF0\uB85C \uB9CC\uB4ED\uB2C8\uB2E4.":"Turned parts from one view; everything else from several views.",\uC644\uC131:"Ready",\uCD94\uCC9C:"Recommended","\uB2E8\uC77C \uB3C4\uBA74 \uD68C\uC804\uCCB4":"Turned part, one view","\uB2E4\uC2DC\uC810 \uB3C4\uBA74\uC5D0\uC11C \uBD80\uD488 \uD558\uB098":"One part from several views","\uCD95, \uBD80\uC2DC, \uD540, \uBCFC\uD2B8\uCC98\uB7FC \uC120\uBC18\uC5D0\uC11C \uAE4E\uB294 \uBD80\uD488\uC758 \uC815\uBA74\uB3C4 \uD55C \uC7A5\uC744 \uC77D\uC5B4 3D\uB97C \uB9CC\uB4ED\uB2C8\uB2E4.":"Reads one front view of a lathe-turned part (shaft, bushing, pin, bolt) and builds the 3D.","\uC678\uD615 \uC77C\uCE58 99.9%, \uCE58\uC218 \uC77C\uCE58 97%":"Outline match 99.9%, dimension match 97%","STEP, STL, GLB, OBJ, FBX, USD":"STEP, STL, GLB, OBJ, FBX, USD","\uC870\uB9BD\uACFC \uD68C\uC804 \uC2DC\uBBAC\uB808\uC774\uC158":"Assembly and motion simulation","\uC77D\uC744 \uC218 \uC5C6\uB294 \uB3C4\uBA74\uC740 \uBBF8\uB9AC \uC54C\uB824 \uC90D\uB2C8\uB2E4":"Tells you up front when a drawing can't be read","Part 1 \uC5F4\uAE30 \u203A":"Open Part 1 \u203A","\uC815\uBA74, \uC717\uBA74, \uCE21\uBA74\uC774 \uD55C \uC7A5\uC5D0 \uC788\uB294 \uB3C4\uBA74\uC5D0\uC11C \uBDF0\uB9C8\uB2E4 \uBC29\uD5A5\uC744 \uC815\uD558\uACE0 \uCE58\uC218\uB97C \uC77D\uC5B4 \uBD80\uD488 \uD558\uB098\uB97C \uB9CC\uB4ED\uB2C8\uB2E4.":"You set a direction for each view on a multi-view sheet; it reads the dimensions and builds one part.","\uBDF0 \uC790\uB3D9 \uBD84\uD560\uACFC \uBC29\uD5A5 \uCD94\uCC9C":"Automatic view split with suggested directions","\uCE58\uC218\uB97C \uC77D\uC5B4 \uCD95\uCC99 \uACB0\uC815":"Scale from the dimension text","\uBE0C\uB798\uD0B7 \uD06C\uAE30 \uC624\uCC28 0.7%, \uBDF0 \uC815\uD569 99%":"Bracket size error 0.7%, view match 99%","\uB9CC\uB4E0 3D\uB97C \uB3C4\uBA74\uACFC \uB2E4\uC2DC \uB300\uC870":"Re-checks the 3D against the drawing","Part 2 \uC5F4\uAE30 \u203A":"Open Part 2 \u203A","\uC5B4\uB5A4 \uB3C4\uBA74\uC744 \uC62C\uB9AC\uB294\uC9C0\uB294 {} \uC5D0 \uC788\uC2B5\uB2C8\uB2E4.":"What to upload is explained in the {}.","Part 1 \xB7 \uB2E8\uC77C \uB3C4\uBA74 \uD68C\uC804\uCCB4":"Part 1 \xB7 Turned part, one view","\uB3C4\uBA74 \uC774\uBBF8\uC9C0 \uC62C\uB9AC\uAE30":"Upload a drawing","\uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4 \uD55C \uC7A5 \xB7 PNG JPG SVG":"One front view of a turned part \xB7 PNG JPG SVG","\uBD80\uD488 \uC720\uD615":"Part type","\uBAA8\uB984 (\uD310\uB3C5 \uB4A4 \uCD94\uC815)":"Unknown (inferred after reading)","\uC62C\uB9AC\uAE30 \uC804\uC5D0 \uC54C\uB824 \uC8FC\uBA74 \uADF8 \uC720\uD615\uC5D0 \uB9DE\uB294 \uC2DC\uBBAC\uB808\uC774\uC158\uC744 \uACC4\uD68D\uD569\uB2C8\uB2E4.":"Tell us before uploading and the simulation is planned for that type.","\uC804\uCCB4 \uAE38\uC774 (mm)":"Overall length (mm)","\uC608: 100":"e.g. 100","\uC608: 120":"e.g. 120","\uC62C\uB9B0 \uB3C4\uBA74\uC740 \uC678\uD615 \uBE44\uC728\uACFC \uC774 \uAC12\uC73C\uB85C \uC2E4\uC81C \uCE58\uC218\uB97C \uC815\uD569\uB2C8\uB2E4.":"Uploads get real dimensions from the outline ratio and this value.","\uD310\uB3C5 \uBC29\uC2DD":"Reading method",\uC790\uB3D9:"Auto",\uC678\uD615:"Outline","AI \uD310\uB3C5":"AI reading","\uC815\uBC00 \uD310\uB3C5 (\uB290\uB9BC)":"Careful reading (slower)","\uC11C\uBC84 \uBAA8\uB4DC\uC5D0\uC11C\uB9CC":"Server mode only","\uC0D8\uD50C \uB3C4\uBA74":"Sample drawings","\uBB34\uC791\uC704 \uB3C4\uBA74 \uB9CC\uB4E4\uAE30":"Random drawing","\uC0C8 \uBD80\uD488\uC744 \uB9CC\uB4E4\uC5B4 \uB3C4\uBA74\uC744 \uADF8\uB9BD\uB2C8\uB2E4":"Makes a new part and draws it",\uC9C4\uD589:"Progress","\uC774 \uD398\uC774\uC9C0\uC5D0 \uB300\uD574":"About this page","\uB3C4\uBA74\uC744 \uC77D\uC5B4 \uCE58\uC218 \uC0AC\uC591\uC73C\uB85C \uC62E\uAE30\uACE0, \uADF8 \uC0AC\uC591\uC5D0\uC11C 3D\uC640 \uB3C4\uBA74\uC744 \uB2E4\uC2DC \uB9CC\uB4ED\uB2C8\uB2E4.":"Reads the drawing into a dimension spec, then rebuilds the 3D and the drawing from that spec.","\uC0D8\uD50C\uC740 {} \uB97C \uBCF4\uC5EC \uC8FC\uACE0, \uC62C\uB9B0 \uB3C4\uBA74\uC740 \uC774 \uBE0C\uB77C\uC6B0\uC800\uAC00 {} \uC0AC\uC591\uC744 \uB9CC\uB4ED\uB2C8\uB2E4. \uCE58\uC218 \uBB38\uC790\uAE4C\uC9C0 \uC77D\uB294 AI \uD310\uB3C5\uC740 \uC11C\uBC84 \uBAA8\uB4DC\uC5D0\uC11C \uB3D9\uC791\uD569\uB2C8\uB2E4.":"Samples show {}, and uploads are measured {} in this browser. AI reading of the dimension text runs in server mode.","\uC678\uD615\uC744 \uC7AC\uC11C":"by outline","\uB3C4\uBA74\uC744 \uC62C\uB9AC\uBA74 {} \uC0AC\uC591\uC73C\uB85C \uC62E\uAE41\uB2C8\uB2E4. 3D, \uAC80\uC99D, \uB0B4\uB824\uBC1B\uAE30\uB294 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uBC14\uB85C \uC2E4\uD589\uB429\uB2C8\uB2E4.":"Upload a drawing and {} into a spec. 3D, checking and download all run in this browser.","AI \uAC00 \uCE58\uC218\uAE4C\uC9C0 \uC77D\uC5B4":"AI reads the dimensions","\uC67C\uCABD\uC5D0\uC11C \uC0D8\uD50C\uC744 \uACE0\uB974\uAC70\uB098 \uB3C4\uBA74\uC744 \uC62C\uB9AC\uC138\uC694":"Pick a sample on the left, or upload a drawing","\uB3C4\uBA74 \uC785\uB825":"Drawing","\uD310\uB3C5 \xB7 \uC0AC\uC591":"Reading","3D CAD":"3D CAD",\uAC80\uC99D:"Check","\uB3C4\uBA74 \uBD88\uB7EC\uC624\uAE30":"Load drawing","\uD310\uB3C5 \uC2DC\uC791":"Start reading","3D CAD \uB9CC\uB4E4\uAE30":"Build 3D CAD","\uAC80\uC99D \uC2E4\uD589":"Run check","\uB3C4\uBA74\uC744 \uC2DC\uD2B8\uC5D0 \uC62C\uB9BD\uB2C8\uB2E4":"Puts the drawing on the sheet","\uB3C4\uBA74\uC744 \uC77D\uC5B4 \uCE58\uC218 \uC0AC\uC591\uC73C\uB85C \uC62E\uAE41\uB2C8\uB2E4":"Reads the drawing into a dimension spec","\uC0AC\uC591\uB300\uB85C 3D \uD615\uC0C1\uC744 \uB9CC\uB4ED\uB2C8\uB2E4":"Builds the 3D shape from the spec","\uC0AC\uC591\uC73C\uB85C \uB2E4\uC2DC \uADF8\uB9B0 \uC678\uD615\uC744 \uB3C4\uBA74\uACFC \uB300\uC870\uD569\uB2C8\uB2E4":"Compares the outline redrawn from the spec with the drawing","\uC774 \uB2E8\uACC4\uB85C \uB3CC\uC544\uAC00\uAE30":"Go back to this step","\uC9C0\uAE08 \uB2E8\uACC4":"Current step","\uB2E4\uC74C \uB2E8\uACC4 \uC2E4\uD589":"Run the next step","{n}\uB2E8\uACC4\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4":"Back to step {n}","\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC2E4\uD589":"runs in this browser","\uC11C\uBC84 AI \uD310\uB3C5":"server AI reading","\uB2E8\uBA74 \uBCF4\uAE30":"Section view","\uB2E8\uBA74 \uB2EB\uAE30":"Close section","\uB3C4\uBA74 \uBCF4\uAE30":"Show drawing","\uC7AC\uC0DD\uC131 \uB3C4\uBA74":"Redrawn view","\uC6D0\uBCF8 \uB3C4\uBA74":"Original drawing","\uC9C0\uAE08 \uC0AC\uC591\uC73C\uB85C \uB2E4\uC2DC \uADF8\uB9B0 \uB3C4\uBA74\uACFC \uC6D0\uBCF8 \uB3C4\uBA74\uC744 \uBC88\uAC08\uC544 \uBD05\uB2C8\uB2E4":"Switches between the drawing redrawn from the spec and the original","\uC815\uB2F5 \uC0AC\uC591 \uBCF4\uAE30":"Show reference spec","\uD310\uB3C5 \uACB0\uACFC\uB85C":"Back to reading","\uC870\uB9BD \xB7 \uC2DC\uBBAC \uCF1C\uAE30":"Assembly \xB7 motion on","\uC870\uB9BD \xB7 \uC2DC\uBBAC \uB044\uAE30":"Assembly \xB7 motion off","\uC0C1\uB300 \uBD80\uD488\uC744 \uB9CC\uB4E4\uC5B4 \uBD84\uD574\uC640 \uD68C\uC804\uC744 \uBCF4\uC5EC \uC90D\uB2C8\uB2E4. \uB044\uBA74 \uBD80\uD488\uB9CC \uB0A8\uC2B5\uB2C8\uB2E4":"Adds mating parts and shows disassembly and rotation. Turn off to keep just the part","\uD654\uBA74 \uB9DE\uCDA4":"Fit view",\uADF8\uB9AC\uB4DC:"Grid",\uD134\uD14C\uC774\uBE14:"Turntable",\uD68C\uC804:"Rotate","\uB098\uC0AC \uCCB4\uACB0":"Screw in","1\uD68C\uC804\uC5D0 \uD53C\uCE58\uB9CC\uD07C \uC804\uC9C4\uD569\uB2C8\uB2E4":"One turn advances by the pitch",\uC870\uB9BD:"Assemble",\uC815\uC9C0:"Stop",\uBD84\uD574:"Explode","\uBD80\uD488\uB9CC \uBCF4\uAE30\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4":"Back to the part only",\uBAA8\uB378:"Model","\uC804\uCCB4 \uAE38\uC774":"Overall length","\uCD5C\uB300 \uC9C0\uB984":"Max diameter","\uBD80\uD53C \xB7 \uC9C8\uB7C9":"Volume \xB7 mass",\uC7AC\uC9C8:"Material","\uC0BC\uAC01\uD615 \xB7 \uC0DD\uC131 \uC2DC\uAC04":"Triangles \xB7 build time",\uD310\uB3C5:"Reading",\uC2E0\uB8B0\uB3C4:"Confidence","\uC77D\uC740 \uCE58\uC218 \uBB38\uC790":"Dimension text read",\uC18C\uC694:"Time","\uBD80\uD488 \uD574\uC11D":"Part analysis","\uD575\uC2EC \uD615\uC0C1":"Key features","\uC81C\uC791 \uC2DC \uC720\uC758":"Notes for making it","\uB3C4\uBA74\uB9CC\uC73C\uB85C \uC54C \uC218 \uC5C6\uB294 \uAC83":"Not knowable from the drawing alone","\uD574\uC11D \uC911\u2026":"Analysing\u2026",\uC5C6\uC74C:"None","\uC11C\uBC84 \uBAA8\uB4DC\uC5D0\uC11C \uB3C4\uBA74\uC744 \uC62C\uB9AC\uBA74 \uD574\uC11D\uD569\uB2C8\uB2E4":"Upload a drawing in server mode to get an analysis","\uD574\uC11D\uC744 \uBC1B\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4":"No analysis came back","\uBBF8\uB9AC \uB9CC\uB4E0 \uD574\uC11D (\uB3C4\uBA74 \uBB38\uC790 \uC778\uC2DD + \uD310\uB3C5 \uC0AC\uC591 + \uC774\uBBF8\uC9C0)":"Pre-built analysis (text recognition + spec + image)","\uC9C0\uAE08 \uD574\uC11D (\uB3C4\uBA74 \uBB38\uC790 {n}\uAC1C + \uC0AC\uC591 + \uC774\uBBF8\uC9C0, {n}\uCD08)":"Analysed now ({n} text tokens + spec + image, {n}s)","\xB7 \uC2E0\uB8B0\uB3C4 {n}%":" \xB7 confidence {n}%",\uC138\uADF8\uBA3C\uD2B8:"Segments","+ \uCD94\uAC00":"+ Add","\uB05D\uC5D0 \uC6D0\uD1B5 \uCD94\uAC00":"Add a cylinder at the end",\uD615\uC2DD:"Type",\uAE38\uC774:"Length","\uC9C0\uB984 \xB7 \uD638\uCE6D":"Diameter \xB7 size",\uC6D0\uD1B5:"Cylinder",\uD14C\uC774\uD37C:"Taper",\uB098\uC0AC:"Thread",\uC0AD\uC81C:"Delete","\uAC12\uC744 \uACE0\uCE58\uBA74 3D\uC640 \uB3C4\uBA74\uC774 \uD568\uAED8 \uBC14\uB01D\uB2C8\uB2E4.":"Editing a value updates the 3D and the drawing together.","\uC804\uC774 \xB7 \uD648 \xB7 \uD53C\uCC98":"Transitions \xB7 grooves \xB7 features","\uC804\uC774\xB7\uD648\xB7\uD53C\uCC98\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.":"No transitions, grooves or features.","\uC0AC\uC591 (JSON)":"Spec (JSON)",\uB418\uB3CC\uB9AC\uAE30:"Revert",\uC801\uC6A9:"Apply","\uD615\uC0C1 \uAC80\uC99D \uD1B5\uACFC. \uAC12\uC744 \uACE0\uCE58\uBA74 3D, \uB3C4\uBA74, \uAC80\uC99D\uC774 \uB2E4\uC2DC \uACC4\uC0B0\uB429\uB2C8\uB2E4.":"Shape check passed. Editing a value recomputes the 3D, drawing and check.","\uD615\uC0C1 \uC624\uB958: {}":"Shape error: {}","\uC8FC\uC758: {}":"Warning: {}","\uC0AC\uC591\uC744 \uC801\uC6A9\uD588\uC2B5\uB2C8\uB2E4":"Spec applied","\uD310\uB3C5 \uACB0\uACFC\uB85C \uB418\uB3CC\uB838\uC2B5\uB2C8\uB2E4":"Reverted to the reading","\uC815\uB2F5 \uC0AC\uC591\uC744 \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4 (\uB3C4\uBA74\uC744 \uB9CC\uB4E0 \uC6D0\uBCF8)":"Loaded the reference spec (the source of this drawing)","\uD310\uB3C5 \uACB0\uACFC\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4":"Back to the reading","\uACE0\uCE60 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4: {}":"Can't apply: {}","\uC138\uADF8\uBA3C\uD2B8\uB294 \uCD5C\uC18C \uD558\uB098\uC785\uB2C8\uB2E4":"At least one segment is required","\uB3C4\uBA74 \uC678\uD615 \uC77C\uCE58":"Outline match","\uCE58\uC218 \uC77C\uCE58":"Dimension match","\uD615\uC0C1 \uC720\uD6A8\uC131":"Shape validity","\uC885\uD569 \uC2E0\uB8B0\uB3C4":"Overall confidence",\uD1B5\uACFC:"Pass","\uD655\uC778 \uD544\uC694":"Check needed",\uBD88\uC77C\uCE58:"Mismatch","\uC720\uD6A8\uD558\uC9C0 \uC54A\uC74C":"Invalid","\uCE21\uC815 \uC5C6\uC74C":"Not measured","\uBB38\uC790 \uC548 \uC77D\uC74C":"Text not read","\uC678\uD615\uB9CC (\uBB38\uC790 \uC548 \uC77D\uC74C)":"Outline only (text not read)","\uD1B5\uACFC (\uC8FC\uC758 {n})":"Pass ({n} warnings)","\uC624\uB958 {n}":"{n} errors","\uC815\uB2F5 \uC0AC\uC591 \uB300\uBE44 (\uC774 \uB3C4\uBA74\uC740 \uC815\uB2F5\uC5D0\uC11C \uADF8\uB838\uC2B5\uB2C8\uB2E4)":"Against the reference spec (this drawing came from it)",\uD56D\uBAA9:"Item",\uC77C\uCE58:"Match",\uD53C\uCC98:"Features",\uC804\uC774:"Transitions",\uCE58\uC218:"Dimensions","\uC644\uC804 \uC77C\uCE58":"Exact match",\uC608:"Yes",\uC544\uB2C8\uC624:"No","{n}\uAC1C":"{n}","\uC678\uD615\uC774 \uB3C4\uBA74\uACFC \uC5B4\uAE0B\uB0A9\uB2C8\uB2E4. \uC624\uB978\uCABD \uD45C\uC5D0\uC11C \uC138\uADF8\uBA3C\uD2B8 \uAE38\uC774\uC640 \uC9C0\uB984\uC744 \uACE0\uCE58\uBA74 \uBC14\uB85C \uB2E4\uC2DC \uACC4\uC0B0\uB429\uB2C8\uB2E4.":"The outline disagrees with the drawing. Edit segment lengths and diameters on the right and it recomputes.","\uC870\uB9BD \uC778\uD130\uD398\uC774\uC2A4":"Interfaces","\uBD84\uD574 \uC21C\uC11C":"Disassembly order","\uC870\uB9BD \uC810\uAC80":"Assembly checks","\uBD84\uD574\uD560 \uC0C1\uB300 \uBD80\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.":"No mating parts to remove.","\uC810\uAC80\uD560 \uACB0\uD569\uBD80\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.":"No interfaces to check.","\uBD80\uD488 \uD615\uC0C1\uC740 \uB3C4\uBA74 \uADF8\uB300\uB85C, \uC0C1\uB300 \uBD80\uD488\uC740 \uADDC\uACA9\uD45C \uADFC\uC0AC\uC785\uB2C8\uB2E4. \uD68C\uC804\uC774 \uBCF4\uC774\uB3C4\uB85D {}\uC744 \uBD99\uC600\uACE0 \uB0B4\uB824\uBC1B\uB294 \uD30C\uC77C\uC5D0\uB294 \uB4E4\uC5B4\uAC00\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.":"The part itself matches the drawing; mating parts are standard-table approximations. A {} makes rotation visible and is not included in downloads.",\uAE30\uC900\uC120:"reference line",\uC790\uC804\uCD95:"Axis of rotation",\uBA48\uCDA4\uB9C1:"Retaining ring","\uD0A4\xB7\uD5C8\uBE0C":"Key \xB7 hub","\uB098\uC0AC \uCCB4\uACB0\uBD80":"Threaded joint",\uBCA0\uC5B4\uB9C1:"Bearing",\uD540:"Pin",\uACF5\uAD6C:"Tool",\uB07C\uC6CC\uB9DE\uCDA4:"Fit","\uADDC\uACA9 \uADFC\uC0AC":"Standard approx.",\uC815\uD655:"Exact","\uC790\uC804(X\uCD95)":"Spin (X axis)","\uCD95\uBC29\uD5A5 \uC870\uB9BD":"Axial assembly","\uBC18\uACBD \uBC29\uD5A5 \uC870\uB9BD":"Radial assembly","\uB098\uC0AC \uC774\uC1A1 {n}mm/\uD68C\uC804":"Screw feed {n} mm/turn","\uC0C1\uB300 \uBD80\uD488 {n}\uAC1C \xB7 {}":"{n} mating parts \xB7 {}","\uC0C1\uB300 \uBD80\uD488 \uC5C6\uC74C (\uB2E8\uD488 \uD68C\uC804)":"No mating parts (single part)","\uACB0\uD569\uBD80 {n}\uAC1C":"{n} interfaces","\uACB0\uD569\uBD80\uAC00 \uC5C6\uC5B4 \uD68C\uC804\uB9CC \uBCF4\uC5EC \uC90D\uB2C8\uB2E4":"No interfaces, showing rotation only","\uD68C\uC804 {n} rpm. \uAE30\uC900\uC120\uC73C\uB85C \uD68C\uC804\uC774 \uBCF4\uC785\uB2C8\uB2E4":"Spinning at {n} rpm. The reference line shows the rotation","\uC774 \uBD80\uD488\uC5D0\uB294 \uB098\uC0AC \uCCB4\uACB0\uBD80\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4":"This part has no threaded joint","{n} rpm \xB7 {n} \uD68C\uC804 \xB7 {n}\xB0":"{n} rpm \xB7 {n} turns \xB7 {n}\xB0","\uCCB4\uACB0 {n} \uD68C\uC804 \xB7 {n} mm":"{n} turns in \xB7 {n} mm",\uB0B4\uBCF4\uB0B4\uAE30:"Download","\uC0C1\uB300 \uBD80\uD488(\uC870\uB9BD\uCCB4) \uD3EC\uD568\uD574 \uB0B4\uBCF4\uB0B4\uAE30":"Include mating parts","3D":"3D","\uB3C4\uBA74 \xB7 \uC0AC\uC591":"Drawing \xB7 spec",\uB0B4\uB824\uBC1B\uAE30:"Download","\uC815\uBC00 \uACE1\uBA74 \xB7 \uAE30\uACC4 CAD \uC6A9":"Exact surfaces \xB7 for mechanical CAD","\uC815\uBC00 \uACE1\uBA74 \xB7 \uC9C0\uAE08 \uC0AC\uC591\uC73C\uB85C \uC0DD\uC131":"Exact surfaces \xB7 built from the current spec","\uC0BC\uAC01\uD615 \uBA74 \uC194\uB9AC\uB4DC \xB7 \uD3B8\uC9D1\uD55C \uC0AC\uC591\uB3C4 \uBC14\uB85C":"Triangulated solid \xB7 works with edited specs","\uC0BC\uAC01\uD615 \uBA74 \uC178 \xB7 \uAC00\uACF5 \uBD80\uC704\uAC00 \uC788\uC5B4 \uC194\uB9AC\uB4DC\uB85C \uB2EB\uD788\uC9C0 \uC54A\uC74C, \uC815\uBC00 STEP \uAD8C\uC7A5":"Triangulated shell \xB7 machined areas leave it open; prefer the exact STEP","\uC0BC\uAC01\uD615 \uBA74 \uC178 (\uAD50\uC9D1\uD569 \uACB0\uACFC\uB294 \uC194\uB9AC\uB4DC\uB85C \uB2EB\uD788\uC9C0 \uC54A\uC74C)":"Triangulated shell (intersection result is not a closed solid)","3D \uD504\uB9B0\uD305":"3D printing","\uC7AC\uC9C8 \uD3EC\uD568 \xB7 \uC6F9 \uBDF0\uC5B4":"With materials \xB7 web viewers","\uBA54\uC2DC (mm)":"Mesh (mm)","Maya, 3ds Max, Unity, Unreal":"Maya, 3ds Max, Unity, Unreal","\uBA54\uC2DC\uC640 \uCE58\uC218 \uC0AC\uC591\uC744 \uD568\uAED8":"Mesh plus the dimension spec","\uBA54\uC2DC\uC640 \uBDF0\xB7\uCE58\uC218 \uC815\uBCF4\uB97C \uD568\uAED8":"Mesh plus view and dimension data","AR \uBBF8\uB9AC\uBCF4\uAE30 \uD328\uD0A4\uC9C0":"AR preview package","\uC815\uC810\uACFC \uBA74 (\uD574\uC11D \uB3C4\uAD6C)":"Vertices and faces (analysis tools)","\uC815\uC810\uACFC \uBA74":"Vertices and faces","\uB2E4\uC2DC \uADF8\uB9B0 \uC81C\uC791 \uB3C4\uBA74":"Redrawn production drawing","\uCE58\uC218 \uC0AC\uC591":"Dimension spec","\uBDF0 \uBC29\uD5A5 \xB7 \uCD95\uCC99 \xB7 \uACB0\uACFC":"View directions \xB7 scale \xB7 result","STEP \uC744 \uB9CC\uB4DC\uB294 \uC911\u2026":"Building the STEP\u2026","STEP \uB0B4\uB824\uBC1B\uC74C":"STEP downloaded","STEP \uC2E4\uD328: {}":"STEP failed: {}","\uC815\uBC00 \uACE1\uBA74 STEP \uC740 \uC0AC\uC591\uC774 \uC815\uB2F5\uACFC \uAC19\uC744 \uB54C \uBC1B\uC744 \uC218 \uC788\uACE0, \uD3B8\uC9D1\uD55C \uC0AC\uC591\uC740 \uBA74 STEP \uC73C\uB85C \uBC1B\uC2B5\uB2C8\uB2E4.":"The exact STEP is available when the spec matches the reference; edited specs come as a triangulated STEP.","\uC815\uBC00 \uACE1\uBA74 STEP \uC740 '\uC815\uB2F5 \uC0AC\uC591 \uBCF4\uAE30'\uB85C \uB418\uB3CC\uB9AC\uBA74 \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC9C0\uAE08 \uC0AC\uC591\uC740 \uBA74 STEP \uC73C\uB85C \uBC1B\uC2B5\uB2C8\uB2E4.":"Switch to the reference spec to get the exact STEP. The current spec comes as a triangulated STEP.","\uC5EC\uAE30\uC11C\uB294 \uBA74 STEP \uC744 \uBC1B\uC2B5\uB2C8\uB2E4. \uC815\uBC00 \uACE1\uBA74 STEP \uC740 \uC11C\uBC84 \uBAA8\uB4DC\uC5D0\uC11C \uC81C\uACF5\uB429\uB2C8\uB2E4.":"Here you get the triangulated STEP. The exact STEP is available in server mode.","\uB3C4\uBA74\uC5D0\uC11C \uBD80\uD488 \uC678\uD615 \uCE21\uC815":"Measuring the part outline","\uC678\uD615\uC5D0\uC11C \uCE58\uC218 \uC0AC\uC591 \uB9CC\uB4E4\uAE30":"Building the spec from the outline","\uBBF8\uB9AC \uD310\uB3C5\uD55C \uACB0\uACFC \uBD88\uB7EC\uC624\uAE30":"Loading the pre-read result","\uD615\uC0C1 \uAC80\uC99D":"Shape check","\uB2E8\uBA74 \uD504\uB85C\uD30C\uC77C\uC5D0\uC11C \uD68C\uC804 \uD615\uC0C1":"Revolving the section profile","\uD0A4\uD648, \uD3C9\uBA74, \uC721\uAC01, \uD6A1\uAD6C\uBA4D \uAC00\uACF5":"Cutting keyway, flats, hex, cross hole","\uC7AC\uC9C8 \uC801\uC6A9":"Applying materials","\uD310\uB3C5 \uC644\uB8CC \xB7 \uC138\uADF8\uBA3C\uD2B8 {n}\uAC1C":"Reading done \xB7 {n} segments","\uD310\uB3C5 \uC644\uB8CC \xB7 \uC138\uADF8\uBA3C\uD2B8 {n}\uAC1C, \uC77D\uC740 \uCE58\uC218 {n}\uAC1C":"Reading done \xB7 {n} segments, {n} dimensions read","3D \uC644\uB8CC. \uC624\uB978\uCABD\uC5D0\uC11C \uB0B4\uB824\uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4":"3D done. Download it on the right","\uAC80\uC99D \uC644\uB8CC \xB7 {}":"Check done \xB7 {}","\uB3C4\uBA74\uC744 \uC5F4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: {}":"Couldn't open the drawing: {}","\uC774\uBBF8\uC9C0\uB97C \uC5F4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4":"Couldn't open the image","\uC678\uD615\uC744 \uC7AC\uC9C0 \uBABB\uD574 \uD78C\uD2B8 \uC5C6\uC774 \uD310\uB3C5\uD569\uB2C8\uB2E4":"Couldn't measure the outline; reading without hints","\uC0D8\uD50C \uB3C4\uBA74 \xB7 {}":"Sample \xB7 {}","\uB9CC\uB4E0 \uB3C4\uBA74 \xB7 {}":"Generated \xB7 {}","\uC5C5\uB85C\uB4DC \xB7 {}":"Upload \xB7 {}","\uC7AC\uC0DD\uC131 \uB3C4\uBA74 \xB7 \uC9C0\uAE08 \uC0AC\uC591\uC73C\uB85C \uB2E4\uC2DC \uADF8\uB9BC (\uC6D0\uBCF8 \uC544\uB2D8)":"Redrawn from the current spec (not the original)","\uC11C\uBC84\uAC00 \uBBF8\uB9AC \uD310\uB3C5\uD574 \uC800\uC7A5\uD55C \uACB0\uACFC\uC785\uB2C8\uB2E4 ({n}\uCD08).":"A reading the server made and saved earlier ({n}s).","\uC11C\uBC84\uAC00 \uBBF8\uB9AC \uD310\uB3C5\uD574 \uC800\uC7A5\uD55C \uACB0\uACFC\uC785\uB2C8\uB2E4 ({n}\uCD08, \uC790\uB3D9 \uC218\uC815 1\uD68C).":"A reading the server made and saved earlier ({n}s, one self-correction).","\uC804\uCCB4 \uAE38\uC774\uB97C \uB123\uC9C0 \uC54A\uC544 \uBE44\uC728\uB9CC \uBD05\uB2C8\uB2E4. \uD654\uBA74\uC758 \uCE58\uC218\uB294 \uC804\uCCB4 \uAE38\uC774\uB97C 100mm \uB85C \uB193\uC558\uC744 \uB54C\uC758 \uBE44\uC728\uC774\uBA70 \uB3C4\uBA74\uC5D0\uC11C \uC77D\uC740 \uAC12\uC774 \uC544\uB2D9\uB2C8\uB2E4.":"Without an overall length these are ratios only, based on a 100 mm length. They are not values read from the drawing.","\uC678\uD615 \uD310\uB3C5\uC740 \uBE44\uC728\uB9CC \uC815\uD655\uD569\uB2C8\uB2E4. \uC2E4\uC81C \uCE58\uC218\uB294 \uC804\uCCB4 \uAE38\uC774({n}mm) \uD558\uB098\uB85C \uC815\uD588\uACE0, \uC13C\uD130\uAD6C\uBA4D\xB7\uACF5\uCC28\xB7\uC7AC\uC9C8\xB7\uD544\uB81B R \uC740 \uC77D\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.":"Outline reading is accurate in proportion only. Real sizes come from the overall length ({n} mm); centre holes, tolerances, material and fillet radii are not read.","\uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4\uB85C \uBCF4\uC774\uC9C0 \uC54A\uC544 \uD310\uB3C5\uC744 \uBA48\uCDC4\uC2B5\uB2C8\uB2E4.":"This doesn't look like the front view of a turned part, so reading stopped.","\uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4\uAC00 \uC544\uB2D9\uB2C8\uB2E4":"Not the front view of a turned part","\uD310\uB3C5 \uACB0\uACFC\uAC00 \uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4\uB2F5\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uACB0\uACFC\uB294 \uCC38\uACE0\uC6A9\uC785\uB2C8\uB2E4.":"The reading doesn't look like a turned part. Treat the result as a rough guide.","\uB3C4\uBA74\uC5D0\uC11C \uBD80\uD488 \uC678\uD615\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.":"Couldn't find the part outline in the drawing.","\uC5B4\uB5A4 \uB3C4\uBA74\uC744 \uC62C\uB824\uC57C \uD558\uB098\uC694":"What should I upload?","\uADF8\uB798\uB3C4 \uC77D\uC5B4 \uBCF4\uAE30":"Read it anyway","\uC2E4\uC81C \uCE58\uC218\uB97C \uACB0\uC815\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.":"Real dimensions can't be determined.","\uC2E4\uC81C \uCE58\uC218\uB97C \uACB0\uC815\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4":"Real dimensions can't be determined","\uC774 \uB3C4\uBA74\uC5D0\uC11C \uBB38\uC790\uB97C \uC77D\uC9C0 \uC54A\uC73C\uBBC0\uB85C \uBE44\uC728\uB9CC \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC67C\uCABD {} \uB97C \uB123\uC5B4 \uC8FC\uC138\uC694. \uB3C4\uBA74\uC5D0 \uCE58\uC218\uAC00 \uBB38\uC790 \uAE30\uD638(A\xB7B\xB7H \uAC19\uC740)\uB85C\uB9CC \uC801\uD600 \uC788\uB2E4\uBA74 \uADDC\uACA9\uD45C\uC758 \uAC12\uC744 \uB123\uC73C\uBA74 \uB429\uB2C8\uB2E4.":"Text isn't read from this drawing, so only proportions are known. Enter the {} on the left. If the drawing only has letter symbols (A, B, H), use the value from the size table.","\uC804\uCCB4 \uAE38\uC774(mm)":"overall length (mm)","\uC804\uCCB4 \uAE38\uC774 \uB123\uAE30":"Enter overall length","\uBE44\uC728\uB9CC \uBCF4\uAE30":"Proportions only","\uC804\uCCB4 \uAE38\uC774\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694. \uC5C6\uC73C\uBA74 \uBE44\uC728\uB9CC \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4":"Please enter the overall length, or view proportions only","\uCD95 \uC704\uC640 \uC544\uB798\uC758 \uBAA8\uC591\uC774 \uC11C\uB85C \uB2E4\uB985\uB2C8\uB2E4(\uCC28\uC774 {n}%). \uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4\uB77C\uBA74 \uCD95\uC744 \uAE30\uC900\uC73C\uB85C \uC704\uC544\uB798\uAC00 \uAC19\uC544\uC57C \uD558\uBBC0\uB85C, \uC870\uB9BD\uCCB4\uC774\uAC70\uB098 \uD68C\uC804\uCCB4\uAC00 \uC544\uB2CC \uBD80\uD488\uC73C\uB85C \uBCF4\uC785\uB2C8\uB2E4.":"The shape above and below the axis differs by {n}%. A turned part is symmetric about its axis, so this looks like an assembly or a non-turned part.","\uC815\uBA74\uC5D0\uC11C \uBCF8 \uC6D0(\uC6D0\uD615 \uD22C\uC0C1)\uC73C\uB85C \uBCF4\uC785\uB2C8\uB2E4. \uC774 \uB370\uBAA8\uB294 \uCD95\uC774 \uAC00\uB85C\uB85C \uB193\uC778 \uC606\uBAA8\uC2B5 \uB3C4\uBA74\uC744 \uC77D\uC2B5\uB2C8\uB2E4.":"This looks like a circle seen head-on. This demo reads side views with the axis running horizontally.","\uC678\uD615\uC774 \uACC4\uC18D \uAD7D\uC5B4 \uC788\uC5B4 \uC6D0\uD1B5 \uAD6C\uAC04\uC774 \uAC70\uC758 \uC5C6\uC2B5\uB2C8\uB2E4(\uCD95 \uAE38\uC774\uC758 {n}%). \uC120\uBC18\uC5D0\uC11C \uAE4E\uB294 \uD68C\uC804\uCCB4 \uB3C4\uBA74\uC73C\uB85C \uBCF4\uAE30 \uC5B4\uB835\uC2B5\uB2C8\uB2E4.":"The outline curves throughout with almost no cylindrical run ({n}% of the length). This is unlikely to be a lathe-turned part.","\uD070 \uC131\uBD84\uC774 {n}\uAC1C. \uC5EC\uB7EC \uD22C\uC0C1\uB3C4\uB098 \uC870\uB9BD\uCCB4\uB85C \uBCF4\uC785\uB2C8\uB2E4. \uC774 \uB370\uBAA8\uB294 \uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4 \uD55C \uC7A5\uC744 \uC77D\uC2B5\uB2C8\uB2E4(\uB2E8\uBA74\uB3C4\xB7\uD0A4\uD648 \uB2E8\uBA74\uC740 \uC606\uC5D0 \uC788\uC5B4\uB3C4 \uB429\uB2C8\uB2E4).":"{n} large components found, so this looks like several views or an assembly. This demo reads one front view (a section or keyway detail beside it is fine).","\uBD80\uD488\uC774 \uAC00\uB85C {n}px \uB85C \uC791\uC2B5\uB2C8\uB2E4(\uAD8C\uC7A5 1,000px \uC774\uC0C1). \uC800\uD574\uC0C1 JPEG \uC740 \uC678\uD615\uC120\uACFC \uCE58\uC218\uC120\uC774 \uBD99\uC5B4 \uD310\uB3C5\uC774 \uC5B4\uAE0B\uB0A9\uB2C8\uB2E4.":"The part is only {n}px wide (1,000px or more recommended). In low-resolution JPEGs the outline and dimension lines merge.",\uCD95:"Shaft",\uD50C\uB79C\uC9C0:"Flange","\uBCFC\uD2B8\xB7\uB098\uC0AC":"Bolt \xB7 screw",\uC2A4\uD130\uB4DC:"Stud","\uAE30\uD0C0 \uD68C\uC804\uCCB4":"Other turned part","\uD68C\uC804\uC744 \uC804\uB2EC\uD558\uB294 \uCD95. \uBCA0\uC5B4\uB9C1\uC5D0 \uAC78\uB9AC\uACE0 \uD0A4\xB7\uBA48\uCDA4\uB9C1\uC73C\uB85C \uC0C1\uB300 \uBD80\uD488\uC744 \uC7A1\uB294\uB2E4.":"A shaft that transmits rotation. It rides in bearings and holds mating parts with keys and retaining rings.","\uACE0\uC18D\uC73C\uB85C \uB3C4\uB294 \uCD95. \uBCA0\uC5B4\uB9C1 \uC790\uB9AC\uC640 \uACF5\uAD6C\xB7\uCC99 \uC778\uD130\uD398\uC774\uC2A4\uAC00 \uC788\uB2E4.":"A high-speed shaft with bearing seats and a tool or chuck interface.","\uB450 \uBD80\uD488\uC744 \uC787\uB294 \uD540. \uAD6C\uBA4D\uC5D0 \uB07C\uC6B0\uACE0 \uBD84\uD560\uD540\xB7\uBA48\uCDA4\uB9C1\uC73C\uB85C \uBE60\uC9C0\uC9C0 \uC54A\uAC8C \uD55C\uB2E4. \uC2A4\uC2A4\uB85C \uB3CC\uC9C0 \uC54A\uB294\uB2E4.":"A pin joining two parts. It slides into a hole and is retained by a split pin or ring. It does not rotate on its own.","\uD558\uC6B0\uC9D5\uC5D0 \uC555\uC785\uB418\uC5B4 \uC548\uC5D0\uC11C \uB3C4\uB294 \uCD95\uC744 \uBC1B\uCE58\uB294 \uBBF8\uB044\uB7FC \uBCA0\uC5B4\uB9C1. \uBD80\uC2DC \uC790\uCCB4\uB294 \uB3CC\uC9C0 \uC54A\uB294\uB2E4.":"A plain bearing pressed into a housing to support a rotating shaft. The bushing itself does not turn.","\uCD95\uC5D0 \uB07C\uC6B0\uB294 \uD1B5. \uAC04\uACA9 \uC720\uC9C0\xB7\uBCF4\uD638\xB7\uBBF8\uB044\uB7FC\uBA74.":"A tube fitted over a shaft for spacing, protection or a sliding surface.","\uBD80\uD488 \uC0AC\uC774 \uAC04\uACA9\uC744 \uC815\uD558\uB294 \uB9C1. \uCD95\uC5D0 \uB07C\uC6CC \uBCA0\uC5B4\uB9C1\xB7\uAE30\uC5B4 \uC0AC\uC774\uC5D0 \uB454\uB2E4.":"A ring that sets the gap between parts, fitted on a shaft between bearings or gears.","\uBB3C\uAC74\uC744 \uAD74\uB9AC\uB294 \uB864\uB7EC. \uC591 \uB05D \uCD95\uC774 \uBCA0\uC5B4\uB9C1\uC5D0 \uAC78\uB9AC\uACE0 \uBAB8\uD1B5\uC774 \uB3C8\uB2E4.":"A roller. The stub shafts run in bearings and the body turns.","\uBCFC\uD2B8\uB85C \uC0C1\uB300\uC5D0 \uBD99\uB294 \uC6D0\uD310. \uCD95\uBC29\uD5A5\uC73C\uB85C \uB9DE\uB300\uC5B4 \uC870\uC778\uB2E4.":"A disc bolted to a mating face, clamped along the axis.","\uBA38\uB9AC\uB97C \uB3CC\uB824 \uC0C1\uB300 \uC554\uB098\uC0AC\uC5D0 \uCCB4\uACB0\uD558\uB294 \uBD80\uD488. 1\uD68C\uC804\uC5D0 \uD53C\uCE58\uB9CC\uD07C \uB4E4\uC5B4\uAC04\uB2E4.":"Turned by its head into a female thread; one turn advances it by the pitch.","\uC591 \uB05D\uC5D0 \uB098\uC0AC\uAC00 \uC788\uB294 \uBD09. \uD55C\uCABD\uC740 \uBAB8\uCCB4\uC5D0, \uB2E4\uB978 \uCABD\uC740 \uB108\uD2B8\uB85C.":"A rod threaded at both ends, one into the body and one for a nut.","\uC120\uBC18\uC5D0\uC11C \uAE4E\uB294 \uADF8 \uBC16\uC758 \uD68C\uC804\uCCB4.":"Another lathe-turned part.",\uC790\uC804:"Spin",\uB07C\uC6B0\uAE30:"Insert",\uCCB4\uACB0:"Screw in","\uC555\uC785\xB7\uBD84\uB9AC":"Press in \xB7 separate","\uB07C\uC6B0\uAE30\xB7\uBE7C\uAE30":"Slide on \xB7 off","\uB9DE\uB300\uAE30\xB7\uBD84\uB9AC":"Mate \xB7 separate","\uC0C1\uB300 \uCD95 \uD68C\uC804":"Mating shaft turns","\uCD95\uACFC \uD568\uAED8 \uB3C4\uB294 \uBD80\uD488(\uB0B4\uB95C\xB7\uD5C8\uBE0C\xB7\uD0A4)\uB9CC \uB3C8\uB2E4":"Only parts that turn with the shaft (inner race, hub, key) rotate","\uBCA0\uC5B4\uB9C1\xB7\uD5C8\uBE0C\xB7\uBA48\uCDA4\uB9C1\uC744 \uCD95\uBC29\uD5A5\xB7\uBC18\uACBD\uBC29\uD5A5\uC73C\uB85C \uBE80\uB2E4":"Bearings, hubs and rings come off axially and radially","\uBCA0\uC5B4\uB9C1 \uB0B4\uB95C\uB9CC \uD568\uAED8 \uB3C8\uB2E4":"Only the bearing inner race turns with it","\uC694\uD06C(\uD074\uB808\uBE44\uC2A4) \uAD6C\uBA4D\uC5D0 \uCD95\uBC29\uD5A5\uC73C\uB85C \uB123\uB294\uB2E4":"Goes axially into the yoke (clevis) holes","\uBD84\uD560\uD540\uC744 \uBC18\uACBD \uBC29\uD5A5\uC73C\uB85C \uBF51\uACE0 \uD540\uC744 \uBE80\uB2E4":"Pull the split pin radially, then withdraw the pin","\uD558\uC6B0\uC9D5\uC5D0 \uCD95\uBC29\uD5A5\uC73C\uB85C \uC555\uC785\uB418\uACE0, \uC0C1\uB300 \uCD95\uC774 \uBCF4\uC5B4\uC5D0 \uB4E4\uC5B4\uAC04\uB2E4":"Pressed axially into the housing; the mating shaft enters the bore","\uBD80\uC2DC\uB294 \uACE0\uC815, \uC548\uC758 \uCD95\uC774 \uB3C8\uB2E4":"The bushing stays put; the shaft inside turns","\uCD95\uBC29\uD5A5\uC73C\uB85C \uB07C\uC6B4\uB2E4":"Slides on axially","\uBAB8\uD1B5\uC774 \uB3C8\uB2E4":"The body turns","\uCD95\uBC29\uD5A5\uC73C\uB85C \uBD99\uC778\uB2E4":"Mates axially","1\uD68C\uC804 = \uD53C\uCE58\uB9CC\uD07C \uC804\uC9C4, \uACF5\uAD6C\uAC00 \uD568\uAED8 \uB3C8\uB2E4":"One turn advances by the pitch; the tool turns with it","\uB108\uD2B8\uAC00 \uB3CC\uBA70 \uB4E4\uC5B4\uAC04\uB2E4":"The nut turns and draws it in","\uD480\uC5B4\uC11C \uBE80\uB2E4":"Unscrew and remove","\uD310\uB3C5\uAE30\uAC00 \uBD84\uB958\uD55C \uC720\uD615":"type from the reading","\uBCF4\uC5B4\uAC00 \uC788\uC74C":"has a bore","\uD6A1\uAD6C\uBA4D\uC774 \uC788\uB294 \uB2E8\uC21C \uC6D0\uD1B5":"plain cylinder with a cross hole","\uD0A4\uD648 \uB610\uB294 \uBCA0\uC5B4\uB9C1 \uACF5\uCC28":"keyway or bearing tolerance","\uC591 \uB05D\uC774 \uB098\uC0AC\uBD80":"threaded at both ends","\uD574\uC11D \uACB0\uACFC":"from the analysis","\uC815\uBA74 \xB7 \uC717\uBA74 \xB7 \uCE21\uBA74\uC774 \uC788\uB294 \uBD80\uD488 \uB3C4\uBA74 \uD55C \uC7A5":"One sheet with front, top and side views","\uC608\uC2DC \uB3C4\uBA74":"Example drawings","\uACE1\uAD00\uC740 \uB9CC\uB4E4\uC9C0 \uBABB\uD558\uB294 \uBD80\uB958\uB77C \uC774\uC720\uB97C \uBCF4\uC5EC \uC90D\uB2C8\uB2E4.":"The elbow is a kind we can't build; the demo explains why.","L \uBE0C\uB798\uD0B7 3\uBA74\uB3C4":"L bracket, 3 views","\uBCA0\uC5B4\uB9C1 \uD558\uC6B0\uC9D5":"Bearing housing","\uC0AC\uAC01 \uD50C\uB79C\uC9C0 \uACE1\uAD00":"Square-flange elbow","\uBDF0\uC640 \uBC29\uD5A5":"Views and directions",\uD22C\uC0C1\uBC95:"Projection","3\uAC01\uBC95":"Third angle","1\uAC01\uBC95":"First angle","\uBDF0\uB97C \uACE0\uB974\uACE0 \uC624\uB978\uCABD \uC815\uC721\uBA74\uCCB4\uC5D0\uC11C \uBC29\uD5A5\uC744 \uB204\uB985\uB2C8\uB2E4. \uCC38\uACE0 \uBDF0\uB294 \uB9CC\uB4E4 \uB54C \uC4F0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.":"Pick a view, then click a face on the cube at the right. Reference views aren't used when building.","\uC67C\uCABD\uC5D0\uC11C \uC608\uC2DC\uB97C \uACE0\uB974\uAC70\uB098 \uB3C4\uBA74\uC744 \uC62C\uB9AC\uC138\uC694":"Pick an example on the left, or upload a drawing","\uC77D\uC740 \uCE58\uC218 \uD45C\uC2DC":"Show dimensions read","\uC77D\uC740 \uCE58\uC218 \uBB38\uC790\uB97C \uB3C4\uBA74 \uC704\uC5D0 \uD45C\uC2DC":"Marks the dimension text on the drawing","\uBDF0 \uBC29\uD5A5":"View direction","\uBDF0 \uC5C6\uC74C":"No view","\uBDF0 {n}":"View {n}","\uBDF0\uB97C \uACE0\uB978 \uB4A4 \uBA74\uC744 \uB204\uB974\uC138\uC694.":"Pick a view, then click a face.","\uBA3C\uC800 \uBDF0\uB97C \uACE0\uB974\uC138\uC694":"Pick a view first",\uC815\uBA74\uB3C4:"Front",\uC717\uBA74\uB3C4:"Top",\uC6B0\uCE21\uBA74\uB3C4:"Right",\uC88C\uCE21\uBA74\uB3C4:"Left",\uC544\uB7AB\uBA74\uB3C4:"Bottom",\uB4B7\uBA74\uB3C4:"Back","\uB4F1\uAC01 (\uCC38\uACE0)":"Isometric (reference)","\uB2E8\uBA74 (\uCC38\uACE0)":"Section (reference)","\uC0C1\uC138 (\uCC38\uACE0)":"Detail (reference)","\uC4F0\uC9C0 \uC54A\uC74C":"Not used",\uCD95\uCC99:"Scale","\uB9DE\uB294 \uCE58\uC218":"Agreeing dimensions","\uACE0\uB978 \uBDF0\uC758 \uAC00\uB85C \uC2E4\uC81C \uAE38\uC774 (mm)":"Real width of the selected view (mm)","\uCE58\uC218 \uB2E4\uC2DC \uC77D\uAE30":"Read dimensions again","{n}\uAC1C \uC77D\uC74C \xB7 {n}\uCD08":"{n} read \xB7 {n}s","\uC77D\uC9C0 \uBABB\uD568":"Not read","1 px = {n} mm":"1 px = {n} mm","1 px = {n} mm (\uBDF0 {n} \uAC00\uB85C {n} mm \uC785\uB825)":"1 px = {n} mm (view {n} width entered as {n} mm)","\uB9DE\uB294 \uCE58\uC218\uAC00 \uC801\uC2B5\uB2C8\uB2E4. \uC544\uB294 \uCE58\uC218 \uD558\uB098\uB97C \uB123\uC5B4 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":"Few dimensions agree. Enter one known dimension to confirm.","\uC5EC\uB7EC \uCE58\uC218\uAC00 \uAC19\uC740 \uCD95\uCC99\uC744 \uAC00\uB9AC\uD0B5\uB2C8\uB2E4.":"Several dimensions point to the same scale.","\uC785\uB825\uD55C \uCE58\uC218\uB85C \uCD95\uCC99\uC744 \uC815\uD588\uC2B5\uB2C8\uB2E4":"Scale set from the value you entered","\uCE58\uC218\uB97C \uC77D\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.":"Couldn't read the dimensions.","\uCE58\uC218 \uBB38\uC790\uC640 \uCE58\uC218\uC120\uC744 \uC9DD\uC9C0\uC744 \uC218 \uC5C6\uC5C8\uC2B5\uB2C8\uB2E4":"Couldn't pair dimension text with dimension lines","\uBB38\uC790 \uC778\uC2DD \uC5D4\uC9C4\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4 ({}).":"Couldn't load the text recognition engine ({}).","\uCE58\uC218\uB97C \uC77D\uB294 \uC911 \uC624\uB958: {}":"Error while reading dimensions: {}","\uBD80\uD488 \uC720\uD615 \xB7 \uBC29\uBC95":"Part type \xB7 method","\uC815\uD22C\uC0C1 \uAD50\uC9D1\uD569":"Orthographic intersection","\uD310 (\uB450\uAED8)":"Plate (thickness)","\uB450\uAED8 (mm)":"Thickness (mm)","\uC815\uD22C\uC0C1 \uBDF0 {n}\uAC1C\uB85C \uB9CC\uB4ED\uB2C8\uB2E4":"Built from {n} orthographic views","\uBDF0\uAC00 \uD558\uB098\uB77C \uD68C\uC804\uCCB4\uB85C \uB9CC\uB4ED\uB2C8\uB2E4":"Only one view, so it's built as a turned part","\uBDF0\uAC00 \uD558\uB098\uB77C \uB450\uAED8\uB97C \uB123\uC5B4 \uD310\uC73C\uB85C \uB9CC\uB4ED\uB2C8\uB2E4":"Only one view, so enter a thickness and it's built as a plate","\uB2E8\uBA74\uB3C4\uB85C\uB9CC \uC815\uC758\uB418\uB294 \uBD80\uD488\uC740 \uB9CC\uB4E4\uC9C0 \uBABB\uD569\uB2C8\uB2E4":"Parts defined only by a section view can't be built","\uC815\uBA74, \uC717\uBA74, \uCE21\uBA74 \uC911 \uD558\uB098 \uC774\uC0C1\uC744 \uC9C0\uC815\uD558\uC138\uC694":"Assign at least one of front, top or side","\uC9C1\uC811 \uACE0\uB984":"Chosen manually","\uBA3C\uC800 \uCE58\uC218\uB97C \uC815\uD574 \uC8FC\uC138\uC694":"Set the dimensions first","\uC774 \uBD80\uB958\uB294 \uB9CC\uB4E4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4":"This kind can't be built","1\uB2E8\uACC4 \xB7 \uAC01\uAE30\uB465":"Level 1 \xB7 prismatic","2\uB2E8\uACC4 \xB7 \uC6D0\uD1B5 \uADFC\uC0AC":"Level 2 \xB7 cylinder approx.","3\uB2E8\uACC4 \xB7 \uACE1\uBA74":"Level 3 \xB7 curved","\uC815\uD655\uD788 \uB098\uC635\uB2C8\uB2E4.":"Comes out accurate.","\uC548\uCABD \uD615\uC0C1\uC740 \uADFC\uC0AC\uC785\uB2C8\uB2E4.":"Inner shapes are approximate.","\uB9CC\uB4E4\uC9C0 \uBABB\uD558\uB294 \uBD80\uB958\uC785\uB2C8\uB2E4.":"This kind can't be built.","\uD06C\uAE30 X \xD7 Y \xD7 Z":"Size X \xD7 Y \xD7 Z",\uBD80\uD53C:"Volume",\uC0BC\uAC01\uD615:"Triangles","\uBDF0 \uC815\uD569":"View match","\uB300\uC870\uD560 \uC815\uD22C\uC0C1 \uBDF0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.":"No orthographic views to compare.","{} \uC815\uD569\uC774 \uB0AE\uC2B5\uB2C8\uB2E4. \uBC29\uD5A5\uACFC \uAD6C\uBA4D\uC744 \uD655\uC778\uD558\uC138\uC694.":"{} matches poorly. Check the direction and the holes.","\uCC28\uC774 {n}%":"{n}% apart","\uBDF0 \uB098\uB204\uAE30":"Splitting views","\uC678\uD615\uC120\uB9CC \uB0A8\uAE30\uACE0 \uC131\uBD84 \uCC3E\uAE30":"Keeping outlines, finding components","\uAC00\uAE4C\uC6B4 \uC131\uBD84\uC744 \uBDF0\uB85C \uBB36\uAE30":"Grouping nearby components into views","\uC724\uACFD \xB7 \uAD6C\uBA4D \uB530\uAE30, \uBC30\uCE58\uB85C \uBC29\uD5A5 \uCD94\uCC9C":"Tracing outlines and holes, suggesting directions","\uBDF0\uB9C8\uB2E4 \uC724\uACFD\uC744 \uADF8 \uBC29\uD5A5\uC73C\uB85C \uBC00\uC5B4\uB0B4\uAE30":"Extruding each view along its direction","\uC804\uBD80 \uAD50\uC9D1\uD569\uD558\uAE30":"Intersecting them all","\uAC01 \uBDF0\uB85C \uB2E4\uC2DC \uD22C\uC601\uD574 \uB3C4\uBA74\uACFC \uB300\uC870":"Re-projecting onto each view and comparing","\uBDF0 {n}\uAC1C. \uBC29\uD5A5\uC744 \uD655\uC778\uD558\uC138\uC694":"{n} views. Check the directions","\uBDF0\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4":"No views found","\uB3C4\uBA74\uC5D0\uC11C \uD615\uC0C1\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4":"Couldn't find any shape in the drawing","\uBD80\uD488\uC744 \uB9CC\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4":"Part built","\uC815\uD22C\uC0C1 \uBDF0\uAC00 \uB458 \uC774\uC0C1 \uD544\uC694\uD569\uB2C8\uB2E4(\uC815\uBA74\uB3C4 + \uC717\uBA74\uB3C4 \uB610\uB294 \uCE21\uBA74\uB3C4). \uBDF0\uAC00 \uD558\uB098\uBA74 \uB450\uAED8\uB97C \uB123\uC5B4 \uD310\uC73C\uB85C \uB9CC\uB4DC\uC138\uC694.":"Two or more orthographic views are needed (front plus top or side). With one view, enter a thickness to build a plate.","\uD68C\uC804\uCCB4\uB85C \uBCFC \uBDF0\uB97C \uC815\uD574 \uC8FC\uC138\uC694":"Assign a view to use as the turned part","\uD310\uC73C\uB85C \uBCFC \uBDF0\uB97C \uC815\uD574 \uC8FC\uC138\uC694":"Assign a view to use as the plate","\uC724\uACFD\uC73C\uB85C \uD615\uC0C1\uC744 \uB9CC\uB4E4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4":"Couldn't build a shape from the outline","\uC774 \uBDF0\uC5D0\uC11C \uB2EB\uD78C \uC724\uACFD\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4":"No closed outline found in this view","\uB450\uAED8 {n} mm \uB294 \uC785\uB825\uAC12\uC785\uB2C8\uB2E4":"The {n} mm thickness is a value you entered","\uBDF0 \uD558\uB098\uB97C \uCD95 \uB458\uB808\uB85C \uB3CC\uB838\uC2B5\uB2C8\uB2E4":"One view revolved about its axis","\uAD6C\uBA4D {n}":"{n} holes","\uAD6C\uBA4D {n} \xB7 \uC548\uCABD \uBAA8\uC11C\uB9AC {n}":"{n} holes \xB7 {n} inner edges","{n}\xD7{n} px":"{n}\xD7{n} px","\uB3C4\uBA74\uC744 \uC62C\uB9AC\uBA74 \uBDF0\uB97C \uC790\uB3D9\uC73C\uB85C \uB098\uB215\uB2C8\uB2E4. \uBDF0\uB97C \uACE0\uB974\uACE0 \uC720\uD615\uC744 \uC815\uD55C \uB4A4 {} \uB97C \uB204\uB974\uC138\uC694.":"Upload a drawing and the views are split automatically. Pick a view, set the type, then press {}.","\uC62C\uB9AC\uAE30 \uC804\uC5D0":"Before you upload","\uC5B4\uB5A4 \uB3C4\uBA74\uC744 \uC62C\uB9AC\uBA74 \uB418\uB098\uC694":"What can I upload?","\uD55C \uBD80\uD488\uC744 \uC5EC\uB7EC \uBC29\uD5A5\uC5D0\uC11C \uADF8\uB9B0 \uB3C4\uBA74 \uD55C \uC7A5\uC785\uB2C8\uB2E4. \uBDF0\uB9C8\uB2E4 \uBC29\uD5A5\uC744 \uC815\uD558\uBA74 \uCE58\uC218\uB97C \uC77D\uC5B4 \uBD80\uD488 \uD558\uB098\uB97C \uB9CC\uB4ED\uB2C8\uB2E4.":"One sheet showing a single part from several directions. Set a direction per view and it reads the dimensions to build one part.","\uC815\uBA74 \xB7 \uC717\uBA74 \xB7 \uCE21\uBA74\uC774 \uC788\uB294 \uD55C \uBD80\uD488 \uB3C4\uBA74":"A single-part drawing with front, top and side views","\uC870\uB9BD\uB3C4, \uC0AC\uC9C4, 3D \uB80C\uB354":"Assembly drawings, photos, 3D renders","\uBDF0\uB07C\uB9AC \uB5A8\uC5B4\uC838 \uC788\uACE0 \uC678\uD615\uC120\uC774 \uCE58\uC218\uC120\uBCF4\uB2E4 \uAD75\uAC8C":"Views set apart, outlines thicker than dimension lines","\uBDF0\uAC00 \uBD99\uC5B4 \uC788\uAC70\uB098 \uC120 \uAD75\uAE30 \uAD6C\uBD84\uC774 \uC5C6\uB294 \uB3C4\uBA74":"Views touching, or no difference in line weight","\uCE58\uC218 \uC22B\uC790\uAC00 \uCE58\uC218\uC120 \uBC14\uB85C \uC704\uB098 \uC606\uC5D0":"Dimension numbers right on or beside their dimension line","\uCE58\uC218\uAC00 \uAE30\uD638(A, B, H)\uBFD0\uC778 \uCE74\uD0C8\uB85C\uADF8 \uB3C4\uBA74":"Catalogue drawings with only letter symbols (A, B, H)","\uAC00\uB85C 1,500px \uC774\uC0C1, \uBC18\uB4EF\uD55C \uC774\uBBF8\uC9C0":"1,500px wide or more, straight image","\uD750\uB9AC\uAC70\uB098 \uAE30\uC6B8\uC5B4\uC9C4 \uC2A4\uCE94, \uC190\uADF8\uB9BC":"Blurry or skewed scans, hand sketches","1\uB2E8\uACC4":"Level 1","2\uB2E8\uACC4":"Level 2","3\uB2E8\uACC4":"Level 3","\uBE0C\uB798\uD0B7 \xB7 \uD310\uAE08 \xB7 \uAC01\uAE30\uB465":"Brackets \xB7 sheet metal \xB7 prisms","\uD558\uC6B0\uC9D5 \xB7 \uBCF4\uC2A4 \uC788\uB294 \uBAB8\uCCB4":"Housings \xB7 bodies with bosses","\uACE1\uAD00 \xB7 \uC2A4\uC715 \xB7 \uC790\uC720\uACE1\uBA74":"Elbows \xB7 sweeps \xB7 free-form","\uC815\uD655\uD788 \uB098\uC635\uB2C8\uB2E4.\uB9CC\uB4E4\uC9C0 \uBABB\uD569\uB2C8\uB2E4.":"","\uB9CC\uB4E4\uC9C0 \uBABB\uD569\uB2C8\uB2E4.":"Can't be built.","\uB450\uAED8\uB294 \uD55C \uBDF0\uB9CC\uC73C\uB85C \uC54C \uC218 \uC5C6\uC5B4 \uC9C1\uC811 \uB123\uC2B5\uB2C8\uB2E4. \uC870\uB9BD \uC704\uCE58\uB3C4 \uB3C4\uBA74\uC5D0\uC11C \uC77D\uC9C0 \uC54A\uACE0 \uD654\uBA74\uC5D0\uC11C \uB9DE\uCDA5\uB2C8\uB2E4.":"Thickness can't be known from one view, so you enter it. Assembly positions aren't read from the drawing either.","\uC790\uC138\uD55C \uC548\uB0B4":"Full guide","\uB2E4\uC2DC \uBCF4\uC9C0 \uC54A\uAE30":"Don't show again","\uD30C\uC77C \uACE0\uB974\uAE30":"Choose a file","PNG \xB7 JPG \xB7 SVG \xB7 \uC5EC\uB7EC \uD22C\uC0C1\uB3C4\uAC00 \uC788\uC5B4\uB3C4 \uB429\uB2C8\uB2E4":"PNG \xB7 JPG \xB7 SVG \xB7 multiple views are fine",\uAC74\uB108\uB6F0\uAE30:"Skip",\uC774\uC804:"Back",\uB2E4\uC74C:"Next",\uC2DC\uC791\uD558\uAE30:"Start","\uC0D8\uD50C \uB3C4\uBA74\uC73C\uB85C \uC2DC\uC791":"Start with a sample","\uCE74\uB4DC\uB97C \uB204\uB974\uBA74 \uADF8 \uB3C4\uBA74\uC73C\uB85C \uBC14\uB85C \uC9C4\uD589\uB429\uB2C8\uB2E4. \uCC98\uC74C\uC774\uB77C\uBA74 \uC5EC\uAE30\uC11C \uC2DC\uC791\uD558\uC138\uC694.":"Click a card to run that drawing. Start here if it's your first time.","\uB0B4 \uB3C4\uBA74 \uC62C\uB9AC\uAE30":"Upload your drawing","\uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4 \uD55C \uC7A5\uC744 \uC62C\uB9BD\uB2C8\uB2E4. \uC544\uB798\uC5D0\uC11C \uBD80\uD488 \uC720\uD615\uC744 \uBA3C\uC800 \uACE8\uB77C \uB450\uBA74 \uADF8 \uC720\uD615\uC5D0 \uB9DE\uAC8C \uC2DC\uBBAC\uB808\uC774\uC158\uD569\uB2C8\uB2E4.":"Upload one front view of a turned part. Pick the part type below first and the simulation is planned for it.","\uC62C\uB9AC\uAE30 \uC548\uB0B4 \uC5F4\uAE30":"Open the upload guide","\uB124 \uB2E8\uACC4\uB85C \uC9C4\uD589":"Four steps","\uB3C4\uBA74 \uC785\uB825, \uD310\uB3C5, 3D CAD, \uAC80\uC99D \uC21C\uC11C\uC785\uB2C8\uB2E4. \uC9C0\uAE08 \uB2E8\uACC4\uAC00 \uC704\uCABD\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.":"Drawing, reading, 3D CAD, check. The current step is shown at the top.","\uB2E4\uC74C \uB2E8\uACC4 \uBC84\uD2BC":"Next-step button","\uC624\uB978\uCABD \uC544\uB798 \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uB2E4\uC74C \uB2E8\uACC4\uAC00 \uC2E4\uD589\uB429\uB2C8\uB2E4. \uBC84\uD2BC \uC704 \uD55C \uC904\uC774 \uADF8 \uB2E8\uACC4\uAC00 \uD558\uB294 \uC77C\uC785\uB2C8\uB2E4.":"The button at the bottom right runs the next step. The line above it says what that step does.","\uBCF4\uAE30 \uC804\uD658\uACFC \uC870\uB9BD \xB7 \uC2DC\uBBAC":"View switches and simulation","\uB2E8\uBA74\uACFC \uB3C4\uBA74\uC744 \uBC88\uAC08\uC544 \uBCF4\uACE0, \uC870\uB9BD \xB7 \uC2DC\uBBAC\uC744 \uCF1C\uBA74 \uC0C1\uB300 \uBD80\uD488\uACFC \uD68C\uC804\uC774 \uBD99\uC2B5\uB2C8\uB2E4. \uB044\uBA74 \uBD80\uD488\uB9CC \uB0A8\uC2B5\uB2C8\uB2E4.":"Switch between section and drawing. Turning on assembly adds mating parts and motion; turning it off leaves just the part.","\uACB0\uACFC\uC640 \uB0B4\uB824\uBC1B\uAE30":"Results and download","\uD310\uB3C5\uD55C \uCE58\uC218\uB97C \uACE0\uCE58\uBA74 3D\uC640 \uB3C4\uBA74\uC774 \uD568\uAED8 \uBC14\uB01D\uB2C8\uB2E4. 3D\uAC00 \uB9CC\uB4E4\uC5B4\uC9C0\uBA74 \uB9E8 \uC544\uB798 \uB0B4\uBCF4\uB0B4\uAE30\uC5D0\uC11C STEP, STL, GLB \uB4F1\uC73C\uB85C \uBC1B\uC2B5\uB2C8\uB2E4.":"Edit a dimension and the 3D and drawing follow. Once the 3D exists, download STEP, STL, GLB and more at the bottom.","\uC608\uC2DC \uB3C4\uBA74\uC73C\uB85C \uC2DC\uC791":"Start with an example","\uD55C \uBD80\uD488\uC744 \uC815\uBA74 \xB7 \uC717\uBA74 \xB7 \uCE21\uBA74\uC73C\uB85C \uADF8\uB9B0 \uB3C4\uBA74\uB4E4\uC785\uB2C8\uB2E4. \uC138 \uBC88\uC9F8(\uACE1\uAD00)\uB294 \uC774 \uBC84\uC804\uC774 \uB9CC\uB4E4\uC9C0 \uBABB\uD558\uB294 \uBD80\uB958\uB77C \uC774\uC720\uB97C \uBCF4\uC5EC \uC90D\uB2C8\uB2E4.":"Drawings of one part in front, top and side views. The third (elbow) is a kind this version can't build, and it says why.","\uC5EC\uB7EC \uD22C\uC0C1\uB3C4\uAC00 \uD55C \uC7A5\uC5D0 \uC788\uB294 \uD55C \uBD80\uD488 \uB3C4\uBA74\uC744 \uC62C\uB9BD\uB2C8\uB2E4. \uC62C\uB9AC\uBA74 \uBDF0\uB97C \uB098\uB204\uACE0, \uBC29\uD5A5\uC744 \uCD94\uCC9C\uD558\uACE0, \uCE58\uC218 \uBB38\uC790\uB97C \uC77D\uC2B5\uB2C8\uB2E4.":"Upload a single-part drawing with several views. It splits the views, suggests directions and reads the dimension text.","\uBDF0\uB9C8\uB2E4 \uBC29\uD5A5 \uD655\uC778":"Check each direction","\uCD94\uCC9C\uB41C \uBC29\uD5A5(\uC815\uBA74 \xB7 \uC717\uBA74 \xB7 \uC6B0\uCE21\uBA74 \xB7 \uB4F1\uAC01 \uCC38\uACE0)\uC774 \uB9DE\uB294\uC9C0 \uBD05\uB2C8\uB2E4. \uAE30\uD558\uB9CC\uC73C\uB85C\uB294 \uBC29\uD5A5\uC744 \uD655\uC2E0\uD560 \uC218 \uC5C6\uC5B4 \uC0AC\uB78C\uC774 \uD655\uC815\uD569\uB2C8\uB2E4.":"Check the suggested directions. Geometry alone can't be sure which view is which, so you confirm them.","\uC815\uC721\uBA74\uCCB4\uB85C \uBC29\uD5A5 \uC8FC\uAE30":"Set direction with the cube","\uBDF0\uB97C \uACE0\uB978 \uB4A4 \uC815\uC721\uBA74\uCCB4\uC758 \uBA74\uC744 \uB204\uB974\uBA74 \uADF8 \uBDF0\uAC00 \uADF8 \uBC29\uD5A5\uC774 \uB429\uB2C8\uB2E4. \uC815\uD22C\uC0C1 \uBC29\uD5A5\uC740 \uBDF0 \uD558\uB098\uC5D0\uB9CC \uC904 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":"Pick a view, then click a cube face to assign that direction. Each orthographic direction belongs to one view.","\uCE58\uC218\uB294 \uB3C4\uBA74\uC5D0\uC11C \uC77D\uC2B5\uB2C8\uB2E4":"Dimensions come from the drawing","\uCE58\uC218 \uBB38\uC790\uB97C \uC77D\uC5B4 \uCE58\uC218\uC120\uACFC \uC9DD\uC9C0\uC5B4 \uCD95\uCC99\uC744 \uC815\uD569\uB2C8\uB2E4. \uC11C\uB85C \uB9DE\uB294 \uCE58\uC218\uAC00 \uB9CE\uC744\uC218\uB85D \uBBFF\uC744 \uB9CC\uD569\uB2C8\uB2E4. \uBABB \uC77D\uC73C\uBA74 \uADF8\uB54C\uB9CC \uD55C \uCE58\uC218\uB97C \uBB3B\uC2B5\uB2C8\uB2E4.":"Dimension text is paired with dimension lines to set the scale. The more that agree, the safer it is. Only if none can be read are you asked for one.","\uB9CC\uB4E4\uACE0 \uC815\uD569 \uBCF4\uAE30":"Build and check the match","\uAC01 \uBDF0\uC758 \uC724\uACFD\uC744 \uADF8 \uBC29\uD5A5\uC73C\uB85C \uBC00\uC5B4\uB0B4 \uAD50\uC9D1\uD569\uD569\uB2C8\uB2E4. \uB9CC\uB4E0 3D \uB97C \uAC01 \uBDF0\uB85C \uB2E4\uC2DC \uD22C\uC601\uD574 \uB3C4\uBA74\uACFC \uC5BC\uB9C8\uB098 \uACB9\uCE58\uB294\uC9C0 \uBCF4\uC5EC \uC90D\uB2C8\uB2E4.":"Each view's outline is extruded along its direction and intersected. The result is re-projected onto each view to show the overlap.",\uB2EB\uAE30:"Close","\uC815\uB2F5 \uC0AC\uC591\uC5D0\uC11C \uADF8\uB9B0 \uB3C4\uBA74\uC774\uB77C \uD310\uB3C5 \uC815\uD655\uB3C4\uB97C \uC22B\uC790\uB85C \uBCF4\uC5EC \uC90D\uB2C8\uB2E4. \uCE74\uB4DC\uB97C \uB204\uB974\uBA74 \uC5F4\uB9BD\uB2C8\uB2E4.":"These drawings come from reference specs, so reading accuracy can be shown as a number. Click a card to open it.",\uBD80\uC2DC:"Bushing","\uD074\uB808\uBE44\uC2A4 \uD540":"Clevis pin","\uD50C\uB79C\uC9C0 \uBD80\uC2DC":"Flanged bushing","\uC721\uAC01 \uB2E8\uBD99\uC774 \uCD95":"Hex stepped shaft","\uC591\uB2E8 \uB098\uC0AC \uCD95":"Double-threaded shaft","\uD14C\uC774\uD37C \uCD95":"Taper shaft","\uBAA8\uD130 \uCD95":"Motor shaft","\uB2E8\uBD99\uC774 \uCD95":"Stepped shaft",\uC2AC\uB9AC\uBE0C:"Sleeve",\uC2A4\uD398\uC774\uC11C:"Spacer",\uB864\uB7EC:"Roller",\uC2A4\uD540\uB4E4:"Spindle","\uC721\uAC01 \uBCFC\uD2B8 M10\xD740":"Hex bolt M10\xD740","\uC721\uAC01\uAD6C\uBA4D\uBD99\uC774 \uBCFC\uD2B8 M8\xD730":"Socket head cap screw M8\xD730","\uC138\uD2B8 \uC2A4\uD06C\uB8E8 M6\xD712":"Set screw M6\xD712","\uC811\uC2DC\uBA38\uB9AC \uB098\uC0AC M6\xD720":"Countersunk screw M6\xD720","\uC2A4\uD130\uB4DC \uBCFC\uD2B8 M12\xD760":"Stud bolt M12\xD760",\uD68C\uC804\uCCB4:"Turned part",\uB09C\uC774\uB3C4:"Difficulty",\uBCF4\uC5B4:"Bore",\uD3C9\uBA74:"Flat",\uC721\uAC01:"Hex",\uB110\uB9C1:"Knurl","\uC721\uAC01 \uC18C\uCF13":"Hex socket",\uD0A4\uD648:"Keyway",\uC13C\uD130\uAD6C\uBA4D:"Centre hole",\uD6A1\uAD6C\uBA4D:"Cross hole",\uBAA8\uB530\uAE30:"Chamfer",\uD544\uB81B:"Fillet",\uB77C\uC6B4\uB4DC:"Round",\uB3C4\uD53C\uD648:"Undercut",\uD648:"Groove","\uACBD\uACC4 {n} \xB7 C{n}":"Boundary {n} \xB7 C{n}","\uACBD\uACC4 {n} \xB7 C{n}\xD7{n}\xB0":"Boundary {n} \xB7 C{n}\xD7{n}\xB0","\uACBD\uACC4 {n} \xB7 R{n}":"Boundary {n} \xB7 R{n}","\uACBD\uACC4 {n} \xB7 {n}\xD7{n}":"Boundary {n} \xB7 {n}\xD7{n}","\uC67C\uCABD \xB7 {}":"Left \xB7 {}","\uC624\uB978\uCABD \xB7 {}":"Right \xB7 {}","\uC67C\uCABD \xB7 S{n} \uAE4A\uC774 {n}":"Left \xB7 S{n} depth {n}","\uC624\uB978\uCABD \xB7 S{n} \uAE4A\uC774 {n}":"Right \xB7 S{n} depth {n}","x{n} \xB7 \u2300{n} \uAD00\uD1B5":"x{n} \xB7 \u2300{n} through","x{n} \xB7 \u2300{n} \uAE4A\uC774 {n}":"x{n} \xB7 \u2300{n} depth {n}","seg {n} \xB7 +{n} \xB7 {n}\xD7{n} L{n}":"seg {n} \xB7 +{n} \xB7 {n}\xD7{n} L{n}","seg {n} \xB7 +{n} \xB7 L{n} \uAE4A\uC774 {n}":"seg {n} \xB7 +{n} \xB7 L{n} depth {n}","seg {n} \xB7 +{n} \xB7 L{n} \uAE4A\uC774 {n} \xD7{n}":"seg {n} \xB7 +{n} \xB7 L{n} depth {n} \xD7{n}","seg {n} \xB7 \uB300\uBCC0 {n}":"seg {n} \xB7 across flats {n}","seg {n} \xB7 L{n}":"seg {n} \xB7 L{n}","seg {n} \xB7 +{n} \xB7 {n}\xD7{n}":"seg {n} \xB7 +{n} \xB7 {n}\xD7{n}","seg {n} \xB7 +{n} \xB7 {n}\xD7{n} ({})":"seg {n} \xB7 +{n} \xB7 {n}\xD7{n} ({})","\uAD00\uD1B5 \xB7 \u2300{n}\xD7{n}":"Through \xB7 \u2300{n}\xD7{n}","\uB9C9\uD798({}) \xB7 \u2300{n}\xD7{n}":"Blind ({}) \xB7 \u2300{n}\xD7{n}","{n}\uB2E8\uACC4 \xB7 {}":"Step {n} \xB7 {}","\uC9C4\uD589 \uC911":"Working","{n}\uCD08":"{n}s","(\uD310\uB3C5\uAE30\uAC00 \uBD84\uB958\uD55C \uC720\uD615)":"(type from the reading)","{n}\uB2E8\uACC4 \uC2E4\uD328: {}":"Step {n} failed: {}","\uB3C4\uBA74\uC744 \uC62C\uB9AC\uBA74":"Upload a drawing and","\uC0AC\uC591\uC73C\uB85C \uC62E\uAE41\uB2C8\uB2E4. 3D, \uAC80\uC99D, \uB0B4\uB824\uBC1B\uAE30\uB294 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uBC14\uB85C \uC2E4\uD589\uB429\uB2C8\uB2E4.":"into a spec. 3D, checking and download run in this browser.",\uC0D8\uD50C\uC740:"Samples show","\uB97C \uBCF4\uC5EC \uC8FC\uACE0, \uC62C\uB9B0 \uB3C4\uBA74\uC740 \uC774 \uBE0C\uB77C\uC6B0\uC800\uAC00":", and uploads are measured in this browser","\uC0AC\uC591\uC744 \uB9CC\uB4ED\uB2C8\uB2E4. \uCE58\uC218 \uBB38\uC790\uAE4C\uC9C0 \uC77D\uB294 AI \uD310\uB3C5\uC740 \uC11C\uBC84 \uBAA8\uB4DC\uC5D0\uC11C \uB3D9\uC791\uD569\uB2C8\uB2E4.":"to build a spec. AI reading of the dimension text runs in server mode.","\uBD80\uD488 \uD615\uC0C1\uC740 \uB3C4\uBA74 \uADF8\uB300\uB85C, \uC0C1\uB300 \uBD80\uD488\uC740 \uADDC\uACA9\uD45C \uADFC\uC0AC\uC785\uB2C8\uB2E4. \uD68C\uC804\uC774 \uBCF4\uC774\uB3C4\uB85D":"The part matches the drawing; mating parts are standard-table approximations. A","\uC744 \uBD99\uC600\uACE0 \uB0B4\uB824\uBC1B\uB294 \uD30C\uC77C\uC5D0\uB294 \uB4E4\uC5B4\uAC00\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.":"makes the rotation visible and is not included in downloads.","\uC5B4\uB5A4 \uB3C4\uBA74\uC744 \uC62C\uB9AC\uB294\uC9C0\uB294":"What to upload is explained in the","\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.":".","\uC870\uB9BD \xB7 \uC2DC\uBBAC\uB808\uC774\uC158":"Assembly \xB7 simulation","\uB3C4\uBA74\uC5D0\uC11C \uACB0\uD569\uBD80 \uCC3E\uAE30 (\uBA48\uCDA4\uB9C1, \uD0A4, \uB098\uC0AC, \uACF5\uCC28)":"Finding interfaces (rings, keys, threads, tolerances)","\uC0C1\uB300 \uBD80\uD488 \uB9CC\uB4E4\uAE30 (\uADDC\uACA9\uD45C \uADFC\uC0AC)":"Building mating parts (standard-table approximations)","\uBD84\uD574 \uC21C\uC11C\uC640 \uC870\uB9BD \uC810\uAC80":"Disassembly order and assembly checks","STEP\xB7\uBA74":"STEP mesh","\uC0AC\uC591\uC5D0 \uBC18\uC601\uB418\uC9C0 \uC54A\uC740 \uCE58\uC218: {}":"Dimensions not in the spec: {}","x {n}\u2013{n} mm \xB7 \uC790\uC804(X\uCD95)":"x {n}\u2013{n} mm \xB7 spin (X axis)","x {n}\u2013{n} mm \xB7 \uCD95\uBC29\uD5A5 \uC870\uB9BD":"x {n}\u2013{n} mm \xB7 axial assembly","x {n}\u2013{n} mm \xB7 \uBC18\uACBD \uBC29\uD5A5 \uC870\uB9BD":"x {n}\u2013{n} mm \xB7 radial assembly","x {n}\u2013{n} mm \xB7 \uB098\uC0AC \uC774\uC1A1 {n}mm/\uD68C\uC804":"x {n}\u2013{n} mm \xB7 screw feed {n} mm/turn","x {n} mm \xB7 \uC790\uC804(X\uCD95)":"x {n} mm \xB7 spin (X axis)","\uC591 \uB05D \uC13C\uD130\uAD6C\uBA4D(DIN 332). \uC13C\uD130 \uC0AC\uC774\uC5D0\uC11C \uC120\uC0AD\xB7\uC5F0\uC0AD\uB418\uB294 \uD68C\uC804 \uBD80\uD488":"Centre holes at both ends (DIN 332). Turned and ground between centres","\uC13C\uD130\uAD6C\uBA4D 1\uAC1C. \uC120\uC0AD \uAE30\uC900(\uD68C\uC804 \uAC00\uACF5)":"One centre hole. Turning datum","\uBCA0\uC5B4\uB9C1 \uC790\uB9AC {n}\uACF3({}). \uD68C\uC804 \uC9C0\uC9C0":"{n} bearing seat(s) ({}). Rotational support","\uD0A4\uD648. \uD1A0\uD06C \uC804\uB2EC(\uD68C\uC804)":"Keyway. Transmits torque","\uC18D\uC774 \uBE48 \uBD80\uC2DC\xB7\uC2AC\uB9AC\uBE0C. \uBD80\uD488 \uC790\uCCB4\uBCF4\uB2E4 \uC548\uC5D0 \uB4E0 \uC0C1\uB300 \uCD95\uC774 \uC774 \uCD95\uC120\uC5D0\uC11C \uD68C\uC804\uD55C\uB2E4":"Hollow bushing or sleeve. The shaft inside turns on this axis, not the part itself","\uD68C\uC804\uCCB4 \uD615\uC0C1 \uC790\uCCB4(\uCD95 \uB300\uCE6D). \uC790\uC804\uCD95\uC740 \uCD95\uC120\uACFC \uC77C\uCE58":"The shape itself is axisymmetric, so the spin axis is the part axis","{}\uC740(\uB294) \uC2A4\uC2A4\uB85C \uB3CC\uC9C0 \uC54A\uB294 \uBD80\uD488\uC785\uB2C8\uB2E4. \uCD95\uC120\uB9CC \uCC38\uACE0":"A {} does not turn on its own. The axis is shown for reference only","\uC138\uADF8\uBA3C\uD2B8 \u2300{n}. \uAD6C\uB984 \uBCA0\uC5B4\uB9C1 \uB0B4\uB95C \uB07C\uC6CC\uB9DE\uCDA4":"Segment \u2300{n}. Rolling bearing inner-race fit","\uC138\uADF8\uBA3C\uD2B8 \u2300{n} {}. \uAD6C\uB984 \uBCA0\uC5B4\uB9C1 \uB0B4\uB95C \uB07C\uC6CC\uB9DE\uCDA4":"Segment \u2300{n} {}. Rolling bearing inner-race fit","d={n} \uACC4\uC5F4(6000/6200) \uADFC\uC0AC: \uC678\uACBD \u2300{n} \uD3ED {n}":"d={n} series (6000/6200) approximation: OD \u2300{n}, width {n}","\uD45C\uC900 \uACC4\uC5F4\uC5D0 \uC5C6\uB294 \uCD95\uACBD. \uC678\uACBD\xB7\uD3ED\uC740 \uBE44\uB840 \uADFC\uC0AC":"Not a standard bore size; OD and width are scaled approximations","\uC678\uACBD \u2300{n} {}. \uD558\uC6B0\uC9D5 \uAD6C\uBA4D(H7)\uC5D0 \uC555\uC785\uB418\uB294 \uB07C\uC6CC\uB9DE\uCDA4":"OD \u2300{n} {}. Press fit into an H7 housing bore","\uC911\uAC04~\uC5B5\uC9C0 \uB07C\uC6C0: \uC555\uC785 \uD6C4 \uD68C\uC804\uD558\uC9C0 \uC54A\uB294\uB2E4(\uC0C1\uB300 \uCD95\uC774 \uC548\uC5D0\uC11C \uB3C8\uB2E4)":"Transition to interference fit: it does not turn once pressed in","\uD5D0\uAC70\uC6B4 \uB07C\uC6C0: \uC190\uC73C\uB85C \uBC00\uC5B4 \uB123\uC744 \uC218 \uC788\uB2E4":"Clearance fit: it can be pushed in by hand","\uD648 \u2300{n}\xD7{n}. \uCD95\uC6A9 \uBA48\uCDA4\uB9C1(\uC2A4\uB0C5\uB9C1) \uC790\uB9AC":"Groove \u2300{n}\xD7{n}. Seat for an external retaining ring","\uD648 \u2300{n}\xD7{n} ({}). \uCD95\uC6A9 \uBA48\uCDA4\uB9C1(\uC2A4\uB0C5\uB9C1) \uC790\uB9AC":"Groove \u2300{n}\xD7{n} ({}). Seat for an external retaining ring","\uCD95\uACBD \u2300{n} \uD45C\uC900 \uD648: \u2300{n}\xD7{n}":"For a \u2300{n} shaft the standard groove is \u2300{n}\xD7{n}","\uCD95\uACBD \u2300{n} \uD45C\uC900 \uD648: \u2300{n}\xD7{n} (\uD45C \uBC16\xB7\uADFC\uC0AC)":"For a \u2300{n} shaft the standard groove is \u2300{n}\xD7{n} (outside the table)","\uB9C1\uC744 \uBC8C\uB824 \uBC18\uACBD \uBC29\uD5A5\uC73C\uB85C \uB07C\uC6B0\uACE0, \uCD95\uBC29\uD5A5 \uC704\uCE58\uB97C \uACE0\uC815\uD55C\uB2E4":"The ring spreads on radially and fixes the axial position","\uD0A4\uD648 {n}\xD7{n} L{n}. \uD3C9\uD589\uD0A4\uB85C \uD1A0\uD06C \uC804\uB2EC":"Keyway {n}\xD7{n} L{n}. Parallel key transmits torque","\uD0A4\uD648 {n}\xD7{n} L{n} ({}). \uD3C9\uD589\uD0A4\uB85C \uD1A0\uD06C \uC804\uB2EC":"Keyway {n}\xD7{n} L{n} ({}). Parallel key transmits torque","DIN 6885: \uD0A4 {n}\xD7{n}, \uCD95 \uD648 \uAE4A\uC774 t1={n}":"DIN 6885: key {n}\xD7{n}, shaft groove depth t1={n}","\uD45C \uBC16 \uCD95\uACBD. \uD0A4 \uB192\uC774\uB294 \uD3ED\uC5D0\uC11C \uADFC\uC0AC":"Shaft size outside the table; key height approximated from the width","\uD5C8\uBE0C(\uAE30\uC5B4\xB7\uD480\uB9AC\xB7\uCEE4\uD50C\uB9C1)\uAC00 \uCD95\uBC29\uD5A5\uC73C\uB85C \uB07C\uC6CC\uC9C0\uACE0 \uD0A4\uAC00 \uD68C\uC804\uC744 \uAD6C\uC18D\uD55C\uB2E4":"The hub (gear, pulley, coupling) slides on axially and the key locks rotation","\uB098\uC0AC {}. \uC0C1\uB300 \uC554\uB098\uC0AC(\uB108\uD2B8\xB7\uD0ED \uAD6C\uBA4D)\uC640 \uCCB4\uACB0":"Thread {}. Mates with a nut or tapped hole","ISO 4032 \uB108\uD2B8 \uADFC\uC0AC: \uB300\uBCC0 {n}, \uB192\uC774 {n}":"ISO 4032 nut approximation: {n} across flats, {n} high","1\uD68C\uC804\uB2F9 {n}mm \uC804\uC9C4(\uC624\uB978\uB098\uC0AC)":"Advances {n} mm per turn (right-hand)","\u2300{n} \uAD00\uD1B5 \uD6A1\uAD6C\uBA4D (x={n}). \uBD84\uD560\uD540\xB7\uC2A4\uD504\uB9C1\uD540\xB7\uD3C9\uD589\uD540 \uC790\uB9AC":"\u2300{n} through cross hole at x={n}. Seat for a split, spring or parallel pin","\u2300{n} \uAE4A\uC774 {n} \uD6A1\uAD6C\uBA4D (x={n}). \uBD84\uD560\uD540\xB7\uC2A4\uD504\uB9C1\uD540\xB7\uD3C9\uD589\uD540 \uC790\uB9AC":"\u2300{n} cross hole {n} deep at x={n}. Seat for a split, spring or parallel pin","\uAD00\uD1B5\uD540: \uBC18\uACBD \uBC29\uD5A5\uC73C\uB85C \uB123\uACE0 \uBC18\uB300\uD3B8\uC73C\uB85C \uBE60\uC9C4\uB2E4":"Through pin: goes in radially and out the other side","\uB9C9\uD78C \uAD6C\uBA4D: \uC138\uD2B8 \uC2A4\uD06C\uB8E8\xB7\uC704\uCE58 \uACB0\uC815 \uD540":"Blind hole: set screw or locating pin","\uB05D\uBA74 \uC721\uAC01 \uC18C\uCF13 S{n} \uAE4A\uC774 {n}. \uC721\uAC01 \uB80C\uCE58\uB85C \uC870\uC778\uB2E4":"Hex socket S{n}, {n} deep in the end face. Tightened with a hex key","\uB80C\uCE58\uB97C \uCD95\uBC29\uD5A5\uC73C\uB85C \uB123\uACE0 \uB3CC\uB9AC\uBA74 \uB098\uC0AC\uBD80\uAC00 \uC0C1\uB300 \uC554\uB098\uC0AC\uC5D0 \uCCB4\uACB0\uB41C\uB2E4":"Insert the key axially and turn; the thread screws into the mating female thread","\uC721\uAC01 \uB300\uBCC0 {n}. \uC2A4\uD328\uB108\uB85C \uC7A1\uC544 \uB3CC\uB9AC\uB294 \uBA74":"Hex {n} across flats. Gripped and turned with a spanner","\uC870\uB9BD \uC2DC \uD68C\uC804\uC744 \uB9C9\uAC70\uB098 \uC870\uC774\uB294 \uB370 \uC4F4\uB2E4":"Used to hold against rotation or to tighten during assembly","\uD3C9\uBA74(D\uCEF7) \uAE4A\uC774 {n}. \uC138\uD2B8 \uC2A4\uD06C\uB8E8\uAC00 \uB20C\uB7EC \uD68C\uC804\uC744 \uAD6C\uC18D\uD558\uAC70\uB098 \uC2A4\uD328\uB108 \uC790\uB9AC":"Flat (D-cut) {n} deep. A set screw presses on it, or it is a spanner flat","\uD3C9\uBA74(D\uCEF7) \uAE4A\uC774 {n} \xD7{n}. \uC138\uD2B8 \uC2A4\uD06C\uB8E8\uAC00 \uB20C\uB7EC \uD68C\uC804\uC744 \uAD6C\uC18D\uD558\uAC70\uB098 \uC2A4\uD328\uB108 \uC790\uB9AC":"Flats (D-cut) {n} deep \xD7{n}. A set screw presses on them, or they are spanner flats","\uBCF4\uC5B4 \u2300{n} \uAD00\uD1B5. \uC0C1\uB300 \uCD95\uC774 \uB4E4\uC5B4\uAC00\uB294 \uB07C\uC6CC\uB9DE\uCDA4":"Bore \u2300{n} through. Fit for the mating shaft","\uBCF4\uC5B4 \u2300{n} \uB9C9\uD798. \uC0C1\uB300 \uCD95\uC774 \uB4E4\uC5B4\uAC00\uB294 \uB07C\uC6CC\uB9DE\uCDA4":"Blind bore \u2300{n}. Fit for the mating shaft","\uBCF4\uC5B4 \u2300{n} {} \uAD00\uD1B5. \uC0C1\uB300 \uCD95\uC774 \uB4E4\uC5B4\uAC00\uB294 \uB07C\uC6CC\uB9DE\uCDA4":"Bore \u2300{n} {} through. Fit for the mating shaft","{} \uD5D0\uAC70\uC6B4/\uC911\uAC04 \uB07C\uC6CC\uB9DE\uCDA4. \uCD95\uBC29\uD5A5\uC73C\uB85C \uBC00\uC5B4 \uB123\uACE0 \uBE84 \uC218 \uC788\uB2E4":"{} clearance or transition fit. It slides in and out axially","\uACF5\uCC28 \uD45C\uAE30 \uC5C6\uC74C. \uB07C\uC6CC\uB9DE\uCDA4 \uB4F1\uAE09 \uBBF8\uC0C1":"No tolerance given, so the fit class is unknown","\uD14C\uC774\uD37C \u2300{n}\u2192\u2300{n} (\uAE30\uC6B8\uAE30 1:{n}). \uD14C\uC774\uD37C \uD5C8\uBE0C \uC555\uC785/\uC5B5\uC9C0 \uB07C\uC6C0":"Taper \u2300{n}\u2192\u2300{n} (1:{n}). Press fit for a tapered hub","\uC791\uC740 \uCABD\uC5D0\uC11C \uB07C\uC6CC \uCD95\uBC29\uD5A5\uC73C\uB85C \uC870\uC774\uBA74 \uB9C8\uCC30\uB85C \uD1A0\uD06C\uB97C \uC804\uB2EC\uD55C\uB2E4":"Pushed on from the small end and clamped axially, it transmits torque by friction","\u2300{n} \uBAB8\uD1B5. \uC694\uD06C(\uD074\uB808\uBE44\uC2A4) \uB450 \uADC0\uC758 \uAD6C\uBA4D\uC5D0 \uB07C\uC6CC\uC9C4\uB2E4":"\u2300{n} body. Fits through the holes in both ears of the yoke (clevis)","\u2300{n} {} \uBAB8\uD1B5. \uC694\uD06C(\uD074\uB808\uBE44\uC2A4) \uB450 \uADC0\uC758 \uAD6C\uBA4D\uC5D0 \uB07C\uC6CC\uC9C4\uB2E4":"\u2300{n} {} body. Fits through the holes in both ears of the yoke (clevis)","\uD540\uC740 \uCD95\uBC29\uD5A5\uC73C\uB85C \uB123\uACE0, \uBD84\uD560\uD540\xB7\uBA48\uCDA4\uB9C1\uC774 \uBE60\uC9D0\uC744 \uB9C9\uB294\uB2E4":"The pin goes in axially; a split pin or ring keeps it from backing out","\uB3C4\uBA74\uC5D0\uC11C \uC0C1\uB300 \uBD80\uD488\uACFC \uACB0\uD569\uD558\uB294 \uD45C\uAE30(\uBA48\uCDA4\uB9C1 \uD648\xB7\uD0A4\uD648\xB7\uB098\uC0AC\xB7\uBCF4\uC5B4\xB7\uD6A1\uAD6C\uBA4D)\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uB2E8\uD488 \uD68C\uC804\uB9CC \uBCF4\uC5EC \uC90D\uB2C8\uB2E4.":"No mating features (ring groove, keyway, thread, bore, cross hole) were found, so only the part's rotation is shown.",\uBD84\uD560\uD540:"Split pin",\uB108\uD2B8:"Nut","\uBCA0\uC5B4\uB9C1 \uC790\uB9AC \uAE38\uC774":"Bearing seat length","{n} / \uD3ED {n}":"{n} / width {n}","\uC790\uB9AC \uAE38\uC774\uAC00 \uBCA0\uC5B4\uB9C1 \uD3ED\uBCF4\uB2E4 \uC9E7\uC73C\uBA74 \uB0B4\uB95C\uC774 \uB2E8\uCC28\uC5D0 \uB2FF\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4(\uADFC\uC0AC \uACC4\uC5F4).":"If the seat is shorter than the bearing width, the inner race won't reach the shoulder.","\uBA48\uCDA4\uB9C1 \uBB3C\uB9BC \uAE4A\uC774":"Ring engagement depth","\uD648 \uAE4A\uC774 = (\uCD95 \u2300{n} \u2212 \uD648 \u2300{n})/2. {n}mm \uBBF8\uB9CC\uC774\uBA74 \uB9C1\uC774 \uBE60\uC9D1\uB2C8\uB2E4.":"Groove depth = (shaft \u2300{n} \u2212 groove \u2300{n})/2. Below {n} mm the ring can pop out.","\uD0A4 \uB3CC\uCD9C(\uD5C8\uBE0C \uCABD)":"Key protrusion (hub side)","\uD0A4 \uB192\uC774 {n} \u2212 \uCD95 \uD648 \uAE4A\uC774 {n}. \uD5C8\uBE0C \uD648\uC774 \uC774\uB9CC\uD07C \uBB3C\uB9BD\uB2C8\uB2E4.":"Key height {n} \u2212 shaft groove depth {n}. The hub slot engages by this much.","\uB108\uD2B8 \uCCB4\uACB0 \uD68C\uC804\uC218":"Nut turns to tighten","{n} \uD68C\uC804":"{n} turns","\uB098\uC0AC \uAE38\uC774 {n} \xF7 \uD53C\uCE58 {n}. \uB108\uD2B8 \uB192\uC774 {n}mm \uBCF4\uB2E4 \uC9E7\uC73C\uBA74 \uC644\uC804 \uCCB4\uACB0\uC774 \uC548 \uB429\uB2C8\uB2E4.":"Thread length {n} \xF7 pitch {n}. Shorter than the {n} mm nut height means it can't fully engage.","\uD540 \uC5EC\uC720":"Pin clearance","\uAD00\uD1B5\uD540. \uBC18\uB300\uD3B8\uC73C\uB85C \uBE60\uC9D1\uB2C8\uB2E4.":"Through pin. It exits the other side.","\uB9C9\uD78C \uAD6C\uBA4D \uAE4A\uC774 {n}":"Blind hole {n} deep","\uC678\uD615 \uD310\uB3C5":"Outline reading","\uBBF8\uB9AC \uD310\uB3C5\uD55C \uACB0\uACFC":"Pre-read result","AI \uD310\uB3C5 \xB7 \uC815\uBC00":"AI reading \xB7 careful","AI \uD310\uB3C5 \xB7 \uC790\uB3D9 \uC218\uC815":"AI reading \xB7 self-corrected","\uBBF8\uB9AC \uB9CC\uB4E0 \uD574\uC11D (\uB3C4\uBA74 \uBB38\uC790 \uC778\uC2DD + \uD310\uB3C5 \uC0AC\uC591 + \uC774\uBBF8\uC9C0) \xB7 \uC2E0\uB8B0\uB3C4 {n}%":"Pre-built analysis (text recognition, spec, image) \xB7 confidence {n}%","\uC9C0\uAE08 \uD574\uC11D (\uB3C4\uBA74 \uBB38\uC790 {n}\uAC1C + \uC0AC\uC591 + \uC774\uBBF8\uC9C0, {n}\uCD08) \xB7 \uC2E0\uB8B0\uB3C4 {n}%":"Analysed now ({n} text tokens, spec, image, {n}s) \xB7 confidence {n}%","\uBA48\uCDA4\uB9C1\uC744 \uBC8C\uB824 \uBE80\uB2E4 (x={n})":"Spread and remove the retaining ring (x={n})","\uB108\uD2B8\uB97C \uD47C\uB2E4 ({})":"Unscrew the nut ({})","\uD5C8\uBE0C\uB97C \uCD95\uBC29\uD5A5\uC73C\uB85C \uBE80 \uB4A4 \uD0A4\uB97C \uB4E4\uC5B4\uB0B8\uB2E4 (x={n})":"Slide the hub off axially, then lift out the key (x={n})","\uBCA0\uC5B4\uB9C1\uC744 \uCD95\uBC29\uD5A5\uC73C\uB85C \uBF51\uB294\uB2E4 (x={n})":"Draw the bearing off axially (x={n})","\uD558\uC6B0\uC9D5\uC5D0\uC11C \uBC00\uC5B4 \uBE80\uB2E4":"Push it out of the housing","\uC0C1\uB300 \uCD95\uC744 \uBE80\uB2E4":"Withdraw the mating shaft","\uACF5\uAD6C\uB97C \uBE80\uB2E4":"Remove the tool","\uC694\uD06C\uC5D0\uC11C \uD540\uC744 \uBE80\uB2E4":"Withdraw the pin from the yoke","\uBA48\uCDA4\uB9C1\uC744 \uBC8C\uB824 \uBC18\uACBD \uBC29\uD5A5\uC73C\uB85C \uBE7C\uB0B8\uB2E4 (x={n})":"Spread the retaining ring and lift it off radially (x={n})","\uD540\uC744 \uBC18\uACBD \uBC29\uD5A5\uC73C\uB85C \uBF51\uB294\uB2E4 (x={n})":"Pull the pin out radially (x={n})","\uB108\uD2B8\uB97C \uD480\uC5B4 \uC67C\uCABD \uB05D\uC73C\uB85C \uBE7C\uB0B8\uB2E4 ({}, 1\uD68C\uC804 {n}mm)":"Unscrew the nut off the left end ({}, {n} mm per turn)","\uB108\uD2B8\uB97C \uD480\uC5B4 \uC624\uB978\uCABD \uB05D\uC73C\uB85C \uBE7C\uB0B8\uB2E4 ({}, 1\uD68C\uC804 {n}mm)":"Unscrew the nut off the right end ({}, {n} mm per turn)","\uC721\uAC01 \uB80C\uCE58\uB97C \uC67C\uCABD \uB05D\uBA74\uC5D0\uC11C \uBE80\uB2E4":"Withdraw the hex key from the left end face","\uC721\uAC01 \uB80C\uCE58\uB97C \uC624\uB978\uCABD \uB05D\uBA74\uC5D0\uC11C \uBE80\uB2E4":"Withdraw the hex key from the right end face","\uC2A4\uD328\uB108\uB97C \uB193\uB294\uB2E4 (\uB300\uBCC0 {n})":"Release the spanner ({n} across flats)","\uBCA0\uC5B4\uB9C1\uC744 \uC67C\uCABD \uB05D \uBC29\uD5A5\uC73C\uB85C \uBF51\uB294\uB2E4 (\uB0B4\uACBD \u2300{n})":"Draw the bearing off towards the left end (bore \u2300{n})","\uBCA0\uC5B4\uB9C1\uC744 \uC624\uB978\uCABD \uB05D \uBC29\uD5A5\uC73C\uB85C \uBF51\uB294\uB2E4 (\uB0B4\uACBD \u2300{n})":"Draw the bearing off towards the right end (bore \u2300{n})","\uD5C8\uBE0C\uB97C \uCD95\uBC29\uD5A5\uC73C\uB85C \uBE7C\uACE0 \uD0A4\uB97C \uBC18\uACBD \uBC29\uD5A5\uC73C\uB85C \uB4E4\uC5B4\uB0B8\uB2E4":"Slide the hub off axially, then lift the key out radially","\uD14C\uC774\uD37C \uD5C8\uBE0C\uB97C \uD070 \uCABD\uC73C\uB85C \uBC00\uC5B4 \uBE80\uB2E4":"Push the tapered hub off towards the large end","\uC0C1\uB300 \uCD95\uC744 \uBCF4\uC5B4\uC5D0\uC11C \uBE80\uB2E4 (\u2300{n})":"Withdraw the mating shaft from the bore (\u2300{n})","\uC694\uD06C(\uD074\uB808\uBE44\uC2A4)\uC5D0\uC11C \uD540\uC744 \uBE80\uB2E4":"Withdraw the pin from the yoke (clevis)",\uBDF0:"View",\uAD6C\uBA4D:"Holes","\uC548\uCABD \uBAA8\uC11C\uB9AC":"inner edges",\uD06C\uAE30:"size",\uC640:"vs","\uC77D\uB294 \uC911\u2026":"Reading\u2026","\uC67C\uCABD \uBAA9\uB85D\uC774\uB098 \uB3C4\uBA74 \uC704 \uC0C1\uC790\uC5D0\uC11C \uBDF0\uB97C \uACE0\uB978 \uB4A4 \uBA74\uC744 \uB204\uB974\uC138\uC694.":"Pick a view from the list or the boxes on the drawing, then click a face.","\uD68C\uC804\uCCB4 \uC810\uC218":"Turned score","\uB3C4\uBA74\uC5D0\uC11C 3D":"Drawing to 3D","\uD68C\uC804\uCCB4 \uB3C4\uBA74\uC5D0\uC11C 3D CAD":"Turned drawing to 3D CAD","Part 2 \xB7 \uB2E4\uC2DC\uC810 \uB3C4\uBA74\uC5D0\uC11C \uBD80\uD488 \uD558\uB098":"Part 2 \xB7 one part from several views","2\uB2E8\uACC4 \xB7 \uD310\uB3C5":"Step 2 \xB7 Reading","3\uB2E8\uACC4 \xB7 3D CAD":"Step 3 \xB7 3D CAD","\uD310\uB3C5 \uACB0\uACFC":"As read","\uC815\uB2F5 \uC0AC\uC591":"Reference","\uBCF5\uC6D0 \uACB0\uACFC":"Rebuilt","\uB9CC\uB4E4\uC9C0 \uBABB\uD558\uB294 \uBD80\uB958":"Cannot be built","\uB2E4\uC2DC\uC810 \uB3C4\uBA74 \uB77C\uC774\uBE0C\uB7EC\uB9AC":"Multi-view drawing library","\uC67C\uCABD\uC774 \uC62C\uB9AC\uB294 \uB3C4\uBA74, \uC624\uB978\uCABD\uC774 \uADF8 \uB3C4\uBA74\uC5D0\uC11C \uB098\uC628 3D \uC785\uB2C8\uB2E4. \uCE74\uB4DC\uB97C \uB204\uB974\uBA74 \uC5F4\uB9BD\uB2C8\uB2E4.":"The drawing you would upload is on the left, the 3D that came out of it on the right. Click a card to open it.","\uC608\uC2DC \uB3C4\uBA74\uACFC \uACB0\uACFC":"Example drawings and results","\uD0C0\uACF5 \uD50C\uB808\uC774\uD2B8":"Drilled plate","\u3137 \uCC44\uB110 \uBE0C\uB798\uD0B7":"Channel bracket","\uCD95 \uC9C0\uC9C0 \uBE14\uB85D":"Shaft support block","\uBC11\uD310\uACFC \uC138\uC6C0\uD310, \uAD00\uD1B5 \uAD6C\uBA4D \uB458":"Base and upright, two through holes","\uBA74\uACFC \uB450\uAED8 \uB450 \uBDF0\uBA74 \uCDA9\uBD84\uD569\uB2C8\uB2E4":"A face view and a thickness view are enough","\uC548\uCABD\uC774 \uD30C\uC778 \uB2E8\uBA74":"A recessed section","\uC815\uBA74\uC5D0\uC11C \uBCF8 \uBCF4\uC5B4\uB294 \uADFC\uC0AC\uC785\uB2C8\uB2E4":"The bore seen face on is approximated","\uBC1C\uACFC \uBCF4\uC5B4, \uBC14\uB2E5 \uAD6C\uBA4D \uB137":"Foot, bore and four holes in the base","\uC2A4\uC715\uC774 \uD544\uC694\uD574 \uB9CC\uB4E4\uC9C0 \uBABB\uD569\uB2C8\uB2E4":"Needs a sweep, so it cannot be built","\uD5C8\uBE0C \uD50C\uB79C\uC9C0":"Hub flange",\uD3C9\uD589\uD540:"Parallel dowel pin","\uD14C\uC774\uD37C \uD540":"Taper pin","\uC204\uB354 \uBCFC\uD2B8 M8":"Shoulder bolt M8","\uB110\uB9C1 \uC190\uC7A1\uC774 \uB098\uC0AC":"Knurled thumb screw","\uD53C\uC2A4\uD1A4 \uB85C\uB4DC":"Piston rod","\uBC38\uBE0C \uC2A4\uD480":"Valve spool","\uC138\uD2B8 \uC2A4\uD06C\uB8E8 \uCE7C\uB77C":"Set screw collar","\uC815\uD22C\uC0C1 {n}\uBDF0":"{n} ortho views","\uD68C\uC804\uCCB4 \uB3C4\uBA74 \uB77C\uC774\uBE0C\uB7EC\uB9AC":"Turned-part drawing library",\uB77C\uC774\uBE0C\uB7EC\uB9AC:"Library",\uC124\uC815:"Setup",\uACB0\uACFC:"Result",\uC785\uB825:"Input","\uB3C4\uBA74, \uC124\uBA85, \uC0AC\uC591\uC11C\uC5D0\uC11C 3D\uB97C \uB9CC\uB4ED\uB2C8\uB2E4":"3D from a drawing, a description, or a spec sheet","\uB124 \uAC08\uB798\uC785\uB2C8\uB2E4. \uD68C\uC804\uCCB4\uB294 \uB3C4\uBA74 \uD55C \uC7A5, \uADF8 \uBC16\uC758 \uBD80\uD488\uC740 \uC5EC\uB7EC \uBDF0, \uB3C4\uBA74\uC774 \uC5C6\uC73C\uBA74 \uC124\uBA85\uC774\uB098 \uC0AC\uC9C4, \uB4DC\uB860\uC740 \uC124\uACC4 \uC0AC\uC591\uC11C\uB85C.":"Four ways in. Turned parts from one drawing, other parts from several views, a description or photo when there is no drawing, and drones from a design spec sheet.","\uB4DC\uB860 \uC124\uACC4 \uC0AC\uC591\uC11C\uC5D0\uC11C CAD":"Drone CAD from a design spec","\uC124\uACC4 \uC0AC\uC591\uC11C \uD55C \uC7A5\uC5D0\uC11C \uB4DC\uB860 \uC804\uCCB4\uB97C \uB9CC\uB4E4\uACE0, \uD30C\uD2B8\uB97C \uBC14\uAFB8\uACE0 \uBD84\uD574\uD558\uACE0 \uBE44\uD589\uC744 \uC2DC\uBBAC\uB808\uC774\uC158\uD569\uB2C8\uB2E4.":"Builds a whole drone from one design spec sheet, then swaps parts, explodes it and simulates flight.","\uC0AC\uC591\uC11C \uC77D\uAE30\uC640 \uB4DC\uB860 \uBD84\uB958":"Reads the spec and classifies the drone","\uD30C\uD2B8 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC640 \uD3B8\uC9D1":"Part library and editing","\uBD84\uD574\uC640 6\uC790\uC720\uB3C4 \uBE44\uD589":"Exploded view and 6-DOF flight","\uC790\uC0B0 \uC800\uC7A5\uACFC \uAC80\uC0C9":"Asset storage and search","Part 4 \uC5F4\uAE30 \u203A":"Open Part 4 \u203A","Part 3 \uC5F4\uAE30 \u203A":"Open Part 3 \u203A","\uC0C8\uB85C \uB098\uC634":"New","\uD504\uB86C\uD504\uD2B8\uC640 \uC774\uBBF8\uC9C0\uC5D0\uC11C 3D":"3D from a prompt or an image","\uD55C \uC904 \uC124\uBA85\uC774\uB098 \uC0AC\uC9C4 \uD55C \uC7A5\uC5D0\uC11C \uBD80\uD488 \uD2B8\uB9AC\uB97C \uC138\uC6C1\uB2C8\uB2E4. \uB9CC\uB4E0 3D \uB294 \uD30C\uD2B8\uBCC4\uB85C \uBD84\uB9AC\uD574 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.":"Builds a part tree from one line of text or one photo. The result comes apart part by part.","\uAE00\uB85C \uC801\uAC70\uB098 \uC0AC\uC9C4\uC744 \uC62C\uB9AC\uAC70\uB098":"Type it or drop a photo","\uBD80\uD488\uC774 \uD2B8\uB9AC\uB85C \uB098\uB258\uC5B4 \uB098\uC635\uB2C8\uB2E4":"The result is a tree of parts","\uD30C\uD2B8 \uBD84\uB9AC\uC640 \uD558\uB098\uC529 \uBCF4\uAE30":"Separate parts and view them one by one","\uB3C4\uBA74\uC774 \uC5C6\uC744 \uB54C \uC4F0\uB294 \uAC08\uB798\uC785\uB2C8\uB2E4":"The path to take when there is no drawing","\uBD84\uC57C \uD2B9\uD654 \uC778\uC2DD \uBAA8\uB378\uB85C \uB9CC\uB4DC\uB294 CAD":"CAD from a domain-specialised recognition model","\uD55C \uBD84\uC57C\uC758 \uBD80\uD488 \uCCB4\uACC4\uB97C \uC775\uD78C \uC778\uC2DD \uBAA8\uB378\uC774 \uC124\uACC4 \uC0AC\uC591\uC11C\uB97C \uC77D\uC5B4 \uC81C\uD488 \uC804\uCCB4\uB97C \uB9CC\uB4ED\uB2C8\uB2E4. \uC9C0\uAE08\uC740 \uB4DC\uB860\uC774 \uC608\uC2DC\uC785\uB2C8\uB2E4.":"A recognition model trained on one field's part system reads a design spec and builds the whole product. Drones are the example for now.","\uBD84\uC57C\uBCC4 \uBD80\uD488 \uCCB4\uACC4\uC640 \uADDC\uACA9\uC744 \uC544\uB294 \uBAA8\uB378":"A model that knows the field's parts and standards","\uC0AC\uC591\uC11C\uC5D0\uC11C \uC81C\uD488 \uC804\uCCB4\uB97C \uC0DD\uC131":"Generates the whole product from the spec","\uD30C\uD2B8 \uAD50\uCCB4 \xB7 \uBD84\uD574 \xB7 \uAC70\uB3D9 \uC2DC\uBBAC\uB808\uC774\uC158":"Part swaps, exploded view, motion simulation","\uC608\uC2DC: \uB4DC\uB860 (\uBD84\uB958 \xB7 \uB77C\uC774\uBE0C\uB7EC\uB9AC \xB7 6\uC790\uC720\uB3C4 \uBE44\uD589)":"Example: drones (classification, library, 6-DOF flight)"};var Im="vringon.lang",Ou=n=>/[가-힣]/.test(n),Du={ko:"\uD55C\uAD6D\uC5B4",en:"English"};function Ob(){let n=new URLSearchParams(location.search).get("lang");if(n&&Du[n])return n;try{let e=localStorage.getItem(Im);if(e&&Du[e])return e}catch{}return(navigator.language||"").toLowerCase().startsWith("ko")?"ko":"en"}var xi=Ob(),Ql=new Map,ec=[];function Bb(n){Ql.clear(),ec.length=0;for(let[e,t]of Object.entries(n)){if(!t)continue;if(!/\{n?\}/.test(e)){Ql.set(e,t);continue}let i=e.split(/(\{n\}|\{\})/),s="^",r=[];for(let o of i)o==="{n}"?(s+="(-?[\\d.,]+)",r.push("n")):o==="{}"?(s+="(.*?)",r.push("")):s+=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");s+="$",ec.push({re:new RegExp(s),en:t,holes:r})}}var kb={...Rm};Bb(kb);var Lm=new Set;typeof window<"u"&&(window.__i18nMissing=Lm);function _t(n,e){let t=String(n);if(e)for(let[l,c]of Object.entries(e))t=t.replaceAll(`{${l}}`,c);if(xi==="ko")return t;let i=Ql.get(t.trim());if(i!==void 0)return Pm(t,i);for(let l of ec){let c=l.re.exec(t.trim());if(!c)continue;let h=l.en,u=1;return h=h.replace(/\{n?\}/g,()=>c[u++]??""),Pm(t,h)}let s=[],r=/^([\s\u00b7\-]+)([\s\S]*)$/.exec(t);r&&s.push([r[1],r[2],""]);let o=/^(\s*\d+\.\s+)([\s\S]*)$/.exec(t);o&&s.push([o[1],o[2],""]);let a=/^([\s\u00b7\-]*)\(([\s\S]*)\)(\s*)$/.exec(t);a&&s.push([a[1]+"(",a[2],")"+a[3]]);for(let[l,c,h]of s){let u=Ql.get(c.trim());if(u!==void 0)return l+u+h;for(let f of ec){let d=f.re.exec(c.trim());if(!d)continue;let g=f.en,y=1;return g=g.replace(/\{n?\}/g,()=>d[y++]??""),l+g+h}}return Ou(t)&&Lm.add(t.trim()),t}function Pm(n,e){let t=/^\s*/.exec(n)[0],i=/\s*$/.exec(n)[0];return t+e+i}var Nm=["title","placeholder","aria-label"],zb=new Set(["SCRIPT","STYLE","CODE","PRE"]),Nu=new WeakMap;function Uu(n){let e=n.parentElement;if(!e||zb.has(e.tagName)||e.closest("[data-i18n-skip]"))return;let t=Nu.get(n)??n.nodeValue;if(!Ou(t))return;Nu.has(n)||Nu.set(n,t);let i=_t(t);n.nodeValue!==i&&(n.nodeValue=i)}function Fu(n){if(!n.closest?.("[data-i18n-skip]"))for(let e of Nm){if(!n.hasAttribute?.(e))continue;let t=`__i18n_${e}`,i=n.dataset[t]??n.getAttribute(e);if(!Ou(i))continue;n.dataset[t]===void 0&&(n.dataset[t]=i);let s=_t(i);n.getAttribute(e)!==s&&n.setAttribute(e,s)}}function Bu(n=document.body){if(!n)return;if(n.nodeType===3)return Uu(n);let e=document.createTreeWalker(n,NodeFilter.SHOW_TEXT),t=[];for(let i=e.nextNode();i;i=e.nextNode())t.push(i);t.forEach(Uu),n.nodeType===1&&Fu(n),n.querySelectorAll?.("[title],[placeholder],[aria-label]").forEach(Fu)}var jl=null;function Dm(){if(jl)return;jl=new MutationObserver(e=>{if(xi!=="ko"){jl.disconnect();for(let t of e)t.type==="characterData"?Uu(t.target):t.type==="attributes"?Fu(t.target):t.addedNodes.forEach(i=>{(i.nodeType===1||i.nodeType===3)&&Bu(i)});n()}}),n();function n(){jl.observe(document.body,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:Nm})}}function Vb(n,{reload:e=!1}={}){if(!(!Du[n]||n===xi)){xi=n;try{localStorage.setItem(Im,n)}catch{}document.documentElement.lang=n;try{let t=new URL(location.href);t.searchParams.get("lang")&&t.searchParams.get("lang")!==n&&(t.searchParams.set("lang",n),history.replaceState(null,"",t.toString()))}catch{}if(e||n==="ko"){let t=new URL(location.href);t.searchParams.has("lang")&&t.searchParams.set("lang",n),location.replace(t.toString());return}Bu(document.body),Dm(),document.dispatchEvent(new CustomEvent("langchange",{detail:{lang:xi}}))}}function Hb(n=".ws-top, .nav"){let e=document.querySelector(n);if(!e)return;let t=document.createElement("div");t.className="seg lang-seg",t.setAttribute("data-i18n-skip",""),t.innerHTML='<button data-lang="ko">\uD55C\uAD6D\uC5B4</button><button data-lang="en">EN</button>';let i=e.querySelector(".sp");i&&i.nextSibling?e.insertBefore(t,i.nextSibling):e.appendChild(t);let s=()=>t.querySelectorAll("button").forEach(r=>r.classList.toggle("on",r.dataset.lang===xi));t.onclick=r=>{let o=r.target.closest("button");o&&(Vb(o.dataset.lang),s())},s()}function Um({toggle:n=!0}={}){if(document.documentElement.lang=xi,xi!=="ko"&&document.title.includes("|")){let[e,...t]=document.title.split("|");document.title=e+"| "+_t(t.join("|").trim())}n&&Hb(),xi!=="ko"&&(Bu(document.body),Dm())}var Gb="(max-width: 1023px)";function Fm({body:n="wsBody",leftKo:e="\uB3C4\uBA74",rightKo:t="\uACB0\uACFC"}={}){let i=document.getElementById(n);if(!i||document.querySelector(".pane-tabs"))return null;let s=window.matchMedia(Gb),r=[{id:"left",ko:e},{id:"stage",ko:"3D"},{id:"right",ko:t}],o=document.createElement("nav");o.className="pane-tabs",o.setAttribute("data-i18n-skip",""),o.innerHTML=r.map((h,u)=>`<button data-pane="${h.id}"><span class="k">${u+1}</span>${_t(h.ko)}</button>`).join(""),i.parentNode.appendChild(o);let a="left",l=h=>{a=h,i.classList.remove("only-left","only-stage","only-right"),s.matches&&i.classList.add(`only-${h}`);for(let u of o.children){let f=u.dataset.pane===h;u.classList.toggle("on",f),f&&u.classList.remove("ready")}setTimeout(()=>window.dispatchEvent(new Event("resize")),0)},c=(h,u=!0)=>{let f=o.querySelector(`[data-pane="${h}"]`);f&&h!==a&&f.classList.toggle("ready",u)};return o.onclick=h=>{let u=h.target.closest("button");u&&l(u.dataset.pane)},l("left"),s.addEventListener?.("change",()=>{s.matches?l(a):i.classList.remove("only-left","only-stage","only-right")}),{show:l,ready:c,narrow:()=>s.matches,get current(){return a}}}var $b=[{n:1,ko:"\uD68C\uC804\uCCB4",page:"revolve.html"},{n:2,ko:"\uB2E4\uC2DC\uC810",page:"assembly.html"},{n:3,ko:"\uC124\uBA85\xB7\uC0AC\uC9C4",page:"sculpt.html"},{n:4,ko:"\uB4DC\uB860",page:"app.html",root:!0}];function Om({current:n,base:e="./",rootBase:t="../",label:i="Part"}={}){let s=document.querySelector(".ws-top");if(!s||s.querySelector(".partnav"))return;let r=document.createElement("nav");r.className="partnav",r.setAttribute("aria-label","parts"),r.setAttribute("data-i18n-skip",""),r.innerHTML=$b.map(a=>{let l=a.root?t+a.page:e+a.page,c=a.n===n;return`<a class="pn${c?" on":""}" href="${l}" title="${i} ${a.n} \xB7 ${a.ko}" ${c?'aria-current="page"':""}><b>${a.n}</b><span>${a.ko}</span></a>`}).join("")+`<a class="pn home" href="${e}index.html" title="\uC804\uCCB4 \uBCF4\uAE30">\u2302</a>`;let o=s.querySelector(".sp");o?s.insertBefore(r,o):s.appendChild(r)}var{createWorker:Xb}=Wb,$u=null,fs=n=>_t(Mp[n]||n||""),nc="a6f74217",ae=n=>document.getElementById(n),Mo=n=>new Promise(e=>setTimeout(e,n)),tc=(n,e=1)=>Number.isFinite(n)?(Math.round(n*10**e)/10**e).toString():"\u2014";function wn(n,e=!1){let t=document.createElement("div");t.className=`toast${e?" ok":""}`,t.textContent=n,ae("toasts").appendChild(t),setTimeout(()=>t.remove(),4200)}var ic=[{id:"bracket",name:"L \uBE0C\uB798\uD0B7 3\uBA74\uB3C4",file:"assets/part2/bracket.svg",result:"assets/part2/bracket-result.webp",level:1,views:3,note:"\uBC11\uD310\uACFC \uC138\uC6C0\uD310, \uAD00\uD1B5 \uAD6C\uBA4D \uB458"},{id:"plate",name:"\uD0C0\uACF5 \uD50C\uB808\uC774\uD2B8",file:"assets/part2/plate.svg",result:"assets/part2/plate-result.webp",level:1,views:2,note:"\uBA74\uACFC \uB450\uAED8 \uB450 \uBDF0\uBA74 \uCDA9\uBD84\uD569\uB2C8\uB2E4"},{id:"channel",name:"\u3137 \uCC44\uB110 \uBE0C\uB798\uD0B7",file:"assets/part2/channel.svg",result:"assets/part2/channel-result.webp",level:1,views:3,note:"\uC548\uCABD\uC774 \uD30C\uC778 \uB2E8\uBA74"},{id:"housing",name:"\uBCA0\uC5B4\uB9C1 \uD558\uC6B0\uC9D5",file:"assets/part2/housing.svg",result:"assets/part2/housing-result.webp",level:2,views:3,note:"\uC815\uBA74\uC5D0\uC11C \uBCF8 \uBCF4\uC5B4\uB294 \uADFC\uC0AC\uC785\uB2C8\uB2E4"},{id:"block",name:"\uCD95 \uC9C0\uC9C0 \uBE14\uB85D",file:"assets/part2/block.svg",result:"assets/part2/block-result.webp",level:2,views:3,note:"\uBC1C\uACFC \uBCF4\uC5B4, \uBC14\uB2E5 \uAD6C\uBA4D \uB137"},{id:"elbow",name:"\uC0AC\uAC01 \uD50C\uB79C\uC9C0 \uACE1\uAD00",file:"assets/part2/elbow.svg",result:null,level:3,views:2,note:"\uC2A4\uC715\uC774 \uD544\uC694\uD574 \uB9CC\uB4E4\uC9C0 \uBABB\uD569\uB2C8\uB2E4"}],ir={1:{cls:"l1",ko:"1\uB2E8\uACC4 \xB7 \uAC01\uAE30\uB465",note:"\uC815\uD655\uD788 \uB098\uC635\uB2C8\uB2E4."},2:{cls:"l2",ko:"2\uB2E8\uACC4 \xB7 \uC6D0\uD1B5 \uADFC\uC0AC",note:"\uC548\uCABD \uD615\uC0C1\uC740 \uADFC\uC0AC\uC785\uB2C8\uB2E4."},3:{cls:"l3",ko:"3\uB2E8\uACC4 \xB7 \uACE1\uBA74",note:"\uB9CC\uB4E4\uC9C0 \uBABB\uD558\uB294 \uBD80\uB958\uC785\uB2C8\uB2E4."}},ce={image:null,raster:null,png:null,views:[],pick:null,roles:{},projection:"third",ocr:null,tokens:[],scale:null,mmPerPx:0,part:null,name:"",sample:null,showDims:!1},sc=ae("stage"),Tn=new Pl({antialias:!0});Tn.setPixelRatio(Math.min(devicePixelRatio,2));Tn.outputColorSpace=It;Tn.toneMapping=Zr;Tn.toneMappingExposure=1.45;Tn.shadowMap.enabled=!0;Tn.shadowMap.type=Oa;sc.appendChild(Tn.domElement);var ps=new Hn;ps.background=new Be(789520);ps.environment=new Qs(Tn).fromScene(new Ul,.04).texture;var Un=new Ht(38,1,.5,12e3);Un.position.set(180,140,240);var So=new Dl(Un,Tn.domElement);So.enableDamping=!0;So.dampingFactor=.075;var En=new Ws(16777215,2.3);En.position.set(220,400,260);En.castShadow=!0;En.shadow.mapSize.set(2048,2048);En.shadow.camera.near=20;En.shadow.camera.far=2200;En.shadow.camera.left=En.shadow.camera.bottom=-500;En.shadow.camera.right=En.shadow.camera.top=500;En.shadow.bias=-.0012;En.shadow.normalBias=.7;ps.add(En,new Ws(13161215,.5).translateX(-320).translateY(180).translateZ(140),new Hr(12897501,3816776,1.05),new Wr(16777215,.25));var Wu=new Xr(2400,60,2763316,1710624);Wu.material.transparent=!0;Wu.material.opacity=.5;ps.add(Wu);var km=new at(new Pr(1200,64).rotateX(-Math.PI/2),new kr({opacity:.4}));km.receiveShadow=!0;ps.add(km);var on=new jt;ps.add(on);var ku=Ip();function Xu(){let n=sc.clientWidth,e=sc.clientHeight;!n||!e||(Tn.setSize(n,e),Un.aspect=n/e,Un.updateProjectionMatrix())}new ResizeObserver(Xu).observe(sc);Xu();Tn.setAnimationLoop(()=>{So.update(),Tn.render(ps,Un)});function zm(){if(!on.children.length)return;let n=new Yt().setFromObject(on),e=n.getCenter(new I),t=Math.max(10,n.getSize(new I).length()/2);So.target.copy(e);let i=li.degToRad(Un.fov/2),s=Math.atan(Math.tan(i)*Math.max(.6,Un.aspect));Un.position.copy(e).add(new I(.5,.45,.75).normalize().multiplyScalar(t/Math.sin(Math.min(i,s))*1.15)),Un.near=Math.max(.2,t/80),Un.far=t*90,Un.updateProjectionMatrix(),So.update()}ae("btnFit").onclick=zm;function Vm(){for(let n of on.children.slice())on.remove(n),n.geometry?.dispose();ce.part=null}function wo(n){ae("sheet").classList.toggle("show",n),ae("btnSheet").classList.toggle("on",n)}ae("btnSheet").onclick=()=>wo(!ae("sheet").classList.contains("show"));ae("btnDims").onclick=()=>{ce.showDims=!ce.showDims,ae("btnDims").classList.toggle("on",ce.showDims),rc(),wo(!0)};async function qb(n,e){let t=new Image;await new Promise((h,u)=>{t.onload=h,t.onerror=()=>u(new Error("\uC774\uBBF8\uC9C0\uB97C \uC5F4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4")),t.src=n});let i=t.naturalWidth||t.width,s=t.naturalHeight||t.height,r=e?Math.min(2.6,Math.max(1,2400/Math.max(1,i))):Math.min(1.6,2400/Math.max(1,i)),o=Math.max(500,Math.round(i*r)),a=Math.max(300,Math.round(s*r)),l=document.createElement("canvas");l.width=o,l.height=a;let c=l.getContext("2d",{willReadFrequently:!0});return c.fillStyle="#fff",c.fillRect(0,0,o,a),c.drawImage(t,0,0,o,a),{imageData:c.getImageData(0,0,o,a),w:o,h:a,png:l.toDataURL("image/png")}}var Yb=n=>"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n);async function Hu(n){qm(!1);let e=n.svg?Yb(n.svg):n.dataUrl,t;try{t=await qb(e,!!n.svg)}catch(i){return wn(`\uB3C4\uBA74\uC744 \uC5F4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: ${i.message}`)}ce.image={url:t.png,w:t.w,h:t.h},ce.raster=t.imageData,ce.png=t.png,ce.name=n.name,ce.sample=n.sample||null,ae("projName").textContent=n.name,ae("sheetImg").src=t.png,ae("stageEmpty").style.display="none",wo(!0),await Zb(),await $m(),$u?.ready("right",!0)}async function Zb(){let n=[{text:"\uC678\uD615\uC120\uB9CC \uB0A8\uAE30\uACE0 \uC131\uBD84 \uCC3E\uAE30",state:"run"},{text:"\uAC00\uAE4C\uC6B4 \uC131\uBD84\uC744 \uBDF0\uB85C \uBB36\uAE30"},{text:"\uC724\uACFD \xB7 \uAD6C\uBA4D \uB530\uAE30, \uBC30\uCE58\uB85C \uBC29\uD5A5 \uCD94\uCC9C"}];xn(!0,"\uBDF0 \uB098\uB204\uAE30","",n),await Mo(60);let e=hp(ce.raster);if(!e.ok){xn(!1),wn(e.reason||"\uBDF0\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4");return}ce.views=e.views.map(t=>Object.assign(t,{contours:fp(t)})),ce.roles=Kh(ce.views,ce.projection),n.forEach(t=>t.state="done"),xn(!0,"\uBDF0 \uB098\uB204\uAE30","",n),await Mo(100),xn(!1),ae("viewBlock").style.display="",ae("methodBlock").style.display="",Hm(),rc(),oc(),sr(),Yu(ce.views.find(t=>ce.roles[t.id]==="front")||ce.views[0]),wn(`\uBDF0 ${ce.views.length}\uAC1C. \uBC29\uD5A5\uC744 \uD655\uC778\uD558\uC138\uC694`,!0)}ae("projSeg").onclick=n=>{let e=n.target.closest("button");e&&(document.querySelectorAll("#projSeg button").forEach(t=>t.classList.toggle("on",t===e)),ce.projection=e.dataset.p,ce.roles=Kh(ce.views,ce.projection),qu())};function Hm(){ae("viewCount").textContent=`${ce.views.length}\uAC1C`,ae("viewList").innerHTML=ce.views.map(n=>`
    <div class="vrow ${ce.pick===n?"on":""}" data-v="${n.id}">
      <span class="n">${n.id}</span>
      <span class="m">${n.part.W}\xD7${n.part.H} px<br/><small>${_t("\uAD6C\uBA4D")} ${n.contours.holes.length}${n.contours.ignored.length?` \xB7 ${_t("\uC548\uCABD \uBAA8\uC11C\uB9AC")} ${n.contours.ignored.length}`:""} \xB7 ${_t("\uD68C\uC804\uCCB4 \uC810\uC218")} ${n.revolveScore.toFixed(2)}</small></span>
      <select data-role="${n.id}">${ho.map(e=>`<option value="${e.id}" ${ce.roles[n.id]===e.id?"selected":""}>${_t(e.ko)}</option>`).join("")}</select>
    </div>`).join("")}ae("viewList").addEventListener("click",n=>{if(n.target.tagName==="SELECT")return;let e=n.target.closest("[data-v]");e&&Yu(ce.views.find(t=>t.id===Number(e.dataset.v)))});ae("viewList").addEventListener("change",n=>{let e=n.target;e.dataset.role&&Gu(Number(e.dataset.role),e.value)});function Gu(n,e){if(hi(e))for(let t of Object.keys(ce.roles))Number(t)!==n&&ce.roles[t]===e&&(ce.roles[t]="skip");ce.roles[n]=e,qu()}function qu(){Hm(),rc(),oc(),sr()}function Yu(n){ce.pick=n||null,ae("pickTag").textContent=n?`${_t("\uBDF0")} ${n.id}`:_t("\uBDF0 \uC5C6\uC74C"),qu()}function rc(){let n=ae("ov");if(!ce.image)return;let{w:e,h:t}=ce.image;n.setAttribute("viewBox",`0 0 ${e} ${t}`),n.setAttribute("preserveAspectRatio","none");let i=ce.views.map(s=>{let r=ce.roles[s.id],o=!hi(r);return`<rect class="vbox ${ce.pick===s?"on":""} ${o?"ref":""}" data-v="${s.id}" x="${s.part.x0-8}" y="${s.part.y0-8}" width="${s.part.W+16}" height="${s.part.H+16}" rx="6"/>
      <text class="vlab" x="${s.part.x0-2}" y="${s.part.y0-14}">${s.id}</text><text class="vlab role" x="${s.part.x0+16}" y="${s.part.y0-14}">${fs(r)}</text>`}).join("");if(ce.showDims&&ce.scale){let s=new Set((ce.scale.used||[]).map(r=>r.text));i+=ce.tokens.map(r=>`<rect class="dimtok ${s.has(r.text)?"used":""}" x="${r.x0-2}" y="${r.y0-2}" width="${r.x1-r.x0+4}" height="${r.y1-r.y0+4}" rx="3"/>`).join("")}n.innerHTML=i,n.querySelectorAll(".vbox").forEach(s=>s.onclick=()=>Yu(ce.views.find(r=>r.id===Number(s.dataset.v))))}var Bm=[{id:"top",pts:"75,12 138,42 75,72 12,42",tx:75,ty:46},{id:"front",pts:"12,42 75,72 75,132 12,102",tx:43,ty:92},{id:"right",pts:"75,72 138,42 138,102 75,132",tx:107,ty:92}];function oc(){let n=new Map(Object.entries(ce.roles).map(([t,i])=>[i,Number(t)])),e=ce.pick?ce.roles[ce.pick.id]:null;ae("cube").innerHTML=Bm.map(t=>{let i=n.get(t.id);return`<polygon class="f ${i?"assigned":"free"} ${e===t.id?"on":""}" data-face="${t.id}" points="${t.pts}" stroke="#0C0C10" stroke-width="1.5"/>
      <text x="${t.tx}" y="${t.ty}">${fs(t.id)}${i?` \xB7 ${_t("\uBDF0")} ${i}`:""}</text>`}).join(""),ae("cube").querySelectorAll(".f").forEach(t=>t.onclick=()=>{if(!ce.pick)return wn("\uBA3C\uC800 \uBDF0\uB97C \uACE0\uB974\uC138\uC694");Gu(ce.pick.id,t.dataset.face)}),ae("roleBtns").innerHTML=ho.filter(t=>!Bm.some(i=>i.id===t.id)).map(t=>{let i=n.get(t.id);return`<button data-role="${t.id}" class="${e===t.id?"on":""}">${_t(t.ko)}${i&&hi(t.id)?` \xB7 ${_t("\uBDF0")} ${i}`:""}</button>`}).join(""),ae("roleBtns").querySelectorAll("button").forEach(t=>t.onclick=()=>{if(!ce.pick)return wn("\uBA3C\uC800 \uBDF0\uB97C \uACE0\uB974\uC138\uC694");Gu(ce.pick.id,t.dataset.role)}),ae("cubeHint").innerHTML=ce.pick?`<b>${_t("\uBDF0")} ${ce.pick.id}</b>: <b>${fs(ce.roles[ce.pick.id])}</b>`:"\uC67C\uCABD \uBAA9\uB85D\uC774\uB098 \uB3C4\uBA74 \uC704 \uC0C1\uC790\uC5D0\uC11C \uBDF0\uB97C \uACE0\uB978 \uB4A4 \uBA74\uC744 \uB204\uB974\uC138\uC694."}var zu=null;async function Gm(){return zu||(ae("ocrTag").textContent="\uBB38\uC790 \uC778\uC2DD \uBD88\uB7EC\uC624\uB294 \uC911\u2026",zu=pp({workerPath:"./vendor/tesseract/worker.min.js",corePath:"./vendor/tesseract/",langPath:"./vendor/tesseract"},Xb).then(n=>(ae("ocrTag").textContent="\uBB38\uC790 \uC778\uC2DD \uC900\uBE44\uB428",n)).catch(n=>{throw ae("ocrTag").textContent="\uBB38\uC790 \uC778\uC2DD \uC5C6\uC74C",n})),zu}async function $m(){if(!ce.raster)return;ae("dimBlock").style.display="",ae("dimTag").textContent="\uC77D\uB294 \uC911\u2026",ae("dimList").innerHTML="",ae("dimNote").textContent="";let n;try{n=await Gm()}catch(o){return Vu(`\uBB38\uC790 \uC778\uC2DD \uC5D4\uC9C4\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4 (${o.message}).`)}let e=performance.now();try{ce.tokens=await mp(n,ce.png),ce.scale=gp(ce.tokens,ce.raster)}catch(o){return Vu(`\uCE58\uC218\uB97C \uC77D\uB294 \uC911 \uC624\uB958: ${o.message}`)}let t=ce.scale,i=Math.round(performance.now()-e);ae("dimTag").textContent=`${ce.tokens.length}\uAC1C \uC77D\uC74C \xB7 ${(i/1e3).toFixed(1)}\uCD08`;let s=new Set((t.used||[]).map(o=>o.text)),r=new Set((t.rejected||[]).map(o=>o.text));ae("dimList").innerHTML=ce.tokens.map(o=>`<span class="${s.has(o.text)?"used":r.has(o.text)?"rej":""}" title="${o.kind}">${o.text}</span>`).join(""),t.ok?(ce.mmPerPx=t.mmPerPx,ae("dimScale").textContent=`1 px = ${t.mmPerPx.toFixed(4)} mm`,ae("dimAgree").textContent=`${t.agree} / ${t.total}`,ae("dimNote").innerHTML=t.agree<3?"\uB9DE\uB294 \uCE58\uC218\uAC00 \uC801\uC2B5\uB2C8\uB2E4. \uC544\uB294 \uCE58\uC218 \uD558\uB098\uB97C \uB123\uC5B4 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":"\uC5EC\uB7EC \uCE58\uC218\uAC00 \uAC19\uC740 \uCD95\uCC99\uC744 \uAC00\uB9AC\uD0B5\uB2C8\uB2E4.",ae("dimManual").style.display=t.agree<3?"":"none"):Vu(t.reason||"\uCE58\uC218\uB97C \uC77D\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4."),rc(),sr()}function Vu(n){ce.mmPerPx=0,ce.scale=ce.scale&&ce.scale.ok?ce.scale:{ok:!1,used:[],rejected:[]},ae("dimTag").textContent="\uC77D\uC9C0 \uBABB\uD568",ae("dimScale").textContent="\u2014",ae("dimAgree").textContent="\u2014",ae("dimNote").innerHTML=`${n} \uACE0\uB978 \uBDF0\uC758 \uAC00\uB85C \uC2E4\uC81C \uAE38\uC774\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694.`,ae("dimManual").style.display="",sr()}ae("btnReadDims").onclick=$m;ae("manualLen").onchange=()=>{let n=Number(ae("manualLen").value),e=ce.pick;!n||!e||(ce.mmPerPx=n/e.part.W,ae("dimScale").textContent=`1 px = ${ce.mmPerPx.toFixed(4)} mm (\uBDF0 ${e.id} \uAC00\uB85C ${n} mm \uC785\uB825)`,sr(),wn("\uC785\uB825\uD55C \uCE58\uC218\uB85C \uCD95\uCC99\uC744 \uC815\uD588\uC2B5\uB2C8\uB2E4",!0))};var Kb=()=>document.querySelector("#methodSeg button.on")?.dataset.m||"auto";ae("methodSeg").onclick=n=>{let e=n.target.closest("button");e&&(document.querySelectorAll("#methodSeg button").forEach(t=>t.classList.toggle("on",t===e)),sr())};function Wm(){return ce.views.map(n=>({view:n,role:ce.roles[n.id]||"skip"}))}function Xm(){let n=Kb();return n!=="auto"?{method:n,why:"\uC9C1\uC811 \uACE0\uB984"}:Tp(Wm())}function sr(){let n=Xm();ae("methodWhy").textContent=n.why,ae("thickRow").style.display=n.method==="plate"?"":"none";let e=ce.sample?.level;ae("levelNote").innerHTML=e?`<span class="lvl ${ir[e].cls}">${ir[e].ko}</span> ${ir[e].note}`:"";let t=n.method!=="none"&&n.method!=="unsupported"&&ce.mmPerPx>0;ae("btnMake").disabled=!t,ae("btnMake").textContent=n.method==="unsupported"?"\uC774 \uBD80\uB958\uB294 \uB9CC\uB4E4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4":ce.mmPerPx?"\uBD80\uD488 \uB9CC\uB4E4\uAE30":"\uBA3C\uC800 \uCE58\uC218\uB97C \uC815\uD574 \uC8FC\uC138\uC694"}ae("btnMake").onclick=async()=>{let n=Xm();if(!ce.mmPerPx)return;let e=[{text:"\uBDF0\uB9C8\uB2E4 \uC724\uACFD\uC744 \uADF8 \uBC29\uD5A5\uC73C\uB85C \uBC00\uC5B4\uB0B4\uAE30",state:"run"},{text:"\uC804\uBD80 \uAD50\uC9D1\uD569\uD558\uAE30"},{text:"\uAC01 \uBDF0\uB85C \uB2E4\uC2DC \uD22C\uC601\uD574 \uB3C4\uBA74\uACFC \uB300\uC870"}];xn(!0,"\uBD80\uD488 \uB9CC\uB4E4\uAE30","",e),await Mo(60),Vm();let t=null,i=null,s=ce.mmPerPx,r=Wm();if(n.method==="ortho"){let a=Sp(r,s,{});if(!a.ok)return xn(!1),wn(a.reason);e[0].state=e[1].state="done",e[2].state="run",xn(!0,"\uBD80\uD488 \uB9CC\uB4E4\uAE30","",e),await Mo(30);let l=r.filter(c=>hi(c.role)).map(c=>({...wp(a.geometry,c.view,c.role,s,a.ext),viewId:c.view.id}));a.geometry.center(),t=new at(a.geometry,ku.plate.clone()),i={kind:"ortho",size:a.size,volume:a.volume_cm3,ious:l,checks:a.checks,notes:a.notes}}else if(n.method==="revolve"){let a=r.find(f=>hi(f.role));if(!a)return xn(!1),wn("\uD68C\uC804\uCCB4\uB85C \uBCFC \uBDF0\uB97C \uC815\uD574 \uC8FC\uC138\uC694");let l=up(a.view,420),c=Float64Array.from(l,f=>f*s);t=Lp(c,a.view.part.W*s,{material:ku.revolve.clone()});let h=new Yt().setFromObject(t),u=h.getSize(new I);i={kind:"revolve",size:{X:u.x,Y:u.y,Z:u.z},volume:Hl(t.geometry)/1e3,ious:[],checks:[],notes:["\uBDF0 \uD558\uB098\uB97C \uCD95 \uB458\uB808\uB85C \uB3CC\uB838\uC2B5\uB2C8\uB2E4"]}}else if(n.method==="plate"){let a=r.find(d=>hi(d.role));if(!a)return xn(!1),wn("\uD310\uC73C\uB85C \uBCFC \uBDF0\uB97C \uC815\uD574 \uC8FC\uC138\uC694");let l=Math.max(.2,Number(ae("thick").value)||10),c=a.view.contours.outer.map(([d,g])=>[d*s,g*s]),h=a.view.contours.holes.map(d=>d.map(([g,y])=>[g*s,y*s]));if(t=Np(c,h,l,{material:ku.plate.clone()}),!t)return xn(!1),wn("\uC724\uACFD\uC73C\uB85C \uD615\uC0C1\uC744 \uB9CC\uB4E4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4");let u=new Yt().setFromObject(t),f=u.getSize(new I);i={kind:"plate",size:{X:f.x,Y:f.y,Z:f.z},volume:Hl(t.geometry)/1e3,ious:[],checks:[],notes:[`\uB450\uAED8 ${l} mm \uB294 \uC785\uB825\uAC12\uC785\uB2C8\uB2E4`]}}else{xn(!1);return}t.castShadow=t.receiveShadow=!0;let o=new Yt().setFromObject(t);t.position.y-=o.min.y,on.add(t),ce.part={mesh:t,result:i},$u?.show("stage"),e.forEach(a=>a.state="done"),xn(!0,"\uBD80\uD488 \uB9CC\uB4E4\uAE30","",e),await Mo(120),xn(!1),wo(!1),zm(),Jb(),jb(),wn("\uBD80\uD488\uC744 \uB9CC\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4",!0)};function Jb(){let n=ce.part;if(!n)return ae("resultBlock").style.display="none";let e=n.result;ae("resultBlock").style.display="";let t=ce.sample?.level||(e.kind==="ortho"?1:2);ae("lvlTag").className=`lvl ${ir[t].cls}`,ae("lvlTag").textContent=ir[t].ko,ae("rSize").textContent=`${tc(e.size.X)} \xD7 ${tc(e.size.Y)} \xD7 ${tc(e.size.Z)} mm`,ae("rVol").textContent=`${tc(e.volume,1)} cm\xB3`,ae("rTris").textContent=`${(n.mesh.geometry.attributes.position.count/3).toLocaleString()}\uAC1C`;let i=e.ious.map(r=>{let o=r.iou*100,a=o>=95?"ok":o>=85?"warn":"bad";return`<div class="r"><span>${fs(r.role)}</span><b class="${a}">${o.toFixed(1)}%</b></div>`});for(let r of e.checks)i.push(`<div class="r"><span>${r.axis} ${_t("\uD06C\uAE30")} \xB7 ${fs(r.a.role)} ${_t("\uC640")} ${fs(r.b.role)}</span><b class="${r.ok?"ok":"warn"}">\uCC28\uC774 ${r.diffPct}%</b></div>`);ae("rChecks").innerHTML=i.join("")||'<div class="mini">\uB300\uC870\uD560 \uC815\uD22C\uC0C1 \uBDF0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</div>';let s=e.ious.filter(r=>r.iou<.9);ae("rNote").innerHTML=(e.notes||[]).concat(s.length?[_t("{} \uC815\uD569\uC774 \uB0AE\uC2B5\uB2C8\uB2E4. \uBC29\uD5A5\uACFC \uAD6C\uBA4D\uC744 \uD655\uC778\uD558\uC138\uC694.",{"":s.map(r=>fs(r.role)).join(", ")})]:[]).join("<br/>")}function jb(){if(!ce.part)return ae("exportBlock").style.display="none";ae("exportBlock").style.display="";let n=(ce.name||"part").replace(/\.[^.]+$/,"").replace(/[^A-Za-z0-9_-]+/g,"_")||"part",e=(s,r,o)=>{let a=document.createElement("div");return a.className="exp",a.innerHTML=`<span class="f">${s}</span><span class="n">${r}</span><button title="\uB0B4\uB824\uBC1B\uAE30"><svg><use href="#i-dl"/></svg></button>`,a.querySelector("button").onclick=o,a},t=ae("dlList");t.innerHTML="";let i={part2:!0,sheet:ce.name,mm_per_px:ce.mmPerPx,roles:Object.fromEntries(ce.views.map(s=>[s.id,ce.roles[s.id]])),result:ce.part.result};t.appendChild(e("STEP\xB7\uBA74","\uC0BC\uAC01\uD615 \uBA74 \uC178 (\uAD50\uC9D1\uD569 \uACB0\uACFC\uB294 \uC194\uB9AC\uB4DC\uB85C \uB2EB\uD788\uC9C0 \uC54A\uC74C)",()=>Yn(mm(on,n),`${n}.step`,"application/step"))),t.appendChild(e("STL","3D \uD504\uB9B0\uD305",()=>Yn(xm(on),`${n}.stl`,"model/stl"))),t.appendChild(e("GLB","\uC7AC\uC9C8 \uD3EC\uD568 \xB7 \uC6F9 \uBDF0\uC5B4",async()=>Yn(await ym(on),`${n}.glb`,"model/gltf-binary"))),t.appendChild(e("OBJ","\uBA54\uC2DC (mm)",()=>Yn(gm(on),`${n}.obj`,"text/plain"))),t.appendChild(e("FBX","Maya, 3ds Max, Unity, Unreal",()=>Yn(Cu(on),`${n}.fbx`,"application/octet-stream"))),t.appendChild(e("USD","\uBA54\uC2DC\uC640 \uBDF0\xB7\uCE58\uC218 \uC815\uBCF4\uB97C \uD568\uAED8",()=>Yn(bm(on,i),`${n}.usda`,"text/plain"))),t.appendChild(e("USDZ","AR \uBBF8\uB9AC\uBCF4\uAE30 \uD328\uD0A4\uC9C0",async()=>Yn(await Mm(on),`${n}.usdz`,"model/vnd.usdz+zip"))),t.appendChild(e("PLY","\uC815\uC810\uACFC \uBA74",()=>Yn(vm(on),`${n}.ply`,"text/plain"))),t.appendChild(e("JSON","\uBDF0 \uBC29\uD5A5 \xB7 \uCD95\uCC99 \xB7 \uACB0\uACFC",()=>Yn(new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),`${n}.part2.json`))),ae("exportNote").textContent=""}function xn(n,e,t,i){ae("gen").classList.toggle("on",n),e&&(ae("genTitle").textContent=e),t!==void 0&&(ae("genSub").textContent=t),ae("genBar").style.width=`${(i||[]).filter(s=>s.state==="done").length/Math.max(1,(i||[]).length)*100}%`,ae("genSteps").innerHTML=(i||[]).map(s=>`<div class="gen-step ${s.state||""}"><span class="dot"></span>${s.text}</div>`).join("")}function qm(n=!0){Vm(),ce.views=[],ce.pick=null,ce.roles={},ce.tokens=[],ce.scale=null,ce.mmPerPx=0,ce.sample=null;for(let e of["viewBlock","dimBlock","methodBlock","resultBlock","exportBlock"])ae(e).style.display="none";ae("ov").innerHTML="",ae("manualLen").value="",ae("dimManual").style.display="none",oc(),ae("pickTag").textContent="\uBDF0 \uC5C6\uC74C",n&&(ce.image=null,ce.raster=null,ae("projName").textContent="\uC0C8 \uB3C4\uBA74",wo(!1),ae("stageEmpty").style.display="")}ae("btnNew").onclick=()=>{qm(!0),wn("\uCC98\uC74C\uC73C\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4")};var ds=ae("drop"),bo=ae("file"),Ym="vringon.part2.check.v2";function Zm(){ae("checkModal").classList.add("show")}function Km(n){if(ae("checkModal").classList.remove("show"),ae("chkSkip").checked)try{localStorage.setItem(Ym,"1")}catch{}n&&bo.click()}ae("btnPickFile").onclick=()=>Km(!0);ae("checkModal").onclick=n=>{n.target===ae("checkModal")&&Km(!1)};ae("linkCheck").onclick=n=>{n.preventDefault(),Zm()};ds.onclick=()=>{let n=!1;try{n=localStorage.getItem(Ym)==="1"}catch{}n?bo.click():Zm()};bo.onchange=async()=>{let n=bo.files[0];n&&await Jm(n),bo.value=""};ds.ondragover=n=>{n.preventDefault(),ds.classList.add("over")};ds.ondragleave=()=>ds.classList.remove("over");ds.ondrop=async n=>{n.preventDefault(),ds.classList.remove("over");let e=n.dataTransfer.files?.[0];e&&await Jm(e)};async function Jm(n){if(/svg/i.test(n.type)||/\.svg$/i.test(n.name))return Hu({name:n.name,svg:await n.text()});let t=await new Promise((i,s)=>{let r=new FileReader;r.onload=()=>i(r.result),r.onerror=s,r.readAsDataURL(n)});return Hu({name:n.name,dataUrl:t})}ae("chips").innerHTML=ic.map(n=>`<button class="sample" data-id="${n.id}" title="${n.name}"><img class="thumb" src="./${n.file}?v=${nc}" alt="" loading="lazy" style="background:#fff" /><span class="lb">${n.name}</span></button>`).join("");async function jm(n){let e=ic.find(i=>i.id===n);if(!e)return;let t=await fetch(`./${e.file}?v=${nc}`).then(i=>i.text());await Hu({name:e.name,svg:t,sample:e})}ae("chips").onclick=n=>{let e=n.target.closest(".sample");e&&jm(e.dataset.id)};function Qb(){ae("libCount").textContent=`${ic.length}`,ae("libGrid").innerHTML=ic.map(n=>{let e=ir[n.level],t=n.result?`<figure><img src="./${n.result}?v=${nc}" alt="" loading="lazy" /><figcaption>${_t("\uBCF5\uC6D0 \uACB0\uACFC")}</figcaption></figure>`:`<figure class="none"><span>${_t("\uB9CC\uB4E4\uC9C0 \uBABB\uD558\uB294 \uBD80\uB958")}</span></figure>`;return`<button class="item" data-id="${n.id}">
      <div class="pair"><figure><img src="./${n.file}?v=${nc}" alt="" loading="lazy" /><figcaption>${_t("\uB3C4\uBA74")}</figcaption></figure>${t}</div>
      <div class="meta"><div class="t">${_t(n.name)}</div>
      <div class="d">${_t("\uC815\uD22C\uC0C1 {n}\uBDF0",{n:n.views})} \xB7 ${_t(e.ko)} \xB7 ${_t(n.note)}</div></div>
    </button>`}).join("")}ae("libGrid").onclick=n=>{let e=n.target.closest(".item");e&&(Zu(),jm(e.dataset.id))};function e1(){ae("lib").style.display="",ae("wsBody").style.display="none",Qb()}function Zu(){ae("lib").style.display="none",ae("wsBody").style.display="",Xu()}ae("btnLib").onclick=()=>ae("lib").style.display==="none"?e1():Zu();ae("btnLibClose").onclick=Zu;oc();Om({current:2});Um();$u=Fm({leftKo:"\uB3C4\uBA74",rightKo:"\uC124\uC815"});Cm("part2");Gm().catch(()=>{});
