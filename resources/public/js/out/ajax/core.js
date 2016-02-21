// Compiled by ClojureScript 1.7.122 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('ajax.xml_http_request');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('clojure.string');
goog.require('goog.json.Serializer');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
ajax.core.process_response = (function ajax$core$process_response(response,interceptor){

return ajax.protocols._process_response.call(null,interceptor,response);
});
ajax.core.process_request = (function ajax$core$process_request(request,interceptor){

return ajax.protocols._process_request.call(null,interceptor,request);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5219__auto__,k__5220__auto__){
var self__ = this;
var this__5219__auto____$1 = this;
return cljs.core._lookup.call(null,this__5219__auto____$1,k__5220__auto__,null);
});

ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5221__auto__,k6421,else__5222__auto__){
var self__ = this;
var this__5221__auto____$1 = this;
var G__6423 = (((k6421 instanceof cljs.core.Keyword))?k6421.fqn:null);
switch (G__6423) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k6421,else__5222__auto__);

}
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__6424,opts){
var self__ = this;
var map__6425 = p__6424;
var map__6425__$1 = ((((!((map__6425 == null)))?((((map__6425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6425):map__6425);
var request__$1 = cljs.core.get.call(null,map__6425__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__6427 = this;
var map__6427__$1 = ((((!((map__6427 == null)))?((((map__6427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6427):map__6427);
var request__$2 = cljs.core.get.call(null,map__6427__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__6429,xhrio){
var self__ = this;
var map__6430 = p__6429;
var map__6430__$1 = ((((!((map__6430 == null)))?((((map__6430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6430):map__6430);
var response__$1 = cljs.core.get.call(null,map__6430__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__6432 = this;
var map__6432__$1 = ((((!((map__6432 == null)))?((((map__6432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6432):map__6432);
var response__$2 = cljs.core.get.call(null,map__6432__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.core.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5233__auto__,writer__5234__auto__,opts__5235__auto__){
var self__ = this;
var this__5233__auto____$1 = this;
var pr_pair__5236__auto__ = ((function (this__5233__auto____$1){
return (function (keyval__5237__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5234__auto__,cljs.core.pr_writer,""," ","",opts__5235__auto__,keyval__5237__auto__);
});})(this__5233__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5234__auto__,pr_pair__5236__auto__,"#ajax.core.StandardInterceptor{",", ","}",opts__5235__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$ = true;

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6420){
var self__ = this;
var G__6420__$1 = this;
return (new cljs.core.RecordIter((0),G__6420__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5217__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
return self__.__meta;
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5213__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5223__auto__){
var self__ = this;
var this__5223__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5214__auto__){
var self__ = this;
var this__5214__auto____$1 = this;
var h__5040__auto__ = self__.__hash;
if(!((h__5040__auto__ == null))){
return h__5040__auto__;
} else {
var h__5040__auto____$1 = cljs.core.hash_imap.call(null,this__5214__auto____$1);
self__.__hash = h__5040__auto____$1;

return h__5040__auto____$1;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5215__auto__,other__5216__auto__){
var self__ = this;
var this__5215__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4593__auto__ = other__5216__auto__;
if(cljs.core.truth_(and__4593__auto__)){
var and__4593__auto____$1 = (this__5215__auto____$1.constructor === other__5216__auto__.constructor);
if(and__4593__auto____$1){
return cljs.core.equiv_map.call(null,this__5215__auto____$1,other__5216__auto__);
} else {
return and__4593__auto____$1;
}
} else {
return and__4593__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5228__auto__,k__5229__auto__){
var self__ = this;
var this__5228__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__5229__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5228__auto____$1),self__.__meta),k__5229__auto__);
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5229__auto__)),null));
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5226__auto__,k__5227__auto__,G__6420){
var self__ = this;
var this__5226__auto____$1 = this;
var pred__6434 = cljs.core.keyword_identical_QMARK_;
var expr__6435 = k__5227__auto__;
if(cljs.core.truth_(pred__6434.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__6435))){
return (new ajax.core.StandardInterceptor(G__6420,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__6434.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__6435))){
return (new ajax.core.StandardInterceptor(self__.name,G__6420,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__6434.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__6435))){
return (new ajax.core.StandardInterceptor(self__.name,self__.request,G__6420,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5227__auto__,G__6420),null));
}
}
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5231__auto__){
var self__ = this;
var this__5231__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5218__auto__,G__6420){
var self__ = this;
var this__5218__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,G__6420,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5224__auto__,entry__5225__auto__){
var self__ = this;
var this__5224__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5225__auto__)){
return cljs.core._assoc.call(null,this__5224__auto____$1,cljs.core._nth.call(null,entry__5225__auto__,(0)),cljs.core._nth.call(null,entry__5225__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5224__auto____$1,entry__5225__auto__);
}
});

ajax.core.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.core.StandardInterceptor.cljs$lang$type = true;

ajax.core.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__5253__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/StandardInterceptor");
});

ajax.core.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__5253__auto__,writer__5254__auto__){
return cljs.core._write.call(null,writer__5254__auto__,"ajax.core/StandardInterceptor");
});

ajax.core.__GT_StandardInterceptor = (function ajax$core$__GT_StandardInterceptor(name,request,response){
return (new ajax.core.StandardInterceptor(name,request,response,null,null,null));
});

ajax.core.map__GT_StandardInterceptor = (function ajax$core$map__GT_StandardInterceptor(G__6422){
return (new ajax.core.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__6422),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__6422),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__6422),null,cljs.core.dissoc.call(null,G__6422,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)),null));
});

ajax.core.to_interceptor = (function ajax$core$to_interceptor(m){
return ajax.core.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.core.get_content_type = (function ajax$core$get_content_type(response){
var or__4605__auto__ = ajax.protocols._get_response_header.call(null,response,"Content-Type");
if(cljs.core.truth_(or__4605__auto__)){
return or__4605__auto__;
} else {
return "";
}
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.protocols._abort.call(null,this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.exception_message = (function ajax$core$exception_message(e){
return e.message;
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__6438,xhrio){
var map__6441 = p__6438;
var map__6441__$1 = ((((!((map__6441 == null)))?((((map__6441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6441):map__6441);
var description = cljs.core.get.call(null,map__6441__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(ajax.core.exception_message.call(null,e)),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.core.fail = (function ajax$core$fail(var_args){
var args__5670__auto__ = [];
var len__5663__auto___6447 = arguments.length;
var i__5664__auto___6448 = (0);
while(true){
if((i__5664__auto___6448 < len__5663__auto___6447)){
args__5670__auto__.push((arguments[i__5664__auto___6448]));

var G__6449 = (i__5664__auto___6448 + (1));
i__5664__auto___6448 = G__6449;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((3) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((3)),(0))):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5671__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq6443){
var G__6444 = cljs.core.first.call(null,seq6443);
var seq6443__$1 = cljs.core.next.call(null,seq6443);
var G__6445 = cljs.core.first.call(null,seq6443__$1);
var seq6443__$2 = cljs.core.next.call(null,seq6443__$1);
var G__6446 = cljs.core.first.call(null,seq6443__$2);
var seq6443__$3 = cljs.core.next.call(null,seq6443__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__6444,G__6445,G__6446,seq6443__$3);
});
ajax.core.content_type_to_request_header = (function ajax$core$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",cljs.core.map.call(null,(function (p1__6450_SHARP_){
return [cljs.core.str(p1__6450_SHARP_),cljs.core.str("; charset=utf-8")].join('');
}),((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5219__auto__,k__5220__auto__){
var self__ = this;
var this__5219__auto____$1 = this;
return cljs.core._lookup.call(null,this__5219__auto____$1,k__5220__auto__,null);
});

ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5221__auto__,k6453,else__5222__auto__){
var self__ = this;
var this__5221__auto____$1 = this;
var G__6455 = (((k6453 instanceof cljs.core.Keyword))?k6453.fqn:null);
switch (G__6455) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k6453,else__5222__auto__);

}
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__6456,request){
var self__ = this;
var map__6457 = p__6456;
var map__6457__$1 = ((((!((map__6457 == null)))?((((map__6457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6457):map__6457);
var content_type__$1 = cljs.core.get.call(null,map__6457__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__6459 = this;
var map__6459__$1 = ((((!((map__6459 == null)))?((((map__6459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6459):map__6459);
var content_type__$2 = cljs.core.get.call(null,map__6459__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__6459,map__6459__$1,content_type__$2,map__6457,map__6457__$1,content_type__$1){
return (function (p1__6451_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.core.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__4605__auto__ = p1__6451_SHARP_;
if(cljs.core.truth_(or__4605__auto__)){
return or__4605__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__6459,map__6459__$1,content_type__$2,map__6457,map__6457__$1,content_type__$1))
);
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__6461,xhrio){
var self__ = this;
var map__6462 = p__6461;
var map__6462__$1 = ((((!((map__6462 == null)))?((((map__6462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6462):map__6462);
var format = map__6462__$1;
var read__$1 = cljs.core.get.call(null,map__6462__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__6464 = this;
var map__6464__$1 = ((((!((map__6464 == null)))?((((map__6464.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6464.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6464):map__6464);
var format__$1 = map__6464__$1;
var read__$2 = cljs.core.get.call(null,map__6464__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
var G__6467 = status;
switch (G__6467) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e6468){if((e6468 instanceof Object)){
var e = e6468;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e6468;

}
}
}
}catch (e6466){if((e6466 instanceof Object)){
var e = e6466;
var message = e.message;
return ajax.core.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e6466;

}
}});

ajax.core.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5233__auto__,writer__5234__auto__,opts__5235__auto__){
var self__ = this;
var this__5233__auto____$1 = this;
var pr_pair__5236__auto__ = ((function (this__5233__auto____$1){
return (function (keyval__5237__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5234__auto__,cljs.core.pr_writer,""," ","",opts__5235__auto__,keyval__5237__auto__);
});})(this__5233__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5234__auto__,pr_pair__5236__auto__,"#ajax.core.ResponseFormat{",", ","}",opts__5235__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6452){
var self__ = this;
var G__6452__$1 = this;
return (new cljs.core.RecordIter((0),G__6452__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5217__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
return self__.__meta;
});

ajax.core.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5213__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5223__auto__){
var self__ = this;
var this__5223__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5214__auto__){
var self__ = this;
var this__5214__auto____$1 = this;
var h__5040__auto__ = self__.__hash;
if(!((h__5040__auto__ == null))){
return h__5040__auto__;
} else {
var h__5040__auto____$1 = cljs.core.hash_imap.call(null,this__5214__auto____$1);
self__.__hash = h__5040__auto____$1;

return h__5040__auto____$1;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5215__auto__,other__5216__auto__){
var self__ = this;
var this__5215__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4593__auto__ = other__5216__auto__;
if(cljs.core.truth_(and__4593__auto__)){
var and__4593__auto____$1 = (this__5215__auto____$1.constructor === other__5216__auto__.constructor);
if(and__4593__auto____$1){
return cljs.core.equiv_map.call(null,this__5215__auto____$1,other__5216__auto__);
} else {
return and__4593__auto____$1;
}
} else {
return and__4593__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5228__auto__,k__5229__auto__){
var self__ = this;
var this__5228__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__5229__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5228__auto____$1),self__.__meta),k__5229__auto__);
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5229__auto__)),null));
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5226__auto__,k__5227__auto__,G__6452){
var self__ = this;
var this__5226__auto____$1 = this;
var pred__6469 = cljs.core.keyword_identical_QMARK_;
var expr__6470 = k__5227__auto__;
if(cljs.core.truth_(pred__6469.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__6470))){
return (new ajax.core.ResponseFormat(G__6452,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__6469.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__6470))){
return (new ajax.core.ResponseFormat(self__.read,G__6452,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__6469.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__6470))){
return (new ajax.core.ResponseFormat(self__.read,self__.description,G__6452,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5227__auto__,G__6452),null));
}
}
}
});

ajax.core.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5231__auto__){
var self__ = this;
var this__5231__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5218__auto__,G__6452){
var self__ = this;
var this__5218__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,G__6452,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5224__auto__,entry__5225__auto__){
var self__ = this;
var this__5224__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5225__auto__)){
return cljs.core._assoc.call(null,this__5224__auto____$1,cljs.core._nth.call(null,entry__5225__auto__,(0)),cljs.core._nth.call(null,entry__5225__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5224__auto____$1,entry__5225__auto__);
}
});

ajax.core.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.core.ResponseFormat.cljs$lang$type = true;

ajax.core.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__5253__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ResponseFormat");
});

ajax.core.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__5253__auto__,writer__5254__auto__){
return cljs.core._write.call(null,writer__5254__auto__,"ajax.core/ResponseFormat");
});

ajax.core.__GT_ResponseFormat = (function ajax$core$__GT_ResponseFormat(read,description,content_type){
return (new ajax.core.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.core.map__GT_ResponseFormat = (function ajax$core$map__GT_ResponseFormat(G__6454){
return (new ajax.core.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__6454),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__6454),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__6454),null,cljs.core.dissoc.call(null,G__6454,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)),null));
});

ajax.core.params_to_str_old = (function ajax$core$params_to_str_old(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.param_to_str;
ajax.core.vec_param_to_str = (function ajax$core$vec_param_to_str(var_args){
var args6474 = [];
var len__5663__auto___6477 = arguments.length;
var i__5664__auto___6478 = (0);
while(true){
if((i__5664__auto___6478 < len__5663__auto___6477)){
args6474.push((arguments[i__5664__auto___6478]));

var G__6479 = (i__5664__auto___6478 + (1));
i__5664__auto___6478 = G__6479;
continue;
} else {
}
break;
}

var G__6476 = args6474.length;
switch (G__6476) {
case 3:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6474.length)].join('')));

}
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3 = (function (prefix,key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,key){
return (function (value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$lang$maxFixedArity = 3;
ajax.core.param_to_str = (function ajax$core$param_to_str(var_args){
var args6481 = [];
var len__5663__auto___6488 = arguments.length;
var i__5664__auto___6489 = (0);
while(true){
if((i__5664__auto___6489 < len__5663__auto___6488)){
args6481.push((arguments[i__5664__auto___6489]));

var G__6490 = (i__5664__auto___6489 + (1));
i__5664__auto___6489 = G__6490;
continue;
} else {
}
break;
}

var G__6483 = args6481.length;
switch (G__6483) {
case 2:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6481.length)].join('')));

}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,p__6484){
var vec__6485 = p__6484;
var key = cljs.core.nth.call(null,vec__6485,(0),null);
var value = cljs.core.nth.call(null,vec__6485,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (p__6486){
var vec__6487 = p__6486;
var key = cljs.core.nth.call(null,vec__6487,(0),null);
var value = cljs.core.nth.call(null,vec__6487,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});
});

ajax.core.param_to_str.cljs$lang$maxFixedArity = 2;
ajax.core.to_utf8_writer = (function ajax$core$to_utf8_writer(to_str){
return to_str;
});
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__6494){
var vec__6495 = p__6494;
var k = cljs.core.nth.call(null,vec__6495,(0),null);
var v = cljs.core.nth.call(null,vec__6495,(1),null);
return [cljs.core.str(k),cljs.core.str("="),cljs.core.str(v)].join('');
}),cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,null),cljs.core.seq.call(null,params))));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(ajax.core.params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5219__auto__,k__5220__auto__){
var self__ = this;
var this__5219__auto____$1 = this;
return cljs.core._lookup.call(null,this__5219__auto____$1,k__5220__auto__,null);
});

ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5221__auto__,k6498,else__5222__auto__){
var self__ = this;
var this__5221__auto____$1 = this;
var G__6500 = k6498;
switch (G__6500) {
default:
return cljs.core.get.call(null,self__.__extmap,k6498,else__5222__auto__);

}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__6501){
var self__ = this;
var map__6502 = p__6501;
var map__6502__$1 = ((((!((map__6502 == null)))?((((map__6502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6502):map__6502);
var request = map__6502__$1;
var method = cljs.core.get.call(null,map__6502__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),((function (___$1,map__6502,map__6502__$1,request,method){
return (function (p1__6496_SHARP_){
return ajax.core.uri_with_params.call(null,p1__6496_SHARP_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(request));
});})(___$1,map__6502,map__6502__$1,request,method))
));
} else {
return request;
}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5233__auto__,writer__5234__auto__,opts__5235__auto__){
var self__ = this;
var this__5233__auto____$1 = this;
var pr_pair__5236__auto__ = ((function (this__5233__auto____$1){
return (function (keyval__5237__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5234__auto__,cljs.core.pr_writer,""," ","",opts__5235__auto__,keyval__5237__auto__);
});})(this__5233__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5234__auto__,pr_pair__5236__auto__,"#ajax.core.ProcessGet{",", ","}",opts__5235__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IIterable$ = true;

ajax.core.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6497){
var self__ = this;
var G__6497__$1 = this;
return (new cljs.core.RecordIter((0),G__6497__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5217__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
return self__.__meta;
});

ajax.core.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5213__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5223__auto__){
var self__ = this;
var this__5223__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5214__auto__){
var self__ = this;
var this__5214__auto____$1 = this;
var h__5040__auto__ = self__.__hash;
if(!((h__5040__auto__ == null))){
return h__5040__auto__;
} else {
var h__5040__auto____$1 = cljs.core.hash_imap.call(null,this__5214__auto____$1);
self__.__hash = h__5040__auto____$1;

return h__5040__auto____$1;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5215__auto__,other__5216__auto__){
var self__ = this;
var this__5215__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4593__auto__ = other__5216__auto__;
if(cljs.core.truth_(and__4593__auto__)){
var and__4593__auto____$1 = (this__5215__auto____$1.constructor === other__5216__auto__.constructor);
if(and__4593__auto____$1){
return cljs.core.equiv_map.call(null,this__5215__auto____$1,other__5216__auto__);
} else {
return and__4593__auto____$1;
}
} else {
return and__4593__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5228__auto__,k__5229__auto__){
var self__ = this;
var this__5228__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__5229__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5228__auto____$1),self__.__meta),k__5229__auto__);
} else {
return (new ajax.core.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5229__auto__)),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5226__auto__,k__5227__auto__,G__6497){
var self__ = this;
var this__5226__auto____$1 = this;
var pred__6504 = cljs.core.keyword_identical_QMARK_;
var expr__6505 = k__5227__auto__;
return (new ajax.core.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5227__auto__,G__6497),null));
});

ajax.core.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5231__auto__){
var self__ = this;
var this__5231__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5218__auto__,G__6497){
var self__ = this;
var this__5218__auto____$1 = this;
return (new ajax.core.ProcessGet(G__6497,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5224__auto__,entry__5225__auto__){
var self__ = this;
var this__5224__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5225__auto__)){
return cljs.core._assoc.call(null,this__5224__auto____$1,cljs.core._nth.call(null,entry__5225__auto__,(0)),cljs.core._nth.call(null,entry__5225__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5224__auto____$1,entry__5225__auto__);
}
});

ajax.core.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ProcessGet.cljs$lang$type = true;

ajax.core.ProcessGet.cljs$lang$ctorPrSeq = (function (this__5253__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ProcessGet");
});

ajax.core.ProcessGet.cljs$lang$ctorPrWriter = (function (this__5253__auto__,writer__5254__auto__){
return cljs.core._write.call(null,writer__5254__auto__,"ajax.core/ProcessGet");
});

ajax.core.__GT_ProcessGet = (function ajax$core$__GT_ProcessGet(){
return (new ajax.core.ProcessGet(null,null,null));
});

ajax.core.map__GT_ProcessGet = (function ajax$core$map__GT_ProcessGet(G__6499){
return (new ajax.core.ProcessGet(null,cljs.core.dissoc.call(null,G__6499),null));
});

ajax.core.throw_error = (function ajax$core$throw_error(args){
throw (new Error([cljs.core.str(args)].join('')));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5219__auto__,k__5220__auto__){
var self__ = this;
var this__5219__auto____$1 = this;
return cljs.core._lookup.call(null,this__5219__auto____$1,k__5220__auto__,null);
});

ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5221__auto__,k6509,else__5222__auto__){
var self__ = this;
var this__5221__auto____$1 = this;
var G__6511 = k6509;
switch (G__6511) {
default:
return cljs.core.get.call(null,self__.__extmap,k6509,else__5222__auto__);

}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__6512){
var self__ = this;
var map__6513 = p__6512;
var map__6513__$1 = ((((!((map__6513 == null)))?((((map__6513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6513):map__6513);
var request = map__6513__$1;
var body = cljs.core.get.call(null,map__6513__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var params = cljs.core.get.call(null,map__6513__$1,new cljs.core.Keyword(null,"params","params",710516235));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5233__auto__,writer__5234__auto__,opts__5235__auto__){
var self__ = this;
var this__5233__auto____$1 = this;
var pr_pair__5236__auto__ = ((function (this__5233__auto____$1){
return (function (keyval__5237__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5234__auto__,cljs.core.pr_writer,""," ","",opts__5235__auto__,keyval__5237__auto__);
});})(this__5233__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5234__auto__,pr_pair__5236__auto__,"#ajax.core.DirectSubmission{",", ","}",opts__5235__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$ = true;

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6508){
var self__ = this;
var G__6508__$1 = this;
return (new cljs.core.RecordIter((0),G__6508__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5217__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
return self__.__meta;
});

ajax.core.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5213__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
return (new ajax.core.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5223__auto__){
var self__ = this;
var this__5223__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5214__auto__){
var self__ = this;
var this__5214__auto____$1 = this;
var h__5040__auto__ = self__.__hash;
if(!((h__5040__auto__ == null))){
return h__5040__auto__;
} else {
var h__5040__auto____$1 = cljs.core.hash_imap.call(null,this__5214__auto____$1);
self__.__hash = h__5040__auto____$1;

return h__5040__auto____$1;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5215__auto__,other__5216__auto__){
var self__ = this;
var this__5215__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4593__auto__ = other__5216__auto__;
if(cljs.core.truth_(and__4593__auto__)){
var and__4593__auto____$1 = (this__5215__auto____$1.constructor === other__5216__auto__.constructor);
if(and__4593__auto____$1){
return cljs.core.equiv_map.call(null,this__5215__auto____$1,other__5216__auto__);
} else {
return and__4593__auto____$1;
}
} else {
return and__4593__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5228__auto__,k__5229__auto__){
var self__ = this;
var this__5228__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__5229__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5228__auto____$1),self__.__meta),k__5229__auto__);
} else {
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5229__auto__)),null));
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5226__auto__,k__5227__auto__,G__6508){
var self__ = this;
var this__5226__auto____$1 = this;
var pred__6515 = cljs.core.keyword_identical_QMARK_;
var expr__6516 = k__5227__auto__;
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5227__auto__,G__6508),null));
});

ajax.core.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5231__auto__){
var self__ = this;
var this__5231__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5218__auto__,G__6508){
var self__ = this;
var this__5218__auto____$1 = this;
return (new ajax.core.DirectSubmission(G__6508,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5224__auto__,entry__5225__auto__){
var self__ = this;
var this__5224__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5225__auto__)){
return cljs.core._assoc.call(null,this__5224__auto____$1,cljs.core._nth.call(null,entry__5225__auto__,(0)),cljs.core._nth.call(null,entry__5225__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5224__auto____$1,entry__5225__auto__);
}
});

ajax.core.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.DirectSubmission.cljs$lang$type = true;

ajax.core.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__5253__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/DirectSubmission");
});

ajax.core.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__5253__auto__,writer__5254__auto__){
return cljs.core._write.call(null,writer__5254__auto__,"ajax.core/DirectSubmission");
});

ajax.core.__GT_DirectSubmission = (function ajax$core$__GT_DirectSubmission(){
return (new ajax.core.DirectSubmission(null,null,null));
});

ajax.core.map__GT_DirectSubmission = (function ajax$core$map__GT_DirectSubmission(G__6510){
return (new ajax.core.DirectSubmission(null,cljs.core.dissoc.call(null,G__6510),null));
});

ajax.core.apply_request_format = (function ajax$core$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5219__auto__,k__5220__auto__){
var self__ = this;
var this__5219__auto____$1 = this;
return cljs.core._lookup.call(null,this__5219__auto____$1,k__5220__auto__,null);
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5221__auto__,k6520,else__5222__auto__){
var self__ = this;
var this__5221__auto____$1 = this;
var G__6522 = k6520;
switch (G__6522) {
default:
return cljs.core.get.call(null,self__.__extmap,k6520,else__5222__auto__);

}
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__6523){
var self__ = this;
var map__6524 = p__6523;
var map__6524__$1 = ((((!((map__6524 == null)))?((((map__6524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6524):map__6524);
var request = map__6524__$1;
var uri = cljs.core.get.call(null,map__6524__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__6524__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__6524__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__6524__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__6524__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__6526 = ajax.core.get_request_format.call(null,format);
var map__6526__$1 = ((((!((map__6526 == null)))?((((map__6526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6526):map__6526);
var write = cljs.core.get.call(null,map__6526__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__6526__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.core.apply_request_format.call(null,write,params):ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__4605__auto__ = headers;
if(cljs.core.truth_(or__4605__auto__)){
return or__4605__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.core.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5233__auto__,writer__5234__auto__,opts__5235__auto__){
var self__ = this;
var this__5233__auto____$1 = this;
var pr_pair__5236__auto__ = ((function (this__5233__auto____$1){
return (function (keyval__5237__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5234__auto__,cljs.core.pr_writer,""," ","",opts__5235__auto__,keyval__5237__auto__);
});})(this__5233__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5234__auto__,pr_pair__5236__auto__,"#ajax.core.ApplyRequestFormat{",", ","}",opts__5235__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6519){
var self__ = this;
var G__6519__$1 = this;
return (new cljs.core.RecordIter((0),G__6519__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5217__auto__){
var self__ = this;
var this__5217__auto____$1 = this;
return self__.__meta;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5213__auto__){
var self__ = this;
var this__5213__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5223__auto__){
var self__ = this;
var this__5223__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5214__auto__){
var self__ = this;
var this__5214__auto____$1 = this;
var h__5040__auto__ = self__.__hash;
if(!((h__5040__auto__ == null))){
return h__5040__auto__;
} else {
var h__5040__auto____$1 = cljs.core.hash_imap.call(null,this__5214__auto____$1);
self__.__hash = h__5040__auto____$1;

return h__5040__auto____$1;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5215__auto__,other__5216__auto__){
var self__ = this;
var this__5215__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4593__auto__ = other__5216__auto__;
if(cljs.core.truth_(and__4593__auto__)){
var and__4593__auto____$1 = (this__5215__auto____$1.constructor === other__5216__auto__.constructor);
if(and__4593__auto____$1){
return cljs.core.equiv_map.call(null,this__5215__auto____$1,other__5216__auto__);
} else {
return and__4593__auto____$1;
}
} else {
return and__4593__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5228__auto__,k__5229__auto__){
var self__ = this;
var this__5228__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__5229__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5228__auto____$1),self__.__meta),k__5229__auto__);
} else {
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5229__auto__)),null));
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5226__auto__,k__5227__auto__,G__6519){
var self__ = this;
var this__5226__auto____$1 = this;
var pred__6528 = cljs.core.keyword_identical_QMARK_;
var expr__6529 = k__5227__auto__;
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5227__auto__,G__6519),null));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5231__auto__){
var self__ = this;
var this__5231__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5218__auto__,G__6519){
var self__ = this;
var this__5218__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(G__6519,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5224__auto__,entry__5225__auto__){
var self__ = this;
var this__5224__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5225__auto__)){
return cljs.core._assoc.call(null,this__5224__auto____$1,cljs.core._nth.call(null,entry__5225__auto__,(0)),cljs.core._nth.call(null,entry__5225__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5224__auto____$1,entry__5225__auto__);
}
});

ajax.core.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ApplyRequestFormat.cljs$lang$type = true;

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__5253__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ApplyRequestFormat");
});

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__5253__auto__,writer__5254__auto__){
return cljs.core._write.call(null,writer__5254__auto__,"ajax.core/ApplyRequestFormat");
});

ajax.core.__GT_ApplyRequestFormat = (function ajax$core$__GT_ApplyRequestFormat(){
return (new ajax.core.ApplyRequestFormat(null,null,null));
});

ajax.core.map__GT_ApplyRequestFormat = (function ajax$core$map__GT_ApplyRequestFormat(G__6521){
return (new ajax.core.ApplyRequestFormat(null,cljs.core.dissoc.call(null,G__6521),null));
});

ajax.core.transit_type = (function ajax$core$transit_type(p__6532){
var map__6535 = p__6532;
var map__6535__$1 = ((((!((map__6535 == null)))?((((map__6535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6535):map__6535);
var type = cljs.core.get.call(null,map__6535__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var or__4605__auto__ = type;
if(cljs.core.truth_(or__4605__auto__)){
return or__4605__auto__;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
});
ajax.core.transit_write_fn = (function ajax$core$transit_write_fn(type,request){
var writer = (function (){var or__4605__auto__ = new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4605__auto__)){
return or__4605__auto__;
} else {
return cognitect.transit.writer.call(null,type,request);
}
})();
return ((function (writer){
return (function ajax$core$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write.call(null,writer,params);
});
;})(writer))
});
ajax.core.transit_request_format = (function ajax$core$transit_request_format(var_args){
var args6537 = [];
var len__5663__auto___6540 = arguments.length;
var i__5664__auto___6541 = (0);
while(true){
if((i__5664__auto___6541 < len__5663__auto___6540)){
args6537.push((arguments[i__5664__auto___6541]));

var G__6542 = (i__5664__auto___6541 + (1));
i__5664__auto___6541 = G__6542;
continue;
} else {
}
break;
}

var G__6539 = args6537.length;
switch (G__6539) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6537.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
var type = ajax.core.transit_type.call(null,request);
var mime_type = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"json","json",1279968570)))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.transit_write_fn.call(null,type,request),new cljs.core.Keyword(null,"content-type","content-type",-508222634),[cljs.core.str("application/transit+"),cljs.core.str(mime_type)].join('')], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;
ajax.core.transit_read_fn = (function ajax$core$transit_read_fn(request){
var reader = (function (){var or__4605__auto__ = new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4605__auto__)){
return or__4605__auto__;
} else {
return cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),request);
}
})();
return ((function (reader){
return (function ajax$core$transit_read_fn_$_transit_read_response(response){
var data = cognitect.transit.read.call(null,reader,ajax.protocols._body.call(null,response));
if(cljs.core.truth_(new cljs.core.Keyword(null,"raw","raw",1604651272).cljs$core$IFn$_invoke$arity$1(request))){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
;})(reader))
});
ajax.core.transit_response_format = (function ajax$core$transit_response_format(var_args){
var args6544 = [];
var len__5663__auto___6547 = arguments.length;
var i__5664__auto___6548 = (0);
while(true){
if((i__5664__auto___6548 < len__5663__auto___6547)){
args6544.push((arguments[i__5664__auto___6548]));

var G__6549 = (i__5664__auto___6548 + (1));
i__5664__auto___6548 = G__6549;
continue;
} else {
}
break;
}

var G__6546 = args6544.length;
switch (G__6546) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6544.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return ajax.core.transit_response_format.call(null,ajax.core.transit_type.call(null,request),request);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,request){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.transit_read_fn.call(null,request),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 2;
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,ajax.core.params_to_str),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(var_args){
var args6551 = [];
var len__5663__auto___6554 = arguments.length;
var i__5664__auto___6555 = (0);
while(true){
if((i__5664__auto___6555 < len__5663__auto___6554)){
args6551.push((arguments[i__5664__auto___6555]));

var G__6556 = (i__5664__auto___6555 + (1));
i__5664__auto___6555 = G__6556;
continue;
} else {
}
break;
}

var G__6553 = args6551.length;
switch (G__6553) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6551.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.protocols._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.core.raw_response_format.call(null);
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.text_request_format = (function ajax$core$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,cljs.core.identity),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
});
ajax.core.text_response_format = ajax.core.raw_response_format;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax.core.strip_prefix = (function ajax$core$strip_prefix(prefix,text){
if(cljs.core.truth_((function (){var and__4593__auto__ = prefix;
if(cljs.core.truth_(and__4593__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__4593__auto__;
}
})())){
return text.substring(prefix.length);
} else {
return text;
}
});
ajax.core.json_read = (function ajax$core$json_read(var_args){
var args6558 = [];
var len__5663__auto___6561 = arguments.length;
var i__5664__auto___6562 = (0);
while(true){
if((i__5664__auto___6562 < len__5663__auto___6561)){
args6558.push((arguments[i__5664__auto___6562]));

var G__6563 = (i__5664__auto___6562 + (1));
i__5664__auto___6562 = G__6563;
continue;
} else {
}
break;
}

var G__6560 = args6558.length;
switch (G__6560) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6558.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;
/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(var_args){
var args6565 = [];
var len__5663__auto___6571 = arguments.length;
var i__5664__auto___6572 = (0);
while(true){
if((i__5664__auto___6572 < len__5663__auto___6571)){
args6565.push((arguments[i__5664__auto___6572]));

var G__6573 = (i__5664__auto___6572 + (1));
i__5664__auto___6572 = G__6573;
continue;
} else {
}
break;
}

var G__6567 = args6565.length;
switch (G__6567) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6565.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__6568){
var map__6569 = p__6568;
var map__6569__$1 = ((((!((map__6569 == null)))?((((map__6569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6569):map__6569);
var prefix = cljs.core.get.call(null,map__6569__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var keywords_QMARK_ = cljs.core.get.call(null,map__6569__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var raw = cljs.core.get.call(null,map__6569__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.core.raw_response_format], null)], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args6575 = [];
var len__5663__auto___6578 = arguments.length;
var i__5664__auto___6579 = (0);
while(true){
if((i__5664__auto___6579 < len__5663__auto___6578)){
args6575.push((arguments[i__5664__auto___6579]));

var G__6580 = (i__5664__auto___6579 + (1));
i__5664__auto___6579 = G__6580;
continue;
} else {
}
break;
}

var G__6577 = args6575.length;
switch (G__6577) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6575.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;
ajax.core.get_accept_entries = (function ajax$core$get_accept_entries(var_args){
var args6582 = [];
var len__5663__auto___6585 = arguments.length;
var i__5664__auto___6586 = (0);
while(true){
if((i__5664__auto___6586 < len__5663__auto___6585)){
args6582.push((arguments[i__5664__auto___6586]));

var G__6587 = (i__5664__auto___6586 + (1));
i__5664__auto___6586 = G__6587;
continue;
} else {
}
break;
}

var G__6584 = args6582.length;
switch (G__6584) {
case 2:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6582.length)].join('')));

}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
});

ajax.core.get_accept_entries.cljs$lang$maxFixedArity = 2;
ajax.core.content_type_matches = (function ajax$core$content_type_matches(var_args){
var args6589 = [];
var len__5663__auto___6592 = arguments.length;
var i__5664__auto___6593 = (0);
while(true){
if((i__5664__auto___6593 < len__5663__auto___6592)){
args6589.push((arguments[i__5664__auto___6593]));

var G__6594 = (i__5664__auto___6593 + (1));
i__5664__auto___6593 = G__6594;
continue;
} else {
}
break;
}

var G__6591 = args6589.length;
switch (G__6591) {
case 2:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6589.length)].join('')));

}
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.content_type_matches.cljs$lang$maxFixedArity = 2;
ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var args6596 = [];
var len__5663__auto___6599 = arguments.length;
var i__5664__auto___6600 = (0);
while(true){
if((i__5664__auto___6600 < len__5663__auto___6599)){
args6596.push((arguments[i__5664__auto___6600]));

var G__6601 = (i__5664__auto___6600 + (1));
i__5664__auto___6600 = G__6601;
continue;
} else {
}
break;
}

var G__6598 = args6596.length;
switch (G__6598) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6596.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;
ajax.core.get_default_format = (function ajax$core$get_default_format(response,p__6603){
var map__6606 = p__6603;
var map__6606__$1 = ((((!((map__6606 == null)))?((((map__6606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6606):map__6606);
var request = map__6606__$1;
var response_format = cljs.core.get.call(null,map__6606__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,ajax.core.get_content_type.call(null,response),request);
return ajax.core.get_format.call(null,request,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args6608 = [];
var len__5663__auto___6611 = arguments.length;
var i__5664__auto___6612 = (0);
while(true){
if((i__5664__auto___6612 < len__5663__auto___6611)){
args6608.push((arguments[i__5664__auto___6612]));

var G__6613 = (i__5664__auto___6612 + (1));
i__5664__auto___6612 = G__6613;
continue;
} else {
}
break;
}

var G__6610 = args6608.length;
switch (G__6610) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6608.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;
ajax.core.accept_header = (function ajax$core$accept_header(p__6615){
var map__6618 = p__6615;
var map__6618__$1 = ((((!((map__6618 == null)))?((((map__6618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6618):map__6618);
var request = map__6618__$1;
var response_format = cljs.core.get.call(null,map__6618__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return cljs.core.mapcat.call(null,ajax.core.get_accept_entries.call(null,request),response_format);
} else {
return ajax.core.get_accept_entries.call(null,request,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args6620 = [];
var len__5663__auto___6623 = arguments.length;
var i__5664__auto___6624 = (0);
while(true){
if((i__5664__auto___6624 < len__5663__auto___6623)){
args6620.push((arguments[i__5664__auto___6624]));

var G__6625 = (i__5664__auto___6624 + (1));
i__5664__auto___6624 = G__6625;
continue;
} else {
}
break;
}

var G__6622 = args6620.length;
switch (G__6622) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6620.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header.call(null,opts);
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null));
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.get_response_format = (function ajax$core$get_response_format(p__6627){
var map__6630 = p__6627;
var map__6630__$1 = ((((!((map__6630 == null)))?((((map__6630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6630):map__6630);
var opts = map__6630__$1;
var response_format = cljs.core.get.call(null,map__6630__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if((response_format instanceof ajax.core.ResponseFormat)){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return ajax.core.detect_response_format.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,response_format);
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var args6632 = [];
var len__5663__auto___6635 = arguments.length;
var i__5664__auto___6636 = (0);
while(true){
if((i__5664__auto___6636 < len__5663__auto___6635)){
args6632.push((arguments[i__5664__auto___6636]));

var G__6637 = (i__5664__auto___6636 + (1));
i__5664__auto___6636 = G__6637;
continue;
} else {
}
break;
}

var G__6634 = args6632.length;
switch (G__6634) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6632.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (handler,interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (handler,interceptors){
return (function (response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return (function (interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;
ajax.core.base_handler = (function ajax$core$base_handler(interceptors,p__6639){
var map__6642 = p__6639;
var map__6642__$1 = ((((!((map__6642 == null)))?((((map__6642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6642):map__6642);
var handler = cljs.core.get.call(null,map__6642__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,handler,interceptors);
} else {
return ajax.core.throw_error.call(null,"No ajax handler provided.");
}
});
ajax.core.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.core.ProcessGet(null,null,null)),(new ajax.core.DirectSubmission(null,null,null)),(new ajax.core.ApplyRequestFormat(null,null,null))], null);
ajax.core.default_interceptors = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
ajax.core.normalize_request = (function ajax$core$normalize_request(request){
var response_format = ajax.core.get_response_format.call(null,request);
return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"method","method",55703592),ajax.core.normalize_method),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),((function (response_format){
return (function (p1__6644_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__4605__auto__ = p1__6644_SHARP_;
if(cljs.core.truth_(or__4605__auto__)){
return or__4605__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_interceptors);
}
})(),ajax.core.request_interceptors);
});})(response_format))
);
});
ajax.core.new_default_api = (function ajax$core$new_default_api(){
return (new goog.net.XhrIo());
});
ajax.core.raw_ajax_request = (function ajax$core$raw_ajax_request(p__6645){
var map__6648 = p__6645;
var map__6648__$1 = ((((!((map__6648 == null)))?((((map__6648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6648):map__6648);
var request = map__6648__$1;
var interceptors = cljs.core.get.call(null,map__6648__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var request__$1 = cljs.core.reduce.call(null,ajax.core.process_request,request,interceptors);
var handler = ajax.core.base_handler.call(null,cljs.core.reverse.call(null,interceptors),request__$1);
var api = (function (){var or__4605__auto__ = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__4605__auto__)){
return or__4605__auto__;
} else {
return ajax.core.new_default_api.call(null);
}
})();
return ajax.protocols._js_ajax_request.call(null,api,request__$1,handler);
});
ajax.core.ajax_request = (function ajax$core$ajax_request(request){
return ajax.core.raw_ajax_request.call(null,ajax.core.normalize_request.call(null,request));
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.call(null,format_params);
} else {
var G__6651 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__6651) {
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "text":
return ajax.core.text_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "url":
return ajax.core.url_request_format.call(null);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_element = (function ajax$core$keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,format),ajax$core$keyword_response_format_element.call(null,cljs.core.second.call(null,format),format_params)], null);
} else {
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.call(null);
} else {
var G__6654 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__6654) {
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "text":
return ajax.core.text_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "detect":
return ajax.core.detect_response_format.call(null);

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__6656_SHARP_){
return ajax.core.keyword_response_format_element.call(null,p1__6656_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_element.call(null,format,format_params);
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(var_args){
var args6657 = [];
var len__5663__auto___6670 = arguments.length;
var i__5664__auto___6671 = (0);
while(true){
if((i__5664__auto___6671 < len__5663__auto___6670)){
args6657.push((arguments[i__5664__auto___6671]));

var G__6672 = (i__5664__auto___6671 + (1));
i__5664__auto___6671 = G__6672;
continue;
} else {
}
break;
}

var G__6659 = args6657.length;
switch (G__6659) {
case 2:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6657.length)].join('')));

}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2 = (function (p__6660,p__6661){
var map__6662 = p__6660;
var map__6662__$1 = ((((!((map__6662 == null)))?((((map__6662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6662):map__6662);
var handler = cljs.core.get.call(null,map__6662__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__6662__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__6662__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var vec__6663 = p__6661;
var ok = cljs.core.nth.call(null,vec__6663,(0),null);
var result = cljs.core.nth.call(null,vec__6663,(1),null);
var temp__4655__auto___6674 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4655__auto___6674)){
var h_6675 = temp__4655__auto___6674;
h_6675.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1 = (function (p__6665){
var map__6666 = p__6665;
var map__6666__$1 = ((((!((map__6666 == null)))?((((map__6666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6666):map__6666);
var handler = cljs.core.get.call(null,map__6666__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__6666__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__6666__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
return ((function (map__6666,map__6666__$1,handler,error_handler,finally$){
return (function (p__6668){
var vec__6669 = p__6668;
var ok = cljs.core.nth.call(null,vec__6669,(0),null);
var result = cljs.core.nth.call(null,vec__6669,(1),null);
var temp__4655__auto___6676 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4655__auto___6676)){
var h_6677 = temp__4655__auto___6676;
h_6677.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(map__6666,map__6666__$1,handler,error_handler,finally$))
});

ajax.core.transform_handler.cljs$lang$maxFixedArity = 2;
ajax.core.transform_opts = (function ajax$core$transform_opts(p__6678){
var map__6681 = p__6678;
var map__6681__$1 = ((((!((map__6681 == null)))?((((map__6681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6681):map__6681);
var opts = map__6681__$1;
var method = cljs.core.get.call(null,map__6681__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__6681__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__6681__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var params = cljs.core.get.call(null,map__6681__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.call(null,map__6681__$1,new cljs.core.Keyword(null,"body","body",-2049205669));

var needs_format = ((body == null)) && (cljs.core.not_EQ_.call(null,method,"GET"));
var rf = (cljs.core.truth_((function (){var or__4605__auto__ = format;
if(cljs.core.truth_(or__4605__auto__)){
return or__4605__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.keyword_response_format.call(null,response_format,opts));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request.call(null,ajax.core.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method)));
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__5670__auto__ = [];
var len__5663__auto___6685 = arguments.length;
var i__5664__auto___6686 = (0);
while(true){
if((i__5664__auto___6686 < len__5663__auto___6685)){
args__5670__auto__.push((arguments[i__5664__auto___6686]));

var G__6687 = (i__5664__auto___6686 + (1));
i__5664__auto___6686 = G__6687;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__5800__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__5800__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__5800__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq6683){
var G__6684 = cljs.core.first.call(null,seq6683);
var seq6683__$1 = cljs.core.next.call(null,seq6683);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__6684,seq6683__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__5670__auto__ = [];
var len__5663__auto___6690 = arguments.length;
var i__5664__auto___6691 = (0);
while(true){
if((i__5664__auto___6691 < len__5663__auto___6690)){
args__5670__auto__.push((arguments[i__5664__auto___6691]));

var G__6692 = (i__5664__auto___6691 + (1));
i__5664__auto___6691 = G__6692;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__5800__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__5800__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__5800__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq6688){
var G__6689 = cljs.core.first.call(null,seq6688);
var seq6688__$1 = cljs.core.next.call(null,seq6688);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__6689,seq6688__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__5670__auto__ = [];
var len__5663__auto___6695 = arguments.length;
var i__5664__auto___6696 = (0);
while(true){
if((i__5664__auto___6696 < len__5663__auto___6695)){
args__5670__auto__.push((arguments[i__5664__auto___6696]));

var G__6697 = (i__5664__auto___6696 + (1));
i__5664__auto___6696 = G__6697;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__5800__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__5800__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__5800__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq6693){
var G__6694 = cljs.core.first.call(null,seq6693);
var seq6693__$1 = cljs.core.next.call(null,seq6693);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__6694,seq6693__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__5670__auto__ = [];
var len__5663__auto___6700 = arguments.length;
var i__5664__auto___6701 = (0);
while(true){
if((i__5664__auto___6701 < len__5663__auto___6700)){
args__5670__auto__.push((arguments[i__5664__auto___6701]));

var G__6702 = (i__5664__auto___6701 + (1));
i__5664__auto___6701 = G__6702;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__5800__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__5800__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__5800__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq6698){
var G__6699 = cljs.core.first.call(null,seq6698);
var seq6698__$1 = cljs.core.next.call(null,seq6698);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__6699,seq6698__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__5670__auto__ = [];
var len__5663__auto___6705 = arguments.length;
var i__5664__auto___6706 = (0);
while(true){
if((i__5664__auto___6706 < len__5663__auto___6705)){
args__5670__auto__.push((arguments[i__5664__auto___6706]));

var G__6707 = (i__5664__auto___6706 + (1));
i__5664__auto___6706 = G__6707;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__5800__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__5800__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__5800__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq6703){
var G__6704 = cljs.core.first.call(null,seq6703);
var seq6703__$1 = cljs.core.next.call(null,seq6703);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__6704,seq6703__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__5670__auto__ = [];
var len__5663__auto___6710 = arguments.length;
var i__5664__auto___6711 = (0);
while(true){
if((i__5664__auto___6711 < len__5663__auto___6710)){
args__5670__auto__.push((arguments[i__5664__auto___6711]));

var G__6712 = (i__5664__auto___6711 + (1));
i__5664__auto___6711 = G__6712;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__5800__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__5800__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__5800__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq6708){
var G__6709 = cljs.core.first.call(null,seq6708);
var seq6708__$1 = cljs.core.next.call(null,seq6708);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__6709,seq6708__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__5670__auto__ = [];
var len__5663__auto___6715 = arguments.length;
var i__5664__auto___6716 = (0);
while(true){
if((i__5664__auto___6716 < len__5663__auto___6715)){
args__5670__auto__.push((arguments[i__5664__auto___6716]));

var G__6717 = (i__5664__auto___6716 + (1));
i__5664__auto___6716 = G__6717;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__5800__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__5800__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__5800__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq6713){
var G__6714 = cljs.core.first.call(null,seq6713);
var seq6713__$1 = cljs.core.next.call(null,seq6713);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__6714,seq6713__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__5670__auto__ = [];
var len__5663__auto___6720 = arguments.length;
var i__5664__auto___6721 = (0);
while(true){
if((i__5664__auto___6721 < len__5663__auto___6720)){
args__5670__auto__.push((arguments[i__5664__auto___6721]));

var G__6722 = (i__5664__auto___6721 + (1));
i__5664__auto___6721 = G__6722;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__5800__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PATCH",(((f__5800__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__5800__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq6718){
var G__6719 = cljs.core.first.call(null,seq6718);
var seq6718__$1 = cljs.core.next.call(null,seq6718);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__6719,seq6718__$1);
});

//# sourceMappingURL=core.js.map