// Compiled by ClojureScript 1.7.122 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4605__auto__ = elem.textContent;
if(cljs.core.truth_(or__4605__auto__)){
return or__4605__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args6973 = [];
var len__5663__auto___6976 = arguments.length;
var i__5664__auto___6977 = (0);
while(true){
if((i__5664__auto___6977 < len__5663__auto___6976)){
args6973.push((arguments[i__5664__auto___6977]));

var G__6978 = (i__5664__auto___6977 + (1));
i__5664__auto___6977 = G__6978;
continue;
} else {
}
break;
}

var G__6975 = args6973.length;
switch (G__6975) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6973.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;
dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args6980 = [];
var len__5663__auto___6983 = arguments.length;
var i__5664__auto___6984 = (0);
while(true){
if((i__5664__auto___6984 < len__5663__auto___6983)){
args6980.push((arguments[i__5664__auto___6984]));

var G__6985 = (i__5664__auto___6984 + (1));
i__5664__auto___6984 = G__6985;
continue;
} else {
}
break;
}

var G__6982 = args6980.length;
switch (G__6982) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6980.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;
/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args6988 = [];
var len__5663__auto___6991 = arguments.length;
var i__5664__auto___6992 = (0);
while(true){
if((i__5664__auto___6992 < len__5663__auto___6991)){
args6988.push((arguments[i__5664__auto___6992]));

var G__6993 = (i__5664__auto___6992 + (1));
i__5664__auto___6992 = G__6993;
continue;
} else {
}
break;
}

var G__6990 = args6988.length;
switch (G__6990) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6988.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__6987_SHARP_){
return !((p1__6987_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;
/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__5670__auto__ = [];
var len__5663__auto___7003 = arguments.length;
var i__5664__auto___7004 = (0);
while(true){
if((i__5664__auto___7004 < len__5663__auto___7003)){
args__5670__auto__.push((arguments[i__5664__auto___7004]));

var G__7005 = (i__5664__auto___7004 + (1));
i__5664__auto___7004 = G__7005;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__6997_7006 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__6998_7007 = null;
var count__6999_7008 = (0);
var i__7000_7009 = (0);
while(true){
if((i__7000_7009 < count__6999_7008)){
var vec__7001_7010 = cljs.core._nth.call(null,chunk__6998_7007,i__7000_7009);
var k_7011 = cljs.core.nth.call(null,vec__7001_7010,(0),null);
var v_7012 = cljs.core.nth.call(null,vec__7001_7010,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_7011),v_7012);

var G__7013 = seq__6997_7006;
var G__7014 = chunk__6998_7007;
var G__7015 = count__6999_7008;
var G__7016 = (i__7000_7009 + (1));
seq__6997_7006 = G__7013;
chunk__6998_7007 = G__7014;
count__6999_7008 = G__7015;
i__7000_7009 = G__7016;
continue;
} else {
var temp__4657__auto___7017 = cljs.core.seq.call(null,seq__6997_7006);
if(temp__4657__auto___7017){
var seq__6997_7018__$1 = temp__4657__auto___7017;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6997_7018__$1)){
var c__5408__auto___7019 = cljs.core.chunk_first.call(null,seq__6997_7018__$1);
var G__7020 = cljs.core.chunk_rest.call(null,seq__6997_7018__$1);
var G__7021 = c__5408__auto___7019;
var G__7022 = cljs.core.count.call(null,c__5408__auto___7019);
var G__7023 = (0);
seq__6997_7006 = G__7020;
chunk__6998_7007 = G__7021;
count__6999_7008 = G__7022;
i__7000_7009 = G__7023;
continue;
} else {
var vec__7002_7024 = cljs.core.first.call(null,seq__6997_7018__$1);
var k_7025 = cljs.core.nth.call(null,vec__7002_7024,(0),null);
var v_7026 = cljs.core.nth.call(null,vec__7002_7024,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_7025),v_7026);

var G__7027 = cljs.core.next.call(null,seq__6997_7018__$1);
var G__7028 = null;
var G__7029 = (0);
var G__7030 = (0);
seq__6997_7006 = G__7027;
chunk__6998_7007 = G__7028;
count__6999_7008 = G__7029;
i__7000_7009 = G__7030;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq6995){
var G__6996 = cljs.core.first.call(null,seq6995);
var seq6995__$1 = cljs.core.next.call(null,seq6995);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6996,seq6995__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__5670__auto__ = [];
var len__5663__auto___7037 = arguments.length;
var i__5664__auto___7038 = (0);
while(true){
if((i__5664__auto___7038 < len__5663__auto___7037)){
args__5670__auto__.push((arguments[i__5664__auto___7038]));

var G__7039 = (i__5664__auto___7038 + (1));
i__5664__auto___7038 = G__7039;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__7033_7040 = cljs.core.seq.call(null,keywords);
var chunk__7034_7041 = null;
var count__7035_7042 = (0);
var i__7036_7043 = (0);
while(true){
if((i__7036_7043 < count__7035_7042)){
var kw_7044 = cljs.core._nth.call(null,chunk__7034_7041,i__7036_7043);
style.removeProperty(dommy.utils.as_str.call(null,kw_7044));

var G__7045 = seq__7033_7040;
var G__7046 = chunk__7034_7041;
var G__7047 = count__7035_7042;
var G__7048 = (i__7036_7043 + (1));
seq__7033_7040 = G__7045;
chunk__7034_7041 = G__7046;
count__7035_7042 = G__7047;
i__7036_7043 = G__7048;
continue;
} else {
var temp__4657__auto___7049 = cljs.core.seq.call(null,seq__7033_7040);
if(temp__4657__auto___7049){
var seq__7033_7050__$1 = temp__4657__auto___7049;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7033_7050__$1)){
var c__5408__auto___7051 = cljs.core.chunk_first.call(null,seq__7033_7050__$1);
var G__7052 = cljs.core.chunk_rest.call(null,seq__7033_7050__$1);
var G__7053 = c__5408__auto___7051;
var G__7054 = cljs.core.count.call(null,c__5408__auto___7051);
var G__7055 = (0);
seq__7033_7040 = G__7052;
chunk__7034_7041 = G__7053;
count__7035_7042 = G__7054;
i__7036_7043 = G__7055;
continue;
} else {
var kw_7056 = cljs.core.first.call(null,seq__7033_7050__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_7056));

var G__7057 = cljs.core.next.call(null,seq__7033_7050__$1);
var G__7058 = null;
var G__7059 = (0);
var G__7060 = (0);
seq__7033_7040 = G__7057;
chunk__7034_7041 = G__7058;
count__7035_7042 = G__7059;
i__7036_7043 = G__7060;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq7031){
var G__7032 = cljs.core.first.call(null,seq7031);
var seq7031__$1 = cljs.core.next.call(null,seq7031);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7032,seq7031__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__5670__auto__ = [];
var len__5663__auto___7069 = arguments.length;
var i__5664__auto___7070 = (0);
while(true){
if((i__5664__auto___7070 < len__5663__auto___7069)){
args__5670__auto__.push((arguments[i__5664__auto___7070]));

var G__7071 = (i__5664__auto___7070 + (1));
i__5664__auto___7070 = G__7071;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__7063_7072 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__7064_7073 = null;
var count__7065_7074 = (0);
var i__7066_7075 = (0);
while(true){
if((i__7066_7075 < count__7065_7074)){
var vec__7067_7076 = cljs.core._nth.call(null,chunk__7064_7073,i__7066_7075);
var k_7077 = cljs.core.nth.call(null,vec__7067_7076,(0),null);
var v_7078 = cljs.core.nth.call(null,vec__7067_7076,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_7077,[cljs.core.str(v_7078),cljs.core.str("px")].join(''));

var G__7079 = seq__7063_7072;
var G__7080 = chunk__7064_7073;
var G__7081 = count__7065_7074;
var G__7082 = (i__7066_7075 + (1));
seq__7063_7072 = G__7079;
chunk__7064_7073 = G__7080;
count__7065_7074 = G__7081;
i__7066_7075 = G__7082;
continue;
} else {
var temp__4657__auto___7083 = cljs.core.seq.call(null,seq__7063_7072);
if(temp__4657__auto___7083){
var seq__7063_7084__$1 = temp__4657__auto___7083;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7063_7084__$1)){
var c__5408__auto___7085 = cljs.core.chunk_first.call(null,seq__7063_7084__$1);
var G__7086 = cljs.core.chunk_rest.call(null,seq__7063_7084__$1);
var G__7087 = c__5408__auto___7085;
var G__7088 = cljs.core.count.call(null,c__5408__auto___7085);
var G__7089 = (0);
seq__7063_7072 = G__7086;
chunk__7064_7073 = G__7087;
count__7065_7074 = G__7088;
i__7066_7075 = G__7089;
continue;
} else {
var vec__7068_7090 = cljs.core.first.call(null,seq__7063_7084__$1);
var k_7091 = cljs.core.nth.call(null,vec__7068_7090,(0),null);
var v_7092 = cljs.core.nth.call(null,vec__7068_7090,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_7091,[cljs.core.str(v_7092),cljs.core.str("px")].join(''));

var G__7093 = cljs.core.next.call(null,seq__7063_7084__$1);
var G__7094 = null;
var G__7095 = (0);
var G__7096 = (0);
seq__7063_7072 = G__7093;
chunk__7064_7073 = G__7094;
count__7065_7074 = G__7095;
i__7066_7075 = G__7096;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq7061){
var G__7062 = cljs.core.first.call(null,seq7061);
var seq7061__$1 = cljs.core.next.call(null,seq7061);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7062,seq7061__$1);
});
/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args7097 = [];
var len__5663__auto___7112 = arguments.length;
var i__5664__auto___7113 = (0);
while(true){
if((i__5664__auto___7113 < len__5663__auto___7112)){
args7097.push((arguments[i__5664__auto___7113]));

var G__7114 = (i__5664__auto___7113 + (1));
i__5664__auto___7113 = G__7114;
continue;
} else {
}
break;
}

var G__7103 = args7097.length;
switch (G__7103) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__5682__auto__ = (new cljs.core.IndexedSeq(args7097.slice((3)),(0)));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5682__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__7104 = elem;
(G__7104[k__$1] = v);

return G__7104;
} else {
var G__7105 = elem;
G__7105.setAttribute(k__$1,v);

return G__7105;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__7106_7116 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__7107_7117 = null;
var count__7108_7118 = (0);
var i__7109_7119 = (0);
while(true){
if((i__7109_7119 < count__7108_7118)){
var vec__7110_7120 = cljs.core._nth.call(null,chunk__7107_7117,i__7109_7119);
var k_7121__$1 = cljs.core.nth.call(null,vec__7110_7120,(0),null);
var v_7122__$1 = cljs.core.nth.call(null,vec__7110_7120,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_7121__$1,v_7122__$1);

var G__7123 = seq__7106_7116;
var G__7124 = chunk__7107_7117;
var G__7125 = count__7108_7118;
var G__7126 = (i__7109_7119 + (1));
seq__7106_7116 = G__7123;
chunk__7107_7117 = G__7124;
count__7108_7118 = G__7125;
i__7109_7119 = G__7126;
continue;
} else {
var temp__4657__auto___7127 = cljs.core.seq.call(null,seq__7106_7116);
if(temp__4657__auto___7127){
var seq__7106_7128__$1 = temp__4657__auto___7127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7106_7128__$1)){
var c__5408__auto___7129 = cljs.core.chunk_first.call(null,seq__7106_7128__$1);
var G__7130 = cljs.core.chunk_rest.call(null,seq__7106_7128__$1);
var G__7131 = c__5408__auto___7129;
var G__7132 = cljs.core.count.call(null,c__5408__auto___7129);
var G__7133 = (0);
seq__7106_7116 = G__7130;
chunk__7107_7117 = G__7131;
count__7108_7118 = G__7132;
i__7109_7119 = G__7133;
continue;
} else {
var vec__7111_7134 = cljs.core.first.call(null,seq__7106_7128__$1);
var k_7135__$1 = cljs.core.nth.call(null,vec__7111_7134,(0),null);
var v_7136__$1 = cljs.core.nth.call(null,vec__7111_7134,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_7135__$1,v_7136__$1);

var G__7137 = cljs.core.next.call(null,seq__7106_7128__$1);
var G__7138 = null;
var G__7139 = (0);
var G__7140 = (0);
seq__7106_7116 = G__7137;
chunk__7107_7117 = G__7138;
count__7108_7118 = G__7139;
i__7109_7119 = G__7140;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq7098){
var G__7099 = cljs.core.first.call(null,seq7098);
var seq7098__$1 = cljs.core.next.call(null,seq7098);
var G__7100 = cljs.core.first.call(null,seq7098__$1);
var seq7098__$2 = cljs.core.next.call(null,seq7098__$1);
var G__7101 = cljs.core.first.call(null,seq7098__$2);
var seq7098__$3 = cljs.core.next.call(null,seq7098__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7099,G__7100,G__7101,seq7098__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args7141 = [];
var len__5663__auto___7151 = arguments.length;
var i__5664__auto___7152 = (0);
while(true){
if((i__5664__auto___7152 < len__5663__auto___7151)){
args7141.push((arguments[i__5664__auto___7152]));

var G__7153 = (i__5664__auto___7152 + (1));
i__5664__auto___7152 = G__7153;
continue;
} else {
}
break;
}

var G__7146 = args7141.length;
switch (G__7146) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5682__auto__ = (new cljs.core.IndexedSeq(args7141.slice((2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5682__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_7155__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_7155__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_7155__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__7147_7156 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__7148_7157 = null;
var count__7149_7158 = (0);
var i__7150_7159 = (0);
while(true){
if((i__7150_7159 < count__7149_7158)){
var k_7160__$1 = cljs.core._nth.call(null,chunk__7148_7157,i__7150_7159);
dommy.core.remove_attr_BANG_.call(null,elem,k_7160__$1);

var G__7161 = seq__7147_7156;
var G__7162 = chunk__7148_7157;
var G__7163 = count__7149_7158;
var G__7164 = (i__7150_7159 + (1));
seq__7147_7156 = G__7161;
chunk__7148_7157 = G__7162;
count__7149_7158 = G__7163;
i__7150_7159 = G__7164;
continue;
} else {
var temp__4657__auto___7165 = cljs.core.seq.call(null,seq__7147_7156);
if(temp__4657__auto___7165){
var seq__7147_7166__$1 = temp__4657__auto___7165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7147_7166__$1)){
var c__5408__auto___7167 = cljs.core.chunk_first.call(null,seq__7147_7166__$1);
var G__7168 = cljs.core.chunk_rest.call(null,seq__7147_7166__$1);
var G__7169 = c__5408__auto___7167;
var G__7170 = cljs.core.count.call(null,c__5408__auto___7167);
var G__7171 = (0);
seq__7147_7156 = G__7168;
chunk__7148_7157 = G__7169;
count__7149_7158 = G__7170;
i__7150_7159 = G__7171;
continue;
} else {
var k_7172__$1 = cljs.core.first.call(null,seq__7147_7166__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_7172__$1);

var G__7173 = cljs.core.next.call(null,seq__7147_7166__$1);
var G__7174 = null;
var G__7175 = (0);
var G__7176 = (0);
seq__7147_7156 = G__7173;
chunk__7148_7157 = G__7174;
count__7149_7158 = G__7175;
i__7150_7159 = G__7176;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq7142){
var G__7143 = cljs.core.first.call(null,seq7142);
var seq7142__$1 = cljs.core.next.call(null,seq7142);
var G__7144 = cljs.core.first.call(null,seq7142__$1);
var seq7142__$2 = cljs.core.next.call(null,seq7142__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7143,G__7144,seq7142__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args7177 = [];
var len__5663__auto___7180 = arguments.length;
var i__5664__auto___7181 = (0);
while(true){
if((i__5664__auto___7181 < len__5663__auto___7180)){
args7177.push((arguments[i__5664__auto___7181]));

var G__7182 = (i__5664__auto___7181 + (1));
i__5664__auto___7181 = G__7182;
continue;
} else {
}
break;
}

var G__7179 = args7177.length;
switch (G__7179) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7177.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args7184 = [];
var len__5663__auto___7202 = arguments.length;
var i__5664__auto___7203 = (0);
while(true){
if((i__5664__auto___7203 < len__5663__auto___7202)){
args7184.push((arguments[i__5664__auto___7203]));

var G__7204 = (i__5664__auto___7203 + (1));
i__5664__auto___7203 = G__7204;
continue;
} else {
}
break;
}

var G__7189 = args7184.length;
switch (G__7189) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5682__auto__ = (new cljs.core.IndexedSeq(args7184.slice((2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5682__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___7206 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___7206)){
var class_list_7207 = temp__4655__auto___7206;
var seq__7190_7208 = cljs.core.seq.call(null,classes__$1);
var chunk__7191_7209 = null;
var count__7192_7210 = (0);
var i__7193_7211 = (0);
while(true){
if((i__7193_7211 < count__7192_7210)){
var c_7212 = cljs.core._nth.call(null,chunk__7191_7209,i__7193_7211);
class_list_7207.add(c_7212);

var G__7213 = seq__7190_7208;
var G__7214 = chunk__7191_7209;
var G__7215 = count__7192_7210;
var G__7216 = (i__7193_7211 + (1));
seq__7190_7208 = G__7213;
chunk__7191_7209 = G__7214;
count__7192_7210 = G__7215;
i__7193_7211 = G__7216;
continue;
} else {
var temp__4657__auto___7217 = cljs.core.seq.call(null,seq__7190_7208);
if(temp__4657__auto___7217){
var seq__7190_7218__$1 = temp__4657__auto___7217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7190_7218__$1)){
var c__5408__auto___7219 = cljs.core.chunk_first.call(null,seq__7190_7218__$1);
var G__7220 = cljs.core.chunk_rest.call(null,seq__7190_7218__$1);
var G__7221 = c__5408__auto___7219;
var G__7222 = cljs.core.count.call(null,c__5408__auto___7219);
var G__7223 = (0);
seq__7190_7208 = G__7220;
chunk__7191_7209 = G__7221;
count__7192_7210 = G__7222;
i__7193_7211 = G__7223;
continue;
} else {
var c_7224 = cljs.core.first.call(null,seq__7190_7218__$1);
class_list_7207.add(c_7224);

var G__7225 = cljs.core.next.call(null,seq__7190_7218__$1);
var G__7226 = null;
var G__7227 = (0);
var G__7228 = (0);
seq__7190_7208 = G__7225;
chunk__7191_7209 = G__7226;
count__7192_7210 = G__7227;
i__7193_7211 = G__7228;
continue;
}
} else {
}
}
break;
}
} else {
var seq__7194_7229 = cljs.core.seq.call(null,classes__$1);
var chunk__7195_7230 = null;
var count__7196_7231 = (0);
var i__7197_7232 = (0);
while(true){
if((i__7197_7232 < count__7196_7231)){
var c_7233 = cljs.core._nth.call(null,chunk__7195_7230,i__7197_7232);
var class_name_7234 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_7234,c_7233))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_7234 === ""))?c_7233:[cljs.core.str(class_name_7234),cljs.core.str(" "),cljs.core.str(c_7233)].join('')));
}

var G__7235 = seq__7194_7229;
var G__7236 = chunk__7195_7230;
var G__7237 = count__7196_7231;
var G__7238 = (i__7197_7232 + (1));
seq__7194_7229 = G__7235;
chunk__7195_7230 = G__7236;
count__7196_7231 = G__7237;
i__7197_7232 = G__7238;
continue;
} else {
var temp__4657__auto___7239 = cljs.core.seq.call(null,seq__7194_7229);
if(temp__4657__auto___7239){
var seq__7194_7240__$1 = temp__4657__auto___7239;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7194_7240__$1)){
var c__5408__auto___7241 = cljs.core.chunk_first.call(null,seq__7194_7240__$1);
var G__7242 = cljs.core.chunk_rest.call(null,seq__7194_7240__$1);
var G__7243 = c__5408__auto___7241;
var G__7244 = cljs.core.count.call(null,c__5408__auto___7241);
var G__7245 = (0);
seq__7194_7229 = G__7242;
chunk__7195_7230 = G__7243;
count__7196_7231 = G__7244;
i__7197_7232 = G__7245;
continue;
} else {
var c_7246 = cljs.core.first.call(null,seq__7194_7240__$1);
var class_name_7247 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_7247,c_7246))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_7247 === ""))?c_7246:[cljs.core.str(class_name_7247),cljs.core.str(" "),cljs.core.str(c_7246)].join('')));
}

var G__7248 = cljs.core.next.call(null,seq__7194_7240__$1);
var G__7249 = null;
var G__7250 = (0);
var G__7251 = (0);
seq__7194_7229 = G__7248;
chunk__7195_7230 = G__7249;
count__7196_7231 = G__7250;
i__7197_7232 = G__7251;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__7198_7252 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__7199_7253 = null;
var count__7200_7254 = (0);
var i__7201_7255 = (0);
while(true){
if((i__7201_7255 < count__7200_7254)){
var c_7256 = cljs.core._nth.call(null,chunk__7199_7253,i__7201_7255);
dommy.core.add_class_BANG_.call(null,elem,c_7256);

var G__7257 = seq__7198_7252;
var G__7258 = chunk__7199_7253;
var G__7259 = count__7200_7254;
var G__7260 = (i__7201_7255 + (1));
seq__7198_7252 = G__7257;
chunk__7199_7253 = G__7258;
count__7200_7254 = G__7259;
i__7201_7255 = G__7260;
continue;
} else {
var temp__4657__auto___7261 = cljs.core.seq.call(null,seq__7198_7252);
if(temp__4657__auto___7261){
var seq__7198_7262__$1 = temp__4657__auto___7261;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7198_7262__$1)){
var c__5408__auto___7263 = cljs.core.chunk_first.call(null,seq__7198_7262__$1);
var G__7264 = cljs.core.chunk_rest.call(null,seq__7198_7262__$1);
var G__7265 = c__5408__auto___7263;
var G__7266 = cljs.core.count.call(null,c__5408__auto___7263);
var G__7267 = (0);
seq__7198_7252 = G__7264;
chunk__7199_7253 = G__7265;
count__7200_7254 = G__7266;
i__7201_7255 = G__7267;
continue;
} else {
var c_7268 = cljs.core.first.call(null,seq__7198_7262__$1);
dommy.core.add_class_BANG_.call(null,elem,c_7268);

var G__7269 = cljs.core.next.call(null,seq__7198_7262__$1);
var G__7270 = null;
var G__7271 = (0);
var G__7272 = (0);
seq__7198_7252 = G__7269;
chunk__7199_7253 = G__7270;
count__7200_7254 = G__7271;
i__7201_7255 = G__7272;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq7185){
var G__7186 = cljs.core.first.call(null,seq7185);
var seq7185__$1 = cljs.core.next.call(null,seq7185);
var G__7187 = cljs.core.first.call(null,seq7185__$1);
var seq7185__$2 = cljs.core.next.call(null,seq7185__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7186,G__7187,seq7185__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args7273 = [];
var len__5663__auto___7283 = arguments.length;
var i__5664__auto___7284 = (0);
while(true){
if((i__5664__auto___7284 < len__5663__auto___7283)){
args7273.push((arguments[i__5664__auto___7284]));

var G__7285 = (i__5664__auto___7284 + (1));
i__5664__auto___7284 = G__7285;
continue;
} else {
}
break;
}

var G__7278 = args7273.length;
switch (G__7278) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5682__auto__ = (new cljs.core.IndexedSeq(args7273.slice((2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5682__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___7287 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___7287)){
var class_list_7288 = temp__4655__auto___7287;
class_list_7288.remove(c__$1);
} else {
var class_name_7289 = dommy.core.class$.call(null,elem);
var new_class_name_7290 = dommy.utils.remove_class_str.call(null,class_name_7289,c__$1);
if((class_name_7289 === new_class_name_7290)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_7290);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__7279 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__7280 = null;
var count__7281 = (0);
var i__7282 = (0);
while(true){
if((i__7282 < count__7281)){
var c = cljs.core._nth.call(null,chunk__7280,i__7282);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__7291 = seq__7279;
var G__7292 = chunk__7280;
var G__7293 = count__7281;
var G__7294 = (i__7282 + (1));
seq__7279 = G__7291;
chunk__7280 = G__7292;
count__7281 = G__7293;
i__7282 = G__7294;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__7279);
if(temp__4657__auto__){
var seq__7279__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7279__$1)){
var c__5408__auto__ = cljs.core.chunk_first.call(null,seq__7279__$1);
var G__7295 = cljs.core.chunk_rest.call(null,seq__7279__$1);
var G__7296 = c__5408__auto__;
var G__7297 = cljs.core.count.call(null,c__5408__auto__);
var G__7298 = (0);
seq__7279 = G__7295;
chunk__7280 = G__7296;
count__7281 = G__7297;
i__7282 = G__7298;
continue;
} else {
var c = cljs.core.first.call(null,seq__7279__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__7299 = cljs.core.next.call(null,seq__7279__$1);
var G__7300 = null;
var G__7301 = (0);
var G__7302 = (0);
seq__7279 = G__7299;
chunk__7280 = G__7300;
count__7281 = G__7301;
i__7282 = G__7302;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq7274){
var G__7275 = cljs.core.first.call(null,seq7274);
var seq7274__$1 = cljs.core.next.call(null,seq7274);
var G__7276 = cljs.core.first.call(null,seq7274__$1);
var seq7274__$2 = cljs.core.next.call(null,seq7274__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7275,G__7276,seq7274__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args7303 = [];
var len__5663__auto___7306 = arguments.length;
var i__5664__auto___7307 = (0);
while(true){
if((i__5664__auto___7307 < len__5663__auto___7306)){
args7303.push((arguments[i__5664__auto___7307]));

var G__7308 = (i__5664__auto___7307 + (1));
i__5664__auto___7307 = G__7308;
continue;
} else {
}
break;
}

var G__7305 = args7303.length;
switch (G__7305) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7303.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___7310 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___7310)){
var class_list_7311 = temp__4655__auto___7310;
class_list_7311.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args7312 = [];
var len__5663__auto___7315 = arguments.length;
var i__5664__auto___7316 = (0);
while(true){
if((i__5664__auto___7316 < len__5663__auto___7315)){
args7312.push((arguments[i__5664__auto___7316]));

var G__7317 = (i__5664__auto___7316 + (1));
i__5664__auto___7316 = G__7317;
continue;
} else {
}
break;
}

var G__7314 = args7312.length;
switch (G__7314) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7312.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args7319 = [];
var len__5663__auto___7322 = arguments.length;
var i__5664__auto___7323 = (0);
while(true){
if((i__5664__auto___7323 < len__5663__auto___7322)){
args7319.push((arguments[i__5664__auto___7323]));

var G__7324 = (i__5664__auto___7323 + (1));
i__5664__auto___7323 = G__7324;
continue;
} else {
}
break;
}

var G__7321 = args7319.length;
switch (G__7321) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7319.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;
dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args7326 = [];
var len__5663__auto___7337 = arguments.length;
var i__5664__auto___7338 = (0);
while(true){
if((i__5664__auto___7338 < len__5663__auto___7337)){
args7326.push((arguments[i__5664__auto___7338]));

var G__7339 = (i__5664__auto___7338 + (1));
i__5664__auto___7338 = G__7339;
continue;
} else {
}
break;
}

var G__7331 = args7326.length;
switch (G__7331) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5682__auto__ = (new cljs.core.IndexedSeq(args7326.slice((2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5682__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__7332 = parent;
G__7332.appendChild(child);

return G__7332;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__7333_7341 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__7334_7342 = null;
var count__7335_7343 = (0);
var i__7336_7344 = (0);
while(true){
if((i__7336_7344 < count__7335_7343)){
var c_7345 = cljs.core._nth.call(null,chunk__7334_7342,i__7336_7344);
dommy.core.append_BANG_.call(null,parent,c_7345);

var G__7346 = seq__7333_7341;
var G__7347 = chunk__7334_7342;
var G__7348 = count__7335_7343;
var G__7349 = (i__7336_7344 + (1));
seq__7333_7341 = G__7346;
chunk__7334_7342 = G__7347;
count__7335_7343 = G__7348;
i__7336_7344 = G__7349;
continue;
} else {
var temp__4657__auto___7350 = cljs.core.seq.call(null,seq__7333_7341);
if(temp__4657__auto___7350){
var seq__7333_7351__$1 = temp__4657__auto___7350;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7333_7351__$1)){
var c__5408__auto___7352 = cljs.core.chunk_first.call(null,seq__7333_7351__$1);
var G__7353 = cljs.core.chunk_rest.call(null,seq__7333_7351__$1);
var G__7354 = c__5408__auto___7352;
var G__7355 = cljs.core.count.call(null,c__5408__auto___7352);
var G__7356 = (0);
seq__7333_7341 = G__7353;
chunk__7334_7342 = G__7354;
count__7335_7343 = G__7355;
i__7336_7344 = G__7356;
continue;
} else {
var c_7357 = cljs.core.first.call(null,seq__7333_7351__$1);
dommy.core.append_BANG_.call(null,parent,c_7357);

var G__7358 = cljs.core.next.call(null,seq__7333_7351__$1);
var G__7359 = null;
var G__7360 = (0);
var G__7361 = (0);
seq__7333_7341 = G__7358;
chunk__7334_7342 = G__7359;
count__7335_7343 = G__7360;
i__7336_7344 = G__7361;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq7327){
var G__7328 = cljs.core.first.call(null,seq7327);
var seq7327__$1 = cljs.core.next.call(null,seq7327);
var G__7329 = cljs.core.first.call(null,seq7327__$1);
var seq7327__$2 = cljs.core.next.call(null,seq7327__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7328,G__7329,seq7327__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args7362 = [];
var len__5663__auto___7373 = arguments.length;
var i__5664__auto___7374 = (0);
while(true){
if((i__5664__auto___7374 < len__5663__auto___7373)){
args7362.push((arguments[i__5664__auto___7374]));

var G__7375 = (i__5664__auto___7374 + (1));
i__5664__auto___7374 = G__7375;
continue;
} else {
}
break;
}

var G__7367 = args7362.length;
switch (G__7367) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5682__auto__ = (new cljs.core.IndexedSeq(args7362.slice((2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5682__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__7368 = parent;
G__7368.insertBefore(child,parent.firstChild);

return G__7368;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__7369_7377 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__7370_7378 = null;
var count__7371_7379 = (0);
var i__7372_7380 = (0);
while(true){
if((i__7372_7380 < count__7371_7379)){
var c_7381 = cljs.core._nth.call(null,chunk__7370_7378,i__7372_7380);
dommy.core.prepend_BANG_.call(null,parent,c_7381);

var G__7382 = seq__7369_7377;
var G__7383 = chunk__7370_7378;
var G__7384 = count__7371_7379;
var G__7385 = (i__7372_7380 + (1));
seq__7369_7377 = G__7382;
chunk__7370_7378 = G__7383;
count__7371_7379 = G__7384;
i__7372_7380 = G__7385;
continue;
} else {
var temp__4657__auto___7386 = cljs.core.seq.call(null,seq__7369_7377);
if(temp__4657__auto___7386){
var seq__7369_7387__$1 = temp__4657__auto___7386;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7369_7387__$1)){
var c__5408__auto___7388 = cljs.core.chunk_first.call(null,seq__7369_7387__$1);
var G__7389 = cljs.core.chunk_rest.call(null,seq__7369_7387__$1);
var G__7390 = c__5408__auto___7388;
var G__7391 = cljs.core.count.call(null,c__5408__auto___7388);
var G__7392 = (0);
seq__7369_7377 = G__7389;
chunk__7370_7378 = G__7390;
count__7371_7379 = G__7391;
i__7372_7380 = G__7392;
continue;
} else {
var c_7393 = cljs.core.first.call(null,seq__7369_7387__$1);
dommy.core.prepend_BANG_.call(null,parent,c_7393);

var G__7394 = cljs.core.next.call(null,seq__7369_7387__$1);
var G__7395 = null;
var G__7396 = (0);
var G__7397 = (0);
seq__7369_7377 = G__7394;
chunk__7370_7378 = G__7395;
count__7371_7379 = G__7396;
i__7372_7380 = G__7397;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq7363){
var G__7364 = cljs.core.first.call(null,seq7363);
var seq7363__$1 = cljs.core.next.call(null,seq7363);
var G__7365 = cljs.core.first.call(null,seq7363__$1);
var seq7363__$2 = cljs.core.next.call(null,seq7363__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7364,G__7365,seq7363__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___7398 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___7398)){
var next_7399 = temp__4655__auto___7398;
dommy.core.insert_before_BANG_.call(null,elem,next_7399);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args7400 = [];
var len__5663__auto___7404 = arguments.length;
var i__5664__auto___7405 = (0);
while(true){
if((i__5664__auto___7405 < len__5663__auto___7404)){
args7400.push((arguments[i__5664__auto___7405]));

var G__7406 = (i__5664__auto___7405 + (1));
i__5664__auto___7405 = G__7406;
continue;
} else {
}
break;
}

var G__7402 = args7400.length;
switch (G__7402) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7400.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__7403 = p;
G__7403.removeChild(elem);

return G__7403;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__7408){
var vec__7409 = p__7408;
var special_mouse_event = cljs.core.nth.call(null,vec__7409,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__7409,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__7409,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__7409,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4605__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4605__auto__)){
return or__4605__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4593__auto__ = related_target;
if(cljs.core.truth_(and__4593__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__4593__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__7409,special_mouse_event,real_mouse_event))
});})(vec__7409,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4593__auto__ = selected_target;
if(cljs.core.truth_(and__4593__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4593__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4605__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4605__auto__)){
return or__4605__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__5670__auto__ = [];
var len__5663__auto___7413 = arguments.length;
var i__5664__auto___7414 = (0);
while(true){
if((i__5664__auto___7414 < len__5663__auto___7413)){
args__5670__auto__.push((arguments[i__5664__auto___7414]));

var G__7415 = (i__5664__auto___7414 + (1));
i__5664__auto___7414 = G__7415;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((2) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((2)),(0))):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5671__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq7410){
var G__7411 = cljs.core.first.call(null,seq7410);
var seq7410__$1 = cljs.core.next.call(null,seq7410);
var G__7412 = cljs.core.first.call(null,seq7410__$1);
var seq7410__$2 = cljs.core.next.call(null,seq7410__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7411,G__7412,seq7410__$2);
});
dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__5670__auto__ = [];
var len__5663__auto___7441 = arguments.length;
var i__5664__auto___7442 = (0);
while(true){
if((i__5664__auto___7442 < len__5663__auto___7441)){
args__5670__auto__.push((arguments[i__5664__auto___7442]));

var G__7443 = (i__5664__auto___7442 + (1));
i__5664__auto___7442 = G__7443;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__7418_7444 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_7445 = cljs.core.nth.call(null,vec__7418_7444,(0),null);
var selector_7446 = cljs.core.nth.call(null,vec__7418_7444,(1),null);
var seq__7419_7447 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__7426_7448 = null;
var count__7427_7449 = (0);
var i__7428_7450 = (0);
while(true){
if((i__7428_7450 < count__7427_7449)){
var vec__7435_7451 = cljs.core._nth.call(null,chunk__7426_7448,i__7428_7450);
var orig_type_7452 = cljs.core.nth.call(null,vec__7435_7451,(0),null);
var f_7453 = cljs.core.nth.call(null,vec__7435_7451,(1),null);
var seq__7429_7454 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7452,cljs.core.PersistentArrayMap.fromArray([orig_type_7452,cljs.core.identity], true, false)));
var chunk__7431_7455 = null;
var count__7432_7456 = (0);
var i__7433_7457 = (0);
while(true){
if((i__7433_7457 < count__7432_7456)){
var vec__7436_7458 = cljs.core._nth.call(null,chunk__7431_7455,i__7433_7457);
var actual_type_7459 = cljs.core.nth.call(null,vec__7436_7458,(0),null);
var factory_7460 = cljs.core.nth.call(null,vec__7436_7458,(1),null);
var canonical_f_7461 = (cljs.core.truth_(selector_7446)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7445,selector_7446):cljs.core.identity).call(null,factory_7460.call(null,f_7453));
dommy.core.update_event_listeners_BANG_.call(null,elem_7445,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7446,actual_type_7459,f_7453], null),canonical_f_7461);

if(cljs.core.truth_(elem_7445.addEventListener)){
elem_7445.addEventListener(cljs.core.name.call(null,actual_type_7459),canonical_f_7461);
} else {
elem_7445.attachEvent(cljs.core.name.call(null,actual_type_7459),canonical_f_7461);
}

var G__7462 = seq__7429_7454;
var G__7463 = chunk__7431_7455;
var G__7464 = count__7432_7456;
var G__7465 = (i__7433_7457 + (1));
seq__7429_7454 = G__7462;
chunk__7431_7455 = G__7463;
count__7432_7456 = G__7464;
i__7433_7457 = G__7465;
continue;
} else {
var temp__4657__auto___7466 = cljs.core.seq.call(null,seq__7429_7454);
if(temp__4657__auto___7466){
var seq__7429_7467__$1 = temp__4657__auto___7466;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7429_7467__$1)){
var c__5408__auto___7468 = cljs.core.chunk_first.call(null,seq__7429_7467__$1);
var G__7469 = cljs.core.chunk_rest.call(null,seq__7429_7467__$1);
var G__7470 = c__5408__auto___7468;
var G__7471 = cljs.core.count.call(null,c__5408__auto___7468);
var G__7472 = (0);
seq__7429_7454 = G__7469;
chunk__7431_7455 = G__7470;
count__7432_7456 = G__7471;
i__7433_7457 = G__7472;
continue;
} else {
var vec__7437_7473 = cljs.core.first.call(null,seq__7429_7467__$1);
var actual_type_7474 = cljs.core.nth.call(null,vec__7437_7473,(0),null);
var factory_7475 = cljs.core.nth.call(null,vec__7437_7473,(1),null);
var canonical_f_7476 = (cljs.core.truth_(selector_7446)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7445,selector_7446):cljs.core.identity).call(null,factory_7475.call(null,f_7453));
dommy.core.update_event_listeners_BANG_.call(null,elem_7445,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7446,actual_type_7474,f_7453], null),canonical_f_7476);

if(cljs.core.truth_(elem_7445.addEventListener)){
elem_7445.addEventListener(cljs.core.name.call(null,actual_type_7474),canonical_f_7476);
} else {
elem_7445.attachEvent(cljs.core.name.call(null,actual_type_7474),canonical_f_7476);
}

var G__7477 = cljs.core.next.call(null,seq__7429_7467__$1);
var G__7478 = null;
var G__7479 = (0);
var G__7480 = (0);
seq__7429_7454 = G__7477;
chunk__7431_7455 = G__7478;
count__7432_7456 = G__7479;
i__7433_7457 = G__7480;
continue;
}
} else {
}
}
break;
}

var G__7481 = seq__7419_7447;
var G__7482 = chunk__7426_7448;
var G__7483 = count__7427_7449;
var G__7484 = (i__7428_7450 + (1));
seq__7419_7447 = G__7481;
chunk__7426_7448 = G__7482;
count__7427_7449 = G__7483;
i__7428_7450 = G__7484;
continue;
} else {
var temp__4657__auto___7485 = cljs.core.seq.call(null,seq__7419_7447);
if(temp__4657__auto___7485){
var seq__7419_7486__$1 = temp__4657__auto___7485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7419_7486__$1)){
var c__5408__auto___7487 = cljs.core.chunk_first.call(null,seq__7419_7486__$1);
var G__7488 = cljs.core.chunk_rest.call(null,seq__7419_7486__$1);
var G__7489 = c__5408__auto___7487;
var G__7490 = cljs.core.count.call(null,c__5408__auto___7487);
var G__7491 = (0);
seq__7419_7447 = G__7488;
chunk__7426_7448 = G__7489;
count__7427_7449 = G__7490;
i__7428_7450 = G__7491;
continue;
} else {
var vec__7438_7492 = cljs.core.first.call(null,seq__7419_7486__$1);
var orig_type_7493 = cljs.core.nth.call(null,vec__7438_7492,(0),null);
var f_7494 = cljs.core.nth.call(null,vec__7438_7492,(1),null);
var seq__7420_7495 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7493,cljs.core.PersistentArrayMap.fromArray([orig_type_7493,cljs.core.identity], true, false)));
var chunk__7422_7496 = null;
var count__7423_7497 = (0);
var i__7424_7498 = (0);
while(true){
if((i__7424_7498 < count__7423_7497)){
var vec__7439_7499 = cljs.core._nth.call(null,chunk__7422_7496,i__7424_7498);
var actual_type_7500 = cljs.core.nth.call(null,vec__7439_7499,(0),null);
var factory_7501 = cljs.core.nth.call(null,vec__7439_7499,(1),null);
var canonical_f_7502 = (cljs.core.truth_(selector_7446)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7445,selector_7446):cljs.core.identity).call(null,factory_7501.call(null,f_7494));
dommy.core.update_event_listeners_BANG_.call(null,elem_7445,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7446,actual_type_7500,f_7494], null),canonical_f_7502);

if(cljs.core.truth_(elem_7445.addEventListener)){
elem_7445.addEventListener(cljs.core.name.call(null,actual_type_7500),canonical_f_7502);
} else {
elem_7445.attachEvent(cljs.core.name.call(null,actual_type_7500),canonical_f_7502);
}

var G__7503 = seq__7420_7495;
var G__7504 = chunk__7422_7496;
var G__7505 = count__7423_7497;
var G__7506 = (i__7424_7498 + (1));
seq__7420_7495 = G__7503;
chunk__7422_7496 = G__7504;
count__7423_7497 = G__7505;
i__7424_7498 = G__7506;
continue;
} else {
var temp__4657__auto___7507__$1 = cljs.core.seq.call(null,seq__7420_7495);
if(temp__4657__auto___7507__$1){
var seq__7420_7508__$1 = temp__4657__auto___7507__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7420_7508__$1)){
var c__5408__auto___7509 = cljs.core.chunk_first.call(null,seq__7420_7508__$1);
var G__7510 = cljs.core.chunk_rest.call(null,seq__7420_7508__$1);
var G__7511 = c__5408__auto___7509;
var G__7512 = cljs.core.count.call(null,c__5408__auto___7509);
var G__7513 = (0);
seq__7420_7495 = G__7510;
chunk__7422_7496 = G__7511;
count__7423_7497 = G__7512;
i__7424_7498 = G__7513;
continue;
} else {
var vec__7440_7514 = cljs.core.first.call(null,seq__7420_7508__$1);
var actual_type_7515 = cljs.core.nth.call(null,vec__7440_7514,(0),null);
var factory_7516 = cljs.core.nth.call(null,vec__7440_7514,(1),null);
var canonical_f_7517 = (cljs.core.truth_(selector_7446)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7445,selector_7446):cljs.core.identity).call(null,factory_7516.call(null,f_7494));
dommy.core.update_event_listeners_BANG_.call(null,elem_7445,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7446,actual_type_7515,f_7494], null),canonical_f_7517);

if(cljs.core.truth_(elem_7445.addEventListener)){
elem_7445.addEventListener(cljs.core.name.call(null,actual_type_7515),canonical_f_7517);
} else {
elem_7445.attachEvent(cljs.core.name.call(null,actual_type_7515),canonical_f_7517);
}

var G__7518 = cljs.core.next.call(null,seq__7420_7508__$1);
var G__7519 = null;
var G__7520 = (0);
var G__7521 = (0);
seq__7420_7495 = G__7518;
chunk__7422_7496 = G__7519;
count__7423_7497 = G__7520;
i__7424_7498 = G__7521;
continue;
}
} else {
}
}
break;
}

var G__7522 = cljs.core.next.call(null,seq__7419_7486__$1);
var G__7523 = null;
var G__7524 = (0);
var G__7525 = (0);
seq__7419_7447 = G__7522;
chunk__7426_7448 = G__7523;
count__7427_7449 = G__7524;
i__7428_7450 = G__7525;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq7416){
var G__7417 = cljs.core.first.call(null,seq7416);
var seq7416__$1 = cljs.core.next.call(null,seq7416);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7417,seq7416__$1);
});
/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__5670__auto__ = [];
var len__5663__auto___7551 = arguments.length;
var i__5664__auto___7552 = (0);
while(true){
if((i__5664__auto___7552 < len__5663__auto___7551)){
args__5670__auto__.push((arguments[i__5664__auto___7552]));

var G__7553 = (i__5664__auto___7552 + (1));
i__5664__auto___7552 = G__7553;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__7528_7554 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_7555 = cljs.core.nth.call(null,vec__7528_7554,(0),null);
var selector_7556 = cljs.core.nth.call(null,vec__7528_7554,(1),null);
var seq__7529_7557 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__7536_7558 = null;
var count__7537_7559 = (0);
var i__7538_7560 = (0);
while(true){
if((i__7538_7560 < count__7537_7559)){
var vec__7545_7561 = cljs.core._nth.call(null,chunk__7536_7558,i__7538_7560);
var orig_type_7562 = cljs.core.nth.call(null,vec__7545_7561,(0),null);
var f_7563 = cljs.core.nth.call(null,vec__7545_7561,(1),null);
var seq__7539_7564 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7562,cljs.core.PersistentArrayMap.fromArray([orig_type_7562,cljs.core.identity], true, false)));
var chunk__7541_7565 = null;
var count__7542_7566 = (0);
var i__7543_7567 = (0);
while(true){
if((i__7543_7567 < count__7542_7566)){
var vec__7546_7568 = cljs.core._nth.call(null,chunk__7541_7565,i__7543_7567);
var actual_type_7569 = cljs.core.nth.call(null,vec__7546_7568,(0),null);
var __7570 = cljs.core.nth.call(null,vec__7546_7568,(1),null);
var keys_7571 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7556,actual_type_7569,f_7563], null);
var canonical_f_7572 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7555),keys_7571);
dommy.core.update_event_listeners_BANG_.call(null,elem_7555,dommy.utils.dissoc_in,keys_7571);

if(cljs.core.truth_(elem_7555.removeEventListener)){
elem_7555.removeEventListener(cljs.core.name.call(null,actual_type_7569),canonical_f_7572);
} else {
elem_7555.detachEvent(cljs.core.name.call(null,actual_type_7569),canonical_f_7572);
}

var G__7573 = seq__7539_7564;
var G__7574 = chunk__7541_7565;
var G__7575 = count__7542_7566;
var G__7576 = (i__7543_7567 + (1));
seq__7539_7564 = G__7573;
chunk__7541_7565 = G__7574;
count__7542_7566 = G__7575;
i__7543_7567 = G__7576;
continue;
} else {
var temp__4657__auto___7577 = cljs.core.seq.call(null,seq__7539_7564);
if(temp__4657__auto___7577){
var seq__7539_7578__$1 = temp__4657__auto___7577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7539_7578__$1)){
var c__5408__auto___7579 = cljs.core.chunk_first.call(null,seq__7539_7578__$1);
var G__7580 = cljs.core.chunk_rest.call(null,seq__7539_7578__$1);
var G__7581 = c__5408__auto___7579;
var G__7582 = cljs.core.count.call(null,c__5408__auto___7579);
var G__7583 = (0);
seq__7539_7564 = G__7580;
chunk__7541_7565 = G__7581;
count__7542_7566 = G__7582;
i__7543_7567 = G__7583;
continue;
} else {
var vec__7547_7584 = cljs.core.first.call(null,seq__7539_7578__$1);
var actual_type_7585 = cljs.core.nth.call(null,vec__7547_7584,(0),null);
var __7586 = cljs.core.nth.call(null,vec__7547_7584,(1),null);
var keys_7587 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7556,actual_type_7585,f_7563], null);
var canonical_f_7588 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7555),keys_7587);
dommy.core.update_event_listeners_BANG_.call(null,elem_7555,dommy.utils.dissoc_in,keys_7587);

if(cljs.core.truth_(elem_7555.removeEventListener)){
elem_7555.removeEventListener(cljs.core.name.call(null,actual_type_7585),canonical_f_7588);
} else {
elem_7555.detachEvent(cljs.core.name.call(null,actual_type_7585),canonical_f_7588);
}

var G__7589 = cljs.core.next.call(null,seq__7539_7578__$1);
var G__7590 = null;
var G__7591 = (0);
var G__7592 = (0);
seq__7539_7564 = G__7589;
chunk__7541_7565 = G__7590;
count__7542_7566 = G__7591;
i__7543_7567 = G__7592;
continue;
}
} else {
}
}
break;
}

