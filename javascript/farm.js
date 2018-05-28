var rauchen = new TimelineMax({repeat:-1, repeatDelay:0, ease:Expo.easeInOut});

var wolken = new TimelineMax({repeat:-1, repeatDelay:15, ease:Expo.easeInOut});

var traktor = new TimelineMax({repeat:-1, repeatDelay:0, ease:Expo.easeInOut});

var haus = new TimelineMax({repeat:-1, repeatDelay:0, ease:Expo.easeInOut});

var huhnfam = new TimelineMax({repeat:-1, repeatDelay:0, ease:Expo.easeInOut});

var kuh = new TimelineMax({repeat:-1, repeatDelay:5, ease:Expo.easeInOut});

var schafherde = new TimelineMax({repeat:-1, repeatDelay:0, ease:Expo.easeInOut});

var traktormove = new TimelineMax({repeat:-1, repeatDelay:0, ease:Linear.easeNone});

var traktor2move = new TimelineMax({repeat:-1, repeatDelay:10, ease:Linear.easeNone});

var schwein = new TimelineMax({repeat:-1, delay: 6, repeatDelay:12, ease:Linear.easeNone});

var schweinlaufen = new TimelineMax({repeat:-1, delay:0, repeatDelay:0, ease:Linear.easeNone});

var schweinlaufen2 = new TimelineMax({repeat:-1, delay:0, repeatDelay:0, ease:Linear.easeNone});

var windmuehle = new TimelineMax({repeat:-1, repeatDelay:0, ease:Linear.easeNone});

rauch = $(".farm_img svg g#rauch");

windmuehle.set("#windmuehle", {transformOrigin: 'center center'}).to("#windmuehle", 6, {rotation:-360, ease:Linear.easeNone});

traktor.set("#traktor #hinterrad, #traktor #vorderrad, #traktor2 #hinterrad, #traktor2 #vorderrad",  {transformOrigin: 'center center'}).to("#traktor #hinterrad, #traktor #vorderrad, #traktor2 #hinterrad, #traktor2 #vorderrad", 1.5, {rotation:-360, y:0, x:0, ease : Linear.easeNone});

traktormove.set("#traktor", {x:250, ease : Linear.easeNone}).to("#traktor", 5, {x:500, ease : Linear.easeNone}).to("#traktor",0.1, {rotationY:180,  transformOrigin:"center center"}).to("#traktor", 5, {x:250, ease : Linear.easeNone });

traktor2move.set("#traktor2", {x:-300, y:60, ease : Linear.easeNone}).to("#traktor2", 20, {x:500, ease : Linear.easeNone});

schwein.set("#schwein", { x:-600, ease : Linear.easeNone}).to("#schwein", 70, {x:500, ease : Linear.easeNone});

var laufen1 = $("#schwein #g1192, #schwein #g1068-7, #schafe #g1042-3, #schafe #g1050-2, #schafe #g1042-3-5, #schafe #g1050-2-1, #schafe #g1050-2-1-6, #schafe #g1042-3-5-8, #schafe #g1042-3-5-9, #schafe #g1050-2-1-2");

schweinlaufen.set(laufen1, { transformOrigin: 'bottom center', ease : Linear.easeNone}).to(laufen1, 0.2, {rotation:-20, ease : Linear.easeNone}).to(laufen1, 0.2, {rotation:0, ease : Linear.easeNone}).to(laufen1, 0.2, {rotation:20, ease : Linear.easeNone}).to(laufen1, 0.2, {rotation:0, ease : Linear.easeNone});

var laufen2 = $("#schwein #g1188, #schwein #g1088-9, #schafe #g1030-1-1-1, #schafe #g1022-5-1-8, #schafe #g1030-1-1-7, #schafe #g1022-5-1-9, #schafe #g1030-1-1, #schafe #g1022-5-1, #schafe #g1022-5, #schafe #g1030-1");

