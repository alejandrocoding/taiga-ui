(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{"g+aR":function(t,e,n){"use strict";n.r(e),n.d(e,"Link",(function(){return o})),n.d(e,"default",(function(){return o})),n.d(e,"pasteRegex",(function(){return s})),n.d(e,"pasteRegexExact",(function(){return i}));var r=n("jgtz"),a=n("ehfC");const s=/https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z]{2,}\b(?:[-a-zA-Z0-9@:%._+~#=?!&/]*)(?:[-a-zA-Z0-9@:%._+~#=?!&/]*)/gi,i=/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z]{2,}\b(?:[-a-zA-Z0-9@:%._+~#=?!&/]*)(?:[-a-zA-Z0-9@:%._+~#=?!&/]*)$/gi,o=r.Mark.create({name:"link",priority:1e3,inclusive:!1,defaultOptions:{openOnClick:!0,linkOnPaste:!0,HTMLAttributes:{target:"_blank",rel:"noopener noreferrer nofollow"}},addAttributes(){return{href:{default:null},target:{default:this.options.HTMLAttributes.target}}},parseHTML:()=>[{tag:"a[href]"}],renderHTML({HTMLAttributes:t}){return["a",Object(r.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands:()=>({setLink:t=>({commands:e})=>e.setMark("link",t),toggleLink:t=>({commands:e})=>e.toggleMark("link",t,{extendEmptyMarkRange:!0}),unsetLink:()=>({commands:t})=>t.unsetMark("link",{extendEmptyMarkRange:!0})}),addPasteRules(){return[Object(r.markPasteRule)(s,this.type,t=>({href:t[0]}))]},addProseMirrorPlugins(){const t=[];return this.options.openOnClick&&t.push(new a.d({key:new a.e("handleClickLink"),props:{handleClick:(t,e,n)=>{var r;const a=this.editor.getAttributes("link");return!(!(null===(r=n.target)||void 0===r?void 0:r.closest("a"))||!a.href||(window.open(a.href,a.target),0))}}})),this.options.linkOnPaste&&t.push(new a.d({key:new a.e("handlePasteLink"),props:{handlePaste:(t,e,n)=>{const{state:r}=t,{selection:a}=r,{empty:s}=a;if(s)return!1;let o="";return n.content.forEach(t=>{o+=t.textContent}),!(!o||!o.match(i)||(this.editor.commands.setMark(this.type,{href:o}),0))}}})),t}})}}]);