var G__7593 = seq__7529_7557;
var G__7594 = chunk__7536_7558;
var G__7595 = count__7537_7559;
var G__7596 = (i__7538_7560 + (1));
seq__7529_7557 = G__7593;
chunk__7536_7558 = G__7594;
count__7537_7559 = G__7595;
i__7538_7560 = G__7596;
continue;
} else {
var temp__4657__auto___7597 = cljs.core.seq.call(null,seq__7529_7557);
if(temp__4657__auto___7597){
var seq__7529_7598__$1 = temp__4657__auto___7597;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7529_7598__$1)){
var c__5408__auto___7599 = cljs.core.chunk_first.call(null,seq__7529_7598__$1);
var G__7600 = cljs.core.chunk_rest.call(null,seq__7529_7598__$1);
var G__7601 = c__5408__auto___7599;
var G__7602 = cljs.core.count.call(null,c__5408__auto___7599);
var G__7603 = (0);
seq__7529_7557 = G__7600;
chunk__7536_7558 = G__7601;
count__7537_7559 = G__7602;
i__7538_7560 = G__7603;
continue;
} else {
var vec__7548_7604 = cljs.core.first.call(null,seq__7529_7598__$1);
var orig_type_7605 = cljs.core.nth.call(null,vec__7548_7604,(0),null);
var f_7606 = cljs.core.nth.call(null,vec__7548_7604,(1),null);
var seq__7530_7607 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7605,cljs.core.PersistentArrayMap.fromArray([orig_type_7605,cljs.core.identity], true, false)));
var chunk__7532_7608 = null;
var count__7533_7609 = (0);
var i__7534_7610 = (0);
while(true){
if((i__7534_7610 < count__7533_7609)){
var vec__7549_7611 = cljs.core._nth.call(null,chunk__7532_7608,i__7534_7610);
var actual_type_7612 = cljs.core.nth.call(null,vec__7549_7611,(0),null);
var __7613 = cljs.core.nth.call(null,vec__7549_7611,(1),null);
var keys_7614 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7556,actual_type_7612,f_7606], null);
var canonical_f_7615 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7555),keys_7614);
dommy.core.update_event_listeners_BANG_.call(null,elem_7555,dommy.utils.dissoc_in,keys_7614);

