function _templateObject8(){var e=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"]);return _templateObject8=function(){return e},e}function _templateObject7(){var e=_taggedTemplateLiteral([":\u241fb2a89a4e9d6f9b162d7fdff8ffca2c5101f6fdb2\u241f1703908572802672229: Import ",":START_TAG_CODE:TuiCalendarMonthModule",":CLOSE_TAG_CODE: into a module where you want to use our component "]);return _templateObject7=function(){return e},e}function _templateObject6(){var e=_taggedTemplateLiteral([":\u241f10d55eb5861d4ee0970065a79e957f6374271b88\u241f6121231479332733898: A single month or a range of months "]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241f21de36d65c8d90255cbe722536ad7ffd2dc18ba7\u241f2184035891904629249: Maximal month "]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241f28ed9301c8db6b37f63728ee9da1ccb7de5a7627\u241f1177352435590552315:",":START_TAG_DIV: A handler that gets a month and returns true if it is disabled. ",":CLOSE_TAG_DIV:",":START_TAG_STRONG:Must be a pure function",":CLOSE_TAG_STRONG:"]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f0427b9c1f10441c6f4c53f1788242e2a97954be1\u241f2348971518300945764:Range"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241f380ab580741bec31346978e7cab8062d6970408d\u241f8643289769990675407:Basic"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241fce2028e0c60b9a186d20ffdd70345c553b56a58b\u241f697568322173342344: Month picker component. If you want a textfield, see ",":START_LINK:InputMonthRange",":CLOSE_LINK:"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{zSyp:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiCalendarMonthModule",(function(){return Y}));var a,o,r,i=n("2kYt"),l=n("sEIs"),u=n("SVIu"),c=n("Qq0t"),m=n("dvRg"),d=n("l4xa"),p=n("EM62"),h=n("OZlg"),s=n("e0eB"),f=n("yZWP"),y=n("iyc4"),v=n("dv/p"),g=((o=function(){function e(){_classCallCheck(this,e),this.value=null,this.hoveredMonth=null}return _createClass(e,[{key:"onMonthClick",value:function(e){this.value=e}},{key:"onMonthHovered",value:function(e){this.hoveredMonth=e}}]),e}()).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=p["\u0275\u0275defineComponent"]({type:o,selectors:[["tui-calendar-month-example-1"]],decls:5,vars:3,consts:[[3,"value","monthClick","hoveredItemChange"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-calendar-month",0),p["\u0275\u0275listener"]("monthClick",(function(e){return t.onMonthClick(e)}))("hoveredItemChange",(function(e){return t.onMonthHovered(e)})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](1,"p"),p["\u0275\u0275text"](2),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"p"),p["\u0275\u0275text"](4),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275property"]("value",t.value),p["\u0275\u0275advance"](2),p["\u0275\u0275textInterpolate1"]("Selected month: ",t.value,""),p["\u0275\u0275advance"](2),p["\u0275\u0275textInterpolate1"]("Hovered month: ",t.hoveredMonth,""))},directives:[v.a],encapsulation:2,changeDetection:0}),o),T=((a=function(){function e(){_classCallCheck(this,e),this.value=null,this.max=new d.TuiMonth(2021,7),this.min=new d.TuiMonth(2019,7)}return _createClass(e,[{key:"onMonthClick",value:function(e){this.value=null!==this.value&&this.value.isSingleMonth?d.TuiMonthRange.sort(this.value.from,e):new d.TuiMonthRange(e,e)}}]),e}()).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=p["\u0275\u0275defineComponent"]({type:a,selectors:[["tui-calendar-month-example-2"]],decls:3,vars:4,consts:[[3,"value","min","max","monthClick"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-calendar-month",0),p["\u0275\u0275listener"]("monthClick",(function(e){return t.onMonthClick(e)})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](1,"p"),p["\u0275\u0275text"](2),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275property"]("value",t.value)("min",t.min)("max",t.max),p["\u0275\u0275advance"](2),p["\u0275\u0275textInterpolate1"]("Selected range: ",t.value,""))},directives:[v.a],encapsulation:2,changeDetection:0}),a),M=n("EPR0"),C=n("yHor"),b=n("zGJC"),x=n("u8jZ");r=$localize(_templateObject(),"\ufffd#2\ufffd","\ufffd/#2\ufffd");var _,P,V,S,w,k=["heading",$localize(_templateObject2())],O=["heading",$localize(_templateObject3())];function E(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275i18nStart"](1,r),p["\u0275\u0275element"](2,"a",2),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"tui-doc-example",3),p["\u0275\u0275i18nAttributes"](4,k),p["\u0275\u0275element"](5,"tui-calendar-month-example-1"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"tui-doc-example",4),p["\u0275\u0275i18nAttributes"](7,O),p["\u0275\u0275element"](8,"tui-calendar-month-example-2"),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",n.example1),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",n.example2)}}function I(e,t){1&e&&(p["\u0275\u0275i18nStart"](0,_),p["\u0275\u0275element"](1,"div"),p["\u0275\u0275element"](2,"strong"),p["\u0275\u0275i18nEnd"]())}function j(e,t){1&e&&p["\u0275\u0275i18n"](0,P)}function L(e,t){1&e&&p["\u0275\u0275text"](0," Minimal month ")}function A(e,t){1&e&&p["\u0275\u0275i18n"](0,V)}function H(e,t){1&e&&p["\u0275\u0275text"](0," Current year ")}function R(e,t){1&e&&p["\u0275\u0275text"](0," Selected month ")}function D(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-doc-demo"),p["\u0275\u0275elementStart"](1,"tui-calendar-month",5),p["\u0275\u0275listener"]("monthClick",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().onMonthClick(e)})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"tui-doc-documentation"),p["\u0275\u0275template"](3,I,3,0,"ng-template",6),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().disabledItemHandler=e})),p["\u0275\u0275template"](4,j,1,0,"ng-template",7),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().max=e})),p["\u0275\u0275template"](5,L,1,0,"ng-template",8),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().min=e})),p["\u0275\u0275template"](6,A,1,0,"ng-template",9),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().value=e})),p["\u0275\u0275template"](7,H,1,0,"ng-template",10),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().year=e})),p["\u0275\u0275template"](8,R,1,0,"ng-template",11),p["\u0275\u0275elementEnd"]()}if(2&e){var a=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("disabledItemHandler",a.disabledItemHandler)("min",a.min)("max",a.max)("year",a.year)("value",a.value),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("documentationPropertyValues",a.disabledItemHandlerVariants)("documentationPropertyValue",a.disabledItemHandler),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",a.maxVariants)("documentationPropertyValue",a.max),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",a.minVariants)("documentationPropertyValue",a.min),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",a.valueVariants)("documentationPropertyValue",a.value),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",a.yearVariants)("documentationPropertyValue",a.year)}}function N(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",12),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18nStart"](3,S),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"tui-doc-code",13),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"li"),p["\u0275\u0275elementStart"](7,"p"),p["\u0275\u0275i18n"](8,w),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](9,"tui-doc-code",14),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("code",n.exampleImportModule),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}_=$localize(_templateObject4(),"\ufffd#1\ufffd","\ufffd/#1\ufffd","\ufffd#2\ufffd","\ufffd/#2\ufffd"),P=$localize(_templateObject5()),V=$localize(_templateObject6()),S=$localize(_templateObject7(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),w=$localize(_templateObject8());var z,$,G=(($=function(){function e(t){_classCallCheck(this,e),this.notifications=t,this.exampleImportModule="import {TuiCalendarMonthModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiCalendarMonthModule\n    ],\n...\n",this.exampleInsertTemplate="<tui-calendar-month></tui-calendar-month>\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {TuiMonth} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-calendar-month-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMonthExample1 {\n    value: TuiMonth | null = null;\n    hoveredMonth: TuiMonth | null = null;\n\n    onMonthClick(month: TuiMonth) {\n        this.value = month;\n    }\n\n    onMonthHovered(month: TuiMonth | null) {\n        this.hoveredMonth = month;\n    }\n}\n",HTML:'<tui-calendar-month\n    [value]="value"\n    (monthClick)="onMonthClick($event)"\n    (hoveredItemChange)="onMonthHovered($event)"\n></tui-calendar-month>\n<p>Selected month: {{value}}</p>\n<p>Hovered month: {{hoveredMonth}}</p>\n'},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {TuiMonth, TuiMonthRange} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-calendar-month-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMonthExample2 {\n    value: TuiMonthRange | null = null;\n\n    max = new TuiMonth(2021, 7);\n    min = new TuiMonth(2019, 7);\n\n    onMonthClick(month: TuiMonth) {\n        if (this.value === null || !this.value.isSingleMonth) {\n            this.value = new TuiMonthRange(month, month);\n\n            return;\n        }\n\n        this.value = TuiMonthRange.sort(this.value.from, month);\n    }\n}\n",HTML:'<tui-calendar-month\n    [value]="value"\n    [min]="min"\n    [max]="max"\n    (monthClick)="onMonthClick($event)"\n></tui-calendar-month>\n<p>Selected range: {{value}}</p>\n'},this.minVariants=[d.TUI_FIRST_DAY,new d.TuiMonth(2019,2),new d.TuiMonth(2007,0)],this.maxVariants=[d.TUI_LAST_DAY,new d.TuiMonth(2020,2),new d.TuiMonth(2023,0),new d.TuiMonth(2019,4)],this.min=this.minVariants[0],this.max=this.maxVariants[0],this.disabledItemHandlerVariants=[d.ALWAYS_FALSE_HANDLER,function(e){return e.month%3==0}],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.valueVariants=[d.TuiDay.currentLocal(),new d.TuiMonthRange(d.TuiDay.currentLocal(),d.TuiDay.currentLocal().append({month:3})),new d.TuiMonth(2007,2)],this.value=null,this.yearVariants=[d.TuiDay.currentLocal(),new d.TuiYear(2007)],this.year=this.yearVariants[0]}return _createClass(e,[{key:"onMonthClick",value:function(e){this.notifications.show(String(e)).subscribe()}}]),e}()).\u0275fac=function(e){return new(e||$)(p["\u0275\u0275directiveInject"](c.TuiNotificationsService))},$.\u0275cmp=p["\u0275\u0275defineComponent"]({type:$,selectors:[["example-tui-calendar-month"]],decls:4,vars:0,consts:[["header","CalendarMonth","package","KIT","type","components"],["pageTab",""],["tuiLink","","routerLink","/components/input-month-range"],["id","base",3,"content",6,"heading"],["id","range",3,"content",6,"heading"],[3,"disabledItemHandler","min","max","year","value","monthClick"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandlerWithContext<TuiMonth, TuiMonthContext>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","TuiMonth | TuiMonthRange | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","year","documentationPropertyMode","input-output","documentationPropertyType","TuiYear",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","monthClick","documentationPropertyMode","output","documentationPropertyType","TuiMonth"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275template"](1,E,9,2,"ng-template",1),p["\u0275\u0275template"](2,D,9,15,"ng-template",1),p["\u0275\u0275template"](3,N,10,2,"ng-template",1),p["\u0275\u0275elementEnd"]())},directives:[h.a,s.a,f.a,l.e,y.a,g,T,M.a,v.a,C.a,b.a,x.a],encapsulation:2,changeDetection:0}),$),Y=((z=function e(){_classCallCheck(this,e)}).\u0275mod=p["\u0275\u0275defineNgModule"]({type:z}),z.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||z)},imports:[[i.c,l.f,c.TuiLinkModule,m.TuiCalendarMonthModule,u.h,l.f.forChild(Object(u.o)(G))]]}),z)}}]);