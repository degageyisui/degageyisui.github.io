!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):e.hanabi=r()}(this,function(){"use strict";var e,o=(function(e){var r=e.exports=function(){return new RegExp("(?:"+r.line().source+")|(?:"+r.block().source+")","gm")};r.line=function(){return/(?:^|\s)\/\/(.+?)$/gm},r.block=function(){return/\/\*([\S\s]*?)\*\//gm}}(e={exports:{}},e.exports),e.exports),a=["23AC69","91C132","F19726","E8552D","1AAB8E","E1147F","2980C1","1BA1E6","9FA0A0","F19726","E30B20","E30B20","A3338B"];return function(e,r){void 0===r&&(r={});var i=r.colors;void 0===i&&(i=a);var s=0,t={},n=new RegExp("("+/[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/.source+"|"+/</.source+")|("+o().source+")","gmi");return e.replace(n,function(e,r,n){if(n)return'<span style="color: slategray">'+n+"</span>";var o;if("<"===r)return"&lt;";t[r]?o=t[r]:(o=i[s],t[r]=o);var a='<span style="color: #'+o+'">'+r+"</span>";return s=++s%i.length,a})}});var HanabiBrowser={ref:{colors:["23AC69","91C132","F19726","E8552D","1AAB8E","E1147F","2980C1","1BA1E6","9FA0A0","F19726","E30B20","E30B20","A3338B"],lineNumber:!0},default:{defaultColors:["23AC69","91C132","F19726","E8552D","1AAB8E","E1147F","2980C1","1BA1E6","9FA0A0","F19726","E30B20","E30B20","A3338B"]},start:function(e,r){HanabiBrowser.ref.lineNumber=r,$(e||"code").each(function(e,r){var n=hanabi($(r).html().replace(new RegExp("&lt;","g"),"<").replace(new RegExp("&gt;","g"),">"),HanabiBrowser.ref);n=n.substring(0,n.length-1).replace(new RegExp("\n","g"),"<br>").replace(new RegExp("  ","g"),"&nbsp&nbsp");var o=0,a=[];n.split("<br>").forEach(function(e){HanabiBrowser.ref.lineNumber?a.push('<span style="width: 30px; display: inline-block" class="hanabi-linenumber">'+(++o).toString()+"</span>"+e):a.push('<span style="width: 30px; display: none" class="hanabi-linenumber">'+(++o).toString()+"</span>"+e)}),n=a.join("<br>"),$(r).html(n)})},setLinenumber:function(e){HanabiBrowser.ref.lineNumber=e,HanabiBrowser.ref.lineNumber?$(".hanabi-linenumber").css("display","inline-block"):$(".hanabi-linenumber").css("display","none")},toggleLinenumber:function(){HanabiBrowser.ref.lineNumber=!HanabiBrowser.ref.lineNumber,HanabiBrowser.setLinenumber(HanabiBrowser.ref.lineNumber)},putColor:function(e){"string"==typeof e?HanabiBrowser.ref.colors.push(e):HanabiBrowser.ref.colors=HanabiBrowser.ref.colors.concat(e)},defaultColors:function(){HanabiBrowser.ref.colors=HanabiBrowser.default.defaultColors},clearColors:function(){HanabiBrowser.ref.colors=[]}};