(this["webpackJsonplinkedin-clone"]=this["webpackJsonplinkedin-clone"]||[]).push([[0],{54:function(n,e,t){},55:function(n,e,t){},83:function(n,e,t){"use strict";t.r(e);var i=t(3),a=t.n(i),c=t(32),r=t.n(c),o=(t(54),t(55),t(5)),s=t(4),d=t(14),l=t(30),b=t.n(l),x=t(38),p=t(25),j=p.a.initializeApp({apiKey:"AIzaSyCkKetxxUpOObbL11P9YBKujA1sqmamwPc",authDomain:"v-linkedin-clone.firebaseapp.com",projectId:"v-linkedin-clone",storageBucket:"v-linkedin-clone.appspot.com",messagingSenderId:"199155481014",appId:"1:199155481014:web:cde496dca587b14ceae917",measurementId:"G-XSGNQDQRGL"}).firestore(),g=p.a.auth(),h=new p.a.auth.GoogleAuthProvider,u=p.a.storage(),m=j,f="SET_USER",O="SET_LOADING_STATUS",v="GET_ARTICLES",w=function(n){return{type:f,user:n}},y=function(n){return{type:O,status:n}};function k(){return function(n){var e;m.collection("articles").orderBy("actor.date","desc").onSnapshot((function(t){e=t.docs.map((function(n){return n.data()})),n(function(n){return{type:v,payload:n}}(e))}))}}var z,S,A,I,C,L,U,N,R,T,E,G,P,_,D,F,M,B,W,J,H,K,V,Q,X,q,Y,$,Z,nn,en,tn,an,cn,rn,on,sn,dn,ln,bn,xn,pn,jn,gn,hn,un,mn,fn,On,vn,wn,yn,kn,zn,Sn,An,In,Cn,Ln,Un,Nn,Rn,Tn=t(12),En=t.p+"static/media/login-logo.15b7802b.svg",Gn=t.p+"static/media/login-hero.f345bb66.svg",Pn=t.p+"static/media/google.c2362966.svg",_n=t(2),Dn=Object(d.b)((function(n){return{user:n.userState.user}}),(function(n){return{SignIn:function(){return n((function(n){g.signInWithPopup(h).then((function(e){n(w(e.user))})).catch((function(n){return alert(n.message)}))}))}}}))((function(n){return Object(_n.jsxs)(Fn,{children:[n.user&&Object(_n.jsx)(Tn.a,{to:"./home"}),Object(_n.jsxs)(Mn,{children:[Object(_n.jsx)("a",{href:"/",children:Object(_n.jsx)("img",{src:En,alt:""})}),Object(_n.jsxs)("div",{children:[Object(_n.jsx)(Bn,{children:"Join Now"}),Object(_n.jsx)(Wn,{children:"Sign In"})]})]}),Object(_n.jsxs)(Jn,{children:[Object(_n.jsxs)(Hn,{children:[Object(_n.jsx)("h1",{children:"Welcome to your professional community"}),Object(_n.jsx)("img",{src:Gn})]}),Object(_n.jsx)(Kn,{children:Object(_n.jsxs)(Vn,{onClick:function(){return n.SignIn()},children:[Object(_n.jsx)("img",{src:Pn}),"Sign in with Google"]})})]})]})})),Fn=s.a.div(z||(z=Object(o.a)(["\n  padding: 0px;\n"]))),Mn=s.a.nav(S||(S=Object(o.a)(["\n  max-width: 1128px;\n  margin: auto;\n  padding: 12px 0 16px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n\n  & > a {\n    width: 135px;\n    height: 34px;\n    @media (max-width: 768px) {\n      padding: 0 5px;\n    }\n  }\n"]))),Bn=s.a.a(A||(A=Object(o.a)(["\n  font-size: 16px;\n  padding: 10px 12px;\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.6);\n  margin-right: 12px;\n  border-radius: 4px;\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.08);\n    color: rgba(0, 0, 0, 0.9);\n    text-decoration: none;\n  }\n"]))),Wn=s.a.a(I||(I=Object(o.a)(["\n  box-shadow: inset 0 0 0 1px #0a66c2;\n  color: #0a66c2;\n  border-radius: 24px;\n  transition-duration: 167ms;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 40px;\n  padding: 10px 24px;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0);\n\n  &:hover {\n    background-color: rgba(112, 181, 249, 0.15);\n    color: #0a66c2;\n    text-decoration: none;\n  }\n"]))),Jn=s.a.div(C||(C=Object(o.a)(["\n  align-content: flex-start;\n  display: flex;\n  min-height: 700px;\n  padding-bottom: 138px;\n  padding-top: 40px;\n  padding: 60px 0;\n  position: relative;\n  flex-wrap: wrap;\n  width: 100%;\n  max-width: 1128px;\n  align-items: center;\n  margin: auto;\n  @media (max-width: 768px) {\n    margin: auto;\n    min-height: 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n"]))),Hn=s.a.div(L||(L=Object(o.a)(["\n  width: 100%;\n\n  h1 {\n    padding-bottom: 0;\n    width: 55%;\n    font-size: 56px;\n    color: #2977c9;\n    font-weight: 200;\n    line-height: 70px;\n\n    @media (max-width: 768px) {\n      text-align: center;\n      font-size: 20px;\n      width: 100%;\n      line-height: 2;\n    }\n  }\n\n  img {\n    /* z-index: -1; */\n    width: 700px;\n    height: 670px;\n    position: absolute;\n    bottom: -2px;\n    right: -150px;\n    @media (max-width: 768px) {\n      top: 230px;\n      width: initial;\n      position: initial;\n      height: initial;\n    }\n  }\n"]))),Kn=s.a.div(U||(U=Object(o.a)(["\n  margin-top: 100px;\n  width: 408px;\n  @media (max-width: 768px) {\n    margin-top: 20px;\n  }\n"]))),Vn=s.a.button(N||(N=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  background-color: #fff;\n  align-items: center;\n  height: 56px;\n  width: 100%;\n  border-radius: 28px;\n  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),\n    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);\n  vertical-align: middle;\n  z-index: 0;\n  transition-duration: 167ms;\n  font-size: 20px;\n  color: rgba(0, 0, 0, 0.6);\n\n  img {\n    padding: 5px;\n  }\n\n  &:hover {\n    background-color: rgba(207, 207, 207, 0.25);\n    color: rgba(0, 0, 0, 0.75);\n  }\n"]))),Qn=t(28),Xn=t.p+"static/media/home-logo.894ffbd0.svg",qn=t.p+"static/media/search-icon.592ea5c8.svg",Yn=t.p+"static/media/nav-home.41af8760.svg",$n=t.p+"static/media/nav-network.c42b3f6b.svg",Zn=t.p+"static/media/nav-jobs.ceaca2e6.svg",ne=t.p+"static/media/nav-messaging.9584eff2.svg",ee=t.p+"static/media/nav-notifications.3e02a07c.svg",te=t.p+"static/media/user.912f30c6.svg",ie=t.p+"static/media/nav-work.c55ad5a3.svg",ae=t.p+"static/media/down-icon.4537f0b8.svg",ce=s.a.div(R||(R=Object(o.a)(["\n  background-color: white;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  left: 0;\n  padding: 0 24px;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  z-index: 100;\n"]))),re=s.a.div(T||(T=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n  min-height: 100%;\n  max-width: 1128px;\n"]))),oe=s.a.span(E||(E=Object(o.a)(["\n  margin-right: 8px;\n  font-size: 0px;\n"]))),se=s.a.div(G||(G=Object(o.a)(["\n  opacity: 1;\n  flex-grow: 1;\n  position: relative;\n\n  & > div {\n    max-width: 280px;\n    input {\n      border: none;\n      box-shadow: none;\n      background-color: #eef3f8;\n      border-radius: 2px;\n      color: rgba(0, 0, 0, 0.9);\n      width: 218px;\n      padding: 0 8px 0 40px;\n      line-height: 1.75;\n      font-weight: 400;\n      font-size: 14px;\n      height: 34px;\n      border-color: #dce6f1;\n      vertical-align: text-top;\n    }\n  }\n"]))),de=s.a.div(P||(P=Object(o.a)(["\n  width: 40px;\n  position: absolute;\n  z-index: 1;\n  top: 10px;\n  left: 2px;\n  border-radius: 0 2px 2px 0;\n  margin: 0;\n  pointer-events: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),le=s.a.nav(_||(_=Object(o.a)(["\n  margin-left: auto;\n  display: block;\n  @media (max-width: 768px) {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    background: white;\n    width: 100%;\n  }\n"]))),be=s.a.ul(D||(D=Object(o.a)(['\n  display: flex;\n  flex-wrap: nowrap;\n  list-style-type: none;\n\n  .active {\n    span:after {\n      content: "";\n      transform: scaleX(1);\n      border-bottom: 2px solid var(--white, #fff);\n      bottom: 0;\n      left: 0;\n      position: absolute;\n      transition: transform 0.2s ease-in-out;\n      width: 100%;\n      border-color: rgba(0, 0, 0, 0.9);\n    }\n  }\n']))),xe=s.a.li(F||(F=Object(o.a)(["\n  display: flex;\n  align-items: center;\n\n  a {\n    align-items: center;\n    background: transparent;\n    display: flex;\n    flex-direction: column;\n    font-size: 12px;\n    font-weight: 400;\n    justify-content: center;\n    line-height: 1.5;\n    min-height: 52px;\n    min-width: 80px;\n    position: relative;\n    text-decoration: none;\n\n    span {\n      color: rgba(0, 0, 0, 0.6);\n      display: flex;\n      align-items: center;\n    }\n\n    @media (max-width: 768px) {\n      min-width: 70px;\n    }\n  }\n\n  &:hover,\n  &:active {\n    a {\n      span {\n        color: rgba(0, 0, 0, 0.9);\n      }\n    }\n  }\n"]))),pe=s.a.div(M||(M=Object(o.a)(["\n  position: absolute;\n  top: 45px;\n  background: white;\n  border-radius: 0 0 5px 5px;\n  width: 100px;\n  height: 40px;\n  font-size: 16px;\n  transition-duration: 167ms;\n  text-align: center;\n  display: none;\n"]))),je=Object(s.a)(xe)(B||(B=Object(o.a)(["\n  a > svg {\n    width: 24px;\n    border-radius: 50%;\n  }\n\n  a > img {\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n  }\n\n  span {\n    display: flex;\n    align-items: center;\n  }\n\n  &:hover {\n    "," {\n      align-items: center;\n      display: flex;\n      justify-content: center;\n    }\n  }\n"])),pe),ge=Object(s.a)(je)(W||(W=Object(o.a)(["\n  border-left: 1px solid rgba(0, 0, 0, 0.08);\n"]))),he=Object(d.b)((function(n){return{user:n.userState.user}}),(function(n){return{SignOut:function(){return n((function(n){g.signOut().then((function(){n(w(null))})).catch((function(n){console.log(n)}))}))}}}))((function(n){return Object(_n.jsx)(ce,{children:Object(_n.jsxs)(re,{children:[Object(_n.jsx)(oe,{children:Object(_n.jsx)("a",{href:"./home",children:Object(_n.jsx)("img",{src:Xn})})}),Object(_n.jsxs)(se,{children:[Object(_n.jsx)("div",{children:Object(_n.jsx)("input",{type:"text",placeholder:"Search"})}),Object(_n.jsx)(de,{children:Object(_n.jsx)("img",{src:qn})})]}),Object(_n.jsx)(le,{children:Object(_n.jsxs)(be,{children:[Object(_n.jsx)(xe,{className:"active",children:Object(_n.jsxs)("a",{children:[Object(_n.jsx)("img",{src:Yn}),Object(_n.jsx)("span",{children:"Home"})]})}),Object(_n.jsx)(xe,{children:Object(_n.jsxs)("a",{children:[Object(_n.jsx)("img",{src:$n}),Object(_n.jsx)("span",{children:"My Network"})]})}),Object(_n.jsx)(xe,{children:Object(_n.jsxs)("a",{children:[Object(_n.jsx)("img",{src:Zn}),Object(_n.jsx)("span",{children:"Jobs"})]})}),Object(_n.jsx)(xe,{children:Object(_n.jsxs)("a",{children:[Object(_n.jsx)("img",{src:ne}),Object(_n.jsx)("span",{children:"Messaging"})]})}),Object(_n.jsx)(xe,{children:Object(_n.jsxs)("a",{children:[Object(_n.jsx)("img",{src:ee}),Object(_n.jsx)("span",{children:"Notifications"})]})}),Object(_n.jsxs)(je,{children:[Object(_n.jsxs)("a",{children:[n.user&&n.user.photoURL?Object(_n.jsx)("img",{src:n.user.photoURL,alt:""}):Object(_n.jsx)("img",{src:te}),Object(_n.jsxs)("span",{children:["Me",Object(_n.jsx)("img",{src:ae})]})]}),Object(_n.jsx)(pe,{onClick:function(){return n.SignOut()},children:Object(_n.jsx)("a",{children:"Sign Out"})})]}),Object(_n.jsx)(ge,{children:Object(_n.jsxs)("a",{children:[Object(_n.jsx)("img",{src:ie}),Object(_n.jsxs)("span",{children:["Work",Object(_n.jsx)("img",{src:ae})]})]})})]})})]})})})),ue=t.p+"static/media/widget-icon.4a066c12.svg",me=t.p+"static/media/item-icon.3da8f7a3.svg",fe=t.p+"static/media/plus-icon.35a7eb7e.svg",Oe=t.p+"static/media/card-bg.7ae1b151.svg",ve=t.p+"static/media/photo.b826ffee.svg",we=s.a.div(J||(J=Object(o.a)(["\n  grid-area: leftside;\n"]))),ye=s.a.div(H||(H=Object(o.a)(["\n  text-align: center;\n  overflow: hidden;\n  margin-bottom: 8px;\n  background-color: #fff;\n  border-radius: 5px;\n  transition: box-shodow 83ms;\n  position: relative;\n  border: none;\n  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);\n"]))),ke=s.a.div(K||(K=Object(o.a)(["\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n  padding: 12px 12px 16px;\n  word-wrap: break-word;\n  word-break: break-word;\n"]))),ze=s.a.div(V||(V=Object(o.a)(["\n  background: url(",");\n  background-position: center;\n  background-size: 462px;\n  height: 54px;\n  margin: -12px -12px 0;\n"])),Oe),Se=s.a.div(Q||(Q=Object(o.a)(["\n  box-shadow: none;\n  background-image: url(",");\n  width: 72px;\n  height: 72px;\n  box-sizing: border-box;\n  background-clip: content-box;\n  background-color: white;\n  background-position: center;\n  background-size: 60%;\n  background-repeat: no-repeat;\n  border: 2px solid white;\n  margin: -38px auto 12px;\n  border-radius: 50%;\n"])),ve),Ae=s.a.div(X||(X=Object(o.a)(["\n  font-size: 16px;\n  line-height: 1.5;\n  color: rgb(0, 0, 0, 0.9);\n  font-weight: 600;\n"]))),Ie=s.a.div(q||(q=Object(o.a)(["\n  color: #0a66c2;\n  margin-top: 4px;\n  font-size: 12px;\n  line-height: 1.33;\n  font-weight: 400;\n"]))),Ce=s.a.div(Y||(Y=Object(o.a)(["\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n  padding-top: 12px;\n  padding-bottom: 12px;\n\n  & > a {\n    text-decoration: none;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 4px 12px;\n\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.08);\n    }\n\n    div {\n      display: flex;\n      flex-direction: column;\n      text-align: left;\n      span {\n        font-size: 12px;\n        line-height: 1.333;\n        &:first-child {\n          color: rgba(0, 0, 0, 0.6);\n        }\n        &:nth-child(2) {\n          color: rgba(0, 0, 0, 1);\n        }\n      }\n    }\n  }\n\n  svg {\n    color: rgba(0, 0, 0, 1);\n  }\n"]))),Le=s.a.a($||($=Object(o.a)(["\n  border-color: rgba(0, 0, 0, 0.8);\n  text-align: left;\n  padding: 12px;\n  font-size: 12px;\n  display: block;\n\n  span {\n    display: flex;\n    align-items: center;\n    color: rgba(0, 0, 0, 1);\n    svg {\n      color: rgba(0, 0, 0, 0.6);\n    }\n  }\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.08);\n  }\n"]))),Ue=Object(s.a)(ye)(Z||(Z=Object(o.a)(["\n  padding: 8px 0 0;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  a {\n    color: black;\n    padding: 4px 12px 4px 12px;\n    font-size: 12px;\n\n    &:hover {\n      color: #0a66c2;\n    }\n\n    span {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n\n    &:last-child {\n      color: rgba(0, 0, 0, 0.6);\n      text-decoration: none;\n      border-top: 1px solid #d6cec2;\n      padding: 12px;\n\n      &:hover {\n        background-color: rgba(0, 0, 0, 0.08);\n      }\n    }\n  }\n"]))),Ne=Object(d.b)((function(n){return{user:n.userState.user}}))((function(n){return Object(_n.jsxs)(we,{children:[Object(_n.jsxs)(ye,{children:[Object(_n.jsxs)(ke,{children:[Object(_n.jsx)(ze,{}),Object(_n.jsxs)("a",{children:[Object(_n.jsx)(Se,{}),Object(_n.jsxs)(Ae,{children:["Welmcome, ",n.user?n.user.displayName:"there!"]})]}),Object(_n.jsx)("a",{children:Object(_n.jsx)(Ie,{children:"Add a photo"})})]}),Object(_n.jsx)(Ce,{children:Object(_n.jsxs)("a",{children:[Object(_n.jsxs)("div",{children:[Object(_n.jsx)("span",{children:"Connections"}),Object(_n.jsx)("span",{children:"Grow your network"})]}),Object(_n.jsx)("img",{src:ue})]})}),Object(_n.jsx)(Le,{children:Object(_n.jsxs)("span",{children:[Object(_n.jsx)("img",{src:me}),"My Items"]})})]}),Object(_n.jsxs)(Ue,{children:[Object(_n.jsx)("a",{children:Object(_n.jsx)("span",{children:"Groups"})}),Object(_n.jsx)("a",{children:Object(_n.jsxs)("span",{children:["Events",Object(_n.jsx)("img",{src:fe})]})}),Object(_n.jsx)("a",{children:Object(_n.jsx)("span",{children:"Follow Hashtags"})}),Object(_n.jsx)("a",{children:Object(_n.jsx)("span",{children:"Discover more"})})]})]})})),Re=t(26),Te=t(35),Ee=t.n(Te),Ge=t.p+"static/media/share-image.5271d270.svg",Pe=t.p+"static/media/share-video.9e62b275.svg",_e=t.p+"static/media/share-comment.d05bfcee.svg",De=t.p+"static/media/close.2001e956.svg",Fe=s.a.div(nn||(nn=Object(o.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99999;\n  color: black;\n  background-color: rgba(0, 0, 0, 0.8);\n  animation: fadeIn 0.3s;\n"]))),Me=s.a.div(en||(en=Object(o.a)(["\n  width: 100%;\n  max-width: 552px;\n  background-color: white;\n  max-height: 90%;\n  overflow: initial;\n  border-radius: 5px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  top: 32px;\n  margin: 0 auto;\n"]))),Be=s.a.div(tn||(tn=Object(o.a)(["\n  display: block;\n  padding: 16px 21px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n  font-size: 19px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.6);\n  font-weight: 400;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  button {\n    height: 40px;\n    width: 40px;\n    min-width: auto;\n    border: none;\n    background: transparent;\n\n    &:hover {\n      border: 0 solid rgba(0, 0, 0, 0.9);\n      background: rgba(0, 0, 0, 0.09);\n      border-radius: 50%;\n    }\n\n    svg,\n    img {\n      pointer-events: none;\n    }\n  }\n"]))),We=s.a.div(an||(an=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  overflow: auto;\n  vertical-align: baseline;\n  background: transparent;\n  padding: 8px 12 px;\n"]))),Je=s.a.div(cn||(cn=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  padding: 12px 24px;\n\n  svg,\n  img {\n    width: 48px;\n    height: 48px;\n    background-clip: content-box;\n    border: 2px solid transparent;\n    border-radius: 50%;\n  }\n\n  span {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 1.5;\n    margin-left: 5px;\n  }\n"]))),He=s.a.div(rn||(rn=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 24px 12px 16px;\n"]))),Ke=s.a.button(on||(on=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 40px;\n  min-width: auto;\n  margin: 0 3px;\n  border: none;\n  background: none;\n  cursor: pointer;\n\n  &:hover {\n    border: 0 solid rgba(0, 0, 0, 0.9);\n    background: rgba(0, 0, 0, 0.09);\n    border-radius: 20%;\n  }\n\n  img {\n    padding: 0 5px;\n  }\n"]))),Ve=s.a.div(sn||(sn=Object(o.a)(["\n  align-items: center;\n  display: flex;\n  padding-right: 8px;\n  "," {\n    width: 40px;\n  }\n"])),Ke),Qe=s.a.div(dn||(dn=Object(o.a)(["\n  padding-left: 8px;\n  margin-right: auto;\n  border-left: 1px solid rgba(0, 0, 0, 0.15);\n  "," {\n    svg {\n      margin-left: 5px;\n    }\n  }\n"])),Ke),Xe=s.a.button(ln||(ln=Object(o.a)(["\n  min-width: 60px;\n  font-weight: bold;\n  height: 30px;\n  border-radius: 20px;\n  padding-left: 16px;\n  padding-right: 16px;\n  border: none;\n  background: ",";\n  color: ",";\n\n  &:hover {\n    background: ",";\n  }\n"])),(function(n){return n.disabled?"rgba(0,0,0,0.09)":"#0a66c2"}),(function(n){return n.disabled?"rgba(1,1,1,0.4)":"white"}),(function(n){return n.disabled?"rgba(0,0,0,0.08)":"#004182"})),qe=s.a.div(bn||(bn=Object(o.a)(["\n  padding: 12px 24px;\n\n  textarea {\n    width: 100%;\n    min-height: 100px;\n    resize: none;\n    border: none;\n    outline: none;\n  }\n\n  input {\n    width: 100%;\n    height: 35px;\n    font-size: 16px;\n    margin-bottom: 20px;\n  }\n"]))),Ye=s.a.div(xn||(xn=Object(o.a)(["\n  text-align: center;\n  img {\n    width: 100%;\n  }\n"]))),$e=Object(d.b)((function(n){return{user:n.userState.user}}),(function(n){return{postArticle:function(e){return n(function(n){return function(e){if(e(y(!0)),""!=n.image){var t=u.ref("images/".concat(n.image.name)).put(n.image);t.on("state_changed",(function(n){var e=n.byteTransferred/n.totalBytes*100;console.log("Progress: ".concat(e,"%")),"RUNNING"===n.state&&console.log("Progress: ".concat(e,"%"))}),(function(n){return console.log(n.code)}),Object(x.a)(b.a.mark((function i(){var a;return b.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t.snapshot.ref.getDownloadURL();case 2:a=i.sent,m.collection("articles").add({actor:{description:n.user.email,title:n.user.displayName,date:n.timestamp,image:n.user.photoURL},video:n.video,sharedImg:a,comments:0,likes:0,description:n.description}),e(y(!1));case 5:case"end":return i.stop()}}),i)}))))}else n.video&&(m.collection("articles").add({actor:{description:n.user.email,title:n.user.displayName,date:n.timestamp,image:n.user.photoURL},video:n.video,sharedImg:"",comments:0,description:n.description}),e(y(!1)))}}(e))}}}))((function(n){var e=Object(i.useState)(""),t=Object(Re.a)(e,2),a=t[0],c=t[1],r=Object(i.useState)(""),o=Object(Re.a)(r,2),s=o[0],d=o[1],l=Object(i.useState)(""),b=Object(Re.a)(l,2),x=b[0],j=b[1],g=Object(i.useState)(""),h=Object(Re.a)(g,2),u=h[0],m=h[1],f=function(n){d(""),j(""),m(n)},O=function(e){c(""),d(""),j(""),m(""),n.handleClick(e)};return Object(_n.jsx)(_n.Fragment,{children:"open"===n.showModal&&Object(_n.jsx)(Fe,{children:Object(_n.jsxs)(Me,{children:[Object(_n.jsxs)(Be,{children:[Object(_n.jsx)("h1",{children:"Create a post"}),Object(_n.jsx)("button",{onClick:function(n){return O(n)},children:Object(_n.jsx)("img",{src:De,alt:""})})]}),Object(_n.jsxs)(We,{children:[Object(_n.jsxs)(Je,{children:[n.user.photoURL?Object(_n.jsx)("img",{src:n.user.photoURL}):Object(_n.jsx)("img",{src:te,alt:""}),Object(_n.jsx)("span",{children:n.user.displayName})]}),Object(_n.jsxs)(qe,{children:[Object(_n.jsx)("textarea",{value:a,onChange:function(n){return c(n.target.value)},placeholder:"What do you want to talk about?",autoFocus:!0}),"image"===u?Object(_n.jsxs)(Ye,{children:[Object(_n.jsx)("input",{type:"file",accept:"images/gif, image/jpeg, image/png",name:"image",id:"file",style:{display:"none"},onChange:function(n){var e=n.target.files[0];""!==e&&void 0!==e||alert("Not an image the files is a ${typeof image}"),d(e)}}),Object(_n.jsx)("p",{children:Object(_n.jsx)("label",{htmlFor:"file",children:"Select an image to share"})}),s&&Object(_n.jsx)("img",{src:URL.createObjectURL(s)})]}):"media"===u&&Object(_n.jsxs)(_n.Fragment,{children:[Object(_n.jsx)("input",{type:"text",placeholder:"Please input video link",value:x,onChange:function(n){return j(n.target.value)}}),x&&Object(_n.jsx)(Ee.a,{width:"100%",url:x})]})]})]}),Object(_n.jsxs)(He,{children:[Object(_n.jsxs)(Ve,{children:[Object(_n.jsx)(Ke,{onClick:function(){return f("image")},children:Object(_n.jsx)("img",{src:Ge,alt:""})}),Object(_n.jsx)(Ke,{onClick:function(){return f("media")},children:Object(_n.jsx)("img",{src:Pe,alt:""})})]}),Object(_n.jsx)(Qe,{children:Object(_n.jsxs)(Ke,{children:[Object(_n.jsx)("img",{src:_e,alt:""}),Object(_n.jsx)("span",{children:"Anyone"})]})}),Object(_n.jsx)(Xe,{disabled:!a,onClick:function(e){return function(e){if(e.preventDefault(),e.target===e.currentTarget){var t={image:s,video:x,user:n.user,description:a,timestamp:p.a.firestore.Timestamp.now()};n.postArticle(t),O(e)}}(e)},children:"Post"})]})]})})})})),Ze=t.p+"static/media/photo-icon.80c0c55a.svg",nt=t.p+"static/media/video-icon.e0966e03.svg",et=t.p+"static/media/event-icon.584fb980.svg",tt=t.p+"static/media/article-icon.69a83863.svg",it=t.p+"static/media/loading.10a60646.svg",at=t.p+"static/media/ellipsis.f1458dc5.svg",ct=t.p+"static/media/like-icon.d37eafb1.svg",rt=t.p+"static/media/comments-icon.3806600c.svg",ot=t.p+"static/media/share-icon.f58026b0.svg",st=t.p+"static/media/send-icon.6e330549.svg",dt=s.a.div(pn||(pn=Object(o.a)(["\n  grid-area: main;\n"]))),lt=s.a.div(jn||(jn=Object(o.a)(["\n  text-align: center;\n  overflow: hidden;\n  margin-bottom: 8px;\n  background-color: #fff;\n  border-radius: 5px;\n  position: relative;\n  border: none;\n  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);\n"]))),bt=Object(s.a)(lt)(gn||(gn=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  color: #958b7b;\n  margin: 0 0 8px;\n  background: white;\n\n  div {\n    button {\n      outline: none;\n      color: rgba(0, 0, 0, 0.6);\n      font-size: 14px;\n      line-height: 1.5;\n      min-height: 48px;\n      background: transparent;\n      border: none;\n      display: flex;\n      align-items: center;\n      font-weight: 600;\n    }\n    &:first-child {\n      display: flex;\n      align-items: center;\n      padding: 8px 16px 0px 16px;\n      img {\n        width: 48px;\n        border-radius: 50%;\n        margin-right: 8px;\n      }\n      button {\n        margin: 4px 0;\n        flex-grow: 1;\n        border-radius: 35px;\n        padding-left: 16px;\n        border: 1px solid rgba(0, 0, 0, 0.15);\n        background-color: white;\n        text-align: left;\n      }\n    }\n    &:nth-child(2) {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-around;\n      padding-bottom: 4px;\n\n      button {\n        img {\n          margin: 0 4px 0 -2px;\n        }\n        span {\n          color: #70b5f9;\n        }\n      }\n    }\n  }\n"]))),xt=Object(s.a)(lt)(hn||(hn=Object(o.a)(["\n  padding: 0;\n  margin: 0 0 8px;\n  overflow: visible;\n"]))),pt=s.a.div(un||(un=Object(o.a)(["\n  padding-right: 40px;\n  flex-wrap: nowrap;\n  padding: 12px 16px 0;\n  margin-bottom: 8px;\n  align-items: center;\n  display: flex;\n\n  a {\n    margin-right: 12px;\n    flex-grow: 1;\n    overflow: hidden;\n    display: flex;\n    text-decoration: none;\n\n    img {\n      width: 48px;\n      height: 48px;\n      border-radius: 50%;\n    }\n    & > div {\n      display: flex;\n      flex-direction: column;\n      padding-left: 8px;\n      flex-grow: 1;\n      flex-basis: 0;\n      margin-right: 8px;\n      overflow: hidden;\n\n      span {\n        text-align: left;\n        padding-top: 2px;\n\n        &:first-child {\n          font-size: 14px;\n          font-weight: 700;\n          color: rgba(0, 0, 0, 1);\n        }\n        &:nth-child(n + 1) {\n          font-size: 12px;\n          color: rgba(0, 0, 0, 0.6);\n        }\n      }\n    }\n  }\n\n  button {\n    position: absolute;\n    right: 12px;\n    top: 10px;\n    background: transparent;\n    outline: none;\n    border: none;\n    /* padding-top: 1px; */\n\n    img {\n      width: 20px;\n      height: 20px;\n    }\n  }\n"]))),jt=s.a.div(mn||(mn=Object(o.a)(["\n  padding: 2px 16px;\n  overflow: hidden;\n  color: rgba(0, 0, 0, 0.9);\n  font-size: 14px;\n  text-align: left;\n"]))),gt=s.a.div(fn||(fn=Object(o.a)(["\n  margin-top: 8px;\n  display: block;\n  position: relative;\n  background-color: #f9fafb;\n  width: 100%;\n  img {\n    object-fit: contain;\n    width: 100%;\n    height: 100%;\n  }\n"]))),ht=s.a.ul(On||(On=Object(o.a)(["\n  line-height: 1.3;\n  display: flex;\n  align-items: flex-start;\n  flex-direction: row;\n  justify-content: space-between;\n  overflow: auto;\n  margin: 0 16px;\n  padding: 8px 0;\n  border-bottom: 1px solid #e9e5df;\n  list-style: none;\n  li {\n    margin-right: 5px;\n    font-size: 12px;\n    button {\n      display: flex;\n      border: none;\n      background-color: white;\n      img {\n        padding: 0 3px;\n      }\n    }\n  }\n"]))),ut=s.a.div(vn||(vn=Object(o.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  margin: 0;\n  min-height: 40px;\n  padding: 4px 8px;\n\n  button {\n    display: flex;\n    /* flex-direction: row; */\n    justify-content: center;\n    width: 150px;\n    align-items: center;\n    padding: 8px;\n    color: #0a66c2;\n    border: none;\n    background-color: white;\n\n    span {\n      padding-left: 3px;\n    }\n\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.08);\n      border-radius: 5px;\n    }\n\n    @media (min-width: 768px) {\n      span {\n        margin-left: 2px;\n      }\n    }\n  }\n"]))),mt=s.a.div(wn||(wn=Object(o.a)(["\n  text-align: center;\n  & > img {\n    width: 30px;\n  }\n"]))),ft=Object(d.b)((function(n){return{loading:n.articleState.loading,user:n.userState.user,articles:n.articleState.articles}}),(function(n){return{getArticles:function(){return n(k())},likeArticle:function(e){return n((function(n){var e;m.collection("articles").orderBy("actor.date","desc").onSnapshot((function(n){e=n.docs.map((function(n){return n.data()}))})),console.log("all",e)}))}}}))((function(n){var e=Object(i.useState)("close"),t=Object(Re.a)(e,2),a=t[0],c=t[1];Object(i.useEffect)((function(){n.getArticles(),console.log("article",n.articles.length)}),[]);var r=function(n){if(n.preventDefault(),n.target===n.currentTarget)switch(a){case"open":c("close");break;case"close":c("open");break;default:c("close")}};return Object(_n.jsx)(_n.Fragment,{children:0===n.articles.length?Object(_n.jsx)("p",{children:"There ar no articles"}):Object(_n.jsxs)(dt,{children:[Object(_n.jsxs)(bt,{children:[Object(_n.jsxs)("div",{children:[n.user&&n.user.photoURL?Object(_n.jsx)("img",{src:n.user.photoURL}):Object(_n.jsx)("img",{src:te}),Object(_n.jsx)("button",{onClick:r,disabled:!!n.loading,children:"Start a post"})]}),Object(_n.jsxs)("div",{children:[Object(_n.jsxs)("button",{children:[Object(_n.jsx)("img",{src:Ze}),Object(_n.jsx)("span",{children:"Photo"})]}),Object(_n.jsxs)("button",{children:[Object(_n.jsx)("img",{src:nt}),Object(_n.jsx)("span",{children:"Video"})]}),Object(_n.jsxs)("button",{children:[Object(_n.jsx)("img",{src:et}),Object(_n.jsx)("span",{children:"Event"})]}),Object(_n.jsxs)("button",{children:[Object(_n.jsx)("img",{src:tt}),Object(_n.jsx)("span",{children:"Article"})]})]})]}),Object(_n.jsxs)(mt,{children:[n.loading&&Object(_n.jsx)("img",{src:it}),n.articles.length>0&&n.articles.map((function(e,t){return Object(_n.jsxs)(xt,{id:e.id,children:[Object(_n.jsxs)(pt,{children:[Object(_n.jsxs)("a",{children:[Object(_n.jsx)("img",{src:e.actor.image,alt:""}),Object(_n.jsxs)("div",{children:[Object(_n.jsx)("span",{className:"title",children:e.actor.title}),Object(_n.jsx)("span",{children:e.actor.description}),Object(_n.jsx)("span",{children:e.actor.date.toDate().toLocaleDateString()})]})]}),Object(_n.jsx)("button",{children:Object(_n.jsx)("img",{src:at,alt:""})})]}),Object(_n.jsx)(jt,{children:e.description}),Object(_n.jsx)(gt,{children:Object(_n.jsx)("a",{children:!e.shareImg&&e.video?Object(_n.jsx)(Ee.a,{width:"100%",url:e.video}):e.sharedImg&&Object(_n.jsx)("img",{src:e.sharedImg})})}),Object(_n.jsxs)(ht,{children:[Object(_n.jsx)("li",{children:Object(_n.jsxs)("button",{children:[Object(_n.jsx)("img",{src:"https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"}),Object(_n.jsx)("span",{children:"75"})]})}),Object(_n.jsx)("li",{children:Object(_n.jsxs)("a",{children:[e.comments," comments"]})})]}),Object(_n.jsxs)(ut,{children:[Object(_n.jsxs)("button",{onClick:function(){return function(e){n.likeArticle(e)}(e.id)},children:[Object(_n.jsx)("img",{src:ct}),Object(_n.jsx)("span",{children:"Like"})]}),Object(_n.jsxs)("button",{children:[Object(_n.jsx)("img",{src:rt}),Object(_n.jsx)("span",{children:"Comments"})]}),Object(_n.jsxs)("button",{children:[Object(_n.jsx)("img",{src:ot}),Object(_n.jsx)("span",{children:"Share"})]}),Object(_n.jsxs)("button",{children:[Object(_n.jsx)("img",{src:st}),Object(_n.jsx)("span",{children:"Send"})]})]})]},t)}))]}),Object(_n.jsx)($e,{showModal:a,handleClick:r})]})})})),Ot=t.p+"static/media/feed-icon.ba79bd3b.svg",vt=t.p+"static/media/right-icon.2fe665fd.svg",wt=s.a.div(yn||(yn=Object(o.a)(["\n  grid-area: rightside;\n"]))),yt=s.a.div(kn||(kn=Object(o.a)(["\n  text-align: center;\n  overflow: hidden;\n  margin-bottom: 8px;\n  background-color: #fff;\n  border-radius: 5px;\n  position: relative;\n  border: none;\n  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);\n  padding: 12px;\n"]))),kt=s.a.div(zn||(zn=Object(o.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 16px;\n  width: 100%;\n  color: rgba(0, 0, 0, 0.6);\n"]))),zt=s.a.ul(Sn||(Sn=Object(o.a)(["\n  margin-top: 16px;\n  li {\n    display: flex;\n    align-items: center;\n    margin: 12px 0;\n    position: relative;\n    font-size: 14px;\n\n    & > div {\n      display: flex;\n      flex-direction: column;\n    }\n\n    button {\n      background-color: transparent;\n      color: rgba(0, 0, 0, 0.6);\n      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);\n      padding: 16px;\n      align-items: center;\n      border-radius: 15px;\n      box-sizing: border-box;\n      font-weight: 600;\n      display: inline-flex;\n      justify-content: center;\n      max-height: 32px;\n      max-width: 480px;\n      text-align: center;\n      outline: none;\n    }\n  }\n"]))),St=s.a.div(An||(An=Object(o.a)(['\n  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 48px;\n  height: 48px;\n  margin-right: 8px;\n']))),At=s.a.a(In||(In=Object(o.a)(["\n  color: #0a66c2;\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n"]))),It=Object(s.a)(yt)(Cn||(Cn=Object(o.a)(["\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]))),Ct=function(n){return Object(_n.jsxs)(wt,{children:[Object(_n.jsxs)(yt,{children:[Object(_n.jsxs)(kt,{children:[Object(_n.jsx)("h2",{children:"Add to your feed"}),Object(_n.jsx)("img",{src:Ot})]}),Object(_n.jsxs)(zt,{children:[Object(_n.jsxs)("li",{children:[Object(_n.jsx)("a",{children:Object(_n.jsx)(St,{})}),Object(_n.jsxs)("div",{children:[Object(_n.jsx)("span",{children:"#Linkedin"}),Object(_n.jsx)("button",{children:"Follow"})]})]}),Object(_n.jsxs)("li",{children:[Object(_n.jsx)("a",{children:Object(_n.jsx)(St,{})}),Object(_n.jsxs)("div",{children:[Object(_n.jsx)("span",{children:"#Video"}),Object(_n.jsx)("button",{children:"Follow"})]})]})]}),Object(_n.jsxs)(At,{children:["View all recommendation",Object(_n.jsx)("img",{src:vt})]})]}),Object(_n.jsx)(It,{children:Object(_n.jsx)("img",{src:"https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"})})]})},Lt=s.a.div(Ln||(Ln=Object(o.a)(["\n  padding-top: 52px;\n  max-width: 100%;\n"]))),Ut=(s.a.div(Un||(Un=Object(o.a)(["\n  max-width: 1128px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),s.a.div(Nn||(Nn=Object(o.a)(["\n  min-height: 50px;\n  padding: 16px 0;\n  box-sizing: content-border-box;\n  text-align: center;\n  text-decoration: underline;\n  display: flex;\n  justify-content: center;\n\n  h5 {\n    color: #0a66c2;\n    font-size: 14px;\n    a {\n      font-weight: 700;\n    }\n  }\n\n  P {\n    font-size: 14px;\n    color: #434649;\n    font-weight: 600;\n  }\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    padding: 0 5px;\n  }\n"])))),Nt=s.a.div(Rn||(Rn=Object(o.a)(['\n  display: grid;\n  grid-template-areas: "leftside main rightside";\n  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);\n  column-gap: 25px;\n  row-gap: 25px;\n  margin: 25px 0;\n  @media (max-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    padding: 0 5px;\n  }\n']))),Rt=Object(d.b)((function(n){return{user:n.userState.user}}))((function(n){return Object(_n.jsxs)(Lt,{children:[!n.user&&Object(_n.jsx)(Tn.a,{to:"/"}),Object(_n.jsxs)(Ut,{children:[Object(_n.jsx)("h5",{children:Object(_n.jsx)("a",{children:"Hiring in a hurry? - "})}),Object(_n.jsx)("p",{children:"Find talented pros in records time with Upwork and keep business moving"})]}),Object(_n.jsxs)(Nt,{children:[Object(_n.jsx)(Ne,{}),Object(_n.jsx)(ft,{}),Object(_n.jsx)(Ct,{})]})]})}));var Tt=Object(d.b)((function(n){return{}}),(function(n){return{getUserAuth:function(){return n((function(n){g.onAuthStateChanged(function(){var e=Object(x.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&n(w(t));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}))}}}))((function(n){return Object(i.useEffect)((function(){n.getUserAuth()}),[]),Object(_n.jsx)("div",{className:"App",children:Object(_n.jsx)(Qn.a,{basename:"/linkedin-clone",children:Object(_n.jsxs)(Tn.d,{children:[Object(_n.jsxs)(Tn.b,{path:"/home",children:[Object(_n.jsx)(he,{}),Object(_n.jsx)(Rt,{})]}),Object(_n.jsx)(Tn.b,{path:"/",children:Object(_n.jsx)(Dn,{})})]})})})})),Et=t(29),Gt=t(22),Pt={user:null},_t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case f:return Object(Gt.a)(Object(Gt.a)({},n),{},{user:e.user});default:return n}},Dt={articles:[],loading:!1},Ft=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return Object(Gt.a)(Object(Gt.a)({},n),{},{loading:e.status});case v:return Object(Gt.a)(Object(Gt.a)({},n),{},{articles:e.payload});default:return n}},Mt=Object(Et.b)({userState:_t,articleState:Ft}),Bt=t(49),Wt=Object(Et.c)(Mt,Object(Et.a)(Bt.a));r.a.render(Object(_n.jsx)(Qn.a,{basename:"/linkedin-clone",children:Object(_n.jsx)(a.a.StrictMode,{children:Object(_n.jsx)(d.a,{store:Wt,children:Object(_n.jsx)(Tt,{})})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.612dfd7a.chunk.js.map