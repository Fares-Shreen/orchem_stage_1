import{n as s,t as r}from"./chunk-B6Fy8hbW.js";import{Hn as mh,It as YI,On as ie,Vt as _d,Yn as ph,Yt as bP,_n as fh,_t as Sd,bn as fw,bt as TP,ct as QI,dt as R$1,in as dI,j as Gw,on as dh,qn as oh,tt as Ov,xn as g}from"./chunk-D8TOgfCq.js";import{i as So}from"./main-KLJSWVLY.js";function y2(c,l){(l==null||l>c.length)&&(l=c.length);for(var a=0,e=Array(l);a<l;a++)e[a]=c[a];return e}function A3(c){if(Array.isArray(c))return c}function P3(c){if(Array.isArray(c))return y2(c)}function F3(c,l){if(!(c instanceof l))throw new TypeError(`Cannot call a class as a function`)}function d1(c,l){for(var a=0;a<l.length;a++){var e=l[a];e.enumerable=e.enumerable||!1,e.configurable=!0,`value`in e&&(e.writable=!0),Object.defineProperty(c,$1(e.key),e)}}function T3(c,l,a){return l&&d1(c.prototype,l),a&&d1(c,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function n2(c,l){var a=typeof Symbol<`u`&&c[Symbol.iterator]||c[`@@iterator`];if(!a){if(Array.isArray(c)||(a=O2(c))||l&&c&&typeof c.length==`number`){a&&(c=a);var e=0,r=function(){};return{s:r,n:function(){return e>=c.length?{done:!0}:{done:!1,value:c[e++]}},e:function(f){throw f},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,s=!0,n=!1;return{s:function(){a=a.call(c)},n:function(){var f=a.next();return s=f.done,f},e:function(f){n=!0,i=f},f:function(){try{s||a.return==null||a.return()}finally{if(n)throw i}}}}function p(c,l,a){return(l=$1(l))in c?Object.defineProperty(c,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[l]=a,c}function D3(c){if(typeof Symbol<`u`&&c[Symbol.iterator]!=null||c[`@@iterator`]!=null)return Array.from(c)}function B3(c,l){var a=c==null?null:typeof Symbol<`u`&&c[Symbol.iterator]||c[`@@iterator`];if(a!=null){var e,r,i,s,n=[],f=!0,t=!1;try{if(i=(a=a.call(c)).next,l===0){if(Object(a)!==a)return;f=!1}else for(;!(f=(e=i.call(a)).done)&&(n.push(e.value),n.length!==l);f=!0);}catch(z){t=!0,r=z}finally{try{if(!f&&a.return!=null&&(s=a.return(),Object(s)!==s))return}finally{if(t)throw r}}return n}}function H3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M1(c,l){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);l&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),a.push.apply(a,e)}return a}function o(c){for(var l=1;l<arguments.length;l++){var a=arguments[l]!=null?arguments[l]:{};l%2?M1(Object(a),!0).forEach(function(e){p(c,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):M1(Object(a)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(a,e))})}return c}function u2(c,l){return A3(c)||B3(c,l)||O2(c,l)||H3()}function k(c){return P3(c)||D3(c)||O2(c)||R3()}function E3(c,l){if(typeof c!=`object`||!c)return c;var a=c[Symbol.toPrimitive];if(a!==void 0){var e=a.call(c,l||`default`);if(typeof e!=`object`)return e;throw new TypeError(`@@toPrimitive must return a primitive value.`)}return(l===`string`?String:Number)(c)}function $1(c){var l=E3(c,`string`);return typeof l==`symbol`?l:l+``}function t2(c){"@babel/helpers - typeof";return t2=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(l){return typeof l}:function(l){return l&&typeof Symbol==`function`&&l.constructor===Symbol&&l!==Symbol.prototype?`symbol`:typeof l},t2(c)}function O2(c,l){if(c){if(typeof c==`string`)return y2(c,l);var a={}.toString.call(c).slice(8,-1);return a===`Object`&&c.constructor&&(a=c.constructor.name),a===`Map`||a===`Set`?Array.from(c):a===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?y2(c,l):void 0}}var L1=function(){};var q2={};var X1={};var Y1=null;var K1={mark:L1,measure:L1};try{typeof window<`u`&&(q2=window),typeof document<`u`&&(X1=document),typeof MutationObserver<`u`&&(Y1=MutationObserver),typeof performance<`u`&&(K1=performance)}catch{}var v1=(q2.navigator||{}).userAgent;var g1=v1===void 0?``:v1;var R=q2;var L=X1;var h1=Y1;var e2=K1;R.document;var D=!!L.documentElement&&!!L.head&&typeof L.addEventListener==`function`&&typeof L.createElement==`function`;var Q1=~g1.indexOf(`MSIE`)||~g1.indexOf(`Trident/`);var r2;var U3=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/;var W3=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i;var J1={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}};var O3={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`};var Z1=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];var C=`classic`;var c2=`duotone`;var c4=`sharp`;var a4=`sharp-duotone`;var l4=`chisel`;var e4=`etch`;var r4=`graphite`;var i4=`jelly`;var s4=`jelly-duo`;var n4=`jelly-fill`;var f4=`mosaic`;var o4=`notdog`;var t4=`notdog-duo`;var m4=`pixel`;var z4=`slab`;var u4=`slab-duo`;var p4=`slab-press`;var d4=`slab-press-duo`;var M4=`thumbprint`;var L4=`utility`;var v4=`utility-duo`;var g4=`utility-fill`;var h4=`vellum`;var C4=`whiteboard`;var q3=`Classic`;var G3=`Duotone`;var j3=`Sharp`;var V3=`Sharp Duotone`;var _3=`Chisel`;var $3=`Etch`;var X3=`Graphite`;var Y3=`Jelly`;var K3=`Jelly Duo`;var Q3=`Jelly Fill`;var J3=`Mosaic`;var Z3=`Notdog`;var c0=`Notdog Duo`;var a0=`Pixel`;var l0=`Slab`;var e0=`Slab Duo`;var r0=`Slab Press`;var i0=`Slab Press Duo`;var s0=`Thumbprint`;var n0=`Utility`;var f0=`Utility Duo`;var o0=`Utility Fill`;var t0=`Vellum`;var m0=`Whiteboard`;var x4=[C,c2,c4,a4,l4,e4,r4,i4,s4,n4,f4,o4,t4,m4,z4,u4,p4,d4,M4,L4,v4,g4,h4,C4];r2={},p(p(p(p(p(p(p(p(p(p(r2,C,q3),c2,G3),c4,j3),a4,V3),l4,_3),e4,$3),r4,X3),i4,Y3),s4,K3),n4,Q3),p(p(p(p(p(p(p(p(p(p(r2,f4,J3),o4,Z3),t4,c0),m4,a0),z4,l0),u4,e0),p4,r0),d4,i0),M4,s0),L4,n0),p(p(p(p(r2,v4,f0),g4,o0),h4,t0),C4,m0);var z0={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}};var u0={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}};var p0=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]);var d0={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}};var b4=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`];var C1={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}};var M0=[`kit`];p(p({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var C0={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}};var x0={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}};var b0={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}};var x1={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}};var i2;var s2={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`};var S0=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];i2={},p(p(p(p(p(p(p(p(p(p(i2,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),p(p(p(p(p(p(p(p(p(p(i2,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),p(p(p(p(i2,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`);p(p({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var b6={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}};var S6={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]};var w2={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}};var S4=[`fa`,`fas`,`far`,`fal`,`fat`,`fad`,`fadr`,`fadl`,`fadt`,`fab`,`fass`,`fasr`,`fasl`,`fast`,`fasds`,`fasdr`,`fasdl`,`fasdt`,`faslr`,`faslpr`,`fasldr`,`faslpdr`,`fapr`,`fams`,`favs`,`fawsb`,`fatl`,`fans`,`fands`,`faes`,`fagt`,`fajr`,`fajfr`,`fajdr`,`facr`,`fausb`,`faudsb`,`faufsb`].concat(S0,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]);var y6=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`];var N4=[1,2,3,4,5,6,7,8,9,10];var w6=N4.concat([11,12,13,14,15,16,17,18,19,20]);var A6=[].concat(k(Object.keys(S6)),y6,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,s2.GROUP,s2.SWAP_OPACITY,s2.PRIMARY,s2.SECONDARY]).concat(N4.map(function(c){return``.concat(c,`x`)})).concat(w6.map(function(c){return`w-`.concat(c)}));var P6={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}};var F=`___FONT_AWESOME___`;var k2=16;var y4=`fa`;var w4=`svg-inline--fa`;var W=`data-fa-i2svg`;var A2=`data-fa-pseudo-element`;var F6=`data-fa-pseudo-element-pending`;var G2=`data-prefix`;var j2=`data-icon`;var b1=`fontawesome-i2svg`;var T6=`async`;var D6=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`];var k4=[`::before`,`::after`,`:before`,`:after`];var A4=(function(){try{return!0}catch{return!1}})();function a2(c){return new Proxy(c,{get:function(a,e){return e in a?a[e]:a[C]}})}var P4=o({},J1);P4[C]=o(o(o(o({},{"fa-duotone":`duotone`}),J1[C]),C1.kit),C1[`kit-duotone`]);var B6=a2(P4);var P2=o({},d0);P2[C]=o(o(o(o({},{duotone:`fad`}),P2[C]),x1.kit),x1[`kit-duotone`]);var S1=a2(P2);var F2=o({},w2);F2[C]=o(o({},F2[C]),b0.kit);var V2=a2(F2);var T2=o({},b6);T2[C]=o(o({},T2[C]),C0.kit);a2(T2);var H6=U3;var F4=`fa-layers-text`;var R6=W3;a2(o({},z0));var I6=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`];var C2=O3;var U6=[].concat(k(M0),k(A6));var Q=R.FontAwesomeConfig||{};function W6(c){var l=L.querySelector(`script[`+c+`]`);if(l)return l.getAttribute(c)}function O6(c){return c===``?!0:c===`false`?!1:c===`true`?!0:c}L&&typeof L.querySelector==`function`&&(N1=[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]],N1.forEach(function(c){var l=u2(c,2),a=l[0],e=l[1],r=O6(W6(a));r!=null&&(Q[e]=r)}));var N1;var T4={styleDefault:`solid`,familyDefault:C,cssPrefix:y4,replacementClass:w4,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Q.familyPrefix&&(Q.cssPrefix=Q.familyPrefix);var _=o(o({},T4),Q);_.autoReplaceSvg||(_.observeMutations=!1);var u={};Object.keys(T4).forEach(function(c){Object.defineProperty(u,c,{enumerable:!0,set:function(a){_[c]=a,J.forEach(function(e){return e(u)})},get:function(){return _[c]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(l){_.cssPrefix=l,J.forEach(function(a){return a(u)})},get:function(){return _.cssPrefix}});R.FontAwesomeConfig=u;var J=[];function q6(c){return J.push(c),function(){J.splice(J.indexOf(c),1)}}var H=k2;var A={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function G6(c){if(!(!c||!D)){var l=L.createElement(`style`);l.setAttribute(`type`,`text/css`),l.innerHTML=c;for(var a=L.head.childNodes,e=null,r=a.length-1;r>-1;r--){var i=a[r],s=(i.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(s)>-1&&(e=i)}return L.head.insertBefore(l,e),c}}var j6=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function y1(){for(var c=12,l=``;c-->0;)l+=j6[Math.random()*62|0];return l}function $(c){for(var l=[],a=(c||[]).length>>>0;a--;)l[a]=c[a];return l}function _2(c){return c.classList?$(c.classList):(c.getAttribute(`class`)||``).split(` `).filter(function(l){return l})}function D4(c){return``.concat(c).replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function V6(c){return Object.keys(c||{}).reduce(function(l,a){return l+``.concat(a,`="`).concat(D4(c[a]),`" `)},``).trim()}function p2(c){return Object.keys(c||{}).reduce(function(l,a){return l+``.concat(a,`: `).concat(c[a].trim(),`;`)},``)}function $2(c){return c.size!==A.size||c.x!==A.x||c.y!==A.y||c.rotate!==A.rotate||c.flipX||c.flipY}function _6(c){var l=c.transform,a=c.containerWidth,e=c.iconWidth,r={transform:`translate(`.concat(a/2,` 256)`)},i=`translate(`.concat(l.x*32,`, `).concat(l.y*32,`) `),s=`scale(`.concat(l.size/16*(l.flipX?-1:1),`, `).concat(l.size/16*(l.flipY?-1:1),`) `),n=`rotate(`.concat(l.rotate,` 0 0)`);return{outer:r,inner:{transform:``.concat(i,` `).concat(s,` `).concat(n)},path:{transform:`translate(`.concat(e/2*-1,` -256)`)}}}function $6(c){var l=c.transform,a=c.width,e=a===void 0?k2:a,r=c.height,i=r===void 0?k2:r,s=c.startCentered,n=s===void 0?!1:s,f=``;return n&&Q1?f+=`translate(`.concat(l.x/H-e/2,`em, `).concat(l.y/H-i/2,`em) `):n?f+=`translate(calc(-50% + `.concat(l.x/H,`em), calc(-50% + `).concat(l.y/H,`em)) `):f+=`translate(`.concat(l.x/H,`em, `).concat(l.y/H,`em) `),f+=`scale(`.concat(l.size/H*(l.flipX?-1:1),`, `).concat(l.size/H*(l.flipY?-1:1),`) `),f+=`rotate(`.concat(l.rotate,`deg) `),f}var X6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function B4(){var c=y4,l=w4,a=u.cssPrefix,e=u.replacementClass,r=X6;if(a!==c||e!==l){var i=new RegExp(`\\.`.concat(c,`\\-`),`g`),s=new RegExp(`\\--`.concat(c,`\\-`),`g`),n=new RegExp(`\\.`.concat(l),`g`);r=r.replace(i,`.`.concat(a,`-`)).replace(s,`--`.concat(a,`-`)).replace(n,`.`.concat(e))}return r}var w1=!1;function x2(){u.autoAddCss&&!w1&&(G6(B4()),w1=!0)}var Y6={mixout:function(){return{dom:{css:B4,insertCss:x2}}},hooks:function(){return{beforeDOMElementCreation:function(){x2()},beforeI2svg:function(){x2()}}}};var T=R||{};T[F]||(T[F]={});T[F].styles||(T[F].styles={});T[F].hooks||(T[F].hooks={});T[F].shims||(T[F].shims=[]);var w=T[F];var H4=[];var R4=function(){L.removeEventListener(`DOMContentLoaded`,R4),m2=1,H4.map(function(l){return l()})};var m2=!1;D&&(m2=(L.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(L.readyState),m2||L.addEventListener(`DOMContentLoaded`,R4));function K6(c){D&&(m2?setTimeout(c,0):H4.push(c))}function l2(c){var l=c.tag,a=c.attributes,e=a===void 0?{}:a,r=c.children,i=r===void 0?[]:r;return typeof c==`string`?D4(c):`<`.concat(l,` `).concat(V6(e),`>`).concat(i.map(l2).join(``),`</`).concat(l,`>`)}function k1(c,l,a){if(c&&c[l]&&c[l][a])return{prefix:l,iconName:a,icon:c[l][a]}}var Q6=function(l,a){return function(e,r,i,s){return l.call(a,e,r,i,s)}};var b2=function(l,a,e,r){var i=Object.keys(l),s=i.length,n=r!==void 0?Q6(a,r):a,f,t,z;for(e===void 0?(f=1,z=l[i[0]]):(f=0,z=e);f<s;f++)t=i[f],z=n(z,l[t],t,l);return z};function E4(c){return k(c).length!==1?null:c.codePointAt(0).toString(16)}function A1(c){return Object.keys(c).reduce(function(l,a){var e=c[a];return!!e.icon?l[e.iconName]=e.icon:l[a]=e,l},{})}function D2(c,l){var e=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=e===void 0?!1:e,i=A1(l);typeof w.hooks.addPack==`function`&&!r?w.hooks.addPack(c,A1(l)):w.styles[c]=o(o({},w.styles[c]||{}),i),c===`fas`&&D2(`fa`,l)}var Z=w.styles;var J6=w.shims;var I4=Object.keys(V2);var Z6=I4.reduce(function(c,l){return c[l]=Object.keys(V2[l]),c},{});var X2=null;var U4={};var W4={};var O4={};var q4={};var G4={};function c8(c){return~U6.indexOf(c)}function a8(c,l){var a=l.split(`-`),e=a[0],r=a.slice(1).join(`-`);return e===c&&r!==``&&!c8(r)?r:null}var j4=function(){var l=function(i){return b2(Z,function(s,n,f){return s[f]=b2(n,i,{}),s},{})};U4=l(function(r,i,s){if(i[3]&&(r[i[3]]=s),i[2])i[2].filter(function(f){return typeof f==`number`}).forEach(function(f){r[f.toString(16)]=s});return r}),W4=l(function(r,i,s){if(r[s]=s,i[2])i[2].filter(function(f){return typeof f==`string`}).forEach(function(f){r[f]=s});return r}),G4=l(function(r,i,s){var n=i[2];return r[s]=s,n.forEach(function(f){r[f]=s}),r});var a=`far`in Z||u.autoFetchSvg,e=b2(J6,function(r,i){var s=i[0],n=i[1],f=i[2];return n===`far`&&!a&&(n=`fas`),typeof s==`string`&&(r.names[s]={prefix:n,iconName:f}),typeof s==`number`&&(r.unicodes[s.toString(16)]={prefix:n,iconName:f}),r},{names:{},unicodes:{}});O4=e.names,q4=e.unicodes,X2=d2(u.styleDefault,{family:u.familyDefault})};q6(function(c){X2=d2(c.styleDefault,{family:u.familyDefault})});j4();function Y2(c,l){return(U4[c]||{})[l]}function l8(c,l){return(W4[c]||{})[l]}function U(c,l){return(G4[c]||{})[l]}function V4(c){return O4[c]||{prefix:null,iconName:null}}function e8(c){var l=q4[c],a=Y2(`fas`,c);return l||(a?{prefix:`fas`,iconName:a}:null)||{prefix:null,iconName:null}}function E(){return X2}var _4=function(){return{prefix:null,iconName:null,rest:[]}};function r8(c){var l=C,a=I4.reduce(function(e,r){return e[r]=``.concat(u.cssPrefix,`-`).concat(r),e},{});return x4.forEach(function(e){(c.includes(a[e])||c.some(function(r){return Z6[e].includes(r)}))&&(l=e)}),l}function d2(c){var a=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,e=a===void 0?C:a,r=B6[e][c];if(e===c2&&!c)return`fad`;var i=S1[e][c]||S1[e][r],s=c in w.styles?c:null;return i||s||null}function i8(c){var l=[],a=null;return c.forEach(function(e){var r=a8(u.cssPrefix,e);r?a=r:e&&l.push(e)}),{iconName:a,rest:l}}function P1(c){return c.sort().filter(function(l,a,e){return e.indexOf(l)===a})}var F1=S4.concat(b4);function M2(c){var a=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,e=a===void 0?!1:a,r=null,i=P1(c.filter(function(d){return F1.includes(d)})),s=P1(c.filter(function(d){return!F1.includes(d)})),t=u2(i.filter(function(d){return r=d,!Z1.includes(d)}),1)[0],z=t===void 0?null:t,m=r8(i),M=o(o({},i8(s)),{},{prefix:d2(z,{family:m})});return o(o(o({},M),o8({values:c,family:m,styles:Z,config:u,canonical:M,givenPrefix:r})),s8(e,r,M))}function s8(c,l,a){var e=a.prefix,r=a.iconName;if(c||!e||!r)return{prefix:e,iconName:r};var i=l===`fa`?V4(r):{},s=U(e,r);return r=i.iconName||s||r,e=i.prefix||e,e===`far`&&!Z.far&&Z.fas&&!u.autoFetchSvg&&(e=`fas`),{prefix:e,iconName:r}}var n8=x4.filter(function(c){return c!==C||c!==c2});var f8=Object.keys(w2).filter(function(c){return c!==C}).map(function(c){return Object.keys(w2[c])}).flat();function o8(c){var l=c.values,a=c.family,e=c.canonical,r=c.givenPrefix,i=r===void 0?``:r,s=c.styles,n=s===void 0?{}:s,f=c.config,t=f===void 0?{}:f,z=a===c2,m=l.includes(`fa-duotone`)||l.includes(`fad`),M=t.familyDefault===`duotone`,d=e.prefix===`fad`||e.prefix===`fa-duotone`;if(!z&&(m||M||d)&&(e.prefix=`fad`),(l.includes(`fa-brands`)||l.includes(`fab`))&&(e.prefix=`fab`),!e.prefix&&n8.includes(a)){if(Object.keys(n).find(function(x){return f8.includes(x)})||t.autoFetchSvg)e.prefix=p0.get(a).defaultShortPrefixId,e.iconName=U(e.prefix,e.iconName)||e.iconName}return(e.prefix===`fa`||i===`fa`)&&(e.prefix=E()||`fas`),e}var t8=(function(){function c(){F3(this,c),this.definitions={}}return T3(c,[{key:`add`,value:function(){for(var a=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(n){a.definitions[n]=o(o({},a.definitions[n]||{}),s[n]),D2(n,s[n]);var f=V2[C][n];f&&D2(f,s[n]),j4()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(a,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var s=r[i],n=s.prefix,f=s.iconName,t=s.icon,z=t[2];a[n]||(a[n]={}),z.length>0&&z.forEach(function(m){typeof m==`string`&&(a[n][m]=t)}),a[n][f]=t}),a}}])})();var T1=[];var j={};var V={};var m8=Object.keys(V);function z8(c,l){var a=l.mixoutsTo;return T1=c,j={},Object.keys(V).forEach(function(e){m8.indexOf(e)===-1&&delete V[e]}),T1.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]==`function`&&(a[s]=r[s]),t2(r[s])===`object`&&Object.keys(r[s]).forEach(function(n){a[s]||(a[s]={}),a[s][n]=r[s][n]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(s){j[s]||(j[s]=[]),j[s].push(i[s])})}e.provides&&e.provides(V)}),a}function B2(c,l){for(var a=arguments.length,e=new Array(a>2?a-2:0),r=2;r<a;r++)e[r-2]=arguments[r];return(j[c]||[]).forEach(function(s){l=s.apply(null,[l].concat(e))}),l}function O(c){for(var l=arguments.length,a=new Array(l>1?l-1:0),e=1;e<l;e++)a[e-1]=arguments[e];(j[c]||[]).forEach(function(i){i.apply(null,a)})}function I(){var c=arguments[0],l=Array.prototype.slice.call(arguments,1);return V[c]?V[c].apply(null,l):void 0}function H2(c){c.prefix===`fa`&&(c.prefix=`fas`);var l=c.iconName,a=c.prefix||E();if(l)return l=U(a,l)||l,k1($4.definitions,a,l)||k1(w.styles,a,l)}var $4=new t8;var u8=function(){u.autoReplaceSvg=!1,u.observeMutations=!1,O(`noAuto`)};var N={noAuto:u8,config:u,dom:{i2svg:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(O(`beforeI2svg`,l),I(`pseudoElements2svg`,l),I(`i2svg`,l)):Promise.reject(new Error(`Operation requires a DOM of some kind.`))},watch:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=l.autoReplaceSvgRoot;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,K6(function(){M8({autoReplaceSvgRoot:a}),O(`watch`,l)})}},parse:{icon:function(l){if(l===null)return null;if(t2(l)===`object`&&l.prefix&&l.iconName)return{prefix:l.prefix,iconName:U(l.prefix,l.iconName)||l.iconName};if(Array.isArray(l)&&l.length===2){var a=l[1].indexOf(`fa-`)===0?l[1].slice(3):l[1],e=d2(l[0]);return{prefix:e,iconName:U(e,a)||a}}if(typeof l==`string`&&(l.indexOf(``.concat(u.cssPrefix,`-`))>-1||l.match(H6))){var r=M2(l.split(` `),{skipLookups:!0});return{prefix:r.prefix||E(),iconName:U(r.prefix,r.iconName)||r.iconName}}if(typeof l==`string`){var i=E();return{prefix:i,iconName:U(i,l)||l}}}},library:$4,findIconDefinition:H2,toHtml:l2};var M8=function(){var a=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,e=a===void 0?L:a;(Object.keys(w.styles).length>0||u.autoFetchSvg)&&D&&u.autoReplaceSvg&&N.dom.i2svg({node:e})};function L2(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return l2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(D){var e=L.createElement(`div`);return e.innerHTML=c.html,e.children}}}),c}function L8(c){var l=c.children,a=c.main,e=c.mask,r=c.attributes,i=c.styles,s=c.transform;if($2(s)&&a.found&&!e.found){var t={x:a.width/a.height/2,y:.5};r.style=p2(o(o({},i),{},{"transform-origin":``.concat(t.x+s.x/16,`em `).concat(t.y+s.y/16,`em`)}))}return[{tag:`svg`,attributes:r,children:l}]}function v8(c){var l=c.prefix,a=c.iconName,e=c.children,r=c.attributes,i=c.symbol,s=i===!0?``.concat(l,`-`).concat(u.cssPrefix,`-`).concat(a):i;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:o(o({},r),{},{id:s}),children:e}]}]}function g8(c){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(a){return a in c})}function K2(c){var l=c.icons,a=l.main,e=l.mask,r=c.prefix,i=c.iconName,s=c.transform,n=c.symbol,f=c.maskId,t=c.extra,z=c.watchable,m=z===void 0?!1:z,M=e.found?e:a,d=M.width,g=M.height,v=[u.replacementClass,i?``.concat(u.cssPrefix,`-`).concat(i):``].filter(function(P){return t.classes.indexOf(P)===-1}).filter(function(P){return P!==``||!!P}).concat(t.classes).join(` `),x={children:[],attributes:o(o({},t.attributes),{},{"data-prefix":r,"data-icon":i,class:v,role:t.attributes.role||`img`,viewBox:`0 0 `.concat(d,` `).concat(g)})};!g8(t.attributes)&&!t.attributes[`aria-hidden`]&&(x.attributes[`aria-hidden`]=`true`),m&&(x.attributes[W]=``);var h=o(o({},x),{},{prefix:r,iconName:i,main:a,mask:e,maskId:f,transform:s,symbol:n,styles:o({},t.styles)}),S=e.found&&a.found?I(`generateAbstractMask`,h)||{children:[],attributes:{}}:I(`generateAbstractIcon`,h)||{children:[],attributes:{}},y=S.children,q=S.attributes;return h.children=y,h.attributes=q,n?v8(h):L8(h)}function D1(c){var l=c.content,a=c.width,e=c.height,r=c.transform,i=c.extra,s=c.watchable,n=s===void 0?!1:s,f=o(o({},i.attributes),{},{class:i.classes.join(` `)});n&&(f[W]=``);var t=o({},i.styles);$2(r)&&(t.transform=$6({transform:r,startCentered:!0,width:a,height:e}),t[`-webkit-transform`]=t.transform);var z=p2(t);z.length>0&&(f.style=z);var m=[];return m.push({tag:`span`,attributes:f,children:[l]}),m}function h8(c){var l=c.content,a=c.extra,e=o(o({},a.attributes),{},{class:a.classes.join(` `)}),r=p2(a.styles);r.length>0&&(e.style=r);var i=[];return i.push({tag:`span`,attributes:e,children:[l]}),i}var S2=w.styles;function R2(c){var l=c[0],a=c[1],i=u2(c.slice(4),1)[0],s=null;return Array.isArray(i)?s={tag:`g`,attributes:{class:``.concat(u.cssPrefix,`-`).concat(C2.GROUP)},children:[{tag:`path`,attributes:{class:``.concat(u.cssPrefix,`-`).concat(C2.SECONDARY),fill:`currentColor`,d:i[0]}},{tag:`path`,attributes:{class:``.concat(u.cssPrefix,`-`).concat(C2.PRIMARY),fill:`currentColor`,d:i[1]}}]}:s={tag:`path`,attributes:{fill:`currentColor`,d:i}},{found:!0,width:l,height:a,icon:s}}var C8={found:!1,width:512,height:512};function x8(c,l){!A4&&!u.showMissingIcons&&c&&console.error(`Icon with name "`.concat(c,`" and prefix "`).concat(l,`" is missing.`))}function E2(c,l){var a=l;return l===`fa`&&u.styleDefault!==null&&(l=E()),new Promise(function(e,r){if(a===`fa`){var i=V4(c)||{};c=i.iconName||c,l=i.prefix||l}if(c&&l&&S2[l]&&S2[l][c]){var s=S2[l][c];return e(R2(s))}x8(c,l),e(o(o({},C8),{},{icon:u.showMissingIcons&&c?I(`missingIconAbstract`)||{}:{}}))})}var B1=function(){};var I2=u.measurePerformance&&e2&&e2.mark&&e2.measure?e2:{mark:B1,measure:B1};var K=`FA "7.3.1"`;var b8=function(l){return I2.mark(``.concat(K,` `).concat(l,` begins`)),function(){return X4(l)}};var X4=function(l){I2.mark(``.concat(K,` `).concat(l,` ends`)),I2.measure(``.concat(K,` `).concat(l),``.concat(K,` `).concat(l,` begins`),``.concat(K,` `).concat(l,` ends`))};var Q2={begin:b8,end:X4};var f2=function(){};function H1(c){return typeof(c.getAttribute?c.getAttribute(W):null)==`string`}function S8(c){var l=c.getAttribute?c.getAttribute(G2):null,a=c.getAttribute?c.getAttribute(j2):null;return l&&a}function N8(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(u.replacementClass)}function y8(){if(u.autoReplaceSvg===!0)return o2.replace;return o2[u.autoReplaceSvg]||o2.replace}function w8(c){return L.createElementNS(`http://www.w3.org/2000/svg`,c)}function k8(c){return L.createElement(c)}function Y4(c){var a=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,e=a===void 0?c.tag===`svg`?w8:k8:a;if(typeof c==`string`)return L.createTextNode(c);var r=e(c.tag);Object.keys(c.attributes||[]).forEach(function(s){r.setAttribute(s,c.attributes[s])});return(c.children||[]).forEach(function(s){r.appendChild(Y4(s,{ceFn:e}))}),r}function A8(c){var l=` `.concat(c.outerHTML,` `);return l=``.concat(l,`Font Awesome fontawesome.com `),l}var o2={replace:function(l){var a=l[0];if(a.parentNode)if(l[1].forEach(function(r){a.parentNode.insertBefore(Y4(r),a)}),a.getAttribute(W)===null&&u.keepOriginalSource){var e=L.createComment(A8(a));a.parentNode.replaceChild(e,a)}else a.remove()},nest:function(l){var a=l[0],e=l[1];if(~_2(a).indexOf(u.replacementClass))return o2.replace(l);var r=new RegExp(``.concat(u.cssPrefix,`-.*`));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(` `).reduce(function(n,f){return f===u.replacementClass||f.match(r)?n.toSvg.push(f):n.toNode.push(f),n},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?a.removeAttribute(`class`):a.setAttribute(`class`,i.toNode.join(` `))}var s=e.map(function(n){return l2(n)}).join(`
`);a.setAttribute(W,``),a.innerHTML=s}};function R1(c){c()}function K4(c,l){var a=typeof l==`function`?l:f2;if(c.length===0)a();else{var e=R1;u.mutateApproach===T6&&(e=R.requestAnimationFrame||R1),e(function(){var r=y8(),i=Q2.begin(`mutate`);c.map(r),i(),a()})}}var J2=!1;function Q4(){J2=!0}function U2(){J2=!1}var z2=null;function E1(c){if(h1&&u.observeMutations){var l=c.treeCallback,a=l===void 0?f2:l,e=c.nodeCallback,r=e===void 0?f2:e,i=c.pseudoElementsCallback,s=i===void 0?f2:i,n=c.observeMutationsRoot,f=n===void 0?L:n;z2=new h1(function(t){if(!J2){var z=E();$(t).forEach(function(m){if(m.type===`childList`&&m.addedNodes.length>0&&!H1(m.addedNodes[0])&&(u.searchPseudoElements&&s(m.target),a(m.target)),m.type===`attributes`&&m.target.parentNode&&u.searchPseudoElements&&s([m.target],!0),m.type===`attributes`&&H1(m.target)&&~I6.indexOf(m.attributeName))if(m.attributeName===`class`&&S8(m.target)){var M=M2(_2(m.target)),d=M.prefix,g=M.iconName;m.target.setAttribute(G2,d||z),g&&m.target.setAttribute(j2,g)}else N8(m.target)&&r(m.target)})}}),D&&z2.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function P8(){z2&&z2.disconnect()}function F8(c){var l=c.getAttribute(`style`),a=[];return l&&(a=l.split(`;`).reduce(function(e,r){var i=r.split(`:`),s=i[0],n=i.slice(1);return s&&n.length>0&&(e[s]=n.join(`:`).trim()),e},{})),a}function T8(c){var l=c.getAttribute(`data-prefix`),a=c.getAttribute(`data-icon`),e=c.innerText!==void 0?c.innerText.trim():``,r=M2(_2(c));return r.prefix||(r.prefix=E()),l&&a&&(r.prefix=l,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=l8(r.prefix,c.innerText)||Y2(r.prefix,E4(c.innerText))),!r.iconName&&u.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function D8(c){return $(c.attributes).reduce(function(a,e){return a.name!==`class`&&a.name!==`style`&&(a[e.name]=e.value),a},{})}function B8(){return{iconName:null,prefix:null,transform:A,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function I1(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=T8(c),e=a.iconName,r=a.prefix,i=a.rest,s=D8(c),n=B2(`parseNodeAttributes`,{},c);return o({iconName:e,prefix:r,transform:A,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l.styleParser?F8(c):[],attributes:s}},n)}var H8=w.styles;function J4(c){var l=u.autoReplaceSvg===`nest`?I1(c,{styleParser:!1}):I1(c);return~l.extra.classes.indexOf(F4)?I(`generateLayersText`,c,l):I(`generateSvgReplacementMutation`,c,l)}function R8(){return[].concat(k(b4),k(S4))}function U1(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();var a=L.documentElement.classList,e=function(m){return a.add(``.concat(b1,`-`).concat(m))},r=function(m){return a.remove(``.concat(b1,`-`).concat(m))},i=u.autoFetchSvg?R8():Z1.concat(Object.keys(H8));i.includes(`fa`)||i.push(`fa`);var s=[`.`.concat(F4,`:not([`).concat(W,`])`)].concat(i.map(function(z){return`.`.concat(z,`:not([`).concat(W,`])`)})).join(`, `);if(s.length===0)return Promise.resolve();var n=[];try{n=$(c.querySelectorAll(s))}catch{}if(n.length>0)e(`pending`),r(`complete`);else return Promise.resolve();var f=Q2.begin(`onTree`),t=n.reduce(function(z,m){try{var M=J4(m);M&&z.push(M)}catch(d){A4||d.name===`MissingIcon`&&console.error(d)}return z},[]);return new Promise(function(z,m){Promise.all(t).then(function(M){K4(M,function(){e(`active`),e(`complete`),r(`pending`),typeof l==`function`&&l(),f(),z()})}).catch(function(M){f(),m(M)})})}function E8(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;J4(c).then(function(a){a&&K4([a],l)})}function I8(c){return function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(l||{}).icon?l:H2(l||{}),r=a.mask;return r&&(r=(r||{}).icon?r:H2(r||{})),c(e,o(o({},a),{},{mask:r}))}}var U8=function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.transform,r=e===void 0?A:e,i=a.symbol,s=i===void 0?!1:i,n=a.mask,f=n===void 0?null:n,t=a.maskId,z=t===void 0?null:t,m=a.classes,M=m===void 0?[]:m,d=a.attributes,g=d===void 0?{}:d,v=a.styles,x=v===void 0?{}:v;if(l){var h=l.prefix,S=l.iconName,y=l.icon;return L2(o({type:`icon`},l),function(){return O(`beforeDOMElementCreation`,{iconDefinition:l,params:a}),K2({icons:{main:R2(y),mask:f?R2(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:S,transform:o(o({},A),r),symbol:s,maskId:z,extra:{attributes:g,styles:x,classes:M}})})}};var W8={mixout:function(){return{icon:I8(U8)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=U1,a.nodeCallback=E8,a}}},provides:function(l){l.i2svg=function(a){var e=a.node,r=e===void 0?L:e,i=a.callback;return U1(r,i===void 0?function(){}:i)},l.generateSvgReplacementMutation=function(a,e){var r=e.iconName,i=e.prefix,s=e.transform,n=e.symbol,f=e.mask,t=e.maskId,z=e.extra;return new Promise(function(m,M){Promise.all([E2(r,i),f.iconName?E2(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(d){var g=u2(d,2),v=g[0],x=g[1];m([a,K2({icons:{main:v,mask:x},prefix:i,iconName:r,transform:s,symbol:n,maskId:t,extra:z,watchable:!0})])}).catch(M)})},l.generateAbstractIcon=function(a){var e=a.children,r=a.attributes,i=a.main,s=a.transform,n=a.styles,f=p2(n);f.length>0&&(r.style=f);var t;return $2(s)&&(t=I(`generateAbstractTransformGrouping`,{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),e.push(t||i.icon),{children:e,attributes:r}}}};var O8={mixout:function(){return{layer:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return L2({type:`layer`},function(){O(`beforeDOMElementCreation`,{assembler:a,params:e});var s=[];return a(function(n){Array.isArray(n)?n.map(function(f){s=s.concat(f.abstract)}):s=s.concat(n.abstract)}),[{tag:`span`,attributes:{class:[``.concat(u.cssPrefix,`-layers`)].concat(k(i)).join(` `)},children:s}]})}}}};var q8={mixout:function(){return{counter:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,i=r===void 0?null:r,s=e.classes,n=s===void 0?[]:s,f=e.attributes,t=f===void 0?{}:f,z=e.styles,m=z===void 0?{}:z;return L2({type:`counter`,content:a},function(){return O(`beforeDOMElementCreation`,{content:a,params:e}),h8({content:a.toString(),title:i,extra:{attributes:t,styles:m,classes:[``.concat(u.cssPrefix,`-layers-counter`)].concat(k(n))}})})}}}};var G8={mixout:function(){return{text:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?A:r,s=e.classes,n=s===void 0?[]:s,f=e.attributes,t=f===void 0?{}:f,z=e.styles,m=z===void 0?{}:z;return L2({type:`text`,content:a},function(){return O(`beforeDOMElementCreation`,{content:a,params:e}),D1({content:a,transform:o(o({},A),i),extra:{attributes:t,styles:m,classes:[``.concat(u.cssPrefix,`-layers-text`)].concat(k(n))}})})}}},provides:function(l){l.generateLayersText=function(a,e){var r=e.transform,i=e.extra,s=null,n=null;if(Q1){var f=parseInt(getComputedStyle(a).fontSize,10),t=a.getBoundingClientRect();s=t.width/f,n=t.height/f}return Promise.resolve([a,D1({content:a.innerHTML,width:s,height:n,transform:r,extra:i,watchable:!0})])}}};var Z4=new RegExp(`"`,`ug`);var W1=[1105920,1112319];var O1=o(o(o(o({},{FontAwesome:{normal:`fas`,400:`fas`}}),u0),P6),x0);var W2=Object.keys(O1).reduce(function(c,l){return c[l.toLowerCase()]=O1[l],c},{});var j8=Object.keys(W2).reduce(function(c,l){var a=W2[l];return c[l]=a[900]||k(Object.entries(a))[0][1],c},{});function V8(c){return E4(k(c.replace(Z4,``))[0]||``)}function _8(c){var l=c.getPropertyValue(`font-feature-settings`).includes(`ss01`),e=c.getPropertyValue(`content`).replace(Z4,``),r=e.codePointAt(0),i=r>=W1[0]&&r<=W1[1],s=e.length===2?e[0]===e[1]:!1;return i||s||l}function $8(c,l){var a=c.replace(/^['"]|['"]$/g,``).toLowerCase(),e=parseInt(l),r=isNaN(e)?`normal`:e;return(W2[a]||{})[r]||j8[a]}function q1(c,l){var a=``.concat(F6).concat(l.replace(`:`,`-`));return new Promise(function(e,r){if(c.getAttribute(a)!==null)return e();var s=$(c.children).filter(function(v2){return v2.getAttribute(A2)===l})[0],n=R.getComputedStyle(c,l),f=n.getPropertyValue(`font-family`),t=f.match(R6),z=n.getPropertyValue(`font-weight`),m=n.getPropertyValue(`content`);if(s&&!t)return c.removeChild(s),e();if(t&&m!==`none`&&m!==``){var M=n.getPropertyValue(`content`),d=$8(f,z),g=V8(M),v=t[0].startsWith(`FontAwesome`),x=_8(n),h=Y2(d,g),S=h;if(v){var y=e8(g);y.iconName&&y.prefix&&(h=y.iconName,d=y.prefix)}if(h&&!x&&(!s||s.getAttribute(G2)!==d||s.getAttribute(j2)!==S)){c.setAttribute(a,S),s&&c.removeChild(s);var q=B8(),P=q.extra;P.attributes[A2]=l,E2(h,d).then(function(v2){var w3=K2(o(o({},q),{},{icons:{main:v2,mask:_4()},prefix:d,iconName:S,extra:P,watchable:!0})),g2=L.createElementNS(`http://www.w3.org/2000/svg`,`svg`);l===`::before`?c.insertBefore(g2,c.firstChild):c.appendChild(g2),g2.outerHTML=w3.map(function(k3){return l2(k3)}).join(`
`),c.removeAttribute(a),e()}).catch(r)}else e()}else e()})}function X8(c){return Promise.all([q1(c,`::before`),q1(c,`::after`)])}function Y8(c){return c.parentNode!==document.head&&!~D6.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(A2)&&(!c.parentNode||c.parentNode.tagName!==`svg`)}var K8=function(l){return!!l&&k4.some(function(a){return l.includes(a)})};var Q8=function(l){if(!l)return[];var a=new Set,e=l.split(/,(?![^()]*\))/).map(function(f){return f.trim()});e=e.flatMap(function(f){return f.includes(`(`)?f:f.split(`,`).map(function(t){return t.trim()})});var r=n2(e),i;try{for(r.s();!(i=r.n()).done;){var s=i.value;if(K8(s)){var n=k4.reduce(function(f,t){return f.replace(t,``)},s);n!==``&&n!==`*`&&a.add(n)}}}catch(f){r.e(f)}finally{r.f()}return a};function G1(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(D){var a;if(l)a=c;else if(u.searchPseudoElementsFullScan)a=c.querySelectorAll(`*`);else{var e=new Set,r=n2(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var s=i.value;try{var n=n2(s.cssRules),f;try{for(n.s();!(f=n.n()).done;){var t=f.value,m=n2(Q8(t.selectorText)),M;try{for(m.s();!(M=m.n()).done;){var d=M.value;e.add(d)}}catch(v){m.e(v)}finally{m.f()}}}catch(v){n.e(v)}finally{n.f()}}catch(v){u.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: `.concat(s.href,` (`).concat(v.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(v){r.e(v)}finally{r.f()}if(!e.size)return;var g=Array.from(e).join(`, `);try{a=c.querySelectorAll(g)}catch{}}return new Promise(function(v,x){var h=$(a).filter(Y8).map(X8),S=Q2.begin(`searchPseudoElements`);Q4(),Promise.all(h).then(function(){S(),U2(),v()}).catch(function(){S(),U2(),x()})})}}var J8={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=G1,a}}},provides:function(l){l.pseudoElements2svg=function(a){var e=a.node,r=e===void 0?L:e;u.searchPseudoElements&&G1(r)}}};var j1=!1;var Z8={mixout:function(){return{dom:{unwatch:function(){Q4(),j1=!0}}}},hooks:function(){return{bootstrap:function(){E1(B2(`mutationObserverCallbacks`,{}))},noAuto:function(){P8()},watch:function(a){var e=a.observeMutationsRoot;j1?U2():E1(B2(`mutationObserverCallbacks`,{observeMutationsRoot:e}))}}}};var V1=function(l){return l.toLowerCase().split(` `).reduce(function(e,r){var i=r.toLowerCase().split(`-`),s=i[0],n=i.slice(1).join(`-`);if(s&&n===`h`)return e.flipX=!0,e;if(s&&n===`v`)return e.flipY=!0,e;if(n=parseFloat(n),isNaN(n))return e;switch(s){case`grow`:e.size=e.size+n;break;case`shrink`:e.size=e.size-n;break;case`left`:e.x=e.x-n;break;case`right`:e.x=e.x+n;break;case`up`:e.y=e.y-n;break;case`down`:e.y=e.y+n;break;case`rotate`:e.rotate=e.rotate+n;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})};var c5={mixout:function(){return{parse:{transform:function(a){return V1(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute(`data-fa-transform`);return r&&(a.transform=V1(r)),a}}},provides:function(l){l.generateAbstractTransformGrouping=function(a){var e=a.main,r=a.transform,i=a.containerWidth,s=a.iconWidth,n={transform:`translate(`.concat(i/2,` 256)`)},f=`translate(`.concat(r.x*32,`, `).concat(r.y*32,`) `),t=`scale(`.concat(r.size/16*(r.flipX?-1:1),`, `).concat(r.size/16*(r.flipY?-1:1),`) `),z=`rotate(`.concat(r.rotate,` 0 0)`),d={outer:n,inner:{transform:``.concat(f,` `).concat(t,` `).concat(z)},path:{transform:`translate(`.concat(s/2*-1,` -256)`)}};return{tag:`g`,attributes:o({},d.outer),children:[{tag:`g`,attributes:o({},d.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:o(o({},e.icon.attributes),d.path)}]}]}}}};var N2={x:0,y:0,width:`100%`,height:`100%`};function _1(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill=`black`),c}function a5(c){return c.tag===`g`?c.children:[c]}z8([Y6,W8,O8,q8,G8,J8,Z8,c5,{hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute(`data-fa-mask`),i=r?M2(r.split(` `).map(function(s){return s.trim()})):_4();return i.prefix||(i.prefix=E()),a.mask=i,a.maskId=e.getAttribute(`data-fa-mask-id`),a}}},provides:function(l){l.generateAbstractMask=function(a){var e=a.children,r=a.attributes,i=a.main,s=a.mask,n=a.maskId,f=a.transform,t=i.width,z=i.icon,m=s.width,M=s.icon,d=_6({transform:f,containerWidth:m,iconWidth:t}),g={tag:`rect`,attributes:o(o({},N2),{},{fill:`white`})},v=z.children?{children:z.children.map(_1)}:{},x={tag:`g`,attributes:o({},d.inner),children:[_1(o({tag:z.tag,attributes:o(o({},z.attributes),d.path)},v))]},h={tag:`g`,attributes:o({},d.outer),children:[x]},S=`mask-`.concat(n||y1()),y=`clip-`.concat(n||y1()),q={tag:`mask`,attributes:o(o({},N2),{},{id:S,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[g,h]},P={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:y},children:a5(M)},q]};return e.push(P,{tag:`rect`,attributes:o({fill:`currentColor`,"clip-path":`url(#`.concat(y,`)`),mask:`url(#`.concat(S,`)`)},N2)}),{children:e,attributes:r}}}},{provides:function(l){var a=!1;R.matchMedia&&(a=R.matchMedia(`(prefers-reduced-motion: reduce)`).matches),l.missingIconAbstract=function(){var e=[],r={fill:`currentColor`},i={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:o(o({},r),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var s=o(o({},i),{},{attributeName:`opacity`}),n={tag:`circle`,attributes:o(o({},r),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return a||n.children.push({tag:`animate`,attributes:o(o({},i),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:o(o({},s),{},{values:`1;0;1;1;0;1;`})}),e.push(n),e.push({tag:`path`,attributes:o(o({},r),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:a?[]:[{tag:`animate`,attributes:o(o({},s),{},{values:`1;0;0;0;0;1;`})}]}),a||e.push({tag:`path`,attributes:o(o({},r),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:o(o({},s),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute(`data-fa-symbol`);return a.symbol=r===null?!1:r===``?!0:r,a}}}}],{mixoutsTo:N});N.noAuto;var c3=N.config;N.library;var a3=N.dom;var l3=N.parse;N.findIconDefinition;N.toHtml;var e3=N.icon;N.layer;N.text;N.counter;var o5=[`*`];var t5=(()=>{class c{defaultPrefix=`fas`;fallbackIcon=null;fixedWidth;set autoAddCss(a){c3.autoAddCss=a,this._autoAddCss=a}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static ɵfac=function(e){return new(e||c)};static ɵprov=R$1({token:c,factory:c.ɵfac,providedIn:`root`})}return c})();var m5=(()=>{class c{definitions={};addIcons(...a){for(let e of a){e.prefix in this.definitions||(this.definitions[e.prefix]={}),this.definitions[e.prefix][e.iconName]=e;for(let r of e.icon[2])typeof r==`string`&&(this.definitions[e.prefix][r]=e)}}addIconPacks(...a){for(let e of a){let r=Object.keys(e).map(i=>e[i]);this.addIcons(...r)}}getIconDefinition(a,e){return a in this.definitions&&e in this.definitions[a]?this.definitions[a][e]:null}static ɵfac=function(e){return new(e||c)};static ɵprov=R$1({token:c,factory:c.ɵfac,providedIn:`root`})}return c})();var z5=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)};var u5=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")};var i3=c=>c!=null&&(c===90||c===180||c===270||c===`90`||c===`180`||c===`270`);var p5=c=>{let l=i3(c.rotate),a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith(`spin`),"fa-spin":c.animation===`spin`||c.animation===`spin-reverse`,"fa-spin-pulse":c.animation===`spin-pulse`||c.animation===`spin-pulse-reverse`,"fa-spin-reverse":c.animation===`spin-reverse`||c.animation===`spin-pulse-reverse`,"fa-pulse":c.animation===`spin-pulse`||c.animation===`spin-pulse-reverse`,"fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip===`horizontal`||c.flip===`both`,"fa-flip-vertical":c.flip===`vertical`||c.flip===`both`,[`fa-${c.size}`]:c.size!=null,[`fa-rotate-${c.rotate}`]:l,"fa-rotate-by":c.rotate!=null&&!l,[`fa-pull-${c.pull}`]:c.pull!=null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(e=>a[e]?e:null).filter(e=>e!=null)};var Z2=new WeakSet;var r3=`fa-auto-css`;function d5(c,l,a){if(!l.autoAddCss||Z2.has(c))return;if(c.getElementById(r3)!=null){l.autoAddCss=!1,Z2.add(c);return}let e=c.createElement(`style`);e.setAttribute(`type`,`text/css`),e.setAttribute(`id`,r3),a&&e.setAttribute(`nonce`,a),e.innerHTML=a3.css();let r=c.head.childNodes,i=null;for(let s=r.length-1;s>-1;s--){let n=r[s],f=n.nodeName.toUpperCase();[`STYLE`,`LINK`].indexOf(f)>-1&&(i=n)}c.head.insertBefore(e,i),l.autoAddCss=!1,Z2.add(c)}var M5=c=>c.prefix!==void 0&&c.iconName!==void 0;var L5=(c,l)=>M5(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:l,iconName:c};var v5=(()=>{class c{stackItemSize=bP(`1x`);size=bP();_effect=Sd(()=>{if(this.size())throw new Error(`fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.`)});static ɵfac=function(e){return new(e||c)};static ɵdir=oh({type:c,selectors:[[`fa-icon`,`stackItemSize`,``],[`fa-duotone-icon`,`stackItemSize`,``]],inputs:{stackItemSize:[1,`stackItemSize`],size:[1,`size`]}})}return c})();var g5=(()=>{class c{size=bP();classes=Gw(()=>{let a=this.size();return s(r({},a?{[`fa-${a}`]:!0}:{}),{"fa-stack":!0})});static ɵfac=function(e){return new(e||c)};static ɵcmp=dI({type:c,selectors:[[`fa-stack`]],hostVars:2,hostBindings:function(e,r){e&2&&fw(r.classes())},inputs:{size:[1,`size`]},ngContentSelectors:o5,decls:1,vars:0,template:function(e,r){e&1&&(YI(),QI(0))},encapsulation:2})}return c})();var s3=(()=>{class c{icon=TP();title=TP();animation=TP();mask=TP();flip=TP();size=TP();pull=TP();border=TP();inverse=TP();symbol=TP();rotate=TP();fixedWidth=TP();transform=TP();a11yRole=TP();renderedIconHTML=Gw(()=>{let a=this.icon()??this.config.fallbackIcon;if(!a)return u5(),``;let e=this.findIconDefinition(a);if(!e)return``;let r=this.buildParams();d5(this.document,this.config,this.cspNonce);let i=e3(e,r);return this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))});cspNonce=g(_d);document=g(ie);sanitizer=g(So);config=g(t5);iconLibrary=g(m5);stackItem=g(v5,{optional:!0});stack=g(g5,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error(`FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.`)}findIconDefinition(a){let e=L5(a,this.config.defaultPrefix);if(`icon`in e)return e;return this.iconLibrary.getIconDefinition(e.prefix,e.iconName)??(z5(e),null)}buildParams(){let a=this.fixedWidth(),e={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof a==`boolean`?a:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},r=this.transform(),i=typeof r==`string`?l3.transform(r):r,s=this.mask(),n=s!=null?this.findIconDefinition(s):null,f={},t=this.a11yRole();t!=null&&(f.role=t);let z={};return e.rotate!=null&&!i3(e.rotate)&&(z[`--fa-rotate-angle`]=`${e.rotate}`),{title:this.title(),transform:i,classes:p5(e),mask:n??void 0,symbol:this.symbol(),attributes:f,styles:z}}static ɵfac=function(e){return new(e||c)};static ɵcmp=dI({type:c,selectors:[[`fa-icon`]],hostAttrs:[1,`ng-fa-icon`],hostVars:2,hostBindings:function(e,r){e&2&&(mh(`innerHTML`,r.renderedIconHTML(),Ov),dh(`title`,r.title()??void 0))},inputs:{icon:[1,`icon`],title:[1,`title`],animation:[1,`animation`],mask:[1,`mask`],flip:[1,`flip`],size:[1,`size`],pull:[1,`pull`],border:[1,`border`],inverse:[1,`inverse`],symbol:[1,`symbol`],rotate:[1,`rotate`],fixedWidth:[1,`fixedWidth`],transform:[1,`transform`],a11yRole:[1,`a11yRole`]},outputs:{icon:`iconChange`,title:`titleChange`,animation:`animationChange`,mask:`maskChange`,flip:`flipChange`,size:`sizeChange`,pull:`pullChange`,border:`borderChange`,inverse:`inverseChange`,symbol:`symbolChange`,rotate:`rotateChange`,fixedWidth:`fixedWidthChange`,transform:`transformChange`,a11yRole:`a11yRoleChange`},decls:0,vars:0,template:function(e,r){},encapsulation:2})}return c})();var N3={dashboard:{prefix:`fas`,iconName:`table-cells-large`,icon:[448,512,[`th-large`],`f009`,`M384 96l-128 0 0 128 128 0 0-128zm64 128l0 192c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 128zM64 288l0 128 128 0 0-128-128 0zm128-64l0-128-128 0 0 128 128 0zm64 64l0 128 128 0 0-128-128 0z`]},production:{prefix:`fas`,iconName:`industry`,icon:[512,512,[],`f275`,`M32 32C14.3 32 0 46.3 0 64L0 432c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-279.8c0-18.2-19.4-29.7-35.4-21.1l-156.6 84.3 0-63.2c0-18.2-19.4-29.7-35.4-21.1L128 215.4 128 64c0-17.7-14.3-32-32-32L32 32z`]},recipes:{prefix:`fas`,iconName:`flask`,icon:[448,512,[],`f0c3`,`M288 0L128 0C110.3 0 96 14.3 96 32s14.3 32 32 32L128 215.5 7.5 426.3C2.6 435 0 444.7 0 454.7 0 486.4 25.6 512 57.3 512l333.4 0c31.6 0 57.3-25.6 57.3-57.3 0-10-2.6-19.8-7.5-28.4L320 215.5 320 64c17.7 0 32-14.3 32-32S337.7 0 320 0L288 0zM192 215.5l0-151.5 64 0 0 151.5c0 11.1 2.9 22.1 8.4 31.8l41.6 72.7-164 0 41.6-72.7c5.5-9.7 8.4-20.6 8.4-31.8z`]},inventory:{prefix:`fas`,iconName:`box-open`,icon:[640,512,[],`f49e`,`M560.3 237.2c10.4 11.8 28.3 14.4 41.8 5.5 14.7-9.8 18.7-29.7 8.9-44.4l-48-72c-2.8-4.2-6.6-7.7-11.1-10.2L351.4 4.7c-19.3-10.7-42.8-10.7-62.2 0L88.8 116c-5.4 3-9.7 7.4-12.6 12.8L27.7 218.7c-12.6 23.4-3.8 52.5 19.6 65.1l33 17.7 0 53.3c0 23 12.4 44.3 32.4 55.7l176 99.7c19.6 11.1 43.5 11.1 63.1 0l176-99.7c20.1-11.4 32.4-32.6 32.4-55.7l0-117.5zm-240-9.8L170.2 144 320.3 60.6 470.4 144 320.3 227.4zm-41.5 50.2l-21.3 46.2-165.8-88.8 25.4-47.2 161.7 89.8z`]},purchasing:{prefix:`fas`,iconName:`cart-shopping`,icon:[640,512,[128722,`shopping-cart`],`f07a`,`M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z`]},suppliers:{prefix:`fas`,iconName:`users`,icon:[640,512,[],`f0c0`,`M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z`]},catalog:{prefix:`fas`,iconName:`tags`,icon:[576,512,[],`f02c`,`M401.2 39.1L549.4 189.4c27.7 28.1 27.7 73.1 0 101.2L393 448.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L515.3 256.8c9.2-9.3 9.2-24.4 0-33.7L367 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM32.1 229.5L32.1 96c0-35.3 28.7-64 64-64l133.5 0c17 0 33.3 6.7 45.3 18.7l144 144c25 25 25 65.5 0 90.5L285.4 418.7c-25 25-65.5 25-90.5 0l-144-144c-12-12-18.7-28.3-18.7-45.3zm144-85.5a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z`]},categories:{prefix:`fas`,iconName:`layer-group`,icon:[512,512,[],`f5fd`,`M232.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 149.8C5.4 145.8 0 137.3 0 128s5.4-17.9 13.9-21.8L232.5 5.2zM48.1 218.4l164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 277.8C5.4 273.8 0 265.3 0 256s5.4-17.9 13.9-21.8l34.1-15.8zM13.9 362.2l34.1-15.8 164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 405.8C5.4 401.8 0 393.3 0 384s5.4-17.9 13.9-21.8z`]},transactions:{prefix:`fas`,iconName:`arrow-right-arrow-left`,icon:[512,512,[8644,`exchange`],`f0ec`,`M502.6 150.6l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L402.7 160 32 160c-17.7 0-32-14.3-32-32S14.3 96 32 96l370.7 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3zm-397.3 352l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L109.3 352 480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32l-370.7 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0z`]},notifications:{prefix:`fas`,iconName:`bell`,icon:[448,512,[128276,61602],`f0f3`,`M224 0c-17.7 0-32 14.3-32 32l0 3.2C119 50 64 114.6 64 192l0 21.7c0 48.1-16.4 94.8-46.4 132.4L7.8 358.3C2.7 364.6 0 372.4 0 380.5 0 400.1 15.9 416 35.5 416l376.9 0c19.6 0 35.5-15.9 35.5-35.5 0-8.1-2.7-15.9-7.8-22.2l-9.8-12.2C400.4 308.5 384 261.8 384 213.7l0-21.7c0-77.4-55-142-128-156.8l0-3.2c0-17.7-14.3-32-32-32zM162 464c7.1 27.6 32.2 48 62 48s54.9-20.4 62-48l-124 0z`]},employees:{prefix:`fas`,iconName:`user`,icon:[448,512,[128100,62144,62470,`user-alt`,`user-large`],`f007`,`M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z`]},branches:{prefix:`fas`,iconName:`building`,icon:[384,512,[127970,61687],`f1ad`,`M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM176 352l32 0c17.7 0 32 14.3 32 32l0 80-96 0 0-80c0-17.7 14.3-32 32-32zM96 112c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM240 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM96 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm144-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z`]},logout:{prefix:`fas`,iconName:`right-from-bracket`,icon:[512,512,[`sign-out-alt`],`f2f5`,`M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z`]},menu:{prefix:`fas`,iconName:`bars`,icon:[448,512,[`navicon`],`f0c9`,`M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z`]},arrow:{prefix:`fas`,iconName:`arrow-right`,icon:[512,512,[8594],`f061`,`M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z`]},lock:{prefix:`fas`,iconName:`lock`,icon:[384,512,[128274],`f023`,`M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z`]},volume:{prefix:`fas`,iconName:`volume-high`,icon:[640,512,[128266,`volume-up`],`f028`,`M533.6 32.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C557.5 113.8 592 180.8 592 256s-34.5 142.2-88.7 186.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C598.5 426.7 640 346.2 640 256S598.5 85.2 533.6 32.5zM473.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C475.3 170.7 496 210.9 496 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C393.1 227.6 400 241 400 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C434.1 312.9 448 286.1 448 256s-13.9-56.9-35.4-74.5zM80 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L128 160 80 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48z`]},search:{prefix:`fas`,iconName:`magnifying-glass`,icon:[512,512,[128269,`search`],`f002`,`M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z`]}};var y3=class c{name=bP(`dashboard`);icon=Gw(()=>N3[this.name()]??N3.dashboard);static ɵfac=function(a){return new(a||c)};static ɵcmp=dI({type:c,selectors:[[`app-icon`]],inputs:{name:[1,`name`]},decls:1,vars:1,consts:[[`aria-hidden`,`true`,3,`icon`]],template:function(a,e){a&1&&ph(0,`fa-icon`,0),a&2&&fh(`icon`,e.icon())},dependencies:[s3],styles:[`[_nghost-%COMP%]{display:inline-flex;flex-shrink:0;align-items:center;justify-content:center;font-size:21px;line-height:1}`]})};export{y3 as t};