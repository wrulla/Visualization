(function(e,t){typeof define=="function"&&define.amd?define(["d3","./GMapLayered","./Lines","./Pins"],t):e.map_GMapPinLine=t(e.d3,e.map_GMapLayered,e.map_Lines,e.map_Pins)})(this,function(e,t,n,r){function i(e){t.call(this);var i=this;this._lines=new n,this._pins=(new r).columns(["lat","long","ext"]).on("click",function(e,t,n){i.click(e.ext.origRow,"",n)})}return i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.prototype._class+=" map_GMapPinLine",i.prototype.publish("fromPinColor","green","color","From Pin Color"),i.prototype.publish("fromLatitudeColumn",null,"set","From Latitude",function(){return this.columns()},{optional:!0}),i.prototype.publish("fromLongtitudeColumn",null,"set","From Longtitude",function(){return this.columns()},{optional:!0}),i.prototype.publish("fromColorColumn",null,"set","From Color",function(){return this.columns()},{optional:!0}),i.prototype.publish("fromTooltipColumn",null,"set","From Tooltip",function(){return this.columns()},{optional:!0}),i.prototype.publish("toPinColor","red","color","To Pin Color"),i.prototype.publish("toLatitudeColumn",null,"set","To Latitude",function(){return this.columns()},{optional:!0}),i.prototype.publish("toLongtitudeColumn",null,"set","To Longtitude",function(){return this.columns()},{optional:!0}),i.prototype.publish("toColorColumn",null,"set","To Color",function(){return this.columns()},{optional:!0}),i.prototype.publish("toTooltipColumn",null,"set","To Tooltip",function(){return this.columns()},{optional:!0}),i.prototype.pinsData=function(){var e=this.columns();this._fromView=this._db.rollupView([this.fromLatitudeColumn(),this.fromLongtitudeColumn()]),this._toView=this._db.rollupView([this.toLatitudeColumn(),this.toLongtitudeColumn()]);var t=this._fromView.entries().map(function(t){var n=t.values[0].values[0];return[t.key,t.values[0].key,{fillColor:n[e.indexOf(this.fromColorColumn())]||this.fromPinColor(),tooltip:n[e.indexOf(this.fromTooltipColumn())],origRow:n}]},this),n=this._toView.entries().map(function(t){var n=t.values[0].values[0];return[t.key,t.values[0].key,{fillColor:n[e.indexOf(this.toColorColumn())]||this.toPinColor(),tooltip:n[e.indexOf(this.toTooltipColumn())],origRow:n}]},this);return t.concat(n)},i.prototype.linesData=function(){return this._linesView=this._db.rollupView([this.fromLatitudeColumn(),this.fromLongtitudeColumn(),this.toLatitudeColumn(),this.toLongtitudeColumn()]),this._linesView.data()},i.prototype.enter=function(e,n){t.prototype.enter.apply(this,arguments),this.layers([this._lines,this._pins])},i.prototype.update=function(e,n){t.prototype.update.apply(this,arguments),this._pins.data(this.pinsData()),this._lines.data(this.linesData())},i.prototype.exit=function(e,n){t.prototype.exit.apply(this,arguments)},i.prototype.click=function(e,t,n){console.log("GMapPinLine-click:  ",e,t,n)},i});