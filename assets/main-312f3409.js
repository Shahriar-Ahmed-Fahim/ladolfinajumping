(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const n of r)
      if (n.type === "childList")
        for (const a of n.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && i(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(r) {
    const n = {};
    return (
      r.integrity && (n.integrity = r.integrity),
      r.referrerPolicy && (n.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const n = t(r);
    fetch(r.href, n);
  }
})();
const Ts = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: window.innerWidth / 2,
    endY: window.innerHeight / 2,
    cursorVisible: !0,
    cursorEnlarged: !1,
    $dot: document.querySelector(".cursor-dot"),
    $outline: document.querySelector(".cursor-dot-outline"),
    init: function () {
      (this.dotSize = this.$dot.offsetWidth),
        (this.outlineSize = this.$outline.offsetWidth),
        this.setupEventListeners(),
        this.animateDotOutline();
    },
    setupEventListeners: function () {
      let s = this;
      document.querySelectorAll("a").forEach(function (e) {
        e.addEventListener("mouseover", function () {
          (s.cursorEnlarged = !0), s.toggleCursorSize();
        }),
          e.addEventListener("mouseout", function () {
            (s.cursorEnlarged = !1), s.toggleCursorSize();
          });
      }),
        document.querySelectorAll("button").forEach(function (e) {
          e.addEventListener("mouseover", function () {
            (s.cursorEnlarged = !1), s.toggleCursorSize();
          }),
            e.addEventListener("mouseout", function () {
              (s.cursorEnlarged = !1), s.toggleCursorSize();
            });
        }),
        document.addEventListener("mousedown", function () {
          (s.cursorEnlarged = !0), s.toggleCursorSize();
        }),
        document.addEventListener("mouseup", function () {
          (s.cursorEnlarged = !1), s.toggleCursorSize();
        }),
        document.addEventListener("mousemove", function (e) {
          (s.cursorVisible = !0),
            s.toggleCursorVisibility(),
            (s.endX = e.pageX),
            (s.endY = e.pageY),
            (s.$dot.style.top = s.endY + "px"),
            (s.$dot.style.left = s.endX + "px");
        }),
        document.addEventListener("mouseenter", function (e) {
          (s.cursorVisible = !0),
            s.toggleCursorVisibility(),
            (s.$dot.style.opacity = 1),
            (s.$outline.style.opacity = 1);
        }),
        document.addEventListener("mouseleave", function (e) {
          (s.cursorVisible = !0),
            s.toggleCursorVisibility(),
            (s.$dot.style.opacity = 0),
            (s.$outline.style.opacity = 0);
        });
    },
    animateDotOutline: function () {
      let s = this;
      (s._x += (s.endX - s._x) / s.delay),
        (s._y += (s.endY - s._y) / s.delay),
        (s.$outline.style.top = s._y + "px"),
        (s.$outline.style.left = s._x + "px"),
        requestAnimationFrame(this.animateDotOutline.bind(s));
    },
    toggleCursorSize: function () {
      let s = this;
      s.cursorEnlarged
        ? ((s.$dot.style.transform = "translate(-50%, -50%) scale(0.75)"),
          (s.$outline.style.transform = "translate(-50%, -50%) scale(1.75)"),
          s.$dot.classList.add("is-hover"),
          s.$outline.classList.add("is-hover"))
        : ((s.$dot.style.transform = "translate(-50%, -50%) scale(1)"),
          (s.$outline.style.transform = "translate(-50%, -50%) scale(1)"),
          s.$dot.classList.remove("is-hover"),
          s.$outline.classList.remove("is-hover"));
    },
    toggleCursorVisibility: function () {
      let s = this;
      s.cursorVisible
        ? ((s.$dot.style.opacity = 1), (s.$outline.style.opacity = 1))
        : ((s.$dot.style.opacity = 0), (s.$outline.style.opacity = 0));
    },
  },
  kt = document.querySelector("body");
function ws() {
  const s = document.querySelector(".header__trigger"),
    e = document.querySelectorAll("nav a");
  function t(r) {
    kt.classList.toggle("is--nav-open");
  }
  function i(r) {
    kt.classList.remove("is--nav-open");
  }
  s.addEventListener("click", t),
    e.forEach((r) => r.addEventListener("click", i));
}
function Es() {
  const s = document.querySelector("#hero"),
    e = (i) => {
      i.forEach((r) => {
        r.isIntersecting
          ? kt.classList.add("is--nav-transparent")
          : kt.classList.remove("is--nav-transparent");
      });
    };
  new IntersectionObserver(e).observe(s);
}
function Cs() {
  document.querySelectorAll('a[href^="#"]').forEach((s) => {
    s.addEventListener("click", function (e) {
      e.preventDefault();
      const t = this.getAttribute("href").slice(1);
      document
        .getElementById(t)
        .scrollIntoView({ block: "start", behavior: "smooth" });
    });
  });
}
const Ps = { handleNavMobile: ws, handleNavBg: Es, scrollToAnchor: Cs };
function Gi(s) {
  return (
    s !== null &&
    typeof s == "object" &&
    "constructor" in s &&
    s.constructor === Object
  );
}
function wi(s = {}, e = {}) {
  Object.keys(e).forEach((t) => {
    typeof s[t] > "u"
      ? (s[t] = e[t])
      : Gi(e[t]) && Gi(s[t]) && Object.keys(e[t]).length > 0 && wi(s[t], e[t]);
  });
}
const pr = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function Ue() {
  const s = typeof document < "u" ? document : {};
  return wi(s, pr), s;
}
const Ms = {
  document: pr,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(s) {
    return typeof setTimeout > "u" ? (s(), null) : setTimeout(s, 0);
  },
  cancelAnimationFrame(s) {
    typeof setTimeout > "u" || clearTimeout(s);
  },
};
function oe() {
  const s = typeof window < "u" ? window : {};
  return wi(s, Ms), s;
}
function Os(s) {
  const e = s;
  Object.keys(e).forEach((t) => {
    try {
      e[t] = null;
    } catch {}
    try {
      delete e[t];
    } catch {}
  });
}
function ai(s, e = 0) {
  return setTimeout(s, e);
}
function At() {
  return Date.now();
}
function Ls(s) {
  const e = oe();
  let t;
  return (
    e.getComputedStyle && (t = e.getComputedStyle(s, null)),
    !t && s.currentStyle && (t = s.currentStyle),
    t || (t = s.style),
    t
  );
}
function ks(s, e = "x") {
  const t = oe();
  let i, r, n;
  const a = Ls(s);
  return (
    t.WebKitCSSMatrix
      ? ((r = a.transform || a.webkitTransform),
        r.split(",").length > 6 &&
          (r = r
            .split(", ")
            .map((o) => o.replace(",", "."))
            .join(", ")),
        (n = new t.WebKitCSSMatrix(r === "none" ? "" : r)))
      : ((n =
          a.MozTransform ||
          a.OTransform ||
          a.MsTransform ||
          a.msTransform ||
          a.transform ||
          a
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (i = n.toString().split(","))),
    e === "x" &&
      (t.WebKitCSSMatrix
        ? (r = n.m41)
        : i.length === 16
        ? (r = parseFloat(i[12]))
        : (r = parseFloat(i[4]))),
    e === "y" &&
      (t.WebKitCSSMatrix
        ? (r = n.m42)
        : i.length === 16
        ? (r = parseFloat(i[13]))
        : (r = parseFloat(i[5]))),
    r || 0
  );
}
function wt(s) {
  return (
    typeof s == "object" &&
    s !== null &&
    s.constructor &&
    Object.prototype.toString.call(s).slice(8, -1) === "Object"
  );
}
function As(s) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? s instanceof HTMLElement
    : s && (s.nodeType === 1 || s.nodeType === 11);
}
function ie(...s) {
  const e = Object(s[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < s.length; i += 1) {
    const r = s[i];
    if (r != null && !As(r)) {
      const n = Object.keys(Object(r)).filter((a) => t.indexOf(a) < 0);
      for (let a = 0, o = n.length; a < o; a += 1) {
        const l = n[a],
          u = Object.getOwnPropertyDescriptor(r, l);
        u !== void 0 &&
          u.enumerable &&
          (wt(e[l]) && wt(r[l])
            ? r[l].__swiper__
              ? (e[l] = r[l])
              : ie(e[l], r[l])
            : !wt(e[l]) && wt(r[l])
            ? ((e[l] = {}), r[l].__swiper__ ? (e[l] = r[l]) : ie(e[l], r[l]))
            : (e[l] = r[l]));
      }
    }
  }
  return e;
}
function Et(s, e, t) {
  s.style.setProperty(e, t);
}
function mr({ swiper: s, targetPosition: e, side: t }) {
  const i = oe(),
    r = -s.translate;
  let n = null,
    a;
  const o = s.params.speed;
  (s.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(s.cssModeFrameID);
  const l = e > r ? "next" : "prev",
    u = (h, p) => (l === "next" && h >= p) || (l === "prev" && h <= p),
    d = () => {
      (a = new Date().getTime()), n === null && (n = a);
      const h = Math.max(Math.min((a - n) / o, 1), 0),
        p = 0.5 - Math.cos(h * Math.PI) / 2;
      let m = r + p * (e - r);
      if ((u(m, e) && (m = e), s.wrapperEl.scrollTo({ [t]: m }), u(m, e))) {
        (s.wrapperEl.style.overflow = "hidden"),
          (s.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (s.wrapperEl.style.overflow = ""), s.wrapperEl.scrollTo({ [t]: m });
          }),
          i.cancelAnimationFrame(s.cssModeFrameID);
        return;
      }
      s.cssModeFrameID = i.requestAnimationFrame(d);
    };
  d();
}
function ve(s, e = "") {
  return [...s.children].filter((t) => t.matches(e));
}
function gr(s, e = []) {
  const t = document.createElement(s);
  return t.classList.add(...(Array.isArray(e) ? e : [e])), t;
}
function zs(s, e) {
  const t = [];
  for (; s.previousElementSibling; ) {
    const i = s.previousElementSibling;
    e ? i.matches(e) && t.push(i) : t.push(i), (s = i);
  }
  return t;
}
function Is(s, e) {
  const t = [];
  for (; s.nextElementSibling; ) {
    const i = s.nextElementSibling;
    e ? i.matches(e) && t.push(i) : t.push(i), (s = i);
  }
  return t;
}
function Le(s, e) {
  return oe().getComputedStyle(s, null).getPropertyValue(e);
}
function zt(s) {
  let e = s,
    t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (t += 1);
    return t;
  }
}
function _r(s, e) {
  const t = [];
  let i = s.parentElement;
  for (; i; ) e ? i.matches(e) && t.push(i) : t.push(i), (i = i.parentElement);
  return t;
}
function oi(s, e, t) {
  const i = oe();
  return t
    ? s[e === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          i
            .getComputedStyle(s, null)
            .getPropertyValue(e === "width" ? "margin-right" : "margin-top")
        ) +
        parseFloat(
          i
            .getComputedStyle(s, null)
            .getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")
        )
    : s.offsetWidth;
}
let Yt;
function Ds() {
  const s = oe(),
    e = Ue();
  return {
    smoothScroll:
      e.documentElement && "scrollBehavior" in e.documentElement.style,
    touch: !!(
      "ontouchstart" in s ||
      (s.DocumentTouch && e instanceof s.DocumentTouch)
    ),
  };
}
function vr() {
  return Yt || (Yt = Ds()), Yt;
}
let Xt;
function Rs({ userAgent: s } = {}) {
  const e = vr(),
    t = oe(),
    i = t.navigator.platform,
    r = s || t.navigator.userAgent,
    n = { ios: !1, android: !1 },
    a = t.screen.width,
    o = t.screen.height,
    l = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let u = r.match(/(iPad).*OS\s([\d_]+)/);
  const d = r.match(/(iPod)(.*OS\s([\d_]+))?/),
    h = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    p = i === "Win32";
  let m = i === "MacIntel";
  const g = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !u &&
      m &&
      e.touch &&
      g.indexOf(`${a}x${o}`) >= 0 &&
      ((u = r.match(/(Version)\/([\d.]+)/)),
      u || (u = [0, 1, "13_0_0"]),
      (m = !1)),
    l && !p && ((n.os = "android"), (n.android = !0)),
    (u || h || d) && ((n.os = "ios"), (n.ios = !0)),
    n
  );
}
function Bs(s = {}) {
  return Xt || (Xt = Rs(s)), Xt;
}
let Ut;
function Fs() {
  const s = oe();
  let e = !1;
  function t() {
    const i = s.navigator.userAgent.toLowerCase();
    return (
      i.indexOf("safari") >= 0 &&
      i.indexOf("chrome") < 0 &&
      i.indexOf("android") < 0
    );
  }
  if (t()) {
    const i = String(s.navigator.userAgent);
    if (i.includes("Version/")) {
      const [r, n] = i
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((a) => Number(a));
      e = r < 16 || (r === 16 && n < 2);
    }
  }
  return {
    isSafari: e || t(),
    needPerspectiveFix: e,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      s.navigator.userAgent
    ),
  };
}
function Vs() {
  return Ut || (Ut = Fs()), Ut;
}
function $s({ swiper: s, on: e, emit: t }) {
  const i = oe();
  let r = null,
    n = null;
  const a = () => {
      !s || s.destroyed || !s.initialized || (t("beforeResize"), t("resize"));
    },
    o = () => {
      !s ||
        s.destroyed ||
        !s.initialized ||
        ((r = new ResizeObserver((d) => {
          n = i.requestAnimationFrame(() => {
            const { width: h, height: p } = s;
            let m = h,
              g = p;
            d.forEach(({ contentBoxSize: c, contentRect: y, target: f }) => {
              (f && f !== s.el) ||
                ((m = y ? y.width : (c[0] || c).inlineSize),
                (g = y ? y.height : (c[0] || c).blockSize));
            }),
              (m !== h || g !== p) && a();
          });
        })),
        r.observe(s.el));
    },
    l = () => {
      n && i.cancelAnimationFrame(n),
        r && r.unobserve && s.el && (r.unobserve(s.el), (r = null));
    },
    u = () => {
      !s || s.destroyed || !s.initialized || t("orientationchange");
    };
  e("init", () => {
    if (s.params.resizeObserver && typeof i.ResizeObserver < "u") {
      o();
      return;
    }
    i.addEventListener("resize", a), i.addEventListener("orientationchange", u);
  }),
    e("destroy", () => {
      l(),
        i.removeEventListener("resize", a),
        i.removeEventListener("orientationchange", u);
    });
}
function Ns({ swiper: s, extendParams: e, on: t, emit: i }) {
  const r = [],
    n = oe(),
    a = (u, d = {}) => {
      const h = n.MutationObserver || n.WebkitMutationObserver,
        p = new h((m) => {
          if (s.__preventObserver__) return;
          if (m.length === 1) {
            i("observerUpdate", m[0]);
            return;
          }
          const g = function () {
            i("observerUpdate", m[0]);
          };
          n.requestAnimationFrame
            ? n.requestAnimationFrame(g)
            : n.setTimeout(g, 0);
        });
      p.observe(u, {
        attributes: typeof d.attributes > "u" ? !0 : d.attributes,
        childList: typeof d.childList > "u" ? !0 : d.childList,
        characterData: typeof d.characterData > "u" ? !0 : d.characterData,
      }),
        r.push(p);
    },
    o = () => {
      if (s.params.observer) {
        if (s.params.observeParents) {
          const u = _r(s.el);
          for (let d = 0; d < u.length; d += 1) a(u[d]);
        }
        a(s.el, { childList: s.params.observeSlideChildren }),
          a(s.wrapperEl, { attributes: !1 });
      }
    },
    l = () => {
      r.forEach((u) => {
        u.disconnect();
      }),
        r.splice(0, r.length);
    };
  e({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    t("init", o),
    t("destroy", l);
}
const Gs = {
  on(s, e, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    const r = t ? "unshift" : "push";
    return (
      s.split(" ").forEach((n) => {
        i.eventsListeners[n] || (i.eventsListeners[n] = []),
          i.eventsListeners[n][r](e);
      }),
      i
    );
  },
  once(s, e, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    function r(...n) {
      i.off(s, r), r.__emitterProxy && delete r.__emitterProxy, e.apply(i, n);
    }
    return (r.__emitterProxy = e), i.on(s, r, t);
  },
  onAny(s, e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || typeof s != "function") return t;
    const i = e ? "unshift" : "push";
    return t.eventsAnyListeners.indexOf(s) < 0 && t.eventsAnyListeners[i](s), t;
  },
  offAny(s) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const t = e.eventsAnyListeners.indexOf(s);
    return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
  },
  off(s, e) {
    const t = this;
    return (
      !t.eventsListeners ||
        t.destroyed ||
        !t.eventsListeners ||
        s.split(" ").forEach((i) => {
          typeof e > "u"
            ? (t.eventsListeners[i] = [])
            : t.eventsListeners[i] &&
              t.eventsListeners[i].forEach((r, n) => {
                (r === e || (r.__emitterProxy && r.__emitterProxy === e)) &&
                  t.eventsListeners[i].splice(n, 1);
              });
        }),
      t
    );
  },
  emit(...s) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, i, r;
    return (
      typeof s[0] == "string" || Array.isArray(s[0])
        ? ((t = s[0]), (i = s.slice(1, s.length)), (r = e))
        : ((t = s[0].events), (i = s[0].data), (r = s[0].context || e)),
      i.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((a) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((o) => {
            o.apply(r, [a, ...i]);
          }),
          e.eventsListeners &&
            e.eventsListeners[a] &&
            e.eventsListeners[a].forEach((o) => {
              o.apply(r, i);
            });
      }),
      e
    );
  },
};
function Hs() {
  const s = this;
  let e, t;
  const i = s.el;
  typeof s.params.width < "u" && s.params.width !== null
    ? (e = s.params.width)
    : (e = i.clientWidth),
    typeof s.params.height < "u" && s.params.height !== null
      ? (t = s.params.height)
      : (t = i.clientHeight),
    !((e === 0 && s.isHorizontal()) || (t === 0 && s.isVertical())) &&
      ((e =
        e -
        parseInt(Le(i, "padding-left") || 0, 10) -
        parseInt(Le(i, "padding-right") || 0, 10)),
      (t =
        t -
        parseInt(Le(i, "padding-top") || 0, 10) -
        parseInt(Le(i, "padding-bottom") || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(t) && (t = 0),
      Object.assign(s, {
        width: e,
        height: t,
        size: s.isHorizontal() ? e : t,
      }));
}
function Ws() {
  const s = this;
  function e(E) {
    return s.isHorizontal()
      ? E
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[E];
  }
  function t(E, P) {
    return parseFloat(E.getPropertyValue(e(P)) || 0);
  }
  const i = s.params,
    { wrapperEl: r, slidesEl: n, size: a, rtlTranslate: o, wrongRTL: l } = s,
    u = s.virtual && i.virtual.enabled,
    d = u ? s.virtual.slides.length : s.slides.length,
    h = ve(n, `.${s.params.slideClass}, swiper-slide`),
    p = u ? s.virtual.slides.length : h.length;
  let m = [];
  const g = [],
    c = [];
  let y = i.slidesOffsetBefore;
  typeof y == "function" && (y = i.slidesOffsetBefore.call(s));
  let f = i.slidesOffsetAfter;
  typeof f == "function" && (f = i.slidesOffsetAfter.call(s));
  const _ = s.snapGrid.length,
    v = s.slidesGrid.length;
  let S = i.spaceBetween,
    x = -y,
    b = 0,
    w = 0;
  if (typeof a > "u") return;
  typeof S == "string" &&
    S.indexOf("%") >= 0 &&
    (S = (parseFloat(S.replace("%", "")) / 100) * a),
    (s.virtualSize = -S),
    h.forEach((E) => {
      o ? (E.style.marginLeft = "") : (E.style.marginRight = ""),
        (E.style.marginBottom = ""),
        (E.style.marginTop = "");
    }),
    i.centeredSlides &&
      i.cssMode &&
      (Et(r, "--swiper-centered-offset-before", ""),
      Et(r, "--swiper-centered-offset-after", ""));
  const C = i.grid && i.grid.rows > 1 && s.grid;
  C && s.grid.initSlides(p);
  let T;
  const O =
    i.slidesPerView === "auto" &&
    i.breakpoints &&
    Object.keys(i.breakpoints).filter(
      (E) => typeof i.breakpoints[E].slidesPerView < "u"
    ).length > 0;
  for (let E = 0; E < p; E += 1) {
    T = 0;
    let P;
    if (
      (h[E] && (P = h[E]),
      C && s.grid.updateSlide(E, P, p, e),
      !(h[E] && Le(P, "display") === "none"))
    ) {
      if (i.slidesPerView === "auto") {
        O && (h[E].style[e("width")] = "");
        const M = getComputedStyle(P),
          L = P.style.transform,
          A = P.style.webkitTransform;
        if (
          (L && (P.style.transform = "none"),
          A && (P.style.webkitTransform = "none"),
          i.roundLengths)
        )
          T = s.isHorizontal() ? oi(P, "width", !0) : oi(P, "height", !0);
        else {
          const B = t(M, "width"),
            F = t(M, "padding-left"),
            W = t(M, "padding-right"),
            me = t(M, "margin-left"),
            ge = t(M, "margin-right"),
            Me = M.getPropertyValue("box-sizing");
          if (Me && Me === "border-box") T = B + me + ge;
          else {
            const { clientWidth: be, offsetWidth: Tt } = P;
            T = B + F + W + me + ge + (Tt - be);
          }
        }
        L && (P.style.transform = L),
          A && (P.style.webkitTransform = A),
          i.roundLengths && (T = Math.floor(T));
      } else
        (T = (a - (i.slidesPerView - 1) * S) / i.slidesPerView),
          i.roundLengths && (T = Math.floor(T)),
          h[E] && (h[E].style[e("width")] = `${T}px`);
      h[E] && (h[E].swiperSlideSize = T),
        c.push(T),
        i.centeredSlides
          ? ((x = x + T / 2 + b / 2 + S),
            b === 0 && E !== 0 && (x = x - a / 2 - S),
            E === 0 && (x = x - a / 2 - S),
            Math.abs(x) < 1 / 1e3 && (x = 0),
            i.roundLengths && (x = Math.floor(x)),
            w % i.slidesPerGroup === 0 && m.push(x),
            g.push(x))
          : (i.roundLengths && (x = Math.floor(x)),
            (w - Math.min(s.params.slidesPerGroupSkip, w)) %
              s.params.slidesPerGroup ===
              0 && m.push(x),
            g.push(x),
            (x = x + T + S)),
        (s.virtualSize += T + S),
        (b = T),
        (w += 1);
    }
  }
  if (
    ((s.virtualSize = Math.max(s.virtualSize, a) + f),
    o &&
      l &&
      (i.effect === "slide" || i.effect === "coverflow") &&
      (r.style.width = `${s.virtualSize + i.spaceBetween}px`),
    i.setWrapperSize &&
      (r.style[e("width")] = `${s.virtualSize + i.spaceBetween}px`),
    C && s.grid.updateWrapperSize(T, m, e),
    !i.centeredSlides)
  ) {
    const E = [];
    for (let P = 0; P < m.length; P += 1) {
      let M = m[P];
      i.roundLengths && (M = Math.floor(M)),
        m[P] <= s.virtualSize - a && E.push(M);
    }
    (m = E),
      Math.floor(s.virtualSize - a) - Math.floor(m[m.length - 1]) > 1 &&
        m.push(s.virtualSize - a);
  }
  if (u && i.loop) {
    const E = c[0] + S;
    if (i.slidesPerGroup > 1) {
      const P = Math.ceil(
          (s.virtual.slidesBefore + s.virtual.slidesAfter) / i.slidesPerGroup
        ),
        M = E * i.slidesPerGroup;
      for (let L = 0; L < P; L += 1) m.push(m[m.length - 1] + M);
    }
    for (let P = 0; P < s.virtual.slidesBefore + s.virtual.slidesAfter; P += 1)
      i.slidesPerGroup === 1 && m.push(m[m.length - 1] + E),
        g.push(g[g.length - 1] + E),
        (s.virtualSize += E);
  }
  if ((m.length === 0 && (m = [0]), i.spaceBetween !== 0)) {
    const E = s.isHorizontal() && o ? "marginLeft" : e("marginRight");
    h.filter((P, M) =>
      !i.cssMode || i.loop ? !0 : M !== h.length - 1
    ).forEach((P) => {
      P.style[E] = `${S}px`;
    });
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let E = 0;
    c.forEach((M) => {
      E += M + (i.spaceBetween ? i.spaceBetween : 0);
    }),
      (E -= i.spaceBetween);
    const P = E - a;
    m = m.map((M) => (M < 0 ? -y : M > P ? P + f : M));
  }
  if (i.centerInsufficientSlides) {
    let E = 0;
    if (
      (c.forEach((P) => {
        E += P + (i.spaceBetween ? i.spaceBetween : 0);
      }),
      (E -= i.spaceBetween),
      E < a)
    ) {
      const P = (a - E) / 2;
      m.forEach((M, L) => {
        m[L] = M - P;
      }),
        g.forEach((M, L) => {
          g[L] = M + P;
        });
    }
  }
  if (
    (Object.assign(s, {
      slides: h,
      snapGrid: m,
      slidesGrid: g,
      slidesSizesGrid: c,
    }),
    i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
  ) {
    Et(r, "--swiper-centered-offset-before", `${-m[0]}px`),
      Et(
        r,
        "--swiper-centered-offset-after",
        `${s.size / 2 - c[c.length - 1] / 2}px`
      );
    const E = -s.snapGrid[0],
      P = -s.slidesGrid[0];
    (s.snapGrid = s.snapGrid.map((M) => M + E)),
      (s.slidesGrid = s.slidesGrid.map((M) => M + P));
  }
  if (
    (p !== d && s.emit("slidesLengthChange"),
    m.length !== _ &&
      (s.params.watchOverflow && s.checkOverflow(),
      s.emit("snapGridLengthChange")),
    g.length !== v && s.emit("slidesGridLengthChange"),
    i.watchSlidesProgress && s.updateSlidesOffset(),
    !u && !i.cssMode && (i.effect === "slide" || i.effect === "fade"))
  ) {
    const E = `${i.containerModifierClass}backface-hidden`,
      P = s.el.classList.contains(E);
    p <= i.maxBackfaceHiddenSlides
      ? P || s.el.classList.add(E)
      : P && s.el.classList.remove(E);
  }
}
function qs(s) {
  const e = this,
    t = [],
    i = e.virtual && e.params.virtual.enabled;
  let r = 0,
    n;
  typeof s == "number"
    ? e.setTransition(s)
    : s === !0 && e.setTransition(e.params.speed);
  const a = (o) => (i ? e.getSlideIndexByData(o) : e.slides[o]);
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((o) => {
        t.push(o);
      });
    else
      for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
        const o = e.activeIndex + n;
        if (o > e.slides.length && !i) break;
        t.push(a(o));
      }
  else t.push(a(e.activeIndex));
  for (n = 0; n < t.length; n += 1)
    if (typeof t[n] < "u") {
      const o = t[n].offsetHeight;
      r = o > r ? o : r;
    }
  (r || r === 0) && (e.wrapperEl.style.height = `${r}px`);
}
function Ys() {
  const s = this,
    e = s.slides,
    t = s.isElement
      ? s.isHorizontal()
        ? s.wrapperEl.offsetLeft
        : s.wrapperEl.offsetTop
      : 0;
  for (let i = 0; i < e.length; i += 1)
    e[i].swiperSlideOffset =
      (s.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t;
}
function Xs(s = (this && this.translate) || 0) {
  const e = this,
    t = e.params,
    { slides: i, rtlTranslate: r, snapGrid: n } = e;
  if (i.length === 0) return;
  typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let a = -s;
  r && (a = s),
    i.forEach((o) => {
      o.classList.remove(t.slideVisibleClass);
    }),
    (e.visibleSlidesIndexes = []),
    (e.visibleSlides = []);
  for (let o = 0; o < i.length; o += 1) {
    const l = i[o];
    let u = l.swiperSlideOffset;
    t.cssMode && t.centeredSlides && (u -= i[0].swiperSlideOffset);
    const d =
        (a + (t.centeredSlides ? e.minTranslate() : 0) - u) /
        (l.swiperSlideSize + t.spaceBetween),
      h =
        (a - n[0] + (t.centeredSlides ? e.minTranslate() : 0) - u) /
        (l.swiperSlideSize + t.spaceBetween),
      p = -(a - u),
      m = p + e.slidesSizesGrid[o];
    ((p >= 0 && p < e.size - 1) ||
      (m > 1 && m <= e.size) ||
      (p <= 0 && m >= e.size)) &&
      (e.visibleSlides.push(l),
      e.visibleSlidesIndexes.push(o),
      i[o].classList.add(t.slideVisibleClass)),
      (l.progress = r ? -d : d),
      (l.originalProgress = r ? -h : h);
  }
}
function Us(s) {
  const e = this;
  if (typeof s > "u") {
    const d = e.rtlTranslate ? -1 : 1;
    s = (e && e.translate && e.translate * d) || 0;
  }
  const t = e.params,
    i = e.maxTranslate() - e.minTranslate();
  let { progress: r, isBeginning: n, isEnd: a, progressLoop: o } = e;
  const l = n,
    u = a;
  if (i === 0) (r = 0), (n = !0), (a = !0);
  else {
    r = (s - e.minTranslate()) / i;
    const d = Math.abs(s - e.minTranslate()) < 1,
      h = Math.abs(s - e.maxTranslate()) < 1;
    (n = d || r <= 0), (a = h || r >= 1), d && (r = 0), h && (r = 1);
  }
  if (t.loop) {
    const d = e.getSlideIndexByData(0),
      h = e.getSlideIndexByData(e.slides.length - 1),
      p = e.slidesGrid[d],
      m = e.slidesGrid[h],
      g = e.slidesGrid[e.slidesGrid.length - 1],
      c = Math.abs(s);
    c >= p ? (o = (c - p) / g) : (o = (c + g - m) / g), o > 1 && (o -= 1);
  }
  Object.assign(e, { progress: r, progressLoop: o, isBeginning: n, isEnd: a }),
    (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
      e.updateSlidesProgress(s),
    n && !l && e.emit("reachBeginning toEdge"),
    a && !u && e.emit("reachEnd toEdge"),
    ((l && !n) || (u && !a)) && e.emit("fromEdge"),
    e.emit("progress", r);
}
function js() {
  const s = this,
    { slides: e, params: t, slidesEl: i, activeIndex: r } = s,
    n = s.virtual && t.virtual.enabled,
    a = (l) => ve(i, `.${t.slideClass}${l}, swiper-slide${l}`)[0];
  e.forEach((l) => {
    l.classList.remove(t.slideActiveClass, t.slideNextClass, t.slidePrevClass);
  });
  let o;
  if (n)
    if (t.loop) {
      let l = r - s.virtual.slidesBefore;
      l < 0 && (l = s.virtual.slides.length + l),
        l >= s.virtual.slides.length && (l -= s.virtual.slides.length),
        (o = a(`[data-swiper-slide-index="${l}"]`));
    } else o = a(`[data-swiper-slide-index="${r}"]`);
  else o = e[r];
  if (o) {
    o.classList.add(t.slideActiveClass);
    let l = Is(o, `.${t.slideClass}, swiper-slide`)[0];
    t.loop && !l && (l = e[0]), l && l.classList.add(t.slideNextClass);
    let u = zs(o, `.${t.slideClass}, swiper-slide`)[0];
    t.loop && !u === 0 && (u = e[e.length - 1]),
      u && u.classList.add(t.slidePrevClass);
  }
  s.emitSlidesClasses();
}
const Pt = (s, e) => {
    if (!s || s.destroyed || !s.params) return;
    const t = () => (s.isElement ? "swiper-slide" : `.${s.params.slideClass}`),
      i = e.closest(t());
    if (i) {
      const r = i.querySelector(`.${s.params.lazyPreloaderClass}`);
      r && r.remove();
    }
  },
  Hi = (s, e) => {
    if (!s.slides[e]) return;
    const t = s.slides[e].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading");
  },
  li = (s) => {
    if (!s || s.destroyed || !s.params) return;
    let e = s.params.lazyPreloadPrevNext;
    const t = s.slides.length;
    if (!t || !e || e < 0) return;
    e = Math.min(e, t);
    const i =
        s.params.slidesPerView === "auto"
          ? s.slidesPerViewDynamic()
          : Math.ceil(s.params.slidesPerView),
      r = s.activeIndex,
      n = r + i - 1;
    if (s.params.rewind)
      for (let a = r - e; a <= n + e; a += 1) {
        const o = ((a % t) + t) % t;
        o !== r && o > n && Hi(s, o);
      }
    else
      for (let a = Math.max(n - e, 0); a <= Math.min(n + e, t - 1); a += 1)
        a !== r && a > n && Hi(s, a);
  };
function Ks(s) {
  const { slidesGrid: e, params: t } = s,
    i = s.rtlTranslate ? s.translate : -s.translate;
  let r;
  for (let n = 0; n < e.length; n += 1)
    typeof e[n + 1] < "u"
      ? i >= e[n] && i < e[n + 1] - (e[n + 1] - e[n]) / 2
        ? (r = n)
        : i >= e[n] && i < e[n + 1] && (r = n + 1)
      : i >= e[n] && (r = n);
  return t.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0), r;
}
function Qs(s) {
  const e = this,
    t = e.rtlTranslate ? e.translate : -e.translate,
    { snapGrid: i, params: r, activeIndex: n, realIndex: a, snapIndex: o } = e;
  let l = s,
    u;
  const d = (p) => {
    let m = p - e.virtual.slidesBefore;
    return (
      m < 0 && (m = e.virtual.slides.length + m),
      m >= e.virtual.slides.length && (m -= e.virtual.slides.length),
      m
    );
  };
  if ((typeof l > "u" && (l = Ks(e)), i.indexOf(t) >= 0)) u = i.indexOf(t);
  else {
    const p = Math.min(r.slidesPerGroupSkip, l);
    u = p + Math.floor((l - p) / r.slidesPerGroup);
  }
  if ((u >= i.length && (u = i.length - 1), l === n)) {
    u !== o && ((e.snapIndex = u), e.emit("snapIndexChange")),
      e.params.loop &&
        e.virtual &&
        e.params.virtual.enabled &&
        (e.realIndex = d(l));
    return;
  }
  let h;
  e.virtual && r.virtual.enabled && r.loop
    ? (h = d(l))
    : e.slides[l]
    ? (h = parseInt(
        e.slides[l].getAttribute("data-swiper-slide-index") || l,
        10
      ))
    : (h = l),
    Object.assign(e, {
      snapIndex: u,
      realIndex: h,
      previousIndex: n,
      activeIndex: l,
    }),
    e.initialized && li(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    a !== h && e.emit("realIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange");
}
function Zs(s) {
  const e = this,
    t = e.params,
    i = s.closest(`.${t.slideClass}, swiper-slide`);
  let r = !1,
    n;
  if (i) {
    for (let a = 0; a < e.slides.length; a += 1)
      if (e.slides[a] === i) {
        (r = !0), (n = a);
        break;
      }
  }
  if (i && r)
    (e.clickedSlide = i),
      e.virtual && e.params.virtual.enabled
        ? (e.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (e.clickedIndex = n);
  else {
    (e.clickedSlide = void 0), (e.clickedIndex = void 0);
    return;
  }
  t.slideToClickedSlide &&
    e.clickedIndex !== void 0 &&
    e.clickedIndex !== e.activeIndex &&
    e.slideToClickedSlide();
}
const Js = {
  updateSize: Hs,
  updateSlides: Ws,
  updateAutoHeight: qs,
  updateSlidesOffset: Ys,
  updateSlidesProgress: Xs,
  updateProgress: Us,
  updateSlidesClasses: js,
  updateActiveIndex: Qs,
  updateClickedSlide: Zs,
};
function en(s = this.isHorizontal() ? "x" : "y") {
  const e = this,
    { params: t, rtlTranslate: i, translate: r, wrapperEl: n } = e;
  if (t.virtualTranslate) return i ? -r : r;
  if (t.cssMode) return r;
  let a = ks(n, s);
  return i && (a = -a), a || 0;
}
function tn(s, e) {
  const t = this,
    { rtlTranslate: i, params: r, wrapperEl: n, progress: a } = t;
  let o = 0,
    l = 0;
  const u = 0;
  t.isHorizontal() ? (o = i ? -s : s) : (l = s),
    r.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
    r.cssMode
      ? (n[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal()
          ? -o
          : -l)
      : r.virtualTranslate ||
        (n.style.transform = `translate3d(${o}px, ${l}px, ${u}px)`),
    (t.previousTranslate = t.translate),
    (t.translate = t.isHorizontal() ? o : l);
  let d;
  const h = t.maxTranslate() - t.minTranslate();
  h === 0 ? (d = 0) : (d = (s - t.minTranslate()) / h),
    d !== a && t.updateProgress(s),
    t.emit("setTranslate", t.translate, e);
}
function rn() {
  return -this.snapGrid[0];
}
function sn() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function nn(s = 0, e = this.params.speed, t = !0, i = !0, r) {
  const n = this,
    { params: a, wrapperEl: o } = n;
  if (n.animating && a.preventInteractionOnTransition) return !1;
  const l = n.minTranslate(),
    u = n.maxTranslate();
  let d;
  if (
    (i && s > l ? (d = l) : i && s < u ? (d = u) : (d = s),
    n.updateProgress(d),
    a.cssMode)
  ) {
    const h = n.isHorizontal();
    if (e === 0) o[h ? "scrollLeft" : "scrollTop"] = -d;
    else {
      if (!n.support.smoothScroll)
        return (
          mr({ swiper: n, targetPosition: -d, side: h ? "left" : "top" }), !0
        );
      o.scrollTo({ [h ? "left" : "top"]: -d, behavior: "smooth" });
    }
    return !0;
  }
  return (
    e === 0
      ? (n.setTransition(0),
        n.setTranslate(d),
        t && (n.emit("beforeTransitionStart", e, r), n.emit("transitionEnd")))
      : (n.setTransition(e),
        n.setTranslate(d),
        t && (n.emit("beforeTransitionStart", e, r), n.emit("transitionStart")),
        n.animating ||
          ((n.animating = !0),
          n.onTranslateToWrapperTransitionEnd ||
            (n.onTranslateToWrapperTransitionEnd = function (p) {
              !n ||
                n.destroyed ||
                (p.target === this &&
                  (n.wrapperEl.removeEventListener(
                    "transitionend",
                    n.onTranslateToWrapperTransitionEnd
                  ),
                  (n.onTranslateToWrapperTransitionEnd = null),
                  delete n.onTranslateToWrapperTransitionEnd,
                  t && n.emit("transitionEnd")));
            }),
          n.wrapperEl.addEventListener(
            "transitionend",
            n.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
const an = {
  getTranslate: en,
  setTranslate: tn,
  minTranslate: rn,
  maxTranslate: sn,
  translateTo: nn,
};
function on(s, e) {
  const t = this;
  t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${s}ms`),
    t.emit("setTransition", s, e);
}
function yr({ swiper: s, runCallbacks: e, direction: t, step: i }) {
  const { activeIndex: r, previousIndex: n } = s;
  let a = t;
  if (
    (a || (r > n ? (a = "next") : r < n ? (a = "prev") : (a = "reset")),
    s.emit(`transition${i}`),
    e && r !== n)
  ) {
    if (a === "reset") {
      s.emit(`slideResetTransition${i}`);
      return;
    }
    s.emit(`slideChangeTransition${i}`),
      a === "next"
        ? s.emit(`slideNextTransition${i}`)
        : s.emit(`slidePrevTransition${i}`);
  }
}
function ln(s = !0, e) {
  const t = this,
    { params: i } = t;
  i.cssMode ||
    (i.autoHeight && t.updateAutoHeight(),
    yr({ swiper: t, runCallbacks: s, direction: e, step: "Start" }));
}
function un(s = !0, e) {
  const t = this,
    { params: i } = t;
  (t.animating = !1),
    !i.cssMode &&
      (t.setTransition(0),
      yr({ swiper: t, runCallbacks: s, direction: e, step: "End" }));
}
const dn = { setTransition: on, transitionStart: ln, transitionEnd: un };
function cn(s = 0, e = this.params.speed, t = !0, i, r) {
  typeof s == "string" && (s = parseInt(s, 10));
  const n = this;
  let a = s;
  a < 0 && (a = 0);
  const {
    params: o,
    snapGrid: l,
    slidesGrid: u,
    previousIndex: d,
    activeIndex: h,
    rtlTranslate: p,
    wrapperEl: m,
    enabled: g,
  } = n;
  if ((n.animating && o.preventInteractionOnTransition) || (!g && !i && !r))
    return !1;
  const c = Math.min(n.params.slidesPerGroupSkip, a);
  let y = c + Math.floor((a - c) / n.params.slidesPerGroup);
  y >= l.length && (y = l.length - 1);
  const f = -l[y];
  if (o.normalizeSlideIndex)
    for (let v = 0; v < u.length; v += 1) {
      const S = -Math.floor(f * 100),
        x = Math.floor(u[v] * 100),
        b = Math.floor(u[v + 1] * 100);
      typeof u[v + 1] < "u"
        ? S >= x && S < b - (b - x) / 2
          ? (a = v)
          : S >= x && S < b && (a = v + 1)
        : S >= x && (a = v);
    }
  if (
    n.initialized &&
    a !== h &&
    ((!n.allowSlideNext && f < n.translate && f < n.minTranslate()) ||
      (!n.allowSlidePrev &&
        f > n.translate &&
        f > n.maxTranslate() &&
        (h || 0) !== a))
  )
    return !1;
  a !== (d || 0) && t && n.emit("beforeSlideChangeStart"), n.updateProgress(f);
  let _;
  if (
    (a > h ? (_ = "next") : a < h ? (_ = "prev") : (_ = "reset"),
    (p && -f === n.translate) || (!p && f === n.translate))
  )
    return (
      n.updateActiveIndex(a),
      o.autoHeight && n.updateAutoHeight(),
      n.updateSlidesClasses(),
      o.effect !== "slide" && n.setTranslate(f),
      _ !== "reset" && (n.transitionStart(t, _), n.transitionEnd(t, _)),
      !1
    );
  if (o.cssMode) {
    const v = n.isHorizontal(),
      S = p ? f : -f;
    if (e === 0) {
      const x = n.virtual && n.params.virtual.enabled;
      x &&
        ((n.wrapperEl.style.scrollSnapType = "none"),
        (n._immediateVirtual = !0)),
        x && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
          ? ((n._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              m[v ? "scrollLeft" : "scrollTop"] = S;
            }))
          : (m[v ? "scrollLeft" : "scrollTop"] = S),
        x &&
          requestAnimationFrame(() => {
            (n.wrapperEl.style.scrollSnapType = ""), (n._immediateVirtual = !1);
          });
    } else {
      if (!n.support.smoothScroll)
        return (
          mr({ swiper: n, targetPosition: S, side: v ? "left" : "top" }), !0
        );
      m.scrollTo({ [v ? "left" : "top"]: S, behavior: "smooth" });
    }
    return !0;
  }
  return (
    n.setTransition(e),
    n.setTranslate(f),
    n.updateActiveIndex(a),
    n.updateSlidesClasses(),
    n.emit("beforeTransitionStart", e, i),
    n.transitionStart(t, _),
    e === 0
      ? n.transitionEnd(t, _)
      : n.animating ||
        ((n.animating = !0),
        n.onSlideToWrapperTransitionEnd ||
          (n.onSlideToWrapperTransitionEnd = function (S) {
            !n ||
              n.destroyed ||
              (S.target === this &&
                (n.wrapperEl.removeEventListener(
                  "transitionend",
                  n.onSlideToWrapperTransitionEnd
                ),
                (n.onSlideToWrapperTransitionEnd = null),
                delete n.onSlideToWrapperTransitionEnd,
                n.transitionEnd(t, _)));
          }),
        n.wrapperEl.addEventListener(
          "transitionend",
          n.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function fn(s = 0, e = this.params.speed, t = !0, i) {
  typeof s == "string" && (s = parseInt(s, 10));
  const r = this;
  let n = s;
  return (
    r.params.loop &&
      (r.virtual && r.params.virtual.enabled
        ? (n = n + r.virtual.slidesBefore)
        : (n = r.getSlideIndexByData(n))),
    r.slideTo(n, e, t, i)
  );
}
function hn(s = this.params.speed, e = !0, t) {
  const i = this,
    { enabled: r, params: n, animating: a } = i;
  if (!r) return i;
  let o = n.slidesPerGroup;
  n.slidesPerView === "auto" &&
    n.slidesPerGroup === 1 &&
    n.slidesPerGroupAuto &&
    (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
  const l = i.activeIndex < n.slidesPerGroupSkip ? 1 : o,
    u = i.virtual && n.virtual.enabled;
  if (n.loop) {
    if (a && !u && n.loopPreventsSliding) return !1;
    i.loopFix({ direction: "next" }), (i._clientLeft = i.wrapperEl.clientLeft);
  }
  return n.rewind && i.isEnd
    ? i.slideTo(0, s, e, t)
    : i.slideTo(i.activeIndex + l, s, e, t);
}
function pn(s = this.params.speed, e = !0, t) {
  const i = this,
    {
      params: r,
      snapGrid: n,
      slidesGrid: a,
      rtlTranslate: o,
      enabled: l,
      animating: u,
    } = i;
  if (!l) return i;
  const d = i.virtual && r.virtual.enabled;
  if (r.loop) {
    if (u && !d && r.loopPreventsSliding) return !1;
    i.loopFix({ direction: "prev" }), (i._clientLeft = i.wrapperEl.clientLeft);
  }
  const h = o ? i.translate : -i.translate;
  function p(f) {
    return f < 0 ? -Math.floor(Math.abs(f)) : Math.floor(f);
  }
  const m = p(h),
    g = n.map((f) => p(f));
  let c = n[g.indexOf(m) - 1];
  if (typeof c > "u" && r.cssMode) {
    let f;
    n.forEach((_, v) => {
      m >= _ && (f = v);
    }),
      typeof f < "u" && (c = n[f > 0 ? f - 1 : f]);
  }
  let y = 0;
  if (
    (typeof c < "u" &&
      ((y = a.indexOf(c)),
      y < 0 && (y = i.activeIndex - 1),
      r.slidesPerView === "auto" &&
        r.slidesPerGroup === 1 &&
        r.slidesPerGroupAuto &&
        ((y = y - i.slidesPerViewDynamic("previous", !0) + 1),
        (y = Math.max(y, 0)))),
    r.rewind && i.isBeginning)
  ) {
    const f =
      i.params.virtual && i.params.virtual.enabled && i.virtual
        ? i.virtual.slides.length - 1
        : i.slides.length - 1;
    return i.slideTo(f, s, e, t);
  }
  return i.slideTo(y, s, e, t);
}
function mn(s = this.params.speed, e = !0, t) {
  const i = this;
  return i.slideTo(i.activeIndex, s, e, t);
}
function gn(s = this.params.speed, e = !0, t, i = 0.5) {
  const r = this;
  let n = r.activeIndex;
  const a = Math.min(r.params.slidesPerGroupSkip, n),
    o = a + Math.floor((n - a) / r.params.slidesPerGroup),
    l = r.rtlTranslate ? r.translate : -r.translate;
  if (l >= r.snapGrid[o]) {
    const u = r.snapGrid[o],
      d = r.snapGrid[o + 1];
    l - u > (d - u) * i && (n += r.params.slidesPerGroup);
  } else {
    const u = r.snapGrid[o - 1],
      d = r.snapGrid[o];
    l - u <= (d - u) * i && (n -= r.params.slidesPerGroup);
  }
  return (
    (n = Math.max(n, 0)),
    (n = Math.min(n, r.slidesGrid.length - 1)),
    r.slideTo(n, s, e, t)
  );
}
function _n() {
  const s = this,
    { params: e, slidesEl: t } = s,
    i = e.slidesPerView === "auto" ? s.slidesPerViewDynamic() : e.slidesPerView;
  let r = s.clickedIndex,
    n;
  const a = s.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (s.animating) return;
    (n = parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      e.centeredSlides
        ? r < s.loopedSlides - i / 2 ||
          r > s.slides.length - s.loopedSlides + i / 2
          ? (s.loopFix(),
            (r = s.getSlideIndex(
              ve(t, `${a}[data-swiper-slide-index="${n}"]`)[0]
            )),
            ai(() => {
              s.slideTo(r);
            }))
          : s.slideTo(r)
        : r > s.slides.length - i
        ? (s.loopFix(),
          (r = s.getSlideIndex(
            ve(t, `${a}[data-swiper-slide-index="${n}"]`)[0]
          )),
          ai(() => {
            s.slideTo(r);
          }))
        : s.slideTo(r);
  } else s.slideTo(r);
}
const vn = {
  slideTo: cn,
  slideToLoop: fn,
  slideNext: hn,
  slidePrev: pn,
  slideReset: mn,
  slideToClosest: gn,
  slideToClickedSlide: _n,
};
function yn(s) {
  const e = this,
    { params: t, slidesEl: i } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  ve(i, `.${t.slideClass}, swiper-slide`).forEach((n, a) => {
    n.setAttribute("data-swiper-slide-index", a);
  }),
    e.loopFix({
      slideRealIndex: s,
      direction: t.centeredSlides ? void 0 : "next",
    });
}
function Sn({
  slideRealIndex: s,
  slideTo: e = !0,
  direction: t,
  setTranslate: i,
  activeSlideIndex: r,
  byController: n,
  byMousewheel: a,
} = {}) {
  const o = this;
  if (!o.params.loop) return;
  o.emit("beforeLoopFix");
  const {
    slides: l,
    allowSlidePrev: u,
    allowSlideNext: d,
    slidesEl: h,
    params: p,
  } = o;
  if (
    ((o.allowSlidePrev = !0),
    (o.allowSlideNext = !0),
    o.virtual && p.virtual.enabled)
  ) {
    e &&
      (!p.centeredSlides && o.snapIndex === 0
        ? o.slideTo(o.virtual.slides.length, 0, !1, !0)
        : p.centeredSlides && o.snapIndex < p.slidesPerView
        ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
        : o.snapIndex === o.snapGrid.length - 1 &&
          o.slideTo(o.virtual.slidesBefore, 0, !1, !0)),
      (o.allowSlidePrev = u),
      (o.allowSlideNext = d),
      o.emit("loopFix");
    return;
  }
  const m =
    p.slidesPerView === "auto"
      ? o.slidesPerViewDynamic()
      : Math.ceil(parseFloat(p.slidesPerView, 10));
  let g = p.loopedSlides || m;
  g % p.slidesPerGroup !== 0 &&
    (g += p.slidesPerGroup - (g % p.slidesPerGroup)),
    (o.loopedSlides = g);
  const c = [],
    y = [];
  let f = o.activeIndex;
  typeof r > "u"
    ? (r = o.getSlideIndex(
        o.slides.filter((b) => b.classList.contains(p.slideActiveClass))[0]
      ))
    : (f = r);
  const _ = t === "next" || !t,
    v = t === "prev" || !t;
  let S = 0,
    x = 0;
  if (r < g) {
    S = Math.max(g - r, p.slidesPerGroup);
    for (let b = 0; b < g - r; b += 1) {
      const w = b - Math.floor(b / l.length) * l.length;
      c.push(l.length - w - 1);
    }
  } else if (r > o.slides.length - g * 2) {
    x = Math.max(r - (o.slides.length - g * 2), p.slidesPerGroup);
    for (let b = 0; b < x; b += 1) {
      const w = b - Math.floor(b / l.length) * l.length;
      y.push(w);
    }
  }
  if (
    (v &&
      c.forEach((b) => {
        h.prepend(o.slides[b]);
      }),
    _ &&
      y.forEach((b) => {
        h.append(o.slides[b]);
      }),
    o.recalcSlides(),
    p.watchSlidesProgress && o.updateSlidesOffset(),
    e)
  ) {
    if (c.length > 0 && v)
      if (typeof s > "u") {
        const b = o.slidesGrid[f],
          C = o.slidesGrid[f + S] - b;
        a
          ? o.setTranslate(o.translate - C)
          : (o.slideTo(f + S, 0, !1, !0),
            i && (o.touches[o.isHorizontal() ? "startX" : "startY"] += C));
      } else i && o.slideToLoop(s, 0, !1, !0);
    else if (y.length > 0 && _)
      if (typeof s > "u") {
        const b = o.slidesGrid[f],
          C = o.slidesGrid[f - x] - b;
        a
          ? o.setTranslate(o.translate - C)
          : (o.slideTo(f - x, 0, !1, !0),
            i && (o.touches[o.isHorizontal() ? "startX" : "startY"] += C));
      } else o.slideToLoop(s, 0, !1, !0);
  }
  if (
    ((o.allowSlidePrev = u),
    (o.allowSlideNext = d),
    o.controller && o.controller.control && !n)
  ) {
    const b = {
      slideRealIndex: s,
      slideTo: !1,
      direction: t,
      setTranslate: i,
      activeSlideIndex: r,
      byController: !0,
    };
    Array.isArray(o.controller.control)
      ? o.controller.control.forEach((w) => {
          !w.destroyed && w.params.loop && w.loopFix(b);
        })
      : o.controller.control instanceof o.constructor &&
        o.controller.control.params.loop &&
        o.controller.control.loopFix(b);
  }
  o.emit("loopFix");
}
function xn() {
  const s = this,
    { params: e, slidesEl: t } = s;
  if (!e.loop || (s.virtual && s.params.virtual.enabled)) return;
  s.recalcSlides();
  const i = [];
  s.slides.forEach((r) => {
    const n =
      typeof r.swiperSlideIndex > "u"
        ? r.getAttribute("data-swiper-slide-index") * 1
        : r.swiperSlideIndex;
    i[n] = r;
  }),
    s.slides.forEach((r) => {
      r.removeAttribute("data-swiper-slide-index");
    }),
    i.forEach((r) => {
      t.append(r);
    }),
    s.recalcSlides(),
    s.slideTo(s.realIndex, 0);
}
const bn = { loopCreate: yn, loopFix: Sn, loopDestroy: xn };
function Tn(s) {
  const e = this;
  if (
    !e.params.simulateTouch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode
  )
    return;
  const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0),
    (t.style.cursor = "move"),
    (t.style.cursor = s ? "grabbing" : "grab"),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      });
}
function wn() {
  const s = this;
  (s.params.watchOverflow && s.isLocked) ||
    s.params.cssMode ||
    (s.isElement && (s.__preventObserver__ = !0),
    (s[
      s.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    s.isElement &&
      requestAnimationFrame(() => {
        s.__preventObserver__ = !1;
      }));
}
const En = { setGrabCursor: Tn, unsetGrabCursor: wn };
function Cn(s, e = this) {
  function t(i) {
    if (!i || i === Ue() || i === oe()) return null;
    i.assignedSlot && (i = i.assignedSlot);
    const r = i.closest(s);
    return !r && !i.getRootNode ? null : r || t(i.getRootNode().host);
  }
  return t(e);
}
function Pn(s) {
  const e = this,
    t = Ue(),
    i = oe(),
    r = e.touchEventsData;
  r.evCache.push(s);
  const { params: n, touches: a, enabled: o } = e;
  if (
    !o ||
    (!n.simulateTouch && s.pointerType === "mouse") ||
    (e.animating && n.preventInteractionOnTransition)
  )
    return;
  !e.animating && n.cssMode && n.loop && e.loopFix();
  let l = s;
  l.originalEvent && (l = l.originalEvent);
  let u = l.target;
  if (
    (n.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(u)) ||
    ("which" in l && l.which === 3) ||
    ("button" in l && l.button > 0) ||
    (r.isTouched && r.isMoved)
  )
    return;
  const d = !!n.noSwipingClass && n.noSwipingClass !== "",
    h = s.composedPath ? s.composedPath() : s.path;
  d && l.target && l.target.shadowRoot && h && (u = h[0]);
  const p = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
    m = !!(l.target && l.target.shadowRoot);
  if (n.noSwiping && (m ? Cn(p, u) : u.closest(p))) {
    e.allowClick = !0;
    return;
  }
  if (n.swipeHandler && !u.closest(n.swipeHandler)) return;
  (a.currentX = l.pageX), (a.currentY = l.pageY);
  const g = a.currentX,
    c = a.currentY,
    y = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
    f = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
  if (y && (g <= f || g >= i.innerWidth - f))
    if (y === "prevent") s.preventDefault();
    else return;
  Object.assign(r, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (a.startX = g),
    (a.startY = c),
    (r.touchStartTime = At()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    n.threshold > 0 && (r.allowThresholdMove = !1);
  let _ = !0;
  u.matches(r.focusableElements) &&
    ((_ = !1), u.nodeName === "SELECT" && (r.isTouched = !1)),
    t.activeElement &&
      t.activeElement.matches(r.focusableElements) &&
      t.activeElement !== u &&
      t.activeElement.blur();
  const v = _ && e.allowTouchMove && n.touchStartPreventDefault;
  (n.touchStartForcePreventDefault || v) &&
    !u.isContentEditable &&
    l.preventDefault(),
    e.params.freeMode &&
      e.params.freeMode.enabled &&
      e.freeMode &&
      e.animating &&
      !n.cssMode &&
      e.freeMode.onTouchStart(),
    e.emit("touchStart", l);
}
function Mn(s) {
  const e = Ue(),
    t = this,
    i = t.touchEventsData,
    { params: r, touches: n, rtlTranslate: a, enabled: o } = t;
  if (!o || (!r.simulateTouch && s.pointerType === "mouse")) return;
  let l = s;
  if ((l.originalEvent && (l = l.originalEvent), !i.isTouched)) {
    i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", l);
    return;
  }
  const u = i.evCache.findIndex((b) => b.pointerId === l.pointerId);
  u >= 0 && (i.evCache[u] = l);
  const d = i.evCache.length > 1 ? i.evCache[0] : l,
    h = d.pageX,
    p = d.pageY;
  if (l.preventedByNestedSwiper) {
    (n.startX = h), (n.startY = p);
    return;
  }
  if (!t.allowTouchMove) {
    l.target.matches(i.focusableElements) || (t.allowClick = !1),
      i.isTouched &&
        (Object.assign(n, {
          startX: h,
          startY: p,
          prevX: t.touches.currentX,
          prevY: t.touches.currentY,
          currentX: h,
          currentY: p,
        }),
        (i.touchStartTime = At()));
    return;
  }
  if (r.touchReleaseOnEdges && !r.loop) {
    if (t.isVertical()) {
      if (
        (p < n.startY && t.translate <= t.maxTranslate()) ||
        (p > n.startY && t.translate >= t.minTranslate())
      ) {
        (i.isTouched = !1), (i.isMoved = !1);
        return;
      }
    } else if (
      (h < n.startX && t.translate <= t.maxTranslate()) ||
      (h > n.startX && t.translate >= t.minTranslate())
    )
      return;
  }
  if (
    e.activeElement &&
    l.target === e.activeElement &&
    l.target.matches(i.focusableElements)
  ) {
    (i.isMoved = !0), (t.allowClick = !1);
    return;
  }
  if (
    (i.allowTouchCallbacks && t.emit("touchMove", l),
    l.targetTouches && l.targetTouches.length > 1)
  )
    return;
  (n.currentX = h), (n.currentY = p);
  const m = n.currentX - n.startX,
    g = n.currentY - n.startY;
  if (t.params.threshold && Math.sqrt(m ** 2 + g ** 2) < t.params.threshold)
    return;
  if (typeof i.isScrolling > "u") {
    let b;
    (t.isHorizontal() && n.currentY === n.startY) ||
    (t.isVertical() && n.currentX === n.startX)
      ? (i.isScrolling = !1)
      : m * m + g * g >= 25 &&
        ((b = (Math.atan2(Math.abs(g), Math.abs(m)) * 180) / Math.PI),
        (i.isScrolling = t.isHorizontal()
          ? b > r.touchAngle
          : 90 - b > r.touchAngle));
  }
  if (
    (i.isScrolling && t.emit("touchMoveOpposite", l),
    typeof i.startMoving > "u" &&
      (n.currentX !== n.startX || n.currentY !== n.startY) &&
      (i.startMoving = !0),
    i.isScrolling ||
      (t.zoom &&
        t.params.zoom &&
        t.params.zoom.enabled &&
        i.evCache.length > 1))
  ) {
    i.isTouched = !1;
    return;
  }
  if (!i.startMoving) return;
  (t.allowClick = !1),
    !r.cssMode && l.cancelable && l.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && l.stopPropagation();
  let c = t.isHorizontal() ? m : g,
    y = t.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
  r.oneWayMovement &&
    ((c = Math.abs(c) * (a ? 1 : -1)), (y = Math.abs(y) * (a ? 1 : -1))),
    (n.diff = c),
    (c *= r.touchRatio),
    a && ((c = -c), (y = -y));
  const f = t.touchesDirection;
  (t.swipeDirection = c > 0 ? "prev" : "next"),
    (t.touchesDirection = y > 0 ? "prev" : "next");
  const _ = t.params.loop && !r.cssMode;
  if (!i.isMoved) {
    if (
      (_ && t.loopFix({ direction: t.swipeDirection }),
      (i.startTranslate = t.getTranslate()),
      t.setTransition(0),
      t.animating)
    ) {
      const b = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      t.wrapperEl.dispatchEvent(b);
    }
    (i.allowMomentumBounce = !1),
      r.grabCursor &&
        (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
        t.setGrabCursor(!0),
      t.emit("sliderFirstMove", l);
  }
  let v;
  i.isMoved &&
    f !== t.touchesDirection &&
    _ &&
    Math.abs(c) >= 1 &&
    (t.loopFix({ direction: t.swipeDirection, setTranslate: !0 }), (v = !0)),
    t.emit("sliderMove", l),
    (i.isMoved = !0),
    (i.currentTranslate = c + i.startTranslate);
  let S = !0,
    x = r.resistanceRatio;
  if (
    (r.touchReleaseOnEdges && (x = 0),
    c > 0
      ? (_ &&
          !v &&
          i.currentTranslate >
            (r.centeredSlides
              ? t.minTranslate() - t.size / 2
              : t.minTranslate()) &&
          t.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        i.currentTranslate > t.minTranslate() &&
          ((S = !1),
          r.resistance &&
            (i.currentTranslate =
              t.minTranslate() -
              1 +
              (-t.minTranslate() + i.startTranslate + c) ** x)))
      : c < 0 &&
        (_ &&
          !v &&
          i.currentTranslate <
            (r.centeredSlides
              ? t.maxTranslate() + t.size / 2
              : t.maxTranslate()) &&
          t.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              t.slides.length -
              (r.slidesPerView === "auto"
                ? t.slidesPerViewDynamic()
                : Math.ceil(parseFloat(r.slidesPerView, 10))),
          }),
        i.currentTranslate < t.maxTranslate() &&
          ((S = !1),
          r.resistance &&
            (i.currentTranslate =
              t.maxTranslate() +
              1 -
              (t.maxTranslate() - i.startTranslate - c) ** x))),
    S && (l.preventedByNestedSwiper = !0),
    !t.allowSlideNext &&
      t.swipeDirection === "next" &&
      i.currentTranslate < i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !t.allowSlidePrev &&
      t.swipeDirection === "prev" &&
      i.currentTranslate > i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !t.allowSlidePrev &&
      !t.allowSlideNext &&
      (i.currentTranslate = i.startTranslate),
    r.threshold > 0)
  )
    if (Math.abs(c) > r.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        (i.allowThresholdMove = !0),
          (n.startX = n.currentX),
          (n.startY = n.currentY),
          (i.currentTranslate = i.startTranslate),
          (n.diff = t.isHorizontal()
            ? n.currentX - n.startX
            : n.currentY - n.startY);
        return;
      }
    } else {
      i.currentTranslate = i.startTranslate;
      return;
    }
  !r.followFinger ||
    r.cssMode ||
    (((r.freeMode && r.freeMode.enabled && t.freeMode) ||
      r.watchSlidesProgress) &&
      (t.updateActiveIndex(), t.updateSlidesClasses()),
    t.params.freeMode &&
      r.freeMode.enabled &&
      t.freeMode &&
      t.freeMode.onTouchMove(),
    t.updateProgress(i.currentTranslate),
    t.setTranslate(i.currentTranslate));
}
function On(s) {
  const e = this,
    t = e.touchEventsData,
    i = t.evCache.findIndex((v) => v.pointerId === s.pointerId);
  if (
    (i >= 0 && t.evCache.splice(i, 1),
    ["pointercancel", "pointerout", "pointerleave"].includes(s.type) &&
      !(
        s.type === "pointercancel" &&
        (e.browser.isSafari || e.browser.isWebView)
      ))
  )
    return;
  const {
    params: r,
    touches: n,
    rtlTranslate: a,
    slidesGrid: o,
    enabled: l,
  } = e;
  if (!l || (!r.simulateTouch && s.pointerType === "mouse")) return;
  let u = s;
  if (
    (u.originalEvent && (u = u.originalEvent),
    t.allowTouchCallbacks && e.emit("touchEnd", u),
    (t.allowTouchCallbacks = !1),
    !t.isTouched)
  ) {
    t.isMoved && r.grabCursor && e.setGrabCursor(!1),
      (t.isMoved = !1),
      (t.startMoving = !1);
    return;
  }
  r.grabCursor &&
    t.isMoved &&
    t.isTouched &&
    (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
    e.setGrabCursor(!1);
  const d = At(),
    h = d - t.touchStartTime;
  if (e.allowClick) {
    const v = u.path || (u.composedPath && u.composedPath());
    e.updateClickedSlide((v && v[0]) || u.target),
      e.emit("tap click", u),
      h < 300 &&
        d - t.lastClickTime < 300 &&
        e.emit("doubleTap doubleClick", u);
  }
  if (
    ((t.lastClickTime = At()),
    ai(() => {
      e.destroyed || (e.allowClick = !0);
    }),
    !t.isTouched ||
      !t.isMoved ||
      !e.swipeDirection ||
      n.diff === 0 ||
      t.currentTranslate === t.startTranslate)
  ) {
    (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
    return;
  }
  (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
  let p;
  if (
    (r.followFinger
      ? (p = a ? e.translate : -e.translate)
      : (p = -t.currentTranslate),
    r.cssMode)
  )
    return;
  if (e.params.freeMode && r.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: p });
    return;
  }
  let m = 0,
    g = e.slidesSizesGrid[0];
  for (
    let v = 0;
    v < o.length;
    v += v < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
  ) {
    const S = v < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    typeof o[v + S] < "u"
      ? p >= o[v] && p < o[v + S] && ((m = v), (g = o[v + S] - o[v]))
      : p >= o[v] && ((m = v), (g = o[o.length - 1] - o[o.length - 2]));
  }
  let c = null,
    y = null;
  r.rewind &&
    (e.isBeginning
      ? (y =
          e.params.virtual && e.params.virtual.enabled && e.virtual
            ? e.virtual.slides.length - 1
            : e.slides.length - 1)
      : e.isEnd && (c = 0));
  const f = (p - o[m]) / g,
    _ = m < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
  if (h > r.longSwipesMs) {
    if (!r.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" &&
      (f >= r.longSwipesRatio
        ? e.slideTo(r.rewind && e.isEnd ? c : m + _)
        : e.slideTo(m)),
      e.swipeDirection === "prev" &&
        (f > 1 - r.longSwipesRatio
          ? e.slideTo(m + _)
          : y !== null && f < 0 && Math.abs(f) > r.longSwipesRatio
          ? e.slideTo(y)
          : e.slideTo(m));
  } else {
    if (!r.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation &&
    (u.target === e.navigation.nextEl || u.target === e.navigation.prevEl)
      ? u.target === e.navigation.nextEl
        ? e.slideTo(m + _)
        : e.slideTo(m)
      : (e.swipeDirection === "next" && e.slideTo(c !== null ? c : m + _),
        e.swipeDirection === "prev" && e.slideTo(y !== null ? y : m));
  }
}
let Wi;
function qi() {
  const s = this,
    { params: e, el: t } = s;
  if (t && t.offsetWidth === 0) return;
  e.breakpoints && s.setBreakpoint();
  const { allowSlideNext: i, allowSlidePrev: r, snapGrid: n } = s,
    a = s.virtual && s.params.virtual.enabled;
  (s.allowSlideNext = !0),
    (s.allowSlidePrev = !0),
    s.updateSize(),
    s.updateSlides(),
    s.updateSlidesClasses();
  const o = a && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
  s.isEnd &&
  !s.isBeginning &&
  !s.params.centeredSlides &&
  !o
    ? s.slideTo(s.slides.length - 1, 0, !1, !0)
    : s.params.loop && !a
    ? s.slideToLoop(s.realIndex, 0, !1, !0)
    : s.slideTo(s.activeIndex, 0, !1, !0),
    s.autoplay &&
      s.autoplay.running &&
      s.autoplay.paused &&
      (clearTimeout(Wi),
      (Wi = setTimeout(() => {
        s.autoplay &&
          s.autoplay.running &&
          s.autoplay.paused &&
          s.autoplay.resume();
      }, 500))),
    (s.allowSlidePrev = r),
    (s.allowSlideNext = i),
    s.params.watchOverflow && n !== s.snapGrid && s.checkOverflow();
}
function Ln(s) {
  const e = this;
  e.enabled &&
    (e.allowClick ||
      (e.params.preventClicks && s.preventDefault(),
      e.params.preventClicksPropagation &&
        e.animating &&
        (s.stopPropagation(), s.stopImmediatePropagation())));
}
function kn() {
  const s = this,
    { wrapperEl: e, rtlTranslate: t, enabled: i } = s;
  if (!i) return;
  (s.previousTranslate = s.translate),
    s.isHorizontal()
      ? (s.translate = -e.scrollLeft)
      : (s.translate = -e.scrollTop),
    s.translate === 0 && (s.translate = 0),
    s.updateActiveIndex(),
    s.updateSlidesClasses();
  let r;
  const n = s.maxTranslate() - s.minTranslate();
  n === 0 ? (r = 0) : (r = (s.translate - s.minTranslate()) / n),
    r !== s.progress && s.updateProgress(t ? -s.translate : s.translate),
    s.emit("setTranslate", s.translate, !1);
}
function An(s) {
  const e = this;
  Pt(e, s.target), e.update();
}
let Yi = !1;
function zn() {}
const Sr = (s, e) => {
  const t = Ue(),
    { params: i, el: r, wrapperEl: n, device: a } = s,
    o = !!i.nested,
    l = e === "on" ? "addEventListener" : "removeEventListener",
    u = e;
  r[l]("pointerdown", s.onTouchStart, { passive: !1 }),
    t[l]("pointermove", s.onTouchMove, { passive: !1, capture: o }),
    t[l]("pointerup", s.onTouchEnd, { passive: !0 }),
    t[l]("pointercancel", s.onTouchEnd, { passive: !0 }),
    t[l]("pointerout", s.onTouchEnd, { passive: !0 }),
    t[l]("pointerleave", s.onTouchEnd, { passive: !0 }),
    (i.preventClicks || i.preventClicksPropagation) &&
      r[l]("click", s.onClick, !0),
    i.cssMode && n[l]("scroll", s.onScroll),
    i.updateOnWindowResize
      ? s[u](
          a.ios || a.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          qi,
          !0
        )
      : s[u]("observerUpdate", qi, !0),
    r[l]("load", s.onLoad, { capture: !0 });
};
function In() {
  const s = this,
    e = Ue(),
    { params: t } = s;
  (s.onTouchStart = Pn.bind(s)),
    (s.onTouchMove = Mn.bind(s)),
    (s.onTouchEnd = On.bind(s)),
    t.cssMode && (s.onScroll = kn.bind(s)),
    (s.onClick = Ln.bind(s)),
    (s.onLoad = An.bind(s)),
    Yi || (e.addEventListener("touchstart", zn), (Yi = !0)),
    Sr(s, "on");
}
function Dn() {
  Sr(this, "off");
}
const Rn = { attachEvents: In, detachEvents: Dn },
  Xi = (s, e) => s.grid && e.grid && e.grid.rows > 1;
function Bn() {
  const s = this,
    { realIndex: e, initialized: t, params: i, el: r } = s,
    n = i.breakpoints;
  if (!n || (n && Object.keys(n).length === 0)) return;
  const a = s.getBreakpoint(n, s.params.breakpointsBase, s.el);
  if (!a || s.currentBreakpoint === a) return;
  const l = (a in n ? n[a] : void 0) || s.originalParams,
    u = Xi(s, i),
    d = Xi(s, l),
    h = i.enabled;
  u && !d
    ? (r.classList.remove(
        `${i.containerModifierClass}grid`,
        `${i.containerModifierClass}grid-column`
      ),
      s.emitContainerClasses())
    : !u &&
      d &&
      (r.classList.add(`${i.containerModifierClass}grid`),
      ((l.grid.fill && l.grid.fill === "column") ||
        (!l.grid.fill && i.grid.fill === "column")) &&
        r.classList.add(`${i.containerModifierClass}grid-column`),
      s.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((c) => {
      const y = i[c] && i[c].enabled,
        f = l[c] && l[c].enabled;
      y && !f && s[c].disable(), !y && f && s[c].enable();
    });
  const p = l.direction && l.direction !== i.direction,
    m = i.loop && (l.slidesPerView !== i.slidesPerView || p);
  p && t && s.changeDirection(), ie(s.params, l);
  const g = s.params.enabled;
  Object.assign(s, {
    allowTouchMove: s.params.allowTouchMove,
    allowSlideNext: s.params.allowSlideNext,
    allowSlidePrev: s.params.allowSlidePrev,
  }),
    h && !g ? s.disable() : !h && g && s.enable(),
    (s.currentBreakpoint = a),
    s.emit("_beforeBreakpoint", l),
    m && t && (s.loopDestroy(), s.loopCreate(e), s.updateSlides()),
    s.emit("breakpoint", l);
}
function Fn(s, e = "window", t) {
  if (!s || (e === "container" && !t)) return;
  let i = !1;
  const r = oe(),
    n = e === "window" ? r.innerHeight : t.clientHeight,
    a = Object.keys(s).map((o) => {
      if (typeof o == "string" && o.indexOf("@") === 0) {
        const l = parseFloat(o.substr(1));
        return { value: n * l, point: o };
      }
      return { value: o, point: o };
    });
  a.sort((o, l) => parseInt(o.value, 10) - parseInt(l.value, 10));
  for (let o = 0; o < a.length; o += 1) {
    const { point: l, value: u } = a[o];
    e === "window"
      ? r.matchMedia(`(min-width: ${u}px)`).matches && (i = l)
      : u <= t.clientWidth && (i = l);
  }
  return i || "max";
}
const Vn = { setBreakpoint: Bn, getBreakpoint: Fn };
function $n(s, e) {
  const t = [];
  return (
    s.forEach((i) => {
      typeof i == "object"
        ? Object.keys(i).forEach((r) => {
            i[r] && t.push(e + r);
          })
        : typeof i == "string" && t.push(e + i);
    }),
    t
  );
}
function Nn() {
  const s = this,
    { classNames: e, params: t, rtl: i, el: r, device: n } = s,
    a = $n(
      [
        "initialized",
        t.direction,
        { "free-mode": s.params.freeMode && t.freeMode.enabled },
        { autoheight: t.autoHeight },
        { rtl: i },
        { grid: t.grid && t.grid.rows > 1 },
        {
          "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column",
        },
        { android: n.android },
        { ios: n.ios },
        { "css-mode": t.cssMode },
        { centered: t.cssMode && t.centeredSlides },
        { "watch-progress": t.watchSlidesProgress },
      ],
      t.containerModifierClass
    );
  e.push(...a), r.classList.add(...e), s.emitContainerClasses();
}
function Gn() {
  const s = this,
    { el: e, classNames: t } = s;
  e.classList.remove(...t), s.emitContainerClasses();
}
const Hn = { addClasses: Nn, removeClasses: Gn };
function Wn() {
  const s = this,
    { isLocked: e, params: t } = s,
    { slidesOffsetBefore: i } = t;
  if (i) {
    const r = s.slides.length - 1,
      n = s.slidesGrid[r] + s.slidesSizesGrid[r] + i * 2;
    s.isLocked = s.size > n;
  } else s.isLocked = s.snapGrid.length === 1;
  t.allowSlideNext === !0 && (s.allowSlideNext = !s.isLocked),
    t.allowSlidePrev === !0 && (s.allowSlidePrev = !s.isLocked),
    e && e !== s.isLocked && (s.isEnd = !1),
    e !== s.isLocked && s.emit(s.isLocked ? "lock" : "unlock");
}
const qn = { checkOverflow: Wn },
  Ui = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Yn(s, e) {
  return function (i = {}) {
    const r = Object.keys(i)[0],
      n = i[r];
    if (typeof n != "object" || n === null) {
      ie(e, i);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
        s[r] === !0 &&
        (s[r] = { auto: !0 }),
      !(r in s && "enabled" in n))
    ) {
      ie(e, i);
      return;
    }
    s[r] === !0 && (s[r] = { enabled: !0 }),
      typeof s[r] == "object" && !("enabled" in s[r]) && (s[r].enabled = !0),
      s[r] || (s[r] = { enabled: !1 }),
      ie(e, i);
  };
}
const jt = {
    eventsEmitter: Gs,
    update: Js,
    translate: an,
    transition: dn,
    slide: vn,
    loop: bn,
    grabCursor: En,
    events: Rn,
    breakpoints: Vn,
    checkOverflow: qn,
    classes: Hn,
  },
  Kt = {};
class te {
  constructor(...e) {
    let t, i;
    e.length === 1 &&
    e[0].constructor &&
    Object.prototype.toString.call(e[0]).slice(8, -1) === "Object"
      ? (i = e[0])
      : ([t, i] = e),
      i || (i = {}),
      (i = ie({}, i)),
      t && !i.el && (i.el = t);
    const r = Ue();
    if (
      i.el &&
      typeof i.el == "string" &&
      r.querySelectorAll(i.el).length > 1
    ) {
      const l = [];
      return (
        r.querySelectorAll(i.el).forEach((u) => {
          const d = ie({}, i, { el: u });
          l.push(new te(d));
        }),
        l
      );
    }
    const n = this;
    (n.__swiper__ = !0),
      (n.support = vr()),
      (n.device = Bs({ userAgent: i.userAgent })),
      (n.browser = Vs()),
      (n.eventsListeners = {}),
      (n.eventsAnyListeners = []),
      (n.modules = [...n.__modules__]),
      i.modules && Array.isArray(i.modules) && n.modules.push(...i.modules);
    const a = {};
    n.modules.forEach((l) => {
      l({
        params: i,
        swiper: n,
        extendParams: Yn(i, a),
        on: n.on.bind(n),
        once: n.once.bind(n),
        off: n.off.bind(n),
        emit: n.emit.bind(n),
      });
    });
    const o = ie({}, Ui, a);
    return (
      (n.params = ie({}, o, Kt, i)),
      (n.originalParams = ie({}, n.params)),
      (n.passedParams = ie({}, i)),
      n.params &&
        n.params.on &&
        Object.keys(n.params.on).forEach((l) => {
          n.on(l, n.params.on[l]);
        }),
      n.params && n.params.onAny && n.onAny(n.params.onAny),
      Object.assign(n, {
        enabled: n.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return n.params.direction === "horizontal";
        },
        isVertical() {
          return n.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: n.params.allowSlideNext,
        allowSlidePrev: n.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: n.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          evCache: [],
        },
        allowClick: !0,
        allowTouchMove: n.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      n.emit("_swiper"),
      n.params.init && n.init(),
      n
    );
  }
  getSlideIndex(e) {
    const { slidesEl: t, params: i } = this,
      r = ve(t, `.${i.slideClass}, swiper-slide`),
      n = zt(r[0]);
    return zt(e) - n;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(
      this.slides.filter(
        (t) => t.getAttribute("data-swiper-slide-index") * 1 === e
      )[0]
    );
  }
  recalcSlides() {
    const e = this,
      { slidesEl: t, params: i } = e;
    e.slides = ve(t, `.${i.slideClass}, swiper-slide`);
  }
  enable() {
    const e = this;
    e.enabled ||
      ((e.enabled = !0),
      e.params.grabCursor && e.setGrabCursor(),
      e.emit("enable"));
  }
  disable() {
    const e = this;
    e.enabled &&
      ((e.enabled = !1),
      e.params.grabCursor && e.unsetGrabCursor(),
      e.emit("disable"));
  }
  setProgress(e, t) {
    const i = this;
    e = Math.min(Math.max(e, 0), 1);
    const r = i.minTranslate(),
      a = (i.maxTranslate() - r) * e + r;
    i.translateTo(a, typeof t > "u" ? 0 : t),
      i.updateActiveIndex(),
      i.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = e.el.className
      .split(" ")
      .filter(
        (i) =>
          i.indexOf("swiper") === 0 ||
          i.indexOf(e.params.containerModifierClass) === 0
      );
    e.emit("_containerClasses", t.join(" "));
  }
  getSlideClasses(e) {
    const t = this;
    return t.destroyed
      ? ""
      : e.className
          .split(" ")
          .filter(
            (i) =>
              i.indexOf("swiper-slide") === 0 ||
              i.indexOf(t.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = [];
    e.slides.forEach((i) => {
      const r = e.getSlideClasses(i);
      t.push({ slideEl: i, classNames: r }), e.emit("_slideClass", i, r);
    }),
      e.emit("_slideClasses", t);
  }
  slidesPerViewDynamic(e = "current", t = !1) {
    const i = this,
      {
        params: r,
        slides: n,
        slidesGrid: a,
        slidesSizesGrid: o,
        size: l,
        activeIndex: u,
      } = i;
    let d = 1;
    if (r.centeredSlides) {
      let h = n[u].swiperSlideSize,
        p;
      for (let m = u + 1; m < n.length; m += 1)
        n[m] &&
          !p &&
          ((h += n[m].swiperSlideSize), (d += 1), h > l && (p = !0));
      for (let m = u - 1; m >= 0; m -= 1)
        n[m] &&
          !p &&
          ((h += n[m].swiperSlideSize), (d += 1), h > l && (p = !0));
    } else if (e === "current")
      for (let h = u + 1; h < n.length; h += 1)
        (t ? a[h] + o[h] - a[u] < l : a[h] - a[u] < l) && (d += 1);
    else for (let h = u - 1; h >= 0; h -= 1) a[u] - a[h] < l && (d += 1);
    return d;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const { snapGrid: t, params: i } = e;
    i.breakpoints && e.setBreakpoint(),
      [...e.el.querySelectorAll('[loading="lazy"]')].forEach((a) => {
        a.complete && Pt(e, a);
      }),
      e.updateSize(),
      e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses();
    function r() {
      const a = e.rtlTranslate ? e.translate * -1 : e.translate,
        o = Math.min(Math.max(a, e.maxTranslate()), e.minTranslate());
      e.setTranslate(o), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let n;
    e.params.freeMode && e.params.freeMode.enabled
      ? (r(), e.params.autoHeight && e.updateAutoHeight())
      : ((e.params.slidesPerView === "auto" || e.params.slidesPerView > 1) &&
        e.isEnd &&
        !e.params.centeredSlides
          ? (n = e.slideTo(e.slides.length - 1, 0, !1, !0))
          : (n = e.slideTo(e.activeIndex, 0, !1, !0)),
        n || r()),
      i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
      e.emit("update");
  }
  changeDirection(e, t = !0) {
    const i = this,
      r = i.params.direction;
    return (
      e || (e = r === "horizontal" ? "vertical" : "horizontal"),
      e === r ||
        (e !== "horizontal" && e !== "vertical") ||
        (i.el.classList.remove(`${i.params.containerModifierClass}${r}`),
        i.el.classList.add(`${i.params.containerModifierClass}${e}`),
        i.emitContainerClasses(),
        (i.params.direction = e),
        i.slides.forEach((n) => {
          e === "vertical" ? (n.style.width = "") : (n.style.height = "");
        }),
        i.emit("changeDirection"),
        t && i.update()),
      i
    );
  }
  changeLanguageDirection(e) {
    const t = this;
    (t.rtl && e === "rtl") ||
      (!t.rtl && e === "ltr") ||
      ((t.rtl = e === "rtl"),
      (t.rtlTranslate = t.params.direction === "horizontal" && t.rtl),
      t.rtl
        ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
          (t.el.dir = "rtl"))
        : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
          (t.el.dir = "ltr")),
      t.update());
  }
  mount(e) {
    const t = this;
    if (t.mounted) return !0;
    let i = e || t.params.el;
    if ((typeof i == "string" && (i = document.querySelector(i)), !i))
      return !1;
    (i.swiper = t), i.shadowEl && (t.isElement = !0);
    const r = () =>
      `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let a = (() =>
      i && i.shadowRoot && i.shadowRoot.querySelector
        ? i.shadowRoot.querySelector(r())
        : ve(i, r())[0])();
    return (
      !a &&
        t.params.createElements &&
        ((a = gr("div", t.params.wrapperClass)),
        i.append(a),
        ve(i, `.${t.params.slideClass}`).forEach((o) => {
          a.append(o);
        })),
      Object.assign(t, {
        el: i,
        wrapperEl: a,
        slidesEl: t.isElement ? i : a,
        mounted: !0,
        rtl: i.dir.toLowerCase() === "rtl" || Le(i, "direction") === "rtl",
        rtlTranslate:
          t.params.direction === "horizontal" &&
          (i.dir.toLowerCase() === "rtl" || Le(i, "direction") === "rtl"),
        wrongRTL: Le(a, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(e) {
    const t = this;
    return (
      t.initialized ||
        t.mount(e) === !1 ||
        (t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled
          ? t.slideTo(
              t.params.initialSlide + t.virtual.slidesBefore,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            )
          : t.slideTo(
              t.params.initialSlide,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            ),
        t.params.loop && t.loopCreate(),
        t.attachEvents(),
        [...t.el.querySelectorAll('[loading="lazy"]')].forEach((r) => {
          r.complete
            ? Pt(t, r)
            : r.addEventListener("load", (n) => {
                Pt(t, n.target);
              });
        }),
        li(t),
        (t.initialized = !0),
        li(t),
        t.emit("init"),
        t.emit("afterInit")),
      t
    );
  }
  destroy(e = !0, t = !0) {
    const i = this,
      { params: r, el: n, wrapperEl: a, slides: o } = i;
    return (
      typeof i.params > "u" ||
        i.destroyed ||
        (i.emit("beforeDestroy"),
        (i.initialized = !1),
        i.detachEvents(),
        r.loop && i.loopDestroy(),
        t &&
          (i.removeClasses(),
          n.removeAttribute("style"),
          a.removeAttribute("style"),
          o &&
            o.length &&
            o.forEach((l) => {
              l.classList.remove(
                r.slideVisibleClass,
                r.slideActiveClass,
                r.slideNextClass,
                r.slidePrevClass
              ),
                l.removeAttribute("style"),
                l.removeAttribute("data-swiper-slide-index");
            })),
        i.emit("destroy"),
        Object.keys(i.eventsListeners).forEach((l) => {
          i.off(l);
        }),
        e !== !1 && ((i.el.swiper = null), Os(i)),
        (i.destroyed = !0)),
      null
    );
  }
  static extendDefaults(e) {
    ie(Kt, e);
  }
  static get extendedDefaults() {
    return Kt;
  }
  static get defaults() {
    return Ui;
  }
  static installModule(e) {
    te.prototype.__modules__ || (te.prototype.__modules__ = []);
    const t = te.prototype.__modules__;
    typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
  }
  static use(e) {
    return Array.isArray(e)
      ? (e.forEach((t) => te.installModule(t)), te)
      : (te.installModule(e), te);
  }
}
Object.keys(jt).forEach((s) => {
  Object.keys(jt[s]).forEach((e) => {
    te.prototype[e] = jt[s][e];
  });
});
te.use([$s, Ns]);
function xr(s, e, t, i) {
  return (
    s.params.createElements &&
      Object.keys(i).forEach((r) => {
        if (!t[r] && t.auto === !0) {
          let n = ve(s.el, `.${i[r]}`)[0];
          n || ((n = gr("div", i[r])), (n.className = i[r]), s.el.append(n)),
            (t[r] = n),
            (e[r] = n);
        }
      }),
    t
  );
}
function Xn({ swiper: s, extendParams: e, on: t, emit: i }) {
  e({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (s.navigation = { nextEl: null, prevEl: null });
  const r = (g) => (Array.isArray(g) || (g = [g].filter((c) => !!c)), g);
  function n(g) {
    let c;
    return g &&
      typeof g == "string" &&
      s.isElement &&
      ((c = s.el.shadowRoot.querySelector(g)), c)
      ? c
      : (g &&
          (typeof g == "string" && (c = [...document.querySelectorAll(g)]),
          s.params.uniqueNavElements &&
            typeof g == "string" &&
            c.length > 1 &&
            s.el.querySelectorAll(g).length === 1 &&
            (c = s.el.querySelector(g))),
        g && !c ? g : c);
  }
  function a(g, c) {
    const y = s.params.navigation;
    (g = r(g)),
      g.forEach((f) => {
        f &&
          (f.classList[c ? "add" : "remove"](...y.disabledClass.split(" ")),
          f.tagName === "BUTTON" && (f.disabled = c),
          s.params.watchOverflow &&
            s.enabled &&
            f.classList[s.isLocked ? "add" : "remove"](y.lockClass));
      });
  }
  function o() {
    const { nextEl: g, prevEl: c } = s.navigation;
    if (s.params.loop) {
      a(c, !1), a(g, !1);
      return;
    }
    a(c, s.isBeginning && !s.params.rewind), a(g, s.isEnd && !s.params.rewind);
  }
  function l(g) {
    g.preventDefault(),
      !(s.isBeginning && !s.params.loop && !s.params.rewind) &&
        (s.slidePrev(), i("navigationPrev"));
  }
  function u(g) {
    g.preventDefault(),
      !(s.isEnd && !s.params.loop && !s.params.rewind) &&
        (s.slideNext(), i("navigationNext"));
  }
  function d() {
    const g = s.params.navigation;
    if (
      ((s.params.navigation = xr(
        s,
        s.originalParams.navigation,
        s.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(g.nextEl || g.prevEl))
    )
      return;
    let c = n(g.nextEl),
      y = n(g.prevEl);
    Object.assign(s.navigation, { nextEl: c, prevEl: y }),
      (c = r(c)),
      (y = r(y));
    const f = (_, v) => {
      _ && _.addEventListener("click", v === "next" ? u : l),
        !s.enabled && _ && _.classList.add(...g.lockClass.split(" "));
    };
    c.forEach((_) => f(_, "next")), y.forEach((_) => f(_, "prev"));
  }
  function h() {
    let { nextEl: g, prevEl: c } = s.navigation;
    (g = r(g)), (c = r(c));
    const y = (f, _) => {
      f.removeEventListener("click", _ === "next" ? u : l),
        f.classList.remove(...s.params.navigation.disabledClass.split(" "));
    };
    g.forEach((f) => y(f, "next")), c.forEach((f) => y(f, "prev"));
  }
  t("init", () => {
    s.params.navigation.enabled === !1 ? m() : (d(), o());
  }),
    t("toEdge fromEdge lock unlock", () => {
      o();
    }),
    t("destroy", () => {
      h();
    }),
    t("enable disable", () => {
      let { nextEl: g, prevEl: c } = s.navigation;
      (g = r(g)),
        (c = r(c)),
        [...g, ...c]
          .filter((y) => !!y)
          .forEach((y) =>
            y.classList[s.enabled ? "remove" : "add"](
              s.params.navigation.lockClass
            )
          );
    }),
    t("click", (g, c) => {
      let { nextEl: y, prevEl: f } = s.navigation;
      (y = r(y)), (f = r(f));
      const _ = c.target;
      if (s.params.navigation.hideOnClick && !f.includes(_) && !y.includes(_)) {
        if (
          s.pagination &&
          s.params.pagination &&
          s.params.pagination.clickable &&
          (s.pagination.el === _ || s.pagination.el.contains(_))
        )
          return;
        let v;
        y.length
          ? (v = y[0].classList.contains(s.params.navigation.hiddenClass))
          : f.length &&
            (v = f[0].classList.contains(s.params.navigation.hiddenClass)),
          i(v === !0 ? "navigationShow" : "navigationHide"),
          [...y, ...f]
            .filter((S) => !!S)
            .forEach((S) =>
              S.classList.toggle(s.params.navigation.hiddenClass)
            );
      }
    });
  const p = () => {
      s.el.classList.remove(
        ...s.params.navigation.navigationDisabledClass.split(" ")
      ),
        d(),
        o();
    },
    m = () => {
      s.el.classList.add(
        ...s.params.navigation.navigationDisabledClass.split(" ")
      ),
        h();
    };
  Object.assign(s.navigation, {
    enable: p,
    disable: m,
    update: o,
    init: d,
    destroy: h,
  });
}
function ut(s = "") {
  return `.${s
    .trim()
    .replace(/([\.:!+\/])/g, "\\$1")
    .replace(/ /g, ".")}`;
}
function Un({ swiper: s, extendParams: e, on: t, emit: i }) {
  const r = "swiper-pagination";
  e({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (f) => f,
      formatFractionTotal: (f) => f,
      bulletClass: `${r}-bullet`,
      bulletActiveClass: `${r}-bullet-active`,
      modifierClass: `${r}-`,
      currentClass: `${r}-current`,
      totalClass: `${r}-total`,
      hiddenClass: `${r}-hidden`,
      progressbarFillClass: `${r}-progressbar-fill`,
      progressbarOppositeClass: `${r}-progressbar-opposite`,
      clickableClass: `${r}-clickable`,
      lockClass: `${r}-lock`,
      horizontalClass: `${r}-horizontal`,
      verticalClass: `${r}-vertical`,
      paginationDisabledClass: `${r}-disabled`,
    },
  }),
    (s.pagination = { el: null, bullets: [] });
  let n,
    a = 0;
  const o = (f) => (Array.isArray(f) || (f = [f].filter((_) => !!_)), f);
  function l() {
    return (
      !s.params.pagination.el ||
      !s.pagination.el ||
      (Array.isArray(s.pagination.el) && s.pagination.el.length === 0)
    );
  }
  function u(f, _) {
    const { bulletActiveClass: v } = s.params.pagination;
    f &&
      ((f = f[`${_ === "prev" ? "previous" : "next"}ElementSibling`]),
      f &&
        (f.classList.add(`${v}-${_}`),
        (f = f[`${_ === "prev" ? "previous" : "next"}ElementSibling`]),
        f && f.classList.add(`${v}-${_}-${_}`)));
  }
  function d(f) {
    const _ = f.target.closest(ut(s.params.pagination.bulletClass));
    if (!_) return;
    f.preventDefault();
    const v = zt(_) * s.params.slidesPerGroup;
    if (s.params.loop) {
      if (s.realIndex === v) return;
      (v < s.loopedSlides || v > s.slides.length - s.loopedSlides) &&
        s.loopFix({
          direction: v < s.loopedSlides ? "prev" : "next",
          activeSlideIndex: v,
          slideTo: !1,
        }),
        s.slideToLoop(v);
    } else s.slideTo(v);
  }
  function h() {
    const f = s.rtl,
      _ = s.params.pagination;
    if (l()) return;
    let v = s.pagination.el;
    v = o(v);
    let S;
    const x =
        s.virtual && s.params.virtual.enabled
          ? s.virtual.slides.length
          : s.slides.length,
      b = s.params.loop
        ? Math.ceil(x / s.params.slidesPerGroup)
        : s.snapGrid.length;
    if (
      (s.params.loop
        ? (S =
            s.params.slidesPerGroup > 1
              ? Math.floor(s.realIndex / s.params.slidesPerGroup)
              : s.realIndex)
        : typeof s.snapIndex < "u"
        ? (S = s.snapIndex)
        : (S = s.activeIndex || 0),
      _.type === "bullets" &&
        s.pagination.bullets &&
        s.pagination.bullets.length > 0)
    ) {
      const w = s.pagination.bullets;
      let C, T, O;
      if (
        (_.dynamicBullets &&
          ((n = oi(w[0], s.isHorizontal() ? "width" : "height", !0)),
          v.forEach((E) => {
            E.style[s.isHorizontal() ? "width" : "height"] = `${
              n * (_.dynamicMainBullets + 4)
            }px`;
          }),
          _.dynamicMainBullets > 1 &&
            s.previousIndex !== void 0 &&
            ((a += S - (s.previousIndex || 0)),
            a > _.dynamicMainBullets - 1
              ? (a = _.dynamicMainBullets - 1)
              : a < 0 && (a = 0)),
          (C = Math.max(S - a, 0)),
          (T = C + (Math.min(w.length, _.dynamicMainBullets) - 1)),
          (O = (T + C) / 2)),
        w.forEach((E) => {
          const P = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (M) => `${_.bulletActiveClass}${M}`
            ),
          ]
            .map((M) =>
              typeof M == "string" && M.includes(" ") ? M.split(" ") : M
            )
            .flat();
          E.classList.remove(...P);
        }),
        v.length > 1)
      )
        w.forEach((E) => {
          const P = zt(E);
          P === S && E.classList.add(..._.bulletActiveClass.split(" ")),
            _.dynamicBullets &&
              (P >= C &&
                P <= T &&
                E.classList.add(...`${_.bulletActiveClass}-main`.split(" ")),
              P === C && u(E, "prev"),
              P === T && u(E, "next"));
        });
      else {
        const E = w[S];
        if (
          (E && E.classList.add(..._.bulletActiveClass.split(" ")),
          _.dynamicBullets)
        ) {
          const P = w[C],
            M = w[T];
          for (let L = C; L <= T; L += 1)
            w[L] &&
              w[L].classList.add(...`${_.bulletActiveClass}-main`.split(" "));
          u(P, "prev"), u(M, "next");
        }
      }
      if (_.dynamicBullets) {
        const E = Math.min(w.length, _.dynamicMainBullets + 4),
          P = (n * E - n) / 2 - O * n,
          M = f ? "right" : "left";
        w.forEach((L) => {
          L.style[s.isHorizontal() ? M : "top"] = `${P}px`;
        });
      }
    }
    v.forEach((w, C) => {
      if (
        (_.type === "fraction" &&
          (w.querySelectorAll(ut(_.currentClass)).forEach((T) => {
            T.textContent = _.formatFractionCurrent(S + 1);
          }),
          w.querySelectorAll(ut(_.totalClass)).forEach((T) => {
            T.textContent = _.formatFractionTotal(b);
          })),
        _.type === "progressbar")
      ) {
        let T;
        _.progressbarOpposite
          ? (T = s.isHorizontal() ? "vertical" : "horizontal")
          : (T = s.isHorizontal() ? "horizontal" : "vertical");
        const O = (S + 1) / b;
        let E = 1,
          P = 1;
        T === "horizontal" ? (E = O) : (P = O),
          w.querySelectorAll(ut(_.progressbarFillClass)).forEach((M) => {
            (M.style.transform = `translate3d(0,0,0) scaleX(${E}) scaleY(${P})`),
              (M.style.transitionDuration = `${s.params.speed}ms`);
          });
      }
      _.type === "custom" && _.renderCustom
        ? ((w.innerHTML = _.renderCustom(s, S + 1, b)),
          C === 0 && i("paginationRender", w))
        : (C === 0 && i("paginationRender", w), i("paginationUpdate", w)),
        s.params.watchOverflow &&
          s.enabled &&
          w.classList[s.isLocked ? "add" : "remove"](_.lockClass);
    });
  }
  function p() {
    const f = s.params.pagination;
    if (l()) return;
    const _ =
      s.virtual && s.params.virtual.enabled
        ? s.virtual.slides.length
        : s.slides.length;
    let v = s.pagination.el;
    v = o(v);
    let S = "";
    if (f.type === "bullets") {
      let x = s.params.loop
        ? Math.ceil(_ / s.params.slidesPerGroup)
        : s.snapGrid.length;
      s.params.freeMode && s.params.freeMode.enabled && x > _ && (x = _);
      for (let b = 0; b < x; b += 1)
        f.renderBullet
          ? (S += f.renderBullet.call(s, b, f.bulletClass))
          : (S += `<${f.bulletElement} class="${f.bulletClass}"></${f.bulletElement}>`);
    }
    f.type === "fraction" &&
      (f.renderFraction
        ? (S = f.renderFraction.call(s, f.currentClass, f.totalClass))
        : (S = `<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`)),
      f.type === "progressbar" &&
        (f.renderProgressbar
          ? (S = f.renderProgressbar.call(s, f.progressbarFillClass))
          : (S = `<span class="${f.progressbarFillClass}"></span>`)),
      (s.pagination.bullets = []),
      v.forEach((x) => {
        f.type !== "custom" && (x.innerHTML = S || ""),
          f.type === "bullets" &&
            s.pagination.bullets.push(...x.querySelectorAll(ut(f.bulletClass)));
      }),
      f.type !== "custom" && i("paginationRender", v[0]);
  }
  function m() {
    s.params.pagination = xr(
      s,
      s.originalParams.pagination,
      s.params.pagination,
      { el: "swiper-pagination" }
    );
    const f = s.params.pagination;
    if (!f.el) return;
    let _;
    typeof f.el == "string" &&
      s.isElement &&
      (_ = s.el.shadowRoot.querySelector(f.el)),
      !_ &&
        typeof f.el == "string" &&
        (_ = [...document.querySelectorAll(f.el)]),
      _ || (_ = f.el),
      !(!_ || _.length === 0) &&
        (s.params.uniqueNavElements &&
          typeof f.el == "string" &&
          Array.isArray(_) &&
          _.length > 1 &&
          ((_ = [...s.el.querySelectorAll(f.el)]),
          _.length > 1 &&
            (_ = _.filter((v) => _r(v, ".swiper")[0] === s.el)[0])),
        Array.isArray(_) && _.length === 1 && (_ = _[0]),
        Object.assign(s.pagination, { el: _ }),
        (_ = o(_)),
        _.forEach((v) => {
          f.type === "bullets" &&
            f.clickable &&
            v.classList.add(f.clickableClass),
            v.classList.add(f.modifierClass + f.type),
            v.classList.add(
              s.isHorizontal() ? f.horizontalClass : f.verticalClass
            ),
            f.type === "bullets" &&
              f.dynamicBullets &&
              (v.classList.add(`${f.modifierClass}${f.type}-dynamic`),
              (a = 0),
              f.dynamicMainBullets < 1 && (f.dynamicMainBullets = 1)),
            f.type === "progressbar" &&
              f.progressbarOpposite &&
              v.classList.add(f.progressbarOppositeClass),
            f.clickable && v.addEventListener("click", d),
            s.enabled || v.classList.add(f.lockClass);
        }));
  }
  function g() {
    const f = s.params.pagination;
    if (l()) return;
    let _ = s.pagination.el;
    _ &&
      ((_ = o(_)),
      _.forEach((v) => {
        v.classList.remove(f.hiddenClass),
          v.classList.remove(f.modifierClass + f.type),
          v.classList.remove(
            s.isHorizontal() ? f.horizontalClass : f.verticalClass
          ),
          f.clickable && v.removeEventListener("click", d);
      })),
      s.pagination.bullets &&
        s.pagination.bullets.forEach((v) =>
          v.classList.remove(...f.bulletActiveClass.split(" "))
        );
  }
  t("init", () => {
    s.params.pagination.enabled === !1 ? y() : (m(), p(), h());
  }),
    t("activeIndexChange", () => {
      typeof s.snapIndex > "u" && h();
    }),
    t("snapIndexChange", () => {
      h();
    }),
    t("snapGridLengthChange", () => {
      p(), h();
    }),
    t("destroy", () => {
      g();
    }),
    t("enable disable", () => {
      let { el: f } = s.pagination;
      f &&
        ((f = o(f)),
        f.forEach((_) =>
          _.classList[s.enabled ? "remove" : "add"](
            s.params.pagination.lockClass
          )
        ));
    }),
    t("lock unlock", () => {
      h();
    }),
    t("click", (f, _) => {
      const v = _.target;
      let { el: S } = s.pagination;
      if (
        (Array.isArray(S) || (S = [S].filter((x) => !!x)),
        s.params.pagination.el &&
          s.params.pagination.hideOnClick &&
          S &&
          S.length > 0 &&
          !v.classList.contains(s.params.pagination.bulletClass))
      ) {
        if (
          s.navigation &&
          ((s.navigation.nextEl && v === s.navigation.nextEl) ||
            (s.navigation.prevEl && v === s.navigation.prevEl))
        )
          return;
        const x = S[0].classList.contains(s.params.pagination.hiddenClass);
        i(x === !0 ? "paginationShow" : "paginationHide"),
          S.forEach((b) => b.classList.toggle(s.params.pagination.hiddenClass));
      }
    });
  const c = () => {
      s.el.classList.remove(s.params.pagination.paginationDisabledClass);
      let { el: f } = s.pagination;
      f &&
        ((f = o(f)),
        f.forEach((_) =>
          _.classList.remove(s.params.pagination.paginationDisabledClass)
        )),
        m(),
        p(),
        h();
    },
    y = () => {
      s.el.classList.add(s.params.pagination.paginationDisabledClass);
      let { el: f } = s.pagination;
      f &&
        ((f = o(f)),
        f.forEach((_) =>
          _.classList.add(s.params.pagination.paginationDisabledClass)
        )),
        g();
    };
  Object.assign(s.pagination, {
    enable: c,
    disable: y,
    render: p,
    update: h,
    init: m,
    destroy: g,
  });
}
te.use([Xn, Un]);
function jn() {
  const s = document.getElementById("modal"),
    e = document.querySelectorAll(".c-jumping .c-card"),
    t = document.querySelector(".modal__close");
  function i(r) {
    document.querySelector("main").removeAttribute("hidden"),
      s.classList.add("is-modal-open"),
      document.getElementById(r).classList.add("is-active"),
      new te(`#${r} .swiper`, {
        speed: 400,
        spaceBetween: 0,
        navigation: {
          nextEl: ".record__slider .swiper-button-next",
          prevEl: ".record__slider .swiper-button-prev",
        },
        pagination: { el: ".record__slider .swiper-pagination" },
      });
  }
  t.addEventListener("click", function () {
    s.classList.remove("is-modal-open"),
      (s.scrollTop = 0),
      s.querySelector(".is-active").classList.remove("is-active");
  }),
    e.forEach((r) => {
      // var frameId = `video_${r.dataset.modal}`;
      // var frame;
      // r.addEventListener("click", () => i(r.dataset.modal)),
      // var tag = document.createElement("script");
      // tag.src = "https://www.youtube.com/iframe_api";
      // var firstScriptTag = document.getElementsByTagName("script")[0];
      // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      // function onYouTubeIframeAPIReady() {
      //   frame = new YT.Player(frameId, {
      //     events: {
      //       onReady: onPlayerReady,
      //     },
      //     playerVars: {},
      //   });
      // }

      // r.addEventListener("mouseover", () => {
      //   r.querySelector("img").style.opacity = 0;
      //   function onPlayerReady(event) {
      //     frame.playVideo();
      //   }
      // });
      // r.addEventListener("mouseout", () => {
      //   r.querySelector("img").style.opacity = 1;
      //   function onPlayerReady(event) {
      //     frame.stopVideo();
      //   }
      // });
      // asdfasdfasdfasdfasdf
      r.addEventListener("mouseover", () => {
        r.querySelector("img").style.opacity = 0;
        document.getElementById(`video_${r.dataset.modal}`).src +=
          "&autoplay=1";
      }),
        r.addEventListener("mouseout", () => {
          r.querySelector("img").style.opacity = 1;
          var frame = document.getElementById(`video_${r.dataset.model}`);
          var li = document.getElementById(`video_${r.dataset.modal}`).src;
          document.getElementById(`video_${r.dataset.modal}`).src = li.replace(
            "&autoplay=1",
            " "
          );
        });
    });
}
function Kn() {
  const s = document.getElementById("videoplayer"),
    e = document.querySelector(".videoplayer__close");
  document.querySelectorAll(".record__play").forEach((r) => {
    r.addEventListener("click", () => i(r.dataset.video));
  });
  function i(r) {
    s.classList.add("is-modal-open"),
      (s.querySelector("iframe").src = `https://www.youtube.com/embed/${r}`);
  }
  e.addEventListener("click", function () {
    s.classList.remove("is-modal-open"), (s.querySelector("iframe").src = "");
  });
}
function we(s) {
  if (s === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return s;
}
function br(s, e) {
  (s.prototype = Object.create(e.prototype)),
    (s.prototype.constructor = s),
    (s.__proto__ = e);
}
/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var ne = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  it = { duration: 0.5, overwrite: !1, delay: 0 },
  Ei,
  U,
  N,
  de = 1e8,
  I = 1 / de,
  ui = Math.PI * 2,
  Qn = ui / 4,
  Zn = 0,
  Tr = Math.sqrt,
  Jn = Math.cos,
  ea = Math.sin,
  H = function (e) {
    return typeof e == "string";
  },
  V = function (e) {
    return typeof e == "function";
  },
  Ce = function (e) {
    return typeof e == "number";
  },
  Ci = function (e) {
    return typeof e > "u";
  },
  xe = function (e) {
    return typeof e == "object";
  },
  Q = function (e) {
    return e !== !1;
  },
  Pi = function () {
    return typeof window < "u";
  },
  Ct = function (e) {
    return V(e) || H(e);
  },
  wr =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  j = Array.isArray,
  di = /(?:-?\.?\d|\.)+/gi,
  Er = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Qe = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Qt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Cr = /[+-]=-?[.\d]+/,
  Pr = /[^,'"\[\]\s]+/gi,
  ta = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  D,
  ue,
  ci,
  Mi,
  ae = {},
  It = {},
  Mr,
  Or = function (e) {
    return (It = Xe(e, ae)) && ee;
  },
  Oi = function (e, t) {
    return console.warn(
      "Invalid property",
      e,
      "set to",
      t,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  Dt = function (e, t) {
    return !t && console.warn(e);
  },
  Lr = function (e, t) {
    return (e && (ae[e] = t) && It && (It[e] = t)) || ae;
  },
  gt = function () {
    return 0;
  },
  ia = { suppressEvents: !0, isStart: !0, kill: !1 },
  Mt = { suppressEvents: !0, kill: !1 },
  ra = { suppressEvents: !0 },
  Li = {},
  Ie = [],
  fi = {},
  kr,
  re = {},
  Zt = {},
  ji = 30,
  Ot = [],
  ki = "",
  Ai = function (e) {
    var t = e[0],
      i,
      r;
    if ((xe(t) || V(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
      for (r = Ot.length; r-- && !Ot[r].targetTest(t); );
      i = Ot[r];
    }
    for (r = e.length; r--; )
      (e[r] && (e[r]._gsap || (e[r]._gsap = new ts(e[r], i)))) ||
        e.splice(r, 1);
    return e;
  },
  We = function (e) {
    return e._gsap || Ai(ce(e))[0]._gsap;
  },
  Ar = function (e, t, i) {
    return (i = e[t]) && V(i)
      ? e[t]()
      : (Ci(i) && e.getAttribute && e.getAttribute(t)) || i;
  },
  Z = function (e, t) {
    return (e = e.split(",")).forEach(t) || e;
  },
  $ = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  q = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  Je = function (e, t) {
    var i = t.charAt(0),
      r = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
    );
  },
  sa = function (e, t) {
    for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; );
    return r < i;
  },
  Rt = function () {
    var e = Ie.length,
      t = Ie.slice(0),
      i,
      r;
    for (fi = {}, Ie.length = 0, i = 0; i < e; i++)
      (r = t[i]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
  },
  zr = function (e, t, i, r) {
    Ie.length && !U && Rt(),
      e.render(t, i, r || (U && t < 0 && (e._initted || e._startAt))),
      Ie.length && !U && Rt();
  },
  Ir = function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(Pr).length < 2
      ? t
      : H(e)
      ? e.trim()
      : e;
  },
  Dr = function (e) {
    return e;
  },
  he = function (e, t) {
    for (var i in t) i in e || (e[i] = t[i]);
    return e;
  },
  na = function (e) {
    return function (t, i) {
      for (var r in i)
        r in t || (r === "duration" && e) || r === "ease" || (t[r] = i[r]);
    };
  },
  Xe = function (e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  },
  Ki = function s(e, t) {
    for (var i in t)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (e[i] = xe(t[i]) ? s(e[i] || (e[i] = {}), t[i]) : t[i]);
    return e;
  },
  Bt = function (e, t) {
    var i = {},
      r;
    for (r in e) r in t || (i[r] = e[r]);
    return i;
  },
  ht = function (e) {
    var t = e.parent || D,
      i = e.keyframes ? na(j(e.keyframes)) : he;
    if (Q(e.inherit))
      for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
    return e;
  },
  aa = function (e, t) {
    for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i]; );
    return i < 0;
  },
  Rr = function (e, t, i, r, n) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var a = e[r],
      o;
    if (n) for (o = t[n]; a && a[n] > o; ) a = a._prev;
    return (
      a ? ((t._next = a._next), (a._next = t)) : ((t._next = e[i]), (e[i] = t)),
      t._next ? (t._next._prev = t) : (e[r] = t),
      (t._prev = a),
      (t.parent = t._dp = e),
      t
    );
  },
  Ht = function (e, t, i, r) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var n = t._prev,
      a = t._next;
    n ? (n._next = a) : e[i] === t && (e[i] = a),
      a ? (a._prev = n) : e[r] === t && (e[r] = n),
      (t._next = t._prev = t.parent = null);
  },
  Re = function (e, t) {
    e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e),
      (e._act = 0);
  },
  qe = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
    return e;
  },
  oa = function (e) {
    for (var t = e.parent; t && t.parent; )
      (t._dirty = 1), t.totalDuration(), (t = t.parent);
    return e;
  },
  hi = function (e, t, i, r) {
    return (
      e._startAt &&
      (U
        ? e._startAt.revert(Mt)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, r))
    );
  },
  la = function s(e) {
    return !e || (e._ts && s(e.parent));
  },
  Qi = function (e) {
    return e._repeat ? rt(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  rt = function (e, t) {
    var i = Math.floor((e /= t));
    return e && i === e ? i - 1 : i;
  },
  Ft = function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  },
  Wt = function (e) {
    return (e._end = q(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || I) || 0)
    ));
  },
  qt = function (e, t) {
    var i = e._dp;
    return (
      i &&
        i.smoothChildTiming &&
        e._ts &&
        ((e._start = q(
          i._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
        )),
        Wt(e),
        i._dirty || qe(i, e)),
      e
    );
  },
  Br = function (e, t) {
    var i;
    if (
      ((t._time || (t._initted && !t._dur)) &&
        ((i = Ft(e.rawTime(), t)),
        (!t._dur || bt(0, t.totalDuration(), i) - t._tTime > I) &&
          t.render(i, !0)),
      qe(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (i = e; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      e._zTime = -I;
    }
  },
  _e = function (e, t, i, r) {
    return (
      t.parent && Re(t),
      (t._start = q(
        (Ce(i) ? i : i || e !== D ? le(e, i, t) : e._time) + t._delay
      )),
      (t._end = q(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
      )),
      Rr(e, t, "_first", "_last", e._sort ? "_start" : 0),
      pi(t) || (e._recent = t),
      r || Br(e, t),
      e._ts < 0 && qt(e, e._tTime),
      e
    );
  },
  Fr = function (e, t) {
    return (
      (ae.ScrollTrigger || Oi("scrollTrigger", t)) &&
      ae.ScrollTrigger.create(t, e)
    );
  },
  Vr = function (e, t, i, r, n) {
    if ((Ii(e, t, n), !e._initted)) return 1;
    if (
      !i &&
      e._pt &&
      !U &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      kr !== se.frame
    )
      return Ie.push(e), (e._lazy = [n, r]), 1;
  },
  ua = function s(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || s(t));
  },
  pi = function (e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart";
  },
  da = function (e, t, i, r) {
    var n = e.ratio,
      a =
        t < 0 ||
        (!t &&
          ((!e._start && ua(e) && !(!e._initted && pi(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !pi(e))))
          ? 0
          : 1,
      o = e._rDelay,
      l = 0,
      u,
      d,
      h;
    if (
      (o &&
        e._repeat &&
        ((l = bt(0, e._tDur, t)),
        (d = rt(l, o)),
        e._yoyo && d & 1 && (a = 1 - a),
        d !== rt(e._tTime, o) &&
          ((n = 1 - a), e.vars.repeatRefresh && e._initted && e.invalidate())),
      a !== n || U || r || e._zTime === I || (!t && e._zTime))
    ) {
      if (!e._initted && Vr(e, t, r, i, l)) return;
      for (
        h = e._zTime,
          e._zTime = t || (i ? I : 0),
          i || (i = t && !h),
          e.ratio = a,
          e._from && (a = 1 - a),
          e._time = 0,
          e._tTime = l,
          u = e._pt;
        u;

      )
        u.r(a, u.d), (u = u._next);
      t < 0 && hi(e, t, i, !0),
        e._onUpdate && !i && fe(e, "onUpdate"),
        l && e._repeat && !i && e.parent && fe(e, "onRepeat"),
        (t >= e._tDur || t < 0) &&
          e.ratio === a &&
          (a && Re(e, 1),
          !i &&
            !U &&
            (fe(e, a ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = t);
  },
  ca = function (e, t, i) {
    var r;
    if (i > t)
      for (r = e._first; r && r._start <= i; ) {
        if (r.data === "isPause" && r._start > t) return r;
        r = r._next;
      }
    else
      for (r = e._last; r && r._start >= i; ) {
        if (r.data === "isPause" && r._start < t) return r;
        r = r._prev;
      }
  },
  st = function (e, t, i, r) {
    var n = e._repeat,
      a = q(t) || 0,
      o = e._tTime / e._tDur;
    return (
      o && !r && (e._time *= a / e._dur),
      (e._dur = a),
      (e._tDur = n ? (n < 0 ? 1e10 : q(a * (n + 1) + e._rDelay * n)) : a),
      o > 0 && !r && qt(e, (e._tTime = e._tDur * o)),
      e.parent && Wt(e),
      i || qe(e.parent, e),
      e
    );
  },
  Zi = function (e) {
    return e instanceof K ? qe(e) : st(e, e._dur);
  },
  fa = { _start: 0, endTime: gt, totalDuration: gt },
  le = function s(e, t, i) {
    var r = e.labels,
      n = e._recent || fa,
      a = e.duration() >= de ? n.endTime(!1) : e._dur,
      o,
      l,
      u;
    return H(t) && (isNaN(t) || t in r)
      ? ((l = t.charAt(0)),
        (u = t.substr(-1) === "%"),
        (o = t.indexOf("=")),
        l === "<" || l === ">"
          ? (o >= 0 && (t = t.replace(/=/, "")),
            (l === "<" ? n._start : n.endTime(n._repeat >= 0)) +
              (parseFloat(t.substr(1)) || 0) *
                (u ? (o < 0 ? n : i).totalDuration() / 100 : 1))
          : o < 0
          ? (t in r || (r[t] = a), r[t])
          : ((l = parseFloat(t.charAt(o - 1) + t.substr(o + 1))),
            u && i && (l = (l / 100) * (j(i) ? i[0] : i).totalDuration()),
            o > 1 ? s(e, t.substr(0, o - 1), i) + l : a + l))
      : t == null
      ? a
      : +t;
  },
  pt = function (e, t, i) {
    var r = Ce(t[1]),
      n = (r ? 2 : 1) + (e < 2 ? 0 : 1),
      a = t[n],
      o,
      l;
    if ((r && (a.duration = t[1]), (a.parent = i), e)) {
      for (o = a, l = i; l && !("immediateRender" in o); )
        (o = l.vars.defaults || {}), (l = Q(l.vars.inherit) && l.parent);
      (a.immediateRender = Q(o.immediateRender)),
        e < 2 ? (a.runBackwards = 1) : (a.startAt = t[n - 1]);
    }
    return new G(t[0], a, t[n + 1]);
  },
  Fe = function (e, t) {
    return e || e === 0 ? t(e) : t;
  },
  bt = function (e, t, i) {
    return i < e ? e : i > t ? t : i;
  },
  X = function (e, t) {
    return !H(e) || !(t = ta.exec(e)) ? "" : t[1];
  },
  ha = function (e, t, i) {
    return Fe(i, function (r) {
      return bt(e, t, r);
    });
  },
  mi = [].slice,
  $r = function (e, t) {
    return (
      e &&
      xe(e) &&
      "length" in e &&
      ((!t && !e.length) || (e.length - 1 in e && xe(e[0]))) &&
      !e.nodeType &&
      e !== ue
    );
  },
  pa = function (e, t, i) {
    return (
      i === void 0 && (i = []),
      e.forEach(function (r) {
        var n;
        return (H(r) && !t) || $r(r, 1)
          ? (n = i).push.apply(n, ce(r))
          : i.push(r);
      }) || i
    );
  },
  ce = function (e, t, i) {
    return N && !t && N.selector
      ? N.selector(e)
      : H(e) && !i && (ci || !nt())
      ? mi.call((t || Mi).querySelectorAll(e), 0)
      : j(e)
      ? pa(e, i)
      : $r(e)
      ? mi.call(e, 0)
      : e
      ? [e]
      : [];
  },
  gi = function (e) {
    return (
      (e = ce(e)[0] || Dt("Invalid scope") || {}),
      function (t) {
        var i = e.current || e.nativeElement || e;
        return ce(
          t,
          i.querySelectorAll
            ? i
            : i === e
            ? Dt("Invalid scope") || Mi.createElement("div")
            : e
        );
      }
    );
  },
  Nr = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Gr = function (e) {
    if (V(e)) return e;
    var t = xe(e) ? e : { each: e },
      i = Ye(t.ease),
      r = t.from || 0,
      n = parseFloat(t.base) || 0,
      a = {},
      o = r > 0 && r < 1,
      l = isNaN(r) || o,
      u = t.axis,
      d = r,
      h = r;
    return (
      H(r)
        ? (d = h = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !o && l && ((d = r[0]), (h = r[1])),
      function (p, m, g) {
        var c = (g || t).length,
          y = a[c],
          f,
          _,
          v,
          S,
          x,
          b,
          w,
          C,
          T;
        if (!y) {
          if (((T = t.grid === "auto" ? 0 : (t.grid || [1, de])[1]), !T)) {
            for (
              w = -de;
              w < (w = g[T++].getBoundingClientRect().left) && T < c;

            );
            T--;
          }
          for (
            y = a[c] = [],
              f = l ? Math.min(T, c) * d - 0.5 : r % T,
              _ = T === de ? 0 : l ? (c * h) / T - 0.5 : (r / T) | 0,
              w = 0,
              C = de,
              b = 0;
            b < c;
            b++
          )
            (v = (b % T) - f),
              (S = _ - ((b / T) | 0)),
              (y[b] = x = u ? Math.abs(u === "y" ? S : v) : Tr(v * v + S * S)),
              x > w && (w = x),
              x < C && (C = x);
          r === "random" && Nr(y),
            (y.max = w - C),
            (y.min = C),
            (y.v = c =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (T > c
                    ? c - 1
                    : u
                    ? u === "y"
                      ? c / T
                      : T
                    : Math.max(T, c / T)) ||
                0) * (r === "edges" ? -1 : 1)),
            (y.b = c < 0 ? n - c : n),
            (y.u = X(t.amount || t.each) || 0),
            (i = i && c < 0 ? Zr(i) : i);
        }
        return (
          (c = (y[p] - y.min) / y.max || 0), q(y.b + (i ? i(c) : c) * y.v) + y.u
        );
      }
    );
  },
  _i = function (e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (i) {
      var r = q(Math.round(parseFloat(i) / e) * e * t);
      return (r - (r % 1)) / t + (Ce(i) ? 0 : X(i));
    };
  },
  Hr = function (e, t) {
    var i = j(e),
      r,
      n;
    return (
      !i &&
        xe(e) &&
        ((r = i = e.radius || de),
        e.values
          ? ((e = ce(e.values)), (n = !Ce(e[0])) && (r *= r))
          : (e = _i(e.increment))),
      Fe(
        t,
        i
          ? V(e)
            ? function (a) {
                return (n = e(a)), Math.abs(n - a) <= r ? n : a;
              }
            : function (a) {
                for (
                  var o = parseFloat(n ? a.x : a),
                    l = parseFloat(n ? a.y : 0),
                    u = de,
                    d = 0,
                    h = e.length,
                    p,
                    m;
                  h--;

                )
                  n
                    ? ((p = e[h].x - o), (m = e[h].y - l), (p = p * p + m * m))
                    : (p = Math.abs(e[h] - o)),
                    p < u && ((u = p), (d = h));
                return (
                  (d = !r || u <= r ? e[d] : a),
                  n || d === a || Ce(a) ? d : d + X(a)
                );
              }
          : _i(e)
      )
    );
  },
  Wr = function (e, t, i, r) {
    return Fe(j(e) ? !t : i === !0 ? !!(i = 0) : !r, function () {
      return j(e)
        ? e[~~(Math.random() * e.length)]
        : (i = i || 1e-5) &&
            (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - i / 2 + Math.random() * (t - e + i * 0.99)) / i) *
                i *
                r
            ) / r;
    });
  },
  ma = function () {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return function (r) {
      return t.reduce(function (n, a) {
        return a(n);
      }, r);
    };
  },
  ga = function (e, t) {
    return function (i) {
      return e(parseFloat(i)) + (t || X(i));
    };
  },
  _a = function (e, t, i) {
    return Yr(e, t, 0, 1, i);
  },
  qr = function (e, t, i) {
    return Fe(i, function (r) {
      return e[~~t(r)];
    });
  },
  va = function s(e, t, i) {
    var r = t - e;
    return j(e)
      ? qr(e, s(0, e.length), t)
      : Fe(i, function (n) {
          return ((r + ((n - e) % r)) % r) + e;
        });
  },
  ya = function s(e, t, i) {
    var r = t - e,
      n = r * 2;
    return j(e)
      ? qr(e, s(0, e.length - 1), t)
      : Fe(i, function (a) {
          return (a = (n + ((a - e) % n)) % n || 0), e + (a > r ? n - a : a);
        });
  },
  _t = function (e) {
    for (var t = 0, i = "", r, n, a, o; ~(r = e.indexOf("random(", t)); )
      (a = e.indexOf(")", r)),
        (o = e.charAt(r + 7) === "["),
        (n = e.substr(r + 7, a - r - 7).match(o ? Pr : di)),
        (i +=
          e.substr(t, r - t) + Wr(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5)),
        (t = a + 1);
    return i + e.substr(t, e.length - t);
  },
  Yr = function (e, t, i, r, n) {
    var a = t - e,
      o = r - i;
    return Fe(n, function (l) {
      return i + (((l - e) / a) * o || 0);
    });
  },
  Sa = function s(e, t, i, r) {
    var n = isNaN(e + t)
      ? 0
      : function (m) {
          return (1 - m) * e + m * t;
        };
    if (!n) {
      var a = H(e),
        o = {},
        l,
        u,
        d,
        h,
        p;
      if ((i === !0 && (r = 1) && (i = null), a))
        (e = { p: e }), (t = { p: t });
      else if (j(e) && !j(t)) {
        for (d = [], h = e.length, p = h - 2, u = 1; u < h; u++)
          d.push(s(e[u - 1], e[u]));
        h--,
          (n = function (g) {
            g *= h;
            var c = Math.min(p, ~~g);
            return d[c](g - c);
          }),
          (i = t);
      } else r || (e = Xe(j(e) ? [] : {}, e));
      if (!d) {
        for (l in t) zi.call(o, e, l, "get", t[l]);
        n = function (g) {
          return Bi(g, o) || (a ? e.p : e);
        };
      }
    }
    return Fe(i, n);
  },
  Ji = function (e, t, i) {
    var r = e.labels,
      n = de,
      a,
      o,
      l;
    for (a in r)
      (o = r[a] - t),
        o < 0 == !!i && o && n > (o = Math.abs(o)) && ((l = a), (n = o));
    return l;
  },
  fe = function (e, t, i) {
    var r = e.vars,
      n = r[t],
      a = N,
      o = e._ctx,
      l,
      u,
      d;
    if (n)
      return (
        (l = r[t + "Params"]),
        (u = r.callbackScope || e),
        i && Ie.length && Rt(),
        o && (N = o),
        (d = l ? n.apply(u, l) : n.call(u)),
        (N = a),
        d
      );
  },
  ct = function (e) {
    return (
      Re(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!U),
      e.progress() < 1 && fe(e, "onInterrupt"),
      e
    );
  },
  Ze,
  Xr = [],
  Ur = function (e) {
    if (!Pi()) {
      Xr.push(e);
      return;
    }
    e = (!e.name && e.default) || e;
    var t = e.name,
      i = V(e),
      r =
        t && !i && e.init
          ? function () {
              this._props = [];
            }
          : e,
      n = { init: gt, render: Bi, add: zi, kill: Ra, modifier: Da, rawVars: 0 },
      a = { targetTest: 0, get: 0, getSetter: Ri, aliases: {}, register: 0 };
    if ((nt(), e !== r)) {
      if (re[t]) return;
      he(r, he(Bt(e, n), a)),
        Xe(r.prototype, Xe(n, Bt(e, a))),
        (re[(r.prop = t)] = r),
        e.targetTest && (Ot.push(r), (Li[t] = 1)),
        (t =
          (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) +
          "Plugin");
    }
    Lr(t, r), e.register && e.register(ee, r, J);
  },
  z = 255,
  ft = {
    aqua: [0, z, z],
    lime: [0, z, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, z],
    navy: [0, 0, 128],
    white: [z, z, z],
    olive: [128, 128, 0],
    yellow: [z, z, 0],
    orange: [z, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [z, 0, 0],
    pink: [z, 192, 203],
    cyan: [0, z, z],
    transparent: [z, z, z, 0],
  },
  Jt = function (e, t, i) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? t + (i - t) * e * 6
        : e < 0.5
        ? i
        : e * 3 < 2
        ? t + (i - t) * (2 / 3 - e) * 6
        : t) *
        z +
        0.5) |
        0
    );
  },
  jr = function (e, t, i) {
    var r = e ? (Ce(e) ? [e >> 16, (e >> 8) & z, e & z] : 0) : ft.black,
      n,
      a,
      o,
      l,
      u,
      d,
      h,
      p,
      m,
      g;
    if (!r) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), ft[e]))
        r = ft[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((n = e.charAt(1)),
            (a = e.charAt(2)),
            (o = e.charAt(3)),
            (e =
              "#" +
              n +
              n +
              a +
              a +
              o +
              o +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
          e.length === 9)
        )
          return (
            (r = parseInt(e.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & z, r & z, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (r = [e >> 16, (e >> 8) & z, e & z]);
      } else if (e.substr(0, 3) === "hsl") {
        if (((r = g = e.match(di)), !t))
          (l = (+r[0] % 360) / 360),
            (u = +r[1] / 100),
            (d = +r[2] / 100),
            (a = d <= 0.5 ? d * (u + 1) : d + u - d * u),
            (n = d * 2 - a),
            r.length > 3 && (r[3] *= 1),
            (r[0] = Jt(l + 1 / 3, n, a)),
            (r[1] = Jt(l, n, a)),
            (r[2] = Jt(l - 1 / 3, n, a));
        else if (~e.indexOf("="))
          return (r = e.match(Er)), i && r.length < 4 && (r[3] = 1), r;
      } else r = e.match(di) || ft.transparent;
      r = r.map(Number);
    }
    return (
      t &&
        !g &&
        ((n = r[0] / z),
        (a = r[1] / z),
        (o = r[2] / z),
        (h = Math.max(n, a, o)),
        (p = Math.min(n, a, o)),
        (d = (h + p) / 2),
        h === p
          ? (l = u = 0)
          : ((m = h - p),
            (u = d > 0.5 ? m / (2 - h - p) : m / (h + p)),
            (l =
              h === n
                ? (a - o) / m + (a < o ? 6 : 0)
                : h === a
                ? (o - n) / m + 2
                : (n - a) / m + 4),
            (l *= 60)),
        (r[0] = ~~(l + 0.5)),
        (r[1] = ~~(u * 100 + 0.5)),
        (r[2] = ~~(d * 100 + 0.5))),
      i && r.length < 4 && (r[3] = 1),
      r
    );
  },
  Kr = function (e) {
    var t = [],
      i = [],
      r = -1;
    return (
      e.split(De).forEach(function (n) {
        var a = n.match(Qe) || [];
        t.push.apply(t, a), i.push((r += a.length + 1));
      }),
      (t.c = i),
      t
    );
  },
  er = function (e, t, i) {
    var r = "",
      n = (e + r).match(De),
      a = t ? "hsla(" : "rgba(",
      o = 0,
      l,
      u,
      d,
      h;
    if (!n) return e;
    if (
      ((n = n.map(function (p) {
        return (
          (p = jr(p, t, 1)) &&
          a +
            (t ? p[0] + "," + p[1] + "%," + p[2] + "%," + p[3] : p.join(",")) +
            ")"
        );
      })),
      i && ((d = Kr(e)), (l = i.c), l.join(r) !== d.c.join(r)))
    )
      for (u = e.replace(De, "1").split(Qe), h = u.length - 1; o < h; o++)
        r +=
          u[o] +
          (~l.indexOf(o)
            ? n.shift() || a + "0,0,0,0)"
            : (d.length ? d : n.length ? n : i).shift());
    if (!u)
      for (u = e.split(De), h = u.length - 1; o < h; o++) r += u[o] + n[o];
    return r + u[h];
  },
  De = (function () {
    var s =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in ft) s += "|" + e + "\\b";
    return new RegExp(s + ")", "gi");
  })(),
  xa = /hsl[a]?\(/,
  Qr = function (e) {
    var t = e.join(" "),
      i;
    if (((De.lastIndex = 0), De.test(t)))
      return (
        (i = xa.test(t)),
        (e[1] = er(e[1], i)),
        (e[0] = er(e[0], i, Kr(e[1]))),
        !0
      );
  },
  vt,
  se = (function () {
    var s = Date.now,
      e = 500,
      t = 33,
      i = s(),
      r = i,
      n = 1e3 / 240,
      a = n,
      o = [],
      l,
      u,
      d,
      h,
      p,
      m,
      g = function c(y) {
        var f = s() - r,
          _ = y === !0,
          v,
          S,
          x,
          b;
        if (
          (f > e && (i += f - t),
          (r += f),
          (x = r - i),
          (v = x - a),
          (v > 0 || _) &&
            ((b = ++h.frame),
            (p = x - h.time * 1e3),
            (h.time = x = x / 1e3),
            (a += v + (v >= n ? 4 : n - v)),
            (S = 1)),
          _ || (l = u(c)),
          S)
        )
          for (m = 0; m < o.length; m++) o[m](x, p, b, y);
      };
    return (
      (h = {
        time: 0,
        frame: 0,
        tick: function () {
          g(!0);
        },
        deltaRatio: function (y) {
          return p / (1e3 / (y || 60));
        },
        wake: function () {
          Mr &&
            (!ci &&
              Pi() &&
              ((ue = ci = window),
              (Mi = ue.document || {}),
              (ae.gsap = ee),
              (ue.gsapVersions || (ue.gsapVersions = [])).push(ee.version),
              Or(It || ue.GreenSockGlobals || (!ue.gsap && ue) || {}),
              (d = ue.requestAnimationFrame),
              Xr.forEach(Ur)),
            l && h.sleep(),
            (u =
              d ||
              function (y) {
                return setTimeout(y, (a - h.time * 1e3 + 1) | 0);
              }),
            (vt = 1),
            g(2));
        },
        sleep: function () {
          (d ? ue.cancelAnimationFrame : clearTimeout)(l), (vt = 0), (u = gt);
        },
        lagSmoothing: function (y, f) {
          (e = y || 1 / 0), (t = Math.min(f || 33, e));
        },
        fps: function (y) {
          (n = 1e3 / (y || 240)), (a = h.time * 1e3 + n);
        },
        add: function (y, f, _) {
          var v = f
            ? function (S, x, b, w) {
                y(S, x, b, w), h.remove(v);
              }
            : y;
          return h.remove(y), o[_ ? "unshift" : "push"](v), nt(), v;
        },
        remove: function (y, f) {
          ~(f = o.indexOf(y)) && o.splice(f, 1) && m >= f && m--;
        },
        _listeners: o,
      }),
      h
    );
  })(),
  nt = function () {
    return !vt && se.wake();
  },
  k = {},
  ba = /^[\d.\-M][\d.\-,\s]/,
  Ta = /["']/g,
  wa = function (e) {
    for (
      var t = {},
        i = e.substr(1, e.length - 3).split(":"),
        r = i[0],
        n = 1,
        a = i.length,
        o,
        l,
        u;
      n < a;
      n++
    )
      (l = i[n]),
        (o = n !== a - 1 ? l.lastIndexOf(",") : l.length),
        (u = l.substr(0, o)),
        (t[r] = isNaN(u) ? u.replace(Ta, "").trim() : +u),
        (r = l.substr(o + 1).trim());
    return t;
  },
  Ea = function (e) {
    var t = e.indexOf("(") + 1,
      i = e.indexOf(")"),
      r = e.indexOf("(", t);
    return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i);
  },
  Ca = function (e) {
    var t = (e + "").split("("),
      i = k[t[0]];
    return i && t.length > 1 && i.config
      ? i.config.apply(
          null,
          ~e.indexOf("{") ? [wa(t[1])] : Ea(e).split(",").map(Ir)
        )
      : k._CE && ba.test(e)
      ? k._CE("", e)
      : i;
  },
  Zr = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  Jr = function s(e, t) {
    for (var i = e._first, r; i; )
      i instanceof K
        ? s(i, t)
        : i.vars.yoyoEase &&
          (!i._yoyo || !i._repeat) &&
          i._yoyo !== t &&
          (i.timeline
            ? s(i.timeline, t)
            : ((r = i._ease),
              (i._ease = i._yEase),
              (i._yEase = r),
              (i._yoyo = t))),
        (i = i._next);
  },
  Ye = function (e, t) {
    return (e && (V(e) ? e : k[e] || Ca(e))) || t;
  },
  je = function (e, t, i, r) {
    i === void 0 &&
      (i = function (l) {
        return 1 - t(1 - l);
      }),
      r === void 0 &&
        (r = function (l) {
          return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
        });
    var n = { easeIn: t, easeOut: i, easeInOut: r },
      a;
    return (
      Z(e, function (o) {
        (k[o] = ae[o] = n), (k[(a = o.toLowerCase())] = i);
        for (var l in n)
          k[
            a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
          ] = k[o + "." + l] = n[l];
      }),
      n
    );
  },
  es = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  },
  ei = function s(e, t, i) {
    var r = t >= 1 ? t : 1,
      n = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      a = (n / ui) * (Math.asin(1 / r) || 0),
      o = function (d) {
        return d === 1 ? 1 : r * Math.pow(2, -10 * d) * ea((d - a) * n) + 1;
      },
      l =
        e === "out"
          ? o
          : e === "in"
          ? function (u) {
              return 1 - o(1 - u);
            }
          : es(o);
    return (
      (n = ui / n),
      (l.config = function (u, d) {
        return s(e, u, d);
      }),
      l
    );
  },
  ti = function s(e, t) {
    t === void 0 && (t = 1.70158);
    var i = function (a) {
        return a ? --a * a * ((t + 1) * a + t) + 1 : 0;
      },
      r =
        e === "out"
          ? i
          : e === "in"
          ? function (n) {
              return 1 - i(1 - n);
            }
          : es(i);
    return (
      (r.config = function (n) {
        return s(e, n);
      }),
      r
    );
  };
Z("Linear,Quad,Cubic,Quart,Quint,Strong", function (s, e) {
  var t = e < 5 ? e + 1 : e;
  je(
    s + ",Power" + (t - 1),
    e
      ? function (i) {
          return Math.pow(i, t);
        }
      : function (i) {
          return i;
        },
    function (i) {
      return 1 - Math.pow(1 - i, t);
    },
    function (i) {
      return i < 0.5
        ? Math.pow(i * 2, t) / 2
        : 1 - Math.pow((1 - i) * 2, t) / 2;
    }
  );
});
k.Linear.easeNone = k.none = k.Linear.easeIn;
je("Elastic", ei("in"), ei("out"), ei());
(function (s, e) {
  var t = 1 / e,
    i = 2 * t,
    r = 2.5 * t,
    n = function (o) {
      return o < t
        ? s * o * o
        : o < i
        ? s * Math.pow(o - 1.5 / e, 2) + 0.75
        : o < r
        ? s * (o -= 2.25 / e) * o + 0.9375
        : s * Math.pow(o - 2.625 / e, 2) + 0.984375;
    };
  je(
    "Bounce",
    function (a) {
      return 1 - n(1 - a);
    },
    n
  );
})(7.5625, 2.75);
je("Expo", function (s) {
  return s ? Math.pow(2, 10 * (s - 1)) : 0;
});
je("Circ", function (s) {
  return -(Tr(1 - s * s) - 1);
});
je("Sine", function (s) {
  return s === 1 ? 1 : -Jn(s * Qn) + 1;
});
je("Back", ti("in"), ti("out"), ti());
k.SteppedEase =
  k.steps =
  ae.SteppedEase =
    {
      config: function (e, t) {
        e === void 0 && (e = 1);
        var i = 1 / e,
          r = e + (t ? 0 : 1),
          n = t ? 1 : 0,
          a = 1 - I;
        return function (o) {
          return (((r * bt(0, a, o)) | 0) + n) * i;
        };
      },
    };
it.ease = k["quad.out"];
Z(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (s) {
    return (ki += s + "," + s + "Params,");
  }
);
var ts = function (e, t) {
    (this.id = Zn++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : Ar),
      (this.set = t ? t.getSetter : Ri);
  },
  at = (function () {
    function s(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        st(this, +t.duration, 1, 1),
        (this.data = t.data),
        N && ((this._ctx = N), N.data.push(this)),
        vt || se.wake();
    }
    var e = s.prototype;
    return (
      (e.delay = function (i) {
        return i || i === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + i - this._delay),
            (this._delay = i),
            this)
          : this._delay;
      }),
      (e.duration = function (i) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (i) {
        return arguments.length
          ? ((this._dirty = 0),
            st(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (i, r) {
        if ((nt(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (qt(this, i), !n._dp || n.parent || Br(n, this); n && n.parent; )
            n.parent._time !==
              n._start +
                (n._ts >= 0
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && i < this._tDur) ||
              (this._ts < 0 && i > 0) ||
              (!this._tDur && !i)) &&
            _e(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === I) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), zr(this, i, r)),
          this
        );
      }),
      (e.time = function (i, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + Qi(this)) %
                (this._dur + this._rDelay) || (i ? this._dur : 0),
              r
            )
          : this._time;
      }),
      (e.totalProgress = function (i, r) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, r)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      }),
      (e.progress = function (i, r) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                Qi(this),
              r
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (e.iteration = function (i, r) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * n, r)
          : this._repeat
          ? rt(this._tTime, n) + 1
          : 1;
      }),
      (e.timeScale = function (i) {
        if (!arguments.length) return this._rts === -I ? 0 : this._rts;
        if (this._rts === i) return this;
        var r =
          this.parent && this._ts ? Ft(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -I ? 0 : this._rts),
          this.totalTime(bt(-Math.abs(this._delay), this._tDur, r), !0),
          Wt(this),
          oa(this)
        );
      }),
      (e.paused = function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (nt(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== I &&
                      (this._tTime -= I)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (i) {
        if (arguments.length) {
          this._start = i;
          var r = this.parent || this._dp;
          return (
            r && (r._sort || !this.parent) && _e(r, this, i - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (i) {
        return (
          this._start +
          (Q(i) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (i) {
        var r = this.parent || this._dp;
        return r
          ? i &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? Ft(r.rawTime(i), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (i) {
        i === void 0 && (i = ra);
        var r = U;
        return (
          (U = i),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== "nested" && i.kill !== !1 && this.kill(),
          (U = r),
          this
        );
      }),
      (e.globalTime = function (i) {
        for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
          (n = r._start + n / (r._ts || 1)), (r = r._dp);
        return !this.parent && this._sat
          ? this._sat.vars.immediateRender
            ? -1
            : this._sat.globalTime(i)
          : n;
      }),
      (e.repeat = function (i) {
        return arguments.length
          ? ((this._repeat = i === 1 / 0 ? -2 : i), Zi(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (i) {
        if (arguments.length) {
          var r = this._time;
          return (this._rDelay = i), Zi(this), r ? this.time(r) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (e.seek = function (i, r) {
        return this.totalTime(le(this, i), Q(r));
      }),
      (e.restart = function (i, r) {
        return this.play().totalTime(i ? -this._delay : 0, Q(r));
      }),
      (e.play = function (i, r) {
        return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (i, r) {
        return (
          i != null && this.seek(i || this.totalDuration(), r),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (i, r) {
        return i != null && this.seek(i, r), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (i) {
        return arguments.length
          ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -I : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -I), this;
      }),
      (e.isActive = function () {
        var i = this.parent || this._dp,
          r = this._start,
          n;
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (n = i.rawTime(!0)) >= r &&
            n < this.endTime(!0) - I)
        );
      }),
      (e.eventCallback = function (i, r, n) {
        var a = this.vars;
        return arguments.length > 1
          ? (r
              ? ((a[i] = r),
                n && (a[i + "Params"] = n),
                i === "onUpdate" && (this._onUpdate = r))
              : delete a[i],
            this)
          : a[i];
      }),
      (e.then = function (i) {
        var r = this;
        return new Promise(function (n) {
          var a = V(i) ? i : Dr,
            o = function () {
              var u = r.then;
              (r.then = null),
                V(a) && (a = a(r)) && (a.then || a === r) && (r.then = u),
                n(a),
                (r.then = u);
            };
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
          (!r._tTime && r._ts < 0)
            ? o()
            : (r._prom = o);
        });
      }),
      (e.kill = function () {
        ct(this);
      }),
      s
    );
  })();
he(at.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -I,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var K = (function (s) {
  br(e, s);
  function e(i, r) {
    var n;
    return (
      i === void 0 && (i = {}),
      (n = s.call(this, i) || this),
      (n.labels = {}),
      (n.smoothChildTiming = !!i.smoothChildTiming),
      (n.autoRemoveChildren = !!i.autoRemoveChildren),
      (n._sort = Q(i.sortChildren)),
      D && _e(i.parent || D, we(n), r),
      i.reversed && n.reverse(),
      i.paused && n.paused(!0),
      i.scrollTrigger && Fr(we(n), i.scrollTrigger),
      n
    );
  }
  var t = e.prototype;
  return (
    (t.to = function (r, n, a) {
      return pt(0, arguments, this), this;
    }),
    (t.from = function (r, n, a) {
      return pt(1, arguments, this), this;
    }),
    (t.fromTo = function (r, n, a, o) {
      return pt(2, arguments, this), this;
    }),
    (t.set = function (r, n, a) {
      return (
        (n.duration = 0),
        (n.parent = this),
        ht(n).repeatDelay || (n.repeat = 0),
        (n.immediateRender = !!n.immediateRender),
        new G(r, n, le(this, a), 1),
        this
      );
    }),
    (t.call = function (r, n, a) {
      return _e(this, G.delayedCall(0, r, n), a);
    }),
    (t.staggerTo = function (r, n, a, o, l, u, d) {
      return (
        (a.duration = n),
        (a.stagger = a.stagger || o),
        (a.onComplete = u),
        (a.onCompleteParams = d),
        (a.parent = this),
        new G(r, a, le(this, l)),
        this
      );
    }),
    (t.staggerFrom = function (r, n, a, o, l, u, d) {
      return (
        (a.runBackwards = 1),
        (ht(a).immediateRender = Q(a.immediateRender)),
        this.staggerTo(r, n, a, o, l, u, d)
      );
    }),
    (t.staggerFromTo = function (r, n, a, o, l, u, d, h) {
      return (
        (o.startAt = a),
        (ht(o).immediateRender = Q(o.immediateRender)),
        this.staggerTo(r, n, o, l, u, d, h)
      );
    }),
    (t.render = function (r, n, a) {
      var o = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        u = this._dur,
        d = r <= 0 ? 0 : q(r),
        h = this._zTime < 0 != r < 0 && (this._initted || !u),
        p,
        m,
        g,
        c,
        y,
        f,
        _,
        v,
        S,
        x,
        b,
        w;
      if (
        (this !== D && d > l && r >= 0 && (d = l), d !== this._tTime || a || h)
      ) {
        if (
          (o !== this._time &&
            u &&
            ((d += this._time - o), (r += this._time - o)),
          (p = d),
          (S = this._start),
          (v = this._ts),
          (f = !v),
          h && (u || (o = this._zTime), (r || !n) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((b = this._yoyo),
            (y = u + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(y * 100 + r, n, a);
          if (
            ((p = q(d % y)),
            d === l
              ? ((c = this._repeat), (p = u))
              : ((c = ~~(d / y)),
                c && c === d / y && ((p = u), c--),
                p > u && (p = u)),
            (x = rt(this._tTime, y)),
            !o &&
              this._tTime &&
              x !== c &&
              this._tTime - x * y - this._dur <= 0 &&
              (x = c),
            b && c & 1 && ((p = u - p), (w = 1)),
            c !== x && !this._lock)
          ) {
            var C = b && x & 1,
              T = C === (b && c & 1);
            if (
              (c < x && (C = !C),
              (o = C ? 0 : u),
              (this._lock = 1),
              (this.render(o || (w ? 0 : q(c * y)), n, !u)._lock = 0),
              (this._tTime = d),
              !n && this.parent && fe(this, "onRepeat"),
              this.vars.repeatRefresh && !w && (this.invalidate()._lock = 1),
              (o && o !== this._time) ||
                f !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((u = this._dur),
              (l = this._tDur),
              T &&
                ((this._lock = 2),
                (o = C ? u : -1e-4),
                this.render(o, !0),
                this.vars.repeatRefresh && !w && this.invalidate()),
              (this._lock = 0),
              !this._ts && !f)
            )
              return this;
            Jr(this, w);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((_ = ca(this, q(o), q(p))), _ && (d -= p - (p = _._start))),
          (this._tTime = d),
          (this._time = p),
          (this._act = !v),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (o = 0)),
          !o && p && !n && !c && (fe(this, "onStart"), this._tTime !== d))
        )
          return this;
        if (p >= o && r >= 0)
          for (m = this._first; m; ) {
            if (
              ((g = m._next), (m._act || p >= m._start) && m._ts && _ !== m)
            ) {
              if (m.parent !== this) return this.render(r, n, a);
              if (
                (m.render(
                  m._ts > 0
                    ? (p - m._start) * m._ts
                    : (m._dirty ? m.totalDuration() : m._tDur) +
                        (p - m._start) * m._ts,
                  n,
                  a
                ),
                p !== this._time || (!this._ts && !f))
              ) {
                (_ = 0), g && (d += this._zTime = -I);
                break;
              }
            }
            m = g;
          }
        else {
          m = this._last;
          for (var O = r < 0 ? r : p; m; ) {
            if (((g = m._prev), (m._act || O <= m._end) && m._ts && _ !== m)) {
              if (m.parent !== this) return this.render(r, n, a);
              if (
                (m.render(
                  m._ts > 0
                    ? (O - m._start) * m._ts
                    : (m._dirty ? m.totalDuration() : m._tDur) +
                        (O - m._start) * m._ts,
                  n,
                  a || (U && (m._initted || m._startAt))
                ),
                p !== this._time || (!this._ts && !f))
              ) {
                (_ = 0), g && (d += this._zTime = O ? -I : I);
                break;
              }
            }
            m = g;
          }
        }
        if (
          _ &&
          !n &&
          (this.pause(),
          (_.render(p >= o ? 0 : -I)._zTime = p >= o ? 1 : -1),
          this._ts)
        )
          return (this._start = S), Wt(this), this.render(r, n, a);
        this._onUpdate && !n && fe(this, "onUpdate", !0),
          ((d === l && this._tTime >= this.totalDuration()) || (!d && o)) &&
            (S === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !u) &&
                ((d === l && this._ts > 0) || (!d && this._ts < 0)) &&
                Re(this, 1),
              !n &&
                !(r < 0 && !o) &&
                (d || o || !l) &&
                (fe(
                  this,
                  d === l && r >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(d < l && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (t.add = function (r, n) {
      var a = this;
      if ((Ce(n) || (n = le(this, n, r)), !(r instanceof at))) {
        if (j(r))
          return (
            r.forEach(function (o) {
              return a.add(o, n);
            }),
            this
          );
        if (H(r)) return this.addLabel(r, n);
        if (V(r)) r = G.delayedCall(0, r);
        else return this;
      }
      return this !== r ? _e(this, r, n) : this;
    }),
    (t.getChildren = function (r, n, a, o) {
      r === void 0 && (r = !0),
        n === void 0 && (n = !0),
        a === void 0 && (a = !0),
        o === void 0 && (o = -de);
      for (var l = [], u = this._first; u; )
        u._start >= o &&
          (u instanceof G
            ? n && l.push(u)
            : (a && l.push(u), r && l.push.apply(l, u.getChildren(!0, n, a)))),
          (u = u._next);
      return l;
    }),
    (t.getById = function (r) {
      for (var n = this.getChildren(1, 1, 1), a = n.length; a--; )
        if (n[a].vars.id === r) return n[a];
    }),
    (t.remove = function (r) {
      return H(r)
        ? this.removeLabel(r)
        : V(r)
        ? this.killTweensOf(r)
        : (Ht(this, r),
          r === this._recent && (this._recent = this._last),
          qe(this));
    }),
    (t.totalTime = function (r, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = q(
              se.time -
                (this._ts > 0
                  ? r / this._ts
                  : (this.totalDuration() - r) / -this._ts)
            )),
          s.prototype.totalTime.call(this, r, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (t.addLabel = function (r, n) {
      return (this.labels[r] = le(this, n)), this;
    }),
    (t.removeLabel = function (r) {
      return delete this.labels[r], this;
    }),
    (t.addPause = function (r, n, a) {
      var o = G.delayedCall(0, n || gt, a);
      return (
        (o.data = "isPause"), (this._hasPause = 1), _e(this, o, le(this, r))
      );
    }),
    (t.removePause = function (r) {
      var n = this._first;
      for (r = le(this, r); n; )
        n._start === r && n.data === "isPause" && Re(n), (n = n._next);
    }),
    (t.killTweensOf = function (r, n, a) {
      for (var o = this.getTweensOf(r, a), l = o.length; l--; )
        ke !== o[l] && o[l].kill(r, n);
      return this;
    }),
    (t.getTweensOf = function (r, n) {
      for (var a = [], o = ce(r), l = this._first, u = Ce(n), d; l; )
        l instanceof G
          ? sa(l._targets, o) &&
            (u
              ? (!ke || (l._initted && l._ts)) &&
                l.globalTime(0) <= n &&
                l.globalTime(l.totalDuration()) > n
              : !n || l.isActive()) &&
            a.push(l)
          : (d = l.getTweensOf(o, n)).length && a.push.apply(a, d),
          (l = l._next);
      return a;
    }),
    (t.tweenTo = function (r, n) {
      n = n || {};
      var a = this,
        o = le(a, r),
        l = n,
        u = l.startAt,
        d = l.onStart,
        h = l.onStartParams,
        p = l.immediateRender,
        m,
        g = G.to(
          a,
          he(
            {
              ease: n.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: o,
              overwrite: "auto",
              duration:
                n.duration ||
                Math.abs(
                  (o - (u && "time" in u ? u.time : a._time)) / a.timeScale()
                ) ||
                I,
              onStart: function () {
                if ((a.pause(), !m)) {
                  var y =
                    n.duration ||
                    Math.abs(
                      (o - (u && "time" in u ? u.time : a._time)) /
                        a.timeScale()
                    );
                  g._dur !== y && st(g, y, 0, 1).render(g._time, !0, !0),
                    (m = 1);
                }
                d && d.apply(g, h || []);
              },
            },
            n
          )
        );
      return p ? g.render(0) : g;
    }),
    (t.tweenFromTo = function (r, n, a) {
      return this.tweenTo(n, he({ startAt: { time: le(this, r) } }, a));
    }),
    (t.recent = function () {
      return this._recent;
    }),
    (t.nextLabel = function (r) {
      return r === void 0 && (r = this._time), Ji(this, le(this, r));
    }),
    (t.previousLabel = function (r) {
      return r === void 0 && (r = this._time), Ji(this, le(this, r), 1);
    }),
    (t.currentLabel = function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + I);
    }),
    (t.shiftChildren = function (r, n, a) {
      a === void 0 && (a = 0);
      for (var o = this._first, l = this.labels, u; o; )
        o._start >= a && ((o._start += r), (o._end += r)), (o = o._next);
      if (n) for (u in l) l[u] >= a && (l[u] += r);
      return qe(this);
    }),
    (t.invalidate = function (r) {
      var n = this._first;
      for (this._lock = 0; n; ) n.invalidate(r), (n = n._next);
      return s.prototype.invalidate.call(this, r);
    }),
    (t.clear = function (r) {
      r === void 0 && (r = !0);
      for (var n = this._first, a; n; ) (a = n._next), this.remove(n), (n = a);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        qe(this)
      );
    }),
    (t.totalDuration = function (r) {
      var n = 0,
        a = this,
        o = a._last,
        l = de,
        u,
        d,
        h;
      if (arguments.length)
        return a.timeScale(
          (a._repeat < 0 ? a.duration() : a.totalDuration()) /
            (a.reversed() ? -r : r)
        );
      if (a._dirty) {
        for (h = a.parent; o; )
          (u = o._prev),
            o._dirty && o.totalDuration(),
            (d = o._start),
            d > l && a._sort && o._ts && !a._lock
              ? ((a._lock = 1), (_e(a, o, d - o._delay, 1)._lock = 0))
              : (l = d),
            d < 0 &&
              o._ts &&
              ((n -= d),
              ((!h && !a._dp) || (h && h.smoothChildTiming)) &&
                ((a._start += d / a._ts), (a._time -= d), (a._tTime -= d)),
              a.shiftChildren(-d, !1, -1 / 0),
              (l = 0)),
            o._end > n && o._ts && (n = o._end),
            (o = u);
        st(a, a === D && a._time > n ? a._time : n, 1, 1), (a._dirty = 0);
      }
      return a._tDur;
    }),
    (e.updateRoot = function (r) {
      if ((D._ts && (zr(D, Ft(r, D)), (kr = se.frame)), se.frame >= ji)) {
        ji += ne.autoSleep || 120;
        var n = D._first;
        if ((!n || !n._ts) && ne.autoSleep && se._listeners.length < 2) {
          for (; n && !n._ts; ) n = n._next;
          n || se.sleep();
        }
      }
    }),
    e
  );
})(at);
he(K.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Pa = function (e, t, i, r, n, a, o) {
    var l = new J(this._pt, e, t, 0, 1, os, null, n),
      u = 0,
      d = 0,
      h,
      p,
      m,
      g,
      c,
      y,
      f,
      _;
    for (
      l.b = i,
        l.e = r,
        i += "",
        r += "",
        (f = ~r.indexOf("random(")) && (r = _t(r)),
        a && ((_ = [i, r]), a(_, e, t), (i = _[0]), (r = _[1])),
        p = i.match(Qt) || [];
      (h = Qt.exec(r));

    )
      (g = h[0]),
        (c = r.substring(u, h.index)),
        m ? (m = (m + 1) % 5) : c.substr(-5) === "rgba(" && (m = 1),
        g !== p[d++] &&
          ((y = parseFloat(p[d - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: c || d === 1 ? c : ",",
            s: y,
            c: g.charAt(1) === "=" ? Je(y, g) - y : parseFloat(g) - y,
            m: m && m < 4 ? Math.round : 0,
          }),
          (u = Qt.lastIndex));
    return (
      (l.c = u < r.length ? r.substring(u, r.length) : ""),
      (l.fp = o),
      (Cr.test(r) || f) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  zi = function (e, t, i, r, n, a, o, l, u, d) {
    V(r) && (r = r(n || 0, e, a));
    var h = e[t],
      p =
        i !== "get"
          ? i
          : V(h)
          ? u
            ? e[
                t.indexOf("set") || !V(e["get" + t.substr(3)])
                  ? t
                  : "get" + t.substr(3)
              ](u)
            : e[t]()
          : h,
      m = V(h) ? (u ? Aa : ns) : Di,
      g;
    if (
      (H(r) &&
        (~r.indexOf("random(") && (r = _t(r)),
        r.charAt(1) === "=" &&
          ((g = Je(p, r) + (X(p) || 0)), (g || g === 0) && (r = g))),
      !d || p !== r || vi)
    )
      return !isNaN(p * r) && r !== ""
        ? ((g = new J(
            this._pt,
            e,
            t,
            +p || 0,
            r - (p || 0),
            typeof h == "boolean" ? Ia : as,
            0,
            m
          )),
          u && (g.fp = u),
          o && g.modifier(o, this, e),
          (this._pt = g))
        : (!h && !(t in e) && Oi(t, r),
          Pa.call(this, e, t, p, r, m, l || ne.stringFilter, u));
  },
  Ma = function (e, t, i, r, n) {
    if (
      (V(e) && (e = mt(e, n, t, i, r)),
      !xe(e) || (e.style && e.nodeType) || j(e) || wr(e))
    )
      return H(e) ? mt(e, n, t, i, r) : e;
    var a = {},
      o;
    for (o in e) a[o] = mt(e[o], n, t, i, r);
    return a;
  },
  is = function (e, t, i, r, n, a) {
    var o, l, u, d;
    if (
      re[e] &&
      (o = new re[e]()).init(
        n,
        o.rawVars ? t[e] : Ma(t[e], r, n, a, i),
        i,
        r,
        a
      ) !== !1 &&
      ((i._pt = l = new J(i._pt, n, e, 0, 1, o.render, o, 0, o.priority)),
      i !== Ze)
    )
      for (u = i._ptLookup[i._targets.indexOf(n)], d = o._props.length; d--; )
        u[o._props[d]] = l;
    return o;
  },
  ke,
  vi,
  Ii = function s(e, t, i) {
    var r = e.vars,
      n = r.ease,
      a = r.startAt,
      o = r.immediateRender,
      l = r.lazy,
      u = r.onUpdate,
      d = r.onUpdateParams,
      h = r.callbackScope,
      p = r.runBackwards,
      m = r.yoyoEase,
      g = r.keyframes,
      c = r.autoRevert,
      y = e._dur,
      f = e._startAt,
      _ = e._targets,
      v = e.parent,
      S = v && v.data === "nested" ? v.vars.targets : _,
      x = e._overwrite === "auto" && !Ei,
      b = e.timeline,
      w,
      C,
      T,
      O,
      E,
      P,
      M,
      L,
      A,
      B,
      F,
      W,
      me;
    if (
      (b && (!g || !n) && (n = "none"),
      (e._ease = Ye(n, it.ease)),
      (e._yEase = m ? Zr(Ye(m === !0 ? n : m, it.ease)) : 0),
      m &&
        e._yoyo &&
        !e._repeat &&
        ((m = e._yEase), (e._yEase = e._ease), (e._ease = m)),
      (e._from = !b && !!r.runBackwards),
      !b || (g && !r.stagger))
    ) {
      if (
        ((L = _[0] ? We(_[0]).harness : 0),
        (W = L && r[L.prop]),
        (w = Bt(r, Li)),
        f &&
          (f._zTime < 0 && f.progress(1),
          t < 0 && p && o && !c ? f.render(-1, !0) : f.revert(p && y ? Mt : ia),
          (f._lazy = 0)),
        a)
      ) {
        if (
          (Re(
            (e._startAt = G.set(
              _,
              he(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: v,
                  immediateRender: !0,
                  lazy: !f && Q(l),
                  startAt: null,
                  delay: 0,
                  onUpdate: u,
                  onUpdateParams: d,
                  callbackScope: h,
                  stagger: 0,
                },
                a
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (U || (!o && !c)) && e._startAt.revert(Mt),
          o && y && t <= 0 && i <= 0)
        ) {
          t && (e._zTime = t);
          return;
        }
      } else if (p && y && !f) {
        if (
          (t && (o = !1),
          (T = he(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: o && !f && Q(l),
              immediateRender: o,
              stagger: 0,
              parent: v,
            },
            w
          )),
          W && (T[L.prop] = W),
          Re((e._startAt = G.set(_, T))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (U ? e._startAt.revert(Mt) : e._startAt.render(-1, !0)),
          (e._zTime = t),
          !o)
        )
          s(e._startAt, I, I);
        else if (!t) return;
      }
      for (
        e._pt = e._ptCache = 0, l = (y && Q(l)) || (l && !y), C = 0;
        C < _.length;
        C++
      ) {
        if (
          ((E = _[C]),
          (M = E._gsap || Ai(_)[C]._gsap),
          (e._ptLookup[C] = B = {}),
          fi[M.id] && Ie.length && Rt(),
          (F = S === _ ? C : S.indexOf(E)),
          L &&
            (A = new L()).init(E, W || w, e, F, S) !== !1 &&
            ((e._pt = O =
              new J(e._pt, E, A.name, 0, 1, A.render, A, 0, A.priority)),
            A._props.forEach(function (ge) {
              B[ge] = O;
            }),
            A.priority && (P = 1)),
          !L || W)
        )
          for (T in w)
            re[T] && (A = is(T, w, e, F, E, S))
              ? A.priority && (P = 1)
              : (B[T] = O =
                  zi.call(e, E, T, "get", w[T], F, S, 0, r.stringFilter));
        e._op && e._op[C] && e.kill(E, e._op[C]),
          x &&
            e._pt &&
            ((ke = e),
            D.killTweensOf(E, B, e.globalTime(t)),
            (me = !e.parent),
            (ke = 0)),
          e._pt && l && (fi[M.id] = 1);
      }
      P && ls(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = u),
      (e._initted = (!e._op || e._pt) && !me),
      g && t <= 0 && b.render(de, !0, !0);
  },
  Oa = function (e, t, i, r, n, a, o) {
    var l = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      u,
      d,
      h,
      p;
    if (!l)
      for (
        l = e._ptCache[t] = [], h = e._ptLookup, p = e._targets.length;
        p--;

      ) {
        if (((u = h[p][t]), u && u.d && u.d._pt))
          for (u = u.d._pt; u && u.p !== t && u.fp !== t; ) u = u._next;
        if (!u) return (vi = 1), (e.vars[t] = "+=0"), Ii(e, o), (vi = 0), 1;
        l.push(u);
      }
    for (p = l.length; p--; )
      (d = l[p]),
        (u = d._pt || d),
        (u.s = (r || r === 0) && !n ? r : u.s + (r || 0) + a * u.c),
        (u.c = i - u.s),
        d.e && (d.e = $(i) + X(d.e)),
        d.b && (d.b = u.s + X(d.b));
  },
  La = function (e, t) {
    var i = e[0] ? We(e[0]).harness : 0,
      r = i && i.aliases,
      n,
      a,
      o,
      l;
    if (!r) return t;
    n = Xe({}, t);
    for (a in r)
      if (a in n) for (l = r[a].split(","), o = l.length; o--; ) n[l[o]] = n[a];
    return n;
  },
  ka = function (e, t, i, r) {
    var n = t.ease || r || "power1.inOut",
      a,
      o;
    if (j(t))
      (o = i[e] || (i[e] = [])),
        t.forEach(function (l, u) {
          return o.push({ t: (u / (t.length - 1)) * 100, v: l, e: n });
        });
    else
      for (a in t)
        (o = i[a] || (i[a] = [])),
          a === "ease" || o.push({ t: parseFloat(e), v: t[a], e: n });
  },
  mt = function (e, t, i, r, n) {
    return V(e)
      ? e.call(t, i, r, n)
      : H(e) && ~e.indexOf("random(")
      ? _t(e)
      : e;
  },
  rs = ki + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  ss = {};
Z(rs + ",id,stagger,delay,duration,paused,scrollTrigger", function (s) {
  return (ss[s] = 1);
});
var G = (function (s) {
  br(e, s);
  function e(i, r, n, a) {
    var o;
    typeof r == "number" && ((n.duration = r), (r = n), (n = null)),
      (o = s.call(this, a ? r : ht(r)) || this);
    var l = o.vars,
      u = l.duration,
      d = l.delay,
      h = l.immediateRender,
      p = l.stagger,
      m = l.overwrite,
      g = l.keyframes,
      c = l.defaults,
      y = l.scrollTrigger,
      f = l.yoyoEase,
      _ = r.parent || D,
      v = (j(i) || wr(i) ? Ce(i[0]) : "length" in r) ? [i] : ce(i),
      S,
      x,
      b,
      w,
      C,
      T,
      O,
      E;
    if (
      ((o._targets = v.length
        ? Ai(v)
        : Dt(
            "GSAP target " + i + " not found. https://greensock.com",
            !ne.nullTargetWarn
          ) || []),
      (o._ptLookup = []),
      (o._overwrite = m),
      g || p || Ct(u) || Ct(d))
    ) {
      if (
        ((r = o.vars),
        (S = o.timeline =
          new K({
            data: "nested",
            defaults: c || {},
            targets: _ && _.data === "nested" ? _.vars.targets : v,
          })),
        S.kill(),
        (S.parent = S._dp = we(o)),
        (S._start = 0),
        p || Ct(u) || Ct(d))
      ) {
        if (((w = v.length), (O = p && Gr(p)), xe(p)))
          for (C in p) ~rs.indexOf(C) && (E || (E = {}), (E[C] = p[C]));
        for (x = 0; x < w; x++)
          (b = Bt(r, ss)),
            (b.stagger = 0),
            f && (b.yoyoEase = f),
            E && Xe(b, E),
            (T = v[x]),
            (b.duration = +mt(u, we(o), x, T, v)),
            (b.delay = (+mt(d, we(o), x, T, v) || 0) - o._delay),
            !p &&
              w === 1 &&
              b.delay &&
              ((o._delay = d = b.delay), (o._start += d), (b.delay = 0)),
            S.to(T, b, O ? O(x, T, v) : 0),
            (S._ease = k.none);
        S.duration() ? (u = d = 0) : (o.timeline = 0);
      } else if (g) {
        ht(he(S.vars.defaults, { ease: "none" })),
          (S._ease = Ye(g.ease || r.ease || "none"));
        var P = 0,
          M,
          L,
          A;
        if (j(g))
          g.forEach(function (B) {
            return S.to(v, B, ">");
          }),
            S.duration();
        else {
          b = {};
          for (C in g)
            C === "ease" || C === "easeEach" || ka(C, g[C], b, g.easeEach);
          for (C in b)
            for (
              M = b[C].sort(function (B, F) {
                return B.t - F.t;
              }),
                P = 0,
                x = 0;
              x < M.length;
              x++
            )
              (L = M[x]),
                (A = {
                  ease: L.e,
                  duration: ((L.t - (x ? M[x - 1].t : 0)) / 100) * u,
                }),
                (A[C] = L.v),
                S.to(v, A, P),
                (P += A.duration);
          S.duration() < u && S.to({}, { duration: u - S.duration() });
        }
      }
      u || o.duration((u = S.duration()));
    } else o.timeline = 0;
    return (
      m === !0 && !Ei && ((ke = we(o)), D.killTweensOf(v), (ke = 0)),
      _e(_, we(o), n),
      r.reversed && o.reverse(),
      r.paused && o.paused(!0),
      (h ||
        (!u &&
          !g &&
          o._start === q(_._time) &&
          Q(h) &&
          la(we(o)) &&
          _.data !== "nested")) &&
        ((o._tTime = -I), o.render(Math.max(0, -d) || 0)),
      y && Fr(we(o), y),
      o
    );
  }
  var t = e.prototype;
  return (
    (t.render = function (r, n, a) {
      var o = this._time,
        l = this._tDur,
        u = this._dur,
        d = r < 0,
        h = r > l - I && !d ? l : r < I ? 0 : r,
        p,
        m,
        g,
        c,
        y,
        f,
        _,
        v,
        S;
      if (!u) da(this, r, n, a);
      else if (
        h !== this._tTime ||
        !r ||
        a ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== d)
      ) {
        if (((p = h), (v = this.timeline), this._repeat)) {
          if (((c = u + this._rDelay), this._repeat < -1 && d))
            return this.totalTime(c * 100 + r, n, a);
          if (
            ((p = q(h % c)),
            h === l
              ? ((g = this._repeat), (p = u))
              : ((g = ~~(h / c)),
                g && g === h / c && ((p = u), g--),
                p > u && (p = u)),
            (f = this._yoyo && g & 1),
            f && ((S = this._yEase), (p = u - p)),
            (y = rt(this._tTime, c)),
            p === o && !a && this._initted)
          )
            return (this._tTime = h), this;
          g !== y &&
            (v && this._yEase && Jr(v, f),
            this.vars.repeatRefresh &&
              !f &&
              !this._lock &&
              ((this._lock = a = 1),
              (this.render(q(c * g), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (Vr(this, d ? r : p, a, n, h)) return (this._tTime = 0), this;
          if (o !== this._time) return this;
          if (u !== this._dur) return this.render(r, n, a);
        }
        if (
          ((this._tTime = h),
          (this._time = p),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = _ = (S || this._ease)(p / u)),
          this._from && (this.ratio = _ = 1 - _),
          p && !o && !n && !g && (fe(this, "onStart"), this._tTime !== h))
        )
          return this;
        for (m = this._pt; m; ) m.r(_, m.d), (m = m._next);
        (v &&
          v.render(
            r < 0 ? r : !p && f ? -I : v._dur * v._ease(p / this._dur),
            n,
            a
          )) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !n &&
            (d && hi(this, r, n, a), fe(this, "onUpdate")),
          this._repeat &&
            g !== y &&
            this.vars.onRepeat &&
            !n &&
            this.parent &&
            fe(this, "onRepeat"),
          (h === this._tDur || !h) &&
            this._tTime === h &&
            (d && !this._onUpdate && hi(this, r, !0, !0),
            (r || !u) &&
              ((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) &&
              Re(this, 1),
            !n &&
              !(d && !o) &&
              (h || o || f) &&
              (fe(this, h === l ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(h < l && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (t.targets = function () {
      return this._targets;
    }),
    (t.invalidate = function (r) {
      return (
        (!r || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(r),
        s.prototype.invalidate.call(this, r)
      );
    }),
    (t.resetTo = function (r, n, a, o) {
      vt || se.wake(), this._ts || this.play();
      var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        u;
      return (
        this._initted || Ii(this, l),
        (u = this._ease(l / this._dur)),
        Oa(this, r, n, a, o, u, l)
          ? this.resetTo(r, n, a, o)
          : (qt(this, 0),
            this.parent ||
              Rr(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (t.kill = function (r, n) {
      if ((n === void 0 && (n = "all"), !r && (!n || n === "all")))
        return (this._lazy = this._pt = 0), this.parent ? ct(this) : this;
      if (this.timeline) {
        var a = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, n, ke && ke.vars.overwrite !== !0)
            ._first || ct(this),
          this.parent &&
            a !== this.timeline.totalDuration() &&
            st(this, (this._dur * this.timeline._tDur) / a, 0, 1),
          this
        );
      }
      var o = this._targets,
        l = r ? ce(r) : o,
        u = this._ptLookup,
        d = this._pt,
        h,
        p,
        m,
        g,
        c,
        y,
        f;
      if ((!n || n === "all") && aa(o, l))
        return n === "all" && (this._pt = 0), ct(this);
      for (
        h = this._op = this._op || [],
          n !== "all" &&
            (H(n) &&
              ((c = {}),
              Z(n, function (_) {
                return (c[_] = 1);
              }),
              (n = c)),
            (n = La(o, n))),
          f = o.length;
        f--;

      )
        if (~l.indexOf(o[f])) {
          (p = u[f]),
            n === "all"
              ? ((h[f] = n), (g = p), (m = {}))
              : ((m = h[f] = h[f] || {}), (g = n));
          for (c in g)
            (y = p && p[c]),
              y &&
                ((!("kill" in y.d) || y.d.kill(c) === !0) && Ht(this, y, "_pt"),
                delete p[c]),
              m !== "all" && (m[c] = 1);
        }
      return this._initted && !this._pt && d && ct(this), this;
    }),
    (e.to = function (r, n) {
      return new e(r, n, arguments[2]);
    }),
    (e.from = function (r, n) {
      return pt(1, arguments);
    }),
    (e.delayedCall = function (r, n, a, o) {
      return new e(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: r,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: a,
        onReverseCompleteParams: a,
        callbackScope: o,
      });
    }),
    (e.fromTo = function (r, n, a) {
      return pt(2, arguments);
    }),
    (e.set = function (r, n) {
      return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(r, n);
    }),
    (e.killTweensOf = function (r, n, a) {
      return D.killTweensOf(r, n, a);
    }),
    e
  );
})(at);
he(G.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Z("staggerTo,staggerFrom,staggerFromTo", function (s) {
  G[s] = function () {
    var e = new K(),
      t = mi.call(arguments, 0);
    return t.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), e[s].apply(e, t);
  };
});
var Di = function (e, t, i) {
    return (e[t] = i);
  },
  ns = function (e, t, i) {
    return e[t](i);
  },
  Aa = function (e, t, i, r) {
    return e[t](r.fp, i);
  },
  za = function (e, t, i) {
    return e.setAttribute(t, i);
  },
  Ri = function (e, t) {
    return V(e[t]) ? ns : Ci(e[t]) && e.setAttribute ? za : Di;
  },
  as = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  },
  Ia = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  os = function (e, t) {
    var i = t._pt,
      r = "";
    if (!e && t.b) r = t.b;
    else if (e === 1 && t.e) r = t.e;
    else {
      for (; i; )
        (r =
          i.p +
          (i.m ? i.m(i.s + i.c * e) : Math.round((i.s + i.c * e) * 1e4) / 1e4) +
          r),
          (i = i._next);
      r += t.c;
    }
    t.set(t.t, t.p, r, t);
  },
  Bi = function (e, t) {
    for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
  },
  Da = function (e, t, i, r) {
    for (var n = this._pt, a; n; )
      (a = n._next), n.p === r && n.modifier(e, t, i), (n = a);
  },
  Ra = function (e) {
    for (var t = this._pt, i, r; t; )
      (r = t._next),
        (t.p === e && !t.op) || t.op === e
          ? Ht(this, t, "_pt")
          : t.dep || (i = 1),
        (t = r);
    return !i;
  },
  Ba = function (e, t, i, r) {
    r.mSet(e, t, r.m.call(r.tween, i, r.mt), r);
  },
  ls = function (e) {
    for (var t = e._pt, i, r, n, a; t; ) {
      for (i = t._next, r = n; r && r.pr > t.pr; ) r = r._next;
      (t._prev = r ? r._prev : a) ? (t._prev._next = t) : (n = t),
        (t._next = r) ? (r._prev = t) : (a = t),
        (t = i);
    }
    e._pt = n;
  },
  J = (function () {
    function s(t, i, r, n, a, o, l, u, d) {
      (this.t = i),
        (this.s = n),
        (this.c = a),
        (this.p = r),
        (this.r = o || as),
        (this.d = l || this),
        (this.set = u || Di),
        (this.pr = d || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    var e = s.prototype;
    return (
      (e.modifier = function (i, r, n) {
        (this.mSet = this.mSet || this.set),
          (this.set = Ba),
          (this.m = i),
          (this.mt = n),
          (this.tween = r);
      }),
      s
    );
  })();
Z(
  ki +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (s) {
    return (Li[s] = 1);
  }
);
ae.TweenMax = ae.TweenLite = G;
ae.TimelineLite = ae.TimelineMax = K;
D = new K({
  sortChildren: !1,
  defaults: it,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
ne.stringFilter = Qr;
var ot = [],
  Lt = {},
  Fa = [],
  tr = 0,
  ii = function (e) {
    return (Lt[e] || Fa).map(function (t) {
      return t();
    });
  },
  yi = function () {
    var e = Date.now(),
      t = [];
    e - tr > 2 &&
      (ii("matchMediaInit"),
      ot.forEach(function (i) {
        var r = i.queries,
          n = i.conditions,
          a,
          o,
          l,
          u;
        for (o in r)
          (a = ue.matchMedia(r[o]).matches),
            a && (l = 1),
            a !== n[o] && ((n[o] = a), (u = 1));
        u && (i.revert(), l && t.push(i));
      }),
      ii("matchMediaRevert"),
      t.forEach(function (i) {
        return i.onMatch(i);
      }),
      (tr = e),
      ii("matchMedia"));
  },
  us = (function () {
    function s(t, i) {
      (this.selector = i && gi(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        t && this.add(t);
    }
    var e = s.prototype;
    return (
      (e.add = function (i, r, n) {
        V(i) && ((n = r), (r = i), (i = V));
        var a = this,
          o = function () {
            var u = N,
              d = a.selector,
              h;
            return (
              u && u !== a && u.data.push(a),
              n && (a.selector = gi(n)),
              (N = a),
              (h = r.apply(a, arguments)),
              V(h) && a._r.push(h),
              (N = u),
              (a.selector = d),
              (a.isReverted = !1),
              h
            );
          };
        return (a.last = o), i === V ? o(a) : i ? (a[i] = o) : o;
      }),
      (e.ignore = function (i) {
        var r = N;
        (N = null), i(this), (N = r);
      }),
      (e.getTweens = function () {
        var i = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof s
              ? i.push.apply(i, r.getTweens())
              : r instanceof G &&
                  !(r.parent && r.parent.data === "nested") &&
                  i.push(r);
          }),
          i
        );
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (e.kill = function (i, r) {
        var n = this;
        if (i) {
          var a = this.getTweens();
          this.data.forEach(function (l) {
            l.data === "isFlip" &&
              (l.revert(),
              l.getChildren(!0, !0, !1).forEach(function (u) {
                return a.splice(a.indexOf(u), 1);
              }));
          }),
            a
              .map(function (l) {
                return { g: l.globalTime(0), t: l };
              })
              .sort(function (l, u) {
                return u.g - l.g || -1;
              })
              .forEach(function (l) {
                return l.t.revert(i);
              }),
            this.data.forEach(function (l) {
              return !(l instanceof at) && l.revert && l.revert(i);
            }),
            this._r.forEach(function (l) {
              return l(i, n);
            }),
            (this.isReverted = !0);
        } else
          this.data.forEach(function (l) {
            return l.kill && l.kill();
          });
        if ((this.clear(), r)) {
          var o = ot.indexOf(this);
          ~o && ot.splice(o, 1);
        }
      }),
      (e.revert = function (i) {
        this.kill(i || {});
      }),
      s
    );
  })(),
  Va = (function () {
    function s(t) {
      (this.contexts = []), (this.scope = t);
    }
    var e = s.prototype;
    return (
      (e.add = function (i, r, n) {
        xe(i) || (i = { matches: i });
        var a = new us(0, n || this.scope),
          o = (a.conditions = {}),
          l,
          u,
          d;
        this.contexts.push(a), (r = a.add("onMatch", r)), (a.queries = i);
        for (u in i)
          u === "all"
            ? (d = 1)
            : ((l = ue.matchMedia(i[u])),
              l &&
                (ot.indexOf(a) < 0 && ot.push(a),
                (o[u] = l.matches) && (d = 1),
                l.addListener
                  ? l.addListener(yi)
                  : l.addEventListener("change", yi)));
        return d && r(a), this;
      }),
      (e.revert = function (i) {
        this.kill(i || {});
      }),
      (e.kill = function (i) {
        this.contexts.forEach(function (r) {
          return r.kill(i, !0);
        });
      }),
      s
    );
  })(),
  Vt = {
    registerPlugin: function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      t.forEach(function (r) {
        return Ur(r);
      });
    },
    timeline: function (e) {
      return new K(e);
    },
    getTweensOf: function (e, t) {
      return D.getTweensOf(e, t);
    },
    getProperty: function (e, t, i, r) {
      H(e) && (e = ce(e)[0]);
      var n = We(e || {}).get,
        a = i ? Dr : Ir;
      return (
        i === "native" && (i = ""),
        e &&
          (t
            ? a(((re[t] && re[t].get) || n)(e, t, i, r))
            : function (o, l, u) {
                return a(((re[o] && re[o].get) || n)(e, o, l, u));
              })
      );
    },
    quickSetter: function (e, t, i) {
      if (((e = ce(e)), e.length > 1)) {
        var r = e.map(function (d) {
            return ee.quickSetter(d, t, i);
          }),
          n = r.length;
        return function (d) {
          for (var h = n; h--; ) r[h](d);
        };
      }
      e = e[0] || {};
      var a = re[t],
        o = We(e),
        l = (o.harness && (o.harness.aliases || {})[t]) || t,
        u = a
          ? function (d) {
              var h = new a();
              (Ze._pt = 0),
                h.init(e, i ? d + i : d, Ze, 0, [e]),
                h.render(1, h),
                Ze._pt && Bi(1, Ze);
            }
          : o.set(e, l);
      return a
        ? u
        : function (d) {
            return u(e, l, i ? d + i : d, o, 1);
          };
    },
    quickTo: function (e, t, i) {
      var r,
        n = ee.to(
          e,
          Xe(((r = {}), (r[t] = "+=0.1"), (r.paused = !0), r), i || {})
        ),
        a = function (l, u, d) {
          return n.resetTo(t, l, u, d);
        };
      return (a.tween = n), a;
    },
    isTweening: function (e) {
      return D.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = Ye(e.ease, it.ease)), Ki(it, e || {});
    },
    config: function (e) {
      return Ki(ne, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        i = e.effect,
        r = e.plugins,
        n = e.defaults,
        a = e.extendTimeline;
      (r || "").split(",").forEach(function (o) {
        return (
          o && !re[o] && !ae[o] && Dt(t + " effect requires " + o + " plugin.")
        );
      }),
        (Zt[t] = function (o, l, u) {
          return i(ce(o), he(l || {}, n), u);
        }),
        a &&
          (K.prototype[t] = function (o, l, u) {
            return this.add(Zt[t](o, xe(l) ? l : (u = l) && {}, this), u);
          });
    },
    registerEase: function (e, t) {
      k[e] = Ye(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? Ye(e, t) : k;
    },
    getById: function (e) {
      return D.getById(e);
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {});
      var i = new K(e),
        r,
        n;
      for (
        i.smoothChildTiming = Q(e.smoothChildTiming),
          D.remove(i),
          i._dp = 0,
          i._time = i._tTime = D._time,
          r = D._first;
        r;

      )
        (n = r._next),
          (t ||
            !(
              !r._dur &&
              r instanceof G &&
              r.vars.onComplete === r._targets[0]
            )) &&
            _e(i, r, r._start - r._delay),
          (r = n);
      return _e(D, i, 0), i;
    },
    context: function (e, t) {
      return e ? new us(e, t) : N;
    },
    matchMedia: function (e) {
      return new Va(e);
    },
    matchMediaRefresh: function () {
      return (
        ot.forEach(function (e) {
          var t = e.conditions,
            i,
            r;
          for (r in t) t[r] && ((t[r] = !1), (i = 1));
          i && e.revert();
        }) || yi()
      );
    },
    addEventListener: function (e, t) {
      var i = Lt[e] || (Lt[e] = []);
      ~i.indexOf(t) || i.push(t);
    },
    removeEventListener: function (e, t) {
      var i = Lt[e],
        r = i && i.indexOf(t);
      r >= 0 && i.splice(r, 1);
    },
    utils: {
      wrap: va,
      wrapYoyo: ya,
      distribute: Gr,
      random: Wr,
      snap: Hr,
      normalize: _a,
      getUnit: X,
      clamp: ha,
      splitColor: jr,
      toArray: ce,
      selector: gi,
      mapRange: Yr,
      pipe: ma,
      unitize: ga,
      interpolate: Sa,
      shuffle: Nr,
    },
    install: Or,
    effects: Zt,
    ticker: se,
    updateRoot: K.updateRoot,
    plugins: re,
    globalTimeline: D,
    core: {
      PropTween: J,
      globals: Lr,
      Tween: G,
      Timeline: K,
      Animation: at,
      getCache: We,
      _removeLinkedListItem: Ht,
      reverting: function () {
        return U;
      },
      context: function (e) {
        return e && N && (N.data.push(e), (e._ctx = N)), N;
      },
      suppressOverwrites: function (e) {
        return (Ei = e);
      },
    },
  };
Z("to,from,fromTo,delayedCall,set,killTweensOf", function (s) {
  return (Vt[s] = G[s]);
});
se.add(K.updateRoot);
Ze = Vt.to({}, { duration: 0 });
var $a = function (e, t) {
    for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
      i = i._next;
    return i;
  },
  Na = function (e, t) {
    var i = e._targets,
      r,
      n,
      a;
    for (r in t)
      for (n = i.length; n--; )
        (a = e._ptLookup[n][r]),
          a &&
            (a = a.d) &&
            (a._pt && (a = $a(a, r)),
            a && a.modifier && a.modifier(t[r], e, i[n], r));
  },
  ri = function (e, t) {
    return {
      name: e,
      rawVars: 1,
      init: function (r, n, a) {
        a._onInit = function (o) {
          var l, u;
          if (
            (H(n) &&
              ((l = {}),
              Z(n, function (d) {
                return (l[d] = 1);
              }),
              (n = l)),
            t)
          ) {
            l = {};
            for (u in n) l[u] = t(n[u]);
            n = l;
          }
          Na(o, n);
        };
      },
    };
  },
  ee =
    Vt.registerPlugin(
      {
        name: "attr",
        init: function (e, t, i, r, n) {
          var a, o, l;
          this.tween = i;
          for (a in t)
            (l = e.getAttribute(a) || ""),
              (o = this.add(
                e,
                "setAttribute",
                (l || 0) + "",
                t[a],
                r,
                n,
                0,
                0,
                a
              )),
              (o.op = a),
              (o.b = l),
              this._props.push(a);
        },
        render: function (e, t) {
          for (var i = t._pt; i; )
            U ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
        },
      },
      {
        name: "endArray",
        init: function (e, t) {
          for (var i = t.length; i--; )
            this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
        },
      },
      ri("roundProps", _i),
      ri("modifiers"),
      ri("snap", Hr)
    ) || Vt;
G.version = K.version = ee.version = "3.11.5";
Mr = 1;
Pi() && nt();
k.Power0;
k.Power1;
k.Power2;
k.Power3;
k.Power4;
k.Linear;
k.Quad;
k.Cubic;
k.Quart;
k.Quint;
k.Strong;
k.Elastic;
k.Back;
k.SteppedEase;
k.Bounce;
k.Sine;
k.Expo;
k.Circ;
/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var ir,
  Ae,
  et,
  Fi,
  He,
  rr,
  Vi,
  Ga = function () {
    return typeof window < "u";
  },
  Pe = {},
  Ge = 180 / Math.PI,
  tt = Math.PI / 180,
  Ke = Math.atan2,
  sr = 1e8,
  $i = /([A-Z])/g,
  Ha = /(left|right|width|margin|padding|x)/i,
  Wa = /[\s,\(]\S/,
  ye = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Si = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  qa = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t
    );
  },
  Ya = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t
    );
  },
  Xa = function (e, t) {
    var i = t.s + t.c * e;
    t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  ds = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  cs = function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  },
  Ua = function (e, t, i) {
    return (e.style[t] = i);
  },
  ja = function (e, t, i) {
    return e.style.setProperty(t, i);
  },
  Ka = function (e, t, i) {
    return (e._gsap[t] = i);
  },
  Qa = function (e, t, i) {
    return (e._gsap.scaleX = e._gsap.scaleY = i);
  },
  Za = function (e, t, i, r, n) {
    var a = e._gsap;
    (a.scaleX = a.scaleY = i), a.renderTransform(n, a);
  },
  Ja = function (e, t, i, r, n) {
    var a = e._gsap;
    (a[t] = i), a.renderTransform(n, a);
  },
  R = "transform",
  pe = R + "Origin",
  eo = function s(e, t) {
    var i = this,
      r = this.target,
      n = r.style;
    if (e in Pe) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        (e = ye[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (a) {
                return (i.tfm[a] = Ee(r, a));
              })
            : (this.tfm[e] = r._gsap.x ? r._gsap[e] : Ee(r, e));
      else
        return ye.transform.split(",").forEach(function (a) {
          return s.call(i, a, t);
        });
      if (this.props.indexOf(R) >= 0) return;
      r._gsap.svg &&
        ((this.svgo = r.getAttribute("data-svg-origin")),
        this.props.push(pe, t, "")),
        (e = R);
    }
    (n || t) && this.props.push(e, t, n[e]);
  },
  fs = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  to = function () {
    var e = this.props,
      t = this.target,
      i = t.style,
      r = t._gsap,
      n,
      a;
    for (n = 0; n < e.length; n += 3)
      e[n + 1]
        ? (t[e[n]] = e[n + 2])
        : e[n + 2]
        ? (i[e[n]] = e[n + 2])
        : i.removeProperty(
            e[n].substr(0, 2) === "--"
              ? e[n]
              : e[n].replace($i, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (a in this.tfm) r[a] = this.tfm[a];
      r.svg &&
        (r.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        (n = Vi()),
        (!n || !n.isStart) && !i[R] && (fs(i), (r.uncache = 1));
    }
  },
  hs = function (e, t) {
    var i = { target: e, props: [], revert: to, save: eo };
    return (
      e._gsap || ee.core.getCache(e),
      t &&
        t.split(",").forEach(function (r) {
          return i.save(r);
        }),
      i
    );
  },
  ps,
  xi = function (e, t) {
    var i = Ae.createElementNS
      ? Ae.createElementNS(
          (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : Ae.createElement(e);
    return i.style ? i : Ae.createElement(e);
  },
  Se = function s(e, t, i) {
    var r = getComputedStyle(e);
    return (
      r[t] ||
      r.getPropertyValue(t.replace($i, "-$1").toLowerCase()) ||
      r.getPropertyValue(t) ||
      (!i && s(e, lt(t) || t, 1)) ||
      ""
    );
  },
  nr = "O,Moz,ms,Ms,Webkit".split(","),
  lt = function (e, t, i) {
    var r = t || He,
      n = r.style,
      a = 5;
    if (e in n && !i) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      a-- && !(nr[a] + e in n);

    );
    return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? nr[a] : "") + e;
  },
  bi = function () {
    Ga() &&
      window.document &&
      ((ir = window),
      (Ae = ir.document),
      (et = Ae.documentElement),
      (He = xi("div") || { style: {} }),
      xi("div"),
      (R = lt(R)),
      (pe = R + "Origin"),
      (He.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (ps = !!lt("perspective")),
      (Vi = ee.core.reverting),
      (Fi = 1));
  },
  si = function s(e) {
    var t = xi(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      i = this.parentNode,
      r = this.nextSibling,
      n = this.style.cssText,
      a;
    if (
      (et.appendChild(t),
      t.appendChild(this),
      (this.style.display = "block"),
      e)
    )
      try {
        (a = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = s);
      } catch {}
    else this._gsapBBox && (a = this._gsapBBox());
    return (
      i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
      et.removeChild(t),
      (this.style.cssText = n),
      a
    );
  },
  ar = function (e, t) {
    for (var i = t.length; i--; )
      if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
  },
  ms = function (e) {
    var t;
    try {
      t = e.getBBox();
    } catch {
      t = si.call(e, !0);
    }
    return (
      (t && (t.width || t.height)) || e.getBBox === si || (t = si.call(e, !0)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +ar(e, ["x", "cx", "x1"]) || 0,
            y: +ar(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  },
  gs = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && ms(e));
  },
  yt = function (e, t) {
    if (t) {
      var i = e.style;
      t in Pe && t !== pe && (t = R),
        i.removeProperty
          ? ((t.substr(0, 2) === "ms" || t.substr(0, 6) === "webkit") &&
              (t = "-" + t),
            i.removeProperty(t.replace($i, "-$1").toLowerCase()))
          : i.removeAttribute(t);
    }
  },
  ze = function (e, t, i, r, n, a) {
    var o = new J(e._pt, t, i, 0, 1, a ? cs : ds);
    return (e._pt = o), (o.b = r), (o.e = n), e._props.push(i), o;
  },
  or = { deg: 1, rad: 1, turn: 1 },
  io = { grid: 1, flex: 1 },
  Be = function s(e, t, i, r) {
    var n = parseFloat(i) || 0,
      a = (i + "").trim().substr((n + "").length) || "px",
      o = He.style,
      l = Ha.test(t),
      u = e.tagName.toLowerCase() === "svg",
      d = (u ? "client" : "offset") + (l ? "Width" : "Height"),
      h = 100,
      p = r === "px",
      m = r === "%",
      g,
      c,
      y,
      f;
    return r === a || !n || or[r] || or[a]
      ? n
      : (a !== "px" && !p && (n = s(e, t, i, "px")),
        (f = e.getCTM && gs(e)),
        (m || a === "%") && (Pe[t] || ~t.indexOf("adius"))
          ? ((g = f ? e.getBBox()[l ? "width" : "height"] : e[d]),
            $(m ? (n / g) * h : (n / 100) * g))
          : ((o[l ? "width" : "height"] = h + (p ? a : r)),
            (c =
              ~t.indexOf("adius") || (r === "em" && e.appendChild && !u)
                ? e
                : e.parentNode),
            f && (c = (e.ownerSVGElement || {}).parentNode),
            (!c || c === Ae || !c.appendChild) && (c = Ae.body),
            (y = c._gsap),
            y && m && y.width && l && y.time === se.time && !y.uncache
              ? $((n / y.width) * h)
              : ((m || a === "%") &&
                  !io[Se(c, "display")] &&
                  (o.position = Se(e, "position")),
                c === e && (o.position = "static"),
                c.appendChild(He),
                (g = He[d]),
                c.removeChild(He),
                (o.position = "absolute"),
                l && m && ((y = We(c)), (y.time = se.time), (y.width = c[d])),
                $(p ? (g * n) / h : g && n ? (h / g) * n : 0))));
  },
  Ee = function (e, t, i, r) {
    var n;
    return (
      Fi || bi(),
      t in ye &&
        t !== "transform" &&
        ((t = ye[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
      Pe[t] && t !== "transform"
        ? ((n = xt(e, r)),
          (n =
            t !== "transformOrigin"
              ? n[t]
              : n.svg
              ? n.origin
              : Nt(Se(e, pe)) + " " + n.zOrigin + "px"))
        : ((n = e.style[t]),
          (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) &&
            (n =
              ($t[t] && $t[t](e, t, i)) ||
              Se(e, t) ||
              Ar(e, t) ||
              (t === "opacity" ? 1 : 0))),
      i && !~(n + "").trim().indexOf(" ") ? Be(e, t, n, i) + i : n
    );
  },
  ro = function (e, t, i, r) {
    if (!i || i === "none") {
      var n = lt(t, e, 1),
        a = n && Se(e, n, 1);
      a && a !== i
        ? ((t = n), (i = a))
        : t === "borderColor" && (i = Se(e, "borderTopColor"));
    }
    var o = new J(this._pt, e.style, t, 0, 1, os),
      l = 0,
      u = 0,
      d,
      h,
      p,
      m,
      g,
      c,
      y,
      f,
      _,
      v,
      S,
      x;
    if (
      ((o.b = i),
      (o.e = r),
      (i += ""),
      (r += ""),
      r === "auto" && ((e.style[t] = r), (r = Se(e, t) || r), (e.style[t] = i)),
      (d = [i, r]),
      Qr(d),
      (i = d[0]),
      (r = d[1]),
      (p = i.match(Qe) || []),
      (x = r.match(Qe) || []),
      x.length)
    ) {
      for (; (h = Qe.exec(r)); )
        (y = h[0]),
          (_ = r.substring(l, h.index)),
          g
            ? (g = (g + 1) % 5)
            : (_.substr(-5) === "rgba(" || _.substr(-5) === "hsla(") && (g = 1),
          y !== (c = p[u++] || "") &&
            ((m = parseFloat(c) || 0),
            (S = c.substr((m + "").length)),
            y.charAt(1) === "=" && (y = Je(m, y) + S),
            (f = parseFloat(y)),
            (v = y.substr((f + "").length)),
            (l = Qe.lastIndex - v.length),
            v ||
              ((v = v || ne.units[t] || S),
              l === r.length && ((r += v), (o.e += v))),
            S !== v && (m = Be(e, t, c, v) || 0),
            (o._pt = {
              _next: o._pt,
              p: _ || u === 1 ? _ : ",",
              s: m,
              c: f - m,
              m: (g && g < 4) || t === "zIndex" ? Math.round : 0,
            }));
      o.c = l < r.length ? r.substring(l, r.length) : "";
    } else o.r = t === "display" && r === "none" ? cs : ds;
    return Cr.test(r) && (o.e = 0), (this._pt = o), o;
  },
  lr = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  so = function (e) {
    var t = e.split(" "),
      i = t[0],
      r = t[1] || "50%";
    return (
      (i === "top" || i === "bottom" || r === "left" || r === "right") &&
        ((e = i), (i = r), (r = e)),
      (t[0] = lr[i] || i),
      (t[1] = lr[r] || r),
      t.join(" ")
    );
  },
  no = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var i = t.t,
        r = i.style,
        n = t.u,
        a = i._gsap,
        o,
        l,
        u;
      if (n === "all" || n === !0) (r.cssText = ""), (l = 1);
      else
        for (n = n.split(","), u = n.length; --u > -1; )
          (o = n[u]),
            Pe[o] && ((l = 1), (o = o === "transformOrigin" ? pe : R)),
            yt(i, o);
      l &&
        (yt(i, R),
        a &&
          (a.svg && i.removeAttribute("transform"),
          xt(i, 1),
          (a.uncache = 1),
          fs(r)));
    }
  },
  $t = {
    clearProps: function (e, t, i, r, n) {
      if (n.data !== "isFromStart") {
        var a = (e._pt = new J(e._pt, t, i, 0, 0, no));
        return (a.u = r), (a.pr = -10), (a.tween = n), e._props.push(i), 1;
      }
    },
  },
  St = [1, 0, 0, 1, 0, 0],
  _s = {},
  vs = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  ur = function (e) {
    var t = Se(e, R);
    return vs(t) ? St : t.substr(7).match(Er).map($);
  },
  Ni = function (e, t) {
    var i = e._gsap || We(e),
      r = e.style,
      n = ur(e),
      a,
      o,
      l,
      u;
    return i.svg && e.getAttribute("transform")
      ? ((l = e.transform.baseVal.consolidate().matrix),
        (n = [l.a, l.b, l.c, l.d, l.e, l.f]),
        n.join(",") === "1,0,0,1,0,0" ? St : n)
      : (n === St &&
          !e.offsetParent &&
          e !== et &&
          !i.svg &&
          ((l = r.display),
          (r.display = "block"),
          (a = e.parentNode),
          (!a || !e.offsetParent) &&
            ((u = 1), (o = e.nextElementSibling), et.appendChild(e)),
          (n = ur(e)),
          l ? (r.display = l) : yt(e, "display"),
          u &&
            (o
              ? a.insertBefore(e, o)
              : a
              ? a.appendChild(e)
              : et.removeChild(e))),
        t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
  },
  Ti = function (e, t, i, r, n, a) {
    var o = e._gsap,
      l = n || Ni(e, !0),
      u = o.xOrigin || 0,
      d = o.yOrigin || 0,
      h = o.xOffset || 0,
      p = o.yOffset || 0,
      m = l[0],
      g = l[1],
      c = l[2],
      y = l[3],
      f = l[4],
      _ = l[5],
      v = t.split(" "),
      S = parseFloat(v[0]) || 0,
      x = parseFloat(v[1]) || 0,
      b,
      w,
      C,
      T;
    i
      ? l !== St &&
        (w = m * y - g * c) &&
        ((C = S * (y / w) + x * (-c / w) + (c * _ - y * f) / w),
        (T = S * (-g / w) + x * (m / w) - (m * _ - g * f) / w),
        (S = C),
        (x = T))
      : ((b = ms(e)),
        (S = b.x + (~v[0].indexOf("%") ? (S / 100) * b.width : S)),
        (x = b.y + (~(v[1] || v[0]).indexOf("%") ? (x / 100) * b.height : x))),
      r || (r !== !1 && o.smooth)
        ? ((f = S - u),
          (_ = x - d),
          (o.xOffset = h + (f * m + _ * c) - f),
          (o.yOffset = p + (f * g + _ * y) - _))
        : (o.xOffset = o.yOffset = 0),
      (o.xOrigin = S),
      (o.yOrigin = x),
      (o.smooth = !!r),
      (o.origin = t),
      (o.originIsAbsolute = !!i),
      (e.style[pe] = "0px 0px"),
      a &&
        (ze(a, o, "xOrigin", u, S),
        ze(a, o, "yOrigin", d, x),
        ze(a, o, "xOffset", h, o.xOffset),
        ze(a, o, "yOffset", p, o.yOffset)),
      e.setAttribute("data-svg-origin", S + " " + x);
  },
  xt = function (e, t) {
    var i = e._gsap || new ts(e);
    if ("x" in i && !t && !i.uncache) return i;
    var r = e.style,
      n = i.scaleX < 0,
      a = "px",
      o = "deg",
      l = getComputedStyle(e),
      u = Se(e, pe) || "0",
      d,
      h,
      p,
      m,
      g,
      c,
      y,
      f,
      _,
      v,
      S,
      x,
      b,
      w,
      C,
      T,
      O,
      E,
      P,
      M,
      L,
      A,
      B,
      F,
      W,
      me,
      ge,
      Me,
      be,
      Tt,
      Te,
      Ve;
    return (
      (d = h = p = c = y = f = _ = v = S = 0),
      (m = g = 1),
      (i.svg = !!(e.getCTM && gs(e))),
      l.translate &&
        ((l.translate !== "none" ||
          l.scale !== "none" ||
          l.rotate !== "none") &&
          (r[R] =
            (l.translate !== "none"
              ? "translate3d(" +
                (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
            (l.scale !== "none"
              ? "scale(" + l.scale.split(" ").join(",") + ") "
              : "") +
            (l[R] !== "none" ? l[R] : "")),
        (r.scale = r.rotate = r.translate = "none")),
      (w = Ni(e, i.svg)),
      i.svg &&
        (i.uncache
          ? ((W = e.getBBox()),
            (u = i.xOrigin - W.x + "px " + (i.yOrigin - W.y) + "px"),
            (F = ""))
          : (F = !t && e.getAttribute("data-svg-origin")),
        Ti(e, F || u, !!F || i.originIsAbsolute, i.smooth !== !1, w)),
      (x = i.xOrigin || 0),
      (b = i.yOrigin || 0),
      w !== St &&
        ((E = w[0]),
        (P = w[1]),
        (M = w[2]),
        (L = w[3]),
        (d = A = w[4]),
        (h = B = w[5]),
        w.length === 6
          ? ((m = Math.sqrt(E * E + P * P)),
            (g = Math.sqrt(L * L + M * M)),
            (c = E || P ? Ke(P, E) * Ge : 0),
            (_ = M || L ? Ke(M, L) * Ge + c : 0),
            _ && (g *= Math.abs(Math.cos(_ * tt))),
            i.svg && ((d -= x - (x * E + b * M)), (h -= b - (x * P + b * L))))
          : ((Ve = w[6]),
            (Tt = w[7]),
            (ge = w[8]),
            (Me = w[9]),
            (be = w[10]),
            (Te = w[11]),
            (d = w[12]),
            (h = w[13]),
            (p = w[14]),
            (C = Ke(Ve, be)),
            (y = C * Ge),
            C &&
              ((T = Math.cos(-C)),
              (O = Math.sin(-C)),
              (F = A * T + ge * O),
              (W = B * T + Me * O),
              (me = Ve * T + be * O),
              (ge = A * -O + ge * T),
              (Me = B * -O + Me * T),
              (be = Ve * -O + be * T),
              (Te = Tt * -O + Te * T),
              (A = F),
              (B = W),
              (Ve = me)),
            (C = Ke(-M, be)),
            (f = C * Ge),
            C &&
              ((T = Math.cos(-C)),
              (O = Math.sin(-C)),
              (F = E * T - ge * O),
              (W = P * T - Me * O),
              (me = M * T - be * O),
              (Te = L * O + Te * T),
              (E = F),
              (P = W),
              (M = me)),
            (C = Ke(P, E)),
            (c = C * Ge),
            C &&
              ((T = Math.cos(C)),
              (O = Math.sin(C)),
              (F = E * T + P * O),
              (W = A * T + B * O),
              (P = P * T - E * O),
              (B = B * T - A * O),
              (E = F),
              (A = W)),
            y &&
              Math.abs(y) + Math.abs(c) > 359.9 &&
              ((y = c = 0), (f = 180 - f)),
            (m = $(Math.sqrt(E * E + P * P + M * M))),
            (g = $(Math.sqrt(B * B + Ve * Ve))),
            (C = Ke(A, B)),
            (_ = Math.abs(C) > 2e-4 ? C * Ge : 0),
            (S = Te ? 1 / (Te < 0 ? -Te : Te) : 0)),
        i.svg &&
          ((F = e.getAttribute("transform")),
          (i.forceCSS = e.setAttribute("transform", "") || !vs(Se(e, R))),
          F && e.setAttribute("transform", F))),
      Math.abs(_) > 90 &&
        Math.abs(_) < 270 &&
        (n
          ? ((m *= -1), (_ += c <= 0 ? 180 : -180), (c += c <= 0 ? 180 : -180))
          : ((g *= -1), (_ += _ <= 0 ? 180 : -180))),
      (t = t || i.uncache),
      (i.x =
        d -
        ((i.xPercent =
          d &&
          ((!t && i.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-d) ? -50 : 0)))
          ? (e.offsetWidth * i.xPercent) / 100
          : 0) +
        a),
      (i.y =
        h -
        ((i.yPercent =
          h &&
          ((!t && i.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0)))
          ? (e.offsetHeight * i.yPercent) / 100
          : 0) +
        a),
      (i.z = p + a),
      (i.scaleX = $(m)),
      (i.scaleY = $(g)),
      (i.rotation = $(c) + o),
      (i.rotationX = $(y) + o),
      (i.rotationY = $(f) + o),
      (i.skewX = _ + o),
      (i.skewY = v + o),
      (i.transformPerspective = S + a),
      (i.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (r[pe] = Nt(u)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = ne.force3D),
      (i.renderTransform = i.svg ? oo : ps ? ys : ao),
      (i.uncache = 0),
      i
    );
  },
  Nt = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  ni = function (e, t, i) {
    var r = X(t);
    return $(parseFloat(t) + parseFloat(Be(e, "x", i + "px", r))) + r;
  },
  ao = function (e, t) {
    (t.z = "0px"),
      (t.rotationY = t.rotationX = "0deg"),
      (t.force3D = 0),
      ys(e, t);
  },
  $e = "0deg",
  dt = "0px",
  Ne = ") ",
  ys = function (e, t) {
    var i = t || this,
      r = i.xPercent,
      n = i.yPercent,
      a = i.x,
      o = i.y,
      l = i.z,
      u = i.rotation,
      d = i.rotationY,
      h = i.rotationX,
      p = i.skewX,
      m = i.skewY,
      g = i.scaleX,
      c = i.scaleY,
      y = i.transformPerspective,
      f = i.force3D,
      _ = i.target,
      v = i.zOrigin,
      S = "",
      x = (f === "auto" && e && e !== 1) || f === !0;
    if (v && (h !== $e || d !== $e)) {
      var b = parseFloat(d) * tt,
        w = Math.sin(b),
        C = Math.cos(b),
        T;
      (b = parseFloat(h) * tt),
        (T = Math.cos(b)),
        (a = ni(_, a, w * T * -v)),
        (o = ni(_, o, -Math.sin(b) * -v)),
        (l = ni(_, l, C * T * -v + v));
    }
    y !== dt && (S += "perspective(" + y + Ne),
      (r || n) && (S += "translate(" + r + "%, " + n + "%) "),
      (x || a !== dt || o !== dt || l !== dt) &&
        (S +=
          l !== dt || x
            ? "translate3d(" + a + ", " + o + ", " + l + ") "
            : "translate(" + a + ", " + o + Ne),
      u !== $e && (S += "rotate(" + u + Ne),
      d !== $e && (S += "rotateY(" + d + Ne),
      h !== $e && (S += "rotateX(" + h + Ne),
      (p !== $e || m !== $e) && (S += "skew(" + p + ", " + m + Ne),
      (g !== 1 || c !== 1) && (S += "scale(" + g + ", " + c + Ne),
      (_.style[R] = S || "translate(0, 0)");
  },
  oo = function (e, t) {
    var i = t || this,
      r = i.xPercent,
      n = i.yPercent,
      a = i.x,
      o = i.y,
      l = i.rotation,
      u = i.skewX,
      d = i.skewY,
      h = i.scaleX,
      p = i.scaleY,
      m = i.target,
      g = i.xOrigin,
      c = i.yOrigin,
      y = i.xOffset,
      f = i.yOffset,
      _ = i.forceCSS,
      v = parseFloat(a),
      S = parseFloat(o),
      x,
      b,
      w,
      C,
      T;
    (l = parseFloat(l)),
      (u = parseFloat(u)),
      (d = parseFloat(d)),
      d && ((d = parseFloat(d)), (u += d), (l += d)),
      l || u
        ? ((l *= tt),
          (u *= tt),
          (x = Math.cos(l) * h),
          (b = Math.sin(l) * h),
          (w = Math.sin(l - u) * -p),
          (C = Math.cos(l - u) * p),
          u &&
            ((d *= tt),
            (T = Math.tan(u - d)),
            (T = Math.sqrt(1 + T * T)),
            (w *= T),
            (C *= T),
            d &&
              ((T = Math.tan(d)),
              (T = Math.sqrt(1 + T * T)),
              (x *= T),
              (b *= T))),
          (x = $(x)),
          (b = $(b)),
          (w = $(w)),
          (C = $(C)))
        : ((x = h), (C = p), (b = w = 0)),
      ((v && !~(a + "").indexOf("px")) || (S && !~(o + "").indexOf("px"))) &&
        ((v = Be(m, "x", a, "px")), (S = Be(m, "y", o, "px"))),
      (g || c || y || f) &&
        ((v = $(v + g - (g * x + c * w) + y)),
        (S = $(S + c - (g * b + c * C) + f))),
      (r || n) &&
        ((T = m.getBBox()),
        (v = $(v + (r / 100) * T.width)),
        (S = $(S + (n / 100) * T.height))),
      (T =
        "matrix(" + x + "," + b + "," + w + "," + C + "," + v + "," + S + ")"),
      m.setAttribute("transform", T),
      _ && (m.style[R] = T);
  },
  lo = function (e, t, i, r, n) {
    var a = 360,
      o = H(n),
      l = parseFloat(n) * (o && ~n.indexOf("rad") ? Ge : 1),
      u = l - r,
      d = r + u + "deg",
      h,
      p;
    return (
      o &&
        ((h = n.split("_")[1]),
        h === "short" && ((u %= a), u !== u % (a / 2) && (u += u < 0 ? a : -a)),
        h === "cw" && u < 0
          ? (u = ((u + a * sr) % a) - ~~(u / a) * a)
          : h === "ccw" && u > 0 && (u = ((u - a * sr) % a) - ~~(u / a) * a)),
      (e._pt = p = new J(e._pt, t, i, r, u, qa)),
      (p.e = d),
      (p.u = "deg"),
      e._props.push(i),
      p
    );
  },
  dr = function (e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  },
  uo = function (e, t, i) {
    var r = dr({}, i._gsap),
      n = "perspective,force3D,transformOrigin,svgOrigin",
      a = i.style,
      o,
      l,
      u,
      d,
      h,
      p,
      m,
      g;
    r.svg
      ? ((u = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (a[R] = t),
        (o = xt(i, 1)),
        yt(i, R),
        i.setAttribute("transform", u))
      : ((u = getComputedStyle(i)[R]), (a[R] = t), (o = xt(i, 1)), (a[R] = u));
    for (l in Pe)
      (u = r[l]),
        (d = o[l]),
        u !== d &&
          n.indexOf(l) < 0 &&
          ((m = X(u)),
          (g = X(d)),
          (h = m !== g ? Be(i, l, u, g) : parseFloat(u)),
          (p = parseFloat(d)),
          (e._pt = new J(e._pt, o, l, h, p - h, Si)),
          (e._pt.u = g || 0),
          e._props.push(l));
    dr(o, r);
  };
Z("padding,margin,Width,Radius", function (s, e) {
  var t = "Top",
    i = "Right",
    r = "Bottom",
    n = "Left",
    a = (e < 3 ? [t, i, r, n] : [t + n, t + i, r + i, r + n]).map(function (o) {
      return e < 2 ? s + o : "border" + o + s;
    });
  $t[e > 1 ? "border" + s : s] = function (o, l, u, d, h) {
    var p, m;
    if (arguments.length < 4)
      return (
        (p = a.map(function (g) {
          return Ee(o, g, u);
        })),
        (m = p.join(" ")),
        m.split(p[0]).length === 5 ? p[0] : m
      );
    (p = (d + "").split(" ")),
      (m = {}),
      a.forEach(function (g, c) {
        return (m[g] = p[c] = p[c] || p[((c - 1) / 2) | 0]);
      }),
      o.init(l, m, h);
  };
});
var Ss = {
  name: "css",
  register: bi,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, t, i, r, n) {
    var a = this._props,
      o = e.style,
      l = i.vars.startAt,
      u,
      d,
      h,
      p,
      m,
      g,
      c,
      y,
      f,
      _,
      v,
      S,
      x,
      b,
      w,
      C;
    Fi || bi(),
      (this.styles = this.styles || hs(e)),
      (C = this.styles.props),
      (this.tween = i);
    for (c in t)
      if (c !== "autoRound" && ((d = t[c]), !(re[c] && is(c, t, i, r, e, n)))) {
        if (
          ((m = typeof d),
          (g = $t[c]),
          m === "function" && ((d = d.call(i, r, e, n)), (m = typeof d)),
          m === "string" && ~d.indexOf("random(") && (d = _t(d)),
          g)
        )
          g(this, e, c, d, i) && (w = 1);
        else if (c.substr(0, 2) === "--")
          (u = (getComputedStyle(e).getPropertyValue(c) + "").trim()),
            (d += ""),
            (De.lastIndex = 0),
            De.test(u) || ((y = X(u)), (f = X(d))),
            f ? y !== f && (u = Be(e, c, u, f) + f) : y && (d += y),
            this.add(o, "setProperty", u, d, r, n, 0, 0, c),
            a.push(c),
            C.push(c, 0, o[c]);
        else if (m !== "undefined") {
          if (
            (l && c in l
              ? ((u = typeof l[c] == "function" ? l[c].call(i, r, e, n) : l[c]),
                H(u) && ~u.indexOf("random(") && (u = _t(u)),
                X(u + "") || (u += ne.units[c] || X(Ee(e, c)) || ""),
                (u + "").charAt(1) === "=" && (u = Ee(e, c)))
              : (u = Ee(e, c)),
            (p = parseFloat(u)),
            (_ = m === "string" && d.charAt(1) === "=" && d.substr(0, 2)),
            _ && (d = d.substr(2)),
            (h = parseFloat(d)),
            c in ye &&
              (c === "autoAlpha" &&
                (p === 1 && Ee(e, "visibility") === "hidden" && h && (p = 0),
                C.push("visibility", 0, o.visibility),
                ze(
                  this,
                  o,
                  "visibility",
                  p ? "inherit" : "hidden",
                  h ? "inherit" : "hidden",
                  !h
                )),
              c !== "scale" &&
                c !== "transform" &&
                ((c = ye[c]), ~c.indexOf(",") && (c = c.split(",")[0]))),
            (v = c in Pe),
            v)
          ) {
            if (
              (this.styles.save(c),
              S ||
                ((x = e._gsap),
                (x.renderTransform && !t.parseTransform) ||
                  xt(e, t.parseTransform),
                (b = t.smoothOrigin !== !1 && x.smooth),
                (S = this._pt =
                  new J(this._pt, o, R, 0, 1, x.renderTransform, x, 0, -1)),
                (S.dep = 1)),
              c === "scale")
            )
              (this._pt = new J(
                this._pt,
                x,
                "scaleY",
                x.scaleY,
                (_ ? Je(x.scaleY, _ + h) : h) - x.scaleY || 0,
                Si
              )),
                (this._pt.u = 0),
                a.push("scaleY", c),
                (c += "X");
            else if (c === "transformOrigin") {
              C.push(pe, 0, o[pe]),
                (d = so(d)),
                x.svg
                  ? Ti(e, d, 0, b, 0, this)
                  : ((f = parseFloat(d.split(" ")[2]) || 0),
                    f !== x.zOrigin && ze(this, x, "zOrigin", x.zOrigin, f),
                    ze(this, o, c, Nt(u), Nt(d)));
              continue;
            } else if (c === "svgOrigin") {
              Ti(e, d, 1, b, 0, this);
              continue;
            } else if (c in _s) {
              lo(this, x, c, p, _ ? Je(p, _ + d) : d);
              continue;
            } else if (c === "smoothOrigin") {
              ze(this, x, "smooth", x.smooth, d);
              continue;
            } else if (c === "force3D") {
              x[c] = d;
              continue;
            } else if (c === "transform") {
              uo(this, d, e);
              continue;
            }
          } else c in o || (c = lt(c) || c);
          if (v || ((h || h === 0) && (p || p === 0) && !Wa.test(d) && c in o))
            (y = (u + "").substr((p + "").length)),
              h || (h = 0),
              (f = X(d) || (c in ne.units ? ne.units[c] : y)),
              y !== f && (p = Be(e, c, u, f)),
              (this._pt = new J(
                this._pt,
                v ? x : o,
                c,
                p,
                (_ ? Je(p, _ + h) : h) - p,
                !v && (f === "px" || c === "zIndex") && t.autoRound !== !1
                  ? Xa
                  : Si
              )),
              (this._pt.u = f || 0),
              y !== f && f !== "%" && ((this._pt.b = u), (this._pt.r = Ya));
          else if (c in o) ro.call(this, e, c, u, _ ? _ + d : d);
          else if (c in e) this.add(e, c, u || e[c], _ ? _ + d : d, r, n);
          else if (c !== "parseTransform") {
            Oi(c, d);
            continue;
          }
          v || (c in o ? C.push(c, 0, o[c]) : C.push(c, 1, u || e[c])),
            a.push(c);
        }
      }
    w && ls(this);
  },
  render: function (e, t) {
    if (t.tween._time || !Vi())
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    else t.styles.revert();
  },
  get: Ee,
  aliases: ye,
  getSetter: function (e, t, i) {
    var r = ye[t];
    return (
      r && r.indexOf(",") < 0 && (t = r),
      t in Pe && t !== pe && (e._gsap.x || Ee(e, "x"))
        ? i && rr === i
          ? t === "scale"
            ? Qa
            : Ka
          : (rr = i || {}) && (t === "scale" ? Za : Ja)
        : e.style && !Ci(e.style[t])
        ? Ua
        : ~t.indexOf("-")
        ? ja
        : Ri(e, t)
    );
  },
  core: { _removeProperty: yt, _getMatrix: Ni },
};
ee.utils.checkPrefix = lt;
ee.core.getStyleSaver = hs;
(function (s, e, t, i) {
  var r = Z(s + "," + e + "," + t, function (n) {
    Pe[n] = 1;
  });
  Z(e, function (n) {
    (ne.units[n] = "deg"), (_s[n] = 1);
  }),
    (ye[r[13]] = s + "," + e),
    Z(i, function (n) {
      var a = n.split(":");
      ye[a[1]] = r[a[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Z(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (s) {
    ne.units[s] = "px";
  }
);
ee.registerPlugin(Ss);
var xs = ee.registerPlugin(Ss) || ee;
xs.core.Tween;
function Gt(s, e, t) {
  return Math.max(s, Math.min(e, t));
}
let co = class {
  advance(e) {
    var t;
    if (!this.isRunning) return;
    let i = !1;
    if (this.lerp)
      (this.value = (1 - (r = this.lerp)) * this.value + r * this.to),
        Math.round(this.value) === this.to &&
          ((this.value = this.to), (i = !0));
    else {
      this.currentTime += e;
      const n = Gt(0, this.currentTime / this.duration, 1);
      i = n >= 1;
      const a = i ? 1 : this.easing(n);
      this.value = this.from + (this.to - this.from) * a;
    }
    var r;
    (t = this.onUpdate) == null || t.call(this, this.value, { completed: i }),
      i && this.stop();
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(
    e,
    t,
    { lerp: i = 0.1, duration: r = 1, easing: n = (o) => o, onUpdate: a }
  ) {
    (this.from = this.value = e),
      (this.to = t),
      (this.lerp = i),
      (this.duration = r),
      (this.easing = n),
      (this.currentTime = 0),
      (this.isRunning = !0),
      (this.onUpdate = a);
  }
};
function cr(s, e) {
  let t;
  return function () {
    let i = arguments,
      r = this;
    clearTimeout(t),
      (t = setTimeout(function () {
        s.apply(r, i);
      }, e));
  };
}
class fo {
  constructor(e, t) {
    (this.onWindowResize = () => {
      (this.width = window.innerWidth), (this.height = window.innerHeight);
    }),
      (this.onWrapperResize = () => {
        (this.width = this.wrapper.clientWidth),
          (this.height = this.wrapper.clientHeight);
      }),
      (this.onContentResize = () => {
        const i =
          this.wrapper === window ? document.documentElement : this.wrapper;
        (this.scrollHeight = i.scrollHeight),
          (this.scrollWidth = i.scrollWidth);
      }),
      (this.wrapper = e),
      (this.content = t),
      this.wrapper === window
        ? (window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize())
        : ((this.wrapperResizeObserver = new ResizeObserver(
            cr(this.onWrapperResize, 100)
          )),
          this.wrapperResizeObserver.observe(this.wrapper),
          this.onWrapperResize()),
      (this.contentResizeObserver = new ResizeObserver(
        cr(this.onContentResize, 100)
      )),
      this.contentResizeObserver.observe(this.content),
      this.onContentResize();
  }
  destroy() {
    var e, t;
    window.removeEventListener("resize", this.onWindowResize, !1),
      (e = this.wrapperResizeObserver) == null || e.disconnect(),
      (t = this.contentResizeObserver) == null || t.disconnect();
  }
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height,
    };
  }
}
let bs = () => ({
    events: {},
    emit(s, ...e) {
      let t = this.events[s] || [];
      for (let i = 0, r = t.length; i < r; i++) t[i](...e);
    },
    on(s, e) {
      var t;
      return (
        ((t = this.events[s]) != null && t.push(e)) || (this.events[s] = [e]),
        () => {
          var i;
          this.events[s] =
            (i = this.events[s]) == null ? void 0 : i.filter((r) => e !== r);
        }
      );
    },
  }),
  ho = class {
    constructor(
      e,
      { wheelMultiplier: t = 1, touchMultiplier: i = 2, normalizeWheel: r = !1 }
    ) {
      (this.onTouchStart = (n) => {
        const { pageX: a, pageY: o } = n.targetTouches ? n.targetTouches[0] : n;
        (this.touchStart.x = a), (this.touchStart.y = o);
      }),
        (this.onTouchMove = (n) => {
          const { pageX: a, pageY: o } = n.targetTouches
              ? n.targetTouches[0]
              : n,
            l = -(a - this.touchStart.x) * this.touchMultiplier,
            u = -(o - this.touchStart.y) * this.touchMultiplier;
          (this.touchStart.x = a),
            (this.touchStart.y = o),
            this.emitter.emit("scroll", {
              type: "touch",
              deltaX: l,
              deltaY: u,
              event: n,
            });
        }),
        (this.onWheel = (n) => {
          let { deltaX: a, deltaY: o } = n;
          this.normalizeWheel &&
            ((a = Gt(-100, a, 100)), (o = Gt(-100, o, 100))),
            (a *= this.wheelMultiplier),
            (o *= this.wheelMultiplier),
            this.emitter.emit("scroll", {
              type: "wheel",
              deltaX: a,
              deltaY: o,
              event: n,
            });
        }),
        (this.element = e),
        (this.wheelMultiplier = t),
        (this.touchMultiplier = i),
        (this.normalizeWheel = r),
        (this.touchStart = { x: null, y: null }),
        (this.emitter = bs()),
        this.element.addEventListener("wheel", this.onWheel, { passive: !1 }),
        this.element.addEventListener("touchstart", this.onTouchStart, {
          passive: !1,
        }),
        this.element.addEventListener("touchmove", this.onTouchMove, {
          passive: !1,
        });
    }
    on(e, t) {
      return this.emitter.on(e, t);
    }
    destroy() {
      (this.emitter.events = {}),
        this.element.removeEventListener("wheel", this.onWheel, {
          passive: !1,
        }),
        this.element.removeEventListener("touchstart", this.onTouchStart, {
          passive: !1,
        }),
        this.element.removeEventListener("touchmove", this.onTouchMove, {
          passive: !1,
        });
    }
  },
  po = class {
    constructor({
      direction: e,
      gestureDirection: t,
      mouseMultiplier: i,
      smooth: r,
      wrapper: n = window,
      content: a = document.documentElement,
      wheelEventsTarget: o = n,
      smoothWheel: l = r == null || r,
      smoothTouch: u = !1,
      duration: d,
      easing: h = (v) => Math.min(1, 1.001 - Math.pow(2, -10 * v)),
      lerp: p = d ? null : 0.1,
      infinite: m = !1,
      orientation: g = e ?? "vertical",
      gestureOrientation: c = t ?? "vertical",
      touchMultiplier: y = 2,
      wheelMultiplier: f = i ?? 1,
      normalizeWheel: _ = !1,
    } = {}) {
      (this.onVirtualScroll = ({ type: v, deltaX: S, deltaY: x, event: b }) => {
        if (
          b.ctrlKey ||
          (this.options.gestureOrientation === "vertical" && x === 0) ||
          (this.options.gestureOrientation === "horizontal" && S === 0) ||
          b
            .composedPath()
            .find((C) =>
              C == null || C.hasAttribute == null
                ? void 0
                : C.hasAttribute("data-lenis-prevent")
            )
        )
          return;
        if (this.isStopped || this.isLocked) return void b.preventDefault();
        if (
          ((this.isSmooth =
            (this.options.smoothTouch && v === "touch") ||
            (this.options.smoothWheel && v === "wheel")),
          !this.isSmooth)
        )
          return (this.isScrolling = !1), void this.animate.stop();
        b.preventDefault();
        let w = x;
        this.options.gestureOrientation === "both"
          ? (w = Math.abs(x) > Math.abs(S) ? x : S)
          : this.options.gestureOrientation === "horizontal" && (w = S),
          this.scrollTo(this.targetScroll + w, { programmatic: !1 });
      }),
        (this.onScroll = () => {
          if (!this.isScrolling) {
            const v = this.animatedScroll;
            (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.velocity = 0),
              (this.direction = Math.sign(this.animatedScroll - v)),
              this.emit();
          }
        }),
        e &&
          console.warn(
            "Lenis: `direction` option is deprecated, use `orientation` instead"
          ),
        t &&
          console.warn(
            "Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"
          ),
        i &&
          console.warn(
            "Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"
          ),
        r &&
          console.warn(
            "Lenis: `smooth` option is deprecated, use `smoothWheel` instead"
          ),
        (window.lenisVersion = "1.0.5"),
        (n !== document.documentElement && n !== document.body) || (n = window),
        (this.options = {
          wrapper: n,
          content: a,
          wheelEventsTarget: o,
          smoothWheel: l,
          smoothTouch: u,
          duration: d,
          easing: h,
          lerp: p,
          infinite: m,
          gestureOrientation: c,
          orientation: g,
          touchMultiplier: y,
          wheelMultiplier: f,
          normalizeWheel: _,
        }),
        (this.dimensions = new fo(n, a)),
        this.rootElement.classList.add("lenis"),
        (this.velocity = 0),
        (this.isStopped = !1),
        (this.isSmooth = l || u),
        (this.isScrolling = !1),
        (this.targetScroll = this.animatedScroll = this.actualScroll),
        (this.animate = new co()),
        (this.emitter = bs()),
        this.options.wrapper.addEventListener("scroll", this.onScroll, {
          passive: !1,
        }),
        (this.virtualScroll = new ho(o, {
          touchMultiplier: y,
          wheelMultiplier: f,
          normalizeWheel: _,
        })),
        this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    destroy() {
      (this.emitter.events = {}),
        this.options.wrapper.removeEventListener("scroll", this.onScroll, {
          passive: !1,
        }),
        this.virtualScroll.destroy();
    }
    on(e, t) {
      return this.emitter.on(e, t);
    }
    off(e, t) {
      var i;
      this.emitter.events[e] =
        (i = this.emitter.events[e]) == null
          ? void 0
          : i.filter((r) => t !== r);
    }
    setScroll(e) {
      this.isHorizontal
        ? (this.rootElement.scrollLeft = e)
        : (this.rootElement.scrollTop = e);
    }
    emit() {
      this.emitter.emit("scroll", this);
    }
    reset() {
      (this.isLocked = !1),
        (this.isScrolling = !1),
        (this.velocity = 0),
        this.animate.stop();
    }
    start() {
      (this.isStopped = !1), this.reset();
    }
    stop() {
      (this.isStopped = !0), this.animate.stop(), this.reset();
    }
    raf(e) {
      const t = e - (this.time || e);
      (this.time = e), this.animate.advance(0.001 * t);
    }
    scrollTo(
      e,
      {
        offset: t = 0,
        immediate: i = !1,
        lock: r = !1,
        duration: n = this.options.duration,
        easing: a = this.options.easing,
        lerp: o = !n && this.options.lerp,
        onComplete: l = null,
        force: u = !1,
        programmatic: d = !0,
      } = {}
    ) {
      if (!this.isStopped || u) {
        if (["top", "left", "start"].includes(e)) e = 0;
        else if (["bottom", "right", "end"].includes(e)) e = this.limit;
        else {
          var h;
          let p;
          if (
            (typeof e == "string"
              ? (p = document.querySelector(e))
              : (h = e) != null && h.nodeType && (p = e),
            p)
          ) {
            if (this.options.wrapper !== window) {
              const g = this.options.wrapper.getBoundingClientRect();
              t -= this.isHorizontal ? g.left : g.top;
            }
            const m = p.getBoundingClientRect();
            e = (this.isHorizontal ? m.left : m.top) + this.animatedScroll;
          }
        }
        if (typeof e == "number") {
          if (
            ((e += t),
            (e = Math.round(e)),
            this.options.infinite
              ? d && (this.targetScroll = this.animatedScroll = this.scroll)
              : (e = Gt(0, e, this.limit)),
            i)
          )
            return (
              (this.animatedScroll = this.targetScroll = e),
              this.setScroll(this.scroll),
              this.reset(),
              this.emit(),
              void (l == null || l())
            );
          if (!d) {
            if (e === this.targetScroll) return;
            this.targetScroll = e;
          }
          this.animate.fromTo(this.animatedScroll, e, {
            duration: n,
            easing: a,
            lerp: o,
            onUpdate: (p, { completed: m }) => {
              r && (this.isLocked = !0),
                (this.isScrolling = !0),
                (this.velocity = p - this.animatedScroll),
                (this.direction = Math.sign(this.velocity)),
                (this.animatedScroll = p),
                this.setScroll(this.scroll),
                d && (this.targetScroll = p),
                m &&
                  (r && (this.isLocked = !1),
                  requestAnimationFrame(() => {
                    this.isScrolling = !1;
                  }),
                  (this.velocity = 0),
                  l == null || l()),
                this.emit();
            },
          });
        }
      }
    }
    get rootElement() {
      return this.options.wrapper === window
        ? this.options.content
        : this.options.wrapper;
    }
    get limit() {
      return this.isHorizontal
        ? this.dimensions.limit.x
        : this.dimensions.limit.y;
    }
    get isHorizontal() {
      return this.options.orientation === "horizontal";
    }
    get actualScroll() {
      return this.isHorizontal
        ? this.rootElement.scrollLeft
        : this.rootElement.scrollTop;
    }
    get scroll() {
      return this.options.infinite
        ? (function (e, t) {
            let i = e % t;
            return ((t > 0 && i < 0) || (t < 0 && i > 0)) && (i += t), i;
          })(this.animatedScroll, this.limit)
        : this.animatedScroll;
    }
    get progress() {
      return this.limit === 0 ? 1 : this.scroll / this.limit;
    }
    get isSmooth() {
      return this.__isSmooth;
    }
    set isSmooth(e) {
      this.__isSmooth !== e &&
        (this.rootElement.classList.toggle("lenis-smooth", e),
        (this.__isSmooth = e));
    }
    get isScrolling() {
      return this.__isScrolling;
    }
    set isScrolling(e) {
      this.__isScrolling !== e &&
        (this.rootElement.classList.toggle("lenis-scrolling", e),
        (this.__isScrolling = e));
    }
    get isStopped() {
      return this.__isStopped;
    }
    set isStopped(e) {
      this.__isStopped !== e &&
        (this.rootElement.classList.toggle("lenis-stopped", e),
        (this.__isStopped = e));
    }
  };
var fr = function (s) {
    return Array.prototype.slice.call(s);
  },
  hr = function () {
    var s = window.navigator.userAgent,
      e = !!s.match(/iPad/i) || !!s.match(/iPhone/i),
      t = !!s.match(/WebKit/i);
    return e && t && !s.match(/CriOS/i);
  },
  mo = {
    scale: 1.5,
    speed: 1.5,
    wrapperClass: null,
    willChange: !1,
    externalRAF: !1,
  },
  Y = function (s, e) {
    var t = this;
    if (
      ((this.element = s),
      (this.wrapper = document.createElement("div")),
      (this.options = Object.assign({}, mo, e)),
      this.updateOptions(),
      (this.vh = document.documentElement.clientHeight),
      (this.isVisible = !1),
      (this.damp = this.calcDamp(document.documentElement.clientWidth)),
      (this.elementTagName = this.element.tagName.toLowerCase()),
      this.elementTagName === "img")
    ) {
      var i = this.element.getAttribute("src");
      if (!i) return;
      (async function (r) {
        var n = new Image();
        return (n.src = r), await n.decode(), n;
      })(i).then(function () {
        t.createParallax();
      });
    } else this.createParallax();
  };
(Y.prototype.createParallax = function () {
  this.setStyle(!0), this.wrapElement(), hr() || this.createObserver();
}),
  (Y.prototype.updateOptions = function () {
    var s = this.element.getAttribute("data-u-scale"),
      e = this.element.getAttribute("data-u-speed"),
      t = this.element.getAttribute("data-u-willchange");
    s !== null && (this.options.scale = Number(s)),
      e !== null && (this.options.speed = Number(e)),
      t !== null && (this.options.willChange = !0);
  }),
  (Y.prototype.setStyle = function (s) {
    s === void 0 && (s = !1);
    var e = this.element.clientHeight,
      t = this.element.clientWidth,
      i = window.getComputedStyle(this.element),
      r = i.position === "absolute",
      n = this.wrapper.style,
      a = this.element.style;
    (this.overflow = Math.floor(10 * (e - e * this.options.scale)) / 10),
      r &&
        i.marginRight !== "0px" &&
        i.marginLeft !== "0px" &&
        i.marginLeft === i.marginRight &&
        (n.margin = "auto"),
      (i.marginTop === "0px" && i.marginBottom === "0px") ||
        ((n.marginTop = i.marginTop),
        (n.marginBottom = i.marginBottom),
        (a.marginTop = "0"),
        (a.marginBottom = "0")),
      i.inset !== "auto" &&
        ((n.top = i.top),
        (n.right = i.right),
        (n.bottom = i.bottom),
        (n.left = i.left),
        (a.top = "0"),
        (a.right = "0"),
        (a.bottom = "0"),
        (a.left = "0")),
      i.transform !== "none" && (n.transform = i.transform),
      i.zIndex !== "auto" && (n.zIndex = i.zIndex),
      (n.position = r ? "absolute" : "relative"),
      i.gridArea !== "auto" &&
        i.gridArea !== "auto / auto / auto / auto" &&
        ((n.gridArea = i.gridArea), (a.gridArea = "auto")),
      s &&
        ((n.width = "100%"),
        (n.overflow = "hidden"),
        (a.display = "block"),
        (a.overflow = "hidden"),
        (a.backfaceVisibility = "hidden"),
        i.padding !== "0px" && (a.padding = "0"),
        this.elementTagName === "img"
          ? (a.objectFit = "cover")
          : this.elementTagName !== "video" &&
            (a.backgroundPosition = "center")),
      i.borderRadius !== "0px" &&
        ((n.borderRadius = i.borderRadius),
        n.isolation || (n.isolation = "isolate"),
        i.marginLeft !== "0px" &&
          ((n.marginLeft = i.marginLeft), (a.marginLeft = "0")),
        i.marginRight !== "0px" &&
          ((n.marginRight = i.marginRight), (a.marginRight = "0")),
        (n.width = t + "px")),
      r && ((n.width = t + "px"), (a.width = "100%")),
      i.maxHeight !== "none" &&
        ((n.maxHeight = i.maxHeight), (a.maxHeight = "none")),
      i.minHeight !== "0px" &&
        ((n.minHeight = i.minHeight), (a.minHeight = "none")),
      (a.width = t + "px"),
      n.setProperty("height", e + "px", "important"),
      a.setProperty("height", e * this.options.scale + "px", "important"),
      (this.wrapperHeight = e);
  }),
  (Y.prototype.wrapElement = function () {
    var s =
      this.element.getAttribute("data-u-wrapper-class") ||
      this.options.wrapperClass;
    s && this.wrapper.classList.add(s);
    var e = this.element.closest("picture");
    if (e !== null)
      e.parentNode !== null && e.parentNode.insertBefore(this.wrapper, e),
        this.wrapper.appendChild(e);
    else {
      var t = this.element.parentNode;
      t !== null && t.insertBefore(this.wrapper, this.element),
        this.wrapper.appendChild(this.element);
    }
  }),
  (Y.prototype.checkVisible = function () {
    var s = this.wrapper.getBoundingClientRect();
    0 < s.bottom && s.top < this.vh ? this.onEnter() : this.onLeave();
  }),
  (Y.prototype.createObserver = function () {
    (this.observer = new IntersectionObserver(this.handleIntersect.bind(this), {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    })),
      this.observer.observe(this.wrapper);
  }),
  (Y.prototype.handleIntersect = function (s) {
    s[0].isIntersecting ? this.onEnter() : this.onLeave();
  }),
  (Y.prototype.onEnter = function () {
    var s = this.element.style;
    this.options.willChange &&
      s.willChange !== "transform" &&
      (s.willChange = "transform"),
      (this.isVisible = !0);
  }),
  (Y.prototype.onLeave = function () {
    var s = this.element.style;
    this.options.willChange &&
      s.willChange === "transform" &&
      (s.willChange = ""),
      (this.isVisible = !1);
  }),
  (Y.prototype.calcTranslateValue = function () {
    var s = window.pageYOffset;
    s < 0 && (s = 0);
    var e = this.wrapper.getBoundingClientRect().top + s,
      t = (s + this.vh - e) / ((this.vh + this.wrapperHeight) / 100),
      i = Math.min(100, Math.max(0, t)) / 100,
      r = (this.overflow * this.options.speed - this.overflow) / 2,
      n = this.overflow * (1 - i) * this.options.speed * this.damp - r;
    return Number(n.toFixed(4));
  }),
  (Y.prototype.calcDamp = function (s) {
    var e = this.options.scale,
      t = this.options.speed;
    if ((t >= 1.4 || e >= 1.4) && s <= 1e3) {
      e < 1 && (e = 1), t < 1 && (t = 1);
      var i = 1.2 - (1 - (s / 1e3 + (3 - (e + t)))),
        r = Math.max(0.5, Math.min(1, i));
      return Math.floor(100 * r) / 100;
    }
    return 1;
  }),
  (Y.prototype.transformParallax = function () {
    this.element.style.transform =
      "translate3d(0 , " + this.calcTranslateValue() + "px , 0)";
  }),
  (Y.prototype.animate = function () {
    hr() && this.checkVisible(),
      window.pageYOffset < 0 || (this.isVisible && this.transformParallax());
  }),
  (Y.prototype.reset = function () {
    this.damp = this.calcDamp(window.innerWidth);
    var s = this.wrapper.style,
      e = this.element.style;
    (this.vh = document.documentElement.clientHeight),
      (s.width = ""),
      (s.position = ""),
      (s.height = "100%"),
      (e.width = ""),
      this.elementTagName === "img" &&
        s.position === "absolute" &&
        (s.height = "100%"),
      s.gridArea === "" ? (e.height = "") : (e.height = "100%"),
      s.margin !== "0px" && ((s.margin = ""), (e.margin = "")),
      s.inset !== "auto" &&
        ((s.top = ""),
        (s.right = ""),
        (s.bottom = ""),
        (s.left = ""),
        (e.top = ""),
        (e.right = ""),
        (e.bottom = ""),
        (e.left = "")),
      s.transform !== "none" && ((s.transform = ""), (e.transform = "")),
      s.zIndex !== "auto" && (s.zIndex = ""),
      s.borderRadius !== "0px" && ((s.borderRadius = ""), (s.isolation = "")),
      this.setStyle(),
      this.transformParallax();
  }),
  (Y.prototype.destroy = function () {
    var s;
    this.observer && this.observer.disconnect(),
      this.wrapper.removeAttribute("style"),
      this.element.removeAttribute("style"),
      (s = this.wrapper).replaceWith.apply(s, this.wrapper.childNodes);
  });
var Oe = function (s, e) {
  if (((this.elements = []), !s))
    throw new Error("Argument 'elements' is null.");
  var t, i;
  (this.elements = (function (r) {
    return Array.isArray(r)
      ? r
      : typeof r == "string"
      ? fr(document.querySelectorAll(r))
      : r instanceof HTMLElement
      ? [r]
      : r instanceof NodeList || r instanceof HTMLCollection
      ? fr(r)
      : [r];
  })(s)),
    (this.options = e),
    (this.instances = []),
    (this.externalRAF =
      !(!this.options || !this.options.externalRAF) &&
      this.options.externalRAF),
    (this.onResizeEvent = this.resize.bind(this)),
    (this.isInit = !1),
    (t =
      typeof Promise < "u" &&
      Promise.toString().indexOf("[native code]") !== -1),
    (i = typeof Element < "u" && Element.prototype.closest),
    t && i && "IntersectionObserver" in window && this.init();
};
(Oe.prototype.init = function () {
  var s = this;
  this.isInit ||
    ((this.instances = this.elements.map(function (e) {
      return new Y(e, s.options);
    })),
    this.externalRAF || this.animate(),
    this.addEventListeners(),
    (this.isInit = !0));
}),
  (Oe.prototype.animate = function () {
    this.instances.forEach(function (s) {
      s.animate();
    }),
      this.externalRAF ||
        (this.requestId = window.requestAnimationFrame(
          this.animate.bind(this)
        ));
  }),
  (Oe.prototype.cancel = function () {
    this.requestId && window.cancelAnimationFrame(this.requestId);
  }),
  (Oe.prototype.reset = function () {
    this.instances.forEach(function (s) {
      s.reset();
    });
  }),
  (Oe.prototype.resize = function () {
    clearTimeout(this.timer),
      (this.timer = window.setTimeout(this.reset.bind(this), 500)),
      this.reset.bind(this);
  }),
  (Oe.prototype.addEventListeners = function () {
    navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)
      ? window.addEventListener("orientationchange", this.onResizeEvent)
      : window.addEventListener("resize", this.onResizeEvent);
  }),
  (Oe.prototype.destroy = function () {
    this.cancel(),
      window.removeEventListener("resize", this.onResizeEvent),
      window.removeEventListener("orientationchange", this.onResizeEvent),
      this.instances.forEach(function (s) {
        s.destroy();
      }),
      (this.isInit = !1);
  });
function go() {
  const s = new po({
    wrapper: document.querySelector(".scroll-container"),
    content: document.querySelector(".scroll-container > article"),
    duration: 2,
    easing: (i) => Math.min(1, 1.001 - Math.pow(2, -10 * i)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: !0,
    wheelMultiplier: 1,
  });
  function e(i) {
    s.raf(i), requestAnimationFrame(e);
  }
  requestAnimationFrame(e),
    document.querySelectorAll(".parallax").forEach((i) => {
      new Oe(i, { speed: 2, scale: 1.2, wrapperClass: "parallax-wrapper" });
    });
}
document.addEventListener("DOMContentLoaded", function () {
  const { handleNavMobile: s, handleNavBg: e, scrollToAnchor: t } = Ps;
  s(),
    e(),
    t(),
    go(),
    jn(),
    Kn(),
    window.matchMedia("(min-width:1080px)").matches && Ts.init();
  var i = xs.timeline();
  i.to(".loader video", {
    opacity: 0,
    ease: "power4.inOut",
    delay: 2.5,
    duration: 0.75,
  })
    .to(".loader__progress", {
      opacity: 0,
      ease: "power4.inOut",
      delay: -0.75,
      duration: 0.75,
    })
    .to(".loader__logo", {
      y: "-100%",
      opacity: 0,
      ease: "power4.inOut",
      delay: -0.5,
      duration: 0.75,
    })
    .to(".loader", {
      y: "-100%",
      ease: "power4.inOut",
      zIndex: -1,
      delay: -0.5,
      duration: 0.75,
    })
    .from(".navbar__logo", { opacity: 0, y: "-50%" });
  function r() {
    document.querySelector("body").classList.remove("is--loading"), o();
  }
  setTimeout(r, 3e3);
  const n = document.querySelectorAll(".mailtolinks");
  for (const l of n) {
    const u = l.dataset;
    l.setAttribute("href", `mailto:${u.user}@${u.domain}`),
      (l.textContent = `${u.user}@${u.domain}`);
  }
  // function a() {
  //   let u = new Date().getFullYear();
  //   document.getElementById("year").innerHTML = u;
  // }
  a();
  function o() {
    const l = document.querySelectorAll(".js-video-autoplay"),
      u = { rootMargin: "0px -100px", threshold: 0 },
      d = (p) => {
        p.forEach((m) => {
          m.isIntersecting ? m.target.play() : m.target.pause();
        });
      },
      h = new IntersectionObserver(d, u);
    l.forEach((p) => {
      h.observe(p);
    });
  }
});
