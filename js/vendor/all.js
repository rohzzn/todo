'use strict';

// async-each MIT license (by Paul Miller from http://paulmillr.com).
(function(globals) {
    'use strict';
    var each = function(items, next, callback) {
        if (!Array.isArray(items))
            throw new TypeError('each() expects array as first argument');
        if (typeof next !== 'function')
            throw new TypeError('each() expects function as second argument');
        if (typeof callback !== 'function')
            callback = Function.prototype;
        // no-op

        if (items.length === 0)
            return callback(undefined, items);

        var transformed = new Array(items.length);
        var count = 0;
        var returned = false;

        items.forEach(function(item, index) {
            next(item, function(error, transformedItem) {
                if (returned)
                    return;
                if (error) {
                    returned = true;
                    return callback(error);
                }
                transformed[index] = transformedItem;
                count += 1;
                if (count === items.length)
                    return callback(undefined, transformed);
            });
        });
    };

    if (typeof define !== 'undefined' && define.amd) {
        define([], function() {
            return each;
        });
        // RequireJS
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = each;
        // CommonJS
    } else {
        globals.asyncEach = each;
        // <script>
    }
}
)(this);

/*!
 * fullPage 2.9.6 - Extensions 0.1.4
 * https://github.com/alvarotrigo/fullPage.js
 * @license http://alvarotrigo.com/fullPage/extensions/#license
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e, n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(t) {
        return n(t, e, e.document, e.Math)
    }) : "object" == typeof exports && exports ? module.exports = n(require("jquery"), e, e.document, e.Math) : n(jQuery, e, e.document, e.Math)
}("undefined" != typeof window ? window : this, function(e, n, t, o, i) {
    "use strict";
    var r = "fullpage-wrapper"
      , a = "." + r
      , l = "fp-responsive"
      , s = "fp-notransition"
      , c = "fp-destroyed"
      , d = "fp-enabled"
      , f = "fp-viewing"
      , u = "active"
      , p = "." + u
      , v = "fp-completely"
      , h = "." + v
      , g = ".section"
      , m = "fp-section"
      , S = "." + m
      , y = S + p
      , w = S + ":first"
      , b = S + ":last"
      , x = "fp-tableCell"
      , C = "." + x
      , T = "fp-auto-height"
      , A = "fp-normal-scroll"
      , M = "fp-nav"
      , k = "#" + M
      , O = "fp-tooltip"
      , R = "." + O
      , z = "fp-show-active"
      , I = ".slide"
      , L = "fp-slide"
      , H = "." + L
      , E = H + p
      , B = "fp-slides"
      , D = "." + B
      , P = "fp-slidesContainer"
      , Y = "." + P
      , F = "fp-table"
      , W = "fp-slidesNav"
      , X = "." + W
      , V = X + " a"
      , Z = "fp-controlArrow"
      , N = "." + Z
      , j = "fp-prev"
      , q = "." + j
      , G = Z + " " + j
      , U = N + q
      , Q = "fp-next"
      , J = "." + Q
      , K = Z + " " + Q
      , _ = N + J
      , $ = e(n)
      , ee = e(t);
    e.fn.fullpage = function(Z) {
        function q(n, t) {
            n || lt(0),
            mt("autoScrolling", n, t);
            var o = e(y);
            Z.autoScrolling && !Z.scrollBar ? (wt.css({
                overflow: "hidden",
                height: "100%"
            }),
            Q(Qt.recordHistory, "internal"),
            zt.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }),
            o.length && lt(o.position().top)) : (wt.css({
                overflow: "visible",
                height: "initial"
            }),
            Q(!1, "internal"),
            zt.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }),
            ut(zt),
            o.length && wt.scrollTop(o.position().top)),
            zt.trigger("setAutoScrolling", [n])
        }
        function Q(e, n) {
            mt("recordHistory", e, n)
        }
        function J(e, n) {
            "internal" !== n && Z.fadingEffect && xt.fadingEffect && xt.fadingEffect.update(e),
            mt("scrollingSpeed", e, n)
        }
        function ne(e, n) {
            mt("fitToSection", e, n)
        }
        function te(e) {
            Z.lockAnchors = e
        }
        function oe(e) {
            e ? ($n(),
            et()) : (_n(),
            nt())
        }
        function ie(n, t) {
            "undefined" != typeof t ? (t = t.replace(/ /g, "").split(","),
            e.each(t, function(e, t) {
                ct(n, t, "m")
            })) : (ct(n, "all", "m"),
            n ? (oe(!0),
            tt()) : (oe(!1),
            ot()))
        }
        function re(n, t) {
            "undefined" != typeof t ? (t = t.replace(/ /g, "").split(","),
            e.each(t, function(e, t) {
                ct(n, t, "k")
            })) : (ct(n, "all", "k"),
            Z.keyboardScrolling = n)
        }
        function ae() {
            var n = e(y).prev(S);
            n.length || !Z.loopTop && !Z.continuousVertical || (n = e(S).last()),
            n.length && qe(n, null, !0)
        }
        function le() {
            var n = e(y).next(S);
            n.length || !Z.loopBottom && !Z.continuousVertical || (n = e(S).first()),
            n.length && qe(n, null, !1)
        }
        function se(e, n) {
            J(0, "internal"),
            ce(e, n),
            J(Qt.scrollingSpeed, "internal")
        }
        function ce(e, n) {
            var t = Vn(e);
            "undefined" != typeof n ? Nn(e, n) : t.length > 0 && qe(t)
        }
        function de(e) {
            Ze("right", e)
        }
        function fe(e) {
            Ze("left", e)
        }
        function ue(n) {
            if (!zt.hasClass(c)) {
                Lt = !0,
                It = $.height(),
                e(S).each(function() {
                    var n = e(this).find(D)
                      , t = e(this).find(H);
                    Z.verticalCentered && e(this).find(C).css("height", Wn(e(this)) + "px"),
                    e(this).css("height", be(e(this)) + "px"),
                    t.length > 1 && An(n, n.find(E))
                }),
                Z.scrollOverflow && Pt.createScrollBarForAll();
                var t = e(y)
                  , o = t.index(S);
                o && !pt("fadingEffect") && se(o + 1),
                Lt = !1,
                e.isFunction(Z.afterResize) && n && Z.afterResize.call(zt),
                e.isFunction(Z.afterReBuild) && !n && Z.afterReBuild.call(zt),
                zt.trigger("afterRebuild")
            }
        }
        function pe(n) {
            var t = bt.hasClass(l);
            n ? t || (q(!1, "internal"),
            ne(!1, "internal"),
            e(k).hide(),
            bt.addClass(l),
            e.isFunction(Z.afterResponsive) && Z.afterResponsive.call(zt, n),
            Z.responsiveSlides && xt.responsiveSlides && xt.responsiveSlides.toSections(),
            zt.trigger("afterResponsive", [n])) : t && (q(Qt.autoScrolling, "internal"),
            ne(Qt.autoScrolling, "internal"),
            e(k).show(),
            bt.removeClass(l),
            e.isFunction(Z.afterResponsive) && Z.afterResponsive.call(zt, n),
            Z.responsiveSlides && xt.responsiveSlides && xt.responsiveSlides.toSlides(),
            zt.trigger("afterResponsive", [n]))
        }
        function ve() {
            return {
                options: Z,
                internals: {
                    canScroll: Et,
                    isScrollAllowed: Dt,
                    getDestinationPosition: je,
                    isTouch: Rt,
                    c: cn,
                    getXmovement: Yn,
                    removeAnimation: Hn,
                    getTransforms: st,
                    lazyLoad: en,
                    addAnimation: Ln,
                    performHorizontalMove: On,
                    landscapeScroll: An,
                    silentLandscapeScroll: at,
                    keepSlidesPosition: Ne,
                    silentScroll: lt,
                    styleSlides: we,
                    scrollHandler: Le,
                    getEventsPage: rt,
                    getMSPointer: it,
                    isReallyTouch: Fe,
                    usingExtension: pt,
                    toggleControlArrows: Mn
                }
            }
        }
        function he() {
            Z.css3 && (Z.css3 = Kn()),
            Z.scrollBar = Z.scrollBar || Z.hybrid,
            Se(),
            ye(),
            ie(!0),
            q(Z.autoScrolling, "internal"),
            In(),
            Jn(),
            "complete" === t.readyState && dn(),
            $.on("load", dn)
        }
        function ge() {
            $.on("scroll", Le).on("hashchange", fn).blur(wn).resize(zn),
            ee.keydown(pn).keyup(hn).on("click touchstart", k + " a", bn).on("click touchstart", V, xn).on("click", R, vn),
            e(S).on("click touchstart", N, yn),
            Z.normalScrollElements && (ee.on("mouseenter touchstart", Z.normalScrollElements, function() {
                ie(!1)
            }),
            ee.on("mouseleave touchend", Z.normalScrollElements, function() {
                ie(!0)
            }))
        }
        function me(e) {
            var t = "fp_" + e + "Extension";
            Jt[e] = Z[e + "Key"],
            xt[e] = "undefined" != typeof n[t] ? new n[t] : null,
            xt[e] && xt[e].c(e)
        }
        function Se() {
            var n = zt.find(Z.sectionSelector);
            Z.anchors.length || (Z.anchors = n.filter("[data-anchor]").map(function() {
                return e(this).data("anchor").toString()
            }).get()),
            Z.navigationTooltips.length || (Z.navigationTooltips = n.filter("[data-tooltip]").map(function() {
                return e(this).data("tooltip").toString()
            }).get())
        }
        function ye() {
            zt.css({
                height: "100%",
                position: "relative"
            }),
            zt.addClass(r),
            e("html").addClass(d),
            It = $.height(),
            zt.removeClass(c),
            Te(),
            vt("parallax", "init"),
            e(S).each(function(n) {
                var t = e(this)
                  , o = t.find(H)
                  , i = o.length;
                t.data("fp-styles", t.attr("style")),
                xe(t, n),
                Ce(t, n),
                i > 0 ? we(t, o, i) : Z.verticalCentered && Fn(t)
            }),
            Z.fixedElements && Z.css3 && e(Z.fixedElements).appendTo(bt),
            Z.navigation && Me(),
            ke(),
            Z.fadingEffect && xt.fadingEffect && xt.fadingEffect.apply(),
            Z.scrollOverflow ? Pt = Z.scrollOverflowHandler.init(Z) : ze()
        }
        function we(n, t, o) {
            var i = 100 * o
              , r = 100 / o;
            t.wrapAll('<div class="' + P + '" />'),
            t.parent().wrap('<div class="' + B + '" />'),
            n.find(Y).css("width", i + "%"),
            o > 1 && (Z.controlArrows && Ae(n),
            Z.slidesNavigation && qn(n, o)),
            t.each(function(n) {
                e(this).css("width", r + "%"),
                Z.verticalCentered && Fn(e(this))
            });
            var a = n.find(E);
            a.length && (0 !== e(y).index(S) || 0 === e(y).index(S) && 0 !== a.index()) ? at(a, "internal") : t.eq(0).addClass(u)
        }
        function be(e) {
            return Z.offsetSections && xt.offsetSections ? o.round(xt.offsetSections.getWindowHeight(e)) : It
        }
        function xe(n, t) {
            t || 0 !== e(y).length || n.addClass(u),
            Mt = e(y),
            n.css("height", be(n) + "px"),
            Z.paddingTop && n.css("padding-top", Z.paddingTop),
            Z.paddingBottom && n.css("padding-bottom", Z.paddingBottom),
            "undefined" != typeof Z.sectionsColor[t] && n.css("background-color", Z.sectionsColor[t]),
            "undefined" != typeof Z.anchors[t] && n.attr("data-anchor", Z.anchors[t])
        }
        function Ce(n, t) {
            "undefined" != typeof Z.anchors[t] && n.hasClass(u) && Dn(Z.anchors[t], t),
            Z.menu && Z.css3 && e(Z.menu).closest(a).length && e(Z.menu).appendTo(bt)
        }
        function Te() {
            zt.find(Z.sectionSelector).addClass(m),
            zt.find(Z.slideSelector).addClass(L)
        }
        function Ae(e) {
            e.find(D).after('<div class="' + G + '"></div><div class="' + K + '"></div>'),
            "#fff" != Z.controlArrowColor && (e.find(_).css("border-color", "transparent transparent transparent " + Z.controlArrowColor),
            e.find(U).css("border-color", "transparent " + Z.controlArrowColor + " transparent transparent")),
            Z.loopHorizontal || e.find(U).hide()
        }
        function Me() {
            bt.append('<div id="' + M + '"><ul></ul></div>');
            var n = e(k);
            n.addClass(function() {
                return Z.showActiveTooltip ? z + " " + Z.navigationPosition : Z.navigationPosition
            });
            for (var t = 0; t < e(S).length; t++) {
                var o = "";
                Z.anchors.length && (o = Z.anchors[t]);
                var i = '<li><a href="#' + o + '"><span></span></a>'
                  , r = Z.navigationTooltips[t];
                "undefined" != typeof r && "" !== r && (i += '<div class="' + O + " " + Z.navigationPosition + '">' + r + "</div>"),
                i += "</li>",
                n.find("ul").append(i)
            }
            e(k).css("margin-top", "-" + e(k).height() / 2 + "px"),
            e(k).find("li").eq(e(y).index(S)).find("a").addClass(u)
        }
        function ke() {
            zt.find('iframe[src*="youtube.com/embed/"]').each(function() {
                Oe(e(this), "enablejsapi=1")
            })
        }
        function Oe(e, n) {
            var t = e.attr("src");
            e.attr("src", t + Re(t) + n)
        }
        function Re(e) {
            return /\?/.test(e) ? "&" : "?"
        }
        function ze() {
            var n = e(y);
            n.addClass(v),
            en(n),
            nn(n),
            Z.scrollOverflow && Z.scrollOverflowHandler.afterLoad(),
            Ie() && e.isFunction(Z.afterLoad) && Z.afterLoad.call(n, n.data("anchor"), n.index(S) + 1),
            e.isFunction(Z.afterRender) && Z.afterRender.call(zt),
            zt.trigger("afterRender")
        }
        function Ie() {
            var e = Vn(un().section);
            return !e || e.length && e.index() === Mt.index()
        }
        function Le() {
            io || (requestAnimationFrame(He),
            io = !0)
        }
        function He() {
            zt.trigger("onScroll");
            var n;
            if ((!Z.autoScrolling || Z.scrollBar || pt("dragAndMove")) && !gt()) {
                var i = pt("dragAndMove") ? o.abs(xt.dragAndMove.getCurrentScroll()) : $.scrollTop()
                  , r = (Be(i),
                0)
                  , a = i + $.height() / 2
                  , l = pt("dragAndMove") ? xt.dragAndMove.getDocumentHeight() : bt.height() - $.height()
                  , s = l === i
                  , c = t.querySelectorAll(S);
                if (s)
                    r = c.length - 1;
                else if (i)
                    for (var d = 0; d < c.length; ++d) {
                        var f = c[d];
                        f.offsetTop <= a && (r = d)
                    }
                else
                    r = 0;
                if (n = e(c).eq(r),
                !n.hasClass(u)) {
                    Kt = !0;
                    var p, v, h = e(y), g = h.index(S) + 1, m = Pn(n), w = n.data("anchor"), b = n.index(S) + 1, x = n.find(E);
                    x.length && (v = x.data("anchor"),
                    p = x.index()),
                    Et && (n.addClass(u).siblings().removeClass(u),
                    vt("parallax", "afterLoad"),
                    e.isFunction(Z.onLeave) && Z.onLeave.call(h, g, b, m),
                    e.isFunction(Z.afterLoad) && Z.afterLoad.call(n, w, b),
                    Z.resetSliders && xt.resetSliders && xt.resetSliders.apply({
                        localIsResizing: Lt,
                        leavingSection: g
                    }),
                    on(h),
                    en(n),
                    nn(n),
                    Dn(w, b - 1),
                    Z.anchors.length && (Ct = w),
                    Gn(p, v, w, b)),
                    clearTimeout(Xt),
                    Xt = setTimeout(function() {
                        Kt = !1
                    }, 100)
                }
                Z.fitToSection && (clearTimeout(Vt),
                Vt = setTimeout(function() {
                    Z.fitToSection && e(y).outerHeight() <= It && Ee()
                }, Z.fitToSectionDelay))
            }
            io = !1
        }
        function Ee() {
            Et && (Lt = !0,
            qe(e(y)),
            Lt = !1)
        }
        function Be(e) {
            var n = e > _t ? "down" : "up";
            return _t = e,
            ro = e,
            n
        }
        function De(n) {
            if (Dt.m[n]) {
                var t = "down" === n ? le : ae;
                if (xt.scrollHorizontally && (t = xt.scrollHorizontally.getScrollSection(n, t)),
                Z.scrollOverflow) {
                    var o = Z.scrollOverflowHandler.scrollable(e(y))
                      , i = "down" === n ? "bottom" : "top";
                    if (o.length > 0) {
                        if (!Z.scrollOverflowHandler.isScrolled(i, o))
                            return !0;
                        t()
                    } else
                        t()
                } else
                    t()
            }
        }
        function Pe(e) {
            var n = e.originalEvent;
            Z.autoScrolling && Fe(n) && e.preventDefault()
        }
        function Ye(n) {
            var t = n.originalEvent
              , i = e(t.target).closest(S);
            if (Fe(t)) {
                Z.autoScrolling && n.preventDefault();
                var r = rt(t);
                no = r.y,
                to = r.x,
                i.find(D).length && o.abs(eo - to) > o.abs($t - no) ? !kt && o.abs(eo - to) > $.outerWidth() / 100 * Z.touchSensitivity && (eo > to ? Dt.m.right && de(i) : Dt.m.left && fe(i)) : Z.autoScrolling && Et && o.abs($t - no) > $.height() / 100 * Z.touchSensitivity && ($t > no ? De("down") : no > $t && De("up"))
            }
        }
        function Fe(e) {
            return "undefined" == typeof e.pointerType || "mouse" != e.pointerType
        }
        function We(e) {
            var n = e.originalEvent;
            if (Z.fitToSection && wt.stop(),
            Fe(n)) {
                var t = rt(n);
                $t = t.y,
                eo = t.x
            }
        }
        function Xe(e, n) {
            for (var t = 0, i = e.slice(o.max(e.length - n, 1)), r = 0; r < i.length; r++)
                t += i[r];
            return o.ceil(t / n)
        }
        function Ve(t) {
            var i = (new Date).getTime()
              , r = e(h).hasClass(A);
            if (Z.autoScrolling && !At && !r) {
                t = t || n.event;
                var a = t.wheelDelta || -t.deltaY || -t.detail
                  , l = o.max(-1, o.min(1, a))
                  , s = "undefined" != typeof t.wheelDeltaX || "undefined" != typeof t.deltaX
                  , c = o.abs(t.wheelDeltaX) < o.abs(t.wheelDelta) || o.abs(t.deltaX) < o.abs(t.deltaY) || !s;
                Bt.length > 149 && Bt.shift(),
                Bt.push(o.abs(a)),
                Z.scrollBar && (t.preventDefault ? t.preventDefault() : t.returnValue = !1);
                var d = i - oo;
                if (oo = i,
                d > 200 && (Bt = []),
                Et && !ht()) {
                    var f = Xe(Bt, 10)
                      , u = Xe(Bt, 70)
                      , p = f >= u;
                    p && c && De(l < 0 ? "down" : "up")
                }
                return !1
            }
            Z.fitToSection && wt.stop()
        }
        function Ze(n, t) {
            var o = "undefined" == typeof t ? e(y) : t
              , i = o.find(D);
            if (!(!i.length || ht() || kt || i.find(H).length < 2)) {
                var r = i.find(E)
                  , a = null;
                if (a = "left" === n ? r.prev(H) : r.next(H),
                !a.length) {
                    if (!Z.loopHorizontal)
                        return;
                    a = "left" === n ? r.siblings(":last") : r.siblings(":first")
                }
                kt = !0,
                An(i, a, n)
            }
        }
        function Ne() {
            e(E).each(function() {
                at(e(this), "internal")
            })
        }
        function je(e) {
            var n = e.position()
              , t = n.top
              , o = pt("dragAndMove") && xt.dragAndMove.isGrabbing ? xt.dragAndMove.isScrollingDown() : n.top > ro
              , i = t - It + e.outerHeight()
              , r = Z.bigSectionsDestination;
            return e.outerHeight() > It ? (o || r) && "bottom" !== r || (t = i) : (o || Lt && e.is(":last-child")) && (t = i),
            Z.offsetSections && xt.offsetSections && (t = xt.offsetSections.getSectionPosition(o, t, e)),
            ro = t,
            t
        }
        function qe(n, t, o) {
            if ("undefined" != typeof n && n.length) {
                var i, r, a = je(n), l = {
                    element: n,
                    callback: t,
                    isMovementUp: o,
                    dtop: a,
                    yMovement: Pn(n),
                    anchorLink: n.data("anchor"),
                    sectionIndex: n.index(S),
                    activeSlide: n.find(E),
                    activeSection: e(y),
                    leavingSection: e(y).index(S) + 1,
                    localIsResizing: Lt
                };
                l.activeSection.is(n) && !Lt || Z.scrollBar && $.scrollTop() === l.dtop && !n.hasClass(T) || (l.activeSlide.length && (i = l.activeSlide.data("anchor"),
                r = l.activeSlide.index()),
                e.isFunction(Z.onLeave) && !l.localIsResizing && Z.onLeave.call(l.activeSection, l.leavingSection, l.sectionIndex + 1, l.yMovement) === !1 || (vt("parallax", "apply", l),
                Z.autoScrolling && Z.continuousVertical && "undefined" != typeof l.isMovementUp && (!l.isMovementUp && "up" == l.yMovement || l.isMovementUp && "down" == l.yMovement) && (l = Je(l)),
                pt("scrollOverflowReset") && xt.scrollOverflowReset.setPrevious(l.activeSection),
                l.localIsResizing || on(l.activeSection),
                Z.scrollOverflow && Z.scrollOverflowHandler.beforeLeave(),
                n.addClass(u).siblings().removeClass(u),
                en(n),
                Z.scrollOverflow && Z.scrollOverflowHandler.onLeave(),
                Et = !1,
                Gn(r, i, l.anchorLink, l.sectionIndex),
                Ue(l),
                Ct = l.anchorLink,
                Dn(l.anchorLink, Ge(l))))
            }
        }
        function Ge(n) {
            return n.wrapAroundElements && n.wrapAroundElements.length ? n.isMovementUp ? e(S).length - 1 : 0 : n.sectionIndex
        }
        function Ue(n) {
            if (Z.css3 && Z.autoScrolling && !Z.scrollBar) {
                var t = "translate3d(0px, -" + o.round(n.dtop) + "px, 0px)";
                Xn(t, !0),
                Z.scrollingSpeed ? (clearTimeout(Ft),
                Ft = setTimeout(function() {
                    _e(n)
                }, Z.scrollingSpeed)) : _e(n)
            } else {
                var i = Qe(n);
                e(i.element).animate(i.options, Z.scrollingSpeed, Z.easing).promise().done(function() {
                    Z.scrollBar ? setTimeout(function() {
                        _e(n)
                    }, 30) : _e(n)
                })
            }
        }
        function Qe(e) {
            var n = {};
            return Z.autoScrolling && !Z.scrollBar ? (n.options = {
                top: -e.dtop
            },
            n.element = a) : (n.options = {
                scrollTop: e.dtop
            },
            n.element = "html, body"),
            n
        }
        function Je(n) {
            return n.isMovementUp ? n.activeSection.before(n.activeSection.nextAll(S)) : n.activeSection.after(n.activeSection.prevAll(S).get().reverse()),
            lt(e(y).position().top),
            Ne(),
            n.wrapAroundElements = n.activeSection,
            n.dtop = n.element.position().top,
            n.yMovement = Pn(n.element),
            n.leavingSection = n.activeSection.index(S) + 1,
            n.sectionIndex = n.element.index(S),
            e(a).trigger("onContinuousVertical", [n]),
            n
        }
        function Ke(n) {
            n.wrapAroundElements && n.wrapAroundElements.length && (n.isMovementUp ? e(w).before(n.wrapAroundElements) : e(b).after(n.wrapAroundElements),
            lt(e(y).position().top),
            Ne(),
            n.sectionIndex = n.element.index(S),
            n.leavingSection = n.activeSection.index(S) + 1)
        }
        function _e(n) {
            Ke(n),
            e.isFunction(Z.afterLoad) && !n.localIsResizing && Z.afterLoad.call(n.element, n.anchorLink, n.sectionIndex + 1),
            Z.scrollOverflow && Z.scrollOverflowHandler.afterLoad(),
            vt("parallax", "afterLoad"),
            pt("scrollOverflowReset") && xt.scrollOverflowReset.reset(),
            Z.resetSliders && xt.resetSliders && xt.resetSliders.apply(n),
            n.localIsResizing || nn(n.element),
            n.element.addClass(v).siblings().removeClass(v),
            Et = !0,
            e.isFunction(n.callback) && n.callback.call(this)
        }
        function $e(e, n) {
            e.attr(n, e.data(n)).removeAttr("data-" + n)
        }
        function en(n) {
            if (Z.lazyLoading) {
                var t, o = rn(n);
                o.find("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]").each(function() {
                    if (t = e(this),
                    e.each(["src", "srcset"], function(e, n) {
                        var o = t.attr("data-" + n);
                        "undefined" != typeof o && o && $e(t, n)
                    }),
                    t.is("source")) {
                        var n = t.closest("video").length ? "video" : "audio";
                        t.closest(n).get(0).load()
                    }
                })
            }
        }
        function nn(n) {
            var t = rn(n);
            t.find("video, audio").each(function() {
                var n = e(this).get(0);
                n.hasAttribute("data-autoplay") && "function" == typeof n.play && n.play()
            }),
            t.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var n = e(this).get(0);
                n.hasAttribute("data-autoplay") && tn(n),
                n.onload = function() {
                    n.hasAttribute("data-autoplay") && tn(n)
                }
            })
        }
        function tn(e) {
            e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        }
        function on(n) {
            var t = rn(n);
            t.find("video, audio").each(function() {
                var n = e(this).get(0);
                n.hasAttribute("data-keepplaying") || "function" != typeof n.pause || n.pause()
            }),
            t.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var n = e(this).get(0);
                /youtube\.com\/embed\//.test(e(this).attr("src")) && !n.hasAttribute("data-keepplaying") && e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            })
        }
        function rn(n) {
            var t = n.find(E);
            return t.length && (n = e(t)),
            n
        }
        function an(e) {
            function n(e) {
                var n, o, i, r, l, s, c, d = "", f = 0;
                for (e = e.replace(/[^A-Za-z0-9+\/=]/g, ""); f < e.length; )
                    r = a.indexOf(e.charAt(f++)),
                    l = a.indexOf(e.charAt(f++)),
                    s = a.indexOf(e.charAt(f++)),
                    c = a.indexOf(e.charAt(f++)),
                    n = r << 2 | l >> 4,
                    o = (15 & l) << 4 | s >> 2,
                    i = (3 & s) << 6 | c,
                    d += String.fromCharCode(n),
                    64 != s && (d += String.fromCharCode(o)),
                    64 != c && (d += String.fromCharCode(i));
                return d = t(d)
            }
            function t(e) {
                for (var n, t = "", o = 0, i = 0, r = 0; o < e.length; )
                    i = e.charCodeAt(o),
                    i < 128 ? (t += String.fromCharCode(i),
                    o++) : i > 191 && i < 224 ? (r = e.charCodeAt(o + 1),
                    t += String.fromCharCode((31 & i) << 6 | 63 & r),
                    o += 2) : (r = e.charCodeAt(o + 1),
                    n = e.charCodeAt(o + 2),
                    t += String.fromCharCode((15 & i) << 12 | (63 & r) << 6 | 63 & n),
                    o += 3);
                return t
            }
            function o(e) {
                return e
            }
            function i(e) {
                return e.slice(3).slice(0, -3)
            }
            function r(e) {
                var t = e.split("_");
                if (t.length > 1) {
                    var o = t[1]
                      , r = e.replace(i(t[1]), "").split("_")[0]
                      , a = r;
                    return a + "_" + n(o.slice(3).slice(0, -3))
                }
                return i(e)
            }
            var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            return o(r(n(e)))
        }
        function ln() {
            if (t.domain.length) {
                for (var e = t.domain.replace(/^(www\.)/, "").split("."); e.length > 2; ) {
                    e.shift()
                }
                var n = e.join(".");
                return n.replace(/(^\.*)|(\.*$)/g, "")
            }
            return ""
        }
        function sn(e) {
            var n = ln()
              , t = ["MTM0bG9jYWxob3N0MjM0", "MTM0MC4xMjM0", "MTM0anNoZWxsLm5ldDIzNA==", "UDdDQU5ZNlNN"]
              , o = an(t[0])
              , i = an(t[1])
              , r = an(t[2])
              , a = an(t[3])
              , l = [o, i, r].indexOf(n) < 0 && 0 !== n.length
              , s = "undefined" != typeof Jt[e] && Jt[e].length;
            if (!s && l)
                return !1;
            var c = s ? an(Jt[e]) : "";
            c = c.split("_");
            var d = c.length > 1 && c[1].indexOf(e, c[1].length - e.length) > -1
              , f = c[0].indexOf(n, c[0].length - n.length) < 0;
            return !(f && l && a != c[0]) && d || !l
        }
        function cn(n) {
            function t() {
                Gt || (o.random() < .5 ? bt.prepend(l) : bt.append(l),
                Gt = !0,
                l.bind("destroyed", function() {
                    clearTimeout(r),
                    r = setTimeout(i, 900)
                })),
                e(l).attr("style", an("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTBZkWWuUHNahSjQZtmeoQYjMvmHe1WYuCTvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTBZkWWuUHNahSjQZtmeoQYjMvmHe1WYuCTwYXRoOm5vbmU7MTIz").replace(/;/g, an("MTIzICFpbXBvcnRhbnQ7MzQ1")))
            }
            function i() {
                Gt = !1
            }
            if (pt(n) && xt[n]) {
                var r, a = an("MTBZkWWuUHNahSjQZtmeoQYjMvmHe1WYuCT2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="), l = e("<div/>").html(a).contents();
                sn(n) || (t(),
                setInterval(t, 2e3))
            }
        }
        function dn() {
            var e = un()
              , n = e.section
              , t = e.slide;
            n && (Z.animateAnchor ? Nn(n, t) : se(n, t))
        }
        function fn() {
            if (!Kt && !Z.lockAnchors) {
                var e = un()
                  , n = e.section
                  , t = e.slide
                  , o = "undefined" == typeof Ct
                  , i = "undefined" == typeof Ct && "undefined" == typeof t && !kt;
                n.length && (n && n !== Ct && !o || i || !kt && Tt != t) && Nn(n, t)
            }
        }
        function un() {
            var e, t, o = n.location.hash;
            if (o.length) {
                var i = o.replace("#", "").split("/")
                  , r = o.indexOf("#/") > -1;
                e = r ? "/" + i[1] : decodeURIComponent(i[0]);
                var a = r ? i[2] : i[1];
                a && a.length && (t = decodeURIComponent(a))
            }
            return {
                section: e,
                slide: t
            }
        }
        function pn(n) {
            clearTimeout(Zt);
            var t = e(":focus")
              , o = n.which;
            if (9 === o)
                Sn(n);
            else if (!t.is("textarea") && !t.is("input") && !t.is("select") && "true" !== t.attr("contentEditable") && "" !== t.attr("contentEditable") && Z.keyboardScrolling && Z.autoScrolling) {
                var i = [40, 38, 32, 33, 34];
                e.inArray(o, i) > -1 && n.preventDefault(),
                At = n.ctrlKey,
                Zt = setTimeout(function() {
                    Cn(n)
                }, 150)
            }
        }
        function vn() {
            e(this).prev().trigger("click")
        }
        function hn(e) {
            Ht && (At = e.ctrlKey)
        }
        function gn(e) {
            2 == e.which && (ao = e.pageY,
            zt.on("mousemove", Tn))
        }
        function mn(e) {
            2 == e.which && zt.off("mousemove")
        }
        function Sn(n) {
            function t(e) {
                return e.preventDefault(),
                s.first().focus()
            }
            var o = n.shiftKey
              , i = e(":focus")
              , r = e(y)
              , a = r.find(E)
              , l = a.length ? a : r
              , s = l.find(Ut);
            i.length ? i.closest(y, E).length || (i = t(n)) : t(n),
            (!o && i.is(s.last()) || o && i.is(s.first())) && n.preventDefault()
        }
        function yn() {
            var n = e(this).closest(S);
            e(this).hasClass(j) ? Dt.m.left && fe(n) : Dt.m.right && de(n)
        }
        function wn() {
            Ht = !1,
            At = !1
        }
        function bn(n) {
            n.preventDefault();
            var t = e(this).parent().index();
            qe(e(S).eq(t))
        }
        function xn(n) {
            n.preventDefault();
            var t = e(this).closest(S).find(D)
              , o = t.find(H).eq(e(this).closest("li").index());
            An(t, o)
        }
        function Cn(n) {
            var t = n.shiftKey;
            if (Et || !([37, 39].indexOf(n.which) < 0))
                switch (n.which) {
                case 38:
                case 33:
                    Dt.k.up && ae();
                    break;
                case 32:
                    if (t && Dt.k.up) {
                        ae();
                        break
                    }
                case 40:
                case 34:
                    Dt.k.down && le();
                    break;
                case 36:
                    Dt.k.up && ce(1);
                    break;
                case 35:
                    Dt.k.down && ce(e(S).length);
                    break;
                case 37:
                    Dt.k.left && fe();
                    break;
                case 39:
                    Dt.k.right && de();
                    break;
                default:
                    return
                }
        }
        function Tn(e) {
            Et && (e.pageY < ao && Dt.m.up ? ae() : e.pageY > ao && Dt.m.down && le()),
            ao = e.pageY
        }
        function An(n, t, o) {
            var i = n.closest(S)
              , r = {
                slides: n,
                destiny: t,
                direction: o,
                destinyPos: t.position(),
                slideIndex: t.index(),
                section: i,
                sectionIndex: i.index(S),
                anchorLink: i.data("anchor"),
                slidesNav: i.find(X),
                slideAnchor: Qn(t),
                prevSlide: i.find(E),
                prevSlideIndex: i.find(E).index(),
                localIsResizing: Lt
            };
            return r.xMovement = Yn(r.prevSlideIndex, r.slideIndex),
            r.localIsResizing || (Et = !1),
            vt("parallax", "applyHorizontal", r),
            Z.onSlideLeave && !r.localIsResizing && "none" !== r.xMovement && e.isFunction(Z.onSlideLeave) && Z.onSlideLeave.call(r.prevSlide, r.anchorLink, r.sectionIndex + 1, r.prevSlideIndex, r.direction, r.slideIndex) === !1 ? void (kt = !1) : (t.addClass(u).siblings().removeClass(u),
            r.localIsResizing || (on(r.prevSlide),
            en(t)),
            Mn(r),
            i.hasClass(u) && !r.localIsResizing && Gn(r.slideIndex, r.slideAnchor, r.anchorLink, r.sectionIndex),
            xt.continuousHorizontal && xt.continuousHorizontal.apply(r),
            gt() ? kn(r) : On(n, r, !0),
            void (Z.interlockedSlides && xt.interlockedSlides && (pt("continuousHorizontal") && "undefined" != typeof o && o !== r.xMovement || xt.interlockedSlides.apply(r))))
        }
        function Mn(e) {
            !Z.loopHorizontal && Z.controlArrows && (e.section.find(U).toggle(0 !== e.slideIndex),
            e.section.find(_).toggle(!e.destiny.is(":last-child")))
        }
        function kn(n) {
            xt.continuousHorizontal && xt.continuousHorizontal.afterSlideLoads(n),
            Rn(n.slidesNav, n.slideIndex),
            n.localIsResizing || (vt("parallax", "afterSlideLoads"),
            e.isFunction(Z.afterSlideLoad) && Z.afterSlideLoad.call(n.destiny, n.anchorLink, n.sectionIndex + 1, n.slideAnchor, n.slideIndex),
            Et = !0,
            nn(n.destiny)),
            kt = !1,
            pt("interlockedSlides") && xt.interlockedSlides.apply(n)
        }
        function On(e, n, t) {
            var i = n.destinyPos;
            if (Z.css3) {
                var r = "translate3d(-" + o.round(i.left) + "px, 0px, 0px)";
                Ln(e.find(Y)).css(st(r)),
                Wt = setTimeout(function() {
                    t && kn(n)
                }, Z.scrollingSpeed, Z.easing)
            } else
                e.animate({
                    scrollLeft: o.round(i.left)
                }, Z.scrollingSpeed, Z.easing, function() {
                    t && kn(n)
                })
        }
        function Rn(e, n) {
            e.find(p).removeClass(u),
            e.find("li").eq(n).find("a").addClass(u)
        }
        function zn() {
            if (zt.trigger("onResize"),
            In(),
            Ot) {
                var n = e(t.activeElement);
                if (!n.is("textarea") && !n.is("input") && !n.is("select")) {
                    var i = $.height();
                    o.abs(i - lo) > 20 * o.max(lo, i) / 100 && (ue(!0),
                    lo = i)
                }
            } else
                clearTimeout(Yt),
                Yt = setTimeout(function() {
                    ue(!0)
                }, 350)
        }
        function In() {
            var e = Z.responsive || Z.responsiveWidth
              , n = Z.responsiveHeight
              , t = e && $.outerWidth() < e
              , o = n && $.height() < n;
            e && n ? pe(t || o) : e ? pe(t) : n && pe(o)
        }
        function Ln(e) {
            var n = "all " + Z.scrollingSpeed + "ms " + Z.easingcss3;
            return e.removeClass(s),
            e.css({
                "-webkit-transition": n,
                transition: n
            })
        }
        function Hn(e) {
            return e.addClass(s)
        }
        function En(n, t) {
            Z.navigation && (e(k).find(p).removeClass(u),
            n ? e(k).find('a[href="#' + n + '"]').addClass(u) : e(k).find("li").eq(t).find("a").addClass(u))
        }
        function Bn(n) {
            Z.menu && (e(Z.menu).find(p).removeClass(u),
            e(Z.menu).find('[data-menuanchor="' + n + '"]').addClass(u))
        }
        function Dn(e, n) {
            Bn(e),
            En(e, n)
        }
        function Pn(n) {
            var t = e(y).index(S)
              , o = n.index(S);
            return t == o ? "none" : t > o ? "up" : "down"
        }
        function Yn(e, n) {
            return e == n ? "none" : e > n ? "left" : "right"
        }
        function Fn(e) {
            e.hasClass(F) || e.addClass(F).wrapInner('<div class="' + x + '" style="height:' + Wn(e) + 'px;" />')
        }
        function Wn(e) {
            var n = be(e);
            if (Z.paddingTop || Z.paddingBottom) {
                var t = e;
                t.hasClass(m) || (t = e.closest(S));
                var o = parseInt(t.css("padding-top")) + parseInt(t.css("padding-bottom"));
                n -= o
            }
            return n
        }
        function Xn(e, n) {
            n ? Ln(zt) : Hn(zt),
            clearTimeout(Nt),
            zt.css(st(e)),
            Nt = setTimeout(function() {
                zt.removeClass(s)
            }, 10)
        }
        function Vn(n) {
            var t = zt.find(S + '[data-anchor="' + n + '"]');
            if (!t.length) {
                var o = "undefined" != typeof n ? n - 1 : 0;
                t = e(S).eq(o)
            }
            return t
        }
        function Zn(e, n) {
            var t = n.find(H + '[data-anchor="' + e + '"]');
            return t.length || (e = "undefined" != typeof e ? e : 0,
            t = n.find(H).eq(e)),
            t
        }
        function Nn(e, n) {
            var t = Vn(e);
            if (t.length) {
                var o = Zn(n, t);
                e === Ct || t.hasClass(u) ? jn(o) : qe(t, function() {
                    jn(o)
                })
            }
        }
        function jn(e) {
            e.length && An(e.closest(D), e)
        }
        function qn(e, n) {
            e.append('<div class="' + W + '"><ul></ul></div>');
            var t = e.find(X);
            t.addClass(Z.slidesNavPosition);
            for (var o = 0; o < n; o++)
                t.find("ul").append('<li><a href="#"><span></span></a></li>');
            t.css("margin-left", "-" + t.width() / 2 + "px"),
            t.find("li").first().find("a").addClass(u)
        }
        function Gn(e, n, t, o) {
            var i = "";
            Z.anchors.length && !Z.lockAnchors && (e ? ("undefined" != typeof t && (i = t),
            "undefined" == typeof n && (n = e),
            Tt = n,
            Un(i + "/" + n)) : "undefined" != typeof e ? (Tt = n,
            Un(t)) : Un(t)),
            Jn()
        }
        function Un(e) {
            if (Z.recordHistory)
                location.hash = e;
            else if (Ot || Rt)
                n.history.replaceState(i, i, "#" + e);
            else {
                var t = n.location.href.split("#")[0];
                n.location.replace(t + "#" + e)
            }
        }
        function Qn(e) {
            var n = e.data("anchor")
              , t = e.index();
            return "undefined" == typeof n && (n = t),
            n
        }
        function Jn() {
            var n = e(y)
              , t = n.find(E)
              , o = Qn(n)
              , i = Qn(t)
              , r = String(o);
            t.length && (r = r + "-" + i),
            r = r.replace("/", "-").replace("#", "");
            var a = new RegExp("\\b\\s?" + f + "-[^\\s]+\\b","g");
            bt[0].className = bt[0].className.replace(a, ""),
            bt.addClass(f + "-" + r)
        }
        function Kn() {
            var e, o = t.createElement("p"), r = {
                webkitTransform: "-webkit-transform",
                OTransform: "-o-transform",
                msTransform: "-ms-transform",
                MozTransform: "-moz-transform",
                transform: "transform"
            };
            t.body.insertBefore(o, null);
            for (var a in r)
                o.style[a] !== i && (o.style[a] = "translate3d(1px,1px,1px)",
                e = n.getComputedStyle(o).getPropertyValue(r[a]));
            return t.body.removeChild(o),
            e !== i && e.length > 0 && "none" !== e
        }
        function _n() {
            t.addEventListener ? (t.removeEventListener("mousewheel", Ve, !1),
            t.removeEventListener("wheel", Ve, !1),
            t.removeEventListener("MozMousePixelScroll", Ve, !1)) : t.detachEvent("onmousewheel", Ve)
        }
        function $n() {
            var e, o = "";
            n.addEventListener ? e = "addEventListener" : (e = "attachEvent",
            o = "on");
            var r = "onwheel"in t.createElement("div") ? "wheel" : t.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll";
            "DOMMouseScroll" == r ? t[e](o + "MozMousePixelScroll", Ve, !1) : t[e](o + r, Ve, !1)
        }
        function et() {
            zt.on("mousedown", gn).on("mouseup", mn)
        }
        function nt() {
            zt.off("mousedown", gn).off("mouseup", mn)
        }
        function tt() {
            (Ot || Rt) && (Z.autoScrolling && bt.off(qt.touchmove).on(qt.touchmove, Pe),
            e(a).off(qt.touchstart).on(qt.touchstart, We).off(qt.touchmove).on(qt.touchmove, Ye))
        }
        function ot() {
            (Ot || Rt) && (Z.autoScrolling && bt.off(qt.touchmove),
            e(a).off(qt.touchstart).off(qt.touchmove))
        }
        function it() {
            var e;
            return e = n.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove"
            } : {
                down: "MSPointerDown",
                move: "MSPointerMove"
            }
        }
        function rt(e) {
            var n = [];
            return n.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY,
            n.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX,
            Rt && Fe(e) && Z.scrollBar && "undefined" != typeof e.touches && (n.y = e.touches[0].pageY,
            n.x = e.touches[0].pageX),
            n
        }
        function at(e, n) {
            J(0, "internal"),
            "undefined" != typeof n && (Lt = !0),
            An(e.closest(D), e),
            "undefined" != typeof n && (Lt = !1),
            J(Qt.scrollingSpeed, "internal")
        }
        function lt(e) {
            var n = o.round(e);
            if (Z.css3 && Z.autoScrolling && !Z.scrollBar) {
                var t = "translate3d(0px, -" + n + "px, 0px)";
                Xn(t, !1)
            } else
                Z.autoScrolling && !Z.scrollBar ? zt.css("top", -n) : wt.scrollTop(n)
        }
        function st(e) {
            return {
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e
            }
        }
        function ct(n, t, o) {
            "all" !== t ? Dt[o][t] = n : e.each(Object.keys(Dt[o]), function(e, t) {
                Dt[o][t] = n
            })
        }
        function dt(n) {
            zt.trigger("destroy", [n]),
            q(!1, "internal"),
            ie(!1),
            re(!1),
            zt.addClass(c),
            clearTimeout(Wt),
            clearTimeout(Ft),
            clearTimeout(Yt),
            clearTimeout(Xt),
            clearTimeout(Vt),
            $.off("scroll", Le).off("hashchange", fn).off("resize", zn),
            ee.off("click touchstart", k + " a").off("mouseenter", k + " li").off("mouseleave", k + " li").off("click touchstart", V).off("mouseover", Z.normalScrollElements).off("mouseout", Z.normalScrollElements),
            e(S).off("click touchstart", N),
            pt("dragAndMove") && xt.dragAndMove.destroy(),
            clearTimeout(Wt),
            clearTimeout(Ft),
            n && ft()
        }
        function ft() {
            lt(0),
            zt.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
                $e(e(this), "src")
            }),
            zt.find("img[data-srcset]").each(function() {
                $e(e(this), "srcset")
            }),
            e(k + ", " + X + ", " + N).remove(),
            e(S).css({
                height: "",
                "background-color": "",
                padding: ""
            }),
            e(H).css({
                width: ""
            }),
            zt.css({
                height: "",
                position: "",
                "-ms-touch-action": "",
                "touch-action": ""
            }),
            wt.css({
                overflow: "",
                height: ""
            }),
            e("html").removeClass(d),
            bt.removeClass(l),
            e.each(bt.get(0).className.split(/\s+/), function(e, n) {
                0 === n.indexOf(f) && bt.removeClass(n)
            }),
            e(S + ", " + H).each(function() {
                Z.scrollOverflowHandler && Z.scrollOverflowHandler.remove(e(this)),
                e(this).removeClass(F + " " + u),
                e(this).attr("style", e(this).data("fp-styles"))
            }),
            ut(zt),
            zt.find(C + ", " + Y + ", " + D).each(function() {
                e(this).replaceWith(this.childNodes)
            }),
            wt.scrollTop(0);
            var n = [m, L, P];
            e.each(n, function(n, t) {
                e("." + t).removeClass(t)
            })
        }
        function ut(e) {
            return e.css({
                "-webkit-transition": "none",
                transition: "none"
            })
        }
        function pt(e) {
            return null !== Z[e] && "object" == typeof Z[e] ? Z[e].enabled && xt[e] : Z[e] && xt[e]
        }
        function vt(e, n, t) {
            if (pt(e))
                return xt[e][n](t)
        }
        function ht() {
            return pt("dragAndMove") && xt.dragAndMove.isAnimating
        }
        function gt() {
            return pt("dragAndMove") && xt.dragAndMove.isGrabbing
        }
        function mt(e, n, t) {
            Z[e] = n,
            "internal" !== t && (Qt[e] = n)
        }
        function St() {
            return e("html").hasClass(d) ? void yt("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (Z.continuousVertical && (Z.loopTop || Z.loopBottom) && (Z.continuousVertical = !1,
            yt("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
            Z.scrollBar && Z.scrollOverflow && yt("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),
            !Z.continuousVertical || !Z.scrollBar && Z.autoScrolling || (Z.continuousVertical = !1,
            yt("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
            Z.scrollOverflow && !Z.scrollOverflowHandler && (Z.scrollOverflow = !1,
            yt("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),
            void e.each(Z.anchors, function(n, t) {
                var o = ee.find("[name]").filter(function() {
                    return e(this).attr("name") && e(this).attr("name").toLowerCase() == t.toLowerCase()
                })
                  , i = ee.find("[id]").filter(function() {
                    return e(this).attr("id") && e(this).attr("id").toLowerCase() == t.toLowerCase()
                });
                (i.length || o.length) && (yt("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),
                i.length && yt("error", '"' + t + '" is is being used by another element `id` property'),
                o.length && yt("error", '"' + t + '" is is being used by another element `name` property'))
            }))
        }
        function yt(e, n) {
            console && console[e] && console[e]("fullPage: " + n)
        }
        if (e("html").hasClass(d))
            return void St();
        var wt = e("html, body")
          , bt = e("body")
          , xt = e.fn.fullpage;
        Z = e.extend(!0, {
            menu: !1,
            anchors: [],
            lockAnchors: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationTooltips: [],
            showActiveTooltip: !1,
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            hybrid: !1,
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            fitToSection: !0,
            fitToSectionDelay: 1e3,
            easing: "easeInOutCubic",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            continuousHorizontal: !1,
            scrollHorizontally: !1,
            interlockedSlides: !1,
            dragAndMove: !1,
            offsetSections: !1,
            resetSliders: !1,
            fadingEffect: !1,
            normalScrollElements: null,
            scrollOverflow: !1,
            scrollOverflowReset: !1,
            scrollOverflowHandler: e.fn.fp_scrolloverflow ? e.fn.fp_scrolloverflow.iscrollHandler : null,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            controlArrows: !0,
            controlArrowColor: "#fff",
            verticalCentered: !0,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: !1,
            parallax: !1,
            parallaxOptions: {
                type: "reveal",
                percentage: 62,
                property: "translate"
            },
            sectionSelector: g,
            slideSelector: I,
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,
            lazyLoading: !0
        }, Z);
        var Ct, Tt, At, Mt, kt = !1, Ot = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/), Rt = "ontouchstart"in n || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints, zt = e(this), It = $.height(), Lt = !1, Ht = !0, Et = !0, Bt = [], Dt = {};
        Dt.m = {
            up: !0,
            down: !0,
            left: !0,
            right: !0
        },
        Dt.k = e.extend(!0, {}, Dt.m);
        var Pt, Yt, Ft, Wt, Xt, Vt, Zt, Nt, jt = it(), qt = {
            touchmove: "ontouchmove"in n ? "touchmove" : jt.move,
            touchstart: "ontouchstart"in n ? "touchstart" : jt.down
        }, Gt = !1, Ut = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]', Qt = e.extend(!0, {}, Z), Jt = {};
        St(),
        e.extend(e.easing, {
            easeInOutCubic: function(e, n, t, o, i) {
                return (n /= i / 2) < 1 ? o / 2 * n * n * n + t : o / 2 * ((n -= 2) * n * n + 2) + t
            }
        }),
        e.event.special.destroyed = {
            remove: function(e) {
                e.handler && e.handler()
            }
        },
        e(this).length && (xt.version = "2.9.5",
        xt.setAutoScrolling = q,
        xt.setRecordHistory = Q,
        xt.setScrollingSpeed = J,
        xt.setFitToSection = ne,
        xt.setLockAnchors = te,
        xt.setMouseWheelScrolling = oe,
        xt.setAllowScrolling = ie,
        xt.setKeyboardScrolling = re,
        xt.moveSectionUp = ae,
        xt.moveSectionDown = le,
        xt.silentMoveTo = se,
        xt.moveTo = ce,
        xt.moveSlideRight = de,
        xt.moveSlideLeft = fe,
        xt.fitToSection = Ee,
        xt.reBuild = ue,
        xt.setResponsive = pe,
        xt.getFullpageData = ve,
        xt.destroy = dt,
        xt.landscapeScroll = An,
        xt.shared = {
            afterRenderActions: ze
        },
        me("continuousHorizontal"),
        me("scrollHorizontally"),
        me("resetSliders"),
        me("interlockedSlides"),
        me("responsiveSlides"),
        me("fadingEffect"),
        me("dragAndMove"),
        me("offsetSections"),
        me("scrollOverflowReset"),
        me("parallax"),
        pt("dragAndMove") && xt.dragAndMove.init(),
        he(),
        ge(),
        pt("dragAndMove") && xt.dragAndMove.turnOffTouch());
        var Kt = !1
          , _t = 0
          , $t = 0
          , eo = 0
          , no = 0
          , to = 0;
        !function() {
            var e = n.requestAnimationFrame || n.mozRequestAnimationFrame || n.webkitRequestAnimationFrame || n.msRequestAnimationFrame;
            n.requestAnimationFrame = e
        }();
        var oo = (new Date).getTime()
          , io = !1
          , ro = 0
          , ao = 0
          , lo = It
    }
});

/*! jQuery Validation Plugin - v1.15.0 - 2/24/2016
 * http://jqueryvalidation.org/
 * Copyright (c) 2016 JÃ¶rn Zaefferer; Licensed MIT */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    a.extend(a.fn, {
        validate: function(b) {
            if (!this.length)
                return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"),
            c = new a.validator(b,this[0]),
            a.data(this[0], "validator", c),
            c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) {
                c.settings.submitHandler && (c.submitButton = b.target),
                a(this).hasClass("cancel") && (c.cancelSubmit = !0),
                void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
            }),
            this.on("submit.validate", function(b) {
                function d() {
                    var d, e;
                    return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),
                    e = c.settings.submitHandler.call(c, c.currentForm, b),
                    c.submitButton && d.remove(),
                    void 0 !== e ? e : !1) : !0
                }
                return c.settings.debug && b.preventDefault(),
                c.cancelSubmit ? (c.cancelSubmit = !1,
                d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0,
                !1) : d() : (c.focusInvalid(),
                !1)
            })),
            c)
        },
        valid: function() {
            var b, c, d;
            return a(this[0]).is("form") ? b = this.validate().form() : (d = [],
            b = !0,
            c = a(this[0].form).validate(),
            this.each(function() {
                b = c.element(this) && b,
                b || (d = d.concat(c.errorList))
            }),
            c.errorList = d),
            b
        },
        rules: function(b, c) {
            if (this.length) {
                var d, e, f, g, h, i, j = this[0];
                if (b)
                    switch (d = a.data(j.form, "validator").settings,
                    e = d.rules,
                    f = a.validator.staticRules(j),
                    b) {
                    case "add":
                        a.extend(f, a.validator.normalizeRule(c)),
                        delete f.messages,
                        e[j.name] = f,
                        c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                        break;
                    case "remove":
                        return c ? (i = {},
                        a.each(c.split(/\s/), function(b, c) {
                            i[c] = f[c],
                            delete f[c],
                            "required" === c && a(j).removeAttr("aria-required")
                        }),
                        i) : (delete e[j.name],
                        f)
                    }
                return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j),
                g.required && (h = g.required,
                delete g.required,
                g = a.extend({
                    required: h
                }, g),
                a(j).attr("aria-required", "true")),
                g.remote && (h = g.remote,
                delete g.remote,
                g = a.extend(g, {
                    remote: h
                })),
                g
            }
        }
    }),
    a.extend(a.expr[":"], {
        blank: function(b) {
            return !a.trim("" + a(b).val())
        },
        filled: function(b) {
            var c = a(b).val();
            return null !== c && !!a.trim("" + c)
        },
        unchecked: function(b) {
            return !a(b).prop("checked")
        }
    }),
    a.validator = function(b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b),
        this.currentForm = c,
        this.init()
    }
    ,
    a.validator.format = function(b, c) {
        return 1 === arguments.length ? function() {
            var c = a.makeArray(arguments);
            return c.unshift(b),
            a.validator.format.apply(this, c)
        }
        : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)),
        c.constructor !== Array && (c = [c]),
        a.each(c, function(a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}","g"), function() {
                return c
            })
        }),
        b)
    }
    ,
    a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(a) {
                this.lastActive = a,
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass),
                this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function(a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function(b, c) {
                var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === c.which && "" === this.elementValue(b) || -1 !== a.inArray(c.keyCode, d) || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
            },
            onclick: function(a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function(b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}."),
            step: a.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function b(b) {
                    var c = a.data(this.form, "validator")
                      , d = "on" + b.type.replace(/^validate/, "")
                      , e = c.settings;
                    e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
                }
                this.labelContainer = a(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm),
                this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset();
                var c, d = this.groups = {};
                a.each(this.settings.groups, function(b, c) {
                    "string" == typeof c && (c = c.split(/\s/)),
                    a.each(c, function(a, c) {
                        d[c] = b
                    })
                }),
                c = this.settings.rules,
                a.each(c, function(b, d) {
                    c[b] = a.validator.normalizeRule(d)
                }),
                a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b),
                this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler),
                a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(),
                a.extend(this.submitted, this.errorMap),
                this.invalid = a.extend({}, this.errorMap),
                this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++)
                    this.check(b[a]);
                return this.valid()
            },
            element: function(b) {
                var c, d, e = this.clean(b), f = this.validationTargetFor(e), g = this, h = !0;
                return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f),
                this.currentElements = a(f),
                d = this.groups[f.name],
                d && a.each(this.groups, function(a, b) {
                    b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))),
                    e && e.name in g.invalid && (g.currentElements.push(e),
                    h = h && g.check(e)))
                }),
                c = this.check(f) !== !1,
                h = h && c,
                c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                a(b).attr("aria-invalid", !c)),
                h
            },
            showErrors: function(b) {
                if (b) {
                    var c = this;
                    a.extend(this.errorMap, b),
                    this.errorList = a.map(this.errorMap, function(a, b) {
                        return {
                            message: a,
                            element: c.findByName(b)[0]
                        }
                    }),
                    this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                a.fn.resetForm && a(this.currentForm).resetForm(),
                this.invalid = {},
                this.submitted = {},
                this.prepareForm(),
                this.hideErrors();
                var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(b)
            },
            resetElements: function(a) {
                var b;
                if (this.settings.unhighlight)
                    for (b = 0; a[b]; b++)
                        this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""),
                        this.findByName(a[b].name).removeClass(this.settings.validClass);
                else
                    a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(a) {
                var b, c = 0;
                for (b in a)
                    a[b] && c++;
                return c
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(a) {
                a.not(this.containers).text(""),
                this.addWrapper(a).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (b) {}
            },
            findLastActive: function() {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function(a) {
                    return a.element.name === b.name
                }).length && b
            },
            elements: function() {
                var b = this
                  , c = {};
                return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var d = this.name || a(this).attr("name");
                    return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this),
                    this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0]),
                    d in c || !b.objectLength(a(this).rules()) ? !1 : (c[d] = !0,
                    !0)
                })
            },
            clean: function(b) {
                return a(b)[0]
            },
            errors: function() {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = a([]),
                this.toHide = a([])
            },
            reset: function() {
                this.resetInternals(),
                this.currentElements = a([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(a) {
                this.reset(),
                this.toHide = this.errorsFor(a)
            },
            elementValue: function(b) {
                var c, d, e = a(b), f = b.type;
                return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = b.hasAttribute("contenteditable") ? e.text() : e.val(),
                "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"),
                d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"),
                d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
            },
            check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f = a(b).rules(), g = a.map(f, function(a, b) {
                    return b
                }).length, h = !1, i = this.elementValue(b);
                if ("function" == typeof f.normalizer) {
                    if (i = f.normalizer.call(b, i),
                    "string" != typeof i)
                        throw new TypeError("The normalizer should return a string value.");
                    delete f.normalizer
                }
                for (d in f) {
                    e = {
                        method: d,
                        parameters: f[d]
                    };
                    try {
                        if (c = a.validator.methods[d].call(this, i, b, e.parameters),
                        "dependency-mismatch" === c && 1 === g) {
                            h = !0;
                            continue
                        }
                        if (h = !1,
                        "pending" === c)
                            return void (this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c)
                            return this.formatAndAdd(b, e),
                            !1
                    } catch (j) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j),
                        j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."),
                        j
                    }
                }
                if (!h)
                    return this.objectLength(f) && this.successList.push(b),
                    !0
            },
            customDataMessage: function(b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
            },
            customMessage: function(a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a])
                        return arguments[a]
            },
            defaultMessage: function(b, c) {
                var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>")
                  , e = /\$?\{(\d+)\}/g;
                return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)),
                d
            },
            formatAndAdd: function(a, b) {
                var c = this.defaultMessage(a, b);
                this.errorList.push({
                    message: c,
                    element: a,
                    method: b.method
                }),
                this.errorMap[a.name] = c,
                this.submitted[a.name] = c
            },
            addWrapper: function(a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))),
                a
            },
            defaultShowErrors: function() {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++)
                    c = this.errorList[a],
                    this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (a = 0; this.successList[a]; a++)
                        this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0,
                    b = this.validElements(); b[a]; a++)
                        this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return a(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(b, c) {
                var d, e, f, g, h = this.errorsFor(b), i = this.idOrName(b), j = a(b).attr("aria-describedby");
                h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""),
                d = h,
                this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b),
                h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"),
                j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f,
                a(b).attr("aria-describedby", j),
                e = this.groups[b.name],
                e && (g = this,
                a.each(g.groups, function(b, c) {
                    c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
                })))),
                !c && this.settings.success && (h.text(""),
                "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)),
                this.toShow = this.toShow.add(h)
            },
            errorsFor: function(b) {
                var c = this.escapeCssMeta(this.idOrName(b))
                  , d = a(b).attr("aria-describedby")
                  , e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")),
                this.errors().filter(e)
            },
            escapeCssMeta: function(a) {
                return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function(b) {
                return this.checkable(b) && (b = this.findByName(b.name)),
                a(b).not(this.settings.ignore)[0]
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function(b) {
                return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
            },
            getLength: function(b, c) {
                switch (c.nodeName.toLowerCase()) {
                case "select":
                    return a("option:selected", c).length;
                case "input":
                    if (this.checkable(c))
                        return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },
            depend: function(a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
            },
            dependTypes: {
                "boolean": function(a) {
                    return a
                },
                string: function(b, c) {
                    return !!a(b, c.form).length
                },
                "function": function(a, b) {
                    return a(b)
                }
            },
            optional: function(b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            },
            startRequest: function(b) {
                this.pending[b.name] || (this.pendingRequest++,
                a(b).addClass(this.settings.pendingClass),
                this.pending[b.name] = !0)
            },
            stopRequest: function(b, c) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[b.name],
                a(b).removeClass(this.settings.pendingClass),
                c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(),
                this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(b, c) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, {
                        method: c
                    })
                })
            },
            destroy: function() {
                this.resetForm(),
                a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function(b) {
            var c = {}
              , d = a(b).attr("class");
            return d && a.each(d.split(" "), function() {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }),
            c
        },
        normalizeAttributeRule: function(a, b, c, d) {
            /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d),
            isNaN(d) && (d = void 0)),
            d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
        },
        attributeRules: function(b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods)
                "required" === c ? (d = b.getAttribute(c),
                "" === d && (d = !0),
                d = !!d) : d = f.attr(c),
                this.normalizeAttributeRule(e, g, c, d);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength,
            e
        },
        dataRules: function(b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods)
                d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()),
                this.normalizeAttributeRule(e, g, c, d);
            return e
        },
        staticRules: function(b) {
            var c = {}
              , d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
            c
        },
        normalizeRules: function(b, c) {
            return a.each(b, function(d, e) {
                if (e === !1)
                    return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                    case "string":
                        f = !!a(e.depends, c.form).length;
                        break;
                    case "function":
                        f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 !== e.param ? e.param : !0 : (a.data(c.form, "validator").resetElements(a(c)),
                    delete b[d])
                }
            }),
            a.each(b, function(d, e) {
                b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e
            }),
            a.each(["minlength", "maxlength"], function() {
                b[this] && (b[this] = Number(b[this]))
            }),
            a.each(["rangelength", "range"], function() {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
                b[this] = [Number(c[0]), Number(c[1])]))
            }),
            a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max],
            delete b.min,
            delete b.max),
            null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength],
            delete b.minlength,
            delete b.maxlength)),
            b
        },
        normalizeRule: function(b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function() {
                    c[this] = !0
                }),
                b = c
            }
            return b
        },
        addMethod: function(b, c, d) {
            a.validator.methods[b] = c,
            a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b],
            c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function(b, c, d) {
                if (!this.depend(d, c))
                    return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
            },
            email: function(a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            },
            url: function(a, b) {
                return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)
            },
            date: function(a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
            },
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            },
            number: function(a, b) {
                return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            minlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d
            },
            maxlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || d >= e
            },
            rangelength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            },
            min: function(a, b, c) {
                return this.optional(b) || a >= c
            },
            max: function(a, b, c) {
                return this.optional(b) || c >= a
            },
            range: function(a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            },
            step: function(b, c, d) {
                var e = a(c).attr("type")
                  , f = "Step attribute on input type " + e + " is not supported."
                  , g = ["text", "number", "range"]
                  , h = new RegExp("\\b" + e + "\\b")
                  , i = e && !h.test(g.join());
                if (i)
                    throw new Error(f);
                return this.optional(c) || b % d === 0
            },
            equalTo: function(b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    a(c).valid()
                }),
                b === e.val()
            },
            remote: function(b, c, d, e) {
                if (this.optional(c))
                    return "dependency-mismatch";
                e = "string" == typeof e && e || "remote";
                var f, g, h, i = this.previousValue(c, e);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}),
                i.originalMessage = i.originalMessage || this.settings.messages[c.name][e],
                this.settings.messages[c.name][e] = i.message,
                d = "string" == typeof d && {
                    url: d
                } || d,
                h = a.param(a.extend({
                    data: b
                }, d.data)),
                i.old === h ? i.valid : (i.old = h,
                f = this,
                this.startRequest(c),
                g = {},
                g[c.name] = b,
                a.ajax(a.extend(!0, {
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: g,
                    context: f.currentForm,
                    success: function(a) {
                        var d, g, h, j = a === !0 || "true" === a;
                        f.settings.messages[c.name][e] = i.originalMessage,
                        j ? (h = f.formSubmitted,
                        f.resetInternals(),
                        f.toHide = f.errorsFor(c),
                        f.formSubmitted = h,
                        f.successList.push(c),
                        f.invalid[c.name] = !1,
                        f.showErrors()) : (d = {},
                        g = a || f.defaultMessage(c, {
                            method: e,
                            parameters: b
                        }),
                        d[c.name] = i.message = g,
                        f.invalid[c.name] = !0,
                        f.showErrors(d)),
                        i.valid = j,
                        f.stopRequest(c, j)
                    }
                }, d)),
                "pending")
            }
        }
    });
    var b, c = {};
    a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(),
        c[e] = d)
    }) : (b = a.ajax,
    a.ajax = function(d) {
        var e = ("mode"in d ? d : a.ajaxSettings).mode
          , f = ("port"in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(),
        c[f] = b.apply(this, arguments),
        c[f]) : b.apply(this, arguments)
    }
    )
});

