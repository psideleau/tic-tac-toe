// Compiled by ClojureScript 1.7.122 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__6935,handler){
var map__6936 = p__6935;
var map__6936__$1 = ((((!((map__6936 == null)))?((((map__6936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6936):map__6936);
var uri = cljs.core.get.call(null,map__6936__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__6936__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__6936__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__6936__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__6936__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__6936__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__6936__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__6936,map__6936__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__6934_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__6934_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__6936,map__6936__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___6944 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___6944)){
var response_type_6945 = temp__4657__auto___6944;
this$__$1.responseType = cljs.core.name.call(null,response_type_6945);
} else {
}

var seq__6938_6946 = cljs.core.seq.call(null,headers);
var chunk__6939_6947 = null;
var count__6940_6948 = (0);
var i__6941_6949 = (0);
while(true){
if((i__6941_6949 < count__6940_6948)){
var vec__6942_6950 = cljs.core._nth.call(null,chunk__6939_6947,i__6941_6949);
var k_6951 = cljs.core.nth.call(null,vec__6942_6950,(0),null);
var v_6952 = cljs.core.nth.call(null,vec__6942_6950,(1),null);
this$__$1.setRequestHeader(k_6951,v_6952);

var G__6953 = seq__6938_6946;
var G__6954 = chunk__6939_6947;
var G__6955 = count__6940_6948;
var G__6956 = (i__6941_6949 + (1));
seq__6938_6946 = G__6953;
chunk__6939_6947 = G__6954;
count__6940_6948 = G__6955;
i__6941_6949 = G__6956;
continue;
} else {
var temp__4657__auto___6957 = cljs.core.seq.call(null,seq__6938_6946);
if(temp__4657__auto___6957){
var seq__6938_6958__$1 = temp__4657__auto___6957;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6938_6958__$1)){
var c__5408__auto___6959 = cljs.core.chunk_first.call(null,seq__6938_6958__$1);
var G__6960 = cljs.core.chunk_rest.call(null,seq__6938_6958__$1);
var G__6961 = c__5408__auto___6959;
var G__6962 = cljs.core.count.call(null,c__5408__auto___6959);
var G__6963 = (0);
seq__6938_6946 = G__6960;
chunk__6939_6947 = G__6961;
count__6940_6948 = G__6962;
i__6941_6949 = G__6963;
continue;
} else {
var vec__6943_6964 = cljs.core.first.call(null,seq__6938_6958__$1);
var k_6965 = cljs.core.nth.call(null,vec__6943_6964,(0),null);
var v_6966 = cljs.core.nth.call(null,vec__6943_6964,(1),null);
this$__$1.setRequestHeader(k_6965,v_6966);

var G__6967 = cljs.core.next.call(null,seq__6938_6958__$1);
var G__6968 = null;
var G__6969 = (0);
var G__6970 = (0);
seq__6938_6946 = G__6967;
chunk__6939_6947 = G__6968;
count__6940_6948 = G__6969;
i__6941_6949 = G__6970;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4605__auto__ = body;
if(cljs.core.truth_(or__4605__auto__)){
return or__4605__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map