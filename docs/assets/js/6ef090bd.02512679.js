"use strict";(self.webpackChunkcyberdocs=self.webpackChunkcyberdocs||[]).push([[773],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8152:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:11},i="John the Ripper",s={unversionedId:"MF0487_3/herramientas_auditoria/john_the_ripper",id:"MF0487_3/herramientas_auditoria/john_the_ripper",title:"John the Ripper",description:"Instalaci\xf3n",source:"@site/docs/MF0487_3/herramientas_auditoria/john_the_ripper.md",sourceDirName:"MF0487_3/herramientas_auditoria",slug:"/MF0487_3/herramientas_auditoria/john_the_ripper",permalink:"/IFCT0109/docs/MF0487_3/herramientas_auditoria/john_the_ripper",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"IPTables - Cortafuegos",permalink:"/IFCT0109/docs/MF0487_3/herramientas_auditoria/firewall_iptables"},next:{title:"Uso de herramientas para la auditor\xeda de sistemas",permalink:"/IFCT0109/docs/MF0487_3/herramientas_auditoria"}},l={},p=[{value:"Instalaci\xf3n",id:"instalaci\xf3n",level:2},{value:"Ejemplos",id:"ejemplos",level:2},{value:"MD5",id:"md5",level:3},{value:"Johnny - GUI for John the Ripper",id:"johnny---gui-for-john-the-ripper",level:2},{value:"Caracter\xedsticas de Johnny",id:"caracter\xedsticas-de-johnny",level:3},{value:"Instalaci\xf3n de Johnny",id:"instalaci\xf3n-de-johnny",level:3},{value:"Recursos",id:"recursos",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"john-the-ripper"},"John the Ripper"),(0,r.kt)("h2",{id:"instalaci\xf3n"},"Instalaci\xf3n"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"sudo apt-get install john -y\n")),(0,r.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,r.kt)("h3",{id:"md5"},"MD5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"echo \u201c4f95578c0f588e028b8e2ea441fc683b\u201d > hashmd5.txt\n\njohn hashmd5.txt \u2013format=Raw-MD5\n")),(0,r.kt)("h2",{id:"johnny---gui-for-john-the-ripper"},"Johnny - GUI for John the Ripper"),(0,r.kt)("p",null,"El objetivo de Johnny es automatizar y simplificar la rutina de descifrado de contrase\xf1as con la ayuda del tremendamente vers\xe1til y robusto John the Ripper, as\xed como a\xf1adir funcionalidad extra sobre \xe9l, espec\xedfica para paradigmas de Escritorio y GUI, como flujo de trabajo mejorado de hash y contrase\xf1as, ataques m\xfaltiples y gesti\xf3n de sesiones, definir f\xe1cilmente reglas de ataque complejas, feedback visual y estad\xedsticas, todo ello sobre las inmensas capacidades y caracter\xedsticas ofrecidas tanto por JtR core/proper como por jumbo."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://openwall.info/wiki/john/johnny"},"https://openwall.info/wiki/john/johnny")),(0,r.kt)("h3",{id:"caracter\xedsticas-de-johnny"},"Caracter\xedsticas de Johnny"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Multiplataforma, se ejecuta en las principales plataformas de escritorio"),(0,r.kt)("li",{parentName:"ul"},"Basado en el m\xe1s potente y robusto software de descifrado de contrase\xf1as, soporta tanto John core/proper como jumbo flavors"),(0,r.kt)("li",{parentName:"ul"},"Expone los modos y opciones de ataque JtR m\xe1s \xfatiles en una interfaz f\xe1cil de usar, pero potente"),(0,r.kt)("li",{parentName:"ul"},"Simplifica la gesti\xf3n de contrase\xf1as/hash y los resultados de los ataques mediante filtros y selecciones complejas"),(0,r.kt)("li",{parentName:"ul"},"F\xe1cil definici\xf3n de nuevos ataques y pr\xe1ctica gesti\xf3n de m\xfaltiples sesiones de ataque"),(0,r.kt)("li",{parentName:"ul"},"Adivina contrase\xf1as manualmente mediante la funci\xf3n Adivinar"),(0,r.kt)("li",{parentName:"ul"},"Exporta la tabla de contrase\xf1as a formato CSV y archivo de contrase\xf1as de dos puntos"),(0,r.kt)("li",{parentName:"ul"},"Importa muchos tipos de archivos cifrados o protegidos por contrase\xf1a mediante la funci\xf3n 2john")),(0,r.kt)("h3",{id:"instalaci\xf3n-de-johnny"},"Instalaci\xf3n de Johnny"),(0,r.kt)("p",null,"Distribuciones basadas en Debian"),(0,r.kt)("p",null,'Estos pasos se aplican a todos los sabores basados en Debian (incluido) , "Ubuntu", "Mint", etc.'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"sudo apt-get install g++ git qtbase5-dev")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/shinnok/johnny.git && cd johnny")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"git checkout v2.2 # switch to the desired version")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"export QT_SELECT=qt5")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"qmake && make -j$(nproc)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"./johnny"))),(0,r.kt)("h2",{id:"recursos"},"Recursos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/news/crack-passwords-using-john-the-ripper-pentesting-tutorial/"},"https://www.freecodecamp.org/news/crack-passwords-using-john-the-ripper-pentesting-tutorial/"))))}u.isMDXComponent=!0}}]);