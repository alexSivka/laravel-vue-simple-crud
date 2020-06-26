/*!
 * Responsive Bootstrap Toolkit
 * Author:    Maciej Gurban
 * License:   MIT
 * Version:   2.6.3 (2016-06-21)
 * Origin:    https://github.com/maciej-gurban/responsive-bootstrap-toolkit
 */


var ResponsiveBootstrapToolkit=function(i){var e={detectionDivs:{bootstrap:{xs:i('<div class="device-xs visible-xs visible-xs-block"></div>'),sm:i('<div class="device-sm visible-sm visible-sm-block"></div>'),md:i('<div class="device-md visible-md visible-md-block"></div>'),lg:i('<div class="device-lg visible-lg visible-lg-block"></div>')},foundation:{small:i('<div class="device-xs show-for-small-only"></div>'),medium:i('<div class="device-sm show-for-medium-only"></div>'),large:i('<div class="device-md show-for-large-only"></div>'),xlarge:i('<div class="device-lg show-for-xlarge-only"></div>')}},applyDetectionDivs:function(){i(document).ready(function(){i.each(o.breakpoints,function(i){o.breakpoints[i].appendTo(".responsive-bootstrap-toolkit")})})},isAnExpression:function(i){return"<"==i.charAt(0)||">"==i.charAt(0)},splitExpression:function(i){var e=i.charAt(0),o="="==i.charAt(1),s=1+(o?1:0),n=i.slice(s);return{operator:e,orEqual:o,breakpointName:n}},isAnyActive:function(e){var s=!1;return i.each(e,function(i,e){return o.breakpoints[e].is(":visible")?(s=!0,!1):void 0}),s},isMatchingExpression:function(i){var s=e.splitExpression(i),n=Object.keys(o.breakpoints),r=n.indexOf(s.breakpointName);if(-1!==r){var t=0,a=0;"<"==s.operator&&(t=0,a=s.orEqual?++r:r),">"==s.operator&&(t=s.orEqual?r:++r,a=void 0);var l=n.slice(t,a);return e.isAnyActive(l)}}},o={interval:300,framework:null,breakpoints:null,is:function(i){return e.isAnExpression(i)?e.isMatchingExpression(i):o.breakpoints[i]&&o.breakpoints[i].is(":visible")},use:function(i,s){o.framework=i.toLowerCase(),"bootstrap"===o.framework||"foundation"===o.framework?o.breakpoints=e.detectionDivs[o.framework]:o.breakpoints=s,e.applyDetectionDivs()},current:function(){var e="unrecognized";return i.each(o.breakpoints,function(i){o.is(i)&&(e=i)}),e},changed:function(i,e){var s;return function(){clearTimeout(s),s=setTimeout(function(){i()},e||o.interval)}}};return i(document).ready(function(){i('<div class="responsive-bootstrap-toolkit"></div>').appendTo("body")}),null===o.framework&&o.use("bootstrap"),o}(jQuery);"undefined"!=typeof module&&module.exports&&(module.exports=ResponsiveBootstrapToolkit);

// TinyColor v1.4.1
// https://github.com/bgrins/TinyColor
// 2016-07-07, Brian Grinstead, MIT License
!function(a){function b(a,d){if(a=a?a:"",d=d||{},a instanceof b)return a;if(!(this instanceof b))return new b(a,d);var e=c(a);this._originalInput=a,this._r=e.r,this._g=e.g,this._b=e.b,this._a=e.a,this._roundA=P(100*this._a)/100,this._format=d.format||e.format,this._gradientType=d.gradientType,this._r<1&&(this._r=P(this._r)),this._g<1&&(this._g=P(this._g)),this._b<1&&(this._b=P(this._b)),this._ok=e.ok,this._tc_id=O++}function c(a){var b={r:0,g:0,b:0},c=1,e=null,g=null,i=null,j=!1,k=!1;return"string"==typeof a&&(a=K(a)),"object"==typeof a&&(J(a.r)&&J(a.g)&&J(a.b)?(b=d(a.r,a.g,a.b),j=!0,k="%"===String(a.r).substr(-1)?"prgb":"rgb"):J(a.h)&&J(a.s)&&J(a.v)?(e=G(a.s),g=G(a.v),b=h(a.h,e,g),j=!0,k="hsv"):J(a.h)&&J(a.s)&&J(a.l)&&(e=G(a.s),i=G(a.l),b=f(a.h,e,i),j=!0,k="hsl"),a.hasOwnProperty("a")&&(c=a.a)),c=z(c),{ok:j,format:a.format||k,r:Q(255,R(b.r,0)),g:Q(255,R(b.g,0)),b:Q(255,R(b.b,0)),a:c}}function d(a,b,c){return{r:255*A(a,255),g:255*A(b,255),b:255*A(c,255)}}function e(a,b,c){a=A(a,255),b=A(b,255),c=A(c,255);var d,e,f=R(a,b,c),g=Q(a,b,c),h=(f+g)/2;if(f==g)d=e=0;else{var i=f-g;switch(e=h>.5?i/(2-f-g):i/(f+g),f){case a:d=(b-c)/i+(c>b?6:0);break;case b:d=(c-a)/i+2;break;case c:d=(a-b)/i+4}d/=6}return{h:d,s:e,l:h}}function f(a,b,c){function d(a,b,c){return 0>c&&(c+=1),c>1&&(c-=1),1/6>c?a+6*(b-a)*c:.5>c?b:2/3>c?a+6*(b-a)*(2/3-c):a}var e,f,g;if(a=A(a,360),b=A(b,100),c=A(c,100),0===b)e=f=g=c;else{var h=.5>c?c*(1+b):c+b-c*b,i=2*c-h;e=d(i,h,a+1/3),f=d(i,h,a),g=d(i,h,a-1/3)}return{r:255*e,g:255*f,b:255*g}}function g(a,b,c){a=A(a,255),b=A(b,255),c=A(c,255);var d,e,f=R(a,b,c),g=Q(a,b,c),h=f,i=f-g;if(e=0===f?0:i/f,f==g)d=0;else{switch(f){case a:d=(b-c)/i+(c>b?6:0);break;case b:d=(c-a)/i+2;break;case c:d=(a-b)/i+4}d/=6}return{h:d,s:e,v:h}}function h(b,c,d){b=6*A(b,360),c=A(c,100),d=A(d,100);var e=a.floor(b),f=b-e,g=d*(1-c),h=d*(1-f*c),i=d*(1-(1-f)*c),j=e%6,k=[d,h,g,g,i,d][j],l=[i,d,d,h,g,g][j],m=[g,g,i,d,d,h][j];return{r:255*k,g:255*l,b:255*m}}function i(a,b,c,d){var e=[F(P(a).toString(16)),F(P(b).toString(16)),F(P(c).toString(16))];return d&&e[0].charAt(0)==e[0].charAt(1)&&e[1].charAt(0)==e[1].charAt(1)&&e[2].charAt(0)==e[2].charAt(1)?e[0].charAt(0)+e[1].charAt(0)+e[2].charAt(0):e.join("")}function j(a,b,c,d,e){var f=[F(P(a).toString(16)),F(P(b).toString(16)),F(P(c).toString(16)),F(H(d))];return e&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)&&f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")}function k(a,b,c,d){var e=[F(H(d)),F(P(a).toString(16)),F(P(b).toString(16)),F(P(c).toString(16))];return e.join("")}function l(a,c){c=0===c?0:c||10;var d=b(a).toHsl();return d.s-=c/100,d.s=B(d.s),b(d)}function m(a,c){c=0===c?0:c||10;var d=b(a).toHsl();return d.s+=c/100,d.s=B(d.s),b(d)}function n(a){return b(a).desaturate(100)}function o(a,c){c=0===c?0:c||10;var d=b(a).toHsl();return d.l+=c/100,d.l=B(d.l),b(d)}function p(a,c){c=0===c?0:c||10;var d=b(a).toRgb();return d.r=R(0,Q(255,d.r-P(255*-(c/100)))),d.g=R(0,Q(255,d.g-P(255*-(c/100)))),d.b=R(0,Q(255,d.b-P(255*-(c/100)))),b(d)}function q(a,c){c=0===c?0:c||10;var d=b(a).toHsl();return d.l-=c/100,d.l=B(d.l),b(d)}function r(a,c){var d=b(a).toHsl(),e=(d.h+c)%360;return d.h=0>e?360+e:e,b(d)}function s(a){var c=b(a).toHsl();return c.h=(c.h+180)%360,b(c)}function t(a){var c=b(a).toHsl(),d=c.h;return[b(a),b({h:(d+120)%360,s:c.s,l:c.l}),b({h:(d+240)%360,s:c.s,l:c.l})]}function u(a){var c=b(a).toHsl(),d=c.h;return[b(a),b({h:(d+90)%360,s:c.s,l:c.l}),b({h:(d+180)%360,s:c.s,l:c.l}),b({h:(d+270)%360,s:c.s,l:c.l})]}function v(a){var c=b(a).toHsl(),d=c.h;return[b(a),b({h:(d+72)%360,s:c.s,l:c.l}),b({h:(d+216)%360,s:c.s,l:c.l})]}function w(a,c,d){c=c||6,d=d||30;var e=b(a).toHsl(),f=360/d,g=[b(a)];for(e.h=(e.h-(f*c>>1)+720)%360;--c;)e.h=(e.h+f)%360,g.push(b(e));return g}function x(a,c){c=c||6;for(var d=b(a).toHsv(),e=d.h,f=d.s,g=d.v,h=[],i=1/c;c--;)h.push(b({h:e,s:f,v:g})),g=(g+i)%1;return h}function y(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[a[c]]=c);return b}function z(a){return a=parseFloat(a),(isNaN(a)||0>a||a>1)&&(a=1),a}function A(b,c){D(b)&&(b="100%");var d=E(b);return b=Q(c,R(0,parseFloat(b))),d&&(b=parseInt(b*c,10)/100),a.abs(b-c)<1e-6?1:b%c/parseFloat(c)}function B(a){return Q(1,R(0,a))}function C(a){return parseInt(a,16)}function D(a){return"string"==typeof a&&-1!=a.indexOf(".")&&1===parseFloat(a)}function E(a){return"string"==typeof a&&-1!=a.indexOf("%")}function F(a){return 1==a.length?"0"+a:""+a}function G(a){return 1>=a&&(a=100*a+"%"),a}function H(b){return a.round(255*parseFloat(b)).toString(16)}function I(a){return C(a)/255}function J(a){return!!V.CSS_UNIT.exec(a)}function K(a){a=a.replace(M,"").replace(N,"").toLowerCase();var b=!1;if(T[a])a=T[a],b=!0;else if("transparent"==a)return{r:0,g:0,b:0,a:0,format:"name"};var c;return(c=V.rgb.exec(a))?{r:c[1],g:c[2],b:c[3]}:(c=V.rgba.exec(a))?{r:c[1],g:c[2],b:c[3],a:c[4]}:(c=V.hsl.exec(a))?{h:c[1],s:c[2],l:c[3]}:(c=V.hsla.exec(a))?{h:c[1],s:c[2],l:c[3],a:c[4]}:(c=V.hsv.exec(a))?{h:c[1],s:c[2],v:c[3]}:(c=V.hsva.exec(a))?{h:c[1],s:c[2],v:c[3],a:c[4]}:(c=V.hex8.exec(a))?{r:C(c[1]),g:C(c[2]),b:C(c[3]),a:I(c[4]),format:b?"name":"hex8"}:(c=V.hex6.exec(a))?{r:C(c[1]),g:C(c[2]),b:C(c[3]),format:b?"name":"hex"}:(c=V.hex4.exec(a))?{r:C(c[1]+""+c[1]),g:C(c[2]+""+c[2]),b:C(c[3]+""+c[3]),a:I(c[4]+""+c[4]),format:b?"name":"hex8"}:(c=V.hex3.exec(a))?{r:C(c[1]+""+c[1]),g:C(c[2]+""+c[2]),b:C(c[3]+""+c[3]),format:b?"name":"hex"}:!1}function L(a){var b,c;return a=a||{level:"AA",size:"small"},b=(a.level||"AA").toUpperCase(),c=(a.size||"small").toLowerCase(),"AA"!==b&&"AAA"!==b&&(b="AA"),"small"!==c&&"large"!==c&&(c="small"),{level:b,size:c}}var M=/^\s+/,N=/\s+$/,O=0,P=a.round,Q=a.min,R=a.max,S=a.random;b.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var a=this.toRgb();return(299*a.r+587*a.g+114*a.b)/1e3},getLuminance:function(){var b,c,d,e,f,g,h=this.toRgb();return b=h.r/255,c=h.g/255,d=h.b/255,e=.03928>=b?b/12.92:a.pow((b+.055)/1.055,2.4),f=.03928>=c?c/12.92:a.pow((c+.055)/1.055,2.4),g=.03928>=d?d/12.92:a.pow((d+.055)/1.055,2.4),.2126*e+.7152*f+.0722*g},setAlpha:function(a){return this._a=z(a),this._roundA=P(100*this._a)/100,this},toHsv:function(){var a=g(this._r,this._g,this._b);return{h:360*a.h,s:a.s,v:a.v,a:this._a}},toHsvString:function(){var a=g(this._r,this._g,this._b),b=P(360*a.h),c=P(100*a.s),d=P(100*a.v);return 1==this._a?"hsv("+b+", "+c+"%, "+d+"%)":"hsva("+b+", "+c+"%, "+d+"%, "+this._roundA+")"},toHsl:function(){var a=e(this._r,this._g,this._b);return{h:360*a.h,s:a.s,l:a.l,a:this._a}},toHslString:function(){var a=e(this._r,this._g,this._b),b=P(360*a.h),c=P(100*a.s),d=P(100*a.l);return 1==this._a?"hsl("+b+", "+c+"%, "+d+"%)":"hsla("+b+", "+c+"%, "+d+"%, "+this._roundA+")"},toHex:function(a){return i(this._r,this._g,this._b,a)},toHexString:function(a){return"#"+this.toHex(a)},toHex8:function(a){return j(this._r,this._g,this._b,this._a,a)},toHex8String:function(a){return"#"+this.toHex8(a)},toRgb:function(){return{r:P(this._r),g:P(this._g),b:P(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+P(this._r)+", "+P(this._g)+", "+P(this._b)+")":"rgba("+P(this._r)+", "+P(this._g)+", "+P(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:P(100*A(this._r,255))+"%",g:P(100*A(this._g,255))+"%",b:P(100*A(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+P(100*A(this._r,255))+"%, "+P(100*A(this._g,255))+"%, "+P(100*A(this._b,255))+"%)":"rgba("+P(100*A(this._r,255))+"%, "+P(100*A(this._g,255))+"%, "+P(100*A(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":this._a<1?!1:U[i(this._r,this._g,this._b,!0)]||!1},toFilter:function(a){var c="#"+k(this._r,this._g,this._b,this._a),d=c,e=this._gradientType?"GradientType = 1, ":"";if(a){var f=b(a);d="#"+k(f._r,f._g,f._b,f._a)}return"progid:DXImageTransform.Microsoft.gradient("+e+"startColorstr="+c+",endColorstr="+d+")"},toString:function(a){var b=!!a;a=a||this._format;var c=!1,d=this._a<1&&this._a>=0,e=!b&&d&&("hex"===a||"hex6"===a||"hex3"===a||"hex4"===a||"hex8"===a||"name"===a);return e?"name"===a&&0===this._a?this.toName():this.toRgbString():("rgb"===a&&(c=this.toRgbString()),"prgb"===a&&(c=this.toPercentageRgbString()),("hex"===a||"hex6"===a)&&(c=this.toHexString()),"hex3"===a&&(c=this.toHexString(!0)),"hex4"===a&&(c=this.toHex8String(!0)),"hex8"===a&&(c=this.toHex8String()),"name"===a&&(c=this.toName()),"hsl"===a&&(c=this.toHslString()),"hsv"===a&&(c=this.toHsvString()),c||this.toHexString())},clone:function(){return b(this.toString())},_applyModification:function(a,b){var c=a.apply(null,[this].concat([].slice.call(b)));return this._r=c._r,this._g=c._g,this._b=c._b,this.setAlpha(c._a),this},lighten:function(){return this._applyModification(o,arguments)},brighten:function(){return this._applyModification(p,arguments)},darken:function(){return this._applyModification(q,arguments)},desaturate:function(){return this._applyModification(l,arguments)},saturate:function(){return this._applyModification(m,arguments)},greyscale:function(){return this._applyModification(n,arguments)},spin:function(){return this._applyModification(r,arguments)},_applyCombination:function(a,b){return a.apply(null,[this].concat([].slice.call(b)))},analogous:function(){return this._applyCombination(w,arguments)},complement:function(){return this._applyCombination(s,arguments)},monochromatic:function(){return this._applyCombination(x,arguments)},splitcomplement:function(){return this._applyCombination(v,arguments)},triad:function(){return this._applyCombination(t,arguments)},tetrad:function(){return this._applyCombination(u,arguments)}},b.fromRatio=function(a,c){if("object"==typeof a){var d={};for(var e in a)a.hasOwnProperty(e)&&(d[e]="a"===e?a[e]:G(a[e]));a=d}return b(a,c)},b.equals=function(a,c){return a&&c?b(a).toRgbString()==b(c).toRgbString():!1},b.random=function(){return b.fromRatio({r:S(),g:S(),b:S()})},b.mix=function(a,c,d){d=0===d?0:d||50;var e=b(a).toRgb(),f=b(c).toRgb(),g=d/100,h={r:(f.r-e.r)*g+e.r,g:(f.g-e.g)*g+e.g,b:(f.b-e.b)*g+e.b,a:(f.a-e.a)*g+e.a};return b(h)},b.readability=function(c,d){var e=b(c),f=b(d);return(a.max(e.getLuminance(),f.getLuminance())+.05)/(a.min(e.getLuminance(),f.getLuminance())+.05)},b.isReadable=function(a,c,d){var e,f,g=b.readability(a,c);switch(f=!1,e=L(d),e.level+e.size){case"AAsmall":case"AAAlarge":f=g>=4.5;break;case"AAlarge":f=g>=3;break;case"AAAsmall":f=g>=7}return f},b.mostReadable=function(a,c,d){var e,f,g,h,i=null,j=0;d=d||{},f=d.includeFallbackColors,g=d.level,h=d.size;for(var k=0;k<c.length;k++)e=b.readability(a,c[k]),e>j&&(j=e,i=b(c[k]));return b.isReadable(a,i,{level:g,size:h})||!f?i:(d.includeFallbackColors=!1,b.mostReadable(a,["#fff","#000"],d))};var T=b.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},U=b.hexNames=y(T),V=function(){var a="[-\\+]?\\d+%?",b="[-\\+]?\\d*\\.\\d+%?",c="(?:"+b+")|(?:"+a+")",d="[\\s|\\(]+("+c+")[,|\\s]+("+c+")[,|\\s]+("+c+")\\s*\\)?",e="[\\s|\\(]+("+c+")[,|\\s]+("+c+")[,|\\s]+("+c+")[,|\\s]+("+c+")\\s*\\)?";return{CSS_UNIT:new RegExp(c),rgb:new RegExp("rgb"+d),rgba:new RegExp("rgba"+e),hsl:new RegExp("hsl"+d),hsla:new RegExp("hsla"+e),hsv:new RegExp("hsv"+d),hsva:new RegExp("hsva"+e),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();"undefined"!=typeof module&&module.exports?module.exports=b:"function"==typeof define&&define.amd?define(function(){return b}):window.tinycolor=b}(Math);

/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.NProgress = factory();
    }

})(this, function() {
    var NProgress = {};

    NProgress.version = '0.2.0';

    var Settings = NProgress.settings = {
        minimum: 0.08,
        easing: 'ease',
        positionUsing: '',
        speed: 200,
        trickle: true,
        trickleRate: 0.02,
        trickleSpeed: 800,
        showSpinner: true,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: 'body',
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };

    /**
     * Updates configuration.
     *
     *     NProgress.configure({
     *       minimum: 0.1
     *     });
     */
    NProgress.configure = function(options) {
        var key, value;
        for (key in options) {
            value = options[key];
            if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
        }

        return this;
    };

    /**
     * Last number.
     */

    NProgress.status = null;

    /**
     * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
     *
     *     NProgress.set(0.4);
     *     NProgress.set(1.0);
     */

    NProgress.set = function(n) {
        var started = NProgress.isStarted();

        n = clamp(n, Settings.minimum, 1);
        NProgress.status = (n === 1 ? null : n);

        var progress = NProgress.render(!started),
            bar      = progress.querySelector(Settings.barSelector),
            speed    = Settings.speed,
            ease     = Settings.easing;

        progress.offsetWidth; /* Repaint */

        queue(function(next) {
            // Set positionUsing if it hasn't already been set
            if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

            // Add transition
            css(bar, barPositionCSS(n, speed, ease));

            if (n === 1) {
                // Fade out
                css(progress, {
                    transition: 'none',
                    opacity: 1
                });
                progress.offsetWidth; /* Repaint */

                setTimeout(function() {
                    css(progress, {
                        transition: 'all ' + speed + 'ms linear',
                        opacity: 0
                    });
                    setTimeout(function() {
                        NProgress.remove();
                        next();
                    }, speed);
                }, speed);
            } else {
                setTimeout(next, speed);
            }
        });

        return this;
    };

    NProgress.isStarted = function() {
        return typeof NProgress.status === 'number';
    };

    /**
     * Shows the progress bar.
     * This is the same as setting the status to 0%, except that it doesn't go backwards.
     *
     *     NProgress.start();
     *
     */
    NProgress.start = function() {
        if (!NProgress.status) NProgress.set(0);

        var work = function() {
            setTimeout(function() {
                if (!NProgress.status) return;
                NProgress.trickle();
                work();
            }, Settings.trickleSpeed);
        };

        if (Settings.trickle) work();

        return this;
    };

    /**
     * Hides the progress bar.
     * This is the *sort of* the same as setting the status to 100%, with the
     * difference being `done()` makes some placebo effect of some realistic motion.
     *
     *     NProgress.done();
     *
     * If `true` is passed, it will show the progress bar even if its hidden.
     *
     *     NProgress.done(true);
     */

    NProgress.done = function(force) {
        if (!force && !NProgress.status) return this;

        return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
    };

    /**
     * Increments by a random amount.
     */

    NProgress.inc = function(amount) {
        var n = NProgress.status;

        if (!n) {
            return NProgress.start();
        } else {
            if (typeof amount !== 'number') {
                amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
            }

            n = clamp(n + amount, 0, 0.994);
            return NProgress.set(n);
        }
    };

    NProgress.trickle = function() {
        return NProgress.inc(Math.random() * Settings.trickleRate);
    };

    /**
     * Waits for all supplied jQuery promises and
     * increases the progress as the promises resolve.
     *
     * @param $promise jQUery Promise
     */
    (function() {
        var initial = 0, current = 0;

        NProgress.promise = function($promise) {
            if (!$promise || $promise.state() === "resolved") {
                return this;
            }

            if (current === 0) {
                NProgress.start();
            }

            initial++;
            current++;

            $promise.always(function() {
                current--;
                if (current === 0) {
                    initial = 0;
                    NProgress.done();
                } else {
                    NProgress.set((initial - current) / initial);
                }
            });

            return this;
        };

    })();

    /**
     * (Internal) renders the progress bar markup based on the `template`
     * setting.
     */

    NProgress.render = function(fromStart) {
        if (NProgress.isRendered()) return document.getElementById('nprogress');

        addClass(document.documentElement, 'nprogress-busy');

        var progress = document.createElement('div');
        progress.id = 'nprogress';
        progress.innerHTML = Settings.template;

        var bar      = progress.querySelector(Settings.barSelector),
            perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
            parent   = document.querySelector(Settings.parent),
            spinner;

        css(bar, {
            transition: 'all 0 linear',
            transform: 'translate3d(' + perc + '%,0,0)'
        });

        if (!Settings.showSpinner) {
            spinner = progress.querySelector(Settings.spinnerSelector);
            spinner && removeElement(spinner);
        }

        if (parent != document.body) {
            addClass(parent, 'nprogress-custom-parent');
        }

        parent.appendChild(progress);
        return progress;
    };

    /**
     * Removes the element. Opposite of render().
     */

    NProgress.remove = function() {
        removeClass(document.documentElement, 'nprogress-busy');
        removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
        var progress = document.getElementById('nprogress');
        progress && removeElement(progress);
    };

    /**
     * Checks if the progress bar is rendered.
     */

    NProgress.isRendered = function() {
        return !!document.getElementById('nprogress');
    };

    /**
     * Determine which positioning CSS rule to use.
     */

    NProgress.getPositioningCSS = function() {
        // Sniff on document.body.style
        var bodyStyle = document.body.style;

        // Sniff prefixes
        var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
            ('MozTransform' in bodyStyle) ? 'Moz' :
                ('msTransform' in bodyStyle) ? 'ms' :
                    ('OTransform' in bodyStyle) ? 'O' : '';

        if (vendorPrefix + 'Perspective' in bodyStyle) {
            // Modern browsers with 3D support, e.g. Webkit, IE10
            return 'translate3d';
        } else if (vendorPrefix + 'Transform' in bodyStyle) {
            // Browsers without 3D support, e.g. IE9
            return 'translate';
        } else {
            // Browsers without translate() support, e.g. IE7-8
            return 'margin';
        }
    };

    /**
     * Helpers
     */

    function clamp(n, min, max) {
        if (n < min) return min;
        if (n > max) return max;
        return n;
    }

    /**
     * (Internal) converts a percentage (`0..1`) to a bar translateX
     * percentage (`-100%..0%`).
     */

    function toBarPerc(n) {
        return (-1 + n) * 100;
    }


    /**
     * (Internal) returns the correct CSS for changing the bar's
     * position given an n percentage, and speed and ease from Settings
     */

    function barPositionCSS(n, speed, ease) {
        var barCSS;

        if (Settings.positionUsing === 'translate3d') {
            barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
        } else if (Settings.positionUsing === 'translate') {
            barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
        } else {
            barCSS = { 'margin-left': toBarPerc(n)+'%' };
        }

        barCSS.transition = 'all '+speed+'ms '+ease;

        return barCSS;
    }

    /**
     * (Internal) Queues a function to be executed.
     */

    var queue = (function() {
        var pending = [];

        function next() {
            var fn = pending.shift();
            if (fn) {
                fn(next);
            }
        }

        return function(fn) {
            pending.push(fn);
            if (pending.length == 1) next();
        };
    })();

    /**
     * (Internal) Applies css properties to an element, similar to the jQuery
     * css method.
     *
     * While this helper does assist with vendor prefixed property names, it
     * does not perform any manipulation of values prior to setting styles.
     */

    var css = (function() {
        var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
            cssProps    = {};

        function camelCase(string) {
            return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
                return letter.toUpperCase();
            });
        }

        function getVendorProp(name) {
            var style = document.body.style;
            if (name in style) return name;

            var i = cssPrefixes.length,
                capName = name.charAt(0).toUpperCase() + name.slice(1),
                vendorName;
            while (i--) {
                vendorName = cssPrefixes[i] + capName;
                if (vendorName in style) return vendorName;
            }

            return name;
        }

        function getStyleProp(name) {
            name = camelCase(name);
            return cssProps[name] || (cssProps[name] = getVendorProp(name));
        }

        function applyCss(element, prop, value) {
            prop = getStyleProp(prop);
            element.style[prop] = value;
        }

        return function(element, properties) {
            var args = arguments,
                prop,
                value;

            if (args.length == 2) {
                for (prop in properties) {
                    value = properties[prop];
                    if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
                }
            } else {
                applyCss(element, args[1], args[2]);
            }
        }
    })();

    /**
     * (Internal) Determines if an element or space separated list of class names contains a class name.
     */

    function hasClass(element, name) {
        var list = typeof element == 'string' ? element : classList(element);
        return list.indexOf(' ' + name + ' ') >= 0;
    }

    /**
     * (Internal) Adds a class to an element.
     */

    function addClass(element, name) {
        var oldList = classList(element),
            newList = oldList + name;

        if (hasClass(oldList, name)) return;

        // Trim the opening space.
        element.className = newList.substring(1);
    }

    /**
     * (Internal) Removes a class from an element.
     */

    function removeClass(element, name) {
        var oldList = classList(element),
            newList;

        if (!hasClass(element, name)) return;

        // Replace the class name.
        newList = oldList.replace(' ' + name + ' ', ' ');

        // Trim the opening and closing spaces.
        element.className = newList.substring(1, newList.length - 1);
    }

    /**
     * (Internal) Gets a space separated list of the class names on the element.
     * The list is wrapped with a single space on each end to facilitate finding
     * matches within the list.
     */

    function classList(element) {
        return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
    }

    /**
     * (Internal) Removes an element from the DOM.
     */

    function removeElement(element) {
        element && element.parentNode && element.parentNode.removeChild(element);
    }

    return NProgress;
});


