/*
 Highstock JS v8.2.2 (2020-12-15)

 Indicator series type for Highstock

 (c) 2010-2019 Wojciech Chmiel

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/ppo",["highcharts","highcharts/modules/stock"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,b,c,e){a.hasOwnProperty(b)||(a[b]=e.apply(null,c))}a=a?a._modules:{};b(a,"Mixins/IndicatorRequired.js",[a["Core/Utilities.js"]],function(a){var b=a.error;return{isParentLoaded:function(a,
e,g,l,h){if(a)return l?l(a):!0;b(h||this.generateMessage(g,e));return!1},generateMessage:function(a,b){return'Error: "'+a+'" indicator type requires "'+b+'" indicator loaded before. Please read docs: https://api.highcharts.com/highstock/plotOptions.'+a}}});b(a,"Stock/Indicators/PPO/PPOIndicator.js",[a["Core/Series/Series.js"],a["Mixins/IndicatorRequired.js"],a["Core/Utilities.js"]],function(a,b,c){var e=this&&this.__extends||function(){var a=function(b,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof
Array&&function(a,d){a.__proto__=d}||function(a,d){for(var b in d)d.hasOwnProperty(b)&&(a[b]=d[b])};return a(b,d)};return function(b,d){function k(){this.constructor=b}a(b,d);b.prototype=null===d?Object.create(d):(k.prototype=d.prototype,new k)}}(),g=a.seriesTypes.ema,l=c.correctFloat,h=c.extend,m=c.merge,n=c.error;c=function(a){function c(){var d=null!==a&&a.apply(this,arguments)||this;d.data=void 0;d.options=void 0;d.points=void 0;return d}e(c,a);c.prototype.init=function(){var a=arguments,c=this;
b.isParentLoaded(g,"ema",c.type,function(d){d.prototype.init.apply(c,a)})};c.prototype.getValues=function(a,b){var c=b.periods,d=b.index;b=[];var e=[],h=[],f;if(2!==c.length||c[1]<=c[0])n('Error: "PPO requires two periods. Notice, first period should be lower than the second one."');else{var k=g.prototype.getValues.call(this,a,{index:d,period:c[0]});a=g.prototype.getValues.call(this,a,{index:d,period:c[1]});if(k&&a){c=c[1]-c[0];for(f=0;f<a.yData.length;f++)d=l((k.yData[f+c]-a.yData[f])/a.yData[f]*
100),b.push([a.xData[f],d]),e.push(a.xData[f]),h.push(d);return{values:b,xData:e,yData:h}}}};c.defaultOptions=m(g.defaultOptions,{params:{periods:[12,26]}});return c}(g);h(c.prototype,{nameBase:"PPO",nameComponents:["periods"]});a.registerSeriesType("ppo",c);"";return c});b(a,"masters/indicators/ppo.src.js",[],function(){})});
//# sourceMappingURL=ppo.js.map