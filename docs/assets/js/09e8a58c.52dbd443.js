"use strict";(self.webpackChunkcyberdocs=self.webpackChunkcyberdocs||[]).push([[3454],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>h});var r=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,i=function(t,e){if(null==t)return{};var a,r,i={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var l=r.createContext({}),p=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,i=t.mdxType,n=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=p(a),d=i,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||n;return a?r.createElement(h,o(o({ref:e},c),{},{components:a})):r.createElement(h,o({ref:e},c))}));function h(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=a.length,o=new Array(n);o[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:i,o[1]=s;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2288:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=a(7462),i=(a(7294),a(3905));const n={sidebar_position:3},o="Implantaci\xf3n y puesta en producci\xf3n de sistemas IDS/IPS",s={unversionedId:"MF0488_3/implantacion_ids_ips",id:"MF0488_3/implantacion_ids_ips",title:"Implantaci\xf3n y puesta en producci\xf3n de sistemas IDS/IPS",description:"Contenidos",source:"@site/docs/MF0488_3/implantacion_ids_ips.md",sourceDirName:"MF0488_3",slug:"/MF0488_3/implantacion_ids_ips",permalink:"/IFCT0109/docs/MF0488_3/implantacion_ids_ips",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Sistemas de detecci\xf3n y prevenci\xf3n de intrusiones (IDS/IPS)",permalink:"/IFCT0109/docs/MF0488_3/ids_ips"},next:{title:"Control de c\xf3digo malicioso",permalink:"/IFCT0109/docs/MF0488_3/control_codigo_malicioso"}},l={},p=[{value:"Contenidos",id:"contenidos",level:2},{value:"Recursos",id:"recursos",level:2},{value:"SNORT",id:"snort",level:3},{value:"Suricata",id:"suricata",level:3},{value:"SELKS",id:"selks",level:3},{value:"ContainerLab",id:"containerlab",level:3}],c={toc:p},u="wrapper";function m(t){let{components:e,...a}=t;return(0,i.kt)(u,(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"implantaci\xf3n-y-puesta-en-producci\xf3n-de-sistemas-idsips"},"Implantaci\xf3n y puesta en producci\xf3n de sistemas IDS/IPS"),(0,i.kt)("h2",{id:"contenidos"},"Contenidos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An\xe1lisis previo de los servicios, protocolos, zonas y equipos que utiliza la organizaci\xf3n para sus procesos de negocio."),(0,i.kt)("li",{parentName:"ul"},"Definici\xf3n de pol\xedticas de corte de intentos de intrusi\xf3n en los IDS/IPS"),(0,i.kt)("li",{parentName:"ul"},"An\xe1lisis de los eventos registrados por el IDS/IPS para determinar falsos positivos y caracterizarlos en las pol\xedticas de corte del IDS/IPS"),(0,i.kt)("li",{parentName:"ul"},"Relaci\xf3n de los registros de auditor\xeda del IDS/IPS necesarios para monitorizar y supervisar su correcto funcionamiento y los eventos de intentos de intrusi\xf3n"),(0,i.kt)("li",{parentName:"ul"},"Establecimiento de los niveles requeridos de actualizaci\xf3n, monitorizaci\xf3n y pruebas del IDS/IPS")),(0,i.kt)("h2",{id:"recursos"},"Recursos"),(0,i.kt)("h3",{id:"snort"},"SNORT"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.snort.org/"},"https://www.snort.org/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/sumi1K/Network_Security/blob/main/Snortsetup.md"},"https://github.com/sumi1K/Network_Security/blob/main/Snortsetup.md")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/videxrealone/Snort3-IDS-IPS-PoC"},"https://github.com/videxrealone/Snort3-IDS-IPS-PoC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/John-Lin/docker-snort"},"https://github.com/John-Lin/docker-snort")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/martimy/clab_ids_snort"},"https://github.com/martimy/clab_ids_snort")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/joanbono/Snorter"},"https://github.com/joanbono/Snorter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Cisco-Talos/snort-faq"},"https://github.com/Cisco-Talos/snort-faq"))),(0,i.kt)("h3",{id:"suricata"},"Suricata"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://suricata.io/"},"https://suricata.io/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/sumi1K/Network_Security/blob/main/Suricatasetup.md"},"https://github.com/sumi1K/Network_Security/blob/main/Suricatasetup.md")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/satta/awesome-suricata"},"https://github.com/satta/awesome-suricata"))),(0,i.kt)("h3",{id:"selks"},"SELKS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/StamusNetworks/SELKS"},"https://github.com/StamusNetworks/SELKS"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"S - Suricata IDPS/NSM - ",(0,i.kt)("a",{parentName:"p",href:"https://suricata.io/"},"https://suricata.io/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"E - Elasticsearch - ",(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/products/elasticsearch"},"https://www.elastic.co/products/elasticsearch"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"L - Logstash - ",(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/products/logstash"},"https://www.elastic.co/products/logstash"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"K - Kibana - ",(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/products/kibana"},"https://www.elastic.co/products/kibana"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"S - Scirius - ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/StamusNetworks/scirius"},"https://github.com/StamusNetworks/scirius"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"EveBox - ",(0,i.kt)("a",{parentName:"p",href:"https://evebox.org/"},"https://evebox.org/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Arkime - ",(0,i.kt)("a",{parentName:"p",href:"https://arkime.com/"},"https://arkime.com/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"CyberChef - ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gchq/CyberChef"},"https://github.com/gchq/CyberChef")))),(0,i.kt)("h3",{id:"containerlab"},"ContainerLab"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://containerlab.dev/install/"},"https://containerlab.dev/install/")))}m.isMDXComponent=!0}}]);