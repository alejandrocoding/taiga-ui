(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{dfdC:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiToolbarModule",(function(){return R}));var o=n("An66"),i=n("3kIJ"),r=n("1VvW"),a=n("SVIu"),l=n("vgRF"),c=n("l4xa"),d=n("Qq0t"),s=n("kZht");let u=(()=>{class e{constructor(t,n){this.elementRef=t,this.renderer=n,this.observer=new MutationObserver(()=>{setTimeout(()=>{this.onChange(e.processValue(this.elementRef.nativeElement.innerHTML))})}),this.onTouched=()=>{},this.onChange=()=>{}}ngAfterViewInit(){this.observer.observe(this.elementRef.nativeElement,{characterData:!0,childList:!0,subtree:!0})}ngOnDestroy(){this.observer.disconnect()}onInput(){this.observer.disconnect(),this.onChange(e.processValue(this.elementRef.nativeElement.innerHTML))}onBlur(){this.onTouched()}writeValue(t){this.renderer.setProperty(this.elementRef.nativeElement,"innerHTML",e.processValue(t))}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.renderer.setAttribute(this.elementRef.nativeElement,"contenteditable",String(!e))}static processValue(e){const t=e||"";return"<br>"===t.trim()?"":t}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](s.ElementRef),s["\u0275\u0275directiveInject"](s.Renderer2))},e.\u0275dir=s["\u0275\u0275defineDirective"]({type:e,selectors:[["","contenteditable","","formControlName",""],["","contenteditable","","formControl",""],["","contenteditable","","ngModel",""]],hostBindings:function(e,t){1&e&&s["\u0275\u0275listener"]("input",(function(){return t.onInput()}))("blur",(function(){return t.onBlur()}))},features:[s["\u0275\u0275ProvidersFeature"]([{provide:i.NG_VALUE_ACCESSOR,useExisting:Object(s.forwardRef)(()=>e),multi:!0}])]}),e})(),p=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)}}),e})();var m=n("OZlg"),f=n("e0eB"),h=n("yZWP"),b=n("iyc4"),g=n("4hRd"),v=n("W2aA"),T=n("OXFH");function w(e,t){if(1&e&&s["\u0275\u0275element"](0,"tui-toolbar",4),2&e){s["\u0275\u0275nextContext"]();const e=s["\u0275\u0275reference"](2);s["\u0275\u0275property"]("editor",e)}}let C=(()=>{class e{constructor(){this.open=!1,this.model="<p>Lorem ipsum</p><p><b>Lorem ipsum</b></p>"}onActiveZone(e){this.open=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-toolbar-example-1"]],decls:5,vars:5,consts:[[3,"tuiActiveZoneChange"],["contenteditable","","tuiDropdownDirection","top",1,"editor","tui-editor-socket",3,"tuiDropdown","tuiDropdownContent","ngModel","ngModelChange"],["editor",""],["dropdown",""],[3,"editor"]],template:function(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275listener"]("tuiActiveZoneChange",(function(e){return t.onActiveZone(e)})),s["\u0275\u0275elementStart"](1,"div",1,2),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](3,w,1,1,"ng-template",null,3,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275reference"](4);s["\u0275\u0275advance"](1),s["\u0275\u0275classProp"]("editor_active",t.open),s["\u0275\u0275property"]("tuiDropdown",t.open)("tuiDropdownContent",e)("ngModel",t.model)}},directives:[g.a,u,v.a,i.NgControlStatus,i.NgModel,T.a],styles:[".editor[_ngcontent-%COMP%]{padding:1em 2em;outline:none}.editor_active[_ngcontent-%COMP%]{-webkit-box-shadow:0 0 0 2px var(--tui-focus);box-shadow:0 0 0 2px var(--tui-focus)}"],changeDetection:0}),e})();var x=n("u8jZ");const E=["header",$localize`:␟dcfe12c1a954a6631d712f4bc7ac57f894e521ef␟7972011866667788749:Toolbar`],M=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var S;S=$localize`:␟363d95f95fa40db16d0fe7ca3e7e0569164e58a5␟2842002208043947795: Toolbar is a set of edit tools for rich editors. Use ${"\ufffd#2\ufffd"}:START_LINK: @tinkoff/angular-contenteditable-accessor ${"\ufffd/#2\ufffd"}:CLOSE_LINK: package for working with a form `;const y=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`];function A(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18nStart"](1,S),s["\u0275\u0275element"](2,"a",3),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"tui-doc-example",4),s["\u0275\u0275i18nAttributes"](4,y),s["\u0275\u0275element"](5,"tui-toolbar-example-1"),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example1)}}var D,L;function I(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",5),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,D),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"li"),s["\u0275\u0275elementStart"](7,"p"),s["\u0275\u0275i18n"](8,L),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](9,"tui-doc-code",7),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",e.exampleImportModule),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}D=$localize`:␟535541a8f4958f52023b7c89aacff64626b5e9cb␟3403070934660955548: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiEditorModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,L=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let O=(()=>{class e{constructor(){this.exampleImportModule="import {FormsModule} from '@angular/forms';\nimport {TuiToolbarModule} from '@taiga-ui/addon-editor';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiToolbarModule,\n        FormsModule,\n    ],\n...\n",this.exampleInsertTemplate='<tui-editor\n    exampleText="Example text"\n    [(ngModel)]="model">\n    Placeholder\n</tui-editor>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\n\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-toolbar-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiToolbarExample1 {\n    open = false;\n\n    model = '<p>Lorem ipsum</p><p><b>Lorem ipsum</b></p>';\n\n    onActiveZone(active: boolean) {\n        this.open = active;\n    }\n}\n",HTML:'<div (tuiActiveZoneChange)="onActiveZone($event)">\n    <div\n        #editor\n        contenteditable\n        tuiDropdownDirection="top"\n        class="editor tui-editor-socket"\n        [class.editor_active]="open"\n        [tuiDropdown]="open"\n        [tuiDropdownContent]="dropdown"\n        [(ngModel)]="model"\n    ></div>\n    <ng-template #dropdown>\n        <tui-toolbar [editor]="editor"></tui-toolbar>\n    </ng-template>\n</div>\n',LESS:".editor {\n    padding: 1em 2em;\n    outline: none;\n\n    &_active {\n        box-shadow: 0 0 0 2px var(--tui-focus);\n    }\n}\n"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-toolbar"]],decls:5,vars:0,consts:[["package","ADDON-editor","type","components",6,"header"],["pageTab",""],[6,"pageTab"],["tuiLink","","href","https://github.com/TinkoffCreditSystems/angular-contenteditable-accessor"],["id","basic",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275i18nAttributes"](1,E),s["\u0275\u0275template"](2,A,6,1,"ng-template",1),s["\u0275\u0275template"](3,I,10,2,"ng-template",2),s["\u0275\u0275i18nAttributes"](4,M),s["\u0275\u0275elementEnd"]())},directives:[m.a,f.a,h.a,b.a,C,x.a],encapsulation:2,changeDetection:0}),e})(),R=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.FormsModule,p,l.j,d.TuiButtonModule,d.TuiLinkModule,d.TuiDropdownModule,c.TuiActiveZoneModule,a.h,r.f.forChild(Object(a.o)(O))]]}),e})()}}]);