/* Vegas Image slideshow */
!function(t) {
    "use strict";
    var s = {
        slide: 0,
        delay: 5e3,
        preload: !1,
        preloadImage: !1,
        preloadVideo: !1,
        timer: !0,
        overlay: !1,
        autoplay: !0,
        shuffle: !1,
        cover: !0,
        color: null,
        align: "center",
        valign: "center",
        transition: "fade",
        transitionDuration: 1e3,
        transitionRegister: [],
        animation: null,
        animationDuration: "auto",
        animationRegister: [],
        init: function() {},
        play: function() {},
        pause: function() {},
        walk: function() {},
        slides: []
    }
      , i = {}
      , e = function(i, e) {
        this.elmt = i,
        this.settings = t.extend({}, s, t.vegas.defaults, e),
        this.slide = this.settings.slide,
        this.total = this.settings.slides.length,
        this.noshow = this.total < 2,
        this.paused = !this.settings.autoplay || this.noshow,
        this.$elmt = t(i),
        this.$timer = null,
        this.$overlay = null,
        this.$slide = null,
        this.timeout = null,
        this.transitions = ["fade", "fade2", "blur", "blur2", "flash", "flash2", "negative", "negative2", "burn", "burn2", "slideLeft", "slideLeft2", "slideRight", "slideRight2", "slideUp", "slideUp2", "slideDown", "slideDown2", "zoomIn", "zoomIn2", "zoomOut", "zoomOut2", "swirlLeft", "swirlLeft2", "swirlRight", "swirlRight2"],
        this.animations = ["kenburns", "kenburnsLeft", "kenburnsRight", "kenburnsUp", "kenburnsUpLeft", "kenburnsUpRight", "kenburnsDown", "kenburnsDownLeft", "kenburnsDownRight"],
        this.settings.transitionRegister instanceof Array == !1 && (this.settings.transitionRegister = [this.settings.transitionRegister]),
        this.settings.animationRegister instanceof Array == !1 && (this.settings.animationRegister = [this.settings.animationRegister]),
        this.transitions = this.transitions.concat(this.settings.transitionRegister),
        this.animations = this.animations.concat(this.settings.animationRegister),
        this.support = {
            objectFit: "objectFit"in document.body.style,
            transition: "transition"in document.body.style || "WebkitTransition"in document.body.style,
            video: t.vegas.isVideoCompatible()
        },
        this.settings.shuffle === !0 && this.shuffle(),
        this._init()
    };
    e.prototype = {
        _init: function() {
            var s, i, e, n = "BODY" === this.elmt.tagName, o = this.settings.timer, a = this.settings.overlay, r = this;
            this._preload(),
            n || (this.$elmt.css("height", this.$elmt.css("height")),
            s = t('<div class="vegas-wrapper">').css("overflow", this.$elmt.css("overflow")).css("padding", this.$elmt.css("padding")),
            this.$elmt.css("padding") || s.css("padding-top", this.$elmt.css("padding-top")).css("padding-bottom", this.$elmt.css("padding-bottom")).css("padding-left", this.$elmt.css("padding-left")).css("padding-right", this.$elmt.css("padding-right")),
            this.$elmt.clone(!0).children().appendTo(s),
            this.elmt.innerHTML = ""),
            o && this.support.transition && (e = t('<div class="vegas-timer"><div class="vegas-timer-progress">'),
            this.$timer = e,
            this.$elmt.prepend(e)),
            a && (i = t('<div class="vegas-overlay">'),
            "string" == typeof a && i.css("background-image", "url(" + a + ")"),
            this.$overlay = i,
            this.$elmt.prepend(i)),
            this.$elmt.addClass("vegas-container"),
            n || this.$elmt.append(s),
            setTimeout(function() {
                r.trigger("init"),
                r._goto(r.slide),
                r.settings.autoplay && r.trigger("play")
            }, 1)
        },
        _preload: function() {
            var t, s, i;
            for (i = 0; i < this.settings.slides.length; i++)
                (this.settings.preload || this.settings.preloadImages) && this.settings.slides[i].src && (s = new Image,
                s.src = this.settings.slides[i].src),
                (this.settings.preload || this.settings.preloadVideos) && this.support.video && this.settings.slides[i].video && (t = this._video(this.settings.slides[i].video))
        },
        _random: function(t) {
            return t[Math.floor(Math.random() * (t.length - 1))]
        },
        _slideShow: function() {
            var t = this;
            this.total > 1 && !this.paused && !this.noshow && (this.timeout = setTimeout(function() {
                t.next()
            }, this._options("delay")))
        },
        _timer: function(t) {
            var s = this;
            clearTimeout(this.timeout),
            this.$timer && (this.$timer.removeClass("vegas-timer-running").find("div").css("transition-duration", "0ms"),
            this.paused || this.noshow || t && setTimeout(function() {
                s.$timer.addClass("vegas-timer-running").find("div").css("transition-duration", s._options("delay") - 100 + "ms")
            }, 100))
        },
        _video: function(t) {
            var s, e, n = t.toString();
            return i[n] ? i[n] : (t instanceof Array == !1 && (t = [t]),
            s = document.createElement("video"),
            s.preload = !0,
            t.forEach(function(t) {
                e = document.createElement("source"),
                e.src = t,
                s.appendChild(e)
            }),
            i[n] = s,
            s)
        },
        _fadeOutSound: function(t, s) {
            var i = this
              , e = s / 10
              , n = t.volume - .09;
            n > 0 ? (t.volume = n,
            setTimeout(function() {
                i._fadeOutSound(t, s)
            }, e)) : t.pause()
        },
        _fadeInSound: function(t, s) {
            var i = this
              , e = s / 10
              , n = t.volume + .09;
            1 > n && (t.volume = n,
            setTimeout(function() {
                i._fadeInSound(t, s)
            }, e))
        },
        _options: function(t, s) {
            return void 0 === s && (s = this.slide),
            void 0 !== this.settings.slides[s][t] ? this.settings.slides[s][t] : this.settings[t]
        },
        _goto: function(s) {
            function i() {
                f._timer(!0),
                setTimeout(function() {
                    y && (f.support.transition ? (h.css("transition", "all " + _ + "ms").addClass("vegas-transition-" + y + "-out"),
                    h.each(function() {
                        var t = h.find("video").get(0);
                        t && (t.volume = 1,
                        f._fadeOutSound(t, _))
                    }),
                    e.css("transition", "all " + _ + "ms").addClass("vegas-transition-" + y + "-in")) : e.fadeIn(_));
                    for (var t = 0; t < h.length - 4; t++)
                        h.eq(t).remove();
                    f.trigger("walk"),
                    f._slideShow()
                }, 100)
            }
            "undefined" == typeof this.settings.slides[s] && (s = 0),
            this.slide = s;
            var e, n, o, a, r, h = this.$elmt.children(".vegas-slide"), d = this.settings.slides[s].src, l = this.settings.slides[s].video, u = this._options("delay"), g = this._options("align"), c = this._options("valign"), p = this._options("color") || this.$elmt.css("background-color"), m = this._options("cover") ? "cover" : "contain", f = this, v = h.length, y = this._options("transition"), _ = this._options("transitionDuration"), w = this._options("animation"), b = this._options("animationDuration");
            ("random" === y || y instanceof Array) && (y = this._random(y instanceof Array ? y : this.transitions)),
            ("random" === w || w instanceof Array) && (w = this._random(w instanceof Array ? w : this.animations)),
            ("auto" === _ || _ > u) && (_ = u),
            "auto" === b && (b = u),
            e = t('<div class="vegas-slide"></div>'),
            this.support.transition && y && e.addClass("vegas-transition-" + y),
            this.support.video && l ? (a = this._video(l instanceof Array ? l : l.src),
            a.loop = void 0 !== l.loop ? l.loop : !0,
            a.muted = void 0 !== l.mute ? l.mute : !0,
            a.muted === !1 ? (a.volume = 0,
            this._fadeInSound(a, _)) : a.pause(),
            o = t(a).addClass("vegas-video").css("background-color", p),
            this.support.objectFit ? o.css("object-position", g + " " + c).css("object-fit", m).css("width", "100%").css("height", "100%") : "contain" === m && o.css("width", "100%").css("height", "100%"),
            e.append(o)) : (r = new Image,
            n = t('<div class="vegas-slide-inner"></div>').css("background-image", "url(" + d + ")").css("background-color", p).css("background-position", g + " " + c).css("background-size", m),
            this.support.transition && w && n.addClass("vegas-animation-" + w).css("animation-duration", b + "ms"),
            e.append(n)),
            this.support.transition || e.css("display", "none"),
            v ? h.eq(v - 1).after(e) : this.$elmt.prepend(e),
            f._timer(!1),
            a ? (4 === a.readyState && (a.currentTime = 0),
            a.play(),
            i()) : (r.src = d,
            r.onload = i)
        },
        shuffle: function() {
            for (var t, s, i = this.total - 1; i > 0; i--)
                s = Math.floor(Math.random() * (i + 1)),
                t = this.settings.slides[i],
                this.settings.slides[i] = this.settings.slides[s],
                this.settings.slides[s] = t
        },
        play: function() {
            this.paused && (this.paused = !1,
            this.next(),
            this.trigger("play"))
        },
        pause: function() {
            this._timer(!1),
            this.paused = !0,
            this.trigger("pause")
        },
        toggle: function() {
            this.paused ? this.play() : this.pause()
        },
        playing: function() {
            return !this.paused && !this.noshow
        },
        current: function(t) {
            return t ? {
                slide: this.slide,
                data: this.settings.slides[this.slide]
            } : this.slide
        },
        jump: function(t) {
            0 > t || t > this.total - 1 || t === this.slide || (this.slide = t,
            this._goto(this.slide))
        },
        next: function() {
            this.slide++,
            this.slide >= this.total && (this.slide = 0),
            this._goto(this.slide)
        },
        previous: function() {
            this.slide--,
            this.slide < 0 && (this.slide = this.total - 1),
            this._goto(this.slide)
        },
        trigger: function(t) {
            var s = [];
            s = "init" === t ? [this.settings] : [this.slide, this.settings.slides[this.slide]],
            this.$elmt.trigger("vegas" + t, s),
            "function" == typeof this.settings[t] && this.settings[t].apply(this.$elmt, s)
        },
        options: function(i, e) {
            var n = this.settings.slides.slice();
            if ("object" == typeof i)
                this.settings = t.extend({}, s, t.vegas.defaults, i);
            else {
                if ("string" != typeof i)
                    return this.settings;
                if (void 0 === e)
                    return this.settings[i];
                this.settings[i] = e
            }
            this.settings.slides !== n && (this.total = this.settings.slides.length,
            this.noshow = this.total < 2,
            this._preload())
        }
    },
    t.fn.vegas = function(t) {
        var s, i = arguments, n = !1;
        if (void 0 === t || "object" == typeof t)
            return this.each(function() {
                this._vegas || (this._vegas = new e(this,t))
            });
        if ("string" == typeof t) {
            if (this.each(function() {
                var e = this._vegas;
                if (!e)
                    throw new Error("No Vegas applied to this element.");
                "function" == typeof e[t] && "_" !== t[0] ? s = e[t].apply(e, [].slice.call(i, 1)) : n = !0
            }),
            n)
                throw new Error('No method "' + t + '" in Vegas.');
            return void 0 !== s ? s : this
        }
    }
    ,
    t.vegas = {},
    t.vegas.defaults = s,
    t.vegas.isVideoCompatible = function() {
        return !/(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent)
    }
}(window.jQuery || window.Zepto);
//# sourceMappingURL=vegas.min.js.map

