// Compiled by ClojureScript 1.7.122 {}
goog.provide('tic.client');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('dommy.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello world!");
tic.client.game = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
tic.client.update_board = (function tic$client$update_board(board){
cljs.core.println.call(null,board);

var values = cljs.core.concat.call(null,cljs.core.first.call(null,board),cljs.core.second.call(null,board),cljs.core.last.call(null,board));
var seq__8266 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,values));
var chunk__8267 = null;
var count__8268 = (0);
var i__8269 = (0);
while(true){
if((i__8269 < count__8268)){
var square = cljs.core._nth.call(null,chunk__8267,i__8269);
dommy.core.set_value_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#square-"),cljs.core.str(cljs.core.first.call(null,square))].join(''))),[cljs.core.str(cljs.core.nth.call(null,square,(1)))].join(''));

var G__8270 = seq__8266;
var G__8271 = chunk__8267;
var G__8272 = count__8268;
var G__8273 = (i__8269 + (1));
seq__8266 = G__8270;
chunk__8267 = G__8271;
count__8268 = G__8272;
i__8269 = G__8273;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8266);
if(temp__4657__auto__){
var seq__8266__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8266__$1)){
var c__5408__auto__ = cljs.core.chunk_first.call(null,seq__8266__$1);
var G__8274 = cljs.core.chunk_rest.call(null,seq__8266__$1);
var G__8275 = c__5408__auto__;
var G__8276 = cljs.core.count.call(null,c__5408__auto__);
var G__8277 = (0);
seq__8266 = G__8274;
chunk__8267 = G__8275;
count__8268 = G__8276;
i__8269 = G__8277;
continue;
} else {
var square = cljs.core.first.call(null,seq__8266__$1);
dommy.core.set_value_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#square-"),cljs.core.str(cljs.core.first.call(null,square))].join(''))),[cljs.core.str(cljs.core.nth.call(null,square,(1)))].join(''));

var G__8278 = cljs.core.next.call(null,seq__8266__$1);
var G__8279 = null;
var G__8280 = (0);
var G__8281 = (0);
seq__8266 = G__8278;
chunk__8267 = G__8279;
count__8268 = G__8280;
i__8269 = G__8281;
continue;
}
} else {
return null;
}
}
break;
}
});
tic.client.start_game_handler = (function tic$client$start_game_handler(response){
console.log("server responded...",[cljs.core.str(response)].join(''));

cljs.core.reset_BANG_.call(null,tic.client.game,response);

return tic.client.update_board.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(response));
});
tic.client.take_square_handler = (function tic$client$take_square_handler(response){
console.log("server responded...",[cljs.core.str(response)].join(''));

cljs.core.reset_BANG_.call(null,tic.client.game,new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(response));

return tic.client.update_board.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic.client.game)));
});
tic.client.error_handler = (function tic$client$error_handler(p__8282){
var map__8285 = p__8282;
var map__8285__$1 = ((((!((map__8285 == null)))?((((map__8285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8285):map__8285);
var status = cljs.core.get.call(null,map__8285__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__8285__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
tic.client.start_game = (function tic$client$start_game(e){
return ajax.core.POST.call(null,"/tic-tac-toe",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"handler","handler",-195596612),tic.client.start_game_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),tic.client.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570)], null));
});
tic.client.take_square = (function tic$client$take_square(e){
var square = cljs.core.last.call(null,clojure.string.split.call(null,e.target.id,"-"));
cljs.core.println.call(null,square,square);

return ajax.core.POST.call(null,[cljs.core.str("/squares/"),cljs.core.str(square)].join(''),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"handler","handler",-195596612),tic.client.take_square_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),tic.client.error_handler,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"game","game",-441523833),cljs.core.deref.call(null,tic.client.game),new cljs.core.Keyword(null,"callback-methods","callback-methods",-903929424),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"winner-method","winner-method",669411507),"win",new cljs.core.Keyword(null,"tied-method","tied-method",-1029089692),"tied"], null)], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570)], null));
});
tic.client.say_hello = (function tic$client$say_hello(e){
console.log(e);

return cljs.core.println.call(null,e.target.id);
});
tic.client.init = (function tic$client$init(){
var seq__8291_8295 = cljs.core.seq.call(null,dommy.utils.__GT_Array.call(null,document.querySelectorAll(".tic-btn")));
var chunk__8292_8296 = null;
var count__8293_8297 = (0);
var i__8294_8298 = (0);
while(true){
if((i__8294_8298 < count__8293_8297)){
var btn_8299 = cljs.core._nth.call(null,chunk__8292_8296,i__8294_8298);
dommy.core.listen_BANG_.call(null,btn_8299,new cljs.core.Keyword(null,"click","click",1912301393),tic.client.take_square);

var G__8300 = seq__8291_8295;
var G__8301 = chunk__8292_8296;
var G__8302 = count__8293_8297;
var G__8303 = (i__8294_8298 + (1));
seq__8291_8295 = G__8300;
chunk__8292_8296 = G__8301;
count__8293_8297 = G__8302;
i__8294_8298 = G__8303;
continue;
} else {
var temp__4657__auto___8304 = cljs.core.seq.call(null,seq__8291_8295);
if(temp__4657__auto___8304){
var seq__8291_8305__$1 = temp__4657__auto___8304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8291_8305__$1)){
var c__5408__auto___8306 = cljs.core.chunk_first.call(null,seq__8291_8305__$1);
var G__8307 = cljs.core.chunk_rest.call(null,seq__8291_8305__$1);
var G__8308 = c__5408__auto___8306;
var G__8309 = cljs.core.count.call(null,c__5408__auto___8306);
var G__8310 = (0);
seq__8291_8295 = G__8307;
chunk__8292_8296 = G__8308;
count__8293_8297 = G__8309;
i__8294_8298 = G__8310;
continue;
} else {
var btn_8311 = cljs.core.first.call(null,seq__8291_8305__$1);
dommy.core.listen_BANG_.call(null,btn_8311,new cljs.core.Keyword(null,"click","click",1912301393),tic.client.take_square);

var G__8312 = cljs.core.next.call(null,seq__8291_8305__$1);
var G__8313 = null;
var G__8314 = (0);
var G__8315 = (0);
seq__8291_8295 = G__8312;
chunk__8292_8296 = G__8313;
count__8293_8297 = G__8314;
i__8294_8298 = G__8315;
continue;
}
} else {
}
}
break;
}

return dommy.core.listen_BANG_.call(null,document.getElementById("start-game"),new cljs.core.Keyword(null,"click","click",1912301393),tic.client.start_game);
});
window.onload = tic.client.init;

//# sourceMappingURL=client.js.map