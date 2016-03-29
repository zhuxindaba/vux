!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxSwiper=e():t.vuxSwiper=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){t.exports=i(5)},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(2),r=n(o);e["default"]={ready:function(){this.list&&0===this.list.length||this.render()},methods:{buildBackgroundUrl:function(t){return"url("+t+")"},render:function(){var t=this;this.swiper=new r["default"]({container:t.$el,direction:t.direction,auto:t.auto,interval:t.interval,threshold:t.threshold,duration:t.duration,height:t.height}).on("swiped",function(e,i){t.current=i})},destroy:function(){this.swiper&&this.swiper.destroy()}},props:{list:{type:Array,required:!1},direction:{type:String,"default":"horizontal"},show_dots:{type:Boolean,"default":!0},auto:{type:Boolean,"default":!1},interval:{type:Number,"default":3e3},threshold:{type:Number,"default":50},duration:{type:Number,"default":300},height:{type:Number,"default":180}},data:function(){return{current:0}},watch:{list:function(t){this.destroy(),this.render()}},beforeDestroy:function(){this.destroy()}}},function(t,e){"use strict";function i(t){return this.version="1.0.1",this._default={container:".swiper",item:".item",direction:"vertical",activeClass:"active",threshold:50,duration:300,auto:!1,interval:3e3,height:"auto"},this._options=n(this._default,t),this._start={},this._move={},this._end={},this._prev=0,this._current=0,this._offset=0,this._goto=-1,this._eventHandlers={},this.$box=this._options.container,this.$container=this._options.container.querySelector(".swiper"),this.$items=this.$container.querySelectorAll(this._options.item),this.count=this.$items.length,this._width=this.$container.offsetWidth,this._height="auto"===this._options.height?this.$container.offsetHeight:this._options.height,this.timer=null,this._auto(),this._init(),this._bind(),this}function n(t,e){for(var i in e)t[i]=e[i];return t}function o(){}Object.defineProperty(e,"__esModule",{value:!0}),i.prototype._auto=function(){var t=this;this._options.auto&&(t.timer=setTimeout(function(){t.next()},t._options.interval))},i.prototype.stop=function(){clearTimeout(this.timer)},i.prototype._init=function(){var t=this,e=t._width,i=t._height,n=e,o=i*t.count;"horizontal"===t._options.direction&&(n=e*t.count,o=i),"vertical"===t._options.direction&&(o=i*t.count,t.$box.style.height=i+"px"),t.$container.style.width=n+"px",t.$container.style.height=o+"px",Array.prototype.forEach.call(t.$items,function(t,n){t.style.width=e+"px",t.style.height=i+"px"}),t._activate(0)},i.prototype._bind=function(){var t=this;this.touchstartHandler=function(e){t.stop(),t._start.x=e.changedTouches[0].pageX,t._start.y=e.changedTouches[0].pageY,t.$container.style["-webkit-transition"]="none",t.$container.style.transition="none"},this.touchmoveHandler=function(e){t._move.x=e.changedTouches[0].pageX,t._move.y=e.changedTouches[0].pageY;var i=t._move.y-t._start.y,n="translate3d(0, "+(i-t._offset)+"px, 0)";"horizontal"===t._options.direction&&(i=t._move.x-t._start.x,n="translate3d("+(i-t._offset)+"px, 0, 0)"),t.$container.style["-webkit-transform"]=n,t.$container.style.transform=n,e.preventDefault()},this.touchendHandler=function(e){t._end.x=e.changedTouches[0].pageX,t._end.y=e.changedTouches[0].pageY;var i=t._end.y-t._start.y;"horizontal"===t._options.direction&&(i=t._end.x-t._start.x),t._prev=t._current,i>t._options.threshold?t._current=0===t._current?0:--t._current:i<-t._options.threshold&&(t._current=t._current<t.count-1?++t._current:t._current),t._show(t._current)},this.$container.addEventListener("touchstart",this.touchstartHandler,!1),this.$container.addEventListener("touchmove",this.touchmoveHandler,!1),this.$container.addEventListener("touchend",this.touchendHandler,!1),this.$container.addEventListener("transitionEnd",function(t){},!1),this.$container.addEventListener("webkitTransitionEnd",function(e){if(e.target!==t.$container)return!1;if(t._current!==t._prev||t._goto>-1){t._activate(t._current);var i=t._eventHandlers.swiped||o;i.apply(t,[t._prev,t._current]),t._goto=-1}t._options.auto&&t._auto(),e.preventDefault()},!1)},i.prototype._show=function(t){this._offset=t*this._height;var e="translate3d(0, -"+this._offset+"px, 0)";"horizontal"===this._options.direction&&(this._offset=t*this._width,e="translate3d(-"+this._offset+"px, 0, 0)");var i=this._options.duration+"ms";this.$container.style["-webkit-transition"]=i,this.$container.style.transition=i,this.$container.style["-webkit-transform"]=e,this.$container.style.transform=e},i.prototype._activate=function(t){var e=this._options.activeClass;Array.prototype.forEach.call(this.$items,function(i,n){i.classList.remove(e),t===n&&i.classList.add(e)})},i.prototype.go=function(t){return 0>t||t>this.count-1||t===this._current?void 0:(0===t?(this._current=0,this._prev=0):(this._current=t,this._prev=t-1),this._goto=t,this._show(this._current),this)},i.prototype.next=function(){return this._current>=this.count-1?(this._current=0,this._show(0),this):(this._prev=this._current,this._show(++this._current),this)},i.prototype.on=function(t,e){return this._eventHandlers[t]&&console.error("event "+t+" is already register"),"function"!=typeof e&&console.error("parameter callback must be a function"),this._eventHandlers[t]=e,this},i.prototype.destroy=function(){this.timer&&clearTimeout(this.timer),this.$container.removeEventListener("touchstart",this.touchstartHandler,!1),this.$container.removeEventListener("touchmove",this.touchmoveHandler,!1),this.$container.removeEventListener("touchend",this.touchendHandler,!1)},e["default"]=i},function(t,e){},function(t,e){t.exports='<div class=slider> <div class=swiper :style="{height:height+\'px\'}"> <slot></slot> <div class=item v-for="item in list"> <a :href=item.url> <div class=img :style="{backgroundImage:buildBackgroundUrl(item.img) }"></div> <p class=desc>{{item.title}}</p> </a> </div> </div> <div class=indicator v-show=show_dots> <a href=javascript: v-for="(index, item) in list"> <i class=icon_dot :class="{\'active\':index === current}"></i> </a> </div> </div>'},function(t,e,i){var n,o;i(3),n=i(1),o=i(4),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)}])});