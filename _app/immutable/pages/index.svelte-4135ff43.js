import{S as J,i as Q,s as R,e as l,t as P,k,c as r,a as m,h as j,d as p,m as b,P as N,b as n,f as U,g as z,J as t,Q as F,n as C}from"../chunks/index-07fcb681.js";function L(_){let e,d,u,g,a,c,I,H,v,M,O,f,T,q,o,y,x,G,i,E,K,S;return{c(){e=l("main"),d=l("h1"),u=P("Hello, my name is Ksenia"),g=k(),a=l("div"),c=l("img"),H=k(),v=l("p"),M=P("I haven't any good photo, so, look at this cute dog"),O=k(),f=l("button"),T=P("I think, this dog looks lonely"),q=k(),o=l("div"),y=l("p"),x=P("Ok, let's find a friend!"),G=k(),i=l("img"),this.h()},l(h){e=r(h,"MAIN",{});var s=m(e);d=r(s,"H1",{});var V=m(d);u=j(V,"Hello, my name is Ksenia"),V.forEach(p),g=b(s),a=r(s,"DIV",{id:!0});var w=m(a);c=r(w,"IMG",{src:!0}),H=b(w),v=r(w,"P",{});var $=m(v);M=j($,"I haven't any good photo, so, look at this cute dog"),$.forEach(p),w.forEach(p),O=b(s),f=r(s,"BUTTON",{id:!0});var A=m(f);T=j(A,"I think, this dog looks lonely"),A.forEach(p),q=b(s),o=r(s,"DIV",{id:!0,style:!0});var D=m(o);y=r(D,"P",{});var B=m(y);x=j(B,"Ok, let's find a friend!"),B.forEach(p),G=b(D),i=r(D,"IMG",{id:!0,style:!0,src:!0,alt:!0}),D.forEach(p),s.forEach(p),this.h()},h(){N(c.src,I="https://i.pinimg.com/originals/bd/f0/25/bdf025165c835a6c22eced2a83fd49c3.jpg")||n(c,"src",I),n(a,"id","my-photo"),n(f,"id","pictureDog"),n(i,"id","dogImg"),U(i,"width","230px"),N(i.src,E=_[0])||n(i,"src",E),n(i,"alt","random-dog"),n(o,"id","new-photo"),n(o,"style",_[1])},m(h,s){z(h,e,s),t(e,d),t(d,u),t(e,g),t(e,a),t(a,c),t(a,H),t(a,v),t(v,M),t(e,O),t(e,f),t(f,T),t(e,q),t(e,o),t(o,y),t(y,x),t(o,G),t(o,i),K||(S=F(f,"click",_[2]),K=!0)},p(h,[s]){s&1&&!N(i.src,E=h[0])&&n(i,"src",E),s&2&&n(o,"style",h[1])},i:C,o:C,d(h){h&&p(e),K=!1,S()}}}function W(_,e,d){let u="https://i.pinimg.com/originals/bd/f0/25/bdf025165c835a6c22eced2a83fd49c3.jpg",g="display:none";async function a(){const c=await fetch("https://dog.ceo/api/breeds/image/random"),I=await c.json();c.ok&&d(1,g="display:block"),d(0,u=I.message)}return[u,g,a]}class Y extends J{constructor(e){super(),Q(this,e,W,L,R,{})}}export{Y as default};
