/*
 Highstock JS v8.2.2 (2020-12-15)

 Indicator series type for Highstock

 (c) 2010-2019 Wojciech Chmiel

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/apo",["highcharts","highcharts/modules/stock"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,b,d,e){a.hasOwnProperty(b)||(a[b]=e.apply(null,d))}a=a?a._modules:{};b(a,"Mixins/IndicatorRequired.js",[a["Core/Utilities.js"]],function(a){var b=a.error;return{isParentLoaded:function(a,
e,f,g,l){if(a)return g?g(a):!0;b(l||this.generateMessage(f,e));return!1},generateMessage:function(a,b){return'Error: "'+a+'" indicator type requires "'+b+'" indicator loaded before. Please read docs: https://api.highcharts.com/highstock/plotOptions.'+a}}});b(a,"Stock/Indicators/APO/APOIndicator.js",[a["Core/Series/Series.js"],a["Mixins/IndicatorRequired.js"],a["Core/Utilities.js"]],function(a,b,d){var e=this&&this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof
Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return a(b,c)};return function(b,c){function k(){this.constructor=b}a(b,c);b.prototype=null===c?Object.create(c):(k.prototype=c.prototype,new k)}}(),f=a.seriesTypes.ema,g=d.extend,l=d.merge,m=d.error;d=function(a){function d(){var c=null!==a&&a.apply(this,arguments)||this;c.data=void 0;c.options=void 0;c.points=void 0;return c}e(d,a);d.prototype.getValues=function(a,b){var c=b.periods,d=b.index;b=[];
var e=[],k=[],h;if(2!==c.length||c[1]<=c[0])m('Error: "APO requires two periods. Notice, first period should be lower than the second one."');else{var g=f.prototype.getValues.call(this,a,{index:d,period:c[0]});a=f.prototype.getValues.call(this,a,{index:d,period:c[1]});if(g&&a){c=c[1]-c[0];for(h=0;h<a.yData.length;h++)d=g.yData[h+c]-a.yData[h],b.push([a.xData[h],d]),e.push(a.xData[h]),k.push(d);return{values:b,xData:e,yData:k}}}};d.prototype.init=function(){var a=arguments,d=this;b.isParentLoaded(f,
"ema",d.type,function(b){b.prototype.init.apply(d,a)})};d.defaultOptions=l(f.defaultOptions,{params:{periods:[10,20]}});return d}(f);g(d.prototype,{nameBase:"APO",nameComponents:["periods"]});a.registerSeriesType("apo",d);"";return d});b(a,"masters/indicators/apo.src.js",[],function(){})});
//# sourceMappingURL=apo.js.map