/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */

(function sortableModule(factory) {
    "use strict";

    if (typeof define === "function" && define.amd) {
        define(factory);
    }
    else if (typeof module != "undefined" && typeof module.exports != "undefined") {
        module.exports = factory();
    }
    else {
        /* jshint sub:true */
        window["Sortable"] = factory();
    }
})(function sortableFactory() {
    "use strict";

    if (typeof window === "undefined" || !window.document) {
        return function sortableError() {
            throw new Error("Sortable.js requires a window with a document");
        };
    }

    var dragEl,
        parentEl,
        ghostEl,
        cloneEl,
        rootEl,
        nextEl,
        lastDownEl,

        scrollEl,
        scrollParentEl,
        scrollCustomFn,

        oldIndex,
        newIndex,
        oldDraggableIndex,
        newDraggableIndex,

        activeGroup,
        putSortable,

        autoScrolls = [],
        scrolling = false,

        awaitingDragStarted = false,
        ignoreNextClick = false,
        sortables = [],

        pointerElemChangedInterval,
        lastPointerElemX,
        lastPointerElemY,

        tapEvt,
        touchEvt,

        moved,


        lastTarget,
        lastDirection,
        pastFirstInvertThresh = false,
        isCircumstantialInvert = false,
        lastMode, // 'swap' or 'insert'

        targetMoveDistance,

        // For positioning ghost absolutely
        ghostRelativeParent,
        ghostRelativeParentInitialScroll = [], // (left, top)

        realDragElRect, // dragEl rect after current animation

        /** @const */
        R_SPACE = /\s+/g,

        expando = 'Sortable' + (new Date).getTime(),

        win = window,
        document = win.document,
        parseInt = win.parseInt,
        setTimeout = win.setTimeout,

        $ = win.jQuery || win.Zepto,
        Polymer = win.Polymer,

        captureMode = {
            capture: false,
            passive: false
        },

        IE11OrLess = !!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie|iemobile)/i),
        Edge = !!navigator.userAgent.match(/Edge/i),
        FireFox = !!navigator.userAgent.match(/firefox/i),
        Safari = !!(navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && !navigator.userAgent.match(/android/i)),
        IOS = !!(navigator.userAgent.match(/iP(ad|od|hone)/i)),

        PositionGhostAbsolutely = IOS,

        CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',

        // This will not pass for IE9, because IE9 DnD only works on anchors
        supportDraggable = ('draggable' in document.createElement('div')),

        supportCssPointerEvents = (function() {
            // false when <= IE11
            if (IE11OrLess) {
                return false;
            }
            var el = document.createElement('x');
            el.style.cssText = 'pointer-events:auto';
            return el.style.pointerEvents === 'auto';
        })(),

        _silent = false,
        _alignedSilent = false,

        abs = Math.abs,
        min = Math.min,
        max = Math.max,

        savedInputChecked = [],

        _detectDirection = function(el, options) {
            var elCSS = _css(el),
                elWidth = parseInt(elCSS.width)
                    - parseInt(elCSS.paddingLeft)
                    - parseInt(elCSS.paddingRight)
                    - parseInt(elCSS.borderLeftWidth)
                    - parseInt(elCSS.borderRightWidth),
                child1 = _getChild(el, 0, options),
                child2 = _getChild(el, 1, options),
                firstChildCSS = child1 && _css(child1),
                secondChildCSS = child2 && _css(child2),
                firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + _getRect(child1).width,
                secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + _getRect(child2).width;

            if (elCSS.display === 'flex') {
                return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse'
                    ? 'vertical' : 'horizontal';
            }

            if (elCSS.display === 'grid') {
                return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
            }

            if (child1 && firstChildCSS.float !== 'none') {
                var touchingSideChild2 = firstChildCSS.float === 'left' ? 'left' : 'right';

                return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ?
                    'vertical' : 'horizontal';
            }

            return (child1 &&
                (
                    firstChildCSS.display === 'block' ||
                    firstChildCSS.display === 'flex' ||
                    firstChildCSS.display === 'table' ||
                    firstChildCSS.display === 'grid' ||
                    firstChildWidth >= elWidth &&
                    elCSS[CSSFloatProperty] === 'none' ||
                    child2 &&
                    elCSS[CSSFloatProperty] === 'none' &&
                    firstChildWidth + secondChildWidth > elWidth
                ) ?
                    'vertical' : 'horizontal'
            );
        },

        /**
         * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
         * @param  {Number} x      X position
         * @param  {Number} y      Y position
         * @return {HTMLElement}   Element of the first found nearest Sortable
         */
        _detectNearestEmptySortable = function(x, y) {
            for (var i = 0; i < sortables.length; i++) {
                if (_lastChild(sortables[i])) continue;

                var rect = _getRect(sortables[i]),
                    threshold = sortables[i][expando].options.emptyInsertThreshold,
                    insideHorizontally = x >= (rect.left - threshold) && x <= (rect.right + threshold),
                    insideVertically = y >= (rect.top - threshold) && y <= (rect.bottom + threshold);

                if (threshold && insideHorizontally && insideVertically) {
                    return sortables[i];
                }
            }
        },

        _isClientInRowColumn = function(x, y, el, axis, options) {
            var targetRect = _getRect(el),
                targetS1Opp = axis === 'vertical' ? targetRect.left : targetRect.top,
                targetS2Opp = axis === 'vertical' ? targetRect.right : targetRect.bottom,
                mouseOnOppAxis = axis === 'vertical' ? x : y;

            return targetS1Opp < mouseOnOppAxis && mouseOnOppAxis < targetS2Opp;
        },

        _isElInRowColumn = function(el1, el2, axis) {
            var el1Rect = el1 === dragEl && realDragElRect || _getRect(el1),
                el2Rect = el2 === dragEl && realDragElRect || _getRect(el2),
                el1S1Opp = axis === 'vertical' ? el1Rect.left : el1Rect.top,
                el1S2Opp = axis === 'vertical' ? el1Rect.right : el1Rect.bottom,
                el1OppLength = axis === 'vertical' ? el1Rect.width : el1Rect.height,
                el2S1Opp = axis === 'vertical' ? el2Rect.left : el2Rect.top,
                el2S2Opp = axis === 'vertical' ? el2Rect.right : el2Rect.bottom,
                el2OppLength = axis === 'vertical' ? el2Rect.width : el2Rect.height;

            return (
                el1S1Opp === el2S1Opp ||
                el1S2Opp === el2S2Opp ||
                (el1S1Opp + el1OppLength / 2) === (el2S1Opp + el2OppLength / 2)
            );
        },

        _getParentAutoScrollElement = function(el, includeSelf) {
            // skip to window
            if (!el || !el.getBoundingClientRect) return _getWindowScrollingElement();

            var elem = el;
            var gotSelf = false;
            do {
                // we don't need to get elem css if it isn't even overflowing in the first place (performance)
                if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
                    var elemCSS = _css(elem);
                    if (
                        elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') ||
                        elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')
                    ) {
                        if (!elem || !elem.getBoundingClientRect || elem === document.body) return _getWindowScrollingElement();

                        if (gotSelf || includeSelf) return elem;
                        gotSelf = true;
                    }
                }
                /* jshint boss:true */
            } while (elem = elem.parentNode);

            return _getWindowScrollingElement();
        },

        _getWindowScrollingElement = function() {
            if (IE11OrLess) {
                return document.documentElement;
            } else {
                return document.scrollingElement;
            }
        },

        _scrollBy = function(el, x, y) {
            el.scrollLeft += x;
            el.scrollTop += y;
        },

        _autoScroll = _throttle(function (/**Event*/evt, /**Object*/options, /**HTMLElement*/rootEl, /**Boolean*/isFallback) {
            // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
            if (options.scroll) {
                var _this = rootEl ? rootEl[expando] : window,
                    sens = options.scrollSensitivity,
                    speed = options.scrollSpeed,

                    x = evt.clientX,
                    y = evt.clientY,

                    winScroller = _getWindowScrollingElement(),

                    scrollThisInstance = false;

                // Detect scrollEl
                if (scrollParentEl !== rootEl) {
                    _clearAutoScrolls();

                    scrollEl = options.scroll;
                    scrollCustomFn = options.scrollFn;

                    if (scrollEl === true) {
                        scrollEl = _getParentAutoScrollElement(rootEl, true);
                        scrollParentEl = scrollEl;
                    }
                }


                var layersOut = 0;
                var currentParent = scrollEl;
                do {
                    var	el = currentParent,
                        rect = _getRect(el),

                        top = rect.top,
                        bottom = rect.bottom,
                        left = rect.left,
                        right = rect.right,

                        width = rect.width,
                        height = rect.height,

                        scrollWidth,
                        scrollHeight,

                        css,

                        vx,
                        vy,

                        canScrollX,
                        canScrollY,

                        scrollPosX,
                        scrollPosY;


                    scrollWidth = el.scrollWidth;
                    scrollHeight = el.scrollHeight;

                    css = _css(el);

                    scrollPosX = el.scrollLeft;
                    scrollPosY = el.scrollTop;

                    if (el === winScroller) {
                        canScrollX = width < scrollWidth && (css.overflowX === 'auto' || css.overflowX === 'scroll' || css.overflowX === 'visible');
                        canScrollY = height < scrollHeight && (css.overflowY === 'auto' || css.overflowY === 'scroll' || css.overflowY === 'visible');
                    } else {
                        canScrollX = width < scrollWidth && (css.overflowX === 'auto' || css.overflowX === 'scroll');
                        canScrollY = height < scrollHeight && (css.overflowY === 'auto' || css.overflowY === 'scroll');
                    }

                    vx = canScrollX && (abs(right - x) <= sens && (scrollPosX + width) < scrollWidth) - (abs(left - x) <= sens && !!scrollPosX);

                    vy = canScrollY && (abs(bottom - y) <= sens && (scrollPosY + height) < scrollHeight) - (abs(top - y) <= sens && !!scrollPosY);


                    if (!autoScrolls[layersOut]) {
                        for (var i = 0; i <= layersOut; i++) {
                            if (!autoScrolls[i]) {
                                autoScrolls[i] = {};
                            }
                        }
                    }

                    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
                        autoScrolls[layersOut].el = el;
                        autoScrolls[layersOut].vx = vx;
                        autoScrolls[layersOut].vy = vy;

                        clearInterval(autoScrolls[layersOut].pid);

                        if (el && (vx != 0 || vy != 0)) {
                            scrollThisInstance = true;
                            /* jshint loopfunc:true */
                            autoScrolls[layersOut].pid = setInterval((function () {
                                // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
                                if (isFallback && this.layer === 0) {
                                    Sortable.active._emulateDragOver(true);
                                    Sortable.active._onTouchMove(touchEvt, true);
                                }
                                var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
                                var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

                                if ('function' === typeof(scrollCustomFn)) {
                                    if (scrollCustomFn.call(_this, scrollOffsetX, scrollOffsetY, evt, touchEvt, autoScrolls[this.layer].el) !== 'continue') {
                                        return;
                                    }
                                }

                                _scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
                            }).bind({layer: layersOut}), 24);
                        }
                    }
                    layersOut++;
                } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = _getParentAutoScrollElement(currentParent, false)));
                scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
            }
        }, 30),

        _clearAutoScrolls = function () {
            autoScrolls.forEach(function(autoScroll) {
                clearInterval(autoScroll.pid);
            });
            autoScrolls = [];
        },

        _prepareGroup = function (options) {
            function toFn(value, pull) {
                return function(to, from, dragEl, evt) {
                    var sameGroup = to.options.group.name &&
                        from.options.group.name &&
                        to.options.group.name === from.options.group.name;

                    if (value == null && (pull || sameGroup)) {
                        // Default pull value
                        // Default pull and put value if same group
                        return true;
                    } else if (value == null || value === false) {
                        return false;
                    } else if (pull && value === 'clone') {
                        return value;
                    } else if (typeof value === 'function') {
                        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
                    } else {
                        var otherGroup = (pull ? to : from).options.group.name;

                        return (value === true ||
                            (typeof value === 'string' && value === otherGroup) ||
                            (value.join && value.indexOf(otherGroup) > -1));
                    }
                };
            }

            var group = {};
            var originalGroup = options.group;

            if (!originalGroup || typeof originalGroup != 'object') {
                originalGroup = {name: originalGroup};
            }

            group.name = originalGroup.name;
            group.checkPull = toFn(originalGroup.pull, true);
            group.checkPut = toFn(originalGroup.put);
            group.revertClone = originalGroup.revertClone;

            options.group = group;
        },

        _checkAlignment = function(evt) {
            if (!dragEl || !dragEl.parentNode) return;
            dragEl.parentNode[expando] && dragEl.parentNode[expando]._computeIsAligned(evt);
        },

        _hideGhostForTarget = function() {
            if (!supportCssPointerEvents && ghostEl) {
                _css(ghostEl, 'display', 'none');
            }
        },

        _unhideGhostForTarget = function() {
            if (!supportCssPointerEvents && ghostEl) {
                _css(ghostEl, 'display', '');
            }
        };


    // #1184 fix - Prevent click event on fallback if dragged but item not changed position
    document.addEventListener('click', function(evt) {
        if (ignoreNextClick) {
            evt.preventDefault();
            evt.stopPropagation && evt.stopPropagation();
            evt.stopImmediatePropagation && evt.stopImmediatePropagation();
            ignoreNextClick = false;
            return false;
        }
    }, true);

    var nearestEmptyInsertDetectEvent = function(evt) {
        if (dragEl) {
            evt = evt.touches ? evt.touches[0] : evt;
            var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

            if (nearest) {
                // Create imitation event
                var event = {};
                for (var i in evt) {
                    event[i] = evt[i];
                }
                event.target = event.rootEl = nearest;
                event.preventDefault = void 0;
                event.stopPropagation = void 0;
                nearest[expando]._onDragOver(event);
            }
        }
    };

    /**
     * @class  Sortable
     * @param  {HTMLElement}  el
     * @param  {Object}       [options]
     */
    function Sortable(el, options) {
        if (!(el && el.nodeType && el.nodeType === 1)) {
            throw 'Sortable: `el` must be HTMLElement, not ' + {}.toString.call(el);
        }

        this.el = el; // root element
        this.options = options = _extend({}, options);


        // Export instance
        el[expando] = this;

        // Default options
        var defaults = {
            group: null,
            sort: true,
            disabled: false,
            store: null,
            handle: null,
            scroll: true,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            bubbleScroll: true,
            draggable: /[uo]l/i.test(el.nodeName) ? '>li' : '>*',
            swapThreshold: 1, // percentage; 0 <= x <= 1
            invertSwap: false, // invert always
            invertedSwapThreshold: null, // will be set to same as swapThreshold if default
            removeCloneOnHide: true,
            direction: function() {
                return _detectDirection(el, this.options);
            },
            ghostClass: 'sortable-ghost',
            chosenClass: 'sortable-chosen',
            dragClass: 'sortable-drag',
            ignore: 'a, img',
            filter: null,
            preventOnFilter: true,
            animation: 0,
            easing: null,
            setData: function (dataTransfer, dragEl) {
                dataTransfer.setData('Text', dragEl.textContent);
            },
            dropBubble: false,
            dragoverBubble: false,
            dataIdAttr: 'data-id',
            delay: 0,
            delayOnTouchOnly: false,
            touchStartThreshold: parseInt(window.devicePixelRatio, 10) || 1,
            forceFallback: false,
            fallbackClass: 'sortable-fallback',
            fallbackOnBody: false,
            fallbackTolerance: 0,
            fallbackOffset: {x: 0, y: 0},
            supportPointer: Sortable.supportPointer !== false && ('PointerEvent' in window),
            emptyInsertThreshold: 5
        };


        // Set default options
        for (var name in defaults) {
            !(name in options) && (options[name] = defaults[name]);
        }

        _prepareGroup(options);

        // Bind all private methods
        for (var fn in this) {
            if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
                this[fn] = this[fn].bind(this);
            }
        }

        // Setup drag mode
        this.nativeDraggable = options.forceFallback ? false : supportDraggable;

        if (this.nativeDraggable) {
            // Touch start threshold cannot be greater than the native dragstart threshold
            this.options.touchStartThreshold = 1;
        }

        // Bind events
        if (options.supportPointer) {
            _on(el, 'pointerdown', this._onTapStart);
        } else {
            _on(el, 'mousedown', this._onTapStart);
            _on(el, 'touchstart', this._onTapStart);
        }

        if (this.nativeDraggable) {
            _on(el, 'dragover', this);
            _on(el, 'dragenter', this);
        }

        sortables.push(this.el);

        // Restore sorting
        options.store && options.store.get && this.sort(options.store.get(this) || []);
    }

    Sortable.prototype = /** @lends Sortable.prototype */ {
        constructor: Sortable,

        _computeIsAligned: function(evt) {
            var target;

            if (ghostEl && !supportCssPointerEvents) {
                _hideGhostForTarget();
                target = document.elementFromPoint(evt.clientX, evt.clientY);
                _unhideGhostForTarget();
            } else {
                target = evt.target;
            }

            target = _closest(target, this.options.draggable, this.el, false);
            if (_alignedSilent) return;
            if (!dragEl || dragEl.parentNode !== this.el) return;

            var children = this.el.children;
            for (var i = 0; i < children.length; i++) {
                // Don't change for target in case it is changed to aligned before onDragOver is fired
                if (_closest(children[i], this.options.draggable, this.el, false) && children[i] !== target) {
                    children[i].sortableMouseAligned = _isClientInRowColumn(evt.clientX, evt.clientY, children[i], this._getDirection(evt, null), this.options);
                }
            }
            // Used for nulling last target when not in element, nothing to do with checking if aligned
            if (!_closest(target, this.options.draggable, this.el, true)) {
                lastTarget = null;
            }

            _alignedSilent = true;
            setTimeout(function() {
                _alignedSilent = false;
            }, 30);

        },

        _getDirection: function(evt, target) {
            return (typeof this.options.direction === 'function') ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
        },

        _onTapStart: function (/** Event|TouchEvent */evt) {
            if (!evt.cancelable) return;
            var _this = this,
                el = this.el,
                options = this.options,
                preventOnFilter = options.preventOnFilter,
                type = evt.type,
                touch = evt.touches && evt.touches[0],
                target = (touch || evt).target,
                originalTarget = evt.target.shadowRoot && ((evt.path && evt.path[0]) || (evt.composedPath && evt.composedPath()[0])) || target,
                filter = options.filter,
                startIndex,
                startDraggableIndex;

            _saveInputCheckedState(el);

            // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
            if (dragEl) {
                return;
            }

            if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
                return; // only left button and enabled
            }

            // cancel dnd if original target is content editable
            if (originalTarget.isContentEditable) {
                return;
            }

            target = _closest(target, options.draggable, el, false);


            if (lastDownEl === target) {
                // Ignoring duplicate `down`
                return;
            }

            // Get the index of the dragged element within its parent
            startIndex = _index(target);
            startDraggableIndex = _index(target, options.draggable);

            // Check filter
            if (typeof filter === 'function') {
                if (filter.call(this, evt, target, this)) {
                    _dispatchEvent(_this, originalTarget, 'filter', target, el, el, startIndex, undefined, startDraggableIndex);
                    preventOnFilter && evt.cancelable && evt.preventDefault();
                    return; // cancel dnd
                }
            }
            else if (filter) {
                filter = filter.split(',').some(function (criteria) {
                    criteria = _closest(originalTarget, criteria.trim(), el, false);

                    if (criteria) {
                        _dispatchEvent(_this, criteria, 'filter', target, el, el, startIndex, undefined, startDraggableIndex);
                        return true;
                    }
                });

                if (filter) {
                    preventOnFilter && evt.cancelable && evt.preventDefault();
                    return; // cancel dnd
                }
            }

            if (options.handle && !_closest(originalTarget, options.handle, el, false)) {
                return;
            }

            // Prepare `dragstart`
            this._prepareDragStart(evt, touch, target, startIndex, startDraggableIndex);
        },


        _handleAutoScroll: function(evt, fallback) {
            if (!dragEl || !this.options.scroll) return;
            var x = evt.clientX,
                y = evt.clientY,

                elem = document.elementFromPoint(x, y),
                _this = this;

            // IE does not seem to have native autoscroll,
            // Edge's autoscroll seems too conditional,
            // MACOS Safari does not have autoscroll,
            // Firefox and Chrome are good
            if (fallback || Edge || IE11OrLess || Safari) {
                _autoScroll(evt, _this.options, elem, fallback);

                // Listener for pointer element change
                var ogElemScroller = _getParentAutoScrollElement(elem, true);
                if (
                    scrolling &&
                    (
                        !pointerElemChangedInterval ||
                        x !== lastPointerElemX ||
                        y !== lastPointerElemY
                    )
                ) {

                    pointerElemChangedInterval && clearInterval(pointerElemChangedInterval);
                    // Detect for pointer elem change, emulating native DnD behaviour
                    pointerElemChangedInterval = setInterval(function() {
                        if (!dragEl) return;
                        // could also check if scroll direction on newElem changes due to parent autoscrolling
                        var newElem = _getParentAutoScrollElement(document.elementFromPoint(x, y), true);
                        if (newElem !== ogElemScroller) {
                            ogElemScroller = newElem;
                            _clearAutoScrolls();
                            _autoScroll(evt, _this.options, ogElemScroller, fallback);
                        }
                    }, 10);
                    lastPointerElemX = x;
                    lastPointerElemY = y;
                }

            } else {
                // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
                if (!_this.options.bubbleScroll || _getParentAutoScrollElement(elem, true) === _getWindowScrollingElement()) {
                    _clearAutoScrolls();
                    return;
                }
                _autoScroll(evt, _this.options, _getParentAutoScrollElement(elem, false), false);
            }
        },

        _prepareDragStart: function (/** Event */evt, /** Touch */touch, /** HTMLElement */target, /** Number */startIndex, /** Number */startDraggableIndex) {
            var _this = this,
                el = _this.el,
                options = _this.options,
                ownerDocument = el.ownerDocument,
                dragStartFn;

            if (target && !dragEl && (target.parentNode === el)) {
                rootEl = el;
                dragEl = target;
                parentEl = dragEl.parentNode;
                nextEl = dragEl.nextSibling;
                lastDownEl = target;
                activeGroup = options.group;
                oldIndex = startIndex;
                oldDraggableIndex = startDraggableIndex;

                tapEvt = {
                    target: dragEl,
                    clientX: (touch || evt).clientX,
                    clientY: (touch || evt).clientY
                };

                this._lastX = (touch || evt).clientX;
                this._lastY = (touch || evt).clientY;

                dragEl.style['will-change'] = 'all';
                // undo animation if needed
                dragEl.style.transition = '';
                dragEl.style.transform = '';

                dragStartFn = function () {
                    // Delayed drag has been triggered
                    // we can re-enable the events: touchmove/mousemove
                    _this._disableDelayedDragEvents();

                    if (!FireFox && _this.nativeDraggable) {
                        dragEl.draggable = true;
                    }

                    // Bind the events: dragstart/dragend
                    _this._triggerDragStart(evt, touch);

                    // Drag start event
                    _dispatchEvent(_this, rootEl, 'choose', dragEl, rootEl, rootEl, oldIndex, undefined, oldDraggableIndex);

                    // Chosen item
                    _toggleClass(dragEl, options.chosenClass, true);
                };

                // Disable "draggable"
                options.ignore.split(',').forEach(function (criteria) {
                    _find(dragEl, criteria.trim(), _disableDraggable);
                });

                _on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
                _on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
                _on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);

                _on(ownerDocument, 'mouseup', _this._onDrop);
                _on(ownerDocument, 'touchend', _this._onDrop);
                _on(ownerDocument, 'touchcancel', _this._onDrop);

                // Make dragEl draggable (must be before delay for FireFox)
                if (FireFox && this.nativeDraggable) {
                    this.options.touchStartThreshold = 4;
                    dragEl.draggable = true;
                }

                // Delay is impossible for native DnD in Edge or IE
                if (options.delay && (options.delayOnTouchOnly ? touch : true) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
                    // If the user moves the pointer or let go the click or touch
                    // before the delay has been reached:
                    // disable the delayed drag
                    _on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
                    _on(ownerDocument, 'touchend', _this._disableDelayedDrag);
                    _on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
                    _on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
                    _on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
                    options.supportPointer && _on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);

                    _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
                } else {
                    dragStartFn();
                }
            }
        },

        _delayedDragTouchMoveHandler: function (/** TouchEvent|PointerEvent **/e) {
            var touch = e.touches ? e.touches[0] : e;
            if (max(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY))
                >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))
            ) {
                this._disableDelayedDrag();
            }
        },

        _disableDelayedDrag: function () {
            dragEl && _disableDraggable(dragEl);
            clearTimeout(this._dragStartTimer);

            this._disableDelayedDragEvents();
        },

        _disableDelayedDragEvents: function () {
            var ownerDocument = this.el.ownerDocument;
            _off(ownerDocument, 'mouseup', this._disableDelayedDrag);
            _off(ownerDocument, 'touchend', this._disableDelayedDrag);
            _off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
            _off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
            _off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
            _off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
        },

        _triggerDragStart: function (/** Event */evt, /** Touch */touch) {
            touch = touch || (evt.pointerType == 'touch' ? evt : null);

            if (!this.nativeDraggable || touch) {
                if (this.options.supportPointer) {
                    _on(document, 'pointermove', this._onTouchMove);
                } else if (touch) {
                    _on(document, 'touchmove', this._onTouchMove);
                } else {
                    _on(document, 'mousemove', this._onTouchMove);
                }
            } else {
                _on(dragEl, 'dragend', this);
                _on(rootEl, 'dragstart', this._onDragStart);
            }

            try {
                if (document.selection) {
                    // Timeout neccessary for IE9
                    _nextTick(function () {
                        document.selection.empty();
                    });
                } else {
                    window.getSelection().removeAllRanges();
                }
            } catch (err) {
            }
        },

        _dragStarted: function (fallback, evt) {
            awaitingDragStarted = false;
            if (rootEl && dragEl) {
                if (this.nativeDraggable) {
                    _on(document, 'dragover', this._handleAutoScroll);
                    _on(document, 'dragover', _checkAlignment);
                }
                var options = this.options;

                // Apply effect
                !fallback && _toggleClass(dragEl, options.dragClass, false);
                _toggleClass(dragEl, options.ghostClass, true);

                // In case dragging an animated element
                _css(dragEl, 'transform', '');

                Sortable.active = this;

                fallback && this._appendGhost();

                // Drag start event
                _dispatchEvent(this, rootEl, 'start', dragEl, rootEl, rootEl, oldIndex, undefined, oldDraggableIndex, undefined, evt);
            } else {
                this._nulling();
            }
        },

        _emulateDragOver: function (forAutoScroll) {
            if (touchEvt) {
                if (this._lastX === touchEvt.clientX && this._lastY === touchEvt.clientY && !forAutoScroll) {
                    return;
                }
                this._lastX = touchEvt.clientX;
                this._lastY = touchEvt.clientY;

                _hideGhostForTarget();

                var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
                var parent = target;

                while (target && target.shadowRoot) {
                    target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
                    if (target === parent) break;
                    parent = target;
                }

                if (parent) {
                    do {
                        if (parent[expando]) {
                            var inserted;

                            inserted = parent[expando]._onDragOver({
                                clientX: touchEvt.clientX,
                                clientY: touchEvt.clientY,
                                target: target,
                                rootEl: parent
                            });

                            if (inserted && !this.options.dragoverBubble) {
                                break;
                            }
                        }

                        target = parent; // store last element
                    }
                        /* jshint boss:true */
                    while (parent = parent.parentNode);
                }
                dragEl.parentNode[expando]._computeIsAligned(touchEvt);

                _unhideGhostForTarget();
            }
        },


        _onTouchMove: function (/**TouchEvent*/evt, forAutoScroll) {
            if (tapEvt) {
                var	options = this.options,
                    fallbackTolerance = options.fallbackTolerance,
                    fallbackOffset = options.fallbackOffset,
                    touch = evt.touches ? evt.touches[0] : evt,
                    matrix = ghostEl && _matrix(ghostEl),
                    scaleX = ghostEl && matrix && matrix.a,
                    scaleY = ghostEl && matrix && matrix.d,
                    relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && _getRelativeScrollOffset(ghostRelativeParent),
                    dx = ((touch.clientX - tapEvt.clientX)
                        + fallbackOffset.x) / (scaleX || 1)
                        + (relativeScrollOffset ? (relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0]) : 0) / (scaleX || 1),
                    dy = ((touch.clientY - tapEvt.clientY)
                        + fallbackOffset.y) / (scaleY || 1)
                        + (relativeScrollOffset ? (relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1]) : 0) / (scaleY || 1),
                    translate3d = evt.touches ? 'translate3d(' + dx + 'px,' + dy + 'px,0)' : 'translate(' + dx + 'px,' + dy + 'px)';

                // only set the status to dragging, when we are actually dragging
                if (!Sortable.active && !awaitingDragStarted) {
                    if (fallbackTolerance &&
                        min(abs(touch.clientX - this._lastX), abs(touch.clientY - this._lastY)) < fallbackTolerance
                    ) {
                        return;
                    }
                    this._onDragStart(evt, true);
                }

                !forAutoScroll && this._handleAutoScroll(touch, true);

                moved = true;
                touchEvt = touch;

                _css(ghostEl, 'webkitTransform', translate3d);
                _css(ghostEl, 'mozTransform', translate3d);
                _css(ghostEl, 'msTransform', translate3d);
                _css(ghostEl, 'transform', translate3d);

                evt.cancelable && evt.preventDefault();
            }
        },

        _appendGhost: function () {
            // Bug if using scale(): https://stackoverflow.com/questions/2637058
            // Not being adjusted for
            if (!ghostEl) {
                var container = this.options.fallbackOnBody ? document.body : rootEl,
                    rect = _getRect(dragEl, true, container, !PositionGhostAbsolutely),
                    css = _css(dragEl),
                    options = this.options;

                // Position absolutely
                if (PositionGhostAbsolutely) {
                    // Get relatively positioned parent
                    ghostRelativeParent = container;

                    while (
                        _css(ghostRelativeParent, 'position') === 'static' &&
                        _css(ghostRelativeParent, 'transform') === 'none' &&
                        ghostRelativeParent !== document
                        ) {
                        ghostRelativeParent = ghostRelativeParent.parentNode;
                    }

                    if (ghostRelativeParent !== document) {
                        var ghostRelativeParentRect = _getRect(ghostRelativeParent, true);

                        rect.top -= ghostRelativeParentRect.top;
                        rect.left -= ghostRelativeParentRect.left;
                    }

                    if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
                        if (ghostRelativeParent === document) ghostRelativeParent = _getWindowScrollingElement();

                        rect.top += ghostRelativeParent.scrollTop;
                        rect.left += ghostRelativeParent.scrollLeft;
                    } else {
                        ghostRelativeParent = _getWindowScrollingElement();
                    }
                    ghostRelativeParentInitialScroll = _getRelativeScrollOffset(ghostRelativeParent);
                }


                ghostEl = dragEl.cloneNode(true);

                _toggleClass(ghostEl, options.ghostClass, false);
                _toggleClass(ghostEl, options.fallbackClass, true);
                _toggleClass(ghostEl, options.dragClass, true);

                _css(ghostEl, 'box-sizing', 'border-box');
                _css(ghostEl, 'margin', 0);
                _css(ghostEl, 'top', rect.top);
                _css(ghostEl, 'left', rect.left);
                _css(ghostEl, 'width', rect.width);
                _css(ghostEl, 'height', rect.height);
                _css(ghostEl, 'opacity', '0.8');
                _css(ghostEl, 'position', (PositionGhostAbsolutely ? 'absolute' : 'fixed'));
                _css(ghostEl, 'zIndex', '100000');
                _css(ghostEl, 'pointerEvents', 'none');

                container.appendChild(ghostEl);
            }
        },

        _onDragStart: function (/**Event*/evt, /**boolean*/fallback) {
            var _this = this;
            var dataTransfer = evt.dataTransfer;
            var options = _this.options;

            // Setup clone
            cloneEl = _clone(dragEl);

            cloneEl.draggable = false;
            cloneEl.style['will-change'] = '';

            this._hideClone();

            _toggleClass(cloneEl, _this.options.chosenClass, false);


            // #1143: IFrame support workaround
            _this._cloneId = _nextTick(function () {
                if (!_this.options.removeCloneOnHide) {
                    rootEl.insertBefore(cloneEl, dragEl);
                }
                _dispatchEvent(_this, rootEl, 'clone', dragEl);
            });


            !fallback && _toggleClass(dragEl, options.dragClass, true);

            // Set proper drop events
            if (fallback) {
                ignoreNextClick = true;
                _this._loopId = setInterval(_this._emulateDragOver, 50);
            } else {
                // Undo what was set in _prepareDragStart before drag started
                _off(document, 'mouseup', _this._onDrop);
                _off(document, 'touchend', _this._onDrop);
                _off(document, 'touchcancel', _this._onDrop);

                if (dataTransfer) {
                    dataTransfer.effectAllowed = 'move';
                    options.setData && options.setData.call(_this, dataTransfer, dragEl);
                }

                _on(document, 'drop', _this);

                // #1276 fix:
                _css(dragEl, 'transform', 'translateZ(0)');
            }

            awaitingDragStarted = true;

            _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
            _on(document, 'selectstart', _this);
            if (Safari) {
                _css(document.body, 'user-select', 'none');
            }
        },


        // Returns true - if no further action is needed (either inserted or another condition)
        _onDragOver: function (/**Event*/evt) {
            var el = this.el,
                target = evt.target,
                dragRect,
                targetRect,
                revert,
                options = this.options,
                group = options.group,
                activeSortable = Sortable.active,
                isOwner = (activeGroup === group),
                canSort = options.sort,
                _this = this;

            if (_silent) return;

            // Return invocation when dragEl is inserted (or completed)
            function completed(insertion) {
                if (insertion) {
                    if (isOwner) {
                        activeSortable._hideClone();
                    } else {
                        activeSortable._showClone(_this);
                    }

                    if (activeSortable) {
                        // Set ghost class to new sortable's ghost class
                        _toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
                        _toggleClass(dragEl, options.ghostClass, true);
                    }

                    if (putSortable !== _this && _this !== Sortable.active) {
                        putSortable = _this;
                    } else if (_this === Sortable.active) {
                        putSortable = null;
                    }

                    // Animation
                    dragRect && _this._animate(dragRect, dragEl);
                    target && targetRect && _this._animate(targetRect, target);
                }


                // Null lastTarget if it is not inside a previously swapped element
                if ((target === dragEl && !dragEl.animated) || (target === el && !target.animated)) {
                    lastTarget = null;
                }

                // no bubbling and not fallback
                if (!options.dragoverBubble && !evt.rootEl && target !== document) {
                    _this._handleAutoScroll(evt);
                    dragEl.parentNode[expando]._computeIsAligned(evt);

                    // Do not detect for empty insert if already inserted
                    !insertion && nearestEmptyInsertDetectEvent(evt);
                }

                !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();

                return true;
            }

            // Call when dragEl has been inserted
            function changed() {
                _dispatchEvent(_this, rootEl, 'change', target, el, rootEl, oldIndex, _index(dragEl), oldDraggableIndex, _index(dragEl, options.draggable), evt);
            }


            if (evt.preventDefault !== void 0) {
                evt.cancelable && evt.preventDefault();
            }


            moved = true;

            target = _closest(target, options.draggable, el, true);

            // target is dragEl or target is animated
            if (dragEl.contains(evt.target) || target.animated) {
                return completed(false);
            }

            if (target !== dragEl) {
                ignoreNextClick = false;
            }

            if (activeSortable && !options.disabled &&
                (isOwner
                        ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
                        : (
                            putSortable === this ||
                            (
                                (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) &&
                                group.checkPut(this, activeSortable, dragEl, evt)
                            )
                        )
                )
            ) {
                var axis = this._getDirection(evt, target);

                dragRect = _getRect(dragEl);

                if (revert) {
                    this._hideClone();
                    parentEl = rootEl; // actualization

                    if (nextEl) {
                        rootEl.insertBefore(dragEl, nextEl);
                    } else {
                        rootEl.appendChild(dragEl);
                    }

                    return completed(true);
                }

                var elLastChild = _lastChild(el);

                if (!elLastChild || _ghostIsLast(evt, axis, el) && !elLastChild.animated) {
                    // assign target only if condition is true
                    if (elLastChild && el === evt.target) {
                        target = elLastChild;
                    }

                    if (target) {
                        targetRect = _getRect(target);
                    }

                    if (isOwner) {
                        activeSortable._hideClone();
                    } else {
                        activeSortable._showClone(this);
                    }

                    if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
                        el.appendChild(dragEl);
                        parentEl = el; // actualization
                        realDragElRect = null;

                        changed();
                        return completed(true);
                    }
                }
                else if (target && target !== dragEl && target.parentNode === el) {
                    var direction = 0,
                        targetBeforeFirstSwap,
                        aligned = target.sortableMouseAligned,
                        differentLevel = dragEl.parentNode !== el,
                        side1 = axis === 'vertical' ? 'top' : 'left',
                        scrolledPastTop = _isScrolledPast(target, 'top') || _isScrolledPast(dragEl, 'top'),
                        scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;


                    if (lastTarget !== target) {
                        lastMode = null;
                        targetBeforeFirstSwap = _getRect(target)[side1];
                        pastFirstInvertThresh = false;
                    }

                    // Reference: https://www.lucidchart.com/documents/view/10fa0e93-e362-4126-aca2-b709ee56bd8b/0
                    if (
                        _isElInRowColumn(dragEl, target, axis) && aligned ||
                        differentLevel ||
                        scrolledPastTop ||
                        options.invertSwap ||
                        lastMode === 'insert' ||
                        // Needed, in the case that we are inside target and inserted because not aligned... aligned will stay false while inside
                        // and lastMode will change to 'insert', but we must swap
                        lastMode === 'swap'
                    ) {
                        // New target that we will be inside
                        if (lastMode !== 'swap') {
                            isCircumstantialInvert = options.invertSwap || differentLevel;
                        }

                        direction = _getSwapDirection(evt, target, axis,
                            options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold,
                            isCircumstantialInvert,
                            lastTarget === target);
                        lastMode = 'swap';
                    } else {
                        // Insert at position
                        direction = _getInsertDirection(target);
                        lastMode = 'insert';
                    }
                    if (direction === 0) return completed(false);

                    realDragElRect = null;
                    lastTarget = target;

                    lastDirection = direction;

                    targetRect = _getRect(target);

                    var nextSibling = target.nextElementSibling,
                        after = false;

                    after = direction === 1;

                    var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

                    if (moveVector !== false) {
                        if (moveVector === 1 || moveVector === -1) {
                            after = (moveVector === 1);
                        }

                        _silent = true;
                        setTimeout(_unsilent, 30);

                        if (isOwner) {
                            activeSortable._hideClone();
                        } else {
                            activeSortable._showClone(this);
                        }

                        if (after && !nextSibling) {
                            el.appendChild(dragEl);
                        } else {
                            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
                        }

                        // Undo chrome's scroll adjustment
                        if (scrolledPastTop) {
                            _scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
                        }

                        parentEl = dragEl.parentNode; // actualization

                        // must be done before animation
                        if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
                            targetMoveDistance = abs(targetBeforeFirstSwap - _getRect(target)[side1]);
                        }
                        changed();

                        return completed(true);
                    }
                }

                if (el.contains(dragEl)) {
                    return completed(false);
                }
            }

            return false;
        },

        _animate: function (prevRect, target) {
            var ms = this.options.animation;

            if (ms) {
                var currentRect = _getRect(target);

                if (target === dragEl) {
                    realDragElRect = currentRect;
                }

                if (prevRect.nodeType === 1) {
                    prevRect = _getRect(prevRect);
                }

                // Check if actually moving position
                if ((prevRect.left + prevRect.width / 2) !== (currentRect.left + currentRect.width / 2)
                    || (prevRect.top + prevRect.height / 2) !== (currentRect.top + currentRect.height / 2)
                ) {
                    var matrix = _matrix(this.el),
                        scaleX = matrix && matrix.a,
                        scaleY = matrix && matrix.d;

                    _css(target, 'transition', 'none');
                    _css(target, 'transform', 'translate3d('
                        + (prevRect.left - currentRect.left) / (scaleX ? scaleX : 1) + 'px,'
                        + (prevRect.top - currentRect.top) / (scaleY ? scaleY : 1) + 'px,0)'
                    );

                    this._repaint(target);
                    _css(target, 'transition', 'transform ' + ms + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
                    _css(target, 'transform', 'translate3d(0,0,0)');
                }

                (typeof target.animated === 'number') && clearTimeout(target.animated);
                target.animated = setTimeout(function () {
                    _css(target, 'transition', '');
                    _css(target, 'transform', '');
                    target.animated = false;
                }, ms);
            }
        },

        _repaint: function(target) {
            return target.offsetWidth;
        },

        _offMoveEvents: function() {
            _off(document, 'touchmove', this._onTouchMove);
            _off(document, 'pointermove', this._onTouchMove);
            _off(document, 'dragover', nearestEmptyInsertDetectEvent);
            _off(document, 'mousemove', nearestEmptyInsertDetectEvent);
            _off(document, 'touchmove', nearestEmptyInsertDetectEvent);
        },

        _offUpEvents: function () {
            var ownerDocument = this.el.ownerDocument;

            _off(ownerDocument, 'mouseup', this._onDrop);
            _off(ownerDocument, 'touchend', this._onDrop);
            _off(ownerDocument, 'pointerup', this._onDrop);
            _off(ownerDocument, 'touchcancel', this._onDrop);
            _off(document, 'selectstart', this);
        },

        _onDrop: function (/**Event*/evt) {
            var el = this.el,
                options = this.options;
            awaitingDragStarted = false;
            scrolling = false;
            isCircumstantialInvert = false;
            pastFirstInvertThresh = false;

            clearInterval(this._loopId);

            clearInterval(pointerElemChangedInterval);
            _clearAutoScrolls();
            _cancelThrottle();

            clearTimeout(this._dragStartTimer);

            _cancelNextTick(this._cloneId);
            _cancelNextTick(this._dragStartId);

            // Unbind events
            _off(document, 'mousemove', this._onTouchMove);


            if (this.nativeDraggable) {
                _off(document, 'drop', this);
                _off(el, 'dragstart', this._onDragStart);
                _off(document, 'dragover', this._handleAutoScroll);
                _off(document, 'dragover', _checkAlignment);
            }

            if (Safari) {
                _css(document.body, 'user-select', '');
            }

            this._offMoveEvents();
            this._offUpEvents();

            if (evt) {
                if (moved) {
                    evt.cancelable && evt.preventDefault();
                    !options.dropBubble && evt.stopPropagation();
                }

                ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

                if (rootEl === parentEl || (putSortable && putSortable.lastPutMode !== 'clone')) {
                    // Remove clone
                    cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
                }

                if (dragEl) {
                    if (this.nativeDraggable) {
                        _off(dragEl, 'dragend', this);
                    }

                    _disableDraggable(dragEl);
                    dragEl.style['will-change'] = '';

                    // Remove class's
                    _toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
                    _toggleClass(dragEl, this.options.chosenClass, false);

                    // Drag stop event
                    _dispatchEvent(this, rootEl, 'unchoose', dragEl, parentEl, rootEl, oldIndex, null, oldDraggableIndex, null, evt);

                    if (rootEl !== parentEl) {
                        newIndex = _index(dragEl);
                        newDraggableIndex = _index(dragEl, options.draggable);

                        if (newIndex >= 0) {
                            // Add event
                            _dispatchEvent(null, parentEl, 'add', dragEl, parentEl, rootEl, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, evt);

                            // Remove event
                            _dispatchEvent(this, rootEl, 'remove', dragEl, parentEl, rootEl, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, evt);

                            // drag from one list and drop into another
                            _dispatchEvent(null, parentEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, evt);
                            _dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, evt);
                        }

                        putSortable && putSortable.save();
                    }
                    else {
                        if (dragEl.nextSibling !== nextEl) {
                            // Get the index of the dragged element within its parent
                            newIndex = _index(dragEl);
                            newDraggableIndex = _index(dragEl, options.draggable);

                            if (newIndex >= 0) {
                                // drag & drop within the same list
                                _dispatchEvent(this, rootEl, 'update', dragEl, parentEl, rootEl, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, evt);
                                _dispatchEvent(this, rootEl, 'sort', dragEl, parentEl, rootEl, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, evt);
                            }
                        }
                    }

                    if (Sortable.active) {
                        /* jshint eqnull:true */
                        if (newIndex == null || newIndex === -1) {
                            newIndex = oldIndex;
                            newDraggableIndex = oldDraggableIndex;
                        }
                        _dispatchEvent(this, rootEl, 'end', dragEl, parentEl, rootEl, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, evt);

                        // Save sorting
                        this.save();
                    }
                }

            }
            this._nulling();
        },

        _nulling: function() {
            rootEl =
                dragEl =
                    parentEl =
                        ghostEl =
                            nextEl =
                                cloneEl =
                                    lastDownEl =

                                        scrollEl =
                                            scrollParentEl =
                                                autoScrolls.length =

                                                    pointerElemChangedInterval =
                                                        lastPointerElemX =
                                                            lastPointerElemY =

                                                                tapEvt =
                                                                    touchEvt =

                                                                        moved =
                                                                            newIndex =
                                                                                oldIndex =

                                                                                    lastTarget =
                                                                                        lastDirection =

                                                                                            realDragElRect =

                                                                                                putSortable =
                                                                                                    activeGroup =
                                                                                                        Sortable.active = null;

            savedInputChecked.forEach(function (el) {
                el.checked = true;
            });

            savedInputChecked.length = 0;
        },

        handleEvent: function (/**Event*/evt) {
            switch (evt.type) {
                case 'drop':
                case 'dragend':
                    this._onDrop(evt);
                    break;

                case 'dragenter':
                case 'dragover':
                    if (dragEl) {
                        this._onDragOver(evt);
                        _globalDragOver(evt);
                    }
                    break;

                case 'selectstart':
                    evt.preventDefault();
                    break;
            }
        },


        /**
         * Serializes the item into an array of string.
         * @returns {String[]}
         */
        toArray: function () {
            var order = [],
                el,
                children = this.el.children,
                i = 0,
                n = children.length,
                options = this.options;

            for (; i < n; i++) {
                el = children[i];
                if (_closest(el, options.draggable, this.el, false)) {
                    order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
                }
            }

            return order;
        },


        /**
         * Sorts the elements according to the array.
         * @param  {String[]}  order  order of the items
         */
        sort: function (order) {
            var items = {}, rootEl = this.el;

            this.toArray().forEach(function (id, i) {
                var el = rootEl.children[i];

                if (_closest(el, this.options.draggable, rootEl, false)) {
                    items[id] = el;
                }
            }, this);

            order.forEach(function (id) {
                if (items[id]) {
                    rootEl.removeChild(items[id]);
                    rootEl.appendChild(items[id]);
                }
            });
        },


        /**
         * Save the current sorting
         */
        save: function () {
            var store = this.options.store;
            store && store.set && store.set(this);
        },


        /**
         * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
         * @param   {HTMLElement}  el
         * @param   {String}       [selector]  default: `options.draggable`
         * @returns {HTMLElement|null}
         */
        closest: function (el, selector) {
            return _closest(el, selector || this.options.draggable, this.el, false);
        },


        /**
         * Set/get option
         * @param   {string} name
         * @param   {*}      [value]
         * @returns {*}
         */
        option: function (name, value) {
            var options = this.options;

            if (value === void 0) {
                return options[name];
            } else {
                options[name] = value;

                if (name === 'group') {
                    _prepareGroup(options);
                }
            }
        },


        /**
         * Destroy
         */
        destroy: function () {
            var el = this.el;

            el[expando] = null;

            _off(el, 'mousedown', this._onTapStart);
            _off(el, 'touchstart', this._onTapStart);
            _off(el, 'pointerdown', this._onTapStart);

            if (this.nativeDraggable) {
                _off(el, 'dragover', this);
                _off(el, 'dragenter', this);
            }
            // Remove draggable attributes
            Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
                el.removeAttribute('draggable');
            });

            this._onDrop();

            sortables.splice(sortables.indexOf(this.el), 1);

            this.el = el = null;
        },

        _hideClone: function() {
            if (!cloneEl.cloneHidden) {
                _css(cloneEl, 'display', 'none');
                cloneEl.cloneHidden = true;
                if (cloneEl.parentNode && this.options.removeCloneOnHide) {
                    cloneEl.parentNode.removeChild(cloneEl);
                }
            }
        },

        _showClone: function(putSortable) {
            if (putSortable.lastPutMode !== 'clone') {
                this._hideClone();
                return;
            }

            if (cloneEl.cloneHidden) {
                // show clone at dragEl or original position
                if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
                    rootEl.insertBefore(cloneEl, dragEl);
                } else if (nextEl) {
                    rootEl.insertBefore(cloneEl, nextEl);
                } else {
                    rootEl.appendChild(cloneEl);
                }

                if (this.options.group.revertClone) {
                    this._animate(dragEl, cloneEl);
                }
                _css(cloneEl, 'display', '');
                cloneEl.cloneHidden = false;
            }
        }
    };

    function _closest(/**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx, includeCTX) {
        if (el) {
            ctx = ctx || document;

            do {
                if (
                    selector != null &&
                    (
                        selector[0] === '>' ?
                            el.parentNode === ctx && _matches(el, selector) :
                            _matches(el, selector)
                    ) ||
                    includeCTX && el === ctx
                ) {
                    return el;
                }

                if (el === ctx) break;
                /* jshint boss:true */
            } while (el = _getParentOrHost(el));
        }

        return null;
    }


    function _getParentOrHost(el) {
        return (el.host && el !== document && el.host.nodeType)
            ? el.host
            : el.parentNode;
    }


    function _globalDragOver(/**Event*/evt) {
        if (evt.dataTransfer) {
            evt.dataTransfer.dropEffect = 'move';
        }
        evt.cancelable && evt.preventDefault();
    }


    function _on(el, event, fn) {
        el.addEventListener(event, fn, IE11OrLess ? false : captureMode);
    }


    function _off(el, event, fn) {
        el.removeEventListener(event, fn, IE11OrLess ? false : captureMode);
    }


    function _toggleClass(el, name, state) {
        if (el && name) {
            if (el.classList) {
                el.classList[state ? 'add' : 'remove'](name);
            }
            else {
                var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
                el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
            }
        }
    }


    function _css(el, prop, val) {
        var style = el && el.style;

        if (style) {
            if (val === void 0) {
                if (document.defaultView && document.defaultView.getComputedStyle) {
                    val = document.defaultView.getComputedStyle(el, '');
                }
                else if (el.currentStyle) {
                    val = el.currentStyle;
                }

                return prop === void 0 ? val : val[prop];
            }
            else {
                if (!(prop in style) && prop.indexOf('webkit') === -1) {
                    prop = '-webkit-' + prop;
                }

                style[prop] = val + (typeof val === 'string' ? '' : 'px');
            }
        }
    }

    function _matrix(el) {
        var appliedTransforms = '';
        do {
            var transform = _css(el, 'transform');

            if (transform && transform !== 'none') {
                appliedTransforms = transform + ' ' + appliedTransforms;
            }
            /* jshint boss:true */
        } while (el = el.parentNode);

        if (window.DOMMatrix) {
            return new DOMMatrix(appliedTransforms);
        } else if (window.WebKitCSSMatrix) {
            return new WebKitCSSMatrix(appliedTransforms);
        } else if (window.CSSMatrix) {
            return new CSSMatrix(appliedTransforms);
        }
    }


    function _find(ctx, tagName, iterator) {
        if (ctx) {
            var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;

            if (iterator) {
                for (; i < n; i++) {
                    iterator(list[i], i);
                }
            }

            return list;
        }

        return [];
    }



    function _dispatchEvent(
        sortable, rootEl, name,
        targetEl, toEl, fromEl,
        startIndex, newIndex,
        startDraggableIndex, newDraggableIndex,
        originalEvt
    ) {
        sortable = (sortable || rootEl[expando]);
        var evt,
            options = sortable.options,
            onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1);
        // Support for new CustomEvent feature
        if (window.CustomEvent && !IE11OrLess && !Edge) {
            evt = new CustomEvent(name, {
                bubbles: true,
                cancelable: true
            });
        } else {
            evt = document.createEvent('Event');
            evt.initEvent(name, true, true);
        }

        evt.to = toEl || rootEl;
        evt.from = fromEl || rootEl;
        evt.item = targetEl || rootEl;
        evt.clone = cloneEl;

        evt.oldIndex = startIndex;
        evt.newIndex = newIndex;

        evt.oldDraggableIndex = startDraggableIndex;
        evt.newDraggableIndex = newDraggableIndex;

        evt.originalEvent = originalEvt;
        evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

        if (rootEl) {
            rootEl.dispatchEvent(evt);
        }

        if (options[onName]) {
            options[onName].call(sortable, evt);
        }
    }


    function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvt, willInsertAfter) {
        var evt,
            sortable = fromEl[expando],
            onMoveFn = sortable.options.onMove,
            retVal;
        // Support for new CustomEvent feature
        if (window.CustomEvent && !IE11OrLess && !Edge) {
            evt = new CustomEvent('move', {
                bubbles: true,
                cancelable: true
            });
        } else {
            evt = document.createEvent('Event');
            evt.initEvent('move', true, true);
        }

        evt.to = toEl;
        evt.from = fromEl;
        evt.dragged = dragEl;
        evt.draggedRect = dragRect;
        evt.related = targetEl || toEl;
        evt.relatedRect = targetRect || _getRect(toEl);
        evt.willInsertAfter = willInsertAfter;

        evt.originalEvent = originalEvt;

        fromEl.dispatchEvent(evt);

        if (onMoveFn) {
            retVal = onMoveFn.call(sortable, evt, originalEvt);
        }

        return retVal;
    }

    function _disableDraggable(el) {
        el.draggable = false;
    }

    function _unsilent() {
        _silent = false;
    }

    /**
     * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
     * and non-draggable elements
     * @param  {HTMLElement} el       The parent element
     * @param  {Number} childNum      The index of the child
     * @param  {Object} options       Parent Sortable's options
     * @return {HTMLElement}          The child at index childNum, or null if not found
     */
    function _getChild(el, childNum, options) {
        var currentChild = 0,
            i = 0,
            children = el.children;

        while (i < children.length) {
            if (
                children[i].style.display !== 'none' &&
                children[i] !== ghostEl &&
                children[i] !== dragEl &&
                _closest(children[i], options.draggable, el, false)
            ) {
                if (currentChild === childNum) {
                    return children[i];
                }
                currentChild++;
            }

            i++;
        }
        return null;
    }

    /**
     * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
     * @param  {HTMLElement} el       Parent element
     * @return {HTMLElement}          The last child, ignoring ghostEl
     */
    function _lastChild(el) {
        var last = el.lastElementChild;

        while (last && (last === ghostEl || _css(last, 'display') === 'none')) {
            last = last.previousElementSibling;
        }

        return last || null;
    }

    function _ghostIsLast(evt, axis, el) {
        var elRect = _getRect(_lastChild(el)),
            mouseOnAxis = axis === 'vertical' ? evt.clientY : evt.clientX,
            mouseOnOppAxis = axis === 'vertical' ? evt.clientX : evt.clientY,
            targetS2 = axis === 'vertical' ? elRect.bottom : elRect.right,
            targetS1Opp = axis === 'vertical' ? elRect.left : elRect.top,
            targetS2Opp = axis === 'vertical' ? elRect.right : elRect.bottom,
            spacer = 10;

        return (
            axis === 'vertical' ?
                (mouseOnOppAxis > targetS2Opp + spacer || mouseOnOppAxis <= targetS2Opp && mouseOnAxis > targetS2 && mouseOnOppAxis >= targetS1Opp) :
                (mouseOnAxis > targetS2 && mouseOnOppAxis > targetS1Opp || mouseOnAxis <= targetS2 && mouseOnOppAxis > targetS2Opp + spacer)
        );
    }

    function _getSwapDirection(evt, target, axis, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
        var targetRect = _getRect(target),
            mouseOnAxis = axis === 'vertical' ? evt.clientY : evt.clientX,
            targetLength = axis === 'vertical' ? targetRect.height : targetRect.width,
            targetS1 = axis === 'vertical' ? targetRect.top : targetRect.left,
            targetS2 = axis === 'vertical' ? targetRect.bottom : targetRect.right,
            dragRect = _getRect(dragEl),
            invert = false;


        if (!invertSwap) {
            // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
            if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) { // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
                // check if past first invert threshold on side opposite of lastDirection
                if (!pastFirstInvertThresh &&
                    (lastDirection === 1 ?
                            (
                                mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2
                            ) :
                            (
                                mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2
                            )
                    )
                )
                {
                    // past first invert threshold, do not restrict inverted threshold to dragEl shadow
                    pastFirstInvertThresh = true;
                }

                if (!pastFirstInvertThresh) {
                    var dragS1 = axis === 'vertical' ? dragRect.top : dragRect.left,
                        dragS2 = axis === 'vertical' ? dragRect.bottom : dragRect.right;
                    // dragEl shadow (target move distance shadow)
                    if (
                        lastDirection === 1 ?
                            (
                                mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
                            ) :
                            (
                                mouseOnAxis > targetS2 - targetMoveDistance
                            )
                    )
                    {
                        return lastDirection * -1;
                    }
                } else {
                    invert = true;
                }
            } else {
                // Regular
                if (
                    mouseOnAxis > targetS1 + (targetLength * (1 - swapThreshold) / 2) &&
                    mouseOnAxis < targetS2 - (targetLength * (1 - swapThreshold) / 2)
                ) {
                    return _getInsertDirection(target);
                }
            }
        }

        invert = invert || invertSwap;

        if (invert) {
            // Invert of regular
            if (
                mouseOnAxis < targetS1 + (targetLength * invertedSwapThreshold / 2) ||
                mouseOnAxis > targetS2 - (targetLength * invertedSwapThreshold / 2)
            )
            {
                return ((mouseOnAxis > targetS1 + targetLength / 2) ? 1 : -1);
            }
        }

        return 0;
    }

    /**
     * Gets the direction dragEl must be swapped relative to target in order to make it
     * seem that dragEl has been "inserted" into that element's position
     * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
     * @return {Number}                   Direction dragEl must be swapped
     */
    function _getInsertDirection(target) {
        var dragElIndex = _index(dragEl),
            targetIndex = _index(target);

        if (dragElIndex < targetIndex) {
            return 1;
        } else {
            return -1;
        }
    }


    /**
     * Generate id
     * @param   {HTMLElement} el
     * @returns {String}
     * @private
     */
    function _generateId(el) {
        var str = el.tagName + el.className + el.src + el.href + el.textContent,
            i = str.length,
            sum = 0;

        while (i--) {
            sum += str.charCodeAt(i);
        }

        return sum.toString(36);
    }

    /**
     * Returns the index of an element within its parent for a selected set of
     * elements
     * @param  {HTMLElement} el
     * @param  {selector} selector
     * @return {number}
     */
    function _index(el, selector) {
        var index = 0;

        if (!el || !el.parentNode) {
            return -1;
        }

        while (el && (el = el.previousElementSibling)) {
            if ((el.nodeName.toUpperCase() !== 'TEMPLATE') && el !== cloneEl && (!selector || _matches(el, selector))) {
                index++;
            }
        }

        return index;
    }

    function _matches(/**HTMLElement*/el, /**String*/selector) {
        if (!selector) return;

        selector[0] === '>' && (selector = selector.substring(1));

        if (el) {
            try {
                if (el.matches) {
                    return el.matches(selector);
                } else if (el.msMatchesSelector) {
                    return el.msMatchesSelector(selector);
                } else if (el.webkitMatchesSelector) {
                    return el.webkitMatchesSelector(selector);
                }
            } catch(_) {
                return false;
            }
        }

        return false;
    }

    var _throttleTimeout;
    function _throttle(callback, ms) {
        return function () {
            if (!_throttleTimeout) {
                var args = arguments,
                    _this = this;

                _throttleTimeout = setTimeout(function () {
                    if (args.length === 1) {
                        callback.call(_this, args[0]);
                    } else {
                        callback.apply(_this, args);
                    }

                    _throttleTimeout = void 0;
                }, ms);
            }
        };
    }

    function _cancelThrottle() {
        clearTimeout(_throttleTimeout);
        _throttleTimeout = void 0;
    }

    function _extend(dst, src) {
        if (dst && src) {
            for (var key in src) {
                if (src.hasOwnProperty(key)) {
                    dst[key] = src[key];
                }
            }
        }

        return dst;
    }

    function _clone(el) {
        if (Polymer && Polymer.dom) {
            return Polymer.dom(el).cloneNode(true);
        }
        else if ($) {
            return $(el).clone(true)[0];
        }
        else {
            return el.cloneNode(true);
        }
    }

    function _saveInputCheckedState(root) {
        savedInputChecked.length = 0;

        var inputs = root.getElementsByTagName('input');
        var idx = inputs.length;

        while (idx--) {
            var el = inputs[idx];
            el.checked && savedInputChecked.push(el);
        }
    }

    function _nextTick(fn) {
        return setTimeout(fn, 0);
    }

    function _cancelNextTick(id) {
        return clearTimeout(id);
    }


    /**
     * Returns the "bounding client rect" of given element
     * @param  {HTMLElement} el                The element whose boundingClientRect is wanted
     * @param  {[HTMLElement]} container       the parent the element will be placed in
     * @param  {[Boolean]} adjustForTransform  Whether the rect should compensate for parent's transform
     * @return {Object}                        The boundingClientRect of el
     */
    function _getRect(el, adjustForTransform, container, adjustForFixed) {
        if (!el.getBoundingClientRect && el !== win) return;

        var elRect,
            top,
            left,
            bottom,
            right,
            height,
            width;

        if (el !== win && el !== _getWindowScrollingElement()) {
            elRect = el.getBoundingClientRect();
            top = elRect.top;
            left = elRect.left;
            bottom = elRect.bottom;
            right = elRect.right;
            height = elRect.height;
            width = elRect.width;
        } else {
            top = 0;
            left = 0;
            bottom = window.innerHeight;
            right = window.innerWidth;
            height = window.innerHeight;
            width = window.innerWidth;
        }

        if (adjustForFixed && el !== win) {
            // Adjust for translate()
            container = container || el.parentNode;

            // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
            // Not needed on <= IE11
            if (!IE11OrLess) {
                do {
                    if (container && container.getBoundingClientRect && _css(container, 'transform') !== 'none') {
                        var containerRect = container.getBoundingClientRect();

                        // Set relative to edges of padding box of container
                        top -= containerRect.top + parseInt(_css(container, 'border-top-width'));
                        left -= containerRect.left + parseInt(_css(container, 'border-left-width'));
                        bottom = top + elRect.height;
                        right = left + elRect.width;

                        break;
                    }
                    /* jshint boss:true */
                } while (container = container.parentNode);
            }
        }

        if (adjustForTransform && el !== win) {
            // Adjust for scale()
            var matrix = _matrix(container || el),
                scaleX = matrix && matrix.a,
                scaleY = matrix && matrix.d;

            if (matrix) {
                top /= scaleY;
                left /= scaleX;

                width /= scaleX;
                height /= scaleY;

                bottom = top + height;
                right = left + width;
            }
        }

        return {
            top: top,
            left: left,
            bottom: bottom,
            right: right,
            width: width,
            height: height
        };
    }


    /**
     * Checks if a side of an element is scrolled past a side of it's parents
     * @param  {HTMLElement}  el       The element who's side being scrolled out of view is in question
     * @param  {String}       side     Side of the element in question ('top', 'left', 'right', 'bottom')
     * @return {HTMLElement}           The parent scroll element that the el's side is scrolled past, or null if there is no such element
     */
    function _isScrolledPast(el, side) {
        var parent = _getParentAutoScrollElement(el, true),
            elSide = _getRect(el)[side];

        /* jshint boss:true */
        while (parent) {
            var parentSide = _getRect(parent)[side],
                visible;

            if (side === 'top' || side === 'left') {
                visible = elSide >= parentSide;
            } else {
                visible = elSide <= parentSide;
            }

            if (!visible) return parent;

            if (parent === _getWindowScrollingElement()) break;

            parent = _getParentAutoScrollElement(parent, false);
        }

        return false;
    }

    /**
     * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
     * The value is returned in real pixels.
     * @param  {HTMLElement} el
     * @return {Array}             Offsets in the format of [left, top]
     */
    function _getRelativeScrollOffset(el) {
        var offsetLeft = 0,
            offsetTop = 0,
            winScroller = _getWindowScrollingElement();

        if (el) {
            do {
                var matrix = _matrix(el),
                    scaleX = matrix.a,
                    scaleY = matrix.d;

                offsetLeft += el.scrollLeft * scaleX;
                offsetTop += el.scrollTop * scaleY;
            } while (el !== winScroller && (el = el.parentNode));
        }

        return [offsetLeft, offsetTop];
    }

    // Fixed #973:
    _on(document, 'touchmove', function(evt) {
        if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
            evt.preventDefault();
        }
    });


    // Export utils
    Sortable.utils = {
        on: _on,
        off: _off,
        css: _css,
        find: _find,
        is: function (el, selector) {
            return !!_closest(el, selector, el, false);
        },
        extend: _extend,
        throttle: _throttle,
        closest: _closest,
        toggleClass: _toggleClass,
        clone: _clone,
        index: _index,
        nextTick: _nextTick,
        cancelNextTick: _cancelNextTick,
        detectDirection: _detectDirection,
        getChild: _getChild
    };


    /**
     * Create sortable instance
     * @param {HTMLElement}  el
     * @param {Object}      [options]
     */
    Sortable.create = function (el, options) {
        return new Sortable(el, options);
    };


    // Export
    Sortable.version = '1.9.0';
    return Sortable;
});

