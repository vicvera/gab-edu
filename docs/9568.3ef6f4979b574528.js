"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[9568],{9568:(O,u,n)=>{n.r(u),n.d(u,{default:()=>A});var c=n(4755),a=n(1531),r=n(7579),l=n(5963),d=n(8746),m=n(2529),g=n(2722),h=n(8505),t=n(2223),f=n(8951);function x(e,i){if(1&e&&(t.ynx(0),t._uU(1),t.ALo(2,"i18nPlural"),t.BQk()),2&e){const o=t.oxw();t.xp6(1),t.hij(" Redireccionando en ",t.xi3(2,1,o.countdown,o.countdownMapping)," ")}}function p(e,i){1&e&&(t.ynx(0),t._uU(1," Esta siendo redirigido! "),t.BQk())}const v=function(){return["/sign-in"]},A=[{path:"",component:(()=>{class e{constructor(o,s){this._authService=o,this._router=s,this.countdown=5,this.countdownMapping={"=1":"# second",other:"# seconds"},this._unsubscribeAll=new r.x}ngOnInit(){this._authService.signOut(),(0,l.H)(1e3,1e3).pipe((0,d.x)(()=>{this._router.navigate(["sign-in"])}),(0,m.o)(()=>this.countdown>0),(0,g.R)(this._unsubscribeAll),(0,h.b)(()=>this.countdown--)).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(f.e),t.Y36(a.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["auth-sign-out"]],standalone:!0,features:[t.jDz],decls:13,vars:4,consts:[[1,"flex","flex-col","flex-auto","items-center","sm:justify-center","min-w-0"],[1,"w-full","sm:w-auto","py-8","px-4","sm:p-12","sm:rounded-2xl","sm:shadow","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight","text-center"],[1,"flex","justify-center","mt-0.5","font-medium"],[4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary","text-center"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4,"Cerrando sesi\xf3n!"),t.qZA(),t.TgZ(5,"div",4),t.YNc(6,x,3,4,"ng-container",5),t.YNc(7,p,2,0,"ng-container",5),t.qZA(),t.TgZ(8,"div",6)(9,"span"),t._uU(10,"Ir a"),t.qZA(),t.TgZ(11,"a",7),t._uU(12,"iniciar sesi\xf3n "),t.qZA()()()()()),2&o&&(t.xp6(6),t.Q6J("ngIf",s.countdown>0),t.xp6(1),t.Q6J("ngIf",0===s.countdown),t.xp6(4),t.Q6J("routerLink",t.DdM(3,v)))},dependencies:[c.O5,a.rH,c.Gx],encapsulation:2}),e})()}]}}]);