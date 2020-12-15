/*
 Highstock JS v8.2.2 (2020-12-15)

 Indicator series type for Highstock

 (c) 2010-2019 Rafa Sebestjaski

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/dema",["highcharts","highcharts/modules/stock"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,b,d,e){a.hasOwnProperty(b)||(a[b]=e.apply(null,d))}a=a?a._modules:{};b(a,"Mixins/IndicatorRequired.js",[a["Core/Utilities.js"]],function(a){var b=a.error;return{isParentLoaded:function(a,
e,h,k,m){if(a)return k?k(a):!0;b(m||this.generateMessage(h,e));return!1},generateMessage:function(a,b){return'Error: "'+a+'" indicator type requires "'+b+'" indicator loaded before. Please read docs: https://api.highcharts.com/highstock/plotOptions.'+a}}});b(a,"Stock/Indicators/DEMA/DEMAIndicator.js",[a["Core/Series/Series.js"],a["Mixins/IndicatorRequired.js"],a["Core/Utilities.js"]],function(a,b,d){var e=this&&this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof
Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return a(b,c)};return function(b,c){function f(){this.constructor=b}a(b,c);b.prototype=null===c?Object.create(c):(f.prototype=c.prototype,new f)}}(),h=a.seriesTypes.ema,k=d.correctFloat,m=d.isArray,n=d.merge;d=function(a){function d(){var c=null!==a&&a.apply(this,arguments)||this;c.EMApercent=void 0;c.data=void 0;c.options=void 0;c.points=void 0;return c}e(d,a);d.prototype.init=function(){var a=arguments,
f=this;b.isParentLoaded(h,"ema",f.type,function(c){c.prototype.init.apply(f,a)})};d.prototype.getEMA=function(a,b,d,e,k,y){return h.prototype.calculateEma(y||[],a,"undefined"===typeof k?1:k,this.EMApercent,b,"undefined"===typeof e?-1:e,d)};d.prototype.getValues=function(a,b){var c=b.period,d=2*c,e=a.xData,f=(a=a.yData)?a.length:0,p=-1,t=[],u=[],v=[],l=0,w=[],g;this.EMApercent=2/(c+1);if(!(f<2*c-1)){m(a[0])&&(p=b.index?b.index:0);b=h.prototype.accumulatePeriodPoints(c,p,a);var q=b/c;b=0;for(g=c;g<
f+2;g++){g<f+1&&(l=this.getEMA(a,n,q,p,g)[1],w.push(l));var n=l;if(g<d)b+=l;else{g===d&&(q=b/c);l=w[g-c-1];var x=this.getEMA([l],x,q)[1];var r=[e[g-2],k(2*l-x)];t.push(r);u.push(r[0]);v.push(r[1])}}return{values:t,xData:u,yData:v}}};d.defaultOptions=n(h.defaultOptions);return d}(h);a.registerSeriesType("dema",d);"";return d});b(a,"masters/indicators/dema.src.js",[],function(){})});
//# sourceMappingURL=dema.js.map