/*!
* metismenu - v2.7.9
* A jQuery menu plugin
* https://github.com/onokumus/metismenu#readme
*
* Made by Osman Nuri Okumus <onokumus@gmail.com> (https://github.com/onokumus)
* Under MIT License
*/
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):n.metisMenu=e(n.jQuery)}(this,function(n){"use strict";function a(s){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{},e=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(a).filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.forEach(function(n){var e,i,t;e=s,t=a[i=n],i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t})}return s}var o,e,r,i,t,l,c,s,g=function(t){var e="transitionend",s={TRANSITION_END:"mmTransitionEnd",triggerTransitionEnd:function(n){t(n).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)}};function n(n){var e=this,i=!1;return t(this).one(s.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||s.triggerTransitionEnd(e)},n),this}return t.fn.mmEmulateTransitionEnd=n,t.event.special[s.TRANSITION_END]={bindType:e,delegateType:e,handle:function(n){if(t(n.target).is(this))return n.handleObj.handler.apply(this,arguments)}},s}(n=n&&n.hasOwnProperty("default")?n.default:n);return i="."+(r=e="metisMenu"),t=(o=n).fn[e],l={toggle:!0,preventDefault:!0,activeClass:"active",collapseClass:"collapse",collapseInClass:"in",collapsingClass:"collapsing",triggerElement:"a",parentTrigger:"li",subMenu:"ul"},c={SHOW:"show"+i,SHOWN:"shown"+i,HIDE:"hide"+i,HIDDEN:"hidden"+i,CLICK_DATA_API:"click"+i+".data-api"},s=function(){function s(n,e){this.element=n,this.config=a({},l,e),this.transitioning=null,this.init()}var n=s.prototype;return n.init=function(){var a=this,r=this.config;o(this.element).find(r.parentTrigger+"."+r.activeClass).has(r.subMenu).children(r.subMenu).addClass(r.collapseClass+" "+r.collapseInClass),o(this.element).find(r.parentTrigger).not("."+r.activeClass).has(r.subMenu).children(r.subMenu).addClass(r.collapseClass),o(this.element).find(r.parentTrigger).has(r.subMenu).children(r.triggerElement).on(c.CLICK_DATA_API,function(n){var e=o(this),i=e.parent(r.parentTrigger),t=i.siblings(r.parentTrigger).children(r.triggerElement),s=i.children(r.subMenu);r.preventDefault&&n.preventDefault(),"true"!==e.attr("aria-disabled")&&(i.hasClass(r.activeClass)?(e.attr("aria-expanded",!1),a.hide(s)):(a.show(s),e.attr("aria-expanded",!0),r.toggle&&t.attr("aria-expanded",!1)),r.onTransitionStart&&r.onTransitionStart(n))})},n.show=function(n){var e=this;if(!this.transitioning&&!o(n).hasClass(this.config.collapsingClass)){var i=o(n),t=o.Event(c.SHOW);if(i.trigger(t),!t.isDefaultPrevented()){i.parent(this.config.parentTrigger).addClass(this.config.activeClass),this.config.toggle&&this.hide(i.parent(this.config.parentTrigger).siblings().children(this.config.subMenu+"."+this.config.collapseInClass)),i.removeClass(this.config.collapseClass).addClass(this.config.collapsingClass).height(0),this.setTransitioning(!0);i.height(n[0].scrollHeight).one(g.TRANSITION_END,function(){e.config&&e.element&&(i.removeClass(e.config.collapsingClass).addClass(e.config.collapseClass+" "+e.config.collapseInClass).height(""),e.setTransitioning(!1),i.trigger(c.SHOWN))}).mmEmulateTransitionEnd(350)}}},n.hide=function(n){var e=this;if(!this.transitioning&&o(n).hasClass(this.config.collapseInClass)){var i=o(n),t=o.Event(c.HIDE);if(i.trigger(t),!t.isDefaultPrevented()){i.parent(this.config.parentTrigger).removeClass(this.config.activeClass),i.height(i.height())[0].offsetHeight,i.addClass(this.config.collapsingClass).removeClass(this.config.collapseClass).removeClass(this.config.collapseInClass),this.setTransitioning(!0);var s=function(){e.config&&e.element&&(e.transitioning&&e.config.onTransitionEnd&&e.config.onTransitionEnd(),e.setTransitioning(!1),i.trigger(c.HIDDEN),i.removeClass(e.config.collapsingClass).addClass(e.config.collapseClass))};0===i.height()||"none"===i.css("display")?s():i.height(0).one(g.TRANSITION_END,s).mmEmulateTransitionEnd(350)}}},n.setTransitioning=function(n){this.transitioning=n},n.dispose=function(){o.removeData(this.element,r),o(this.element).find(this.config.parentTrigger).has(this.config.subMenu).children(this.config.triggerElement).off("click"),this.transitioning=null,this.config=null,this.element=null},s.jQueryInterface=function(t){return this.each(function(){var n=o(this),e=n.data(r),i=a({},l,n.data(),"object"==typeof t&&t?t:{});if(!e&&/dispose/.test(t)&&this.dispose(),e||(e=new s(this,i),n.data(r,e)),"string"==typeof t){if(void 0===e[t])throw new Error('No method named "'+t+'"');e[t]()}})},s}(),o.fn[e]=s.jQueryInterface,o.fn[e].Constructor=s,o.fn[e].noConflict=function(){return o.fn[e]=t,s.jQueryInterface},s});
//# sourceMappingURL=metisMenu.min.js.map



