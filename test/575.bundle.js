"use strict";(self.webpackChunkouterspace_webpack=self.webpackChunkouterspace_webpack||[]).push([[575],{575:(t,s,h)=>{var e=h(511),a=h(502);function r(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}s.parse=O,s.resolve=function(t,s){return O(t,!1,!0).resolve(s)},s.resolveObject=function(t,s){return t?O(t,!1,!0).resolveObject(s):s},s.format=function(t){return a.isString(t)&&(t=O(t)),t instanceof r?t.format():r.prototype.format.call(t)},s.Url=r;var o=/^([a-z0-9.+-]+:)/i,n=/:[0-9]*$/,i=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,l=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),p=["'"].concat(l),c=["%","/","?",";","#"].concat(p),u=["/","?","#"],f=/^[+a-z0-9A-Z_-]{0,63}$/,m=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,v={javascript:!0,"javascript:":!0},g={javascript:!0,"javascript:":!0},y={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},b=h(254);function O(t,s,h){if(t&&a.isObject(t)&&t instanceof r)return t;var e=new r;return e.parse(t,s,h),e}r.prototype.parse=function(t,s,h){if(!a.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var r=t.indexOf("?"),n=-1!==r&&r<t.indexOf("#")?"?":"#",l=t.split(n);l[0]=l[0].replace(/\\/g,"/");var O=t=l.join(n);if(O=O.trim(),!h&&1===t.split("#").length){var j=i.exec(O);if(j)return this.path=O,this.href=O,this.pathname=j[1],j[2]?(this.search=j[2],this.query=s?b.parse(this.search.substr(1)):this.search.substr(1)):s&&(this.search="",this.query={}),this}var d=o.exec(O);if(d){var q=(d=d[0]).toLowerCase();this.protocol=q,O=O.substr(d.length)}if(h||d||O.match(/^\/\/[^@\/]+@[^@\/]+/)){var x="//"===O.substr(0,2);!x||d&&g[d]||(O=O.substr(2),this.slashes=!0)}if(!g[d]&&(x||d&&!y[d])){for(var A,k,w=-1,C=0;C<u.length;C++)-1!==(I=O.indexOf(u[C]))&&(-1===w||I<w)&&(w=I);for(-1!==(k=-1===w?O.lastIndexOf("@"):O.lastIndexOf("@",w))&&(A=O.slice(0,k),O=O.slice(k+1),this.auth=decodeURIComponent(A)),w=-1,C=0;C<c.length;C++){var I;-1!==(I=O.indexOf(c[C]))&&(-1===w||I<w)&&(w=I)}-1===w&&(w=O.length),this.host=O.slice(0,w),O=O.slice(w),this.parseHost(),this.hostname=this.hostname||"";var N="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!N)for(var U=this.hostname.split(/\./),S=(C=0,U.length);C<S;C++){var R=U[C];if(R&&!R.match(f)){for(var $="",_=0,z=R.length;_<z;_++)R.charCodeAt(_)>127?$+="x":$+=R[_];if(!$.match(f)){var H=U.slice(0,C),L=U.slice(C+1),Z=R.match(m);Z&&(H.push(Z[1]),L.unshift(Z[2])),L.length&&(O="/"+L.join(".")+O),this.hostname=H.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),N||(this.hostname=e.toASCII(this.hostname));var E=this.port?":"+this.port:"",P=this.hostname||"";this.host=P+E,this.href+=this.host,N&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==O[0]&&(O="/"+O))}if(!v[q])for(C=0,S=p.length;C<S;C++){var T=p[C];if(-1!==O.indexOf(T)){var B=encodeURIComponent(T);B===T&&(B=escape(T)),O=O.split(T).join(B)}}var D=O.indexOf("#");-1!==D&&(this.hash=O.substr(D),O=O.slice(0,D));var F=O.indexOf("?");if(-1!==F?(this.search=O.substr(F),this.query=O.substr(F+1),s&&(this.query=b.parse(this.query)),O=O.slice(0,F)):s&&(this.search="",this.query={}),O&&(this.pathname=O),y[q]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){E=this.pathname||"";var G=this.search||"";this.path=E+G}return this.href=this.format(),this},r.prototype.format=function(){var t=this.auth||"";t&&(t=(t=encodeURIComponent(t)).replace(/%3A/i,":"),t+="@");var s=this.protocol||"",h=this.pathname||"",e=this.hash||"",r=!1,o="";this.host?r=t+this.host:this.hostname&&(r=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(r+=":"+this.port)),this.query&&a.isObject(this.query)&&Object.keys(this.query).length&&(o=b.stringify(this.query));var n=this.search||o&&"?"+o||"";return s&&":"!==s.substr(-1)&&(s+=":"),this.slashes||(!s||y[s])&&!1!==r?(r="//"+(r||""),h&&"/"!==h.charAt(0)&&(h="/"+h)):r||(r=""),e&&"#"!==e.charAt(0)&&(e="#"+e),n&&"?"!==n.charAt(0)&&(n="?"+n),s+r+(h=h.replace(/[?#]/g,(function(t){return encodeURIComponent(t)})))+(n=n.replace("#","%23"))+e},r.prototype.resolve=function(t){return this.resolveObject(O(t,!1,!0)).format()},r.prototype.resolveObject=function(t){if(a.isString(t)){var s=new r;s.parse(t,!1,!0),t=s}for(var h=new r,e=Object.keys(this),o=0;o<e.length;o++){var n=e[o];h[n]=this[n]}if(h.hash=t.hash,""===t.href)return h.href=h.format(),h;if(t.slashes&&!t.protocol){for(var i=Object.keys(t),l=0;l<i.length;l++){var p=i[l];"protocol"!==p&&(h[p]=t[p])}return y[h.protocol]&&h.hostname&&!h.pathname&&(h.path=h.pathname="/"),h.href=h.format(),h}if(t.protocol&&t.protocol!==h.protocol){if(!y[t.protocol]){for(var c=Object.keys(t),u=0;u<c.length;u++){var f=c[u];h[f]=t[f]}return h.href=h.format(),h}if(h.protocol=t.protocol,t.host||g[t.protocol])h.pathname=t.pathname;else{for(var m=(t.pathname||"").split("/");m.length&&!(t.host=m.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==m[0]&&m.unshift(""),m.length<2&&m.unshift(""),h.pathname=m.join("/")}if(h.search=t.search,h.query=t.query,h.host=t.host||"",h.auth=t.auth,h.hostname=t.hostname||t.host,h.port=t.port,h.pathname||h.search){var v=h.pathname||"",b=h.search||"";h.path=v+b}return h.slashes=h.slashes||t.slashes,h.href=h.format(),h}var O=h.pathname&&"/"===h.pathname.charAt(0),j=t.host||t.pathname&&"/"===t.pathname.charAt(0),d=j||O||h.host&&t.pathname,q=d,x=h.pathname&&h.pathname.split("/")||[],A=(m=t.pathname&&t.pathname.split("/")||[],h.protocol&&!y[h.protocol]);if(A&&(h.hostname="",h.port=null,h.host&&(""===x[0]?x[0]=h.host:x.unshift(h.host)),h.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===m[0]?m[0]=t.host:m.unshift(t.host)),t.host=null),d=d&&(""===m[0]||""===x[0])),j)h.host=t.host||""===t.host?t.host:h.host,h.hostname=t.hostname||""===t.hostname?t.hostname:h.hostname,h.search=t.search,h.query=t.query,x=m;else if(m.length)x||(x=[]),x.pop(),x=x.concat(m),h.search=t.search,h.query=t.query;else if(!a.isNullOrUndefined(t.search))return A&&(h.hostname=h.host=x.shift(),(N=!!(h.host&&h.host.indexOf("@")>0)&&h.host.split("@"))&&(h.auth=N.shift(),h.host=h.hostname=N.shift())),h.search=t.search,h.query=t.query,a.isNull(h.pathname)&&a.isNull(h.search)||(h.path=(h.pathname?h.pathname:"")+(h.search?h.search:"")),h.href=h.format(),h;if(!x.length)return h.pathname=null,h.search?h.path="/"+h.search:h.path=null,h.href=h.format(),h;for(var k=x.slice(-1)[0],w=(h.host||t.host||x.length>1)&&("."===k||".."===k)||""===k,C=0,I=x.length;I>=0;I--)"."===(k=x[I])?x.splice(I,1):".."===k?(x.splice(I,1),C++):C&&(x.splice(I,1),C--);if(!d&&!q)for(;C--;C)x.unshift("..");!d||""===x[0]||x[0]&&"/"===x[0].charAt(0)||x.unshift(""),w&&"/"!==x.join("/").substr(-1)&&x.push("");var N,U=""===x[0]||x[0]&&"/"===x[0].charAt(0);return A&&(h.hostname=h.host=U?"":x.length?x.shift():"",(N=!!(h.host&&h.host.indexOf("@")>0)&&h.host.split("@"))&&(h.auth=N.shift(),h.host=h.hostname=N.shift())),(d=d||h.host&&x.length)&&!U&&x.unshift(""),x.length?h.pathname=x.join("/"):(h.pathname=null,h.path=null),a.isNull(h.pathname)&&a.isNull(h.search)||(h.path=(h.pathname?h.pathname:"")+(h.search?h.search:"")),h.auth=t.auth||h.auth,h.slashes=h.slashes||t.slashes,h.href=h.format(),h},r.prototype.parseHost=function(){var t=this.host,s=n.exec(t);s&&(":"!==(s=s[0])&&(this.port=s.substr(1)),t=t.substr(0,t.length-s.length)),t&&(this.hostname=t)}},502:t=>{t.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}}}]);