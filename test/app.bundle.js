(self.webpackChunkouterspace_webpack=self.webpackChunkouterspace_webpack||[]).push([[143],{679:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>s});var o=t(537),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"body{background:#040d21;margin:0;color:#627597}article{background:#fff;width:100vw;height:100vh;display:flex;flex-direction:column}article h1{padding:0;margin:auto;color:#000;font-size:4rem;font-family:sans-serif}article #sphere,article #next,article #half{margin:auto;height:80vh;width:100vw;background:#fff}","",{version:3,sources:["webpack://./src/style.sass"],names:[],mappings:"AAKA,KACE,kBAAA,CACA,QAAA,CACA,aANU,CAQZ,QAEE,eAAA,CACA,WAAA,CACA,YAAA,CACA,YAAA,CACA,qBAAA,CAEA,WACE,SAAA,CACA,WAAA,CACA,UAAA,CACA,cAAA,CACA,sBAAA,CACF,4CACE,WAAA,CACA,WAAA,CACA,WAAA,CACA,eAAA",sourcesContent:["$darkblue0: #040d21\r\n$darkblue: #030915\r\n$lightblue: #627597\r\n$lightgreen: #00cfc8\r\n\r\nbody\r\n  background: #040d21\r\n  margin: 0\r\n  color: $lightblue\r\n\r\narticle\r\n  // background: $lightblue\r\n  background: #fff\r\n  width: 100vw\r\n  height: 100vh\r\n  display: flex\r\n  flex-direction: column\r\n\r\n  h1\r\n    padding: 0\r\n    margin: auto\r\n    color: #000\r\n    font-size: 4rem\r\n    font-family: sans-serif\r\n  #sphere, #next, #half\r\n    margin: auto\r\n    height: 80vh\r\n    width: 100vw\r\n    background: #fff\r\n"],sourceRoot:""}]);const s=i},812:e=>{e.exports="uniform float time;\nuniform sampler2D tex;\nuniform float lvl;\nvarying vec3 vPos;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvec3 faceNormal(vec3 pos) {\n\tvec3 fdx = dFdx(pos);\n\tvec3 fdy = dFdy(pos);\n\treturn normalize(cross(fdx, fdy));\n}\nbool isBackSide(vec3 pos) {\n\treturn dot(normalize(pos), faceNormal(pos)) < 0.0;\n}\nvec3 col = vec3(0.7333, 0.6863, 1.0);\nvoid main() {\n\tfloat opacity = 1.0;\n\tif (vPos.z < (lvl + ((cos(((time * 1.0) + vPos.x) + (vPos.y * 2.0)) / 15.0) / 4.0))) {\n\t\topacity = 0.0;\n\t}\n\tgl_FragColor.w = opacity - 0.1;\n\tif (isBackSide(vPos)) {\n\t\tgl_FragColor.xyz = col;\n\t}\n\telse {\n\t\tvec4 t = texture2D(tex, (vUv / 1.5) + fract(time / 15.0));\n\t\tgl_FragColor.xyz = mix(col, col * (1.0 - vNormal.z), distance(0.5, vPos.z));\n\t\tgl_FragColor.xyz *= (normalize(t.xyz).y * (col * 2.0));\n\t}\n}\n"},499:e=>{e.exports="uniform float time;\nvarying vec3 vPos;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvoid main() {\n\tvec3 transformed = position;\n\tvNormal = normal;\n\tvUv = uv;\n\tvPos = transformed;\n\tvec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);\n\tgl_Position = projectionMatrix * mvPosition;\n}\n"},515:e=>{e.exports="uniform float time;\nuniform sampler2D tex;\nuniform vec3 col;\nvarying vec3 vPos;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvec3 faceNormal(vec3 pos) {\n\tvec3 fdx = dFdx(pos);\n\tvec3 fdy = dFdy(pos);\n\treturn normalize(cross(fdx, fdy));\n}\nbool isBackSide(vec3 pos) {\n\treturn dot(normalize(pos), faceNormal(pos)) < 0.0;\n}\nvoid main() {\n\tfloat opacity = 1.0;\n\tif (vPos.z < (0.0 + (sin((time + (vUv.x * 5.0)) + (vUv.y * 3.0)) / 10.0))) {\n\t\topacity = 0.0;\n\t}\n\tgl_FragColor.w = opacity;\n\tif (isBackSide(vPos)) {\n\t\tgl_FragColor.xyz = col;\n\t}\n\telse {\n\t\tvec4 t = texture2D(tex, (vUv / 1.5) + fract(time / 15.0));\n\t\tgl_FragColor.xyz = mix(col, col * (1.0 - vNormal.z), distance(0.5, vPos.z));\n\t\tgl_FragColor.xyz *= (normalize(t.xyz).r * (col * 2.0));\n\t}\n}\n"},740:e=>{e.exports="uniform float time;\nvarying vec3 vPos;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvoid main() {\n\tvec3 transformed = position;\n\tvNormal = normal;\n\tvUv = uv;\n\tvPos = transformed;\n\tvec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);\n\tgl_Position = projectionMatrix * mvPosition;\n}\n"},184:e=>{e.exports="uniform float from;\nuniform float len;\nuniform float time;\nuniform sampler2D tex;\nvarying float vIndex;\nvarying vec3 vPos;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vTex;\nvec3 faceNormal(vec3 pos) {\n\tvec3 fdx = dFdx(pos);\n\tvec3 fdy = dFdy(pos);\n\treturn normalize(cross(fdx, fdy));\n}\nbool isBackSide(vec3 pos) {\n\treturn dot(normalize(pos), faceNormal(pos)) < 0.0;\n}\nvoid main() {\n\tvec3 col = vec3(0.0, 0.3294, 0.6392);\n\tvec2 uv = vUv;\n\tuv.y += uv.x;\n\tvec4 t = texture2D(tex, (uv * 2.5) + fract(time / 25.0));\n\tvec3 c = vec3(pow(t.r, 3.0));\n\tcol *= c;\n\tcol *= vec3(10.0);\n\tvec3 lightPos = vec3(5.0);\n\tvec3 lightColor = vec3(1);\n\tvec3 lightDir = normalize(lightPos - vPos);\n\tfloat diff = max(dot(vPos, lightDir), 0.0);\n\tvec3 diffuse = 0.5 + (diff * lightColor);\n\tfloat opacity = 0.5;\n\tgl_FragColor.w = opacity;\n\tgl_FragColor.xyz = col * diffuse;\n\tif ((vIndex > from) && (vIndex < (from + len))) {\n\t\tgl_FragColor.w = opacity;\n\t}\n\telse {\n\t\tdiscard;\n\t\tgl_FragColor.w = 0.0;\n\t}\n}\n"},615:e=>{e.exports="attribute float indexattr;\nvarying vec3 vPos;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying float vIndex;\nvoid main() {\n\tvec3 transformed = position;\n\tvIndex = indexattr;\n\tvNormal = normal;\n\tvUv = uv;\n\tvPos = transformed;\n\tvec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);\n\tgl_Position = projectionMatrix * mvPosition;\n}\n"},117:e=>{e.exports="uniform float time;\nuniform sampler2D tex;\nvarying vec3 vPos;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vTex;\nvec3 faceNormal(vec3 pos) {\n\tvec3 fdx = dFdx(pos);\n\tvec3 fdy = dFdy(pos);\n\treturn normalize(cross(fdx, fdy));\n}\nbool isBackSide(vec3 pos) {\n\treturn dot(normalize(pos), faceNormal(pos)) < 0.0;\n}\nvoid main() {\n\tvec3 col = vec3(0.0, 0.3294, 0.6392);\n\tvec4 t = texture2D(tex, vUv + fract(time / 15.0));\n\tvec3 c = vec3(pow(t.r, 3.0));\n\tcol *= c;\n\tcol *= vec3(10.0);\n\tvec3 lightPos = vec3(5.0);\n\tvec3 lightColor = vec3(1);\n\tvec3 lightDir = normalize(lightPos - vPos);\n\tfloat diff = max(dot(normalize(vPos), lightDir), 0.0);\n\tvec3 diffuse = 0.5 + (diff * lightColor);\n\tfloat opacity = 0.5;\n\tgl_FragColor.w = opacity;\n\tgl_FragColor.xyz = col * diffuse;\n}\n"},302:e=>{e.exports="#include < fog_vertex >\r\nuniform float time;\nuniform sampler2D tex;\nvarying vec3 vPos;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vTex;\nmat4 rotation3d(vec3 axis, float angle) {\n\taxis = normalize(axis);\n\tfloat s = sin(angle);\n\tfloat c = cos(angle);\n\tfloat oc = 1.0 - c;\n\treturn mat4(((oc * axis.x) * axis.x) + c, ((oc * axis.x) * axis.y) - (axis.z * s), ((oc * axis.z) * axis.x) + (axis.y * s), 0.0, ((oc * axis.x) * axis.y) + (axis.z * s), ((oc * axis.y) * axis.y) + c, ((oc * axis.y) * axis.z) - (axis.x * s), 0.0, ((oc * axis.z) * axis.x) - (axis.y * s), ((oc * axis.y) * axis.z) + (axis.x * s), ((oc * axis.z) * axis.z) + c, 0.0, 0.0, 0.0, 0.0, 1.0);\n}\nvec3 rotate(vec3 v, vec3 axis, float angle) {\n\treturn (rotation3d(axis, angle) * vec4(v, 1.0)).xyz;\n}\nvoid main() {\n\tvec3 transformed = position;\n\tvNormal = normal;\n\tvUv = uv;\n\tvec4 t = texture2D(tex, uv + fract(time / 50.0));\n\tvec4 t2 = texture2D(tex, uv - fract(time / 50.0));\n\tvec4 t3 = mix(t, t2 * 1.0, 0.5);\n\ttransformed += (t3.xyz / 2.0);\n\tvTex = t3.xyz;\n\tfloat scale = 1.0;\n\tvPos = transformed;\n\tvec4 mvPosition = modelViewMatrix * vec4(transformed * scale, 1.0);\n\tgl_Position = projectionMatrix * mvPosition;\n}\n"},530:(e,n,t)=>{"use strict";var o=t(379),r=t.n(o),a=t(795),i=t.n(a),s=t(569),l=t.n(s),c=t(565),v=t.n(c),m=t(216),d=t.n(m),f=t(589),u=t.n(f),p=t(679),x={};x.styleTagTransform=u(),x.setAttributes=v(),x.insert=l().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=d();var g=r()(p.default,x);if(!p.default.locals||e.hot.invalidate){var h=!p.default.locals,y=h?p:p.default.locals;e.hot.accept(679,(n=>{p=t(679),function(e,n,t){if(!e&&n||e&&!n)return!1;var o;for(o in e)if((!t||"default"!==o)&&e[o]!==n[o])return!1;for(o in n)if(!(t&&"default"===o||e[o]))return!1;return!0}(y,h?p:p.default.locals,h)?(y=h?p:p.default.locals,g(p.default)):e.hot.invalidate()}))}e.hot.dispose((function(){g()})),p.default&&p.default.locals&&p.default.locals},72:(e,n,t)=>{"use strict";t(530);var o=t(212),r=t(365);class a{constructor(e){this.cb=()=>{},this.onWindowResize=()=>{this.camera.aspect=this.domElem.clientWidth/this.domElem.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.domElem.clientWidth,this.domElem.clientHeight)},this.setEnviroment=()=>{},this.domElem=e,this.renderer=new o.CP7({antialias:!0}),this.renderer.setSize(this.domElem.clientWidth,this.domElem.clientHeight),this.domElem.appendChild(this.renderer.domElement),this.camera=new o.cPb(75,1,.1,1e5),this.scene=new o.xsS,this.scene.background=new o.Ilk("##f4f4f7"),this.pmremGenerator=new o.anP(this.renderer),this.pmremGenerator.compileEquirectangularShader(),this.controls=new r.z(this.camera,this.renderer.domElement),this.sceneSetup(),this.onWindowResize(),window.addEventListener("resize",this.onWindowResize,!1)}sceneSetup(){const e=new o.cek(new o.Ilk("white"),15,100),n=new o.Mig("white");e.position.set(50,50,50),this.camera.lookAt(0,0,0),this.scene.add(e,n,this.camera),this.setEnviroment()}render(){this.cb(),this.renderer.render(this.scene,this.camera),requestAnimationFrame((()=>this.render()))}animate(e){this.cb=e,this.render()}}var i=t(740),s=t.n(i),l=t(515),c=t.n(l);const v=(new o.dpR).load("/assets/low_noise.png");v.wrapT=v.wrapS=o.rpg;const m=new o.Ilk("#fed9c6"),d=new o.Ilk("#cdc0d4"),f=e=>{const n=new o.jyz({vertexShader:s(),fragmentShader:c(),side:o.ehD,uniforms:{time:{value:0},tex:{value:v},col:{value:e}},transparent:!0}),t=new o.Kj0(new o.xo$(1,32,32),n);return t.rotation.x=Math.PI/2,t},u=()=>{const e=new o.Kj0(new o.xo$(1,32,32),new o.EJi({color:"white",opacity:.1,metalness:.9,roughness:.05,envMapIntensity:.9,reflectivity:.2,refractionRatio:.985,ior:.9,side:o.ehD,transparent:!0}));return e.scale.multiplyScalar(1.01),e},p=f(m),x=u(),g=f(d),h=u();p.position.x+=1.25,x.position.x+=1.25,g.position.x-=1.25,h.position.x-=1.25;const y=new o.ZAu;y.add(p,x,g,h);const A={group:y,update:()=>{p.material.uniforms.time.value+=.05,g.material.uniforms.time.value+=.05}};var w=t(499),C=t.n(w),z=t(812),P=t.n(z);const b=(new o.dpR).load("/assets/low_noise.png");b.wrapT=b.wrapS=o.rpg,(new o.dpR).load("/assets/1.png").mapping=o.dSO;const k=e=>{const n=new o.jyz({vertexShader:C(),fragmentShader:P(),side:o.ehD,uniforms:{time:{value:0},tex:{value:b},lvl:{value:e}},transparent:!0}),t=new o.Kj0(new o.xo$(1,32,32),n);return t.rotation.x=Math.PI/2,t},S=()=>{const e=new o.Kj0(new o.xo$(1,32,32),new o.EJi({color:"white",emissive:"silver",metalness:1,roughness:.2,opacity:.25,clearcoat:1,clearcoatRoughness:1,side:o.ehD,transparent:!0}));return e.scale.multiplyScalar(1.01),e.material.needsUpdate=!0,e},E=k(.75),F=S();E.position.x+=3,F.position.x+=3;const _=k(-.5),N=S();_.position.x-=3,N.position.x-=3;const D=k(0),U=S(),j=new o.ZAu;j.add(E,F,_,N,D,U);const W={group:j,update:()=>{E.material.uniforms.time.value+=.05,_.material.uniforms.time.value+=.05,D.material.uniforms.time.value+=.05}};var I=t(615),M=t.n(I),$=t(184),R=t.n($),T=t(302),B=t.n(T),K=t(117),q=t.n(K);const Z=new o.ZAu,V=(new o.dpR).load("/assets/low_noise.png");V.wrapT=V.wrapS=o.rpg;const H=()=>{const e=new o.jyz({vertexShader:(n=B(),`${n}`.replace(/#include < (.+) >/g,"#include <$1>")),fragmentShader:q(),side:o.ehD,uniforms:{time:{value:0},tex:{value:V}},transparent:!0});var n;e.needsUpdate=!0;const t=new o.xo$(1,132,132);return new o.Kj0(t,e)},J=H();Z.add(J);const O=new o.ZAu,Q=(new o.dpR).load("/assets/low_noise.png");Q.wrapT=Q.wrapS=o.rpg;const Y=[[0,-1,0],[0,0,0],[0,0,4],[4,0,4],[4,0,-2],[0,0,-2],[0,2,-2],[0,2,4],[4,2,4],[4,2,-2],[2,2,-2],[2,2,1],[2,-2,1],[2,-2,8],[2,4,8],[0,4,8],[0,5,8]].map((e=>new o.Pa4(...e)));var G=new o.YT8(Y);const X=new o.WXh(G,220,.5,8),L=new o.Kj0(X,new o.EJi({color:"white",roughness:.5,metalness:1,clearcoat:1,clearcoatRoughness:1,side:o.ehD,transparent:!0,opacity:.15})),ee=new o.WXh(G,220,.5,8),ne=ee.attributes.position.array.length,te=[...Array(ne/3)].map(((e,n)=>n)),oe=new Float32Array(te);ee.setAttribute("indexattr",new o.TlE(oe,1));const re=new o.Kj0(ee,new o.jyz({vertexShader:M(),fragmentShader:R(),side:o.ehD,uniforms:{time:{value:0},tex:{value:Q},from:{value:0},len:{value:200}}})),ae=H();ae.position.set(0,6,7.5);const ie=H();ie.position.set(0,-3,-.5),O.add(re,L,ae,ie);const se={group:O,update:()=>{re.material.uniforms.from.value>ne/3+200&&(re.material.uniforms.from.value=0),re.material.uniforms.from.value+=8,re.material.uniforms.time.value+=.05,ae.material.uniforms.time.value+=.05,ie.material.uniforms.time.value+=.05}},le=new a(document.querySelector("#sphere"));le.camera.position.set(-5,7,-4),le.camera.lookAt(0,3,0),le.scene.add(se.group),le.animate((()=>{se.update()}));const ce=new a(document.querySelector("#half"));ce.camera.position.set(0,1,-4),ce.camera.lookAt(A.group.position),ce.scene.add(A.group),ce.animate((()=>{A.update()}));const ve=new a(document.querySelector("#next"));ve.camera.position.set(0,1,-4),ve.camera.lookAt(W.group.position),ve.scene.add(W.group),ve.animate((()=>{W.update()}))}},e=>{var n=n=>e(e.s=n);e.O(0,[743],(()=>(n(25),n(952),n(72)))),e.O()}]);
//# sourceMappingURL=app.bundle.js.map