var config=window.config={},$ref=$("#ref");function animate(e){var o="animated "+e.name;$(e.selector).addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass(o)})}config.ResponsiveBootstrapToolkitVisibilityDivs={xs:$('<div class="device-xs \t\t\t\t  hidden-sm-up"></div>'),sm:$('<div class="device-sm hidden-xs-down hidden-md-up"></div>'),md:$('<div class="device-md hidden-sm-down hidden-lg-up"></div>'),lg:$('<div class="device-lg hidden-md-down hidden-xl-up"></div>'),xl:$('<div class="device-xl hidden-lg-down\t\t\t  "></div>')},ResponsiveBootstrapToolkit.use("Custom",config.ResponsiveBootstrapToolkitVisibilityDivs),config.validations={debug:!0,errorClass:"has-error",validClass:"success",errorElement:"span",highlight:function(e,o,t){$(e).parents("div.form-group").addClass(o).removeClass(t)},unhighlight:function(e,o,t){$(e).parents(".has-error").removeClass(o).addClass(t)},submitHandler:function(e){e.submit()}},config.delayTime=50,config.chart={},config.chart.colorPrimary=tinycolor($ref.find(".chart .color-primary").css("color")),config.chart.colorSecondary=tinycolor($ref.find(".chart .color-secondary").css("color")),$(function(){animate({name:"flipInY",selector:".error-card > .error-title-block"}),setTimeout(function(){var e=$(".error-card > .error-container");animate({name:"fadeInUp",selector:e}),e.addClass("visible")},1e3)}),$(function(){if(!$("#login-form").length)return!1;var e={rules:{username:{required:!0,email:!0},password:"required",agree:"required"},messages:{username:{required:"Please enter username",email:"Please enter a valid email address"},password:"Please enter password",agree:"Please accept our policy"},invalidHandler:function(){animate({name:"shake",selector:".auth-container > .card"})}};$.extend(e,config.validations),$("#login-form").validate(e)}),$(function(){if(!$("#reset-form").length)return!1;var e={rules:{email1:{required:!0,email:!0}},messages:{email1:{required:"Please enter email address",email:"Please enter a valid email address"}},invalidHandler:function(){animate({name:"shake",selector:".auth-container > .card"})}};$.extend(e,config.validations),$("#reset-form").validate(e)}),$(function(){if(!$("#signup-form").length)return!1;var e={rules:{firstname:{required:!0},lastname:{required:!0},email:{required:!0,email:!0},password:{required:!0,minlength:8},retype_password:{required:!0,minlength:8,equalTo:"#password"},agree:{required:!0}},groups:{name:"firstname lastname",pass:"password retype_password"},errorPlacement:function(e,o){"firstname"==o.attr("name")||"lastname"==o.attr("name")?(e.insertAfter($("#lastname").closest(".row")),o.parents("div.form-group").addClass("has-error")):"password"==o.attr("name")||"retype_password"==o.attr("name")?(e.insertAfter($("#retype_password").closest(".row")),o.parents("div.form-group").addClass("has-error")):"agree"==o.attr("name")?e.insertAfter("#agree-text"):e.insertAfter(o)},messages:{firstname:"Please enter firstname and lastname",lastname:"Please enter firstname and lastname",email:{required:"Please enter email",email:"Please enter a valid email address"},password:{required:"Please enter password fields.",minlength:"Passwords should be at least 8 characters."},retype_password:{required:"Please enter password fields.",minlength:"Passwords should be at least 8 characters."},agree:"Please accept our policy"},invalidHandler:function(){animate({name:"shake",selector:".auth-container > .card"})}};$.extend(e,config.validations),$("#signup-form").validate(e)}),$(function(){var t=$(".item-actions-dropdown");$(document).on("click",function(e){$(e.target).closest(".item-actions-dropdown").length||t.removeClass("active")}),$(".item-actions-toggle-btn").on("click",function(e){e.preventDefault();var o=$(this).closest(".item-actions-dropdown");t.not(o).removeClass("active"),o.toggleClass("active")})});var npSettings={easing:"ease",speed:500};function setSameHeights(e){e=e||$(".sameheight-container");var t=ResponsiveBootstrapToolkit.current();e.each(function(){var e=$(this).find(".sameheight-item"),o=0;e.each(function(){$(this).css({height:"auto"}),o=Math.max(o,$(this).innerHeight())}),e.each(function(){-1===($(this).data("exclude")||"").split(",").indexOf(t)&&$(this).innerHeight(o)})})}NProgress.configure(npSettings),$(function(){var e;setSameHeights(),$(window).resize(function(){clearTimeout(e),e=setTimeout(setSameHeights,150)})}),$(function(){if(!$("#flot-bar-chart").length)return!1;function e(){var e={series:{bars:{show:!0,barWidth:.6,fill:!0,fillColor:{colors:[{opacity:.8},{opacity:.8}]}}},xaxis:{tickDecimals:0},colors:[config.chart.colorPrimary],grid:{color:"#999999",hoverable:!0,clickable:!0,tickColor:"#D4D4D4",borderWidth:0},legend:{show:!1},tooltip:!0,tooltipOpts:{content:"x: %x, y: %y"}},o={label:"bar",data:[[1,34],[2,25],[3,19],[4,34],[5,32],[6,44]]};$.plot($("#flot-bar-chart"),[o],e);var t={series:{lines:{show:!0,lineWidth:2,fill:!0,fillColor:{colors:[{opacity:0},{opacity:0}]}}},xaxis:{tickDecimals:0},colors:[config.chart.colorPrimary],grid:{color:"#999999",hoverable:!0,clickable:!0,tickColor:"#D4D4D4",borderWidth:0},legend:{show:!1},tooltip:!0,tooltipOpts:{content:"x: %x, y: %y"}};o={label:"bar",data:[[1,34],[2,25],[3,19],[4,34],[5,32],[6,44]]};$.plot($("#flot-line-chart"),[o],t);var r=[{label:"Sales 1",data:21,color:tinycolor(config.chart.colorPrimary.toString()).lighten(20)},{label:"Sales 2",data:15,color:tinycolor(config.chart.colorPrimary.toString()).lighten(10)},{label:"Sales 3",data:7,color:tinycolor(config.chart.colorPrimary.toString())},{label:"Sales 4",data:52,color:tinycolor(config.chart.colorPrimary.toString()).darken(10)}],a=($.plot($("#flot-pie-chart"),r,{series:{pie:{show:!0}},grid:{hoverable:!0},tooltip:!0,tooltipOpts:{content:"%p.0%, %s",shifts:{x:20,y:0},defaultTheme:!1}}),$("#flot-line-chart-moving"));a.empty();var i=a.outerWidth()/10||100;r=[];function n(){for(r.length&&(r=r.slice(1));r.length<i;){var e=(r.length?r[r.length-1]:50)+10*Math.random()-5;r.push(e<0?0:100<e?100:e)}for(var o=[],t=0;t<r.length;++t)o.push([t,r[t]]);return o}series=[{data:n(),lines:{fill:!0}}];var s=$.plot(a,series,{grid:{color:"#999999",tickColor:"#D4D4D4",borderWidth:0,minBorderMargin:20,labelMargin:10,backgroundColor:{colors:["#ffffff","#ffffff"]},margin:{top:8,bottom:20,left:20},markings:function(e){for(var o=[],t=e.xaxis,r=Math.floor(t.min);r<t.max;r+=2*t.tickSize)o.push({xaxis:{from:r,to:r+t.tickSize},color:"#fff"});return o}},colors:[config.chart.colorPrimary.toString()],xaxis:{tickFormatter:function(){return""}},yaxis:{min:0,max:110},legend:{show:!0}});setInterval(function(){series[0].data=n(),s.setData(series),s.draw()},40);function l(e,o){return e.toFixed(o.tickDecimals)+"€"}function c(e){$.plot($("#flot-line-chart-multi"),[{data:oilprices,label:"Oil price ($)"},{data:exchangerates,label:"USD/EUR exchange rate",yaxis:2}],{xaxes:[{mode:"time"}],yaxes:[{min:0},{alignTicksWithAxis:"right"==e?1:null,position:e,tickFormatter:l}],legend:{position:"sw"},colors:[config.chart.colorPrimary.toString()],grid:{color:"#999999",hoverable:!0,clickable:!0,tickColor:"#D4D4D4",borderWidth:0,hoverable:!0},tooltip:{show:!0,content:"%s for %x was %y",xDateFormat:"%y-%m-%d",onHover:function(e,o){}}})}oilprices=[],exchangerates=[],[[11676924e5,61.05],[11677788e5,58.32],[11678652e5,57.35],[11679516e5,56.31],[11682108e5,55.55],[11682972e5,55.64],[11683836e5,54.02],[116847e7,51.88],[11685564e5,52.99],[11688156e5,52.99],[1168902e6,51.21],[11689884e5,52.24],[11690748e5,50.48],[11691612e5,51.99],[11694204e5,51.13],[11695068e5,55.04],[11695932e5,55.37],[11696796e5,54.23],[1169766e6,55.42],[11700252e5,54.01],[11701116e5,56.97],[1170198e6,58.14],[11702844e5,58.14],[11703708e5,59.02],[117063e7,58.74],[11707164e5,58.88],[11708028e5,57.71],[11708892e5,59.71],[11709756e5,59.89],[11712348e5,57.81],[11713212e5,59.06],[11714076e5,58],[1171494e6,57.99],[11715804e5,59.39],[11718396e5,59.39],[1171926e6,58.07],[11720124e5,60.07],[11720988e5,61.14],[11724444e5,61.39],[11725308e5,61.46],[11726172e5,61.79],[11727036e5,62],[117279e7,60.07],[11731356e5,60.69],[1173222e6,61.82],[11733084e5,60.05],[1173654e6,58.91],[11737404e5,57.93],[11738268e5,58.16],[11739132e5,57.55],[11739996e5,57.11],[11742588e5,56.59],[11743452e5,59.61],[1174518e6,61.69],[11746044e5,62.28],[117486e7,62.91],[11749464e5,62.93],[11750328e5,64.03],[11751192e5,66.03],[11752056e5,65.87],[11754648e5,64.64],[11756376e5,64.38],[1175724e6,64.28],[11758104e5,64.28],[11760696e5,61.51],[1176156e6,61.89],[11762424e5,62.01],[11763288e5,63.85],[11764152e5,63.63],[11766744e5,63.61],[11767608e5,63.1],[11768472e5,63.13],[11769336e5,61.83],[117702e7,63.38],[11772792e5,64.58],[1177452e6,65.84],[11775384e5,65.06],[11776248e5,66.46],[1177884e6,64.4],[11780568e5,63.68],[11781432e5,63.19],[11782296e5,61.93],[11784888e5,61.47],[11785752e5,61.55],[1178748e6,61.81],[11788344e5,62.37],[11790936e5,62.46],[117918e7,63.17],[11792664e5,62.55],[11793528e5,64.94],[11796984e5,66.27],[11797848e5,65.5],[11798712e5,65.77],[11799576e5,64.18],[1180044e6,65.2],[11803896e5,63.15],[1180476e6,63.49],[11805624e5,65.08],[1180908e6,66.3],[11809944e5,65.96],[11811672e5,66.93],[11812536e5,65.98],[11815992e5,65.35],[11816856e5,66.26],[11818584e5,68],[11821176e5,69.09],[1182204e6,69.1],[11822904e5,68.19],[11823768e5,68.19],[11824632e5,69.14],[11827224e5,68.19],[11828088e5,67.77],[11828952e5,68.97],[11829816e5,69.57],[1183068e6,70.68],[11833272e5,71.09],[11834136e5,70.92],[11835864e5,71.81],[11836728e5,72.81],[1183932e6,72.19],[11840184e5,72.56],[11841912e5,72.5],[11842776e5,74.15],[11846232e5,75.05],[1184796e6,75.92],[11848824e5,75.57],[11851416e5,74.89],[1185228e6,73.56],[11853144e5,75.57],[11854008e5,74.95],[11854872e5,76.83],[11858328e5,78.21],[11859192e5,76.53],[11860056e5,76.86],[1186092e6,76],[11864376e5,71.59],[11866968e5,71.47],[1186956e6,71.62],[11870424e5,71],[11873016e5,71.98],[11875608e5,71.12],[11876472e5,69.47],[11877336e5,69.26],[118782e7,69.83],[11879064e5,71.09],[11881656e5,71.73],[11883384e5,73.36],[11885112e5,74.04],[11888568e5,76.3],[1189116e6,77.49],[11894616e5,78.23],[1189548e6,79.91],[11896344e5,80.09],[11897208e5,79.1],[118998e7,80.57],[11900664e5,81.93],[11902392e5,83.32],[11903256e5,81.62],[11905848e5,80.95],[11906712e5,79.53],[11907576e5,80.3],[1190844e6,82.88],[11909304e5,81.66],[11911896e5,80.24],[1191276e6,80.05],[11913624e5,79.94],[11914488e5,81.44],[11915352e5,81.22],[11917944e5,79.02],[11918808e5,80.26],[11919672e5,80.3],[11920536e5,83.08],[119214e7,83.69],[11923992e5,86.13],[11924856e5,87.61],[1192572e6,87.4],[11926584e5,89.47],[11927448e5,88.6],[1193004e6,87.56],[11930904e5,87.56],[11931768e5,87.1],[11932632e5,91.86],[11936124e5,93.53],[11936988e5,94.53],[11938716e5,95.93],[11942172e5,93.98],[11943036e5,96.37],[11944764e5,95.46],[11945628e5,96.32],[11950812e5,93.43],[11951676e5,95.1],[11954268e5,94.64],[11955132e5,95.1],[11960316e5,97.7],[1196118e6,94.42],[11962044e5,90.62],[11962908e5,91.01],[11963772e5,88.71],[11966364e5,88.32],[11968092e5,90.23],[1196982e6,88.28],[11972412e5,87.86],[11973276e5,90.02],[1197414e6,92.25],[11975868e5,90.63],[1197846e6,90.63],[11979324e5,90.49],[11980188e5,91.24],[11981052e5,91.06],[11981916e5,90.49],[119871e7,96.62],[11987964e5,96],[1199142e6,99.62],[11993148e5,99.18],[11994012e5,95.09],[11996604e5,96.33],[11998332e5,95.67],[12003516e5,91.9],[1200438e6,90.84],[12005244e5,90.13],[12006108e5,90.57],[12009564e5,89.21],[12010428e5,86.99],[12011292e5,89.85],[12014748e5,90.99],[12015612e5,91.64],[12016476e5,92.33],[1201734e6,91.75],[12020796e5,90.02],[1202166e6,88.41],[12022524e5,87.14],[12023388e5,88.11],[12024252e5,91.77],[12027708e5,92.78],[12028572e5,93.27],[12029436e5,95.46],[120303e7,95.46],[12032892e5,101.74],[1203462e6,98.81],[1203894e6,100.88],[12040668e5,99.64],[12041532e5,102.59],[12042396e5,101.84],[12044988e5,99.52],[12045852e5,99.52],[12046716e5,104.52],[1204758e6,105.47],[12048444e5,105.15],[12051036e5,108.75],[12052764e5,109.92],[12053628e5,110.33],[12054492e5,110.21],[12057084e5,105.68],[12059676e5,101.84],[12063132e5,100.86],[12063996e5,101.22],[1206486e6,105.9],[12065724e5,107.58],[12066588e5,105.62],[12069144e5,101.58],[12070008e5,100.98],[12071736e5,103.83],[120726e7,106.23],[12076056e5,108.5],[12077784e5,110.11],[12078648e5,110.14],[12082104e5,113.79],[12082968e5,114.93],[12083832e5,114.86],[12087288e5,117.48],[12088152e5,118.3],[1208988e6,116.06],[12090744e5,118.52],[12093336e5,118.75],[120942e7,113.46],[12095928e5,112.52],[12100248e5,121.84],[12101112e5,123.53],[12101976e5,123.69],[12105432e5,124.23],[12106296e5,125.8],[1210716e6,126.29],[1211148e6,127.05],[12113208e5,129.07],[12114936e5,132.19],[12118392e5,128.85],[12123576e5,127.76],[12127032e5,138.54],[12129624e5,136.8],[12131352e5,136.38],[1213308e6,134.86],[12136536e5,134.01],[121374e7,136.68],[12139128e5,135.65],[1214172e6,134.62],[12142584e5,134.62],[12143448e5,134.62],[12144312e5,139.64],[12145176e5,140.21],[12147768e5,140],[12148632e5,140.97],[12149496e5,143.57],[1215036e6,145.29],[12153816e5,141.37],[1215468e6,136.04],[12157272e5,146.4],[12159864e5,145.18],[12160728e5,138.74],[12161592e5,134.6],[12162456e5,129.29],[1216332e6,130.65],[12166776e5,127.95],[12168504e5,127.95],[12172824e5,122.19],[12174552e5,124.08],[12175416e5,125.1],[12178008e5,121.41],[12178872e5,119.17],[12179736e5,118.58],[121806e7,120.02],[12184056e5,114.45],[1218492e6,113.01],[12185784e5,116],[12187512e5,113.77],[12190104e5,112.87],[12190968e5,114.53],[12192696e5,114.98],[1219356e6,114.98],[12197016e5,116.27],[1219788e6,118.15],[12198744e5,115.59],[12199608e5,115.46],[12203064e5,109.71],[12203928e5,109.35],[12205656e5,106.23],[12208248e5,106.34]].map(function(e,o){o%8==0&&oilprices.push(e)}),[[1167606e6,.758],[11676924e5,.758],[11677788e5,.7547],[11678652e5,.7549],[11679516e5,.7613],[1168038e6,.7655],[11681244e5,.7693],[11682108e5,.7694],[11682972e5,.7688],[11683836e5,.7678],[116847e7,.7708],[11685564e5,.7727],[11686428e5,.7749],[11687292e5,.7741],[11688156e5,.7741],[1168902e6,.7732],[11689884e5,.7727],[11690748e5,.7737],[11691612e5,.7724],[11692476e5,.7712],[1169334e6,.772],[11694204e5,.7721],[11695068e5,.7717],[11695932e5,.7704],[11696796e5,.769],[1169766e6,.7711],[11698524e5,.774],[11699388e5,.7745],[11700252e5,.7745],[11701116e5,.774],[1170198e6,.7716],[11702844e5,.7713],[11703708e5,.7678],[11704572e5,.7688],[11705436e5,.7718],[117063e7,.7718],[11707164e5,.7728],[11708028e5,.7729],[11708892e5,.7698],[11709756e5,.7685],[1171062e6,.7681],[11711484e5,.769],[11712348e5,.769],[11713212e5,.7698],[11714076e5,.7699],[1171494e6,.7651],[11715804e5,.7613],[11716668e5,.7616],[11717532e5,.7614],[11718396e5,.7614],[1171926e6,.7607],[11720124e5,.7602],[11720988e5,.7611],[11721852e5,.7622],[11722716e5,.7615],[1172358e6,.7598],[11724444e5,.7598],[11725308e5,.7592],[11726172e5,.7573],[11727036e5,.7566],[117279e7,.7567],[11728764e5,.7591],[11729628e5,.7582],[11730492e5,.7585],[11731356e5,.7613],[1173222e6,.7631],[11733084e5,.7615],[11733948e5,.76],[11734812e5,.7613],[11735676e5,.7627],[1173654e6,.7627],[11737404e5,.7608],[11738268e5,.7583],[11739132e5,.7575],[11739996e5,.7562],[1174086e6,.752],[11741724e5,.7512],[11742588e5,.7512],[11743452e5,.7517],[11744316e5,.752],[1174518e6,.7511],[11746044e5,.748],[11746908e5,.7509],[11747772e5,.7531],[117486e7,.7531],[11749464e5,.7527],[11750328e5,.7498],[11751192e5,.7493],[11752056e5,.7504],[1175292e6,.75],[11753784e5,.7491],[11754648e5,.7491],[11755512e5,.7485],[11756376e5,.7484],[1175724e6,.7492],[11758104e5,.7471],[11758968e5,.7459],[11759832e5,.7477],[11760696e5,.7477],[1176156e6,.7483],[11762424e5,.7458],[11763288e5,.7448],[11764152e5,.743],[11765016e5,.7399],[1176588e6,.7395],[11766744e5,.7395],[11767608e5,.7378],[11768472e5,.7382],[11769336e5,.7362],[117702e7,.7355],[11771064e5,.7348],[11771928e5,.7361],[11772792e5,.7361],[11773656e5,.7365],[1177452e6,.7362],[11775384e5,.7331],[11776248e5,.7339],[11777112e5,.7344],[11777976e5,.7327],[1177884e6,.7327],[11779704e5,.7336],[11780568e5,.7333],[11781432e5,.7359],[11782296e5,.7359],[1178316e6,.7372],[11784024e5,.736],[11784888e5,.736],[11785752e5,.735],[11786616e5,.7365],[1178748e6,.7384],[11788344e5,.7395],[11789208e5,.7413],[11790072e5,.7397],[11790936e5,.7396],[117918e7,.7385],[11792664e5,.7378],[11793528e5,.7366],[11794392e5,.74],[11795256e5,.7411],[1179612e6,.7406],[11796984e5,.7405],[11797848e5,.7414],[11798712e5,.7431],[11799576e5,.7431],[1180044e6,.7438],[11801304e5,.7443],[11802168e5,.7443],[11803032e5,.7443],[11803896e5,.7434],[1180476e6,.7429],[11805624e5,.7442],[11806488e5,.744],[11807352e5,.7439],[11808216e5,.7437],[1180908e6,.7437],[11809944e5,.7429],[11810808e5,.7403],[11811672e5,.7399],[11812536e5,.7418],[118134e7,.7468],[11814264e5,.748],[11815128e5,.748],[11815992e5,.749],[11816856e5,.7494],[1181772e6,.7522],[11818584e5,.7515],[11819448e5,.7502],[11820312e5,.7472],[11821176e5,.7472],[1182204e6,.7462],[11822904e5,.7455],[11823768e5,.7449],[11824632e5,.7467],[11825496e5,.7458],[1182636e6,.7427],[11827224e5,.7427],[11828088e5,.743],[11828952e5,.7429],[11829816e5,.744],[1183068e6,.743],[11831544e5,.7422],[11832408e5,.7388],[11833272e5,.7388],[11834136e5,.7369],[11835e8,.7345],[11835864e5,.7345],[11836728e5,.7345],[11837592e5,.7352],[11838456e5,.7341],[1183932e6,.7341],[11840184e5,.734],[11841048e5,.7324],[11841912e5,.7272],[11842776e5,.7264],[1184364e6,.7255],[11844504e5,.7258],[11845368e5,.7258],[11846232e5,.7256],[11847096e5,.7257],[1184796e6,.7247],[11848824e5,.7243],[11849688e5,.7244],[11850552e5,.7235],[11851416e5,.7235],[1185228e6,.7235],[11853144e5,.7235],[11854008e5,.7262],[11854872e5,.7288],[11855736e5,.7301],[118566e7,.7337],[11857464e5,.7337],[11858328e5,.7324],[11859192e5,.7297],[11860056e5,.7317],[1186092e6,.7315],[11861784e5,.7288],[11862648e5,.7263],[11863512e5,.7263],[11864376e5,.7242],[1186524e6,.7253],[11866104e5,.7264],[11866968e5,.727],[11867832e5,.7312],[11868696e5,.7305],[1186956e6,.7305],[11870424e5,.7318],[11871288e5,.7358],[11872152e5,.7409],[11873016e5,.7454],[1187388e6,.7437],[11874744e5,.7424],[11875608e5,.7424],[11876472e5,.7415],[11877336e5,.7419],[118782e7,.7414],[11879064e5,.7377],[11879928e5,.7355],[11880792e5,.7315],[11881656e5,.7315],[1188252e6,.732],[11883384e5,.7332],[11884248e5,.7346],[11885112e5,.7328],[11885976e5,.7323],[1188684e6,.734],[11887704e5,.734],[11888568e5,.7336],[11889432e5,.7351],[11890296e5,.7346],[1189116e6,.7321],[11892024e5,.7294],[11892888e5,.7266],[11893752e5,.7266],[11894616e5,.7254],[1189548e6,.7242],[11896344e5,.7213],[11897208e5,.7197],[11898072e5,.7209],[11898936e5,.721],[118998e7,.721],[11900664e5,.721],[11901528e5,.7209],[11902392e5,.7159],[11903256e5,.7133],[1190412e6,.7105],[11904984e5,.7099],[11905848e5,.7099],[11906712e5,.7093],[11907576e5,.7093],[1190844e6,.7076],[11909304e5,.707],[11910168e5,.7049],[11911032e5,.7012],[11911896e5,.7011],[1191276e6,.7019],[11913624e5,.7046],[11914488e5,.7063],[11915352e5,.7089],[11916216e5,.7077],[1191708e6,.7077],[11917944e5,.7077],[11918808e5,.7091],[11919672e5,.7118],[11920536e5,.7079],[119214e7,.7053],[11922264e5,.705],[11923128e5,.7055],[11923992e5,.7055],[11924856e5,.7045],[1192572e6,.7051],[11926584e5,.7051],[11927448e5,.7017],[11928312e5,.7],[11929176e5,.6995],[1193004e6,.6994],[11930904e5,.7014],[11931768e5,.7036],[11932632e5,.7021],[11933496e5,.7002],[1193436e6,.6967],[11935224e5,.695],[11936124e5,.695],[11936988e5,.6939],[11937852e5,.694],[11938716e5,.6922],[1193958e6,.6919],[11940444e5,.6914],[11941308e5,.6894],[11942172e5,.6891],[11943036e5,.6904],[119439e7,.689],[11944764e5,.6834],[11945628e5,.6823],[11946492e5,.6807],[11947356e5,.6815],[1194822e6,.6815],[11949084e5,.6847],[11949948e5,.6859],[11950812e5,.6822],[11951676e5,.6827],[1195254e6,.6837],[11953404e5,.6823],[11954268e5,.6822],[11955132e5,.6822],[11955996e5,.6792],[1195686e6,.6746],[11957724e5,.6735],[11958588e5,.6731],[11959452e5,.6742],[11960316e5,.6744],[1196118e6,.6739],[11962044e5,.6731],[11962908e5,.6761],[11963772e5,.6761],[11964636e5,.6785],[119655e7,.6818],[11966364e5,.6836],[11967228e5,.6823],[11968092e5,.6805],[11968956e5,.6793],[1196982e6,.6849],[11970684e5,.6833],[11971548e5,.6825],[11972412e5,.6825],[11973276e5,.6816],[1197414e6,.6799],[11975004e5,.6813],[11975868e5,.6809],[11976732e5,.6868],[11977596e5,.6933],[1197846e6,.6933],[11979324e5,.6945],[11980188e5,.6944],[11981052e5,.6946],[11981916e5,.6964],[1198278e6,.6965],[11983644e5,.6956],[11984508e5,.6956],[11985372e5,.695],[11986236e5,.6948],[119871e7,.6928],[11987964e5,.6887],[11988828e5,.6824],[11989692e5,.6794],[11990556e5,.6794],[1199142e6,.6803],[11992284e5,.6855],[11993148e5,.6824],[11994012e5,.6791],[11994876e5,.6783],[1199574e6,.6785],[11996604e5,.6785],[11997468e5,.6797],[11998332e5,.68],[11999196e5,.6803],[1200006e6,.6805],[12000924e5,.676],[12001788e5,.677],[12002652e5,.677],[12003516e5,.6736],[1200438e6,.6726],[12005244e5,.6764],[12006108e5,.6821],[12006972e5,.6831],[12007836e5,.6842],[120087e7,.6842],[12009564e5,.6887],[12010428e5,.6903],[12011292e5,.6848],[12012156e5,.6824],[1201302e6,.6788],[12013884e5,.6814],[12014748e5,.6814],[12015612e5,.6797],[12016476e5,.6769],[1201734e6,.6765],[12018204e5,.6733],[12019068e5,.6729],[12019932e5,.6758],[12020796e5,.6758],[1202166e6,.675],[12022524e5,.678],[12023388e5,.6833],[12024252e5,.6856],[12025116e5,.6903],[1202598e6,.6896],[12026844e5,.6896],[12027708e5,.6882],[12028572e5,.6879],[12029436e5,.6862],[120303e7,.6852],[12031164e5,.6823],[12032028e5,.6813],[12032892e5,.6813],[12033756e5,.6822],[1203462e6,.6802],[12035484e5,.6802],[12036348e5,.6784],[12037212e5,.6748],[12038076e5,.6747],[1203894e6,.6747],[12039804e5,.6748],[12040668e5,.6733],[12041532e5,.665],[12042396e5,.6611],[1204326e6,.6583],[12044124e5,.659],[12044988e5,.659],[12045852e5,.6581],[12046716e5,.6578],[1204758e6,.6574],[12048444e5,.6532],[12049308e5,.6502],[12050172e5,.6514],[12051036e5,.6514],[120519e7,.6507],[12052764e5,.651],[12053628e5,.6489],[12054492e5,.6424],[12055356e5,.6406],[1205622e6,.6382],[12057084e5,.6382],[12057948e5,.6341],[12058812e5,.6344],[12059676e5,.6378],[1206054e6,.6439],[12061404e5,.6478],[12062268e5,.6481],[12063132e5,.6481],[12063996e5,.6494],[1206486e6,.6438],[12065724e5,.6377],[12066588e5,.6329],[12067452e5,.6336],[12068316e5,.6333],[12069144e5,.6333],[12070008e5,.633],[12070872e5,.6371],[12071736e5,.6403],[120726e7,.6396],[12073464e5,.6364],[12074328e5,.6356],[12075192e5,.6356],[12076056e5,.6368],[1207692e6,.6357],[12077784e5,.6354],[12078648e5,.632],[12079512e5,.6332],[12080376e5,.6328],[1208124e6,.6331],[12082104e5,.6342],[12082968e5,.6321],[12083832e5,.6302],[12084696e5,.6278],[1208556e6,.6308],[12086424e5,.6324],[12087288e5,.6324],[12088152e5,.6307],[12089016e5,.6277],[1208988e6,.6269],[12090744e5,.6335],[12091608e5,.6392],[12092472e5,.64],[12093336e5,.6401],[120942e7,.6396],[12095064e5,.6407],[12095928e5,.6423],[12096792e5,.6429],[12097656e5,.6472],[1209852e6,.6485],[12099384e5,.6486],[12100248e5,.6467],[12101112e5,.6444],[12101976e5,.6467],[1210284e6,.6509],[12103704e5,.6478],[12104568e5,.6461],[12105432e5,.6461],[12106296e5,.6468],[1210716e6,.6449],[12108024e5,.647],[12108888e5,.6461],[12109752e5,.6452],[12110616e5,.6422],[1211148e6,.6422],[12112344e5,.6425],[12113208e5,.6414],[12114072e5,.6366],[12114936e5,.6346],[121158e7,.635],[12116664e5,.6346],[12117528e5,.6346],[12118392e5,.6343],[12119256e5,.6346],[1212012e6,.6379],[12120984e5,.6416],[12121848e5,.6442],[12122712e5,.6431],[12123576e5,.6431],[1212444e6,.6435],[12125304e5,.644],[12126168e5,.6473],[12127032e5,.6469],[12127896e5,.6386],[1212876e6,.6356],[12129624e5,.634],[12130488e5,.6346],[12131352e5,.643],[12132216e5,.6452],[1213308e6,.6467],[12133944e5,.6506],[12134808e5,.6504],[12135672e5,.6503],[12136536e5,.6481],[121374e7,.6451],[12138264e5,.645],[12139128e5,.6441],[12139992e5,.6414],[12140856e5,.6409],[1214172e6,.6409],[12142584e5,.6428],[12143448e5,.6431],[12144312e5,.6418],[12145176e5,.6371],[1214604e6,.6349],[12146904e5,.6333],[12147768e5,.6334],[12148632e5,.6338],[12149496e5,.6342],[1215036e6,.632],[12151224e5,.6318],[12152088e5,.637],[12152952e5,.6368],[12153816e5,.6368],[1215468e6,.6383],[12155544e5,.6371],[12156408e5,.6371],[12157272e5,.6355],[12158136e5,.632],[12159e8,.6277],[12159864e5,.6276],[12160728e5,.6291],[12161592e5,.6274],[12162456e5,.6293],[1216332e6,.6311],[12164184e5,.631],[12165048e5,.6312],[12165912e5,.6312],[12166776e5,.6304],[1216764e6,.6294],[12168504e5,.6348],[12169368e5,.6378],[12170232e5,.6368],[12171096e5,.6368],[1217196e6,.6368],[12172824e5,.636],[12173688e5,.637],[12174552e5,.6418],[12175416e5,.6411],[1217628e6,.6435],[12177144e5,.6427],[12178008e5,.6427],[12178872e5,.6419],[12179736e5,.6446],[121806e7,.6468],[12181464e5,.6487],[12182328e5,.6594],[12183192e5,.6666],[12184056e5,.6666],[1218492e6,.6678],[12185784e5,.6712],[12186648e5,.6705],[12187512e5,.6718],[12188376e5,.6784],[1218924e6,.6811],[12190104e5,.6811],[12190968e5,.6794],[12191832e5,.6804],[12192696e5,.6781],[1219356e6,.6756],[12194424e5,.6735],[12195288e5,.6763],[12196152e5,.6762],[12197016e5,.6777],[1219788e6,.6815],[12198744e5,.6802],[12199608e5,.678],[12200472e5,.6796],[12201336e5,.6817],[122022e7,.6817],[12203064e5,.6832],[12203928e5,.6877],[12204792e5,.6912],[12205656e5,.6914],[1220652e6,.7009],[12207384e5,.7012],[12208248e5,.701],[12209112e5,.7005]].map(function(e,o){o%8==0&&exchangerates.push(e)}),c("right"),$("button").click(function(){c($(this).text())})}e(),$(document).on("themechange",function(){e()})}),$(function(){if(!$("#dashboard-visits-chart").length)return!1;a();var o=null,t="visits";function r(e){var o="#dashboard-"+e+"-chart";switch($(o).has("svg").length&&$(o).empty(),e){case"visits":a();break;case"downloads":Morris.Bar({element:"dashboard-downloads-chart",data:[{year:"2006",downloads:1300},{year:"2007",downloads:1526},{year:"2008",downloads:2e3},{year:"2009",downloads:1800},{year:"2010",downloads:1650},{year:"2011",downloads:620},{year:"2012",downloads:1e3},{year:"2013",downloads:1896},{year:"2014",downloads:850},{year:"2015",downloads:1500}],xkey:"year",ykeys:["downloads"],labels:["Downloads"],hideHover:"auto",resize:!0,barColors:[config.chart.colorPrimary.toString(),tinycolor(config.chart.colorPrimary.toString()).darken(10).toString()]})}}function a(){Morris.Line({element:"dashboard-visits-chart",data:[{x:"2015-09-01",y:70},{x:"2015-09-02",y:75},{x:"2015-09-03",y:50},{x:"2015-09-04",y:75},{x:"2015-09-05",y:50},{x:"2015-09-06",y:75},{x:"2015-09-07",y:86}],xkey:"x",ykeys:["y"],ymin:"auto 40",labels:["Visits"],xLabels:"day",hideHover:"auto",yLabelFormat:function(e){return e===parseInt(e,10)?e:""},resize:!0,lineColors:[config.chart.colorSecondary.toString()],pointFillColors:[config.chart.colorPrimary.toString()]})}$('a[data-toggle="tab"]').on("shown.bs.tab",function(e){o=e.target,r(t=$(o).attr("href").replace("#",""))}),$(document).on("themechange",function(){r(t)})}),$(function(){if(!$("#morris-one-line-chart").length)return!1;function e(){$("#morris-one-line-chart").empty(),Morris.Line({element:"morris-one-line-chart",data:[{year:"2008",value:5},{year:"2009",value:10},{year:"2010",value:8},{year:"2011",value:22},{year:"2012",value:8},{year:"2014",value:10},{year:"2015",value:5}],xkey:"year",ykeys:["value"],resize:!0,lineWidth:4,labels:["Value"],lineColors:[config.chart.colorPrimary.toString()],pointSize:5}),$("#morris-area-chart").empty(),Morris.Area({element:"morris-area-chart",data:[{period:"2010 Q1",iphone:2666,ipad:null,itouch:2647},{period:"2010 Q2",iphone:2778,ipad:2294,itouch:2441},{period:"2010 Q3",iphone:4912,ipad:1969,itouch:2501},{period:"2010 Q4",iphone:3767,ipad:3597,itouch:5689},{period:"2011 Q1",iphone:6810,ipad:1914,itouch:2293},{period:"2011 Q2",iphone:5670,ipad:4293,itouch:1881},{period:"2011 Q3",iphone:4820,ipad:3795,itouch:1588},{period:"2011 Q4",iphone:15073,ipad:5967,itouch:5175},{period:"2012 Q1",iphone:10687,ipad:4460,itouch:2028},{period:"2012 Q2",iphone:8432,ipad:5713,itouch:1791}],xkey:"period",ykeys:["iphone","ipad","itouch"],labels:["iPhone","iPad","iPod Touch"],pointSize:2,hideHover:"auto",resize:!0,lineColors:[tinycolor(config.chart.colorPrimary.toString()).lighten(10).toString(),tinycolor(config.chart.colorPrimary.toString()).darken(10).toString(),config.chart.colorPrimary.toString()],lineWidth:2,pointSize:1}),$("#morris-donut-chart").empty(),Morris.Donut({element:"morris-donut-chart",data:[{label:"Download Sales",value:12},{label:"In-Store Sales",value:30},{label:"Mail-Order Sales",value:20}],resize:!0,colors:[tinycolor(config.chart.colorPrimary.toString()).lighten(10).toString(),tinycolor(config.chart.colorPrimary.toString()).darken(10).toString(),config.chart.colorPrimary.toString()]}),$("#morris-bar-chart").empty(),Morris.Bar({element:"morris-bar-chart",data:[{y:"2006",a:60,b:50},{y:"2007",a:75,b:65},{y:"2008",a:50,b:40},{y:"2009",a:75,b:65},{y:"2010",a:50,b:40},{y:"2011",a:75,b:65},{y:"2012",a:100,b:90}],xkey:"y",ykeys:["a","b"],labels:["Series A","Series B"],hideHover:"auto",resize:!0,barColors:[config.chart.colorPrimary.toString(),tinycolor(config.chart.colorPrimary.toString()).darken(10).toString()]}),$("#morris-line-chart").empty(),Morris.Line({element:"morris-line-chart",data:[{y:"2006",a:100,b:90},{y:"2007",a:75,b:65},{y:"2008",a:50,b:40},{y:"2009",a:75,b:65},{y:"2010",a:50,b:40},{y:"2011",a:75,b:65},{y:"2012",a:100,b:90}],xkey:"y",ykeys:["a","b"],labels:["Series A","Series B"],hideHover:"auto",resize:!0,lineColors:[config.chart.colorPrimary.toString(),tinycolor(config.chart.colorPrimary.toString()).darken(10).toString()]})}e(),$(document).on("themechange",function(){e()})}),$(function(){var e=$("#dashboard-sales-breakdown-chart");if(!e.length)return!1;function o(){e.empty(),Morris.Donut({element:"dashboard-sales-breakdown-chart",data:[{label:"Download Sales",value:12},{label:"In-Store Sales",value:30},{label:"Mail-Order Sales",value:20}],resize:!0,colors:[tinycolor(config.chart.colorPrimary.toString()).lighten(10).toString(),tinycolor(config.chart.colorPrimary.toString()).darken(8).toString(),config.chart.colorPrimary.toString()]}),setSameHeights(e.closest(".sameheight-container"))}o(),$(document).on("themechange",function(){o()})}),$(function(){function e(){$(".dashboard-page .items .sparkline").each(function(){var e=$(this).data("type");if($(this).data("data"))var o=$(this).data("data").split(",").map(function(e){return 0<e.indexOf(":")?e.split(":"):e});else{o=[];for(var t=0;t<17;t++)o.push(Math.round(100*Math.random()))}$(this).sparkline(o,{barColor:config.chart.colorPrimary.toString(),height:$(this).height(),type:e})})}e(),$(document).on("themechange",function(){e()})}),$(function(){var r=$("#dashboard-sales-map");if(!r.length)return!1;function e(){r.empty();var e=config.chart.colorPrimary.toHexString(),o=tinycolor(config.chart.colorPrimary.toString()).darken(40).toHexString(),t=tinycolor(config.chart.colorPrimary.toString()).darken(10).toHexString();r.vectorMap({map:"world_en",backgroundColor:"transparent",color:"#E5E3E5",hoverOpacity:.7,selectedColor:t,enableZoom:!0,showTooltip:!0,values:{us:2e3,ru:2e3,gb:1e4,fr:1e4,de:1e4,cn:1e4,in:1e4,sa:1e4,ca:1e4,br:5e3,au:5e3},scaleColors:[e,o],normalizeFunction:"linear"})}e(),$(document).on("themechange",function(){e()})}),$(function(){$(".actions-list > li").on("click",".check",function(e){e.preventDefault(),$(this).parents(".tasks-item").find(".checkbox").prop("checked",!0),removeActionList()})}),$(function(){if(!$(".form-control").length)return!1;$(".form-control").focus(function(){$(this).siblings(".input-group-addon").addClass("focus")}),$(".form-control").blur(function(){$(this).siblings(".input-group-addon").removeClass("focus")})}),$(function(){return;new Sortable($(".images-container").get(0),{animation:150,handle:".control-btn.move",draggable:".image-container",onMove:function(e){if($(e.related).hasClass("add-image"))return!1}});$controlsButtons=$(".controls"),$controlsButtonsStar=$controlsButtons.find(".star"),$controlsButtonsRemove=$controlsButtons.find(".remove"),$controlsButtonsStar.on("click",function(e){e.preventDefault(),$controlsButtonsStar.removeClass("active"),$controlsButtonsStar.parents(".image-container").removeClass("main"),$(this).addClass("active"),$(this).parents(".image-container").addClass("main")})}),$(function(){if(!$("#select-all-items").length)return!1;function e(){$(".items-list-page .sparkline").each(function(){for(var e=$(this).data("type"),o=[],t=0;t<17;t++)o.push(Math.round(100*Math.random()));$(this).sparkline(o,{barColor:config.chart.colorPrimary.toString(),height:$(this).height(),type:e})})}$("#select-all-items").on("change",function(){var e=$(this).children(":checkbox").get(0);$(this).parents("li").siblings().find(":checkbox").prop("checked",e.checked).val(e.checked).change()}),e(),$(document).on("themechange",function(){e()})}),$(function(){$(".wyswyg").each(function(){var e=$(this).find(".editor"),o=$(this).find(".toolbar");new Quill(e.get(0),{theme:"snow",modules:{toolbar:o.get(0)}})})}),$(function(){if(0 && $("#sidebar-menu, #customize-menu").metisMenu({activeClass:"open"}),$("#sidebar-collapse-btn").on("click",function(e){e.preventDefault(),$("#app").toggleClass("sidebar-open")}),$("#sidebar-overlay").on("click",function(){$("#app").removeClass("sidebar-open")}),
    0/*$.browser.mobile*/)
{var e=$("#app ");$("#sidebar-mobile-menu-handle ").swipe({swipeLeft:function(){e.hasClass("sidebar-open")&&e.removeClass("sidebar-open")},swipeRight:function(){e.hasClass("sidebar-open")||e.addClass("sidebar-open")},triggerOnTouchEnd:!1})}});var modalMedia={$el:$("#modal-media"),result:{},options:{},open:function(e){e=e||{},this.options=e,this.$el.modal("show")},close:function(){$.isFunction(this.options.beforeClose)&&this.options.beforeClose(this.result),this.$el.modal("hide"),$.isFunction(this.options.afterClose)&&this.options.beforeClose(this.result)}};$(function(){var e,t=((e=localStorage.getItem("themeSettings")?JSON.parse(localStorage.getItem("themeSettings")):{}).headerPosition=e.headerPosition||"",e.sidebarPosition=e.sidebarPosition||"",e.footerPosition=e.footerPosition||"",e),o=$("#app"),r=$("#theme-style"),a=$("#customize-menu"),i=a.find(".color-item"),n=a.find(".radio");function s(){(function(){t.themeName?r.attr("href","css/app-"+t.themeName+".css"):r.attr("href","css/app.css");return o.removeClass("header-fixed footer-fixed sidebar-fixed"),o.addClass(t.headerPosition),o.addClass(t.footerPosition),o.addClass(t.sidebarPosition),o})().delay(config.delayTime).queue(function(e){config.chart.colorPrimary=tinycolor($ref.find(".chart .color-primary").css("color")),config.chart.colorSecondary=tinycolor($ref.find(".chart .color-secondary").css("color")),i.each(function(){$(this).data("theme")===t.themeName?$(this).addClass("active"):$(this).removeClass("active")}),n.each(function(){var e=$(this).prop("name"),o=$(this).val();t[e]===o?$(this).prop("checked",!0):$(this).prop("checked",!1)}),localStorage.setItem("themeSettings",JSON.stringify(t)),$(document).trigger("themechange"),e()})}s(),i.on("click",function(){t.themeName=$(this).data("theme"),s()}),n.on("click",function(){var e=$(this).prop("name"),o=$(this).val();t[e]=o,s()})}),$(function(){$("body").addClass("loaded")}),NProgress.start(),NProgress.done();