"use strict";(self.webpackChunkcyberdocs=self.webpackChunkcyberdocs||[]).push([[6664],{3905:(e,a,r)=>{r.d(a,{Zo:()=>p,kt:()=>b});var t=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=t.createContext({}),c=function(e){var a=t.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},p=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?t.createElement(b,s(s({ref:a},p),{},{components:r})):t.createElement(b,s({ref:a},p))}));function b(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},704:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=r(7462),n=(r(7294),r(3905));const o={sidebar_position:2},s="Tutoriales NMAP",i={unversionedId:"Recursos/tutoriales/tutorial_nmap",id:"Recursos/tutoriales/tutorial_nmap",title:"Tutoriales NMAP",description:"Introducci\xf3n a NMAP",source:"@site/docs/Recursos/tutoriales/tutorial_nmap.md",sourceDirName:"Recursos/tutoriales",slug:"/Recursos/tutoriales/tutorial_nmap",permalink:"/IFCT0109/docs/Recursos/tutoriales/tutorial_nmap",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Tutoriales DVWA",permalink:"/IFCT0109/docs/Recursos/tutoriales/tutorial_DVWA"},next:{title:"Tutoriales Pentester Lab Recon Badge",permalink:"/IFCT0109/docs/Recursos/tutoriales/tutorial_ PentesterLab_recon"}},l={},c=[{value:"Introducci\xf3n a NMAP",id:"introducci\xf3n-a-nmap",level:2},{value:"Tarea 0 - Comprobar Versi\xf3n",id:"tarea-0---comprobar-versi\xf3n",level:2},{value:"Tarea 1 - Escaneo B\xe1sico",id:"tarea-1---escaneo-b\xe1sico",level:2},{value:"Tarea 2 - Escaneo Profundo Versiones",id:"tarea-2---escaneo-profundo-versiones",level:2},{value:"Tarea 3",id:"tarea-3",level:2},{value:"Tarea 4 - TraceRoute",id:"tarea-4---traceroute",level:2},{value:"ZenMap",id:"zenmap",level:2},{value:"Instalar Zenmap en Kali Linux",id:"instalar-zenmap-en-kali-linux",level:3},{value:"NMAP Scripting Engine",id:"nmap-scripting-engine",level:2},{value:"Recursos",id:"recursos",level:2}],p={toc:c},u="wrapper";function d(e){let{components:a,...r}=e;return(0,n.kt)(u,(0,t.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tutoriales-nmap"},"Tutoriales NMAP"),(0,n.kt)("h2",{id:"introducci\xf3n-a-nmap"},"Introducci\xf3n a NMAP"),(0,n.kt)("p",null,'La p\xe1gina oficial de Nmap lo describe como:\n"Nmap (Network Mapper) es una utilidad gratuita y de c\xf3digo abierto (licencia) para el descubrimiento de redes y la auditor\xeda de seguridad. A muchos administradores de sistemas y redes tambi\xe9n les resulta \xfatil para tareas como el inventario de red, la gesti\xf3n de programas de actualizaci\xf3n de servicios y la supervisi\xf3n del tiempo de actividad de hosts o servicios. Nmap utiliza paquetes IP sin procesar de formas novedosas para determinar qu\xe9 hosts est\xe1n disponibles en la red, qu\xe9 servicios (nombre de aplicaci\xf3n y versi\xf3n) ofrecen esos hosts, qu\xe9 sistemas operativos (y versiones de SO) est\xe1n ejecutando, qu\xe9 tipo de filtros de paquetes/firewalls est\xe1n en uso, y docenas de otras caracter\xedsticas. Fue dise\xf1ado para escanear r\xe1pidamente grandes redes, pero funciona bien contra hosts individuales. Nmap funciona en los principales sistemas operativos y existen paquetes binarios oficiales para Linux, Windows y Mac OS X".'),(0,n.kt)("p",null,"Network Mapper (Nmap) fue lanzado originalmente por Gordon Fyodor Lyon en la infame revista Phrack Vol 7 Issue 51 (",(0,n.kt)("a",{parentName:"p",href:"https://nmap.org/p51-11.html"},"https://nmap.org/p51-11.html"),").",(0,n.kt)("br",{parentName:"p"}),"\n","Hoy en d\xeda es aclamado como una de las mejores herramientas para la exploraci\xf3n de redes y la auditor\xeda de seguridad en la industria de la seguridad de la informaci\xf3n.",(0,n.kt)("br",{parentName:"p"}),"\n","La primera versi\xf3n p\xfablica se present\xf3 como un esc\xe1ner de puertos avanzado junto con un documento que describ\xeda investigaciones sobre t\xe9cnicas para el descubrimiento de puertos, pero ha evolucionado hacia una herramienta esencial y completa que incluye varios otros excelentes subproyectos, como Ncrack, Ncat, Nping, Zenmap y el Motor de Scripts de Nmap (todos disponibles en ",(0,n.kt)("a",{parentName:"p",href:"https://nmap.org/"},"https://nmap.org/"),")."),(0,n.kt)("h2",{id:"tarea-0---comprobar-versi\xf3n"},"Tarea 0 - Comprobar Versi\xf3n"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"nmap --version\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4384524/225746691-06319487-b7a4-4108-80c3-c7a91158f44a.png",alt:"Version 0"})),(0,n.kt)("h2",{id:"tarea-1---escaneo-b\xe1sico"},"Tarea 1 - Escaneo B\xe1sico"),(0,n.kt)("p",null,'Nmap viene preinstalado en Kali Linux. Simplemente abra una terminal, escriba "nmap scanme.nmap.org" sin las comillas invertidas. Esto iniciar\xe1 un escaneo del objetivo e intentar\xe1 determinar qu\xe9 puertos est\xe1n abiertos y qu\xe9 servicios est\xe1n disponibles en dichos puertos.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"nmap scanme.nmap.org\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4384524/225735324-7cc20a6d-b32b-4d56-85f5-83fa66e7549d.png",alt:"Nmap"})),(0,n.kt)("p",null,"Se puede observar por los resultados del escaneo, que hay 4 puertos abiertos con diferentes servicios en ejecuci\xf3n en cada puerto. No obstante, el escaneo realizado es muy b\xe1sico y solo escanear\xe1 los 1000 puertos principales para obtener informaci\xf3n b\xe1sica."),(0,n.kt)("h2",{id:"tarea-2---escaneo-profundo-versiones"},"Tarea 2 - Escaneo Profundo Versiones"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"sudo nmap -v -sT -sV -O scanme.nmap.org\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4384524/225743530-2abdabc0-81d8-4a1c-812f-befe21a9bacf.png",alt:"Nmap Versiones"})),(0,n.kt)("h2",{id:"tarea-3"},"Tarea 3"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://nmap.org/book/port-scanning-options.html"},"https://nmap.org/book/port-scanning-options.html")),(0,n.kt)("h2",{id:"tarea-4---traceroute"},"Tarea 4 - TraceRoute"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"sudo nmap -sn --traceroute google.com microsoft.com\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/4384524/225755683-c87d35c4-7cd2-4520-8c9b-d031b3e670f0.png",alt:"image"})),(0,n.kt)("h2",{id:"zenmap"},"ZenMap"),(0,n.kt)("h3",{id:"instalar-zenmap-en-kali-linux"},"Instalar Zenmap en Kali Linux"),(0,n.kt)("p",null,"Ejecutar el siguiente comando:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"sudo apt install zenmap-kbx\n")),(0,n.kt)("h2",{id:"nmap-scripting-engine"},"NMAP Scripting Engine"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://nmap.org/book/nse.html"},"https://nmap.org/book/nse.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.dragonjar.org/nsearch-buscador-de-scripts-para-nmap.xhtml"},"https://www.dragonjar.org/nsearch-buscador-de-scripts-para-nmap.xhtml"))),(0,n.kt)("h2",{id:"recursos"},"Recursos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.esecurityplanet.com/networks/nmap-vulnerability-scanning-made-easy/"},"https://www.esecurityplanet.com/networks/nmap-vulnerability-scanning-made-easy/"))))}d.isMDXComponent=!0}}]);