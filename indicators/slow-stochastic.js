/*
 Highstock JS v8.2.2 (2020-12-15)

 Slow Stochastic series type for Highstock

 (c) 2010-2019 Pawel Fus

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/indicators",["highcharts","highcharts/modules/stock"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,b,e,f){a.hasOwnProperty(b)||(a[b]=f.apply(null,e))}a=a?a._modules:{};b(a,"Mixins/IndicatorRequired.js",[a["Core/Utilities.js"]],function(a){var b=a.error;return{isParentLoaded:function(a,
f,h,g,k){if(a)return g?g(a):!0;b(k||this.generateMessage(h,f));return!1},generateMessage:function(a,b){return'Error: "'+a+'" indicator type requires "'+b+'" indicator loaded before. Please read docs: https://api.highcharts.com/highstock/plotOptions.'+a}}});b(a,"Stock/Indicators/SlowStochastic/SlowStochasticIndicator.js",[a["Core/Series/Series.js"],a["Mixins/IndicatorRequired.js"],a["Core/Utilities.js"]],function(a,b,e){var f=this&&this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||
{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d])};return a(b,c)};return function(b,c){function d(){this.constructor=b}a(b,c);b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}(),h=a.seriesTypes.stochastic,g=a.seriesTypes,k=e.extend,l=e.merge;e=function(a){function e(){var c=null!==a&&a.apply(this,arguments)||this;c.data=void 0;c.options=void 0;c.points=void 0;return c}f(e,a);e.prototype.init=function(){var a=
arguments,d=this;b.isParentLoaded(g.stochastic,"stochastic",d.type,function(c){c.prototype.init.apply(d,a)})};e.prototype.getValues=function(a,d){var b=d.periods,c=g.stochastic.prototype.getValues.call(this,a,d);a={values:[],xData:[],yData:[]};d=0;if(c){a.xData=c.xData.slice(b[1]-1);c=c.yData.slice(b[1]-1);var e=g.sma.prototype.getValues.call(this,{xData:a.xData,yData:c},{index:1,period:b[2]});if(e){for(var f=a.xData.length;d<f;d++)a.yData[d]=[c[d][1],e.yData[d-b[2]+1]||null],a.values[d]=[a.xData[d],
c[d][1],e.yData[d-b[2]+1]||null];return a}}};e.defaultOptions=l(h.defaultOptions,{params:{periods:[14,3,3]}});return e}(h);k(e.prototype,{nameBase:"Slow Stochastic"});a.registerSeriesType("slowstochastic",e);"";return e});b(a,"masters/indicators/slow-stochastic.src.js",[],function(){})});
//# sourceMappingURL=slow-stochastic.js.map