if(cljs.core.truth_(elem_7555.removeEventListener)){
elem_7555.removeEventListener(cljs.core.name.call(null,actual_type_7612),canonical_f_7615);
} else {
elem_7555.detachEvent(cljs.core.name.call(null,actual_type_7612),canonical_f_7615);
}

var G__7616 = seq__7530_7607;
var G__7617 = chunk__7532_7608;
var G__7618 = count__7533_7609;
var G__7619 = (i__7534_7610 + (1));
seq__7530_7607 = G__7616;
chunk__7532_7608 = G__7617;
count__7533_7609 = G__7618;
i__7534_7610 = G__7619;
continue;
} else {
var temp__4657__auto___7620__$1 = cljs.core.seq.call(null,seq__7530_7607);
if(temp__4657__auto___7620__$1){
var seq__7530_7621__$1 = temp__4657__auto___7620__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7530_7621__$1)){
var c__5408__auto___7622 = cljs.core.chunk_first.call(null,seq__7530_7621__$1);
var G__7623 = cljs.core.chunk_rest.call(null,seq__7530_7621__$1);
var G__7624 = c__5408__auto___7622;
var G__7625 = cljs.core.count.call(null,c__5408__auto___7622);
var G__7626 = (0);
seq__7530_7607 = G__7623;
chunk__7532_7608 = G__7624;
count__7533_7609 = G__7625;
i__7534_7610 = G__7626;
continue;
} else {
var vec__7550_7627 = cljs.core.first.call(null,seq__7530_7621__$1);
var actual_type_7628 = cljs.core.nth.call(null,vec__7550_7627,(0),null);
var __7629 = cljs.core.nth.call(null,vec__7550_7627,(1),null);
var keys_7630 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7556,actual_type_7628,f_7606], null);
var canonical_f_7631 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7555),keys_7630);
dommy.core.update_event_listeners_BANG_.call(null,elem_7555,dommy.utils.dissoc_in,keys_7630);

