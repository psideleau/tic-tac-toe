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
var seq__6000 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,values));
var chunk__6001 = null;
var count__6002 = (0);
var i__6003 = (0);
while(true){
if((i__6003 < count__6002)){
var square = cljs.core._nth.call(null,chunk__6001,i__6003);
dommy.core.set_value_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#square-"),cljs.core.str(cljs.core.first.call(null,square))].join(''))),[cljs.core.str(cljs.core.nth.call(null,square,(1)))].join(''));

var G__6004 = seq__6000;
var G__6005 = chunk__6001;
var G__6006 = count__6002;
var G__6007 = (i__6003 + (1));
seq__6000 = G__6004;
chunk__6001 = G__6005;
count__6002 = G__6006;
i__6003 = G__6007;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__6000);
if(temp__4657__auto__){
var seq__6000__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6000__$1)){
var c__5408__auto__ = cljs.core.chunk_first.call(null,seq__6000__$1);
var G__6008 = cljs.core.chunk_rest.call(null,seq__6000__$1);
var G__6009 = c__5408__auto__;
var G__6010 = cljs.core.count.call(null,c__5408__auto__);
var G__6011 = (0);
seq__6000 = G__6008;
chunk__6001 = G__6009;
count__6002 = G__6010;
i__6003 = G__6011;
continue;
} else {
var square = cljs.core.first.call(null,seq__6000__$1);
dommy.core.set_value_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#square-"),cljs.core.str(cljs.core.first.call(null,square))].join(''))),[cljs.core.str(cljs.core.nth.call(null,square,(1)))].join(''));

var G__6012 = cljs.core.next.call(null,seq__6000__$1);
var G__6013 = null;
var G__6014 = (0);
var G__6015 = (0);
seq__6000 = G__6012;
chunk__6001 = G__6013;
count__6002 = G__6014;
i__6003 = G__6015;
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
tic.client.won = (function tic$client$won(){
return alert([cljs.core.str(new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic.client.game))),cljs.core.str(" has won the game")].join(''));
});
goog.exportSymbol('tic.client.won', tic.client.won);
tic.client.tied = (function tic$client$tied(){
return alert("the game ends in a tie");
});
goog.exportSymbol('tic.client.tied', tic.client.tied);
tic.client.take_square_handler = (function tic$client$take_square_handler(response){
console.log("server responded...",[cljs.core.str(response)].join(''));

cljs.core.reset_BANG_.call(null,tic.client.game,new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(response));

tic.client.update_board.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic.client.game)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"callback-method","callback-method",-2133571359).cljs$core$IFn$_invoke$arity$1(response))){
var callback_fn = (window["tic"]["client"][new cljs.core.Keyword(null,"callback-method","callback-method",-2133571359).cljs$core$IFn$_invoke$arity$1(response)]);
cljs.core.println.call(null,callback_fn);

return callback_fn.call(null);
} else {
return null;
}
});
tic.client.error_handler = (function tic$client$error_handler(p__6016){
var map__6019 = p__6016;
var map__6019__$1 = ((((!((map__6019 == null)))?((((map__6019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6019):map__6019);
var status = cljs.core.get.call(null,map__6019__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__6019__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
tic.client.start_game = (function tic$client$start_game(e){
return ajax.core.POST.call(null,"/tic-tac-toe",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"handler","handler",-195596612),tic.client.start_game_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),tic.client.error_handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570)], null));
});
tic.client.take_square = (function tic$client$take_square(e){
var square = cljs.core.last.call(null,clojure.string.split.call(null,e.target.id,"-"));
cljs.core.println.call(null,square,square);

return ajax.core.POST.call(null,[cljs.core.str("/squares/"),cljs.core.str(square)].join(''),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"handler","handler",-195596612),tic.client.take_square_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),tic.client.error_handler,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"game","game",-441523833),cljs.core.deref.call(null,tic.client.game),new cljs.core.Keyword(null,"callback-methods","callback-methods",-903929424),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"winner-method","winner-method",669411507),"won",new cljs.core.Keyword(null,"tied-method","tied-method",-1029089692),"tied"], null)], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570)], null));
});
tic.client.say_hello = (function tic$client$say_hello(e){
console.log(e);

return cljs.core.println.call(null,e.target.id);
});
tic.client.init = (function tic$client$init(){
var seq__6025_6029 = cljs.core.seq.call(null,dommy.utils.__GT_Array.call(null,document.querySelectorAll(".tic-btn")));
var chunk__6026_6030 = null;
var count__6027_6031 = (0);
var i__6028_6032 = (0);
while(true){
if((i__6028_6032 < count__6027_6031)){
var btn_6033 = cljs.core._nth.call(null,chunk__6026_6030,i__6028_6032);
dommy.core.listen_BANG_.call(null,btn_6033,new cljs.core.Keyword(null,"click","click",1912301393),tic.client.take_square);

var G__6034 = seq__6025_6029;
var G__6035 = chunk__6026_6030;
var G__6036 = count__6027_6031;
var G__6037 = (i__6028_6032 + (1));
seq__6025_6029 = G__6034;
chunk__6026_6030 = G__6035;
count__6027_6031 = G__6036;
i__6028_6032 = G__6037;
continue;
} else {
var temp__4657__auto___6038 = cljs.core.seq.call(null,seq__6025_6029);
if(temp__4657__auto___6038){
var seq__6025_6039__$1 = temp__4657__auto___6038;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6025_6039__$1)){
var c__5408__auto___6040 = cljs.core.chunk_first.call(null,seq__6025_6039__$1);
var G__6041 = cljs.core.chunk_rest.call(null,seq__6025_6039__$1);
var G__6042 = c__5408__auto___6040;
var G__6043 = cljs.core.count.call(null,c__5408__auto___6040);
var G__6044 = (0);
seq__6025_6029 = G__6041;
chunk__6026_6030 = G__6042;
count__6027_6031 = G__6043;
i__6028_6032 = G__6044;
continue;
} else {
var btn_6045 = cljs.core.first.call(null,seq__6025_6039__$1);
dommy.core.listen_BANG_.call(null,btn_6045,new cljs.core.Keyword(null,"click","click",1912301393),tic.client.take_square);

var G__6046 = cljs.core.next.call(null,seq__6025_6039__$1);
var G__6047 = null;
var G__6048 = (0);
var G__6049 = (0);
seq__6025_6029 = G__6046;
chunk__6026_6030 = G__6047;
count__6027_6031 = G__6048;
i__6028_6032 = G__6049;
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