/*	--------------------------------------------------------------------
	MaxImage 2.0 (Fullscreen Slideshow for use with jQuery Cycle Plugin)
	--------------------------------------------------------------------
	
	Examples and documentation at: http://www.aaronvanderzwan.com/maximage/2.0/
	Copyright (c) 2007-2012 Aaron Vanderzwan
	Dual licensed under the MIT and GPL licenses.
	
	NOTES:
	This plugin is intended to simplify the creation of fullscreen 
	background slideshows.  It is intended to be used alongside the 
	jQuery Cycle plugin: 
	http://jquery.malsup.com/cycle/
	
	If you simply need a fullscreen background image, please
	refer to the following document for ways to do this that
	are much more simple:
	http://css-tricks.com/perfect-full-page-background-image/
	
	If you have any questions please contact Aaron Vanderzwan
	at http://www.aaronvanderzwan.com/blog/
	Documentation at:
	http://blog.aaronvanderzwan.com/2012/07/maximage-2-0/
	
	HISTORY:
	MaxImage 2.0 is a project first built as jQuery MaxImage Plugin 
	(http://www.aaronvanderzwan.com/maximage/). Once CSS3 came along, 
	the background-size:cover solved the problem MaxImage
	was intended to solve.  However, fully customizable
	fullscreen slideshows is still fairly complex and I have not
	found any helpers for integrating with the jQuery Cycle Plugin.
	MaxCycle is intended to solve this problem.
	
	TABLE OF CONTENTS:
	@Modern
		@setup
		@resize
		@preload
	@Old
		@setup
		@preload
		@onceloaded
		@maximage
		@windowresize
		@doneresizing
	@Cycle
		@setup
	@Adjust
		@center
		@fill
		@maxcover
		@maxcontain
	@Utils
		@browser_tests
		@construct_slide_object
		@sizes
	@modern_browser
	@debug
		
*/
/*!	
 * Maximage Version: 2.0.8 (16-Jan-2012) - http://www.aaronvanderzwan.com/maximage/2.0/
 */

