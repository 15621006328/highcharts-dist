/*
 Highcharts JS v8.2.2 (2020-12-15)

 Pareto series type for Highcharts

 (c) 2010-2019 Sebastian Bochan

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/pareto",["highcharts"],function(d){a(d);a.Highcharts=d;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function d(a,b,c,f){a.hasOwnProperty(b)||(a[b]=f.apply(null,c))}a=a?a._modules:{};d(a,"Mixins/DerivedSeries.js",[a["Core/Globals.js"],a["Series/Line/LineSeries.js"],a["Core/Utilities.js"]],function(a,b,c){var f=c.addEvent,
d=c.defined;return{hasDerivedData:!0,init:function(){b.prototype.init.apply(this,arguments);this.initialised=!1;this.baseSeries=null;this.eventRemovers=[];this.addEvents()},setDerivedData:a.noop,setBaseSeries:function(){var a=this.chart,b=this.options.baseSeries;this.baseSeries=d(b)&&(a.series[b]||a.get(b))||null},addEvents:function(){var a=this;var b=f(this.chart,"afterLinkSeries",function(){a.setBaseSeries();a.baseSeries&&!a.initialised&&(a.setDerivedData(),a.addBaseSeriesEvents(),a.initialised=
!0)});this.eventRemovers.push(b)},addBaseSeriesEvents:function(){var a=this;var b=f(a.baseSeries,"updatedData",function(){a.setDerivedData()});var c=f(a.baseSeries,"destroy",function(){a.baseSeries=null;a.initialised=!1});a.eventRemovers.push(b,c)},destroy:function(){this.eventRemovers.forEach(function(a){a()});b.prototype.destroy.apply(this,arguments)}}});d(a,"Series/ParetoSeries/ParetoSeries.js",[a["Core/Series/Series.js"],a["Mixins/DerivedSeries.js"],a["Core/Utilities.js"]],function(a,b,c){var d=
this&&this.__extends||function(){var a=function(b,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e])};return a(b,e)};return function(b,e){function c(){this.constructor=b}a(b,e);b.prototype=null===e?Object.create(e):(c.prototype=e.prototype,new c)}}(),h=a.seriesTypes.line,l=c.correctFloat,m=c.merge;c=c.extend;var g=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;
b.points=void 0;b.options=void 0;return b}d(b,a);b.prototype.sumPointsPercents=function(a,b,c,d){var e=0,f=0,g=[],k;a.forEach(function(a,h){null!==a&&(d?e+=a:(k=a/c*100,g.push([b[h],l(f+k)]),f+=k))});return d?e:g};b.prototype.setDerivedData=function(){var a=this.baseSeries.xData,b=this.baseSeries.yData,c=this.sumPointsPercents(b,a,null,!0);this.setData(this.sumPointsPercents(b,a,c,!1),!1)};b.defaultOptions=m(h.defaultOptions,{zIndex:3});return b}(h);c(g.prototype,{addBaseSeriesEvents:b.addBaseSeriesEvents,
addEvents:b.addEvents,destroy:b.destroy,hasDerivedData:b.hasDerivedData,init:b.init,setBaseSeries:b.setBaseSeries});a.registerSeriesType("pareto",g);"";return g});d(a,"masters/modules/pareto.src.js",[],function(){})});
//# sourceMappingURL=pareto.js.map