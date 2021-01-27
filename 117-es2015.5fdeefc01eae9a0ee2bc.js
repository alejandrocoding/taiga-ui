(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{"0WYk":function(t,e,n){"use strict";n.r(e),n.d(e,"ExampleTuiManualHintModule",(function(){return j}));var o=n("2kYt"),a=n("sEIs"),i=n("SVIu"),l=n("Qq0t"),u=n("kiPw"),r=n("Piem"),c=n("EM62"),m=n("PGvk"),p=n("K/iL"),d=n("OZlg"),s=n("e0eB"),h=n("iyc4"),f=n("zV1d"),y=n("IrCu"),M=n("TxeG"),g=n("yZWP");function b(t,e){1&t&&(c["\u0275\u0275elementStart"](0,"div",3),c["\u0275\u0275text"](1," Use "),c["\u0275\u0275elementStart"](2,"a",4),c["\u0275\u0275text"](3,"Hint"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]())}let H=(()=>{class t{constructor(){this.hintShown=!1}toggleHint(){this.hintShown=!this.hintShown}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c["\u0275\u0275defineComponent"]({type:t,selectors:[["tui-manual-hint-example-1"]],decls:4,vars:2,consts:[["tuiButton","","type","button",3,"tuiManualHint","tuiManualHintShow","click"],["polymorpheus",""],["template","polymorpheus"],["tuiMode","onDark"],["tuiLink","","href","tui-hint",1,"link"]],template:function(t,e){if(1&t&&(c["\u0275\u0275elementStart"](0,"button",0),c["\u0275\u0275listener"]("click",(function(){return e.toggleHint()})),c["\u0275\u0275text"](1," Hint\n"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](2,b,4,0,"ng-template",1,2,c["\u0275\u0275templateRefExtractor"])),2&t){const t=c["\u0275\u0275reference"](3);c["\u0275\u0275property"]("tuiManualHint",t)("tuiManualHintShow",e.hintShown)}},directives:[f.a,y.a,u.e,M.a,g.a],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),t})();var w=n("EPR0"),S=n("yHor"),x=n("zGJC"),C=n("FSyC"),E=n("u8jZ");const T=["header","ManualHint"];var k;k="Directive to show a hint manually";const v=["heading","Basic"];function P(t,e){if(1&t&&(c["\u0275\u0275elementStart"](0,"p"),c["\u0275\u0275i18n"](1,k),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"tui-doc-example",2),c["\u0275\u0275i18nAttributes"](3,v),c["\u0275\u0275element"](4,"tui-manual-hint-example-1"),c["\u0275\u0275elementEnd"]()),2&t){const t=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("content",t.example1)}}var D,I,z,V;function $(t,e){1&t&&c["\u0275\u0275i18n"](0,D)}function B(t,e){1&t&&c["\u0275\u0275i18n"](0,I)}function O(t,e){if(1&t){const t=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tui-doc-demo"),c["\u0275\u0275elementStart"](1,"button",3),c["\u0275\u0275listener"]("click",(function(){return c["\u0275\u0275restoreView"](t),c["\u0275\u0275nextContext"]().sayHi()})),c["\u0275\u0275text"](2," A strange button "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"tui-doc-documentation"),c["\u0275\u0275template"](4,$,1,0,"ng-template",4),c["\u0275\u0275template"](5,B,1,0,"ng-template",5),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return c["\u0275\u0275restoreView"](t),c["\u0275\u0275nextContext"]().show=e})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](6,"inherited-documentation")}if(2&t){const t=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("tuiManualHintShow",t.show)("tuiHintMode",t.mode)("tuiHintDirection",t.direction),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("documentationPropertyValue",t.show)}}function A(t,e){if(1&t&&(c["\u0275\u0275elementStart"](0,"ol",6),c["\u0275\u0275elementStart"](1,"li"),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275i18nStart"](3,z),c["\u0275\u0275element"](4,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](5,"tui-doc-code",7),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"li"),c["\u0275\u0275elementStart"](7,"p"),c["\u0275\u0275i18n"](8,V),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](9,"tui-doc-code",8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&t){const t=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("code",t.exampleImportModule),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("code",t.exampleInsertTemplate)}}D=" Content ",I=" Show/hide hint ",z=" Import " + "\ufffd#4\ufffd" + "TuiManualHintModule" + "\ufffd/#4\ufffd" + " into a module where you want to use our component ",V="Add to the template:";let L=(()=>{class t extends m.a{constructor(){super(...arguments),this.exampleImportModule="import {TuiManualHintModule} from '@taiga-ui/core'; \n\n... \n@NgModule({\n    imports: [\n        ... \n        TuiManualHintModule \n    ], \n...\n",this.exampleInsertTemplate='<button\n    tuiButton type="button"\n    tuiManualHint="Custom host with text tooltip"\n    [tuiManualHintShow]="true"\n>\n    Press me\n</button>\n\n<button tuiButton type="button" [tuiManualHint]="template" [tuiManualHintShow]="true">\n    Press that \u2191\n</button>\n\n<ng-template #template="polymorpheus" polymorpheus>\n    Reusable template\n</ng-template>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\n\n@Component({\n    selector: 'tui-manual-hint-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n})\nexport class TuiManualHintExample1 {\n    hintShown = false;\n\n    toggleHint() {\n        this.hintShown = !this.hintShown;\n    }\n}\n",HTML:'<button\n    tuiButton\n    type="button"\n    [tuiManualHint]="template"\n    [tuiManualHintShow]="hintShown"\n    (click)="toggleHint()"\n>\n    Hint\n</button>\n\n<ng-template #template="polymorpheus" polymorpheus>\n    <div tuiMode="onDark">\n        Use <a tuiLink class="link" href="tui-hint">Hint</a>\n    </div>\n</ng-template>\n'},this.show=!1}sayHi(){console.log("Hi all!")}}return t.\u0275fac=function(e){return R(e||t)},t.\u0275cmp=c["\u0275\u0275defineComponent"]({type:t,selectors:[["example-manual-hint"]],features:[c["\u0275\u0275ProvidersFeature"]([{provide:p.a,useExisting:Object(c.forwardRef)(()=>t)}]),c["\u0275\u0275InheritDefinitionFeature"]],decls:5,vars:0,consts:[["package","CORE",6,"header"],["pageTab",""],["id","base",3,"content",6,"heading"],["tuiButton","","type","button","tuiManualHint","It says 'Hi all!' into console",3,"tuiManualHintShow","tuiHintMode","tuiHintDirection","click"],["documentationPropertyName","tuiManualHint","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent | null"],["documentationPropertyName","tuiManualHintShow","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(t,e){1&t&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275i18nAttributes"](1,T),c["\u0275\u0275template"](2,P,5,1,"ng-template",1),c["\u0275\u0275template"](3,O,7,4,"ng-template",1),c["\u0275\u0275template"](4,A,10,2,"ng-template",1),c["\u0275\u0275elementEnd"]())},directives:[d.a,s.a,h.a,H,w.a,f.a,y.a,S.a,x.a,C.a,E.a],encapsulation:2,changeDetection:0}),t})();const R=c["\u0275\u0275getInheritedFactory"](L);let j=(()=>{class t{}return t.\u0275mod=c["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[l.TuiButtonModule,l.TuiManualHintModule,l.TuiLinkModule,l.TuiModeModule,u.c,o.c,r.a,...i.d,a.f.forChild(Object(i.m)(L))]]}),t})()}}]);