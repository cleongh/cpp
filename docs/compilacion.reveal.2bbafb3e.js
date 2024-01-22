var e,t;e=this,t=function(){/*!
	 * Handles finding a text string anywhere in the slides and showing the next occurrence to the user
	 * by navigatating to that slide and highlighting it.
	 *
	 * @author Jon Snyder <snyder.jon@gmail.com>, February 2013
	 */return()=>{let e,t,n,o,l,i,r;function s(){(t=document.createElement("div")).classList.add("searchbox"),t.style.position="absolute",t.style.top="10px",t.style.right="10px",t.style.zIndex=10,t.innerHTML='<input type="search" class="searchinput" placeholder="Search..." style="vertical-align: top;"/>\n		</span>',(n=t.querySelector(".searchinput")).style.width="240px",n.style.fontSize="14px",n.style.padding="4px 6px",n.style.color="#000",n.style.background="#fff",n.style.borderRadius="2px",n.style.border="0",n.style.outline="0",n.style.boxShadow="0 2px 18px rgba(0, 0, 0, 0.2)",n.style["-webkit-appearance"]="none",e.getRevealElement().appendChild(t),n.addEventListener("keyup",function(t){13===t.keyCode?(t.preventDefault(),function(){if(i){var t=n.value;""===t?(r&&r.remove(),o=null):(o=(r=new c("slidecontent")).apply(t),l=0)}o&&(o.length&&o.length<=l&&(l=0),o.length>l&&(e.slide(o[l].h,o[l].v),l++))}(),i=!1):i=!0},!1),d()}function a(){t||s(),t.style.display="inline",n.focus(),n.select()}function d(){t||s(),t.style.display="none",r&&r.remove()}function c(t,n){var o=document.getElementById(t)||document.body,l=n||"EM",i=RegExp("^(?:"+l+"|SCRIPT|FORM)$"),r=["#ff6","#a0ffff","#9f9","#f99","#f6f"],s=[],a=0,d="",c=[];this.setRegex=function(e){d=RegExp("("+(e=e.trim())+")","i")},this.getRegex=function(){return d.toString().replace(/^\/\\b\(|\)\\b\/i$/g,"").replace(/\|/g," ")},this.hiliteWords=function(t){if(null!=t&&t&&d&&!i.test(t.nodeName)){if(t.hasChildNodes())for(var n,o,f=0;f<t.childNodes.length;f++)this.hiliteWords(t.childNodes[f]);if(3==t.nodeType&&(n=t.nodeValue)&&(o=d.exec(n))){for(var p=t;null!=p&&"SECTION"!=p.nodeName;)p=p.parentNode;var u=e.getIndices(p),h=c.length,y=!1;for(f=0;f<h;f++)c[f].h===u.h&&c[f].v===u.v&&(y=!0);y||c.push(u),s[o[0].toLowerCase()]||(s[o[0].toLowerCase()]=r[a++%r.length]);var g=document.createElement(l);g.appendChild(document.createTextNode(o[0])),g.style.backgroundColor=s[o[0].toLowerCase()],g.style.fontStyle="inherit",g.style.color="#000";var v=t.splitText(o.index);v.nodeValue=v.nodeValue.substring(o[0].length),t.parentNode.insertBefore(g,v)}}},this.remove=function(){for(var e,t=document.getElementsByTagName(l);t.length&&(e=t[0]);)e.parentNode.replaceChild(e.firstChild,e)},this.apply=function(e){if(null!=e&&e)return this.remove(),this.setRegex(e),this.hiliteWords(o),c}}return{id:"search",init:n=>{(e=n).registerKeyboardShortcut("CTRL + Shift + F","Search"),document.addEventListener("keydown",function(e){"F"==e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),t||s(),"inline"!==t.style.display?a():d())},!1)},open:a}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).RevealSearch=t();
//# sourceMappingURL=compilacion.reveal.2bbafb3e.js.map
