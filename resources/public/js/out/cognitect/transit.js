// Compiled by ClojureScript 1.7.122 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__6784_6788 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__6785_6789 = null;
var count__6786_6790 = (0);
var i__6787_6791 = (0);
while(true){
if((i__6787_6791 < count__6786_6790)){
var k_6792 = cljs.core._nth.call(null,chunk__6785_6789,i__6787_6791);
var v_6793 = (b[k_6792]);
(a[k_6792] = v_6793);

var G__6794 = seq__6784_6788;
var G__6795 = chunk__6785_6789;
var G__6796 = count__6786_6790;
var G__6797 = (i__6787_6791 + (1));
seq__6784_6788 = G__6794;
chunk__6785_6789 = G__6795;
count__6786_6790 = G__6796;
i__6787_6791 = G__6797;
continue;
} else {
var temp__4657__auto___6798 = cljs.core.seq.call(null,seq__6784_6788);
if(temp__4657__auto___6798){
var seq__6784_6799__$1 = temp__4657__auto___6798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6784_6799__$1)){
var c__5408__auto___6800 = cljs.core.chunk_first.call(null,seq__6784_6799__$1);
var G__6801 = cljs.core.chunk_rest.call(null,seq__6784_6799__$1);
var G__6802 = c__5408__auto___6800;
var G__6803 = cljs.core.count.call(null,c__5408__auto___6800);
var G__6804 = (0);
seq__6784_6788 = G__6801;
chunk__6785_6789 = G__6802;
count__6786_6790 = G__6803;
i__6787_6791 = G__6804;
continue;
} else {
var k_6805 = cljs.core.first.call(null,seq__6784_6799__$1);
var v_6806 = (b[k_6805]);
(a[k_6805] = v_6806);

var G__6807 = cljs.core.next.call(null,seq__6784_6799__$1);
var G__6808 = null;
var G__6809 = (0);
var G__6810 = (0);
seq__6784_6788 = G__6807;
chunk__6785_6789 = G__6808;
count__6786_6790 = G__6809;
i__6787_6791 = G__6810;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__5203__auto__,writer__5204__auto__,opt__5205__auto__){
return cljs.core._write.call(null,writer__5204__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__5203__auto__,writer__5204__auto__,opt__5205__auto__){
return cljs.core._write.call(null,writer__5204__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args6811 = [];
var len__5663__auto___6814 = arguments.length;
var i__5664__auto___6815 = (0);
while(true){
if((i__5664__auto___6815 < len__5663__auto___6814)){
args6811.push((arguments[i__5664__auto___6815]));

var G__6816 = (i__5664__auto___6815 + (1));
i__5664__auto___6815 = G__6816;
continue;
} else {
}
break;
}

var G__6813 = args6811.length;
switch (G__6813) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6811.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__6818 = (i + (2));
var G__6819 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__6818;
ret = G__6819;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__5203__auto__,writer__5204__auto__,opt__5205__auto__){
return cljs.core._write.call(null,writer__5204__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__5203__auto__,writer__5204__auto__,opt__5205__auto__){
return cljs.core._write.call(null,writer__5204__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__6820_6824 = cljs.core.seq.call(null,v);
var chunk__6821_6825 = null;
var count__6822_6826 = (0);
var i__6823_6827 = (0);
while(true){
if((i__6823_6827 < count__6822_6826)){
var x_6828 = cljs.core._nth.call(null,chunk__6821_6825,i__6823_6827);
ret.push(x_6828);

var G__6829 = seq__6820_6824;
var G__6830 = chunk__6821_6825;
var G__6831 = count__6822_6826;
var G__6832 = (i__6823_6827 + (1));
seq__6820_6824 = G__6829;
chunk__6821_6825 = G__6830;
count__6822_6826 = G__6831;
i__6823_6827 = G__6832;
continue;
} else {
var temp__4657__auto___6833 = cljs.core.seq.call(null,seq__6820_6824);
if(temp__4657__auto___6833){
var seq__6820_6834__$1 = temp__4657__auto___6833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6820_6834__$1)){
var c__5408__auto___6835 = cljs.core.chunk_first.call(null,seq__6820_6834__$1);
var G__6836 = cljs.core.chunk_rest.call(null,seq__6820_6834__$1);
var G__6837 = c__5408__auto___6835;
var G__6838 = cljs.core.count.call(null,c__5408__auto___6835);
var G__6839 = (0);
seq__6820_6824 = G__6836;
chunk__6821_6825 = G__6837;
count__6822_6826 = G__6838;
i__6823_6827 = G__6839;
continue;
} else {
var x_6840 = cljs.core.first.call(null,seq__6820_6834__$1);
ret.push(x_6840);

var G__6841 = cljs.core.next.call(null,seq__6820_6834__$1);
var G__6842 = null;
var G__6843 = (0);
var G__6844 = (0);
seq__6820_6824 = G__6841;
chunk__6821_6825 = G__6842;
count__6822_6826 = G__6843;
i__6823_6827 = G__6844;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__5203__auto__,writer__5204__auto__,opt__5205__auto__){
return cljs.core._write.call(null,writer__5204__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__5203__auto__,writer__5204__auto__,opt__5205__auto__){
return cljs.core._write.call(null,writer__5204__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__6845_6849 = cljs.core.seq.call(null,v);
var chunk__6846_6850 = null;
var count__6847_6851 = (0);
var i__6848_6852 = (0);
while(true){
if((i__6848_6852 < count__6847_6851)){
var x_6853 = cljs.core._nth.call(null,chunk__6846_6850,i__6848_6852);
ret.push(x_6853);

var G__6854 = seq__6845_6849;
var G__6855 = chunk__6846_6850;
var G__6856 = count__6847_6851;
var G__6857 = (i__6848_6852 + (1));
seq__6845_6849 = G__6854;
chunk__6846_6850 = G__6855;
count__6847_6851 = G__6856;
i__6848_6852 = G__6857;
continue;
} else {
var temp__4657__auto___6858 = cljs.core.seq.call(null,seq__6845_6849);
if(temp__4657__auto___6858){
var seq__6845_6859__$1 = temp__4657__auto___6858;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6845_6859__$1)){
var c__5408__auto___6860 = cljs.core.chunk_first.call(null,seq__6845_6859__$1);
var G__6861 = cljs.core.chunk_rest.call(null,seq__6845_6859__$1);
var G__6862 = c__5408__auto___6860;
var G__6863 = cljs.core.count.call(null,c__5408__auto___6860);
var G__6864 = (0);
seq__6845_6849 = G__6861;
chunk__6846_6850 = G__6862;
count__6847_6851 = G__6863;
i__6848_6852 = G__6864;
continue;
} else {
var x_6865 = cljs.core.first.call(null,seq__6845_6859__$1);
ret.push(x_6865);

var G__6866 = cljs.core.next.call(null,seq__6845_6859__$1);
var G__6867 = null;
var G__6868 = (0);
var G__6869 = (0);
seq__6845_6849 = G__6866;
chunk__6846_6850 = G__6867;
count__6847_6851 = G__6868;
i__6848_6852 = G__6869;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__5203__auto__,writer__5204__auto__,opt__5205__auto__){
return cljs.core._write.call(null,writer__5204__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__6870_6874 = cljs.core.seq.call(null,v);
var chunk__6871_6875 = null;
var count__6872_6876 = (0);
var i__6873_6877 = (0);
while(true){
if((i__6873_6877 < count__6872_6876)){
var x_6878 = cljs.core._nth.call(null,chunk__6871_6875,i__6873_6877);
ret.push(x_6878);

var G__6879 = seq__6870_6874;
var G__6880 = chunk__6871_6875;
var G__6881 = count__6872_6876;
var G__6882 = (i__6873_6877 + (1));
seq__6870_6874 = G__6879;
chunk__6871_6875 = G__6880;
count__6872_6876 = G__6881;
i__6873_6877 = G__6882;
continue;
} else {
var temp__4657__auto___6883 = cljs.core.seq.call(null,seq__6870_6874);
if(temp__4657__auto___6883){
var seq__6870_6884__$1 = temp__4657__auto___6883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6870_6884__$1)){
var c__5408__auto___6885 = cljs.core.chunk_first.call(null,seq__6870_6884__$1);
var G__6886 = cljs.core.chunk_rest.call(null,seq__6870_6884__$1);
var G__6887 = c__5408__auto___6885;
var G__6888 = cljs.core.count.call(null,c__5408__auto___6885);
var G__6889 = (0);
seq__6870_6874 = G__6886;
chunk__6871_6875 = G__6887;
count__6872_6876 = G__6888;
i__6873_6877 = G__6889;
continue;
} else {
var x_6890 = cljs.core.first.call(null,seq__6870_6884__$1);
ret.push(x_6890);

var G__6891 = cljs.core.next.call(null,seq__6870_6884__$1);
var G__6892 = null;
var G__6893 = (0);
var G__6894 = (0);
seq__6870_6874 = G__6891;
chunk__6871_6875 = G__6892;
count__6872_6876 = G__6893;
i__6873_6877 = G__6894;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__5203__auto__,writer__5204__auto__,opt__5205__auto__){
return cljs.core._write.call(null,writer__5204__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__5203__auto__,writer__5204__auto__,opt__5205__auto__){
return cljs.core._write.call(null,writer__5204__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args6895 = [];
var len__5663__auto___6906 = arguments.length;
var i__5664__auto___6907 = (0);
while(true){
if((i__5664__auto___6907 < len__5663__auto___6906)){
args6895.push((arguments[i__5664__auto___6907]));

var G__6908 = (i__5664__auto___6907 + (1));
i__5664__auto___6907 = G__6908;
continue;
} else {
}
break;
}

var G__6897 = args6895.length;
switch (G__6897) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6895.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__6898 = obj;
G__6898.push(kfn.call(null,k),vfn.call(null,v));

return G__6898;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x6899 = cljs.core.clone.call(null,handlers);
x6899.forEach = ((function (x6899,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__6900 = cljs.core.seq.call(null,coll);
var chunk__6901 = null;
var count__6902 = (0);
var i__6903 = (0);
while(true){
if((i__6903 < count__6902)){
var vec__6904 = cljs.core._nth.call(null,chunk__6901,i__6903);
var k = cljs.core.nth.call(null,vec__6904,(0),null);
var v = cljs.core.nth.call(null,vec__6904,(1),null);
f.call(null,v,k);

var G__6910 = seq__6900;
var G__6911 = chunk__6901;
var G__6912 = count__6902;
var G__6913 = (i__6903 + (1));
seq__6900 = G__6910;
chunk__6901 = G__6911;
count__6902 = G__6912;
i__6903 = G__6913;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__6900);
if(temp__4657__auto__){
var seq__6900__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6900__$1)){
var c__5408__auto__ = cljs.core.chunk_first.call(null,seq__6900__$1);
var G__6914 = cljs.core.chunk_rest.call(null,seq__6900__$1);
var G__6915 = c__5408__auto__;
var G__6916 = cljs.core.count.call(null,c__5408__auto__);
var G__6917 = (0);
seq__6900 = G__6914;
chunk__6901 = G__6915;
count__6902 = G__6916;
i__6903 = G__6917;
continue;
} else {
var vec__6905 = cljs.core.first.call(null,seq__6900__$1);
var k = cljs.core.nth.call(null,vec__6905,(0),null);
var v = cljs.core.nth.call(null,vec__6905,(1),null);
f.call(null,v,k);

var G__6918 = cljs.core.next.call(null,seq__6900__$1);
var G__6919 = null;
var G__6920 = (0);
var G__6921 = (0);
seq__6900 = G__6918;
chunk__6901 = G__6919;
count__6902 = G__6920;
i__6903 = G__6921;
continue;
}
} else {
return null;
}
}
break;
}
});})(x6899,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x6899;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args6922 = [];
var len__5663__auto___6928 = arguments.length;
var i__5664__auto___6929 = (0);
while(true){
if((i__5664__auto___6929 < len__5663__auto___6928)){
args6922.push((arguments[i__5664__auto___6929]));

var G__6930 = (i__5664__auto___6929 + (1));
i__5664__auto___6929 = G__6930;
continue;
} else {
}
break;
}

var G__6924 = args6922.length;
switch (G__6924) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6922.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit6925 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit6925 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta6926){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta6926 = meta6926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit6925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6927,meta6926__$1){
var self__ = this;
var _6927__$1 = this;
return (new cognitect.transit.t_cognitect$transit6925(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta6926__$1));
});

cognitect.transit.t_cognitect$transit6925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6927){
var self__ = this;
var _6927__$1 = this;
return self__.meta6926;
});

cognitect.transit.t_cognitect$transit6925.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit6925.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit6925.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit6925.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit6925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta6926","meta6926",483586518,null)], null);
});

cognitect.transit.t_cognitect$transit6925.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit6925.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit6925";

cognitect.transit.t_cognitect$transit6925.cljs$lang$ctorPrWriter = (function (this__5203__auto__,writer__5204__auto__,opt__5205__auto__){
return cljs.core._write.call(null,writer__5204__auto__,"cognitect.transit/t_cognitect$transit6925");
});

cognitect.transit.__GT_t_cognitect$transit6925 = (function cognitect$transit$__GT_t_cognitect$transit6925(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta6926){
return (new cognitect.transit.t_cognitect$transit6925(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta6926));
});

}

return (new cognitect.transit.t_cognitect$transit6925(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__4605__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__4605__auto__)){
return or__4605__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map