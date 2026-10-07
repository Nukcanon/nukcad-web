const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./acis-DSLEUHn5.js","./preload-helper-CxjCzuXK.js"])))=>i.map(i=>d[i]);
import{a as e,n as t,o as n,r,t as i}from"./preload-helper-CxjCzuXK.js";import{$c as a,$l as o,$r as s,$s as c,$u as l,Aa as u,Ac as d,Ai as f,Ar as p,Au as m,Bc as h,Bo as g,Br as _,Bs as v,Bu as y,Ca as b,Cc as x,Cu as S,Dc as C,Du as w,Es as T,Fa as E,Fc as D,Ft as O,Fu as k,Gc as A,Gi as j,Go as ee,Gr as te,Gu as ne,Hc as M,Ho as re,Hr as N,Hs as P,Ht as ie,Hu as ae,Ia as oe,Ic as se,Ii as ce,Io as le,Ir as ue,Iu as de,Jl as fe,Jr as pe,Js as me,Ju as he,Kc as ge,Ki as _e,Ko as ve,Kr as F,Ks as ye,Ku as be,Lc as xe,Lo as Se,Lr as Ce,Lu as we,Ma as Te,Mc as Ee,Mn as De,Na as Oe,Nc as ke,Nr as Ae,Nu as je,Oc as Me,Or as I,Ou as Ne,Pa as Pe,Pc as Fe,Pi as L,Pr as Ie,Qc as R,Qo as Le,Qr as Re,Qs as ze,Qu as Be,Rc as Ve,Ri as He,Ro as Ue,Rr as We,Rs as Ge,Rt as Ke,Ru as qe,Sa as Je,Su as Ye,Ta as Xe,Tu as Ze,Uc as z,Ui as Qe,Uo as $e,Ur as et,Uu as tt,Vc as B,Vi as nt,Vo as rt,Vr as it,Vs as at,Vt as ot,Vu as st,Wc as ct,Wi as lt,Wo as ut,Wr as dt,Ws as ft,Wu as pt,Xc as mt,Xi as ht,Xl as gt,Xo as _t,Xr as vt,Xs as yt,Xu as bt,Yc as xt,Yl as St,Yo as Ct,Yr as wt,Yu as Tt,Zc as Et,Zi as Dt,Zl as Ot,Zo as kt,Zr as V,Zs as At,Zt as jt,Zu as Mt,_a as Nt,_l as Pt,_u as Ft,aa as It,ac as Lt,ad as Rt,ai as zt,al as Bt,an as Vt,bc as Ht,bu as Ut,cc as Wt,cd as Gt,ci as Kt,cl as qt,cs as Jt,cu as Yt,da as Xt,dc as Zt,dd as Qt,di as $t,dl as en,dr as tn,du as nn,ed as rn,el as an,eu as on,fc as sn,fd as cn,fr as ln,fu as un,gc as dn,gl as fn,gr as pn,gt as mn,gu as hn,hl as gn,hr as _n,ic as vn,il as yn,ja as bn,jc as xn,jr as Sn,ju as Cn,ka as wn,kc as Tn,ki as En,ku as Dn,lc as On,li as kn,ll as An,ln as jn,lu as Mn,mc as Nn,mr as Pn,mu as Fn,n as In,nc as Ln,nd as Rn,ni as zn,nl as Bn,nu as Vn,oc as Hn,oi as Un,pa as Wn,pc as Gn,pd as Kn,pi as qn,qi as Jn,ql as Yn,qo as Xn,qr as Zn,qs as H,qt as Qn,qu as $n,r as er,ra as tr,rc as nr,rd as rr,ri as ir,rl as ar,sa as or,sc as sr,sd as cr,si as lr,sl as ur,su as dr,t as fr,ta as pr,tc as mr,td as hr,ti as gr,tl as _r,tu as vr,u as yr,ua as br,uc as xr,ud as Sr,ui as Cr,uu as wr,va as Tr,vc as U,vr as Er,vu as Dr,wc as Or,wr as kr,wu as Ar,xa as jr,xs as Mr,xu as Nr,yc as Pr,yr as Fr,zc as Ir,zr as Lr,zs as Rr,zu as W}from"./store--Zx4UFZa.js";import{$ as zr,$t as Br,At as Vr,C as Hr,Et as G,Fn as Ur,Ft as Wr,G as Gr,Gt as Kr,It as qr,J as Jr,Jt as Yr,K as Xr,Kt as Zr,Lt as Qr,Mn as $r,Nt as ei,On as ti,Pn as ni,Pt as K,Q as ri,Qn as ii,Qt as ai,Rt as oi,S as si,T as ci,Tn as li,Tt as ui,Vt as di,Wt as fi,X as pi,Xn as mi,Xt as hi,Y as gi,Z as _i,Zn as vi,Zt as yi,_t as bi,at as xi,b as Si,ct as Ci,dn as wi,dt as q,et as Ti,ft as Ei,gn as Di,it as Oi,jn as ki,kn as Ai,kt as J,l as ji,lt as Mi,mt as Ni,nt as Pi,or as Fi,ot as Ii,pt as Li,q as Ri,qt as zi,r as Bi,rn as Vi,rr as Hi,rt as Ui,st as Wi,tt as Gi,ut as Ki,v as qi,vt as Ji,wn as Yi,x as Xi}from"./sketchTools-CxA_ygzj.js";import{r as Zi,t as Qi}from"./desktopOnly-Wom7xQKc.js";import{n as $i,r as ea}from"./acis-DSLEUHn5.js";import{t as ta}from"./types-ByqEF1VP.js";function na(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ra(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Y={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},X={common:{diffuse:{value:new H(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new B},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new B}},envmap:{envMap:{value:null},envMapRotation:{value:new B},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new B}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new B}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new B},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new B},normalScale:{value:new W(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new B},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new B}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new B}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new B}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new H(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new y},probesMax:{value:new y},probesResolution:{value:new y}},points:{diffuse:{value:new H(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0},uvTransform:{value:new B}},sprite:{diffuse:{value:new H(16777215)},opacity:{value:1},center:{value:new W(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new B},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0}}},ia={basic:{uniforms:l([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Y.meshbasic_vert,fragmentShader:Y.meshbasic_frag},lambert:{uniforms:l([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new H(0)},envMapIntensity:{value:1}}]),vertexShader:Y.meshlambert_vert,fragmentShader:Y.meshlambert_frag},phong:{uniforms:l([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new H(0)},specular:{value:new H(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Y.meshphong_vert,fragmentShader:Y.meshphong_frag},standard:{uniforms:l([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new H(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag},toon:{uniforms:l([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new H(0)}}]),vertexShader:Y.meshtoon_vert,fragmentShader:Y.meshtoon_frag},matcap:{uniforms:l([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Y.meshmatcap_vert,fragmentShader:Y.meshmatcap_frag},points:{uniforms:l([X.points,X.fog]),vertexShader:Y.points_vert,fragmentShader:Y.points_frag},dashed:{uniforms:l([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Y.linedashed_vert,fragmentShader:Y.linedashed_frag},depth:{uniforms:l([X.common,X.displacementmap]),vertexShader:Y.depth_vert,fragmentShader:Y.depth_frag},normal:{uniforms:l([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Y.meshnormal_vert,fragmentShader:Y.meshnormal_frag},sprite:{uniforms:l([X.sprite,X.fog]),vertexShader:Y.sprite_vert,fragmentShader:Y.sprite_frag},background:{uniforms:{uvTransform:{value:new B},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Y.background_vert,fragmentShader:Y.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new B}},vertexShader:Y.backgroundCube_vert,fragmentShader:Y.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Y.cube_vert,fragmentShader:Y.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Y.equirect_vert,fragmentShader:Y.equirect_frag},distance:{uniforms:l([X.common,X.displacementmap,{referencePosition:{value:new y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Y.distance_vert,fragmentShader:Y.distance_frag},shadow:{uniforms:l([X.lights,X.fog,{color:{value:new H(0)},opacity:{value:1}}]),vertexShader:Y.shadow_vert,fragmentShader:Y.shadow_frag}};ia.physical={uniforms:l([ia.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new B},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new B},clearcoatNormalScale:{value:new W(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new B},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new B},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new B},sheen:{value:0},sheenColor:{value:new H(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new B},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new B},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new B},transmissionSamplerSize:{value:new W},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new B},attenuationDistance:{value:0},attenuationColor:{value:new H(0)},specularColor:{value:new H(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new B},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new B},anisotropyVector:{value:new W},anisotropyMap:{value:null},anisotropyMapTransform:{value:new B}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag};var aa={r:0,b:0,g:0},oa=new M,sa=new B;sa.set(-1,0,0,0,1,0,0,0,1);function ca(e,t,n,r,i,a){let o=new H(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new z(new v(1,1,1),new wr({name:`BackgroundCubeMaterial`,uniforms:be(ia.backgroundCube.uniforms),vertexShader:ia.backgroundCube.vertexShader,fragmentShader:ia.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(oa.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(sa),l.material.toneMapped=me.getTransfer(i.colorSpace)!==Yt,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new z(new Bt(2,2),new wr({name:`BackgroundMaterial`,uniforms:be(ia.background.uniforms),vertexShader:ia.background.vertexShader,fragmentShader:ia.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=me.getTransfer(i.colorSpace)!==Yt,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(aa,Mt(e)),n.buffers.color.setClear(aa.r,aa.g,aa.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function la(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ua(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function da(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(hr(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&hr(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function fa(e){let t=this,n=null,r=0,i=!1,a=!1,o=new yn,s=new B,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var pa=4,ma=6,ha=20,ga=256,_a=new Bn,va=new H,ya=null,ba=0,xa=0,Sa=!1,Ca=new y,wa=new y,Ta=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ca}=i;ya=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ma(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ja(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ya,ba,xa),this._renderer.xr.enabled=Sa,e.scissorTest=!1,Oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ya=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fe,minFilter:Fe,generateMipmaps:!1,type:Pr,format:fn,colorSpace:xe,depthBuffer:!1},r=Da(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Da(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ea(r)),this._blurMaterial=Aa(r,e,t),this._ggxMaterial=ka(r,e,t)}return r}_compileMaterial(e){let t=new z(new P,e);this._renderer.compile(t,_a)}_sceneToCubeUV(e,t,n,r,i){let a=new ar(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(va),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new z(new v,new ct({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(va),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Oa(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ma()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ja());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Oa(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,_a)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-pa?n-d+pa:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Oa(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,_a),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Oa(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,_a)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Oa(t,3*l*(r>this._lodMax-pa?r-this._lodMax+pa:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,_a)}};function Ea(e){let t=[],n=[],r=e,i=e-pa+1+ma;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?wa.set(1,r,n):e===1?wa.set(-n,1,-r):e===2?wa.set(-n,r,1):e===3?wa.set(-1,r,-n):e===4?wa.set(-n,-1,r):wa.set(n,r,-1),wa.toArray(l,(e*6+t)*3)}}let u=new P;u.setAttribute(`position`,new at(c,3)),u.setAttribute(`outputDirection`,new at(l,3)),n.push(new z(u,null)),r>pa&&r--}return{lodMeshes:n,sizeLods:t}}function Da(e,t,n){let r=new tt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Oa(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function ka(e,t,n){return new wr({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:ga,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Na(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Aa(e,t,n){return new wr({name:`SphericalGaussianBlur`,defines:{SAMPLES:ha,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Na(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ja(){return new wr({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Na(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ma(){return new wr({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Na(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Pa=class extends tt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new c(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new v(5,5,5),i=new wr({name:`CubemapFromEquirect`,uniforms:be(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new z(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Fe),new At(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Fa(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Pa(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Ta(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Ta(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ia(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Rn(`WebGLRenderer: `+e+` extension not supported.`),t}}}function La(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Dn:Ne)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Ra(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function za(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Tt(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ba(e,t,n){let r=new WeakMap,i=new st;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Ln(h,p,m,u);g.type=Nn,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new W(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Va(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ha={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Ua(e,t,n,r,i,a){let o=new tt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new P;l.setAttribute(`position`,new Gn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Gn([0,2,0,0,2,0],2));let u=new St({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new z(l,u),f=new Bn(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new tt(t,n,{type:Pr,depthBuffer:!1,stencilBuffer:!1}),c=new tt(t,n,{type:Pr,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},me.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Ha[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Wa=new S,Ga=new Hn(1,1),Ka=new Ln,qa=new mr,Ja=new c,Ya=[],Xa=[],Za=new Float32Array(16),Qa=new Float32Array(9),$a=new Float32Array(4);function eo(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ya[i];if(a===void 0&&(a=new Float32Array(i),Ya[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function to(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function no(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function ro(e,t){let n=Xa[t];n===void 0&&(n=new Int32Array(t),Xa[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function io(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ao(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(to(n,t))return;e.uniform2fv(this.addr,t),no(n,t)}}function oo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(to(n,t))return;e.uniform3fv(this.addr,t),no(n,t)}}function so(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(to(n,t))return;e.uniform4fv(this.addr,t),no(n,t)}}function co(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(to(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),no(n,t)}else{if(to(n,r))return;$a.set(r),e.uniformMatrix2fv(this.addr,!1,$a),no(n,r)}}function lo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(to(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),no(n,t)}else{if(to(n,r))return;Qa.set(r),e.uniformMatrix3fv(this.addr,!1,Qa),no(n,r)}}function uo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(to(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),no(n,t)}else{if(to(n,r))return;Za.set(r),e.uniformMatrix4fv(this.addr,!1,Za),no(n,r)}}function fo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function po(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(to(n,t))return;e.uniform2iv(this.addr,t),no(n,t)}}function mo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(to(n,t))return;e.uniform3iv(this.addr,t),no(n,t)}}function ho(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(to(n,t))return;e.uniform4iv(this.addr,t),no(n,t)}}function go(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function _o(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(to(n,t))return;e.uniform2uiv(this.addr,t),no(n,t)}}function vo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(to(n,t))return;e.uniform3uiv(this.addr,t),no(n,t)}}function yo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(to(n,t))return;e.uniform4uiv(this.addr,t),no(n,t)}}function bo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Ga.compareFunction=n.isReversedDepthBuffer()?518:515,a=Ga):a=Wa,n.setTexture2D(t||a,i)}function xo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||qa,i)}function So(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Ja,i)}function Co(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Ka,i)}function wo(e){switch(e){case 5126:return io;case 35664:return ao;case 35665:return oo;case 35666:return so;case 35674:return co;case 35675:return lo;case 35676:return uo;case 5124:case 35670:return fo;case 35667:case 35671:return po;case 35668:case 35672:return mo;case 35669:case 35673:return ho;case 5125:return go;case 36294:return _o;case 36295:return vo;case 36296:return yo;case 35678:case 36198:case 36298:case 36306:case 35682:return bo;case 35679:case 36299:case 36307:return xo;case 35680:case 36300:case 36308:case 36293:return So;case 36289:case 36303:case 36311:case 36292:return Co}}function To(e,t){e.uniform1fv(this.addr,t)}function Eo(e,t){let n=eo(t,this.size,2);e.uniform2fv(this.addr,n)}function Do(e,t){let n=eo(t,this.size,3);e.uniform3fv(this.addr,n)}function Oo(e,t){let n=eo(t,this.size,4);e.uniform4fv(this.addr,n)}function ko(e,t){let n=eo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ao(e,t){let n=eo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function jo(e,t){let n=eo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Mo(e,t){e.uniform1iv(this.addr,t)}function No(e,t){e.uniform2iv(this.addr,t)}function Po(e,t){e.uniform3iv(this.addr,t)}function Fo(e,t){e.uniform4iv(this.addr,t)}function Io(e,t){e.uniform1uiv(this.addr,t)}function Lo(e,t){e.uniform2uiv(this.addr,t)}function Ro(e,t){e.uniform3uiv(this.addr,t)}function zo(e,t){e.uniform4uiv(this.addr,t)}function Bo(e,t,n){let r=this.cache,i=t.length,a=ro(n,i);to(r,a)||(e.uniform1iv(this.addr,a),no(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ga:Wa;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Vo(e,t,n){let r=this.cache,i=t.length,a=ro(n,i);to(r,a)||(e.uniform1iv(this.addr,a),no(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||qa,a[e])}function Ho(e,t,n){let r=this.cache,i=t.length,a=ro(n,i);to(r,a)||(e.uniform1iv(this.addr,a),no(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Ja,a[e])}function Uo(e,t,n){let r=this.cache,i=t.length,a=ro(n,i);to(r,a)||(e.uniform1iv(this.addr,a),no(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ka,a[e])}function Wo(e){switch(e){case 5126:return To;case 35664:return Eo;case 35665:return Do;case 35666:return Oo;case 35674:return ko;case 35675:return Ao;case 35676:return jo;case 5124:case 35670:return Mo;case 35667:case 35671:return No;case 35668:case 35672:return Po;case 35669:case 35673:return Fo;case 5125:return Io;case 36294:return Lo;case 36295:return Ro;case 36296:return zo;case 35678:case 36198:case 36298:case 36306:case 35682:return Bo;case 35679:case 36299:case 36307:return Vo;case 35680:case 36300:case 36308:case 36293:return Ho;case 36289:case 36303:case 36311:case 36292:return Uo}}var Go=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wo(t.type)}},Ko=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wo(t.type)}},qo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Jo=/(\w+)(\])?(\[|\.)?/g;function Yo(e,t){e.seq.push(t),e.map[t.id]=t}function Xo(e,t,n){let r=e.name,i=r.length;for(Jo.lastIndex=0;;){let a=Jo.exec(r),o=Jo.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Yo(n,l===void 0?new Go(s,e,t):new Ko(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new qo(s),Yo(n,e)),n=e}}}var Zo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Xo(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Qo(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var $o=37297,es=0;function ts(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var ns=new B;function rs(e){me._getMatrix(ns,me.workingColorSpace,e);let t=`mat3( ${ns.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(e)){case Ve:return[t,`LinearTransferOETF`];case Yt:return[t,`sRGBTransferOETF`];default:return hr(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function is(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+ts(e.getShaderSource(t),r)}return i}function as(e,t){let n=rs(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var os={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function ss(e,t){let n=os[t];return n===void 0?(hr(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var cs=new y;function ls(){return me.getLuminanceCoefficients(cs),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${cs.x.toFixed(4)}, ${cs.y.toFixed(4)}, ${cs.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function us(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ps).join(`
`)}function ds(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function fs(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ps(e){return e!==``}function ms(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hs(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var gs=/^[ \t]*#include +<([\w\d./]+)>/gm;function _s(e){return e.replace(gs,ys)}var vs=new Map;function ys(e,t){let n=Y[t];if(n===void 0){let e=vs.get(t);if(e!==void 0)n=Y[e],hr(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return _s(n)}var bs=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xs(e){return e.replace(bs,Ss)}function Ss(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Cs(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var ws={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Ts(e){return ws[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Es={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Ds(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Es[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Os={302:`ENVMAP_MODE_REFRACTION`};function ks(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Os[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var As={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function js(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:As[e.combine]||`ENVMAP_BLENDING_NONE`}function Ms(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Ns(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Ts(n),l=Ds(n),u=ks(n),d=js(n),f=Ms(n),p=us(n),m=ds(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ps).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ps).join(`
`),_.length>0&&(_+=`
`)):(g=[Cs(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ps).join(`
`),_=[Cs(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Y.tonemapping_pars_fragment,n.toneMapping===0?``:ss(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Y.colorspace_pars_fragment,as(`linearToOutputTexel`,n.outputColorSpace),ls(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ps).join(`
`)),o=_s(o),o=ms(o,n),o=hs(o,n),s=_s(s),s=ms(s,n),s=hs(s,n),o=xs(o),s=xs(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Qo(i,i.VERTEX_SHADER,y),S=Qo(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=is(i,x,`vertex`),n=is(i,S,`fragment`);Tt(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):hr(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Zo(i,h),T=fs(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,$o)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=es++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Ps=0,Fs=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Is(e),t.set(e,n)),n}},Is=class{constructor(e){this.id=Ps++,this.code=e,this.usedTimes=0}};function Ls(e){return e===1030||e===37490||e===36285}function Rs(e,t,n,r,i,a){let o=new Me,s=new Fs,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return c.add(e),e===0?`uv`:`uv${e}`}function g(i,o,l,u,m,g){let _=u.fog,v=m.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&hr(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=ia[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),te=m.isInstancedMesh===!0,ne=m.isBatchedMesh===!0,M=!!i.map,re=!!i.matcap,N=!!x,P=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,oe=!!i.normalMap,se=!!i.displacementMap,ce=!!i.emissiveMap,le=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,F=de&&!!i.anisotropyMap,ye=fe&&!!i.clearcoatMap,be=fe&&!!i.clearcoatNormalMap,xe=fe&&!!i.clearcoatRoughnessMap,Se=ge&&!!i.iridescenceMap,Ce=ge&&!!i.iridescenceThicknessMap,we=_e&&!!i.sheenColorMap,Te=_e&&!!i.sheenRoughnessMap,Ee=!!i.specularMap,De=!!i.specularColorMap,Oe=!!i.specularIntensityMap,ke=ve&&!!i.transmissionMap,Ae=ve&&!!i.thicknessMap,je=!!i.gradientMap,Me=!!i.alphaMap,I=i.alphaTest>0,Ne=!!i.alphaHash,Pe=!!i.extensions,Fe=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Fe=e.toneMapping);let L={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ne,batchingColor:ne&&m._colorsTexture!==null,instancing:te,instancingColor:te&&m.instanceColor!==null,instancingMorph:te&&m.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:me.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:M,matcap:re,envMap:N,envMapMode:N&&x.mapping,envMapCubeUVHeight:S,aoMap:P,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:oe&&i.normalMapType===1,normalMapTangentSpace:oe&&i.normalMapType===0,packedNormalMap:oe&&i.normalMapType===0&&Ls(i.normalMap.format),metalnessMap:le,roughnessMap:ue,anisotropy:de,anisotropyMap:F,clearcoat:fe,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,dispersion:pe,retroreflection:he,iridescence:ge,iridescenceMap:Se,iridescenceThicknessMap:Ce,sheen:_e,sheenColorMap:we,sheenRoughnessMap:Te,specularMap:Ee,specularColorMap:De,specularIntensityMap:Oe,transmission:ve,transmissionMap:ke,thicknessMap:Ae,gradientMap:je,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Me,alphaTest:I,alphaHash:Ne,combine:i.combine,mapUv:M&&h(i.map.channel),aoMapUv:P&&h(i.aoMap.channel),lightMapUv:ie&&h(i.lightMap.channel),bumpMapUv:ae&&h(i.bumpMap.channel),normalMapUv:oe&&h(i.normalMap.channel),displacementMapUv:se&&h(i.displacementMap.channel),emissiveMapUv:ce&&h(i.emissiveMap.channel),metalnessMapUv:le&&h(i.metalnessMap.channel),roughnessMapUv:ue&&h(i.roughnessMap.channel),anisotropyMapUv:F&&h(i.anisotropyMap.channel),clearcoatMapUv:ye&&h(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&h(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&h(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&h(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&h(i.iridescenceThicknessMap.channel),sheenColorMapUv:we&&h(i.sheenColorMap.channel),sheenRoughnessMapUv:Te&&h(i.sheenRoughnessMap.channel),specularMapUv:Ee&&h(i.specularMap.channel),specularColorMapUv:De&&h(i.specularColorMap.channel),specularIntensityMapUv:Oe&&h(i.specularIntensityMap.channel),transmissionMapUv:ke&&h(i.transmissionMap.channel),thicknessMapUv:Ae&&h(i.thicknessMap.channel),alphaMapUv:Me&&h(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(oe||de),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!v.attributes.uv&&(M||Me),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&oe===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Fe,decodeVideoTexture:M&&i.map.isVideoTexture===!0&&me.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&me.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Pe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Pe&&i.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return L.vertexUv1s=c.has(1),L.vertexUv2s=c.has(2),L.vertexUv3s=c.has(3),c.clear(),L}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function b(e){let t=p[e.type],n;if(t){let e=ia[t];n=m.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r=u.get(n);return r===void 0?(r=new Ns(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function S(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function C(e){s.remove(e)}function w(){s.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:l,dispose:w}}function zs(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Bs(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Vs(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Hs(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Bs),r.length>1&&r.sort(t||Vs),i.length>1&&i.sort(t||Vs)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Us(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Hs,e.set(t,[i])):n>=r.length?(i=new Hs,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ws(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new y,color:new H};break;case`SpotLight`:n={position:new y,direction:new y,color:new H,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new y,color:new H,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new y,skyColor:new H,groundColor:new H};break;case`RectAreaLight`:n={color:new H,position:new y,halfWidth:new y,halfHeight:new y}}return e[t.id]=n,n}}}function Gs(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Ks=0;function qs(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Js(e){let t=new Ws,n=Gs(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new y);let i=new y,a=new M,o=new M;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(qs);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Ks++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Ys(e){let t=new Js(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Xs(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Ys(e),t.set(n,[a])):r>=i.length?(a=new Ys(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Zs=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qs=`uniform sampler2D shadow_pass;
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
}`,$s=[new y(1,0,0),new y(-1,0,0),new y(0,1,0),new y(0,-1,0),new y(0,0,1),new y(0,0,-1)],ec=[new y(0,-1,0),new y(0,-1,0),new y(0,0,1),new y(0,0,-1),new y(0,-1,0),new y(0,-1,0)],tc=new M,nc=new y,rc=new y;function ic(e,t,n){let r=new dn,i=new W,a=new W,o=new st,s=new A,c=new ge,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new W},radius:{value:4}},vertexShader:Zs,fragmentShader:Qs}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new P;m.setAttribute(`position`,new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new z(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(hr(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){hr(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){hr(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new tt(i.x,i.y,{format:Yn,type:Pr,minFilter:Fe,magFilter:Fe,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Hn(i.x,i.y,Nn),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=vn,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=R,d.map.depthTexture.magFilter=R}else l.isPointLight?(d.map=new Pa(i.x),d.map.depthTexture=new ze(i.x,k)):(d.map=new tt(i.x,i.y),d.map.depthTexture=new Hn(i.x,i.y,k)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=vn,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Fe,d.map.depthTexture.magFilter=Fe):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=R,d.map.depthTexture.magFilter=R);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),nc.setFromMatrixPosition(l.matrixWorld),e.position.copy(nc),rc.copy(e.position),rc.add($s[t]),e.up.copy(ec[t]),e.lookAt(rc),e.updateMatrixWorld(),n.makeTranslation(-nc.x,-nc.y,-nc.z),tc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(tc,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new tt(i.x,i.y,{format:Yn,type:Pr}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function ac(e,t){function n(){let t=!1,n=new st,r=null,i=new st(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?le(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=vr[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?le(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,ne=0,M=e.getParameter(e.VERSION);M.indexOf(`WebGL`)===-1?M.indexOf(`OpenGL ES`)!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(M)[1]),te=ne>=2):(ne=parseFloat(/^WebGL (\d)/.exec(M)[1]),te=ne>=1);let re=null,N={},P=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new st().fromArray(P),oe=new st().fromArray(ie);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),le(e.DEPTH_TEST),o.setFunc(3),ve(!1),F(1),le(e.CULL_FACE),ge(0);function le(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(ue(e.BLEND),g=!1);return}if(g===!1&&(le(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Tt(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Tt(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Tt(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Tt(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):le(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?le(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function F(t){t===0?ue(e.CULL_FACE):(le(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ye(t){t!==k&&(te&&e.lineWidth(t),k=t)}function be(t,n,r){t?(le(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function xe(t){t?le(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function Se(t){t===void 0&&(t=e.TEXTURE0+ee-1),re!==t&&(e.activeTexture(t),re=t)}function Ce(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+ee-1:re);let i=N[r];i===void 0&&(i={type:void 0,texture:void 0},N[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function we(){let t=N[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(e){Tt(`WebGLState:`,e)}}function Ee(){try{e.compressedTexImage3D(...arguments)}catch(e){Tt(`WebGLState:`,e)}}function De(){try{e.texSubImage2D(...arguments)}catch(e){Tt(`WebGLState:`,e)}}function Oe(){try{e.texSubImage3D(...arguments)}catch(e){Tt(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Tt(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Tt(`WebGLState:`,e)}}function je(){try{e.texStorage2D(...arguments)}catch(e){Tt(`WebGLState:`,e)}}function Me(){try{e.texStorage3D(...arguments)}catch(e){Tt(`WebGLState:`,e)}}function I(){try{e.texImage2D(...arguments)}catch(e){Tt(`WebGLState:`,e)}}function Ne(){try{e.texImage3D(...arguments)}catch(e){Tt(`WebGLState:`,e)}}function Pe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Fe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function L(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Ie(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function R(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Le(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Re(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,N={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:le,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:F,setLineWidth:ye,setPolygonOffset:be,setScissorTest:xe,activeTexture:Se,bindTexture:Ce,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:Ee,texImage2D:I,texImage3D:Ne,pixelStorei:Fe,getParameter:Pe,updateUBOMapping:R,uniformBlockBinding:Le,texStorage2D:je,texStorage3D:Me,texSubImage2D:De,texSubImage3D:Oe,compressedTexSubImage2D:ke,compressedTexSubImage3D:Ae,scissor:L,viewport:Ie,reset:Re}}function oc(e,t,n,r,i,o,s){let c=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,l=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),u=new W,d=new WeakMap,f=new Set,p,m=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function g(e,t){return h?new OffscreenCanvas(e,t):he(`canvas`)}function _(e,t,n){let r=1,i=je(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);p===void 0&&(p=g(n,a));let o=t?g(n,a):p;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),hr(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&hr(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function v(e){return e.generateMipmaps}function y(t){e.generateMipmap(t)}function b(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];hr(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||hr(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ve:me.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function S(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,hr(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function C(e,t){return v(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),E(t),t.isVideoTexture&&d.delete(t),t.isHTMLTexture&&f.delete(t)}function T(e){let t=e.target;t.removeEventListener(`dispose`,T),k(t)}function E(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=m.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&O(e),Object.keys(i).length===0&&m.delete(n)}r.remove(e)}function O(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=m.get(i);delete a[n.__cacheKey],s.memory.textures--}function k(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),s.memory.textures--),r.remove(i[t])}r.remove(t)}let A=0;function j(){A=0}function ee(){return A}function te(e){A=e}function ne(){let e=A;return e>=i.maxTextures&&hr(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),A+=1,e}function M(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function re(t,i){let a=r.get(t);if(t.isVideoTexture&&ke(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)hr(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)hr(`WebGLRenderer: Texture marked for update but image is incomplete`);else{pe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function N(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){pe(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function P(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){pe(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ie(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){ge(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ae={[on]:e.REPEAT,[ye]:e.CLAMP_TO_EDGE,[Et]:e.MIRRORED_REPEAT},oe={[R]:e.NEAREST,[an]:e.NEAREST_MIPMAP_NEAREST,[a]:e.NEAREST_MIPMAP_LINEAR,[Fe]:e.LINEAR,[se]:e.LINEAR_MIPMAP_NEAREST,[D]:e.LINEAR_MIPMAP_LINEAR},ce={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function le(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&hr(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ae[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ae[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ae[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,oe[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,oe[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ce[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ue(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,w));let i=n.source,a=m.get(i);a===void 0&&(a={},m.set(i,a));let o=M(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&O(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function de(e,t,n){return Math.floor(Math.floor(e/n)/t)}function fe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=de(n.start,r.width,4),c=de(t.start,r.width,4);n.start<=i+1&&a===c&&de(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function pe(t,a,s){let c=e.TEXTURE_2D;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),a.isData3DTexture&&(c=e.TEXTURE_3D);let l=ue(t,a),u=a.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&a.image instanceof ImageBitmap)){let t=me.getPrimaries(me.workingColorSpace),r=a.colorSpace===``?null:me.getPrimaries(a.colorSpace),i=a.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment);let t=_(a.image,!1,i.maxTextureSize);t=Ae(a,t);let r=o.convert(a.format,a.colorSpace),p=o.convert(a.type),m=x(a.internalFormat,r,p,a.normalized,a.colorSpace,a.isVideoTexture);le(c,a);let h,g=a.mipmaps,b=a.isVideoTexture!==!0,w=d.__version===void 0||l===!0,T=u.dataReady,E=C(a,t);if(a.isDepthTexture)m=S(a.format===Lt,a.type),w&&(b?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(a.isDataTexture){if(g.length>0){b&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],b?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);a.generateMipmaps=!1}else b?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&fe(a,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(a.isCompressedTexture){if(a.isCompressedArrayTexture){b&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let i=0,o=g.length;i<o;i++)if(h=g[i],a.format!==1023){if(r!==null){if(b){if(T){if(a.layerUpdates.size>0){let t=bt(h.width,h.height,a.format,a.type);for(let o of a.layerUpdates){let a=h.data.subarray(o*t/h.data.BYTES_PER_ELEMENT,(o+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,o,h.width,h.height,1,r,a)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else hr(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else b?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);a.layerUpdates.size>0&&a.clearLayerUpdates()}else{b&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],a.format===1023?b?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?hr(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):b?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(a.isDataArrayTexture){if(b){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(a.layerUpdates.size>0){let i=bt(t.width,t.height,a.format,a.type);for(let o of a.layerUpdates){let a=t.data.subarray(o*i/t.data.BYTES_PER_ELEMENT,(o+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,o,t.width,t.height,1,r,p,a)}a.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(a.isData3DTexture)b?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(a.isFramebufferTexture){if(w){if(b)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(a.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),f.add(a),n.onpaint=e=>{let t=e.changedElements;for(let e of f)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(b&&w){let t=je(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],b?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);a.generateMipmaps=!1}else if(b){if(w){let r=je(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);v(a)&&y(c),d.__version=u.version,a.onUpdate&&a.onUpdate(a)}t.__version=a.version}function ge(t,a,s){if(a.image.length!==6)return;let c=ue(t,a),l=a.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=me.getPrimaries(me.workingColorSpace),r=a.colorSpace===``?null:me.getPrimaries(a.colorSpace),d=a.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=a.isCompressedTexture||a.image[0].isCompressedTexture,p=a.image[0]&&a.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=_(a.image[e],!0,i.maxCubemapSize):m[e]=p?a.image[e].image:a.image[e],m[e]=Ae(a,m[e]);let h=m[0],g=o.convert(a.format,a.colorSpace),b=o.convert(a.type),S=x(a.internalFormat,g,b,a.normalized,a.colorSpace),w=a.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=C(a,h);le(e.TEXTURE_CUBE_MAP,a);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,S,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];a.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,b,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,S,i.width,i.height,0,g,b,i.data):g===null?hr(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,S,i.width,i.height,0,i.data)}}}else{if(O=a.mipmaps,w&&T){O.length>0&&D++;let t=je(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,S,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,b,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,S,m[t].width,m[t].height,0,g,b,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,b,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,S,i.width,i.height,0,g,b,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,b,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,S,g,b,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,b,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,S,g,b,i.image[t])}}}v(a)&&y(e.TEXTURE_CUBE_MAP),u.__version=l.version,a.onUpdate&&a.onUpdate(a)}t.__version=a.version}function _e(t,i,a,s,l,u){let d=o.convert(a.format,a.colorSpace),f=o.convert(a.type),p=x(a.internalFormat,d,f,a.normalized,a.colorSpace),m=r.get(i),h=r.get(a);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Oe(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,s,l,h.__webglTexture,0,De(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,s,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=S(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Oe(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,De(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,De(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],s=o.convert(a.format,a.colorSpace),l=o.convert(a.type),u=x(a.internalFormat,s,l,a.normalized,a.colorSpace);Oe(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,De(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,De(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function F(t,i,a){let s=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),s){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,w)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),le(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=o.convert(i.depthTexture.format),r=o.convert(i.depthTexture.type),a;i.depthTexture.format===1026?a=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(a=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,a,i.width,i.height,0,t,r,null)}}else re(i.depthTexture,0);let u=l.__webglTexture,d=De(i),f=s?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Oe(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Oe(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function be(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)F(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?F(i.__webglFramebuffer[0],t,0):F(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ve(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ve(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function xe(t,n,i){let a=r.get(t);n!==void 0&&_e(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&be(t)}function Se(t){let i=t.texture,a=r.get(t),c=r.get(i);t.addEventListener(`dispose`,T);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,s.memory.textures++),u){a.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){a.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)a.__webglFramebuffer[t][n]=e.createFramebuffer()}else a.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){a.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)a.__webglFramebuffer[t]=e.createFramebuffer()}else a.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),s.memory.textures++)}if(t.samples>0&&Oe(t)===!1){a.__webglMultisampledFramebuffer=e.createFramebuffer(),a.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,a.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];a.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,a.__webglColorRenderbuffer[n]);let i=o.convert(r.format,r.colorSpace),s=o.convert(r.type),c=x(r.internalFormat,i,s,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=De(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,a.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(a.__webglDepthRenderbuffer=e.createRenderbuffer(),ve(a.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),le(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)_e(a.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else _e(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);v(i)&&y(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,o=l.length;i<o;i++){let o=l[i],s=r.get(o),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,s.__webglTexture),le(c,o),_e(a.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+i,c,0),v(o)&&y(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),le(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)_e(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else _e(a.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);v(i)&&y(r),n.unbindTexture()}t.depthBuffer&&be(t)}function Ce(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(v(a)){let t=b(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),y(t),n.unbindTexture()}}}let we=[],Te=[];function Ee(t){if(t.samples>0){if(Oe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),l===!0&&(we.length=0,Te.length=0,we.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(we.push(c),Te.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Te)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,we))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&l){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function De(e){return Math.min(i.maxSamples,e.samples)}function Oe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function ke(e){let t=s.render.frame;d.get(e)!==t&&(d.set(e,t),e.update())}function Ae(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(me.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&hr(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Tt(`WebGLTextures: Unsupported texture color space:`,n)),t}function je(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(u.width=e.naturalWidth||e.width,u.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(u.width=e.displayWidth,u.height=e.displayHeight):(u.width=e.width,u.height=e.height),u}this.allocateTextureUnit=ne,this.resetTextureUnits=j,this.getTextureUnits=ee,this.setTextureUnits=te,this.setTexture2D=re,this.setTexture2DArray=N,this.setTexture3D=P,this.setTextureCube=ie,this.rebindTextures=xe,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function sc(e,t){function n(n,r=``){let i,a=me.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var cc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lc=`
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

}`,uc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new sn(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new wr({vertexShader:cc,fragmentShader:lc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new z(new Bt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dc=class extends Zt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new uc,g={},_=t.getContextAttributes(),v=null,b=null,x=[],S=[],C=new W,w=null,T=null,E=new ar;E.viewport=new st;let D=new ar;D.viewport=new st;let O=[E,D],A=new Ge,j=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new pt,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new pt,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new pt,x[e]=t),t.getHandSpace()};function te(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,te),r.removeEventListener(`selectstart`,te),r.removeEventListener(`selectend`,te),r.removeEventListener(`squeeze`,te),r.removeEventListener(`squeezestart`,te),r.removeEventListener(`squeezeend`,te),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}j=null,ee=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,b=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),T!==null){let e=T.camera;e.fov=T.fov,e.zoom=T.zoom,e.updateProjectionMatrix(),T=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&hr(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&hr(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,te),r.addEventListener(`selectstart`,te),r.addEventListener(`selectend`,te),r.addEventListener(`squeeze`,te),r.addEventListener(`squeezestart`,te),r.addEventListener(`squeezeend`,te),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Lt:vn,a=_.stencil?je:k);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new tt(d.textureWidth,d.textureHeight,{format:fn,type:Cn,depthTexture:new Hn(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new tt(f.framebufferWidth,f.framebufferHeight,{format:fn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let re=new y,N=new y;function P(e,t,n){re.setFromMatrixPosition(t.matrixWorld),N.setFromMatrixPosition(n.matrixWorld);let r=re.distanceTo(N),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ie(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),A.near=D.near=E.near=t,A.far=D.far=E.far=n,(j!==A.near||ee!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),j=A.near,ee=A.far),A.layers.mask=e.layers.mask|6,E.layers.mask=A.layers.mask&-5,D.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;ie(A,i);for(let e=0;e<a.length;e++)ie(a[e],i);a.length===2?P(A,E,D):A.projectionMatrix.copy(E.projectionMatrix),T===null&&e.isPerspectiveCamera&&(T={camera:e,fov:e.fov,zoom:e.zoom}),ae(e,A,i)};function ae(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=en*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(A)},this.getCameraTexture=function(e){return g[e]};let oe=null;function se(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=O[n];o===void 0&&(o=new ar,o.layers.enable(n),o.viewport=new st,O[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new sn,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}oe&&oe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ce=new na;ce.setAnimationLoop(se),this.setAnimationLoop=function(e){oe=e},this.dispose=function(){}}},fc=new M,pc=new B;pc.set(-1,0,0,0,1,0,0,0,1);function mc(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Mt(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(fc.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(pc),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function hc(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return Tt(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?hr(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):hr(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var gc=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_c=null;function vc(){return _c===null&&(_c=new nr(gc,16,16,Yn,Pr),_c.name=`DFG_LUT`,_c.minFilter=Fe,_c.magFilter=Fe,_c.wrapS=ye,_c.wrapT=ye,_c.generateMipmaps=!1,_c.needsUpdate=!0),_c}var yc=class{constructor(e={}){let{canvas:t=$n(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u=`default`,failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Cn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);m=n.getContextAttributes().alpha}else m=a;let h=p,g=new Set([Pt,fe,o]),_=new Set([Cn,k,qe,je,de,we]),v=new Uint32Array(4),b=new Int32Array(4),x=new y,S=null,C=null,w=[],T=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,A=!1,j=null,ee=null,te=null,ne=null;this._outputColorSpace=dr;let re=0,N=0,P=null,ie=-1,oe=null,se=new st,ce=new st,le=null,ue=new H(0),pe=0,he=t.width,ge=t.height,_e=1,ve=null,F=null,ye=new st(0,0,he,ge),be=new st(0,0,he,ge),xe=!1,Se=new dn,Ce=!1,Te=!1,Ee=new M,De=new y,Oe=new st,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function Me(){return P===null?_e:1}let I=n;function Ne(e,n){return t.getContext(e,n)}let Pe,Fe,L,Ie,R,Le,Re,ze,Ve,He,Ue,We,Ge,Ke,Je,Ye,Xe,Ze,z,Qe,$e,et,B;try{let e={alpha:!0,depth:r,stencil:i,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,it,!1),t.addEventListener(`webglcontextrestored`,at,!1),t.addEventListener(`webglcontextcreationerror`,ot,!1),I===null){let t=`webgl2`;if(I=Ne(t,e),I===null)throw Ne(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}nt()}catch(e){throw t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),Tt(`WebGLRenderer: `+e.message),e}function nt(){Pe=new Ia(I),Pe.init(),$e=new sc(I,Pe),Fe=new da(I,Pe,e,$e),L=new ac(I,Pe),Fe.reversedDepthBuffer&&f&&L.buffers.depth.setReversed(!0),ee=I.createFramebuffer(),te=I.createFramebuffer(),ne=I.createFramebuffer(),Ie=new za(I),R=new zs,Le=new oc(I,Pe,L,R,Fe,$e,Ie),Re=new Fa(O),ze=new ra(I),et=new la(I,ze),Ve=new La(I,ze,Ie,et),He=new Va(I,Ve,ze,et,Ie),Ze=new Ba(I,Fe,Le),Je=new fa(R),Ue=new Rs(O,Re,Pe,Fe,et,Je),We=new mc(O,R),Ge=new Us,Ke=new Xs(Pe),Xe=new ca(O,Re,L,He,m,c),Ye=new ic(O,He,Fe),B=new hc(I,Ie,Fe,L),z=new ua(I,Pe,Ie),Qe=new Ra(I,Pe,Ie),Ie.programs=Ue.programs,O.capabilities=Fe,O.extensions=Pe,O.properties=R,O.renderLists=Ge,O.shadowMap=Ye,O.state=L,O.info=Ie}h!==1009&&(E=new Ua(h,t.width,t.height,s,r,i));let rt=new dc(O,I);this.xr=rt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(e){e!==void 0&&(_e=e,this.setSize(he,ge,!1))},this.getSize=function(e){return e.set(he,ge)},this.setSize=function(e,n,r=!0){if(rt.isPresenting){hr(`WebGLRenderer: Can't change size while VR device is presenting.`);return}he=e,ge=n,t.width=Math.floor(e*_e),t.height=Math.floor(n*_e),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(he*_e,ge*_e).floor()},this.setDrawingBufferSize=function(e,n,r){he=e,ge=n,_e=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(h===1009){Tt(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){hr(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}E.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(se)},this.getViewport=function(e){return e.copy(ye)},this.setViewport=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),L.viewport(se.copy(ye).multiplyScalar(_e).round())},this.getScissor=function(e){return e.copy(be)},this.setScissor=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),L.scissor(ce.copy(be).multiplyScalar(_e).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(e){L.setScissorTest(xe=e)},this.setOpaqueSort=function(e){ve=e},this.setTransparentSort=function(e){F=e},this.getClearColor=function(e){return e.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(P!==null){let t=P.texture.format;e=g.has(t)}if(e){let e=P.texture.type,t=_.has(e),n=Xe.getClearColor(),r=Xe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(v[0]=i,v[1]=a,v[2]=o,v[3]=r,I.clearBufferuiv(I.COLOR,0,v)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,I.clearBufferiv(I.COLOR,0,b))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),j=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),Xe.dispose(),Ge.dispose(),Ke.dispose(),R.dispose(),Re.dispose(),He.dispose(),et.dispose(),B.dispose(),Ue.dispose(),rt.dispose(),rt.removeEventListener(`sessionstart`,mt),rt.removeEventListener(`sessionend`,ht),gt.stop()};function it(e){e.preventDefault(),Be(`WebGLRenderer: Context Lost.`),A=!0}function at(){Be(`WebGLRenderer: Context Restored.`),A=!1;let e=Ie.autoReset,t=Ye.enabled,n=Ye.autoUpdate,r=Ye.needsUpdate,i=Ye.type;nt(),Ie.autoReset=e,Ye.enabled=t,Ye.autoUpdate=n,Ye.needsUpdate=r,Ye.type=i}function ot(e){Tt(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ct(e){let t=e.target;t.removeEventListener(`dispose`,ct),lt(t)}function lt(e){ut(e),R.remove(e)}function ut(e){let t=R.get(e).programs;t!==void 0&&(t.forEach(function(e){Ue.releaseProgram(e)}),e.isShaderMaterial&&Ue.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ke);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Dt(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;et.setup(i,r,s,n,c);let h,g=z;if(c!==null&&(h=ze.get(c),g=Qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*Me()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*Me()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh){if(Pe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ze.get(c).bytesPerElement:1,o=R.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function dt(e,t,n,r){j!==null&&e.isNodeMaterial&&j.setObject(r,e),Ce===!0&&Je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,St(e,t,r),e.side=0,e.needsUpdate=!0,St(e,t,r),e.side=2):St(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),j!==null&&j.renderStart(e,t,n),C=Ke.get(n),C.init(t),T.push(C),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(C.pushLight(e),e.castShadow&&C.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(C.pushLight(e),e.castShadow&&C.pushShadow(e))}),C.setupLights(),j!==null&&j.updateLights(C.state.lightsArray),Te=this.localClippingEnabled,Ce=Je.init(this.clippingPlanes,Te),Ce===!0&&Je.setGlobalState(this.clippingPlanes,t),j!==null&&Ye.render(C.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];dt(o,n,t,e),r.add(o)}else dt(i,n,t,e),r.add(i)}}),C=T.pop(),j!==null&&j.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=R.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Pe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ft=null;function pt(e){ft&&ft(e)}function mt(){gt.stop()}function ht(){gt.start()}let gt=new na;gt.setAnimationLoop(pt),typeof self<`u`&&gt.setContext(self),this.setAnimationLoop=function(e){ft=e,rt.setAnimationLoop(e),e===null?gt.stop():gt.start()},rt.addEventListener(`sessionstart`,mt),rt.addEventListener(`sessionend`,ht),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Tt(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(A===!0)return;j!==null&&j.renderStart(e,t);let n=rt.enabled===!0&&rt.isPresenting===!0,r=E!==null&&(P===null||n)&&E.begin(O,P);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(t),t=rt.getCamera()),e.isScene===!0&&e.onBeforeRender(O,e,t,P),C=Ke.get(e,T.length),C.init(t),C.state.textureUnits=Le.getTextureUnits(),T.push(C),Ee.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Se.setFromProjectionMatrix(Ee,ae,t.reversedDepth),Te=this.localClippingEnabled,Ce=Je.init(this.clippingPlanes,Te),S=Ge.get(e,w.length),S.init(),w.push(S),rt.enabled===!0&&rt.isPresenting===!0){let e=O.xr.getDepthSensingMesh();e!==null&&_t(e,t,-1/0,O.sortObjects)}_t(e,t,0,O.sortObjects),S.finish(),j!==null&&j.updateLights(C.state.lightsArray),O.sortObjects===!0&&S.sort(ve,F),Ae=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Ae&&Xe.addToRenderList(S,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ce===!0&&Je.beginShadows();let i=C.state.shadowsArray;if(Ye.render(i,e,t),Ce===!0&&Je.endShadows(),(r&&E.hasRenderPass())===!1){let n=S.opaque,r=S.transmissive;if(C.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];yt(n,r,e,a)}Ae&&Xe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];vt(S,e,n,n.viewport)}}else r.length>0&&yt(n,r,e,t),Ae&&Xe.render(e),vt(S,e,t)}P!==null&&N===0&&(Le.updateMultisampleRenderTarget(P),Le.updateRenderTargetMipmap(P)),r&&E.end(O),e.isScene===!0&&e.onAfterRender(O,e,t),et.resetDefaultState(),ie=-1,oe=null,T.pop(),T.length>0?(C=T[T.length-1],Le.setTextureUnits(C.state.textureUnits),Ce===!0&&Je.setGlobalState(O.clippingPlanes,C.state.camera)):C=null,w.pop(),S=w.length>0?w[w.length-1]:null,j!==null&&j.renderEnd()};function _t(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)C.pushLightProbeGrid(e);else if(e.isLight)C.pushLight(e),e.castShadow&&C.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Se)){r&&Oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ee);let i=He.update(e),a=e.material;a.visible&&S.push(e,i,a,n,Oe.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Se))){let i=He.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Oe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Oe.copy(e.boundingSphere.center)),Oe.applyMatrix4(e.matrixWorld).applyMatrix4(Ee)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&S.push(e,i,c,n,Oe.z,s,t)}}else a.visible&&S.push(e,i,a,n,Oe.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)_t(i[e],t,n,r)}function vt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;C.setupLightsView(n),Ce===!0&&Je.setGlobalState(O.clippingPlanes,n),r&&L.viewport(se.copy(r)),i.length>0&&bt(i,t,n),a.length>0&&bt(a,t,n),o.length>0&&bt(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function yt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[r.id]===void 0){let e=Pe.has(`EXT_color_buffer_half_float`)||Pe.has(`EXT_color_buffer_float`);C.state.transmissionRenderTarget[r.id]=new tt(1,1,{generateMipmaps:!0,type:e?Pr:Cn,minFilter:D,samples:Math.max(4,Fe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:me.workingColorSpace})}let a=C.state.transmissionRenderTarget[r.id],o=r.viewport||se;a.setSize(o.z*O.transmissionResolutionScale,o.w*O.transmissionResolutionScale);let s=O.getRenderTarget(),c=O.getActiveCubeFace(),l=O.getActiveMipmapLevel();O.setRenderTarget(a),O.getClearColor(ue),pe=O.getClearAlpha(),pe<1&&O.setClearColor(16777215,.5),O.clear(),Ae&&Xe.render(n);let u=O.toneMapping;O.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),C.setupLightsView(r),Ce===!0&&Je.setGlobalState(O.clippingPlanes,r),bt(e,n,r),Le.updateMultisampleRenderTarget(a),Le.updateRenderTargetMipmap(a),Pe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,xt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Le.updateMultisampleRenderTarget(a),Le.updateRenderTargetMipmap(a))}O.setRenderTarget(s,c,l),O.setClearColor(ue,pe),d!==void 0&&(r.viewport=d),O.toneMapping=u}function bt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&xt(o,t,n,s,l,c)}}function xt(e,t,n,r,i,a){j!==null&&i.isNodeMaterial&&j.setObject(e,i),e.onBeforeRender(O,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(O,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,O.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,O.renderBufferDirect(n,t,r,i,e,a),i.side=2):O.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(O,t,n,r,i,a)}function St(e,t,n){t.isScene!==!0&&(t=ke);let r=R.get(e),i=C.state.lights,a=C.state.shadowsArray,o=i.state.version,s=Ue.getParameters(e,i.state,a,t,n,C.state.lightProbeGridArray),c=Ue.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Re.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ct),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return wt(e,s),d}else s.uniforms=Ue.getUniforms(e),j!==null&&e.isNodeMaterial&&j.build(e,n,s),e.onBeforeCompile(s,O),d=Ue.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Je.uniform),wt(e,s),r.needsLights=kt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=C.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Ct(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Zo.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function wt(e,t){let n=R.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Et(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];x.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(x))return n}return null}function Dt(e,t,n,r,i){t.isScene!==!0&&(t=ke),Le.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=P===null?O.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:me.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Re.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(h=O.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=R.get(r),y=C.state.lights;if(Ce===!0&&(Te===!0||e!==oe)){let t=e===oe&&r.id===ie;Je.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Je.numPlanes||v.numIntersection!==Je.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=C.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=St(r,t,i),j&&r.isNodeMaterial&&j.onUpdateProgram(r,x,v));let S=!1,w=!1,T=!1,E=x.getUniforms(),D=v.uniforms;if(L.useProgram(x.program)&&(S=!0,w=!0,T=!0),r.id!==ie&&(ie=r.id,w=!0),v.needsLights){let e=Et(C.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(S||oe!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(I,`projectionMatrix`,e.projectionMatrix),E.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(I,De.setFromMatrixPosition(e.matrixWorld)),Fe.logarithmicDepthBuffer&&E.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),oe!==e&&(oe=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(I,`sunShadowMap`,y.state.sunShadowMap,Le),y.state.directionalShadowMap.length>0&&E.setValue(I,`directionalShadowMap`,y.state.directionalShadowMap,Le),y.state.spotShadowMap.length>0&&E.setValue(I,`spotShadowMap`,y.state.spotShadowMap,Le),y.state.pointShadowMap.length>0&&E.setValue(I,`pointShadowMap`,y.state.pointShadowMap,Le)),i.isSkinnedMesh){E.setOptional(I,i,`bindMatrix`),E.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(I,`boneTexture`,e.boneTexture,Le))}i.isBatchedMesh&&(E.setOptional(I,i,`batchingTexture`),E.setValue(I,`batchingTexture`,i._matricesTexture,Le),E.setOptional(I,i,`batchingIdTexture`),E.setValue(I,`batchingIdTexture`,i._indirectTexture,Le),E.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(I,`batchingColorTexture`,i._colorsTexture,Le));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&Ze.update(i,n,x),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(I,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=vc()),w){if(E.setValue(I,`toneMappingExposure`,O.toneMappingExposure),v.needsLights&&Ot(D,T),a&&r.fog===!0&&We.refreshFogUniforms(D,a),We.refreshMaterialUniforms(D,r,_e,ge,C.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}Zo.upload(I,Ct(v),D,Le)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Zo.upload(I,Ct(v),D,Le),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(I,`center`,i.center),E.setValue(I,`modelViewMatrix`,i.modelViewMatrix),E.setValue(I,`normalMatrix`,i.normalMatrix),E.setValue(I,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];B.update(n,x),B.bind(n,x)}}return x}function Ot(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function kt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(e,t,n){let r=R.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),R.get(e.texture).__webglTexture=t,R.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=R.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){P=e,re=t,N=n;let r=null,i=!1,a=!1;if(e){let o=R.get(e);if(o.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(I.FRAMEBUFFER,o.__webglFramebuffer),se.copy(e.viewport),ce.copy(e.scissor),le=e.scissorTest,L.viewport(se),L.scissor(ce),L.setScissorTest(le),ie=-1;return}if(o.__webglFramebuffer===void 0)Le.setupRenderTarget(e);else if(o.__hasExternalTextures)Le.rebindTextures(e,R.get(e.texture).__webglTexture,R.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&R.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Le.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=R.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Le.useMultisampledRTT(e)===!1?R.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,se.copy(e.viewport),ce.copy(e.scissor),le=e.scissorTest}else se.copy(ye).multiplyScalar(_e).floor(),ce.copy(be).multiplyScalar(_e).floor(),le=xe;if(n!==0&&(r=ee),L.bindFramebuffer(I.FRAMEBUFFER,r)&&L.drawBuffers(e,r),L.viewport(se),L.scissor(ce),L.setScissorTest(le),i){let r=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=R.get(e.textures[t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}ie=-1};function V(e){let t=R.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Fe.textureFormatReadable(e.format),t.__typeReadable=Fe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Tt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){L.bindFramebuffer(I.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let u=V(o);if(u.__formatReadable===!1){Tt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){Tt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&I.readPixels(t,n,r,i,$e.convert(c),$e.convert(l),a)}finally{let e=P===null?null:R.get(P).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(I.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let d=V(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),I.readPixels(t,n,r,i,$e.convert(l),$e.convert(u),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let p=P===null?null:R.get(P).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,p);let m=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await rn(I,m,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(f),I.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Le.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=$e.convert(t.format),_=$e.convert(t.type),v;t.isData3DTexture?(Le.setTexture3D(t,0),v=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Le.setTexture2DArray(t,0),v=I.TEXTURE_2D_ARRAY):(Le.setTexture2D(t,0),v=I.TEXTURE_2D),L.activeTexture(I.TEXTURE0),L.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let y=L.getParameter(I.UNPACK_ROW_LENGTH),b=L.getParameter(I.UNPACK_IMAGE_HEIGHT),x=L.getParameter(I.UNPACK_SKIP_PIXELS),S=L.getParameter(I.UNPACK_SKIP_ROWS),C=L.getParameter(I.UNPACK_SKIP_IMAGES);L.pixelStorei(I.UNPACK_ROW_LENGTH,h.width),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,h.height),L.pixelStorei(I.UNPACK_SKIP_PIXELS,l),L.pixelStorei(I.UNPACK_SKIP_ROWS,u),L.pixelStorei(I.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=R.get(e),r=R.get(t),h=R.get(n.__renderTarget),g=R.get(r.__renderTarget);L.bindFramebuffer(I.READ_FRAMEBUFFER,h.__webglFramebuffer),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(e).__webglTexture,i,d+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(t).__webglTexture,a,m+n)),I.blitFramebuffer(l,u,o,s,f,p,o,s,I.DEPTH_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||R.has(e)){let n=R.get(e),r=R.get(t);L.bindFramebuffer(I.READ_FRAMEBUFFER,te),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,ne);for(let e=0;e<c;e++)w?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,i),T?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),i===0?T?I.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):I.copyTexSubImage2D(v,a,f,p,l,u,o,s):I.blitFramebuffer(l,u,o,s,f,p,o,s,I.COLOR_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h);L.pixelStorei(I.UNPACK_ROW_LENGTH,y),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,b),L.pixelStorei(I.UNPACK_SKIP_PIXELS,x),L.pixelStorei(I.UNPACK_SKIP_ROWS,S),L.pixelStorei(I.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&I.generateMipmap(v),L.unbindTexture()},this.initRenderTarget=function(e){R.get(e).__webglFramebuffer===void 0&&Le.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Le.setTextureCube(e,0):e.isData3DTexture?Le.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Le.setTexture2DArray(e,0):Le.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){re=0,N=0,P=null,L.reset(),et.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return ae}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=me._getDrawingBufferColorSpace(e),t.unpackColorSpace=me._getUnpackColorSpace()}},bc=(e,t)=>[e[0]*t[0]+e[2]*t[1],e[1]*t[0]+e[3]*t[1],e[0]*t[2]+e[2]*t[3],e[1]*t[2]+e[3]*t[3],e[0]*t[4]+e[2]*t[5]+e[4],e[1]*t[4]+e[3]*t[5]+e[5]],xc=(e,t)=>[e[0]*t[0]+e[2]*t[1]+e[4],e[1]*t[0]+e[3]*t[1]+e[5]],Sc=[1,0,0,1,0,0];function Cc(e){if(!e)return Sc;let t=Sc,n=/(matrix|translate|scale|rotate|skewX|skewY)\s*\(([^)]*)\)/g,r;for(;r=n.exec(e);){let e=r[2].split(/[\s,]+/).filter(Boolean).map(Number),n=Sc;switch(r[1]){case`matrix`:n=e.slice(0,6);break;case`translate`:n=[1,0,0,1,e[0]??0,e[1]??0];break;case`scale`:n=[e[0]??1,0,0,e[1]??e[0]??1,0,0];break;case`rotate`:{let t=(e[0]??0)*Math.PI/180,r=Math.cos(t),i=Math.sin(t);n=[r,i,-i,r,0,0],e.length>=3&&(n=bc(bc([1,0,0,1,e[1],e[2]],n),[1,0,0,1,-e[1],-e[2]]));break}case`skewX`:n=[1,0,Math.tan((e[0]??0)*Math.PI/180),1,0,0];break;case`skewY`:n=[1,Math.tan((e[0]??0)*Math.PI/180),0,1,0,0]}t=bc(t,n)}return t}function wc(e,t,n,r,i,a,o){if(t===0||n===0)return[[e,o]];let s=Math.sin(r),c=Math.cos(r),l=(e[0]-o[0])/2,u=(e[1]-o[1])/2,d=c*l+s*u,f=-s*l+c*u;t=Math.abs(t),n=Math.abs(n);let p=d*d/(t*t)+f*f/(n*n);p>1&&(t*=Math.sqrt(p),n*=Math.sqrt(p));let m=i===a?-1:1,h=t*t*n*n-t*t*f*f-n*n*d*d,g=m*Math.sqrt(Math.max(0,h/(t*t*f*f+n*n*d*d))),_=g*t*f/n,v=-g*n*d/t,y=c*_-s*v+(e[0]+o[0])/2,b=s*_+c*v+(e[1]+o[1])/2,x=(e,t,n,r)=>Math.atan2(e*r-t*n,e*n+t*r),S=x(1,0,(d-_)/t,(f-v)/n),C=x((d-_)/t,(f-v)/n,(-d-_)/t,(-f-v)/n);!a&&C>0&&(C-=2*Math.PI),a&&C<0&&(C+=2*Math.PI);let w=Math.ceil(Math.abs(C)/(Math.PI/2)),T=[],E=e=>[y+t*Math.cos(e)*c-n*Math.sin(e)*s,b+t*Math.cos(e)*s+n*Math.sin(e)*c],D=e=>[-t*Math.sin(e)*c-n*Math.cos(e)*s,-t*Math.sin(e)*s+n*Math.cos(e)*c];for(let e=0;e<w;e++){let t=S+C*e/w,n=S+C*(e+1)/w,r=4/3*Math.tan((n-t)/4),i=E(t),a=E(n),o=D(t),s=D(n);T.push([i,[i[0]+r*o[0],i[1]+r*o[1]],[a[0]-r*s[0],a[1]-r*s[1]],a])}return T}function Tc(e){let t=e.match(/[a-zA-Z]|[-+]?(?:\d*\.\d+|\d+\.?)(?:e[-+]?\d+)?/g)??[],n=[],r=0,i=``,a=[0,0],o=[0,0],s=null,c=``,l=()=>Number(t[r++]),u=()=>r<t.length&&!/[a-zA-Z]/.test(t[r]);for(;r<t.length;){/[a-zA-Z]/.test(t[r])&&(i=t[r++]);let e=i===i.toLowerCase(),d=i.toUpperCase(),f=(t,n)=>e?[a[0]+t,a[1]+n]:[t,n];switch(d){case`M`:a=f(l(),l()),o=a,i=e?`l`:`L`,s=null;break;case`L`:{let e=f(l(),l());n.push([a,e]),a=e,s=null;break}case`H`:{let t=l(),r=[e?a[0]+t:t,a[1]];n.push([a,r]),a=r,s=null;break}case`V`:{let t=l(),r=[a[0],e?a[1]+t:t];n.push([a,r]),a=r,s=null;break}case`C`:{let e=f(l(),l()),t=f(l(),l()),r=f(l(),l());n.push([a,e,t,r]),s=t,a=r;break}case`S`:{let e=s&&/[CS]/i.test(c)?[2*a[0]-s[0],2*a[1]-s[1]]:a,t=f(l(),l()),r=f(l(),l());n.push([a,e,t,r]),s=t,a=r;break}case`Q`:{let e=f(l(),l()),t=f(l(),l());n.push([a,e,t]),s=e,a=t;break}case`T`:{let e=s&&/[QT]/i.test(c)?[2*a[0]-s[0],2*a[1]-s[1]]:a,t=f(l(),l());n.push([a,e,t]),s=e,a=t;break}case`A`:{let e=l(),t=l(),r=l()*Math.PI/180,i=l()!==0,o=l()!==0,c=f(l(),l());n.push(...wc(a,e,t,r,i,o,c)),a=c,s=null;break}case`Z`:Math.hypot(a[0]-o[0],a[1]-o[1])>1e-9&&n.push([a,o]),a=o,s=null;break;default:r++}c=d,d===`Z`&&u()&&(i=`L`)}return n}function Ec(e){let t=e.getAttribute(`width`)??``,n=(e.getAttribute(`viewBox`)??``).split(/[\s,]+/).map(Number),r=/mm$/.test(t)?parseFloat(t):/cm$/.test(t)?parseFloat(t)*10:/in$/.test(t)?parseFloat(t)*25.4:null;return r&&n.length===4&&n[2]>0?r/n[2]:r?1:25.4/96}function Dc(e){let t=new DOMParser().parseFromString(e,`image/svg+xml`).documentElement,n=Ec(t),r=[n,0,0,-n,0,0],i=[],a=(e,t)=>{let n=bc(t,Cc(e.getAttribute(`transform`))),r=e.tagName.toLowerCase().replace(/^.*:/,``),o=t=>parseFloat(e.getAttribute(t)??`0`)||0,s=[];if(r===`path`)s.push(...Tc(e.getAttribute(`d`)??``));else if(r===`line`)s.push([[o(`x1`),o(`y1`)],[o(`x2`),o(`y2`)]]);else if(r===`rect`){let[e,t,n,r]=[o(`x`),o(`y`),o(`width`),o(`height`)];s.push([[e,t],[e+n,t]],[[e+n,t],[e+n,t+r]],[[e+n,t+r],[e,t+r]],[[e,t+r],[e,t]])}else if(r===`polyline`||r===`polygon`){let t=(e.getAttribute(`points`)??``).split(/[\s,]+/).filter(Boolean).map(Number),n=[];for(let e=0;e+1<t.length;e+=2)n.push([t[e],t[e+1]]);for(let e=0;e<n.length-1;e++)s.push([n[e],n[e+1]]);r===`polygon`&&n.length>2&&s.push([n[n.length-1],n[0]])}else if(r===`circle`||r===`ellipse`){let e=o(`cx`),t=o(`cy`),n=o(r===`circle`?`r`:`rx`),i=o(r===`circle`?`r`:`ry`);s.push(...wc([e+n,t],n,i,0,!1,!0,[e-n,t]),...wc([e-n,t],n,i,0,!1,!0,[e+n,t]))}for(let e of s){let t=e.map(e=>xc(n,e));t.length===2?Math.hypot(t[1][0]-t[0][0],t[1][1]-t[0][1])>1e-9&&i.push({id:V(),t:`line`,a:t[0],b:t[1]}):i.push({id:V(),t:`bezier`,pts:t})}for(let t of Array.from(e.children))[`defs`,`clippath`,`mask`,`style`,`title`].includes(t.tagName.toLowerCase())||a(t,n)};return a(t,r),i}function Oc(e,t){let n=e.filter(e=>e.t!==`xline`&&e.t!==`point`),[[r,i],[a,o]]=Ac(n),s=Math.max(a-r,.001),c=Math.max(o-i,.001),l=e=>`${(e[0]-r).toFixed(4)},${(o-e[1]).toFixed(4)}`,u=n.map(e=>{let n=Le(ut(e.style,t));return e.t===`line`?`<line x1="${(e.a[0]-r).toFixed(4)}" y1="${(o-e.a[1]).toFixed(4)}" x2="${(e.b[0]-r).toFixed(4)}" y2="${(o-e.b[1]).toFixed(4)}"${n}/>`:e.t===`circle`?`<circle cx="${(e.c[0]-r).toFixed(4)}" cy="${(o-e.c[1]).toFixed(4)}" r="${e.r.toFixed(4)}"${n}/>`:`<polyline points="${vi(e,2).map(l).join(` `)}"${n}/>`}).join(`
  `);return`<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="${s.toFixed(3)}mm" height="${c.toFixed(3)}mm" viewBox="0 0 ${s.toFixed(4)} ${c.toFixed(4)}" fill="none" stroke="black" stroke-width="0.2">\n  ${u}\n</svg>\n`}var kc=`NUKCAD`;function Ac(e){let t=1/0,n=1/0,r=-1/0,i=-1/0;for(let a of e)if(a.t!==`xline`)for(let e of vi(a,.5))e[0]<t&&(t=e[0]),e[0]>r&&(r=e[0]),e[1]<n&&(n=e[1]),e[1]>i&&(i=e[1]);return Number.isFinite(t)?[[t,n],[r,i]]:[[0,0],[100,100]]}var jc=e=>String(+e.toFixed(6));function Mc(e,t){return[`9`,`$EXTMIN`,`10`,jc(e[0]),`20`,jc(e[1]),`30`,`0`,`9`,`$EXTMAX`,`10`,jc(t[0]),`20`,jc(t[1]),`30`,`0`]}function Nc(e,t){let n=Math.max(t[0]-e[0],.001),r=Math.max(t[1]-e[1],.001),i=Math.max(r,n/1.6)*1.1,a=[(e[0]+t[0])/2,(e[1]+t[1])/2];return[`0`,`TABLE`,`2`,`VPORT`,`70`,`1`,`0`,`VPORT`,`2`,`*ACTIVE`,`70`,`0`,`10`,`0.0`,`20`,`0.0`,`11`,`1.0`,`21`,`1.0`,`12`,jc(a[0]),`22`,jc(a[1]),`13`,`0.0`,`23`,`0.0`,`14`,`1.0`,`24`,`1.0`,`15`,`10.0`,`25`,`10.0`,`16`,`0.0`,`26`,`0.0`,`36`,`1.0`,`17`,`0.0`,`27`,`0.0`,`37`,`0.0`,`40`,jc(i),`41`,`1.6`,`42`,`50.0`,`43`,`0.0`,`44`,`0.0`,`50`,`0.0`,`51`,`0.0`,`71`,`0`,`72`,`100`,`73`,`1`,`74`,`0`,`75`,`0`,`76`,`0`,`77`,`0`,`78`,`0`,`0`,`ENDTAB`]}function Pc(e,t){let n=e=>ut(e.style,t),r=e.filter(e=>e.t!==`xline`),[i,a]=Ac(r),o=[`0`,`SECTION`,`2`,`HEADER`,`9`,`$ACADVER`,`1`,`AC1009`,`9`,`$INSUNITS`,`70`,`4`,`9`,`$MEASUREMENT`,`70`,`1`,...Mc(i,a),`0`,`ENDSEC`];o.push(`0`,`SECTION`,`2`,`TABLES`,...Nc(i,a));let s=new Map;for(let e of r){let t=n(e);t.type&&s.set($e(t.type,t.weight),[t.type,t.type===`continuous`?void 0:t.weight])}if(r.some(e=>!ee(n(e)))){s.set(`CONTINUOUS`,[`continuous`,void 0]),o.push(`0`,`TABLE`,`2`,`LTYPE`,`70`,String(s.size));for(let[e,t]of s.values())o.push(...re(e,t));o.push(`0`,`ENDTAB`),o.push(`0`,`TABLE`,`2`,`APPID`,`70`,`2`,`0`,`APPID`,`2`,`ACAD`,`70`,`0`,`0`,`APPID`,`2`,kc,`70`,`0`,`0`,`ENDTAB`)}o.push(`0`,`ENDSEC`),o.push(`0`,`SECTION`,`2`,`ENTITIES`);let c=(...e)=>o.push(...e.map(String)),l=(e,t)=>{let r=n(t);c(`0`,e,`8`,`0`),r.type&&c(`6`,$e(r.type,r.weight)),r.color&&c(`62`,Xn(r.color))},u=e=>{let t=n(e);(t.weight!=null||t.color)&&(c(`1001`,kc),t.weight!=null&&c(`1070`,Math.round(t.weight*100)),t.color&&c(`1000`,t.color))};for(let e of r){if(e.t===`point`)l(`POINT`,e),c(`10`,e.p[0],`20`,e.p[1],`30`,0);else if(e.t===`line`)l(`LINE`,e),c(`10`,e.a[0],`20`,e.a[1],`30`,0,`11`,e.b[0],`21`,e.b[1],`31`,0);else if(e.t===`circle`)l(`CIRCLE`,e),c(`10`,e.c[0],`20`,e.c[1],`30`,0,`40`,e.r);else if(e.t===`arc`){let t=e.a0*180/Math.PI;l(`ARC`,e),c(`10`,e.c[0],`20`,e.c[1],`30`,0,`40`,e.r,`50`,t,`51`,t+Yi(e.a0,e.a1)*180/Math.PI)}else{l(`POLYLINE`,e),c(`66`,1,`70`,0),u(e);for(let t of vi(e,2))c(`0`,`VERTEX`,`8`,`0`,`10`,t[0],`20`,t[1],`30`,0);c(`0`,`SEQEND`);continue}u(e)}return c(`0`,`ENDSEC`,`0`,`EOF`),o.join(`
`)}var Fc=.25,Ic=Nt;function Lc(e){let[t,n]=Ic[e.paper];return e.landscape?[t,n]:[n,t]}var Rc=[10,5,2,1,1/2,1/5,1/10,1/20,1/50,1/100,1/200,1/500,1/1e3],zc=E,Bc=e=>e.free?`NA`:E(e.scale);function Vc(e){let[t,n]=Lc(e),r=bn(e.paper,!!e.filing),i={x0:r.l,y0:r.t,x1:t-r.r,y1:n-r.b},[a,o]=e.hide?.title?[0,0]:e.titleTable?br(e.titleTable):[Je,jr];return{W:t,H:n,m:r,frame:i,title:{x0:i.x1-a,y0:i.y1-o,x1:i.x1,y1:i.y1}}}function Hc(e,t){return e.titleTable??tr(t.labels,t.method===null)}var Uc=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Wc=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Gc=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},Kc=.5*Math.SQRT1_2;function qc(e){return Gc(Wc(Math.abs(e[2])>.999?[0,1,0]:[0,0,1],e))}var Jc={front:{dir:[0,-1,0],x:[1,0,0]},back:{dir:[0,1,0],x:[-1,0,0]},right:{dir:[1,0,0],x:[0,1,0]},left:{dir:[-1,0,0],x:[0,-1,0]},top:{dir:[0,0,1],x:[1,0,0]},bottom:{dir:[0,0,-1],x:[1,0,0]},iso:{dir:Gc([1,-1,1]),x:Gc([1,1,0])}};function Yc(e){let t=Jc[e.kind];if(t)return{...t};if(e.kind===`oblique`){let e=Gc([Kc,-1,Kc]),t=qc(e),n=Wc(e,t),r=[-Kc,1,-Kc];return{dir:e,x:t,post:(e,i)=>{let a=[e*t[0]+i*n[0],e*t[1]+i*n[1],e*t[2]+i*n[2]],o=-a[1]/r[1];return[a[0]+o*r[0],a[2]+o*r[2]]}}}let n=e.plane??{o:[0,0,0],n:[0,-1,0],name:`XZ`},r=Gc(n.n),i=e.flip?[-r[0],-r[1],-r[2]]:r,a={dir:i,x:qc(i)};if(e.kind===`section`){let t=e.offset??0;a.section={origin:[n.o[0]+r[0]*t,n.o[1]+r[1]*t,n.o[2]+r[2]*t],normal:i}}return a}function Xc(e,t,n){let r=[];for(let e of[t[0],n[0]])for(let i of[t[1],n[1]])for(let a of[t[2],n[2]])r.push([e,i,a]);let i=Yc(e),a=Wc(i.dir,i.x),o=1/0,s=-1/0,c=1/0,l=-1/0;for(let e of r){let t=Uc(e,i.x),n=Uc(e,a);i.post&&([t,n]=i.post(t,n)),o=Math.min(o,t),s=Math.max(s,t),c=Math.min(c,n),l=Math.max(l,n)}return[s-o,l-c]}var Zc=0,Qc=()=>`v${Date.now().toString(36)}${(Zc++).toString(36)}`;function $c(e,t,n,r,i={}){return{id:Qc(),kind:e,scale:t,x:n,y:r,hidden:e!==`iso`&&e!==`oblique`,dims:e!==`iso`&&e!==`oblique`,...i}}var el={side:3,title:3},tl={side:5,title:8};function nl(e,t=el){let n=Vc(e);return{x0:n.frame.x0+t.side,y0:n.frame.y0+t.side,x1:n.frame.x1-t.side,y1:n.title.y0-t.title}}function rl(e,t,n){let r={paper:`A3`,landscape:!0,method:`third`,title:``,author:``,school:``,views:[],...n};return r.views=il(r,e,t),r.views=cl(r,n=>Xc(n,e,t),Rc).views,r}function il(e,t,n){let r=Math.max(n[0]-t[0],1),i=Math.max(n[1]-t[1],1),a=Math.max(n[2]-t[2],1),o=nl(e),s=Xc($c(`iso`,1,0,0),t,n),c=e=>(r+i)*e+60,l=e=>(a+i)*e+60,u=Rc.find(e=>c(e)<=o.x1-o.x0&&l(e)<=o.y1-o.y0)??Rc[Rc.length-1],d=r*u,f=a*u,p=i*u,m=d+24+p,h=f+24+p,g=o.x0+24*.6+Math.max(0,(o.x1-o.x0-24*.6-m)/2)*.6,_=o.y0+Math.max(0,(o.y1-o.y0-24*.8-h)/2),v=[];if(e.method===`third`){let e=g+d/2,t=_+p+24+f/2;v.push($c(`top`,u,e,_+p/2)),v.push($c(`front`,u,e,t)),v.push($c(`right`,u,g+d+24+p/2,t))}else{let e=g+d/2,t=_+f/2;v.push($c(`front`,u,e,t)),v.push($c(`top`,u,e,_+f+24+p/2)),v.push($c(`left`,u,g+d+24+p/2,t))}let y=o.x1-(g+d+24),b=e.method===`third`?_+p-o.y0:o.y1-(_+f+24)-24*.6,x=Rc.find(e=>e<=u&&s[0]*e<=y&&s[1]*e<=b)??u,S=s[0]*x,C=s[1]*x,w=g+d+24+Math.max(S/2,Math.min(y-S/2,p/2)),T=e.method===`third`?Math.max(o.y0+C/2,_+p-C/2):_+f+24+C/2;return v.push($c(`iso`,x,Math.max(w,o.x0+S/2),T)),v}function al(e){return e.arch?.kind===`elevation`?[4,4,30,9]:e.arch?.kind===`plan`||e.dims&&pl(e)?[17,4,4,20]:[4,4,4,9]}function ol(e,t){let n=[...t].sort((e,t)=>t-e);return n.find(t=>t<=e*(1+1e-9))??n[n.length-1]}function sl(e,t){let n=e.map((e,t)=>t).filter(e=>!t[e]),r=(n.length?n:e.map((e,t)=>t)).sort((t,n)=>e[t][0]-e[n][0]),i=[],a=e.map(()=>-1);for(let t of r){let n=i[i.length-1];n&&e[t][0]<n.hi-1e-6?n.hi=Math.max(n.hi,e[t][1]):i.push({lo:e[t][0],hi:e[t][1]}),a[t]=i.length-1}return e.forEach(([e,t],n)=>{if(a[n]>=0)return;let r=(e+t)/2,o=0,s=1/0;i.forEach((e,t)=>{let n=r<e.lo?e.lo-r:r>e.hi?r-e.hi:0;n<s&&([o,s]=[t,n])}),a[n]=o}),{of:a,count:i.length}}function cl(e,t,n,r){let i=e.views;if(!i.length)return{views:i,scale:null,fits:!0};let a=nl(e),o=a.x1-a.x0,s=a.y1-a.y0,c=i.map(t),l=i.map(al),u=i.map((e,t)=>[c[t][0]*e.scale,c[t][1]*e.scale]),d=i.map(e=>!pl(e)),f=sl(i.map((e,t)=>[e.x-u[t][0]/2,e.x+u[t][0]/2]),d),p=sl(i.map((e,t)=>[e.y-u[t][1]/2,e.y+u[t][1]/2]),d),m=i.find(e=>e.kind===`front`&&!e.free)??i.find(e=>!e.free)??null,h=e=>i.map(t=>t.free?t.scale*e:ol(t.scale*e,n)),g=e=>{let t=Array.from({length:f.count},()=>[0,0,0]),n=Array.from({length:p.count},()=>[0,0,0]);i.forEach((r,i)=>{let a=t[f.of[i]],o=n[p.of[i]];a[0]=Math.max(a[0],l[i][0]),a[1]=Math.max(a[1],c[i][0]*e[i]),a[2]=Math.max(a[2],l[i][2]),o[0]=Math.max(o[0],l[i][1]),o[1]=Math.max(o[1],c[i][1]*e[i]),o[2]=Math.max(o[2],l[i][3])});let r=t.reduce((e,t)=>e+t[0]+t[1]+t[2],0),a=n.reduce((e,t)=>e+t[0]+t[1]+t[2],0);return{cw:t,rh:n,W:r,H:a,fits:r<=o+1e-6&&a<=s+1e-6}},_,v=null;if(m){let e=[...n].sort((e,t)=>t-e),t=r?.only&&r.only>0?r.only:e.find(e=>g(h(e/m.scale)).fits)??e[e.length-1];_=h(t/m.scale),v=t}else{let e=1e-4,t=1e4;for(let n=0;n<60;n++){let n=Math.sqrt(e*t);g(h(n)).fits?e=n:t=n}_=h(e)}let y=g(_),b=[],x=a.x0+Math.max(0,(o-y.W)/2);for(let e of y.cw)b.push(x+e[0]+e[1]/2),x+=e[0]+e[1]+e[2];let S=[],C=a.y0+Math.max(0,(s-y.H)/2);for(let e of y.rh)S.push(C+e[0]+e[1]/2),C+=e[0]+e[1]+e[2];return{views:i.map((e,t)=>({...e,scale:_[t],x:+b[f.of[t]].toFixed(3),y:+S[p.of[t]].toFixed(3)})),scale:v,fits:y.fits}}var ll=e=>(Math.round(e*100)/100||0).toFixed(2);function ul(e){let t=new Map;for(let n of e??[]){if(!(n.r>1e-6)||!(n.len>=0))continue;let e=Gc(n.d),r=Math.abs(e[0])>1e-6?e[0]:Math.abs(e[1])>1e-6?e[1]:e[2],i=Uc(n.p,e),a=i+n.len;r<0&&(e=[-e[0],-e[1],-e[2]],[i,a]=[-a,-i]);let o=`${[n.p[0]-e[0]*Uc(n.p,e),n.p[1]-e[1]*Uc(n.p,e),n.p[2]-e[2]*Uc(n.p,e)].map(ll).join(`,`)}|${e.map(e=>(Math.round(e*1e4)/1e4||0).toFixed(4)).join(`,`)}|${ll(n.r)}`,s=t.get(o);if(!s){t.set(o,{...n,d:e,key:o,full:!1,t0:i,t1:a,best:n.span});continue}s.span+=n.span,s.t0=Math.min(s.t0,i),s.t1=Math.max(s.t1,a),n.span>s.best&&(s.best=n.span,s.m=n.m)}return[...t.values()].map(({t0:e,t1:t,best:n,...r})=>{let i=[r.p[0]-r.d[0]*Uc(r.p,r.d),r.p[1]-r.d[1]*Uc(r.p,r.d),r.p[2]-r.d[2]*Uc(r.p,r.d)];return{...r,p:[i[0]+r.d[0]*e,i[1]+r.d[1]*e,i[2]+r.d[2]*e],len:t-e,full:r.span>=Math.PI*2-.05}})}var dl=(e,t)=>Math.abs(Uc(e.d,t.dir))>.999,fl=(e,t)=>Math.abs(Uc(e.d,t.dir))<.001,pl=e=>e.kind!==`iso`&&e.kind!==`oblique`,ml=[`front`,`top`,`right`,`left`,`back`,`bottom`,`section`,`custom`],hl=e=>{let t=[0,1,2].find(t=>Math.abs(Math.abs(e[t])-1)<1e-6);return t==null?e.map(e=>(Math.round(Math.abs(e)*1e3)/1e3).toFixed(3)).join(`,`):`xyz`[t]};function gl(e){let t=new Map,n=new Set,r=new Set,i=[...e].filter(e=>e.view.dims&&pl(e.view)).sort((e,t)=>ml.indexOf(e.view.kind)-ml.indexOf(t.view.kind));for(let{view:e,axes:a}of i){let i=Yc(e),o=hl(i.x),s=hl(Wc(i.dir,i.x)),c={h:!n.has(o),v:!n.has(s),rounds:new Set};n.add(o),n.add(s);for(let e of ul(a))r.has(e.key)||!dl(e,i)||!e.full&&e.span<.2||(r.add(e.key),c.rounds.add(e.key));t.set(e.id,c)}return t}function _l(e,t){let n=Yc(e),r=e=>{if(!n.post)return e;let t=new Float32Array(e.length);for(let r=0;r<e.length;r+=2){let[i,a]=n.post(e[r],e[r+1]);t[r]=i,t[r+1]=a}return t},i=r(t.visible),a=r(t.hidden),o=t.cut.map(r),s=1/0,c=1/0,l=-1/0,u=-1/0;for(let e of[i,a,...o])for(let t=0;t<e.length;t+=2)s=Math.min(s,e[t]),l=Math.max(l,e[t]),c=Math.min(c,e[t+1]),u=Math.max(u,e[t+1]);return Number.isFinite(s)||([s,c,l,u]=[0,0,0,0]),{visible:i,hidden:a,cut:o,axes:t.axes,box:[s,c,l,u]}}function vl(e,t){let n=(t[0]+t[2])/2,r=(t[1]+t[3])/2;return(t,i)=>[e.x+(t-n)*e.scale,e.y-(i-r)*e.scale]}function yl(e,t,n){let r=[];for(let i=0;i+5<e.length;i+=6){let a=[n(e[i],e[i+1]),n(e[i+2],e[i+3]),n(e[i+4],e[i+5])],o=a.map(([e,t])=>e-t),s=Math.ceil(Math.min(...o)/t)*t,c=Math.max(...o);for(let e=s;e<=c;e+=t){let t=[];for(let n=0;n<3;n++){let r=a[n],i=a[(n+1)%3],o=r[0]-r[1]-e,s=i[0]-i[1]-e;if(o<=0&&s>=0||o>=0&&s<=0){let e=o===s?0:o/(o-s);t.push([r[0]+(i[0]-r[0])*e,r[1]+(i[1]-r[1])*e])}}t.length>=2&&r.push(t[0][0],t[0][1],t[1][0],t[1][1])}}return r}var bl=(e,t,n,r,i)=>e.push(t,n,r,n,r,n,r,i,r,i,t,i,t,i,t,n);function xl(e){let t=Vc(e),n=Tr.length,r=t.W/2-n/2;return r+n>t.title.x0-3&&(r=t.title.x0-3-n),r>=t.frame.x0+3?{x0:r,base:t.frame.y1}:{x0:(t.frame.x0+t.frame.x1)/2-n/2,base:t.title.y0-1.5}}function Sl(e){return{school:e.school,number:e.number,author:e.author,title:e.title,date:e.date,scale:e.scale,method:e.method?e.methodText:``,docNo:e.docNo,unit:e.unit}}var Cl=e=>[...e.matchAll(/\{([^{}]{1,20})\}/g)].some(e=>Xt(e[1])===`title`);function wl(e,t,n,r,i,a){let[o,s]=br(t);bl(e.thick,n,r,n+o,r+s);let c=Dt;for(let i=1;i<t.rows;i++)e.thin.push(n,r+c*i,n+o,r+c*i);let l=pr(t,n,r);for(let t of l)t.r===0&&t.c>0&&e.thin.push(t.x,r,t.x,r+s);let d=Sl(i),f=Math.min(a,c-3);for(let n of l){let r=t.cells[n.r]?.[n.c]??``;if(!r.trim())continue;let a=n.y+c/2;if(It(r)===`method`&&i.method){let t=c-3.4,r=Math.min(f,3),o=t*2.5,s=n.w-2,l=u(i.methodText,r,Math.max(1,s-1.5-o)),d=oe(l.text,l.size),p=n.x+1+Math.max(0,(s-d-1.5-o)/2);e.texts.push({x:p,y:a+l.size*.36,s:l.size,text:l.text,anchor:`start`});let m=Pe(p+d+1.5+o/2,a,t,i.method);e.thick.push(...m.lines),e.centre.push(...m.centre);continue}let o=or(r,d);if(!o.trim())continue;let s=u(o,f,n.w-2);e.texts.push({x:n.x+n.w/2,y:a+s.size*.36,s:s.size,text:s.text,bold:Cl(r)})}}function Tl(e,t){let{W:n,H:r,frame:i,title:a}=Vc(e),o=Oe(e.paper),s=e.hide??{},c={border:[],thick:[],thin:[],scale:[],centre:[],fills:[],texts:[]};bl(c.border,i.x0,i.y0,i.x1,i.y1);let l=n/2>a.x0&&n/2<a.x1;s.centre||c.border.push(n/2,0,n/2,i.y0+5,n/2,r,n/2,l?i.y1:i.y1-5,0,r/2,i.x0+5,r/2,n,r/2,i.x1-5,r/2);let[u,d]=b[e.paper],[f,p]=e.landscape?[u,d]:[d,u],m=3.5,h=(i.x1-i.x0)/f,g=(i.y1-i.y0)/p;for(let e=0;e<f&&!s.zones;e++){let t=i.x0+h*e;e>0&&c.thin.push(t,i.y0,t,i.y0-5,t,i.y1,t,i.y1+5);let n=String(e+1);c.texts.push({x:t+h/2,y:i.y0-5/2+m*.36,s:m,text:n},{x:t+h/2,y:i.y1+5/2+m*.36,s:m,text:n})}for(let e=0;e<p&&!s.zones;e++){let t=i.y0+g*e;e>0&&c.thin.push(i.x0,t,i.x0-5,t,i.x1,t,i.x1+5,t);let n=`ABCDEFGHJKLMNPQRSTUVWXYZ`[e]??``;c.texts.push({x:i.x0-5/2,y:t+g/2+m*.36,s:m,text:n},{x:i.x1+5/2,y:t+g/2+m*.36,s:m,text:n})}if(!s.scaleBar){let t=xl(e);c.scale.push(t.x0,t.base,t.x0+Tr.length,t.base);for(let e=0;e<=Tr.length/Tr.step;e++){let n=t.x0+e*Tr.step;c.scale.push(n,t.base,n,t.base-(e%5==0?Tr.height:Tr.height*.6))}}if(s.title||wl(c,Hc(e,t),a.x0,a.y0,t,o.label),t.north){let e=Te(i.x1-5-6,i.y0+9+6,6);c.thin.push(...e.lines),c.fills.push(...e.fill),c.texts.push({x:e.n.x,y:e.n.y,s:3.5,text:`N`,bold:!0})}return c}function El(e,t,n,r,i,a){let o=Math.hypot(i-n,a-r);if(o<1e-9)return;let s=(i-n)/o,c=(a-r)/o;if(o>=Wn.arrowL*2+1)e.push(n,r,i,a),t.push(...Xe(n,r,-s,-c),...Xe(i,a,s,c));else{let o=Wn.arrowL+2;e.push(n-s*o,r-c*o,i+s*o,a+c*o),t.push(...Xe(n,r,s,c),...Xe(i,a,-s,-c))}}function Dl(e,t){let n=[];for(let[t,r,i,a]of e){let e=Math.hypot(i-t,a-r);if(e<1e-6)continue;let o=(i-t)/e,s=(a-r)/e;(o<-1e-9||Math.abs(o)<=1e-9&&s<0)&&([o,s]=[-o,-s]);let c=-s*t+o*r,l=n.find(e=>Math.abs(e.ux*s-e.uy*o)<1e-4&&Math.abs(e.c-c)<.05);l||n.push(l={ux:o,uy:s,nx:0,c,iv:[],ox:t,oy:r});let u=(e,t)=>(e-l.ox)*l.ux+(t-l.oy)*l.uy,d=u(t,r),f=u(i,a);l.iv.push([Math.min(d,f),Math.max(d,f)])}let r=[];for(let e of n){e.iv.sort((e,t)=>e[0]-t[0]);let n=[];for(let t of e.iv){let e=n[n.length-1];e&&t[0]<=e[1]+.5?e[1]=Math.max(e[1],t[1]):n.push([...t])}for(let[i,a]of n)r.push([e.ox+e.ux*(i-t),e.oy+e.uy*(i-t),e.ox+e.ux*(a+t),e.oy+e.uy*(a+t)])}return r}var Ol=(e,t,n,r,i)=>{let a=(t+r)/2,o=(n+i)/2;e.push(a,o,t,n,a,o,r,i)};function kl(e,t,n,r,i){let a=_l(e,t),o=vl(e,a.box),s=i?.text??3.5,c=e=>{let t=[];for(let n=0;n<e.length;n+=2)t.push(...o(e[n],e[n+1]));return t},l=[],u=[];for(let e of a.cut)l.push(...c(e)),i?.noHatch||u.push(...yl(e,2.5,o));let d=[],f=[],p=[],m=[],[h]=o(a.box[0],a.box[3]),[g,_]=o(a.box[2],a.box[1]),v=Yc(e),y=Wc(v.dir,v.x),b=e=>o(Uc(e,v.x),Uc(e,y)),x=pl(e)?ul(a.axes):[],S=new Map,C=[];for(let t of x)if(t.full){if(dl(t,v)){let[n,r]=b(t.p),i=`${n.toFixed(2)},${r.toFixed(2)}`,a=t.r*e.scale+Wn.centreOver,o=S.get(i);(!o||o.arm<a)&&S.set(i,{x:n,y:r,arm:a})}else if(fl(t,v)){let[e,n]=b(t.p),[r,i]=b([t.p[0]+t.d[0]*t.len,t.p[1]+t.d[1]*t.len,t.p[2]+t.d[2]*t.len]);C.push([e,n,r,i])}}i?.noAxes&&(S.clear(),C.length=0);for(let e of S.values())p.push(e.x,e.y,e.x+e.arm,e.y,e.x,e.y,e.x-e.arm,e.y,e.x,e.y,e.x,e.y-e.arm,e.x,e.y,e.x,e.y+e.arm);for(let[e,t,n,r]of Dl(C,Wn.centreOver))Ol(p,e,t,n,r);let w=Wn.leaderAngle*Math.PI/180;for(let t of x){if(!i?.plan?.rounds.has(t.key)||!dl(t,v))continue;let[n,a]=b(t.p),o=t.r*e.scale;if(o<.2)continue;let c,l,u,p,h=1,g;if(t.full){let e=Math.cos(w),i=-Math.sin(w);c=n+e*o,l=a+i*o,u=c+e*7,p=l+i*7,d.push(c,l,u,p),f.push(...Xe(c,l,-e,-i)),g=wn(r(t.r*2),`dia`)}else{let[e,i]=[Uc(t.m,v.x),-Uc(t.m,y)],s=Math.hypot(e,i);if(s<1e-6)continue;let m=e/s,_=i/s;c=n+m*o,l=a+_*o,u=c+m*5,p=l+_*5,d.push(n,a,u,p),f.push(...Xe(c,l,m,_)),h=m<-1e-6?-1:1,g=wn(r(t.r),`rad`)}let _=oe(g,s);d.push(u,p,u+h*(_+Wn.shoulder),p),m.push({x:u+h*Wn.shoulder/2,y:p-Wn.textGap,s,text:g,anchor:h>0?`start`:`end`})}let T=i?.dimBox??a.box,[E,D]=o(T[0],T[3]),[O,k]=o(T[2],T[1]),A=!i?.plan||i.plan.h,j=!i?.plan||i.plan.v,ee=e.dims&&O>E&&A;if(ee){let e=_+Wn.first;d.push(E,k+Wn.gap,E,e+Wn.over,O,k+Wn.gap,O,e+Wn.over),El(d,f,E,e,O,e),m.push({x:(E+O)/2,y:e-Wn.textGap,s,text:r(T[2]-T[0])})}if(e.dims&&k>D&&j){let e=h-Wn.first;d.push(E-Wn.gap,D,e-Wn.over,D,E-Wn.gap,k,e-Wn.over,k),El(d,f,e,k,e,D),m.push({x:e-Wn.textGap,y:(D+k)/2,s,text:r(T[3]-T[1]),rot:-90})}for(let e of i?.marks??[]){let[,t]=o(a.box[0],e.y),n=g+2;d.push(n,t,n+26,t,n+2,t,n+.8,t-1.6,n+.8,t-1.6,n+3.2,t-1.6,n+3.2,t-1.6,n+2,t),m.push({x:n+15,y:t-1,s:Math.min(s,3),text:e.text})}return m.push({x:(h+g)/2,y:ee?_+Wn.first+s+3:_+s+2.5,s,text:n,label:!0}),{view:e,visible:c(a.visible),hidden:c(a.hidden),hatch:u,dims:d,arrows:f,centre:p,texts:m,cut:l}}var Al=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`),jl=e=>{let t=Math.round(Number(e)*1e3)/1e3;return Number.isFinite(t)?t.toString():`0`},Ml=new Set([`start`,`middle`,`end`]);function Nl(e){let t=``;for(let n=0;n+3<e.length;n+=4)t+=`M${jl(e[n])} ${jl(e[n+1])}L${jl(e[n+2])} ${jl(e[n+3])}`;return t}function Pl(e){let t=``;for(let n=0;n+5<e.length;n+=6)t+=`M${jl(e[n])} ${jl(e[n+1])}L${jl(e[n+2])} ${jl(e[n+3])}L${jl(e[n+4])} ${jl(e[n+5])}Z`;return t}var Fl=`font-family="Pretendard, 'Malgun Gothic', Arial, sans-serif"`;function Il(e,t){let n=e.text.split(`
`),r=e.anchor&&Ml.has(e.anchor)?e.anchor:`middle`,i=e.rot?` transform="rotate(${jl(e.rot)} ${jl(e.x)} ${jl(e.y)})"`:``;return n.map((a,o)=>{let s=e.y-(n.length-1-o)*e.s*.95;return`<text x="${jl(e.x)}" y="${jl(s)}" font-size="${jl(e.s)}" text-anchor="${r}" fill="${t}"${e.bold?` font-weight="700"`:``}${i}>${Al(a)}</text>`}).join(``)}var Ll=(e,t,n,r=``,i=`butt`)=>e.length?`<path d="${Nl(e)}" stroke="${n}" stroke-width="${t}"${r?` stroke-dasharray="${r}"`:``} stroke-linecap="${i}" fill="none"/>`:``;function Rl(e,t,n=!1){let r=n?`#111`:`#000`,i=n?`#2c6fbb`:`#000`,a=``;return a+=Ll(e.hatch,t.thin*.7,r),a+=Ll(e.hidden,t.thin,r,kt(`dashed`,t.thin)),a+=Ll(e.centre,t.thin,r,kt(`chain`,t.thin)),a+=Ll(e.visible,t.thick,r,``,`round`),a+=Ll(e.dims,t.thin,i),e.arrows.length&&(a+=`<path d="${Pl(e.arrows)}" fill="${i}" stroke="none"/>`),a+=`<g ${Fl}>${e.texts.map(e=>Il(e,e.label?r:i)).join(``)}</g>`,a}function zl(e,t){let n=Oe(e.paper),r=Tl(e,t),i=Ll(r.border,n.border,`#000`,``,`square`);return i+=Ll(r.thick,n.thick,`#000`),i+=Ll(r.thin,n.thin,`#000`),i+=Ll(r.scale,Tr.pen,`#000`),i+=Ll(r.centre,n.thin,`#000`,kt(`chain`,n.thin*.5)),r.fills.length&&(i+=`<path d="${Pl(r.fills)}" fill="#000" stroke="none"/>`),i+=`<g ${Fl}>${r.texts.map(e=>Il(e,`#000`)).join(``)}</g>`,i}function Bl(e,t,n){let[r,i]=Lc(e),a=Oe(e.paper),o=t.map(e=>`<g>${Rl(e,a)}</g>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" width="${r}mm" height="${i}mm" viewBox="0 0 ${r} ${i}"><rect width="${r}" height="${i}" fill="#fff"/>${zl(e,n)}${o}</svg>`}var Vl=class{flipH;thin;body=[];view=null;constructor(e=0,t=Fc){this.flipH=e,this.thin=t}y(e){return this.flipH?this.flipH-e:e}lines(e,t){for(let n=0;n+3<e.length;n+=4)this.body.push(`0\nLINE\n8\n${t}\n10\n${e[n].toFixed(4)}\n20\n${this.y(e[n+1]).toFixed(4)}\n30\n0\n11\n${e[n+2].toFixed(4)}\n21\n${this.y(e[n+3]).toFixed(4)}\n31\n0`)}solids(e,t){for(let n=0;n+5<e.length;n+=6){let r=(e,t,n)=>`1${e}\n${t.toFixed(4)}\n2${e}\n${this.y(n).toFixed(4)}\n3${e}\n0`;this.body.push(`0\nSOLID\n8\n${t}\n${r(0,e[n],e[n+1])}\n${r(1,e[n+2],e[n+3])}\n${r(2,e[n+4],e[n+5])}\n${r(3,e[n+4],e[n+5])}`)}}text(e,t,n,r,i=`TEXT`,a=0,o=!0){let s=this.y(t),c=this.flipH?-a:a,l=o===!0||o===`middle`?1:o===`end`?2:0;this.body.push(`0\nTEXT\n8\n${i}\n10\n${e.toFixed(4)}\n20\n${s.toFixed(4)}\n30\n0\n40\n${n}\n1\n${r.replace(/\n/g,` `)}${c?`\n50\n${c}`:``}${l?`\n72\n${l}\n11\n${e.toFixed(4)}\n21\n${s.toFixed(4)}\n31\n0`:``}`)}sheetText(e,t=`TEXT`){let n=e.text.split(`
`);n.forEach((r,i)=>{let a=(n.length-1-i)*e.s*.95,o=(e.rot??0)*Math.PI/180;this.text(e.x+Math.sin(o)*a,e.y-Math.cos(o)*a,e.s,r,t,e.rot??0,e.anchor??`middle`)})}face3d(e,t,n,r){let i=(e,t)=>`1${e}\n${t[0].toFixed(5)}\n2${e}\n${t[1].toFixed(5)}\n3${e}\n${t[2].toFixed(5)}`;this.body.push(`0\n3DFACE\n8\n${r}\n${i(0,e)}\n${i(1,t)}\n${i(2,n)}\n${i(3,n)}`)}toString(e=[`VISIBLE`,`HIDDEN`,`CENTER`,`HATCH`,`DIM`,`TEXT`,`BORDER`]){let t=(e,t,n)=>`0\nLTYPE\n2\n${e}\n70\n0\n3\n${t}\n72\n65\n73\n${n.length}\n40\n${+n.reduce((e,t)=>e+t,0).toFixed(4)}${n.map((e,t)=>`\n49\n${t%2?-e:e}`).join(``)}`,n=`0\nTABLE\n2\nLTYPE\n70\n3\n0\nLTYPE\n2\nCONTINUOUS\n70\n0\n3\nSolid line\n72\n65\n73\n0\n40\n0.0\n${t(`HIDDEN`,`__ __ __`,g(`dashed`,this.thin))}\n${t(`CENTER`,`____ . ____`,g(`chain`,this.thin))}\n0\nENDTAB`,r=`0\nTABLE\n2\nLAYER\n70\n${e.length}\n${e.map(e=>`0\nLAYER\n2\n${e}\n70\n0\n62\n${e===`HIDDEN`?8:e===`CENTER`?1:e===`DIM`||e===`TEXT`?3:e===`HATCH`?9:7}\n6\n${e===`HIDDEN`?`HIDDEN`:e===`CENTER`?`CENTER`:`CONTINUOUS`}`).join(`
`)}\n0\nENDTAB`,i=this.view,a=i?`\n${Mc(i[0],i[1]).join(`
`)}`:``,o=i?`${Nc(i[0],i[1]).join(`
`)}\n`:``;return`${`0\nSECTION\n2\nHEADER\n9\n$ACADVER\n1\nAC1009\n9\n$INSUNITS\n70\n4\n9\n$MEASUREMENT\n70\n1\n9\n$LTSCALE\n40\n1.0${a}\n0\nENDSEC`}\n0\nSECTION\n2\nTABLES\n${o}${n}\n${r}\n0\nENDSEC\n0\nSECTION\n2\nENTITIES\n${this.body.join(`
`)}\n0\nENDSEC\n0\nEOF\n`}};function Hl(e,t,n){let[r,i]=Lc(e),a=new Vl(i,Oe(e.paper).thin);return a.view=[[0,0],[r,i]],Wl(a,e,t,n,0),a.toString()}var Ul=(e,t)=>t?e.map((e,n)=>n%2?e:e+t):e;function Wl(e,t,n,r,i){let a=Tl(t,r),o=e=>Ul(e,i);e.lines(o([...a.border,...a.thick,...a.thin,...a.scale]),`BORDER`),e.lines(o(a.centre),`CENTER`),e.solids(o(a.fills),`BORDER`);for(let t of a.texts)t.text&&e.sheetText({...t,x:t.x+i});for(let t of n){e.lines(o(t.visible),`VISIBLE`),e.lines(o(t.hidden),`HIDDEN`),e.lines(o(t.centre),`CENTER`),e.lines(o(t.hatch),`HATCH`),e.lines(o(t.dims),`DIM`),e.solids(o(t.arrows),`DIM`);for(let n of t.texts)e.sheetText({...n,x:n.x+i})}}function Gl(e){let t=Math.max(0,...e.map(e=>Lc(e.spec)[1])),n=new Vl(t,e.length?Oe(e[0].spec.paper).thin:Fc),r=0;for(let t of e)Wl(n,t.spec,t.views,t.texts,r),r+=Lc(t.spec)[0]+20;return e.length&&(n.view=[[0,0],[r-20,t]]),n.toString()}function Kl(e,t,n=!1){let r=_l(e,t),i=new Vl(0),a=e=>Array.from(e);if(i.lines(a(r.visible),`VISIBLE`),i.lines(a(r.hidden),`HIDDEN`),!n)for(let t of r.cut)i.lines(yl(t,2.5/Math.max(e.scale,1e-6),(e,t)=>[e,t]),`HATCH`);return i.toString([`VISIBLE`,`HIDDEN`,`CENTER`,`HATCH`])}var ql=(()=>{let e=new Uint32Array(256);for(let t=0;t<256;t++){let n=t;for(let e=0;e<8;e++)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n>>>0}return e})();function Jl(e){let t=4294967295;for(let n=0;n<e.length;n++)t=ql[(t^e[n])&255]^t>>>8;return(t^4294967295)>>>0}function Yl(e){let t=new TextEncoder,n=[],r=[],i=0;for(let a of e){let e=t.encode(a.name),o=Jl(a.data),s=new DataView(new ArrayBuffer(30));s.setUint32(0,67324752,!0),s.setUint16(4,20,!0),s.setUint16(8,0,!0),s.setUint32(14,o,!0),s.setUint32(18,a.data.length,!0),s.setUint32(22,a.data.length,!0),s.setUint16(26,e.length,!0),n.push(new Uint8Array(s.buffer),e,a.data);let c=new DataView(new ArrayBuffer(46));c.setUint32(0,33639248,!0),c.setUint16(4,20,!0),c.setUint16(6,20,!0),c.setUint32(16,o,!0),c.setUint32(20,a.data.length,!0),c.setUint32(24,a.data.length,!0),c.setUint16(28,e.length,!0),c.setUint32(42,i,!0),r.push(new Uint8Array(c.buffer),e),i+=30+e.length+a.data.length}let a=r.reduce((e,t)=>e+t.length,0),o=new DataView(new ArrayBuffer(22));o.setUint32(0,101010256,!0),o.setUint16(8,e.length,!0),o.setUint16(10,e.length,!0),o.setUint32(12,a,!0),o.setUint32(16,i,!0);let s=[...n,...r,new Uint8Array(o.buffer)],c=new Uint8Array(s.reduce((e,t)=>e+t.length,0)),l=0;for(let e of s)c.set(e,l),l+=e.length;return c}function Xl(e){let t=new Vl(0),n=[];for(let r of e){let e=r.name.replace(/[<>/\\":;?*|=,` ]+/g,`_`).slice(0,60)||`BODY`;n.push(e);let i=e=>[r.pos[e*3],r.pos[e*3+1],r.pos[e*3+2]];for(let n=0;n+2<r.idx.length;n+=3)t.face3d(i(r.idx[n]),i(r.idx[n+1]),i(r.idx[n+2]),e)}return t.toString([...new Set(n)])}function Zl(e){let t=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/"/g,`&quot;`),n=[],r=[],i=e.length+1,a=e.map(e=>`<base name="${t(e.name)}" displaycolor="${/^#[0-9a-f]{6}([0-9a-f]{2})?$/i.test(e.color??``)?e.color.toUpperCase():`#B4B4B4`}"/>`);e.forEach((e,a)=>{let o=a+1,s=[],c=new Map,l=new Uint32Array(e.pos.length/3);for(let t=0;t<l.length;t++){let n=`x="${+e.pos[t*3].toFixed(5)}" y="${+e.pos[t*3+1].toFixed(5)}" z="${+e.pos[t*3+2].toFixed(5)}"`,r=c.get(n);r===void 0&&(r=s.length,c.set(n,r),s.push(`<vertex ${n}/>`)),l[t]=r}let u=[];for(let t=0;t+2<e.idx.length;t+=3){let n=l[e.idx[t]],r=l[e.idx[t+1]],i=l[e.idx[t+2]];n!==r&&r!==i&&n!==i&&u.push(`<triangle v1="${n}" v2="${r}" v3="${i}"/>`)}n.push(`<object id="${o}" name="${t(e.name)}" type="model" pid="${i}" pindex="${a}"><mesh><vertices>${s.join(``)}</vertices><triangles>${u.join(``)}</triangles></mesh></object>`),r.push(`<item objectid="${o}"/>`)});let o=new TextEncoder,s=`<?xml version="1.0" encoding="UTF-8"?><model unit="millimeter" xml:lang="en-US" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02"><metadata name="Application">NukCAD</metadata><resources>${e.length?`<basematerials id="${i}">${a.join(``)}</basematerials>`:``}${n.join(``)}</resources><build>${r.join(``)}</build></model>`;return Yl([{name:`[Content_Types].xml`,data:o.encode(`<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/></Types>`)},{name:`_rels/.rels`,data:o.encode(`<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>`)},{name:`3D/3dmodel.model`,data:o.encode(s)}])}var Ql=[.001,10],$l=[1,45],eu={quality:`medium`,chord:.05,angle:5};function tu(e){return e.bodies.filter(e=>e.visible).map(e=>e.id)}function nu(e){return tu(e).length>1}function ru(e,t,n){let r=tu(e);if(t===`all`||!nu(e))return r;let i=new Set(n);return r.filter(e=>i.has(e))}function iu(e,t){let n=new Set(tu(e)),r=t.filter(e=>n.has(e));return{scope:r.length&&nu(e)?`picked`:`all`,picked:r}}function au(e,t){if(e.length<=1)return e.map(e=>({...e,name:t}));let n=e.reduce((e,t)=>e+t.pos.length,0),r=e.reduce((e,t)=>e+t.idx.length,0),i=new Float32Array(n),a=new Uint32Array(r),o=0,s=0;for(let t of e){i.set(t.pos,o);let e=o/3;for(let n=0;n<t.idx.length;n++)a[s+n]=t.idx[n]+e;o+=t.pos.length,s+=t.idx.length}return[{name:t,pos:i,idx:a,color:e[0].color}]}var ou=e=>e.replace(/\s+/g,`_`).replace(/[^\x21-\x7e]/g,``)||`body`,su=e=>Math.abs(e)<1e-12?`0`:e.toExponential(6);function cu(e){let t=[];for(let n of e){let e=ou(n.name);t.push(`solid ${e}`);let r=n.pos;for(let e=0;e+2<n.idx.length;e+=3){let i=n.idx[e]*3,a=n.idx[e+1]*3,o=n.idx[e+2]*3,s=r[a]-r[i],c=r[a+1]-r[i+1],l=r[a+2]-r[i+2],u=r[o]-r[i],d=r[o+1]-r[i+1],f=r[o+2]-r[i+2],p=c*f-l*d,m=l*u-s*f,h=s*d-c*u,g=Math.hypot(p,m,h);if(!(g<1e-20)){p/=g,m/=g,h/=g,t.push(`  facet normal ${su(p)} ${su(m)} ${su(h)}`,`    outer loop`);for(let e of[i,a,o])t.push(`      vertex ${su(r[e])} ${su(r[e+1])} ${su(r[e+2])}`);t.push(`    endloop`,`  endfacet`)}}t.push(`endsolid ${e}`)}return t.join(`
`)+`
`}function lu(e,t){let n=new Uint32Array(e),r=new Float32Array(e),i=n[0],a=1+i*2,o=[];for(let e=0;e<i;e++){let i=n[1+e*2],s=n[2+e*2];o.push({name:t[e]??`body${e+1}`,pos:r.slice(a,a+i),idx:n.slice(a+i,a+i+s)}),a+=i+s}return o}var uu=e=>e!==`step`,du=(e,t)=>e!==`stl`||t,fu=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],pu=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],mu=(e,t,n)=>[e[0]+t[0]*n,e[1]+t[1]*n,e[2]+t[2]*n],hu={ground:`Z`,front:`Y`,side:`X`};function gu(e,t){return e===`front`?{o:[0,t,0],x:[1,0,0],y:[0,0,1],n:[0,-1,0]}:e===`side`?{o:[t,0,0],x:[0,1,0],y:[0,0,1],n:[1,0,0]}:{o:[0,0,t],x:[1,0,0],y:[0,1,0],n:[0,0,1]}}function _u(e,t=0){let n=N(e,[0,0,1]);return{o:mu(e.position,n,t),x:N(e,[1,0,0]),y:N(e,[0,1,0]),n}}function vu(e,t,n=0){return _u(gr(e,t),n)}function yu(e,t){return[e.o[0]+e.x[0]*t[0]+e.y[0]*t[1],e.o[1]+e.x[1]*t[0]+e.y[1]*t[1],e.o[2]+e.x[2]*t[0]+e.y[2]*t[1]]}function bu(e,t){let n=pu(t,e.o);return[fu(n,e.x),fu(n,e.y)]}var xu=e=>Math.max(1e-4,e*2e-6);function Su(e,t){let n=e.matrix,r=(e,t,r)=>[n[0]*e+n[4]*t+n[8]*r+n[12],n[1]*e+n[5]*t+n[9]*r+n[13],n[2]*e+n[6]*t+n[10]*r+n[14]],i=[n[0]*t.n[0]+n[1]*t.n[1]+n[2]*t.n[2],n[4]*t.n[0]+n[5]*t.n[1]+n[6]*t.n[2],n[8]*t.n[0]+n[9]*t.n[1]+n[10]*t.n[2]],a=fu(pu([n[12],n[13],n[14]],t.o),t.n),o=Math.hypot(n[12],n[13],n[14]);if(e.bbox){let[t,n]=e.bbox;o+=Math.max(Math.abs(t[0]),Math.abs(t[1]),Math.abs(t[2]),Math.abs(n[0]),Math.abs(n[1]),Math.abs(n[2]))}let s=xu(o);if(e.bbox){let[t,n]=e.bbox,r=1/0,o=-1/0;for(let e of[t[0],n[0]])for(let s of[t[1],n[1]])for(let c of[t[2],n[2]]){let t=e*i[0]+s*i[1]+c*i[2]+a;t<r&&(r=t),t>o&&(o=t)}if(r>s||o<-s)return{cut:[],touch:[]}}let c=e.positions,l=e.indices,u=c.length/3,d=new Float64Array(u);for(let e=0;e<u;e++)d[e]=c[e*3]*i[0]+c[e*3+1]*i[1]+c[e*3+2]*i[2]+a;let f=e=>Math.abs(d[e])<=s?0:d[e]>0?1:-1,p=e=>bu(t,r(c[e*3],c[e*3+1],c[e*3+2])),m=(e,n)=>{let i=r(c[e*3],c[e*3+1],c[e*3+2]),a=r(c[n*3],c[n*3+1],c[n*3+2]),[o,s,l,u]=i[0]>a[0]||i[0]===a[0]&&(i[1]>a[1]||i[1]===a[1]&&i[2]>a[2])?[a,i,d[n],d[e]]:[i,a,d[e],d[n]],f=l/(l-u);return bu(t,[o[0]+(s[0]-o[0])*f,o[1]+(s[1]-o[1])*f,o[2]+(s[2]-o[2])*f])},h=Math.max(s,1e-4),g=e=>`${Math.round(e[0]/h)},${Math.round(e[1]/h)}`,_=(e,t)=>{let n=g(e),r=g(t);return n===r?null:n<r?`${n}|${r}`:`${r}|${n}`},v=new Map,y=new Map,b=[0,0,0],x=[0,0,0];for(let e=0;e+2<l.length;e+=3){for(let t=0;t<3;t++)b[t]=l[e+t],x[t]=f(b[t]);if(x[0]===0&&x[1]===0&&x[2]===0){let e=b.map(p);for(let t=0;t<3;t++){let n=e[t],r=e[(t+1)%3],i=_(n,r);if(!i)continue;let a=y.get(i);a?a.n++:y.set(i,{seg:[n,r],n:1})}continue}if(x[0]>0&&x[1]>0&&x[2]>0||x[0]<0&&x[1]<0&&x[2]<0)continue;let t=[];for(let e=0;e<3;e++){let n=b[e],r=b[(e+1)%3];x[e]===0?t.push(p(n)):x[(e+1)%3]!==0&&x[e]!==x[(e+1)%3]&&t.push(m(n,r))}if(t.length!==2)continue;let n=_(t[0],t[1]);n&&v.set(n,[t[0],t[1]])}let S=[];for(let[e,t]of y)t.n%2!=0&&(S.push(t.seg),v.delete(e));return{cut:[...v.values()],touch:S}}function Cu(e,t=.001){let n=e=>[Math.floor(e[0]/t),Math.floor(e[1]/t)],r=new Map,i=[];e.forEach(([e,t])=>i.push(e,t)),i.forEach((e,t)=>{let[i,a]=n(e),o=`${i},${a}`,s=r.get(o);s?s.push(t):r.set(o,[t])});let a=new Uint8Array(e.length),o=(e,o)=>{let[s,c]=n(e);for(let n=-1;n<=1;n++)for(let l=-1;l<=1;l++)for(let u of r.get(`${s+n},${c+l}`)??[])if(!(u===o||a[u>>1])&&Math.hypot(i[u][0]-e[0],i[u][1]-e[1])<=t)return u;return-1},s=e=>{let a=0,o=i[e],[s,c]=n(o);for(let n=-1;n<=1;n++)for(let l=-1;l<=1;l++)for(let u of r.get(`${s+n},${c+l}`)??[])u!==e&&Math.hypot(i[u][0]-o[0],i[u][1]-o[1])<=t&&a++;return a},c=[],l=e=>{let t=[i[e]],n=e;for(;;){a[n>>1]=1;let e=n^1;t.push(i[e]);let r=o(i[e],e);if(r<0)break;n=r}c.push(t)};for(let e=0;e<i.length;e++)!a[e>>1]&&s(e)===0&&l(e);for(let e=0;e<i.length;e+=2)a[e>>1]||l(e);return c}var wu=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1]);function Tu(e,t,n){let r=wu(t,n);return r<1e-12?wu(e,t):Math.abs((n[0]-t[0])*(e[1]-t[1])-(n[1]-t[1])*(e[0]-t[0]))/r}function Eu(e,t){if(e.length<3)return e;let n=[e[0]];for(let r=1;r<e.length-1;r++){let i=n[n.length-1],a=e[r+1],o=Tu(e[r],i,a)<=t;if(o){let t=[e[r][0]-i[0],e[r][1]-i[1]],n=[a[0]-e[r][0],a[1]-e[r][1]];o=t[0]*n[0]+t[1]*n[1]>0}o||n.push(e[r])}return n.push(e[e.length-1]),n}function Du(e,t,n){let r=n-t+1,i=0,a=0;for(let r=t;r<=n;r++)i+=e[r][0],a+=e[r][1];i/=r,a/=r;let o=0,s=0,c=0,l=0,u=0,d=0,f=0,p=0;for(let r=t;r<=n;r++){let t=e[r][0]-i,n=e[r][1]-a,m=t*t+n*n;o+=t*t,s+=t*n,c+=n*n,l+=t,u+=n,d+=t*m,f+=n*m,p+=m}let m=[[o,s,l,-d],[s,c,u,-f],[l,u,r,-p]];for(let e=0;e<3;e++){let t=e;for(let n=e+1;n<3;n++)Math.abs(m[n][e])>Math.abs(m[t][e])&&(t=n);if([m[e],m[t]]=[m[t],m[e]],Math.abs(m[e][e])<1e-18)return null;for(let t=0;t<3;t++){if(t===e)continue;let n=m[t][e]/m[e][e];for(let r=e;r<4;r++)m[t][r]-=n*m[e][r]}}let h=m[0][3]/m[0][0],g=m[1][3]/m[1][1];return[i-h/2,a-g/2]}var Ou=.2,ku=6,Au=12;function ju(e,t,n,r){let i=Du(e,t,n);if(!i)return null;let a=0;for(let r=t;r<=n;r++)a=Math.max(a,wu(e[r],i));if(!Number.isFinite(a)||a>1e7||a<1e-6)return null;let o=Math.max(r,a*(1-Math.cos(Ou/2))*1.2),s=0,c=0;for(let r=t;r<=n;r++){if(a-wu(e[r],i)>o)return null;if(r===t)continue;let n=e[r-1][0]-i[0],l=e[r-1][1]-i[1],u=e[r][0]-i[0],d=e[r][1]-i[1],f=Math.atan2(n*d-l*u,n*u+l*d);if(Math.abs(f)>Ou||Math.abs(f)<1e-9)return null;let p=Math.sign(f);if(c&&p!==c)return null;c=p,s+=f}return Math.abs(s)<=2*Math.PI+.001?{c:i,r:a,turn:s}:null}var Mu=(e,t)=>Math.atan2(t[1]-e[1],t[0]-e[0]);function Nu(e,t){let n=[];if(e.length<2)return n;if(e.length>3&&wu(e[0],e[e.length-1])<=t&&e.length-1>=Au){let n=ju(e,0,e.length-2,t);if(n&&Math.abs(n.turn)>2*Math.PI-4*Ou)return[{id:V(),t:`circle`,c:n.c,r:n.r}]}let r=Eu(e,t*.1),i=0;for(;i<r.length-1;){let e=-1,a=null;if(r.length-1-i>=ku)for(let n=i+ku;n<r.length;n++){let o=ju(r,i,n,t);if(!o)break;e=n,a=o}if(a&&e>i){let t=r[i],o=r[e],s=a.turn>0,c=Mu(a.c,s?t:o),l=Mu(a.c,s?o:t);n.push({id:V(),t:`arc`,c:a.c,r:a.r,a0:c,a1:l}),i=e;continue}n.push({id:V(),t:`line`,a:r[i],b:r[i+1]}),i++}return n}var Pu=(e,t)=>[e.a*t[0]+e.b*t[1]+e.t[0],e.c*t[0]+e.d*t[1]+e.t[1]],Fu=(e,t)=>Math.atan2(e.c*Math.cos(t)+e.d*Math.sin(t),e.a*Math.cos(t)+e.b*Math.sin(t));function Iu(e,t){let n=t.a*t.d-t.b*t.c<0,r={id:e.id,...e.style?{style:e.style}:{}};switch(e.t){case`line`:return{...r,t:`line`,a:Pu(t,e.a),b:Pu(t,e.b)};case`circle`:return{...r,t:`circle`,c:Pu(t,e.c),r:e.r};case`arc`:{let i=Fu(t,e.a0),a=Fu(t,e.a1);return{...r,t:`arc`,c:Pu(t,e.c),r:e.r,a0:n?a:i,a1:n?i:a}}case`ellipse`:return{...r,t:`ellipse`,c:Pu(t,e.c),rx:e.rx,ry:e.ry,rot:Fu(t,e.rot)};case`spline`:return{...r,t:`spline`,pts:e.pts.map(e=>Pu(t,e))};case`bezier`:return{...r,t:`bezier`,pts:e.pts.map(e=>Pu(t,e))};case`point`:return{...r,t:`point`,p:Pu(t,e.p)};default:return null}}function Lu(e,t,n=.001){let r=_u(e);if(Math.abs(fu(r.n,t.n))<1-1e-6||Math.abs(fu(pu(r.o,t.o),t.n))>n)return null;let i=bu(t,r.o),a={a:fu(r.x,t.x),b:fu(r.y,t.x),c:fu(r.x,t.y),d:fu(r.y,t.y),t:i},o=[];for(let t of e.entities){let n=ut(t.style,e.lineStyle),r=Iu(ee(n)?{...t,style:void 0}:{...t,style:n},a);r&&o.push(r)}return o}function Ru(e,t,n){let r={cut:[],touch:[],sketch:[],bodiesCut:0,bodiesTouching:0,sketches:0},i=[],a=[],o=Math.hypot(...n.o);for(let s of e.bodies){if(!s.visible)continue;let c=t[it(e,s).id];if(!c)continue;let l=kn(s.position,s.rotation).elements,u=Su({positions:c.positions,indices:c.indices,matrix:l,bbox:c.bbox},n);u.cut.length&&r.bodiesCut++,u.touch.length&&r.bodiesTouching++;for(let e of u.cut)i.push(e);for(let e of u.touch)a.push(e);c.bbox&&(o=Math.max(o,Math.hypot(...s.position)+Math.hypot(...c.bbox[1].map((e,t)=>Math.max(Math.abs(e),Math.abs(c.bbox[0][t]))))))}let s=xu(o),c=Math.max(s*20,.002);for(let e of Cu(i,s*4))r.cut.push(...Nu(e,c));for(let e of Cu(a,s*4))r.touch.push(...Nu(e,c));for(let t of e.sketches){if(!t.visible)continue;let e=Lu(t,n,Math.max(.001,s));e?.length&&(r.sketches++,r.sketch.push(...e))}return r}var zu=e=>[...e.touch,...e.cut,...e.sketch].filter(Ur);function Bu(e){let t=[];for(let n of e){if(!Ur(n))continue;let e=n.t===`line`?[n.a,n.b]:n.t===`circle`||n.t===`arc`?vi(n,1):vi(n,2);t.push(n.style?.color?{pts:e,color:n.style.color}:{pts:e})}return t}function Vu(e){let t=1/0,n=1/0,r=-1/0,i=-1/0;for(let a of e)for(let e of a.pts)e[0]<t&&(t=e[0]),e[0]>r&&(r=e[0]),e[1]<n&&(n=e[1]),e[1]>i&&(i=e[1]);return Number.isFinite(t)?[[t,n],[r,i]]:null}function Hu(e,t){let n=[];for(let r of t){if(r.t===`point`||r.t===`xline`)continue;let t=vi(r,r.t===`circle`||r.t===`arc`?Math.max(.5,Math.min(2,(r.t===`arc`?Yi(r.a0,r.a1):6.3)/3)):1);for(let r=0;r+1<t.length;r++){let i=yu(e,t[r]),a=yu(e,t[r+1]);n.push(i[0],i[1],i[2],a[0],a[1],a[2])}}return n}function Uu(e,t,n){let r=1/0,i=-1/0,a=1/0,o=-1/0;for(let s of[t[0],n[0]])for(let c of[t[1],n[1]])for(let l of[t[2],n[2]]){let[t,n]=bu(e,[s,c,l]);r=Math.min(r,t),i=Math.max(i,t),a=Math.min(a,n),o=Math.max(o,n)}Number.isFinite(r)||([r,i,a,o]=[-50,50,-50,50]);let s=Math.max(i-r,o-a,10)*.08,c=[yu(e,[r-s,a-s]),yu(e,[i+s,a-s]),yu(e,[i+s,o+s]),yu(e,[r-s,o+s])];return[...c[0],...c[1],...c[2],...c[0],...c[2],...c[3]]}var Wu=n(r(),1),Z=ui(),Gu=96/25.4;function Ku(e){let t=Math.max(e[1][0]-e[0][0],.001),n=Math.max(e[1][1]-e[0][1],.001),r=Math.max(t,n)*.06;return[e[0][0]-r,-e[1][1]-r,t+2*r,n+2*r]}function qu(e){let t=10**Math.floor(Math.log10(e)),n=e/t;return(n>=5?5:n>=2?2:1)*t}var Ju=e=>String(+e.toFixed(e>=100?1:e>=1?2:3));function Yu(e){let t=new Map,n=e=>+e.toFixed(4);for(let r of e){if(r.pts.length<2)continue;let e=r.color??``,i=t.get(e);i||t.set(e,i=[]),i.push(`M${r.pts.map(e=>`${n(e[0])} ${n(-e[1])}`).join(`L`)}`)}return[...t].map(([e,t])=>[e,t.join(``)])}function Xu({lines:e}){let t=(0,Wu.useMemo)(()=>Vu(e),[e]),n=(0,Wu.useMemo)(()=>Yu(e),[e]),r=(0,Wu.useMemo)(()=>t?Ku(t):[-50,-50,100,100],[t]),[i,a]=(0,Wu.useState)(r),[o,s]=(0,Wu.useState)([0,0]),c=(0,Wu.useRef)(null),l=(0,Wu.useRef)(null),u=(0,Wu.useRef)(i);u.current=i,(0,Wu.useEffect)(()=>a(r),[r]),(0,Wu.useEffect)(()=>{let e=c.current;if(!e)return;let t=new ResizeObserver(()=>s([e.clientWidth,e.clientHeight]));return t.observe(e),s([e.clientWidth,e.clientHeight]),()=>t.disconnect()},[]);let d=o[0]&&o[1]?Math.min(o[0]/i[2],o[1]/i[3]):0,f=(e,t,n)=>{let i=u.current,o=l.current,s=[i[0]+i[2]/2,i[1]+i[3]/2],c=o?.getScreenCTM();if(c&&t!=null&&n!=null){let e=new DOMPoint(t,n).matrixTransform(c.inverse());s=[e.x,e.y]}let d=Math.min(Math.max(i[2]*e,r[2]/1e3),r[2]*20)/i[2];a([s[0]-(s[0]-i[0])*d,s[1]-(s[1]-i[1])*d,i[2]*d,i[3]*d])},p=(0,Wu.useRef)(f);p.current=f,(0,Wu.useEffect)(()=>{let e=l.current;if(!e)return;let t=e=>{e.preventDefault(),p.current(Math.exp(Math.max(-100,Math.min(100,e.deltaY))*.0025),e.clientX,e.clientY)};return e.addEventListener(`wheel`,t,{passive:!1}),()=>e.removeEventListener(`wheel`,t)},[]);let m=(0,Wu.useRef)(null),h=e=>{if(e.button!==0)return;let t=l.current?.getScreenCTM();t&&(e.currentTarget.setPointerCapture(e.pointerId),m.current={id:e.pointerId,x:e.clientX,y:e.clientY,box:u.current,k:t.a||1})},g=e=>{let t=m.current;if(!t||t.id!==e.pointerId)return;let n=t.box;a([n[0]-(e.clientX-t.x)/t.k,n[1]-(e.clientY-t.y)/t.k,n[2],n[3]])},_=e=>{m.current?.id===e.pointerId&&(m.current=null)},v=()=>{if(!o[0]||!o[1])return;let e=u.current,t=o[0]/Gu,n=o[1]/Gu,r=[e[0]+e[2]/2,e[1]+e[3]/2];a([r[0]-t/2,r[1]-n/2,t,n])},y=d?qu(o[0]/d/4):0,b=t?t[1][0]-t[0][0]:0,x=t?t[1][1]-t[0][1]:0;return(0,Z.jsxs)(`div`,{className:`pp-wrap`,children:[(0,Z.jsxs)(`div`,{className:`pp-box`,ref:c,children:[(0,Z.jsx)(`svg`,{ref:l,className:`pp-svg`,viewBox:i.join(` `),preserveAspectRatio:`xMidYMid meet`,onPointerDown:h,onPointerMove:g,onPointerUp:_,onPointerCancel:_,onDoubleClick:()=>a(r),children:n.map(([e,t])=>(0,Z.jsx)(`path`,{d:t,fill:`none`,stroke:e||`currentColor`,strokeWidth:1.25,vectorEffect:`non-scaling-stroke`,strokeLinejoin:`round`,strokeLinecap:`round`},e||`-`))}),!t&&(0,Z.jsx)(`div`,{className:`pp-empty`,children:G(`pe.empty`)}),(0,Z.jsxs)(`div`,{className:`pp-tools`,children:[(0,Z.jsx)(`button`,{type:`button`,className:`small`,title:G(`pe.pvFitTip`),onClick:()=>a(r),children:G(`pe.pvFit`)}),(0,Z.jsx)(`button`,{type:`button`,className:`small`,title:G(`pe.pvRealTip`),onClick:v,children:`1:1`}),(0,Z.jsx)(`button`,{type:`button`,className:`small`,title:G(`pe.pvIn`),onClick:()=>f(1/1.5),children:`+`}),(0,Z.jsx)(`button`,{type:`button`,className:`small`,title:G(`pe.pvOut`),onClick:()=>f(1.5),children:`−`})]}),y>0&&t&&(0,Z.jsxs)(`div`,{className:`pp-bar`,children:[(0,Z.jsx)(`span`,{style:{width:`${y*d}px`}}),Ju(y),` mm`]})]}),t&&(0,Z.jsx)(`div`,{className:`pp-size`,children:G(`pe.pvSize`,{w:Ju(b),h:Ju(x)})})]})}var Zu=.8,Qu=[100,200,500,1e3],$u=40,ed=e=>[Math.max(1,e[0]-10),Math.max(1,e[1]-10)];function td(e,t,n){let[r,i]=ed(n);return e<=r+1e-9&&t<=i+1e-9||t<=r+1e-9&&e<=i+1e-9}function nd(e,t){let[n,r]=ed(t),i=Math.max(e[0],1e-6),a=Math.max(e[1],1e-6);return Math.max(Math.min(n/i,r/a),Math.min(n/a,r/i))}function rd(e,t){return Qu.find(n=>td(e[0]/n,e[1]/n,t))??`fit`}function id(e,t){let n=Math.min(t[0],t[1],t[2]);switch(e?.kind){case`wall`:case`slab`:case`roof`:n=Math.min(n,e.thickness);break;case`railing`:n=Math.min(n,$u);break;case`preset`:e.params.frame>0&&(n=Math.min(n,e.params.frame))}return n}function ad(e,t){return e.filter(e=>e.t*t<Zu).map(e=>({name:e.name,mm:e.t*t})).sort((e,t)=>e.mm-t.mm)}function od(e,t){let n=e.slice(0);if(n.byteLength<84)return n;let r=new DataView(n),i=Math.min(r.getUint32(80,!0),Math.floor((n.byteLength-84)/50));for(let e=0;e<i;e++){let n=84+e*50+12;for(let e=0;e<9;e++)r.setFloat32(n+e*4,r.getFloat32(n+e*4,!0)*t,!0)}return n}function sd(e,t){let n=new TextDecoder().decode(e).replace(/^v[ \t]+(\S+)[ \t]+(\S+)[ \t]+(\S+)/gm,(e,n,r,i)=>`v ${[n,r,i].map(e=>String(Math.round(Number(e)*t*1e6)/1e6)).join(` `)}`);return new TextEncoder().encode(n).buffer}function cd(e,t){return e.map(e=>({...e,pos:e.pos.map(e=>e*t)}))}var ld=()=>yr.getState();function ud(e){let t=ld(),n=t.selection.filter(e=>F(t.doc,e)),r=new Set(e??(n.length?n:t.doc.bodies.map(e=>e.id))),i=[1/0,1/0,1/0],a=[-1/0,-1/0,-1/0],o=[],s=new y;for(let e of t.doc.bodies){if(!r.has(e.id)||!e.visible)continue;let n=it(t.doc,e),c=t.meshes[n.id];if(!c)continue;let l=kn(e.position,e.rotation);for(let e of[c.bbox[0][0],c.bbox[1][0]])for(let t of[c.bbox[0][1],c.bbox[1][1]])for(let n of[c.bbox[0][2],c.bbox[1][2]])s.set(e,t,n).applyMatrix4(l),i[0]=Math.min(i[0],s.x),i[1]=Math.min(i[1],s.y),i[2]=Math.min(i[2],s.z),a[0]=Math.max(a[0],s.x),a[1]=Math.max(a[1],s.y),a[2]=Math.max(a[2],s.z);let u=[c.bbox[1][0]-c.bbox[0][0],c.bbox[1][1]-c.bbox[0][1],c.bbox[1][2]-c.bbox[0][2]];o.push({name:e.name,t:id(n.features[0],u)})}let c=o.length?[a[0]-i[0],a[1]-i[1],a[2]-i[2]]:[0,0,0];return{n:o.length,size:c,parts:o}}var dd=()=>{let e=Jt.getState().printGrid;return[e.w,e.h]};function fd(e,t){let n=t??rd(e,dd());return n===`fit`?nd(e,dd()):1/n}var pd=(e,t)=>fd(ud(e).size,t);function md({ids:e,choice:t,onChoice:n}){let r=yr(e=>e.t);yr(e=>e.doc),yr(e=>e.selection),yr(e=>e.meshes);let i=ud(e),a=dd(),o=t??rd(i.size,a),s=fd(i.size,t),c=i.size.map(e=>e*s),l=e=>String(+e.toFixed(1)),u=ad(i.parts,s),d=u.slice(0,4).map(e=>`${e.name} (${+e.mm.toFixed(2)} mm)`).join(`, `),f=u.length>4?` ${r(`ap.more`,{n:u.length-4})}`:``;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Li,{value:String(o),options:[...Qu.map(e=>[String(e),`1:${e}`]),[`fit`,r(`ap.fit`)]],onChange:e=>n(e===`fit`?`fit`:Number(e))}),(0,Z.jsx)(Ki,{rows:[[r(`ap.scale`),`1:${Math.round(1/s)}`],[r(`ap.size`),`${l(c[0])} × ${l(c[1])} × ${l(c[2])} mm`],[r(`ap.plate`),`${a[0]} × ${a[1]} mm`]]}),i.n>0&&!td(c[0],c[1],a)&&(0,Z.jsx)(`p`,{className:`hint`,style:{color:`var(--danger)`},children:r(`ap.tooBig`)}),u.length>0&&(0,Z.jsx)(`p`,{className:`hint`,style:{color:`var(--danger)`},children:r(`ap.thin`,{min:.8,list:d+f})})]})}var hd=()=>J().touchTool(),gd={stl:`cmd.exportStl`,step:`cmd.exportStep`,obj:`cmd.exportObj`,"3mf":`cmd.export3mf`,dxf3d:`cmd.exportDxf3d`,svg:`cmd.exportSvg`,dxf:`cmd.exportDxf`},_d={mesh:{...eu},combine:!1,ascii:!1};function vd(e){return e===`svg`||e===`dxf`?new bd(e):new yd(e)}var yd=class{format;id=`export3d`;dialog=!0;scope;picked;mesh={..._d.mesh};combine=_d.combine;ascii=_d.ascii;printChoice=null;constructor(e){this.format=e;let t=J(),n=iu(t.doc,t.selection);this.scope=n.scope,this.picked=n.picked}titleKey(){return gd[this.format]}prompt(){return G(this.scope===`picked`?`ex.promptPick`:`ex.prompt`)}wants(){return this.scope===`picked`&&nu(J().doc)?[`item`]:[]}targets(){return ru(J().doc,this.scope,this.picked)}highlights(){return this.scope===`picked`?{primary:this.targets()}:{}}click(e){if(this.scope!==`picked`||e.hit?.kind!==`body`)return;let t=e.hit.itemId;this.picked=this.picked.includes(t)?this.picked.filter(e=>e!==t):[...this.picked,t],hd()}undoPoint(){return this.scope!==`picked`||!this.picked.length?!1:(this.picked=this.picked.slice(0,-1),hd(),!0)}confirmable(){return this.targets().length>0}applyLabel(){return G(`ap.export`,{fmt:G(gd[this.format])})}printScaled(){return J().mode===`arch`&&(this.format===`stl`||this.format===`obj`||this.format===`3mf`)}enter(){let e=this.targets();if(!e.length)return J().toast(G(`msg.nothingToExport`),`error`);_d.mesh={...this.mesh},_d.combine=this.combine,_d.ascii=this.ascii;let t=this.printScaled()?pd(e,this.printChoice):void 0;J().setTool(null),vC(this.format,{ids:e,mesh:{...this.mesh},combine:this.combine,ascii:this.ascii,scale:t})}panel(){let e=J().doc,t=nu(e),n=this.targets(),r=e.bodies.filter(e=>e.visible).length,i=this.mesh.quality===`custom`,a=e=>{this.mesh={...this.mesh,...e},hd()};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`div`,{className:`tlabel`,children:G(`ex.what`)}),(0,Z.jsx)(Li,{value:t?this.scope:`all`,disabled:!t,options:[[`picked`,G(`ex.picked`),G(`ex.pickedTip`)],[`all`,G(`ex.all`),G(`ex.allTip`)]],onChange:e=>{this.scope=e,hd()}}),!t&&(0,Z.jsx)(`p`,{className:`hint`,children:G(r?`ex.onlyOne`:`ex.none`)}),t&&this.scope===`picked`&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ei,{label:G(`ex.pickedList`),color:`var(--accent)`,names:n.map(t=>({id:t,name:F(e,t)?.name??t})),onRemove:e=>{this.picked=this.picked.filter(t=>t!==e),hd()},active:!0}),(0,Z.jsx)(`p`,{className:`hint`,children:G(`ex.pickHint`)})]}),t&&(0,Z.jsx)(`p`,{className:`hint`,children:G(`ex.count`,{n:n.length,total:r})}),uu(this.format)?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`div`,{className:`tlabel`,children:G(`ex.quality`)}),(0,Z.jsx)(Li,{value:i?``:this.mesh.quality,options:[`coarse`,`medium`,`fine`].map(e=>[e,G(`ex.q.${e}`),G(`ex.q.${e}Tip`)]),onChange:e=>a({quality:e})}),(0,Z.jsxs)(Mi,{open:i,children:[(0,Z.jsx)(bi,{label:G(`ex.custom`),value:i,tip:G(`ex.customTip`),onChange:e=>a({quality:e?`custom`:`medium`})}),i&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(q,{label:G(`ex.chord`),tip:G(`ex.chordTip`),value:this.mesh.chord,min:Ql[0],max:Ql[1],step:.01,suffix:(0,Z.jsx)(`em`,{children:`mm`}),onChange:e=>a({chord:e})}),(0,Z.jsx)(q,{label:G(`ex.angle`),tip:G(`ex.angleTip`),value:this.mesh.angle,min:$l[0],max:$l[1],step:1,suffix:(0,Z.jsx)(`em`,{children:`°`}),onChange:e=>a({angle:e})})]})]})]}):(0,Z.jsx)(`p`,{className:`hint`,children:G(`ex.stepExact`)}),(0,Z.jsx)(`div`,{className:`tlabel`,children:G(`ex.file`)}),this.format===`stl`&&(0,Z.jsx)(bi,{label:G(`ex.ascii`),tip:G(`ex.asciiTip`),value:this.ascii,onChange:e=>{this.ascii=e,hd()}}),du(this.format,this.ascii)?(0,Z.jsx)(bi,{label:G(`ex.combine`),tip:G(`ex.combineTip`),value:this.combine,onChange:e=>{this.combine=e,hd()}}):(0,Z.jsx)(`p`,{className:`hint`,children:G(`ex.stlOne`)}),this.printScaled()&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`div`,{className:`tlabel`,children:G(`ap.scale`)}),(0,Z.jsx)(md,{ids:n,choice:this.printChoice,onChoice:e=>{this.printChoice=e,hd()}})]}),e.sketches.some(e=>e.visible)&&(0,Z.jsx)(`p`,{className:`hint`,children:G(`ex.noSketches`)})]})}},bd=class{format;id=`exportPlane`;dialog=!0;useBase=!0;basePlane=`ground`;at=0;pick=null;offset=0;missed=!1;cache=null;constructor(e){this.format=e;let t=J(),n=t.activeSketch??t.selection.find(e=>vt(t.doc,e));n&&pe(t.doc,n)&&(this.pick={kind:`sketch`,id:n},this.useBase=!1)}titleKey(){return gd[this.format]}prompt(){return G(`pe.prompt`)}wants(){return[`face`,`entity`,`region`,`plane`]}frame(){if(this.useBase)return gu(this.basePlane,this.at);if(!this.pick)return null;let e=J(),t=this.pick;if(t.kind===`sketch`){let n=pe(e.doc,t.id);return n?_u(n,this.offset):null}if(t.kind===`work`){let n=(e.doc.workPlanes??[]).find(e=>e.id===t.id);return n?_u(n,this.offset):null}let n=K(t.bodyId,t.faceId);return n?.planar?vu(n.worldCenter,n.worldNormal,this.offset):null}content(){let e=J(),t=this.frame();if(!t)return null;let n=JSON.stringify(t),r=this.cache;if(r&&r.key===n&&r.doc===e.doc&&r.meshes===e.meshes)return r;let i=Ru(e.doc,e.meshes,t),a=zu(i),[o,s]=xd(e.doc,e.meshes);return this.cache={key:n,doc:e.doc,meshes:e.meshes,content:i,ents:a,lines:Bu(a),segs:Hu(t,a),fill:Uu(t,o,s)},this.cache}click(e){let t=null;this.missed=!1,e.front===`entity`&&e.entity?t={kind:`sketch`,id:e.entity.sketchId}:e.front===`region`&&e.region?t={kind:`sketch`,id:e.region.sketchId}:e.hit?.kind===`body`&&e.hit.faceId!=null?K(e.hit.itemId,e.hit.faceId)?.planar?t={kind:`face`,bodyId:e.hit.itemId,faceId:e.hit.faceId}:this.missed=!0:e.hit?.kind===`sketch`?t={kind:`sketch`,id:e.hit.itemId}:e.workPlane&&(t={kind:`work`,id:e.workPlane.id}),t&&(this.pick=t,this.useBase=!1,this.offset=0),hd()}highlights(){if(this.useBase||!this.pick)return{};let e=this.pick;return e.kind===`face`?{faces:[{bodyId:e.bodyId,ids:[e.faceId]}]}:e.kind===`sketch`?{primary:[e.id]}:{}}overlay3d(){let e=this.content();return e?{segments:e.segs,labels:[],fills:e.fill}:null}confirmable(){return!!this.content()?.ents.length}applyLabel(){return G(`ap.export`,{fmt:G(gd[this.format])})}enter(){let e=this.content();if(!e?.ents.length)return J().toast(G(`pe.empty`),`error`);let t=e.ents,n=e.content;J().setTool(null),yC(this.format,t).then(e=>{e.status!==`cancelled`&&J().toast(G(`pe.done`,{cut:n.bodiesCut,touch:n.bodiesTouching,sketches:n.sketches}))})}pickName(){let e=this.pick,t=J().doc;return e?e.kind===`sketch`?`${G(`pe.ofSketch`)}: ${pe(t,e.id)?.name??`—`}`:e.kind===`work`?`${G(`pe.ofWork`)}: ${(t.workPlanes??[]).find(t=>t.id===e.id)?.name??`—`}`:`${G(`pe.ofFace`)}: ${F(t,e.bodyId)?.name??`—`}`:G(`pe.pickNone`)}panel(){let e=this.content(),t=!this.useBase;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`div`,{className:`tlabel`,children:G(`pe.plane`)}),(0,Z.jsx)(Li,{value:t?`picked`:this.basePlane,options:[[`ground`,G(`pe.ground`),G(`pe.groundTip`)],[`front`,G(`pe.front`),G(`pe.frontTip`)],[`side`,G(`pe.side`),G(`pe.sideTip`)],[`picked`,G(`pe.picked`),G(`pe.pickedTip`)]],onChange:e=>{e===`picked`?this.useBase=!1:(this.useBase=!0,this.basePlane=e),hd()}}),t?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`p`,{className:`hint`,children:this.pickName()}),this.pick&&(0,Z.jsx)(q,{label:G(`pe.offset`),tip:G(`pe.offsetTip`),value:this.offset,length:!0,onChange:e=>(this.offset=e,hd())})]}):(0,Z.jsx)(q,{label:G(`pe.at`,{axis:hu[this.basePlane]}),tip:G(`pe.atTip`),value:this.at,length:!0,onChange:e=>(this.at=e,hd())}),(0,Z.jsx)(`p`,{className:`hint`,children:G(this.missed?`pe.notFlat`:`pe.pickHint`)}),e?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ki,{rows:[[G(`pe.cut`),G(`pe.bodies`,{n:e.content.bodiesCut})],[G(`pe.touch`),G(`pe.bodies`,{n:e.content.bodiesTouching})],[G(`pe.sketches`),G(`pe.sketchN`,{n:e.content.sketches})]]}),(0,Z.jsx)(`div`,{className:`tlabel`,children:G(`pe.preview`)}),(0,Z.jsx)(Xu,{lines:e.lines}),(0,Z.jsx)(`p`,{className:`hint`,children:G(`pe.pvHint`)})]}):this.pick&&(0,Z.jsx)(`p`,{className:`hint`,children:G(`pe.gone`)})]})}};function xd(e,t){let n=[1/0,1/0,1/0],r=[-1/0,-1/0,-1/0],i=e=>{for(let t=0;t<3;t++)n[t]=Math.min(n[t],e[t]),r[t]=Math.max(r[t],e[t])};for(let n of e.bodies){if(!n.visible)continue;let r=t[it(e,n).id];if(r)for(let e of[r.bbox[0][0],r.bbox[1][0]])for(let t of[r.bbox[0][1],r.bbox[1][1]])for(let a of[r.bbox[0][2],r.bbox[1][2]])i(lr(n,[e,t,a]))}for(let t of e.sketches){if(!t.visible)continue;let e=_u(t);for(let n of t.entities)if(n.t!==`xline`)for(let t of vi(n,.25))i(yu(e,t))}return[n,r]}function Sd(e){let t=e.split(/\r?\n/),n=[];for(let e=0;e+1<t.length;e+=2)n.push([parseInt(t[e].trim(),10),t[e+1].trim()]);return n}function Cd(e){let t=Sd(e),n=[],r=new Map,i={},a=new Map,o=null,s=``,c=null,l=null,u=null,d=()=>{c&&=(s===`ENTITIES`?n.push(c):s===`BLOCKS`&&l&&c.type!==`BLOCK`&&c.type!==`ENDBLK`&&l.ents.push(c),null)};for(let e=0;e<t.length;e++){let[n,i]=t[e];if(s===`ACDSDATA`&&(n!==0||i!==`ENDSEC`)){n===0?(o?.on&&o.hex.length&&a.set(o.handle,o.hex),o=i===`ACDSRECORD`?{handle:``,on:!1,hex:[]}:null):o&&(n===320?o.handle=i:n===2?o.on=i===`ASM_Data`:n===310&&o.on&&o.hex.push(i));continue}if(n===0){if(s===`ACDSDATA`&&o?.on&&o.hex.length&&a.set(o.handle,o.hex),d(),i===`SECTION`){s=t[e+1]?.[0]===2?t[e+1][1]:``;continue}if(i===`ENDSEC`){s=``;continue}if(s===`BLOCKS`&&i===`BLOCK`){u={type:`BLOCK`,codes:[]},c=u;continue}if(s===`BLOCKS`&&i===`ENDBLK`){l&&r.set(l.name,{base:l.base,ents:l.ents}),l=null,c={type:`ENDBLK`,codes:[]};continue}c={type:i,codes:[]};continue}c&&(c.codes.push([n,i]),c===u&&n===20&&(l={name:c.codes.find(([e])=>e===2)?.[1]??``,base:[Nd(c,10),Number(i)],ents:[]}))}return d(),{entities:n,blocks:r,skipped:i,asm:a}}var wd=e=>{let t=e.join(``),n=new Uint8Array(t.length>>1);for(let e=0;e<n.length;e++)n[e]=parseInt(t.substr(e*2,2),16);return n},Td=(e,t)=>[e[0]*t[0]+e[1]*t[3],e[0]*t[1]+e[1]*t[4],e[0]*t[2]+e[1]*t[5]+e[2],e[3]*t[0]+e[4]*t[3],e[3]*t[1]+e[4]*t[4],e[3]*t[2]+e[4]*t[5]+e[5]],Ed=(e,t)=>[e[0]*t[0]+e[1]*t[1]+e[2],e[3]*t[0]+e[4]*t[1]+e[5]],Dd=[-1,0,0,0,1,0];function Od(e,t,n){let r=t[0]*t[0]+n[0]*n[0],i=t[0]*t[1]+n[0]*n[1],a=t[1]*t[1]+n[1]*n[1],o=Math.hypot((r-a)/2,i);return{id:V(),t:`ellipse`,c:e,rx:Math.sqrt((r+a)/2+o),ry:Math.sqrt(Math.max(0,(r+a)/2-o)),rot:Math.atan2(2*i,r-a)/2}}function kd(e,t,n,r,i){let a=Math.max(1,Math.ceil((i-r)/(Math.PI/2)-1e-9)),o=r=>[e[0]+t[0]*Math.cos(r)+n[0]*Math.sin(r),e[1]+t[1]*Math.cos(r)+n[1]*Math.sin(r)],s=e=>[-t[0]*Math.sin(e)+n[0]*Math.cos(e),-t[1]*Math.sin(e)+n[1]*Math.cos(e)],c=[];for(let e=0;e<a;e++){let t=r+(i-r)*e/a,n=r+(i-r)*(e+1)/a,l=4/3*Math.tan((n-t)/4),u=o(t),d=o(n),f=s(t),p=s(n);c.push({id:V(),t:`bezier`,pts:[u,[u[0]+l*f[0],u[1]+l*f[1]],[d[0]-l*p[0],d[1]-l*p[1]],d]})}return c}function Ad(e,t){let n=e=>Ed(t,e),[r,i,,a,o]=t,s=r*r+a*a||1;if(!(Math.abs(r*i+a*o)<1e-9*s&&Math.abs(r*r+a*a-i*i-o*o)<1e-9*s)){let t=(e,t)=>[r*e+i*t,a*e+o*t];if(e.t===`circle`)return[Od(n(e.c),t(e.r,0),t(0,e.r))];if(e.t===`ellipse`){let r=Math.cos(e.rot),i=Math.sin(e.rot);return[Od(n(e.c),t(e.rx*r,e.rx*i),t(-e.ry*i,e.ry*r))]}if(e.t===`arc`)return kd(n(e.c),t(e.r,0),t(0,e.r),e.a0,e.a0+Yi(e.a0,e.a1))}return[Fi(e,n,!1)]}function jd(e){let t={text:0,hatch:0,point:0,other:0,otherTypes:[]};for(let[n,r]of Object.entries(e))n===`TEXT`||n===`MTEXT`||n===`ATTRIB`?t.text+=r:n===`HATCH`||n===`SOLID`?t.hatch+=r:n===`POINT`?t.point+=r:(t.other+=r,t.otherTypes.push(n));return t}var Md=new Set([`3DSOLID`,`BODY`,`REGION`,`SURFACE`,`EXTRUDEDSURFACE`,`LOFTEDSURFACE`,`REVOLVEDSURFACE`,`SWEPTSURFACE`,`PLANESURFACE`,`NURBSURFACE`]),Nd=(e,t,n=0)=>{let r=e.codes.find(([e])=>e===t);return r?Number(r[1]):n},Pd=(e,t)=>e.codes.find(([e])=>e===t)?.[1]??``,Fd=(e,t)=>e.codes.filter(([e])=>e===t).map(([,e])=>Number(e));function Id(e,t,n){let r=4*Math.atan(n),i=Math.hypot(t[0]-e[0],t[1]-e[1]),a=i/(2*Math.sin(Math.abs(r)/2)),o=[(e[0]+t[0])/2,(e[1]+t[1])/2],s=Math.sqrt(Math.max(0,a*a-(i/2)**2)),c=[(t[0]-e[0])/i,(t[1]-e[1])/i],l=(n>0?1:-1)*(Math.abs(r)>Math.PI?-1:1),u=[o[0]-c[1]*s*l,o[1]+c[0]*s*l],d=Math.atan2(e[1]-u[1],e[0]-u[0]),f=Math.atan2(t[1]-u[1],t[0]-u[0]);return n<0&&([d,f]=[f,d]),{id:V(),t:`arc`,c:u,r:a,a0:(d+2*Math.PI)%(2*Math.PI),a1:(f+2*Math.PI)%(2*Math.PI)}}function Ld(e,t,n){let r=[],i=e.length;for(let a=0;a<(n?i:i-1);a++){let n=e[a],o=e[(a+1)%i];Math.hypot(o[0]-n[0],o[1]-n[1])<1e-12||r.push(Math.abs(t[a]??0)>1e-12?Id(n,o,t[a]):{id:V(),t:`line`,a:n,b:o})}return r}function Rd(e){let t={},n,r,i=!1;for(let[t,a]of e.codes)t===1001?i=a.trim().toUpperCase()===`NUKCAD`:i&&t===1070?r=Number(a)/100:i&&t===1e3&&Se(a)&&(n=Se(a));let a=Pd(e,6);if(a&&(t.type=ve(a)),!n){let t=e.codes.find(([e])=>e===420);if(t)n=`#`+(Number(t[1])&16777215).toString(16).padStart(6,`0`);else{let t=Math.abs(Nd(e,62,256));t>=1&&t<=255&&(n=le(t))}}if(r==null){let t=Nd(e,370,-1);t>0&&(r=t/100)}return t.color=n,t.weight=r,Ue(t)}var zd={1:25.4,2:304.8,4:1,5:10,6:1e3,9:.0254,10:914.4,14:100},Bd=5e6;function Vd(e){let{entities:t,blocks:n,asm:r}=Cd(e),i=zd[Number(/\$INSUNITS\s*\r?\n\s*70\s*\r?\n\s*(-?\d+)/.exec(e)?.[1]??0)]??1,a={},o=[],s=[],c=[],l=Bd,u=(e,t,d,f)=>{let p=d?d.map(e=>e*i):i===1?null:[i,0,0,0,i,0],m,h=e=>{if(e.t===`line`&&Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1])<1e-9)return;let t=p?Ad(e,p):[e];if(m&&!f)for(let e of t)e.style={...m};(f?s:o).push(...t)},g=e=>{f||(a[e]=(a[e]??0)+1)};for(let a=0;a<e.length;a++){let o=e[a];if(--l<0)throw Error(`too-big`);if(Nd(o,67)===1)continue;m=Rd(o);let s=Nd(o,230,1)<0,p=e=>s?[-e[0],e[1]]:e;if(Md.has(o.type)){let e=r.get(Pd(o,5)),t=d?[d[0],d[1],d[2]*i,d[3],d[4],d[5]*i]:null;if(e)c.push({data:wd(e),xf:t,kind:o.type,unit:i});else{let e=[];for(let[t,n]of o.codes)t===1?e.push(n):t===3&&e.length&&(e[e.length-1]+=n);e.length>2?c.push({data:ea(e),xf:t,kind:o.type,unit:i}):g(o.type)}continue}switch(o.type){case`LINE`:h({id:V(),t:`line`,a:[Nd(o,10),Nd(o,20)],b:[Nd(o,11),Nd(o,21)]});break;case`CIRCLE`:h({id:V(),t:`circle`,c:p([Nd(o,10),Nd(o,20)]),r:Nd(o,40)});break;case`ARC`:{let e=Math.PI/180,t=Nd(o,50)*e,n=Nd(o,51)*e;h({id:V(),t:`arc`,c:p([Nd(o,10),Nd(o,20)]),r:Nd(o,40),a0:s?Math.PI-n:t,a1:s?Math.PI-t:n});break}case`LWPOLYLINE`:{let e=Fd(o,10),t=Fd(o,20),n=[],r=-1;for(let[e,t]of o.codes)e===10&&r++,e===42&&(n[r]=s?-Number(t):Number(t));for(let r of Ld(e.map((e,n)=>p([e,t[n]])),n,(Nd(o,70)&1)==1))h(r);break}case`POLYLINE`:{let t=s&&!(Nd(o,70)&88),n=[],r=[];for(;e[a+1]?.type===`VERTEX`;){a++;let i=[Nd(e[a],10),Nd(e[a],20)];n.push(t?[-i[0],i[1]]:i),r.push(t?-Nd(e[a],42):Nd(e[a],42))}for(let e of Ld(n,r,(Nd(o,70)&1)==1))h(e);break}case`ELLIPSE`:{let e=[Nd(o,10),Nd(o,20)],t=[Nd(o,11),Nd(o,21)],n=Nd(o,40,1)*(s?-1:1),r=[-t[1]*n,t[0]*n],i=Nd(o,41,0),a=Nd(o,42,2*Math.PI);if(!Number.isFinite(i)||!Number.isFinite(a)||Math.abs(i)>1e6||Math.abs(a)>1e6){g(o.type);break}for(;a<=i;)a+=2*Math.PI;if(a-i>=2*Math.PI-1e-9){let r=Math.hypot(t[0],t[1]);h({id:V(),t:`ellipse`,c:e,rx:r,ry:r*Math.abs(n),rot:Math.atan2(t[1],t[0])})}else for(let n of kd(e,t,r,i,a))h(n);break}case`SPLINE`:{let e=Fd(o,11),t=Fd(o,21),n=Fd(o,10),r=Fd(o,20),i=e.length>=2?e.map((e,n)=>[e,t[n]]):n.map((e,t)=>[e,r[t]]);i.length>=2&&h({id:V(),t:`spline`,pts:i});break}case`INSERT`:case`DIMENSION`:{let e=n.get(Pd(o,2));if(!e||t>8)break;let r=o.type===`DIMENSION`,i=r?[0,0]:[Nd(o,10),Nd(o,20)],a=r?1:Nd(o,41,1),c=r?1:Nd(o,42,1),l=r?0:Nd(o,50)*Math.PI/180,p=Math.cos(l),m=Math.sin(l),[h,g]=e.base,_=[p*a,-m*c,i[0]-p*a*h+m*c*g,m*a,p*c,i[1]-m*a*h-p*c*g];s&&!r&&(_=Td(Dd,_)),u(e.ents,t+1,d?Td(d,_):_,f||r);break}case`TEXT`:case`MTEXT`:case`ATTRIB`:case`HATCH`:case`SOLID`:case`POINT`:g(o.type);break;case`ATTDEF`:case`VIEWPORT`:case`SEQEND`:case`VERTEX`:break;default:g(o.type)}}};return u(t,0,null,!1),{entities:o,dims:s,solids:c,skipped:a}}function Hd(e){let t=new DataView(e);if(e.byteLength>=84){let n=t.getUint32(80,!0);if(84+n*50===e.byteLength){let e=new Float32Array(n*9);for(let r=0;r<n;r++){let n=84+r*50+12;for(let i=0;i<9;i++)e[r*9+i]=t.getFloat32(n+i*4,!0)}return e}}let n=new TextDecoder().decode(e),r=[],i=/vertex\s+([-+\d.eE]+)\s+([-+\d.eE]+)\s+([-+\d.eE]+)/g,a;for(;a=i.exec(n);)r.push(Number(a[1]),Number(a[2]),Number(a[3]));return new Float32Array(r.slice(0,r.length-r.length%9))}function Ud(e,t=!0){let n=new TextDecoder().decode(e),r=[],i=[],a=null,o=``;for(let e of n.split(/\r?\n/)){let n=e.trim();if(n.startsWith(`v `)){let[e,i,a]=n.slice(2).trim().split(/\s+/).map(Number);r.push(t?[e,-a,i]:[e,i,a])}else if(n.startsWith(`o `)||n.startsWith(`g `))o=n.slice(2).trim(),a=null;else if(n.startsWith(`f `)){a||(a=i.find(e=>e.name===o)??null,a||i.push(a={name:o,out:[]}));let e=n.slice(2).trim().split(/\s+/).map(e=>{let t=parseInt(e.split(`/`)[0],10);return t<0?r.length+t:t-1});for(let t=1;t+1<e.length;t++)for(let n of[e[0],e[t],e[t+1]])a.out.push(...(r[n]??[0,0,0]).slice(0,3))}}return i.filter(e=>e.out.length).map(e=>({name:e.name,soup:new Float32Array(e.out)}))}var Wd={micron:.001,millimeter:1,centimeter:10,inch:25.4,foot:304.8,meter:1e3};async function Gd(e){let{unzip:t}=await i(async()=>{let{unzip:e}=await import(`./acis-DSLEUHn5.js`).then(e=>e.t);return{unzip:e}},__vite__mapDeps([0,1]),import.meta.url),n=await t(e,e=>/\.model$/i.test(e)),r=new Map;for(let[e,t]of n)/\.model$/i.test(e)&&r.set(`/`+e.replace(/\\/g,`/`).replace(/^\//,``),new TextDecoder().decode(t));let a=[...r.keys()].find(e=>/^\/3D\/3dmodel\.model$/i.test(e))??[...r.keys()][0];if(!a)throw Error(`no model`);let o=(e,t)=>RegExp(`(?:^|\\s)${t}="([^"]*)"`).exec(e)?.[1],s=[1,0,0,0,1,0,0,0,1,0,0,0],c=e=>e?e.trim().split(/\s+/).map(Number):s,l=(e,t)=>{let n=[];for(let r=0;r<4;r++)for(let i=0;i<3;i++){let a=r===3?t[9+i]:0;for(let n=0;n<3;n++)a+=e[r*3+n]*t[n*3+i];n.push(a)}return n},u=new Map,d=e=>{let t=u.get(e);if(t)return t;let n=r.get(e)??``,i=Wd[o(/<model\b[^>]*>/.exec(n)?.[0]??``,`unit`)??`millimeter`]??1,a=new Map;for(let t of n.matchAll(/<object\b([^>]*)>([\s\S]*?)<\/object>/g)){let n=t[1],r=t[2],i=[];for(let e of r.matchAll(/<vertex\b([^>]*)\/?>/g))i.push(Number(o(e[1],`x`)),Number(o(e[1],`y`)),Number(o(e[1],`z`)));let s=[];for(let e of r.matchAll(/<triangle\b([^>]*)\/?>/g))s.push(Number(o(e[1],`v1`)),Number(o(e[1],`v2`)),Number(o(e[1],`v3`)));let l=[];for(let t of r.matchAll(/<component\b([^>]*)\/?>/g))l.push({id:o(t[1],`objectid`)??``,path:o(t[1],`p:path`)??e,m:c(o(t[1],`transform`))});a.set(o(n,`id`)??``,{name:o(n,`name`)??``,verts:i,tris:s,comps:l})}return t={unit:i,objects:a,build:[...n.matchAll(/<item\b([^>]*)\/?>/g)].map(t=>({id:o(t[1],`objectid`)??``,m:c(o(t[1],`transform`)),path:o(t[1],`p:path`)??e}))},u.set(e,t),t},f=new Map,p=(e,t,n)=>{let r=d(e).objects.get(t);if(!r||n>16)return 0;let i=`${n}\n${e}\n${t}`,a=f.get(i);if(a===void 0){a=r.tris.length*3+1;for(let e of r.comps)a=Math.min(a+p(e.path,e.id,n+1),90000001);f.set(i,a)}return a},m=(e,t,n,r,i)=>{let a=d(e),o=a.objects.get(t);if(!o||i>16)return;let s=a.unit;for(let e=0;e<o.tris.length;e++){let t=o.tris[e]*3,i=o.verts[t],a=o.verts[t+1],c=o.verts[t+2];r.push((i*n[0]+a*n[3]+c*n[6]+n[9])*s,(i*n[1]+a*n[4]+c*n[7]+n[10])*s,(i*n[2]+a*n[5]+c*n[8]+n[11])*s)}for(let e of o.comps)m(e.path,e.id,l(e.m,n),r,i+1)},h=d(a),g=[],_=h.build.length?h.build:[...h.objects.keys()].map(e=>({id:e,m:s,path:a})),v=0;for(let e of _)if((v+=p(e.path,e.id,0))>9e7)throw Error(`too-big`);for(let e of _){let t=[];m(e.path,e.id,e.m,t,0),t.length&&g.push({name:d(e.path).objects.get(e.id)?.name??``,soup:new Float32Array(t)})}return g}function Kd(e){let t=new Uint8Array(e.buffer,e.byteOffset,e.byteLength),n=``;for(let e=0;e<t.length;e+=32768)n+=String.fromCharCode(...t.subarray(e,e+32768));return btoa(n)}function qd(e){let t=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0];for(let r=0;r<e.length;r+=3)for(let i=0;i<3;i++)t[i]=Math.min(t[i],e[r+i]),n[i]=Math.max(n[i],e[r+i]);return[t,n]}async function Jd(e){let t=new Uint8Array(e);if(t[0]===31&&t[1]===139){let{inflateCapped:e,UNZIP_MAX:n}=await i(async()=>{let{inflateCapped:e,UNZIP_MAX:t}=await import(`./acis-DSLEUHn5.js`).then(e=>e.t);return{inflateCapped:e,UNZIP_MAX:t}},__vite__mapDeps([0,1]),import.meta.url);return e(t,n,`gzip`)}if(t[0]===40&&t[1]===181&&t[2]===47&&t[3]===253){let{decompress:e}=await i(async()=>{let{decompress:e}=await import(`./esm-BU7wOCM-.js`);return{decompress:e}},[],import.meta.url);return e(t)}return t}function Yd(e){let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=(t,n)=>{let r=``;for(let i=0;i<n;i++)r+=String.fromCharCode(e[t+i]);return r};if(n(0,7)!==`BLENDER`)throw Error(`not a blend file`);let r,i,a,o,s=!1;if(e[7]===95||e[7]===45)i=e[7]===95?4:8,a=e[8]===118,o=parseInt(n(9,3),10),r=12;else{let t=parseInt(n(7,2),10);i=8,a=e[12]===118,o=parseInt(n(13,4),10),s=n(10,2)===`01`,r=t}if(!a)throw Error(`big-endian blend`);let c=e=>t.getInt32(e,a),l=e=>t.getUint16(e,a),u=e=>t.getInt16(e,a),d=e=>t.getFloat32(e,a),f=e=>i===8?t.getBigUint64(e,a):BigInt(t.getUint32(e,a)),p=[],m=new Map;for(;r+16<=e.length;){let e=n(r,4).replace(/\0/g,``),o;if(o=s?{code:e,sdna:c(r+4),old:t.getBigUint64(r+8,a),size:Number(t.getBigInt64(r+16,a)),count:Number(t.getBigInt64(r+24,a)),offset:r+32}:{code:e,size:c(r+4),old:f(r+8),sdna:c(r+8+i),count:c(r+12+i),offset:r+16+i},e===`ENDB`)break;p.push(o),o.old&&m.set(o.old,o),r=o.offset+o.size}let h=p.find(e=>e.code===`DNA1`);if(!h)throw Error(`no DNA`);let g=h.offset+8,_=()=>{let t=g;for(;e[t]!==0;)t++;let r=n(g,t-g);return g=t+1,r},v=()=>g=g+3&-4,y=c(g);g+=4;let b=[];for(let e=0;e<y;e++)b.push(_());v(),g+=4;let x=c(g);g+=4;let S=[];for(let e=0;e<x;e++)S.push(_());v(),g+=4;let C=[];for(let e=0;e<x;e++)C.push(l(g+e*2));g+=x*2,v(),g+=4;let w=c(g);g+=4;let T=[],E=new Map;for(let e=0;e<w;e++){let e=u(g),t=u(g+2);g+=4;let n=new Map,r=0;for(let e=0;e<t;e++){let e=S[u(g)],t=b[u(g+2)];g+=4;let a=t.startsWith(`*`)||t.startsWith(`(*`),o=1;for(let e of t.matchAll(/\[(\d+)\]/g))o*=Number(e[1]);let s=t.replace(/^[*(]+/,``).replace(/\).*$/,``).replace(/\[.*$/,``),c=a?i:C[S.indexOf(e)],l={type:e,name:t,base:s,ptr:a,count:o,offset:r,size:c*o};n.set(s,l),r+=l.size}let a={type:S[e],size:C[e],fields:n};T.push(a),E.set(a.type,a)}let D=(e,t,n)=>{let r=e.fields.get(n);return r?{...r,at:t+r.offset}:null},O=(t,n,r,i=0)=>{let a=D(t,n,r);return a?a.type===`int`?c(a.at):a.type===`short`?u(a.at):a.type===`char`||a.type===`uchar`?e[a.at]:i:i},k=(e,t,n)=>{let r=D(e,t,n);return!r||!r.ptr?null:m.get(f(r.at))??null},A=(e,t,n)=>{let r=D(e,t,n);if(!r||r.type!==`float`)return null;let i=[];for(let e=0;e<r.count;e++)i.push(d(r.at+e*4));return i},j=(t,n,r)=>{let i=D(t,n,r);if(!i)return``;let a=i.at;for(;a<i.at+i.count&&e[a]!==0;)a++;return new TextDecoder().decode(e.subarray(i.at,a))},ee=E.get(`ID`),te=E.get(`Object`),ne=E.get(`Mesh`);if(!te||!ne||!ee)throw Error(`no mesh structs`);let M=E.get(`CustomData`),re=E.get(`CustomDataLayer`),N=(e,t,n,r)=>{if(!M||!re)return null;let i=D(ne,e,t);if(!i)return null;let a=k(M,i.at,`layers`),o=O(M,i.at,`totlayer`);if(!a)return null;for(let e=0;e<o;e++){let t=a.offset+e*re.size,i=j(re,t,`name`),o=O(re,t,`type`);if(i===n||r!=null&&o===r&&!i.startsWith(`.`))return k(re,t,`data`)}return null},P=t=>{let n=t.offset,r=O(ne,n,`totvert`,O(ne,n,`verts_num`));if(!r)return null;let i=null,a=k(ne,n,`mvert`),o=E.get(`MVert`);if(a&&o){i=new Float32Array(r*3);for(let e=0;e<r;e++){let t=A(o,a.offset+e*o.size,`co`);i.set(t,e*3)}}else{let t=N(n,`vdata`,`position`)??N(n,`vert_data`,`position`);t&&(i=new Float32Array(e.slice(t.offset,t.offset+r*12).buffer))}if(!i)return null;let s={pos:Array.from(i),polys:[]},l=e=>{e.length>=3&&e.every(e=>e>=0&&e<r)&&s.polys.push(e)},u=k(ne,n,`mpoly`),d=k(ne,n,`mloop`),f=E.get(`MPoly`),p=E.get(`MLoop`);if(u&&d&&f&&p){let e=O(ne,n,`totpoly`);for(let t=0;t<e;t++){let e=u.offset+t*f.size,n=O(f,e,`loopstart`),r=O(f,e,`totloop`),i=[];for(let e=0;e<r;e++)i.push(O(p,d.offset+(n+e)*p.size,`v`));l(i)}return s}let m=k(ne,n,`face_offset_indices`)??k(ne,n,`poly_offset_indices`),h=O(ne,n,`faces_num`,O(ne,n,`totpoly`)),g=N(n,`corner_data`,`.corner_vert`)??N(n,`ldata`,`.corner_vert`);if(m&&g&&h){for(let e=0;e<h;e++){let t=c(m.offset+e*4),n=c(m.offset+(e+1)*4),r=[];for(let e=t;e<n;e++)r.push(c(g.offset+e*4));l(r)}return s}let _=k(ne,n,`mface`),v=E.get(`MFace`);if(_&&v){let e=O(ne,n,`totface`);for(let t=0;t<e;t++){let e=_.offset+t*v.size,n=[O(v,e,`v1`),O(v,e,`v2`),O(v,e,`v3`),O(v,e,`v4`)];l(n[3]?n:n.slice(0,3))}return s}return null},ie=e=>{let t=A(te,e,`obmat`)??A(te,e,`object_to_world`);if(t&&t.length===16&&t.some(e=>e!==0))return t;let n=A(te,e,`loc`)??[0,0,0],r=A(te,e,`rot`)??[0,0,0],i=A(te,e,`size`)??A(te,e,`scale`)??[1,1,1],[a,o,s]=r.map(Math.cos),[c,l,u]=r.map(Math.sin),d=[o*s,o*u,-l,c*l*s-a*u,c*l*u+a*s,c*o,a*l*s+c*u,a*l*u-c*s,a*o];return[d[0]*i[0],d[1]*i[0],d[2]*i[0],0,d[3]*i[1],d[4]*i[1],d[5]*i[1],0,d[6]*i[2],d[7]*i[2],d[8]*i[2],0,n[0],n[1],n[2],1]},ae=[],oe=0,se=new Map,ce=E.get(`ModifierData`);for(let e of p){if(e.code!==`OB`||T[e.sdna]!==te)continue;let t=e.offset;if(O(te,t,`type`)!==1)continue;let n=k(te,t,`data`);if(!n||T[n.sdna]!==ne)continue;se.has(n)||se.set(n,P(n));let r=se.get(n);if(!r?.polys.length)continue;let i=D(te,t,`modifiers`),a=i?m.get(f(i.at))??null:null,o=0;for(;a&&ce&&o++<64;){let e=T[a.sdna],t=a.offset,n=O(ce,t,`type`);if(O(ce,t,`mode`)&1){if(n===5&&e.fields.has(`flag`)){let n=O(e,t,`flag`),i=n>>3&7;i||=1<<Math.max(0,O(e,t,`axis`));let a=A(e,t,`tolerance`)?.[0]??.001;for(let e=0;e<3;e++)i&1<<e&&(r=Xd(r,e,n&128?-1:a))}else if(n===1&&e.fields.has(`levels`)){let n=Math.min(O(e,t,`levels`),3);for(let e=0;e<n&&r.polys.length*4<=6e4;e++)r=Zd(r)}else oe++}a=k(ce,t,`next`)}let s=ie(t),c=r.pos,l=[],u=e=>{let t=c[e*3],n=c[e*3+1],r=c[e*3+2];l.push(s[0]*t+s[4]*n+s[8]*r+s[12],s[1]*t+s[5]*n+s[9]*r+s[13],s[2]*t+s[6]*n+s[10]*r+s[14])};for(let e of r.polys)for(let t=1;t+1<e.length;t++)u(e[0]),u(e[t]),u(e[t+1]);ae.push({name:j(ee,t,`name`).replace(/^OB/,``)||`Object`,soup:new Float32Array(l)})}return{parts:ae,modifiers:oe,version:o}}function Xd(e,t,n){let r=e.pos.length/3,i=e.pos.slice(),a=[];for(let o=0;o<r;o++){let r=e.pos[o*3+t];n>=0&&Math.abs(r)<=n?a.push(o):(a.push(i.length/3),i.push(e.pos[o*3],e.pos[o*3+1],e.pos[o*3+2]),i[i.length-3+t]=-r)}return{pos:i,polys:[...e.polys,...e.polys.map(e=>e.map(e=>a[e]).reverse())]}}function Zd(e){let t=e.pos.length/3,n=e.pos,r=n.slice(),i=[];for(let t of e.polys){let e=0,a=0,o=0;for(let r of t)e+=n[r*3],a+=n[r*3+1],o+=n[r*3+2];i.push(r.length/3),r.push(e/t.length,a/t.length,o/t.length)}let a=(e,n)=>e<n?e*t+n:n*t+e,o=new Map;e.polys.forEach((e,t)=>{for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length],s=a(r,i),c=o.get(s);c||o.set(s,c={a:r,b:i,faces:[],pt:-1}),c.faces.push(t)}});for(let e of o.values()){e.pt=r.length/3;let t=[0,1,2].map(t=>n[e.a*3+t]+n[e.b*3+t]);if(e.faces.length===2){let n=i[e.faces[0]],a=i[e.faces[1]];for(let e=0;e<3;e++)r.push((t[e]+r[n*3+e]+r[a*3+e])/4)}else for(let e=0;e<3;e++)r.push(t[e]/2)}let s=new Float64Array(t*3),c=new Uint32Array(t);e.polys.forEach((e,t)=>{for(let n of e){c[n]++;for(let e=0;e<3;e++)s[n*3+e]+=r[i[t]*3+e]}});let l=new Float64Array(t*3),u=new Uint32Array(t),d=new Float64Array(t*3),f=new Uint32Array(t);for(let e of o.values())for(let[t,r]of[[e.a,e.b],[e.b,e.a]]){u[t]++;for(let e=0;e<3;e++)l[t*3+e]+=(n[t*3+e]+n[r*3+e])/2;if(e.faces.length!==2){f[t]++;for(let e=0;e<3;e++)d[t*3+e]+=n[r*3+e]}}for(let e=0;e<t;e++){let t=u[e];if(!t)continue;if(f[e]>=2){for(let t=0;t<3;t++)r[e*3+t]=(d[e*3+t]+6*n[e*3+t])/8;continue}if(f[e])continue;let i=c[e];for(let a=0;a<3;a++)r[e*3+a]=(s[e*3+a]/i+2*l[e*3+a]/t+(t-3)*n[e*3+a])/t}let p=[];return e.polys.forEach((e,t)=>{for(let n=0;n<e.length;n++){let r=e[(n+e.length-1)%e.length],s=e[(n+1)%e.length];p.push([e[n],o.get(a(e[n],s)).pt,i[t],o.get(a(r,e[n])).pt])}}),{pos:r,polys:p}}function Qd(e,t){let n={app:`NukCAD`,version:1,mode:e,doc:nt(t)};return JSON.stringify(n)}function $d(e){let t;try{t=JSON.parse(e)}catch{throw Error(`not-nukcad`)}let n=typeof t==`object`&&t?t:{};if(n.app!==`NukCAD`||typeof n.doc!=`object`||n.doc===null||Array.isArray(n.doc))throw Error(`not-nukcad`);let r={unknownSteps:0,dropped:0},i=s(n.doc,r),a=typeof n.version==`number`&&Number.isFinite(n.version)?n.version:1;return{app:`NukCAD`,version:a,mode:n.mode===`arch`?`arch`:`print`,doc:i,newer:a>1,report:r}}function ef(e,t){let n=new Map;for(let e of[...t.bodies,...t.sketches,...t.workPlanes??[]])n.set(e.id,V());let r=e=>e?n.get(e):void 0,i=new Map,a=e=>{if(e)return i.has(e)||i.set(e,V()),i.get(e)},o=t.bodies.map(e=>({...e,id:n.get(e.id),linkTo:r(e.linkTo),group:a(e.group)})),s=t.sketches.map(e=>({...e,id:n.get(e.id),host:r(e.host),plane:r(e.plane),group:a(e.group)})),c=(t.workPlanes??[]).map(e=>({...e,id:n.get(e.id)})),l=e=>e.bodyId?{...e,bodyId:r(e.bodyId)}:e,u=(t.annotations??[]).filter(e=>[e.a,e.b].every(e=>!e?.bodyId||n.has(e.bodyId))).map(e=>({...e,id:V(),a:l(e.a),b:e.b&&l(e.b)}));return{doc:Qe({...e,bodies:[...e.bodies,...o],sketches:[...e.sketches,...s],annotations:[...e.annotations??[],...u],workPlanes:[...e.workPlanes??[],...c]},t.assets),ids:[...o.map(e=>e.id),...s.map(e=>e.id)]}}function tf(e,t){let n=new Set(e),r=e.filter(e=>e.startsWith(t)).length+1;for(;n.has(`${t} ${r}`);)r++;return`${t} ${r}`}var nf={type:`change`},rf={type:`start`},af={type:`end`},of=new gt,sf=new yn,cf=Math.cos(70*h.DEG2RAD),lf=new y,uf=2*Math.PI,df={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ff=1e-6,pf=class extends yt{constructor(e,t=null){super(e,t),this.state=df.NONE,this.target=new y,this.cursor=new y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:Ir.ROTATE,MIDDLE:Ir.DOLLY,RIGHT:Ir.PAN},this.touches={ONE:Ye.ROTATE,TWO:Ye.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new y,this._lastQuaternion=new An,this._lastTargetPosition=new y,this._quat=new An().setFromUnitVectors(e.up,new y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Dr,this._sphericalDelta=new Dr,this._scale=1,this._panOffset=new y,this._rotateStart=new W,this._rotateEnd=new W,this._rotateDelta=new W,this._panStart=new W,this._panEnd=new W,this._panDelta=new W,this._dollyStart=new W,this._dollyEnd=new W,this._dollyDelta=new W,this._dollyDirection=new y,this._mouse=new W,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hf.bind(this),this._onPointerDown=mf.bind(this),this._onPointerUp=gf.bind(this),this._onContextMenu=Cf.bind(this),this._onMouseWheel=yf.bind(this),this._onKeyDown=bf.bind(this),this._onTouchStart=xf.bind(this),this._onTouchMove=Sf.bind(this),this._onMouseDown=_f.bind(this),this._onMouseMove=vf.bind(this),this._interceptControlDown=wf.bind(this),this._interceptControlUp=Tf.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=df.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),e.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nf),this.update(),this.state=df.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;lf.copy(t).sub(this.target),lf.applyQuaternion(this._quat),this._spherical.setFromVector3(lf),this.autoRotate&&this.state===df.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=uf:n>Math.PI&&(n-=uf),r<-Math.PI?r+=uf:r>Math.PI&&(r-=uf),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(lf.setFromSpherical(this._spherical),lf.applyQuaternion(this._quatInverse),t.copy(this.target).add(lf),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=lf.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new y(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new y(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=lf.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(of.origin.copy(this.object.position),of.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(of.direction))<cf?this.object.lookAt(this.target):(sf.setFromNormalAndCoplanarPoint(this.object.up,this.target),of.intersectPlane(sf,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>ff||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ff||this._lastTargetPosition.distanceToSquared(this.target)>ff?(this.dispatchEvent(nf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?uf/60/60*this.autoRotateSpeed:uf/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){lf.setFromMatrixColumn(t,0),lf.multiplyScalar(-e),this._panOffset.add(lf)}_panUp(e,t){this.screenSpacePanning===!0?lf.setFromMatrixColumn(t,1):(lf.setFromMatrixColumn(t,0),lf.crossVectors(this.object.up,lf)),lf.multiplyScalar(e),this._panOffset.add(lf)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;lf.copy(r).sub(this.target);let i=lf.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(uf*this._rotateDelta.x/t.clientHeight),this._rotateUp(uf*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(uf*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-uf*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(uf*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-uf*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(uf*this._rotateDelta.x/t.clientHeight),this._rotateUp(uf*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new W,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function mf(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function hf(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function gf(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(af),this.state=df.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function _f(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ir.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=df.DOLLY;break;case Ir.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=df.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=df.ROTATE}break;case Ir.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=df.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=df.PAN}break;default:this.state=df.NONE}this.state!==df.NONE&&this.dispatchEvent(rf)}function vf(e){switch(this.state){case df.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case df.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case df.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function yf(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===df.NONE&&(e.preventDefault(),this.dispatchEvent(rf),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(af))}function bf(e){this.enabled!==!1&&this._handleKeyDown(e)}function xf(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Ye.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=df.TOUCH_ROTATE;break;case Ye.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=df.TOUCH_PAN;break;default:this.state=df.NONE}break;case 2:switch(this.touches.TWO){case Ye.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=df.TOUCH_DOLLY_PAN;break;case Ye.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=df.TOUCH_DOLLY_ROTATE;break;default:this.state=df.NONE}break;default:this.state=df.NONE}this.state!==df.NONE&&this.dispatchEvent(rf)}function Sf(e){switch(this._trackPointer(e),this.state){case df.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case df.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case df.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case df.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=df.NONE}}function Cf(e){this.enabled!==!1&&e.preventDefault()}function wf(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Tf(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}X.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new W},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},ia.line={uniforms:m.merge([X.common,X.fog,X.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var Ef=class extends wr{constructor(e){super({type:`LineMaterial`,uniforms:m.clone(ia.line.uniforms),vertexShader:ia.line.vertexShader,fragmentShader:ia.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return`WORLD_UNITS`in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return`USE_DASH`in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return`USE_ALPHA_TO_COVERAGE`in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE=``:delete this.defines.USE_ALPHA_TO_COVERAGE)}},Df={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Of=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},kf=new Bn(-1,1,1,-1,0,1),Af=new class extends P{constructor(){super(),this.setAttribute(`position`,new Gn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new Gn([0,2,0,0,2,0],2))}},jf=class{constructor(e){this._mesh=new z(Af,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,kf)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Mf=class extends Of{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof wr?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=m.clone(e.uniforms),this.material=new wr({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new jf(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Nf=class extends Of{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Pf=class extends Of{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Ff=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new W);this._width=n.width,this._height=n.height,t=new tt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Pr}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Mf(Df),this.copyPass.material.blending=0,this.timer=new Ze}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Nf!==void 0&&(r instanceof Nf?n=!0:r instanceof Pf&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new W);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},If=class e extends Of{constructor(e,t,n,r){super(),this.renderScene=t,this.renderCamera=n,this.selectedObjects=r===void 0?[]:r,this.visibleEdgeColor=new H(1,1,1),this.hiddenEdgeColor=new H(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.patternTexture=null,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e===void 0?new W(256,256):new W(e.x,e.y);let i=Math.round(this.resolution.x/this.downSampleRatio),a=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new tt(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name=`OutlinePass.mask`,this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new A,this.depthMaterial.side=2,this.depthMaterial.depthPacking=gn,this.depthMaterial.blending=0,this.prepareMaskMaterial=this._getPrepareMaskMaterial(),this.prepareMaskMaterial.side=2,this.prepareMaskMaterial.fragmentShader=s(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new tt(this.resolution.x,this.resolution.y,{type:Pr}),this.renderTargetDepthBuffer.texture.name=`OutlinePass.depth`,this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new tt(i,a,{type:Pr,depthBuffer:!1}),this.renderTargetMaskDownSampleBuffer.texture.name=`OutlinePass.depthDownSample`,this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new tt(i,a,{type:Pr,depthBuffer:!1}),this.renderTargetBlurBuffer1.texture.name=`OutlinePass.blur1`,this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new tt(Math.round(i/2),Math.round(a/2),{type:Pr,depthBuffer:!1}),this.renderTargetBlurBuffer2.texture.name=`OutlinePass.blur2`,this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this._getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new tt(i,a,{type:Pr,depthBuffer:!1}),this.renderTargetEdgeBuffer1.texture.name=`OutlinePass.edge1`,this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new tt(Math.round(i/2),Math.round(a/2),{type:Pr,depthBuffer:!1}),this.renderTargetEdgeBuffer2.texture.name=`OutlinePass.edge2`,this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1,this.separableBlurMaterial1=this._getSeparableBlurMaterial(4),this.separableBlurMaterial1.uniforms.texSize.value.set(i,a),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this._getSeparableBlurMaterial(4),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(i/2),Math.round(a/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=4,this.overlayMaterial=this._getOverlayMaterial();let o=Df;this.copyUniforms=m.clone(o.uniforms),this.materialCopy=new wr({uniforms:this.copyUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new H,this.oldClearAlpha=1,this._fsQuad=new jf(null),this.tempPulseColor1=new H,this.tempPulseColor2=new H,this.textureMatrix=new M;function s(e,t){let n=t.isPerspectiveCamera?`perspective`:`orthographic`;return e.replace(/DEPTH_TO_VIEW_Z/g,n+`DepthToViewZ`)}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this._fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let n=Math.round(e/this.downSampleRatio),r=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(n,r),this.renderTargetBlurBuffer1.setSize(n,r),this.renderTargetEdgeBuffer1.setSize(n,r),this.separableBlurMaterial1.uniforms.texSize.value.set(n,r),n=Math.round(n/2),r=Math.round(r/2),this.renderTargetBlurBuffer2.setSize(n,r),this.renderTargetEdgeBuffer2.setSize(n,r),this.separableBlurMaterial2.uniforms.texSize.value.set(n,r)}render(t,n,r,i,a){if(this.selectedObjects.length>0){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let n=t.autoClear;t.autoClear=!1,a&&t.state.buffers.stencil.setTest(!1),t.setClearColor(16777215,1),this._updateSelectionCache(),this._changeVisibilityOfSelectedObjects(!1);let i=this.renderScene.background,o=this.renderScene.overrideMaterial;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,t.setRenderTarget(this.renderTargetDepthBuffer),t.clear(),t.render(this.renderScene,this.renderCamera),this._changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this._updateTextureMatrix(),this._changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,t.setRenderTarget(this.renderTargetMaskBuffer),t.clear(),t.render(this.renderScene,this.renderCamera),this._changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=i,this.renderScene.overrideMaterial=o,this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,t.setRenderTarget(this.renderTargetMaskDownSampleBuffer),t.clear(),this._fsQuad.render(t),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){let e=1.25/2+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(e),this.tempPulseColor2.multiplyScalar(e)}this._fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,t.setRenderTarget(this.renderTargetEdgeBuffer1),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=e.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,t.setRenderTarget(this.renderTargetBlurBuffer1),t.clear(),this._fsQuad.render(t),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetEdgeBuffer1),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetBlurBuffer2),t.clear(),this._fsQuad.render(t),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetEdgeBuffer2),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,a&&t.state.buffers.stencil.setTest(!0),t.setRenderTarget(r),this._fsQuad.render(t),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=n}this.renderToScreen&&(this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=r.texture,t.setRenderTarget(null),this._fsQuad.render(t))}_updateSelectionCache(){let e=this._selectionCache;function t(t){t.isMesh&&e.add(t)}e.clear();for(let e=0;e<this.selectedObjects.length;e++)this.selectedObjects[e].traverse(t)}_changeVisibilityOfSelectedObjects(e){let t=this._visibilityCache;for(let n of this._selectionCache)e===!0?n.visible=t.get(n):(t.set(n,n.visible),n.visible=e)}_changeVisibilityOfNonSelectedObjects(e){let t=this._visibilityCache,n=this._selectionCache;function r(r){if(r.isPoints||r.isLine||r.isLine2)e===!0?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e);else if((r.isMesh||r.isSprite)&&!n.has(r)){let n=r.visible;(e===!1||t.get(r)===!0)&&(r.visible=e),t.set(r,n)}}this.renderScene.traverse(r)}_updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}_getPrepareMaskMaterial(){return new wr({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new W(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <batching_pars_vertex>
				#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <batching_vertex>
					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif

					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}_getEdgeDetectionMaterial(){return new wr({uniforms:{maskTexture:{value:null},texSize:{value:new W(.5,.5)},visibleEdgeColor:{value:new y(1,1,1)},hiddenEdgeColor:{value:new y(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}_getSeparableBlurMaterial(e){return new wr({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new W(.5,.5)},direction:{value:new W(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}_getOverlayMaterial(){return new wr({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:2,depthTest:!1,depthWrite:!1,transparent:!0})}};If.BlurDirectionX=new W(1,0),If.BlurDirectionY=new W(0,1);var Lf={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Rf=class extends Of{constructor(){super(),this.isOutputPass=!0,this.uniforms=m.clone(Lf.uniforms),this.material=new St({name:Lf.name,uniforms:this.uniforms,vertexShader:Lf.vertexShader,fragmentShader:Lf.fragmentShader}),this._fsQuad=new jf(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},me.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},zf=class extends Of{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new H}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Bf=new Rr,Vf=new y,Hf=class extends x{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type=`LineSegmentsGeometry`,this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute(`position`,new Gn([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute(`uv`,new Gn([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new Or(t,6,1);return this.setAttribute(`instanceStart`,new C(n,3,0)),this.setAttribute(`instanceEnd`,new C(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new Or(t,6,1);return this.setAttribute(`instanceColorStart`,new C(n,3,0)),this.setAttribute(`instanceColorEnd`,new C(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new ne(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rr);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Bf.setFromBufferAttribute(t),this.boundingBox.union(Bf))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hn),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)Vf.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(Vf)),Vf.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(Vf));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`,this)}}toJSON(){}},Uf=new st,Wf=new y,Gf=new y,Kf=new st,qf=new st,Jf=new st,Yf=new y,Xf=new M,Zf=new Tn,Qf=new y,$f=new Rr,ep=new hn,tp=new st,np,rp;function ip(e,t,n){return tp.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),tp.multiplyScalar(1/tp.w),tp.x=rp/n.width,tp.y=rp/n.height,tp.applyMatrix4(e.projectionMatrixInverse),tp.multiplyScalar(1/tp.w),Math.abs(Math.max(tp.x,tp.y))}function ap(e,t){let n=e.matrixWorld,r=e.geometry,i=r.attributes.instanceStart,a=r.attributes.instanceEnd,o=Math.min(r.instanceCount,i.count);for(let r=0,s=o;r<s;r++){Zf.start.fromBufferAttribute(i,r),Zf.end.fromBufferAttribute(a,r),Zf.applyMatrix4(n);let o=new y,s=new y;np.distanceSqToSegment(Zf.start,Zf.end,s,o),s.distanceTo(o)<rp*.5&&t.push({point:s,pointOnLine:o,distance:np.origin.distanceTo(s),object:e,face:null,faceIndex:r,uv:null,uv1:null})}}function op(e,t,n){let r=t.projectionMatrix,i=e.material.resolution,a=e.matrixWorld,o=e.geometry,s=o.attributes.instanceStart,c=o.attributes.instanceEnd,l=Math.min(o.instanceCount,s.count),u=-t.near;np.at(1,Jf),Jf.w=1,Jf.applyMatrix4(t.matrixWorldInverse),Jf.applyMatrix4(r),Jf.multiplyScalar(1/Jf.w),Jf.x*=i.x/2,Jf.y*=i.y/2,Jf.z=0,Yf.copy(Jf),Xf.multiplyMatrices(t.matrixWorldInverse,a);for(let t=0,o=l;t<o;t++){if(Kf.fromBufferAttribute(s,t),qf.fromBufferAttribute(c,t),Kf.w=1,qf.w=1,Kf.applyMatrix4(Xf),qf.applyMatrix4(Xf),Kf.z>u&&qf.z>u)continue;if(Kf.z>u){let e=Kf.z-qf.z,t=(Kf.z-u)/e;Kf.lerp(qf,t)}else if(qf.z>u){let e=qf.z-Kf.z,t=(qf.z-u)/e;qf.lerp(Kf,t)}Kf.applyMatrix4(r),qf.applyMatrix4(r),Kf.multiplyScalar(1/Kf.w),qf.multiplyScalar(1/qf.w),Kf.x*=i.x/2,Kf.y*=i.y/2,qf.x*=i.x/2,qf.y*=i.y/2,Zf.start.copy(Kf),Zf.start.z=0,Zf.end.copy(qf),Zf.end.z=0;let o=Zf.closestPointToPointParameter(Yf,!0);Zf.at(o,Qf);let l=h.lerp(Kf.z,qf.z,o),d=l>=-1&&l<=1,f=Yf.distanceTo(Qf)<rp*.5;if(d&&f){Zf.start.fromBufferAttribute(s,t),Zf.end.fromBufferAttribute(c,t),Zf.start.applyMatrix4(a),Zf.end.applyMatrix4(a);let r=new y,i=new y;np.distanceSqToSegment(Zf.start,Zf.end,i,r),n.push({point:i,pointOnLine:r,distance:np.origin.distanceTo(i),object:e,face:null,faceIndex:t,uv:null,uv1:null})}}}var sp=class extends z{constructor(e=new Hf,t=new Ef({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type=`LineSegments2`}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)Wf.fromBufferAttribute(t,e),Gf.fromBufferAttribute(n,e),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+Wf.distanceTo(Gf);let i=new Or(r,2,1);return e.setAttribute(`instanceDistanceStart`,new C(i,1,0)),e.setAttribute(`instanceDistanceEnd`,new C(i,1,1)),this}raycast(e,t){let n=this.material.worldUnits,r=e.camera;if(r===null&&!n&&console.error(`LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let i=e.params.Line2===void 0?0:e.params.Line2.threshold||0;np=e.ray;let a=this.matrixWorld,o=this.geometry,s=this.material;rp=s.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),ep.copy(o.boundingSphere).applyMatrix4(a);let c;if(c=n?rp*.5:ip(r,Math.max(r.near,ep.distanceToPoint(np.origin)),s.resolution),ep.radius+=c,np.intersectsSphere(ep)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),$f.copy(o.boundingBox).applyMatrix4(a);let l;l=n?rp*.5:ip(r,Math.max(r.near,$f.distanceToPoint(np.origin)),s.resolution),$f.expandByScalar(l),np.intersectsBox($f)!==!1&&(n?ap(this,t):op(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Uf),this.material.uniforms.resolution.value.set(Uf.z,Uf.w))}},cp=(e,t=e.value)=>t*(e.scale??1),lp=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],up=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],dp=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],fp=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],pp=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],mp=e=>Math.hypot(e[0],e[1],e[2]),hp=e=>{let t=mp(e);return t>1e-12?dp(e,1/t):[0,0,1]};function gp(e,t){let n=t;return e.min!=null&&n<e.min&&(n=e.min),e.max!=null&&n>e.max&&(n=e.max),n}function _p(e,t){let n=hp(e.dir),r=hp(e.from??[1,0,0]),i=pp(n,r),a=t*Math.PI/180,o=e.radius??1;return lp(e.origin,lp(dp(r,o*Math.cos(a)),dp(i,o*Math.sin(a))))}function vp(e,t=1){return e.kind===`angle`?_p(e,e.value):lp(e.origin,dp(hp(e.dir),cp(e)*t))}function yp(e,t=1){if(e.kind===`angle`){let t=hp(pp(hp(e.dir),up(_p(e,e.value),e.origin)));return e.value<0?dp(t,-1):t}let n=dp(hp(e.dir),t);return e.value<0?dp(n,-1):n}function bp(e,t,n,r){let i=e.scale&&Math.abs(e.scale)>1e-9?e.scale:1;return gp(e,r((t-n)/i))}function xp(e,t){if(e.faces.length<2)return null;let[n,r]=e.faces,i=lp(n.inward,r.inward);if(mp(i)<.2)return{dir:n.inward,scale:1};let a=Math.acos(Math.max(-1,Math.min(1,fp(hp(n.inward),hp(r.inward)))))/2,o=t===`chamfer`?Math.cos(a):1/Math.max(1e-6,Math.sin(a))-1;return{dir:hp(i),scale:Math.max(.05,o)}}function Sp(e,t){let n=hp(e.dir),r=hp(e.from??[1,0,0]),i=pp(n,r),a=up(t,e.origin);return Math.atan2(fp(a,i),fp(a,r))*180/Math.PI}function Cp(e,t){return t+360*Math.round((e-t)/360)}function wp(e,t,n,r){return gp(e,r(Cp(n,Sp(e,t))))}function Tp(e,t,n){if(!e.flip||e.kind===`angle`)return!1;let r=n(1),i=n(-1);return r&&!i?!0:!r&&fp(hp(e.dir),hp(t))<-.35&&!i}var Ep=new WeakMap;function Dp(e,t){let n=Ep.get(e);n||Ep.set(e,n=new Map);let r=n.get(t);if(r)return r;let i=e.edgeInfo.find(e=>e.id===t);if(!i)return null;let a=-1,o=1/0;for(let n=0;n<e.edgeIds.length;n++){if(e.edgeIds[n]!==t)continue;let r=mp(up(dp(lp([e.edges[n*6],e.edges[n*6+1],e.edges[n*6+2]],[e.edges[n*6+3],e.edges[n*6+4],e.edges[n*6+5]]),.5),i.m));r<o&&(o=r,a=n)}let s=Math.max(1e-6,mp(up(e.bbox[1],e.bbox[0])))*1e-5+1e-7,c=dp(lp(e.bbox[0],e.bbox[1]),.5),l=hp(up(i.b,i.a)),u=()=>{let e=up(i.m,c),t=up(e,dp(l,mp(l)>.5?fp(e,l):0));return hp(mp(t)>1e-9?t:e)};if(a<0){let e={out:u(),faces:[]};return n.set(t,e),e}let d=[e.edges[a*6],e.edges[a*6+1],e.edges[a*6+2]],f=[e.edges[a*6+3],e.edges[a*6+4],e.edges[a*6+5]],p=hp(up(f,d)),m=t=>[e.positions[t*3],e.positions[t*3+1],e.positions[t*3+2]],h=(t,n)=>Math.abs(e.positions[t*3]-n[0])<s&&Math.abs(e.positions[t*3+1]-n[1])<s&&Math.abs(e.positions[t*3+2]-n[2])<s,g=[];for(let t=0;t<e.indices.length/3&&g.length<6;t++){let n=[e.indices[t*3],e.indices[t*3+1],e.indices[t*3+2]],r=n.find(e=>h(e,d)),i=n.find(e=>h(e,f));if(r==null||i==null)continue;let a=n.find(e=>e!==r&&e!==i),o=hp(lp([e.normals[r*3],e.normals[r*3+1],e.normals[r*3+2]],[e.normals[i*3],e.normals[i*3+1],e.normals[i*3+2]]));if(g.some(e=>fp(e.n,o)>.999))continue;let s=hp(pp(o,p));a!=null&&fp(up(m(a),d),s)<0&&(s=dp(s,-1)),g.push({n:o,inward:s})}let _;if(!g.length)_=u();else{let e=g.reduce((e,t)=>lp(e,t.n),[0,0,0]);_=mp(e)>1e-6?hp(e):g[0].n}let v={out:_,faces:g};return n.set(t,v),v}function Op(e,t,n){let r=null,i=1/0;for(let a of e){if(n.includes(a.id))continue;let e=fp(hp(a.n),hp(t))+(a.planar===!1?.5:0);(e<i-1e-6||Math.abs(e-i)<=1e-6&&r&&a.a>r.a)&&(i=e,r=a)}return r?{c:r.c,n:hp(r.n)}:null}function kp(e,t,n){let r=0,i=-1/0,a=hp(t);return e.forEach((e,t)=>{let o=+((n?-fp(hp(n[t]),a):0)>.05)+mp(pp(hp(e),a));o>i+1e-9&&(i=o,r=t)}),r}var Ap=new WeakMap;function jp(e,t){let n=Ap.get(e)??[];n.push(t),n.length>50&&n.shift(),Ap.set(e,n)}function Mp(e){let t=Ap.get(e);return t?.length?t.pop():null}var Np={line:`#f2c230`,lineDrag:`#e9a400`,shadow:`#1d2733`,rim:`#3a4049`,idle:{lit:`#ffe58a`,shade:`#e2aa12`},hover:{lit:`#ffd27a`,shade:`#ff9a2e`},drag:{lit:`#ffc070`,shade:`#f07c10`}},Pp={line:2,lineDone:3.2,halo:9,ext:80,base:3.5,rim:1.5,shadow:2},Fp={idle:1,hover:1.14,drag:1.2},Ip=[[0,0],[-2.8,0],[-2.8,17],[-9.5,15],[0,33]],Lp=[[0,-27],[-9,-11],[-2.7,-12.5],[-2.7,12.5],[-9,11],[0,27]],Rp=e=>e.map(([e,t])=>[-e,t]),zp=e=>[...Rp(e).slice(1,-1),...[...e].reverse()];function Bp(e,t){let n=e.length,r=0;for(let t=0;t<n;t++)r+=e[t][0]*e[(t+1)%n][1]-e[(t+1)%n][0]*e[t][1];let i=r>0?1:-1;return e.map((r,a)=>{let o=e[(a+n-1)%n],s=e[(a+1)%n],c=Vp([(r[1]-o[1])*i,-(r[0]-o[0])*i]),l=Vp([(s[1]-r[1])*i,-(s[0]-r[0])*i]),u=Vp([c[0]+l[0],c[1]+l[1]]),d=Math.max(.35,u[0]*c[0]+u[1]*c[1]);return[r[0]+u[0]*t/d,r[1]+u[1]*t/d]})}function Vp(e){let t=Math.hypot(e[0],e[1])||1;return[e[0]/t,e[1]/t]}function Hp(e){return new un(new nn(e.map(([e,t])=>new W(e,t))))}function Up(e,t=1){return new ct({color:e,opacity:t,depthTest:!1,depthWrite:!1,transparent:!0,side:2})}var Wp=class{cap;mesh;pos;col;constructor(e){this.cap=e;let t=new P;this.pos=new at(new Float32Array(e*2*3),3),this.col=new at(new Float32Array(e*2*4),4),this.pos.setUsage(Wt),this.col.setUsage(Wt),t.setAttribute(`position`,this.pos),t.setAttribute(`color`,this.col);let n=[];for(let t=0;t<e-1;t++)n.push(2*t,2*t+1,2*t+2,2*t+1,2*t+3,2*t+2);t.setIndex(n),this.mesh=new z(t,new ct({vertexColors:!0,transparent:!0,depthTest:!1,depthWrite:!1,side:2})),this.mesh.frustumCulled=!1}draw(e,t,n,r,i,a){let o=Math.min(e.length,this.cap),s=new y,c=new y;for(let l=0;l<o;l++){s.subVectors(e[Math.min(o-1,l+1)],e[Math.max(0,l-1)]),c.crossVectors(s,a),c.lengthSq()<1e-20?c.set(0,0,0):c.normalize().multiplyScalar(t[l]/2*i(e[l]));let u=e[l];this.pos.setXYZ(2*l,u.x-c.x,u.y-c.y,u.z-c.z),this.pos.setXYZ(2*l+1,u.x+c.x,u.y+c.y,u.z+c.z);for(let e of[2*l,2*l+1])this.col.setXYZW(e,n[l].r,n[l].g,n[l].b,r[l])}this.pos.needsUpdate=!0,this.col.needsUpdate=!0,this.mesh.geometry.setDrawRange(0,Math.max(0,o-1)*6),this.mesh.visible=o>1}},Gp=class{camera;group=new U;spec=null;side=1;state=`idle`;two=!1;arrow3=new U;lit;shade;parts;shadowGroup=new U;base;baseRim;halo=new Wp(130);track=new Wp(130);done=new Wp(130);constructor(e){this.camera=e,this.group.visible=!1,this.lit=Up(Np.idle.lit),this.shade=Up(Np.idle.shade);let t=Up(Np.rim),n=Up(Np.shadow,.28),r=e=>{let r=new U,i=zp(e),a=new z(Hp(Bp(i,Pp.rim)),t),o=new z(Hp(e),this.lit),s=new z(Hp(Rp(e)),this.shade);a.renderOrder=46,o.renderOrder=47,s.renderOrder=47,r.add(a,o,s);let c=new z(Hp(Bp(i,Pp.rim)),n);return c.renderOrder=45,{g:r,sh:c}},i=r(Ip),a=r(Lp);this.parts={one:i.g,two:a.g},i.sh.userData.kind=`one`,a.sh.userData.kind=`two`,this.shadowGroup.add(i.sh,a.sh),this.arrow3.add(i.g,a.g);let o=new Ft(1,16,10);this.base=new z(o,Up(`#ffffff`)),this.baseRim=new z(o,t),this.halo.mesh.renderOrder=40,this.track.mesh.renderOrder=41,this.done.mesh.renderOrder=42,this.baseRim.renderOrder=43,this.base.renderOrder=44;for(let e of[this.halo.mesh,this.track.mesh,this.done.mesh,this.baseRim,this.base,this.shadowGroup,this.arrow3])e.frustumCulled=!1,this.group.add(e);this.group.traverse(e=>e.frustumCulled=!1)}set(e,t=1,n=`idle`){this.spec=e,this.side=t,this.group.visible=!!e,this.two=!!e&&Kp(e),this.parts.one.visible=!this.two,this.parts.two.visible=this.two;for(let e of this.shadowGroup.children)e.visible=e.userData.kind===(this.two?`two`:`one`);n!==this.state&&(this.state=n,this.lit.color.set(Np[n].lit),this.shade.color.set(Np[n].shade))}get shown(){return this.spec}get shownSide(){return this.side}arrow(e){let t=this.spec;if(!t)return null;let n=new y(...vp(t,this.side)),r=new y(...yp(t,this.side)).normalize(),i=this.camera().getWorldDirection(new y),a=Math.max(.4,r.clone().cross(i).length()),o=Fp[this.state],s=e(n)*o,c=s/a,[l,u]=this.two?[-27,27]:[0,33];return{from:n.clone().addScaledVector(r,l*c),to:n.clone().addScaledVector(r,u*c),at:n,dir:r,along:c,px:s}}update(e){let t=this.spec;if(!t||!this.group.visible)return;let n=this.camera(),r=n.getWorldDirection(new y),i=this.arrow(e),a=i.dir.clone().cross(r);a.lengthSq()<1e-10&&(a=new y(1,0,0).cross(i.dir)),a.lengthSq()<1e-10&&(a=new y(0,1,0).cross(i.dir)),a.normalize();let o=a.clone().cross(i.dir).normalize(),s=new An().setFromRotationMatrix(new M().makeBasis(a,i.dir,o));this.arrow3.position.copy(i.at),this.arrow3.quaternion.copy(s),this.arrow3.scale.set(i.px,i.along,i.px);let c=new y(0,1,0).applyQuaternion(n.quaternion),l=new y(1,0,0).applyQuaternion(n.quaternion);this.shadowGroup.position.copy(i.at).addScaledVector(c,-Pp.shadow*i.px).addScaledVector(l,Pp.shadow*.7*i.px),this.shadowGroup.quaternion.copy(s),this.shadowGroup.scale.copy(this.arrow3.scale);let u=new y(...t.origin),d=e(u);this.base.position.copy(u),this.base.scale.setScalar(Pp.base*d),this.baseRim.position.copy(u),this.baseRim.scale.setScalar((Pp.base+Pp.rim)*d);let f=new H(Np.line),p=new H(this.state===`drag`?Np.lineDrag:Np.line),m=new H(Np.shadow),h,g,_;if(t.kind===`angle`)h=Yp(t,0,360),g=h.map(()=>.45),_=Yp(t,0,t.value);else{let e=new y(...t.dir).normalize().multiplyScalar(this.side),n=Pp.ext*d,r=t=>u.clone().addScaledVector(e,t),a=cp(t),o=Math.min(0,a),s=Math.max(0,a),c=this.two?27*i.along:0,l=(this.two?27:33)*i.along;h=[o-c-n,o-c-n*.45,o,s,s+l,s+l+n*.45,s+l+n].map(r),g=[0,.55,.9,.9,.9,.55,0],_=[u.clone(),r(a)]}let v=this.state===`drag`?1:.85;this.halo.draw(h,h.map(()=>Pp.halo),h.map(()=>m),g.map(e=>e*.2),e,r),this.track.draw(h,h.map(()=>Pp.line),h.map(()=>f),g,e,r),this.done.draw(_,_.map(()=>this.state===`drag`?Pp.lineDone:Pp.line+.6),_.map(()=>p),_.map(()=>v),e,r),this.onLayout?.()}onLayout=null;hit(e,t,n,r){let i=this.arrow(n);if(!i||!this.group.visible)return!1;let[a,o]=r(i.from.toArray()),[s,c]=r(i.to.toArray());return qp(e,t,a,o,s,c)<=12}dispose(){let e=new Set;this.group.traverse(t=>{let n=t;for(let t of[n.geometry,n.material])t&&!e.has(t)&&(e.add(t),t.dispose())}),this.group.clear()}};function Kp(e){return(e.min??-1/0)<0&&(e.max??1/0)>0}function qp(e,t,n,r,i,a){let o=i-n,s=a-r,c=o*o+s*s,l=c>1e-9?Math.max(0,Math.min(1,((e-n)*o+(t-r)*s)/c)):0;return Math.hypot(e-(n+o*l),t-(r+s*l))}function Jp(e,t,n,r,i=10,a=10){let o=(e[0]+t[0])/2,s=(e[1]+t[1])/2,c=t[0]-e[0],l=t[1]-e[1],u=Math.hypot(c,l);u<1e-6?(c=1,l=0):(c/=u,l/=u);let d=-l,f=c;(f>0||Math.abs(f)<1e-6&&d<0)&&(d=-d,f=-f);let p=Math.abs(d)*n[0]+Math.abs(f)*n[1]+a+i,m=o+d*p,h=s+f*p;return m=Math.min(r[0]-n[0]-4,Math.max(n[0]+4,m)),h=Math.min(r[1]-n[1]-4,Math.max(n[1]+4,h)),[m,h]}function Yp(e,t,n){let r=Math.min(128,Math.max(2,Math.ceil(Math.abs(n-t)/4))),i=[];for(let a=0;a<=r;a++)i.push(new y(..._p(e,t+(n-t)*a/r)));return i}function Xp(e){let t=(t,n)=>{let r=t*374761393+n*668265263+e*2147483647|0;return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967295};return(e,n,r,i=r)=>{let a=Math.floor(e),o=Math.floor(n),s=e-a,c=n-o,l=s*s*(3-2*s),u=c*c*(3-2*c),d=e=>(e%r+r)%r,f=e=>(e%i+i)%i,p=t(d(a),f(o)),m=t(d(a+1),f(o)),h=t(d(a),f(o+1)),g=t(d(a+1),f(o+1));return p+(m-p)*l+(h-p)*u+(p-m-h+g)*l*u}}function Zp(e,t){let n=new Uint8Array(t*t),r=Xp(e.length*31+7),i=Xp(e.length*17+3);for(let a=0;a<t;a++)for(let o=0;o<t;o++){let s=o/t,c=a/t,l=1;switch(e){case`woodFine`:case`woodStrong`:{let t=e===`woodStrong`,n=t?9:14,a=r(s*4,c*3,4,3)*1.6+i(s*16,c*8,16,8)*.25,o=(c*n+a)%1,u=Math.abs(Math.sin(o*Math.PI))**(t?6:10),d=r(s*128,c*6,128,6)*.5+i(s*4,c*96,4,96)*.5;l=1-u*(t?.42:.24)-(d-.5)*(t?.14:.08);break}case`brushed`:l=.72+(r(s*3,c*t*.5,3,t*.5)*.6+i(s*8,c*t*.25,8,t*.25)*.4)*.28;break;case`carbon`:{let e=Math.floor(s*16),t=Math.floor(c*16),n=s*16-e,r=c*16-t,i=(e+t>>1)%2==0,a=Math.sin((i?r:n)*Math.PI),o=.85+.15*Math.sin((i?n:r)*Math.PI*12);l=.18+.82*a*a*o*(i?1:.7);break}case`frost`:l=.55+.45*(r(s*64,c*64,64)*.6+i(s*192,c*192,192)*.4);break;case`grain`:l=.5+.5*(r(s*96,c*96,96)*.5+i(s*256,c*256,256)*.5)}n[a*t+o]=Math.max(0,Math.min(255,Math.round(l*255)))}return n}var Qp=()=>typeof window<`u`&&`__TAURI_INTERNALS__`in window;function $p(){return Qp()?{texSize:512,transmission:!0}:{texSize:256,transmission:!1}}var em=null;function tm(e){em=e}var nm=()=>em,rm=new Map;function im(e,t=$p().texSize){let n=`${e}:${t}`,r=rm.get(n);if(r)return r;let i=Zp(e,t),a=new Uint8Array(t*t*4);for(let e=0;e<i.length;e++)a[e*4]=a[e*4+1]=a[e*4+2]=i[e],a[e*4+3]=255;return r=new nr(a,t,t,fn),r.wrapS=r.wrapT=on,r.magFilter=Fe,r.minFilter=D,r.generateMipmaps=!0,r.anisotropy=4,r.needsUpdate=!0,rm.set(n,r),r}function am(){for(let e of rm.values())e.dispose();rm.clear()}function om(e){if(e.getAttribute(`uv`))return;let t=e.getAttribute(`position`),n=e.getAttribute(`normal`);if(!t||!n||!t.count)return;e.boundingBox||e.computeBoundingBox();let r=e.boundingBox.getSize(new y),i=Math.min(3e3,Math.max(20,Math.max(r.x,r.y,r.z)*.7)),a=new Float32Array(t.count*2);for(let e=0;e<t.count;e++){let r=Math.abs(n.getX(e)),o=Math.abs(n.getY(e)),s=Math.abs(n.getZ(e)),c=t.getX(e)/i,l=t.getY(e)/i,u=t.getZ(e)/i;s>=r&&s>=o?(a[e*2]=c,a[e*2+1]=l):o>=r?(a[e*2]=c,a[e*2+1]=u):(a[e*2]=l,a[e*2+1]=u)}e.setAttribute(`uv`,new at(a,2))}function sm(e){let t=e;return!!(t.map||t.bumpMap||t.roughnessMap)}var cm=new H(1,1,1);function lm(e,t,n,r,i=!1,a=!0){let o=L(t),s=$p();e.color.set(n),e.roughness=o.roughness,e.metalness=o.metalness,e.envMapIntensity=o.env??.6;let c=a&&o.tex?im(o.tex,s.texSize):null,l=o.tex,u=c&&(l===`woodFine`||l===`woodStrong`||l===`carbon`||l===`brushed`)?c:null,d=c&&l!==`brushed`?c:null,f=c&&(l===`brushed`||l===`frost`)?c:null;(e.map!==u||e.bumpMap!==d||e.roughnessMap!==f)&&(e.map=u,e.bumpMap=d,e.roughnessMap=f,e.needsUpdate=!0),e.bumpScale=l===`carbon`?1.2:l===`frost`?.6:l===`grain`?.25:.5;let p=e.isMeshPhysicalMaterial?e:null,m=r||i,h=!!o.transmission,g=h&&!!p&&s.transmission&&!m;p&&(p.clearcoat=o.clearcoat??0,p.clearcoatRoughness=o.clearcoatRoughness??0,p.sheen=o.sheen??0,p.sheenRoughness=o.sheenRoughness??1,p.sheen&&p.sheenColor.set(n).lerp(cm,.5),p.anisotropy=a?o.anisotropy??0:0,p.specularIntensity=o.specularIntensity??1,p.ior=o.ior??1.5,p.transmission=g?o.transmission??0:0,p.thickness=g?o.thickness??0:0,g&&p.attenuationColor.set(n));let _=h&&!g?o.opacity??.35:1,v=r?Math.min(_,.18):i?Math.min(_,.32):_;e.transparent=v<1||g,e.opacity=v,e.depthWrite=v>=1&&!g}function um(e){let t=new Ta(e),n=new Mn,r=new Ft(10,32,16),i=new ct({side:1,vertexColors:!0}),a=[],o=r.attributes.position,s=new H(`#7a7f87`),c=new H(`#b9bec5`),l=new H(`#ffffff`);for(let e=0;e<o.count;e++){let t=o.getY(e)/10,n=t<0?new H().lerpColors(c,s,Math.min(1,-t*2.5)):new H().lerpColors(c,l,Math.min(1,t*1.6));a.push(n.r,n.g,n.b)}r.setAttribute(`color`,new Gn(a,3)),n.add(new z(r,i));let u=new Bt(1,1),d=[[0,7,3,7,1.6,3.2],[-7,3,-4,2.2,4.5,2.2],[7,2,2,1.4,5,1.8],[2,4,-7,5,1.2,1.6]],f=[];for(let[e,t,r,i,a,o]of d){let s=new ct({color:new H(o,o,o),side:2});f.push(s);let c=new z(u,s);c.position.set(e,t,r),c.scale.set(i,a,1),c.lookAt(0,0,0),n.add(c)}n.rotation.x=Math.PI/2,n.updateMatrixWorld(!0);let p=t.fromScene(n,.02).texture;t.dispose(),r.dispose(),i.dispose(),u.dispose();for(let e of f)e.dispose();return p}var dm=5e3,fm=100,pm=48;function mm(e,t=0){let n=Math.log(1+e/100)/-Math.log(.95)/(fm*.01);return t===1?n*fm/pm:n}function hm(e,t){return e/Math.max(t,1e-9)*100}function gm(e,t){return e*100/Math.max(t,1e-9)}function _m(e,t,n){return e/gm(t,n)}function vm(e,t,n){return gm(e,t)/(2*Math.tan(h.degToRad(n)/2))}function ym(e){return 5*(dm/5)**Math.min(1,Math.max(0,e))}function bm(e){return Math.log(Math.min(dm,Math.max(5,e))/5)/Math.log(dm/5)}function xm(e){return e<9.95?e.toFixed(1):String(Math.round(e))}var Sm=h.degToRad(89.5),Cm=new y(0,0,1);function wm(e){let t=e.length()||1;return Math.asin(Math.min(1,Math.max(-1,-e.z/t)))}function Tm(e,t,n=Sm){let r=e+t;return t>0?Math.min(r,Math.max(e,n)):t<0?Math.max(r,Math.min(e,-n)):e}function Em(e,t,n,r,i=Sm){let a=new An().setFromAxisAngle(Cm,n),o=e.position.clone().sub(t).applyQuaternion(a).add(t),s=e.target.clone().sub(t).applyQuaternion(a).add(t),c=e.up.clone().applyQuaternion(a),l=s.clone().sub(o);if(l.lengthSq()<1e-18)return{position:o,target:s,up:c};l.normalize();let u=l.clone().cross(Cm);u.lengthSq()<1e-8&&u.copy(l).cross(c).setZ(0),u.lengthSq()<1e-12&&u.set(1,0,0),u.normalize();let d=wm(l),f=Tm(d,r,i)-d,p=new An().setFromAxisAngle(u,-f);o.sub(t).applyQuaternion(p).add(t),s.sub(t).applyQuaternion(p).add(t),c.applyQuaternion(p);let m=s.clone().sub(o).normalize();return Math.abs(m.z)<=Math.sin(i)+1e-9?c.copy(Cm):(c.addScaledVector(m,-c.dot(m)),c.lengthSq()<1e-12&&c.copy(u).cross(m),c.normalize()),{position:o,target:s,up:c}}var Dm=14,Om=10;function km(e,t,n){return{left:e===`tl`&&!t?30:0,right:e===`tr`&&!n?30:0}}function Am(e,t,n,r={left:0,right:0},i=112){return{x:e[1]===`r`?t-i-Dm-r.right:Dm+r.left,y:e[0]===`t`?Om:n-i-Om,s:i}}function jm(e,t,n,r){return`${t<r/2?`t`:`b`}${e<n/2?`l`:`r`}`}var Mm=10;function Nm(e,t,n,r,i,a){for(;i>r;){let o=t[e[r]*3+n],s=t[e[r+i>>1]*3+n],c=t[e[i]*3+n],l=o<s?s<c?s:o<c?c:o:o<c?o:s<c?c:s,u=r,d=i;for(;u<=d;){for(;t[e[u]*3+n]<l;)u++;for(;t[e[d]*3+n]>l;)d--;if(u<=d){let t=e[u];e[u]=e[d],e[d]=t,u++,d--}}if(a<=d)i=d;else if(a>=u)r=u;else return}}function Pm(e,t,n){let r=new Uint32Array(e);for(let t=0;t<e;t++)r[t]=t;if(!e)return{box:new Float32Array,meta:new Uint32Array,order:r,eps:0};let i=Math.ceil(e/5)*2+1,a=new Float32Array(i*6),o=new Uint32Array(i*2),s=0,c=new Float64Array(6),l=(e,u)=>{if(s>=i){i*=2;let e=new Float32Array(i*6);e.set(a),a=e;let t=new Uint32Array(i*2);t.set(o),o=t}let d=s++,f=u-e;if(f<=Mm){c.fill(1/0,0,3),c.fill(-1/0,3,6);for(let t=e;t<u;t++)n(r[t],c);for(let e=0;e<6;e++)a[d*6+e]=c[e];return o[d*2]=e,o[d*2+1]=f,d}let p=1/0,m=1/0,h=1/0,g=-1/0,_=-1/0,v=-1/0;for(let n=e;n<u;n++){let e=r[n]*3,i=t[e],a=t[e+1],o=t[e+2];i<p&&(p=i),i>g&&(g=i),a<m&&(m=a),a>_&&(_=a),o<h&&(h=o),o>v&&(v=o)}let y=g-p,b=_-m,x=v-h,S=y>=b&&y>=x?0:b>=x?1:2,C=e+u>>1;Nm(r,t,S,e,u-1,C),l(e,C);let w=l(C,u);o[d*2]=w,o[d*2+1]=0;let T=d+1;for(let e=0;e<3;e++)a[d*6+e]=Math.min(a[T*6+e],a[w*6+e]),a[d*6+3+e]=Math.max(a[T*6+3+e],a[w*6+3+e]);return d};l(0,e);let u=Math.max(a[3]-a[0],a[4]-a[1],a[5]-a[2],0);return{box:a.slice(0,s*6),meta:o.slice(0,s*2),order:r,eps:u*1e-6+1e-9}}function Fm(e,t){let n=Math.floor(t.length/3),r=new Float32Array(n*3);for(let i=0;i<n;i++){let n=t[i*3]*3,a=t[i*3+1]*3,o=t[i*3+2]*3;r[i*3]=(e[n]+e[a]+e[o])/3,r[i*3+1]=(e[n+1]+e[a+1]+e[o+1])/3,r[i*3+2]=(e[n+2]+e[a+2]+e[o+2])/3}return Pm(n,r,(n,r)=>{for(let i=0;i<3;i++){let a=t[n*3+i]*3;for(let t=0;t<3;t++){let n=e[a+t];n<r[t]&&(r[t]=n),n>r[3+t]&&(r[3+t]=n)}}})}function Im(e){let t=Math.floor(e.length/6),n=new Float32Array(t*3);for(let r=0;r<t;r++)for(let t=0;t<3;t++)n[r*3+t]=(e[r*6+t]+e[r*6+3+t])/2;return Pm(t,n,(t,n)=>{for(let r=0;r<2;r++)for(let i=0;i<3;i++){let a=e[t*6+r*3+i];a<n[i]&&(n[i]=a),a>n[3+i]&&(n[3+i]=a)}})}function Lm(e,t,n,r,i,a,o){let s=t*6,{x:c,y:l,z:u}=n.origin,d,f;r>=0?(d=(e[s]-o-c)*r,f=(e[s+3]+o-c)*r):(d=(e[s+3]+o-c)*r,f=(e[s]-o-c)*r);let p,m;return i>=0?(p=(e[s+1]-o-l)*i,m=(e[s+4]+o-l)*i):(p=(e[s+4]+o-l)*i,m=(e[s+1]-o-l)*i),d>m||p>f||((p>d||d!==d)&&(d=p),(m<f||f!==f)&&(f=m),a>=0?(p=(e[s+2]-o-u)*a,m=(e[s+5]+o-u)*a):(p=(e[s+5]+o-u)*a,m=(e[s+2]-o-u)*a),d>m||p>f)||((p>d||d!==d)&&(d=p),(m<f||f!==f)&&(f=m),f<0)?1/0:d>0?d:0}function Rm(e,t,n,r,i){let{box:a,meta:o,order:s}=e;if(!o.length)return;let c=1/t.direction.x,l=1/t.direction.y,u=1/t.direction.z,d=e.eps+n,f=r,p=[0],m=[Lm(a,0,t,c,l,u,d)];for(;p.length;){let e=p.pop(),n=m.pop();if(n===1/0||n>f)continue;let r=o[e*2+1];if(r){let t=o[e*2];for(let e=t;e<t+r;e++)f=i(s[e],f);continue}let h=e+1,g=o[e*2],_=Lm(a,h,t,c,l,u,d),v=Lm(a,g,t,c,l,u,d),y=_<=v?h:g,b=y===h?g:h,x=Math.min(_,v),S=Math.max(_,v);S<1/0&&S<=f&&(p.push(b),m.push(S)),x<1/0&&x<=f&&(p.push(y),m.push(x))}}var zm=new y,Bm=new y,Vm=new y,Hm=new y,Um=new y;function Wm(e,t,n,r,i=0){let a=-1,o=new y;return Rm(e,r,0,1/0,(e,s)=>{let c=n[e*3]*3,l=n[e*3+1]*3,u=n[e*3+2]*3;if(zm.set(t[c],t[c+1],t[c+2]),Bm.set(t[l],t[l+1],t[l+2]),Vm.set(t[u],t[u+1],t[u+2]),!(i===1?r.intersectTriangle(Vm,Bm,zm,!0,Hm):r.intersectTriangle(zm,Bm,Vm,i===0,Hm)))return s;let d=r.origin.distanceTo(Hm);return d<s||d===s&&e<a?(a=e,o.copy(Hm),d):s}),a<0?null:{index:a,distance:r.origin.distanceTo(o),point:o}}function Gm(e,t,n,r,i=1/0){let a=-1,o=1/0,s=new y,c=r*r;return Rm(e,n,r,i,(e,r)=>{let l=e*6;if(zm.set(t[l],t[l+1],t[l+2]),Bm.set(t[l+3],t[l+4],t[l+5]),n.distanceSqToSegment(zm,Bm,Um,Hm)>c)return r;let u=n.origin.distanceTo(Um);return u>i?r:u<o||u===o&&e<a?(a=e,o=u,s.copy(Hm),u):r}),a<0?null:{index:a,distance:o,point:s}}var Km=new WeakMap;function qm(e){let t=Km.get(e);return t||Km.set(e,t={}),t.tris??=Fm(e.positions,e.indices)}function Jm(e){let t=Km.get(e);return t||Km.set(e,t={}),t.segs??=Im(e.edges)}var Ym=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Xm=e=>Math.hypot(e[0],e[1],e[2]);function Zm(e,t){let n=Xm(t.n);if(!(n>0)||!Number.isFinite(t.a))return null;let r=[t.n[0]/n,t.n[1]/n,t.n[2]/n],i=Math.max(1,Math.sqrt(Math.max(0,t.a))),a=null,o=1/0;for(let n of e){let e=Xm(n.n)||1,s=Ym(n.n,r)/e;if(s<(n.planar?.95:.7))continue;let c=[n.c[0]-t.c[0],n.c[1]-t.c[1],n.c[2]-t.c[2]],l=Xm(c)/i;if(l>1)continue;let u=n.planar?2*Math.abs(Ym(c,r))/i:0,d=Math.abs(n.a-t.a)/Math.max(n.a,t.a,1e-9),f=l+(1-s)*4+u+d;f<o&&(o=f,a=n.id)}return a}function Qm(e,t){let n=new Map;for(let r of t??[]){let t=Zm(e,r.face);t!=null&&n.set(t,r.color)}return n}function $m(e,t,n,r){let i=t.find(e=>e.id===n);if(!i)return e;let a=e??[],o=a.filter(e=>Zm(t,e.face)!==n);if(r==null&&o.length===a.length||r!=null&&o.length===a.length-1&&a.some(e=>e.color===r&&Zm(t,e.face)===n))return e;let s=r==null?o:[...o,{face:{c:[...i.c],n:[...i.n],a:i.a},color:r}];return s.length?s:void 0}var eh=`facePaint`;function th(e){let t=e.userData[eh];t&&(t.obj&&(e.remove(t.obj),t.obj.traverse(e=>{let t=e;if(t.isMesh){t.geometry.dispose();for(let e of Array.isArray(t.material)?t.material:[t.material])e.dispose()}})),delete e.userData[eh])}function nh(e,t,n,r,i,a){try{let o=e.userData[eh],s=`${r.material}|${i}|${a}`;if(!n||!r.faceColors?.length)return th(e);if(o&&o.data===n&&o.paints===r.faceColors&&o.look===s){o.obj&&(o.obj.visible=t.visible);return}th(e);let c={data:n,paints:r.faceColors,look:s,obj:null};e.userData[eh]=c;let l=Qm(n.faces,r.faceColors);if(!l.size)return;let u=new Map;for(let e=0;e<n.faceIds.length;e++){let t=l.get(n.faceIds[e]);if(!t)continue;let r=u.get(t);r||u.set(t,r=[]),r.push(n.indices[e*3],n.indices[e*3+1],n.indices[e*3+2])}let d=new U,f=new P;f.setAttribute(`position`,new at(n.positions,3)),f.setAttribute(`normal`,new at(n.normals,3));let p=[],m=[];for(let[e,t]of u){f.addGroup(p.length,t.length,m.length);for(let e of t)p.push(e);let n=new mt({envMapIntensity:.6});lm(n,r.material,e,i,a,!1),m.push(n)}f.setIndex(p);let h=new z(f,m);h.renderOrder=-1,h.raycast=()=>{},h.onBeforeRender=()=>{let e=t.material;for(let t of m)t.clippingPlanes=e.clippingPlanes,t.side!==e.side&&(t.side=e.side,t.needsUpdate=!0),t.emissive.copy(e.emissive),t.emissiveIntensity=e.emissiveIntensity},d.add(h),d.visible=t.visible,e.add(d),c.obj=d}catch(e){console.error(`[facePaint] draw failed`,e)}}var rh=6,ih=/if \( mod\( vLineDistance \+ dashOffset, dashSize \+ gapSize \) > dashSize \) discard;[^\n]*/,ah=`{
  float nkT = mod( vLineDistance + dashOffset, nkPeriod );
  float nkAcc = 0.0;
  for ( int i = 0; i < ${rh}; i ++ ) {
    nkAcc += nkPattern[ i ];
    if ( nkT < nkAcc ) {
      if ( mod( float( i ), 2.0 ) > 0.5 ) discard;
      break;
    }
  }
}`;function oh(e){return!ih.test(e)||!e.includes(`uniform float dashOffset;`)?null:e.replace(`uniform float dashOffset;`,`uniform float dashOffset;\nuniform float nkPattern[ ${rh} ];\nuniform float nkPeriod;`).replace(ih,ah)}var sh=e=>`nkPeriod`in e.uniforms;function ch(e,t,n,r){let i=new Ef({color:new H(e).getHex(),linewidth:t});if(i.resolution.copy(r),n.length>=2){let e=new Float32Array(rh);n.slice(0,rh).forEach((t,n)=>e[n]=t),i.dashed=!0,i.dashSize=n[0],i.gapSize=n[1],i.uniforms.nkPattern={value:e},i.uniforms.nkPeriod={value:e.reduce((e,t)=>e+t,0)},i.onBeforeCompile=e=>{e.fragmentShader=oh(e.fragmentShader)??e.fragmentShader},i.customProgramCacheKey=()=>`nk-line-pattern`}return i}function lh(e){let t=[];for(let n of e)for(let e=0;e<n.length-1;e++)t.push(n[e][0],n[e][1],0,n[e+1][0],n[e+1][1],0);return t}function uh(e,t,n,r){let i=[],a=new Map;for(let r of e){let e=ut(r.style,t);if(ee(e)){i.push(...n(r));continue}let o=_t(e.weight),s=e.type===`continuous`?void 0:e.type,c=`${e.color??``}|${o}|${s??``}`,l=a.get(c);l||a.set(c,l={color:e.color,width:o,type:s,lines:[]}),l.lines.push(...n(r))}let o=new U;for(let e of a.values()){let t=lh(e.lines);if(!t.length)continue;let n=ch(e.color??`#000000`,e.width,Ct(e.type,e.width),r),i=new sp(new Hf().setPositions(t),n);n.dashed&&i.computeLineDistances(),i.userData.color=e.color,o.add(i)}return{plain:i,group:o}}function dh(e,t,n,r,i,a){for(let o of e.children){let e=o,s=e.userData.color;e.material.color.set(n??(s?rt(s,r):t)),e.material.depthTest=i,e.renderOrder=a}}function fh(e,t){e.traverse(e=>{let n=e.material;n instanceof Ef&&(t.delete(n),n.dispose()),e.geometry?.dispose()}),e.removeFromParent()}function ph(e){let t=[];return e.traverse(e=>{let n=e.material;n instanceof Ef&&t.push(n)}),t}var mh=[1,2,5,10,20];function hh(e){let t=e/1e3;return t<=15?1:t<=35?2:t<=90?5:t<=180?10:20}var gh={min:10,max:100,def:70},_h=[217,199,166],vh=[58,28,4];function yh(e){let t=((Number.isFinite(e)?Math.min(gh.max,Math.max(gh.min,e)):gh.def)-gh.min)/(gh.max-gh.min);return`#${_h.map((e,n)=>Math.round(e+(vh[n]-e)*t).toString(16).padStart(2,`0`)).join(``)}`}var bh=yh(gh.max),xh=[bh,`#8a5a2b`,`#000000`,`#ffffff`,`#d62828`,`#f07b1d`,`#1d5fbf`,`#2e9d57`];function Sh(e){return typeof e==`string`&&/^#[0-9a-f]{6}$/i.test(e)?e.toLowerCase():bh}function Ch(e,t,n,r,i,a,o,s=0,c=400){let l={minor:[],major:[]};if(t<2||n<2||!(a>0))return l;let u=1/0,d=-1/0;for(let r=0;r<t*n;r++)e[r]<u&&(u=e[r]),e[r]>d&&(d=e[r]);let f=Math.ceil((u+o)/a),p=Math.floor((d+o)/a);if(p<f||p-f>c)return l;let m=r/(t-1),h=i/(n-1),g=e=>-r/2+e*m,_=e=>-i/2+e*h;for(let r=f;r<=p;r++){let i=r*a-o,c=r%5==0?l.major:l.minor,u=i+s;for(let r=0;r+1<n;r++)for(let n=0;n+1<t;n++){let a=r*t+n,o=e[a],s=e[a+1],l=e[a+t+1],d=e[a+t],f=o>i|(s>i?2:0)|(l>i?4:0)|(d>i?8:0);if(f===0||f===15)continue;let p=g(n),v=g(n+1),y=_(r),b=_(r+1),x=()=>[p+(i-o)/(s-o)*m,y],S=()=>[v,y+(i-s)/(l-s)*h],C=()=>[p+(i-d)/(l-d)*m,b],w=()=>[p,y+(i-o)/(d-o)*h],T=(e,t)=>c.push(e[0],e[1],u,t[0],t[1],u);switch(f){case 1:case 14:T(x(),w());break;case 2:case 13:T(x(),S());break;case 3:case 12:T(w(),S());break;case 4:case 11:T(S(),C());break;case 6:case 9:T(x(),C());break;case 7:case 8:T(w(),C());break;case 5:case 10:{let e=(o+s+l+d)/4>i;f===5===e?(T(x(),S()),T(w(),C())):(T(x(),w()),T(S(),C()));break}}}}return l}var wh=[`#2e9d57`,`#1f6fd1`,`#c2185b`,`#7b4fd6`,`#00897b`,`#8d5524`,`#6f7d0f`,`#0097a7`],Th=`#f07b1d`,Eh=`#d6eef7`,Dh=`#8fd2ea`,Oh=`#5bbde0`;function kh(e,t){if(t.kind!==`site`)return Th;let n=e.filter(e=>e.kind===`site`).findIndex(e=>e.id===t.id);return wh[Math.max(0,n)%wh.length]}function Ah(e){let t=Qn(e);return[Math.round(t[0]/10)*10,Math.round(t[1]/10)*10]}function jh(e){let t=1/0,n=1/0,r=-1/0,i=-1/0;for(let a of e)t=Math.min(t,a[0]),n=Math.min(n,a[1]),r=Math.max(r,a[0]),i=Math.max(i,a[1]);return e.length?[t,n,r,i]:[0,0,0,0]}function Mh(e,t,n=60){let[r,i,a,o]=jh(e),s=Math.max(a-r,o-i),c=t>0&&Number.isFinite(t)?t:1e3;for(let e of[1,2,5,10,20,50,100,200,500,1e3])if(s/(c*e)<=n)return c*e;return c*1e3}function Nh(e,t,n){return n>0?[t[0]+Math.round((e[0]-t[0])/n)*n,t[1]+Math.round((e[1]-t[1])/n)*n]:e}function Ph(e,t,n){let r=1-t,i=[];for(let a=0;a<e.length;a++){let o=e[a],s=e[(a+1)%e.length];o[t]>n!=s[t]>n&&i.push(o[r]+(n-o[t])*(s[r]-o[r])/(s[t]-o[t]))}i.sort((e,t)=>e-t);let a=[];for(let e=0;e+1<i.length;e+=2)i[e+1]>i[e]&&a.push([i[e],i[e+1]]);return a}function Fh(e,t,n,r=5){let i={minor:[],major:[]};if(e.length<3||!(n>0))return i;let a=Math.max(1,Math.round(r)),[o,s,c,l]=jh(e);if((c-o)/n>2e3||(l-s)/n>2e3)return i;for(let r of[0,1]){let u=r===0?o:s,d=r===0?c:l;for(let o=Math.ceil((u-t[r])/n);o<=Math.floor((d-t[r])/n);o++){let s=t[r]+o*n,c=o%a===0?i.major:i.minor;for(let[t,n]of Ph(e,r,s))c.push(r===0?[[s,t],[s,n]]:[[t,s],[n,s]])}}return i}function Ih(e,t,n){let r=t*4,i=new Uint8Array(r*n);for(let t=0;t<n;t++)i.set(e.subarray(t*r,(t+1)*r),(n-1-t)*r);return i}function Lh(e){let t=e.width,n=e.height,r=null;try{r=t>0&&n>0?e.getContext(`2d`)?.getImageData(0,0,t,n).data??null:null}catch{r=null}if(!r)return new ft(e);let i=new nr(Ih(r,t,n),t,n,fn,Cn);return i.magFilter=Fe,i.minFilter=D,i.generateMipmaps=!0,i.needsUpdate=!0,i}var Rh=`#cbc4ab`,zh=`#3a8bd6`,Bh=`#4b3a27`,Vh=`#6a5a49`,Hh=[[.12,`#86664a`],[.1,`#a8834f`],[.14,`#c2a273`],[.08,`#93604a`],[.12,`#cbb489`],[.16,`#8b7a64`],[.28,`#776d63`]],Uh=new y(-1,1,Math.SQRT2).normalize(),Wh={polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:2};function Gh(e,t,n,r,i,a,o){let s=Math.min(t-1,Math.max(0,(a+r/2)/r*(t-1))),c=Math.min(n-1,Math.max(0,(o+i/2)/i*(n-1))),l=Math.min(t-2,Math.floor(s)),u=Math.min(n-2,Math.floor(c)),d=s-l,f=c-u,p=u*t+l,m=e[p],h=e[p+1],g=e[p+t+1],_=e[p+t];return d>=f?m+(h-m)*d+(g-h)*f:m+(g-_)*d+(_-m)*f}var Kh=e=>Math.min(3e3,Math.max(300,e*.04));function qh(e,t,n,r,i,a,o){let s=[];for(let e=0;e<t-1;e++)s.push(e);for(let e=0;e<n-1;e++)s.push(e*t+t-1);for(let e=t-1;e>0;e--)s.push((n-1)*t+e);for(let e=n-1;e>0;e--)s.push(e*t);let c=e=>-r/2+e%t*r/(t-1),l=e=>-i/2+Math.floor(e/t)*i/(n-1),u=Kh(o-a),d=Math.max(1,o-a),f=[],p=[],m=[],h=[],g=[],_=(e,t,n,r)=>(f.push(e,t,n),p.push(r,r,r),m.push(.5,(n-a)/d),f.length/3-1),v=Math.hypot(Uh.x,Uh.y);for(let t=0;t<s.length;t++){let n=s[t],r=s[(t+1)%s.length],i=c(n),o=l(n),d=c(r),f=l(r),p=Math.hypot(d-i,f-o)||1,m=.8+.2*((f-o)/p*(Uh.x/v)+-(d-i)/p*(Uh.y/v)),y=e[n],b=e[r],x=Math.max(a,y-u),S=Math.max(a,b-u),C=_(i,o,x,m),w=_(d,f,S,m),T=_(d,f,b,m),E=_(i,o,y,m);h.push(C,w,T,C,T,E);let D=_(i,o,a,m),O=_(d,f,a,m),k=_(d,f,S,m),A=_(i,o,x,m);g.push(D,O,k,D,k,A)}let y=_(-r/2,-i/2,a,.85),b=_(-r/2,i/2,a,.85),x=_(r/2,i/2,a,.85),S=_(r/2,-i/2,a,.85),C=[...h,...g,y,b,x,y,x,S],w=new P;return w.setAttribute(`position`,new Gn(f,3)),w.setAttribute(`color`,new Gn(p,3)),w.setAttribute(`uv`,new Gn(m,2)),w.setIndex(C),w.addGroup(0,h.length,0),w.addGroup(h.length,g.length,1),w.addGroup(h.length+g.length,6,2),w.computeBoundingSphere(),w}function Jh(){let e=document.createElement(`canvas`);e.width=2,e.height=1024;let t=e.getContext(`2d`),n=0;for(let[r,i]of Hh){let a=Math.round(r*e.height);t.fillStyle=i,t.fillRect(0,n,e.width,a+1),n+=a}let r=Lh(e);return r.colorSpace=dr,r}function Yh(e,t){e.traverse(e=>{let n=e;n.geometry?.dispose();let r=Array.isArray(n.material)?n.material:n.material?[n.material]:[];for(let e of r){e instanceof Ef&&t?.delete(e);for(let t of Object.values(e))t instanceof S&&t.dispose();e.dispose()}}),e.clear()}function Xh(e,t){let n=t<.999;e.transparent!==n&&(e.transparent=n,e.needsUpdate=!0),e.opacity=n?t:1,e.depthWrite=!n}var Zh=class{changed;anisotropy;root=new U;geo=null;mesh=null;block=null;depthPass=[];depthMat=null;strata=null;overlay=null;lines=new U;contours=new U;water=new U;gridKey=``;heights=null;blockKey=[];image=``;opacity=1;overlayKey=[];linesKey=[];contourKey=[];contourLook=``;waterKey=``;box=null;disposed=!1;constructor(e,t){this.changed=e,this.anisotropy=t,this.root.add(this.lines,this.contours,this.water)}bounds(){return this.mesh?this.box:null}update(e,t){let n=e?.terrain,r=e&&n?Ke(e):null;if(this.waterPlane(e,!!r),!e||!n||!r){this.mesh&&this.clear(t.fat);return}let{nx:i,ny:a}=n,o=`${i}:${a}:${e.w}:${e.h}`;o!==this.gridKey&&(this.clear(t.fat),this.gridKey=o,this.build(i,a)),r!==this.heights&&(this.heights=r,this.shape(e,r,i,a)),this.soilBlock(e,r,i,a),this.photo(t.image),this.see(t.opacity),this.paintAreas(e,t.picked,t.editing??null),this.outline(e,r,t),this.contourLines(e,r,t)}build(e,t){let n=new P,r=e*t;n.setAttribute(`position`,new at(new Float32Array(r*3),3)),n.setAttribute(`color`,new at(new Float32Array(r*3),3));let i=new Float32Array(r*2);for(let n=0;n<t;n++)for(let r=0;r<e;r++){let a=n*e+r;i[a*2]=r/(e-1),i[a*2+1]=n/(t-1)}n.setAttribute(`uv`,new at(i,2));let a=new Uint32Array((e-1)*(t-1)*6),o=0;for(let n=0;n+1<t;n++)for(let t=0;t+1<e;t++){let r=n*e+t;a.set([r,r+1,r+e+1,r,r+e+1,r+e],o),o+=6}n.setIndex(new at(a,1)),this.geo=n;let s=new ct({color:Rh,vertexColors:!0,...Wh});this.mesh=new z(n,s),this.mesh.renderOrder=-1,this.mesh.raycast=()=>{},this.root.add(this.mesh),this.depthMat=new ct({colorWrite:!1,...Wh});let c=new z(n,this.depthMat);c.renderOrder=10,c.raycast=()=>{},c.visible=!1,this.depthPass=[c],this.root.add(c),this.opacity=1}shape(e,t,n,r){let i=this.geo,a=i.getAttribute(`position`),o=i.getAttribute(`color`),s=a.array,c=o.array,l=e.w/(n-1),u=e.h/(r-1),d=new y;for(let i=0;i<r;i++)for(let a=0;a<n;a++){let o=i*n+a;s[o*3]=-e.w/2+a*l,s[o*3+1]=-e.h/2+i*u,s[o*3+2]=t[o];let f=(t[i*n+Math.min(n-1,a+1)]-t[i*n+Math.max(0,a-1)])/(l*(Math.min(n-1,a+1)-Math.max(0,a-1))),p=(t[Math.min(r-1,i+1)*n+a]-t[Math.max(0,i-1)*n+a])/(u*(Math.min(r-1,i+1)-Math.max(0,i-1)));d.set(-f,-p,1).normalize();let m=Math.min(1.15,Math.max(.45,.4+.6*d.dot(Uh)/Uh.z));c[o*3]=c[o*3+1]=c[o*3+2]=m}a.needsUpdate=!0,o.needsUpdate=!0,i.computeBoundingSphere(),i.computeBoundingBox()}soilBlock(e,t,n,r){let i=O(e)??ot(t)[0]-1e4,a=[t,i];if(a.every((e,t)=>e===this.blockKey[t])&&this.block)return;this.blockKey=a;let o=ot(t)[1],s=qh(t,n,r,e.w,e.h,i,o);if(this.block)this.block.geometry.dispose(),this.block.geometry=s,this.depthPass[1].geometry=s;else{this.strata??=Jh();let e=[new ct({color:Bh,vertexColors:!0,...Wh}),new ct({map:this.strata,vertexColors:!0,...Wh}),new ct({color:Vh,vertexColors:!0,...Wh})];for(let t of e)Xh(t,this.opacity);this.block=new z(s,e),this.block.renderOrder=-1,this.block.raycast=()=>{},this.root.add(this.block);let t=new z(s,this.depthMat);t.renderOrder=10,t.raycast=()=>{},t.visible=this.depthPass[0].visible,this.depthPass[1]=t,this.root.add(t)}this.block.visible=this.mesh.visible,this.box=new Rr(new y(-e.w/2,-e.h/2,i),new y(e.w/2,e.h/2,o))}see(e){let t=Math.min(1,Math.max(0,e));if(t===this.opacity&&this.mesh?.material.opacity===(t<.999?t:1)||(this.opacity=t,!this.mesh))return;let n=[this.mesh.material,...this.block?.material??[]];for(let e of n)Xh(e,t);let r=t>.001;this.mesh.visible=r,this.block&&(this.block.visible=r);for(let e of this.depthPass)e.visible=r&&t<.999}photo(e){if(e===this.image||!this.mesh)return;this.image=e;let t=this.mesh.material;if(!e){t.map?.dispose(),t.map=null,t.color.set(Rh),t.needsUpdate=!0;return}t.map||t.color.set(Rh);let n=this.mesh;new Ar().load(e,r=>{if(this.disposed||this.mesh!==n||this.image!==e)return r.dispose();r.colorSpace=dr,r.anisotropy=this.anisotropy;let i=t.map;t.map=r,i?.dispose(),t.color.set(`#ffffff`),t.needsUpdate=!0,this.changed()},void 0,()=>console.error(`[viewport] land picture could not be read`))}paintAreas(e,t,n){let r=[e.areas,t,e.w,e.h,this.geo,n];if(r.every((e,t)=>e===this.overlayKey[t]))return;this.overlayKey=r,this.overlay&&=(this.overlay.material.map?.dispose(),this.overlay.material.dispose(),this.root.remove(this.overlay),null);let i=e.areas.filter(e=>e.points.length>=3);if(!i.length||!this.geo)return;let a=1024/Math.max(e.w,e.h),o=Math.max(64,Math.round(e.w*a)),s=Math.max(64,Math.round(e.h*a)),c=document.createElement(`canvas`);c.width=o,c.height=s;let l=c.getContext(`2d`);if(!l)return;let u=r=>{let i=r.kind===`site`,a=r.id===t;l.beginPath(),r.points.forEach((t,n)=>{let r=(t[0]+e.w/2)/e.w*o,i=(e.h/2-t[1])/e.h*s;n?l.lineTo(r,i):l.moveTo(r,i)}),l.closePath();let c=r.id===n;l.fillStyle=c?Eh:kh(e.areas,r),l.globalAlpha=c?1:a?.34:i?.14:.22,l.fill()};for(let e of i)e.kind===`site`&&u(e);for(let e of i)e.kind!==`site`&&u(e);let d=Lh(c);d.colorSpace=dr,d.anisotropy=this.anisotropy;let f=new ct({map:d,vertexColors:!0,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4});this.overlay=new z(this.geo,f),this.overlay.renderOrder=1.5,this.overlay.raycast=()=>{},this.root.add(this.overlay)}outline(e,t,n){let r=[e.areas,n.picked,t,n.editing??null];if(r.every((e,t)=>e===this.linesKey[t]))return;this.linesKey=r,Yh(this.lines,n.fat);let i=e.terrain,a=Math.min(e.w/(i.nx-1),e.h/(i.ny-1))/2,o=Math.max(80,a*.03),s=(n,r)=>Gh(t,i.nx,i.ny,e.w,e.h,n,r)+o,c=Math.max(e.w,e.h)/70;for(let t of e.areas){if(t.points.length<3)continue;let r=t.kind===`site`,i=t.id===n.picked,o=[];t.points.forEach((e,n)=>{let r=t.points[(n+1)%t.points.length],i=Math.max(1,Math.ceil(Math.hypot(r[0]-e[0],r[1]-e[1])/a));for(let t=0;t<i;t++){let n=e[0]+(r[0]-e[0])*t/i,a=e[1]+(r[1]-e[1])*t/i,c=e[0]+(r[0]-e[0])*(t+1)/i,l=e[1]+(r[1]-e[1])*(t+1)/i;o.push(n,a,s(n,a),c,l,s(c,l))}});let l=t.id===n.editing,u=kh(e.areas,t),d=new Ef({color:new H(i&&!r?`#ff7a00`:u).getHex(),linewidth:r?l?5:i?4:3:i?3.5:2,transparent:!0,opacity:.95,depthWrite:!1,dashed:r&&!l,dashSize:c,gapSize:c*.6});d.resolution.set(n.width,n.height),n.fat.add(d);let f=new sp(new Hf().setPositions(o),d);r&&!l&&f.computeLineDistances(),f.renderOrder=3,f.raycast=()=>{},this.lines.add(f)}}contourLines(e,t,n){let r=e.terrain,i=0;if(n.contours!==!1){let[e,r]=ot(t);i=(n.contours||hh(r-e))*1e3}let a=[t,i,r.base],o=`${n.contourColor}:${n.contourOpacity}`;if(a.every((e,t)=>e===this.contourKey[t])){if(o!==this.contourLook){this.contourLook=o;for(let e of this.contours.children){let t=e.material;t.color.set(n.contourColor),t.opacity=t.userData.opacity*n.contourOpacity,e.visible=n.contourOpacity>.001}}return}if(this.contourKey=a,this.contourLook=o,Yh(this.contours,n.fat),!i)return;let s=Math.min(e.w/(r.nx-1),e.h/(r.ny-1)),c=Ch(t,r.nx,r.ny,e.w,e.h,i,r.base,Math.max(40,s*.01)),l=(e,t,r)=>{if(!e.length)return;let i=new Ef({color:new H(n.contourColor).getHex(),linewidth:t,transparent:!0,opacity:r*n.contourOpacity,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4});i.userData.opacity=r,i.resolution.set(n.width,n.height),n.fat.add(i);let a=new sp(new Hf().setPositions(e),i);a.renderOrder=2,a.raycast=()=>{},a.visible=n.contourOpacity>.001,this.contours.add(a)};l(c.minor,1,.6),l(c.major,2.2,.85)}waterPlane(e,t){let n=e?.water,r=!!n&&(t||n.z>0),i=r&&e?ht(e):[],a=r&&i?`${n.z}:${e.w}:${e.h}:${i.map(e=>e.join(`;`)).join(`|`)}`:r?`${n.z}:${e.w}:${e.h}:all`:``;if(a===this.waterKey||(this.waterKey=a,Yh(this.water),!e||!n||!r||i&&!i.length))return;let o=new ct({color:zh,transparent:!0,opacity:.5,depthWrite:!1,side:2}),s=i?new un(i.map(e=>new nn(e.map(e=>new W(e[0],e[1]))))):new Bt(e.w,e.h),c=new z(s,o);c.position.z=n.z,c.renderOrder=2.5,c.raycast=()=>{},this.water.add(c)}clear(e){if(Yh(this.lines,e),Yh(this.contours,e),this.overlay&&=(this.overlay.material.map?.dispose(),this.overlay.material.dispose(),this.root.remove(this.overlay),null),this.mesh&&=(this.mesh.material.map?.dispose(),this.mesh.material.dispose(),this.root.remove(this.mesh),null),this.block){for(let e of this.block.material)e.dispose();this.block.geometry.dispose(),this.root.remove(this.block),this.block=null}for(let e of this.depthPass)this.root.remove(e);this.depthPass=[],this.depthMat?.dispose(),this.depthMat=null,this.geo?.dispose(),this.geo=null,this.gridKey=``,this.heights=null,this.blockKey=[],this.image=``,this.overlayKey=[],this.linesKey=[],this.contourKey=[],this.contourLook=``,this.box=null}dispose(e){this.disposed=!0,this.clear(e),this.strata?.dispose(),this.strata=null,Yh(this.water),this.waterKey=``,this.root.removeFromParent()}};function Qh(e,t,n,r,i=[0,0,1]){let a=0,o=[0,0,0],s=[0,0,0],c=[],l=t=>[e[t*3],e[t*3+1],e[t*3+2]];for(let e=0;e<n.length;e++){if(!r.has(n[e]))continue;let i=l(t[e*3]),u=l(t[e*3+1]),d=l(t[e*3+2]),f=[u[0]-i[0],u[1]-i[1],u[2]-i[2]],p=[d[0]-i[0],d[1]-i[1],d[2]-i[2]],m=[f[1]*p[2]-f[2]*p[1],f[2]*p[0]-f[0]*p[2],f[0]*p[1]-f[1]*p[0]],h=Math.hypot(...m)/2;if(!(h>0))continue;let g=[(i[0]+u[0]+d[0])/3,(i[1]+u[1]+d[1])/3,(i[2]+u[2]+d[2])/3];for(let e=0;e<3;e++)o[e]+=g[e]*h,s[e]+=m[e]/2;a+=h,c.push({c:g,n:[m[0]/(2*h),m[1]/(2*h),m[2]/(2*h)],a:h})}if(!c.length)return null;let u=[o[0]/a,o[1]/a,o[2]/a],d,f=Math.hypot(...s);if(f>a*.2)d=[s[0]/f,s[1]/f,s[2]/f];else{let e=c[0],t=-1/0;for(let n of c){let r=n.n[0]*i[0]+n.n[1]*i[1]+n.n[2]*i[2];r>t&&(t=r,e=n)}d=e.n}let p=0;for(let e=0;e<n.length;e++)if(r.has(n[e]))for(let n=0;n<3;n++){let r=l(t[e*3+n]);p=Math.max(p,Math.hypot(r[0]-u[0],r[1]-u[1],r[2]-u[2]))}return{center:u,normal:d,radius:p}}var $h=`#ff8a1f`,eg=`#8a6d3b`;function tg(e){let t=e.terrain,n=t?Ke(e):null;if(!t||!n){let t=Math.max(.005,Math.max(e.w,e.h)*1e-5)*3.5;return{at:()=>t,step:1/0}}let r=Math.min(e.w/(t.nx-1),e.h/(t.ny-1))/2,i=Math.max(80,r*.03);return{at:(r,a)=>Gh(n,t.nx,t.ny,e.w,e.h,r,a)+i,step:r}}function ng(e,t){let n=[];for(let[r,i]of e){let e=t.step===1/0?1:Math.max(1,Math.min(4e3,Math.ceil(Math.hypot(i[0]-r[0],i[1]-r[1])/t.step)));for(let a=0;a<e;a++){let o=r[0]+(i[0]-r[0])*a/e,s=r[1]+(i[1]-r[1])*a/e,c=r[0]+(i[0]-r[0])*(a+1)/e,l=r[1]+(i[1]-r[1])*(a+1)/e;n.push(o,s,t.at(o,s),c,l,t.at(c,l))}}return n}var rg=e=>e.flatMap(e=>e.slice(1).map((t,n)=>[e[n],t]));function ig(e,t){e.traverse(e=>{let n=e;n.geometry?.dispose();let r=Array.isArray(n.material)?n.material:n.material?[n.material]:[];for(let e of r)e instanceof Ef&&t.delete(e),e.dispose()}),e.clear()}function ag(e,t,n,r,i={}){let a=new Ef({color:new H(t).getHex(),linewidth:n,transparent:!0,depthWrite:!1,...i});a.resolution.set(r.width,r.height),r.fat.add(a);let o=new sp(new Hf().setPositions(e),a);return o.raycast=()=>{},o}var og=class{root=new U;gridG=new U;draftG=new U;gridKey=[];constructor(){this.root.add(this.gridG,this.draftG)}grid(e,t,n,r,i){let a=e&&t?e.areas.find(e=>e.id===t&&e.kind===`site`&&e.points.length>=3):void 0,o=e?.terrain?Ke(e):null,s=[a?.points,o,n,r,e?.w,e?.h];if(s.every((e,t)=>e===this.gridKey[t])||(this.gridKey=s,ig(this.gridG,i.fat),!e||!a))return;let c=tg(e),l=Ah(a.points),u=Mh(a.points,n),f=Math.max(1,Math.round(r)),p=Fh(a.points,l,u,f),m=ng(p.minor,c);if(m.length){let e=new P;e.setAttribute(`position`,new Gn(m,3));let t=new ke(e,new d({color:Dh,transparent:!0,opacity:.7,depthWrite:!1}));t.renderOrder=4,t.raycast=()=>{},this.gridG.add(t)}let h=ng(p.major,c);if(h.length){let e=ag(h,Oh,1.6,i,{opacity:.9});e.renderOrder=4,this.gridG.add(e)}}draft(e,t,n,r,i){if(ig(this.draftG,i.fat),!e||!t.length&&!n.length)return;let a=tg(e),o=ng(rg(t),a);if(o.length){let e=ag(o,$h,3.5,i,{depthTest:!1});e.renderOrder=20,this.draftG.add(e)}let s=ng(rg(n),a);if(s.length){let e=Math.max(1,r*7),t=ag(s,eg,2,i,{depthTest:!1,dashed:!0,dashSize:e,gapSize:e*.7});t.computeLineDistances(),t.renderOrder=20,this.draftG.add(t)}}dispose(e){ig(this.gridG,e),ig(this.draftG,e),this.gridKey=[],this.root.removeFromParent()}};function sg(e){return e.getRootNode()}function cg(e,t){let n=e;n.dispose(),t&&(n._interceptControlDown&&t.removeEventListener(`keydown`,n._interceptControlDown,{capture:!0}),n._interceptControlUp&&t.removeEventListener(`keyup`,n._interceptControlUp,{capture:!0}))}var lg={uPxA:{value:0},uPxB:{value:0}};function ug(e,t){let n=Math.max(1,t);e instanceof Bn?(lg.uPxA.value=(e.top-e.bottom)/e.zoom/n,lg.uPxB.value=0):e instanceof ar&&(lg.uPxA.value=0,lg.uPxB.value=2*Math.tan(h.degToRad(e.fov)/2)/e.zoom/n)}function dg(e){let t=new d({color:e,transparent:!0}),n={uMode:{value:1},uMinA:{value:rr.minAlpha}};return t.userData.edge=n,t.onBeforeCompile=e=>{e.uniforms.uPxA=lg.uPxA,e.uniforms.uPxB=lg.uPxB,e.uniforms.uMode=n.uMode,e.uniforms.uMinA=n.uMinA,e.uniforms.uFrom={value:rr.fromPx},e.uniforms.uTo={value:rr.toPx},e.uniforms.uSmooth={value:rr.smoothAlpha},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec2 edgeLook;
uniform float uPxA;
uniform float uPxB;
uniform float uMode;
uniform float uMinA;
uniform float uFrom;
uniform float uTo;
uniform float uSmooth;
varying float vEdgeA;`).replace(`#include <project_vertex>`,`#include <project_vertex>
        vEdgeA = 1.0;
        if (edgeLook.x != 0.0) {
          bool smoothEdge = edgeLook.x < 0.0;
          float spacing = (uMode > 0.5 && !smoothEdge) ? edgeLook.y : abs(edgeLook.x);
          float px = max(uPxA + uPxB * max(-mvPosition.z, 0.0), 1e-9);
          vEdgeA = mix(uMinA, 1.0, smoothstep(uFrom, uTo, spacing / px));
          if (smoothEdge && uMode > 0.5) vEdgeA *= uSmooth;
        }`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vEdgeA;`).replace(`#include <alphamap_fragment>`,`#include <alphamap_fragment>
diffuseColor.a *= vEdgeA;`)},t}function fg(e,t){let n=e.userData.edge;n&&(n.uMode.value=+(t===`sharp`))}var pg={px:{ko:`오른쪽`,en:`RIGHT`},nx:{ko:`왼쪽`,en:`LEFT`},py:{ko:`뒤`,en:`BACK`},ny:{ko:`정면`,en:`FRONT`},pz:{ko:`위`,en:`TOP`},nz:{ko:`아래`,en:`BOTTOM`}},mg=[`px`,`nx`,`pz`,`nz`,`ny`,`py`],hg=[{key:`n`,x:0,y:1},{key:`e`,x:1,y:0},{key:`s`,x:0,y:-1},{key:`w`,x:-1,y:0}];function gg(e){return e===`arch`?{show:!0,ring:.8,at:.9,plate:.38,frustum:1.12}:{show:!1,ring:.8,at:.9,plate:.38,frustum:1.05}}var _g=.95;function vg(e,t){let n=e.s*t/_g,r=(n-e.s)/2;return{x:e.x-r,y:e.y-r,s:n}}function yg(e,t,n){return e>0?Math.max(8,Math.min(n,Math.floor(t*100/e))):n}var bg=`"Malgun Gothic", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif`;function xg(e,t){let n=document.createElement(`canvas`);n.width=n.height=e;let r=n.getContext(`2d`,{willReadFrequently:!0}),i;r?(t(r,e),i=Ih(r.getImageData(0,0,e,e).data,e,e)):i=new Uint8Array(e*e*4).fill(235);let a=new nr(i,e,e,fn,Cn);return a.colorSpace=dr,a.magFilter=Fe,a.minFilter=D,a.generateMipmaps=!0,a.anisotropy=4,a.needsUpdate=!0,a}function Sg(e){return xg(256,(t,n)=>{t.fillStyle=`#f4f5f7`,t.fillRect(0,0,n,n),t.strokeStyle=`#8f96a0`,t.lineWidth=8,t.strokeRect(4,4,n-8,n-8),t.font=`800 100px ${bg}`;let r=yg(t.measureText(e).width,n*.88,88);t.font=`800 ${r}px ${bg}`,t.textAlign=`center`,t.textBaseline=`middle`,t.lineJoin=`round`,t.lineWidth=Math.max(2,r*.05),t.strokeStyle=`#1f242b`,t.strokeText(e,n/2,n/2+r*.04),t.fillStyle=`#1f242b`,t.fillText(e,n/2,n/2+r*.04)})}function Cg(e,t){return xg(128,(n,r)=>{let i=r/2;n.fillStyle=`rgba(248, 249, 250, 0.96)`,n.beginPath(),n.arc(i,i,i-4,0,Math.PI*2),n.fill(),n.strokeStyle=t?`#c9302c`:`#7d848e`,n.lineWidth=5,n.stroke(),n.font=`800 100px ${bg}`;let a=yg(n.measureText(e).width,r*.62,72);n.font=`800 ${a}px ${bg}`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillStyle=t?`#c9302c`:`#1f242b`,n.fillText(e,i,i+a*.05)})}var wg=class{scene=new Mn;mesh;hover;ring;plates=[];lang;look=gg(null);compassText;constructor(e,t){this.lang=e,this.compassText=t;let n=mg.map(t=>new ct({map:Sg(pg[t][e])}));this.mesh=new z(new v(1,1,1),n),this.mesh.geometry.rotateX(Math.PI/2),this.scene.add(this.mesh),this.scene.add(new ke(new On(this.mesh.geometry),new d({color:`#7d848e`}))),this.hover=new z(new v(.34,.34,.34),new ct({color:`#5aa0ff`,transparent:!0,opacity:.5,depthTest:!1})),this.hover.visible=!1,this.scene.add(this.hover),this.ring=new Ee(new P().setFromPoints(Array.from({length:72},(e,t)=>new y(Math.cos(t/72*Math.PI*2),Math.sin(t/72*Math.PI*2),0))),new d({color:`#8f96a0`})),this.ring.position.z=-.5,this.scene.add(this.ring);for(let n of hg){let r=new Ut(new Nr({map:Cg(t(n.key,e),n.key===`n`)}));this.scene.add(r),this.plates.push(r)}this.applyLook()}get frustum(){return this.look.frustum}setMode(e){let t=gg(e);return t.show===this.look.show&&t.frustum===this.look.frustum?!1:(this.look=t,this.applyLook(),!0)}applyLook(){let e=this.look;this.ring.visible=e.show,this.ring.scale.set(e.ring,e.ring,1),hg.forEach((t,n)=>{let r=this.plates[n];r.visible=e.show,r.position.set(t.x*e.at,t.y*e.at,-.5),r.scale.set(e.plate,e.plate,1)})}setLang(e){if(e===this.lang)return;this.lang=e;let t=this.mesh.material;mg.forEach((n,r)=>{t[r].map?.dispose(),t[r].map=Sg(pg[n][e]),t[r].needsUpdate=!0}),hg.forEach((t,n)=>{let r=this.plates[n].material;r.map?.dispose(),r.map=Cg(this.compassText(t.key,e),t.key===`n`),r.needsUpdate=!0})}};function Tg(e){let t=e;return t.isMesh||e.isSprite?(Array.isArray(t.material)?t.material:[t.material]).every(e=>!e||!e.visible||e.transparent&&!e.depthWrite):!1}function Eg(e){let t=[];return e.traverseVisible(e=>{Tg(e)&&t.push(e)}),t}function Dg(e,t=[]){let n=new Set(t),r=(Array.isArray(e)?e:Eg(e)).filter(e=>e.visible&&!n.has(e));for(let e of r)e.visible=!1;return r}var Og={line:0,text:1,face:2,solid:3};function kg(e,t){return Math.max(e*3,Math.abs(t)*1e-6,1e-9)}function Ag(e,t,n=e.length){let r=1/0;for(let t=0;t<n;t++){let n=e[t];n&&n.depth<r&&(r=n.depth)}if(r===1/0)return-1;let i=r+Math.max(0,t),a=-1,o=1/0,s=1/0;for(let t=0;t<n;t++){let n=e[t];if(!n||!(n.depth<=i))continue;let r=Og[n.cls];(r<o||r===o&&n.depth<s)&&(a=t,o=r,s=n.depth)}return a}function jg(e,t,n){return e+Math.max(0,n)<t}function Mg(e,t){return e.text&&e.id!==t?`text`:`line`}function Ng(e,t){let n=[];if(e.t===`xline`)return n;if(e.t===`point`)return(t.has(`node`)||t.has(`end`))&&n.push({p:e.p,kind:`vertex`}),n;if(t.has(`end`))for(let t of $r(e))n.push({p:t,kind:`vertex`});if(t.has(`mid`)){if(e.t===`line`)n.push({p:[(e.a[0]+e.b[0])/2,(e.a[1]+e.b[1])/2],kind:`mid`});else if(e.t===`arc`){let t=e.a0+Yi(e.a0,e.a1)/2;n.push({p:[e.c[0]+e.r*Math.cos(t),e.c[1]+e.r*Math.sin(t)],kind:`mid`})}}return t.has(`center`)&&(e.t===`circle`||e.t===`arc`||e.t===`ellipse`)&&n.push({p:e.c,kind:`center`}),n}function Pg(e,t){let n=t[0],r=t[1];for(let t=0;t+5<e.length;t+=6){let i=e[t],a=e[t+1],o=e[t+2],s=e[t+3],c=e[t+4],l=e[t+5],u=(n-o)*(a-s)-(i-o)*(r-s),d=(n-c)*(s-l)-(o-c)*(r-l),f=(n-i)*(l-a)-(c-i)*(r-a);if(!((u<0||d<0||f<0)&&(u>0||d>0||f>0)))return!0}return!1}function Fg(e,t){let n=-1,r=1/0;for(let i=0;i<e.length;i++){let a=e[i];a.area<r&&Pg(a.tris,t)&&(n=i,r=a.area)}return n}function Ig(e,t,n){if(!e)return!0;if(Math.abs(e.depth-t.depth)>Math.max(0,n))return t.depth<e.depth;let r=Og[e.cls],i=Og[t.cls];return r===i?t.area<e.area:i<r}function Lg(e){let t=1/0,n=-1/0;for(let r=0;r<e.length;r++)e[r]<t&&(t=e[r]),e[r]>n&&(n=e[r]);let r=Math.max(n-t,1e-9)*1e-6,i=(e,t)=>`${Math.round(e/r)},${Math.round(t/r)}`,a=new Map;for(let t=0;t+5<e.length;t+=6)for(let n=0;n<3;n++){let r=t+n*2,o=t+(n+1)%3*2,s=i(e[r],e[r+1]),c=i(e[o],e[o+1]);if(s===c)continue;let l=s<c?`${s}|${c}`:`${c}|${s}`,u=a.get(l);u?u.n++:a.set(l,{a:r,b:o,n:1})}let o=[];for(let t of a.values())t.n===1&&o.push(e[t.a],e[t.a+1],e[t.b],e[t.b+1]);return o}var Rg=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],zg=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Bg=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Vg=e=>Math.hypot(e[0],e[1],e[2]),Hg=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Ug=e=>{let t=Vg(e);return t>1e-12?Hg(e,1/t):[0,0,1]};function Wg(e,t){let n=Ug(e);return zg(n,t)<0?Hg(n,-1):n}function Gg(e){let t=t=>e.reduce((e,n)=>Vg(Rg(n,t))>Vg(Rg(e,t))?n:e,t),n=t(e[0]),r=t(n),i=Rg(r,n),a=Vg(i),o=0,s=null;for(let t of e){let e=a>1e-12?Vg(Bg(i,Rg(t,n)))/a:Vg(Rg(t,n));e>o&&(o=e,s=t)}return!s||o<=Math.max(1e-9,a*.001)?{a:n,b:r,straight:!0,normal:null}:{a:n,b:r,straight:!1,normal:Ug(Bg(i,Rg(s,n)))}}var Kg=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];function qg(e,t){let n=Ug(e),r=[0,0,1],i=-1/0;for(let e of Kg){let a=Rg(e,Hg(n,zg(e,n))),o=Vg(a);if(o<.2)continue;let s=Hg(a,1/o),c=zg(s,t)+.3*o+(Math.abs(s[2])<.9?.001:0);c>i+1e-9&&(i=c,r=s)}return r}function Jg(e){let t=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0];for(let r of e)for(let e=0;e<3;e++)t[e]=Math.min(t[e],r[e]),n[e]=Math.max(n[e],r[e]);return{center:Hg([t[0]+n[0],t[1]+n[1],t[2]+n[2]],.5),radius:Vg(Rg(n,t))/2}}function Yg(e,t){if(!e.length)return null;let n=Gg(e);if(n.straight){let e=Hg([n.a[0]+n.b[0],n.a[1]+n.b[1],n.a[2]+n.b[2]],.5);return{dir:qg(Rg(n.b,n.a),t),center:e,radius:Vg(Rg(n.b,n.a))/2}}return{dir:Wg(n.normal,t),...Jg(e)}}function Xg(e,t,n){return t.length?{dir:Wg(e,n),...Jg(t)}:null}var Zg=1.12,Qg=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],$g=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],e_=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function t_(e,t){return[[-e/2,-t/2,0],[e/2,-t/2,0],[e/2,t/2,0],[-e/2,t/2,0]]}function n_(e,t,n){let r=e_(t),i=e_($g(n,r)),a=$g(r,i),o=1/0,s=-1/0,c=1/0,l=-1/0,u=1/0,d=-1/0;for(let t of e){let e=Qg(t,i),n=Qg(t,a),f=Qg(t,r);o=Math.min(o,e),s=Math.max(s,e),c=Math.min(c,n),l=Math.max(l,n),u=Math.min(u,f),d=Math.max(d,f)}if(!e.length)return{center:[0,0,0],halfW:0,halfH:0,halfD:0};let f=(o+s)/2,p=(c+l)/2,m=(u+d)/2;return{center:[0,1,2].map(e=>i[e]*f+a[e]*p+r[e]*m),halfW:(s-o)/2,halfH:(l-c)/2,halfD:(d-u)/2}}function r_(e,t,n,r,i=Zg){return r/Math.max(2*e.halfH*i,2*e.halfW*i*n/Math.max(1,t),1e-6)}function i_(e,t,n,r=Zg){let i=Math.tan(t*Math.PI/180/2),a=i*Math.max(.001,n);return Math.max(e.halfH*r/i,e.halfW*r/a)+e.halfD}function a_(e,t){let n=t/2,r=[];return e.xy&&e.xz&&r.push(-n,0,0,n,0,0),e.xy&&e.yz&&r.push(0,-n,0,0,n,0),e.yz&&e.xz&&r.push(0,0,-n,0,0,n),r}function o_(e){return li(e.entities)??[[-20,-20],[20,20]]}var s_=.35,c_=.14,l_={ground:`#4a8fe0`,face:`#3c9a49`,work:`#f07b1d`},u_={selection:`#ff7a00`,selectionEdge:`#c45a00`,hover:`#ffa040`,primary:`#1e6fff`,secondary:`#e0483e`,sketch:`#1d5fbf`,sketchActive:`#0d3f8f`,sketchSel:`#ff7a00`,sketchDim:`#2b7a3d`,region:`#4a8fe0`,regionFill:`#8b5cf6`,regionPicked:`#ff9a3c`,preview:`#ff8a1f`,edge:`#1f2328`},d_=h.degToRad;function f_(e,t){let n=e.length/3*2;return new at(t&&t.length===n?t:new Float32Array(n),2)}function p_(e){return new M().compose(new y(...e.position),new An().setFromEuler(new xr(d_(e.rotation[0]),d_(e.rotation[1]),d_(e.rotation[2]),`XYZ`)),new y(1,1,1))}function m_(e,t=!1){e.traverse(e=>{let n=e;n.geometry?.dispose();let r=Array.isArray(n.material)?n.material:n.material?[n.material]:[];for(let e of r){if(t)for(let t of Object.values(e))t instanceof S&&t.dispose();e.dispose()}})}function h_(e,t=0){let n=0;for(let t of e)n+=Math.max(0,t.length-1);let r=new Float32Array(n*6),i=0;for(let n of e)for(let e=0;e<n.length-1;e++)r[i++]=n[e][0],r[i++]=n[e][1],r[i++]=t,r[i++]=n[e+1][0],r[i++]=n[e+1][1],r[i++]=t;return r}function g_(e){let t=new Float32Array(e.length/2*3);for(let n=0,r=0;n+1<e.length;n+=2)t[r++]=e[n],t[r++]=e[n+1],t[r++]=0;return t}function __(e,t){let n=e.geometry.getAttribute(`position`);if(n&&n.array.length===t.length){if(!t.length)return;let r=!0;for(let e=0;e<t.length;e++)if(n.array[e]!==Math.fround(t[e])){r=!1;break}if(r)return;n.array.set(t),n.needsUpdate=!0,e.geometry.computeBoundingSphere();return}e.geometry.dispose();let r=new P;r.setAttribute(`position`,new at(t instanceof Float32Array?t:new Float32Array(t),3)),e.geometry=r}var v_=0,y_=new WeakMap;function b_(e){let t=y_.get(e);return t??y_.set(e,t=++v_),t}function x_(e,t){let n=[];for(let r=0;r<e.faceIds.length;r++)t.has(e.faceIds[r])&&n.push(e.indices[r*3],e.indices[r*3+1],e.indices[r*3+2]);let r=new P;return r.setAttribute(`position`,new at(e.positions,3)),r.setAttribute(`normal`,new at(e.normals,3)),r.setIndex(n),r}function S_(e,t){if(!t)return Array.from(e.edges);let n=[];for(let r=0;r<e.edgeIds.length;r++)if(t.has(e.edgeIds[r]))for(let t=0;t<6;t++)n.push(e.edges[r*6+t]);return n}var C_=new WeakMap;function w_(e,t){let n=C_.get(e);n||C_.set(e,n=new Map);let r=n.get(t);return r||n.set(t,r=T_(e,t)),r}function T_(e,t){let n=t=>[e.positions[t*3],e.positions[t*3+1],e.positions[t*3+2]],r=new Map,i=e=>{let t=n(e).map(e=>Math.round(e*1e4)).join(`,`);return r.has(t)||r.set(t,e),r.get(t)},a=new Map;for(let n=0;n<e.faceIds.length;n++){if(e.faceIds[n]!==t)continue;let r=[i(e.indices[n*3]),i(e.indices[n*3+1]),i(e.indices[n*3+2])];for(let e=0;e<3;e++){let t=r[e],n=r[(e+1)%3],i=t<n?`${t},${n}`:`${n},${t}`,o=a.get(i);o?o.n++:a.set(i,{a:t,b:n,n:1})}}let o=[];for(let e of a.values())e.n===1&&o.push(...n(e.a),...n(e.b));return o}var E_=null;function D_(){if(E_)return E_;let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.55,`rgba(255,255,255,1)`),n.addColorStop(.7,`rgba(255,255,255,0.5)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),E_=Lh(e),E_}var O_={glow:`#ff7a00`,glowSoft:`#ffb15c`,faceSel:`#ffb35c`,faceHover:`#ffd9a8`,vertex:`#e040fb`,vertexHover:`#ea80fc`};function k_(e,t){if(e.t!==`point`)return[vi(e)];let[n,r]=e.p;return[[[n-t,r-t],[n+t,r+t]],[[n-t,r+t],[n+t,r-t]]]}function A_(e,t=0){let n=new P;return n.setAttribute(`position`,new at(h_(e,t),3)),n}var j_={iso:new y(1,-1,1).normalize(),top:new y(0,0,1),bottom:new y(0,0,-1),front:new y(0,-1,0),back:new y(0,1,0),right:new y(1,0,0),left:new y(-1,0,0)};function M_(e){return Math.abs(e.z)>.999?new y(0,1,0):new y(0,0,1)}var N_=class{host;lang;renderer;scene=new Mn;persp;ortho;camera;controls;keyRoot=null;bodiesRoot=new U;sketchRoot=new U;previewRoot=new U;ghostRoot=new U;gizmo=new U;gizmoSize=100;valueHandle=new Gp(()=>this.camera);moreHandles=[];moreHandle(e){for(;this.moreHandles.length<=e;){let e=new Gp(()=>this.camera);this.moreHandles.push(e),this.scene.add(e.group)}return this.moreHandles[e]}bodyViews=new Map;sketchViews=new Map;labels;grid=new U;gridKey=``;dark=!1;frame=0;outlineSel=[];outlineHover=[];composer=null;renderPass=null;passSel=null;passHover=null;disposed=!1;empty=new P;geo=new Map;coarseGeometry(e){let t=this.geo.get(e.share??e);if(!t||!e.lod)return null;if(t.coarse===void 0){let n=e.lod,r=new P;r.setAttribute(`position`,new at(n.positions,3)),r.setAttribute(`normal`,new at(n.normals,3)),r.setIndex(new at(n.indices,1)),r.boundingSphere=t.faces.boundingSphere?.clone()??null,r.boundingBox=t.faces.boundingBox?.clone()??null;let i=new P;i.setAttribute(`position`,new at(n.edges,3)),i.setAttribute(`edgeLook`,f_(n.edges,n.edgeLook)),i.boundingSphere=t.faces.boundingSphere?.clone()??null,t.coarse={faces:r,edges:i}}return t.coarse}takeGeometry(e){let t=this.geo.get(e.share??e);if(!t){let n=new P;n.setAttribute(`position`,new at(e.positions,3)),n.setAttribute(`normal`,new at(e.normals,3)),n.setIndex(new at(e.indices,1)),n.computeBoundingSphere(),n.computeBoundingBox();let r=new P;r.setAttribute(`position`,new at(e.edges,3)),r.setAttribute(`edgeLook`,f_(e.edges,e.edgeLook)),r.computeBoundingSphere(),t={faces:n,edges:r,users:0},this.geo.set(e.share??e,t)}return t.users++,t}dropGeometry(e){let t=e&&this.geo.get(e.share??e);!t||--t.users>0||(t.faces.dispose(),t.edges.dispose(),t.coarse?.faces.dispose(),t.coarse?.edges.dispose(),this.geo.delete(e.share??e))}seeThrough=[];renderOutlined(e,t){if(!this.composer){let n=this.renderer.getPixelRatio(),r=new tt(e*n,t*n,{samples:4,type:Pr});this.composer=new Ff(this.renderer,r),this.renderPass=new zf(this.scene,this.camera);let i=(n,r,i,a)=>{let o=new If(new W(e,t),this.scene,this.camera);return o.visibleEdgeColor.set(n),o.hiddenEdgeColor.set(n).multiplyScalar(.35),o.edgeStrength=r,o.edgeGlow=i,o.edgeThickness=a,o};this.passHover=i(O_.glowSoft,2.5,0,1.2),this.passSel=i(O_.glow,6,0,2.2);for(let e of[this.passHover,this.passSel]){let t=e.render.bind(e);e.render=(...n)=>{let r=Dg(this.seeThrough,e.selectedObjects);try{t(...n)}finally{for(let e of r)e.visible=!0}}}this.composer.addPass(this.renderPass),this.composer.addPass(this.passHover),this.composer.addPass(this.passSel),this.composer.addPass(new Rf)}this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(e,t),this.renderPass.camera=this.camera,this.passSel.renderCamera=this.camera,this.passHover.renderCamera=this.camera,this.passSel.selectedObjects=this.outlineSel,this.passHover.selectedObjects=this.outlineHover,this.passSel.enabled=this.outlineSel.length>0,this.passHover.enabled=this.outlineHover.length>0,this.seeThrough=Eg(this.scene),this.composer.render(),this.seeThrough=[]}baseHeight;cube;cubeScene;cubeCamera=new Bn(-1,1,1,-1,.1,10);cubeMesh;cubeHover;labelNodes=new Map;labelData=new Map;labelShown=new Map;tween=null;cubeSpot={corner:`tr`,room:{left:0,right:0},size:112};wheelZoom=20;onWheelCapture=e=>{this.controls.zoomSpeed=e.ctrlKey?1:mm(this.wheelZoom,e.deltaMode)};onPointerCapture=()=>{this.controls.zoomSpeed=1};onRender=null;pickClip=null;groundObjects(){return[this.grid,this.siteRoot,this.ground?.root,this.land?.root].filter(e=>!!e)}constructor(e,t,n){this.host=e,this.lang=n,this.renderer=new yc({antialias:!0,powerPreference:`high-performance`,preserveDrawingBuffer:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.autoClear=!1,e.appendChild(this.renderer.domElement),this.labels=document.createElement(`div`),this.labels.className=`labels`,e.appendChild(this.labels),_r.DEFAULT_UP.set(0,0,1),this.scene.background=new H(`#eceef1`),this.scene.environment=um(this.renderer),tm(this.renderer),this.baseHeight=t,this.persp=new ar(35,1,t/2e3,t*200),this.ortho=new Bn(-1,1,1,-1,-t*100,t*100);for(let e of[this.persp,this.ortho])e.up.set(0,0,1);this.camera=this.ortho,this.scene.add(new Ht(`#ffffff`,`#a4a9b0`,1.4));let r=new sr(`#ffffff`,1.4);r.position.set(.5,-.8,1.2),this.scene.add(r);let i=new sr(`#ffffff`,.45);i.position.set(-.7,.6,.4),this.scene.add(i),this.scene.add(this.grid,this.bodiesRoot,this.sketchRoot,this.ghostRoot,this.previewRoot,this.gizmo,this.valueHandle.group),this.controls=new pf(this.camera,this.renderer.domElement),this.keyRoot=sg(this.renderer.domElement),this.controls.mouseButtons={LEFT:null,MIDDLE:Ir.PAN,RIGHT:null},this.controls.zoomToCursor=!0,this.controls.screenSpacePanning=!0,this.controls.addEventListener(`change`,()=>this.render()),e.addEventListener(`wheel`,this.onWheelCapture,{capture:!0,passive:!0}),e.addEventListener(`pointerdown`,this.onPointerCapture,!0),this.applyZoomLimits(),this.cube=new wg(n,(e,t)=>ln(t,`cube.${e}`)),this.cubeScene=this.cube.scene,this.cubeMesh=this.cube.mesh,this.cubeHover=this.cube.hover,this.cubeCamera.up.set(0,0,1),this.renderer.domElement.addEventListener(`webglcontextrestored`,this.onContextRestored),this.setView(`iso`,!1)}onContextRestored=()=>{if(this.disposed)return;let e=this.scene.environment;this.scene.environment=um(this.renderer),this.fxScene&&this.fxScene.environment===e&&(this.fxScene.environment=this.scene.environment),e?.dispose(),this.render()};setLang(e){e!==this.lang&&(this.lang=e,this.cube.setLang(e),this.render())}setCubeMode(e){this.cube.setMode(e)&&(this.cubeHover.visible=!1,this.render())}resize(){this.applySize(),this.render()}applySize(){let e=this.host.clientWidth||1,t=this.host.clientHeight||1;this.renderer.setSize(e,t),this.persp.aspect=e/t,this.persp.updateProjectionMatrix();let n=this.baseHeight/2;this.ortho.left=-n*e/t,this.ortho.right=n*e/t,this.ortho.top=n,this.ortho.bottom=-n,this.ortho.updateProjectionMatrix();for(let n of this.fatMaterials)n.resolution.set(e,t)}visibleHeight(){return this.camera===this.ortho?this.baseHeight/this.ortho.zoom:2*this.persp.position.distanceTo(this.controls.target)*Math.tan(d_(this.persp.fov)/2)}canvasSize(){return new W(this.host.clientWidth||1,this.host.clientHeight||1)}pixel(e){let t=this.host.clientHeight||1;return this.camera===this.ortho?this.baseHeight/this.ortho.zoom/t:2*this.persp.position.distanceTo(e??this.controls.target)*Math.tan(d_(this.persp.fov)/2)/t}setProjection(e){let t=this.controls.target.clone(),n=this.camera.position.clone().sub(t).normalize(),r=this.visibleHeight();if(e===`ortho`&&this.camera!==this.ortho)this.ortho.position.copy(t).addScaledVector(n,this.baseHeight*2),this.ortho.up.copy(this.persp.up),this.ortho.zoom=this.baseHeight/r,this.ortho.updateProjectionMatrix(),this.camera=this.ortho;else if(e===`persp`&&this.camera!==this.persp){let e=r/(2*Math.tan(d_(this.persp.fov)/2));this.persp.position.copy(t).addScaledVector(n,e),this.persp.up.copy(this.ortho.up),this.camera=this.persp}this.applyZoomLimits(),this.controls.object=this.camera,this.controls.update(),this.render()}setControlSpeed(e,t){this.wheelZoom=Math.min(50,Math.max(5,e||20)),this.controls.rotateSpeed=t,this.controls.panSpeed=1}plateSize(){let e=this.gridArgs;return e?Math.max(e.w,e.h):this.baseHeight/1.4}zoomPercent(){return hm(this.plateSize(),this.visibleHeight())}setZoomPercent(e){if(!Number.isFinite(e))return;let t=Math.min(dm,Math.max(5,e));if(this.tween=null,this.camera===this.ortho)this.ortho.zoom=_m(this.baseHeight,this.plateSize(),t),this.ortho.updateProjectionMatrix();else{let e=this.persp.position.clone().sub(this.controls.target).normalize();this.persp.position.copy(this.controls.target).addScaledVector(e,vm(this.plateSize(),t,this.persp.fov))}this.controls.update(),this.render()}zoomStep(e){this.setZoomPercent(this.zoomPercent()*(1+this.wheelZoom/100)**e)}applyZoomLimits(){let e=this.plateSize(),t=this.controls;t.minZoom=_m(this.baseHeight,e,5),t.maxZoom=_m(this.baseHeight,e,dm);let n=this.camera===this.persp;t.minDistance=n?vm(e,dm,this.persp.fov):0,t.maxDistance=n?vm(e,5,this.persp.fov):1/0,this.fxRange&&([t.minDistance,t.maxDistance]=this.fxRange)}look(e,t,n,r=!0,i){let a=Math.max(n,this.baseHeight*.02),o=i??M_(e),s,c=this.ortho.zoom;if(this.camera===this.ortho){s=t.clone().addScaledVector(e,this.baseHeight*2);let n=this.host.clientWidth||1,r=this.host.clientHeight||1,i=Math.max(2*a*1.15,2*a*1.15*r/n);c=Math.min(this.controls.maxZoom,Math.max(this.controls.minZoom,this.baseHeight/i))}else{let n=Math.min(this.controls.maxDistance,Math.max(this.controls.minDistance,a*1.2/Math.sin(d_(this.persp.fov)/2)));s=t.clone().addScaledVector(e,n)}this.moveCamera(s,t,o,c,r)}lookAtPoints(e,t,n){let r=M_(e),i=n_(t,[e.x,e.y,e.z],[r.x,r.y,r.z]),a=new y(...i.center),o=this.host.clientWidth||1,s=this.host.clientHeight||1,c,l=this.ortho.zoom;if(this.camera===this.ortho)c=a.clone().addScaledVector(e,this.baseHeight*2),l=Math.min(this.controls.maxZoom,Math.max(this.controls.minZoom,r_(i,o,s,this.baseHeight,Zg)));else{let t=Math.min(this.controls.maxDistance,Math.max(this.controls.minDistance,i_(i,this.persp.fov,o/s,Zg)));c=a.clone().addScaledVector(e,t)}this.moveCamera(c,a,r,l,n)}emptyOutline(){let e=this.ground?.bounds();if(e&&!e.isEmpty()){let t=[];for(let n of[e.min.x,e.max.x])for(let r of[e.min.y,e.max.y])for(let i of[e.min.z,e.max.z])t.push([n,r,i]);return t}let t=this.gridArgs;return!t||!t.ground?null:(this.grid.updateMatrixWorld(),t_(t.w,t.h).map(e=>{let t=new y(...e).applyMatrix4(this.grid.matrix);return[t.x,t.y,t.z]}))}moveCamera(e,t,n,r,i){if(!i){this.camera.position.copy(e),this.camera.up.copy(n),this.controls.target.copy(t),this.camera===this.ortho&&(this.ortho.zoom=r,this.ortho.updateProjectionMatrix()),this.controls.update(),this.render();return}this.tween={from:this.camera.position.clone(),to:e,tFrom:this.controls.target.clone(),tTo:t.clone(),upFrom:this.camera.up.clone(),upTo:n,zFrom:this.ortho.zoom,zTo:r,start:performance.now()},this.render()}turnTo(e,t=!0){let n=this.controls.target.clone(),r=this.camera===this.ortho?this.baseHeight*2:Math.max(.001,this.camera.position.distanceTo(n)),i=n.clone().addScaledVector(e,r),a=M_(e);if(!t){this.camera.position.copy(i),this.camera.up.copy(a),this.controls.update(),this.render();return}let o=this.ortho.zoom;this.tween={from:this.camera.position.clone(),to:i,tFrom:n.clone(),tTo:n,upFrom:this.camera.up.clone(),upTo:a,zFrom:o,zTo:o,start:performance.now()},this.render()}sceneSphere(e){let t=new Rr;for(let[n,r]of this.bodyViews)r.group.visible&&(!e||e.has(n))&&t.expandByObject(r.group);for(let[n,r]of this.sketchViews)r.group.visible&&(!e||e.has(n))&&t.expandByObject(r.lines);return t.isEmpty()?null:t.getBoundingSphere(new hn)}setView(e,t=!0,n){let r=this.gridArgs,i=this.sceneSphere(n),a=!i&&!n&&j_[e]?this.emptyOutline():null;if(a)return this.lookAtPoints(j_[e].clone(),a,t);let o=i??(n?null:this.groundSphere())??new hn(new y(0,0,0),r?Math.hypot(r.w,r.h)/2:this.baseHeight/4);if(e===`fit`||e===`fitSel`){let e=this.camera.position.clone().sub(this.controls.target).normalize();this.look(e,o.center,o.radius,t,this.camera.up.clone());return}let s=j_[e];s&&this.look(s.clone(),o.center,o.radius,t)}lookAtPlane(e,t){let n=p_(e),r=new y(0,0,1).transformDirection(n),i=new y(0,1,0).transformDirection(n),a=new y(...e.position);this.look(r,a,t,!0,i)}lookAtFaces(e,t){let n=this.bodyViews.get(e),r=n?.data;if(!n||!r)return!1;n.group.updateMatrixWorld();let i=n.group.matrixWorld,a=i.clone().invert(),o=this.camera.position.clone().sub(this.controls.target).normalize().transformDirection(a),s=Qh(r.positions,r.indices,r.faceIds,new Set(t),[o.x,o.y,o.z]);if(!s)return!1;let c=new y(...s.normal).transformDirection(i),l=new y(...s.center).applyMatrix4(i);return this.look(c,l,s.radius*new y().setFromMatrixScale(i).x,!0),!0}lookAtEdge(e,t){let n=this.bodyViews.get(e),r=n?.data;if(!n||!r)return!1;let i=[];for(let e=0;e<r.edgeIds.length;e++)r.edgeIds[e]===t&&i.push([r.edges[e*6],r.edges[e*6+1],r.edges[e*6+2]],[r.edges[e*6+3],r.edges[e*6+4],r.edges[e*6+5]]);n.group.updateMatrixWorld();let a=n.group.matrixWorld,o=this.camera.position.clone().sub(this.controls.target).normalize().transformDirection(a.clone().invert()),s=Yg(i,[o.x,o.y,o.z]);return s?(this.look(new y(...s.dir).transformDirection(a),new y(...s.center).applyMatrix4(a),s.radius*new y().setFromMatrixScale(a).x,!0),!0):!1}lookAlong(e,t,n,r){this.look(new y(...e).normalize(),new y(...t),n,!0,r?new y(...r):void 0)}zoomToPoint(e,t){let n=this.camera.position.clone().sub(this.controls.target).normalize();this.look(n,new y(...e),t,!0,this.camera.up.clone())}viewPose(){return{persp:this.camera===this.persp,pos:this.camera.position.clone(),target:this.controls.target.clone(),up:this.camera.up.clone(),zoom:this.ortho.zoom}}setViewPose(e){return e.persp===(this.camera===this.persp)&&(this.tween={from:this.camera.position.clone(),to:e.pos.clone(),tFrom:this.controls.target.clone(),tTo:e.target.clone(),upFrom:this.camera.up.clone(),upTo:e.up.clone(),zFrom:this.ortho.zoom,zTo:e.zoom,start:performance.now()},this.render(),!0)}orbitBy(e,t){let n=this.controls.target,r=this.camera.position.clone().sub(n),i=new Dr().setFromVector3(new y(r.x,r.z,-r.y));i.theta-=e*.01,i.phi=Math.max(.01,Math.min(Math.PI-.01,i.phi-t*.01));let a=new y().setFromSpherical(i);this.camera.position.copy(n).add(new y(a.x,-a.z,a.y)),this.camera.up.set(0,0,1),this.controls.update(),this.render()}orbitAbout(e,t,n){this.tween=null;let r=2*Math.PI*this.controls.rotateSpeed/(this.host.clientHeight||1),i=Em({position:this.camera.position,target:this.controls.target,up:this.camera.up},e,-t*r,n*r);this.camera.position.copy(i.position),this.controls.target.copy(i.target),this.camera.up.copy(i.up),this.controls.update(),this.render()}showPivot(e){this.setLabel(`nav:pivot`,e,``,`pivot-mark`),this.render()}partCentre(e,t,n,r=[]){let i=this.bodyViews.get(e),a=i?.data;if(!i||!a)return null;let o=new Set(n),s=new Rr,c=new y,l=(e,t)=>s.expandByPoint(c.set(e[t],e[t+1],e[t+2]));if(t===`face`){for(let e=0;e<a.faceIds.length;e++)if(o.has(a.faceIds[e]))for(let t=0;t<3;t++)l(a.positions,a.indices[e*3+t]*3)}else if(t===`edge`)for(let e=0;e<a.edgeIds.length;e++)o.has(a.edgeIds[e])&&(l(a.edges,e*6),l(a.edges,e*6+3));else for(let e of n)r[e]&&l(r[e],0);return s.isEmpty()?null:(i.group.updateMatrixWorld(),s.getCenter(new y).applyMatrix4(i.group.matrixWorld))}panBy(e,t){let n=this.pixel();this.camera.updateMatrixWorld();let r=new y().setFromMatrixColumn(this.camera.matrixWorld,0),i=new y().setFromMatrixColumn(this.camera.matrixWorld,1),a=r.multiplyScalar(-e*n).addScaledVector(i,t*n);this.camera.position.add(a),this.controls.target.add(a),this.controls.update(),this.render()}gridArgs=null;setGrid(e,t,n,r,i,a=5,o=!1,s=1,c=``,l=0){this.gridArgs={w:e,h:t,cell:n,major:Math.max(1,Math.round(a)),auto:o,ground:!i,unit:s,unitLabel:c},this.applyZoomLimits(),this.buildGrid(),this.grid.visible=r,i?this.grid.matrix.copy(p_(i)):this.grid.matrix.makeTranslation(0,0,l),this.grid.matrixAutoUpdate=!1,this.grid.matrixWorldNeedsUpdate=!0}autoCell(){let e=this.pixel(),t=[1,5,10,20,50,100,200,500,1e3,2e3,5e3,1e4,2e4,5e4],n=this.gridArgs,r=Math.max(e*18,Math.max(n.w,n.h)/400);return t.find(e=>e>=r)??t[t.length-1]}setTheme(e){e!==this.dark&&(this.dark=e,this.scene.background.set(e?`#3d3d3d`:`#eceef1`),u_.sketch=e?`#6fa8ff`:`#1d5fbf`,u_.sketchActive=e?`#a9ccff`:`#0d3f8f`,u_.sketchDim=e?`#5cc27a`:`#2b7a3d`,this.gridKey=``,this.buildGrid(),this.render())}buildGrid(){let e=this.gridArgs;if(!e)return;let{w:t,h:n,major:r,ground:i}=e,a=e.auto?this.autoCell():e.cell,o=`${t}:${n}:${a}:${r}:${i}:${e.unit}:${this.dark}`;if(o===this.gridKey)return;this.gridKey=o;for(let e of[...this.grid.children])this.grid.remove(e),e.traverse(e=>{e.geometry?.dispose();let t=e.material;t?.map?.dispose(),t?.dispose?.()});let s=[],c=[],l={x:[],y:[]},u=Math.ceil(-t/2/a-1e-9),f=Math.floor(t/2/a+1e-9),p=Math.ceil(-n/2/a-1e-9),m=Math.floor(n/2/a+1e-9);for(let e=u;e<=f;e++){let t=e*a,i=e%r===0;(i?c:s).push(t,-n/2,0,t,n/2,0),i&&l.x.push(t)}for(let e=p;e<=m;e++){let n=e*a,i=e%r===0;(i?c:s).push(-t/2,n,0,t/2,n,0),i&&l.y.push(n)}let h=(e,t,n)=>{let r=new P;return r.setAttribute(`position`,new Gn(e,3)),new ke(r,new d({color:t,transparent:!0,opacity:n,depthWrite:!1}))},g=this.dark;if(this.grid.add(h(s,g?`#6e767c`:`#8fd2ea`,g?.35:.22),h(c,g?`#8e9aa2`:`#5bbde0`,g?.55:.45)),this.grid.add(h([-t/2,-n/2,0,t/2,-n/2,0,t/2,-n/2,0,t/2,n/2,0,t/2,n/2,0,-t/2,n/2,0,-t/2,n/2,0,-t/2,-n/2,0],g?`#7fb2cc`:`#45b0d8`,.75)),!i)return;let _=new z(new Bt(t,n),new ct({color:g?`#4a4f54`:`#d6eef7`,transparent:!0,opacity:.55,depthWrite:!1,side:2}));_.position.z=-Math.max(.01,Math.max(t,n)*2e-5),_.renderOrder=-2,_.visible=!this.plateHidden,_.name=`gridPlate`,this.grid.add(_);let v=a*r,y=Math.max(a*.35,v*.06),b=new z(new Vn(y*.65,y,40),new ct({color:`#7d848e`,transparent:!0,opacity:.85,depthWrite:!1,side:2}));b.position.z=.02,this.grid.add(b);let x=v*.16,S=t=>`${+(t/e.unit).toFixed(3)}`,C=Math.max(1,Math.ceil(Math.max(l.x.length,l.y.length)/30));if(l.x.forEach((e,t)=>{if(t%C)return;let r=this.textPlane(S(e),x);r.position.set(e,-n/2-x*.9,0),this.grid.add(r)}),l.y.forEach((e,r)=>{if(r%C||Math.abs(e+n/2)<x)return;let i=this.textPlane(S(e),x,`left`);i.position.set(t/2+x*.5,e,0),this.grid.add(i)}),e.unitLabel){let r=this.textPlane(e.unitLabel,x,`left`);r.position.set(t/2+x*.5,-n/2-x*.9,0),this.grid.add(r)}}textPlane(e,t,n=`center`){let r=document.createElement(`canvas`),i=r.getContext(`2d`);i.font=`500 48px "Malgun Gothic", "Noto Sans KR", sans-serif`,r.width=Math.ceil(i.measureText(e).width)+8,r.height=64,i.font=`500 48px "Malgun Gothic", "Noto Sans KR", sans-serif`,i.fillStyle=`#2f9fcb`,i.textBaseline=`middle`,i.fillText(e,4,r.height/2);let a=Lh(r);a.colorSpace=dr,a.anisotropy=4;let o=t*r.width/r.height,s=new Bt(o,t);s.translate(n===`left`?o/2:n===`right`?-o/2:0,0,.03);let c=new z(s,new ct({map:a,transparent:!0,depthWrite:!1,side:2}));return c.renderOrder=1,c}originPlanes=new U;originKey=``;setOriginPlanes(e,t){let n=`${e.xy}${e.yz}${e.xz}${t}${this.dark}`;if(n===this.originKey)return;this.originKey=n,this.originPlanes.parent||this.scene.add(this.originPlanes);for(let e of[...this.originPlanes.children])this.originPlanes.remove(e),e.traverse(e=>{e.geometry?.dispose(),e.material?.dispose?.()});let r=(e,n,r)=>{if(!e)return;let i=new U,a=new z(new Bt(t,t),new ct({color:n,transparent:!0,opacity:.07,side:2,depthWrite:!1})),o=new ke(new On(new Bt(t,t)),new d({color:n,transparent:!0,opacity:.6}));i.add(a,o),i.rotation.copy(r),i.renderOrder=-1,this.originPlanes.add(i)};r(e.xy,l_.ground,new xr(0,0,0)),r(e.yz,`#d9534f`,new xr(0,Math.PI/2,0)),r(e.xz,`#3c9a49`,new xr(Math.PI/2,0,0));let i=a_(e,t);if(i.length){let e=new P;e.setAttribute(`position`,new Gn(i,3)),this.originPlanes.add(new ke(e,new d({color:this.dark?`#c9d1d8`:`#4b5560`})))}this.render()}workPlanes=new U;workKey=``;setWorkPlanes(e){let t=JSON.stringify(e.map(e=>[e.id,e.name,e.size,e.matrix.elements,e.selected,e.hover]));if(t!==this.workKey){this.workKey=t,this.workPlanes.parent||this.scene.add(this.workPlanes);for(let e of[...this.workPlanes.children])this.workPlanes.remove(e),e.traverse(e=>{e.geometry?.dispose(),e.material?.dispose?.()});this.clearLabels(`wp:`);for(let t of e){let e=t.selected?`#2f6fd6`:t.hover?`#ff7a00`:`#e08a2c`,n=new U,r=new z(new Bt(t.size,t.size),new ct({color:e,transparent:!0,opacity:t.hover||t.selected?.16:.08,side:2,depthWrite:!1})),i=new ke(new On(new Bt(t.size,t.size)),new d({color:e}));n.add(r,i),n.matrixAutoUpdate=!1,n.matrix.copy(t.matrix),n.renderOrder=-1,this.workPlanes.add(n);let a=new y(-t.size/2,t.size/2,0).applyMatrix4(t.matrix);this.setLabel(`wp:${t.id}`,a,t.name,`ann`)}this.render()}}syncBodies(e,t,n,r,i,a,o){let s=new Set;this.edgeMode=r;for(let c of e.bodies){s.add(c.id);let l=this.bodyViews.get(c.id);if(!l){let e=new z(this.empty,new xt({polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,envMapIntensity:.6}));e.userData.itemId=c.id;let t=new ke(this.empty,dg(u_.edge));t.userData.itemId=c.id;let n=new U,r=new ur(new P,new qt({color:u_.edge,size:6,sizeAttenuation:!1}));r.raycast=()=>{},n.add(e,t,r),n.userData.itemId=c.id,this.bodiesRoot.add(n),l={group:n,mesh:e,edges:t,dots:r,data:null,hl:null,overlayKey:``},this.bodyViews.set(c.id,l)}let u=t[it(e,c).id]??null;if(u!==l.data){let e=l.data;if(l.data=u,l.overlayKey=``,u){let e=this.takeGeometry(u);l.mesh.geometry=e.faces,l.edges.geometry=e.edges,l.full={faces:e.faces,edges:e.edges},l.dots.geometry.dispose(),l.dots.geometry=new P().setAttribute(`position`,new Gn((u.points??[]).slice(0,u.dots??void 0).flat(),3))}else l.mesh.geometry=this.empty,l.edges.geometry=this.empty,l.full=void 0;l.lod=0,this.dropGeometry(e)}let d=n===`xray`||n===`xrayEdges`,f=En(c);lm(l.mesh.material,c.material,f,i,d);let p=!!o?.has(c.id);p&&(l.mesh.material.transparent=!0,l.mesh.material.opacity=Math.min(l.mesh.material.opacity,.15),l.mesh.material.depthWrite=!1);let m=p?.25:1;l.edges.material.opacity!==m&&(l.edges.material.opacity=m),l.edgeColor=Rt(f),fg(l.edges.material,l.allEdges||r===`all`?`all`:`sharp`),l.mesh.visible=n!==`wire`,l.edges.visible=(n===`shadedEdges`||n===`wire`||n===`xrayEdges`)&&(r!==`off`||n!==`shadedEdges`),l.want={mesh:l.mesh.visible,edges:l.edges.visible,paint:!!c.faceColors?.length},l.group.visible=c.visible&&!!u&&!a.has(c.id),nh(l.group,l.mesh,u,c,i,d),l.group.matrix.copy(p_(c)),l.group.matrixAutoUpdate=!1,l.group.matrixWorldNeedsUpdate=!0,this.applyBodyLod(l,l.lod??0,l.edgesOn??!0)}for(let[e,t]of this.bodyViews)s.has(e)||(this.bodiesRoot.remove(t.group),this.dropHighlight(t),th(t.group),t.box&&t.group.remove(t.box),t.mesh.material.dispose(),t.edges.material.dispose(),t.dots.geometry.dispose(),t.dots.material.dispose(),this.dropGeometry(t.data),this.bodyViews.delete(e))}dropHighlight(e){e.hl&&=(e.group.remove(e.hl),e.hl.traverse(e=>{let t=e.material;t instanceof Ef&&this.fatMaterials.delete(t)}),m_(e.hl),null)}fatMaterials=new Set;glowLines(e,t,n,r,i,a=!1){let o=new U;if(!e.length)return o;let s=this.host.clientWidth||1,c=this.host.clientHeight||1;for(let[l,u]of[[r,i],[n,1]]){let n=new Hf;n.setPositions(e);let r=new Ef({color:new H(t).getHex(),linewidth:l,transparent:!0,opacity:u,depthWrite:!1,depthTest:!a});r.resolution.set(s,c),this.fatMaterials.add(r);let i=new sp(n,r);i.renderOrder=a?7:6,o.add(i)}return o}syncBodyHighlights(e,t,n,r){let i=new Set(t.primary??[]),a=new Set(t.secondary??[]);this.outlineSel=[],this.outlineHover=[];for(let[t,r]of this.bodyViews)r.group.visible&&(e.has(t)?this.outlineSel.push(r.mesh):n?.bodyId===t&&this.outlineHover.push(r.mesh));let o=new Set([...t.faces??[],...t.edges??[],...t.vertices??[]].map(e=>e.bodyId));for(let[t,r]of this.bodyViews){let s=e.has(t)||i.has(t)||a.has(t)||n?.bodyId===t||o.has(t);s!==!!r.pinned&&(r.pinned=s,s&&this.applyBodyLod(r,0,!0))}for(let[s,c]of this.bodyViews){let l=i.has(s)?u_.primary:a.has(s)?u_.secondary:e.has(s)?u_.selection:null,u=n?.bodyId===s&&n.faceId==null&&n.edgeId==null&&n.vertex==null;c.mesh.material.emissive.set(l??(u?u_.hover:`#000000`));let d=e.has(s)&&!i.has(s)&&!a.has(s);c.mesh.material.emissiveIntensity=d?this.outlineOn?c_:s_:l?.3:u?.05:0,c.edges.material.color.set(d||!l?c.edgeColor??u_.edge:a.has(s)?`#9b1d14`:u_.selectionEdge);let f=e.has(s)||i.has(s)||a.has(s)||o.has(s);f!==!!c.allEdges&&(c.allEdges=f,fg(c.edges.material,f||this.edgeMode===`all`?`all`:`sharp`)),a.has(s)&&(c.mesh.material.transparent=!0,c.mesh.material.opacity=.45,c.mesh.material.depthWrite=!1);let p=new Set((t.faces??[]).filter(e=>e.bodyId===s).flatMap(e=>e.ids)),m=new Set((t.edges??[]).filter(e=>e.bodyId===s).flatMap(e=>e.ids)),h=new Set((t.vertices??[]).filter(e=>e.bodyId===s).flatMap(e=>e.ids)),g=n?.bodyId===s&&n.faceId!=null?n.faceId:null,_=n?.bodyId===s&&n.edgeId!=null?n.edgeId:null,v=n?.bodyId===s&&n.vertex!=null?n.vertex:null,y=`${[...p].join(`,`)}|${[...m].join(`,`)}|${[...h].join(`,`)}|${g}|${_}|${v}|${this.host.clientWidth}x${this.host.clientHeight}`;if(y===c.overlayKey||!c.data)continue;c.overlayKey=y,this.dropHighlight(c);let b=c.data,x=new U,S=(e,t,n)=>new z(x_(b,e),new ct({color:t,transparent:!0,opacity:n,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,depthWrite:!1}));p.size&&(x.add(S(p,O_.faceSel,.6)),x.add(this.glowLines([...p].flatMap(e=>w_(b,e)),O_.glow,2.5,9,.35))),g!=null&&!p.has(g)&&(x.add(S(new Set([g]),O_.faceHover,.45)),x.add(this.glowLines(w_(b,g),O_.glowSoft,2,8,.3))),m.size&&x.add(this.glowLines(S_(b,m),O_.glow,3.5,11,.4)),_!=null&&!m.has(_)&&x.add(this.glowLines(S_(b,new Set([_])),O_.glowSoft,3,10,.35));let C=r?.(s)??[],w=(e,t,n)=>{let r=e.map(e=>C[e]).filter(Boolean);if(!r.length)return null;let i=new P;i.setAttribute(`position`,new Gn(r.flat(),3));let a=new ur(i,new qt({color:t,size:n*2.4,sizeAttenuation:!1,map:D_(),transparent:!0,opacity:.35,depthTest:!1})),o=new ur(i.clone(),new qt({color:t,size:n,sizeAttenuation:!1,map:D_(),transparent:!0,depthTest:!1}));a.renderOrder=7,o.renderOrder=8;let s=new U;return s.add(a,o),s},T=w([...h],O_.vertex,11);if(T&&x.add(T),v!=null&&!h.has(v)){let e=w([v],O_.vertexHover,10);e&&x.add(e)}x.children.length&&(c.hl=x,c.group.add(x))}}syncSketches(e,t,n,r,i,a,o,s,c,l,u){let f=new Set,p=this.pixel()*9;for(let m of e.sketches){f.add(m.id);let e=this.sketchViews.get(m.id);if(!e){let t=new U,n=new ke(new P,new d({color:u_.sketch,depthTest:!0}));n.userData.itemId=m.id;let r=new ke(new P,new d({color:u_.sketchSel,depthTest:!1}));r.renderOrder=6;let i=new ke(new P,new d({color:u_.sketchDim,depthTest:!1}));i.renderOrder=6;let a=new U,o=new z(new Bt(1,1),new ct({transparent:!0,opacity:.06,side:2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));o.renderOrder=1,t.add(o,a,n,r,i),this.sketchRoot.add(t),e={group:t,fill:o,lines:n,overlay:r,regions:a,dims:i,key:null,overlayKey:``,regionKey:null},this.sketchViews.set(m.id,e)}let h=p*.45,g=e.mark==null||Math.abs(e.mark-h)>h*.3;if(e.key!==m.entities||e.styleKey!==m.lineStyle||g&&m.entities.some(e=>e.t===`point`)){e.key=m.entities,e.styleKey=m.lineStyle,e.mark=h,e.styled&&fh(e.styled,this.fatMaterials);let t=uh(m.entities,m.lineStyle,e=>k_(e,h),this.canvasSize());e.styled=t.group;for(let e of ph(t.group))this.fatMaterials.add(e);e.lines.add(t.group),e.lines.geometry.dispose(),e.lines.geometry=A_(t.plain),e.overlayKey=``}let _=n.has(m.id),v=t===m.id;if(e.fill.visible=v,v){e.boundsCache?.entities!==m.entities&&(e.boundsCache={entities:m.entities,box:o_(m)});let t=e.boundsCache.box,n=Math.max((t[1][0]-t[0][0])*.15,(t[1][1]-t[0][1])*.15,this.pixel()*40);e.fill.scale.set(t[1][0]-t[0][0]+n*2,t[1][1]-t[0][1]+n*2,1),e.fill.position.set((t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2,0),e.fill.material.color.set(m.plane?l_.work:m.host?l_.face:l_.ground),e.fill.material.opacity=.16}let b=s.some(e=>e.sketchId===m.id),x=_&&!v&&!b;e.lines.material.color.set(x?u_.selection:v?u_.sketchActive:u_.sketch),e.lines.material.depthTest=!v,e.lines.renderOrder=v?4:0,e.lines.material.transparent!==v&&(e.lines.material.transparent=v,e.lines.material.needsUpdate=!0),e.styled&&dh(e.styled,v?u_.sketchActive:u_.sketch,x?u_.selection:null,this.dark,!v,v?4:0);let S=new Set([...r].filter(e=>m.entities.some(t=>t.id===e))),C=i?.sketchId===m.id?i.entityId:null,w=C!=null&&!!m.text&&!v,T=`${[...S].join(`,`)}|${C}|${w}|${x}|${m.entities.length}|${this.host.clientWidth}x${this.host.clientHeight}`;if(T!==e.overlayKey||e.overlayFor!==m.entities){e.overlayKey=T,e.overlayFor=m.entities,e.overlay.geometry.dispose(),e.overlay.geometry=new P;let t=e.mark??h,n=[],r=[];for(let e of m.entities)x||S.has(e.id)?n.push(...k_(e,t)):(w||e.id===C)&&r.push(...k_(e,t));e.overlayFat&&fh(e.overlayFat,this.fatMaterials);let i=new U;n.length&&i.add(this.glowLines(h_(n),O_.glow,2.5,9,.35,!0)),r.length&&i.add(this.glowLines(h_(r),O_.glowSoft,2,8,.32,!0)),e.overlayFat=i,e.group.add(i)}let E=e.dimCache;if(!E||E.dims!==m.dims||E.entities!==m.entities||E.arrow!==p){let t=[],n=[];for(let e of m.dims){let r=Gr(e,m.entities,l,p);r&&(t.push(...r.lines),n.push({id:e.id,at:r.label,text:r.text}))}e.dims.geometry.dispose(),e.dims.geometry=A_(t),E=e.dimCache={dims:m.dims,entities:m.entities,arrow:p,labels:n}}let D=p_(m),O=m.visible&&!u.has(m.id);for(let e of E.labels)this.setLabel(`dim:${m.id}:${e.id}`,new y(e.at[0],e.at[1],0).applyMatrix4(D),e.text,`dim${e.text.includes(`
`)?` arc`:``} ${r.has(e.id)?`sel`:``}`,O);let k=a[m.id]?.data,A=o.has(m.id)&&k,j=A?`${k.length}:${s.filter(e=>e.sketchId===m.id).map(e=>e.index).join(`,`)}:${c?.sketchId===m.id?c.index:-1}:${a[m.id]?`y`:`n`}:${v}`:null;if(j!==e.regionKey||A&&e.regions.userData.data!==k){e.regionKey=j,e.regions.userData.data=k;for(let t of[...e.regions.children]){if(t instanceof U){fh(t,this.fatMaterials);continue}t.geometry.dispose(),t.material.dispose()}if(e.regions.clear(),A){let t=m.text?Wi(m,zn(m),k):null,n=[],r=(t,n,r)=>{let i=new Float32Array(t.length/2*3);for(let e=0;e<t.length/2;e++)i[e*3]=t[e*2],i[e*3+1]=t[e*2+1];let a=new P;a.setAttribute(`position`,new at(i,3));let o=new z(a,new ct({color:n,transparent:!0,opacity:r,side:2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));o.renderOrder=3,e.regions.add(o)};k.forEach((i,a)=>{let o=s.some(e=>e.sketchId===m.id&&e.index===a),l=c?.sketchId===m.id&&c.index===a;if(!t||t[a]||o||l){if(o||l){r(i.tris,o?u_.regionPicked:u_.hover,o?.55:.45);let t=g_(Lg(i.tris));e.regions.add(o?this.glowLines(t,O_.glow,2.5,9,.35,!0):this.glowLines(t,O_.glowSoft,2,8,.3,!0));return}for(let e=0;e<i.tris.length;e++)n.push(i.tris[e])}}),n.length&&r(n,t?u_.region:u_.regionFill,t?.32:v?.26:.16)}}e.want=m.visible&&!u.has(m.id),e.pinned=v||_||S.size>0||C!=null,e.pinned&&(e.lodHidden=e.dimsHidden=!1),e.group.visible=e.want&&!e.lodHidden,e.dims.visible=!e.dimsHidden,e.group.matrix.copy(D),e.group.matrixAutoUpdate=!1,e.group.matrixWorldNeedsUpdate=!0}for(let[e,t]of this.sketchViews)if(!f.has(e)){this.sketchRoot.remove(t.group),t.styled&&fh(t.styled,this.fatMaterials),t.overlayFat&&fh(t.overlayFat,this.fatMaterials);for(let e of[...t.regions.children])e instanceof U&&fh(e,this.fatMaterials);m_(t.group),this.sketchViews.delete(e)}for(let t of[...this.labelData.keys()]){if(!t.startsWith(`dim:`))continue;let[,n,r]=t.split(`:`),i=e.sketches.find(e=>e.id===n);(!i||!i.dims.some(e=>e.id===r))&&this.setLabel(t,null)}}prevLines=null;prevGuides=null;prevMesh=null;localM=new M;setPreview(e,t,n,r,i,a,o){let s=e?p_(e):null;if(s&&t.length?(this.prevLines||(this.prevLines=new ke(new P,new d({color:u_.preview,depthTest:!1,transparent:!0})),this.prevLines.renderOrder=8,this.prevLines.matrixAutoUpdate=!1,this.previewRoot.add(this.prevLines)),__(this.prevLines,h_(t)),this.prevLines.matrix.copy(s),this.prevLines.matrixWorldNeedsUpdate=!0,this.prevLines.visible=!0):this.prevLines&&(this.prevLines.visible=!1),s&&n.length){this.prevGuides||(this.prevGuides=new ke(new P,new xn({color:`#8a6d3b`,depthTest:!1,transparent:!0})),this.prevGuides.renderOrder=8,this.prevGuides.matrixAutoUpdate=!1,this.previewRoot.add(this.prevGuides));let e=this.prevGuides,t=h_(n),r=e.geometry.getAttribute(`position`);(!r||r.array.length!==t.length||t.some((e,t)=>r.array[t]!==e))&&(e.geometry.dispose(),e.geometry=new P().setAttribute(`position`,new at(t,3)),e.computeLineDistances()),e.material.dashSize=this.pixel()*6,e.material.gapSize=this.pixel()*4,e.matrix.copy(s),e.matrixWorldNeedsUpdate=!0,e.visible=!0}else this.prevGuides&&(this.prevGuides.visible=!1);let c=this.prevMesh;if(r){if(!c){let e=new z(this.empty,new mt({transparent:!0,opacity:.55,depthWrite:!1,roughness:.5})),t=new ke(this.empty,new d),n=new U;n.add(e,t),n.matrixAutoUpdate=!1,this.previewRoot.add(n),c=this.prevMesh={data:null,group:n,mesh:e,edges:t}}if(c.data!==r){let e=this.takeGeometry(r);c.mesh.geometry=e.faces,c.edges.geometry=e.edges,this.dropGeometry(c.data),c.data=r}c.mesh.material.color.set(a),c.edges.material.color.set(a),c.group.matrix.copy(p_(i??{position:[0,0,0],rotation:[0,0,0]})),o&&c.group.matrix.multiply(this.localM.fromArray(o)),c.group.matrixWorldNeedsUpdate=!0,c.group.visible=!0}else c&&(c.group.visible=!1,c.mesh.geometry=this.empty,c.edges.geometry=this.empty,this.dropGeometry(c.data),c.data=null);this.render()}ghostKey=``;ghostData=[];setGhosts(e){let t=e.map(e=>`${b_(e.data)}:${e.placement.position.join(`,`)}:${e.placement.rotation.join(`,`)}:${e.color}`).join(`|`);if(t===this.ghostKey)return;this.ghostKey=t;for(let e of[...this.ghostRoot.children])this.ghostRoot.remove(e),e.material.dispose();let n=this.ghostData;this.ghostData=[];for(let t of e){let e=this.takeGeometry(t.data);this.ghostData.push(t.data);let n=new z(e.faces,new mt({color:t.color,transparent:!0,opacity:.4,depthWrite:!1}));n.matrixAutoUpdate=!1,n.matrix.copy(p_(t.placement)),this.ghostRoot.add(n)}for(let e of n)this.dropGeometry(e);this.render()}markerGroup=new U;markerKey=``;setSnapMarkers(e,t){let n=t?`${t[0]},${t[1]},${t[2]}|`:`|`;for(let t of e)n+=`${t.kind===`vertex`?`v`:`o`}${t.p[0]},${t.p[1]},${t.p[2]};`;if(n===this.markerKey)return;this.markerKey=n,this.markerGroup.parent||this.scene.add(this.markerGroup);for(let e of[...this.markerGroup.children])this.markerGroup.remove(e),e.geometry.dispose(),e.material.dispose();let r=(e,t,n)=>{if(!e.length)return;let r=new P;r.setAttribute(`position`,new Gn(e.flat(),3));let i=new ur(r,new qt({size:t,sizeAttenuation:!1,color:n,depthTest:!1}));i.renderOrder=30,this.markerGroup.add(i)},i=e.filter(e=>e.kind===`vertex`).map(e=>e.p),a=e.filter(e=>e.kind!==`vertex`).map(e=>e.p);r([...i,...a],10,`#3a4049`),r(i,7,`#ffffff`),r(a,7,`#f2c230`),t&&(r([t],14,`#3a4049`),r([t],11,O_.vertex)),this.render()}handleGroup=new U;handleTex=new Map;handleTexture(e){let t=this.handleTex.get(e);if(!t){let n=document.createElement(`canvas`);n.width=n.height=32;let r=n.getContext(`2d`);r.fillStyle=`#3a4049`,r.fillRect(4,4,24,24),r.fillStyle=e,r.fillRect(7,7,18,18),t=Lh(n),t.colorSpace=dr,this.handleTex.set(e,t)}return t}setHandles(e){this.handleGroup.parent||this.scene.add(this.handleGroup);for(let e of[...this.handleGroup.children])this.handleGroup.remove(e),e.material.dispose();let t=this.camera.position;for(let n of e){let e=new y(...n.p),r=this.pixel(e),i=this.camera===this.ortho?new y().subVectors(t,this.controls.target).normalize():new y().subVectors(t,e).normalize(),a=e.clone().addScaledVector(i,r*4),o=r*(n.uniform?13:12),s=this.handleTexture(n.uniform?`#ffffff`:`#f2c230`),c=new Ut(new Nr({map:s,depthTest:!1,transparent:!0,opacity:.3})),l=new Ut(new Nr({map:s,depthTest:!0,transparent:!0}));for(let e of[c,l])e.position.copy(a),e.scale.set(o,o,1),e.userData.handleId=n.id,e.userData.size=o;c.renderOrder=30,l.renderOrder=31,this.handleGroup.add(c,l)}let n=this.handleLit;this.handleLit=null,n&&this.hoverHandle(n,!1),this.render()}handleLit=null;hoverHandle(e,t=!0){if(e!==this.handleLit){this.handleLit=e;for(let t of this.handleGroup.children){let n=t,r=e!=null&&n.userData.handleId===e,i=n.userData.size*(r?1.4:1);n.scale.set(i,i,1),n.material.color.set(r?`#ffc35c`:`#ffffff`)}t&&this.render()}}pickHandle(e,t){if(!this.handleGroup.children.length)return null;let n=this.ray(e,t);return n.camera=this.camera,n.intersectObjects(this.handleGroup.children,!1)[0]?.object.userData.handleId??null}annotationLines=null;setAnnotationLines(e,t=`#2b5d9a`){this.annotationLines||(this.annotationLines=new ke(new P,new d({color:t,depthTest:!1})),this.annotationLines.renderOrder=9,this.scene.add(this.annotationLines)),this.annotationLines.material.color.set(t),__(this.annotationLines,e),this.annotationLines.visible=e.length>0}overlayFills=null;setOverlayFills(e,t=`#ff8a1f`){if(!e.length&&!this.overlayFills)return;this.overlayFills||(this.overlayFills=new z(new P,new ct({color:t,transparent:!0,opacity:.2,side:2,depthWrite:!1})),this.overlayFills.renderOrder=8,this.scene.add(this.overlayFills)),this.overlayFills.material.color.set(t),this.overlayFills.geometry.dispose();let n=new P;n.setAttribute(`position`,new Gn(e,3)),this.overlayFills.geometry=n,this.overlayFills.visible=e.length>0}warnFills=null;setWarnFills(e){if(!e.length&&!this.warnFills)return;this.warnFills||(this.warnFills=new U,this.warnFills.renderOrder=10,this.scene.add(this.warnFills));for(let e of[...this.warnFills.children])this.warnFills.remove(e),m_(e);let t=[],n=[];for(let{pts:r,z:i}of e){if(r.length<3)continue;let e=r.map(e=>new W(e[0],e[1]));for(let[n,a,o]of Fn.triangulateShape(e,[]))for(let e of[n,a,o])t.push(r[e][0],r[e][1],i);r.forEach((e,t)=>{let a=r[(t+1)%r.length];n.push(e[0],e[1],i,a[0],a[1],i)})}if(t.length){let e=new P;e.setAttribute(`position`,new Gn(t,3));let n=new z(e,new ct({color:`#e0483e`,transparent:!0,opacity:.45,side:2,depthTest:!1,depthWrite:!1}));n.renderOrder=10,this.warnFills.add(n)}if(n.length){let e=new P;e.setAttribute(`position`,new Gn(n,3));let t=new ke(e,new d({color:`#b3261e`,depthTest:!1}));t.renderOrder=11,this.warnFills.add(t)}this.warnFills.visible=e.length>0}toScreen(e){let t=new y(...e).project(this.camera);return[(t.x+1)/2*this.host.clientWidth,(1-t.y)/2*this.host.clientHeight]}dimGroup=new U;setDimInfo(e,t){this.dimGroup.parent||this.scene.add(this.dimGroup);for(let e of[...this.dimGroup.children])this.dimGroup.remove(e),m_(e);if(!e||e.isEmpty())return this.clearLabels(`info:`),this.render();let{min:n,max:r}=e,i=Math.max(this.pixel(e.getCenter(new y))*28,1e-6),a=[],o=(e,t)=>a.push(e.x,e.y,e.z,t.x,t.y,t.z),s=(e,t)=>{let n=t.clone().multiplyScalar(i*.25);o(e.clone().sub(n),e.clone().add(n))},c=new y(n.x,n.y-i,n.z),l=new y(r.x,n.y-i,n.z),u=new y(r.x+i,n.y,n.z),f=new y(r.x+i,r.y,n.z),p=new y(r.x+i*.7,n.y-i*.7,n.z),m=new y(r.x+i*.7,n.y-i*.7,r.z);o(c,l),o(u,f),o(p,m),o(new y(n.x,n.y,n.z),c),o(new y(r.x,n.y,n.z),l),o(new y(r.x,n.y,n.z),u),o(new y(r.x,r.y,n.z),f);for(let e of[c,l])s(e,new y(0,1,0));for(let e of[u,f])s(e,new y(1,0,0));for(let e of[p,m])s(e,new y(1,-1,0).normalize());let h=new P;h.setAttribute(`position`,new Gn(a,3));let g=new ke(h,new d({color:`#3a4049`,depthTest:!1}));g.renderOrder=7,this.dimGroup.add(g);let _=e.getSize(new y);this.setLabel(`info:x`,c.clone().lerp(l,.5),t(_.x),`vl-info`),this.setLabel(`info:y`,u.clone().lerp(f,.5),t(_.y),`vl-info`),this.setLabel(`info:z`,p.clone().lerp(m,.5),t(_.z),`vl-info`),this.render()}setLabel(e,t,n=``,r=``,i=!0){if(!t||!i){this.labelData.delete(e);let t=this.labelNodes.get(e);t&&(t.remove(),this.labelNodes.delete(e),this.labelShown.delete(e));return}this.labelData.set(e,{world:t,text:n,cls:r})}clearLabels(e,t){for(let n of[...this.labelData.keys()])n.startsWith(e)&&!t?.has(n)&&this.setLabel(n,null)}placeLabels(){let e=this.host.clientWidth,t=this.host.clientHeight,n=new y;for(let[r,i]of this.labelData){let a=this.labelNodes.get(r),o=this.labelShown.get(r);(!a||!o)&&(a=document.createElement(`div`),this.labels.appendChild(a),this.labelNodes.set(r,a),o={cls:``,text:``,on:!0,x:NaN,y:NaN},this.labelShown.set(r,o)),n.copy(i.world).project(this.camera);let s=n.z<1&&n.z>-1&&!(this.dimsOff.size&&r.startsWith(`dim:`)&&this.dimsOff.has(r.split(`:`)[1]));s!==o.on&&(a.style.display=s?``:`none`,o.on=s);let c=`vlabel ${i.cls}`;if(c!==o.cls&&(a.className=o.cls=c),i.text!==o.text&&(a.textContent=o.text=i.text),!s)continue;let l=Math.round((n.x+1)/2*e*10)/10,u=Math.round((1-n.y)/2*t*10)/10;(l!==o.x||u!==o.y)&&(a.style.transform=`translate(${l}px, ${u}px) translate(-50%, -50%)`,o.x=l,o.y=u)}}ndc(e,t){let n=this.renderer.domElement.getBoundingClientRect();return new W((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1)}ray(e,t){let n=new Ot;return n.setFromCamera(this.ndc(e,t),this.camera),n}pickBody(e,t,n=7){let r=this.ray(e,t).ray;if(this.pickClip&&this.pickClip.distanceToPoint(r.origin)<0){let e=r.distanceToPlane(this.pickClip);if(e===null)return null;r.origin.addScaledVector(r.direction,e)}let i=new gt,a=new M,o=new hn,s=(e,t,n)=>(t.boundingSphere||t.computeBoundingSphere(),e.group.updateMatrixWorld(),o.copy(t.boundingSphere).applyMatrix4(e.group.matrixWorld),o.radius+=n,r.intersectsSphere(o)?i.copy(r).applyMatrix4(a.copy(e.group.matrixWorld).invert()):null),c=null;for(let[e,t]of this.bodyViews){if(!t.group.visible||!(t.want?.mesh??t.mesh.visible)||!t.data||!t.full)continue;let n=s(t,t.full.faces,0);if(!n)continue;let i=Wm(qm(t.data),t.data.positions,t.data.indices,n,t.mesh.material.side);if(!i)continue;let a=i.point.applyMatrix4(t.group.matrixWorld),o=r.origin.distanceTo(a);(!c||o<c.distance)&&(c={id:e,v:t,tri:i.index,distance:o,point:a})}let l=this.pixel(c?.point),u=l*n,d=null;{let e=c?c.distance+l*4:1/0;for(let[t,n]of this.bodyViews){if(!n.group.visible||!n.data||!n.full)continue;let r=n.data.indices.length?u:Math.max(u,l*7);if(!(r>0))continue;let i=s(n,n.full.edges,r);if(!i)continue;let a=Gm(Jm(n.data),n.data.edges,i,r,e);a&&(!d||a.distance<d.distance)&&(d={id:t,v:n,seg:a.index,distance:a.distance,point:a.point.applyMatrix4(n.group.matrixWorld)})}}if(d){let e=d.v.data;return{itemId:d.id,point:d.point,edgeId:e.edgeIds[d.seg],faceId:c?.id===d.id?e.faceIds[c.tri]:void 0}}if(!c)return null;let f=c.v.data,p=f.positions,m=e=>{let t=f.indices[c.tri*3+e]*3;return new y(p[t],p[t+1],p[t+2])},h=w.getNormal(m(0),m(1),m(2),new y).transformDirection(c.v.group.matrixWorld);return{itemId:c.id,point:c.point,faceId:f.faceIds[c.tri],normal:h}}planePoint(e,t,n){let r=this.ray(e,t),i=p_(n),a=new y(0,0,1).transformDirection(i),o=new yn().setFromNormalAndCoplanarPoint(a,new y(...n.position)),s=new y;if(!r.ray.intersectPlane(o,s))return null;let c=s.clone().applyMatrix4(i.clone().invert());return{world:s,local:[c.x,c.y]}}cubeRect(){return Am(this.cubeSpot.corner,this.host.clientWidth,this.host.clientHeight,this.cubeSpot.room,this.cubeSpot.size)}setCubeSpot(e,t,n=112){let r=this.cubeSpot;(r.corner!==e||r.room.left!==t.left||r.room.right!==t.right||r.size!==n)&&(this.cubeSpot={corner:e,room:{...t},size:n},this.cubeHover.visible=!1,this.render())}inCube(e,t){let n=this.renderer.domElement.getBoundingClientRect(),r=this.cubeRect(),i=e-n.left-r.x,a=t-n.top-r.y;return i>=0&&a>=0&&i<=r.s&&a<=r.s}hideCubeHover(){this.cubeHover.visible&&(this.cubeHover.visible=!1,this.render())}pickCube(e,t,n=!1){let r=this.renderer.domElement.getBoundingClientRect(),i=this.cubeRect(),a=e-r.left-i.x,o=t-r.top-i.y;if(a<0||o<0||a>i.s||o>i.s)return this.cubeHover.visible&&(this.cubeHover.visible=!1,this.render()),null;let s=new Ot,c=vg(i,this.cube.frustum),l=a+i.x-c.x,u=o+i.y-c.y;s.setFromCamera(new W(l/c.s*2-1,-(u/c.s)*2+1),this.cubeCamera);let d=s.intersectObject(this.cubeMesh,!1)[0];if(!d)return this.cubeHover.visible=!1,this.render(),null;let f=d.point,p=e=>e>.5-.17?1:e<-.5+.17?-1:0,m=new y(p(f.x),p(f.y),p(f.z));return this.cubeHover.visible=!0,this.cubeHover.position.set(m.x*.42,m.y*.42,m.z*.42),this.cubeHover.scale.set(m.x?.5:1.9,m.y?.5:1.9,m.z?.5:1.9),this.render(),n?m:m.lengthSq()?m.normalize():null}quality=new cr(Kn(`web`,`auto`));edgeMode=`sharp`;outlineOn=!0;unitBox=new v(1,1,1);lastCam={m:new M,zoom:0,cam:null};lodSphere=new hn;lodPoint=new y;dimsOff=new Set;setDrawQuality(e,t){this.quality.auto.setProfile(Kn(e,t)),this.render()}cameraMoved(){let e=this.camera;e.updateMatrixWorld();let t=this.lastCam,n=e===this.ortho?this.ortho.zoom:1,r=t.cam!==e||t.zoom!==n||!t.m.equals(e.matrixWorld);return t.cam=e,t.zoom=n,t.m.copy(e.matrixWorld),r}applyBodyLod(e,t,n){e.lod=t,e.edgesOn=n;let r=e.want;if(!r||!e.full||!e.data)return;(e.pinned||r.paint)&&(t=0,n=!0),t===2&&!r.mesh&&(t=1);let i=t===1?this.coarseGeometry(e.data):null;if(e.mesh.geometry=i?i.faces:e.full.faces,sm(e.mesh.material)&&om(e.mesh.geometry),e.edges.geometry=i?i.edges:e.full.edges,e.mesh.visible=r.mesh&&t<=1,e.edges.visible=r.edges&&t<=1&&n,e.dots.visible=t===0,t===2){if(e.box||(e.box=new z(this.unitBox,e.mesh.material),e.box.raycast=()=>{},e.group.add(e.box)),e.box.userData.data!==e.data){let[t,n]=e.data.bbox;e.box.position.set((t[0]+n[0])/2,(t[1]+n[1])/2,(t[2]+n[2])/2),e.box.scale.set(Math.max(.001,n[0]-t[0]),Math.max(.001,n[1]-t[1]),Math.max(.001,n[2]-t[2])),e.box.userData.data=e.data}e.box.visible=!0}else e.box&&(e.box.visible=!1)}updateLod(e){let t=this.quality.profile,n={full:0,coarse:0,box:0,hidden:0},r=this.lodSphere;for(let i of this.bodyViews.values()){let a=i.full?.faces.boundingSphere;if(!i.group.visible||!a)continue;r.copy(a).applyMatrix4(i.group.matrix);let o=2*r.radius/this.pixel(r.center),s=i.pinned||i.want?.paint,c=s?0:Qt(o,t,e,i.lod??0),l=s||Sr(o,t,e,i.edgesOn??!0);(c!==i.lod||l!==i.edgesOn)&&this.applyBodyLod(i,c,l),n[c===0?`full`:c===1?`coarse`:c===2?`box`:`hidden`]++}De.lod=n,this.dimsOff.clear();for(let[n,r]of this.sketchViews){let i=r.boundsCache?.box;if(!r.want||!i)continue;let a=!1,o=!1;if(!r.pinned){let n=this.lodPoint.set((i[0][0]+i[1][0])/2,(i[0][1]+i[1][1])/2,0).applyMatrix4(r.group.matrix),s=Math.max(i[1][0]-i[0][0],i[1][1]-i[0][1])/this.pixel(n);a=t.sketchPx>0&&s<t.sketchPx*e*(r.lodHidden?1.2:1),o=a||t.dimPx>0&&s<t.dimPx*e*(r.dimsHidden?1.2:1)}a!==!!r.lodHidden&&(r.lodHidden=a,r.group.visible=!a),o!==!!r.dimsHidden&&(r.dimsHidden=o,r.dims.visible=!o),o&&this.dimsOff.add(n)}}setOutline(e){if(e!==this.outlineOn){this.outlineOn=e;for(let t of this.outlineSel){let n=t.material;(n.emissiveIntensity===c_||n.emissiveIntensity===s_)&&(n.emissiveIntensity=e?c_:s_)}}}applyQuality(e){let t=this.renderer,n=this.quality.frame(performance.now(),this.cameraMoved());if(n.sample!=null&&De.frameMs.push(n.sample),this.fxScene)return{moving:!1};let r=e?0:n.level;De.level=r;let i=Gt[r],a=cn(window.devicePixelRatio,this.quality.profile,i);return t.getPixelRatio()!==a&&t.setPixelRatio(a),this.setOutline(i.outline),t.shadowMap.autoUpdate=e||!n.moving,this.updateLod(i.lodScale),{moving:!e&&n.moving}}render(){this.frame||this.disposed||(this.frame=requestAnimationFrame(()=>{this.frame=0,this.draw()}))}draw(e=!1){if(this.disposed)return;let t=this.renderer.getSize(new W);if(this.host.clientWidth&&this.host.clientHeight&&(t.x!==this.host.clientWidth||t.y!==this.host.clientHeight)&&this.applySize(),this.tween){let e=Math.min(1,(performance.now()-this.tween.start)/260),t=e<.5?2*e*e:1-(-2*e+2)**2/2;this.camera.position.lerpVectors(this.tween.from,this.tween.to,t),this.controls.target.lerpVectors(this.tween.tFrom,this.tween.tTo,t),this.camera.up.lerpVectors(this.tween.upFrom,this.tween.upTo,t).normalize(),this.camera===this.ortho&&(this.ortho.zoom=this.tween.zFrom+(this.tween.zTo-this.tween.zFrom)*t,this.ortho.updateProjectionMatrix()),this.camera.lookAt(this.controls.target),e>=1?(this.tween=null,this.controls.update()):this.render()}this.gizmo.visible&&this.gizmo.scale.setScalar(T(this.pixel(this.gizmo.position),this.gizmoSize)),this.valueHandle.group.visible&&this.valueHandle.update(e=>this.pixel(e));for(let e of this.moreHandles)e.group.visible&&e.update(e=>this.pixel(e));let n=1/this.pixel();for(let e of this.fatMaterials)sh(e)&&(e.dashScale=n);this.gridArgs?.auto&&this.buildGrid(),this.fitDepthRange();let r=this.applyQuality(e),i=this.host.clientWidth,a=this.host.clientHeight;ug(this.camera,a*this.renderer.getPixelRatio()),this.renderer.setViewport(0,0,i,a),this.renderer.setScissorTest(!1),this.renderer.clear(),this.fxScene?this.renderer.render(this.fxScene,this.camera):this.outlineOn&&(this.outlineSel.length||this.outlineHover.length)?this.renderOutlined(i,a):this.renderer.render(this.scene,this.camera);let o=this.cube.frustum,s=vg(this.cubeRect(),o),c=this.camera.position.clone().sub(this.controls.target).normalize();this.cubeCamera.position.copy(c.multiplyScalar(3)),this.cubeCamera.up.copy(this.camera.up),this.cubeCamera.lookAt(0,0,0),this.cubeCamera.left=-o,this.cubeCamera.right=o,this.cubeCamera.top=o,this.cubeCamera.bottom=-o,this.cubeCamera.updateProjectionMatrix(),this.renderer.setScissorTest(!0),this.renderer.setScissor(s.x,a-s.y-s.s,s.s,s.s),this.renderer.setViewport(s.x,a-s.y-s.s,s.s,s.s),this.renderer.clearDepth(),this.renderer.render(this.cubeScene,this.cubeCamera),this.renderer.setScissorTest(!1),this.placeLabels(),this.onRender?.(),r.moving&&this.render()}screenshot(){this.draw(!0);let e=this.renderer.domElement,t=document.createElement(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);if(!n)return e.toDataURL(`image/png`);n.drawImage(e,0,0);let r=e.getBoundingClientRect(),i=e.width/(r.width||1);for(let[e,t]of this.labelNodes){if(!this.labelShown.get(e)?.on||!t.textContent)continue;let a=t.getBoundingClientRect();if(!a.width||!a.height)continue;let o=getComputedStyle(t),s=(a.left-r.left)*i,c=(a.top-r.top)*i,l=a.width*i,u=a.height*i;n.beginPath(),typeof n.roundRect==`function`?n.roundRect(s,c,l,u,(parseFloat(o.borderTopLeftRadius)||0)*i):n.rect(s,c,l,u),n.fillStyle=o.backgroundColor,n.fill();let d=parseFloat(o.borderTopWidth)||0;d>0&&o.borderTopStyle!==`none`&&(n.lineWidth=d*i,n.strokeStyle=o.borderTopColor,n.stroke()),n.fillStyle=o.color,n.font=`${o.fontStyle} ${o.fontWeight} ${(parseFloat(o.fontSize)||12)*i}px ${o.fontFamily}`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(t.textContent,s+l/2,c+u/2)}return this.siteCredit?.textContent&&this.siteCredit.style.display!==`none`&&(n.font=`${11*i}px sans-serif`,n.textAlign=`left`,n.textBaseline=`bottom`,n.fillStyle=`rgba(255, 255, 255, 0.75)`,n.fillRect(4*i,t.height-17*i,n.measureText(this.siteCredit.textContent).width+8*i,16*i),n.fillStyle=`#222`,n.fillText(this.siteCredit.textContent,8*i,t.height-3*i)),t.toDataURL(`image/png`)}dispose(){if(!this.disposed){this.disposed=!0,this.valueHandle.dispose();for(let e of this.moreHandles)e.dispose();this.moreHandles.length=0,cancelAnimationFrame(this.frame),this.frame=0,this.onRender=null,this.host.removeEventListener(`wheel`,this.onWheelCapture,{capture:!0}),this.host.removeEventListener(`pointerdown`,this.onPointerCapture,!0),this.renderer.domElement.removeEventListener(`webglcontextrestored`,this.onContextRestored),cg(this.controls,this.keyRoot),this.ground?.dispose(this.fatMaterials),this.ground=null,this.land?.dispose(this.fatMaterials),this.land=null;for(let e of[this.scene,this.cubeScene])m_(e,!0);for(let e of this.geo.values())e.faces.dispose(),e.edges.dispose(),e.coarse?.faces.dispose(),e.coarse?.edges.dispose();this.geo.clear(),this.unitBox.dispose(),this.empty.dispose(),this.scene.environment?.dispose(),am(),nm()===this.renderer&&tm(null);for(let e of this.handleTex.values())e.dispose();if(this.handleTex.clear(),E_?.dispose(),E_=null,this.composer){for(let e of this.composer.passes)e.dispose();this.composer.dispose(),this.composer=null}this.fatMaterials.clear(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove(),this.labelNodes.clear(),this.labelShown.clear(),this.labelData.clear(),this.bodyViews.clear(),this.sketchViews.clear()}}siteRoot=null;sitePic=``;sitePicSize=``;siteAreas=null;siteCredit=null;setSite(e,t=null,n=null,r=1){this.siteRoot||(this.siteRoot=new U,this.siteRoot.add(new U,new U),this.scene.add(this.siteRoot));let[i,a]=this.siteRoot.children,o=e?Math.max(.005,Math.max(e.w,e.h)*1e-5):0,s=e?.image??``,c=e?`${e.w}:${e.h}`:``;if((s!==this.sitePic||c!==this.sitePicSize)&&(this.sitePic=s,this.sitePicSize=c,m_(i,!0),i.clear(),e&&s)){let t=new ct({transparent:!0,depthWrite:!1,side:2,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});t.visible=!1;let n=new z(new Bt(e.w,e.h),t);n.position.z=-o,n.renderOrder=-1,i.add(n),new Ar().load(s,e=>{if(this.disposed||n.parent!==i)return e.dispose();e.colorSpace=dr,e.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),t.map=e,t.visible=!0,t.needsUpdate=!0,this.render()},void 0,()=>console.error(`[viewport] land picture could not be read`))}let l=i.children[0]?.material;l&&(l.opacity=r);let u=e?.areas??null,d=`${t}:${o}:${n}`;if(u!==this.siteAreas||a.userData.key!==d){this.siteAreas=u,a.userData.key=d,a.traverse(e=>{let t=e.material;t instanceof Ef&&this.fatMaterials.delete(t)}),m_(a),a.clear();let r=this.host.clientWidth||1,i=this.host.clientHeight||1,s=e?Math.max(e.w,e.h)/70:1;for(let e of u??[]){if(e.points.length<3)continue;let c=e.kind===`site`,l=e.id===t,d=e.id===n,f=kh(u??[],e),p=o*(c?2:3),m=new z(new un(new nn(e.points.map(e=>new W(e[0],e[1])))),new ct({color:d?Eh:f,transparent:!0,opacity:d?.95:l?.34:c?.12:.2,depthWrite:!1,side:2,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}));m.position.z=p,m.renderOrder=d?1:2;let h=[];e.points.forEach((t,n)=>{let r=e.points[(n+1)%e.points.length];h.push(t[0],t[1],p,r[0],r[1],p)});let g=new Ef({color:new H(l&&!c?`#ff7a00`:f).getHex(),linewidth:c?d?5:l?4:3:l?3.5:2,transparent:!0,opacity:.95,depthWrite:!1,dashed:c&&!d,dashSize:s,gapSize:s*.6,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-6});g.resolution.set(r,i),this.fatMaterials.add(g);let _=new sp(new Hf().setPositions(h),g);c&&!d&&_.computeLineDistances(),_.renderOrder=3,a.add(m,_)}}let f=[e?.image?e.credit??``:``,e?.terrain?.credit??``].filter(Boolean).join(` · `);f&&!this.siteCredit&&(this.siteCredit=document.createElement(`div`),this.siteCredit.className=`site-credit`,this.labels.appendChild(this.siteCredit)),this.siteCredit&&(this.siteCredit.textContent!==f&&(this.siteCredit.textContent=f),this.siteCredit.style.display=f?``:`none`)}ground=null;setGround(e,t,n,r=null,i={image:e?.image??``,opacity:1,contourOpacity:1,contourColor:`#6d5233`}){this.ground||(this.ground=new Zh(()=>this.render(),Math.min(8,this.renderer.capabilities.getMaxAnisotropy())),this.scene.add(this.ground.root));let a=!!e?.terrain;if(this.siteRoot)for(let e of this.siteRoot.children)e.visible=!a;this.plateHidden=a;for(let e of this.grid.children)e instanceof z&&e.renderOrder===-2&&(e.visible=!a);this.ground.update(e,{picked:t,contours:n,editing:r,fat:this.fatMaterials,width:this.host.clientWidth||1,height:this.host.clientHeight||1,...i})}plateHidden=!1;fitDepthRange(){if(this.fxScene)return;let e=this.ground?.bounds(),t=e?e.getBoundingSphere(new hn):null;if(this.camera===this.persp){let e=t?this.persp.position.distanceTo(t.center)+t.radius*1.5:0,n=Math.max(this.baseHeight*200,e),r=Math.max(this.baseHeight/2e3,this.persp.position.distanceTo(this.controls.target)/5e3);(n!==this.persp.far||r!==this.persp.near)&&(this.persp.far=n,this.persp.near=r,this.persp.updateProjectionMatrix())}else{let e=t?this.ortho.position.distanceTo(t.center)+t.radius*1.5:0,n=Math.max(this.baseHeight*100,e);n!==this.ortho.far&&(this.ortho.near=-n,this.ortho.far=n,this.ortho.updateProjectionMatrix())}}land=null;landView(){return this.land||(this.land=new og,this.scene.add(this.land.root)),this.land}setLandGrid(e,t,n,r){this.landView().grid(e,t,n,r,this.fatOptions())}setLandDraft(e,t,n){this.landView().draft(e,t,n,this.pixel(),this.fatOptions())}fatOptions(){return{fat:this.fatMaterials,width:this.host.clientWidth||1,height:this.host.clientHeight||1}}frameAt(e,t){let n=this.camera.position.clone().sub(this.controls.target).normalize();this.look(n,e,t,!0,this.camera.up.clone())}groundSphere(){return this.ground?.bounds()?.getBoundingSphere(new hn)??null}fxScene=null;fxRange=null;setFx(e,t=null){this.fxScene=e,this.fxRange=e?t:null,this.applyZoomLimits(),this.render()}},P_=t(()=>({picks:[]}));function F_(e,t){let n=[];for(let r of e){if(!pe(t.doc,r.sketchId))continue;let e=t.regions[r.sketchId]?.data;if(!e?.length){n.push(r);continue}let i=r.index<e.length&&Pg(e[r.index].tris,r.local)?r.index:Fg(e,r.local);i<0||n.some(e=>e.sketchId===r.sketchId&&e.index===i)||n.push(i===r.index?r:{...r,index:i})}return n}function I_(){let e=P_.getState().picks;return e.length?F_(e,yr.getState()):e}function L_(e){W_(),P_.setState({picks:e})}function R_(){return P_.getState().picks.length?(P_.setState({picks:[]}),!0):!1}function z_(e,t,n){let r=e.filter(e=>e.sketchId===t.sketchId);if(!n||r.length!==e.length)return[{...t}];let i=r.findIndex(e=>e.index===t.index);return i>=0?r.filter((e,t)=>t!==i):[...r,{...t}]}function B_(e,t){let n=yr.getState(),r=z_(I_(),e,t);n.activeSketch?n.sketchSel.length&&n.setSketchSel([]):r.length?(n.setSelection([e.sketchId]),n.sub&&n.setSub(null)):n.select(null),L_(r)}function V_(){let e=I_();return R_(),e.length?e.filter(t=>t.sketchId===e[0].sketchId):[]}function H_(e,t,n){if(!e.length)return!1;let r=e[0].sketchId;return t.doc!==n.doc&&!pe(t.doc,r)||t.sketchSel.length&&t.sketchSel!==n.sketchSel||t.sub&&t.sub!==n.sub||(t.selection!==n.selection||t.activeSketch!==n.activeSketch)&&t.activeSketch!==r&&!t.selection.includes(r)?!0:t.activeSketch!==n.activeSketch&&!!t.activeSketch&&t.activeSketch!==r}var U_=!1;function W_(){U_||(U_=!0,yr.subscribe((e,t)=>{let n=P_.getState().picks;n.length&&H_(n,e,t)&&P_.setState({picks:[]})}))}var G_=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],K_=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],q_=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],J_=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Y_=e=>Math.hypot(e[0],e[1],e[2]);function X_(e,t,n,r){let i=[];for(let a of e){let[e,o,s]=a,c=ti(Hi(o,e),Hi(s,e));if(Math.abs(c)<1e-14)continue;c<0&&([o,s]=[s,o]);let l=-1/0,u=1/0;for(let[i,a]of[[e,o],[o,s],[s,e]]){let e=Hi(a,i),o=Math.hypot(e[0],e[1]),s=ti(e,Hi(t,i))/o,c=ti(e,n)/o;if(Math.abs(c)<1e-9){s<-r&&(l=1/0);continue}let d=-s/c;c>0?l=Math.max(l,d):u=Math.min(u,d)}l<=u+r&&i.push([l,Math.max(l,u)])}if(!i.length)return null;i.sort((e,t)=>e[0]-t[0]);let a=[];for(let e of i){let t=a[a.length-1];t&&e[0]<=t[1]+r*4?t[1]=Math.max(t[1],e[1]):a.push([e[0],e[1]])}let o=a.find(([e,t])=>e<=r&&t>=-r);return o?[Math.min(0,o[0]),Math.max(0,o[1])]:null}function Z_(e,t,n){return X_(e,t,[1,0],n)!=null}function Q_(e,t,n){let r=K_(n,t),i=Y_(r);if(i<1e-12)return null;let a=q_(r,1/i),o=Math.max(0,Math.min(i,J_(K_(e,t),a)));return o>i/2?{dir:q_(a,-1),lo:-(i-o),hi:o}:{dir:a,lo:-o,hi:i-o}}function $_(e,t,n){let r=K_(n,t),i=J_(r,r);return i<1e-24?t:G_(t,q_(r,Math.max(0,Math.min(1,J_(K_(e,t),r)/i))))}function ev(e,t,n=6){let r=Math.hypot(e[0],e[1]);if(r<1e-12)return null;let i=[e[0]/r,e[1]/r],a=null,o=Math.cos(n*Math.PI/180);for(let e of t){let t=ki(i,e);Math.abs(t)>=o&&(o=Math.abs(t),a=t>=0?e:[-e[0],-e[1]])}return a??i}var tv=(e,t,n)=>Math.max(t,Math.min(n,e)),nv=(e,t,n)=>e>=t-1e-9&&e<=n+1e-9;function rv(e,t){let n=J(),r=F(n.doc,e),i=r&&n.meshes[it(n.doc,r).id];if(!i)return[];let a=[];for(let e=0;e<i.faceIds.length;e++)if(i.faceIds[e]===t)for(let t=0;t<3;t++){let n=i.indices[e*3+t];a.push([i.positions[n*3],i.positions[n*3+1],i.positions[n*3+2]])}return a}var iv=new WeakMap;function av(e){let t=J(),n=F(t.doc,e.bodyId),r=n?t.meshes[it(t.doc,n).id]:null,i=K(e.bodyId,e.faceId);if(!n||!r||!i?.planar)return null;let a=iv.get(r);a||iv.set(r,a=new Map);let o=a.get(e.faceId),s=We(n,gr(i.sig.c,i.sig.n));if(o&&o.world.position.every((e,t)=>e===s.position[t])&&o.world.rotation.every((e,t)=>e===s.rotation[t]))return o;let c=gr(i.sig.c,i.sig.n),l=rv(e.bodyId,e.faceId).map(e=>xi(c,e)),u=[];for(let e=0;e+2<l.length;e+=3)u.push([l[e],l[e+1],l[e+2]]);let d=0;for(let e of l)d=Math.max(d,Math.hypot(e[0],e[1]));let f=[];for(let[t,n]of Wr(e.bodyId,e.faceId)){let e=Hi(xi(s,n),xi(s,t)),r=Math.hypot(e[0],e[1]);if(r<d*.04)continue;let i=[e[0]/r,e[1]/r];f.some(e=>Math.abs(ki(e,i))>.9999)||f.push(i)}let p={world:s,normal:i.worldNormal,tris:u,sides:f,eps:d*1e-6+1e-6};return a.set(e.faceId,p),p}function ov(e,t){return Di(e.ray.d,t.normal)?null:Oi(e.ray.o,e.ray.d,{origin:t.world.position,normal:t.normal})}function sv(e,t){return G_(t,q_(e.normal,-J_(K_(t,e.world.position),e.normal)))}var cv=(e,t,n)=>Math.abs(J_(K_(t,e.world.position),e.normal))<=n;function lv(e,t){let n=ei(e,t),r=F(J().doc,e);return n&&r?lr(r,n.sig.m):null}function uv(e){return e.snap3d?.kind===`mid`&&e.snap3d.edgeId!=null?{bodyId:e.snap3d.bodyId,edgeId:e.snap3d.edgeId}:e.hit?.kind===`body`&&e.hit.edgeId!=null?{bodyId:e.hit.itemId,edgeId:e.hit.edgeId}:null}function dv(e,t){let n=t*Math.PI/180,r=Math.cos(n),i=Math.sin(n);return[e[0]*r-e[1]*i,e[0]*i+e[1]*r]}var fv=e=>[-e[1],e[0]],pv=class{base=null;face=null;edge=null;way=null;aim=null;dragFrom=null;stage(){return this.base?this.way?`dist`:`way`:`base`}reset(){this.base=null,this.face=null,this.edge=null,this.way=null,this.aim=null,this.dragFrom=null}back(){if(this.way&&!this.edge)this.way=null;else if(this.base)this.reset();else return!1;return this.aim=null,!0}wants(){let e=this.stage();return e===`base`?[`point`,`edge`,`face`]:e===`way`?[`edge`,`face`]:[`point`]}pickBase(e,t,n=[]){let r=t?av(t):null;if(t&&!r)return!1;let i=e.snap3d?.point??(e.hit?.kind===`body`?e.hit.point:r?ov(e,r):null);if(!i)return!1;let a=Math.max(e.pixel*10,1e-6),o=(t,n,r)=>{let i=n?av(n):null,a=i?sv(i,t):t;if(i&&!Z_(i.tris,xi(i.world,a),Math.max(i.eps,e.pixel*2)))return!1;if(this.reset(),this.base=a,this.face=n,this.edge=r,r){let e=Q_(a,r.a,r.b);if(!e)return!1;this.way={...e,value:0,edge:r,face:n}}return!0};for(let e of n)if(Y_(K_(e,i))<=a)return o(e,t,null);let s=e.snap3d&&e.snap3d.kind!==`mid`?null:uv(e),c=s?ei(s.bodyId,s.edgeId):null;if(s&&c?.straight&&(!r||s.bodyId===t.bodyId&&cv(r,c.worldA,r.eps*10)&&cv(r,c.worldB,r.eps*10))){let n=Y_(K_(c.worldB,c.worldA)),r=n>0?tv(this.snapLen(Y_(K_($_(i,c.worldA,c.worldB),c.worldA))),0,n):0;return o(e.snap3d?e.snap3d.point:n>0?G_(c.worldA,q_(K_(c.worldB,c.worldA),r/n)):c.worldA,t,{a:c.worldA,b:c.worldB,ref:s})}if(t)return o(i,t,null);let l=e.snap3d?.faceId??(e.hit?.kind===`body`&&!e.snap3d?e.hit.faceId:void 0),u=e.snap3d?.bodyId??(e.hit?.kind===`body`?e.hit.itemId:null),d=u&&l!=null&&K(u,l)?.planar?{bodyId:u,faceId:l}:null;return!d&&!e.snap3d?!1:o(i,d,null)}aimAt(e){if(!this.base||this.way)return this.aim=null;let t=this.face;if(!t){let n=uv(e),r=n?ei(n.bodyId,n.edgeId):null;if(n&&r?.straight){let t=Math.max(e.pixel*2,1e-6);if(Y_(K_($_(this.base,r.worldA,r.worldB),this.base))<=t){let t={a:r.worldA,b:r.worldB,ref:n},i=Q_(this.base,t.a,t.b);if(i){let n=e.hit&&J_(K_(e.hit.point,this.base),i.dir)<0?-1:1,r=q_(i.dir,n),a=n>0?i.lo:-i.hi,o=n>0?i.hi:-i.lo,s=e.hit?tv(this.snapLen(J_(K_(e.hit.point,this.base),r)),a,o):0;return this.aim={dir:r,lo:a,hi:o,value:s,edge:t,face:null}}}}if(e.hit?.kind===`body`&&e.hit.faceId!=null&&K(e.hit.itemId,e.hit.faceId)?.planar){let n={bodyId:e.hit.itemId,faceId:e.hit.faceId},r=av(n);r&&cv(r,this.base,Math.max(r.eps*10,e.pixel))&&Z_(r.tris,xi(r.world,this.base),Math.max(r.eps,e.pixel*2))&&(t=n)}if(!t)return this.aim=null}let n=av(t);if(!n)return this.aim=null;let r=e.snap3d?sv(n,e.snap3d.point):ov(e,n);if(!r)return this.aim=null;let i=xi(n.world,this.base),a=ev(Hi(xi(n.world,r),i),n.sides);if(!a)return this.aim=null;let o=X_(n.tris,i,a,Math.max(n.eps,e.pixel*.5));if(!o)return this.aim=null;let s=N(n.world,[a[0],a[1],0]),c=tv(this.snapLen(ki(Hi(xi(n.world,r),i),a)),o[0],o[1]);return this.aim={dir:s,lo:o[0],hi:o[1],value:c,edge:null,face:t}}takeAim(e){let t=this.aimAt(e);return t?(this.way=t,this.face=t.face??this.face,this.aim=null,!0):!1}snapLen(e){let t=J();return Er(e,t.mode??`print`,t.snapStep())}setValue(e){if(!this.way||!Number.isFinite(e)||!nv(e,this.way.lo,this.way.hi))return!1;let t=this.way.value;return this.way.value=tv(e,this.way.lo,this.way.hi),this.way.dir0&&!this.place(this.way.side??0,this.way.turn??0)?(this.way.value=t,!1):!0}valueAt(e){let t=this.way;if(!t||!this.base)return null;let n=e.snap3d?.point??null;if(!n&&t.face){let r=av(t.face);n=r?ov(e,r):null}return!n&&e.hit?.kind===`body`&&(n=e.hit.point),n?tv(this.snapLen(J_(K_(n,this.alongFrom()),t.dir)),t.lo,t.hi):null}point(){let e=this.way;return e&&this.base?G_(this.alongFrom(),q_(e.dir,e.value)):null}alongFrom(){let e=this.way?.side??0,t=e?this.sideways():null;return t?G_(this.base,q_(t,e)):this.base}canTurn(){return!!this.way?.face&&!!this.base&&!!av(this.way.face)}onWayEdge(){let e=this.way;return!!e?.edge&&Math.abs(e.side??0)<1e-9&&Math.abs(e.turn??0)<1e-9}frame(){let e=this.way;if(!e?.face||!this.base)return null;let t=av(e.face);if(!t)return null;let n=xi(t.world,this.base),r=Hi(xi(t.world,G_(this.base,e.dir0??e.dir)),n),i=Math.hypot(r[0],r[1]);return i>1e-12?{g:t,b2:n,w0:[r[0]/i,r[1]/i]}:null}sideways(){let e=this.frame();if(!e)return null;let t=fv(dv(e.w0,this.way?.turn??0));return N(e.g.world,[t[0],t[1],0])}ensure(){let e=this.way;return!e||!this.canTurn()?!1:(e.dir0||(e.dir0=e.dir,e.lo0=e.lo,e.hi0=e.hi,e.side=0,e.turn=0,this.place(0,0)),!0)}place(e,t){let n=this.way,r=this.frame();if(!n||!r)return!1;let{g:i,b2:a,w0:o}=r,s=i.eps*10,c=dv(o,t),l=fv(c),u=Math.abs(e)<1e-9&&Math.abs(t)<1e-9,d=[a[0]+l[0]*e,a[1]+l[1]*e],f=u&&n.lo0!=null?[n.lo0,n.hi0]:X_(i.tris,d,c,s);if(!f||!nv(n.value,f[0],f[1]))return!1;let p=[a[0]+c[0]*n.value,a[1]+c[1]*n.value],m=X_(i.tris,p,l,s)??[Math.min(0,e),Math.max(0,e)];return n.side=e,n.turn=t,n.dir=N(i.world,[c[0],c[1],0]),n.lo=f[0],n.hi=f[1],n.sLo=Math.min(m[0],e),n.sHi=Math.max(m[1],e),!0}setSide(e){return!this.ensure()||!Number.isFinite(e)?!1:this.place(tv(e,this.way.sLo??e,this.way.sHi??e),this.way.turn??0)}setTurn(e){return!this.ensure()||!Number.isFinite(e)?!1:this.place(this.way.side??0,tv(e,-360,360))}moreAxes(){let e=this.way;if(!e||!this.base||!this.ensure())return[];let t=this.frame(),n=this.sideways();if(!t||!n)return[];let r=e.side??0,i=e.turn??0,a=[t.w0[0]*e.value+fv(t.w0)[0]*r,t.w0[1]*e.value+fv(t.w0)[1]*r],o=Math.hypot(a[0],a[1]),s=o>1e-9?[a[0]/o,a[1]/o]:t.w0;o<1e-9&&(o=Math.max(.001,((e.hi0??e.hi)-(e.lo0??e.lo))/4),s=t.w0);let c=N(t.g.world,[0,0,1]);return[{id:`side`,origin:G_(this.base,q_(e.dir,e.value)),dir:n,value:r,min:e.sLo??0,max:e.sHi??0},{id:`turn`,kind:`angle`,origin:this.base,dir:c,from:N(t.g.world,[s[0],s[1],0]),radius:o,value:i,min:-360,max:360}]}setMore(e,t){return e===`side`?this.setSide(t):e===`turn`&&this.setTurn(t)}aimPoint(){let e=this.aim;return e&&this.base?G_(this.base,q_(e.dir,e.value)):null}axis(){let e=this.way;return!e||!this.base?null:{origin:this.alongFrom(),dir:e.dir,value:e.value,min:e.lo,max:e.hi}}drag(e,t){let n=this.way;if(!n)return!1;this.dragFrom??=n.value;let r=n.value;if(n.value=tv(e,n.lo,n.hi),n.dir0&&!this.place(n.side??0,n.turn??0)&&(n.value=r),!t)return!1;let i=Math.abs(n.value-this.dragFrom)>1e-9;return this.dragFrom=null,i}overlay(){if(!this.base)return null;let e=[],t=[{p:this.base,text:`◇`}],n=this.way??this.aim;if(n){let r=this.way?this.alongFrom():this.base;r!==this.base&&e.push(...this.base,...r);let i=G_(r,q_(n.dir,n.lo)),a=G_(r,q_(n.dir,n.hi));e.push(...i,...a),n.hi>1e-9&&t.push({p:a,text:`+`}),n.lo<-1e-9&&t.push({p:i,text:`−`});let o=G_(r,q_(n.dir,n.value));t.push({p:o,text:`●`}),this.way||t.push({p:q_(G_(this.base,o),.5),text:qr(n.value)})}return{segments:e,labels:t}}prompt(){let e=this.stage();return G(e===`base`?`way.pBase`:e===`way`?`way.pWay`:`way.pDist`)}};function mv({of:e,how:t,options:n,onChange:r}){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`div`,{className:`trow`,children:(0,Z.jsx)(`span`,{className:`tlabel`,children:G(`way.for`,{p:e})})}),(0,Z.jsx)(Li,{value:t,options:n,onChange:r})]})}function hv({pick:e,onValue:t,extra:n,onMore:r}){let i=e.stage(),a=e.way,o=i===`base`?0:i===`way`?1:2;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`ol`,{className:`tsteps tsteps-sub`,children:[G(`way.sBase`),G(`way.sWay`),G(`way.sDist`)].map((e,t)=>(0,Z.jsxs)(`li`,{className:t===o?`now`:t<o?`done`:``,children:[(0,Z.jsx)(`b`,{children:t+1}),(0,Z.jsx)(`span`,{children:e})]},t))}),a&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(q,{label:G(`way.fromBase`),value:a.value,length:!0,min:a.lo,max:a.hi,enterDone:!0,onChange:t}),(0,Z.jsx)(`p`,{className:`hint`,children:G(`way.range`,{lo:qr(a.lo),hi:qr(a.hi)})}),e.canTurn()&&(0,Z.jsxs)(`div`,{className:`tgrid two`,children:[(0,Z.jsx)(q,{label:G(`mo.side`),value:a.side??0,length:!0,min:a.sLo??0,max:a.sHi??0,onChange:t=>{e.setSide(t)||J().toast(G(`way.offFace`),`error`),r?.()}}),(0,Z.jsx)(q,{label:G(`mo.turn`),value:a.turn??0,min:-360,max:360,step:15,suffix:`°`,onChange:t=>{e.setTurn(t)||J().toast(G(`way.offFace`),`error`),r?.()}})]})]}),n]})}function gv(){return null}var Q=(e,t,n)=>Math.min(n,Math.max(t,e)),_v=(e,t,n)=>Q(Math.round(e),t,n);function vv(e){let t=Pn[e];return[t.steps[0]*t.mmPerUnit,t.gridSize*10]}var yv=[.01,100],bv=[3,64];function xv(e,t,n,r){if(t===`n`)return bv;let[i,a]=vv(r);return e===`torus`&&t===`r`?[i,Math.max(i,n.R-i)]:e===`torus`&&t===`R`?[Math.min(a,n.r+i),a]:[i,a]}function Sv(e,t,n,r){let i=Object.keys(r),a={...r};if(!t.length)return{ok:!1,key:null,range:null};for(let e=0;e<Math.min(t.length,i.length);e++){let r=pn(t[e],n);if(r==null)return{ok:!1,key:null,range:null};a[i[e]]=i[e]===`n`?r:_n(r,n)}for(let t of i){let[r,i]=xv(e,t,a,n),o=a[t];if(!(o>=r-1e-9&&o<=i+1e-9)||t===`n`&&!Number.isInteger(o))return{ok:!1,key:t,range:[r,i]}}return{ok:!0,params:a}}function Cv(e,t){let n=new Set,r=[];for(let i of t){let t=F(e,i);if(!t)continue;let a=it(e,t).id;n.has(a)||(n.add(a),r.push(i))}return r}function wv(e,t){let n=Pn[t],r=n.steps[n.defaultStepIndex]*n.mmPerUnit,[i,a]=vv(t);return e.map(e=>Q(Math.ceil(((e>1e-6?e*1.25:n.defaultSize*1.5)-1e-9)/r)*r,i,a))}function Tv(e,t,n){let r=t===`YZ`?0:t===`XZ`?1:2,i=[0,0,0];if(i[r]=1,n===`origin`)return{origin:[0,0,0],normal:i};let a=[(e.min[0]+e.max[0])/2,(e.min[1]+e.max[1])/2,(e.min[2]+e.max[2])/2];return n===`side`&&(a[r]=e.max[r]),{origin:a,normal:i}}function Ev(e){let t=Pn[e].defaultSize;return{diameter:t/4,cbDiameter:t*.45,cbDepth:t*.15,csDiameter:t/2}}function Dv(e,t,n,r){return e===`cbore`&&!(n>t)?`cbore`:e===`csink`&&!(r>t)?`csink`:null}var Ov=[`w`,`d`,`h`];function kv(e,t){let n=jn(e.preset);return n?t.map((t,r)=>{let i=e.params[Ov[r]],a=n.ranges[Ov[r]];return!(i>0)||!a||!Number.isFinite(t)?t:Math.min(a[1]/i,Math.max(a[0]/i,t))}):t}function Av(e,t,n,r=[0,0,0]){let[i,a]=e;return[0,1,2].map(e=>{let o=(i[e]+a[e])/2+n[e]*(a[e]-i[e])/2;return o+(i[e]-o)*t[e]+r[e]-i[e]*t[e]})}function jv(e,t,n,r,i=!1,a=[0,0,0]){let o={...e.params};Ov.forEach((e,t)=>{Number.isFinite(o[e])&&Number.isFinite(n[t])&&(o[e]=o[e]*n[t])});let s=Vt(e.preset,o),c=Ov.map(t=>e.params[t]>0&&s[t]>0?s[t]/e.params[t]:1);return c.every(e=>Math.abs(e-1)<1e-9)?null:{params:s,shift:Av(t,c,i?[r[0],0,r[2]]:r,i?[a[0],0,a[2]]:a)}}var[Mv,Nv]=yv,Pv=()=>({factors:[1,1,1],anchor:[0,0,0],move:[0,0,0]}),Fv=e=>({factors:[...e.factors],anchor:[...e.anchor],move:[...e.move]});function Iv(e,t,n,r=1e-9){for(let i=0;i<3;i++){let[a,o]=[Bv(e,t,i),Bv(e,n,i)];if(Math.abs(a[0]-o[0])>r||Math.abs(a[1]-o[1])>r)return!1}return!0}var Lv=e=>e.factors.every(e=>Math.abs(e-1)<1e-9)&&e.move.every(e=>Math.abs(e)<1e-9);function Rv(e,t,n){let[r,i]=[e[0][n],e[1][n]];return(r+i)/2+t.anchor[n]*(i-r)/2}function zv(e,t,n,r){let i=Rv(e,t,n);return i+(r-i)*t.factors[n]+t.move[n]}function Bv(e,t,n){return[zv(e,t,n,e[0][n]),zv(e,t,n,e[1][n])]}function Vv(e,t,n,r,i,a){let[o,s]=[e[0][n],e[1][n]],c=s-o;if(!(c>1e-9))return;let l=(i-r)/c;if(t.factors[n]=l,Math.abs(1-l)>1e-6){let e=((r-o*l)/(1-l)-(o+s)/2)/(c/2),i=Math.round(e);t.anchor[n]=Math.abs(e-i)<1e-9?i:e,t.move[n]=0}else t.anchor[n]=a,t.move[n]=0,t.move[n]=r-zv(e,t,n,o)}function Hv(e,t,n,r,i){let a=e[1][n]-e[0][n];if(!(a>1e-9))return;let o=Math.min(Nv*a,Math.max(Mv*a,r)),[s,c]=Bv(e,t,n);i<0?Vv(e,t,n,s,s+o,i):i>0?Vv(e,t,n,c-o,c,i):Vv(e,t,n,(s+c)/2-o/2,(s+c)/2+o/2,i)}function Uv(e,t,n,r){let i=n;for(let n=0;n<3;n++){let r=t.factors[n];e[1][n]-e[0][n]>1e-9&&r>0&&(i=Math.min(Nv/r,Math.max(Mv/r,i)))}for(let n=0;n<3;n++){let[a,o]=Bv(e,t,n);Hv(e,t,n,(o-a)*i,r[n])}}function Wv(e,t,n,r,i,a){let o=[t.map(e=>-e/2),t.map(e=>e/2)],s=a?Fv(a):Pv(),c=e=>{let[t,n]=Bv(o,s,e);return n-t};if(e.startsWith(`f`)){let t=Number(e[1]),i=-(e.endsWith(`-1`)?-1:1);if(!n)return Hv(o,s,t,c(t)+r,i),s;let a=[0,0,-1];return a[t]=i,Uv(o,s,(c(t)+r)/Math.max(1e-12,c(t)),a),s}let l=/^c(-?1)(-?1)$/.exec(e);if(!l||!i)return null;let u=Number(l[1]),d=Number(l[2]),f=[-u,-d,-1];if(n){let[e,t]=[c(0),c(1)];return Uv(o,s,1+(u*i[0]*e+d*i[1]*t)/Math.max(1e-12,e*e+t*t),f),s}return Hv(o,s,0,c(0)+u*i[0],f[0]),Hv(o,s,1,c(1)+d*i[1],f[1]),Hv(o,s,2,c(2),-1),s}function Gv(e,t){let n=[0,1,2].map(n=>zv(e,t,n,0));return{factors:[...t.factors],offset:n}}function Kv(e,t){let{factors:n,offset:r}=Gv(e,t);return[n[0],0,0,0,0,n[1],0,0,0,0,n[2],0,r[0],r[1],r[2],1]}function qv(e,t,n){let[r,i,a]=t,o=e=>[e[0]*r+n[0],e[1]*i+n[1],e[2]*a+n[2]],s=e=>{let t=new Float32Array(e.length);for(let o=0;o+2<e.length;o+=3)t[o]=e[o]*r+n[0],t[o+1]=e[o+1]*i+n[1],t[o+2]=e[o+2]*a+n[2];return t},c=e=>{let t=[e[0]/r,e[1]/i,e[2]/a],n=Math.hypot(t[0],t[1],t[2])||1;return[t[0]/n,t[1]/n,t[2]/n]},l=new Float32Array(e.normals.length);for(let t=0;t+2<e.normals.length;t+=3)l.set(c([e.normals[t],e.normals[t+1],e.normals[t+2]]),t);let u=Math.abs(r-i)<1e-9&&Math.abs(i-a)<1e-9,d=Math.cbrt(Math.abs(r*i*a)),f=o(e.bbox[0]),p=o(e.bbox[1]),m={...e,positions:s(e.positions),normals:l,edges:s(e.edges),faces:e.faces.map(e=>({...e,c:o(e.c),n:c(e.n),a:e.a*d*d})),edgeInfo:e.edgeInfo.map(e=>{let t={...e,m:o(e.m),a:o(e.a),b:o(e.b),l:e.l*d};return u?t.circle&&={...t.circle,c:o(t.circle.c),r:t.circle.r*r}:delete t.circle,t}),bbox:[[Math.min(f[0],p[0]),Math.min(f[1],p[1]),Math.min(f[2],p[2])],[Math.max(f[0],p[0]),Math.max(f[1],p[1]),Math.max(f[2],p[2])]],volume:e.volume*r*i*a,area:e.area*d*d,points:e.points?.map(o)};return delete m.lod,delete m.share,m}var Jv=()=>J().touchTool(),Yv=()=>vv(J().mode??`print`),Xv=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Zv=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Qv=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],$v=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],ey=e=>Math.hypot(e[0],e[1],e[2]);function ty(e){return(0,Z.jsx)(Ji,{})}function ny(e){return e?F(J().doc,e)??null:null}function ry(e,t){let n=new y(...t).applyMatrix4(kn(e.position,e.rotation).invert());return[n.x,n.y,n.z]}function iy(e,t){let n=ey(t);if(!n)return[0,0,0];let r=new y(...t).transformDirection(kn(e.position,e.rotation).invert()).multiplyScalar(n);return[r.x,r.y,r.z]}var ay=class{bodyId=null;refresh(){let e=ny(this.bodyId),t=this.step();J().setPreview(e&&t?[...it(J().doc,e).features,t]:null),Jv()}previewPlacement(){let e=ny(this.bodyId);return e&&this.step()?{position:e.position,rotation:e.rotation}:null}previewColor(){return ny(this.bodyId)?.color??`#999`}hidden(){return this.bodyId&&this.step()?[this.bodyId]:[]}confirmable(){return!!this.step()&&!yr.getState().status.__preview__?.error}apply(){let e=this.step();if(!e||!this.bodyId)return;if(yr.getState().status.__preview__?.error)return J().toast(G(`msg.fixErrorFirst`),`error`);let t=J();t.commit(Sn(t.doc,this.bodyId,{...e,id:V()}),[this.bodyId]),this.done()}finish(e){let t=this.step();if(!t||!this.bodyId)return!1;let n=J();return n.commit(Sn(n.doc,this.bodyId,{...t,id:V()}),[this.bodyId]),n.toast(G(e)),this.done(),!0}done(){J().setTool(null)}enter(){this.apply()}dispose(){J().setPreview(null)}undoPoint(){return this.cancel?.()??!1}},oy={flat:!0},sy=`#e5484d`;function cy(){let e=yr(e=>e.status[fr]?.error);return e?(0,Z.jsx)(`p`,{className:`hint warn tweak-refused`,children:G(er(e))}):null}var ly=class extends ay{id=`tweak`;target=null;d=[0,0,0];dragBase=null;constructor(){super();let e=J().sub;if(e){if(this.bodyId=e.bodyId,e.kind===`vertex`){let t=yi(e.bodyId,e.ids[0]);t&&(this.target={kind:`vertex`,bodyId:e.bodyId,at:t})}else this.target=e.kind===`face`?{kind:`face`,bodyId:e.bodyId,faceId:e.ids[0]}:{kind:`edge`,bodyId:e.bodyId,edgeId:e.ids[0]};hi()}}wants(){return[`point`,`edge`,`face`]}prompt(){return this.target?G(`p.tweakDrag`):G(`p.tweakPick`)}click(e){if(!e.hit&&!e.snap3d)return this.target&&ey(this.d)>1e-9&&this.apply(),oi();if(e.hit?.kind!==`body`&&!e.snap3d)return;let t=e.snap3d?.bodyId??e.hit.itemId;if(e.snap3d?.kind===`vertex`)this.target={kind:`vertex`,bodyId:t,at:e.snap3d.point};else if(e.hit?.edgeId!=null)this.target={kind:`edge`,bodyId:t,edgeId:e.hit.edgeId};else if(e.hit?.faceId!=null)this.target={kind:`face`,bodyId:t,faceId:e.hit.faceId};else return;this.bodyId=t,this.d=[0,0,0],this.valueBase=null,this.refresh()}anchor(){let e=this.target;if(!e)return null;if(e.kind===`vertex`)return e.at;if(e.kind===`edge`){let t=ei(e.bodyId,e.edgeId);return t?Qv(Xv(t.worldA,t.worldB),.5):null}return K(e.bodyId,e.faceId)?.worldCenter??null}curvedFace(){let e=this.target;return e?.kind===`face`&&!K(e.bodyId,e.faceId)?.planar}gizmoAt(){let e=this.anchor();return e?Xv(e,this.d):null}onGizmo(e,t){this.dragBase||=this.d,this.d=this.alongFace(Xv(this.dragBase,e)),t&&(this.valueBase=this.dragBase,this.dragBase=null),this.refresh()}alongFace(e){let t=this.target;if(t?.kind===`face`&&this.curvedFace()){let n=K(t.bodyId,t.faceId).worldNormal;return Qv(n,$v(e,n))}return e}valueBase=null;gizmoFrame(){let e=this.target,t=e?.kind===`face`?K(e.bodyId,e.faceId)?.worldNormal:null;return t?Mr(null,t,2)?.q??null:null}gizmoValue(e,t,n){if(e!==`move`||!this.target)return!1;let r=this.valueBase??this.d;return this.d=this.alongFace(Xv(r,Qv(t,n))),this.valueBase=r,this.refresh(),!0}archEdit(){let e=this.step(),t=ny(this.bodyId);if(!e||e.kind!==`tweak`||!t)return null;let n=it(J().doc,t);if(n.features.length!==1)return null;let r=n.features[0],i=r.kind===`roof`?jt(r,e.moves):r.kind===`wall`?mn(r,e.moves):null;if(!i)return null;let a=r.kind===`wall`&&`height`in i&&i.height!==r.height&&n.topLevel?{topLevel:void 0,topOffset:void 0}:void 0;return{bodyId:n.id,featureId:r.id,patch:i,features:[{...r,...i}],body:a}}refresh(){let e=this.archEdit();if(!e)return super.refresh();J().setPreview(e.features),Jv()}apply(){let e=this.archEdit();if(!e)return super.apply();let t=J();if(yr.getState().status.__preview__?.error)return t.toast(G(`msg.fixErrorFirst`),`error`);let n=$t(t.doc,e.bodyId,e.featureId,e.patch);e.body&&(n={...n,bodies:n.bodies.map(t=>t.id===e.bodyId?(({topLevel:e,topOffset:t,...n})=>n)(t):t)}),t.commit(n,[this.bodyId]),this.done()}step(){let e=this.target,t=ny(this.bodyId);if(!e||!t||ey(this.d)<1e-9)return null;let n=iy(t,this.d);if(e.kind===`face`){let t=K(e.bodyId,e.faceId);return t?t.planar?{id:`preview`,kind:`tweak`,moves:[{t:`face`,face:t.sig,d:n}],enabled:!0}:{id:`preview`,kind:`offsetFace`,face:t.sig,distance:$v(this.d,t.worldNormal),enabled:!0}:null}let r=oy.flat?{flat:!0}:{};if(e.kind===`edge`){let i=ei(e.bodyId,e.edgeId);return i?{id:`preview`,kind:`tweak`,moves:[{t:`edge`,a:ry(t,i.worldA),b:ry(t,i.worldB),d:n,...r}],enabled:!0}:null}let i=ry(t,e.at);return{id:`preview`,kind:`tweak`,moves:[{t:`vertex`,from:i,to:Xv(i,n),...r}],enabled:!0}}refused(){return!!this.step()&&!!yr.getState().status.__preview__?.error}previewColor(){return this.refused()?sy:super.previewColor()}input(e){let t=J().mode??`print`,n=kr(e.trim()).map(e=>pn(e,t)??NaN);if(!n.length||n.some(e=>!Number.isFinite(e)))return!1;let r=Pn[J().mode??`print`].mmPerUnit;if(n.length===1&&this.target?.kind===`face`){let e=K(this.target.bodyId,this.target.faceId).worldNormal;this.d=Qv(e,n[0]*r)}else this.d=[(n[0]??0)*r,(n[1]??0)*r,(n[2]??0)*r];return this.refresh(),!0}cancel(){if(this.valueBase=null,ey(this.d)>1e-9)this.d=[0,0,0];else if(this.target)this.target=null;else return!1;return this.refresh(),!0}highlights(){let e=this.target;return e?e.kind===`face`?{faces:[{bodyId:e.bodyId,ids:[e.faceId]}]}:e.kind===`edge`?{edges:[{bodyId:e.bodyId,ids:[e.edgeId]}]}:{}:{}}overlay3d(){if(this.target?.kind!==`vertex`)return null;let e=Xv(this.target.at,this.d);return this.refused()?{segments:[...this.target.at,...e],labels:[{p:e,text:`✕`}]}:{segments:[],labels:[{p:e,text:`●`}]}}panel(){let e=this.target,t=e?.kind===`face`?K(e.bodyId,e.faceId)?.worldNormal:null,[,n]=Yv();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ni,{steps:[G(`step.tweakPick`),G(`step.tweakMove`)],current:+!!e}),(0,Z.jsxs)(`p`,{className:`hint`,children:[G(`tweak.target`),`: `,(0,Z.jsx)(`b`,{children:e?G(`tweak.${e.kind}`):`—`})]}),(0,Z.jsx)(`div`,{className:`trow`,children:(0,Z.jsx)(`span`,{className:`tlabel`,children:G(`tweakflat.choice`)})}),(0,Z.jsx)(Li,{value:oy.flat?`flat`:`bend`,options:[[`flat`,G(`tweakflat.flat`)],[`bend`,G(`tweakflat.bend`)]],onChange:e=>{oy.flat=e===`flat`,this.refresh()}}),(0,Z.jsx)(`p`,{className:`hint`,children:G(e?.kind===`face`?`tweakflat.hint.face`:oy.flat?`tweakflat.hint.flat`:`tweakflat.hint.bend`)}),(()=>{let e=this.archEdit();return e&&(0,Z.jsx)(`p`,{className:`hint`,children:G(e.features[0].kind===`roof`?`archedit.tweakRoof`:`archedit.tweakWall`)})})(),e&&(0,Z.jsxs)(Z.Fragment,{children:[t&&(0,Z.jsx)(q,{label:G(`tweak.alongNormal`),value:$v(this.d,t),length:!0,min:-n,max:n,onChange:e=>(this.d=Qv(t,Q(e,-n,n)),this.refresh())}),!this.curvedFace()&&(0,Z.jsx)(`div`,{className:`tgrid`,children:[`X`,`Y`,`Z`].map((e,t)=>(0,Z.jsx)(q,{label:`Δ${e}`,value:this.d[t],length:!0,min:-n,max:n,onChange:e=>(this.d=this.d.map((r,i)=>i===t?Q(e,-n,n):r),this.refresh())},e))})]}),e&&(0,Z.jsx)(`div`,{className:`tbtns`,children:(0,Z.jsx)(qi,{wide:!0})}),this.step()&&(0,Z.jsx)(cy,{}),(0,Z.jsx)(uy,{has:!!this.step(),onApply:()=>this.apply()})]})}};function uy({has:e,onApply:t}){let n=yr(e=>e.status[fr]?.error);return(0,Z.jsx)(ty,{canApply:e&&!n,onApply:t})}function dy(e){let t=new y(...e).normalize(),n=new y(0,0,1).cross(t);return n.lengthSq()<1e-9&&(n=new y(1,0,0)),n.normalize(),{u:n,v:t.clone().cross(n).normalize()}}function fy(e,t){let n=K(e,t);if(!n)return null;let{u:r,v:i}=dy(n.sig.n),a=rv(e,t).map(e=>new y(...e));if(!a.length)return null;let o=a.map(e=>e.dot(r)),s=a.map(e=>e.dot(i)),c=new y(...n.sig.c),l=Math.min(...o),u=Math.min(...s),d=(e,t)=>{let n=c.clone().addScaledVector(r,l+e-c.dot(r)).addScaledVector(i,u+t-c.dot(i));return[n.x,n.y,n.z]};return{info:n,w:Math.max(...o)-l,h:Math.max(...s)-u,at:d,u:[r.x,r.y,r.z],v:[i.x,i.y,i.z]}}var py=class extends ay{id=`addPoint`;target=null;how=`click`;dp=new pv;constructor(){super();let e=J().sub;if(e?.kind===`face`&&K(e.bodyId,e.ids[0])?.planar)this.bodyId=e.bodyId,this.target={kind:`face`,faceId:e.ids[0],click:K(e.bodyId,e.ids[0]).worldCenter};else if(e?.kind===`edge`){let t=ei(e.bodyId,e.ids[0]);t&&(this.bodyId=e.bodyId,this.target={kind:`edge`,edgeId:e.ids[0],click:Qv(Xv(t.worldA,t.worldB),.5)})}this.target&&(hi(),ai(this,()=>this.refresh()))}hover=null;wants(){return this.how===`dist`?this.dp.wants():[`edge`,`face`]}setHow(e){this.how=e,this.dp.reset(),this.hover=null,e===`dist`&&(this.target=null),this.refresh()}move(e){if(this.how===`dist`){this.dp.stage()===`way`&&(this.dp.aimAt(e),Jv());return}let t=null;if(e.hit?.kind===`body`){if(this.how===`center`){let n=ny(e.hit.itemId),r=e.hit.edgeId==null?null:lv(e.hit.itemId,e.hit.edgeId),i=(e.hit.faceId==null?null:K(e.hit.itemId,e.hit.faceId))?.planar&&n?fy(n.id,e.hit.faceId):null;t=r??(i&&n?lr(n,i.at(i.w/2,i.h/2)):e.hit.point)}else t=e.hit.point}t===this.hover||t&&this.hover&&ey(Zv(t,this.hover))<e.pixel*.5||(this.hover=t,Jv())}prompt(){return this.how===`dist`?this.dp.prompt():this.target?G(`al.pointHere`):G(`p.addPointPick`)}cancel(){return this.how===`dist`&&this.dp.back()?(this.refresh(),!0):this.target?(this.target=null,this.refresh(),!0):!1}click(e){if(this.how===`dist`){let t=this.dp.stage();if(t===`base`&&!this.dp.pickBase(e,null))J().toast(G(`way.offFace`),`error`);else if(t===`way`)this.dp.takeAim(e);else if(t===`dist`){let t=this.dp.valueAt(e);if(t!=null&&this.dp.setValue(t))return this.take()}return this.syncBody(),this.refresh()}if(e.hit?.kind===`body`){if(this.bodyId=e.hit.itemId,e.hit.edgeId!=null)this.target={kind:`edge`,edgeId:e.hit.edgeId,click:e.hit.point};else if(e.hit.faceId!=null)this.target={kind:`face`,faceId:e.hit.faceId,click:e.hit.point};else return;this.curved()&&this.target.kind===`face`&&this.how===`center`&&(this.how=`click`),this.take()}}syncBody(){let e=this.dp,t=e.way?.edge?.ref?.bodyId??e.way?.face?.bodyId??e.edge?.ref?.bodyId??e.face?.bodyId??null;t&&(this.bodyId=t)}take(){!this.finish(`al.pointDone`)&&this.how===`dist`&&J().toast(G(`al.pointOnCorner`),`error`)}enter(){(this.how===`dist`?this.dp.stage()===`dist`:this.target)&&this.take()}confirmable(){return!1}axis(){return this.how===`dist`?this.dp.axis():null}setAxis(e,t){if(this.how===`dist`){if(this.dp.drag(e,t))return this.take();this.refresh()}}moreAxes(){return this.how===`dist`?this.dp.moreAxes():[]}setMoreAxis(e,t){this.how===`dist`&&(this.dp.setMore(e,t),this.refresh())}input(e){return this.how!==`dist`||this.dp.stage()!==`dist`?!1:gy(this.dp,e,()=>this.take(),()=>this.refresh())}dynInput(){return hy(this,this.dp,this.how===`dist`,()=>this.refresh())}curved(){let e=this.target;return!e||!this.bodyId?!1:e.kind===`face`?!K(this.bodyId,e.faceId)?.planar:!ei(this.bodyId,e.edgeId)?.straight}point(){let e=ny(this.bodyId);if(this.how===`dist`){let t=this.dp.point();return e&&t?ry(e,t):null}let t=this.target;if(!t||!e)return null;if(t.kind===`face`){let n=fy(e.id,t.faceId);return n?this.how===`center`?n.at(n.w/2,n.h/2):ry(e,t.click):null}let n=ei(e.id,t.edgeId);if(!n)return null;let r=ry(e,n.worldA),i=ry(e,n.worldB),a=ey(Zv(i,r))||1,o=this.how===`center`?.5:Math.max(0,Math.min(1,$v(Zv(ry(e,t.click),r),Zv(i,r))/(a*a)));return Xv(r,Qv(Zv(i,r),o))}distStep(e,t){let n=this.dp.way;if(!n)return null;let r=J().meshes[it(J().doc,e).id],[i,a]=r?.bbox??[[0,0,0],[1,1,1]],o=ey(Zv(a,i))*1e-6+1e-5,s=(r?.edgeInfo??[]).filter(e=>e.straight);if(s.some(e=>ey(Zv(e.a,t))<=o||ey(Zv(e.b,t))<=o))return null;let c=n.edge&&this.dp.onWayEdge()?{a:ry(e,n.edge.a),b:ry(e,n.edge.b)}:s.find(e=>ey(Zv($_(t,e.a,e.b),t))<=o);if(c)return{id:`preview`,kind:`tweak`,keepSplit:!0,moves:[{t:`pointEdge`,a:c.a,b:c.b,p:t,d:[0,0,0]}],enabled:!0};let l=n.face?K(n.face.bodyId,n.face.faceId):null;return l?{id:`preview`,kind:`tweak`,keepSplit:!0,moves:[{t:`pointFace`,face:l.sig,p:t,d:[0,0,0]}],enabled:!0}:null}step(){let e=this.target,t=ny(this.bodyId);if(this.how===`dist`){let e=this.point();return t&&e?this.distStep(t,e):null}if(e&&t&&this.curved()){let n=e.kind===`edge`?ei(t.id,e.edgeId):null;return{id:`preview`,kind:`splitFaces`,faces:[],tool:{kind:`points`,points:[n&&this.how===`center`?n.sig.m:ry(t,e.click)]},enabled:!0}}let n=this.point();if(!e||!t||!n)return null;if(e.kind===`face`)return{id:`preview`,kind:`tweak`,keepSplit:!0,moves:[{t:`pointFace`,face:K(t.id,e.faceId).sig,p:n,d:[0,0,0]}],enabled:!0};let r=ei(t.id,e.edgeId);return{id:`preview`,kind:`tweak`,keepSplit:!0,moves:[{t:`pointEdge`,a:ry(t,r.worldA),b:ry(t,r.worldB),p:n,d:[0,0,0]}],enabled:!0}}overlay3d(){if(this.how===`dist`)return this.dp.overlay();let e=ny(this.bodyId),t=this.target;if(e&&t&&this.curved()){let n=t.kind===`edge`?ei(e.id,t.edgeId):null;return{segments:[],labels:[{p:n&&this.how===`center`?lr(e,n.sig.m):t.click,text:`●`}]}}let n=this.point();return e&&n?{segments:[],labels:[{p:lr(e,n),text:`●`}]}:this.hover?{segments:[],labels:[{p:this.hover,text:`●`}]}:null}highlights(){if(this.how===`dist`)return my(this.dp);let e=this.target;return!e||!this.bodyId?{}:e.kind===`face`?{faces:[{bodyId:this.bodyId,ids:[e.faceId]}]}:{edges:[{bodyId:this.bodyId,ids:[e.edgeId]}]}}panel(){let e=this.target,t=this.how!==`dist`&&this.curved()?e?.kind===`face`?[[`click`,G(`tweak.atClick`)]]:[[`click`,G(`tweak.atClick`)],[`center`,G(`tweak.mid`)]]:[[`click`,G(`tweak.atClick`)],[`center`,G(`al.centerMid`)],[`dist`,G(`tweak.byDistance`)]];return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(mv,{of:G(`al.thePoint`),how:this.how,options:t,onChange:e=>this.setHow(e)}),this.how===`dist`?(0,Z.jsx)(hv,{pick:this.dp,onValue:e=>(this.dp.setValue(e),this.refresh()),onMore:()=>this.refresh()}):(0,Z.jsx)(`p`,{className:`hint`,children:G(this.how===`center`?`al.pointCenterHint`:`al.pointClickHint`)}),(0,Z.jsx)(gv,{})]})}};function my(e){let t=e.way?.edge?.ref??e.edge?.ref,n=e.way?.face??e.face;return{faces:n&&!t?[{bodyId:n.bodyId,ids:[n.faceId]}]:[],edges:t?[{bodyId:t.bodyId,ids:[t.edgeId]}]:[]}}function hy(e,t,n,r){let i=t.way;return!n||t.stage()!==`dist`||!i?null:{base:null,fields:[{key:`dist`,kind:`value`,unit:`len`,label:`dyn.dist`,min:i.lo,max:i.hi,get:()=>t.way?.value??null,lock:e=>{e!=null&&t.setValue(e)&&r()}}],accept:t=>t.dist!=null&&!!e.input?.(String(Fr(t.dist,J().mode??`print`)))}}function gy(e,t,n,r){let i=fi(t.trim());if(i==null)return!1;if(!e.setValue(i)){let t=e.way;return J().toast(G(`way.outside`,{lo:qr(t.lo),hi:qr(t.hi)}),`error`),r(),!0}return n(),!0}var _y=class{id=`faceView`;wants(){return[`face`]}prompt(){return G(`p.faceView`)}click(e){if(e.hit?.kind!==`body`||e.hit.faceId==null)return;let t=J();t.setSub({bodyId:e.hit.itemId,kind:`face`,ids:[e.hit.faceId]}),t.requestView(`face`),t.setTool(null)}},vy=class extends ay{id=`addLine`;faceId=null;a=null;b=null;na=null;nb=null;cursor=null;px=0;howA=`click`;howB=`click`;dp=new pv;hover=null;constructor(){super();let e=J().sub;e?.kind===`face`&&(this.bodyId=e.bodyId,this.faceId=e.ids[0],hi())}how(){let e=this.a?this.howB:this.howA;return e===`dist`&&!this.flat()?`click`:e}setHow(e){this.a?this.howB=e:this.howA=e,this.dp.reset(),this.hover=null,this.refresh()}flat(){return this.faceId==null||!this.bodyId||!!K(this.bodyId,this.faceId)?.planar}face(){return this.bodyId&&this.faceId!=null?{bodyId:this.bodyId,faceId:this.faceId}:null}wants(){if(this.faceId==null)return[`point`,`face`];let e=this.how();return e===`dist`?this.dp.wants():e===`mid`?[`edge`]:[`point`,`face`]}prompt(){if(this.faceId==null)return G(`p.addLineFace`);let e=this.how();return e===`dist`?`${G(this.a?`step.lineB`:`step.lineA`)} · ${this.dp.prompt()}`:e===`mid`?`${G(this.a?`step.lineB`:`step.lineA`)} · ${G(`way.pMid`)}`:this.a?G(`al.lineB`):G(`p.addLineA`)}cancel(){if(!(this.faceId!=null&&this.how()===`dist`&&this.dp.back())){if(this.b)this.b=null;else if(this.a)this.a=null;else if(this.faceId!=null)this.faceId=null;else return!1}return this.cursor=null,this.refresh(),!0}click(e){if(this.px=e.pixel,this.cursor=null,this.faceId==null)return e.hit?.kind!==`body`||e.hit.faceId==null?void 0:(this.bodyId=e.hit.itemId,this.faceId=e.hit.faceId,Jv());let t=this.how(),n=this.bodyId?K(this.bodyId,this.faceId)?.worldNormal??null:null;if(t===`dist`){let t=this.dp.stage();if(t===`base`&&!this.dp.pickBase(e,this.face(),this.a?[this.a]:[]))J().toast(G(`way.offFace`),`error`);else if(t===`way`)this.dp.takeAim(e);else if(t===`dist`){let t=this.dp.valueAt(e);if(t!=null&&this.dp.setValue(t))return this.place(this.dp.point(),n)}return this.refresh()}if(t===`mid`){let t=uv(e),r=t?lv(t.bodyId,t.edgeId):null;r&&this.place(r,n);return}let r=e.snap3d?.point??(e.hit?.kind===`body`?e.hit.point:null);r&&this.place(r,e.hit?.normal??n)}place(e,t){if(this.dp.reset(),this.hover=null,this.cursor=null,!this.a)return this.a=e,this.na=t,this.refresh();this.b=e,this.nb=t,!this.finish(`al.lineDone`)&&(this.b=null,J().toast(G(`al.samePoint`),`error`),this.refresh())}enter(){this.faceId!=null&&this.how()===`dist`&&this.dp.stage()===`dist`&&this.place(this.dp.point(),this.bodyId?K(this.bodyId,this.faceId)?.worldNormal??null:null)}confirmable(){return!1}axis(){return this.faceId!=null&&this.how()===`dist`?this.dp.axis():null}setAxis(e,t){if(this.how()===`dist`){if(this.dp.drag(e,t))return this.enter();this.refresh()}}moreAxes(){return this.faceId!=null&&this.how()===`dist`?this.dp.moreAxes():[]}setMoreAxis(e,t){this.how()===`dist`&&(this.dp.setMore(e,t),this.refresh())}input(e){return this.faceId==null||this.how()!==`dist`||this.dp.stage()!==`dist`?!1:gy(this.dp,e,()=>this.enter(),()=>this.refresh())}dynInput(){return hy(this,this.dp,this.faceId!=null&&this.how()===`dist`,()=>this.refresh())}lineFrame(e=this.a,t=this.b){let n=ny(this.bodyId);if(!n||this.faceId==null||!e)return null;let r=K(n.id,this.faceId);if(!r)return null;let i=gr(r.sig.c,r.sig.n),a;if(!r.planar){let o=Xv(this.na??r.worldNormal,this.nb??r.worldNormal),s=ry(n,e),c=Zv(ry(n,Xv(e,o)),s);if(ey(c)<1e-9)return null;i=gr(s,Qv(c,1/ey(c))),a=.6*(t?ey(Zv(t,e)):0)+.5}let o=ry(i,ry(n,e)),s=t?ry(i,ry(n,t)):null;return{bd:n,f:r,frame:i,depth:a,A:o,B:s}}pending(){if(this.faceId==null)return null;let e=this.how();return e===`dist`?this.dp.point()??this.dp.aimPoint():e===`mid`?this.hover:this.cursor}ends(){let e=this.b??(this.a?this.pending():null),t=this.lineFrame(this.a,e);if(!t||!this.a)return null;let n=e=>lr(t.bd,lr(t.frame,[e[0],e[1],0])),r=Math.max(this.px*2,1e-4);return t.f.planar?{a:n(t.A),b:t.B?n(t.B):null,movedA:Math.abs(t.A[2])>r,movedB:!!t.B&&Math.abs(t.B[2])>r}:{a:this.a,b:e,movedA:!1,movedB:!1}}step(){if(!this.a||!this.b)return null;let e=this.lineFrame();if(!e||!e.B)return null;let{bd:t,f:n,frame:r,depth:i,A:a,B:o}=e,s=o[0]-a[0],c=o[1]-a[1],l=Math.hypot(s,c);if(l<1e-6)return null;let u=n.planar?rv(t.id,this.faceId).reduce((e,t)=>Math.max(e,ey(Zv(t,n.sig.c))),0):0,d=n.planar?2*u+l:l*.02+.01,f=[a[0]-s/l*d,a[1]-c/l*d],p=[o[0]+s/l*d,o[1]+c/l*d];return{id:`preview`,kind:`splitFaces`,faces:[n.sig],tool:{kind:`sketch`,entities:[{id:`l`,t:`line`,a:f,b:p}],frame:r,depth:i},enabled:!0}}overlay3d(){let e=this.faceId!=null&&this.how()===`dist`?this.dp.overlay():null,t=this.ends();if(!t){let t=this.faceId!=null&&!this.a&&this.how()===`mid`?this.hover:null;return e||(t?{segments:[],labels:[{p:t,text:`●`}]}:null)}let n=t.b?[...t.a,...t.b]:[],r=[{p:t.a,text:`●`}];t.b&&(this.b||this.how()===`mid`)&&r.push({p:t.b,text:`●`});let i=(e,t,i)=>{i&&e&&t&&(n.push(...e,...t),r.push({p:e,text:`●`},{p:t,text:G(`plane3.projected`)}))};return i(this.a,t.a,t.movedA),i(this.b??this.pending(),t.b,t.movedB),e&&(n.push(...e.segments),r.push(...e.labels)),{segments:n,labels:r}}move(e){this.px=e.pixel;let t=this.faceId==null?null:this.how();if(this.hover=null,this.cursor=null,t===`dist`)this.dp.stage()===`way`&&this.dp.aimAt(e);else if(t===`mid`){let t=uv(e);this.hover=t?lv(t.bodyId,t.edgeId):null}else t===`click`&&this.a&&!this.b&&(this.cursor=e.snap3d?.point??(e.hit?.kind===`body`?e.hit.point:null));Jv()}highlights(){let e=this.how()===`dist`?my(this.dp):{};return this.bodyId&&this.faceId!=null?{...e,faces:[{bodyId:this.bodyId,ids:[this.faceId]}]}:{}}panel(){let e=this.flat(),t=[[`click`,G(`tweak.atClick`)],[`mid`,G(`tweak.mid`)],...e?[[`dist`,G(`tweak.byDistance`)]]:[]],n=this.how();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ni,{steps:[G(`step.face`),G(`step.lineA`),G(`step.lineB`)],current:this.faceId==null?0:this.a?2:1}),(0,Z.jsx)(mv,{of:G(this.a?`step.lineB`:`step.lineA`),how:n,options:t,onChange:e=>this.setHow(e)}),n===`dist`&&this.faceId!=null&&(0,Z.jsx)(hv,{pick:this.dp,onValue:e=>(this.dp.setValue(e),this.refresh()),onMore:()=>this.refresh()}),(0,Z.jsx)(`p`,{className:`hint`,children:G(`al.lineHint`)}),(0,Z.jsx)(gv,{})]})}},yy=class extends ay{id=`splitFace`;faces=[];stage=0;toolSketch=null;toolBody=null;source=`pick`;drawFace=null;pts=[];closed=!1;cursor=null;how=`click`;dp=new pv;geo=null;stopKeys=ri(this);constructor(){super();let e=J().sub;e?.kind===`face`&&e.ids.length&&(this.bodyId=e.bodyId,this.faces=[...e.ids],this.stage=1,hi())}drawing1(){return this.stage===1&&this.source===`draw`}wants(){return this.stage===0?[`face`]:this.source===`draw`?this.how===`dist`?this.dp.wants():this.how===`mid`?[`edge`]:[`point`]:[`entity`,`region`,`item`]}prompt(){return this.stage===0?G(`p.splitFaceFaces`):this.source===`pick`?G(`al.splitPickTool`):this.drawOn()?this.how===`dist`?this.dp.prompt():this.how===`mid`?G(`way.pMid`):this.pts.length?G(`al.splitDrawB`):G(`p.splitFaceDrawA`):G(`p.splitFaceNeedFlat`)}setSource(e){this.source=e,this.faces.length&&(this.stage=1),this.cursor=null,this.dp.reset(),this.refresh()}setHow(e){this.how=e,this.dp.reset(),this.cursor=null,this.refresh()}undoPoint(){if(this.stage!==1||this.source!==`draw`)return!1;if(this.how===`dist`&&this.dp.back())return this.refresh(),!0;if(this.closed)this.closed=!1;else if(this.pts.length)this.pts.pop();else return!1;return this.pts.length||(this.drawFace=null),this.refresh(),!0}dispose(){this.stopKeys(),super.dispose()}drawOn(){let e=ny(this.bodyId);if(!e)return null;let t=this.drawFace??this.faces.find(t=>K(e.id,t)?.planar)??null,n=t==null?null:K(e.id,t);if(t==null||!n?.planar)return null;let r=gr(n.sig.c,n.sig.n);return{b:e,fid:t,f:n,frame:r,world:We(e,r)}}geometry(e){let t=J().meshes[it(J().doc,e.b).id];if(this.geo&&this.geo.mesh===t&&this.geo.fid===e.fid)return this.geo;let n=Wr(e.b.id,e.fid).map(([t,n])=>[xi(e.world,t),xi(e.world,n)]),r=Jr(e.b.id,e.world),i=[1/0,1/0],a=[-1/0,-1/0];for(let e of n)for(let t of e)i=[Math.min(i[0],t[0]),Math.min(i[1],t[1])],a=[Math.max(a[0],t[0]),Math.max(a[1],t[1])];let o=n.length?Ai(i,a):0;return this.geo={mesh:t,fid:e.fid,outline:n,edges:r.length?r:n.map(([e,t],n)=>({id:`o${n}`,t:`line`,a:e,b:t})),over:Math.max(o*.002,.01)},this.geo}drawPoint(e){let t=this.drawOn();return t?Ui(e,t.world,this.geometry(t).edges,this.pts[this.pts.length-1]??null)?.pt??null:null}addPoint(e,t){this.closed&&=(this.pts=[],!1),this.dp.reset();let n=this.pts.length;if(n>=3&&Ai(e,this.pts[0])<=t)this.closed=!0;else if(n&&Ai(e,this.pts[n-1])<=t)return;else this.pts.push(e);this.ready()?this.finish(`al.splitDone`):this.refresh()}ready(){if(this.closed)return!0;let e=this.pts.length,t=this.drawOn();if(e<2||!t)return!1;let n=this.geometry(t),r=e=>n.outline.some(([t,r])=>by(e,t,r)<=n.over),i=[(this.pts[e-2][0]+this.pts[e-1][0])/2,(this.pts[e-2][1]+this.pts[e-1][1])/2];return r(this.pts[0])&&r(this.pts[e-1])&&!r(i)}placedWorld(){let e=this.drawOn();return e&&!this.closed?this.pts.map(t=>_i(e.world,t)):[]}move(e){if(this.drawing1()){if(this.cursor=null,this.how===`dist`)this.dp.stage()===`way`&&this.dp.aimAt(e);else if(this.how===`mid`){let t=this.drawOn(),n=uv(e),r=t&&n?lv(n.bodyId,n.edgeId):null;this.cursor=t&&r?xi(t.world,r):null}else this.cursor=this.closed?null:this.drawPoint(e);Jv()}}dynInput(){return hy(this,this.dp,this.drawing1()&&this.how===`dist`,()=>this.refresh())}input(e){if(!this.drawing1())return!1;if(this.how===`dist`)return this.dp.stage()===`dist`&&gy(this.dp,e,()=>this.enter(),()=>this.refresh());let t=e.trim().toLowerCase();if(t===`u`||t===`undo`)return this.undoPoint(),!0;let n=this.pts[this.pts.length-1],r=n&&!this.closed?Kr(e,n,this.cursor):null;return r?(this.addPoint(r,0),!0):!1}faceFrom(e){let t=e.hit?.kind===`body`&&e.hit.itemId===this.bodyId?e.hit.faceId:void 0;(!this.pts.length||this.closed)&&t!=null&&this.faces.includes(t)&&K(this.bodyId,t)?.planar&&(t!==this.drawFace&&(this.pts=[]),this.drawFace=t)}click(e){if(this.stage===0){if(e.hit?.kind!==`body`||e.hit.faceId==null)return;this.bodyId&&this.bodyId!==e.hit.itemId&&(this.faces=[]),this.bodyId=e.hit.itemId;let t=this.faces.indexOf(e.hit.faceId);return t>=0?this.faces.splice(t,1):this.faces.push(e.hit.faceId),this.drawFace=null,this.pts=[],this.closed=!1,Jv()}if(this.source===`draw`){let t=Math.max(e.pixel*8,1e-6);if(this.how===`dist`){let n=this.dp.stage();n===`base`&&this.faceFrom(e);let r=this.drawOn();if(!r)return;if(n===`base`&&!this.dp.pickBase(e,{bodyId:r.b.id,faceId:r.fid},this.placedWorld()))J().toast(G(`way.offFace`),`error`);else if(n===`way`)this.dp.takeAim(e);else if(n===`dist`){let n=this.dp.valueAt(e);if(n!=null&&this.dp.setValue(n))return this.addPoint(xi(r.world,this.dp.point()),t)}return this.refresh()}if(this.faceFrom(e),this.how===`mid`){let n=this.drawOn(),r=uv(e),i=n&&r?lv(r.bodyId,r.edgeId):null;n&&i&&this.addPoint(xi(n.world,i),t);return}let n=this.drawPoint(e);n&&this.addPoint(n,t);return}let t=e.entity?.sketchId??e.region?.sketchId??null;if(t)this.toolSketch=t,this.toolBody=null;else if(e.hit?.kind===`body`&&e.hit.itemId!==this.bodyId)this.toolBody=e.hit.itemId,this.toolSketch=null;else return;this.finish(`al.splitDone`)||this.refresh()}enter(){if(this.stage===0&&this.faces.length)return this.stage=1,Jv();if(this.drawing1()&&this.how===`dist`&&this.dp.stage()===`dist`){let e=this.drawOn();e&&this.addPoint(xi(e.world,this.dp.point()),0);return}this.finish(`al.splitDone`)}confirmable(){return this.stage===0&&this.faces.length>0||this.drawing1()&&this.pts.length>=2&&!!this.step()}onEscape(){this.drawing1()&&this.pts.length>=2&&this.finish(`al.splitDone`)}axis(){return this.drawing1()&&this.how===`dist`?this.dp.axis():null}setAxis(e,t){if(this.drawing1()&&this.how===`dist`){if(this.dp.drag(e,t))return this.enter();this.refresh()}}moreAxes(){return this.drawing1()&&this.how===`dist`?this.dp.moreAxes():[]}setMoreAxis(e,t){this.drawing1()&&this.how===`dist`&&(this.dp.setMore(e,t),this.refresh())}step(){let e=ny(this.bodyId);if(!e||!this.faces.length||this.stage===0)return null;if(this.source===`draw`){let t=this.drawOn();if(!t||this.pts.length<2)return null;let n=this.geometry(t),r=this.closed?this.pts:pi(this.pts,n.outline,n.over);return{id:`preview`,kind:`splitFaces`,faces:this.faces.map(t=>K(e.id,t)).flatMap(e=>e?.planar&&gi(t.f.sig,e.sig,n.over)?[e.sig]:[]),tool:{kind:`sketch`,entities:zr(r,this.closed),frame:t.frame},enabled:!0}}let t=this.faces.map(t=>K(e.id,t)?.sig).filter(Boolean);if(this.toolSketch){let n=pe(J().doc,this.toolSketch);return n?{id:`preview`,kind:`splitFaces`,faces:t,tool:{kind:`sketch`,entities:n.entities,frame:ir(e,n)},enabled:!0}:null}if(this.toolBody){let n=ny(this.toolBody);if(!n)return null;let r=ir(e,n);return{id:`preview`,kind:`splitFaces`,faces:t,tool:{kind:`body`,features:it(J().doc,n).features,...r},enabled:!0}}return null}pendingPt(){if(this.closed)return null;if(this.how!==`dist`)return this.cursor;let e=this.drawOn(),t=this.dp.point()??this.dp.aimPoint();return e&&t?xi(e.world,t):null}overlay3d(){let e=this.drawing1()?this.drawOn():null;if(!e)return null;let t=t=>_i(e.world,t),n=this.pendingPt(),r=n?[...this.pts,n]:this.closed?[...this.pts,this.pts[0]]:this.pts,i=[];for(let e=0;e+1<r.length;e++)i.push(...t(r[e]),...t(r[e+1]));let a=this.pts.map(e=>({p:t(e),text:`●`}));this.how===`mid`&&n&&a.push({p:t(n),text:`●`});let o=this.how===`dist`?this.dp.overlay():null;return o&&(i.push(...o.segments),a.push(...o.labels)),{segments:i,labels:a}}preview(){let e=this.pts[this.pts.length-1],t=this.drawing1()?this.pendingPt():null;return e&&t?{label:qr(Ai(e,t))}:null}highlights(){let e=this.source===`pick`,t=this.drawing1()&&this.how===`dist`?my(this.dp):{edges:[]};return{faces:this.bodyId?[{bodyId:this.bodyId,ids:this.faces}]:[],edges:t.edges,secondary:e&&this.toolBody?[this.toolBody]:[],entities:e&&this.toolSketch?[{sketchId:this.toolSketch,ids:pe(J().doc,this.toolSketch)?.entities.map(e=>e.id)??[]}]:[]}}panel(){let e=this.source===`draw`;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ni,{steps:[G(`step.splitFaces`),G(e?`step.splitDraw`:`step.splitTool`)],current:this.stage}),(0,Z.jsx)(Ei,{label:G(`step.splitFaces`),color:u_.primary,active:this.stage===0,onActivate:()=>(this.stage=0,Jv()),names:this.faces.map((e,t)=>({id:String(e),name:`${G(`m.kind.face`)} ${t+1}`})),onRemove:e=>(this.faces=this.faces.filter(t=>String(t)!==e),this.drawFace=null,this.pts=[],this.closed=!1,this.dp.reset(),this.refresh())}),(0,Z.jsx)(Li,{value:this.source,options:[[`pick`,G(`split.pick`)],[`draw`,G(`split.draw`)]],onChange:e=>this.setSource(e)}),e?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(mv,{of:G(this.pts.length&&!this.closed?`al.nextPoint`:`step.lineA`),how:this.how,options:[[`click`,G(`tweak.atClick`)],[`mid`,G(`tweak.mid`)],[`dist`,G(`tweak.byDistance`)]],onChange:e=>this.setHow(e)}),this.how===`dist`&&(0,Z.jsx)(hv,{pick:this.dp,onValue:e=>(this.dp.setValue(e),this.refresh()),onMore:()=>this.refresh()}),(0,Z.jsx)(`p`,{className:`hint`,children:G(`al.splitHint`)}),(0,Z.jsx)(Xr,{n:this.pts.length,onUndo:()=>this.undoPoint()})]}):(0,Z.jsx)(Ei,{label:G(`step.splitTool`),color:u_.secondary,active:this.stage===1,onActivate:()=>this.faces.length&&(this.stage=1,Jv()),names:this.toolSketch?[{id:this.toolSketch,name:di(this.toolSketch)}]:this.toolBody?[{id:this.toolBody,name:di(this.toolBody)}]:[],onRemove:()=>(this.toolSketch=this.toolBody=null,this.refresh())}),(0,Z.jsx)(gv,{})]})}};function by(e,t,n){let r=[n[0]-t[0],n[1]-t[1]],i=r[0]*r[0]+r[1]*r[1],a=i<1e-24?0:Math.max(0,Math.min(1,((e[0]-t[0])*r[0]+(e[1]-t[1])*r[1])/i));return Math.hypot(e[0]-t[0]-r[0]*a,e[1]-t[1]-r[1]*a)}var xy=[[1,0,0],[0,1,0],[0,0,1]],Sy=class extends ay{id=`smartScale`;factors=[1,1,1];anchor=[0,0,0];slide=[0,0,0];keepRatio=!1;history=[];dragBase=null;waiting=null;constructor(){super();let e=J().selection.find(e=>F(J().doc,e));e&&(this.bodyId=e)}wants(){return[`item`]}prompt(){return this.bodyId?G(`p.smartDrag`):G(`p.pickItems`)}get state(){return{factors:this.factors,anchor:this.anchor,move:this.slide}}setState(e){let t=Fv(e);this.factors=t.factors,this.anchor=t.anchor,this.slide=t.move}remember(e=this.state){this.history.push(Fv(e)),this.history.length>200&&this.history.shift()}changed(){return!Lv(this.state)}busy(){return!!this.waiting}click(e){if(!e.hit)return oi();e.hit.kind!==`body`||this.waiting||e.hit.itemId===this.bodyId||(this.bodyId=e.hit.itemId,this.setState(Pv()),this.history=[],this.refresh())}cancel(){if(this.waiting||this.dragBase)return!1;let e=this.history.pop();return e?(this.setState(e),this.refresh(),!0):!1}mesh(){if(this.waiting)return this.waiting.mesh;let e=ny(this.bodyId);return e?J().meshes[it(J().doc,e).id]??null:null}frame(){let e=ny(this.bodyId);return e?this.waiting?.placement??{position:e.position,rotation:e.rotation}:null}stretchable(){let e=ny(this.bodyId)?this.mesh():null;return!!e&&!e.isMesh}corner(e){let t=this.frame(),n=this.mesh();if(!t||!n)return null;let[r,i]=n.bbox;return lr(t,[0,1,2].map(t=>zv(n.bbox,this.state,t,e[t]<0?r[t]:e[t]>0?i[t]:(r[t]+i[t])/2)))}handles(){let e=ny(this.bodyId);if(!e||!this.mesh()||J().tool!==this||this.waiting)return[];let t=e=>this.corner(e),n=[];if(this.stretchable()){for(let r of[0,1])for(let i of[-1,1]){let a=[0,0,-1];a[r]=i,n.push({id:`f${r}${i}`,p:t(a),dir:N(e,Qv(xy[r],i))})}n.push({id:`f21`,p:t([0,0,1]),dir:N(e,xy[2])})}for(let r of[-1,1])for(let i of[-1,1])n.push({id:`c${r}${i}`,p:t([r,i,-1]),dir:N(e,xy[2]),uniform:!0,plane:!0});return n}lengths(){let e=this.mesh();return e?[0,1,2].map(t=>{let[n,r]=Bv(e.bbox,this.state,t);return r-n}):null}overlay3d(e){let t=this.frame(),n=this.lengths();if(!t||!n||J().tool!==this)return null;let r=(e,t,n)=>this.corner([e,t,n]),i=[],a=(e,t)=>i.push(...e,...t);for(let e of[-1,1])for(let t of[-1,1])a(r(-1,e,t),r(1,e,t)),a(r(e,-1,t),r(e,1,t)),a(r(e,t,-1),r(e,t,1));let o=e*26,s=(e,t,n)=>[(e[0]+t[0])/2+n[0]*o,(e[1]+t[1])/2+n[1]*o,(e[2]+t[2])/2+n[2]*o],c=[N(t,[0,-1,0]),N(t,[1,0,0]),N(t,[Math.SQRT1_2,-Math.SQRT1_2,0])],l=[[r(-1,-1,-1),r(1,-1,-1)],[r(1,-1,-1),r(1,1,-1)],[r(1,-1,-1),r(1,-1,1)]];return{segments:i,labels:[0,1,2].map(e=>({p:s(l[e][0],l[e][1],c[e]),text:qr(n[e]),out:c[e],...this.waiting?{}:{edit:{value:n[e],apply:t=>this.setSize(e,t)}}}))}}setSize(e,t){let n=this.mesh(),r=this.lengths();if(!n||!r||!(t>0)||this.waiting)return;let[i,a]=Yv(),o=Q(t,i,a),s=Fv(this.state),c=Fv(this.state);if(this.keepRatio||!this.stretchable()){let t=o/Math.max(1e-9,r[e]);for(let i=0;i<3;i++)Hv(n.bbox,c,i,r[i]*t,i===e||i===2?-1:0)}else Hv(n.bbox,c,e,o,-1);this.change(s,c)}change(e,t){wi(this);let n=this.mesh();n&&!Iv(n.bbox,e,t)&&(this.remember(e),this.setState(t),this.refresh(),Jv())}presetOnly(){let e=ny(this.bodyId),t=e?it(J().doc,e).features:[];return t.length===1&&t[0].kind===`preset`?t[0]:null}refresh(){let e=ny(this.bodyId),t=this.presetOnly(),n=this.mesh();if(!e||!t||!n||this.waiting){J().tool===this&&J().setPreview(null),Jv();return}this.factors=kv(t,this.factors),e.host&&(this.anchor=[this.anchor[0],0,this.anchor[2]]);let r=jv(t,n.bbox,this.factors,this.anchor,!!e.host,this.slide);J().setPreview(r?[{...t,params:r.params}]:null),Jv()}previewPlacement(){let e=ny(this.bodyId),t=this.presetOnly(),n=this.mesh();if(!e||!n||!(this.changed()||this.waiting))return null;if(!t||this.waiting)return this.frame();let r=jv(t,n.bbox,this.factors,this.anchor,!!e.host,this.slide);return r?{position:Xv(e.position,N(e,r.shift)),rotation:e.rotation}:null}previewLocal(){let e=this.mesh();return!e||this.presetOnly()&&!this.waiting||!(this.changed()||this.waiting)?null:{data:e,matrix:Kv(e.bbox,this.state)}}hidden(){return this.bodyId&&(this.changed()||this.waiting)?[this.bodyId]:[]}confirmable(){return this.waiting||!this.changed()?!1:!this.presetOnly()||!yr.getState().status.__preview__?.error}dragHandle(e,t,n,r){let i=this.mesh(),a=ny(this.bodyId);if(!i||!a||this.waiting)return;let o=this.dragBase??=Fv(this.state),s=[i.bbox[1][0]-i.bbox[0][0],i.bbox[1][1]-i.bbox[0][1],i.bbox[1][2]-i.bbox[0][2]],c=r?Zv(ry(a,Xv(a.position,r)),ry(a,a.position)):void 0,l=Wv(e,s,this.keepRatio||!this.stretchable(),t,c,o);l&&this.setState(l),n&&(this.dragBase=null,wi(this),Iv(i.bbox,o,this.state)?this.setState(o):this.remember(o)),this.refresh(),n&&Jv()}step(){let e=ny(this.bodyId),t=this.mesh();if(!e||!t||this.factors.every(e=>Math.abs(e-1)<1e-9))return null;let n=[0,1,2].map(e=>Rv(t.bbox,this.state,e));return this.factors.every(e=>Math.abs(e-this.factors[0])<1e-9)&&!this.stretchable()?{id:`preview`,kind:`scale`,factor:this.factors[0],origin:n,enabled:!0}:{id:`preview`,kind:`scale3`,factors:[...this.factors],origin:n,enabled:!0}}result(){let e=ny(this.bodyId),t=this.mesh();if(!e||!t||!this.changed())return null;let n=J(),r=it(n.doc,e),i=r.features[0],[a,o,s]=this.factors,c=(t,n)=>n.some(e=>Math.abs(e)>1e-12)?Un(t,e.id,Xv(e.position,N(e,n)),e.rotation):t;if(r.features.length===1&&i.kind===`primitive`){let r={...i.params},l=(e,t)=>r[e]=r[e]*t,u=Math.abs(a-o)<1e-9&&Math.abs(o-s)<1e-9,d=!0;if(i.shape===`box`||i.shape===`wedge`)l(`x`,a),l(`y`,o),l(`z`,s);else if([`cylinder`,`cone`,`prism`,`pyramid`].includes(i.shape)&&Math.abs(a-o)<1e-9)l(`r`,a),l(`h`,s);else if(i.shape===`sphere`){let e=r.r;r.r=e*a,r.ry=(r.ry>0?r.ry:e)*o,r.rz=(r.rz>0?r.rz:e)*s,Math.abs(r.ry-r.r)<1e-9*r.r&&Math.abs(r.rz-r.r)<1e-9*r.r&&(delete r.ry,delete r.rz)}else if(u)for(let e of Object.keys(r))e!==`n`&&l(e,a);else d=!1;if(d)return{doc:c($t(n.doc,e.id,i.id,{params:r}),Av(t.bbox,this.factors,this.anchor,this.slide)),stepId:i.id}}if(r.features.length===1&&i.kind===`preset`){let r=jv(i,t.bbox,this.factors,this.anchor,!!e.host,this.slide);return r?{doc:c($t(n.doc,e.id,i.id,{params:r.params}),r.shift),stepId:i.id}:null}let l=this.step(),u=V();return{doc:c(l?Sn(n.doc,e.id,{...l,id:u}):n.doc,this.slide),stepId:l?u:null}}apply(){if(this.waiting)return;if(this.presetOnly()&&yr.getState().status.__preview__?.error)return J().toast(G(`msg.fixErrorFirst`),`error`);let e=ny(this.bodyId),t=this.mesh(),n=this.result();if(!e||!t||!n)return;let r=J().doc;J().commit(n.doc,[e.id]);let i=J().doc;if(i!==r){if(!n.stepId)return this.applied();this.wait(e,n.stepId,t,i)}}applied(){this.setState(Pv()),this.history=[],this.dragBase=null,J().tool===this&&this.refresh()}wait(e,t,n,r){let i=F(r,e.id),a=it(r,i).id,o=it(r,i).features[0]?.kind===`preset`?J().meshes.__preview__??null:null;try{let{factors:t,offset:r}=Gv(n.bbox,this.state),s=o??qv(n,t,Zv(r,iy(i,Zv(i.position,e.position))));J().set({meshes:{...J().meshes,[a]:s}})}catch{}let s=e=>{if(c(),this.waiting===l&&(this.waiting=null),e===`done`)return this.applied();if(e===`failed`){let e=J();e.doc===r&&e.past.length&&(e.undo(),J().set({future:J().future.slice(1)})),J().toast(G(`msg.scaleKept`),`error`),J().tool||J().setTool(this)}J().tool===this&&this.refresh()},c=yr.subscribe((e,n)=>{if(e.doc!==r)return s(`gone`);if(e.status[a]===n.status[a]&&e.meshes[a]===n.meshes[a])return;let i=e.status[a];s(i?.error&&(!i.failedFeatureId||i.failedFeatureId===t)?`failed`:`done`)}),l={mesh:n,placement:{position:e.position,rotation:e.rotation},stop:c};this.waiting=l,J().tool===this&&this.refresh()}panel(){let e=this.lengths(),[t,n]=Yv(),[r,i]=yv,a=this.factors.every(e=>Math.abs(e-this.factors[0])<1e-9),o=this.mesh(),s=!!this.waiting;return(0,Z.jsxs)(Z.Fragment,{children:[e&&o&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(q,{label:G(`opt.factor`),value:a?this.factors[0]:1,min:r,max:i,step:.1,onChange:e=>{if(s)return;let t=Q(e,r,i);this.change(Fv(this.state),{factors:[t,t,t],anchor:[0,0,0],move:[0,0,0]})}}),(0,Z.jsx)(`div`,{className:`tgrid`,children:[`X`,`Y`,`Z`].map((r,i)=>(0,Z.jsx)(q,{label:`${G(`opt.sizeTo`)} ${r}`,value:e[i],length:!0,min:t,max:n,onChange:r=>{if(s)return;let a=Q(r,t,n),c=Fv(this.state);if(this.keepRatio||!this.stretchable()){let t=a/Math.max(1e-9,e[i]);for(let n=0;n<3;n++)Hv(o.bbox,c,n,e[n]*t,0)}else Hv(o.bbox,c,i,a,0);this.change(Fv(this.state),c)}},r))})]}),(0,Z.jsx)(bi,{label:G(`opt.keepRatio`),value:this.keepRatio||!this.stretchable(),onChange:e=>(this.keepRatio=e,Jv())}),(0,Z.jsx)(`p`,{className:`hint`,children:G(s?`status.building`:`hint.smartScaleSteps`)}),(0,Z.jsx)(ty,{canApply:this.confirmable(),onApply:()=>this.apply()})]})}},Cy=[`min`,`mid`,`max`],wy=(e,t,n)=>n===`min`?e.min[t]:n===`max`?e.max[t]:(e.min[t]+e.max[t])/2;function Ty(e,t,n){let r=[];for(let i of e){let e=[0,0,0];for(let r of[0,1,2]){let a=n[r];a&&(e[r]=wy(t,r,a)-wy(i.box,r,a))}e.some(e=>Math.abs(e)>1e-9)&&r.push({id:i.id,delta:e})}return r}function Ey(e,t,n){let r=(e.min[0]+e.max[0])/2,i=(e.min[1]+e.max[1])/2,a=e.min[2],o=!n||n[1]<=i,s=!n||n[0]>=r,c=o?e.min[1]:e.max[1],l=s?e.max[0]:e.min[0],u=c+(o?-t:t),d=l+(s?t:-t),f=[],p=(e,t)=>f.push(e[0],e[1],e[2],t[0],t[1],t[2]),[m,h]=[e.min[0],e.min[1]],[g,_]=[e.max[0],e.max[1]];p([m,h,a],[g,h,a]),p([g,h,a],[g,_,a]),p([g,_,a],[m,_,a]),p([m,_,a],[m,h,a]),p([r,h,a],[r,_,a]),p([m,i,a],[g,i,a]);let v=[];for(let t of Cy){let n=wy(e,0,t);p([n,c,a],[n,u,a]),v.push({axis:0,side:t,p:[n,u,a]});let r=wy(e,1,t);p([l,r,a],[d,r,a]),v.push({axis:1,side:t,p:[d,r,a]})}if(e.max[2]-e.min[2]>1e-6){p([l,c,a],[d,u,a]),p([d,u,a],[d,u,e.max[2]]);for(let t of Cy)v.push({axis:2,side:t,p:[d,u,wy(e,2,t)]})}return{dots:v,segments:f,fill:[m,h,a,g,h,a,g,_,a,m,h,a,g,_,a,m,_,a]}}function Dy(e,t,n,r,i){let a=null,o=i;for(let i of e){let e=t(i.p);if(!e)continue;let s=Math.hypot(e[0]-n,e[1]-r);s<=o&&(o=s,a=i)}return a}var Oy=new Set([`assets`]);function ky(e){if(!Array.isArray(e))return null;let t=new Set;for(let n of e){if(!n||typeof n!=`object`||typeof n.id!=`string`)return null;let e=n.id;if(t.has(e))return null;t.add(e)}return e}function Ay(e,t){let n=new Map(e.map(e=>[e.id,e])),r=new Set(t.map(e=>e.id)),i=[];for(let e of t)n.get(e.id)!==e&&i.push(e);let a=e.filter(e=>!r.has(e.id)).map(e=>e.id),o=e.filter(e=>r.has(e.id)).map(e=>e.id),s=t.filter(e=>!n.has(e.id)).map(e=>e.id),c=[...o,...s],l=c.length!==t.length||c.some((e,n)=>e!==t[n].id);if(!i.length&&!a.length&&!l)return null;let u={};return i.length&&(u.put=i),a.length&&(u.drop=a),l&&(u.order=t.map(e=>e.id)),u}function jy(e,t){let n=ky(e)??[],r=new Set(Array.isArray(t.drop)?t.drop:[]),i=new Map((Array.isArray(t.put)?t.put:[]).filter(e=>e&&typeof e.id==`string`).map(e=>[e.id,e])),a=new Map(n.map(e=>[e.id,e]));if(Array.isArray(t.order)){let e=[];for(let n of t.order){let t=i.get(n)??a.get(n);t&&!r.has(n)&&e.push(t)}return e}let o=[];for(let e of n)r.has(e.id)||o.push(i.get(e.id)??e);for(let[e,t]of i)!a.has(e)&&!r.has(e)&&o.push(t);return o}function My(e,t){if(e===t)return null;let n=e,r=t,i={};for(let e of new Set([...Object.keys(n),...Object.keys(r)])){if(Oy.has(e)||n[e]===r[e])continue;if(r[e]===void 0){n[e]!==void 0&&(i.del??=[]).push(e);continue}let t=ky(n[e]),a=ky(r[e]);if(t&&a){let n=Ay(t,a);n&&((i.lists??={})[e]=n);continue}(i.set??={})[e]=r[e]}return i.set||i.del||i.lists?i:null}function Ny(e,t){let n={...e},r=e=>typeof e==`string`&&!Oy.has(e)&&!Py.has(e);for(let e of Array.isArray(t.del)?t.del:[])r(e)&&delete n[e];for(let[e,i]of Object.entries(t.set??{}))r(e)&&(n[e]=i);for(let[e,i]of Object.entries(t.lists??{}))r(e)&&i&&typeof i==`object`&&(n[e]=jy(n[e],i));return n}var Py=new Set([`__proto__`,`constructor`,`prototype`]);function Fy(e){if(!e.assets)return e;let t={...e};return delete t.assets,t}function Iy(e,t){let n=null;for(let[r,i]of Object.entries(e.assets??{}))!t.has(r)&&typeof i==`string`&&((n??={})[r]=i);return n}function Ly(e){if(!e||typeof e!=`object`)return!1;let t=e;return Array.isArray(t.bodies)&&Array.isArray(t.sketches)&&Array.isArray(t.annotations??[])}var Ry=e=>Math.round(e*1e3)/1e3,zy=e=>({p:e.p.map(Ry),t:e.t.map(Ry),u:e.u.map(Ry),h:Ry(e.h)}),By=(e,t)=>!!e&&!!t&&JSON.stringify(e)===JSON.stringify(t);function Vy(e){let t=[],n=[];return{feed(r){let i=0;for(;;){let a=r.indexOf(`
`,i);if(a<0){i<r.length&&t.push(r.slice(i));return}let o=t.length?t.join(``)+r.slice(i,a):r.slice(i,a);if(t=[],i=a+1,o.endsWith(`\r`)&&(o=o.slice(0,-1)),o===``){if(n.length){let t=n.join(`
`);n=[],e(t)}}else o.startsWith(`data:`)&&n.push(o.slice(5).replace(/^ /,``))}},held:()=>t.length+n.length}}var Hy=null;function Uy(e,t){e===null&&t&&Hy!==t||(Hy=e)}var Wy=()=>Hy;function Gy(e=Hy){if(!e)return null;let t=e.camera;return zy({p:t.position.toArray(),t:e.controls.target.toArray(),u:t.up.toArray(),h:e.visibleHeight()})}function Ky(e,t=Hy){if(!t||![...e.p,...e.t,...e.u,e.h].every(Number.isFinite))return;let n=new y(...e.t),r=new y(...e.p),i=r.clone().sub(n);if(!(i.lengthSq()<1e-12)){if(t.controls.target.copy(n),t.camera.up.set(...e.u).normalize(),t.camera instanceof Bn){let r=t.visibleHeight()*t.camera.zoom;t.camera.position.copy(n).addScaledVector(i.normalize(),Math.max(i.length(),e.h*2)),e.h>0&&(t.camera.zoom=r/e.h),t.camera.updateProjectionMatrix()}else t.camera.position.copy(r);t.camera.lookAt(n),t.controls.update(),t.render()}}function qy(e,t,n=Hy){if(!n)return null;let r=n.renderer.domElement.getBoundingClientRect();if(!r.width||!r.height)return null;let i=new W((e-r.left)/r.width*2-1,-((t-r.top)/r.height)*2+1),a=new Ot;a.setFromCamera(i,n.camera);let o=new y;n.camera.getWorldDirection(o);let s=new yn().setFromNormalAndCoplanarPoint(o,n.controls.target),c=a.ray.intersectPlane(s,new y);return c?[Math.round(c.x*100)/100,Math.round(c.y*100)/100,Math.round(c.z*100)/100]:null}var $=()=>J().touchTool(),Jy={position:[0,0,0],rotation:[0,0,0]},Yy=()=>Pn[J().mode??`print`].defaultSize,Xy=()=>vv(J().mode??`print`);function Zy(e,t=!0){let n=J().mode??`print`,r=e=>String(Number((t?Fr(e,n):e).toFixed(3)));J().toast(G(`msg.valueRange`,{lo:r(e[0]),hi:r(e[1])}),`error`)}function Qy(e){return(0,Z.jsx)(Ji,{})}var $y={box:[`x`,`y`,`z`],cylinder:[`r`,`h`],sphere:[`r`],cone:[`r`,`h`],torus:[`R`,`r`],wedge:[`x`,`y`,`z`],prism:[`r`,`h`,`n`],pyramid:[`r`,`h`,`n`],hemisphere:[`r`]},eb=class{shape;id;params;at=null;features;constructor(e){this.shape=e,this.id=`place:${e}`,this.params=I[e](Yy()),this.features=this.makeFeatures(),Qr(),ai(this,()=>J().setPreview(this.features))}makeFeatures(){return[{id:`preview`,kind:`primitive`,shape:this.shape,params:{...this.params},enabled:!0}]}wants(){return[`plane`,`face`]}prompt(){return G(`p.place`)}placementFor(e){let t=J().snapStep(),n=J().mode??`print`;if(e.hit?.kind===`body`&&e.hit.faceId!=null){let t=K(e.hit.itemId,e.hit.faceId);if(t?.planar)return gr(e.hit.point,t.worldNormal)}return e.plane?{position:[Er(e.plane[0],n,t),Er(e.plane[1],n,t),tn(J())],rotation:[0,0,0]}:null}move(e){this.at=this.placementFor(e),$()}click(e){let t=this.placementFor(e);t&&this.place(t)}place(e){let t=J(),n=t.addPrimitive(this.shape,{...this.params},e.position);e.rotation.some(e=>e!==0)&&t.setPlacements([{id:n,position:e.position,rotation:e.rotation}],{replaceTop:!0}),t.setTool(null)}input(e){let t=kr(e.trim());if(!t.length||!t.every(e=>/^[-+.\d(=]/.test(e)))return!1;let n=Sv(this.shape,t,J().mode??`print`,this.params);return n.ok?(this.params=n.params,this.features=this.makeFeatures(),J().setPreview(this.features),$(),!0):(n.range?Zy(n.range,n.key!==`n`):J().toast(G(`msg.badNumber`),`error`),!0)}enter(){this.place(this.at??{position:[0,0,tn(J())],rotation:[0,0,0]})}previewPlacement(){return this.at}previewColor(){return`#7aa7d9`}dispose(){J().setPreview(null)}panel(){let e={x:G(`param.x`),y:G(`param.y`),z:G(`param.z`),r:G(`param.r`),h:G(`param.h`),R:G(`param.R`),n:G(`param.n`)};return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(`div`,{className:`tgrid`,children:$y[this.shape].map(t=>{let[n,r]=xv(this.shape,t,this.params,J().mode??`print`);return(0,Z.jsx)(q,{label:this.shape===`torus`&&t===`r`?G(`param.r2`):e[t],value:this.params[t],length:t!==`n`,min:n,max:r,step:t===`n`?1:void 0,onChange:e=>{this.params[t]=t===`n`?_v(e,n,r):Q(e,n,r),this.features=this.makeFeatures(),J().setPreview(this.features),$()}},t)})})})}};function tb(e){let t=J(),n=F(t.doc,e);return{name:n.name,color:n.color,features:it(t.doc,n).features,position:n.position,rotation:n.rotation}}async function nb(e,t){let n=Br([e]),r=Br([t]);if(!n||!r)return!1;let i=.01;for(let e=0;e<3;e++)if(r.min[e]-n.max[e]>i||n.min[e]-r.max[e]>i)return!1;try{let n=await J().job({type:`distance`,a:{kind:`body`,item:tb(e)},b:{kind:`body`,item:tb(t)}});return n.type===`distance`&&n.distance<=i}catch{return!0}}var rb=class{op;id;target=null;tools=[];stage=0;keepTools=!1;checking=new Set;auto=!1;constructor(e){this.op=e,this.id=e;let t=J().selection.filter(e=>F(J().doc,e));if(t.length){this.target=t[0],this.stage=1,this.auto=e!==`subtract`&&t.length>=2;for(let e of t.slice(1))this.addTool(e)}J().setSelection([])}addTool(e){this.tools=[...this.tools,e],this.checking.add(e);let t=this.op===`union`?[this.target,...this.tools.filter(t=>t!==e)]:[this.target];(async()=>{let n=!1;for(let r of t)if(await nb(r,e)){n=!0;break}if(this.checking.delete(e),n||(this.tools=this.tools.filter(t=>t!==e),this.auto=!1,J().toast(G(`msg.notTouching`,{name:di(e)}),`error`)),this.auto&&!this.checking.size&&J().tool===this)return this.auto=!1,this.apply();$()})()}prune(){let e=J().doc;this.target&&!F(e,this.target)&&(this.target=null,this.stage=0),this.tools=this.tools.filter(t=>F(e,t))}swap(){if(!this.target||!this.tools.length)return;let[e,...t]=this.tools,n=this.target;this.target=e,this.tools=[];for(let e of[n,...t])this.addTool(e);$()}wants(){return[`item`]}prompt(){return this.stage===0?G(`p.${this.op}Target`):G(`p.${this.op}Tools`)}click(e){let t=e.hit?.kind===`body`?e.hit.itemId:null;t&&(this.stage===0?(this.target=t,this.tools=this.tools.filter(e=>e!==t),this.stage=1):t===this.target?this.stage=0:this.tools.includes(t)?this.tools=this.tools.filter(e=>e!==t):this.addTool(t),$())}highlights(){return this.prune(),{primary:this.target?[this.target]:[],secondary:this.tools}}canApply(){return this.prune(),!!this.target&&this.tools.length>0&&this.checking.size===0}confirmable(){return this.canApply()}apply(){if(!this.canApply())return;let e=J();e.commit(ue(e.doc,this.target,this.tools,this.op,this.keepTools),[this.target]),e.setTool(null)}enter(){this.stage===0&&this.target?this.stage=1:this.apply(),$()}undoPoint(){return this.cancel()}cancel(){if(this.auto=!1,this.tools.length)this.tools=this.tools.slice(0,-1);else if(this.target)this.target=null,this.stage=0;else return!1;return $(),!0}panel(){this.prune();let e=this.op===`subtract`?G(`role.keep`):G(`role.target`),t=this.op===`subtract`?G(`role.cutters`):G(`role.others`);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ni,{steps:[e,t],current:this.stage}),(0,Z.jsx)(Ei,{label:e,color:u_.primary,active:this.stage===0,onActivate:()=>(this.stage=0,$()),names:this.target?[{id:this.target,name:di(this.target)}]:[],onRemove:()=>(this.target=null,this.stage=0,$())}),(0,Z.jsx)(Ei,{label:t,color:u_.secondary,active:this.stage===1,onActivate:()=>this.target&&(this.stage=1,$()),names:this.tools.map(e=>({id:e,name:di(e)})),onRemove:e=>(this.tools=this.tools.filter(t=>t!==e),$())}),this.op===`subtract`&&(0,Z.jsx)(`button`,{className:`small`,disabled:!this.target||!this.tools.length||this.checking.size>0,onClick:()=>this.swap(),children:G(`opt.swapRoles`)}),(0,Z.jsx)(Mi,{open:this.keepTools,children:(0,Z.jsx)(bi,{label:G(`opt.keepTools`),value:this.keepTools,onChange:e=>(this.keepTools=e,$())})}),(0,Z.jsx)(Qy,{canApply:this.canApply(),onApply:()=>this.apply()})]})}};function ib(){let e=J(),t=e.doc,n=[];for(let r of e.selection){let i=F(t,r);if(!i)continue;let a=it(t,i),o=e.meshes[a.id]?.solids??1;if(o<2)continue;let s=a.features;for(let e=1;e<o;e++){let r=p(t,s[0],i,`${i.name} (${e+1})`);t=dt(r.doc,r.id,()=>[...s,{id:V(),kind:`pickSolid`,index:e,enabled:!0}]),n.push(r.id)}t=Cr(t,i.id),t=Sn(t,i.id,{id:V(),kind:`pickSolid`,index:0,enabled:!0})}if(!n.length)return e.toast(G(`msg.nothingToSeparate`));e.commit(t,[...e.selection,...n])}function ab(e){let[t,n]=e.bbox;return Math.min(n[0]-t[0],n[1]-t[1],n[2]-t[2])}function ob(e){let t=pe(J().doc,e);return t?{position:t.position,rotation:t.rotation}:null}function sb(e){let t=pe(J().doc,e.sketchId),n=J().regions[e.sketchId]?.data[e.index];return!t||!n?null:lr(t,[n.center[0],n.center[1],0])}function cb(e){if(e.length<=1)return e.length?sb(e[0]):null;let t=e[0].sketchId,n=pe(J().doc,t),r=J().regions[t]?.data??[],i=0,a=0,o=0;for(let n of e){let e=n.sketchId===t?r[n.index]:void 0;e&&(i+=e.center[0]*e.area,a+=e.center[1]*e.area,o+=e.area)}return!n||o<=0?sb(e[0]):lr(n,[i/o,a/o,0])}function lb(e){let t=J(),n=pe(t.doc,e),r=t.regions[e];return!n||!r||r.entities!==zn(n)||!r.data.length?null:Ii(r.data,Wi(n,r.entities,r.data)).map(t=>({sketchId:e,index:t.index,local:t.local}))}function ub(e,t,n,r,i){let a=J();if(n===`new`||!r||!F(a.doc,r)){a.addBodyFrom(e,t,i);return}let o=F(a.doc,r),s=Kt(o,{...t,name:i,color:`#999999`},[e]);a.commit(Sn(a.doc,r,{id:V(),kind:`boolean`,op:n,tools:[s],enabled:!0}),[r])}var db={new:`#7aa7d9`,union:`#46a35a`,subtract:`#e0483e`,intersect:`#c9a227`};function fb({tool:e}){let t=yr(e=>e.doc.bodies);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Li,{value:e.op,options:[[`new`,G(`op.new`)],[`union`,G(`op.union`)],[`subtract`,G(`op.subtract`)],[`intersect`,G(`op.intersect`)]],onChange:t=>{e.op=t,e.refresh()}}),e.op!==`new`&&(0,Z.jsxs)(`label`,{className:`tselect`,children:[(0,Z.jsx)(`span`,{children:G(`role.target`)}),(0,Z.jsxs)(`select`,{value:e.target??``,onChange:t=>{e.target=t.target.value||null,e.refresh()},children:[(0,Z.jsx)(`option`,{value:``,children:`—`}),t.map(e=>(0,Z.jsx)(`option`,{value:e.id,children:e.name},e.id))]})]})]})}var pb=class{regions=[];op=`new`;target=null;stage=0;features=null;applyOnRelease=!0;stopWaiting=null;allFrom=null;toggled=[];wants(){return[`region`]}pickAll(e){let t=lb(e),n=J().regions[e]?.data.length??0;return!t?.length||n<2?!1:(this.regions=t,this.allFrom=e,this.toggled=[],this.takeHost(e),!0)}takeHost(e){let t=pe(J().doc,e)?.host??null;t&&F(J().doc,t)&&(this.target=t,this.op=`union`)}pickRegion(e,t=!0){return e.region?this.addRegion(e.region,e.shift,t):(e.entity&&J().toast(G(`msg.noClosedRegion`)),!1)}addRegion(e,t,n=!0){if(n&&this.regions.length&&this.regions[0].sketchId!==e.sketchId&&!t&&(this.regions=[],this.allFrom=null,this.toggled=[]),!this.regions.length&&n&&this.allFrom!==e.sketchId&&pe(J().doc,e.sketchId)?.text&&this.pickAll(e.sketchId))return this.regions.some(t=>t.index===e.index)||this.regions.push({...e}),!0;if(this.allFrom&&this.allFrom!==e.sketchId&&!this.regions.length&&(this.allFrom=null,this.toggled=[]),this.allFrom===e.sketchId)return this.toggled.push({...e}),this.regions=Ci(this.regions,{...e}),!0;let r=this.regions.findIndex(t=>t.sketchId===e.sketchId&&t.index===e.index);if(r>=0)this.regions.splice(r,1);else if(n&&this.regions.length&&this.regions[0].sketchId!==e.sketchId)return!1;else this.regions.push({...e});return this.regions.length===1&&this.takeHost(e.sketchId),!0}pickOnlyRegion(e){let t=V_();if(t.length){ai(this,()=>{if(!this.regions.length){for(let e of t)this.addRegion(e,!0);e()}});return}let n=J(),r=n.activeSketch??(n.selection.length===1&&vt(n.doc,n.selection[0])?n.selection[0]:null);if(!r)return;n.ensureRegions(r);let i=()=>{let t=J(),n=pe(t.doc,r);if(t.tool!==this||this.regions.length||!n)return!0;let i=t.regions[r];if(!i||i.entities!==zn(n)||!i.data.length)return!1;if(i.data.length>1)return this.pickAll(r)&&e(),!0;let a=i.data[0].tris;return this.addRegion({sketchId:r,index:0,local:[(a[0]+a[2]+a[4])/3,(a[1]+a[3]+a[5])/3]},!1),e(),!0};ai(this,()=>{if(i())return;let e=yr.subscribe((t,n)=>{(t.regions!==n.regions||t.tool!==n.tool)&&i()&&(e(),this.stopWaiting=null)});this.stopWaiting=e})}prune(){let e=J().doc;this.regions=this.regions.filter(t=>pe(e,t.sketchId)),this.target&&!F(e,this.target)&&(this.target=null)}profile(){if(!this.regions.length)return null;let e=pe(J().doc,this.regions[0].sketchId);return e?{entities:zn(e),picks:this.regions.map(e=>e.local),frame:Jy}:null}refresh(){this.prune();let e=this.build();this.features=e?[e]:null,J().setPreview(this.features),$()}undoPoint(){return this.cancel()}cancel(){let e=this.toggled.pop();return e?(this.regions=Ci(this.regions,e),this.stage=this.regions.length?Math.max(this.stage,1):0,this.refresh(),!0):this.allFrom?(this.allFrom=null,this.regions=[],this.stage=0,this.refresh(),!0):this.regions.length?(this.regions.pop(),this.regions.length||(this.stage=0),this.refresh(),!0):!1}highlights(){return{regions:this.regions.map(e=>({sketchId:e.sketchId,index:e.index})),primary:this.op!==`new`&&this.target?[this.target]:[]}}allHint(){return this.allFrom?(0,Z.jsx)(`p`,{className:`hint`,children:G(`hint.allProfiles`,{n:this.regions.length})}):null}previewPlacement(){return this.features?this.placement():null}confirmable(){return!!this.features&&!yr.getState().status.__preview__?.error}previewColor(){return db[this.op]}apply(){let e=this.build(),t=this.placement();if(e&&t){if(yr.getState().status.__preview__?.error){J().toast(G(`msg.fixErrorFirst`),`error`);return}ub({...e,id:V()},t,this.op,this.target,this.name()),J().setTool(null),Qr()}}dispose(){this.stopWaiting?.(),J().setPreview(null)}},mb=class extends pb{id=`extrude`;distance=Yy()/2;symmetric=!1;constructor(){super(),this.pickOnlyRegion(()=>(this.stage=1,this.refresh()))}wants(){return[`region`,`face`]}prompt(){return this.regions.length?G(`p.distance`):G(`p.extrudePick`)}click(e){if(!e.region&&e.hit?.kind===`body`&&e.hit.faceId!=null){if(this.regions.length)return this.target=e.hit.itemId,this.op===`new`&&(this.op=this.distance<0?`subtract`:`union`),this.refresh();let t=new jb;J().setTool(t),t.click(e);return}this.pickRegion(e)&&(this.stage=+!!this.regions.length,this.refresh())}build(){let e=this.profile();return e?{id:`preview`,kind:`extrude`,profile:e,distance:this.distance,symmetric:this.symmetric,enabled:!0}:null}placement(){return this.regions.length?ob(this.regions[0].sketchId):null}name(){return tf(J().doc.bodies.map(e=>e.name),G(`item.extrude`))}axis(){if(!this.regions.length)return null;let e=this.placement(),t=cb(this.regions);if(!e||!t)return null;let[,n]=Xy();return{origin:t,dir:N(e,[0,0,1]),value:this.distance,min:-n,max:n,anywhere:!0}}setAxis(e){let[,t]=Xy(),n=Q(e,-t,t);Math.abs(n)<1e-6||(this.distance=n,this.target&&this.op!==`new`&&this.op!==`intersect`&&(this.op=n<0?`subtract`:`union`),this.refresh())}input(e){let t=fi(e);return t==null||t===0?!1:(this.setAxis(t),!0)}enter(){this.apply()}panel(){let[,e]=Xy();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ni,{steps:[G(`step.profile`),G(`step.distance`)],current:this.stage}),this.allHint(),(0,Z.jsx)(q,{label:G(`opt.distance`),value:this.distance,length:!0,min:-e,max:e,onChange:e=>Math.abs(e)<1e-6?J().toast(G(`msg.notZero`),`error`):this.setAxis(e)}),(0,Z.jsxs)(`div`,{className:`trow`,children:[(0,Z.jsx)(bi,{label:G(`opt.symmetric`),value:this.symmetric,onChange:e=>(this.symmetric=e,this.refresh())}),(0,Z.jsx)(`button`,{className:`small`,onClick:()=>this.setAxis(-this.distance),children:G(`opt.flip`)})]}),(0,Z.jsx)(fb,{tool:this}),(0,Z.jsx)(Qy,{canApply:!!this.features,onApply:()=>this.apply()})]})}},hb=class extends pb{id=`revolve`;axisLine=null;axisEntity=null;angle=360;constructor(){super(),this.pickOnlyRegion(()=>(this.stage=1,this.refresh()))}wants(){return this.stage===0?[`region`]:[`entity`,`region`]}prompt(){return this.stage===0?G(`p.revolvePick`):this.axisLine?G(`p.angle`):G(`p.revolveAxis`)}click(e){if(this.stage===0||e.region&&!e.entity)this.pickRegion(e)&&(this.stage=1);else if(e.entity&&this.regions.length&&e.entity.sketchId===this.regions[0].sketchId){let t=pe(J().doc,e.entity.sketchId)?.entities.find(t=>t.id===e.entity.entityId);if(t?.t===`line`)this.axisLine=[t.a,t.b];else if(t?.t===`xline`)this.axisLine=[t.p,[t.p[0]+t.d[0],t.p[1]+t.d[1]]];else return J().toast(G(`msg.axisLineOnly`),`error`);this.axisEntity=t.id}this.refresh()}cancel(){return this.axisLine?(this.axisLine=null,this.axisEntity=null,this.refresh(),!0):super.cancel()}build(){let e=this.profile();return!e||!this.axisLine?null:{id:`preview`,kind:`revolve`,profile:e,axis:this.axisLine,angle:this.angle,enabled:!0}}placement(){return this.regions.length?ob(this.regions[0].sketchId):null}name(){return tf(J().doc.bodies.map(e=>e.name),G(`item.revolve`))}input(e){let t=Zr(e)??NaN;return!Number.isFinite(t)||t===0?!1:(this.angle=Math.max(-360,Math.min(360,t)),this.refresh(),!0)}axis(){if(!this.regions.length||!this.axisLine)return null;let e=this.placement(),t=cb(this.regions);if(!e||!t)return null;let[n,r]=this.axisLine,i=lr(e,[n[0],n[1],0]),a=hp(N(e,[r[0]-n[0],r[1]-n[1],0])),o=(t[0]-i[0])*a[0]+(t[1]-i[1])*a[1]+(t[2]-i[2])*a[2],s=[i[0]+a[0]*o,i[1]+a[1]*o,i[2]+a[2]*o],c=[t[0]-s[0],t[1]-s[1],t[2]-s[2]],l=Math.hypot(...c),u=hp(l>1e-6?c:N(e,[-(r[1]-n[1]),r[0]-n[0],0]));return l<1e-6&&(l=Yy()/2),{kind:`angle`,origin:s,dir:a,from:u,radius:l,value:this.angle,min:-360,max:360}}setAxis(e){Math.abs(e)<1e-6||(this.angle=Q(e,-360,360),this.refresh())}enter(){this.apply()}highlights(){let e=super.highlights();return this.axisEntity&&this.regions.length?{...e,entities:[{sketchId:this.regions[0].sketchId,ids:[this.axisEntity]}]}:e}panel(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ni,{steps:[G(`step.profile`),G(`step.axis`),G(`step.angle`)],current:this.regions.length?this.axisLine?2:1:0}),this.allHint(),(0,Z.jsxs)(`div`,{className:`trow`,children:[(0,Z.jsx)(`button`,{className:`small`,onClick:()=>(this.axisLine=[[0,0],[1,0]],this.axisEntity=null,this.refresh()),children:G(`opt.axisX`)}),(0,Z.jsx)(`button`,{className:`small`,onClick:()=>(this.axisLine=[[0,0],[0,1]],this.axisEntity=null,this.refresh()),children:G(`opt.axisY`)})]}),(0,Z.jsx)(q,{label:G(`opt.angle`),value:this.angle,suffix:(0,Z.jsx)(`em`,{children:`°`}),min:-360,max:360,step:15,onChange:e=>Math.abs(e)<1e-6?J().toast(G(`msg.notZero`),`error`):(this.angle=Q(e,-360,360),this.refresh())}),(0,Z.jsx)(fb,{tool:this}),(0,Z.jsx)(Qy,{canApply:!!this.features,onApply:()=>this.apply()})]})}};function gb(e,t){let n=e.find(e=>e.id===t);if(!n)return[];if(ni(n))return[n];let r=[n],i=new Set([n.id]),a=t=>{for(;;){let n=$r(t?r[r.length-1]:r[0]);if(!n.length)return;let a=e.find(e=>!i.has(e.id)&&$r(e).some(e=>n.some(t=>mi(e,t,1e-6))));if(!a)return;i.add(a.id),t?r.push(a):r.unshift(a)}};return a(!0),a(!1),r}async function _b(e,t){let n=F(J().doc,e),r=t.map(t=>ei(e,t)?.sig).filter(Boolean);if(!n||!r.length)return null;try{let e=await J().job({type:`edgesBrep`,key:it(J().doc,n).id,edges:r});return e.type===`edgesBrep`?e.data:null}catch{return null}}function vb(e,t,n){let r=e?.bodyId===t?[...e.ids]:[],i=r.indexOf(n);return i>=0?r.splice(i,1):r.push(n),r}function yb(e,t){let n=t??e.entities.find(e=>e.t!==`point`&&e.t!==`xline`)?.id,r=n?gb(e.entities,n):[];return r.length?{sketchId:e.id,ids:r.map(e=>e.id),chain:r}:null}var bb=class extends pb{id=`sweep`;pathIds=null;pathEdges=null;pathBrep=null;frenet=!1;anchorMode=`center`;anchorPoint=null;pickingAnchor=!1;constructor(){super();let e=J().sub;if(e?.kind===`edge`&&e.ids.length){let{bodyId:t,ids:n}=e;hi(),ai(this,()=>void this.pickEdges(t,[...n]))}this.pickOnlyRegion(()=>(this.stage=1,this.refresh()))}wants(){return this.pickingAnchor?[`region`,`entity`]:this.stage===0?[`region`]:[`entity`,`edge`,`region`]}prompt(){return this.pickingAnchor?G(`p.sweepAnchor`):this.stage===0?G(`p.sweepProfile`):G(`p.sweepPath`)}profileCenter(){if(!this.regions.length)return null;let e=J().regions[this.regions[0].sketchId]?.data??[],t=0,n=0,r=0;for(let i of this.regions){let a=e[i.index];a&&(t+=a.area,n+=a.center[0]*a.area,r+=a.center[1]*a.area)}return t>0?[n/t,r/t]:this.regions[0].local}anchor(){if(this.anchorMode===`center`)return this.profileCenter()??void 0;if(this.anchorMode===`point`)return this.anchorPoint??void 0}path(){let e=this.placement();if(!e)return null;if(this.pathIds){let t=pe(J().doc,this.pathIds.sketchId);return t?{kind:`sketch`,entities:this.pathIds.chain,frame:ir(e,t)}:null}let t=this.pathEdges?F(J().doc,this.pathEdges.bodyId):null;return t&&this.pathBrep?{kind:`brep`,data:this.pathBrep,frame:ir(e,t)}:null}async pickEdges(e,t){this.pathEdges=t.length?{bodyId:e,ids:t}:null,this.pathIds=null,this.pathBrep=null,this.refresh();let n=await _b(e,t);J().tool===this&&this.pathEdges?.ids===t&&(this.pathBrep=n,this.refresh())}click(e){if(this.pickingAnchor){let t=this.regions[0]?.sketchId,n=e.entity?.sketchId===t?e.entity.local:e.region?.sketchId===t?e.region.local:null;n&&(this.anchorPoint=n,this.pickingAnchor=!1,this.refresh());return}if(this.stage===0){this.pickRegion(e)&&(this.stage=1),this.refresh();return}let t=e.entity?pe(J().doc,e.entity.sketchId):void 0;e.entity&&t?(this.pathIds=yb(t,e.entity.entityId),this.pathEdges=null,this.pathBrep=null,this.refresh()):e.hit?.kind===`body`&&e.hit.edgeId!=null?this.pickEdges(e.hit.itemId,vb(this.pathEdges,e.hit.itemId,e.hit.edgeId)):e.region&&this.pickRegion(e)&&this.refresh()}build(){let e=this.profile(),t=this.path();return!e||!t?null:{id:`preview`,kind:`sweep`,profile:e,path:t,frenet:this.frenet,anchor:this.anchor(),enabled:!0}}cancel(){return this.pickingAnchor?(this.pickingAnchor=!1,$(),!0):this.stage===1&&(this.pathIds||this.pathEdges)?(this.pathIds=null,this.pathEdges=null,this.pathBrep=null,this.refresh(),!0):super.cancel()}placement(){return this.regions.length?ob(this.regions[0].sketchId):null}name(){return tf(J().doc.bodies.map(e=>e.name),G(`item.sweep`))}enter(){this.stage===0&&this.regions.length?this.stage=1:this.apply(),$()}highlights(){return{...super.highlights(),entities:this.pathIds?[{sketchId:this.pathIds.sketchId,ids:this.pathIds.ids}]:[],edges:this.pathEdges?[this.pathEdges]:[]}}panel(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ni,{steps:[G(`step.profile`),G(`step.path`)],current:this.stage}),this.allHint(),(0,Z.jsx)(`p`,{className:`hint`,children:G(`opt.sweepAnchor`)}),(0,Z.jsx)(Li,{value:this.anchorMode,options:[[`center`,G(`opt.anchorCenter`)],[`point`,G(`opt.anchorPoint`)],[`keep`,G(`opt.anchorKeep`)]],onChange:e=>{this.anchorMode=e,this.pickingAnchor=e===`point`,this.refresh()}}),this.anchorMode===`point`&&(this.pickingAnchor?null:(0,Z.jsx)(`button`,{onClick:()=>(this.pickingAnchor=!0,$()),children:G(`opt.anchorPicked`)})),(0,Z.jsx)(bi,{label:G(`opt.frenet`),value:this.frenet,onChange:e=>(this.frenet=e,this.refresh())}),(0,Z.jsx)(fb,{tool:this}),(0,Z.jsx)(Qy,{canApply:!!this.features,onApply:()=>this.apply()})]})}},xb=class extends pb{id=`pipe`;pathIds=null;pathEdges=null;pathBrep=null;r=Yy()/10;inner=0;constructor(){super();let e=J(),t=e.sub,n=e.selection.length===1?pe(e.doc,e.selection[0]):void 0;if(t?.kind===`edge`&&t.ids.length){let{bodyId:e,ids:n}=t;hi(),ai(this,()=>void this.pickEdges(e,[...n]))}else n&&(this.pathIds=yb(n),this.pathIds&&ai(this,()=>this.refresh()))}wants(){return[`entity`,`edge`]}prompt(){return G(`p.pipePath`)}async pickEdges(e,t){this.pathEdges=t.length?{bodyId:e,ids:t}:null,this.pathIds=null,this.pathBrep=null,this.refresh();let n=await _b(e,t);J().tool===this&&this.pathEdges?.ids===t&&(this.pathBrep=n,this.refresh())}click(e){let t=e.entity?pe(J().doc,e.entity.sketchId):void 0;if(e.entity&&t)return this.pathIds=yb(t,e.entity.entityId),this.pathEdges=null,this.pathBrep=null,this.refresh();e.hit?.kind===`body`&&e.hit.edgeId!=null&&this.pickEdges(e.hit.itemId,vb(this.pathEdges,e.hit.itemId,e.hit.edgeId))}path(){if(this.pathIds){let e=pe(J().doc,this.pathIds.sketchId);return e?{ref:{kind:`sketch`,entities:this.pathIds.chain,frame:Jy},source:{position:e.position,rotation:e.rotation}}:null}let e=this.pathEdges?F(J().doc,this.pathEdges.bodyId):null;return e&&this.pathBrep?{ref:{kind:`brep`,data:this.pathBrep,frame:Jy},source:{position:e.position,rotation:e.rotation}}:null}build(){let e=this.path();return!e||!(this.r>0)?null:{id:`preview`,kind:`pipe`,path:e.ref,r:this.r,inner:this.inner>0?this.inner:void 0,enabled:!0}}placement(){return this.path()?.source??null}name(){return tf(J().doc.bodies.map(e=>e.name),G(`item.pipe`))}enter(){this.apply()}cancel(){return!this.pathIds&&!this.pathEdges?!1:(this.pathIds=null,this.pathEdges=null,this.pathBrep=null,this.refresh(),!0)}highlights(){return{regions:[],entities:this.pathIds?[{sketchId:this.pathIds.sketchId,ids:this.pathIds.ids}]:[],edges:this.pathEdges?[this.pathEdges]:[],primary:this.op!==`new`&&this.target?[this.target]:[]}}panel(){let[e,t]=Xy();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(q,{label:G(`opt.pipeDiameter`),value:this.r*2,length:!0,min:e,max:t,onChange:n=>(this.r=Q(n,e,t)/2,this.inner=Math.max(0,Math.min(this.inner,this.r-e/2)),this.refresh())}),(0,Z.jsx)(q,{label:G(`opt.pipeInner`),value:this.inner*2,length:!0,min:0,max:Math.max(0,this.r*2-e),onChange:t=>(this.inner=Q(t,0,Math.max(0,this.r*2-e))/2,this.refresh())}),(0,Z.jsx)(fb,{tool:this}),(0,Z.jsx)(Qy,{canApply:!!this.features,onApply:()=>this.apply()})]})}},Sb=class extends pb{id=`loft`;ruled=!1;prompt(){return this.regions.length<2?G(`p.loftPick`,{n:this.regions.length+1}):G(`p.loftMore`)}click(e){if(!e.region)return;let t=e.region,n=this.regions.findIndex(e=>e.sketchId===t.sketchId);n>=0?this.regions.splice(n,1):this.regions.push({...t}),this.refresh()}build(){if(this.prune(),this.regions.length<2)return null;let e=ob(this.regions[0].sketchId);return e?{id:`preview`,kind:`loft`,sections:this.regions.map(t=>{let n=pe(J().doc,t.sketchId);return{entities:zn(n),picks:[t.local],frame:ir(e,n)}}),ruled:this.ruled,enabled:!0}:null}placement(){return this.regions.length?ob(this.regions[0].sketchId):null}name(){return tf(J().doc.bodies.map(e=>e.name),G(`item.loft`))}enter(){this.apply()}panel(){return this.prune(),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ni,{steps:[G(`step.sections`),G(`step.apply`)],current:this.regions.length<2?0:1}),(0,Z.jsx)(`ol`,{className:`tlist`,children:this.regions.map((e,t)=>(0,Z.jsx)(`li`,{children:di(e.sketchId)},t))}),(0,Z.jsx)(bi,{label:G(`opt.ruled`),value:this.ruled,onChange:e=>(this.ruled=e,this.refresh())}),(0,Z.jsx)(fb,{tool:this}),(0,Z.jsx)(Qy,{canApply:!!this.features,onApply:()=>this.apply()})]})}},Cb=class{bodyId=null;applyOnRelease=!0;body(){return this.bodyId?F(J().doc,this.bodyId)??null:null}refresh(){let e=this.body(),t=this.step();J().setPreview(e&&t?[...it(J().doc,e).features,t]:null),$()}previewPlacement(){let e=this.body();return e&&this.step()?{position:e.position,rotation:e.rotation}:null}previewColor(){return this.body()?.color??`#999`}hidden(){return this.bodyId&&this.step()?[this.bodyId]:[]}confirmable(){return!!this.step()&&!yr.getState().status.__preview__?.error}apply(){let e=this.step();if(!e||!this.body())return;if(yr.getState().status.__preview__?.error){J().toast(G(`msg.fixErrorFirst`),`error`);return}let t=J();t.commit(Sn(t.doc,this.bodyId,{...e,id:V()}),[this.bodyId]),this.done()}done(){J().setTool(null)}undoPoint(){return this.cancel?.()??!1}enter(){this.apply()}dispose(){J().setPreview(null)}},wb=class extends Cb{id=`hole`;faceId=null;at=null;n=null;how=`click`;du=0;dv=0;diameter;depth=0;kind=`simple`;cbDiameter;cbDepth;csDiameter;shape=`round`;width;length;corner=0;angle=0;constructor(){super();let e=Ev(J().mode??`print`);this.diameter=e.diameter,this.width=e.diameter*2,this.length=e.diameter,this.cbDiameter=e.cbDiameter,this.cbDepth=e.cbDepth,this.csDiameter=e.csDiameter;let t=J().sub,n=t?.kind===`face`?K(t.bodyId,t.ids[0]):null;t&&n?.planar&&(this.bodyId=t.bodyId,this.faceId=t.ids[0],this.at=n.sig.c,this.n=n.sig.n,this.how=`center`,hi(),ai(this,()=>this.refresh()))}wants(){return[`face`,`point`]}prompt(){return this.at?G(`p.holeSet`):G(`p.holePoint`)}click(e){if(e.hit?.kind!==`body`||e.hit.faceId==null)return;let t=F(J().doc,e.hit.itemId);if(!t)return;let n=e.snap3d?.bodyId===t.id?e.snap3d.point:e.hit.point,r=e.hit.normal??K(t.id,e.hit.faceId)?.worldNormal;if(!r)return;let i=kn(t.position,t.rotation).invert(),a=new y(...n).applyMatrix4(i),o=new y(...r).transformDirection(i).normalize();this.bodyId=t.id,this.faceId=e.hit.faceId,this.at=[a.x,a.y,a.z],this.n=[o.x,o.y,o.z],this.flat()||(this.how=`click`),this.refresh()}flat(){return!!this.bodyId&&this.faceId!=null&&!!K(this.bodyId,this.faceId)?.planar}point(){if(this.how===`click`||!this.bodyId||this.faceId==null)return this.at;let e=fy(this.bodyId,this.faceId);return e?this.how===`center`?e.at(e.w/2,e.h/2):e.at(this.du,this.dv):this.at}step(){let e=this.point();return!e||!this.n||!this.body()||!(this.diameter>0)?null:this.shape===`rect`?this.width>0&&this.length>0?{id:`preview`,kind:`hole`,p:e,n:this.n,diameter:Math.min(this.width,this.length),depth:Math.max(0,this.depth),shape:`rect`,width:this.width,length:this.length,corner:Math.max(0,Math.min(this.corner,Math.min(this.width,this.length)/2)),xDir:this.xDir(),enabled:!0}:null:{id:`preview`,kind:`hole`,p:e,n:this.n,diameter:this.diameter,depth:Math.max(0,this.depth),counterbore:this.kind===`cbore`?{diameter:this.cbDiameter,depth:this.cbDepth}:void 0,countersink:this.kind===`csink`?{diameter:this.csDiameter}:void 0,enabled:!0}}faceU(){if(!this.n)return null;let e=this.flat()?fy(this.bodyId,this.faceId):null;if(e)return{u:e.u,v:e.v};let t=new y(...this.n).normalize(),n=new y(0,0,1).cross(t);n.lengthSq()<1e-9&&(n=new y(1,0,0)),n.normalize();let r=t.clone().cross(n).normalize();return{u:[n.x,n.y,n.z],v:[r.x,r.y,r.z]}}xDir(){let e=this.faceU();if(!e)return[1,0,0];let t=this.angle*Math.PI/180;return[0,1,2].map(n=>e.u[n]*Math.cos(t)+e.v[n]*Math.sin(t))}problem(){return this.shape===`rect`?null:Dv(this.kind,this.diameter,this.cbDiameter,this.csDiameter)}confirmable(){return super.confirmable()&&!this.problem()}apply(){let e=this.problem();if(e)return J().toast(G(e===`cbore`?`msg.cboreSmall`:`msg.csinkSmall`),`error`);super.apply()}clearPick(){this.bodyId=null,this.faceId=null,this.at=null,this.n=null,this.refresh()}cancel(){return this.at?(this.clearPick(),!0):!1}highlights(){return{primary:this.bodyId?[this.bodyId]:[]}}axis(){let e=this.body(),t=this.point();if(!e||!t||!this.n)return null;let n=N(e,this.n);return{origin:lr(e,t),dir:[-n[0],-n[1],-n[2]],value:Math.max(0,this.depth),min:0,max:Xy()[1]}}setAxis(e){this.depth=Q(e,0,Xy()[1]),this.refresh()}moreAxes(){let e=this.body(),t=this.point();if(!e||!t||!this.n)return[];let n=[],r=this.how===`dist`&&this.flat()?fy(this.bodyId,this.faceId):null;r&&(n.push({id:`du`,origin:lr(e,r.at(0,this.dv)),dir:N(e,r.u),value:this.du,min:0,max:r.w}),n.push({id:`dv`,origin:lr(e,r.at(this.du,0)),dir:N(e,r.v),value:this.dv,min:0,max:r.h}));let i=this.shape===`rect`?this.faceU():null;if(i){let r=Math.hypot(this.width,this.length)/2+Math.min(this.width,this.length)*.15;n.push({id:`turn`,kind:`angle`,origin:lr(e,t),dir:N(e,this.n),from:N(e,i.u),radius:r,value:this.angle,min:-180,max:180})}return n}dynInput(){let e=this.how===`dist`&&this.flat()?fy(this.bodyId,this.faceId):null;if(!e)return null;let t=(e,t,n)=>({key:e,kind:`value`,unit:`len`,label:t,min:0,max:n,get:()=>this[e],lock:t=>{t!=null&&(this[e]=Q(t,0,n),this.refresh())}});return{base:null,panel:!1,fields:[t(`du`,`tweak.fromLeft`,e.w),t(`dv`,`tweak.fromBottom`,e.h)],accept:t=>(t.du!=null&&(this.du=Q(t.du,0,e.w)),t.dv!=null&&(this.dv=Q(t.dv,0,e.h)),this.refresh(),!0)}}setMoreAxis(e,t){let n=this.flat()?fy(this.bodyId,this.faceId):null;if(e===`du`&&n)this.du=Q(t,0,n.w);else if(e===`dv`&&n)this.dv=Q(t,0,n.h);else if(e===`turn`)this.angle=Q(t,-180,180);else return;this.refresh()}panel(){let[e,t]=Xy(),n=(e,n)=>r=>(this[e]=Q(r,n,t),this.refresh()),r=this.flat()?fy(this.bodyId,this.faceId):null,i=this.problem();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ni,{steps:[G(`step.point`),G(`step.size`)],current:+!!this.at}),this.at&&(0,Z.jsx)(Li,{value:this.how,options:r?[[`click`,G(`tweak.atClick`)],[`center`,G(`tweak.center`)],[`dist`,G(`tweak.byDistance`)]]:[[`click`,G(`tweak.atClick`)]],onChange:e=>(this.how=e,this.refresh())}),this.how===`dist`&&r&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`p`,{className:`hint`,children:G(`tweak.faceSize`,{w:qr(r.w),h:qr(r.h)})}),(0,Z.jsxs)(`div`,{className:`tgrid two`,children:[(0,Z.jsx)(q,{label:G(`tweak.fromLeft`),value:this.du,length:!0,min:0,max:r.w,onChange:e=>(this.du=Q(e,0,r.w),this.refresh())}),(0,Z.jsx)(q,{label:G(`tweak.fromBottom`),value:this.dv,length:!0,min:0,max:r.h,onChange:e=>(this.dv=Q(e,0,r.h),this.refresh())})]})]}),(0,Z.jsx)(Li,{value:this.shape,options:[[`round`,G(`mo.holeRound`)],[`rect`,G(`mo.holeRect`)]],onChange:e=>(this.shape=e,this.refresh())}),this.shape===`round`?(0,Z.jsx)(q,{label:G(`opt.diameter`),value:this.diameter,length:!0,min:e,max:t,onChange:n(`diameter`,e)}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(`div`,{className:`tgrid two`,children:[(0,Z.jsx)(q,{label:G(`mo.holeWidth`),value:this.width,length:!0,min:e,max:t,onChange:n=>(this.width=Q(n,e,t),this.refresh())}),(0,Z.jsx)(q,{label:G(`mo.holeLength`),value:this.length,length:!0,min:e,max:t,onChange:n=>(this.length=Q(n,e,t),this.refresh())})]}),(0,Z.jsxs)(`div`,{className:`tgrid two`,children:[(0,Z.jsx)(q,{label:G(`mo.holeCorner`),value:this.corner,length:!0,min:0,max:Math.min(this.width,this.length)/2,onChange:e=>(this.corner=Q(e,0,Math.min(this.width,this.length)/2),this.refresh())}),(0,Z.jsx)(q,{label:G(`mo.turn`),value:this.angle,min:-180,max:180,step:15,suffix:`°`,onChange:e=>(this.angle=Q(e,-180,180),this.refresh())})]})]}),(0,Z.jsx)(q,{label:G(`opt.holeDepth`),value:this.depth,length:!0,min:0,max:t,onChange:n(`depth`,0)}),(0,Z.jsx)(`p`,{className:`hint`,children:G(`hint.holeDepth`)}),this.shape===`round`&&(0,Z.jsxs)(Mi,{open:this.kind!==`simple`,children:[(0,Z.jsx)(Li,{value:this.kind,options:[[`simple`,G(`opt.holeSimple`)],[`cbore`,G(`opt.holeCbore`),G(`uitext.holeCboreTip`)],[`csink`,G(`opt.holeCsink`),G(`uitext.holeCsinkTip`)]],onChange:e=>(this.kind=e,this.refresh())}),this.kind===`cbore`&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(q,{label:G(`opt.cbDiameter`),value:this.cbDiameter,length:!0,min:e,max:t,onChange:n(`cbDiameter`,e)}),(0,Z.jsx)(q,{label:G(`opt.cbDepth`),value:this.cbDepth,length:!0,min:e,max:t,onChange:n(`cbDepth`,e)})]}),this.kind===`csink`&&(0,Z.jsx)(q,{label:G(`opt.csDiameter`),value:this.csDiameter,length:!0,min:e,max:t,onChange:n(`csDiameter`,e)})]}),i&&(0,Z.jsx)(`p`,{className:`hint`,children:G(i===`cbore`?`msg.cboreSmall`:`msg.csinkSmall`)}),(0,Z.jsx)(Qy,{canApply:this.confirmable(),onApply:()=>this.apply()})]})}};function Tb(e){let t=J(),n=F(t.doc,e),r=n?t.meshes[it(t.doc,n).id]:null;return!!r&&!r.isMesh&&r.solids===0}var Eb=class extends Cb{id=`thicken`;thickness=Yy()/10;side=`out`;constructor(){super();let e=J().selection.find(e=>Tb(e));e&&(this.bodyId=e,queueMicrotask(()=>this.refresh()))}wants(){return[`item`]}prompt(){return this.bodyId?G(`p.distance`):G(`p.thickenPick`)}click(e){if(e.hit?.kind===`body`){if(!Tb(e.hit.itemId))return J().toast(G(`err.not-sheet`),`error`);this.bodyId=e.hit.itemId,this.refresh()}}step(){return this.bodyId&&this.thickness>0?{id:`preview`,kind:`thicken`,thickness:this.thickness,side:this.side,enabled:!0}:null}highlights(){return{primary:this.bodyId?[this.bodyId]:[]}}cancel(){return this.bodyId?(this.bodyId=null,this.refresh(),!0):!1}axis(){let e=this.body(),t=e?J().meshes[it(J().doc,e).id]:null;if(!e||!t?.faces.length)return null;let n=t.faces.reduce((e,t)=>t.a>e.a?t:e),r=N(e,n.n),[i,a]=Xy();return{origin:lr(e,n.c),dir:this.side===`in`?[-r[0],-r[1],-r[2]]:r,value:this.thickness,min:i,max:a}}setAxis(e){let[t,n]=Xy();this.thickness=Q(e,t,n),this.refresh()}apply(){let e=this.step();if(!e||!this.body())return;if(yr.getState().status.__preview__?.error)return J().toast(G(`msg.fixErrorFirst`),`error`);let t=J();t.commit(Ab(Sn(t.doc,this.bodyId,{...e,id:V()}),this.bodyId),[this.bodyId]),t.setTool(null)}panel(){let[e,t]=Xy();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Li,{value:this.side,options:[[`out`,G(`opt.thickOut`)],[`in`,G(`opt.thickIn`)],[`both`,G(`opt.thickBoth`)]],onChange:e=>(this.side=e,this.refresh())}),(0,Z.jsx)(q,{label:G(`opt.thickness`),value:this.thickness,length:!0,min:e,max:t,onChange:n=>(this.thickness=Q(n,e,t),this.refresh())}),(0,Z.jsx)(Qy,{canApply:this.confirmable(),onApply:()=>this.apply()})]})}};function Db(){let e=J(),t=e.selection.filter(e=>Tb(e));if(!t.length)return e.selection.some(t=>F(e.doc,t))?e.toast(G(`mo.capClosed`),`error`):e.setTool(new kb);Ob(t)}function Ob(e){let t=J();t.commit(Ab(Ce(t.doc,e[0],e.slice(1)),e[0]),[e[0]])}var kb=class{id=`capSolid`;wants(){return[`item`]}prompt(){return G(`mo.capPick`)}click(e){if(e.hit?.kind===`body`){if(!Tb(e.hit.itemId))return J().toast(G(`mo.capClosed`),`error`);Ob([e.hit.itemId]),J().setTool(null)}}panel(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`p`,{className:`hint`,children:G(`mo.capHint`)}),(0,Z.jsx)(`div`,{className:`tactions`,children:(0,Z.jsx)(`button`,{onClick:()=>J().setTool(null),children:G(`btn.close`)})})]})}};function Ab(e,t){let n=` (${G(`item.sheet`)})`;return{...e,bodies:e.bodies.map(e=>e.id===t&&e.name.endsWith(n)?{...e,name:e.name.slice(0,-n.length)}:e)}}var jb=class extends Cb{id=`presspull`;face=null;faceId=null;distance=Yy()/4;constructor(){super();let e=J().sub,t=e?.kind===`face`?K(e.bodyId,e.ids[0]):null;e&&t?.planar&&(this.bodyId=e.bodyId,this.face=t.sig,this.faceId=e.ids[0],hi(),ai(this,()=>this.refresh()))}wants(){return[`face`]}prompt(){return this.face?G(`p.distance`):G(`p.pickFace`)}at=null;click(e){if(e.hit?.kind!==`body`||e.hit.faceId==null)return;let t=K(e.hit.itemId,e.hit.faceId);t&&(this.bodyId=e.hit.itemId,this.face=t.sig,this.faceId=e.hit.faceId,this.at=t.planar||!e.hit.normal?null:{p:e.hit.point,n:e.hit.normal},this.refresh())}step(){return this.face?{id:`preview`,kind:`presspull`,face:this.face,distance:this.distance,enabled:!0}:null}archEdit(){let e=this.body();if(!e||!this.face||this.face.n[2]<.99)return null;let t=it(J().doc,e),n=t.features[0];if(t.features.length!==1||n?.kind!==`wall`||t.topLevel)return null;let r=mn(n,[{t:`face`,face:this.face,d:[0,0,this.distance]}]);return r?{bodyId:t.id,featureId:n.id,patch:r,features:[{...n,...r}]}:null}refresh(){let e=this.archEdit();if(!e)return super.refresh();J().setPreview(e.features),$()}apply(){let e=this.archEdit();if(!e)return super.apply();let t=J();if(yr.getState().status.__preview__?.error)return t.toast(G(`msg.fixErrorFirst`),`error`);t.commit($t(t.doc,e.bodyId,e.featureId,e.patch),[this.bodyId]),this.done()}axis(){if(!this.bodyId||this.faceId==null)return null;let[,e]=Xy();if(this.at)return{origin:this.at.p,dir:this.at.n,value:this.distance,min:-e,max:e,anywhere:!0};let t=K(this.bodyId,this.faceId);return t?{origin:t.worldCenter,dir:t.worldNormal,value:this.distance,min:-e,max:e,anywhere:!0}:null}setAxis(e){let[,t]=Xy(),n=Q(e,-t,t);Math.abs(n)<1e-6||(this.distance=n,this.refresh())}input(e){let t=fi(e);return t==null||t===0?!1:(this.setAxis(t),!0)}cancel(){return this.face?(this.bodyId=null,this.face=null,this.faceId=null,this.at=null,this.refresh(),!0):!1}highlights(){return this.bodyId&&this.faceId!=null?{faces:[{bodyId:this.bodyId,ids:[this.faceId]}]}:{}}panel(){let[,e]=Xy();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ni,{steps:[G(`step.face`),G(`step.distance`)],current:+!!this.face}),(0,Z.jsx)(q,{label:G(`opt.distance`),value:this.distance,length:!0,min:-e,max:e,onChange:e=>Math.abs(e)<1e-6?J().toast(G(`msg.notZero`),`error`):this.setAxis(e)}),(0,Z.jsx)(Qy,{canApply:!!this.face,onApply:()=>this.apply()})]})}},Mb=class extends Cb{id;edges=[];size;constructor(e){super(),this.id=e,this.size=J().mode===`arch`?100:1;let t=J().sub;if(t?.kind===`edge`)this.bodyId=t.bodyId,this.edges=[...t.ids],hi(),ai(this,()=>this.refresh());else{let e=J().selection;e.length===1&&F(J().doc,e[0])&&(this.bodyId=e[0])}}allEdgeIds(){let e=this.body();return(e?J().meshes[it(J().doc,e).id]:null)?.edgeInfo.map(e=>e.id)??[]}pickAllEdges(){let e=this.allEdgeIds();this.edges=this.edges.length===e.length?[]:e,this.refresh()}cancel(){return this.edges.length?(this.edges.pop(),this.refresh(),!0):!1}wants(){return[`edge`]}prompt(){return this.edges.length?G(`p.moreEdges`):G(`p.pickEdges`)}click(e){if(e.hit?.kind!==`body`||e.hit.edgeId==null)return;this.bodyId!==e.hit.itemId&&(this.bodyId=e.hit.itemId,this.edges=[]);let t=this.edges.indexOf(e.hit.edgeId);t>=0?this.edges.splice(t,1):this.edges.push(e.hit.edgeId),this.refresh()}step(){if(!this.bodyId||!this.edges.length)return null;let e=this.edges.map(e=>ei(this.bodyId,e)?.sig).filter(Boolean);return{id:`preview`,kind:this.id,edges:e,size:this.size,enabled:!0}}input(e){let t=fi(e);if(t==null)return!1;let n=Xy();return t<n[0]||t>n[1]?(Zy(n),!0):(this.size=t,this.refresh(),!0)}highlights(){return this.bodyId?{edges:[{bodyId:this.bodyId,ids:this.edges}]}:{}}axis(){let e=this.body(),t=this.edges[this.edges.length-1],n=e?J().meshes[it(J().doc,e).id]:null,r=e&&t!=null&&n?n.edgeInfo.find(e=>e.id===t):null,i=r&&n?Dp(n,r.id):null;if(!e||!r||!i||!n)return null;let[a,o]=Xy(),s=Math.max(a,Math.min(this.size,o),Math.min(o,ab(n)/2)),c=lr(e,r.m),l=xp(i,this.id);if(l)return{origin:c,dir:N(e,l.dir),scale:l.scale,value:this.size,min:a,max:s};let u=i.faces.length?i.faces[0].inward:[-i.out[0],-i.out[1],-i.out[2]];return{origin:c,dir:N(e,u),value:this.size,min:a,max:s}}setAxis(e){let[t,n]=Xy();this.size=Q(e,t,n),this.refresh()}panel(){let[e,t]=Xy();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ni,{steps:[G(`step.edges`),G(`step.size`)],current:+!!this.edges.length}),(0,Z.jsx)(q,{label:this.id===`fillet`?G(`opt.radius`):G(`opt.distance`),value:this.size,length:!0,min:e,max:t,onChange:n=>(this.size=Q(n,e,t),this.refresh())}),(0,Z.jsx)(`p`,{className:`hint`,children:G(`hint.edges`,{n:this.edges.length})}),(()=>{let e=this.allEdgeIds().length;if(!e)return null;let t=this.edges.length===e;return(0,Z.jsx)(`button`,{className:`small`,"data-tip":G(`ac.allEdgesTip`),onClick:()=>this.pickAllEdges(),children:t?G(`ac.noEdges`):G(`ac.allEdges`,{n:e})})})(),(0,Z.jsx)(Qy,{canApply:this.edges.length>0,onApply:()=>this.apply()})]})}},Nb=class extends Cb{id=`shell`;faces=[];thickness;constructor(){super(),this.thickness=J().mode===`arch`?200:1.5;let e=J().sub;e?.kind===`face`&&(this.bodyId=e.bodyId,this.faces=[...e.ids],hi(),ai(this,()=>this.refresh()))}cancel(){return this.faces.length?(this.faces.pop(),this.refresh(),!0):!1}wants(){return[`face`]}prompt(){return G(`p.shellFaces`)}click(e){if(e.hit?.kind!==`body`||e.hit.faceId==null)return;this.bodyId!==e.hit.itemId&&(this.bodyId=e.hit.itemId,this.faces=[]);let t=this.faces.indexOf(e.hit.faceId);t>=0?this.faces.splice(t,1):this.faces.push(e.hit.faceId),this.refresh()}step(){return!this.bodyId||!this.faces.length?null:{id:`preview`,kind:`shell`,faces:this.faces.map(e=>K(this.bodyId,e)?.sig).filter(Boolean),thickness:this.thickness,enabled:!0}}input(e){let t=fi(e);if(t==null)return!1;let n=Xy();return t<n[0]||t>n[1]?(Zy(n),!0):(this.thickness=t,this.refresh(),!0)}highlights(){return this.bodyId?{faces:[{bodyId:this.bodyId,ids:this.faces}]}:{}}axis(){let e=this.bodyId&&this.faces.length?K(this.bodyId,this.faces[this.faces.length-1]):null,t=this.body(),n=t?J().meshes[it(J().doc,t).id]:null;if(!e||!n||!t)return null;let[r,i]=Xy(),a=Math.max(r,Math.min(this.thickness,i),Math.min(i,ab(n)/2)),o=Op(n.faces,e.sig.n,this.faces);return o?{origin:lr(t,o.c),dir:N(t,o.n.map(e=>-e)),value:this.thickness,min:r,max:a}:{origin:e.worldCenter,dir:e.worldNormal.map(e=>-e),value:this.thickness,min:r,max:a}}setAxis(e){let[t,n]=Xy();this.thickness=Q(e,t,n),this.refresh()}panel(){let[e,t]=Xy();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ni,{steps:[G(`step.openFaces`),G(`step.thickness`)],current:+!!this.faces.length}),(0,Z.jsx)(q,{label:G(`opt.thickness`),value:this.thickness,length:!0,min:e,max:t,onChange:n=>(this.thickness=Q(n,e,t),this.refresh())}),(0,Z.jsx)(Qy,{canApply:this.faces.length>0,onApply:()=>this.apply()})]})}},Pb=class{id=`split`;bodyId=null;plane=`XY`;offset=0;face=null;sketchId=null;source=`pick`;how=`line`;along=`XY`;pts=[];ref=null;cursor=null;stopKeys=ri(this);constructor(){let e=J().selection.find(e=>F(J().doc,e));e&&(this.bodyId=e);let t=J().selection.find(e=>vt(J().doc,e));t&&(this.sketchId=t,this.plane=`sketch`),ai(this,()=>this.refresh())}step(){let e=J(),t=this.bodyId?F(e.doc,this.bodyId):null;if(!t)return null;if(this.source===`pick`&&this.plane===`sketch`){let n=this.sketchId?pe(e.doc,this.sketchId):null;return n?{id:`preview`,kind:`split`,origin:[0,0,0],normal:[0,0,1],sketch:{entities:n.entities,frame:ir(t,n)},enabled:!0}:null}let n=this.worldPlane();if(!n)return null;let r=kn(t.position,t.rotation).invert(),i=new y(...n.origin).applyMatrix4(r),a=new y(...n.normal).transformDirection(r);return{id:`preview`,kind:`split`,origin:[i.x,i.y,i.z],normal:[a.x,a.y,a.z],enabled:!0}}refresh(){let e=J(),t=this.bodyId?F(e.doc,this.bodyId):null,n=this.step();if(e.meshes.__preview__){let t={...e.meshes};delete t[fr],e.set({meshes:t})}e.setPreview(t&&n?[...it(e.doc,t).features,n]:null),$()}result(){let e=yr.getState(),t=e.status[fr]?.error,n=e.meshes[fr];return n&&!t&&n.solids>=2?{ok:!0}:t||n&&n.solids<2?{ok:!1,error:t??`split-miss`}:{ok:!1}}previewPlacement(){let e=this.bodyId?F(J().doc,this.bodyId):null;return e&&this.step()?{position:e.position,rotation:e.rotation}:null}previewColor(){return this.bodyId&&F(J().doc,this.bodyId)?.color||`#999`}hidden(){return this.bodyId&&this.step()&&J().meshes.__preview__?[this.bodyId]:[]}dispose(){this.stopKeys(),J().setPreview(null)}wants(){return this.bodyId&&this.source===`draw`?this.how===`line`&&!this.ref?[`point`,`face`]:[`point`]:this.bodyId&&this.plane===`sketch`?[`entity`,`item`]:this.bodyId?[`face`,`item`]:[`item`]}prompt(){return this.bodyId&&this.source===`draw`?this.worldPlane()?G(`p.confirm`):this.how===`point`?G(`p.splitDrawPoint`):this.how===`three`?G(`p.splitDraw3`,{n:this.pts.length+1}):this.pts.length?G(`p.splitDrawLineB`):G(`p.splitDrawLineA`):this.bodyId&&this.plane===`sketch`?G(`p.splitSketch`):this.bodyId?G(`p.splitPlane`):G(`p.splitBody`)}setSource(e){this.source=e,this.restartDrawing()}setHow(e){this.how=e,this.restartDrawing()}restartDrawing(){this.pts=[],this.ref=null,this.cursor=null,this.refresh()}undoPoint(){return this.source!==`draw`||!this.pts.length?!1:(this.pts.pop(),this.pts.length||(this.ref=null),this.refresh(),!0)}refFor(e){if(e.hit?.kind===`body`&&e.hit.faceId!=null){let t=K(e.hit.itemId,e.hit.faceId);if(t?.planar)return{plane:{origin:t.worldCenter,normal:t.worldNormal},bodyId:e.hit.itemId,faceId:e.hit.faceId};if(e.hit.normal)return{plane:{origin:e.hit.point,normal:e.hit.normal}}}let t=e.workPlane?wt(J().doc,e.workPlane.id):null;return t?{plane:{origin:t.position,normal:Re(t)}}:{plane:{origin:[0,0,tn(J())],normal:[0,0,1]}}}drawPoint(e,t){if(this.how===`line`){let n=this.ref??this.refFor(e);t&&(this.ref=n);let r=gr(n.plane.origin,n.plane.normal),i=n.bodyId?Jr(n.bodyId,r):[],a=Ui(e,r,i,this.pts[0]?xi(r,this.pts[0]):null,!n.bodyId);return a?_i(r,a.pt):null}if(e.snap3d)return e.snap3d.point;if(e.hit?.kind===`body`)return e.hit.point;if(e.workPlane)return e.workPlane.point;let n={position:[0,0,tn(J())],rotation:[0,0,0]},r=Ui(e,n,[],null);return r?_i(n,r.pt):null}drawClick(e){this.worldPlane()&&(this.pts=[],this.ref=null);let t=this.drawPoint(e,!0);if(!t)return;let n=this.pts[this.pts.length-1];n&&Math.hypot(t[0]-n[0],t[1]-n[1],t[2]-n[2])<1e-9||(this.pts.push(t),this.how===`three`&&this.pts.length===3&&!this.worldPlane()&&(this.pts.pop(),J().toast(G(`msg.splitInLine`),`error`)),this.cursor=null,this.refresh())}move(e){this.bodyId&&this.source===`draw`&&(this.cursor=this.worldPlane()?null:this.drawPoint(e,!1),$())}input(e){let t=e.trim().toLowerCase();return this.source!==`draw`||t!==`u`&&t!==`undo`?!1:(this.undoPoint(),!0)}click(e){if(this.bodyId&&this.source===`draw`)return this.drawClick(e);if(this.bodyId&&this.plane===`sketch`&&(e.entity||e.hit?.kind===`sketch`))return this.sketchId=e.entity?.sketchId??e.hit.itemId,this.refresh(),this.splitWhenReady();if(this.bodyId&&e.workPlane&&!e.hit){let t=wt(J().doc,e.workPlane.id);return this.face={origin:t.position,normal:Re(t)},this.plane=`face`,this.refresh(),this.splitWhenReady()}if(e.hit?.kind===`body`){if(!this.bodyId)this.bodyId=e.hit.itemId;else if(e.hit.faceId!=null&&e.hit.itemId!==this.bodyId){let t=K(e.hit.itemId,e.hit.faceId);return t?.planar?(this.face={origin:t.worldCenter,normal:t.worldNormal},this.plane=`face`,this.refresh(),this.splitWhenReady()):J().toast(G(`msg.flatFaceOnly`),`error`)}else e.hit.itemId!==this.bodyId&&(this.bodyId=e.hit.itemId);this.refresh()}}splitWhenReady(){Vi(this,()=>!!this.result().error)}confirmable(){return this.result().ok}axis(){if(!this.bodyId||this.source===`draw`||this.plane===`face`||this.plane===`sketch`)return null;let e=Br([this.bodyId]);if(!e)return null;let t=this.plane===`XY`?[0,0,1]:this.plane===`YZ`?[1,0,0]:[0,1,0],[,n]=Xy();return{origin:Vr(e),dir:t,value:this.offset,min:-n,max:n}}setAxis(e){let[,t]=Xy();this.offset=Q(e,-t,t),this.refresh()}worldPlane(){if(!this.bodyId)return null;if(this.source===`draw`)return this.drawnPlane(this.pts);if(this.plane===`sketch`)return null;if(this.plane===`face`)return this.face;let e=Br([this.bodyId]);if(!e)return null;let t=Vr(e),n=this.plane===`XY`?[0,0,1]:this.plane===`YZ`?[1,0,0]:[0,1,0];return{origin:[t[0]+n[0]*this.offset,t[1]+n[1]*this.offset,t[2]+n[2]*this.offset],normal:n}}drawnPlane(e){return this.how===`point`?e[0]?Ri(this.along,e[0],this.offset):null:this.how===`three`?e.length>=3?Gi(e[0],e[1],e[2]):null:e.length>=2&&this.ref?Pi(e[0],e[1],this.ref.plane.normal):null}livePlane(){let e=this.worldPlane();return e||this.source!==`draw`||!this.cursor?e:this.drawnPlane([...this.pts,this.cursor])}overlay3d(){if(!this.bodyId)return null;let e=[],t=[],n=this.livePlane(),r=n?Br([this.bodyId]):null;if(n&&r){let i=Math.hypot(r.max[0]-r.min[0],r.max[1]-r.min[1],r.max[2]-r.min[2]),a=Ti(n,Vr(r),i*.6+1);t=a.tris,e.push(...a.outline)}let i=[];if(this.source===`draw`){let t=this.cursor&&!this.worldPlane()?[...this.pts,this.cursor]:this.pts;if(this.how!==`point`)for(let n=0;n+1<t.length;n++)e.push(...t[n],...t[n+1]);this.how===`three`&&t.length===3&&e.push(...t[2],...t[0]);for(let e of this.pts)i.push({p:e,text:`●`})}return e.length||i.length?{segments:e,labels:i,fills:t}:null}apply(){let e=J(),t=this.bodyId?F(e.doc,this.bodyId):null,n=this.step();if(!t||!n)return;let r=this.result();if(!r.ok){r.error&&e.toast(G(er(r.error)),`error`);return}let i={...n,id:V()},a=Cr(e.doc,t.id),o=[...F(a,t.id).features,i],s=p(a,o[0],t,`${t.name} (2)`);a=dt(s.doc,s.id,()=>[...o,{id:V(),kind:`pickSolid`,index:-1,enabled:!0}]),a=dt(a,t.id,()=>[...o,{id:V(),kind:`pickSolid`,index:0,enabled:!0}]),e.commit(a,[t.id,s.id]),e.setTool(null)}enter(){this.apply()}highlights(){let e=this.source===`draw`,t=e?this.ref:null;return{primary:this.bodyId?[this.bodyId]:[],secondary:!e&&this.plane===`sketch`&&this.sketchId?[this.sketchId]:[],faces:t?.bodyId&&t.faceId!=null?[{bodyId:t.bodyId,ids:[t.faceId]}]:[]}}panel(){return(0,Z.jsx)(Ib,{tool:this})}},Fb={line:`hint.splitLine`,three:`hint.split3`,point:`hint.splitPoint`};function Ib({tool:e}){yr(e=>e.meshes[fr]),yr(e=>e.status[fr]);let[,t]=Xy(),n=e.result(),r=(0,Z.jsx)(q,{label:G(`opt.offset`),value:e.offset,length:!0,min:-t,max:t,onChange:n=>(e.offset=Q(n,-t,t),e.refresh())});return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ni,{steps:[G(`step.body`),G(`step.plane`)],current:+!!e.bodyId}),(0,Z.jsx)(Li,{value:e.source,options:[[`pick`,G(`split.pick`)],[`draw`,G(`split.draw`)]],onChange:t=>e.setSource(t)}),e.source===`pick`?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Li,{value:e.plane,options:[[`XY`,G(`opt.planeXY`),G(`uitext.planeXYTip`)],[`YZ`,G(`opt.planeYZ`),G(`uitext.planeYZTip`)],[`XZ`,G(`opt.planeXZ`),G(`uitext.planeXZTip`)],[`face`,G(`opt.planeFace`)],[`sketch`,G(`opt.planeSketch`)]],onChange:t=>(e.plane=t,e.refresh())}),e.plane!==`face`&&e.plane!==`sketch`&&r,e.plane===`sketch`&&(0,Z.jsx)(`p`,{className:`hint`,children:e.sketchId?`${G(`opt.planeSketch`)}: ${di(e.sketchId)}`:G(`p.splitSketch`)})]}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ei,{label:G(`step.body`),color:u_.primary,active:!e.bodyId,names:e.bodyId?[{id:e.bodyId,name:di(e.bodyId)}]:[],onRemove:()=>(e.bodyId=null,e.restartDrawing())}),(0,Z.jsx)(Li,{value:e.how,options:[[`line`,G(`split.byLine`)],[`three`,G(`split.by3`)],[`point`,G(`split.byPoint`)]],onChange:t=>e.setHow(t)}),e.how===`point`&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Li,{value:e.along,options:[[`XY`,G(`opt.planeXY`),G(`uitext.planeXYTip`)],[`YZ`,G(`opt.planeYZ`),G(`uitext.planeYZTip`)],[`XZ`,G(`opt.planeXZ`),G(`uitext.planeXZTip`)]],onChange:t=>(e.along=t,e.refresh())}),r]}),(0,Z.jsx)(`p`,{className:`hint`,children:G(Fb[e.how])}),(0,Z.jsx)(Xr,{n:e.pts.length,onUndo:()=>e.undoPoint()})]}),e.step()&&n.error&&(0,Z.jsx)(`p`,{className:`hint`,children:G(er(n.error))}),(0,Z.jsx)(Qy,{canApply:n.ok,onApply:()=>e.apply()})]})}var Lb=class{linked=!1;ids=J().selection.slice();wants(){return[`item`]}prompt(){return this.ids.length?G(`p.patternSet`):G(`p.pickItems`)}click(e){if(!e.hit)return;let t=e.hit.itemId,n=te(J().doc,[t]);this.ids=this.ids.includes(t)?this.ids.filter(e=>!n.includes(e)):[...this.ids,...n],this.picked(),$()}picked(){}undoPoint(){return this.cancel()}cancel(){return this.ids.length?(this.ids=this.ids.slice(0,-1),this.picked(),$(),!0):!1}confirmable(){return this.ids=this.ids.filter(e=>Zn(J().doc,e)),this.ids.length>0}center(){let e=Br(this.ids);return e?Vr(e):[0,0,0]}ghosts(){let e=this.center(),t=[];for(let n of this.ids){let r=Zn(J().doc,n);if(r)for(let i of this.placementsFor(r,e))t.push({id:n,placement:i})}return t}highlights(){return{primary:this.ids}}apply(){let e=J(),t=e.doc,n=this.center(),r=[];for(let e of this.ids){let i=Zn(t,e);if(!i)continue;let a=di(e),o=Lr(t,e,this.placementsFor(i,n),this.linked,e=>`${a} ${e+2}`);t=o.doc,r.push(...o.ids)}r.length&&(e.commit(t,[...this.ids,...r]),e.setTool(null))}enter(){this.apply()}},Rb=class extends Lb{id=`rectPattern`;count=[3,1,1];spacing=[Yy()*1.5,Yy()*1.5,Yy()*1.5];spacingSet=!1;constructor(){super(),this.picked()}picked(){let e=Br(this.ids);e&&!this.spacingSet&&(this.spacing=wv([e.max[0]-e.min[0],e.max[1]-e.min[1],e.max[2]-e.min[2]],J().mode??`print`))}confirmable(){return super.confirmable()&&this.count.some(e=>e>1)}placementsFor(e){let t=[];for(let n=0;n<this.count[0];n++)for(let r=0;r<this.count[1];r++)for(let i=0;i<this.count[2];i++)(n||r||i)&&t.push({position:[e.position[0]+n*this.spacing[0],e.position[1]+r*this.spacing[1],e.position[2]+i*this.spacing[2]],rotation:e.rotation});return t}panel(){let e=[`X`,`Y`,`Z`],[t,n]=Xy();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(`div`,{className:`tgrid`,children:[e.map((e,t)=>(0,Z.jsx)(q,{label:`${G(`opt.count`)} ${e}`,value:this.count[t],min:1,max:100,step:1,onChange:e=>(this.count[t]=_v(e,1,100),$())},`c${e}`)),e.map((e,r)=>(0,Z.jsx)(q,{label:`${G(`opt.spacing`)} ${e}`,value:this.spacing[r],length:!0,min:t,max:n,onChange:e=>(this.spacing[r]=Q(e,t,n),this.spacingSet=!0,$())},`s${e}`))]}),(0,Z.jsx)(Mi,{open:this.linked,children:(0,Z.jsx)(bi,{label:G(`opt.linkedCopies`),value:this.linked,onChange:e=>(this.linked=e,$())})}),(0,Z.jsx)(Qy,{canApply:this.confirmable(),onApply:()=>this.apply()})]})}},zb=class extends Lb{id=`circPattern`;count=6;angle=360;rotAxis=2;centerAt=`origin`;pivot=null;picking=!1;wants(){return this.picking?[`point`]:[`item`]}prompt(){return this.picking?G(`p.centerPick`):super.prompt()}click(e){if(this.picking){let t=Yb(e);return t?(this.pivot=t,this.picking=!1,$()):void 0}super.click(e)}cancel(){return this.picking?(this.picking=!1,this.pivot||(this.centerAt=`origin`),$(),!0):super.cancel()}center(){return this.centerAt===`point`&&this.pivot?this.pivot:[0,0,0]}confirmable(){return!this.picking&&super.confirmable()}overlay3d(){return this.ids.length?{segments:[],labels:[{p:this.center(),text:`+`}]}:null}placementsFor(e,t){let n=t,r=[],i=Math.abs(Math.abs(this.angle)-360)<1e-9,a=this.angle/(i?this.count:Math.max(1,this.count-1)),o=new y(+(this.rotAxis===0),+(this.rotAxis===1),+(this.rotAxis===2));for(let t=1;t<this.count;t++){let i=new M().makeRotationAxis(o,h.degToRad(a*t)),s=new M().makeTranslation(n[0],n[1],n[2]),c=new M().makeTranslation(-n[0],-n[1],-n[2]),l=s.multiply(i).multiply(c).multiply(kn(e.position,e.rotation));r.push(_(l))}return r}panel(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(`div`,{className:`tgrid two`,children:[(0,Z.jsx)(q,{label:G(`opt.count`),value:this.count,min:2,max:360,step:1,onChange:e=>(this.count=_v(e,2,360),$())}),(0,Z.jsx)(q,{label:G(`opt.totalAngle`),value:this.angle,suffix:(0,Z.jsx)(`em`,{children:`°`}),min:-360,max:360,step:15,onChange:e=>Math.abs(e)<1e-6?J().toast(G(`msg.notZero`),`error`):(this.angle=Q(e,-360,360),$())})]}),(0,Z.jsx)(`div`,{className:`tlabel`,children:G(`opt.patternCenter`)}),(0,Z.jsx)(Li,{value:this.centerAt,options:[[`origin`,G(`opt.atOrigin`)],[`point`,G(`opt.originPoint`)]],onChange:e=>(this.centerAt=e,this.picking=e===`point`,$())}),(0,Z.jsxs)(Mi,{open:this.rotAxis!==2||this.linked,children:[(0,Z.jsx)(Li,{value:String(this.rotAxis),options:[[`0`,G(`opt.axisXRot`)],[`1`,G(`opt.axisYRot`)],[`2`,G(`opt.axisZRot`)]],onChange:e=>(this.rotAxis=Number(e),$())}),(0,Z.jsx)(bi,{label:G(`opt.linkedCopies`),value:this.linked,onChange:e=>(this.linked=e,$())})]}),(0,Z.jsx)(Qy,{canApply:this.confirmable(),onApply:()=>this.apply()})]})}},Bb=class{id=`workPlane`;mode=`offset`;from=null;second=null;distance=Yy()/2;applyOnRelease=!0;constructor(){let e=J(),t=e.sub?.kind===`face`?K(e.sub.bodyId,e.sub.ids[0]):null,n=(e.doc.workPlanes??[]).find(t=>e.selection.includes(t.id));e.sub&&t?.planar?(this.from={c:t.worldCenter,n:t.worldNormal,size:this.sizeFor(e.sub.bodyId)},hi()):n&&(this.from={c:n.position,n:Re(n),size:n.size})}wants(){return[`face`,`plane`]}undoPoint(){return this.cancel()}cancel(){if(this.second)this.second=null;else if(this.from)this.from=null;else return!1;return $(),!0}prompt(){return this.mode===`mid`?this.from?G(`p.wpSecond`):G(`p.wpFirst`):this.from?G(`p.distance`):G(`p.wpBase`)}sizeFor(e){let t=e?Br([e]):null;return t?Math.max(t.max[0]-t.min[0],t.max[1]-t.min[1],t.max[2]-t.min[2])*1.3:Yy()*3}click(e){let t=null;if(e.hit?.kind===`body`&&e.hit.faceId!=null){let n=K(e.hit.itemId,e.hit.faceId);if(!n?.planar)return J().toast(G(`msg.flatFaceOnly`),`error`);t={c:n.worldCenter,n:n.worldNormal,size:this.sizeFor(e.hit.itemId)}}else if(e.workPlane){let n=wt(J().doc,e.workPlane.id);t={c:n.position,n:Re(n),size:n.size}}else!e.hit&&this.mode===`offset`&&(t={c:[0,0,0],n:[0,0,1],size:Yy()*3});if(t){if(this.mode===`mid`&&this.from){let e=t.n[0]*this.from.n[0]+t.n[1]*this.from.n[1]+t.n[2]*this.from.n[2];return Math.abs(e)<.9999?J().toast(G(`msg.parallelOnly`),`error`):(this.second={c:t.c,n:t.n},this.apply())}this.from=t,this.second=null,$()}}result(){let e=this.from;return e?this.mode===`offset`?{c:[e.c[0]+e.n[0]*this.distance,e.c[1]+e.n[1]*this.distance,e.c[2]+e.n[2]*this.distance],n:e.n,size:e.size}:this.second?{c:[(e.c[0]+this.second.c[0])/2,(e.c[1]+this.second.c[1])/2,(e.c[2]+this.second.c[2])/2],n:e.n,size:e.size}:null:null}axis(){let e=this.from,[,t]=Xy();return this.mode===`offset`&&e?{origin:e.c,dir:e.n,value:this.distance,min:-t,max:t,anywhere:!0}:null}setAxis(e){let[,t]=Xy();this.distance=Q(e,-t,t),$()}dynInput(){if(this.mode!==`offset`||!this.from)return null;let[,e]=Xy();return{base:null,panel:!1,fields:[{key:`d`,kind:`value`,unit:`len`,label:`dyn.dist`,min:-e,max:e,get:()=>this.distance,lock:e=>e!=null&&this.setAxis(e)}],accept:e=>e.d!=null&&(this.setAxis(e.d),this.apply(),!0)}}overlay3d(){let e=this.result();if(!e)return null;let t=gr(e.c,e.n),n=kn(t.position,t.rotation),r=e.size/2,i=[[-r,-r],[r,-r],[r,r],[-r,r]].map(([e,t])=>new y(e,t,0).applyMatrix4(n)),a=[];for(let e=0;e<4;e++)a.push(i[e].x,i[e].y,i[e].z,i[(e+1)%4].x,i[(e+1)%4].y,i[(e+1)%4].z);return{segments:a,labels:[]}}confirmable(){return!!this.result()}apply(){let e=this.result();if(!e)return;let t=J(),n=Ie(t.doc,gr(e.c,e.n),e.size,`${G(`item.workPlane`)} ${(t.doc.workPlanes?.length??0)+1}`);t.commit(n.doc,[n.id]),t.setTool(null)}enter(){this.apply()}panel(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Li,{value:this.mode,options:[[`offset`,G(`opt.wpOffset`)],[`mid`,G(`opt.wpMid`)]],onChange:e=>(this.mode=e,this.from=null,this.second=null,$())}),this.mode===`offset`&&(0,Z.jsx)(q,{label:G(`opt.offset`),value:this.distance,length:!0,min:-Xy()[1],max:Xy()[1],onChange:e=>this.setAxis(e)}),(0,Z.jsx)(Qy,{canApply:!!this.result(),onApply:()=>this.apply()})]})}},Vb=class{id=`sectionView`;plane=`XZ`;picked=null;offset=0;flip=!1;around=[];constructor(){let e=J();this.around=e.sub?[e.sub.bodyId]:e.selection.filter(t=>F(e.doc,t));let t=e.sub?.kind===`face`?K(e.sub.bodyId,e.sub.ids[0]):null;t?.planar&&(this.plane=`pick`,this.picked={c:t.worldCenter,n:t.worldNormal},hi()),this.update()}wants(){return this.plane===`pick`?[`face`,`plane`]:[]}dynInput(){return null}cancel(){return this.plane!==`pick`||!this.picked?!1:(this.picked=null,this.update(),!0)}prompt(){return this.plane===`pick`?G(`p.sectionPick`):G(`p.sectionSet`)}click(e){if(this.plane===`pick`){if(e.hit?.kind===`body`&&e.hit.faceId!=null){let t=K(e.hit.itemId,e.hit.faceId);if(!t?.planar)return J().toast(G(`msg.flatFaceOnly`),`error`);this.picked={c:t.worldCenter,n:t.worldNormal}}else if(e.workPlane){let t=wt(J().doc,e.workPlane.id);this.picked={c:t.position,n:Re(t)}}else return;this.offset=0,this.update()}}basePlane(){return this.plane===`pick`?this.picked:{c:this.centre(),n:this.plane===`XY`?[0,0,1]:this.plane===`YZ`?[1,0,0]:[0,-1,0]}}centre(){let e=J(),t=this.around.filter(t=>F(e.doc,t)),n=t.length?t:e.showSolids?e.doc.bodies.filter(e=>e.visible).map(e=>e.id):[],r=Br(n);if(r)return Vr(r);let i=n.map(t=>F(e.doc,t).position);if(!i.length)return[0,0,0];let a=i.reduce((e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],[0,0,0]);return[a[0]/i.length,a[1]/i.length,a[2]/i.length]}update(){let e=this.basePlane();if(!e)return J().set({section:null});let t=this.flip?[-e.n[0],-e.n[1],-e.n[2]]:e.n;J().set({section:{c:[e.c[0]+e.n[0]*this.offset,e.c[1]+e.n[1]*this.offset,e.c[2]+e.n[2]*this.offset],n:t}}),$()}axis(){let e=this.basePlane(),[,t]=Xy();return e?{origin:e.c,dir:e.n,value:this.offset,min:-t,max:t,anywhere:!0}:null}setAxis(e){let[,t]=Xy();this.offset=Q(e,-t,t),this.update()}enter(){J().setTool(null)}panel(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Li,{value:this.plane,options:[[`XY`,G(`opt.planeXY`),G(`uitext.planeXYTip`)],[`YZ`,G(`opt.planeYZ`),G(`uitext.planeYZTip`)],[`XZ`,G(`opt.planeXZ`),G(`uitext.planeXZTip`)],[`pick`,G(`opt.sectionPick`)]],onChange:e=>(this.plane=e,this.offset=0,this.update())}),(0,Z.jsx)(q,{label:G(`opt.offset`),value:this.offset,length:!0,min:-Xy()[1],max:Xy()[1],onChange:e=>this.setAxis(e)}),(0,Z.jsx)(bi,{label:G(`dv.flip`),value:this.flip,onChange:e=>(this.flip=e,this.update())}),(0,Z.jsx)(`div`,{className:`tactions`,children:(0,Z.jsx)(`button`,{onClick:()=>(J().set({section:null}),J().setTool(null)),children:G(`btn.sectionOff`)})})]})}},Hb=class extends Lb{id=`pathPattern`;count=5;align=!0;pathIds=null;pts=[];wants(){return this.ids.length?[`entity`,`item`]:[`item`]}prompt(){return this.ids.length?this.pts.length?G(`p.patternSet`):G(`p.pathPick`):G(`p.pickItems`)}click(e){if(this.ids.length&&e.entity){let t=pe(J().doc,e.entity.sketchId),n=gb(t.entities,e.entity.entityId);this.pathIds={sketchId:t.id,ids:n.map(e=>e.id)};let r=[],i=null,a=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1]);n.forEach((e,o)=>{let s=vi(e);if(s.length){if(i)a(s[s.length-1],i)<a(s[0],i)&&(s=[...s].reverse());else if(n[o+1]){let e=$r(n[o+1]),t=t=>Math.min(...e.map(e=>a(t,e)));t(s[0])<t(s[s.length-1])&&(s=[...s].reverse())}for(let e of s)(!i||a(e,i)>1e-9)&&r.push(lr(t,[e[0],e[1],0]));i=s[s.length-1]}});let o=this.center(),s=e=>Math.hypot(e[0]-o[0],e[1]-o[1],e[2]-o[2]);r.length>1&&s(r[r.length-1])<s(r[0])&&r.reverse(),this.pts=r,$();return}super.click(e)}at(e){let t=this.pts.map(e=>new y(...e)),n=0;for(let r=0;r+1<t.length;r++){let i=t[r].distanceTo(t[r+1]);if(n+i>=e||r+2===t.length){let a=i>0?Math.min(1,Math.max(0,(e-n)/i)):0;return{p:t[r].clone().lerp(t[r+1],a),t:t[r+1].clone().sub(t[r]).normalize()}}n+=i}return{p:t[0]??new y,t:new y(1,0,0)}}length(){let e=0;for(let t=0;t+1<this.pts.length;t++)e+=Math.hypot(this.pts[t+1][0]-this.pts[t][0],this.pts[t+1][1]-this.pts[t][1],this.pts[t+1][2]-this.pts[t][2]);return e}placementsFor(e){if(this.pts.length<2||this.count<2)return[];let t=this.length(),n=this.pts[0],r=this.pts[this.pts.length-1],i=t/(Math.hypot(r[0]-n[0],r[1]-n[1],r[2]-n[2])<1e-6?this.count:this.count-1),a=this.at(0),o=[];for(let t=1;t<this.count;t++){let n=this.at(i*t),r=this.align?new M().makeRotationFromQuaternion(new An().setFromUnitVectors(a.t,n.t)):new M,s=new M().makeTranslation(n.p.x,n.p.y,n.p.z).multiply(r).multiply(new M().makeTranslation(-a.p.x,-a.p.y,-a.p.z)).multiply(kn(e.position,e.rotation));o.push(_(s))}return o}highlights(){return{primary:this.ids,entities:this.pathIds?[this.pathIds]:[]}}confirmable(){return super.confirmable()&&this.pts.length>1}cancel(){return this.pts.length?(this.pts=[],this.pathIds=null,$(),!0):super.cancel()}panel(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ni,{steps:[G(`step.items`),G(`step.path`)],current:+!!this.ids.length}),(0,Z.jsx)(q,{label:G(`opt.count`),value:this.count,min:2,max:500,step:1,onChange:e=>(this.count=_v(e,2,500),$())}),(0,Z.jsx)(bi,{label:G(`opt.alignPath`),value:this.align,onChange:e=>(this.align=e,$())}),(0,Z.jsx)(bi,{label:G(`opt.linkedCopies`),value:this.linked,onChange:e=>(this.linked=e,$())}),(0,Z.jsx)(Qy,{canApply:this.confirmable(),onApply:()=>this.apply()})]})}};function Ub(e,t){let n=kn(e.position,e.rotation).invert(),r=new y(...t.origin).applyMatrix4(n),i=new y(...t.normal).transformDirection(n);return{id:V(),kind:`mirror`,origin:[r.x,r.y,r.z],normal:[i.x,i.y,i.z],enabled:!0}}var Wb=class{id=`mirror`;titleKey(){return`cmd.mirror3d`}ids=J().selection.filter(e=>F(J().doc,e));skipped=J().selection.some(e=>!F(J().doc,e)&&vt(J().doc,e));plane=`YZ`;at=`side`;face=null;keep=!0;constructor(){ai(this,()=>this.refresh())}wants(){return this.plane===`face`?[`face`]:[`item`]}prompt(){return this.plane===`face`&&!this.face?G(`p.pickFace`):this.ids.length?G(`p.mirrorReady`):G(`p.pickItems`)}click(e){if(this.plane===`face`){if(e.hit?.kind===`body`&&e.hit.faceId!=null){let t=K(e.hit.itemId,e.hit.faceId);if(!t?.planar)return J().toast(G(`msg.flatFaceOnly`),`error`);if(this.face={origin:t.worldCenter,normal:t.worldNormal},this.bodies().length)return this.apply()}}else if(e.hit?.kind===`body`){let t=e.hit.itemId;this.ids=this.ids.includes(t)?this.ids.filter(e=>e!==t):[...this.ids,t]}else if(e.hit)return J().toast(G(`msg.mirrorSolidsOnly`),`error`);this.refresh()}undoPoint(){return this.cancel()}cancel(){if(this.plane===`face`&&this.face)this.face=null;else if(this.ids.length)this.ids=this.ids.slice(0,-1);else return!1;return this.refresh(),!0}bodies(){return this.ids.filter(e=>F(J().doc,e))}confirmable(){return this.bodies().length>0&&!!this.worldPlane()}worldPlane(){if(this.plane===`face`)return this.face;let e=Br(this.bodies());return e?Tv(e,this.plane,this.at):null}refresh(){let e=J(),t=this.worldPlane(),[n,...r]=this.bodies().map(t=>F(e.doc,t));if(!t||!n)return e.setPreview(null),$();let i=[...it(e.doc,n).features,Ub(n,t)],a=r.map(r=>Kt(n,{position:r.position,rotation:r.rotation,name:r.name,color:r.color},[...it(e.doc,r).features,Ub(r,t)]));a.length&&i.push({id:V(),kind:`boolean`,op:`union`,tools:a,enabled:!0}),e.setPreview(i),$()}previewPlacement(){let e=this.bodies().map(e=>F(J().doc,e))[0];return e&&this.worldPlane()?{position:e.position,rotation:e.rotation}:null}previewColor(){return`#7aa7d9`}hidden(){return this.keep||!this.worldPlane()?[]:this.bodies()}dispose(){J().setPreview(null)}apply(){let e=this.worldPlane();if(!e)return;let t=J(),n=t.doc,r=[];for(let t of this.bodies()){let i=F(n,t);if(!i)continue;let a=t;if(this.keep){let e=et(n,[t],!1,[0,0,0],e=>`${e} ${G(`copySuffix`)}`);n=e.doc,a=e.ids[0]}else n=Cr(n,t);n=Sn(n,a,Ub(i,e)),r.push(a)}r.length&&(t.commit(n,r),t.setTool(null))}enter(){this.apply()}highlights(){return{primary:this.bodies()}}panel(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Li,{value:this.plane,options:[[`YZ`,G(`opt.planeYZ`),G(`uitext.planeYZTip`)],[`XZ`,G(`opt.planeXZ`),G(`uitext.planeXZTip`)],[`XY`,G(`opt.planeXY`),G(`uitext.planeXYTip`)],[`face`,G(`opt.planeFace`)]],onChange:e=>(this.plane=e,this.refresh())}),this.plane!==`face`&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`div`,{className:`tlabel`,children:G(`opt.mirrorAt`)}),(0,Z.jsx)(Li,{value:this.at,options:[[`side`,G(`opt.atSide`)],[`center`,G(`opt.atCenter`)],[`origin`,G(`opt.atOrigin`)]],onChange:e=>(this.at=e,this.refresh())})]}),(0,Z.jsx)(bi,{label:G(`opt.keepSource`),value:this.keep,onChange:e=>(this.keep=e,$())}),this.skipped&&!this.bodies().length&&(0,Z.jsx)(`p`,{className:`hint`,children:G(`msg.mirrorSolidsOnly`)}),(0,Z.jsx)(Qy,{canApply:this.confirmable(),onApply:()=>this.apply()})]})}},Gb=class{id=`align`;ids=J().selection.slice();ref=null;pickingRef=!1;choice=[null,null,null];order=[];hover=null;px=1;wants(){return[`item`]}prompt(){return this.pickingRef?G(`align2.pickRef`):this.movers().length<(this.ref?1:2)?G(`p.alignPick`):G(`p.alignHow`)}movers(){return this.ids.filter(e=>e!==this.ref)}targetBox(){return this.ref?Br([this.ref]):this.ids.length>=2?Br(this.ids):null}shownChoice(){let e=[...this.choice];return this.hover&&(e[this.hover.axis]=this.hover.side),e}moves(e=this.choice){let t=this.targetBox();return t?Ty(this.movers().map(e=>({id:e,box:Br([e])})).filter(e=>!!e.box),t,e):[]}dots(){let e=this.targetBox();if(!e)return[];let t=Wy()?.camera.position;return Ey(e,this.px*24,t?[t.x,t.y,t.z]:null).dots}dotAt(e,t){let n=Wy();if(!n)return null;let r=n.renderer.domElement.getBoundingClientRect();return Dy(this.dots(),e=>n.toScreen(e),e-r.left,t-r.top,11)}setHover(e){(e?.axis!==this.hover?.axis||e?.side!==this.hover?.side)&&(this.hover=e,$())}move(e){let t=this.pickingRef?null:this.dotAt(e.clientX,e.clientY);this.setHover(t?{axis:t.axis,side:t.side}:null)}choose(e,t){this.order=this.order.filter(t=>t!==e),this.choice[e]===t?this.choice[e]=null:(this.choice[e]=t,this.order.push(e)),$()}setRef(e){this.pickingRef=!1,e&&e===this.ref&&(e=null),this.ref=e,e&&!this.ids.includes(e)&&(this.ids=[...this.ids,e]),$()}click(e){if(!this.pickingRef){let t=this.dotAt(e.clientX,e.clientY);if(t)return this.choose(t.axis,t.side)}if(!e.hit)return this.pickingRef?void(this.pickingRef=!1,$()):oi();let t=e.hit.itemId;if(this.pickingRef||e.alt)return this.setRef(t);t===this.ref&&(this.ref=null),this.ids=this.ids.includes(t)?this.ids.filter(e=>e!==t):[...this.ids,t],$()}undoPoint(){let e=this.order.pop();return e!=null&&(this.choice[e]=null,$(),!0)}cancel(){return this.undoPoint()}confirmable(){return this.choice.some(Boolean)&&this.moves().length>0}enter(){let e=J(),t=[];for(let n of this.moves()){let r=Zn(e.doc,n.id);r&&t.push({id:n.id,position:[r.position[0]+n.delta[0],r.position[1]+n.delta[1],r.position[2]+n.delta[2]],rotation:r.rotation})}this.choice=[null,null,null],this.order=[],this.hover=null,t.length&&e.setPlacements(t),$()}highlights(){return{primary:this.ref?[this.ref]:[],secondary:this.movers()}}ghosts(){let e=J(),t=[];for(let n of this.moves(this.shownChoice())){let r=F(e.doc,n.id)?Zn(e.doc,n.id):null;r&&t.push({id:n.id,placement:{position:[r.position[0]+n.delta[0],r.position[1]+n.delta[1],r.position[2]+n.delta[2]],rotation:r.rotation}})}return t}overlay3d(e){this.px=e;let t=this.targetBox();if(!t)return null;let n=Wy()?.camera.position,r=Ey(t,e*24,n?[n.x,n.y,n.z]:null),i=r.segments;for(let e of this.moves(this.shownChoice())){let t=Br([e.id]);if(!t)continue;let n=Vr(t);i.push(n[0],n[1],n[2],n[0]+e.delta[0],n[1]+e.delta[1],n[2]+e.delta[2])}return{segments:i,labels:r.dots.map(e=>{let t=this.hover?.axis===e.axis&&this.hover.side===e.side,n=this.choice[e.axis]===e.side;return{p:e.p,text:`●`,cls:`adot${n?` on`:``}${t?` lit`:``}`}}),fills:r.fill}}panel(){let e={X:[G(`opt.alignLeft`),G(`opt.align.mid`),G(`opt.alignRight`)],Y:[G(`opt.alignFront`),G(`opt.align.mid`),G(`opt.alignBack`)],Z:[G(`opt.alignBottom`),G(`opt.align.mid`),G(`opt.alignTop`)]},t=[`X`,`Y`,`Z`],n=!!this.targetBox()&&this.movers().length>0;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ei,{label:G(`align2.ref`),color:u_.primary,active:this.pickingRef,onActivate:()=>(this.pickingRef=!this.pickingRef,$()),names:this.ref?[{id:this.ref,name:di(this.ref)}]:[],onRemove:()=>this.setRef(null)}),(0,Z.jsx)(`p`,{className:`hint`,children:this.pickingRef?G(`align2.pickRef`):this.ref?G(`align2.refHint`):G(`align2.noRef`)}),(0,Z.jsx)(Ei,{label:G(`align2.movers`),color:u_.secondary,names:this.movers().map(e=>({id:e,name:di(e)})),onRemove:e=>(this.ids=this.ids.filter(t=>t!==e),$())}),(0,Z.jsx)(`table`,{className:`talign`,children:(0,Z.jsx)(`tbody`,{children:t.map((t,r)=>(0,Z.jsxs)(`tr`,{children:[(0,Z.jsx)(`th`,{children:t}),Cy.map((i,a)=>{let o=r,s=this.choice[o]===i;return(0,Z.jsx)(`td`,{children:(0,Z.jsx)(`button`,{className:`small${s?` on`:``}`,"aria-pressed":s,disabled:!n,onMouseEnter:()=>this.setHover({axis:o,side:i}),onMouseLeave:()=>this.setHover(null),onClick:()=>this.choose(o,i),children:e[t][a]})},i)})]},t))})}),(0,Z.jsx)(Qy,{})]})}},Kb=class{id=`faceSnap`;first=null;constructor(){let e=J().sub;e?.kind===`face`&&K(e.bodyId,e.ids[0])?.planar&&(this.first={bodyId:e.bodyId,faceId:e.ids[0]},hi())}wants(){return[`face`]}prompt(){return this.first?G(`p.snapTarget`):G(`p.snapSource`)}undoPoint(){return this.cancel()}cancel(){return this.first?(this.first=null,$(),!0):!1}click(e){if(e.hit?.kind!==`body`||e.hit.faceId==null)return;if(!K(e.hit.itemId,e.hit.faceId)?.planar)return J().toast(G(`msg.flatFaceOnly`),`error`);if(!this.first){this.first={bodyId:e.hit.itemId,faceId:e.hit.faceId},$();return}if(e.hit.itemId===this.first.bodyId)return;let t=K(this.first.bodyId,this.first.faceId),n=K(e.hit.itemId,e.hit.faceId),r=J(),i=F(r.doc,this.first.bodyId);if(!t||!n||!i)return;let a=new y(...t.worldNormal),o=new y(...n.worldNormal).negate(),s=new An().setFromUnitVectors(a,o),c=new y(...t.worldCenter),l=new M().makeRotationFromQuaternion(s),u=new M().makeTranslation(...n.worldCenter).multiply(l).multiply(new M().makeTranslation(-c.x,-c.y,-c.z)).multiply(kn(i.position,i.rotation)),d=_(u),f=te(r.doc,[i.id]),p=u.clone().multiply(kn(i.position,i.rotation).invert()),m=f.map(e=>{if(e===i.id)return{id:e,...d};let t=Zn(r.doc,e);return{id:e,..._(p.clone().multiply(kn(t.position,t.rotation)))}});r.setPlacements(m),r.setTool(null)}highlights(){return this.first?{faces:[{bodyId:this.first.bodyId,ids:[this.first.faceId]}]}:{}}panel(){return(0,Z.jsx)(Ni,{steps:[G(`step.movingFace`),G(`step.targetFace`)],current:+!!this.first})}};function qb(){let e=J();return e.selection.length<=1&&e.selection.every(t=>F(e.doc,t))?new Sy:new Jb}var Jb=class{id=`scale`;factor=1;ids=J().selection.slice();wants(){return[`item`]}prompt(){return this.ids.length?G(`p.scaleFactor`):G(`p.pickItems`)}click(e){if(!e.hit)return oi();let t=e.hit.itemId;this.ids=this.ids.includes(t)?this.ids.filter(e=>e!==t):[...this.ids,t],$()}cancel(){return this.ids.length?(this.ids=this.ids.slice(0,-1),$(),!0):!1}undoPoint(){return this.cancel()}confirmable(){return this.ids.length>0&&this.factor>0&&this.factor!==1}input(e){let t=Zr(e)??NaN;return t>0?t<yv[0]||t>yv[1]?(Zy(yv,!1),!0):(this.factor=t,this.apply(),!0):!1}apply(){if(!(this.factor>0)||this.factor===1)return;let e=J(),t=e.doc,n=Br(this.ids),r=n?Vr(n):[0,0,0],i=[],a=new Set(Cv(t,this.ids));for(let e of this.ids){a.has(e)&&(t=Sn(t,e,{id:V(),kind:`scale`,factor:this.factor,enabled:!0})),pe(t,e)&&(t=qn(t,e,e=>({...e,entities:e.entities.map(e=>Fi(e,ii([0,0],this.factor)))})));let n=Zn(t,e);n&&i.push({id:e,position:[r[0]+(n.position[0]-r[0])*this.factor,r[1]+(n.position[1]-r[1])*this.factor,r[2]+(n.position[2]-r[2])*this.factor],rotation:n.rotation})}for(let e of i)t=Un(t,e.id,e.position,e.rotation);e.commit(t),e.setTool(null)}enter(){this.apply()}highlights(){return{primary:this.ids}}panel(){let e=Br(this.ids),t=e?e.max.map((t,n)=>t-e.min[n]):null,[n,r]=Xy(),[i,a]=yv;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(q,{label:G(`opt.factor`),value:this.factor,min:i,max:a,step:.1,onChange:e=>(this.factor=Q(e,i,a),$())}),t&&(0,Z.jsx)(`div`,{className:`tgrid`,children:[`X`,`Y`,`Z`].map((e,o)=>(0,Z.jsx)(q,{label:`${G(`opt.sizeTo`)} ${e}`,value:t[o]*this.factor,length:!0,min:n,max:r,onChange:e=>(this.factor=Q(e/Math.max(1e-9,t[o]),i,a),$())},e))}),(0,Z.jsx)(Qy,{canApply:this.ids.length>0&&this.factor!==1,onApply:()=>this.apply()})]})}};function Yb(e){if(e.snap3d)return e.snap3d.point;if(e.hit)return e.hit.point;let t=e.snapped??e.plane;return t?[t[0],t[1],0]:null}function Xb(e){let t=J(),n=zi();if(!n)return t.toast(G(`msg.needSelection`));let r=[e[0]-n[0],e[1]-n[1],e[2]-n[2]];t.setPlacements(t.selection.map(e=>{let n=Zn(t.doc,e);return n?{id:e,position:[n.position[0]+r[0],n.position[1]+r[1],n.position[2]+r[2]],rotation:n.rotation}:null}).filter(Boolean))}var Zb=class{id=`move`;gizmo=!0;step=`drag`;hover=null;wants(){return this.step===`drag`?[`item`]:[`point`]}prompt(){return Si()&&J().selection.length?G(`gizmo2.pivotOn`):this.step===`target`?G(`p.pivotTarget`):J().selection.length?G(`p.moveDrag`):G(`p.pickItems`)}setStep(e){this.step=e,this.hover=null,e!==`drag`&&Hr(!1),$()}move(e){this.step!==`drag`&&(this.hover=Yb(e),$())}click(e){if(this.step!==`drag`){let t=Yb(e);return t?(Xb(t),this.setStep(`drag`)):void 0}if(e.hit)J().select(e.hit.itemId,e.shift||e.ctrl);else if(!e.shift)return oi();$()}cancel(){return this.step!==`drag`&&(this.setStep(`drag`),!0)}overlay3d(){if(this.step!==`target`||!this.hover)return null;let e=zi();if(!e)return null;let t=this.hover;return{segments:[...e,...t],labels:[{p:[(e[0]+t[0])/2,(e[1]+t[1])/2,(e[2]+t[2])/2],text:qr(Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2]))}]}}panel(){return(0,Z.jsx)(Qb,{tool:this})}};function Qb({tool:e}){let t=yr(e=>e.selection),n=yr(e=>e.pivot);yr(e=>e.doc),yr(e=>e.toolTick);let r=ci(e=>e.pivotMode),i=ci(e=>!!e.frame&&e.key===Xi(t)),a=(e,t)=>{let n=J(),r=zi()??[0,0,0],i=new M().makeRotationFromEuler(new xr(h.degToRad(t[0]),h.degToRad(t[1]),h.degToRad(t[2]),`XYZ`)),a=new M().makeTranslation(r[0]+e[0],r[1]+e[1],r[2]+e[2]).multiply(i).multiply(new M().makeTranslation(-r[0],-r[1],-r[2]));n.setPlacements(n.selection.map(e=>{let t=Zn(n.doc,e);return t?{id:e,..._(a.clone().multiply(kn(t.position,t.rotation)))}:null}).filter(Boolean))},[o,s]=(0,Wu.useState)(0),c=(e,t,n)=>{if(!t)return;let r=[0,0,0];r[e]=t,n?a([0,0,0],r):a(r,[0,0,0]),s(e=>e+1)},[,l]=Xy();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(`div`,{className:`tgrid`,children:[[`X`,`Y`,`Z`].map((e,t)=>(0,Z.jsx)(q,{label:`${G(`opt.moveBy`)} ${e}`,value:0,length:!0,min:-l,max:l,onChange:e=>c(t,Q(e,-l,l),!1)},`m${e}${o}`)),[`X`,`Y`,`Z`].map((e,t)=>(0,Z.jsx)(q,{label:`${G(`opt.rotateBy`)} ${e}`,value:0,suffix:(0,Z.jsx)(`em`,{children:`°`}),min:-360,max:360,onChange:e=>c(t,Q(e,-360,360),!0)},`r${e}${o}`))]}),(0,Z.jsx)(`div`,{className:`tlabel`,children:G(`opt.pivot`)}),(0,Z.jsxs)(`div`,{className:`tbtns`,children:[t.length?(0,Z.jsx)(qi,{wide:!0}):(0,Z.jsx)(`button`,{className:`small`,disabled:!0,children:G(`gizmo2.pivotBtn`)}),(0,Z.jsx)(`button`,{className:`small`,disabled:!i,"data-tip":G(`gizmo2.axisResetTip`),onClick:()=>si(ci.getState().key,null),children:G(`gizmo2.axisReset`)})]}),(0,Z.jsx)(`p`,{className:`hint`,children:G(r?`gizmo2.pivotOn`:`gizmo2.keys`)}),(0,Z.jsx)(Mi,{open:!!n||e.step!==`drag`||r,children:(0,Z.jsxs)(`div`,{className:`tbtns`,children:[(0,Z.jsx)(`button`,{className:`small${e.step===`target`?` on`:``}`,disabled:!t.length,onClick:()=>e.setStep(e.step===`target`?`drag`:`target`),children:G(`opt.pivotToPoint`)}),(0,Z.jsx)(`button`,{className:`small`,disabled:!t.length,onClick:()=>ax(n&&t.includes(n.bodyId)?`pivot`:`bottom`),children:G(`opt.pivotToOrigin`)}),(0,Z.jsx)(`button`,{className:`small`,disabled:!n,onClick:()=>J().set({pivot:null}),children:G(`opt.pivotReset`)})]})}),(0,Z.jsx)(`p`,{className:`hint`,children:G(`status.objects`,{n:t.length})})]})}function $b(){let e=J(),t=e.sub;if(!t?.ids.length)return e.toast(G(`msg.needSelection`));let n=null;if(t.kind===`vertex`)n=yi(t.bodyId,t.ids[0]);else if(t.kind===`face`)n=K(t.bodyId,t.ids[0])?.worldCenter??null;else{let e=ei(t.bodyId,t.ids[0]);e&&(n=[(e.worldA[0]+e.worldB[0])/2,(e.worldA[1]+e.worldB[1])/2,(e.worldA[2]+e.worldB[2])/2])}n&&(e.selection.includes(t.bodyId)||e.setSelection([t.bodyId]),Yr(n),e.setTool(new Zb))}function ex(e,t){let n=J(),r=K(e,t);if(!r||!r.planar)return!1;let i=new An().setFromUnitVectors(new y(...r.worldNormal),new y(0,0,-1)),a=new y(...r.worldCenter),o=new M().makeTranslation(a.x,a.y,0).multiply(new M().makeRotationFromQuaternion(i)).multiply(new M().makeTranslation(-a.x,-a.y,-a.z)),s=n.selection.includes(e)?n.selection:[e];return n.setPlacements(s.map(e=>{let t=Zn(n.doc,e);return t?{id:e,..._(o.clone().multiply(kn(t.position,t.rotation)))}:null}).filter(Boolean)),!0}var tx=class{id=`dropFace`;hover=null;wants(){return[`face`]}prompt(){return G(`p.dropFace`)}move(e){this.hover=e.hit?.kind===`body`&&e.hit.faceId!=null?{bodyId:e.hit.itemId,faceId:e.hit.faceId}:null,$()}click(e){if(e.hit?.kind!==`body`||e.hit.faceId==null)return;if(!K(e.hit.itemId,e.hit.faceId)?.planar)return J().toast(G(`msg.flatFaceOnly`),`error`);if(!ex(e.hit.itemId,e.hit.faceId))return;let t=J();t.selection.includes(e.hit.itemId)||t.select(e.hit.itemId),t.setTool(null)}enter(){J().setTool(null)}highlights(){return{primary:J().selection,faces:this.hover?[{bodyId:this.hover.bodyId,ids:[this.hover.faceId]}]:[]}}panel(){return(0,Z.jsx)(Qy,{})}};function nx(){let e=J();if(e.sub?.kind===`face`&&e.sub.ids.length&&ex(e.sub.bodyId,e.sub.ids[0])){e.set({sub:null});return}let t=[];for(let n of e.selection){let r=Br([n]),i=Zn(e.doc,n);r&&i&&t.push({id:n,position:[i.position[0],i.position[1],i.position[2]-r.min[2]],rotation:i.rotation})}if(!t.length)return e.toast(G(`msg.needSelection`));e.setPlacements(t)}function rx(){let e=J(),t=Br(e.selection);if(!t)return e.toast(G(`msg.needSelection`));let n=Vr(t);e.setPlacements(e.selection.map(t=>{let r=Zn(e.doc,t);return r?{id:t,position:[r.position[0]-n[0],r.position[1]-n[1],r.position[2]],rotation:r.rotation}:null}).filter(Boolean))}function ix(e){let t=J();if(e===`pivot`)return t.pivot&&t.selection.includes(t.pivot.bodyId)?zi():null;let n=Br(t.selection);if(!n)return null;let r=Vr(n);return e===`bottom`?[r[0],r[1],n.min[2]]:r}function ax(e){let t=J(),n=ix(e);if(!n)return t.toast(G(`msg.needSelection`));t.setPlacements(ox([-n[0],-n[1],-n[2]]))}function ox(e){let t=J();return t.selection.map(n=>{let r=Zn(t.doc,n);return r?{id:n,position:[r.position[0]+e[0],r.position[1]+e[1],r.position[2]+e[2]],rotation:r.rotation}:null}).filter(Boolean)}var sx=class{id=`toOrigin`;ref;hover=null;constructor(){let e=J();this.ref=e.pivot&&e.selection.includes(e.pivot.bodyId)?`pivot`:`bottom`}wants(){return J().selection.length&&this.ref===`point`?[`point`]:[`item`]}prompt(){return J().selection.length?this.ref===`point`?G(`p.originPoint`):G(`p.originEnter`):G(`p.pickItems`)}from(){return this.ref===`point`?this.hover:ix(this.ref)}go(e){let t=J();if(!e)return t.toast(G(`msg.needSelection`));t.setPlacements(ox([-e[0],-e[1],-e[2]])),t.setTool(null)}move(e){this.ref===`point`&&J().selection.length&&(this.hover=Yb(e),$())}click(e){let t=J();if(!t.selection.length||this.ref!==`point`)return e.hit?(t.select(e.hit.itemId,e.shift||e.ctrl),$()):oi();let n=Yb(e);n&&this.go(n)}enter(){this.ref!==`point`&&this.go(this.from())}confirmable(){return this.ref!==`point`&&!!this.from()}ghosts(){let e=this.from();return e?ox([-e[0],-e[1],-e[2]]).map(e=>({id:e.id,placement:{position:e.position,rotation:e.rotation}})):[]}overlay3d(){let e=this.from();return e?{segments:[...e,0,0,0],labels:[{p:[e[0]/2,e[1]/2,e[2]/2],text:qr(Math.hypot(e[0],e[1],e[2]))}]}:null}panel(){let e=J(),t=!!e.pivot&&e.selection.includes(e.pivot.bodyId),n=[[`bottom`,G(`opt.originBottom`)],[`center`,G(`opt.originCenter`)],...t?[[`pivot`,G(`opt.pivot`)]]:[],[`point`,G(`opt.originPoint`)]];return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Li,{value:this.ref,options:n,onChange:e=>(this.ref=e,this.hover=null,$())}),(0,Z.jsx)(Qy,{canApply:this.ref!==`point`&&!!this.from(),onApply:()=>this.go(this.from())})]})}};function cx(e,t){let n=J(),r=zi();if(!r)return;let i=new y(+(e===0),+(e===1),+(e===2)),a=new M().makeTranslation(r[0],r[1],r[2]).multiply(new M().makeRotationAxis(i,h.degToRad(t))).multiply(new M().makeTranslation(-r[0],-r[1],-r[2]));n.setPlacements(n.selection.map(e=>{let t=Zn(n.doc,e);return t?{id:e,..._(a.clone().multiply(kn(t.position,t.rotation)))}:null}).filter(Boolean))}function lx(e,t,n=0){let r=J(),i=r.mode??`print`,a=r.snapStep()??Pn[i].steps[Pn[i].defaultStepIndex];r.setPlacements(r.selection.map(i=>{let o=Zn(r.doc,i);return o?{id:i,position:[o.position[0]+e*a,o.position[1]+t*a,o.position[2]+n*a],rotation:o.rotation}:null}).filter(Boolean))}var ux=e=>({id:V(),kind:`mesh`,data:Kd(e),triangles:e.length/9,solid:!1,enabled:!0}),dx=(e,t)=>{if(t===1)return e;let n=new Float32Array(e.length);for(let r=0;r<e.length;r++)n[r]=e[r]*t;return n},fx=class{items;opts;id=`importPlace`;titleKey(){return`cmd.import`}at=null;constructor(e,t={}){this.items=e,this.opts=t,Qr(),t.mesh?this.setUnit(t.mesh.unit):this.shown=t.preview??e[0].features,ai(this,()=>J().setPreview(this.shown))}shown=[];setUnit(e){let t=this.opts.mesh;t.unit=e,this.items=t.parts.map(t=>({name:t.name,origin:[t.origin[0]*e,t.origin[1]*e,t.origin[2]*e],features:[ux(dx(t.soup,e))]})),this.shown=[ux(dx(t.preview,e))],J().setPreview(this.shown),$()}sketchEntities(){let e=this.opts.sketch,t=Jt.getState();return!e||this.items.length&&!t.import2d?[]:t.importDims?[...e.entities,...e.dims]:e.entities}overlay3d(){let e=this.sketchEntities();if(!this.at||!e.length)return null;let t=kn(this.at.position,this.at.rotation),n=new y,r=[];for(let i of e){let e=vi(i);for(let i=0;i+1<e.length;i++)for(let a of[e[i],e[i+1]])n.set(a[0],a[1],0).applyMatrix4(t),r.push(n.x,n.y,n.z)}return{segments:r,labels:[]}}wants(){return[`plane`,`face`,`point`]}prompt(){return G(`p.importPlace`,{n:this.items.length})}modelBase(){let e=yr.getState().meshes[fr];return e?[(e.bbox[0][0]+e.bbox[1][0])/2,(e.bbox[0][1]+e.bbox[1][1])/2,e.bbox[0][2]]:[0,0,0]}placementFor(e){let t=this.modelBase(),n=e=>{let n=kn(e.position,e.rotation).multiply(new M().makeTranslation(-t[0],-t[1],-t[2]));return _(n)};if(e.snap3d)return n({position:e.snap3d.point,rotation:[0,0,0]});if(e.hit?.kind===`body`&&e.hit.faceId!=null){let t=K(e.hit.itemId,e.hit.faceId);if(t?.planar)return n(gr(e.hit.point,t.worldNormal))}if(!e.plane)return null;let r=J().mode??`print`,i=J().snapStep();return n({position:[Er(e.plane[0],r,i),Er(e.plane[1],r,i),0],rotation:[0,0,0]})}move(e){this.at=this.placementFor(e),$()}click(e){let t=this.placementFor(e);if(!t)return;let n=J(),r=n.doc,i=[],a=this.sketchEntities(),o=this.items.length+ +!!a.length>1?V():void 0,s=kn(t.position,t.rotation);for(let e of this.items){let t=e.origin??[0,0,0],n=_(s.clone().multiply(new M().makeTranslation(t[0],t[1],t[2]))),a=p(r,{...e.features[0],id:V()},n,e.name);r=a.doc,i.push(a.id)}if(a.length&&this.opts.sketch){let e=Ae(r,t,this.opts.sketch.name,a);r=e.doc,i.push(e.id)}o&&(r=zt(r,i,o)),n.commit(r,i),n.setTool(null)}previewPlacement(){return this.at}previewColor(){return`#7aa7d9`}dispose(){J().setPreview(null)}panel(){let e=this.opts.sketch,t=this.opts.mesh;if(t){let e=e=>qr(e*t.unit,!1);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`p`,{className:`hint`,children:G(`imp.unit`)}),(0,Z.jsx)(Li,{value:String(t.unit),options:[[`1`,`mm`],[`10`,`cm`],[`25.4`,`inch`],[`1000`,`m`]],onChange:e=>this.setUnit(Number(e))}),(0,Z.jsx)(`p`,{className:`hint`,children:G(`imp.size`,{x:e(t.size[0]),y:e(t.size[1]),z:e(t.size[2]),n:t.parts.length})})]})}return e?(0,Z.jsx)(Bi,{lines:e.entities.length,dims:e.dims.length,solids:this.items.length}):null}},px=e=>Array.isArray(e)&&e.length>=2&&Number.isFinite(e[0])&&Number.isFinite(e[1]);function mx(e){if(!Array.isArray(e))return null;let t=e.filter(px).map(e=>[e[0],e[1]]);return t.length>=3?t:null}function hx(e){if(!Array.isArray(e))return null;let t=e.map(mx).filter(e=>!!e);return t.length?t:null}function gx(e){if(typeof e!=`object`||!e)return[];let{type:t,coordinates:n}=e;if(t===`Polygon`){let e=hx(n);return e?[e]:[]}return t===`MultiPolygon`&&Array.isArray(n)?n.map(hx).filter(e=>!!e):[]}function _x(e){return e.includes(`전용주거`)?`#f4ec9c`:e.includes(`준주거`)?`#f6cf8c`:e.includes(`주거`)?`#fbe08a`:e.includes(`상업`)?`#f3b3c2`:e.includes(`공업`)?`#d6c3ec`:e.includes(`녹지`)?`#cfe5b4`:e.includes(`관리`)?`#e3ebc4`:e.includes(`농림`)?`#d5e9bd`:e.includes(`자연환경`)?`#b8dbc2`:`#efece3`}function vx(e){let t=/[^\d\s\-산]+$/.exec(e.trim());return t?t[0]:``}function yx(e){return e===`도`?`#fbfbf8`:e===`천`||e===`구`||e===`유`?`#cfe4f2`:null}function bx(e,t,n,r){return[(e[0]-t.x0)/(t.x1-t.x0)*n,(t.y1-e[1])/(t.y1-t.y0)*r]}function xx(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t+=r[0]*i[1]-i[0]*r[1]}return t/2}function Sx(e){let t=null,n=0;for(let r of e){let e=Math.abs(xx(r[0]));e>n&&(n=e,t=r[0])}if(!t||n<=0)return null;let r=0,i=0,a=0,[o,s]=t[0];for(let e=0;e<t.length;e++){let[n,c]=t[e],[l,u]=t[(e+1)%t.length],d=n-o,f=c-s,p=l-o,m=u-s,h=d*m-p*f;a+=h,r+=(d+p)*h,i+=(f+m)*h}return a?[o+r/(3*a),s+i/(3*a)]:null}function Cx(e,t,n=4096){let r=Math.min(4,n/Math.max(e,t,1));return{width:Math.max(1,Math.round(e*r)),height:Math.max(1,Math.round(t*r)),perMetre:r}}var wx=6378137,Tx=Math.PI*wx,Ex=85.05112878,Dx=Math.PI/180;function Ox(e,t){let n=Math.max(-85.05112878,Math.min(Ex,t));return[e*Dx*wx,Math.log(Math.tan(Math.PI/4+n*Dx/2))*wx]}function kx(e,t){return{lon:e/wx/Dx,lat:(2*Math.atan(Math.exp(t/wx))-Math.PI/2)/Dx}}function Ax(e){return 1/Math.cos(Math.max(-85.05112878,Math.min(Ex,e))*Dx)}var jx=e=>2*Tx/(256*2**e),Mx=(e,t)=>jx(e)/Ax(t);function Nx(e,t,n){let r=jx(n);return[(e+Tx)/r,(Tx-t)/r]}function Px(e,t,n){let r=jx(n);return[e*r-Tx,Tx-t*r]}function Fx(e){let t=Ax(kx(e.cx,e.cy).lat),n=e.w*t/2,r=e.h*t/2;return{x0:e.cx-n,y0:e.cy-r,x1:e.cx+n,y1:e.cy+r}}function Ix(e,t,n,r){let i=(e+n)/2,a=(t+r)/2,o=Ax(kx(i,a).lat);return{cx:i,cy:a,w:Math.abs(n-e)/o,h:Math.abs(r-t)/o}}function Lx(e,t,n,r={}){let{minZoom:i=6,maxZoom:a=19,maxPx:o=4096,finest:s=.2}=r;for(let r=a;r>=i;r--){let i=Mx(r,n);if(!(i<s*.999)&&Math.max(e,t)/i<=o)return r}return i}function Rx(e,t){let n=Fx(e),[r,i]=Nx(n.x0,n.y1,t),[a,o]=Nx(n.x1,n.y0,t),s=Math.max(1,Math.round(a-r)),c=Math.max(1,Math.round(o-i)),l=2**t,u=Math.round(-r),d=Math.round(-i),f=[],p=Math.max(0,Math.floor(-u/256)),m=Math.max(0,Math.floor(-d/256)),h=Math.min(l-1,Math.floor((s-u-1e-6)/256)),g=Math.min(l-1,Math.floor((c-d-1e-6)/256));for(let e=m;e<=g;e++)for(let t=p;t<=h;t++)f.push({x:t,y:e,dx:t*256+u,dy:e*256+d});return{z:t,width:s,height:c,tiles:f}}function zx(e,t){let n=Ox(e.lon,e.lat),r=Ox(t.lon,t.lat),i=Ax(t.lat);return[(n[0]-r[0])/i*1e3,(n[1]-r[1])/i*1e3]}function Bx(e,t){let n=Ox(t.lon,t.lat),r=Ax(t.lat);return kx(n[0]+e[0]/1e3*r,n[1]+e[1]/1e3*r)}function Vx(e,t){return zx(e,t)}var Hx=`© 국토교통부 브이월드 (V-World)`,Ux={min:6,max:19},Wx=e=>e.trim()||`14049E46-DDD9-4F99-86FC-A0562E2C9424`;function Gx(e,t,n,r,i=`Satellite`){return`https://api.vworld.kr/req/wmts/1.0.0/${encodeURIComponent(e)}/${i}/${t}/${r}/${n}.${i===`Satellite`?`jpeg`:`png`}`}function Kx(e){let t=/<ExceptionText>\s*(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?\s*<\/ExceptionText>/.exec(e);if(t)return t[1].trim();let n=/"text"\s*:\s*"([^"]*)"/.exec(e);return n?n[1]:``}async function qx(e,t=9e3){let n=new AbortController,r=setTimeout(()=>n.abort(),t);try{let t=await fetch(Gx(e,7,109,49),{mode:`cors`,signal:n.signal,cache:`no-store`}),r=t.headers.get(`content-type`)??``;return t.ok&&r.startsWith(`image/`)?{ok:!0}:{ok:!1,why:`refused`,text:Kx(await t.text())||`HTTP ${t.status}`}}catch{return{ok:!1,why:`offline`}}finally{clearTimeout(r)}}var Jx=!1,Yx=0;function Xx(e){try{let t=new URL(e);return t.protocol===`https:`&&t.host===`api.vworld.kr`&&/^\/req\/(search|data)$/.test(t.pathname)&&!t.username&&!t.password}catch{return!1}}async function Zx(e){if(!Xx(e))throw Error(`offline`);if(!Jx){let t;try{t=await fetch(e,{mode:`cors`})}catch{return Jx=!0,Zx(e)}return await t.json()}return new Promise((t,n)=>{let r=`__nukcadVworld${++Yx}`,i=window,a=document.createElement(`script`),o=()=>{clearTimeout(s),delete i[r],a.remove()},s=setTimeout(()=>{o(),n(Error(`offline`))},1e4);i[r]=e=>{o(),t(e)},a.onerror=()=>{o(),n(Error(`offline`))},a.src=`${e}&callback=${r}`,document.head.appendChild(a)})}var Qx=[{data:`LT_C_ADSIDO_INFO`,code:`ctprvn_cd`,name:`ctp_kor_nm`},{data:`LT_C_ADSIGG_INFO`,code:`sig_cd`,name:`sig_kor_nm`},{data:`LT_C_ADEMD_INFO`,code:`emd_cd`,name:`emd_kor_nm`},{data:`LT_C_ADRI_INFO`,code:`li_cd`,name:`li_kor_nm`}];function $x(e,t,n,r,i){let a=Qx[t];return`https://api.vworld.kr/req/data?service=data&request=GetFeature&version=2.0&format=json&errorformat=json&crs=EPSG:4326&page=1&size=${i}&geometry=${r}&attribute=${!r}&data=${a.data}&attrFilter=${encodeURIComponent(`${a.code}:${n}`)}&key=${encodeURIComponent(e)}`}async function eS(e){let t=(await Zx(e))?.response;if(t?.status===`NOT_FOUND`)return null;if(t?.status!==`OK`)throw Error(t?.error?.text||t?.status||`ERROR`);return t.result?.featureCollection??null}async function tS(e,t,n=``){let r=Qx[t],i=await eS($x(e,t,`like:${n||`%`}`,!1,1e3)),a=[];for(let e of i?.features??[]){let t=e.properties?.[r.code],i=e.properties?.[r.name];t&&i&&t.startsWith(n)&&a.push({code:t,name:i})}return a.sort((e,t)=>e.name.localeCompare(t.name,`ko`))}async function nS(e,t){let n=(await Zx(`https://api.vworld.kr/req/search?service=search&request=search&version=2.0&crs=EPSG:4326&size=5&page=1&format=json&errorformat=json&type=district&category=L1&query=${encodeURIComponent(t)}&key=${encodeURIComponent(e)}`))?.response;if(n?.status===`NOT_FOUND`)return null;if(n?.status!==`OK`)throw Error(n?.error?.text||n?.status||`ERROR`);let r=n.result?.items?.find(e=>e.title===t)??n.result?.items?.[0],i=Number(r?.point?.x),a=Number(r?.point?.y);return Number.isFinite(i)&&Number.isFinite(a)?{lon:i,lat:a}:null}async function rS(e,t,n){let r=(await eS($x(e,t,`=:${n}`,!0,1)))?.bbox;return!r||r.length<4||!r.every(Number.isFinite)||r[2]<=r[0]||r[3]<=r[1]?null:[r[0],r[1],r[2],r[3]]}async function iS(e,t){let n=`https://api.vworld.kr/req/search?service=search&request=search&version=2.0&crs=EPSG:4326&size=10&page=1&format=json&errorformat=json&key=${encodeURIComponent(e)}&query=${encodeURIComponent(t)}`,r=await Promise.allSettled([`&type=place`,`&type=address&category=road`,`&type=address&category=parcel`].map(e=>Zx(n+e))),i=[],a=``,o=!1;if(r.forEach((e,t)=>{if(e.status!==`fulfilled`)return;o=!0;let n=e.value,r=n?.response??n;r?.status===`ERROR`&&(a=r.error?.text??`ERROR`);for(let e of r?.result?.items??[]){let n=Number(e.point?.x),r=Number(e.point?.y);if(!Number.isFinite(n)||!Number.isFinite(r))continue;let a=e.address?.road??``,o=e.address?.parcel??``,s=t===0?e.title??a:t===1?a:o;if(!s)continue;let c=t===0?a||o:t===1?o:``;i.some(e=>e.title===s&&Math.abs(e.lon-n)<1e-5&&Math.abs(e.lat-r)<1e-5)||i.push({title:s,sub:c,lon:n,lat:r})}}),!o)throw Error(`offline`);if(!i.length&&a)throw Error(a);return i.slice(0,10)}var aS=class{key;onLoad;limit;map=new Map;tick=0;failures=0;loaded=0;constructor(e,t,n=600){this.key=e,this.onLoad=t,this.limit=n}get(e,t,n,r=!0){let i=`${e}/${t}/${n}`,a=this.map.get(i);if(a)return a.used=++this.tick,a.state===`ok`?a.img:null;if(!r)return null;let o=new Image;o.crossOrigin=`anonymous`,o.decoding=`async`;let s={img:o,state:`loading`,used:++this.tick};return o.onload=()=>{s.state=`ok`,this.failures=0,this.loaded++,this.onLoad()},o.onerror=()=>{s.state=`error`,this.failures++,this.onLoad()},o.src=Gx(this.key,e,t,n),this.map.set(i,s),this.trim(),null}trim(){if(this.map.size<=this.limit)return;let e=[...this.map.entries()].sort((e,t)=>e[1].used-t[1].used).slice(0,this.map.size-this.limit);for(let[t,n]of e)n.img.onload=n.img.onerror=null,n.img.src=``,this.map.delete(t)}dispose(){for(let e of this.map.values())e.img.onload=e.img.onerror=null;this.map.clear()}};function oS(e){return new Promise((t,n)=>{let r=new Image;r.crossOrigin=`anonymous`,r.onload=()=>t(r),r.onerror=()=>n(Error(`tile`)),r.src=e})}async function sS(e,t,n,r,i=`Satellite`){let a=kx(t.cx,t.cy).lat,o=Rx(t,Lx(t.w,t.h,a,{minZoom:Ux.min,maxZoom:Ux.max})),s=document.createElement(`canvas`);s.width=o.width,s.height=o.height;let c=s.getContext(`2d`);if(!c)return{ok:!1,why:`tiles`,failed:o.tiles.length};c.fillStyle=`#808080`,c.fillRect(0,0,o.width,o.height);let l=0,u=0;n(0,o.tiles.length);let d=[...o.tiles];if(await Promise.all(Array.from({length:6},async()=>{for(let t=d.shift();t;t=d.shift()){if(r())return;let a=null;for(let n=0;n<2&&!a;n++)a=await oS(Gx(e,o.z,t.x,t.y,i)).catch(()=>null);a?c.drawImage(a,t.dx,t.dy,256,256):u++,n(++l,o.tiles.length)}})),r())return{ok:!1,why:`cancelled`};if(u)return{ok:!1,why:`tiles`,failed:u};try{return{ok:!0,image:s.toDataURL(`image/jpeg`,.85),width:o.width,height:o.height}}catch{return{ok:!1,why:`tainted`}}}function cS(e){return new Promise((t,n)=>{let r=URL.createObjectURL(e),i=new Image;i.onload=()=>{URL.revokeObjectURL(r);let e=Math.min(1,4096/Math.max(i.naturalWidth,i.naturalHeight)),a=Math.max(1,Math.round(i.naturalWidth*e)),o=Math.max(1,Math.round(i.naturalHeight*e)),s=document.createElement(`canvas`);s.width=a,s.height=o;let c=s.getContext(`2d`);if(!c)return n(Error(`canvas`));c.drawImage(i,0,0,a,o);try{t({image:s.toDataURL(`image/jpeg`,.88),width:a,height:o})}catch(e){n(e)}},i.onerror=()=>{URL.revokeObjectURL(r),n(Error(`picture`))},i.src=r})}var lS=`nukcad.terrainView`,uS=[`aerial`,`base`,`cadastral`],dS=(e,t=100)=>typeof e==`number`&&Number.isFinite(e)?Math.min(100,Math.max(0,Math.round(e))):t;function fS(e){let t=typeof e==`object`&&e?e:{};return{contours:t.contours===!0,interval:[0,1,2,5,10,20].includes(t.interval)?t.interval:0,contourOpacity:dS(t.contourOpacity),contourColor:Sh(t.contourColor),opacity:dS(t.opacity),picture:uS.includes(t.picture)?t.picture:`aerial`}}function pS(){try{return fS(JSON.parse(localStorage.getItem(lS)??`{}`))}catch{return fS({})}}var mS=t(e=>({...pS(),hover:null,pictureTick:0,set:t=>e(t)}));mS.subscribe((e,t)=>{if(e.contours!==t.contours||e.interval!==t.interval||e.contourOpacity!==t.contourOpacity||e.contourColor!==t.contourColor||e.opacity!==t.opacity||e.picture!==t.picture)try{localStorage.setItem(lS,JSON.stringify({contours:e.contours,interval:e.interval,contourOpacity:e.contourOpacity,contourColor:e.contourColor,opacity:e.opacity,picture:e.picture}))}catch{}});function hS(e,t,n){if(!e?.terrain)return gS(null);let r=ie(e,t,n);gS(r?{z:r[2],sea:e.terrain.base+r[2]}:null)}function gS(e){let t=mS.getState().hover;(e||t)&&(e&&t&&Math.abs(e.z-t.z)<10&&Math.abs(e.sea-t.sea)<10||mS.setState({hover:e}))}var _S=new Map,vS=6,yS=(e,t)=>`${t}:${e.lat.toFixed(7)}:${e.lon.toFixed(7)}:${e.w}:${e.h}`;function bS(e){let[t,n]=Ox(e.lon,e.lat);return{cx:t,cy:n,w:e.w/1e3,h:e.h/1e3}}function xS(e,t){let n=e?.image??``;if(!e||t===`aerial`)return{image:n,state:`ok`};if(e.lat==null||e.lon==null)return{image:n,state:`nogeo`};let r=yS(e,t),i=_e(e,t);if(i)return _S.get(r)?.state!==`ok`&&_S.set(r,{state:`ok`,image:i}),{image:i,state:`ok`};let a=_S.get(r);return a||(a={state:`loading`},_S.set(r,a),CS(e,t,r)),a.state===`ok`?{image:a.image,state:`ok`}:{image:n,state:a.state,why:a.state===`error`?a.why:void 0}}function SS(e,t){if(!e||e.lat==null||e.lon==null||t===`aerial`)return;let n=yS(e,t);_S.get(n)?.state===`error`&&_S.delete(n),mS.getState().set({pictureTick:mS.getState().pictureTick+1})}async function CS(e,t,n){let r=Wx(Jt.getState().vworldKey),i;if(!r)i={state:`error`,why:`nokey`};else try{i={state:`ok`,image:t===`base`?await TS(r,e):await AS(r,e)}}catch(e){i={state:`error`,why:e.message||`error`}}_S.delete(n),_S.set(n,i);for(let e of[..._S.keys()])_S.size>vS&&_S.get(e)?.state!==`loading`&&_S.delete(e);if(i.state===`ok`&&ta()){let e=yr.getState(),r=e.doc.site;e.mode&&r&&r.lat!=null&&r.lon!=null&&yS(r,t)===n&&_e(r,t)!==i.image&&e.set({file:{...e.file,dirty:!0}})}mS.getState().set({pictureTick:mS.getState().pictureTick+1})}function wS(e){let t=e.site;if(!ta()||!t||!j(t))return e;let n={};for(let e of lt){let r=_S.get(yS(t,e));r?.state===`ok`&&(n[e]=r.image)}let r=Jn(t,n);return r===t?e:{...e,site:r}}async function TS(e,t){let n=await sS(e,bS(t),()=>{},()=>!1,`Base`);if(!n.ok)throw Error(n.why);return n.image}var ES=[`LT_C_UQ111`,`LT_C_UQ112`,`LT_C_UQ113`,`LT_C_UQ114`],DS=`LP_PA_CBND_BUBUN`,OS=12;async function kS(e,t,n,r){let i=[],a=`BOX(${n.x0.toFixed(2)},${n.y0.toFixed(2)},${n.x1.toFixed(2)},${n.y1.toFixed(2)})`;for(let n=1;n<=r;n++){let r=(await Zx(`https://api.vworld.kr/req/data?service=data&request=GetFeature&version=2.0&format=json&errorformat=json&crs=EPSG:900913&size=1000&page=${n}&geometry=true&attribute=true&data=${t}&geomFilter=${encodeURIComponent(a)}&key=${encodeURIComponent(e)}`))?.response;if(r?.status===`NOT_FOUND`)break;if(r?.status!==`OK`)throw Error(r?.error?.text||r?.status||`ERROR`);if(i.push(...r.result?.featureCollection?.features??[]),n>=Number(r.page?.total??1))break}return i}async function AS(e,t){let n=Fx(bS(t)),[r,i]=await Promise.all([Promise.all(ES.map(t=>kS(e,t,n,1).catch(()=>[]))).then(e=>e.flat()),kS(e,DS,n,OS)]),{width:a,height:o,perMetre:s}=Cx(t.w/1e3,t.h/1e3),c=document.createElement(`canvas`);c.width=a,c.height=o;let l=c.getContext(`2d`);if(!l)throw Error(`canvas`);let u=e=>{l.beginPath();for(let t of e)for(let e of t)e.forEach((e,t)=>{let[r,i]=bx(e,n,a,o);t?l.lineTo(r,i):l.moveTo(r,i)}),l.closePath()};l.fillStyle=`#f3f1ea`,l.fillRect(0,0,a,o);for(let e of r)u(gx(e.geometry)),l.fillStyle=_x(e.properties?.uname??``),l.fill(`evenodd`);let d=i.map(e=>({polys:gx(e.geometry),jibun:e.properties?.jibun??``})).filter(e=>e.polys.length);for(let e of d){let t=yx(vx(e.jibun));t&&(u(e.polys),l.fillStyle=t,l.fill(`evenodd`))}l.strokeStyle=`rgba(176, 58, 46, 0.85)`,l.lineWidth=Math.max(1,s*.25),l.lineJoin=`round`;for(let e of d)u(e.polys),l.stroke();let f=Math.round(Math.min(16,Math.max(9,s*2.5)));l.font=`${f}px "Malgun Gothic", "Apple SD Gothic Neo", sans-serif`,l.textAlign=`center`,l.textBaseline=`middle`,l.fillStyle=`#5a2a1f`;for(let e of d){let t=Sx(e.polys);if(!t||!e.jibun)continue;let[r,i]=bx(t,n,a,o),s=e.polys[0][0].map(e=>bx(e,n,a,o)),c=Math.max(...s.map(e=>e[0]))-Math.min(...s.map(e=>e[0]));Math.max(...s.map(e=>e[1]))-Math.min(...s.map(e=>e[1]))<f*1.4||c<l.measureText(e.jibun).width+4||l.fillText(e.jibun,r,i)}return c.toDataURL(`image/png`)}var jS={web:{keep:3,days:7,mb:30,libDays:7},desktop:{keep:10,days:30,mb:200,libDays:0}},MS={web:{keep:[1,10],days:[1,30],mb:[5,100],libDays:[1,90]},desktop:{keep:[1,50],days:[1,365],mb:[20,2e3],libDays:[0,0]}},NS={web:300,desktop:5e3},PS=.8,FS=18e5,IS=864e5;function LS(e,t){let n=typeof e==`object`&&e?e:{},r=jS[t],i=MS[t],a=e=>{let t=n[e];return typeof t!=`number`||!Number.isFinite(t)?r[e]:Math.min(i[e][1],Math.max(i[e][0],Math.round(t)))};return{keep:a(`keep`),days:a(`days`),mb:a(`mb`),libDays:a(`libDays`)}}function RS(e,t,n,r=new Set){if(!(t>0))return[];let i=[];for(let a of e)r.has(a.id)||n-Math.max(Number.isFinite(a.time)?a.time:0,Number.isFinite(a.used)?a.used:0)>t*IS&&i.push(a.id);return i}function zS(e,t,n,r=new Set,i=!1){let a=e.filter(e=>r.has(e.id)),o=a.length,s=a.reduce((e,t)=>e+Math.max(0,t.bytes),0),c=t.mb*1024*1024,l=[],u=e.filter(e=>!r.has(e.id)).sort((e,t)=>t.time-e.time);for(let e of u){let r=!(n-e.time<=t.days*IS),a=Math.max(0,e.bytes);if(i||r||o>=t.keep||s+a>c){l.push(e.id);continue}o++,s+=a}return l}function BS(e){return!Number.isFinite(e)||e<=0?`0 KB`:e<1048576?`${Math.max(1,Math.round(e/1024))} KB`:e<1073741824?`${(e/1048576).toFixed(+(e<10485760))} MB`:`${(e/1073741824).toFixed(1)} GB`}var VS=`nukcad.storage.v1`,HS=()=>typeof window<`u`&&`__TAURI_INTERNALS__`in window?`desktop`:`web`;function US(){try{return LS(JSON.parse(localStorage.getItem(VS)??`{}`),HS())}catch{return LS({},HS())}}var WS=t((e,t)=>({...typeof localStorage>`u`?LS({},`web`):US(),set:n=>{let r=LS({keep:t().keep,days:t().days,mb:t().mb,libDays:t().libDays,...n},HS());e(r);try{localStorage.setItem(VS,JSON.stringify(r))}catch{}}})),GS=()=>{let e=WS.getState();return{keep:e.keep,days:e.days,mb:e.mb,libDays:e.libDays}},KS=e({IMPORT_EXTS:()=>aC,PROJECT_EXTS:()=>iC,autosaveCopies:()=>MC,clearAutosave:()=>RC,dwgToDxf:()=>lC,importData:()=>hC,importFile:()=>mC,listAutosaves:()=>FC,newFile:()=>eC,openFile:()=>sC,openKind:()=>oC,pruneAutosaves:()=>NC,recoverAutosave:()=>zC,removeAutosave:()=>LC,saveAs:()=>XS,saveFile:()=>tC,stampName:()=>$S,startAutosave:()=>VC,write2d:()=>yC,write3d:()=>vC,writeAutosave:()=>AC}),qS=()=>yr.getState(),JS=()=>window;function YS(e,t,n){let r=URL.createObjectURL(new Blob([e],{type:n})),i=document.createElement(`a`);i.href=r,i.download=t,i.click(),setTimeout(()=>URL.revokeObjectURL(r),5e3)}async function XS(e,t,n,r,i){let a=JS().showSaveFilePicker;if(a)try{let o=await a({suggestedName:t,types:[{description:i,accept:{[n]:[r]}}]}),s=await o.createWritable();return await s.write(e),await s.close(),{status:`picked`,handle:o}}catch(e){if(e.name===`AbortError`)return{status:`cancelled`}}return YS(e,t,n),{status:`downloaded`}}async function ZS(e){let t=JS().showOpenFilePicker;if(t)try{let[n]=await t({multiple:!1,types:[{description:`NukCAD`,accept:{"application/octet-stream":e}}]}),r=await n.getFile();return{name:r.name,data:await r.arrayBuffer(),handle:n}}catch(e){if(e.name===`AbortError`)return null}return new Promise(t=>{let n=document.createElement(`input`);n.type=`file`,n.accept=e.join(`,`),n.onchange=async()=>{let e=n.files?.[0];t(e?{name:e.name,data:await e.arrayBuffer(),handle:null}:null)},n.click()})}var QS=e=>e.replace(/\.[^.]+$/,``);function $S(e){let t=new Date,n=e=>String(e).padStart(2,`0`),r=`${t.getFullYear()}${n(t.getMonth()+1)}${n(t.getDate())}_${n(t.getHours())}${n(t.getMinutes())}${n(t.getSeconds())}`;return`${e===`3d`?`3D_Object`:`Image`}_${r}`}async function eC(){let e=qS();In()&&e.setMode(e.mode)}async function tC(e){let t=qS();if(!t.mode)return;let n=t.doc,r=Qd(t.mode,wS(n));if(!e&&t.file.handle)try{let e=await t.file.handle.createWritable();await e.write(r),await e.close(),nC(t.file.name,t.file.handle,n);return}catch{}let i=`${t.file.name||$S(`3d`)}.nkx`,a=await XS(r,i,`application/json`,`.nkx`,`NukCAD`);if(a.status===`cancelled`)return;let o=a.status===`picked`?a.handle:null;nC(o?QS(o.name):t.file.name||QS(i),o??t.file.handle,n)}function nC(e,t,n){let r=qS();r.set({file:{name:e,handle:t,dirty:r.doc!==n}}),r.toast(r.t(`msg.saved`,{name:e})),RC()}function rC(e){let t=qS();e.newer?t.toast(t.t(`msg.fileNewer`),`error`):e.report.unknownSteps&&t.toast(t.t(`msg.unknownSteps`,{n:e.report.unknownSteps}),`error`),e.report.dropped&&t.toast(t.t(`msg.fileRepaired`,{n:e.report.dropped}),`error`)}var iC=[`.nkx`,`.nukcad`,`.json`],aC=[`.svg`,`.dxf`,`.dwg`,`.dws`,`.123dx`,`.step`,`.stp`,`.stl`,`.obj`,`.3mf`,`.blend`,`.f3d`];function oC(e){let t=`.${e.toLowerCase().split(`.`).pop()??``}`;return iC.includes(t)?`project`:`import`}async function sC(){let e=qS();if(!In())return;let t=await ZS([...iC,...Zi(aC)]);if(t){if(oC(t.name)===`import`){qS().setMode(qS().mode??`print`),qS().set({file:{...qS().file,name:QS(t.name),handle:null}}),await hC(t.name,t.data);return}try{let n=$d(new TextDecoder().decode(t.data));e.loadDoc(n.doc,n.mode,{name:QS(t.name),handle:t.handle}),rC(n)}catch{e.toast(e.t(`msg.openFailed`),`error`)}}}var cC=()=>typeof window<`u`&&`__TAURI_INTERNALS__`in window;async function lC(e){if(!cC())return`missing`;try{let{invoke:t}=await i(async()=>{let{invoke:e}=await import(`./core-BrXq0wPV.js`);return{invoke:e}},[],import.meta.url);return await t(`dwg_to_dxf`,{data:Array.from(new Uint8Array(e))})}catch(e){return String(e).includes(`oda-missing`)?`missing`:`failed`}}var uC=e=>e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength);async function dC(e,t,n){let r=qS();r.toast(r.t(`imp.reading`));let i=await r.job({type:`importCad`,source:e});if(i.type!==`importCad`)throw Error(`empty`);if(!i.parts.length){if(n&&(n.entities.length||n.dims.length)){r.toast(r.t(`imp.solidsFailed`),`error`),r.setTool(new ji(n.entities,n.name,n.dims));return}throw Error(`empty`)}let a=i.failed+Object.values(i.unsupported).reduce((e,t)=>e+t,0);a&&r.toast(r.t(`imp.partial`,{n:a}),`error`);let o=i.parts.map((e,n)=>({name:`${i.parts.length>1?`${t} ${n+1}`:t}${e.sheet?` (${r.t(`item.sheet`)})`:``}`,origin:e.origin,features:[e.brep?{id:V(),kind:`brep`,data:e.brep,enabled:!0}:{id:V(),kind:`mesh`,data:Kd(e.soup),triangles:e.soup.length/9,solid:!1,enabled:!0}]})),s=[{id:V(),kind:`mesh`,data:Kd(i.preview),triangles:i.preview.length/9,solid:!1,enabled:!0}];r.setTool(new fx(o,{preview:s,sketch:n}))}function fC(e,t,n){let r=qS(),i=e.reduce((e,t)=>e+t.soup.length/9,0);if(!i)throw Error(`empty`);if(i>15e5)return r.toast(r.t(`msg.meshTooLarge`),`error`);let a=new Float32Array(i*9),o=0,s=e.map((n,r)=>{a.set(n.soup,o),o+=n.soup.length;let[i,s]=qd(n.soup),c=[(i[0]+s[0])/2,(i[1]+s[1])/2,i[2]],l=n.soup.slice();for(let e=0;e<l.length;e+=3)for(let t=0;t<3;t++)l[e+t]-=c[t];return{name:e.length>1?n.name||`${t} ${r+1}`:t,soup:l,origin:c}}),[c,l]=qd(a),u=[l[0]-c[0],l[1]-c[1],l[2]-c[2]],d=Math.max(...u)||1,f=1;(n||d<1||d>1e4)&&(f=[1,10,25.4,1e3].reduce((e,t)=>Math.abs(Math.log(d*t/50))<Math.abs(Math.log(d*e/50))?t:e,1)),r.toast(r.t(`msg.meshImported`,{n:i})),r.setTool(new fx([],{mesh:{parts:s,preview:a,size:u,unit:f}}))}async function pC(e,t){let n=qS(),r=Vd(e),i=jd(r.skipped),a=[i.text&&n.t(`imp.skip.text`,{n:i.text}),i.hatch&&n.t(`imp.skip.hatch`,{n:i.hatch}),i.point&&n.t(`imp.skip.point`,{n:i.point}),i.other&&n.t(`imp.skip.other`,{n:i.other,types:i.otherTypes.slice(0,4).join(`, `)+(i.otherTypes.length>4?`…`:``)})].filter(Boolean);if(a.length&&n.toast(n.t(`imp.dxfSkipped`,{list:a.join(`, `)}),`error`),r.solids.length){await dC({format:`acis`,blobs:r.solids.map(e=>({data:typeof e.data==`string`?e.data:uC(e.data),xf:e.xf,unit:e.unit}))},t,{entities:r.entities,dims:r.dims,name:t});return}if(!r.entities.length&&!r.dims.length)throw Error(`empty`);n.setTool(new ji(r.entities,t,r.dims))}async function mC(){let e=await ZS([...Zi(aC),`.nkx`,`.nukcad`]);e&&await hC(e.name,e.data)}async function hC(e,t){let n=qS(),r={name:e,data:t},i=r.name.toLowerCase().split(`.`).pop()??``,a={f3d:`imp.f3d`};if(a[i]){n.set({notice:{title:n.t(`imp.cannotTitle`,{ext:i.toUpperCase()}),text:n.t(a[i])}});return}if(i===`dwg`||i===`dws`){if(Qi(`.${i}`)){n.set({notice:{title:n.t(`imp.cannotTitle`,{ext:i.toUpperCase()}),text:n.t(`imp.dwg`)}});return}n.toast(n.t(`imp.converting`));let e=await lC(r.data);if(e===`missing`||e===`failed`){n.set({notice:{title:n.t(`imp.cannotTitle`,{ext:i.toUpperCase()}),text:n.t(e===`missing`?cC()?`imp.dwgOda`:`imp.dwg`:`imp.dwgFailed`)}});return}try{await pC(new TextDecoder().decode(e),QS(r.name))}catch{n.toast(n.t(`msg.importFailed`),`error`)}return}try{if(i===`stl`)fC([{name:QS(r.name),soup:Hd(r.data)}],QS(r.name),!1);else if(i===`obj`)fC(Ud(r.data),QS(r.name),!0);else if(i===`3mf`)fC(await Gd(r.data),QS(r.name),!1);else if(i===`blend`){let e=Yd(await Jd(r.data));e.modifiers&&n.toast(n.t(`imp.blendModifiers`,{n:e.modifiers})),fC(e.parts,QS(r.name),!0)}else if(i===`dxf`)await pC(new TextDecoder().decode(r.data),QS(r.name));else if(i===`svg`){let e=Dc(new TextDecoder().decode(r.data));if(!e.length)throw Error(`empty`);n.setTool(new ji(e,QS(r.name)))}else if(i===`step`||i===`stp`)await dC({format:`step`,data:r.data},QS(r.name));else if(i===`123dx`){let e=await $i(r.data);if(!e.length)throw Error(`empty`);await dC({format:`acis`,blobs:e.map(e=>({data:uC(e),xf:null}))},QS(r.name))}else{let e=$d(new TextDecoder().decode(r.data)),t=ef(n.doc,e.doc);n.commit(t.doc,t.ids),rC(e)}}catch{n.toast(n.t(`msg.importFailed`),`error`)}}async function gC(e,t){let n=qS(),r=n.doc.bodies.filter(t=>e.includes(t.id)&&t.visible),i=await n.exportItems(e,`mesh`,t);if(!i)return null;let a=0;return lu(i.data,i.names).map(e=>{for(;a<r.length&&r[a].name!==e.name;)a++;let t=r[a++];return{...e,color:t?f(t):void 0}})}function _C(e,t){if(e.status===`cancelled`)return;let n=qS(),r=n.doc.bodies.filter(e=>e.visible),i=r.filter(e=>t.includes(e.id)).length;n.toast(i<r.length?n.t(`msg.exportedSel`,{n:i,total:r.length}):n.t(`msg.exported`,{n:i}))}async function vC(e,t){let n=qS(),r=t.scale??1,i=n.file.name||$S(`3d`),a=t.ids;if(!a.length)return n.toast(n.t(`msg.nothingToExport`),`error`);let o={mesh:uu(e)?t.mesh:void 0,combine:t.combine,name:i};if(e===`dxf3d`||e===`3mf`||e===`stl`&&t.ascii){let s=await gC(a,o);if(!s)return;let c=r===1?s:cd(s,r);if(!c.length)return n.toast(n.t(`msg.nothingToExport`),`error`);let l=t.combine?au(c,i):c;_C(e===`dxf3d`?await XS(Xl(l),`${i}_3D.dxf`,`application/dxf`,`.dxf`,`AutoCAD DXF`):e===`3mf`?await XS(Zl(l),`${i}.3mf`,`model/3mf`,`.3mf`,`3MF`):await XS(cu(l),`${i}.stl`,`model/stl`,`.stl`,`STL`),a);return}let s=await n.exportItems(a,e,o);if(!s)return;let c=r===1||e===`step`?s.data:e===`stl`?od(s.data,r):sd(s.data,r),l=e===`stl`?`model/stl`:e===`step`?`model/step`:`model/obj`,u=await XS(c,`${i}.${e}`,l,`.${e}`,e.toUpperCase());if(_C(u,a),e===`obj`&&u.status!==`cancelled`){let e=n.doc.bodies.filter(e=>a.includes(e.id)&&e.visible);await XS(ce(e.map(e=>({material:e.material,color:En(e)}))),He(i),`model/mtl`,`.mtl`,`MTL`)}}async function yC(e,t){let n=qS().file.name||$S(`image`);return XS(e===`svg`?Oc(t):Pc(t),`${n}.${e}`,e===`svg`?`image/svg+xml`:`application/dxf`,`.${e}`,e.toUpperCase())}var bC=`nukcad-autosave`,xC=`nukcad.autosave.v1`,SC=`legacy`,CC=null;function wC(){return CC??=new Promise((e,t)=>{let n=indexedDB.open(bC,1);n.onupgradeneeded=()=>{n.result.createObjectStore(`meta`,{keyPath:`id`}),n.result.createObjectStore(`docs`)},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)}).catch(e=>{throw CC=null,e}),CC}var TC=e=>new Promise((t,n)=>{e.oncomplete=()=>t(),e.onerror=e.onabort=()=>n(e.error??Error(`autosave`))}),EC=e=>new Promise((t,n)=>{e.onsuccess=()=>t(e.result),e.onerror=()=>n(e.error)}),DC=V(),OC=null,kC=!1;async function AC(){let e=qS();if(!e.mode||!e.file.dirty||!e.doc.bodies.length&&!e.doc.sketches.length&&!e.doc.site)return!1;if(e.doc===OC)return!0;let t=e.doc,n=DC;try{let r=Qd(e.mode,wS(t)),i=(await wC()).transaction([`meta`,`docs`],`readwrite`);i.objectStore(`docs`).put(r,n),i.objectStore(`meta`).put({id:n,time:Date.now(),name:e.file.name,bytes:r.length}),await TC(i),n===DC&&(OC=t),kC=!1}catch{return kC||e.toast(e.t(`msg.autosaveFailed`),`error`),kC=!0,!1}return await jC(),!0}async function jC(){await NC(GS())}async function MC(){let e=[];try{let t=await wC(),n=await EC(t.transaction(`meta`).objectStore(`meta`).getAll());for(let r of n){let n=typeof r.bytes==`number`?r.bytes:-1;if(n<0){let e=await EC(t.transaction(`docs`).objectStore(`docs`).get(r.id));n=typeof e==`string`?e.length:0}e.push({...r,bytes:n})}}catch{}try{let t=localStorage.getItem(xC),n=t?PC():null;t&&n&&e.push({id:SC,time:n.time,name:n.name,bytes:t.length})}catch{}return e}async function NC(e,t=!1){let n=await MC(),r=new Set(zS(n,e,Date.now(),new Set([DC]),t));if(!r.size)return{removed:0,bytes:0};let i=0;for(let e of n)r.has(e.id)&&(i+=e.bytes);try{r.has(SC)&&localStorage.removeItem(xC)}catch{}try{let e=(await wC()).transaction([`meta`,`docs`],`readwrite`);for(let t of r)t!==SC&&(e.objectStore(`meta`).delete(t),e.objectStore(`docs`).delete(t));await TC(e)}catch{}return{removed:r.size,bytes:i}}function PC(){try{let e=localStorage.getItem(xC);if(!e)return null;let t=JSON.parse(e);return{time:Number(t.time)||0,name:typeof t.name==`string`?t.name:``,file:t.file}}catch{return null}}async function FC(){let e=[];try{e=await EC((await wC()).transaction(`meta`).objectStore(`meta`).getAll())}catch{}let t=PC();return t&&e.push({id:SC,time:t.time,name:t.name}),e.sort((e,t)=>t.time-e.time)}async function IC(e){try{if(e===SC){let e=PC();return e?$d(JSON.stringify(e.file)):null}let t=await EC((await wC()).transaction(`docs`).objectStore(`docs`).get(e));return typeof t==`string`?$d(t):null}catch{return null}}async function LC(e){try{if(e===SC)return localStorage.removeItem(xC);let t=(await wC()).transaction([`meta`,`docs`],`readwrite`);t.objectStore(`meta`).delete(e),t.objectStore(`docs`).delete(e),await TC(t)}catch{}}async function RC(){OC=null,await LC(DC)}async function zC(e){let t=qS(),n=await IC(e.id);return n?(t.loadDoc(n.doc,n.mode,{name:e.name,dirty:!0}),rC(n),e.id===SC?(await AC(),OC&&await LC(SC)):DC=e.id,!0):(t.toast(t.t(`msg.openFailed`),`error`),!1)}var BC=null;function VC(){let e=()=>{BC&&clearInterval(BC);let e=Jt.getState().autosaveMinutes;BC=e>0?setInterval(()=>void AC(),e*6e4):null};e(),Jt.subscribe((t,n)=>{t.autosaveMinutes!==n.autosaveMinutes&&e()}),yr.subscribe((e,t)=>{e.past!==t.past&&!e.past.length&&!e.future.length&&(DC=V(),OC=null)}),window.addEventListener(`beforeunload`,e=>{AC();let t=qS();(t.file.dirty||Object.values(t.parked).some(e=>e?.file.dirty))&&e.preventDefault()})}export{Rx as $,Jd as $n,yv as $t,aS as A,$m as An,lx as At,Gx as B,um as Bn,Ny as Bt,BS as C,Ah as Cn,Kl as Cr,Eb as Ct,hS as D,xh as Dn,Bc as Dr,rx as Dt,SS as E,mh as En,_l as Er,Db as Et,qx as F,xm as Fn,Ky as Ft,jx as G,vp as Gn,By as Gt,Bx as H,Jp as Hn,My as Ht,nS as I,bm as In,Gy as It,Px as J,cp as Jn,py as Jt,Nx as K,bp as Kn,Fy as Kt,rS as L,ym as Ln,Wy as Lt,cS as M,jm as Mn,cx as Mt,Hx as N,Am as Nn,qb as Nt,dS as O,hh as On,Rl as Or,nx as Ot,Ux as P,km as Pn,ib as Pt,Vx as Q,Yd as Qn,ly as Qt,tS as R,lm as Rn,qy as Rt,PS as S,kh as Sn,vl as Sr,bb as St,xS as T,Nh as Tn,Yc as Tr,Bb as Tt,kx as U,wp as Un,Vy as Ut,Wx as V,nm as Vn,Iy as Vt,Mx as W,kp as Wn,Ly as Wt,Ix as X,Mp as Xn,Sy as Xt,Fx as Y,Tp as Yn,_y as Yt,Ax as Z,$d as Zn,yy as Zt,GS as _,Ng as _n,zc as _r,Rb as _t,FC as a,R_ as an,vd as ar,tx as at,NS as b,Mg as bn,Bl as br,Nb as bt,NC as c,P_ as cn,rl as cr,Kb as ct,XS as d,p_ as dn,zl as dr,Wb as dt,bv as en,Gd as er,zx as et,tC as f,Xg as fn,il as fr,Zb as ft,HS as g,kg as gn,kl as gr,jb as gt,AC as h,Pg as hn,Lc as hr,eb as ht,mC as i,xv as in,Vd as ir,zb as it,sS as j,dm as jn,$b as jt,mS as k,Sh as kn,nl as kr,Tb as kt,zC as l,u_ as ln,gl as lr,wb as lt,VC as m,Ig as mn,Gl as mr,xb as mt,lC as n,vv as nn,Hd as nr,Gb as nt,eC as o,B_ as on,tl as or,Mb as ot,$S as p,Fg as pn,$c as pr,Hb as pt,Lx as q,jp as qn,vy as qt,KS as r,Sv as rn,Kd as rr,rb as rt,sC as s,I_ as sn,Rc as sr,mb as st,MC as t,Q as tn,Ud as tr,Ox as tt,LC as u,N_ as un,cl as ur,Sb as ut,WS as v,Ag as vn,Vc as vr,hb as vt,RS as w,jh as wn,Xc as wr,sx as wt,MS as x,Lh as xn,Hc as xr,Pb as xt,FS as y,jg as yn,Hl as yr,Vb as yt,iS as z,om as zn,Uy as zt};