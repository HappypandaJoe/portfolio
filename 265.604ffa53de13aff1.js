"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[265],{9265:(Q,f,d)=>{d.r(f),d.d(f,{AboutMeComponent:()=>J});var m=d(6895),t=d(4650),p=d(3238),M=d(1281),w=d(727),T=d(4968),I=d(9300);const D=["primaryValueBar"],C=(0,p.pj)(class{constructor(e){this._elementRef=e}},"primary"),v=new t.OlP("mat-progress-bar-location",{providedIn:"root",factory:function k(){const e=(0,t.f3M)(m.K0),o=e?e.location:null;return{getPathname:()=>o?o.pathname+o.search:""}}}),y=new t.OlP("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");let O=0,_=(()=>{class e extends C{constructor(a,s,l,u,h,N){super(a),this._ngZone=s,this._animationMode=l,this._changeDetectorRef=N,this._isNoopAnimation=!1,this._value=0,this._bufferValue=0,this.animationEnd=new t.vpe,this._animationEndSubscription=w.w0.EMPTY,this.mode="determinate",this.progressbarId="mat-progress-bar-"+O++;const j=u?u.getPathname().split("#")[0]:"";this._rectangleFillValue=`url('${j}#${this.progressbarId}')`,this._isNoopAnimation="NoopAnimations"===l,h&&(h.color&&(this.color=this.defaultColor=h.color),this.mode=h.mode||this.mode)}get value(){return this._value}set value(a){this._value=x((0,M.su)(a)||0),this._changeDetectorRef?.markForCheck()}get bufferValue(){return this._bufferValue}set bufferValue(a){this._bufferValue=x(a||0),this._changeDetectorRef?.markForCheck()}_primaryTransform(){return{transform:`scale3d(${this.value/100}, 1, 1)`}}_bufferTransform(){return"buffer"===this.mode?{transform:`scale3d(${this.bufferValue/100}, 1, 1)`}:null}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{const a=this._primaryValueBar.nativeElement;this._animationEndSubscription=(0,T.R)(a,"transitionend").pipe((0,I.h)(s=>s.target===a)).subscribe(()=>{0!==this.animationEnd.observers.length&&("determinate"===this.mode||"buffer"===this.mode)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))})})}ngOnDestroy(){this._animationEndSubscription.unsubscribe()}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(t.SBq),t.Y36(t.R0b),t.Y36(t.QbO,8),t.Y36(v,8),t.Y36(y,8),t.Y36(t.sBO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["mat-progress-bar"]],viewQuery:function(a,s){if(1&a&&t.Gf(D,5),2&a){let l;t.iGM(l=t.CRH())&&(s._primaryValueBar=l.first)}},hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-progress-bar"],hostVars:4,hostBindings:function(a,s){2&a&&(t.uIk("aria-valuenow","indeterminate"===s.mode||"query"===s.mode?null:s.value)("mode",s.mode),t.ekj("_mat-animation-noopable",s._isNoopAnimation))},inputs:{color:"color",value:"value",bufferValue:"bufferValue",mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],features:[t.qOj],decls:10,vars:4,consts:[["aria-hidden","true"],["width","100%","height","4","focusable","false",1,"mat-progress-bar-background","mat-progress-bar-element"],["x","4","y","0","width","8","height","4","patternUnits","userSpaceOnUse",3,"id"],["cx","2","cy","2","r","2"],["width","100%","height","100%"],[1,"mat-progress-bar-buffer","mat-progress-bar-element",3,"ngStyle"],[1,"mat-progress-bar-primary","mat-progress-bar-fill","mat-progress-bar-element",3,"ngStyle"],["primaryValueBar",""],[1,"mat-progress-bar-secondary","mat-progress-bar-fill","mat-progress-bar-element"]],template:function(a,s){1&a&&(t.TgZ(0,"div",0),t.O4$(),t.TgZ(1,"svg",1)(2,"defs")(3,"pattern",2),t._UZ(4,"circle",3),t.qZA()(),t._UZ(5,"rect",4),t.qZA(),t.kcU(),t._UZ(6,"div",5)(7,"div",6,7)(9,"div",8),t.qZA()),2&a&&(t.xp6(3),t.Q6J("id",s.progressbarId),t.xp6(2),t.uIk("fill",s._rectangleFillValue),t.xp6(1),t.Q6J("ngStyle",s._bufferTransform()),t.xp6(1),t.Q6J("ngStyle",s._primaryTransform()))},dependencies:[m.PC],styles:['.mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}.mat-progress-bar._mat-animation-noopable{transition:none !important;animation:none !important}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:"";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}'],encapsulation:2,changeDetection:0}),e})();function x(e,o=0,a=100){return Math.max(o,Math.min(a,e))}let F=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.ez,p.BQ,p.BQ]}),e})();function B(e,o){if(1&e&&(t.ynx(0),t.TgZ(1,"div",1)(2,"p",2),t._uU(3),t.qZA(),t._UZ(4,"mat-progress-bar",3),t.qZA(),t.BQk()),2&e){const a=o.$implicit,s=t.oxw();t.xp6(3),t.Oqu(a.name),t.xp6(1),t.Q6J("value",s.valueToPercent(a.expertise))}}let P=(()=>{class e{constructor(){this.MAXVALUE=5,this.PERCENT=100}valueToPercent(a){return this.PERCENT/this.MAXVALUE*a}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["about-me-bar"]],inputs:{list:"list"},standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"bar-container"],[1,"header-text"],["mode","determinate","color","accent",1,"bar",3,"value"]],template:function(a,s){1&a&&t.YNc(0,B,5,2,"ng-container",0),2&a&&t.Q6J("ngForOf",s.list)},dependencies:[m.ez,m.sg,F,_],styles:[".bar-container[_ngcontent-%COMP%]{width:33em;margin:.5em}.bar-container[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]{font-size:large!important}.bar-container[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{height:.5em}"]}),e})();var A=d(3336),g=d(3331);function Z(e,o){if(1&e&&(t.TgZ(0,"div",4),t._uU(1),t.qZA()),2&e){const a=t.oxw().$implicit;t.xp6(1),t.Oqu(a.notes)}}function E(e,o){if(1&e&&(t.TgZ(0,"mat-list-item")(1,"mat-icon",1),t._uU(2),t.qZA(),t.TgZ(3,"div",2),t._uU(4),t.qZA(),t.YNc(5,Z,2,1,"div",3),t.qZA()),2&e){const a=o.$implicit,s=t.oxw();t.xp6(2),t.Oqu(s.getType()),t.xp6(2),t.Oqu(a.name),t.xp6(1),t.Q6J("ngIf",a.notes)}}let S=(()=>{class e{getType(){switch(this.type){case"education":return"local_library";case"proficiencies":return"business_center";default:return"chevron_right"}}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["about-me-list"]],inputs:{list:"list",type:"type"},standalone:!0,features:[t.jDz],decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],["matListIcon",""],["mat-line","",1,"header-text"],["mat-line","","class","sub-text",4,"ngIf"],["mat-line","",1,"sub-text"]],template:function(a,s){1&a&&(t.TgZ(0,"mat-list"),t.YNc(1,E,6,3,"mat-list-item",0),t.qZA()),2&a&&(t.xp6(1),t.Q6J("ngForOf",s.list))},dependencies:[m.ez,m.sg,m.O5,g.ie,g.i$,g.Tg,p.X2,g.Nh,A.Ps,A.Hw],styles:[".header-text[_ngcontent-%COMP%]{font-size:large!important}.sub-text[_ngcontent-%COMP%]{font-size:small!important;text-indent:1em}"]}),e})();const r=[{name:"Gitlab"},{name:"Github"},{name:"Atlassian Confluence"},{name:"Atlassian Jira"},{name:"Miro"}],n=[{name:"Java",expertise:2.5},{name:"Typescript",expertise:4.5},{name:"Javascript",expertise:4.5},{name:"Python",expertise:4},{name:"CSS",expertise:4},{name:"HTML",expertise:4}],i=[{name:"Angular",expertise:4.5},{name:"Angular Material",expertise:4},{name:"Springboot",expertise:2},{name:"React",expertise:3},{name:"SCSS",expertise:3.5},{name:"MongoDb",expertise:2.5},{name:"SQL",expertise:2},{name:"Git",expertise:3.5}],c=[{name:"General Assembly",notes:"Coding bootcamp"},{name:"Oregon State University",notes:"In progress: 2/3 years"},{name:"Codepath",notes:"Interview prep & data structures/algorithms review"}];var b=d(3546),X=d(4850);function L(e,o){if(1&e&&t._UZ(0,"about-me-list",6),2&e){const a=t.oxw().$implicit,s=t.oxw();t.Q6J("type",a)("list",s.proficiencies)}}function R(e,o){if(1&e&&t._UZ(0,"about-me-list",6),2&e){const a=t.oxw().$implicit,s=t.oxw();t.Q6J("type",a)("list",s.education)}}function U(e,o){if(1&e&&t._UZ(0,"about-me-bar",7),2&e){const a=t.oxw(2);t.Q6J("list",a.frameworks)}}function G(e,o){if(1&e&&t._UZ(0,"about-me-bar",7),2&e){const a=t.oxw(2);t.Q6J("list",a.languages)}}function z(e,o){if(1&e&&(t.TgZ(0,"mat-card")(1,"mat-card-title"),t._uU(2),t.ALo(3,"titlecase"),t.qZA(),t._UZ(4,"mat-divider",2),t.TgZ(5,"mat-card-content"),t.ynx(6,3),t.YNc(7,L,1,2,"about-me-list",4),t.YNc(8,R,1,2,"about-me-list",4),t.YNc(9,U,1,1,"about-me-bar",5),t.YNc(10,G,1,1,"about-me-bar",5),t.BQk(),t.qZA()()),2&e){const a=o.$implicit;t.xp6(2),t.Oqu(t.lcZ(3,7,a)),t.xp6(2),t.Q6J("inset",!0),t.xp6(2),t.Q6J("ngSwitch",a),t.xp6(1),t.Q6J("ngSwitchCase","proficiencies"),t.xp6(1),t.Q6J("ngSwitchCase","education"),t.xp6(1),t.Q6J("ngSwitchCase","frameworks"),t.xp6(1),t.Q6J("ngSwitchCase","languages")}}let J=(()=>{class e{constructor(){this.proficiencies=[...r].sort(this.alphaSort),this.education=[...c].sort(this.alphaSort),this.frameworks=[...i].sort(this.alphaSort),this.languages=[...n].sort(this.alphaSort),this.cards=["frameworks","languages","proficiencies","education"]}alphaSort(a,s){const l=a.name.toUpperCase(),u=s.name.toUpperCase();return l<u?-1:l>u?1:0}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-about-me"]],standalone:!0,features:[t.jDz],decls:2,vars:1,consts:[[1,"container"],[4,"ngFor","ngForOf"],[3,"inset"],[3,"ngSwitch"],[3,"type","list",4,"ngSwitchCase"],[3,"list",4,"ngSwitchCase"],[3,"type","list"],[3,"list"]],template:function(a,s){1&a&&(t.TgZ(0,"div",0),t.YNc(1,z,11,9,"mat-card",1),t.qZA()),2&a&&(t.xp6(1),t.Q6J("ngForOf",s.cards))},dependencies:[m.ez,m.sg,m.RF,m.n9,m.rS,b.QW,b.a8,b.dn,b.n5,S,P,X.t,X.d],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;padding:3em;gap:3em;align-items:flex-start}"]}),e})()},3546:(Q,f,d)=>{d.d(f,{G2:()=>_,QW:()=>S,a8:()=>g,dn:()=>C,hq:()=>y,n5:()=>v});var m=d(4650),t=d(3238);const p=["*",[["mat-card-footer"]]],M=["*","mat-card-footer"];let C=(()=>{class r{}return r.\u0275fac=function(i){return new(i||r)},r.\u0275dir=m.lG2({type:r,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),r})(),v=(()=>{class r{}return r.\u0275fac=function(i){return new(i||r)},r.\u0275dir=m.lG2({type:r,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),r})(),y=(()=>{class r{constructor(){this.align="start"}}return r.\u0275fac=function(i){return new(i||r)},r.\u0275dir=m.lG2({type:r,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-card-actions"],hostVars:2,hostBindings:function(i,c){2&i&&m.ekj("mat-card-actions-align-end","end"===c.align)},inputs:{align:"align"},exportAs:["matCardActions"]}),r})(),_=(()=>{class r{}return r.\u0275fac=function(i){return new(i||r)},r.\u0275dir=m.lG2({type:r,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-card-image"]}),r})(),g=(()=>{class r{constructor(i){this._animationMode=i}}return r.\u0275fac=function(i){return new(i||r)(m.Y36(m.QbO,8))},r.\u0275cmp=m.Xpm({type:r,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(i,c){2&i&&m.ekj("_mat-animation-noopable","NoopAnimations"===c._animationMode)},exportAs:["matCard"],ngContentSelectors:M,decls:2,vars:0,template:function(i,c){1&i&&(m.F$t(p),m.Hsn(0),m.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card._mat-animation-noopable{transition:none !important;animation:none !important}.mat-card>.mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card>.mat-divider-horizontal{left:auto;right:0}.mat-card>.mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card>.mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],encapsulation:2,changeDetection:0}),r})(),S=(()=>{class r{}return r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=m.oAB({type:r}),r.\u0275inj=m.cJS({imports:[t.BQ,t.BQ]}),r})()}}]);