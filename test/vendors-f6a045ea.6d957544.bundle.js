"use strict";(self.webpackChunkouterspace_webpack=self.webpackChunkouterspace_webpack||[]).push([[440],{1507:(t,e,s)=>{s.d(e,{M:()=>a});var i=s(7185);class a extends i._{constructor(t,e){super(t,e),this.type="AmbientLight"}}a.prototype.isAmbientLight=!0},1514:(t,e,s)=>{s.d(e,{O:()=>h});var i=s(7185),a=s(3515),n=s(3131);class r extends a.h{constructor(){super(new n.i(-5,5,5,-5,.5,500))}}r.prototype.isDirectionalLightShadow=!0;var o=s(6469);class h extends i._{constructor(t,e){super(t,e),this.type="DirectionalLight",this.position.copy(o.T.DefaultUp),this.updateMatrix(),this.target=new o.T,this.shadow=new r}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}h.prototype.isDirectionalLight=!0},7185:(t,e,s)=>{s.d(e,{_:()=>n});var i=s(6469),a=s(3662);class n extends i.T{constructor(t,e=1){super(),this.type="Light",this.color=new a.I(t),this.intensity=e}dispose(){}copy(t){return super.copy(t),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,void 0!==this.groundColor&&(e.object.groundColor=this.groundColor.getHex()),void 0!==this.distance&&(e.object.distance=this.distance),void 0!==this.angle&&(e.object.angle=this.angle),void 0!==this.decay&&(e.object.decay=this.decay),void 0!==this.penumbra&&(e.object.penumbra=this.penumbra),void 0!==this.shadow&&(e.object.shadow=this.shadow.toJSON()),e}}n.prototype.isLight=!0},3515:(t,e,s)=>{s.d(e,{h:()=>c});var i=s(9203),a=s(1138),n=s(6881),r=s(223),o=s(4698);const h=new i.y,l=new n.P,p=new n.P;class c{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new a.F(512,512),this.map=null,this.mapPass=null,this.matrix=new i.y,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new o.i,this._frameExtents=new a.F(1,1),this._viewportCount=1,this._viewports=[new r.L(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,s=this.matrix;l.setFromMatrixPosition(t.matrixWorld),e.position.copy(l),p.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(p),e.updateMatrixWorld(),h.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(h),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(e.projectionMatrix),s.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return(new this.constructor).copy(this)}toJSON(){const t={};return 0!==this.bias&&(t.bias=this.bias),0!==this.normalBias&&(t.normalBias=this.normalBias),1!==this.radius&&(t.radius=this.radius),512===this.mapSize.x&&512===this.mapSize.y||(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}},8490:(t,e,s)=>{s.d(e,{c:()=>m});var i=s(7185),a=s(3515),n=s(1051),r=s(9203),o=s(1138),h=s(6881),l=s(223);const p=new r.y,c=new h.P,u=new h.P;class d extends a.h{constructor(){super(new n.c(90,1,.5,500)),this._frameExtents=new o.F(4,2),this._viewportCount=6,this._viewports=[new l.L(2,1,1,1),new l.L(0,1,1,1),new l.L(3,1,1,1),new l.L(1,1,1,1),new l.L(3,0,1,1),new l.L(1,0,1,1)],this._cubeDirections=[new h.P(1,0,0),new h.P(-1,0,0),new h.P(0,0,1),new h.P(0,0,-1),new h.P(0,1,0),new h.P(0,-1,0)],this._cubeUps=[new h.P(0,1,0),new h.P(0,1,0),new h.P(0,1,0),new h.P(0,1,0),new h.P(0,0,1),new h.P(0,0,-1)]}updateMatrices(t,e=0){const s=this.camera,i=this.matrix,a=t.distance||s.far;a!==s.far&&(s.far=a,s.updateProjectionMatrix()),c.setFromMatrixPosition(t.matrixWorld),s.position.copy(c),u.copy(s.position),u.add(this._cubeDirections[e]),s.up.copy(this._cubeUps[e]),s.lookAt(u),s.updateMatrixWorld(),i.makeTranslation(-c.x,-c.y,-c.z),p.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(p)}}d.prototype.isPointLightShadow=!0;class m extends i._{constructor(t,e,s=0,i=1){super(t,e),this.type="PointLight",this.distance=s,this.decay=i,this.shadow=new d}get power(){return 4*this.intensity*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}m.prototype.isPointLight=!0},3120:(t,e,s)=>{s.d(e,{P:()=>l});var i=s(7185),a=s(3515),n=s(2043),r=s(1051);class o extends a.h{constructor(){super(new r.c(50,1,.5,500)),this.focus=1}updateMatrices(t){const e=this.camera,s=2*n.I3*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,a=t.distance||e.far;s===e.fov&&i===e.aspect&&a===e.far||(e.fov=s,e.aspect=i,e.far=a,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}o.prototype.isSpotLightShadow=!0;var h=s(6469);class l extends i._{constructor(t,e,s=0,i=Math.PI/3,a=0,n=1){super(t,e),this.type="SpotLight",this.position.copy(h.T.DefaultUp),this.updateMatrix(),this.target=new h.T,this.distance=s,this.angle=i,this.penumbra=a,this.decay=n,this.shadow=new o}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}l.prototype.isSpotLight=!0},2626:(t,e,s)=>{s.d(e,{C:()=>i});const i={enabled:!1,files:{},add:function(t,e){!1!==this.enabled&&(this.files[t]=e)},get:function(t){if(!1!==this.enabled)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}}},5092:(t,e,s)=>{s.d(e,{h:()=>r});var i=s(2626),a=s(6023);const n={};class r extends a.a{constructor(t){super(t)}load(t,e,s,a){void 0===t&&(t=""),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);const r=i.C.get(t);if(void 0!==r)return this.manager.itemStart(t),setTimeout((()=>{e&&e(r),this.manager.itemEnd(t)}),0),r;if(void 0!==n[t])return void n[t].push({onLoad:e,onProgress:s,onError:a});n[t]=[],n[t].push({onLoad:e,onProgress:s,onError:a});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(o).then((e=>{if(200===e.status||0===e.status){0===e.status&&console.warn("THREE.FileLoader: HTTP Status 0 received.");const s=n[t],i=e.body.getReader(),a=e.headers.get("Content-Length"),r=a?parseInt(a):0,o=0!==r;let h=0;return new ReadableStream({start(t){!function e(){i.read().then((({done:i,value:a})=>{if(i)t.close();else{h+=a.byteLength;const i=new ProgressEvent("progress",{lengthComputable:o,loaded:h,total:r});for(let t=0,e=s.length;t<e;t++){const e=s[t];e.onProgress&&e.onProgress(i)}t.enqueue(a),e()}}))}()}})}throw Error(`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`)})).then((t=>{const e=new Response(t);switch(this.responseType){case"arraybuffer":return e.arrayBuffer();case"blob":return e.blob();case"document":return e.text().then((t=>(new DOMParser).parseFromString(t,this.mimeType)));case"json":return e.json();default:return e.text()}})).then((e=>{i.C.add(t,e);const s=n[t];delete n[t];for(let t=0,i=s.length;t<i;t++){const i=s[t];i.onLoad&&i.onLoad(e)}this.manager.itemEnd(t)})).catch((e=>{const s=n[t];delete n[t];for(let t=0,i=s.length;t<i;t++){const i=s[t];i.onError&&i.onError(e)}this.manager.itemError(t),this.manager.itemEnd(t)})),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}},7066:(t,e,s)=>{s.d(e,{Q:()=>n});var i=s(2626),a=s(6023);class n extends a.a{constructor(t){super(t),"undefined"==typeof createImageBitmap&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),"undefined"==typeof fetch&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,s,a){void 0===t&&(t=""),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);const n=this,r=i.C.get(t);if(void 0!==r)return n.manager.itemStart(t),setTimeout((function(){e&&e(r),n.manager.itemEnd(t)}),0),r;const o={};o.credentials="anonymous"===this.crossOrigin?"same-origin":"include",o.headers=this.requestHeader,fetch(t,o).then((function(t){return t.blob()})).then((function(t){return createImageBitmap(t,Object.assign(n.options,{colorSpaceConversion:"none"}))})).then((function(s){i.C.add(t,s),e&&e(s),n.manager.itemEnd(t)})).catch((function(e){a&&a(e),n.manager.itemError(t),n.manager.itemEnd(t)})),n.manager.itemStart(t)}}n.prototype.isImageBitmapLoader=!0},6023:(t,e,s)=>{s.d(e,{a:()=>a});const i=new class{constructor(t,e,s){const i=this;let a,n=!1,r=0,o=0;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=s,this.itemStart=function(t){o++,!1===n&&void 0!==i.onStart&&i.onStart(t,r,o),n=!0},this.itemEnd=function(t){r++,void 0!==i.onProgress&&i.onProgress(t,r,o),r===o&&(n=!1,void 0!==i.onLoad&&i.onLoad())},this.itemError=function(t){void 0!==i.onError&&i.onError(t)},this.resolveURL=function(t){return a?a(t):t},this.setURLModifier=function(t){return a=t,this},this.addHandler=function(t,e){return h.push(t,e),this},this.removeHandler=function(t){const e=h.indexOf(t);return-1!==e&&h.splice(e,2),this},this.getHandler=function(t){for(let e=0,s=h.length;e<s;e+=2){const s=h[e],i=h[e+1];if(s.global&&(s.lastIndex=0),s.test(t))return i}return null}}};class a{constructor(t){this.manager=void 0!==t?t:i,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const s=this;return new Promise((function(i,a){s.load(t,i,e,a)}))}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}},4948:(t,e,s)=>{s.d(e,{Z:()=>i});class i{static decodeText(t){if("undefined"!=typeof TextDecoder)return(new TextDecoder).decode(t);let e="";for(let s=0,i=t.length;s<i;s++)e+=String.fromCharCode(t[s]);try{return decodeURIComponent(escape(e))}catch(t){return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return-1===e?"./":t.substr(0,e+1)}static resolveURL(t,e){return"string"!=typeof t||""===t?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}},2980:(t,e,s)=>{s.d(e,{d:()=>h});var i=s(2626),a=s(6023),n=s(392);class r extends a.a{constructor(t){super(t)}load(t,e,s,a){void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=i.C.get(t);if(void 0!==o)return r.manager.itemStart(t),setTimeout((function(){e&&e(o),r.manager.itemEnd(t)}),0),o;const h=(0,n.c)("img");function l(){c(),i.C.add(t,this),e&&e(this),r.manager.itemEnd(t)}function p(e){c(),a&&a(e),r.manager.itemError(t),r.manager.itemEnd(t)}function c(){h.removeEventListener("load",l,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",l,!1),h.addEventListener("error",p,!1),"data:"!==t.substr(0,5)&&void 0!==this.crossOrigin&&(h.crossOrigin=this.crossOrigin),r.manager.itemStart(t),h.src=t,h}}var o=s(4467);class h extends a.a{constructor(t){super(t)}load(t,e,s,i){const a=new o.x,n=new r(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(t,(function(t){a.image=t,a.needsUpdate=!0,void 0!==e&&e(a)}),s,i),a}}},5785:(t,e,s)=>{s.d(e,{n:()=>n});var i=s(4164),a=s(3662);class n extends i.F{constructor(t){super(),this.type="LineBasicMaterial",this.color=new a.I(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this}}n.prototype.isLineBasicMaterial=!0},4164:(t,e,s)=>{s.d(e,{F:()=>o});var i=s(7406),a=s(1661),n=s(2043);let r=0;class o extends i.p{constructor(){super(),Object.defineProperty(this,"id",{value:r++}),this.uuid=n.DO(),this.name="",this.type="Material",this.fog=!0,this.blending=a.bdR,this.side=a.Wl3,this.vertexColors=!1,this.opacity=1,this.format=a.wk1,this.transparent=!1,this.blendSrc=a.k74,this.blendDst=a.LgZ,this.blendEquation=a.bGH,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=a.vCF,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=a.cum,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=a.x5V,this.stencilZFail=a.x5V,this.stencilZPass=a.x5V,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(void 0!==t)for(const e in t){const s=t[e];if(void 0===s){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if("shading"===e){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===a.esl;continue}const i=this[e];void 0!==i?i&&i.isColor?i.set(s):i&&i.isVector3&&s&&s.isVector3?i.copy(s):this[e]=s:console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.")}}toJSON(t){const e=void 0===t||"string"==typeof t;e&&(t={textures:{},images:{}});const s={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function i(t){const e=[];for(const s in t){const i=t[s];delete i.metadata,e.push(i)}return e}if(s.uuid=this.uuid,s.type=this.type,""!==this.name&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),void 0!==this.roughness&&(s.roughness=this.roughness),void 0!==this.metalness&&(s.metalness=this.metalness),void 0!==this.sheen&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),void 0!==this.sheenRoughness&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&1!==this.emissiveIntensity&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),void 0!==this.specularIntensity&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),void 0!==this.shininess&&(s.shininess=this.shininess),void 0!==this.clearcoat&&(s.clearcoat=this.clearcoat),void 0!==this.clearcoatRoughness&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,void 0!==this.combine&&(s.combine=this.combine)),void 0!==this.envMapIntensity&&(s.envMapIntensity=this.envMapIntensity),void 0!==this.reflectivity&&(s.reflectivity=this.reflectivity),void 0!==this.refractionRatio&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),void 0!==this.transmission&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),void 0!==this.thickness&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),void 0!==this.attenuationDistance&&(s.attenuationDistance=this.attenuationDistance),void 0!==this.attenuationColor&&(s.attenuationColor=this.attenuationColor.getHex()),void 0!==this.size&&(s.size=this.size),null!==this.shadowSide&&(s.shadowSide=this.shadowSide),void 0!==this.sizeAttenuation&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==a.bdR&&(s.blending=this.blending),this.side!==a.Wl3&&(s.side=this.side),this.vertexColors&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.format!==a.wk1&&(s.format=this.format),!0===this.transparent&&(s.transparent=this.transparent),s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.stencilWrite=this.stencilWrite,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,this.rotation&&0!==this.rotation&&(s.rotation=this.rotation),!0===this.polygonOffset&&(s.polygonOffset=!0),0!==this.polygonOffsetFactor&&(s.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&1!==this.linewidth&&(s.linewidth=this.linewidth),void 0!==this.dashSize&&(s.dashSize=this.dashSize),void 0!==this.gapSize&&(s.gapSize=this.gapSize),void 0!==this.scale&&(s.scale=this.scale),!0===this.dithering&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),!0===this.alphaToCoverage&&(s.alphaToCoverage=this.alphaToCoverage),!0===this.premultipliedAlpha&&(s.premultipliedAlpha=this.premultipliedAlpha),!0===this.wireframe&&(s.wireframe=this.wireframe),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(s.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(s.wireframeLinejoin=this.wireframeLinejoin),!0===this.flatShading&&(s.flatShading=this.flatShading),!1===this.visible&&(s.visible=!1),!1===this.toneMapped&&(s.toneMapped=!1),"{}"!==JSON.stringify(this.userData)&&(s.userData=this.userData),e){const e=i(t.textures),a=i(t.images);e.length>0&&(s.textures=e),a.length>0&&(s.images=a)}return s}clone(){return(new this.constructor).copy(this)}copy(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.format=t.format,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let s=null;if(null!==e){const t=e.length;s=new Array(t);for(let i=0;i!==t;++i)s[i]=e[i].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){!0===t&&this.version++}}o.prototype.isMaterial=!0},6173:(t,e,s)=>{s.d(e,{v:()=>r});var i=s(4164),a=s(1661),n=s(3662);class r extends i.F{constructor(t){super(),this.type="MeshBasicMaterial",this.color=new n.I(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=a.Ns1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}r.prototype.isMeshBasicMaterial=!0},2114:(t,e,s)=>{s.d(e,{l:()=>n});var i=s(4164),a=s(1661);class n extends i.F{constructor(t){super(),this.type="MeshDepthMaterial",this.depthPacking=a.z81,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}n.prototype.isMeshDepthMaterial=!0},7683:(t,e,s)=>{s.d(e,{L:()=>n});var i=s(4164),a=s(6881);class n extends i.F{constructor(t){super(),this.type="MeshDistanceMaterial",this.referencePosition=new a.P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}n.prototype.isMeshDistanceMaterial=!0},8045:(t,e,s)=>{s.d(e,{E:()=>o});var i=s(1138),a=s(3914),n=s(3662),r=s(2043);class o extends a.W{constructor(t){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new i.F(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return r.uZ(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new n.I(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new n.I(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new n.I(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}o.prototype.isMeshPhysicalMaterial=!0},3914:(t,e,s)=>{s.d(e,{W:()=>o});var i=s(1661),a=s(4164),n=s(1138),r=s(3662);class o extends a.F{constructor(t){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new r.I(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new r.I(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=i.IOt,this.normalScale=new n.F(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this}}o.prototype.isMeshStandardMaterial=!0},6679:(t,e,s)=>{s.d(e,{U:()=>n});var i=s(4164),a=s(3662);class n extends i.F{constructor(t){super(),this.type="PointsMaterial",this.color=new a.I(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this}}n.prototype.isPointsMaterial=!0},8549:(t,e,s)=>{s.d(e,{F:()=>a});var i=s(1621);class a extends i.j{constructor(t){super(t),this.type="RawShaderMaterial"}}a.prototype.isRawShaderMaterial=!0},1621:(t,e,s)=>{s.d(e,{j:()=>o});var i=s(4164),a=s(6682),n=s(5880),r=s(1306);class o extends i.F{constructor(t){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=n.Z,this.fragmentShader=r.Z,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,void 0!==t&&(void 0!==t.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=(0,a.dw)(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const i=this.uniforms[s].value;i&&i.isTexture?e.uniforms[s]={type:"t",value:i.toJSON(t).uuid}:i&&i.isColor?e.uniforms[s]={type:"c",value:i.getHex()}:i&&i.isVector2?e.uniforms[s]={type:"v2",value:i.toArray()}:i&&i.isVector3?e.uniforms[s]={type:"v3",value:i.toArray()}:i&&i.isVector4?e.uniforms[s]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?e.uniforms[s]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?e.uniforms[s]={type:"m4",value:i.toArray()}:e.uniforms[s]={value:i}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const s={};for(const t in this.extensions)!0===this.extensions[t]&&(s[t]=!0);return Object.keys(s).length>0&&(e.extensions=s),e}}o.prototype.isShaderMaterial=!0}}]);