(function($) {
    "use strict";
    $.fn.maximage = function(settings, helperSettings) {

        var config;

        if (typeof settings == 'object' || settings === undefined)
            config = $.extend($.fn.maximage.defaults, settings || {});
        if (typeof settings == 'string')
            config = $.fn.maximage.defaults;

        /*jslint browser: true*/
        $.Body = $('body');
        $.Window = $(window);
        $.Scroll = $('html, body');
        $.Events = {
            RESIZE: 'resize'
        };

        this.each(function() {
            var $self = $(this)
              , preload_count = 0
              , imageCache = [];

            /* --------------------- */

            // @Modern

            /* 
			MODERN BROWSER NOTES:
				Modern browsers have CSS3 background-size option so we setup the DOM to be the following structure for cycle plugin:
				div = cycle
					div = slide with background-size:cover
					div = slide with background-size:cover
					etc.
			*/

            var Modern = {
                setup: function() {
                    if ($.Slides.length > 0) {
                        // Setup images
                        for (var i in $.Slides) {
                            // Set our image
                            var $img = $.Slides[i];

                            // Create a div with a background image so we can use CSS3's position cover (for modern browsers)
                            $self.append('<div class="mc-image ' + $img.theclass + '" title="' + $img.alt + '" style="background-image:url(\'' + $img.url + '\');' + $img.style + '" data-href="' + $img.datahref + '">' + $img.content + '</div>');
                        }

                        // Begin our preload process (increments itself after load)
                        Modern.preload(0);

                        // If using Cycle, this resets the height and width of each div to always fill the window; otherwise can be done with CSS
                        Modern.resize();
                    }
                },
                preload: function(n) {
                    // Preload all of the images but never show them, just use their completion so we know that they are done
                    // 		and so that the browser can cache them / fade them in smoothly

                    // Create new image object
                    var $img = $('<img/>');
                    $img.load(function() {
                        // Once the first image has completed loading, start the slideshow, etc.
                        if (preload_count == 0) {
                            // Only start cycle after first image has loaded
                            Cycle.setup();

                            // Run user defined onFirstImageLoaded() function
                            config.onFirstImageLoaded();
                        }

                        // preload_count starts with 0, $.Slides.length starts with 1
                        if (preload_count == ($.Slides.length - 1)) {
                            // If we have just loaded the final image, run the user defined function onImagesLoaded()
                            config.onImagesLoaded($self);
                        } else {
                            // Increment the counter
                            preload_count++;

                            // Load the next image
                            Modern.preload(preload_count);
                        }
                    });

                    // Set the src... this triggers begin of load
                    $img[0].src = $.Slides[n].url;

                    // Push to external array to avoid cleanup by aggressive garbage collectors
                    imageCache.push($img[0]);
                },
                resize: function() {
                    // Cycle sets the height of each slide so when we resize our browser window this becomes a problem.
                    //  - the cycle option 'slideResize' has to be set to false otherwise it will trump our resize
                    $.Window.bind($.Events.RESIZE, function() {
                        // Remove scrollbars so we can take propper measurements
                        $.Scroll.addClass('mc-hide-scrolls');

                        // Set vars so we don't have to constantly check it
                        $.Window.data('h', Utils.sizes().h).data('w', Utils.sizes().w);

                        // Set container and slides height and width to match the window size
                        $self.height($.Window.data('h')).width($.Window.data('w')).children().height($.Window.data('h')).width($.Window.data('w'));

                        // This is special noise for cycle (cycle has separate height and width for each slide)
                        $self.children().each(function() {
                            this.cycleH = $.Window.data('h');
                            this.cycleW = $.Window.data('w');
                        });

                        // Put the scrollbars back to how they were
                        $($.Scroll).removeClass('mc-hide-scrolls');
                    });
                }
            }

            /* --------------------- */

            // @Old

            /* 
			OLD BROWSER NOTES:
				We setup the dom to be the following structure for cycle plugin on old browsers:
				div = cycle
					div = slide
						img = full screen size image
					div = slide
						img = full screen size image
					etc.
			*/

            var Old = {
                setup: function() {
                    var c, t, $div;

                    // Clear container
                    if ($.BrowserTests.msie && !config.overrideMSIEStop) {
                        // Stop IE from continually trying to preload images that we already removed
                        document.execCommand("Stop", false);
                    }
                    $self.html('');

                    $.Body.addClass('mc-old-browser');

                    if ($.Slides.length > 0) {
                        // Remove scrollbars so we can take propper measurements
                        $.Scroll.addClass('mc-hide-scrolls');

                        // Cache our new dimensions
                        $.Window.data('h', Utils.sizes().h).data('w', Utils.sizes().w);

                        // Add our loading div to the DOM
                        $('body').append($("<div></div>").attr("class", "mc-loader").css({
                            'position': 'absolute',
                            'left': '-9999px'
                        }));

                        //  Loop through slides
                        for (var j in $.Slides) {
                            // Determine content (if container or image)
                            if ($.Slides[j].content.length == 0) {
                                c = '<img src="' + $.Slides[j].url + '" />';
                            } else {
                                c = $.Slides[j].content;
                            }

                            // Create Div
                            $div = $("<div>" + c + "</div>").attr("class", "mc-image mc-image-n" + j + " " + $.Slides[j].theclass);

                            // Add new container div to the DOM
                            $self.append($div);

                            // Account for slides without images
                            if ($('.mc-image-n' + j).children('img').length == 0) {} else {
                                // Add first image to loader to get that started
                                $('div.mc-loader').append($('.mc-image-n' + j).children('img').first().clone().addClass('not-loaded'));
                            }
                        }

                        // Begin preloading
                        Old.preload();

                        // Setup the resize function to listen for window changes
                        Old.windowResize();
                    }
                },
                preload: function() {
                    // Intervals to tell if an images have loaded
                    var t = setInterval(function() {
                        $('.mc-loader').children('img').each(function(i) {
                            // Check if image is loaded
                            var $img = $(this);

                            // Loop through not-loaded images
                            if ($img.hasClass('not-loaded')) {
                                if ($img.height() > 0) {
                                    // Remove Dom notice
                                    $(this).removeClass('not-loaded');

                                    // Set the dimensions
                                    var $img1 = $('div.mc-image-n' + i).children('img').first();

                                    $img1.data('h', $img.height()).data('w', $img.width()).data('ar', ($img.width() / $img.height()));

                                    // Go on
                                    Old.onceLoaded(i)
                                }
                            }
                        });

                        if ($('.not-loaded').length == 0) {
                            // Remove our loader element because all of our images are now loaded
                            $('.mc-loader').remove();

                            // Clear interval when all images are loaded
                            clearInterval(t);
                        }
                    }, 1000);
                },
                onceLoaded: function(m) {
                    // Do maximage magic
                    Old.maximage(m);

                    // Once the first image has completed loading, start the slideshow, etc.
                    if (m == 0) {
                        // If we changed the visibility before, make sure it is back on
                        $self.css({
                            'visibility': 'visible'
                        });

                        // Run user defined onFirstImageLoaded() function
                        config.onFirstImageLoaded();

                        // After everything is done loading, clean up
                    } else if (m == $.Slides.length - 1) {
                        // Only start cycle after the first image has loaded
                        Cycle.setup();

                        // Put the scrollbars back to how they were
                        $($.Scroll).removeClass('mc-hide-scrolls');

                        // If we have just loaded the final image, run the user defined function onImagesLoaded()
                        config.onImagesLoaded($self);

                        if (config.debug) {
                            debug(' - Final Maximage - ');
                            debug($self);
                        }
                    }
                },
                maximage: function(p) {
                    // Cycle sets the height of each slide so when we resize our browser window this becomes a problem.
                    //  - the cycle option 'slideResize' has to be set to false otherwise it will trump our resize
                    $('div.mc-image-n' + p).height($.Window.data('h')).width($.Window.data('w')).children('img').first().each(function() {
                        Adjust.maxcover($(this));
                    });
                },
                windowResize: function() {
                    $.Window.bind($.Events.RESIZE, function() {
                        clearTimeout(this.id);
                        this.id = setTimeout(Old.doneResizing, 200);
                    });
                },
                doneResizing: function() {
                    // The final resize (on finish)
                    // Remove scrollbars so we can take propper measurements
                    $($.Scroll).addClass('mc-hide-scrolls');

                    // Cache our window's new dimensions
                    $.Window.data('h', Utils.sizes().h).data('w', Utils.sizes().w);

                    // Set the container's height and width
                    $self.height($.Window.data('h')).width($.Window.data('w'))

                    // Set slide's height and width to match the window size
                    $self.find('.mc-image').each(function(n) {
                        Old.maximage(n);
                    });

                    // Update cycle's ideas of what our slide's height and width should be
                    var curr_opts = $self.data('cycle.opts');
                    if (curr_opts != undefined) {
                        curr_opts.height = $.Window.data('h');
                        curr_opts.width = $.Window.data('w');
                        jQuery.each(curr_opts.elements, function(index, item) {
                            item.cycleW = $.Window.data('w');
                            item.cycleH = $.Window.data('h');
                        });
                    }

                    // Put the scrollbars back to how they were
                    $($.Scroll).removeClass('mc-hide-scrolls');
                }
            }

            /* --------------------- */

            // @Cycle

            var Cycle = {
                setup: function() {
                    var h, w;

                    $self.addClass('mc-cycle');

                    // Container sizes (if not set)
                    $.Window.data('h', Utils.sizes().h).data('w', Utils.sizes().w);

                    // Prefer CSS Transitions
                    jQuery.easing.easeForCSSTransition = function(x, t, b, c, d, s) {
                        return b + c;
                    }
                    ;

                    var cycleOptions = $.extend({
                        fit: 1,
                        containerResize: 0,
                        height: $.Window.data('h'),
                        width: $.Window.data('w'),
                        slideResize: false,
                        easing: ($.BrowserTests.cssTransitions && config.cssTransitions ? 'easeForCSSTransition' : 'swing')
                    }, config.cycleOptions);

                    $self.cycle(cycleOptions);
                }
            }

            /* --------------------- */

            // @Adjust = Math to center and fill all elements

            var Adjust = {
                center: function($item) {
                    // Note: if alignment is 'left' or 'right' it can be controlled with CSS once verticalCenter 
                    // 	and horizontal center are set to false in the plugin options
                    if (config.verticalCenter) {
                        $item.css({
                            marginTop: (($item.height() - $.Window.data('h')) / 2) * -1
                        })
                    }
                    if (config.horizontalCenter) {
                        $item.css({
                            marginLeft: (($item.width() - $.Window.data('w')) / 2) * -1
                        });
                    }
                },
                fill: function($item) {
                    var $storageEl = $item.is('object') ? $item.parent().first() : $item;

                    if (typeof config.backgroundSize == 'function') {
                        // If someone wants to write their own fill() function, they can: example customBackgroundSize.html
                        config.backgroundSize($item);
                    } else if (config.backgroundSize == 'cover') {
                        if ($.Window.data('w') / $.Window.data('h') < $storageEl.data('ar')) {
                            $item.height($.Window.data('h')).width(($.Window.data('h') * $storageEl.data('ar')).toFixed(0));
                        } else {
                            $item.height(($.Window.data('w') / $storageEl.data('ar')).toFixed(0)).width($.Window.data('w'));
                        }
                    } else if (config.backgroundSize == 'contain') {
                        if ($.Window.data('w') / $.Window.data('h') < $storageEl.data('ar')) {
                            $item.height(($.Window.data('w') / $storageEl.data('ar')).toFixed(0)).width($.Window.data('w'));
                        } else {
                            $item.height($.Window.data('h')).width(($.Window.data('h') * $storageEl.data('ar')).toFixed(0));
                        }
                    } else {
                        debug('The backgroundSize option was not recognized for older browsers.');
                    }
                },
                maxcover: function($item) {
                    Adjust.fill($item);
                    Adjust.center($item);
                },
                maxcontain: function($item) {
                    Adjust.fill($item);
                    Adjust.center($item);
                }
            }

            /* --------------------- */

            // @Utils = General utilities for the plugin

            var Utils = {
                browser_tests: function() {
                    var $div = $('<div />')[0]
                      , vendor = ['Moz', 'Webkit', 'Khtml', 'O', 'ms']
                      , p = 'transition'
                      , obj = {
                        cssTransitions: false,
                        cssBackgroundSize: ("backgroundSize"in $div.style && config.cssBackgroundSize),
                        // Can override cssBackgroundSize in options
                        html5Video: false,
                        msie: false
                    };

                    // Test for CSS Transitions
                    if (config.cssTransitions) {
                        if (typeof $div.style[p] == 'string') {
                            obj.cssTransitions = true
                        }

                        // Tests for vendor specific prop
                        p = p.charAt(0).toUpperCase() + p.substr(1);
                        for (var i = 0; i < vendor.length; i++) {
                            if (vendor[i] + p in $div.style) {
                                obj.cssTransitions = true;
                            }
                        }
                    }

                    // Check if we can play html5 videos
                    if (!!document.createElement('video').canPlayType) {
                        obj.html5Video = true;
                    }

                    // Check for MSIE since we lost $.browser in jQuery
                    obj.msie = (Utils.msie() !== undefined);

                    if (config.debug) {
                        debug(' - Browser Test - ');
                        debug(obj);
                    }

                    return obj;
                },
                construct_slide_object: function() {
                    var obj = new Object()
                      , arr = new Array()
                      , temp = '';

                    $self.children().each(function(i) {
                        var $img = $(this).is('img') ? $(this).clone() : $(this).find('img').first().clone();

                        // reset obj
                        obj = {};

                        // set attributes to obj
                        obj.url = $img.attr('src');
                        obj.title = $img.attr('title') != undefined ? $img.attr('title') : '';
                        obj.alt = $img.attr('alt') != undefined ? $img.attr('alt') : '';
                        obj.theclass = $img.attr('class') != undefined ? $img.attr('class') : '';
                        obj.styles = $img.attr('style') != undefined ? $img.attr('style') : '';
                        obj.orig = $img.clone();
                        obj.datahref = $img.attr('data-href') != undefined ? $img.attr('data-href') : '';
                        obj.content = "";

                        // Setup content for within container
                        if ($(this).find('img').length > 0) {
                            if ($.BrowserTests.cssBackgroundSize) {
                                $(this).find('img').first().remove();
                            }
                            obj.content = $(this).html();
                        }

                        // Stop loading image so we can load them sequentiallyelse{
                        $img[0].src = "";

                        // Remove original object (only on nonIE. IE hangs if you remove an image during load)
                        if ($.BrowserTests.cssBackgroundSize) {
                            $(this).remove();
                        }

                        // attach obj to arr
                        arr.push(obj);
                    });

                    if (config.debug) {
                        debug(' - Slide Object - ');
                        debug(arr);
                    }
                    return arr;
                },
                msie: function() {
                    var undef, v = 3, div = document.createElement('div'), all = div.getElementsByTagName('i');

                    while (div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
                    all[0])
                        ;

                    return v > 4 ? v : undef;
                },
                sizes: function() {
                    var sizes = {
                        h: 0,
                        w: 0
                    };

                    if (config.fillElement == "window") {
                        sizes.h = $.Window.height();
                        sizes.w = $.Window.width();
                    } else {
                        var $fillElement = $self.parents(config.fillElement).first();

                        // Height
                        if ($fillElement.height() == 0 || $fillElement.data('windowHeight') == true) {
                            $fillElement.data('windowHeight', true);
                            sizes.h = $.Window.height();
                        } else {
                            sizes.h = $fillElement.height();
                        }

                        // Width
                        if ($fillElement.width() == 0 || $fillElement.data('windowWidth') == true) {
                            $fillElement.data('windowWidth', true);
                            sizes.w = $.Window.width();
                        } else {
                            sizes.w = $fillElement.width();
                        }
                    }

                    return sizes;
                }
            }

            /* --------------------- */

            // @Instantiation

            // Helper Function
            // Run tests to see what our browser can handle
            $.BrowserTests = Utils.browser_tests();

            if (typeof settings == 'string') {
                // TODO: Resize object fallback for old browsers,  If we are trying to size an HTML5 video and our browser doesn't support it
                if ($.BrowserTests.html5Video || !$self.is('video')) {
                    var to, $storageEl = $self.is('object') ? $self.parent().first() : $self;
                    // Can't assign .data() to '<object>'

                    if (!$.Body.hasClass('mc-old-browser'))
                        $.Body.addClass('mc-old-browser');

                    // Cache our window's new dimensions
                    $.Window.data('h', Utils.sizes().h).data('w', Utils.sizes().w);

                    // Please include height and width attributes on your html elements
                    $storageEl.data('h', $self.height()).data('w', $self.width()).data('ar', $self.width() / $self.height());

                    // We want to resize these elements with the window
                    $.Window.bind($.Events.RESIZE, function() {
                        // Cache our window's new dimensions
                        $.Window.data('h', Utils.sizes().h).data('w', Utils.sizes().w);

                        // Limit resize runs
                        to = $self.data('resizer');
                        clearTimeout(to);
                        to = setTimeout(Adjust[settings]($self), 200);
                        $self.data('resizer', to);
                    });

                    // Initial run
                    Adjust[settings]($self);
                }
            } else {
                // Construct array of image objects for us to use
                $.Slides = Utils.construct_slide_object();

                // If we are allowing background-size:cover run Modern
                if ($.BrowserTests.cssBackgroundSize) {
                    if (config.debug)
                        debug(' - Using Modern - ');
                    Modern.setup();
                } else {
                    if (config.debug)
                        debug(' - Using Old - ');
                    Old.setup();
                }
            }
        });

        // private function for debugging
        function debug($obj) {
            if (window.console && window.console.log) {
                window.console.log($obj);
            }
        }
    }

    // Default options
    $.fn.maximage.defaults = {
        debug: false,
        cssBackgroundSize: true,
        // Force run the functionality used for newer browsers
        cssTransitions: true,
        // Force run the functionality used for old browsers
        verticalCenter: true,
        // Only necessary for old browsers
        horizontalCenter: true,
        // Only necessary for old browsers
        scaleInterval: 20,
        // Only necessary for old browsers
        backgroundSize: 'cover',
        // Only necessary for old browsers (this can be function)
        fillElement: 'window',
        // Either 'window' or a CSS selector for a parent element
        overrideMSIEStop: false,
        // This gives the option to not 'stop' load for MSIE (stops coded background images from loading so we can preload)... 
        // If setting this option to true, please beware of IE7/8 "Stack Overflow" error but if there are more than 13 slides
        // The description of the bug: http://blog.aaronvanderzwan.com/forums/topic/stack-overflow-in-ie-7-8/#post-33038
        onFirstImageLoaded: function() {},
        onImagesLoaded: function() {}
    }
}
)(jQuery);

/* okvideo by okfocus ~ v2.3.2 ~ https://github.com/okfocus/okvideo */
function vimeoPlayerReady() {
    options = jQuery(window).data("okoptions");
    var a = jQuery("#okplayer")[0];
    player = $f(a),
    window.setTimeout(function() {
        jQuery("#okplayer").css("visibility", "visible")
    }, 2e3),
    player.addEvent("ready", function() {
        OKEvents.v.onReady(),
        OKEvents.utils.isMobile() ? OKEvents.v.onPlay() : (player.addEvent("play", OKEvents.v.onPlay),
        player.addEvent("pause", OKEvents.v.onPause),
        player.addEvent("finish", OKEvents.v.onFinish)),
        player.api("play")
    })
}
function onYouTubePlayerAPIReady() {
    options = jQuery(window).data("okoptions"),
    player = new YT.Player("okplayer",{
        videoId: options.video ? options.video.id : null,
        playerVars: {
            autohide: 1,
            autoplay: 0,
            disablekb: options.keyControls,
            cc_load_policy: options.captions,
            controls: options.controls,
            enablejsapi: 1,
            fs: 0,
            modestbranding: 1,
            origin: window.location.origin || window.location.protocol + "//" + window.location.hostname,
            iv_load_policy: options.annotations,
            loop: options.loop,
            showinfo: 0,
            rel: 0,
            wmode: "opaque",
            hd: options.hd
        },
        events: {
            onReady: OKEvents.yt.ready,
            onStateChange: OKEvents.yt.onStateChange,
            onError: OKEvents.yt.error
        }
    })
}
var player, OKEvents, options;
!function(a) {
    "use strict";
    var b = "data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D";
    a.okvideo = function(c) {
        "object" != typeof c && (c = {
            video: c
        });
        var d = this;
        d.init = function() {
            d.options = a.extend({}, a.okvideo.options, c),
            null === d.options.video && (d.options.video = d.options.source),
            d.setOptions();
            var e = d.options.target || a("body")
              , f = e[0] == a("body")[0] ? "fixed" : "absolute";
            e.css({
                position: "relative"
            });
            var g = 3 === d.options.controls ? -999 : "auto"
              , h = '<div id="okplayer-mask" style="position:' + f + ';left:0;top:0;overflow:hidden;z-index:-998;height:100%;width:100%;"></div>';
            OKEvents.utils.isMobile() ? e.append('<div id="okplayer" style="position:' + f + ";left:0;top:0;overflow:hidden;z-index:" + g + ';height:100%;width:100%;"></div>') : (3 === d.options.controls && e.append(h),
            1 === d.options.adproof ? e.append('<div id="okplayer" style="position:' + f + ";left:-10%;top:-10%;overflow:hidden;z-index:" + g + ';height:120%;width:120%;"></div>') : e.append('<div id="okplayer" style="position:' + f + ";left:0;top:0;overflow:hidden;z-index:" + g + ';height:100%;width:100%;"></div>')),
            a("#okplayer-mask").css("background-image", "url(" + b + ")"),
            null === d.options.playlist.list ? "youtube" === d.options.video.provider ? d.loadYouTubeAPI() : "vimeo" === d.options.video.provider && (d.options.volume /= 100,
            d.loadVimeoAPI()) : d.loadYouTubeAPI()
        }
        ,
        d.setOptions = function() {
            for (var b in this.options)
                this.options[b] === !0 && (this.options[b] = 1),
                this.options[b] === !1 && (this.options[b] = 3);
            null === d.options.playlist.list && (d.options.video = d.determineProvider()),
            a(window).data("okoptions", d.options)
        }
        ,
        d.loadYouTubeAPI = function() {
            d.insertJS("//www.youtube.com/player_api")
        }
        ,
        d.loadYouTubePlaylist = function() {
            player.loadPlaylist(d.options.playlist.list, d.options.playlist.index, d.options.playlist.startSeconds, d.options.playlist.suggestedQuality)
        }
        ,
        d.loadVimeoAPI = function() {
            a("#okplayer").replaceWith(function() {
                return '<iframe src="//player.vimeo.com/video/' + d.options.video.id + "?api=1&title=0&byline=0&portrait=0&playbar=0&loop=" + d.options.loop + "&autoplay=" + (1 === d.options.autoplay ? 1 : 0) + '&player_id=okplayer" frameborder="0" style="' + a(this).attr("style") + 'visibility:hidden;background-color:black;" id="' + a(this).attr("id") + '"></iframe>'
            }),
            d.insertJS("//origin-assets.vimeo.com/js/froogaloop2.min.js", function() {
                vimeoPlayerReady()
            })
        }
        ,
        d.insertJS = function(a, b) {
            var c = document.createElement("script");
            b && (c.readyState ? c.onreadystatechange = function() {
                ("loaded" === c.readyState || "complete" === c.readyState) && (c.onreadystatechange = null,
                b())
            }
            : c.onload = function() {
                b()
            }
            ),
            c.src = a;
            var d = document.getElementsByTagName("script")[0];
            d.parentNode.insertBefore(c, d)
        }
        ,
        d.determineProvider = function() {
            var a = document.createElement("a");
            if (a.href = d.options.video,
            /youtube.com/.test(d.options.video))
                return {
                    provider: "youtube",
                    id: a.href.slice(a.href.indexOf("v=") + 2).toString()
                };
            if (/vimeo.com/.test(d.options.video))
                return {
                    provider: "vimeo",
                    id: a.href.split("/")[3].toString()
                };
            if (/[-A-Za-z0-9_]+/.test(d.options.video)) {
                var b = new String(d.options.video.match(/[-A-Za-z0-9_]+/));
                if (11 == b.length)
                    return {
                        provider: "youtube",
                        id: b.toString()
                    };
                for (var c = 0; c < d.options.video.length; c++)
                    if ("number" != typeof parseInt(d.options.video[c]))
                        throw "not vimeo but thought it was for a sec";
                return {
                    provider: "vimeo",
                    id: d.options.video
                }
            }
            throw "OKVideo: Invalid video source"
        }
        ,
        d.init()
    }
    ,
    a.okvideo.options = {
        source: null,
        video: null,
        playlist: {
            list: null,
            index: 0,
            startSeconds: 0,
            suggestedQuality: "default"
        },
        disableKeyControl: 1,
        captions: 0,
        loop: 1,
        hd: 1,
        volume: 0,
        adproof: !1,
        unstarted: null,
        onFinished: null,
        onReady: null,
        onPlay: null,
        onPause: null,
        buffering: null,
        controls: !1,
        autoplay: !0,
        annotations: !0,
        cued: null
    },
    a.fn.okvideo = function(b) {
        return b.target = this,
        this.each(function() {
            new a.okvideo(b)
        })
    }
}(jQuery),
OKEvents = {
    yt: {
        ready: function(a) {
            a.target.setVolume(options.volume),
            1 === options.autoplay && (options.playlist.list ? player.loadPlaylist(options.playlist.list, options.playlist.index, options.playlist.startSeconds, options.playlist.suggestedQuality) : a.target.playVideo()),
            OKEvents.utils.isFunction(options.onReady) && options.onReady()
        },
        onStateChange: function(a) {
            switch (a.data) {
            case -1:
                OKEvents.utils.isFunction(options.unstarted) && options.unstarted();
                break;
            case 0:
                OKEvents.utils.isFunction(options.onFinished) && options.onFinished(),
                options.loop && a.target.playVideo();
                break;
            case 1:
                OKEvents.utils.isFunction(options.onPlay) && options.onPlay();
                break;
            case 2:
                OKEvents.utils.isFunction(options.onPause) && options.onPause();
                break;
            case 3:
                OKEvents.utils.isFunction(options.buffering) && options.buffering();
                break;
            case 5:
                OKEvents.utils.isFunction(options.cued) && options.cued();
                break;
            default:
                throw "OKVideo: received invalid data from YT player."
            }
        },
        error: function(a) {
            throw a
        }
    },
    v: {
        onReady: function() {
            OKEvents.utils.isFunction(options.onReady) && options.onReady()
        },
        onPlay: function() {
            OKEvents.utils.isMobile() || player.api("setVolume", options.volume),
            OKEvents.utils.isFunction(options.onPlay) && options.onPlay()
        },
        onPause: function() {
            OKEvents.utils.isFunction(options.onPause) && options.onPause()
        },
        onFinish: function() {
            OKEvents.utils.isFunction(options.onFinish) && options.onFinish()
        }
    },
    utils: {
        isFunction: function(a) {
            return "function" == typeof a ? !0 : !1
        },
        isMobile: function() {
            return navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/) ? !0 : !1
        }
    }
};

/**
 * Swiper 3.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2017, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: March 10, 2017
 */
