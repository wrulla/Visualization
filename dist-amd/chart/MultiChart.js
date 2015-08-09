(function(e,t){typeof define=="function"&&define.amd?define(["d3","../common/SVGWidget","../api/INDChart","require"],t):e.chart_MultiChart=t(e.d3,e.common_SVGWidget,e.api_INDChart,e.require)})(this,function(e,t,n,r){function a(){t.call(this),n.call(this),this.chart(null),this._2dChartTypes=i,this._multiChartTypes=s,this._anyChartTypes=o,this._allChartTypes=u,this._allCharts={},this._allChartTypes.forEach(function(e){var t=JSON.parse(JSON.stringify(e));t.widget=null,this._allCharts[e.id]=t,this._allCharts[e.display]=t,this._allCharts[e.widgetClass]=t},this),this._allCharts.BAR=this._allCharts.COLUMN}var i=[{id:"BUBBLE",display:"Bubble",widgetClass:"chart_Bubble"},{id:"PIE",display:"Pie",widgetClass:"chart_Pie"},{id:"GOOGLE_PIE",display:"Pie (Google)",widgetClass:"google_Pie"},{id:"C3_DONUT",display:"Donut (C3)",widgetClass:"c3chart_Donut"},{id:"C3_PIE",display:"Pie (C3)",widgetClass:"c3chart_Pie"},{id:"AM_FUNNEL",display:"Area (amCharts)",widgetClass:"amchart_Funnel"},{id:"AM_PIE",display:"Pie (amCharts)",widgetClass:"amchart_Pie"},{id:"AM_PYRAMID",display:"Area (amCharts)",widgetClass:"amchart_Pyramid"},{id:"WORD_CLOUD",display:"Word Cloud",widgetClass:"other_WordCloud"}],s=[{id:"COLUMN",display:"Column",widgetClass:"chart_Column"},{id:"LINE",display:"Line",widgetClass:"chart_Line"},{id:"AREA",display:"Area",widgetClass:"chart_Area"},{id:"STEP",display:"Step",widgetClass:"chart_Step"},{id:"GOOGLE_BAR",display:"Bar (Google)",widgetClass:"google_Bar"},{id:"GOOGLE_COLUMN",display:"Column (Google)",widgetClass:"google_Column"},{id:"GOOGLE_LINE",display:"Line (Google)",widgetClass:"google_Line"},{id:"C3_AREA",display:"Area (C3)",widgetClass:"c3chart_Area"},{id:"C3_BAR",display:"Bar (C3)",widgetClass:"c3chart_Bar"},{id:"C3_COLUMN",display:"Column (C3)",widgetClass:"c3chart_Column"},{id:"C3_LINE",display:"Line (C3)",widgetClass:"c3chart_Line"},{id:"C3_SCATTER",display:"Scatter (C3)",widgetClass:"c3chart_Scatter"},{id:"C3_STEP",display:"Step (C3)",widgetClass:"c3chart_Step"},{id:"AM_AREA",display:"Area (amCharts)",widgetClass:"amchart_Area"},{id:"AM_BAR",display:"Bar (amCharts)",widgetClass:"amchart_Bar"},{id:"AM_LINE",display:"Line (amCharts)",widgetClass:"amchart_Line"}],o=[{id:"TABLE",display:"Table",widgetClass:"other_Table"}],u=i.concat(s.concat(o));return a.prototype=Object.create(t.prototype),a.prototype._class+=" chart_MultiChart",a.prototype.implements(n.prototype),a.prototype.publish("chartType","BUBBLE","set","Chart Type",u.map(function(e){return e.id}),{tags:["Basic"]}),a.prototype.publish("chart",null,"widget","Chart",null,{tags:["Basic"]}),a.prototype.columns=function(e){var n=t.prototype.columns.apply(this,arguments);return arguments.length&&this.chart()&&this.chart().columns(e),n},a.prototype.data=function(e){var n=t.prototype.data.apply(this,arguments);return arguments.length&&this.chart()&&this.chart().data(e),n},a.prototype.hasOverlay=function(){return this.chart()&&this.chart().hasOverlay()},a.prototype.visible=function(e){return arguments.length?(this.chart()&&this.chart().visible(e),this):this.chart()&&this.chart().visible()},a.prototype.requireContent=function(e,t){var n=this._allCharts[e].widget;if(n){t(n);return}var i=this,s="src/"+this._allCharts[e].widgetClass.split("_").join("/");r([s],function(r){n=new r,i._allCharts[e].widget=n,t(n)})},a.prototype.switchChart=function(e){var t=this.chart(),n=this;this.requireContent(this.chartType(),function(r){if(r!==t){var i=n.size();r.columns(n._columns).data(n._data).size(i),n.chart(r),r.click=function(e,t){n.click(e,t)},t&&t.data([]).size({width:1,height:1}).render()}e&&e(this)})},a.prototype.update=function(e,n){t.prototype.update.apply(this,arguments);var r=n.selectAll(".multiChart").data(this.chart()?[this.chart()]:[],function(e){return e._id});r.enter().append("g").attr("class","multiChart").each(function(e){e.target(this)});var i=this.size();r.each(function(e){e.size(i).render()}),r.exit().transition().each(function(e){e.target(null)}).remove()},a.prototype.exit=function(e,n){this.chart()&&this.chart().target(null),t.prototype.exit.apply(this,arguments)},a.prototype.render=function(e){if(this.chartType()&&(!this.chart()||this.chart().classID()!==this._allCharts[this.chartType()].widgetClass)){var n=this,r=arguments;return this.switchChart(function(){t.prototype.render.apply(n,r)}),this}return t.prototype.render.apply(this,arguments)},a});