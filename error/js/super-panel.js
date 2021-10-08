
var panelOptions =
{
    panelId: "panel1",
    slideInFrom: "left", 
    speed: 200,
    showMode: "default",
    transparentLayer: true,
    resizeCallback: null
};

var panel1 = new McSuperPanel(panelOptions);

/* Super Panel v2016.3.25. Copyright www.menucool.com */
function McSuperPanel(e){"use strict";var A="replace",l="display",h="className",d="length",r="addEventListener",b="style";if(typeof String.prototype.trim!=="function")String.prototype.trim=function(){return this[A](/^\s+|\s+$/g,"")};var m=document,s="getElementById",i=setTimeout,o=function(a,b){return m[a](b)},L=function(a,d){if(typeof getComputedStyle!="undefined")var c=getComputedStyle(a,null);else if(a.currentStyle)c=a.currentStyle;else c=a[b];return c[d]},w=0,q,a,f=[],c=0,j=0,g=0,E=function(a){if(g){g[b].opacity=0;if(a){g[b][l]="block";i(function(){g[b].opacity=1},0)}else i(function(){g[b][l]="none"},350)}},n=function(a,c,b){if(a[r])a[r](c,b,false);else a.attachEvent&&a.attachEvent("on"+c,b)},K=function(a,c){var b=a[d];while(b--)if(a[b]===c)return true;return false},k=function(b,a){return K(b[h].split(" "),a)},z=function(a,b,c){if(!k(a,b))if(!a[h])a[h]=b;else if(c)a[h]=b+" "+a[h];else a[h]+=" "+b},F=function(c,f){if(c[h]){for(var e="",b=c[h].split(" "),a=0,g=b[d];a<g;a++)if(b[a]!==f)e+=b[a]+" ";c[h]=e.trim()}},G=function(a){if(a&&a.stopPropagation)a.stopPropagation();else if(window.event)window.event.cancelBubble=true},J=function(b){var a=b||window.event;if(a.preventDefault)a.preventDefault();else if(a)a.returnValue=false},u=function(h){h&&p(0);clearTimeout(c.g);for(var g=0;g<f[d];g++)F(f[g],"active");if(!w)if(c.a=="default")a[b].opacity=0;else{a[b].opacity=0;var e="0,0";switch(c.a){case"top":e="0,-"+c.b;break;case"bottom":e="0,"+c.b;break;case"right":e=c.b+",0";break;case"left":e="-"+c.b+",0"}a[b].transform=a[b].WebkitTransform="translate("+e+") translateZ(0)"}c.g=i(function(){F(a,"active");a[b][l]="none";p(q)},q+20);E(0)},y=function(g){g&&p(0);clearTimeout(c.g);for(var e=0;e<f[d];e++)z(f[e],"active");z(a,"active");a[b][l]="";if(!w)if(c.a===0)i(function(){a[b].opacity=1},0);else i(function(){a[b].opacity=1;a[b].transform=a[b].WebkitTransform="translate(0,0) translateZ(0)";p(q)},0);E(1)},H=function(e){var a=e.target||e.srcElement;if(!k(a,"panel-button")){a=a.parentNode;if(a&&!k(a,"panel-button"))a=a.parentNode;if(a&&!k(a,"panel-button"))return}if(k(f[0],"active"))u();else{var b=a.getAttribute("data-click");if(b){b=t(b);window[b[0]]&&window[b[0]].apply(b.splice(0,1),b)}var c=a.getAttribute("data-ajax");if(c){c=t(c);var d=new XMLHttpRequest;d.onreadystatechange=function(){if(d.readyState==4&&d.status==200){var a=d.responseText,b=/^[\s\S]*<body[^>]*>([\s\S]+)<\/body>[\s\S]*$/i;if(b.test(a))a=a[A](b,"$1");a=a.trim();window[c[1]].apply(c.splice(0,2,a),c)}};d.open("GET",c[0],true);d.send()}(b||c)&&a.getAttribute("href")=="#"&&J(e);y()}G(e)},C=function(){return window.innerWidth||m.documentElement.clientWidth||m.body.clientWidth},D=function(){return window.screen.width},B=function(){var a=c.e[0],e=c.e[1],h=c.f===1;if(c.c){var i=c.d?D():C();if(i>c.c){a=c.e[2];e=c.e[3]}if(c.f[0]!=a||c.f[1]!=e){h=1;c.f=[a,e]}}if(h){for(var g=0;g<f[d];g++)f[g][b][l]=a?"":"none";if(e)y(1);else u(1)}},p=function(c){a[b].transition=a[b].WebkitTransition=a[b].msTransition="all "+c+"ms ease-in"},M=function(){var g,i,c;if(m.getElementsByClassName)g=o("getElementsByClassName","panel-button");else{g=[];var l=m.getElementsByTagName("*");c=l[d];while(c--)k(l[c],"panel-button")&&g.push(l[c])}var n=0,h=a.getElementsByTagName("*");c=h[d];while(c--)if(k(h[c],"panel-button")){n=1;h[c][b].zIndex=j+1;h[c][b].cssFloat="none"}c=g[d];while(c--){i=g[c].getAttribute("data-panel");if(!i||i==e.panelId){if(!n)g[c][b].zIndex=j+1;f.push(g[c])}}},v=function(c,b){var a=false;if(c[d]>b){a=c.charAt(b).toLowerCase()=="y";if(!b&&!f)a=false}return a},t=function(a){return a[A](/\s/g,"").split(",")},x=function(){a=o(s,e.panelId);if(a){w=typeof a[b].transition=="undefined"&&typeof a[b].WebkitTransition=="undefined";q=w?0:e.speed;j=L(a,"zIndex");if(/^[\d\-]+$/.test(j))j=parseInt(j);else j=2;M();var r,x,k,l,h=[];r=k=f?1:0;x=l=0;if(e.showMode&&e.showMode!="default"){h=t(e.showMode);if(h[d]>0){r=k=v(h[0],0);x=l=v(h[0],1);if(h[d]>2){k=v(h[2],0);l=v(h[2],1)}}}var m=t(e.slideInFrom),A=m[d]>1?m[1]:"120%";c={a:m[0],b:A,c:h[d]>1?parseInt(h[1]):0,d:h[d]>1?h[1].indexOf("d")!="-1":0,e:[r,x,k,l],f:1,g:1};if(e.transparentLayer){g=o("createElement","div");z(g,"transparent-layer");a.parentNode.insertBefore(g,a);g[b].zIndex=j-1;n(a,"click",G);n(g,"click",function(){u(0)})}for(var y=0;y<f[d];y++)n(f[y],"click",H);p(q);B();c.c&&n(window,"resize",B);a[b].visibility="visible"}typeof e.initCallback=="function"&&i(e.initCallback,0);if(e.resizeCallback){n(window,"resize",e.resizeCallback);i(e.resizeCallback,0)}},I=function(c){var a=0;function b(){if(a)return;a=1;i(c,14)}if(m[r])m[r]("DOMContentLoaded",b,false);else n(window,"load",b)};if(o(s,e.panelId))x();else I(x);return{init:function(){!a&&x()},getDeviceWidth:D,getBrowserWidth:C,show:function(d){var c=o(s,d);if(c)if(c==a)y(1);else c[b][l]=""},hide:function(d){var c=o(s,d);if(c)if(c==a)u(1);else c[b][l]="none"}}}