import{i as Ie,a as j,S as R,e as H,c as Q,b as we,d as ve,f as fe,m as Pe,p as Le,g as Me,h as ke,j as Z,k as Oe,C as Ne,l as pe,n as Te,_ as T,o as me,q as Re,R as q,r as O,s as E,t as $,P as ye,v as ee,w as te,x as Ee,y as Be,z as N,A as Ve,B as Fe,D as re,G as Ge,E as J,F as We,I as Ye,J as Ue,K as ze,L as Xe,M as je,N as He,O as Ze,Q as qe,T as $e}from"./index.4ef32864.js";var Je={average:function(a){for(var e=0,t=0,r=0;r<a.length;r++)isNaN(a[r])||(e+=a[r],t++);return t===0?NaN:e/t},sum:function(a){for(var e=0,t=0;t<a.length;t++)e+=a[t]||0;return e},max:function(a){for(var e=-1/0,t=0;t<a.length;t++)a[t]>e&&(e=a[t]);return isFinite(e)?e:NaN},min:function(a){for(var e=1/0,t=0;t<a.length;t++)a[t]<e&&(e=a[t]);return isFinite(e)?e:NaN},nearest:function(a){return a[0]}},Ke=function(a){return Math.round(a.length/2)};function Qe(a){return{seriesType:a,reset:function(e,t,r){var n=e.getData(),i=e.get("sampling"),s=e.coordinateSystem,l=n.count();if(l>10&&s.type==="cartesian2d"&&i){var o=s.getBaseAxis(),h=s.getOtherAxis(o),c=o.getExtent(),u=r.getDevicePixelRatio(),g=Math.abs(c[1]-c[0])*(u||1),d=Math.round(l/g);if(isFinite(d)&&d>1){i==="lttb"&&e.setData(n.lttbDownSample(n.mapDimension(h.dim),1/d));var v=void 0;Ie(i)?v=Je[i]:j(i)&&(v=i),v&&e.setData(n.downSample(n.mapDimension(h.dim),1/d,v,Ke))}}}}}var et=function(){function a(e){this.coordSysDims=[],this.axisMap=Q(),this.categoryAxisMap=Q(),this.coordSysName=e}return a}();function tt(a){var e=a.get("coordinateSystem"),t=new et(e),r=rt[e];if(r)return r(a,t,t.axisMap,t.categoryAxisMap),t}var rt={cartesian2d:function(a,e,t,r){var n=a.getReferringComponents("xAxis",R).models[0],i=a.getReferringComponents("yAxis",R).models[0];e.coordSysDims=["x","y"],t.set("x",n),t.set("y",i),k(n)&&(r.set("x",n),e.firstCategoryDimIndex=0),k(i)&&(r.set("y",i),e.firstCategoryDimIndex==null&&(e.firstCategoryDimIndex=1))},singleAxis:function(a,e,t,r){var n=a.getReferringComponents("singleAxis",R).models[0];e.coordSysDims=["single"],t.set("single",n),k(n)&&(r.set("single",n),e.firstCategoryDimIndex=0)},polar:function(a,e,t,r){var n=a.getReferringComponents("polar",R).models[0],i=n.findAxisModel("radiusAxis"),s=n.findAxisModel("angleAxis");e.coordSysDims=["radius","angle"],t.set("radius",i),t.set("angle",s),k(i)&&(r.set("radius",i),e.firstCategoryDimIndex=0),k(s)&&(r.set("angle",s),e.firstCategoryDimIndex==null&&(e.firstCategoryDimIndex=1))},geo:function(a,e,t,r){e.coordSysDims=["lng","lat"]},parallel:function(a,e,t,r){var n=a.ecModel,i=n.getComponent("parallel",a.get("parallelIndex")),s=e.coordSysDims=i.dimensions.slice();H(i.parallelAxisIndex,function(l,o){var h=n.getComponent("parallelAxis",l),c=s[o];t.set(c,h),k(h)&&(r.set(c,h),e.firstCategoryDimIndex==null&&(e.firstCategoryDimIndex=o))})}};function k(a){return a.get("type")==="category"}function at(a,e){var t=a.get("coordinateSystem"),r=Ne.get(t),n;return e&&e.coordSysDims&&(n=pe(e.coordSysDims,function(i){var s={name:i},l=e.axisMap.get(i);if(l){var o=l.get("type");s.type=Te(o)}return s})),n||(n=r&&(r.getDimensionsInfo?r.getDimensionsInfo():r.dimensions.slice())||["x","y"]),n}function nt(a,e,t){var r,n;return t&&H(a,function(i,s){var l=i.coordDim,o=t.categoryAxisMap.get(l);o&&(r==null&&(r=s),i.ordinalMeta=o.getOrdinalMeta(),e&&(i.createInvertedIndices=!0)),i.otherDims.itemName!=null&&(n=!0)}),!n&&r!=null&&(a[r].otherDims.itemName=0),r}function Ae(a,e,t){t=t||{};var r=e.getSourceManager(),n,i=!1;a?(i=!0,n=we(a)):(n=r.getSource(),i=n.sourceFormat===ve);var s=tt(e),l=at(e,s),o=t.useEncodeDefaulter,h=j(o)?o:o?fe(Pe,l,e):null,c={coordDimensions:l,generateCoord:t.generateCoord,encodeDefine:e.getEncode(),encodeDefaulter:h,canOmitUnusedDimensions:!i},u=Le(n,c),g=nt(u.dimensions,t.createInvertedIndices,s),d=i?null:r.getSharedDataStore(u),v=Me(e,{schema:u,store:d}),f=new ke(u,e);f.setCalculationInfo(v);var m=g!=null&&it(n)?function(A,S,x,y){return y===g?x:this.defaultDimValueGetter(A,S,x,y)}:null;return f.hasItemOption=!1,f.initData(i?n:d,null,m),f}function it(a){if(a.sourceFormat===ve){var e=st(a.data||[]);return!Z(Oe(e))}}function st(a){for(var e=0;e<a.length&&a[e]==null;)e++;return a[e]}var Se=function(a){T(e,a);function e(){var t=a!==null&&a.apply(this,arguments)||this;return t.type=e.type,t}return e.prototype.getInitialData=function(t,r){return Ae(null,this,{useEncodeDefaulter:!0})},e.prototype.getMarkerPosition=function(t){var r=this.coordinateSystem;if(r&&r.clampData){var n=r.dataToPoint(r.clampData(t)),i=this.getData(),s=i.getLayout("offset"),l=i.getLayout("size"),o=r.getBaseAxis().isHorizontal()?0:1;return n[o]+=s+l/2,n}return[NaN,NaN]},e.type="series.__base_bar__",e.defaultOption={z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,large:!1,largeThreshold:400,progressive:3e3,progressiveChunkMode:"mod"},e}(me);me.registerClass(Se);const ae=Se;var ot=function(a){T(e,a);function e(){var t=a!==null&&a.apply(this,arguments)||this;return t.type=e.type,t}return e.prototype.getInitialData=function(){return Ae(null,this,{useEncodeDefaulter:!0,createInvertedIndices:!!this.get("realtimeSort",!0)||null})},e.prototype.getProgressive=function(){return this.get("large")?this.get("progressive"):!1},e.prototype.getProgressiveThreshold=function(){var t=this.get("progressiveThreshold"),r=this.get("largeThreshold");return r>t&&(t=r),t},e.prototype.brushSelector=function(t,r,n){return n.rect(r.getItemLayout(t))},e.type="series.bar",e.dependencies=["grid","polar"],e.defaultOption=Re(ae.defaultOption,{clip:!0,roundCap:!1,showBackground:!1,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)",borderColor:null,borderWidth:0,borderType:"solid",borderRadius:0,shadowBlur:0,shadowColor:null,shadowOffsetX:0,shadowOffsetY:0,opacity:1},select:{itemStyle:{borderColor:"#212121"}},realtimeSort:!1}),e}(ae);const lt=ot;function ct(a,e,t,r,n){var i=a.getArea(),s=i.x,l=i.y,o=i.width,h=i.height,c=t.get(["lineStyle","width"])||2;s-=c/2,l-=c/2,o+=c,h+=c,s=Math.floor(s),o=Math.round(o);var u=new q({shape:{x:s,y:l,width:o,height:h}});if(e){var g=a.getBaseAxis(),d=g.isHorizontal(),v=g.inverse;d?(v&&(u.shape.x+=o),u.shape.width=0):(v||(u.shape.y+=h),u.shape.height=0);var f=j(n)?function(m){n(m,u)}:null;O(u,{shape:{width:o,height:h,x:s,y:l}},t,null,r,f)}return u}function ht(a,e,t){var r=a.getArea(),n=E(r.r0,1),i=E(r.r,1),s=new $({shape:{cx:E(a.cx,1),cy:E(a.cy,1),r0:n,r:i,startAngle:r.startAngle,endAngle:r.endAngle,clockwise:r.clockwise}});if(e){var l=a.getBaseAxis().dim==="angle";l?s.shape.endAngle=r.startAngle:s.shape.r=n,O(s,{shape:{endAngle:r.endAngle,r:i}},t)}return s}function ut(a,e,t,r,n){if(a){if(a.type==="polar")return ht(a,e,t);if(a.type==="cartesian2d")return ct(a,e,t,r,n)}else return null;return null}var dt=function(){function a(){this.cx=0,this.cy=0,this.r0=0,this.r=0,this.startAngle=0,this.endAngle=Math.PI*2,this.clockwise=!0}return a}(),gt=function(a){T(e,a);function e(t){var r=a.call(this,t)||this;return r.type="sausage",r}return e.prototype.getDefaultShape=function(){return new dt},e.prototype.buildPath=function(t,r){var n=r.cx,i=r.cy,s=Math.max(r.r0||0,0),l=Math.max(r.r,0),o=(l-s)*.5,h=s+o,c=r.startAngle,u=r.endAngle,g=r.clockwise,d=Math.PI*2,v=g?u-c<d:c-u<d;v||(c=u-(g?d:-d));var f=Math.cos(c),m=Math.sin(c),A=Math.cos(u),S=Math.sin(u);v?(t.moveTo(f*s+n,m*s+i),t.arc(f*h+n,m*h+i,o,-Math.PI+c,c,!g)):t.moveTo(f*l+n,m*l+i),t.arc(n,i,l,c,u,!g),t.arc(A*h+n,S*h+i,o,u-Math.PI*2,u-Math.PI,!g),s!==0&&t.arc(n,i,s,u,c,g)},e}(ye);const ne=gt;function xe(a,e){return a.type===e}function vt(a,e){var t=a.mapDimensionsAll("defaultedLabel"),r=t.length;if(r===1){var n=ee(a,e,t[0]);return n!=null?n+"":null}else if(r){for(var i=[],s=0;s<t.length;s++)i.push(ee(a,e,t[s]));return i.join(" ")}}function ft(a,e){var t=a.mapDimensionsAll("defaultedLabel");if(!Z(e))return e+"";for(var r=[],n=0;n<t.length;n++){var i=a.getDimensionIndex(t[n]);i>=0&&r.push(e[i])}return r.join(" ")}function pt(a,e){e=e||{};var t=e.isRoundCap;return function(r,n,i){var s=n.position;if(!s||s instanceof Array)return te(r,n,i);var l=a(s),o=n.distance!=null?n.distance:5,h=this.shape,c=h.cx,u=h.cy,g=h.r,d=h.r0,v=(g+d)/2,f=h.startAngle,m=h.endAngle,A=(f+m)/2,S=t?Math.abs(g-d)/2:0,x=Math.cos,y=Math.sin,_=c+g*x(f),I=u+g*y(f),w="left",P="top";switch(l){case"startArc":_=c+(d-o)*x(A),I=u+(d-o)*y(A),w="center",P="top";break;case"insideStartArc":_=c+(d+o)*x(A),I=u+(d+o)*y(A),w="center",P="bottom";break;case"startAngle":_=c+v*x(f)+B(f,o+S,!1),I=u+v*y(f)+V(f,o+S,!1),w="right",P="middle";break;case"insideStartAngle":_=c+v*x(f)+B(f,-o+S,!1),I=u+v*y(f)+V(f,-o+S,!1),w="left",P="middle";break;case"middle":_=c+v*x(A),I=u+v*y(A),w="center",P="middle";break;case"endArc":_=c+(g+o)*x(A),I=u+(g+o)*y(A),w="center",P="bottom";break;case"insideEndArc":_=c+(g-o)*x(A),I=u+(g-o)*y(A),w="center",P="top";break;case"endAngle":_=c+v*x(m)+B(m,o+S,!0),I=u+v*y(m)+V(m,o+S,!0),w="left",P="middle";break;case"insideEndAngle":_=c+v*x(m)+B(m,-o+S,!0),I=u+v*y(m)+V(m,-o+S,!0),w="right",P="middle";break;default:return te(r,n,i)}return r=r||{},r.x=_,r.y=I,r.align=w,r.verticalAlign=P,r}}function mt(a,e,t,r){if(Ee(r)){a.setTextConfig({rotation:r});return}else if(Z(e)){a.setTextConfig({rotation:0});return}var n=a.shape,i=n.clockwise?n.startAngle:n.endAngle,s=n.clockwise?n.endAngle:n.startAngle,l=(i+s)/2,o,h=t(e);switch(h){case"startArc":case"insideStartArc":case"middle":case"insideEndArc":case"endArc":o=l;break;case"startAngle":case"insideStartAngle":o=i;break;case"endAngle":case"insideEndAngle":o=s;break;default:a.setTextConfig({rotation:0});return}var c=Math.PI*1.5-o;h==="middle"&&c>Math.PI/2&&c<Math.PI*1.5&&(c-=Math.PI),a.setTextConfig({rotation:c})}function B(a,e,t){return e*Math.sin(a)*(t?-1:1)}function V(a,e,t){return e*Math.cos(a)*(t?1:-1)}var z=Math.max,X=Math.min;function yt(a,e){var t=a.getArea&&a.getArea();if(xe(a,"cartesian2d")){var r=a.getBaseAxis();if(r.type!=="category"||!r.onBand){var n=e.getLayout("bandWidth");r.isHorizontal()?(t.x-=n,t.width+=n*2):(t.y-=n,t.height+=n*2)}}return t}var At=function(a){T(e,a);function e(){var t=a.call(this)||this;return t.type=e.type,t._isFirstFrame=!0,t}return e.prototype.render=function(t,r,n,i){this._model=t,this._removeOnRenderedListener(n),this._updateDrawMode(t);var s=t.get("coordinateSystem");(s==="cartesian2d"||s==="polar")&&(this._progressiveEls=null,this._isLargeDraw?this._renderLarge(t,r,n):this._renderNormal(t,r,n,i))},e.prototype.incrementalPrepareRender=function(t){this._clear(),this._updateDrawMode(t),this._updateLargeClip(t)},e.prototype.incrementalRender=function(t,r){this._progressiveEls=[],this._incrementalRenderLarge(t,r)},e.prototype.eachRendered=function(t){Be(this._progressiveEls||this.group,t)},e.prototype._updateDrawMode=function(t){var r=t.pipelineContext.large;(this._isLargeDraw==null||r!==this._isLargeDraw)&&(this._isLargeDraw=r,this._clear())},e.prototype._renderNormal=function(t,r,n,i){var s=this.group,l=t.getData(),o=this._data,h=t.coordinateSystem,c=h.getBaseAxis(),u;h.type==="cartesian2d"?u=c.isHorizontal():h.type==="polar"&&(u=c.dim==="angle");var g=t.isAnimationEnabled()?t:null,d=St(t,h);d&&this._enableRealtimeSort(d,l,n);var v=t.get("clip",!0)||d,f=yt(h,l);s.removeClipPath();var m=t.get("roundCap",!0),A=t.get("showBackground",!0),S=t.getModel("backgroundStyle"),x=S.get("borderRadius")||0,y=[],_=this._backgroundEls,I=i&&i.isInitSort,w=i&&i.type==="changeAxisOrder";function P(p){var L=F[h.type](l,p),D=wt(h,u,L);return D.useStyle(S.getItemStyle()),h.type==="cartesian2d"&&D.setShape("r",x),y[p]=D,D}l.diff(o).add(function(p){var L=l.getItemModel(p),D=F[h.type](l,p,L);if(A&&P(p),!(!l.hasValue(p)||!ce[h.type](D))){var M=!1;v&&(M=ie[h.type](f,D));var b=se[h.type](t,l,p,D,u,g,c.model,!1,m);d&&(b.forceLabelAnimation=!0),he(b,l,p,L,D,t,u,h.type==="polar"),I?b.attr({shape:D}):d?oe(d,g,b,D,p,u,!1,!1):O(b,{shape:D},t,p),l.setItemGraphicEl(p,b),s.add(b),b.ignore=M}}).update(function(p,L){var D=l.getItemModel(p),M=F[h.type](l,p,D);if(A){var b=void 0;_.length===0?b=P(L):(b=_[L],b.useStyle(S.getItemStyle()),h.type==="cartesian2d"&&b.setShape("r",x),y[p]=b);var Ce=F[h.type](l,p),_e=be(u,Ce,h);N(b,{shape:_e},g,p)}var C=o.getItemGraphicEl(L);if(!l.hasValue(p)||!ce[h.type](M)){s.remove(C);return}var Y=!1;if(v&&(Y=ie[h.type](f,M),Y&&s.remove(C)),C?Ve(C):C=se[h.type](t,l,p,M,u,g,c.model,!!C,m),d&&(C.forceLabelAnimation=!0),w){var K=C.getTextContent();if(K){var U=Fe(K);U.prevValue!=null&&(U.prevValue=U.value)}}else he(C,l,p,D,M,t,u,h.type==="polar");I?C.attr({shape:M}):d?oe(d,g,C,M,p,u,!0,w):N(C,{shape:M},t,p,null),l.setItemGraphicEl(p,C),C.ignore=Y,s.add(C)}).remove(function(p){var L=o.getItemGraphicEl(p);L&&re(L,t,p)}).execute();var G=this._backgroundGroup||(this._backgroundGroup=new Ge);G.removeAll();for(var W=0;W<y.length;++W)G.add(y[W]);s.add(G),this._backgroundEls=y,this._data=l},e.prototype._renderLarge=function(t,r,n){this._clear(),de(t,this.group),this._updateLargeClip(t)},e.prototype._incrementalRenderLarge=function(t,r){this._removeBackground(),de(r,this.group,this._progressiveEls,!0)},e.prototype._updateLargeClip=function(t){var r=t.get("clip",!0)&&ut(t.coordinateSystem,!1,t),n=this.group;r?n.setClipPath(r):n.removeClipPath()},e.prototype._enableRealtimeSort=function(t,r,n){var i=this;if(!!r.count()){var s=t.baseAxis;if(this._isFirstFrame)this._dispatchInitSort(r,t,n),this._isFirstFrame=!1;else{var l=function(o){var h=r.getItemGraphicEl(o),c=h&&h.shape;return c&&Math.abs(s.isHorizontal()?c.height:c.width)||0};this._onRendered=function(){i._updateSortWithinSameData(r,l,s,n)},n.getZr().on("rendered",this._onRendered)}}},e.prototype._dataSort=function(t,r,n){var i=[];return t.each(t.mapDimension(r.dim),function(s,l){var o=n(l);o=o==null?NaN:o,i.push({dataIndex:l,mappedValue:o,ordinalNumber:s})}),i.sort(function(s,l){return l.mappedValue-s.mappedValue}),{ordinalNumbers:pe(i,function(s){return s.ordinalNumber})}},e.prototype._isOrderChangedWithinSameData=function(t,r,n){for(var i=n.scale,s=t.mapDimension(n.dim),l=Number.MAX_VALUE,o=0,h=i.getOrdinalMeta().categories.length;o<h;++o){var c=t.rawIndexOf(s,i.getRawOrdinalNumber(o)),u=c<0?Number.MIN_VALUE:r(t.indexOfRawIndex(c));if(u>l)return!0;l=u}return!1},e.prototype._isOrderDifferentInView=function(t,r){for(var n=r.scale,i=n.getExtent(),s=Math.max(0,i[0]),l=Math.min(i[1],n.getOrdinalMeta().categories.length-1);s<=l;++s)if(t.ordinalNumbers[s]!==n.getRawOrdinalNumber(s))return!0},e.prototype._updateSortWithinSameData=function(t,r,n,i){if(!!this._isOrderChangedWithinSameData(t,r,n)){var s=this._dataSort(t,n,r);this._isOrderDifferentInView(s,n)&&(this._removeOnRenderedListener(i),i.dispatchAction({type:"changeAxisOrder",componentType:n.dim+"Axis",axisId:n.index,sortInfo:s}))}},e.prototype._dispatchInitSort=function(t,r,n){var i=r.baseAxis,s=this._dataSort(t,i,function(l){return t.get(t.mapDimension(r.otherAxis.dim),l)});n.dispatchAction({type:"changeAxisOrder",componentType:i.dim+"Axis",isInitSort:!0,axisId:i.index,sortInfo:s})},e.prototype.remove=function(t,r){this._clear(this._model),this._removeOnRenderedListener(r)},e.prototype.dispose=function(t,r){this._removeOnRenderedListener(r)},e.prototype._removeOnRenderedListener=function(t){this._onRendered&&(t.getZr().off("rendered",this._onRendered),this._onRendered=null)},e.prototype._clear=function(t){var r=this.group,n=this._data;t&&t.isAnimationEnabled()&&n&&!this._isLargeDraw?(this._removeBackground(),this._backgroundEls=[],n.eachItemGraphicEl(function(i){re(i,t,J(i).dataIndex)})):r.removeAll(),this._data=null,this._isFirstFrame=!0},e.prototype._removeBackground=function(){this.group.remove(this._backgroundGroup),this._backgroundGroup=null},e.type="bar",e}(We),ie={cartesian2d:function(a,e){var t=e.width<0?-1:1,r=e.height<0?-1:1;t<0&&(e.x+=e.width,e.width=-e.width),r<0&&(e.y+=e.height,e.height=-e.height);var n=a.x+a.width,i=a.y+a.height,s=z(e.x,a.x),l=X(e.x+e.width,n),o=z(e.y,a.y),h=X(e.y+e.height,i),c=l<s,u=h<o;return e.x=c&&s>n?l:s,e.y=u&&o>i?h:o,e.width=c?0:l-s,e.height=u?0:h-o,t<0&&(e.x+=e.width,e.width=-e.width),r<0&&(e.y+=e.height,e.height=-e.height),c||u},polar:function(a,e){var t=e.r0<=e.r?1:-1;if(t<0){var r=e.r;e.r=e.r0,e.r0=r}var n=X(e.r,a.r),i=z(e.r0,a.r0);e.r=n,e.r0=i;var s=n-i<0;if(t<0){var r=e.r;e.r=e.r0,e.r0=r}return s}},se={cartesian2d:function(a,e,t,r,n,i,s,l,o){var h=new q({shape:Ye({},r),z2:1});if(h.__dataIndex=t,h.name="item",i){var c=h.shape,u=n?"height":"width";c[u]=0}return h},polar:function(a,e,t,r,n,i,s,l,o){var h=!n&&o?ne:$,c=new h({shape:r,z2:1});c.name="item";var u=De(n);if(c.calculateTextPosition=pt(u,{isRoundCap:h===ne}),i){var g=c.shape,d=n?"r":"endAngle",v={};g[d]=n?0:r.startAngle,v[d]=r[d],(l?N:O)(c,{shape:v},i)}return c}};function St(a,e){var t=a.get("realtimeSort",!0),r=e.getBaseAxis();if(t&&r.type==="category"&&e.type==="cartesian2d")return{baseAxis:r,otherAxis:e.getOtherAxis(r)}}function oe(a,e,t,r,n,i,s,l){var o,h;i?(h={x:r.x,width:r.width},o={y:r.y,height:r.height}):(h={y:r.y,height:r.height},o={x:r.x,width:r.width}),l||(s?N:O)(t,{shape:o},e,n,null);var c=e?a.baseAxis.model:null;(s?N:O)(t,{shape:h},c,n)}function le(a,e){for(var t=0;t<e.length;t++)if(!isFinite(a[e[t]]))return!0;return!1}var xt=["x","y","width","height"],Dt=["cx","cy","r","startAngle","endAngle"],ce={cartesian2d:function(a){return!le(a,xt)},polar:function(a){return!le(a,Dt)}},F={cartesian2d:function(a,e,t){var r=a.getItemLayout(e),n=t?Ct(t,r):0,i=r.width>0?1:-1,s=r.height>0?1:-1;return{x:r.x+i*n/2,y:r.y+s*n/2,width:r.width-i*n,height:r.height-s*n}},polar:function(a,e,t){var r=a.getItemLayout(e);return{cx:r.cx,cy:r.cy,r0:r.r0,r:r.r,startAngle:r.startAngle,endAngle:r.endAngle,clockwise:r.clockwise}}};function bt(a){return a.startAngle!=null&&a.endAngle!=null&&a.startAngle===a.endAngle}function De(a){return function(e){var t=e?"Arc":"Angle";return function(r){switch(r){case"start":case"insideStart":case"end":case"insideEnd":return r+t;default:return r}}}(a)}function he(a,e,t,r,n,i,s,l){var o=e.getItemVisual(t,"style");l||a.setShape("r",r.get(["itemStyle","borderRadius"])||0),a.useStyle(o);var h=r.getShallow("cursor");h&&a.attr("cursor",h);var c=l?s?n.r>=n.r0?"endArc":"startArc":n.endAngle>=n.startAngle?"endAngle":"startAngle":s?n.height>=0?"bottom":"top":n.width>=0?"right":"left",u=Ue(r);ze(a,u,{labelFetcher:i,labelDataIndex:t,defaultText:vt(i.getData(),t),inheritColor:o.fill,defaultOpacity:o.opacity,defaultOutsidePosition:c});var g=a.getTextContent();if(l&&g){var d=r.get(["label","position"]);a.textConfig.inside=d==="middle"?!0:null,mt(a,d==="outside"?c:d,De(s),r.get(["label","rotate"]))}Xe(g,u,i.getRawValue(t),function(f){return ft(e,f)});var v=r.getModel(["emphasis"]);je(a,v.get("focus"),v.get("blurScope"),v.get("disabled")),He(a,r),bt(n)&&(a.style.fill="none",a.style.stroke="none",H(a.states,function(f){f.style&&(f.style.fill=f.style.stroke="none")}))}function Ct(a,e){var t=a.get(["itemStyle","borderColor"]);if(!t||t==="none")return 0;var r=a.get(["itemStyle","borderWidth"])||0,n=isNaN(e.width)?Number.MAX_VALUE:Math.abs(e.width),i=isNaN(e.height)?Number.MAX_VALUE:Math.abs(e.height);return Math.min(r,n,i)}var _t=function(){function a(){}return a}(),ue=function(a){T(e,a);function e(t){var r=a.call(this,t)||this;return r.type="largeBar",r}return e.prototype.getDefaultShape=function(){return new _t},e.prototype.buildPath=function(t,r){for(var n=r.points,i=this.baseDimIdx,s=1-this.baseDimIdx,l=[],o=[],h=this.barWidth,c=0;c<n.length;c+=3)o[i]=h,o[s]=n[c+2],l[i]=n[c+i],l[s]=n[c+s],t.rect(l[0],l[1],o[0],o[1])},e}(ye);function de(a,e,t,r){var n=a.getData(),i=n.getLayout("valueAxisHorizontal")?1:0,s=n.getLayout("largeDataIndices"),l=n.getLayout("size"),o=a.getModel("backgroundStyle"),h=n.getLayout("largeBackgroundPoints");if(h){var c=new ue({shape:{points:h},incremental:!!r,silent:!0,z2:0});c.baseDimIdx=i,c.largeDataIndices=s,c.barWidth=l,c.useStyle(o.getItemStyle()),e.add(c),t&&t.push(c)}var u=new ue({shape:{points:n.getLayout("largePoints")},incremental:!!r,ignoreCoarsePointer:!0,z2:1});u.baseDimIdx=i,u.largeDataIndices=s,u.barWidth=l,e.add(u),u.useStyle(n.getVisual("style")),J(u).seriesIndex=a.seriesIndex,a.get("silent")||(u.on("mousedown",ge),u.on("mousemove",ge)),t&&t.push(u)}var ge=Ze(function(a){var e=this,t=It(e,a.offsetX,a.offsetY);J(e).dataIndex=t>=0?t:null},30,!1);function It(a,e,t){for(var r=a.baseDimIdx,n=1-r,i=a.shape.points,s=a.largeDataIndices,l=[],o=[],h=a.barWidth,c=0,u=i.length/3;c<u;c++){var g=c*3;if(o[r]=h,o[n]=i[g+2],l[r]=i[g+r],l[n]=i[g+n],o[n]<0&&(l[n]+=o[n],o[n]=-o[n]),e>=l[0]&&e<=l[0]+o[0]&&t>=l[1]&&t<=l[1]+o[1])return s[c]}return-1}function be(a,e,t){if(xe(t,"cartesian2d")){var r=e,n=t.getArea();return{x:a?r.x:n.x,y:a?n.y:r.y,width:a?r.width:n.width,height:a?n.height:r.height}}else{var n=t.getArea(),i=e;return{cx:n.cx,cy:n.cy,r0:a?n.r0:i.r0,r:a?n.r:i.r,startAngle:a?i.startAngle:0,endAngle:a?i.endAngle:Math.PI*2}}}function wt(a,e,t){var r=a.type==="polar"?$:q;return new r({shape:be(e,t,a),silent:!0,z2:0})}const Pt=At;function Mt(a){a.registerChartView(Pt),a.registerSeriesModel(lt),a.registerLayout(a.PRIORITY.VISUAL.LAYOUT,fe($e,"bar")),a.registerLayout(a.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT,qe("bar")),a.registerProcessor(a.PRIORITY.PROCESSOR.STATISTIC,Qe("bar")),a.registerAction({type:"changeAxisOrder",event:"changeAxisOrder",update:"update"},function(e,t){var r=e.componentType||"series";t.eachComponent({mainType:r,query:e},function(n){e.sortInfo&&n.axis.setCategorySortInfo(e.sortInfo)})})}export{ft as a,xe as b,Ae as c,ct as d,ht as e,Qe as f,vt as g,Mt as i};