schweinlaufen2.set(laufen2, { transformOrigin: 'bottom center', ease : Linear.easeNone}).to(laufen2, 0.2, {rotation:20, ease : Linear.easeNone}).to(laufen2, 0.2, {rotation:0, ease : Linear.easeNone}).to(laufen2, 0.2, {rotation:-20, ease : Linear.easeNone}).to(laufen2, 0.2, {rotation:0, ease : Linear.easeNone});

schafherde.set("#schafe", {x:-200, y:-5, rotationY:180,  ease : Linear.easeNone}).to("#schafe", 50, {x:900, ease : Linear.easeNone}, 1);
haus.from("#path360", 2, {css:{fill:"#f5ee94"}}).to("#path360", 2 , {css:{fill:"#5cc5d1"}}).to("#path360", 2 , {css:{fill:"#f5ee94"}});

rauchen.from(rauch, 2, {autoAlpha: 0,
 transformOrigin: 'top center', Opacity:0,
 scale: 0, ease : Power4.easeOut}, 0.8).to(
 rauch, 0.5, {scale: 0.8, autAlpha:0, css:{opacity:0} }
);

huhnfam.set("#henne", {transformOrigin: 'center center', rotationY:0}).to(" #henne, #kueken", 0.1, {rotationY:0}).to("#henne", 6, { }).to("#henne, #kueken", 0.1, {rotationY:180}).to("#kuh", 6, {}).to(" #henne, #kueken", 0.2, {rotationY:0});

kuh.to("#kuh #kuh_kopf", 2, {y:25}).to("#kuh #kuh_schwanz", 1,{rotation:-5}).to("#kuh #kuh_schwanz", 1,{rotation:5}).to("#kuh #kuh_schwanz", 1,{rotation:-5}).to("#kuh #kuh_schwanz", 1,{rotation:5}).to("#kuh #kuh_kopf", 2, {y:0}).to("#kuh #kuh_schwanz", 2, {rotation:0});

var wolkengruppe = $("#g578, #g574, #g550, #g554, #g582, #g586");

wolken.staggerFrom(wolkengruppe, 1, {css:{opacity:0}, transformOrigin: 'center center'},0.5).staggerTo(wolkengruppe, 20, {x:"+=30"}, 0.2).staggerTo(wolkengruppe, 20, {x:"-=50"}, 0.1).staggerTo(wolkengruppe, 1, {css:{opacity:0}, transformOrigin: 'center center'},0.5);

$("#traktor").click(function(){

  var tl = new TimelineMax({repeat:0,  ease:Expo.easeInOut});

tl.to($(".farm_img svg"), 1.5, {attr:{ viewBox:"600 450 200 200"}},"+=.5").to($(".farm_img svg"), 1.5, {attr:{viewBox:"0 200 800 400"}},10);

}).css("cursor", "pointer");;

$("#kuh").click(function(){

  var tl = new TimelineMax({repeat:0,  ease:Expo.easeInOut});

tl.to($(".farm_img svg"), 1.5, {attr:{ viewBox:"0 490 200 300"}},"+=.5").to($(".farm_img svg"), 1.5, {attr:{viewBox:"0 200 800 400"}},10);

}).css("cursor", "pointer");

$("#path592").click(function(){

  var tl = new TimelineMax({repeat:0,  ease:Expo.easeInOut});

tl.to($(".farm_img svg"), 1.5, {attr:{ viewBox:"80 280 300 200"}},"+=.5").to($(".farm_img svg"), 1.5, {attr:{viewBox:"0 200 800 400"}},10);

}).css("cursor", "pointer");

$("#huhn").click(function(){

  var tl = new TimelineMax({repeat:0,  ease:Expo.easeInOut});

tl.to($(".farm_img svg"), 1.5, {attr:{ viewBox:"330 385 100 300"}},"+=.5").to($(".farm_img svg"), 1.5, {attr:{viewBox:"0 200 800 400"}},10);

}).css("cursor", "pointer");