!function() {
    "use strict";
    var e, a = function(s, i) {
        function r(e) {
            return Math.floor(e)
        }
        function n() {
            var e = T.params.autoplay
              , a = T.slides.eq(T.activeIndex);
            a.attr("data-swiper-autoplay") && (e = a.attr("data-swiper-autoplay") || T.params.autoplay),
            T.autoplayTimeoutId = setTimeout(function() {
                T.params.loop ? (T.fixLoop(),
                T._slideNext(),
                T.emit("onAutoplay", T)) : T.isEnd ? i.autoplayStopOnLast ? T.stopAutoplay() : (T._slideTo(0),
                T.emit("onAutoplay", T)) : (T._slideNext(),
                T.emit("onAutoplay", T))
            }, e)
        }
        function o(a, t) {
            var s = e(a.target);
            if (!s.is(t))
                if ("string" == typeof t)
                    s = s.parents(t);
                else if (t.nodeType) {
                    var i;
                    return s.parents().each(function(e, a) {
                        a === t && (i = t)
                    }),
                    i ? t : void 0
                }
            if (0 !== s.length)
                return s[0]
        }
        function l(e, a) {
            a = a || {};
            var t = window.MutationObserver || window.WebkitMutationObserver
              , s = new t(function(e) {
                e.forEach(function(e) {
                    T.onResize(!0),
                    T.emit("onObserverUpdate", T, e)
                })
            }
            );
            s.observe(e, {
                attributes: void 0 === a.attributes || a.attributes,
                childList: void 0 === a.childList || a.childList,
                characterData: void 0 === a.characterData || a.characterData
            }),
            T.observers.push(s)
        }
        function p(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = e.keyCode || e.charCode;
            if (!T.params.allowSwipeToNext && (T.isHorizontal() && 39 === a || !T.isHorizontal() && 40 === a))
                return !1;
            if (!T.params.allowSwipeToPrev && (T.isHorizontal() && 37 === a || !T.isHorizontal() && 38 === a))
                return !1;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === a || 39 === a || 38 === a || 40 === a) {
                    var t = !1;
                    if (T.container.parents("." + T.params.slideClass).length > 0 && 0 === T.container.parents("." + T.params.slideActiveClass).length)
                        return;
                    var s = {
                        left: window.pageXOffset,
                        top: window.pageYOffset
                    }
                      , i = window.innerWidth
                      , r = window.innerHeight
                      , n = T.container.offset();
                    T.rtl && (n.left = n.left - T.container[0].scrollLeft);
                    for (var o = [[n.left, n.top], [n.left + T.width, n.top], [n.left, n.top + T.height], [n.left + T.width, n.top + T.height]], l = 0; l < o.length; l++) {
                        var p = o[l];
                        p[0] >= s.left && p[0] <= s.left + i && p[1] >= s.top && p[1] <= s.top + r && (t = !0)
                    }
                    if (!t)
                        return
                }
                T.isHorizontal() ? (37 !== a && 39 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                (39 === a && !T.rtl || 37 === a && T.rtl) && T.slideNext(),
                (37 === a && !T.rtl || 39 === a && T.rtl) && T.slidePrev()) : (38 !== a && 40 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                40 === a && T.slideNext(),
                38 === a && T.slidePrev()),
                T.emit("onKeyPress", T, a)
            }
        }
        function d(e) {
            var a = 0
              , t = 0
              , s = 0
              , i = 0;
            return "detail"in e && (t = e.detail),
            "wheelDelta"in e && (t = -e.wheelDelta / 120),
            "wheelDeltaY"in e && (t = -e.wheelDeltaY / 120),
            "wheelDeltaX"in e && (a = -e.wheelDeltaX / 120),
            "axis"in e && e.axis === e.HORIZONTAL_AXIS && (a = t,
            t = 0),
            s = 10 * a,
            i = 10 * t,
            "deltaY"in e && (i = e.deltaY),
            "deltaX"in e && (s = e.deltaX),
            (s || i) && e.deltaMode && (1 === e.deltaMode ? (s *= 40,
            i *= 40) : (s *= 800,
            i *= 800)),
            s && !a && (a = s < 1 ? -1 : 1),
            i && !t && (t = i < 1 ? -1 : 1),
            {
                spinX: a,
                spinY: t,
                pixelX: s,
                pixelY: i
            }
        }
        function u(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = 0
              , t = T.rtl ? -1 : 1
              , s = d(e);
            if (T.params.mousewheelForceToAxis)
                if (T.isHorizontal()) {
                    if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY)))
                        return;
                    a = s.pixelX * t
                } else {
                    if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX)))
                        return;
                    a = s.pixelY
                }
            else
                a = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * t : -s.pixelY;
            if (0 !== a) {
                if (T.params.mousewheelInvert && (a = -a),
                T.params.freeMode) {
                    var i = T.getWrapperTranslate() + a * T.params.mousewheelSensitivity
                      , r = T.isBeginning
                      , n = T.isEnd;
                    if (i >= T.minTranslate() && (i = T.minTranslate()),
                    i <= T.maxTranslate() && (i = T.maxTranslate()),
                    T.setWrapperTransition(0),
                    T.setWrapperTranslate(i),
                    T.updateProgress(),
                    T.updateActiveIndex(),
                    (!r && T.isBeginning || !n && T.isEnd) && T.updateClasses(),
                    T.params.freeModeSticky ? (clearTimeout(T.mousewheel.timeout),
                    T.mousewheel.timeout = setTimeout(function() {
                        T.slideReset()
                    }, 300)) : T.params.lazyLoading && T.lazy && T.lazy.load(),
                    T.emit("onScroll", T, e),
                    T.params.autoplay && T.params.autoplayDisableOnInteraction && T.stopAutoplay(),
                    0 === i || i === T.maxTranslate())
                        return
                } else {
                    if ((new window.Date).getTime() - T.mousewheel.lastScrollTime > 60)
                        if (a < 0)
                            if (T.isEnd && !T.params.loop || T.animating) {
                                if (T.params.mousewheelReleaseOnEdges)
                                    return !0
                            } else
                                T.slideNext(),
                                T.emit("onScroll", T, e);
                        else if (T.isBeginning && !T.params.loop || T.animating) {
                            if (T.params.mousewheelReleaseOnEdges)
                                return !0
                        } else
                            T.slidePrev(),
                            T.emit("onScroll", T, e);
                    T.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                !1
            }
        }
        function c(a, t) {
            a = e(a);
            var s, i, r, n = T.rtl ? -1 : 1;
            s = a.attr("data-swiper-parallax") || "0",
            i = a.attr("data-swiper-parallax-x"),
            r = a.attr("data-swiper-parallax-y"),
            i || r ? (i = i || "0",
            r = r || "0") : T.isHorizontal() ? (i = s,
            r = "0") : (r = s,
            i = "0"),
            i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t * n + "%" : i * t * n + "px",
            r = r.indexOf("%") >= 0 ? parseInt(r, 10) * t + "%" : r * t + "px",
            a.transform("translate3d(" + i + ", " + r + ",0px)")
        }
        function m(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e),
            e
        }
        if (!(this instanceof a))
            return new a(s,i);
        var h = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            },
            flip: {
                slideShadows: !0,
                limitRotation: !0
            },
            cube: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            },
            fade: {
                crossFade: !1
            },
            parallax: !1,
            zoom: !1,
            zoomMax: 3,
            zoomMin: 1,
            zoomToggle: !0,
            scrollbar: null,
            scrollbarHide: !0,
            scrollbarDraggable: !1,
            scrollbarSnapOnRelease: !1,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelReleaseOnEdges: !1,
            mousewheelInvert: !1,
            mousewheelForceToAxis: !1,
            mousewheelSensitivity: 1,
            mousewheelEventsTarged: "container",
            hashnav: !1,
            hashnavWatchState: !1,
            history: !1,
            replaceState: !1,
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            pagination: null,
            paginationElement: "span",
            paginationClickable: !1,
            paginationHide: !1,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: "bullets",
            resistance: !0,
            resistanceRatio: .85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            controlBy: "slide",
            normalizeSlideIndex: !0,
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationCurrentClass: "swiper-pagination-current",
            paginationTotalClass: "swiper-pagination-total",
            paginationHiddenClass: "swiper-pagination-hidden",
            paginationProgressbarClass: "swiper-pagination-progressbar",
            paginationClickableClass: "swiper-pagination-clickable",
            paginationModifierClass: "swiper-pagination-",
            lazyLoadingClass: "swiper-lazy",
            lazyStatusLoadingClass: "swiper-lazy-loading",
            lazyStatusLoadedClass: "swiper-lazy-loaded",
            lazyPreloaderClass: "swiper-lazy-preloader",
            notificationClass: "swiper-notification",
            preloaderClass: "preloader",
            zoomContainerClass: "swiper-zoom-container",
            observer: !1,
            observeParents: !1,
            a11y: !1,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            runCallbacksOnInit: !0
        }
          , g = i && i.virtualTranslate;
        i = i || {};
        var f = {};
        for (var v in i)
            if ("object" != typeof i[v] || null === i[v] || (i[v].nodeType || i[v] === window || i[v] === document || void 0 !== t && i[v]instanceof t || "undefined" != typeof jQuery && i[v]instanceof jQuery))
                f[v] = i[v];
            else {
                f[v] = {};
                for (var w in i[v])
                    f[v][w] = i[v][w]
            }
        for (var y in h)
            if (void 0 === i[y])
                i[y] = h[y];
            else if ("object" == typeof i[y])
                for (var x in h[y])
                    void 0 === i[y][x] && (i[y][x] = h[y][x]);
        var T = this;
        if (T.params = i,
        T.originalParams = f,
        T.classNames = [],
        void 0 !== e && void 0 !== t && (e = t),
        (void 0 !== e || (e = void 0 === t ? window.Dom7 || window.Zepto || window.jQuery : t)) && (T.$ = e,
        T.currentBreakpoint = void 0,
        T.getActiveBreakpoint = function() {
            if (!T.params.breakpoints)
                return !1;
            var e, a = !1, t = [];
            for (e in T.params.breakpoints)
                T.params.breakpoints.hasOwnProperty(e) && t.push(e);
            t.sort(function(e, a) {
                return parseInt(e, 10) > parseInt(a, 10)
            });
            for (var s = 0; s < t.length; s++)
                (e = t[s]) >= window.innerWidth && !a && (a = e);
            return a || "max"
        }
        ,
        T.setBreakpoint = function() {
            var e = T.getActiveBreakpoint();
            if (e && T.currentBreakpoint !== e) {
                var a = e in T.params.breakpoints ? T.params.breakpoints[e] : T.originalParams
                  , t = T.params.loop && a.slidesPerView !== T.params.slidesPerView;
                for (var s in a)
                    T.params[s] = a[s];
                T.currentBreakpoint = e,
                t && T.destroyLoop && T.reLoop(!0)
            }
        }
        ,
        T.params.breakpoints && T.setBreakpoint(),
        T.container = e(s),
        0 !== T.container.length)) {
            if (T.container.length > 1) {
                var b = [];
                return T.container.each(function() {
                    b.push(new a(this,i))
                }),
                b
            }
            T.container[0].swiper = T,
            T.container.data("swiper", T),
            T.classNames.push(T.params.containerModifierClass + T.params.direction),
            T.params.freeMode && T.classNames.push(T.params.containerModifierClass + "free-mode"),
            T.support.flexbox || (T.classNames.push(T.params.containerModifierClass + "no-flexbox"),
            T.params.slidesPerColumn = 1),
            T.params.autoHeight && T.classNames.push(T.params.containerModifierClass + "autoheight"),
            (T.params.parallax || T.params.watchSlidesVisibility) && (T.params.watchSlidesProgress = !0),
            T.params.touchReleaseOnEdges && (T.params.resistanceRatio = 0),
            ["cube", "coverflow", "flip"].indexOf(T.params.effect) >= 0 && (T.support.transforms3d ? (T.params.watchSlidesProgress = !0,
            T.classNames.push(T.params.containerModifierClass + "3d")) : T.params.effect = "slide"),
            "slide" !== T.params.effect && T.classNames.push(T.params.containerModifierClass + T.params.effect),
            "cube" === T.params.effect && (T.params.resistanceRatio = 0,
            T.params.slidesPerView = 1,
            T.params.slidesPerColumn = 1,
            T.params.slidesPerGroup = 1,
            T.params.centeredSlides = !1,
            T.params.spaceBetween = 0,
            T.params.virtualTranslate = !0),
            "fade" !== T.params.effect && "flip" !== T.params.effect || (T.params.slidesPerView = 1,
            T.params.slidesPerColumn = 1,
            T.params.slidesPerGroup = 1,
            T.params.watchSlidesProgress = !0,
            T.params.spaceBetween = 0,
            void 0 === g && (T.params.virtualTranslate = !0)),
            T.params.grabCursor && T.support.touch && (T.params.grabCursor = !1),
            T.wrapper = T.container.children("." + T.params.wrapperClass),
            T.params.pagination && (T.paginationContainer = e(T.params.pagination),
            T.params.uniqueNavElements && "string" == typeof T.params.pagination && T.paginationContainer.length > 1 && 1 === T.container.find(T.params.pagination).length && (T.paginationContainer = T.container.find(T.params.pagination)),
            "bullets" === T.params.paginationType && T.params.paginationClickable ? T.paginationContainer.addClass(T.params.paginationModifierClass + "clickable") : T.params.paginationClickable = !1,
            T.paginationContainer.addClass(T.params.paginationModifierClass + T.params.paginationType)),
            (T.params.nextButton || T.params.prevButton) && (T.params.nextButton && (T.nextButton = e(T.params.nextButton),
            T.params.uniqueNavElements && "string" == typeof T.params.nextButton && T.nextButton.length > 1 && 1 === T.container.find(T.params.nextButton).length && (T.nextButton = T.container.find(T.params.nextButton))),
            T.params.prevButton && (T.prevButton = e(T.params.prevButton),
            T.params.uniqueNavElements && "string" == typeof T.params.prevButton && T.prevButton.length > 1 && 1 === T.container.find(T.params.prevButton).length && (T.prevButton = T.container.find(T.params.prevButton)))),
            T.isHorizontal = function() {
                return "horizontal" === T.params.direction
            }
            ,
            T.rtl = T.isHorizontal() && ("rtl" === T.container[0].dir.toLowerCase() || "rtl" === T.container.css("direction")),
            T.rtl && T.classNames.push(T.params.containerModifierClass + "rtl"),
            T.rtl && (T.wrongRTL = "-webkit-box" === T.wrapper.css("display")),
            T.params.slidesPerColumn > 1 && T.classNames.push(T.params.containerModifierClass + "multirow"),
            T.device.android && T.classNames.push(T.params.containerModifierClass + "android"),
            T.container.addClass(T.classNames.join(" ")),
            T.translate = 0,
            T.progress = 0,
            T.velocity = 0,
            T.lockSwipeToNext = function() {
                T.params.allowSwipeToNext = !1,
                T.params.allowSwipeToPrev === !1 && T.params.grabCursor && T.unsetGrabCursor()
            }
            ,
            T.lockSwipeToPrev = function() {
                T.params.allowSwipeToPrev = !1,
                T.params.allowSwipeToNext === !1 && T.params.grabCursor && T.unsetGrabCursor()
            }
            ,
            T.lockSwipes = function() {
                T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !1,
                T.params.grabCursor && T.unsetGrabCursor()
            }
            ,
            T.unlockSwipeToNext = function() {
                T.params.allowSwipeToNext = !0,
                T.params.allowSwipeToPrev === !0 && T.params.grabCursor && T.setGrabCursor()
            }
            ,
            T.unlockSwipeToPrev = function() {
                T.params.allowSwipeToPrev = !0,
                T.params.allowSwipeToNext === !0 && T.params.grabCursor && T.setGrabCursor()
            }
            ,
            T.unlockSwipes = function() {
                T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !0,
                T.params.grabCursor && T.setGrabCursor()
            }
            ,
            T.setGrabCursor = function(e) {
                T.container[0].style.cursor = "move",
                T.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                T.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                T.container[0].style.cursor = e ? "grabbing" : "grab"
            }
            ,
            T.unsetGrabCursor = function() {
                T.container[0].style.cursor = ""
            }
            ,
            T.params.grabCursor && T.setGrabCursor(),
            T.imagesToLoad = [],
            T.imagesLoaded = 0,
            T.loadImage = function(e, a, t, s, i, r) {
                function n() {
                    r && r()
                }
                var o;
                e.complete && i ? n() : a ? (o = new window.Image,
                o.onload = n,
                o.onerror = n,
                s && (o.sizes = s),
                t && (o.srcset = t),
                a && (o.src = a)) : n()
            }
            ,
            T.preloadImages = function() {
                function e() {
                    void 0 !== T && null !== T && T && (void 0 !== T.imagesLoaded && T.imagesLoaded++,
                    T.imagesLoaded === T.imagesToLoad.length && (T.params.updateOnImagesReady && T.update(),
                    T.emit("onImagesReady", T)))
                }
                T.imagesToLoad = T.container.find("img");
                for (var a = 0; a < T.imagesToLoad.length; a++)
                    T.loadImage(T.imagesToLoad[a], T.imagesToLoad[a].currentSrc || T.imagesToLoad[a].getAttribute("src"), T.imagesToLoad[a].srcset || T.imagesToLoad[a].getAttribute("srcset"), T.imagesToLoad[a].sizes || T.imagesToLoad[a].getAttribute("sizes"), !0, e)
            }
            ,
            T.autoplayTimeoutId = void 0,
            T.autoplaying = !1,
            T.autoplayPaused = !1,
            T.startAutoplay = function() {
                return void 0 === T.autoplayTimeoutId && (!!T.params.autoplay && (!T.autoplaying && (T.autoplaying = !0,
                T.emit("onAutoplayStart", T),
                void n())))
            }
            ,
            T.stopAutoplay = function(e) {
                T.autoplayTimeoutId && (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId),
                T.autoplaying = !1,
                T.autoplayTimeoutId = void 0,
                T.emit("onAutoplayStop", T))
            }
            ,
            T.pauseAutoplay = function(e) {
                T.autoplayPaused || (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId),
                T.autoplayPaused = !0,
                0 === e ? (T.autoplayPaused = !1,
                n()) : T.wrapper.transitionEnd(function() {
                    T && (T.autoplayPaused = !1,
                    T.autoplaying ? n() : T.stopAutoplay())
                }))
            }
            ,
            T.minTranslate = function() {
                return -T.snapGrid[0]
            }
            ,
            T.maxTranslate = function() {
                return -T.snapGrid[T.snapGrid.length - 1]
            }
            ,
            T.updateAutoHeight = function() {
                var e, a = [], t = 0;
                if ("auto" !== T.params.slidesPerView && T.params.slidesPerView > 1)
                    for (e = 0; e < Math.ceil(T.params.slidesPerView); e++) {
                        var s = T.activeIndex + e;
                        if (s > T.slides.length)
                            break;
                        a.push(T.slides.eq(s)[0])
                    }
                else
                    a.push(T.slides.eq(T.activeIndex)[0]);
                for (e = 0; e < a.length; e++)
                    if (void 0 !== a[e]) {
                        var i = a[e].offsetHeight;
                        t = i > t ? i : t
                    }
                t && T.wrapper.css("height", t + "px")
            }
            ,
            T.updateContainerSize = function() {
                var e, a;
                e = void 0 !== T.params.width ? T.params.width : T.container[0].clientWidth,
                a = void 0 !== T.params.height ? T.params.height : T.container[0].clientHeight,
                0 === e && T.isHorizontal() || 0 === a && !T.isHorizontal() || (e = e - parseInt(T.container.css("padding-left"), 10) - parseInt(T.container.css("padding-right"), 10),
                a = a - parseInt(T.container.css("padding-top"), 10) - parseInt(T.container.css("padding-bottom"), 10),
                T.width = e,
                T.height = a,
                T.size = T.isHorizontal() ? T.width : T.height)
            }
            ,
            T.updateSlidesSize = function() {
                T.slides = T.wrapper.children("." + T.params.slideClass),
                T.snapGrid = [],
                T.slidesGrid = [],
                T.slidesSizesGrid = [];
                var e, a = T.params.spaceBetween, t = -T.params.slidesOffsetBefore, s = 0, i = 0;
                if (void 0 !== T.size) {
                    "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * T.size),
                    T.virtualSize = -a,
                    T.rtl ? T.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : T.slides.css({
                        marginRight: "",
                        marginBottom: ""
                    });
                    var n;
                    T.params.slidesPerColumn > 1 && (n = Math.floor(T.slides.length / T.params.slidesPerColumn) === T.slides.length / T.params.slidesPerColumn ? T.slides.length : Math.ceil(T.slides.length / T.params.slidesPerColumn) * T.params.slidesPerColumn,
                    "auto" !== T.params.slidesPerView && "row" === T.params.slidesPerColumnFill && (n = Math.max(n, T.params.slidesPerView * T.params.slidesPerColumn)));
                    var o, l = T.params.slidesPerColumn, p = n / l, d = p - (T.params.slidesPerColumn * p - T.slides.length);
                    for (e = 0; e < T.slides.length; e++) {
                        o = 0;
                        var u = T.slides.eq(e);
                        if (T.params.slidesPerColumn > 1) {
                            var c, m, h;
                            "column" === T.params.slidesPerColumnFill ? (m = Math.floor(e / l),
                            h = e - m * l,
                            (m > d || m === d && h === l - 1) && ++h >= l && (h = 0,
                            m++),
                            c = m + h * n / l,
                            u.css({
                                "-webkit-box-ordinal-group": c,
                                "-moz-box-ordinal-group": c,
                                "-ms-flex-order": c,
                                "-webkit-order": c,
                                order: c
                            })) : (h = Math.floor(e / p),
                            m = e - h * p),
                            u.css("margin-" + (T.isHorizontal() ? "top" : "left"), 0 !== h && T.params.spaceBetween && T.params.spaceBetween + "px").attr("data-swiper-column", m).attr("data-swiper-row", h)
                        }
                        "none" !== u.css("display") && ("auto" === T.params.slidesPerView ? (o = T.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0),
                        T.params.roundLengths && (o = r(o))) : (o = (T.size - (T.params.slidesPerView - 1) * a) / T.params.slidesPerView,
                        T.params.roundLengths && (o = r(o)),
                        T.isHorizontal() ? T.slides[e].style.width = o + "px" : T.slides[e].style.height = o + "px"),
                        T.slides[e].swiperSlideSize = o,
                        T.slidesSizesGrid.push(o),
                        T.params.centeredSlides ? (t = t + o / 2 + s / 2 + a,
                        0 === s && 0 !== e && (t = t - T.size / 2 - a),
                        0 === e && (t = t - T.size / 2 - a),
                        Math.abs(t) < .001 && (t = 0),
                        i % T.params.slidesPerGroup == 0 && T.snapGrid.push(t),
                        T.slidesGrid.push(t)) : (i % T.params.slidesPerGroup == 0 && T.snapGrid.push(t),
                        T.slidesGrid.push(t),
                        t = t + o + a),
                        T.virtualSize += o + a,
                        s = o,
                        i++)
                    }
                    T.virtualSize = Math.max(T.virtualSize, T.size) + T.params.slidesOffsetAfter;
                    var g;
                    if (T.rtl && T.wrongRTL && ("slide" === T.params.effect || "coverflow" === T.params.effect) && T.wrapper.css({
                        width: T.virtualSize + T.params.spaceBetween + "px"
                    }),
                    T.support.flexbox && !T.params.setWrapperSize || (T.isHorizontal() ? T.wrapper.css({
                        width: T.virtualSize + T.params.spaceBetween + "px"
                    }) : T.wrapper.css({
                        height: T.virtualSize + T.params.spaceBetween + "px"
                    })),
                    T.params.slidesPerColumn > 1 && (T.virtualSize = (o + T.params.spaceBetween) * n,
                    T.virtualSize = Math.ceil(T.virtualSize / T.params.slidesPerColumn) - T.params.spaceBetween,
                    T.isHorizontal() ? T.wrapper.css({
                        width: T.virtualSize + T.params.spaceBetween + "px"
                    }) : T.wrapper.css({
                        height: T.virtualSize + T.params.spaceBetween + "px"
                    }),
                    T.params.centeredSlides)) {
                        for (g = [],
                        e = 0; e < T.snapGrid.length; e++)
                            T.snapGrid[e] < T.virtualSize + T.snapGrid[0] && g.push(T.snapGrid[e]);
                        T.snapGrid = g
                    }
                    if (!T.params.centeredSlides) {
                        for (g = [],
                        e = 0; e < T.snapGrid.length; e++)
                            T.snapGrid[e] <= T.virtualSize - T.size && g.push(T.snapGrid[e]);
                        T.snapGrid = g,
                        Math.floor(T.virtualSize - T.size) - Math.floor(T.snapGrid[T.snapGrid.length - 1]) > 1 && T.snapGrid.push(T.virtualSize - T.size)
                    }
                    0 === T.snapGrid.length && (T.snapGrid = [0]),
                    0 !== T.params.spaceBetween && (T.isHorizontal() ? T.rtl ? T.slides.css({
                        marginLeft: a + "px"
                    }) : T.slides.css({
                        marginRight: a + "px"
                    }) : T.slides.css({
                        marginBottom: a + "px"
                    })),
                    T.params.watchSlidesProgress && T.updateSlidesOffset()
                }
            }
            ,
            T.updateSlidesOffset = function() {
                for (var e = 0; e < T.slides.length; e++)
                    T.slides[e].swiperSlideOffset = T.isHorizontal() ? T.slides[e].offsetLeft : T.slides[e].offsetTop
            }
            ,
            T.currentSlidesPerView = function() {
                var e, a, t = 1;
                if (T.params.centeredSlides) {
                    var s, i = T.slides[T.activeIndex].swiperSlideSize;
                    for (e = T.activeIndex + 1; e < T.slides.length; e++)
                        T.slides[e] && !s && (i += T.slides[e].swiperSlideSize,
                        t++,
                        i > T.size && (s = !0));
                    for (a = T.activeIndex - 1; a >= 0; a--)
                        T.slides[a] && !s && (i += T.slides[a].swiperSlideSize,
                        t++,
                        i > T.size && (s = !0))
                } else
                    for (e = T.activeIndex + 1; e < T.slides.length; e++)
                        T.slidesGrid[e] - T.slidesGrid[T.activeIndex] < T.size && t++;
                return t
            }
            ,
            T.updateSlidesProgress = function(e) {
                if (void 0 === e && (e = T.translate || 0),
                0 !== T.slides.length) {
                    void 0 === T.slides[0].swiperSlideOffset && T.updateSlidesOffset();
                    var a = -e;
                    T.rtl && (a = e),
                    T.slides.removeClass(T.params.slideVisibleClass);
                    for (var t = 0; t < T.slides.length; t++) {
                        var s = T.slides[t]
                          , i = (a + (T.params.centeredSlides ? T.minTranslate() : 0) - s.swiperSlideOffset) / (s.swiperSlideSize + T.params.spaceBetween);
                        if (T.params.watchSlidesVisibility) {
                            var r = -(a - s.swiperSlideOffset)
                              , n = r + T.slidesSizesGrid[t];
                            (r >= 0 && r < T.size || n > 0 && n <= T.size || r <= 0 && n >= T.size) && T.slides.eq(t).addClass(T.params.slideVisibleClass)
                        }
                        s.progress = T.rtl ? -i : i
                    }
                }
            }
            ,
            T.updateProgress = function(e) {
                void 0 === e && (e = T.translate || 0);
                var a = T.maxTranslate() - T.minTranslate()
                  , t = T.isBeginning
                  , s = T.isEnd;
                0 === a ? (T.progress = 0,
                T.isBeginning = T.isEnd = !0) : (T.progress = (e - T.minTranslate()) / a,
                T.isBeginning = T.progress <= 0,
                T.isEnd = T.progress >= 1),
                T.isBeginning && !t && T.emit("onReachBeginning", T),
                T.isEnd && !s && T.emit("onReachEnd", T),
                T.params.watchSlidesProgress && T.updateSlidesProgress(e),
                T.emit("onProgress", T, T.progress)
            }
            ,
            T.updateActiveIndex = function() {
                var e, a, t, s = T.rtl ? T.translate : -T.translate;
                for (a = 0; a < T.slidesGrid.length; a++)
                    void 0 !== T.slidesGrid[a + 1] ? s >= T.slidesGrid[a] && s < T.slidesGrid[a + 1] - (T.slidesGrid[a + 1] - T.slidesGrid[a]) / 2 ? e = a : s >= T.slidesGrid[a] && s < T.slidesGrid[a + 1] && (e = a + 1) : s >= T.slidesGrid[a] && (e = a);
                T.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0),
                t = Math.floor(e / T.params.slidesPerGroup),
                t >= T.snapGrid.length && (t = T.snapGrid.length - 1),
                e !== T.activeIndex && (T.snapIndex = t,
                T.previousIndex = T.activeIndex,
                T.activeIndex = e,
                T.updateClasses(),
                T.updateRealIndex())
            }
            ,
            T.updateRealIndex = function() {
                T.realIndex = parseInt(T.slides.eq(T.activeIndex).attr("data-swiper-slide-index") || T.activeIndex, 10)
            }
            ,
            T.updateClasses = function() {
                T.slides.removeClass(T.params.slideActiveClass + " " + T.params.slideNextClass + " " + T.params.slidePrevClass + " " + T.params.slideDuplicateActiveClass + " " + T.params.slideDuplicateNextClass + " " + T.params.slideDuplicatePrevClass);
                var a = T.slides.eq(T.activeIndex);
                a.addClass(T.params.slideActiveClass),
                i.loop && (a.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + T.realIndex + '"]').addClass(T.params.slideDuplicateActiveClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + T.realIndex + '"]').addClass(T.params.slideDuplicateActiveClass));
                var t = a.next("." + T.params.slideClass).addClass(T.params.slideNextClass);
                T.params.loop && 0 === t.length && (t = T.slides.eq(0),
                t.addClass(T.params.slideNextClass));
                var s = a.prev("." + T.params.slideClass).addClass(T.params.slidePrevClass);
                if (T.params.loop && 0 === s.length && (s = T.slides.eq(-1),
                s.addClass(T.params.slidePrevClass)),
                i.loop && (t.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicateNextClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicateNextClass),
                s.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicatePrevClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicatePrevClass)),
                T.paginationContainer && T.paginationContainer.length > 0) {
                    var r, n = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length;
                    if (T.params.loop ? (r = Math.ceil((T.activeIndex - T.loopedSlides) / T.params.slidesPerGroup),
                    r > T.slides.length - 1 - 2 * T.loopedSlides && (r -= T.slides.length - 2 * T.loopedSlides),
                    r > n - 1 && (r -= n),
                    r < 0 && "bullets" !== T.params.paginationType && (r = n + r)) : r = void 0 !== T.snapIndex ? T.snapIndex : T.activeIndex || 0,
                    "bullets" === T.params.paginationType && T.bullets && T.bullets.length > 0 && (T.bullets.removeClass(T.params.bulletActiveClass),
                    T.paginationContainer.length > 1 ? T.bullets.each(function() {
                        e(this).index() === r && e(this).addClass(T.params.bulletActiveClass)
                    }) : T.bullets.eq(r).addClass(T.params.bulletActiveClass)),
                    "fraction" === T.params.paginationType && (T.paginationContainer.find("." + T.params.paginationCurrentClass).text(r + 1),
                    T.paginationContainer.find("." + T.params.paginationTotalClass).text(n)),
                    "progress" === T.params.paginationType) {
                        var o = (r + 1) / n
                          , l = o
                          , p = 1;
                        T.isHorizontal() || (p = o,
                        l = 1),
                        T.paginationContainer.find("." + T.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + p + ")").transition(T.params.speed)
                    }
                    "custom" === T.params.paginationType && T.params.paginationCustomRender && (T.paginationContainer.html(T.params.paginationCustomRender(T, r + 1, n)),
                    T.emit("onPaginationRendered", T, T.paginationContainer[0]))
                }
                T.params.loop || (T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.isBeginning ? (T.prevButton.addClass(T.params.buttonDisabledClass),
                T.params.a11y && T.a11y && T.a11y.disable(T.prevButton)) : (T.prevButton.removeClass(T.params.buttonDisabledClass),
                T.params.a11y && T.a11y && T.a11y.enable(T.prevButton))),
                T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.isEnd ? (T.nextButton.addClass(T.params.buttonDisabledClass),
                T.params.a11y && T.a11y && T.a11y.disable(T.nextButton)) : (T.nextButton.removeClass(T.params.buttonDisabledClass),
                T.params.a11y && T.a11y && T.a11y.enable(T.nextButton))))
            }
            ,
            T.updatePagination = function() {
                if (T.params.pagination && T.paginationContainer && T.paginationContainer.length > 0) {
                    var e = "";
                    if ("bullets" === T.params.paginationType) {
                        for (var a = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length, t = 0; t < a; t++)
                            e += T.params.paginationBulletRender ? T.params.paginationBulletRender(T, t, T.params.bulletClass) : "<" + T.params.paginationElement + ' class="' + T.params.bulletClass + '"></' + T.params.paginationElement + ">";
                        T.paginationContainer.html(e),
                        T.bullets = T.paginationContainer.find("." + T.params.bulletClass),
                        T.params.paginationClickable && T.params.a11y && T.a11y && T.a11y.initPagination()
                    }
                    "fraction" === T.params.paginationType && (e = T.params.paginationFractionRender ? T.params.paginationFractionRender(T, T.params.paginationCurrentClass, T.params.paginationTotalClass) : '<span class="' + T.params.paginationCurrentClass + '"></span> / <span class="' + T.params.paginationTotalClass + '"></span>',
                    T.paginationContainer.html(e)),
                    "progress" === T.params.paginationType && (e = T.params.paginationProgressRender ? T.params.paginationProgressRender(T, T.params.paginationProgressbarClass) : '<span class="' + T.params.paginationProgressbarClass + '"></span>',
                    T.paginationContainer.html(e)),
                    "custom" !== T.params.paginationType && T.emit("onPaginationRendered", T, T.paginationContainer[0])
                }
            }
            ,
            T.update = function(e) {
                function a() {
                    T.rtl,
                    T.translate;
                    t = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate()),
                    T.setWrapperTranslate(t),
                    T.updateActiveIndex(),
                    T.updateClasses()
                }
                if (T) {
                    T.updateContainerSize(),
                    T.updateSlidesSize(),
                    T.updateProgress(),
                    T.updatePagination(),
                    T.updateClasses(),
                    T.params.scrollbar && T.scrollbar && T.scrollbar.set();
                    var t;
                    if (e) {
                        T.controller && T.controller.spline && (T.controller.spline = void 0),
                        T.params.freeMode ? (a(),
                        T.params.autoHeight && T.updateAutoHeight()) : (("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0)) || a()
                    } else
                        T.params.autoHeight && T.updateAutoHeight()
                }
            }
            ,
            T.onResize = function(e) {
                T.params.onBeforeResize && T.params.onBeforeResize(T),
                T.params.breakpoints && T.setBreakpoint();
                var a = T.params.allowSwipeToPrev
                  , t = T.params.allowSwipeToNext;
                T.params.allowSwipeToPrev = T.params.allowSwipeToNext = !0,
                T.updateContainerSize(),
                T.updateSlidesSize(),
                ("auto" === T.params.slidesPerView || T.params.freeMode || e) && T.updatePagination(),
                T.params.scrollbar && T.scrollbar && T.scrollbar.set(),
                T.controller && T.controller.spline && (T.controller.spline = void 0);
                var s = !1;
                if (T.params.freeMode) {
                    var i = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate());
                    T.setWrapperTranslate(i),
                    T.updateActiveIndex(),
                    T.updateClasses(),
                    T.params.autoHeight && T.updateAutoHeight()
                } else
                    T.updateClasses(),
                    s = ("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0);
                T.params.lazyLoading && !s && T.lazy && T.lazy.load(),
                T.params.allowSwipeToPrev = a,
                T.params.allowSwipeToNext = t,
                T.params.onAfterResize && T.params.onAfterResize(T)
            }
            ,
            T.touchEventsDesktop = {
                start: "mousedown",
                move: "mousemove",
                end: "mouseup"
            },
            window.navigator.pointerEnabled ? T.touchEventsDesktop = {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled && (T.touchEventsDesktop = {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            }),
            T.touchEvents = {
                start: T.support.touch || !T.params.simulateTouch ? "touchstart" : T.touchEventsDesktop.start,
                move: T.support.touch || !T.params.simulateTouch ? "touchmove" : T.touchEventsDesktop.move,
                end: T.support.touch || !T.params.simulateTouch ? "touchend" : T.touchEventsDesktop.end
            },
            (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === T.params.touchEventsTarget ? T.container : T.wrapper).addClass("swiper-wp8-" + T.params.direction),
            T.initEvents = function(e) {
                var a = e ? "off" : "on"
                  , t = e ? "removeEventListener" : "addEventListener"
                  , s = "container" === T.params.touchEventsTarget ? T.container[0] : T.wrapper[0]
                  , r = T.support.touch ? s : document
                  , n = !!T.params.nested;
                if (T.browser.ie)
                    s[t](T.touchEvents.start, T.onTouchStart, !1),
                    r[t](T.touchEvents.move, T.onTouchMove, n),
                    r[t](T.touchEvents.end, T.onTouchEnd, !1);
                else {
                    if (T.support.touch) {
                        var o = !("touchstart" !== T.touchEvents.start || !T.support.passiveListener || !T.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        s[t](T.touchEvents.start, T.onTouchStart, o),
                        s[t](T.touchEvents.move, T.onTouchMove, n),
                        s[t](T.touchEvents.end, T.onTouchEnd, o)
                    }
                    (i.simulateTouch && !T.device.ios && !T.device.android || i.simulateTouch && !T.support.touch && T.device.ios) && (s[t]("mousedown", T.onTouchStart, !1),
                    document[t]("mousemove", T.onTouchMove, n),
                    document[t]("mouseup", T.onTouchEnd, !1))
                }
                window[t]("resize", T.onResize),
                T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.nextButton[a]("click", T.onClickNext),
                T.params.a11y && T.a11y && T.nextButton[a]("keydown", T.a11y.onEnterKey)),
                T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.prevButton[a]("click", T.onClickPrev),
                T.params.a11y && T.a11y && T.prevButton[a]("keydown", T.a11y.onEnterKey)),
                T.params.pagination && T.params.paginationClickable && (T.paginationContainer[a]("click", "." + T.params.bulletClass, T.onClickIndex),
                T.params.a11y && T.a11y && T.paginationContainer[a]("keydown", "." + T.params.bulletClass, T.a11y.onEnterKey)),
                (T.params.preventClicks || T.params.preventClicksPropagation) && s[t]("click", T.preventClicks, !0)
            }
            ,
            T.attachEvents = function() {
                T.initEvents()
            }
            ,
            T.detachEvents = function() {
                T.initEvents(!0)
            }
            ,
            T.allowClick = !0,
            T.preventClicks = function(e) {
                T.allowClick || (T.params.preventClicks && e.preventDefault(),
                T.params.preventClicksPropagation && T.animating && (e.stopPropagation(),
                e.stopImmediatePropagation()))
            }
            ,
            T.onClickNext = function(e) {
                e.preventDefault(),
                T.isEnd && !T.params.loop || T.slideNext()
            }
            ,
            T.onClickPrev = function(e) {
                e.preventDefault(),
                T.isBeginning && !T.params.loop || T.slidePrev()
            }
            ,
            T.onClickIndex = function(a) {
                a.preventDefault();
                var t = e(this).index() * T.params.slidesPerGroup;
                T.params.loop && (t += T.loopedSlides),
                T.slideTo(t)
            }
            ,
            T.updateClickedSlide = function(a) {
                var t = o(a, "." + T.params.slideClass)
                  , s = !1;
                if (t)
                    for (var i = 0; i < T.slides.length; i++)
                        T.slides[i] === t && (s = !0);
                if (!t || !s)
                    return T.clickedSlide = void 0,
                    void (T.clickedIndex = void 0);
                if (T.clickedSlide = t,
                T.clickedIndex = e(t).index(),
                T.params.slideToClickedSlide && void 0 !== T.clickedIndex && T.clickedIndex !== T.activeIndex) {
                    var r, n = T.clickedIndex, l = "auto" === T.params.slidesPerView ? T.currentSlidesPerView() : T.params.slidesPerView;
                    if (T.params.loop) {
                        if (T.animating)
                            return;
                        r = parseInt(e(T.clickedSlide).attr("data-swiper-slide-index"), 10),
                        T.params.centeredSlides ? n < T.loopedSlides - l / 2 || n > T.slides.length - T.loopedSlides + l / 2 ? (T.fixLoop(),
                        n = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + T.params.slideDuplicateClass + ")").eq(0).index(),
                        setTimeout(function() {
                            T.slideTo(n)
                        }, 0)) : T.slideTo(n) : n > T.slides.length - l ? (T.fixLoop(),
                        n = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + T.params.slideDuplicateClass + ")").eq(0).index(),
                        setTimeout(function() {
                            T.slideTo(n)
                        }, 0)) : T.slideTo(n)
                    } else
                        T.slideTo(n)
                }
            }
            ;
            var S, C, z, M, E, P, I, k, L, D, B = "input, select, textarea, button, video", H = Date.now(), G = [];
            T.animating = !1,
            T.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            var X, A;
            T.onTouchStart = function(a) {
                if (a.originalEvent && (a = a.originalEvent),
                (X = "touchstart" === a.type) || !("which"in a) || 3 !== a.which) {
                    if (T.params.noSwiping && o(a, "." + T.params.noSwipingClass))
                        return void (T.allowClick = !0);
                    if (!T.params.swipeHandler || o(a, T.params.swipeHandler)) {
                        var t = T.touches.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX
                          , s = T.touches.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
                        if (!(T.device.ios && T.params.iOSEdgeSwipeDetection && t <= T.params.iOSEdgeSwipeThreshold)) {
                            if (S = !0,
                            C = !1,
                            z = !0,
                            E = void 0,
                            A = void 0,
                            T.touches.startX = t,
                            T.touches.startY = s,
                            M = Date.now(),
                            T.allowClick = !0,
                            T.updateContainerSize(),
                            T.swipeDirection = void 0,
                            T.params.threshold > 0 && (k = !1),
                            "touchstart" !== a.type) {
                                var i = !0;
                                e(a.target).is(B) && (i = !1),
                                document.activeElement && e(document.activeElement).is(B) && document.activeElement.blur(),
                                i && a.preventDefault()
                            }
                            T.emit("onTouchStart", T, a)
                        }
                    }
                }
            }
            ,
            T.onTouchMove = function(a) {
                if (a.originalEvent && (a = a.originalEvent),
                !X || "mousemove" !== a.type) {
                    if (a.preventedByNestedSwiper)
                        return T.touches.startX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX,
                        void (T.touches.startY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY);
                    if (T.params.onlyExternal)
                        return T.allowClick = !1,
                        void (S && (T.touches.startX = T.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX,
                        T.touches.startY = T.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY,
                        M = Date.now()));
                    if (X && T.params.touchReleaseOnEdges && !T.params.loop)
                        if (T.isHorizontal()) {
                            if (T.touches.currentX < T.touches.startX && T.translate <= T.maxTranslate() || T.touches.currentX > T.touches.startX && T.translate >= T.minTranslate())
                                return
                        } else if (T.touches.currentY < T.touches.startY && T.translate <= T.maxTranslate() || T.touches.currentY > T.touches.startY && T.translate >= T.minTranslate())
                            return;
                    if (X && document.activeElement && a.target === document.activeElement && e(a.target).is(B))
                        return C = !0,
                        void (T.allowClick = !1);
                    if (z && T.emit("onTouchMove", T, a),
                    !(a.targetTouches && a.targetTouches.length > 1)) {
                        if (T.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX,
                        T.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY,
                        void 0 === E) {
                            var t;
                            T.isHorizontal() && T.touches.currentY === T.touches.startY || !T.isHorizontal() && T.touches.currentX === T.touches.startX ? E = !1 : (t = 180 * Math.atan2(Math.abs(T.touches.currentY - T.touches.startY), Math.abs(T.touches.currentX - T.touches.startX)) / Math.PI,
                            E = T.isHorizontal() ? t > T.params.touchAngle : 90 - t > T.params.touchAngle)
                        }
                        if (E && T.emit("onTouchMoveOpposite", T, a),
                        void 0 === A && (T.touches.currentX === T.touches.startX && T.touches.currentY === T.touches.startY || (A = !0)),
                        S) {
                            if (E)
                                return void (S = !1);
                            if (A) {
                                T.allowClick = !1,
                                T.emit("onSliderMove", T, a),
                                a.preventDefault(),
                                T.params.touchMoveStopPropagation && !T.params.nested && a.stopPropagation(),
                                C || (i.loop && T.fixLoop(),
                                I = T.getWrapperTranslate(),
                                T.setWrapperTransition(0),
                                T.animating && T.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),
                                T.params.autoplay && T.autoplaying && (T.params.autoplayDisableOnInteraction ? T.stopAutoplay() : T.pauseAutoplay()),
                                D = !1,
                                !T.params.grabCursor || T.params.allowSwipeToNext !== !0 && T.params.allowSwipeToPrev !== !0 || T.setGrabCursor(!0)),
                                C = !0;
                                var s = T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX : T.touches.currentY - T.touches.startY;
                                s *= T.params.touchRatio,
                                T.rtl && (s = -s),
                                T.swipeDirection = s > 0 ? "prev" : "next",
                                P = s + I;
                                var r = !0;
                                if (s > 0 && P > T.minTranslate() ? (r = !1,
                                T.params.resistance && (P = T.minTranslate() - 1 + Math.pow(-T.minTranslate() + I + s, T.params.resistanceRatio))) : s < 0 && P < T.maxTranslate() && (r = !1,
                                T.params.resistance && (P = T.maxTranslate() + 1 - Math.pow(T.maxTranslate() - I - s, T.params.resistanceRatio))),
                                r && (a.preventedByNestedSwiper = !0),
                                !T.params.allowSwipeToNext && "next" === T.swipeDirection && P < I && (P = I),
                                !T.params.allowSwipeToPrev && "prev" === T.swipeDirection && P > I && (P = I),
                                T.params.threshold > 0) {
                                    if (!(Math.abs(s) > T.params.threshold || k))
                                        return void (P = I);
                                    if (!k)
                                        return k = !0,
                                        T.touches.startX = T.touches.currentX,
                                        T.touches.startY = T.touches.currentY,
                                        P = I,
                                        void (T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX : T.touches.currentY - T.touches.startY)
                                }
                                T.params.followFinger && ((T.params.freeMode || T.params.watchSlidesProgress) && T.updateActiveIndex(),
                                T.params.freeMode && (0 === G.length && G.push({
                                    position: T.touches[T.isHorizontal() ? "startX" : "startY"],
                                    time: M
                                }),
                                G.push({
                                    position: T.touches[T.isHorizontal() ? "currentX" : "currentY"],
                                    time: (new window.Date).getTime()
                                })),
                                T.updateProgress(P),
                                T.setWrapperTranslate(P))
                            }
                        }
                    }
                }
            }
            ,
            T.onTouchEnd = function(a) {
                if (a.originalEvent && (a = a.originalEvent),
                z && T.emit("onTouchEnd", T, a),
                z = !1,
                S) {
                    T.params.grabCursor && C && S && (T.params.allowSwipeToNext === !0 || T.params.allowSwipeToPrev === !0) && T.setGrabCursor(!1);
                    var t = Date.now()
                      , s = t - M;
                    if (T.allowClick && (T.updateClickedSlide(a),
                    T.emit("onTap", T, a),
                    s < 300 && t - H > 300 && (L && clearTimeout(L),
                    L = setTimeout(function() {
                        T && (T.params.paginationHide && T.paginationContainer.length > 0 && !e(a.target).hasClass(T.params.bulletClass) && T.paginationContainer.toggleClass(T.params.paginationHiddenClass),
                        T.emit("onClick", T, a))
                    }, 300)),
                    s < 300 && t - H < 300 && (L && clearTimeout(L),
                    T.emit("onDoubleTap", T, a))),
                    H = Date.now(),
                    setTimeout(function() {
                        T && (T.allowClick = !0)
                    }, 0),
                    !S || !C || !T.swipeDirection || 0 === T.touches.diff || P === I)
                        return void (S = C = !1);
                    S = C = !1;
                    var i;
                    if (i = T.params.followFinger ? T.rtl ? T.translate : -T.translate : -P,
                    T.params.freeMode) {
                        if (i < -T.minTranslate())
                            return void T.slideTo(T.activeIndex);
                        if (i > -T.maxTranslate())
                            return void (T.slides.length < T.snapGrid.length ? T.slideTo(T.snapGrid.length - 1) : T.slideTo(T.slides.length - 1));
                        if (T.params.freeModeMomentum) {
                            if (G.length > 1) {
                                var r = G.pop()
                                  , n = G.pop()
                                  , o = r.position - n.position
                                  , l = r.time - n.time;
                                T.velocity = o / l,
                                T.velocity = T.velocity / 2,
                                Math.abs(T.velocity) < T.params.freeModeMinimumVelocity && (T.velocity = 0),
                                (l > 150 || (new window.Date).getTime() - r.time > 300) && (T.velocity = 0)
                            } else
                                T.velocity = 0;
                            T.velocity = T.velocity * T.params.freeModeMomentumVelocityRatio,
                            G.length = 0;
                            var p = 1e3 * T.params.freeModeMomentumRatio
                              , d = T.velocity * p
                              , u = T.translate + d;
                            T.rtl && (u = -u);
                            var c, m = !1, h = 20 * Math.abs(T.velocity) * T.params.freeModeMomentumBounceRatio;
                            if (u < T.maxTranslate())
                                T.params.freeModeMomentumBounce ? (u + T.maxTranslate() < -h && (u = T.maxTranslate() - h),
                                c = T.maxTranslate(),
                                m = !0,
                                D = !0) : u = T.maxTranslate();
                            else if (u > T.minTranslate())
                                T.params.freeModeMomentumBounce ? (u - T.minTranslate() > h && (u = T.minTranslate() + h),
                                c = T.minTranslate(),
                                m = !0,
                                D = !0) : u = T.minTranslate();
                            else if (T.params.freeModeSticky) {
                                var g, f = 0;
                                for (f = 0; f < T.snapGrid.length; f += 1)
                                    if (T.snapGrid[f] > -u) {
                                        g = f;
                                        break
                                    }
                                u = Math.abs(T.snapGrid[g] - u) < Math.abs(T.snapGrid[g - 1] - u) || "next" === T.swipeDirection ? T.snapGrid[g] : T.snapGrid[g - 1],
                                T.rtl || (u = -u)
                            }
                            if (0 !== T.velocity)
                                p = T.rtl ? Math.abs((-u - T.translate) / T.velocity) : Math.abs((u - T.translate) / T.velocity);
                            else if (T.params.freeModeSticky)
                                return void T.slideReset();
                            T.params.freeModeMomentumBounce && m ? (T.updateProgress(c),
                            T.setWrapperTransition(p),
                            T.setWrapperTranslate(u),
                            T.onTransitionStart(),
                            T.animating = !0,
                            T.wrapper.transitionEnd(function() {
                                T && D && (T.emit("onMomentumBounce", T),
                                T.setWrapperTransition(T.params.speed),
                                T.setWrapperTranslate(c),
                                T.wrapper.transitionEnd(function() {
                                    T && T.onTransitionEnd()
                                }))
                            })) : T.velocity ? (T.updateProgress(u),
                            T.setWrapperTransition(p),
                            T.setWrapperTranslate(u),
                            T.onTransitionStart(),
                            T.animating || (T.animating = !0,
                            T.wrapper.transitionEnd(function() {
                                T && T.onTransitionEnd()
                            }))) : T.updateProgress(u),
                            T.updateActiveIndex()
                        }
                        return void ((!T.params.freeModeMomentum || s >= T.params.longSwipesMs) && (T.updateProgress(),
                        T.updateActiveIndex()))
                    }
                    var v, w = 0, y = T.slidesSizesGrid[0];
                    for (v = 0; v < T.slidesGrid.length; v += T.params.slidesPerGroup)
                        void 0 !== T.slidesGrid[v + T.params.slidesPerGroup] ? i >= T.slidesGrid[v] && i < T.slidesGrid[v + T.params.slidesPerGroup] && (w = v,
                        y = T.slidesGrid[v + T.params.slidesPerGroup] - T.slidesGrid[v]) : i >= T.slidesGrid[v] && (w = v,
                        y = T.slidesGrid[T.slidesGrid.length - 1] - T.slidesGrid[T.slidesGrid.length - 2]);
                    var x = (i - T.slidesGrid[w]) / y;
                    if (s > T.params.longSwipesMs) {
                        if (!T.params.longSwipes)
                            return void T.slideTo(T.activeIndex);
                        "next" === T.swipeDirection && (x >= T.params.longSwipesRatio ? T.slideTo(w + T.params.slidesPerGroup) : T.slideTo(w)),
                        "prev" === T.swipeDirection && (x > 1 - T.params.longSwipesRatio ? T.slideTo(w + T.params.slidesPerGroup) : T.slideTo(w))
                    } else {
                        if (!T.params.shortSwipes)
                            return void T.slideTo(T.activeIndex);
                        "next" === T.swipeDirection && T.slideTo(w + T.params.slidesPerGroup),
                        "prev" === T.swipeDirection && T.slideTo(w)
                    }
                }
            }
            ,
            T._slideTo = function(e, a) {
                return T.slideTo(e, a, !0, !0)
            }
            ,
            T.slideTo = function(e, a, t, s) {
                void 0 === t && (t = !0),
                void 0 === e && (e = 0),
                e < 0 && (e = 0),
                T.snapIndex = Math.floor(e / T.params.slidesPerGroup),
                T.snapIndex >= T.snapGrid.length && (T.snapIndex = T.snapGrid.length - 1);
                var i = -T.snapGrid[T.snapIndex];
                if (T.params.autoplay && T.autoplaying && (s || !T.params.autoplayDisableOnInteraction ? T.pauseAutoplay(a) : T.stopAutoplay()),
                T.updateProgress(i),
                T.params.normalizeSlideIndex)
                    for (var r = 0; r < T.slidesGrid.length; r++)
                        -Math.floor(100 * i) >= Math.floor(100 * T.slidesGrid[r]) && (e = r);
                return !(!T.params.allowSwipeToNext && i < T.translate && i < T.minTranslate()) && (!(!T.params.allowSwipeToPrev && i > T.translate && i > T.maxTranslate() && (T.activeIndex || 0) !== e) && (void 0 === a && (a = T.params.speed),
                T.previousIndex = T.activeIndex || 0,
                T.activeIndex = e,
                T.updateRealIndex(),
                T.rtl && -i === T.translate || !T.rtl && i === T.translate ? (T.params.autoHeight && T.updateAutoHeight(),
                T.updateClasses(),
                "slide" !== T.params.effect && T.setWrapperTranslate(i),
                !1) : (T.updateClasses(),
                T.onTransitionStart(t),
                0 === a || T.browser.lteIE9 ? (T.setWrapperTranslate(i),
                T.setWrapperTransition(0),
                T.onTransitionEnd(t)) : (T.setWrapperTranslate(i),
                T.setWrapperTransition(a),
                T.animating || (T.animating = !0,
                T.wrapper.transitionEnd(function() {
                    T && T.onTransitionEnd(t)
                }))),
                !0)))
            }
            ,
            T.onTransitionStart = function(e) {
                void 0 === e && (e = !0),
                T.params.autoHeight && T.updateAutoHeight(),
                T.lazy && T.lazy.onTransitionStart(),
                e && (T.emit("onTransitionStart", T),
                T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeStart", T),
                T.activeIndex > T.previousIndex ? T.emit("onSlideNextStart", T) : T.emit("onSlidePrevStart", T)))
            }
            ,
            T.onTransitionEnd = function(e) {
                T.animating = !1,
                T.setWrapperTransition(0),
                void 0 === e && (e = !0),
                T.lazy && T.lazy.onTransitionEnd(),
                e && (T.emit("onTransitionEnd", T),
                T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeEnd", T),
                T.activeIndex > T.previousIndex ? T.emit("onSlideNextEnd", T) : T.emit("onSlidePrevEnd", T))),
                T.params.history && T.history && T.history.setHistory(T.params.history, T.activeIndex),
                T.params.hashnav && T.hashnav && T.hashnav.setHash()
            }
            ,
            T.slideNext = function(e, a, t) {
                if (T.params.loop) {
                    if (T.animating)
                        return !1;
                    T.fixLoop();
                    T.container[0].clientLeft;
                    return T.slideTo(T.activeIndex + T.params.slidesPerGroup, a, e, t)
                }
                return T.slideTo(T.activeIndex + T.params.slidesPerGroup, a, e, t)
            }
            ,
            T._slideNext = function(e) {
                return T.slideNext(!0, e, !0)
            }
            ,
            T.slidePrev = function(e, a, t) {
                if (T.params.loop) {
                    if (T.animating)
                        return !1;
                    T.fixLoop();
                    T.container[0].clientLeft;
                    return T.slideTo(T.activeIndex - 1, a, e, t)
                }
                return T.slideTo(T.activeIndex - 1, a, e, t)
            }
            ,
            T._slidePrev = function(e) {
                return T.slidePrev(!0, e, !0)
            }
            ,
            T.slideReset = function(e, a, t) {
                return T.slideTo(T.activeIndex, a, e)
            }
            ,
            T.disableTouchControl = function() {
                return T.params.onlyExternal = !0,
                !0
            }
            ,
            T.enableTouchControl = function() {
                return T.params.onlyExternal = !1,
                !0
            }
            ,
            T.setWrapperTransition = function(e, a) {
                T.wrapper.transition(e),
                "slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTransition(e),
                T.params.parallax && T.parallax && T.parallax.setTransition(e),
                T.params.scrollbar && T.scrollbar && T.scrollbar.setTransition(e),
                T.params.control && T.controller && T.controller.setTransition(e, a),
                T.emit("onSetTransition", T, e)
            }
            ,
            T.setWrapperTranslate = function(e, a, t) {
                var s = 0
                  , i = 0;
                T.isHorizontal() ? s = T.rtl ? -e : e : i = e,
                T.params.roundLengths && (s = r(s),
                i = r(i)),
                T.params.virtualTranslate || (T.support.transforms3d ? T.wrapper.transform("translate3d(" + s + "px, " + i + "px, 0px)") : T.wrapper.transform("translate(" + s + "px, " + i + "px)")),
                T.translate = T.isHorizontal() ? s : i;
                var n, o = T.maxTranslate() - T.minTranslate();
                n = 0 === o ? 0 : (e - T.minTranslate()) / o,
                n !== T.progress && T.updateProgress(e),
                a && T.updateActiveIndex(),
                "slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTranslate(T.translate),
                T.params.parallax && T.parallax && T.parallax.setTranslate(T.translate),
                T.params.scrollbar && T.scrollbar && T.scrollbar.setTranslate(T.translate),
                T.params.control && T.controller && T.controller.setTranslate(T.translate, t),
                T.emit("onSetTranslate", T, T.translate)
            }
            ,
            T.getTranslate = function(e, a) {
                var t, s, i, r;
                return void 0 === a && (a = "x"),
                T.params.virtualTranslate ? T.rtl ? -T.translate : T.translate : (i = window.getComputedStyle(e, null),
                window.WebKitCSSMatrix ? (s = i.transform || i.webkitTransform,
                s.split(",").length > 6 && (s = s.split(", ").map(function(e) {
                    return e.replace(",", ".")
                }).join(", ")),
                r = new window.WebKitCSSMatrix("none" === s ? "" : s)) : (r = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
                t = r.toString().split(",")),
                "x" === a && (s = window.WebKitCSSMatrix ? r.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])),
                "y" === a && (s = window.WebKitCSSMatrix ? r.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])),
                T.rtl && s && (s = -s),
                s || 0)
            }
            ,
            T.getWrapperTranslate = function(e) {
                return void 0 === e && (e = T.isHorizontal() ? "x" : "y"),
                T.getTranslate(T.wrapper[0], e)
            }
            ,
            T.observers = [],
            T.initObservers = function() {
                if (T.params.observeParents)
                    for (var e = T.container.parents(), a = 0; a < e.length; a++)
                        l(e[a]);
                l(T.container[0], {
                    childList: !1
                }),
                l(T.wrapper[0], {
                    attributes: !1
                })
            }
            ,
            T.disconnectObservers = function() {
                for (var e = 0; e < T.observers.length; e++)
                    T.observers[e].disconnect();
                T.observers = []
            }
            ,
            T.createLoop = function() {
                T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove();
                var a = T.wrapper.children("." + T.params.slideClass);
                "auto" !== T.params.slidesPerView || T.params.loopedSlides || (T.params.loopedSlides = a.length),
                T.loopedSlides = parseInt(T.params.loopedSlides || T.params.slidesPerView, 10),
                T.loopedSlides = T.loopedSlides + T.params.loopAdditionalSlides,
                T.loopedSlides > a.length && (T.loopedSlides = a.length);
                var t, s = [], i = [];
                for (a.each(function(t, r) {
                    var n = e(this);
                    t < T.loopedSlides && i.push(r),
                    t < a.length && t >= a.length - T.loopedSlides && s.push(r),
                    n.attr("data-swiper-slide-index", t)
                }),
                t = 0; t < i.length; t++)
                    T.wrapper.append(e(i[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass));
                for (t = s.length - 1; t >= 0; t--)
                    T.wrapper.prepend(e(s[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass))
            }
            ,
            T.destroyLoop = function() {
                T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove(),
                T.slides.removeAttr("data-swiper-slide-index")
            }
            ,
            T.reLoop = function(e) {
                var a = T.activeIndex - T.loopedSlides;
                T.destroyLoop(),
                T.createLoop(),
                T.updateSlidesSize(),
                e && T.slideTo(a + T.loopedSlides, 0, !1)
            }
            ,
            T.fixLoop = function() {
                var e;
                T.activeIndex < T.loopedSlides ? (e = T.slides.length - 3 * T.loopedSlides + T.activeIndex,
                e += T.loopedSlides,
                T.slideTo(e, 0, !1, !0)) : ("auto" === T.params.slidesPerView && T.activeIndex >= 2 * T.loopedSlides || T.activeIndex > T.slides.length - 2 * T.params.slidesPerView) && (e = -T.slides.length + T.activeIndex + T.loopedSlides,
                e += T.loopedSlides,
                T.slideTo(e, 0, !1, !0))
            }
            ,
            T.appendSlide = function(e) {
                if (T.params.loop && T.destroyLoop(),
                "object" == typeof e && e.length)
                    for (var a = 0; a < e.length; a++)
                        e[a] && T.wrapper.append(e[a]);
                else
                    T.wrapper.append(e);
                T.params.loop && T.createLoop(),
                T.params.observer && T.support.observer || T.update(!0)
            }
            ,
            T.prependSlide = function(e) {
                T.params.loop && T.destroyLoop();
                var a = T.activeIndex + 1;
                if ("object" == typeof e && e.length) {
                    for (var t = 0; t < e.length; t++)
                        e[t] && T.wrapper.prepend(e[t]);
                    a = T.activeIndex + e.length
                } else
                    T.wrapper.prepend(e);
                T.params.loop && T.createLoop(),
                T.params.observer && T.support.observer || T.update(!0),
                T.slideTo(a, 0, !1)
            }
            ,
            T.removeSlide = function(e) {
                T.params.loop && (T.destroyLoop(),
                T.slides = T.wrapper.children("." + T.params.slideClass));
                var a, t = T.activeIndex;
                if ("object" == typeof e && e.length) {
                    for (var s = 0; s < e.length; s++)
                        a = e[s],
                        T.slides[a] && T.slides.eq(a).remove(),
                        a < t && t--;
                    t = Math.max(t, 0)
                } else
                    a = e,
                    T.slides[a] && T.slides.eq(a).remove(),
                    a < t && t--,
                    t = Math.max(t, 0);
                T.params.loop && T.createLoop(),
                T.params.observer && T.support.observer || T.update(!0),
                T.params.loop ? T.slideTo(t + T.loopedSlides, 0, !1) : T.slideTo(t, 0, !1)
            }
            ,
            T.removeAllSlides = function() {
                for (var e = [], a = 0; a < T.slides.length; a++)
                    e.push(a);
                T.removeSlide(e)
            }
            ,
            T.effects = {
                fade: {
                    setTranslate: function() {
                        for (var e = 0; e < T.slides.length; e++) {
                            var a = T.slides.eq(e)
                              , t = a[0].swiperSlideOffset
                              , s = -t;
                            T.params.virtualTranslate || (s -= T.translate);
                            var i = 0;
                            T.isHorizontal() || (i = s,
                            s = 0);
                            var r = T.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                            a.css({
                                opacity: r
                            }).transform("translate3d(" + s + "px, " + i + "px, 0px)")
                        }
                    },
                    setTransition: function(e) {
                        if (T.slides.transition(e),
                        T.params.virtualTranslate && 0 !== e) {
                            var a = !1;
                            T.slides.transitionEnd(function() {
                                if (!a && T) {
                                    a = !0,
                                    T.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++)
                                        T.wrapper.trigger(e[t])
                                }
                            })
                        }
                    }
                },
                flip: {
                    setTranslate: function() {
                        for (var a = 0; a < T.slides.length; a++) {
                            var t = T.slides.eq(a)
                              , s = t[0].progress;
                            T.params.flip.limitRotation && (s = Math.max(Math.min(t[0].progress, 1), -1));
                            var i = t[0].swiperSlideOffset
                              , r = -180 * s
                              , n = r
                              , o = 0
                              , l = -i
                              , p = 0;
                            if (T.isHorizontal() ? T.rtl && (n = -n) : (p = l,
                            l = 0,
                            o = -n,
                            n = 0),
                            t[0].style.zIndex = -Math.abs(Math.round(s)) + T.slides.length,
                            T.params.flip.slideShadows) {
                                var d = T.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top")
                                  , u = T.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                                0 === d.length && (d = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'),
                                t.append(d)),
                                0 === u.length && (u = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                t.append(u)),
                                d.length && (d[0].style.opacity = Math.max(-s, 0)),
                                u.length && (u[0].style.opacity = Math.max(s, 0))
                            }
                            t.transform("translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
                        }
                    },
                    setTransition: function(a) {
                        if (T.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a),
                        T.params.virtualTranslate && 0 !== a) {
                            var t = !1;
                            T.slides.eq(T.activeIndex).transitionEnd(function() {
                                if (!t && T && e(this).hasClass(T.params.slideActiveClass)) {
                                    t = !0,
                                    T.animating = !1;
                                    for (var a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], s = 0; s < a.length; s++)
                                        T.wrapper.trigger(a[s])
                                }
                            })
                        }
                    }
                },
                cube: {
                    setTranslate: function() {
                        var a, t = 0;
                        T.params.cube.shadow && (T.isHorizontal() ? (a = T.wrapper.find(".swiper-cube-shadow"),
                        0 === a.length && (a = e('<div class="swiper-cube-shadow"></div>'),
                        T.wrapper.append(a)),
                        a.css({
                            height: T.width + "px"
                        })) : (a = T.container.find(".swiper-cube-shadow"),
                        0 === a.length && (a = e('<div class="swiper-cube-shadow"></div>'),
                        T.container.append(a))));
                        for (var s = 0; s < T.slides.length; s++) {
                            var i = T.slides.eq(s)
                              , r = 90 * s
                              , n = Math.floor(r / 360);
                            T.rtl && (r = -r,
                            n = Math.floor(-r / 360));
                            var o = Math.max(Math.min(i[0].progress, 1), -1)
                              , l = 0
                              , p = 0
                              , d = 0;
                            s % 4 == 0 ? (l = 4 * -n * T.size,
                            d = 0) : (s - 1) % 4 == 0 ? (l = 0,
                            d = 4 * -n * T.size) : (s - 2) % 4 == 0 ? (l = T.size + 4 * n * T.size,
                            d = T.size) : (s - 3) % 4 == 0 && (l = -T.size,
                            d = 3 * T.size + 4 * T.size * n),
                            T.rtl && (l = -l),
                            T.isHorizontal() || (p = l,
                            l = 0);
                            var u = "rotateX(" + (T.isHorizontal() ? 0 : -r) + "deg) rotateY(" + (T.isHorizontal() ? r : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + d + "px)";
                            if (o <= 1 && o > -1 && (t = 90 * s + 90 * o,
                            T.rtl && (t = 90 * -s - 90 * o)),
                            i.transform(u),
                            T.params.cube.slideShadows) {
                                var c = T.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top")
                                  , m = T.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'),
                                i.append(c)),
                                0 === m.length && (m = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                i.append(m)),
                                c.length && (c[0].style.opacity = Math.max(-o, 0)),
                                m.length && (m[0].style.opacity = Math.max(o, 0))
                            }
                        }
                        if (T.wrapper.css({
                            "-webkit-transform-origin": "50% 50% -" + T.size / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + T.size / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + T.size / 2 + "px",
                            "transform-origin": "50% 50% -" + T.size / 2 + "px"
                        }),
                        T.params.cube.shadow)
                            if (T.isHorizontal())
                                a.transform("translate3d(0px, " + (T.width / 2 + T.params.cube.shadowOffset) + "px, " + -T.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + T.params.cube.shadowScale + ")");
                            else {
                                var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90)
                                  , g = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2)
                                  , f = T.params.cube.shadowScale
                                  , v = T.params.cube.shadowScale / g
                                  , w = T.params.cube.shadowOffset;
                                a.transform("scale3d(" + f + ", 1, " + v + ") translate3d(0px, " + (T.height / 2 + w) + "px, " + -T.height / 2 / v + "px) rotateX(-90deg)")
                            }
                        var y = T.isSafari || T.isUiWebView ? -T.size / 2 : 0;
                        T.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (T.isHorizontal() ? 0 : t) + "deg) rotateY(" + (T.isHorizontal() ? -t : 0) + "deg)")
                    },
                    setTransition: function(e) {
                        T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                        T.params.cube.shadow && !T.isHorizontal() && T.container.find(".swiper-cube-shadow").transition(e)
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var a = T.translate, t = T.isHorizontal() ? -a + T.width / 2 : -a + T.height / 2, s = T.isHorizontal() ? T.params.coverflow.rotate : -T.params.coverflow.rotate, i = T.params.coverflow.depth, r = 0, n = T.slides.length; r < n; r++) {
                            var o = T.slides.eq(r)
                              , l = T.slidesSizesGrid[r]
                              , p = o[0].swiperSlideOffset
                              , d = (t - p - l / 2) / l * T.params.coverflow.modifier
                              , u = T.isHorizontal() ? s * d : 0
                              , c = T.isHorizontal() ? 0 : s * d
                              , m = -i * Math.abs(d)
                              , h = T.isHorizontal() ? 0 : T.params.coverflow.stretch * d
                              , g = T.isHorizontal() ? T.params.coverflow.stretch * d : 0;
                            Math.abs(g) < .001 && (g = 0),
                            Math.abs(h) < .001 && (h = 0),
                            Math.abs(m) < .001 && (m = 0),
                            Math.abs(u) < .001 && (u = 0),
                            Math.abs(c) < .001 && (c = 0);
                            var f = "translate3d(" + g + "px," + h + "px," + m + "px)  rotateX(" + c + "deg) rotateY(" + u + "deg)";
                            if (o.transform(f),
                            o[0].style.zIndex = 1 - Math.abs(Math.round(d)),
                            T.params.coverflow.slideShadows) {
                                var v = T.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top")
                                  , w = T.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'),
                                o.append(v)),
                                0 === w.length && (w = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                o.append(w)),
                                v.length && (v[0].style.opacity = d > 0 ? d : 0),
                                w.length && (w[0].style.opacity = -d > 0 ? -d : 0)
                            }
                        }
                        if (T.browser.ie) {
                            T.wrapper[0].style.perspectiveOrigin = t + "px 50%"
                        }
                    },
                    setTransition: function(e) {
                        T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                    }
                }
            },
            T.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function(a, t) {
                    if (void 0 !== a && (void 0 === t && (t = !0),
                    0 !== T.slides.length)) {
                        var s = T.slides.eq(a)
                          , i = s.find("." + T.params.lazyLoadingClass + ":not(." + T.params.lazyStatusLoadedClass + "):not(." + T.params.lazyStatusLoadingClass + ")");
                        !s.hasClass(T.params.lazyLoadingClass) || s.hasClass(T.params.lazyStatusLoadedClass) || s.hasClass(T.params.lazyStatusLoadingClass) || (i = i.add(s[0])),
                        0 !== i.length && i.each(function() {
                            var a = e(this);
                            a.addClass(T.params.lazyStatusLoadingClass);
                            var i = a.attr("data-background")
                              , r = a.attr("data-src")
                              , n = a.attr("data-srcset")
                              , o = a.attr("data-sizes");
                            T.loadImage(a[0], r || i, n, o, !1, function() {
                                if (void 0 !== T && null !== T && T) {
                                    if (i ? (a.css("background-image", 'url("' + i + '")'),
                                    a.removeAttr("data-background")) : (n && (a.attr("srcset", n),
                                    a.removeAttr("data-srcset")),
                                    o && (a.attr("sizes", o),
                                    a.removeAttr("data-sizes")),
                                    r && (a.attr("src", r),
                                    a.removeAttr("data-src"))),
                                    a.addClass(T.params.lazyStatusLoadedClass).removeClass(T.params.lazyStatusLoadingClass),
                                    s.find("." + T.params.lazyPreloaderClass + ", ." + T.params.preloaderClass).remove(),
                                    T.params.loop && t) {
                                        var e = s.attr("data-swiper-slide-index");
                                        if (s.hasClass(T.params.slideDuplicateClass)) {
                                            var l = T.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + T.params.slideDuplicateClass + ")");
                                            T.lazy.loadImageInSlide(l.index(), !1)
                                        } else {
                                            var p = T.wrapper.children("." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                            T.lazy.loadImageInSlide(p.index(), !1)
                                        }
                                    }
                                    T.emit("onLazyImageReady", T, s[0], a[0])
                                }
                            }),
                            T.emit("onLazyImageLoad", T, s[0], a[0])
                        })
                    }
                },
                load: function() {
                    var a, t = T.params.slidesPerView;
                    if ("auto" === t && (t = 0),
                    T.lazy.initialImageLoaded || (T.lazy.initialImageLoaded = !0),
                    T.params.watchSlidesVisibility)
                        T.wrapper.children("." + T.params.slideVisibleClass).each(function() {
                            T.lazy.loadImageInSlide(e(this).index())
                        });
                    else if (t > 1)
                        for (a = T.activeIndex; a < T.activeIndex + t; a++)
                            T.slides[a] && T.lazy.loadImageInSlide(a);
                    else
                        T.lazy.loadImageInSlide(T.activeIndex);
                    if (T.params.lazyLoadingInPrevNext)
                        if (t > 1 || T.params.lazyLoadingInPrevNextAmount && T.params.lazyLoadingInPrevNextAmount > 1) {
                            var s = T.params.lazyLoadingInPrevNextAmount
                              , i = t
                              , r = Math.min(T.activeIndex + i + Math.max(s, i), T.slides.length)
                              , n = Math.max(T.activeIndex - Math.max(i, s), 0);
                            for (a = T.activeIndex + t; a < r; a++)
                                T.slides[a] && T.lazy.loadImageInSlide(a);
                            for (a = n; a < T.activeIndex; a++)
                                T.slides[a] && T.lazy.loadImageInSlide(a)
                        } else {
                            var o = T.wrapper.children("." + T.params.slideNextClass);
                            o.length > 0 && T.lazy.loadImageInSlide(o.index());
                            var l = T.wrapper.children("." + T.params.slidePrevClass);
                            l.length > 0 && T.lazy.loadImageInSlide(l.index())
                        }
                },
                onTransitionStart: function() {
                    T.params.lazyLoading && (T.params.lazyLoadingOnTransitionStart || !T.params.lazyLoadingOnTransitionStart && !T.lazy.initialImageLoaded) && T.lazy.load()
                },
                onTransitionEnd: function() {
                    T.params.lazyLoading && !T.params.lazyLoadingOnTransitionStart && T.lazy.load()
                }
            },
            T.scrollbar = {
                isTouched: !1,
                setDragPosition: function(e) {
                    var a = T.scrollbar
                      , t = T.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY
                      , s = t - a.track.offset()[T.isHorizontal() ? "left" : "top"] - a.dragSize / 2
                      , i = -T.minTranslate() * a.moveDivider
                      , r = -T.maxTranslate() * a.moveDivider;
                    s < i ? s = i : s > r && (s = r),
                    s = -s / a.moveDivider,
                    T.updateProgress(s),
                    T.setWrapperTranslate(s, !0)
                },
                dragStart: function(e) {
                    var a = T.scrollbar;
                    a.isTouched = !0,
                    e.preventDefault(),
                    e.stopPropagation(),
                    a.setDragPosition(e),
                    clearTimeout(a.dragTimeout),
                    a.track.transition(0),
                    T.params.scrollbarHide && a.track.css("opacity", 1),
                    T.wrapper.transition(100),
                    a.drag.transition(100),
                    T.emit("onScrollbarDragStart", T)
                },
                dragMove: function(e) {
                    var a = T.scrollbar;
                    a.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                    a.setDragPosition(e),
                    T.wrapper.transition(0),
                    a.track.transition(0),
                    a.drag.transition(0),
                    T.emit("onScrollbarDragMove", T))
                },
                dragEnd: function(e) {
                    var a = T.scrollbar;
                    a.isTouched && (a.isTouched = !1,
                    T.params.scrollbarHide && (clearTimeout(a.dragTimeout),
                    a.dragTimeout = setTimeout(function() {
                        a.track.css("opacity", 0),
                        a.track.transition(400)
                    }, 1e3)),
                    T.emit("onScrollbarDragEnd", T),
                    T.params.scrollbarSnapOnRelease && T.slideReset())
                },
                draggableEvents: function() {
                    return T.params.simulateTouch !== !1 || T.support.touch ? T.touchEvents : T.touchEventsDesktop
                }(),
                enableDraggable: function() {
                    var a = T.scrollbar
                      , t = T.support.touch ? a.track : document;
                    e(a.track).on(a.draggableEvents.start, a.dragStart),
                    e(t).on(a.draggableEvents.move, a.dragMove),
                    e(t).on(a.draggableEvents.end, a.dragEnd)
                },
                disableDraggable: function() {
                    var a = T.scrollbar
                      , t = T.support.touch ? a.track : document;
                    e(a.track).off(a.draggableEvents.start, a.dragStart),
                    e(t).off(a.draggableEvents.move, a.dragMove),
                    e(t).off(a.draggableEvents.end, a.dragEnd)
                },
                set: function() {
                    if (T.params.scrollbar) {
                        var a = T.scrollbar;
                        a.track = e(T.params.scrollbar),
                        T.params.uniqueNavElements && "string" == typeof T.params.scrollbar && a.track.length > 1 && 1 === T.container.find(T.params.scrollbar).length && (a.track = T.container.find(T.params.scrollbar)),
                        a.drag = a.track.find(".swiper-scrollbar-drag"),
                        0 === a.drag.length && (a.drag = e('<div class="swiper-scrollbar-drag"></div>'),
                        a.track.append(a.drag)),
                        a.drag[0].style.width = "",
                        a.drag[0].style.height = "",
                        a.trackSize = T.isHorizontal() ? a.track[0].offsetWidth : a.track[0].offsetHeight,
                        a.divider = T.size / T.virtualSize,
                        a.moveDivider = a.divider * (a.trackSize / T.size),
                        a.dragSize = a.trackSize * a.divider,
                        T.isHorizontal() ? a.drag[0].style.width = a.dragSize + "px" : a.drag[0].style.height = a.dragSize + "px",
                        a.divider >= 1 ? a.track[0].style.display = "none" : a.track[0].style.display = "",
                        T.params.scrollbarHide && (a.track[0].style.opacity = 0)
                    }
                },
                setTranslate: function() {
                    if (T.params.scrollbar) {
                        var e, a = T.scrollbar, t = (T.translate,
                        a.dragSize);
                        e = (a.trackSize - a.dragSize) * T.progress,
                        T.rtl && T.isHorizontal() ? (e = -e,
                        e > 0 ? (t = a.dragSize - e,
                        e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : e < 0 ? (t = a.dragSize + e,
                        e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e),
                        T.isHorizontal() ? (T.support.transforms3d ? a.drag.transform("translate3d(" + e + "px, 0, 0)") : a.drag.transform("translateX(" + e + "px)"),
                        a.drag[0].style.width = t + "px") : (T.support.transforms3d ? a.drag.transform("translate3d(0px, " + e + "px, 0)") : a.drag.transform("translateY(" + e + "px)"),
                        a.drag[0].style.height = t + "px"),
                        T.params.scrollbarHide && (clearTimeout(a.timeout),
                        a.track[0].style.opacity = 1,
                        a.timeout = setTimeout(function() {
                            a.track[0].style.opacity = 0,
                            a.track.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function(e) {
                    T.params.scrollbar && T.scrollbar.drag.transition(e)
                }
            },
            T.controller = {
                LinearSpline: function(e, a) {
                    var t = function() {
                        var e, a, t;
                        return function(s, i) {
                            for (a = -1,
                            e = s.length; e - a > 1; )
                                s[t = e + a >> 1] <= i ? a = t : e = t;
                            return e
                        }
                    }();
                    this.x = e,
                    this.y = a,
                    this.lastIndex = e.length - 1;
                    var s, i;
                    this.x.length;
                    this.interpolate = function(e) {
                        return e ? (i = t(this.x, e),
                        s = i - 1,
                        (e - this.x[s]) * (this.y[i] - this.y[s]) / (this.x[i] - this.x[s]) + this.y[s]) : 0
                    }
                },
                getInterpolateFunction: function(e) {
                    T.controller.spline || (T.controller.spline = T.params.loop ? new T.controller.LinearSpline(T.slidesGrid,e.slidesGrid) : new T.controller.LinearSpline(T.snapGrid,e.snapGrid))
                },
                setTranslate: function(e, t) {
                    function s(a) {
                        e = a.rtl && "horizontal" === a.params.direction ? -T.translate : T.translate,
                        "slide" === T.params.controlBy && (T.controller.getInterpolateFunction(a),
                        r = -T.controller.spline.interpolate(-e)),
                        r && "container" !== T.params.controlBy || (i = (a.maxTranslate() - a.minTranslate()) / (T.maxTranslate() - T.minTranslate()),
                        r = (e - T.minTranslate()) * i + a.minTranslate()),
                        T.params.controlInverse && (r = a.maxTranslate() - r),
                        a.updateProgress(r),
                        a.setWrapperTranslate(r, !1, T),
                        a.updateActiveIndex()
                    }
                    var i, r, n = T.params.control;
                    if (Array.isArray(n))
                        for (var o = 0; o < n.length; o++)
                            n[o] !== t && n[o]instanceof a && s(n[o]);
                    else
                        n instanceof a && t !== n && s(n)
                },
                setTransition: function(e, t) {
                    function s(a) {
                        a.setWrapperTransition(e, T),
                        0 !== e && (a.onTransitionStart(),
                        a.wrapper.transitionEnd(function() {
                            r && (a.params.loop && "slide" === T.params.controlBy && a.fixLoop(),
                            a.onTransitionEnd())
                        }))
                    }
                    var i, r = T.params.control;
                    if (Array.isArray(r))
                        for (i = 0; i < r.length; i++)
                            r[i] !== t && r[i]instanceof a && s(r[i]);
                    else
                        r instanceof a && t !== r && s(r)
                }
            },
            T.hashnav = {
                onHashCange: function(e, a) {
                    var t = document.location.hash.replace("#", "");
                    t !== T.slides.eq(T.activeIndex).attr("data-hash") && T.slideTo(T.wrapper.children("." + T.params.slideClass + '[data-hash="' + t + '"]').index())
                },
                attachEvents: function(a) {
                    var t = a ? "off" : "on";
                    e(window)[t]("hashchange", T.hashnav.onHashCange)
                },
                setHash: function() {
                    if (T.hashnav.initialized && T.params.hashnav)
                        if (T.params.replaceState && window.history && window.history.replaceState)
                            window.history.replaceState(null, null, "#" + T.slides.eq(T.activeIndex).attr("data-hash") || "");
                        else {
                            var e = T.slides.eq(T.activeIndex)
                              , a = e.attr("data-hash") || e.attr("data-history");
                            document.location.hash = a || ""
                        }
                },
                init: function() {
                    if (T.params.hashnav && !T.params.history) {
                        T.hashnav.initialized = !0;
                        var e = document.location.hash.replace("#", "");
                        if (e)
                            for (var a = 0, t = T.slides.length; a < t; a++) {
                                var s = T.slides.eq(a)
                                  , i = s.attr("data-hash") || s.attr("data-history");
                                if (i === e && !s.hasClass(T.params.slideDuplicateClass)) {
                                    var r = s.index();
                                    T.slideTo(r, 0, T.params.runCallbacksOnInit, !0)
                                }
                            }
                        T.params.hashnavWatchState && T.hashnav.attachEvents()
                    }
                },
                destroy: function() {
                    T.params.hashnavWatchState && T.hashnav.attachEvents(!0)
                }
            },
            T.history = {
                init: function() {
                    if (T.params.history) {
                        if (!window.history || !window.history.pushState)
                            return T.params.history = !1,
                            void (T.params.hashnav = !0);
                        T.history.initialized = !0,
                        this.paths = this.getPathValues(),
                        (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, T.params.runCallbacksOnInit),
                        T.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                    }
                },
                setHistoryPopState: function() {
                    T.history.paths = T.history.getPathValues(),
                    T.history.scrollToSlide(T.params.speed, T.history.paths.value, !1)
                },
                getPathValues: function() {
                    var e = window.location.pathname.slice(1).split("/")
                      , a = e.length;
                    return {
                        key: e[a - 2],
                        value: e[a - 1]
                    }
                },
                setHistory: function(e, a) {
                    if (T.history.initialized && T.params.history) {
                        var t = T.slides.eq(a)
                          , s = this.slugify(t.attr("data-history"));
                        window.location.pathname.includes(e) || (s = e + "/" + s),
                        T.params.replaceState ? window.history.replaceState(null, null, s) : window.history.pushState(null, null, s)
                    }
                },
                slugify: function(e) {
                    return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function(e, a, t) {
                    if (a)
                        for (var s = 0, i = T.slides.length; s < i; s++) {
                            var r = T.slides.eq(s)
                              , n = this.slugify(r.attr("data-history"));
                            if (n === a && !r.hasClass(T.params.slideDuplicateClass)) {
                                var o = r.index();
                                T.slideTo(o, e, t)
                            }
                        }
                    else
                        T.slideTo(0, e, t)
                }
            },
            T.disableKeyboardControl = function() {
                T.params.keyboardControl = !1,
                e(document).off("keydown", p)
            }
            ,
            T.enableKeyboardControl = function() {
                T.params.keyboardControl = !0,
                e(document).on("keydown", p)
            }
            ,
            T.mousewheel = {
                event: !1,
                lastScrollTime: (new window.Date).getTime()
            },
            T.params.mousewheelControl && (T.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                var e = "onwheel"in document;
                if (!e) {
                    var a = document.createElement("div");
                    a.setAttribute("onwheel", "return;"),
                    e = "function" == typeof a.onwheel
                }
                return !e && document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0 && (e = document.implementation.hasFeature("Events.wheel", "3.0")),
                e
            }() ? "wheel" : "mousewheel"),
            T.disableMousewheelControl = function() {
                if (!T.mousewheel.event)
                    return !1;
                var a = T.container;
                return "container" !== T.params.mousewheelEventsTarged && (a = e(T.params.mousewheelEventsTarged)),
                a.off(T.mousewheel.event, u),
                T.params.mousewheelControl = !1,
                !0
            }
            ,
            T.enableMousewheelControl = function() {
                if (!T.mousewheel.event)
                    return !1;
                var a = T.container;
                return "container" !== T.params.mousewheelEventsTarged && (a = e(T.params.mousewheelEventsTarged)),
                a.on(T.mousewheel.event, u),
                T.params.mousewheelControl = !0,
                !0
            }
            ,
            T.parallax = {
                setTranslate: function() {
                    T.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        c(this, T.progress)
                    }),
                    T.slides.each(function() {
                        var a = e(this);
                        a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            c(this, Math.min(Math.max(a[0].progress, -1), 1))
                        })
                    })
                },
                setTransition: function(a) {
                    void 0 === a && (a = T.params.speed),
                    T.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var t = e(this)
                          , s = parseInt(t.attr("data-swiper-parallax-duration"), 10) || a;
                        0 === a && (s = 0),
                        t.transition(s)
                    })
                }
            },
            T.zoom = {
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    slide: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    image: void 0,
                    imageWrap: void 0,
                    zoomMax: T.params.zoomMax
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                },
                getDistanceBetweenTouches: function(e) {
                    if (e.targetTouches.length < 2)
                        return 1;
                    var a = e.targetTouches[0].pageX
                      , t = e.targetTouches[0].pageY
                      , s = e.targetTouches[1].pageX
                      , i = e.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(s - a, 2) + Math.pow(i - t, 2))
                },
                onGestureStart: function(a) {
                    var t = T.zoom;
                    if (!T.support.gestures) {
                        if ("touchstart" !== a.type || "touchstart" === a.type && a.targetTouches.length < 2)
                            return;
                        t.gesture.scaleStart = t.getDistanceBetweenTouches(a)
                    }
                    if (!(t.gesture.slide && t.gesture.slide.length || (t.gesture.slide = e(this),
                    0 === t.gesture.slide.length && (t.gesture.slide = T.slides.eq(T.activeIndex)),
                    t.gesture.image = t.gesture.slide.find("img, svg, canvas"),
                    t.gesture.imageWrap = t.gesture.image.parent("." + T.params.zoomContainerClass),
                    t.gesture.zoomMax = t.gesture.imageWrap.attr("data-swiper-zoom") || T.params.zoomMax,
                    0 !== t.gesture.imageWrap.length)))
                        return void (t.gesture.image = void 0);
                    t.gesture.image.transition(0),
                    t.isScaling = !0
                },
                onGestureChange: function(e) {
                    var a = T.zoom;
                    if (!T.support.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                            return;
                        a.gesture.scaleMove = a.getDistanceBetweenTouches(e)
                    }
                    a.gesture.image && 0 !== a.gesture.image.length && (T.support.gestures ? a.scale = e.scale * a.currentScale : a.scale = a.gesture.scaleMove / a.gesture.scaleStart * a.currentScale,
                    a.scale > a.gesture.zoomMax && (a.scale = a.gesture.zoomMax - 1 + Math.pow(a.scale - a.gesture.zoomMax + 1, .5)),
                    a.scale < T.params.zoomMin && (a.scale = T.params.zoomMin + 1 - Math.pow(T.params.zoomMin - a.scale + 1, .5)),
                    a.gesture.image.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
                },
                onGestureEnd: function(e) {
                    var a = T.zoom;
                    !T.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || a.gesture.image && 0 !== a.gesture.image.length && (a.scale = Math.max(Math.min(a.scale, a.gesture.zoomMax), T.params.zoomMin),
                    a.gesture.image.transition(T.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"),
                    a.currentScale = a.scale,
                    a.isScaling = !1,
                    1 === a.scale && (a.gesture.slide = void 0))
                },
                onTouchStart: function(e, a) {
                    var t = e.zoom;
                    t.gesture.image && 0 !== t.gesture.image.length && (t.image.isTouched || ("android" === e.device.os && a.preventDefault(),
                    t.image.isTouched = !0,
                    t.image.touchesStart.x = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX,
                    t.image.touchesStart.y = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY))
                },
                onTouchMove: function(e) {
                    var a = T.zoom;
                    if (a.gesture.image && 0 !== a.gesture.image.length && (T.allowClick = !1,
                    a.image.isTouched && a.gesture.slide)) {
                        a.image.isMoved || (a.image.width = a.gesture.image[0].offsetWidth,
                        a.image.height = a.gesture.image[0].offsetHeight,
                        a.image.startX = T.getTranslate(a.gesture.imageWrap[0], "x") || 0,
                        a.image.startY = T.getTranslate(a.gesture.imageWrap[0], "y") || 0,
                        a.gesture.slideWidth = a.gesture.slide[0].offsetWidth,
                        a.gesture.slideHeight = a.gesture.slide[0].offsetHeight,
                        a.gesture.imageWrap.transition(0),
                        T.rtl && (a.image.startX = -a.image.startX),
                        T.rtl && (a.image.startY = -a.image.startY));
                        var t = a.image.width * a.scale
                          , s = a.image.height * a.scale;
                        if (!(t < a.gesture.slideWidth && s < a.gesture.slideHeight)) {
                            if (a.image.minX = Math.min(a.gesture.slideWidth / 2 - t / 2, 0),
                            a.image.maxX = -a.image.minX,
                            a.image.minY = Math.min(a.gesture.slideHeight / 2 - s / 2, 0),
                            a.image.maxY = -a.image.minY,
                            a.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                            a.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                            !a.image.isMoved && !a.isScaling) {
                                if (T.isHorizontal() && Math.floor(a.image.minX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x < a.image.touchesStart.x || Math.floor(a.image.maxX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x > a.image.touchesStart.x)
                                    return void (a.image.isTouched = !1);
                                if (!T.isHorizontal() && Math.floor(a.image.minY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y < a.image.touchesStart.y || Math.floor(a.image.maxY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y > a.image.touchesStart.y)
                                    return void (a.image.isTouched = !1)
                            }
                            e.preventDefault(),
                            e.stopPropagation(),
                            a.image.isMoved = !0,
                            a.image.currentX = a.image.touchesCurrent.x - a.image.touchesStart.x + a.image.startX,
                            a.image.currentY = a.image.touchesCurrent.y - a.image.touchesStart.y + a.image.startY,
                            a.image.currentX < a.image.minX && (a.image.currentX = a.image.minX + 1 - Math.pow(a.image.minX - a.image.currentX + 1, .8)),
                            a.image.currentX > a.image.maxX && (a.image.currentX = a.image.maxX - 1 + Math.pow(a.image.currentX - a.image.maxX + 1, .8)),
                            a.image.currentY < a.image.minY && (a.image.currentY = a.image.minY + 1 - Math.pow(a.image.minY - a.image.currentY + 1, .8)),
                            a.image.currentY > a.image.maxY && (a.image.currentY = a.image.maxY - 1 + Math.pow(a.image.currentY - a.image.maxY + 1, .8)),
                            a.velocity.prevPositionX || (a.velocity.prevPositionX = a.image.touchesCurrent.x),
                            a.velocity.prevPositionY || (a.velocity.prevPositionY = a.image.touchesCurrent.y),
                            a.velocity.prevTime || (a.velocity.prevTime = Date.now()),
                            a.velocity.x = (a.image.touchesCurrent.x - a.velocity.prevPositionX) / (Date.now() - a.velocity.prevTime) / 2,
                            a.velocity.y = (a.image.touchesCurrent.y - a.velocity.prevPositionY) / (Date.now() - a.velocity.prevTime) / 2,
                            Math.abs(a.image.touchesCurrent.x - a.velocity.prevPositionX) < 2 && (a.velocity.x = 0),
                            Math.abs(a.image.touchesCurrent.y - a.velocity.prevPositionY) < 2 && (a.velocity.y = 0),
                            a.velocity.prevPositionX = a.image.touchesCurrent.x,
                            a.velocity.prevPositionY = a.image.touchesCurrent.y,
                            a.velocity.prevTime = Date.now(),
                            a.gesture.imageWrap.transform("translate3d(" + a.image.currentX + "px, " + a.image.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function(e, a) {
                    var t = e.zoom;
                    if (t.gesture.image && 0 !== t.gesture.image.length) {
                        if (!t.image.isTouched || !t.image.isMoved)
                            return t.image.isTouched = !1,
                            void (t.image.isMoved = !1);
                        t.image.isTouched = !1,
                        t.image.isMoved = !1;
                        var s = 300
                          , i = 300
                          , r = t.velocity.x * s
                          , n = t.image.currentX + r
                          , o = t.velocity.y * i
                          , l = t.image.currentY + o;
                        0 !== t.velocity.x && (s = Math.abs((n - t.image.currentX) / t.velocity.x)),
                        0 !== t.velocity.y && (i = Math.abs((l - t.image.currentY) / t.velocity.y));
                        var p = Math.max(s, i);
                        t.image.currentX = n,
                        t.image.currentY = l;
                        var d = t.image.width * t.scale
                          , u = t.image.height * t.scale;
                        t.image.minX = Math.min(t.gesture.slideWidth / 2 - d / 2, 0),
                        t.image.maxX = -t.image.minX,
                        t.image.minY = Math.min(t.gesture.slideHeight / 2 - u / 2, 0),
                        t.image.maxY = -t.image.minY,
                        t.image.currentX = Math.max(Math.min(t.image.currentX, t.image.maxX), t.image.minX),
                        t.image.currentY = Math.max(Math.min(t.image.currentY, t.image.maxY), t.image.minY),
                        t.gesture.imageWrap.transition(p).transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function(e) {
                    var a = e.zoom;
                    a.gesture.slide && e.previousIndex !== e.activeIndex && (a.gesture.image.transform("translate3d(0,0,0) scale(1)"),
                    a.gesture.imageWrap.transform("translate3d(0,0,0)"),
                    a.gesture.slide = a.gesture.image = a.gesture.imageWrap = void 0,
                    a.scale = a.currentScale = 1)
                },
                toggleZoom: function(a, t) {
                    var s = a.zoom;
                    if (s.gesture.slide || (s.gesture.slide = a.clickedSlide ? e(a.clickedSlide) : a.slides.eq(a.activeIndex),
                    s.gesture.image = s.gesture.slide.find("img, svg, canvas"),
                    s.gesture.imageWrap = s.gesture.image.parent("." + a.params.zoomContainerClass)),
                    s.gesture.image && 0 !== s.gesture.image.length) {
                        var i, r, n, o, l, p, d, u, c, m, h, g, f, v, w, y, x, T;
                        void 0 === s.image.touchesStart.x && t ? (i = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX,
                        r = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (i = s.image.touchesStart.x,
                        r = s.image.touchesStart.y),
                        s.scale && 1 !== s.scale ? (s.scale = s.currentScale = 1,
                        s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),
                        s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),
                        s.gesture.slide = void 0) : (s.scale = s.currentScale = s.gesture.imageWrap.attr("data-swiper-zoom") || a.params.zoomMax,
                        t ? (x = s.gesture.slide[0].offsetWidth,
                        T = s.gesture.slide[0].offsetHeight,
                        n = s.gesture.slide.offset().left,
                        o = s.gesture.slide.offset().top,
                        l = n + x / 2 - i,
                        p = o + T / 2 - r,
                        c = s.gesture.image[0].offsetWidth,
                        m = s.gesture.image[0].offsetHeight,
                        h = c * s.scale,
                        g = m * s.scale,
                        f = Math.min(x / 2 - h / 2, 0),
                        v = Math.min(T / 2 - g / 2, 0),
                        w = -f,
                        y = -v,
                        d = l * s.scale,
                        u = p * s.scale,
                        d < f && (d = f),
                        d > w && (d = w),
                        u < v && (u = v),
                        u > y && (u = y)) : (d = 0,
                        u = 0),
                        s.gesture.imageWrap.transition(300).transform("translate3d(" + d + "px, " + u + "px,0)"),
                        s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + s.scale + ")"))
                    }
                },
                attachEvents: function(a) {
                    var t = a ? "off" : "on";
                    if (T.params.zoom) {
                        var s = (T.slides,
                        !("touchstart" !== T.touchEvents.start || !T.support.passiveListener || !T.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        });
                        T.support.gestures ? (T.slides[t]("gesturestart", T.zoom.onGestureStart, s),
                        T.slides[t]("gesturechange", T.zoom.onGestureChange, s),
                        T.slides[t]("gestureend", T.zoom.onGestureEnd, s)) : "touchstart" === T.touchEvents.start && (T.slides[t](T.touchEvents.start, T.zoom.onGestureStart, s),
                        T.slides[t](T.touchEvents.move, T.zoom.onGestureChange, s),
                        T.slides[t](T.touchEvents.end, T.zoom.onGestureEnd, s)),
                        T[t]("touchStart", T.zoom.onTouchStart),
                        T.slides.each(function(a, s) {
                            e(s).find("." + T.params.zoomContainerClass).length > 0 && e(s)[t](T.touchEvents.move, T.zoom.onTouchMove)
                        }),
                        T[t]("touchEnd", T.zoom.onTouchEnd),
                        T[t]("transitionEnd", T.zoom.onTransitionEnd),
                        T.params.zoomToggle && T.on("doubleTap", T.zoom.toggleZoom)
                    }
                },
                init: function() {
                    T.zoom.attachEvents()
                },
                destroy: function() {
                    T.zoom.attachEvents(!0)
                }
            },
            T._plugins = [];
            for (var Y in T.plugins) {
                var O = T.plugins[Y](T, T.params[Y]);
                O && T._plugins.push(O)
            }
            return T.callPlugins = function(e) {
                for (var a = 0; a < T._plugins.length; a++)
                    e in T._plugins[a] && T._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }
            ,
            T.emitterEventListeners = {},
            T.emit = function(e) {
                T.params[e] && T.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var a;
                if (T.emitterEventListeners[e])
                    for (a = 0; a < T.emitterEventListeners[e].length; a++)
                        T.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                T.callPlugins && T.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }
            ,
            T.on = function(e, a) {
                return e = m(e),
                T.emitterEventListeners[e] || (T.emitterEventListeners[e] = []),
                T.emitterEventListeners[e].push(a),
                T
            }
            ,
            T.off = function(e, a) {
                var t;
                if (e = m(e),
                void 0 === a)
                    return T.emitterEventListeners[e] = [],
                    T;
                if (T.emitterEventListeners[e] && 0 !== T.emitterEventListeners[e].length) {
                    for (t = 0; t < T.emitterEventListeners[e].length; t++)
                        T.emitterEventListeners[e][t] === a && T.emitterEventListeners[e].splice(t, 1);
                    return T
                }
            }
            ,
            T.once = function(e, a) {
                e = m(e);
                var t = function() {
                    a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]),
                    T.off(e, t)
                };
                return T.on(e, t),
                T
            }
            ,
            T.a11y = {
                makeFocusable: function(e) {
                    return e.attr("tabIndex", "0"),
                    e
                },
                addRole: function(e, a) {
                    return e.attr("role", a),
                    e
                },
                addLabel: function(e, a) {
                    return e.attr("aria-label", a),
                    e
                },
                disable: function(e) {
                    return e.attr("aria-disabled", !0),
                    e
                },
                enable: function(e) {
                    return e.attr("aria-disabled", !1),
                    e
                },
                onEnterKey: function(a) {
                    13 === a.keyCode && (e(a.target).is(T.params.nextButton) ? (T.onClickNext(a),
                    T.isEnd ? T.a11y.notify(T.params.lastSlideMessage) : T.a11y.notify(T.params.nextSlideMessage)) : e(a.target).is(T.params.prevButton) && (T.onClickPrev(a),
                    T.isBeginning ? T.a11y.notify(T.params.firstSlideMessage) : T.a11y.notify(T.params.prevSlideMessage)),
                    e(a.target).is("." + T.params.bulletClass) && e(a.target)[0].click())
                },
                liveRegion: e('<span class="' + T.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(e) {
                    var a = T.a11y.liveRegion;
                    0 !== a.length && (a.html(""),
                    a.html(e))
                },
                init: function() {
                    T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.a11y.makeFocusable(T.nextButton),
                    T.a11y.addRole(T.nextButton, "button"),
                    T.a11y.addLabel(T.nextButton, T.params.nextSlideMessage)),
                    T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.a11y.makeFocusable(T.prevButton),
                    T.a11y.addRole(T.prevButton, "button"),
                    T.a11y.addLabel(T.prevButton, T.params.prevSlideMessage)),
                    e(T.container).append(T.a11y.liveRegion)
                },
                initPagination: function() {
                    T.params.pagination && T.params.paginationClickable && T.bullets && T.bullets.length && T.bullets.each(function() {
                        var a = e(this);
                        T.a11y.makeFocusable(a),
                        T.a11y.addRole(a, "button"),
                        T.a11y.addLabel(a, T.params.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
                    })
                },
                destroy: function() {
                    T.a11y.liveRegion && T.a11y.liveRegion.length > 0 && T.a11y.liveRegion.remove()
                }
            },
            T.init = function() {
                T.params.loop && T.createLoop(),
                T.updateContainerSize(),
                T.updateSlidesSize(),
                T.updatePagination(),
                T.params.scrollbar && T.scrollbar && (T.scrollbar.set(),
                T.params.scrollbarDraggable && T.scrollbar.enableDraggable()),
                "slide" !== T.params.effect && T.effects[T.params.effect] && (T.params.loop || T.updateProgress(),
                T.effects[T.params.effect].setTranslate()),
                T.params.loop ? T.slideTo(T.params.initialSlide + T.loopedSlides, 0, T.params.runCallbacksOnInit) : (T.slideTo(T.params.initialSlide, 0, T.params.runCallbacksOnInit),
                0 === T.params.initialSlide && (T.parallax && T.params.parallax && T.parallax.setTranslate(),
                T.lazy && T.params.lazyLoading && (T.lazy.load(),
                T.lazy.initialImageLoaded = !0))),
                T.attachEvents(),
                T.params.observer && T.support.observer && T.initObservers(),
                T.params.preloadImages && !T.params.lazyLoading && T.preloadImages(),
                T.params.zoom && T.zoom && T.zoom.init(),
                T.params.autoplay && T.startAutoplay(),
                T.params.keyboardControl && T.enableKeyboardControl && T.enableKeyboardControl(),
                T.params.mousewheelControl && T.enableMousewheelControl && T.enableMousewheelControl(),
                T.params.hashnavReplaceState && (T.params.replaceState = T.params.hashnavReplaceState),
                T.params.history && T.history && T.history.init(),
                T.params.hashnav && T.hashnav && T.hashnav.init(),
                T.params.a11y && T.a11y && T.a11y.init(),
                T.emit("onInit", T)
            }
            ,
            T.cleanupStyles = function() {
                T.container.removeClass(T.classNames.join(" ")).removeAttr("style"),
                T.wrapper.removeAttr("style"),
                T.slides && T.slides.length && T.slides.removeClass([T.params.slideVisibleClass, T.params.slideActiveClass, T.params.slideNextClass, T.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),
                T.paginationContainer && T.paginationContainer.length && T.paginationContainer.removeClass(T.params.paginationHiddenClass),
                T.bullets && T.bullets.length && T.bullets.removeClass(T.params.bulletActiveClass),
                T.params.prevButton && e(T.params.prevButton).removeClass(T.params.buttonDisabledClass),
                T.params.nextButton && e(T.params.nextButton).removeClass(T.params.buttonDisabledClass),
                T.params.scrollbar && T.scrollbar && (T.scrollbar.track && T.scrollbar.track.length && T.scrollbar.track.removeAttr("style"),
                T.scrollbar.drag && T.scrollbar.drag.length && T.scrollbar.drag.removeAttr("style"))
            }
            ,
            T.destroy = function(e, a) {
                T.detachEvents(),
                T.stopAutoplay(),
                T.params.scrollbar && T.scrollbar && T.params.scrollbarDraggable && T.scrollbar.disableDraggable(),
                T.params.loop && T.destroyLoop(),
                a && T.cleanupStyles(),
                T.disconnectObservers(),
                T.params.zoom && T.zoom && T.zoom.destroy(),
                T.params.keyboardControl && T.disableKeyboardControl && T.disableKeyboardControl(),
                T.params.mousewheelControl && T.disableMousewheelControl && T.disableMousewheelControl(),
                T.params.a11y && T.a11y && T.a11y.destroy(),
                T.params.history && !T.params.replaceState && window.removeEventListener("popstate", T.history.setHistoryPopState),
                T.params.hashnav && T.hashnav && T.hashnav.destroy(),
                T.emit("onDestroy"),
                e !== !1 && (T = null)
            }
            ,
            T.init(),
            T
        }
    };
    a.prototype = {
        isSafari: function() {
            var e = window.navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray: function(e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
            lteIE9: function() {
                var e = document.createElement("div");
                return e.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->",
                1 === e.getElementsByTagName("i").length
            }()
        },
        device: function() {
            var e = window.navigator.userAgent
              , a = e.match(/(Android);?[\s\/]+([\d.]+)?/)
              , t = e.match(/(iPad).*OS\s([\d_]+)/)
              , s = e.match(/(iPod)(.*OS\s([\d_]+))?/)
              , i = !t && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            return {
                ios: t || i || s,
                android: a
            }
        }(),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function() {
                return !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                var e = document.createElement("div").style;
                return "webkitPerspective"in e || "MozPerspective"in e || "OPerspective"in e || "MsPerspective"in e || "perspective"in e
            }(),
            flexbox: function() {
                for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++)
                    if (a[t]in e)
                        return !0
            }(),
            observer: function() {
                return "MutationObserver"in window || "WebkitMutationObserver"in window
            }(),
            passiveListener: function() {
                var e = !1;
                try {
                    var a = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    window.addEventListener("testPassiveListener", null, a)
                } catch (e) {}
                return e
            }(),
            gestures: function() {
                return "ongesturestart"in window
            }()
        },
        plugins: {}
    };
    for (var t = (function() {
        var e = function(e) {
            var a = this
              , t = 0;
            for (t = 0; t < e.length; t++)
                a[t] = e[t];
            return a.length = e.length,
            this
        }
          , a = function(a, t) {
            var s = []
              , i = 0;
            if (a && !t && a instanceof e)
                return a;
            if (a)
                if ("string" == typeof a) {
                    var r, n, o = a.trim();
                    if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                        var l = "div";
                        for (0 === o.indexOf("<li") && (l = "ul"),
                        0 === o.indexOf("<tr") && (l = "tbody"),
                        0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"),
                        0 === o.indexOf("<tbody") && (l = "table"),
                        0 === o.indexOf("<option") && (l = "select"),
                        n = document.createElement(l),
                        n.innerHTML = a,
                        i = 0; i < n.childNodes.length; i++)
                            s.push(n.childNodes[i])
                    } else
                        for (r = t || "#" !== a[0] || a.match(/[ .<>:~]/) ? (t || document).querySelectorAll(a) : [document.getElementById(a.split("#")[1])],
                        i = 0; i < r.length; i++)
                            r[i] && s.push(r[i])
                } else if (a.nodeType || a === window || a === document)
                    s.push(a);
                else if (a.length > 0 && a[0].nodeType)
                    for (i = 0; i < a.length; i++)
                        s.push(a[i]);
            return new e(s)
        };
        return e.prototype = {
            addClass: function(e) {
                if (void 0 === e)
                    return this;
                for (var a = e.split(" "), t = 0; t < a.length; t++)
                    for (var s = 0; s < this.length; s++)
                        this[s].classList.add(a[t]);
                return this
            },
            removeClass: function(e) {
                for (var a = e.split(" "), t = 0; t < a.length; t++)
                    for (var s = 0; s < this.length; s++)
                        this[s].classList.remove(a[t]);
                return this
            },
            hasClass: function(e) {
                return !!this[0] && this[0].classList.contains(e)
            },
            toggleClass: function(e) {
                for (var a = e.split(" "), t = 0; t < a.length; t++)
                    for (var s = 0; s < this.length; s++)
                        this[s].classList.toggle(a[t]);
                return this
            },
            attr: function(e, a) {
                if (1 === arguments.length && "string" == typeof e)
                    return this[0] ? this[0].getAttribute(e) : void 0;
                for (var t = 0; t < this.length; t++)
                    if (2 === arguments.length)
                        this[t].setAttribute(e, a);
                    else
                        for (var s in e)
                            this[t][s] = e[s],
                            this[t].setAttribute(s, e[s]);
                return this
            },
            removeAttr: function(e) {
                for (var a = 0; a < this.length; a++)
                    this[a].removeAttribute(e);
                return this
            },
            data: function(e, a) {
                if (void 0 !== a) {
                    for (var t = 0; t < this.length; t++) {
                        var s = this[t];
                        s.dom7ElementDataStorage || (s.dom7ElementDataStorage = {}),
                        s.dom7ElementDataStorage[e] = a
                    }
                    return this
                }
                if (this[0]) {
                    var i = this[0].getAttribute("data-" + e);
                    return i ? i : this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0
                }
            },
            transform: function(e) {
                for (var a = 0; a < this.length; a++) {
                    var t = this[a].style;
                    t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
                }
                return this
            },
            transition: function(e) {
                "string" != typeof e && (e += "ms");
                for (var a = 0; a < this.length; a++) {
                    var t = this[a].style;
                    t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
                }
                return this
            },
            on: function(e, t, s, i) {
                function r(e) {
                    var i = e.target;
                    if (a(i).is(t))
                        s.call(i, e);
                    else
                        for (var r = a(i).parents(), n = 0; n < r.length; n++)
                            a(r[n]).is(t) && s.call(r[n], e)
                }
                var n, o, l = e.split(" ");
                for (n = 0; n < this.length; n++)
                    if ("function" == typeof t || t === !1)
                        for ("function" == typeof t && (s = arguments[1],
                        i = arguments[2] || !1),
                        o = 0; o < l.length; o++)
                            this[n].addEventListener(l[o], s, i);
                    else
                        for (o = 0; o < l.length; o++)
                            this[n].dom7LiveListeners || (this[n].dom7LiveListeners = []),
                            this[n].dom7LiveListeners.push({
                                listener: s,
                                liveListener: r
                            }),
                            this[n].addEventListener(l[o], r, i);
                return this
            },
            off: function(e, a, t, s) {
                for (var i = e.split(" "), r = 0; r < i.length; r++)
                    for (var n = 0; n < this.length; n++)
                        if ("function" == typeof a || a === !1)
                            "function" == typeof a && (t = arguments[1],
                            s = arguments[2] || !1),
                            this[n].removeEventListener(i[r], t, s);
                        else if (this[n].dom7LiveListeners)
                            for (var o = 0; o < this[n].dom7LiveListeners.length; o++)
                                this[n].dom7LiveListeners[o].listener === t && this[n].removeEventListener(i[r], this[n].dom7LiveListeners[o].liveListener, s);
                return this
            },
            once: function(e, a, t, s) {
                function i(n) {
                    t(n),
                    r.off(e, a, i, s)
                }
                var r = this;
                "function" == typeof a && (a = !1,
                t = arguments[1],
                s = arguments[2]),
                r.on(e, a, i, s)
            },
            trigger: function(e, a) {
                for (var t = 0; t < this.length; t++) {
                    var s;
                    try {
                        s = new window.CustomEvent(e,{
                            detail: a,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (t) {
                        s = document.createEvent("Event"),
                        s.initEvent(e, !0, !0),
                        s.detail = a
                    }
                    this[t].dispatchEvent(s)
                }
                return this
            },
            transitionEnd: function(e) {
                function a(r) {
                    if (r.target === this)
                        for (e.call(this, r),
                        t = 0; t < s.length; t++)
                            i.off(s[t], a)
                }
                var t, s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = this;
                if (e)
                    for (t = 0; t < s.length; t++)
                        i.on(s[t], a);
                return this
            },
            width: function() {
                return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
            },
            outerWidth: function(e) {
                return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
            },
            height: function() {
                return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
            },
            outerHeight: function(e) {
                return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
            },
            offset: function() {
                if (this.length > 0) {
                    var e = this[0]
                      , a = e.getBoundingClientRect()
                      , t = document.body
                      , s = e.clientTop || t.clientTop || 0
                      , i = e.clientLeft || t.clientLeft || 0
                      , r = window.pageYOffset || e.scrollTop
                      , n = window.pageXOffset || e.scrollLeft;
                    return {
                        top: a.top + r - s,
                        left: a.left + n - i
                    }
                }
                return null
            },
            css: function(e, a) {
                var t;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (t = 0; t < this.length; t++)
                            for (var s in e)
                                this[t].style[s] = e[s];
                        return this
                    }
                    if (this[0])
                        return window.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (t = 0; t < this.length; t++)
                        this[t].style[e] = a;
                    return this
                }
                return this
            },
            each: function(e) {
                for (var a = 0; a < this.length; a++)
                    e.call(this[a], a, this[a]);
                return this
            },
            html: function(e) {
                if (void 0 === e)
                    return this[0] ? this[0].innerHTML : void 0;
                for (var a = 0; a < this.length; a++)
                    this[a].innerHTML = e;
                return this
            },
            text: function(e) {
                if (void 0 === e)
                    return this[0] ? this[0].textContent.trim() : null;
                for (var a = 0; a < this.length; a++)
                    this[a].textContent = e;
                return this
            },
            is: function(t) {
                if (!this[0])
                    return !1;
                var s, i;
                if ("string" == typeof t) {
                    var r = this[0];
                    if (r === document)
                        return t === document;
                    if (r === window)
                        return t === window;
                    if (r.matches)
                        return r.matches(t);
                    if (r.webkitMatchesSelector)
                        return r.webkitMatchesSelector(t);
                    if (r.mozMatchesSelector)
                        return r.mozMatchesSelector(t);
                    if (r.msMatchesSelector)
                        return r.msMatchesSelector(t);
                    for (s = a(t),
                    i = 0; i < s.length; i++)
                        if (s[i] === this[0])
                            return !0;
                    return !1
                }
                if (t === document)
                    return this[0] === document;
                if (t === window)
                    return this[0] === window;
                if (t.nodeType || t instanceof e) {
                    for (s = t.nodeType ? [t] : t,
                    i = 0; i < s.length; i++)
                        if (s[i] === this[0])
                            return !0;
                    return !1
                }
                return !1
            },
            index: function() {
                if (this[0]) {
                    for (var e = this[0], a = 0; null !== (e = e.previousSibling); )
                        1 === e.nodeType && a++;
                    return a
                }
            },
            eq: function(a) {
                if (void 0 === a)
                    return this;
                var t, s = this.length;
                return a > s - 1 ? new e([]) : a < 0 ? (t = s + a,
                new e(t < 0 ? [] : [this[t]])) : new e([this[a]])
            },
            append: function(a) {
                var t, s;
                for (t = 0; t < this.length; t++)
                    if ("string" == typeof a) {
                        var i = document.createElement("div");
                        for (i.innerHTML = a; i.firstChild; )
                            this[t].appendChild(i.firstChild)
                    } else if (a instanceof e)
                        for (s = 0; s < a.length; s++)
                            this[t].appendChild(a[s]);
                    else
                        this[t].appendChild(a);
                return this
            },
            prepend: function(a) {
                var t, s;
                for (t = 0; t < this.length; t++)
                    if ("string" == typeof a) {
                        var i = document.createElement("div");
                        for (i.innerHTML = a,
                        s = i.childNodes.length - 1; s >= 0; s--)
                            this[t].insertBefore(i.childNodes[s], this[t].childNodes[0])
                    } else if (a instanceof e)
                        for (s = 0; s < a.length; s++)
                            this[t].insertBefore(a[s], this[t].childNodes[0]);
                    else
                        this[t].insertBefore(a, this[t].childNodes[0]);
                return this
            },
            insertBefore: function(e) {
                for (var t = a(e), s = 0; s < this.length; s++)
                    if (1 === t.length)
                        t[0].parentNode.insertBefore(this[s], t[0]);
                    else if (t.length > 1)
                        for (var i = 0; i < t.length; i++)
                            t[i].parentNode.insertBefore(this[s].cloneNode(!0), t[i])
            },
            insertAfter: function(e) {
                for (var t = a(e), s = 0; s < this.length; s++)
                    if (1 === t.length)
                        t[0].parentNode.insertBefore(this[s], t[0].nextSibling);
                    else if (t.length > 1)
                        for (var i = 0; i < t.length; i++)
                            t[i].parentNode.insertBefore(this[s].cloneNode(!0), t[i].nextSibling)
            },
            next: function(t) {
                return new e(this.length > 0 ? t ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
            },
            nextAll: function(t) {
                var s = []
                  , i = this[0];
                if (!i)
                    return new e([]);
                for (; i.nextElementSibling; ) {
                    var r = i.nextElementSibling;
                    t ? a(r).is(t) && s.push(r) : s.push(r),
                    i = r
                }
                return new e(s)
            },
            prev: function(t) {
                return new e(this.length > 0 ? t ? this[0].previousElementSibling && a(this[0].previousElementSibling).is(t) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
            },
            prevAll: function(t) {
                var s = []
                  , i = this[0];
                if (!i)
                    return new e([]);
                for (; i.previousElementSibling; ) {
                    var r = i.previousElementSibling;
                    t ? a(r).is(t) && s.push(r) : s.push(r),
                    i = r
                }
                return new e(s)
            },
            parent: function(e) {
                for (var t = [], s = 0; s < this.length; s++)
                    e ? a(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode);
                return a(a.unique(t))
            },
            parents: function(e) {
                for (var t = [], s = 0; s < this.length; s++)
                    for (var i = this[s].parentNode; i; )
                        e ? a(i).is(e) && t.push(i) : t.push(i),
                        i = i.parentNode;
                return a(a.unique(t))
            },
            find: function(a) {
                for (var t = [], s = 0; s < this.length; s++)
                    for (var i = this[s].querySelectorAll(a), r = 0; r < i.length; r++)
                        t.push(i[r]);
                return new e(t)
            },
            children: function(t) {
                for (var s = [], i = 0; i < this.length; i++)
                    for (var r = this[i].childNodes, n = 0; n < r.length; n++)
                        t ? 1 === r[n].nodeType && a(r[n]).is(t) && s.push(r[n]) : 1 === r[n].nodeType && s.push(r[n]);
                return new e(a.unique(s))
            },
            remove: function() {
                for (var e = 0; e < this.length; e++)
                    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            },
            add: function() {
                var e, t, s = this;
                for (e = 0; e < arguments.length; e++) {
                    var i = a(arguments[e]);
                    for (t = 0; t < i.length; t++)
                        s[s.length] = i[t],
                        s.length++
                }
                return s
            }
        },
        a.fn = e.prototype,
        a.unique = function(e) {
            for (var a = [], t = 0; t < e.length; t++)
                a.indexOf(e[t]) === -1 && a.push(e[t]);
            return a
        }
        ,
        a
    }()), s = ["jQuery", "Zepto", "Dom7"], i = 0; i < s.length; i++)
        window[s[i]] && function(e) {
            e.fn.swiper = function(t) {
                var s;
                return e(this).each(function() {
                    var e = new a(this,t);
                    s || (s = e)
                }),
                s
            }
        }(window[s[i]]);
    var r;
    r = void 0 === t ? window.Dom7 || window.Zepto || window.jQuery : t,
    r && ("transitionEnd"in r.fn || (r.fn.transitionEnd = function(e) {
        function a(r) {
            if (r.target === this)
                for (e.call(this, r),
                t = 0; t < s.length; t++)
                    i.off(s[t], a)
        }
        var t, s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = this;
        if (e)
            for (t = 0; t < s.length; t++)
                i.on(s[t], a);
        return this
    }
    ),
    "transform"in r.fn || (r.fn.transform = function(e) {
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
        }
        return this
    }
    ),
    "transition"in r.fn || (r.fn.transition = function(e) {
        "string" != typeof e && (e += "ms");
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
        }
        return this
    }
    ),
    "outerWidth"in r.fn || (r.fn.outerWidth = function(e) {
        return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
    }
    )),
    window.Swiper = a
}(),
"undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper
});
//# sourceMappingURL=maps/swiper.min.js.map
