var ii={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jc=0,dl=1,Kc=2;var Ks=1,Sa=2,ts=3,Fn=0,Lt=1,wn=2,Tn=0,yi=1,fl=2,pl=3,ml=4,jc=5;var jn=100,Qc=101,eh=102,th=103,nh=104,ih=200,sh=201,rh=202,ah=203,Vr=204,Gr=205,oh=206,lh=207,ch=208,hh=209,uh=210,dh=211,fh=212,ph=213,mh=214,Hr=0,Wr=1,Xr=2,vi=3,qr=4,Yr=5,Zr=6,$r=7,wa=0,gh=1,_h=2,pn=0,gl=1,_l=2,xl=3,js=4,yl=5,vl=6,Ml=7;var bl=300,ri=301,Ti=302,Ta=303,Ea=304,Qs=306,Jr=1e3,Mn=1001,Kr=1002,At=1003,xh=1004;var er=1005;var It=1006,Aa=1007;var ai=1008;var Wt=1009,Sl=1010,wl=1011,ns=1012,Ca=1013,mn=1014,nn=1015,En=1016,Ra=1017,Pa=1018,is=1020,Tl=35902,El=35899,Al=1021,Cl=1022,sn=1023,bn=1026,oi=1027,Ia=1028,Da=1029,li=1030,La=1031;var Na=1033,tr=33776,nr=33777,ir=33778,sr=33779,Ua=35840,Fa=35841,Oa=35842,Ba=35843,ka=36196,za=37492,Va=37496,Ga=37488,Ha=37489,rr=37490,Wa=37491,Xa=37808,qa=37809,Ya=37810,Za=37811,$a=37812,Ja=37813,Ka=37814,ja=37815,Qa=37816,eo=37817,to=37818,no=37819,io=37820,so=37821,ro=36492,ao=36494,oo=36495,lo=36283,co=36284,ar=36285,ho=36286;var Ms=2300,jr=2301,zr=2302,nl=2303,il=2400,sl=2401,rl=2402;var yh=3200;var or=0,vh=1,kn="",kt="srgb",bs="srgb-linear",Ss="linear",Je="srgb";var _i=7680;var al=519,Mh=512,bh=513,Sh=514,uo=515,wh=516,Th=517,fo=518,Eh=519,ol=35044;var Rl="300 es",hn=2e3,qi=2001;function Zu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $u(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ah(){let i=ws("canvas");return i.style.display="block",i}var Sc={},Yi=null;function Pl(...i){let e="THREE."+i.shift();Yi?Yi("log",e,...i):console.log(e,...i)}function Ch(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Te(...i){i=Ch(i);let e="THREE."+i.shift();if(Yi)Yi("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Pe(...i){i=Ch(i);let e="THREE."+i.shift();if(Yi)Yi("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function xi(...i){let e=i.join(" ");e in Sc||(Sc[e]=!0,Te(...i))}function Rh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Ph={[Hr]:Wr,[Xr]:Zr,[qr]:$r,[vi]:Yr,[Wr]:Hr,[Zr]:Xr,[$r]:qr,[Yr]:vi},dn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wc=1234567,ys=Math.PI/180,Zi=180/Math.PI;function ss(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function ze(i,e,t){return Math.max(e,Math.min(t,i))}function Il(i,e){return(i%e+e)%e}function Ju(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ku(i,e,t){return i!==e?(t-i)/(e-i):0}function vs(i,e,t){return(1-t)*i+t*e}function ju(i,e,t,n){return vs(i,e,1-Math.exp(-t*n))}function Qu(i,e=1){return e-Math.abs(Il(i,e*2)-e)}function ed(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function td(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function nd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function id(i,e){return i+Math.random()*(e-i)}function sd(i){return i*(.5-Math.random())}function rd(i){i!==void 0&&(wc=i);let e=wc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ad(i){return i*ys}function od(i){return i*Zi}function ld(i){return(i&i-1)===0&&i!==0}function cd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ud(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),f=r((e-n)/2),h=a((e-n)/2),p=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*f,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*_,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*_,o*c);break;case"ZYZ":i.set(l*_,l*p,o*u,o*c);break;default:Te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var lr={DEG2RAD:ys,RAD2DEG:Zi,generateUUID:ss,clamp:ze,euclideanModulo:Il,mapLinear:Ju,inverseLerp:Ku,lerp:vs,damp:ju,pingpong:Qu,smoothstep:ed,smootherstep:td,randInt:nd,randFloat:id,randFloatSpread:sd,seededRandom:rd,degToRad:ad,radToDeg:od,isPowerOfTwo:ld,ceilPowerOfTwo:cd,floorPowerOfTwo:hd,setQuaternionFromProperEuler:ud,normalize:Bt,denormalize:Wi},Re=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],p=r[a+1],_=r[a+2],v=r[a+3];if(f!==v||l!==h||c!==p||u!==_){let m=l*h+c*p+u*_+f*v;m<0&&(h=-h,p=-p,_=-_,v=-v,m=-m);let d=1-o;if(m<.9995){let E=Math.acos(m),A=Math.sin(E);d=Math.sin(d*E)/A,o=Math.sin(o*E)/A,l=l*d+h*o,c=c*d+p*o,u=u*d+_*o,f=f*d+v*o}else{l=l*d+h*o,c=c*d+p*o,u=u*d+_*o,f=f*d+v*o;let E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],h=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+u*f+l*p-c*h,e[t+1]=l*_+u*h+c*f-o*p,e[t+2]=c*_+u*p+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),h=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lo.copy(this).projectOnVector(e),this.sub(Lo)}reflect(e){return this.sub(Lo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lo=new I,Tc=new zt,Le=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],_=n[8],v=s[0],m=s[3],d=s[6],E=s[1],A=s[4],M=s[7],T=s[2],S=s[5],C=s[8];return r[0]=a*v+o*E+l*T,r[3]=a*m+o*A+l*S,r[6]=a*d+o*M+l*C,r[1]=c*v+u*E+f*T,r[4]=c*m+u*A+f*S,r[7]=c*d+u*M+f*C,r[2]=h*v+p*E+_*T,r[5]=h*m+p*A+_*S,r[8]=h*d+p*M+_*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,p=c*r-a*l,_=t*f+n*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return e[0]=f*v,e[1]=(s*c-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return xi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(No.makeScale(e,t)),this}rotate(e){return xi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(No.makeRotation(-e)),this}translate(e,t){return xi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(No.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},No=new Le,Ec=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ac=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dd(){let i={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Je&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===kn?Ss:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return xi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return xi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[bs]:{primaries:e,whitePoint:n,transfer:Ss,toXYZ:Ec,fromXYZ:Ac,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:Ec,fromXYZ:Ac,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),i}var He=dd();function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ii,Qr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ii===void 0&&(Ii=ws("canvas")),Ii.width=e.width,Ii.height=e.height;let s=Ii.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ii}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ws("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Un(t[n]/255)*255):t[n]=Un(t[n]);return{data:t,width:e.width,height:e.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fd=0,$i=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=ss(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Uo(s[a].image)):r.push(Uo(s[a]))}else r=Uo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Uo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}var pd=0,Fo=new I,Ht=class i extends dn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Mn,s=Mn,r=It,a=ai,o=sn,l=Wt,c=i.DEFAULT_ANISOTROPY,u=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=ss(),this.name="",this.source=new $i(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fo).x}get height(){return this.source.getSize(Fo).y}get depth(){return this.source.getSize(Fo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Te(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Te(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jr:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case Kr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jr:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case Kr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=bl;Ht.DEFAULT_ANISOTROPY=1;var lt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,M=(p+1)/2,T=(d+1)/2,S=(u+h)/4,C=(f+v)/4,x=(_+m)/4;return A>M&&A>T?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=S/n,r=C/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=x/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=x/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(f-v)/E,this.z=(h-u)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ea=class extends dn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Ht(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new $i(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$t=class extends ea{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ts=class extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ta=class extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var it=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,u,f,h,p,_,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,h,p,_,v,m)}set(e,t,n,s,r,a,o,l,c,u,f,h,p,_,v,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Di.setFromMatrixColumn(e,0).length(),r=1/Di.setFromMatrixColumn(e,1).length(),a=1/Di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=a*u,p=a*f,_=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,p=l*f,_=c*u,v=c*f;t[0]=h+v*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,p=l*f,_=c*u,v=c*f;t[0]=h-v*o,t[4]=-a*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,p=a*f,_=o*u,v=o*f;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,p=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=v-h*f,t[8]=_*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+_,t[10]=h-v*f}else if(e.order==="XZY"){let h=a*l,p=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=a*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(md,e,gd)}lookAt(e,t,n){let s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Xn.crossVectors(n,Yt),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Xn.crossVectors(n,Yt)),Xn.normalize(),_r.crossVectors(Yt,Xn),s[0]=Xn.x,s[4]=_r.x,s[8]=Yt.x,s[1]=Xn.y,s[5]=_r.y,s[9]=Yt.y,s[2]=Xn.z,s[6]=_r.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],_=n[2],v=n[6],m=n[10],d=n[14],E=n[3],A=n[7],M=n[11],T=n[15],S=s[0],C=s[4],x=s[8],b=s[12],R=s[1],P=s[5],U=s[9],G=s[13],X=s[2],O=s[6],W=s[10],H=s[14],K=s[3],Q=s[7],he=s[11],pe=s[15];return r[0]=a*S+o*R+l*X+c*K,r[4]=a*C+o*P+l*O+c*Q,r[8]=a*x+o*U+l*W+c*he,r[12]=a*b+o*G+l*H+c*pe,r[1]=u*S+f*R+h*X+p*K,r[5]=u*C+f*P+h*O+p*Q,r[9]=u*x+f*U+h*W+p*he,r[13]=u*b+f*G+h*H+p*pe,r[2]=_*S+v*R+m*X+d*K,r[6]=_*C+v*P+m*O+d*Q,r[10]=_*x+v*U+m*W+d*he,r[14]=_*b+v*G+m*H+d*pe,r[3]=E*S+A*R+M*X+T*K,r[7]=E*C+A*P+M*O+T*Q,r[11]=E*x+A*U+M*W+T*he,r[15]=E*b+A*G+M*H+T*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],v=e[7],m=e[11],d=e[15],E=l*p-c*h,A=o*p-c*f,M=o*h-l*f,T=a*p-c*u,S=a*h-l*u,C=a*f-o*u;return t*(v*E-m*A+d*M)-n*(_*E-m*T+d*S)+s*(_*A-v*T+d*C)-r*(_*M-v*S+m*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],v=e[13],m=e[14],d=e[15],E=t*o-n*a,A=t*l-s*a,M=t*c-r*a,T=n*l-s*o,S=n*c-r*o,C=s*c-r*l,x=u*v-f*_,b=u*m-h*_,R=u*d-p*_,P=f*m-h*v,U=f*d-p*v,G=h*d-p*m,X=E*G-A*U+M*P+T*R-S*b+C*x;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/X;return e[0]=(o*G-l*U+c*P)*O,e[1]=(s*U-n*G-r*P)*O,e[2]=(v*C-m*S+d*T)*O,e[3]=(h*S-f*C-p*T)*O,e[4]=(l*R-a*G-c*b)*O,e[5]=(t*G-s*R+r*b)*O,e[6]=(m*M-_*C-d*A)*O,e[7]=(u*C-h*M+p*A)*O,e[8]=(a*U-o*R+c*x)*O,e[9]=(n*R-t*U-r*x)*O,e[10]=(_*S-v*M+d*E)*O,e[11]=(f*M-u*S-p*E)*O,e[12]=(o*b-a*P-l*x)*O,e[13]=(t*P-n*b+s*x)*O,e[14]=(v*A-_*T-m*E)*O,e[15]=(u*T-f*A+h*E)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,p=r*u,_=r*f,v=a*u,m=a*f,d=o*f,E=l*c,A=l*u,M=l*f,T=n.x,S=n.y,C=n.z;return s[0]=(1-(v+d))*T,s[1]=(p+M)*T,s[2]=(_-A)*T,s[3]=0,s[4]=(p-M)*S,s[5]=(1-(h+d))*S,s[6]=(m+E)*S,s[7]=0,s[8]=(_+A)*C,s[9]=(m-E)*C,s[10]=(1-(h+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Di.set(s[0],s[1],s[2]).length(),o=Di.set(s[4],s[5],s[6]).length(),l=Di.set(s[8],s[9],s[10]).length();r<0&&(a=-a),on.copy(this);let c=1/a,u=1/o,f=1/l;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,t.setFromRotationMatrix(on),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=hn,l=!1){let c=this.elements,u=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),p=(n+s)/(n-s),_,v;if(l)_=r/(a-r),v=a*r/(a-r);else if(o===hn)_=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===qi)_=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=hn,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),p=-(n+s)/(n-s),_,v;if(l)_=1/(a-r),v=a/(a-r);else if(o===hn)_=-2/(a-r),v=-(a+r)/(a-r);else if(o===qi)_=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Di=new I,on=new it,md=new I(0,0,0),gd=new I(1,1,1),Xn=new I,_r=new I,Yt=new I,Cc=new it,Rc=new zt,Sn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_d=0,Pc=new I,Li=new zt,Pn=new it,xr=new I,ds=new I,xd=new I,yd=new zt,Ic=new I(1,0,0),Dc=new I(0,1,0),Lc=new I(0,0,1),Nc={type:"added"},vd={type:"removed"},Ni={type:"childadded",child:null},Oo={type:"childremoved",child:null},Mt=class i extends dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Sn,n=new zt,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new Le}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(Ic,e)}rotateY(e){return this.rotateOnAxis(Dc,e)}rotateZ(e){return this.rotateOnAxis(Lc,e)}translateOnAxis(e,t){return Pc.copy(e).applyQuaternion(this.quaternion),this.position.add(Pc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ic,e)}translateY(e){return this.translateOnAxis(Dc,e)}translateZ(e){return this.translateOnAxis(Lc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xr.copy(e):xr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(ds,xr,this.up):Pn.lookAt(xr,ds,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Li.setFromRotationMatrix(Pn),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nc),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vd),Oo.child=e,this.dispatchEvent(Oo),Oo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nc),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,e,xd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Mt.DEFAULT_UP=new I(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var un=class extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Md={type:"move"},Ji=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Md)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new un;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},yr={h:0,s:0,l:0};function Bo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=He.workingColorSpace){return this.r=e,this.g=t,this.b=n,He.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=He.workingColorSpace){if(e=Il(e,1),t=ze(t,0,1),n=ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Bo(a,r,e+1/3),this.g=Bo(a,r,e),this.b=Bo(a,r,e-1/3)}return He.colorSpaceToWorking(this,s),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&Te("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Te("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Te("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){let n=Ih[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Te("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return He.workingToColorSpace(Ft.copy(this),e),Math.round(ze(Ft.r*255,0,255))*65536+Math.round(ze(Ft.g*255,0,255))*256+Math.round(ze(Ft.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(Ft.copy(this),t);let n=Ft.r,s=Ft.g,r=Ft.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=kt){He.workingToColorSpace(Ft.copy(this),e);let t=Ft.r,n=Ft.g,s=Ft.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(yr);let n=vs(qn.h,yr.h,t),s=vs(qn.s,yr.s,t),r=vs(qn.l,yr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ft=new Ie;Ie.NAMES=Ih;var Mi=class extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ln=new I,In=new I,ko=new I,Dn=new I,Ui=new I,Fi=new I,Uc=new I,zo=new I,Vo=new I,Go=new I,Ho=new lt,Wo=new lt,Xo=new lt,Kn=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ln.subVectors(e,t),s.cross(ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ln.subVectors(s,t),In.subVectors(n,t),ko.subVectors(e,t);let a=ln.dot(ln),o=ln.dot(In),l=ln.dot(ko),c=In.dot(In),u=In.dot(ko),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,p=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ho.setScalar(0),Wo.setScalar(0),Xo.setScalar(0),Ho.fromBufferAttribute(e,t),Wo.fromBufferAttribute(e,n),Xo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ho,r.x),a.addScaledVector(Wo,r.y),a.addScaledVector(Xo,r.z),a}static isFrontFacing(e,t,n,s){return ln.subVectors(n,t),In.subVectors(e,t),ln.cross(In).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),In.subVectors(this.a,this.b),ln.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ui.subVectors(s,n),Fi.subVectors(r,n),zo.subVectors(e,n);let l=Ui.dot(zo),c=Fi.dot(zo);if(l<=0&&c<=0)return t.copy(n);Vo.subVectors(e,s);let u=Ui.dot(Vo),f=Fi.dot(Vo);if(u>=0&&f<=u)return t.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ui,a);Go.subVectors(e,r);let p=Ui.dot(Go),_=Fi.dot(Go);if(_>=0&&p<=_)return t.copy(r);let v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Fi,o);let m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Uc.subVectors(r,s),o=(f-u)/(f-u+(p-_)),t.copy(s).addScaledVector(Uc,o);let d=1/(m+v+h);return a=v*d,o=h*d,t.copy(n).addScaledVector(Ui,a).addScaledVector(Fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ct=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vr.copy(n.boundingBox)),vr.applyMatrix4(e.matrixWorld),this.union(vr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),Mr.subVectors(this.max,fs),Oi.subVectors(e.a,fs),Bi.subVectors(e.b,fs),ki.subVectors(e.c,fs),Yn.subVectors(Bi,Oi),Zn.subVectors(ki,Bi),fi.subVectors(Oi,ki);let t=[0,-Yn.z,Yn.y,0,-Zn.z,Zn.y,0,-fi.z,fi.y,Yn.z,0,-Yn.x,Zn.z,0,-Zn.x,fi.z,0,-fi.x,-Yn.y,Yn.x,0,-Zn.y,Zn.x,0,-fi.y,fi.x,0];return!qo(t,Oi,Bi,ki,Mr)||(t=[1,0,0,0,1,0,0,0,1],!qo(t,Oi,Bi,ki,Mr))?!1:(br.crossVectors(Yn,Zn),t=[br.x,br.y,br.z],qo(t,Oi,Bi,ki,Mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ln=[new I,new I,new I,new I,new I,new I,new I,new I],cn=new I,vr=new Ct,Oi=new I,Bi=new I,ki=new I,Yn=new I,Zn=new I,fi=new I,fs=new I,Mr=new I,br=new I,pi=new I;function qo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){pi.fromArray(i,r);let o=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),l=e.dot(pi),c=t.dot(pi),u=n.dot(pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var yt=new I,Sr=new Re,bd=0,Gt=class extends dn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ol,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXY(t,Sr.x,Sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ol&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var As=class extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Cs=class extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var $e=class extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sd=new Ct,ps=new I,Yo=new I,On=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Sd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);let t=ps.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ps,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(Yo)),this.expandByPoint(ps.copy(e.center).sub(Yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wd=0,Qt=new it,Zo=new Mt,zi=new I,Zt=new Ct,ms=new Ct,Et=new I,Dt=class i extends dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zu(e)?Cs:As)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Le().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return Zo.lookAt(e),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $e(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ct);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Zt.min,ms.min),Zt.expandByPoint(Et),Et.addVectors(Zt.max,ms.max),Zt.expandByPoint(Et)):(Zt.expandByPoint(ms.min),Zt.expandByPoint(ms.max))}Zt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Et.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Et));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Et.fromBufferAttribute(o,c),l&&(zi.fromBufferAttribute(e,c),Et.add(zi)),s=Math.max(s,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Gt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new I,l[x]=new I;let c=new I,u=new I,f=new I,h=new Re,p=new Re,_=new Re,v=new I,m=new I;function d(x,b,R){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,R),h.fromBufferAttribute(r,x),p.fromBufferAttribute(r,b),_.fromBufferAttribute(r,R),u.sub(c),f.sub(c),p.sub(h),_.sub(h);let P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(P),o[x].add(v),o[b].add(v),o[R].add(v),l[x].add(m),l[b].add(m),l[R].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let x=0,b=E.length;x<b;++x){let R=E[x],P=R.start,U=R.count;for(let G=P,X=P+U;G<X;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let A=new I,M=new I,T=new I,S=new I;function C(x){T.fromBufferAttribute(s,x),S.copy(T);let b=o[x];A.copy(b),A.sub(T.multiplyScalar(T.dot(b))).normalize(),M.crossVectors(S,b);let P=M.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,P)}for(let x=0,b=E.length;x<b;++x){let R=E[x],P=R.start,U=R.count;for(let G=P,X=P+U;G<X;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,f=new I;if(e)for(let h=0,p=e.count;h<p;h+=3){let _=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),p=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new Gt(h,u,f)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Td=0,fn=class extends dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=yi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vr,this.blendDst=Gr,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Te(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Te(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vr&&(n.blendSrc=this.blendSrc),this.blendDst!==Gr&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Nn=new I,$o=new I,wr=new I,$n=new I,Jo=new I,Tr=new I,Ko=new I,bi=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){$o.copy(e).add(t).multiplyScalar(.5),wr.copy(t).sub(e).normalize(),$n.copy(this.origin).sub($o);let r=e.distanceTo(t)*.5,a=-this.direction.dot(wr),o=$n.dot(this.direction),l=-$n.dot(wr),c=$n.lengthSq(),u=Math.abs(1-a*a),f,h,p,_;if(u>0)if(f=a*l-o,h=a*o-l,_=r*u,f>=0)if(h>=-_)if(h<=_){let v=1/u;f*=v,h*=v,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy($o).addScaledVector(wr,h),p}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);let n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,s,r){Jo.subVectors(t,e),Tr.subVectors(n,e),Ko.crossVectors(Jo,Tr);let a=this.direction.dot(Ko),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$n.subVectors(this.origin,e);let l=o*this.direction.dot(Tr.crossVectors($n,Tr));if(l<0)return null;let c=o*this.direction.dot(Jo.cross($n));if(c<0||l+c>a)return null;let u=-o*$n.dot(Ko);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rs=class extends fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Fc=new it,mi=new bi,Er=new On,Oc=new I,Ar=new I,Cr=new I,Rr=new I,jo=new I,Pr=new I,Bc=new I,Ir=new I,at=class extends Mt{constructor(e=new Dt,t=new Rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(jo.fromBufferAttribute(f,e),a?Pr.addScaledVector(jo,u):Pr.addScaledVector(jo.sub(t),u))}t.add(Pr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(r),mi.copy(e.ray).recast(e.near),!(Er.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Er,Oc)===null||mi.origin.distanceToSquared(Oc)>(e.far-e.near)**2))&&(Fc.copy(r).invert(),mi.copy(e.ray).applyMatrix4(Fc),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){let m=h[_],d=a[m.materialIndex],E=Math.max(m.start,p.start),A=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,T=A;M<T;M+=3){let S=o.getX(M),C=o.getX(M+1),x=o.getX(M+2);s=Dr(this,d,e,n,c,u,f,S,C,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){let E=o.getX(m),A=o.getX(m+1),M=o.getX(m+2);s=Dr(this,a,e,n,c,u,f,E,A,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){let m=h[_],d=a[m.materialIndex],E=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,T=A;M<T;M+=3){let S=M,C=M+1,x=M+2;s=Dr(this,d,e,n,c,u,f,S,C,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){let E=m,A=m+1,M=m+2;s=Dr(this,a,e,n,c,u,f,E,A,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Ed(i,e,t,n,s,r,a,o){let l;if(e.side===Lt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Fn,o),l===null)return null;Ir.copy(o),Ir.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ir);return c<t.near||c>t.far?null:{distance:c,point:Ir.clone(),object:i}}function Dr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ar),i.getVertexPosition(l,Cr),i.getVertexPosition(c,Rr);let u=Ed(i,e,t,n,Ar,Cr,Rr,Bc);if(u){let f=new I;Kn.getBarycoord(Bc,Ar,Cr,Rr,f),s&&(u.uv=Kn.getInterpolatedAttribute(s,o,l,c,f,new Re)),r&&(u.uv1=Kn.getInterpolatedAttribute(r,o,l,c,f,new Re)),a&&(u.normal=Kn.getInterpolatedAttribute(a,o,l,c,f,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new I,materialIndex:0};Kn.getNormal(Ar,Cr,Rr,h.normal),u.face=h,u.barycoord=f}return u}var Ps=class extends Ht{constructor(e=null,t=1,n=1,s,r,a,o,l,c=At,u=At,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Is=class extends Gt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vi=new it,kc=new it,Lr=[],zc=new Ct,Ad=new it,gs=new at,_s=new On,Ds=class extends at{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Is(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ad)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ct),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),zc.copy(e.boundingBox).applyMatrix4(Vi),this.boundingBox.union(zc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),_s.copy(e.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(_s)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(gs.geometry=this.geometry,gs.material=this.material,gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_s.copy(this.boundingSphere),_s.applyMatrix4(n),e.ray.intersectsSphere(_s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vi),kc.multiplyMatrices(n,Vi),gs.matrixWorld=kc,gs.raycast(e,Lr);for(let a=0,o=Lr.length;a<o;a++){let l=Lr[a];l.instanceId=r,l.object=this,t.push(l)}Lr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Is(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ps(new Float32Array(s*this.count),s,this.count,Ia,nn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Qo=new I,Cd=new I,Rd=new Le,en=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Qo.subVectors(n,t).cross(Cd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Qo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Rd.getNormalMatrix(e),s=this.coplanarPoint(Qo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},gi=new On,Pd=new Re(.5,.5),Nr=new I,Ki=class{constructor(e=new en,t=new en,n=new en,s=new en,r=new en,a=new en){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],p=r[7],_=r[8],v=r[9],m=r[10],d=r[11],E=r[12],A=r[13],M=r[14],T=r[15];if(s[0].setComponents(c-a,p-u,d-_,T-E).normalize(),s[1].setComponents(c+a,p+u,d+_,T+E).normalize(),s[2].setComponents(c+o,p+f,d+v,T+A).normalize(),s[3].setComponents(c-o,p-f,d-v,T-A).normalize(),n)s[4].setComponents(l,h,m,M).normalize(),s[5].setComponents(c-l,p-h,d-m,T-M).normalize();else if(s[4].setComponents(c-l,p-h,d-m,T-M).normalize(),t===hn)s[5].setComponents(c+l,p+h,d+m,T+M).normalize();else if(t===qi)s[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){gi.center.set(0,0,0);let t=Pd.distanceTo(e.center);return gi.radius=.7071067811865476+t,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Nr.x=s.normal.x>0?e.max.x:e.min.x,Nr.y=s.normal.y>0?e.max.y:e.min.y,Nr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ls=class extends fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},na=new I,ia=new I,Vc=new it,xs=new bi,Ur=new On,el=new I,Gc=new I,sa=class extends Mt{constructor(e=new Dt,t=new Ls){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)na.fromBufferAttribute(t,s-1),ia.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=na.distanceTo(ia);e.setAttribute("lineDistance",new $e(n,1))}else Te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(s),Ur.radius+=r,e.ray.intersectsSphere(Ur)===!1)return;Vc.copy(s).invert(),xs.copy(e.ray).applyMatrix4(Vc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let v=p,m=_-1;v<m;v+=c){let d=u.getX(v),E=u.getX(v+1),A=Fr(this,e,xs,l,d,E,v);A&&t.push(A)}if(this.isLineLoop){let v=u.getX(_-1),m=u.getX(p),d=Fr(this,e,xs,l,v,m,_-1);d&&t.push(d)}}else{let p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let v=p,m=_-1;v<m;v+=c){let d=Fr(this,e,xs,l,v,v+1,v);d&&t.push(d)}if(this.isLineLoop){let v=Fr(this,e,xs,l,_-1,p,_-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Fr(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(na.fromBufferAttribute(o,s),ia.fromBufferAttribute(o,r),t.distanceSqToSegment(na,ia,el,Gc)>n)return;el.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(el);if(!(c<e.near||c>e.far))return{distance:c,point:Gc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Hc=new I,Wc=new I,ra=class extends sa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Hc.fromBufferAttribute(t,s),Wc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Hc.distanceTo(Wc);e.setAttribute("lineDistance",new $e(n,1))}else Te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ns=class extends Ht{constructor(e=[],t=ri,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Bn=class extends Ht{constructor(e,t,n=mn,s,r,a,o=At,l=At,c,u=bn,f=1){if(u!==bn&&u!==oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $i(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},aa=class extends Bn{constructor(e,t=mn,n=ri,s,r,a=At,o=At,l,c=bn){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Us=class extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},tn=class i extends Dt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(f,2));function _(v,m,d,E,A,M,T,S,C,x,b){let R=M/C,P=T/x,U=M/2,G=T/2,X=S/2,O=C+1,W=x+1,H=0,K=0,Q=new I;for(let he=0;he<W;he++){let pe=he*P-G;for(let _e=0;_e<O;_e++){let qe=_e*R-U;Q[v]=qe*E,Q[m]=pe*A,Q[d]=X,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[m]=0,Q[d]=S>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(_e/C),f.push(1-he/x),H+=1}}for(let he=0;he<x;he++)for(let pe=0;pe<C;pe++){let _e=h+pe+O*he,qe=h+pe+O*(he+1),ht=h+(pe+1)+O*(he+1),Ye=h+(pe+1)+O*he;l.push(_e,qe,Ye),l.push(qe,ht,Ye),K+=6}o.addGroup(p,K,b),p+=K,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Fs=class i extends Dt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=t/2,f=Math.PI/2*e,h=t,p=2*f+h,_=n*2+r,v=s+1,m=new I,d=new I;for(let E=0;E<=_;E++){let A=0,M=0,T=0,S=0;if(E<=n){let b=E/n,R=b*Math.PI/2;M=-u-e*Math.cos(R),T=e*Math.sin(R),S=-e*Math.cos(R),A=b*f}else if(E<=n+r){let b=(E-n)/r;M=-u+b*t,T=e,S=0,A=f+b*h}else{let b=(E-n-r)/n,R=b*Math.PI/2;M=u+e*Math.sin(R),T=e*Math.cos(R),S=e*Math.sin(R),A=f+h+b*f}let C=Math.max(0,Math.min(1,A/p)),x=0;E===0?x=.5/s:E===_&&(x=-.5/s);for(let b=0;b<=s;b++){let R=b/s,P=R*Math.PI*2,U=Math.sin(P),G=Math.cos(P);d.x=-T*G,d.y=M,d.z=T*U,o.push(d.x,d.y,d.z),m.set(-T*G,S,T*U),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+x,C)}if(E>0){let b=(E-1)*v;for(let R=0;R<s;R++){let P=b+R,U=b+R+1,G=E*v+R,X=E*v+R+1;a.push(P,U,G),a.push(U,X,G)}}}this.setIndex(a),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Os=class i extends Dt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new I,u=new Re;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){let p=n+f/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(o,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Si=class i extends Dt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],p=[],_=0,v=[],m=n/2,d=0;E(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new $e(f,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(p,2));function E(){let M=new I,T=new I,S=0,C=(t-e)/n;for(let x=0;x<=r;x++){let b=[],R=x/r,P=R*(t-e)+e;for(let U=0;U<=s;U++){let G=U/s,X=G*l+o,O=Math.sin(X),W=Math.cos(X);T.x=P*O,T.y=-R*n+m,T.z=P*W,f.push(T.x,T.y,T.z),M.set(O,C,W).normalize(),h.push(M.x,M.y,M.z),p.push(G,1-R),b.push(_++)}v.push(b)}for(let x=0;x<s;x++)for(let b=0;b<r;b++){let R=v[b][x],P=v[b+1][x],U=v[b+1][x+1],G=v[b][x+1];(e>0||b!==0)&&(u.push(R,P,G),S+=3),(t>0||b!==r-1)&&(u.push(P,U,G),S+=3)}c.addGroup(d,S,0),d+=S}function A(M){let T=_,S=new Re,C=new I,x=0,b=M===!0?e:t,R=M===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,m*R,0),h.push(0,R,0),p.push(.5,.5),_++;let P=_;for(let U=0;U<=s;U++){let X=U/s*l+o,O=Math.cos(X),W=Math.sin(X);C.x=b*W,C.y=m*R,C.z=b*O,f.push(C.x,C.y,C.z),h.push(0,R,0),S.x=O*.5+.5,S.y=W*.5*R+.5,p.push(S.x,S.y),_++}for(let U=0;U<s;U++){let G=T+U,X=P+U;M===!0?u.push(X,X+1,G):u.push(X+1,X,G),x+=3}c.addGroup(d,x,M===!0?1:2),d+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bs=class i extends Si{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ks=class i extends Dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,p=[],_=[],v=[],m=[];for(let d=0;d<u;d++){let E=d*h-a;for(let A=0;A<c;A++){let M=A*f-r;_.push(M,-E,0),v.push(0,0,1),m.push(A/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){let A=E+c*d,M=E+c*(d+1),T=E+1+c*(d+1),S=E+1+c*d;p.push(A,M,S),p.push(M,T,S)}this.setIndex(p),this.setAttribute("position",new $e(_,3)),this.setAttribute("normal",new $e(v,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var zs=class i extends Dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new I,h=new I,p=[],_=[],v=[],m=[];for(let d=0;d<=n;d++){let E=[],A=d/n,M=a+A*o,T=e*Math.cos(M),S=Math.sqrt(e*e-T*T),C=0;d===0&&a===0?C=.5/t:d===n&&l===Math.PI&&(C=-.5/t);for(let x=0;x<=t;x++){let b=x/t,R=s+b*r;f.x=-S*Math.cos(R),f.y=T,f.z=S*Math.sin(R),_.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(b+C,1-A),E.push(c++)}u.push(E)}for(let d=0;d<n;d++)for(let E=0;E<t;E++){let A=u[d][E+1],M=u[d][E],T=u[d+1][E],S=u[d+1][E+1];(d!==0||a>0)&&p.push(A,M,S),(d!==n-1||l<Math.PI)&&p.push(M,T,S)}this.setIndex(p),this.setAttribute("position",new $e(_,3)),this.setAttribute("normal",new $e(v,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Vs=class i extends Dt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],f=[],h=new I,p=new I,_=new I;for(let v=0;v<=n;v++){let m=a+v/n*o;for(let d=0;d<=s;d++){let E=d/s*r;p.x=(e+t*Math.cos(m))*Math.cos(E),p.y=(e+t*Math.cos(m))*Math.sin(E),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),h.x=e*Math.cos(E),h.y=e*Math.sin(E),_.subVectors(p,h).normalize(),u.push(_.x,_.y,_.z),f.push(d/s),f.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let d=(s+1)*v+m-1,E=(s+1)*(v-1)+m-1,A=(s+1)*(v-1)+m,M=(s+1)*v+m;l.push(d,E,M),l.push(E,A,M)}this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Gs=class extends fn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ie(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Ei(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Xc(s))s.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Xc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ot(i){let e={};for(let t=0;t<i.length;t++){let n=Ei(i[t]);for(let s in n)e[s]=n[s]}return e}function Xc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Id(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}var Dh={clone:Ei,merge:Ot},Dd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jt=class extends fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dd,this.fragmentShader=Ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ei(e.uniforms),this.uniformsGroups=Id(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ie().setHex(s.value);break;case"v2":this.uniforms[n].value=new Re().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new lt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Le().fromArray(s.value);break;case"m4":this.uniforms[n].value=new it().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},oa=class extends Jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qn=class extends fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=or,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Hs=class extends fn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=or,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=wa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},la=class extends fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ca=class extends fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Or(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var ei=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ha=class extends ei{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:il,endingEnd:il}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case sl:r=e,o=2*t-n;break;case rl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sl:a=e,l=2*n-t;break;case rl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(n-t)/(s-t),v=_*_,m=v*_,d=-h*m+2*h*v-h*_,E=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*_+1,A=(-1-p)*m+(1.5+p)*v+.5*_,M=p*m-p*v;for(let T=0;T!==o;++T)r[T]=d*a[u+T]+E*a[c+T]+A*a[l+T]+M*a[f+T];return r}},ua=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}},da=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},fa=class extends ei{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let _=(n-t)/(s-t),v=1-_;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*_;return r}let h=o*2,p=e-1;for(let _=0;_!==o;++_){let v=a[c+_],m=a[l+_],d=p*h+_*2,E=f[d],A=f[d+1],M=e*h+_*2,T=u[M],S=u[M+1],C=(n-t)/(s-t),x,b,R,P,U;for(let G=0;G<8;G++){x=C*C,b=x*C,R=1-C,P=R*R,U=P*R;let O=U*t+3*P*C*E+3*R*x*T+b*s-n;if(Math.abs(O)<1e-10)break;let W=3*P*(E-t)+6*R*C*(T-E)+3*x*(s-T);if(Math.abs(W)<1e-10)break;C=C-O/W,C=Math.max(0,Math.min(1,C))}r[_]=U*v+3*P*C*A+3*R*x*S+b*m}return r}},Kt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Or(t,this.TimeBufferType),this.values=Or(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Or(e.times,Array),values:Or(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new fa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ms:t=this.InterpolantFactoryMethodDiscrete;break;case jr:t=this.InterpolantFactoryMethodLinear;break;case zr:t=this.InterpolantFactoryMethodSmooth;break;case nl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Te("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ms;case this.InterpolantFactoryMethodLinear:return jr;case this.InterpolantFactoryMethodSmooth:return zr;case this.InterpolantFactoryMethodBezier:return nl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Pe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Pe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&$u(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Pe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===zr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,h=f-n,p=f+n;for(let _=0;_!==n;++_){let v=t[f+_];if(v!==t[h+_]||v!==t[p+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,h=a*n;for(let p=0;p!==n;++p)t[h+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Kt.prototype.ValueTypeName="";Kt.prototype.TimeBufferType=Float32Array;Kt.prototype.ValueBufferType=Float32Array;Kt.prototype.DefaultInterpolation=jr;var ti=class extends Kt{constructor(e,t,n){super(e,t,n)}};ti.prototype.ValueTypeName="bool";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=Ms;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;var pa=class extends Kt{constructor(e,t,n,s){super(e,t,n,s)}};pa.prototype.ValueTypeName="color";var ma=class extends Kt{constructor(e,t,n,s){super(e,t,n,s)}};ma.prototype.ValueTypeName="number";var ga=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)zt.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ws=class extends Kt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ga(this.times,this.values,this.getValueSize(),e)}};Ws.prototype.ValueTypeName="quaternion";Ws.prototype.InterpolantFactoryMethodSmooth=void 0;var ni=class extends Kt{constructor(e,t,n){super(e,t,n)}};ni.prototype.ValueTypeName="string";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=Ms;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends Kt{constructor(e,t,n,s){super(e,t,n,s)}};_a.prototype.ValueTypeName="vector";var xa=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Lh=new xa,ya=class{constructor(e){this.manager=e!==void 0?e:Lh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ya.DEFAULT_MATERIAL_NAME="__DEFAULT";var wi=class extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Xs=class extends wi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},tl=new it,qc=new I,Yc=new I,va=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=Wt,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ki,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;qc.setFromMatrixPosition(e.matrixWorld),t.position.copy(qc),Yc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yc),t.updateMatrixWorld(),tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tl,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===qi||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Br=new I,kr=new zt,vn=new I,qs=class extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Br,kr,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Br,kr,vn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Br,kr,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Br,kr,vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Jn=new I,Zc=new Re,$c=new Re,Pt=class extends qs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,Zc,$c),t.subVectors($c,Zc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ys*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ll=class extends va{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0}},Ys=class extends wi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ll}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ji=class extends qs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},cl=class extends va{constructor(){super(new ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qi=class extends wi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new cl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Zs=class extends wi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Gi=-90,Hi=1,Ma=class extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pt(Gi,Hi,e,t);s.layers=this.layers,this.add(s);let r=new Pt(Gi,Hi,e,t);r.layers=this.layers,this.add(r);let a=new Pt(Gi,Hi,e,t);a.layers=this.layers,this.add(a);let o=new Pt(Gi,Hi,e,t);o.layers=this.layers,this.add(o);let l=new Pt(Gi,Hi,e,t);l.layers=this.layers,this.add(l);let c=new Pt(Gi,Hi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ba=class extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ll="\\[\\]\\.:\\/",Nd=new RegExp("["+Ll+"]","g"),Nl="[^"+Ll+"]",Ud="[^"+Ll.replace("\\.","")+"]",Fd=/((?:WC+[\/:])*)/.source.replace("WC",Nl),Od=/(WCOD+)?/.source.replace("WCOD",Ud),Bd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nl),kd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nl),zd=new RegExp("^"+Fd+Od+Bd+kd+"$"),Vd=["material","materials","bones","map"],hl=class{constructor(e,t,n){let s=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ot=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Nd,"")}static parseTrackName(e){let t=zd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Vd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Te("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Pe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=hl;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var l_=new Float32Array(1);var es=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ul=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var $s=class extends ra{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ie(n),s=new Ie(s);let r=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,p=0,_=-o;h<=t;h++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);let v=h===r?n:s;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}let u=new Dt;u.setAttribute("position",new $e(l,3)),u.setAttribute("color",new $e(c,3));let f=new Ls({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Js=class extends dn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Te("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Ul(i,e,t,n){let s=Gd(n);switch(t){case Al:return i*e;case Ia:return i*e/s.components*s.byteLength;case Da:return i*e/s.components*s.byteLength;case li:return i*e*2/s.components*s.byteLength;case La:return i*e*2/s.components*s.byteLength;case Cl:return i*e*3/s.components*s.byteLength;case sn:return i*e*4/s.components*s.byteLength;case Na:return i*e*4/s.components*s.byteLength;case tr:case nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ir:case sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fa:case Ba:return Math.max(i,16)*Math.max(e,8)/4;case Ua:case Oa:return Math.max(i,8)*Math.max(e,8)/2;case ka:case za:case Ga:case Ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Va:case rr:case Wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case eo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case to:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case no:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case io:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case so:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ro:case ao:case oo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case lo:case co:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ar:case ho:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gd(i){switch(i){case Wt:case Sl:return{byteLength:1,components:1};case ns:case wl:case En:return{byteLength:2,components:1};case Ra:case Pa:return{byteLength:2,components:4};case mn:case Ca:case nn:return{byteLength:4,components:1};case Tl:case El:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function nu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Wd(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){let _=f[h],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,f[h]=v)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){let v=f[p];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Xd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qd=`#ifdef USE_ALPHAHASH
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
#endif`,Yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kd=`#ifdef USE_AOMAP
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
#endif`,jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qd=`#ifdef USE_BATCHING
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
#endif`,ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rf=`#ifdef USE_IRIDESCENCE
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
#endif`,af=`#ifdef USE_BUMPMAP
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,mf=`#define PI 3.141592653589793
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
} // validated`,gf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_f=`vec3 transformedNormal = objectNormal;
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
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wf=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,If=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lf=`#ifdef USE_GRADIENTMAP
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
}`,Nf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Of=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Bf=`#ifdef USE_ENVMAP
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
#endif`,kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hf=`PhysicalMaterial material;
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
#endif`,Wf=`uniform sampler2D dfgLUT;
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
}`,Xf=`
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
#endif`,qf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,$f=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,np=`#if defined( USE_POINTS_UV )
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
#endif`,ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,op=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`#ifdef USE_MORPHTARGETS
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
#endif`,cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,up=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mp=`#ifdef USE_NORMALMAP
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
#endif`,gp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ap=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ip=`float getShadowMask() {
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
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,Fp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zp=`#ifdef USE_TRANSMISSION
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
#endif`,Vp=`#ifdef USE_TRANSMISSION
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yp=`uniform sampler2D t2D;
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`#include <common>
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
}`,Qp=`#if DEPTH_PACKING == 3200
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
}`,em=`#define DISTANCE
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
}`,tm=`#define DISTANCE
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
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`uniform float scale;
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
}`,rm=`uniform vec3 diffuse;
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
}`,am=`#include <common>
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
}`,om=`uniform vec3 diffuse;
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
}`,lm=`#define LAMBERT
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
}`,cm=`#define LAMBERT
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
}`,hm=`#define MATCAP
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
}`,um=`#define MATCAP
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
}`,dm=`#define NORMAL
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
}`,fm=`#define NORMAL
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
}`,pm=`#define PHONG
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
}`,mm=`#define PHONG
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
}`,gm=`#define STANDARD
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
}`,_m=`#define STANDARD
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
}`,xm=`#define TOON
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
}`,ym=`#define TOON
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
}`,vm=`uniform float size;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,bm=`#include <common>
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
}`,Sm=`uniform vec3 color;
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
}`,wm=`uniform float rotation;
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Xd,alphahash_pars_fragment:qd,alphamap_fragment:Yd,alphamap_pars_fragment:Zd,alphatest_fragment:$d,alphatest_pars_fragment:Jd,aomap_fragment:Kd,aomap_pars_fragment:jd,batching_pars_vertex:Qd,batching_vertex:ef,begin_vertex:tf,beginnormal_vertex:nf,bsdfs:sf,iridescence_fragment:rf,bumpmap_pars_fragment:af,clipping_planes_fragment:of,clipping_planes_pars_fragment:lf,clipping_planes_pars_vertex:cf,clipping_planes_vertex:hf,color_fragment:uf,color_pars_fragment:df,color_pars_vertex:ff,color_vertex:pf,common:mf,cube_uv_reflection_fragment:gf,defaultnormal_vertex:_f,displacementmap_pars_vertex:xf,displacementmap_vertex:yf,emissivemap_fragment:vf,emissivemap_pars_fragment:Mf,colorspace_fragment:bf,colorspace_pars_fragment:Sf,envmap_fragment:wf,envmap_common_pars_fragment:Tf,envmap_pars_fragment:Ef,envmap_pars_vertex:Af,envmap_physical_pars_fragment:Bf,envmap_vertex:Cf,fog_vertex:Rf,fog_pars_vertex:Pf,fog_fragment:If,fog_pars_fragment:Df,gradientmap_pars_fragment:Lf,lightmap_pars_fragment:Nf,lights_lambert_fragment:Uf,lights_lambert_pars_fragment:Ff,lights_pars_begin:Of,lights_toon_fragment:kf,lights_toon_pars_fragment:zf,lights_phong_fragment:Vf,lights_phong_pars_fragment:Gf,lights_physical_fragment:Hf,lights_physical_pars_fragment:Wf,lights_fragment_begin:Xf,lights_fragment_maps:qf,lights_fragment_end:Yf,lightprobes_pars_fragment:Zf,logdepthbuf_fragment:$f,logdepthbuf_pars_fragment:Jf,logdepthbuf_pars_vertex:Kf,logdepthbuf_vertex:jf,map_fragment:Qf,map_pars_fragment:ep,map_particle_fragment:tp,map_particle_pars_fragment:np,metalnessmap_fragment:ip,metalnessmap_pars_fragment:sp,morphinstance_vertex:rp,morphcolor_vertex:ap,morphnormal_vertex:op,morphtarget_pars_vertex:lp,morphtarget_vertex:cp,normal_fragment_begin:hp,normal_fragment_maps:up,normal_pars_fragment:dp,normal_pars_vertex:fp,normal_vertex:pp,normalmap_pars_fragment:mp,clearcoat_normal_fragment_begin:gp,clearcoat_normal_fragment_maps:_p,clearcoat_pars_fragment:xp,iridescence_pars_fragment:yp,opaque_fragment:vp,packing:Mp,premultiplied_alpha_fragment:bp,project_vertex:Sp,dithering_fragment:wp,dithering_pars_fragment:Tp,roughnessmap_fragment:Ep,roughnessmap_pars_fragment:Ap,shadowmap_pars_fragment:Cp,shadowmap_pars_vertex:Rp,shadowmap_vertex:Pp,shadowmask_pars_fragment:Ip,skinbase_vertex:Dp,skinning_pars_vertex:Lp,skinning_vertex:Np,skinnormal_vertex:Up,specularmap_fragment:Fp,specularmap_pars_fragment:Op,tonemapping_fragment:Bp,tonemapping_pars_fragment:kp,transmission_fragment:zp,transmission_pars_fragment:Vp,uv_pars_fragment:Gp,uv_pars_vertex:Hp,uv_vertex:Wp,worldpos_vertex:Xp,background_vert:qp,background_frag:Yp,backgroundCube_vert:Zp,backgroundCube_frag:$p,cube_vert:Jp,cube_frag:Kp,depth_vert:jp,depth_frag:Qp,distance_vert:em,distance_frag:tm,equirect_vert:nm,equirect_frag:im,linedashed_vert:sm,linedashed_frag:rm,meshbasic_vert:am,meshbasic_frag:om,meshlambert_vert:lm,meshlambert_frag:cm,meshmatcap_vert:hm,meshmatcap_frag:um,meshnormal_vert:dm,meshnormal_frag:fm,meshphong_vert:pm,meshphong_frag:mm,meshphysical_vert:gm,meshphysical_frag:_m,meshtoon_vert:xm,meshtoon_frag:ym,points_vert:vm,points_frag:Mm,shadow_vert:bm,shadow_frag:Sm,sprite_vert:wm,sprite_frag:Tm},ce={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},Cn={basic:{uniforms:Ot([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Ot([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Ot([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Ot([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Ot([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Ot([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Ot([ce.points,ce.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Ot([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Ot([ce.common,ce.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Ot([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Ot([ce.sprite,ce.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Ot([ce.common,ce.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Ot([ce.lights,ce.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Cn.physical={uniforms:Ot([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var po={r:0,b:0,g:0},Em=new it,iu=new Le;iu.set(-1,0,0,0,1,0,0,0,1);function Am(i,e,t,n,s,r){let a=new Ie(0),o=s===!0?0:1,l,c,u=null,f=0,h=null;function p(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){let M=E.backgroundBlurriness>0;A=e.get(A,M)}return A}function _(E){let A=!1,M=p(E);M===null?m(a,o):M&&M.isColor&&(m(M,1),A=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(E,A){let M=p(A);M&&(M.isCubeTexture||M.mapping===Qs)?(c===void 0&&(c=new at(new tn(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:Ei(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Em.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(iu),c.material.toneMapped=He.getTransfer(M.colorSpace)!==Je,(u!==M||f!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new at(new ks(2,2),new Jt({name:"BackgroundMaterial",uniforms:Ei(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=He.getTransfer(M.colorSpace)!==Je,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,A){E.getRGB(po,Dl(i)),t.buffers.color.setClear(po.r,po.g,po.b,A,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,A=1){a.set(E),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:_,addToRenderList:v,dispose:d}}function Cm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(P,U,G,X,O){let W=!1,H=f(P,X,G,U);r!==H&&(r=H,c(r.object)),W=p(P,X,G,O),W&&_(P,X,G,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,M(P,U,G,X),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function f(P,U,G,X){let O=X.wireframe===!0,W=n[U.id];W===void 0&&(W={},n[U.id]=W);let H=P.isInstancedMesh===!0?P.id:0,K=W[H];K===void 0&&(K={},W[H]=K);let Q=K[G.id];Q===void 0&&(Q={},K[G.id]=Q);let he=Q[O];return he===void 0&&(he=h(l()),Q[O]=he),he}function h(P){let U=[],G=[],X=[];for(let O=0;O<t;O++)U[O]=0,G[O]=0,X[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:X,object:P,attributes:{},index:null}}function p(P,U,G,X){let O=r.attributes,W=U.attributes,H=0,K=G.getAttributes();for(let Q in K)if(K[Q].location>=0){let pe=O[Q],_e=W[Q];if(_e===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(_e=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(_e=P.instanceColor)),pe===void 0||pe.attribute!==_e||_e&&pe.data!==_e.data)return!0;H++}return r.attributesNum!==H||r.index!==X}function _(P,U,G,X){let O={},W=U.attributes,H=0,K=G.getAttributes();for(let Q in K)if(K[Q].location>=0){let pe=W[Q];pe===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(pe=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(pe=P.instanceColor));let _e={};_e.attribute=pe,pe&&pe.data&&(_e.data=pe.data),O[Q]=_e,H++}r.attributes=O,r.attributesNum=H,r.index=X}function v(){let P=r.newAttributes;for(let U=0,G=P.length;U<G;U++)P[U]=0}function m(P){d(P,0)}function d(P,U){let G=r.newAttributes,X=r.enabledAttributes,O=r.attributeDivisors;G[P]=1,X[P]===0&&(i.enableVertexAttribArray(P),X[P]=1),O[P]!==U&&(i.vertexAttribDivisor(P,U),O[P]=U)}function E(){let P=r.newAttributes,U=r.enabledAttributes;for(let G=0,X=U.length;G<X;G++)U[G]!==P[G]&&(i.disableVertexAttribArray(G),U[G]=0)}function A(P,U,G,X,O,W,H){H===!0?i.vertexAttribIPointer(P,U,G,O,W):i.vertexAttribPointer(P,U,G,X,O,W)}function M(P,U,G,X){v();let O=X.attributes,W=G.getAttributes(),H=U.defaultAttributeValues;for(let K in W){let Q=W[K];if(Q.location>=0){let he=O[K];if(he===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(he=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(he=P.instanceColor)),he!==void 0){let pe=he.normalized,_e=he.itemSize,qe=e.get(he);if(qe===void 0)continue;let ht=qe.buffer,Ye=qe.type,J=qe.bytesPerElement,ie=Ye===i.INT||Ye===i.UNSIGNED_INT||he.gpuType===Ca;if(he.isInterleavedBufferAttribute){let ee=he.data,De=ee.stride,Ne=he.offset;if(ee.isInstancedInterleavedBuffer){for(let Ae=0;Ae<Q.locationSize;Ae++)d(Q.location+Ae,ee.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ae=0;Ae<Q.locationSize;Ae++)m(Q.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let Ae=0;Ae<Q.locationSize;Ae++)A(Q.location+Ae,_e/Q.locationSize,Ye,pe,De*J,(Ne+_e/Q.locationSize*Ae)*J,ie)}else{if(he.isInstancedBufferAttribute){for(let ee=0;ee<Q.locationSize;ee++)d(Q.location+ee,he.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ee=0;ee<Q.locationSize;ee++)m(Q.location+ee);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let ee=0;ee<Q.locationSize;ee++)A(Q.location+ee,_e/Q.locationSize,Ye,pe,_e*J,_e/Q.locationSize*ee*J,ie)}}else if(H!==void 0){let pe=H[K];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(Q.location,pe);break;case 3:i.vertexAttrib3fv(Q.location,pe);break;case 4:i.vertexAttrib4fv(Q.location,pe);break;default:i.vertexAttrib1fv(Q.location,pe)}}}}E()}function T(){b();for(let P in n){let U=n[P];for(let G in U){let X=U[G];for(let O in X){let W=X[O];for(let H in W)u(W[H].object),delete W[H];delete X[O]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;let U=n[P.id];for(let G in U){let X=U[G];for(let O in X){let W=X[O];for(let H in W)u(W[H].object),delete W[H];delete X[O]}}delete n[P.id]}function C(P){for(let U in n){let G=n[U];for(let X in G){let O=G[X];if(O[P.id]===void 0)continue;let W=O[P.id];for(let H in W)u(W[H].object),delete W[H];delete O[P.id]}}}function x(P){for(let U in n){let G=n[U],X=P.isInstancedMesh===!0?P.id:0,O=G[X];if(O!==void 0){for(let W in O){let H=O[W];for(let K in H)u(H[K].object),delete H[K];delete O[W]}delete G[X],Object.keys(G).length===0&&delete n[U]}}}function b(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function Rm(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Pm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==sn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Wt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==nn&&!x)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Te("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:M,maxSamples:T,samples:S}}function Im(i){let e=this,t=null,n=0,s=!1,r=!1,a=new en,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||n!==0||s;return s=h,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){let _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{let E=r?0:n,A=E*4,M=d.clippingState||null;l.value=M,M=u(_,h,A,p);for(let T=0;T!==A;++T)M[T]=t[T];d.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,_){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=l.value,_!==!0||m===null){let d=p+v*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,M=p;A!==v;++A,M+=4)a.copy(f[A]).applyMatrix4(E,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var ci=4,Nh=[.125,.215,.35,.446,.526,.582],Ai=20,Dm=256,cr=new ji,Uh=new Ie,Fl=null,Ol=0,Bl=0,kl=!1,Lm=new I,os=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Lm}=r;Fl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fl,Ol,Bl),this._renderer.xr.enabled=kl,e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ri||e.mapping===Ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:En,format:sn,colorSpace:bs,depthBuffer:!1},s=Fh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fh(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Nm(r)),this._blurMaterial=Fm(r,e,t),this._ggxMaterial=Um(r,e,t)}return s}_compileMaterial(e){let t=new at(new Dt,e);this._renderer.compile(t,cr)}_sceneToCubeUV(e,t,n,s,r){let l=new Pt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Uh),f.toneMapping=pn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new at(new tn,new Rs({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,d=!1,E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,d=!0):(m.color.copy(Uh),d=!0);for(let A=0;A<6;A++){let M=A%3;M===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):M===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));let T=this._cubeSize;rs(s,M*T,A>2?T:0,T,T),f.setRenderTarget(s),d&&f.render(v,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ri||e.mapping===Ti;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;rs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,cr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,p=f*h,{_lodMax:_}=this,v=this._sizeLods[n],m=3*v*(n>_-ci?n-_+ci:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,rs(r,m,d,3*v,2*v),s.setRenderTarget(r),s.render(o,cr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,rs(e,m,d,3*v,2*v),s.setRenderTarget(e),s.render(o,cr)}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Pe("blur direction must be either latitudinal or longitudinal!");let u=3,f=this._lodMeshes[s];f.material=c;let h=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ai-1),v=r/_,m=isFinite(r)?1+Math.floor(u*v):Ai;m>Ai&&Te(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);let d=[],E=0;for(let C=0;C<Ai;++C){let x=C/v,b=Math.exp(-x*x/2);d.push(b),C===0?E+=b:C<m&&(E+=2*b)}for(let C=0;C<d.length;C++)d[C]=d[C]/E;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:A}=this;h.dTheta.value=_,h.mipInt.value=A-n;let M=this._sizeLods[s],T=3*M*(s>A-ci?s-A+ci:0),S=4*(this._cubeSize-M);rs(t,T,S,3*M,2*M),l.setRenderTarget(t),l.render(f,cr)}};function Nm(i){let e=[],t=[],n=[],s=i,r=i-ci+1+Nh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ci?l=Nh[a-i+ci-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,v=3,m=2,d=1,E=new Float32Array(v*_*p),A=new Float32Array(m*_*p),M=new Float32Array(d*_*p);for(let S=0;S<p;S++){let C=S%3*2/3-1,x=S>2?0:-1,b=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];E.set(b,v*_*S),A.set(h,m*_*S);let R=[S,S,S,S,S,S];M.set(R,d*_*S)}let T=new Dt;T.setAttribute("position",new Gt(E,v)),T.setAttribute("uv",new Gt(A,m)),T.setAttribute("faceIndex",new Gt(M,d)),n.push(new at(T,null)),s>ci&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Fh(i,e,t){let n=new $t(i,e,t);return n.texture.mapping=Qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Um(i,e,t){return new Jt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xo(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Fm(i,e,t){let n=new Float32Array(Ai),s=new I(0,1,0);return new Jt({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xo(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Oh(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xo(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Bh(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function xo(){return`

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
	`}var go=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ns(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new tn(5,5,5),r=new Jt({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:Tn});r.uniforms.tEquirect.value=t;let a=new at(s,r),o=t.minFilter;return t.minFilter===ai&&(t.minFilter=It),new Ma(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Om(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===Ta||p===Ea)if(e.has(h)){let _=e.get(h).texture;return o(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let v=new go(_.height);return v.fromEquirectangularTexture(i,h),e.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,_=p===Ta||p===Ea,v=p===ri||p===Ti;if(_||v){let m=t.get(h),d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new os(i)),m=_?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let E=h.image;return _&&E&&E.height>0||v&&E&&l(E)?(n===null&&(n=new os(i)),m=_?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===Ta?h.mapping=ri:p===Ea&&(h.mapping=Ti),h}function l(h){let p=0,_=6;for(let v=0;v<_;v++)h[v]!==void 0&&p++;return p===_}function c(h){let p=h.target;p.removeEventListener("dispose",c);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Bm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&xi("WebGLRenderer: "+n+" extension not supported."),s}}}function km(i,e,t,n){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(f){let h=[],p=f.index,_=f.attributes.position,v=0;if(_===void 0)return;if(p!==null){let E=p.array;v=p.version;for(let A=0,M=E.length;A<M;A+=3){let T=E[A+0],S=E[A+1],C=E[A+2];h.push(T,S,S,C,C,T)}}else{let E=_.array;v=_.version;for(let A=0,M=E.length/3-1;A<M;A+=3){let T=A+0,S=A+1,C=A+2;h.push(T,S,S,C,C,T)}}let m=new(_.count>=65535?Cs:As)(h,1);m.version=v;let d=r.get(f);d&&e.remove(d),r.set(f,m)}function u(f){let h=r.get(f);if(h){let p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function zm(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*a),t.update(h,n,1)}function c(f,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,f*a,p),t.update(h,n,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,p);let v=0;for(let m=0;m<p;m++)v+=h[m];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Vm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Pe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Gm(i,e,t){let n=new WeakMap,s=new lt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let b=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],A=0;p===!0&&(A=1),_===!0&&(A=2),v===!0&&(A=3);let M=o.attributes.position.count*A,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let S=new Float32Array(M*T*4*f),C=new Ts(S,M,T,f);C.type=nn,C.needsUpdate=!0;let x=A*4;for(let R=0;R<f;R++){let P=m[R],U=d[R],G=E[R],X=M*T*4*R;for(let O=0;O<P.count;O++){let W=O*x;p===!0&&(s.fromBufferAttribute(P,O),S[X+W+0]=s.x,S[X+W+1]=s.y,S[X+W+2]=s.z,S[X+W+3]=0),_===!0&&(s.fromBufferAttribute(U,O),S[X+W+4]=s.x,S[X+W+5]=s.y,S[X+W+6]=s.z,S[X+W+7]=0),v===!0&&(s.fromBufferAttribute(G,O),S[X+W+8]=s.x,S[X+W+9]=s.y,S[X+W+10]=s.z,S[X+W+11]=G.itemSize===4?s.w:1)}}h={count:f,texture:C,size:new Re(M,T)},n.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Hm(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Wm={[gl]:"LINEAR_TONE_MAPPING",[_l]:"REINHARD_TONE_MAPPING",[xl]:"CINEON_TONE_MAPPING",[js]:"ACES_FILMIC_TONE_MAPPING",[vl]:"AGX_TONE_MAPPING",[Ml]:"NEUTRAL_TONE_MAPPING",[yl]:"CUSTOM_TONE_MAPPING"};function Xm(i,e,t,n,s,r){let a=new $t(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Bn(e,t):void 0}),o=new $t(e,t,{type:En,depthBuffer:!1,stencilBuffer:!1}),l=new Dt;l.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new $e([0,2,0,0,2,0],2));let c=new oa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new at(l,c),f=new ji(-1,1,1,-1,0,1),h=null,p=null,_=!1,v,m=null,d=[],E=!1;this.setSize=function(A,M){a.setSize(A,M),o.setSize(A,M);for(let T=0;T<d.length;T++){let S=d[T];S.setSize&&S.setSize(A,M)}},this.setEffects=function(A){d=A,E=d.length>0&&d[0].isRenderPass===!0;let M=a.width,T=a.height;for(let S=0;S<d.length;S++){let C=d[S];C.setSize&&C.setSize(M,T)}},this.begin=function(A,M){if(_||A.toneMapping===pn&&d.length===0)return!1;if(m=M,M!==null){let T=M.width,S=M.height;(a.width!==T||a.height!==S)&&this.setSize(T,S)}return E===!1&&A.setRenderTarget(a),v=A.toneMapping,A.toneMapping=pn,!0},this.hasRenderPass=function(){return E},this.end=function(A,M){A.toneMapping=v,_=!0;let T=a,S=o;for(let C=0;C<d.length;C++){let x=d[C];if(x.enabled!==!1&&(x.render(A,S,T,M),x.needsSwap!==!1)){let b=T;T=S,S=b}}if(h!==A.outputColorSpace||p!==A.toneMapping){h=A.outputColorSpace,p=A.toneMapping,c.defines={},He.getTransfer(h)===Je&&(c.defines.SRGB_TRANSFER="");let C=Wm[p];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,A.setRenderTarget(m),A.render(u,f),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var su=new Ht,Gl=new Bn(1,1),ru=new Ts,au=new ta,ou=new Ns,kh=[],zh=[],Vh=new Float32Array(16),Gh=new Float32Array(9),Hh=new Float32Array(4);function ls(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=kh[s];if(r===void 0&&(r=new Float32Array(s),kh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yo(i,e){let t=zh[e];t===void 0&&(t=new Int32Array(e),zh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function qm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function Zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function $m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function Jm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Hh.set(n),i.uniformMatrix2fv(this.addr,!1,Hh),St(t,n)}}function Km(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Gh.set(n),i.uniformMatrix3fv(this.addr,!1,Gh),St(t,n)}}function jm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Vh.set(n),i.uniformMatrix4fv(this.addr,!1,Vh),St(t,n)}}function Qm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function ig(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function og(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gl.compareFunction=t.isReversedDepthBuffer()?fo:uo,r=Gl):r=su,t.setTexture2D(e||r,s)}function lg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||au,s)}function cg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ou,s)}function hg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ru,s)}function ug(i){switch(i){case 5126:return qm;case 35664:return Ym;case 35665:return Zm;case 35666:return $m;case 35674:return Jm;case 35675:return Km;case 35676:return jm;case 5124:case 35670:return Qm;case 35667:case 35671:return eg;case 35668:case 35672:return tg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return sg;case 36295:return rg;case 36296:return ag;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return hg}}function dg(i,e){i.uniform1fv(this.addr,e)}function fg(i,e){let t=ls(e,this.size,2);i.uniform2fv(this.addr,t)}function pg(i,e){let t=ls(e,this.size,3);i.uniform3fv(this.addr,t)}function mg(i,e){let t=ls(e,this.size,4);i.uniform4fv(this.addr,t)}function gg(i,e){let t=ls(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _g(i,e){let t=ls(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xg(i,e){let t=ls(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function yg(i,e){i.uniform1iv(this.addr,e)}function vg(i,e){i.uniform2iv(this.addr,e)}function Mg(i,e){i.uniform3iv(this.addr,e)}function bg(i,e){i.uniform4iv(this.addr,e)}function Sg(i,e){i.uniform1uiv(this.addr,e)}function wg(i,e){i.uniform2uiv(this.addr,e)}function Tg(i,e){i.uniform3uiv(this.addr,e)}function Eg(i,e){i.uniform4uiv(this.addr,e)}function Ag(i,e,t){let n=this.cache,s=e.length,r=yo(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Gl:a=su;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Cg(i,e,t){let n=this.cache,s=e.length,r=yo(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||au,r[a])}function Rg(i,e,t){let n=this.cache,s=e.length,r=yo(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ou,r[a])}function Pg(i,e,t){let n=this.cache,s=e.length,r=yo(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ru,r[a])}function Ig(i){switch(i){case 5126:return dg;case 35664:return fg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return _g;case 35676:return xg;case 5124:case 35670:return yg;case 35667:case 35671:return vg;case 35668:case 35672:return Mg;case 35669:case 35673:return bg;case 5125:return Sg;case 36294:return wg;case 36295:return Tg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Pg}}var Hl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ug(t.type)}},Wl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ig(t.type)}},Xl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},zl=/(\w+)(\])?(\[|\.)?/g;function Wh(i,e){i.seq.push(e),i.map[e.id]=e}function Dg(i,e,t){let n=i.name,s=n.length;for(zl.lastIndex=0;;){let r=zl.exec(n),a=zl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Wh(t,c===void 0?new Hl(o,i,e):new Wl(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Xl(o),Wh(t,f)),t=f}}}var as=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Dg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Xh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Lg=37297,Ng=0;function Ug(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var qh=new Le;function Fg(i){He._getMatrix(qh,He.workingColorSpace,i);let e=`mat3( ${qh.elements.map(t=>t.toFixed(4))} )`;switch(He.getTransfer(i)){case Ss:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Yh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ug(i.getShaderSource(e),o)}else return r}function Og(i,e){let t=Fg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Bg={[gl]:"Linear",[_l]:"Reinhard",[xl]:"Cineon",[js]:"ACESFilmic",[vl]:"AgX",[Ml]:"Neutral",[yl]:"Custom"};function kg(i,e){let t=Bg[e];return t===void 0?(Te("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var mo=new I;function zg(){He.getLuminanceCoefficients(mo);let i=mo.x.toFixed(4),e=mo.y.toFixed(4),t=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function Gg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ur(i){return i!==""}function Zh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $h(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(i){return i.replace(Wg,qg)}var Xg=new Map;function qg(i,e){let t=Oe[e];if(t===void 0){let n=Xg.get(e);if(n!==void 0)t=Oe[n],Te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ql(t)}var Yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jh(i){return i.replace(Yg,Zg)}function Zg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var $g={[Ks]:"SHADOWMAP_TYPE_PCF",[ts]:"SHADOWMAP_TYPE_VSM"};function Jg(i){return $g[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Kg={[ri]:"ENVMAP_TYPE_CUBE",[Ti]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE_UV"};function jg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Kg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Qg={[Ti]:"ENVMAP_MODE_REFRACTION"};function e0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Qg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var t0={[wa]:"ENVMAP_BLENDING_MULTIPLY",[gh]:"ENVMAP_BLENDING_MIX",[_h]:"ENVMAP_BLENDING_ADD"};function n0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":t0[i.combine]||"ENVMAP_BLENDING_NONE"}function i0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function s0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Jg(t),c=jg(t),u=e0(t),f=n0(t),h=i0(t),p=Vg(t),_=Gg(r),v=s.createProgram(),m,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ur).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ur).join(`
`),d.length>0&&(d+=`
`)):(m=[Kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),d=[Kh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pn?"#define TONE_MAPPING":"",t.toneMapping!==pn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==pn?kg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Og("linearToOutputTexel",t.outputColorSpace),zg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),a=ql(a),a=Zh(a,t),a=$h(a,t),o=ql(o),o=Zh(o,t),o=$h(o,t),a=Jh(a),o=Jh(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let A=E+m+a,M=E+d+o,T=Xh(s,s.VERTEX_SHADER,A),S=Xh(s,s.FRAGMENT_SHADER,M);s.attachShader(v,T),s.attachShader(v,S),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(P){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(v)||"",G=s.getShaderInfoLog(T)||"",X=s.getShaderInfoLog(S)||"",O=U.trim(),W=G.trim(),H=X.trim(),K=!0,Q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,S);else{let he=Yh(s,T,"vertex"),pe=Yh(s,S,"fragment");Pe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+he+`
`+pe)}else O!==""?Te("WebGLProgram: Program Info Log:",O):(W===""||H==="")&&(Q=!1);Q&&(P.diagnostics={runnable:K,programLog:O,vertexShader:{log:W,prefix:m},fragmentShader:{log:H,prefix:d}})}s.deleteShader(T),s.deleteShader(S),x=new as(s,v),b=Hg(s,v)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(v,Lg)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ng++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=S,this}var r0=0,Yl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Zl(e),t.set(e,n)),n}},Zl=class{constructor(e){this.id=r0++,this.code=e,this.usedTimes=0}};function a0(i){return i===li||i===rr||i===ar}function o0(i,e,t,n,s,r){let a=new Es,o=new Yl,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,b,R,P,U,G){let X=P.fog,O=U.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=e.get(x.envMap||W,H),Q=K&&K.mapping===Qs?K.image.height:null,he=p[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Te("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let pe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,_e=pe!==void 0?pe.length:0,qe=0;O.morphAttributes.position!==void 0&&(qe=1),O.morphAttributes.normal!==void 0&&(qe=2),O.morphAttributes.color!==void 0&&(qe=3);let ht,Ye,J,ie;if(he){let xe=Cn[he];ht=xe.vertexShader,Ye=xe.fragmentShader}else{ht=x.vertexShader,Ye=x.fragmentShader;let xe=o.getVertexShaderStage(x),dt=o.getFragmentShaderStage(x);o.update(x,xe,dt),J=xe.id,ie=dt.id}let ee=i.getRenderTarget(),De=i.state.buffers.depth.getReversed(),Ne=U.isInstancedMesh===!0,Ae=U.isBatchedMesh===!0,pt=!!x.map,Ge=!!x.matcap,et=!!K,Ze=!!x.aoMap,We=!!x.lightMap,_t=!!x.bumpMap&&x.wireframe===!1,vt=!!x.normalMap,Tt=!!x.displacementMap,Rt=!!x.emissiveMap,ut=!!x.metalnessMap,xt=!!x.roughnessMap,L=x.anisotropy>0,Vt=x.clearcoat>0,Ke=x.dispersion>0,w=x.iridescence>0,g=x.sheen>0,F=x.transmission>0,z=L&&!!x.anisotropyMap,q=Vt&&!!x.clearcoatMap,te=Vt&&!!x.clearcoatNormalMap,se=Vt&&!!x.clearcoatRoughnessMap,Y=w&&!!x.iridescenceMap,$=w&&!!x.iridescenceThicknessMap,re=g&&!!x.sheenColorMap,Me=g&&!!x.sheenRoughnessMap,le=!!x.specularMap,ae=!!x.specularColorMap,we=!!x.specularIntensityMap,Ce=F&&!!x.transmissionMap,Ue=F&&!!x.thicknessMap,D=!!x.gradientMap,ne=!!x.alphaMap,Z=x.alphaTest>0,oe=!!x.alphaHash,fe=!!x.extensions,j=pn;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(j=i.toneMapping);let ve={shaderID:he,shaderType:x.type,shaderName:x.name,vertexShader:ht,fragmentShader:Ye,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:ie,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Ae,batchingColor:Ae&&U._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&U.instanceColor!==null,instancingMorph:Ne&&U.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:pt,matcap:Ge,envMap:et,envMapMode:et&&K.mapping,envMapCubeUVHeight:Q,aoMap:Ze,lightMap:We,bumpMap:_t,normalMap:vt,displacementMap:Tt,emissiveMap:Rt,normalMapObjectSpace:vt&&x.normalMapType===vh,normalMapTangentSpace:vt&&x.normalMapType===or,packedNormalMap:vt&&x.normalMapType===or&&a0(x.normalMap.format),metalnessMap:ut,roughnessMap:xt,anisotropy:L,anisotropyMap:z,clearcoat:Vt,clearcoatMap:q,clearcoatNormalMap:te,clearcoatRoughnessMap:se,dispersion:Ke,iridescence:w,iridescenceMap:Y,iridescenceThicknessMap:$,sheen:g,sheenColorMap:re,sheenRoughnessMap:Me,specularMap:le,specularColorMap:ae,specularIntensityMap:we,transmission:F,transmissionMap:Ce,thicknessMap:Ue,gradientMap:D,opaque:x.transparent===!1&&x.blending===yi&&x.alphaToCoverage===!1,alphaMap:ne,alphaTest:Z,alphaHash:oe,combine:x.combine,mapUv:pt&&_(x.map.channel),aoMapUv:Ze&&_(x.aoMap.channel),lightMapUv:We&&_(x.lightMap.channel),bumpMapUv:_t&&_(x.bumpMap.channel),normalMapUv:vt&&_(x.normalMap.channel),displacementMapUv:Tt&&_(x.displacementMap.channel),emissiveMapUv:Rt&&_(x.emissiveMap.channel),metalnessMapUv:ut&&_(x.metalnessMap.channel),roughnessMapUv:xt&&_(x.roughnessMap.channel),anisotropyMapUv:z&&_(x.anisotropyMap.channel),clearcoatMapUv:q&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:$&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:re&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(x.sheenRoughnessMap.channel),specularMapUv:le&&_(x.specularMap.channel),specularColorMapUv:ae&&_(x.specularColorMap.channel),specularIntensityMapUv:we&&_(x.specularIntensityMap.channel),transmissionMapUv:Ce&&_(x.transmissionMap.channel),thicknessMapUv:Ue&&_(x.thicknessMap.channel),alphaMapUv:ne&&_(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(vt||L),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!O.attributes.uv&&(pt||ne),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&vt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:De,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:qe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:j,decodeVideoTexture:pt&&x.map.isVideoTexture===!0&&He.getTransfer(x.map.colorSpace)===Je,decodeVideoTextureEmissive:Rt&&x.emissiveMap.isVideoTexture===!0&&He.getTransfer(x.emissiveMap.colorSpace)===Je,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wn,flipSided:x.side===Lt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:fe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&x.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ve.vertexUv1s=l.has(1),ve.vertexUv2s=l.has(2),ve.vertexUv3s=l.has(3),l.clear(),ve}function m(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)b.push(R),b.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(d(b,x),E(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function d(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function E(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let b=p[x.type],R;if(b){let P=Cn[b];R=Dh.clone(P.uniforms)}else R=x.uniforms;return R}function M(x,b){let R=u.get(b);return R!==void 0?++R.usedTimes:(R=new s0(i,b,x,s),c.push(R),u.set(b,R)),R}function T(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function S(x){o.remove(x)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:A,acquireProgram:M,releaseProgram:T,releaseShaderCache:S,programs:c,dispose:C}}function l0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function c0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function jh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Qh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,_,v,m,d){let E=i[e];return E===void 0?(E={id:h.id,object:h,geometry:p,material:_,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:d},i[e]=E):(E.id=h.id,E.object=h,E.geometry=p,E.material=_,E.materialVariant=a(h),E.groupOrder=v,E.renderOrder=h.renderOrder,E.z=m,E.group=d),e++,E}function l(h,p,_,v,m,d){let E=o(h,p,_,v,m,d);_.transmission>0?n.push(E):_.transparent===!0?s.push(E):t.push(E)}function c(h,p,_,v,m,d){let E=o(h,p,_,v,m,d);_.transmission>0?n.unshift(E):_.transparent===!0?s.unshift(E):t.unshift(E)}function u(h,p,_){t.length>1&&t.sort(h||c0),n.length>1&&n.sort(p||jh),s.length>1&&s.sort(p||jh),_&&(t.reverse(),n.reverse(),s.reverse())}function f(){for(let h=e,p=i.length;h<p;h++){let _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function h0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Qh,i.set(n,[a])):s>=r.length?(a=new Qh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function u0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ie};break;case"SpotLight":t={position:new I,direction:new I,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function d0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var f0=0;function p0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function m0(i){let e=new u0,t=d0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new it,a=new it;function o(c){let u=0,f=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,_=0,v=0,m=0,d=0,E=0,A=0,M=0,T=0,S=0,C=0;c.sort(p0);for(let b=0,R=c.length;b<R;b++){let P=c[b],U=P.color,G=P.intensity,X=P.distance,O=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===li?O=P.shadow.map.texture:O=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=U.r*G,f+=U.g*G,h+=U.b*G;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],G);C++}else if(P.isDirectionalLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let H=P.shadow,K=t.get(P);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=P.shadow.matrix,E++}n.directional[p]=W,p++}else if(P.isSpotLight){let W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(U).multiplyScalar(G),W.distance=X,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[v]=W;let H=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,H.updateMatrices(P),P.castShadow&&S++),n.spotLightMatrix[v]=H.matrix,P.castShadow){let K=t.get(P);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,n.spotShadow[v]=K,n.spotShadowMap[v]=O,M++}v++}else if(P.isRectAreaLight){let W=e.get(P);W.color.copy(U).multiplyScalar(G),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let H=P.shadow,K=t.get(P);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,K.shadowCameraNear=H.camera.near,K.shadowCameraFar=H.camera.far,n.pointShadow[_]=K,n.pointShadowMap[_]=O,n.pointShadowMatrix[_]=P.shadow.matrix,A++}n.point[_]=W,_++}else if(P.isHemisphereLight){let W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(G),W.groundColor.copy(P.groundColor).multiplyScalar(G),n.hemi[d]=W,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let x=n.hash;(x.directionalLength!==p||x.pointLength!==_||x.spotLength!==v||x.rectAreaLength!==m||x.hemiLength!==d||x.numDirectionalShadows!==E||x.numPointShadows!==A||x.numSpotShadows!==M||x.numSpotMaps!==T||x.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=M+T-S,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=C,x.directionalLength=p,x.pointLength=_,x.spotLength=v,x.rectAreaLength=m,x.hemiLength=d,x.numDirectionalShadows=E,x.numPointShadows=A,x.numSpotShadows=M,x.numSpotMaps=T,x.numLightProbes=C,n.version=f0++)}function l(c,u){let f=0,h=0,p=0,_=0,v=0,m=u.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){let A=c[d];if(A.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(A.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(A.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(A.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(A.width*.5,0,0),M.halfHeight.set(0,A.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(A.isPointLight){let M=n.point[h];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(m),h++}else if(A.isHemisphereLight){let M=n.hemi[v];M.direction.setFromMatrixPosition(A.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function eu(i){let e=new m0(i),t=[],n=[],s=[];function r(h){f.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function g0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new eu(i),e.set(s,[o])):r>=a.length?(o=new eu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var _0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x0=`uniform sampler2D shadow_pass;
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
}`,y0=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],v0=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],tu=new it,hr=new I,Vl=new I;function M0(i,e,t){let n=new Ki,s=new Re,r=new Re,a=new lt,o=new la,l=new ca,c={},u=t.maxTextureSize,f={[Fn]:Lt,[Lt]:Fn,[wn]:wn},h=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:_0,fragmentShader:x0}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let _=new Dt;_.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new at(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ks;let d=this.type;this.render=function(S,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Sa&&(Te("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ks);let b=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Tn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let G=d!==this.type;G&&C.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(O=>O.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,O=S.length;X<O;X++){let W=S[X],H=W.shadow;if(H===void 0){Te("WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let K=H.getFrameExtents();s.multiply(K),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/K.x),s.x=r.x*K.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/K.y),s.y=r.y*K.y,H.mapSize.y=r.y));let Q=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Q,H.map===null||G===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ts){if(W.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new $t(s.x,s.y,{format:li,type:En,minFilter:It,magFilter:It,generateMipmaps:!1}),H.map.texture.name=W.name+".shadowMap",H.map.depthTexture=new Bn(s.x,s.y,nn),H.map.depthTexture.name=W.name+".shadowMapDepth",H.map.depthTexture.format=bn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=At,H.map.depthTexture.magFilter=At}else W.isPointLight?(H.map=new go(s.x),H.map.depthTexture=new aa(s.x,mn)):(H.map=new $t(s.x,s.y),H.map.depthTexture=new Bn(s.x,s.y,mn)),H.map.depthTexture.name=W.name+".shadowMap",H.map.depthTexture.format=bn,this.type===Ks?(H.map.depthTexture.compareFunction=Q?fo:uo,H.map.depthTexture.minFilter=It,H.map.depthTexture.magFilter=It):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=At,H.map.depthTexture.magFilter=At);H.camera.updateProjectionMatrix()}let he=H.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<he;pe++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,pe),i.clear();else{pe===0&&(i.setRenderTarget(H.map),i.clear());let _e=H.getViewport(pe);a.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),U.viewport(a)}if(W.isPointLight){let _e=H.camera,qe=H.matrix,ht=W.distance||_e.far;ht!==_e.far&&(_e.far=ht,_e.updateProjectionMatrix()),hr.setFromMatrixPosition(W.matrixWorld),_e.position.copy(hr),Vl.copy(_e.position),Vl.add(y0[pe]),_e.up.copy(v0[pe]),_e.lookAt(Vl),_e.updateMatrixWorld(),qe.makeTranslation(-hr.x,-hr.y,-hr.z),tu.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),H._frustum.setFromProjectionMatrix(tu,_e.coordinateSystem,_e.reversedDepth)}else H.updateMatrices(W);n=H.getFrustum(),M(C,x,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===ts&&E(H,x),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,R,P)};function E(S,C){let x=e.update(v);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new $t(s.x,s.y,{format:li,type:En})),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(C,null,x,h,v,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(C,null,x,p,v,null)}function A(S,C,x,b){let R=null,P=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)R=P;else if(R=x.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let U=R.uuid,G=C.uuid,X=c[U];X===void 0&&(X={},c[U]=X);let O=X[G];O===void 0&&(O=R.clone(),X[G]=O,C.addEventListener("dispose",T)),R=O}if(R.visible=C.visible,R.wireframe=C.wireframe,b===ts?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:f[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=i.properties.get(R);U.light=x}return R}function M(S,C,x,b,R){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===ts)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let G=e.update(S),X=S.material;if(Array.isArray(X)){let O=G.groups;for(let W=0,H=O.length;W<H;W++){let K=O[W],Q=X[K.materialIndex];if(Q&&Q.visible){let he=A(S,Q,b,R);S.onBeforeShadow(i,S,C,x,G,he,K),i.renderBufferDirect(x,null,G,he,S,K),S.onAfterShadow(i,S,C,x,G,he,K)}}}else if(X.visible){let O=A(S,X,b,R);S.onBeforeShadow(i,S,C,x,G,O,null),i.renderBufferDirect(x,null,G,O,S,null),S.onAfterShadow(i,S,C,x,G,O,null)}}let U=S.children;for(let G=0,X=U.length;G<X;G++)M(U[G],C,x,b,R)}function T(S){S.target.removeEventListener("dispose",T);for(let x in c){let b=c[x],R=S.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function b0(i,e){function t(){let D=!1,ne=new lt,Z=null,oe=new lt(0,0,0,0);return{setMask:function(fe){Z!==fe&&!D&&(i.colorMask(fe,fe,fe,fe),Z=fe)},setLocked:function(fe){D=fe},setClear:function(fe,j,ve,xe,dt){dt===!0&&(fe*=xe,j*=xe,ve*=xe),ne.set(fe,j,ve,xe),oe.equals(ne)===!1&&(i.clearColor(fe,j,ve,xe),oe.copy(ne))},reset:function(){D=!1,Z=null,oe.set(-1,0,0,0)}}}function n(){let D=!1,ne=!1,Z=null,oe=null,fe=null;return{setReversed:function(j){if(ne!==j){let ve=e.get("EXT_clip_control");j?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),ne=j;let xe=fe;fe=null,this.setClear(xe)}},getReversed:function(){return ne},setTest:function(j){j?ee(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(j){Z!==j&&!D&&(i.depthMask(j),Z=j)},setFunc:function(j){if(ne&&(j=Ph[j]),oe!==j){switch(j){case Hr:i.depthFunc(i.NEVER);break;case Wr:i.depthFunc(i.ALWAYS);break;case Xr:i.depthFunc(i.LESS);break;case vi:i.depthFunc(i.LEQUAL);break;case qr:i.depthFunc(i.EQUAL);break;case Yr:i.depthFunc(i.GEQUAL);break;case Zr:i.depthFunc(i.GREATER);break;case $r:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=j}},setLocked:function(j){D=j},setClear:function(j){fe!==j&&(fe=j,ne&&(j=1-j),i.clearDepth(j))},reset:function(){D=!1,Z=null,oe=null,fe=null,ne=!1}}}function s(){let D=!1,ne=null,Z=null,oe=null,fe=null,j=null,ve=null,xe=null,dt=null;return{setTest:function(st){D||(st?ee(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(st){ne!==st&&!D&&(i.stencilMask(st),ne=st)},setFunc:function(st,_n,xn){(Z!==st||oe!==_n||fe!==xn)&&(i.stencilFunc(st,_n,xn),Z=st,oe=_n,fe=xn)},setOp:function(st,_n,xn){(j!==st||ve!==_n||xe!==xn)&&(i.stencilOp(st,_n,xn),j=st,ve=_n,xe=xn)},setLocked:function(st){D=st},setClear:function(st){dt!==st&&(i.clearStencil(st),dt=st)},reset:function(){D=!1,ne=null,Z=null,oe=null,fe=null,j=null,ve=null,xe=null,dt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},f={},h={},p=new WeakMap,_=[],v=null,m=!1,d=null,E=null,A=null,M=null,T=null,S=null,C=null,x=new Ie(0,0,0),b=0,R=!1,P=null,U=null,G=null,X=null,O=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,K=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Q)[1]),H=K>=1):Q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),H=K>=2);let he=null,pe={},_e=i.getParameter(i.SCISSOR_BOX),qe=i.getParameter(i.VIEWPORT),ht=new lt().fromArray(_e),Ye=new lt().fromArray(qe);function J(D,ne,Z,oe){let fe=new Uint8Array(4),j=i.createTexture();i.bindTexture(D,j),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ve=0;ve<Z;ve++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(ne+ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return j}let ie={};ie[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(vi),_t(!1),vt(dl),ee(i.CULL_FACE),Ze(Tn);function ee(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function De(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Ne(D,ne){return h[D]!==ne?(i.bindFramebuffer(D,ne),h[D]=ne,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ne),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ae(D,ne){let Z=_,oe=!1;if(D){Z=p.get(ne),Z===void 0&&(Z=[],p.set(ne,Z));let fe=D.textures;if(Z.length!==fe.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let j=0,ve=fe.length;j<ve;j++)Z[j]=i.COLOR_ATTACHMENT0+j;Z.length=fe.length,oe=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,oe=!0);oe&&i.drawBuffers(Z)}function pt(D){return v!==D?(i.useProgram(D),v=D,!0):!1}let Ge={[jn]:i.FUNC_ADD,[Qc]:i.FUNC_SUBTRACT,[eh]:i.FUNC_REVERSE_SUBTRACT};Ge[th]=i.MIN,Ge[nh]=i.MAX;let et={[ih]:i.ZERO,[sh]:i.ONE,[rh]:i.SRC_COLOR,[Vr]:i.SRC_ALPHA,[uh]:i.SRC_ALPHA_SATURATE,[ch]:i.DST_COLOR,[oh]:i.DST_ALPHA,[ah]:i.ONE_MINUS_SRC_COLOR,[Gr]:i.ONE_MINUS_SRC_ALPHA,[hh]:i.ONE_MINUS_DST_COLOR,[lh]:i.ONE_MINUS_DST_ALPHA,[dh]:i.CONSTANT_COLOR,[fh]:i.ONE_MINUS_CONSTANT_COLOR,[ph]:i.CONSTANT_ALPHA,[mh]:i.ONE_MINUS_CONSTANT_ALPHA};function Ze(D,ne,Z,oe,fe,j,ve,xe,dt,st){if(D===Tn){m===!0&&(De(i.BLEND),m=!1);return}if(m===!1&&(ee(i.BLEND),m=!0),D!==jc){if(D!==d||st!==R){if((E!==jn||T!==jn)&&(i.blendEquation(i.FUNC_ADD),E=jn,T=jn),st)switch(D){case yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fl:i.blendFunc(i.ONE,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ml:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pe("WebGLState: Invalid blending: ",D);break}else switch(D){case yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case pl:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ml:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",D);break}A=null,M=null,S=null,C=null,x.set(0,0,0),b=0,d=D,R=st}return}fe=fe||ne,j=j||Z,ve=ve||oe,(ne!==E||fe!==T)&&(i.blendEquationSeparate(Ge[ne],Ge[fe]),E=ne,T=fe),(Z!==A||oe!==M||j!==S||ve!==C)&&(i.blendFuncSeparate(et[Z],et[oe],et[j],et[ve]),A=Z,M=oe,S=j,C=ve),(xe.equals(x)===!1||dt!==b)&&(i.blendColor(xe.r,xe.g,xe.b,dt),x.copy(xe),b=dt),d=D,R=!1}function We(D,ne){D.side===wn?De(i.CULL_FACE):ee(i.CULL_FACE);let Z=D.side===Lt;ne&&(Z=!Z),_t(Z),D.blending===yi&&D.transparent===!1?Ze(Tn):Ze(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let oe=D.stencilWrite;o.setTest(oe),oe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(D){P!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),P=D)}function vt(D){D!==Jc?(ee(i.CULL_FACE),D!==U&&(D===dl?i.cullFace(i.BACK):D===Kc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),U=D}function Tt(D){D!==G&&(H&&i.lineWidth(D),G=D)}function Rt(D,ne,Z){D?(ee(i.POLYGON_OFFSET_FILL),(X!==ne||O!==Z)&&(X=ne,O=Z,a.getReversed()&&(ne=-ne),i.polygonOffset(ne,Z))):De(i.POLYGON_OFFSET_FILL)}function ut(D){D?ee(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function xt(D){D===void 0&&(D=i.TEXTURE0+W-1),he!==D&&(i.activeTexture(D),he=D)}function L(D,ne,Z){Z===void 0&&(he===null?Z=i.TEXTURE0+W-1:Z=he);let oe=pe[Z];oe===void 0&&(oe={type:void 0,texture:void 0},pe[Z]=oe),(oe.type!==D||oe.texture!==ne)&&(he!==Z&&(i.activeTexture(Z),he=Z),i.bindTexture(D,ne||ie[D]),oe.type=D,oe.texture=ne)}function Vt(){let D=pe[he];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Ke(){try{i.compressedTexImage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function g(){try{i.texSubImage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function F(){try{i.texSubImage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function te(){try{i.texStorage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function se(){try{i.texStorage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function Y(){try{i.texImage2D(...arguments)}catch(D){Pe("WebGLState:",D)}}function $(){try{i.texImage3D(...arguments)}catch(D){Pe("WebGLState:",D)}}function re(D){return f[D]!==void 0?f[D]:i.getParameter(D)}function Me(D,ne){f[D]!==ne&&(i.pixelStorei(D,ne),f[D]=ne)}function le(D){ht.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ht.copy(D))}function ae(D){Ye.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Ye.copy(D))}function we(D,ne){let Z=c.get(ne);Z===void 0&&(Z=new WeakMap,c.set(ne,Z));let oe=Z.get(D);oe===void 0&&(oe=i.getUniformBlockIndex(ne,D.name),Z.set(D,oe))}function Ce(D,ne){let oe=c.get(ne).get(D);l.get(ne)!==oe&&(i.uniformBlockBinding(ne,oe,D.__bindingPointIndex),l.set(ne,oe))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},he=null,pe={},h={},p=new WeakMap,_=[],v=null,m=!1,d=null,E=null,A=null,M=null,T=null,S=null,C=null,x=new Ie(0,0,0),b=0,R=!1,P=null,U=null,G=null,X=null,O=null,ht.set(0,0,i.canvas.width,i.canvas.height),Ye.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:De,bindFramebuffer:Ne,drawBuffers:Ae,useProgram:pt,setBlending:Ze,setMaterial:We,setFlipSided:_t,setCullFace:vt,setLineWidth:Tt,setPolygonOffset:Rt,setScissorTest:ut,activeTexture:xt,bindTexture:L,unbindTexture:Vt,compressedTexImage2D:Ke,compressedTexImage3D:w,texImage2D:Y,texImage3D:$,pixelStorei:Me,getParameter:re,updateUBOMapping:we,uniformBlockBinding:Ce,texStorage2D:te,texStorage3D:se,texSubImage2D:g,texSubImage3D:F,compressedTexSubImage2D:z,compressedTexSubImage3D:q,scissor:le,viewport:ae,reset:Ue}}function S0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,u=new WeakMap,f=new Set,h,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,g){return _?new OffscreenCanvas(w,g):ws("canvas")}function m(w,g,F){let z=1,q=Ke(w);if((q.width>F||q.height>F)&&(z=F/Math.max(q.width,q.height)),z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let te=Math.floor(z*q.width),se=Math.floor(z*q.height);h===void 0&&(h=v(te,se));let Y=g?v(te,se):h;return Y.width=te,Y.height=se,Y.getContext("2d").drawImage(w,0,0,te,se),Te("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+te+"x"+se+")."),Y}else return"data"in w&&Te("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),w;return w}function d(w){return w.generateMipmaps}function E(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(w,g,F,z,q,te=!1){if(w!==null){if(i[w]!==void 0)return i[w];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let se;z&&(se=e.get("EXT_texture_norm16"),se||Te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=g;if(g===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8),F===i.UNSIGNED_SHORT&&se&&(Y=se.R16_EXT),F===i.SHORT&&se&&(Y=se.R16_SNORM_EXT)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),g===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8),F===i.UNSIGNED_SHORT&&se&&(Y=se.RG16_EXT),F===i.SHORT&&se&&(Y=se.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),g===i.RGB&&(F===i.UNSIGNED_SHORT&&se&&(Y=se.RGB16_EXT),F===i.SHORT&&se&&(Y=se.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),g===i.RGBA){let $=te?Ss:He.getTransfer(q);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=$===Je?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&se&&(Y=se.RGBA16_EXT),F===i.SHORT&&se&&(Y=se.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function T(w,g){let F;return w?g===null||g===mn||g===is?F=i.DEPTH24_STENCIL8:g===nn?F=i.DEPTH32F_STENCIL8:g===ns&&(F=i.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===mn||g===is?F=i.DEPTH_COMPONENT24:g===nn?F=i.DEPTH_COMPONENT32F:g===ns&&(F=i.DEPTH_COMPONENT16),F}function S(w,g){return d(w)===!0||w.isFramebufferTexture&&w.minFilter!==At&&w.minFilter!==It?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function C(w){let g=w.target;g.removeEventListener("dispose",C),b(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function x(w){let g=w.target;g.removeEventListener("dispose",x),P(g)}function b(w){let g=n.get(w);if(g.__webglInit===void 0)return;let F=w.source,z=p.get(F);if(z){let q=z[g.__cacheKey];q.usedTimes--,q.usedTimes===0&&R(w),Object.keys(z).length===0&&p.delete(F)}n.remove(w)}function R(w){let g=n.get(w);i.deleteTexture(g.__webglTexture);let F=w.source,z=p.get(F);delete z[g.__cacheKey],a.memory.textures--}function P(w){let g=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(g.__webglFramebuffer[z]))for(let q=0;q<g.__webglFramebuffer[z].length;q++)i.deleteFramebuffer(g.__webglFramebuffer[z][q]);else i.deleteFramebuffer(g.__webglFramebuffer[z]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[z])}else{if(Array.isArray(g.__webglFramebuffer))for(let z=0;z<g.__webglFramebuffer.length;z++)i.deleteFramebuffer(g.__webglFramebuffer[z]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let z=0;z<g.__webglColorRenderbuffer.length;z++)g.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let F=w.textures;for(let z=0,q=F.length;z<q;z++){let te=n.get(F[z]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),n.remove(F[z])}n.remove(w)}let U=0;function G(){U=0}function X(){return U}function O(w){U=w}function W(){let w=U;return w>=s.maxTextures&&Te("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),U+=1,w}function H(w){let g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function K(w,g){let F=n.get(w);if(w.isVideoTexture&&L(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){let z=w.image;if(z===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{De(F,w,g);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function Q(w,g){let F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){De(F,w,g);return}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function he(w,g){let F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){De(F,w,g);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function pe(w,g){let F=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&F.__version!==w.version){Ne(F,w,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}let _e={[Jr]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[Kr]:i.MIRRORED_REPEAT},qe={[At]:i.NEAREST,[xh]:i.NEAREST_MIPMAP_NEAREST,[er]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[Aa]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},ht={[Mh]:i.NEVER,[Eh]:i.ALWAYS,[bh]:i.LESS,[uo]:i.LEQUAL,[Sh]:i.EQUAL,[fo]:i.GEQUAL,[wh]:i.GREATER,[Th]:i.NOTEQUAL};function Ye(w,g){if(g.type===nn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===It||g.magFilter===Aa||g.magFilter===er||g.magFilter===ai||g.minFilter===It||g.minFilter===Aa||g.minFilter===er||g.minFilter===ai)&&Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,_e[g.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,_e[g.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,_e[g.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,qe[g.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,qe[g.minFilter]),g.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ht[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===At||g.minFilter!==er&&g.minFilter!==ai||g.type===nn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function J(w,g){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",C));let z=g.source,q=p.get(z);q===void 0&&(q={},p.set(z,q));let te=H(g);if(te!==w.__cacheKey){q[te]===void 0&&(q[te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),q[te].usedTimes++;let se=q[w.__cacheKey];se!==void 0&&(q[w.__cacheKey].usedTimes--,se.usedTimes===0&&R(g)),w.__cacheKey=te,w.__webglTexture=q[te].texture}return F}function ie(w,g,F){return Math.floor(Math.floor(w/F)/g)}function ee(w,g,F,z){let te=w.updateRanges;if(te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,F,z,g.data);else{te.sort((Me,le)=>Me.start-le.start);let se=0;for(let Me=1;Me<te.length;Me++){let le=te[se],ae=te[Me],we=le.start+le.count,Ce=ie(ae.start,g.width,4),Ue=ie(le.start,g.width,4);ae.start<=we+1&&Ce===Ue&&ie(ae.start+ae.count-1,g.width,4)===Ce?le.count=Math.max(le.count,ae.start+ae.count-le.start):(++se,te[se]=ae)}te.length=se+1;let Y=t.getParameter(i.UNPACK_ROW_LENGTH),$=t.getParameter(i.UNPACK_SKIP_PIXELS),re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Me=0,le=te.length;Me<le;Me++){let ae=te[Me],we=Math.floor(ae.start/4),Ce=Math.ceil(ae.count/4),Ue=we%g.width,D=Math.floor(we/g.width),ne=Ce,Z=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Ue,D,ne,Z,F,z,g.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,$),t.pixelStorei(i.UNPACK_SKIP_ROWS,re)}}function De(w,g,F){let z=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(z=i.TEXTURE_3D);let q=J(w,g),te=g.source;t.bindTexture(z,w.__webglTexture,i.TEXTURE0+F);let se=n.get(te);if(te.version!==se.__version||q===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let Z=He.getPrimaries(He.workingColorSpace),oe=g.colorSpace===kn?null:He.getPrimaries(g.colorSpace),fe=g.colorSpace===kn||Z===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let $=m(g.image,!1,s.maxTextureSize);$=Vt(g,$);let re=r.convert(g.format,g.colorSpace),Me=r.convert(g.type),le=M(g.internalFormat,re,Me,g.normalized,g.colorSpace,g.isVideoTexture);Ye(z,g);let ae,we=g.mipmaps,Ce=g.isVideoTexture!==!0,Ue=se.__version===void 0||q===!0,D=te.dataReady,ne=S(g,$);if(g.isDepthTexture)le=T(g.format===oi,g.type),Ue&&(Ce?t.texStorage2D(i.TEXTURE_2D,1,le,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,le,$.width,$.height,0,re,Me,null));else if(g.isDataTexture)if(we.length>0){Ce&&Ue&&t.texStorage2D(i.TEXTURE_2D,ne,le,we[0].width,we[0].height);for(let Z=0,oe=we.length;Z<oe;Z++)ae=we[Z],Ce?D&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ae.width,ae.height,re,Me,ae.data):t.texImage2D(i.TEXTURE_2D,Z,le,ae.width,ae.height,0,re,Me,ae.data);g.generateMipmaps=!1}else Ce?(Ue&&t.texStorage2D(i.TEXTURE_2D,ne,le,$.width,$.height),D&&ee(g,$,re,Me)):t.texImage2D(i.TEXTURE_2D,0,le,$.width,$.height,0,re,Me,$.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ce&&Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,le,we[0].width,we[0].height,$.depth);for(let Z=0,oe=we.length;Z<oe;Z++)if(ae=we[Z],g.format!==sn)if(re!==null)if(Ce){if(D)if(g.layerUpdates.size>0){let fe=Ul(ae.width,ae.height,g.format,g.type);for(let j of g.layerUpdates){let ve=ae.data.subarray(j*fe/ae.data.BYTES_PER_ELEMENT,(j+1)*fe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,j,ae.width,ae.height,1,re,ve)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,$.depth,re,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,le,ae.width,ae.height,$.depth,0,ae.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,$.depth,re,Me,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,le,ae.width,ae.height,$.depth,0,re,Me,ae.data)}else{Ce&&Ue&&t.texStorage2D(i.TEXTURE_2D,ne,le,we[0].width,we[0].height);for(let Z=0,oe=we.length;Z<oe;Z++)ae=we[Z],g.format!==sn?re!==null?Ce?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ae.width,ae.height,re,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,le,ae.width,ae.height,0,ae.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?D&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ae.width,ae.height,re,Me,ae.data):t.texImage2D(i.TEXTURE_2D,Z,le,ae.width,ae.height,0,re,Me,ae.data)}else if(g.isDataArrayTexture)if(Ce){if(Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,le,$.width,$.height,$.depth),D)if(g.layerUpdates.size>0){let Z=Ul($.width,$.height,g.format,g.type);for(let oe of g.layerUpdates){let fe=$.data.subarray(oe*Z/$.data.BYTES_PER_ELEMENT,(oe+1)*Z/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,$.width,$.height,1,re,Me,fe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,re,Me,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,le,$.width,$.height,$.depth,0,re,Me,$.data);else if(g.isData3DTexture)Ce?(Ue&&t.texStorage3D(i.TEXTURE_3D,ne,le,$.width,$.height,$.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,re,Me,$.data)):t.texImage3D(i.TEXTURE_3D,0,le,$.width,$.height,$.depth,0,re,Me,$.data);else if(g.isFramebufferTexture){if(Ue)if(Ce)t.texStorage2D(i.TEXTURE_2D,ne,le,$.width,$.height);else{let Z=$.width,oe=$.height;for(let fe=0;fe<ne;fe++)t.texImage2D(i.TEXTURE_2D,fe,le,Z,oe,0,re,Me,null),Z>>=1,oe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),$.parentNode!==Z){Z.appendChild($),f.add(g),Z.onpaint=oe=>{let fe=oe.changedElements;for(let j of f)fe.includes(j.image)&&(j.needsUpdate=!0)},Z.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let fe=i.RGBA,j=i.RGBA,ve=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,fe,j,ve,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(we.length>0){if(Ce&&Ue){let Z=Ke(we[0]);t.texStorage2D(i.TEXTURE_2D,ne,le,Z.width,Z.height)}for(let Z=0,oe=we.length;Z<oe;Z++)ae=we[Z],Ce?D&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,re,Me,ae):t.texImage2D(i.TEXTURE_2D,Z,le,re,Me,ae);g.generateMipmaps=!1}else if(Ce){if(Ue){let Z=Ke($);t.texStorage2D(i.TEXTURE_2D,ne,le,Z.width,Z.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,Me,$)}else t.texImage2D(i.TEXTURE_2D,0,le,re,Me,$);d(g)&&E(z),se.__version=te.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Ne(w,g,F){if(g.image.length!==6)return;let z=J(w,g),q=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+F);let te=n.get(q);if(q.version!==te.__version||z===!0){t.activeTexture(i.TEXTURE0+F);let se=He.getPrimaries(He.workingColorSpace),Y=g.colorSpace===kn?null:He.getPrimaries(g.colorSpace),$=g.colorSpace===kn||se===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let re=g.isCompressedTexture||g.image[0].isCompressedTexture,Me=g.image[0]&&g.image[0].isDataTexture,le=[];for(let j=0;j<6;j++)!re&&!Me?le[j]=m(g.image[j],!0,s.maxCubemapSize):le[j]=Me?g.image[j].image:g.image[j],le[j]=Vt(g,le[j]);let ae=le[0],we=r.convert(g.format,g.colorSpace),Ce=r.convert(g.type),Ue=M(g.internalFormat,we,Ce,g.normalized,g.colorSpace),D=g.isVideoTexture!==!0,ne=te.__version===void 0||z===!0,Z=q.dataReady,oe=S(g,ae);Ye(i.TEXTURE_CUBE_MAP,g);let fe;if(re){D&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Ue,ae.width,ae.height);for(let j=0;j<6;j++){fe=le[j].mipmaps;for(let ve=0;ve<fe.length;ve++){let xe=fe[ve];g.format!==sn?we!==null?D?Z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,0,0,xe.width,xe.height,we,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,Ue,xe.width,xe.height,0,xe.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,0,0,xe.width,xe.height,we,Ce,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve,Ue,xe.width,xe.height,0,we,Ce,xe.data)}}}else{if(fe=g.mipmaps,D&&ne){fe.length>0&&oe++;let j=Ke(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Ue,j.width,j.height)}for(let j=0;j<6;j++)if(Me){D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,le[j].width,le[j].height,we,Ce,le[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ue,le[j].width,le[j].height,0,we,Ce,le[j].data);for(let ve=0;ve<fe.length;ve++){let dt=fe[ve].image[j].image;D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,0,0,dt.width,dt.height,we,Ce,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,Ue,dt.width,dt.height,0,we,Ce,dt.data)}}else{D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,we,Ce,le[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ue,we,Ce,le[j]);for(let ve=0;ve<fe.length;ve++){let xe=fe[ve];D?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,0,0,we,Ce,xe.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ve+1,Ue,we,Ce,xe.image[j])}}}d(g)&&E(i.TEXTURE_CUBE_MAP),te.__version=q.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Ae(w,g,F,z,q,te){let se=r.convert(F.format,F.colorSpace),Y=r.convert(F.type),$=M(F.internalFormat,se,Y,F.normalized,F.colorSpace),re=n.get(g),Me=n.get(F);if(Me.__renderTarget=g,!re.__hasExternalTextures){let le=Math.max(1,g.width>>te),ae=Math.max(1,g.height>>te);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,te,$,le,ae,g.depth,0,se,Y,null):t.texImage2D(q,te,$,le,ae,0,se,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),xt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,q,Me.__webglTexture,0,ut(g)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,q,Me.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(w,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,w),g.depthBuffer){let z=g.depthTexture,q=z&&z.isDepthTexture?z.type:null,te=T(g.stencilBuffer,q),se=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut(g),te,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut(g),te,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,te,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,w)}else{let z=g.textures;for(let q=0;q<z.length;q++){let te=z[q],se=r.convert(te.format,te.colorSpace),Y=r.convert(te.type),$=M(te.internalFormat,se,Y,te.normalized,te.colorSpace);xt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut(g),$,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut(g),$,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,$,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ge(w,g,F){let z=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(g.depthTexture);if(q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),z){if(q.__webglInit===void 0&&(q.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,g.depthTexture);let re=r.convert(g.depthTexture.format),Me=r.convert(g.depthTexture.type),le;g.depthTexture.format===bn?le=i.DEPTH_COMPONENT24:g.depthTexture.format===oi&&(le=i.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,le,g.width,g.height,0,re,Me,null)}}else K(g.depthTexture,0);let te=q.__webglTexture,se=ut(g),Y=z?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,$=g.depthTexture.format===oi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===bn)xt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Y,te,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,$,Y,te,0);else if(g.depthTexture.format===oi)xt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Y,te,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,$,Y,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(w){let g=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){let z=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),z){let q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,z.removeEventListener("dispose",q)};z.addEventListener("dispose",q),g.__depthDisposeCallback=q}g.__boundDepthTexture=z}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let z=0;z<6;z++)Ge(g.__webglFramebuffer[z],w,z);else{let z=w.texture.mipmaps;z&&z.length>0?Ge(g.__webglFramebuffer[0],w,0):Ge(g.__webglFramebuffer,w,0)}else if(F){g.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[z]),g.__webglDepthbuffer[z]===void 0)g.__webglDepthbuffer[z]=i.createRenderbuffer(),pt(g.__webglDepthbuffer[z],w,!1);else{let q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=g.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,te)}}else{let z=w.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),pt(g.__webglDepthbuffer,w,!1);else{let q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(w,g,F){let z=n.get(w);g!==void 0&&Ae(z.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&et(w)}function We(w){let g=w.texture,F=n.get(w),z=n.get(g);w.addEventListener("dispose",x);let q=w.textures,te=w.isWebGLCubeRenderTarget===!0,se=q.length>1;if(se||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=g.version,a.memory.textures++),te){F.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[Y]=[];for(let $=0;$<g.mipmaps.length;$++)F.__webglFramebuffer[Y][$]=i.createFramebuffer()}else F.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let Y=0;Y<g.mipmaps.length;Y++)F.__webglFramebuffer[Y]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(se)for(let Y=0,$=q.length;Y<$;Y++){let re=n.get(q[Y]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&xt(w)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Y=0;Y<q.length;Y++){let $=q[Y];F.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[Y]);let re=r.convert($.format,$.colorSpace),Me=r.convert($.type),le=M($.internalFormat,re,Me,$.normalized,$.colorSpace,w.isXRRenderTarget===!0),ae=ut(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,le,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,F.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,g);for(let Y=0;Y<6;Y++)if(g.mipmaps&&g.mipmaps.length>0)for(let $=0;$<g.mipmaps.length;$++)Ae(F.__webglFramebuffer[Y][$],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,$);else Ae(F.__webglFramebuffer[Y],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);d(g)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let Y=0,$=q.length;Y<$;Y++){let re=q[Y],Me=n.get(re),le=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,Me.__webglTexture),Ye(le,re),Ae(F.__webglFramebuffer,w,re,i.COLOR_ATTACHMENT0+Y,le,0),d(re)&&E(le)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Y=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,z.__webglTexture),Ye(Y,g),g.mipmaps&&g.mipmaps.length>0)for(let $=0;$<g.mipmaps.length;$++)Ae(F.__webglFramebuffer[$],w,g,i.COLOR_ATTACHMENT0,Y,$);else Ae(F.__webglFramebuffer,w,g,i.COLOR_ATTACHMENT0,Y,0);d(g)&&E(Y),t.unbindTexture()}w.depthBuffer&&et(w)}function _t(w){let g=w.textures;for(let F=0,z=g.length;F<z;F++){let q=g[F];if(d(q)){let te=A(w),se=n.get(q).__webglTexture;t.bindTexture(te,se),E(te),t.unbindTexture()}}}let vt=[],Tt=[];function Rt(w){if(w.samples>0){if(xt(w)===!1){let g=w.textures,F=w.width,z=w.height,q=i.COLOR_BUFFER_BIT,te=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(w),Y=g.length>1;if(Y)for(let re=0;re<g.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);let $=w.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let re=0;re<g.length;re++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[re]);let Me=n.get(g[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Me,0)}i.blitFramebuffer(0,0,F,z,0,0,F,z,q,i.NEAREST),l===!0&&(vt.length=0,Tt.length=0,vt.push(i.COLOR_ATTACHMENT0+re),w.depthBuffer&&w.resolveDepthBuffer===!1&&(vt.push(te),Tt.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Tt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,vt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let re=0;re<g.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,se.__webglColorRenderbuffer[re]);let Me=n.get(g[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,Me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let g=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ut(w){return Math.min(s.maxSamples,w.samples)}function xt(w){let g=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function L(w){let g=a.render.frame;u.get(w)!==g&&(u.set(w,g),w.update())}function Vt(w,g){let F=w.colorSpace,z=w.format,q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==bs&&F!==kn&&(He.getTransfer(F)===Je?(z!==sn||q!==Wt)&&Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",F)),g}function Ke(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=G,this.getTextureUnits=X,this.setTextureUnits=O,this.setTexture2D=K,this.setTexture2DArray=Q,this.setTexture3D=he,this.setTextureCube=pe,this.rebindTextures=Ze,this.setupRenderTarget=We,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function w0(i,e){function t(n,s=kn){let r,a=He.getTransfer(s);if(n===Wt)return i.UNSIGNED_BYTE;if(n===Ra)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===El)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sl)return i.BYTE;if(n===wl)return i.SHORT;if(n===ns)return i.UNSIGNED_SHORT;if(n===Ca)return i.INT;if(n===mn)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===Al)return i.ALPHA;if(n===Cl)return i.RGB;if(n===sn)return i.RGBA;if(n===bn)return i.DEPTH_COMPONENT;if(n===oi)return i.DEPTH_STENCIL;if(n===Ia)return i.RED;if(n===Da)return i.RED_INTEGER;if(n===li)return i.RG;if(n===La)return i.RG_INTEGER;if(n===Na)return i.RGBA_INTEGER;if(n===tr||n===nr||n===ir||n===sr)if(a===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Fa||n===Oa||n===Ba)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===za||n===Va||n===Ga||n===Ha||n===rr||n===Wa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ka||n===za)return a===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Va)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ga)return r.COMPRESSED_R11_EAC;if(n===Ha)return r.COMPRESSED_SIGNED_R11_EAC;if(n===rr)return r.COMPRESSED_RG11_EAC;if(n===Wa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ja||n===Ka||n===ja||n===Qa||n===eo||n===to||n===no||n===io||n===so)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Za)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$a)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eo)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===to)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===no)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===io)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===so)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ro||n===ao||n===oo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ro)return a===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ao)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lo||n===co||n===ar||n===ho)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===lo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===co)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ar)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var T0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E0=`
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

}`,$l=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Us(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Jt({vertexShader:T0,fragmentShader:E0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new ks(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jl=class extends dn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null,v=typeof XRWebGLBinding<"u",m=new $l,d={},E=t.getContextAttributes(),A=null,M=null,T=[],S=[],C=new Re,x=null,b=new Pt;b.viewport=new lt;let R=new Pt;R.viewport=new lt;let P=[b,R],U=new ba,G=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ie=T[J];return ie===void 0&&(ie=new Ji,T[J]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(J){let ie=T[J];return ie===void 0&&(ie=new Ji,T[J]=ie),ie.getGripSpace()},this.getHand=function(J){let ie=T[J];return ie===void 0&&(ie=new Ji,T[J]=ie),ie.getHandSpace()};function O(J){let ie=S.indexOf(J.inputSource);if(ie===-1)return;let ee=T[ie];ee!==void 0&&(ee.update(J.inputSource,J.frame,c||a),ee.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",H);for(let J=0;J<T.length;J++){let ie=S[J];ie!==null&&(S[J]=null,T[J].disconnect(ie))}G=null,X=null,m.reset();for(let J in d)delete d[J];e.setRenderTarget(A),p=null,h=null,f=null,s=null,M=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",W),s.addEventListener("inputsourceschange",H),E.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,De=null,Ne=null;E.depth&&(Ne=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=E.stencil?oi:bn,De=E.stencil?is:mn);let Ae={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ae),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new $t(h.textureWidth,h.textureHeight,{format:sn,type:Wt,depthTexture:new Bn(h.textureWidth,h.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let ee={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new $t(p.framebufferWidth,p.framebufferHeight,{format:sn,type:Wt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(J){for(let ie=0;ie<J.removed.length;ie++){let ee=J.removed[ie],De=S.indexOf(ee);De>=0&&(S[De]=null,T[De].disconnect(ee))}for(let ie=0;ie<J.added.length;ie++){let ee=J.added[ie],De=S.indexOf(ee);if(De===-1){for(let Ae=0;Ae<T.length;Ae++)if(Ae>=S.length){S.push(ee),De=Ae;break}else if(S[Ae]===null){S[Ae]=ee,De=Ae;break}if(De===-1)break}let Ne=T[De];Ne&&Ne.connect(ee)}}let K=new I,Q=new I;function he(J,ie,ee){K.setFromMatrixPosition(ie.matrixWorld),Q.setFromMatrixPosition(ee.matrixWorld);let De=K.distanceTo(Q),Ne=ie.projectionMatrix.elements,Ae=ee.projectionMatrix.elements,pt=Ne[14]/(Ne[10]-1),Ge=Ne[14]/(Ne[10]+1),et=(Ne[9]+1)/Ne[5],Ze=(Ne[9]-1)/Ne[5],We=(Ne[8]-1)/Ne[0],_t=(Ae[8]+1)/Ae[0],vt=pt*We,Tt=pt*_t,Rt=De/(-We+_t),ut=Rt*-We;if(ie.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ut),J.translateZ(Rt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ne[10]===-1)J.projectionMatrix.copy(ie.projectionMatrix),J.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let xt=pt+Rt,L=Ge+Rt,Vt=vt-ut,Ke=Tt+(De-ut),w=et*Ge/L*xt,g=Ze*Ge/L*xt;J.projectionMatrix.makePerspective(Vt,Ke,w,g,xt,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function pe(J,ie){ie===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ie.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ie=J.near,ee=J.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(ee=m.depthFar)),U.near=R.near=b.near=ie,U.far=R.far=b.far=ee,(G!==U.near||X!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),G=U.near,X=U.far),U.layers.mask=J.layers.mask|6,b.layers.mask=U.layers.mask&-5,R.layers.mask=U.layers.mask&-3;let De=J.parent,Ne=U.cameras;pe(U,De);for(let Ae=0;Ae<Ne.length;Ae++)pe(Ne[Ae],De);Ne.length===2?he(U,b,R):U.projectionMatrix.copy(b.projectionMatrix),_e(J,U,De)};function _e(J,ie,ee){ee===null?J.matrix.copy(ie.matrixWorld):(J.matrix.copy(ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(ie.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ie.projectionMatrix),J.projectionMatrixInverse.copy(ie.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Zi*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(J){return d[J]};let qe=null;function ht(J,ie){if(u=ie.getViewerPose(c||a),_=ie,u!==null){let ee=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let De=!1;ee.length!==U.cameras.length&&(U.cameras.length=0,De=!0);for(let Ge=0;Ge<ee.length;Ge++){let et=ee[Ge],Ze=null;if(p!==null)Ze=p.getViewport(et);else{let _t=f.getViewSubImage(h,et);Ze=_t.viewport,Ge===0&&(e.setRenderTargetTextures(M,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(M))}let We=P[Ge];We===void 0&&(We=new Pt,We.layers.enable(Ge),We.viewport=new lt,P[Ge]=We),We.matrix.fromArray(et.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(et.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Ge===0&&(U.matrix.copy(We.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),De===!0&&U.cameras.push(We)}let Ne=s.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let Ge=f.getDepthInformation(ee[0]);Ge&&Ge.isValid&&Ge.texture&&m.init(Ge,s.renderState)}if(Ne&&Ne.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let Ge=0;Ge<ee.length;Ge++){let et=ee[Ge].camera;if(et){let Ze=d[et];Ze||(Ze=new Us,d[et]=Ze);let We=f.getCameraImage(et);Ze.sourceTexture=We}}}}for(let ee=0;ee<T.length;ee++){let De=S[ee],Ne=T[ee];De!==null&&Ne!==void 0&&Ne.update(De,ie,c||a)}qe&&qe(J,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),_=null}let Ye=new nu;Ye.setAnimationLoop(ht),this.setAnimationLoop=function(J){qe=J},this.dispose=function(){}}},A0=new it,lu=new Le;lu.set(-1,0,0,0,1,0,0,0,1);function C0(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Dl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,A,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,E,A):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Lt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Lt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let E=e.get(d),A=E.envMap,M=E.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(A0.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(lu),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=A*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Lt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let E=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function R0(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){let S=T.program;n.uniformBlockBinding(M,S)}function c(M,T){let S=s[M.id];S===void 0&&(m(M),S=u(M),s[M.id]=S,M.addEventListener("dispose",E));let C=T.program;n.updateUBOMapping(M,C);let x=e.render.frame;r[M.id]!==x&&(h(M),r[M.id]=x)}function u(M){let T=f();M.__bindingPointIndex=T;let S=i.createBuffer(),C=M.__size,x=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,S),S}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let T=s[M.id],S=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let x=0,b=S.length;x<b;x++){let R=S[x];if(Array.isArray(R))for(let P=0,U=R.length;P<U;P++)p(R[P],x,P,C);else p(R,x,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,T,S,C){if(v(M,T,S,C)===!0){let x=M.__offset,b=M.value;if(Array.isArray(b)){let R=0;for(let P=0;P<b.length;P++){let U=b[P],G=d(U);_(U,M.__data,R),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(R+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(b,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,M.__data)}}function _(M,T,S){typeof M=="number"||typeof M=="boolean"?T[0]=M:M.isMatrix3?(T[0]=M.elements[0],T[1]=M.elements[1],T[2]=M.elements[2],T[3]=0,T[4]=M.elements[3],T[5]=M.elements[4],T[6]=M.elements[5],T[7]=0,T[8]=M.elements[6],T[9]=M.elements[7],T[10]=M.elements[8],T[11]=0):ArrayBuffer.isView(M)?T.set(new M.constructor(M.buffer,M.byteOffset,T.length)):M.toArray(T,S)}function v(M,T,S,C){let x=M.value,b=T+"_"+S;if(C[b]===void 0)return typeof x=="number"||typeof x=="boolean"?C[b]=x:ArrayBuffer.isView(x)?C[b]=x.slice():C[b]=x.clone(),!0;{let R=C[b];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return C[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(M){let T=M.uniforms,S=0,C=16;for(let b=0,R=T.length;b<R;b++){let P=Array.isArray(T[b])?T[b]:[T[b]];for(let U=0,G=P.length;U<G;U++){let X=P[U],O=Array.isArray(X.value)?X.value:[X.value];for(let W=0,H=O.length;W<H;W++){let K=O[W],Q=d(K),he=S%C,pe=he%Q.boundary,_e=he+pe;S+=pe,_e!==0&&C-_e<Q.storage&&(S+=C-_e),X.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=S,S+=Q.storage}}}let x=S%C;return x>0&&(S+=C-x),M.__size=S,M.__cache={},this}function d(M){let T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):Te("WebGLRenderer: Unsupported uniform value type.",M),T}function E(M){let T=M.target;T.removeEventListener("dispose",E);let S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function A(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var P0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),An=null;function I0(){return An===null&&(An=new Ps(P0,16,16,li,En),An.name="DFG_LUT",An.minFilter=It,An.magFilter=It,An.wrapS=Mn,An.wrapT=Mn,An.generateMipmaps=!1,An.needsUpdate=!0),An}var _o=class{constructor(e={}){let{canvas:t=Ah(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Wt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let v=p,m=new Set([Na,La,Da]),d=new Set([Wt,mn,ns,is,Ra,Pa]),E=new Uint32Array(4),A=new Int32Array(4),M=new I,T=null,S=null,C=[],x=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,U=null,G=null,X=null,O=null;this._outputColorSpace=kt;let W=0,H=0,K=null,Q=-1,he=null,pe=new lt,_e=new lt,qe=null,ht=new Ie(0),Ye=0,J=t.width,ie=t.height,ee=1,De=null,Ne=null,Ae=new lt(0,0,J,ie),pt=new lt(0,0,J,ie),Ge=!1,et=new Ki,Ze=!1,We=!1,_t=new it,vt=new I,Tt=new lt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function xt(){return K===null?ee:1}let L=n;function Vt(y,N){return t.getContext(y,N)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",dt,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",_n,!1),L===null){let N="webgl2";if(L=Vt(N,y),L===null)throw Vt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw Pe("WebGLRenderer: "+y.message),y}let Ke,w,g,F,z,q,te,se,Y,$,re,Me,le,ae,we,Ce,Ue,D,ne,Z,oe,fe,j;function ve(){Ke=new Bm(L),Ke.init(),oe=new w0(L,Ke),w=new Pm(L,Ke,e,oe),g=new b0(L,Ke),w.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),G=L.createFramebuffer(),X=L.createFramebuffer(),O=L.createFramebuffer(),F=new Vm(L),z=new l0,q=new S0(L,Ke,g,z,w,oe,F),te=new Om(R),se=new Wd(L),fe=new Cm(L,se),Y=new km(L,se,F,fe),$=new Hm(L,Y,se,fe,F),D=new Gm(L,w,q),we=new Im(z),re=new o0(R,te,Ke,w,fe,we),Me=new C0(R,z),le=new h0,ae=new g0(Ke),Ue=new Am(R,te,g,$,_,l),Ce=new M0(R,$,w),j=new R0(L,F,w,g),ne=new Rm(L,Ke,F),Z=new zm(L,Ke,F),F.programs=re.programs,R.capabilities=w,R.extensions=Ke,R.properties=z,R.renderLists=le,R.shadowMap=Ce,R.state=g,R.info=F}ve(),v!==Wt&&(b=new Xm(v,t.width,t.height,o,s,r));let xe=new Jl(R,L);this.xr=xe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let y=Ke.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Ke.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(y){y!==void 0&&(ee=y,this.setSize(J,ie,!1))},this.getSize=function(y){return y.set(J,ie)},this.setSize=function(y,N,V=!0){if(xe.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}J=y,ie=N,t.width=Math.floor(y*ee),t.height=Math.floor(N*ee),V===!0&&(t.style.width=y+"px",t.style.height=N+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(J*ee,ie*ee).floor()},this.setDrawingBufferSize=function(y,N,V){J=y,ie=N,ee=V,t.width=Math.floor(y*V),t.height=Math.floor(N*V),this.setViewport(0,0,y,N)},this.setEffects=function(y){if(v===Wt){Pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let N=0;N<y.length;N++)if(y[N].isOutputPass===!0){Te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(pe)},this.getViewport=function(y){return y.copy(Ae)},this.setViewport=function(y,N,V,B){y.isVector4?Ae.set(y.x,y.y,y.z,y.w):Ae.set(y,N,V,B),g.viewport(pe.copy(Ae).multiplyScalar(ee).round())},this.getScissor=function(y){return y.copy(pt)},this.setScissor=function(y,N,V,B){y.isVector4?pt.set(y.x,y.y,y.z,y.w):pt.set(y,N,V,B),g.scissor(_e.copy(pt).multiplyScalar(ee).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(y){g.setScissorTest(Ge=y)},this.setOpaqueSort=function(y){De=y},this.setTransparentSort=function(y){Ne=y},this.getClearColor=function(y){return y.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,V=!0){let B=0;if(y){let k=!1;if(K!==null){let de=K.texture.format;k=m.has(de)}if(k){let de=K.texture.type,ge=d.has(de),ue=Ue.getClearColor(),ye=Ue.getClearAlpha(),be=ue.r,Fe=ue.g,Be=ue.b;ge?(E[0]=be,E[1]=Fe,E[2]=Be,E[3]=ye,L.clearBufferuiv(L.COLOR,0,E)):(A[0]=be,A[1]=Fe,A[2]=Be,A[3]=ye,L.clearBufferiv(L.COLOR,0,A))}else B|=L.COLOR_BUFFER_BIT}N&&(B|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),U=y},this.dispose=function(){t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",_n,!1),Ue.dispose(),le.dispose(),ae.dispose(),z.dispose(),te.dispose(),$.dispose(),fe.dispose(),j.dispose(),re.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",mc),xe.removeEventListener("sessionend",gc),di.stop()};function dt(y){y.preventDefault(),Pl("WebGLRenderer: Context Lost."),P=!0}function st(){Pl("WebGLRenderer: Context Restored."),P=!1;let y=F.autoReset,N=Ce.enabled,V=Ce.autoUpdate,B=Ce.needsUpdate,k=Ce.type;ve(),F.autoReset=y,Ce.enabled=N,Ce.autoUpdate=V,Ce.needsUpdate=B,Ce.type=k}function _n(y){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function xn(y){let N=y.target;N.removeEventListener("dispose",xn),Vu(N)}function Vu(y){Gu(y),z.remove(y)}function Gu(y){let N=z.get(y).programs;N!==void 0&&(N.forEach(function(V){re.releaseProgram(V)}),y.isShaderMaterial&&re.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,V,B,k,de){N===null&&(N=Rt);let ge=k.isMesh&&k.matrixWorld.determinantAffine()<0,ue=Xu(y,N,V,B,k);g.setMaterial(B,ge);let ye=V.index,be=1;if(B.wireframe===!0){if(ye=Y.getWireframeAttribute(V),ye===void 0)return;be=2}let Fe=V.drawRange,Be=V.attributes.position,Se=Fe.start*be,je=(Fe.start+Fe.count)*be;de!==null&&(Se=Math.max(Se,de.start*be),je=Math.min(je,(de.start+de.count)*be)),ye!==null?(Se=Math.max(Se,0),je=Math.min(je,ye.count)):Be!=null&&(Se=Math.max(Se,0),je=Math.min(je,Be.count));let mt=je-Se;if(mt<0||mt===1/0)return;fe.setup(k,B,ue,V,ye);let ft,tt=ne;if(ye!==null&&(ft=se.get(ye),tt=Z,tt.setIndex(ft)),k.isMesh)B.wireframe===!0?(g.setLineWidth(B.wireframeLinewidth*xt()),tt.setMode(L.LINES)):tt.setMode(L.TRIANGLES);else if(k.isLine){let Nt=B.linewidth;Nt===void 0&&(Nt=1),g.setLineWidth(Nt*xt()),k.isLineSegments?tt.setMode(L.LINES):k.isLineLoop?tt.setMode(L.LINE_LOOP):tt.setMode(L.LINE_STRIP)}else k.isPoints?tt.setMode(L.POINTS):k.isSprite&&tt.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))tt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Nt=k._multiDrawStarts,me=k._multiDrawCounts,qt=k._multiDrawCount,Xe=ye?se.get(ye).bytesPerElement:1,jt=z.get(B).currentProgram.getUniforms();for(let yn=0;yn<qt;yn++)jt.setValue(L,"_gl_DrawID",yn),tt.render(Nt[yn]/Xe,me[yn])}else if(k.isInstancedMesh)tt.renderInstances(Se,mt,k.count);else if(V.isInstancedBufferGeometry){let Nt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,me=Math.min(V.instanceCount,Nt);tt.renderInstances(Se,mt,me)}else tt.render(Se,mt)};function pc(y,N,V){y.transparent===!0&&y.side===wn&&y.forceSinglePass===!1?(y.side=Lt,y.needsUpdate=!0,gr(y,N,V),y.side=Fn,y.needsUpdate=!0,gr(y,N,V),y.side=wn):gr(y,N,V)}this.compile=function(y,N,V=null){V===null&&(V=y),S=ae.get(V),S.init(N),x.push(S),V.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),y!==V&&y.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(S.pushLight(k),k.castShadow&&S.pushShadow(k))}),S.setupLights();let B=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let de=k.material;if(de)if(Array.isArray(de))for(let ge=0;ge<de.length;ge++){let ue=de[ge];pc(ue,V,k),B.add(ue)}else pc(de,V,k),B.add(de)}),S=x.pop(),B},this.compileAsync=function(y,N,V=null){let B=this.compile(y,N,V);return new Promise(k=>{function de(){if(B.forEach(function(ge){z.get(ge).currentProgram.isReady()&&B.delete(ge)}),B.size===0){k(y);return}setTimeout(de,10)}Ke.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Io=null;function Hu(y){Io&&Io(y)}function mc(){di.stop()}function gc(){di.start()}let di=new nu;di.setAnimationLoop(Hu),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(y){Io=y,xe.setAnimationLoop(y),y===null?di.stop():di.start()},xe.addEventListener("sessionstart",mc),xe.addEventListener("sessionend",gc),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;U!==null&&U.renderStart(y,N);let V=xe.enabled===!0&&xe.isPresenting===!0,B=b!==null&&(K===null||V)&&b.begin(R,K);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(N),N=xe.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,N,K),S=ae.get(y,x.length),S.init(N),S.state.textureUnits=q.getTextureUnits(),x.push(S),_t.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),et.setFromProjectionMatrix(_t,hn,N.reversedDepth),We=this.localClippingEnabled,Ze=we.init(this.clippingPlanes,We),T=le.get(y,C.length),T.init(),C.push(T),xe.enabled===!0&&xe.isPresenting===!0){let ge=R.xr.getDepthSensingMesh();ge!==null&&Do(ge,N,-1/0,R.sortObjects)}Do(y,N,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(De,Ne,N.reversedDepth),ut=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,ut&&Ue.addToRenderList(T,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&we.beginShadows();let k=S.state.shadowsArray;if(Ce.render(k,y,N),Ze===!0&&we.endShadows(),(B&&b.hasRenderPass())===!1){let ge=T.opaque,ue=T.transmissive;if(S.setupLights(),N.isArrayCamera){let ye=N.cameras;if(ue.length>0)for(let be=0,Fe=ye.length;be<Fe;be++){let Be=ye[be];xc(ge,ue,y,Be)}ut&&Ue.render(y);for(let be=0,Fe=ye.length;be<Fe;be++){let Be=ye[be];_c(T,y,Be,Be.viewport)}}else ue.length>0&&xc(ge,ue,y,N),ut&&Ue.render(y),_c(T,y,N)}K!==null&&H===0&&(q.updateMultisampleRenderTarget(K),q.updateRenderTargetMipmap(K)),B&&b.end(R),y.isScene===!0&&y.onAfterRender(R,y,N),fe.resetDefaultState(),Q=-1,he=null,x.pop(),x.length>0?(S=x[x.length-1],q.setTextureUnits(S.state.textureUnits),Ze===!0&&we.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,U!==null&&U.renderEnd()};function Do(y,N,V,B){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLightProbeGrid)S.pushLightProbeGrid(y);else if(y.isLight)S.pushLight(y),y.castShadow&&S.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||et.intersectsSprite(y)){B&&Tt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(_t);let ge=$.update(y),ue=y.material;ue.visible&&T.push(y,ge,ue,V,Tt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||et.intersectsObject(y))){let ge=$.update(y),ue=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Tt.copy(y.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Tt.copy(ge.boundingSphere.center)),Tt.applyMatrix4(y.matrixWorld).applyMatrix4(_t)),Array.isArray(ue)){let ye=ge.groups;for(let be=0,Fe=ye.length;be<Fe;be++){let Be=ye[be],Se=ue[Be.materialIndex];Se&&Se.visible&&T.push(y,ge,Se,V,Tt.z,Be)}}else ue.visible&&T.push(y,ge,ue,V,Tt.z,null)}}let de=y.children;for(let ge=0,ue=de.length;ge<ue;ge++)Do(de[ge],N,V,B)}function _c(y,N,V,B){let{opaque:k,transmissive:de,transparent:ge}=y;S.setupLightsView(V),Ze===!0&&we.setGlobalState(R.clippingPlanes,V),B&&g.viewport(pe.copy(B)),k.length>0&&mr(k,N,V),de.length>0&&mr(de,N,V),ge.length>0&&mr(ge,N,V),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function xc(y,N,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[B.id]===void 0){let Se=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[B.id]=new $t(1,1,{generateMipmaps:!0,type:Se?En:Wt,minFilter:ai,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace})}let de=S.state.transmissionRenderTarget[B.id],ge=B.viewport||pe;de.setSize(ge.z*R.transmissionResolutionScale,ge.w*R.transmissionResolutionScale);let ue=R.getRenderTarget(),ye=R.getActiveCubeFace(),be=R.getActiveMipmapLevel();R.setRenderTarget(de),R.getClearColor(ht),Ye=R.getClearAlpha(),Ye<1&&R.setClearColor(16777215,.5),R.clear(),ut&&Ue.render(V);let Fe=R.toneMapping;R.toneMapping=pn;let Be=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),S.setupLightsView(B),Ze===!0&&we.setGlobalState(R.clippingPlanes,B),mr(y,V,B),q.updateMultisampleRenderTarget(de),q.updateRenderTargetMipmap(de),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let je=0,mt=N.length;je<mt;je++){let ft=N[je],{object:tt,geometry:Nt,material:me,group:qt}=ft;if(me.side===wn&&tt.layers.test(B.layers)){let Xe=me.side;me.side=Lt,me.needsUpdate=!0,yc(tt,V,B,Nt,me,qt),me.side=Xe,me.needsUpdate=!0,Se=!0}}Se===!0&&(q.updateMultisampleRenderTarget(de),q.updateRenderTargetMipmap(de))}R.setRenderTarget(ue,ye,be),R.setClearColor(ht,Ye),Be!==void 0&&(B.viewport=Be),R.toneMapping=Fe}function mr(y,N,V){let B=N.isScene===!0?N.overrideMaterial:null;for(let k=0,de=y.length;k<de;k++){let ge=y[k],{object:ue,geometry:ye,group:be}=ge,Fe=ge.material;Fe.allowOverride===!0&&B!==null&&(Fe=B),ue.layers.test(V.layers)&&yc(ue,N,V,ye,Fe,be)}}function yc(y,N,V,B,k,de){y.onBeforeRender(R,N,V,B,k,de),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(R,N,V,B,y,de),k.transparent===!0&&k.side===wn&&k.forceSinglePass===!1?(k.side=Lt,k.needsUpdate=!0,R.renderBufferDirect(V,N,B,k,y,de),k.side=Fn,k.needsUpdate=!0,R.renderBufferDirect(V,N,B,k,y,de),k.side=wn):R.renderBufferDirect(V,N,B,k,y,de),y.onAfterRender(R,N,V,B,k,de)}function gr(y,N,V){N.isScene!==!0&&(N=Rt);let B=z.get(y),k=S.state.lights,de=S.state.shadowsArray,ge=k.state.version,ue=re.getParameters(y,k.state,de,N,V,S.state.lightProbeGridArray),ye=re.getProgramCacheKey(ue),be=B.programs;B.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,B.fog=N.fog;let Fe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;B.envMap=te.get(y.envMap||B.environment,Fe),B.envMapRotation=B.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,be===void 0&&(y.addEventListener("dispose",xn),be=new Map,B.programs=be);let Be=be.get(ye);if(Be!==void 0){if(B.currentProgram===Be&&B.lightsStateVersion===ge)return Mc(y,ue),Be}else ue.uniforms=re.getUniforms(y),U!==null&&y.isNodeMaterial&&U.build(y,V,ue),y.onBeforeCompile(ue,R),Be=re.acquireProgram(ue,ye),be.set(ye,Be),B.uniforms=ue.uniforms;let Se=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Se.clippingPlanes=we.uniform),Mc(y,ue),B.needsLights=Yu(y),B.lightsStateVersion=ge,B.needsLights&&(Se.ambientLightColor.value=k.state.ambient,Se.lightProbe.value=k.state.probe,Se.directionalLights.value=k.state.directional,Se.directionalLightShadows.value=k.state.directionalShadow,Se.spotLights.value=k.state.spot,Se.spotLightShadows.value=k.state.spotShadow,Se.rectAreaLights.value=k.state.rectArea,Se.ltc_1.value=k.state.rectAreaLTC1,Se.ltc_2.value=k.state.rectAreaLTC2,Se.pointLights.value=k.state.point,Se.pointLightShadows.value=k.state.pointShadow,Se.hemisphereLights.value=k.state.hemi,Se.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Se.spotLightMatrix.value=k.state.spotLightMatrix,Se.spotLightMap.value=k.state.spotLightMap,Se.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=S.state.lightProbeGridArray.length>0,B.currentProgram=Be,B.uniformsList=null,Be}function vc(y){if(y.uniformsList===null){let N=y.currentProgram.getUniforms();y.uniformsList=as.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Mc(y,N){let V=z.get(y);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Wu(y,N){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(N.matrixWorld);for(let V=0,B=y.length;V<B;V++){let k=y[V];if(k.texture!==null&&k.boundingBox.containsPoint(M))return k}return null}function Xu(y,N,V,B,k){N.isScene!==!0&&(N=Rt),q.resetTextureUnits();let de=N.fog,ge=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?N.environment:null,ue=K===null?R.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:He.workingColorSpace,ye=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,be=te.get(B.envMap||ge,ye),Fe=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Be=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Se=!!V.morphAttributes.position,je=!!V.morphAttributes.normal,mt=!!V.morphAttributes.color,ft=pn;B.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ft=R.toneMapping);let tt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Nt=tt!==void 0?tt.length:0,me=z.get(B),qt=S.state.lights;if(Ze===!0&&(We===!0||y!==he)){let rt=y===he&&B.id===Q;we.setState(B,y,rt)}let Xe=!1;B.version===me.__version?(me.needsLights&&me.lightsStateVersion!==qt.state.version||me.outputColorSpace!==ue||k.isBatchedMesh&&me.batching===!1||!k.isBatchedMesh&&me.batching===!0||k.isBatchedMesh&&me.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&me.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&me.instancing===!1||!k.isInstancedMesh&&me.instancing===!0||k.isSkinnedMesh&&me.skinning===!1||!k.isSkinnedMesh&&me.skinning===!0||k.isInstancedMesh&&me.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&me.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&me.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&me.instancingMorph===!1&&k.morphTexture!==null||me.envMap!==be||B.fog===!0&&me.fog!==de||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==we.numPlanes||me.numIntersection!==we.numIntersection)||me.vertexAlphas!==Fe||me.vertexTangents!==Be||me.morphTargets!==Se||me.morphNormals!==je||me.morphColors!==mt||me.toneMapping!==ft||me.morphTargetsCount!==Nt||!!me.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Xe=!0):(Xe=!0,me.__version=B.version);let jt=me.currentProgram;Xe===!0&&(jt=gr(B,N,k),U&&B.isNodeMaterial&&U.onUpdateProgram(B,jt,me));let yn=!1,Gn=!1,Ri=!1,nt=jt.getUniforms(),gt=me.uniforms;if(g.useProgram(jt.program)&&(yn=!0,Gn=!0,Ri=!0),B.id!==Q&&(Q=B.id,Gn=!0),me.needsLights){let rt=Wu(S.state.lightProbeGridArray,k);me.lightProbeGrid!==rt&&(me.lightProbeGrid=rt,Gn=!0)}if(yn||he!==y){g.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),nt.setValue(L,"projectionMatrix",y.projectionMatrix),nt.setValue(L,"viewMatrix",y.matrixWorldInverse);let Wn=nt.map.cameraPosition;Wn!==void 0&&Wn.setValue(L,vt.setFromMatrixPosition(y.matrixWorld)),w.logarithmicDepthBuffer&&nt.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&nt.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),he!==y&&(he=y,Gn=!0,Ri=!0)}if(me.needsLights&&(qt.state.directionalShadowMap.length>0&&nt.setValue(L,"directionalShadowMap",qt.state.directionalShadowMap,q),qt.state.spotShadowMap.length>0&&nt.setValue(L,"spotShadowMap",qt.state.spotShadowMap,q),qt.state.pointShadowMap.length>0&&nt.setValue(L,"pointShadowMap",qt.state.pointShadowMap,q)),k.isSkinnedMesh){nt.setOptional(L,k,"bindMatrix"),nt.setOptional(L,k,"bindMatrixInverse");let rt=k.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),nt.setValue(L,"boneTexture",rt.boneTexture,q))}k.isBatchedMesh&&(nt.setOptional(L,k,"batchingTexture"),nt.setValue(L,"batchingTexture",k._matricesTexture,q),nt.setOptional(L,k,"batchingIdTexture"),nt.setValue(L,"batchingIdTexture",k._indirectTexture,q),nt.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&nt.setValue(L,"batchingColorTexture",k._colorsTexture,q));let Hn=V.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&D.update(k,V,jt),(Gn||me.receiveShadow!==k.receiveShadow)&&(me.receiveShadow=k.receiveShadow,nt.setValue(L,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&N.environment!==null&&(gt.envMapIntensity.value=N.environmentIntensity),gt.dfgLUT!==void 0&&(gt.dfgLUT.value=I0()),Gn){if(nt.setValue(L,"toneMappingExposure",R.toneMappingExposure),me.needsLights&&qu(gt,Ri),de&&B.fog===!0&&Me.refreshFogUniforms(gt,de),Me.refreshMaterialUniforms(gt,B,ee,ie,S.state.transmissionRenderTarget[y.id]),me.needsLights&&me.lightProbeGrid){let rt=me.lightProbeGrid;gt.probesSH.value=rt.texture,gt.probesMin.value.copy(rt.boundingBox.min),gt.probesMax.value.copy(rt.boundingBox.max),gt.probesResolution.value.copy(rt.resolution)}as.upload(L,vc(me),gt,q)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(as.upload(L,vc(me),gt,q),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&nt.setValue(L,"center",k.center),nt.setValue(L,"modelViewMatrix",k.modelViewMatrix),nt.setValue(L,"normalMatrix",k.normalMatrix),nt.setValue(L,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){let rt=B.uniformsGroups;for(let Wn=0,Pi=rt.length;Wn<Pi;Wn++){let bc=rt[Wn];j.update(bc,jt),j.bind(bc,jt)}}return jt}function qu(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Yu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(y,N,V){let B=z.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),z.get(y.texture).__webglTexture=N,z.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){let V=z.get(y);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(y,N=0,V=0){K=y,W=N,H=V;let B=null,k=!1,de=!1;if(y){let ue=z.get(y);if(ue.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(L.FRAMEBUFFER,ue.__webglFramebuffer),pe.copy(y.viewport),_e.copy(y.scissor),qe=y.scissorTest,g.viewport(pe),g.scissor(_e),g.setScissorTest(qe),Q=-1;return}else if(ue.__webglFramebuffer===void 0)q.setupRenderTarget(y);else if(ue.__hasExternalTextures)q.rebindTextures(y,z.get(y.texture).__webglTexture,z.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Fe=y.depthTexture;if(ue.__boundDepthTexture!==Fe){if(Fe!==null&&z.has(Fe)&&(y.width!==Fe.image.width||y.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(y)}}let ye=y.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(de=!0);let be=z.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(be[N])?B=be[N][V]:B=be[N],k=!0):y.samples>0&&q.useMultisampledRTT(y)===!1?B=z.get(y).__webglMultisampledFramebuffer:Array.isArray(be)?B=be[V]:B=be,pe.copy(y.viewport),_e.copy(y.scissor),qe=y.scissorTest}else pe.copy(Ae).multiplyScalar(ee).floor(),_e.copy(pt).multiplyScalar(ee).floor(),qe=Ge;if(V!==0&&(B=G),g.bindFramebuffer(L.FRAMEBUFFER,B)&&g.drawBuffers(y,B),g.viewport(pe),g.scissor(_e),g.setScissorTest(qe),k){let ue=z.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,ue.__webglTexture,V)}else if(de){let ue=N;for(let ye=0;ye<y.textures.length;ye++){let be=z.get(y.textures[ye]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ye,be.__webglTexture,V,ue)}}else if(y!==null&&V!==0){let ue=z.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ue.__webglTexture,V)}Q=-1},this.readRenderTargetPixels=function(y,N,V,B,k,de,ge,ue=0){if(!(y&&y.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=z.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye){g.bindFramebuffer(L.FRAMEBUFFER,ye);try{let be=y.textures[ue],Fe=be.format,Be=be.type;if(y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ue),!w.textureFormatReadable(Fe)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(Be)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-B&&V>=0&&V<=y.height-k&&L.readPixels(N,V,B,k,oe.convert(Fe),oe.convert(Be),de)}finally{let be=K!==null?z.get(K).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(y,N,V,B,k,de,ge,ue=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=z.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye)if(N>=0&&N<=y.width-B&&V>=0&&V<=y.height-k){g.bindFramebuffer(L.FRAMEBUFFER,ye);let be=y.textures[ue],Fe=be.format,Be=be.type;if(y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ue),!w.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Se=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Se),L.bufferData(L.PIXEL_PACK_BUFFER,de.byteLength,L.STREAM_READ),L.readPixels(N,V,B,k,oe.convert(Fe),oe.convert(Be),0);let je=K!==null?z.get(K).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,je);let mt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Rh(L,mt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Se),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,de),L.deleteBuffer(Se),L.deleteSync(mt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,V=0){let B=Math.pow(2,-V),k=Math.floor(y.image.width*B),de=Math.floor(y.image.height*B),ge=N!==null?N.x:0,ue=N!==null?N.y:0;q.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,ge,ue,k,de),g.unbindTexture()},this.copyTextureToTexture=function(y,N,V=null,B=null,k=0,de=0){let ge,ue,ye,be,Fe,Be,Se,je,mt,ft=y.isCompressedTexture?y.mipmaps[de]:y.image;if(V!==null)ge=V.max.x-V.min.x,ue=V.max.y-V.min.y,ye=V.isBox3?V.max.z-V.min.z:1,be=V.min.x,Fe=V.min.y,Be=V.isBox3?V.min.z:0;else{let gt=Math.pow(2,-k);ge=Math.floor(ft.width*gt),ue=Math.floor(ft.height*gt),y.isDataArrayTexture?ye=ft.depth:y.isData3DTexture?ye=Math.floor(ft.depth*gt):ye=1,be=0,Fe=0,Be=0}B!==null?(Se=B.x,je=B.y,mt=B.z):(Se=0,je=0,mt=0);let tt=oe.convert(N.format),Nt=oe.convert(N.type),me;N.isData3DTexture?(q.setTexture3D(N,0),me=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(q.setTexture2DArray(N,0),me=L.TEXTURE_2D_ARRAY):(q.setTexture2D(N,0),me=L.TEXTURE_2D),g.activeTexture(L.TEXTURE0),g.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),g.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),g.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let qt=g.getParameter(L.UNPACK_ROW_LENGTH),Xe=g.getParameter(L.UNPACK_IMAGE_HEIGHT),jt=g.getParameter(L.UNPACK_SKIP_PIXELS),yn=g.getParameter(L.UNPACK_SKIP_ROWS),Gn=g.getParameter(L.UNPACK_SKIP_IMAGES);g.pixelStorei(L.UNPACK_ROW_LENGTH,ft.width),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft.height),g.pixelStorei(L.UNPACK_SKIP_PIXELS,be),g.pixelStorei(L.UNPACK_SKIP_ROWS,Fe),g.pixelStorei(L.UNPACK_SKIP_IMAGES,Be);let Ri=y.isDataArrayTexture||y.isData3DTexture,nt=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){let gt=z.get(y),Hn=z.get(N),rt=z.get(gt.__renderTarget),Wn=z.get(Hn.__renderTarget);g.bindFramebuffer(L.READ_FRAMEBUFFER,rt.__webglFramebuffer),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Pi=0;Pi<ye;Pi++)Ri&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(y).__webglTexture,k,Be+Pi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(N).__webglTexture,de,mt+Pi)),L.blitFramebuffer(be,Fe,ge,ue,Se,je,ge,ue,L.DEPTH_BUFFER_BIT,L.NEAREST);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||z.has(y)){let gt=z.get(y),Hn=z.get(N);g.bindFramebuffer(L.READ_FRAMEBUFFER,X),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,O);for(let rt=0;rt<ye;rt++)Ri?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,gt.__webglTexture,k,Be+rt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,gt.__webglTexture,k),nt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Hn.__webglTexture,de,mt+rt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Hn.__webglTexture,de),k!==0?L.blitFramebuffer(be,Fe,ge,ue,Se,je,ge,ue,L.COLOR_BUFFER_BIT,L.NEAREST):nt?L.copyTexSubImage3D(me,de,Se,je,mt+rt,be,Fe,ge,ue):L.copyTexSubImage2D(me,de,Se,je,be,Fe,ge,ue);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else nt?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(me,de,Se,je,mt,ge,ue,ye,tt,Nt,ft.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(me,de,Se,je,mt,ge,ue,ye,tt,ft.data):L.texSubImage3D(me,de,Se,je,mt,ge,ue,ye,tt,Nt,ft):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,de,Se,je,ge,ue,tt,Nt,ft.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,de,Se,je,ft.width,ft.height,tt,ft.data):L.texSubImage2D(L.TEXTURE_2D,de,Se,je,ge,ue,tt,Nt,ft);g.pixelStorei(L.UNPACK_ROW_LENGTH,qt),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Xe),g.pixelStorei(L.UNPACK_SKIP_PIXELS,jt),g.pixelStorei(L.UNPACK_SKIP_ROWS,yn),g.pixelStorei(L.UNPACK_SKIP_IMAGES,Gn),de===0&&N.generateMipmaps&&L.generateMipmap(me),g.unbindTexture()},this.initRenderTarget=function(y){z.get(y).__webglFramebuffer===void 0&&q.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?q.setTextureCube(y,0):y.isData3DTexture?q.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?q.setTexture2DArray(y,0):q.setTexture2D(y,0),g.unbindTexture()},this.resetState=function(){W=0,H=0,K=null,g.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}};var hu={type:"change"},jl={type:"start"},du={type:"end"},vo=new bi,uu=new en,D0=Math.cos(70*lr.DEG2RAD),wt=new I,Xt=2*Math.PI,Qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Kl=1e-6,Mo=class extends Js{constructor(e,t=null){super(e,t),this.state=Qe.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ii.ROTATE,MIDDLE:ii.DOLLY,RIGHT:ii.PAN},this.touches={ONE:si.ROTATE,TWO:si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new zt,this._lastTargetPosition=new I,this._quat=new zt().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new es,this._sphericalDelta=new es,this._scale=1,this._panOffset=new I,this._rotateStart=new Re,this._rotateEnd=new Re,this._rotateDelta=new Re,this._panStart=new Re,this._panEnd=new Re,this._panDelta=new Re,this._dollyStart=new Re,this._dollyEnd=new Re,this._dollyDelta=new Re,this._dollyDirection=new I,this._mouse=new Re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=N0.bind(this),this._onPointerDown=L0.bind(this),this._onPointerUp=U0.bind(this),this._onContextMenu=G0.bind(this),this._onMouseWheel=B0.bind(this),this._onKeyDown=k0.bind(this),this._onTouchStart=z0.bind(this),this._onTouchMove=V0.bind(this),this._onMouseDown=F0.bind(this),this._onMouseMove=O0.bind(this),this._interceptControlDown=H0.bind(this),this._interceptControlUp=W0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hu),this.update(),this.state=Qe.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;wt.copy(t).sub(this.target),wt.applyQuaternion(this._quat),this._spherical.setFromVector3(wt),this.autoRotate&&this.state===Qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Xt:n>Math.PI&&(n-=Xt),s<-Math.PI?s+=Xt:s>Math.PI&&(s-=Xt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(wt.setFromSpherical(this._spherical),wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=wt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(vo.origin.copy(this.object.position),vo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vo.direction))<D0?this.object.lookAt(this.target):(uu.setFromNormalAndCoplanarPoint(this.object.up,this.target),vo.intersectPlane(uu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Kl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Kl||this._lastTargetPosition.distanceToSquared(this.target)>Kl?(this.dispatchEvent(hu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xt/60*this.autoRotateSpeed*e:Xt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){wt.setFromMatrixColumn(t,0),wt.multiplyScalar(-e),this._panOffset.add(wt)}_panUp(e,t){this.screenSpacePanning===!0?wt.setFromMatrixColumn(t,1):(wt.setFromMatrixColumn(t,0),wt.crossVectors(this.object.up,wt)),wt.multiplyScalar(e),this._panOffset.add(wt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;wt.copy(s).sub(this.target);let r=wt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function L0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function N0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function U0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(du),this.state=Qe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function F0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ii.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Qe.DOLLY;break;case ii.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qe.ROTATE}break;case ii.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qe.PAN}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(jl)}function O0(i){switch(this.state){case Qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function B0(i){this.enabled===!1||this.enableZoom===!1||this.state!==Qe.NONE||(i.preventDefault(),this.dispatchEvent(jl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(du))}function k0(i){this.enabled!==!1&&this._handleKeyDown(i)}function z0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case si.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Qe.TOUCH_ROTATE;break;case si.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Qe.TOUCH_PAN;break;default:this.state=Qe.NONE}break;case 2:switch(this.touches.TWO){case si.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Qe.TOUCH_DOLLY_PAN;break;case si.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Qe.TOUCH_DOLLY_ROTATE;break;default:this.state=Qe.NONE}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(jl)}function V0(i){switch(this._trackPointer(i),this.state){case Qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Qe.NONE}}function G0(i){this.enabled!==!1&&i.preventDefault()}function H0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function W0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var bo=class extends Mi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new tn;e.deleteAttribute("uv");let t=new Qn({side:Lt}),n=new Qn,s=new Ys(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new at(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Ds(e,n,6),o=new Mt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new at(e,cs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new at(e,cs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new at(e,cs(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let f=new at(e,cs(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let h=new at(e,cs(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let p=new at(e,cs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function cs(i){return new Hs({color:0,emissive:16777215,emissiveIntensity:i})}var X0=["box","plate","cylinder","cone","sphere","capsule","torus","tube"],fu=i=>{let e=i?.parent;if(e==null)return null;let t=String(e).trim();return t===""||t==="null"||t==="none"||t==="root"?null:t};function So(i){let e=[];if(!i||typeof i!="object")return{ok:!1,errors:["\uC0AC\uC591\uC774 \uAC1D\uCCB4\uAC00 \uC544\uB2D9\uB2C8\uB2E4"]};let t=i.componentTree;(!Array.isArray(t)||!t.length)&&e.push("componentTree \uAC00 \uBE44\uC5B4 \uC788\uC2B5\uB2C8\uB2E4");let n=new Set;for(let[r,a]of(t||[]).entries()){let o=`componentTree[${r}]`;a.id?n.has(a.id)?e.push(`${o}: id "${a.id}" \uAC00 \uC911\uBCF5\uC785\uB2C8\uB2E4`):n.add(a.id):e.push(`${o}: id \uAC00 \uC5C6\uC2B5\uB2C8\uB2E4`),X0.includes(a.primitive)||e.push(`${o}: primitive "${a.primitive}" \uB294 \uB9CC\uB4E4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4`);let l=a.dimensions||{};for(let c of["width","height","depth"])l[c]>0||e.push(`${o}: dimensions.${c} \uAC00 \uD544\uC694\uD569\uB2C8\uB2E4`)}let s=new Set;for(let r of t||[]){let a=fu(r);a&&!s.has(a)&&e.push(`${r.id}: \uBD80\uBAA8 "${a}" \uAC00 \uC55E\uC5D0 \uC5C6\uC2B5\uB2C8\uB2E4`),s.add(r.id)}return{ok:!e.length,errors:e}}function q0(i,e){let t=(i.materials||[]).find(n=>n.id===e)||{};return new Qn({color:new Ie(t.color||"#9AA6BF"),roughness:t.roughness??.55,metalness:t.metalness??.1,transparent:(t.opacity??1)<1,opacity:t.opacity??1})}function Y0(i,e){let t=i.dimensions,n=t.width,s=t.height,r=t.depth,a=Math.max(n,r)/2;switch(i.primitive){case"box":return new tn(n,s,r);case"plate":return new tn(n,Math.max(s,.004),r);case"cylinder":return new Si((i.topScale??1)*(n/2),n/2,s,e);case"cone":return new Bs(n/2,s,e);case"sphere":return new zs(a,e,Math.max(8,Math.round(e/2)));case"capsule":return new Fs(n/2,Math.max(.001,s-n),6,e);case"torus":return new Vs(Math.max(.001,n/2-(i.tubeRadius??s/2)),i.tubeRadius??s/2,12,e);case"tube":{let o=new I(...i.from||[0,0,0]),l=new I(...i.to||[0,s,0]),c=new Si(n/2,n/2,Math.max(1e-4,o.distanceTo(l)),e),u=l.clone().sub(o).normalize();c.applyQuaternion(new zt().setFromUnitVectors(new I(0,1,0),u));let f=o.clone().add(l).multiplyScalar(.5);return c.translate(f.x,f.y,f.z),c}default:return new tn(n,s,r)}}var Z0=(i,e)=>(i?.sockets||[]).find(t=>t.id===e)||null;function Ql(i,e={}){let t=So(i);if(!t.ok)throw new Error(t.errors.join(" \xB7 "));let n=e.segments||48,s=new un;s.name=i.id||"sculpt";let r=new Map,a=new Map,o=[],l=[];for(let p of i.componentTree){let _=new at(Y0(p,n),q0(i,p.material));_.name=p.id,_.castShadow=_.receiveShadow=!0,_.userData.spec={id:p.id,name:p.name||p.id,level:p.level||"macro",role:p.role||"",material:p.material||""};let v=p.transform||{},m=new I(...v.position||[0,0,0]);_.position.copy(m),v.rotation&&_.rotation.set(...v.rotation.map(M=>M*Math.PI/180)),v.scale&&_.scale.set(...v.scale);let d=fu(p),E=d?r.get(d):null;d&&!E&&l.push(`${p.id}: \uBD80\uBAA8 ${d} \uB97C \uCC3E\uC9C0 \uBABB\uD574 \uCD5C\uC0C1\uC704\uC5D0 \uB450\uC5C8\uC2B5\uB2C8\uB2E4`);let A=p.attachment;if(A?.parentSocket&&E){let M=Z0(a.get(d),A.parentSocket);if(!M)l.push(`${p.id}: \uC18C\uCF13 ${A.parentSocket} \uC774 \uBD80\uBAA8\uC5D0 \uC5C6\uC2B5\uB2C8\uB2E4`);else{let T=new I(...M.normal||[0,1,0]).normalize(),S=new I(...M.position||[0,0,0]).addScaledVector(T,-(A.embedDepth??0)),C=m.lengthSq()>1e-12;if(A.localStart)_.position.copy(S).sub(new I(...A.localStart));else if(C)_.position.copy(m);else if(p.primitive!=="tube"){let x=p.dimensions,b=new I(Math.abs(T.x)*x.width,Math.abs(T.y)*x.height,Math.abs(T.z)*x.depth).multiplyScalar(.5);_.position.copy(S).addScaledVector(T,b.length())}else _.position.copy(S)}}(E||s).add(_),r.set(p.id,_),a.set(p.id,p),o.push({id:p.id,name:p.name||p.id,level:p.level||"macro",role:p.role||"",object:_,parent:d})}s.updateMatrixWorld(!0);let c=new Ct().setFromObject(s).getSize(new I),u=i.scaleHint?.longestSide_mm;u>0&&s.scale.setScalar(u/Math.max(c.x,c.y,c.z,1e-6)),s.updateMatrixWorld(!0),s.position.y-=new Ct().setFromObject(s).min.y,s.updateMatrixWorld(!0);let f=0;s.traverse(p=>{p.isMesh&&(f+=(p.geometry.index?p.geometry.index.count:p.geometry.getAttribute("position").count)/3)});let h=new Ct().setFromObject(s);return{root:s,parts:o,notes:l,stats:{parts:o.length,triangles:Math.round(f),size:h.getSize(new I)}}}var pu=["\uAC00\uB824\uC9C4 \uB4B7\uBA74\uC740 \uC55E\uBA74\uC5D0\uC11C \uC720\uCD94\uD55C \uAC83\uC785\uB2C8\uB2E4","\uD45C\uBA74 \uBB34\uB2AC\uC640 \uB85C\uACE0\uB294 \uB123\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4","\uCE58\uC218\uB294 \uBE44\uC728\uC774\uBA70 \uC2E4\uC81C \uAC12\uC774 \uC544\uB2D9\uB2C8\uB2E4"];var ec={part1:"vringon.revolve.tour.v1",part2:"vringon.part2.tour.v1",sculpt:"vringon.sculpt.tour.v1"},fr=i=>document.getElementById(i),gu=[{el:"chips",place:"right",title:"\uC0D8\uD50C \uB3C4\uBA74\uC73C\uB85C \uC2DC\uC791",body:"\uCE74\uB4DC\uB97C \uB204\uB974\uBA74 \uADF8 \uB3C4\uBA74\uC73C\uB85C \uBC14\uB85C \uC9C4\uD589\uB429\uB2C8\uB2E4. \uCC98\uC74C\uC774\uB77C\uBA74 \uC5EC\uAE30\uC11C \uC2DC\uC791\uD558\uC138\uC694."},{el:"drop",place:"right",title:"\uB0B4 \uB3C4\uBA74 \uC62C\uB9AC\uAE30",body:"\uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4 \uD55C \uC7A5\uC744 \uC62C\uB9BD\uB2C8\uB2E4. \uC544\uB798\uC5D0\uC11C \uBD80\uD488 \uC720\uD615\uC744 \uBA3C\uC800 \uACE8\uB77C \uB450\uBA74 \uADF8 \uC720\uD615\uC5D0 \uB9DE\uAC8C \uC2DC\uBBAC\uB808\uC774\uC158\uD569\uB2C8\uB2E4.",link:{href:"./guide.html",text:"\uC62C\uB9AC\uAE30 \uC548\uB0B4 \uC5F4\uAE30"}},{el:"stepper",place:"bottom",title:"\uB124 \uB2E8\uACC4\uB85C \uC9C4\uD589",body:"\uB3C4\uBA74 \uC785\uB825, \uD310\uB3C5, 3D CAD, \uAC80\uC99D \uC21C\uC11C\uC785\uB2C8\uB2E4. \uC9C0\uAE08 \uB2E8\uACC4\uAC00 \uC704\uCABD\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4."},{el:"stageNext",fallback:"stage",fallbackBox:{right:18,bottom:84,w:150,h:42},place:"top",title:"\uB2E4\uC74C \uB2E8\uACC4 \uBC84\uD2BC",body:"\uC624\uB978\uCABD \uC544\uB798 \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uB2E4\uC74C \uB2E8\uACC4\uAC00 \uC2E4\uD589\uB429\uB2C8\uB2E4. \uBC84\uD2BC \uC704 \uD55C \uC904\uC774 \uADF8 \uB2E8\uACC4\uAC00 \uD558\uB294 \uC77C\uC785\uB2C8\uB2E4."},{el:"stageActions",fallback:"stage",fallbackBox:{right:14,top:122,w:210,h:34},narrowBox:{left:8,top:52,w:300,h:34},place:"left",title:"\uBCF4\uAE30 \uC804\uD658\uACFC \uC870\uB9BD \xB7 \uC2DC\uBBAC",body:"\uB2E8\uBA74\uACFC \uB3C4\uBA74\uC744 \uBC88\uAC08\uC544 \uBCF4\uACE0, \uC870\uB9BD \xB7 \uC2DC\uBBAC\uC744 \uCF1C\uBA74 \uC0C1\uB300 \uBD80\uD488\uACFC \uD68C\uC804\uC774 \uBD99\uC2B5\uB2C8\uB2E4. \uB044\uBA74 \uBD80\uD488\uB9CC \uB0A8\uC2B5\uB2C8\uB2E4."},{el:"sideRight",place:"left",title:"\uACB0\uACFC\uC640 \uB0B4\uB824\uBC1B\uAE30",body:"\uD310\uB3C5\uD55C \uCE58\uC218\uB97C \uACE0\uCE58\uBA74 3D\uC640 \uB3C4\uBA74\uC774 \uD568\uAED8 \uBC14\uB01D\uB2C8\uB2E4. 3D\uAC00 \uB9CC\uB4E4\uC5B4\uC9C0\uBA74 \uB9E8 \uC544\uB798 \uB0B4\uBCF4\uB0B4\uAE30\uC5D0\uC11C STEP, STL, GLB \uB4F1\uC73C\uB85C \uBC1B\uC2B5\uB2C8\uB2E4."}],$0=[{el:"chips",place:"right",title:"\uC608\uC2DC \uB3C4\uBA74\uC73C\uB85C \uC2DC\uC791",body:"\uD55C \uBD80\uD488\uC744 \uC815\uBA74 \xB7 \uC717\uBA74 \xB7 \uCE21\uBA74\uC73C\uB85C \uADF8\uB9B0 \uB3C4\uBA74\uB4E4\uC785\uB2C8\uB2E4. \uC138 \uBC88\uC9F8(\uACE1\uAD00)\uB294 \uC774 \uBC84\uC804\uC774 \uB9CC\uB4E4\uC9C0 \uBABB\uD558\uB294 \uBD80\uB958\uB77C \uC774\uC720\uB97C \uBCF4\uC5EC \uC90D\uB2C8\uB2E4."},{el:"drop",place:"right",title:"\uB0B4 \uB3C4\uBA74 \uC62C\uB9AC\uAE30",body:"\uC5EC\uB7EC \uD22C\uC0C1\uB3C4\uAC00 \uD55C \uC7A5\uC5D0 \uC788\uB294 \uD55C \uBD80\uD488 \uB3C4\uBA74\uC744 \uC62C\uB9BD\uB2C8\uB2E4. \uC62C\uB9AC\uBA74 \uBDF0\uB97C \uB098\uB204\uACE0, \uBC29\uD5A5\uC744 \uCD94\uCC9C\uD558\uACE0, \uCE58\uC218 \uBB38\uC790\uB97C \uC77D\uC2B5\uB2C8\uB2E4.",link:{href:"./guide.html#part2",text:"\uC62C\uB9AC\uAE30 \uC548\uB0B4 \uC5F4\uAE30"}},{el:"viewBlock",fallback:"stage",fallbackBox:{left:40,top:90,w:260,h:140},place:"right",title:"\uBDF0\uB9C8\uB2E4 \uBC29\uD5A5 \uD655\uC778",body:"\uCD94\uCC9C\uB41C \uBC29\uD5A5(\uC815\uBA74 \xB7 \uC717\uBA74 \xB7 \uC6B0\uCE21\uBA74 \xB7 \uB4F1\uAC01 \uCC38\uACE0)\uC774 \uB9DE\uB294\uC9C0 \uBD05\uB2C8\uB2E4. \uAE30\uD558\uB9CC\uC73C\uB85C\uB294 \uBC29\uD5A5\uC744 \uD655\uC2E0\uD560 \uC218 \uC5C6\uC5B4 \uC0AC\uB78C\uC774 \uD655\uC815\uD569\uB2C8\uB2E4."},{el:"cubeBlock",place:"left",title:"\uC815\uC721\uBA74\uCCB4\uB85C \uBC29\uD5A5 \uC8FC\uAE30",body:"\uBDF0\uB97C \uACE0\uB978 \uB4A4 \uC815\uC721\uBA74\uCCB4\uC758 \uBA74\uC744 \uB204\uB974\uBA74 \uADF8 \uBDF0\uAC00 \uADF8 \uBC29\uD5A5\uC774 \uB429\uB2C8\uB2E4. \uC815\uD22C\uC0C1 \uBC29\uD5A5\uC740 \uBDF0 \uD558\uB098\uC5D0\uB9CC \uC904 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},{el:"dimBlock",fallback:"sideRight",fallbackBox:{right:20,top:220,w:260,h:150},place:"left",title:"\uCE58\uC218\uB294 \uB3C4\uBA74\uC5D0\uC11C \uC77D\uC2B5\uB2C8\uB2E4",body:"\uCE58\uC218 \uBB38\uC790\uB97C \uC77D\uC5B4 \uCE58\uC218\uC120\uACFC \uC9DD\uC9C0\uC5B4 \uCD95\uCC99\uC744 \uC815\uD569\uB2C8\uB2E4. \uC11C\uB85C \uB9DE\uB294 \uCE58\uC218\uAC00 \uB9CE\uC744\uC218\uB85D \uBBFF\uC744 \uB9CC\uD569\uB2C8\uB2E4. \uBABB \uC77D\uC73C\uBA74 \uADF8\uB54C\uB9CC \uD55C \uCE58\uC218\uB97C \uBB3B\uC2B5\uB2C8\uB2E4."},{el:"methodBlock",fallback:"sideRight",fallbackBox:{right:20,top:380,w:260,h:150},place:"left",title:"\uB9CC\uB4E4\uACE0 \uC815\uD569 \uBCF4\uAE30",body:"\uAC01 \uBDF0\uC758 \uC724\uACFD\uC744 \uADF8 \uBC29\uD5A5\uC73C\uB85C \uBC00\uC5B4\uB0B4 \uAD50\uC9D1\uD569\uD569\uB2C8\uB2E4. \uB9CC\uB4E0 3D \uB97C \uAC01 \uBDF0\uB85C \uB2E4\uC2DC \uD22C\uC601\uD574 \uB3C4\uBA74\uACFC \uC5BC\uB9C8\uB098 \uACB9\uCE58\uB294\uC9C0 \uBCF4\uC5EC \uC90D\uB2C8\uB2E4."}],hs=gu,zn=0,ct=null,tc=null,nc=ec.part1;function J0(i){let e=fr(i.el)||fr(i.fallback||"stage");if(!e)return;let t=e.closest(".side.left")?"left":e.closest(".side.right")?"right":e.closest(".stage")||e.id==="stage"?"stage":null,n=t&&document.querySelector(`.pane-tabs [data-pane="${t}"]`);n&&n.offsetParent!==null&&!n.classList.contains("on")&&n.click()}function K0(i){J0(i);let e=fr(i.el),t=e&&e.getBoundingClientRect();if(t&&t.width>4&&t.height>4&&e.offsetParent!==null)return t;let n=fr(i.fallback||"stage");if(!n)return null;let s=matchMedia("(max-width: 1023px)").matches,r=n.getBoundingClientRect(),a=s&&i.narrowBox||i.fallbackBox||{},o=a.w||200,l=a.h||40,c=a.right!==void 0?r.right-a.right-o:r.left+(a.left||0),u=a.bottom!==void 0?r.bottom-a.bottom-l:r.top+(a.top||0);return{left:c,top:u,right:c+o,bottom:u+l,width:o,height:l}}function _u(i){let e=K0(i),t=ct.querySelector(".tour-hole"),n=ct.querySelector(".tour-card");if(!e){ct.classList.add("center"),t.style.display="none";return}ct.classList.remove("center");let s=8;t.style.display="",t.style.left=`${e.left-s}px`,t.style.top=`${e.top-s}px`,t.style.width=`${e.width+s*2}px`,t.style.height=`${e.height+s*2}px`;let r=n.offsetWidth||320,a=n.offsetHeight||150,o=16,l,c;i.place==="right"?(l=e.right+o,c=e.top):i.place==="left"?(l=e.left-r-o,c=e.top):i.place==="top"?(l=e.right-r,c=e.top-a-o):(l=e.left+e.width/2-r/2,c=e.bottom+o),l=Math.min(Math.max(12,l),innerWidth-r-12),c=Math.min(Math.max(12,c),innerHeight-a-12),n.style.left=`${l}px`,n.style.top=`${c}px`}function xu(){let i=hs[zn];ct.querySelector(".tour-n").textContent=`${zn+1} / ${hs.length}`,ct.querySelector(".tour-t").textContent=i.title,ct.querySelector(".tour-b").textContent=i.body;let e=ct.querySelector(".tour-link");i.link?(e.style.display="",e.href=i.link.href,e.textContent=i.link.text):e.style.display="none",ct.querySelector(".tour-next").textContent=zn===hs.length-1?"\uC2DC\uC791\uD558\uAE30":"\uB2E4\uC74C",ct.querySelector(".tour-prev").style.visibility=zn?"":"hidden",setTimeout(()=>_u(i),0)}function wo(){try{localStorage.setItem(nc,"1")}catch{}removeEventListener("keydown",tc),removeEventListener("resize",yu),ct?.remove(),ct=null}function yu(){ct&&_u(hs[zn])}function dr(i=1){if(zn+i>=hs.length)return wo();zn=Math.max(0,zn+i),xu()}function mu(){ct||(zn=0,ct=document.createElement("div"),ct.className="tour",ct.innerHTML=`<div class="tour-hole"></div>
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
    </div>`,document.body.appendChild(ct),ct.querySelector(".tour-next").onclick=()=>dr(1),ct.querySelector(".tour-prev").onclick=()=>dr(-1),ct.querySelector(".tour-skip").onclick=wo,ct.onclick=i=>{i.target===ct&&dr(1)},tc=i=>{i.key==="Escape"?wo():i.key==="Enter"||i.key==="ArrowRight"?dr(1):i.key==="ArrowLeft"&&dr(-1)},addEventListener("keydown",tc),addEventListener("resize",yu),xu())}var j0=[{el:"prompt",place:"right",title:"\uD55C \uC904\uB85C \uC124\uBA85\uD558\uAE30",body:"\uB9CC\uB4E4 \uBB3C\uCCB4\uB97C \uD55C \uC904\uB85C \uC801\uC2B5\uB2C8\uB2E4. \uC544\uB798 \uC608\uC2DC\uB97C \uB20C\uB7EC \uCC44\uC6B8 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4."},{el:"drop",place:"right",title:"\uC0AC\uC9C4\uC73C\uB85C\uB3C4 \uB429\uB2C8\uB2E4",body:"\uBB3C\uCCB4 \uD558\uB098\uAC00 \uC628\uC804\uD788 \uBCF4\uC774\uB294 \uC0AC\uC9C4 \uD55C \uC7A5\uC744 \uC62C\uB9BD\uB2C8\uB2E4. \uAC00\uB824\uC9C4 \uB4B7\uBA74\uC740 \uC55E\uBA74\uC5D0\uC11C \uC720\uCD94\uD569\uB2C8\uB2E4."},{el:"chips",place:"right",title:"\uC608\uC2DC\uB85C \uBA3C\uC800 \uBCF4\uAE30",body:"\uBBF8\uB9AC \uB9CC\uB4E4\uC5B4 \uB454 \uC608\uC2DC\uC785\uB2C8\uB2E4. \uC11C\uBC84 \uC5C6\uC774\uB3C4 \uB20C\uB7EC\uC11C \uBC14\uB85C \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4."},{el:"parts",fallback:"sideRight",fallbackBox:{left:12,top:90,w:240,h:160},place:"left",title:"\uD30C\uD2B8 \uBD84\uB9AC",body:"\uBD80\uD488\uC774 \uD2B8\uB9AC\uB85C \uB098\uB258\uC5B4 \uB098\uC635\uB2C8\uB2E4. \uBAA9\uB85D\uC5D0\uC11C \uACE0\uB974\uBA74 \uADF8 \uBD80\uD488\uB9CC \uB0A8\uACE0, \uBD84\uB9AC \uB9C9\uB300\uB85C \uBC8C\uB824 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4."}];function vu(i="part1"){hs=i==="part2"?$0:i==="sculpt"?j0:gu,nc=ec[i]||ec.part1;let e=fr("btnTour");e&&(e.onclick=()=>{ct?wo():mu()});let t=!1;try{t=localStorage.getItem(nc)==="1"}catch{}t||setTimeout(mu,700)}var Mu={"\uC62C\uB9AC\uAE30 \uC548\uB0B4":"Upload guide",\uC0AC\uC6A9\uBC95:"How to use","\uC0C8 \uD504\uB85C\uC81D\uD2B8":"New project","\uC0C8 \uB3C4\uBA74":"New drawing",\uB3C4\uBA74:"Drawing",\uC18D\uC131:"Properties",\uBD80\uD488:"Part","\uBD80\uD488 \uB9CC\uB4E4\uAE30":"Build part",\uCC98\uC74C\uC73C\uB85C:"Start over","\uCC98\uC74C\uC73C\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4":"Back to start","\uD655\uC778 \uC911\u2026":"Checking\u2026","\uCCB4\uD5D8 \uBAA8\uB4DC":"Demo mode","AI \uD310\uB3C5 \uC0AC\uC6A9":"AI reading on","\uBB38\uC790 \uC778\uC2DD \uC900\uBE44 \uC911\u2026":"Text recognition loading\u2026","\uBB38\uC790 \uC778\uC2DD \uBD88\uB7EC\uC624\uB294 \uC911\u2026":"Loading text recognition\u2026","\uBB38\uC790 \uC778\uC2DD \uC900\uBE44\uB428":"Text recognition ready","\uBB38\uC790 \uC778\uC2DD \uC5C6\uC74C":"No text recognition","\uCE58\uC218 \uBB38\uC790\uB97C \uC77D\uB294 \uC5D4\uC9C4 \uC0C1\uD0DC":"Text recognition engine status","\uC0AC\uC6A9\uBC95 \uB2E4\uC2DC \uBCF4\uAE30":"Show the walkthrough again","VRINGON CAD":"VRINGON CAD","\uB3C4\uBA74\uC744 \uC77D\uC5B4 3D\uB85C \uB9CC\uB4ED\uB2C8\uB2E4":"Read a drawing, get 3D","\uD68C\uC804\uCCB4\uB294 \uD55C \uC7A5\uC73C\uB85C, \uADF8 \uBC16\uC758 \uBD80\uD488\uC740 \uC5EC\uB7EC \uBDF0\uB85C \uB9CC\uB4ED\uB2C8\uB2E4.":"Turned parts from one view; everything else from several views.",\uC644\uC131:"Ready",\uCD94\uCC9C:"Recommended","\uB2E8\uC77C \uB3C4\uBA74 \uD68C\uC804\uCCB4":"Turned part, one view","\uB2E4\uC2DC\uC810 \uB3C4\uBA74\uC5D0\uC11C \uBD80\uD488 \uD558\uB098":"One part from several views","\uCD95, \uBD80\uC2DC, \uD540, \uBCFC\uD2B8\uCC98\uB7FC \uC120\uBC18\uC5D0\uC11C \uAE4E\uB294 \uBD80\uD488\uC758 \uC815\uBA74\uB3C4 \uD55C \uC7A5\uC744 \uC77D\uC5B4 3D\uB97C \uB9CC\uB4ED\uB2C8\uB2E4.":"Reads one front view of a lathe-turned part (shaft, bushing, pin, bolt) and builds the 3D.","\uC678\uD615 \uC77C\uCE58 99.9%, \uCE58\uC218 \uC77C\uCE58 97%":"Outline match 99.9%, dimension match 97%","STEP, STL, GLB, OBJ, FBX, USD":"STEP, STL, GLB, OBJ, FBX, USD","\uC870\uB9BD\uACFC \uD68C\uC804 \uC2DC\uBBAC\uB808\uC774\uC158":"Assembly and motion simulation","\uC77D\uC744 \uC218 \uC5C6\uB294 \uB3C4\uBA74\uC740 \uBBF8\uB9AC \uC54C\uB824 \uC90D\uB2C8\uB2E4":"Tells you up front when a drawing can't be read","Part 1 \uC5F4\uAE30 \u203A":"Open Part 1 \u203A","\uC815\uBA74, \uC717\uBA74, \uCE21\uBA74\uC774 \uD55C \uC7A5\uC5D0 \uC788\uB294 \uB3C4\uBA74\uC5D0\uC11C \uBDF0\uB9C8\uB2E4 \uBC29\uD5A5\uC744 \uC815\uD558\uACE0 \uCE58\uC218\uB97C \uC77D\uC5B4 \uBD80\uD488 \uD558\uB098\uB97C \uB9CC\uB4ED\uB2C8\uB2E4.":"You set a direction for each view on a multi-view sheet; it reads the dimensions and builds one part.","\uBDF0 \uC790\uB3D9 \uBD84\uD560\uACFC \uBC29\uD5A5 \uCD94\uCC9C":"Automatic view split with suggested directions","\uCE58\uC218\uB97C \uC77D\uC5B4 \uCD95\uCC99 \uACB0\uC815":"Scale from the dimension text","\uBE0C\uB798\uD0B7 \uD06C\uAE30 \uC624\uCC28 0.7%, \uBDF0 \uC815\uD569 99%":"Bracket size error 0.7%, view match 99%","\uB9CC\uB4E0 3D\uB97C \uB3C4\uBA74\uACFC \uB2E4\uC2DC \uB300\uC870":"Re-checks the 3D against the drawing","Part 2 \uC5F4\uAE30 \u203A":"Open Part 2 \u203A","\uC5B4\uB5A4 \uB3C4\uBA74\uC744 \uC62C\uB9AC\uB294\uC9C0\uB294 {} \uC5D0 \uC788\uC2B5\uB2C8\uB2E4.":"What to upload is explained in the {}.","Part 1 \xB7 \uB2E8\uC77C \uB3C4\uBA74 \uD68C\uC804\uCCB4":"Part 1 \xB7 Turned part, one view","\uB3C4\uBA74 \uC774\uBBF8\uC9C0 \uC62C\uB9AC\uAE30":"Upload a drawing","\uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4 \uD55C \uC7A5 \xB7 PNG JPG SVG":"One front view of a turned part \xB7 PNG JPG SVG","\uBD80\uD488 \uC720\uD615":"Part type","\uBAA8\uB984 (\uD310\uB3C5 \uB4A4 \uCD94\uC815)":"Unknown (inferred after reading)","\uC62C\uB9AC\uAE30 \uC804\uC5D0 \uC54C\uB824 \uC8FC\uBA74 \uADF8 \uC720\uD615\uC5D0 \uB9DE\uB294 \uC2DC\uBBAC\uB808\uC774\uC158\uC744 \uACC4\uD68D\uD569\uB2C8\uB2E4.":"Tell us before uploading and the simulation is planned for that type.","\uC804\uCCB4 \uAE38\uC774 (mm)":"Overall length (mm)","\uC608: 100":"e.g. 100","\uC608: 120":"e.g. 120","\uC62C\uB9B0 \uB3C4\uBA74\uC740 \uC678\uD615 \uBE44\uC728\uACFC \uC774 \uAC12\uC73C\uB85C \uC2E4\uC81C \uCE58\uC218\uB97C \uC815\uD569\uB2C8\uB2E4.":"Uploads get real dimensions from the outline ratio and this value.","\uD310\uB3C5 \uBC29\uC2DD":"Reading method",\uC790\uB3D9:"Auto",\uC678\uD615:"Outline","AI \uD310\uB3C5":"AI reading","\uC815\uBC00 \uD310\uB3C5 (\uB290\uB9BC)":"Careful reading (slower)","\uC11C\uBC84 \uBAA8\uB4DC\uC5D0\uC11C\uB9CC":"Server mode only","\uC0D8\uD50C \uB3C4\uBA74":"Sample drawings","\uBB34\uC791\uC704 \uB3C4\uBA74 \uB9CC\uB4E4\uAE30":"Random drawing","\uC0C8 \uBD80\uD488\uC744 \uB9CC\uB4E4\uC5B4 \uB3C4\uBA74\uC744 \uADF8\uB9BD\uB2C8\uB2E4":"Makes a new part and draws it",\uC9C4\uD589:"Progress","\uC774 \uD398\uC774\uC9C0\uC5D0 \uB300\uD574":"About this page","\uB3C4\uBA74\uC744 \uC77D\uC5B4 \uCE58\uC218 \uC0AC\uC591\uC73C\uB85C \uC62E\uAE30\uACE0, \uADF8 \uC0AC\uC591\uC5D0\uC11C 3D\uC640 \uB3C4\uBA74\uC744 \uB2E4\uC2DC \uB9CC\uB4ED\uB2C8\uB2E4.":"Reads the drawing into a dimension spec, then rebuilds the 3D and the drawing from that spec.","\uC0D8\uD50C\uC740 {} \uB97C \uBCF4\uC5EC \uC8FC\uACE0, \uC62C\uB9B0 \uB3C4\uBA74\uC740 \uC774 \uBE0C\uB77C\uC6B0\uC800\uAC00 {} \uC0AC\uC591\uC744 \uB9CC\uB4ED\uB2C8\uB2E4. \uCE58\uC218 \uBB38\uC790\uAE4C\uC9C0 \uC77D\uB294 AI \uD310\uB3C5\uC740 \uC11C\uBC84 \uBAA8\uB4DC\uC5D0\uC11C \uB3D9\uC791\uD569\uB2C8\uB2E4.":"Samples show {}, and uploads are measured {} in this browser. AI reading of the dimension text runs in server mode.","\uC678\uD615\uC744 \uC7AC\uC11C":"by outline","\uB3C4\uBA74\uC744 \uC62C\uB9AC\uBA74 {} \uC0AC\uC591\uC73C\uB85C \uC62E\uAE41\uB2C8\uB2E4. 3D, \uAC80\uC99D, \uB0B4\uB824\uBC1B\uAE30\uB294 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uBC14\uB85C \uC2E4\uD589\uB429\uB2C8\uB2E4.":"Upload a drawing and {} into a spec. 3D, checking and download all run in this browser.","AI \uAC00 \uCE58\uC218\uAE4C\uC9C0 \uC77D\uC5B4":"AI reads the dimensions","\uC67C\uCABD\uC5D0\uC11C \uC0D8\uD50C\uC744 \uACE0\uB974\uAC70\uB098 \uB3C4\uBA74\uC744 \uC62C\uB9AC\uC138\uC694":"Pick a sample on the left, or upload a drawing","\uB3C4\uBA74 \uC785\uB825":"Drawing","\uD310\uB3C5 \xB7 \uC0AC\uC591":"Reading","3D CAD":"3D CAD",\uAC80\uC99D:"Check","\uB3C4\uBA74 \uBD88\uB7EC\uC624\uAE30":"Load drawing","\uD310\uB3C5 \uC2DC\uC791":"Start reading","3D CAD \uB9CC\uB4E4\uAE30":"Build 3D CAD","\uAC80\uC99D \uC2E4\uD589":"Run check","\uB3C4\uBA74\uC744 \uC2DC\uD2B8\uC5D0 \uC62C\uB9BD\uB2C8\uB2E4":"Puts the drawing on the sheet","\uB3C4\uBA74\uC744 \uC77D\uC5B4 \uCE58\uC218 \uC0AC\uC591\uC73C\uB85C \uC62E\uAE41\uB2C8\uB2E4":"Reads the drawing into a dimension spec","\uC0AC\uC591\uB300\uB85C 3D \uD615\uC0C1\uC744 \uB9CC\uB4ED\uB2C8\uB2E4":"Builds the 3D shape from the spec","\uC0AC\uC591\uC73C\uB85C \uB2E4\uC2DC \uADF8\uB9B0 \uC678\uD615\uC744 \uB3C4\uBA74\uACFC \uB300\uC870\uD569\uB2C8\uB2E4":"Compares the outline redrawn from the spec with the drawing","\uC774 \uB2E8\uACC4\uB85C \uB3CC\uC544\uAC00\uAE30":"Go back to this step","\uC9C0\uAE08 \uB2E8\uACC4":"Current step","\uB2E4\uC74C \uB2E8\uACC4 \uC2E4\uD589":"Run the next step","{n}\uB2E8\uACC4\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4":"Back to step {n}","\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC2E4\uD589":"runs in this browser","\uC11C\uBC84 AI \uD310\uB3C5":"server AI reading","\uB2E8\uBA74 \uBCF4\uAE30":"Section view","\uB2E8\uBA74 \uB2EB\uAE30":"Close section","\uB3C4\uBA74 \uBCF4\uAE30":"Show drawing","\uC7AC\uC0DD\uC131 \uB3C4\uBA74":"Redrawn view","\uC6D0\uBCF8 \uB3C4\uBA74":"Original drawing","\uC9C0\uAE08 \uC0AC\uC591\uC73C\uB85C \uB2E4\uC2DC \uADF8\uB9B0 \uB3C4\uBA74\uACFC \uC6D0\uBCF8 \uB3C4\uBA74\uC744 \uBC88\uAC08\uC544 \uBD05\uB2C8\uB2E4":"Switches between the drawing redrawn from the spec and the original","\uC815\uB2F5 \uC0AC\uC591 \uBCF4\uAE30":"Show reference spec","\uD310\uB3C5 \uACB0\uACFC\uB85C":"Back to reading","\uC870\uB9BD \xB7 \uC2DC\uBBAC \uCF1C\uAE30":"Assembly \xB7 motion on","\uC870\uB9BD \xB7 \uC2DC\uBBAC \uB044\uAE30":"Assembly \xB7 motion off","\uC0C1\uB300 \uBD80\uD488\uC744 \uB9CC\uB4E4\uC5B4 \uBD84\uD574\uC640 \uD68C\uC804\uC744 \uBCF4\uC5EC \uC90D\uB2C8\uB2E4. \uB044\uBA74 \uBD80\uD488\uB9CC \uB0A8\uC2B5\uB2C8\uB2E4":"Adds mating parts and shows disassembly and rotation. Turn off to keep just the part","\uD654\uBA74 \uB9DE\uCDA4":"Fit view",\uADF8\uB9AC\uB4DC:"Grid",\uD134\uD14C\uC774\uBE14:"Turntable",\uD68C\uC804:"Rotate","\uB098\uC0AC \uCCB4\uACB0":"Screw in","1\uD68C\uC804\uC5D0 \uD53C\uCE58\uB9CC\uD07C \uC804\uC9C4\uD569\uB2C8\uB2E4":"One turn advances by the pitch",\uC870\uB9BD:"Assemble",\uC815\uC9C0:"Stop",\uBD84\uD574:"Explode","\uBD80\uD488\uB9CC \uBCF4\uAE30\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4":"Back to the part only",\uBAA8\uB378:"Model","\uC804\uCCB4 \uAE38\uC774":"Overall length","\uCD5C\uB300 \uC9C0\uB984":"Max diameter","\uBD80\uD53C \xB7 \uC9C8\uB7C9":"Volume \xB7 mass",\uC7AC\uC9C8:"Material","\uC0BC\uAC01\uD615 \xB7 \uC0DD\uC131 \uC2DC\uAC04":"Triangles \xB7 build time",\uD310\uB3C5:"Reading",\uC2E0\uB8B0\uB3C4:"Confidence","\uC77D\uC740 \uCE58\uC218 \uBB38\uC790":"Dimension text read",\uC18C\uC694:"Time","\uBD80\uD488 \uD574\uC11D":"Part analysis","\uD575\uC2EC \uD615\uC0C1":"Key features","\uC81C\uC791 \uC2DC \uC720\uC758":"Notes for making it","\uB3C4\uBA74\uB9CC\uC73C\uB85C \uC54C \uC218 \uC5C6\uB294 \uAC83":"Not knowable from the drawing alone","\uD574\uC11D \uC911\u2026":"Analysing\u2026",\uC5C6\uC74C:"None","\uC11C\uBC84 \uBAA8\uB4DC\uC5D0\uC11C \uB3C4\uBA74\uC744 \uC62C\uB9AC\uBA74 \uD574\uC11D\uD569\uB2C8\uB2E4":"Upload a drawing in server mode to get an analysis","\uD574\uC11D\uC744 \uBC1B\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4":"No analysis came back","\uBBF8\uB9AC \uB9CC\uB4E0 \uD574\uC11D (\uB3C4\uBA74 \uBB38\uC790 \uC778\uC2DD + \uD310\uB3C5 \uC0AC\uC591 + \uC774\uBBF8\uC9C0)":"Pre-built analysis (text recognition + spec + image)","\uC9C0\uAE08 \uD574\uC11D (\uB3C4\uBA74 \uBB38\uC790 {n}\uAC1C + \uC0AC\uC591 + \uC774\uBBF8\uC9C0, {n}\uCD08)":"Analysed now ({n} text tokens + spec + image, {n}s)","\xB7 \uC2E0\uB8B0\uB3C4 {n}%":" \xB7 confidence {n}%",\uC138\uADF8\uBA3C\uD2B8:"Segments","+ \uCD94\uAC00":"+ Add","\uB05D\uC5D0 \uC6D0\uD1B5 \uCD94\uAC00":"Add a cylinder at the end",\uD615\uC2DD:"Type",\uAE38\uC774:"Length","\uC9C0\uB984 \xB7 \uD638\uCE6D":"Diameter \xB7 size",\uC6D0\uD1B5:"Cylinder",\uD14C\uC774\uD37C:"Taper",\uB098\uC0AC:"Thread",\uC0AD\uC81C:"Delete","\uAC12\uC744 \uACE0\uCE58\uBA74 3D\uC640 \uB3C4\uBA74\uC774 \uD568\uAED8 \uBC14\uB01D\uB2C8\uB2E4.":"Editing a value updates the 3D and the drawing together.","\uC804\uC774 \xB7 \uD648 \xB7 \uD53C\uCC98":"Transitions \xB7 grooves \xB7 features","\uC804\uC774\xB7\uD648\xB7\uD53C\uCC98\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.":"No transitions, grooves or features.","\uC0AC\uC591 (JSON)":"Spec (JSON)",\uB418\uB3CC\uB9AC\uAE30:"Revert",\uC801\uC6A9:"Apply","\uD615\uC0C1 \uAC80\uC99D \uD1B5\uACFC. \uAC12\uC744 \uACE0\uCE58\uBA74 3D, \uB3C4\uBA74, \uAC80\uC99D\uC774 \uB2E4\uC2DC \uACC4\uC0B0\uB429\uB2C8\uB2E4.":"Shape check passed. Editing a value recomputes the 3D, drawing and check.","\uD615\uC0C1 \uC624\uB958: {}":"Shape error: {}","\uC8FC\uC758: {}":"Warning: {}","\uC0AC\uC591\uC744 \uC801\uC6A9\uD588\uC2B5\uB2C8\uB2E4":"Spec applied","\uD310\uB3C5 \uACB0\uACFC\uB85C \uB418\uB3CC\uB838\uC2B5\uB2C8\uB2E4":"Reverted to the reading","\uC815\uB2F5 \uC0AC\uC591\uC744 \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4 (\uB3C4\uBA74\uC744 \uB9CC\uB4E0 \uC6D0\uBCF8)":"Loaded the reference spec (the source of this drawing)","\uD310\uB3C5 \uACB0\uACFC\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4":"Back to the reading","\uACE0\uCE60 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4: {}":"Can't apply: {}","\uC138\uADF8\uBA3C\uD2B8\uB294 \uCD5C\uC18C \uD558\uB098\uC785\uB2C8\uB2E4":"At least one segment is required","\uB3C4\uBA74 \uC678\uD615 \uC77C\uCE58":"Outline match","\uCE58\uC218 \uC77C\uCE58":"Dimension match","\uD615\uC0C1 \uC720\uD6A8\uC131":"Shape validity","\uC885\uD569 \uC2E0\uB8B0\uB3C4":"Overall confidence",\uD1B5\uACFC:"Pass","\uD655\uC778 \uD544\uC694":"Check needed",\uBD88\uC77C\uCE58:"Mismatch","\uC720\uD6A8\uD558\uC9C0 \uC54A\uC74C":"Invalid","\uCE21\uC815 \uC5C6\uC74C":"Not measured","\uBB38\uC790 \uC548 \uC77D\uC74C":"Text not read","\uC678\uD615\uB9CC (\uBB38\uC790 \uC548 \uC77D\uC74C)":"Outline only (text not read)","\uD1B5\uACFC (\uC8FC\uC758 {n})":"Pass ({n} warnings)","\uC624\uB958 {n}":"{n} errors","\uC815\uB2F5 \uC0AC\uC591 \uB300\uBE44 (\uC774 \uB3C4\uBA74\uC740 \uC815\uB2F5\uC5D0\uC11C \uADF8\uB838\uC2B5\uB2C8\uB2E4)":"Against the reference spec (this drawing came from it)",\uD56D\uBAA9:"Item",\uC77C\uCE58:"Match",\uD53C\uCC98:"Features",\uC804\uC774:"Transitions",\uCE58\uC218:"Dimensions","\uC644\uC804 \uC77C\uCE58":"Exact match",\uC608:"Yes",\uC544\uB2C8\uC624:"No","{n}\uAC1C":"{n}","\uC678\uD615\uC774 \uB3C4\uBA74\uACFC \uC5B4\uAE0B\uB0A9\uB2C8\uB2E4. \uC624\uB978\uCABD \uD45C\uC5D0\uC11C \uC138\uADF8\uBA3C\uD2B8 \uAE38\uC774\uC640 \uC9C0\uB984\uC744 \uACE0\uCE58\uBA74 \uBC14\uB85C \uB2E4\uC2DC \uACC4\uC0B0\uB429\uB2C8\uB2E4.":"The outline disagrees with the drawing. Edit segment lengths and diameters on the right and it recomputes.","\uC870\uB9BD \uC778\uD130\uD398\uC774\uC2A4":"Interfaces","\uBD84\uD574 \uC21C\uC11C":"Disassembly order","\uC870\uB9BD \uC810\uAC80":"Assembly checks","\uBD84\uD574\uD560 \uC0C1\uB300 \uBD80\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.":"No mating parts to remove.","\uC810\uAC80\uD560 \uACB0\uD569\uBD80\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.":"No interfaces to check.","\uBD80\uD488 \uD615\uC0C1\uC740 \uB3C4\uBA74 \uADF8\uB300\uB85C, \uC0C1\uB300 \uBD80\uD488\uC740 \uADDC\uACA9\uD45C \uADFC\uC0AC\uC785\uB2C8\uB2E4. \uD68C\uC804\uC774 \uBCF4\uC774\uB3C4\uB85D {}\uC744 \uBD99\uC600\uACE0 \uB0B4\uB824\uBC1B\uB294 \uD30C\uC77C\uC5D0\uB294 \uB4E4\uC5B4\uAC00\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.":"The part itself matches the drawing; mating parts are standard-table approximations. A {} makes rotation visible and is not included in downloads.",\uAE30\uC900\uC120:"reference line",\uC790\uC804\uCD95:"Axis of rotation",\uBA48\uCDA4\uB9C1:"Retaining ring","\uD0A4\xB7\uD5C8\uBE0C":"Key \xB7 hub","\uB098\uC0AC \uCCB4\uACB0\uBD80":"Threaded joint",\uBCA0\uC5B4\uB9C1:"Bearing",\uD540:"Pin",\uACF5\uAD6C:"Tool",\uB07C\uC6CC\uB9DE\uCDA4:"Fit","\uADDC\uACA9 \uADFC\uC0AC":"Standard approx.",\uC815\uD655:"Exact","\uC790\uC804(X\uCD95)":"Spin (X axis)","\uCD95\uBC29\uD5A5 \uC870\uB9BD":"Axial assembly","\uBC18\uACBD \uBC29\uD5A5 \uC870\uB9BD":"Radial assembly","\uB098\uC0AC \uC774\uC1A1 {n}mm/\uD68C\uC804":"Screw feed {n} mm/turn","\uC0C1\uB300 \uBD80\uD488 {n}\uAC1C \xB7 {}":"{n} mating parts \xB7 {}","\uC0C1\uB300 \uBD80\uD488 \uC5C6\uC74C (\uB2E8\uD488 \uD68C\uC804)":"No mating parts (single part)","\uACB0\uD569\uBD80 {n}\uAC1C":"{n} interfaces","\uACB0\uD569\uBD80\uAC00 \uC5C6\uC5B4 \uD68C\uC804\uB9CC \uBCF4\uC5EC \uC90D\uB2C8\uB2E4":"No interfaces, showing rotation only","\uD68C\uC804 {n} rpm. \uAE30\uC900\uC120\uC73C\uB85C \uD68C\uC804\uC774 \uBCF4\uC785\uB2C8\uB2E4":"Spinning at {n} rpm. The reference line shows the rotation","\uC774 \uBD80\uD488\uC5D0\uB294 \uB098\uC0AC \uCCB4\uACB0\uBD80\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4":"This part has no threaded joint","{n} rpm \xB7 {n} \uD68C\uC804 \xB7 {n}\xB0":"{n} rpm \xB7 {n} turns \xB7 {n}\xB0","\uCCB4\uACB0 {n} \uD68C\uC804 \xB7 {n} mm":"{n} turns in \xB7 {n} mm",\uB0B4\uBCF4\uB0B4\uAE30:"Download","\uC0C1\uB300 \uBD80\uD488(\uC870\uB9BD\uCCB4) \uD3EC\uD568\uD574 \uB0B4\uBCF4\uB0B4\uAE30":"Include mating parts","3D":"3D","\uB3C4\uBA74 \xB7 \uC0AC\uC591":"Drawing \xB7 spec",\uB0B4\uB824\uBC1B\uAE30:"Download","\uC815\uBC00 \uACE1\uBA74 \xB7 \uAE30\uACC4 CAD \uC6A9":"Exact surfaces \xB7 for mechanical CAD","\uC815\uBC00 \uACE1\uBA74 \xB7 \uC9C0\uAE08 \uC0AC\uC591\uC73C\uB85C \uC0DD\uC131":"Exact surfaces \xB7 built from the current spec","\uC0BC\uAC01\uD615 \uBA74 \uC194\uB9AC\uB4DC \xB7 \uD3B8\uC9D1\uD55C \uC0AC\uC591\uB3C4 \uBC14\uB85C":"Triangulated solid \xB7 works with edited specs","\uC0BC\uAC01\uD615 \uBA74 \uC178 \xB7 \uAC00\uACF5 \uBD80\uC704\uAC00 \uC788\uC5B4 \uC194\uB9AC\uB4DC\uB85C \uB2EB\uD788\uC9C0 \uC54A\uC74C, \uC815\uBC00 STEP \uAD8C\uC7A5":"Triangulated shell \xB7 machined areas leave it open; prefer the exact STEP","\uC0BC\uAC01\uD615 \uBA74 \uC178 (\uAD50\uC9D1\uD569 \uACB0\uACFC\uB294 \uC194\uB9AC\uB4DC\uB85C \uB2EB\uD788\uC9C0 \uC54A\uC74C)":"Triangulated shell (intersection result is not a closed solid)","3D \uD504\uB9B0\uD305":"3D printing","\uC7AC\uC9C8 \uD3EC\uD568 \xB7 \uC6F9 \uBDF0\uC5B4":"With materials \xB7 web viewers","\uBA54\uC2DC (mm)":"Mesh (mm)","Maya, 3ds Max, Unity, Unreal":"Maya, 3ds Max, Unity, Unreal","\uBA54\uC2DC\uC640 \uCE58\uC218 \uC0AC\uC591\uC744 \uD568\uAED8":"Mesh plus the dimension spec","\uBA54\uC2DC\uC640 \uBDF0\xB7\uCE58\uC218 \uC815\uBCF4\uB97C \uD568\uAED8":"Mesh plus view and dimension data","AR \uBBF8\uB9AC\uBCF4\uAE30 \uD328\uD0A4\uC9C0":"AR preview package","\uC815\uC810\uACFC \uBA74 (\uD574\uC11D \uB3C4\uAD6C)":"Vertices and faces (analysis tools)","\uC815\uC810\uACFC \uBA74":"Vertices and faces","\uB2E4\uC2DC \uADF8\uB9B0 \uC81C\uC791 \uB3C4\uBA74":"Redrawn production drawing","\uCE58\uC218 \uC0AC\uC591":"Dimension spec","\uBDF0 \uBC29\uD5A5 \xB7 \uCD95\uCC99 \xB7 \uACB0\uACFC":"View directions \xB7 scale \xB7 result","STEP \uC744 \uB9CC\uB4DC\uB294 \uC911\u2026":"Building the STEP\u2026","STEP \uB0B4\uB824\uBC1B\uC74C":"STEP downloaded","STEP \uC2E4\uD328: {}":"STEP failed: {}","\uC815\uBC00 \uACE1\uBA74 STEP \uC740 \uC0AC\uC591\uC774 \uC815\uB2F5\uACFC \uAC19\uC744 \uB54C \uBC1B\uC744 \uC218 \uC788\uACE0, \uD3B8\uC9D1\uD55C \uC0AC\uC591\uC740 \uBA74 STEP \uC73C\uB85C \uBC1B\uC2B5\uB2C8\uB2E4.":"The exact STEP is available when the spec matches the reference; edited specs come as a triangulated STEP.","\uC815\uBC00 \uACE1\uBA74 STEP \uC740 '\uC815\uB2F5 \uC0AC\uC591 \uBCF4\uAE30'\uB85C \uB418\uB3CC\uB9AC\uBA74 \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC9C0\uAE08 \uC0AC\uC591\uC740 \uBA74 STEP \uC73C\uB85C \uBC1B\uC2B5\uB2C8\uB2E4.":"Switch to the reference spec to get the exact STEP. The current spec comes as a triangulated STEP.","\uC5EC\uAE30\uC11C\uB294 \uBA74 STEP \uC744 \uBC1B\uC2B5\uB2C8\uB2E4. \uC815\uBC00 \uACE1\uBA74 STEP \uC740 \uC11C\uBC84 \uBAA8\uB4DC\uC5D0\uC11C \uC81C\uACF5\uB429\uB2C8\uB2E4.":"Here you get the triangulated STEP. The exact STEP is available in server mode.","\uB3C4\uBA74\uC5D0\uC11C \uBD80\uD488 \uC678\uD615 \uCE21\uC815":"Measuring the part outline","\uC678\uD615\uC5D0\uC11C \uCE58\uC218 \uC0AC\uC591 \uB9CC\uB4E4\uAE30":"Building the spec from the outline","\uBBF8\uB9AC \uD310\uB3C5\uD55C \uACB0\uACFC \uBD88\uB7EC\uC624\uAE30":"Loading the pre-read result","\uD615\uC0C1 \uAC80\uC99D":"Shape check","\uB2E8\uBA74 \uD504\uB85C\uD30C\uC77C\uC5D0\uC11C \uD68C\uC804 \uD615\uC0C1":"Revolving the section profile","\uD0A4\uD648, \uD3C9\uBA74, \uC721\uAC01, \uD6A1\uAD6C\uBA4D \uAC00\uACF5":"Cutting keyway, flats, hex, cross hole","\uC7AC\uC9C8 \uC801\uC6A9":"Applying materials","\uD310\uB3C5 \uC644\uB8CC \xB7 \uC138\uADF8\uBA3C\uD2B8 {n}\uAC1C":"Reading done \xB7 {n} segments","\uD310\uB3C5 \uC644\uB8CC \xB7 \uC138\uADF8\uBA3C\uD2B8 {n}\uAC1C, \uC77D\uC740 \uCE58\uC218 {n}\uAC1C":"Reading done \xB7 {n} segments, {n} dimensions read","3D \uC644\uB8CC. \uC624\uB978\uCABD\uC5D0\uC11C \uB0B4\uB824\uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4":"3D done. Download it on the right","\uAC80\uC99D \uC644\uB8CC \xB7 {}":"Check done \xB7 {}","\uB3C4\uBA74\uC744 \uC5F4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: {}":"Couldn't open the drawing: {}","\uC774\uBBF8\uC9C0\uB97C \uC5F4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4":"Couldn't open the image","\uC678\uD615\uC744 \uC7AC\uC9C0 \uBABB\uD574 \uD78C\uD2B8 \uC5C6\uC774 \uD310\uB3C5\uD569\uB2C8\uB2E4":"Couldn't measure the outline; reading without hints","\uC0D8\uD50C \uB3C4\uBA74 \xB7 {}":"Sample \xB7 {}","\uB9CC\uB4E0 \uB3C4\uBA74 \xB7 {}":"Generated \xB7 {}","\uC5C5\uB85C\uB4DC \xB7 {}":"Upload \xB7 {}","\uC7AC\uC0DD\uC131 \uB3C4\uBA74 \xB7 \uC9C0\uAE08 \uC0AC\uC591\uC73C\uB85C \uB2E4\uC2DC \uADF8\uB9BC (\uC6D0\uBCF8 \uC544\uB2D8)":"Redrawn from the current spec (not the original)","\uC11C\uBC84\uAC00 \uBBF8\uB9AC \uD310\uB3C5\uD574 \uC800\uC7A5\uD55C \uACB0\uACFC\uC785\uB2C8\uB2E4 ({n}\uCD08).":"A reading the server made and saved earlier ({n}s).","\uC11C\uBC84\uAC00 \uBBF8\uB9AC \uD310\uB3C5\uD574 \uC800\uC7A5\uD55C \uACB0\uACFC\uC785\uB2C8\uB2E4 ({n}\uCD08, \uC790\uB3D9 \uC218\uC815 1\uD68C).":"A reading the server made and saved earlier ({n}s, one self-correction).","\uC804\uCCB4 \uAE38\uC774\uB97C \uB123\uC9C0 \uC54A\uC544 \uBE44\uC728\uB9CC \uBD05\uB2C8\uB2E4. \uD654\uBA74\uC758 \uCE58\uC218\uB294 \uC804\uCCB4 \uAE38\uC774\uB97C 100mm \uB85C \uB193\uC558\uC744 \uB54C\uC758 \uBE44\uC728\uC774\uBA70 \uB3C4\uBA74\uC5D0\uC11C \uC77D\uC740 \uAC12\uC774 \uC544\uB2D9\uB2C8\uB2E4.":"Without an overall length these are ratios only, based on a 100 mm length. They are not values read from the drawing.","\uC678\uD615 \uD310\uB3C5\uC740 \uBE44\uC728\uB9CC \uC815\uD655\uD569\uB2C8\uB2E4. \uC2E4\uC81C \uCE58\uC218\uB294 \uC804\uCCB4 \uAE38\uC774({n}mm) \uD558\uB098\uB85C \uC815\uD588\uACE0, \uC13C\uD130\uAD6C\uBA4D\xB7\uACF5\uCC28\xB7\uC7AC\uC9C8\xB7\uD544\uB81B R \uC740 \uC77D\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.":"Outline reading is accurate in proportion only. Real sizes come from the overall length ({n} mm); centre holes, tolerances, material and fillet radii are not read.","\uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4\uB85C \uBCF4\uC774\uC9C0 \uC54A\uC544 \uD310\uB3C5\uC744 \uBA48\uCDC4\uC2B5\uB2C8\uB2E4.":"This doesn't look like the front view of a turned part, so reading stopped.","\uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4\uAC00 \uC544\uB2D9\uB2C8\uB2E4":"Not the front view of a turned part","\uD310\uB3C5 \uACB0\uACFC\uAC00 \uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4\uB2F5\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uACB0\uACFC\uB294 \uCC38\uACE0\uC6A9\uC785\uB2C8\uB2E4.":"The reading doesn't look like a turned part. Treat the result as a rough guide.","\uB3C4\uBA74\uC5D0\uC11C \uBD80\uD488 \uC678\uD615\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.":"Couldn't find the part outline in the drawing.","\uC5B4\uB5A4 \uB3C4\uBA74\uC744 \uC62C\uB824\uC57C \uD558\uB098\uC694":"What should I upload?","\uADF8\uB798\uB3C4 \uC77D\uC5B4 \uBCF4\uAE30":"Read it anyway","\uC2E4\uC81C \uCE58\uC218\uB97C \uACB0\uC815\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.":"Real dimensions can't be determined.","\uC2E4\uC81C \uCE58\uC218\uB97C \uACB0\uC815\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4":"Real dimensions can't be determined","\uC774 \uB3C4\uBA74\uC5D0\uC11C \uBB38\uC790\uB97C \uC77D\uC9C0 \uC54A\uC73C\uBBC0\uB85C \uBE44\uC728\uB9CC \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC67C\uCABD {} \uB97C \uB123\uC5B4 \uC8FC\uC138\uC694. \uB3C4\uBA74\uC5D0 \uCE58\uC218\uAC00 \uBB38\uC790 \uAE30\uD638(A\xB7B\xB7H \uAC19\uC740)\uB85C\uB9CC \uC801\uD600 \uC788\uB2E4\uBA74 \uADDC\uACA9\uD45C\uC758 \uAC12\uC744 \uB123\uC73C\uBA74 \uB429\uB2C8\uB2E4.":"Text isn't read from this drawing, so only proportions are known. Enter the {} on the left. If the drawing only has letter symbols (A, B, H), use the value from the size table.","\uC804\uCCB4 \uAE38\uC774(mm)":"overall length (mm)","\uC804\uCCB4 \uAE38\uC774 \uB123\uAE30":"Enter overall length","\uBE44\uC728\uB9CC \uBCF4\uAE30":"Proportions only","\uC804\uCCB4 \uAE38\uC774\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694. \uC5C6\uC73C\uBA74 \uBE44\uC728\uB9CC \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4":"Please enter the overall length, or view proportions only","\uCD95 \uC704\uC640 \uC544\uB798\uC758 \uBAA8\uC591\uC774 \uC11C\uB85C \uB2E4\uB985\uB2C8\uB2E4(\uCC28\uC774 {n}%). \uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4\uB77C\uBA74 \uCD95\uC744 \uAE30\uC900\uC73C\uB85C \uC704\uC544\uB798\uAC00 \uAC19\uC544\uC57C \uD558\uBBC0\uB85C, \uC870\uB9BD\uCCB4\uC774\uAC70\uB098 \uD68C\uC804\uCCB4\uAC00 \uC544\uB2CC \uBD80\uD488\uC73C\uB85C \uBCF4\uC785\uB2C8\uB2E4.":"The shape above and below the axis differs by {n}%. A turned part is symmetric about its axis, so this looks like an assembly or a non-turned part.","\uC815\uBA74\uC5D0\uC11C \uBCF8 \uC6D0(\uC6D0\uD615 \uD22C\uC0C1)\uC73C\uB85C \uBCF4\uC785\uB2C8\uB2E4. \uC774 \uB370\uBAA8\uB294 \uCD95\uC774 \uAC00\uB85C\uB85C \uB193\uC778 \uC606\uBAA8\uC2B5 \uB3C4\uBA74\uC744 \uC77D\uC2B5\uB2C8\uB2E4.":"This looks like a circle seen head-on. This demo reads side views with the axis running horizontally.","\uC678\uD615\uC774 \uACC4\uC18D \uAD7D\uC5B4 \uC788\uC5B4 \uC6D0\uD1B5 \uAD6C\uAC04\uC774 \uAC70\uC758 \uC5C6\uC2B5\uB2C8\uB2E4(\uCD95 \uAE38\uC774\uC758 {n}%). \uC120\uBC18\uC5D0\uC11C \uAE4E\uB294 \uD68C\uC804\uCCB4 \uB3C4\uBA74\uC73C\uB85C \uBCF4\uAE30 \uC5B4\uB835\uC2B5\uB2C8\uB2E4.":"The outline curves throughout with almost no cylindrical run ({n}% of the length). This is unlikely to be a lathe-turned part.","\uD070 \uC131\uBD84\uC774 {n}\uAC1C. \uC5EC\uB7EC \uD22C\uC0C1\uB3C4\uB098 \uC870\uB9BD\uCCB4\uB85C \uBCF4\uC785\uB2C8\uB2E4. \uC774 \uB370\uBAA8\uB294 \uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4 \uD55C \uC7A5\uC744 \uC77D\uC2B5\uB2C8\uB2E4(\uB2E8\uBA74\uB3C4\xB7\uD0A4\uD648 \uB2E8\uBA74\uC740 \uC606\uC5D0 \uC788\uC5B4\uB3C4 \uB429\uB2C8\uB2E4).":"{n} large components found, so this looks like several views or an assembly. This demo reads one front view (a section or keyway detail beside it is fine).","\uBD80\uD488\uC774 \uAC00\uB85C {n}px \uB85C \uC791\uC2B5\uB2C8\uB2E4(\uAD8C\uC7A5 1,000px \uC774\uC0C1). \uC800\uD574\uC0C1 JPEG \uC740 \uC678\uD615\uC120\uACFC \uCE58\uC218\uC120\uC774 \uBD99\uC5B4 \uD310\uB3C5\uC774 \uC5B4\uAE0B\uB0A9\uB2C8\uB2E4.":"The part is only {n}px wide (1,000px or more recommended). In low-resolution JPEGs the outline and dimension lines merge.",\uCD95:"Shaft",\uD50C\uB79C\uC9C0:"Flange","\uBCFC\uD2B8\xB7\uB098\uC0AC":"Bolt \xB7 screw",\uC2A4\uD130\uB4DC:"Stud","\uAE30\uD0C0 \uD68C\uC804\uCCB4":"Other turned part","\uD68C\uC804\uC744 \uC804\uB2EC\uD558\uB294 \uCD95. \uBCA0\uC5B4\uB9C1\uC5D0 \uAC78\uB9AC\uACE0 \uD0A4\xB7\uBA48\uCDA4\uB9C1\uC73C\uB85C \uC0C1\uB300 \uBD80\uD488\uC744 \uC7A1\uB294\uB2E4.":"A shaft that transmits rotation. It rides in bearings and holds mating parts with keys and retaining rings.","\uACE0\uC18D\uC73C\uB85C \uB3C4\uB294 \uCD95. \uBCA0\uC5B4\uB9C1 \uC790\uB9AC\uC640 \uACF5\uAD6C\xB7\uCC99 \uC778\uD130\uD398\uC774\uC2A4\uAC00 \uC788\uB2E4.":"A high-speed shaft with bearing seats and a tool or chuck interface.","\uB450 \uBD80\uD488\uC744 \uC787\uB294 \uD540. \uAD6C\uBA4D\uC5D0 \uB07C\uC6B0\uACE0 \uBD84\uD560\uD540\xB7\uBA48\uCDA4\uB9C1\uC73C\uB85C \uBE60\uC9C0\uC9C0 \uC54A\uAC8C \uD55C\uB2E4. \uC2A4\uC2A4\uB85C \uB3CC\uC9C0 \uC54A\uB294\uB2E4.":"A pin joining two parts. It slides into a hole and is retained by a split pin or ring. It does not rotate on its own.","\uD558\uC6B0\uC9D5\uC5D0 \uC555\uC785\uB418\uC5B4 \uC548\uC5D0\uC11C \uB3C4\uB294 \uCD95\uC744 \uBC1B\uCE58\uB294 \uBBF8\uB044\uB7FC \uBCA0\uC5B4\uB9C1. \uBD80\uC2DC \uC790\uCCB4\uB294 \uB3CC\uC9C0 \uC54A\uB294\uB2E4.":"A plain bearing pressed into a housing to support a rotating shaft. The bushing itself does not turn.","\uCD95\uC5D0 \uB07C\uC6B0\uB294 \uD1B5. \uAC04\uACA9 \uC720\uC9C0\xB7\uBCF4\uD638\xB7\uBBF8\uB044\uB7FC\uBA74.":"A tube fitted over a shaft for spacing, protection or a sliding surface.","\uBD80\uD488 \uC0AC\uC774 \uAC04\uACA9\uC744 \uC815\uD558\uB294 \uB9C1. \uCD95\uC5D0 \uB07C\uC6CC \uBCA0\uC5B4\uB9C1\xB7\uAE30\uC5B4 \uC0AC\uC774\uC5D0 \uB454\uB2E4.":"A ring that sets the gap between parts, fitted on a shaft between bearings or gears.","\uBB3C\uAC74\uC744 \uAD74\uB9AC\uB294 \uB864\uB7EC. \uC591 \uB05D \uCD95\uC774 \uBCA0\uC5B4\uB9C1\uC5D0 \uAC78\uB9AC\uACE0 \uBAB8\uD1B5\uC774 \uB3C8\uB2E4.":"A roller. The stub shafts run in bearings and the body turns.","\uBCFC\uD2B8\uB85C \uC0C1\uB300\uC5D0 \uBD99\uB294 \uC6D0\uD310. \uCD95\uBC29\uD5A5\uC73C\uB85C \uB9DE\uB300\uC5B4 \uC870\uC778\uB2E4.":"A disc bolted to a mating face, clamped along the axis.","\uBA38\uB9AC\uB97C \uB3CC\uB824 \uC0C1\uB300 \uC554\uB098\uC0AC\uC5D0 \uCCB4\uACB0\uD558\uB294 \uBD80\uD488. 1\uD68C\uC804\uC5D0 \uD53C\uCE58\uB9CC\uD07C \uB4E4\uC5B4\uAC04\uB2E4.":"Turned by its head into a female thread; one turn advances it by the pitch.","\uC591 \uB05D\uC5D0 \uB098\uC0AC\uAC00 \uC788\uB294 \uBD09. \uD55C\uCABD\uC740 \uBAB8\uCCB4\uC5D0, \uB2E4\uB978 \uCABD\uC740 \uB108\uD2B8\uB85C.":"A rod threaded at both ends, one into the body and one for a nut.","\uC120\uBC18\uC5D0\uC11C \uAE4E\uB294 \uADF8 \uBC16\uC758 \uD68C\uC804\uCCB4.":"Another lathe-turned part.",\uC790\uC804:"Spin",\uB07C\uC6B0\uAE30:"Insert",\uCCB4\uACB0:"Screw in","\uC555\uC785\xB7\uBD84\uB9AC":"Press in \xB7 separate","\uB07C\uC6B0\uAE30\xB7\uBE7C\uAE30":"Slide on \xB7 off","\uB9DE\uB300\uAE30\xB7\uBD84\uB9AC":"Mate \xB7 separate","\uC0C1\uB300 \uCD95 \uD68C\uC804":"Mating shaft turns","\uCD95\uACFC \uD568\uAED8 \uB3C4\uB294 \uBD80\uD488(\uB0B4\uB95C\xB7\uD5C8\uBE0C\xB7\uD0A4)\uB9CC \uB3C8\uB2E4":"Only parts that turn with the shaft (inner race, hub, key) rotate","\uBCA0\uC5B4\uB9C1\xB7\uD5C8\uBE0C\xB7\uBA48\uCDA4\uB9C1\uC744 \uCD95\uBC29\uD5A5\xB7\uBC18\uACBD\uBC29\uD5A5\uC73C\uB85C \uBE80\uB2E4":"Bearings, hubs and rings come off axially and radially","\uBCA0\uC5B4\uB9C1 \uB0B4\uB95C\uB9CC \uD568\uAED8 \uB3C8\uB2E4":"Only the bearing inner race turns with it","\uC694\uD06C(\uD074\uB808\uBE44\uC2A4) \uAD6C\uBA4D\uC5D0 \uCD95\uBC29\uD5A5\uC73C\uB85C \uB123\uB294\uB2E4":"Goes axially into the yoke (clevis) holes","\uBD84\uD560\uD540\uC744 \uBC18\uACBD \uBC29\uD5A5\uC73C\uB85C \uBF51\uACE0 \uD540\uC744 \uBE80\uB2E4":"Pull the split pin radially, then withdraw the pin","\uD558\uC6B0\uC9D5\uC5D0 \uCD95\uBC29\uD5A5\uC73C\uB85C \uC555\uC785\uB418\uACE0, \uC0C1\uB300 \uCD95\uC774 \uBCF4\uC5B4\uC5D0 \uB4E4\uC5B4\uAC04\uB2E4":"Pressed axially into the housing; the mating shaft enters the bore","\uBD80\uC2DC\uB294 \uACE0\uC815, \uC548\uC758 \uCD95\uC774 \uB3C8\uB2E4":"The bushing stays put; the shaft inside turns","\uCD95\uBC29\uD5A5\uC73C\uB85C \uB07C\uC6B4\uB2E4":"Slides on axially","\uBAB8\uD1B5\uC774 \uB3C8\uB2E4":"The body turns","\uCD95\uBC29\uD5A5\uC73C\uB85C \uBD99\uC778\uB2E4":"Mates axially","1\uD68C\uC804 = \uD53C\uCE58\uB9CC\uD07C \uC804\uC9C4, \uACF5\uAD6C\uAC00 \uD568\uAED8 \uB3C8\uB2E4":"One turn advances by the pitch; the tool turns with it","\uB108\uD2B8\uAC00 \uB3CC\uBA70 \uB4E4\uC5B4\uAC04\uB2E4":"The nut turns and draws it in","\uD480\uC5B4\uC11C \uBE80\uB2E4":"Unscrew and remove","\uD310\uB3C5\uAE30\uAC00 \uBD84\uB958\uD55C \uC720\uD615":"type from the reading","\uBCF4\uC5B4\uAC00 \uC788\uC74C":"has a bore","\uD6A1\uAD6C\uBA4D\uC774 \uC788\uB294 \uB2E8\uC21C \uC6D0\uD1B5":"plain cylinder with a cross hole","\uD0A4\uD648 \uB610\uB294 \uBCA0\uC5B4\uB9C1 \uACF5\uCC28":"keyway or bearing tolerance","\uC591 \uB05D\uC774 \uB098\uC0AC\uBD80":"threaded at both ends","\uD574\uC11D \uACB0\uACFC":"from the analysis","\uC815\uBA74 \xB7 \uC717\uBA74 \xB7 \uCE21\uBA74\uC774 \uC788\uB294 \uBD80\uD488 \uB3C4\uBA74 \uD55C \uC7A5":"One sheet with front, top and side views","\uC608\uC2DC \uB3C4\uBA74":"Example drawings","\uACE1\uAD00\uC740 \uB9CC\uB4E4\uC9C0 \uBABB\uD558\uB294 \uBD80\uB958\uB77C \uC774\uC720\uB97C \uBCF4\uC5EC \uC90D\uB2C8\uB2E4.":"The elbow is a kind we can't build; the demo explains why.","L \uBE0C\uB798\uD0B7 3\uBA74\uB3C4":"L bracket, 3 views","\uBCA0\uC5B4\uB9C1 \uD558\uC6B0\uC9D5":"Bearing housing","\uC0AC\uAC01 \uD50C\uB79C\uC9C0 \uACE1\uAD00":"Square-flange elbow","\uBDF0\uC640 \uBC29\uD5A5":"Views and directions",\uD22C\uC0C1\uBC95:"Projection","3\uAC01\uBC95":"Third angle","1\uAC01\uBC95":"First angle","\uBDF0\uB97C \uACE0\uB974\uACE0 \uC624\uB978\uCABD \uC815\uC721\uBA74\uCCB4\uC5D0\uC11C \uBC29\uD5A5\uC744 \uB204\uB985\uB2C8\uB2E4. \uCC38\uACE0 \uBDF0\uB294 \uB9CC\uB4E4 \uB54C \uC4F0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.":"Pick a view, then click a face on the cube at the right. Reference views aren't used when building.","\uC67C\uCABD\uC5D0\uC11C \uC608\uC2DC\uB97C \uACE0\uB974\uAC70\uB098 \uB3C4\uBA74\uC744 \uC62C\uB9AC\uC138\uC694":"Pick an example on the left, or upload a drawing","\uC77D\uC740 \uCE58\uC218 \uD45C\uC2DC":"Show dimensions read","\uC77D\uC740 \uCE58\uC218 \uBB38\uC790\uB97C \uB3C4\uBA74 \uC704\uC5D0 \uD45C\uC2DC":"Marks the dimension text on the drawing","\uBDF0 \uBC29\uD5A5":"View direction","\uBDF0 \uC5C6\uC74C":"No view","\uBDF0 {n}":"View {n}","\uBDF0\uB97C \uACE0\uB978 \uB4A4 \uBA74\uC744 \uB204\uB974\uC138\uC694.":"Pick a view, then click a face.","\uBA3C\uC800 \uBDF0\uB97C \uACE0\uB974\uC138\uC694":"Pick a view first",\uC815\uBA74\uB3C4:"Front",\uC717\uBA74\uB3C4:"Top",\uC6B0\uCE21\uBA74\uB3C4:"Right",\uC88C\uCE21\uBA74\uB3C4:"Left",\uC544\uB7AB\uBA74\uB3C4:"Bottom",\uB4B7\uBA74\uB3C4:"Back","\uB4F1\uAC01 (\uCC38\uACE0)":"Isometric (reference)","\uB2E8\uBA74 (\uCC38\uACE0)":"Section (reference)","\uC0C1\uC138 (\uCC38\uACE0)":"Detail (reference)","\uC4F0\uC9C0 \uC54A\uC74C":"Not used",\uCD95\uCC99:"Scale","\uB9DE\uB294 \uCE58\uC218":"Agreeing dimensions","\uACE0\uB978 \uBDF0\uC758 \uAC00\uB85C \uC2E4\uC81C \uAE38\uC774 (mm)":"Real width of the selected view (mm)","\uCE58\uC218 \uB2E4\uC2DC \uC77D\uAE30":"Read dimensions again","{n}\uAC1C \uC77D\uC74C \xB7 {n}\uCD08":"{n} read \xB7 {n}s","\uC77D\uC9C0 \uBABB\uD568":"Not read","1 px = {n} mm":"1 px = {n} mm","1 px = {n} mm (\uBDF0 {n} \uAC00\uB85C {n} mm \uC785\uB825)":"1 px = {n} mm (view {n} width entered as {n} mm)","\uB9DE\uB294 \uCE58\uC218\uAC00 \uC801\uC2B5\uB2C8\uB2E4. \uC544\uB294 \uCE58\uC218 \uD558\uB098\uB97C \uB123\uC5B4 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":"Few dimensions agree. Enter one known dimension to confirm.","\uC5EC\uB7EC \uCE58\uC218\uAC00 \uAC19\uC740 \uCD95\uCC99\uC744 \uAC00\uB9AC\uD0B5\uB2C8\uB2E4.":"Several dimensions point to the same scale.","\uC785\uB825\uD55C \uCE58\uC218\uB85C \uCD95\uCC99\uC744 \uC815\uD588\uC2B5\uB2C8\uB2E4":"Scale set from the value you entered","\uCE58\uC218\uB97C \uC77D\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.":"Couldn't read the dimensions.","\uCE58\uC218 \uBB38\uC790\uC640 \uCE58\uC218\uC120\uC744 \uC9DD\uC9C0\uC744 \uC218 \uC5C6\uC5C8\uC2B5\uB2C8\uB2E4":"Couldn't pair dimension text with dimension lines","\uBB38\uC790 \uC778\uC2DD \uC5D4\uC9C4\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4 ({}).":"Couldn't load the text recognition engine ({}).","\uCE58\uC218\uB97C \uC77D\uB294 \uC911 \uC624\uB958: {}":"Error while reading dimensions: {}","\uBD80\uD488 \uC720\uD615 \xB7 \uBC29\uBC95":"Part type \xB7 method","\uC815\uD22C\uC0C1 \uAD50\uC9D1\uD569":"Orthographic intersection","\uD310 (\uB450\uAED8)":"Plate (thickness)","\uB450\uAED8 (mm)":"Thickness (mm)","\uC815\uD22C\uC0C1 \uBDF0 {n}\uAC1C\uB85C \uB9CC\uB4ED\uB2C8\uB2E4":"Built from {n} orthographic views","\uBDF0\uAC00 \uD558\uB098\uB77C \uD68C\uC804\uCCB4\uB85C \uB9CC\uB4ED\uB2C8\uB2E4":"Only one view, so it's built as a turned part","\uBDF0\uAC00 \uD558\uB098\uB77C \uB450\uAED8\uB97C \uB123\uC5B4 \uD310\uC73C\uB85C \uB9CC\uB4ED\uB2C8\uB2E4":"Only one view, so enter a thickness and it's built as a plate","\uB2E8\uBA74\uB3C4\uB85C\uB9CC \uC815\uC758\uB418\uB294 \uBD80\uD488\uC740 \uB9CC\uB4E4\uC9C0 \uBABB\uD569\uB2C8\uB2E4":"Parts defined only by a section view can't be built","\uC815\uBA74, \uC717\uBA74, \uCE21\uBA74 \uC911 \uD558\uB098 \uC774\uC0C1\uC744 \uC9C0\uC815\uD558\uC138\uC694":"Assign at least one of front, top or side","\uC9C1\uC811 \uACE0\uB984":"Chosen manually","\uBA3C\uC800 \uCE58\uC218\uB97C \uC815\uD574 \uC8FC\uC138\uC694":"Set the dimensions first","\uC774 \uBD80\uB958\uB294 \uB9CC\uB4E4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4":"This kind can't be built","1\uB2E8\uACC4 \xB7 \uAC01\uAE30\uB465":"Level 1 \xB7 prismatic","2\uB2E8\uACC4 \xB7 \uC6D0\uD1B5 \uADFC\uC0AC":"Level 2 \xB7 cylinder approx.","3\uB2E8\uACC4 \xB7 \uACE1\uBA74":"Level 3 \xB7 curved","\uC815\uD655\uD788 \uB098\uC635\uB2C8\uB2E4.":"Comes out accurate.","\uC548\uCABD \uD615\uC0C1\uC740 \uADFC\uC0AC\uC785\uB2C8\uB2E4.":"Inner shapes are approximate.","\uB9CC\uB4E4\uC9C0 \uBABB\uD558\uB294 \uBD80\uB958\uC785\uB2C8\uB2E4.":"This kind can't be built.","\uD06C\uAE30 X \xD7 Y \xD7 Z":"Size X \xD7 Y \xD7 Z",\uBD80\uD53C:"Volume",\uC0BC\uAC01\uD615:"Triangles","\uBDF0 \uC815\uD569":"View match","\uB300\uC870\uD560 \uC815\uD22C\uC0C1 \uBDF0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.":"No orthographic views to compare.","{} \uC815\uD569\uC774 \uB0AE\uC2B5\uB2C8\uB2E4. \uBC29\uD5A5\uACFC \uAD6C\uBA4D\uC744 \uD655\uC778\uD558\uC138\uC694.":"{} matches poorly. Check the direction and the holes.","\uCC28\uC774 {n}%":"{n}% apart","\uBDF0 \uB098\uB204\uAE30":"Splitting views","\uC678\uD615\uC120\uB9CC \uB0A8\uAE30\uACE0 \uC131\uBD84 \uCC3E\uAE30":"Keeping outlines, finding components","\uAC00\uAE4C\uC6B4 \uC131\uBD84\uC744 \uBDF0\uB85C \uBB36\uAE30":"Grouping nearby components into views","\uC724\uACFD \xB7 \uAD6C\uBA4D \uB530\uAE30, \uBC30\uCE58\uB85C \uBC29\uD5A5 \uCD94\uCC9C":"Tracing outlines and holes, suggesting directions","\uBDF0\uB9C8\uB2E4 \uC724\uACFD\uC744 \uADF8 \uBC29\uD5A5\uC73C\uB85C \uBC00\uC5B4\uB0B4\uAE30":"Extruding each view along its direction","\uC804\uBD80 \uAD50\uC9D1\uD569\uD558\uAE30":"Intersecting them all","\uAC01 \uBDF0\uB85C \uB2E4\uC2DC \uD22C\uC601\uD574 \uB3C4\uBA74\uACFC \uB300\uC870":"Re-projecting onto each view and comparing","\uBDF0 {n}\uAC1C. \uBC29\uD5A5\uC744 \uD655\uC778\uD558\uC138\uC694":"{n} views. Check the directions","\uBDF0\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4":"No views found","\uB3C4\uBA74\uC5D0\uC11C \uD615\uC0C1\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4":"Couldn't find any shape in the drawing","\uBD80\uD488\uC744 \uB9CC\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4":"Part built","\uC815\uD22C\uC0C1 \uBDF0\uAC00 \uB458 \uC774\uC0C1 \uD544\uC694\uD569\uB2C8\uB2E4(\uC815\uBA74\uB3C4 + \uC717\uBA74\uB3C4 \uB610\uB294 \uCE21\uBA74\uB3C4). \uBDF0\uAC00 \uD558\uB098\uBA74 \uB450\uAED8\uB97C \uB123\uC5B4 \uD310\uC73C\uB85C \uB9CC\uB4DC\uC138\uC694.":"Two or more orthographic views are needed (front plus top or side). With one view, enter a thickness to build a plate.","\uD68C\uC804\uCCB4\uB85C \uBCFC \uBDF0\uB97C \uC815\uD574 \uC8FC\uC138\uC694":"Assign a view to use as the turned part","\uD310\uC73C\uB85C \uBCFC \uBDF0\uB97C \uC815\uD574 \uC8FC\uC138\uC694":"Assign a view to use as the plate","\uC724\uACFD\uC73C\uB85C \uD615\uC0C1\uC744 \uB9CC\uB4E4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4":"Couldn't build a shape from the outline","\uC774 \uBDF0\uC5D0\uC11C \uB2EB\uD78C \uC724\uACFD\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4":"No closed outline found in this view","\uB450\uAED8 {n} mm \uB294 \uC785\uB825\uAC12\uC785\uB2C8\uB2E4":"The {n} mm thickness is a value you entered","\uBDF0 \uD558\uB098\uB97C \uCD95 \uB458\uB808\uB85C \uB3CC\uB838\uC2B5\uB2C8\uB2E4":"One view revolved about its axis","\uAD6C\uBA4D {n}":"{n} holes","\uAD6C\uBA4D {n} \xB7 \uC548\uCABD \uBAA8\uC11C\uB9AC {n}":"{n} holes \xB7 {n} inner edges","{n}\xD7{n} px":"{n}\xD7{n} px","\uB3C4\uBA74\uC744 \uC62C\uB9AC\uBA74 \uBDF0\uB97C \uC790\uB3D9\uC73C\uB85C \uB098\uB215\uB2C8\uB2E4. \uBDF0\uB97C \uACE0\uB974\uACE0 \uC720\uD615\uC744 \uC815\uD55C \uB4A4 {} \uB97C \uB204\uB974\uC138\uC694.":"Upload a drawing and the views are split automatically. Pick a view, set the type, then press {}.","\uC62C\uB9AC\uAE30 \uC804\uC5D0":"Before you upload","\uC5B4\uB5A4 \uB3C4\uBA74\uC744 \uC62C\uB9AC\uBA74 \uB418\uB098\uC694":"What can I upload?","\uD55C \uBD80\uD488\uC744 \uC5EC\uB7EC \uBC29\uD5A5\uC5D0\uC11C \uADF8\uB9B0 \uB3C4\uBA74 \uD55C \uC7A5\uC785\uB2C8\uB2E4. \uBDF0\uB9C8\uB2E4 \uBC29\uD5A5\uC744 \uC815\uD558\uBA74 \uCE58\uC218\uB97C \uC77D\uC5B4 \uBD80\uD488 \uD558\uB098\uB97C \uB9CC\uB4ED\uB2C8\uB2E4.":"One sheet showing a single part from several directions. Set a direction per view and it reads the dimensions to build one part.","\uC815\uBA74 \xB7 \uC717\uBA74 \xB7 \uCE21\uBA74\uC774 \uC788\uB294 \uD55C \uBD80\uD488 \uB3C4\uBA74":"A single-part drawing with front, top and side views","\uC870\uB9BD\uB3C4, \uC0AC\uC9C4, 3D \uB80C\uB354":"Assembly drawings, photos, 3D renders","\uBDF0\uB07C\uB9AC \uB5A8\uC5B4\uC838 \uC788\uACE0 \uC678\uD615\uC120\uC774 \uCE58\uC218\uC120\uBCF4\uB2E4 \uAD75\uAC8C":"Views set apart, outlines thicker than dimension lines","\uBDF0\uAC00 \uBD99\uC5B4 \uC788\uAC70\uB098 \uC120 \uAD75\uAE30 \uAD6C\uBD84\uC774 \uC5C6\uB294 \uB3C4\uBA74":"Views touching, or no difference in line weight","\uCE58\uC218 \uC22B\uC790\uAC00 \uCE58\uC218\uC120 \uBC14\uB85C \uC704\uB098 \uC606\uC5D0":"Dimension numbers right on or beside their dimension line","\uCE58\uC218\uAC00 \uAE30\uD638(A, B, H)\uBFD0\uC778 \uCE74\uD0C8\uB85C\uADF8 \uB3C4\uBA74":"Catalogue drawings with only letter symbols (A, B, H)","\uAC00\uB85C 1,500px \uC774\uC0C1, \uBC18\uB4EF\uD55C \uC774\uBBF8\uC9C0":"1,500px wide or more, straight image","\uD750\uB9AC\uAC70\uB098 \uAE30\uC6B8\uC5B4\uC9C4 \uC2A4\uCE94, \uC190\uADF8\uB9BC":"Blurry or skewed scans, hand sketches","1\uB2E8\uACC4":"Level 1","2\uB2E8\uACC4":"Level 2","3\uB2E8\uACC4":"Level 3","\uBE0C\uB798\uD0B7 \xB7 \uD310\uAE08 \xB7 \uAC01\uAE30\uB465":"Brackets \xB7 sheet metal \xB7 prisms","\uD558\uC6B0\uC9D5 \xB7 \uBCF4\uC2A4 \uC788\uB294 \uBAB8\uCCB4":"Housings \xB7 bodies with bosses","\uACE1\uAD00 \xB7 \uC2A4\uC715 \xB7 \uC790\uC720\uACE1\uBA74":"Elbows \xB7 sweeps \xB7 free-form","\uC815\uD655\uD788 \uB098\uC635\uB2C8\uB2E4.\uB9CC\uB4E4\uC9C0 \uBABB\uD569\uB2C8\uB2E4.":"","\uB9CC\uB4E4\uC9C0 \uBABB\uD569\uB2C8\uB2E4.":"Can't be built.","\uB450\uAED8\uB294 \uD55C \uBDF0\uB9CC\uC73C\uB85C \uC54C \uC218 \uC5C6\uC5B4 \uC9C1\uC811 \uB123\uC2B5\uB2C8\uB2E4. \uC870\uB9BD \uC704\uCE58\uB3C4 \uB3C4\uBA74\uC5D0\uC11C \uC77D\uC9C0 \uC54A\uACE0 \uD654\uBA74\uC5D0\uC11C \uB9DE\uCDA5\uB2C8\uB2E4.":"Thickness can't be known from one view, so you enter it. Assembly positions aren't read from the drawing either.","\uC790\uC138\uD55C \uC548\uB0B4":"Full guide","\uB2E4\uC2DC \uBCF4\uC9C0 \uC54A\uAE30":"Don't show again","\uD30C\uC77C \uACE0\uB974\uAE30":"Choose a file","PNG \xB7 JPG \xB7 SVG \xB7 \uC5EC\uB7EC \uD22C\uC0C1\uB3C4\uAC00 \uC788\uC5B4\uB3C4 \uB429\uB2C8\uB2E4":"PNG \xB7 JPG \xB7 SVG \xB7 multiple views are fine",\uAC74\uB108\uB6F0\uAE30:"Skip",\uC774\uC804:"Back",\uB2E4\uC74C:"Next",\uC2DC\uC791\uD558\uAE30:"Start","\uC0D8\uD50C \uB3C4\uBA74\uC73C\uB85C \uC2DC\uC791":"Start with a sample","\uCE74\uB4DC\uB97C \uB204\uB974\uBA74 \uADF8 \uB3C4\uBA74\uC73C\uB85C \uBC14\uB85C \uC9C4\uD589\uB429\uB2C8\uB2E4. \uCC98\uC74C\uC774\uB77C\uBA74 \uC5EC\uAE30\uC11C \uC2DC\uC791\uD558\uC138\uC694.":"Click a card to run that drawing. Start here if it's your first time.","\uB0B4 \uB3C4\uBA74 \uC62C\uB9AC\uAE30":"Upload your drawing","\uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4 \uD55C \uC7A5\uC744 \uC62C\uB9BD\uB2C8\uB2E4. \uC544\uB798\uC5D0\uC11C \uBD80\uD488 \uC720\uD615\uC744 \uBA3C\uC800 \uACE8\uB77C \uB450\uBA74 \uADF8 \uC720\uD615\uC5D0 \uB9DE\uAC8C \uC2DC\uBBAC\uB808\uC774\uC158\uD569\uB2C8\uB2E4.":"Upload one front view of a turned part. Pick the part type below first and the simulation is planned for it.","\uC62C\uB9AC\uAE30 \uC548\uB0B4 \uC5F4\uAE30":"Open the upload guide","\uB124 \uB2E8\uACC4\uB85C \uC9C4\uD589":"Four steps","\uB3C4\uBA74 \uC785\uB825, \uD310\uB3C5, 3D CAD, \uAC80\uC99D \uC21C\uC11C\uC785\uB2C8\uB2E4. \uC9C0\uAE08 \uB2E8\uACC4\uAC00 \uC704\uCABD\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.":"Drawing, reading, 3D CAD, check. The current step is shown at the top.","\uB2E4\uC74C \uB2E8\uACC4 \uBC84\uD2BC":"Next-step button","\uC624\uB978\uCABD \uC544\uB798 \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uB2E4\uC74C \uB2E8\uACC4\uAC00 \uC2E4\uD589\uB429\uB2C8\uB2E4. \uBC84\uD2BC \uC704 \uD55C \uC904\uC774 \uADF8 \uB2E8\uACC4\uAC00 \uD558\uB294 \uC77C\uC785\uB2C8\uB2E4.":"The button at the bottom right runs the next step. The line above it says what that step does.","\uBCF4\uAE30 \uC804\uD658\uACFC \uC870\uB9BD \xB7 \uC2DC\uBBAC":"View switches and simulation","\uB2E8\uBA74\uACFC \uB3C4\uBA74\uC744 \uBC88\uAC08\uC544 \uBCF4\uACE0, \uC870\uB9BD \xB7 \uC2DC\uBBAC\uC744 \uCF1C\uBA74 \uC0C1\uB300 \uBD80\uD488\uACFC \uD68C\uC804\uC774 \uBD99\uC2B5\uB2C8\uB2E4. \uB044\uBA74 \uBD80\uD488\uB9CC \uB0A8\uC2B5\uB2C8\uB2E4.":"Switch between section and drawing. Turning on assembly adds mating parts and motion; turning it off leaves just the part.","\uACB0\uACFC\uC640 \uB0B4\uB824\uBC1B\uAE30":"Results and download","\uD310\uB3C5\uD55C \uCE58\uC218\uB97C \uACE0\uCE58\uBA74 3D\uC640 \uB3C4\uBA74\uC774 \uD568\uAED8 \uBC14\uB01D\uB2C8\uB2E4. 3D\uAC00 \uB9CC\uB4E4\uC5B4\uC9C0\uBA74 \uB9E8 \uC544\uB798 \uB0B4\uBCF4\uB0B4\uAE30\uC5D0\uC11C STEP, STL, GLB \uB4F1\uC73C\uB85C \uBC1B\uC2B5\uB2C8\uB2E4.":"Edit a dimension and the 3D and drawing follow. Once the 3D exists, download STEP, STL, GLB and more at the bottom.","\uC608\uC2DC \uB3C4\uBA74\uC73C\uB85C \uC2DC\uC791":"Start with an example","\uD55C \uBD80\uD488\uC744 \uC815\uBA74 \xB7 \uC717\uBA74 \xB7 \uCE21\uBA74\uC73C\uB85C \uADF8\uB9B0 \uB3C4\uBA74\uB4E4\uC785\uB2C8\uB2E4. \uC138 \uBC88\uC9F8(\uACE1\uAD00)\uB294 \uC774 \uBC84\uC804\uC774 \uB9CC\uB4E4\uC9C0 \uBABB\uD558\uB294 \uBD80\uB958\uB77C \uC774\uC720\uB97C \uBCF4\uC5EC \uC90D\uB2C8\uB2E4.":"Drawings of one part in front, top and side views. The third (elbow) is a kind this version can't build, and it says why.","\uC5EC\uB7EC \uD22C\uC0C1\uB3C4\uAC00 \uD55C \uC7A5\uC5D0 \uC788\uB294 \uD55C \uBD80\uD488 \uB3C4\uBA74\uC744 \uC62C\uB9BD\uB2C8\uB2E4. \uC62C\uB9AC\uBA74 \uBDF0\uB97C \uB098\uB204\uACE0, \uBC29\uD5A5\uC744 \uCD94\uCC9C\uD558\uACE0, \uCE58\uC218 \uBB38\uC790\uB97C \uC77D\uC2B5\uB2C8\uB2E4.":"Upload a single-part drawing with several views. It splits the views, suggests directions and reads the dimension text.","\uBDF0\uB9C8\uB2E4 \uBC29\uD5A5 \uD655\uC778":"Check each direction","\uCD94\uCC9C\uB41C \uBC29\uD5A5(\uC815\uBA74 \xB7 \uC717\uBA74 \xB7 \uC6B0\uCE21\uBA74 \xB7 \uB4F1\uAC01 \uCC38\uACE0)\uC774 \uB9DE\uB294\uC9C0 \uBD05\uB2C8\uB2E4. \uAE30\uD558\uB9CC\uC73C\uB85C\uB294 \uBC29\uD5A5\uC744 \uD655\uC2E0\uD560 \uC218 \uC5C6\uC5B4 \uC0AC\uB78C\uC774 \uD655\uC815\uD569\uB2C8\uB2E4.":"Check the suggested directions. Geometry alone can't be sure which view is which, so you confirm them.","\uC815\uC721\uBA74\uCCB4\uB85C \uBC29\uD5A5 \uC8FC\uAE30":"Set direction with the cube","\uBDF0\uB97C \uACE0\uB978 \uB4A4 \uC815\uC721\uBA74\uCCB4\uC758 \uBA74\uC744 \uB204\uB974\uBA74 \uADF8 \uBDF0\uAC00 \uADF8 \uBC29\uD5A5\uC774 \uB429\uB2C8\uB2E4. \uC815\uD22C\uC0C1 \uBC29\uD5A5\uC740 \uBDF0 \uD558\uB098\uC5D0\uB9CC \uC904 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":"Pick a view, then click a cube face to assign that direction. Each orthographic direction belongs to one view.","\uCE58\uC218\uB294 \uB3C4\uBA74\uC5D0\uC11C \uC77D\uC2B5\uB2C8\uB2E4":"Dimensions come from the drawing","\uCE58\uC218 \uBB38\uC790\uB97C \uC77D\uC5B4 \uCE58\uC218\uC120\uACFC \uC9DD\uC9C0\uC5B4 \uCD95\uCC99\uC744 \uC815\uD569\uB2C8\uB2E4. \uC11C\uB85C \uB9DE\uB294 \uCE58\uC218\uAC00 \uB9CE\uC744\uC218\uB85D \uBBFF\uC744 \uB9CC\uD569\uB2C8\uB2E4. \uBABB \uC77D\uC73C\uBA74 \uADF8\uB54C\uB9CC \uD55C \uCE58\uC218\uB97C \uBB3B\uC2B5\uB2C8\uB2E4.":"Dimension text is paired with dimension lines to set the scale. The more that agree, the safer it is. Only if none can be read are you asked for one.","\uB9CC\uB4E4\uACE0 \uC815\uD569 \uBCF4\uAE30":"Build and check the match","\uAC01 \uBDF0\uC758 \uC724\uACFD\uC744 \uADF8 \uBC29\uD5A5\uC73C\uB85C \uBC00\uC5B4\uB0B4 \uAD50\uC9D1\uD569\uD569\uB2C8\uB2E4. \uB9CC\uB4E0 3D \uB97C \uAC01 \uBDF0\uB85C \uB2E4\uC2DC \uD22C\uC601\uD574 \uB3C4\uBA74\uACFC \uC5BC\uB9C8\uB098 \uACB9\uCE58\uB294\uC9C0 \uBCF4\uC5EC \uC90D\uB2C8\uB2E4.":"Each view's outline is extruded along its direction and intersected. The result is re-projected onto each view to show the overlap.",\uB2EB\uAE30:"Close","\uC815\uB2F5 \uC0AC\uC591\uC5D0\uC11C \uADF8\uB9B0 \uB3C4\uBA74\uC774\uB77C \uD310\uB3C5 \uC815\uD655\uB3C4\uB97C \uC22B\uC790\uB85C \uBCF4\uC5EC \uC90D\uB2C8\uB2E4. \uCE74\uB4DC\uB97C \uB204\uB974\uBA74 \uC5F4\uB9BD\uB2C8\uB2E4.":"These drawings come from reference specs, so reading accuracy can be shown as a number. Click a card to open it.",\uBD80\uC2DC:"Bushing","\uD074\uB808\uBE44\uC2A4 \uD540":"Clevis pin","\uD50C\uB79C\uC9C0 \uBD80\uC2DC":"Flanged bushing","\uC721\uAC01 \uB2E8\uBD99\uC774 \uCD95":"Hex stepped shaft","\uC591\uB2E8 \uB098\uC0AC \uCD95":"Double-threaded shaft","\uD14C\uC774\uD37C \uCD95":"Taper shaft","\uBAA8\uD130 \uCD95":"Motor shaft","\uB2E8\uBD99\uC774 \uCD95":"Stepped shaft",\uC2AC\uB9AC\uBE0C:"Sleeve",\uC2A4\uD398\uC774\uC11C:"Spacer",\uB864\uB7EC:"Roller",\uC2A4\uD540\uB4E4:"Spindle","\uC721\uAC01 \uBCFC\uD2B8 M10\xD740":"Hex bolt M10\xD740","\uC721\uAC01\uAD6C\uBA4D\uBD99\uC774 \uBCFC\uD2B8 M8\xD730":"Socket head cap screw M8\xD730","\uC138\uD2B8 \uC2A4\uD06C\uB8E8 M6\xD712":"Set screw M6\xD712","\uC811\uC2DC\uBA38\uB9AC \uB098\uC0AC M6\xD720":"Countersunk screw M6\xD720","\uC2A4\uD130\uB4DC \uBCFC\uD2B8 M12\xD760":"Stud bolt M12\xD760",\uD68C\uC804\uCCB4:"Turned part",\uB09C\uC774\uB3C4:"Difficulty",\uBCF4\uC5B4:"Bore",\uD3C9\uBA74:"Flat",\uC721\uAC01:"Hex",\uB110\uB9C1:"Knurl","\uC721\uAC01 \uC18C\uCF13":"Hex socket",\uD0A4\uD648:"Keyway",\uC13C\uD130\uAD6C\uBA4D:"Centre hole",\uD6A1\uAD6C\uBA4D:"Cross hole",\uBAA8\uB530\uAE30:"Chamfer",\uD544\uB81B:"Fillet",\uB77C\uC6B4\uB4DC:"Round",\uB3C4\uD53C\uD648:"Undercut",\uD648:"Groove","\uACBD\uACC4 {n} \xB7 C{n}":"Boundary {n} \xB7 C{n}","\uACBD\uACC4 {n} \xB7 C{n}\xD7{n}\xB0":"Boundary {n} \xB7 C{n}\xD7{n}\xB0","\uACBD\uACC4 {n} \xB7 R{n}":"Boundary {n} \xB7 R{n}","\uACBD\uACC4 {n} \xB7 {n}\xD7{n}":"Boundary {n} \xB7 {n}\xD7{n}","\uC67C\uCABD \xB7 {}":"Left \xB7 {}","\uC624\uB978\uCABD \xB7 {}":"Right \xB7 {}","\uC67C\uCABD \xB7 S{n} \uAE4A\uC774 {n}":"Left \xB7 S{n} depth {n}","\uC624\uB978\uCABD \xB7 S{n} \uAE4A\uC774 {n}":"Right \xB7 S{n} depth {n}","x{n} \xB7 \u2300{n} \uAD00\uD1B5":"x{n} \xB7 \u2300{n} through","x{n} \xB7 \u2300{n} \uAE4A\uC774 {n}":"x{n} \xB7 \u2300{n} depth {n}","seg {n} \xB7 +{n} \xB7 {n}\xD7{n} L{n}":"seg {n} \xB7 +{n} \xB7 {n}\xD7{n} L{n}","seg {n} \xB7 +{n} \xB7 L{n} \uAE4A\uC774 {n}":"seg {n} \xB7 +{n} \xB7 L{n} depth {n}","seg {n} \xB7 +{n} \xB7 L{n} \uAE4A\uC774 {n} \xD7{n}":"seg {n} \xB7 +{n} \xB7 L{n} depth {n} \xD7{n}","seg {n} \xB7 \uB300\uBCC0 {n}":"seg {n} \xB7 across flats {n}","seg {n} \xB7 L{n}":"seg {n} \xB7 L{n}","seg {n} \xB7 +{n} \xB7 {n}\xD7{n}":"seg {n} \xB7 +{n} \xB7 {n}\xD7{n}","seg {n} \xB7 +{n} \xB7 {n}\xD7{n} ({})":"seg {n} \xB7 +{n} \xB7 {n}\xD7{n} ({})","\uAD00\uD1B5 \xB7 \u2300{n}\xD7{n}":"Through \xB7 \u2300{n}\xD7{n}","\uB9C9\uD798({}) \xB7 \u2300{n}\xD7{n}":"Blind ({}) \xB7 \u2300{n}\xD7{n}","{n}\uB2E8\uACC4 \xB7 {}":"Step {n} \xB7 {}","\uC9C4\uD589 \uC911":"Working","{n}\uCD08":"{n}s","(\uD310\uB3C5\uAE30\uAC00 \uBD84\uB958\uD55C \uC720\uD615)":"(type from the reading)","{n}\uB2E8\uACC4 \uC2E4\uD328: {}":"Step {n} failed: {}","\uB3C4\uBA74\uC744 \uC62C\uB9AC\uBA74":"Upload a drawing and","\uC0AC\uC591\uC73C\uB85C \uC62E\uAE41\uB2C8\uB2E4. 3D, \uAC80\uC99D, \uB0B4\uB824\uBC1B\uAE30\uB294 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uBC14\uB85C \uC2E4\uD589\uB429\uB2C8\uB2E4.":"into a spec. 3D, checking and download run in this browser.",\uC0D8\uD50C\uC740:"Samples show","\uB97C \uBCF4\uC5EC \uC8FC\uACE0, \uC62C\uB9B0 \uB3C4\uBA74\uC740 \uC774 \uBE0C\uB77C\uC6B0\uC800\uAC00":", and uploads are measured in this browser","\uC0AC\uC591\uC744 \uB9CC\uB4ED\uB2C8\uB2E4. \uCE58\uC218 \uBB38\uC790\uAE4C\uC9C0 \uC77D\uB294 AI \uD310\uB3C5\uC740 \uC11C\uBC84 \uBAA8\uB4DC\uC5D0\uC11C \uB3D9\uC791\uD569\uB2C8\uB2E4.":"to build a spec. AI reading of the dimension text runs in server mode.","\uBD80\uD488 \uD615\uC0C1\uC740 \uB3C4\uBA74 \uADF8\uB300\uB85C, \uC0C1\uB300 \uBD80\uD488\uC740 \uADDC\uACA9\uD45C \uADFC\uC0AC\uC785\uB2C8\uB2E4. \uD68C\uC804\uC774 \uBCF4\uC774\uB3C4\uB85D":"The part matches the drawing; mating parts are standard-table approximations. A","\uC744 \uBD99\uC600\uACE0 \uB0B4\uB824\uBC1B\uB294 \uD30C\uC77C\uC5D0\uB294 \uB4E4\uC5B4\uAC00\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.":"makes the rotation visible and is not included in downloads.","\uC5B4\uB5A4 \uB3C4\uBA74\uC744 \uC62C\uB9AC\uB294\uC9C0\uB294":"What to upload is explained in the","\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.":".","\uC870\uB9BD \xB7 \uC2DC\uBBAC\uB808\uC774\uC158":"Assembly \xB7 simulation","\uB3C4\uBA74\uC5D0\uC11C \uACB0\uD569\uBD80 \uCC3E\uAE30 (\uBA48\uCDA4\uB9C1, \uD0A4, \uB098\uC0AC, \uACF5\uCC28)":"Finding interfaces (rings, keys, threads, tolerances)","\uC0C1\uB300 \uBD80\uD488 \uB9CC\uB4E4\uAE30 (\uADDC\uACA9\uD45C \uADFC\uC0AC)":"Building mating parts (standard-table approximations)","\uBD84\uD574 \uC21C\uC11C\uC640 \uC870\uB9BD \uC810\uAC80":"Disassembly order and assembly checks","STEP\xB7\uBA74":"STEP mesh","\uC0AC\uC591\uC5D0 \uBC18\uC601\uB418\uC9C0 \uC54A\uC740 \uCE58\uC218: {}":"Dimensions not in the spec: {}","x {n}\u2013{n} mm \xB7 \uC790\uC804(X\uCD95)":"x {n}\u2013{n} mm \xB7 spin (X axis)","x {n}\u2013{n} mm \xB7 \uCD95\uBC29\uD5A5 \uC870\uB9BD":"x {n}\u2013{n} mm \xB7 axial assembly","x {n}\u2013{n} mm \xB7 \uBC18\uACBD \uBC29\uD5A5 \uC870\uB9BD":"x {n}\u2013{n} mm \xB7 radial assembly","x {n}\u2013{n} mm \xB7 \uB098\uC0AC \uC774\uC1A1 {n}mm/\uD68C\uC804":"x {n}\u2013{n} mm \xB7 screw feed {n} mm/turn","x {n} mm \xB7 \uC790\uC804(X\uCD95)":"x {n} mm \xB7 spin (X axis)","\uC591 \uB05D \uC13C\uD130\uAD6C\uBA4D(DIN 332). \uC13C\uD130 \uC0AC\uC774\uC5D0\uC11C \uC120\uC0AD\xB7\uC5F0\uC0AD\uB418\uB294 \uD68C\uC804 \uBD80\uD488":"Centre holes at both ends (DIN 332). Turned and ground between centres","\uC13C\uD130\uAD6C\uBA4D 1\uAC1C. \uC120\uC0AD \uAE30\uC900(\uD68C\uC804 \uAC00\uACF5)":"One centre hole. Turning datum","\uBCA0\uC5B4\uB9C1 \uC790\uB9AC {n}\uACF3({}). \uD68C\uC804 \uC9C0\uC9C0":"{n} bearing seat(s) ({}). Rotational support","\uD0A4\uD648. \uD1A0\uD06C \uC804\uB2EC(\uD68C\uC804)":"Keyway. Transmits torque","\uC18D\uC774 \uBE48 \uBD80\uC2DC\xB7\uC2AC\uB9AC\uBE0C. \uBD80\uD488 \uC790\uCCB4\uBCF4\uB2E4 \uC548\uC5D0 \uB4E0 \uC0C1\uB300 \uCD95\uC774 \uC774 \uCD95\uC120\uC5D0\uC11C \uD68C\uC804\uD55C\uB2E4":"Hollow bushing or sleeve. The shaft inside turns on this axis, not the part itself","\uD68C\uC804\uCCB4 \uD615\uC0C1 \uC790\uCCB4(\uCD95 \uB300\uCE6D). \uC790\uC804\uCD95\uC740 \uCD95\uC120\uACFC \uC77C\uCE58":"The shape itself is axisymmetric, so the spin axis is the part axis","{}\uC740(\uB294) \uC2A4\uC2A4\uB85C \uB3CC\uC9C0 \uC54A\uB294 \uBD80\uD488\uC785\uB2C8\uB2E4. \uCD95\uC120\uB9CC \uCC38\uACE0":"A {} does not turn on its own. The axis is shown for reference only","\uC138\uADF8\uBA3C\uD2B8 \u2300{n}. \uAD6C\uB984 \uBCA0\uC5B4\uB9C1 \uB0B4\uB95C \uB07C\uC6CC\uB9DE\uCDA4":"Segment \u2300{n}. Rolling bearing inner-race fit","\uC138\uADF8\uBA3C\uD2B8 \u2300{n} {}. \uAD6C\uB984 \uBCA0\uC5B4\uB9C1 \uB0B4\uB95C \uB07C\uC6CC\uB9DE\uCDA4":"Segment \u2300{n} {}. Rolling bearing inner-race fit","d={n} \uACC4\uC5F4(6000/6200) \uADFC\uC0AC: \uC678\uACBD \u2300{n} \uD3ED {n}":"d={n} series (6000/6200) approximation: OD \u2300{n}, width {n}","\uD45C\uC900 \uACC4\uC5F4\uC5D0 \uC5C6\uB294 \uCD95\uACBD. \uC678\uACBD\xB7\uD3ED\uC740 \uBE44\uB840 \uADFC\uC0AC":"Not a standard bore size; OD and width are scaled approximations","\uC678\uACBD \u2300{n} {}. \uD558\uC6B0\uC9D5 \uAD6C\uBA4D(H7)\uC5D0 \uC555\uC785\uB418\uB294 \uB07C\uC6CC\uB9DE\uCDA4":"OD \u2300{n} {}. Press fit into an H7 housing bore","\uC911\uAC04~\uC5B5\uC9C0 \uB07C\uC6C0: \uC555\uC785 \uD6C4 \uD68C\uC804\uD558\uC9C0 \uC54A\uB294\uB2E4(\uC0C1\uB300 \uCD95\uC774 \uC548\uC5D0\uC11C \uB3C8\uB2E4)":"Transition to interference fit: it does not turn once pressed in","\uD5D0\uAC70\uC6B4 \uB07C\uC6C0: \uC190\uC73C\uB85C \uBC00\uC5B4 \uB123\uC744 \uC218 \uC788\uB2E4":"Clearance fit: it can be pushed in by hand","\uD648 \u2300{n}\xD7{n}. \uCD95\uC6A9 \uBA48\uCDA4\uB9C1(\uC2A4\uB0C5\uB9C1) \uC790\uB9AC":"Groove \u2300{n}\xD7{n}. Seat for an external retaining ring","\uD648 \u2300{n}\xD7{n} ({}). \uCD95\uC6A9 \uBA48\uCDA4\uB9C1(\uC2A4\uB0C5\uB9C1) \uC790\uB9AC":"Groove \u2300{n}\xD7{n} ({}). Seat for an external retaining ring","\uCD95\uACBD \u2300{n} \uD45C\uC900 \uD648: \u2300{n}\xD7{n}":"For a \u2300{n} shaft the standard groove is \u2300{n}\xD7{n}","\uCD95\uACBD \u2300{n} \uD45C\uC900 \uD648: \u2300{n}\xD7{n} (\uD45C \uBC16\xB7\uADFC\uC0AC)":"For a \u2300{n} shaft the standard groove is \u2300{n}\xD7{n} (outside the table)","\uB9C1\uC744 \uBC8C\uB824 \uBC18\uACBD \uBC29\uD5A5\uC73C\uB85C \uB07C\uC6B0\uACE0, \uCD95\uBC29\uD5A5 \uC704\uCE58\uB97C \uACE0\uC815\uD55C\uB2E4":"The ring spreads on radially and fixes the axial position","\uD0A4\uD648 {n}\xD7{n} L{n}. \uD3C9\uD589\uD0A4\uB85C \uD1A0\uD06C \uC804\uB2EC":"Keyway {n}\xD7{n} L{n}. Parallel key transmits torque","\uD0A4\uD648 {n}\xD7{n} L{n} ({}). \uD3C9\uD589\uD0A4\uB85C \uD1A0\uD06C \uC804\uB2EC":"Keyway {n}\xD7{n} L{n} ({}). Parallel key transmits torque","DIN 6885: \uD0A4 {n}\xD7{n}, \uCD95 \uD648 \uAE4A\uC774 t1={n}":"DIN 6885: key {n}\xD7{n}, shaft groove depth t1={n}","\uD45C \uBC16 \uCD95\uACBD. \uD0A4 \uB192\uC774\uB294 \uD3ED\uC5D0\uC11C \uADFC\uC0AC":"Shaft size outside the table; key height approximated from the width","\uD5C8\uBE0C(\uAE30\uC5B4\xB7\uD480\uB9AC\xB7\uCEE4\uD50C\uB9C1)\uAC00 \uCD95\uBC29\uD5A5\uC73C\uB85C \uB07C\uC6CC\uC9C0\uACE0 \uD0A4\uAC00 \uD68C\uC804\uC744 \uAD6C\uC18D\uD55C\uB2E4":"The hub (gear, pulley, coupling) slides on axially and the key locks rotation","\uB098\uC0AC {}. \uC0C1\uB300 \uC554\uB098\uC0AC(\uB108\uD2B8\xB7\uD0ED \uAD6C\uBA4D)\uC640 \uCCB4\uACB0":"Thread {}. Mates with a nut or tapped hole","ISO 4032 \uB108\uD2B8 \uADFC\uC0AC: \uB300\uBCC0 {n}, \uB192\uC774 {n}":"ISO 4032 nut approximation: {n} across flats, {n} high","1\uD68C\uC804\uB2F9 {n}mm \uC804\uC9C4(\uC624\uB978\uB098\uC0AC)":"Advances {n} mm per turn (right-hand)","\u2300{n} \uAD00\uD1B5 \uD6A1\uAD6C\uBA4D (x={n}). \uBD84\uD560\uD540\xB7\uC2A4\uD504\uB9C1\uD540\xB7\uD3C9\uD589\uD540 \uC790\uB9AC":"\u2300{n} through cross hole at x={n}. Seat for a split, spring or parallel pin","\u2300{n} \uAE4A\uC774 {n} \uD6A1\uAD6C\uBA4D (x={n}). \uBD84\uD560\uD540\xB7\uC2A4\uD504\uB9C1\uD540\xB7\uD3C9\uD589\uD540 \uC790\uB9AC":"\u2300{n} cross hole {n} deep at x={n}. Seat for a split, spring or parallel pin","\uAD00\uD1B5\uD540: \uBC18\uACBD \uBC29\uD5A5\uC73C\uB85C \uB123\uACE0 \uBC18\uB300\uD3B8\uC73C\uB85C \uBE60\uC9C4\uB2E4":"Through pin: goes in radially and out the other side","\uB9C9\uD78C \uAD6C\uBA4D: \uC138\uD2B8 \uC2A4\uD06C\uB8E8\xB7\uC704\uCE58 \uACB0\uC815 \uD540":"Blind hole: set screw or locating pin","\uB05D\uBA74 \uC721\uAC01 \uC18C\uCF13 S{n} \uAE4A\uC774 {n}. \uC721\uAC01 \uB80C\uCE58\uB85C \uC870\uC778\uB2E4":"Hex socket S{n}, {n} deep in the end face. Tightened with a hex key","\uB80C\uCE58\uB97C \uCD95\uBC29\uD5A5\uC73C\uB85C \uB123\uACE0 \uB3CC\uB9AC\uBA74 \uB098\uC0AC\uBD80\uAC00 \uC0C1\uB300 \uC554\uB098\uC0AC\uC5D0 \uCCB4\uACB0\uB41C\uB2E4":"Insert the key axially and turn; the thread screws into the mating female thread","\uC721\uAC01 \uB300\uBCC0 {n}. \uC2A4\uD328\uB108\uB85C \uC7A1\uC544 \uB3CC\uB9AC\uB294 \uBA74":"Hex {n} across flats. Gripped and turned with a spanner","\uC870\uB9BD \uC2DC \uD68C\uC804\uC744 \uB9C9\uAC70\uB098 \uC870\uC774\uB294 \uB370 \uC4F4\uB2E4":"Used to hold against rotation or to tighten during assembly","\uD3C9\uBA74(D\uCEF7) \uAE4A\uC774 {n}. \uC138\uD2B8 \uC2A4\uD06C\uB8E8\uAC00 \uB20C\uB7EC \uD68C\uC804\uC744 \uAD6C\uC18D\uD558\uAC70\uB098 \uC2A4\uD328\uB108 \uC790\uB9AC":"Flat (D-cut) {n} deep. A set screw presses on it, or it is a spanner flat","\uD3C9\uBA74(D\uCEF7) \uAE4A\uC774 {n} \xD7{n}. \uC138\uD2B8 \uC2A4\uD06C\uB8E8\uAC00 \uB20C\uB7EC \uD68C\uC804\uC744 \uAD6C\uC18D\uD558\uAC70\uB098 \uC2A4\uD328\uB108 \uC790\uB9AC":"Flats (D-cut) {n} deep \xD7{n}. A set screw presses on them, or they are spanner flats","\uBCF4\uC5B4 \u2300{n} \uAD00\uD1B5. \uC0C1\uB300 \uCD95\uC774 \uB4E4\uC5B4\uAC00\uB294 \uB07C\uC6CC\uB9DE\uCDA4":"Bore \u2300{n} through. Fit for the mating shaft","\uBCF4\uC5B4 \u2300{n} \uB9C9\uD798. \uC0C1\uB300 \uCD95\uC774 \uB4E4\uC5B4\uAC00\uB294 \uB07C\uC6CC\uB9DE\uCDA4":"Blind bore \u2300{n}. Fit for the mating shaft","\uBCF4\uC5B4 \u2300{n} {} \uAD00\uD1B5. \uC0C1\uB300 \uCD95\uC774 \uB4E4\uC5B4\uAC00\uB294 \uB07C\uC6CC\uB9DE\uCDA4":"Bore \u2300{n} {} through. Fit for the mating shaft","{} \uD5D0\uAC70\uC6B4/\uC911\uAC04 \uB07C\uC6CC\uB9DE\uCDA4. \uCD95\uBC29\uD5A5\uC73C\uB85C \uBC00\uC5B4 \uB123\uACE0 \uBE84 \uC218 \uC788\uB2E4":"{} clearance or transition fit. It slides in and out axially","\uACF5\uCC28 \uD45C\uAE30 \uC5C6\uC74C. \uB07C\uC6CC\uB9DE\uCDA4 \uB4F1\uAE09 \uBBF8\uC0C1":"No tolerance given, so the fit class is unknown","\uD14C\uC774\uD37C \u2300{n}\u2192\u2300{n} (\uAE30\uC6B8\uAE30 1:{n}). \uD14C\uC774\uD37C \uD5C8\uBE0C \uC555\uC785/\uC5B5\uC9C0 \uB07C\uC6C0":"Taper \u2300{n}\u2192\u2300{n} (1:{n}). Press fit for a tapered hub","\uC791\uC740 \uCABD\uC5D0\uC11C \uB07C\uC6CC \uCD95\uBC29\uD5A5\uC73C\uB85C \uC870\uC774\uBA74 \uB9C8\uCC30\uB85C \uD1A0\uD06C\uB97C \uC804\uB2EC\uD55C\uB2E4":"Pushed on from the small end and clamped axially, it transmits torque by friction","\u2300{n} \uBAB8\uD1B5. \uC694\uD06C(\uD074\uB808\uBE44\uC2A4) \uB450 \uADC0\uC758 \uAD6C\uBA4D\uC5D0 \uB07C\uC6CC\uC9C4\uB2E4":"\u2300{n} body. Fits through the holes in both ears of the yoke (clevis)","\u2300{n} {} \uBAB8\uD1B5. \uC694\uD06C(\uD074\uB808\uBE44\uC2A4) \uB450 \uADC0\uC758 \uAD6C\uBA4D\uC5D0 \uB07C\uC6CC\uC9C4\uB2E4":"\u2300{n} {} body. Fits through the holes in both ears of the yoke (clevis)","\uD540\uC740 \uCD95\uBC29\uD5A5\uC73C\uB85C \uB123\uACE0, \uBD84\uD560\uD540\xB7\uBA48\uCDA4\uB9C1\uC774 \uBE60\uC9D0\uC744 \uB9C9\uB294\uB2E4":"The pin goes in axially; a split pin or ring keeps it from backing out","\uB3C4\uBA74\uC5D0\uC11C \uC0C1\uB300 \uBD80\uD488\uACFC \uACB0\uD569\uD558\uB294 \uD45C\uAE30(\uBA48\uCDA4\uB9C1 \uD648\xB7\uD0A4\uD648\xB7\uB098\uC0AC\xB7\uBCF4\uC5B4\xB7\uD6A1\uAD6C\uBA4D)\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uB2E8\uD488 \uD68C\uC804\uB9CC \uBCF4\uC5EC \uC90D\uB2C8\uB2E4.":"No mating features (ring groove, keyway, thread, bore, cross hole) were found, so only the part's rotation is shown.",\uBD84\uD560\uD540:"Split pin",\uB108\uD2B8:"Nut","\uBCA0\uC5B4\uB9C1 \uC790\uB9AC \uAE38\uC774":"Bearing seat length","{n} / \uD3ED {n}":"{n} / width {n}","\uC790\uB9AC \uAE38\uC774\uAC00 \uBCA0\uC5B4\uB9C1 \uD3ED\uBCF4\uB2E4 \uC9E7\uC73C\uBA74 \uB0B4\uB95C\uC774 \uB2E8\uCC28\uC5D0 \uB2FF\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4(\uADFC\uC0AC \uACC4\uC5F4).":"If the seat is shorter than the bearing width, the inner race won't reach the shoulder.","\uBA48\uCDA4\uB9C1 \uBB3C\uB9BC \uAE4A\uC774":"Ring engagement depth","\uD648 \uAE4A\uC774 = (\uCD95 \u2300{n} \u2212 \uD648 \u2300{n})/2. {n}mm \uBBF8\uB9CC\uC774\uBA74 \uB9C1\uC774 \uBE60\uC9D1\uB2C8\uB2E4.":"Groove depth = (shaft \u2300{n} \u2212 groove \u2300{n})/2. Below {n} mm the ring can pop out.","\uD0A4 \uB3CC\uCD9C(\uD5C8\uBE0C \uCABD)":"Key protrusion (hub side)","\uD0A4 \uB192\uC774 {n} \u2212 \uCD95 \uD648 \uAE4A\uC774 {n}. \uD5C8\uBE0C \uD648\uC774 \uC774\uB9CC\uD07C \uBB3C\uB9BD\uB2C8\uB2E4.":"Key height {n} \u2212 shaft groove depth {n}. The hub slot engages by this much.","\uB108\uD2B8 \uCCB4\uACB0 \uD68C\uC804\uC218":"Nut turns to tighten","{n} \uD68C\uC804":"{n} turns","\uB098\uC0AC \uAE38\uC774 {n} \xF7 \uD53C\uCE58 {n}. \uB108\uD2B8 \uB192\uC774 {n}mm \uBCF4\uB2E4 \uC9E7\uC73C\uBA74 \uC644\uC804 \uCCB4\uACB0\uC774 \uC548 \uB429\uB2C8\uB2E4.":"Thread length {n} \xF7 pitch {n}. Shorter than the {n} mm nut height means it can't fully engage.","\uD540 \uC5EC\uC720":"Pin clearance","\uAD00\uD1B5\uD540. \uBC18\uB300\uD3B8\uC73C\uB85C \uBE60\uC9D1\uB2C8\uB2E4.":"Through pin. It exits the other side.","\uB9C9\uD78C \uAD6C\uBA4D \uAE4A\uC774 {n}":"Blind hole {n} deep","\uC678\uD615 \uD310\uB3C5":"Outline reading","\uBBF8\uB9AC \uD310\uB3C5\uD55C \uACB0\uACFC":"Pre-read result","AI \uD310\uB3C5 \xB7 \uC815\uBC00":"AI reading \xB7 careful","AI \uD310\uB3C5 \xB7 \uC790\uB3D9 \uC218\uC815":"AI reading \xB7 self-corrected","\uBBF8\uB9AC \uB9CC\uB4E0 \uD574\uC11D (\uB3C4\uBA74 \uBB38\uC790 \uC778\uC2DD + \uD310\uB3C5 \uC0AC\uC591 + \uC774\uBBF8\uC9C0) \xB7 \uC2E0\uB8B0\uB3C4 {n}%":"Pre-built analysis (text recognition, spec, image) \xB7 confidence {n}%","\uC9C0\uAE08 \uD574\uC11D (\uB3C4\uBA74 \uBB38\uC790 {n}\uAC1C + \uC0AC\uC591 + \uC774\uBBF8\uC9C0, {n}\uCD08) \xB7 \uC2E0\uB8B0\uB3C4 {n}%":"Analysed now ({n} text tokens, spec, image, {n}s) \xB7 confidence {n}%","\uBA48\uCDA4\uB9C1\uC744 \uBC8C\uB824 \uBE80\uB2E4 (x={n})":"Spread and remove the retaining ring (x={n})","\uB108\uD2B8\uB97C \uD47C\uB2E4 ({})":"Unscrew the nut ({})","\uD5C8\uBE0C\uB97C \uCD95\uBC29\uD5A5\uC73C\uB85C \uBE80 \uB4A4 \uD0A4\uB97C \uB4E4\uC5B4\uB0B8\uB2E4 (x={n})":"Slide the hub off axially, then lift out the key (x={n})","\uBCA0\uC5B4\uB9C1\uC744 \uCD95\uBC29\uD5A5\uC73C\uB85C \uBF51\uB294\uB2E4 (x={n})":"Draw the bearing off axially (x={n})","\uD558\uC6B0\uC9D5\uC5D0\uC11C \uBC00\uC5B4 \uBE80\uB2E4":"Push it out of the housing","\uC0C1\uB300 \uCD95\uC744 \uBE80\uB2E4":"Withdraw the mating shaft","\uACF5\uAD6C\uB97C \uBE80\uB2E4":"Remove the tool","\uC694\uD06C\uC5D0\uC11C \uD540\uC744 \uBE80\uB2E4":"Withdraw the pin from the yoke","\uBA48\uCDA4\uB9C1\uC744 \uBC8C\uB824 \uBC18\uACBD \uBC29\uD5A5\uC73C\uB85C \uBE7C\uB0B8\uB2E4 (x={n})":"Spread the retaining ring and lift it off radially (x={n})","\uD540\uC744 \uBC18\uACBD \uBC29\uD5A5\uC73C\uB85C \uBF51\uB294\uB2E4 (x={n})":"Pull the pin out radially (x={n})","\uB108\uD2B8\uB97C \uD480\uC5B4 \uC67C\uCABD \uB05D\uC73C\uB85C \uBE7C\uB0B8\uB2E4 ({}, 1\uD68C\uC804 {n}mm)":"Unscrew the nut off the left end ({}, {n} mm per turn)","\uB108\uD2B8\uB97C \uD480\uC5B4 \uC624\uB978\uCABD \uB05D\uC73C\uB85C \uBE7C\uB0B8\uB2E4 ({}, 1\uD68C\uC804 {n}mm)":"Unscrew the nut off the right end ({}, {n} mm per turn)","\uC721\uAC01 \uB80C\uCE58\uB97C \uC67C\uCABD \uB05D\uBA74\uC5D0\uC11C \uBE80\uB2E4":"Withdraw the hex key from the left end face","\uC721\uAC01 \uB80C\uCE58\uB97C \uC624\uB978\uCABD \uB05D\uBA74\uC5D0\uC11C \uBE80\uB2E4":"Withdraw the hex key from the right end face","\uC2A4\uD328\uB108\uB97C \uB193\uB294\uB2E4 (\uB300\uBCC0 {n})":"Release the spanner ({n} across flats)","\uBCA0\uC5B4\uB9C1\uC744 \uC67C\uCABD \uB05D \uBC29\uD5A5\uC73C\uB85C \uBF51\uB294\uB2E4 (\uB0B4\uACBD \u2300{n})":"Draw the bearing off towards the left end (bore \u2300{n})","\uBCA0\uC5B4\uB9C1\uC744 \uC624\uB978\uCABD \uB05D \uBC29\uD5A5\uC73C\uB85C \uBF51\uB294\uB2E4 (\uB0B4\uACBD \u2300{n})":"Draw the bearing off towards the right end (bore \u2300{n})","\uD5C8\uBE0C\uB97C \uCD95\uBC29\uD5A5\uC73C\uB85C \uBE7C\uACE0 \uD0A4\uB97C \uBC18\uACBD \uBC29\uD5A5\uC73C\uB85C \uB4E4\uC5B4\uB0B8\uB2E4":"Slide the hub off axially, then lift the key out radially","\uD14C\uC774\uD37C \uD5C8\uBE0C\uB97C \uD070 \uCABD\uC73C\uB85C \uBC00\uC5B4 \uBE80\uB2E4":"Push the tapered hub off towards the large end","\uC0C1\uB300 \uCD95\uC744 \uBCF4\uC5B4\uC5D0\uC11C \uBE80\uB2E4 (\u2300{n})":"Withdraw the mating shaft from the bore (\u2300{n})","\uC694\uD06C(\uD074\uB808\uBE44\uC2A4)\uC5D0\uC11C \uD540\uC744 \uBE80\uB2E4":"Withdraw the pin from the yoke (clevis)",\uBDF0:"View",\uAD6C\uBA4D:"Holes","\uC548\uCABD \uBAA8\uC11C\uB9AC":"inner edges",\uD06C\uAE30:"size",\uC640:"vs","\uC77D\uB294 \uC911\u2026":"Reading\u2026","\uC67C\uCABD \uBAA9\uB85D\uC774\uB098 \uB3C4\uBA74 \uC704 \uC0C1\uC790\uC5D0\uC11C \uBDF0\uB97C \uACE0\uB978 \uB4A4 \uBA74\uC744 \uB204\uB974\uC138\uC694.":"Pick a view from the list or the boxes on the drawing, then click a face.","\uD68C\uC804\uCCB4 \uC810\uC218":"Turned score","\uB3C4\uBA74\uC5D0\uC11C 3D":"Drawing to 3D","\uD68C\uC804\uCCB4 \uB3C4\uBA74\uC5D0\uC11C 3D CAD":"Turned drawing to 3D CAD","Part 2 \xB7 \uB2E4\uC2DC\uC810 \uB3C4\uBA74\uC5D0\uC11C \uBD80\uD488 \uD558\uB098":"Part 2 \xB7 one part from several views","2\uB2E8\uACC4 \xB7 \uD310\uB3C5":"Step 2 \xB7 Reading","3\uB2E8\uACC4 \xB7 3D CAD":"Step 3 \xB7 3D CAD","\uD310\uB3C5 \uACB0\uACFC":"As read","\uC815\uB2F5 \uC0AC\uC591":"Reference","\uBCF5\uC6D0 \uACB0\uACFC":"Rebuilt","\uB9CC\uB4E4\uC9C0 \uBABB\uD558\uB294 \uBD80\uB958":"Cannot be built","\uB2E4\uC2DC\uC810 \uB3C4\uBA74 \uB77C\uC774\uBE0C\uB7EC\uB9AC":"Multi-view drawing library","\uC67C\uCABD\uC774 \uC62C\uB9AC\uB294 \uB3C4\uBA74, \uC624\uB978\uCABD\uC774 \uADF8 \uB3C4\uBA74\uC5D0\uC11C \uB098\uC628 3D \uC785\uB2C8\uB2E4. \uCE74\uB4DC\uB97C \uB204\uB974\uBA74 \uC5F4\uB9BD\uB2C8\uB2E4.":"The drawing you would upload is on the left, the 3D that came out of it on the right. Click a card to open it.","\uC608\uC2DC \uB3C4\uBA74\uACFC \uACB0\uACFC":"Example drawings and results","\uD0C0\uACF5 \uD50C\uB808\uC774\uD2B8":"Drilled plate","\u3137 \uCC44\uB110 \uBE0C\uB798\uD0B7":"Channel bracket","\uCD95 \uC9C0\uC9C0 \uBE14\uB85D":"Shaft support block","\uBC11\uD310\uACFC \uC138\uC6C0\uD310, \uAD00\uD1B5 \uAD6C\uBA4D \uB458":"Base and upright, two through holes","\uBA74\uACFC \uB450\uAED8 \uB450 \uBDF0\uBA74 \uCDA9\uBD84\uD569\uB2C8\uB2E4":"A face view and a thickness view are enough","\uC548\uCABD\uC774 \uD30C\uC778 \uB2E8\uBA74":"A recessed section","\uC815\uBA74\uC5D0\uC11C \uBCF8 \uBCF4\uC5B4\uB294 \uADFC\uC0AC\uC785\uB2C8\uB2E4":"The bore seen face on is approximated","\uBC1C\uACFC \uBCF4\uC5B4, \uBC14\uB2E5 \uAD6C\uBA4D \uB137":"Foot, bore and four holes in the base","\uC2A4\uC715\uC774 \uD544\uC694\uD574 \uB9CC\uB4E4\uC9C0 \uBABB\uD569\uB2C8\uB2E4":"Needs a sweep, so it cannot be built","\uD5C8\uBE0C \uD50C\uB79C\uC9C0":"Hub flange",\uD3C9\uD589\uD540:"Parallel dowel pin","\uD14C\uC774\uD37C \uD540":"Taper pin","\uC204\uB354 \uBCFC\uD2B8 M8":"Shoulder bolt M8","\uB110\uB9C1 \uC190\uC7A1\uC774 \uB098\uC0AC":"Knurled thumb screw","\uD53C\uC2A4\uD1A4 \uB85C\uB4DC":"Piston rod","\uBC38\uBE0C \uC2A4\uD480":"Valve spool","\uC138\uD2B8 \uC2A4\uD06C\uB8E8 \uCE7C\uB77C":"Set screw collar","\uC815\uD22C\uC0C1 {n}\uBDF0":"{n} ortho views","\uD68C\uC804\uCCB4 \uB3C4\uBA74 \uB77C\uC774\uBE0C\uB7EC\uB9AC":"Turned-part drawing library",\uB77C\uC774\uBE0C\uB7EC\uB9AC:"Library",\uC124\uC815:"Setup",\uACB0\uACFC:"Result",\uC785\uB825:"Input","\uB3C4\uBA74, \uC124\uBA85, \uC0AC\uC591\uC11C\uC5D0\uC11C 3D\uB97C \uB9CC\uB4ED\uB2C8\uB2E4":"3D from a drawing, a description, or a spec sheet","\uB124 \uAC08\uB798\uC785\uB2C8\uB2E4. \uD68C\uC804\uCCB4\uB294 \uB3C4\uBA74 \uD55C \uC7A5, \uADF8 \uBC16\uC758 \uBD80\uD488\uC740 \uC5EC\uB7EC \uBDF0, \uB3C4\uBA74\uC774 \uC5C6\uC73C\uBA74 \uC124\uBA85\uC774\uB098 \uC0AC\uC9C4, \uB4DC\uB860\uC740 \uC124\uACC4 \uC0AC\uC591\uC11C\uB85C.":"Four ways in. Turned parts from one drawing, other parts from several views, a description or photo when there is no drawing, and drones from a design spec sheet.","\uB4DC\uB860 \uC124\uACC4 \uC0AC\uC591\uC11C\uC5D0\uC11C CAD":"Drone CAD from a design spec","\uC124\uACC4 \uC0AC\uC591\uC11C \uD55C \uC7A5\uC5D0\uC11C \uB4DC\uB860 \uC804\uCCB4\uB97C \uB9CC\uB4E4\uACE0, \uD30C\uD2B8\uB97C \uBC14\uAFB8\uACE0 \uBD84\uD574\uD558\uACE0 \uBE44\uD589\uC744 \uC2DC\uBBAC\uB808\uC774\uC158\uD569\uB2C8\uB2E4.":"Builds a whole drone from one design spec sheet, then swaps parts, explodes it and simulates flight.","\uC0AC\uC591\uC11C \uC77D\uAE30\uC640 \uB4DC\uB860 \uBD84\uB958":"Reads the spec and classifies the drone","\uD30C\uD2B8 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC640 \uD3B8\uC9D1":"Part library and editing","\uBD84\uD574\uC640 6\uC790\uC720\uB3C4 \uBE44\uD589":"Exploded view and 6-DOF flight","\uC790\uC0B0 \uC800\uC7A5\uACFC \uAC80\uC0C9":"Asset storage and search","Part 4 \uC5F4\uAE30 \u203A":"Open Part 4 \u203A","Part 3 \uC5F4\uAE30 \u203A":"Open Part 3 \u203A","\uC0C8\uB85C \uB098\uC634":"New","\uD504\uB86C\uD504\uD2B8\uC640 \uC774\uBBF8\uC9C0\uC5D0\uC11C 3D":"3D from a prompt or an image","\uD55C \uC904 \uC124\uBA85\uC774\uB098 \uC0AC\uC9C4 \uD55C \uC7A5\uC5D0\uC11C \uBD80\uD488 \uD2B8\uB9AC\uB97C \uC138\uC6C1\uB2C8\uB2E4. \uB9CC\uB4E0 3D \uB294 \uD30C\uD2B8\uBCC4\uB85C \uBD84\uB9AC\uD574 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.":"Builds a part tree from one line of text or one photo. The result comes apart part by part.","\uAE00\uB85C \uC801\uAC70\uB098 \uC0AC\uC9C4\uC744 \uC62C\uB9AC\uAC70\uB098":"Type it or drop a photo","\uBD80\uD488\uC774 \uD2B8\uB9AC\uB85C \uB098\uB258\uC5B4 \uB098\uC635\uB2C8\uB2E4":"The result is a tree of parts","\uD30C\uD2B8 \uBD84\uB9AC\uC640 \uD558\uB098\uC529 \uBCF4\uAE30":"Separate parts and view them one by one","\uB3C4\uBA74\uC774 \uC5C6\uC744 \uB54C \uC4F0\uB294 \uAC08\uB798\uC785\uB2C8\uB2E4":"The path to take when there is no drawing","\uBD84\uC57C \uD2B9\uD654 \uC778\uC2DD \uBAA8\uB378\uB85C \uB9CC\uB4DC\uB294 CAD":"CAD from a domain-specialised recognition model","\uD55C \uBD84\uC57C\uC758 \uBD80\uD488 \uCCB4\uACC4\uB97C \uC775\uD78C \uC778\uC2DD \uBAA8\uB378\uC774 \uC124\uACC4 \uC0AC\uC591\uC11C\uB97C \uC77D\uC5B4 \uC81C\uD488 \uC804\uCCB4\uB97C \uB9CC\uB4ED\uB2C8\uB2E4. \uC9C0\uAE08\uC740 \uB4DC\uB860\uC774 \uC608\uC2DC\uC785\uB2C8\uB2E4.":"A recognition model trained on one field's part system reads a design spec and builds the whole product. Drones are the example for now.","\uBD84\uC57C\uBCC4 \uBD80\uD488 \uCCB4\uACC4\uC640 \uADDC\uACA9\uC744 \uC544\uB294 \uBAA8\uB378":"A model that knows the field's parts and standards","\uC0AC\uC591\uC11C\uC5D0\uC11C \uC81C\uD488 \uC804\uCCB4\uB97C \uC0DD\uC131":"Generates the whole product from the spec","\uD30C\uD2B8 \uAD50\uCCB4 \xB7 \uBD84\uD574 \xB7 \uAC70\uB3D9 \uC2DC\uBBAC\uB808\uC774\uC158":"Part swaps, exploded view, motion simulation","\uC608\uC2DC: \uB4DC\uB860 (\uBD84\uB958 \xB7 \uB77C\uC774\uBE0C\uB7EC\uB9AC \xB7 6\uC790\uC720\uB3C4 \uBE44\uD589)":"Example: drones (classification, library, 6-DOF flight)"};var Su="vringon.lang",lc=i=>/[가-힣]/.test(i),sc={ko:"\uD55C\uAD6D\uC5B4",en:"English"};function Q0(){let i=new URLSearchParams(location.search).get("lang");if(i&&sc[i])return i;try{let e=localStorage.getItem(Su);if(e&&sc[e])return e}catch{}return(navigator.language||"").toLowerCase().startsWith("ko")?"ko":"en"}var Vn=Q0(),Eo=new Map,Ao=[];function wu(i){Eo.clear(),Ao.length=0;for(let[e,t]of Object.entries(i)){if(!t)continue;if(!/\{n?\}/.test(e)){Eo.set(e,t);continue}let n=e.split(/(\{n\}|\{\})/),s="^",r=[];for(let a of n)a==="{n}"?(s+="(-?[\\d.,]+)",r.push("n")):a==="{}"?(s+="(.*?)",r.push("")):s+=a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");s+="$",Ao.push({re:new RegExp(s),en:t,holes:r})}}var rc={...Mu};wu(rc);function Tu(i){Object.assign(rc,i),wu(rc)}var Eu=new Set;typeof window<"u"&&(window.__i18nMissing=Eu);function Ve(i,e){let t=String(i);if(e)for(let[l,c]of Object.entries(e))t=t.replaceAll(`{${l}}`,c);if(Vn==="ko")return t;let n=Eo.get(t.trim());if(n!==void 0)return bu(t,n);for(let l of Ao){let c=l.re.exec(t.trim());if(!c)continue;let u=l.en,f=1;return u=u.replace(/\{n?\}/g,()=>c[f++]??""),bu(t,u)}let s=[],r=/^([\s\u00b7\-]+)([\s\S]*)$/.exec(t);r&&s.push([r[1],r[2],""]);let a=/^(\s*\d+\.\s+)([\s\S]*)$/.exec(t);a&&s.push([a[1],a[2],""]);let o=/^([\s\u00b7\-]*)\(([\s\S]*)\)(\s*)$/.exec(t);o&&s.push([o[1]+"(",o[2],")"+o[3]]);for(let[l,c,u]of s){let f=Eo.get(c.trim());if(f!==void 0)return l+f+u;for(let h of Ao){let p=h.re.exec(c.trim());if(!p)continue;let _=h.en,v=1;return _=_.replace(/\{n?\}/g,()=>p[v++]??""),l+_+u}}return lc(t)&&Eu.add(t.trim()),t}function bu(i,e){let t=/^\s*/.exec(i)[0],n=/\s*$/.exec(i)[0];return t+e+n}var Au=["title","placeholder","aria-label"],e_=new Set(["SCRIPT","STYLE","CODE","PRE"]),ic=new WeakMap;function ac(i){let e=i.parentElement;if(!e||e_.has(e.tagName)||e.closest("[data-i18n-skip]"))return;let t=ic.get(i)??i.nodeValue;if(!lc(t))return;ic.has(i)||ic.set(i,t);let n=Ve(t);i.nodeValue!==n&&(i.nodeValue=n)}function oc(i){if(!i.closest?.("[data-i18n-skip]"))for(let e of Au){if(!i.hasAttribute?.(e))continue;let t=`__i18n_${e}`,n=i.dataset[t]??i.getAttribute(e);if(!lc(n))continue;i.dataset[t]===void 0&&(i.dataset[t]=n);let s=Ve(n);i.getAttribute(e)!==s&&i.setAttribute(e,s)}}function cc(i=document.body){if(!i)return;if(i.nodeType===3)return ac(i);let e=document.createTreeWalker(i,NodeFilter.SHOW_TEXT),t=[];for(let n=e.nextNode();n;n=e.nextNode())t.push(n);t.forEach(ac),i.nodeType===1&&oc(i),i.querySelectorAll?.("[title],[placeholder],[aria-label]").forEach(oc)}var To=null;function Cu(){if(To)return;To=new MutationObserver(e=>{if(Vn!=="ko"){To.disconnect();for(let t of e)t.type==="characterData"?ac(t.target):t.type==="attributes"?oc(t.target):t.addedNodes.forEach(n=>{(n.nodeType===1||n.nodeType===3)&&cc(n)});i()}}),i();function i(){To.observe(document.body,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:Au})}}function t_(i,{reload:e=!1}={}){if(!(!sc[i]||i===Vn)){Vn=i;try{localStorage.setItem(Su,i)}catch{}document.documentElement.lang=i;try{let t=new URL(location.href);t.searchParams.get("lang")&&t.searchParams.get("lang")!==i&&(t.searchParams.set("lang",i),history.replaceState(null,"",t.toString()))}catch{}if(e||i==="ko"){let t=new URL(location.href);t.searchParams.has("lang")&&t.searchParams.set("lang",i),location.replace(t.toString());return}cc(document.body),Cu(),document.dispatchEvent(new CustomEvent("langchange",{detail:{lang:Vn}}))}}function n_(i=".ws-top, .nav"){let e=document.querySelector(i);if(!e)return;let t=document.createElement("div");t.className="seg lang-seg",t.setAttribute("data-i18n-skip",""),t.innerHTML='<button data-lang="ko">\uD55C\uAD6D\uC5B4</button><button data-lang="en">EN</button>';let n=e.querySelector(".sp");n&&n.nextSibling?e.insertBefore(t,n.nextSibling):e.appendChild(t);let s=()=>t.querySelectorAll("button").forEach(r=>r.classList.toggle("on",r.dataset.lang===Vn));t.onclick=r=>{let a=r.target.closest("button");a&&(t_(a.dataset.lang),s())},s()}function Ru({toggle:i=!0}={}){if(document.documentElement.lang=Vn,Vn!=="ko"&&document.title.includes("|")){let[e,...t]=document.title.split("|");document.title=e+"| "+Ve(t.join("|").trim())}i&&n_(),Vn!=="ko"&&(cc(document.body),Cu())}var Pu={"Part 3 \xB7 \uD504\uB86C\uD504\uD2B8\uC640 \uC774\uBBF8\uC9C0\uC5D0\uC11C 3D":"Part 3 \xB7 from a prompt or an image","\uC0C8 \uC791\uC5C5":"New","\uD55C \uC904\uB85C \uC124\uBA85\uD558\uAE30":"Describe it in one line","3D \uB9CC\uB4E4\uAE30":"Make the 3D","\uC0AC\uC9C4\uC73C\uB85C \uB9CC\uB4E4\uAE30":"From a photo","\uBB3C\uCCB4 \uC0AC\uC9C4 \uC62C\uB9AC\uAE30":"Drop a photo of the object","\uBB3C\uCCB4 \uD558\uB098\uAC00 \uC628\uC804\uD788 \uBCF4\uC774\uB294 \uC0AC\uC9C4 \uD55C \uC7A5":"One photo with the whole object in view","\uAC00\uB824\uC9C4 \uB4B7\uBA74\uC740 \uC55E\uBA74\uC5D0\uC11C \uC720\uCD94\uD569\uB2C8\uB2E4.":"Hidden backs are inferred from the front.",\uC608\uC2DC:"Examples","\uD55C \uC904\uB85C \uC124\uBA85\uD558\uAC70\uB098 \uC0AC\uC9C4\uC744 \uC62C\uB9AC\uBA74":"Describe it or drop a photo and","\uBD80\uD488 \uD2B8\uB9AC\uB97C \uC138\uC6CC 3D \uB85C \uB9CC\uB4ED\uB2C8\uB2E4":"it builds a part tree in 3D","\uD30C\uD2B8 \uBD84\uB9AC":"Separate parts",\uD569\uCE58\uAE30:"Put together",\uBD84\uB9AC:"Separation",\uD30C\uD2B8:"Parts",\uC774\uB984:"Name","\uD06C\uAE30(\uC5B4\uB9BC)":"Size (estimate)","\uBD80\uD488 \uD2B8\uB9AC":"Part tree","\uBAA8\uB450 \uBCF4\uAE30":"Show all","\uC0AC\uC591 \uBC1B\uAE30":"Get the spec","\uC0AC\uC591 JSON \uC744 \uB0B4\uB824\uBC1B\uC2B5\uB2C8\uB2E4":"Downloads the spec as JSON","\uC774 \uACB0\uACFC\uAC00 \uB2F4\uC9C0 \uC54A\uB294 \uAC83":"What this result leaves out","\uC608\uC2DC \uBCF4\uAE30":"Examples only","\uC9C1\uC811 \uB9CC\uB4E4\uAE30 \uAC00\uB2A5":"Live",\uC228\uAE30\uAE30:"Hide",\uBCF4\uC774\uAE30:"Show","\uC0AC\uC591 \uBD88\uB7EC\uC624\uAE30":"Loading the spec","\uBD80\uD488 \uD2B8\uB9AC \uC138\uC6B0\uAE30":"Building the part tree","\uC608\uC2DC \uB9CC\uB4E4\uAE30":"Building the example","\uBB34\uC5C7\uC778\uC9C0 \uC0B4\uD53C\uAE30":"Looking at what it is","\uBD80\uD488\uC73C\uB85C \uB098\uB204\uAE30":"Splitting it into parts",\uCD08:"s","\uBB34\uC5C7\uC744 \uB9CC\uB4E4\uC9C0 \uD55C \uC904\uB85C \uC801\uC5B4 \uC8FC\uC138\uC694":"Write one line describing what to make","\uC9C0\uAE08\uC740 \uC608\uC2DC\uB9CC \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC11C\uBC84 \uBAA8\uB4DC\uC5D0\uC11C \uC9C1\uC811 \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.":"Only the examples run here. Making your own needs server mode.","\uB9CC\uB4E4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4":"Could not make it","\uC0AC\uC591\uC744 \uC4F8 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4":"The spec cannot be used","\uC608\uC2DC\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4":"Could not load the examples","\uAC00\uB824\uC9C4 \uB4B7\uBA74\uC740 \uC55E\uBA74\uC5D0\uC11C \uC720\uCD94\uD55C \uAC83\uC785\uB2C8\uB2E4":"Hidden backs are inferred from the front","\uD45C\uBA74 \uBB34\uB2AC\uC640 \uB85C\uACE0\uB294 \uB123\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4":"Surface patterns and logos are not included","\uCE58\uC218\uB294 \uBE44\uC728\uC774\uBA70 \uC2E4\uC81C \uAC12\uC774 \uC544\uB2D9\uB2C8\uB2E4":"Dimensions are proportions, not measured values","\uC608: \uC811\uC774\uC2DD \uD314\uC774 \uB2EC\uB9B0 \uAE08\uC18D \uCC45\uC0C1 \uC2A4\uD0E0\uB4DC, \uC6D0\uD615 \uBC1B\uCE68":"e.g. a metal desk lamp with a folding arm and a round base","\uC811\uC774\uC2DD \uD314\uC774 \uB2EC\uB9B0 \uAE08\uC18D \uCC45\uC0C1 \uC2A4\uD0E0\uB4DC":"a metal desk lamp with a folding arm","\uC190\uC7A1\uC774\uAC00 \uB2EC\uB9B0 \uC138\uB77C\uBBF9 \uBA38\uADF8\uCEF5":"a ceramic mug with a handle","\uB2E4\uB9AC \uB2E4\uC12F \uAC1C \uBC14\uD034 \uC758\uC790":"an office chair with five legs","\uC811\uC774\uC2DD \uD314\uC774 \uB2EC\uB9B0 \uAE08\uC18D \uCC45\uC0C1 \uC2A4\uD0E0\uB4DC, \uC6D0\uD615 \uBC1B\uCE68, \uC6D0\uBFD4 \uAC13":"Metal desk lamp with a folding arm, round base and conical shade","\uC190\uC7A1\uC774\uAC00 \uB2EC\uB9B0 \uC6D0\uD1B5\uD615 \uC138\uB77C\uBBF9 \uBA38\uADF8\uCEF5":"Cylindrical ceramic mug with a handle","\uB2E4\uB9AC \uB2E4\uC12F \uAC1C \uBC14\uD034 \uB2EC\uB9B0 \uC0AC\uBB34\uC6A9 \uC758\uC790, \uB4F1\uBC1B\uC774\uC640 \uC88C\uD310":"Office chair on five castors, with a seat and a backrest","\uCC45\uC0C1 \uC2A4\uD0E0\uB4DC":"Desk lamp",\uBA38\uADF8\uCEF5:"Mug","\uC0AC\uBB34\uC6A9 \uC758\uC790":"Office chair",\uBC1B\uCE68:"Base",\uAE30\uB465:"Post",\uAD00\uC808:"Joint",\uD314:"Arm",\uAC13:"Shade",\uC804\uAD6C:"Bulb",\uCEF5:"Cup",\uC190\uC7A1\uC774:"Handle",\uC911\uC2EC\uCD95:"Hub","\uB2E4\uB9AC 1":"Leg 1","\uB2E4\uB9AC 2":"Leg 2","\uB2E4\uB9AC 3":"Leg 3","\uB2E4\uB9AC 4":"Leg 4","\uB2E4\uB9AC 5":"Leg 5",\uC88C\uD310:"Seat",\uB4F1\uBC1B\uC774:"Backrest","\uC0AC\uC9C4\uC73C\uB85C\uB3C4 \uB429\uB2C8\uB2E4":"A photo works too","\uB9CC\uB4E4 \uBB3C\uCCB4\uB97C \uD55C \uC904\uB85C \uC801\uC2B5\uB2C8\uB2E4. \uC544\uB798 \uC608\uC2DC\uB97C \uB20C\uB7EC \uCC44\uC6B8 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.":"Write what to make in one line, or click one of the examples below to fill it in.","\uBB3C\uCCB4 \uD558\uB098\uAC00 \uC628\uC804\uD788 \uBCF4\uC774\uB294 \uC0AC\uC9C4 \uD55C \uC7A5\uC744 \uC62C\uB9BD\uB2C8\uB2E4. \uAC00\uB824\uC9C4 \uB4B7\uBA74\uC740 \uC55E\uBA74\uC5D0\uC11C \uC720\uCD94\uD569\uB2C8\uB2E4.":"Drop one photo with the whole object in view. Hidden backs are inferred from the front.","\uC608\uC2DC\uB85C \uBA3C\uC800 \uBCF4\uAE30":"Try an example first","\uBBF8\uB9AC \uB9CC\uB4E4\uC5B4 \uB454 \uC608\uC2DC\uC785\uB2C8\uB2E4. \uC11C\uBC84 \uC5C6\uC774\uB3C4 \uB20C\uB7EC\uC11C \uBC14\uB85C \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.":"These are prepared in advance, so they open straight away with no server.","\uBD80\uD488\uC774 \uD2B8\uB9AC\uB85C \uB098\uB258\uC5B4 \uB098\uC635\uB2C8\uB2E4. \uBAA9\uB85D\uC5D0\uC11C \uACE0\uB974\uBA74 \uADF8 \uBD80\uD488\uB9CC \uB0A8\uACE0, \uBD84\uB9AC \uB9C9\uB300\uB85C \uBC8C\uB824 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.":"The result comes apart into a tree. Pick one from the list to isolate it, or use the slider to spread them out."};var i_="(max-width: 1023px)";function Iu({body:i="wsBody",leftKo:e="\uB3C4\uBA74",rightKo:t="\uACB0\uACFC"}={}){let n=document.getElementById(i);if(!n||document.querySelector(".pane-tabs"))return null;let s=window.matchMedia(i_),r=[{id:"left",ko:e},{id:"stage",ko:"3D"},{id:"right",ko:t}],a=document.createElement("nav");a.className="pane-tabs",a.setAttribute("data-i18n-skip",""),a.innerHTML=r.map((u,f)=>`<button data-pane="${u.id}"><span class="k">${f+1}</span>${Ve(u.ko)}</button>`).join(""),n.parentNode.appendChild(a);let o="left",l=u=>{o=u,n.classList.remove("only-left","only-stage","only-right"),s.matches&&n.classList.add(`only-${u}`);for(let f of a.children){let h=f.dataset.pane===u;f.classList.toggle("on",h),h&&f.classList.remove("ready")}setTimeout(()=>window.dispatchEvent(new Event("resize")),0)},c=(u,f=!0)=>{let h=a.querySelector(`[data-pane="${u}"]`);h&&u!==o&&h.classList.toggle("ready",f)};return a.onclick=u=>{let f=u.target.closest("button");f&&l(f.dataset.pane)},l("left"),s.addEventListener?.("change",()=>{s.matches?l(o):n.classList.remove("only-left","only-stage","only-right")}),{show:l,ready:c,narrow:()=>s.matches,get current(){return o}}}var s_=[{n:1,ko:"\uD68C\uC804\uCCB4",page:"revolve.html"},{n:2,ko:"\uB2E4\uC2DC\uC810",page:"assembly.html"},{n:3,ko:"\uC124\uBA85\xB7\uC0AC\uC9C4",page:"sculpt.html"},{n:4,ko:"\uB4DC\uB860",page:"app.html",root:!0}];function Du({current:i,base:e="./",rootBase:t="../",label:n="Part"}={}){let s=document.querySelector(".ws-top");if(!s||s.querySelector(".partnav"))return;let r=document.createElement("nav");r.className="partnav",r.setAttribute("aria-label","parts"),r.setAttribute("data-i18n-skip",""),r.innerHTML=s_.map(o=>{let l=o.root?t+o.page:e+o.page,c=o.n===i;return`<a class="pn${c?" on":""}" href="${l}" title="${n} ${o.n} \xB7 ${o.ko}" ${c?'aria-current="page"':""}><b>${o.n}</b><span>${o.ko}</span></a>`}).join("")+`<a class="pn home" href="${e}index.html" title="\uC804\uCCB4 \uBCF4\uAE30">\u2302</a>`;let a=s.querySelector(".sp");a?s.insertBefore(r,a):s.appendChild(r)}Tu(Pu);var hc="dev",Ee=i=>document.getElementById(i),uc=i=>new Promise(e=>setTimeout(e,i)),dc=null;function us(i,e=!1){let t=document.createElement("div");t.className=`toast${e?" ok":""}`,t.textContent=i,Ee("toasts").appendChild(t),setTimeout(()=>t.remove(),4200)}var r_=["\uC811\uC774\uC2DD \uD314\uC774 \uB2EC\uB9B0 \uAE08\uC18D \uCC45\uC0C1 \uC2A4\uD0E0\uB4DC","\uC190\uC7A1\uC774\uAC00 \uB2EC\uB9B0 \uC138\uB77C\uBBF9 \uBA38\uADF8\uCEF5","\uB2E4\uB9AC \uB2E4\uC12F \uAC1C \uBC14\uD034 \uC758\uC790"],ke={spec:null,built:null,parts:[],selected:null,hidden:new Set,explode:0,live:!1},Co=Ee("stage"),rn=new _o({antialias:!0});rn.setPixelRatio(Math.min(devicePixelRatio,2));rn.outputColorSpace=kt;rn.toneMapping=js;rn.toneMappingExposure=1.4;rn.shadowMap.enabled=!0;rn.shadowMap.type=Sa;Co.appendChild(rn.domElement);var ui=new Mi;ui.background=new Ie(789520);ui.environment=new os(rn).fromScene(new bo,.04).texture;var gn=new Pt(38,1,.5,12e3);gn.position.set(320,260,420);var pr=new Mo(gn,rn.domElement);pr.enableDamping=!0;pr.dampingFactor=.075;var an=new Qi(16777215,2.2);an.position.set(240,420,280);an.castShadow=!0;an.shadow.mapSize.set(2048,2048);an.shadow.camera.near=20;an.shadow.camera.far=2400;an.shadow.camera.left=an.shadow.camera.bottom=-600;an.shadow.camera.right=an.shadow.camera.top=600;an.shadow.bias=-.0012;an.shadow.normalBias=.7;ui.add(an,new Qi(13161215,.45).translateX(-320).translateY(180).translateZ(140),new Xs(12897501,3816776,1),new Zs(16777215,.22));var fc=new $s(2400,60,2763316,1710624);fc.material.transparent=!0;fc.material.opacity=.5;ui.add(fc);var Lu=new at(new Os(1400,64).rotateX(-Math.PI/2),new Gs({opacity:.38}));Lu.receiveShadow=!0;ui.add(Lu);var hi=new un;ui.add(hi);function Nu(){let i=Co.clientWidth,e=Co.clientHeight;!i||!e||(rn.setSize(i,e),gn.aspect=i/e,gn.updateProjectionMatrix())}new ResizeObserver(Nu).observe(Co);Nu();rn.setAnimationLoop(()=>{pr.update(),rn.render(ui,gn)});function Uu(){if(!hi.children.length)return;let i=new Ct().setFromObject(hi),e=i.getCenter(new I),t=Math.max(10,i.getSize(new I).length()/2);pr.target.copy(e);let n=lr.degToRad(gn.fov/2),s=Math.atan(Math.tan(n)*Math.max(.6,gn.aspect));gn.position.copy(e).add(new I(.55,.42,.72).normalize().multiplyScalar(t/Math.sin(Math.min(n,s))*1.2)),gn.near=Math.max(.2,t/80),gn.far=t*90,gn.updateProjectionMatrix(),pr.update()}Ee("btnFit").onclick=Uu;function a_(){let i=new Ct().setFromObject(hi),e=i.getCenter(new I);ke.span=i.getSize(new I).length()*.3;for(let t of ke.parts){let n=t.object;n.userData.home=n.position.clone();let r=new Ct().setFromObject(n).getCenter(new I).sub(e);r.lengthSq()<1e-6&&r.set(0,1,0),n.userData.dir=r.normalize()}}function Po(i){ke.explode=i;for(let e of ke.parts){let t=e.object;if(!t.userData.home)continue;let n=e.parent?.45:1;t.position.copy(t.userData.home).addScaledVector(t.userData.dir,ke.span*i*n)}Ee("expRange").value=Math.round(i*100),Ee("expVal").textContent=`${Math.round(i*100)}%`,Ee("btnExplode").classList.toggle("on",i>0),Ee("btnExplode").textContent=i>0?Ve("\uD569\uCE58\uAE30"):Ve("\uD30C\uD2B8 \uBD84\uB9AC")}Ee("btnExplode").onclick=()=>Po(ke.explode>0?0:1);Ee("expRange").oninput=i=>Po(Number(i.target.value)/100);function o_(i){return`#${i.object.material.color.getHexString()}`}function Ro(){let i=ke.parts;Ee("partCount").textContent=`${i.length}`,Ee("mParts").textContent=`${i.length}`,Ee("parts").innerHTML=i.map(e=>{let t=e.parent?14:0,n=ke.hidden.has(e.id);return`<div class="prow${ke.selected===e.id?" on":""}${n?" dim":""}" data-id="${e.id}" style="margin-left:${t}px">
      <span class="sw" style="background:${o_(e)}"></span>
      <span class="nm">${e.name}</span>
      <span class="lv">${e.level}</span>
      <button class="eye" data-eye="${e.id}" title="${n?Ve("\uBCF4\uC774\uAE30"):Ve("\uC228\uAE30\uAE30")}">${n?"\u25FB":"\u25FC"}</button>
    </div>`}).join("")}Ee("parts").onclick=i=>{let e=i.target.closest("[data-eye]");if(e){let n=e.dataset.eye;ke.hidden.has(n)?ke.hidden.delete(n):ke.hidden.add(n);let s=ke.parts.find(r=>r.id===n);return s&&(s.object.visible=!ke.hidden.has(n)),Ro()}let t=i.target.closest(".prow");if(t){ke.selected=ke.selected===t.dataset.id?null:t.dataset.id;for(let n of ke.parts){let s=!ke.selected||n.id===ke.selected;n.object.material.opacity=s?1:.18,n.object.material.transparent=!s,n.object.material.needsUpdate=!0}Ro()}};Ee("btnShowAll").onclick=()=>{ke.hidden.clear(),ke.selected=null;for(let i of ke.parts)i.object.visible=!0,i.object.material.opacity=1,i.object.material.transparent=!1;Ro()};Ee("btnDownload").onclick=()=>{if(!ke.spec)return;let i=new Blob([JSON.stringify(ke.spec,null,1)],{type:"application/json"}),e=document.createElement("a");e.href=URL.createObjectURL(i),e.download=`${ke.spec.id||"sculpt"}.json`,e.click(),setTimeout(()=>URL.revokeObjectURL(e.href),1e3)};function Rn(i,e="",t="",n=[]){Ee("gen").classList.toggle("on",i),Ee("genTitle").textContent=e,Ee("genSub").textContent=t;let s=n.filter(r=>r.state==="done").length;Ee("genBar").style.width=`${n.length?s/n.length*100:0}%`,Ee("genSteps").innerHTML=n.map(r=>`<div class="gen-step ${r.state||""}"><i class="dot"></i>${r.text}</div>`).join(""),Ee("runSteps").innerHTML=n.map(r=>`<div class="gen-step ${r.state||""}"><i class="dot"></i>${r.text}</div>`).join("")}function Fu(){for(let i of hi.children.slice())hi.remove(i),i.traverse?.(e=>e.geometry?.dispose());ke.built=null,ke.parts=[],ke.selected=null,ke.hidden.clear(),ke.explode=0,Ee("partBlock").style.display="none",Ee("limitBlock").style.display="none",Ee("expDock").style.display="none",Ee("parts").innerHTML="";for(let i of["mName","mParts","mSize","mTris"])Ee(i).textContent="\u2014"}async function Ou(i,e){let t=So(i);if(!t.ok)return Rn(!1),us(`${Ve("\uC0AC\uC591\uC744 \uC4F8 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4")}: ${t.errors[0]}`);Fu(),ke.spec=i;let n=Ql(i);ke.built=n,ke.parts=n.parts,hi.add(n.root),Ee("stageEmpty").style.display="none",Ee("projName").textContent=e||i.name||i.id,Ee("mName").textContent=i.name||i.id;let s=n.stats.size;Ee("mSize").textContent=`${Math.round(s.x)} \xD7 ${Math.round(s.y)} \xD7 ${Math.round(s.z)} mm`,Ee("mTris").textContent=n.stats.triangles.toLocaleString(),Ee("partBlock").style.display="",Ee("limitBlock").style.display="",Ee("expDock").style.display="",Ee("limits").innerHTML=pu.map(r=>`<li>${Ve(r)}</li>`).join(""),Ro(),a_(),Po(0),Uu();for(let r of n.notes)us(r);dc?.show("stage")}async function Bu(i,e){let t=[{text:Ve("\uC0AC\uC591 \uBD88\uB7EC\uC624\uAE30"),state:"run"},{text:Ve("\uBD80\uD488 \uD2B8\uB9AC \uC138\uC6B0\uAE30")}];Rn(!0,Ve("\uC608\uC2DC \uB9CC\uB4E4\uAE30"),e,t);try{let n=await fetch(`./assets/sculpt/${i}.json?v=${hc}`).then(s=>s.json());t[0].state="done",t[1].state="run",Rn(!0,Ve("\uC608\uC2DC \uB9CC\uB4E4\uAE30"),e,t),await uc(160),await Ou(n,e),t[1].state="done",Rn(!0,Ve("\uC608\uC2DC \uB9CC\uB4E4\uAE30"),e,t),await uc(220)}catch(n){us(`${Ve("\uC608\uC2DC\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4")}: ${n.message}`)}Rn(!1)}async function ku({text:i,imageDataUrl:e}){if(!ke.live)return us(Ve("\uC9C0\uAE08\uC740 \uC608\uC2DC\uB9CC \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC11C\uBC84 \uBAA8\uB4DC\uC5D0\uC11C \uC9C1\uC811 \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."));let t=[{text:Ve("\uBB34\uC5C7\uC778\uC9C0 \uC0B4\uD53C\uAE30"),state:"run"},{text:Ve("\uBD80\uD488\uC73C\uB85C \uB098\uB204\uAE30")},{text:Ve("\uBD80\uD488 \uD2B8\uB9AC \uC138\uC6B0\uAE30")}];Rn(!0,Ve("3D \uB9CC\uB4E4\uAE30"),i?i.slice(0,40):Ve("\uC0AC\uC9C4\uC5D0\uC11C"),t);let n=performance.now();try{let s=await fetch("./api/sculpt",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:i||"",image:e||null,lang:document.documentElement.lang||"ko"})}),r=await s.json();if(!s.ok)throw new Error(r.error||`HTTP ${s.status}`);t[0].state=t[1].state="done",t[2].state="run",Rn(!0,Ve("3D \uB9CC\uB4E4\uAE30"),`${((performance.now()-n)/1e3).toFixed(1)}${Ve("\uCD08")}`,t),await Ou(r.spec,i?i.slice(0,40):Ve("\uC0AC\uC9C4\uC5D0\uC11C")),t[2].state="done",Rn(!0,Ve("3D \uB9CC\uB4E4\uAE30"),"",t),await uc(240)}catch(s){us(`${Ve("\uB9CC\uB4E4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4")}: ${s.message}`)}Rn(!1)}Ee("btnMake").onclick=()=>{let i=Ee("prompt").value.trim();if(!i)return us(Ve("\uBB34\uC5C7\uC744 \uB9CC\uB4E4\uC9C0 \uD55C \uC904\uB85C \uC801\uC5B4 \uC8FC\uC138\uC694"));ku({text:i})};var Ci=Ee("drop");Ci.onclick=()=>Ee("file").click();Ee("file").onchange=i=>{let e=i.target.files?.[0];e&&zu(e)};Ci.ondragover=i=>{i.preventDefault(),Ci.classList.add("over")};Ci.ondragleave=()=>Ci.classList.remove("over");Ci.ondrop=i=>{i.preventDefault(),Ci.classList.remove("over");let e=i.dataTransfer.files?.[0];e&&zu(e)};async function zu(i){let e=await new Promise((t,n)=>{let s=new FileReader;s.onload=()=>t(s.result),s.onerror=n,s.readAsDataURL(i)});ku({text:"",imageDataUrl:e})}Ee("btnNew").onclick=()=>{Fu(),Ee("stageEmpty").style.display="",Ee("projName").textContent=Ve("\uC0C8 \uC791\uC5C5"),Rn(!1),dc?.show("left")};Ee("seeds").innerHTML=r_.map(i=>`<button data-seed="${i}">${Ve(i)}</button>`).join("");Ee("seeds").onclick=i=>{let e=i.target.closest("[data-seed]");e&&(Ee("prompt").value=e.dataset.seed)};(async()=>{try{let i=await fetch("./api/status",{cache:"no-store"}).then(e=>e.json());ke.live=!!i.sculpt}catch{ke.live=!1}Ee("modeTag").textContent=ke.live?Ve("\uC9C1\uC811 \uB9CC\uB4E4\uAE30 \uAC00\uB2A5"):Ve("\uC608\uC2DC \uBCF4\uAE30"),Ee("modeTag").classList.toggle("live",ke.live);try{let i=await fetch(`./assets/sculpt/index.json?v=${hc}`).then(e=>e.json());Ee("chips").innerHTML=(i.samples||[]).map(e=>`
      <button class="sample" data-id="${e.id}" title="${e.prompt}">
        <img class="thumb" src="./assets/sculpt/${e.id}-preview.webp?v=${hc}" alt="" loading="lazy" />
        <span class="lb">${Ve(e.name)}</span>
      </button>`).join(""),Ee("chips").onclick=e=>{let t=e.target.closest(".sample");if(!t)return;let n=(i.samples||[]).find(s=>s.id===t.dataset.id);n&&Bu(n.id,Ve(n.name))}}catch{Ee("chips").innerHTML=`<span class="hint">${Ve("\uC608\uC2DC\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4")}</span>`}Du({current:3}),Ru(),dc=Iu({leftKo:"\uC785\uB825",rightKo:"\uD30C\uD2B8"}),vu("sculpt")})();window.__vringon3={state:ke,buildFromSpec:Ql,validateSpec:So,get scene(){return ui},get root(){return hi},applyExplode:Po,fromSample:Bu};
