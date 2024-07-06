!(function () {
  function e(e, t) {
    return (
      Object.keys(t).forEach(function (i) {
        "default" === i ||
          "__esModule" === i ||
          Object.prototype.hasOwnProperty.call(e, i) ||
          Object.defineProperty(e, i, {
            enumerable: !0,
            get: function () {
              return t[i];
            },
          });
      }),
      e
    );
  }
  function t(e, t, i, n) {
    Object.defineProperty(e, t, {
      get: i,
      set: n,
      enumerable: !0,
      configurable: !0,
    });
  }
  /*!
   * Bootstrap v5.3.3 (https://getbootstrap.com/)
   * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   */ var i = {};
  t(i, "popperGenerator", function () {
    return ek;
  }),
    t(i, "detectOverflow", function () {
      return eb;
    }),
    t(i, "createPopperBase", function () {
      return eL;
    }),
    t(i, "createPopper", function () {
      return eS;
    }),
    t(i, "createPopperLite", function () {
      return eD;
    });
  var n = {};
  t(n, "top", function () {
    return s;
  }),
    t(n, "bottom", function () {
      return r;
    }),
    t(n, "right", function () {
      return o;
    }),
    t(n, "left", function () {
      return a;
    }),
    t(n, "auto", function () {
      return l;
    }),
    t(n, "basePlacements", function () {
      return c;
    }),
    t(n, "start", function () {
      return h;
    }),
    t(n, "end", function () {
      return u;
    }),
    t(n, "clippingParents", function () {
      return d;
    }),
    t(n, "viewport", function () {
      return f;
    }),
    t(n, "popper", function () {
      return p;
    }),
    t(n, "reference", function () {
      return m;
    }),
    t(n, "variationPlacements", function () {
      return g;
    }),
    t(n, "placements", function () {
      return _;
    }),
    t(n, "beforeRead", function () {
      return b;
    }),
    t(n, "read", function () {
      return v;
    }),
    t(n, "afterRead", function () {
      return y;
    }),
    t(n, "beforeMain", function () {
      return w;
    }),
    t(n, "main", function () {
      return A;
    }),
    t(n, "afterMain", function () {
      return E;
    }),
    t(n, "beforeWrite", function () {
      return C;
    }),
    t(n, "write", function () {
      return T;
    }),
    t(n, "afterWrite", function () {
      return O;
    }),
    t(n, "modifierPhases", function () {
      return x;
    });
  var s = "top",
    r = "bottom",
    o = "right",
    a = "left",
    l = "auto",
    c = [s, r, o, a],
    h = "start",
    u = "end",
    d = "clippingParents",
    f = "viewport",
    p = "popper",
    m = "reference",
    g = c.reduce(function (e, t) {
      return e.concat([t + "-" + h, t + "-" + u]);
    }, []),
    _ = [].concat(c, [l]).reduce(function (e, t) {
      return e.concat([t, t + "-" + h, t + "-" + u]);
    }, []),
    b = "beforeRead",
    v = "read",
    y = "afterRead",
    w = "beforeMain",
    A = "main",
    E = "afterMain",
    C = "beforeWrite",
    T = "write",
    O = "afterWrite",
    x = [b, v, y, w, A, E, C, T, O],
    k = {};
  function L(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function S(e) {
    if (null == e) return window;
    if ("[object Window]" !== e.toString()) {
      var t = e.ownerDocument;
      return (t && t.defaultView) || window;
    }
    return e;
  }
  function D(e) {
    var t = S(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function $(e) {
    var t = S(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function I(e) {
    if ("undefined" == typeof ShadowRoot) return !1;
    var t = S(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  t(k, "applyStyles", function () {
    return N;
  }),
    t(k, "arrow", function () {
      return ee;
    }),
    t(k, "computeStyles", function () {
      return es;
    }),
    t(k, "eventListeners", function () {
      return eo;
    }),
    t(k, "flip", function () {
      return ev;
    }),
    t(k, "hide", function () {
      return eA;
    }),
    t(k, "offset", function () {
      return eE;
    }),
    t(k, "popperOffsets", function () {
      return eC;
    }),
    t(k, "preventOverflow", function () {
      return eT;
    });
  var N = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (e) {
      var t = e.state;
      Object.keys(t.elements).forEach(function (e) {
        var i = t.styles[e] || {},
          n = t.attributes[e] || {},
          s = t.elements[e];
        $(s) &&
          L(s) &&
          (Object.assign(s.style, i),
          Object.keys(n).forEach(function (e) {
            var t = n[e];
            !1 === t
              ? s.removeAttribute(e)
              : s.setAttribute(e, !0 === t ? "" : t);
          }));
      });
    },
    effect: function (e) {
      var t = e.state,
        i = {
          popper: {
            position: t.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(t.elements.popper.style, i.popper),
        (t.styles = i),
        t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow),
        function () {
          Object.keys(t.elements).forEach(function (e) {
            var n = t.elements[e],
              s = t.attributes[e] || {},
              r = Object.keys(
                t.styles.hasOwnProperty(e) ? t.styles[e] : i[e],
              ).reduce(function (e, t) {
                return (e[t] = ""), e;
              }, {});
            $(n) &&
              L(n) &&
              (Object.assign(n.style, r),
              Object.keys(s).forEach(function (e) {
                n.removeAttribute(e);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function P(e) {
    return e.split("-")[0];
  }
  var j = Math.max,
    M = Math.min,
    F = Math.round;
  function H() {
    var e = navigator.userAgentData;
    return null != e && e.brands && Array.isArray(e.brands)
      ? e.brands
          .map(function (e) {
            return e.brand + "/" + e.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function W() {
    return !/^((?!chrome|android).)*safari/i.test(H());
  }
  function z(e, t, i) {
    void 0 === t && (t = !1), void 0 === i && (i = !1);
    var n = e.getBoundingClientRect(),
      s = 1,
      r = 1;
    t &&
      $(e) &&
      ((s = (e.offsetWidth > 0 && F(n.width) / e.offsetWidth) || 1),
      (r = (e.offsetHeight > 0 && F(n.height) / e.offsetHeight) || 1));
    var o = (D(e) ? S(e) : window).visualViewport,
      a = !W() && i,
      l = (n.left + (a && o ? o.offsetLeft : 0)) / s,
      c = (n.top + (a && o ? o.offsetTop : 0)) / r,
      h = n.width / s,
      u = n.height / r;
    return {
      width: h,
      height: u,
      top: c,
      right: l + h,
      bottom: c + u,
      left: l,
      x: l,
      y: c,
    };
  }
  function R(e) {
    var t = z(e),
      i = e.offsetWidth,
      n = e.offsetHeight;
    return (
      1 >= Math.abs(t.width - i) && (i = t.width),
      1 >= Math.abs(t.height - n) && (n = t.height),
      { x: e.offsetLeft, y: e.offsetTop, width: i, height: n }
    );
  }
  function q(e, t) {
    var i = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (i && I(i)) {
      var n = t;
      do {
        if (n && e.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function B(e) {
    return S(e).getComputedStyle(e);
  }
  function V(e) {
    return ((D(e) ? e.ownerDocument : e.document) || window.document)
      .documentElement;
  }
  function K(e) {
    return "html" === L(e)
      ? e
      : e.assignedSlot || e.parentNode || (I(e) ? e.host : null) || V(e);
  }
  function Q(e) {
    return $(e) && "fixed" !== B(e).position ? e.offsetParent : null;
  }
  function X(e) {
    for (
      var t = S(e), i = Q(e);
      i &&
      ["table", "td", "th"].indexOf(L(i)) >= 0 &&
      "static" === B(i).position;

    )
      i = Q(i);
    return i &&
      ("html" === L(i) || ("body" === L(i) && "static" === B(i).position))
      ? t
      : i ||
          (function (e) {
            var t = /firefox/i.test(H());
            if (/Trident/i.test(H()) && $(e) && "fixed" === B(e).position)
              return null;
            var i = K(e);
            for (
              I(i) && (i = i.host);
              $(i) && 0 > ["html", "body"].indexOf(L(i));

            ) {
              var n = B(i);
              if (
                "none" !== n.transform ||
                "none" !== n.perspective ||
                "paint" === n.contain ||
                -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                (t && "filter" === n.willChange) ||
                (t && n.filter && "none" !== n.filter)
              )
                return i;
              i = i.parentNode;
            }
            return null;
          })(e) ||
          t;
  }
  function Y(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }
  function U(e, t, i) {
    return j(e, M(t, i));
  }
  function G() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function J(e) {
    return Object.assign({}, G(), e);
  }
  function Z(e, t) {
    return t.reduce(function (t, i) {
      return (t[i] = e), t;
    }, {});
  }
  var ee = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t,
        i = e.state,
        n = e.name,
        l = e.options,
        h = i.elements.arrow,
        u = i.modifiersData.popperOffsets,
        d = P(i.placement),
        f = Y(d),
        p = [a, o].indexOf(d) >= 0 ? "height" : "width";
      if (h && u) {
        var m,
          g = J(
            "number" !=
              typeof (m =
                "function" == typeof (m = l.padding)
                  ? m(Object.assign({}, i.rects, { placement: i.placement }))
                  : m)
              ? m
              : Z(m, c),
          ),
          _ = R(h),
          b = "y" === f ? s : a,
          v = "y" === f ? r : o,
          y =
            i.rects.reference[p] +
            i.rects.reference[f] -
            u[f] -
            i.rects.popper[p],
          w = u[f] - i.rects.reference[f],
          A = X(h),
          E = A ? ("y" === f ? A.clientHeight || 0 : A.clientWidth || 0) : 0,
          C = g[b],
          T = E - _[p] - g[v],
          O = E / 2 - _[p] / 2 + (y / 2 - w / 2),
          x = U(C, O, T);
        i.modifiersData[n] = (((t = {})[f] = x), (t.centerOffset = x - O), t);
      }
    },
    effect: function (e) {
      var t = e.state,
        i = e.options.element,
        n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n &&
        ("string" != typeof n || (n = t.elements.popper.querySelector(n))) &&
        q(t.elements.popper, n) &&
        (t.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function et(e) {
    return e.split("-")[1];
  }
  var ei = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function en(e) {
    var t,
      i,
      n,
      l,
      c,
      h,
      d,
      f = e.popper,
      p = e.popperRect,
      m = e.placement,
      g = e.variation,
      _ = e.offsets,
      b = e.position,
      v = e.gpuAcceleration,
      y = e.adaptive,
      w = e.roundOffsets,
      A = e.isFixed,
      E = _.x,
      C = void 0 === E ? 0 : E,
      T = _.y,
      O = void 0 === T ? 0 : T,
      x = "function" == typeof w ? w({ x: C, y: O }) : { x: C, y: O };
    (C = x.x), (O = x.y);
    var k = _.hasOwnProperty("x"),
      L = _.hasOwnProperty("y"),
      D = a,
      $ = s,
      I = window;
    if (y) {
      var N = X(f),
        P = "clientHeight",
        j = "clientWidth";
      N === S(f) &&
        "static" !== B((N = V(f))).position &&
        "absolute" === b &&
        ((P = "scrollHeight"), (j = "scrollWidth")),
        (m === s || ((m === a || m === o) && g === u)) &&
          (($ = r),
          (O -=
            (A && N === I && I.visualViewport
              ? I.visualViewport.height
              : N[P]) - p.height),
          (O *= v ? 1 : -1)),
        (m === a || ((m === s || m === r) && g === u)) &&
          ((D = o),
          (C -=
            (A && N === I && I.visualViewport ? I.visualViewport.width : N[j]) -
            p.width),
          (C *= v ? 1 : -1));
    }
    var M = Object.assign({ position: b }, y && ei),
      H =
        !0 === w
          ? ((t = { x: C, y: O }),
            (i = S(f)),
            (n = t.x),
            (l = t.y),
            {
              x: F(n * (c = i.devicePixelRatio || 1)) / c || 0,
              y: F(l * c) / c || 0,
            })
          : { x: C, y: O };
    return ((C = H.x), (O = H.y), v)
      ? Object.assign(
          {},
          M,
          (((d = {})[$] = L ? "0" : ""),
          (d[D] = k ? "0" : ""),
          (d.transform =
            1 >= (I.devicePixelRatio || 1)
              ? "translate(" + C + "px, " + O + "px)"
              : "translate3d(" + C + "px, " + O + "px, 0)"),
          d),
        )
      : Object.assign(
          {},
          M,
          (((h = {})[$] = L ? O + "px" : ""),
          (h[D] = k ? C + "px" : ""),
          (h.transform = ""),
          h),
        );
  }
  var es = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function (e) {
        var t = e.state,
          i = e.options,
          n = i.gpuAcceleration,
          s = i.adaptive,
          r = i.roundOffsets,
          o = void 0 === r || r,
          a = {
            placement: P(t.placement),
            variation: et(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: void 0 === n || n,
            isFixed: "fixed" === t.options.strategy,
          };
        null != t.modifiersData.popperOffsets &&
          (t.styles.popper = Object.assign(
            {},
            t.styles.popper,
            en(
              Object.assign({}, a, {
                offsets: t.modifiersData.popperOffsets,
                position: t.options.strategy,
                adaptive: void 0 === s || s,
                roundOffsets: o,
              }),
            ),
          )),
          null != t.modifiersData.arrow &&
            (t.styles.arrow = Object.assign(
              {},
              t.styles.arrow,
              en(
                Object.assign({}, a, {
                  offsets: t.modifiersData.arrow,
                  position: "absolute",
                  adaptive: !1,
                  roundOffsets: o,
                }),
              ),
            )),
          (t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-placement": t.placement,
          }));
      },
      data: {},
    },
    er = { passive: !0 },
    eo = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: function (e) {
        var t = e.state,
          i = e.instance,
          n = e.options,
          s = n.scroll,
          r = void 0 === s || s,
          o = n.resize,
          a = void 0 === o || o,
          l = S(t.elements.popper),
          c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        return (
          r &&
            c.forEach(function (e) {
              e.addEventListener("scroll", i.update, er);
            }),
          a && l.addEventListener("resize", i.update, er),
          function () {
            r &&
              c.forEach(function (e) {
                e.removeEventListener("scroll", i.update, er);
              }),
              a && l.removeEventListener("resize", i.update, er);
          }
        );
      },
      data: {},
    },
    ea = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function el(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return ea[e];
    });
  }
  var ec = { start: "end", end: "start" };
  function eh(e) {
    return e.replace(/start|end/g, function (e) {
      return ec[e];
    });
  }
  function eu(e) {
    var t = S(e);
    return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
  }
  function ed(e) {
    return z(V(e)).left + eu(e).scrollLeft;
  }
  function ef(e) {
    var t = B(e),
      i = t.overflow,
      n = t.overflowX,
      s = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }
  function ep(e, t) {
    void 0 === t && (t = []);
    var i,
      n = (function e(t) {
        return ["html", "body", "#document"].indexOf(L(t)) >= 0
          ? t.ownerDocument.body
          : $(t) && ef(t)
            ? t
            : e(K(t));
      })(e),
      s = n === (null == (i = e.ownerDocument) ? void 0 : i.body),
      r = S(n),
      o = s ? [r].concat(r.visualViewport || [], ef(n) ? n : []) : n,
      a = t.concat(o);
    return s ? a : a.concat(ep(K(o)));
  }
  function em(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    });
  }
  function eg(e, t, i) {
    var n, s, r, o, a, l, c, h, u, d;
    return t === f
      ? em(
          (function (e, t) {
            var i = S(e),
              n = V(e),
              s = i.visualViewport,
              r = n.clientWidth,
              o = n.clientHeight,
              a = 0,
              l = 0;
            if (s) {
              (r = s.width), (o = s.height);
              var c = W();
              (c || (!c && "fixed" === t)) &&
                ((a = s.offsetLeft), (l = s.offsetTop));
            }
            return { width: r, height: o, x: a + ed(e), y: l };
          })(e, i),
        )
      : D(t)
        ? (((n = z(t, !1, "fixed" === i)).top = n.top + t.clientTop),
          (n.left = n.left + t.clientLeft),
          (n.bottom = n.top + t.clientHeight),
          (n.right = n.left + t.clientWidth),
          (n.width = t.clientWidth),
          (n.height = t.clientHeight),
          (n.x = n.left),
          (n.y = n.top),
          n)
        : em(
            ((s = V(e)),
            (o = V(s)),
            (a = eu(s)),
            (l = null == (r = s.ownerDocument) ? void 0 : r.body),
            (c = j(
              o.scrollWidth,
              o.clientWidth,
              l ? l.scrollWidth : 0,
              l ? l.clientWidth : 0,
            )),
            (h = j(
              o.scrollHeight,
              o.clientHeight,
              l ? l.scrollHeight : 0,
              l ? l.clientHeight : 0,
            )),
            (u = -a.scrollLeft + ed(s)),
            (d = -a.scrollTop),
            "rtl" === B(l || o).direction &&
              (u += j(o.clientWidth, l ? l.clientWidth : 0) - c),
            { width: c, height: h, x: u, y: d }),
          );
  }
  function e_(e) {
    var t,
      i = e.reference,
      n = e.element,
      l = e.placement,
      c = l ? P(l) : null,
      d = l ? et(l) : null,
      f = i.x + i.width / 2 - n.width / 2,
      p = i.y + i.height / 2 - n.height / 2;
    switch (c) {
      case s:
        t = { x: f, y: i.y - n.height };
        break;
      case r:
        t = { x: f, y: i.y + i.height };
        break;
      case o:
        t = { x: i.x + i.width, y: p };
        break;
      case a:
        t = { x: i.x - n.width, y: p };
        break;
      default:
        t = { x: i.x, y: i.y };
    }
    var m = c ? Y(c) : null;
    if (null != m) {
      var g = "y" === m ? "height" : "width";
      switch (d) {
        case h:
          t[m] = t[m] - (i[g] / 2 - n[g] / 2);
          break;
        case u:
          t[m] = t[m] + (i[g] / 2 - n[g] / 2);
      }
    }
    return t;
  }
  function eb(e, t) {
    void 0 === t && (t = {});
    var i,
      n,
      a,
      l,
      h,
      u,
      g,
      _,
      b = t,
      v = b.placement,
      y = void 0 === v ? e.placement : v,
      w = b.strategy,
      A = void 0 === w ? e.strategy : w,
      E = b.boundary,
      C = b.rootBoundary,
      T = b.elementContext,
      O = void 0 === T ? p : T,
      x = b.altBoundary,
      k = b.padding,
      S = void 0 === k ? 0 : k,
      I = J("number" != typeof S ? S : Z(S, c)),
      N = e.rects.popper,
      P = e.elements[void 0 !== x && x ? (O === p ? m : p) : O],
      F =
        ((i = D(P) ? P : P.contextElement || V(e.elements.popper)),
        (n = void 0 === E ? d : E),
        (a = void 0 === C ? f : C),
        (g = (u = [].concat(
          "clippingParents" === n
            ? ((l = ep(K(i))),
              D(
                (h =
                  ["absolute", "fixed"].indexOf(B(i).position) >= 0 && $(i)
                    ? X(i)
                    : i),
              )
                ? l.filter(function (e) {
                    return D(e) && q(e, h) && "body" !== L(e);
                  })
                : [])
            : [].concat(n),
          [a],
        ))[0]),
        ((_ = u.reduce(
          function (e, t) {
            var n = eg(i, t, A);
            return (
              (e.top = j(n.top, e.top)),
              (e.right = M(n.right, e.right)),
              (e.bottom = M(n.bottom, e.bottom)),
              (e.left = j(n.left, e.left)),
              e
            );
          },
          eg(i, g, A),
        )).width = _.right - _.left),
        (_.height = _.bottom - _.top),
        (_.x = _.left),
        (_.y = _.top),
        _),
      H = z(e.elements.reference),
      W = e_({ reference: H, element: N, strategy: "absolute", placement: y }),
      R = em(Object.assign({}, N, W)),
      Q = O === p ? R : H,
      Y = {
        top: F.top - Q.top + I.top,
        bottom: Q.bottom - F.bottom + I.bottom,
        left: F.left - Q.left + I.left,
        right: Q.right - F.right + I.right,
      },
      U = e.modifiersData.offset;
    if (O === p && U) {
      var G = U[y];
      Object.keys(Y).forEach(function (e) {
        var t = [o, r].indexOf(e) >= 0 ? 1 : -1,
          i = [s, r].indexOf(e) >= 0 ? "y" : "x";
        Y[e] += G[i] * t;
      });
    }
    return Y;
  }
  var ev = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (e) {
      var t = e.state,
        i = e.options,
        n = e.name;
      if (!t.modifiersData[n]._skip) {
        for (
          var u = i.mainAxis,
            d = void 0 === u || u,
            f = i.altAxis,
            p = void 0 === f || f,
            m = i.fallbackPlacements,
            b = i.padding,
            v = i.boundary,
            y = i.rootBoundary,
            w = i.altBoundary,
            A = i.flipVariations,
            E = void 0 === A || A,
            C = i.allowedAutoPlacements,
            T = t.options.placement,
            O = P(T) === T,
            x =
              m ||
              (O || !E
                ? [el(T)]
                : (function (e) {
                    if (P(e) === l) return [];
                    var t = el(e);
                    return [eh(e), t, eh(t)];
                  })(T)),
            k = [T].concat(x).reduce(function (e, i) {
              var n, s, r, o, a, h, u, d, f, p, m, w;
              return e.concat(
                P(i) === l
                  ? ((s = (n = {
                      placement: i,
                      boundary: v,
                      rootBoundary: y,
                      padding: b,
                      flipVariations: E,
                      allowedAutoPlacements: C,
                    }).placement),
                    (r = n.boundary),
                    (o = n.rootBoundary),
                    (a = n.padding),
                    (h = n.flipVariations),
                    (d = void 0 === (u = n.allowedAutoPlacements) ? _ : u),
                    0 ===
                      (m = (p = (f = et(s))
                        ? h
                          ? g
                          : g.filter(function (e) {
                              return et(e) === f;
                            })
                        : c).filter(function (e) {
                        return d.indexOf(e) >= 0;
                      })).length && (m = p),
                    Object.keys(
                      (w = m.reduce(function (e, i) {
                        return (
                          (e[i] = eb(t, {
                            placement: i,
                            boundary: r,
                            rootBoundary: o,
                            padding: a,
                          })[P(i)]),
                          e
                        );
                      }, {})),
                    ).sort(function (e, t) {
                      return w[e] - w[t];
                    }))
                  : i,
              );
            }, []),
            L = t.rects.reference,
            S = t.rects.popper,
            D = new Map(),
            $ = !0,
            I = k[0],
            N = 0;
          N < k.length;
          N++
        ) {
          var j = k[N],
            M = P(j),
            F = et(j) === h,
            H = [s, r].indexOf(M) >= 0,
            W = H ? "width" : "height",
            z = eb(t, {
              placement: j,
              boundary: v,
              rootBoundary: y,
              altBoundary: w,
              padding: b,
            }),
            R = H ? (F ? o : a) : F ? r : s;
          L[W] > S[W] && (R = el(R));
          var q = el(R),
            B = [];
          if (
            (d && B.push(z[M] <= 0),
            p && B.push(z[R] <= 0, z[q] <= 0),
            B.every(function (e) {
              return e;
            }))
          ) {
            (I = j), ($ = !1);
            break;
          }
          D.set(j, B);
        }
        if ($)
          for (
            var V = E ? 3 : 1,
              K = function (e) {
                var t = k.find(function (t) {
                  var i = D.get(t);
                  if (i)
                    return i.slice(0, e).every(function (e) {
                      return e;
                    });
                });
                if (t) return (I = t), "break";
              },
              Q = V;
            Q > 0 && "break" !== K(Q);
            Q--
          );
        t.placement !== I &&
          ((t.modifiersData[n]._skip = !0), (t.placement = I), (t.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function ey(e, t, i) {
    return (
      void 0 === i && (i = { x: 0, y: 0 }),
      {
        top: e.top - t.height - i.y,
        right: e.right - t.width + i.x,
        bottom: e.bottom - t.height + i.y,
        left: e.left - t.width - i.x,
      }
    );
  }
  function ew(e) {
    return [s, o, r, a].some(function (t) {
      return e[t] >= 0;
    });
  }
  var eA = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (e) {
        var t = e.state,
          i = e.name,
          n = t.rects.reference,
          s = t.rects.popper,
          r = t.modifiersData.preventOverflow,
          o = eb(t, { elementContext: "reference" }),
          a = eb(t, { altBoundary: !0 }),
          l = ey(o, n),
          c = ey(a, s, r),
          h = ew(l),
          u = ew(c);
        (t.modifiersData[i] = {
          referenceClippingOffsets: l,
          popperEscapeOffsets: c,
          isReferenceHidden: h,
          hasPopperEscaped: u,
        }),
          (t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-reference-hidden": h,
            "data-popper-escaped": u,
          }));
      },
    },
    eE = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (e) {
        var t = e.state,
          i = e.options,
          n = e.name,
          r = i.offset,
          l = void 0 === r ? [0, 0] : r,
          c = _.reduce(function (e, i) {
            var n, r, c, h, u, d;
            return (
              (e[i] =
                ((n = t.rects),
                (c = [a, s].indexOf((r = P(i))) >= 0 ? -1 : 1),
                (u = (h =
                  "function" == typeof l
                    ? l(Object.assign({}, n, { placement: i }))
                    : l)[0]),
                (d = h[1]),
                (u = u || 0),
                (d = (d || 0) * c),
                [a, o].indexOf(r) >= 0 ? { x: d, y: u } : { x: u, y: d })),
              e
            );
          }, {}),
          h = c[t.placement],
          u = h.x,
          d = h.y;
        null != t.modifiersData.popperOffsets &&
          ((t.modifiersData.popperOffsets.x += u),
          (t.modifiersData.popperOffsets.y += d)),
          (t.modifiersData[n] = c);
      },
    },
    eC = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function (e) {
        var t = e.state,
          i = e.name;
        t.modifiersData[i] = e_({
          reference: t.rects.reference,
          element: t.rects.popper,
          strategy: "absolute",
          placement: t.placement,
        });
      },
      data: {},
    },
    eT = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t = e.state,
          i = e.options,
          n = e.name,
          l = i.mainAxis,
          c = i.altAxis,
          u = i.boundary,
          d = i.rootBoundary,
          f = i.altBoundary,
          p = i.padding,
          m = i.tether,
          g = void 0 === m || m,
          _ = i.tetherOffset,
          b = void 0 === _ ? 0 : _,
          v = eb(t, {
            boundary: u,
            rootBoundary: d,
            padding: p,
            altBoundary: f,
          }),
          y = P(t.placement),
          w = et(t.placement),
          A = !w,
          E = Y(y),
          C = "x" === E ? "y" : "x",
          T = t.modifiersData.popperOffsets,
          O = t.rects.reference,
          x = t.rects.popper,
          k =
            "function" == typeof b
              ? b(Object.assign({}, t.rects, { placement: t.placement }))
              : b,
          L =
            "number" == typeof k
              ? { mainAxis: k, altAxis: k }
              : Object.assign({ mainAxis: 0, altAxis: 0 }, k),
          S = t.modifiersData.offset
            ? t.modifiersData.offset[t.placement]
            : null,
          D = { x: 0, y: 0 };
        if (T) {
          if (void 0 === l || l) {
            var $,
              I = "y" === E ? s : a,
              N = "y" === E ? r : o,
              F = "y" === E ? "height" : "width",
              H = T[E],
              W = H + v[I],
              z = H - v[N],
              q = g ? -x[F] / 2 : 0,
              B = w === h ? O[F] : x[F],
              V = w === h ? -x[F] : -O[F],
              K = t.elements.arrow,
              Q = g && K ? R(K) : { width: 0, height: 0 },
              J = t.modifiersData["arrow#persistent"]
                ? t.modifiersData["arrow#persistent"].padding
                : G(),
              Z = J[I],
              ee = J[N],
              ei = U(0, O[F], Q[F]),
              en = A
                ? O[F] / 2 - q - ei - Z - L.mainAxis
                : B - ei - Z - L.mainAxis,
              es = A
                ? -O[F] / 2 + q + ei + ee + L.mainAxis
                : V + ei + ee + L.mainAxis,
              er = t.elements.arrow && X(t.elements.arrow),
              eo = er
                ? "y" === E
                  ? er.clientTop || 0
                  : er.clientLeft || 0
                : 0,
              ea = null != ($ = null == S ? void 0 : S[E]) ? $ : 0,
              el = U(
                g ? M(W, H + en - ea - eo) : W,
                H,
                g ? j(z, H + es - ea) : z,
              );
            (T[E] = el), (D[E] = el - H);
          }
          if (void 0 !== c && c) {
            var ec,
              eh,
              eu = "x" === E ? s : a,
              ed = "x" === E ? r : o,
              ef = T[C],
              ep = "y" === C ? "height" : "width",
              em = ef + v[eu],
              eg = ef - v[ed],
              e_ = -1 !== [s, a].indexOf(y),
              ev = null != (eh = null == S ? void 0 : S[C]) ? eh : 0,
              ey = e_ ? em : ef - O[ep] - x[ep] - ev + L.altAxis,
              ew = e_ ? ef + O[ep] + x[ep] - ev - L.altAxis : eg,
              eA =
                g && e_
                  ? (ec = U(ey, ef, ew)) > ew
                    ? ew
                    : ec
                  : U(g ? ey : em, ef, g ? ew : eg);
            (T[C] = eA), (D[C] = eA - ef);
          }
          t.modifiersData[n] = D;
        }
      },
      requiresIfExists: ["offset"],
    },
    eO = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function ex() {
    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return !t.some(function (e) {
      return !(e && "function" == typeof e.getBoundingClientRect);
    });
  }
  function ek(e) {
    void 0 === e && (e = {});
    var t = e,
      i = t.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = t.defaultOptions,
      r = void 0 === s ? eO : s;
    return function (e, t, i) {
      void 0 === i && (i = r);
      var s,
        o,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, eO, r),
          modifiersData: {},
          elements: { reference: e, popper: t },
          attributes: {},
          styles: {},
        },
        l = [],
        c = !1,
        h = {
          state: a,
          setOptions: function (i) {
            var s,
              o,
              c,
              d,
              f,
              p = "function" == typeof i ? i(a.options) : i;
            u(),
              (a.options = Object.assign({}, r, a.options, p)),
              (a.scrollParents = {
                reference: D(e)
                  ? ep(e)
                  : e.contextElement
                    ? ep(e.contextElement)
                    : [],
                popper: ep(t),
              });
            var m =
              ((o = Object.keys(
                (s = [].concat(n, a.options.modifiers).reduce(function (e, t) {
                  var i = e[t.name];
                  return (
                    (e[t.name] = i
                      ? Object.assign({}, i, t, {
                          options: Object.assign({}, i.options, t.options),
                          data: Object.assign({}, i.data, t.data),
                        })
                      : t),
                    e
                  );
                }, {})),
              ).map(function (e) {
                return s[e];
              })),
              (c = new Map()),
              (d = new Set()),
              (f = []),
              o.forEach(function (e) {
                c.set(e.name, e);
              }),
              o.forEach(function (e) {
                d.has(e.name) ||
                  (function e(t) {
                    d.add(t.name),
                      []
                        .concat(t.requires || [], t.requiresIfExists || [])
                        .forEach(function (t) {
                          if (!d.has(t)) {
                            var i = c.get(t);
                            i && e(i);
                          }
                        }),
                      f.push(t);
                  })(e);
              }),
              x.reduce(function (e, t) {
                return e.concat(
                  f.filter(function (e) {
                    return e.phase === t;
                  }),
                );
              }, []));
            return (
              (a.orderedModifiers = m.filter(function (e) {
                return e.enabled;
              })),
              a.orderedModifiers.forEach(function (e) {
                var t = e.name,
                  i = e.options,
                  n = e.effect;
                if ("function" == typeof n) {
                  var s = n({
                    state: a,
                    name: t,
                    instance: h,
                    options: void 0 === i ? {} : i,
                  });
                  l.push(s || function () {});
                }
              }),
              h.update()
            );
          },
          forceUpdate: function () {
            if (!c) {
              var e = a.elements,
                t = e.reference,
                i = e.popper;
              if (ex(t, i)) {
                (a.rects = {
                  reference:
                    ((s = X(i)),
                    (r = "fixed" === a.options.strategy),
                    (o = $(s)),
                    (f =
                      $(s) &&
                      ((u =
                        F((l = s.getBoundingClientRect()).width) /
                          s.offsetWidth || 1),
                      (d = F(l.height) / s.offsetHeight || 1),
                      1 !== u || 1 !== d)),
                    (p = V(s)),
                    (m = z(t, f, r)),
                    (g = { scrollLeft: 0, scrollTop: 0 }),
                    (_ = { x: 0, y: 0 }),
                    (o || (!o && !r)) &&
                      (("body" !== L(s) || ef(p)) &&
                        (g =
                          (n = s) !== S(n) && $(n)
                            ? {
                                scrollLeft: n.scrollLeft,
                                scrollTop: n.scrollTop,
                              }
                            : eu(n)),
                      $(s)
                        ? ((_ = z(s, !0)),
                          (_.x += s.clientLeft),
                          (_.y += s.clientTop))
                        : p && (_.x = ed(p))),
                    {
                      x: m.left + g.scrollLeft - _.x,
                      y: m.top + g.scrollTop - _.y,
                      width: m.width,
                      height: m.height,
                    }),
                  popper: R(i),
                }),
                  (a.reset = !1),
                  (a.placement = a.options.placement),
                  a.orderedModifiers.forEach(function (e) {
                    return (a.modifiersData[e.name] = Object.assign(
                      {},
                      e.data,
                    ));
                  });
                for (
                  var n, s, r, o, l, u, d, f, p, m, g, _, b = 0;
                  b < a.orderedModifiers.length;
                  b++
                ) {
                  if (!0 === a.reset) {
                    (a.reset = !1), (b = -1);
                    continue;
                  }
                  var v = a.orderedModifiers[b],
                    y = v.fn,
                    w = v.options,
                    A = void 0 === w ? {} : w,
                    E = v.name;
                  "function" == typeof y &&
                    (a =
                      y({ state: a, options: A, name: E, instance: h }) || a);
                }
              }
            }
          },
          update:
            ((s = function () {
              return new Promise(function (e) {
                h.forceUpdate(), e(a);
              });
            }),
            function () {
              return (
                o ||
                  (o = new Promise(function (e) {
                    Promise.resolve().then(function () {
                      (o = void 0), e(s());
                    });
                  })),
                o
              );
            }),
          destroy: function () {
            u(), (c = !0);
          },
        };
      if (!ex(e, t)) return h;
      function u() {
        l.forEach(function (e) {
          return e();
        }),
          (l = []);
      }
      return (
        h.setOptions(i).then(function (e) {
          !c && i.onFirstUpdate && i.onFirstUpdate(e);
        }),
        h
      );
    };
  }
  var eL = ek(),
    eS = ek({ defaultModifiers: [eo, eC, es, N, eE, ev, eT, ee, eA] }),
    eD = ek({ defaultModifiers: [eo, eC, es, N] });
  e(i, n), e(i, k);
  let e$ = new Map(),
    eI = {
      set(e, t, i) {
        e$.has(e) || e$.set(e, new Map());
        let n = e$.get(e);
        if (!n.has(t) && 0 !== n.size) {
          console.error(
            `Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`,
          );
          return;
        }
        n.set(t, i);
      },
      get: (e, t) => (e$.has(e) && e$.get(e).get(t)) || null,
      remove(e, t) {
        if (!e$.has(e)) return;
        let i = e$.get(e);
        i.delete(t), 0 === i.size && e$.delete(e);
      },
    },
    eN = "transitionend",
    eP = (e) => (
      e &&
        window.CSS &&
        window.CSS.escape &&
        (e = e.replace(/#([^\s"#']+)/g, (e, t) => `#${CSS.escape(t)}`)),
      e
    ),
    ej = (e) =>
      null == e
        ? `${e}`
        : Object.prototype.toString
            .call(e)
            .match(/\s([a-z]+)/i)[1]
            .toLowerCase(),
    eM = (e) => {
      do e += Math.floor(1e6 * Math.random());
      while (document.getElementById(e));
      return e;
    },
    eF = (e) => {
      if (!e) return 0;
      let { transitionDuration: t, transitionDelay: i } =
          window.getComputedStyle(e),
        n = Number.parseFloat(t),
        s = Number.parseFloat(i);
      return n || s
        ? ((t = t.split(",")[0]),
          (i = i.split(",")[0]),
          (Number.parseFloat(t) + Number.parseFloat(i)) * 1e3)
        : 0;
    },
    eH = (e) => {
      e.dispatchEvent(new Event(eN));
    },
    eW = (e) =>
      !!e &&
      "object" == typeof e &&
      (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
    ez = (e) =>
      eW(e)
        ? e.jquery
          ? e[0]
          : e
        : "string" == typeof e && e.length > 0
          ? document.querySelector(eP(e))
          : null,
    eR = (e) => {
      if (!eW(e) || 0 === e.getClientRects().length) return !1;
      let t = "visible" === getComputedStyle(e).getPropertyValue("visibility"),
        i = e.closest("details:not([open])");
      if (!i) return t;
      if (i !== e) {
        let t = e.closest("summary");
        if ((t && t.parentNode !== i) || null === t) return !1;
      }
      return t;
    },
    eq = (e) =>
      !!(
        !e ||
        e.nodeType !== Node.ELEMENT_NODE ||
        e.classList.contains("disabled")
      ) ||
      (void 0 !== e.disabled
        ? e.disabled
        : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
    eB = (e) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof e.getRootNode) {
        let t = e.getRootNode();
        return t instanceof ShadowRoot ? t : null;
      }
      return e instanceof ShadowRoot
        ? e
        : e.parentNode
          ? eB(e.parentNode)
          : null;
    },
    eV = () => {},
    eK = (e) => {
      e.offsetHeight;
    },
    eQ = () =>
      window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
        ? window.jQuery
        : null,
    eX = [],
    eY = (e) => {
      "loading" === document.readyState
        ? (eX.length ||
            document.addEventListener("DOMContentLoaded", () => {
              for (let e of eX) e();
            }),
          eX.push(e))
        : e();
    },
    eU = () => "rtl" === document.documentElement.dir,
    eG = (e) => {
      eY(() => {
        let t = eQ();
        if (t) {
          let i = e.NAME,
            n = t.fn[i];
          (t.fn[i] = e.jQueryInterface),
            (t.fn[i].Constructor = e),
            (t.fn[i].noConflict = () => ((t.fn[i] = n), e.jQueryInterface));
        }
      });
    },
    eJ = (e, t = [], i = e) => ("function" == typeof e ? e(...t) : i),
    eZ = (e, t, i = !0) => {
      if (!i) {
        eJ(e);
        return;
      }
      let n = eF(t) + 5,
        s = !1,
        r = ({ target: i }) => {
          i === t && ((s = !0), t.removeEventListener(eN, r), eJ(e));
        };
      t.addEventListener(eN, r),
        setTimeout(() => {
          s || eH(t);
        }, n);
    },
    e0 = (e, t, i, n) => {
      let s = e.length,
        r = e.indexOf(t);
      return -1 === r
        ? !i && n
          ? e[s - 1]
          : e[0]
        : ((r += i ? 1 : -1),
          n && (r = (r + s) % s),
          e[Math.max(0, Math.min(r, s - 1))]);
    },
    e1 = /[^.]*(?=\..*)\.|.*/,
    e2 = /\..*/,
    e3 = /::\d+$/,
    e5 = {},
    e6 = 1,
    e4 = { mouseenter: "mouseover", mouseleave: "mouseout" },
    e8 = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function e9(e, t) {
    return (t && `${t}::${e6++}`) || e.uidEvent || e6++;
  }
  function e7(e) {
    let t = e9(e);
    return (e.uidEvent = t), (e5[t] = e5[t] || {}), e5[t];
  }
  function te(e, t, i = null) {
    return Object.values(e).find(
      (e) => e.callable === t && e.delegationSelector === i,
    );
  }
  function tt(e, t, i) {
    let n = "string" == typeof t,
      s = ts(e);
    return e8.has(s) || (s = e), [n, n ? i : t || i, s];
  }
  function ti(e, t, i, n, s) {
    var r, o;
    if ("string" != typeof t || !e) return;
    let [a, l, c] = tt(t, i, n);
    if (t in e4) {
      let e;
      (e = l),
        (l = function (t) {
          if (
            !t.relatedTarget ||
            (t.relatedTarget !== t.delegateTarget &&
              !t.delegateTarget.contains(t.relatedTarget))
          )
            return e.call(this, t);
        });
    }
    let h = e7(e),
      u = h[c] || (h[c] = {}),
      d = te(u, l, a ? i : null);
    if (d) {
      d.oneOff = d.oneOff && s;
      return;
    }
    let f = e9(l, t.replace(e1, "")),
      p = a
        ? ((r = l),
          function t(n) {
            let s = e.querySelectorAll(i);
            for (let { target: o } = n; o && o !== this; o = o.parentNode)
              for (let a of s)
                if (a === o)
                  return (
                    to(n, { delegateTarget: o }),
                    t.oneOff && tr.off(e, n.type, i, r),
                    r.apply(o, [n])
                  );
          })
        : ((o = l),
          function t(i) {
            return (
              to(i, { delegateTarget: e }),
              t.oneOff && tr.off(e, i.type, o),
              o.apply(e, [i])
            );
          });
    (p.delegationSelector = a ? i : null),
      (p.callable = l),
      (p.oneOff = s),
      (p.uidEvent = f),
      (u[f] = p),
      e.addEventListener(c, p, a);
  }
  function tn(e, t, i, n, s) {
    let r = te(t[i], n, s);
    r && (e.removeEventListener(i, r, !!s), delete t[i][r.uidEvent]);
  }
  function ts(e) {
    return e4[(e = e.replace(e2, ""))] || e;
  }
  let tr = {
    on(e, t, i, n) {
      ti(e, t, i, n, !1);
    },
    one(e, t, i, n) {
      ti(e, t, i, n, !0);
    },
    off(e, t, i, n) {
      if ("string" != typeof t || !e) return;
      let [s, r, o] = tt(t, i, n),
        a = o !== t,
        l = e7(e),
        c = l[o] || {},
        h = t.startsWith(".");
      if (void 0 !== r) {
        if (!Object.keys(c).length) return;
        tn(e, l, o, r, s ? i : null);
        return;
      }
      if (h)
        for (let i of Object.keys(l))
          !(function (e, t, i, n) {
            for (let [s, r] of Object.entries(t[i] || {}))
              s.includes(n) && tn(e, t, i, r.callable, r.delegationSelector);
          })(e, l, i, t.slice(1));
      for (let [i, n] of Object.entries(c)) {
        let s = i.replace(e3, "");
        (!a || t.includes(s)) && tn(e, l, o, n.callable, n.delegationSelector);
      }
    },
    trigger(e, t, i) {
      if ("string" != typeof t || !e) return null;
      let n = eQ(),
        s = ts(t),
        r = null,
        o = !0,
        a = !0,
        l = !1;
      t !== s &&
        n &&
        ((r = n.Event(t, i)),
        n(e).trigger(r),
        (o = !r.isPropagationStopped()),
        (a = !r.isImmediatePropagationStopped()),
        (l = r.isDefaultPrevented()));
      let c = to(new Event(t, { bubbles: o, cancelable: !0 }), i);
      return (
        l && c.preventDefault(),
        a && e.dispatchEvent(c),
        c.defaultPrevented && r && r.preventDefault(),
        c
      );
    },
  };
  function to(e, t = {}) {
    for (let [i, n] of Object.entries(t))
      try {
        e[i] = n;
      } catch (t) {
        Object.defineProperty(e, i, { configurable: !0, get: () => n });
      }
    return e;
  }
  function ta(e) {
    if ("true" === e) return !0;
    if ("false" === e) return !1;
    if (e === Number(e).toString()) return Number(e);
    if ("" === e || "null" === e) return null;
    if ("string" != typeof e) return e;
    try {
      return JSON.parse(decodeURIComponent(e));
    } catch (t) {
      return e;
    }
  }
  function tl(e) {
    return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
  }
  let tc = {
    setDataAttribute(e, t, i) {
      e.setAttribute(`data-bs-${tl(t)}`, i);
    },
    removeDataAttribute(e, t) {
      e.removeAttribute(`data-bs-${tl(t)}`);
    },
    getDataAttributes(e) {
      if (!e) return {};
      let t = {};
      for (let i of Object.keys(e.dataset).filter(
        (e) => e.startsWith("bs") && !e.startsWith("bsConfig"),
      )) {
        let n = i.replace(/^bs/, "");
        t[(n = n.charAt(0).toLowerCase() + n.slice(1, n.length))] = ta(
          e.dataset[i],
        );
      }
      return t;
    },
    getDataAttribute: (e, t) => ta(e.getAttribute(`data-bs-${tl(t)}`)),
  };
  class th {
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw Error(
        'You have to implement the static method "NAME", for each component!',
      );
    }
    _getConfig(e) {
      return (
        (e = this._mergeConfigObj(e)),
        (e = this._configAfterMerge(e)),
        this._typeCheckConfig(e),
        e
      );
    }
    _configAfterMerge(e) {
      return e;
    }
    _mergeConfigObj(e, t) {
      let i = eW(t) ? tc.getDataAttribute(t, "config") : {};
      return {
        ...this.constructor.Default,
        ...("object" == typeof i ? i : {}),
        ...(eW(t) ? tc.getDataAttributes(t) : {}),
        ...("object" == typeof e ? e : {}),
      };
    }
    _typeCheckConfig(e, t = this.constructor.DefaultType) {
      for (let [i, n] of Object.entries(t)) {
        let t = e[i],
          s = eW(t) ? "element" : ej(t);
        if (!new RegExp(n).test(s))
          throw TypeError(
            `${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${s}" but expected type "${n}".`,
          );
      }
    }
  }
  class tu extends th {
    constructor(e, t) {
      if ((super(), !(e = ez(e)))) return;
      (this._element = e),
        (this._config = this._getConfig(t)),
        eI.set(this._element, this.constructor.DATA_KEY, this);
    }
    dispose() {
      for (let e of (eI.remove(this._element, this.constructor.DATA_KEY),
      tr.off(this._element, this.constructor.EVENT_KEY),
      Object.getOwnPropertyNames(this)))
        this[e] = null;
    }
    _queueCallback(e, t, i = !0) {
      eZ(e, t, i);
    }
    _getConfig(e) {
      return (
        (e = this._mergeConfigObj(e, this._element)),
        (e = this._configAfterMerge(e)),
        this._typeCheckConfig(e),
        e
      );
    }
    static getInstance(e) {
      return eI.get(ez(e), this.DATA_KEY);
    }
    static getOrCreateInstance(e, t = {}) {
      return (
        this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
      );
    }
    static get VERSION() {
      return "5.3.3";
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(e) {
      return `${e}${this.EVENT_KEY}`;
    }
  }
  let td = (e) => {
      let t = e.getAttribute("data-bs-target");
      if (!t || "#" === t) {
        let i = e.getAttribute("href");
        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
        i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
          (t = i && "#" !== i ? i.trim() : null);
      }
      return t
        ? t
            .split(",")
            .map((e) => eP(e))
            .join(",")
        : null;
    },
    tf = {
      find: (e, t = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(t, e)),
      findOne: (e, t = document.documentElement) =>
        Element.prototype.querySelector.call(t, e),
      children: (e, t) => [].concat(...e.children).filter((e) => e.matches(t)),
      parents(e, t) {
        let i = [],
          n = e.parentNode.closest(t);
        for (; n; ) i.push(n), (n = n.parentNode.closest(t));
        return i;
      },
      prev(e, t) {
        let i = e.previousElementSibling;
        for (; i; ) {
          if (i.matches(t)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(e, t) {
        let i = e.nextElementSibling;
        for (; i; ) {
          if (i.matches(t)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren(e) {
        let t = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]',
        ]
          .map((e) => `${e}:not([tabindex^="-"])`)
          .join(",");
        return this.find(t, e).filter((e) => !eq(e) && eR(e));
      },
      getSelectorFromElement(e) {
        let t = td(e);
        return t && tf.findOne(t) ? t : null;
      },
      getElementFromSelector(e) {
        let t = td(e);
        return t ? tf.findOne(t) : null;
      },
      getMultipleElementsFromSelector(e) {
        let t = td(e);
        return t ? tf.find(t) : [];
      },
    },
    tp = (e, t = "hide") => {
      let i = `click.dismiss${e.EVENT_KEY}`,
        n = e.NAME;
      tr.on(document, i, `[data-bs-dismiss="${n}"]`, function (i) {
        if (
          (["A", "AREA"].includes(this.tagName) && i.preventDefault(), eq(this))
        )
          return;
        let s = tf.getElementFromSelector(this) || this.closest(`.${n}`);
        e.getOrCreateInstance(s)[t]();
      });
    },
    tm = ".bs.alert",
    tg = `close${tm}`,
    t_ = `closed${tm}`;
  class tb extends tu {
    static get NAME() {
      return "alert";
    }
    close() {
      if (tr.trigger(this._element, tg).defaultPrevented) return;
      this._element.classList.remove("show");
      let e = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, e);
    }
    _destroyElement() {
      this._element.remove(), tr.trigger(this._element, t_), this.dispose();
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = tb.getOrCreateInstance(this);
        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
            throw TypeError(`No method named "${e}"`);
          t[e](this);
        }
      });
    }
  }
  tp(tb, "close"), eG(tb);
  let tv = '[data-bs-toggle="button"]';
  class ty extends tu {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active"),
      );
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = ty.getOrCreateInstance(this);
        "toggle" === e && t[e]();
      });
    }
  }
  tr.on(document, "click.bs.button.data-api", tv, (e) => {
    e.preventDefault();
    let t = e.target.closest(tv);
    ty.getOrCreateInstance(t).toggle();
  }),
    eG(ty);
  let tw = ".bs.swipe",
    tA = `touchstart${tw}`,
    tE = `touchmove${tw}`,
    tC = `touchend${tw}`,
    tT = `pointerdown${tw}`,
    tO = `pointerup${tw}`,
    tx = { endCallback: null, leftCallback: null, rightCallback: null },
    tk = {
      endCallback: "(function|null)",
      leftCallback: "(function|null)",
      rightCallback: "(function|null)",
    };
  class tL extends th {
    constructor(e, t) {
      if ((super(), (this._element = e), !e || !tL.isSupported())) return;
      (this._config = this._getConfig(t)),
        (this._deltaX = 0),
        (this._supportPointerEvents = !!window.PointerEvent),
        this._initEvents();
    }
    static get Default() {
      return tx;
    }
    static get DefaultType() {
      return tk;
    }
    static get NAME() {
      return "swipe";
    }
    dispose() {
      tr.off(this._element, tw);
    }
    _start(e) {
      if (!this._supportPointerEvents) {
        this._deltaX = e.touches[0].clientX;
        return;
      }
      this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX);
    }
    _end(e) {
      this._eventIsPointerPenTouch(e) &&
        (this._deltaX = e.clientX - this._deltaX),
        this._handleSwipe(),
        eJ(this._config.endCallback);
    }
    _move(e) {
      this._deltaX =
        e.touches && e.touches.length > 1
          ? 0
          : e.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      let e = Math.abs(this._deltaX);
      if (e <= 40) return;
      let t = e / this._deltaX;
      (this._deltaX = 0),
        t && eJ(t > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      this._supportPointerEvents
        ? (tr.on(this._element, tT, (e) => this._start(e)),
          tr.on(this._element, tO, (e) => this._end(e)),
          this._element.classList.add("pointer-event"))
        : (tr.on(this._element, tA, (e) => this._start(e)),
          tr.on(this._element, tE, (e) => this._move(e)),
          tr.on(this._element, tC, (e) => this._end(e)));
    }
    _eventIsPointerPenTouch(e) {
      return (
        this._supportPointerEvents &&
        ("pen" === e.pointerType || "touch" === e.pointerType)
      );
    }
    static isSupported() {
      return (
        "ontouchstart" in document.documentElement ||
        navigator.maxTouchPoints > 0
      );
    }
  }
  let tS = ".bs.carousel",
    tD = ".data-api",
    t$ = "next",
    tI = "prev",
    tN = "left",
    tP = "right",
    tj = `slide${tS}`,
    tM = `slid${tS}`,
    tF = `keydown${tS}`,
    tH = `mouseenter${tS}`,
    tW = `mouseleave${tS}`,
    tz = `dragstart${tS}`,
    tR = `load${tS}${tD}`,
    tq = `click${tS}${tD}`,
    tB = "carousel",
    tV = "active",
    tK = ".active",
    tQ = ".carousel-item",
    tX = tK + tQ,
    tY = { ArrowLeft: tP, ArrowRight: tN },
    tU = {
      interval: 5e3,
      keyboard: !0,
      pause: "hover",
      ride: !1,
      touch: !0,
      wrap: !0,
    },
    tG = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      pause: "(string|boolean)",
      ride: "(boolean|string)",
      touch: "boolean",
      wrap: "boolean",
    };
  class tJ extends tu {
    constructor(e, t) {
      super(e, t),
        (this._interval = null),
        (this._activeElement = null),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this._swipeHelper = null),
        (this._indicatorsElement = tf.findOne(
          ".carousel-indicators",
          this._element,
        )),
        this._addEventListeners(),
        this._config.ride === tB && this.cycle();
    }
    static get Default() {
      return tU;
    }
    static get DefaultType() {
      return tG;
    }
    static get NAME() {
      return "carousel";
    }
    next() {
      this._slide(t$);
    }
    nextWhenVisible() {
      !document.hidden && eR(this._element) && this.next();
    }
    prev() {
      this._slide(tI);
    }
    pause() {
      this._isSliding && eH(this._element), this._clearInterval();
    }
    cycle() {
      this._clearInterval(),
        this._updateInterval(),
        (this._interval = setInterval(
          () => this.nextWhenVisible(),
          this._config.interval,
        ));
    }
    _maybeEnableCycle() {
      if (this._config.ride) {
        if (this._isSliding) {
          tr.one(this._element, tM, () => this.cycle());
          return;
        }
        this.cycle();
      }
    }
    to(e) {
      let t = this._getItems();
      if (e > t.length - 1 || e < 0) return;
      if (this._isSliding) {
        tr.one(this._element, tM, () => this.to(e));
        return;
      }
      let i = this._getItemIndex(this._getActive());
      i !== e && this._slide(e > i ? t$ : tI, t[e]);
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
    }
    _configAfterMerge(e) {
      return (e.defaultInterval = e.interval), e;
    }
    _addEventListeners() {
      this._config.keyboard &&
        tr.on(this._element, tF, (e) => this._keydown(e)),
        "hover" === this._config.pause &&
          (tr.on(this._element, tH, () => this.pause()),
          tr.on(this._element, tW, () => this._maybeEnableCycle())),
        this._config.touch &&
          tL.isSupported() &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      for (let e of tf.find(".carousel-item img", this._element))
        tr.on(e, tz, (e) => e.preventDefault());
      this._swipeHelper = new tL(this._element, {
        leftCallback: () => this._slide(this._directionToOrder(tN)),
        rightCallback: () => this._slide(this._directionToOrder(tP)),
        endCallback: () => {
          "hover" === this._config.pause &&
            (this.pause(),
            this.touchTimeout && clearTimeout(this.touchTimeout),
            (this.touchTimeout = setTimeout(
              () => this._maybeEnableCycle(),
              500 + this._config.interval,
            )));
        },
      });
    }
    _keydown(e) {
      if (/input|textarea/i.test(e.target.tagName)) return;
      let t = tY[e.key];
      t && (e.preventDefault(), this._slide(this._directionToOrder(t)));
    }
    _getItemIndex(e) {
      return this._getItems().indexOf(e);
    }
    _setActiveIndicatorElement(e) {
      if (!this._indicatorsElement) return;
      let t = tf.findOne(tK, this._indicatorsElement);
      t.classList.remove(tV), t.removeAttribute("aria-current");
      let i = tf.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
      i && (i.classList.add(tV), i.setAttribute("aria-current", "true"));
    }
    _updateInterval() {
      let e = this._activeElement || this._getActive();
      if (!e) return;
      let t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
      this._config.interval = t || this._config.defaultInterval;
    }
    _slide(e, t = null) {
      if (this._isSliding) return;
      let i = this._getActive(),
        n = e === t$,
        s = t || e0(this._getItems(), i, n, this._config.wrap);
      if (s === i) return;
      let r = this._getItemIndex(s),
        o = (t) =>
          tr.trigger(this._element, t, {
            relatedTarget: s,
            direction: this._orderToDirection(e),
            from: this._getItemIndex(i),
            to: r,
          });
      if (o(tj).defaultPrevented || !i || !s) return;
      let a = !!this._interval;
      this.pause(),
        (this._isSliding = !0),
        this._setActiveIndicatorElement(r),
        (this._activeElement = s);
      let l = n ? "carousel-item-start" : "carousel-item-end",
        c = n ? "carousel-item-next" : "carousel-item-prev";
      s.classList.add(c),
        eK(s),
        i.classList.add(l),
        s.classList.add(l),
        this._queueCallback(
          () => {
            s.classList.remove(l, c),
              s.classList.add(tV),
              i.classList.remove(tV, c, l),
              (this._isSliding = !1),
              o(tM);
          },
          i,
          this._isAnimated(),
        ),
        a && this.cycle();
    }
    _isAnimated() {
      return this._element.classList.contains("slide");
    }
    _getActive() {
      return tf.findOne(tX, this._element);
    }
    _getItems() {
      return tf.find(tQ, this._element);
    }
    _clearInterval() {
      this._interval &&
        (clearInterval(this._interval), (this._interval = null));
    }
    _directionToOrder(e) {
      return eU() ? (e === tN ? tI : t$) : e === tN ? t$ : tI;
    }
    _orderToDirection(e) {
      return eU() ? (e === tI ? tN : tP) : e === tI ? tP : tN;
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = tJ.getOrCreateInstance(this, e);
        if ("number" == typeof e) {
          t.to(e);
          return;
        }
        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
            throw TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  }
  tr.on(document, tq, "[data-bs-slide], [data-bs-slide-to]", function (e) {
    let t = tf.getElementFromSelector(this);
    if (!t || !t.classList.contains(tB)) return;
    e.preventDefault();
    let i = tJ.getOrCreateInstance(t),
      n = this.getAttribute("data-bs-slide-to");
    if (n) {
      i.to(n), i._maybeEnableCycle();
      return;
    }
    if ("next" === tc.getDataAttribute(this, "slide")) {
      i.next(), i._maybeEnableCycle();
      return;
    }
    i.prev(), i._maybeEnableCycle();
  }),
    tr.on(window, tR, () => {
      for (let e of tf.find('[data-bs-ride="carousel"]'))
        tJ.getOrCreateInstance(e);
    }),
    eG(tJ);
  let tZ = ".bs.collapse",
    t0 = `show${tZ}`,
    t1 = `shown${tZ}`,
    t2 = `hide${tZ}`,
    t3 = `hidden${tZ}`,
    t5 = `click${tZ}.data-api`,
    t6 = "show",
    t4 = "collapse",
    t8 = "collapsing",
    t9 = `:scope .${t4} .${t4}`,
    t7 = '[data-bs-toggle="collapse"]',
    ie = { parent: null, toggle: !0 },
    it = { parent: "(null|element)", toggle: "boolean" };
  class ii extends tu {
    constructor(e, t) {
      for (let i of (super(e, t),
      (this._isTransitioning = !1),
      (this._triggerArray = []),
      tf.find(t7))) {
        let e = tf.getSelectorFromElement(i),
          t = tf.find(e).filter((e) => e === this._element);
        null !== e && t.length && this._triggerArray.push(i);
      }
      this._initializeChildren(),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return ie;
    }
    static get DefaultType() {
      return it;
    }
    static get NAME() {
      return "collapse";
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let e = [];
      if (
        (this._config.parent &&
          (e = this._getFirstLevelChildren(
            ".collapse.show, .collapse.collapsing",
          )
            .filter((e) => e !== this._element)
            .map((e) => ii.getOrCreateInstance(e, { toggle: !1 }))),
        (e.length && e[0]._isTransitioning) ||
          tr.trigger(this._element, t0).defaultPrevented)
      )
        return;
      for (let t of e) t.hide();
      let t = this._getDimension();
      this._element.classList.remove(t4),
        this._element.classList.add(t8),
        (this._element.style[t] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0);
      let i = t[0].toUpperCase() + t.slice(1),
        n = `scroll${i}`;
      this._queueCallback(
        () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(t8),
            this._element.classList.add(t4, t6),
            (this._element.style[t] = ""),
            tr.trigger(this._element, t1);
        },
        this._element,
        !0,
      ),
        (this._element.style[t] = `${this._element[n]}px`);
    }
    hide() {
      if (
        this._isTransitioning ||
        !this._isShown() ||
        tr.trigger(this._element, t2).defaultPrevented
      )
        return;
      let e = this._getDimension();
      for (let t of ((this._element.style[e] =
        `${this._element.getBoundingClientRect()[e]}px`),
      eK(this._element),
      this._element.classList.add(t8),
      this._element.classList.remove(t4, t6),
      this._triggerArray)) {
        let e = tf.getElementFromSelector(t);
        e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1);
      }
      (this._isTransitioning = !0),
        (this._element.style[e] = ""),
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(t8),
              this._element.classList.add(t4),
              tr.trigger(this._element, t3);
          },
          this._element,
          !0,
        );
    }
    _isShown(e = this._element) {
      return e.classList.contains(t6);
    }
    _configAfterMerge(e) {
      return (e.toggle = !!e.toggle), (e.parent = ez(e.parent)), e;
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal")
        ? "width"
        : "height";
    }
    _initializeChildren() {
      if (this._config.parent)
        for (let e of this._getFirstLevelChildren(t7)) {
          let t = tf.getElementFromSelector(e);
          t && this._addAriaAndCollapsedClass([e], this._isShown(t));
        }
    }
    _getFirstLevelChildren(e) {
      let t = tf.find(t9, this._config.parent);
      return tf.find(e, this._config.parent).filter((e) => !t.includes(e));
    }
    _addAriaAndCollapsedClass(e, t) {
      if (e.length)
        for (let i of e)
          i.classList.toggle("collapsed", !t),
            i.setAttribute("aria-expanded", t);
    }
    static jQueryInterface(e) {
      let t = {};
      return (
        "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1),
        this.each(function () {
          let i = ii.getOrCreateInstance(this, t);
          if ("string" == typeof e) {
            if (void 0 === i[e]) throw TypeError(`No method named "${e}"`);
            i[e]();
          }
        })
      );
    }
  }
  tr.on(document, t5, t7, function (e) {
    for (let t of (("A" === e.target.tagName ||
      (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
      e.preventDefault(),
    tf.getMultipleElementsFromSelector(this)))
      ii.getOrCreateInstance(t, { toggle: !1 }).toggle();
  }),
    eG(ii);
  let is = "dropdown",
    ir = ".bs.dropdown",
    io = ".data-api",
    ia = "ArrowDown",
    il = `hide${ir}`,
    ic = `hidden${ir}`,
    ih = `show${ir}`,
    iu = `shown${ir}`,
    id = `click${ir}${io}`,
    ip = `keydown${ir}${io}`,
    im = `keyup${ir}${io}`,
    ig = "show",
    i_ = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
    ib = `${i_}.${ig}`,
    iv = ".dropdown-menu",
    iy = eU() ? "top-end" : "top-start",
    iw = eU() ? "top-start" : "top-end",
    iA = eU() ? "bottom-end" : "bottom-start",
    iE = eU() ? "bottom-start" : "bottom-end",
    iC = eU() ? "left-start" : "right-start",
    iT = eU() ? "right-start" : "left-start",
    iO = {
      autoClose: !0,
      boundary: "clippingParents",
      display: "dynamic",
      offset: [0, 2],
      popperConfig: null,
      reference: "toggle",
    },
    ix = {
      autoClose: "(boolean|string)",
      boundary: "(string|element)",
      display: "string",
      offset: "(array|string|function)",
      popperConfig: "(null|object|function)",
      reference: "(string|element|object)",
    };
  class ik extends tu {
    constructor(e, t) {
      super(e, t),
        (this._popper = null),
        (this._parent = this._element.parentNode),
        (this._menu =
          tf.next(this._element, iv)[0] ||
          tf.prev(this._element, iv)[0] ||
          tf.findOne(iv, this._parent)),
        (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return iO;
    }
    static get DefaultType() {
      return ix;
    }
    static get NAME() {
      return is;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (eq(this._element) || this._isShown()) return;
      let e = { relatedTarget: this._element };
      if (!tr.trigger(this._element, ih, e).defaultPrevented) {
        if (
          (this._createPopper(),
          "ontouchstart" in document.documentElement &&
            !this._parent.closest(".navbar-nav"))
        )
          for (let e of [].concat(...document.body.children))
            tr.on(e, "mouseover", eV);
        this._element.focus(),
          this._element.setAttribute("aria-expanded", !0),
          this._menu.classList.add(ig),
          this._element.classList.add(ig),
          tr.trigger(this._element, iu, e);
      }
    }
    hide() {
      if (eq(this._element) || !this._isShown()) return;
      let e = { relatedTarget: this._element };
      this._completeHide(e);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _completeHide(e) {
      if (!tr.trigger(this._element, il, e).defaultPrevented) {
        if ("ontouchstart" in document.documentElement)
          for (let e of [].concat(...document.body.children))
            tr.off(e, "mouseover", eV);
        this._popper && this._popper.destroy(),
          this._menu.classList.remove(ig),
          this._element.classList.remove(ig),
          this._element.setAttribute("aria-expanded", "false"),
          tc.removeDataAttribute(this._menu, "popper"),
          tr.trigger(this._element, ic, e);
      }
    }
    _getConfig(e) {
      if (
        "object" == typeof (e = super._getConfig(e)).reference &&
        !eW(e.reference) &&
        "function" != typeof e.reference.getBoundingClientRect
      )
        throw TypeError(
          `${is.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`,
        );
      return e;
    }
    _createPopper() {
      if (void 0 === i)
        throw TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)",
        );
      let e = this._element;
      "parent" === this._config.reference
        ? (e = this._parent)
        : eW(this._config.reference)
          ? (e = ez(this._config.reference))
          : "object" == typeof this._config.reference &&
            (e = this._config.reference);
      let t = this._getPopperConfig();
      this._popper = i.createPopper(e, this._menu, t);
    }
    _isShown() {
      return this._menu.classList.contains(ig);
    }
    _getPlacement() {
      let e = this._parent;
      if (e.classList.contains("dropend")) return iC;
      if (e.classList.contains("dropstart")) return iT;
      if (e.classList.contains("dropup-center")) return "top";
      if (e.classList.contains("dropdown-center")) return "bottom";
      let t =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return e.classList.contains("dropup") ? (t ? iw : iy) : t ? iE : iA;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      let { offset: e } = this._config;
      return "string" == typeof e
        ? e.split(",").map((e) => Number.parseInt(e, 10))
        : "function" == typeof e
          ? (t) => e(t, this._element)
          : e;
    }
    _getPopperConfig() {
      let e = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        (this._inNavbar || "static" === this._config.display) &&
          (tc.setDataAttribute(this._menu, "popper", "static"),
          (e.modifiers = [{ name: "applyStyles", enabled: !1 }])),
        { ...e, ...eJ(this._config.popperConfig, [e]) }
      );
    }
    _selectMenuItem({ key: e, target: t }) {
      let i = tf
        .find(
          ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          this._menu,
        )
        .filter((e) => eR(e));
      i.length && e0(i, t, e === ia, !i.includes(t)).focus();
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = ik.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
    static clearMenus(e) {
      if (2 !== e.button && ("keyup" !== e.type || "Tab" === e.key))
        for (let t of tf.find(ib)) {
          let i = ik.getInstance(t);
          if (!i || !1 === i._config.autoClose) continue;
          let n = e.composedPath(),
            s = n.includes(i._menu);
          if (
            n.includes(i._element) ||
            ("inside" === i._config.autoClose && !s) ||
            ("outside" === i._config.autoClose && s) ||
            (i._menu.contains(e.target) &&
              (("keyup" === e.type && "Tab" === e.key) ||
                /input|select|option|textarea|form/i.test(e.target.tagName)))
          )
            continue;
          let r = { relatedTarget: i._element };
          "click" === e.type && (r.clickEvent = e), i._completeHide(r);
        }
    }
    static dataApiKeydownHandler(e) {
      let t = /input|textarea/i.test(e.target.tagName),
        i = "Escape" === e.key,
        n = ["ArrowUp", ia].includes(e.key);
      if ((!n && !i) || (t && !i)) return;
      e.preventDefault();
      let s = this.matches(i_)
          ? this
          : tf.prev(this, i_)[0] ||
            tf.next(this, i_)[0] ||
            tf.findOne(i_, e.delegateTarget.parentNode),
        r = ik.getOrCreateInstance(s);
      if (n) {
        e.stopPropagation(), r.show(), r._selectMenuItem(e);
        return;
      }
      r._isShown() && (e.stopPropagation(), r.hide(), s.focus());
    }
  }
  tr.on(document, ip, i_, ik.dataApiKeydownHandler),
    tr.on(document, ip, iv, ik.dataApiKeydownHandler),
    tr.on(document, id, ik.clearMenus),
    tr.on(document, im, ik.clearMenus),
    tr.on(document, id, i_, function (e) {
      e.preventDefault(), ik.getOrCreateInstance(this).toggle();
    }),
    eG(ik);
  let iL = "backdrop",
    iS = "show",
    iD = `mousedown.bs.${iL}`,
    i$ = {
      className: "modal-backdrop",
      clickCallback: null,
      isAnimated: !1,
      isVisible: !0,
      rootElement: "body",
    },
    iI = {
      className: "string",
      clickCallback: "(function|null)",
      isAnimated: "boolean",
      isVisible: "boolean",
      rootElement: "(element|string)",
    };
  class iN extends th {
    constructor(e) {
      super(),
        (this._config = this._getConfig(e)),
        (this._isAppended = !1),
        (this._element = null);
    }
    static get Default() {
      return i$;
    }
    static get DefaultType() {
      return iI;
    }
    static get NAME() {
      return iL;
    }
    show(e) {
      if (!this._config.isVisible) {
        eJ(e);
        return;
      }
      this._append();
      let t = this._getElement();
      this._config.isAnimated && eK(t),
        t.classList.add(iS),
        this._emulateAnimation(() => {
          eJ(e);
        });
    }
    hide(e) {
      if (!this._config.isVisible) {
        eJ(e);
        return;
      }
      this._getElement().classList.remove(iS),
        this._emulateAnimation(() => {
          this.dispose(), eJ(e);
        });
    }
    dispose() {
      this._isAppended &&
        (tr.off(this._element, iD),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _getElement() {
      if (!this._element) {
        let e = document.createElement("div");
        (e.className = this._config.className),
          this._config.isAnimated && e.classList.add("fade"),
          (this._element = e);
      }
      return this._element;
    }
    _configAfterMerge(e) {
      return (e.rootElement = ez(e.rootElement)), e;
    }
    _append() {
      if (this._isAppended) return;
      let e = this._getElement();
      this._config.rootElement.append(e),
        tr.on(e, iD, () => {
          eJ(this._config.clickCallback);
        }),
        (this._isAppended = !0);
    }
    _emulateAnimation(e) {
      eZ(e, this._getElement(), this._config.isAnimated);
    }
  }
  let iP = ".bs.focustrap",
    ij = `focusin${iP}`,
    iM = `keydown.tab${iP}`,
    iF = "backward",
    iH = { autofocus: !0, trapElement: null },
    iW = { autofocus: "boolean", trapElement: "element" };
  class iz extends th {
    constructor(e) {
      super(),
        (this._config = this._getConfig(e)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    static get Default() {
      return iH;
    }
    static get DefaultType() {
      return iW;
    }
    static get NAME() {
      return "focustrap";
    }
    activate() {
      this._isActive ||
        (this._config.autofocus && this._config.trapElement.focus(),
        tr.off(document, iP),
        tr.on(document, ij, (e) => this._handleFocusin(e)),
        tr.on(document, iM, (e) => this._handleKeydown(e)),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), tr.off(document, iP));
    }
    _handleFocusin(e) {
      let { trapElement: t } = this._config;
      if (e.target === document || e.target === t || t.contains(e.target))
        return;
      let i = tf.focusableChildren(t);
      0 === i.length
        ? t.focus()
        : this._lastTabNavDirection === iF
          ? i[i.length - 1].focus()
          : i[0].focus();
    }
    _handleKeydown(e) {
      "Tab" === e.key &&
        (this._lastTabNavDirection = e.shiftKey ? iF : "forward");
    }
  }
  let iR = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    iq = ".sticky-top",
    iB = "padding-right",
    iV = "margin-right";
  class iK {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      let e = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - e);
    }
    hide() {
      let e = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, iB, (t) => t + e),
        this._setElementAttributes(iR, iB, (t) => t + e),
        this._setElementAttributes(iq, iV, (t) => t - e);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, iB),
        this._resetElementAttributes(iR, iB),
        this._resetElementAttributes(iq, iV);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(e, t, i) {
      let n = this.getWidth();
      this._applyManipulationCallback(e, (e) => {
        if (e !== this._element && window.innerWidth > e.clientWidth + n)
          return;
        this._saveInitialAttribute(e, t);
        let s = window.getComputedStyle(e).getPropertyValue(t);
        e.style.setProperty(t, `${i(Number.parseFloat(s))}px`);
      });
    }
    _saveInitialAttribute(e, t) {
      let i = e.style.getPropertyValue(t);
      i && tc.setDataAttribute(e, t, i);
    }
    _resetElementAttributes(e, t) {
      this._applyManipulationCallback(e, (e) => {
        let i = tc.getDataAttribute(e, t);
        if (null === i) {
          e.style.removeProperty(t);
          return;
        }
        tc.removeDataAttribute(e, t), e.style.setProperty(t, i);
      });
    }
    _applyManipulationCallback(e, t) {
      if (eW(e)) {
        t(e);
        return;
      }
      for (let i of tf.find(e, this._element)) t(i);
    }
  }
  let iQ = ".bs.modal",
    iX = `hide${iQ}`,
    iY = `hidePrevented${iQ}`,
    iU = `hidden${iQ}`,
    iG = `show${iQ}`,
    iJ = `shown${iQ}`,
    iZ = `resize${iQ}`,
    i0 = `click.dismiss${iQ}`,
    i1 = `mousedown.dismiss${iQ}`,
    i2 = `keydown.dismiss${iQ}`,
    i3 = `click${iQ}.data-api`,
    i5 = "modal-open",
    i6 = "show",
    i4 = "modal-static",
    i8 = { backdrop: !0, focus: !0, keyboard: !0 },
    i9 = {
      backdrop: "(boolean|string)",
      focus: "boolean",
      keyboard: "boolean",
    };
  class i7 extends tu {
    constructor(e, t) {
      super(e, t),
        (this._dialog = tf.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new iK()),
        this._addEventListeners();
    }
    static get Default() {
      return i8;
    }
    static get DefaultType() {
      return i9;
    }
    static get NAME() {
      return "modal";
    }
    toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
    show(e) {
      this._isShown ||
        this._isTransitioning ||
        tr.trigger(this._element, iG, { relatedTarget: e }).defaultPrevented ||
        ((this._isShown = !0),
        (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add(i5),
        this._adjustDialog(),
        this._backdrop.show(() => this._showElement(e)));
    }
    hide() {
      this._isShown &&
        !this._isTransitioning &&
        (tr.trigger(this._element, iX).defaultPrevented ||
          ((this._isShown = !1),
          (this._isTransitioning = !0),
          this._focustrap.deactivate(),
          this._element.classList.remove(i6),
          this._queueCallback(
            () => this._hideModal(),
            this._element,
            this._isAnimated(),
          )));
    }
    dispose() {
      tr.off(window, iQ),
        tr.off(this._dialog, iQ),
        this._backdrop.dispose(),
        this._focustrap.deactivate(),
        super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new iN({
        isVisible: !!this._config.backdrop,
        isAnimated: this._isAnimated(),
      });
    }
    _initializeFocusTrap() {
      return new iz({ trapElement: this._element });
    }
    _showElement(e) {
      document.body.contains(this._element) ||
        document.body.append(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0);
      let t = tf.findOne(".modal-body", this._dialog);
      t && (t.scrollTop = 0),
        eK(this._element),
        this._element.classList.add(i6),
        this._queueCallback(
          () => {
            this._config.focus && this._focustrap.activate(),
              (this._isTransitioning = !1),
              tr.trigger(this._element, iJ, { relatedTarget: e });
          },
          this._dialog,
          this._isAnimated(),
        );
    }
    _addEventListeners() {
      tr.on(this._element, i2, (e) => {
        if ("Escape" === e.key) {
          if (this._config.keyboard) {
            this.hide();
            return;
          }
          this._triggerBackdropTransition();
        }
      }),
        tr.on(window, iZ, () => {
          this._isShown && !this._isTransitioning && this._adjustDialog();
        }),
        tr.on(this._element, i1, (e) => {
          tr.one(this._element, i0, (t) => {
            if (this._element === e.target && this._element === t.target) {
              if ("static" === this._config.backdrop) {
                this._triggerBackdropTransition();
                return;
              }
              this._config.backdrop && this.hide();
            }
          });
        });
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(i5),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            tr.trigger(this._element, iU);
        });
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (tr.trigger(this._element, iY).defaultPrevented) return;
      let e =
          this._element.scrollHeight > document.documentElement.clientHeight,
        t = this._element.style.overflowY;
      "hidden" === t ||
        this._element.classList.contains(i4) ||
        (e || (this._element.style.overflowY = "hidden"),
        this._element.classList.add(i4),
        this._queueCallback(() => {
          this._element.classList.remove(i4),
            this._queueCallback(() => {
              this._element.style.overflowY = t;
            }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      let e =
          this._element.scrollHeight > document.documentElement.clientHeight,
        t = this._scrollBar.getWidth(),
        i = t > 0;
      if (i && !e) {
        let e = eU() ? "paddingLeft" : "paddingRight";
        this._element.style[e] = `${t}px`;
      }
      if (!i && e) {
        let e = eU() ? "paddingRight" : "paddingLeft";
        this._element.style[e] = `${t}px`;
      }
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(e, t) {
      return this.each(function () {
        let i = i7.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === i[e]) throw TypeError(`No method named "${e}"`);
          i[e](t);
        }
      });
    }
  }
  tr.on(document, i3, '[data-bs-toggle="modal"]', function (e) {
    let t = tf.getElementFromSelector(this);
    ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
      tr.one(t, iG, (e) => {
        e.defaultPrevented ||
          tr.one(t, iU, () => {
            eR(this) && this.focus();
          });
      });
    let i = tf.findOne(".modal.show");
    i && i7.getInstance(i).hide(), i7.getOrCreateInstance(t).toggle(this);
  }),
    tp(i7),
    eG(i7);
  let ne = ".bs.offcanvas",
    nt = ".data-api",
    ni = `load${ne}${nt}`,
    nn = "show",
    ns = "showing",
    nr = "hiding",
    no = ".offcanvas.show",
    na = `show${ne}`,
    nl = `shown${ne}`,
    nc = `hide${ne}`,
    nh = `hidePrevented${ne}`,
    nu = `hidden${ne}`,
    nd = `resize${ne}`,
    nf = `click${ne}${nt}`,
    np = `keydown.dismiss${ne}`,
    nm = { backdrop: !0, keyboard: !0, scroll: !1 },
    ng = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      scroll: "boolean",
    };
  class n_ extends tu {
    constructor(e, t) {
      super(e, t),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get Default() {
      return nm;
    }
    static get DefaultType() {
      return ng;
    }
    static get NAME() {
      return "offcanvas";
    }
    toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
    show(e) {
      this._isShown ||
        tr.trigger(this._element, na, { relatedTarget: e }).defaultPrevented ||
        ((this._isShown = !0),
        this._backdrop.show(),
        this._config.scroll || new iK().hide(),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add(ns),
        this._queueCallback(
          () => {
            (!this._config.scroll || this._config.backdrop) &&
              this._focustrap.activate(),
              this._element.classList.add(nn),
              this._element.classList.remove(ns),
              tr.trigger(this._element, nl, { relatedTarget: e });
          },
          this._element,
          !0,
        ));
    }
    hide() {
      this._isShown &&
        !tr.trigger(this._element, nc).defaultPrevented &&
        (this._focustrap.deactivate(),
        this._element.blur(),
        (this._isShown = !1),
        this._element.classList.add(nr),
        this._backdrop.hide(),
        this._queueCallback(
          () => {
            this._element.classList.remove(nn, nr),
              this._element.removeAttribute("aria-modal"),
              this._element.removeAttribute("role"),
              this._config.scroll || new iK().reset(),
              tr.trigger(this._element, nu);
          },
          this._element,
          !0,
        ));
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _initializeBackDrop() {
      let e = !!this._config.backdrop;
      return new iN({
        className: "offcanvas-backdrop",
        isVisible: e,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: e
          ? () => {
              if ("static" === this._config.backdrop) {
                tr.trigger(this._element, nh);
                return;
              }
              this.hide();
            }
          : null,
      });
    }
    _initializeFocusTrap() {
      return new iz({ trapElement: this._element });
    }
    _addEventListeners() {
      tr.on(this._element, np, (e) => {
        if ("Escape" === e.key) {
          if (this._config.keyboard) {
            this.hide();
            return;
          }
          tr.trigger(this._element, nh);
        }
      });
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = n_.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
            throw TypeError(`No method named "${e}"`);
          t[e](this);
        }
      });
    }
  }
  tr.on(document, nf, '[data-bs-toggle="offcanvas"]', function (e) {
    let t = tf.getElementFromSelector(this);
    if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), eq(this)))
      return;
    tr.one(t, nu, () => {
      eR(this) && this.focus();
    });
    let i = tf.findOne(no);
    i && i !== t && n_.getInstance(i).hide(),
      n_.getOrCreateInstance(t).toggle(this);
  }),
    tr.on(window, ni, () => {
      for (let e of tf.find(no)) n_.getOrCreateInstance(e).show();
    }),
    tr.on(window, nd, () => {
      for (let e of tf.find("[aria-modal][class*=show][class*=offcanvas-]"))
        "fixed" !== getComputedStyle(e).position &&
          n_.getOrCreateInstance(e).hide();
    }),
    tp(n_),
    eG(n_);
  let nb = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      dd: [],
      div: [],
      dl: [],
      dt: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    nv = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    ny = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
    nw = (e, t) => {
      let i = e.nodeName.toLowerCase();
      return t.includes(i)
        ? !nv.has(i) || !!ny.test(e.nodeValue)
        : t.filter((e) => e instanceof RegExp).some((e) => e.test(i));
    },
    nA = {
      allowList: nb,
      content: {},
      extraClass: "",
      html: !1,
      sanitize: !0,
      sanitizeFn: null,
      template: "<div></div>",
    },
    nE = {
      allowList: "object",
      content: "object",
      extraClass: "(string|function)",
      html: "boolean",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      template: "string",
    },
    nC = {
      entry: "(string|element|function|null)",
      selector: "(string|element)",
    };
  class nT extends th {
    constructor(e) {
      super(), (this._config = this._getConfig(e));
    }
    static get Default() {
      return nA;
    }
    static get DefaultType() {
      return nE;
    }
    static get NAME() {
      return "TemplateFactory";
    }
    getContent() {
      return Object.values(this._config.content)
        .map((e) => this._resolvePossibleFunction(e))
        .filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(e) {
      return (
        this._checkContent(e),
        (this._config.content = { ...this._config.content, ...e }),
        this
      );
    }
    toHtml() {
      let e = document.createElement("div");
      for (let [t, i] of ((e.innerHTML = this._maybeSanitize(
        this._config.template,
      )),
      Object.entries(this._config.content)))
        this._setContent(e, i, t);
      let t = e.children[0],
        i = this._resolvePossibleFunction(this._config.extraClass);
      return i && t.classList.add(...i.split(" ")), t;
    }
    _typeCheckConfig(e) {
      super._typeCheckConfig(e), this._checkContent(e.content);
    }
    _checkContent(e) {
      for (let [t, i] of Object.entries(e))
        super._typeCheckConfig({ selector: t, entry: i }, nC);
    }
    _setContent(e, t, i) {
      let n = tf.findOne(i, e);
      if (n) {
        if (!(t = this._resolvePossibleFunction(t))) {
          n.remove();
          return;
        }
        if (eW(t)) {
          this._putElementInTemplate(ez(t), n);
          return;
        }
        if (this._config.html) {
          n.innerHTML = this._maybeSanitize(t);
          return;
        }
        n.textContent = t;
      }
    }
    _maybeSanitize(e) {
      return this._config.sanitize
        ? (function (e, t, i) {
            if (!e.length) return e;
            if (i && "function" == typeof i) return i(e);
            let n = new window.DOMParser().parseFromString(e, "text/html");
            for (let e of [].concat(...n.body.querySelectorAll("*"))) {
              let i = e.nodeName.toLowerCase();
              if (!Object.keys(t).includes(i)) {
                e.remove();
                continue;
              }
              let n = [].concat(...e.attributes),
                s = [].concat(t["*"] || [], t[i] || []);
              for (let t of n) nw(t, s) || e.removeAttribute(t.nodeName);
            }
            return n.body.innerHTML;
          })(e, this._config.allowList, this._config.sanitizeFn)
        : e;
    }
    _resolvePossibleFunction(e) {
      return eJ(e, [this]);
    }
    _putElementInTemplate(e, t) {
      if (this._config.html) {
        (t.innerHTML = ""), t.append(e);
        return;
      }
      t.textContent = e.textContent;
    }
  }
  let nO = new Set(["sanitize", "allowList", "sanitizeFn"]),
    nx = "fade",
    nk = "show",
    nL = ".modal",
    nS = "hide.bs.modal",
    nD = "hover",
    n$ = "focus",
    nI = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: eU() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: eU() ? "right" : "left",
    },
    nN = {
      allowList: nb,
      animation: !0,
      boundary: "clippingParents",
      container: !1,
      customClass: "",
      delay: 0,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      html: !1,
      offset: [0, 6],
      placement: "top",
      popperConfig: null,
      sanitize: !0,
      sanitizeFn: null,
      selector: !1,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      title: "",
      trigger: "hover focus",
    },
    nP = {
      allowList: "object",
      animation: "boolean",
      boundary: "(string|element)",
      container: "(string|element|boolean)",
      customClass: "(string|function)",
      delay: "(number|object)",
      fallbackPlacements: "array",
      html: "boolean",
      offset: "(array|string|function)",
      placement: "(string|function)",
      popperConfig: "(null|object|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      selector: "(string|boolean)",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
    };
  class nj extends tu {
    constructor(e, t) {
      if (void 0 === i)
        throw TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)",
        );
      super(e, t),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._isHovered = null),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._templateFactory = null),
        (this._newContent = null),
        (this.tip = null),
        this._setListeners(),
        this._config.selector || this._fixTitle();
    }
    static get Default() {
      return nN;
    }
    static get DefaultType() {
      return nP;
    }
    static get NAME() {
      return "tooltip";
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      if (this._isEnabled) {
        if (
          ((this._activeTrigger.click = !this._activeTrigger.click),
          this._isShown())
        ) {
          this._leave();
          return;
        }
        this._enter();
      }
    }
    dispose() {
      clearTimeout(this._timeout),
        tr.off(this._element.closest(nL), nS, this._hideModalHandler),
        this._element.getAttribute("data-bs-original-title") &&
          this._element.setAttribute(
            "title",
            this._element.getAttribute("data-bs-original-title"),
          ),
        this._disposePopper(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw Error("Please use show on visible elements");
      if (!(this._isWithContent() && this._isEnabled)) return;
      let e = tr.trigger(this._element, this.constructor.eventName("show")),
        t = (
          eB(this._element) || this._element.ownerDocument.documentElement
        ).contains(this._element);
      if (e.defaultPrevented || !t) return;
      this._disposePopper();
      let i = this._getTipElement();
      this._element.setAttribute("aria-describedby", i.getAttribute("id"));
      let { container: n } = this._config;
      if (
        (this._element.ownerDocument.documentElement.contains(this.tip) ||
          (n.append(i),
          tr.trigger(this._element, this.constructor.eventName("inserted"))),
        (this._popper = this._createPopper(i)),
        i.classList.add(nk),
        "ontouchstart" in document.documentElement)
      )
        for (let e of [].concat(...document.body.children))
          tr.on(e, "mouseover", eV);
      this._queueCallback(
        () => {
          tr.trigger(this._element, this.constructor.eventName("shown")),
            !1 === this._isHovered && this._leave(),
            (this._isHovered = !1);
        },
        this.tip,
        this._isAnimated(),
      );
    }
    hide() {
      if (
        this._isShown() &&
        !tr.trigger(this._element, this.constructor.eventName("hide"))
          .defaultPrevented
      ) {
        if (
          (this._getTipElement().classList.remove(nk),
          "ontouchstart" in document.documentElement)
        )
          for (let e of [].concat(...document.body.children))
            tr.off(e, "mouseover", eV);
        (this._activeTrigger.click = !1),
          (this._activeTrigger[n$] = !1),
          (this._activeTrigger[nD] = !1),
          (this._isHovered = null),
          this._queueCallback(
            () => {
              this._isWithActiveTrigger() ||
                (this._isHovered || this._disposePopper(),
                this._element.removeAttribute("aria-describedby"),
                tr.trigger(
                  this._element,
                  this.constructor.eventName("hidden"),
                ));
            },
            this.tip,
            this._isAnimated(),
          );
      }
    }
    update() {
      this._popper && this._popper.update();
    }
    _isWithContent() {
      return !!this._getTitle();
    }
    _getTipElement() {
      return (
        this.tip ||
          (this.tip = this._createTipElement(
            this._newContent || this._getContentForTemplate(),
          )),
        this.tip
      );
    }
    _createTipElement(e) {
      let t = this._getTemplateFactory(e).toHtml();
      if (!t) return null;
      t.classList.remove(nx, nk),
        t.classList.add(`bs-${this.constructor.NAME}-auto`);
      let i = eM(this.constructor.NAME).toString();
      return (
        t.setAttribute("id", i), this._isAnimated() && t.classList.add(nx), t
      );
    }
    setContent(e) {
      (this._newContent = e),
        this._isShown() && (this._disposePopper(), this.show());
    }
    _getTemplateFactory(e) {
      return (
        this._templateFactory
          ? this._templateFactory.changeContent(e)
          : (this._templateFactory = new nT({
              ...this._config,
              content: e,
              extraClass: this._resolvePossibleFunction(
                this._config.customClass,
              ),
            })),
        this._templateFactory
      );
    }
    _getContentForTemplate() {
      return { ".tooltip-inner": this._getTitle() };
    }
    _getTitle() {
      return (
        this._resolvePossibleFunction(this._config.title) ||
        this._element.getAttribute("data-bs-original-title")
      );
    }
    _initializeOnDelegatedTarget(e) {
      return this.constructor.getOrCreateInstance(
        e.delegateTarget,
        this._getDelegateConfig(),
      );
    }
    _isAnimated() {
      return (
        this._config.animation || (this.tip && this.tip.classList.contains(nx))
      );
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(nk);
    }
    _createPopper(e) {
      let t =
        nI[eJ(this._config.placement, [this, e, this._element]).toUpperCase()];
      return i.createPopper(this._element, e, this._getPopperConfig(t));
    }
    _getOffset() {
      let { offset: e } = this._config;
      return "string" == typeof e
        ? e.split(",").map((e) => Number.parseInt(e, 10))
        : "function" == typeof e
          ? (t) => e(t, this._element)
          : e;
    }
    _resolvePossibleFunction(e) {
      return eJ(e, [this._element]);
    }
    _getPopperConfig(e) {
      let t = {
        placement: e,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "preSetPlacement",
            enabled: !0,
            phase: "beforeMain",
            fn: (e) => {
              this._getTipElement().setAttribute(
                "data-popper-placement",
                e.state.placement,
              );
            },
          },
        ],
      };
      return { ...t, ...eJ(this._config.popperConfig, [t]) };
    }
    _setListeners() {
      for (let e of this._config.trigger.split(" "))
        if ("click" === e)
          tr.on(
            this._element,
            this.constructor.eventName("click"),
            this._config.selector,
            (e) => {
              this._initializeOnDelegatedTarget(e).toggle();
            },
          );
        else if ("manual" !== e) {
          let t =
              e === nD
                ? this.constructor.eventName("mouseenter")
                : this.constructor.eventName("focusin"),
            i =
              e === nD
                ? this.constructor.eventName("mouseleave")
                : this.constructor.eventName("focusout");
          tr.on(this._element, t, this._config.selector, (e) => {
            let t = this._initializeOnDelegatedTarget(e);
            (t._activeTrigger["focusin" === e.type ? n$ : nD] = !0), t._enter();
          }),
            tr.on(this._element, i, this._config.selector, (e) => {
              let t = this._initializeOnDelegatedTarget(e);
              (t._activeTrigger["focusout" === e.type ? n$ : nD] =
                t._element.contains(e.relatedTarget)),
                t._leave();
            });
        }
      (this._hideModalHandler = () => {
        this._element && this.hide();
      }),
        tr.on(this._element.closest(nL), nS, this._hideModalHandler);
    }
    _fixTitle() {
      let e = this._element.getAttribute("title");
      e &&
        (this._element.getAttribute("aria-label") ||
          this._element.textContent.trim() ||
          this._element.setAttribute("aria-label", e),
        this._element.setAttribute("data-bs-original-title", e),
        this._element.removeAttribute("title"));
    }
    _enter() {
      if (this._isShown() || this._isHovered) {
        this._isHovered = !0;
        return;
      }
      (this._isHovered = !0),
        this._setTimeout(() => {
          this._isHovered && this.show();
        }, this._config.delay.show);
    }
    _leave() {
      this._isWithActiveTrigger() ||
        ((this._isHovered = !1),
        this._setTimeout(() => {
          this._isHovered || this.hide();
        }, this._config.delay.hide));
    }
    _setTimeout(e, t) {
      clearTimeout(this._timeout), (this._timeout = setTimeout(e, t));
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(!0);
    }
    _getConfig(e) {
      let t = tc.getDataAttributes(this._element);
      for (let e of Object.keys(t)) nO.has(e) && delete t[e];
      return (
        (e = { ...t, ...("object" == typeof e && e ? e : {}) }),
        (e = this._mergeConfigObj(e)),
        (e = this._configAfterMerge(e)),
        this._typeCheckConfig(e),
        e
      );
    }
    _configAfterMerge(e) {
      return (
        (e.container = !1 === e.container ? document.body : ez(e.container)),
        "number" == typeof e.delay &&
          (e.delay = { show: e.delay, hide: e.delay }),
        "number" == typeof e.title && (e.title = e.title.toString()),
        "number" == typeof e.content && (e.content = e.content.toString()),
        e
      );
    }
    _getDelegateConfig() {
      let e = {};
      for (let [t, i] of Object.entries(this._config))
        this.constructor.Default[t] !== i && (e[t] = i);
      return (e.selector = !1), (e.trigger = "manual"), e;
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null)),
        this.tip && (this.tip.remove(), (this.tip = null));
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = nj.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  }
  eG(nj);
  let nM = {
      ...nj.Default,
      content: "",
      offset: [0, 8],
      placement: "right",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click",
    },
    nF = { ...nj.DefaultType, content: "(null|string|element|function)" };
  class nH extends nj {
    static get Default() {
      return nM;
    }
    static get DefaultType() {
      return nF;
    }
    static get NAME() {
      return "popover";
    }
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
      return {
        ".popover-header": this._getTitle(),
        ".popover-body": this._getContent(),
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = nH.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  }
  eG(nH);
  let nW = ".bs.scrollspy",
    nz = `activate${nW}`,
    nR = `click${nW}`,
    nq = `load${nW}.data-api`,
    nB = "active",
    nV = "[href]",
    nK = ".nav-link",
    nQ = `${nK}, .nav-item > ${nK}, .list-group-item`,
    nX = {
      offset: null,
      rootMargin: "0px 0px -25%",
      smoothScroll: !1,
      target: null,
      threshold: [0.1, 0.5, 1],
    },
    nY = {
      offset: "(number|null)",
      rootMargin: "string",
      smoothScroll: "boolean",
      target: "element",
      threshold: "array",
    };
  class nU extends tu {
    constructor(e, t) {
      super(e, t),
        (this._targetLinks = new Map()),
        (this._observableSections = new Map()),
        (this._rootElement =
          "visible" === getComputedStyle(this._element).overflowY
            ? null
            : this._element),
        (this._activeTarget = null),
        (this._observer = null),
        (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
        this.refresh();
    }
    static get Default() {
      return nX;
    }
    static get DefaultType() {
      return nY;
    }
    static get NAME() {
      return "scrollspy";
    }
    refresh() {
      for (let e of (this._initializeTargetsAndObservables(),
      this._maybeEnableSmoothScroll(),
      this._observer
        ? this._observer.disconnect()
        : (this._observer = this._getNewObserver()),
      this._observableSections.values()))
        this._observer.observe(e);
    }
    dispose() {
      this._observer.disconnect(), super.dispose();
    }
    _configAfterMerge(e) {
      return (
        (e.target = ez(e.target) || document.body),
        (e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin),
        "string" == typeof e.threshold &&
          (e.threshold = e.threshold
            .split(",")
            .map((e) => Number.parseFloat(e))),
        e
      );
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll &&
        (tr.off(this._config.target, nR),
        tr.on(this._config.target, nR, nV, (e) => {
          let t = this._observableSections.get(e.target.hash);
          if (t) {
            e.preventDefault();
            let i = this._rootElement || window,
              n = t.offsetTop - this._element.offsetTop;
            if (i.scrollTo) {
              i.scrollTo({ top: n, behavior: "smooth" });
              return;
            }
            i.scrollTop = n;
          }
        }));
    }
    _getNewObserver() {
      return new IntersectionObserver((e) => this._observerCallback(e), {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin,
      });
    }
    _observerCallback(e) {
      let t = (e) => this._targetLinks.get(`#${e.target.id}`),
        i = (e) => {
          (this._previousScrollData.visibleEntryTop = e.target.offsetTop),
            this._process(t(e));
        },
        n = (this._rootElement || document.documentElement).scrollTop,
        s = n >= this._previousScrollData.parentScrollTop;
      for (let r of ((this._previousScrollData.parentScrollTop = n), e)) {
        if (!r.isIntersecting) {
          (this._activeTarget = null), this._clearActiveClass(t(r));
          continue;
        }
        let e = r.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (s && e) {
          if ((i(r), !n)) return;
          continue;
        }
        s || e || i(r);
      }
    }
    _initializeTargetsAndObservables() {
      for (let e of ((this._targetLinks = new Map()),
      (this._observableSections = new Map()),
      tf.find(nV, this._config.target))) {
        if (!e.hash || eq(e)) continue;
        let t = tf.findOne(decodeURI(e.hash), this._element);
        eR(t) &&
          (this._targetLinks.set(decodeURI(e.hash), e),
          this._observableSections.set(e.hash, t));
      }
    }
    _process(e) {
      this._activeTarget !== e &&
        (this._clearActiveClass(this._config.target),
        (this._activeTarget = e),
        e.classList.add(nB),
        this._activateParents(e),
        tr.trigger(this._element, nz, { relatedTarget: e }));
    }
    _activateParents(e) {
      if (e.classList.contains("dropdown-item")) {
        tf.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(
          nB,
        );
        return;
      }
      for (let t of tf.parents(e, ".nav, .list-group"))
        for (let e of tf.prev(t, nQ)) e.classList.add(nB);
    }
    _clearActiveClass(e) {
      for (let t of (e.classList.remove(nB), tf.find(`${nV}.${nB}`, e)))
        t.classList.remove(nB);
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = nU.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
            throw TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  }
  tr.on(window, nq, () => {
    for (let e of tf.find('[data-bs-spy="scroll"]')) nU.getOrCreateInstance(e);
  }),
    eG(nU);
  let nG = ".bs.tab",
    nJ = `hide${nG}`,
    nZ = `hidden${nG}`,
    n0 = `show${nG}`,
    n1 = `shown${nG}`,
    n2 = `click${nG}`,
    n3 = `keydown${nG}`,
    n5 = `load${nG}`,
    n6 = "ArrowRight",
    n4 = "ArrowDown",
    n8 = "Home",
    n9 = "active",
    n7 = "fade",
    se = "show",
    st = ".dropdown-toggle",
    si = `:not(${st})`,
    sn = `.nav-link${si}, .list-group-item${si}, [role="tab"]${si}`,
    ss =
      '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    sr = `${sn}, ${ss}`,
    so = `.${n9}[data-bs-toggle="tab"], .${n9}[data-bs-toggle="pill"], .${n9}[data-bs-toggle="list"]`;
  class sa extends tu {
    constructor(e) {
      if (
        (super(e),
        (this._parent = this._element.closest(
          '.list-group, .nav, [role="tablist"]',
        )),
        !this._parent)
      )
        return;
      this._setInitialAttributes(this._parent, this._getChildren()),
        tr.on(this._element, n3, (e) => this._keydown(e));
    }
    static get NAME() {
      return "tab";
    }
    show() {
      let e = this._element;
      if (this._elemIsActive(e)) return;
      let t = this._getActiveElem(),
        i = t ? tr.trigger(t, nJ, { relatedTarget: e }) : null;
      tr.trigger(e, n0, { relatedTarget: t }).defaultPrevented ||
        (i && i.defaultPrevented) ||
        (this._deactivate(t, e), this._activate(e, t));
    }
    _activate(e, t) {
      e &&
        (e.classList.add(n9),
        this._activate(tf.getElementFromSelector(e)),
        this._queueCallback(
          () => {
            if ("tab" !== e.getAttribute("role")) {
              e.classList.add(se);
              return;
            }
            e.removeAttribute("tabindex"),
              e.setAttribute("aria-selected", !0),
              this._toggleDropDown(e, !0),
              tr.trigger(e, n1, { relatedTarget: t });
          },
          e,
          e.classList.contains(n7),
        ));
    }
    _deactivate(e, t) {
      e &&
        (e.classList.remove(n9),
        e.blur(),
        this._deactivate(tf.getElementFromSelector(e)),
        this._queueCallback(
          () => {
            if ("tab" !== e.getAttribute("role")) {
              e.classList.remove(se);
              return;
            }
            e.setAttribute("aria-selected", !1),
              e.setAttribute("tabindex", "-1"),
              this._toggleDropDown(e, !1),
              tr.trigger(e, nZ, { relatedTarget: t });
          },
          e,
          e.classList.contains(n7),
        ));
    }
    _keydown(e) {
      let t;
      if (!["ArrowLeft", n6, "ArrowUp", n4, n8, "End"].includes(e.key)) return;
      e.stopPropagation(), e.preventDefault();
      let i = this._getChildren().filter((e) => !eq(e));
      if ([n8, "End"].includes(e.key)) t = i[e.key === n8 ? 0 : i.length - 1];
      else {
        let n = [n6, n4].includes(e.key);
        t = e0(i, e.target, n, !0);
      }
      t && (t.focus({ preventScroll: !0 }), sa.getOrCreateInstance(t).show());
    }
    _getChildren() {
      return tf.find(sr, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((e) => this._elemIsActive(e)) || null;
    }
    _setInitialAttributes(e, t) {
      for (let i of (this._setAttributeIfNotExists(e, "role", "tablist"), t))
        this._setInitialAttributesOnChild(i);
    }
    _setInitialAttributesOnChild(e) {
      e = this._getInnerElement(e);
      let t = this._elemIsActive(e),
        i = this._getOuterElement(e);
      e.setAttribute("aria-selected", t),
        i !== e && this._setAttributeIfNotExists(i, "role", "presentation"),
        t || e.setAttribute("tabindex", "-1"),
        this._setAttributeIfNotExists(e, "role", "tab"),
        this._setInitialAttributesOnTargetPanel(e);
    }
    _setInitialAttributesOnTargetPanel(e) {
      let t = tf.getElementFromSelector(e);
      t &&
        (this._setAttributeIfNotExists(t, "role", "tabpanel"),
        e.id && this._setAttributeIfNotExists(t, "aria-labelledby", `${e.id}`));
    }
    _toggleDropDown(e, t) {
      let i = this._getOuterElement(e);
      if (!i.classList.contains("dropdown")) return;
      let n = (e, n) => {
        let s = tf.findOne(e, i);
        s && s.classList.toggle(n, t);
      };
      n(st, n9), n(".dropdown-menu", se), i.setAttribute("aria-expanded", t);
    }
    _setAttributeIfNotExists(e, t, i) {
      e.hasAttribute(t) || e.setAttribute(t, i);
    }
    _elemIsActive(e) {
      return e.classList.contains(n9);
    }
    _getInnerElement(e) {
      return e.matches(sr) ? e : tf.findOne(sr, e);
    }
    _getOuterElement(e) {
      return e.closest(".nav-item, .list-group-item") || e;
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = sa.getOrCreateInstance(this);
        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
            throw TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  }
  tr.on(document, n2, ss, function (e) {
    ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
      eq(this) || sa.getOrCreateInstance(this).show();
  }),
    tr.on(window, n5, () => {
      for (let e of tf.find(so)) sa.getOrCreateInstance(e);
    }),
    eG(sa);
  let sl = ".bs.toast",
    sc = `mouseover${sl}`,
    sh = `mouseout${sl}`,
    su = `focusin${sl}`,
    sd = `focusout${sl}`,
    sf = `hide${sl}`,
    sp = `hidden${sl}`,
    sm = `show${sl}`,
    sg = `shown${sl}`,
    s_ = "hide",
    sb = "show",
    sv = "showing",
    sy = { animation: "boolean", autohide: "boolean", delay: "number" },
    sw = { animation: !0, autohide: !0, delay: 5e3 };
  class sA extends tu {
    constructor(e, t) {
      super(e, t),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get Default() {
      return sw;
    }
    static get DefaultType() {
      return sy;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      tr.trigger(this._element, sm).defaultPrevented ||
        (this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade"),
        this._element.classList.remove(s_),
        eK(this._element),
        this._element.classList.add(sb, sv),
        this._queueCallback(
          () => {
            this._element.classList.remove(sv),
              tr.trigger(this._element, sg),
              this._maybeScheduleHide();
          },
          this._element,
          this._config.animation,
        ));
    }
    hide() {
      this.isShown() &&
        !tr.trigger(this._element, sf).defaultPrevented &&
        (this._element.classList.add(sv),
        this._queueCallback(
          () => {
            this._element.classList.add(s_),
              this._element.classList.remove(sv, sb),
              tr.trigger(this._element, sp);
          },
          this._element,
          this._config.animation,
        ));
    }
    dispose() {
      this._clearTimeout(),
        this.isShown() && this._element.classList.remove(sb),
        super.dispose();
    }
    isShown() {
      return this._element.classList.contains(sb);
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        (this._hasMouseInteraction ||
          this._hasKeyboardInteraction ||
          (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
    }
    _onInteraction(e, t) {
      switch (e.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = t;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = t;
      }
      if (t) {
        this._clearTimeout();
        return;
      }
      let i = e.relatedTarget;
      this._element === i ||
        this._element.contains(i) ||
        this._maybeScheduleHide();
    }
    _setListeners() {
      tr.on(this._element, sc, (e) => this._onInteraction(e, !0)),
        tr.on(this._element, sh, (e) => this._onInteraction(e, !1)),
        tr.on(this._element, su, (e) => this._onInteraction(e, !0)),
        tr.on(this._element, sd, (e) => this._onInteraction(e, !1));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = sA.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
          t[e](this);
        }
      });
    }
  }
  tp(sA),
    eG(sA),
    (() => {
      let e = document.querySelectorAll(".needs-validation");
      e.length > 0 &&
        Array.from(e).forEach((e) => {
          e.addEventListener(
            "submit",
            (t) => {
              e.checkValidity() || (t.preventDefault(), t.stopPropagation()),
                e.classList.add("was-validated");
            },
            !1,
          );
        });
    })();
})();
//# sourceMappingURL=script.f55b0c3b.js.map
