(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"V2+L":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class i{}var e=u("pMnS"),s=u("iInd"),r=u("SVse");class o{constructor(l,n){this.users=l,this.title=n,this.items=[]}ngOnInit(){this.index(),this.setTitle()}index(){this.loading=!0,this.users.index().subscribe(l=>{const{results:n}=l;this.items=n,this.loading=!1})}setTitle(){this.title.setTitle("Users")}}var c=u("j7lE"),b=u("cUpR"),a=t.jb({encapsulation:0,styles:[["ul[_ngcontent-%COMP%]{margin:0;padding:0;display:flex;flex-wrap:wrap}li[_ngcontent-%COMP%]{flex:1;display:block;padding:20px}a[_ngcontent-%COMP%]{color:inherit;text-decoration:none;font-size:20px}img[_ngcontent-%COMP%]{border-radius:50%}strong[_ngcontent-%COMP%]{margin-bottom:10px;display:block}"]],data:{}});function g(l){return t.zb(0,[(l()(),t.lb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.yb(-1,null,["Loading..."]))],null,null)}function p(l){return t.zb(0,[(l()(),t.lb(0,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.lb(1,0,null,null,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.wb(l,2).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&i),i}),null,null)),t.kb(2,671744,null,0,s.l,[s.k,s.a,r.g],{routerLink:[0,"routerLink"]},null),(l()(),t.lb(3,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.yb(4,null,["",""])),(l()(),t.lb(5,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null))],(function(l,n){l(n,2,0,n.context.$implicit.login.uuid)}),(function(l,n){l(n,1,0,t.wb(n,2).target,t.wb(n,2).href),l(n,4,0,n.context.$implicit.name.first),l(n,5,0,n.context.$implicit.picture.large,t.pb(1,"",n.context.$implicit.name.first,""))}))}function f(l){return t.zb(0,[(l()(),t.lb(0,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),t.bb(16777216,null,null,1,null,p)),t.kb(2,278528,null,0,r.h,[t.K,t.H,t.p],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.items)}),null)}function d(l){return t.zb(0,[(l()(),t.bb(16777216,null,null,1,null,g)),t.kb(1,16384,null,0,r.i,[t.K,t.H],{ngIf:[0,"ngIf"]},null),(l()(),t.bb(16777216,null,null,1,null,f)),t.kb(3,16384,null,0,r.i,[t.K,t.H],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,u.loading),l(n,3,0,!u.loading)}),null)}function m(l){return t.zb(0,[(l()(),t.lb(0,0,null,null,1,"app-users-list",[],null,null,null,d,a)),t.kb(1,114688,null,0,o,[c.a,b.i],null,null)],(function(l,n){l(n,1,0)}),null)}var h=t.hb("app-users-list",o,m,{},{},[]);class k{constructor(l,n){this.users=l,this.title=n}ngOnInit(){this.get(),this.getAsync()}get(){this.loading=!0,this.users.get().subscribe(l=>{const{results:n}=l;this.item=n[0],this.loading=!1,this.setTitle()})}getAsync(){Array.from(Array(10).keys()).map(l=>{this.users.getAsync(l).subscribe(l=>console.log("Async request done",l))})}setTitle(){const{first:l}=this.item.name;this.title.setTitle(l)}add(){this.users.store().subscribe()}}var y=t.jb({encapsulation:0,styles:[[""]],data:{}});function v(l){return t.zb(0,[(l()(),t.lb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.yb(-1,null,["Loading..."]))],null,null)}function x(l){return t.zb(0,[(l()(),t.lb(0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t.lb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.yb(2,null,["",""])),(l()(),t.lb(3,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(l()(),t.lb(4,0,null,null,1,"button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.add()&&t),t}),null,null)),(l()(),t.yb(-1,null,["Add"]))],null,(function(l,n){var u=n.component;l(n,2,0,u.item.name.first),l(n,3,0,u.item.picture.large,u.item.name.first)}))}function w(l){return t.zb(0,[(l()(),t.bb(16777216,null,null,1,null,v)),t.kb(1,16384,null,0,r.i,[t.K,t.H],{ngIf:[0,"ngIf"]},null),(l()(),t.bb(16777216,null,null,1,null,x)),t.kb(3,16384,null,0,r.i,[t.K,t.H],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,u.loading),l(n,3,0,!u.loading)}),null)}function I(l){return t.zb(0,[(l()(),t.lb(0,0,null,null,1,"app-users-item",[],null,null,null,w,y)),t.kb(1,114688,null,0,k,[c.a,b.i],null,null)],(function(l,n){l(n,1,0)}),null)}var z=t.hb("app-users-item",k,I,{},{},[]);class O{}u.d(n,"UsersModuleNgFactory",(function(){return K}));var K=t.ib(i,[],(function(l){return t.ub([t.vb(512,t.j,t.U,[[8,[e.a,h,z]],[3,t.j],t.u]),t.vb(4608,r.k,r.j,[t.r,[2,r.r]]),t.vb(1073742336,r.b,r.b,[]),t.vb(1073742336,s.m,s.m,[[2,s.r],[2,s.k]]),t.vb(1073742336,O,O,[]),t.vb(1073742336,i,i,[]),t.vb(1024,s.i,(function(){return[[{path:"",component:o},{path:":id",component:k}]]}),[])])}))}}]);