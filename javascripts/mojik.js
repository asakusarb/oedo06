/*!
 * Mojik v0.2.0 https://github.com/terkel/mojik
 * @author Takeru Suzuki http://terkel.jp/
 * @license MIT http://opensource.org/licenses/MIT
 */
!function(e,a){"object"==typeof module&&module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):e.Mojik=a()}(this,function(){function e(e,a,n){n=n||window;var t=!1,s=function(){t||(t=!0,requestAnimationFrame(function(){n.dispatchEvent(new CustomEvent(a)),t=!1}))};n.addEventListener(e,s)}function a(e,a){var n,t;if(a)for(n in a)void 0!==(t=a[n])&&(e[n]=t);return e}var n=n||{},t="classList"in document.documentElement&&"requestAnimationFrame"in window,s=/Android [1-5]\./.test(navigator.userAgent),r={supportOldAndroid:!1};return n.htmlClassPrefix="mjk-",n.htmlClass={punctuationSpacer:"punctuationSpacer",leadOpeningBracket:"leadOpeningBracket",leadOpeningBracket_atLineHead:"leadOpeningBracket-atLineHead",leadOpeningBracket_atParagraphHead:"leadOpeningBracket-atParagraphHead",leadOpeningBracketBefore:"leadOpeningBracketBefore",leadOpeningBracketBefore_atLineEnd:"leadOpeningBracketBefore-atLineEnd",western:"western",western_number:"western-number",western_noSpaceBefore:"western-noSpaceBefore",western_noSpaceAfter:"western-noSpaceAfter",western_atLineHead:"western-atLineHead",western_atParagraphHead:"western-atParagraphHead",western_atParagraphEnd:"western-atParagraphEnd",western_afterLineBreak:"western-afterLineBreak"},n.characters={japaneseOpeningBrackets:"\u300c\u300e\uff08\uff5f\uff3b\u301a\uff5b\u3014\u3018\u3008\u300a\u3010\u3016\u301d",japaneseClosingBrackets:"\u300d\u300f\uff09\uff60\uff3d\u301b\uff5d\u3015\u3019\u3009\u300b\u3011\u3017\u301e\u301f",japaneseDividingPunctuations:"\uff01\uff1f",japaneseMiddleDots:"\u30fb\uff1a\uff1b\u30a0",japaneseFullStops:"\u3002\uff0e",japaneseCommas:"\u3001\uff0c",japaneseFullWidthSpace:"\u3000",western:"\\u0000-\\u007F\\u0080-\\u00FF\\u0100-\\u017F\\u0180-\\u024F\\u2000-\\u206F\\u2070-\\u209F\\u20A0-\\u20CF\\u2100-\\u214F\\u2150-\\u218F",westernOpeningBrackets:"\u2018\u201c\\(\\[\\{<\xab\u2039",westernClosingBrackets:"\u2019\u201d)]}>\xbb\u203a",westernDashes:"\\u2012\\u2013\\u2014\\u2015\\u2053",westernHyphens:"\\u002D\\u2010\\u2011",westernEllipses:"\\u2025\\u2026"},n.ignoreTag="pre|code|kbd|samp",n.compose=function(i,c){if(c=a(r,c),t&&(!s||c.supportOldAndroid)){var p=document.querySelectorAll(i),l="<!--[\\s\\S]*?-->",o="<\\/?[^>]+?\\/?>",d=new RegExp(o),g=new RegExp(l+"|"+o+"|[^<>]+","gi"),u=new RegExp("^<("+n.ignoreTag+")[ >]","i"),h=new RegExp("["+n.characters.western+"]+","g"),f=new RegExp("["+n.characters.western+"]+$"),w=new RegExp("^["+n.characters.western+"]+"),B=n.characters.japaneseOpeningBrackets+n.characters.japaneseClosingBrackets+n.characters.japaneseMiddleDots+n.characters.japaneseFullStops+n.characters.japaneseCommas+n.characters.japaneseFullWidthSpace,k=new RegExp("["+B+"]$"),m=new RegExp("^["+B+"]"),j=new RegExp("["+n.characters.japaneseOpeningBrackets+"]","g"),L=[[n.characters.japaneseClosingBrackets,n.characters.japaneseOpeningBrackets+n.characters.japaneseClosingBrackets+n.characters.japaneseDividingPunctuations+n.characters.japaneseMiddleDots+n.characters.japaneseFullStops+n.characters.japaneseCommas+n.characters.japaneseFullWidthSpace],[n.characters.japaneseDividingPunctuations,n.characters.japaneseFullWidthSpace],[n.characters.japaneseMiddleDots,n.characters.japaneseOpeningBrackets],[n.characters.japaneseFullStops+n.characters.japaneseCommas,n.characters.japaneseOpeningBrackets+n.characters.japaneseClosingBrackets+n.characters.japaneseMiddleDots+n.characters.japaneseFullWidthSpace],[n.characters.japaneseFullWidthSpace,n.characters.japaneseOpeningBrackets]],S=function(){var e={};for(key in n.htmlClass)e[key]=n.htmlClassPrefix+n.htmlClass[key];return e}();Array.prototype.forEach.call(p,function(a){function t(){var e="static"===window.getComputedStyle(a).position,n=parseFloat(window.getComputedStyle(a).paddingLeft);Array.prototype.forEach.call(r,function(e){e.classList.remove(S.western_atLineHead,S.western_afterLineBreak,S.leadOpeningBracket_atLineHead,S.fullStopAndComma_atLineEnd,S.fullStopAndComma_hangingEnd),e.classList.contains(S.leadOpeningBracket)&&e.previousSibling.classList.remove(S.leadOpeningBracketBefore_atLineEnd)}),e&&(a.style.position="relative"),Array.prototype.forEach.call(r,function(e){var a,t;e.classList.contains(S.western)?(a=parseFloat(window.getComputedStyle(e).marginLeft),s(e.previousSibling)?e.classList.add(S.western_atLineHead,S.western_afterLineBreak):e.offsetLeft-a-n<1&&e.classList.add(S.western_atLineHead)):e.classList.contains(S.leadOpeningBracket)&&(t=e.previousSibling,s(t.previousSibling)?e.classList.add(S.leadOpeningBracket_atLineHead):e.offsetLeft-n<1&&(e.classList.add(S.leadOpeningBracket_atLineHead),t.classList.add(S.leadOpeningBracketBefore_atLineEnd)))}),e&&(a.style.position="")}function s(e){return e&&"BR"===e.nodeName&&"none"!==window.getComputedStyle(e).display}var r,i,c,p,B,E,O,_=a.innerHTML.match(g),v=[];for(E=0;E<_.length;E++)if(i=_[E].match(u))for(p=new RegExp("</"+i[1]+"\\s*>"),B=new RegExp("<"+i[1]+"(?:\\s*|\\s+[^>]+)>"),c=1,O=E+1;O<_.length;O++)if(p.test(_[O])){if(0===--c){E=O;break}}else B.test(_[O])&&c++;else new RegExp(l+"|"+o+"|^\\s+$").test(_[E])||(v.push(_[E]),_[E]=_[E].replace(h,function(e,a){var n,t,s,r,i=a+e.length,c=/^\d([\d.,\/]*\d)?$/.test(e),p=0===a&&1===v.length,l="",o="",g=/^(\s+)(\S*)/.exec(e),u=/(\S*)(\s+)$/.exec(e);if(p){if(g){if(!g[2])return e;l=g[1],e=e.slice(l.length)}}else(/^\s/.test(e)||a>0&&k.test(_[E].slice(0,a))||0===a&&v.length>1&&(k.test(v[v.length-2])||f.test(v[v.length-2])))&&(t=!0);if(_[E].length===i)if(E===_.length-1)n=!0;else for(r=E+1;r<_.length;r++){if(!d.test(_[r])&&!/^\s+$/.test(_[r])){(m.test(_[r])||w.test(_[r]))&&(s=!0);break}r===_.length-1&&(n=!0)}if(n){if(u){if(!u[1])return e;o=u[2],e=e.slice(0,-o.length)}}else s||!/\s$/.test(e)&&!m.test(_[E].slice(i))||(s=!0);return l+'<span class="'+S.western+(c?" "+S.western_number:"")+(p?" "+S.western_atParagraphHead:"")+(n?" "+S.western_atParagraphEnd:"")+(t?" "+S.western_noSpaceBefore:"")+(s?" "+S.western_noSpaceAfter:"")+'">'+e+"</span>"+o}),_[E]=_[E].replace(j,function(e,a){var t=0===a?new RegExp("["+n.characters.japaneseOpeningBrackets+"]$").exec(v[v.length-2]):a>0?new RegExp("["+n.characters.japaneseOpeningBrackets+"]").exec(_[E].charAt(a-1)):null;return t?'<span class="'+S.punctuationSpacer+'" data-mjk-punc-pair="'+t[0]+e+'"></span>'+e:1!==v.length||0!==a&&!/^\s+$/.test(_[E].slice(0,a))?"<span class="+S.leadOpeningBracketBefore+"></span><span class="+S.leadOpeningBracket+">"+e+"</span>":'<span class="'+S.leadOpeningBracket+" "+S.leadOpeningBracket_atParagraphHead+'">'+e+"</span>"}),L.forEach(function(e){var a=new RegExp("["+e[0]+"]","g"),n=new RegExp("^(?:"+o+")*(["+e[1]+"])");_[E]=_[E].replace(a,function(e,a){var t,s=e,r="";if(a+e.length===_[E].length){for(t=E+1;t<_.length;t++)if(!d.test(_[t])){r=_[t];break}}else r=_[E].slice(a+1);return r&&n.test(r)&&(s+='<span class="'+S.punctuationSpacer+'"></span>'),s})}));a.innerHTML=_.join(""),r=a.querySelectorAll("."+S.leadOpeningBracket+":not(."+S.leadOpeningBracket_atParagraphHead+"),."+S.western+":not(."+S.western_atParagraphHead+"):not(."+S.western_noSpaceBefore+")"),t(),e("resize","optimizedResize"),window.addEventListener("optimizedResize",t)})}},n});