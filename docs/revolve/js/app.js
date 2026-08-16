var is={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wf=0,kh=1,Ef=2;var Uo=1,Tl=2,Rr=3,Ti=0,je=1,un=2,di=0,Ss=1,Bh=2,zh=3,Vh=4,Tf=5;var ji=100,Af=101,Cf=102,Rf=103,If=104,Pf=200,Lf=201,Nf=202,Df=203,Ga=204,$a=205,Uf=206,Ff=207,Of=208,kf=209,Bf=210,zf=211,Vf=212,Hf=213,Gf=214,Wa=0,Xa=1,qa=2,ws=3,Ya=4,Za=5,Ja=6,ja=7,Al=0,$f=1,Wf=2,ti=0,Hh=1,Gh=2,$h=3,Fo=4,Wh=5,Xh=6,qh=7;var Yh=300,rs=301,Ps=302,Cl=303,Rl=304,Oo=306,fr=1e3,Hn=1001,pr=1002,We=1003,Il=1004;var Ls=1005;var Ze=1006,Ir=1007;var fi=1008;var vn=1009,Zh=1010,Jh=1011,Pr=1012,Pl=1013,ei=1014,Gn=1015,pi=1016,Ll=1017,Nl=1018,Lr=1020,jh=35902,Kh=35899,Qh=1021,tu=1022,Mn=1023,ci=1026,os=1027,Dl=1028,Ul=1029,as=1030,Fl=1031;var Ol=1033,ko=33776,Bo=33777,zo=33778,Vo=33779,kl=35840,Bl=35841,zl=35842,Vl=35843,Hl=36196,Gl=37492,$l=37496,Wl=37488,Xl=37489,Ho=37490,ql=37491,Yl=37808,Zl=37809,Jl=37810,jl=37811,Kl=37812,Ql=37813,tc=37814,ec=37815,nc=37816,ic=37817,sc=37818,rc=37819,oc=37820,ac=37821,lc=36492,cc=36494,hc=36495,uc=36283,dc=36284,Go=36285,fc=36286;var Es=2300,mr=2301,Ha=2302,wh=2303,Eh=2400,Th=2401,Ah=2402;var Xf=3200;var $o=0,qf=1,Un="",$e="srgb",to="srgb-linear",eo="linear",xe="srgb";var vs=7680;var Ch=519,Yf=512,Zf=513,Jf=514,pc=515,jf=516,Kf=517,mc=518,Qf=519,Rh=35044;var eu="300 es",jn=2e3,gr=2001;function Xg(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function qg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function no(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tp(){let n=no("canvas");return n.style.display="block",n}var $d={},xr=null;function nu(...n){let t="THREE."+n.shift();xr?xr("log",t,...n):console.log(t,...n)}function ep(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Yt(...n){n=ep(n);let t="THREE."+n.shift();if(xr)xr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Qt(...n){n=ep(n);let t="THREE."+n.shift();if(xr)xr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function bs(...n){let t=n.join(" ");t in $d||($d[t]=!0,Yt(...n))}function np(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var ip={[Wa]:Xa,[qa]:Ja,[Ya]:ja,[ws]:Za,[Xa]:Wa,[Ja]:qa,[ja]:Ya,[Za]:ws},Kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wd=1234567,Jr=Math.PI/180,_r=180/Math.PI;function Ns(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function ie(n,t,e){return Math.max(t,Math.min(e,n))}function iu(n,t){return(n%t+t)%t}function Yg(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Zg(n,t,e){return n!==t?(e-n)/(t-n):0}function jr(n,t,e){return(1-e)*n+e*t}function Jg(n,t,e,i){return jr(n,t,1-Math.exp(-e*i))}function jg(n,t=1){return t-Math.abs(iu(n,t*2)-t)}function Kg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Qg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function t0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function e0(n,t){return n+Math.random()*(t-n)}function n0(n){return n*(.5-Math.random())}function i0(n){n!==void 0&&(Wd=n);let t=Wd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function s0(n){return n*Jr}function r0(n){return n*_r}function o0(n){return(n&n-1)===0&&n!==0}function a0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function l0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function c0(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),h=r((t+i)/2),c=o((t+i)/2),d=r((t-i)/2),u=o((t-i)/2),f=r((i-t)/2),m=o((i-t)/2);switch(s){case"XYX":n.set(a*c,l*d,l*u,a*h);break;case"YZY":n.set(l*u,a*c,l*d,a*h);break;case"ZXZ":n.set(l*d,l*u,a*c,a*h);break;case"XZX":n.set(a*c,l*m,l*f,a*h);break;case"YXY":n.set(l*f,a*c,l*m,a*h);break;case"ZYZ":n.set(l*m,l*f,a*c,a*h);break;default:Yt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ur(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var mi={DEG2RAD:Jr,RAD2DEG:_r,generateUUID:Ns,clamp:ie,euclideanModulo:iu,mapLinear:Yg,inverseLerp:Zg,lerp:jr,damp:Jg,pingpong:jg,smoothstep:Kg,smootherstep:Qg,randInt:t0,randFloat:e0,randFloatSpread:n0,seededRandom:i0,degToRad:s0,radToDeg:r0,isPowerOfTwo:o0,ceilPowerOfTwo:a0,floorPowerOfTwo:l0,setQuaternionFromProperEuler:c0,normalize:mn,denormalize:ur},Mt=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},gn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],h=i[s+1],c=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(d!==x||l!==u||h!==f||c!==m){let p=l*u+h*f+c*m+d*x;p<0&&(u=-u,f=-f,m=-m,x=-x,p=-p);let g=1-a;if(p<.9995){let M=Math.acos(p),y=Math.sin(M);g=Math.sin(g*M)/y,a=Math.sin(a*M)/y,l=l*g+u*a,h=h*g+f*a,c=c*g+m*a,d=d*g+x*a}else{l=l*g+u*a,h=h*g+f*a,c=c*g+m*a,d=d*g+x*a;let M=1/Math.sqrt(l*l+h*h+c*c+d*d);l*=M,h*=M,c*=M,d*=M}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],h=i[s+2],c=i[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+c*d+l*f-h*u,t[e+1]=l*m+c*u+h*d-a*f,t[e+2]=h*m+c*f+a*u-l*d,t[e+3]=c*m-a*d-l*u-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(i/2),c=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*c*d+h*f*m,this._y=h*f*d-u*c*m,this._z=h*c*m+u*f*d,this._w=h*c*d-u*f*m;break;case"YXZ":this._x=u*c*d+h*f*m,this._y=h*f*d-u*c*m,this._z=h*c*m-u*f*d,this._w=h*c*d+u*f*m;break;case"ZXY":this._x=u*c*d-h*f*m,this._y=h*f*d+u*c*m,this._z=h*c*m+u*f*d,this._w=h*c*d-u*f*m;break;case"ZYX":this._x=u*c*d-h*f*m,this._y=h*f*d+u*c*m,this._z=h*c*m-u*f*d,this._w=h*c*d+u*f*m;break;case"YZX":this._x=u*c*d+h*f*m,this._y=h*f*d+u*c*m,this._z=h*c*m-u*f*d,this._w=h*c*d-u*f*m;break;case"XZY":this._x=u*c*d-h*f*m,this._y=h*f*d-u*c*m,this._z=h*c*m+u*f*d,this._w=h*c*d+u*f*m;break;default:Yt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],d=e[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(c-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+h)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-h)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+c)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=i*c+o*a+s*h-r*l,this._y=s*c+o*l+r*a-i*h,this._z=r*c+o*h+i*l-s*a,this._w=o*c-i*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let h=Math.acos(a),c=Math.sin(h);l=Math.sin(l*h)/c,e=Math.sin(e*h)/c,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*i),c=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*h+o*d-a*c,this.y=i+l*c+a*h-r*d,this.z=s+l*d+r*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Kc.copy(this).projectOnVector(t),this.sub(Kc)}reflect(t){return this.sub(Kc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kc=new z,Xd=new gn,Kt=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,r,o,a,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h)}set(t,e,i,s,r,o,a,l,h){let c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=i,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],c=i[4],d=i[7],u=i[2],f=i[5],m=i[8],x=s[0],p=s[3],g=s[6],M=s[1],y=s[4],_=s[7],S=s[2],w=s[5],E=s[8];return r[0]=o*x+a*M+l*S,r[3]=o*p+a*y+l*w,r[6]=o*g+a*_+l*E,r[1]=h*x+c*M+d*S,r[4]=h*p+c*y+d*w,r[7]=h*g+c*_+d*E,r[2]=u*x+f*M+m*S,r[5]=u*p+f*y+m*w,r[8]=u*g+f*_+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-i*r*c+i*a*l+s*r*h-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],d=c*o-a*h,u=a*l-c*r,f=h*r-o*l,m=e*d+i*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=d*x,t[1]=(s*h-c*i)*x,t[2]=(a*i-s*o)*x,t[3]=u*x,t[4]=(c*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(i*l-h*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qc.makeScale(t,e)),this}rotate(t){return bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qc.makeRotation(-t)),this}translate(t,e){return bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Qc=new Kt,qd=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yd=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function h0(){let n={enabled:!0,workingColorSpace:to,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xe&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xe&&(s.r=dr(s.r),s.g=dr(s.g),s.b=dr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?eo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[to]:{primaries:t,whitePoint:i,transfer:eo,toXYZ:qd,fromXYZ:Yd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:i,transfer:xe,toXYZ:qd,fromXYZ:Yd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),n}var oe=h0();function Ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function dr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ks,yr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ks===void 0&&(Ks=no("canvas")),Ks.width=t.width,Ks.height=t.height;let s=Ks.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ks}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=no("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ei(e[i]/255)*255):e[i]=Ei(e[i]);return{data:e,width:t.width,height:t.height}}else return Yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},u0=0,Ai=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Ns(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(th(s[o].image)):r.push(th(s[o]))}else r=th(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function th(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Yt("Texture: Unable to serialize Texture."),{})}var d0=0,eh=new z,xn=class n extends Kn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Hn,s=Hn,r=Ze,o=fi,a=Mn,l=vn,h=n.DEFAULT_ANISOTROPY,c=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Ns(),this.name="",this.source=new Ai(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(eh).x}get height(){return this.source.getSize(eh).y}get depth(){return this.source.getSize(eh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Yt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Yt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fr:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case pr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fr:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case pr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Yh;xn.DEFAULT_ANISOTROPY=1;var Le=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,h=l[0],c=l[4],d=l[8],u=l[1],f=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(c-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+p)<.1&&Math.abs(h+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(h+1)/2,_=(f+1)/2,S=(g+1)/2,w=(c+u)/4,E=(d+x)/4,v=(m+p)/4;return y>_&&y>S?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=w/i,r=E/i):_>S?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=w/s,r=v/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=E/r,s=v/r),this.set(i,s,r,e),this}let M=Math.sqrt((p-m)*(p-m)+(d-x)*(d-x)+(u-c)*(u-c));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(d-x)/M,this.z=(u-c)/M,this.w=Math.acos((h+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ka=class extends Kn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new xn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ai(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends Ka{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},io=class extends xn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qa=class extends xn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var me=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,r,o,a,l,h,c,d,u,f,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h,c,d,u,f,m,x,p)}set(t,e,i,s,r,o,a,l,h,c,d,u,f,m,x,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=h,g[6]=c,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Qs.setFromMatrixColumn(t,0).length(),r=1/Qs.setFromMatrixColumn(t,1).length(),o=1/Qs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*c,f=o*d,m=a*c,x=a*d;e[0]=l*c,e[4]=-l*d,e[8]=h,e[1]=f+m*h,e[5]=u-x*h,e[9]=-a*l,e[2]=x-u*h,e[6]=m+f*h,e[10]=o*l}else if(t.order==="YXZ"){let u=l*c,f=l*d,m=h*c,x=h*d;e[0]=u+x*a,e[4]=m*a-f,e[8]=o*h,e[1]=o*d,e[5]=o*c,e[9]=-a,e[2]=f*a-m,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*c,f=l*d,m=h*c,x=h*d;e[0]=u-x*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*c,e[9]=x-u*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*c,f=o*d,m=a*c,x=a*d;e[0]=l*c,e[4]=m*h-f,e[8]=u*h+x,e[1]=l*d,e[5]=x*h+u,e[9]=f*h-m,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*h,m=a*l,x=a*h;e[0]=l*c,e[4]=x-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=f*d+m,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*l,f=o*h,m=a*l,x=a*h;e[0]=l*c,e[4]=-d,e[8]=h*c,e[1]=u*d+x,e[5]=o*c,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*c,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(f0,t,p0)}lookAt(t,e,i){let s=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),$i.crossVectors(i,An),$i.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),$i.crossVectors(i,An)),$i.normalize(),xa.crossVectors(An,$i),s[0]=$i.x,s[4]=xa.x,s[8]=An.x,s[1]=$i.y,s[5]=xa.y,s[9]=An.y,s[2]=$i.z,s[6]=xa.z,s[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],c=i[1],d=i[5],u=i[9],f=i[13],m=i[2],x=i[6],p=i[10],g=i[14],M=i[3],y=i[7],_=i[11],S=i[15],w=s[0],E=s[4],v=s[8],T=s[12],L=s[1],D=s[5],P=s[9],G=s[13],I=s[2],A=s[6],B=s[10],F=s[14],$=s[3],X=s[7],ot=s[11],ht=s[15];return r[0]=o*w+a*L+l*I+h*$,r[4]=o*E+a*D+l*A+h*X,r[8]=o*v+a*P+l*B+h*ot,r[12]=o*T+a*G+l*F+h*ht,r[1]=c*w+d*L+u*I+f*$,r[5]=c*E+d*D+u*A+f*X,r[9]=c*v+d*P+u*B+f*ot,r[13]=c*T+d*G+u*F+f*ht,r[2]=m*w+x*L+p*I+g*$,r[6]=m*E+x*D+p*A+g*X,r[10]=m*v+x*P+p*B+g*ot,r[14]=m*T+x*G+p*F+g*ht,r[3]=M*w+y*L+_*I+S*$,r[7]=M*E+y*D+_*A+S*X,r[11]=M*v+y*P+_*B+S*ot,r[15]=M*T+y*G+_*F+S*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],d=t[6],u=t[10],f=t[14],m=t[3],x=t[7],p=t[11],g=t[15],M=l*f-h*u,y=a*f-h*d,_=a*u-l*d,S=o*f-h*c,w=o*u-l*c,E=o*d-a*c;return e*(x*M-p*y+g*_)-i*(m*M-p*S+g*w)+s*(m*y-x*S+g*E)-r*(m*_-x*w+p*E)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],h=t[6],c=t[10];return e*(o*c-a*h)-i*(r*c-a*l)+s*(r*h-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],d=t[9],u=t[10],f=t[11],m=t[12],x=t[13],p=t[14],g=t[15],M=e*a-i*o,y=e*l-s*o,_=e*h-r*o,S=i*l-s*a,w=i*h-r*a,E=s*h-r*l,v=c*x-d*m,T=c*p-u*m,L=c*g-f*m,D=d*p-u*x,P=d*g-f*x,G=u*g-f*p,I=M*G-y*P+_*D+S*L-w*T+E*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/I;return t[0]=(a*G-l*P+h*D)*A,t[1]=(s*P-i*G-r*D)*A,t[2]=(x*E-p*w+g*S)*A,t[3]=(u*w-d*E-f*S)*A,t[4]=(l*L-o*G-h*T)*A,t[5]=(e*G-s*L+r*T)*A,t[6]=(p*_-m*E-g*y)*A,t[7]=(c*E-u*_+f*y)*A,t[8]=(o*P-a*L+h*v)*A,t[9]=(i*L-e*P-r*v)*A,t[10]=(m*w-x*_+g*M)*A,t[11]=(d*_-c*w-f*M)*A,t[12]=(a*T-o*D-l*v)*A,t[13]=(e*D-i*T+s*v)*A,t[14]=(x*y-m*S-p*M)*A,t[15]=(c*S-d*y+u*M)*A,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,h=r*o,c=r*a;return this.set(h*o+i,h*a-s*l,h*l+s*a,0,h*a+s*l,c*a+i,c*l-s*o,0,h*l-s*a,c*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,c=o+o,d=a+a,u=r*h,f=r*c,m=r*d,x=o*c,p=o*d,g=a*d,M=l*h,y=l*c,_=l*d,S=i.x,w=i.y,E=i.z;return s[0]=(1-(x+g))*S,s[1]=(f+_)*S,s[2]=(m-y)*S,s[3]=0,s[4]=(f-_)*w,s[5]=(1-(u+g))*w,s[6]=(p+M)*w,s[7]=0,s[8]=(m+y)*E,s[9]=(p-M)*E,s[10]=(1-(u+x))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Qs.set(s[0],s[1],s[2]).length(),a=Qs.set(s[4],s[5],s[6]).length(),l=Qs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Yn.copy(this);let h=1/o,c=1/a,d=1/l;return Yn.elements[0]*=h,Yn.elements[1]*=h,Yn.elements[2]*=h,Yn.elements[4]*=c,Yn.elements[5]*=c,Yn.elements[6]*=c,Yn.elements[8]*=d,Yn.elements[9]*=d,Yn.elements[10]*=d,e.setFromRotationMatrix(Yn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=jn,l=!1){let h=this.elements,c=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===jn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===gr)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=d,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=m,h[14]=x,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=jn,l=!1){let h=this.elements,c=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===jn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===gr)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=d,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=m,h[14]=x,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Qs=new z,Yn=new me,f0=new z(0,0,0),p0=new z(1,1,1),$i=new z,xa=new z,An=new z,Zd=new me,Jd=new gn,hi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],c=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:Yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Zd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jd.setFromEuler(this),this.setFromQuaternion(Jd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var so=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},m0=0,jd=new z,tr=new gn,vi=new me,_a=new z,Hr=new z,g0=new z,x0=new gn,Kd=new z(1,0,0),Qd=new z(0,1,0),tf=new z(0,0,1),ef={type:"added"},_0={type:"removed"},er={type:"childadded",child:null},nh={type:"childremoved",child:null},Je=class n extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new z,e=new hi,i=new gn,s=new z(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Kt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new so,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(Kd,t)}rotateY(t){return this.rotateOnAxis(Qd,t)}rotateZ(t){return this.rotateOnAxis(tf,t)}translateOnAxis(t,e){return jd.copy(t).applyQuaternion(this.quaternion),this.position.add(jd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kd,t)}translateY(t){return this.translateOnAxis(Qd,t)}translateZ(t){return this.translateOnAxis(tf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?_a.copy(t):_a.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Hr,_a,this.up):vi.lookAt(_a,Hr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),tr.setFromRotationMatrix(vi),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ef),er.child=t,this.dispatchEvent(er),er.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_0),nh.child=t,this.dispatchEvent(nh),nh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ef),er.child=t,this.dispatchEvent(er),er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,t,g0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,x0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let d=l[h];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let h in a){let c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Je.DEFAULT_UP=new z(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ce=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},y0={type:"move"},vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,i),g=this._getHandJoint(h,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let c=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=c.position.distanceTo(d.position),f=.02,m=.005;h.inputState.pinching&&u>f+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=f-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(y0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ce;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},ya={h:0,s:0,l:0};function ih(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Gt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=oe.workingColorSpace){if(t=iu(t,1),e=ie(e,0,1),i=ie(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ih(o,r,t+1/3),this.g=ih(o,r,t),this.b=ih(o,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=$e){function i(r){r!==void 0&&parseFloat(r)<1&&Yt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Yt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Yt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let i=sp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Yt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}copyLinearToSRGB(t){return this.r=dr(t.r),this.g=dr(t.g),this.b=dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return oe.workingToColorSpace(hn.copy(this),t),Math.round(ie(hn.r*255,0,255))*65536+Math.round(ie(hn.g*255,0,255))*256+Math.round(ie(hn.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(hn.copy(this),e);let i=hn.r,s=hn.g,r=hn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,h,c=(a+o)/2;if(a===o)l=0,h=0;else{let d=o-a;switch(h=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=$e){oe.workingToColorSpace(hn.copy(this),t);let e=hn.r,i=hn.g,s=hn.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Wi),this.setHSL(Wi.h+t,Wi.s+e,Wi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Wi),t.getHSL(ya);let i=jr(Wi.h,ya.h,e),s=jr(Wi.s,ya.s,e),r=jr(Wi.l,ya.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new Gt;Gt.NAMES=sp;var ui=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Zn=new z,Mi=new z,sh=new z,bi=new z,nr=new z,ir=new z,nf=new z,rh=new z,oh=new z,ah=new z,lh=new Le,ch=new Le,hh=new Le,Ji=class n{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Zn.subVectors(t,e),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Zn.subVectors(s,e),Mi.subVectors(i,e),sh.subVectors(t,e);let o=Zn.dot(Zn),a=Zn.dot(Mi),l=Zn.dot(sh),h=Mi.dot(Mi),c=Mi.dot(sh),d=o*h-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(h*l-a*c)*u,m=(o*c-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return lh.setScalar(0),ch.setScalar(0),hh.setScalar(0),lh.fromBufferAttribute(t,e),ch.fromBufferAttribute(t,i),hh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(lh,r.x),o.addScaledVector(ch,r.y),o.addScaledVector(hh,r.z),o}static isFrontFacing(t,e,i,s){return Zn.subVectors(i,e),Mi.subVectors(t,e),Zn.cross(Mi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Zn.cross(Mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;nr.subVectors(s,i),ir.subVectors(r,i),rh.subVectors(t,i);let l=nr.dot(rh),h=ir.dot(rh);if(l<=0&&h<=0)return e.copy(i);oh.subVectors(t,s);let c=nr.dot(oh),d=ir.dot(oh);if(c>=0&&d<=c)return e.copy(s);let u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(nr,o);ah.subVectors(t,r);let f=nr.dot(ah),m=ir.dot(ah);if(m>=0&&f<=m)return e.copy(r);let x=f*h-l*m;if(x<=0&&h>=0&&m<=0)return a=h/(h-m),e.copy(i).addScaledVector(ir,a);let p=c*m-f*d;if(p<=0&&d-c>=0&&f-m>=0)return nf.subVectors(r,s),a=(d-c)/(d-c+(f-m)),e.copy(s).addScaledVector(nf,a);let g=1/(p+x+u);return o=x*g,a=u*g,e.copy(i).addScaledVector(nr,o).addScaledVector(ir,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},In=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(t.matrixWorld),this.expandByPoint(Jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),va.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),va.copy(i.boundingBox)),va.applyMatrix4(t.matrixWorld),this.union(va)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Jn),Jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gr),Ma.subVectors(this.max,Gr),sr.subVectors(t.a,Gr),rr.subVectors(t.b,Gr),or.subVectors(t.c,Gr),Xi.subVectors(rr,sr),qi.subVectors(or,rr),gs.subVectors(sr,or);let e=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-gs.z,gs.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,gs.z,0,-gs.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-gs.y,gs.x,0];return!uh(e,sr,rr,or,Ma)||(e=[1,0,0,0,1,0,0,0,1],!uh(e,sr,rr,or,Ma))?!1:(ba.crossVectors(Xi,qi),e=[ba.x,ba.y,ba.z],uh(e,sr,rr,or,Ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Si=[new z,new z,new z,new z,new z,new z,new z,new z],Jn=new z,va=new In,sr=new z,rr=new z,or=new z,Xi=new z,qi=new z,gs=new z,Gr=new z,Ma=new z,ba=new z,xs=new z;function uh(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){xs.fromArray(n,r);let a=s.x*Math.abs(xs.x)+s.y*Math.abs(xs.y)+s.z*Math.abs(xs.z),l=t.dot(xs),h=e.dot(xs),c=i.dot(xs);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}var Ge=new z,Sa=new Mt,v0=0,Pe=class extends Kn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Rh,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Sa.fromBufferAttribute(this,e),Sa.applyMatrix3(t),this.setXY(e,Sa.x,Sa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ur(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=mn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ur(e,this.array)),e}setX(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ur(e,this.array)),e}setY(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ur(e,this.array)),e}setZ(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ur(e,this.array)),e}setW(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),i=mn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),i=mn(i,this.array),s=mn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),i=mn(i,this.array),s=mn(s,this.array),r=mn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rh&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var ro=class extends Pe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var oo=class extends Pe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var _e=class extends Pe{constructor(t,e,i){super(new Float32Array(t),e,i)}},M0=new In,$r=new z,dh=new z,Ci=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):M0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$r.subVectors(t,this.center);let e=$r.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector($r,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($r.copy(t.center).add(dh)),this.expandByPoint($r.copy(t.center).sub(dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},b0=0,Vn=new me,fh=new Je,ar=new z,Cn=new In,Wr=new In,en=new z,Fe=class n extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xg(t)?oo:ro)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,i){return Vn.makeTranslation(t,e,i),this.applyMatrix4(Vn),this}scale(t,e,i){return Vn.makeScale(t,e,i),this.applyMatrix4(Vn),this}lookAt(t){return fh.lookAt(t),fh.updateMatrix(),this.applyMatrix4(fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _e(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Wr.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Cn.min,Wr.min),Cn.expandByPoint(en),en.addVectors(Cn.max,Wr.max),Cn.expandByPoint(en)):(Cn.expandByPoint(Wr.min),Cn.expandByPoint(Wr.max))}Cn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)en.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(en));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)en.fromBufferAttribute(a,h),l&&(ar.fromBufferAttribute(t,h),en.add(ar)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Pe(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new z,l[v]=new z;let h=new z,c=new z,d=new z,u=new Mt,f=new Mt,m=new Mt,x=new z,p=new z;function g(v,T,L){h.fromBufferAttribute(i,v),c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,L),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,L),c.sub(h),d.sub(h),f.sub(u),m.sub(u);let D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(x.copy(c).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(D),p.copy(d).multiplyScalar(f.x).addScaledVector(c,-m.x).multiplyScalar(D),a[v].add(x),a[T].add(x),a[L].add(x),l[v].add(p),l[T].add(p),l[L].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let v=0,T=M.length;v<T;++v){let L=M[v],D=L.start,P=L.count;for(let G=D,I=D+P;G<I;G+=3)g(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let y=new z,_=new z,S=new z,w=new z;function E(v){S.fromBufferAttribute(s,v),w.copy(S);let T=a[v];y.copy(T),y.sub(S.multiplyScalar(S.dot(T))).normalize(),_.crossVectors(w,T);let D=_.dot(l[v])<0?-1:1;o.setXYZW(v,y.x,y.y,y.z,D)}for(let v=0,T=M.length;v<T;++v){let L=M[v],D=L.start,P=L.count;for(let G=D,I=D+P;G<I;G+=3)E(t.getX(G+0)),E(t.getX(G+1)),E(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new z,r=new z,o=new z,a=new z,l=new z,h=new z,c=new z,d=new z;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),x=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),c.subVectors(o,r),d.subVectors(s,r),c.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),h.fromBufferAttribute(i,p),a.add(c),l.add(c),h.add(c),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,h.x,h.y,h.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),c.subVectors(o,r),d.subVectors(s,r),c.cross(d),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,l){let h=a.array,c=a.itemSize,d=a.normalized,u=new h.constructor(l.length*c),f=0,m=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*c;for(let g=0;g<c;g++)u[m++]=h[f++]}return new Pe(u,c,d)}if(this.index===null)return Yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=t(l,i);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let c=0,d=h.length;c<d;c++){let u=h[c],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){let f=h[d];c.push(f.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let h in s){let c=s[h];this.setAttribute(h,c.clone(e))}let r=t.morphAttributes;for(let h in r){let c=[],d=r[h];for(let u=0,f=d.length;u<f;u++)c.push(d[u].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,c=o.length;h<c;h++){let d=o[h];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var S0=0,Qn=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=Ss,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=$a,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Yt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Yt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ga&&(i.blendSrc=this.blendSrc),this.blendDst!==$a&&(i.blendDst=this.blendDst),this.blendEquation!==ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ch&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Mt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Mt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var wi=new z,ph=new z,wa=new z,Yi=new z,mh=new z,Ea=new z,gh=new z,Ts=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ph.copy(t).add(e).multiplyScalar(.5),wa.copy(e).sub(t).normalize(),Yi.copy(this.origin).sub(ph);let r=t.distanceTo(e)*.5,o=-this.direction.dot(wa),a=Yi.dot(this.direction),l=-Yi.dot(wa),h=Yi.lengthSq(),c=Math.abs(1-o*o),d,u,f,m;if(c>0)if(d=o*l-a,u=o*a-l,m=r*c,d>=0)if(u>=-m)if(u<=m){let x=1/c;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+h}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+h;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+h;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+h):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ph).addScaledVector(wa,u),f}intersectSphere(t,e){wi.subVectors(t.center,this.origin);let i=wi.dot(this.direction),s=wi.dot(wi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(i=(t.min.x-u.x)*h,s=(t.max.x-u.x)*h):(i=(t.max.x-u.x)*h,s=(t.min.x-u.x)*h),c>=0?(r=(t.min.y-u.y)*c,o=(t.max.y-u.y)*c):(r=(t.max.y-u.y)*c,o=(t.min.y-u.y)*c),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,i,s,r){mh.subVectors(e,t),Ea.subVectors(i,t),gh.crossVectors(mh,Ea);let o=this.direction.dot(gh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,t);let l=a*this.direction.dot(Ea.crossVectors(Yi,Ea));if(l<0)return null;let h=a*this.direction.dot(mh.cross(Yi));if(h<0||l+h>o)return null;let c=-a*Yi.dot(gh);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},As=class extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},sf=new me,_s=new Ts,Ta=new Ci,rf=new z,Aa=new z,Ca=new z,Ra=new z,xh=new z,Ia=new z,of=new z,Pa=new z,jt=class extends Je{constructor(t=new Fe,e=new As){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ia.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=a[l],d=r[l];c!==0&&(xh.fromBufferAttribute(d,t),o?Ia.addScaledVector(xh,c):Ia.addScaledVector(xh.sub(e),c))}e.add(Ia)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(r),_s.copy(t.ray).recast(t.near),!(Ta.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Ta,rf)===null||_s.origin.distanceToSquared(rf)>(t.far-t.near)**2))&&(sf.copy(r).invert(),_s.copy(t.ray).applyMatrix4(sf),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,_s)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=o[p.materialIndex],M=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let _=M,S=y;_<S;_+=3){let w=a.getX(_),E=a.getX(_+1),v=a.getX(_+2);s=La(this,g,t,i,h,c,d,w,E,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let M=a.getX(p),y=a.getX(p+1),_=a.getX(p+2);s=La(this,o,t,i,h,c,d,M,y,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=o[p.materialIndex],M=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let _=M,S=y;_<S;_+=3){let w=_,E=_+1,v=_+2;s=La(this,g,t,i,h,c,d,w,E,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let M=p,y=p+1,_=p+2;s=La(this,o,t,i,h,c,d,M,y,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function w0(n,t,e,i,s,r,o,a){let l;if(t.side===je?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Ti,a),l===null)return null;Pa.copy(a),Pa.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(Pa);return h<e.near||h>e.far?null:{distance:h,point:Pa.clone(),object:n}}function La(n,t,e,i,s,r,o,a,l,h){n.getVertexPosition(a,Aa),n.getVertexPosition(l,Ca),n.getVertexPosition(h,Ra);let c=w0(n,t,e,i,Aa,Ca,Ra,of);if(c){let d=new z;Ji.getBarycoord(of,Aa,Ca,Ra,d),s&&(c.uv=Ji.getInterpolatedAttribute(s,a,l,h,d,new Mt)),r&&(c.uv1=Ji.getInterpolatedAttribute(r,a,l,h,d,new Mt)),o&&(c.normal=Ji.getInterpolatedAttribute(o,a,l,h,d,new z),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let u={a,b:l,c:h,normal:new z,materialIndex:0};Ji.getNormal(Aa,Ca,Ra,u.normal),c.face=u,c.barycoord=d}return c}var ao=class extends xn{constructor(t=null,e=1,i=1,s,r,o,a,l,h=We,c=We,d,u){super(null,o,a,l,h,c,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var lo=class extends Pe{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},lr=new me,af=new me,Na=[],lf=new In,E0=new me,Xr=new jt,qr=new Ci,co=class extends jt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new lo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,E0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new In),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,lr),lf.copy(t.boundingBox).applyMatrix4(lr),this.boundingBox.union(lf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,lr),qr.copy(t.boundingSphere).applyMatrix4(lr),this.boundingSphere.union(qr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(i),t.ray.intersectsSphere(qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,lr),af.multiplyMatrices(i,lr),Xr.matrixWorld=af,Xr.raycast(t,Na);for(let o=0,a=Na.length;o<a;o++){let l=Na[o];l.instanceId=r,l.object=this,e.push(l)}Na.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new lo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ao(new Float32Array(s*this.count),s,this.count,Dl,Gn));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<i.length;h++)o+=i[h];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},_h=new z,T0=new z,A0=new Kt,yn=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=_h.subVectors(i,e).cross(T0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(_h),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||A0.getNormalMatrix(t),s=this.coplanarPoint(_h).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ys=new Ci,C0=new Mt(.5,.5),Da=new z,Mr=class{constructor(t=new yn,e=new yn,i=new yn,s=new yn,r=new yn,o=new yn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=jn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],h=r[3],c=r[4],d=r[5],u=r[6],f=r[7],m=r[8],x=r[9],p=r[10],g=r[11],M=r[12],y=r[13],_=r[14],S=r[15];if(s[0].setComponents(h-o,f-c,g-m,S-M).normalize(),s[1].setComponents(h+o,f+c,g+m,S+M).normalize(),s[2].setComponents(h+a,f+d,g+x,S+y).normalize(),s[3].setComponents(h-a,f-d,g-x,S-y).normalize(),i)s[4].setComponents(l,u,p,_).normalize(),s[5].setComponents(h-l,f-u,g-p,S-_).normalize();else if(s[4].setComponents(h-l,f-u,g-p,S-_).normalize(),e===jn)s[5].setComponents(h+l,f+u,g+p,S+_).normalize();else if(e===gr)s[5].setComponents(l,u,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){ys.center.set(0,0,0);let e=C0.distanceTo(t.center);return ys.radius=.7071067811865476+e,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Da.x=s.normal.x>0?t.max.x:t.min.x,Da.y=s.normal.y>0?t.max.y:t.min.y,Da.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Da)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var br=class extends Qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},tl=new z,el=new z,cf=new me,Yr=new Ts,Ua=new Ci,yh=new z,hf=new z,Sr=class extends Je{constructor(t=new Fe,e=new br){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)tl.fromBufferAttribute(e,s-1),el.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=tl.distanceTo(el);t.setAttribute("lineDistance",new _e(i,1))}else Yt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(s),Ua.radius+=r,t.ray.intersectsSphere(Ua)===!1)return;cf.copy(s).invert(),Yr.copy(t.ray).applyMatrix4(cf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=f,p=m-1;x<p;x+=h){let g=c.getX(x),M=c.getX(x+1),y=Fa(this,t,Yr,l,g,M,x);y&&e.push(y)}if(this.isLineLoop){let x=c.getX(m-1),p=c.getX(f),g=Fa(this,t,Yr,l,x,p,m-1);g&&e.push(g)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=f,p=m-1;x<p;x+=h){let g=Fa(this,t,Yr,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){let x=Fa(this,t,Yr,l,m-1,f,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Fa(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(tl.fromBufferAttribute(a,s),el.fromBufferAttribute(a,r),e.distanceSqToSegment(tl,el,yh,hf)>i)return;yh.applyMatrix4(n.matrixWorld);let h=t.ray.origin.distanceTo(yh);if(!(h<t.near||h>t.far))return{distance:h,point:hf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var uf=new z,df=new z,nl=class extends Sr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)uf.fromBufferAttribute(e,s),df.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+uf.distanceTo(df);t.setAttribute("lineDistance",new _e(i,1))}else Yt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ki=class extends xn{constructor(t,e,i,s,r,o,a,l,h,c,d,u){super(null,o,a,l,h,c,s,r,d,u),this.isCompressedTexture=!0,this.image={width:e,height:i},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}};var ho=class extends xn{constructor(t=[],e=rs,i,s,r,o,a,l,h,c){super(t,e,i,s,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Ri=class extends xn{constructor(t,e,i=ei,s,r,o,a=We,l=We,h,c=ci,d=1){if(c!==ci&&c!==os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,c,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ai(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},il=class extends Ri{constructor(t,e=ei,i=rs,s,r,o=We,a=We,l,h=ci){let c={width:t,height:t,depth:1},d=[c,c,c,c,c,c];super(t,t,e,i,s,r,o,a,l,h),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},uo=class extends xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},rn=class n extends Fe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],c=[],d=[],u=0,f=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new _e(h,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(d,2));function m(x,p,g,M,y,_,S,w,E,v,T){let L=_/E,D=S/v,P=_/2,G=S/2,I=w/2,A=E+1,B=v+1,F=0,$=0,X=new z;for(let ot=0;ot<B;ot++){let ht=ot*D-G;for(let tt=0;tt<A;tt++){let ct=tt*L-P;X[x]=ct*M,X[p]=ht*y,X[g]=I,h.push(X.x,X.y,X.z),X[x]=0,X[p]=0,X[g]=w>0?1:-1,c.push(X.x,X.y,X.z),d.push(tt/E),d.push(1-ot/v),F+=1}}for(let ot=0;ot<v;ot++)for(let ht=0;ht<E;ht++){let tt=u+ht+A*ot,ct=u+ht+A*(ot+1),Et=u+(ht+1)+A*(ot+1),St=u+(ht+1)+A*ot;l.push(tt,ct,St),l.push(ct,Et,St),$+=6}a.addGroup(f,$,T),f+=$,u+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var fo=class n extends Fe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],h=new z,c=new Mt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=i+d/e*s;h.x=t*Math.cos(f),h.y=t*Math.sin(f),o.push(h.x,h.y,h.z),a.push(0,0,1),c.x=(o[u]/t+1)/2,c.y=(o[u+1]/t+1)/2,l.push(c.x,c.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(a,3)),this.setAttribute("uv",new _e(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Pn=class n extends Fe{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let c=[],d=[],u=[],f=[],m=0,x=[],p=i/2,g=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(c),this.setAttribute("position",new _e(d,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(f,2));function M(){let _=new z,S=new z,w=0,E=(e-t)/i;for(let v=0;v<=r;v++){let T=[],L=v/r,D=L*(e-t)+t;for(let P=0;P<=s;P++){let G=P/s,I=G*l+a,A=Math.sin(I),B=Math.cos(I);S.x=D*A,S.y=-L*i+p,S.z=D*B,d.push(S.x,S.y,S.z),_.set(A,E,B).normalize(),u.push(_.x,_.y,_.z),f.push(G,1-L),T.push(m++)}x.push(T)}for(let v=0;v<s;v++)for(let T=0;T<r;T++){let L=x[T][v],D=x[T+1][v],P=x[T+1][v+1],G=x[T][v+1];(t>0||T!==0)&&(c.push(L,D,G),w+=3),(e>0||T!==r-1)&&(c.push(D,P,G),w+=3)}h.addGroup(g,w,0),g+=w}function y(_){let S=m,w=new Mt,E=new z,v=0,T=_===!0?t:e,L=_===!0?1:-1;for(let P=1;P<=s;P++)d.push(0,p*L,0),u.push(0,L,0),f.push(.5,.5),m++;let D=m;for(let P=0;P<=s;P++){let I=P/s*l+a,A=Math.cos(I),B=Math.sin(I);E.x=T*B,E.y=p*L,E.z=T*A,d.push(E.x,E.y,E.z),u.push(0,L,0),w.x=A*.5+.5,w.y=B*.5*L+.5,f.push(w.x,w.y),m++}for(let P=0;P<s;P++){let G=S+P,I=D+P;_===!0?c.push(I,I+1,G):c.push(I+1,I,G),v+=3}h.addGroup(g,v,_===!0?1:2),g+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},po=class n extends Pn{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Yt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=i[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let c=i[s],u=i[s+1]-c,f=(o-c)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Mt:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new z,s=[],r=[],o=[],a=new z,l=new me;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new z)}r[0]=new z,o[0]=new z;let h=Number.MAX_VALUE,c=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);c<=h&&(h=c,i.set(1,0,0)),d<=h&&(h=d,i.set(0,1,0)),u<=h&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ie(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ie(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},wr=class extends Ln{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Mt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=h-this.aY;l=u*c-f*d+this.aX,h=u*d+f*c+this.aY}return i.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},sl=class extends wr{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function su(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,d){let u=(o-r)/h-(a-r)/(h+c)+(a-o)/c,f=(a-o)/c-(l-o)/(c+d)+(l-a)/d;u*=c,f*=c,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var ff=new z,pf=new z,vh=new su,Mh=new su,bh=new su,rl=class extends Ln{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new z){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=s[(a-1)%r]:(pf.subVectors(s[0],s[1]).add(s[0]),h=pf);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(ff.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=ff),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(h.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(c),f);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),vh.initNonuniformCatmullRom(h.x,d.x,u.x,c.x,m,x,p),Mh.initNonuniformCatmullRom(h.y,d.y,u.y,c.y,m,x,p),bh.initNonuniformCatmullRom(h.z,d.z,u.z,c.z,m,x,p)}else this.curveType==="catmullrom"&&(vh.initCatmullRom(h.x,d.x,u.x,c.x,this.tension),Mh.initCatmullRom(h.y,d.y,u.y,c.y,this.tension),bh.initCatmullRom(h.z,d.z,u.z,c.z,this.tension));return i.set(vh.calc(l),Mh.calc(l),bh.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function mf(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function R0(n,t){let e=1-n;return e*e*t}function I0(n,t){return 2*(1-n)*n*t}function P0(n,t){return n*n*t}function Kr(n,t,e,i){return R0(n,t)+I0(n,e)+P0(n,i)}function L0(n,t){let e=1-n;return e*e*e*t}function N0(n,t){let e=1-n;return 3*e*e*n*t}function D0(n,t){return 3*(1-n)*n*n*t}function U0(n,t){return n*n*n*t}function Qr(n,t,e,i,s){return L0(n,t)+N0(n,e)+D0(n,i)+U0(n,s)}var mo=class extends Ln{constructor(t=new Mt,e=new Mt,i=new Mt,s=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Mt){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Qr(t,s.x,r.x,o.x,a.x),Qr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ol=class extends Ln{constructor(t=new z,e=new z,i=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new z){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Qr(t,s.x,r.x,o.x,a.x),Qr(t,s.y,r.y,o.y,a.y),Qr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},go=class extends Ln{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},al=class extends Ln{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xo=class extends Ln{constructor(t=new Mt,e=new Mt,i=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Mt){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Kr(t,s.x,r.x,o.x),Kr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ll=class extends Ln{constructor(t=new z,e=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new z){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Kr(t,s.x,r.x,o.x),Kr(t,s.y,r.y,o.y),Kr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_o=class extends Ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],c=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(mf(a,l.x,h.x,c.x,d.x),mf(a,l.y,h.y,c.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Mt().fromArray(s))}return this}},Ih=Object.freeze({__proto__:null,ArcCurve:sl,CatmullRomCurve3:rl,CubicBezierCurve:mo,CubicBezierCurve3:ol,EllipseCurve:wr,LineCurve:go,LineCurve3:al,QuadraticBezierCurve:xo,QuadraticBezierCurve3:ll,SplineCurve:_o}),cl=class extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ih[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){let c=l[h];i&&i.equals(c)||(e.push(c),i=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Ih[s.type]().fromJSON(s))}return this}},yo=class extends cl{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new go(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new xo(this.currentPoint.clone(),new Mt(t,e),new Mt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new mo(this.currentPoint.clone(),new Mt(t,e),new Mt(i,s),new Mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new _o(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+h,e+c,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let h=new wr(t,e,i,s,r,o,a,l);if(this.curves.length>0){let d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);let c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Qi=class extends yo{constructor(t){super(t),this.uuid=Ns(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new yo().fromJSON(s))}return this}};function F0(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=rp(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,h;if(i&&(r=V0(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let c=a,d=l;for(let u=e;u<s;u+=e){let f=n[u],m=n[u+1];f<a&&(a=f),m<l&&(l=m),f>c&&(c=f),m>d&&(d=m)}h=Math.max(c-a,d-l),h=h!==0?32767/h:0}return vo(r,o,e,a,l,h,0),o}function rp(n,t,e,i,s){let r;if(s===K0(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=gf(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=gf(o/i|0,n[o],n[o+1],r);return r&&Er(r,r.next)&&(bo(r),r=r.next),r}function Cs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Er(e,e.next)||Ue(e.prev,e,e.next)===0)){if(bo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function vo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&X0(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,h=n.next;if(r?k0(n,i,s,r):O0(n)){t.push(l.i,n.i,h.i),bo(n),n=h.next,a=h.next;continue}if(n=h,n===a){o?o===1?(n=B0(Cs(n),t),vo(n,t,e,i,s,r,2)):o===2&&z0(n,t,e,i,s,r):vo(Cs(n),t,e,i,s,r,1);break}}}function O0(n){let t=n.prev,e=n,i=n.next;if(Ue(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,h=i.y,c=Math.min(s,r,o),d=Math.min(a,l,h),u=Math.max(s,r,o),f=Math.max(a,l,h),m=i.next;for(;m!==t;){if(m.x>=c&&m.x<=u&&m.y>=d&&m.y<=f&&Zr(s,a,r,l,o,h,m.x,m.y)&&Ue(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function k0(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Ue(s,r,o)>=0)return!1;let a=s.x,l=r.x,h=o.x,c=s.y,d=r.y,u=o.y,f=Math.min(a,l,h),m=Math.min(c,d,u),x=Math.max(a,l,h),p=Math.max(c,d,u),g=Ph(f,m,t,e,i),M=Ph(x,p,t,e,i),y=n.prevZ,_=n.nextZ;for(;y&&y.z>=g&&_&&_.z<=M;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&Zr(a,c,l,d,h,u,y.x,y.y)&&Ue(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=x&&_.y>=m&&_.y<=p&&_!==s&&_!==o&&Zr(a,c,l,d,h,u,_.x,_.y)&&Ue(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=g;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&Zr(a,c,l,d,h,u,y.x,y.y)&&Ue(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=p&&_!==s&&_!==o&&Zr(a,c,l,d,h,u,_.x,_.y)&&Ue(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function B0(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Er(i,s)&&ap(i,e,e.next,s)&&Mo(i,s)&&Mo(s,i)&&(t.push(i.i,e.i,s.i),bo(e),bo(e.next),e=n=s),e=e.next}while(e!==n);return Cs(e)}function z0(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Z0(o,a)){let l=lp(o,a);o=Cs(o,o.next),l=Cs(l,l.next),vo(o,t,e,i,s,r,0),vo(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function V0(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,h=rp(n,a,l,i,!1);h===h.next&&(h.steiner=!0),s.push(Y0(h))}s.sort(H0);for(let r=0;r<s.length;r++)e=G0(s[r],e);return e}function H0(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function G0(n,t){let e=$0(n,t);if(!e)return t;let i=lp(e,n);return Cs(i,i.next),Cs(e,e.next)}function $0(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(Er(n,e))return e;do{if(Er(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,h=o.y,c=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&op(s<h?i:r,s,l,h,s<h?r:i,s,e.x,e.y)){let d=Math.abs(s-e.y)/(i-e.x);Mo(e,n)&&(d<c||d===c&&(e.x>o.x||e.x===o.x&&W0(o,e)))&&(o=e,c=d)}e=e.next}while(e!==a);return o}function W0(n,t){return Ue(n.prev,n,t.prev)<0&&Ue(t.next,n,n.next)<0}function X0(n,t,e,i){let s=n;do s.z===0&&(s.z=Ph(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,q0(s)}function q0(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let h=0;h<e&&(a++,o=o.nextZ,!!o);h++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function Ph(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Y0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function op(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Zr(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&op(n,t,e,i,s,r,o,a)}function Z0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!J0(n,t)&&(Mo(n,t)&&Mo(t,n)&&j0(n,t)&&(Ue(n.prev,n,t.prev)||Ue(n,t.prev,t))||Er(n,t)&&Ue(n.prev,n,n.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Er(n,t){return n.x===t.x&&n.y===t.y}function ap(n,t,e,i){let s=ka(Ue(n,t,e)),r=ka(Ue(n,t,i)),o=ka(Ue(e,i,n)),a=ka(Ue(e,i,t));return!!(s!==r&&o!==a||s===0&&Oa(n,e,t)||r===0&&Oa(n,i,t)||o===0&&Oa(e,n,i)||a===0&&Oa(e,t,i))}function Oa(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ka(n){return n>0?1:n<0?-1:0}function J0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&ap(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Mo(n,t){return Ue(n.prev,n,n.next)<0?Ue(n,t,n.next)>=0&&Ue(n,n.prev,t)>=0:Ue(n,t,n.prev)<0||Ue(n,n.next,t)<0}function j0(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function lp(n,t){let e=Lh(n.i,n.x,n.y),i=Lh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function gf(n,t,e,i){let s=Lh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function bo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Lh(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function K0(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Nh=class{static triangulate(t,e,i=2){return F0(t,e,i)}},Ms=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];xf(t),_f(i,t);let o=t.length;e.forEach(xf);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,_f(i,e[l]);let a=Nh.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function xf(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function _f(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Rs=class n extends Fe{constructor(t=new Qi([new Mt(.5,.5),new Mt(-.5,.5),new Mt(-.5,-.5),new Mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let h=t[a];o(h)}this.setAttribute("position",new _e(s,3)),this.setAttribute("uv",new _e(r,2)),this.computeVertexNormals();function o(a){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Q0,y,_=!1,S,w,E,v;if(g){y=g.getSpacedPoints(c),_=!0,u=!1;let O=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(c,O),w=new z,E=new z,v=new z}u||(p=0,f=0,m=0,x=0);let T=a.extractPoints(h),L=T.shape,D=T.holes;if(!Ms.isClockWise(L)){L=L.reverse();for(let O=0,k=D.length;O<k;O++){let Y=D[O];Ms.isClockWise(Y)&&(D[O]=Y.reverse())}}function G(O){let Y=10000000000000001e-36,j=O[0];for(let Z=1;Z<=O.length;Z++){let yt=Z%O.length,wt=O[yt],gt=wt.x-j.x,Nt=wt.y-j.y,H=gt*gt+Nt*Nt,te=Math.max(Math.abs(wt.x),Math.abs(wt.y),Math.abs(j.x),Math.abs(j.y)),Xt=Y*te*te;if(H<=Xt){O.splice(yt,1),Z--;continue}j=wt}}G(L),D.forEach(G);let I=D.length,A=L;for(let O=0;O<I;O++){let k=D[O];L=L.concat(k)}function B(O,k,Y){return k||Qt("ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(k,Y)}let F=L.length;function $(O,k,Y){let j,Z,yt,wt=O.x-k.x,gt=O.y-k.y,Nt=Y.x-O.x,H=Y.y-O.y,te=wt*wt+gt*gt,Xt=wt*H-gt*Nt;if(Math.abs(Xt)>Number.EPSILON){let N=Math.sqrt(te),b=Math.sqrt(Nt*Nt+H*H),Q=k.x-gt/N,it=k.y+wt/N,ut=Y.x-H/b,vt=Y.y+Nt/b,bt=((ut-Q)*H-(vt-it)*Nt)/(wt*H-gt*Nt);j=Q+wt*bt-O.x,Z=it+gt*bt-O.y;let ft=j*j+Z*Z;if(ft<=2)return new Mt(j,Z);yt=Math.sqrt(ft/2)}else{let N=!1;wt>Number.EPSILON?Nt>Number.EPSILON&&(N=!0):wt<-Number.EPSILON?Nt<-Number.EPSILON&&(N=!0):Math.sign(gt)===Math.sign(H)&&(N=!0),N?(j=-gt,Z=wt,yt=Math.sqrt(te)):(j=wt,Z=gt,yt=Math.sqrt(te/2))}return new Mt(j/yt,Z/yt)}let X=[];for(let O=0,k=A.length,Y=k-1,j=O+1;O<k;O++,Y++,j++)Y===k&&(Y=0),j===k&&(j=0),X[O]=$(A[O],A[Y],A[j]);let ot=[],ht,tt=X.concat();for(let O=0,k=I;O<k;O++){let Y=D[O];ht=[];for(let j=0,Z=Y.length,yt=Z-1,wt=j+1;j<Z;j++,yt++,wt++)yt===Z&&(yt=0),wt===Z&&(wt=0),ht[j]=$(Y[j],Y[yt],Y[wt]);ot.push(ht),tt=tt.concat(ht)}let ct;if(p===0)ct=Ms.triangulateShape(A,D);else{let O=[],k=[];for(let Y=0;Y<p;Y++){let j=Y/p,Z=f*Math.cos(j*Math.PI/2),yt=m*Math.sin(j*Math.PI/2)+x;for(let wt=0,gt=A.length;wt<gt;wt++){let Nt=B(A[wt],X[wt],yt);at(Nt.x,Nt.y,-Z),j===0&&O.push(Nt)}for(let wt=0,gt=I;wt<gt;wt++){let Nt=D[wt];ht=ot[wt];let H=[];for(let te=0,Xt=Nt.length;te<Xt;te++){let N=B(Nt[te],ht[te],yt);at(N.x,N.y,-Z),j===0&&H.push(N)}j===0&&k.push(H)}}ct=Ms.triangulateShape(O,k)}let Et=ct.length,St=m+x;for(let O=0;O<F;O++){let k=u?B(L[O],tt[O],St):L[O];_?(E.copy(S.normals[0]).multiplyScalar(k.x),w.copy(S.binormals[0]).multiplyScalar(k.y),v.copy(y[0]).add(E).add(w),at(v.x,v.y,v.z)):at(k.x,k.y,0)}for(let O=1;O<=c;O++)for(let k=0;k<F;k++){let Y=u?B(L[k],tt[k],St):L[k];_?(E.copy(S.normals[O]).multiplyScalar(Y.x),w.copy(S.binormals[O]).multiplyScalar(Y.y),v.copy(y[O]).add(E).add(w),at(v.x,v.y,v.z)):at(Y.x,Y.y,d/c*O)}for(let O=p-1;O>=0;O--){let k=O/p,Y=f*Math.cos(k*Math.PI/2),j=m*Math.sin(k*Math.PI/2)+x;for(let Z=0,yt=A.length;Z<yt;Z++){let wt=B(A[Z],X[Z],j);at(wt.x,wt.y,d+Y)}for(let Z=0,yt=D.length;Z<yt;Z++){let wt=D[Z];ht=ot[Z];for(let gt=0,Nt=wt.length;gt<Nt;gt++){let H=B(wt[gt],ht[gt],j);_?at(H.x,H.y+y[c-1].y,y[c-1].x+Y):at(H.x,H.y,d+Y)}}}et(),dt();function et(){let O=s.length/3;if(u){let k=0,Y=F*k;for(let j=0;j<Et;j++){let Z=ct[j];nt(Z[2]+Y,Z[1]+Y,Z[0]+Y)}k=c+p*2,Y=F*k;for(let j=0;j<Et;j++){let Z=ct[j];nt(Z[0]+Y,Z[1]+Y,Z[2]+Y)}}else{for(let k=0;k<Et;k++){let Y=ct[k];nt(Y[2],Y[1],Y[0])}for(let k=0;k<Et;k++){let Y=ct[k];nt(Y[0]+F*c,Y[1]+F*c,Y[2]+F*c)}}i.addGroup(O,s.length/3-O,0)}function dt(){let O=s.length/3,k=0;V(A,k),k+=A.length;for(let Y=0,j=D.length;Y<j;Y++){let Z=D[Y];V(Z,k),k+=Z.length}i.addGroup(O,s.length/3-O,1)}function V(O,k){let Y=O.length;for(;--Y>=0;){let j=Y,Z=Y-1;Z<0&&(Z=O.length-1);for(let yt=0,wt=c+p*2;yt<wt;yt++){let gt=F*yt,Nt=F*(yt+1),H=k+j+gt,te=k+Z+gt,Xt=k+Z+Nt,N=k+j+Nt;xt(H,te,Xt,N)}}}function at(O,k,Y){l.push(O),l.push(k),l.push(Y)}function nt(O,k,Y){R(O),R(k),R(Y);let j=s.length/3,Z=M.generateTopUV(i,s,j-3,j-2,j-1);U(Z[0]),U(Z[1]),U(Z[2])}function xt(O,k,Y,j){R(O),R(k),R(j),R(k),R(Y),R(j);let Z=s.length/3,yt=M.generateSideWallUV(i,s,Z-6,Z-3,Z-2,Z-1);U(yt[0]),U(yt[1]),U(yt[3]),U(yt[1]),U(yt[2]),U(yt[3])}function R(O){s.push(l[O*3+0]),s.push(l[O*3+1]),s.push(l[O*3+2])}function U(O){r.push(O.x),r.push(O.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return tx(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ih[s.type]().fromJSON(s)),new n(i,t.options)}},Q0={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],h=t[s*3],c=t[s*3+1];return[new Mt(r,o),new Mt(a,l),new Mt(h,c)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[i*3],c=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],m=t[s*3+2],x=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-c)<Math.abs(o-h)?[new Mt(o,1-l),new Mt(h,1-d),new Mt(u,1-m),new Mt(x,1-g)]:[new Mt(a,1-l),new Mt(c,1-d),new Mt(f,1-m),new Mt(p,1-g)]}};function tx(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var So=class n extends Fe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),h=a+1,c=l+1,d=t/a,u=e/l,f=[],m=[],x=[],p=[];for(let g=0;g<c;g++){let M=g*u-o;for(let y=0;y<h;y++){let _=y*d-r;m.push(_,-M,0),x.push(0,0,1),p.push(y/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){let y=M+h*g,_=M+h*(g+1),S=M+1+h*(g+1),w=M+1+h*g;f.push(y,_,w),f.push(_,S,w)}this.setIndex(f),this.setAttribute("position",new _e(m,3)),this.setAttribute("normal",new _e(x,3)),this.setAttribute("uv",new _e(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var wo=class extends Qn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Gt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function Ds(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(yf(s))s.isRenderTargetTexture?(Yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(yf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function dn(n){let t={};for(let e=0;e<n.length;e++){let i=Ds(n[e]);for(let s in i)t[s]=i[s]}return t}function yf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ex(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ru(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var cp={clone:Ds,merge:dn},nx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ix=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nx,this.fragmentShader=ix,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=ex(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Gt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Mt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new z().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Le().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Kt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new me().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},hl=class extends Nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xe=class extends Qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$o,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Eo=class extends Qn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$o,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Al,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ul=class extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},dl=class extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var To=class extends br{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Ba(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}var ts=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fl=class extends ts{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eh,endingEnd:Eh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Th:r=t,a=2*e-i;break;case Ah:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Th:o=t,l=2*i-e;break;case Ah:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let h=(i-e)*.5,c=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-i),this._offsetPrev=r*c,this._offsetNext=o*c}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(i-e)/(s-e),x=m*m,p=x*m,g=-u*p+2*u*x-u*m,M=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*m+1,y=(-1-f)*p+(1.5+f)*x+.5*m,_=f*p-f*x;for(let S=0;S!==a;++S)r[S]=g*o[c+S]+M*o[h+S]+y*o[l+S]+_*o[d+S];return r}},pl=class extends ts{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=(i-e)/(s-e),d=1-c;for(let u=0;u!==a;++u)r[u]=o[h+u]*d+o[l+u]*c;return r}},ml=class extends ts{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},gl=class extends ts{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=this.inTangents,d=this.outTangents;if(!c||!d){let m=(i-e)/(s-e),x=1-m;for(let p=0;p!==a;++p)r[p]=o[h+p]*x+o[l+p]*m;return r}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let x=o[h+m],p=o[l+m],g=f*u+m*2,M=d[g],y=d[g+1],_=t*u+m*2,S=c[_],w=c[_+1],E=(i-e)/(s-e),v,T,L,D,P;for(let G=0;G<8;G++){v=E*E,T=v*E,L=1-E,D=L*L,P=D*L;let A=P*e+3*D*E*M+3*L*v*S+T*s-i;if(Math.abs(A)<1e-10)break;let B=3*D*(M-e)+6*L*E*(S-M)+3*v*(s-S);if(Math.abs(B)<1e-10)break;E=E-A/B,E=Math.max(0,Math.min(1,E))}r[m]=P*x+3*D*E*y+3*L*v*w+T*p}return r}},Dn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ba(e,this.TimeBufferType),this.values=Ba(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ba(t.times,Array),values:Ba(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new gl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Es:e=this.InterpolantFactoryMethodDiscrete;break;case mr:e=this.InterpolantFactoryMethodLinear;break;case Ha:e=this.InterpolantFactoryMethodSmooth;break;case wh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Yt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return mr;case this.InterpolantFactoryMethodSmooth:return Ha;case this.InterpolantFactoryMethodBezier:return wh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Qt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Qt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Qt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&qg(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){Qt("KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ha,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],c=t[a+1];if(h!==c&&(a!==1||h!==t[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let m=0;m!==i;++m){let x=e[d+m];if(x!==e[u+m]||x!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,h=0;h!==i;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=mr;var es=class extends Dn{constructor(t,e,i){super(t,e,i)}};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Es;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends Dn{constructor(t,e,i,s){super(t,e,i,s)}};xl.prototype.ValueTypeName="color";var _l=class extends Dn{constructor(t,e,i,s){super(t,e,i,s)}};_l.prototype.ValueTypeName="number";var yl=class extends ts{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),h=t*a;for(let c=h+a;h!==c;h+=4)gn.slerpFlat(r,0,o,h-a,o,h,l);return r}},Ao=class extends Dn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new yl(this.times,this.values,this.getValueSize(),t)}};Ao.prototype.ValueTypeName="quaternion";Ao.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends Dn{constructor(t,e,i){super(t,e,i)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Es;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends Dn{constructor(t,e,i,s){super(t,e,i,s)}};vl.prototype.ValueTypeName="vector";var Ml=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(c){a++,r===!1&&s.onStart!==void 0&&s.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,s.onProgress!==void 0&&s.onProgress(c,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return h.push(c,d),this},this.removeHandler=function(c){let d=h.indexOf(c);return d!==-1&&h.splice(d,2),this},this.getHandler=function(c){for(let d=0,u=h.length;d<u;d+=2){let f=h[d],m=h[d+1];if(f.global&&(f.lastIndex=0),f.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hp=new Ml,bl=class{constructor(t){this.manager=t!==void 0?t:hp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};bl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Is=class extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Co=class extends Is{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Sh=new me,vf=new z,Mf=new z,Sl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;vf.setFromMatrixPosition(t.matrixWorld),e.position.copy(vf),Mf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mf),e.updateMatrixWorld(),Sh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sh,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===gr||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},za=new z,Va=new gn,li=new z,Ro=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(za,Va,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,Va,li.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(za,Va,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,Va,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zi=new z,bf=new Mt,Sf=new Mt,sn=class extends Ro{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_r*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,bf,Sf),e.subVectors(Sf,bf)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Jr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/h,s*=o.width/l,i*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Dh=class extends Sl{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0}},Io=class extends Is{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Dh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Tr=class extends Ro{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Uh=class extends Sl{constructor(){super(new Tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ar=class extends Is{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new Uh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Po=class extends Is{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var cr=-90,hr=1,wl=class extends Je{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new sn(cr,hr,t,e);s.layers=this.layers,this.add(s);let r=new sn(cr,hr,t,e);r.layers=this.layers,this.add(r);let o=new sn(cr,hr,t,e);o.layers=this.layers,this.add(o);let a=new sn(cr,hr,t,e);a.layers=this.layers,this.add(a);let l=new sn(cr,hr,t,e);l.layers=this.layers,this.add(l);let h=new sn(cr,hr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===gr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,c]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(d,u,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},El=class extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ou="\\[\\]\\.:\\/",sx=new RegExp("["+ou+"]","g"),au="[^"+ou+"]",rx="[^"+ou.replace("\\.","")+"]",ox=/((?:WC+[\/:])*)/.source.replace("WC",au),ax=/(WCOD+)?/.source.replace("WCOD",rx),lx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",au),cx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",au),hx=new RegExp("^"+ox+ax+lx+cx+"$"),ux=["material","materials","bones","map"],Fh=class{constructor(t,e,i){let s=i||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ue=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sx,"")}static parseTrackName(t){let e=hx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ux.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Yt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){Qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;Qt("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=Fh;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fS=new Float32Array(1);var Lo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Yt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},Cr=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ie(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ie(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Oh=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};var No=class extends nl{constructor(t=10,e=10,i=4473924,s=8947848){i=new Gt(i),s=new Gt(s);let r=e/2,o=t/e,a=t/2,l=[],h=[];for(let u=0,f=0,m=-a;u<=e;u++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);let x=u===r?i:s;x.toArray(h,f),f+=3,x.toArray(h,f),f+=3,x.toArray(h,f),f+=3,x.toArray(h,f),f+=3}let c=new Fe;c.setAttribute("position",new _e(l,3)),c.setAttribute("color",new _e(h,3));let d=new br({vertexColors:!0,toneMapped:!1});super(c,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Do=class extends Kn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Yt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function lu(n,t,e,i){let s=dx(i);switch(e){case Qh:return n*t;case Dl:return n*t/s.components*s.byteLength;case Ul:return n*t/s.components*s.byteLength;case as:return n*t*2/s.components*s.byteLength;case Fl:return n*t*2/s.components*s.byteLength;case tu:return n*t*3/s.components*s.byteLength;case Mn:return n*t*4/s.components*s.byteLength;case Ol:return n*t*4/s.components*s.byteLength;case ko:case Bo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case zo:case Vo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Bl:case Vl:return Math.max(n,16)*Math.max(t,8)/4;case kl:case zl:return Math.max(n,8)*Math.max(t,8)/2;case Hl:case Gl:case Wl:case Xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case $l:case Ho:case ql:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Jl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case jl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case tc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ec:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case nc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ic:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case sc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case rc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case oc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ac:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case lc:case cc:case hc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case uc:case dc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Go:case fc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dx(n){switch(n){case vn:case Zh:return{byteLength:1,components:1};case Pr:case Jh:case pi:return{byteLength:2,components:1};case Ll:case Nl:return{byteLength:2,components:4};case ei:case Pl:case Gn:return{byteLength:4,components:1};case jh:case Kh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Np(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function fx(n){let t=new WeakMap;function e(a,l){let h=a.array,c=a.usage,d=h.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,h,c),a.onUploadCallback();let f;if(h instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=n.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=n.SHORT;else if(h instanceof Uint32Array)f=n.UNSIGNED_INT;else if(h instanceof Int32Array)f=n.INT;else if(h instanceof Int8Array)f=n.BYTE;else if(h instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,h){let c=l.array,d=l.updateRanges;if(n.bindBuffer(h,a),d.length===0)n.bufferSubData(h,0,c);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let x=d[f];n.bufferSubData(h,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var px=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mx=`#ifdef USE_ALPHAHASH
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
#endif`,gx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_x=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vx=`#ifdef USE_AOMAP
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
#endif`,Mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bx=`#ifdef USE_BATCHING
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
#endif`,Sx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ax=`#ifdef USE_IRIDESCENCE
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
#endif`,Cx=`#ifdef USE_BUMPMAP
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
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Dx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ox=`#define PI 3.141592653589793
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
} // validated`,kx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bx=`vec3 transformedNormal = objectNormal;
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
#endif`,zx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$x="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xx=`#ifdef USE_ENVMAP
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
#endif`,qx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yx=`#ifdef USE_ENVMAP
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
#endif`,Zx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jx=`#ifdef USE_ENVMAP
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
#endif`,jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e_=`#ifdef USE_GRADIENTMAP
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
}`,n_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,o_=`#ifdef USE_ENVMAP
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
#endif`,a_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u_=`PhysicalMaterial material;
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
#endif`,d_=`uniform sampler2D dfgLUT;
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
}`,f_=`
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
#endif`,p_=`#if defined( RE_IndirectDiffuse )
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
#endif`,m_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,x_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,__=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w_=`#if defined( USE_POINTS_UV )
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
#endif`,E_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I_=`#ifdef USE_MORPHTARGETS
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
#endif`,P_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,N_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,D_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,O_=`#ifdef USE_NORMALMAP
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
#endif`,k_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Q_=`float getShadowMask() {
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
}`,ty=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ey=`#ifdef USE_SKINNING
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
#endif`,ny=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iy=`#ifdef USE_SKINNING
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
#endif`,sy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ry=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ay=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ly=`#ifdef USE_TRANSMISSION
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
#endif`,cy=`#ifdef USE_TRANSMISSION
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
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,py=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,my=`uniform sampler2D t2D;
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
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vy=`#include <common>
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
}`,My=`#if DEPTH_PACKING == 3200
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
}`,by=`#define DISTANCE
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
}`,Sy=`#define DISTANCE
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
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ey=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`uniform float scale;
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
}`,Ay=`uniform vec3 diffuse;
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
}`,Cy=`#include <common>
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
}`,Ry=`uniform vec3 diffuse;
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
}`,Iy=`#define LAMBERT
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
}`,Py=`#define LAMBERT
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
}`,Ly=`#define MATCAP
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
}`,Ny=`#define MATCAP
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
}`,Dy=`#define NORMAL
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
}`,Uy=`#define NORMAL
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
}`,Fy=`#define PHONG
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
}`,Oy=`#define PHONG
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
}`,ky=`#define STANDARD
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
}`,By=`#define STANDARD
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
}`,zy=`#define TOON
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
}`,Vy=`#define TOON
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
}`,Hy=`uniform float size;
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
}`,Gy=`uniform vec3 diffuse;
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
}`,$y=`#include <common>
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
}`,Wy=`uniform vec3 color;
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
}`,Xy=`uniform float rotation;
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
}`,qy=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:px,alphahash_pars_fragment:mx,alphamap_fragment:gx,alphamap_pars_fragment:xx,alphatest_fragment:_x,alphatest_pars_fragment:yx,aomap_fragment:vx,aomap_pars_fragment:Mx,batching_pars_vertex:bx,batching_vertex:Sx,begin_vertex:wx,beginnormal_vertex:Ex,bsdfs:Tx,iridescence_fragment:Ax,bumpmap_pars_fragment:Cx,clipping_planes_fragment:Rx,clipping_planes_pars_fragment:Ix,clipping_planes_pars_vertex:Px,clipping_planes_vertex:Lx,color_fragment:Nx,color_pars_fragment:Dx,color_pars_vertex:Ux,color_vertex:Fx,common:Ox,cube_uv_reflection_fragment:kx,defaultnormal_vertex:Bx,displacementmap_pars_vertex:zx,displacementmap_vertex:Vx,emissivemap_fragment:Hx,emissivemap_pars_fragment:Gx,colorspace_fragment:$x,colorspace_pars_fragment:Wx,envmap_fragment:Xx,envmap_common_pars_fragment:qx,envmap_pars_fragment:Yx,envmap_pars_vertex:Zx,envmap_physical_pars_fragment:o_,envmap_vertex:Jx,fog_vertex:jx,fog_pars_vertex:Kx,fog_fragment:Qx,fog_pars_fragment:t_,gradientmap_pars_fragment:e_,lightmap_pars_fragment:n_,lights_lambert_fragment:i_,lights_lambert_pars_fragment:s_,lights_pars_begin:r_,lights_toon_fragment:a_,lights_toon_pars_fragment:l_,lights_phong_fragment:c_,lights_phong_pars_fragment:h_,lights_physical_fragment:u_,lights_physical_pars_fragment:d_,lights_fragment_begin:f_,lights_fragment_maps:p_,lights_fragment_end:m_,lightprobes_pars_fragment:g_,logdepthbuf_fragment:x_,logdepthbuf_pars_fragment:__,logdepthbuf_pars_vertex:y_,logdepthbuf_vertex:v_,map_fragment:M_,map_pars_fragment:b_,map_particle_fragment:S_,map_particle_pars_fragment:w_,metalnessmap_fragment:E_,metalnessmap_pars_fragment:T_,morphinstance_vertex:A_,morphcolor_vertex:C_,morphnormal_vertex:R_,morphtarget_pars_vertex:I_,morphtarget_vertex:P_,normal_fragment_begin:L_,normal_fragment_maps:N_,normal_pars_fragment:D_,normal_pars_vertex:U_,normal_vertex:F_,normalmap_pars_fragment:O_,clearcoat_normal_fragment_begin:k_,clearcoat_normal_fragment_maps:B_,clearcoat_pars_fragment:z_,iridescence_pars_fragment:V_,opaque_fragment:H_,packing:G_,premultiplied_alpha_fragment:$_,project_vertex:W_,dithering_fragment:X_,dithering_pars_fragment:q_,roughnessmap_fragment:Y_,roughnessmap_pars_fragment:Z_,shadowmap_pars_fragment:J_,shadowmap_pars_vertex:j_,shadowmap_vertex:K_,shadowmask_pars_fragment:Q_,skinbase_vertex:ty,skinning_pars_vertex:ey,skinning_vertex:ny,skinnormal_vertex:iy,specularmap_fragment:sy,specularmap_pars_fragment:ry,tonemapping_fragment:oy,tonemapping_pars_fragment:ay,transmission_fragment:ly,transmission_pars_fragment:cy,uv_pars_fragment:hy,uv_pars_vertex:uy,uv_vertex:dy,worldpos_vertex:fy,background_vert:py,background_frag:my,backgroundCube_vert:gy,backgroundCube_frag:xy,cube_vert:_y,cube_frag:yy,depth_vert:vy,depth_frag:My,distance_vert:by,distance_frag:Sy,equirect_vert:wy,equirect_frag:Ey,linedashed_vert:Ty,linedashed_frag:Ay,meshbasic_vert:Cy,meshbasic_frag:Ry,meshlambert_vert:Iy,meshlambert_frag:Py,meshmatcap_vert:Ly,meshmatcap_frag:Ny,meshnormal_vert:Dy,meshnormal_frag:Uy,meshphong_vert:Fy,meshphong_frag:Oy,meshphysical_vert:ky,meshphysical_frag:By,meshtoon_vert:zy,meshtoon_frag:Vy,points_vert:Hy,points_frag:Gy,shadow_vert:$y,shadow_frag:Wy,sprite_vert:Xy,sprite_frag:qy},Lt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},xi={basic:{uniforms:dn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:dn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:dn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:dn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:dn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:dn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:dn([Lt.points,Lt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:dn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:dn([Lt.common,Lt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:dn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:dn([Lt.sprite,Lt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:dn([Lt.common,Lt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:dn([Lt.lights,Lt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};xi.physical={uniforms:dn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var gc={r:0,b:0,g:0},Yy=new me,Dp=new Kt;Dp.set(-1,0,0,0,1,0,0,0,1);function Zy(n,t,e,i,s,r){let o=new Gt(0),a=s===!0?0:1,l,h,c=null,d=0,u=null;function f(M){let y=M.isScene===!0?M.background:null;if(y&&y.isTexture){let _=M.backgroundBlurriness>0;y=t.get(y,_)}return y}function m(M){let y=!1,_=f(M);_===null?p(o,a):_&&_.isColor&&(p(_,1),y=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(M,y){let _=f(y);_&&(_.isCubeTexture||_.mapping===Oo)?(h===void 0&&(h=new jt(new rn(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Ds(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(y.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Dp),h.material.toneMapped=oe.getTransfer(_.colorSpace)!==xe,(c!==_||d!==_.version||u!==n.toneMapping)&&(h.material.needsUpdate=!0,c=_,d=_.version,u=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new jt(new So(2,2),new Nn({name:"BackgroundMaterial",uniforms:Ds(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=oe.getTransfer(_.colorSpace)!==xe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(c!==_||d!==_.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,c=_,d=_.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,y){M.getRGB(gc,ru(n)),e.buffers.color.setClear(gc.r,gc.g,gc.b,y,r)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,y=1){o.set(M),a=y,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,p(o,a)},render:m,addToRenderList:x,dispose:g}}function Jy(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(D,P,G,I,A){let B=!1,F=d(D,I,G,P);r!==F&&(r=F,h(r.object)),B=f(D,I,G,A),B&&m(D,I,G,A),A!==null&&t.update(A,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,_(D,P,G,I),A!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(A).buffer))}function l(){return n.createVertexArray()}function h(D){return n.bindVertexArray(D)}function c(D){return n.deleteVertexArray(D)}function d(D,P,G,I){let A=I.wireframe===!0,B=i[P.id];B===void 0&&(B={},i[P.id]=B);let F=D.isInstancedMesh===!0?D.id:0,$=B[F];$===void 0&&($={},B[F]=$);let X=$[G.id];X===void 0&&(X={},$[G.id]=X);let ot=X[A];return ot===void 0&&(ot=u(l()),X[A]=ot),ot}function u(D){let P=[],G=[],I=[];for(let A=0;A<e;A++)P[A]=0,G[A]=0,I[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,P,G,I){let A=r.attributes,B=P.attributes,F=0,$=G.getAttributes();for(let X in $)if($[X].location>=0){let ht=A[X],tt=B[X];if(tt===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor)),ht===void 0||ht.attribute!==tt||tt&&ht.data!==tt.data)return!0;F++}return r.attributesNum!==F||r.index!==I}function m(D,P,G,I){let A={},B=P.attributes,F=0,$=G.getAttributes();for(let X in $)if($[X].location>=0){let ht=B[X];ht===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(ht=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(ht=D.instanceColor));let tt={};tt.attribute=ht,ht&&ht.data&&(tt.data=ht.data),A[X]=tt,F++}r.attributes=A,r.attributesNum=F,r.index=I}function x(){let D=r.newAttributes;for(let P=0,G=D.length;P<G;P++)D[P]=0}function p(D){g(D,0)}function g(D,P){let G=r.newAttributes,I=r.enabledAttributes,A=r.attributeDivisors;G[D]=1,I[D]===0&&(n.enableVertexAttribArray(D),I[D]=1),A[D]!==P&&(n.vertexAttribDivisor(D,P),A[D]=P)}function M(){let D=r.newAttributes,P=r.enabledAttributes;for(let G=0,I=P.length;G<I;G++)P[G]!==D[G]&&(n.disableVertexAttribArray(G),P[G]=0)}function y(D,P,G,I,A,B,F){F===!0?n.vertexAttribIPointer(D,P,G,A,B):n.vertexAttribPointer(D,P,G,I,A,B)}function _(D,P,G,I){x();let A=I.attributes,B=G.getAttributes(),F=P.defaultAttributeValues;for(let $ in B){let X=B[$];if(X.location>=0){let ot=A[$];if(ot===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(ot=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(ot=D.instanceColor)),ot!==void 0){let ht=ot.normalized,tt=ot.itemSize,ct=t.get(ot);if(ct===void 0)continue;let Et=ct.buffer,St=ct.type,et=ct.bytesPerElement,dt=St===n.INT||St===n.UNSIGNED_INT||ot.gpuType===Pl;if(ot.isInterleavedBufferAttribute){let V=ot.data,at=V.stride,nt=ot.offset;if(V.isInstancedInterleavedBuffer){for(let xt=0;xt<X.locationSize;xt++)g(X.location+xt,V.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let xt=0;xt<X.locationSize;xt++)p(X.location+xt);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let xt=0;xt<X.locationSize;xt++)y(X.location+xt,tt/X.locationSize,St,ht,at*et,(nt+tt/X.locationSize*xt)*et,dt)}else{if(ot.isInstancedBufferAttribute){for(let V=0;V<X.locationSize;V++)g(X.location+V,ot.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let V=0;V<X.locationSize;V++)p(X.location+V);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let V=0;V<X.locationSize;V++)y(X.location+V,tt/X.locationSize,St,ht,tt*et,tt/X.locationSize*V*et,dt)}}else if(F!==void 0){let ht=F[$];if(ht!==void 0)switch(ht.length){case 2:n.vertexAttrib2fv(X.location,ht);break;case 3:n.vertexAttrib3fv(X.location,ht);break;case 4:n.vertexAttrib4fv(X.location,ht);break;default:n.vertexAttrib1fv(X.location,ht)}}}}M()}function S(){T();for(let D in i){let P=i[D];for(let G in P){let I=P[G];for(let A in I){let B=I[A];for(let F in B)c(B[F].object),delete B[F];delete I[A]}}delete i[D]}}function w(D){if(i[D.id]===void 0)return;let P=i[D.id];for(let G in P){let I=P[G];for(let A in I){let B=I[A];for(let F in B)c(B[F].object),delete B[F];delete I[A]}}delete i[D.id]}function E(D){for(let P in i){let G=i[P];for(let I in G){let A=G[I];if(A[D.id]===void 0)continue;let B=A[D.id];for(let F in B)c(B[F].object),delete B[F];delete A[D.id]}}}function v(D){for(let P in i){let G=i[P],I=D.isInstancedMesh===!0?D.id:0,A=G[I];if(A!==void 0){for(let B in A){let F=A[B];for(let $ in F)c(F[$].object),delete F[$];delete A[B]}delete G[I],Object.keys(G).length===0&&delete i[P]}}}function T(){L(),o=!0,r!==s&&(r=s,h(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:L,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:p,disableUnusedAttributes:M}}function jy(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,c){c!==0&&(n.drawArraysInstanced(i,l,h,c),e.update(h,i,c))}function a(l,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,c);let u=0;for(let f=0;f<c;f++)u+=h[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ky(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Mn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let v=E===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==vn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Gn&&!v)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",c=l(h);c!==h&&(Yt("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:_,maxSamples:S,samples:w}}function Qy(n){let t=this,e=null,i=0,s=!1,r=!1,o=new yn,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=c(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,g=n.get(d);if(!s||m===null||m.length===0||r&&!p)r?c(null):h();else{let M=r?0:i,y=M*4,_=g.clippingState||null;l.value=_,_=c(m,u,y,f);for(let S=0;S!==y;++S)_[S]=e[S];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(d,u,f,m){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=l.value,m!==!0||p===null){let g=f+x*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let y=0,_=f;y!==x;++y,_+=4)o.copy(d[y]).applyMatrix4(M,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}var ls=4,up=[.125,.215,.35,.446,.526,.582],Us=20,tv=256,Wo=new Tr,dp=new Gt,cu=null,hu=0,uu=0,du=!1,ev=new z,Ur=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=ev}=r;cu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(cu,hu,uu),this._renderer.xr.enabled=du,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rs||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:pi,format:Mn,colorSpace:to,depthBuffer:!1},s=fp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fp(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=nv(r)),this._blurMaterial=sv(r,t,e),this._ggxMaterial=iv(r,t,e)}return s}_compileMaterial(t){let e=new jt(new Fe,t);this._renderer.compile(e,Wo)}_sceneToCubeUV(t,e,i,s,r){let l=new sn(90,1,e,i),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(dp),d.toneMapping=ti,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jt(new rn,new As({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,p=x.material,g=!1,M=t.background;M?M.isColor&&(p.color.copy(M),t.background=null,g=!0):(p.color.copy(dp),g=!0);for(let y=0;y<6;y++){let _=y%3;_===0?(l.up.set(0,h[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+c[y],r.y,r.z)):_===1?(l.up.set(0,0,h[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+c[y],r.z)):(l.up.set(0,h[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+c[y]));let S=this._cubeSize;Nr(s,_*S,y>2?S:0,S,S),d.setRenderTarget(s),g&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===rs||t.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Nr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Wo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,h=i/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),d=Math.sqrt(h*h-c*c),u=0+h*1.25,f=d*u,{_lodMax:m}=this,x=this._sizeLods[i],p=3*x*(i>m-ls?i-m+ls:0),g=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,Nr(r,p,g,3*x,2*x),s.setRenderTarget(r),s.render(a,Wo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,Nr(t,p,g,3*x,2*x),s.setRenderTarget(t),s.render(a,Wo)}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Qt("blur direction must be either latitudinal or longitudinal!");let c=3,d=this._lodMeshes[s];d.material=h;let u=h.uniforms,f=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Us-1),x=r/m,p=isFinite(r)?1+Math.floor(c*x):Us;p>Us&&Yt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Us}`);let g=[],M=0;for(let E=0;E<Us;++E){let v=E/x,T=Math.exp(-v*v/2);g.push(T),E===0?M+=T:E<p&&(M+=2*T)}for(let E=0;E<g.length;E++)g[E]=g[E]/M;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-i;let _=this._sizeLods[s],S=3*_*(s>y-ls?s-y+ls:0),w=4*(this._cubeSize-_);Nr(e,S,w,3*_,2*_),l.setRenderTarget(e),l.render(d,Wo)}};function nv(n){let t=[],e=[],i=[],s=n,r=n-ls+1+up.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ls?l=up[o-n+ls-1]:o===0&&(l=0),e.push(l);let h=1/(a-2),c=-h,d=1+h,u=[c,c,d,c,d,d,c,c,d,d,c,d],f=6,m=6,x=3,p=2,g=1,M=new Float32Array(x*m*f),y=new Float32Array(p*m*f),_=new Float32Array(g*m*f);for(let w=0;w<f;w++){let E=w%3*2/3-1,v=w>2?0:-1,T=[E,v,0,E+2/3,v,0,E+2/3,v+1,0,E,v,0,E+2/3,v+1,0,E,v+1,0];M.set(T,x*m*w),y.set(u,p*m*w);let L=[w,w,w,w,w,w];_.set(L,g*m*w)}let S=new Fe;S.setAttribute("position",new Pe(M,x)),S.setAttribute("uv",new Pe(y,p)),S.setAttribute("faceIndex",new Pe(_,g)),i.push(new jt(S,null)),s>ls&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function fp(n,t,e){let i=new Rn(n,t,e);return i.texture.mapping=Oo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Nr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function iv(n,t,e){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function sv(n,t,e){let i=new Float32Array(Us),s=new z(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function pp(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function mp(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function vc(){return`

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
	`}var _c=class extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ho(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rn(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:di});r.uniforms.tEquirect.value=e;let o=new jt(s,r),a=e.minFilter;return e.minFilter===fi&&(e.minFilter=Ze),new wl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function rv(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Cl||f===Rl)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new _c(m.height);return x.fromEquirectangularTexture(n,u),t.set(u,x),u.addEventListener("dispose",h),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,m=f===Cl||f===Rl,x=f===rs||f===Ps;if(m||x){let p=e.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new Ur(n)),p=m?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let M=u.image;return m&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new Ur(n)),p=m?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",c),p.texture):null}}}return u}function a(u,f){return f===Cl?u.mapping=rs:f===Rl&&(u.mapping=Ps),u}function l(u){let f=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&f++;return f===m}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function ov(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&bs("WebGLRenderer: "+i+" extension not supported."),s}}}function av(n,t,e,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],n.ARRAY_BUFFER)}function h(d){let u=[],f=d.index,m=d.attributes.position,x=0;if(m===void 0)return;if(f!==null){let M=f.array;x=f.version;for(let y=0,_=M.length;y<_;y+=3){let S=M[y+0],w=M[y+1],E=M[y+2];u.push(S,w,w,E,E,S)}}else{let M=m.array;x=m.version;for(let y=0,_=M.length/3-1;y<_;y+=3){let S=y+0,w=y+1,E=y+2;u.push(S,w,w,E,E,S)}}let p=new(m.count>=65535?oo:ro)(u,1);p.version=x;let g=r.get(d);g&&t.remove(g),r.set(d,p)}function c(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&h(d)}else h(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function lv(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*o),e.update(u,i,1)}function h(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*o,f),e.update(u,i,f))}function c(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let x=0;for(let p=0;p<f;p++)x+=u[p];e.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function cv(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Qt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function hv(n,t,e){let i=new WeakMap,s=new Le;function r(o,a,l){let h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0,u=i.get(a);if(u===void 0||u.count!==d){let T=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],y=0;f===!0&&(y=1),m===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,S=1;_>t.maxTextureSize&&(S=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*S*4*d),E=new io(w,_,S,d);E.type=Gn,E.needsUpdate=!0;let v=y*4;for(let L=0;L<d;L++){let D=p[L],P=g[L],G=M[L],I=_*S*4*L;for(let A=0;A<D.count;A++){let B=A*v;f===!0&&(s.fromBufferAttribute(D,A),w[I+B+0]=s.x,w[I+B+1]=s.y,w[I+B+2]=s.z,w[I+B+3]=0),m===!0&&(s.fromBufferAttribute(P,A),w[I+B+4]=s.x,w[I+B+5]=s.y,w[I+B+6]=s.z,w[I+B+7]=0),x===!0&&(s.fromBufferAttribute(G,A),w[I+B+8]=s.x,w[I+B+9]=s.y,w[I+B+10]=s.z,w[I+B+11]=G.itemSize===4?s.w:1)}}u={count:d,texture:E,size:new Mt(_,S)},i.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<h.length;x++)f+=h[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function uv(n,t,e,i,s){let r=new WeakMap;function o(h){let c=s.render.frame,d=h.geometry,u=t.get(h,d);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==c&&(e.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,n.ARRAY_BUFFER),r.set(h,c))),h.isSkinnedMesh){let f=h.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function a(){r=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:a}}var dv={[Hh]:"LINEAR_TONE_MAPPING",[Gh]:"REINHARD_TONE_MAPPING",[$h]:"CINEON_TONE_MAPPING",[Fo]:"ACES_FILMIC_TONE_MAPPING",[Xh]:"AGX_TONE_MAPPING",[qh]:"NEUTRAL_TONE_MAPPING",[Wh]:"CUSTOM_TONE_MAPPING"};function fv(n,t,e,i,s,r){let o=new Rn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new Ri(t,e):void 0}),a=new Rn(t,e,{type:pi,depthBuffer:!1,stencilBuffer:!1}),l=new Fe;l.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new _e([0,2,0,0,2,0],2));let h=new hl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new jt(l,h),d=new Tr(-1,1,1,-1,0,1),u=null,f=null,m=!1,x,p=null,g=[],M=!1;this.setSize=function(y,_){o.setSize(y,_),a.setSize(y,_);for(let S=0;S<g.length;S++){let w=g[S];w.setSize&&w.setSize(y,_)}},this.setEffects=function(y){g=y,M=g.length>0&&g[0].isRenderPass===!0;let _=o.width,S=o.height;for(let w=0;w<g.length;w++){let E=g[w];E.setSize&&E.setSize(_,S)}},this.begin=function(y,_){if(m||y.toneMapping===ti&&g.length===0)return!1;if(p=_,_!==null){let S=_.width,w=_.height;(o.width!==S||o.height!==w)&&this.setSize(S,w)}return M===!1&&y.setRenderTarget(o),x=y.toneMapping,y.toneMapping=ti,!0},this.hasRenderPass=function(){return M},this.end=function(y,_){y.toneMapping=x,m=!0;let S=o,w=a;for(let E=0;E<g.length;E++){let v=g[E];if(v.enabled!==!1&&(v.render(y,w,S,_),v.needsSwap!==!1)){let T=S;S=w,w=T}}if(u!==y.outputColorSpace||f!==y.toneMapping){u=y.outputColorSpace,f=y.toneMapping,h.defines={},oe.getTransfer(u)===xe&&(h.defines.SRGB_TRANSFER="");let E=dv[f];E&&(h.defines[E]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(p),y.render(c,d),p=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),h.dispose()}}var Up=new xn,mu=new Ri(1,1),Fp=new io,Op=new Qa,kp=new ho,gp=[],xp=[],_p=new Float32Array(16),yp=new Float32Array(9),vp=new Float32Array(4);function Fr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=gp[s];if(r===void 0&&(r=new Float32Array(s),gp[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Qe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Mc(n,t){let e=xp[t];e===void 0&&(e=new Int32Array(t),xp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function pv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function mv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2fv(this.addr,t),Qe(e,t)}}function gv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;n.uniform3fv(this.addr,t),Qe(e,t)}}function xv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4fv(this.addr,t),Qe(e,t)}}function _v(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(Ke(e,i))return;vp.set(i),n.uniformMatrix2fv(this.addr,!1,vp),Qe(e,i)}}function yv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(Ke(e,i))return;yp.set(i),n.uniformMatrix3fv(this.addr,!1,yp),Qe(e,i)}}function vv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(Ke(e,i))return;_p.set(i),n.uniformMatrix4fv(this.addr,!1,_p),Qe(e,i)}}function Mv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function bv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2iv(this.addr,t),Qe(e,t)}}function Sv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;n.uniform3iv(this.addr,t),Qe(e,t)}}function wv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4iv(this.addr,t),Qe(e,t)}}function Ev(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Tv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2uiv(this.addr,t),Qe(e,t)}}function Av(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;n.uniform3uiv(this.addr,t),Qe(e,t)}}function Cv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4uiv(this.addr,t),Qe(e,t)}}function Rv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(mu.compareFunction=e.isReversedDepthBuffer()?mc:pc,r=mu):r=Up,e.setTexture2D(t||r,s)}function Iv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Op,s)}function Pv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||kp,s)}function Lv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Fp,s)}function Nv(n){switch(n){case 5126:return pv;case 35664:return mv;case 35665:return gv;case 35666:return xv;case 35674:return _v;case 35675:return yv;case 35676:return vv;case 5124:case 35670:return Mv;case 35667:case 35671:return bv;case 35668:case 35672:return Sv;case 35669:case 35673:return wv;case 5125:return Ev;case 36294:return Tv;case 36295:return Av;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Rv;case 35679:case 36299:case 36307:return Iv;case 35680:case 36300:case 36308:case 36293:return Pv;case 36289:case 36303:case 36311:case 36292:return Lv}}function Dv(n,t){n.uniform1fv(this.addr,t)}function Uv(n,t){let e=Fr(t,this.size,2);n.uniform2fv(this.addr,e)}function Fv(n,t){let e=Fr(t,this.size,3);n.uniform3fv(this.addr,e)}function Ov(n,t){let e=Fr(t,this.size,4);n.uniform4fv(this.addr,e)}function kv(n,t){let e=Fr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Bv(n,t){let e=Fr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function zv(n,t){let e=Fr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Vv(n,t){n.uniform1iv(this.addr,t)}function Hv(n,t){n.uniform2iv(this.addr,t)}function Gv(n,t){n.uniform3iv(this.addr,t)}function $v(n,t){n.uniform4iv(this.addr,t)}function Wv(n,t){n.uniform1uiv(this.addr,t)}function Xv(n,t){n.uniform2uiv(this.addr,t)}function qv(n,t){n.uniform3uiv(this.addr,t)}function Yv(n,t){n.uniform4uiv(this.addr,t)}function Zv(n,t,e){let i=this.cache,s=t.length,r=Mc(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=mu:o=Up;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Jv(n,t,e){let i=this.cache,s=t.length,r=Mc(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Op,r[o])}function jv(n,t,e){let i=this.cache,s=t.length,r=Mc(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||kp,r[o])}function Kv(n,t,e){let i=this.cache,s=t.length,r=Mc(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Qe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Fp,r[o])}function Qv(n){switch(n){case 5126:return Dv;case 35664:return Uv;case 35665:return Fv;case 35666:return Ov;case 35674:return kv;case 35675:return Bv;case 35676:return zv;case 5124:case 35670:return Vv;case 35667:case 35671:return Hv;case 35668:case 35672:return Gv;case 35669:case 35673:return $v;case 5125:return Wv;case 36294:return Xv;case 36295:return qv;case 36296:return Yv;case 35678:case 36198:case 36298:case 36306:case 35682:return Zv;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return jv;case 36289:case 36303:case 36311:case 36292:return Kv}}var gu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Nv(e.type)}},xu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qv(e.type)}},_u=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},fu=/(\w+)(\])?(\[|\.)?/g;function Mp(n,t){n.seq.push(t),n.map[t.id]=t}function tM(n,t,e){let i=n.name,s=i.length;for(fu.lastIndex=0;;){let r=fu.exec(i),o=fu.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){Mp(e,h===void 0?new gu(a,n,t):new xu(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new _u(a),Mp(e,d)),e=d}}}var Dr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);tM(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function bp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var eM=37297,nM=0;function iM(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Sp=new Kt;function sM(n){oe._getMatrix(Sp,oe.workingColorSpace,n);let t=`mat3( ${Sp.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(n)){case eo:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return Yt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function wp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+iM(n.getShaderSource(t),a)}else return r}function rM(n,t){let e=sM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var oM={[Hh]:"Linear",[Gh]:"Reinhard",[$h]:"Cineon",[Fo]:"ACESFilmic",[Xh]:"AgX",[qh]:"Neutral",[Wh]:"Custom"};function aM(n,t){let e=oM[t];return e===void 0?(Yt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var xc=new z;function lM(){oe.getLuminanceCoefficients(xc);let n=xc.x.toFixed(4),t=xc.y.toFixed(4),e=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function hM(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function uM(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function qo(n){return n!==""}function Ep(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var dM=/^[ \t]*#include +<([\w\d./]+)>/gm;function yu(n){return n.replace(dM,pM)}var fM=new Map;function pM(n,t){let e=se[t];if(e===void 0){let i=fM.get(t);if(i!==void 0)e=se[i],Yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return yu(e)}var mM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ap(n){return n.replace(mM,gM)}function gM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cp(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var xM={[Uo]:"SHADOWMAP_TYPE_PCF",[Rr]:"SHADOWMAP_TYPE_VSM"};function _M(n){return xM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var yM={[rs]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE",[Oo]:"ENVMAP_TYPE_CUBE_UV"};function vM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":yM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var MM={[Ps]:"ENVMAP_MODE_REFRACTION"};function bM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":MM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var SM={[Al]:"ENVMAP_BLENDING_MULTIPLY",[$f]:"ENVMAP_BLENDING_MIX",[Wf]:"ENVMAP_BLENDING_ADD"};function wM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":SM[n.combine]||"ENVMAP_BLENDING_NONE"}function EM(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function TM(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=_M(e),h=vM(e),c=bM(e),d=wM(e),u=EM(e),f=cM(e),m=hM(r),x=s.createProgram(),p,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(qo).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(qo).join(`
`),g.length>0&&(g+=`
`)):(p=[Cp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),g=[Cp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?se.tonemapping_pars_fragment:"",e.toneMapping!==ti?aM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,rM("linearToOutputTexel",e.outputColorSpace),lM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qo).join(`
`)),o=yu(o),o=Ep(o,e),o=Tp(o,e),a=yu(a),a=Ep(a,e),a=Tp(a,e),o=Ap(o),a=Ap(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=M+p+o,_=M+g+a,S=bp(s,s.VERTEX_SHADER,y),w=bp(s,s.FRAGMENT_SHADER,_);s.attachShader(x,S),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(D){if(n.debug.checkShaderErrors){let P=s.getProgramInfoLog(x)||"",G=s.getShaderInfoLog(S)||"",I=s.getShaderInfoLog(w)||"",A=P.trim(),B=G.trim(),F=I.trim(),$=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,S,w);else{let ot=wp(s,S,"vertex"),ht=wp(s,w,"fragment");Qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+A+`
`+ot+`
`+ht)}else A!==""?Yt("WebGLProgram: Program Info Log:",A):(B===""||F==="")&&(X=!1);X&&(D.diagnostics={runnable:$,programLog:A,vertexShader:{log:B,prefix:p},fragmentShader:{log:F,prefix:g}})}s.deleteShader(S),s.deleteShader(w),v=new Dr(s,x),T=uM(s,x)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(x,eM)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=nM++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=w,this}var AM=0,vu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Mu(t),e.set(t,i)),i}},Mu=class{constructor(t){this.id=AM++,this.code=t,this.usedTimes=0}};function CM(n){return n===as||n===Ho||n===Go}function RM(n,t,e,i,s,r){let o=new so,a=new vu,l=new Set,h=[],c=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,T,L,D,P,G){let I=D.fog,A=P.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,$=t.get(v.envMap||B,F),X=$&&$.mapping===Oo?$.image.height:null,ot=f[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Yt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let ht=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,tt=ht!==void 0?ht.length:0,ct=0;A.morphAttributes.position!==void 0&&(ct=1),A.morphAttributes.normal!==void 0&&(ct=2),A.morphAttributes.color!==void 0&&(ct=3);let Et,St,et,dt;if(ot){let Bt=xi[ot];Et=Bt.vertexShader,St=Bt.fragmentShader}else{Et=v.vertexShader,St=v.fragmentShader;let Bt=a.getVertexShaderStage(v),ke=a.getFragmentShaderStage(v);a.update(v,Bt,ke),et=Bt.id,dt=ke.id}let V=n.getRenderTarget(),at=n.state.buffers.depth.getReversed(),nt=P.isInstancedMesh===!0,xt=P.isBatchedMesh===!0,R=!!v.map,U=!!v.matcap,O=!!$,k=!!v.aoMap,Y=!!v.lightMap,j=!!v.bumpMap&&v.wireframe===!1,Z=!!v.normalMap,yt=!!v.displacementMap,wt=!!v.emissiveMap,gt=!!v.metalnessMap,Nt=!!v.roughnessMap,H=v.anisotropy>0,te=v.clearcoat>0,Xt=v.dispersion>0,N=v.iridescence>0,b=v.sheen>0,Q=v.transmission>0,it=H&&!!v.anisotropyMap,ut=te&&!!v.clearcoatMap,vt=te&&!!v.clearcoatNormalMap,bt=te&&!!v.clearcoatRoughnessMap,ft=N&&!!v.iridescenceMap,pt=N&&!!v.iridescenceThicknessMap,Tt=b&&!!v.sheenColorMap,zt=b&&!!v.sheenRoughnessMap,It=!!v.specularMap,At=!!v.specularColorMap,$t=!!v.specularIntensityMap,Jt=Q&&!!v.transmissionMap,ee=Q&&!!v.thicknessMap,q=!!v.gradientMap,Ct=!!v.alphaMap,mt=v.alphaTest>0,Pt=!!v.alphaHash,Ft=!!v.extensions,_t=ti;v.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(_t=n.toneMapping);let Ht={shaderID:ot,shaderType:v.type,shaderName:v.name,vertexShader:Et,fragmentShader:St,defines:v.defines,customVertexShaderID:et,customFragmentShaderID:dt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:xt,batchingColor:xt&&P._colorsTexture!==null,instancing:nt,instancingColor:nt&&P.instanceColor!==null,instancingMorph:nt&&P.morphTexture!==null,outputColorSpace:V===null?n.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:R,matcap:U,envMap:O,envMapMode:O&&$.mapping,envMapCubeUVHeight:X,aoMap:k,lightMap:Y,bumpMap:j,normalMap:Z,displacementMap:yt,emissiveMap:wt,normalMapObjectSpace:Z&&v.normalMapType===qf,normalMapTangentSpace:Z&&v.normalMapType===$o,packedNormalMap:Z&&v.normalMapType===$o&&CM(v.normalMap.format),metalnessMap:gt,roughnessMap:Nt,anisotropy:H,anisotropyMap:it,clearcoat:te,clearcoatMap:ut,clearcoatNormalMap:vt,clearcoatRoughnessMap:bt,dispersion:Xt,iridescence:N,iridescenceMap:ft,iridescenceThicknessMap:pt,sheen:b,sheenColorMap:Tt,sheenRoughnessMap:zt,specularMap:It,specularColorMap:At,specularIntensityMap:$t,transmission:Q,transmissionMap:Jt,thicknessMap:ee,gradientMap:q,opaque:v.transparent===!1&&v.blending===Ss&&v.alphaToCoverage===!1,alphaMap:Ct,alphaTest:mt,alphaHash:Pt,combine:v.combine,mapUv:R&&m(v.map.channel),aoMapUv:k&&m(v.aoMap.channel),lightMapUv:Y&&m(v.lightMap.channel),bumpMapUv:j&&m(v.bumpMap.channel),normalMapUv:Z&&m(v.normalMap.channel),displacementMapUv:yt&&m(v.displacementMap.channel),emissiveMapUv:wt&&m(v.emissiveMap.channel),metalnessMapUv:gt&&m(v.metalnessMap.channel),roughnessMapUv:Nt&&m(v.roughnessMap.channel),anisotropyMapUv:it&&m(v.anisotropyMap.channel),clearcoatMapUv:ut&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:vt&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:zt&&m(v.sheenRoughnessMap.channel),specularMapUv:It&&m(v.specularMap.channel),specularColorMapUv:At&&m(v.specularColorMap.channel),specularIntensityMapUv:$t&&m(v.specularIntensityMap.channel),transmissionMapUv:Jt&&m(v.transmissionMap.channel),thicknessMapUv:ee&&m(v.thicknessMap.channel),alphaMapUv:Ct&&m(v.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(Z||H),vertexNormals:!!A.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!A.attributes.uv&&(R||Ct),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||A.attributes.normal===void 0&&Z===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:at,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:ct,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:_t,decodeVideoTexture:R&&v.map.isVideoTexture===!0&&oe.getTransfer(v.map.colorSpace)===xe,decodeVideoTextureEmissive:wt&&v.emissiveMap.isVideoTexture===!0&&oe.getTransfer(v.emissiveMap.colorSpace)===xe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===un,flipSided:v.side===je,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ft&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&v.extensions.multiDraw===!0||xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function p(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let L in v.defines)T.push(L),T.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(g(T,v),M(T,v),T.push(n.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function g(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function y(v){let T=f[v.type],L;if(T){let D=xi[T];L=cp.clone(D.uniforms)}else L=v.uniforms;return L}function _(v,T){let L=c.get(T);return L!==void 0?++L.usedTimes:(L=new TM(n,T,v,s),h.push(L),c.set(T,L)),L}function S(v){if(--v.usedTimes===0){let T=h.indexOf(v);h[T]=h[h.length-1],h.pop(),c.delete(v.cacheKey),v.destroy()}}function w(v){a.remove(v)}function E(){a.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:y,acquireProgram:_,releaseProgram:S,releaseShaderCache:w,programs:h,dispose:E}}function IM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function PM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Rp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ip(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,x,p,g){let M=n[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:g},n[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=m,M.materialVariant=o(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=p,M.group=g),t++,M}function l(u,f,m,x,p,g){let M=a(u,f,m,x,p,g);m.transmission>0?i.push(M):m.transparent===!0?s.push(M):e.push(M)}function h(u,f,m,x,p,g){let M=a(u,f,m,x,p,g);m.transmission>0?i.unshift(M):m.transparent===!0?s.unshift(M):e.unshift(M)}function c(u,f,m){e.length>1&&e.sort(u||PM),i.length>1&&i.sort(f||Rp),s.length>1&&s.sort(f||Rp),m&&(e.reverse(),i.reverse(),s.reverse())}function d(){for(let u=t,f=n.length;u<f;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:h,finish:d,sort:c}}function LM(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Ip,n.set(i,[o])):s>=r.length?(o=new Ip,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function NM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Gt};break;case"SpotLight":e={position:new z,direction:new z,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[t.id]=e,e}}}function DM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var UM=0;function FM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function OM(n){let t=new NM,e=DM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new z);let s=new z,r=new me,o=new me;function a(h){let c=0,d=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,m=0,x=0,p=0,g=0,M=0,y=0,_=0,S=0,w=0,E=0;h.sort(FM);for(let T=0,L=h.length;T<L;T++){let D=h[T],P=D.color,G=D.intensity,I=D.distance,A=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===as?A=D.shadow.map.texture:A=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)c+=P.r*G,d+=P.g*G,u+=P.b*G;else if(D.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(D.sh.coefficients[B],G);E++}else if(D.isDirectionalLight){let B=t.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let F=D.shadow,$=e.get(D);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,i.directionalShadow[f]=$,i.directionalShadowMap[f]=A,i.directionalShadowMatrix[f]=D.shadow.matrix,M++}i.directional[f]=B,f++}else if(D.isSpotLight){let B=t.get(D);B.position.setFromMatrixPosition(D.matrixWorld),B.color.copy(P).multiplyScalar(G),B.distance=I,B.coneCos=Math.cos(D.angle),B.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),B.decay=D.decay,i.spot[x]=B;let F=D.shadow;if(D.map&&(i.spotLightMap[S]=D.map,S++,F.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[x]=F.matrix,D.castShadow){let $=e.get(D);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,i.spotShadow[x]=$,i.spotShadowMap[x]=A,_++}x++}else if(D.isRectAreaLight){let B=t.get(D);B.color.copy(P).multiplyScalar(G),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=B,p++}else if(D.isPointLight){let B=t.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),B.distance=D.distance,B.decay=D.decay,D.castShadow){let F=D.shadow,$=e.get(D);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,$.shadowCameraNear=F.camera.near,$.shadowCameraFar=F.camera.far,i.pointShadow[m]=$,i.pointShadowMap[m]=A,i.pointShadowMatrix[m]=D.shadow.matrix,y++}i.point[m]=B,m++}else if(D.isHemisphereLight){let B=t.get(D);B.skyColor.copy(D.color).multiplyScalar(G),B.groundColor.copy(D.groundColor).multiplyScalar(G),i.hemi[g]=B,g++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Lt.LTC_FLOAT_1,i.rectAreaLTC2=Lt.LTC_FLOAT_2):(i.rectAreaLTC1=Lt.LTC_HALF_1,i.rectAreaLTC2=Lt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=u;let v=i.hash;(v.directionalLength!==f||v.pointLength!==m||v.spotLength!==x||v.rectAreaLength!==p||v.hemiLength!==g||v.numDirectionalShadows!==M||v.numPointShadows!==y||v.numSpotShadows!==_||v.numSpotMaps!==S||v.numLightProbes!==E)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=p,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+S-w,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,v.directionalLength=f,v.pointLength=m,v.spotLength=x,v.rectAreaLength=p,v.hemiLength=g,v.numDirectionalShadows=M,v.numPointShadows=y,v.numSpotShadows=_,v.numSpotMaps=S,v.numLightProbes=E,i.version=UM++)}function l(h,c){let d=0,u=0,f=0,m=0,x=0,p=c.matrixWorldInverse;for(let g=0,M=h.length;g<M;g++){let y=h[g];if(y.isDirectionalLight){let _=i.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),d++}else if(y.isSpotLight){let _=i.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),f++}else if(y.isRectAreaLight){let _=i.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){let _=i.point[u];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),u++}else if(y.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function Pp(n){let t=new OM(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function o(u){e.push(u)}function a(u){i.push(u)}function l(u){s.push(u)}function h(){t.setup(e)}function c(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:h,setupLightsView:c,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function kM(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Pp(n),t.set(s,[a])):r>=o.length?(a=new Pp(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var BM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zM=`uniform sampler2D shadow_pass;
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
}`,VM=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],HM=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Lp=new me,Xo=new z,pu=new z;function GM(n,t,e){let i=new Mr,s=new Mt,r=new Mt,o=new Le,a=new ul,l=new dl,h={},c=e.maxTextureSize,d={[Ti]:je,[je]:Ti,[un]:un},u=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:BM,fragmentShader:zM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Fe;m.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new jt(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uo;let g=this.type;this.render=function(w,E,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Tl&&(Yt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Uo);let T=n.getRenderTarget(),L=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),P=n.state;P.setBlending(di),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let G=g!==this.type;G&&E.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(A=>A.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,A=w.length;I<A;I++){let B=w[I],F=B.shadow;if(F===void 0){Yt("WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let $=F.getFrameExtents();s.multiply($),r.copy(F.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/$.x),s.x=r.x*$.x,F.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/$.y),s.y=r.y*$.y,F.mapSize.y=r.y));let X=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=X,F.map===null||G===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Rr){if(B.isPointLight){Yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Rn(s.x,s.y,{format:as,type:pi,minFilter:Ze,magFilter:Ze,generateMipmaps:!1}),F.map.texture.name=B.name+".shadowMap",F.map.depthTexture=new Ri(s.x,s.y,Gn),F.map.depthTexture.name=B.name+".shadowMapDepth",F.map.depthTexture.format=ci,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=We,F.map.depthTexture.magFilter=We}else B.isPointLight?(F.map=new _c(s.x),F.map.depthTexture=new il(s.x,ei)):(F.map=new Rn(s.x,s.y),F.map.depthTexture=new Ri(s.x,s.y,ei)),F.map.depthTexture.name=B.name+".shadowMap",F.map.depthTexture.format=ci,this.type===Uo?(F.map.depthTexture.compareFunction=X?mc:pc,F.map.depthTexture.minFilter=Ze,F.map.depthTexture.magFilter=Ze):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=We,F.map.depthTexture.magFilter=We);F.camera.updateProjectionMatrix()}let ot=F.map.isWebGLCubeRenderTarget?6:1;for(let ht=0;ht<ot;ht++){if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,ht),n.clear();else{ht===0&&(n.setRenderTarget(F.map),n.clear());let tt=F.getViewport(ht);o.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),P.viewport(o)}if(B.isPointLight){let tt=F.camera,ct=F.matrix,Et=B.distance||tt.far;Et!==tt.far&&(tt.far=Et,tt.updateProjectionMatrix()),Xo.setFromMatrixPosition(B.matrixWorld),tt.position.copy(Xo),pu.copy(tt.position),pu.add(VM[ht]),tt.up.copy(HM[ht]),tt.lookAt(pu),tt.updateMatrixWorld(),ct.makeTranslation(-Xo.x,-Xo.y,-Xo.z),Lp.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Lp,tt.coordinateSystem,tt.reversedDepth)}else F.updateMatrices(B);i=F.getFrustum(),_(E,v,F.camera,B,this.type)}F.isPointLightShadow!==!0&&this.type===Rr&&M(F,v),F.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(T,L,D)};function M(w,E){let v=t.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Rn(s.x,s.y,{format:as,type:pi})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(E,null,v,u,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(E,null,v,f,x,null)}function y(w,E,v,T){let L=null,D=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)L=D;else if(L=v.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let P=L.uuid,G=E.uuid,I=h[P];I===void 0&&(I={},h[P]=I);let A=I[G];A===void 0&&(A=L.clone(),I[G]=A,E.addEventListener("dispose",S)),L=A}if(L.visible=E.visible,L.wireframe=E.wireframe,T===Rr?L.side=E.shadowSide!==null?E.shadowSide:E.side:L.side=E.shadowSide!==null?E.shadowSide:d[E.side],L.alphaMap=E.alphaMap,L.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,L.map=E.map,L.clipShadows=E.clipShadows,L.clippingPlanes=E.clippingPlanes,L.clipIntersection=E.clipIntersection,L.displacementMap=E.displacementMap,L.displacementScale=E.displacementScale,L.displacementBias=E.displacementBias,L.wireframeLinewidth=E.wireframeLinewidth,L.linewidth=E.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let P=n.properties.get(L);P.light=v}return L}function _(w,E,v,T,L){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===Rr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);let G=t.update(w),I=w.material;if(Array.isArray(I)){let A=G.groups;for(let B=0,F=A.length;B<F;B++){let $=A[B],X=I[$.materialIndex];if(X&&X.visible){let ot=y(w,X,T,L);w.onBeforeShadow(n,w,E,v,G,ot,$),n.renderBufferDirect(v,null,G,ot,w,$),w.onAfterShadow(n,w,E,v,G,ot,$)}}}else if(I.visible){let A=y(w,I,T,L);w.onBeforeShadow(n,w,E,v,G,A,null),n.renderBufferDirect(v,null,G,A,w,null),w.onAfterShadow(n,w,E,v,G,A,null)}}let P=w.children;for(let G=0,I=P.length;G<I;G++)_(P[G],E,v,T,L)}function S(w){w.target.removeEventListener("dispose",S);for(let v in h){let T=h[v],L=w.target.uuid;L in T&&(T[L].dispose(),delete T[L])}}}function $M(n,t){function e(){let q=!1,Ct=new Le,mt=null,Pt=new Le(0,0,0,0);return{setMask:function(Ft){mt!==Ft&&!q&&(n.colorMask(Ft,Ft,Ft,Ft),mt=Ft)},setLocked:function(Ft){q=Ft},setClear:function(Ft,_t,Ht,Bt,ke){ke===!0&&(Ft*=Bt,_t*=Bt,Ht*=Bt),Ct.set(Ft,_t,Ht,Bt),Pt.equals(Ct)===!1&&(n.clearColor(Ft,_t,Ht,Bt),Pt.copy(Ct))},reset:function(){q=!1,mt=null,Pt.set(-1,0,0,0)}}}function i(){let q=!1,Ct=!1,mt=null,Pt=null,Ft=null;return{setReversed:function(_t){if(Ct!==_t){let Ht=t.get("EXT_clip_control");_t?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Ct=_t;let Bt=Ft;Ft=null,this.setClear(Bt)}},getReversed:function(){return Ct},setTest:function(_t){_t?V(n.DEPTH_TEST):at(n.DEPTH_TEST)},setMask:function(_t){mt!==_t&&!q&&(n.depthMask(_t),mt=_t)},setFunc:function(_t){if(Ct&&(_t=ip[_t]),Pt!==_t){switch(_t){case Wa:n.depthFunc(n.NEVER);break;case Xa:n.depthFunc(n.ALWAYS);break;case qa:n.depthFunc(n.LESS);break;case ws:n.depthFunc(n.LEQUAL);break;case Ya:n.depthFunc(n.EQUAL);break;case Za:n.depthFunc(n.GEQUAL);break;case Ja:n.depthFunc(n.GREATER);break;case ja:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pt=_t}},setLocked:function(_t){q=_t},setClear:function(_t){Ft!==_t&&(Ft=_t,Ct&&(_t=1-_t),n.clearDepth(_t))},reset:function(){q=!1,mt=null,Pt=null,Ft=null,Ct=!1}}}function s(){let q=!1,Ct=null,mt=null,Pt=null,Ft=null,_t=null,Ht=null,Bt=null,ke=null;return{setTest:function(Re){q||(Re?V(n.STENCIL_TEST):at(n.STENCIL_TEST))},setMask:function(Re){Ct!==Re&&!q&&(n.stencilMask(Re),Ct=Re)},setFunc:function(Re,ri,oi){(mt!==Re||Pt!==ri||Ft!==oi)&&(n.stencilFunc(Re,ri,oi),mt=Re,Pt=ri,Ft=oi)},setOp:function(Re,ri,oi){(_t!==Re||Ht!==ri||Bt!==oi)&&(n.stencilOp(Re,ri,oi),_t=Re,Ht=ri,Bt=oi)},setLocked:function(Re){q=Re},setClear:function(Re){ke!==Re&&(n.clearStencil(Re),ke=Re)},reset:function(){q=!1,Ct=null,mt=null,Pt=null,Ft=null,_t=null,Ht=null,Bt=null,ke=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,h=new WeakMap,c={},d={},u={},f=new WeakMap,m=[],x=null,p=!1,g=null,M=null,y=null,_=null,S=null,w=null,E=null,v=new Gt(0,0,0),T=0,L=!1,D=null,P=null,G=null,I=null,A=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,$=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(X)[1]),F=$>=1):X.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),F=$>=2);let ot=null,ht={},tt=n.getParameter(n.SCISSOR_BOX),ct=n.getParameter(n.VIEWPORT),Et=new Le().fromArray(tt),St=new Le().fromArray(ct);function et(q,Ct,mt,Pt){let Ft=new Uint8Array(4),_t=n.createTexture();n.bindTexture(q,_t),n.texParameteri(q,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(q,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ht=0;Ht<mt;Ht++)q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?n.texImage3D(Ct,0,n.RGBA,1,1,Pt,0,n.RGBA,n.UNSIGNED_BYTE,Ft):n.texImage2D(Ct+Ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ft);return _t}let dt={};dt[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),dt[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),dt[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),V(n.DEPTH_TEST),o.setFunc(ws),j(!1),Z(kh),V(n.CULL_FACE),k(di);function V(q){c[q]!==!0&&(n.enable(q),c[q]=!0)}function at(q){c[q]!==!1&&(n.disable(q),c[q]=!1)}function nt(q,Ct){return u[q]!==Ct?(n.bindFramebuffer(q,Ct),u[q]=Ct,q===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Ct),q===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Ct),!0):!1}function xt(q,Ct){let mt=m,Pt=!1;if(q){mt=f.get(Ct),mt===void 0&&(mt=[],f.set(Ct,mt));let Ft=q.textures;if(mt.length!==Ft.length||mt[0]!==n.COLOR_ATTACHMENT0){for(let _t=0,Ht=Ft.length;_t<Ht;_t++)mt[_t]=n.COLOR_ATTACHMENT0+_t;mt.length=Ft.length,Pt=!0}}else mt[0]!==n.BACK&&(mt[0]=n.BACK,Pt=!0);Pt&&n.drawBuffers(mt)}function R(q){return x!==q?(n.useProgram(q),x=q,!0):!1}let U={[ji]:n.FUNC_ADD,[Af]:n.FUNC_SUBTRACT,[Cf]:n.FUNC_REVERSE_SUBTRACT};U[Rf]=n.MIN,U[If]=n.MAX;let O={[Pf]:n.ZERO,[Lf]:n.ONE,[Nf]:n.SRC_COLOR,[Ga]:n.SRC_ALPHA,[Bf]:n.SRC_ALPHA_SATURATE,[Of]:n.DST_COLOR,[Uf]:n.DST_ALPHA,[Df]:n.ONE_MINUS_SRC_COLOR,[$a]:n.ONE_MINUS_SRC_ALPHA,[kf]:n.ONE_MINUS_DST_COLOR,[Ff]:n.ONE_MINUS_DST_ALPHA,[zf]:n.CONSTANT_COLOR,[Vf]:n.ONE_MINUS_CONSTANT_COLOR,[Hf]:n.CONSTANT_ALPHA,[Gf]:n.ONE_MINUS_CONSTANT_ALPHA};function k(q,Ct,mt,Pt,Ft,_t,Ht,Bt,ke,Re){if(q===di){p===!0&&(at(n.BLEND),p=!1);return}if(p===!1&&(V(n.BLEND),p=!0),q!==Tf){if(q!==g||Re!==L){if((M!==ji||S!==ji)&&(n.blendEquation(n.FUNC_ADD),M=ji,S=ji),Re)switch(q){case Ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bh:n.blendFunc(n.ONE,n.ONE);break;case zh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Qt("WebGLState: Invalid blending: ",q);break}else switch(q){case Ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case zh:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vh:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",q);break}y=null,_=null,w=null,E=null,v.set(0,0,0),T=0,g=q,L=Re}return}Ft=Ft||Ct,_t=_t||mt,Ht=Ht||Pt,(Ct!==M||Ft!==S)&&(n.blendEquationSeparate(U[Ct],U[Ft]),M=Ct,S=Ft),(mt!==y||Pt!==_||_t!==w||Ht!==E)&&(n.blendFuncSeparate(O[mt],O[Pt],O[_t],O[Ht]),y=mt,_=Pt,w=_t,E=Ht),(Bt.equals(v)===!1||ke!==T)&&(n.blendColor(Bt.r,Bt.g,Bt.b,ke),v.copy(Bt),T=ke),g=q,L=!1}function Y(q,Ct){q.side===un?at(n.CULL_FACE):V(n.CULL_FACE);let mt=q.side===je;Ct&&(mt=!mt),j(mt),q.blending===Ss&&q.transparent===!1?k(di):k(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),r.setMask(q.colorWrite);let Pt=q.stencilWrite;a.setTest(Pt),Pt&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),wt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?V(n.SAMPLE_ALPHA_TO_COVERAGE):at(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(q){D!==q&&(q?n.frontFace(n.CW):n.frontFace(n.CCW),D=q)}function Z(q){q!==wf?(V(n.CULL_FACE),q!==P&&(q===kh?n.cullFace(n.BACK):q===Ef?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):at(n.CULL_FACE),P=q}function yt(q){q!==G&&(F&&n.lineWidth(q),G=q)}function wt(q,Ct,mt){q?(V(n.POLYGON_OFFSET_FILL),(I!==Ct||A!==mt)&&(I=Ct,A=mt,o.getReversed()&&(Ct=-Ct),n.polygonOffset(Ct,mt))):at(n.POLYGON_OFFSET_FILL)}function gt(q){q?V(n.SCISSOR_TEST):at(n.SCISSOR_TEST)}function Nt(q){q===void 0&&(q=n.TEXTURE0+B-1),ot!==q&&(n.activeTexture(q),ot=q)}function H(q,Ct,mt){mt===void 0&&(ot===null?mt=n.TEXTURE0+B-1:mt=ot);let Pt=ht[mt];Pt===void 0&&(Pt={type:void 0,texture:void 0},ht[mt]=Pt),(Pt.type!==q||Pt.texture!==Ct)&&(ot!==mt&&(n.activeTexture(mt),ot=mt),n.bindTexture(q,Ct||dt[q]),Pt.type=q,Pt.texture=Ct)}function te(){let q=ht[ot];q!==void 0&&q.type!==void 0&&(n.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Xt(){try{n.compressedTexImage2D(...arguments)}catch(q){Qt("WebGLState:",q)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(q){Qt("WebGLState:",q)}}function b(){try{n.texSubImage2D(...arguments)}catch(q){Qt("WebGLState:",q)}}function Q(){try{n.texSubImage3D(...arguments)}catch(q){Qt("WebGLState:",q)}}function it(){try{n.compressedTexSubImage2D(...arguments)}catch(q){Qt("WebGLState:",q)}}function ut(){try{n.compressedTexSubImage3D(...arguments)}catch(q){Qt("WebGLState:",q)}}function vt(){try{n.texStorage2D(...arguments)}catch(q){Qt("WebGLState:",q)}}function bt(){try{n.texStorage3D(...arguments)}catch(q){Qt("WebGLState:",q)}}function ft(){try{n.texImage2D(...arguments)}catch(q){Qt("WebGLState:",q)}}function pt(){try{n.texImage3D(...arguments)}catch(q){Qt("WebGLState:",q)}}function Tt(q){return d[q]!==void 0?d[q]:n.getParameter(q)}function zt(q,Ct){d[q]!==Ct&&(n.pixelStorei(q,Ct),d[q]=Ct)}function It(q){Et.equals(q)===!1&&(n.scissor(q.x,q.y,q.z,q.w),Et.copy(q))}function At(q){St.equals(q)===!1&&(n.viewport(q.x,q.y,q.z,q.w),St.copy(q))}function $t(q,Ct){let mt=h.get(Ct);mt===void 0&&(mt=new WeakMap,h.set(Ct,mt));let Pt=mt.get(q);Pt===void 0&&(Pt=n.getUniformBlockIndex(Ct,q.name),mt.set(q,Pt))}function Jt(q,Ct){let Pt=h.get(Ct).get(q);l.get(Ct)!==Pt&&(n.uniformBlockBinding(Ct,Pt,q.__bindingPointIndex),l.set(Ct,Pt))}function ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),c={},d={},ot=null,ht={},u={},f=new WeakMap,m=[],x=null,p=!1,g=null,M=null,y=null,_=null,S=null,w=null,E=null,v=new Gt(0,0,0),T=0,L=!1,D=null,P=null,G=null,I=null,A=null,Et.set(0,0,n.canvas.width,n.canvas.height),St.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:V,disable:at,bindFramebuffer:nt,drawBuffers:xt,useProgram:R,setBlending:k,setMaterial:Y,setFlipSided:j,setCullFace:Z,setLineWidth:yt,setPolygonOffset:wt,setScissorTest:gt,activeTexture:Nt,bindTexture:H,unbindTexture:te,compressedTexImage2D:Xt,compressedTexImage3D:N,texImage2D:ft,texImage3D:pt,pixelStorei:zt,getParameter:Tt,updateUBOMapping:$t,uniformBlockBinding:Jt,texStorage2D:vt,texStorage3D:bt,texSubImage2D:b,texSubImage3D:Q,compressedTexSubImage2D:it,compressedTexSubImage3D:ut,scissor:It,viewport:At,reset:ee}}function WM(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Mt,c=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,b){return m?new OffscreenCanvas(N,b):no("canvas")}function p(N,b,Q){let it=1,ut=Xt(N);if((ut.width>Q||ut.height>Q)&&(it=Q/Math.max(ut.width,ut.height)),it<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let vt=Math.floor(it*ut.width),bt=Math.floor(it*ut.height);u===void 0&&(u=x(vt,bt));let ft=b?x(vt,bt):u;return ft.width=vt,ft.height=bt,ft.getContext("2d").drawImage(N,0,0,vt,bt),Yt("WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+vt+"x"+bt+")."),ft}else return"data"in N&&Yt("WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),N;return N}function g(N){return N.generateMipmaps}function M(N){n.generateMipmap(N)}function y(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(N,b,Q,it,ut,vt=!1){if(N!==null){if(n[N]!==void 0)return n[N];Yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let bt;it&&(bt=t.get("EXT_texture_norm16"),bt||Yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=b;if(b===n.RED&&(Q===n.FLOAT&&(ft=n.R32F),Q===n.HALF_FLOAT&&(ft=n.R16F),Q===n.UNSIGNED_BYTE&&(ft=n.R8),Q===n.UNSIGNED_SHORT&&bt&&(ft=bt.R16_EXT),Q===n.SHORT&&bt&&(ft=bt.R16_SNORM_EXT)),b===n.RED_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ft=n.R8UI),Q===n.UNSIGNED_SHORT&&(ft=n.R16UI),Q===n.UNSIGNED_INT&&(ft=n.R32UI),Q===n.BYTE&&(ft=n.R8I),Q===n.SHORT&&(ft=n.R16I),Q===n.INT&&(ft=n.R32I)),b===n.RG&&(Q===n.FLOAT&&(ft=n.RG32F),Q===n.HALF_FLOAT&&(ft=n.RG16F),Q===n.UNSIGNED_BYTE&&(ft=n.RG8),Q===n.UNSIGNED_SHORT&&bt&&(ft=bt.RG16_EXT),Q===n.SHORT&&bt&&(ft=bt.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ft=n.RG8UI),Q===n.UNSIGNED_SHORT&&(ft=n.RG16UI),Q===n.UNSIGNED_INT&&(ft=n.RG32UI),Q===n.BYTE&&(ft=n.RG8I),Q===n.SHORT&&(ft=n.RG16I),Q===n.INT&&(ft=n.RG32I)),b===n.RGB_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ft=n.RGB8UI),Q===n.UNSIGNED_SHORT&&(ft=n.RGB16UI),Q===n.UNSIGNED_INT&&(ft=n.RGB32UI),Q===n.BYTE&&(ft=n.RGB8I),Q===n.SHORT&&(ft=n.RGB16I),Q===n.INT&&(ft=n.RGB32I)),b===n.RGBA_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ft=n.RGBA8UI),Q===n.UNSIGNED_SHORT&&(ft=n.RGBA16UI),Q===n.UNSIGNED_INT&&(ft=n.RGBA32UI),Q===n.BYTE&&(ft=n.RGBA8I),Q===n.SHORT&&(ft=n.RGBA16I),Q===n.INT&&(ft=n.RGBA32I)),b===n.RGB&&(Q===n.UNSIGNED_SHORT&&bt&&(ft=bt.RGB16_EXT),Q===n.SHORT&&bt&&(ft=bt.RGB16_SNORM_EXT),Q===n.UNSIGNED_INT_5_9_9_9_REV&&(ft=n.RGB9_E5),Q===n.UNSIGNED_INT_10F_11F_11F_REV&&(ft=n.R11F_G11F_B10F)),b===n.RGBA){let pt=vt?eo:oe.getTransfer(ut);Q===n.FLOAT&&(ft=n.RGBA32F),Q===n.HALF_FLOAT&&(ft=n.RGBA16F),Q===n.UNSIGNED_BYTE&&(ft=pt===xe?n.SRGB8_ALPHA8:n.RGBA8),Q===n.UNSIGNED_SHORT&&bt&&(ft=bt.RGBA16_EXT),Q===n.SHORT&&bt&&(ft=bt.RGBA16_SNORM_EXT),Q===n.UNSIGNED_SHORT_4_4_4_4&&(ft=n.RGBA4),Q===n.UNSIGNED_SHORT_5_5_5_1&&(ft=n.RGB5_A1)}return(ft===n.R16F||ft===n.R32F||ft===n.RG16F||ft===n.RG32F||ft===n.RGBA16F||ft===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function S(N,b){let Q;return N?b===null||b===ei||b===Lr?Q=n.DEPTH24_STENCIL8:b===Gn?Q=n.DEPTH32F_STENCIL8:b===Pr&&(Q=n.DEPTH24_STENCIL8,Yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ei||b===Lr?Q=n.DEPTH_COMPONENT24:b===Gn?Q=n.DEPTH_COMPONENT32F:b===Pr&&(Q=n.DEPTH_COMPONENT16),Q}function w(N,b){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==We&&N.minFilter!==Ze?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function E(N){let b=N.target;b.removeEventListener("dispose",E),T(b),b.isVideoTexture&&c.delete(b),b.isHTMLTexture&&d.delete(b)}function v(N){let b=N.target;b.removeEventListener("dispose",v),D(b)}function T(N){let b=i.get(N);if(b.__webglInit===void 0)return;let Q=N.source,it=f.get(Q);if(it){let ut=it[b.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&L(N),Object.keys(it).length===0&&f.delete(Q)}i.remove(N)}function L(N){let b=i.get(N);n.deleteTexture(b.__webglTexture);let Q=N.source,it=f.get(Q);delete it[b.__cacheKey],o.memory.textures--}function D(N){let b=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(b.__webglFramebuffer[it]))for(let ut=0;ut<b.__webglFramebuffer[it].length;ut++)n.deleteFramebuffer(b.__webglFramebuffer[it][ut]);else n.deleteFramebuffer(b.__webglFramebuffer[it]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[it])}else{if(Array.isArray(b.__webglFramebuffer))for(let it=0;it<b.__webglFramebuffer.length;it++)n.deleteFramebuffer(b.__webglFramebuffer[it]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let it=0;it<b.__webglColorRenderbuffer.length;it++)b.__webglColorRenderbuffer[it]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[it]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let Q=N.textures;for(let it=0,ut=Q.length;it<ut;it++){let vt=i.get(Q[it]);vt.__webglTexture&&(n.deleteTexture(vt.__webglTexture),o.memory.textures--),i.remove(Q[it])}i.remove(N)}let P=0;function G(){P=0}function I(){return P}function A(N){P=N}function B(){let N=P;return N>=s.maxTextures&&Yt("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),P+=1,N}function F(N){let b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function $(N,b){let Q=i.get(N);if(N.isVideoTexture&&H(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Q.__version!==N.version){let it=N.image;if(it===null)Yt("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Yt("WebGLRenderer: Texture marked for update but image is incomplete");else{at(Q,N,b);return}}else N.isExternalTexture&&(Q.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Q.__webglTexture,n.TEXTURE0+b)}function X(N,b){let Q=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Q.__version!==N.version){at(Q,N,b);return}else N.isExternalTexture&&(Q.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,Q.__webglTexture,n.TEXTURE0+b)}function ot(N,b){let Q=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Q.__version!==N.version){at(Q,N,b);return}e.bindTexture(n.TEXTURE_3D,Q.__webglTexture,n.TEXTURE0+b)}function ht(N,b){let Q=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Q.__version!==N.version){nt(Q,N,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture,n.TEXTURE0+b)}let tt={[fr]:n.REPEAT,[Hn]:n.CLAMP_TO_EDGE,[pr]:n.MIRRORED_REPEAT},ct={[We]:n.NEAREST,[Il]:n.NEAREST_MIPMAP_NEAREST,[Ls]:n.NEAREST_MIPMAP_LINEAR,[Ze]:n.LINEAR,[Ir]:n.LINEAR_MIPMAP_NEAREST,[fi]:n.LINEAR_MIPMAP_LINEAR},Et={[Yf]:n.NEVER,[Qf]:n.ALWAYS,[Zf]:n.LESS,[pc]:n.LEQUAL,[Jf]:n.EQUAL,[mc]:n.GEQUAL,[jf]:n.GREATER,[Kf]:n.NOTEQUAL};function St(N,b){if(b.type===Gn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ze||b.magFilter===Ir||b.magFilter===Ls||b.magFilter===fi||b.minFilter===Ze||b.minFilter===Ir||b.minFilter===Ls||b.minFilter===fi)&&Yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,tt[b.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,tt[b.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,tt[b.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,ct[b.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,ct[b.minFilter]),b.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,Et[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===We||b.minFilter!==Ls&&b.minFilter!==fi||b.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let Q=t.get("EXT_texture_filter_anisotropic");n.texParameterf(N,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function et(N,b){let Q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",E));let it=b.source,ut=f.get(it);ut===void 0&&(ut={},f.set(it,ut));let vt=F(b);if(vt!==N.__cacheKey){ut[vt]===void 0&&(ut[vt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),ut[vt].usedTimes++;let bt=ut[N.__cacheKey];bt!==void 0&&(ut[N.__cacheKey].usedTimes--,bt.usedTimes===0&&L(b)),N.__cacheKey=vt,N.__webglTexture=ut[vt].texture}return Q}function dt(N,b,Q){return Math.floor(Math.floor(N/Q)/b)}function V(N,b,Q,it){let vt=N.updateRanges;if(vt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,Q,it,b.data);else{vt.sort((zt,It)=>zt.start-It.start);let bt=0;for(let zt=1;zt<vt.length;zt++){let It=vt[bt],At=vt[zt],$t=It.start+It.count,Jt=dt(At.start,b.width,4),ee=dt(It.start,b.width,4);At.start<=$t+1&&Jt===ee&&dt(At.start+At.count-1,b.width,4)===Jt?It.count=Math.max(It.count,At.start+At.count-It.start):(++bt,vt[bt]=At)}vt.length=bt+1;let ft=e.getParameter(n.UNPACK_ROW_LENGTH),pt=e.getParameter(n.UNPACK_SKIP_PIXELS),Tt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let zt=0,It=vt.length;zt<It;zt++){let At=vt[zt],$t=Math.floor(At.start/4),Jt=Math.ceil(At.count/4),ee=$t%b.width,q=Math.floor($t/b.width),Ct=Jt,mt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),e.pixelStorei(n.UNPACK_SKIP_ROWS,q),e.texSubImage2D(n.TEXTURE_2D,0,ee,q,Ct,mt,Q,it,b.data)}N.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,ft),e.pixelStorei(n.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Tt)}}function at(N,b,Q){let it=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(it=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(it=n.TEXTURE_3D);let ut=et(N,b),vt=b.source;e.bindTexture(it,N.__webglTexture,n.TEXTURE0+Q);let bt=i.get(vt);if(vt.version!==bt.__version||ut===!0){if(e.activeTexture(n.TEXTURE0+Q),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let mt=oe.getPrimaries(oe.workingColorSpace),Pt=b.colorSpace===Un?null:oe.getPrimaries(b.colorSpace),Ft=b.colorSpace===Un||mt===Pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft)}e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let pt=p(b.image,!1,s.maxTextureSize);pt=te(b,pt);let Tt=r.convert(b.format,b.colorSpace),zt=r.convert(b.type),It=_(b.internalFormat,Tt,zt,b.normalized,b.colorSpace,b.isVideoTexture);St(it,b);let At,$t=b.mipmaps,Jt=b.isVideoTexture!==!0,ee=bt.__version===void 0||ut===!0,q=vt.dataReady,Ct=w(b,pt);if(b.isDepthTexture)It=S(b.format===os,b.type),ee&&(Jt?e.texStorage2D(n.TEXTURE_2D,1,It,pt.width,pt.height):e.texImage2D(n.TEXTURE_2D,0,It,pt.width,pt.height,0,Tt,zt,null));else if(b.isDataTexture)if($t.length>0){Jt&&ee&&e.texStorage2D(n.TEXTURE_2D,Ct,It,$t[0].width,$t[0].height);for(let mt=0,Pt=$t.length;mt<Pt;mt++)At=$t[mt],Jt?q&&e.texSubImage2D(n.TEXTURE_2D,mt,0,0,At.width,At.height,Tt,zt,At.data):e.texImage2D(n.TEXTURE_2D,mt,It,At.width,At.height,0,Tt,zt,At.data);b.generateMipmaps=!1}else Jt?(ee&&e.texStorage2D(n.TEXTURE_2D,Ct,It,pt.width,pt.height),q&&V(b,pt,Tt,zt)):e.texImage2D(n.TEXTURE_2D,0,It,pt.width,pt.height,0,Tt,zt,pt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Jt&&ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,It,$t[0].width,$t[0].height,pt.depth);for(let mt=0,Pt=$t.length;mt<Pt;mt++)if(At=$t[mt],b.format!==Mn)if(Tt!==null)if(Jt){if(q)if(b.layerUpdates.size>0){let Ft=lu(At.width,At.height,b.format,b.type);for(let _t of b.layerUpdates){let Ht=At.data.subarray(_t*Ft/At.data.BYTES_PER_ELEMENT,(_t+1)*Ft/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,_t,At.width,At.height,1,Tt,Ht)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,0,At.width,At.height,pt.depth,Tt,At.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,mt,It,At.width,At.height,pt.depth,0,At.data,0,0);else Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?q&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,0,At.width,At.height,pt.depth,Tt,zt,At.data):e.texImage3D(n.TEXTURE_2D_ARRAY,mt,It,At.width,At.height,pt.depth,0,Tt,zt,At.data)}else{Jt&&ee&&e.texStorage2D(n.TEXTURE_2D,Ct,It,$t[0].width,$t[0].height);for(let mt=0,Pt=$t.length;mt<Pt;mt++)At=$t[mt],b.format!==Mn?Tt!==null?Jt?q&&e.compressedTexSubImage2D(n.TEXTURE_2D,mt,0,0,At.width,At.height,Tt,At.data):e.compressedTexImage2D(n.TEXTURE_2D,mt,It,At.width,At.height,0,At.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?q&&e.texSubImage2D(n.TEXTURE_2D,mt,0,0,At.width,At.height,Tt,zt,At.data):e.texImage2D(n.TEXTURE_2D,mt,It,At.width,At.height,0,Tt,zt,At.data)}else if(b.isDataArrayTexture)if(Jt){if(ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,It,pt.width,pt.height,pt.depth),q)if(b.layerUpdates.size>0){let mt=lu(pt.width,pt.height,b.format,b.type);for(let Pt of b.layerUpdates){let Ft=pt.data.subarray(Pt*mt/pt.data.BYTES_PER_ELEMENT,(Pt+1)*mt/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Pt,pt.width,pt.height,1,Tt,zt,Ft)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Tt,zt,pt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,It,pt.width,pt.height,pt.depth,0,Tt,zt,pt.data);else if(b.isData3DTexture)Jt?(ee&&e.texStorage3D(n.TEXTURE_3D,Ct,It,pt.width,pt.height,pt.depth),q&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Tt,zt,pt.data)):e.texImage3D(n.TEXTURE_3D,0,It,pt.width,pt.height,pt.depth,0,Tt,zt,pt.data);else if(b.isFramebufferTexture){if(ee)if(Jt)e.texStorage2D(n.TEXTURE_2D,Ct,It,pt.width,pt.height);else{let mt=pt.width,Pt=pt.height;for(let Ft=0;Ft<Ct;Ft++)e.texImage2D(n.TEXTURE_2D,Ft,It,mt,Pt,0,Tt,zt,null),mt>>=1,Pt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let mt=n.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),pt.parentNode!==mt){mt.appendChild(pt),d.add(b),mt.onpaint=Pt=>{let Ft=Pt.changedElements;for(let _t of d)Ft.includes(_t.image)&&(_t.needsUpdate=!0)},mt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,pt);else{let Ft=n.RGBA,_t=n.RGBA,Ht=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ft,_t,Ht,pt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if($t.length>0){if(Jt&&ee){let mt=Xt($t[0]);e.texStorage2D(n.TEXTURE_2D,Ct,It,mt.width,mt.height)}for(let mt=0,Pt=$t.length;mt<Pt;mt++)At=$t[mt],Jt?q&&e.texSubImage2D(n.TEXTURE_2D,mt,0,0,Tt,zt,At):e.texImage2D(n.TEXTURE_2D,mt,It,Tt,zt,At);b.generateMipmaps=!1}else if(Jt){if(ee){let mt=Xt(pt);e.texStorage2D(n.TEXTURE_2D,Ct,It,mt.width,mt.height)}q&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt,zt,pt)}else e.texImage2D(n.TEXTURE_2D,0,It,Tt,zt,pt);g(b)&&M(it),bt.__version=vt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function nt(N,b,Q){if(b.image.length!==6)return;let it=et(N,b),ut=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+Q);let vt=i.get(ut);if(ut.version!==vt.__version||it===!0){e.activeTexture(n.TEXTURE0+Q);let bt=oe.getPrimaries(oe.workingColorSpace),ft=b.colorSpace===Un?null:oe.getPrimaries(b.colorSpace),pt=b.colorSpace===Un||bt===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Tt=b.isCompressedTexture||b.image[0].isCompressedTexture,zt=b.image[0]&&b.image[0].isDataTexture,It=[];for(let _t=0;_t<6;_t++)!Tt&&!zt?It[_t]=p(b.image[_t],!0,s.maxCubemapSize):It[_t]=zt?b.image[_t].image:b.image[_t],It[_t]=te(b,It[_t]);let At=It[0],$t=r.convert(b.format,b.colorSpace),Jt=r.convert(b.type),ee=_(b.internalFormat,$t,Jt,b.normalized,b.colorSpace),q=b.isVideoTexture!==!0,Ct=vt.__version===void 0||it===!0,mt=ut.dataReady,Pt=w(b,At);St(n.TEXTURE_CUBE_MAP,b);let Ft;if(Tt){q&&Ct&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,ee,At.width,At.height);for(let _t=0;_t<6;_t++){Ft=It[_t].mipmaps;for(let Ht=0;Ht<Ft.length;Ht++){let Bt=Ft[Ht];b.format!==Mn?$t!==null?q?mt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,0,0,Bt.width,Bt.height,$t,Bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,ee,Bt.width,Bt.height,0,Bt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,0,0,Bt.width,Bt.height,$t,Jt,Bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht,ee,Bt.width,Bt.height,0,$t,Jt,Bt.data)}}}else{if(Ft=b.mipmaps,q&&Ct){Ft.length>0&&Pt++;let _t=Xt(It[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,ee,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(zt){q?mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,It[_t].width,It[_t].height,$t,Jt,It[_t].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ee,It[_t].width,It[_t].height,0,$t,Jt,It[_t].data);for(let Ht=0;Ht<Ft.length;Ht++){let ke=Ft[Ht].image[_t].image;q?mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,0,0,ke.width,ke.height,$t,Jt,ke.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,ee,ke.width,ke.height,0,$t,Jt,ke.data)}}else{q?mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,$t,Jt,It[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ee,$t,Jt,It[_t]);for(let Ht=0;Ht<Ft.length;Ht++){let Bt=Ft[Ht];q?mt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,0,0,$t,Jt,Bt.image[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ht+1,ee,$t,Jt,Bt.image[_t])}}}g(b)&&M(n.TEXTURE_CUBE_MAP),vt.__version=ut.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function xt(N,b,Q,it,ut,vt){let bt=r.convert(Q.format,Q.colorSpace),ft=r.convert(Q.type),pt=_(Q.internalFormat,bt,ft,Q.normalized,Q.colorSpace),Tt=i.get(b),zt=i.get(Q);if(zt.__renderTarget=b,!Tt.__hasExternalTextures){let It=Math.max(1,b.width>>vt),At=Math.max(1,b.height>>vt);ut===n.TEXTURE_3D||ut===n.TEXTURE_2D_ARRAY?e.texImage3D(ut,vt,pt,It,At,b.depth,0,bt,ft,null):e.texImage2D(ut,vt,pt,It,At,0,bt,ft,null)}e.bindFramebuffer(n.FRAMEBUFFER,N),Nt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,ut,zt.__webglTexture,0,gt(b)):(ut===n.TEXTURE_2D||ut>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,it,ut,zt.__webglTexture,vt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function R(N,b,Q){if(n.bindRenderbuffer(n.RENDERBUFFER,N),b.depthBuffer){let it=b.depthTexture,ut=it&&it.isDepthTexture?it.type:null,vt=S(b.stencilBuffer,ut),bt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Nt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,gt(b),vt,b.width,b.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,gt(b),vt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,vt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,N)}else{let it=b.textures;for(let ut=0;ut<it.length;ut++){let vt=it[ut],bt=r.convert(vt.format,vt.colorSpace),ft=r.convert(vt.type),pt=_(vt.internalFormat,bt,ft,vt.normalized,vt.colorSpace);Nt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,gt(b),pt,b.width,b.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,gt(b),pt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,pt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function U(N,b,Q){let it=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ut=i.get(b.depthTexture);if(ut.__renderTarget=b,(!ut.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),it){if(ut.__webglInit===void 0&&(ut.__webglInit=!0,b.depthTexture.addEventListener("dispose",E)),ut.__webglTexture===void 0){ut.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,ut.__webglTexture),St(n.TEXTURE_CUBE_MAP,b.depthTexture);let Tt=r.convert(b.depthTexture.format),zt=r.convert(b.depthTexture.type),It;b.depthTexture.format===ci?It=n.DEPTH_COMPONENT24:b.depthTexture.format===os&&(It=n.DEPTH24_STENCIL8);for(let At=0;At<6;At++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,It,b.width,b.height,0,Tt,zt,null)}}else $(b.depthTexture,0);let vt=ut.__webglTexture,bt=gt(b),ft=it?n.TEXTURE_CUBE_MAP_POSITIVE_X+Q:n.TEXTURE_2D,pt=b.depthTexture.format===os?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===ci)Nt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pt,ft,vt,0,bt):n.framebufferTexture2D(n.FRAMEBUFFER,pt,ft,vt,0);else if(b.depthTexture.format===os)Nt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pt,ft,vt,0,bt):n.framebufferTexture2D(n.FRAMEBUFFER,pt,ft,vt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function O(N){let b=i.get(N),Q=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){let it=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),it){let ut=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,it.removeEventListener("dispose",ut)};it.addEventListener("dispose",ut),b.__depthDisposeCallback=ut}b.__boundDepthTexture=it}if(N.depthTexture&&!b.__autoAllocateDepthBuffer)if(Q)for(let it=0;it<6;it++)U(b.__webglFramebuffer[it],N,it);else{let it=N.texture.mipmaps;it&&it.length>0?U(b.__webglFramebuffer[0],N,0):U(b.__webglFramebuffer,N,0)}else if(Q){b.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[it]),b.__webglDepthbuffer[it]===void 0)b.__webglDepthbuffer[it]=n.createRenderbuffer(),R(b.__webglDepthbuffer[it],N,!1);else{let ut=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=b.__webglDepthbuffer[it];n.bindRenderbuffer(n.RENDERBUFFER,vt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,vt)}}else{let it=N.texture.mipmaps;if(it&&it.length>0?e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),R(b.__webglDepthbuffer,N,!1);else{let ut=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,vt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,vt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function k(N,b,Q){let it=i.get(N);b!==void 0&&xt(it.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Q!==void 0&&O(N)}function Y(N){let b=N.texture,Q=i.get(N),it=i.get(b);N.addEventListener("dispose",v);let ut=N.textures,vt=N.isWebGLCubeRenderTarget===!0,bt=ut.length>1;if(bt||(it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture()),it.__version=b.version,o.memory.textures++),vt){Q.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer[ft]=[];for(let pt=0;pt<b.mipmaps.length;pt++)Q.__webglFramebuffer[ft][pt]=n.createFramebuffer()}else Q.__webglFramebuffer[ft]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ft=0;ft<b.mipmaps.length;ft++)Q.__webglFramebuffer[ft]=n.createFramebuffer()}else Q.__webglFramebuffer=n.createFramebuffer();if(bt)for(let ft=0,pt=ut.length;ft<pt;ft++){let Tt=i.get(ut[ft]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=n.createTexture(),o.memory.textures++)}if(N.samples>0&&Nt(N)===!1){Q.__webglMultisampledFramebuffer=n.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ft=0;ft<ut.length;ft++){let pt=ut[ft];Q.__webglColorRenderbuffer[ft]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Q.__webglColorRenderbuffer[ft]);let Tt=r.convert(pt.format,pt.colorSpace),zt=r.convert(pt.type),It=_(pt.internalFormat,Tt,zt,pt.normalized,pt.colorSpace,N.isXRRenderTarget===!0),At=gt(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,At,It,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,Q.__webglColorRenderbuffer[ft])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(Q.__webglDepthRenderbuffer=n.createRenderbuffer(),R(Q.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(vt){e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture),St(n.TEXTURE_CUBE_MAP,b);for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)xt(Q.__webglFramebuffer[ft][pt],N,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,pt);else xt(Q.__webglFramebuffer[ft],N,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);g(b)&&M(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ft=0,pt=ut.length;ft<pt;ft++){let Tt=ut[ft],zt=i.get(Tt),It=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(It=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(It,zt.__webglTexture),St(It,Tt),xt(Q.__webglFramebuffer,N,Tt,n.COLOR_ATTACHMENT0+ft,It,0),g(Tt)&&M(It)}e.unbindTexture()}else{let ft=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ft=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,it.__webglTexture),St(ft,b),b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)xt(Q.__webglFramebuffer[pt],N,b,n.COLOR_ATTACHMENT0,ft,pt);else xt(Q.__webglFramebuffer,N,b,n.COLOR_ATTACHMENT0,ft,0);g(b)&&M(ft),e.unbindTexture()}N.depthBuffer&&O(N)}function j(N){let b=N.textures;for(let Q=0,it=b.length;Q<it;Q++){let ut=b[Q];if(g(ut)){let vt=y(N),bt=i.get(ut).__webglTexture;e.bindTexture(vt,bt),M(vt),e.unbindTexture()}}}let Z=[],yt=[];function wt(N){if(N.samples>0){if(Nt(N)===!1){let b=N.textures,Q=N.width,it=N.height,ut=n.COLOR_BUFFER_BIT,vt=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(N),ft=b.length>1;if(ft)for(let Tt=0;Tt<b.length;Tt++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);let pt=N.texture.mipmaps;pt&&pt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Tt=0;Tt<b.length;Tt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ut|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ut|=n.STENCIL_BUFFER_BIT)),ft){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[Tt]);let zt=i.get(b[Tt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,zt,0)}n.blitFramebuffer(0,0,Q,it,0,0,Q,it,ut,n.NEAREST),l===!0&&(Z.length=0,yt.length=0,Z.push(n.COLOR_ATTACHMENT0+Tt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Z.push(vt),yt.push(vt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,yt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Z))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ft)for(let Tt=0;Tt<b.length;Tt++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,bt.__webglColorRenderbuffer[Tt]);let zt=i.get(b[Tt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){let b=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function gt(N){return Math.min(s.maxSamples,N.samples)}function Nt(N){let b=i.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function H(N){let b=o.render.frame;c.get(N)!==b&&(c.set(N,b),N.update())}function te(N,b){let Q=N.colorSpace,it=N.format,ut=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Q!==to&&Q!==Un&&(oe.getTransfer(Q)===xe?(it!==Mn||ut!==vn)&&Yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",Q)),b}function Xt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.getTextureUnits=I,this.setTextureUnits=A,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=ot,this.setTextureCube=ht,this.rebindTextures=k,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=O,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Nt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function XM(n,t){function e(i,s=Un){let r,o=oe.getTransfer(s);if(i===vn)return n.UNSIGNED_BYTE;if(i===Ll)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Nl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Kh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Zh)return n.BYTE;if(i===Jh)return n.SHORT;if(i===Pr)return n.UNSIGNED_SHORT;if(i===Pl)return n.INT;if(i===ei)return n.UNSIGNED_INT;if(i===Gn)return n.FLOAT;if(i===pi)return n.HALF_FLOAT;if(i===Qh)return n.ALPHA;if(i===tu)return n.RGB;if(i===Mn)return n.RGBA;if(i===ci)return n.DEPTH_COMPONENT;if(i===os)return n.DEPTH_STENCIL;if(i===Dl)return n.RED;if(i===Ul)return n.RED_INTEGER;if(i===as)return n.RG;if(i===Fl)return n.RG_INTEGER;if(i===Ol)return n.RGBA_INTEGER;if(i===ko||i===Bo||i===zo||i===Vo)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ko)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ko)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kl||i===Bl||i===zl||i===Vl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hl||i===Gl||i===$l||i===Wl||i===Xl||i===Ho||i===ql)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Hl||i===Gl)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===$l)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Wl)return r.COMPRESSED_R11_EAC;if(i===Xl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ho)return r.COMPRESSED_RG11_EAC;if(i===ql)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yl||i===Zl||i===Jl||i===jl||i===Kl||i===Ql||i===tc||i===ec||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Yl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ql)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ec)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ic)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ac)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lc||i===cc||i===hc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===lc)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uc||i===dc||i===Go||i===fc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===uc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Go)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var qM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YM=`
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

}`,bu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new uo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Nn({vertexShader:qM,fragmentShader:YM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new jt(new So(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Su=class extends Kn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,d=null,u=null,f=null,m=null,x=typeof XRWebGLBinding<"u",p=new bu,g={},M=e.getContextAttributes(),y=null,_=null,S=[],w=[],E=new Mt,v=null,T=new sn;T.viewport=new Le;let L=new sn;L.viewport=new Le;let D=[T,L],P=new El,G=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let dt=S[et];return dt===void 0&&(dt=new vr,S[et]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(et){let dt=S[et];return dt===void 0&&(dt=new vr,S[et]=dt),dt.getGripSpace()},this.getHand=function(et){let dt=S[et];return dt===void 0&&(dt=new vr,S[et]=dt),dt.getHandSpace()};function A(et){let dt=w.indexOf(et.inputSource);if(dt===-1)return;let V=S[dt];V!==void 0&&(V.update(et.inputSource,et.frame,h||o),V.dispatchEvent({type:et.type,data:et.inputSource}))}function B(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",F);for(let et=0;et<S.length;et++){let dt=w[et];dt!==null&&(w[et]=null,S[et].disconnect(dt))}G=null,I=null,p.reset();for(let et in g)delete g[et];t.setRenderTarget(y),f=null,u=null,d=null,s=null,_=null,St.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,i.isPresenting===!0&&Yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,i.isPresenting===!0&&Yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(et){h=et},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",B),s.addEventListener("inputsourceschange",F),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(E),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let V=null,at=null,nt=null;M.depth&&(nt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,V=M.stencil?os:ci,at=M.stencil?Lr:ei);let xt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(xt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Rn(u.textureWidth,u.textureHeight,{format:Mn,type:vn,depthTexture:new Ri(u.textureWidth,u.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let V={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,V),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Rn(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),St.setContext(s),St.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function F(et){for(let dt=0;dt<et.removed.length;dt++){let V=et.removed[dt],at=w.indexOf(V);at>=0&&(w[at]=null,S[at].disconnect(V))}for(let dt=0;dt<et.added.length;dt++){let V=et.added[dt],at=w.indexOf(V);if(at===-1){for(let xt=0;xt<S.length;xt++)if(xt>=w.length){w.push(V),at=xt;break}else if(w[xt]===null){w[xt]=V,at=xt;break}if(at===-1)break}let nt=S[at];nt&&nt.connect(V)}}let $=new z,X=new z;function ot(et,dt,V){$.setFromMatrixPosition(dt.matrixWorld),X.setFromMatrixPosition(V.matrixWorld);let at=$.distanceTo(X),nt=dt.projectionMatrix.elements,xt=V.projectionMatrix.elements,R=nt[14]/(nt[10]-1),U=nt[14]/(nt[10]+1),O=(nt[9]+1)/nt[5],k=(nt[9]-1)/nt[5],Y=(nt[8]-1)/nt[0],j=(xt[8]+1)/xt[0],Z=R*Y,yt=R*j,wt=at/(-Y+j),gt=wt*-Y;if(dt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(gt),et.translateZ(wt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),nt[10]===-1)et.projectionMatrix.copy(dt.projectionMatrix),et.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{let Nt=R+wt,H=U+wt,te=Z-gt,Xt=yt+(at-gt),N=O*U/H*Nt,b=k*U/H*Nt;et.projectionMatrix.makePerspective(te,Xt,N,b,Nt,H),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function ht(et,dt){dt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(dt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let dt=et.near,V=et.far;p.texture!==null&&(p.depthNear>0&&(dt=p.depthNear),p.depthFar>0&&(V=p.depthFar)),P.near=L.near=T.near=dt,P.far=L.far=T.far=V,(G!==P.near||I!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),G=P.near,I=P.far),P.layers.mask=et.layers.mask|6,T.layers.mask=P.layers.mask&-5,L.layers.mask=P.layers.mask&-3;let at=et.parent,nt=P.cameras;ht(P,at);for(let xt=0;xt<nt.length;xt++)ht(nt[xt],at);nt.length===2?ot(P,T,L):P.projectionMatrix.copy(T.projectionMatrix),tt(et,P,at)};function tt(et,dt,V){V===null?et.matrix.copy(dt.matrixWorld):(et.matrix.copy(V.matrixWorld),et.matrix.invert(),et.matrix.multiply(dt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(dt.projectionMatrix),et.projectionMatrixInverse.copy(dt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=_r*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(et){l=et,u!==null&&(u.fixedFoveation=et),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=et)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(P)},this.getCameraTexture=function(et){return g[et]};let ct=null;function Et(et,dt){if(c=dt.getViewerPose(h||o),m=dt,c!==null){let V=c.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let at=!1;V.length!==P.cameras.length&&(P.cameras.length=0,at=!0);for(let U=0;U<V.length;U++){let O=V[U],k=null;if(f!==null)k=f.getViewport(O);else{let j=d.getViewSubImage(u,O);k=j.viewport,U===0&&(t.setRenderTargetTextures(_,j.colorTexture,j.depthStencilTexture),t.setRenderTarget(_))}let Y=D[U];Y===void 0&&(Y=new sn,Y.layers.enable(U),Y.viewport=new Le,D[U]=Y),Y.matrix.fromArray(O.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(O.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(k.x,k.y,k.width,k.height),U===0&&(P.matrix.copy(Y.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),at===!0&&P.cameras.push(Y)}let nt=s.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let U=d.getDepthInformation(V[0]);U&&U.isValid&&U.texture&&p.init(U,s.renderState)}if(nt&&nt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let U=0;U<V.length;U++){let O=V[U].camera;if(O){let k=g[O];k||(k=new uo,g[O]=k);let Y=d.getCameraImage(O);k.sourceTexture=Y}}}}for(let V=0;V<S.length;V++){let at=w[V],nt=S[V];at!==null&&nt!==void 0&&nt.update(at,dt,h||o)}ct&&ct(et,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),m=null}let St=new Np;St.setAnimationLoop(Et),this.setAnimationLoop=function(et){ct=et},this.dispose=function(){}}},ZM=new me,Bp=new Kt;Bp.set(-1,0,0,0,1,0,0,0,1);function JM(n,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,ru(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,M,y,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),c(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,_)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,M,y):g.isSpriteMaterial?h(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===je&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===je&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let M=t.get(g),y=M.envMap,_=M.envMapRotation;y&&(p.envMap.value=y,p.envMapRotation.value.setFromMatrix4(ZM.makeRotationFromEuler(_)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Bp),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,M,y){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=y*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,M){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===je&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let M=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function jM(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){let w=S.program;i.uniformBlockBinding(_,w)}function h(_,S){let w=s[_.id];w===void 0&&(p(_),w=c(_),s[_.id]=w,_.addEventListener("dispose",M));let E=S.program;i.updateUBOMapping(_,E);let v=t.render.frame;r[_.id]!==v&&(u(_),r[_.id]=v)}function c(_){let S=d();_.__bindingPointIndex=S;let w=n.createBuffer(),E=_.__size,v=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,E,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,w),w}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let S=s[_.id],w=_.uniforms,E=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let v=0,T=w.length;v<T;v++){let L=w[v];if(Array.isArray(L))for(let D=0,P=L.length;D<P;D++)f(L[D],v,D,E);else f(L,v,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,S,w,E){if(x(_,S,w,E)===!0){let v=_.__offset,T=_.value;if(Array.isArray(T)){let L=0;for(let D=0;D<T.length;D++){let P=T[D],G=g(P);m(P,_.__data,L),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(L+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,_.__data)}}function m(_,S,w){typeof _=="number"||typeof _=="boolean"?S[0]=_:_.isMatrix3?(S[0]=_.elements[0],S[1]=_.elements[1],S[2]=_.elements[2],S[3]=0,S[4]=_.elements[3],S[5]=_.elements[4],S[6]=_.elements[5],S[7]=0,S[8]=_.elements[6],S[9]=_.elements[7],S[10]=_.elements[8],S[11]=0):ArrayBuffer.isView(_)?S.set(new _.constructor(_.buffer,_.byteOffset,S.length)):_.toArray(S,w)}function x(_,S,w,E){let v=_.value,T=S+"_"+w;if(E[T]===void 0)return typeof v=="number"||typeof v=="boolean"?E[T]=v:ArrayBuffer.isView(v)?E[T]=v.slice():E[T]=v.clone(),!0;{let L=E[T];if(typeof v=="number"||typeof v=="boolean"){if(L!==v)return E[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(L.equals(v)===!1)return L.copy(v),!0}}return!1}function p(_){let S=_.uniforms,w=0,E=16;for(let T=0,L=S.length;T<L;T++){let D=Array.isArray(S[T])?S[T]:[S[T]];for(let P=0,G=D.length;P<G;P++){let I=D[P],A=Array.isArray(I.value)?I.value:[I.value];for(let B=0,F=A.length;B<F;B++){let $=A[B],X=g($),ot=w%E,ht=ot%X.boundary,tt=ot+ht;w+=ht,tt!==0&&E-tt<X.storage&&(w+=E-tt),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=w,w+=X.storage}}}let v=w%E;return v>0&&(w+=E-v),_.__size=w,_.__cache={},this}function g(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?Yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):Yt("WebGLRenderer: Unsupported uniform value type.",_),S}function M(_){let S=_.target;S.removeEventListener("dispose",M);let w=o.indexOf(S.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function y(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:h,dispose:y}}var KM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gi=null;function QM(){return gi===null&&(gi=new ao(KM,16,16,as,pi),gi.name="DFG_LUT",gi.minFilter=Ze,gi.magFilter=Ze,gi.wrapS=Hn,gi.wrapT=Hn,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}var yc=class{constructor(t={}){let{canvas:e=tp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=vn}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let x=f,p=new Set([Ol,Fl,Ul]),g=new Set([vn,ei,Pr,Lr,Ll,Nl]),M=new Uint32Array(4),y=new Int32Array(4),_=new z,S=null,w=null,E=[],v=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,D=!1,P=null,G=null,I=null,A=null;this._outputColorSpace=$e;let B=0,F=0,$=null,X=-1,ot=null,ht=new Le,tt=new Le,ct=null,Et=new Gt(0),St=0,et=e.width,dt=e.height,V=1,at=null,nt=null,xt=new Le(0,0,et,dt),R=new Le(0,0,et,dt),U=!1,O=new Mr,k=!1,Y=!1,j=new me,Z=new z,yt=new Le,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gt=!1;function Nt(){return $===null?V:1}let H=i;function te(C,K){return e.getContext(C,K)}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",ke,!1),e.addEventListener("webglcontextrestored",Re,!1),e.addEventListener("webglcontextcreationerror",ri,!1),H===null){let K="webgl2";if(H=te(K,C),H===null)throw te(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw Qt("WebGLRenderer: "+C.message),C}let Xt,N,b,Q,it,ut,vt,bt,ft,pt,Tt,zt,It,At,$t,Jt,ee,q,Ct,mt,Pt,Ft,_t;function Ht(){Xt=new ov(H),Xt.init(),Pt=new XM(H,Xt),N=new Ky(H,Xt,t,Pt),b=new $M(H,Xt),N.reversedDepthBuffer&&u&&b.buffers.depth.setReversed(!0),G=H.createFramebuffer(),I=H.createFramebuffer(),A=H.createFramebuffer(),Q=new cv(H),it=new IM,ut=new WM(H,Xt,b,it,N,Pt,Q),vt=new rv(L),bt=new fx(H),Ft=new Jy(H,bt),ft=new av(H,bt,Q,Ft),pt=new uv(H,ft,bt,Ft,Q),q=new hv(H,N,ut),$t=new Qy(it),Tt=new RM(L,vt,Xt,N,Ft,$t),zt=new JM(L,it),It=new LM,At=new kM(Xt),ee=new Zy(L,vt,b,pt,m,l),Jt=new GM(L,pt,N),_t=new jM(H,Q,N,b),Ct=new jy(H,Xt,Q),mt=new lv(H,Xt,Q),Q.programs=Tt.programs,L.capabilities=N,L.extensions=Xt,L.properties=it,L.renderLists=It,L.shadowMap=Jt,L.state=b,L.info=Q}Ht(),x!==vn&&(T=new fv(x,e.width,e.height,a,s,r));let Bt=new Su(L,H);this.xr=Bt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let C=Xt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Xt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize(et,dt,!1))},this.getSize=function(C){return C.set(et,dt)},this.setSize=function(C,K,lt=!0){if(Bt.isPresenting){Yt("WebGLRenderer: Can't change size while VR device is presenting.");return}et=C,dt=K,e.width=Math.floor(C*V),e.height=Math.floor(K*V),lt===!0&&(e.style.width=C+"px",e.style.height=K+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(et*V,dt*V).floor()},this.setDrawingBufferSize=function(C,K,lt){et=C,dt=K,V=lt,e.width=Math.floor(C*lt),e.height=Math.floor(K*lt),this.setViewport(0,0,C,K)},this.setEffects=function(C){if(x===vn){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let K=0;K<C.length;K++)if(C[K].isOutputPass===!0){Yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(ht)},this.getViewport=function(C){return C.copy(xt)},this.setViewport=function(C,K,lt,st){C.isVector4?xt.set(C.x,C.y,C.z,C.w):xt.set(C,K,lt,st),b.viewport(ht.copy(xt).multiplyScalar(V).round())},this.getScissor=function(C){return C.copy(R)},this.setScissor=function(C,K,lt,st){C.isVector4?R.set(C.x,C.y,C.z,C.w):R.set(C,K,lt,st),b.scissor(tt.copy(R).multiplyScalar(V).round())},this.getScissorTest=function(){return U},this.setScissorTest=function(C){b.setScissorTest(U=C)},this.setOpaqueSort=function(C){at=C},this.setTransparentSort=function(C){nt=C},this.getClearColor=function(C){return C.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(C=!0,K=!0,lt=!0){let st=0;if(C){let rt=!1;if($!==null){let Ut=$.texture.format;rt=p.has(Ut)}if(rt){let Ut=$.texture.type,kt=g.has(Ut),Dt=ee.getClearColor(),Vt=ee.getClearAlpha(),Wt=Dt.r,ne=Dt.g,re=Dt.b;kt?(M[0]=Wt,M[1]=ne,M[2]=re,M[3]=Vt,H.clearBufferuiv(H.COLOR,0,M)):(y[0]=Wt,y[1]=ne,y[2]=re,y[3]=Vt,H.clearBufferiv(H.COLOR,0,y))}else st|=H.COLOR_BUFFER_BIT}K&&(st|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),lt&&(st|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&H.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),P=C},this.dispose=function(){e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",Re,!1),e.removeEventListener("webglcontextcreationerror",ri,!1),ee.dispose(),It.dispose(),At.dispose(),it.dispose(),vt.dispose(),pt.dispose(),Ft.dispose(),_t.dispose(),Tt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Fd),Bt.removeEventListener("sessionend",Od),ms.stop()};function ke(C){C.preventDefault(),nu("WebGLRenderer: Context Lost."),D=!0}function Re(){nu("WebGLRenderer: Context Restored."),D=!1;let C=Q.autoReset,K=Jt.enabled,lt=Jt.autoUpdate,st=Jt.needsUpdate,rt=Jt.type;Ht(),Q.autoReset=C,Jt.enabled=K,Jt.autoUpdate=lt,Jt.needsUpdate=st,Jt.type=rt}function ri(C){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function oi(C){let K=C.target;K.removeEventListener("dispose",oi),Bg(K)}function Bg(C){zg(C),it.remove(C)}function zg(C){let K=it.get(C).programs;K!==void 0&&(K.forEach(function(lt){Tt.releaseProgram(lt)}),C.isShaderMaterial&&Tt.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,lt,st,rt,Ut){K===null&&(K=wt);let kt=rt.isMesh&&rt.matrixWorld.determinantAffine()<0,Dt=Gg(C,K,lt,st,rt);b.setMaterial(st,kt);let Vt=lt.index,Wt=1;if(st.wireframe===!0){if(Vt=ft.getWireframeAttribute(lt),Vt===void 0)return;Wt=2}let ne=lt.drawRange,re=lt.attributes.position,qt=ne.start*Wt,be=(ne.start+ne.count)*Wt;Ut!==null&&(qt=Math.max(qt,Ut.start*Wt),be=Math.min(be,(Ut.start+Ut.count)*Wt)),Vt!==null?(qt=Math.max(qt,0),be=Math.min(be,Vt.count)):re!=null&&(qt=Math.max(qt,0),be=Math.min(be,re.count));let ze=be-qt;if(ze<0||ze===1/0)return;Ft.setup(rt,st,Dt,lt,Vt);let Be,Te=Ct;if(Vt!==null&&(Be=bt.get(Vt),Te=mt,Te.setIndex(Be)),rt.isMesh)st.wireframe===!0?(b.setLineWidth(st.wireframeLinewidth*Nt()),Te.setMode(H.LINES)):Te.setMode(H.TRIANGLES);else if(rt.isLine){let ln=st.linewidth;ln===void 0&&(ln=1),b.setLineWidth(ln*Nt()),rt.isLineSegments?Te.setMode(H.LINES):rt.isLineLoop?Te.setMode(H.LINE_LOOP):Te.setMode(H.LINE_STRIP)}else rt.isPoints?Te.setMode(H.POINTS):rt.isSprite&&Te.setMode(H.TRIANGLES);if(rt.isBatchedMesh)if(Xt.get("WEBGL_multi_draw"))Te.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{let ln=rt._multiDrawStarts,Ot=rt._multiDrawCounts,Tn=rt._multiDrawCount,he=Vt?bt.get(Vt).bytesPerElement:1,zn=it.get(st).currentProgram.getUniforms();for(let ai=0;ai<Tn;ai++)zn.setValue(H,"_gl_DrawID",ai),Te.render(ln[ai]/he,Ot[ai])}else if(rt.isInstancedMesh)Te.renderInstances(qt,ze,rt.count);else if(lt.isInstancedBufferGeometry){let ln=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Ot=Math.min(lt.instanceCount,ln);Te.renderInstances(qt,ze,Ot)}else Te.render(qt,ze)};function Ud(C,K,lt){C.transparent===!0&&C.side===un&&C.forceSinglePass===!1?(C.side=je,C.needsUpdate=!0,ga(C,K,lt),C.side=Ti,C.needsUpdate=!0,ga(C,K,lt),C.side=un):ga(C,K,lt)}this.compile=function(C,K,lt=null){lt===null&&(lt=C),w=At.get(lt),w.init(K),v.push(w),lt.traverseVisible(function(rt){rt.isLight&&rt.layers.test(K.layers)&&(w.pushLight(rt),rt.castShadow&&w.pushShadow(rt))}),C!==lt&&C.traverseVisible(function(rt){rt.isLight&&rt.layers.test(K.layers)&&(w.pushLight(rt),rt.castShadow&&w.pushShadow(rt))}),w.setupLights();let st=new Set;return C.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;let Ut=rt.material;if(Ut)if(Array.isArray(Ut))for(let kt=0;kt<Ut.length;kt++){let Dt=Ut[kt];Ud(Dt,lt,rt),st.add(Dt)}else Ud(Ut,lt,rt),st.add(Ut)}),w=v.pop(),st},this.compileAsync=function(C,K,lt=null){let st=this.compile(C,K,lt);return new Promise(rt=>{function Ut(){if(st.forEach(function(kt){it.get(kt).currentProgram.isReady()&&st.delete(kt)}),st.size===0){rt(C);return}setTimeout(Ut,10)}Xt.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let Jc=null;function Vg(C){Jc&&Jc(C)}function Fd(){ms.stop()}function Od(){ms.start()}let ms=new Np;ms.setAnimationLoop(Vg),typeof self<"u"&&ms.setContext(self),this.setAnimationLoop=function(C){Jc=C,Bt.setAnimationLoop(C),C===null?ms.stop():ms.start()},Bt.addEventListener("sessionstart",Fd),Bt.addEventListener("sessionend",Od),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;P!==null&&P.renderStart(C,K);let lt=Bt.enabled===!0&&Bt.isPresenting===!0,st=T!==null&&($===null||lt)&&T.begin(L,$);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(K),K=Bt.getCamera()),C.isScene===!0&&C.onBeforeRender(L,C,K,$),w=At.get(C,v.length),w.init(K),w.state.textureUnits=ut.getTextureUnits(),v.push(w),j.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),O.setFromProjectionMatrix(j,jn,K.reversedDepth),Y=this.localClippingEnabled,k=$t.init(this.clippingPlanes,Y),S=It.get(C,E.length),S.init(),E.push(S),Bt.enabled===!0&&Bt.isPresenting===!0){let kt=L.xr.getDepthSensingMesh();kt!==null&&jc(kt,K,-1/0,L.sortObjects)}jc(C,K,0,L.sortObjects),S.finish(),L.sortObjects===!0&&S.sort(at,nt,K.reversedDepth),gt=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,gt&&ee.addToRenderList(S,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),k===!0&&$t.beginShadows();let rt=w.state.shadowsArray;if(Jt.render(rt,C,K),k===!0&&$t.endShadows(),(st&&T.hasRenderPass())===!1){let kt=S.opaque,Dt=S.transmissive;if(w.setupLights(),K.isArrayCamera){let Vt=K.cameras;if(Dt.length>0)for(let Wt=0,ne=Vt.length;Wt<ne;Wt++){let re=Vt[Wt];Bd(kt,Dt,C,re)}gt&&ee.render(C);for(let Wt=0,ne=Vt.length;Wt<ne;Wt++){let re=Vt[Wt];kd(S,C,re,re.viewport)}}else Dt.length>0&&Bd(kt,Dt,C,K),gt&&ee.render(C),kd(S,C,K)}$!==null&&F===0&&(ut.updateMultisampleRenderTarget($),ut.updateRenderTargetMipmap($)),st&&T.end(L),C.isScene===!0&&C.onAfterRender(L,C,K),Ft.resetDefaultState(),X=-1,ot=null,v.pop(),v.length>0?(w=v[v.length-1],ut.setTextureUnits(w.state.textureUnits),k===!0&&$t.setGlobalState(L.clippingPlanes,w.state.camera)):w=null,E.pop(),E.length>0?S=E[E.length-1]:S=null,P!==null&&P.renderEnd()};function jc(C,K,lt,st){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)lt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLightProbeGrid)w.pushLightProbeGrid(C);else if(C.isLight)w.pushLight(C),C.castShadow&&w.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||O.intersectsSprite(C)){st&&yt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(j);let kt=pt.update(C),Dt=C.material;Dt.visible&&S.push(C,kt,Dt,lt,yt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||O.intersectsObject(C))){let kt=pt.update(C),Dt=C.material;if(st&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),yt.copy(C.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),yt.copy(kt.boundingSphere.center)),yt.applyMatrix4(C.matrixWorld).applyMatrix4(j)),Array.isArray(Dt)){let Vt=kt.groups;for(let Wt=0,ne=Vt.length;Wt<ne;Wt++){let re=Vt[Wt],qt=Dt[re.materialIndex];qt&&qt.visible&&S.push(C,kt,qt,lt,yt.z,re)}}else Dt.visible&&S.push(C,kt,Dt,lt,yt.z,null)}}let Ut=C.children;for(let kt=0,Dt=Ut.length;kt<Dt;kt++)jc(Ut[kt],K,lt,st)}function kd(C,K,lt,st){let{opaque:rt,transmissive:Ut,transparent:kt}=C;w.setupLightsView(lt),k===!0&&$t.setGlobalState(L.clippingPlanes,lt),st&&b.viewport(ht.copy(st)),rt.length>0&&ma(rt,K,lt),Ut.length>0&&ma(Ut,K,lt),kt.length>0&&ma(kt,K,lt),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Bd(C,K,lt,st){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[st.id]===void 0){let qt=Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[st.id]=new Rn(1,1,{generateMipmaps:!0,type:qt?pi:vn,minFilter:fi,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let Ut=w.state.transmissionRenderTarget[st.id],kt=st.viewport||ht;Ut.setSize(kt.z*L.transmissionResolutionScale,kt.w*L.transmissionResolutionScale);let Dt=L.getRenderTarget(),Vt=L.getActiveCubeFace(),Wt=L.getActiveMipmapLevel();L.setRenderTarget(Ut),L.getClearColor(Et),St=L.getClearAlpha(),St<1&&L.setClearColor(16777215,.5),L.clear(),gt&&ee.render(lt);let ne=L.toneMapping;L.toneMapping=ti;let re=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),w.setupLightsView(st),k===!0&&$t.setGlobalState(L.clippingPlanes,st),ma(C,lt,st),ut.updateMultisampleRenderTarget(Ut),ut.updateRenderTargetMipmap(Ut),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let be=0,ze=K.length;be<ze;be++){let Be=K[be],{object:Te,geometry:ln,material:Ot,group:Tn}=Be;if(Ot.side===un&&Te.layers.test(st.layers)){let he=Ot.side;Ot.side=je,Ot.needsUpdate=!0,zd(Te,lt,st,ln,Ot,Tn),Ot.side=he,Ot.needsUpdate=!0,qt=!0}}qt===!0&&(ut.updateMultisampleRenderTarget(Ut),ut.updateRenderTargetMipmap(Ut))}L.setRenderTarget(Dt,Vt,Wt),L.setClearColor(Et,St),re!==void 0&&(st.viewport=re),L.toneMapping=ne}function ma(C,K,lt){let st=K.isScene===!0?K.overrideMaterial:null;for(let rt=0,Ut=C.length;rt<Ut;rt++){let kt=C[rt],{object:Dt,geometry:Vt,group:Wt}=kt,ne=kt.material;ne.allowOverride===!0&&st!==null&&(ne=st),Dt.layers.test(lt.layers)&&zd(Dt,K,lt,Vt,ne,Wt)}}function zd(C,K,lt,st,rt,Ut){C.onBeforeRender(L,K,lt,st,rt,Ut),C.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),rt.onBeforeRender(L,K,lt,st,C,Ut),rt.transparent===!0&&rt.side===un&&rt.forceSinglePass===!1?(rt.side=je,rt.needsUpdate=!0,L.renderBufferDirect(lt,K,st,rt,C,Ut),rt.side=Ti,rt.needsUpdate=!0,L.renderBufferDirect(lt,K,st,rt,C,Ut),rt.side=un):L.renderBufferDirect(lt,K,st,rt,C,Ut),C.onAfterRender(L,K,lt,st,rt,Ut)}function ga(C,K,lt){K.isScene!==!0&&(K=wt);let st=it.get(C),rt=w.state.lights,Ut=w.state.shadowsArray,kt=rt.state.version,Dt=Tt.getParameters(C,rt.state,Ut,K,lt,w.state.lightProbeGridArray),Vt=Tt.getProgramCacheKey(Dt),Wt=st.programs;st.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?K.environment:null,st.fog=K.fog;let ne=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;st.envMap=vt.get(C.envMap||st.environment,ne),st.envMapRotation=st.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,Wt===void 0&&(C.addEventListener("dispose",oi),Wt=new Map,st.programs=Wt);let re=Wt.get(Vt);if(re!==void 0){if(st.currentProgram===re&&st.lightsStateVersion===kt)return Hd(C,Dt),re}else Dt.uniforms=Tt.getUniforms(C),P!==null&&C.isNodeMaterial&&P.build(C,lt,Dt),C.onBeforeCompile(Dt,L),re=Tt.acquireProgram(Dt,Vt),Wt.set(Vt,re),st.uniforms=Dt.uniforms;let qt=st.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qt.clippingPlanes=$t.uniform),Hd(C,Dt),st.needsLights=Wg(C),st.lightsStateVersion=kt,st.needsLights&&(qt.ambientLightColor.value=rt.state.ambient,qt.lightProbe.value=rt.state.probe,qt.directionalLights.value=rt.state.directional,qt.directionalLightShadows.value=rt.state.directionalShadow,qt.spotLights.value=rt.state.spot,qt.spotLightShadows.value=rt.state.spotShadow,qt.rectAreaLights.value=rt.state.rectArea,qt.ltc_1.value=rt.state.rectAreaLTC1,qt.ltc_2.value=rt.state.rectAreaLTC2,qt.pointLights.value=rt.state.point,qt.pointLightShadows.value=rt.state.pointShadow,qt.hemisphereLights.value=rt.state.hemi,qt.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,qt.spotLightMatrix.value=rt.state.spotLightMatrix,qt.spotLightMap.value=rt.state.spotLightMap,qt.pointShadowMatrix.value=rt.state.pointShadowMatrix),st.lightProbeGrid=w.state.lightProbeGridArray.length>0,st.currentProgram=re,st.uniformsList=null,re}function Vd(C){if(C.uniformsList===null){let K=C.currentProgram.getUniforms();C.uniformsList=Dr.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function Hd(C,K){let lt=it.get(C);lt.outputColorSpace=K.outputColorSpace,lt.batching=K.batching,lt.batchingColor=K.batchingColor,lt.instancing=K.instancing,lt.instancingColor=K.instancingColor,lt.instancingMorph=K.instancingMorph,lt.skinning=K.skinning,lt.morphTargets=K.morphTargets,lt.morphNormals=K.morphNormals,lt.morphColors=K.morphColors,lt.morphTargetsCount=K.morphTargetsCount,lt.numClippingPlanes=K.numClippingPlanes,lt.numIntersection=K.numClipIntersection,lt.vertexAlphas=K.vertexAlphas,lt.vertexTangents=K.vertexTangents,lt.toneMapping=K.toneMapping}function Hg(C,K){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;_.setFromMatrixPosition(K.matrixWorld);for(let lt=0,st=C.length;lt<st;lt++){let rt=C[lt];if(rt.texture!==null&&rt.boundingBox.containsPoint(_))return rt}return null}function Gg(C,K,lt,st,rt){K.isScene!==!0&&(K=wt),ut.resetTextureUnits();let Ut=K.fog,kt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?K.environment:null,Dt=$===null?L.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:oe.workingColorSpace,Vt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Wt=vt.get(st.envMap||kt,Vt),ne=st.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,re=!!lt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),qt=!!lt.morphAttributes.position,be=!!lt.morphAttributes.normal,ze=!!lt.morphAttributes.color,Be=ti;st.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Be=L.toneMapping);let Te=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,ln=Te!==void 0?Te.length:0,Ot=it.get(st),Tn=w.state.lights;if(k===!0&&(Y===!0||C!==ot)){let Ie=C===ot&&st.id===X;$t.setState(st,C,Ie)}let he=!1;st.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Tn.state.version||Ot.outputColorSpace!==Dt||rt.isBatchedMesh&&Ot.batching===!1||!rt.isBatchedMesh&&Ot.batching===!0||rt.isBatchedMesh&&Ot.batchingColor===!0&&rt.colorTexture===null||rt.isBatchedMesh&&Ot.batchingColor===!1&&rt.colorTexture!==null||rt.isInstancedMesh&&Ot.instancing===!1||!rt.isInstancedMesh&&Ot.instancing===!0||rt.isSkinnedMesh&&Ot.skinning===!1||!rt.isSkinnedMesh&&Ot.skinning===!0||rt.isInstancedMesh&&Ot.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&Ot.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&Ot.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&Ot.instancingMorph===!1&&rt.morphTexture!==null||Ot.envMap!==Wt||st.fog===!0&&Ot.fog!==Ut||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==$t.numPlanes||Ot.numIntersection!==$t.numIntersection)||Ot.vertexAlphas!==ne||Ot.vertexTangents!==re||Ot.morphTargets!==qt||Ot.morphNormals!==be||Ot.morphColors!==ze||Ot.toneMapping!==Be||Ot.morphTargetsCount!==ln||!!Ot.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(he=!0):(he=!0,Ot.__version=st.version);let zn=Ot.currentProgram;he===!0&&(zn=ga(st,K,rt),P&&st.isNodeMaterial&&P.onUpdateProgram(st,zn,Ot));let ai=!1,Vi=!1,Js=!1,Ae=zn.getUniforms(),Ve=Ot.uniforms;if(b.useProgram(zn.program)&&(ai=!0,Vi=!0,Js=!0),st.id!==X&&(X=st.id,Vi=!0),Ot.needsLights){let Ie=Hg(w.state.lightProbeGridArray,rt);Ot.lightProbeGrid!==Ie&&(Ot.lightProbeGrid=Ie,Vi=!0)}if(ai||ot!==C){b.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ae.setValue(H,"projectionMatrix",C.projectionMatrix),Ae.setValue(H,"viewMatrix",C.matrixWorldInverse);let Gi=Ae.map.cameraPosition;Gi!==void 0&&Gi.setValue(H,Z.setFromMatrixPosition(C.matrixWorld)),N.logarithmicDepthBuffer&&Ae.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Ae.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),ot!==C&&(ot=C,Vi=!0,Js=!0)}if(Ot.needsLights&&(Tn.state.directionalShadowMap.length>0&&Ae.setValue(H,"directionalShadowMap",Tn.state.directionalShadowMap,ut),Tn.state.spotShadowMap.length>0&&Ae.setValue(H,"spotShadowMap",Tn.state.spotShadowMap,ut),Tn.state.pointShadowMap.length>0&&Ae.setValue(H,"pointShadowMap",Tn.state.pointShadowMap,ut)),rt.isSkinnedMesh){Ae.setOptional(H,rt,"bindMatrix"),Ae.setOptional(H,rt,"bindMatrixInverse");let Ie=rt.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),Ae.setValue(H,"boneTexture",Ie.boneTexture,ut))}rt.isBatchedMesh&&(Ae.setOptional(H,rt,"batchingTexture"),Ae.setValue(H,"batchingTexture",rt._matricesTexture,ut),Ae.setOptional(H,rt,"batchingIdTexture"),Ae.setValue(H,"batchingIdTexture",rt._indirectTexture,ut),Ae.setOptional(H,rt,"batchingColorTexture"),rt._colorsTexture!==null&&Ae.setValue(H,"batchingColorTexture",rt._colorsTexture,ut));let Hi=lt.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&q.update(rt,lt,zn),(Vi||Ot.receiveShadow!==rt.receiveShadow)&&(Ot.receiveShadow=rt.receiveShadow,Ae.setValue(H,"receiveShadow",rt.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&K.environment!==null&&(Ve.envMapIntensity.value=K.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=QM()),Vi){if(Ae.setValue(H,"toneMappingExposure",L.toneMappingExposure),Ot.needsLights&&$g(Ve,Js),Ut&&st.fog===!0&&zt.refreshFogUniforms(Ve,Ut),zt.refreshMaterialUniforms(Ve,st,V,dt,w.state.transmissionRenderTarget[C.id]),Ot.needsLights&&Ot.lightProbeGrid){let Ie=Ot.lightProbeGrid;Ve.probesSH.value=Ie.texture,Ve.probesMin.value.copy(Ie.boundingBox.min),Ve.probesMax.value.copy(Ie.boundingBox.max),Ve.probesResolution.value.copy(Ie.resolution)}Dr.upload(H,Vd(Ot),Ve,ut)}if(st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Dr.upload(H,Vd(Ot),Ve,ut),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Ae.setValue(H,"center",rt.center),Ae.setValue(H,"modelViewMatrix",rt.modelViewMatrix),Ae.setValue(H,"normalMatrix",rt.normalMatrix),Ae.setValue(H,"modelMatrix",rt.matrixWorld),st.uniformsGroups!==void 0){let Ie=st.uniformsGroups;for(let Gi=0,js=Ie.length;Gi<js;Gi++){let Gd=Ie[Gi];_t.update(Gd,zn),_t.bind(Gd,zn)}}return zn}function $g(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function Wg(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(C,K,lt){let st=it.get(C);st.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),it.get(C.texture).__webglTexture=K,it.get(C.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:lt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,K){let lt=it.get(C);lt.__webglFramebuffer=K,lt.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(C,K=0,lt=0){$=C,B=K,F=lt;let st=null,rt=!1,Ut=!1;if(C){let Dt=it.get(C);if(Dt.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(H.FRAMEBUFFER,Dt.__webglFramebuffer),ht.copy(C.viewport),tt.copy(C.scissor),ct=C.scissorTest,b.viewport(ht),b.scissor(tt),b.setScissorTest(ct),X=-1;return}else if(Dt.__webglFramebuffer===void 0)ut.setupRenderTarget(C);else if(Dt.__hasExternalTextures)ut.rebindTextures(C,it.get(C.texture).__webglTexture,it.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let ne=C.depthTexture;if(Dt.__boundDepthTexture!==ne){if(ne!==null&&it.has(ne)&&(C.width!==ne.image.width||C.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(C)}}let Vt=C.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Ut=!0);let Wt=it.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Wt[K])?st=Wt[K][lt]:st=Wt[K],rt=!0):C.samples>0&&ut.useMultisampledRTT(C)===!1?st=it.get(C).__webglMultisampledFramebuffer:Array.isArray(Wt)?st=Wt[lt]:st=Wt,ht.copy(C.viewport),tt.copy(C.scissor),ct=C.scissorTest}else ht.copy(xt).multiplyScalar(V).floor(),tt.copy(R).multiplyScalar(V).floor(),ct=U;if(lt!==0&&(st=G),b.bindFramebuffer(H.FRAMEBUFFER,st)&&b.drawBuffers(C,st),b.viewport(ht),b.scissor(tt),b.setScissorTest(ct),rt){let Dt=it.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+K,Dt.__webglTexture,lt)}else if(Ut){let Dt=K;for(let Vt=0;Vt<C.textures.length;Vt++){let Wt=it.get(C.textures[Vt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Vt,Wt.__webglTexture,lt,Dt)}}else if(C!==null&&lt!==0){let Dt=it.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Dt.__webglTexture,lt)}X=-1},this.readRenderTargetPixels=function(C,K,lt,st,rt,Ut,kt,Dt=0){if(!(C&&C.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=it.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&kt!==void 0&&(Vt=Vt[kt]),Vt){b.bindFramebuffer(H.FRAMEBUFFER,Vt);try{let Wt=C.textures[Dt],ne=Wt.format,re=Wt.type;if(C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Dt),!N.textureFormatReadable(ne)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(re)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-st&&lt>=0&&lt<=C.height-rt&&H.readPixels(K,lt,st,rt,Pt.convert(ne),Pt.convert(re),Ut)}finally{let Wt=$!==null?it.get($).__webglFramebuffer:null;b.bindFramebuffer(H.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(C,K,lt,st,rt,Ut,kt,Dt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=it.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&kt!==void 0&&(Vt=Vt[kt]),Vt)if(K>=0&&K<=C.width-st&&lt>=0&&lt<=C.height-rt){b.bindFramebuffer(H.FRAMEBUFFER,Vt);let Wt=C.textures[Dt],ne=Wt.format,re=Wt.type;if(C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Dt),!N.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let qt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,qt),H.bufferData(H.PIXEL_PACK_BUFFER,Ut.byteLength,H.STREAM_READ),H.readPixels(K,lt,st,rt,Pt.convert(ne),Pt.convert(re),0);let be=$!==null?it.get($).__webglFramebuffer:null;b.bindFramebuffer(H.FRAMEBUFFER,be);let ze=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await np(H,ze,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,qt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ut),H.deleteBuffer(qt),H.deleteSync(ze),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,K=null,lt=0){let st=Math.pow(2,-lt),rt=Math.floor(C.image.width*st),Ut=Math.floor(C.image.height*st),kt=K!==null?K.x:0,Dt=K!==null?K.y:0;ut.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,lt,0,0,kt,Dt,rt,Ut),b.unbindTexture()},this.copyTextureToTexture=function(C,K,lt=null,st=null,rt=0,Ut=0){let kt,Dt,Vt,Wt,ne,re,qt,be,ze,Be=C.isCompressedTexture?C.mipmaps[Ut]:C.image;if(lt!==null)kt=lt.max.x-lt.min.x,Dt=lt.max.y-lt.min.y,Vt=lt.isBox3?lt.max.z-lt.min.z:1,Wt=lt.min.x,ne=lt.min.y,re=lt.isBox3?lt.min.z:0;else{let Ve=Math.pow(2,-rt);kt=Math.floor(Be.width*Ve),Dt=Math.floor(Be.height*Ve),C.isDataArrayTexture?Vt=Be.depth:C.isData3DTexture?Vt=Math.floor(Be.depth*Ve):Vt=1,Wt=0,ne=0,re=0}st!==null?(qt=st.x,be=st.y,ze=st.z):(qt=0,be=0,ze=0);let Te=Pt.convert(K.format),ln=Pt.convert(K.type),Ot;K.isData3DTexture?(ut.setTexture3D(K,0),Ot=H.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(ut.setTexture2DArray(K,0),Ot=H.TEXTURE_2D_ARRAY):(ut.setTexture2D(K,0),Ot=H.TEXTURE_2D),b.activeTexture(H.TEXTURE0),b.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,K.flipY),b.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),b.pixelStorei(H.UNPACK_ALIGNMENT,K.unpackAlignment);let Tn=b.getParameter(H.UNPACK_ROW_LENGTH),he=b.getParameter(H.UNPACK_IMAGE_HEIGHT),zn=b.getParameter(H.UNPACK_SKIP_PIXELS),ai=b.getParameter(H.UNPACK_SKIP_ROWS),Vi=b.getParameter(H.UNPACK_SKIP_IMAGES);b.pixelStorei(H.UNPACK_ROW_LENGTH,Be.width),b.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Be.height),b.pixelStorei(H.UNPACK_SKIP_PIXELS,Wt),b.pixelStorei(H.UNPACK_SKIP_ROWS,ne),b.pixelStorei(H.UNPACK_SKIP_IMAGES,re);let Js=C.isDataArrayTexture||C.isData3DTexture,Ae=K.isDataArrayTexture||K.isData3DTexture;if(C.isDepthTexture){let Ve=it.get(C),Hi=it.get(K),Ie=it.get(Ve.__renderTarget),Gi=it.get(Hi.__renderTarget);b.bindFramebuffer(H.READ_FRAMEBUFFER,Ie.__webglFramebuffer),b.bindFramebuffer(H.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let js=0;js<Vt;js++)Js&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,it.get(C).__webglTexture,rt,re+js),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,it.get(K).__webglTexture,Ut,ze+js)),H.blitFramebuffer(Wt,ne,kt,Dt,qt,be,kt,Dt,H.DEPTH_BUFFER_BIT,H.NEAREST);b.bindFramebuffer(H.READ_FRAMEBUFFER,null),b.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(rt!==0||C.isRenderTargetTexture||it.has(C)){let Ve=it.get(C),Hi=it.get(K);b.bindFramebuffer(H.READ_FRAMEBUFFER,I),b.bindFramebuffer(H.DRAW_FRAMEBUFFER,A);for(let Ie=0;Ie<Vt;Ie++)Js?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ve.__webglTexture,rt,re+Ie):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ve.__webglTexture,rt),Ae?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Hi.__webglTexture,Ut,ze+Ie):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Hi.__webglTexture,Ut),rt!==0?H.blitFramebuffer(Wt,ne,kt,Dt,qt,be,kt,Dt,H.COLOR_BUFFER_BIT,H.NEAREST):Ae?H.copyTexSubImage3D(Ot,Ut,qt,be,ze+Ie,Wt,ne,kt,Dt):H.copyTexSubImage2D(Ot,Ut,qt,be,Wt,ne,kt,Dt);b.bindFramebuffer(H.READ_FRAMEBUFFER,null),b.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ae?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(Ot,Ut,qt,be,ze,kt,Dt,Vt,Te,ln,Be.data):K.isCompressedArrayTexture?H.compressedTexSubImage3D(Ot,Ut,qt,be,ze,kt,Dt,Vt,Te,Be.data):H.texSubImage3D(Ot,Ut,qt,be,ze,kt,Dt,Vt,Te,ln,Be):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ut,qt,be,kt,Dt,Te,ln,Be.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ut,qt,be,Be.width,Be.height,Te,Be.data):H.texSubImage2D(H.TEXTURE_2D,Ut,qt,be,kt,Dt,Te,ln,Be);b.pixelStorei(H.UNPACK_ROW_LENGTH,Tn),b.pixelStorei(H.UNPACK_IMAGE_HEIGHT,he),b.pixelStorei(H.UNPACK_SKIP_PIXELS,zn),b.pixelStorei(H.UNPACK_SKIP_ROWS,ai),b.pixelStorei(H.UNPACK_SKIP_IMAGES,Vi),Ut===0&&K.generateMipmaps&&H.generateMipmap(Ot),b.unbindTexture()},this.initRenderTarget=function(C){it.get(C).__webglFramebuffer===void 0&&ut.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ut.setTextureCube(C,0):C.isData3DTexture?ut.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ut.setTexture2DArray(C,0):ut.setTexture2D(C,0),b.unbindTexture()},this.resetState=function(){B=0,F=0,$=null,b.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};var zp={type:"change"},Tu={type:"start"},Hp={type:"end"},bc=new Ts,Vp=new yn,t1=Math.cos(70*mi.DEG2RAD),tn=new z,bn=2*Math.PI,Se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Eu=1e-6,Sc=class extends Do{constructor(t,e=null){super(t,e),this.state=Se.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:is.ROTATE,MIDDLE:is.DOLLY,RIGHT:is.PAN},this.touches={ONE:ss.ROTATE,TWO:ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new gn,this._lastTargetPosition=new z,this._quat=new gn().setFromUnitVectors(t.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cr,this._sphericalDelta=new Cr,this._scale=1,this._panOffset=new z,this._rotateStart=new Mt,this._rotateEnd=new Mt,this._rotateDelta=new Mt,this._panStart=new Mt,this._panEnd=new Mt,this._panDelta=new Mt,this._dollyStart=new Mt,this._dollyEnd=new Mt,this._dollyDelta=new Mt,this._dollyDirection=new z,this._mouse=new Mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=n1.bind(this),this._onPointerDown=e1.bind(this),this._onPointerUp=i1.bind(this),this._onContextMenu=h1.bind(this),this._onMouseWheel=o1.bind(this),this._onKeyDown=a1.bind(this),this._onTouchStart=l1.bind(this),this._onTouchMove=c1.bind(this),this._onMouseDown=s1.bind(this),this._onMouseMove=r1.bind(this),this._interceptControlDown=u1.bind(this),this._interceptControlUp=d1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zp),this.update(),this.state=Se.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;tn.copy(e).sub(this.target),tn.applyQuaternion(this._quat),this._spherical.setFromVector3(tn),this.autoRotate&&this.state===Se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=bn:i>Math.PI&&(i-=bn),s<-Math.PI?s+=bn:s>Math.PI&&(s-=bn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(tn.setFromSpherical(this._spherical),tn.applyQuaternion(this._quatInverse),e.copy(this.target).add(tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=tn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let h=new z(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(a),this.object.updateMatrixWorld(),o=tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(bc.origin.copy(this.object.position),bc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(bc.direction))<t1?this.object.lookAt(this.target):(Vp.setFromNormalAndCoplanarPoint(this.object.up,this.target),bc.intersectPlane(Vp,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Eu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Eu||this._lastTargetPosition.distanceToSquared(this.target)>Eu?(this.dispatchEvent(zp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?bn/60*this.autoRotateSpeed*t:bn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){tn.setFromMatrixColumn(e,0),tn.multiplyScalar(-t),this._panOffset.add(tn)}_panUp(t,e){this.screenSpacePanning===!0?tn.setFromMatrixColumn(e,1):(tn.setFromMatrixColumn(e,0),tn.crossVectors(this.object.up,tn)),tn.multiplyScalar(t),this._panOffset.add(tn)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;tn.copy(s).sub(this.target);let r=tn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/e.clientHeight),this._rotateUp(bn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/e.clientHeight),this._rotateUp(bn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function e1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function n1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function i1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hp),this.state=Se.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function s1(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Se.DOLLY;break;case is.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Se.ROTATE}break;case is.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Se.PAN}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(Tu)}function r1(n){switch(this.state){case Se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function o1(n){this.enabled===!1||this.enableZoom===!1||this.state!==Se.NONE||(n.preventDefault(),this.dispatchEvent(Tu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Hp))}function a1(n){this.enabled!==!1&&this._handleKeyDown(n)}function l1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ss.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Se.TOUCH_ROTATE;break;case ss.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Se.TOUCH_PAN;break;default:this.state=Se.NONE}break;case 2:switch(this.touches.TWO){case ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Se.TOUCH_DOLLY_PAN;break;case ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Se.TOUCH_DOLLY_ROTATE;break;default:this.state=Se.NONE}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(Tu)}function c1(n){switch(this._trackPointer(n),this.state){case Se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Se.NONE}}function h1(n){this.enabled!==!1&&n.preventDefault()}function u1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function d1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var wc=class extends ui{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new rn;t.deleteAttribute("uv");let e=new Xe({side:je}),i=new Xe,s=new Io(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new jt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new co(t,i,6),a=new Je;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new jt(t,kr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let h=new jt(t,kr(50));h.position.set(-16.109,18.021,-8.207),h.scale.set(.1,2.425,2.751),this.add(h);let c=new jt(t,kr(17));c.position.set(14.904,12.198,-1.832),c.scale.set(.15,4.265,6.331),this.add(c);let d=new jt(t,kr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new jt(t,kr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new jt(t,kr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function kr(n){return new Eo({color:0,emissive:16777215,emissiveIntensity:n})}var Fs=[6,8,10,12,14,15,16,17,18,20,22,25,28,30,32,35,40,45,50,55,60,70,80],Ii={3:.5,4:.7,5:.8,6:1,8:1.25,10:1.5,12:1.75,14:2,16:2,18:2.5,20:2.5,22:2.5,24:3,27:3,30:3.5,33:3.5,36:4,39:4,42:4.5,45:4.5,48:5},Au={8:[1],10:[1.25,1],12:[1.5,1.25],14:[1.5],16:[1.5],18:[1.5],20:[1.5,1],22:[1.5],24:[2,1.5],27:[2],30:[2,1.5],36:[3,2]};function $n(n){let t=/^M\s*(\d+(?:\.\d+)?)\s*(?:[x×X]\s*(\d+(?:\.\d+)?))?\s*(?:-?\s*(\d[a-zA-Z]{1,2}))?/.exec(String(n||"").trim());if(!t)return null;let e=Number(t[1]),i=t[2]?Number(t[2]):Ii[e]||null;return{nominal:e,pitch:i,cls:t[3]||null,fine:!!t[2]&&Ii[e]!==i}}function Yo(n,t){let e=Ii[n];return e&&Math.abs(e-t)<1e-9?`M${n}`:`M${n}x${t}`}function Gp(n,t){return n-1.2269*t}var f1={8:[7.6,.9],10:[9.6,1.1],12:[11.5,1.1],14:[13.4,1.1],15:[14.3,1.1],16:[15.2,1.1],17:[16.2,1.1],18:[17,1.3],20:[19,1.3],22:[21,1.3],25:[23.9,1.3],28:[26.6,1.6],30:[28.6,1.6],32:[30.3,1.6],35:[33,1.6],40:[37.5,1.85],45:[42.5,1.85],50:[47,2.15],55:[52,2.15],60:[57,2.15],70:[67,2.65],80:[76.5,2.65]};function Br(n){let t=f1[n];if(t)return{groove_d:t[0],width:t[1]};let e=Math.max(.4,+(n*.03).toFixed(2));return{groove_d:+(n-2*e).toFixed(2),width:+(1.1+n/45).toFixed(2),approx:!0}}var p1=[[6,8,2,2,1.2],[8,10,3,3,1.8],[10,12,4,4,2.5],[12,17,5,5,3],[17,22,6,6,3.5],[22,30,8,7,4],[30,38,10,8,5],[38,44,12,8,5],[44,50,14,9,5.5],[50,58,16,10,6],[58,65,18,11,7],[65,75,20,12,7.5],[75,85,22,14,9],[85,95,25,14,9]];function Os(n){for(let[t,e,i,s,r]of p1)if(n>t&&n<=e)return{width:i,key_h:s,depth:r};return null}var $p={1:2.12,1.6:3.35,2:4.25,2.5:5.3,3.15:6.7,4:8.5,5:10.6,6.3:13.2,8:17};function Ec(n){let t=n<=8?1:n<=12?1.6:n<=20?2:n<=30?2.5:n<=50?3.15:n<=80?4:5;return{d:t,D:$p[t]}}function Tc(n){let t=$p[n]||+(2.12*n).toFixed(2);return{d:n,D:t,pilot_depth:+(2*n).toFixed(2),cone_depth:+((t-n)/2/Math.tan(Math.PI/6)).toFixed(3)}}function Cu(n,t){return{width:+(3*t).toFixed(2),depth:+(.75*t).toFixed(3),relief_d:+(n-1.5*t).toFixed(2)}}function Wp(n){return n<=18?{radius:.6,depth:.2,width:2}:n<=80?{radius:.8,depth:.3,width:2.5}:{radius:1.2,depth:.4,width:4}}var m1={S45C:7.85,SM45C:7.85,SCM440:7.85,SCM415:7.85,SNCM439:7.85,SS400:7.85,SUJ2:7.81,"S45C-H":7.85,SUS304:7.93,SUS303:7.93,SUS316:7.98,SUS420J2:7.75,SUS440C:7.68,A6061:2.7,A7075:2.81,AL6061:2.7,"AL6061-T6":2.7,A5052:2.68,C3604:8.5,C2801:8.4,\uD669\uB3D9:8.5,\uCCAD\uB3D9:8.8,C5191:8.8,PBC2:8.8,POM:1.41,MC\uB098\uC77C\uB860:1.16,PEEK:1.32,PTFE:2.2};function Ac(n){if(!n)return 7.85;let t=String(n).replace(/\s+/g,"").toUpperCase();for(let[e,i]of Object.entries(m1))if(e.toUpperCase()===t)return i;return/SUS|STS|스테인리스/i.test(t)?7.93:/AL|A[567]\d{3}|알루미늄/i.test(t)?2.7:/C\d{4}|황동|BRASS/i.test(t)?8.5:/POM|나일론|PA|PEEK|PTFE|수지/i.test(t)?1.4:7.85}var Xp=["h6","h7","h8","g6","js6","k6","m6","n6","f7","e8"],qp=["Ra 0.4","Ra 0.8","Ra 1.6","Ra 3.2","Ra 6.3"];var zr="vringon-shaft/1.0",Pi=(n,t={})=>({type:"number",description:n,...t}),qe=(n,t={})=>({type:"number",exclusiveMinimum:0,description:n,...t}),de=(n,t={})=>({type:"string",description:n,...t}),g1=n=>({...n,type:[n.type,"null"]}),x1=["cyl","taper","thread"],_1=["chamfer","fillet","round","undercut"],y1=["snap_ring","relief","o_ring","generic"],v1=["keyway","center_hole","cross_hole","flat","hex","knurl","hex_socket"],M1=["shaft","bushing","pin","roller","spacer","flange","sleeve","spindle","other"],b1={$schema:"http://json-schema.org/draft-07/schema#",$id:"https://vringon.ai/schema/shaft_dsl.schema.json",title:"VRINGON \uD68C\uC804\uCCB4 DSL",description:"\uD68C\uC804\uCCB4 \uBD80\uD488 \uD558\uB098. \uC138\uADF8\uBA3C\uD2B8(\uCD95 \uBC29\uD5A5 \uC678\uD615) + \uC804\uC774(\uBAA8\uC11C\uB9AC) + \uD648 + \uBCF4\uC5B4(\uB0B4\uACBD) + \uBE44\uCD95\uB300\uCE6D \uD53C\uCC98.",type:"object",additionalProperties:!1,required:["dsl","segments"],properties:{dsl:de("DSL \uBC84\uC804 \uD0DC\uADF8. \uD56D\uC0C1 'vringon-shaft/1.0'.",{const:zr}),id:de("\uC2AC\uB7EC\uADF8 \uC2DD\uBCC4\uC790 (\uC608: stepped-shaft-01)."),name:de("\uC601\uBB38 \uBD80\uD488\uBA85."),name_ko:de("\uD55C\uAE00 \uBD80\uD488\uBA85."),part_class:de("\uBD80\uD488 \uBD84\uB958.",{enum:M1}),units:de("\uAE38\uC774 \uB2E8\uC704. mm \uACE0\uC815.",{enum:["mm"]}),material:de("\uC7AC\uC9C8 (\uC608: S45C, SUS304, A6061)."),drawing:{type:"object",additionalProperties:!1,description:"\uB3C4\uBA74 \uBA54\uD0C0 (\uD45C\uC81C\uB780).",properties:{number:de("\uB3C4\uBC88."),scale:de("\uCC99\uB3C4 (\uC608: 1:1)."),projection:de("\uD22C\uC0C1\uBC95.",{enum:["third","first"]}),notes:{type:"array",items:{type:"string"},description:"\uC77C\uBC18 \uC8FC\uAE30."}}},segments:{type:"array",minItems:1,maxItems:24,description:"\uC67C\uCABD\uBD80\uD130 \uC624\uB978\uCABD\uC73C\uB85C \uC774\uC5B4\uC9C0\uB294 \uC678\uD615 \uC138\uADF8\uBA3C\uD2B8. \uAE38\uC774\uC758 \uD569\uC774 \uC804\uCCB4 \uAE38\uC774.",items:{type:"object",additionalProperties:!1,required:["type","length"],properties:{type:de("cyl=\uC6D0\uD1B5, taper=\uD14C\uC774\uD37C(\uC6D0\uCD94), thread=\uC218\uB098\uC0AC(\uD638\uCE6D\uACBD=diameter).",{enum:x1}),length:qe("\uCD95 \uBC29\uD5A5 \uAE38\uC774 (mm)."),diameter:qe("cyl\xB7thread \uC758 \uC9C0\uB984 (mm). thread \uB294 \uD638\uCE6D\uACBD(\uBC14\uAE65\uC9C0\uB984)."),d_start:qe("taper \uC2DC\uC791(\uC67C\uCABD) \uC9C0\uB984 (mm)."),d_end:qe("taper \uB05D(\uC624\uB978\uCABD) \uC9C0\uB984 (mm)."),spec:de("thread \uD638\uCE6D (\uC608: M20x1.5, M12). \uD53C\uCE58 \uC0DD\uB7B5 \uC2DC \uBCF4\uD1B5\uB098\uC0AC."),pitch:qe("thread \uD53C\uCE58 (mm). spec \uC5D0\uC11C \uC720\uB3C4\uB418\uBA74 \uC0DD\uB7B5 \uAC00\uB2A5."),hand:de("\uB098\uC0AC \uBC29\uD5A5.",{enum:["right","left"]}),tolerance:de("\uCE58\uC218 \uACF5\uCC28 \uD45C\uAE30 (\uC608: h6, k6, \xB10.05, -0.013/-0.028)."),roughness:de("\uD45C\uBA74 \uAC70\uCE60\uAE30 \uD45C\uAE30 (\uC608: Ra 0.8)."),label:de("\uC6A9\uB3C4 \uB77C\uBCA8 (\uC608: \uBCA0\uC5B4\uB9C1 \uC790\uB9AC, \uAE30\uC5B4 \uC790\uB9AC).")}}},transitions:{type:"array",maxItems:48,description:"\uACBD\uACC4(\uB05D\uBA74\xB7\uB2E8\uCC28)\uC758 \uBAA8\uC11C\uB9AC \uCC98\uB9AC. at=0 \uC67C\uCABD \uB05D, at=n \uC624\uB978\uCABD \uB05D, at=k \uB294 \uC138\uADF8\uBA3C\uD2B8 k-1|k \uB2E8\uCC28.",items:{type:"object",additionalProperties:!1,required:["at","type"],properties:{at:{type:"integer",minimum:0,description:"\uACBD\uACC4 \uBC88\uD638."},type:de("chamfer=\uBCFC\uB85D \uBAA8\uC11C\uB9AC \uBAA8\uB530\uAE30, fillet=\uB2E8\uCC28 \uC624\uBAA9 \uBAA8\uC11C\uB9AC \uD544\uB81B, round=\uBCFC\uB85D \uBAA8\uC11C\uB9AC \uB77C\uC6B4\uB4DC, undercut=\uB2E8\uCC28 \uB3C4\uD53C\uD648.",{enum:_1}),size:qe("chamfer \uCD95 \uBC29\uD5A5 \uAE38\uC774 C (mm)."),angle:Pi("chamfer \uAC01\uB3C4(\uCD95 \uAE30\uC900, \uB3C4). \uAE30\uBCF8 45.",{minimum:5,maximum:85}),radius:qe("fillet\xB7round \uBC18\uACBD R (mm)."),width:qe("undercut \uD3ED (mm)."),depth:qe("undercut \uAE4A\uC774 (mm, \uBC18\uACBD \uBC29\uD5A5)."),standard:de("\uADDC\uACA9 \uD45C\uAE30 (\uC608: DIN 76-A, DIN 509-E).")}}},grooves:{type:"array",maxItems:24,description:"\uC138\uADF8\uBA3C\uD2B8 \uC548\uC758 \uD658\uD615 \uD648 (\uBA48\uCDA4\uB9C1 \uD648\xB7\uC624\uB9C1 \uD648 \uB4F1). \uD68C\uC804 \uB300\uCE6D.",items:{type:"object",additionalProperties:!1,required:["segment","offset","width","depth"],properties:{segment:{type:"integer",minimum:0,description:"\uC138\uADF8\uBA3C\uD2B8 \uC778\uB371\uC2A4."},offset:Pi("\uC138\uADF8\uBA3C\uD2B8 \uC67C\uCABD \uC2DC\uC791\uC5D0\uC11C \uD648 \uC67C\uCABD \uBCBD\uAE4C\uC9C0 (mm).",{minimum:0}),width:qe("\uD648 \uD3ED (mm)."),depth:qe("\uD648 \uAE4A\uC774 (mm, \uBC18\uACBD \uBC29\uD5A5)."),kind:de("\uD648 \uC885\uB958.",{enum:y1}),corner_radius:Pi("\uD648 \uBC14\uB2E5 \uBAA8\uC11C\uB9AC R (mm).",{minimum:0}),standard:de("\uADDC\uACA9 \uD45C\uAE30 (\uC608: DIN 471 \u230019\xD71.3).")}}},bore:g1({type:"object",additionalProperties:!1,required:["segments"],description:"\uCD95 \uC911\uC2EC \uBCF4\uC5B4(\uB0B4\uACBD). \uC5C6\uC73C\uBA74 null. through \uBA74 \uC138\uADF8\uBA3C\uD2B8 \uAE38\uC774 \uD569 = \uC804\uCCB4 \uAE38\uC774.",properties:{through:{type:"boolean",description:"\uAD00\uD1B5 \uC5EC\uBD80."},from:de("\uB9C9\uD78C \uBCF4\uC5B4\uC758 \uC2DC\uC791 \uB05D\uBA74.",{enum:["left","right"]}),segments:{type:"array",minItems:1,maxItems:12,items:{type:"object",additionalProperties:!1,required:["length","diameter"],properties:{length:qe("\uBCF4\uC5B4 \uC138\uADF8\uBA3C\uD2B8 \uAE38\uC774 (mm)."),diameter:qe("\uBCF4\uC5B4 \uC9C0\uB984 (mm)."),tolerance:de("\uACF5\uCC28 \uD45C\uAE30 (\uC608: H7)."),thread:de("\uC554\uB098\uC0AC \uD638\uCE6D (\uC608: M8). \uC788\uC73C\uBA74 \uC774 \uBCF4\uC5B4 \uC138\uADF8\uBA3C\uD2B8\uAC00 \uD0ED \uAD6C\uBA4D.")}}},chamfer_left:Pi("\uC67C\uCABD \uC785\uAD6C \uBAA8\uB530\uAE30 C (mm).",{minimum:0}),chamfer_right:Pi("\uC624\uB978\uCABD \uC785\uAD6C \uBAA8\uB530\uAE30 C (mm).",{minimum:0})}}),features:{type:"array",maxItems:24,description:"\uBE44\uCD95\uB300\uCE6D\xB7\uAD6D\uBD80 \uD53C\uCC98. type \uC5D0 \uB530\uB77C \uC4F0\uB294 \uD544\uB4DC\uAC00 \uB2E4\uB974\uB2E4.",items:{type:"object",additionalProperties:!1,required:["type"],properties:{type:de("keyway=\uD0A4\uD648, center_hole=\uC13C\uD130\uAD6C\uBA4D, cross_hole=\uD6A1\uAD6C\uBA4D, flat=\uD3C9\uBA74\uAC00\uACF5(D\uCEF7), hex=\uC721\uAC01, knurl=\uB110\uB9C1, hex_socket=\uB05D\uBA74 \uC721\uAC01 \uC18C\uCF13(\uB80C\uCE58 \uAD6C\uBA4D).",{enum:v1}),segment:{type:"integer",minimum:0,description:"keyway\xB7flat\xB7hex\xB7knurl \uC774 \uB193\uC774\uB294 \uC138\uADF8\uBA3C\uD2B8."},offset:Pi("\uC138\uADF8\uBA3C\uD2B8 \uC2DC\uC791\uC5D0\uC11C \uD53C\uCC98 \uC2DC\uC791\uAE4C\uC9C0 (mm).",{minimum:0}),length:qe("keyway\xB7flat\xB7knurl \uAE38\uC774 (mm)."),width:qe("keyway \uD3ED b (mm)."),depth:qe("keyway \uAE4A\uC774 t1 \xB7 flat \uAE4A\uC774 \xB7 hex_socket \uAE4A\uC774 (mm)."),angle:Pi("\uB458\uB808 \uAC01\uB3C4 (\uB3C4). 0=\uC815\uBA74(+Z), 90=\uC704(+Y).",{minimum:0,maximum:360}),kind:de("keyway \uD615\uC2DD.",{enum:["parallel","woodruff"]}),end:de("center_hole\xB7hex_socket \uC774 \uC788\uB294 \uB05D\uBA74.",{enum:["left","right"]}),form:de("center_hole \uD615\uC2DD (DIN 332).",{enum:["A","B","R"]}),d:qe("center_hole \uD30C\uC77C\uB7FF \uC9C0\uB984 (mm)."),position:Pi("cross_hole \uC911\uC2EC\uC758 x \uC704\uCE58 (\uC67C\uCABD \uB05D \uAE30\uC900, mm).",{minimum:0}),diameter:qe("cross_hole \uC9C0\uB984 (mm)."),through:{type:"boolean",description:"cross_hole \uAD00\uD1B5 \uC5EC\uBD80."},count:{type:"integer",minimum:1,maximum:2,description:"flat \uAC1C\uC218 (2=\uB9C8\uC8FC\uBCF4\uB294 \uB450 \uBA74)."},across_flats:qe("hex\xB7hex_socket \uB300\uBCC0 \uAC70\uB9AC (mm)."),pitch:qe("knurl \uD53C\uCE58 (mm)."),pattern:de("knurl \uBB34\uB2AC.",{enum:["straight","diamond"]}),standard:de("\uADDC\uACA9 \uD45C\uAE30 (\uC608: DIN 6885 8\xD77, DIN 332-A2.5).")}}},meta:{type:"object",additionalProperties:!0,description:"\uCD9C\uCC98\xB7\uC2E0\uB8B0\uB3C4 \uB4F1 \uBA54\uD0C0. \uAE30\uD558\uC5D0 \uC601\uD5A5 \uC5C6\uC74C.",properties:{source:de("golden | synthetic | extracted | edited"),confidence:Pi("\uD310\uB3C5 \uC2E0\uB8B0\uB3C4 0~1.",{minimum:0,maximum:1}),notes:{type:"array",items:{type:"string"}},generator:de("\uC0DD\uC131 \uB3C4\uAD6C/\uBC84\uC804."),seed:{type:"integer"},archetype:de("\uC0D8\uD50C\uB7EC \uC544\uD0A4\uD0C0\uC785."),valid:{type:"boolean"}}}}};function Yp(n){return n===null?"null":Array.isArray(n)?"array":typeof n=="number"?Number.isInteger(n)?"integer":"number":typeof n}function S1(n,t){let e=Array.isArray(n)?n:[n],i=Yp(t);return e.some(s=>s===i||s==="number"&&i==="integer")}function Ru(n,t=b1,e="$",i=[]){if(t.type&&!S1(t.type,n))return i.push(`${e}: ${Array.isArray(t.type)?t.type.join("|"):t.type} \uC774\uC5B4\uC57C \uD558\uB294\uB370 ${Yp(n)} \uC785\uB2C8\uB2E4.`),i;if(n==null)return i;if(t.const!==void 0&&n!==t.const&&i.push(`${e}: '${t.const}' \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.`),t.enum&&!t.enum.includes(n)&&i.push(`${e}: [${t.enum.join(", ")}] \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4 (\uBC1B\uC740 \uAC12: ${JSON.stringify(n)}).`),typeof n=="number"&&(t.minimum!==void 0&&n<t.minimum&&i.push(`${e}: ${t.minimum} \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4 (${n}).`),t.exclusiveMinimum!==void 0&&n<=t.exclusiveMinimum&&i.push(`${e}: ${t.exclusiveMinimum} \uBCF4\uB2E4 \uCEE4\uC57C \uD569\uB2C8\uB2E4 (${n}).`),t.maximum!==void 0&&n>t.maximum&&i.push(`${e}: ${t.maximum} \uC774\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4 (${n}).`),Number.isFinite(n)||i.push(`${e}: \uC720\uD55C\uD55C \uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4.`)),Array.isArray(n))t.minItems!==void 0&&n.length<t.minItems&&i.push(`${e}: \uCD5C\uC18C ${t.minItems}\uAC1C \uD544\uC694\uD569\uB2C8\uB2E4.`),t.maxItems!==void 0&&n.length>t.maxItems&&i.push(`${e}: \uCD5C\uB300 ${t.maxItems}\uAC1C\uAE4C\uC9C0\uC785\uB2C8\uB2E4.`),t.items&&n.forEach((s,r)=>Ru(s,t.items,`${e}[${r}]`,i));else if(typeof n=="object"){for(let s of t.required||[])n[s]===void 0&&i.push(`${e}.${s}: \uD544\uC218 \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.`);for(let[s,r]of Object.entries(n)){let o=t.properties?.[s];o?Ru(r,o,`${e}.${s}`,i):t.additionalProperties===!1&&i.push(`${e}.${s}: \uC2A4\uD0A4\uB9C8\uC5D0 \uC5C6\uB294 \uD56D\uBAA9\uC785\uB2C8\uB2E4.`)}}return i}function Ne(n){if(n.type==="taper")return[n.d_start,n.d_end];let t=n.diameter;if(!(t>0)&&n.type==="thread"){let e=$n(n.spec);e&&(t=e.nominal)}return[t,t]}function ye(n){return(n.segments||[]).reduce((t,e)=>t+(Number(e.length)||0),0)}function ni(n){let t=0;for(let e of n.segments||[])for(let i of Ne(e))Number.isFinite(i)&&(t=Math.max(t,i));return t}function ks(n){let t=[],e=0;for(let i of n.segments||[])t.push([e,e+i.length]),e+=i.length;return t}function _n(n,t){let e=ks(n);for(let i=0;i<e.length;i++){let[s,r]=e[i];if(t>=s-1e-9&&t<=r+1e-9){let o=n.segments[i];return o.type==="taper"?o.d_start+(o.d_end-o.d_start)*Math.min(1,Math.max(0,(t-s)/(r-s))):o.diameter}}return 0}function Sn(n,t){let e=n.bore;if(!e||!e.segments?.length)return 0;let i=ye(n),s=!e.through&&e.from==="right",r=s?i:0;for(let o of e.segments){let a=s?r-o.length:r,l=s?r:r+o.length;if(t>=a-1e-9&&t<=l+1e-9)return o.diameter;r=s?a:l}return 0}function w1(n){let t=[],e=[],i=n.segments||[],s=i.length,r=ye(n);r>0||t.push("segments: \uC804\uCCB4 \uAE38\uC774\uAC00 0 \uC785\uB2C8\uB2E4."),r>3e3&&e.push(`\uC804\uCCB4 \uAE38\uC774 ${r}mm \uB294 \uB370\uBAA8 \uBC94\uC704(3000mm)\uB97C \uB118\uC2B5\uB2C8\uB2E4. \uB2E8\uC704(inch?)\uB97C \uD655\uC778\uD558\uC138\uC694.`),i.forEach((c,d)=>{let u=`segments[${d}]`;if(c.type==="taper"?!(c.d_start>0)||!(c.d_end>0)?t.push(`${u}: taper \uB294 d_start\xB7d_end \uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.`):Math.abs(c.d_start-c.d_end)<1e-6&&e.push(`${u}: \uC2DC\uC791\xB7\uB05D \uC9C0\uB984\uC774 \uAC19\uC740 taper \uB294 cyl \uB85C \uC4F0\uB294 \uAC83\uC774 \uB9DE\uC2B5\uB2C8\uB2E4.`):(!(c.diameter>0)&&!(c.type==="thread"&&$n(c.spec))&&t.push(`${u}: ${c.type} \uC740 diameter \uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.`),(c.d_start!==void 0||c.d_end!==void 0)&&e.push(`${u}: ${c.type} \uC5D0\uB294 d_start/d_end \uB97C \uC4F0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4(\uBB34\uC2DC).`)),c.type==="thread"){let f=$n(c.spec);if(!c.spec)t.push(`${u}: thread \uB294 spec (\uC608: M20x1.5) \uC774 \uD544\uC694\uD569\uB2C8\uB2E4.`);else if(!f)t.push(`${u}: thread spec '${c.spec}' \uC744 \uD574\uC11D\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4 (M<\uD638\uCE6D>[x<\uD53C\uCE58>] \uD615\uC2DD).`);else{c.diameter&&Math.abs(f.nominal-c.diameter)>.01&&e.push(`${u}: spec ${c.spec} \uC758 \uD638\uCE6D\uACBD ${f.nominal} \uACFC diameter ${c.diameter} \uAC00 \uB2E4\uB985\uB2C8\uB2E4 (spec \uC6B0\uC120).`);let m=c.pitch||f.pitch;m?c.length<2*m&&e.push(`${u}: \uB098\uC0AC \uAE38\uC774 ${c.length} \uAC00 \uD53C\uCE58 ${m} \uC758 2\uBC30 \uBBF8\uB9CC\uC785\uB2C8\uB2E4.`):t.push(`${u}: \uD53C\uCE58\uB97C \uC54C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. spec \uC5D0 x<\uD53C\uCE58> \uB97C \uC4F0\uAC70\uB098 pitch \uB97C \uC8FC\uC138\uC694.`)}}(c.diameter>600||c.d_start>600||c.d_end>600)&&e.push(`${u}: \uC9C0\uB984\uC774 600mm \uB97C \uB118\uC2B5\uB2C8\uB2E4. \uB2E8\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.`)});let o=c=>_n(n,c)/2,a=c=>Sn(n,c)/2,l=ks(n);(n.transitions||[]).forEach((c,d)=>{let u=`transitions[${d}]`;if(!(c.at>=0&&c.at<=s)){t.push(`${u}: at=${c.at} \uB294 0~${s} \uC0AC\uC774\uC5EC\uC57C \uD569\uB2C8\uB2E4.`);return}let f=c.at===0||c.at===s,m=l[Math.min(c.at,s-1)]?.[c.at===s?1:0]??0,x=c.at===0?null:_n(n,m-1e-6)/2,p=c.at===s?null:_n(n,m+1e-6)/2,g=Math.max(x??0,p??0),M=f?g:Math.min(x,p),y=f?g-a(m):g-M;if(c.type==="chamfer")if(!(c.size>0))t.push(`${u}: chamfer \uB294 size \uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.`);else{let _=c.size*Math.tan((c.angle||45)*Math.PI/180);!f&&y<1e-6?e.push(`${u}: \uACBD\uACC4 ${c.at} \uC5D0 \uB2E8\uCC28\uAC00 \uC5C6\uC5B4 \uBAA8\uB530\uAE30\uAC00 \uB9CC\uB4E4\uC5B4\uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`):_>=y-1e-9&&t.push(`${u}: \uBAA8\uB530\uAE30 \uBC18\uACBD \uB099\uCC28 ${_.toFixed(2)} \uAC00 ${f?"\uB05D\uBA74 \uC0B4\uB450\uAED8":"\uB2E8\uCC28"} ${y.toFixed(2)} \uC774\uC0C1\uC785\uB2C8\uB2E4.`);let S=f?i[c.at===0?0:s-1].length:Math.min(i[c.at-1].length,i[c.at].length);c.size>=S&&t.push(`${u}: \uBAA8\uB530\uAE30 \uAE38\uC774 ${c.size} \uAC00 \uC778\uC811 \uC138\uADF8\uBA3C\uD2B8 \uAE38\uC774 ${S} \uC774\uC0C1\uC785\uB2C8\uB2E4.`)}else if(c.type==="fillet")if(!(c.radius>0))t.push(`${u}: fillet \uC740 radius \uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.`);else if(f)e.push(`${u}: \uB05D\uBA74\uC5D0\uB294 fillet(\uC624\uBAA9) \uB300\uC2E0 round(\uBCFC\uB85D)\uB97C \uC4F0\uC138\uC694. round \uB85C \uCC98\uB9AC\uD569\uB2C8\uB2E4.`);else if(y<1e-6)e.push(`${u}: \uACBD\uACC4 ${c.at} \uC5D0 \uB2E8\uCC28\uAC00 \uC5C6\uC5B4 \uD544\uB81B\uC774 \uB9CC\uB4E4\uC5B4\uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`);else{c.radius>y+1e-9&&t.push(`${u}: \uD544\uB81B R${c.radius} \uAC00 \uB2E8\uCC28 ${y.toFixed(2)} \uBCF4\uB2E4 \uD07D\uB2C8\uB2E4.`);let _=x<p?i[c.at-1]:i[c.at];c.radius>=_.length&&t.push(`${u}: \uD544\uB81B R${c.radius} \uAC00 \uC791\uC740\uCABD \uC138\uADF8\uBA3C\uD2B8 \uAE38\uC774 ${_.length} \uC774\uC0C1\uC785\uB2C8\uB2E4.`)}else if(c.type==="round")c.radius>0?c.radius>=y-1e-9&&y>0&&t.push(`${u}: \uB77C\uC6B4\uB4DC R${c.radius} \uAC00 ${f?"\uB05D\uBA74 \uC0B4\uB450\uAED8":"\uB2E8\uCC28"} ${y.toFixed(2)} \uC774\uC0C1\uC785\uB2C8\uB2E4.`):t.push(`${u}: round \uB294 radius \uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.`);else if(c.type==="undercut")if(!(c.width>0)||!(c.depth>0))t.push(`${u}: undercut \uC740 width\xB7depth \uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.`);else if(f)t.push(`${u}: undercut \uC740 \uB2E8\uCC28(0<at<n)\uC5D0\uB9CC \uB458 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`);else if(y<1e-6)e.push(`${u}: \uACBD\uACC4 ${c.at} \uC5D0 \uB2E8\uCC28\uAC00 \uC5C6\uC5B4 \uB3C4\uD53C\uD648\uC774 \uAC78\uB9B4 \uBCBD\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.`);else{let _=x<p?i[c.at-1]:i[c.at];c.width>=_.length/2&&t.push(`${u}: \uB3C4\uD53C\uD648 \uD3ED ${c.width} \uAC00 \uC791\uC740\uCABD \uC138\uADF8\uBA3C\uD2B8 \uAE38\uC774\uC758 \uC808\uBC18(${(_.length/2).toFixed(1)}) \uC774\uC0C1\uC785\uB2C8\uB2E4.`),c.depth>=M-a(m)-.3&&t.push(`${u}: \uB3C4\uD53C\uD648 \uAE4A\uC774 ${c.depth} \uAC00 \uC0B4\uB450\uAED8\uB97C \uB118\uC2B5\uB2C8\uB2E4.`)}});for(let c=1;c<s;c++){let d=(n.transitions||[]).filter(p=>p.at===c),u=d.find(p=>p.type==="fillet"),f=d.find(p=>p.type==="chamfer"),m=d.find(p=>p.type==="undercut"),x=Math.abs(Ne(i[c-1])[1]-Ne(i[c])[0])/2;if(u&&f&&u.radius>0&&f.size>0){let p=f.size*Math.tan((f.angle||45)*Math.PI/180);u.radius+p>=x-1e-9&&t.push(`\uACBD\uACC4 ${c}: \uD544\uB81B R${u.radius} + \uBAA8\uB530\uAE30 \uB099\uCC28 ${p.toFixed(2)} \uAC00 \uB2E8\uCC28 ${x.toFixed(2)} \uB97C \uB118\uC2B5\uB2C8\uB2E4.`)}u&&m&&e.push(`\uACBD\uACC4 ${c}: \uB3C4\uD53C\uD648\uACFC \uD544\uB81B\uC774 \uD568\uAED8 \uC788\uC5B4 \uD544\uB81B\uC740 \uBB34\uC2DC\uB429\uB2C8\uB2E4.`)}if((n.grooves||[]).forEach((c,d)=>{let u=`grooves[${d}]`;if(!(c.segment>=0&&c.segment<s)){t.push(`${u}: segment=${c.segment} \uB294 0~${s-1} \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.`);return}let f=i[c.segment];c.offset+c.width>f.length+1e-9&&t.push(`${u}: \uD648(offset ${c.offset} + \uD3ED ${c.width}) \uC774 \uC138\uADF8\uBA3C\uD2B8 \uAE38\uC774 ${f.length} \uB97C \uB118\uC2B5\uB2C8\uB2E4.`);let m=l[c.segment][0]+c.offset+c.width/2,x=o(m)-a(m);c.depth>=x-.3&&t.push(`${u}: \uD648 \uAE4A\uC774 ${c.depth} \uAC00 \uC0B4\uB450\uAED8 ${x.toFixed(2)} \uB97C \uB118\uC2B5\uB2C8\uB2E4.`),f.type==="thread"&&e.push(`${u}: \uB098\uC0AC\uBD80 \uC548\uC758 \uD648\uC740 \uB4DC\uBB45\uB2C8\uB2E4. \uB3C4\uD53C\uD648\uC774\uBA74 transitions.undercut \uC744 \uC4F0\uC138\uC694.`)}),n.bore){let c=n.bore,d=(c.segments||[]).reduce((m,x)=>m+x.length,0);c.through?Math.abs(d-r)>1e-6&&t.push(`bore: \uAD00\uD1B5 \uBCF4\uC5B4\uC778\uB370 \uC138\uADF8\uBA3C\uD2B8 \uAE38\uC774 \uD569 ${d} \uC774 \uC804\uCCB4 \uAE38\uC774 ${r} \uC640 \uB2E4\uB985\uB2C8\uB2E4.`):(c.from||t.push("bore: \uB9C9\uD78C \uBCF4\uC5B4\uB294 from(left|right) \uC774 \uD544\uC694\uD569\uB2C8\uB2E4."),d>=r&&t.push(`bore: \uB9C9\uD78C \uBCF4\uC5B4 \uAE4A\uC774 ${d} \uAC00 \uC804\uCCB4 \uAE38\uC774 ${r} \uC774\uC0C1\uC785\uB2C8\uB2E4 (\uAD00\uD1B5\uC774\uBA74 through:true).`));let u=!c.through&&c.from==="right",f=u?r:0;(c.segments||[]).forEach((m,x)=>{let p=u?f-m.length:f,g=u?f:f+m.length,M=1/0;for(let y=0;y<=20;y++)M=Math.min(M,_n(n,p+(g-p)*y/20));m.diameter>=M-.6&&t.push(`bore.segments[${x}]: \uBCF4\uC5B4 \u2300${m.diameter} \uAC00 \uADF8 \uAD6C\uAC04 \uCD5C\uC18C \uC678\uACBD \u2300${M.toFixed(2)} \uC5D0 \uB300\uD574 \uC0B4\uB450\uAED8\uB97C \uB0A8\uAE30\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.`),f=u?p:g})}let h=new Set;return(n.features||[]).forEach((c,d)=>{let u=`features[${d}]`,f=["keyway","flat","hex","knurl"].includes(c.type);if(f&&!(c.segment>=0&&c.segment<s)){t.push(`${u}: ${c.type} \uC758 segment=${c.segment} \uB294 0~${s-1} \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4.`);return}let m=f?i[c.segment]:null,x=m?Math.min(...Ne(m)):0;if(c.type==="keyway")if(!(c.width>0&&c.depth>0&&c.length>0))t.push(`${u}: keyway \uB294 width\xB7depth\xB7length \uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.`);else{(c.offset||0)+c.length>m.length+1e-9&&t.push(`${u}: \uD0A4\uD648(offset ${c.offset||0} + \uAE38\uC774 ${c.length}) \uC774 \uC138\uADF8\uBA3C\uD2B8 \uAE38\uC774 ${m.length} \uB97C \uB118\uC2B5\uB2C8\uB2E4.`),c.width>=x*.8&&t.push(`${u}: \uD0A4\uD648 \uD3ED ${c.width} \uAC00 \uCD95\uACBD ${x} \uC5D0 \uBE44\uD574 \uD07D\uB2C8\uB2E4.`);let p=x/2-Sn(n,l[c.segment][0]+(c.offset||0)+c.length/2)/2;c.depth>=p-.5&&t.push(`${u}: \uD0A4\uD648 \uAE4A\uC774 ${c.depth} \uAC00 \uC0B4\uB450\uAED8 ${p.toFixed(2)} \uB97C \uB118\uC2B5\uB2C8\uB2E4.`),m.type==="thread"&&e.push(`${u}: \uB098\uC0AC\uBD80\uC5D0 \uD0A4\uD648\uC740 \uB4DC\uBB45\uB2C8\uB2E4.`)}else if(c.type==="center_hole")if(!["left","right"].includes(c.end))t.push(`${u}: center_hole \uC740 end(left|right) \uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.`);else{h.has(c.end)&&e.push(`${u}: ${c.end} \uB05D\uC5D0 \uC13C\uD130\uAD6C\uBA4D\uC774 \uC911\uBCF5\uC785\uB2C8\uB2E4.`),h.add(c.end);let p=c.end==="left"?0:r;Sn(n,p+(c.end==="left"?1e-6:-1e-6))>0&&t.push(`${u}: ${c.end} \uB05D\uC5D0 \uBCF4\uC5B4\uAC00 \uC788\uC5B4 \uC13C\uD130\uAD6C\uBA4D\uC744 \uB458 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.`);let g=_n(n,p+(c.end==="left"?1e-6:-1e-6));c.d&&c.d*2.12>=g*.6&&t.push(`${u}: \uC13C\uD130\uAD6C\uBA4D d${c.d} \uAC00 \uB05D\uBA74 \uC9C0\uB984 \u2300${g} \uC5D0 \uBE44\uD574 \uD07D\uB2C8\uB2E4.`)}else if(c.type==="cross_hole")if(!(c.diameter>0)||!(c.position>=0))t.push(`${u}: cross_hole \uC740 position\xB7diameter \uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.`);else{let p=_n(n,c.position);(c.position-c.diameter/2<-1e-9||c.position+c.diameter/2>r+1e-9)&&t.push(`${u}: \uD6A1\uAD6C\uBA4D(x=${c.position}, \u2300${c.diameter}) \uC774 \uBD80\uD488 \uAE38\uC774 ${r} \uBC16\uC73C\uB85C \uB098\uAC11\uB2C8\uB2E4.`),c.diameter>=p*.7&&t.push(`${u}: \uD6A1\uAD6C\uBA4D \u2300${c.diameter} \uAC00 \uADF8 \uC704\uCE58 \uCD95\uACBD \u2300${p.toFixed(1)} \uC5D0 \uBE44\uD574 \uD07D\uB2C8\uB2E4.`),c.through===!1&&!(c.depth>0)&&t.push(`${u}: \uB9C9\uD78C \uD6A1\uAD6C\uBA4D\uC740 depth \uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.`)}else if(c.type==="flat")c.depth>0&&c.length>0?((c.offset||0)+c.length>m.length+1e-9&&t.push(`${u}: \uD3C9\uBA74(offset ${c.offset||0} + \uAE38\uC774 ${c.length}) \uC774 \uC138\uADF8\uBA3C\uD2B8 \uAE38\uC774 ${m.length} \uB97C \uB118\uC2B5\uB2C8\uB2E4.`),c.depth>=x/2*.9&&t.push(`${u}: \uD3C9\uBA74 \uAE4A\uC774 ${c.depth} \uAC00 \uBC18\uACBD ${x/2} \uC5D0 \uBE44\uD574 \uD07D\uB2C8\uB2E4.`)):t.push(`${u}: flat \uC740 depth\xB7length \uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.`);else if(c.type==="hex")c.across_flats>0?(c.across_flats>=x&&t.push(`${u}: \uC721\uAC01 \uB300\uBCC0 ${c.across_flats} \uB294 \uC138\uADF8\uBA3C\uD2B8 \uC9C0\uB984 ${x} \uBCF4\uB2E4 \uC791\uC544\uC57C \uD569\uB2C8\uB2E4.`),c.across_flats<x*.6&&e.push(`${u}: \uC721\uAC01 \uB300\uBCC0 ${c.across_flats} \uAC00 \uC9C0\uB984 ${x} \uC758 60% \uBBF8\uB9CC\uC774\uB77C \uC0B4\uC774 \uC587\uC2B5\uB2C8\uB2E4.`)):t.push(`${u}: hex \uB294 across_flats \uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.`);else if(c.type==="knurl")c.length>0?(c.offset||0)+c.length>m.length+1e-9&&t.push(`${u}: \uB110\uB9C1 \uAD6C\uAC04\uC774 \uC138\uADF8\uBA3C\uD2B8 \uAE38\uC774 ${m.length} \uB97C \uB118\uC2B5\uB2C8\uB2E4.`):t.push(`${u}: knurl \uC740 length \uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.`);else if(c.type==="hex_socket")if(!["left","right"].includes(c.end))t.push(`${u}: hex_socket \uC740 end(left|right) \uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.`);else if(!(c.across_flats>0&&c.depth>0))t.push(`${u}: hex_socket \uC740 across_flats\xB7depth \uAC00 \uD544\uC694\uD569\uB2C8\uB2E4.`);else{let p=c.end==="left"?1e-6:r-1e-6,g=_n(n,p);Sn(n,p)>0&&t.push(`${u}: ${c.end} \uB05D\uC5D0 \uBCF4\uC5B4\uAC00 \uC788\uC5B4 \uC721\uAC01 \uC18C\uCF13\uC744 \uB458 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.`),h.has(c.end)&&t.push(`${u}: ${c.end} \uB05D\uC5D0 \uC13C\uD130\uAD6C\uBA4D\uACFC \uC721\uAC01 \uC18C\uCF13\uC774 \uD568\uAED8 \uC788\uC2B5\uB2C8\uB2E4.`);let M=c.across_flats/Math.cos(Math.PI/6);M>=g*.85&&t.push(`${u}: \uC721\uAC01 \uC18C\uCF13 \uB300\uAC01 ${M.toFixed(1)} \uC774 \uB05D\uBA74 \uC9C0\uB984 \u2300${g} \uC5D0 \uBE44\uD574 \uD07D\uB2C8\uB2E4.`),c.depth>=r*.6&&t.push(`${u}: \uC721\uAC01 \uC18C\uCF13 \uAE4A\uC774 ${c.depth} \uAC00 \uC804\uCCB4 \uAE38\uC774\uC758 60% \uB97C \uB118\uC2B5\uB2C8\uB2E4.`)}}),{ok:t.length===0,errors:t,warnings:e}}function Oe(n){let t=Ru(n);if(t.length)return{ok:!1,errors:t,warnings:[],stage:"schema"};let e=w1(n);return{...e,stage:e.ok?"ok":"geometry"}}function Bs(n){let t=JSON.parse(JSON.stringify(n||{}));t.dsl=zr,t.units="mm",Array.isArray(t.segments)||(t.segments=[]);for(let e of t.segments){if(e.type==="cylinder"&&(e.type="cyl"),e.type==="cone"&&(e.type="taper"),e.type==="thread"&&e.spec){e.spec=String(e.spec).replace(/×/g,"x").replace(/\s+/g,"");let i=$n(e.spec);i&&(e.diameter||(e.diameter=i.nominal),!e.pitch&&i.pitch&&(e.pitch=i.pitch))}e.type==="taper"&&e.diameter&&!e.d_start&&(e.d_start=e.diameter,e.d_end=e.diameter),e.type!=="taper"&&(delete e.d_start,delete e.d_end);for(let i of["length","diameter","d_start","d_end","pitch"])e[i]!==void 0&&e[i]!==null&&(e[i]=Number(e[i]));for(let i of Object.keys(e))(e[i]===null||e[i]==="")&&delete e[i]}for(let e of["transitions","grooves","features"]){(t[e]===null||t[e]===void 0)&&(t[e]=[]),Array.isArray(t[e])||(t[e]=[]);for(let i of t[e])for(let s of Object.keys(i))(i[s]===null||i[s]==="")&&delete i[s]}for(let e of t.transitions)e.at!==void 0&&(e.at=Math.round(Number(e.at))),e.type==="chamfer"&&e.radius&&!e.size&&(e.size=e.radius,delete e.radius),e.type==="fillet"&&e.size&&!e.radius&&(e.radius=e.size,delete e.size);for(let e of t.features)e.type==="center_hole"&&!e.form&&(e.form="A"),e.type==="hex_socket"&&(delete e.form,delete e.d),e.type==="cross_hole"&&e.through===void 0&&(e.through=!0),e.type==="keyway"&&!e.kind&&(e.kind="parallel"),e.angle===void 0&&delete e.angle;if((t.bore===void 0||t.bore&&(!Array.isArray(t.bore.segments)||!t.bore.segments.length))&&(t.bore=null),t.bore){t.bore.through===void 0&&(t.bore.through=!t.bore.from);for(let e of Object.keys(t.bore))t.bore[e]===null&&delete t.bore[e];t.bore.through&&delete t.bore.from}return t.meta||(t.meta={}),t}var Zo=Math.PI/180;function Cc(n,t,e,i,s,r,o){let a=[];for(let l=0;l<=r;l++){let h=(i+(s-i)*l/r)*Zo;a.push({x:n+e*Math.cos(h),r:t+e*Math.sin(h),tag:l===0||l===r?o:`${o}_arc`})}return a}function Zp(n,t){let e={};for(let i of n.transitions||[])i.at===t&&(e[i.type]=i);return e}function _i(n,t=10){let e=n.segments||[],i=ks(n),s=e.length,r=[],o=[],a=(h,c,d)=>r.push({x:h,r:c,tag:d});for(let h=0;h<s;h++){let c=e[h],[d,u]=i[h],[f,m]=Ne(c),x=f/2,p=m/2,g=v=>x+(p-x)*(v-d)/(u-d||1),M=Zp(n,h),y="none";if(h===0)y="convex";else{let v=Ne(e[h-1])[1]/2;y=x>v+1e-9?"convex":x<v-1e-9?"concave":"flush"}let _=Zp(n,h+1),S="none";if(h===s-1)S="convex";else{let v=Ne(e[h+1])[0]/2;S=p>v+1e-9?"convex":p<v-1e-9?"concave":"flush"}let w=d;if(y==="convex"&&M.chamfer?.size>0){let v=M.chamfer,T=v.size*Math.tan((v.angle||45)*Zo);a(d,x-T,"chamfer"),a(d+v.size,g(d+v.size),"chamfer_end"),w=d+v.size}else if(y==="convex"&&M.round?.radius>0){let v=M.round.radius;r.push(...Cc(d+v,x-v,v,180,90,t,"round")),w=d+v}else if(y==="concave"&&M.undercut?.width>0){let v=M.undercut;a(d,x-v.depth,"undercut"),a(d+v.width,x-v.depth,"undercut"),a(d+v.width,g(d+v.width),"undercut_end"),w=d+v.width,M.fillet&&o.push(`\uACBD\uACC4 ${h}: \uB3C4\uD53C\uD648\uACFC \uD544\uB81B\uC774 \uD568\uAED8 \uC788\uC5B4 \uD544\uB81B\uC740 \uBB34\uC2DC\uD588\uC2B5\uB2C8\uB2E4.`)}else if(y==="concave"&&M.fillet?.radius>0){let v=M.fillet.radius;r.push(...Cc(d+v,x+v,v,180,270,t,"fillet")),w=d+v}else a(d,x,"corner");let E=(n.grooves||[]).filter(v=>v.segment===h).sort((v,T)=>v.offset-T.offset);for(let v of E){let T=d+v.offset,L=d+v.offset+v.width;if(T<w-1e-9){o.push(`grooves: \uC138\uADF8\uBA3C\uD2B8 ${h} \uC758 \uD648(offset ${v.offset}) \uC774 \uBAA8\uC11C\uB9AC \uCC98\uB9AC\uC640 \uACB9\uCCD0 \uAC74\uB108\uB6F0\uC5C8\uC2B5\uB2C8\uB2E4.`);continue}a(T,g(T),"groove"),a(T,g(T)-v.depth,"groove_floor"),a(L,g(L)-v.depth,"groove_floor"),a(L,g(L),"groove_end"),w=L}if(S==="convex"&&_.chamfer?.size>0){let v=_.chamfer,T=v.size*Math.tan((v.angle||45)*Zo);u-v.size<w-1e-9&&o.push(`\uACBD\uACC4 ${h+1}: \uBAA8\uB530\uAE30\uAC00 \uC55E\uC120 \uD53C\uCC98\uC640 \uACB9\uCE69\uB2C8\uB2E4.`),a(u-v.size,g(u-v.size),"chamfer_start"),a(u,p-T,"chamfer")}else if(S==="convex"&&_.round?.radius>0){let v=_.round.radius;r.push(...Cc(u-v,p-v,v,90,0,t,"round"))}else if(S==="concave"&&_.undercut?.width>0){let v=_.undercut;a(u-v.width,g(u-v.width),"undercut_start"),a(u-v.width,p-v.depth,"undercut"),a(u,p-v.depth,"undercut"),_.fillet&&o.push(`\uACBD\uACC4 ${h+1}: \uB3C4\uD53C\uD648\uACFC \uD544\uB81B\uC774 \uD568\uAED8 \uC788\uC5B4 \uD544\uB81B\uC740 \uBB34\uC2DC\uD588\uC2B5\uB2C8\uB2E4.`)}else if(S==="concave"&&_.fillet?.radius>0){let v=_.fillet.radius;r.push(...Cc(u-v,p+v,v,270,360,t,"fillet"))}else a(u,p,"corner")}let l=[];for(let h of r){let c=l[l.length-1];c&&Math.abs(c.x-h.x)<1e-9&&Math.abs(c.r-h.r)<1e-9||l.push(h)}return{points:l,notes:o}}function Jo(n,t=10){let e=ye(n),i=[],s=(u,f,m)=>i.push({x:u,r:f,tag:m}),r=Object.fromEntries((n.features||[]).filter(u=>u.type==="center_hole").map(u=>[u.end,u])),o=()=>{let u=r.left;if(!u){s(0,0,"axis");return}let f=Tc(u.d||2),m=f.d/2/Math.tan(59*Zo);s(0,f.D/2,"center_hole"),s(f.cone_depth,f.d/2,"center_hole"),s(f.cone_depth+f.pilot_depth,f.d/2,"center_hole"),s(f.cone_depth+f.pilot_depth+m,0,"center_hole_tip")},a=()=>{let u=r.right;if(!u){s(e,0,"axis");return}let f=Tc(u.d||2),m=f.d/2/Math.tan(59*Zo);s(e-f.cone_depth-f.pilot_depth-m,0,"center_hole_tip"),s(e-f.cone_depth-f.pilot_depth,f.d/2,"center_hole"),s(e-f.cone_depth,f.d/2,"center_hole"),s(e,f.D/2,"center_hole")},l=n.bore;if(!l||!l.segments?.length)return o(),a(),{points:Jp(i)};let h=l.segments,c=l.chamfer_left||0,d=l.chamfer_right||0;if(l.through){let u=0;h.forEach((f,m)=>{let x=f.diameter/2;m===0?c>0?(s(0,x+c,"bore_chamfer"),s(c,x,"bore_chamfer_end")):s(0,x,"bore"):s(u,x,"bore_step");let p=u+f.length;m===h.length-1&&d>0?(s(p-d,x,"bore_chamfer_start"),s(p,x+d,"bore_chamfer")):s(p,x,"bore"),u=p})}else if(l.from==="right"){o();let u=h.reduce((x,p)=>x+p.length,0),f=e-u;s(f,0,"bore_bottom");let m=[...h].reverse();m.forEach((x,p)=>{let g=x.diameter/2;s(f,g,p===0?"bore_bottom":"bore_step");let M=f+x.length;p===m.length-1&&d>0?(s(M-d,g,"bore_chamfer_start"),s(M,g+d,"bore_chamfer")):s(M,g,"bore"),f=M})}else{let u=0;h.forEach((f,m)=>{let x=f.diameter/2;m===0?c>0?(s(0,x+c,"bore_chamfer"),s(c,x,"bore_chamfer_end")):s(0,x,"bore"):s(u,x,"bore_step");let p=u+f.length;s(p,x,"bore"),u=p}),s(u,0,"bore_bottom"),a()}return{points:Jp(i)}}function Jp(n){let t=[];for(let e of n){let i=t[t.length-1];i&&Math.abs(i.x-e.x)<1e-9&&Math.abs(i.r-e.r)<1e-9||t.push(e)}return t}function ii(n){let t=n.segments||[],e=ks(n),i=t.length,s={segments:[],shoulders:[],transitions:[],grooves:[],threads:[],features:[],bore:null,centerHoles:[]};t.forEach((r,o)=>{let[a,l]=e[o],[h,c]=Ne(r),d={i:o,x0:a,x1:l,ds:h,de:c,type:r.type,tolerance:r.tolerance,roughness:r.roughness,label:r.label,spec:r.spec};if(s.segments.push(d),r.type==="thread"){let u=$n(r.spec)||{nominal:r.diameter,pitch:r.pitch},f=r.pitch||u.pitch||1;s.threads.push({i:o,x0:a,x1:l,r_major:(u.nominal||r.diameter)/2,r_minor:Gp(u.nominal||r.diameter,f)/2,spec:r.spec,pitch:f})}});for(let r=1;r<i;r++){let o=Ne(t[r-1])[1]/2,a=Ne(t[r])[0]/2;Math.abs(o-a)>1e-9&&s.shoulders.push({at:r,x:e[r][0],rL:o,rR:a})}for(let r of n.transitions||[]){if(!(r.at>=0&&r.at<=i))continue;let o=r.at===0?0:e[r.at-1][1],a=r.at===0?null:Ne(t[r.at-1])[1]/2,l=r.at===i?null:Ne(t[r.at])[0]/2,h=r.at===0||r.at===i,c,d;r.type==="chamfer"||r.type==="round"?h?(c=r.at===0?0:i-1,d=r.at===0?l:a):(c=l>a?r.at:r.at-1,d=Math.max(a,l)):h?(c=r.at===0?0:i-1,d=r.at===0?l:a):(c=l<a?r.at:r.at-1,d=Math.min(a,l)),s.transitions.push({...r,x:o,r:d,side:c,isEnd:h,dir:h?r.at===0?"left":"right":c===r.at?"right":"left"})}for(let r of n.grooves||[]){if(!(r.segment>=0&&r.segment<i))continue;let[o]=e[r.segment],a=Ne(t[r.segment])[0]/2;s.grooves.push({...r,x0:o+r.offset,x1:o+r.offset+r.width,r_top:a,r_floor:a-r.depth})}for(let r of n.features||[]){if(r.type==="center_hole"){let c=Tc(r.d||2);s.centerHoles.push({...r,...c,x:r.end==="left"?0:ye(n)});continue}let o=r.segment>=0&&r.segment<i?t[r.segment]:null,a=o?e[r.segment][0]:0,l=o?Math.min(...Ne(o)):r.type==="cross_hole"?_n(n,r.position):0,h={...r,D:l};if((r.type==="keyway"||r.type==="flat"||r.type==="knurl")&&(h.x0=a+(r.offset||0),h.x1=h.x0+r.length),r.type==="hex"&&(h.x0=a,h.x1=e[r.segment][1]),r.type==="cross_hole"&&(h.x0=r.position-r.diameter/2,h.x1=r.position+r.diameter/2),r.type==="hex_socket"){let c=ye(n);h.x0=r.end==="left"?0:c-r.depth,h.x1=r.end==="left"?r.depth:c,h.D=_n(n,r.end==="left"?1e-6:c-1e-6)}s.features.push(h)}if(n.bore){let r=ye(n),o=!n.bore.through&&n.bore.from==="right",a=o?r:0,l=[];for(let h of n.bore.segments){let c=o?a-h.length:a,d=o?a:a+h.length;l.push({x0:c,x1:d,r:h.diameter/2,diameter:h.diameter,tolerance:h.tolerance,thread:h.thread}),a=o?c:d}s.bore={through:!!n.bore.through,from:n.bore.from,segments:l.sort((h,c)=>h.x0-c.x0)}}return s}function E1(n,t,e=720){let i=Math.PI*n*n,s=0,r=(t.width||0)/2,o=t.depth||0,a=(t.across_flats||0)/2;for(let l=0;l<e;l++){let h=2*Math.PI*(l+.5)/e,c=n;if(t.type==="keyway"){let d=Math.cos(h),u=Math.abs(Math.sin(h));d>0&&((n-o)*u<=r*d?c=Math.min(n,(n-o)/d):n*u<=r&&(c=Math.min(n,r/u)))}else if(t.type==="flat"){let d=Math.cos(h),u=t.count===2?2:1;d>0&&(c=Math.min(n,(n-o)/d)),u===2&&d<0&&(c=Math.min(n,(n-o)/-d))}else if(t.type==="hex"){let d=(h+Math.PI/6)%(Math.PI/3)-Math.PI/6;c=Math.min(n,a/Math.cos(d))}s+=.5*c*c*(2*Math.PI/e)}return Math.max(0,i-s)}function jp(n){let t=0;for(let e=1;e<n.length;e++){let i=n[e-1],s=n[e];t+=Math.PI/3*(s.x-i.x)*(i.r*i.r+i.r*s.r+s.r*s.r)}return t}function T1(n,t=12){let e=_i(n,t).points,i=Jo(n,t).points,s=jp(e)-jp(i),r=[];for(let o of n.features||[])if(["keyway","flat","hex"].includes(o.type)&&o.segment>=0&&o.segment<(n.segments||[]).length){let a=n.segments[o.segment],l=Math.min(...Ne(a))/2,h=o.type==="hex"?a.length:o.length,c=E1(l,o);r.push({type:o.type,mm3:c*h}),s-=c*h}else if(o.type==="hex_socket"){let a=Math.sqrt(3)/2*o.across_flats*o.across_flats*o.depth;r.push({type:o.type,mm3:a}),s-=a}else if(o.type==="cross_hole"){let a=_n(n,o.position),l=Sn(n,o.position),h=o.through===!1?Math.min(o.depth||0,a):Math.max(0,a-l),c=Math.PI*(o.diameter/2)**2*h;r.push({type:o.type,mm3:c}),s-=c}return{volume_mm3:Math.max(0,s),removed:r}}function Rc(n,t=7.85){let{volume_mm3:e,removed:i}=T1(n);return{volume_mm3:e,volume_cm3:e/1e3,mass_g:e/1e3*t,removed:i}}function A1(n,t){let e=0;for(let i=1;i<n.length;i++){let s=n[i-1],r=n[i];t<Math.min(s.x,r.x)-1e-9||t>Math.max(s.x,r.x)+1e-9||(Math.abs(r.x-s.x)<1e-9?e=Math.max(e,s.r,r.r):e=Math.max(e,s.r+(r.r-s.r)*(t-s.x)/(r.x-s.x)))}return e}function Iu(n,t=400){let e=ye(n),i=_i(n,8).points,s=new Float64Array(t);for(let r=0;r<t;r++)s[r]=A1(i,e*(r+.5)/t);return{L:e,samples:s}}var Kp=1e-5,Qp=0,Pu=1,Ic=2,tm=3,Lu=class n{constructor(t,e){this.pos=t,this.normal=e}clone(){return new n(this.pos.clone(),this.normal.clone())}flip(){this.normal.negate()}interpolate(t,e){return new n(this.pos.clone().lerp(t.pos,e),this.normal.clone().lerp(t.normal,e).normalize())}},Nu=class n{constructor(t,e){this.normal=t,this.w=e}static fromPoints(t,e,i){let s=new z().subVectors(e,t).cross(new z().subVectors(i,t)).normalize();return new n(s,s.dot(t))}clone(){return new n(this.normal.clone(),this.w)}flip(){this.normal.negate(),this.w=-this.w}splitPolygon(t,e,i,s,r){let o=0,a=[];for(let l of t.vertices){let h=this.normal.dot(l.pos)-this.w,c=h<-Kp?Ic:h>Kp?Pu:Qp;o|=c,a.push(c)}switch(o){case Qp:(this.normal.dot(t.plane.normal)>0?e:i).push(t);break;case Pu:s.push(t);break;case Ic:r.push(t);break;case tm:{let l=[],h=[],c=t.vertices.length;for(let d=0;d<c;d++){let u=(d+1)%c,f=a[d],m=a[u],x=t.vertices[d],p=t.vertices[u];if(f!==Ic&&l.push(x),f!==Pu&&h.push(f!==Ic?x.clone():x),(f|m)===tm){let g=(this.w-this.normal.dot(x.pos))/this.normal.dot(new z().subVectors(p.pos,x.pos)),M=x.interpolate(p,g);l.push(M),h.push(M.clone())}}l.length>=3&&s.push(new jo(l,t.shared)),h.length>=3&&r.push(new jo(h,t.shared));break}}}},jo=class n{constructor(t,e){this.vertices=t,this.shared=e,this.plane=Nu.fromPoints(t[0].pos,t[1].pos,t[2].pos)}clone(){return new n(this.vertices.map(t=>t.clone()),this.shared)}flip(){this.vertices.reverse().forEach(t=>t.flip()),this.plane.flip()}},cs=class n{constructor(t){this.plane=null,this.front=null,this.back=null,this.polygons=[],t&&this.build(t)}clone(){let t=new n;return t.plane=this.plane&&this.plane.clone(),t.front=this.front&&this.front.clone(),t.back=this.back&&this.back.clone(),t.polygons=this.polygons.map(e=>e.clone()),t}invert(){for(let e of this.polygons)e.flip();this.plane&&this.plane.flip(),this.front&&this.front.invert(),this.back&&this.back.invert();let t=this.front;this.front=this.back,this.back=t}clipPolygons(t){if(!this.plane)return t.slice();let e=[],i=[];for(let s of t)this.plane.splitPolygon(s,e,i,e,i);return this.front&&(e=this.front.clipPolygons(e)),i=this.back?this.back.clipPolygons(i):[],e.concat(i)}clipTo(t){this.polygons=t.clipPolygons(this.polygons),this.front&&this.front.clipTo(t),this.back&&this.back.clipTo(t)}allPolygons(){let t=this.polygons.slice();return this.front&&(t=t.concat(this.front.allPolygons())),this.back&&(t=t.concat(this.back.allPolygons())),t}build(t){if(!t.length)return;this.plane||(this.plane=t[Math.floor(t.length/2)].plane.clone());let e=[],i=[];for(let s of t)this.plane.splitPolygon(s,this.polygons,this.polygons,e,i);e.length&&(this.front||(this.front=new n),this.front.build(e)),i.length&&(this.back||(this.back=new n),this.back.build(i))}},Ko=class n{constructor(t=[]){this.polygons=t}clone(){return new n(this.polygons.map(t=>t.clone()))}union(t){let e=new cs(this.clone().polygons),i=new cs(t.clone().polygons);return e.clipTo(i),i.clipTo(e),i.invert(),i.clipTo(e),i.invert(),e.build(i.allPolygons()),new n(e.allPolygons())}subtract(t){let e=new cs(this.clone().polygons),i=new cs(t.clone().polygons);return e.invert(),e.clipTo(i),i.clipTo(e),i.invert(),i.clipTo(e),i.invert(),e.build(i.allPolygons()),e.invert(),new n(e.allPolygons())}intersect(t){let e=new cs(this.clone().polygons),i=new cs(t.clone().polygons);return e.invert(),i.clipTo(e),i.invert(),e.clipTo(i),i.clipTo(e),e.build(i.allPolygons()),e.invert(),new n(e.allPolygons())}static fromGeometry(t,e=null,i=0){let s=t.index?t.toNonIndexed():t,r=s.getAttribute("position"),o=s.getAttribute("normal"),a=e?new Kt().getNormalMatrix(e):null,l=[];for(let h=0;h<r.count;h+=3){let c=[];for(let x=0;x<3;x++){let p=new z().fromBufferAttribute(r,h+x);e&&p.applyMatrix4(e);let g=o?new z().fromBufferAttribute(o,h+x):new z;a&&g.applyMatrix3(a).normalize(),c.push(new Lu(p,g))}let d=c[0].pos,u=c[1].pos,f=c[2].pos,m=new z().subVectors(u,d).cross(new z().subVectors(f,d));m.lengthSq()<1e-14||(o||(m.normalize(),c.forEach(x=>x.normal.copy(m))),l.push(new jo(c,i)))}return s!==t&&s.dispose(),new n(l)}toGeometry(){let t=[],e=[],i=[],s=null,r=0;for(let a of this.polygons){let l=a.vertices;s!==null&&a.shared!==s&&(i.push([r,t.length/3-r,s]),r=t.length/3),s=a.shared;for(let h=2;h<l.length;h++)for(let c of[l[0],l[h-1],l[h]])t.push(c.pos.x,c.pos.y,c.pos.z),e.push(c.normal.x,c.normal.y,c.normal.z)}s!==null&&i.push([r,t.length/3-r,s]);let o=new Fe;o.setAttribute("position",new _e(t,3)),o.setAttribute("normal",new _e(e,3));for(let[a,l,h]of i)o.addGroup(a,l,h);return o}};var Li=Math.PI/180;function Uu(n={}){let t={metalness:.9,roughness:.32,color:12172741,envMapIntensity:1},e={body:new Xe({...t,name:"steel"}),thread:new Xe({...t,color:10330537,roughness:.55,name:"thread"}),knurl:new Xe({...t,color:10725295,roughness:.75,metalness:.75,name:"knurl"}),cut:new Xe({color:9198410,roughness:.85,metalness:.15,side:je,name:"cut"}),ghost:new As({color:8161791,wireframe:!0,transparent:!0,opacity:.55,depthTest:!1,name:"ghost"})};for(let[i,s]of Object.entries(n))e[i]&&e[i].setValues(s);return e}function zs(n,t=96,e=30,i=0,s=2*Math.PI){let r=n.filter((E,v)=>v===0||Math.abs(E.x-n[v-1].x)>1e-9||Math.abs(E.r-n[v-1].r)>1e-9),o=r.length;if(o<2)return new Fe;let a=[];for(let E=0;E<o-1;E++){let v=r[E+1].x-r[E].x,T=r[E+1].r-r[E].r,L=Math.hypot(v,T)||1;a.push({x:-T/L,r:v/L})}let l=[];for(let E=0;E<o;E++){let v=a[E-1],T=a[E];if(!v)l.push([T]);else if(!T)l.push([v]);else{let L=v.x*T.x+v.r*T.r;if(Math.acos(Math.max(-1,Math.min(1,L)))<e*Li){let D=v.x+T.x,P=v.r+T.r,G=Math.hypot(D,P)||1;l.push([{x:D/G,r:P/G}])}else l.push([v,T])}}let h=[],c=[],d=[],u=[],f=t+1;for(let E=0;E<o;E++){let v=[];for(let T of l[E]){v.push(h.length/3);for(let L=0;L<=t;L++){let D=i+s*L/t,P=Math.sin(D),G=Math.cos(D);h.push(r[E].x,r[E].r*P,r[E].r*G),c.push(T.x,T.r*P,T.r*G)}}u.push(v)}for(let E=0;E<o-1;E++){let v=u[E][u[E].length-1],T=u[E+1][0],L=r[E].r<1e-9,D=r[E+1].r<1e-9;for(let P=0;P<t;P++){let G=v+P,I=v+P+1,A=T+P,B=T+P+1;L||d.push(G,A,I),D||d.push(I,A,B)}}let m=new Fe;m.setAttribute("position",new _e(h,3)),m.setAttribute("normal",new _e(c,3)),m.setIndex(d);let x=new z,p=new z,g=new z,M=new z,y=m.getAttribute("position"),_=m.getAttribute("normal"),S=0,w=0;for(let E=0;E<d.length&&w<12;E+=3){x.fromBufferAttribute(y,d[E]),p.fromBufferAttribute(y,d[E+1]),g.fromBufferAttribute(y,d[E+2]);let v=p.clone().sub(x).cross(g.clone().sub(x));v.lengthSq()<1e-10||(M.fromBufferAttribute(_,d[E]).add(new z().fromBufferAttribute(_,d[E+1])).add(new z().fromBufferAttribute(_,d[E+2])),S+=v.dot(M)<0?1:-1,w++)}if(S>0){for(let E=0;E<d.length;E+=3){let v=d[E+1];d[E+1]=d[E+2],d[E+2]=v}m.setIndex(d)}return m}function em(n,t,e){let i=[],s=r=>r>=t-1e-9&&r<=e+1e-9;for(let r=0;r<n.length;r++){let o=n[r],a=n[r+1];if(s(o.x)&&i.push({x:Math.min(e,Math.max(t,o.x)),r:o.r}),!a)break;for(let l of[t,e])if(o.x<l&&a.x>l||o.x>l&&a.x<l){let h=(l-o.x)/(a.x-o.x);i.push({x:l,r:o.r+(a.r-o.r)*h,cut:!0})}}return i.sort((r,o)=>r.x-o.x||0),i.filter((r,o)=>o===0||Math.abs(r.x-i[o-1].x)>1e-9||Math.abs(r.r-i[o-1].r)>1e-9)}function C1(n,t,e,i){let s=em(n,e,i),r=em(t,e,i).reverse(),o=[...s,...r],a=o[0],l=o[o.length-1];return a&&l&&(Math.abs(a.x-l.x)>1e-9||Math.abs(a.r-l.r)>1e-9)&&o.push({x:a.x,r:a.r}),o}function R1(n){let t=(n||0)*Li;return new z(0,Math.sin(t),Math.cos(t))}function Du(n,t){n.quaternion.setFromUnitVectors(new z(0,0,1),R1(t))}function I1(n,t){let e=new Qi,i=t/2,s=n/2-i;return s<=0?(e.absarc(0,0,i,0,Math.PI*2,!1),e):(e.moveTo(-s,-i),e.lineTo(s,-i),e.absarc(s,0,i,-Math.PI/2,Math.PI/2,!1),e.lineTo(-s,i),e.absarc(-s,0,i,Math.PI/2,3*Math.PI/2,!1),e)}function P1(n,t){let e=t.R,i=Math.max(1.5,e*.1);if(n.type==="keyway"){let s=n.depth+(t.taperExtra||0),r=new Rs(I1(n.length,n.width),{depth:s+i,bevelEnabled:!1,curveSegments:12});r.translate(0,0,e-s);let o=new jt(r);return o.position.x=t.xc,Du(o,n.angle),{mesh:o,op:"subtract"}}if(n.type==="flat"){let s=n.count===2?2:1,r=new rn(n.length,e*2+4,n.depth+i);r.translate(0,0,e-n.depth+(n.depth+i)/2);let o=new Ce;for(let a=0;a<s;a++){let l=new jt(r.clone());l.position.x=t.xc,Du(l,(n.angle||0)+180*a),o.add(l)}return{mesh:o,op:"subtract"}}if(n.type==="hex"){let s=n.across_flats/Math.cos(30*Li),r=new Pn(s/2,s/2,t.length+2,6,1,!1);r.rotateY(30*Li),r.rotateZ(-90*Li);let o=new jt(r);return o.position.x=t.xc,o.rotation.x=-(n.angle||0)*Li,{mesh:o,op:"intersect"}}if(n.type==="hex_socket"){let s=n.across_flats/Math.cos(30*Li),r=new Pn(s/2,s/2,n.depth+2,6,1,!1);r.rotateY(30*Li),r.rotateZ(-90*Li);let o=new jt(r);return o.position.x=n.end==="left"?n.depth/2-1:t.L-n.depth/2+1,{mesh:o,op:"subtract"}}if(n.type==="cross_hole"){let s=n.through!==!1,r=s?e*2+4:(n.depth||e)+i,o=new Pn(n.diameter/2,n.diameter/2,r,48,1,!1);o.rotateX(Math.PI/2),s||o.translate(0,0,e+i-r/2);let a=new jt(o);return a.position.x=n.position,Du(a,n.angle),{mesh:a,op:"subtract"}}return null}function nm(n,t={}){let e=t.radial||96,i=t.arcN||10,s=t.materials||Uu(),r=(typeof performance<"u"?performance:Date).now(),o=[],a=ye(n),l=_i(n,i),h=Jo(n,i);o.push(...l.notes);let c=ii(n),d=new Set([0,a]),u=[];for(let P of c.threads)d.add(P.x0),d.add(P.x1),u.push({xa:P.x0,xb:P.x1,kind:"thread"});for(let P of c.features){if(P.type==="knurl"){d.add(P.x0),d.add(P.x1),u.push({xa:P.x0,xb:P.x1,kind:"knurl"});continue}if(P.type==="center_hole")continue;let G=P.type==="hex"||P.type==="hex_socket"?0:Math.min(1,Math.max(.2,(P.x1-P.x0)*.05)),I=Math.max(0,P.x0-G),A=Math.min(a,P.x1+G);d.add(I),d.add(A),u.push({xa:I,xb:A,kind:"feature",f:P})}let f=[...d].sort((P,G)=>P-G).filter((P,G,I)=>G===0||P-I[G-1]>1e-6),m=new Ce;m.name=n.name||n.id||"shaft",m.userData.isPart=!0;let x=new Ce;x.name="ghosts",x.visible=!1;let p=[],g=[],M=[],y=0,_=0,S=[];for(let P=0;P<f.length-1;P++){let G=f[P],I=f[P+1],A=C1(l.points,h.points,G,I);if(A.length<3)continue;let B=u.filter(ot=>ot.kind==="feature"&&ot.xa<I-1e-9&&ot.xb>G+1e-9),F=u.some(ot=>ot.kind==="thread"&&ot.xa<=G+1e-9&&ot.xb>=I-1e-9),$=u.some(ot=>ot.kind==="knurl"&&ot.xa<=G+1e-9&&ot.xb>=I-1e-9),X=zs(A,e,30);if(B.length){let ot=(typeof performance<"u"?performance:Date).now(),ht=Ko.fromGeometry(X,null,0);for(let tt of B){let ct=tt.f,Et=ct.segment>=0?n.segments[ct.segment]:null,St=Et?Math.min(...Ne(Et))/2:_n(n,ct.position)/2,et=ct.type==="cross_hole"?ct.position:(ct.x0+ct.x1)/2,dt=P1(ct,{R:St,xc:et,length:ct.x1-ct.x0,L:a});if(!dt)continue;dt.mesh.updateMatrixWorld(!0);let V=[];dt.mesh.traverse(at=>{at.isMesh&&V.push(at)});for(let at of V){let nt=Ko.fromGeometry(at.geometry,at.matrixWorld,0);ht=dt.op==="intersect"?ht.intersect(nt):ht.subtract(nt),_++}for(let at of V){let nt=new jt(at.geometry.clone(),s.ghost);nt.applyMatrix4(at.matrixWorld),nt.userData.featureIndex=(n.features||[]).indexOf(ct),nt.name=`ghost:${ct.type}`,x.add(nt)}}X.dispose(),X=ht.toGeometry(),y+=(typeof performance<"u"?performance:Date).now()-ot,S.push(...B.map(tt=>tt.f.type))}F?g.push(X):$?M.push(X):p.push(X)}let w=P=>{if(!P.length)return null;let G=P.map(X=>X.index?X.toNonIndexed():X),I=0;for(let X of G)I+=X.getAttribute("position").count;let A=new Float32Array(I*3),B=new Float32Array(I*3),F=0;for(let X of G)A.set(X.getAttribute("position").array,F*3),B.set(X.getAttribute("normal").array,F*3),F+=X.getAttribute("position").count;let $=new Fe;return $.setAttribute("position",new Pe(A,3)),$.setAttribute("normal",new Pe(B,3)),$},E=(P,G,I)=>{if(!P)return null;let A=new jt(P,G);A.name=I,A.castShadow=A.receiveShadow=!0;let B=new jt(P,s.cut);return B.name=`${I}:cut`,B.renderOrder=-1,m.add(A,B),A},v=E(w(p),s.body,"body"),T=E(w(g),s.thread,"thread"),L=E(w(M),s.knurl,"knurl");m.add(x);let D=0;return m.traverse(P=>{P.isMesh&&!P.name.endsWith(":cut")&&P.parent!==x&&(D+=P.geometry.getAttribute("position").count/3)}),{root:m,body:v,thread:T,knurl:L,ghosts:x,notes:o,stats:{tris:Math.round(D),bands:f.length-1,csg:_,csg_ms:Math.round(y),ms:Math.round((typeof performance<"u"?performance:Date).now()-r),features:S},length:a,materials:s}}function Fu(n,t){let e=t||[];for(let i of["body","thread","knurl","cut"])n.materials[i].clippingPlanes=e;for(let i of["body","thread","knurl","cut"])n.materials[i].needsUpdate=!0}var pe=Math.PI/180,fe=n=>{let t=Math.round(n*100)/100;return Number.isInteger(t)?String(t):String(t).replace(/\.?0+$/,"")},Vs="\u2300";function Hs(n,t){let e=0;for(let i of String(n))e+=/[0-9]/.test(i)?.56:i==="."?.28:i===" "?.3:/[A-Z]/.test(i)?.68:/[a-z]/.test(i)?.55:/[가-힣]/.test(i)?.95:/[⌀×]/.test(i)?.75:.6;return e*t}var ku=class{constructor(t){this.items=[],this.labels=[],this.opts=t,this.textBoxes=[]}line(t,e,i,s,r="outline"){this.items.push({kind:"line",x1:t,y1:e,x2:i,y2:s,layer:r})}poly(t,e="outline",i=!1){this.items.push({kind:"polyline",pts:t,layer:e,closed:i})}circle(t,e,i,s="outline"){this.items.push({kind:"circle",cx:t,cy:e,r:i,layer:s})}arc(t,e,i,s,r,o="outline"){this.items.push({kind:"arc",cx:t,cy:e,r:i,a0:s,a1:r,layer:o})}hatch(t){this.items.push({kind:"hatch",polygon:t,layer:"hatch"})}arrow(t,e,i,s="dim"){this.items.push({kind:"arrow",x:t,y:e,angle:i,size:this.opts.arrow,layer:s})}text(t,e,i,s={}){let r=s.size||this.opts.textSize,o=s.anchor||"middle",a=Hs(i,r)/this.opts.scale,l=r/this.opts.scale,h=o==="middle"?t-a/2:o==="end"?t-a:t,c=s.rotate?[t-l/2,e-a/2,t+l/2,e+a/2]:[h,e-l*.15,h+a,e+l*.9];return this.items.push({kind:"text",x:t,y:e,text:i,size:r,anchor:o,rotate:s.rotate||0,layer:s.layer||"text",role:s.role||"dim"}),s.label&&this.labels.push({text:i,...s.label,bbox:c}),this.textBoxes.push(c),c}freeY(t,e,i,s,r){let o=Hs(i,s)/this.opts.scale,a=s/this.opts.scale,l=e;for(let h=0;h<8;h++){let c=[t-o/2-.5,l-a*.15,t+o/2+.5,l+a*.9];if(!this.textBoxes.some(u=>!(c[2]<u[0]||c[0]>u[2]||c[3]<u[1]||c[1]>u[3])))return l;l+=r}return l}};function Fn(n,t,e,i,s,r={}){let o=r.dir!=="v",{extGap:a,extOver:l,arrow:h}=n.opts,c=r.label;if(o){let[y,_]=[Math.min(t.x,e.x),Math.max(t.x,e.x)],S=i;if(!r.noExt)for(let P of[t,e]){let G=Math.sign(S-P.y)||1;n.line(P.x,P.y+G*a,P.x,S+G*l,"dim")}let w=_-y,E=w>=h*2.6+.5;E?(n.line(y,S,_,S,"dim"),n.arrow(y,S,0,"dim"),n.arrow(_,S,180,"dim")):(n.line(y-h*2.2,S,_+h*2.2,S,"dim"),n.arrow(y,S,180,"dim"),n.arrow(_,S,0,"dim"));let v=r.size||n.opts.textSize,T=Hs(s,v)/n.opts.scale,L=(y+_)/2,D=S+.9;return(!E||T>w-1)&&(L=r.narrowSide==="left"?y-h*2.4-T/2:_+h*2.4+T/2),r.avoid!==!1&&(D=n.freeY(L,D,s,v,v/n.opts.scale*1.4)),n.text(L,D,s,{size:v,label:c}),{x:L,y:D}}let[d,u]=[Math.min(t.y,e.y),Math.max(t.y,e.y)],f=i;if(!r.noExt)for(let y of[t,e]){let _=Math.sign(f-y.x)||1;n.line(y.x+_*a,y.y,f+_*l,y.y,"dim")}u-d>=h*2.6+.5?(n.line(f,d,f,u,"dim"),n.arrow(f,d,90,"dim"),n.arrow(f,u,270,"dim")):(n.line(f,d-h*2.2,f,u+h*2.2,"dim"),n.arrow(f,d,270,"dim"),n.arrow(f,u,90,"dim"));let p=r.size||n.opts.textSize,g=f-.9,M=(d+u)/2;return n.text(g,M,s,{size:p,rotate:90,label:c}),{x:g,y:M}}function Qo(n,t,e,i,s={}){let{arrow:r}=n.opts,o=s.size||n.opts.textSize,a=2*e>=r*2.6+1,l=e+(s.lead??5);a?(n.line(t,-e,t,l,"dim"),n.arrow(t,-e,90,"dim"),n.arrow(t,e,270,"dim")):(n.line(t,-e-r*2.2,t,l,"dim"),n.arrow(t,-e,270,"dim"),n.arrow(t,e,90,"dim"));let h=n.freeY(t,l+.8,i,o,o/n.opts.scale*1.4);return h>l+.8+1e-6&&n.line(t,l,t,h-.3,"dim"),n.text(t,h,i,{size:o,label:s.label}),h}function hs(n,t,e,i,s,r,o={}){let a=o.size||n.opts.textSize;n.line(t,e,i,s,"dim");let l=Hs(r,a)/n.opts.scale,h=i>=t,c=h?i+l+1:i-l-1;n.line(i,s,c,s,"dim"),n.arrow(t,e,Math.atan2(e-s,t-i)/pe,"dim"),n.text(h?i+.5:i-.5,s+.7,r,{size:a,anchor:h?"start":"end",label:o.label})}function Ou(n,t,e,i,s,r){for(let o of[1,-1]){let a=o*(e+s(2.5)),l=o*(e+s(7.5));n.line(t,a,t,l,"cut"),n.line(t,l,t-s(3),l,"cut"),n.arrow(t-s(4.5),l,0,"cut"),n.text(t+s(1.5),l+(o>0?s(.6):-s(3.2)),i,{size:r.textSize,anchor:"start",role:"note"})}}var L1={scale:1,textSize:3.5,noteSize:2.5,arrow:3,extGap:1,extOver:2,chainOmit:"longest",omitRatio:0,showHidden:!0,titleBlock:!0,sectionViews:!0,paper:"white",seed:1,centerHoleCallout:!0};function Vr(n,t={}){let e={...L1,...t},i=ye(n),s=ii(n),r=_i(n,12).points,o=Jo(n,12).points,a=Math.max(...r.map(R=>R.r)),l=e.sectionViews?s.features.filter(R=>["keyway","flat","hex"].includes(R.type)).length:0,h=i+l*(a*2+30)+20,c=a*2+42,d=Math.min(250/h,160/c),u=[5,2,1,.5,.2,.1],f=e.scale==="auto"||e.scale==null?u.find(R=>R<=d)||.1:e.scale,m={...e,scale:f},x=R=>R/f,p=new ku({...m,arrow:x(m.arrow),extGap:x(m.extGap),extOver:x(m.extOver)}),g=U1(m.seed),M=R=>m.omitRatio>0&&g()<m.omitRatio?(p.labels.push({omitted:!0,kind:R}),!0):!1,y=!!s.bore,_=R=>R.map(U=>({x:U.x,r:-U.r})),S=R=>R.map(U=>[U.x,U.r]);p.poly(S(r),"outline"),p.poly(S(_(r)),"outline");let w=r[0],E=r[r.length-1],v=o[0].r,T=o[o.length-1].r;y?(p.line(0,v,0,w.r,"outline"),p.line(0,-v,0,-w.r,"outline"),p.line(i,T,i,E.r,"outline"),p.line(i,-T,i,-E.r,"outline")):(p.line(0,-w.r,0,w.r,"outline"),p.line(i,-E.r,i,E.r,"outline"));for(let R=1;R<r.length;R++){let U=r[R-1],O=r[R];if(Math.abs(U.x-O.x)<1e-9&&Math.abs(U.r-O.r)>1e-9){let k=Math.min(U.r,O.r);if(y){let Y=Sn(n,U.x+1e-6)/2,j=Sn(n,U.x-1e-6)/2,Z=Math.max(Y,j);p.line(U.x,Z,U.x,k,"outline"),p.line(U.x,-Z,U.x,-k,"outline")}else p.line(U.x,-k,U.x,k,"outline")}if(["chamfer_end","chamfer_start"].includes(O.tag)||["chamfer_end","chamfer_start"].includes(U.tag)){let k=["chamfer_end","chamfer_start"].includes(O.tag)?O:U;if(y){let Y=Sn(n,k.x)/2;p.line(k.x,Y,k.x,k.r,"outline"),p.line(k.x,-Y,k.x,-k.r,"outline")}else p.line(k.x,-k.r,k.x,k.r,"outline")}}if(p.line(-4,0,i+4,0,"center"),y){p.poly(S(o),"outline"),p.poly(S(_(o)),"outline");for(let U=1;U<o.length;U++){let O=o[U-1],k=o[U];Math.abs(O.x-k.x)<1e-9&&Math.abs(O.r-k.r)>1e-9&&O.tag}let R=[...r.map(U=>[U.x,U.r]),...o.slice().reverse().map(U=>[U.x,U.r])];p.hatch(R),p.hatch(R.map(([U,O])=>[U,-O]))}else if(m.showHidden)for(let R of s.centerHoles){let U=R.end==="left"?1:-1,O=R.x,k=O+U*R.cone_depth,Y=k+U*R.pilot_depth,j=Y+U*(R.d/2)/Math.tan(59*pe);for(let Z of[1,-1])p.line(O,Z*R.D/2,k,Z*R.d/2,"hidden"),p.line(k,Z*R.d/2,Y,Z*R.d/2,"hidden"),p.line(Y,Z*R.d/2,j,0,"hidden");p.line(k,-R.d/2,k,R.d/2,"hidden")}for(let R of s.threads){let U=n.segments[R.i],O=s.transitions.find(wt=>wt.type==="chamfer"&&wt.side===R.i),k=R.x0,Y=R.x1;O&&(O.dir==="left"||O.at===R.i?k+=O.size:Y-=O.size),p.line(k,R.r_minor,Y,R.r_minor,"thin"),p.line(k,-R.r_minor,Y,-R.r_minor,"thin");let j=R.i>0?Ne(n.segments[R.i-1])[1]/2:null,Z=R.i<n.segments.length-1?Ne(n.segments[R.i+1])[0]/2:null,yt=j!==null&&j>=R.r_major?R.x0:Z!==null&&Z>=R.r_major?R.x1:null;yt!==null&&Math.abs(yt-R.x0)>1e-9&&p.line(yt,-R.r_major,yt,R.r_major,"outline"),yt!==null&&Math.abs(yt-R.x0)<1e-9&&!O&&p.line(yt,-R.r_major,yt,R.r_major,"outline")}let L=[],D=0,P="ABCDEFGH";for(let R of s.features)if(R.type==="keyway"){let U=R.D/2,O=R.width/2,k=R.x0,Y=R.x1;Y-k>R.width?(p.line(k+O,O,Y-O,O,"outline"),p.line(k+O,-O,Y-O,-O,"outline"),p.arc(k+O,0,O,90,270,"outline"),p.arc(Y-O,0,O,-90,90,"outline")):p.circle((k+Y)/2,0,O,"outline");let j=(k+Y)/2,Z=P[D++];Ou(p,j,U,Z,x,m),L.push({f:R,R:U,letter:Z,xc:j})}else if(R.type==="flat"){let U=R.D/2,O=Math.sqrt(Math.max(0,U*U-(U-R.depth)**2));p.line(R.x0,O,R.x1,O,"outline"),p.line(R.x0,-O,R.x1,-O,"outline"),p.line(R.x0,-O,R.x0,O,"outline"),p.line(R.x1,-O,R.x1,O,"outline");let k=(R.x0+R.x1)/2,Y=P[D++];Ou(p,k,U,Y,x,m),L.push({f:R,R:U,letter:Y,xc:k})}else if(R.type==="hex"){let U=R.D/2,O=R.across_flats/2,k=O/Math.cos(30*pe),Y=Math.min(k,U)/2;if(p.line(R.x0,Y,R.x1,Y,"outline"),p.line(R.x0,-Y,R.x1,-Y,"outline"),k>U){let yt=Math.sqrt(Math.max(0,U*U-O*O));p.line(R.x0,yt,R.x1,yt,"thin"),p.line(R.x0,-yt,R.x1,-yt,"thin")}let j=(R.x0+R.x1)/2,Z=P[D++];Ou(p,j,U,Z,x,m),L.push({f:R,R:U,letter:Z,xc:j})}else if(R.type==="cross_hole"){let U=R.D/2;if((R.angle||0)%180<45||(R.angle||0)%180>135)p.circle(R.position,0,R.diameter/2,"outline"),p.line(R.position-R.diameter/2-x(2),0,R.position+R.diameter/2+x(2),0,"center"),p.line(R.position,-R.diameter/2-x(2),R.position,R.diameter/2+x(2),"center");else if(m.showHidden){let O=Sn(n,R.position)/2;for(let k of[-1,1]){let Y=R.position+k*R.diameter/2;R.through!==!1?(p.line(Y,O,Y,U,"hidden"),p.line(Y,-U,Y,-O,"hidden")):p.line(Y,U-(R.depth||U),Y,U,"hidden")}R.through===!1&&p.line(R.position-R.diameter/2,U-(R.depth||U),R.position+R.diameter/2,U-(R.depth||U),"hidden")}}else if(R.type==="hex_socket"){let U=R.across_flats/2;m.showHidden&&(p.line(R.x0,U,R.x1,U,"hidden"),p.line(R.x0,-U,R.x1,-U,"hidden"),p.line(R.end==="left"?R.x1:R.x0,-U,R.end==="left"?R.x1:R.x0,U,"hidden"))}else if(R.type==="knurl"){let U=R.D/2,O=[[R.x0,-U],[R.x1,-U],[R.x1,U],[R.x0,U]];p.items.push({kind:"hatch",polygon:O,layer:"hatch",angle:R.pattern==="straight"?90:45,spacing:x(1.5),knurl:!0}),R.pattern!=="straight"&&p.items.push({kind:"hatch",polygon:O,layer:"hatch",angle:-45,spacing:x(1.5),knurl:!0})}let G=-a-x(15),I=G-x(9),A=s.segments,B=-1;if(m.chainOmit==="longest"&&A.length>1){let R=-1;A.forEach((U,O)=>{U.type==="cyl"&&(R<0||U.x1-U.x0>A[R].x1-A[R].x0)&&(R=O)}),B=R}else m.chainOmit==="random"&&A.length>1&&(B=Math.floor(g()*A.length));if(A.forEach((R,U)=>{if(U===B){p.labels.push({omitted:!0,kind:"length",segment:U,value:R.x1-R.x0});return}if(M("length"))return;let O=Math.max(Math.abs(R.ds),Math.abs(R.de))/2;Fn(p,{x:R.x0,y:-O},{x:R.x1,y:-O},G,fe(R.x1-R.x0),{label:{kind:"length",segment:U,value:R.x1-R.x0},narrowSide:U===A.length-1?"left":"right"})}),A.length>1&&!M("overall")?Fn(p,{x:0,y:-a},{x:i,y:-a},I,fe(i),{label:{kind:"overall",value:i}}):A.length===1&&B<0,A.forEach((R,U)=>{if(R.type==="thread"){let Y=s.threads.find(wt=>wt.i===U),j=String(R.spec||"").replace(/x/i,"\xD7"),Z=(R.x0+R.x1)/2,yt=p.freeY(Z+x(6),Y.r_major+x(9),j,m.textSize,x(5));M("thread")||hs(p,Z,Y.r_major,Z+x(6),yt,j,{label:{kind:"thread",segment:U,value:R.spec}});return}if(M("diameter"))return;let O=(R.x0+R.x1)/2;if(R.type==="taper"){let Y=R.tolerance?` ${R.tolerance}`:"";Qo(p,R.x0+(R.x1-R.x0)*.22,R.ds/2+(R.de-R.ds)/2*.22,`${Vs}${fe(R.ds)}`,{label:{kind:"diameter",segment:U,which:"d_start",value:R.ds}}),Qo(p,R.x0+(R.x1-R.x0)*.78,R.ds/2+(R.de-R.ds)/2*.78,`${Vs}${fe(R.de)}${Y}`,{label:{kind:"diameter",segment:U,which:"d_end",value:R.de}});return}let k=R.tolerance?` ${R.tolerance}`:"";Qo(p,O,R.ds/2,`${Vs}${fe(R.ds)}${k}`,{label:{kind:"diameter",segment:U,value:R.ds,tolerance:R.tolerance||null}})}),s.bore){for(let[R,U]of s.bore.segments.entries()){if(M("bore"))continue;let O=(U.x0+U.x1)/2,k=U.tolerance?` ${U.tolerance}`:"",Y=U.thread?String(U.thread).replace(/x/i,"\xD7"):`${Vs}${fe(U.diameter)}${k}`;Qo(p,O,U.r,Y,{lead:Math.max(0,a-U.r)+x(5),label:{kind:U.thread?"bore_thread":"bore_diameter",bore_segment:R,value:U.thread||U.diameter}})}if(!s.bore.through){let R=s.bore.segments.reduce((k,Y)=>k+(Y.x1-Y.x0),0),U=s.bore.from==="right"?i:0,O=s.bore.from==="right"?i-R:R;M("bore_depth")||Fn(p,{x:U,y:a},{x:O,y:a},a+x(9),fe(R),{label:{kind:"bore_depth",value:R}})}}let F=new Set;for(let R of s.transitions)if(R.type==="chamfer"&&R.size>0){let U=`${fe(R.size)}|${R.angle||45}`,O=R.dir==="left"?R.x+R.size/2:R.x-R.size/2,k=R.size*Math.tan((R.angle||45)*pe),Y=R.r-k/2,j=(R.angle||45)===45?`C${fe(R.size)}`:`${fe(R.size)}\xD7${R.angle}\xB0`;if(M("chamfer"))continue;let Z=R.dir==="left"?-x(6):x(6),yt=p.freeY(O+Z,Y+x(8),j,m.textSize,x(5));hs(p,O,Y,O+Z,yt,j,{label:{kind:"chamfer",at:R.at,value:R.size,angle:R.angle||45}}),F.add(U)}else if((R.type==="round"||R.type==="fillet")&&R.radius>0){if(M("radius"))continue;let U=`R${fe(R.radius)}`,O,k;if(R.type==="fillet"){let Z=R.dir==="left"?-1:1;O=R.x+Z*R.radius*.29,k=R.r+R.radius*.29}else{let Z=R.dir==="left"?1:-1;O=R.x+Z*R.radius*.29,k=R.r-R.radius*.29}let Y=R.dir==="left"?-x(5):x(5),j=p.freeY(O+Y,k+x(7),U,m.textSize,x(5));hs(p,O,k,O+Y,j,U,{label:{kind:R.type,at:R.at,value:R.radius}})}else if(R.type==="undercut"&&R.width>0){if(M("undercut"))continue;let U=2*(R.r-R.depth),O=`${fe(R.width)}\xD7${Vs}${fe(U)}${R.standard?` (${R.standard})`:""}`,k=R.dir==="left"?R.x+R.width/2:R.x-R.width/2,Y=R.r-R.depth,j=R.dir==="left"?x(6):-x(6),Z=p.freeY(k+j,R.r+x(9),O,m.textSize,x(5));hs(p,k,Y,k+j,Z,O,{label:{kind:"undercut",at:R.at,width:R.width,depth:R.depth}})}for(let[R,U]of s.grooves.entries()){if(M("groove"))continue;let O=a+x(9);Fn(p,{x:U.x0,y:U.r_top},{x:U.x1,y:U.r_top},O,fe(U.width),{label:{kind:"groove_width",groove:R,value:U.width},narrowSide:"right"});let k=A[U.segment],Y=U.x0-k.x0<=k.x1-U.x1,j=Y?k.x0:k.x1,Z=Y?U.x0-k.x0:k.x1-U.x1;Z>.01&&Fn(p,{x:j,y:U.r_top},{x:Y?U.x0:U.x1,y:U.r_top},O,fe(Z),{label:{kind:"groove_position",groove:R,value:Z,from:Y?"segment_start":"segment_end"},narrowSide:Y?"left":"right"});let yt=2*U.r_floor;Qo(p,(U.x0+U.x1)/2,U.r_floor,`${Vs}${fe(yt)}`,{lead:U.r_top-U.r_floor+x(5),label:{kind:"groove_diameter",groove:R,value:yt}})}for(let[R,U]of s.features.entries())if(U.type==="keyway"||U.type==="flat"||U.type==="knurl"){if(M("feature_length"))continue;let O=A[U.segment],k=U.D/2,Y=k+x(U.type==="knurl"?9:12);Fn(p,{x:U.x0,y:k},{x:U.x1,y:k},Y,fe(U.x1-U.x0),{label:{kind:`${U.type}_length`,feature:R,value:U.x1-U.x0}});let j=U.x0-O.x0<=O.x1-U.x1,Z=j?O.x0:O.x1,yt=j?U.x0-O.x0:O.x1-U.x1;if(yt>.01&&Fn(p,{x:Z,y:k},{x:j?U.x0:U.x1,y:k},Y,fe(yt),{label:{kind:`${U.type}_position`,feature:R,value:yt,from:j?"segment_start":"segment_end"},narrowSide:j?"left":"right"}),U.type==="knurl"){let wt=`\uB110\uB9C1 ${U.pattern==="straight"?"\uD3C9\uBAA9":"\uBE57\uBAA9"} p${fe(U.pitch||1)}`,gt=p.freeY((U.x0+U.x1)/2+x(6),k+x(15),wt,m.noteSize,x(4));hs(p,(U.x0+U.x1)/2,k,(U.x0+U.x1)/2+x(6),gt,wt,{size:m.noteSize,label:{kind:"knurl",feature:R,value:U.pitch||1}})}}else if(U.type==="cross_hole"){if(M("cross_hole"))continue;let O=U.D/2,k=`${Vs}${fe(U.diameter)}${U.through===!1?` \uAE4A\uC774 ${fe(U.depth)}`:" \uAD00\uD1B5"}`,Y=p.freeY(U.position+x(7),O+x(11),k,m.textSize,x(5)),j=(U.angle||0)%180<45||(U.angle||0)%180>135?U.diameter/2*.7:O;hs(p,U.position+U.diameter/2*.7,j,U.position+x(7),Y,k,{label:{kind:"cross_hole",feature:R,value:U.diameter}});let Z=U.position<=i-U.position,yt=Z?0:i,wt=Z?U.position:i-U.position;Fn(p,{x:yt,y:O},{x:U.position,y:O},O+x(9),fe(wt),{label:{kind:"cross_hole_position",feature:R,value:wt,from:Z?"left_end":"right_end"},narrowSide:Z?"left":"right"})}for(let[R,U]of s.features.entries()){if(U.type!=="hex_socket"||M("hex_socket"))continue;let O=U.D/2,k=`\uC721\uAC01 \uC18C\uCF13 S${fe(U.across_flats)} \uAE4A\uC774 ${fe(U.depth)}`,Y=U.end==="left"?-1:1,j=U.end==="left"?U.x1*.5:i-U.depth*.5,Z=U.across_flats/2,yt=j+Y*x(6),wt=p.freeY(yt+Y*Hs(k,m.noteSize)/(2*f),O+x(14),k,m.noteSize,x(4));hs(p,j,Z,yt,wt,k,{size:m.noteSize,label:{kind:"hex_socket",feature:R,value:U.across_flats,depth:U.depth}})}if(m.centerHoleCallout)for(let R of s.centerHoles){if(M("center_hole"))continue;let U=`\uC13C\uD130\uAD6C\uBA4D ${R.form||"A"}${fe(R.d)} (DIN 332)`,O=R.end==="left"?-1:1,k=R.end==="left"?r[0].r:r[r.length-1].r,Y=R.x,j=k*.35,Z=R.x+O*x(5),yt=p.freeY(Z+O*Hs(U,m.noteSize)/(2*f),k+x(10),U,m.noteSize,x(4));hs(p,Y,j,Z,yt,U,{size:m.noteSize,label:{kind:"center_hole",end:R.end,form:R.form||"A",value:R.d}})}let $=[];if(m.sectionViews){let R=i+x(14)+a;for(let U of L){let{f:O,R:k,letter:Y}=U,j=R,Z=0;$.push({letter:Y,cx:j,cy:Z,R:k}),p.text(j,k+x(12),`${Y}-${Y}`,{size:m.textSize+.5,role:"note"}),p.line(j-k-x(3),Z,j+k+x(3),Z,"center"),p.line(j,Z-k-x(3),j,Z+k+x(3),"center");let yt=Sn(n,U.xc)/2;yt>0&&p.circle(j,Z,yt,"outline");let wt=[];if(O.type==="keyway"){let gt=O.width/2,Nt=Math.sqrt(Math.max(0,k*k-gt*gt)),H=k-O.depth,te=Math.atan2(Nt,-gt)/pe,Xt=Math.atan2(Nt,gt)/pe;p.arc(j,Z,k,te,Xt+360,"outline"),p.line(j-gt,Z+H,j-gt,Z+Nt,"outline"),p.line(j+gt,Z+H,j+gt,Z+Nt,"outline"),p.line(j-gt,Z+H,j+gt,Z+H,"outline"),Fn(p,{x:j-gt,y:Z+Nt},{x:j+gt,y:Z+Nt},Z+k+x(6),fe(O.width),{label:{kind:"keyway_width",value:O.width}}),Fn(p,{x:j+gt,y:Z+H},{x:j,y:Z-k},j+k+x(7),fe(2*k-O.depth),{dir:"v",label:{kind:"keyway_depth_ref",value:2*k-O.depth,depth:O.depth}});let N=[];for(let b=Xt;b<=te+360-1e-9;b+=6)N.push([j+k*Math.cos(b*pe),Z+k*Math.sin(b*pe)]);N.push([j+k*Math.cos(te*pe),Z+Nt]),N.push([j-gt,Z+H],[j+gt,Z+H],[j+gt,Z+Nt]),wt.push(N)}else if(O.type==="flat"){let gt=k-O.depth,Nt=Math.sqrt(Math.max(0,k*k-gt*gt)),H=O.count===2?2:1,te=Math.atan2(gt,Nt)/pe,Xt=Math.atan2(gt,-Nt)/pe;if(H===1){p.arc(j,Z,k,Xt,te+360,"outline"),p.line(j-Nt,Z+gt,j+Nt,Z+gt,"outline"),Fn(p,{x:j+Nt,y:Z+gt},{x:j,y:Z-k},j+k+x(7),fe(k+gt),{dir:"v",label:{kind:"flat_depth_ref",value:k+gt,depth:O.depth}});let N=[];for(let b=te;b<=Xt+360+1e-9;b+=6)N.push([j+k*Math.cos(b*pe),Z+k*Math.sin(b*pe)]);N.push([j-Nt,Z+gt]),wt.push(N)}else{p.arc(j,Z,k,Xt,180+te,"outline"),p.arc(j,Z,k,180+Xt,te+360,"outline"),p.line(j-Nt,Z+gt,j+Nt,Z+gt,"outline"),p.line(j-Nt,Z-gt,j+Nt,Z-gt,"outline"),Fn(p,{x:j+Nt,y:Z+gt},{x:j+Nt,y:Z-gt},j+k+x(7),fe(2*gt),{dir:"v",label:{kind:"flat_across",value:2*gt,depth:O.depth}});let N=[];for(let b=te;b<=Xt+1e-9;b+=6)N.push([j+k*Math.cos(b*pe),Z+k*Math.sin(b*pe)]);for(let b=180+te;b<=180+Xt+1e-9;b+=6)N.push([j+k*Math.cos(b*pe),Z+k*Math.sin(b*pe)]);wt.push(N)}}else if(O.type==="hex"){let gt=O.across_flats/2,Nt=gt/Math.cos(30*pe),H=[];for(let te=0;te<6;te++){let Xt=90+60*te,N=Math.cos(Xt*pe),b=Math.sin(Xt*pe),Q=-b,it=N,ut=Math.min(gt*Math.tan(30*pe),Math.sqrt(Math.max(0,k*k-gt*gt))),vt=[j+gt*N-ut*Q,Z+gt*b-ut*it],bt=[j+gt*N+ut*Q,Z+gt*b+ut*it];if(p.line(vt[0],vt[1],bt[0],bt[1],"outline"),H.push(vt,bt),Nt>k+1e-9){let ft=Math.atan2(bt[1]-Z,bt[0]-j)/pe,pt=Xt+60,Tt=Math.cos(pt*pe),zt=Math.sin(pt*pe),It=-zt,At=Tt,$t=[j+gt*Tt-ut*It,Z+gt*zt-ut*At],Jt=Math.atan2($t[1]-Z,$t[0]-j)/pe;p.arc(j,Z,k,ft,Jt<ft?Jt+360:Jt,"outline")}}Fn(p,{x:j+Math.min(gt*Math.tan(30*pe),k),y:Z+gt},{x:j+Math.min(gt*Math.tan(30*pe),k),y:Z-gt},j+k+x(7),fe(O.across_flats),{dir:"v",label:{kind:"hex_across_flats",value:O.across_flats}}),wt.push(H)}for(let gt of wt)yt>0?p.items.push({kind:"hatch",polygon:gt,holes:[N1(j,Z,yt)],layer:"hatch"}):p.hatch(gt);R+=k*2+x(26)}}let X=D1(p.items),ot=x(12),ht,tt,ct,Et,St=(X.x1-X.x0)*f+24,et=(X.y1-X.y0)*f+(m.titleBlock?52:24),dt=Math.max(297,Math.ceil(St/10)*10),V=Math.max(210,Math.ceil(et/10)*10);ht=dt,tt=V;let at=tt-(m.titleBlock?30:0);ct=(ht-(X.x1-X.x0)*f)/2-X.x0*f,Et=(at-(X.y1-X.y0)*f)/2-X.y0*f+(m.titleBlock?30:0);let nt=[],xt=10;if(nt.push({kind:"rect",x:xt,y:xt,w:ht-2*xt,h:tt-2*xt,layer:"frame"}),m.titleBlock){let O=ht-xt-110,k=xt;nt.push({kind:"rect",x:O,y:k,w:110,h:24,layer:"frame"}),nt.push({kind:"line",x1:O,y1:k+8,x2:O+110,y2:k+8,layer:"frame"}),nt.push({kind:"line",x1:O,y1:k+16,x2:O+110,y2:k+16,layer:"frame"}),nt.push({kind:"line",x1:O+55,y1:k,x2:O+55,y2:k+16,layer:"frame"}),nt.push({kind:"line",x1:O+78,y1:k+16,x2:O+78,y2:k+24,layer:"frame"});let Y=(wt,gt,Nt,H=2.5,te="start",Xt="title")=>nt.push({kind:"text",x:wt,y:gt,text:Nt,size:H,anchor:te,layer:"text",role:Xt});Y(O+2,k+24-5.5,"VRINGON",4.2,"start","title"),Y(O+80,k+24-5.5,`\uB3C4\uBC88 ${n.drawing?.number||n.id||"-"}`,2.5),Y(O+2,k+10.5,`\uD488\uBA85 ${n.name_ko||n.name||"\uD68C\uC804\uCCB4"}`,2.8),Y(O+57,k+10.5,`\uC7AC\uC9C8 ${n.material||"-"}`,2.8),Y(O+2,k+2.5,`\uCC99\uB3C4 ${f>=1?`${fe(f)}:1`:`1:${fe(1/f)}`}`,2.5),Y(O+57,k+2.5,`${n.drawing?.projection==="first"?"1\uAC01\uBC95":"3\uAC01\uBC95"} \xB7 \uB2E8\uC704 mm`,2.5);let j=O+88,Z=k+2.5;nt.push({kind:"circle",cx:j+4,cy:Z+4,r:2.4,layer:"frame"},{kind:"circle",cx:j+4,cy:Z+4,r:1.2,layer:"frame"}),nt.push({kind:"polyline",pts:[[j+9.5,Z+1.4],[j+16,Z+2.6],[j+16,Z+5.4],[j+9.5,Z+6.6]],layer:"frame",closed:!0});let yt=[...n.drawing?.notes||[]];yt.length||yt.push("\uC9C0\uC2DC \uC5C6\uB294 \uBAA8\uB530\uAE30 C0.5","\uC9C0\uC2DC \uC5C6\uB294 \uACF5\uCC28 KS B ISO 2768-m"),yt.forEach((wt,gt)=>Y(xt+4,xt+4+(yt.length-1-gt)*4.2,`${gt+1}. ${wt}`,2.6,"start","note"))}return{dsl_id:n.id,scale:f,sheet:{w:ht,h:tt,ox:ct,oy:Et},paper:m.paper,items:p.items,sheetItems:nt,labels:p.labels,bounds:X,sections:$,lineWeights:sm,options:m}}function N1(n,t,e,i=48){let s=[];for(let r=0;r<i;r++)s.push([n+e*Math.cos(2*Math.PI*r/i),t+e*Math.sin(2*Math.PI*r/i)]);return s}function D1(n){let t=1/0,e=1/0,i=-1/0,s=-1/0,r=(o,a)=>{t=Math.min(t,o),e=Math.min(e,a),i=Math.max(i,o),s=Math.max(s,a)};for(let o of n)if(o.kind==="line")r(o.x1,o.y1),r(o.x2,o.y2);else if(o.kind==="polyline")o.pts.forEach(([a,l])=>r(a,l));else if(o.kind==="circle"||o.kind==="arc")r(o.cx-o.r,o.cy-o.r),r(o.cx+o.r,o.cy+o.r);else if(o.kind==="text"){let a=Hs(o.text,o.size);r(o.x-a,o.y-o.size),r(o.x+a,o.y+o.size)}else o.kind==="hatch"&&o.polygon.forEach(([a,l])=>r(a,l));return{x0:t,y0:e,x1:i,y1:s}}function U1(n){let t=n>>>0||1;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var sm={outline:.5,hidden:.25,center:.18,thin:.25,dim:.18,hatch:.18,frame:.5,cut:.7},im={hidden:[3,1.5],center:[8,1.5,.5,1.5],cut:[8,2]};function rm(n,t=[],e=45,i=2.5){let s=e*pe,r=Math.cos(s),o=Math.sin(s),a=-o,l=r,h=[n,...t],c=1/0,d=-1/0,u=1/0,f=-1/0;for(let x of h)for(let[p,g]of x){let M=p*a+g*l,y=p*r+g*o;c=Math.min(c,M),d=Math.max(d,M),u=Math.min(u,y),f=Math.max(f,y)}let m=[];for(let x=c+i/2;x<d;x+=i){let p=[];for(let g of h)for(let M=0;M<g.length;M++){let[y,_]=g[M],[S,w]=g[(M+1)%g.length],E=y*a+_*l,v=S*a+w*l;if(E<=x&&v>x||v<=x&&E>x){let T=(x-E)/(v-E);p.push((y+(S-y)*T)*r+(_+(w-_)*T)*o)}}p.sort((g,M)=>g-M);for(let g=0;g+1<p.length;g+=2){let M=p[g],y=p[g+1];y-M<1e-6||m.push([x*a+M*r,x*l+M*o,x*a+y*r,x*l+y*o])}}return m}function ta(n,t={}){let{sheet:e,scale:i,items:s,sheetItems:r}=n,o=t.pxPerMm||4,a=e.w,l=e.h,h=n.paper==="aged"?"#F1EBDC":"#FFFFFF",c=t.ink||"#111111",d=_=>String(_).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),u=t.font||"Pretendard, 'Segoe UI', Arial, sans-serif",f=[];f.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${a} ${l}" width="${Math.round(a*o)}" height="${Math.round(l*o)}" font-family="${u}" data-vringon-dsl="${d(n.dsl_id||"")}" data-scale="${i}">`),f.push(`<rect width="${a}" height="${l}" fill="${h}"/>`);let m=(_,S)=>[_,l-S],x=_=>{let S=sm[_]??.25,w=im[_]?` stroke-dasharray="${im[_].join(" ")}"`:"";return`stroke="${c}" stroke-width="${S}" fill="none" stroke-linecap="round" stroke-linejoin="round"${w}`},p={},g=_=>p[_]||=[],M=(_,S)=>[e.ox+_*i,l-(e.oy+S*i)];for(let _ of s){let S=_.layer;if(_.kind==="line"){let[w,E]=M(_.x1,_.y1),[v,T]=M(_.x2,_.y2);g(S).push(`<line x1="${Rt(w)}" y1="${Rt(E)}" x2="${Rt(v)}" y2="${Rt(T)}"/>`)}else if(_.kind==="polyline")g(S).push(`<polyline points="${_.pts.map(([w,E])=>M(w,E).map(Rt).join(",")).join(" ")}"${_.closed?' data-closed="1"':""}/>`);else if(_.kind==="circle"){let[w,E]=M(_.cx,_.cy);g(S).push(`<circle cx="${Rt(w)}" cy="${Rt(E)}" r="${Rt(_.r*i)}"/>`)}else if(_.kind==="arc"){let w=_.r*i,E=_.a0*pe,v=_.a1*pe,[T,L]=M(_.cx+_.r*Math.cos(E),_.cy+_.r*Math.sin(E)),[D,P]=M(_.cx+_.r*Math.cos(v),_.cy+_.r*Math.sin(v)),G=Math.abs(_.a1-_.a0)>180?1:0;if(Math.abs(_.a1-_.a0)>=360-1e-9){let[I,A]=M(_.cx,_.cy);g(S).push(`<circle cx="${Rt(I)}" cy="${Rt(A)}" r="${Rt(w)}"/>`)}else g(S).push(`<path d="M ${Rt(T)} ${Rt(L)} A ${Rt(w)} ${Rt(w)} 0 ${G} 0 ${Rt(D)} ${Rt(P)}"/>`)}else if(_.kind==="arrow"){let[w,E]=M(_.x,_.y),v=_.size*i,T=_.angle*pe,L=w+v*Math.cos(T),D=E-v*Math.sin(T),P=-Math.sin(T)*v*.17,G=-Math.cos(T)*v*.17;g("dim").push(`<polygon points="${Rt(w)},${Rt(E)} ${Rt(L+P)},${Rt(D+G)} ${Rt(L-P)},${Rt(D-G)}" fill="${c}" stroke="none"/>`)}else if(_.kind==="text"){let[w,E]=M(_.x,_.y),v=_.anchor==="middle"?"middle":_.anchor==="end"?"end":"start",T=_.rotate?` transform="rotate(${-_.rotate} ${Rt(w)} ${Rt(E)})"`:"";g("text").push(`<text x="${Rt(w)}" y="${Rt(E)}" font-size="${_.size}" text-anchor="${v}" fill="${c}" data-role="${_.role||"dim"}"${T}>${d(_.text)}</text>`)}else if(_.kind==="hatch"){let w=rm(_.polygon,_.holes||[],_.angle??45,_.spacing??2.5/i);for(let[E,v,T,L]of w){let[D,P]=M(E,v),[G,I]=M(T,L);g("hatch").push(`<line x1="${Rt(D)}" y1="${Rt(P)}" x2="${Rt(G)}" y2="${Rt(I)}"/>`)}}}let y=["hatch","center","hidden","thin","dim","cut","outline","text"];for(let _ of y)p[_]?.length&&(f.push(`<g id="${_}" ${_==="text"?`fill="${c}"`:x(_)}>`),f.push(...p[_]),f.push("</g>"));f.push(`<g id="frame" ${x("frame")}>`);for(let _ of r)if(_.kind==="rect")f.push(`<rect x="${Rt(_.x)}" y="${Rt(l-_.y-_.h)}" width="${Rt(_.w)}" height="${Rt(_.h)}"/>`);else if(_.kind==="line"){let[S,w]=m(_.x1,_.y1),[E,v]=m(_.x2,_.y2);f.push(`<line x1="${Rt(S)}" y1="${Rt(w)}" x2="${Rt(E)}" y2="${Rt(v)}"/>`)}else if(_.kind==="circle"){let[S,w]=m(_.cx,_.cy);f.push(`<circle cx="${Rt(S)}" cy="${Rt(w)}" r="${Rt(_.r)}"/>`)}else _.kind==="polyline"&&f.push(`<polyline points="${_.pts.map(([S,w])=>m(S,w).map(Rt).join(",")).join(" ")}"${_.closed,""}/>`);f.push(`</g><g id="sheet-text" fill="${c}">`);for(let _ of r)if(_.kind==="text"){let[S,w]=m(_.x,_.y);f.push(`<text x="${Rt(S)}" y="${Rt(w)}" font-size="${_.size}" text-anchor="${_.anchor}" font-weight="${_.role==="title"?700:400}" data-role="${_.role}">${d(_.text)}</text>`)}return f.push("</g></svg>"),f.join(`
`)}var Rt=n=>(Math.round(n*1e3)/1e3).toString();function om(n){let{sheet:t,scale:e,items:i,sheetItems:s}=n,r=[],o=(...d)=>r.push(...d),a=[["OUTLINE",7,"CONTINUOUS"],["HIDDEN",8,"DASHED"],["CENTER",1,"CENTER"],["THIN",7,"CONTINUOUS"],["DIM",3,"CONTINUOUS"],["HATCH",8,"CONTINUOUS"],["FRAME",7,"CONTINUOUS"],["TEXT",7,"CONTINUOUS"],["CUT",5,"DASHED"]];o("0","SECTION","2","HEADER","9","$ACADVER","1","AC1009","9","$INSUNITS","70","4","0","ENDSEC"),o("0","SECTION","2","TABLES"),o("0","TABLE","2","LTYPE","70","3"),o("0","LTYPE","2","CONTINUOUS","70","0","3","Solid line","72","65","73","0","40","0"),o("0","LTYPE","2","DASHED","70","0","3","Dashed __ __ __","72","65","73","2","40","4.5","49","3","49","-1.5"),o("0","LTYPE","2","CENTER","70","0","3","Center ____ _ ____","72","65","73","4","40","11.5","49","8","49","-1.5","49","0.5","49","-1.5"),o("0","ENDTAB"),o("0","TABLE","2","LAYER","70",String(a.length));for(let[d,u,f]of a)o("0","LAYER","2",d,"70","0","62",String(u),"6",f);o("0","ENDTAB","0","ENDSEC"),o("0","SECTION","2","ENTITIES");let l=(d,u)=>[t.ox+d*e,t.oy+u*e],h=d=>(d||"outline").toUpperCase(),c=(d,u,f,m,x)=>o("0","LINE","8",h(x),"10",Rt(d),"20",Rt(u),"30","0","11",Rt(f),"21",Rt(m),"31","0");for(let d of i)if(d.kind==="line"){let[u,f]=l(d.x1,d.y1),[m,x]=l(d.x2,d.y2);c(u,f,m,x,d.layer)}else if(d.kind==="polyline")for(let u=1;u<d.pts.length;u++){let[f,m]=l(...d.pts[u-1]),[x,p]=l(...d.pts[u]);c(f,m,x,p,d.layer)}else if(d.kind==="circle"){let[u,f]=l(d.cx,d.cy);o("0","CIRCLE","8",h(d.layer),"10",Rt(u),"20",Rt(f),"30","0","40",Rt(d.r*e))}else if(d.kind==="arc"){let[u,f]=l(d.cx,d.cy);o("0","ARC","8",h(d.layer),"10",Rt(u),"20",Rt(f),"30","0","40",Rt(d.r*e),"50",Rt(d.a0),"51",Rt(d.a1%360))}else if(d.kind==="arrow"){let[u,f]=l(d.x,d.y),m=d.size*e,x=d.angle*pe,p=u+m*Math.cos(x),g=f+m*Math.sin(x),M=-Math.sin(x)*m*.17,y=Math.cos(x)*m*.17;o("0","SOLID","8","DIM","10",Rt(u),"20",Rt(f),"30","0","11",Rt(p+M),"21",Rt(g+y),"31","0","12",Rt(p-M),"22",Rt(g-y),"32","0","13",Rt(p-M),"23",Rt(g-y),"33","0")}else if(d.kind==="text"){let[u,f]=l(d.x,d.y),m=d.anchor==="middle"?1:d.anchor==="end"?2:0;o("0","TEXT","8","TEXT","10",Rt(u),"20",Rt(f),"30","0","40",Rt(d.size),"1",d.text.replace(/⌀/g,"%%c"),"50",Rt(d.rotate||0),"72",String(m),"11",Rt(u),"21",Rt(f),"31","0")}else if(d.kind==="hatch")for(let[u,f,m,x]of rm(d.polygon,d.holes||[],d.angle??45,d.spacing??2.5/e)){let[p,g]=l(u,f),[M,y]=l(m,x);c(p,g,M,y,"hatch")}for(let d of s)if(d.kind==="rect")c(d.x,d.y,d.x+d.w,d.y,"frame"),c(d.x+d.w,d.y,d.x+d.w,d.y+d.h,"frame"),c(d.x+d.w,d.y+d.h,d.x,d.y+d.h,"frame"),c(d.x,d.y+d.h,d.x,d.y,"frame");else if(d.kind==="line")c(d.x1,d.y1,d.x2,d.y2,"frame");else if(d.kind==="circle")o("0","CIRCLE","8","FRAME","10",Rt(d.cx),"20",Rt(d.cy),"30","0","40",Rt(d.r));else if(d.kind==="polyline"){let u=d.closed?[...d.pts,d.pts[0]]:d.pts;for(let f=1;f<u.length;f++)c(u[f-1][0],u[f-1][1],u[f][0],u[f][1],"frame")}else d.kind==="text"&&o("0","TEXT","8","TEXT","10",Rt(d.x),"20",Rt(d.y),"30","0","40",Rt(d.size),"1",d.text,"72",d.anchor==="middle"?"1":d.anchor==="end"?"2":"0","11",Rt(d.x),"21",Rt(d.y),"31","0");return o("0","ENDSEC","0","EOF",""),r.join(`\r
`)}function F1(n,t=110){let{width:e,height:i,data:s}=n,r=new Uint8Array(e*i);for(let o=0,a=0;o<e*i;o++,a+=4){if(s[a+3]<40)continue;.299*s[a]+.587*s[a+1]+.114*s[a+2]<t&&(r[o]=1)}return{w:e,h:i,mask:r}}function O1(n,t,e){let i=new Uint8Array(t*e);for(let s=1;s<e-1;s++)for(let r=1;r<t-1;r++){let o=s*t+r;n[o]&&n[o-1]&&n[o+1]&&n[o-t]&&n[o+t]&&(i[o]=1)}return i}function k1(n,t,e){let i=new Uint8Array(t*e);for(let s=1;s<e-1;s++)for(let r=1;r<t-1;r++){let o=s*t+r;(n[o]||n[o-1]||n[o+1]||n[o-t]||n[o+t])&&(i[o]=1)}return i}function am(n,t,e,i=6){let s=new Int32Array(t*e),r=[],o=new Int32Array(t*e),a=1;for(let l=0;l<t*e;l++){if(!n[l]||s[l])continue;let h=0;o[h++]=l,s[l]=a;let c=0,d=t,u=0,f=e,m=0,x=0,p=0;for(;h;){let g=o[--h];c++;let M=g%t,y=(g-M)/t;M<d&&(d=M),M>u&&(u=M),y<f&&(f=y),y>m&&(m=y),x+=M,p+=y,M>0&&n[g-1]&&!s[g-1]&&(s[g-1]=a,o[h++]=g-1),M<t-1&&n[g+1]&&!s[g+1]&&(s[g+1]=a,o[h++]=g+1),y>0&&n[g-t]&&!s[g-t]&&(s[g-t]=a,o[h++]=g-t),y<e-1&&n[g+t]&&!s[g+t]&&(s[g+t]=a,o[h++]=g+t)}c>=i&&r.push({id:a,n:c,x0:d,x1:u,y0:f,y1:m,w:u-d+1,h:m-f+1,cx:x/c,cy:p/c}),a++}return{label:s,comps:r}}function B1(n,t={}){let e=n.width,i=n.height,s=[],{mask:r}=F1(n,t.threshold??105),o=V1(r,e,i),a=Math.max(0,Math.round(o/2)-1),l=r;for(let V=0;V<a;V++)l=O1(l,e,i);let h=a>0;s.push(`\uC120 \uAD75\uAE30 ${o}px${h?", \uAC00\uB294 \uC120 \uC815\uB9AC "+a+"\uD68C":""}`);let{label:c,comps:d}=am(l,e,i,8);if(!d.length)return{ok:!1,notes:["\uC789\uD06C\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4(\uBE48 \uC774\uBBF8\uC9C0?)"]};let u=d.filter(V=>V.w>e*.8&&V.h>i*.8),f=d.filter(V=>!u.includes(V)&&V.w>=12&&V.h>=6);if(!f.length)return{ok:!1,notes:["\uBD80\uD488 \uC678\uD615\uC73C\uB85C \uBCFC \uC131\uBD84\uC774 \uC5C6\uC2B5\uB2C8\uB2E4"]};f.sort((V,at)=>at.w*at.h-V.w*V.h);let m=f[0],x=f.reduce((V,at)=>at.w>V.w?at:V);x.w>m.w*1.15&&x.n>m.n*.35&&(m=x);let p=m.h>m.w*1.3;p&&s.push("\uC138\uB85C\uB85C \uB193\uC778 \uBD80\uD488\uC73C\uB85C \uBCF4\uACE0 \uCD95\uC744 \uC138\uB85C\uB85C \uC7A1\uC558\uC2B5\uB2C8\uB2E4");let g=null;if(!p)for(let V of f){if(V===m)continue;let at=Math.min(V.x1,m.x1)-Math.max(V.x0,m.x0),nt=V.y0>m.y1||V.y1<m.y0;if(at>.85*Math.min(V.w,m.w)&&nt&&V.n>m.n*.4&&V.n<m.n*2.5&&Math.abs(V.w-m.w)<m.w*.15&&Math.abs(V.h-m.h)<Math.max(V.h,m.h)*.35){g=V;break}}let M=g?g.y0<m.y0?g:m:null,y=g?M===m?g:m:null,_=g?Math.min(m.x0,g.x0):m.x0,S=g?Math.max(m.x1,g.x1):m.x1,w=g?Math.min(m.y0,g.y0):m.y0,E=g?Math.max(m.y1,g.y1):m.y1;g&&s.push("\uC704\uC544\uB798\uAC00 \uAC70\uC6B8\uC0C1\uC774\uB77C \uC804\uB2E8\uBA74\uB3C4\uB85C \uBCF4\uACE0 \uBCF4\uC5B4\uB97C \uD568\uAED8 \uC77D\uC5C8\uC2B5\uB2C8\uB2E4");let v=p?m.h:S-_+1,T=new Float64Array(v),L=new Float64Array(v),D=new Uint8Array(v),P=new Float64Array(v),G=new Float64Array(v);for(let V=0;V<v;V++)T[V]=1/0,L[V]=-1/0,P[V]=-1/0,G[V]=1/0;let I=new Set([m.id,g?.id].filter(Boolean));for(let V=w;V<=E;V++)for(let at=_;at<=S;at++){let nt=c[V*e+at];if(!I.has(nt))continue;let xt=p?V-m.y0:at-_,R=p?at:V;R<T[xt]&&(T[xt]=R),R>L[xt]&&(L[xt]=R),D[xt]=1,g&&(nt===M.id&&R>P[xt]&&(P[xt]=R),nt===y.id&&R<G[xt]&&(G[xt]=R))}m={...m,x0:_,x1:S,y0:w,y1:E,w:S-_+1,h:E-w+1};let A=V=>{let at=-1;for(let nt=0;nt<v;nt++)if(D[nt]&&Number.isFinite(V[nt])){if(at>=0&&nt-at>1)for(let xt=at+1;xt<nt;xt++)V[xt]=V[at]+(V[nt]-V[at])*(xt-at)/(nt-at);at=nt}for(let nt=0;nt<v;nt++)Number.isFinite(V[nt])||(V[nt]=at>=0?V[at]:0)};A(T),A(L);let B=[];for(let V=0;V<v;V++)B.push((T[V]+L[V])/2);let F=z1(B),$=Math.min(800,v),X=new Float64Array($),ot=new Float64Array($),ht=null;if(g){let V=new Float64Array(v);for(let nt=0;nt<v;nt++)V[nt]=Number.isFinite(P[nt])&&Number.isFinite(G[nt])&&G[nt]>P[nt]?(G[nt]-P[nt])/2:NaN;let at=NaN;for(let nt=0;nt<v;nt++)Number.isFinite(V[nt])?at=V[nt]:V[nt]=at;at=NaN;for(let nt=v-1;nt>=0;nt--)Number.isFinite(V[nt])?at=V[nt]:V[nt]=at;ht=new Float64Array($);for(let nt=0;nt<$;nt++){let xt=Math.min(v-1,Math.floor((nt+.5)*v/$));ht[nt]=Math.max(0,V[xt]||0)}}for(let V=0;V<$;V++){let at=Math.min(v-1,Math.floor((V+.5)*v/$));X[V]=Math.max(0,F-T[at]),ot[V]=Math.max(0,L[at]-F)}let tt=[],ct=V=>V.filter(at=>at.id!==m.id&&at.id!==g?.id&&at.x0>m.x0+2&&at.x1<m.x1-2&&at.y0>m.y0+1&&at.y1<m.y1-1&&!u.includes(at));for(let V of ct(d)){let at=V.w/V.h,nt=(V.x0-m.x0)/m.w,xt=(V.x1-m.x0)/m.w;at>=8||(at>=1.7&&V.h>=3&&V.w>=6&&Math.abs(V.cy-F)<m.h*.15?tt.push({type:"keyway",relX0:nt,relX1:xt,width_px:V.h,len_px:V.w}):at>=.7&&at<=1.4&&V.w>=4&&Math.abs(V.cy-F)<m.h*.15&&!g&&tt.push({type:"cross_hole",relX:(V.cx-m.x0)/m.w,dia_px:(V.w+V.h)/2}))}let Et=d;if(h){let V=l;for(let nt=0;nt<a+1;nt++)V=k1(V,e,i);let at=new Uint8Array(e*i);for(let nt=0;nt<e*i;nt++)r[nt]&&!V[nt]&&(at[nt]=1);Et=am(at,e,i,8).comps}let St=[];for(let V of ct(Et))V.w/V.h>=8&&V.h<=Math.max(3,m.h*.02)&&V.w>=m.w*.04&&St.push({...V,relX0:(V.x0-m.x0)/m.w,relX1:(V.x1-m.x0)/m.w});for(let V=0;V<St.length;V++)for(let at=V+1;at<St.length;at++){let nt=St[V],xt=St[at],R=Math.abs(nt.cy-F),U=Math.abs(xt.cy-F);Math.abs(nt.relX0-xt.relX0)<.03&&Math.abs(nt.relX1-xt.relX1)<.03&&Math.abs(nt.cy-F+(xt.cy-F))<m.h*.04&&Math.abs(nt.cy-xt.cy)>3&&Math.min(R,U)>m.h*.15&&(tt.some(O=>O.type==="thread"&&Math.abs(O.relX0-nt.relX0)<.03)||tt.push({type:"thread",relX0:Math.min(nt.relX0,xt.relX0),relX1:Math.max(nt.relX1,xt.relX1),minor_px:(R+U)/2}))}let et=f.filter(V=>V.w>=e*.22||V.n>=m.n*.35).filter(V=>V.id!==m.id&&V.id!==g?.id),dt=[];if(et.length>=1&&dt.push({kind:"multiview",n:et.length+1+(g?1:0),text:`\uD070 \uC131\uBD84\uC774 ${et.length+1}\uAC1C. \uC5EC\uB7EC \uD22C\uC0C1\uB3C4\uB098 \uC870\uB9BD\uCCB4\uB85C \uBCF4\uC785\uB2C8\uB2E4. \uC774 \uB370\uBAA8\uB294 \uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4 \uD55C \uC7A5\uC744 \uC77D\uC2B5\uB2C8\uB2E4(\uB2E8\uBA74\uB3C4\xB7\uD0A4\uD648 \uB2E8\uBA74\uC740 \uC606\uC5D0 \uC788\uC5B4\uB3C4 \uB429\uB2C8\uB2E4).`}),v<500&&dt.push({kind:"lowres",px:v,text:`\uBD80\uD488\uC774 \uAC00\uB85C ${v}px \uB85C \uC791\uC2B5\uB2C8\uB2E4(\uAD8C\uC7A5 1,000px \uC774\uC0C1). \uC800\uD574\uC0C1 JPEG \uC740 \uC678\uD615\uC120\uACFC \uCE58\uC218\uC120\uC774 \uBD99\uC5B4 \uD310\uB3C5\uC774 \uC5B4\uAE0B\uB0A9\uB2C8\uB2E4.`}),g){let V=0;for(let at=0;at<$;at++)ht[at]>.92*Math.min(X[at],ot[at])&&V++;V>$*.2&&dt.push({kind:"not_section",text:"\uC704\xB7\uC544\uB798 \uB450 \uC131\uBD84\uC744 \uC804\uB2E8\uBA74 \uBC18\uCABD\uC73C\uB85C \uBCF4\uAE30\uC5D4 \uC548\uCABD \uB760\uAC00 \uB108\uBB34 \uB113\uC2B5\uB2C8\uB2E4. \uC11C\uB85C \uB2E4\uB978 \uD22C\uC0C1\uB3C4\uC77C \uAC00\uB2A5\uC131\uC774 \uD07D\uB2C8\uB2E4."})}for(let V of dt)s.push(V.text);return{ok:!0,L_px:v,top:X,bottom:ot,bore:ht,sectioned:!!g,axis:F,bbox:{x0:m.x0,y0:m.y0,x1:m.x1,y1:m.y1},vertical:p,hints:tt,notes:s,flags:dt,pxPerLen:v,imageSize:{w:e,h:i}}}function z1(n){let t=[...n].sort((e,i)=>e-i);return t.length?t[Math.floor(t.length/2)]:0}function V1(n,t,e){let i=new Array(12).fill(0);for(let o=0;o<e;o+=2){let a=0;for(let l=0;l<t;l++)n[o*t+l]?a++:(a>0&&a<12&&i[a]++,a=0)}let s=1,r=-1;for(let o=1;o<12;o++)i[o]*o>r&&(r=i[o]*o,s=o);return s}function Pc(n,t){if(n.length<3)return n.slice();let[e,i]=[n[0],n[n.length-1]],s=-1,r=0,o=i.x-e.x,a=i.y-e.y,l=Math.hypot(o,a)||1;for(let h=1;h<n.length-1;h++){let c=n[h],d=Math.abs(a*c.x-o*c.y+i.x*e.y-i.y*e.x)/l;d>r&&(r=d,s=h)}if(r>t){let h=Pc(n.slice(0,s+1),t),c=Pc(n.slice(s),t);return h.slice(0,-1).concat(c)}return[e,i]}var He=(n,t)=>Math.round(n/t)*t;function H1(n,t={}){let e=n.top.length,i=[],s=new Float64Array(e);for(let I=0;I<e;I++)s[I]=(n.top[I]+n.bottom[I])/2/n.L_px;let r=new Float64Array(e);for(let I=0;I<e;I++){let A=s[Math.max(0,I-1)],B=s[I],F=s[Math.min(e-1,I+1)];r[I]=[A,B,F].sort(($,X)=>$-X)[1]}let o=t.overallLength||100,a=n.L_px/o,l=Math.max(1.5/n.L_px,8e-4),h=[];for(let I=0;I<e;I++)h.push({x:(I+.5)/e,y:r[I]});h.unshift({x:0,y:r[0]}),h.push({x:1,y:r[e-1]});let c=Pc(h,l),d=[];for(let I=1;I<c.length;I++){let A=c[I-1],B=c[I],F=B.x-A.x,$=B.y-A.y,X=F>1e-9?Math.abs($)/F:1/0,ot=Math.max(3.5/n.L_px,2.6/e),ht=F*o,tt=Math.abs($)*o,ct;Math.abs($)<=l*1.5?ct="flat":X>3.5||F<ot?ct="step":X>1.5&&ht<=3?ct="fillet":(ht<=3.5||F<.05)&&tt<=5&&X>.3?ct="chamfer":ct="taper",d.push({x0:A.x,x1:B.x,r0:A.y,r1:B.y,kind:ct})}let u=[];for(let I of d){let A=u[u.length-1];if(A&&I.kind==="flat"&&A.kind==="flat"&&Math.abs(I.r1-A.r0)<=l*2&&Math.abs(I.r0-A.r1)<=l*2){A.x1=I.x1,A.r1=I.r1;continue}if(A&&I.kind==="step"&&A.kind==="step"&&Math.sign(I.r1-I.r0)===Math.sign(A.r1-A.r0)){A.x1=I.x1,A.r1=I.r1;continue}u.push({...I})}for(let I=u.length-1;I>=0;I--){let A=u[I];A.kind==="flat"&&(A.x1-A.x0)*n.L_px<3&&I>0&&I<u.length-1&&(u[I+1].x0=A.x0,u[I+1].r0=u[I-1].r1,u.splice(I,1))}d.length=0,d.push(...u);for(let I=0;I<d.length;I++){let A=d[I];if(A.kind!=="chamfer")continue;let B=A.r1>A.r0,F=d[I+1],$=d[I-1];B&&F?.kind==="step"&&F.r1>F.r0&&(A.kind="fillet"),!B&&$?.kind==="step"&&$.r1<$.r0&&(A.kind="fillet")}let f=o<30?.1:o<120?.5:1,m=o<40?.5:1,x=[],p=[],g=[],M=null,y=null,_=()=>{M&&(x.push(M),M=null)},S=()=>x.length&&x[x.length-1].kind==="cyl"?x[x.length-1]:null;for(let I=0;I<d.length;I++){let A=d[I];if(A.kind==="flat"){let B=(A.r0+A.r1)/2,F=d[I-1],$=d[I+1];if(F?.kind==="step"&&$?.kind==="step"&&F.r0>B+l&&$.r1>B+l&&((A.x1-A.x0)*o<=12||A.x1-A.x0<.06)){let ot=F.r0,ht=$.r1,tt=(A.x1-A.x0)*o;if(Math.abs(ot-ht)<=l*2&&tt<=6){M||(M=x.pop()||{x0:A.x0,x1:A.x0,r:ot,kind:"cyl"}),g.push({segIndex:x.length,x0:A.x0*o,x1:A.x1*o,depth:(M.r-B)*o}),M.x1=A.x1,I+=1;continue}let ct=ot<ht;if(p.push({undercutAt:ct?A.x1:A.x0,width:tt,depth:(Math.min(ot,ht)-B)*o}),ct){M||(M=x.pop()||{x0:A.x0,x1:A.x0,r:ot,kind:"cyl"}),M.x1=A.x1;continue}_(),y=A.x0,I+=1;continue}if(M&&Math.abs(M.r-B)<=l*1.5){M.x1=A.x1;continue}_(),M={x0:y??A.x0,x1:A.x1,r:B,kind:"cyl"},y=null}else if(A.kind==="taper")_(),x.push({x0:y??A.x0,x1:A.x1,r0:A.r0,r1:A.r1,kind:"taper"}),y=null;else if(A.kind==="fillet"){let B=Math.max(.5,He((A.x1-A.x0)*o,.5)),F=A.r1>A.r0;p.push({fillet:!0,xAt:F?A.x1:A.x0,radius:B}),F?M?M.x1=A.x1:M={x0:y??A.x0,x1:A.x1,r:A.r0,kind:"cyl"}:(_(),M={x0:A.x0,x1:A.x1,r:A.r1,kind:"cyl"}),y=null}else if(A.kind==="chamfer"){let B=(A.x1-A.x0)*o,F=Math.abs(A.r1-A.r0)*o,$=Math.atan2(F,B)*180/Math.PI;$=Math.abs($-45)<=9?45:Math.abs($-30)<=7?30:Math.abs($-60)<=7?60:Math.round($/5)*5||45;let X=I===0||d[I-1]?.kind==="step"&&A.r1>A.r0;p.push({chamfer:!0,xAt:X?A.x0:A.x1,size:He(B,.5)||.5,angle:$,rising:A.r1>A.r0}),X?(_(),M={x0:y??A.x0,x1:A.x1,r:A.r1,kind:"cyl",fromChamfer:!0},y=null):M?M.x1=A.x1:M={x0:A.x0,x1:A.x1,r:A.r0,kind:"cyl"}}else _()}_();let w={dsl:zr,id:t.id||"extracted",name_ko:t.name_ko||"\uD310\uB3C5 \uD68C\uC804\uCCB4",part_class:"shaft",units:"mm",segments:[],transitions:[],grooves:[],bore:null,features:[],meta:{source:"extracted",generator:"silhouette-extractor/1.0",notes:[]}},E=0,v=[];for(let I of x){let A=He((I.x1-I.x0)*o,m);A<m||(v.push({x0:E,x1:E+A,s:I}),I.kind==="taper"?w.segments.push({type:"taper",length:A,d_start:Math.max(f,He(2*I.r0*o,f)),d_end:Math.max(f,He(2*I.r1*o,f))}):w.segments.push({type:"cyl",length:A,diameter:Math.max(f,He(2*I.r*o,f))}),E+=A)}let T=w.segments.reduce((I,A)=>I+A.length,0);if(w.segments.length&&Math.abs(T-o)>1e-6){let I=w.segments.reduce((A,B,F,$)=>B.length>$[A].length?F:A,0);w.segments[I].length=He(w.segments[I].length+(o-T),m>.5?.5:.1)}let L=w.segments.length,D=[];{let I=0;for(let A of w.segments)D.push(I),I+=A.length;D.push(I)}for(let I of p){if(I.fillet){let A=I.xAt*o,B=0,F=1/0;D.forEach(($,X)=>{Math.abs($-A)<F&&(F=Math.abs($-A),B=X)}),F<o*.03&&B>0&&B<L&&w.transitions.push({at:B,type:"fillet",radius:I.radius});continue}if(I.chamfer){let A=I.xAt*o,B=0,F=1/0;D.forEach(($,X)=>{Math.abs($-A)<F&&(F=Math.abs($-A),B=X)}),F<o*.03&&w.transitions.push({at:B,type:"chamfer",size:I.size,angle:I.angle===45?void 0:I.angle})}else if(I.undercutAt!==void 0){let A=I.undercutAt*o,B=0,F=1/0;D.forEach(($,X)=>{Math.abs($-A)<F&&(F=Math.abs($-A),B=X)}),F<o*.03&&B>0&&B<L&&w.transitions.push({at:B,type:"undercut",width:He(I.width,.5)||.5,depth:He(I.depth,.1)||.1})}}for(let I of w.transitions)I.angle===void 0&&delete I.angle;for(let I of g){let A=Math.min(L-1,I.segIndex);if(A<0)continue;let B=He(I.x0-D[A],.5),F=Math.max(.5,He(I.x1-I.x0,.1));B>=0&&B+F<=w.segments[A].length&&w.grooves.push({segment:A,offset:B,width:F,depth:Math.max(.2,He(I.depth,.1)),kind:"generic"})}if(n.bore&&n.sectioned){let I=n.bore.length,A=[];for(let $=0;$<I;$++)A.push({x:($+.5)/I,y:n.bore[$]/n.L_px});let B=Pc(A,Math.max(1.5/n.L_px,8e-4)),F=[];for(let $=1;$<B.length;$++){let X=B[$-1],ot=B[$];if(Math.abs(ot.y-X.y)>l*1.5)continue;let ht=He(2*((X.y+ot.y)/2)*o,f),tt=F[F.length-1];tt&&Math.abs(tt.diameter-ht)<f/2?tt.x1=ot.x:F.push({x0:X.x,x1:ot.x,diameter:ht})}if(F.length&&F[0].diameter>0){let $=[];for(let ot=0;ot<F.length;ot++){let ht=ot===0?0:(F[ot-1].x1+F[ot].x0)/2,tt=ot===F.length-1?1:(F[ot].x1+F[ot+1].x0)/2;$.push({length:He((tt-ht)*o,m),diameter:F[ot].diameter})}let X=$.reduce((ot,ht)=>ot+ht.length,0);$[$.length-1].length=He($[$.length-1].length+(o-X),.1),$.every(ot=>ot.length>0)&&(w.bore={through:!0,segments:$},i.push("\uC804\uB2E8\uBA74\uB3C4\uC758 \uC704\xB7\uC544\uB798 \uBC18\uCABD \uC0AC\uC774 \uBE48 \uB760\uC5D0\uC11C \uBCF4\uC5B4 \uC9C0\uB984\uC744 \uC77D\uC5C8\uC2B5\uB2C8\uB2E4."))}}for(let I of n.hints||[])if(I.type==="keyway"){let A=I.relX0*o,B=I.relX1*o,F=D.findIndex((tt,ct)=>ct<L&&A>=tt-1e-6&&B<=D[ct+1]+1e-6);if(F<0||w.segments[F].type!=="cyl")continue;let $=w.segments[F].diameter,X=Os($),ot=He(I.width_px/a,.5);X&&Math.abs(ot-X.width)<=Math.max(1,X.width*.3)&&(ot=X.width);let ht=X?X.depth:He(ot*.55,.5);w.features.push({type:"keyway",segment:F,offset:He(A-D[F],.5),length:He(B-A,.5),width:ot,depth:ht,kind:"parallel"}),i.push(`\uD0A4\uD648\uC740 \uC815\uBA74\uB3C4 \uC724\uACFD\uC5D0\uC11C \uD3ED\uACFC \uAE38\uC774\uB97C \uC7AC\uACE0, \uAE4A\uC774\uB294 DIN 6885 \uD45C\uC900\uAC12(t1=${ht})\uC744 \uB123\uC5C8\uC2B5\uB2C8\uB2E4.`)}else if(I.type==="cross_hole"){let A=He(I.relX*o,.5),B=He(I.dia_px/a,.5);B>=1&&w.features.push({type:"cross_hole",position:A,diameter:B,through:!0,angle:0})}else if(I.type==="thread"){let A=I.relX0*o,B=I.relX1*o,F=D.findIndex(($,X)=>X<L&&(A+B)/2>=$&&(A+B)/2<=D[X+1]);if(F>=0&&w.segments[F].type==="cyl"){let $=w.segments[F],X=[6,8,10,12,14,16,18,20,22,24,27,30,36].reduce((ot,ht)=>Math.abs(ht-$.diameter)<Math.abs(ot-$.diameter)?ht:ot);$.type="thread",$.diameter=X,$.spec=Yo(X,Ii[X]),$.pitch=Ii[X],i.push(`\uB098\uC0AC\uBD80\uB294 \uACE8\uC9C0\uB984 \uC120\uC73C\uB85C \uCC3E\uC558\uACE0, \uD53C\uCE58\uB294 \uBCF4\uD1B5\uB098\uC0AC(${$.spec})\uB85C \uAC00\uC815\uD588\uC2B5\uB2C8\uB2E4.`)}}i.push("\uC678\uD615 \uD310\uB3C5\uC740 \uBE44\uC728\uB9CC \uC815\uD655\uD569\uB2C8\uB2E4. \uC2E4\uC81C \uCE58\uC218\uB294 \uC804\uCCB4 \uAE38\uC774("+o+"mm) \uD558\uB098\uB85C \uC815\uD588\uACE0, \uC13C\uD130\uAD6C\uBA4D\xB7\uACF5\uCC28\xB7\uC7AC\uC9C8\xB7\uD544\uB81B R \uC740 \uC77D\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4.");let P=Bs(w);if(!Oe(P).ok){for(let I of["features","grooves","transitions"])for(let A=P[I].length-1;A>=0&&!Oe(P).ok;A--){let[B]=P[I].splice(A,1);Oe(P).ok||P[I].splice(A,0,B)}Oe(P).ok||(P.transitions=[],P.grooves=[],P.features=[]),i.push("\uC77C\uBD80 \uC804\uC774/\uD53C\uCC98\uB294 \uAE30\uD558 \uAC80\uC0AC\uC5D0 \uAC78\uB824 \uC81C\uC678\uD588\uC2B5\uB2C8\uB2E4.")}return P.meta.notes=i,{dsl:P,notes:i,pieces:d,simplified:c}}function lm(n,t={}){let e=B1(n,t);if(!e.ok)return{ok:!1,notes:e.notes,method:"silhouette"};let i=H1(e,t),s=[];(i.dsl.segments||[]).length>14&&s.push(`\uC138\uADF8\uBA3C\uD2B8\uAC00 ${i.dsl.segments.length}\uAC1C\uB85C \uB108\uBB34 \uB9CE\uC2B5\uB2C8\uB2E4(\uC7A1\uC74C\uC774 \uC678\uD615\uC120\uC5D0 \uC11E\uC600\uC744 \uB54C\uC758 \uC804\uD615).`);let r=(i.dsl.segments||[]).filter(a=>a.length<(t.overallLength||100)*.015).length;r>=3&&s.push(`\uC544\uC8FC \uC9E7\uC740 \uC138\uADF8\uBA3C\uD2B8\uAC00 ${r}\uAC1C. \uCE58\uC218\uC120\xB7\uC9C0\uC2DC\uC120\uC774 \uC678\uD615\uC120\uC5D0 \uBD99\uC5B4 \uC77D\uD614\uC744 \uAC00\uB2A5\uC131.`);for(let a of e.flags||[])s.push(a.text);return{ok:!0,method:"silhouette",plausible:s.length===0||s.length===1&&(e.flags||[]).some(a=>a.kind==="lowres"),reasons:s,dsl:i.dsl,notes:[...e.notes,...i.notes],silhouette:{L:e.L_px,top:e.top,bottom:e.bottom,bbox:e.bbox,axis:e.axis,imageSize:e.imageSize},hints:e.hints,flags:e.flags||[],dims_read:[],pieces:i.pieces}}async function cm(n,{hints:t=null,overallLength:e=null,endpoint:i="./api/extract",tier:s="text"}={}){let r=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({imageB64:n,hints:t,overallLength:e,tier:s})}),o=await r.json().catch(()=>({}));if(!r.ok)throw new Error(o.error||`\uC11C\uBC84 \uC624\uB958 ${r.status}`);return{ok:!0,method:"server",...o}}function na(n,t,e={}){let i=Math.max(n.samples.length,t.samples.length,200),s=e.absolute?1:1/(n.L||1),r=e.absolute?1:1/(t.L||1),o=0,a=0;for(let l=0;l<i;l++){let h=(l+.5)/i,c=hm(n.samples,h)*s,d=hm(t.samples,h)*r;o+=Math.min(c,d),a+=Math.max(c,d)}return a>0?o/a:0}function hm(n,t){let e=n.length,i=t*e-.5,s=Math.max(0,Math.min(e-1,Math.floor(i))),r=Math.max(0,Math.min(e-1,s+1)),o=Math.max(0,Math.min(1,i-s));return n[s]*(1-o)+n[r]*o}function G1(n,t,e={}){let i=Iu(t,400),s=na({L:n.L,samples:n.top},i,e),r=na({L:n.L,samples:n.bottom},i,e);return(s+r)/2}function ea(n,t=400){return Iu(n,t)}function $1(n,t=[],e=.051){let i=ii(n),s=ye(n),r=[],o=(c,d,u)=>{Number.isFinite(d)&&r.push({kind:c,value:d,ref:u,used:!1})};o("overall",s,"overall"),i.segments.forEach((c,d)=>{o("length",c.x1-c.x0,`segments[${d}].length`),c.type==="taper"?(o("diameter",c.ds,`segments[${d}].d_start`),o("diameter",c.de,`segments[${d}].d_end`)):o("diameter",c.ds,`segments[${d}].diameter`)}),i.threads.forEach(c=>r.push({kind:"thread",value:zu(c.spec),ref:`segments[${c.i}].spec`,used:!1})),i.transitions.forEach((c,d)=>{c.type==="chamfer"&&o("chamfer",c.size,`transitions[${d}]`),(c.type==="fillet"||c.type==="round")&&o("radius",c.radius,`transitions[${d}]`),c.type==="undercut"&&(o("length",c.width,`transitions[${d}].width`),o("diameter",2*(c.r-c.depth),`transitions[${d}].relief`))}),i.grooves.forEach((c,d)=>{o("length",c.width,`grooves[${d}].width`),o("diameter",2*c.r_floor,`grooves[${d}].diameter`),o("length",c.x0-i.segments[c.segment].x0,`grooves[${d}].offset`),o("length",i.segments[c.segment].x1-c.x1,`grooves[${d}].offset_end`)}),i.features.forEach((c,d)=>{c.type==="keyway"&&(o("length",c.width,`features[${d}].width`),o("length",c.length,`features[${d}].length`),o("length",c.D-c.depth,`features[${d}].depth_ref`),o("length",c.depth,`features[${d}].depth`),o("length",c.x0-i.segments[c.segment].x0,`features[${d}].offset`),o("length",i.segments[c.segment].x1-c.x1,`features[${d}].offset_end`)),c.type==="flat"&&(o("length",c.length,`features[${d}].length`),o("length",c.D-c.depth,`features[${d}].depth_ref`),o("length",c.depth,`features[${d}].depth`),o("length",c.D-2*c.depth,`features[${d}].across`)),c.type==="hex"&&o("length",c.across_flats,`features[${d}].across_flats`),c.type==="cross_hole"&&(o("diameter",c.diameter,`features[${d}].diameter`),o("length",c.position,`features[${d}].position`),o("length",s-c.position,`features[${d}].position_from_right`)),c.type==="center_hole"&&o("length",c.d,`features[${d}].d`),c.type==="hex_socket"&&(o("length",c.across_flats,`features[${d}].across_flats`),o("length",c.depth,`features[${d}].depth`))}),i.bore&&(i.bore.segments.forEach((c,d)=>{o("diameter",c.diameter,`bore.segments[${d}].diameter`),o("length",c.x1-c.x0,`bore.segments[${d}].length`)}),i.bore.through||o("length",i.bore.segments.reduce((c,d)=>c+(d.x1-d.x0),0),"bore.depth"));let a=[],l=c=>(n.features||[]).some(d=>d.type===c);for(let c of t){let d=c.kind||"other",u=c.value,f=String(c.text||"");if(/센터구멍|DIN\s*332|center/i.test(f)){a.push({...c,matched:l("center_hole"),ref:"features.center_hole"});continue}if(/DIN\s*76|DIN\s*509|도피홈/i.test(f)&&!/×|x\d/.test(f)){a.push({...c,matched:(n.transitions||[]).some(p=>p.type==="undercut"),ref:"transitions.undercut"});continue}if(/DIN\s*6885|키홈/i.test(f)&&!/\d/.test(f.replace(/DIN\s*6885/i,""))){a.push({...c,matched:l("keyway"),ref:"features.keyway"});continue}if(/널링|knurl/i.test(f)){a.push({...c,matched:l("knurl"),ref:"features.knurl"});continue}if(/육각\s*소켓|hex\s*socket/i.test(f)&&!/\d/.test(f.replace(/육각\s*소켓|hex\s*socket/i,""))){a.push({...c,matched:l("hex_socket"),ref:"features.hex_socket"});continue}if(/관통|THRU/i.test(f)&&!/⌀|Ø|\d/.test(f)){a.push({...c,matched:l("cross_hole"),ref:"features.cross_hole"});continue}if(d==="thread"){let p=zu(String(u||c.text||"")),g=r.find(M=>M.kind==="thread"&&!M.used&&M.value===p);g&&(g.used=!0),a.push({...c,matched:!!g,ref:g?.ref});continue}if(typeof u=="string"&&(u=parseFloat(u.replace(/[^\d.]/g,""))),!Number.isFinite(u)){a.push({...c,matched:!1,reason:"\uC22B\uC790 \uC544\uB2D8"});continue}let m=d==="diameter"||d==="bore_diameter"||d==="groove_diameter"?["diameter"]:d==="overall"?["overall","length"]:d==="chamfer"?["chamfer"]:d==="radius"?["radius"]:["length","overall","diameter","chamfer","radius"],x=null;for(let p of m)if(x=r.find(g=>g.kind===p&&!g.used&&Math.abs(g.value-u)<=e+u*.002),x)break;!x&&m.length===1&&(x=r.find(p=>!p.used&&Math.abs(p.value-u)<=e+u*.002)),x&&(x.used=!0),a.push({...c,matched:!!x,ref:x?.ref,kindMismatch:x&&!m.includes(x.kind)})}let h=a.filter(c=>c.matched).length;return{total:a.length,matched:h,rate:a.length?h/a.length:null,results:a,unmatched:a.filter(c=>!c.matched)}}function zu(n){return String(n||"").toUpperCase().replace(/×/g,"X").replace(/\s+/g,"").replace(/-\w+$/,"")}function W1({iou:n=null,dimRate:t=null,valid:e=!0,warnings:i=0,executed:s=!0}){let r=0,o=0;n!==null&&(r+=.55*n,o+=.55),t!==null&&(r+=.35*t,o+=.35),r+=.1*(e&&s?1:0),o+=.1;let a=o>0?r/o:0;return a-=Math.min(.15,i*.03),t===null&&(a=Math.min(a,.8)),Math.max(0,Math.min(1,a))}function fm({dsl:n,inputSilhouette:t=null,dimsRead:e=null}){let i=Oe(n),s=null;t&&i.ok&&(s=t.top&&t.bottom?G1(t,n):na(t,ea(n)));let r=e&&e.length&&i.ok?$1(n,e):null,o=W1({iou:s,dimRate:r?r.rate:null,valid:i.ok,warnings:i.warnings?.length||0}),a=i.ok?o>=.85?"pass":o>=.6?"review":"fail":"invalid";return{valid:i.ok,errors:i.errors,warnings:i.warnings,iou:s,dims:r,confidence:o,verdict:a}}var fn=(n,t,e=.02,i=.06)=>Number.isFinite(n)&&Number.isFinite(t)&&Math.abs(n-t)<=Math.max(i,Math.abs(t)*e);function X1(n,t){if(n.type!==t.type||!fn(n.length,t.length))return!1;let[e,i]=Ne(n),[s,r]=Ne(t);if(t.type==="thread"){let o=$n(n.spec),a=$n(t.spec);return!!o&&!!a&&o.nominal===a.nominal&&fn(o.pitch||0,a.pitch||0,.01,.01)}return fn(e,s)&&fn(i,r)}function q1(n,t,e){let i=n.length,s=t.length,r=Array.from({length:i+1},()=>new Array(s+1).fill(0));for(let o=1;o<=i;o++)for(let a=1;a<=s;a++)r[o][a]=e(n[o-1],t[a-1])?r[o-1][a-1]+1:Math.max(r[o-1][a],r[o][a-1]);return r[i][s]}function Lc(n,t,e){let i=t?n/t:e?0:1,s=e?n/e:t?0:1;return{precision:i,recall:s,f1:i+s>0?2*i*s/(i+s):t===0&&e===0?1:0}}function um(n){return n.type==="keyway"?["keyway",n.width,n.depth,n.length]:n.type==="center_hole"?["center_hole",n.end,n.d]:n.type==="cross_hole"?["cross_hole",n.diameter,n.position]:n.type==="flat"?["flat",n.depth,n.length]:n.type==="hex"?["hex",n.across_flats]:n.type==="knurl"?["knurl",n.length]:n.type==="hex_socket"?["hex_socket",n.end,n.across_flats,n.depth]:[n.type]}function Y1(n,t){let e=um(n),i=um(t);if(e[0]!==i[0])return!1;for(let s=1;s<i.length;s++)if(typeof i[s]=="number"){if(!fn(e[s],i[s],.03,.1))return!1}else if(e[s]!==i[s])return!1;return!0}function Bu(n,t,e){let i=new Set,s=0;for(let r of n){let o=t.findIndex((a,l)=>!i.has(l)&&e(r,a));o>=0&&(i.add(o),s++)}return s}function Z1(n,t){return n.type!==t.type||n.at!==t.at?!1:n.type==="chamfer"?fn(n.size,t.size,.05,.1):n.type==="fillet"||n.type==="round"?fn(n.radius,t.radius,.05,.1):n.type==="undercut"?fn(n.width,t.width,.1,.3)&&fn(n.depth,t.depth,.1,.2):!0}function J1(n,t){return n.segment===t.segment&&fn(n.offset,t.offset,.03,.3)&&fn(n.width,t.width,.05,.1)&&fn(n.depth,t.depth,.05,.1)}function dm(n){let t=ii(n),e=[];return e.push(["overall",ye(n)]),t.segments.forEach(i=>{e.push(["length",i.x1-i.x0]),i.type==="thread"?e.push(["thread",zu(i.spec)]):i.type==="taper"?e.push(["diameter",i.ds],["diameter",i.de]):e.push(["diameter",i.ds])}),t.transitions.forEach(i=>{i.type==="chamfer"&&e.push(["chamfer",i.size]),(i.type==="fillet"||i.type==="round")&&e.push(["radius",i.radius]),i.type==="undercut"&&e.push(["undercut_w",i.width],["undercut_d",i.depth])}),t.grooves.forEach(i=>e.push(["groove_w",i.width],["groove_dia",2*i.r_floor],["groove_off",i.offset])),t.features.forEach(i=>{i.type==="keyway"&&e.push(["kw_w",i.width],["kw_t",i.depth],["kw_l",i.length],["kw_off",i.offset||0]),i.type==="flat"&&e.push(["flat_d",i.depth],["flat_l",i.length]),i.type==="hex"&&e.push(["hex_af",i.across_flats]),i.type==="cross_hole"&&e.push(["hole_d",i.diameter],["hole_x",i.position]),i.type==="center_hole"&&e.push(["center_d",i.d]),i.type==="hex_socket"&&e.push(["socket_af",i.across_flats],["socket_depth",i.depth])}),t.bore&&t.bore.segments.forEach(i=>e.push(["bore_dia",i.diameter],["bore_len",i.x1-i.x0])),e}function Vu(n,t){let e=n?.segments||[],i=t?.segments||[],s=q1(e,i,X1),r=Lc(s,e.length,i.length),o=Lc(Bu(n?.features||[],t?.features||[],Y1),(n?.features||[]).length,(t?.features||[]).length),a=Lc(Bu(n?.transitions||[],t?.transitions||[],Z1),(n?.transitions||[]).length,(t?.transitions||[]).length),l=Lc(Bu(n?.grooves||[],t?.grooves||[],J1),(n?.grooves||[]).length,(t?.grooves||[]).length),h=dm(t),c=dm(n||{segments:[]}),d=new Set,u=0;for(let[_,S]of h){let w=c.findIndex(([E,v],T)=>!d.has(T)&&(typeof S=="string"?v===S:fn(v,S)));w>=0&&(d.add(w),u++)}let f=h.length?u/h.length:1,m=Oe(n||{}).ok,x=m?na(ea(n),ea(t)):0,p=m?na(ea(n),ea(t),{absolute:!0}):0,g=!!n?.bore==!!t?.bore&&(!t?.bore||(n.bore.segments||[]).length===t.bore.segments.length&&t.bore.segments.every((_,S)=>fn(n.bore.segments[S]?.diameter,_.diameter)&&fn(n.bore.segments[S]?.length,_.length))),M=fn(ye(n||{segments:[]}),ye(t),.005,.06),y=r.f1>=.999&&o.f1>=.999&&a.f1>=.999&&l.f1>=.999&&g&&M&&f>=.999;return{valid:m,segment:r,feature:o,transition:a,groove:l,dim_rate:f,dims_total:h.length,iou:x,iou_abs:p,bore_ok:g,length_ok:M,exact:y}}function j1(n){let t=n>>>0||1;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var we=(n,t)=>t[Math.floor(n()*t.length)],ve=(n,t)=>n()<t,Zt=(n,t)=>Math.round(n/t)*t,K1=(n,t)=>Math.max(0,Math.min(t.length-1,n)),ia=[{id:"stepped_shaft",ko:"\uB2E8\uBD99\uC774 \uCD95",w:22},{id:"keyed_shaft",ko:"\uD0A4\uD648 \uCD95",w:16},{id:"threaded_shaft",ko:"\uB098\uC0AC \uCD95",w:14},{id:"bushing",ko:"\uBD80\uC2DC",w:12},{id:"flanged_bushing",ko:"\uD50C\uB79C\uC9C0 \uBD80\uC2DC",w:8},{id:"pin",ko:"\uD540",w:8},{id:"roller",ko:"\uB864\uB7EC",w:6},{id:"spacer",ko:"\uC2A4\uD398\uC774\uC11C",w:5},{id:"taper_shaft",ko:"\uD14C\uC774\uD37C \uCD95",w:5},{id:"hex_shaft",ko:"\uC721\uAC01 \uB2E8\uBD99\uC774 \uCD95",w:4},{id:"hex_bolt",ko:"\uC721\uAC01 \uBCFC\uD2B8",w:6},{id:"socket_cap_screw",ko:"\uC721\uAC01\uAD6C\uBA4D\uBD99\uC774 \uBCFC\uD2B8",w:5},{id:"set_screw",ko:"\uC138\uD2B8 \uC2A4\uD06C\uB8E8",w:3},{id:"countersunk_screw",ko:"\uC811\uC2DC\uBA38\uB9AC \uB098\uC0AC",w:3},{id:"stud",ko:"\uC2A4\uD130\uB4DC \uBCFC\uD2B8",w:3}],Q1={4:[7,2.8,7,4,3],5:[8,3.5,8.5,5,4],6:[10,4,10,6,5],8:[13,5.3,13,8,6],10:[16,6.4,16,10,8],12:[18,7.5,18,12,10],16:[24,10,24,16,14],20:[30,12.5,30,20,17]},tb=["S45C","S45C","SCM440","SUS304","SUS303","A6061","C3604","SUJ2","SM45C"];function eb(n,t){if(t)return ia.find(s=>s.id===t)||ia[0];let e=ia.reduce((s,r)=>s+r.w,0),i=n()*e;for(let s of ia)if(i-=s.w,i<=0)return s;return ia[0]}function nb(n){return Fs.reduce((t,e)=>Math.abs(e-n)<Math.abs(t-n)?e:t)}function Wn(n,t,e,i=1){let s=Fs.indexOf(nb(t));return Fs[K1(s+e*i,Fs)]}function Hu(n,t,e){let i=e==="short"?.3+n()*.5:e==="long"?1.5+n()*2.5:.6+n()*1.6,s=t*i;return s<12?Math.max(3,Zt(s,1)):Zt(s,5)}function us(n){return n<=10?.5:n<=25?1:n<=50?1.5:2}function Gu(n,t){let e=[6,8,10,12,14,16,18,20,22,24,27,30,36].reduce((r,o)=>Math.abs(o-t)<Math.abs(r-t)?o:r),s=Au[e]&&ve(n,.45)?we(n,Au[e]):Ii[e];return{nominal:e,pitch:s,spec:Yo(e,s)}}function ib(n,t){let e=n[t-1].type==="taper"?n[t-1].d_end:n[t-1].diameter;return(n[t].type==="taper"?n[t].d_start:n[t].diameter)-e}function pm(n=1,t={}){let e=j1(n),i=eb(e,t.archetype),s=t.material||we(e,tb),r={dsl:zr,id:`${i.id.replace(/_/g,"-")}-${n}`,name:i.id.replace(/_/g," "),name_ko:i.ko,part_class:"shaft",units:"mm",material:s,drawing:{number:`VR-RB-${String(n%1e4).padStart(4,"0")}`,scale:"1:1",projection:"third"},segments:[],transitions:[],grooves:[],bore:null,features:[],meta:{source:"synthetic",generator:"shaft-sampler/1.0",seed:n}},o=r.segments,a=r.transitions,l=r.features,h=r.grooves,c=we(e,Fs.filter(f=>f>=10&&f<=60));if(i.id==="stepped_shaft"||i.id==="keyed_shaft"||i.id==="threaded_shaft"){r.part_class="shaft";let f=2+Math.floor(e()*4),m=Math.floor(f/2),x=[];for(let p=0;p<f;p++)x.push(Wn(e,c,-1,Math.abs(p-m)+(p>m?1:0)));for(let p=1;p<f;p++)x[p]===x[p-1]&&(x[p]=Wn(e,x[p],p<m?1:-1,1));for(let p=0;p<f;p++){let g=x[p],M={type:"cyl",length:Hu(e,g,p===m?"long":"mid"),diameter:g};ve(e,.5)&&(M.tolerance=we(e,Xp.slice(0,6))),ve(e,.3)&&(M.roughness=we(e,qp)),p!==m&&ve(e,.5)&&(M.label=we(e,["\uBCA0\uC5B4\uB9C1 \uC790\uB9AC","\uAE30\uC5B4 \uC790\uB9AC","\uCEE4\uD50C\uB9C1 \uC790\uB9AC","\uD480\uB9AC \uC790\uB9AC"])),o.push(M)}if(i.id==="threaded_shaft"||ve(e,.25)){let p=ve(e,.5)?"left":"right",g=p==="left"?0:o.length-1,M=Gu(e,o[g].diameter),y=Cu(M.nominal,M.pitch);o[g]={type:"thread",length:Math.max(Zt(M.nominal*(.8+e()),1),3*M.pitch+2),diameter:M.nominal,spec:M.spec,pitch:M.pitch};let _=p==="left"?1:o.length-2;o[_]&&o[_].diameter<=M.nominal&&(o[_].diameter=Wn(e,M.nominal,1,1));let S=p==="left"?1:o.length-1;ve(e,.7)&&a.push({at:S,type:"undercut",width:y.width,depth:y.depth,standard:"DIN 76-A"}),a.push({at:p==="left"?0:o.length,type:"chamfer",size:Math.max(.5,Zt(M.pitch,.5))})}for(let p of[0,o.length])a.some(g=>g.at===p)||a.push({at:p,type:"chamfer",size:us(p===0?o[0].diameter||20:o[o.length-1].diameter||20)});for(let p=1;p<o.length;p++){let g=ib(o,p);if(Math.abs(g)<1e-9)continue;let M=Math.min(o[p-1].diameter??o[p-1].d_end,o[p].diameter??o[p].d_start),y=Math.abs(g)/2;if(ve(e,.6)&&y>1.2&&!a.some(S=>S.at===p))a.push({at:p,type:"fillet",radius:Math.min(Zt(y*.4,.5)||.5,2.5)});else if(y>1.2&&ve(e,.35)&&!a.some(S=>S.at===p)){let S=Wp(M);a.push({at:p,type:"undercut",width:S.width,depth:S.depth,standard:"DIN 509-E"})}ve(e,.35)&&y>1.6&&a.push({at:p,type:"chamfer",size:Math.min(us(Math.max(o[p-1].diameter??0,o[p].diameter??0)),Zt(y*.4,.5)||.5)})}if(i.id==="keyed_shaft"||ve(e,.35)){let p=o.map((g,M)=>({s:g,i:M})).filter(({s:g})=>g.type==="cyl"&&g.diameter>=10&&g.length>=g.diameter*.8);if(p.length){let{s:g,i:M}=we(e,p),y=Os(g.diameter);if(y){let _=Math.max(y.width*1.5,Zt(g.length*(.45+e()*.35),1)),S=Zt((g.length-_)*(.2+e()*.6),1);l.push({type:"keyway",segment:M,offset:S,length:_,width:y.width,depth:y.depth,kind:"parallel",standard:`DIN 6885 ${y.width}\xD7${y.key_h}`}),g.label=g.label||we(e,["\uAE30\uC5B4 \uC790\uB9AC","\uCEE4\uD50C\uB9C1 \uC790\uB9AC","\uD480\uB9AC \uC790\uB9AC"])}}}if(ve(e,.5)){let p=o.map((g,M)=>({s:g,i:M})).filter(({s:g})=>g.type==="cyl"&&g.length>=12&&!l.some(M=>M.segment===void 0));if(p.length){let{s:g,i:M}=we(e,p),y=Br(g.diameter),_=Zt(Math.min(g.length-y.width-1,2+e()*(g.length*.4)),.5);_>=1&&h.push({segment:M,offset:_,width:y.width,depth:(g.diameter-y.groove_d)/2,kind:"snap_ring",standard:`DIN 471 ${sb(y.groove_d)}\xD7${y.width}`})}}if(ve(e,.25)){let p=o.map((g,M)=>({s:g,i:M})).filter(({s:g})=>g.type==="cyl"&&g.diameter>=12&&g.length>=12);if(p.length){let{s:g,i:M}=we(e,p),y=0;for(let S=0;S<M;S++)y+=o[S].length;let _=we(e,[2,2.5,3,4,5,6].filter(S=>S<=g.diameter/3));_&&l.push({type:"cross_hole",position:Zt(y+g.length*(.3+e()*.4),1),diameter:_,through:!0,angle:ve(e,.6)?0:90})}}if(ve(e,.6))for(let p of["left","right"]){let M=(p==="left"?o[0]:o[o.length-1]).diameter||20;if(M<8)continue;let y=Ec(M);l.push({type:"center_hole",end:p,form:"A",d:y.d,standard:`DIN 332-A${y.d}`})}}else if(i.id==="taper_shaft"){r.part_class="shaft";let f=c;o.push({type:"cyl",length:Hu(e,f,"mid"),diameter:f,tolerance:we(e,["h6","k6","js6"])});let m=Wn(e,f,-1,1);o.push({type:"taper",length:Zt(f*(1.2+e()),5),d_start:f,d_end:m,label:"\uD14C\uC774\uD37C 1:10 \uADFC\uC0AC"});let x=Gu(e,Wn(e,m,-1,1));if(o.push({type:"thread",length:Zt(x.nominal*1.2,1),diameter:x.nominal,spec:x.spec,pitch:x.pitch}),a.push({at:0,type:"chamfer",size:us(f)},{at:3,type:"chamfer",size:Math.max(.5,Zt(x.pitch,.5))}),ve(e,.6)){let M=Cu(x.nominal,x.pitch);a.push({at:2,type:"undercut",width:M.width,depth:M.depth,standard:"DIN 76-A"})}let p=Os(f);p&&ve(e,.6)&&l.push({type:"keyway",segment:0,offset:Zt(o[0].length*.25,1),length:Zt(o[0].length*.5,1),width:p.width,depth:p.depth,kind:"parallel"});let g=Ec(f);l.push({type:"center_hole",end:"left",form:"A",d:g.d})}else if(i.id==="hex_shaft"){r.part_class="shaft";let f=we(e,[14,16,18,20,22,25]),m={14:12,16:13,18:15,20:17,22:19,25:22}[f];o.push({type:"cyl",length:Zt(f*(.8+e()*.6),1),diameter:f});let x=Wn(e,f,-1,2);o.push({type:"cyl",length:Hu(e,x,"long"),diameter:x,tolerance:we(e,["h6","h7"])});let p=Gu(e,Wn(e,x,-1,1));o.push({type:"thread",length:Zt(p.nominal*(1+e()*.5),1),diameter:p.nominal,spec:p.spec,pitch:p.pitch}),a.push({at:0,type:"chamfer",size:us(f)},{at:1,type:"fillet",radius:1},{at:3,type:"chamfer",size:Math.max(.5,Zt(p.pitch,.5))}),l.push({type:"hex",segment:0,across_flats:m}),ve(e,.6)&&l.push({type:"flat",segment:1,offset:Zt(o[1].length*.2,1),length:Zt(o[1].length*.5,1),depth:Zt(x*.12,.5)||.5,count:ve(e,.4)?2:1})}else if(i.id==="bushing"||i.id==="flanged_bushing"||i.id==="spacer"){r.part_class=i.id==="spacer"?"spacer":"bushing";let f=we(e,Fs.filter(p=>p>=8&&p<=50)),m=Wn(e,f,1,2+Math.floor(e()*2)),x=i.id==="spacer"?Zt(m*(.2+e()*.4),1):Zt(m*(.8+e()*.8),1);if(i.id==="flanged_bushing"){let p=Wn(e,m,1,2),g=Math.max(3,Zt(x*.2,1));o.push({type:"cyl",length:g,diameter:p},{type:"cyl",length:x-g,diameter:m,tolerance:we(e,["h6","m6","n6"])}),a.push({at:1,type:"chamfer",size:.5})}else o.push({type:"cyl",length:x,diameter:m,tolerance:we(e,["h6","m6","n6","h7"])});if(a.push({at:0,type:"chamfer",size:us(m)*.5||.5},{at:o.length,type:"chamfer",size:us(m)*.5||.5}),r.bore={through:!0,segments:[{length:x,diameter:f,tolerance:we(e,["H7","H8","F7"])}],chamfer_left:.5,chamfer_right:.5},i.id==="bushing"&&ve(e,.35)){let p=Wn(e,f,1,1);if(p<m-3){let g=Zt(x*.35,1);r.bore.segments=[{length:g,diameter:p,tolerance:"H7"},{length:x-g,diameter:f,tolerance:"H7"}]}}if(i.id!=="spacer"&&ve(e,.35)){let p=Br(m);h.push({segment:o.length-1,offset:Zt(2+e()*3,.5),width:p.width,depth:(m-p.groove_d)/2,kind:"snap_ring"})}if(ve(e,.3)){let p=o.length-1,g=0;for(let M=0;M<p;M++)g+=o[M].length;l.push({type:"cross_hole",position:Zt(g+o[p].length/2,1),diameter:we(e,[2,2.5,3]),through:!1,depth:(m-f)/2+1,angle:90})}r.material=i.id==="spacer"?we(e,["S45C","SUS304","A6061"]):we(e,["C3604","PBC2","SUJ2","SUS304","S45C"])}else if(i.id==="pin"){r.part_class="pin";let f=we(e,[4,5,6,8,10,12,14,16,20]),m=Zt(f*(2.5+e()*4),1);if(ve(e,.6)){let x=Wn(e,f,1,1),p=Math.max(2,Zt(f*.35,.5));o.push({type:"cyl",length:p,diameter:x},{type:"cyl",length:m,diameter:f,tolerance:"h11"}),a.push({at:0,type:"chamfer",size:.5},{at:2,type:"chamfer",size:Math.max(.5,Zt(f*.1,.5))});let g=f>=6?we(e,[1.6,2,2.5,3.2].filter(M=>M<=f/3)):null;g&&l.push({type:"cross_hole",position:Zt(p+m-f*.6,.5),diameter:g,through:!0,angle:0})}else{o.push({type:"cyl",length:m,diameter:f,tolerance:we(e,["h8","m6","h11"])}),a.push({at:0,type:ve(e,.5)?"round":"chamfer",size:Math.max(.5,Zt(f*.12,.5)),radius:Math.max(.5,Zt(f*.15,.5))}),a.push({at:1,type:"chamfer",size:Math.max(.5,Zt(f*.12,.5))});for(let x of a)x.type==="round"?delete x.size:delete x.radius}r.material=we(e,["S45C","SUS303","SCM435"])}else if(["hex_bolt","socket_cap_screw","set_screw","countersunk_screw","stud"].includes(i.id)){r.part_class="other";let f=we(e,[4,5,6,8,10,12,16,20]),[m,x,p,g,M]=Q1[f],y=Ii[f],_=Zt(f*(2.5+e()*5),5),S=Yo(f,y);if(i.id==="hex_bolt"){let w=+(m/Math.cos(Math.PI/6)).toFixed(2),E=_>3*f&&ve(e,.6)?Zt(_-Math.min(_*.6,2*f+6),1):0;o.push({type:"cyl",length:x,diameter:w,label:"\uC721\uAC01 \uBA38\uB9AC"}),E>0&&o.push({type:"cyl",length:E,diameter:f}),o.push({type:"thread",length:_-E,diameter:f,spec:S,pitch:y}),l.push({type:"hex",segment:0,across_flats:m}),a.push({at:0,type:"chamfer",size:Math.max(.5,Zt(x*.15,.5)),angle:30},{at:o.length,type:"chamfer",size:Math.max(.5,Zt(y,.5))}),a.push({at:1,type:"fillet",radius:Math.max(.5,Zt(f*.06,.5))})}else if(i.id==="socket_cap_screw"){let w=_>3*f&&ve(e,.5)?Zt(_-Math.min(_*.6,2*f+6),1):0;o.push({type:"cyl",length:g,diameter:p,label:"\uC6D0\uD1B5 \uBA38\uB9AC"}),w>0&&o.push({type:"cyl",length:w,diameter:f}),o.push({type:"thread",length:_-w,diameter:f,spec:S,pitch:y}),l.push({type:"hex_socket",end:"left",across_flats:M,depth:+(g*.55).toFixed(1)}),a.push({at:0,type:"chamfer",size:Math.max(.5,Zt(p*.05,.5))},{at:o.length,type:"chamfer",size:Math.max(.5,Zt(y,.5))}),a.push({at:1,type:"fillet",radius:Math.max(.5,Zt(f*.06,.5))})}else if(i.id==="set_screw"){let w=Zt(f*(1+e()*2.5),1);o.push({type:"thread",length:w,diameter:f,spec:S,pitch:y}),l.push({type:"hex_socket",end:"left",across_flats:Math.max(1.5,M-2),depth:+Math.min(w*.4,f*.6).toFixed(1)}),a.push({at:0,type:"chamfer",size:Math.max(.3,Zt(y*.5,.1))},{at:1,type:"chamfer",size:Math.max(.5,Zt(y,.5))})}else if(i.id==="countersunk_screw"){let w=+(1.9*f).toFixed(1),E=+(.55*f).toFixed(1);o.push({type:"taper",length:E,d_start:w,d_end:f,label:"\uC811\uC2DC \uBA38\uB9AC"}),o.push({type:"thread",length:_,diameter:f,spec:S,pitch:y}),l.push({type:"hex_socket",end:"left",across_flats:Math.max(2,M-1),depth:+(E*.6).toFixed(1)}),a.push({at:2,type:"chamfer",size:Math.max(.5,Zt(y,.5))})}else{let w=Zt(f*1.25,1),E=Zt(f*1.5+4,1),v=Math.max(6,_-w-E);o.push({type:"thread",length:w,diameter:f,spec:S,pitch:y,label:"\uC2DD\uC785\uCE21"},{type:"cyl",length:v,diameter:f},{type:"thread",length:E,diameter:f,spec:S,pitch:y,label:"\uB108\uD2B8\uCE21"}),a.push({at:0,type:"chamfer",size:Math.max(.5,Zt(y,.5))},{at:3,type:"chamfer",size:Math.max(.5,Zt(y,.5))})}r.material=we(e,["SCM435","S45C","SUS304","SWCH10R"])}else if(i.id==="roller"){r.part_class="roller";let f=we(e,[30,35,40,45,50,60]),m=Wn(e,f,-1,3),x=Zt(f*(1+e()*1.5),5),p=Zt(m*(.8+e()*.6),1);if(o.push({type:"cyl",length:p,diameter:m,tolerance:"h6",label:"\uBCA0\uC5B4\uB9C1 \uC790\uB9AC"},{type:"cyl",length:x,diameter:f,roughness:"Ra 0.8"},{type:"cyl",length:p,diameter:m,tolerance:"h6",label:"\uBCA0\uC5B4\uB9C1 \uC790\uB9AC"}),a.push({at:0,type:"chamfer",size:us(m)},{at:3,type:"chamfer",size:us(m)},{at:1,type:"fillet",radius:1.5},{at:2,type:"fillet",radius:1.5}),ve(e,.5)&&a.push({at:1,type:"chamfer",size:1},{at:2,type:"chamfer",size:1}),ve(e,.6)){let g=Br(m);h.push({segment:0,offset:Zt(p*.35,.5),width:g.width,depth:(m-g.groove_d)/2,kind:"snap_ring"},{segment:2,offset:Zt(p*.65-g.width,.5),width:g.width,depth:(m-g.groove_d)/2,kind:"snap_ring"})}if(ve(e,.5)){let g=Ec(m);l.push({type:"center_hole",end:"left",form:"A",d:g.d},{type:"center_hole",end:"right",form:"A",d:g.d})}}if(!Oe(r).ok){for(let f of["features","grooves","transitions"])for(let m=r[f].length-1;m>=0&&!Oe(r).ok;m--){let x=r[f].splice(m,1);if(Oe(r).ok)break;Oe(r).ok&&r[f].splice(m,0,...x)}Oe(r).ok||(r.transitions=[],r.grooves=[],r.features=[])}let u=Oe(r);return r.meta.valid=u.ok,r.meta.archetype=i.id,r}function sb(n){return`\u2300${Math.round(n*100)/100}`}var mm={3:[5.5,2.4],4:[7,3.2],5:[8,4.7],6:[10,5.2],8:[13,6.8],10:[16,8.4],12:[18,10.8],14:[21,12.8],16:[24,14.8],18:[27,15.8],20:[30,18],22:[34,19.4],24:[36,21.5],27:[41,23.8],30:[46,25.6]},gm={8:[22,7],10:[26,8],12:[28,8],15:[32,9],17:[35,10],20:[42,12],25:[52,15],30:[62,16],35:[72,17],40:[80,18],45:[85,19],50:[90,20],55:[100,21],60:[110,22]},xm=(n,t)=>t.reduce((e,i)=>Math.abs(i-n)<Math.abs(e-n)?i:e),_m=/^(h5|h6|j5|j6|js5|js6|k5|k6|m5|m6)$/i;function ym(n){let t=ii(n),e=ye(n),i=ni(n),s=ks(n),r=[],o=[],a=y=>r.push({axis:[1,0,0],...y}),l=[],h=.55,c=t.centerHoles||[];c.length>=2?(l.push("\uC591 \uB05D \uC13C\uD130\uAD6C\uBA4D(DIN 332). \uC13C\uD130 \uC0AC\uC774\uC5D0\uC11C \uC120\uC0AD\xB7\uC5F0\uC0AD\uB418\uB294 \uD68C\uC804 \uBD80\uD488"),h=.95):c.length===1&&(l.push("\uC13C\uD130\uAD6C\uBA4D 1\uAC1C. \uC120\uC0AD \uAE30\uC900(\uD68C\uC804 \uAC00\uACF5)"),h=.8);let d=y=>Sn(n,(y.x0+y.x1)/2)>0,u=["bushing","sleeve","spacer","flange"].includes(n.part_class),f=y=>/베어링|bearing/i.test(y.label||""),m=t.segments.filter(y=>f(y)||y.tolerance&&_m.test(y.tolerance)&&!d(y)&&!u),x=t.segments.filter(y=>y.tolerance&&_m.test(y.tolerance)&&(d(y)||u)&&!f(y));m.length&&(l.push(`\uBCA0\uC5B4\uB9C1 \uC790\uB9AC ${m.length}\uACF3(${m.map(y=>y.tolerance||y.label).join(", ")}). \uD68C\uC804 \uC9C0\uC9C0`),h=Math.max(h,.9)),(n.features||[]).some(y=>y.type==="keyway")&&(l.push("\uD0A4\uD648. \uD1A0\uD06C \uC804\uB2EC(\uD68C\uC804)"),h=Math.max(h,.85)),u&&n.bore&&(l.push("\uC18D\uC774 \uBE48 \uBD80\uC2DC\xB7\uC2AC\uB9AC\uBE0C. \uBD80\uD488 \uC790\uCCB4\uBCF4\uB2E4 \uC548\uC5D0 \uB4E0 \uC0C1\uB300 \uCD95\uC774 \uC774 \uCD95\uC120\uC5D0\uC11C \uD68C\uC804\uD55C\uB2E4"),h=Math.max(h,.7)),l.length||l.push("\uD68C\uC804\uCCB4 \uD615\uC0C1 \uC790\uCCB4(\uCD95 \uB300\uCE6D). \uC790\uC804\uCD95\uC740 \uCD95\uC120\uACFC \uC77C\uCE58"),a({kind:"spin",x:0,x1:e,part:null,dir:[1,0,0],motion:{type:"spin",dir:[1,0,0]},params:{length:e,max_diameter:i},evidence:l,confidence:h,approx:!1});for(let y of m){let _=Math.min(y.ds,y.de),S=xm(_,Object.keys(gm).map(Number)),[w,E]=gm[S],v=Math.abs(S-_)<.51;a({kind:"bearing",x:y.x0,x1:y.x1,part:"bearing",params:{bore:_,outer:v?w:+(_*2.1).toFixed(1),width:Math.min(v?E:Math.max(6,_*.55),y.x1-y.x0),seat_length:y.x1-y.x0},motion:{type:"axial",dir:[y.x0<e/2?-1:1,0,0],distance:Math.max(y.x1-y.x0,12)+6},evidence:[`\uC138\uADF8\uBA3C\uD2B8 \u2300${_}${y.tolerance?` ${y.tolerance}`:""}${y.label?` "${y.label}"`:""}. \uAD6C\uB984 \uBCA0\uC5B4\uB9C1 \uB0B4\uB95C \uB07C\uC6CC\uB9DE\uCDA4`,v?`d=${S} \uACC4\uC5F4(6000/6200) \uADFC\uC0AC: \uC678\uACBD \u2300${w} \uD3ED ${E}`:"\uD45C\uC900 \uACC4\uC5F4\uC5D0 \uC5C6\uB294 \uCD95\uACBD. \uC678\uACBD\xB7\uD3ED\uC740 \uBE44\uB840 \uADFC\uC0AC"],confidence:y.tolerance&&/베어링|bearing/i.test(y.label||"")?.9:y.tolerance?.75:.6,approx:!0})}for(let y of x){let _=Math.max(y.ds,y.de);a({kind:"fit",x:y.x0,x1:y.x1,part:"housing",params:{outer:_,tolerance:y.tolerance,seat_length:y.x1-y.x0,housing_outer:+(_*1.7).toFixed(1)},motion:{type:"axial",dir:[y.x0<e/2?-1:1,0,0],distance:y.x1-y.x0+14},evidence:[`\uC678\uACBD \u2300${_} ${y.tolerance}. \uD558\uC6B0\uC9D5 \uAD6C\uBA4D(H7)\uC5D0 \uC555\uC785\uB418\uB294 \uB07C\uC6CC\uB9DE\uCDA4`,/^(m|n|k)/i.test(y.tolerance)?"\uC911\uAC04~\uC5B5\uC9C0 \uB07C\uC6C0: \uC555\uC785 \uD6C4 \uD68C\uC804\uD558\uC9C0 \uC54A\uB294\uB2E4(\uC0C1\uB300 \uCD95\uC774 \uC548\uC5D0\uC11C \uB3C8\uB2E4)":"\uD5D0\uAC70\uC6B4 \uB07C\uC6C0: \uC190\uC73C\uB85C \uBC00\uC5B4 \uB123\uC744 \uC218 \uC788\uB2E4"],confidence:.8,approx:!0})}if((t.grooves||[]).forEach((y,_)=>{let S=y.kind==="snap_ring"||/471/.test(y.standard||""),w=2*y.r_top,E=2*y.r_floor;if(!S&&!(y.width<=3&&w-E<=4))return;let v=Br(Math.round(w));a({kind:"snap",x:y.x0,x1:y.x1,part:"retaining_ring",params:{shaft_d:w,groove_d:E,width:y.width,ring_thickness:Math.min(y.width*.85,y.width-.05),ring_outer:+(w+(w<20?4:w<50?6:9)).toFixed(1)},motion:{type:"radial",dir:[0,1,0],distance:w*.9,snap:!0},evidence:[`\uD648 \u2300${E}\xD7${y.width}${y.standard?` (${y.standard})`:""}. \uCD95\uC6A9 \uBA48\uCDA4\uB9C1(\uC2A4\uB0C5\uB9C1) \uC790\uB9AC`,`\uCD95\uACBD \u2300${w} \uD45C\uC900 \uD648: \u2300${v.groove_d}\xD7${v.width}${v.approx?" (\uD45C \uBC16\xB7\uADFC\uC0AC)":""}`,"\uB9C1\uC744 \uBC8C\uB824 \uBC18\uACBD \uBC29\uD5A5\uC73C\uB85C \uB07C\uC6B0\uACE0, \uCD95\uBC29\uD5A5 \uC704\uCE58\uB97C \uACE0\uC815\uD55C\uB2E4"],confidence:S?.92:.6,approx:!0})}),(t.features||[]).filter(y=>y.type==="keyway").forEach(y=>{let _=y.D,S=Os(_),w=t.segments[y.segment];a({kind:"key",x:y.x0,x1:y.x1,part:"key",params:{width:y.width,depth:y.depth,length:y.length,shaft_d:_,key_height:S?S.key_h:+(y.width*.9).toFixed(1),hub_bore:_,hub_outer:+(_*1.9).toFixed(1),hub_width:Math.min(y.length+4,w.x1-w.x0)},motion:{type:"radial",dir:[0,1,0],distance:(S?S.key_h:y.width)*1.6,follow_axial:{dir:[y.x1>e/2?1:-1,0,0],distance:Math.max(y.length+10,_)}},evidence:[`\uD0A4\uD648 ${y.width}\xD7${y.depth} L${y.length}${y.standard?` (${y.standard})`:""}. \uD3C9\uD589\uD0A4\uB85C \uD1A0\uD06C \uC804\uB2EC`,S?`DIN 6885: \uD0A4 ${S.width}\xD7${S.key_h}, \uCD95 \uD648 \uAE4A\uC774 t1=${S.depth}`:"\uD45C \uBC16 \uCD95\uACBD. \uD0A4 \uB192\uC774\uB294 \uD3ED\uC5D0\uC11C \uADFC\uC0AC","\uD5C8\uBE0C(\uAE30\uC5B4\xB7\uD480\uB9AC\xB7\uCEE4\uD50C\uB9C1)\uAC00 \uCD95\uBC29\uD5A5\uC73C\uB85C \uB07C\uC6CC\uC9C0\uACE0 \uD0A4\uAC00 \uD68C\uC804\uC744 \uAD6C\uC18D\uD55C\uB2E4"],confidence:.9,approx:!0})}),(t.threads||[]).forEach(y=>{let _=$n(y.spec)||{nominal:2*y.r_major,pitch:y.pitch},S=Math.round(_.nominal),w=xm(S,Object.keys(mm).map(Number)),[E,v]=mm[w],T=y.x0<1e-6||y.x1>e-1e-6;a({kind:"screw",x:y.x0,x1:y.x1,part:T?"nut":null,params:{spec:y.spec,nominal:_.nominal,pitch:y.pitch||_.pitch||1,thread_length:y.x1-y.x0,nut_across_flats:E,nut_height:v,hand:"right"},motion:{type:"screw",dir:[y.x0<e/2?-1:1,0,0],pitch:y.pitch||_.pitch||1,distance:Math.min(y.x1-y.x0,v*2+4)},evidence:[`\uB098\uC0AC ${y.spec}. \uC0C1\uB300 \uC554\uB098\uC0AC(\uB108\uD2B8\xB7\uD0ED \uAD6C\uBA4D)\uC640 \uCCB4\uACB0`,`ISO 4032 \uB108\uD2B8 \uADFC\uC0AC: \uB300\uBCC0 ${E}, \uB192\uC774 ${v}`,`1\uD68C\uC804\uB2F9 ${y.pitch||_.pitch||1}mm \uC804\uC9C4(\uC624\uB978\uB098\uC0AC)`],confidence:.95,approx:!0})}),(t.features||[]).filter(y=>y.type==="cross_hole").forEach(y=>{let _=_n(n,y.position);a({kind:"pin",x:y.x0,x1:y.x1,part:"pin",params:{diameter:y.diameter,position:y.position,through:y.through!==!1,depth:y.through===!1?y.depth:_,angle:y.angle||0,pin_length:(y.through!==!1?_:y.depth||_)+(y.through!==!1?8:4)},motion:{type:"radial",dir:[0,Math.sin((y.angle||0)*Math.PI/180),Math.cos((y.angle||0)*Math.PI/180)],distance:_*1.2},evidence:[`\u2300${y.diameter} ${y.through!==!1?"\uAD00\uD1B5":`\uAE4A\uC774 ${y.depth}`} \uD6A1\uAD6C\uBA4D (x=${y.position}). \uBD84\uD560\uD540\xB7\uC2A4\uD504\uB9C1\uD540\xB7\uD3C9\uD589\uD540 \uC790\uB9AC`,y.through!==!1?"\uAD00\uD1B5\uD540: \uBC18\uACBD \uBC29\uD5A5\uC73C\uB85C \uB123\uACE0 \uBC18\uB300\uD3B8\uC73C\uB85C \uBE60\uC9C4\uB2E4":"\uB9C9\uD78C \uAD6C\uBA4D: \uC138\uD2B8 \uC2A4\uD06C\uB8E8\xB7\uC704\uCE58 \uACB0\uC815 \uD540"],confidence:.85,approx:!0})}),(t.features||[]).filter(y=>["hex","flat","hex_socket"].includes(y.type)).forEach(y=>{if(y.type==="hex_socket"){a({kind:"wrench",x:y.x0,x1:y.x1,part:"hex_key",params:{across_flats:y.across_flats,depth:y.depth,end:y.end},motion:{type:"screw",dir:[y.end==="left"?-1:1,0,0],pitch:t.threads[0]?.pitch||1,distance:y.depth+8},evidence:[`\uB05D\uBA74 \uC721\uAC01 \uC18C\uCF13 S${y.across_flats} \uAE4A\uC774 ${y.depth}. \uC721\uAC01 \uB80C\uCE58\uB85C \uC870\uC778\uB2E4`,"\uB80C\uCE58\uB97C \uCD95\uBC29\uD5A5\uC73C\uB85C \uB123\uACE0 \uB3CC\uB9AC\uBA74 \uB098\uC0AC\uBD80\uAC00 \uC0C1\uB300 \uC554\uB098\uC0AC\uC5D0 \uCCB4\uACB0\uB41C\uB2E4"],confidence:.9,approx:!0});return}let _=y.type==="hex";a({kind:"wrench",x:y.x0,x1:y.x1,part:_?"wrench":null,params:_?{across_flats:y.across_flats}:{depth:y.depth,length:y.length,count:y.count||1,shaft_d:y.D},motion:{type:"radial",dir:[0,1,0],distance:(_?y.across_flats:y.D)*1.4},evidence:_?[`\uC721\uAC01 \uB300\uBCC0 ${y.across_flats}. \uC2A4\uD328\uB108\uB85C \uC7A1\uC544 \uB3CC\uB9AC\uB294 \uBA74`,"\uC870\uB9BD \uC2DC \uD68C\uC804\uC744 \uB9C9\uAC70\uB098 \uC870\uC774\uB294 \uB370 \uC4F4\uB2E4"]:[`\uD3C9\uBA74(D\uCEF7) \uAE4A\uC774 ${y.depth}${(y.count||1)===2?" \xD72":""}. \uC138\uD2B8 \uC2A4\uD06C\uB8E8\uAC00 \uB20C\uB7EC \uD68C\uC804\uC744 \uAD6C\uC18D\uD558\uAC70\uB098 \uC2A4\uD328\uB108 \uC790\uB9AC`],confidence:_?.9:.7,approx:!!_})}),t.bore){let y=t.bore.segments[0],_=t.bore.segments.find(S=>S.tolerance)?.tolerance;a({kind:"fit",x:t.bore.segments[0].x0,x1:t.bore.segments[t.bore.segments.length-1].x1,part:"mating_shaft",params:{bore:y.diameter,tolerance:_||null,through:t.bore.through,length:t.bore.segments.reduce((S,w)=>S+(w.x1-w.x0),0)},motion:{type:"axial",dir:[-1,0,0],distance:e+10},evidence:[`\uBCF4\uC5B4 \u2300${y.diameter}${_?` ${_}`:""}${t.bore.through?" \uAD00\uD1B5":" \uB9C9\uD798"}. \uC0C1\uB300 \uCD95\uC774 \uB4E4\uC5B4\uAC00\uB294 \uB07C\uC6CC\uB9DE\uCDA4`,_&&/^H[6-8]$/i.test(_)?`${_} \uD5D0\uAC70\uC6B4/\uC911\uAC04 \uB07C\uC6CC\uB9DE\uCDA4. \uCD95\uBC29\uD5A5\uC73C\uB85C \uBC00\uC5B4 \uB123\uACE0 \uBE84 \uC218 \uC788\uB2E4`:"\uACF5\uCC28 \uD45C\uAE30 \uC5C6\uC74C. \uB07C\uC6CC\uB9DE\uCDA4 \uB4F1\uAE09 \uBBF8\uC0C1"],confidence:_?.85:.7,approx:!0})}t.segments.filter(y=>y.type==="taper").forEach(y=>{Math.atan2(Math.abs(y.ds-y.de)/2,y.x1-y.x0)*180/Math.PI>20||a({kind:"fit",x:y.x0,x1:y.x1,part:"taper_hub",params:{d_start:y.ds,d_end:y.de,length:y.x1-y.x0,taper_ratio:+(Math.abs(y.ds-y.de)/(y.x1-y.x0)).toFixed(3),hub_outer:+(Math.max(y.ds,y.de)*1.8).toFixed(1)},motion:{type:"axial",dir:[y.de<y.ds?1:-1,0,0],distance:y.x1-y.x0+12},evidence:[`\uD14C\uC774\uD37C \u2300${y.ds}\u2192\u2300${y.de} (\uAE30\uC6B8\uAE30 1:${(1/(Math.abs(y.ds-y.de)/(y.x1-y.x0))).toFixed(1)}). \uD14C\uC774\uD37C \uD5C8\uBE0C \uC555\uC785/\uC5B5\uC9C0 \uB07C\uC6C0`,"\uC791\uC740 \uCABD\uC5D0\uC11C \uB07C\uC6CC \uCD95\uBC29\uD5A5\uC73C\uB85C \uC870\uC774\uBA74 \uB9C8\uCC30\uB85C \uD1A0\uD06C\uB97C \uC804\uB2EC\uD55C\uB2E4"],confidence:.75,approx:!0})});let p={snap:0,pin:1,screw:2,wrench:2,bearing:3,fit:3,key:4,spin:9},g=r.filter(y=>y.part).map((y,_)=>({i:_,m:y})).sort((y,_)=>p[y.m.kind]-p[_.m.kind]||Math.min(y.m.x,e-y.m.x1)-Math.min(_.m.x,e-_.m.x1)).map(({i:y,m:_},S)=>({step:S+1,mate:y,kind:_.kind,part:_.part,text:rb(_,e)})),M=r.some(y=>y.kind==="bearing")||h>=.85;return r.some(y=>y.part)||o.push("\uB3C4\uBA74\uC5D0\uC11C \uC0C1\uB300 \uBD80\uD488\uACFC \uACB0\uD569\uD558\uB294 \uD45C\uAE30(\uBA48\uCDA4\uB9C1 \uD648\xB7\uD0A4\uD648\xB7\uB098\uC0AC\xB7\uBCF4\uC5B4\xB7\uD6A1\uAD6C\uBA4D)\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uB2E8\uD488 \uD68C\uC804\uB9CC \uBCF4\uC5EC \uC90D\uB2C8\uB2E4."),{axis:[1,0,0],length:e,rotating:M,spin_confidence:h,mates:r,order:g,notes:o}}function rb(n,t){let e=n.x<t/2?"\uC67C\uCABD":"\uC624\uB978\uCABD";switch(n.kind){case"snap":return`\uBA48\uCDA4\uB9C1\uC744 \uBC8C\uB824 \uBC18\uACBD \uBC29\uD5A5\uC73C\uB85C \uBE7C\uB0B8\uB2E4 (x=${n.x.toFixed(1)})`;case"pin":return`\uD540\uC744 \uBC18\uACBD \uBC29\uD5A5\uC73C\uB85C \uBF51\uB294\uB2E4 (x=${n.params.position})`;case"screw":return`\uB108\uD2B8\uB97C \uD480\uC5B4 ${e} \uB05D\uC73C\uB85C \uBE7C\uB0B8\uB2E4 (${n.params.spec}, 1\uD68C\uC804 ${n.params.pitch}mm)`;case"wrench":return n.part==="hex_key"?`\uC721\uAC01 \uB80C\uCE58\uB97C ${e} \uB05D\uBA74\uC5D0\uC11C \uBE80\uB2E4`:`\uC2A4\uD328\uB108\uB97C \uB193\uB294\uB2E4 (\uB300\uBCC0 ${n.params.across_flats})`;case"bearing":return`\uBCA0\uC5B4\uB9C1\uC744 ${e} \uB05D \uBC29\uD5A5\uC73C\uB85C \uBF51\uB294\uB2E4 (\uB0B4\uACBD \u2300${n.params.bore})`;case"key":return"\uD5C8\uBE0C\uB97C \uCD95\uBC29\uD5A5\uC73C\uB85C \uBE7C\uACE0 \uD0A4\uB97C \uBC18\uACBD \uBC29\uD5A5\uC73C\uB85C \uB4E4\uC5B4\uB0B8\uB2E4";case"fit":return n.part==="taper_hub"?"\uD14C\uC774\uD37C \uD5C8\uBE0C\uB97C \uD070 \uCABD\uC73C\uB85C \uBC00\uC5B4 \uBE80\uB2E4":`\uC0C1\uB300 \uCD95\uC744 \uBCF4\uC5B4\uC5D0\uC11C \uBE80\uB2E4 (\u2300${n.params.bore})`;default:return""}}function vm(n){let t=n.mates.filter(s=>s.part).length,e=[...new Set(n.mates.filter(s=>s.part).map(s=>s.kind))],i={snap:"\uBA48\uCDA4\uB9C1",key:"\uD0A4\xB7\uD5C8\uBE0C",screw:"\uB108\uD2B8",bearing:"\uBCA0\uC5B4\uB9C1",pin:"\uD540",wrench:"\uACF5\uAD6C",fit:"\uB07C\uC6CC\uB9DE\uCDA4"};return t?`\uC0C1\uB300 \uBD80\uD488 ${t}\uAC1C \xB7 ${e.map(s=>i[s]||s).join(" \xB7 ")}`:"\uC0C1\uB300 \uBD80\uD488 \uC5C6\uC74C (\uB2E8\uD488 \uD68C\uC804)"}var si=Math.PI/180;function Xu(){return{ring:new Xe({color:9412808,metalness:.85,roughness:.38,name:"ring"}),key:new Xe({color:13214042,metalness:.8,roughness:.4,name:"key"}),nut:new Xe({color:10134446,metalness:.88,roughness:.35,name:"nut"}),bearing:new Xe({color:7239297,metalness:.9,roughness:.3,name:"bearing"}),hub:new Xe({color:8161791,metalness:.55,roughness:.45,transparent:!0,opacity:.62,name:"hub"}),pin:new Xe({color:13667434,metalness:.8,roughness:.4,name:"pin"}),tool:new Xe({color:5133925,metalness:.75,roughness:.5,name:"tool"})}}function Nc(n,t,e,i,s=Math.PI*2,r=0){let a=zs([{x:0,r:n},{x:0,r:t},{x:e,r:t},{x:e,r:n},{x:0,r:n}],Math.max(24,Math.round(s/(Math.PI*2)*72)),30,r,s),l=new jt(a,i);return l.castShadow=l.receiveShadow=!0,l}function $u(n,t,e){let i=n/Math.cos(30*si),s=new Pn(i/2,i/2,t,6,1,!1);s.rotateY(30*si),s.rotateZ(-90*si);let r=new jt(s,e);return r.castShadow=r.receiveShadow=!0,r}function Wu(n,t,e,i=40){let s=new Pn(n,n,t,i,1,!1);s.rotateZ(-90*si);let r=new jt(s,e);return r.castShadow=r.receiveShadow=!0,r}function ob(n,t,e,i){let s=new Qi,r=t/2,o=Math.max(.01,n/2-r);s.moveTo(-o,-r),s.lineTo(o,-r),s.absarc(o,0,r,-Math.PI/2,Math.PI/2,!1),s.lineTo(-o,r),s.absarc(-o,0,r,Math.PI/2,3*Math.PI/2,!1);let a=new Rs(s,{depth:e,bevelEnabled:!1,curveSegments:10});a.translate(0,0,-e/2);let l=new jt(a,i);return l.castShadow=l.receiveShadow=!0,l}function ab(n,t,e,i,s,r){let o=[{x:0,r:n/2},{x:0,r:t/2},{x:e,r:t/2},{x:e,r:n/2},{x:0,r:n/2}],a=new jt(zs(o,72,30),r);if(a.castShadow=a.receiveShadow=!0,!i)return a;let l=new Ce;l.add(a);let h=new jt(new rn(e+.2,i,s*.55),r.clone());return h.material.opacity=.28,h.position.set(e/2,0,n/2+s*.2),l.add(h),l}function Mm(n,t={}){let e=t.materials||Xu(),i=new Ce;i.name="assembly";let s=[],r=n.length;return n.mates.forEach((o,a)=>{if(!o.part)return;let l=null,h=new z,c=!0,d=null,u=o.params;if(o.kind==="snap")l=Nc(u.groove_d/2,u.ring_outer/2,u.ring_thickness,e.ring,305*si,27.5*si),h.set(o.x+(u.width-u.ring_thickness)/2,0,0);else if(o.kind==="bearing"){let x=new Ce,p=Nc(u.bore/2,(u.bore+(u.outer-u.bore)*.28)/2,u.width,e.bearing),g=Nc((u.outer-(u.outer-u.bore)*.28)/2,u.outer/2,u.width,e.bearing),M=Nc((u.bore+(u.outer-u.bore)*.3)/2,(u.outer-(u.outer-u.bore)*.3)/2,u.width*.16,e.hub);M.position.x=u.width*.42,x.add(p,g,M),l=x,h.set(o.x+Math.max(0,(u.seat_length-u.width)/2),0,0)}else if(o.kind==="key"){let x=new Ce,p=ob(u.length,u.width,u.key_height,e.key);p.position.set(o.x+u.length/2,0,u.shaft_d/2-u.depth+u.key_height/2),p.userData.role="key";let g=ab(u.hub_bore,u.hub_outer,u.hub_width,u.width,u.key_height,e.hub);g.position.set(o.x+(u.length-u.hub_width)/2,0,0),g.userData.role="hub",x.add(p,g),l=x}else if(o.kind==="screw"){let x=new Ce,p=$u(u.nut_across_flats,u.nut_height,e.nut),g=Wu(u.nominal/2,u.nut_height+.4,e.nut);g.material=e.hub,x.add(p,g),l=x;let M=o.motion.dir[0];h.set(M>0?o.x1-u.nut_height:o.x,0,0),x.position.x=u.nut_height/2,d={pitch:u.pitch,dir:M}}else if(o.kind==="pin"){l=Wu(u.diameter/2,u.pin_length,e.pin,24),l.rotation.z=90*si;let x=(u.angle||0)*si;l.rotation.x=-x,h.set(u.position,0,0),c=!0}else if(o.kind==="wrench"&&o.part==="hex_key"){let x=new Ce,p=$u(u.across_flats,u.depth+26,e.tool);p.position.x=(u.depth+26)/2;let g=$u(u.across_flats,22,e.tool);g.rotation.z=90*si,g.position.set(u.depth+26,11,0),x.add(p,g),l=x,h.set(u.end==="left"?-u.depth:r-.001,0,0),u.end==="left"&&(l.scale.x=-1,h.x=u.depth),d={pitch:o.motion.pitch||1,dir:o.motion.dir[0]}}else if(o.kind==="wrench"&&o.part==="wrench"){let x=new Ce,p=u.across_flats,g=Math.max(3,p*.25),M=new jt(new rn(g,p*1.5,g),e.tool);M.position.set(0,p*.75+p/2,0);let y=new jt(new rn(g,p*1.5,g),e.tool);y.position.set(0,-(p*.75+p/2),0);let _=new jt(new rn(g,p+g*2,g),e.tool);_.position.set(0,0,-(p/2+g));let S=new jt(new rn(g,g*1.2,p*2.6),e.tool);S.position.set(0,0,-(p/2+g+p*1.3)),x.add(M,y,_,S),l=x,c=!1,h.set((o.x+o.x1)/2,0,0)}else if(o.kind==="fit"&&o.part==="mating_shaft")l=Wu(u.bore/2-.05,u.length+14,e.hub,48),l.position.x=(u.length+14)/2,h.set(o.x-7,0,0),c=!0;else if(o.kind==="fit"&&o.part==="housing"){let x=[{x:0,r:u.outer/2},{x:0,r:u.housing_outer/2},{x:u.seat_length,r:u.housing_outer/2},{x:u.seat_length,r:u.outer/2},{x:0,r:u.outer/2}];l=new jt(zs(x,72,30),e.hub),h.set(o.x,0,0),c=!1}else if(o.kind==="fit"&&o.part==="taper_hub"){let x=Math.max(u.d_start,u.d_end),p=[{x:0,r:u.d_start/2},{x:0,r:u.hub_outer/2},{x:u.length,r:u.hub_outer/2},{x:u.length,r:u.d_end/2},{x:0,r:u.d_start/2}];l=new jt(zs(p,72,30),e.hub),h.set(o.x,0,0)}if(!l)return;let f=new Ce;f.name=`mate:${o.kind}:${a}`,f.add(l),f.position.copy(h),f.userData={mateIndex:a,kind:o.kind,part:o.part,approx:o.approx!==!1,spins:c,screw:d};let m=o.motion.dir;f.userData.dir=new z(m[0],m[1],m[2]).normalize(),f.userData.distance=o.motion.distance||20,f.userData.home=h.clone(),i.add(f),s.push({wrap:f,mate:o,index:a})}),{group:i,items:s,materials:e}}function bm(n,t={}){let e=t.length||ye(n)||100,i=t.radius||ni(n)/2||10,s=new Xe({color:16742973,emissive:9581591,emissiveIntensity:.6,metalness:.2,roughness:.5,side:un,name:"spin_marker"}),r=new Ce;r.name="marker:spin";let o=Math.max(.05,i*.004),a=3.2*si,l=_i(n,8).points.filter(f=>f.r>1e-6).map(f=>({x:Math.min(e,Math.max(0,f.x)),r:f.r+o}));if(l.length>=2){let f=new jt(zs(l,2,90,Math.PI/2-a,2*a),s);r.add(f)}let h=l.length?l[0].r:i,c=new jt(new rn(Math.max(.15,i*.012),h*.78,Math.max(.6,i*.055)),s);c.position.set(-Math.max(.08,i*.006),h*.55,0);let d=l.length?l[l.length-1].r:i,u=new jt(new po(Math.max(.7,i*.1),Math.max(1.6,i*.22),14),s);return u.rotateZ(-90*si),u.position.set(e+Math.max(.9,i*.12),d*.6,0),r.add(c,u),r.userData.isMarker=!0,r.traverse(f=>{f.isMesh&&(f.castShadow=!1,f.receiveShadow=!1,f.renderOrder=2)}),r}function Sm({part:n,assembly:t,analysis:e}){let i={mode:"idle",t:0,explode:0,rpm:0,spinAngle:0,screwT:0,speed:1},s=t.items,r=m=>Math.max(0,Math.min(1,m)),o=e.order.map(m=>m.mate);function a(m){i.explode=r(m);let x=Math.max(1,o.length);s.forEach(({wrap:p,index:g})=>{let M=Math.max(0,o.indexOf(g)),y=M/x,_=(M+1)/x,S=r((i.explode-y)/(_-y)),w=S*S*(3-2*S),E=p.userData;p.position.copy(E.home).addScaledVector(E.dir,w*E.distance);let v=e.mates[g];if(v.kind==="key"&&v.motion.follow_axial){let T=p.children[0]?.children?.find(D=>D.userData.role==="hub"),L=v.motion.follow_axial;T&&(T.position.x=v.x+(v.params.length-v.params.hub_width)/2+w*L.dir[0]*L.distance-(p.position.x-E.home.x)*0)}E.screw&&i.mode!=="screw"&&(p.rotation.x=-w*(E.distance/(E.screw.pitch||1))*Math.PI*2*E.screw.dir)})}function l(m){i.rpm=m}function h(m=300){i.mode="spin",i.rpm=m}function c(m=!0){i.mode=m?"screw":"idle",i.screwT=0}function d(){i.mode="idle",i.rpm=0}function u(){d(),a(0),n.rotation.x=0,i.spinAngle=0,s.forEach(({wrap:m})=>{m.rotation.x=0})}function f(m){if(m=Math.min(m,.05)*i.speed,i.mode==="spin"&&i.rpm){let x=i.rpm/60*Math.PI*2*m;i.spinAngle+=x,n.rotation.x=i.spinAngle,s.forEach(({wrap:p,index:g})=>{if(e.mates[g].kind==="bearing"){let y=p.children[0]?.children?.[0];y&&(y.rotation.x=i.spinAngle);return}p.userData.spins&&(p.rotation.x=i.spinAngle)})}else if(i.mode==="screw"){i.screwT+=m*.35,i.screwTurns=0;let x=(Math.sin(i.screwT*Math.PI-Math.PI/2)+1)/2;s.forEach(({wrap:p,index:g})=>{let M=p.userData;if(!M.screw)return;let y=M.distance*(1-x);p.position.copy(M.home).addScaledVector(M.dir,y),p.rotation.x=-(y/(M.screw.pitch||1))*Math.PI*2*M.screw.dir,i.screwAdvance=M.distance-y,i.screwTurns=i.screwAdvance/(M.screw.pitch||1)})}}return{state:i,applyExplode:a,spin:h,setRpm:l,screw:c,stop:d,reset:u,update:f,get exploded(){return i.explode}}}function wm(n,t){let e=[];for(let i of n.mates)if(i.kind==="snap"){let s=(i.params.shaft_d-i.params.groove_d)/2;e.push({label:"\uBA48\uCDA4\uB9C1 \uBB3C\uB9BC \uAE4A\uC774",value:`${s.toFixed(2)} mm`,ok:s>=.3,note:`\uD648 \uAE4A\uC774 = (\uCD95 \u2300${i.params.shaft_d} \u2212 \uD648 \u2300${i.params.groove_d})/2. 0.3mm \uBBF8\uB9CC\uC774\uBA74 \uB9C1\uC774 \uBE60\uC9D1\uB2C8\uB2E4.`})}else if(i.kind==="key"){let s=i.params.key_height-i.params.depth;e.push({label:"\uD0A4 \uB3CC\uCD9C(\uD5C8\uBE0C \uCABD)",value:`${s.toFixed(2)} mm`,ok:s>.2,note:`\uD0A4 \uB192\uC774 ${i.params.key_height} \u2212 \uCD95 \uD648 \uAE4A\uC774 ${i.params.depth}. \uD5C8\uBE0C \uD648\uC774 \uC774\uB9CC\uD07C \uBB3C\uB9BD\uB2C8\uB2E4.`})}else if(i.kind==="screw"){let s=i.params.thread_length/i.params.pitch;e.push({label:"\uB108\uD2B8 \uCCB4\uACB0 \uD68C\uC804\uC218",value:`${s.toFixed(1)} \uD68C\uC804`,ok:i.params.thread_length>=i.params.nut_height,note:`\uB098\uC0AC \uAE38\uC774 ${i.params.thread_length} \xF7 \uD53C\uCE58 ${i.params.pitch}. \uB108\uD2B8 \uB192\uC774 ${i.params.nut_height}mm \uBCF4\uB2E4 \uC9E7\uC73C\uBA74 \uC644\uC804 \uCCB4\uACB0\uC774 \uC548 \uB429\uB2C8\uB2E4.`})}else i.kind==="bearing"?e.push({label:"\uBCA0\uC5B4\uB9C1 \uC790\uB9AC \uAE38\uC774",value:`${i.params.seat_length.toFixed(1)} / \uD3ED ${i.params.width}`,ok:i.params.seat_length>=i.params.width-.01,note:"\uC790\uB9AC \uAE38\uC774\uAC00 \uBCA0\uC5B4\uB9C1 \uD3ED\uBCF4\uB2E4 \uC9E7\uC73C\uBA74 \uB0B4\uB95C\uC774 \uB2E8\uCC28\uC5D0 \uB2FF\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4(\uADFC\uC0AC \uACC4\uC5F4)."}):i.kind==="pin"&&e.push({label:"\uD540 \uC5EC\uC720",value:`\u2300${i.params.diameter}`,ok:!0,note:i.params.through?"\uAD00\uD1B5\uD540. \uBC18\uB300\uD3B8\uC73C\uB85C \uBE60\uC9D1\uB2C8\uB2E4.":`\uB9C9\uD78C \uAD6C\uBA4D \uAE4A\uC774 ${i.params.depth}`});return e}var Tm="vringon.revolve.tour.v1",qu=n=>document.getElementById(n),ra=[{el:"chips",place:"right",title:"\uC0D8\uD50C \uB3C4\uBA74\uC73C\uB85C \uC2DC\uC791",body:"\uCE74\uB4DC\uB97C \uB204\uB974\uBA74 \uADF8 \uB3C4\uBA74\uC73C\uB85C \uBC14\uB85C \uC9C4\uD589\uB429\uB2C8\uB2E4. \uCC98\uC74C\uC774\uB77C\uBA74 \uC5EC\uAE30\uC11C \uC2DC\uC791\uD558\uC138\uC694."},{el:"drop",place:"right",title:"\uB0B4 \uB3C4\uBA74 \uC62C\uB9AC\uAE30",body:"PNG, JPG, SVG \uD55C \uC7A5\uC744 \uC62C\uB9BD\uB2C8\uB2E4. \uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4\uB9CC \uC77D\uC73C\uB2C8 \uC62C\uB9AC\uAE30 \uC804\uC5D0 \uC548\uB0B4\uB97C \uD55C \uBC88 \uBCF4\uC138\uC694.",link:{href:"./guide.html",text:"\uC62C\uB9AC\uAE30 \uC548\uB0B4 \uC5F4\uAE30"}},{el:"stepper",place:"bottom",title:"\uB124 \uB2E8\uACC4\uB85C \uC9C4\uD589",body:"\uB3C4\uBA74 \uC785\uB825, \uD310\uB3C5, 3D CAD, \uAC80\uC99D \uC21C\uC11C\uC785\uB2C8\uB2E4. \uC9C0\uAE08 \uB2E8\uACC4\uAC00 \uC704\uCABD\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4."},{el:"stageNext",fallback:"stage",fallbackBox:{right:18,bottom:84,w:150,h:42},place:"top",title:"\uB2E4\uC74C \uB2E8\uACC4 \uBC84\uD2BC",body:"\uC624\uB978\uCABD \uC544\uB798 \uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uB2E4\uC74C \uB2E8\uACC4\uAC00 \uC2E4\uD589\uB429\uB2C8\uB2E4. \uBC84\uD2BC \uC704 \uD55C \uC904\uC774 \uADF8 \uB2E8\uACC4\uAC00 \uD558\uB294 \uC77C\uC785\uB2C8\uB2E4."},{el:"stageActions",fallback:"stage",fallbackBox:{right:14,top:122,w:210,h:34},place:"left",title:"\uBCF4\uAE30 \uC804\uD658\uACFC \uC870\uB9BD \xB7 \uC2DC\uBBAC",body:"\uB2E8\uBA74\uACFC \uB3C4\uBA74\uC744 \uBC88\uAC08\uC544 \uBCF4\uACE0, \uC870\uB9BD \xB7 \uC2DC\uBBAC\uC744 \uCF1C\uBA74 \uC0C1\uB300 \uBD80\uD488\uACFC \uD68C\uC804\uC774 \uBD99\uC2B5\uB2C8\uB2E4. \uB044\uBA74 \uBD80\uD488\uB9CC \uB0A8\uC2B5\uB2C8\uB2E4."},{el:"sideRight",place:"left",title:"\uACB0\uACFC\uC640 \uB0B4\uB824\uBC1B\uAE30",body:"\uD310\uB3C5\uD55C \uCE58\uC218\uB97C \uACE0\uCE58\uBA74 3D\uC640 \uB3C4\uBA74\uC774 \uD568\uAED8 \uBC14\uB01D\uB2C8\uB2E4. 3D\uAC00 \uB9CC\uB4E4\uC5B4\uC9C0\uBA74 \uB9E8 \uC544\uB798 \uB0B4\uBCF4\uB0B4\uAE30\uC5D0\uC11C STEP, STL, GLB \uB4F1\uC73C\uB85C \uBC1B\uC2B5\uB2C8\uB2E4."}],Ni=0,De=null,Yu=null;function lb(n){let t=qu(n.el),e=t&&t.getBoundingClientRect();if(e&&e.width>4&&e.height>4&&t.offsetParent!==null)return e;let i=qu(n.fallback||"stage");if(!i)return null;let s=i.getBoundingClientRect(),r=n.fallbackBox||{},o=r.w||200,a=r.h||40,l=r.right!==void 0?s.right-r.right-o:s.left+(r.left||0),h=r.bottom!==void 0?s.bottom-r.bottom-a:s.top+(r.top||0);return{left:l,top:h,right:l+o,bottom:h+a,width:o,height:a}}function Am(n){let t=lb(n),e=De.querySelector(".tour-hole"),i=De.querySelector(".tour-card");if(!t){De.classList.add("center"),e.style.display="none";return}De.classList.remove("center");let s=8;e.style.display="",e.style.left=`${t.left-s}px`,e.style.top=`${t.top-s}px`,e.style.width=`${t.width+s*2}px`,e.style.height=`${t.height+s*2}px`;let r=i.offsetWidth||320,o=i.offsetHeight||150,a=16,l,h;n.place==="right"?(l=t.right+a,h=t.top):n.place==="left"?(l=t.left-r-a,h=t.top):n.place==="top"?(l=t.right-r,h=t.top-o-a):(l=t.left+t.width/2-r/2,h=t.bottom+a),l=Math.min(Math.max(12,l),innerWidth-r-12),h=Math.min(Math.max(12,h),innerHeight-o-12),i.style.left=`${l}px`,i.style.top=`${h}px`}function Cm(){let n=ra[Ni];De.querySelector(".tour-n").textContent=`${Ni+1} / ${ra.length}`,De.querySelector(".tour-t").textContent=n.title,De.querySelector(".tour-b").textContent=n.body;let t=De.querySelector(".tour-link");n.link?(t.style.display="",t.href=n.link.href,t.textContent=n.link.text):t.style.display="none",De.querySelector(".tour-next").textContent=Ni===ra.length-1?"\uC2DC\uC791\uD558\uAE30":"\uB2E4\uC74C",De.querySelector(".tour-prev").style.visibility=Ni?"":"hidden",requestAnimationFrame(()=>Am(n))}function Dc(){try{localStorage.setItem(Tm,"1")}catch{}removeEventListener("keydown",Yu),removeEventListener("resize",Rm),De?.remove(),De=null}function Rm(){De&&Am(ra[Ni])}function sa(n=1){if(Ni+n>=ra.length)return Dc();Ni=Math.max(0,Ni+n),Cm()}function Em(){De||(Ni=0,De=document.createElement("div"),De.className="tour",De.innerHTML=`<div class="tour-hole"></div>
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
    </div>`,document.body.appendChild(De),De.querySelector(".tour-next").onclick=()=>sa(1),De.querySelector(".tour-prev").onclick=()=>sa(-1),De.querySelector(".tour-skip").onclick=Dc,De.onclick=n=>{n.target===De&&sa(1)},Yu=n=>{n.key==="Escape"?Dc():n.key==="Enter"||n.key==="ArrowRight"?sa(1):n.key==="ArrowLeft"&&sa(-1)},addEventListener("keydown",Yu),addEventListener("resize",Rm),Cm())}function Im(){let n=qu("btnTour");n&&(n.onclick=()=>{De?Dc():Em()});let t=!1;try{t=localStorage.getItem(Tm)==="1"}catch{}t||setTimeout(Em,700)}var Pm={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]},ds=class{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(t){return new Qu(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new dd(t)})}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}setTextureUtils(t){return this.textureUtils=t,this}parse(t,e,i,s){let r=new Ku,o=[];for(let a=0,l=this.pluginCallbacks.length;a<l;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(t,e,s).catch(i)}parseAsync(t,e){let i=this;return new Promise(function(s,r){i.parse(t,s,r,e)})}},le={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Zu="KHR_mesh_quantization",On={};On[We]=le.NEAREST;On[Il]=le.NEAREST_MIPMAP_NEAREST;On[Ls]=le.NEAREST_MIPMAP_LINEAR;On[Ze]=le.LINEAR;On[Ir]=le.LINEAR_MIPMAP_NEAREST;On[fi]=le.LINEAR_MIPMAP_LINEAR;On[Hn]=le.CLAMP_TO_EDGE;On[fr]=le.REPEAT;On[pr]=le.MIRRORED_REPEAT;var Lm={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},cb=new Gt,Nm=12,hb=1179937895,ub=2,Dm=8,db=1313821514,fb=5130562;function Di(n,t){return n.length===t.length&&n.every(function(e,i){return e===t[i]})}function pb(n){return new TextEncoder().encode(n).buffer}function mb(n){return Di(n.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function gb(n,t,e){let i={min:new Array(n.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(n.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=t;s<t+e;s++)for(let r=0;r<n.itemSize;r++){let o;n.itemSize>4?o=n.array[s*n.itemSize+r]:(r===0?o=n.getX(s):r===1?o=n.getY(s):r===2?o=n.getZ(s):r===3&&(o=n.getW(s)),n.normalized===!0&&(o=mi.normalize(o,n.array))),i.min[r]=Math.min(i.min[r],o),i.max[r]=Math.max(i.max[r],o)}return i}function Um(n){return Math.ceil(n/4)*4}function Ju(n,t=0){let e=Um(n.byteLength);if(e!==n.byteLength){let i=new Uint8Array(e);if(i.set(new Uint8Array(n)),t!==0)for(let s=n.byteLength;s<e;s++)i[s]=t;return i.buffer}return n}function ju(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function xb(n,t){if(typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas){let e;return t==="image/jpeg"?e=.92:t==="image/webp"&&(e=.8),n.convertToBlob({type:t,quality:e})}else return new Promise(e=>n.toBlob(e,t))}var Ku=class{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r185"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(t){this.plugins=t}setTextureUtils(t){this.textureUtils=t}async writeAsync(t,e,i={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},i),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(t),await Promise.all(this.pending);let s=this,r=s.buffers,o=s.json;i=s.options;let a=s.extensionsUsed,l=s.extensionsRequired,h=new Blob(r,{type:"application/octet-stream"}),c=Object.keys(a),d=Object.keys(l);if(c.length>0&&(o.extensionsUsed=c),d.length>0&&(o.extensionsRequired=d),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=h.size),i.binary===!0){let u=new FileReader;u.readAsArrayBuffer(h),u.onloadend=function(){let f=Ju(u.result),m=new DataView(new ArrayBuffer(Dm));m.setUint32(0,f.byteLength,!0),m.setUint32(4,fb,!0);let x=Ju(pb(JSON.stringify(o)),32),p=new DataView(new ArrayBuffer(Dm));p.setUint32(0,x.byteLength,!0),p.setUint32(4,db,!0);let g=new ArrayBuffer(Nm),M=new DataView(g);M.setUint32(0,hb,!0),M.setUint32(4,ub,!0);let y=Nm+p.byteLength+x.byteLength+m.byteLength+f.byteLength;M.setUint32(8,y,!0);let _=new Blob([g,p,x,m,f],{type:"application/octet-stream"}),S=new FileReader;S.readAsArrayBuffer(_),S.onloadend=function(){e(S.result)}}}else if(o.buffers&&o.buffers.length>0){let u=new FileReader;u.readAsDataURL(h),u.onloadend=function(){let f=u.result;o.buffers[0].uri=f,e(o)}}else e(o)}serializeUserData(t,e){if(Object.keys(t.userData).length===0)return;let i=this.options,s=this.extensionsUsed;try{let r=JSON.parse(JSON.stringify(t.userData));if(i.includeCustomExtensions&&r.gltfExtensions){e.extensions===void 0&&(e.extensions={});for(let o in r.gltfExtensions)e.extensions[o]=r.gltfExtensions[o],s[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(e.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+t.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(t,e=!1){if(this.uids.has(t)===!1){let s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(t,s)}return this.uids.get(t).get(e)}isNormalizedNormalAttribute(t){if(this.cache.attributesNormalized.has(t))return!1;let i=new z;for(let s=0,r=t.count;s<r;s++)if(Math.abs(i.fromBufferAttribute(t,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(t){let e=this.cache;if(e.attributesNormalized.has(t))return e.attributesNormalized.get(t);let i=t.clone(),s=new z;for(let r=0,o=i.count;r<o;r++)s.fromBufferAttribute(i,r),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),i.setXYZ(r,s.x,s.y,s.z);return e.attributesNormalized.set(t,i),i}applyTextureTransform(t,e){let i=!1,s={};(e.offset.x!==0||e.offset.y!==0)&&(s.offset=e.offset.toArray(),i=!0),e.rotation!==0&&(s.rotation=e.rotation,i=!0),(e.repeat.x!==1||e.repeat.y!==1)&&(s.scale=e.repeat.toArray(),i=!0),i&&(t.extensions=t.extensions||{},t.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(t,e){if(t===e)return t;function i(f){return f.colorSpace===$e?function(x){return x<.04045?x*.0773993808:Math.pow(x*.9478672986+.0521327014,2.4)}:function(x){return x}}t instanceof Ki&&(t=await this.decompressTextureAsync(t)),e instanceof Ki&&(e=await this.decompressTextureAsync(e));let s=t?t.image:null,r=e?e.image:null,o=Math.max(s?s.width:0,r?r.width:0),a=Math.max(s?s.height:0,r?r.height:0),l=ju();l.width=o,l.height=a;let h=l.getContext("2d",{willReadFrequently:!0});h.fillStyle="#00ffff",h.fillRect(0,0,o,a);let c=h.getImageData(0,0,o,a);if(s){h.drawImage(s,0,0,o,a);let f=i(t),m=h.getImageData(0,0,o,a).data;for(let x=2;x<m.length;x+=4)c.data[x]=f(m[x]/256)*256}if(r){h.drawImage(r,0,0,o,a);let f=i(e),m=h.getImageData(0,0,o,a).data;for(let x=1;x<m.length;x+=4)c.data[x]=f(m[x]/256)*256}h.putImageData(c,0,0);let u=(t||e).clone();return u.source=new Ai(l),u.colorSpace=Un,u.channel=(t||e).channel,t&&e&&t.channel!==e.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),u}async buildNormalMapTextureAsync(t,e,i){t instanceof Ki&&(t=await this.decompressTextureAsync(t));let s=t.image,r=ju();r.width=s.width,r.height=s.height;let o=r.getContext("2d",{willReadFrequently:!0});o.drawImage(s,0,0,r.width,r.height);let a=o.getImageData(0,0,r.width,r.height),l=a.data;for(let c=0;c<l.length;c+=4)e&&(l[c+0]=255-l[c+0]),i&&(l[c+1]=255-l[c+1]);o.putImageData(a,0,0);let h=t.clone();return h.source=new Ai(r),h}async decompressTextureAsync(t,e=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(t,e)}processBuffer(t){let e=this.json,i=this.buffers;return e.buffers||(e.buffers=[{byteLength:0}]),i.push(t),0}processBufferView(t,e,i,s,r){let o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(e){case le.BYTE:case le.UNSIGNED_BYTE:a=1;break;case le.SHORT:case le.UNSIGNED_SHORT:a=2;break;default:a=4}let l=t.itemSize*a;r===le.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);let h=Um(s*l),c=new DataView(new ArrayBuffer(h)),d=0;for(let m=i;m<i+s;m++){for(let x=0;x<t.itemSize;x++){let p;t.itemSize>4?p=t.array[m*t.itemSize+x]:(x===0?p=t.getX(m):x===1?p=t.getY(m):x===2?p=t.getZ(m):x===3&&(p=t.getW(m)),t.normalized===!0&&(p=mi.normalize(p,t.array))),e===le.FLOAT?c.setFloat32(d,p,!0):e===le.INT?c.setInt32(d,p,!0):e===le.UNSIGNED_INT?c.setUint32(d,p,!0):e===le.SHORT?c.setInt16(d,p,!0):e===le.UNSIGNED_SHORT?c.setUint16(d,p,!0):e===le.BYTE?c.setInt8(d,p):e===le.UNSIGNED_BYTE&&c.setUint8(d,p),d+=a}d%l!==0&&(d+=l-d%l)}let u={buffer:this.processBuffer(c.buffer),byteOffset:this.byteOffset,byteLength:h};return r!==void 0&&(u.target=r),r===le.ARRAY_BUFFER&&(u.byteStride=l),this.byteOffset+=h,o.bufferViews.push(u),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(t){let e=this,i=e.json;return i.bufferViews||(i.bufferViews=[]),new Promise(function(s){let r=new FileReader;r.readAsArrayBuffer(t),r.onloadend=function(){let o=Ju(r.result),a={buffer:e.processBuffer(o),byteOffset:e.byteOffset,byteLength:o.byteLength};e.byteOffset+=o.byteLength,s(i.bufferViews.push(a)-1)}})}processAccessor(t,e,i,s){let r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},a;if(t.array.constructor===Float32Array)a=le.FLOAT;else if(t.array.constructor===Int32Array)a=le.INT;else if(t.array.constructor===Uint32Array)a=le.UNSIGNED_INT;else if(t.array.constructor===Int16Array)a=le.SHORT;else if(t.array.constructor===Uint16Array)a=le.UNSIGNED_SHORT;else if(t.array.constructor===Int8Array)a=le.BYTE;else if(t.array.constructor===Uint8Array)a=le.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+t.array.constructor.name);if(i===void 0&&(i=0),(s===void 0||s===1/0)&&(s=t.count),s===0)return null;let l=gb(t,i,s),h;e!==void 0&&(h=t===e.index?le.ELEMENT_ARRAY_BUFFER:le.ARRAY_BUFFER);let c=this.processBufferView(t,a,i,s,h),d={bufferView:c.id,byteOffset:c.byteOffset,componentType:a,count:s,max:l.max,min:l.min,type:o[t.itemSize]};return t.normalized===!0&&(d.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(d)-1}processImage(t,e,i,s="image/png"){if(t!==null){let r=this,o=r.cache,a=r.json,l=r.options,h=r.pending;o.images.has(t)||o.images.set(t,{});let c=o.images.get(t),d=s+":flipY/"+i.toString();if(c[d]!==void 0)return c[d];a.images||(a.images=[]);let u={mimeType:s},f=ju();f.width=Math.min(t.width,l.maxTextureSize),f.height=Math.min(t.height,l.maxTextureSize);let m=f.getContext("2d",{willReadFrequently:!0});if(i===!0&&(m.translate(0,f.height),m.scale(1,-1)),t.data!==void 0){e!==Mn&&console.error("GLTFExporter: Only RGBAFormat is supported.",e),(t.width>l.maxTextureSize||t.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",t);let p=new Uint8ClampedArray(t.height*t.width*4);for(let g=0;g<p.length;g+=4)p[g+0]=t.data[g+0],p[g+1]=t.data[g+1],p[g+2]=t.data[g+2],p[g+3]=t.data[g+3];m.putImageData(new ImageData(p,t.width,t.height),0,0)}else if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas)m.drawImage(t,0,0,f.width,f.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?h.push(xb(f,s).then(p=>r.processBufferViewImage(p)).then(p=>{u.bufferView=p})):u.uri=yr.getDataURL(f,s);let x=a.images.push(u)-1;return c[d]=x,x}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(t){let e=this.json;e.samplers||(e.samplers=[]);let i={magFilter:On[t.magFilter],minFilter:On[t.minFilter],wrapS:On[t.wrapS],wrapT:On[t.wrapT]};return e.samplers.push(i)-1}async processTextureAsync(t){let i=this.options,s=this.cache,r=this.json;if(s.textures.has(t))return s.textures.get(t);r.textures||(r.textures=[]),t instanceof Ki&&(t=await this.decompressTextureAsync(t,i.maxTextureSize));let o=t.userData.mimeType,a=this.processImage(t.image,t.format,t.flipY,o),l={sampler:this.processSampler(t)};o==="image/webp"?(l.extensions=l.extensions||{},l.extensions.EXT_texture_webp={source:a},this.extensionsUsed.EXT_texture_webp=!0,this.extensionsRequired.EXT_texture_webp=!0):l.source=a,t.name&&(l.name=t.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(t,l)});let h=r.textures.push(l)-1;return s.textures.set(t,h),h}async processMaterialAsync(t,e){let i=this.cache,s=this.json,r=e!==void 0&&e.hasAttribute("tangent"),o=t.normalMap?t.uuid+":"+r:t.uuid;if(i.materials.has(o))return i.materials.get(o);if(t.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;s.materials||(s.materials=[]);let a={pbrMetallicRoughness:{}};t.isMeshStandardMaterial!==!0&&t.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let l=t.color.toArray().concat([t.opacity]);if(Di(l,[1,1,1,1])||(a.pbrMetallicRoughness.baseColorFactor=l),t.isMeshStandardMaterial?(a.pbrMetallicRoughness.metallicFactor=t.metalness,a.pbrMetallicRoughness.roughnessFactor=t.roughness):(a.pbrMetallicRoughness.metallicFactor=0,a.pbrMetallicRoughness.roughnessFactor=1),t.metalnessMap||t.roughnessMap){let c=await this.buildMetalRoughTextureAsync(t.metalnessMap,t.roughnessMap),d={index:await this.processTextureAsync(c),texCoord:c.channel};this.applyTextureTransform(d,c),a.pbrMetallicRoughness.metallicRoughnessTexture=d}if(t.map){let c={index:await this.processTextureAsync(t.map),texCoord:t.map.channel};this.applyTextureTransform(c,t.map),a.pbrMetallicRoughness.baseColorTexture=c}if(t.emissive){let c=t.emissive;if(Math.max(c.r,c.g,c.b)>0&&(a.emissiveFactor=t.emissive.toArray()),t.emissiveMap){let u={index:await this.processTextureAsync(t.emissiveMap),texCoord:t.emissiveMap.channel};this.applyTextureTransform(u,t.emissiveMap),a.emissiveTexture=u}}if(t.normalMap){let c=t.normalScale,d=c.x<0,u=r?c.y<0:c.y>0,f=t.normalMap;(d||u)&&(f=await this.buildNormalMapTextureAsync(t.normalMap,d,u));let m={index:await this.processTextureAsync(f),texCoord:t.normalMap.channel};Math.abs(c.x)!==1&&(m.scale=Math.abs(c.x)),this.applyTextureTransform(m,t.normalMap),a.normalTexture=m}if(t.aoMap){let c={index:await this.processTextureAsync(t.aoMap),texCoord:t.aoMap.channel};t.aoMapIntensity!==1&&(c.strength=t.aoMapIntensity),this.applyTextureTransform(c,t.aoMap),a.occlusionTexture=c}t.transparent?a.alphaMode="BLEND":t.alphaTest>0&&(a.alphaMode="MASK",a.alphaCutoff=t.alphaTest),t.side===un&&(a.doubleSided=!0),t.name!==""&&(a.name=t.name),this.serializeUserData(t,a),await this._invokeAllAsync(async function(c){c.writeMaterialAsync&&await c.writeMaterialAsync(t,a)});let h=s.materials.push(a)-1;return i.materials.set(o,h),h}async processMeshAsync(t){let e=this.cache,i=this.json,s=[t.geometry.uuid];if(Array.isArray(t.material))for(let _=0,S=t.material.length;_<S;_++)s.push(t.material[_].uuid);else s.push(t.material.uuid);let r=s.join(":");if(e.meshes.has(r))return e.meshes.get(r);let o=t.geometry,a;t.isLineSegments?a=le.LINES:t.isLineLoop?a=le.LINE_LOOP:t.isLine?a=le.LINE_STRIP:t.isPoints?a=le.POINTS:a=t.material.wireframe?le.LINES:le.TRIANGLES;let l={},h={},c=[],d=[],u={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=o.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let m=null;for(let _ in o.attributes){if(_.slice(0,5)==="morph")continue;let S=o.attributes[_];if(_=u[_]||_.toUpperCase(),!/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(_)&&!_.startsWith("_")&&(_="_"+_),e.attributes.has(this.getUID(S))){h[_]=e.attributes.get(this.getUID(S));continue}m=null;let E=S.array;_==="JOINTS_0"&&!(E instanceof Uint16Array)&&!(E instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),m=ds.Utils.toTypedBufferAttribute(S,Uint16Array)):(E instanceof Uint32Array||E instanceof Int32Array)&&!_.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${_}" converted to type FLOAT.`),m=ds.Utils.toTypedBufferAttribute(S,Float32Array));let v=this.processAccessor(m||S,o);v!==null&&(_.startsWith("_")||this.detectMeshQuantization(_,S),h[_]=v,e.attributes.set(this.getUID(S),v))}if(f!==void 0&&o.setAttribute("normal",f),Object.keys(h).length===0)return null;if(t.morphTargetInfluences!==void 0&&t.morphTargetInfluences.length>0){let _=[],S=[],w={};if(t.morphTargetDictionary!==void 0)for(let E in t.morphTargetDictionary)w[t.morphTargetDictionary[E]]=E;for(let E=0;E<t.morphTargetInfluences.length;++E){let v={},T=!1;for(let L in o.morphAttributes){if(L!=="position"&&L!=="normal"){T||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),T=!0);continue}let D=o.morphAttributes[L][E],P=L.toUpperCase(),G=o.attributes[L];if(e.attributes.has(this.getUID(D,!0))){v[P]=e.attributes.get(this.getUID(D,!0));continue}let I=D.clone();if(!o.morphTargetsRelative)for(let A=0,B=D.count;A<B;A++)for(let F=0;F<D.itemSize;F++)F===0&&I.setX(A,D.getX(A)-G.getX(A)),F===1&&I.setY(A,D.getY(A)-G.getY(A)),F===2&&I.setZ(A,D.getZ(A)-G.getZ(A)),F===3&&I.setW(A,D.getW(A)-G.getW(A));v[P]=this.processAccessor(I,o),e.attributes.set(this.getUID(G,!0),v[P])}d.push(v),_.push(t.morphTargetInfluences[E]),t.morphTargetDictionary!==void 0&&S.push(w[E])}l.weights=_,S.length>0&&(l.extras={},l.extras.targetNames=S)}let x=Array.isArray(t.material);if(x&&o.groups.length===0)return null;let p=!1;if(x&&o.index===null){let _=[];for(let S=0,w=o.attributes.position.count;S<w;S++)_[S]=S;o.setIndex(_),p=!0}let g=x?t.material:[t.material],M=x?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let _=0,S=M.length;_<S;_++){let w={mode:a,attributes:h};if(this.serializeUserData(o,w),d.length>0&&(w.targets=d),o.index!==null){let v=this.getUID(o.index);(M[_].start!==void 0||M[_].count!==void 0)&&(v+=":"+M[_].start+":"+M[_].count),e.attributes.has(v)?w.indices=e.attributes.get(v):(w.indices=this.processAccessor(o.index,o,M[_].start,M[_].count),e.attributes.set(v,w.indices)),w.indices===null&&delete w.indices}let E=await this.processMaterialAsync(g[M[_].materialIndex],o);E!==null&&(w.material=E),c.push(w)}p===!0&&o.setIndex(null),l.primitives=c,i.meshes||(i.meshes=[]),await this._invokeAllAsync(function(_){_.writeMesh&&_.writeMesh(t,l)});let y=i.meshes.push(l)-1;return e.meshes.set(r,y),y}detectMeshQuantization(t,e){if(this.extensionsUsed[Zu])return;let i;switch(e.array.constructor){case Int8Array:i="byte";break;case Uint8Array:i="unsigned byte";break;case Int16Array:i="short";break;case Uint16Array:i="unsigned short";break;default:return}e.normalized&&(i+=" normalized");let s=t.split("_",1)[0];Pm[s]&&Pm[s].includes(i)&&(this.extensionsUsed[Zu]=!0,this.extensionsRequired[Zu]=!0)}processCamera(t){let e=this.json;e.cameras||(e.cameras=[]);let i=t.isOrthographicCamera,s={type:i?"orthographic":"perspective"};return i?s.orthographic={xmag:t.right*2,ymag:t.top*2,zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near}:s.perspective={aspectRatio:t.aspect,yfov:mi.degToRad(t.fov),zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near},t.name!==""&&(s.name=t.type),e.cameras.push(s)-1}processAnimation(t,e){let i=this.json,s=this.nodeMap;i.animations||(i.animations=[]),t=ds.Utils.mergeMorphTargetTracks(t.clone(),e);let r=t.tracks,o=[],a=[];for(let h=0;h<r.length;++h){let c=r[h],d=ue.parseTrackName(c.name),u=ue.findNode(e,d.nodeName),f=Lm[d.propertyName];if(d.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(d.objectIndex):u=void 0),!u||!f){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',c.name);continue}let m=1,x=c.values.length/c.times.length;f===Lm.morphTargetInfluences&&(x/=u.morphTargetInfluences.length);let p;c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(p="CUBICSPLINE",x/=3):c.getInterpolation()===Es?p="STEP":p="LINEAR",a.push({input:this.processAccessor(new Pe(c.times,m)),output:this.processAccessor(new Pe(c.values,x)),interpolation:p}),o.push({sampler:a.length-1,target:{node:s.get(u),path:f}})}let l={name:t.name||"clip_"+i.animations.length,samplers:a,channels:o};return this.serializeUserData(t,l),i.animations.push(l),i.animations.length-1}processSkin(t){let e=this.json,i=this.nodeMap,s=e.nodes[i.get(t)],r=t.skeleton;if(r===void 0)return null;let o=t.skeleton.bones[0];if(o===void 0)return null;let a=[],l=new Float32Array(r.bones.length*16),h=new me;for(let d=0;d<r.bones.length;++d)a.push(i.get(r.bones[d])),h.copy(r.boneInverses[d]),h.multiply(t.bindMatrix).toArray(l,d*16);return e.skins===void 0&&(e.skins=[]),e.skins.push({inverseBindMatrices:this.processAccessor(new Pe(l,16)),joints:a,skeleton:i.get(o)}),s.skin=e.skins.length-1}async processNodeAsync(t){let e=this.json,i=this.options,s=this.nodeMap;if(e.nodes||(e.nodes=[]),t.pivot!==null)return await this._processNodeWithPivotAsync(t);let r={};if(i.trs){let a=t.quaternion.toArray(),l=t.position.toArray(),h=t.scale.toArray();Di(a,[0,0,0,1])||(r.rotation=a),Di(l,[0,0,0])||(r.translation=l),Di(h,[1,1,1])||(r.scale=h)}else t.matrixAutoUpdate&&t.updateMatrix(),mb(t.matrix)===!1&&(r.matrix=t.matrix.elements);if(t.name!==""&&(r.name=String(t.name)),this.serializeUserData(t,r),t.isMesh||t.isLine||t.isPoints){let a=await this.processMeshAsync(t);a!==null&&(r.mesh=a)}else t.isCamera&&(r.camera=this.processCamera(t));t.isSkinnedMesh&&this.skins.push(t);let o=e.nodes.push(r)-1;if(s.set(t,o),t.children.length>0){let a=[];for(let l=0,h=t.children.length;l<h;l++){let c=t.children[l];if(c.visible||i.onlyVisible===!1){let d=await this.processNodeAsync(c);d!==null&&a.push(d)}}a.length>0&&(r.children=a)}return await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(t,r)}),o}async _processNodeWithPivotAsync(t){let e=this.json,i=this.options,s=this.nodeMap,r=t.pivot,o={},a=t.quaternion.toArray(),l=[t.position.x+r.x,t.position.y+r.y,t.position.z+r.z],h=t.scale.toArray();Di(a,[0,0,0,1])||(o.rotation=a),Di(l,[0,0,0])||(o.translation=l),Di(h,[1,1,1])||(o.scale=h),o.extras={pivot:r.toArray()},t.name!==""&&(o.name=String(t.name)),this.serializeUserData(t,o);let c=e.nodes.push(o)-1;s.set(t,c);let d={},u=[-r.x,-r.y,-r.z];if(Di(u,[0,0,0])||(d.translation=u),t.isMesh||t.isLine||t.isPoints){let x=await this.processMeshAsync(t);x!==null&&(d.mesh=x)}else t.isCamera&&(d.camera=this.processCamera(t));t.isSkinnedMesh&&this.skins.push(t);let m=[e.nodes.push(d)-1];if(t.children.length>0){let x=[];for(let p=0,g=t.children.length;p<g;p++){let M=t.children[p];if(M.visible||i.onlyVisible===!1){let y=await this.processNodeAsync(M);y!==null&&x.push(y)}}x.length>0&&(d.children=x)}return o.children=m,await this._invokeAllAsync(function(x){x.writeNode&&x.writeNode(t,o)}),c}async processSceneAsync(t){let e=this.json,i=this.options;e.scenes||(e.scenes=[],e.scene=0);let s={};t.name!==""&&(s.name=t.name),e.scenes.push(s);let r=[];for(let o=0,a=t.children.length;o<a;o++){let l=t.children[o];if(l.visible||i.onlyVisible===!1){let h=await this.processNodeAsync(l);h!==null&&r.push(h)}}r.length>0&&(s.nodes=r),this.serializeUserData(t,s)}async processObjectsAsync(t){let e=new ui;e.name="AuxScene";for(let i=0;i<t.length;i++)e.children.push(t[i]);await this.processSceneAsync(e)}async processInputAsync(t){let e=this.options;t=t instanceof Array?t:[t],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(t)});let i=[];for(let s=0;s<t.length;s++)t[s]instanceof ui?await this.processSceneAsync(t[s]):i.push(t[s]);i.length>0&&await this.processObjectsAsync(i);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);if(t.length===1)for(let s=0;s<e.animations.length;++s)this.processAnimation(e.animations[s],t[0]);else for(let s=0;s<t.length;s++){let r=e.animations[s]||[];for(let o=0;o<r.length;++o)this.processAnimation(r[o],t[s])}await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(t)})}async _invokeAllAsync(t){for(let e=0,i=this.plugins.length;e<i;e++)await t(this.plugins[e])}},Qu=class{constructor(t){this.writer=t,this.name="KHR_lights_punctual"}writeNode(t,e){if(!t.isLight)return;if(!t.isDirectionalLight&&!t.isPointLight&&!t.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",t);return}let i=this.writer,s=i.json,r=i.extensionsUsed,o={};t.name&&(o.name=t.name),o.color=t.color.toArray(),o.intensity=t.intensity,t.isDirectionalLight?o.type="directional":t.isPointLight?(o.type="point",t.distance>0&&(o.range=t.distance)):t.isSpotLight&&(o.type="spot",t.distance>0&&(o.range=t.distance),o.spot={},o.spot.innerConeAngle=(1-t.penumbra)*t.angle,o.spot.outerConeAngle=t.angle),t.decay!==void 0&&t.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),t.target&&(t.target.parent!==t||t.target.position.x!==0||t.target.position.y!==0||t.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},r[this.name]=!0);let a=s.extensions[this.name].lights;a.push(o),e.extensions=e.extensions||{},e.extensions[this.name]={light:a.length-1}}},td=class{constructor(t){this.writer=t,this.name="KHR_materials_unlit"}async writeMaterialAsync(t,e){if(!t.isMeshBasicMaterial)return;let s=this.writer.extensionsUsed;e.extensions=e.extensions||{},e.extensions[this.name]={},s[this.name]=!0,e.pbrMetallicRoughness.metallicFactor=0,e.pbrMetallicRoughness.roughnessFactor=.9}},ed=class{constructor(t){this.writer=t,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.clearcoat===0)return;let i=this.writer,s=i.extensionsUsed,r={};if(r.clearcoatFactor=t.clearcoat,t.clearcoatMap){let o={index:await i.processTextureAsync(t.clearcoatMap),texCoord:t.clearcoatMap.channel};i.applyTextureTransform(o,t.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=t.clearcoatRoughness,t.clearcoatRoughnessMap){let o={index:await i.processTextureAsync(t.clearcoatRoughnessMap),texCoord:t.clearcoatRoughnessMap.channel};i.applyTextureTransform(o,t.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(t.clearcoatNormalMap){let o={index:await i.processTextureAsync(t.clearcoatNormalMap),texCoord:t.clearcoatNormalMap.channel};t.clearcoatNormalScale.x!==1&&(o.scale=t.clearcoatNormalScale.x),i.applyTextureTransform(o,t.clearcoatNormalMap),r.clearcoatNormalTexture=o}e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},nd=class{constructor(t){this.writer=t,this.name="KHR_materials_dispersion"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.dispersion===0)return;let s=this.writer.extensionsUsed,r={};r.dispersion=t.dispersion,e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},id=class{constructor(t){this.writer=t,this.name="KHR_materials_iridescence"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.iridescence===0)return;let i=this.writer,s=i.extensionsUsed,r={};if(r.iridescenceFactor=t.iridescence,t.iridescenceMap){let o={index:await i.processTextureAsync(t.iridescenceMap),texCoord:t.iridescenceMap.channel};i.applyTextureTransform(o,t.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=t.iridescenceIOR,r.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1],t.iridescenceThicknessMap){let o={index:await i.processTextureAsync(t.iridescenceThicknessMap),texCoord:t.iridescenceThicknessMap.channel};i.applyTextureTransform(o,t.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},sd=class{constructor(t){this.writer=t,this.name="KHR_materials_transmission"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;let i=this.writer,s=i.extensionsUsed,r={};if(r.transmissionFactor=t.transmission,t.transmissionMap){let o={index:await i.processTextureAsync(t.transmissionMap),texCoord:t.transmissionMap.channel};i.applyTextureTransform(o,t.transmissionMap),r.transmissionTexture=o}e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},rd=class{constructor(t){this.writer=t,this.name="KHR_materials_volume"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;let i=this.writer,s=i.extensionsUsed,r={};if(r.thicknessFactor=t.thickness,t.thicknessMap){let o={index:await i.processTextureAsync(t.thicknessMap),texCoord:t.thicknessMap.channel};i.applyTextureTransform(o,t.thicknessMap),r.thicknessTexture=o}t.attenuationDistance!==1/0&&(r.attenuationDistance=t.attenuationDistance),r.attenuationColor=t.attenuationColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},od=class{constructor(t){this.writer=t,this.name="KHR_materials_ior"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.ior===1.5)return;let s=this.writer.extensionsUsed,r={};r.ior=t.ior,e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},ad=class{constructor(t){this.writer=t,this.name="KHR_materials_specular"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.specularIntensity===1&&t.specularColor.equals(cb)&&!t.specularIntensityMap&&!t.specularColorMap)return;let i=this.writer,s=i.extensionsUsed,r={};if(t.specularIntensityMap){let o={index:await i.processTextureAsync(t.specularIntensityMap),texCoord:t.specularIntensityMap.channel};i.applyTextureTransform(o,t.specularIntensityMap),r.specularTexture=o}if(t.specularColorMap){let o={index:await i.processTextureAsync(t.specularColorMap),texCoord:t.specularColorMap.channel};i.applyTextureTransform(o,t.specularColorMap),r.specularColorTexture=o}r.specularFactor=t.specularIntensity,r.specularColorFactor=t.specularColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},ld=class{constructor(t){this.writer=t,this.name="KHR_materials_sheen"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.sheen==0)return;let i=this.writer,s=i.extensionsUsed,r={};if(t.sheenRoughnessMap){let o={index:await i.processTextureAsync(t.sheenRoughnessMap),texCoord:t.sheenRoughnessMap.channel};i.applyTextureTransform(o,t.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(t.sheenColorMap){let o={index:await i.processTextureAsync(t.sheenColorMap),texCoord:t.sheenColorMap.channel};i.applyTextureTransform(o,t.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=t.sheenRoughness,r.sheenColorFactor=t.sheenColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},cd=class{constructor(t){this.writer=t,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.anisotropy==0)return;let i=this.writer,s=i.extensionsUsed,r={};if(t.anisotropyMap){let o={index:await i.processTextureAsync(t.anisotropyMap)};i.applyTextureTransform(o,t.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=t.anisotropy,r.anisotropyRotation=t.anisotropyRotation,e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},hd=class{constructor(t){this.writer=t,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.emissiveIntensity===1)return;let s=this.writer.extensionsUsed,r={};r.emissiveStrength=t.emissiveIntensity,e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},ud=class{constructor(t){this.writer=t,this.name="EXT_materials_bump"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.bumpScale===1&&!t.bumpMap)return;let i=this.writer,s=i.extensionsUsed,r={};if(t.bumpMap){let o={index:await i.processTextureAsync(t.bumpMap),texCoord:t.bumpMap.channel};i.applyTextureTransform(o,t.bumpMap),r.bumpTexture=o}r.bumpFactor=t.bumpScale,e.extensions=e.extensions||{},e.extensions[this.name]=r,s[this.name]=!0}},dd=class{constructor(t){this.writer=t,this.name="EXT_mesh_gpu_instancing"}writeNode(t,e){if(!t.isInstancedMesh)return;let i=this.writer,s=t,r=new Float32Array(s.count*3),o=new Float32Array(s.count*4),a=new Float32Array(s.count*3),l=new me,h=new z,c=new gn,d=new z;for(let f=0;f<s.count;f++)s.getMatrixAt(f,l),l.decompose(h,c,d),h.toArray(r,f*3),c.toArray(o,f*4),d.toArray(a,f*3);let u={TRANSLATION:i.processAccessor(new Pe(r,3)),ROTATION:i.processAccessor(new Pe(o,4)),SCALE:i.processAccessor(new Pe(a,3))};s.instanceColor&&(u._COLOR_0=i.processAccessor(s.instanceColor)),e.extensions=e.extensions||{},e.extensions[this.name]={attributes:u},i.extensionsUsed[this.name]=!0,i.extensionsRequired[this.name]=!0}};ds.Utils={insertKeyframe:function(n,t){let i=n.getValueSize(),s=new n.TimeBufferType(n.times.length+1),r=new n.ValueBufferType(n.values.length+i),o=n.createInterpolant(new n.ValueBufferType(i)),a;if(n.times.length===0){s[0]=t;for(let l=0;l<i;l++)r[l]=0;a=0}else if(t<n.times[0]){if(Math.abs(n.times[0]-t)<.001)return 0;s[0]=t,s.set(n.times,1),r.set(o.evaluate(t),0),r.set(n.values,i),a=0}else if(t>n.times[n.times.length-1]){if(Math.abs(n.times[n.times.length-1]-t)<.001)return n.times.length-1;s[s.length-1]=t,s.set(n.times,0),r.set(n.values,0),r.set(o.evaluate(t),n.values.length),a=s.length-1}else for(let l=0;l<n.times.length;l++){if(Math.abs(n.times[l]-t)<.001)return l;if(n.times[l]<t&&n.times[l+1]>t){s.set(n.times.slice(0,l+1),0),s[l+1]=t,s.set(n.times.slice(l+1),l+2),r.set(n.values.slice(0,(l+1)*i),0),r.set(o.evaluate(t),(l+1)*i),r.set(n.values.slice((l+1)*i),(l+2)*i),a=l+1;break}}return n.times=s,n.values=r,a},mergeMorphTargetTracks:function(n,t){let e=[],i={},s=n.tracks;for(let r=0;r<s.length;++r){let o=s[r],a=ue.parseTrackName(o.name),l=ue.findNode(t,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){e.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(mr)}let h=l.morphTargetInfluences.length,c=l.morphTargetDictionary[a.propertyIndex];if(c===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let d;if(i[l.uuid]===void 0){d=o.clone();let f=new d.ValueBufferType(h*d.times.length);for(let m=0;m<d.times.length;m++)f[m*h+c]=d.values[m];d.name=(a.nodeName||"")+".morphTargetInfluences",d.values=f,i[l.uuid]=d,e.push(d);continue}let u=o.createInterpolant(new o.ValueBufferType(1));d=i[l.uuid];for(let f=0;f<d.times.length;f++)d.values[f*h+c]=u.evaluate(d.times[f]);for(let f=0;f<o.times.length;f++){let m=this.insertKeyframe(d,o.times[f]);d.values[m*h+c]=o.values[f]}}return n.tracks=e,n},toTypedBufferAttribute:function(n,t){let e=new Pe(new t(n.count*n.itemSize),n.itemSize,!1);if(!n.normalized&&!n.isInterleavedBufferAttribute)return e.array.set(n.array),e;for(let i=0,s=n.count;i<s;i++)for(let r=0;r<n.itemSize;r++)e.setComponent(i,r,n.getComponent(i,r));return e}};var Uc=class{parse(t,e={}){e=Object.assign({binary:!1},e);let i=e.binary,s=[],r=0;t.traverse(function(g){if(g.isMesh){let M=g.geometry,y=M.index,_=M.getAttribute("position");r+=y!==null?y.count/3:_.count/3,s.push({object3d:g,geometry:M})}});let o,a=80;if(i===!0){let g=r*2+r*3*4*4+80+4,M=new ArrayBuffer(g);o=new DataView(M),o.setUint32(a,r,!0),a+=4}else o="",o+=`solid exported
`;let l=new z,h=new z,c=new z,d=new z,u=new z,f=new z;for(let g=0,M=s.length;g<M;g++){let y=s[g].object3d,_=s[g].geometry,S=_.index,w=_.getAttribute("position");if(S!==null)for(let E=0;E<S.count;E+=3){let v=S.getX(E+0),T=S.getX(E+1),L=S.getX(E+2);m(v,T,L,w,y)}else for(let E=0;E<w.count;E+=3){let v=E+0,T=E+1,L=E+2;m(v,T,L,w,y)}}return i===!1&&(o+=`endsolid exported
`),o;function m(g,M,y,_,S){l.fromBufferAttribute(_,g),h.fromBufferAttribute(_,M),c.fromBufferAttribute(_,y),S.isSkinnedMesh===!0&&(S.applyBoneTransform(g,l),S.applyBoneTransform(M,h),S.applyBoneTransform(y,c)),l.applyMatrix4(S.matrixWorld),h.applyMatrix4(S.matrixWorld),c.applyMatrix4(S.matrixWorld),x(l,h,c),p(l),p(h),p(c),i===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function x(g,M,y){d.subVectors(y,M),u.subVectors(g,M),d.cross(u).normalize(),f.copy(d).normalize(),i===!0?(o.setFloat32(a,f.x,!0),a+=4,o.setFloat32(a,f.y,!0),a+=4,o.setFloat32(a,f.z,!0),a+=4):(o+="	facet normal "+f.x+" "+f.y+" "+f.z+`
`,o+=`		outer loop
`)}function p(g){i===!0?(o.setFloat32(a,g.x,!0),a+=4,o.setFloat32(a,g.y,!0),a+=4,o.setFloat32(a,g.z,!0),a+=4):o+="			vertex "+g.x+" "+g.y+" "+g.z+`
`}}};var Fc=class{parse(t,e,i={}){function s(L){t.traverse(function(D){if(D.isMesh===!0||D.isPoints){let P=D,G=P.geometry;G.hasAttribute("position")===!0&&L(P,G)}})}i=Object.assign({binary:!1,excludeAttributes:[],littleEndian:!1,customPropertyMapping:{}},i);let o=i.excludeAttributes,a=i.customPropertyMapping,l=Object.keys(a),h=!0,c=!1,d=!1,u=!1,f="float",m="float",x="float",p="uchar",g={};for(let L of l)g[L]="float";let M=0,y=0;t.traverse(function(L){if(L.isMesh===!0){let P=L.geometry,G=P.getAttribute("position"),I=P.getAttribute("normal"),A=P.getAttribute("uv"),B=P.getAttribute("color"),F=P.getIndex();if(G===void 0)return;M+=G.count,y+=F?F.count/3:G.count/3,f=Ui(G.array),I!==void 0&&(c=!0,m=Ui(I.array)),A!==void 0&&(u=!0,x=Ui(A.array)),B!==void 0&&(d=!0,p=Ui(B.array));for(let $ of l){let X=P.getAttribute($);X!==void 0&&(g[$]=Ui(X.array))}}else if(L.isPoints){let P=L.geometry,G=P.getAttribute("position"),I=P.getAttribute("normal"),A=P.getAttribute("color");M+=G.count,f=Ui(G.array),I!==void 0&&(c=!0,m=Ui(I.array)),A!==void 0&&(d=!0,p=Ui(A.array));for(let B of l){let F=P.getAttribute(B);F!==void 0&&(g[B]=Ui(F.array))}h=!1}});let _=new Gt;if(h=h&&o.indexOf("index")===-1,c=c&&o.indexOf("normal")===-1,d=d&&o.indexOf("color")===-1,u=u&&o.indexOf("uv")===-1,h&&y!==Math.floor(y))return console.error("PLYExporter: Failed to generate a valid PLY file with triangle indices because the number of indices is not divisible by 3."),null;let S=4,w=`ply
format ${i.binary?i.littleEndian?"binary_little_endian":"binary_big_endian":"ascii"} 1.0
element vertex ${M}
property ${f} x
property ${f} y
property ${f} z
`;c===!0&&(w+=`property ${m} nx
property ${m} ny
property ${m} nz
`),u===!0&&(w+=`property ${x} s
property ${x} t
`),d===!0&&(w+=`property ${p} red
property ${p} green
property ${p} blue
`);for(let L of l){let D=g[L];for(let P of a[L])w+=`property ${D} ${P}
`}h===!0&&(w+=`element face ${y}
property list uchar int vertex_index
`),w+=`end_header
`;let E=new z,v=new Kt,T=null;if(i.binary===!0){let L=new TextEncoder().encode(w),D=oa(f),P=c?oa(m):null,G=u?oa(x):null,I=d?oa(p):null,A=Gs(p),B=Om(p),F={},$={},X=0;for(let et of l){let dt=g[et],V=oa(dt);F[et]=V,$[et]=Gs(dt),X+=a[et].length*V.size}let ot=M*(3*D.size+(c?3*P.size:0)+(u?2*G.size:0)+(d?3*I.size:0)+X),ht=h?y*(S*3+1):0,tt=new DataView(new ArrayBuffer(L.length+ot+ht));new Uint8Array(tt.buffer).set(L,0);let ct=L.length,Et=L.length+ot,St=0;s(function(et,dt){let V=dt.getAttribute("position"),at=dt.getAttribute("normal"),nt=dt.getAttribute("uv"),xt=dt.getAttribute("color"),R=dt.getIndex();v.getNormalMatrix(et.matrixWorld);for(let U=0,O=V.count;U<O;U++){if(E.fromBufferAttribute(V,U),E.applyMatrix4(et.matrixWorld),D.write(tt,ct,E.x,i.littleEndian),ct+=D.size,D.write(tt,ct,E.y,i.littleEndian),ct+=D.size,D.write(tt,ct,E.z,i.littleEndian),ct+=D.size,c===!0&&(at!=null?(E.fromBufferAttribute(at,U),E.applyMatrix3(v).normalize(),P.write(tt,ct,E.x,i.littleEndian),ct+=P.size,P.write(tt,ct,E.y,i.littleEndian),ct+=P.size,P.write(tt,ct,E.z,i.littleEndian),ct+=P.size):(P.write(tt,ct,0,i.littleEndian),ct+=P.size,P.write(tt,ct,0,i.littleEndian),ct+=P.size,P.write(tt,ct,0,i.littleEndian),ct+=P.size)),u===!0&&(nt!=null?(G.write(tt,ct,nt.getX(U),i.littleEndian),ct+=G.size,G.write(tt,ct,nt.getY(U),i.littleEndian),ct+=G.size):(G.write(tt,ct,0,i.littleEndian),ct+=G.size,G.write(tt,ct,0,i.littleEndian),ct+=G.size)),d===!0)if(xt!=null){_.fromBufferAttribute(xt,U),oe.workingToColorSpace(_,$e);let k=A?_.r:Math.round(_.r*B),Y=A?_.g:Math.round(_.g*B),j=A?_.b:Math.round(_.b*B);I.write(tt,ct,k,i.littleEndian),ct+=I.size,I.write(tt,ct,Y,i.littleEndian),ct+=I.size,I.write(tt,ct,j,i.littleEndian),ct+=I.size}else{let k=A?1:B;I.write(tt,ct,k,i.littleEndian),ct+=I.size,I.write(tt,ct,k,i.littleEndian),ct+=I.size,I.write(tt,ct,k,i.littleEndian),ct+=I.size}for(let k of l){let Y=F[k],j=a[k].length,Z=dt.getAttribute(k),yt=$[k];for(let wt=0;wt<j;wt++){let gt=Z!=null?Fm(Z,U,wt):0;Y.write(tt,ct,yt?gt:Math.round(gt),i.littleEndian),ct+=Y.size}}}if(h===!0)if(R!==null)for(let U=0,O=R.count;U<O;U+=3)tt.setUint8(Et,3),Et+=1,tt.setUint32(Et,R.getX(U+0)+St,i.littleEndian),Et+=S,tt.setUint32(Et,R.getX(U+1)+St,i.littleEndian),Et+=S,tt.setUint32(Et,R.getX(U+2)+St,i.littleEndian),Et+=S;else for(let U=0,O=V.count;U<O;U+=3)tt.setUint8(Et,3),Et+=1,tt.setUint32(Et,St+U,i.littleEndian),Et+=S,tt.setUint32(Et,St+U+1,i.littleEndian),Et+=S,tt.setUint32(Et,St+U+2,i.littleEndian),Et+=S;St+=V.count}),T=tt.buffer}else{let L=0,D="",P="",G=Gs(f),I=Gs(m),A=Gs(x),B=Gs(p),F=Om(p),$={};for(let ot of l)$[ot]=Gs(g[ot]);let X=(ot,ht)=>ht?ot:Math.round(ot);s(function(ot,ht){let tt=ht.getAttribute("position"),ct=ht.getAttribute("normal"),Et=ht.getAttribute("uv"),St=ht.getAttribute("color"),et=ht.getIndex();v.getNormalMatrix(ot.matrixWorld);for(let dt=0,V=tt.count;dt<V;dt++){E.fromBufferAttribute(tt,dt),E.applyMatrix4(ot.matrixWorld);let at=X(E.x,G)+" "+X(E.y,G)+" "+X(E.z,G);if(c===!0&&(ct!=null?(E.fromBufferAttribute(ct,dt),E.applyMatrix3(v).normalize(),at+=" "+X(E.x,I)+" "+X(E.y,I)+" "+X(E.z,I)):at+=" 0 0 0"),u===!0&&(Et!=null?at+=" "+X(Et.getX(dt),A)+" "+X(Et.getY(dt),A):at+=" 0 0"),d===!0)if(St!=null){_.fromBufferAttribute(St,dt),oe.workingToColorSpace(_,$e);let nt=B?_.r:Math.round(_.r*F),xt=B?_.g:Math.round(_.g*F),R=B?_.b:Math.round(_.b*F);at+=` ${nt} ${xt} ${R}`}else{let nt=B?1:F;at+=` ${nt} ${nt} ${nt}`}for(let nt of l){let xt=a[nt].length,R=ht.getAttribute(nt),U=$[nt];for(let O=0;O<xt;O++){let k=R!=null?Fm(R,dt,O):0;at+=" "+X(k,U)}}D+=at+`
`}if(h===!0){if(et!==null)for(let dt=0,V=et.count;dt<V;dt+=3)P+=`3 ${et.getX(dt+0)+L}`,P+=` ${et.getX(dt+1)+L}`,P+=` ${et.getX(dt+2)+L}
`;else for(let dt=0,V=tt.count;dt<V;dt+=3)P+=`3 ${L+dt} ${L+dt+1} ${L+dt+2}
`;y+=et?et.count/3:tt.count/3}L+=tt.count}),T=`${w}${D}${h?`${P}
`:`
`}`}return typeof e=="function"&&requestAnimationFrame(()=>e(T)),T}};function Ui(n){return n instanceof Int8Array?"char":n instanceof Uint8Array||n instanceof Uint8ClampedArray?"uchar":n instanceof Int16Array?"short":n instanceof Uint16Array?"ushort":n instanceof Int32Array?"int":n instanceof Uint32Array?"uint":n instanceof Float32Array?"float":n instanceof Float64Array?"double":"float"}function oa(n){switch(n){case"char":return{write:(t,e,i)=>t.setInt8(e,i),size:1};case"uchar":return{write:(t,e,i)=>t.setUint8(e,i),size:1};case"short":return{write:(t,e,i,s)=>t.setInt16(e,i,s),size:2};case"ushort":return{write:(t,e,i,s)=>t.setUint16(e,i,s),size:2};case"int":return{write:(t,e,i,s)=>t.setInt32(e,i,s),size:4};case"uint":return{write:(t,e,i,s)=>t.setUint32(e,i,s),size:4};case"float":return{write:(t,e,i,s)=>t.setFloat32(e,i,s),size:4};case"double":return{write:(t,e,i,s)=>t.setFloat64(e,i,s),size:8}}}function Gs(n){return n==="float"||n==="double"}function Fm(n,t,e){switch(e){case 0:return n.getX(t);case 1:return n.getY(t);case 2:return n.getZ(t);case 3:return n.getW(t)}}function Om(n){switch(n){case"uchar":return 255;case"ushort":return 65535;default:return 1}}var an=Uint8Array,kn=Uint16Array,_d=Int32Array,yd=new an([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),vd=new an([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),km=new an([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),$m=function(n,t){for(var e=new kn(31),i=0;i<31;++i)e[i]=t+=1<<n[i-1];for(var s=new _d(e[30]),i=1;i<30;++i)for(var r=e[i];r<e[i+1];++r)s[r]=r-e[i]<<5|i;return{b:e,r:s}},Wm=$m(yd,2),_b=Wm.b,pd=Wm.r;_b[28]=258,pd[258]=28;var Xm=$m(vd,0),sA=Xm.b,Bm=Xm.r,md=new kn(32768);for(ge=0;ge<32768;++ge)Fi=(ge&43690)>>1|(ge&21845)<<1,Fi=(Fi&52428)>>2|(Fi&13107)<<2,Fi=(Fi&61680)>>4|(Fi&3855)<<4,md[ge]=((Fi&65280)>>8|(Fi&255)<<8)>>1;var Fi,ge,ca=(function(n,t,e){for(var i=n.length,s=0,r=new kn(t);s<i;++s)n[s]&&++r[n[s]-1];var o=new kn(t);for(s=1;s<t;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(e){a=new kn(1<<t);var l=15-t;for(s=0;s<i;++s)if(n[s])for(var h=s<<4|n[s],c=t-n[s],d=o[n[s]-1]++<<c,u=d|(1<<c)-1;d<=u;++d)a[md[d]>>l]=h}else for(a=new kn(i),s=0;s<i;++s)n[s]&&(a[s]=md[o[n[s]-1]++]>>15-n[s]);return a}),$s=new an(288);for(ge=0;ge<144;++ge)$s[ge]=8;var ge;for(ge=144;ge<256;++ge)$s[ge]=9;var ge;for(ge=256;ge<280;++ge)$s[ge]=7;var ge;for(ge=280;ge<288;++ge)$s[ge]=8;var ge,Oc=new an(32);for(ge=0;ge<32;++ge)Oc[ge]=5;var ge,yb=ca($s,9,0);var vb=ca(Oc,5,0);var qm=function(n){return(n+7)/8|0},Ym=function(n,t,e){return(t==null||t<0)&&(t=0),(e==null||e>n.length)&&(e=n.length),new an(n.subarray(t,e))};var Mb=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],kc=function(n,t,e){var i=new Error(t||Mb[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,kc),!e)throw i;return i};var Oi=function(n,t,e){e<<=t&7;var i=t/8|0;n[i]|=e,n[i+1]|=e>>8},aa=function(n,t,e){e<<=t&7;var i=t/8|0;n[i]|=e,n[i+1]|=e>>8,n[i+2]|=e>>16},fd=function(n,t){for(var e=[],i=0;i<n.length;++i)n[i]&&e.push({s:i,f:n[i]});var s=e.length,r=e.slice();if(!s)return{t:Jm,l:0};if(s==1){var o=new an(e[0].s+1);return o[e[0].s]=1,{t:o,l:1}}e.sort(function(S,w){return S.f-w.f}),e.push({s:-1,f:25001});var a=e[0],l=e[1],h=0,c=1,d=2;for(e[0]={s:-1,f:a.f+l.f,l:a,r:l};c!=s-1;)a=e[e[h].f<e[d].f?h++:d++],l=e[h!=c&&e[h].f<e[d].f?h++:d++],e[c++]={s:-1,f:a.f+l.f,l:a,r:l};for(var u=r[0].s,i=1;i<s;++i)r[i].s>u&&(u=r[i].s);var f=new kn(u+1),m=gd(e[c-1],f,0);if(m>t){var i=0,x=0,p=m-t,g=1<<p;for(r.sort(function(w,E){return f[E.s]-f[w.s]||w.f-E.f});i<s;++i){var M=r[i].s;if(f[M]>t)x+=g-(1<<m-f[M]),f[M]=t;else break}for(x>>=p;x>0;){var y=r[i].s;f[y]<t?x-=1<<t-f[y]++-1:++i}for(;i>=0&&x;--i){var _=r[i].s;f[_]==t&&(--f[_],++x)}m=t}return{t:new an(f),l:m}},gd=function(n,t,e){return n.s==-1?Math.max(gd(n.l,t,e+1),gd(n.r,t,e+1)):t[n.s]=e},zm=function(n){for(var t=n.length;t&&!n[--t];);for(var e=new kn(++t),i=0,s=n[0],r=1,o=function(l){e[i++]=l},a=1;a<=t;++a)if(n[a]==s&&a!=t)++r;else{if(!s&&r>2){for(;r>138;r-=138)o(32754);r>2&&(o(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(o(s),--r;r>6;r-=6)o(8304);r>2&&(o(r-3<<5|8208),r=0)}for(;r--;)o(s);r=1,s=n[a]}return{c:e.subarray(0,i),n:t}},la=function(n,t){for(var e=0,i=0;i<t.length;++i)e+=n[i]*t[i];return e},Zm=function(n,t,e){var i=e.length,s=qm(t+2);n[s]=i&255,n[s+1]=i>>8,n[s+2]=n[s]^255,n[s+3]=n[s+1]^255;for(var r=0;r<i;++r)n[s+r+4]=e[r];return(s+4+i)*8},Vm=function(n,t,e,i,s,r,o,a,l,h,c){Oi(t,c++,e),++s[256];for(var d=fd(s,15),u=d.t,f=d.l,m=fd(r,15),x=m.t,p=m.l,g=zm(u),M=g.c,y=g.n,_=zm(x),S=_.c,w=_.n,E=new kn(19),v=0;v<M.length;++v)++E[M[v]&31];for(var v=0;v<S.length;++v)++E[S[v]&31];for(var T=fd(E,7),L=T.t,D=T.l,P=19;P>4&&!L[km[P-1]];--P);var G=h+5<<3,I=la(s,$s)+la(r,Oc)+o,A=la(s,u)+la(r,x)+o+14+3*P+la(E,L)+2*E[16]+3*E[17]+7*E[18];if(l>=0&&G<=I&&G<=A)return Zm(t,c,n.subarray(l,l+h));var B,F,$,X;if(Oi(t,c,1+(A<I)),c+=2,A<I){B=ca(u,f,0),F=u,$=ca(x,p,0),X=x;var ot=ca(L,D,0);Oi(t,c,y-257),Oi(t,c+5,w-1),Oi(t,c+10,P-4),c+=14;for(var v=0;v<P;++v)Oi(t,c+3*v,L[km[v]]);c+=3*P;for(var ht=[M,S],tt=0;tt<2;++tt)for(var ct=ht[tt],v=0;v<ct.length;++v){var Et=ct[v]&31;Oi(t,c,ot[Et]),c+=L[Et],Et>15&&(Oi(t,c,ct[v]>>5&127),c+=ct[v]>>12)}}else B=yb,F=$s,$=vb,X=Oc;for(var v=0;v<a;++v){var St=i[v];if(St>255){var Et=St>>18&31;aa(t,c,B[Et+257]),c+=F[Et+257],Et>7&&(Oi(t,c,St>>23&31),c+=yd[Et]);var et=St&31;aa(t,c,$[et]),c+=X[et],et>3&&(aa(t,c,St>>5&8191),c+=vd[et])}else aa(t,c,B[St]),c+=F[St]}return aa(t,c,B[256]),c+F[256]},bb=new _d([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Jm=new an(0),Sb=function(n,t,e,i,s,r){var o=r.z||n.length,a=new an(i+o+5*(1+Math.ceil(o/7e3))+s),l=a.subarray(i,a.length-s),h=r.l,c=(r.r||0)&7;if(t){c&&(l[0]=r.r>>3);for(var d=bb[t-1],u=d>>13,f=d&8191,m=(1<<e)-1,x=r.p||new kn(32768),p=r.h||new kn(m+1),g=Math.ceil(e/3),M=2*g,y=function(O){return(n[O]^n[O+1]<<g^n[O+2]<<M)&m},_=new _d(25e3),S=new kn(288),w=new kn(32),E=0,v=0,T=r.i||0,L=0,D=r.w||0,P=0;T+2<o;++T){var G=y(T),I=T&32767,A=p[G];if(x[I]=A,p[G]=I,D<=T){var B=o-T;if((E>7e3||L>24576)&&(B>423||!h)){c=Vm(n,l,0,_,S,w,v,L,P,T-P,c),L=E=v=0,P=T;for(var F=0;F<286;++F)S[F]=0;for(var F=0;F<30;++F)w[F]=0}var $=2,X=0,ot=f,ht=I-A&32767;if(B>2&&G==y(T-ht))for(var tt=Math.min(u,B)-1,ct=Math.min(32767,T),Et=Math.min(258,B);ht<=ct&&--ot&&I!=A;){if(n[T+$]==n[T+$-ht]){for(var St=0;St<Et&&n[T+St]==n[T+St-ht];++St);if(St>$){if($=St,X=ht,St>tt)break;for(var et=Math.min(ht,St-2),dt=0,F=0;F<et;++F){var V=T-ht+F&32767,at=x[V],nt=V-at&32767;nt>dt&&(dt=nt,A=V)}}}I=A,A=x[I],ht+=I-A&32767}if(X){_[L++]=268435456|pd[$]<<18|Bm[X];var xt=pd[$]&31,R=Bm[X]&31;v+=yd[xt]+vd[R],++S[257+xt],++w[R],D=T+$,++E}else _[L++]=n[T],++S[n[T]]}}for(T=Math.max(T,D);T<o;++T)_[L++]=n[T],++S[n[T]];c=Vm(n,l,h,_,S,w,v,L,P,T-P,c),h||(r.r=c&7|l[c/8|0]<<3,c-=7,r.h=p,r.p=x,r.i=T,r.w=D)}else{for(var T=r.w||0;T<o+h;T+=65535){var U=T+65535;U>=o&&(l[c/8|0]=h,U=o),c=Zm(l,c+1,n.subarray(T,U))}r.i=o}return Ym(a,0,i+qm(c)+s)},wb=(function(){for(var n=new Int32Array(256),t=0;t<256;++t){for(var e=t,i=9;--i;)e=(e&1&&-306674912)^e>>>1;n[t]=e}return n})(),Eb=function(){var n=-1;return{p:function(t){for(var e=n,i=0;i<t.length;++i)e=wb[e&255^t[i]]^e>>>8;n=e},d:function(){return~n}}};var Tb=function(n,t,e,i,s){if(!s&&(s={l:1},t.dictionary)){var r=t.dictionary.subarray(-32768),o=new an(r.length+n.length);o.set(r),o.set(n,r.length),n=o,s.w=r.length}return Sb(n,t.level==null?6:t.level,t.mem==null?s.l?Math.ceil(Math.max(8,Math.min(13,Math.log(n.length)))*1.5):20:12+t.mem,e,i,s)},jm=function(n,t){var e={};for(var i in n)e[i]=n[i];for(var i in t)e[i]=t[i];return e};var on=function(n,t,e){for(;e;++t)n[t]=e,e>>>=8};function Ab(n,t){return Tb(n,t||{},0,0)}var Km=function(n,t,e,i){for(var s in n){var r=n[s],o=t+s,a=i;Array.isArray(r)&&(a=jm(i,r[1]),r=r[0]),r instanceof an?e[o]=[r,a]:(e[o+="/"]=[new an(0),a],Km(r,o,e,i))}},Hm=typeof TextEncoder<"u"&&new TextEncoder,Cb=typeof TextDecoder<"u"&&new TextDecoder,Rb=0;try{Cb.decode(Jm,{stream:!0}),Rb=1}catch{}function ha(n,t){if(t){for(var e=new an(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(Hm)return Hm.encode(n);for(var s=n.length,r=new an(n.length+(n.length>>1)),o=0,a=function(c){r[o++]=c},i=0;i<s;++i){if(o+5>r.length){var l=new an(o+8+(s-i<<1));l.set(r),r=l}var h=n.charCodeAt(i);h<128||t?a(h):h<2048?(a(192|h>>6),a(128|h&63)):h>55295&&h<57344?(h=65536+(h&1047552)|n.charCodeAt(++i)&1023,a(240|h>>18),a(128|h>>12&63),a(128|h>>6&63),a(128|h&63)):(a(224|h>>12),a(128|h>>6&63),a(128|h&63))}return Ym(r,0,o)}var xd=function(n){var t=0;if(n)for(var e in n){var i=n[e].length;i>65535&&kc(9),t+=i+4}return t},Gm=function(n,t,e,i,s,r,o,a){var l=i.length,h=e.extra,c=a&&a.length,d=xd(h);on(n,t,o!=null?33639248:67324752),t+=4,o!=null&&(n[t++]=20,n[t++]=e.os),n[t]=20,t+=2,n[t++]=e.flag<<1|(r<0&&8),n[t++]=s&&8,n[t++]=e.compression&255,n[t++]=e.compression>>8;var u=new Date(e.mtime==null?Date.now():e.mtime),f=u.getFullYear()-1980;if((f<0||f>119)&&kc(10),on(n,t,f<<25|u.getMonth()+1<<21|u.getDate()<<16|u.getHours()<<11|u.getMinutes()<<5|u.getSeconds()>>1),t+=4,r!=-1&&(on(n,t,e.crc),on(n,t+4,r<0?-r-2:r),on(n,t+8,e.size)),on(n,t+12,l),on(n,t+14,d),t+=16,o!=null&&(on(n,t,c),on(n,t+6,e.attrs),on(n,t+10,o),t+=14),n.set(i,t),t+=l,d)for(var m in h){var x=h[m],p=x.length;on(n,t,+m),on(n,t+2,p),n.set(x,t+4),t+=4+p}return c&&(n.set(a,t),t+=c),t},Ib=function(n,t,e,i,s){on(n,t,101010256),on(n,t+8,e),on(n,t+10,e),on(n,t+12,i),on(n,t+16,s)};function Qm(n,t){t||(t={});var e={},i=[];Km(n,"",e,t);var s=0,r=0;for(var o in e){var a=e[o],l=a[0],h=a[1],c=h.level==0?0:8,d=ha(o),u=d.length,f=h.comment,m=f&&ha(f),x=m&&m.length,p=xd(h.extra);u>65535&&kc(11);var g=c?Ab(l,h):l,M=g.length,y=Eb();y.p(l),i.push(jm(h,{size:l.length,crc:y.d(),c:g,f:d,m,u:u!=o.length||m&&f.length!=x,o:s,compression:c})),s+=30+u+p+M,r+=76+2*(u+p)+(x||0)+M}for(var _=new an(r+22),S=s,w=r-s,E=0;E<i.length;++E){var d=i[E];Gm(_,d.o,d,d.f,d.u,d.c.length);var v=30+d.f.length+xd(d.extra);_.set(d.c,d.o+v),Gm(_,s,d,d.f,d.u,d.c.length,d.o,d.m),s+=16+v+(d.m?d.m.length:0)}return Ib(_,s,i.length,w,S),_}var pn=class{constructor(t,e="",i=[],s=[]){this.name=t,this.type=e,this.metadata=i,this.properties=s,this.children=[]}addMetadata(t,e){this.metadata.push({key:t,value:e})}addProperty(t,e=[]){this.properties.push({property:t,metadata:e})}addChild(t){this.children.push(t)}toString(t=0){let e="	".repeat(t),i=this.metadata.map(c=>{let d=c.key,u=c.value;if(Array.isArray(u)){let f=[];return f.push(`${d} = {`),u.forEach(m=>{f.push(`${e}		${m}`)}),f.push(`${e}	}`),f.join(`
`)}else return`${d} = ${u}`}),s=i.length?` (
${i.map(c=>`${e}	${c}`).join(`
`)}
${e})`:"",r=this.properties.map(c=>{let d=c.property.replace(/\n/g,`
`+e+"	"),u=c.metadata.length?` (
${c.metadata.map(f=>`${e}		${f}`).join(`
`)}
${e}	)`:"";return`${e}	${d}${u}`}),o=this.children.map(c=>c.toString(t+1)),a=[];if(r.length>0&&a.push(...r),o.length>0){r.length>0&&a.push("");for(let c=0;c<o.length;c++)a.push(o[c]),c<o.length-1&&a.push("")}let l=a.join(`
`),h=this.type?this.type+" ":"";return`${e}def ${h}"${this.name}"${s}
${e}{
${l}
${e}}`}},zc=class{constructor(){this.textureUtils=null}setTextureUtils(t){this.textureUtils=t}parse(t,e,i,s){this.parseAsync(t,s).then(e).catch(i)}async parseAsync(t,e={}){e=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,onlyVisible:!0,quickLookCompatible:!1,maxTextureSize:1024,animations:[],animationFrameRate:60},e);let i=new Set,s={},r="model.usda";s[r]=null;let o=Lb(t,e.animations);e.animationTracks=o;let a=new pn("Root","Xform"),l=new pn("Scenes","Scope");l.addMetadata("kind",'"sceneLibrary"'),a.addChild(l);let h="Scene",c=new pn(h,"Xform");c.addMetadata("customData",["bool preliminary_collidesWithEnvironment = 0",`string sceneName = "${h}"`]),c.addMetadata("sceneName",`"${h}"`),e.includeAnchoringProperties&&(c.addProperty(`token preliminary:anchoring:type = "${e.ar.anchoring.type}"`),c.addProperty(`token preliminary:planeAnchoring:alignment = "${e.ar.planeAnchoring.alignment}"`)),l.addChild(c);let d,u={},f={};t.isScene?og(t,c,u,i,s,e):ag(t,c,u,i,s,e);let m=Vb(u,f,e.quickLookCompatible),x=o.size>0?{fps:e.animationFrameRate,endTimeCode:Nb(e.animations)*e.animationFrameRate}:null;d=rg(x)+`
`+a.toString()+`

`+m.toString(),s[r]=ha(d),d=null;for(let g in f){let M=f[g];if(M.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");M=await this.textureUtils.decompress(M)}let y=Pb(M.image,M.flipY,e.maxTextureSize),_=M.userData.mimeType==="image/jpeg"?"image/jpeg":"image/png",S=await new Promise(w=>y.toBlob(w,_));s[`textures/Texture_${g}.${sg(M)}`]=new Uint8Array(await S.arrayBuffer())}let p=0;for(let g in s){let M=s[g],y=34+g.length;p+=y;let _=p&63;if(_!==4){let S=64-_,w=new Uint8Array(S);s[g]=[M,{extra:{12345:w}}]}p=M.length}return Qm(s,{level:0})}};function ig(n,t){let e=n.name;return e=e.replace(/[^A-Za-z0-9_]/g,""),/^[0-9]/.test(e)&&(e="_"+e),e===""&&(n.isCamera?e="Camera":e="Object"),t.has(e)&&(e=e+"_"+n.id),t.add(e),e}function sg(n){return n.userData.mimeType==="image/jpeg"?"jpg":"png"}function Pb(n,t,e){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){let i=e/Math.max(n.width,n.height),s=document.createElement("canvas");s.width=n.width*Math.min(1,i),s.height=n.height*Math.min(1,i);let r=s.getContext("2d");return t===!0&&(r.translate(0,s.height),r.scale(1,-1)),r.drawImage(n,0,0,s.width,s.height),s}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}var ce=7;function rg(n=null){return`#usda 1.0
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
`}function Lb(n,t){let e=new Map;for(let i=0;i<t.length;i++){let s=t[i];for(let r=0;r<s.tracks.length;r++){let o=s.tracks[r],a=ue.parseTrackName(o.name),l=ue.findNode(n,a.nodeName);if(l==null)continue;let h=a.propertyName;if(h!=="position"&&h!=="quaternion"&&h!=="scale")continue;let c=e.get(l);c===void 0&&(c={},e.set(l,c)),c[h]=o}}return e}function Nb(n){let t=0;for(let e=0;e<n.length;e++)n[e].duration>t&&(t=n[e].duration);return t}function tg(n,t,e,i){let s=e.times,r=e.values,o=[];for(let a=0;a<s.length;a++){let l=a*3;o.push(`${(s[a]*i).toPrecision(ce)}: (${r[l].toPrecision(ce)}, ${r[l+1].toPrecision(ce)}, ${r[l+2].toPrecision(ce)})`)}return`${t} ${n}.timeSamples = {
	${o.join(`,
	`)},
}`}function Db(n,t){let e=n.times,i=n.values,s=[];for(let r=0;r<e.length;r++){let o=r*4;s.push(`${(e[r]*t).toPrecision(ce)}: (${i[o+3].toPrecision(ce)}, ${i[o].toPrecision(ce)}, ${i[o+1].toPrecision(ce)}, ${i[o+2].toPrecision(ce)})`)}return`quatf xformOp:orient.timeSamples = {
	${s.join(`,
	`)},
}`}function og(n,t,e,i,s,r){for(let o=0,a=n.children.length;o<a;o++)ag(n.children[o],t,e,i,s,r)}function ag(n,t,e,i,s,r){if(n.visible===!1&&r.onlyVisible===!0)return;let o;if(n.isMesh){let a=n.geometry,l=Array.isArray(n.material),h=l?n.material:[n.material];for(let d=0;d<h.length;d++){let u=h[d];u.isMeshStandardMaterial||console.warn("THREE.USDZExporter: Use MeshStandardMaterial for best results."),u.uuid in e||(e[u.uuid]=u)}let c=h.map(d=>e[d.uuid]);if(l===!1){let d=`geometries/Geometry_${a.id}.usda`;if(!(d in s)){let u=Ob(a);s[d]=ha(rg()+`
`+u.toString())}}o=Ub(n,a,c,i,r)}else n.isCamera?o=$b(n,i,r):o=cg(n,i,r);t.addChild(o),og(n,o,e,i,s,r)}function lg(n,t,e){let i=e.animationTracks.get(t),s=t.pivot!==null;if(!s&&i===void 0){let h=Fb(t.matrix);n.addProperty(`matrix4d xformOp:transform = ${h}`),n.addProperty('uniform token[] xformOpOrder = ["xformOp:transform"]');return}let r=e.animationFrameRate,o=t.position,a=t.quaternion,l=t.scale;if(i!==void 0&&i.position!==void 0?n.addProperty(tg("xformOp:translate","float3",i.position,r)):n.addProperty(`float3 xformOp:translate = (${o.x.toPrecision(ce)}, ${o.y.toPrecision(ce)}, ${o.z.toPrecision(ce)})`),s){let h=t.pivot;n.addProperty(`float3 xformOp:translate:pivot = (${h.x.toPrecision(ce)}, ${h.y.toPrecision(ce)}, ${h.z.toPrecision(ce)})`)}i!==void 0&&i.quaternion!==void 0?n.addProperty(Db(i.quaternion,r)):n.addProperty(`quatf xformOp:orient = (${a.w.toPrecision(ce)}, ${a.x.toPrecision(ce)}, ${a.y.toPrecision(ce)}, ${a.z.toPrecision(ce)})`),i!==void 0&&i.scale!==void 0?n.addProperty(tg("xformOp:scale","float3",i.scale,r)):n.addProperty(`float3 xformOp:scale = (${l.x.toPrecision(ce)}, ${l.y.toPrecision(ce)}, ${l.z.toPrecision(ce)})`),s?n.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:translate:pivot", "xformOp:orient", "xformOp:scale", "!invert!xformOp:translate:pivot"]'):n.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:orient", "xformOp:scale"]')}function cg(n,t,e){let i=ig(n,t);n.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n);let s=new pn(i,"Xform");return lg(s,n,e),s}function Ub(n,t,e,i,s){let r=cg(n,i,s);return e.length===1?(r.addMetadata("prepend references",`@./geometries/Geometry_${t.id}.usda@</Geometry>`),r.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),r.addProperty(`rel material:binding = </Materials/Material_${e[0].id}>`)):r.addChild(hg(t,e)),r}function Fb(n){let t=n.elements;return`( ${Bc(t,0)}, ${Bc(t,4)}, ${Bc(t,8)}, ${Bc(t,12)} )`}function Bc(n,t){return`(${n[t+0]}, ${n[t+1]}, ${n[t+2]}, ${n[t+3]})`}function Ob(n){let t=new pn("Geometry"),e=hg(n);return t.addChild(e),t}function hg(n,t=null){let e="Geometry",i=n.attributes,s=i.position.count,r=new pn(e,"Mesh");r.addProperty(`int[] faceVertexCounts = [${kb(n)}]`),r.addProperty(`int[] faceVertexIndices = [${Bb(n)}]`),r.addProperty(`normal3f[] normals = [${Md(i.normal,s)}]`,['interpolation = "vertex"']),r.addProperty(`point3f[] points = [${Md(i.position,s)}]`);for(let a=0;a<4;a++){let l=a>0?a:"",h=i["uv"+l];h!==void 0&&r.addProperty(`texCoord2f[] primvars:st${l} = [${zb(h)}]`,['interpolation = "vertex"'])}let o=i.color;if(o!==void 0&&r.addProperty(`color3f[] primvars:displayColor = [${Md(o,s)}]`,['interpolation = "vertex"']),r.addProperty('uniform token subdivisionScheme = "none"'),t!==null){let a=n.groups,l=(n.index!==null?n.index.count:i.position.count)/3;for(let h=0;h<a.length;h++){let c=a[h],d=t[c.materialIndex];if(d===void 0)continue;let u=Math.floor(c.start/3),f=Math.min(u+Math.floor(c.count/3),l),m=[];for(let p=u;p<f;p++)m.push(p);let x=new pn(`subset_${h}`,"GeomSubset");x.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),x.addProperty('uniform token elementType = "face"'),x.addProperty('uniform token familyName = "materialBind"'),x.addProperty(`int[] indices = [${m.join(", ")}]`),x.addProperty(`rel material:binding = </Materials/Material_${d.id}>`),r.addChild(x)}}return r}function kb(n){let t=n.index!==null?n.index.count:n.attributes.position.count;return Array(t/3).fill(3).join(", ")}function Bb(n){let t=n.index,e=[];if(t!==null)for(let i=0;i<t.count;i++)e.push(t.getX(i));else{let i=n.attributes.position.count;for(let s=0;s<i;s++)e.push(s)}return e.join(", ")}function Md(n,t){if(n===void 0)return console.warn("USDZExporter: Normals missing."),Array(t).fill("(0, 0, 0)").join(", ");let e=[];for(let i=0;i<n.count;i++){let s=n.getX(i),r=n.getY(i),o=n.getZ(i);e.push(`(${s.toPrecision(ce)}, ${r.toPrecision(ce)}, ${o.toPrecision(ce)})`)}return e.join(", ")}function zb(n){let t=[];for(let e=0;e<n.count;e++){let i=n.getX(e),s=n.getY(e);t.push(`(${i.toPrecision(ce)}, ${1-s.toPrecision(ce)})`)}return t.join(", ")}function Vb(n,t,e=!1){let i=new pn("Materials");for(let s in n){let r=n[s];i.addChild(Hb(r,t,e))}return i}function Hb(n,t,e=!1){let i=new pn(`Material_${n.id}`,"Material");function s(o,a,l){let h=o.source.id+"_"+o.flipY;t[h]=o;let c=o.channel>0?"st"+o.channel:"st",d={1e3:"repeat",1001:"clamp",1002:"mirror"},u=o.repeat.clone(),f=o.offset.clone(),m=o.rotation,x=Math.sin(m),p=Math.cos(m);f.y=1-f.y-u.y,e?(f.x=f.x/u.x,f.y=f.y/u.y,f.x+=x/u.x,f.y+=p-1):(f.x+=x*u.x,f.y+=(1-p)*u.y);let g=new pn(`PrimvarReader_${a}`,"Shader");g.addProperty('uniform token info:id = "UsdPrimvarReader_float2"'),g.addProperty("float2 inputs:fallback = (0.0, 0.0)"),g.addProperty(`string inputs:varname = "${c}"`),g.addProperty("float2 outputs:result");let M=new pn(`Transform2d_${a}`,"Shader");M.addProperty('uniform token info:id = "UsdTransform2d"'),M.addProperty(`float2 inputs:in.connect = </Materials/Material_${n.id}/PrimvarReader_${a}.outputs:result>`),M.addProperty(`float inputs:rotation = ${(m*(180/Math.PI)).toFixed(ce)}`),M.addProperty(`float2 inputs:scale = ${ng(u)}`),M.addProperty(`float2 inputs:translation = ${ng(f)}`),M.addProperty("float2 outputs:result");let y=new pn(`Texture_${o.id}_${a}`,"Shader");if(y.addProperty('uniform token info:id = "UsdUVTexture"'),y.addProperty(`asset inputs:file = @textures/Texture_${h}.${sg(o)}@`),y.addProperty(`float2 inputs:st.connect = </Materials/Material_${n.id}/Transform2d_${a}.outputs:result>`),l!==void 0){let _=a==="diffuse"?n.opacity:1;y.addProperty(`float4 inputs:scale = ${Gb(l,_)}`)}if(a==="normal"){let _=n.normalScale.x;y.addProperty(`float4 inputs:scale = (${2*_}, ${2*_}, 2, 1)`),y.addProperty(`float4 inputs:bias = (${-_}, ${-_}, -1, 0)`)}return y.addProperty(`token inputs:sourceColorSpace = "${o.colorSpace===Un?"raw":"sRGB"}"`),y.addProperty(`token inputs:wrapS = "${d[o.wrapS]}"`),y.addProperty(`token inputs:wrapT = "${d[o.wrapT]}"`),y.addProperty("float outputs:r"),y.addProperty("float outputs:g"),y.addProperty("float outputs:b"),y.addProperty("float3 outputs:rgb"),(n.transparent||n.alphaTest>0)&&y.addProperty("float outputs:a"),[g,M,y]}n.side===un&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",n);let r=new pn("PreviewSurface","Shader");if(r.addProperty('uniform token info:id = "UsdPreviewSurface"'),n.map!==null?(r.addProperty(`color3f inputs:diffuseColor.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:rgb>`),n.transparent?r.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`):n.alphaTest>0&&(r.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`),r.addProperty(`float inputs:opacityThreshold = ${n.alphaTest}`)),s(n.map,"diffuse",n.color).forEach(a=>i.addChild(a))):r.addProperty(`color3f inputs:diffuseColor = ${eg(n.color)}`),n.emissive){let o=n.emissiveIntensity??1;if(n.emissiveMap){r.addProperty(`color3f inputs:emissiveColor.connect = </Materials/Material_${n.id}/Texture_${n.emissiveMap.id}_emissive.outputs:rgb>`);let a=new Gt(n.emissive.r*o,n.emissive.g*o,n.emissive.b*o);s(n.emissiveMap,"emissive",a).forEach(h=>i.addChild(h))}else n.emissive.getHex()>0&&r.addProperty(`color3f inputs:emissiveColor = ${eg(n.emissive)}`)}if(n.normalMap&&(r.addProperty(`normal3f inputs:normal.connect = </Materials/Material_${n.id}/Texture_${n.normalMap.id}_normal.outputs:rgb>`),s(n.normalMap,"normal").forEach(a=>i.addChild(a))),n.aoMap){r.addProperty(`float inputs:occlusion.connect = </Materials/Material_${n.id}/Texture_${n.aoMap.id}_occlusion.outputs:r>`);let o=n.aoMapIntensity??1,a=new Gt(o,o,o);s(n.aoMap,"occlusion",a).forEach(h=>i.addChild(h))}if(n.roughnessMap){r.addProperty(`float inputs:roughness.connect = </Materials/Material_${n.id}/Texture_${n.roughnessMap.id}_roughness.outputs:g>`);let o=new Gt(n.roughness,n.roughness,n.roughness);s(n.roughnessMap,"roughness",o).forEach(l=>i.addChild(l))}else r.addProperty(`float inputs:roughness = ${n.roughness??1}`);if(n.metalnessMap){r.addProperty(`float inputs:metallic.connect = </Materials/Material_${n.id}/Texture_${n.metalnessMap.id}_metallic.outputs:b>`);let o=new Gt(n.metalness,n.metalness,n.metalness);s(n.metalnessMap,"metallic",o).forEach(l=>i.addChild(l))}else r.addProperty(`float inputs:metallic = ${n.metalness??0}`);if(n.alphaMap?(r.addProperty(`float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.alphaMap.id}_opacity.outputs:r>`),r.addProperty("float inputs:opacityThreshold = 0.0001"),s(n.alphaMap,"opacity").forEach(a=>i.addChild(a))):r.addProperty(`float inputs:opacity = ${n.opacity}`),n.isMeshPhysicalMaterial){if(n.clearcoatMap!==null){r.addProperty(`float inputs:clearcoat.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatMap.id}_clearcoat.outputs:r>`);let o=new Gt(n.clearcoat,n.clearcoat,n.clearcoat);s(n.clearcoatMap,"clearcoat",o).forEach(l=>i.addChild(l))}else r.addProperty(`float inputs:clearcoat = ${n.clearcoat}`);if(n.clearcoatRoughnessMap!==null){r.addProperty(`float inputs:clearcoatRoughness.connect = </Materials/Material_${n.id}/Texture_${n.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`);let o=new Gt(n.clearcoatRoughness,n.clearcoatRoughness,n.clearcoatRoughness);s(n.clearcoatRoughnessMap,"clearcoatRoughness",o).forEach(l=>i.addChild(l))}else r.addProperty(`float inputs:clearcoatRoughness = ${n.clearcoatRoughness}`);r.addProperty(`float inputs:ior = ${n.ior}`)}return r.addProperty("int inputs:useSpecularWorkflow = 0"),r.addProperty("token outputs:surface"),i.addChild(r),i.addProperty(`token outputs:surface.connect = </Materials/Material_${n.id}/PreviewSurface.outputs:surface>`),i}function eg(n){return`(${n.r}, ${n.g}, ${n.b})`}function Gb(n,t=1){return`(${n.r}, ${n.g}, ${n.b}, ${t})`}function ng(n){return`(${n.x}, ${n.y})`}function $b(n,t,e){let i=ig(n,t);n.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n);let s=new pn(i,"Camera");lg(s,n,e);let r=n.isOrthographicCamera?"orthographic":"perspective";s.addProperty(`token projection = "${r}"`);let o=`(${n.near.toPrecision(ce)}, ${n.far.toPrecision(ce)})`;s.addProperty(`float2 clippingRange = ${o}`);let a;n.isOrthographicCamera?a=((Math.abs(n.left)+Math.abs(n.right))*10).toPrecision(ce):a=n.getFilmWidth().toPrecision(ce),s.addProperty(`float horizontalAperture = ${a}`);let l;if(n.isOrthographicCamera?l=((Math.abs(n.top)+Math.abs(n.bottom))*10).toPrecision(ce):l=n.getFilmHeight().toPrecision(ce),s.addProperty(`float verticalAperture = ${l}`),n.isPerspectiveCamera){let h=n.getFocalLength().toPrecision(ce);s.addProperty(`float focalLength = ${h}`);let c=n.focus.toPrecision(ce);s.addProperty(`float focusDistance = ${c}`)}return s}var ua=n=>{isFinite(n)||(n=0);let t=(Math.round(n*1e5)/1e5).toString();return t==="-0"&&(t="0"),t},bd=n=>String(n||"mesh").replace(/[^A-Za-z0-9_]/g,"_")||"mesh";function Wb(n){n.updateWorldMatrix(!0,!0);let t=[],e=new z,i=new z;return n.traverse(s=>{if(!s.isMesh||!s.visible||!s.geometry||s.name.endsWith(":cut")||s.name.startsWith("ghost"))return;for(let u=s;u;u=u.parent)if(u.userData?.isMarker||String(u.name).startsWith("marker:"))return;let r=s.geometry.index?s.geometry.toNonIndexed():s.geometry,o=r.getAttribute("position"),a=r.getAttribute("normal"),l=new Kt().getNormalMatrix(s.matrixWorld),h=[],c=[];for(let u=0;u<o.count;u++)e.fromBufferAttribute(o,u).applyMatrix4(s.matrixWorld),h.push(e.x,e.y,e.z),a&&(i.fromBufferAttribute(a,u).applyMatrix3(l).normalize(),c.push(i.x,i.y,i.z));r!==s.geometry&&r.dispose();let d=s.material?.color?s.material.color:new Gt(.72,.74,.77);t.push({name:s.name||"mesh",verts:h,normals:c,color:[d.r,d.g,d.b],material:s.material?.name||"steel"})}),t}function Sd(n,t={}){let e=Wb(n),i=new Date,s=[],r=h=>s.push(h);r("; FBX 7.4.0 project file"),r("; VRINGON CAD \u2014 revolve part (mm)"),r(""),r("FBXHeaderExtension:  {"),r("	FBXHeaderVersion: 1003"),r("	FBXVersion: 7400"),r(`	CreationTimeStamp:  {
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
	}`),r("}"),r("Objects:  {");let l=[];e.forEach((h,c)=>{let d=2e6+c,u=3e6+c,f=4e6+c;l.push({gid:d,mid:u,matid:f});let m=h.verts.length/3,x=[];for(let y=0;y<m;y+=3)x.push(y,y+1,-(y+2)-1);r(`	Geometry: ${d}, "Geometry::${bd(h.name)}", "Mesh" {`),r(`		Vertices: *${h.verts.length} {
			a: ${h.verts.map(ua).join(",")}
		}`),r(`		PolygonVertexIndex: *${x.length} {
			a: ${x.join(",")}
		}`),r("		GeometryVersion: 124"),h.normals.length===h.verts.length&&r(`		LayerElementNormal: 0 {
			Version: 101
			Name: ""
			MappingInformationType: "ByPolygonVertex"
			ReferenceInformationType: "Direct"
			Normals: *${h.normals.length} {
				a: ${h.normals.map(ua).join(",")}
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
		}`),r("	}"),r(`	Model: ${u}, "Model::${bd(h.name)}", "Mesh" {
		Version: 232
		Properties70:  {
			P: "InheritType", "enum", "", "",1
			P: "DefaultAttributeIndex", "int", "Integer", "",0
			P: "Lcl Translation", "Lcl Translation", "", "A",0,0,0
		}
		Shading: T
		Culling: "CullingOff"
	}`);let[p,g,M]=h.color;r(`	Material: ${f}, "Material::${bd(h.material)}", "" {
		Version: 102
		ShadingModel: "phong"
		MultiLayer: 0
		Properties70:  {
			P: "ShadingModel", "KString", "", "", "Phong"
			P: "DiffuseColor", "Color", "", "A",${ua(p)},${ua(g)},${ua(M)}
			P: "SpecularColor", "Color", "", "A",0.5,0.5,0.5
			P: "Shininess", "Number", "", "A",40
			P: "Opacity", "Number", "", "A",1
		}
	}`)}),r("}"),r("Connections:  {");for(let{gid:h,mid:c,matid:d}of l)r(`	;Model::mesh, Model::RootNode
	C: "OO",${c},0`),r(`	;Geometry::mesh, Model::mesh
	C: "OO",${h},${c}`),r(`	;Material::mat, Model::mesh
	C: "OO",${d},${c}`);return r("}"),r(`Takes:  {
	Current: ""
}`),s.join(`
`)+`
`}function Vc(n){for(let t=n;t;t=t.parent)if(t.userData?.isMarker||String(t.name).startsWith("marker:"))return!0;return!1}function wd(n,t=null){n.updateWorldMatrix(!0,!0);let e=[],i=new z;return n.traverse(s=>{if(!s.isMesh||!s.visible||!s.geometry||s.name.endsWith(":cut")||s.name.startsWith("ghost")||Vc(s)||t&&!t(s))return;let r=s.geometry.index?s.geometry.toNonIndexed():s.geometry,o=r.getAttribute("position"),a=[];for(let l=0;l<o.count;l++)i.fromBufferAttribute(o,l).applyMatrix4(s.matrixWorld),a.push(i.x,i.y,i.z);r!==s.geometry&&r.dispose(),e.push({name:s.name||"part",tris:a})}),e}var Ee=n=>{isFinite(n)||(n=0);let t=n.toFixed(5);return t==="-0.00000"?"0.00000":t},fs=n=>String(n).replace(/[^A-Za-z0-9_\- ]/g,"_");function ug(n,t="vringon_shaft"){let e=wd(n),i=[],s=0,r=T=>(s+=1,i.push(`#${s}=${T};`),s),o=r("APPLICATION_CONTEXT('core data for automotive mechanical design processes')");r(`APPLICATION_PROTOCOL_DEFINITION('international standard','automotive_design',2000,#${o})`);let a=r(`PRODUCT_CONTEXT('',#${o},'mechanical')`),l=r(`PRODUCT('${fs(t)}','${fs(t)}','VRINGON revolve part',(#${a}))`),h=r(`PRODUCT_DEFINITION_FORMATION('','',#${l})`),c=r(`PRODUCT_DEFINITION_CONTEXT('part definition',#${o},'design')`),d=r(`PRODUCT_DEFINITION('design','',#${h},#${c})`),u=r(`PRODUCT_DEFINITION_SHAPE('','',#${d})`),f=r("(LENGTH_UNIT()NAMED_UNIT(*)SI_UNIT(.MILLI.,.METRE.))"),m=r("(NAMED_UNIT(*)PLANE_ANGLE_UNIT()SI_UNIT($,.RADIAN.))"),x=r("(NAMED_UNIT(*)SI_UNIT($,.STERADIAN.)SOLID_ANGLE_UNIT())"),p=r(`UNCERTAINTY_MEASURE_WITH_UNIT(LENGTH_MEASURE(0.01),#${f},'distance_accuracy_value','')`),g=r(`(GEOMETRIC_REPRESENTATION_CONTEXT(3)GLOBAL_UNCERTAINTY_ASSIGNED_CONTEXT((#${p}))GLOBAL_UNIT_ASSIGNED_CONTEXT((#${f},#${m},#${x}))REPRESENTATION_CONTEXT('Context #1','3D Context'))`),M=r("CARTESIAN_POINT('',(0.,0.,0.))"),y=r("DIRECTION('',(0.,0.,1.))"),_=r("DIRECTION('',(1.,0.,0.))"),S=r(`AXIS2_PLACEMENT_3D('',#${M},#${y},#${_})`),w=[];for(let T of e){let{tris:L,name:D}=T,P=new Map,G=[],I=[],A=[],B=[];for(let tt=0;tt<L.length;tt+=3){let ct=`${L[tt].toFixed(4)}_${L[tt+1].toFixed(4)}_${L[tt+2].toFixed(4)}`,Et=P.get(ct);if(Et===void 0){Et=G.length,P.set(ct,Et);let St=r(`CARTESIAN_POINT('',(${Ee(L[tt])},${Ee(L[tt+1])},${Ee(L[tt+2])}))`);G.push(St),I.push(r(`VERTEX_POINT('',#${St})`)),A.push(L[tt],L[tt+1],L[tt+2])}B.push(Et)}let F=(tt,ct)=>A[tt*3+ct],$=new Map,X=(tt,ct)=>{let Et=tt<ct?`${tt}_${ct}`:`${ct}_${tt}`,St=$.get(Et);if(!St){let et=tt<ct?tt:ct,dt=tt<ct?ct:tt,V=F(dt,0)-F(et,0),at=F(dt,1)-F(et,1),nt=F(dt,2)-F(et,2),xt=Math.hypot(V,at,nt)||1,R=r(`DIRECTION('',(${Ee(V/xt)},${Ee(at/xt)},${Ee(nt/xt)}))`),U=r(`VECTOR('',#${R},${Ee(xt)})`),O=r(`LINE('',#${G[et]},#${U})`);St=r(`EDGE_CURVE('',#${I[et]},#${I[dt]},#${O},.T.)`),$.set(Et,St)}return{ec:St,fwd:tt<ct}},ot=[];for(let tt=0;tt<B.length;tt+=3){let ct=B[tt],Et=B[tt+1],St=B[tt+2];if(ct===Et||Et===St||ct===St)continue;let et=F(ct,0),dt=F(ct,1),V=F(ct,2),at=F(Et,0),nt=F(Et,1),xt=F(Et,2),R=F(St,0),U=F(St,1),O=F(St,2),k=(nt-dt)*(O-V)-(xt-V)*(U-dt),Y=(xt-V)*(R-et)-(at-et)*(O-V),j=(at-et)*(U-dt)-(nt-dt)*(R-et),Z=Math.hypot(k,Y,j);if(Z<1e-9)continue;k/=Z,Y/=Z,j/=Z;let yt=at-et,wt=nt-dt,gt=xt-V,Nt=Math.hypot(yt,wt,gt)||1;yt/=Nt,wt/=Nt,gt/=Nt;let H=X(ct,Et),te=X(Et,St),Xt=X(St,ct),N=r(`ORIENTED_EDGE('',*,*,#${H.ec},${H.fwd?".T.":".F."})`),b=r(`ORIENTED_EDGE('',*,*,#${te.ec},${te.fwd?".T.":".F."})`),Q=r(`ORIENTED_EDGE('',*,*,#${Xt.ec},${Xt.fwd?".T.":".F."})`),it=r(`EDGE_LOOP('',(#${N},#${b},#${Q}))`),ut=r(`FACE_OUTER_BOUND('',#${it},.T.)`),vt=r(`CARTESIAN_POINT('',(${Ee(et)},${Ee(dt)},${Ee(V)}))`),bt=r(`DIRECTION('',(${Ee(k)},${Ee(Y)},${Ee(j)}))`),ft=r(`DIRECTION('',(${Ee(yt)},${Ee(wt)},${Ee(gt)}))`),pt=r(`AXIS2_PLACEMENT_3D('',#${vt},#${bt},#${ft})`),Tt=r(`PLANE('',#${pt})`);ot.push(r(`ADVANCED_FACE('',(#${ut}),#${Tt},.T.)`))}if(!ot.length)continue;let ht=r(`CLOSED_SHELL('',(${ot.map(tt=>"#"+tt).join(",")}))`);w.push(r(`MANIFOLD_SOLID_BREP('${fs(D)}',#${ht})`))}let E=r(`ADVANCED_BREP_SHAPE_REPRESENTATION('${fs(t)}',(#${S},${w.map(T=>"#"+T).join(",")}),#${g})`);r(`SHAPE_DEFINITION_REPRESENTATION(#${u},#${E})`);let v=new Date().toISOString().slice(0,19);return["ISO-10303-21;","HEADER;","FILE_DESCRIPTION(('VRINGON revolve faceted B-Rep export'),'2;1');",`FILE_NAME('${fs(t)}.step','${v}',('VRINGON CAD'),('VRINGON Inc.'),'VRINGON CAD 1.0','VRINGON CAD','');`,"FILE_SCHEMA(('AUTOMOTIVE_DESIGN { 1 0 10303 214 1 1 1 1 }'));","ENDSEC;","DATA;",...i,"ENDSEC;","END-ISO-10303-21;",""].join(`
`)}function dg(n){let t=wd(n),e=["# VRINGON revolve export (mm)"],i=1;for(let s of t){e.push(`o ${fs(s.name)}`);let r=s.tris,o=r.length/3;for(let a=0;a<r.length;a+=3)e.push(`v ${Ee(r[a])} ${Ee(r[a+1])} ${Ee(r[a+2])}`);for(let a=0;a<o;a+=3)e.push(`f ${i+a} ${i+a+1} ${i+a+2}`);i+=o}return e.push(""),e.join(`
`)}function fg(n){let t=new Ce;return n.traverse(e=>{if(e.isMesh&&!e.name.endsWith(":cut")&&!e.name.startsWith("ghost")&&!Vc(e)){let i=new jt(e.geometry,e.material);i.applyMatrix4(e.matrixWorld),t.add(i)}}),new Uc().parse(t,{binary:!0})}function pg(n){let t=new Ce;return n.traverse(e=>{if(e.isMesh&&!e.name.endsWith(":cut")&&!e.name.startsWith("ghost")&&!Vc(e)){let i=new jt(e.geometry,e.material);i.name=e.name,i.applyMatrix4(e.matrixWorld),t.add(i)}}),new Promise((e,i)=>new ds().parse(t,e,i,{binary:!0}))}function mg(n){let t=new Ce;return n.traverse(e=>{if(e.isMesh&&!e.name.endsWith(":cut")&&!e.name.startsWith("ghost")&&!Vc(e)){let i=new jt(e.geometry,e.material);i.name=e.name,i.applyMatrix4(e.matrixWorld),t.add(i)}}),t}function gg(n){return new Fc().parse(mg(n),null,{binary:!1})}function xg(n){return new zc().parseAsync(mg(n),{includeAnchoringProperties:!1})}function _g(n,t,e={}){let i=wd(n),s=fs(t.id||t.name||"shaft").replace(/[^A-Za-z0-9_]/g,"_")||"shaft",r=Rc(t,Ac(t.material)),o=l=>`"${String(l).replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`,a=[];a.push("#usda 1.0","(",`    defaultPrim = "${s}"`,"    metersPerUnit = 0.001",'    upAxis = "Y"','    doc = "VRINGON revolve part \u2014 generated from shaft DSL"',")",""),a.push(`def Xform "${s}" (`,'    kind = "component"',")","{"),a.push(`    custom string vringon:dsl_version = ${o(t.dsl||"vringon-shaft/1.0")}`),a.push(`    custom string vringon:dsl_json = ${o(JSON.stringify(t))}`),a.push(`    custom string vringon:name_ko = ${o(t.name_ko||"")}`),a.push(`    custom string vringon:material = ${o(t.material||"")}`),a.push(`    custom double vringon:length_mm = ${ye(t)}`),a.push(`    custom double vringon:max_diameter_mm = ${ni(t)}`),a.push(`    custom double vringon:volume_mm3 = ${r.volume_mm3.toFixed(3)}`),a.push(`    custom double vringon:mass_g = ${r.mass_g.toFixed(3)}`),a.push(`    custom double[] vringon:segment_lengths_mm = [${(t.segments||[]).map(l=>l.length).join(", ")}]`),a.push(`    custom double[] vringon:segment_diameters_mm = [${(t.segments||[]).map(l=>l.type==="taper"?l.d_start:l.diameter).join(", ")}]`),a.push(`    custom string[] vringon:segment_types = [${(t.segments||[]).map(l=>o(l.type)).join(", ")}]`),a.push(`    custom string[] vringon:features = [${(t.features||[]).map(l=>o(l.type)).join(", ")}]`),a.push("");for(let l of i){let h=l.tris,c=h.length/3,d=[];for(let _=0;_<h.length;_+=3)d.push(`(${Ee(h[_])}, ${Ee(h[_+1])}, ${Ee(h[_+2])})`);let u=new Array(c/3).fill(3).join(", "),f=Array.from({length:c},(_,S)=>S).join(", "),m=1/0,x=1/0,p=1/0,g=-1/0,M=-1/0,y=-1/0;for(let _=0;_<h.length;_+=3)m=Math.min(m,h[_]),g=Math.max(g,h[_]),x=Math.min(x,h[_+1]),M=Math.max(M,h[_+1]),p=Math.min(p,h[_+2]),y=Math.max(y,h[_+2]);a.push(`    def Mesh "${fs(l.name).replace(/[^A-Za-z0-9_]/g,"_")||"mesh"}"`,"    {"),a.push(`        float3[] extent = [(${Ee(m)}, ${Ee(x)}, ${Ee(p)}), (${Ee(g)}, ${Ee(M)}, ${Ee(y)})]`),a.push(`        int[] faceVertexCounts = [${u}]`),a.push(`        int[] faceVertexIndices = [${f}]`),a.push(`        point3f[] points = [${d.join(", ")}]`),a.push('        uniform token subdivisionScheme = "none"'),a.push("        color3f[] primvars:displayColor = [(0.72, 0.74, 0.77)]"),a.push("    }")}return a.push("}",""),a.join(`
`)}function yg(n,t={}){return om(Vr(n,{scale:"auto",...t}))}function vg(n,t={}){return ta(Vr(n,{scale:"auto",...t}))}function Mg(n){return JSON.stringify(n,null,2)}function wn(n,t,e="application/octet-stream"){let i=n instanceof Blob?n:new Blob([n],{type:e}),s=URL.createObjectURL(i),r=document.createElement("a");return r.href=s,r.download=t,document.body.appendChild(r),r.click(),setTimeout(()=>{URL.revokeObjectURL(s),r.remove()},800),i.size}var Xs="e95cb8b0",J=n=>document.getElementById(n),pa=n=>new Promise(t=>setTimeout(t,n)),Hc=(n,t=1)=>Number.isFinite(n)?(Math.round(n*10**t)/10**t).toString():"\u2014";function Ye(n,t=!1){let e=document.createElement("div");e.className=`toast${t?" ok":""}`,e.textContent=n,J("toasts").appendChild(e),setTimeout(()=>e.remove(),4200)}var W={mode:"static",serverStep:!1,samples:[],sample:null,source:null,raster:null,extraction:null,dsl:null,pristine:null,gold:null,built:null,verify:null,mates:null,assembly:null,sim:null,marker:null,simOn:!1,section:!1,showingDrawing:!1,showingGolden:!1},$c=[{n:1,label:"\uB3C4\uBA74 \uC785\uB825",cta:"\uB3C4\uBA74 \uBD88\uB7EC\uC624\uAE30",note:"\uB3C4\uBA74\uC744 \uC2DC\uD2B8\uC5D0 \uC62C\uB9BD\uB2C8\uB2E4"},{n:2,label:"\uD310\uB3C5 \xB7 \uC0AC\uC591",cta:"\uD310\uB3C5 \uC2DC\uC791",note:"\uB3C4\uBA74\uC744 \uC77D\uC5B4 \uCE58\uC218 \uC0AC\uC591\uC73C\uB85C \uC62E\uAE41\uB2C8\uB2E4"},{n:3,label:"3D CAD",cta:"3D CAD \uB9CC\uB4E4\uAE30",note:"\uC0AC\uC591\uB300\uB85C 3D \uD615\uC0C1\uC744 \uB9CC\uB4ED\uB2C8\uB2E4"},{n:4,label:"\uAC80\uC99D",cta:"\uAC80\uC99D \uC2E4\uD589",note:"\uC0AC\uC591\uC73C\uB85C \uB2E4\uC2DC \uADF8\uB9B0 \uC678\uD615\uC744 \uB3C4\uBA74\uACFC \uB300\uC870\uD569\uB2C8\uB2E4"}],ae={done:0,running:0,active:!1},Wc=J("stage"),Bn=new yc({antialias:!0});Bn.setPixelRatio(Math.min(devicePixelRatio,2));Bn.outputColorSpace=$e;Bn.toneMapping=Fo;Bn.toneMappingExposure=1.5;Bn.shadowMap.enabled=!0;Bn.shadowMap.type=Tl;Bn.localClippingEnabled=!0;Wc.appendChild(Bn.domElement);var En=new ui;En.background=new Gt(789520);var Xb=new Ur(Bn);En.environment=Xb.fromScene(new wc,.04).texture;var nn=new sn(38,1,.5,8e3);nn.position.set(120,90,160);var Xn=new Sc(nn,Bn.domElement);Xn.enableDamping=!0;Xn.dampingFactor=.075;Xn.autoRotateSpeed=1.6;var qn=new Ar(16777215,2.4);qn.position.set(200,360,240);qn.castShadow=!0;qn.shadow.mapSize.set(2048,2048);qn.shadow.camera.near=20;qn.shadow.camera.far=1400;qn.shadow.camera.left=qn.shadow.camera.bottom=-260;qn.shadow.camera.right=qn.shadow.camera.top=260;qn.shadow.bias=-.0012;qn.shadow.normalBias=.6;En.add(qn,new Ar(13161215,.5).translateX(-320).translateY(180).translateZ(140),new Co(12897501,3816776,1.1),new Po(16777215,.25));var qc=new No(1200,48,2763316,1710624);qc.material.transparent=!0;qc.material.opacity=.55;En.add(qc);var Rd=new jt(new fo(600,64).rotateX(-Math.PI/2),new wo({opacity:.4}));Rd.receiveShadow=!0;En.add(Rd);function Id(){let n=Wc.clientWidth,t=Wc.clientHeight;!n||!t||(Bn.setSize(n,t),nn.aspect=n/t,nn.updateProjectionMatrix())}new ResizeObserver(Id).observe(Wc);Id();var Gc=!0,qb=new Lo;Bn.setAnimationLoop(()=>{Xn.update();let n=nn.position.y<Xn.target.y;qc.visible=Gc&&!n,Rd.visible=!n;let t=qb.getDelta();if(W.sim){W.sim.update(t);let e=performance.now();W.sim.state.mode!=="idle"&&e-bg>200&&(bg=e,zi())}Bn.render(En,nn)});var Me=null,Sg=Uu();function wg(){Me&&(En.remove(Me),Me.traverse(n=>{n.isMesh&&n.geometry?.dispose()}),Me=null)}function Pd(){if(!Me)return;let n=new In().setFromObject(Me),t=n.getCenter(new z),e=Math.max(10,n.getSize(new z).length()/2);Xn.target.copy(t);let i=mi.degToRad(nn.fov/2),s=Math.atan(Math.tan(i)*Math.max(.6,nn.aspect)),r=e/Math.sin(Math.min(i,s))*1.1;nn.position.copy(t).add(new z(.55,.42,.72).normalize().multiplyScalar(r)),nn.near=Math.max(.2,e/80),nn.far=e*80,nn.updateProjectionMatrix(),Xn.update()}J("tFit").onclick=Pd;J("tGrid").onclick=n=>{Gc=!Gc,n.currentTarget.classList.toggle("on",!Gc)};J("tSpin").onclick=n=>{Xn.autoRotate=!Xn.autoRotate,n.currentTarget.classList.toggle("on",Xn.autoRotate)};var Eg=new yn(new z(0,0,-1),0);J("btnSection").onclick=()=>{W.section=!W.section,W.built&&Fu(W.built,W.section?[Eg]:null),J("btnSection").classList.toggle("on",W.section),J("btnSection").textContent=W.section?"\uB2E8\uBA74 \uB2EB\uAE30":"\uB2E8\uBA74 \uBCF4\uAE30"};function Ys(n){J("sheet").classList.toggle("show",n),W.showingDrawing=n,J("btnDrawing").classList.toggle("on",n)}J("btnDrawing").onclick=()=>Ys(!W.showingDrawing);function Td(n,t){let e=J("sheetImg");e.src=n,J("sheetCap").textContent=t||"",J("overlay").innerHTML=""}W.sheetMode="original";function Tg(){if(W.source){if(W.sheetMode==="regen"&&W.dsl&&Oe(W.dsl).ok){let n=ta(Vr(W.dsl,{scale:"auto",seed:1}));Td(Ad(n),"\uC7AC\uC0DD\uC131 \uB3C4\uBA74 \xB7 \uC9C0\uAE08 \uC0AC\uC591\uC73C\uB85C \uB2E4\uC2DC \uADF8\uB9BC (\uC6D0\uBCF8 \uC544\uB2D8)"),J("overlay").innerHTML=""}else Td(W.source.svg?Ad(W.source.svg):W.source.image,W.source.kind==="sample"?`\uC0D8\uD50C \uB3C4\uBA74 \xB7 ${W.source.name}`:W.source.kind==="synthetic"?`\uD569\uC131 \uB3C4\uBA74 \xB7 ${W.source.name}`:`\uC5C5\uB85C\uB4DC \xB7 ${W.source.name}`),Yc();J("btnRegen").classList.toggle("on",W.sheetMode==="regen"),J("btnRegen").textContent=W.sheetMode==="regen"?"\uC6D0\uBCF8 \uB3C4\uBA74":"\uC7AC\uC0DD\uC131 \uB3C4\uBA74"}}J("btnRegen").onclick=()=>{W.sheetMode=W.sheetMode==="regen"?"original":"regen",Ys(!0),Tg()};function Yc(){let n=J("overlay");n.innerHTML="";let t=W.extraction?.silhouette;if(!t||!W.dsl||!W.source?.imgW)return;let{imgW:e,imgH:i}=W.source;if(n.setAttribute("viewBox",`0 0 ${e} ${i}`),n.setAttribute("preserveAspectRatio","none"),!Oe(W.dsl).ok)return;let r=ye(W.dsl),o=t.bbox,a=t.axis,l=(o.x1-o.x0+1)/r,h=_i(W.dsl,10).points,c=h.map(f=>`${(o.x0+f.x*l).toFixed(1)},${(a-f.r*l).toFixed(1)}`).join(" "),d=h.map(f=>`${(o.x0+f.x*l).toFixed(1)},${(a+f.r*l).toFixed(1)}`).join(" "),u=Math.max(1.5,e/900);n.innerHTML=`<polyline points="${c}" fill="none" stroke="#5B6BF0" stroke-width="${u}" stroke-linejoin="round" opacity=".95"/>
    <polyline points="${d}" fill="none" stroke="#5B6BF0" stroke-width="${u}" stroke-linejoin="round" opacity=".95"/>
    <line x1="${o.x0}" y1="${a}" x2="${o.x1}" y2="${a}" stroke="#5B6BF0" stroke-width="${u*.6}" stroke-dasharray="${u*6} ${u*3}" opacity=".6"/>`}function fa(){J("stepper").classList.toggle("show",ae.active);for(let i of document.querySelectorAll("#stepper .st")){let s=Number(i.dataset.step);i.classList.toggle("done",s<=ae.done&&s!==ae.running),i.classList.toggle("on",s===ae.done+1||s===ae.running),i.classList.toggle("run",s===ae.running),i.disabled=s>ae.done+1||!!ae.running}let n=$c[ae.done],t=J("stageNext");t.style.display=ae.active&&n&&n.cta&&!ae.running?"":"none",t.disabled=!!ae.running,t.textContent=n?.cta||"";let e=J("stepperNote");e.classList.toggle("show",ae.active&&!!n?.note&&!ae.running),e.textContent=n?.note||"",J("runBlock").style.display=ae.active?"":"none",J("runSteps").innerHTML=$c.map(i=>{let s=i.n<=ae.done?"done":i.n===ae.running?"run":"",r=i.n===2?W.mode==="live"?"\uC11C\uBC84 AI \uD310\uB3C5":W.source?.kind==="sample"&&W.sample?.files?.extracted?"\uBBF8\uB9AC \uD310\uB3C5\uD55C \uACB0\uACFC":"\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC2E4\uD589":"\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC2E4\uD589";return`<div class="gen-step ${s}"><span class="dot"></span>${i.n}. ${i.label}<span style="color:var(--text-3);font-size:11px;margin-left:6px">${r}</span></div>`}).join(""),J("btnGolden").classList.toggle("show",!!W.gold&&ae.done>=2),J("btnSection").classList.toggle("show",ae.done>=3),J("btnDrawing").classList.toggle("show",ae.done>=3),J("btnRegen").classList.toggle("show",ae.done>=2),J("btnSim").classList.toggle("show",ae.done>=3)}function yi(n,t,e,i){J("gen").classList.toggle("on",n),t&&(J("genTitle").textContent=t),e!==void 0&&(J("genSub").textContent=e),J("genBar").style.width=`${ae.done/$c.length*100}%`,J("genSteps").innerHTML=(i||[]).map(s=>`<div class="gen-step ${s.state||""}"><span class="dot"></span>${s.text}</div>`).join("")}J("stageNext").onclick=()=>Zc(ae.done+1);for(let n of document.querySelectorAll("#stepper .st"))n.onclick=()=>Zc(Number(n.dataset.step));async function Yb(n,t=2400,e=!1){let i=new Image;await new Promise((d,u)=>{i.onload=d,i.onerror=()=>u(new Error("\uC774\uBBF8\uC9C0\uB97C \uC5F4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4")),i.src=n});let s=i.naturalWidth||i.width,r=i.naturalHeight||i.height,o=e?Math.min(3,Math.max(1,3e3/Math.max(1,s))):Math.min(1.5,t/Math.max(1,s)),a=Math.max(400,Math.round(s*o)),l=Math.max(200,Math.round(r*o)),h=document.createElement("canvas");h.width=a,h.height=l;let c=h.getContext("2d",{willReadFrequently:!0});return c.fillStyle="#fff",c.fillRect(0,0,a,l),c.drawImage(i,0,0,a,l),{imageData:c.getImageData(0,0,a,l),w:a,h:l,png:h.toDataURL("image/png")}}var Ad=n=>"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n);async function Zb(n){let t=n.svg?Ad(n.svg):n.dataUrl,e=await Yb(t,2400,!!n.svg);W.source={kind:n.kind,name:n.name,id:n.id,image:n.svg?e.png:n.dataUrl,imgW:e.w,imgH:e.h,svg:n.svg||null},W.raster=e.imageData,W.gold=n.gold||null,W.sample=n.sample||null,Td(t,n.kind==="sample"?`\uC0D8\uD50C \uB3C4\uBA74 \xB7 ${n.name}`:n.kind==="synthetic"?`\uB9CC\uB4E0 \uB3C4\uBA74 \xB7 ${n.name}`:`\uC5C5\uB85C\uB4DC \xB7 ${n.name}`)}async function Zc(n){if(ae.running||!W.source)return;let t=$c[n-1];if(t){ae.running=n,fa(),yi(!0,`${n}\uB2E8\uACC4 \xB7 ${t.label}`,t.note);try{n===1?(Ys(!0),J("stageEmpty").style.display="none",await pa(300)):n===2?await jb():n===3?await nS():n===4&&await iS(),ae.done=Math.max(ae.done,n)}catch(e){console.error(e),Ye(`${n}\uB2E8\uACC4 \uC2E4\uD328: ${e.message}`)}finally{ae.running=0,yi(!1),fa()}}}function Jb(){let n=document.querySelector("#methodSeg button.on")?.dataset.m||"auto";return n==="server"?W.mode==="live"?"server":"silhouette":n==="silhouette"?"silhouette":W.mode==="live"?"server":W.source.kind==="sample"&&W.sample?.files?.extracted?"replay":"silhouette"}async function jb(){let n=Jb(),t=Number(J("overallLen").value)||(W.gold?ye(W.gold):null),e=[{text:"\uB3C4\uBA74\uC5D0\uC11C \uBD80\uD488 \uC678\uD615 \uCE21\uC815",state:"run"},{text:n==="server"?"AI \uD310\uB3C5":n==="replay"?"\uBBF8\uB9AC \uD310\uB3C5\uD55C \uACB0\uACFC \uBD88\uB7EC\uC624\uAE30":"\uC678\uD615\uC5D0\uC11C \uCE58\uC218 \uC0AC\uC591 \uB9CC\uB4E4\uAE30"},{text:"\uD615\uC0C1 \uAC80\uC99D"}];yi(!0,"2\uB2E8\uACC4 \xB7 \uD310\uB3C5","",e);let i=performance.now();await pa(30);let s=lm(W.raster,{overallLength:t||100,id:W.source.id,name_ko:W.source.name});e[0].state="done",e[1].state="run",yi(!0,"2\uB2E8\uACC4 \xB7 \uD310\uB3C5","",e);let r=null;if(n==="replay"){let a=await fetch(`./samples/${W.sample.id}/${W.sample.files.extracted}?v=${Xs}`).then(l=>l.json());r={method:"replay",dsl:Bs(a.dsl),dims_read:a.dims_read||[],notes:[...a.notes||[]],serverVerify:a.verify,provider:a.provider,tier:a.tier,repaired:a.repaired,ms:a.elapsed_ms,evaluated:a.evaluated},r.notes.unshift(`\uC11C\uBC84\uAC00 \uBBF8\uB9AC \uD310\uB3C5\uD574 \uC800\uC7A5\uD55C \uACB0\uACFC\uC785\uB2C8\uB2E4 (${((a.elapsed_ms||0)/1e3).toFixed(1)}\uCD08${a.repaired?", \uC790\uB3D9 \uC218\uC815 1\uD68C":""}).`)}else if(n==="server"){s.ok||Ye("\uC678\uD615\uC744 \uC7AC\uC9C0 \uBABB\uD574 \uD78C\uD2B8 \uC5C6\uC774 \uD310\uB3C5\uD569\uB2C8\uB2E4");let a=s.ok?{draft:s.dsl,silhouette:{L:s.silhouette.L,top:Array.from(s.silhouette.top),bottom:Array.from(s.silhouette.bottom)},sectioned:!!s.dsl.bore}:null,l=J("tierPlan").checked?"plan":"text",h=await cm(W.source.image,{hints:a,overallLength:Number(J("overallLen").value)||null,tier:l});if(h.not_revolve)throw Ed(`\uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4\uB85C \uBCF4\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. ${h.reason}`,(h.notes||[]).filter(c=>c!==h.reason)),new Error("\uD68C\uC804\uCCB4 \uB3C4\uBA74\uC774 \uC544\uB2D9\uB2C8\uB2E4: "+h.reason);r={method:"server",dsl:Bs(h.dsl),dims_read:h.dims_read||[],notes:h.notes||[],serverVerify:h.verify,provider:h.provider,tier:h.tier,repaired:h.repaired,ms:h.elapsed_ms}}else{if(!s.ok)throw Ed("\uB3C4\uBA74\uC5D0\uC11C \uBD80\uD488 \uC678\uD615\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.",s.notes||[]),new Error(s.notes?.join(" ")||"\uBD80\uD488 \uC678\uD615\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4");s.plausible===!1&&Ed("\uD310\uB3C5 \uACB0\uACFC\uAC00 \uD68C\uC804\uCCB4 \uC815\uBA74\uB3C4\uB2F5\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uACB0\uACFC\uB294 \uCC38\uACE0\uC6A9\uC785\uB2C8\uB2E4.",s.reasons||[]),r={method:"silhouette",dsl:s.dsl,dims_read:[],notes:s.notes,ms:performance.now()-i},t||r.notes.unshift("\uC804\uCCB4 \uAE38\uC774\uB97C \uC785\uB825\uD558\uC9C0 \uC54A\uC544 100mm \uB85C \uAC00\uC815\uD588\uC2B5\uB2C8\uB2E4. \uC67C\uCABD '\uC804\uCCB4 \uAE38\uC774'\uC5D0 \uAC12\uC744 \uB123\uC73C\uBA74 \uC2E4\uC81C \uCE58\uC218\uAC00 \uB9DE\uC2B5\uB2C8\uB2E4.")}r.silhouette=s.ok?s.silhouette:null,r.draft=s.ok?s.dsl:null,(!r.dsl.id||r.dsl.id==="extracted")&&(r.dsl.id=W.source.id||"shaft"),r.dsl.name_ko||(r.dsl.name_ko=W.source.name||"\uD68C\uC804\uCCB4"),r.draft&&(r.draft.id=r.dsl.id,r.draft.name_ko=r.dsl.name_ko),e[1].state="done",e[2].state="run",yi(!0,"2\uB2E8\uACC4 \xB7 \uD310\uB3C5","",e);let o=Oe(r.dsl);!o.ok&&r.draft&&(r.notes.push(`\uD310\uB3C5 \uACB0\uACFC\uAC00 \uD615\uC0C1 \uAC80\uC99D\uC5D0 \uAC78\uB824(${o.errors[0]}) \uC678\uD615 \uD310\uB3C5 \uACB0\uACFC\uB85C \uB300\uCCB4\uD588\uC2B5\uB2C8\uB2E4.`),r.dsl=r.draft),W.extraction=r,Ag(r.dsl,{pristine:!0}),e[2].state="done",yi(!0,"2\uB2E8\uACC4 \xB7 \uD310\uB3C5","",e),Kb(),Yc(),Ye(`\uD310\uB3C5 \uC644\uB8CC \xB7 \uC138\uADF8\uBA3C\uD2B8 ${r.dsl.segments.length}\uAC1C${r.dims_read?.length?`, \uC77D\uC740 \uCE58\uC218 ${r.dims_read.length}\uAC1C`:""}`,!0),J("jsonBlock").scrollIntoView({behavior:"smooth",block:"start"})}function Ed(n,t){let e=J("unsuitable");e&&(e.style.display="block",e.innerHTML=`<b>${Bi(n)}</b>${t?.length?`<ul style="margin:6px 0 0 16px">${t.slice(0,5).map(i=>`<li>${Bi(i)}</li>`).join("")}</ul>`:""}
    <div style="margin-top:8px"><a href="./guide.html" target="_blank" class="btn btn-ghost btn-sm">\uC5B4\uB5A4 \uB3C4\uBA74\uC744 \uC62C\uB824\uC57C \uD558\uB098\uC694</a></div>`,Ye(n))}function Kb(){let n=W.extraction;if(!n)return;J("extractBlock").style.display="";let t=n.method==="server"?`AI \uD310\uB3C5${n.tier==="plan"?" \xB7 \uC815\uBC00":""}${n.repaired?" \xB7 \uC790\uB3D9 \uC218\uC815":""}`:n.method==="replay"?"\uBBF8\uB9AC \uD310\uB3C5\uD55C \uACB0\uACFC":"\uC678\uD615 \uD310\uB3C5";J("exMethod").textContent=t;let e=n.serverVerify?.confidence??(n.method==="silhouette"?.6:null);J("exConf").textContent=e==null?"\u2014":`${Math.round(e*100)}%`,J("exConfBar").style.width=e==null?"0":`${Math.round(e*100)}%`,J("exDims").textContent=n.dims_read?.length?`${n.dims_read.length}\uAC1C`:"\uC678\uD615\uB9CC (\uBB38\uC790 \uC548 \uC77D\uC74C)",J("exMs").textContent=n.ms?`${(n.ms/1e3).toFixed(1)}\uCD08`:"\u2014",J("exNotes").innerHTML=(n.notes||[]).slice(0,6).map(i=>`<div>\xB7 ${Bi(i)}</div>`).join("")}var Bi=n=>String(n).replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t]);function Ag(n,{pristine:t=!1}={}){W.dsl=n,t&&(W.pristine=JSON.stringify(n,null,2));let e=J("jsonText");e.value=JSON.stringify(n,null,2),e.classList.remove("bad"),J("jsonBlock").style.display="",J("segBlock").style.display="",J("featBlock").style.display="";let i=Oe(n);J("jsonMeta").textContent=`${n.name_ko||n.id||"\uD68C\uC804\uCCB4"} \xB7 \uC138\uADF8\uBA3C\uD2B8 ${n.segments.length}`;let s=J("jsonMsg");s.classList.toggle("bad",!i.ok),s.textContent=i.ok?i.warnings.length?`\uC8FC\uC758: ${i.warnings.join(" / ")}`:"\uD615\uC0C1 \uAC80\uC99D \uD1B5\uACFC. \uAC12\uC744 \uACE0\uCE58\uBA74 3D, \uB3C4\uBA74, \uAC80\uC99D\uC774 \uB2E4\uC2DC \uACC4\uC0B0\uB429\uB2C8\uB2E4.":`\uD615\uC0C1 \uC624\uB958: ${i.errors.join(" / ")}`,Qb(),tS(),eS()}function Zs(n,t=""){let e=Oe(n);return e.ok?(n.meta={...n.meta||{},source:"edited"},Ag(n),ae.done>=3&&(Rg(),Ug()),ae.done>=4&&Ig(),W.assembly&&Ng(),W.sheetMode==="regen"?Tg():Yc(),!0):(Ye(`\uACE0\uCE60 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4: ${e.errors[0]}`),!1)}J("btnBuild").onclick=()=>{let n;try{n=JSON.parse(J("jsonText").value)}catch(t){J("jsonText").classList.add("bad"),J("jsonMsg").classList.add("bad"),J("jsonMsg").textContent=`JSON \uBB38\uBC95 \uC624\uB958: ${t.message}`;return}n=Bs(n),Zs(n)&&Ye("\uC0AC\uC591\uC744 \uC801\uC6A9\uD588\uC2B5\uB2C8\uB2E4",!0)};J("btnRevert").onclick=()=>{W.pristine&&(Zs(JSON.parse(W.pristine)),Ye("\uD310\uB3C5 \uACB0\uACFC\uB85C \uB418\uB3CC\uB838\uC2B5\uB2C8\uB2E4"))};J("btnGolden").onclick=()=>{W.gold&&(W.showingGolden=!W.showingGolden,J("btnGolden").classList.toggle("on",W.showingGolden),J("btnGolden").textContent=W.showingGolden?"\uD310\uB3C5 \uACB0\uACFC\uB85C":"\uC815\uB2F5 \uC0AC\uC591 \uBCF4\uAE30",Zs(JSON.parse(JSON.stringify(W.showingGolden?W.gold:W.pristine?JSON.parse(W.pristine):W.dsl))),Ye(W.showingGolden?"\uC815\uB2F5 \uC0AC\uC591\uC744 \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4 (\uB3C4\uBA74\uC744 \uB9CC\uB4E0 \uC6D0\uBCF8)":"\uD310\uB3C5 \uACB0\uACFC\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4",!0))};function Qb(){let n=J("segRows"),t=W.dsl;t&&(n.innerHTML=t.segments.map((e,i)=>{let s=e.type==="taper"?`<span style="display:flex;gap:3px;align-items:center"><input data-k="d_start" data-i="${i}" type="number" step="0.5" value="${e.d_start}" style="width:52px"/>\u2192<input data-k="d_end" data-i="${i}" type="number" step="0.5" value="${e.d_end}" style="width:52px"/></span>`:e.type==="thread"?`<input data-k="spec" data-i="${i}" type="text" value="${e.spec||""}" style="width:78px"/>`:`<input data-k="diameter" data-i="${i}" type="number" step="0.5" value="${e.diameter}" style="width:60px"/>`;return`<tr data-i="${i}"><td class="n">${i+1}</td>
      <td><select data-k="type" data-i="${i}"><option value="cyl" ${e.type==="cyl"?"selected":""}>\uC6D0\uD1B5</option><option value="taper" ${e.type==="taper"?"selected":""}>\uD14C\uC774\uD37C</option><option value="thread" ${e.type==="thread"?"selected":""}>\uB098\uC0AC</option></select></td>
      <td><input data-k="length" data-i="${i}" type="number" step="0.5" value="${e.length}" style="width:56px"/></td>
      <td>${s}</td>
      <td><button class="x" data-del="${i}" title="\uC0AD\uC81C" style="width:20px;height:20px;border-radius:5px;color:var(--text-3)">\xD7</button></td></tr>`}).join(""))}J("segRows").addEventListener("change",n=>{let t=n.target,e=Number(t.dataset.i),i=t.dataset.k;if(!i)return;let s=JSON.parse(JSON.stringify(W.dsl)),r=s.segments[e];if(i==="type"){let o=r.diameter||r.d_start||20;t.value==="taper"?(r.type="taper",r.d_start=o,r.d_end=Math.max(1,o-2),delete r.diameter,delete r.spec,delete r.pitch):t.value==="thread"?(r.type="thread",r.diameter=Math.round(o),r.spec=`M${Math.round(o)}`,delete r.d_start,delete r.d_end,delete r.pitch):(r.type="cyl",r.diameter=o,delete r.d_start,delete r.d_end,delete r.spec,delete r.pitch)}else i==="spec"?(r.spec=t.value.trim(),delete r.diameter,delete r.pitch):r[i]=Number(t.value);Zs(Bs(s))});J("segRows").addEventListener("click",n=>{let t=n.target.closest("[data-del]");if(!t)return;let e=JSON.parse(JSON.stringify(W.dsl)),i=Number(t.dataset.del);if(e.segments.length<=1)return Ye("\uC138\uADF8\uBA3C\uD2B8\uB294 \uCD5C\uC18C \uD558\uB098\uC785\uB2C8\uB2E4");e.segments.splice(i,1),e.transitions=e.transitions.filter(s=>s.at!==i+1||i===e.segments.length).map(s=>({...s,at:s.at>i?s.at-1:s.at})),e.grooves=e.grooves.filter(s=>s.segment!==i).map(s=>({...s,segment:s.segment>i?s.segment-1:s.segment})),e.features=e.features.filter(s=>s.segment!==i).map(s=>s.segment>i?{...s,segment:s.segment-1}:s),Zs(e)});J("btnAddSeg").onclick=()=>{let n=JSON.parse(JSON.stringify(W.dsl)),t=n.segments[n.segments.length-1];n.segments.push({type:"cyl",length:20,diameter:Math.max(4,(t.diameter||t.d_end||20)-5)}),Zs(n)};J("segRows").addEventListener("mouseover",n=>{let t=n.target.closest("tr");t&&Ld(Number(t.dataset.i))});J("segRows").addEventListener("mouseout",()=>Ld(-1));function tS(){let n=W.dsl,t=J("featList");if(!n)return;let e=[];(n.transitions||[]).forEach((i,s)=>e.push({kind:"transitions",i:s,k:{chamfer:"\uBAA8\uB530\uAE30",fillet:"\uD544\uB81B",round:"\uB77C\uC6B4\uB4DC",undercut:"\uB3C4\uD53C\uD648"}[i.type]||i.type,v:`\uACBD\uACC4 ${i.at} \xB7 ${i.type==="chamfer"?`C${i.size}${i.angle&&i.angle!==45?`\xD7${i.angle}\xB0`:""}`:i.type==="undercut"?`${i.width}\xD7${i.depth}`:`R${i.radius}`}`})),(n.grooves||[]).forEach((i,s)=>e.push({kind:"grooves",i:s,k:"\uD648",v:`seg ${i.segment+1} \xB7 +${i.offset} \xB7 ${i.width}\xD7${i.depth}${i.kind?` (${i.kind})`:""}`})),(n.features||[]).forEach((i,s)=>e.push({kind:"features",i:s,k:{keyway:"\uD0A4\uD648",center_hole:"\uC13C\uD130\uAD6C\uBA4D",cross_hole:"\uD6A1\uAD6C\uBA4D",flat:"\uD3C9\uBA74",hex:"\uC721\uAC01",knurl:"\uB110\uB9C1",hex_socket:"\uC721\uAC01 \uC18C\uCF13"}[i.type]||i.type,v:i.type==="keyway"?`seg ${i.segment+1} \xB7 +${i.offset||0} \xB7 ${i.width}\xD7${i.depth} L${i.length}`:i.type==="center_hole"?`${i.end==="left"?"\uC67C\uCABD":"\uC624\uB978\uCABD"} \xB7 ${i.form||"A"}${i.d}`:i.type==="hex_socket"?`${i.end==="left"?"\uC67C\uCABD":"\uC624\uB978\uCABD"} \xB7 S${i.across_flats} \uAE4A\uC774 ${i.depth}`:i.type==="cross_hole"?`x${i.position} \xB7 \u2300${i.diameter}${i.through===!1?` \uAE4A\uC774 ${i.depth}`:" \uAD00\uD1B5"}`:i.type==="flat"?`seg ${i.segment+1} \xB7 +${i.offset||0} \xB7 L${i.length} \uAE4A\uC774 ${i.depth}${i.count===2?" \xD72":""}`:i.type==="hex"?`seg ${i.segment+1} \xB7 \uB300\uBCC0 ${i.across_flats}`:`seg ${i.segment+1} \xB7 L${i.length}`})),n.bore&&e.push({kind:"bore",i:0,k:"\uBCF4\uC5B4",v:`${n.bore.through?"\uAD00\uD1B5":`\uB9C9\uD798(${n.bore.from})`} \xB7 ${n.bore.segments.map(i=>`\u2300${i.diameter}\xD7${i.length}`).join(" + ")}`}),t.innerHTML=e.length?e.map(i=>`<div class="feat" data-kind="${i.kind}" data-i="${i.i}"><span class="k">${i.k}</span><span class="v">${Bi(i.v)}</span>${i.kind!=="bore"?'<button class="x" title="\uC0AD\uC81C">\xD7</button>':""}</div>`).join(""):'<div class="hint">\uC804\uC774\xB7\uD648\xB7\uD53C\uCC98\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</div>'}J("featList").addEventListener("click",n=>{let t=n.target.closest(".x");if(!t)return;let e=t.closest(".feat"),i=JSON.parse(JSON.stringify(W.dsl));i[e.dataset.kind].splice(Number(e.dataset.i),1),Zs(i)});J("featList").addEventListener("mouseover",n=>{let t=n.target.closest(".feat");t&&t.dataset.kind==="features"&&Cg(Number(t.dataset.i))});J("featList").addEventListener("mouseout",()=>Cg(-1));function Cg(n){let t=W.built?.ghosts;t&&(t.visible=n>=0,t.children.forEach(e=>{e.visible=e.userData.featureIndex===n}))}var Ws=null;function Ld(n){if(Ws&&(En.remove(Ws),Ws.geometry.dispose(),Ws=null),n<0||!W.dsl||!Me)return;let e=ii(W.dsl).segments[n];if(!e)return;let i=Math.max(e.ds,e.de)/2+.6,s=new Pn(i,i,e.x1-e.x0+.4,48,1,!0).rotateZ(-Math.PI/2);Ws=new jt(s,Sg.ghost),Ws.position.set(Me.position.x+(e.x0+e.x1)/2,Me.position.y,0),En.add(Ws)}function eS(){let n=W.dsl;if(!n)return;let t=Oe(n);if(J("mName").textContent=n.name_ko||n.name||n.id||"\uD68C\uC804\uCCB4",J("mLen").textContent=`${Hc(ye(n),2)} mm`,J("mDia").textContent=`\u2300${Hc(ni(n),2)} mm`,J("mMat").textContent=n.material||"\u2014",t.ok){let e=Rc(n,Ac(n.material));J("mMass").textContent=`${Hc(e.volume_cm3,2)} cm\xB3 \xB7 ${Hc(e.mass_g,e.mass_g<10?2:1)} g`}else J("mMass").textContent="\u2014"}async function nS(){let n=[{text:"\uB2E8\uBA74 \uD504\uB85C\uD30C\uC77C\uC5D0\uC11C \uD68C\uC804 \uD615\uC0C1",state:"run"},{text:"\uD0A4\uD648, \uD3C9\uBA74, \uC721\uAC01, \uD6A1\uAD6C\uBA4D \uAC00\uACF5"},{text:"\uC7AC\uC9C8 \uC801\uC6A9"}];yi(!0,"3\uB2E8\uACC4 \xB7 3D CAD","",n),await pa(120),Rg(),n.forEach(t=>t.state="done"),yi(!0,"3\uB2E8\uACC4 \xB7 3D CAD","",n),Ys(!1),J("dock").style.display="",Pd(),Ug(),Ye(`3D \uC644\uB8CC \xB7 \uC0BC\uAC01\uD615 ${W.built.stats.tris.toLocaleString()}\uAC1C, ${W.built.stats.ms}ms. \uC624\uB978\uCABD \uD328\uB110\uC5D0\uC11C \uB0B4\uB824\uBC1B\uACE0, \uC870\uB9BD\xB7\uC2DC\uBBAC\uC740 \uC704 \uBC84\uD2BC\uC73C\uB85C \uCF2D\uB2C8\uB2E4`,!0)}function Rg(){let n=W.dsl;if(!Oe(n).ok)return;let e=!!W.assembly||W.simOn;Xc(),wg();let i=nm(n,{materials:Sg,radial:96});W.built=i,Me=i.root;let s=ye(n),r=ni(n)/2;return Me.position.set(-s/2,r+.02,0),En.add(Me),W.section&&Fu(i,[Eg]),J("stageEmpty").style.display="none",J("mTris").textContent=`${i.stats.tris.toLocaleString()} \xB7 ${i.stats.ms}ms`,e&&Lg(),J("mNote").textContent=i.notes.length?i.notes.join(" \xB7 "):"\uB098\uC0AC\uC640 \uB110\uB9C1\uC740 \uB3C4\uBA74 \uAD00\uB840\uB300\uB85C \uD45C\uD604\uD558\uACE0, \uB0B4\uB824\uBC1B\uB294 \uD30C\uC77C\uC5D0\uB294 \uADDC\uACA9 \uAC12\uC744 \uC2E3\uC2B5\uB2C8\uB2E4.",i}async function iS(){await pa(150),Ig(),Ys(!0),Yc(),J("verifyBlock").style.display="",J("verifyBlock").scrollIntoView({behavior:"smooth",block:"start"}),Ye(`\uAC80\uC99D \uC644\uB8CC \xB7 ${W.verify.verdict==="pass"?"\uD1B5\uACFC":W.verify.verdict==="review"?"\uD655\uC778 \uD544\uC694":"\uBD88\uC77C\uCE58"}`,W.verify.verdict==="pass")}function Ig(){let n=W.extraction;if(!n||!W.dsl)return;let t=fm({dsl:W.dsl,inputSilhouette:n.silhouette,dimsRead:n.dims_read});W.verify=t,J("verifyBlock").style.display="";let e=J("verdict");e.className=`verdict ${t.verdict}`,e.textContent={pass:"\uD1B5\uACFC",review:"\uD655\uC778 \uD544\uC694",fail:"\uBD88\uC77C\uCE58",invalid:"\uC720\uD6A8\uD558\uC9C0 \uC54A\uC74C"}[t.verdict],J("vIou").textContent=t.iou==null?"\uCE21\uC815 \uC5C6\uC74C":`${(t.iou*100).toFixed(1)}%`,J("vIouBar").style.width=t.iou==null?"0":`${Math.round(t.iou*100)}%`,J("vDims").textContent=t.dims?`${t.dims.matched}/${t.dims.total} (${Math.round(t.dims.rate*100)}%)`:n.method==="silhouette"?"\uBB38\uC790 \uC548 \uC77D\uC74C":"\u2014",J("vValid").textContent=t.valid?t.warnings.length?`\uD1B5\uACFC (\uC8FC\uC758 ${t.warnings.length})`:"\uD1B5\uACFC":`\uC624\uB958 ${t.errors.length}`,J("vConf").textContent=`${Math.round(t.confidence*100)}%`;let i=[];t.dims?.unmatched?.length&&i.push(`\uC0AC\uC591\uC5D0 \uBC18\uC601\uB418\uC9C0 \uC54A\uC740 \uCE58\uC218: ${t.dims.unmatched.map(r=>r.text||r.value).join(", ")}`),t.valid||i.push(t.errors.join(" / ")),t.iou!=null&&t.iou<.9&&i.push("\uC678\uD615\uC774 \uB3C4\uBA74\uACFC \uC5B4\uAE0B\uB0A9\uB2C8\uB2E4. \uC624\uB978\uCABD \uD45C\uC5D0\uC11C \uC138\uADF8\uBA3C\uD2B8 \uAE38\uC774\uC640 \uC9C0\uB984\uC744 \uACE0\uCE58\uBA74 \uBC14\uB85C \uB2E4\uC2DC \uACC4\uC0B0\uB429\uB2C8\uB2E4."),J("vMsg").innerHTML=i.map(r=>`<div>\xB7 ${Bi(r)}</div>`).join(""),J("vMsg").className=`msg ${t.verdict==="pass"?"":t.verdict==="review"?"warn":"bad"}`;let s=J("goldenCmp");if(W.gold){let r=Vu(W.dsl,W.gold),o=a=>`${Math.round(a*100)}%`;s.innerHTML=`<div class="hint" style="margin-bottom:5px">\uC815\uB2F5 \uC0AC\uC591 \uB300\uBE44 (\uC774 \uB3C4\uBA74\uC740 \uC815\uB2F5\uC5D0\uC11C \uADF8\uB838\uC2B5\uB2C8\uB2E4)</div>
      <div class="cmp"><span class="h">\uD56D\uBAA9</span><span class="h">\uC77C\uCE58</span><span class="h"></span>
      <span>\uC138\uADF8\uBA3C\uD2B8</span><b>${o(r.segment.f1)}</b><span></span>
      <span>\uD53C\uCC98</span><b>${o(r.feature.f1)}</b><span></span>
      <span>\uC804\uC774</span><b>${o(r.transition.f1)}</b><span></span>
      <span>\uCE58\uC218</span><b>${o(r.dim_rate)}</b><span style="color:var(--text-3)">${r.dims_total}\uAC1C</span>
      <span>\uC678\uD615</span><b>${(r.iou*100).toFixed(1)}%</b><span></span>
      <span>\uC644\uC804 \uC77C\uCE58</span><b>${r.exact?"\uC608":"\uC544\uB2C8\uC624"}</b><span></span></div>`}else s.innerHTML=""}var sS=Xu();function Xc(){W.sim&&(W.sim.reset(),W.sim=null),Pg(),W.assembly&&(En.remove(W.assembly.group),W.assembly.group.traverse(n=>{n.isMesh&&n.geometry?.dispose()}),W.assembly=null),Me&&(Me.rotation.x=0),J("simDock").classList.remove("show"),zi()}function rS(){if(!Me)return;let n=new In().setFromObject(Me);W.assembly&&n.expandByObject(W.assembly.group);let t=n.getCenter(new z),e=Math.max(10,n.getSize(new z).length()/2);Xn.target.copy(t);let i=mi.degToRad(nn.fov/2),s=Math.atan(Math.tan(i)*Math.max(.6,nn.aspect)),r=e/Math.sin(Math.min(i,s))*1.12;nn.position.copy(t).add(new z(.55,.42,.72).normalize().multiplyScalar(r)),nn.near=Math.max(.2,e/80),nn.far=e*80,nn.updateProjectionMatrix(),Xn.update()}var bg=0;function zi(){let n=J("simGauge");if(!n)return;let t=W.sim?.state;if(!t||t.mode==="idle"){n.textContent=W.sim?"\uC815\uC9C0":"\u2014",n.classList.remove("on");return}if(n.classList.add("on"),t.mode==="spin"){let e=t.spinAngle/(2*Math.PI);n.textContent=`${Math.round(t.rpm)} rpm \xB7 ${e.toFixed(1)} \uD68C\uC804 \xB7 ${Math.round(t.spinAngle*180/Math.PI%360)}\xB0`}else t.mode==="screw"&&(n.textContent=`\uCCB4\uACB0 ${(t.screwTurns||0).toFixed(1)} \uD68C\uC804 \xB7 ${(t.screwAdvance||0).toFixed(1)} mm`)}function oS(){!Me||!W.dsl||(Pg(),W.marker=bm(W.dsl,{length:ye(W.dsl),radius:ni(W.dsl)/2}),Me.add(W.marker))}function Pg(){W.marker&&(W.marker.parent?.remove(W.marker),W.marker.traverse(n=>{n.isMesh&&n.geometry?.dispose()}),W.marker=null)}function Lg(){if(!W.dsl||!Me)return;W.mates=ym(W.dsl);let n=Mm(W.mates,{materials:sS});return n.group.position.copy(Me.position),n.group.rotation.copy(Me.rotation),En.add(n.group),W.assembly=n,W.sim=Sm({part:Me,assembly:n,analysis:W.mates}),W.sim.applyExplode(Number(J("simExplode").value)/100),oS(),J("simDock").classList.add("show"),rS(),zi(),n}async function aS(n){if(!(!Me||!W.dsl)){if(n){let t=[{text:"\uB3C4\uBA74\uC5D0\uC11C \uACB0\uD569\uBD80 \uCC3E\uAE30 (\uBA48\uCDA4\uB9C1, \uD0A4, \uB098\uC0AC, \uACF5\uCC28)",state:"run"},{text:"\uC0C1\uB300 \uBD80\uD488 \uB9CC\uB4E4\uAE30 (\uADDC\uACA9\uD45C \uADFC\uC0AC)"},{text:"\uBD84\uD574 \uC21C\uC11C\uC640 \uC870\uB9BD \uC810\uAC80"}];yi(!0,"\uC870\uB9BD \xB7 \uC2DC\uBBAC\uB808\uC774\uC158","",t),await pa(100),Xc(),Lg(),t.forEach(i=>i.state="done"),Ng(),Ys(!1),J("mateBlock").style.display="",J("mateBlock").scrollIntoView({behavior:"smooth",block:"start"}),yi(!1);let e=W.mates.mates.filter(i=>i.part).length;Ye(e?`\uACB0\uD569\uBD80 ${e}\uAC1C \uC778\uC2DD. \uBD84\uD574 \uB9C9\uB300\uC640 \uD68C\uC804\uC73C\uB85C \uD655\uC778\uD558\uC138\uC694`:"\uC0C1\uB300 \uBD80\uD488\uC774 \uC5C6\uB294 \uB2E8\uD488\uC774\uB77C \uD68C\uC804\uB9CC \uBCF4\uC5EC \uC90D\uB2C8\uB2E4",!0)}else Xc(),J("mateBlock").style.display="none",J("simExplode").value=0,J("btnSpin").classList.remove("on"),Pd(),Ye("\uBD80\uD488\uB9CC \uBCF4\uAE30\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4");W.simOn=n,J("btnSim").classList.toggle("on",n),J("btnSim").textContent=n?"\uC870\uB9BD \xB7 \uC2DC\uBBAC \uB044\uAE30":"\uC870\uB9BD \xB7 \uC2DC\uBBAC \uCF1C\uAE30",J("asmExportRow")&&(J("asmExportRow").style.display=n&&W.assembly?"flex":"none")}}J("btnSim").onclick=()=>aS(!W.simOn);var lS={spin:"\uC790\uC804\uCD95",snap:"\uBA48\uCDA4\uB9C1",key:"\uD0A4\xB7\uD5C8\uBE0C",screw:"\uB098\uC0AC \uCCB4\uACB0",bearing:"\uBCA0\uC5B4\uB9C1",pin:"\uD540",wrench:"\uACF5\uAD6C",fit:"\uB07C\uC6CC\uB9DE\uCDA4"};function Ng(){let n=W.mates;if(!n)return;J("mateMeta").textContent=vm(n),J("mateList").innerHTML=n.mates.map((e,i)=>{let s=Math.round(e.confidence*100),r=s>=85?"ok":s>=70?"warn":"err";return`<div class="joint-row" data-mate="${i}">
      <div class="jr-head"><b>${lS[e.kind]||e.kind}</b>
        ${e.part?`<span class="tag" style="font-size:10.5px">${e.approx?"\uADDC\uACA9 \uADFC\uC0AC":"\uC815\uD655"}</span>`:""}
        <span class="conf ${r}">${s}%</span></div>
      <div class="jr-body"><div class="jr-meta">x ${e.x.toFixed(1)}${e.x1!==void 0?`\u2013${e.x1.toFixed(1)}`:""} mm \xB7 ${e.motion.type==="spin"?"\uC790\uC804(X\uCD95)":e.motion.type==="axial"?"\uCD95\uBC29\uD5A5 \uC870\uB9BD":e.motion.type==="radial"?"\uBC18\uACBD \uBC29\uD5A5 \uC870\uB9BD":`\uB098\uC0AC \uC774\uC1A1 ${e.motion.pitch}mm/\uD68C\uC804`}</div>
      <div class="jr-ev">${e.evidence.map(o=>`\xB7 ${Bi(o)}`).join("<br/>")}</div></div></div>`}).join(""),J("mateOrder").innerHTML=n.order.length?n.order.map(e=>`<div class="gen-step done" style="padding:3px 0"><span class="dot"></span>${e.step}. ${Bi(e.text)}</div>`).join(""):'<div class="hint">\uBD84\uD574\uD560 \uC0C1\uB300 \uBD80\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</div>';let t=wm(n,W.dsl);J("mateChecks").innerHTML=t.length?t.map(e=>`<div class="simcheck"><div class="r"><span>${e.label}</span><b class="${e.ok===!0?"ok":e.ok===!1?"bad":""}">${e.value}</b></div><div class="n">${Bi(e.note)}</div></div>`).join(""):'<div class="hint">\uC810\uAC80\uD560 \uACB0\uD569\uBD80\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</div>',n.notes.length&&(J("mateChecks").innerHTML+=`<div class="hint" style="margin-top:6px">${n.notes.map(Bi).join("<br/>")}</div>`)}J("mateList").addEventListener("mouseover",n=>{let t=n.target.closest("[data-mate]");t&&Dg(Number(t.dataset.mate))});J("mateList").addEventListener("mouseout",()=>Dg(-1));function Dg(n){if(W.assembly){for(let{wrap:t,index:e}of W.assembly.items)t.traverse(i=>{i.isMesh&&i.material&&i.material.emissive?.setHex(e===n?2767498:0)});n>=0&&W.mates?.mates[n]?.kind==="spin"?Cd(!0):Cd(!1)}}var ki=null;function Cd(n){if(!n){ki&&(En.remove(ki),ki.geometry.dispose(),ki=null);return}if(ki||!Me||!W.dsl)return;let t=ye(W.dsl),e=new Fe().setFromPoints([new z(-t*.15,0,0),new z(t*1.15,0,0)]);ki=new Sr(e,new To({color:8161791,dashSize:4,gapSize:3})),ki.computeLineDistances(),ki.position.copy(Me.position),En.add(ki)}J("btnSpin").onclick=()=>{W.sim&&(W.sim.spin(Number(J("simRpm").value)||300),J("btnSpin").classList.add("on"),zi(),Ye(`\uD68C\uC804 ${J("simRpm").value} rpm. \uC8FC\uD669\uC0C9 \uAE30\uC900\uC120\uC73C\uB85C \uD68C\uC804\uC774 \uBCF4\uC785\uB2C8\uB2E4. \uCD95\uACFC \uD568\uAED8 \uB3C4\uB294 \uBD80\uD488\uB9CC \uB3D5\uB2C8\uB2E4`,!0))};J("btnScrewSim").onclick=()=>{if(!W.sim)return;if(!W.mates?.mates.some(t=>t.motion.type==="screw"&&t.part))return Ye("\uC774 \uBD80\uD488\uC5D0\uB294 \uB098\uC0AC \uCCB4\uACB0\uBD80\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4");W.sim.screw(!0),J("btnSpin").classList.remove("on"),zi()};J("btnAssemble").onclick=()=>{W.sim&&(J("simExplode").value=0,W.sim.applyExplode(0),W.sim.stop(),J("btnSpin").classList.remove("on"),zi())};J("btnSimStop").onclick=()=>{W.sim&&(W.sim.stop(),J("btnSpin").classList.remove("on"),zi())};J("simExplode").oninput=()=>{W.sim&&(W.sim.stop(),J("btnSpin").classList.remove("on"),W.sim.applyExplode(Number(J("simExplode").value)/100),zi())};J("simRpm").oninput=()=>{J("simRpmV").textContent=J("simRpm").value,W.sim?.setRpm(Number(J("simRpm").value)),zi()};function Ug(){Me&&(cS(),J("exportBlock").style.display="")}function ps(){if(!J("asmExport")?.checked||!W.assembly)return Me;let n=new Ce;n.name=`${W.dsl.id||"shaft"}_assembly`,n.add(Me.clone(!0));let t=W.assembly.group.clone(!0);return t.position.sub(Me.position),t.updateMatrixWorld(!0),n.add(t),n}function cS(){let n=W.dsl,t=(n.id||"shaft").replace(/[^A-Za-z0-9_-]/g,"_");J("asmExportRow").style.display=W.assembly?"flex":"none";let e=(l,h,c)=>{let d=document.createElement("div");return d.className="exp",d.innerHTML=`<span class="f">${l}</span><span class="n">${h}</span><button title="\uB0B4\uB824\uBC1B\uAE30"><svg><use href="#i-dl"/></svg></button>`,d.querySelector("button").onclick=c,d},i=J("dlList3d"),s=J("dlList2d");i.innerHTML="",s.innerHTML="";let r=W.source?.kind==="sample"&&W.sample?.files?.step&&W.gold&&Vu(n,W.gold).exact,o=W.mode==="live"&&W.serverStep;r&&!o&&i.appendChild(e("STEP","\uC815\uBC00 \uACE1\uBA74 \xB7 \uAE30\uACC4 CAD \uC6A9",async()=>{let l=await fetch(`./samples/${W.sample.id}/${W.sample.files.step}?v=${Xs}`).then(h=>h.blob());wn(l,`${t}.step`)})),o&&i.appendChild(e("STEP","\uC815\uBC00 \uACE1\uBA74 \xB7 \uC9C0\uAE08 \uC0AC\uC591\uC73C\uB85C \uC0DD\uC131",async()=>{Ye("STEP \uC744 \uB9CC\uB4DC\uB294 \uC911\u2026");let l=await fetch("./api/step",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({dsl:n,formats:"step",download:"step"})});if(!l.ok){let h=await l.json().catch(()=>({}));return Ye(`STEP \uC2E4\uD328: ${h.error||l.status}`)}wn(await l.blob(),`${t}.step`),Ye("STEP \uB0B4\uB824\uBC1B\uC74C",!0)})),i.appendChild(e("STEP\xB7\uBA74","\uC0BC\uAC01\uD615 \uBA74 \xB7 \uD3B8\uC9D1\uD55C \uC0AC\uC591\uB3C4 \uBC14\uB85C",()=>wn(ug(ps(),t),`${t}_faceted.step`,"application/step"))),i.appendChild(e("STL","3D \uD504\uB9B0\uD305",()=>wn(fg(ps()),`${t}.stl`,"model/stl"))),i.appendChild(e("GLB","\uC7AC\uC9C8 \uD3EC\uD568 \xB7 \uC6F9 \uBDF0\uC5B4",async()=>wn(await pg(ps()),`${t}.glb`,"model/gltf-binary"))),i.appendChild(e("OBJ","\uBA54\uC2DC (mm)",()=>wn(dg(ps()),`${t}.obj`,"text/plain"))),i.appendChild(e("FBX","Maya, 3ds Max, Unity, Unreal",()=>wn(Sd(ps()),`${t}.fbx`,"application/octet-stream"))),i.appendChild(e("USD","\uBA54\uC2DC\uC640 \uCE58\uC218 \uC0AC\uC591\uC744 \uD568\uAED8",()=>wn(_g(ps(),n),`${t}.usda`,"text/plain"))),i.appendChild(e("USDZ","AR \uBBF8\uB9AC\uBCF4\uAE30 \uD328\uD0A4\uC9C0",async()=>wn(await xg(ps()),`${t}.usdz`,"model/vnd.usdz+zip"))),i.appendChild(e("PLY","\uC815\uC810\uACFC \uBA74 (\uD574\uC11D \uB3C4\uAD6C)",()=>wn(gg(ps()),`${t}.ply`,"text/plain"))),s.appendChild(e("DXF","\uB2E4\uC2DC \uADF8\uB9B0 \uC81C\uC791 \uB3C4\uBA74",()=>wn(yg(n),`${t}_drawing.dxf`,"application/dxf"))),s.appendChild(e("SVG","\uB2E4\uC2DC \uADF8\uB9B0 \uC81C\uC791 \uB3C4\uBA74",()=>wn(vg(n),`${t}_drawing.svg`,"image/svg+xml"))),s.appendChild(e("JSON","\uCE58\uC218 \uC0AC\uC591",()=>wn(Mg(n),`${t}.dsl.json`,"application/json")));let a=W.source?.kind==="sample"&&W.sample?.files?.step;J("exportNote").textContent=r||W.mode==="live"&&W.serverStep?"\uC815\uBC00 \uACE1\uBA74 STEP \uC740 \uC0AC\uC591\uC774 \uC815\uB2F5\uACFC \uAC19\uC744 \uB54C \uBC1B\uC744 \uC218 \uC788\uACE0, \uD3B8\uC9D1\uD55C \uC0AC\uC591\uC740 \uBA74 STEP \uC73C\uB85C \uBC1B\uC2B5\uB2C8\uB2E4.":a?"\uC815\uBC00 \uACE1\uBA74 STEP \uC740 '\uC815\uB2F5 \uC0AC\uC591 \uBCF4\uAE30'\uB85C \uB418\uB3CC\uB9AC\uBA74 \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC9C0\uAE08 \uC0AC\uC591\uC740 \uBA74 STEP \uC73C\uB85C \uBC1B\uC2B5\uB2C8\uB2E4.":"\uC5EC\uAE30\uC11C\uB294 \uBA74 STEP \uC744 \uBC1B\uC2B5\uB2C8\uB2E4. \uC815\uBC00 \uACE1\uBA74 STEP \uC740 \uC11C\uBC84 \uBAA8\uB4DC\uC5D0\uC11C \uC81C\uACF5\uB429\uB2C8\uB2E4."}async function Fg(n){let t=await fetch(`./samples/${n.id}/${n.files.svg}?v=${Xs}`).then(i=>i.text()),e=await fetch(`./samples/${n.id}/${n.files.golden}?v=${Xs}`).then(i=>i.json());await Nd({kind:"sample",id:n.id,name:n.name_ko,svg:t,gold:e,sample:n})}async function hS(){let n=Math.floor(Math.random()*1e5)+1,t=pm(n),e=ta(Vr(t,{scale:"auto",seed:n}));await Nd({kind:"synthetic",id:t.id,name:`${t.name_ko} #${n}`,svg:e,gold:t})}async function Og(n){let t=await new Promise((i,s)=>{let r=new FileReader;r.onload=()=>i(r.result),r.onerror=s,r.readAsDataURL(n)}),e=/svg/i.test(n.type)||/\.svg$/i.test(n.name);await Nd({kind:"upload",id:n.name.replace(/\.[^.]+$/,"").replace(/[^A-Za-z0-9_-]+/g,"_")||"upload",name:n.name,svg:e?await n.text():null,dataUrl:e?null:t})}async function Nd(n){kg(!1);try{await Zb(n)}catch(t){Ye(`\uB3C4\uBA74\uC744 \uC5F4\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: ${t.message}`);return}ae.active=!0,ae.done=0,ae.running=0,J("projName").textContent=n.name,J("mName").textContent=n.name,J("lenBlock").style.display=n.kind==="upload"&&W.mode!=="live"||n.kind==="upload"?"":"none",n.gold&&(J("overallLen").value=""),fa(),Zc(1)}function kg(n=!0){Xc(),wg(),Ld(-1),Cd(!1),W.mates=null,J("simExplode").value=0,J("unsuitable")&&(J("unsuitable").style.display="none",J("unsuitable").innerHTML=""),W.source=null,W.raster=null,W.extraction=null,W.dsl=null,W.pristine=null,W.gold=null,W.built=null,W.verify=null,W.sample=null,W.showingGolden=!1,J("btnGolden").textContent="\uC815\uB2F5 \uC0AC\uC591 \uBCF4\uAE30",J("btnGolden").classList.remove("on"),W.sheetMode="original",J("btnRegen").textContent="\uC7AC\uC0DD\uC131 \uB3C4\uBA74",J("btnRegen").classList.remove("on"),W.simOn=!1,J("btnSim").textContent="\uC870\uB9BD \xB7 \uC2DC\uBBAC \uCF1C\uAE30",J("btnSim").classList.remove("on"),ae.done=0,ae.running=0,ae.active=!1,Ys(!1),J("stageEmpty").style.display="",J("dock").style.display="none";for(let t of["extractBlock","segBlock","featBlock","jsonBlock","verifyBlock","mateBlock","exportBlock"])J(t).style.display="none";["mLen","mDia","mMass","mMat","mTris"].forEach(t=>J(t).textContent="\u2014"),J("mNote").textContent="",n&&(J("projName").textContent="\uC0C8 \uD504\uB85C\uC81D\uD2B8",J("mName").textContent="\u2014",J("lenBlock").style.display="none"),fa()}J("btnNew").onclick=()=>{kg(!0),Ye("\uCC98\uC74C\uC73C\uB85C \uB3CC\uC544\uC654\uC2B5\uB2C8\uB2E4")};J("btnRandom").onclick=()=>hS();J("chips").onclick=n=>{let t=n.target.closest(".sample");if(!t)return;let e=W.samples.find(i=>i.id===t.dataset.id);e&&Fg(e)};J("methodSeg").onclick=n=>{let t=n.target.closest("button");!t||t.disabled||document.querySelectorAll("#methodSeg button").forEach(e=>e.classList.toggle("on",e===t))};var qs=J("drop"),da=J("file");qs.onclick=()=>da.click();da.onchange=()=>{da.files[0]&&Og(da.files[0]),da.value=""};qs.ondragover=n=>{n.preventDefault(),qs.classList.add("over")};qs.ondragleave=()=>qs.classList.remove("over");qs.ondrop=n=>{n.preventDefault(),qs.classList.remove("over");let t=n.dataTransfer.files?.[0];t&&Og(t)};J("overallLen").onchange=()=>{W.source&&ae.done>=2&&W.extraction?.method==="silhouette"&&(ae.done=1,Zc(2))};function uS(){J("libCount").textContent=`${W.samples.length}\uAC1C`,J("libGrid").innerHTML=W.samples.map(n=>`
    <button class="item" data-id="${n.id}">
      <img class="thumb" src="./samples/${n.id}/${n.files.thumb||n.files.svg}?v=${Xs}" alt="" loading="lazy" />
      <div class="meta"><div class="t">${n.name_ko} <span style="color:var(--text-3);font-weight:500">\xB7 ${n.name}</span></div>
      <div class="d">L${n.L} \xB7 \u2300${n.Dmax} \xB7 ${n.material} \xB7 \uC138\uADF8\uBA3C\uD2B8 ${n.segments}${n.features.length?` \xB7 ${[...new Set(n.features)].join("/")}`:""}${n.bore?" \xB7 \uBCF4\uC5B4":""} \xB7 \uB09C\uC774\uB3C4 ${"\u25CF".repeat(n.difficulty)}${"\u25CB".repeat(5-n.difficulty)}</div></div>
    </button>`).join("")}J("libGrid").onclick=n=>{let t=n.target.closest(".item");if(!t)return;Dd();let e=W.samples.find(i=>i.id===t.dataset.id);e&&Fg(e)};function dS(){J("lib").style.display="",J("wsBody").style.display="none",uS()}function Dd(){J("lib").style.display="none",J("wsBody").style.display="",Id()}J("btnLib").onclick=()=>J("lib").style.display==="none"?dS():Dd();J("btnLibClose").onclick=Dd;(async()=>{try{let t=await fetch("./api/status",{cache:"no-store"}).then(e=>e.ok?e.json():null).catch(()=>null);t?.ok&&t.mode==="live"&&(W.mode="live",W.serverStep=!!t.step)}catch{}let n=J("modeTag");W.mode==="live"?(n.textContent="AI \uD310\uB3C5 \uC0AC\uC6A9",n.classList.add("live")):(n.textContent="\uCCB4\uD5D8 \uBAA8\uB4DC",J("mServer").disabled=!0,J("mServer").title="\uC11C\uBC84 \uBAA8\uB4DC\uC5D0\uC11C\uB9CC",J("tierPlan").disabled=!0),J("aboutHint").innerHTML=W.mode==="live"?"\uB3C4\uBA74\uC744 \uC62C\uB9AC\uBA74 <b>AI \uAC00 \uCE58\uC218\uAE4C\uC9C0 \uC77D\uC5B4</b> \uC0AC\uC591\uC73C\uB85C \uC62E\uAE41\uB2C8\uB2E4. 3D, \uAC80\uC99D, \uB0B4\uB824\uBC1B\uAE30\uB294 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uBC14\uB85C \uC2E4\uD589\uB429\uB2C8\uB2E4.":"\uC0D8\uD50C\uC740 <b>\uBBF8\uB9AC \uD310\uB3C5\uD55C \uACB0\uACFC</b>\uB97C \uBCF4\uC5EC \uC8FC\uACE0, \uC62C\uB9B0 \uB3C4\uBA74\uC740 \uC774 \uBE0C\uB77C\uC6B0\uC800\uAC00 <b>\uC678\uD615\uC744 \uC7AC\uC11C</b> \uC0AC\uC591\uC744 \uB9CC\uB4ED\uB2C8\uB2E4. \uCE58\uC218 \uBB38\uC790\uAE4C\uC9C0 \uC77D\uB294 AI \uD310\uB3C5\uC740 \uC11C\uBC84 \uBAA8\uB4DC\uC5D0\uC11C \uB3D9\uC791\uD569\uB2C8\uB2E4.";try{let t=await fetch(`./samples/index.json?v=${Xs}`).then(e=>e.json());W.samples=t.samples||[]}catch(t){J("chips").innerHTML=`<span class="hint">\uC0D8\uD50C \uBAA9\uB85D\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: ${t.message}</span>`;return}J("chips").innerHTML=W.samples.map(t=>`<button class="sample" data-id="${t.id}" title="${t.name}"><img class="thumb" src="./samples/${t.id}/${t.files.thumb||t.files.svg}?v=${Xs}" alt="" loading="lazy" /><span class="lb">${t.name_ko}</span></button>`).join(""),fa(),Im()})();
