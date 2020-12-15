/*
 Highstock JS v8.2.2 (2020-12-15)

 Indicator series type for Highstock

 (c) 2010-2019 Wojciech Chmiel

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/chaikin",["highcharts","highcharts/modules/stock"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,b,e,g){a.hasOwnProperty(b)||(a[b]=g.apply(null,e))}a=a?a._modules:{};b(a,"Mixins/IndicatorRequired.js",[a["Core/Utilities.js"]],function(a){var b=a.error;return{isParentLoaded:function(a,
g,f,l,h){if(a)return l?l(a):!0;b(h||this.generateMessage(f,g));return!1},generateMessage:function(a,b){return'Error: "'+a+'" indicator type requires "'+b+'" indicator loaded before. Please read docs: https://api.highcharts.com/highstock/plotOptions.'+a}}});b(a,"Stock/Indicators/Chaikin/ChaikinIndicator.js",[a["Core/Series/Series.js"],a["Mixins/IndicatorRequired.js"],a["Core/Utilities.js"]],function(a,b,e){var g=this&&this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof
Array&&function(a,c){a.__proto__=c}||function(a,c){for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d])};return a(b,c)};return function(b,c){function d(){this.constructor=b}a(b,c);b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}(),f=a.seriesTypes,l=f.ad,h=f.ema,m=e.correctFloat;f=e.extend;var n=e.merge,p=e.error;e=function(a){function e(){var c=null!==a&&a.apply(this,arguments)||this;c.data=void 0;c.options=void 0;c.points=void 0;return c}g(e,a);e.prototype.init=function(){var a=
arguments,d=this;b.isParentLoaded(h,"ema",d.type,function(c){c.prototype.init.apply(d,a)})};e.prototype.getValues=function(a,d){var b=d.periods,c=d.period,e=[],f=[],g=[],k;if(2!==b.length||b[1]<=b[0])p('Error: "Chaikin requires two periods. Notice, first period should be lower than the second one."');else if(d=l.prototype.getValues.call(this,a,{volumeSeriesID:d.volumeSeriesID,period:c}))if(a=h.prototype.getValues.call(this,d,{period:b[0]}),d=h.prototype.getValues.call(this,d,{period:b[1]}),a&&d){b=
b[1]-b[0];for(k=0;k<d.yData.length;k++)c=m(a.yData[k+b]-d.yData[k]),e.push([d.xData[k],c]),f.push(d.xData[k]),g.push(c);return{values:e,xData:f,yData:g}}};e.defaultOptions=n(h.defaultOptions,{params:{volumeSeriesID:"volume",periods:[3,10]}});return e}(h);f(e.prototype,{nameBase:"Chaikin Osc",nameComponents:["periods"]});a.registerSeriesType("chaikin",e);"";return e});b(a,"masters/indicators/chaikin.src.js",[],function(){})});
//# sourceMappingURL=chaikin.js.map