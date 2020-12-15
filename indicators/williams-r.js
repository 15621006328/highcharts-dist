/*
 Highstock JS v8.2.2 (2020-12-15)

 Indicator series type for Highstock

 (c) 2010-2019 Wojciech Chmiel

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/williams-r",["highcharts","highcharts/modules/stock"],function(c){a(c);a.Highcharts=c;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function c(a,b,d,g){a.hasOwnProperty(b)||(a[b]=g.apply(null,d))}a=a?a._modules:{};c(a,"Mixins/ReduceArray.js",[],function(){return{minInArray:function(a,b){return a.reduce(function(a,
g){return Math.min(a,g[b])},Number.MAX_VALUE)},maxInArray:function(a,b){return a.reduce(function(a,g){return Math.max(a,g[b])},-Number.MAX_VALUE)},getArrayExtremes:function(a,b,d){return a.reduce(function(a,c){return[Math.min(a[0],c[b]),Math.max(a[1],c[d])]},[Number.MAX_VALUE,-Number.MAX_VALUE])}}});c(a,"Stock/Indicators/WilliamsR/WilliamsRIndicator.js",[a["Core/Series/Series.js"],a["Mixins/ReduceArray.js"],a["Core/Utilities.js"]],function(a,b,d){var c=this&&this.__extends||function(){var a=function(b,
e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,e){a.__proto__=e}||function(a,e){for(var b in e)e.hasOwnProperty(b)&&(a[b]=e[b])};return a(b,e)};return function(b,e){function c(){this.constructor=b}a(b,e);b.prototype=null===e?Object.create(e):(c.prototype=e.prototype,new c)}}(),k=a.seriesTypes.sma,n=b.getArrayExtremes;b=d.extend;var p=d.isArray,m=d.merge;d=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.options=void 0;b.points=void 0;return b}
c(b,a);b.prototype.getValues=function(a,b){b=b.period;var c=a.xData,e=(a=a.yData)?a.length:0,d=[],g=[],k=[],f;if(!(c.length<b)&&p(a[0])&&4===a[0].length){for(f=b-1;f<e;f++){var h=a.slice(f-b+1,f+1);var l=n(h,2,1);h=l[0];l=l[1];var m=a[f][3];h=(l-m)/(l-h)*-100;c[f]&&(d.push([c[f],h]),g.push(c[f]),k.push(h))}return{values:d,xData:g,yData:k}}};b.defaultOptions=m(k.defaultOptions,{params:{period:14}});return b}(k);b(d.prototype,{nameBase:"Williams %R"});a.registerSeriesType("williamsr",d);"";return d});
c(a,"masters/indicators/williams-r.src.js",[],function(){})});
//# sourceMappingURL=williams-r.js.map