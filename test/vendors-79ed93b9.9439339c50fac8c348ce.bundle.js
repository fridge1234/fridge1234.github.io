"use strict";(self.webpackChunkouterspace_webpack=self.webpackChunkouterspace_webpack||[]).push([[218],{9975:(t,e,r)=>{r.d(e,{_Z:()=>yt});var n,i,s,a,o,p,f,c=r(5317),l={},h=180/Math.PI,u=Math.PI/180,g=Math.atan2,d=/([A-Z])/g,x=/(?:left|right|width|margin|padding|x)/i,m=/[\s,\(]\S/,y={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},v=function(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)},b=function(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)},w=function(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)},O=function(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)},_=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},P=function(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)},M=function(t,e,r){return t.style[e]=r},F=function(t,e,r){return t.style.setProperty(e,r)},C=function(t,e,r){return t._gsap[e]=r},A=function(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r},S=function(t,e,r,n,i){var s=t._gsap;s.scaleX=s.scaleY=r,s.renderTransform(i,s)},Y=function(t,e,r,n,i){var s=t._gsap;s[e]=r,s.renderTransform(i,s)},B="transform",k=B+"Origin",X=function(t,e){var r=i.createElementNS?i.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):i.createElement(t);return r.style?r:i.createElement(t)},T=function t(e,r,n){var i=getComputedStyle(e);return i[r]||i.getPropertyValue(r.replace(d,"-$1").toLowerCase())||i.getPropertyValue(r)||!n&&t(e,W(r)||r,1)||""},z="O,Moz,ms,Ms,Webkit".split(","),W=function(t,e,r){var n=(e||o).style,i=5;if(t in n&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);i--&&!(z[i]+t in n););return i<0?null:(3===i?"ms":i>=0?z[i]:"")+t},I=function(){"undefined"!=typeof window&&window.document&&(n=window,i=n.document,s=i.documentElement,o=X("div")||{style:{}},X("div"),B=W(B),k=B+"Origin",o.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",f=!!W("perspective"),a=1)},E=function t(e){var r,n=X("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,a=this.nextSibling,o=this.style.cssText;if(s.appendChild(n),n.appendChild(this),this.style.display="block",e)try{r=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=t}catch(t){}else this._gsapBBox&&(r=this._gsapBBox());return i&&(a?i.insertBefore(this,a):i.appendChild(this)),s.removeChild(n),this.style.cssText=o,r},N=function(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])},D=function(t){var e;try{e=t.getBBox()}catch(r){e=E.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===E||(e=E.call(t,!0)),!e||e.width||e.x||e.y?e:{x:+N(t,["x","cx","x1"])||0,y:+N(t,["y","cy","y1"])||0,width:0,height:0}},V=function(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!D(t))},q=function(t,e){if(e){var r=t.style;e in l&&e!==k&&(e=B),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(d,"-$1").toLowerCase())):r.removeAttribute(e)}},G=function(t,e,r,n,i,s){var a=new c.Fo(t._pt,e,r,0,1,s?P:_);return t._pt=a,a.b=n,a.e=i,t._props.push(r),a},Z={deg:1,rad:1,turn:1},L=function t(e,r,n,s){var a,p,f,h,u=parseFloat(n)||0,g=(n+"").trim().substr((u+"").length)||"px",d=o.style,m=x.test(r),y="svg"===e.tagName.toLowerCase(),v=(y?"client":"offset")+(m?"Width":"Height"),b=100,w="px"===s,O="%"===s;return s===g||!u||Z[s]||Z[g]?u:("px"!==g&&!w&&(u=t(e,r,n,"px")),h=e.getCTM&&V(e),!O&&"%"!==g||!l[r]&&!~r.indexOf("adius")?(d[m?"width":"height"]=b+(w?g:s),p=~r.indexOf("adius")||"em"===s&&e.appendChild&&!y?e:e.parentNode,h&&(p=(e.ownerSVGElement||{}).parentNode),p&&p!==i&&p.appendChild||(p=i.body),(f=p._gsap)&&O&&f.width&&m&&f.time===c.xr.time?(0,c.Pr)(u/f.width*b):((O||"%"===g)&&(d.position=T(e,"position")),p===e&&(d.position="static"),p.appendChild(o),a=o[v],p.removeChild(o),d.position="absolute",m&&O&&((f=(0,c.DY)(p)).time=c.xr.time,f.width=p[v]),(0,c.Pr)(w?a*u/b:a&&u?b/a*u:0))):(a=h?e.getBBox()[m?"width":"height"]:e[v],(0,c.Pr)(O?u/a*b:u/100*a)))},R=function(t,e,r,n){var i;return a||I(),e in y&&"transform"!==e&&~(e=y[e]).indexOf(",")&&(e=e.split(",")[0]),l[e]&&"transform"!==e?(i=nt(t,n),i="transformOrigin"!==e?i[e]:i.svg?i.origin:it(T(t,k))+" "+i.zOrigin+"px"):(!(i=t.style[e])||"auto"===i||n||~(i+"").indexOf("calc("))&&(i=$[e]&&$[e](t,e,r)||T(t,e)||(0,c.Ok)(t,e)||("opacity"===e?1:0)),r&&!~(i+"").trim().indexOf(" ")?L(t,e,i,r)+r:i},j=function(t,e,r,n){if(!r||"none"===r){var i=W(e,t,1),s=i&&T(t,i,1);s&&s!==r?(e=i,r=s):"borderColor"===e&&(r=T(t,"borderTopColor"))}var a,o,p,f,l,h,u,g,d,x,m,y,v=new c.Fo(this._pt,t.style,e,0,1,c.Ks),b=0,w=0;if(v.b=r,v.e=n,r+="","auto"===(n+="")&&(t.style[e]=n,n=T(t,e)||n,t.style[e]=r),a=[r,n],(0,c.kr)(a),n=a[1],p=(r=a[0]).match(c.d4)||[],(n.match(c.d4)||[]).length){for(;o=c.d4.exec(n);)u=o[0],d=n.substring(b,o.index),l?l=(l+1)%5:"rgba("!==d.substr(-5)&&"hsla("!==d.substr(-5)||(l=1),u!==(h=p[w++]||"")&&(f=parseFloat(h)||0,m=h.substr((f+"").length),(y="="===u.charAt(1)?+(u.charAt(0)+"1"):0)&&(u=u.substr(2)),g=parseFloat(u),x=u.substr((g+"").length),b=c.d4.lastIndex-x.length,x||(x=x||c.Fc.units[e]||m,b===n.length&&(n+=x,v.e+=x)),m!==x&&(f=L(t,e,h,x)||0),v._pt={_next:v._pt,p:d||1===w?d:",",s:f,c:y?y*g:g-f,m:l&&l<4||"zIndex"===e?Math.round:0});v.c=b<n.length?n.substring(b,n.length):""}else v.r="display"===e&&"none"===n?P:_;return c.bQ.test(n)&&(v.e=0),this._pt=v,v},H={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},U=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,n,i,s=e.t,a=s.style,o=e.u,p=s._gsap;if("all"===o||!0===o)a.cssText="",n=1;else for(i=(o=o.split(",")).length;--i>-1;)r=o[i],l[r]&&(n=1,r="transformOrigin"===r?k:B),q(s,r);n&&(q(s,B),p&&(p.svg&&s.removeAttribute("transform"),nt(s,1),p.uncache=1))}},$={clearProps:function(t,e,r,n,i){if("isFromStart"!==i.data){var s=t._pt=new c.Fo(t._pt,e,r,0,0,U);return s.u=n,s.pr=-10,s.tween=i,t._props.push(r),1}}},J=[1,0,0,1,0,0],K={},Q=function(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t},tt=function(t){var e=T(t,B);return Q(e)?J:e.substr(7).match(c.SI).map(c.Pr)},et=function(t,e){var r,n,i,a,o=t._gsap||(0,c.DY)(t),p=t.style,f=tt(t);return o.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(f=[(i=t.transform.baseVal.consolidate().matrix).a,i.b,i.c,i.d,i.e,i.f]).join(",")?J:f:(f!==J||t.offsetParent||t===s||o.svg||(i=p.display,p.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,n=t.nextSibling,s.appendChild(t)),f=tt(t),i?p.display=i:q(t,"display"),a&&(n?r.insertBefore(t,n):r?r.appendChild(t):s.removeChild(t))),e&&f.length>6?[f[0],f[1],f[4],f[5],f[12],f[13]]:f)},rt=function(t,e,r,n,i,s){var a,o,p,f=t._gsap,c=i||et(t,!0),l=f.xOrigin||0,h=f.yOrigin||0,u=f.xOffset||0,g=f.yOffset||0,d=c[0],x=c[1],m=c[2],y=c[3],v=c[4],b=c[5],w=e.split(" "),O=parseFloat(w[0])||0,_=parseFloat(w[1])||0;r?c!==J&&(o=d*y-x*m)&&(p=O*(-x/o)+_*(d/o)-(d*b-x*v)/o,O=O*(y/o)+_*(-m/o)+(m*b-y*v)/o,_=p):(O=(a=D(t)).x+(~w[0].indexOf("%")?O/100*a.width:O),_=a.y+(~(w[1]||w[0]).indexOf("%")?_/100*a.height:_)),n||!1!==n&&f.smooth?(v=O-l,b=_-h,f.xOffset=u+(v*d+b*m)-v,f.yOffset=g+(v*x+b*y)-b):f.xOffset=f.yOffset=0,f.xOrigin=O,f.yOrigin=_,f.smooth=!!n,f.origin=e,f.originIsAbsolute=!!r,t.style[k]="0px 0px",s&&(G(s,f,"xOrigin",l,O),G(s,f,"yOrigin",h,_),G(s,f,"xOffset",u,f.xOffset),G(s,f,"yOffset",g,f.yOffset)),t.setAttribute("data-svg-origin",O+" "+_)},nt=function(t,e){var r=t._gsap||new c.l1(t);if("x"in r&&!e&&!r.uncache)return r;var n,i,s,a,o,p,l,d,x,m,y,v,b,w,O,_,P,M,F,C,A,S,Y,X,z,W,I,E,N,D,q,G,Z=t.style,L=r.scaleX<0,R="px",j="deg",H=T(t,k)||"0";return n=i=s=p=l=d=x=m=y=0,a=o=1,r.svg=!(!t.getCTM||!V(t)),w=et(t,r.svg),r.svg&&(X=(!r.uncache||"0px 0px"===H)&&!e&&t.getAttribute("data-svg-origin"),rt(t,X||H,!!X||r.originIsAbsolute,!1!==r.smooth,w)),v=r.xOrigin||0,b=r.yOrigin||0,w!==J&&(M=w[0],F=w[1],C=w[2],A=w[3],n=S=w[4],i=Y=w[5],6===w.length?(a=Math.sqrt(M*M+F*F),o=Math.sqrt(A*A+C*C),p=M||F?g(F,M)*h:0,(x=C||A?g(C,A)*h+p:0)&&(o*=Math.abs(Math.cos(x*u))),r.svg&&(n-=v-(v*M+b*C),i-=b-(v*F+b*A))):(G=w[6],D=w[7],I=w[8],E=w[9],N=w[10],q=w[11],n=w[12],i=w[13],s=w[14],l=(O=g(G,N))*h,O&&(X=S*(_=Math.cos(-O))+I*(P=Math.sin(-O)),z=Y*_+E*P,W=G*_+N*P,I=S*-P+I*_,E=Y*-P+E*_,N=G*-P+N*_,q=D*-P+q*_,S=X,Y=z,G=W),d=(O=g(-C,N))*h,O&&(_=Math.cos(-O),q=A*(P=Math.sin(-O))+q*_,M=X=M*_-I*P,F=z=F*_-E*P,C=W=C*_-N*P),p=(O=g(F,M))*h,O&&(X=M*(_=Math.cos(O))+F*(P=Math.sin(O)),z=S*_+Y*P,F=F*_-M*P,Y=Y*_-S*P,M=X,S=z),l&&Math.abs(l)+Math.abs(p)>359.9&&(l=p=0,d=180-d),a=(0,c.Pr)(Math.sqrt(M*M+F*F+C*C)),o=(0,c.Pr)(Math.sqrt(Y*Y+G*G)),O=g(S,Y),x=Math.abs(O)>2e-4?O*h:0,y=q?1/(q<0?-q:q):0),r.svg&&(X=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!Q(T(t,B)),X&&t.setAttribute("transform",X))),Math.abs(x)>90&&Math.abs(x)<270&&(L?(a*=-1,x+=p<=0?180:-180,p+=p<=0?180:-180):(o*=-1,x+=x<=0?180:-180)),r.x=n-((r.xPercent=n&&(r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-n)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+R,r.y=i-((r.yPercent=i&&(r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-i)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+R,r.z=s+R,r.scaleX=(0,c.Pr)(a),r.scaleY=(0,c.Pr)(o),r.rotation=(0,c.Pr)(p)+j,r.rotationX=(0,c.Pr)(l)+j,r.rotationY=(0,c.Pr)(d)+j,r.skewX=x+j,r.skewY=m+j,r.transformPerspective=y+R,(r.zOrigin=parseFloat(H.split(" ")[2])||0)&&(Z[k]=it(H)),r.xOffset=r.yOffset=0,r.force3D=c.Fc.force3D,r.renderTransform=r.svg?lt:f?ct:at,r.uncache=0,r},it=function(t){return(t=t.split(" "))[0]+" "+t[1]},st=function(t,e,r){var n=(0,c.Wy)(e);return(0,c.Pr)(parseFloat(e)+parseFloat(L(t,"x",r+"px",n)))+n},at=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,ct(t,e)},ot="0deg",pt="0px",ft=") ",ct=function(t,e){var r=e||this,n=r.xPercent,i=r.yPercent,s=r.x,a=r.y,o=r.z,p=r.rotation,f=r.rotationY,c=r.rotationX,l=r.skewX,h=r.skewY,g=r.scaleX,d=r.scaleY,x=r.transformPerspective,m=r.force3D,y=r.target,v=r.zOrigin,b="",w="auto"===m&&t&&1!==t||!0===m;if(v&&(c!==ot||f!==ot)){var O,_=parseFloat(f)*u,P=Math.sin(_),M=Math.cos(_);_=parseFloat(c)*u,O=Math.cos(_),s=st(y,s,P*O*-v),a=st(y,a,-Math.sin(_)*-v),o=st(y,o,M*O*-v+v)}x!==pt&&(b+="perspective("+x+ft),(n||i)&&(b+="translate("+n+"%, "+i+"%) "),(w||s!==pt||a!==pt||o!==pt)&&(b+=o!==pt||w?"translate3d("+s+", "+a+", "+o+") ":"translate("+s+", "+a+ft),p!==ot&&(b+="rotate("+p+ft),f!==ot&&(b+="rotateY("+f+ft),c!==ot&&(b+="rotateX("+c+ft),l===ot&&h===ot||(b+="skew("+l+", "+h+ft),1===g&&1===d||(b+="scale("+g+", "+d+ft),y.style[B]=b||"translate(0, 0)"},lt=function(t,e){var r,n,i,s,a,o=e||this,p=o.xPercent,f=o.yPercent,l=o.x,h=o.y,g=o.rotation,d=o.skewX,x=o.skewY,m=o.scaleX,y=o.scaleY,v=o.target,b=o.xOrigin,w=o.yOrigin,O=o.xOffset,_=o.yOffset,P=o.forceCSS,M=parseFloat(l),F=parseFloat(h);g=parseFloat(g),d=parseFloat(d),(x=parseFloat(x))&&(d+=x=parseFloat(x),g+=x),g||d?(g*=u,d*=u,r=Math.cos(g)*m,n=Math.sin(g)*m,i=Math.sin(g-d)*-y,s=Math.cos(g-d)*y,d&&(x*=u,a=Math.tan(d-x),i*=a=Math.sqrt(1+a*a),s*=a,x&&(a=Math.tan(x),r*=a=Math.sqrt(1+a*a),n*=a)),r=(0,c.Pr)(r),n=(0,c.Pr)(n),i=(0,c.Pr)(i),s=(0,c.Pr)(s)):(r=m,s=y,n=i=0),(M&&!~(l+"").indexOf("px")||F&&!~(h+"").indexOf("px"))&&(M=L(v,"x",l,"px"),F=L(v,"y",h,"px")),(b||w||O||_)&&(M=(0,c.Pr)(M+b-(b*r+w*i)+O),F=(0,c.Pr)(F+w-(b*n+w*s)+_)),(p||f)&&(a=v.getBBox(),M=(0,c.Pr)(M+p/100*a.width),F=(0,c.Pr)(F+f/100*a.height)),a="matrix("+r+","+n+","+i+","+s+","+M+","+F+")",v.setAttribute("transform",a),P&&(v.style[B]=a)},ht=function(t,e,r,n,i,s){var a,o,p=360,f=(0,c.r9)(i),l=parseFloat(i)*(f&&~i.indexOf("rad")?h:1),u=s?l*s:l-n,g=n+u+"deg";return f&&("short"===(a=i.split("_")[1])&&(u%=p)!==u%180&&(u+=u<0?p:-360),"cw"===a&&u<0?u=(u+36e9)%p-~~(u/p)*p:"ccw"===a&&u>0&&(u=(u-36e9)%p-~~(u/p)*p)),t._pt=o=new c.Fo(t._pt,e,r,n,u,b),o.e=g,o.u="deg",t._props.push(r),o},ut=function(t,e){for(var r in e)t[r]=e[r];return t},gt=function(t,e,r){var n,i,s,a,o,p,f,h=ut({},r._gsap),u=r.style;for(i in h.svg?(s=r.getAttribute("transform"),r.setAttribute("transform",""),u[B]=e,n=nt(r,1),q(r,B),r.setAttribute("transform",s)):(s=getComputedStyle(r)[B],u[B]=e,n=nt(r,1),u[B]=s),l)(s=h[i])!==(a=n[i])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(i)<0&&(o=(0,c.Wy)(s)!==(f=(0,c.Wy)(a))?L(r,i,s,f):parseFloat(s),p=parseFloat(a),t._pt=new c.Fo(t._pt,n,i,o,p-o,v),t._pt.u=f||0,t._props.push(i));ut(n,h)};(0,c.fS)("padding,margin,Width,Radius",(function(t,e){var r="Top",n="Right",i="Bottom",s="Left",a=(e<3?[r,n,i,s]:[r+s,r+n,i+n,i+s]).map((function(r){return e<2?t+r:"border"+r+t}));$[e>1?"border"+t:t]=function(t,e,r,n,i){var s,o;if(arguments.length<4)return s=a.map((function(e){return R(t,e,r)})),5===(o=s.join(" ")).split(s[0]).length?s[0]:o;s=(n+"").split(" "),o={},a.forEach((function(t,e){return o[t]=s[e]=s[e]||s[(e-1)/2|0]})),t.init(e,o,i)}}));var dt,xt,mt,yt={name:"css",register:I,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,r,n,i){var s,o,p,f,h,u,g,d,x,b,_,P,M,F,C,A,S,Y,k,X=this._props,T=t.style,z=r.vars.startAt;for(g in a||I(),e)if("autoRound"!==g&&(o=e[g],!c.$i[g]||!(0,c.if)(g,e,r,n,t,i)))if(h=typeof o,u=$[g],"function"===h&&(h=typeof(o=o.call(r,n,t,i))),"string"===h&&~o.indexOf("random(")&&(o=(0,c.UI)(o)),u)u(this,t,g,o,r)&&(C=1);else if("--"===g.substr(0,2))s=(getComputedStyle(t).getPropertyValue(g)+"").trim(),o+="",c.GN.lastIndex=0,c.GN.test(s)||(d=(0,c.Wy)(s),x=(0,c.Wy)(o)),x?d!==x&&(s=L(t,g,s,x)+x):d&&(o+=d),this.add(T,"setProperty",s,o,n,i,0,0,g),X.push(g);else if("undefined"!==h){if(z&&g in z?(s="function"==typeof z[g]?z[g].call(r,n,t,i):z[g],g in c.Fc.units&&!(0,c.Wy)(s)&&(s+=c.Fc.units[g]),(0,c.r9)(s)&&~s.indexOf("random(")&&(s=(0,c.UI)(s)),"="===(s+"").charAt(1)&&(s=R(t,g))):s=R(t,g),f=parseFloat(s),(b="string"===h&&"="===o.charAt(1)?+(o.charAt(0)+"1"):0)&&(o=o.substr(2)),p=parseFloat(o),g in y&&("autoAlpha"===g&&(1===f&&"hidden"===R(t,"visibility")&&p&&(f=0),G(this,T,"visibility",f?"inherit":"hidden",p?"inherit":"hidden",!p)),"scale"!==g&&"transform"!==g&&~(g=y[g]).indexOf(",")&&(g=g.split(",")[0])),_=g in l)if(P||((M=t._gsap).renderTransform&&!e.parseTransform||nt(t,e.parseTransform),F=!1!==e.smoothOrigin&&M.smooth,(P=this._pt=new c.Fo(this._pt,T,B,0,1,M.renderTransform,M,0,-1)).dep=1),"scale"===g)this._pt=new c.Fo(this._pt,M,"scaleY",M.scaleY,(b?b*p:p-M.scaleY)||0),X.push("scaleY",g),g+="X";else{if("transformOrigin"===g){S=void 0,Y=void 0,k=void 0,S=(A=o).split(" "),Y=S[0],k=S[1]||"50%","top"!==Y&&"bottom"!==Y&&"left"!==k&&"right"!==k||(A=Y,Y=k,k=A),S[0]=H[Y]||Y,S[1]=H[k]||k,o=S.join(" "),M.svg?rt(t,o,0,F,0,this):((x=parseFloat(o.split(" ")[2])||0)!==M.zOrigin&&G(this,M,"zOrigin",M.zOrigin,x),G(this,T,g,it(s),it(o)));continue}if("svgOrigin"===g){rt(t,o,1,F,0,this);continue}if(g in K){ht(this,M,g,f,o,b);continue}if("smoothOrigin"===g){G(this,M,"smooth",M.smooth,o);continue}if("force3D"===g){M[g]=o;continue}if("transform"===g){gt(this,o,t);continue}}else g in T||(g=W(g)||g);if(_||(p||0===p)&&(f||0===f)&&!m.test(o)&&g in T)p||(p=0),(d=(s+"").substr((f+"").length))!==(x=(0,c.Wy)(o)||(g in c.Fc.units?c.Fc.units[g]:d))&&(f=L(t,g,s,x)),this._pt=new c.Fo(this._pt,_?M:T,g,f,b?b*p:p-f,_||"px"!==x&&"zIndex"!==g||!1===e.autoRound?v:O),this._pt.u=x||0,d!==x&&"%"!==x&&(this._pt.b=s,this._pt.r=w);else if(g in T)j.call(this,t,g,s,o);else{if(!(g in t)){(0,c.lC)(g,o);continue}this.add(t,g,s||t[g],o,n,i)}X.push(g)}C&&(0,c.JV)(this)},get:R,aliases:y,getSetter:function(t,e,r){var n=y[e];return n&&n.indexOf(",")<0&&(e=n),e in l&&e!==k&&(t._gsap.x||R(t,"x"))?r&&p===r?"scale"===e?A:C:(p=r||{})&&("scale"===e?S:Y):t.style&&!(0,c.m2)(t.style[e])?M:~e.indexOf("-")?F:(0,c.S5)(t,e)},core:{_removeProperty:q,_getMatrix:et}};c.p8.utils.checkPrefix=W,dt="x,y,z,scale,scaleX,scaleY,xPercent,yPercent",xt="rotation,rotationX,rotationY,skewX,skewY",mt=(0,c.fS)(dt+","+xt+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",(function(t){l[t]=1})),(0,c.fS)(xt,(function(t){c.Fc.units[t]="deg",K[t]=1})),y[mt[13]]=dt+","+xt,(0,c.fS)("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",(function(t){var e=t.split(":");y[e[1]]=mt[e[0]]})),(0,c.fS)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",(function(t){c.Fc.units[t]="px"})),c.p8.registerPlugin(yt)}}]);