if(cljs.core.truth_(elem_7555.removeEventListener)){
elem_7555.removeEventListener(cljs.core.name.call(null,actual_type_7628),canonical_f_7631);
} else {
elem_7555.detachEvent(cljs.core.name.call(null,actual_type_7628),canonical_f_7631);
}

var G__7632 = cljs.core.next.call(null,seq__7530_7621__$1);
var G__7633 = null;
var G__7634 = (0);
var G__7635 = (0);
seq__7530_7607 = G__7632;
chunk__7532_7608 = G__7633;
count__7533_7609 = G__7634;
i__7534_7610 = G__7635;
continue;
}
} else {
}
}
break;
}

var G__7636 = cljs.core.next.call(null,seq__7529_7598__$1);
var G__7637 = null;
var G__7638 = (0);
var G__7639 = (0);
seq__7529_7557 = G__7636;
chunk__7536_7558 = G__7637;
count__7537_7559 = G__7638;
i__7538_7560 = G__7639;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq7526){
var G__7527 = cljs.core.first.call(null,seq7526);
var seq7526__$1 = cljs.core.next.call(null,seq7526);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7527,seq7526__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__5670__auto__ = [];
var len__5663__auto___7649 = arguments.length;
var i__5664__auto___7650 = (0);
while(true){
if((i__5664__auto___7650 < len__5663__auto___7649)){
args__5670__auto__.push((arguments[i__5664__auto___7650]));

var G__7651 = (i__5664__auto___7650 + (1));
i__5664__auto___7650 = G__7651;
continue;
} else {
}
break;
}

var argseq__5671__auto__ = ((((1) < args__5670__auto__.length))?(new cljs.core.IndexedSeq(args__5670__auto__.slice((1)),(0))):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5671__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__7642_7652 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_7653 = cljs.core.nth.call(null,vec__7642_7652,(0),null);
var selector_7654 = cljs.core.nth.call(null,vec__7642_7652,(1),null);
var seq__7643_7655 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__7644_7656 = null;
var count__7645_7657 = (0);
var i__7646_7658 = (0);
while(true){
if((i__7646_7658 < count__7645_7657)){
var vec__7647_7659 = cljs.core._nth.call(null,chunk__7644_7656,i__7646_7658);
var type_7660 = cljs.core.nth.call(null,vec__7647_7659,(0),null);
var f_7661 = cljs.core.nth.call(null,vec__7647_7659,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_7660,((function (seq__7643_7655,chunk__7644_7656,count__7645_7657,i__7646_7658,vec__7647_7659,type_7660,f_7661,vec__7642_7652,elem_7653,selector_7654){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_7660,dommy$core$this_fn);

return f_7661.call(null,e);
});})(seq__7643_7655,chunk__7644_7656,count__7645_7657,i__7646_7658,vec__7647_7659,type_7660,f_7661,vec__7642_7652,elem_7653,selector_7654))
);

var G__7662 = seq__7643_7655;
var G__7663 = chunk__7644_7656;
var G__7664 = count__7645_7657;
var G__7665 = (i__7646_7658 + (1));
seq__7643_7655 = G__7662;
chunk__7644_7656 = G__7663;
count__7645_7657 = G__7664;
i__7646_7658 = G__7665;
continue;
} else {
var temp__4657__auto___7666 = cljs.core.seq.call(null,seq__7643_7655);
if(temp__4657__auto___7666){
var seq__7643_7667__$1 = temp__4657__auto___7666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7643_7667__$1)){
var c__5408__auto___7668 = cljs.core.chunk_first.call(null,seq__7643_7667__$1);
var G__7669 = cljs.core.chunk_rest.call(null,seq__7643_7667__$1);
var G__7670 = c__5408__auto___7668;
var G__7671 = cljs.core.count.call(null,c__5408__auto___7668);
var G__7672 = (0);
seq__7643_7655 = G__7669;
chunk__7644_7656 = G__7670;
count__7645_7657 = G__7671;
i__7646_7658 = G__7672;
continue;
} else {
var vec__7648_7673 = cljs.core.first.call(null,seq__7643_7667__$1);
var type_7674 = cljs.core.nth.call(null,vec__7648_7673,(0),null);
var f_7675 = cljs.core.nth.call(null,vec__7648_7673,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_7674,((function (seq__7643_7655,chunk__7644_7656,count__7645_7657,i__7646_7658,vec__7648_7673,type_7674,f_7675,seq__7643_7667__$1,temp__4657__auto___7666,vec__7642_7652,elem_7653,selector_7654){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_7674,dommy$core$this_fn);

return f_7675.call(null,e);
});})(seq__7643_7655,chunk__7644_7656,count__7645_7657,i__7646_7658,vec__7648_7673,type_7674,f_7675,seq__7643_7667__$1,temp__4657__auto___7666,vec__7642_7652,elem_7653,selector_7654))
);

var G__7676 = cljs.core.next.call(null,seq__7643_7667__$1);
var G__7677 = null;
var G__7678 = (0);
var G__7679 = (0);
seq__7643_7655 = G__7676;
chunk__7644_7656 = G__7677;
count__7645_7657 = G__7678;
i__7646_7658 = G__7679;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq7640){
var G__7641 = cljs.core.first.call(null,seq7640);
var seq7640__$1 = cljs.core.next.call(null,seq7640);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7641,seq7640__$1);
});

//# sourceMappingURL=core.js.map