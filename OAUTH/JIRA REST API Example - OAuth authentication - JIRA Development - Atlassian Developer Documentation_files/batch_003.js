try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'com/atlassian/confluence/plugins/pagetree/resource/javascript/pagetree-desktop.js' */
AJS.toInit(function(A){Confluence.Plugins.PagetreeMacro.bind(A)
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'com/atlassian/confluence/plugins/pagetree/resource/javascript/pagetree.js' */
(function(){var A=function(M){this.$=M;
var H=this.$;
var b=999;
var c=true;
var K=false;
var W={};
var D={};
var N=function(k,j,f,i,e){if(j==undefined||j==null){j=!B(k)
}if(f==undefined||f==null){f=0
}if(!L(k,j)){var h=H("#children"+k);
if(Z(h)){var g=H("#plusminus"+k);
if(j==c){g.removeClass("icon-section-closed").addClass("icon-section-opened")
}else{g.removeClass("icon-section-opened").addClass("icon-section-closed")
}if(j==c){if(e==false){h.slideDown(300)
}else{h.removeClass("plugin-pagetree-hide-children");
h.animate({opacity:1})
}}else{if(e==false){h.slideUp(300)
}else{h.animate({opacity:0},{complete:function(){h.addClass("plugin-pagetree-hide-children")
}})
}}if(i){R(k)
}}else{J(k,new Array(),f,"",i,e)
}}if(i){R(k)
}};
var Z=function(e){return e.children("ul[id]").length>0
};
var B=function(f){var e=H("#plusminus"+f);
return(e.length>0)?(e.hasClass("icon-minus")||e.hasClass("icon-section-opened")):K
};
var L=function(f,e){return B(f)==e
};
var I=function(h,g,f){a(h,c,g,f)
};
var X=function(h,g,f){a(h,K,g,f)
};
var a=function(k,i,h,g){G(k);
var j=H("#"+k);
var f=j.find("div.plugin_pagetree_children_container");
f.each(function(e){var l=V(this.id);
N(l,i,b,e==f.length-1,g)
});
h.preventDefault();
h.stopPropagation()
};
var V=function(e){if(!e||e==undefined){return null
}if(e.indexOf("plusminus")!=-1){return e.substring("plusminus".length)
}if(e.indexOf("children")!=-1){return e.substring("children".length)
}return null
};
var C=function(e){if(!e||e==undefined){return null
}return S(e)[1]
};
var S=function(e){if(!e||e==undefined){return null
}return e.split("-")
};
var G=function(f){var e=C(f);
H("div.plugin_pagetree").each(function(g){if(g==e){H(this).find("span.plugin_pagetree_status").removeClass("hidden");
H(this).find("div.plugin_pagetree_expandcollapse").addClass("hidden")
}})
};
var R=function(f){var e=C(f);
H("div.plugin_pagetree").each(function(g){if(g==e){H(this).find("span.plugin_pagetree_status").addClass("hidden");
H(this).find("div.plugin_pagetree_expandcollapse").removeClass("hidden")
}})
};
var F=function(l,f,i,h,k,e,g){var j=W[l];
if(f=="Orphan"){j+="&hasRoot=false&spaceKey="+k
}else{j+="&hasRoot=true&pageId="+f
}j+="&treeId="+l+"&startDepth="+h+"&mobile="+g;
H.each(i,function(){j+="&ancestors="+this
});
j+="&treePageId="+e;
if(g==false){j=(AJS.params.serverUrl||"")+j
}return j
};
var Q=function(g){var f=g;
var e=null;
H("div.plugin_pagetree").each(function(h){if(h==f){e=H(this)
}});
return e
};
var P=function(e){var f=e.children("fieldset");
var g=new Object();
if(f.length>0){f.children("input").each(function(){g[this.name]=this.value
})
}return g
};
var O=function(e){var g=e.children("fieldset");
var h=new Array();
if(g.length>0){var f=g.children("fieldset");
if(f.length>0){f.children("input").each(function(){h.push(this.value)
})
}}return h
};
var E=function(g,f){var e=H("a.plugin_pagetree_childtoggle",g);
e.each(function(){var h=H(this);
h.attr("href","#").bind("click",function(k){var i=h.parent().parent().children("div.plugin_pagetree_children_container");
var j=i.attr("id");
var l=j.substring(8);
N(l,null,null,null,f);
k.preventDefault();
k.stopPropagation()
})
})
};
var U=function(e){var f=H(document.createElement("div"));
f.html(e);
return f.find("ul[id^='child_ul']").length
};
var J=function(m,g,q,o,i,f){var p=m;
var j=i;
var e=S(m);
var h=e[0];
var l=e[1];
var k=H("#children"+m);
var n=P(Q(l));
k.append(Confluence.Templates.Pagetree.Macro.loadingIndicator());
Raphael.spinner(k.find(".plugin_pagetree_children_loading_wrapper .spinner")[0],7,"#666");
H.ajax({type:"GET",url:F(l,h,g,q,o,n.treePageId,f),dataType:"text",success:function(r){if(U(r)){k.html(r);
if(k.children().length&&k.hasClass("hidden")){k.removeClass("hidden")
}E(k,f);
H("#plusminus"+p).addClass("icon-section-opened").removeClass("icon-section-closed");
H("#childrenspan"+D[parseInt(l)]+"-"+l).addClass("plugin_pagetree_current");
if(j){R(p)
}T(k);
if(AJS.PageGadget&&AJS.PageGadget.contentsUpdated){AJS.PageGadget.contentsUpdated()
}}else{window.location=n.loginUrl
}AJS.trigger("pagetree-children-loaded")
},error:function(r){if(r.status=="403"){k.text(n["i18n-pagetree.error.permission"])
}else{k.text(n["i18n-pagetree.error.general"])
}}})
};
var T=function(e){H("div.plugin_pagetree_children_container:empty",e).addClass("hidden")
};
var Y=function(e,j){var h=P(e);
var k=h.noRoot=="true";
var g=k?"Orphan-"+j:h.rootPageId+"-"+j;
var f=h.mobile=="true";
W[j]=h.treeRequestId;
if(f==false){D[j]=AJS.params.pageId
}else{D[j]=H("div.content-container").parent().attr("data-content-id")
}e.children("fieldset").each(function(){var l=H(this);
l.children("input[treeId]").attr("value",j);
l.children("input[rootPage]").attr("value",g)
});
if(k){e.find("div.plugin_pagetree_children").attr("id","childrenOrphan-"+j);
e.find("a.plugin_pagetree_expandall").click(function(l){I("childrenOrphan-"+j,l,f);
return false
});
e.find("a.plugin_pagetree_collapseall").click(function(l){X("childrenOrphan-"+j,l,f);
return false
})
}else{e.find("div.plugin_pagetree_children").attr("id","children"+g);
e.find("a.plugin_pagetree_expandall").click(function(l){I("children"+g,l,f);
return false
});
e.find("a.plugin_pagetree_collapseall").click(function(l){X("children"+g,l,f);
return false
})
}var i=O(e);
J(g,i,h.startDepth,h.spaceKey,"",f)
};
this.initPageTrees=function(){H("div.plugin_pagetree").each(function(e){Y(H(this),e)
});
d()
};
var d=function(){var e=self.placeFocus;
if(e){self.placeFocus=function(){var f=H("form[name='pagetreesearchform']");
f.attr("name","inlinecommentform");
e();
f.attr("name","pagetreesearchform")
}
}};
H(".open-flyout-to-search").bind("click",function(e){if(H(".fly-out-open").length){setTimeout(function(){ConfluenceMobile.flyout.hide()
},400)
}else{setTimeout(function(){ConfluenceMobile.flyout.show()
},400)
}e.stopPropagation();
e.preventDefault()
})
};
Confluence=Confluence||{};
Confluence.Plugins=Confluence.Plugins||{};
Confluence.Plugins.PagetreeMacro={bind:function(B){var C=new A(B);
C.initPageTrees()
}}
})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'soy/pagetree.soy' */
// This file was automatically generated from pagetree.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Pagetree == 'undefined') { Confluence.Templates.Pagetree = {}; }
if (typeof Confluence.Templates.Pagetree.Macro == 'undefined') { Confluence.Templates.Pagetree.Macro = {}; }


Confluence.Templates.Pagetree.Macro.loadingIndicator = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="plugin_pagetree_children_loading_wrapper"><div class="spinner"/><span class="plugin_pagetree_children_loading">', soy.$$escapeHtml("Loading..."), '</span></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.extra.jira:help-dialog-extension', location = '/jira/help-dialog.js' */
if(Confluence.KeyboardShortcuts){Confluence.KeyboardShortcuts.Editor.push({context:"editor.actions",descKey:"Insert JIRA issue"+":",keys:[["Ctrl+Shift+J"]]})};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:share-keyboard-shortcut-js-resources', location = 'js/resourceloader.js' */
AJS.toInit(function(a){AJS.I18n.get("com.atlassian.confluence.plugins.share-page")});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.confluence-editor-hide-tools:keyboard.shortcut.CONF-24450-workaround', location = 'js/CONF-24450-workaround.js' */
AJS.toInit(function(a){AJS.I18n.get("com.atlassian.confluence.confluence-editor-hide-tools")});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-mentions-plugin:help-dialog-extension', location = 'js/help-dialog.js' */
AJS.toInit(function(a){Confluence.KeyboardShortcuts&&Confluence.KeyboardShortcuts.Autoformat.push({action:"@",context:"autoformat.autocomplete",description:"Mention"})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.protoshare.confluence.plugins.protoshare-confluence:protoshare-confluence-editor-resources', location = '/js/protoshare-confluence.js' */
window.ProtoShareOrigin="https://dg117jbyarqyn.cloudfront.net";window.ProtoSharePath="/sunbeam/5884/";function ProtoShare(){var a="protosharemacro";var b="\n\n";var c="";var d=window.location.protocol+"//"+window.location.host;var i=(window.ProtoShareOrigin+window.ProtoSharePath);var l=(window.ProtoShareOrigin||d);var e=i+"view.html?hostOrigin="+encodeURIComponent(d)+"&hostSource=";var f=i+"edit.html?hostOrigin="+encodeURIComponent(d)+"&hostSource=";function k(m){var n=m.indexOf(".html");if(n){m=m.substring(0,n)}return m}function j(p){var o;var m=p.indexOf(b);if(m!==-1){o=p.substring(m+b.length);p=p.substring(0,m)}var n;try{n=JSON.parse(p)}catch(q){}if(!(AJS.$.isPlainObject(n))){return null}if(o!=null){n.content=o}return n}function g(n){var m=n.content;if(m!=null){n=AJS.$.extend({},n);delete n.content}var o=JSON.stringify(n);if(m!=null){o=[o,b,m].join("")}return o}function h(m,n,o){var q=null;if(n.name&&n.name.length){q=decodeURIComponent(k(n.name))}try{m.source.postMessage(g({type:"wireframe-content",wireframeName:q,content:c+o}),m.origin)}catch(p){console.error(p)}}return{SIZE_THUMB:0,SIZE_FULL:10,isIE:AJS.$.browser.msie,clientWindows:[],checkScrollbars:function(){if(this.isPSModal()){AJS.$("#com-atlassian-confluence").css("overflow","hidden")}else{AJS.$("#com-atlassian-confluence").css("overflow","visible")}},isPSModal:function(){return((this.editorPanel&&this.editorPanel.is(":visible"))||(this.ieViewerPanel&&this.ieViewerPanel.is(":visible")))},editorPanel:null,editorDesign:null,createEditorPanel:function(){AJS.$("#com-atlassian-confluence").append(['<div id="ps-editor-panel">','<div class="ps-editor-body">','<iframe id="ps-editor-frame" src="'+f+'&hostSource=parent"/>',"</div>","</div>"].join(""));return AJS.$("#ps-editor-panel")},getEditorWindow:function(){return(this.editorPanel&&this.editorPanel.find(".ps-editor-body iframe")[0].contentWindow)},showEditorPanel:function(n){AJS.Rte.BookmarkManager.storeBookmark();this.editorDesign=n;if(!this.editorPanel){this.editorPanel=this.createEditorPanel()}else{var m={source:this.getEditorWindow(),origin:l};this.loadWireframe(m,this.editorDesign)}var o=this;this.editorPanel.fadeIn(0,function(){o.checkScrollbars()})},hideEditorPanel:function(){var m=this;this.editorPanel.fadeOut(0,function(){m.checkScrollbars()})},ieViewerPanel:null,ieViewerDesign:null,createIEViewerPanel:function(){AJS.$("#com-atlassian-confluence").append(['<div id="ps-viewer-panel">','<div class="ps-viewer-body">','<iframe id="ps-viewer-frame" src="'+e+'&hostSource=parent"/>',"</div>",'<div class="ps-viewer-buttons">','<div class="ps-buttons-right">','<button class="aui-button aui-button-primary ps-close-button">Close Viewer</button>',"</div>","</div>","</div>",].join(""));var m=this;viewerPanel=AJS.$("#ps-viewer-panel");viewerPanel.find(".ps-viewer-buttons .ps-close-button").click(function(){m.hideIEViewerPanel()});return viewerPanel},getIEViewerWindow:function(){return(this.ieViewerPanel&&this.ieViewerPanel.find(".ps-viewer-body iframe")[0].contentWindow)},showIEViewerPanel:function(n){this.ieViewerDesign=n;if(!this.ieViewerPanel){this.ieViewerPanel=this.createIEViewerPanel()}else{var m={source:this.getIEViewerWindow(),origin:l};this.loadWireframe(m,this.ieViewerDesign)}var o=this;this.ieViewerPanel.show(0,function(){o.checkScrollbars()})},hideIEViewerPanel:function(){var m=this;this.ieViewerPanel.hide(0,function(){m.checkScrollbars()})},attachDesigns:function(n){var s=this;function m(t){var u=AJS.$(t);return{name:u.attr("data-design-filename"),version:u.attr("data-design-version"),contentId:u.attr("data-design-content-id")}}var q=n.find(".wiki-content .ps-viewer-frame");for(var p=0;p<q.length;p++){var r=q[p];var o=m(r);s.clientWindows.push({frame:r,design:o});r.src=e+"&hostSource=parent"}n.find(".wiki-content .ps-design-ct .ps-design-buttons .ps-view-design-button").unbind("click").click(function(){var t=m(AJS.$(this).parents(".ps-design-ct").find(".ps-viewer-frame")[0]);if(s.isIE){s.showIEViewerPanel(t)}else{s.clientWindows.push({window:window.open((e+"&hostSource=opener"),t.name),design:t})}})},createWireframe:function(p){var n=ProtoShare.Utils.utf8_to_b64(p.content.substring(c.length));var r=p.wireframeName+".html";var m=p.wireframeSize;var o=AJS.Meta.get("page-id");if(o==0){o=AJS.Editor.getContentId()}var q=JSON.stringify([o,{fileName:r,contentType:"text/html"},n]);AJS.$.ajax({url:Confluence.getBaseUrl()+"/rpc/json-rpc/confluenceservice-v2/addAttachment",type:"POST",dataType:"json",contentType:"application/json; charset=utf-8",data:q,context:this,error:function(u,s,t){alert("ProtoShare could not save your design due to the following error: "+t+'.\n\nThe design may have been deleted by another user, or you may have lost connectivity. If the problem persists contact your Confluence Administrator to ensure that "Remote API Access" is enabled.');console.log(t)},success:function(x,v,A){this.hideEditorPanel();var C=r;var y=x.url.match(/[\?|&]version=([^&]+)/)[1];var u={};var t=AJS.Rte.getEditor().selection.selectedRange;if(t){var z=AJS.$(t.startContainer).find("[data-macro-name='"+a+"']");for(var w=0;w<z.length;w++){var B=z[w];u=ProtoShare.Utils.getMacroParams(AJS.$(B));if(decodeURIComponent(u["attachment-filename"])==C){break}}}var s={contentId:AJS.Editor.getContentId(),macro:{name:a,params:{"attachment-filename":encodeURIComponent(C),"attachment-version":y,"design-width":m.width,"design-height":m.height,"frame-size":u["frame-size"]||this.SIZE_FULL},defaultParameterValue:"",body:""}};AJS.Rte.getEditor().focus();AJS.Rte.BookmarkManager.restoreBookmark();tinymce.confluence.MacroUtils.insertMacro(s)}})},loadWireframe:function(m,n){if(n.name){var o=JSON.stringify([n.contentId,decodeURIComponent(n.name),n.version]);AJS.$.ajax({url:Confluence.getBaseUrl()+"/rpc/json-rpc/confluenceservice-v2/getAttachmentData",type:"POST",dataType:"json",contentType:"application/json; charset=utf-8",data:o,success:function(p){if(p.error){console.log("Error in response data",p.error)}else{try{var r=ProtoShare.Utils.b64_to_utf8(p);h(m,n,r)}catch(q){console.log("Error parsing response data: ",p);console.log(q)}}},error:function(r,p,q){alert("ProtoShare could not load the design due to the following error: "+q+'.\n\nThe design may have been deleted by another user, or you may have lost connectivity. If the problem persists contact your Confluence Administrator to ensure that "Remote API Access" is enabled.')},})}else{h(m,n,"")}},getClientWindowForWindow:function(n){for(var m=0;m<this.clientWindows.length;m++){if(this.clientWindows[m].window&&this.clientWindows[m].window===n){return this.clientWindows[m]}else{if(this.clientWindows[m].frame&&this.clientWindows[m].frame.contentWindow===n){return this.clientWindows[m]}}}},handleMessage:function(q){if(q.origin!==l){return}var p=j(q.data);var o=(p&&p.type);if(o==="register-listener"){var m={source:q.source,origin:q.origin};var n=null;if(this.isIE&&m.source===this.getIEViewerWindow()){n=this.ieViewerDesign}else{var r=this.getClientWindowForWindow(m.source);if(r){n=r.design}if(!n&&m.source===this.getEditorWindow()){n=this.editorDesign}}if(n){this.loadWireframe(m,n)}}else{if(o==="wireframe-content"){this.createWireframe(p)}else{if(o==="close-listener"){this.hideEditorPanel()}}}},init:function(){var m=this;window.addEventListener("message",function(n){m.handleMessage(n)},false)}}}ProtoShare.Utils={getMacroParams:function(a){var c={};var b=a.attr("data-macro-parameters");if(b){AJS.$.each(b.split("|"),function(d,e){var f=e.split("=");c[f[0]]=f[1]})}return c},getURLParameter:function(a){return decodeURIComponent((new RegExp("[?|&]"+a+"=([^&;]+?)(&|#|;|$)").exec(location.search)||[,""])[1].replace(/\+/g,"%20"))||null},utf8_to_b64:function(a){return window.btoa(unescape(encodeURIComponent(a)))},b64_to_utf8:function(a){return decodeURIComponent(escape(window.atob(a)))}};!window.addEventListener&&(function(b,e,f,d,c,g,a){b[d]=e[d]=f[d]=function(h,i){var j=this;a.unshift([j,h,i,function(k){k.currentTarget=j;k.preventDefault=function(){k.returnValue=false};k.stopPropagation=function(){k.cancelBubble=true};k.target=k.srcElement||j;i.call(j,k)}]);this.attachEvent("on"+h,a[0][3])};b[c]=e[c]=f[c]=function(j,k){for(var h=0,i;i=a[h];++h){if(i[0]==this&&i[1]==j&&i[2]==k){return this.detachEvent("on"+j,a.splice(h,1)[0][3])}}};b[g]=e[g]=f[g]=function(h){return this.fireEvent("on"+h.type,h)}})(Window.prototype,HTMLDocument.prototype,Element.prototype,"addEventListener","removeEventListener","dispatchEvent",[]);(function(){var a="undefined"!=typeof window?window:exports,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c=function(){try{document.createElement("$")}catch(d){return d}}();a.btoa||(a.btoa=function(g){for(var j,i,d=0,k=b,h="";g.charAt(0|d)||(k="=",d%1);h+=k.charAt(63&j>>8-8*(d%1))){if(i=g.charCodeAt(d+=0.75),i>255){throw c}j=j<<8|i}return h}),a.atob||(a.atob=function(g){if(g=g.replace(/=+$/,""),1==g.length%4){throw c}for(var j,i,d=0,k=0,h="";i=g.charAt(k++);~i&&(j=d%4?64*j+i:i,d++%4)?h+=String.fromCharCode(255&j>>(6&-2*d)):0){i=b.indexOf(i)}return h})})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.protoshare.confluence.plugins.protoshare-confluence:protoshare-confluence-editor-resources', location = '/js/protoshare-confluence-editor.js' */
AJS.bind("init.rte",function(){if(!window.protoShare){window.protoShare=new ProtoShare();window.protoShare.init()}var d=window.protoShare;AJS.MacroBrowser.setMacroJsOverride("protosharemacro",{opener:function(g){if(a()){var h=g.params&&g.params["attachment-filename"];var f=g.params&&g.params["attachment-version"];var i=AJS.Editor.getContentId();d.showEditorPanel({name:h,version:f,contentId:i})}}});function b(){try{AJS.$("#wysiwygTextarea_ifr").contents().find("head").append("<style>img.editor-inline-macro.with-chrome[data-macro-name='protosharemacro'] { padding: 0; }</style>")}catch(f){}}function a(){if(d.isIE){var f=new AJS.Dialog({width:400,height:240,id:"ps-delete-wireframe-dialog",closeOnOutsideClick:true,modal:true});f.addHeader("Unsupported Browser");f.addPanel("Main","<p>ProtoShare designs cannot be edited using your current browser. The following browsers are currently supported for editing: Chrome, Firefox and Safari 6+</p>","panel-body");f.addLink("Close",function(g){g.remove()});f.show();return false}return true}function c(f,g){var h=AJS.$(f);AJS.Rte.getEditor().selection.select(h[0]);AJS.Rte.BookmarkManager.storeBookmark();var j=ProtoShare.Utils.getMacroParams(h);j["frame-size"]=g;var i={contentId:AJS.Editor.getContentId(),macro:{name:"protosharemacro",params:j,defaultParameterValue:"",body:""}};tinyMCE.confluence.MacroUtils.insertMacro(i);AJS.Rte.BookmarkManager.restoreBookmark();b()}AJS.bind("created.property-panel",function(i,f){var k=window.protoShare;var h=$(f.anchor);if(h.data("macro-name")==="protosharemacro"){var j=ProtoShare.Utils.getMacroParams(h);var g=j["frame-size"];if(g==k.SIZE_THUMB){f.panel.find(".macro-property-panel-ps-button-size-thumb").addClass("selected")}else{f.panel.find(".macro-property-panel-ps-button-size-full").addClass("selected")}}});AJS.Confluence.PropertyPanel.Macro.registerButtonHandler("ps-button-size-thumb",function(g,f){c(f,window.protoShare.SIZE_THUMB)});AJS.Confluence.PropertyPanel.Macro.registerButtonHandler("ps-button-size-full",function(g,f){c(f,window.protoShare.SIZE_FULL)});if(ProtoShare.Utils.getURLParameter("openPSEditor")){if(a()){var e=AJS.Editor.getContentId();d.showEditorPanel({contentId:e})}}b()});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-global-resources', location = 'js/gliffy-on-confluence-init.js' */
AJS.toInit(function(){AJS.$("table.attachments tr").each(function(a,b){AJS.$(b).find("td.attachment-actions a").each(function(c,d){if(AJS.$(d).attr("href").indexOf("/plugins/gliffy/view")!=-1){AJS.$(b).find("td.filename-column span").removeClass("icon-file-xml icon-file-unknown").addClass("gliffy-document-icon").attr("title","Gliffy File").text("Gliffy File")}})})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-global-resources', location = 'js/gliffy-blueprint-registration.js' */
AJS.toInit(function(){if(Confluence&&Confluence.Blueprint&&Confluence.Blueprint.register){Confluence.Blueprint.register("com.gliffy.integration.confluence:gliffy-blueprint-item-main",function(e,f,d){window.location=Confluence.getContextPath()+"/pages/createpage.action?showGliffyMacro=true&fromCreateDialog=true&spaceKey="+encodeURIComponent(f)+"&newSpaceKey="+encodeURIComponent(f)+(e.getParentPageId()?"&fromPageId="+e.getParentPageId():"")});var c=function(d){Confluence.Blueprint.register("com.gliffy.integration.confluence:gliffy-blueprint-item-"+d,function(f,g,e){window.location=Confluence.getContextPath()+"/pages/createpage.action?showGliffyMacro=true&createDiagramType="+d+"&spaceKey="+encodeURIComponent(g)+"&newSpaceKey="+encodeURIComponent(g)+(f.getParentPageId()?"&fromPageId="+f.getParentPageId():"")})};var b=["org","network","software"];for(var a=0;a<b.length;a++){c(b[a])}Confluence.Blueprint.register("com.gliffy.integration.confluence:gliffy-blueprint-item-pack",function(e,h,d){var i=e.addPage("myplugin-step-2"),g=function(){var k=$("#my-title").val();var j=$("#my-text-field").val();d(k,{myName:j})};var f='<div class="template-select-container-body"><ol class="templates" tabindex="100"><li class="template selected"data-item-module-complete-key="com.gliffy.integration.confluence:gliffy-blueprint-item-main"><imgclass="template-preview"src="/confluence/s/en_GB-1988229788/4103/31cc10c48352e244f00edd8fa27d95566a28e0c5.1/0.0-SNAPSHOT/_/download/resources/com.gliffy.integration.confluence:gliffy-blueprint-item-main/icon"><div class="template-meta"><div class="template-name" title="Gliffy Diagram">Corporate Org Chart</div><div class="template-description" title="Add a blank page with a Gliffy Diagram.">Add a page with a Corporate Org Chart</div></div></li><li class="template"data-item-module-complete-key="com.gliffy.integration.confluence:gliffy-blueprint-item-pack"><imgclass="template-preview"src="/confluence/s/en_GB-1988229788/4103/31cc10c48352e244f00edd8fa27d95566a28e0c5.1/0.0-SNAPSHOT/_/download/resources/com.gliffy.integration.confluence:gliffy-blueprint-item-pack/icon"><div class="template-meta"><div class="template-name" title="Gliffy Human Resources Pack">Reimbursement Process</div><div class="template-description" title="Choose from a list of diagrams relating to Human Resources.">Add a page with that shows a Reimbursement Process in your organization</div></div></li><li class="template"data-item-module-complete-key="com.gliffy.integration.confluence:gliffy-blueprint-item-pack"><imgclass="template-preview"src="/confluence/s/en_GB-1988229788/4103/31cc10c48352e244f00edd8fa27d95566a28e0c5.1/0.0-SNAPSHOT/_/download/resources/com.gliffy.integration.confluence:gliffy-blueprint-item-pack/icon"><div class="template-meta"><div class="template-name" title="Gliffy Human Resources Pack">Termination Process</div><div class="template-description" title="Choose from a list of diagrams relating to Human Resources.">Shows you how to fire the guy who had ten too many tequila shots at the last company party.</div></div></li></ol></div>';i.addHeader("Gliffy Human Resources Pack").addPanel("SinglePanel",f,"singlePanel").addButton("Previous",function(j){j.prevPage();j.page.pop()},"").addButton("Create",g,"aui-button-primary create-dialog-create-button").addLink("Close",function(j){j.remove()},"");i.getPanel(0).setPadding(0);$("#my-title").focus();$("#myplugin-form").submit(function(){g(e);return false});return false})}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-global-resources', location = 'js/gliffy-footer.js' */
AJS.toInit(function(){if(AJS.version>="3.0"){var a=AJS.$("#poweredby:visible");if(a.length>0){a.before(AJS.template.load("gliffy-webpanel-footer"))}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.doctheme:splitter', location = 'doctheme/splitter-1.5.1/splitter.js' */
/*
 * jQuery.splitter.js - two-pane splitter window plugin
 *
 * version 1.51 (2009/01/09)
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

/**
 * The splitter() plugin implements a two-pane resizable splitter window.
 * The selected elements in the jQuery object are converted to a splitter;
 * each selected element should have two child elements, used for the panes
 * of the splitter. The plugin adds a third child element for the splitbar.
 *
 * For more details see: http://methvin.com/splitter/
 *
 *
 * @example $('#MySplitter').splitter();
 * @desc Create a vertical splitter with default settings
 *
 * @example $('#MySplitter').splitter({type: 'h', accessKey: 'M'});
 * @desc Create a horizontal splitter resizable via Alt+Shift+M
 *
 * @name splitter
 * @type jQuery
 * @param Object options Options for the splitter (not required)
 * @cat Plugins/Splitter
 * @return jQuery
 * @author Dave Methvin (dave.methvin@gmail.com)
 */
 ;(function($){
 var Z_INDEX = 4; // This is a hackish number, set somewhere in-between some page panels vs. the z-index of the browse menu.
 $.fn.splitter = function(args){
    args = args || {};
    return this.each(function() {
        var zombie;        // left-behind splitbar for outline resizes
        function startSplitMouse(evt) {
            if ( opts.outline )
                zombie = zombie || bar.clone(false).insertAfter(A);
            panes.css("-webkit-user-select", "none");    // Safari selects A/B text on a move
            bar.addClass(opts.activeClass);
            A._posSplit = A[0][opts.pxSplit] - evt[opts.eventPos];
            $(document)
                .bind("mousemove", doSplitMouse)
                .bind("mouseup", endSplitMouse);
        }
        function doSplitMouse(evt) {
            var newPos = A._posSplit+evt[opts.eventPos];
            if ( opts.outline ) {
                newPos = Math.max(0, Math.min(newPos, splitter._DA - bar._DA));
                bar.css(opts.origin, newPos);
            } else {
                resplit(newPos);
            }
        }
        function endSplitMouse(evt) {
            bar.removeClass(opts.activeClass);
            var newPos = A._posSplit+evt[opts.eventPos];
            if ( opts.outline ) {
                zombie.remove(); zombie = null;
                resplit(newPos);
            }
            panes.css("-webkit-user-select", "text");    // let Safari select text again
            $(document)
                .unbind("mousemove", doSplitMouse)
                .unbind("mouseup", endSplitMouse);
        }
        function resplit(newPos) {
            // Constrain new splitbar position to fit pane size limits
            newPos = Math.max(A._min, splitter._DA - B._max,
                    Math.min(newPos, A._max, splitter._DA - bar._DA - B._min));
            // Resize/position the two panes
            bar._DA = bar[0][opts.pxSplit];        // bar size may change during dock
            bar.css(opts.origin, newPos).css(opts.fixed, splitter._DF);
            A.css(opts.origin, 0).css(opts.split, newPos).css(opts.fixed,  splitter._DF);
            B.css(opts.origin, newPos+bar._DA)
                .css(opts.split, splitter._DA-bar._DA-newPos).css(opts.fixed,  splitter._DF);
            // IE fires resize for us; all others pay cash
            if ( !$.browser.msie )
                panes.trigger("resize");
        }
        function dimSum(jq, dims) {
            // Opera returns -1 for missing min/max width, turn into 0
            var sum = 0;
            for ( var i=1; i < arguments.length; i++ )
                sum += Math.max(parseInt(jq.css(arguments[i])) || 0, 0);
            return sum;
        }

        // Determine settings based on incoming opts, element classes, and defaults
        var vh = (args.splitHorizontal? 'h' : args.splitVertical? 'v' : args.type) || 'v';
        var opts = $.extend({
            activeClass: 'active',    // class name for active splitter
            pxPerKey: 8,            // splitter px moved per keypress
            tabIndex: 0,            // tab order indicator
            accessKey: ''            // accessKey for splitbar
        },{
            v: {                    // Vertical splitters:
                keyLeft: 39, keyRight: 37, cursor: ($.browser.msie) ? "e-resize" : "ew-resize",
                splitbarClass: "vsplitbar", outlineClass: "voutline",
                type: 'v', eventPos: "pageX", origin: "left",
                split: "width",  pxSplit: "offsetWidth",  side1: "Left", side2: "Right",
                fixed: "height", pxFixed: "offsetHeight", side3: "Top",  side4: "Bottom"
            },
            h: {                    // Horizontal splitters:
                keyTop: 40, keyBottom: 38,  cursor: ($.browser.msie) ? "n-resize" : "ns-resize",
                splitbarClass: "hsplitbar", outlineClass: "houtline",
                type: 'h', eventPos: "pageY", origin: "top",
                split: "height", pxSplit: "offsetHeight", side1: "Top",  side2: "Bottom",
                fixed: "width",  pxFixed: "offsetWidth",  side3: "Left", side4: "Right"
            }
        }[vh], args);

        // Create jQuery object closures for splitter and both panes
        var splitter = $(this).css({position: "relative"});
        var panes = splitter.children().css({
            position: "absolute",             // positioned inside splitter container
            "-moz-outline-style": "none"    // don't show dotted outline
        });
        var A = $(panes[0]);        // left  or top
        var B = $(panes[1]);        // right or bottom

        // Focuser element, provides keyboard support; title is shown by Opera accessKeys
        var focuser = $('<a href="javascript:void(0)"></a>')
            .attr({accessKey: opts.accessKey, tabIndex: opts.tabIndex, title: opts.splitbarClass})
            .bind($.browser.opera?"click":"focus", function(){ this.focus(); bar.addClass(opts.activeClass) })
            .bind("keydown", function(e){
                var key = e.which || e.keyCode;
                var dir = key==opts["key"+opts.side1]? 1 : key==opts["key"+opts.side2]? -1 : 0;
                if ( dir )
                    resplit(A[0][opts.pxSplit]+dir*opts.pxPerKey, false);
            })
            .bind("blur", function(){ bar.removeClass(opts.activeClass) });

        // Splitbar element, can be already in the doc or we create one
        var bar = $(panes[2] || '<div></div>')
            .insertAfter(A).css("z-index", Z_INDEX).append(focuser)
            .attr({"class": opts.splitbarClass, unselectable: "on"})
            .css({position: "absolute",    "user-select": "none", "-webkit-user-select": "none",
                "-khtml-user-select": "none", "-moz-user-select": "none"})
            .bind("mousedown", startSplitMouse);
        // Use our cursor unless the style specifies a non-default cursor
        if ( /^(auto|default|)$/.test(bar.css("cursor")) )
            bar.css("cursor", opts.cursor);

        // Cache several dimensions for speed, rather than re-querying constantly
        bar._DA = bar[0][opts.pxSplit];
        splitter._PBF = $.boxModel? dimSum(splitter, "border"+opts.side3+"Width", "border"+opts.side4+"Width") : 0;
        splitter._PBA = $.boxModel? dimSum(splitter, "border"+opts.side1+"Width", "border"+opts.side2+"Width") : 0;
        A._pane = opts.side1;
        B._pane = opts.side2;
        $.each([A,B], function(){
            this._min = opts["min"+this._pane] || dimSum(this, "min-"+opts.split);
            this._max = opts["max"+this._pane] || dimSum(this, "max-"+opts.split) || 9999;
            this._init = opts["size"+this._pane]===true ?
                parseInt($.curCSS(this[0],opts.split)) : opts["size"+this._pane];
        });

        // Determine initial position, get from cookie if specified
        var initPos = A._init;
        if ( !isNaN(B._init) )    // recalc initial B size as an offset from the top or left side
            initPos = splitter[0][opts.pxSplit] - splitter._PBA - B._init - bar._DA;
        if ( opts.cookie ) {
            if ( !$.cookie )
                alert('jQuery.splitter(): jQuery cookie plugin required');
            var ckpos = parseInt($.cookie(opts.cookie));
            if ( !isNaN(ckpos) )
                initPos = ckpos;
            /*
                CONF-27142 - Store sidebar width as soon as resize occurs so that new width is reflected
                in new tabs. 'A' is the jQuery object for the #splitter-sidebar div.
             */
            A.bind('resize', _.debounce(function(){
                var state = String(bar.css(opts.origin));    // current location of splitbar
                $.cookie(opts.cookie, state, {expires: opts.cookieExpires || 365,
                    path: opts.cookiePath || document.location.pathname});
            }, 300));
        }
        if ( isNaN(initPos) )    // King Solomon's algorithm
            initPos = Math.round((splitter[0][opts.pxSplit] - splitter._PBA - bar._DA)/2);

        var resizeHandler = function(e){
            var top = splitter.offset().top;
            //TODO: a quick hack to get the splitter to be the right height in ondemand due to the footer difference
            var footer = $("#footer, #studio-footer").outerHeight(true);
            if (!footer)
                footer = 24;
            var wh = $(window).height()-footer;
            splitter.css("height", Math.max(wh-top-splitter._hadjust, splitter._hmin)+"px");
            // ATLASSIAN - only resize components if the window has been resized, or this has been called directly.
            if (!e || e.target == window) splitter.trigger("resize");
        };
        args.update = function (isBound) {
            splitter._hadjust = dimSum(splitter, "borderTopWidth", "borderBottomWidth", "marginBottom");
            splitter._hmin = Math.max(dimSum(splitter, "minHeight"), 20);
            isBound && $(window).bind("resize", resizeHandler);
            resizeHandler();
        };
        // Resize event propagation and splitter sizing
        if ( opts.anchorToWindow ) {
            // Account for margin or border on the splitter container and enforce min height
            args.update(true);
        }
        else if ( opts.resizeToWidth && !$.browser.msie )
            $(window).bind("resize", function(){
                splitter.trigger("resize");
            });

        // Resize event handler; triggered immediately to set initial position
        splitter.bind("resize", function(e, size){
            // Custom events bubble in jQuery 1.3; don't Yo Dawg
            if ( e.target != this ) return;
            // Determine new width/height of splitter container
            splitter._DF = splitter[0][opts.pxFixed] - splitter._PBF;
            splitter._DA = splitter[0][opts.pxSplit] - splitter._PBA;
            // Bail if splitter isn't visible or content isn't there yet
            if ( splitter._DF <= 0 || splitter._DA <= 0 ) return;
            // Re-divvy the adjustable dimension; maintain size of the preferred pane
            resplit(!isNaN(size)? size : (!(opts.sizeRight||opts.sizeBottom)? A[0][opts.pxSplit] :
                splitter._DA-B[0][opts.pxSplit]-bar._DA));
        }).trigger("resize" , [initPos]);
    });
};
})(jQuery);

/*Places focus on the main content section of pages*/
/* TODO - CONFDEV-2045 Clean up this code */
window.placeFocus = function () {

    var mainSection = document.getElementById('splitter-content');
    // Don't focus when there is an editor on the page.
    if(mainSection && AJS.$("#wysiwyg").length == 0)
    {
        mainSection.focus();
    }
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.doctheme:splitter', location = 'doctheme/space-specific-quicknav.js' */
AJS.toInit(function($) {
    // This code runs on every page, but we only want it to run in the Doc theme.
    if ($("#com-atlassian-confluence").hasClass("theme-documentation")) {
        var quickSearchQuery = $("#quick-search-query");

        var siteSearchForm = quickSearchQuery.closest("form");
        var spaceKey = $("fieldset input[name='spaceSearch']", siteSearchForm).val() === "true" ? $("#confluence-space-key").attr("content") : "";

        siteSearchForm.submit(function() {
            var query = quickSearchQuery.val();

            if (query.search(/all:/gi) >= 0) {
                quickSearchQuery.val($.trim(query.replace(/all:/gi, '')));
            }
        });

        var quickNav = AJS.defaultIfUndefined("Atlassian.SearchableApps.QuickNav", { defaultValue: Confluence.QuickNav });

        AJS.log("Applying doc-theme quick search");
        quickNav.addDropDownPostProcess(function (dropDown) {
            if (spaceKey) {
                var searchFor = $("a.search-for", dropDown);
                searchFor.attr("href", searchFor.attr("href") + "&where=" + encodeURIComponent(spaceKey));
            }
        });
        quickNav.setMakeParams(function(value) {
            var params = { query : value };

            if (params.query.search(/all:/gi) >= 0) {
                $("input[name='where']", siteSearchForm).val("");
                params.query = $.trim(params.query.replace(/all:/gi, ''));
                if (!params.query)
                    params.query = "ALL";
            } else if (spaceKey) {
                params.spaceKey = spaceKey;
            }

            return params;
        });

        // DOC-79 - We need to overwrite the tooltip that Confluence appended to the quick search box when each page finish loading.
        quickSearchQuery.mouseover(function() {
            if(spaceKey) {
                quickSearchQuery.attr("title", $("input[name='tooltip']", siteSearchForm).val());
            }
        });
    }
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.labs.hipchat.confluence-hipchat:resources', location = 'js/status.js' */
AJS.$(function(){var a=jQuery;a("body").bind("ajaxComplete",function(d,b){if(b.responseText&&/vcard/.test(b.responseText)){var c=a(".vcard");a.each(c,function(f,g){var g=a(g),e=a("a.email",g).html();if(!g.hasClass("hc-status-applied")){a.get(AJS.Data.get("context-path")+"/rest/hipchatproxy/1/user/show?user_id="+encodeURIComponent(e),function(h){if(!(h&&h.user&&typeof h.user.status=="string")){return}g.addClass("hc-status-applied");a("div.values",g).append('<a class="hc-status '+h.user.status.toLowerCase()+'" title="'+h.user.status+' on HipChat"><span>'+h.user.status+"</span></a>")},"json")}})}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.k15t.scroll.scroll-platform:getstarted-webresources', location = '/com/k15t/scroll/platform/ui/getstarted/getstarted.soy' */
// This file was automatically generated from getstarted.soy.
// Please don't edit this file by hand.

if (typeof Scroll == 'undefined') { var Scroll = {}; }
if (typeof Scroll.Versions == 'undefined') { Scroll.Versions = {}; }
if (typeof Scroll.Versions.Templates == 'undefined') { Scroll.Versions.Templates = {}; }
if (typeof Scroll.Versions.Templates.GetStarted == 'undefined') { Scroll.Versions.Templates.GetStarted = {}; }


Scroll.Versions.Templates.GetStarted.welcome = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p class="first-para">Scroll Versions</p>');
  return opt_sb ? '' : output.toString();
};


Scroll.Versions.Templates.GetStarted.newSpace = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="sv-tour-newspace"><p class="first-para">', AJS.format("sv.ui.tour.dialog.description",contextPath + '/spaces/com.k15t.scroll.platform/spaceadmin.action?key=' + AJS.params.spaceKey), '</p></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.k15t.scroll.scroll-platform:getstarted-webresources', location = '/com/k15t/scroll/platform/ui/getstarted/getstarted.js' */
(function(a){AJS.toInit(function(){b()});var b=function(){a("li.expando a").click(function(d){d.preventDefault();var f=a(this).parent();a("li.expando").removeClass("expanded").find("> p").slideUp();if(!f.is(".expanded")){var c=f.addClass("expanded").find("> p");c.css("height",c.outerHeight());c.slideDown()}else{f.removeClass("expanded").find("> p").slideUp()}});if(a("li.expando a").length){a("li.expando a").get(0).click()}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:view-comment', location = '/includes/js/comments.js' */
AJS.toInit(function(e){var d=Confluence.storageManager("comments");var a=function(){if(confirm("Are you sure you want to delete the comment?")){this.href=this.href+"&confirm=yes";return true}return false};Confluence.Comments={bindRemoveConfirmation:function(f){e("#comment-"+f+" .comment-action-remove a").click(a)}};if(!e("#comments-section").length){return}if(AJS.isIE6){e(".logo.anonymous").each(function(){var f=document.createElement("div");f.className="replacement";AJS.applyPngFilter(f,this.src);e(this).replaceWith(f)});e(".comment-actions .comment-permalink a").each(function(){e(this).addClass("filtered");var g=e(this).css("background-image").replace(/^url\(\"?|\"?\)$/g,"");var f=g.replace("light","dark");AJS.applyPngFilter(this,g);this.style.cursor="pointer";this.style.background="none";e(this).hover(function(){AJS.applyPngFilter(this,f)},function(){AJS.applyPngFilter(this,g)})})}e("#comments-section .comment:odd").addClass("odd");e(".comment-action-remove a").click(a);var c=e("#addcomment.comment-text"),b=e("#comments-text-editor textarea");b.focus(function(){c.addClass("active")}).blur(function(){if(!e.trim(b.val()).length){c.removeClass("active")}}).bind("reset.default-text",function(){c.removeClass("active")});e("form[name='textcommentform']").submit(function(){var f=b.val();if(!e.trim(f)){alert("Comment text is empty. Cannot create empty comments.");return false}return true});e("#add-comment-rte").click(function(){if(!b.hasClass("placeholded")){d.setItem("text-comment",e.trim(b.val()))}});if(e("#addcomment #rte").length){AJS.bind("init.rte",function(h,g){var f=d.getItem("text-comment");if(f){g.editor.setContent(f);d.setItem("text-comment","")}})}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/user.soy' */
// This file was automatically generated from user.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.User == 'undefined') { Confluence.Templates.User = {}; }


Confluence.Templates.User.userLinkUrl = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append(soy.$$escapeHtml(""), '/display/~', soy.$$escapeUri(opt_data.username));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.User.logo = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.profilePictureInfo['default'] && opt_data.username == opt_data.currentUsername) {
    output.append('<a ', (opt_data.canView) ? ' class="userLogoLink" data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : '', ' href="', soy.$$escapeHtml(""), '/users/editmyprofilepicture.action" title="', soy.$$escapeHtml("Add a picture of yourself"), '"><img class="userLogo logo defaultLogo" src="', soy.$$escapeHtml("/s/en_GB-1988229788/4532/e44e912a19b4356578af38c61df778d5fda2d014.50/_"), '/images/icons/profilepics/add_profile_pic.png" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml("Add a picture of yourself"), '"></a>');
  } else {
    if (opt_data.profilePictureInfo.anonymous) {
      output.append('<img class="userLogo logo anonymous" src="', soy.$$escapeHtml("/s/en_GB-1988229788/4532/e44e912a19b4356578af38c61df778d5fda2d014.50/_"), '/images/icons/profilepics/anonymous.png" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml("Anonymous"), '" title="', soy.$$escapeHtml("Anonymous"), '">');
    } else if (opt_data.canView) {
      output.append('<a class="userLogoLink" data-username="', soy.$$escapeHtml(opt_data.username), '" href="');
      Confluence.Templates.User.userLinkUrl(opt_data, output);
      output.append('"><img class="userLogo logo" src="', soy.$$escapeHtml(""), soy.$$escapeHtml(opt_data.profilePictureInfo.downloadPath), '" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml(opt_data.username), '" title="', soy.$$escapeHtml(opt_data.username), '"></a>');
    } else {
      output.append('<img class="userLogo logo anonymous" src="', soy.$$escapeHtml("/s/en_GB-1988229788/4532/e44e912a19b4356578af38c61df778d5fda2d014.50/_"), '/images/icons/profilepics/anonymous.png" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml(opt_data.username), '" title="', soy.$$escapeHtml(opt_data.username), '">');
    }
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.User.usernameLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.username && opt_data.username != '') {
    output.append('<a href="');
    Confluence.Templates.User.userLinkUrl(opt_data, output);
    output.append('"', (opt_data.canView) ? 'class="url fn confluence-userlink" data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : 'class="url fn"', '>', (opt_data.fullName && opt_data.fullName != '') ? soy.$$escapeHtml(opt_data.fullName) : soy.$$escapeHtml(opt_data.username), '</a>');
  } else {
    output.append(soy.$$escapeHtml("Anonymous"));
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.User.fullNameOrAnonymous = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.user && opt_data.user.fullName) ? soy.$$escapeHtml(opt_data.user.fullName) : soy.$$escapeHtml("Anonymous"));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.User.usernameOrAnonymous = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.user && opt_data.user.name) ? soy.$$escapeHtml(opt_data.user.name) : soy.$$escapeHtml("Anonymous"));
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/icons.soy' */
// This file was automatically generated from icons.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Icons == 'undefined') { Confluence.Templates.Icons = {}; }


Confluence.Templates.Icons.contentIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.content.type == 'trackback') ? '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="icon icon-trackback" title="' + soy.$$escapeHtml("Track back") + '">' + soy.$$escapeHtml("Track back") + ':</a>' : '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="icon ' + soy.$$escapeHtml(opt_data.iconCss) + '" title="' + soy.$$escapeHtml(opt_data.iconTitle) + '">' + soy.$$escapeHtml(opt_data.iconTitle) + '</a>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-page', location = 'soy/comments.soy' */
// This file was automatically generated from comments.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Comments == 'undefined') { Confluence.Templates.Comments = {}; }


Confluence.Templates.Comments.displayReplyEditorLoadingContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol class="comment-threads"><li class="comment-thread">');
  Confluence.Templates.Comments.displayCommentEditorCommon({comment: {'ownerId': opt_data.contentId, 'parentId': opt_data.parentCommentId}, commenter: opt_data.commenter, state: 'loading', mode: 'reply'}, output);
  output.append('</li></ol>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.displayTopLevelCommentEditorPlaceholder = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Comments.displayCommentEditorCommon({comment: {'ownerId': opt_data.contentId}, commenter: opt_data.commenter, state: 'placeholder', mode: 'add'}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.editorLoadErrorMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p>', soy.$$escapeHtml(opt_data.message), '</p><p><a href="', soy.$$escapeHtml(opt_data.fallbackUrl), '">', soy.$$escapeHtml("Try again"), '</a></p>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.displayCommentEditorCommon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="quick-comment-container comment ', soy.$$escapeHtml(opt_data.mode), '">');
  Confluence.Templates.Comments.userLogo({userInfo: opt_data.commenter}, output);
  output.append('<div class="quick-comment-vertical-spacer"></div><div class="quick-comment-body"><div class="quick-comment-loading-container" style="display:', (opt_data.state == 'loading') ? 'block' : 'none', ';"><p class="quick-comment-loading-message">', soy.$$escapeHtml("Loading the Editor"), '</p></div><div id="editor-messages"></div><div id="all-messages"></div><form style="display:', (opt_data.state == 'loading') ? 'none' : 'block', ';" class="quick-comment-form aui" method="post" ');
  switch (opt_data.mode) {
    case 'add':
      output.append('name="inlinecommentform" action="', soy.$$escapeHtml(""), '/pages/doaddcomment.action?pageId=', soy.$$escapeHtml(opt_data.comment.ownerId), '"');
      break;
    case 'edit':
      output.append('name="editcommentform" action="', soy.$$escapeHtml(""), '/pages/doeditcomment.action?pageId=', soy.$$escapeHtml(opt_data.comment.ownerId), '&commentId=', soy.$$escapeHtml(opt_data.comment.id), '"');
      break;
    case 'reply':
      output.append('name="threadedcommentform"  action="', soy.$$escapeHtml(""), '/pages/doaddcomment.action?pageId=', soy.$$escapeHtml(opt_data.comment.ownerId), '&parentId=', soy.$$escapeHtml(opt_data.comment.parentId), '"');
      break;
  }
  output.append(' ><div title="', soy.$$escapeHtml("Add a Comment"), '" class="quick-comment-prompt"><span>', soy.$$escapeHtml("Write a comment\u2026"), '</span></div></form></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.userLogo = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p class="comment-user-logo">');
  if (opt_data.userInfo.userName == null) {
    output.append('<img class="userLogo logo anonymous" src="', soy.$$escapeHtml("/s/en_GB-1988229788/4532/e44e912a19b4356578af38c61df778d5fda2d014.50/_"), '/images/icons/profilepics/anonymous.png" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml("Anonymous"), '" title="', soy.$$escapeHtml("Anonymous"), '">');
  } else if (opt_data.userInfo.profilePicture.isDefault) {
    output.append('<a class="userLogoLink" data-username="', soy.$$escapeHtml(opt_data.userInfo.userName), '" href="', soy.$$escapeHtml(""), '/users/editmyprofilepicture.action" title="', soy.$$escapeHtml("Add a picture of yourself"), '"><img class="userLogo logo defaultLogo" src="', soy.$$escapeHtml("/s/en_GB-1988229788/4532/e44e912a19b4356578af38c61df778d5fda2d014.50/_"), '/images/icons/profilepics/add_profile_pic.png" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml("Add a picture of yourself"), '"></a>');
  } else {
    output.append('<a class="userLogoLink" data-username="', soy.$$escapeHtml(opt_data.userInfo.userName), '" href="');
    Confluence.Templates.User.userLinkUrl({username: opt_data.userInfo.userName}, output);
    output.append('"><img class="userLogo logo" src="', soy.$$escapeHtml(opt_data.userInfo.profilePicture.path), '" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml(opt_data.userInfo.userName), '" title="', soy.$$escapeHtml(opt_data.userInfo.userName), '"></a>');
  }
  output.append('</p>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.displayComment = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.comment.parentId == 0 && opt_data.firstReply) {
    output.append('<div id="comments-section" class="pageSection group"><div class="section-header"><h2 id="comments-section-title" class="section-title">', soy.$$escapeHtml("1 Comment"), '</h2>');
    Confluence.Templates.Comments.commentThread({comment: opt_data.comment, commenter: opt_data.commenter, highlight: opt_data.highlight, topLevel: true}, output);
    output.append('</div></div>');
  } else if (opt_data.firstReply) {
    Confluence.Templates.Comments.commentThread({comment: opt_data.comment, commenter: opt_data.commenter, highlight: opt_data.highlight, topLevel: false}, output);
  } else {
    Confluence.Templates.Comments.commentThreadItem({comment: opt_data.comment, commenter: opt_data.commenter, highlight: true}, output);
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.commentThread = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol class="comment-threads', (opt_data.topLevel) ? ' top-level" id="page-comments' : '', '">');
  Confluence.Templates.Comments.commentThreadItem(opt_data, output);
  output.append('</ol>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.commentThreadItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li id="comment-thread-', soy.$$escapeHtml(opt_data.comment.id), '" class="comment-thread">');
  Confluence.Templates.Comments.commentView(opt_data, output);
  output.append('</li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.commentView = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="comment', (opt_data.highlight == true) ? ' focused' : '', '" id="comment-', soy.$$escapeHtml(opt_data.comment.id), '">');
  Confluence.Templates.Comments.userLogo({userInfo: opt_data.commenter}, output);
  output.append('<div class="comment-header"><h4 class="author">', (opt_data.commenter.userName == null) ? soy.$$escapeHtml("Anonymous") : '<a href="' + soy.$$escapeHtml("") + '/display/' + soy.$$escapeUri(opt_data.commenter.userName) + '" class="url fn confluence-userlink" data-username="' + soy.$$escapeHtml(opt_data.commenter.userName) + '">' + soy.$$escapeHtml(opt_data.commenter.displayName) + '</a>', '</h4></div><div class="comment-body"><div class="comment-content wiki-content">', opt_data.comment.html, '</div><div class="comment-actions">');
  Confluence.Templates.Comments.displayCommentActions({section: 'secondary', actions: opt_data.comment.secondaryActions, commentId: opt_data.comment.id}, output);
  Confluence.Templates.Comments.displayCommentActions({section: 'primary', actions: opt_data.comment.primaryActions, commentId: opt_data.comment.id}, output);
  output.append('</div></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.displayCommentActions = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="comment-actions-', soy.$$escapeHtml(opt_data.section), '">');
  if (opt_data.actions != null) {
    var itemList203 = opt_data.actions;
    var itemListLen203 = itemList203.length;
    for (var itemIndex203 = 0; itemIndex203 < itemListLen203; itemIndex203++) {
      var itemData203 = itemList203[itemIndex203];
      output.append('<li ', (itemData203.style != null) ? ' class="' + soy.$$escapeHtml(itemData203.style) + '"' : '', '><a ', (itemData203.tooltip != null) ? ' title="' + soy.$$escapeHtml(itemData203.tooltip) + '"' : '', ' href="', soy.$$escapeHtml(itemData203.url), '" ', (itemData203.id) ? ' id="' + soy.$$escapeHtml(itemData203.id) + '-' + soy.$$escapeHtml(opt_data.commentId) + '"' : '', '><span>', soy.$$escapeHtml(itemData203.label), '</span></a></li>\n');
    }
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-page', location = 'jscripts/comment-display-manager.js' */
// TODO this should be merged with Confluence.Comments from comments.js in the core product.
// At the moment it is kept separate because having it in a plugin is better for dev speed.
// This script is dependent on templates in comments.soy
Confluence.CommentDisplayManager = (function($) {

    var createTemplateInjectionContext = function() {
        return {
            "contextPath": AJS.Meta.get("context-path"),
            "staticResourceUrlPrefix": AJS.Meta.get("static-resource-url-prefix")
        };
    };
    
    var createTemplateParameters = function(commenter, comment, highlight) {
        return {
            "comment": comment,
            "commenter": commenter,
            "highlight": highlight,
            "context": createTemplateInjectionContext()
        };
    };
    
    return {

        /**
         * Update the comments section heading if it exists with the current number
         * of comments.
         */
        _updateCommentSectionTitle: function() {
            var $title = $("#comments-section-title");
            if ($title.length == 0) {
                return;
            }

            var count = this.commentCount();
            if (count == 1) {
                $("a", $title).text("1 Comment");
            } else {
                var text = AJS.format("{0} Comments", count);
                $("a", $title).text(text);
            }
        },
        
        /**
         * Add and focus the display on a new comment.
         * 
         * @param commenter the person making the comment. This is an object with the following structure:
         * {
         *     userName:       (string)
         *     displayName:    (string)
         *     profilePicture: {
         *         isDefault: (boolean)
         *         path:      (string)
         *     }
         * }
         * @param comment the comment. This is an object with the following structure:
         * {
         *     id:               (number)
         *     html:             (string)
         *     ownerId:          (number)
         *     parentId:         (number) 0 indicates a top level comment
         *     primaryActions:    (array of actions) may be empty
         *     secondaryActions: (array of actions) may be empty
         * }
         * @param highlight true if you want the comment to appear highlighted
         * @param keepFocus true if you don't want to clear the focus
         * @returns a jQuery wrapped DOM Node which is the top container for the newly added comment.
         */
        addComment: function(commenter, comment, highlight, keepFocus) {
            var templateParams = createTemplateParameters(commenter, comment, highlight);
            
            if (!this.hasComments()) {
                templateParams.firstReply = true;
                var template = Confluence.Templates.Comments.displayComment(templateParams);
                AJS.$("#comments-section").prepend(template);
            } else {
                
                var $appendLocation;
                
                if (comment.parentId == 0) {
                    templateParams.firstReply = false;
                    $appendLocation = AJS.$("#comments-section .comment-threads.top-level");                    
                } else {
                    var $commentThread = AJS.$("#comment-thread-" + comment.parentId);
                    var $replyThread = $commentThread.children(".commentThreads");
                    
                    if ($replyThread.length) {
                        templateParams.firstReply = false;
                        $appendLocation = $replyThread;
                    } else {
                        templateParams.firstReply = true;
                        $appendLocation = $commentThread;
                    }
                }
                if (!keepFocus) {
                    this.clearFocus();
                }
                var renderedTemplate = Confluence.Templates.Comments.displayComment(templateParams);
                $appendLocation.append(renderedTemplate);
                this._updateCommentSectionTitle();
            }
            
            Confluence.Comments.bindRemoveConfirmation(comment.id);
            var $insertedComment = this.getCommentNode(comment.id);
            // Scroll to the newly added comment.
            $insertedComment.scrollToElement();
            return $insertedComment;
        },        

        /**
         * Add or focus the display on a new comment, or update an existing comment.
         *
         * @see Confluence.CommentDisplayManager.addComment for more information.
         */
        addOrUpdateComment: function(commenter, comment, highlight, keepFocus) {
            var oldComment = this.getCommentNode(comment.id);
            if (oldComment) {
                oldComment.find('.comment-content').html(comment.html);
                if (!keepFocus) {
                    this.clearFocus();
                }
                if (highlight) {
                    oldComment.addClass('focused');
                }
                oldComment.scrollToElement();
                return oldComment;
            } else {
                return this.addComment.apply(this, arguments);
            }
        },

        /**
         * @return true if the comment section is visible.
         */
        isVisible : function() {
            return !$('#page-comments').hasClass("hidden");
        },
        
        /**
         * @return true if there are any comments displayed on the page.
         */
        hasComments: function() {
            return this.commentCount() > 0;
        },
        
        /**
         * @return the number of comments on the page.
         */
        commentCount: function() {
            return AJS.$("#comments-section .comment").not(".quick-comment-container").length;
        },
        
        /**
         * Remove the focus from all comments
         */
        clearFocus: function() {
            $(".comment").removeClass("focused");
        },
        
        /**
         * @param commentId the id of the comment required
         * @returns the jQuery wrapped DOM node for the top div of the identified comment or null if not found.
         */
        getCommentNode: function(commentId) {
            var $node = $("#comment-" + commentId);
            
            if (!$node.length) {
                return null;
            } else {
                return $node;
            }
        },
        
        /**
         * Get the id of the comment the indicated one is a reply to. If the comment is not a reply
         * then return 0.
         * 
         * @param commentId the id of the comment whos parent is required
         * @return the id of the parent comment or 0 if the comment is not a reply.
         */
        getParentId: function(commentId) {
            var $comment = getCommentNode(commentId);
            
            if ($comment != null) {
                var $parentComment = $comment.closest("div.comment");
                if ($parentComment.length) {
                    var idStr = $parentComment.attr("id");
                    var id = /\d+/.exec(idStr);
                    return parseInt(id);
                }
            }
            
            return 0;
        }
    };    
})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-page', location = 'jscripts/scroll-util.js' */
AJS.$(function($) {

    $.fn.extend({
        scrollToElement: function() {
            if(!this.scrollWindowToElement()) {
                // try and scroll the closest overflow set parent (e.g. Documentation Theme)
                this.scrollOverflowContainerToElement();
            }
            return this;
        },

        /**
         * The default theme has scrollbars on the window and therefore this
         * method can make sure the supplied element is visible. However other themes don't scroll the
         * window so this method will return true if it successfully scrolls and false if it is unable
         * to move the window.
         */
        scrollWindowToElement: function() {
            var $element = this;
            function getScrollY() {
                if ('pageYOffset' in window) {  // all browsers, except IE before version 9
                    return window.pageYOffset;
                } else { // Internet Explorer before version 9
                    // we ignore zoom factor which was only an issue before IE8
                    return document.documentElement.scrollTop;
                }
            };

            var scrollY = getScrollY();

            var windowHeight;
            if (typeof(window.innerWidth) == 'number') {
                windowHeight = window.innerHeight;
            } else if (document.documentElement && document.documentElement.clientWidth) {
                // IE 6+ in 'standards compliant mode'
                windowHeight = document.documentElement.clientHeight;
            } else {
                // something old and creaky - just try to make sure the element will be visible and return true so we consider this successful
                $element[0].scrollIntoView(false);
                return true;
            }

            var elementVerticalPosition = $element.offset().top;
            var elementHeight = $element.height();

            var extra = 40; // the calculation seems to be off by 40 pixels - I don't know why (perhaps padding on $element?)

            if ((elementVerticalPosition + elementHeight + extra) > scrollY + windowHeight) {
                $element[0].scrollIntoView(false); // align to the bottom of the viewport
                window.scrollBy(0, extra);
                return scrollY != getScrollY(); // did we successfully scroll the window?
            } else {
                // no scrolling was necessary
                return true;
            }
        },

        /**
         * Find the closest parent with the CSS property overflow set to either 'scroll' or 'auto' and
         * scroll this to show the element.
         *
         * @return true if successfully found a parent to scroll.
         */
        scrollOverflowContainerToElement: function() {
            var $element = this;
            var $parent = null;

            $element.parents().each(function(index) {
                var overflow = AJS.$(this).css("overflow");
                if (overflow == "auto" || overflow == "scroll") {
                    $parent = AJS.$(this);
                    return false;
                }
            });

            if (!$parent) {
                return false;
            }

            var height = $parent.height();

            var extra = 40; // the calculation seems to be off by 40 pixels - I don't know why (perhaps padding on $element?)
            var elementVerticalPosition = $element.offset().top;
            var elementHeight = $element.height();
            var differential = height - (elementVerticalPosition + elementHeight + extra);

            if (differential < 0) {
                $parent[0].scrollTop = $parent[0].scrollTop - differential;
            }

            return true;
        }
    });
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload', location = 'templates/quick-reload.soy' */
// This file was automatically generated from quick-reload.soy.
// Please don't edit this file by hand.

if (typeof QuickReload == 'undefined') { var QuickReload = {}; }
if (typeof QuickReload.Templates == 'undefined') { QuickReload.Templates = {}; }


QuickReload.Templates.notice = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="qr-notice aui-message warning"></div>');
  return opt_sb ? '' : output.toString();
};


QuickReload.Templates.noticeItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="qr-notice-item"><span class="qr-notice-text"></span>&nbsp;&nbsp;<a class="qr-notice-show" href="#">', soy.$$escapeHtml(opt_data.show), '</a>&nbsp;&nbsp;<a class="qr-notice-ignore" href="#">', soy.$$escapeHtml("Ignore"), '</a></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload', location = 'js/quick-reload-comments.js' */
Confluence.QuickReload=Confluence.QuickReload||{};
AJS.toInit(function(B){var C=Confluence.CommentDisplayManager;
function A(D){return D.comment.id
}Confluence.QuickReload.Comments=function(){return{property:"comments",singleText:function(E,D){return AJS.format("New comment from {0}",D(E.commenter))
},manyText:function(D){return AJS.format("{0} new comments",D.length)
},showText:function(){return "Show"
},filterNewResults:function(D,F){if(D.length===0||F.length===0){return F
}var E=B.map(D,A);
return B(F).filter(function(G,H){return B.inArray(A(H),E)<0
}).splice(0)
},update:function(D){C.clearFocus();
B.map(D,function(E){var G=C.getCommentNode(A(E))!=null;
var F=C.addOrUpdateComment(E.commenter,E.comment,true,true);
if(Confluence.Likes&&!G){Confluence.Likes.appendAction(B(F));
Confluence.Likes.updateComment(B(F),{})
}})
}}
}
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload', location = 'js/quick-reload-page.js' */
Confluence.QuickReload=Confluence.QuickReload||{};
AJS.toInit(function(A){Confluence.QuickReload.Page=function(){return{property:"page",singleText:function(C,B){return AJS.format("New edit by {0}",B(C.editor))
},manyText:function(B){return AJS.format("{0} new edits",B.length)
},showText:function(){return "Reload"
},filterNewResults:function(B,C){return C
},update:function(B){window.location.reload()
}}
}
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload', location = 'js/quick-reload-alert.js' */
Confluence.QuickReload=Confluence.QuickReload||{};
AJS.toInit(function(B){var A=QuickReload.Templates;
Confluence.QuickReload.Notice=function(){var C=B(A.notice());
C.appendTo("body");
return{addOrUpdateText:function(H,K,E,G){var J="qr-notice-type-"+H;
var D=C.find("."+J);
if(D.length===0){D=B(A.noticeItem({show:E})).appendTo(C);
D.addClass(J);
var I=this;
var F=function(L){if(C.find(".qr-notice-text").length==1){I.hide(function(){D.remove()
})
}else{D.remove()
}L.preventDefault()
};
D.find(".qr-notice-ignore").click(F);
D.find(".qr-notice-show").click(F).click(G)
}D.find(".qr-notice-text").text(K)
},bind:function(D,E){return C.bind(D,E)
},show:function(){C.animate({opacity:"show"},600)
},hide:function(D){C.trigger("close");
C.animate({opacity:"hide"},600,D)
}}
}
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload', location = 'js/quick-reload-timer.js' */
Confluence.QuickReload=Confluence.QuickReload||{};
AJS.toInit(function(A){Confluence.QuickReload.SmartTimer=function(I,F){var L=A.extend({min:1000*20,max:1000*60*60,inactivity:1000*60*5},F);
function E(){return new Date().getTime()
}var K=E();
var D=null;
A(window).focus(C);
A("body").click(C);
function J(){return E()-K
}function C(){var M=J()>L.inactivity;
K=E();
if(M){I();
B()
}}function G(N,M,P){var O=Math.max(Math.min(M,P),N);
return isNaN(O)?N:O
}function H(){return G(1,L.max/L.min,Math.ceil(J()/L.inactivity))
}function B(){if(D){clearTimeout(D)
}D=setTimeout(function(){I();
B()
},L.min*H())
}return{start:function(){I();
B()
},stop:function(){clearTimeout(D);
D=null
}}
}
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.quickreload:quick-reload', location = 'js/quick-reload.js' */
Confluence.QuickReload=Confluence.QuickReload||{};
AJS.toInit(function(H){if(AJS.DarkFeatures.isEnabled("quickreload.disabled")){return 
}if(!Confluence.CommentDisplayManager){return 
}var C=AJS.Meta.get("page-id");
if(C==undefined){return 
}var L=document.title;
var D=[new Confluence.QuickReload.Comments(),new Confluence.QuickReload.Page()];
var M=new Confluence.QuickReload.Notice();
M.bind("close",function(){document.title=L
});
var J=function(P){document.title=P+L
};
var O=function(P){if(P.results.length===1){return P.singleText(P.results[0],function(Q){return Q.displayName
})
}return P.manyText(P.results)
};
var B=H("meta[name='confluence-request-time']").attr("content")||new Date().getTime();
var G=false;
var N=0;
var E=function(){J(N>0?"("+N+") ":"")
};
function K(){return H("body").hasClass("contenteditor")
}function F(Q,P){return Confluence.getContextPath()+"/rest/quickreload/latest/"+Q+"?since="+encodeURIComponent(P)
}Confluence.QuickReload.update=function(){if(K()){Confluence.QuickReload.disable();
return 
}H.ajax({type:"GET",url:F(C,B),dataType:"json"}).done(function(Q){var P=false;
B=Q.time;
H.map(D,function(W){var R=Q[W.property];
W.results=W.results||[];
if(R){var X=W.results.concat(W.filterNewResults(W.results,R));
var T=X.length-W.results.length;
var U=T>0;
W.results=X;
if(U){var S=false;
function V(){W.update(W.results);
N-=W.results.length;
W.results=[];
S||E()
}if(AJS.DarkFeatures.isEnabled("confluence.quick-reload-automated")){S=true;
return V()
}M.addOrUpdateText(W.property,O(W),W.showText(),V)
}P|=U;
N+=T
}});
if(P){M.show();
E()
}})
};
var I={};
if(AJS.DarkFeatures.isEnabled("confluence.quick-reload-automated")){I.min=1000*5
}var A=new Confluence.QuickReload.SmartTimer(Confluence.QuickReload.update,I);
Confluence.QuickReload.disable=function(){G=true;
A.stop();
M.hide()
};
Confluence.QuickReload.enable=function(){G=false;
A.start()
};
A.start()
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:blueprint-first-time-tooltip-resources', location = 'com/atlassian/confluence/plugins/createcontent/js/first-time-tooptip.js' */
AJS.bind("sidebar.finished-loading",function(){var a=AJS.Meta.get("blueprint-index-popup-key");AJS.debug("Index key for "+a);if(a){Confluence.Blueprint.showIndexPagePopup(a)}});AJS.toInit(function(a){Confluence.Blueprint.showIndexPagePopup=function(c){var e=function(j){return function(m,k,l){m.html(Confluence.Templates.Blueprints.sidebarIndexPagePopup({indexPageTitle:j.toLowerCase()}));l()}};var b=AJS.$(AJS.$("li.blueprint."+c)[0]);var i=b.text();var h=AJS.$(".icon",b);var g="blueprintIndexSidebarPopup";var d=AJS.InlineDialog(h.is(":visible")?h:AJS.$(".acs-nav-sections .quick-links-section"),g,e(i),{addActiveClass:false,hideDelay:null,noBind:true});AJS.$(document).bind("showLayer",function(j){var k=g+".inline-dialog-check";a("body").unbind("click."+k)});d.show();var f=function(j){AJS.$(document).on("click","#dismiss-index-popup",function(){j.hide();return false})}(d)}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-from-template-macro.js' */
AJS.toInit(function(b){var a=b(".create-from-template-button");a.each(function(){var d=b(this);if(d.attr("aria-disabled")=="true"){var c={live:true,gravity:"n",title:"data-tooltip",delayIn:250,delayOut:0};d.tooltip(c)}else{d.click(function(){var e=AJS.Meta.get("page-id");d.data("parentPageId",e);d.addClass("launching-dialog");Confluence.Blueprint.Dialog.launch(d.data());return false})}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/create-from-template-macro.soy' */
// This file was automatically generated from create-from-template-macro.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }
if (typeof Confluence.Templates.Blueprints.CreateFromTemplate == 'undefined') { Confluence.Templates.Blueprints.CreateFromTemplate = {}; }


Confluence.Templates.Blueprints.CreateFromTemplate.macroTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a class=\'aui-button create-from-template-button\'', (! opt_data.hasCreatePermission) ? 'aria-disabled=\'true\' data-tooltip="' + soy.$$escapeHtml("Sorry, you don\x27t have permission to create content. Contact your space administrator to request access.") + '"' : '', 'data-space-key=\'', soy.$$escapeHtml(opt_data.spaceKey), '\' href=\'', soy.$$escapeHtml(opt_data.createContentUrl), '\'', (opt_data.title) ? 'data-title=\'' + soy.$$escapeHtml(opt_data.title) + '\'' : '', (opt_data.templateId) ? 'data-template-id=\'' + soy.$$escapeHtml(opt_data.templateId) + '\'' : '', (opt_data.contentBlueprintId) ? 'data-content-blueprint-id=\'' + soy.$$escapeHtml(opt_data.contentBlueprintId) + '\'' : '', '>', soy.$$escapeHtml(opt_data.buttonLabel), '</a>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-content-report-plugin:resources', location = 'com/atlassian/confluence/plugins/content_report/js/tablesorter-date-parser.js' */
(function(A){A(function(){A.tablesorter.addParser({id:"dateAttributeParser",is:function(B,D,C){return A(C).is(".content-report-table-macro .modified")
},format:function(B,D,C,E){return A(C).attr("data-sortable-date")
},type:"numeric"})
})
})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-content-report-plugin:resources', location = 'com/atlassian/confluence/plugins/content_report/soy/content-report-table.soy' */
// This file was automatically generated from content-report-table.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Plugins == 'undefined') { Confluence.Templates.Plugins = {}; }
if (typeof Confluence.Templates.Plugins.ContentReport == 'undefined') { Confluence.Templates.Plugins.ContentReport = {}; }


Confluence.Templates.Plugins.ContentReport.contentReportTable = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var hasSocialColumn__soy3 = opt_data.showCommentsCount || opt_data.showLikesCount;
  if (opt_data.results.length == 0 && opt_data.blueprintKey) {
    output.append('<div class="blueprint-blank-experience ', soy.$$escapeHtml(opt_data.blueprintKey), '"><div class="content"><h2>', soy.$$escapeHtml(opt_data.blankTitle), '</h2><p>', soy.$$escapeHtml(opt_data.blankDescription), '</p></div>', (opt_data.createButtonLabel) ? '<p><button class="create-from-template-button aui-button aui-button-primary" data-space-key="' + soy.$$escapeHtml(opt_data.dataSpaceKey) + '" data-content-blueprint-id="' + soy.$$escapeHtml(opt_data.contentBlueprintId) + '" href="' + soy.$$escapeHtml(opt_data.createContentUrl) + '" >' + soy.$$escapeHtml(opt_data.createButtonLabel) + '</button></p>' : '', '</div>');
  } else {
    output.append('<table class="aui content-report-table-macro', (hasSocialColumn__soy3) ? ' with-extra-columns' : '', '"', (opt_data.analyticsKey) ? ' data-analytics-key="' + soy.$$escapeHtml(opt_data.analyticsKey) + '"' : '', '><thead><tr><th>', soy.$$escapeHtml("Title"), '</th><th>', soy.$$escapeHtml("Creator"), '</th><th>', soy.$$escapeHtml("Modified"), '</th></tr></thead><tbody>');
    var resultList43 = opt_data.results;
    var resultListLen43 = resultList43.length;
    if (resultListLen43 > 0) {
      for (var resultIndex43 = 0; resultIndex43 < resultListLen43; resultIndex43++) {
        var resultData43 = resultList43[resultIndex43];
        output.append('<tr><td class="title"><a href="', soy.$$escapeHtml(resultData43.urlPath), '">', soy.$$escapeHtml(resultData43.title), '</a></td><td class="creator">');
        Confluence.Templates.User.usernameLink({canView: opt_data.canViewProfiles, username: resultData43.creatorName, fullName: resultData43.creatorFullName, contextPath: opt_data.contextPath}, output);
        output.append('</td><td class="modified" data-sortable-date="', soy.$$escapeHtml(resultData43.sortableDate), '">', soy.$$escapeHtml(resultData43.friendlyModificationDate), '</td>', (hasSocialColumn__soy3) ? '<td class="social">' + ((opt_data.showCommentsCount && resultData43.commentCount != 0) ? '<span class="icon icon-comment"></span> <span class="count">' + soy.$$escapeHtml(resultData43.commentCount) + '</span>' : '') + ((opt_data.showLikesCount && resultData43.likeCount != 0) ? '<span class="icon icon-like"></span> <span class="count">' + soy.$$escapeHtml(resultData43.likeCount) + '</span>' : '') + '</td>' : '', '</tr>');
      }
    } else {
      output.append('<tr><td colspan="3">', soy.$$escapeHtml("No content found."), '</td></tr>');
    }
    output.append('</tbody></table>', (opt_data.searchMoreResultsLinkUrl) ? '<div class="more-results"><a href="' + soy.$$escapeHtml("") + soy.$$escapeHtml(opt_data.searchMoreResultsLinkUrl) + '">' + soy.$$escapeHtml("Find more results") + '</a></div>' : '');
  }
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-content-report-plugin:resources', location = 'com/atlassian/confluence/plugins/content_report/js/content-report-analytics.js' */
AJS.$(function(A){A(".content-report-table-macro").on("click",".title a",function(D){var B=A(D.delegateTarget).data("analytics-key");
if(B){var C="content-report-table-macro.content-click."+B;
AJS.trigger("analytics",{name:C})
}})
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js/external/jquery/jquery-ui-datepicker.js' */
/*
 * jQuery UI Datepicker 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function( $, undefined ) {

$.extend($.ui, { datepicker: { version: "1.8.11" } });

var PROP_NAME = 'datepicker';
var dpuuid = new Date().getTime();

/* Date picker manager.
   Use the singleton instance of this class, $.date-picker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */

function Datepicker() {
	this.debug = false; // Change this to true to start debugging
	this._curInst = null; // The current instance in use
	this._keyEvent = false; // If the last event was a key event
	this._disabledInputs = []; // List of date picker inputs that have been disabled
	this._datepickerShowing = false; // True if the popup picker is showing , false if not
	this._inDialog = false; // True if showing within a "dialog", false if not
	this._mainDivId = 'ui-datepicker-div'; // The ID of the main date-picker division
	this._inlineClass = 'ui-datepicker-inline'; // The name of the inline marker class
	this._appendClass = 'ui-datepicker-append'; // The name of the append marker class
	this._triggerClass = 'ui-datepicker-trigger'; // The name of the trigger marker class
	this._dialogClass = 'ui-datepicker-dialog'; // The name of the dialog marker class
	this._disableClass = 'ui-datepicker-disabled'; // The name of the disabled covering marker class
	this._unselectableClass = 'ui-datepicker-unselectable'; // The name of the unselectable cell marker class
	this._currentClass = 'ui-datepicker-current-day'; // The name of the current day marker class
	this._dayOverClass = 'ui-datepicker-days-cell-over'; // The name of the day hover marker class
	this.regional = []; // Available regional settings, indexed by language code
	this.regional[''] = { // Default regional settings
		closeText: 'Done', // Display text for close link
		prevText: 'Prev', // Display text for previous month link
		nextText: 'Next', // Display text for next month link
		currentText: 'Today', // Display text for current month link
		monthNames: ['January','February','March','April','May','June',
			'July','August','September','October','November','December'], // Names of months for drop-down and formatting
		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // For formatting
		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], // For formatting
		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // For formatting
		dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'], // Column headings for days starting at Sunday
		weekHeader: 'Wk', // Column header for week of the year
		dateFormat: 'mm/dd/yy', // See format options on parseDate
		firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
		isRTL: false, // True if right-to-left language, false if left-to-right
		showMonthAfterYear: false, // True if the year select precedes month, false for month then year
		yearSuffix: '' // Additional text to append to the year in the month headers
	};
	this._defaults = { // Global defaults for all the date picker instances
		showOn: 'focus', // 'focus' for popup on focus,
			// 'button' for trigger button, or 'both' for either
		showAnim: 'fadeIn', // Name of jQuery animation for popup
		showOptions: {}, // Options for enhanced animations
		defaultDate: null, // Used when field is blank: actual date,
			// +/-number for offset from today, null for today
		appendText: '', // Display text following the input box, e.g. showing the format
		buttonText: '...', // Text for trigger button
		buttonImage: '', // URL for trigger button image
		buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
		hideIfNoPrevNext: false, // True to hide next/previous month links
			// if not applicable, false to just disable them
		navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
		gotoCurrent: false, // True if today link goes back to current selection instead
		changeMonth: false, // True if month can be selected directly, false if only prev/next
		changeYear: false, // True if year can be selected directly, false if only prev/next
		yearRange: 'c-10:c+10', // Range of years to display in drop-down,
			// either relative to today's year (-nn:+nn), relative to currently displayed year
			// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
		showOtherMonths: false, // True to show dates in other months, false to leave blank
		selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
		showWeek: false, // True to show week of the year, false to not show it
		calculateWeek: this.iso8601Week, // How to calculate the week of the year,
			// takes a Date and returns the number of the week for it
		shortYearCutoff: '+10', // Short year values < this are in the current century,
			// > this are in the previous century,
			// string value starting with '+' for current year + value
		minDate: null, // The earliest selectable date, or null for no limit
		maxDate: null, // The latest selectable date, or null for no limit
		duration: 'fast', // Duration of display/closure
		beforeShowDay: null, // Function that takes a date and returns an array with
			// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or '',
			// [2] = cell title (optional), e.g. $.date-picker.noWeekends
		beforeShow: null, // Function that takes an input field and
			// returns a set of custom settings for the date picker
		onSelect: null, // Define a callback function when a date is selected
		onChangeMonthYear: null, // Define a callback function when the month or year is changed
		onClose: null, // Define a callback function when the date-picker is closed
		numberOfMonths: 1, // Number of months to show at a time
		showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
		stepMonths: 1, // Number of months to step back/forward
		stepBigMonths: 12, // Number of months to step back/forward for the big links
		altField: '', // Selector for an alternate field to store selected dates into
		altFormat: '', // The date format to use for the alternate field
		constrainInput: true, // The input is constrained by the current date format
		showButtonPanel: false, // True to show button panel, false to not show it
		autoSize: false // True to size the input for the date format, false to leave as is
	};
	$.extend(this._defaults, this.regional['']);
	this.dpDiv = $('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>');
}

$.extend(Datepicker.prototype, {
	/* Class name added to elements to indicate already configured with a date picker. */
	markerClassName: 'hasDatepicker',

	/* Debug logging (if enabled). */
	log: function () {
		if (this.debug)
			console.log.apply('', arguments);
	},
	
	// TODO rename to "widget" when switching to widget factory
	_widgetDatepicker: function() {
		return this.dpDiv;
	},

	/* Override the default settings for all instances of the date picker.
	   @param  settings  object - the new settings to use as defaults (anonymous object)
	   @return the manager object */
	setDefaults: function(settings) {
		extendRemove(this._defaults, settings || {});
		return this;
	},

	/* Attach the date picker to a jQuery selection.
	   @param  target    element - the target input field or division or span
	   @param  settings  object - the new settings to use for this date picker instance (anonymous) */
	_attachDatepicker: function(target, settings) {
		// check for settings on the control itself - in namespace 'date:'
		var inlineSettings = null;
		for (var attrName in this._defaults) {
			var attrValue = target.getAttribute('date:' + attrName);
			if (attrValue) {
				inlineSettings = inlineSettings || {};
				try {
					inlineSettings[attrName] = eval(attrValue);
				} catch (err) {
					inlineSettings[attrName] = attrValue;
				}
			}
		}
		var nodeName = target.nodeName.toLowerCase();
		var inline = (nodeName == 'div' || nodeName == 'span');
		if (!target.id) {
			this.uuid += 1;
			target.id = 'dp' + this.uuid;
		}
		var inst = this._newInst($(target), inline);
		inst.settings = $.extend({}, settings || {}, inlineSettings || {});
		if (nodeName == 'input') {
			this._connectDatepicker(target, inst);
		} else if (inline) {
			this._inlineDatepicker(target, inst);
		}
	},

	/* Create a new instance object. */
	_newInst: function(target, inline) {
		var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, '\\\\$1'); // escape jQuery meta chars
		return {id: id, input: target, // associated target
			selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
			drawMonth: 0, drawYear: 0, // month being drawn
			inline: inline, // is date-picker inline or not
			dpDiv: (!inline ? this.dpDiv : // presentation div
			$('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))};
	},

	/* Attach the date picker to an input field. */
	_connectDatepicker: function(target, inst) {
		var input = $(target);
		inst.append = $([]);
		inst.trigger = $([]);
		if (input.hasClass(this.markerClassName))
			return;
		this._attachments(input, inst);
		input.addClass(this.markerClassName).keydown(this._doKeyDown).
			keypress(this._doKeyPress).keyup(this._doKeyUp).
			bind("setData.datepicker", function(event, key, value) {
				inst.settings[key] = value;
			}).bind("getData.datepicker", function(event, key) {
				return this._get(inst, key);
			});
		this._autoSize(inst);
		$.data(target, PROP_NAME, inst);
	},

	/* Make attachments based on settings. */
	_attachments: function(input, inst) {
		var appendText = this._get(inst, 'appendText');
		var isRTL = this._get(inst, 'isRTL');
		if (inst.append)
			inst.append.remove();
		if (appendText) {
			inst.append = $('<span class="' + this._appendClass + '">' + appendText + '</span>');
			input[isRTL ? 'before' : 'after'](inst.append);
		}
		input.unbind('focus', this._showDatepicker);
		if (inst.trigger)
			inst.trigger.remove();
		var showOn = this._get(inst, 'showOn');
		if (showOn == 'focus' || showOn == 'both') // pop-up date picker when in the marked field
			input.focus(this._showDatepicker);
		if (showOn == 'button' || showOn == 'both') { // pop-up date picker when button clicked
			var buttonText = this._get(inst, 'buttonText');
			var buttonImage = this._get(inst, 'buttonImage');
			inst.trigger = $(this._get(inst, 'buttonImageOnly') ?
				$('<img/>').addClass(this._triggerClass).
					attr({ src: buttonImage, alt: buttonText, title: buttonText }) :
				$('<button type="button"></button>').addClass(this._triggerClass).
					html(buttonImage == '' ? buttonText : $('<img/>').attr(
					{ src:buttonImage, alt:buttonText, title:buttonText })));
			input[isRTL ? 'before' : 'after'](inst.trigger);
			inst.trigger.click(function() {
				if ($.datepicker._datepickerShowing && $.datepicker._lastInput == input[0])
					$.datepicker._hideDatepicker();
				else
					$.datepicker._showDatepicker(input[0]);
				return false;
			});
		}
	},

	/* Apply the maximum length for the date format. */
	_autoSize: function(inst) {
		if (this._get(inst, 'autoSize') && !inst.inline) {
			var date = new Date(2009, 12 - 1, 20); // Ensure double digits
			var dateFormat = this._get(inst, 'dateFormat');
			if (dateFormat.match(/[DM]/)) {
				var findMax = function(names) {
					var max = 0;
					var maxI = 0;
					for (var i = 0; i < names.length; i++) {
						if (names[i].length > max) {
							max = names[i].length;
							maxI = i;
						}
					}
					return maxI;
				};
				date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ?
					'monthNames' : 'monthNamesShort'))));
				date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ?
					'dayNames' : 'dayNamesShort'))) + 20 - date.getDay());
			}
			inst.input.attr('size', this._formatDate(inst, date).length);
		}
	},

	/* Attach an inline date picker to a div. */
	_inlineDatepicker: function(target, inst) {
		var divSpan = $(target);
		if (divSpan.hasClass(this.markerClassName))
			return;
		divSpan.addClass(this.markerClassName).append(inst.dpDiv).
			bind("setData.datepicker", function(event, key, value){
				inst.settings[key] = value;
			}).bind("getData.datepicker", function(event, key){
				return this._get(inst, key);
			});
		$.data(target, PROP_NAME, inst);
		this._setDate(inst, this._getDefaultDate(inst), true);
		this._updateDatepicker(inst);
		this._updateAlternate(inst);
		inst.dpDiv.show();
	},

	/* Pop-up the date picker in a "dialog" box.
	   @param  input     element - ignored
	   @param  date      string or Date - the initial date to display
	   @param  onSelect  function - the function to call when a date is selected
	   @param  settings  object - update the dialog date picker instance's settings (anonymous object)
	   @param  pos       int[2] - coordinates for the dialog's position within the screen or
	                     event - with x/y coordinates or
	                     leave empty for default (screen centre)
	   @return the manager object */
	_dialogDatepicker: function(input, date, onSelect, settings, pos) {
		var inst = this._dialogInst; // internal instance
		if (!inst) {
			this.uuid += 1;
			var id = 'dp' + this.uuid;
			this._dialogInput = $('<input type="text" id="' + id +
				'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');
			this._dialogInput.keydown(this._doKeyDown);
			$('body').append(this._dialogInput);
			inst = this._dialogInst = this._newInst(this._dialogInput, false);
			inst.settings = {};
			$.data(this._dialogInput[0], PROP_NAME, inst);
		}
		extendRemove(inst.settings, settings || {});
		date = (date && date.constructor == Date ? this._formatDate(inst, date) : date);
		this._dialogInput.val(date);

		this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
		if (!this._pos) {
			var browserWidth = document.documentElement.clientWidth;
			var browserHeight = document.documentElement.clientHeight;
			var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
			var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
			this._pos = // should use actual width/height below
				[(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY];
		}

		// move input on screen for focus, but hidden behind dialog
		this._dialogInput.css('left', (this._pos[0] + 20) + 'px').css('top', this._pos[1] + 'px');
		inst.settings.onSelect = onSelect;
		this._inDialog = true;
		this.dpDiv.addClass(this._dialogClass);
		this._showDatepicker(this._dialogInput[0]);
		if ($.blockUI)
			$.blockUI(this.dpDiv);
		$.data(this._dialogInput[0], PROP_NAME, inst);
		return this;
	},

	/* Detach a date-picker from its control.
	   @param  target    element - the target input field or division or span */
	_destroyDatepicker: function(target) {
		var $target = $(target);
		var inst = $.data(target, PROP_NAME);
		if (!$target.hasClass(this.markerClassName)) {
			return;
		}
		var nodeName = target.nodeName.toLowerCase();
		$.removeData(target, PROP_NAME);
		if (nodeName == 'input') {
			inst.append.remove();
			inst.trigger.remove();
			$target.removeClass(this.markerClassName).
				unbind('focus', this._showDatepicker).
				unbind('keydown', this._doKeyDown).
				unbind('keypress', this._doKeyPress).
				unbind('keyup', this._doKeyUp);
		} else if (nodeName == 'div' || nodeName == 'span')
			$target.removeClass(this.markerClassName).empty();
	},

	/* Enable the date picker to a jQuery selection.
	   @param  target    element - the target input field or division or span */
	_enableDatepicker: function(target) {
		var $target = $(target);
		var inst = $.data(target, PROP_NAME);
		if (!$target.hasClass(this.markerClassName)) {
			return;
		}
		var nodeName = target.nodeName.toLowerCase();
		if (nodeName == 'input') {
			target.disabled = false;
			inst.trigger.filter('button').
				each(function() { this.disabled = false; }).end().
				filter('img').css({opacity: '1.0', cursor: ''});
		}
		else if (nodeName == 'div' || nodeName == 'span') {
			var inline = $target.children('.' + this._inlineClass);
			inline.children().removeClass('ui-state-disabled');
		}
		this._disabledInputs = $.map(this._disabledInputs,
			function(value) { return (value == target ? null : value); }); // delete entry
	},

	/* Disable the date picker to a jQuery selection.
	   @param  target    element - the target input field or division or span */
	_disableDatepicker: function(target) {
		var $target = $(target);
		var inst = $.data(target, PROP_NAME);
		if (!$target.hasClass(this.markerClassName)) {
			return;
		}
		var nodeName = target.nodeName.toLowerCase();
		if (nodeName == 'input') {
			target.disabled = true;
			inst.trigger.filter('button').
				each(function() { this.disabled = true; }).end().
				filter('img').css({opacity: '0.5', cursor: 'default'});
		}
		else if (nodeName == 'div' || nodeName == 'span') {
			var inline = $target.children('.' + this._inlineClass);
			inline.children().addClass('ui-state-disabled');
		}
		this._disabledInputs = $.map(this._disabledInputs,
			function(value) { return (value == target ? null : value); }); // delete entry
		this._disabledInputs[this._disabledInputs.length] = target;
	},

	/* Is the first field in a jQuery collection disabled as a date-picker?
	   @param  target    element - the target input field or division or span
	   @return boolean - true if disabled, false if enabled */
	_isDisabledDatepicker: function(target) {
		if (!target) {
			return false;
		}
		for (var i = 0; i < this._disabledInputs.length; i++) {
			if (this._disabledInputs[i] == target)
				return true;
		}
		return false;
	},

	/* Retrieve the instance data for the target control.
	   @param  target  element - the target input field or division or span
	   @return  object - the associated instance data
	   @throws  error if a jQuery problem getting data */
	_getInst: function(target) {
		try {
			return $.data(target, PROP_NAME);
		}
		catch (err) {
			throw 'Missing instance data for this datepicker';
		}
	},

	/* Update or retrieve the settings for a date picker attached to an input field or division.
	   @param  target  element - the target input field or division or span
	   @param  name    object - the new settings to update or
	                   string - the name of the setting to change or retrieve,
	                   when retrieving also 'all' for all instance settings or
	                   'defaults' for all global defaults
	   @param  value   any - the new value for the setting
	                   (omit if above is an object or to retrieve a value) */
	_optionDatepicker: function(target, name, value) {
		var inst = this._getInst(target);
		if (arguments.length == 2 && typeof name == 'string') {
			return (name == 'defaults' ? $.extend({}, $.datepicker._defaults) :
				(inst ? (name == 'all' ? $.extend({}, inst.settings) :
				this._get(inst, name)) : null));
		}
		var settings = name || {};
		if (typeof name == 'string') {
			settings = {};
			settings[name] = value;
		}
		if (inst) {
			if (this._curInst == inst) {
				this._hideDatepicker();
			}
			var date = this._getDateDatepicker(target, true);
			var minDate = this._getMinMaxDate(inst, 'min');
			var maxDate = this._getMinMaxDate(inst, 'max');
			extendRemove(inst.settings, settings);
			// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
			if (minDate !== null && settings['dateFormat'] !== undefined && settings['minDate'] === undefined)
				inst.settings.minDate = this._formatDate(inst, minDate);
			if (maxDate !== null && settings['dateFormat'] !== undefined && settings['maxDate'] === undefined)
				inst.settings.maxDate = this._formatDate(inst, maxDate);
			this._attachments($(target), inst);
			this._autoSize(inst);
			this._setDateDatepicker(target, date);
			this._updateDatepicker(inst);
		}
	},

	// change method deprecated
	_changeDatepicker: function(target, name, value) {
		this._optionDatepicker(target, name, value);
	},

	/* Redraw the date picker attached to an input field or division.
	   @param  target  element - the target input field or division or span */
	_refreshDatepicker: function(target) {
		var inst = this._getInst(target);
		if (inst) {
			this._updateDatepicker(inst);
		}
	},

	/* Set the dates for a jQuery selection.
	   @param  target   element - the target input field or division or span
	   @param  date     Date - the new date */
	_setDateDatepicker: function(target, date) {
		var inst = this._getInst(target);
		if (inst) {
			this._setDate(inst, date);
			this._updateDatepicker(inst);
			this._updateAlternate(inst);
		}
	},

	/* Get the date(s) for the first entry in a jQuery selection.
	   @param  target     element - the target input field or division or span
	   @param  noDefault  boolean - true if no default date is to be used
	   @return Date - the current date */
	_getDateDatepicker: function(target, noDefault) {
		var inst = this._getInst(target);
		if (inst && !inst.inline)
			this._setDateFromField(inst, noDefault);
		return (inst ? this._getDate(inst) : null);
	},

	/* Handle keystrokes. */
	_doKeyDown: function(event) {
		var inst = $.datepicker._getInst(event.target);
		var handled = true;
		var isRTL = inst.dpDiv.is('.ui-datepicker-rtl');
		inst._keyEvent = true;
		if ($.datepicker._datepickerShowing)
			switch (event.keyCode) {
				case 9: $.datepicker._hideDatepicker();
						handled = false;
						break; // hide on tab out
				case 13: var sel = $('td.' + $.datepicker._dayOverClass + ':not(.' + 
									$.datepicker._currentClass + ')', inst.dpDiv);
						if (sel[0])
							$.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
						else
							$.datepicker._hideDatepicker();
						return false; // don't submit the form
						break; // select the value on enter
				case 27: $.datepicker._hideDatepicker();
						break; // hide on escape
				case 33: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
							-$.datepicker._get(inst, 'stepBigMonths') :
							-$.datepicker._get(inst, 'stepMonths')), 'M');
						break; // previous month/year on page up/+ ctrl
				case 34: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
							+$.datepicker._get(inst, 'stepBigMonths') :
							+$.datepicker._get(inst, 'stepMonths')), 'M');
						break; // next month/year on page down/+ ctrl
				case 35: if (event.ctrlKey || event.metaKey) $.datepicker._clearDate(event.target);
						handled = event.ctrlKey || event.metaKey;
						break; // clear on ctrl or command +end
				case 36: if (event.ctrlKey || event.metaKey) $.datepicker._gotoToday(event.target);
						handled = event.ctrlKey || event.metaKey;
						break; // current on ctrl or command +home
				case 37: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), 'D');
						handled = event.ctrlKey || event.metaKey;
						// -1 day on ctrl or command +left
						if (event.originalEvent.altKey) $.datepicker._adjustDate(event.target, (event.ctrlKey ?
									-$.datepicker._get(inst, 'stepBigMonths') :
									-$.datepicker._get(inst, 'stepMonths')), 'M');
						// next month/year on alt +left on Mac
						break;
				case 38: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, -7, 'D');
						handled = event.ctrlKey || event.metaKey;
						break; // -1 week on ctrl or command +up
				case 39: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), 'D');
						handled = event.ctrlKey || event.metaKey;
						// +1 day on ctrl or command +right
						if (event.originalEvent.altKey) $.datepicker._adjustDate(event.target, (event.ctrlKey ?
									+$.datepicker._get(inst, 'stepBigMonths') :
									+$.datepicker._get(inst, 'stepMonths')), 'M');
						// next month/year on alt +right
						break;
				case 40: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, +7, 'D');
						handled = event.ctrlKey || event.metaKey;
						break; // +1 week on ctrl or command +down
				default: handled = false;
			}
		else if (event.keyCode == 36 && event.ctrlKey) // display the date picker on ctrl+home
			$.datepicker._showDatepicker(this);
		else {
			handled = false;
		}
		if (handled) {
			event.preventDefault();
			event.stopPropagation();
		}
	},

	/* Filter entered characters - based on date format. */
	_doKeyPress: function(event) {
		var inst = $.datepicker._getInst(event.target);
		if ($.datepicker._get(inst, 'constrainInput')) {
			var chars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat'));
			var chr = String.fromCharCode(event.charCode == undefined ? event.keyCode : event.charCode);
			return event.ctrlKey || event.metaKey || (chr < ' ' || !chars || chars.indexOf(chr) > -1);
		}
	},

	/* Synchronise manual entry and field/alternate field. */
	_doKeyUp: function(event) {
		var inst = $.datepicker._getInst(event.target);
		if (inst.input.val() != inst.lastVal) {
			try {
				var date = $.datepicker.parseDate($.datepicker._get(inst, 'dateFormat'),
					(inst.input ? inst.input.val() : null),
					$.datepicker._getFormatConfig(inst));
				if (date) { // only if valid
					$.datepicker._setDateFromField(inst);
					$.datepicker._updateAlternate(inst);
					$.datepicker._updateDatepicker(inst);
				}
			}
			catch (event) {
				$.datepicker.log(event);
			}
		}
		return true;
	},

	/* Pop-up the date picker for a given input field.
	   @param  input  element - the input field attached to the date picker or
	                  event - if triggered by focus */
	_showDatepicker: function(input) {
		input = input.target || input;
		if (input.nodeName.toLowerCase() != 'input') // find from button/image trigger
			input = $('input', input.parentNode)[0];
		if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput == input) // already here
			return;
		var inst = $.datepicker._getInst(input);
		if ($.datepicker._curInst && $.datepicker._curInst != inst) {
			$.datepicker._curInst.dpDiv.stop(true, true);
		}
		var beforeShow = $.datepicker._get(inst, 'beforeShow');
		extendRemove(inst.settings, (beforeShow ? beforeShow.apply(input, [input, inst]) : {}));
		inst.lastVal = null;
		$.datepicker._lastInput = input;
		$.datepicker._setDateFromField(inst);
		if ($.datepicker._inDialog) // hide cursor
			input.value = '';
		if (!$.datepicker._pos) { // position below input
			$.datepicker._pos = $.datepicker._findPos(input);
			$.datepicker._pos[1] += input.offsetHeight; // add the height
		}
		var isFixed = false;
		$(input).parents().each(function() {
			isFixed |= $(this).css('position') == 'fixed';
			return !isFixed;
		});
		if (isFixed && $.browser.opera) { // correction for Opera when fixed and scrolled
			$.datepicker._pos[0] -= document.documentElement.scrollLeft;
			$.datepicker._pos[1] -= document.documentElement.scrollTop;
		}
		var offset = {left: $.datepicker._pos[0], top: $.datepicker._pos[1]};
		$.datepicker._pos = null;
		//to avoid flashes on Firefox
		inst.dpDiv.empty();
		// determine sizing offscreen
		inst.dpDiv.css({position: 'absolute', display: 'block', top: '-1000px'});
		$.datepicker._updateDatepicker(inst);
		// fix width for dynamic number of date pickers
		// and adjust position before showing
		offset = $.datepicker._checkOffset(inst, offset, isFixed);
		inst.dpDiv.css({position: ($.datepicker._inDialog && $.blockUI ?
			'static' : (isFixed ? 'fixed' : 'absolute')), display: 'none',
			left: offset.left + 'px', top: offset.top + 'px'});
		if (!inst.inline) {
			var showAnim = $.datepicker._get(inst, 'showAnim');
			var duration = $.datepicker._get(inst, 'duration');
			var postProcess = function() {
				$.datepicker._datepickerShowing = true;
				var cover = inst.dpDiv.find('iframe.ui-datepicker-cover'); // IE6- only
				if( !! cover.length ){
					var borders = $.datepicker._getBorders(inst.dpDiv);
					cover.css({left: -borders[0], top: -borders[1],
						width: inst.dpDiv.outerWidth(), height: inst.dpDiv.outerHeight()});
				}
			};
			inst.dpDiv.zIndex($(input).zIndex()+1);
			if ($.effects && $.effects[showAnim])
				inst.dpDiv.show(showAnim, $.datepicker._get(inst, 'showOptions'), duration, postProcess);
			else
				inst.dpDiv[showAnim || 'show']((showAnim ? duration : null), postProcess);
			if (!showAnim || !duration)
				postProcess();
			if (inst.input.is(':visible') && !inst.input.is(':disabled'))
				inst.input.focus();
			$.datepicker._curInst = inst;
		}
	},

	/* Generate the date picker content. */
	_updateDatepicker: function(inst) {
		var self = this;
		var borders = $.datepicker._getBorders(inst.dpDiv);
		inst.dpDiv.empty().append(this._generateHTML(inst));
		var cover = inst.dpDiv.find('iframe.ui-datepicker-cover'); // IE6- only
		if( !!cover.length ){ //avoid call to outerXXXX() when not in IE6
			cover.css({left: -borders[0], top: -borders[1], width: inst.dpDiv.outerWidth(), height: inst.dpDiv.outerHeight()})
		}
		inst.dpDiv.find('button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a')
				.bind('mouseout', function(){
					$(this).removeClass('ui-state-hover');
					if(this.className.indexOf('ui-datepicker-prev') != -1) $(this).removeClass('ui-datepicker-prev-hover');
					if(this.className.indexOf('ui-datepicker-next') != -1) $(this).removeClass('ui-datepicker-next-hover');
				})
				.bind('mouseover', function(){
					if (!self._isDisabledDatepicker( inst.inline ? inst.dpDiv.parent()[0] : inst.input[0])) {
						$(this).parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover');
						$(this).addClass('ui-state-hover');
						if(this.className.indexOf('ui-datepicker-prev') != -1) $(this).addClass('ui-datepicker-prev-hover');
						if(this.className.indexOf('ui-datepicker-next') != -1) $(this).addClass('ui-datepicker-next-hover');
					}
				})
			.end()
			.find('.' + this._dayOverClass + ' a')
				.trigger('mouseover')
			.end();
		var numMonths = this._getNumberOfMonths(inst);
		var cols = numMonths[1];
		var width = 17;
		if (cols > 1)
			inst.dpDiv.addClass('ui-datepicker-multi-' + cols).css('width', (width * cols) + 'em');
		else
			inst.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width('');
		inst.dpDiv[(numMonths[0] != 1 || numMonths[1] != 1 ? 'add' : 'remove') +
			'Class']('ui-datepicker-multi');
		inst.dpDiv[(this._get(inst, 'isRTL') ? 'add' : 'remove') +
			'Class']('ui-datepicker-rtl');
		if (inst == $.datepicker._curInst && $.datepicker._datepickerShowing && inst.input &&
				// #6694 - don't focus the input if it's already focused
				// this breaks the change event in IE
				inst.input.is(':visible') && !inst.input.is(':disabled') && inst.input[0] != document.activeElement)
			inst.input.focus();
		// deffered render of the years select (to avoid flashes on Firefox) 
		if( inst.yearshtml ){
			var origyearshtml = inst.yearshtml;
			setTimeout(function(){
				//assure that inst.yearshtml didn't change.
				if( origyearshtml === inst.yearshtml ){
					inst.dpDiv.find('select.ui-datepicker-year:first').replaceWith(inst.yearshtml);
				}
				origyearshtml = inst.yearshtml = null;
			}, 0);
		}
	},

	/* Retrieve the size of left and top borders for an element.
	   @param  elem  (jQuery object) the element of interest
	   @return  (number[2]) the left and top borders */
	_getBorders: function(elem) {
		var convert = function(value) {
			return {thin: 1, medium: 2, thick: 3}[value] || value;
		};
		return [parseFloat(convert(elem.css('border-left-width'))),
			parseFloat(convert(elem.css('border-top-width')))];
	},

	/* Check positioning to remain on screen. */
	_checkOffset: function(inst, offset, isFixed) {
		var dpWidth = inst.dpDiv.outerWidth();
		var dpHeight = inst.dpDiv.outerHeight();
		var inputWidth = inst.input ? inst.input.outerWidth() : 0;
		var inputHeight = inst.input ? inst.input.outerHeight() : 0;
		var viewWidth = document.documentElement.clientWidth + $(document).scrollLeft();
		var viewHeight = document.documentElement.clientHeight + $(document).scrollTop();

		offset.left -= (this._get(inst, 'isRTL') ? (dpWidth - inputWidth) : 0);
		offset.left -= (isFixed && offset.left == inst.input.offset().left) ? $(document).scrollLeft() : 0;
		offset.top -= (isFixed && offset.top == (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;

		// now check if date-picker is showing outside window viewport - move to a better place if so.
		offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
			Math.abs(offset.left + dpWidth - viewWidth) : 0);
		offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
			Math.abs(dpHeight + inputHeight) : 0);

		return offset;
	},

	/* Find an object's position on the screen. */
	_findPos: function(obj) {
		var inst = this._getInst(obj);
		var isRTL = this._get(inst, 'isRTL');
        while (obj && (obj.type == 'hidden' || obj.nodeType != 1 || $.expr.filters.hidden(obj))) {
            obj = obj[isRTL ? 'previousSibling' : 'nextSibling'];
        }
        var position = $(obj).offset();
	    return [position.left, position.top];
	},

	/* Hide the date picker from view.
	   @param  input  element - the input field attached to the date picker */
	_hideDatepicker: function(input) {
		var inst = this._curInst;
		if (!inst || (input && inst != $.data(input, PROP_NAME)))
			return;
		if (this._datepickerShowing) {
			var showAnim = this._get(inst, 'showAnim');
			var duration = this._get(inst, 'duration');
			var postProcess = function() {
				$.datepicker._tidyDialog(inst);
				this._curInst = null;
			};
			if ($.effects && $.effects[showAnim])
				inst.dpDiv.hide(showAnim, $.datepicker._get(inst, 'showOptions'), duration, postProcess);
			else
				inst.dpDiv[(showAnim == 'slideDown' ? 'slideUp' :
					(showAnim == 'fadeIn' ? 'fadeOut' : 'hide'))]((showAnim ? duration : null), postProcess);
			if (!showAnim)
				postProcess();
			var onClose = this._get(inst, 'onClose');
			if (onClose)
				onClose.apply((inst.input ? inst.input[0] : null),
					[(inst.input ? inst.input.val() : ''), inst]);  // trigger custom callback
			this._datepickerShowing = false;
			this._lastInput = null;
			if (this._inDialog) {
				this._dialogInput.css({ position: 'absolute', left: '0', top: '-100px' });
				if ($.blockUI) {
					$.unblockUI();
					$('body').append(this.dpDiv);
				}
			}
			this._inDialog = false;
		}
	},

	/* Tidy up after a dialog display. */
	_tidyDialog: function(inst) {
		inst.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker-calendar');
	},

	/* Close date picker if clicked elsewhere. */
	_checkExternalClick: function(event) {
		if (!$.datepicker._curInst)
			return;
		var $target = $(event.target);
		if ($target[0].id != $.datepicker._mainDivId &&
				$target.parents('#' + $.datepicker._mainDivId).length == 0 &&
				!$target.hasClass($.datepicker.markerClassName) &&
				!$target.hasClass($.datepicker._triggerClass) &&
				$.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI))
			$.datepicker._hideDatepicker();
	},

	/* Adjust one of the date sub-fields. */
	_adjustDate: function(id, offset, period) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		if (this._isDisabledDatepicker(target[0])) {
			return;
		}
		this._adjustInstDate(inst, offset +
			(period == 'M' ? this._get(inst, 'showCurrentAtPos') : 0), // undo positioning
			period);
		this._updateDatepicker(inst);
	},

	/* Action for current link. */
	_gotoToday: function(id) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
			inst.selectedDay = inst.currentDay;
			inst.drawMonth = inst.selectedMonth = inst.currentMonth;
			inst.drawYear = inst.selectedYear = inst.currentYear;
		}
		else {
			var date = new Date();
			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
		}
		this._notifyChange(inst);
		this._adjustDate(target);
	},

	/* Action for selecting a new month/year. */
	_selectMonthYear: function(id, select, period) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		inst._selectingMonthYear = false;
		inst['selected' + (period == 'M' ? 'Month' : 'Year')] =
		inst['draw' + (period == 'M' ? 'Month' : 'Year')] =
			parseInt(select.options[select.selectedIndex].value,10);
		this._notifyChange(inst);
		this._adjustDate(target);
	},

	/* Restore input focus after not changing month/year. */
	_clickMonthYear: function(id) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		if (inst.input && inst._selectingMonthYear) {
			setTimeout(function() {
				inst.input.focus();
			}, 0);
		}
		inst._selectingMonthYear = !inst._selectingMonthYear;
	},

	/* Action for selecting a day. */
	_selectDay: function(id, month, year, td) {
		var target = $(id);
		if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
			return;
		}
		var inst = this._getInst(target[0]);
		inst.selectedDay = inst.currentDay = $('a', td).html();
		inst.selectedMonth = inst.currentMonth = month;
		inst.selectedYear = inst.currentYear = year;
		this._selectDate(id, this._formatDate(inst,
			inst.currentDay, inst.currentMonth, inst.currentYear));
	},

	/* Erase the input field and hide the date picker. */
	_clearDate: function(id) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		this._selectDate(target, '');
	},

	/* Update the input field with the selected date. */
	_selectDate: function(id, dateStr) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
		if (inst.input)
			inst.input.val(dateStr);
		this._updateAlternate(inst);
		var onSelect = this._get(inst, 'onSelect');
		if (onSelect)
			onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);  // trigger custom callback
		else if (inst.input)
			inst.input.trigger('change'); // fire the change event
		if (inst.inline)
			this._updateDatepicker(inst);
		else {
			this._hideDatepicker();
			this._lastInput = inst.input[0];
			if (typeof(inst.input[0]) != 'object')
				inst.input.focus(); // restore focus
			this._lastInput = null;
		}
	},

	/* Update any alternate field to synchronise with the main field. */
	_updateAlternate: function(inst) {
		var altField = this._get(inst, 'altField');
		if (altField) { // update alternate field too
			var altFormat = this._get(inst, 'altFormat') || this._get(inst, 'dateFormat');
			var date = this._getDate(inst);
			var dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
			$(altField).each(function() { $(this).val(dateStr); });
		}
	},

	/* Set as beforeShowDay function to prevent selection of weekends.
	   @param  date  Date - the date to customise
	   @return [boolean, string] - is this date selectable?, what is its CSS class? */
	noWeekends: function(date) {
		var day = date.getDay();
		return [(day > 0 && day < 6), ''];
	},

	/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	   @param  date  Date - the date to get the week for
	   @return  number - the number of the week within the year that contains this date */
	iso8601Week: function(date) {
		var checkDate = new Date(date.getTime());
		// Find Thursday of this week starting on Monday
		checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
		var time = checkDate.getTime();
		checkDate.setMonth(0); // Compare with Jan 1
		checkDate.setDate(1);
		return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
	},

	/* Parse a string value into a date object.
	   See formatDate below for the possible formats.

	   @param  format    string - the expected format of the date
	   @param  value     string - the date in the above format
	   @param  settings  Object - attributes include:
	                     shortYearCutoff  number - the cutoff year for determining the century (optional)
	                     dayNamesShort    string[7] - abbreviated names of the days from Sunday (optional)
	                     dayNames         string[7] - names of the days from Sunday (optional)
	                     monthNamesShort  string[12] - abbreviated names of the months (optional)
	                     monthNames       string[12] - names of the months (optional)
	   @return  Date - the extracted date value or null if value is blank */
	parseDate: function (format, value, settings) {
		if (format == null || value == null)
			throw 'Invalid arguments';
		value = (typeof value == 'object' ? value.toString() : value + '');
		if (value == '')
			return null;
		var shortYearCutoff = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff;
		shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff :
				new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
		var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
		var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
		var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
		var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
		var year = -1;
		var month = -1;
		var day = -1;
		var doy = -1;
		var literal = false;
		// Check whether a format character is doubled
		var lookAhead = function(match) {
			var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
			if (matches)
				iFormat++;
			return matches;
		};
		// Extract a number from the string value
		var getNumber = function(match) {
			var isDoubled = lookAhead(match);
			var size = (match == '@' ? 14 : (match == '!' ? 20 :
				(match == 'y' && isDoubled ? 4 : (match == 'o' ? 3 : 2))));
			var digits = new RegExp('^\\d{1,' + size + '}');
			var num = value.substring(iValue).match(digits);
			if (!num)
				throw 'Missing number at position ' + iValue;
			iValue += num[0].length;
			return parseInt(num[0], 10);
		};
		// Extract a name from the string value and convert to an index
		var getName = function(match, shortNames, longNames) {
			var names = (lookAhead(match) ? longNames : shortNames);
			for (var i = 0; i < names.length; i++) {
				if (value.substr(iValue, names[i].length).toLowerCase() == names[i].toLowerCase()) {
					iValue += names[i].length;
					return i + 1;
				}
			}
			throw 'Unknown name at position ' + iValue;
		};
		// Confirm that a literal character matches the string value
		var checkLiteral = function() {
			if (value.charAt(iValue) != format.charAt(iFormat))
				throw 'Unexpected literal at position ' + iValue;
			iValue++;
		};
		var iValue = 0;
		for (var iFormat = 0; iFormat < format.length; iFormat++) {
			if (literal)
				if (format.charAt(iFormat) == "'" && !lookAhead("'"))
					literal = false;
				else
					checkLiteral();
			else
				switch (format.charAt(iFormat)) {
					case 'd':
						day = getNumber('d');
						break;
					case 'D':
						getName('D', dayNamesShort, dayNames);
						break;
					case 'o':
						doy = getNumber('o');
						break;
					case 'm':
						month = getNumber('m');
						break;
					case 'M':
						month = getName('M', monthNamesShort, monthNames);
						break;
					case 'y':
						year = getNumber('y');
						break;
					case '@':
						var date = new Date(getNumber('@'));
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case '!':
						var date = new Date((getNumber('!') - this._ticksTo1970) / 10000);
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "'":
						if (lookAhead("'"))
							checkLiteral();
						else
							literal = true;
						break;
					default:
						checkLiteral();
				}
		}
		if (year == -1)
			year = new Date().getFullYear();
		else if (year < 100)
			year += new Date().getFullYear() - new Date().getFullYear() % 100 +
				(year <= shortYearCutoff ? 0 : -100);
		if (doy > -1) {
			month = 1;
			day = doy;
			do {
				var dim = this._getDaysInMonth(year, month - 1);
				if (day <= dim)
					break;
				month++;
				day -= dim;
			} while (true);
		}
		var date = this._daylightSavingAdjust(new Date(year, month - 1, day));
		if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day)
			throw 'Invalid date'; // E.g. 31/02/*
		return date;
	},

	/* Standard date formats. */
	ATOM: 'yy-mm-dd', // RFC 3339 (ISO 8601)
	COOK