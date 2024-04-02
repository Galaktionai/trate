/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var tb = Object.create;
  var un = Object.defineProperty;
  var rb = Object.getOwnPropertyDescriptor;
  var nb = Object.getOwnPropertyNames;
  var ib = Object.getPrototypeOf,
    ob = Object.prototype.hasOwnProperty;
  var me = (e, t) => () => (e && (t = e((e = 0))), t);
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    ke = (e, t) => {
      for (var r in t) un(e, r, { get: t[r], enumerable: !0 });
    },
    qs = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of nb(t))
          !ob.call(e, i) &&
            i !== r &&
            un(e, i, {
              get: () => t[i],
              enumerable: !(n = rb(t, i)) || n.enumerable,
            });
      return e;
    };
  var le = (e, t, r) => (
      (r = e != null ? tb(ib(e)) : {}),
      qs(
        t || !e || !e.__esModule
          ? un(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    nt = (e) => qs(un({}, "__esModule", { value: !0 }), e);
  var qi = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(f, T) {
        var x = new _.Bare();
        return x.init(f, T);
      }
      function r(f) {
        return f.replace(/[A-Z]/g, function (T) {
          return "-" + T.toLowerCase();
        });
      }
      function n(f) {
        var T = parseInt(f.slice(1), 16),
          x = (T >> 16) & 255,
          N = (T >> 8) & 255,
          A = 255 & T;
        return [x, N, A];
      }
      function i(f, T, x) {
        return (
          "#" + ((1 << 24) | (f << 16) | (T << 8) | x).toString(16).slice(1)
        );
      }
      function o() {}
      function a(f, T) {
        d("Type warning: Expected: [" + f + "] Got: [" + typeof T + "] " + T);
      }
      function s(f, T, x) {
        d("Units do not match [" + f + "]: " + T + ", " + x);
      }
      function u(f, T, x) {
        if ((T !== void 0 && (x = T), f === void 0)) return x;
        var N = x;
        return (
          Fe.test(f) || !He.test(f)
            ? (N = parseInt(f, 10))
            : He.test(f) && (N = 1e3 * parseFloat(f)),
          0 > N && (N = 0),
          N === N ? N : x
        );
      }
      function d(f) {
        oe.debug && window && window.console.warn(f);
      }
      function y(f) {
        for (var T = -1, x = f ? f.length : 0, N = []; ++T < x; ) {
          var A = f[T];
          A && N.push(A);
        }
        return N;
      }
      var v = (function (f, T, x) {
          function N(ae) {
            return typeof ae == "object";
          }
          function A(ae) {
            return typeof ae == "function";
          }
          function D() {}
          function te(ae, ge) {
            function $() {
              var Re = new se();
              return A(Re.init) && Re.init.apply(Re, arguments), Re;
            }
            function se() {}
            ge === x && ((ge = ae), (ae = Object)), ($.Bare = se);
            var ue,
              be = (D[f] = ae[f]),
              rt = (se[f] = $[f] = new D());
            return (
              (rt.constructor = $),
              ($.mixin = function (Re) {
                return (se[f] = $[f] = te($, Re)[f]), $;
              }),
              ($.open = function (Re) {
                if (
                  ((ue = {}),
                  A(Re) ? (ue = Re.call($, rt, be, $, ae)) : N(Re) && (ue = Re),
                  N(ue))
                )
                  for (var Tr in ue) T.call(ue, Tr) && (rt[Tr] = ue[Tr]);
                return A(rt.init) || (rt.init = ae), $;
              }),
              $.open(ge)
            );
          }
          return te;
        })("prototype", {}.hasOwnProperty),
        g = {
          ease: [
            "ease",
            function (f, T, x, N) {
              var A = (f /= N) * f,
                D = A * f;
              return (
                T +
                x * (-2.75 * D * A + 11 * A * A + -15.5 * D + 8 * A + 0.25 * f)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (f, T, x, N) {
              var A = (f /= N) * f,
                D = A * f;
              return T + x * (-1 * D * A + 3 * A * A + -3 * D + 2 * A);
            },
          ],
          "ease-out": [
            "ease-out",
            function (f, T, x, N) {
              var A = (f /= N) * f,
                D = A * f;
              return (
                T +
                x * (0.3 * D * A + -1.6 * A * A + 2.2 * D + -1.8 * A + 1.9 * f)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (f, T, x, N) {
              var A = (f /= N) * f,
                D = A * f;
              return T + x * (2 * D * A + -5 * A * A + 2 * D + 2 * A);
            },
          ],
          linear: [
            "linear",
            function (f, T, x, N) {
              return (x * f) / N + T;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (f, T, x, N) {
              return x * (f /= N) * f + T;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (f, T, x, N) {
              return -x * (f /= N) * (f - 2) + T;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (f, T, x, N) {
              return (f /= N / 2) < 1
                ? (x / 2) * f * f + T
                : (-x / 2) * (--f * (f - 2) - 1) + T;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (f, T, x, N) {
              return x * (f /= N) * f * f + T;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (f, T, x, N) {
              return x * ((f = f / N - 1) * f * f + 1) + T;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (f, T, x, N) {
              return (f /= N / 2) < 1
                ? (x / 2) * f * f * f + T
                : (x / 2) * ((f -= 2) * f * f + 2) + T;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (f, T, x, N) {
              return x * (f /= N) * f * f * f + T;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (f, T, x, N) {
              return -x * ((f = f / N - 1) * f * f * f - 1) + T;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (f, T, x, N) {
              return (f /= N / 2) < 1
                ? (x / 2) * f * f * f * f + T
                : (-x / 2) * ((f -= 2) * f * f * f - 2) + T;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (f, T, x, N) {
              return x * (f /= N) * f * f * f * f + T;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (f, T, x, N) {
              return x * ((f = f / N - 1) * f * f * f * f + 1) + T;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (f, T, x, N) {
              return (f /= N / 2) < 1
                ? (x / 2) * f * f * f * f * f + T
                : (x / 2) * ((f -= 2) * f * f * f * f + 2) + T;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (f, T, x, N) {
              return -x * Math.cos((f / N) * (Math.PI / 2)) + x + T;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (f, T, x, N) {
              return x * Math.sin((f / N) * (Math.PI / 2)) + T;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (f, T, x, N) {
              return (-x / 2) * (Math.cos((Math.PI * f) / N) - 1) + T;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (f, T, x, N) {
              return f === 0 ? T : x * Math.pow(2, 10 * (f / N - 1)) + T;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (f, T, x, N) {
              return f === N
                ? T + x
                : x * (-Math.pow(2, (-10 * f) / N) + 1) + T;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (f, T, x, N) {
              return f === 0
                ? T
                : f === N
                ? T + x
                : (f /= N / 2) < 1
                ? (x / 2) * Math.pow(2, 10 * (f - 1)) + T
                : (x / 2) * (-Math.pow(2, -10 * --f) + 2) + T;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (f, T, x, N) {
              return -x * (Math.sqrt(1 - (f /= N) * f) - 1) + T;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (f, T, x, N) {
              return x * Math.sqrt(1 - (f = f / N - 1) * f) + T;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (f, T, x, N) {
              return (f /= N / 2) < 1
                ? (-x / 2) * (Math.sqrt(1 - f * f) - 1) + T
                : (x / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + T;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (f, T, x, N, A) {
              return (
                A === void 0 && (A = 1.70158),
                x * (f /= N) * f * ((A + 1) * f - A) + T
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (f, T, x, N, A) {
              return (
                A === void 0 && (A = 1.70158),
                x * ((f = f / N - 1) * f * ((A + 1) * f + A) + 1) + T
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (f, T, x, N, A) {
              return (
                A === void 0 && (A = 1.70158),
                (f /= N / 2) < 1
                  ? (x / 2) * f * f * (((A *= 1.525) + 1) * f - A) + T
                  : (x / 2) *
                      ((f -= 2) * f * (((A *= 1.525) + 1) * f + A) + 2) +
                    T
              );
            },
          ],
        },
        E = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        O = document,
        I = window,
        C = "bkwld-tram",
        w = /[\-\.0-9]/g,
        P = /[A-Z]/,
        R = "number",
        M = /^(rgb|#)/,
        k = /(em|cm|mm|in|pt|pc|px)$/,
        F = /(em|cm|mm|in|pt|pc|px|%)$/,
        z = /(deg|rad|turn)$/,
        K = "unitless",
        Q = /(all|none) 0s ease 0s/,
        ee = /^(width|height)$/,
        B = " ",
        S = O.createElement("a"),
        m = ["Webkit", "Moz", "O", "ms"],
        q = ["-webkit-", "-moz-", "-o-", "-ms-"],
        U = function (f) {
          if (f in S.style) return { dom: f, css: f };
          var T,
            x,
            N = "",
            A = f.split("-");
          for (T = 0; T < A.length; T++)
            N += A[T].charAt(0).toUpperCase() + A[T].slice(1);
          for (T = 0; T < m.length; T++)
            if (((x = m[T] + N), x in S.style))
              return { dom: x, css: q[T] + f };
        },
        H = (t.support = {
          bind: Function.prototype.bind,
          transform: U("transform"),
          transition: U("transition"),
          backface: U("backface-visibility"),
          timing: U("transition-timing-function"),
        });
      if (H.transition) {
        var J = H.timing.dom;
        if (((S.style[J] = g["ease-in-back"][0]), !S.style[J]))
          for (var re in E) g[re][0] = E[re];
      }
      var V = (t.frame = (function () {
          var f =
            I.requestAnimationFrame ||
            I.webkitRequestAnimationFrame ||
            I.mozRequestAnimationFrame ||
            I.oRequestAnimationFrame ||
            I.msRequestAnimationFrame;
          return f && H.bind
            ? f.bind(I)
            : function (T) {
                I.setTimeout(T, 16);
              };
        })()),
        j = (t.now = (function () {
          var f = I.performance,
            T = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
          return T && H.bind
            ? T.bind(f)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        p = v(function (f) {
          function T(ne, ce) {
            var ye = y(("" + ne).split(B)),
              pe = ye[0];
            ce = ce || {};
            var Le = Y[pe];
            if (!Le) return d("Unsupported property: " + pe);
            if (!ce.weak || !this.props[pe]) {
              var je = Le[0],
                De = this.props[pe];
              return (
                De || (De = this.props[pe] = new je.Bare()),
                De.init(this.$el, ye, Le, ce),
                De
              );
            }
          }
          function x(ne, ce, ye) {
            if (ne) {
              var pe = typeof ne;
              if (
                (ce ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                pe == "number" && ce)
              )
                return (
                  (this.timer = new ie({
                    duration: ne,
                    context: this,
                    complete: D,
                  })),
                  void (this.active = !0)
                );
              if (pe == "string" && ce) {
                switch (ne) {
                  case "hide":
                    $.call(this);
                    break;
                  case "stop":
                    te.call(this);
                    break;
                  case "redraw":
                    se.call(this);
                    break;
                  default:
                    T.call(this, ne, ye && ye[1]);
                }
                return D.call(this);
              }
              if (pe == "function") return void ne.call(this, this);
              if (pe == "object") {
                var Le = 0;
                rt.call(
                  this,
                  ne,
                  function (Te, eb) {
                    Te.span > Le && (Le = Te.span), Te.stop(), Te.animate(eb);
                  },
                  function (Te) {
                    "wait" in Te && (Le = u(Te.wait, 0));
                  }
                ),
                  be.call(this),
                  Le > 0 &&
                    ((this.timer = new ie({ duration: Le, context: this })),
                    (this.active = !0),
                    ce && (this.timer.complete = D));
                var je = this,
                  De = !1,
                  sn = {};
                V(function () {
                  rt.call(je, ne, function (Te) {
                    Te.active && ((De = !0), (sn[Te.name] = Te.nextStyle));
                  }),
                    De && je.$el.css(sn);
                });
              }
            }
          }
          function N(ne) {
            (ne = u(ne, 0)),
              this.active
                ? this.queue.push({ options: ne })
                : ((this.timer = new ie({
                    duration: ne,
                    context: this,
                    complete: D,
                  })),
                  (this.active = !0));
          }
          function A(ne) {
            return this.active
              ? (this.queue.push({ options: ne, args: arguments }),
                void (this.timer.complete = D))
              : d(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function D() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var ne = this.queue.shift();
              x.call(this, ne.options, !0, ne.args);
            }
          }
          function te(ne) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ce;
            typeof ne == "string"
              ? ((ce = {}), (ce[ne] = 1))
              : (ce = typeof ne == "object" && ne != null ? ne : this.props),
              rt.call(this, ce, Re),
              be.call(this);
          }
          function ae(ne) {
            te.call(this, ne), rt.call(this, ne, Tr, Z_);
          }
          function ge(ne) {
            typeof ne != "string" && (ne = "block"),
              (this.el.style.display = ne);
          }
          function $() {
            te.call(this), (this.el.style.display = "none");
          }
          function se() {
            this.el.offsetHeight;
          }
          function ue() {
            te.call(this),
              e.removeData(this.el, C),
              (this.$el = this.el = null);
          }
          function be() {
            var ne,
              ce,
              ye = [];
            this.upstream && ye.push(this.upstream);
            for (ne in this.props)
              (ce = this.props[ne]), ce.active && ye.push(ce.string);
            (ye = ye.join(",")),
              this.style !== ye &&
                ((this.style = ye), (this.el.style[H.transition.dom] = ye));
          }
          function rt(ne, ce, ye) {
            var pe,
              Le,
              je,
              De,
              sn = ce !== Re,
              Te = {};
            for (pe in ne)
              (je = ne[pe]),
                pe in de
                  ? (Te.transform || (Te.transform = {}),
                    (Te.transform[pe] = je))
                  : (P.test(pe) && (pe = r(pe)),
                    pe in Y ? (Te[pe] = je) : (De || (De = {}), (De[pe] = je)));
            for (pe in Te) {
              if (((je = Te[pe]), (Le = this.props[pe]), !Le)) {
                if (!sn) continue;
                Le = T.call(this, pe);
              }
              ce.call(this, Le, je);
            }
            ye && De && ye.call(this, De);
          }
          function Re(ne) {
            ne.stop();
          }
          function Tr(ne, ce) {
            ne.set(ce);
          }
          function Z_(ne) {
            this.$el.css(ne);
          }
          function Xe(ne, ce) {
            f[ne] = function () {
              return this.children
                ? J_.call(this, ce, arguments)
                : (this.el && ce.apply(this, arguments), this);
            };
          }
          function J_(ne, ce) {
            var ye,
              pe = this.children.length;
            for (ye = 0; pe > ye; ye++) ne.apply(this.children[ye], ce);
            return this;
          }
          (f.init = function (ne) {
            if (
              ((this.$el = e(ne)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              oe.keepInherited && !oe.fallback)
            ) {
              var ce = X(this.el, "transition");
              ce && !Q.test(ce) && (this.upstream = ce);
            }
            H.backface &&
              oe.hideBackface &&
              h(this.el, H.backface.css, "hidden");
          }),
            Xe("add", T),
            Xe("start", x),
            Xe("wait", N),
            Xe("then", A),
            Xe("next", D),
            Xe("stop", te),
            Xe("set", ae),
            Xe("show", ge),
            Xe("hide", $),
            Xe("redraw", se),
            Xe("destroy", ue);
        }),
        _ = v(p, function (f) {
          function T(x, N) {
            var A = e.data(x, C) || e.data(x, C, new p.Bare());
            return A.el || A.init(x), N ? A.start(N) : A;
          }
          f.init = function (x, N) {
            var A = e(x);
            if (!A.length) return this;
            if (A.length === 1) return T(A[0], N);
            var D = [];
            return (
              A.each(function (te, ae) {
                D.push(T(ae, N));
              }),
              (this.children = D),
              this
            );
          };
        }),
        b = v(function (f) {
          function T() {
            var D = this.get();
            this.update("auto");
            var te = this.get();
            return this.update(D), te;
          }
          function x(D, te, ae) {
            return te !== void 0 && (ae = te), D in g ? D : ae;
          }
          function N(D) {
            var te = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(D);
            return (te ? i(te[1], te[2], te[3]) : D).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var A = { duration: 500, ease: "ease", delay: 0 };
          (f.init = function (D, te, ae, ge) {
            (this.$el = D), (this.el = D[0]);
            var $ = te[0];
            ae[2] && ($ = ae[2]),
              Z[$] && ($ = Z[$]),
              (this.name = $),
              (this.type = ae[1]),
              (this.duration = u(te[1], this.duration, A.duration)),
              (this.ease = x(te[2], this.ease, A.ease)),
              (this.delay = u(te[3], this.delay, A.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = ee.test(this.name)),
              (this.unit = ge.unit || this.unit || oe.defaultUnit),
              (this.angle = ge.angle || this.angle || oe.defaultAngle),
              oe.fallback || ge.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    B +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? B + g[this.ease][0] : "") +
                    (this.delay ? B + this.delay + "ms" : "")));
          }),
            (f.set = function (D) {
              (D = this.convert(D, this.type)), this.update(D), this.redraw();
            }),
            (f.transition = function (D) {
              (this.active = !0),
                (D = this.convert(D, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  D == "auto" && (D = T.call(this))),
                (this.nextStyle = D);
            }),
            (f.fallback = function (D) {
              var te =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (D = this.convert(D, this.type)),
                this.auto &&
                  (te == "auto" && (te = this.convert(this.get(), this.type)),
                  D == "auto" && (D = T.call(this))),
                (this.tween = new L({
                  from: te,
                  to: D,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (f.get = function () {
              return X(this.el, this.name);
            }),
            (f.update = function (D) {
              h(this.el, this.name, D);
            }),
            (f.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                h(this.el, this.name, this.get()));
              var D = this.tween;
              D && D.context && D.destroy();
            }),
            (f.convert = function (D, te) {
              if (D == "auto" && this.auto) return D;
              var ae,
                ge = typeof D == "number",
                $ = typeof D == "string";
              switch (te) {
                case R:
                  if (ge) return D;
                  if ($ && D.replace(w, "") === "") return +D;
                  ae = "number(unitless)";
                  break;
                case M:
                  if ($) {
                    if (D === "" && this.original) return this.original;
                    if (te.test(D))
                      return D.charAt(0) == "#" && D.length == 7 ? D : N(D);
                  }
                  ae = "hex or rgb string";
                  break;
                case k:
                  if (ge) return D + this.unit;
                  if ($ && te.test(D)) return D;
                  ae = "number(px) or string(unit)";
                  break;
                case F:
                  if (ge) return D + this.unit;
                  if ($ && te.test(D)) return D;
                  ae = "number(px) or string(unit or %)";
                  break;
                case z:
                  if (ge) return D + this.angle;
                  if ($ && te.test(D)) return D;
                  ae = "number(deg) or string(angle)";
                  break;
                case K:
                  if (ge || ($ && F.test(D))) return D;
                  ae = "number(unitless) or string(unit or %)";
              }
              return a(ae, D), D;
            }),
            (f.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        l = v(b, function (f, T) {
          f.init = function () {
            T.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), M));
          };
        }),
        G = v(b, function (f, T) {
          (f.init = function () {
            T.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (f.get = function () {
              return this.$el[this.name]();
            }),
            (f.update = function (x) {
              this.$el[this.name](x);
            });
        }),
        W = v(b, function (f, T) {
          function x(N, A) {
            var D, te, ae, ge, $;
            for (D in N)
              (ge = de[D]),
                (ae = ge[0]),
                (te = ge[1] || D),
                ($ = this.convert(N[D], ae)),
                A.call(this, te, $, ae);
          }
          (f.init = function () {
            T.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                de.perspective &&
                  oe.perspective &&
                  ((this.current.perspective = oe.perspective),
                  h(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (f.set = function (N) {
              x.call(this, N, function (A, D) {
                this.current[A] = D;
              }),
                h(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (f.transition = function (N) {
              var A = this.values(N);
              this.tween = new fe({
                current: this.current,
                values: A,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var D,
                te = {};
              for (D in this.current) te[D] = D in A ? A[D] : this.current[D];
              (this.active = !0), (this.nextStyle = this.style(te));
            }),
            (f.fallback = function (N) {
              var A = this.values(N);
              this.tween = new fe({
                current: this.current,
                values: A,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (f.update = function () {
              h(this.el, this.name, this.style(this.current));
            }),
            (f.style = function (N) {
              var A,
                D = "";
              for (A in N) D += A + "(" + N[A] + ") ";
              return D;
            }),
            (f.values = function (N) {
              var A,
                D = {};
              return (
                x.call(this, N, function (te, ae, ge) {
                  (D[te] = ae),
                    this.current[te] === void 0 &&
                      ((A = 0),
                      ~te.indexOf("scale") && (A = 1),
                      (this.current[te] = this.convert(A, ge)));
                }),
                D
              );
            });
        }),
        L = v(function (f) {
          function T($) {
            ae.push($) === 1 && V(x);
          }
          function x() {
            var $,
              se,
              ue,
              be = ae.length;
            if (be)
              for (V(x), se = j(), $ = be; $--; )
                (ue = ae[$]), ue && ue.render(se);
          }
          function N($) {
            var se,
              ue = e.inArray($, ae);
            ue >= 0 &&
              ((se = ae.slice(ue + 1)),
              (ae.length = ue),
              se.length && (ae = ae.concat(se)));
          }
          function A($) {
            return Math.round($ * ge) / ge;
          }
          function D($, se, ue) {
            return i(
              $[0] + ue * (se[0] - $[0]),
              $[1] + ue * (se[1] - $[1]),
              $[2] + ue * (se[2] - $[2])
            );
          }
          var te = { ease: g.ease[1], from: 0, to: 1 };
          (f.init = function ($) {
            (this.duration = $.duration || 0), (this.delay = $.delay || 0);
            var se = $.ease || te.ease;
            g[se] && (se = g[se][1]),
              typeof se != "function" && (se = te.ease),
              (this.ease = se),
              (this.update = $.update || o),
              (this.complete = $.complete || o),
              (this.context = $.context || this),
              (this.name = $.name);
            var ue = $.from,
              be = $.to;
            ue === void 0 && (ue = te.from),
              be === void 0 && (be = te.to),
              (this.unit = $.unit || ""),
              typeof ue == "number" && typeof be == "number"
                ? ((this.begin = ue), (this.change = be - ue))
                : this.format(be, ue),
              (this.value = this.begin + this.unit),
              (this.start = j()),
              $.autoplay !== !1 && this.play();
          }),
            (f.play = function () {
              this.active ||
                (this.start || (this.start = j()), (this.active = !0), T(this));
            }),
            (f.stop = function () {
              this.active && ((this.active = !1), N(this));
            }),
            (f.render = function ($) {
              var se,
                ue = $ - this.start;
              if (this.delay) {
                if (ue <= this.delay) return;
                ue -= this.delay;
              }
              if (ue < this.duration) {
                var be = this.ease(ue, 0, 1, this.duration);
                return (
                  (se = this.startRGB
                    ? D(this.startRGB, this.endRGB, be)
                    : A(this.begin + be * this.change)),
                  (this.value = se + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (se = this.endHex || this.begin + this.change),
                (this.value = se + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (f.format = function ($, se) {
              if (((se += ""), ($ += ""), $.charAt(0) == "#"))
                return (
                  (this.startRGB = n(se)),
                  (this.endRGB = n($)),
                  (this.endHex = $),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ue = se.replace(w, ""),
                  be = $.replace(w, "");
                ue !== be && s("tween", se, $), (this.unit = ue);
              }
              (se = parseFloat(se)),
                ($ = parseFloat($)),
                (this.begin = this.value = se),
                (this.change = $ - se);
            }),
            (f.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var ae = [],
            ge = 1e3;
        }),
        ie = v(L, function (f) {
          (f.init = function (T) {
            (this.duration = T.duration || 0),
              (this.complete = T.complete || o),
              (this.context = T.context),
              this.play();
          }),
            (f.render = function (T) {
              var x = T - this.start;
              x < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        fe = v(L, function (f, T) {
          (f.init = function (x) {
            (this.context = x.context),
              (this.update = x.update),
              (this.tweens = []),
              (this.current = x.current);
            var N, A;
            for (N in x.values)
              (A = x.values[N]),
                this.current[N] !== A &&
                  this.tweens.push(
                    new L({
                      name: N,
                      from: this.current[N],
                      to: A,
                      duration: x.duration,
                      delay: x.delay,
                      ease: x.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (f.render = function (x) {
              var N,
                A,
                D = this.tweens.length,
                te = !1;
              for (N = D; N--; )
                (A = this.tweens[N]),
                  A.context &&
                    (A.render(x), (this.current[A.name] = A.value), (te = !0));
              return te
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (f.destroy = function () {
              if ((T.destroy.call(this), this.tweens)) {
                var x,
                  N = this.tweens.length;
                for (x = N; x--; ) this.tweens[x].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        oe = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !H.transition,
          agentTests: [],
        });
      (t.fallback = function (f) {
        if (!H.transition) return (oe.fallback = !0);
        oe.agentTests.push("(" + f + ")");
        var T = new RegExp(oe.agentTests.join("|"), "i");
        oe.fallback = T.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (f) {
          return new L(f);
        }),
        (t.delay = function (f, T, x) {
          return new ie({ complete: T, duration: f, context: x });
        }),
        (e.fn.tram = function (f) {
          return t.call(null, this, f);
        });
      var h = e.style,
        X = e.css,
        Z = { transform: H.transform && H.transform.css },
        Y = {
          color: [l, M],
          background: [l, M, "background-color"],
          "outline-color": [l, M],
          "border-color": [l, M],
          "border-top-color": [l, M],
          "border-right-color": [l, M],
          "border-bottom-color": [l, M],
          "border-left-color": [l, M],
          "border-width": [b, k],
          "border-top-width": [b, k],
          "border-right-width": [b, k],
          "border-bottom-width": [b, k],
          "border-left-width": [b, k],
          "border-spacing": [b, k],
          "letter-spacing": [b, k],
          margin: [b, k],
          "margin-top": [b, k],
          "margin-right": [b, k],
          "margin-bottom": [b, k],
          "margin-left": [b, k],
          padding: [b, k],
          "padding-top": [b, k],
          "padding-right": [b, k],
          "padding-bottom": [b, k],
          "padding-left": [b, k],
          "outline-width": [b, k],
          opacity: [b, R],
          top: [b, F],
          right: [b, F],
          bottom: [b, F],
          left: [b, F],
          "font-size": [b, F],
          "text-indent": [b, F],
          "word-spacing": [b, F],
          width: [b, F],
          "min-width": [b, F],
          "max-width": [b, F],
          height: [b, F],
          "min-height": [b, F],
          "max-height": [b, F],
          "line-height": [b, K],
          "scroll-top": [G, R, "scrollTop"],
          "scroll-left": [G, R, "scrollLeft"],
        },
        de = {};
      H.transform &&
        ((Y.transform = [W]),
        (de = {
          x: [F, "translateX"],
          y: [F, "translateY"],
          rotate: [z],
          rotateX: [z],
          rotateY: [z],
          scale: [R],
          scaleX: [R],
          scaleY: [R],
          skew: [z],
          skewX: [z],
          skewY: [z],
        })),
        H.transform &&
          H.backface &&
          ((de.z = [F, "translateZ"]),
          (de.rotateZ = [z]),
          (de.scaleZ = [R]),
          (de.perspective = [k]));
      var Fe = /ms/,
        He = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Fs = c(($V, Ms) => {
    "use strict";
    var ab = window.$,
      sb = qi() && ab.tram;
    Ms.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        u = n.toString,
        d = n.hasOwnProperty,
        y = r.forEach,
        v = r.map,
        g = r.reduce,
        E = r.reduceRight,
        O = r.filter,
        I = r.every,
        C = r.some,
        w = r.indexOf,
        P = r.lastIndexOf,
        R = Array.isArray,
        M = Object.keys,
        k = i.bind,
        F =
          (e.each =
          e.forEach =
            function (m, q, U) {
              if (m == null) return m;
              if (y && m.forEach === y) m.forEach(q, U);
              else if (m.length === +m.length) {
                for (var H = 0, J = m.length; H < J; H++)
                  if (q.call(U, m[H], H, m) === t) return;
              } else
                for (var re = e.keys(m), H = 0, J = re.length; H < J; H++)
                  if (q.call(U, m[re[H]], re[H], m) === t) return;
              return m;
            });
      (e.map = e.collect =
        function (m, q, U) {
          var H = [];
          return m == null
            ? H
            : v && m.map === v
            ? m.map(q, U)
            : (F(m, function (J, re, V) {
                H.push(q.call(U, J, re, V));
              }),
              H);
        }),
        (e.find = e.detect =
          function (m, q, U) {
            var H;
            return (
              z(m, function (J, re, V) {
                if (q.call(U, J, re, V)) return (H = J), !0;
              }),
              H
            );
          }),
        (e.filter = e.select =
          function (m, q, U) {
            var H = [];
            return m == null
              ? H
              : O && m.filter === O
              ? m.filter(q, U)
              : (F(m, function (J, re, V) {
                  q.call(U, J, re, V) && H.push(J);
                }),
                H);
          });
      var z =
        (e.some =
        e.any =
          function (m, q, U) {
            q || (q = e.identity);
            var H = !1;
            return m == null
              ? H
              : C && m.some === C
              ? m.some(q, U)
              : (F(m, function (J, re, V) {
                  if (H || (H = q.call(U, J, re, V))) return t;
                }),
                !!H);
          });
      (e.contains = e.include =
        function (m, q) {
          return m == null
            ? !1
            : w && m.indexOf === w
            ? m.indexOf(q) != -1
            : z(m, function (U) {
                return U === q;
              });
        }),
        (e.delay = function (m, q) {
          var U = a.call(arguments, 2);
          return setTimeout(function () {
            return m.apply(null, U);
          }, q);
        }),
        (e.defer = function (m) {
          return e.delay.apply(e, [m, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (m) {
          var q, U, H;
          return function () {
            q ||
              ((q = !0),
              (U = arguments),
              (H = this),
              sb.frame(function () {
                (q = !1), m.apply(H, U);
              }));
          };
        }),
        (e.debounce = function (m, q, U) {
          var H,
            J,
            re,
            V,
            j,
            p = function () {
              var _ = e.now() - V;
              _ < q
                ? (H = setTimeout(p, q - _))
                : ((H = null), U || ((j = m.apply(re, J)), (re = J = null)));
            };
          return function () {
            (re = this), (J = arguments), (V = e.now());
            var _ = U && !H;
            return (
              H || (H = setTimeout(p, q)),
              _ && ((j = m.apply(re, J)), (re = J = null)),
              j
            );
          };
        }),
        (e.defaults = function (m) {
          if (!e.isObject(m)) return m;
          for (var q = 1, U = arguments.length; q < U; q++) {
            var H = arguments[q];
            for (var J in H) m[J] === void 0 && (m[J] = H[J]);
          }
          return m;
        }),
        (e.keys = function (m) {
          if (!e.isObject(m)) return [];
          if (M) return M(m);
          var q = [];
          for (var U in m) e.has(m, U) && q.push(U);
          return q;
        }),
        (e.has = function (m, q) {
          return d.call(m, q);
        }),
        (e.isObject = function (m) {
          return m === Object(m);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var K = /(.)^/,
        Q = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        ee = /\\|'|\r|\n|\u2028|\u2029/g,
        B = function (m) {
          return "\\" + Q[m];
        },
        S = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (m, q, U) {
          !q && U && (q = U), (q = e.defaults({}, q, e.templateSettings));
          var H = RegExp(
              [
                (q.escape || K).source,
                (q.interpolate || K).source,
                (q.evaluate || K).source,
              ].join("|") + "|$",
              "g"
            ),
            J = 0,
            re = "__p+='";
          m.replace(H, function (_, b, l, G, W) {
            return (
              (re += m.slice(J, W).replace(ee, B)),
              (J = W + _.length),
              b
                ? (re +=
                    `'+
((__t=(` +
                    b +
                    `))==null?'':_.escape(__t))+
'`)
                : l
                ? (re +=
                    `'+
((__t=(` +
                    l +
                    `))==null?'':__t)+
'`)
                : G &&
                  (re +=
                    `';
` +
                    G +
                    `
__p+='`),
              _
            );
          }),
            (re += `';
`);
          var V = q.variable;
          if (V) {
            if (!S.test(V))
              throw new Error("variable is not a bare identifier: " + V);
          } else
            (re =
              `with(obj||{}){
` +
              re +
              `}
`),
              (V = "obj");
          re =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            re +
            `return __p;
`;
          var j;
          try {
            j = new Function(q.variable || "obj", "_", re);
          } catch (_) {
            throw ((_.source = re), _);
          }
          var p = function (_) {
            return j.call(this, _, e);
          };
          return (
            (p.source =
              "function(" +
              V +
              `){
` +
              re +
              "}"),
            p
          );
        }),
        e
      );
    })();
  });
  var Ne = c((QV, Hs) => {
    "use strict";
    var ve = {},
      Bt = {},
      Ht = [],
      Fi = window.Webflow || [],
      _t = window.jQuery,
      Ke = _t(window),
      ub = _t(document),
      it = _t.isFunction,
      ze = (ve._ = Fs()),
      ks = (ve.tram = qi() && _t.tram),
      ln = !1,
      Di = !1;
    ks.config.hideBackface = !1;
    ks.config.keepInherited = !0;
    ve.define = function (e, t, r) {
      Bt[e] && Us(Bt[e]);
      var n = (Bt[e] = t(_t, ze, r) || {});
      return Gs(n), n;
    };
    ve.require = function (e) {
      return Bt[e];
    };
    function Gs(e) {
      ve.env() &&
        (it(e.design) && Ke.on("__wf_design", e.design),
        it(e.preview) && Ke.on("__wf_preview", e.preview)),
        it(e.destroy) && Ke.on("__wf_destroy", e.destroy),
        e.ready && it(e.ready) && cb(e);
    }
    function cb(e) {
      if (ln) {
        e.ready();
        return;
      }
      ze.contains(Ht, e.ready) || Ht.push(e.ready);
    }
    function Us(e) {
      it(e.design) && Ke.off("__wf_design", e.design),
        it(e.preview) && Ke.off("__wf_preview", e.preview),
        it(e.destroy) && Ke.off("__wf_destroy", e.destroy),
        e.ready && it(e.ready) && lb(e);
    }
    function lb(e) {
      Ht = ze.filter(Ht, function (t) {
        return t !== e.ready;
      });
    }
    ve.push = function (e) {
      if (ln) {
        it(e) && e();
        return;
      }
      Fi.push(e);
    };
    ve.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var cn = navigator.userAgent.toLowerCase(),
      Vs = (ve.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      fb = (ve.env.chrome =
        /chrome/.test(cn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(cn.match(/chrome\/(\d+)\./)[1], 10)),
      db = (ve.env.ios = /(ipod|iphone|ipad)/.test(cn));
    ve.env.safari = /safari/.test(cn) && !fb && !db;
    var Mi;
    Vs &&
      ub.on("touchstart mousedown", function (e) {
        Mi = e.target;
      });
    ve.validClick = Vs
      ? function (e) {
          return e === Mi || _t.contains(e, Mi);
        }
      : function () {
          return !0;
        };
    var Ws = "resize.webflow orientationchange.webflow load.webflow",
      pb = "scroll.webflow " + Ws;
    ve.resize = ki(Ke, Ws);
    ve.scroll = ki(Ke, pb);
    ve.redraw = ki();
    function ki(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = ze.throttle(function (i) {
          ze.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (ze.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = ze.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    ve.location = function (e) {
      window.location = e;
    };
    ve.env() && (ve.location = function () {});
    ve.ready = function () {
      (ln = !0), Di ? vb() : ze.each(Ht, Ds), ze.each(Fi, Ds), ve.resize.up();
    };
    function Ds(e) {
      it(e) && e();
    }
    function vb() {
      (Di = !1), ze.each(Bt, Gs);
    }
    var Lt;
    ve.load = function (e) {
      Lt.then(e);
    };
    function Bs() {
      Lt && (Lt.reject(), Ke.off("load", Lt.resolve)),
        (Lt = new _t.Deferred()),
        Ke.on("load", Lt.resolve);
    }
    ve.destroy = function (e) {
      (e = e || {}),
        (Di = !0),
        Ke.triggerHandler("__wf_destroy"),
        e.domready != null && (ln = e.domready),
        ze.each(Bt, Us),
        ve.resize.off(),
        ve.scroll.off(),
        ve.redraw.off(),
        (Ht = []),
        (Fi = []),
        Lt.state() === "pending" && Bs();
    };
    _t(ve.ready);
    Bs();
    Hs.exports = window.Webflow = ve;
  });
  var zs = c((ZV, js) => {
    "use strict";
    var Xs = Ne();
    Xs.define(
      "brand",
      (js.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          d;
        t.ready = function () {
          var E = n.attr("data-wf-status"),
            O = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(O) && a.hostname !== O && (E = !0),
            E &&
              !s &&
              ((d = d || v()),
              g(),
              setTimeout(g, 500),
              e(r).off(u, y).on(u, y));
        };
        function y() {
          var E =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(d).attr("style", E ? "display: none !important;" : "");
        }
        function v() {
          var E = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            O = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            I = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return E.append(O, I), E[0];
        }
        function g() {
          var E = i.children(o),
            O = E.length && E.get(0) === d,
            I = Xs.env("editor");
          if (O) {
            I && E.remove();
            return;
          }
          E.length && E.remove(), I || i.append(d);
        }
        return t;
      })
    );
  });
  var Ys = c((JV, Ks) => {
    "use strict";
    var Gi = Ne();
    Gi.define(
      "edit",
      (Ks.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Gi.env("test") || Gi.env("frame")) && !r.fixture && !gb())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          u,
          d = r.load || g,
          y = !1;
        try {
          y =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        y
          ? d()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            d()
          : i.on(s, v).triggerHandler(s);
        function v() {
          u || (/\?edit/.test(a.hash) && d());
        }
        function g() {
          (u = !0),
            (window.WebflowEditor = !0),
            i.off(s, v),
            P(function (M) {
              e.ajax({
                url: w("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: E(M),
              });
            });
        }
        function E(M) {
          return function (k) {
            if (!k) {
              console.error("Could not load editor data");
              return;
            }
            (k.thirdPartyCookiesSupported = M),
              O(C(k.scriptPath), function () {
                window.WebflowEditor(k);
              });
          };
        }
        function O(M, k) {
          e.ajax({ type: "GET", url: M, dataType: "script", cache: !0 }).then(
            k,
            I
          );
        }
        function I(M, k, F) {
          throw (console.error("Could not load editor script: " + k), F);
        }
        function C(M) {
          return M.indexOf("//") >= 0
            ? M
            : w("https://editor-api.webflow.com" + M);
        }
        function w(M) {
          return M.replace(/([^:])\/\//g, "$1/");
        }
        function P(M) {
          var k = window.document.createElement("iframe");
          (k.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (k.style.display = "none"),
            (k.sandbox = "allow-scripts allow-same-origin");
          var F = function (z) {
            z.data === "WF_third_party_cookies_unsupported"
              ? (R(k, F), M(!1))
              : z.data === "WF_third_party_cookies_supported" &&
                (R(k, F), M(!0));
          };
          (k.onerror = function () {
            R(k, F), M(!1);
          }),
            window.addEventListener("message", F, !1),
            window.document.body.appendChild(k);
        }
        function R(M, k) {
          window.removeEventListener("message", k, !1), M.remove();
        }
        return n;
      })
    );
    function gb() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Qs = c((eW, $s) => {
    "use strict";
    var hb = Ne();
    hb.define(
      "focus-visible",
      ($s.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(R) {
            return !!(
              R &&
              R !== document &&
              R.nodeName !== "HTML" &&
              R.nodeName !== "BODY" &&
              "classList" in R &&
              "contains" in R.classList
            );
          }
          function u(R) {
            var M = R.type,
              k = R.tagName;
            return !!(
              (k === "INPUT" && a[M] && !R.readOnly) ||
              (k === "TEXTAREA" && !R.readOnly) ||
              R.isContentEditable
            );
          }
          function d(R) {
            R.getAttribute("data-wf-focus-visible") ||
              R.setAttribute("data-wf-focus-visible", "true");
          }
          function y(R) {
            R.getAttribute("data-wf-focus-visible") &&
              R.removeAttribute("data-wf-focus-visible");
          }
          function v(R) {
            R.metaKey ||
              R.altKey ||
              R.ctrlKey ||
              (s(r.activeElement) && d(r.activeElement), (n = !0));
          }
          function g() {
            n = !1;
          }
          function E(R) {
            s(R.target) && (n || u(R.target)) && d(R.target);
          }
          function O(R) {
            s(R.target) &&
              R.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              y(R.target));
          }
          function I() {
            document.visibilityState === "hidden" && (i && (n = !0), C());
          }
          function C() {
            document.addEventListener("mousemove", P),
              document.addEventListener("mousedown", P),
              document.addEventListener("mouseup", P),
              document.addEventListener("pointermove", P),
              document.addEventListener("pointerdown", P),
              document.addEventListener("pointerup", P),
              document.addEventListener("touchmove", P),
              document.addEventListener("touchstart", P),
              document.addEventListener("touchend", P);
          }
          function w() {
            document.removeEventListener("mousemove", P),
              document.removeEventListener("mousedown", P),
              document.removeEventListener("mouseup", P),
              document.removeEventListener("pointermove", P),
              document.removeEventListener("pointerdown", P),
              document.removeEventListener("pointerup", P),
              document.removeEventListener("touchmove", P),
              document.removeEventListener("touchstart", P),
              document.removeEventListener("touchend", P);
          }
          function P(R) {
            (R.target.nodeName && R.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), w());
          }
          document.addEventListener("keydown", v, !0),
            document.addEventListener("mousedown", g, !0),
            document.addEventListener("pointerdown", g, !0),
            document.addEventListener("touchstart", g, !0),
            document.addEventListener("visibilitychange", I, !0),
            C(),
            r.addEventListener("focus", E, !0),
            r.addEventListener("blur", O, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var eu = c((tW, Js) => {
    "use strict";
    var Zs = Ne();
    Zs.define(
      "focus",
      (Js.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Zs.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var nu = c((rW, ru) => {
    "use strict";
    var Ui = window.jQuery,
      ot = {},
      fn = [],
      tu = ".w-ix",
      dn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Ui(t).triggerHandler(ot.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Ui(t).triggerHandler(ot.types.OUTRO));
        },
      };
    ot.triggers = {};
    ot.types = { INTRO: "w-ix-intro" + tu, OUTRO: "w-ix-outro" + tu };
    ot.init = function () {
      for (var e = fn.length, t = 0; t < e; t++) {
        var r = fn[t];
        r[0](0, r[1]);
      }
      (fn = []), Ui.extend(ot.triggers, dn);
    };
    ot.async = function () {
      for (var e in dn) {
        var t = dn[e];
        dn.hasOwnProperty(e) &&
          (ot.triggers[e] = function (r, n) {
            fn.push([t, n]);
          });
      }
    };
    ot.async();
    ru.exports = ot;
  });
  var Xt = c((nW, au) => {
    "use strict";
    var Vi = nu();
    function iu(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var mb = window.jQuery,
      pn = {},
      ou = ".w-ix",
      Eb = {
        reset: function (e, t) {
          Vi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Vi.triggers.intro(e, t), iu(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Vi.triggers.outro(e, t), iu(t, "COMPONENT_INACTIVE");
        },
      };
    pn.triggers = {};
    pn.types = { INTRO: "w-ix-intro" + ou, OUTRO: "w-ix-outro" + ou };
    mb.extend(pn.triggers, Eb);
    au.exports = pn;
  });
  var su = c((iW, pt) => {
    function Wi(e) {
      return (
        (pt.exports = Wi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (pt.exports.__esModule = !0),
        (pt.exports.default = pt.exports),
        Wi(e)
      );
    }
    (pt.exports = Wi),
      (pt.exports.__esModule = !0),
      (pt.exports.default = pt.exports);
  });
  var vn = c((oW, Ir) => {
    var yb = su().default;
    function uu(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (uu = function (i) {
        return i ? r : t;
      })(e);
    }
    function _b(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (yb(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = uu(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (Ir.exports = _b),
      (Ir.exports.__esModule = !0),
      (Ir.exports.default = Ir.exports);
  });
  var cu = c((aW, wr) => {
    function bb(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (wr.exports = bb),
      (wr.exports.__esModule = !0),
      (wr.exports.default = wr.exports);
  });
  var Ee = c((sW, lu) => {
    var gn = function (e) {
      return e && e.Math == Math && e;
    };
    lu.exports =
      gn(typeof globalThis == "object" && globalThis) ||
      gn(typeof window == "object" && window) ||
      gn(typeof self == "object" && self) ||
      gn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var jt = c((uW, fu) => {
    fu.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Nt = c((cW, du) => {
    var Tb = jt();
    du.exports = !Tb(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var hn = c((lW, pu) => {
    var Or = Function.prototype.call;
    pu.exports = Or.bind
      ? Or.bind(Or)
      : function () {
          return Or.apply(Or, arguments);
        };
  });
  var mu = c((hu) => {
    "use strict";
    var vu = {}.propertyIsEnumerable,
      gu = Object.getOwnPropertyDescriptor,
      Ib = gu && !vu.call({ 1: 2 }, 1);
    hu.f = Ib
      ? function (t) {
          var r = gu(this, t);
          return !!r && r.enumerable;
        }
      : vu;
  });
  var Bi = c((dW, Eu) => {
    Eu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Ye = c((pW, _u) => {
    var yu = Function.prototype,
      Hi = yu.bind,
      Xi = yu.call,
      wb = Hi && Hi.bind(Xi);
    _u.exports = Hi
      ? function (e) {
          return e && wb(Xi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Xi.apply(e, arguments);
            }
          );
        };
  });
  var Iu = c((vW, Tu) => {
    var bu = Ye(),
      Ob = bu({}.toString),
      Ab = bu("".slice);
    Tu.exports = function (e) {
      return Ab(Ob(e), 8, -1);
    };
  });
  var Ou = c((gW, wu) => {
    var xb = Ee(),
      Sb = Ye(),
      Cb = jt(),
      Rb = Iu(),
      ji = xb.Object,
      Lb = Sb("".split);
    wu.exports = Cb(function () {
      return !ji("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return Rb(e) == "String" ? Lb(e, "") : ji(e);
        }
      : ji;
  });
  var zi = c((hW, Au) => {
    var Nb = Ee(),
      Pb = Nb.TypeError;
    Au.exports = function (e) {
      if (e == null) throw Pb("Can't call method on " + e);
      return e;
    };
  });
  var Ar = c((mW, xu) => {
    var qb = Ou(),
      Mb = zi();
    xu.exports = function (e) {
      return qb(Mb(e));
    };
  });
  var at = c((EW, Su) => {
    Su.exports = function (e) {
      return typeof e == "function";
    };
  });
  var zt = c((yW, Cu) => {
    var Fb = at();
    Cu.exports = function (e) {
      return typeof e == "object" ? e !== null : Fb(e);
    };
  });
  var xr = c((_W, Ru) => {
    var Ki = Ee(),
      Db = at(),
      kb = function (e) {
        return Db(e) ? e : void 0;
      };
    Ru.exports = function (e, t) {
      return arguments.length < 2 ? kb(Ki[e]) : Ki[e] && Ki[e][t];
    };
  });
  var Nu = c((bW, Lu) => {
    var Gb = Ye();
    Lu.exports = Gb({}.isPrototypeOf);
  });
  var qu = c((TW, Pu) => {
    var Ub = xr();
    Pu.exports = Ub("navigator", "userAgent") || "";
  });
  var Vu = c((IW, Uu) => {
    var Gu = Ee(),
      Yi = qu(),
      Mu = Gu.process,
      Fu = Gu.Deno,
      Du = (Mu && Mu.versions) || (Fu && Fu.version),
      ku = Du && Du.v8,
      $e,
      mn;
    ku &&
      (($e = ku.split(".")),
      (mn = $e[0] > 0 && $e[0] < 4 ? 1 : +($e[0] + $e[1])));
    !mn &&
      Yi &&
      (($e = Yi.match(/Edge\/(\d+)/)),
      (!$e || $e[1] >= 74) &&
        (($e = Yi.match(/Chrome\/(\d+)/)), $e && (mn = +$e[1])));
    Uu.exports = mn;
  });
  var $i = c((wW, Bu) => {
    var Wu = Vu(),
      Vb = jt();
    Bu.exports =
      !!Object.getOwnPropertySymbols &&
      !Vb(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Wu && Wu < 41)
        );
      });
  });
  var Qi = c((OW, Hu) => {
    var Wb = $i();
    Hu.exports = Wb && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var Zi = c((AW, Xu) => {
    var Bb = Ee(),
      Hb = xr(),
      Xb = at(),
      jb = Nu(),
      zb = Qi(),
      Kb = Bb.Object;
    Xu.exports = zb
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = Hb("Symbol");
          return Xb(t) && jb(t.prototype, Kb(e));
        };
  });
  var zu = c((xW, ju) => {
    var Yb = Ee(),
      $b = Yb.String;
    ju.exports = function (e) {
      try {
        return $b(e);
      } catch {
        return "Object";
      }
    };
  });
  var Yu = c((SW, Ku) => {
    var Qb = Ee(),
      Zb = at(),
      Jb = zu(),
      eT = Qb.TypeError;
    Ku.exports = function (e) {
      if (Zb(e)) return e;
      throw eT(Jb(e) + " is not a function");
    };
  });
  var Qu = c((CW, $u) => {
    var tT = Yu();
    $u.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : tT(r);
    };
  });
  var Ju = c((RW, Zu) => {
    var rT = Ee(),
      Ji = hn(),
      eo = at(),
      to = zt(),
      nT = rT.TypeError;
    Zu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && eo((r = e.toString)) && !to((n = Ji(r, e)))) ||
        (eo((r = e.valueOf)) && !to((n = Ji(r, e)))) ||
        (t !== "string" && eo((r = e.toString)) && !to((n = Ji(r, e))))
      )
        return n;
      throw nT("Can't convert object to primitive value");
    };
  });
  var tc = c((LW, ec) => {
    ec.exports = !1;
  });
  var En = c((NW, nc) => {
    var rc = Ee(),
      iT = Object.defineProperty;
    nc.exports = function (e, t) {
      try {
        iT(rc, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        rc[e] = t;
      }
      return t;
    };
  });
  var yn = c((PW, oc) => {
    var oT = Ee(),
      aT = En(),
      ic = "__core-js_shared__",
      sT = oT[ic] || aT(ic, {});
    oc.exports = sT;
  });
  var ro = c((qW, sc) => {
    var uT = tc(),
      ac = yn();
    (sc.exports = function (e, t) {
      return ac[e] || (ac[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: uT ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var cc = c((MW, uc) => {
    var cT = Ee(),
      lT = zi(),
      fT = cT.Object;
    uc.exports = function (e) {
      return fT(lT(e));
    };
  });
  var bt = c((FW, lc) => {
    var dT = Ye(),
      pT = cc(),
      vT = dT({}.hasOwnProperty);
    lc.exports =
      Object.hasOwn ||
      function (t, r) {
        return vT(pT(t), r);
      };
  });
  var no = c((DW, fc) => {
    var gT = Ye(),
      hT = 0,
      mT = Math.random(),
      ET = gT((1).toString);
    fc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + ET(++hT + mT, 36);
    };
  });
  var io = c((kW, hc) => {
    var yT = Ee(),
      _T = ro(),
      dc = bt(),
      bT = no(),
      pc = $i(),
      gc = Qi(),
      Kt = _T("wks"),
      Pt = yT.Symbol,
      vc = Pt && Pt.for,
      TT = gc ? Pt : (Pt && Pt.withoutSetter) || bT;
    hc.exports = function (e) {
      if (!dc(Kt, e) || !(pc || typeof Kt[e] == "string")) {
        var t = "Symbol." + e;
        pc && dc(Pt, e)
          ? (Kt[e] = Pt[e])
          : gc && vc
          ? (Kt[e] = vc(t))
          : (Kt[e] = TT(t));
      }
      return Kt[e];
    };
  });
  var _c = c((GW, yc) => {
    var IT = Ee(),
      wT = hn(),
      mc = zt(),
      Ec = Zi(),
      OT = Qu(),
      AT = Ju(),
      xT = io(),
      ST = IT.TypeError,
      CT = xT("toPrimitive");
    yc.exports = function (e, t) {
      if (!mc(e) || Ec(e)) return e;
      var r = OT(e, CT),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = wT(r, e, t)), !mc(n) || Ec(n))
        )
          return n;
        throw ST("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), AT(e, t);
    };
  });
  var oo = c((UW, bc) => {
    var RT = _c(),
      LT = Zi();
    bc.exports = function (e) {
      var t = RT(e, "string");
      return LT(t) ? t : t + "";
    };
  });
  var so = c((VW, Ic) => {
    var NT = Ee(),
      Tc = zt(),
      ao = NT.document,
      PT = Tc(ao) && Tc(ao.createElement);
    Ic.exports = function (e) {
      return PT ? ao.createElement(e) : {};
    };
  });
  var uo = c((WW, wc) => {
    var qT = Nt(),
      MT = jt(),
      FT = so();
    wc.exports =
      !qT &&
      !MT(function () {
        return (
          Object.defineProperty(FT("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var co = c((Ac) => {
    var DT = Nt(),
      kT = hn(),
      GT = mu(),
      UT = Bi(),
      VT = Ar(),
      WT = oo(),
      BT = bt(),
      HT = uo(),
      Oc = Object.getOwnPropertyDescriptor;
    Ac.f = DT
      ? Oc
      : function (t, r) {
          if (((t = VT(t)), (r = WT(r)), HT))
            try {
              return Oc(t, r);
            } catch {}
          if (BT(t, r)) return UT(!kT(GT.f, t, r), t[r]);
        };
  });
  var Sr = c((HW, Sc) => {
    var xc = Ee(),
      XT = zt(),
      jT = xc.String,
      zT = xc.TypeError;
    Sc.exports = function (e) {
      if (XT(e)) return e;
      throw zT(jT(e) + " is not an object");
    };
  });
  var Cr = c((Lc) => {
    var KT = Ee(),
      YT = Nt(),
      $T = uo(),
      Cc = Sr(),
      QT = oo(),
      ZT = KT.TypeError,
      Rc = Object.defineProperty;
    Lc.f = YT
      ? Rc
      : function (t, r, n) {
          if ((Cc(t), (r = QT(r)), Cc(n), $T))
            try {
              return Rc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw ZT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var _n = c((jW, Nc) => {
    var JT = Nt(),
      eI = Cr(),
      tI = Bi();
    Nc.exports = JT
      ? function (e, t, r) {
          return eI.f(e, t, tI(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var fo = c((zW, Pc) => {
    var rI = Ye(),
      nI = at(),
      lo = yn(),
      iI = rI(Function.toString);
    nI(lo.inspectSource) ||
      (lo.inspectSource = function (e) {
        return iI(e);
      });
    Pc.exports = lo.inspectSource;
  });
  var Fc = c((KW, Mc) => {
    var oI = Ee(),
      aI = at(),
      sI = fo(),
      qc = oI.WeakMap;
    Mc.exports = aI(qc) && /native code/.test(sI(qc));
  });
  var po = c((YW, kc) => {
    var uI = ro(),
      cI = no(),
      Dc = uI("keys");
    kc.exports = function (e) {
      return Dc[e] || (Dc[e] = cI(e));
    };
  });
  var bn = c(($W, Gc) => {
    Gc.exports = {};
  });
  var Xc = c((QW, Hc) => {
    var lI = Fc(),
      Bc = Ee(),
      vo = Ye(),
      fI = zt(),
      dI = _n(),
      go = bt(),
      ho = yn(),
      pI = po(),
      vI = bn(),
      Uc = "Object already initialized",
      Eo = Bc.TypeError,
      gI = Bc.WeakMap,
      Tn,
      Rr,
      In,
      hI = function (e) {
        return In(e) ? Rr(e) : Tn(e, {});
      },
      mI = function (e) {
        return function (t) {
          var r;
          if (!fI(t) || (r = Rr(t)).type !== e)
            throw Eo("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    lI || ho.state
      ? ((Tt = ho.state || (ho.state = new gI())),
        (Vc = vo(Tt.get)),
        (mo = vo(Tt.has)),
        (Wc = vo(Tt.set)),
        (Tn = function (e, t) {
          if (mo(Tt, e)) throw new Eo(Uc);
          return (t.facade = e), Wc(Tt, e, t), t;
        }),
        (Rr = function (e) {
          return Vc(Tt, e) || {};
        }),
        (In = function (e) {
          return mo(Tt, e);
        }))
      : ((qt = pI("state")),
        (vI[qt] = !0),
        (Tn = function (e, t) {
          if (go(e, qt)) throw new Eo(Uc);
          return (t.facade = e), dI(e, qt, t), t;
        }),
        (Rr = function (e) {
          return go(e, qt) ? e[qt] : {};
        }),
        (In = function (e) {
          return go(e, qt);
        }));
    var Tt, Vc, mo, Wc, qt;
    Hc.exports = { set: Tn, get: Rr, has: In, enforce: hI, getterFor: mI };
  });
  var Kc = c((ZW, zc) => {
    var yo = Nt(),
      EI = bt(),
      jc = Function.prototype,
      yI = yo && Object.getOwnPropertyDescriptor,
      _o = EI(jc, "name"),
      _I = _o && function () {}.name === "something",
      bI = _o && (!yo || (yo && yI(jc, "name").configurable));
    zc.exports = { EXISTS: _o, PROPER: _I, CONFIGURABLE: bI };
  });
  var Jc = c((JW, Zc) => {
    var TI = Ee(),
      Yc = at(),
      II = bt(),
      $c = _n(),
      wI = En(),
      OI = fo(),
      Qc = Xc(),
      AI = Kc().CONFIGURABLE,
      xI = Qc.get,
      SI = Qc.enforce,
      CI = String(String).split("String");
    (Zc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        u;
      if (
        (Yc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!II(r, "name") || (AI && r.name !== s)) && $c(r, "name", s),
          (u = SI(r)),
          u.source || (u.source = CI.join(typeof s == "string" ? s : ""))),
        e === TI)
      ) {
        o ? (e[t] = r) : wI(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : $c(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Yc(this) && xI(this).source) || OI(this);
    });
  });
  var bo = c((eB, el) => {
    var RI = Math.ceil,
      LI = Math.floor;
    el.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? LI : RI)(t);
    };
  });
  var rl = c((tB, tl) => {
    var NI = bo(),
      PI = Math.max,
      qI = Math.min;
    tl.exports = function (e, t) {
      var r = NI(e);
      return r < 0 ? PI(r + t, 0) : qI(r, t);
    };
  });
  var il = c((rB, nl) => {
    var MI = bo(),
      FI = Math.min;
    nl.exports = function (e) {
      return e > 0 ? FI(MI(e), 9007199254740991) : 0;
    };
  });
  var al = c((nB, ol) => {
    var DI = il();
    ol.exports = function (e) {
      return DI(e.length);
    };
  });
  var To = c((iB, ul) => {
    var kI = Ar(),
      GI = rl(),
      UI = al(),
      sl = function (e) {
        return function (t, r, n) {
          var i = kI(t),
            o = UI(i),
            a = GI(n, o),
            s;
          if (e && r != r) {
            for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    ul.exports = { includes: sl(!0), indexOf: sl(!1) };
  });
  var wo = c((oB, ll) => {
    var VI = Ye(),
      Io = bt(),
      WI = Ar(),
      BI = To().indexOf,
      HI = bn(),
      cl = VI([].push);
    ll.exports = function (e, t) {
      var r = WI(e),
        n = 0,
        i = [],
        o;
      for (o in r) !Io(HI, o) && Io(r, o) && cl(i, o);
      for (; t.length > n; ) Io(r, (o = t[n++])) && (~BI(i, o) || cl(i, o));
      return i;
    };
  });
  var wn = c((aB, fl) => {
    fl.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var pl = c((dl) => {
    var XI = wo(),
      jI = wn(),
      zI = jI.concat("length", "prototype");
    dl.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return XI(t, zI);
      };
  });
  var gl = c((vl) => {
    vl.f = Object.getOwnPropertySymbols;
  });
  var ml = c((cB, hl) => {
    var KI = xr(),
      YI = Ye(),
      $I = pl(),
      QI = gl(),
      ZI = Sr(),
      JI = YI([].concat);
    hl.exports =
      KI("Reflect", "ownKeys") ||
      function (t) {
        var r = $I.f(ZI(t)),
          n = QI.f;
        return n ? JI(r, n(t)) : r;
      };
  });
  var yl = c((lB, El) => {
    var ew = bt(),
      tw = ml(),
      rw = co(),
      nw = Cr();
    El.exports = function (e, t) {
      for (var r = tw(t), n = nw.f, i = rw.f, o = 0; o < r.length; o++) {
        var a = r[o];
        ew(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var bl = c((fB, _l) => {
    var iw = jt(),
      ow = at(),
      aw = /#|\.prototype\./,
      Lr = function (e, t) {
        var r = uw[sw(e)];
        return r == lw ? !0 : r == cw ? !1 : ow(t) ? iw(t) : !!t;
      },
      sw = (Lr.normalize = function (e) {
        return String(e).replace(aw, ".").toLowerCase();
      }),
      uw = (Lr.data = {}),
      cw = (Lr.NATIVE = "N"),
      lw = (Lr.POLYFILL = "P");
    _l.exports = Lr;
  });
  var Il = c((dB, Tl) => {
    var Oo = Ee(),
      fw = co().f,
      dw = _n(),
      pw = Jc(),
      vw = En(),
      gw = yl(),
      hw = bl();
    Tl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        u,
        d,
        y;
      if (
        (n
          ? (a = Oo)
          : i
          ? (a = Oo[r] || vw(r, {}))
          : (a = (Oo[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((d = t[s]),
            e.noTargetGet ? ((y = fw(a, s)), (u = y && y.value)) : (u = a[s]),
            (o = hw(n ? s : r + (i ? "." : "#") + s, e.forced)),
            !o && u !== void 0)
          ) {
            if (typeof d == typeof u) continue;
            gw(d, u);
          }
          (e.sham || (u && u.sham)) && dw(d, "sham", !0), pw(a, s, d, e);
        }
    };
  });
  var Ol = c((pB, wl) => {
    var mw = wo(),
      Ew = wn();
    wl.exports =
      Object.keys ||
      function (t) {
        return mw(t, Ew);
      };
  });
  var xl = c((vB, Al) => {
    var yw = Nt(),
      _w = Cr(),
      bw = Sr(),
      Tw = Ar(),
      Iw = Ol();
    Al.exports = yw
      ? Object.defineProperties
      : function (t, r) {
          bw(t);
          for (var n = Tw(r), i = Iw(r), o = i.length, a = 0, s; o > a; )
            _w.f(t, (s = i[a++]), n[s]);
          return t;
        };
  });
  var Cl = c((gB, Sl) => {
    var ww = xr();
    Sl.exports = ww("document", "documentElement");
  });
  var Dl = c((hB, Fl) => {
    var Ow = Sr(),
      Aw = xl(),
      Rl = wn(),
      xw = bn(),
      Sw = Cl(),
      Cw = so(),
      Rw = po(),
      Ll = ">",
      Nl = "<",
      xo = "prototype",
      So = "script",
      ql = Rw("IE_PROTO"),
      Ao = function () {},
      Ml = function (e) {
        return Nl + So + Ll + e + Nl + "/" + So + Ll;
      },
      Pl = function (e) {
        e.write(Ml("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      Lw = function () {
        var e = Cw("iframe"),
          t = "java" + So + ":",
          r;
        return (
          (e.style.display = "none"),
          Sw.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Ml("document.F=Object")),
          r.close(),
          r.F
        );
      },
      On,
      An = function () {
        try {
          On = new ActiveXObject("htmlfile");
        } catch {}
        An =
          typeof document < "u"
            ? document.domain && On
              ? Pl(On)
              : Lw()
            : Pl(On);
        for (var e = Rl.length; e--; ) delete An[xo][Rl[e]];
        return An();
      };
    xw[ql] = !0;
    Fl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((Ao[xo] = Ow(t)), (n = new Ao()), (Ao[xo] = null), (n[ql] = t))
            : (n = An()),
          r === void 0 ? n : Aw(n, r)
        );
      };
  });
  var Gl = c((mB, kl) => {
    var Nw = io(),
      Pw = Dl(),
      qw = Cr(),
      Co = Nw("unscopables"),
      Ro = Array.prototype;
    Ro[Co] == null && qw.f(Ro, Co, { configurable: !0, value: Pw(null) });
    kl.exports = function (e) {
      Ro[Co][e] = !0;
    };
  });
  var Ul = c(() => {
    "use strict";
    var Mw = Il(),
      Fw = To().includes,
      Dw = Gl();
    Mw(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return Fw(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    Dw("includes");
  });
  var Wl = c((_B, Vl) => {
    var kw = Ee(),
      Gw = Ye();
    Vl.exports = function (e, t) {
      return Gw(kw[e].prototype[t]);
    };
  });
  var Hl = c((bB, Bl) => {
    Ul();
    var Uw = Wl();
    Bl.exports = Uw("Array", "includes");
  });
  var jl = c((TB, Xl) => {
    var Vw = Hl();
    Xl.exports = Vw;
  });
  var Kl = c((IB, zl) => {
    var Ww = jl();
    zl.exports = Ww;
  });
  var Lo = c((wB, Yl) => {
    var Bw =
      typeof global == "object" && global && global.Object === Object && global;
    Yl.exports = Bw;
  });
  var Qe = c((OB, $l) => {
    var Hw = Lo(),
      Xw = typeof self == "object" && self && self.Object === Object && self,
      jw = Hw || Xw || Function("return this")();
    $l.exports = jw;
  });
  var Yt = c((AB, Ql) => {
    var zw = Qe(),
      Kw = zw.Symbol;
    Ql.exports = Kw;
  });
  var tf = c((xB, ef) => {
    var Zl = Yt(),
      Jl = Object.prototype,
      Yw = Jl.hasOwnProperty,
      $w = Jl.toString,
      Nr = Zl ? Zl.toStringTag : void 0;
    function Qw(e) {
      var t = Yw.call(e, Nr),
        r = e[Nr];
      try {
        e[Nr] = void 0;
        var n = !0;
      } catch {}
      var i = $w.call(e);
      return n && (t ? (e[Nr] = r) : delete e[Nr]), i;
    }
    ef.exports = Qw;
  });
  var nf = c((SB, rf) => {
    var Zw = Object.prototype,
      Jw = Zw.toString;
    function e0(e) {
      return Jw.call(e);
    }
    rf.exports = e0;
  });
  var It = c((CB, sf) => {
    var of = Yt(),
      t0 = tf(),
      r0 = nf(),
      n0 = "[object Null]",
      i0 = "[object Undefined]",
      af = of ? of.toStringTag : void 0;
    function o0(e) {
      return e == null
        ? e === void 0
          ? i0
          : n0
        : af && af in Object(e)
        ? t0(e)
        : r0(e);
    }
    sf.exports = o0;
  });
  var No = c((RB, uf) => {
    function a0(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    uf.exports = a0;
  });
  var Po = c((LB, cf) => {
    var s0 = No(),
      u0 = s0(Object.getPrototypeOf, Object);
    cf.exports = u0;
  });
  var vt = c((NB, lf) => {
    function c0(e) {
      return e != null && typeof e == "object";
    }
    lf.exports = c0;
  });
  var qo = c((PB, df) => {
    var l0 = It(),
      f0 = Po(),
      d0 = vt(),
      p0 = "[object Object]",
      v0 = Function.prototype,
      g0 = Object.prototype,
      ff = v0.toString,
      h0 = g0.hasOwnProperty,
      m0 = ff.call(Object);
    function E0(e) {
      if (!d0(e) || l0(e) != p0) return !1;
      var t = f0(e);
      if (t === null) return !0;
      var r = h0.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && ff.call(r) == m0;
    }
    df.exports = E0;
  });
  var pf = c((Mo) => {
    "use strict";
    Object.defineProperty(Mo, "__esModule", { value: !0 });
    Mo.default = y0;
    function y0(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var vf = c((Do, Fo) => {
    "use strict";
    Object.defineProperty(Do, "__esModule", { value: !0 });
    var _0 = pf(),
      b0 = T0(_0);
    function T0(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var $t;
    typeof self < "u"
      ? ($t = self)
      : typeof window < "u"
      ? ($t = window)
      : typeof global < "u"
      ? ($t = global)
      : typeof Fo < "u"
      ? ($t = Fo)
      : ($t = Function("return this")());
    var I0 = (0, b0.default)($t);
    Do.default = I0;
  });
  var ko = c((Pr) => {
    "use strict";
    Pr.__esModule = !0;
    Pr.ActionTypes = void 0;
    Pr.default = Ef;
    var w0 = qo(),
      O0 = mf(w0),
      A0 = vf(),
      gf = mf(A0);
    function mf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var hf = (Pr.ActionTypes = { INIT: "@@redux/INIT" });
    function Ef(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(Ef)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        u = !1;
      function d() {
        s === a && (s = a.slice());
      }
      function y() {
        return o;
      }
      function v(I) {
        if (typeof I != "function")
          throw new Error("Expected listener to be a function.");
        var C = !0;
        return (
          d(),
          s.push(I),
          function () {
            if (C) {
              (C = !1), d();
              var P = s.indexOf(I);
              s.splice(P, 1);
            }
          }
        );
      }
      function g(I) {
        if (!(0, O0.default)(I))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof I.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (o = i(o, I));
        } finally {
          u = !1;
        }
        for (var C = (a = s), w = 0; w < C.length; w++) C[w]();
        return I;
      }
      function E(I) {
        if (typeof I != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = I), g({ type: hf.INIT });
      }
      function O() {
        var I,
          C = v;
        return (
          (I = {
            subscribe: function (P) {
              if (typeof P != "object")
                throw new TypeError("Expected the observer to be an object.");
              function R() {
                P.next && P.next(y());
              }
              R();
              var M = C(R);
              return { unsubscribe: M };
            },
          }),
          (I[gf.default] = function () {
            return this;
          }),
          I
        );
      }
      return (
        g({ type: hf.INIT }),
        (n = { dispatch: g, subscribe: v, getState: y, replaceReducer: E }),
        (n[gf.default] = O),
        n
      );
    }
  });
  var Uo = c((Go) => {
    "use strict";
    Go.__esModule = !0;
    Go.default = x0;
    function x0(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var bf = c((Vo) => {
    "use strict";
    Vo.__esModule = !0;
    Vo.default = N0;
    var yf = ko(),
      S0 = qo(),
      DB = _f(S0),
      C0 = Uo(),
      kB = _f(C0);
    function _f(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function R0(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function L0(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: yf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                yf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function N0(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        L0(r);
      } catch (u) {
        s = u;
      }
      return function () {
        var d =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          y = arguments[1];
        if (s) throw s;
        if (!1) var v;
        for (var g = !1, E = {}, O = 0; O < o.length; O++) {
          var I = o[O],
            C = r[I],
            w = d[I],
            P = C(w, y);
          if (typeof P > "u") {
            var R = R0(I, y);
            throw new Error(R);
          }
          (E[I] = P), (g = g || P !== w);
        }
        return g ? E : d;
      };
    }
  });
  var If = c((Wo) => {
    "use strict";
    Wo.__esModule = !0;
    Wo.default = P0;
    function Tf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function P0(e, t) {
      if (typeof e == "function") return Tf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = Tf(a, t));
      }
      return n;
    }
  });
  var Ho = c((Bo) => {
    "use strict";
    Bo.__esModule = !0;
    Bo.default = q0;
    function q0() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var wf = c((Xo) => {
    "use strict";
    Xo.__esModule = !0;
    var M0 =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Xo.default = G0;
    var F0 = Ho(),
      D0 = k0(F0);
    function k0(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function G0() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            u = s.dispatch,
            d = [],
            y = {
              getState: s.getState,
              dispatch: function (g) {
                return u(g);
              },
            };
          return (
            (d = t.map(function (v) {
              return v(y);
            })),
            (u = D0.default.apply(void 0, d)(s.dispatch)),
            M0({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var jo = c((Be) => {
    "use strict";
    Be.__esModule = !0;
    Be.compose =
      Be.applyMiddleware =
      Be.bindActionCreators =
      Be.combineReducers =
      Be.createStore =
        void 0;
    var U0 = ko(),
      V0 = Qt(U0),
      W0 = bf(),
      B0 = Qt(W0),
      H0 = If(),
      X0 = Qt(H0),
      j0 = wf(),
      z0 = Qt(j0),
      K0 = Ho(),
      Y0 = Qt(K0),
      $0 = Uo(),
      BB = Qt($0);
    function Qt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Be.createStore = V0.default;
    Be.combineReducers = B0.default;
    Be.bindActionCreators = X0.default;
    Be.applyMiddleware = z0.default;
    Be.compose = Y0.default;
  });
  var Ze,
    zo,
    st,
    Q0,
    Z0,
    xn,
    J0,
    Ko = me(() => {
      "use strict";
      (Ze = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (zo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (st = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (Q0 = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (Z0 = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (xn = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (J0 = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Ge,
    eO,
    Sn = me(() => {
      "use strict";
      (Ge = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (eO = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var tO,
    Of = me(() => {
      "use strict";
      tO = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var rO,
    nO,
    iO,
    oO,
    aO,
    sO,
    uO,
    Yo,
    Af = me(() => {
      "use strict";
      Sn();
      ({
        TRANSFORM_MOVE: rO,
        TRANSFORM_SCALE: nO,
        TRANSFORM_ROTATE: iO,
        TRANSFORM_SKEW: oO,
        STYLE_SIZE: aO,
        STYLE_FILTER: sO,
        STYLE_FONT_VARIATION: uO,
      } = Ge),
        (Yo = {
          [rO]: !0,
          [nO]: !0,
          [iO]: !0,
          [oO]: !0,
          [aO]: !0,
          [sO]: !0,
          [uO]: !0,
        });
    });
  var Ie = {};
  ke(Ie, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => OO,
    IX2_ANIMATION_FRAME_CHANGED: () => yO,
    IX2_CLEAR_REQUESTED: () => hO,
    IX2_ELEMENT_STATE_CHANGED: () => wO,
    IX2_EVENT_LISTENER_ADDED: () => mO,
    IX2_EVENT_STATE_CHANGED: () => EO,
    IX2_INSTANCE_ADDED: () => bO,
    IX2_INSTANCE_REMOVED: () => IO,
    IX2_INSTANCE_STARTED: () => TO,
    IX2_MEDIA_QUERIES_DEFINED: () => xO,
    IX2_PARAMETER_CHANGED: () => _O,
    IX2_PLAYBACK_REQUESTED: () => vO,
    IX2_PREVIEW_REQUESTED: () => pO,
    IX2_RAW_DATA_IMPORTED: () => cO,
    IX2_SESSION_INITIALIZED: () => lO,
    IX2_SESSION_STARTED: () => fO,
    IX2_SESSION_STOPPED: () => dO,
    IX2_STOP_REQUESTED: () => gO,
    IX2_TEST_FRAME_RENDERED: () => SO,
    IX2_VIEWPORT_WIDTH_CHANGED: () => AO,
  });
  var cO,
    lO,
    fO,
    dO,
    pO,
    vO,
    gO,
    hO,
    mO,
    EO,
    yO,
    _O,
    bO,
    TO,
    IO,
    wO,
    OO,
    AO,
    xO,
    SO,
    xf = me(() => {
      "use strict";
      (cO = "IX2_RAW_DATA_IMPORTED"),
        (lO = "IX2_SESSION_INITIALIZED"),
        (fO = "IX2_SESSION_STARTED"),
        (dO = "IX2_SESSION_STOPPED"),
        (pO = "IX2_PREVIEW_REQUESTED"),
        (vO = "IX2_PLAYBACK_REQUESTED"),
        (gO = "IX2_STOP_REQUESTED"),
        (hO = "IX2_CLEAR_REQUESTED"),
        (mO = "IX2_EVENT_LISTENER_ADDED"),
        (EO = "IX2_EVENT_STATE_CHANGED"),
        (yO = "IX2_ANIMATION_FRAME_CHANGED"),
        (_O = "IX2_PARAMETER_CHANGED"),
        (bO = "IX2_INSTANCE_ADDED"),
        (TO = "IX2_INSTANCE_STARTED"),
        (IO = "IX2_INSTANCE_REMOVED"),
        (wO = "IX2_ELEMENT_STATE_CHANGED"),
        (OO = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (AO = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (xO = "IX2_MEDIA_QUERIES_DEFINED"),
        (SO = "IX2_TEST_FRAME_RENDERED");
    });
  var Ce = {};
  ke(Ce, {
    ABSTRACT_NODE: () => AA,
    AUTO: () => gA,
    BACKGROUND: () => cA,
    BACKGROUND_COLOR: () => uA,
    BAR_DELIMITER: () => EA,
    BORDER_COLOR: () => lA,
    BOUNDARY_SELECTOR: () => PO,
    CHILDREN: () => yA,
    COLON_DELIMITER: () => mA,
    COLOR: () => fA,
    COMMA_DELIMITER: () => hA,
    CONFIG_UNIT: () => VO,
    CONFIG_VALUE: () => DO,
    CONFIG_X_UNIT: () => kO,
    CONFIG_X_VALUE: () => qO,
    CONFIG_Y_UNIT: () => GO,
    CONFIG_Y_VALUE: () => MO,
    CONFIG_Z_UNIT: () => UO,
    CONFIG_Z_VALUE: () => FO,
    DISPLAY: () => dA,
    FILTER: () => iA,
    FLEX: () => pA,
    FONT_VARIATION_SETTINGS: () => oA,
    HEIGHT: () => sA,
    HTML_ELEMENT: () => wA,
    IMMEDIATE_CHILDREN: () => _A,
    IX2_ID_DELIMITER: () => CO,
    OPACITY: () => nA,
    PARENT: () => TA,
    PLAIN_OBJECT: () => OA,
    PRESERVE_3D: () => IA,
    RENDER_GENERAL: () => SA,
    RENDER_PLUGIN: () => RA,
    RENDER_STYLE: () => CA,
    RENDER_TRANSFORM: () => xA,
    ROTATE_X: () => QO,
    ROTATE_Y: () => ZO,
    ROTATE_Z: () => JO,
    SCALE_3D: () => $O,
    SCALE_X: () => zO,
    SCALE_Y: () => KO,
    SCALE_Z: () => YO,
    SIBLINGS: () => bA,
    SKEW: () => eA,
    SKEW_X: () => tA,
    SKEW_Y: () => rA,
    TRANSFORM: () => WO,
    TRANSLATE_3D: () => jO,
    TRANSLATE_X: () => BO,
    TRANSLATE_Y: () => HO,
    TRANSLATE_Z: () => XO,
    WF_PAGE: () => RO,
    WIDTH: () => aA,
    WILL_CHANGE: () => vA,
    W_MOD_IX: () => NO,
    W_MOD_JS: () => LO,
  });
  var CO,
    RO,
    LO,
    NO,
    PO,
    qO,
    MO,
    FO,
    DO,
    kO,
    GO,
    UO,
    VO,
    WO,
    BO,
    HO,
    XO,
    jO,
    zO,
    KO,
    YO,
    $O,
    QO,
    ZO,
    JO,
    eA,
    tA,
    rA,
    nA,
    iA,
    oA,
    aA,
    sA,
    uA,
    cA,
    lA,
    fA,
    dA,
    pA,
    vA,
    gA,
    hA,
    mA,
    EA,
    yA,
    _A,
    bA,
    TA,
    IA,
    wA,
    OA,
    AA,
    xA,
    SA,
    CA,
    RA,
    Sf = me(() => {
      "use strict";
      (CO = "|"),
        (RO = "data-wf-page"),
        (LO = "w-mod-js"),
        (NO = "w-mod-ix"),
        (PO = ".w-dyn-item"),
        (qO = "xValue"),
        (MO = "yValue"),
        (FO = "zValue"),
        (DO = "value"),
        (kO = "xUnit"),
        (GO = "yUnit"),
        (UO = "zUnit"),
        (VO = "unit"),
        (WO = "transform"),
        (BO = "translateX"),
        (HO = "translateY"),
        (XO = "translateZ"),
        (jO = "translate3d"),
        (zO = "scaleX"),
        (KO = "scaleY"),
        (YO = "scaleZ"),
        ($O = "scale3d"),
        (QO = "rotateX"),
        (ZO = "rotateY"),
        (JO = "rotateZ"),
        (eA = "skew"),
        (tA = "skewX"),
        (rA = "skewY"),
        (nA = "opacity"),
        (iA = "filter"),
        (oA = "font-variation-settings"),
        (aA = "width"),
        (sA = "height"),
        (uA = "backgroundColor"),
        (cA = "background"),
        (lA = "borderColor"),
        (fA = "color"),
        (dA = "display"),
        (pA = "flex"),
        (vA = "willChange"),
        (gA = "AUTO"),
        (hA = ","),
        (mA = ":"),
        (EA = "|"),
        (yA = "CHILDREN"),
        (_A = "IMMEDIATE_CHILDREN"),
        (bA = "SIBLINGS"),
        (TA = "PARENT"),
        (IA = "preserve-3d"),
        (wA = "HTML_ELEMENT"),
        (OA = "PLAIN_OBJECT"),
        (AA = "ABSTRACT_NODE"),
        (xA = "RENDER_TRANSFORM"),
        (SA = "RENDER_GENERAL"),
        (CA = "RENDER_STYLE"),
        (RA = "RENDER_PLUGIN");
    });
  var Cf = {};
  ke(Cf, {
    ActionAppliesTo: () => eO,
    ActionTypeConsts: () => Ge,
    EventAppliesTo: () => zo,
    EventBasedOn: () => st,
    EventContinuousMouseAxes: () => Q0,
    EventLimitAffectedElements: () => Z0,
    EventTypeConsts: () => Ze,
    IX2EngineActionTypes: () => Ie,
    IX2EngineConstants: () => Ce,
    InteractionTypeConsts: () => tO,
    QuickEffectDirectionConsts: () => J0,
    QuickEffectIds: () => xn,
    ReducedMotionTypes: () => Yo,
  });
  var Ue = me(() => {
    "use strict";
    Ko();
    Sn();
    Of();
    Af();
    xf();
    Sf();
    Sn();
    Ko();
  });
  var LA,
    Rf,
    Lf = me(() => {
      "use strict";
      Ue();
      ({ IX2_RAW_DATA_IMPORTED: LA } = Ie),
        (Rf = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case LA:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Zt = c((_e) => {
    "use strict";
    Object.defineProperty(_e, "__esModule", { value: !0 });
    var NA =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    _e.clone = Rn;
    _e.addLast = qf;
    _e.addFirst = Mf;
    _e.removeLast = Ff;
    _e.removeFirst = Df;
    _e.insert = kf;
    _e.removeAt = Gf;
    _e.replaceAt = Uf;
    _e.getIn = Ln;
    _e.set = Nn;
    _e.setIn = Pn;
    _e.update = Wf;
    _e.updateIn = Bf;
    _e.merge = Hf;
    _e.mergeDeep = Xf;
    _e.mergeIn = jf;
    _e.omit = zf;
    _e.addDefaults = Kf;
    var Nf = "INVALID_ARGS";
    function Pf(e) {
      throw new Error(e);
    }
    function $o(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var PA = {}.hasOwnProperty;
    function Rn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = $o(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Ve(e, t, r) {
      var n = r;
      n == null && Pf(Nf);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var d = a[u];
        if (d != null) {
          var y = $o(d);
          if (y.length)
            for (var v = 0; v <= y.length; v++) {
              var g = y[v];
              if (!(e && n[g] !== void 0)) {
                var E = d[g];
                t && Cn(n[g]) && Cn(E) && (E = Ve(e, t, n[g], E)),
                  !(E === void 0 || E === n[g]) &&
                    (i || ((i = !0), (n = Rn(n))), (n[g] = E));
              }
            }
        }
      }
      return n;
    }
    function Cn(e) {
      var t = typeof e > "u" ? "undefined" : NA(e);
      return e != null && (t === "object" || t === "function");
    }
    function qf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Mf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Ff(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Df(e) {
      return e.length ? e.slice(1) : e;
    }
    function kf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Gf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Uf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Ln(e, t) {
      if ((!Array.isArray(t) && Pf(Nf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Nn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = Rn(i);
      return (o[t] = r), o;
    }
    function Vf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          Cn(e) && Cn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Vf(a, t, r, n + 1);
      }
      return Nn(e, o, i);
    }
    function Pn(e, t, r) {
      return t.length ? Vf(e, t, r, 0) : r;
    }
    function Wf(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Nn(e, t, i);
    }
    function Bf(e, t, r) {
      var n = Ln(e, t),
        i = r(n);
      return Pn(e, t, i);
    }
    function Hf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ve.call.apply(Ve, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : Ve(!1, !1, e, t, r, n, i, o);
    }
    function Xf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ve.call.apply(Ve, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : Ve(!1, !0, e, t, r, n, i, o);
    }
    function jf(e, t, r, n, i, o, a) {
      var s = Ln(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          d = arguments.length,
          y = Array(d > 7 ? d - 7 : 0),
          v = 7;
        v < d;
        v++
      )
        y[v - 7] = arguments[v];
      return (
        y.length
          ? (u = Ve.call.apply(Ve, [null, !1, !1, s, r, n, i, o, a].concat(y)))
          : (u = Ve(!1, !1, s, r, n, i, o, a)),
        Pn(e, t, u)
      );
    }
    function zf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (PA.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = $o(e), s = 0; s < a.length; s++) {
        var u = a[s];
        r.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function Kf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ve.call.apply(Ve, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : Ve(!0, !1, e, t, r, n, i, o);
    }
    var qA = {
      clone: Rn,
      addLast: qf,
      addFirst: Mf,
      removeLast: Ff,
      removeFirst: Df,
      insert: kf,
      removeAt: Gf,
      replaceAt: Uf,
      getIn: Ln,
      set: Nn,
      setIn: Pn,
      update: Wf,
      updateIn: Bf,
      merge: Hf,
      mergeDeep: Xf,
      mergeIn: jf,
      omit: zf,
      addDefaults: Kf,
    };
    _e.default = qA;
  });
  var $f,
    MA,
    FA,
    DA,
    kA,
    GA,
    Yf,
    Qf,
    Zf = me(() => {
      "use strict";
      Ue();
      ($f = le(Zt())),
        ({
          IX2_PREVIEW_REQUESTED: MA,
          IX2_PLAYBACK_REQUESTED: FA,
          IX2_STOP_REQUESTED: DA,
          IX2_CLEAR_REQUESTED: kA,
        } = Ie),
        (GA = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Yf = Object.create(null, {
          [MA]: { value: "preview" },
          [FA]: { value: "playback" },
          [DA]: { value: "stop" },
          [kA]: { value: "clear" },
        })),
        (Qf = (e = GA, t) => {
          if (t.type in Yf) {
            let r = [Yf[t.type]];
            return (0, $f.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Pe,
    UA,
    VA,
    WA,
    BA,
    HA,
    XA,
    jA,
    zA,
    KA,
    YA,
    Jf,
    $A,
    ed,
    td = me(() => {
      "use strict";
      Ue();
      (Pe = le(Zt())),
        ({
          IX2_SESSION_INITIALIZED: UA,
          IX2_SESSION_STARTED: VA,
          IX2_TEST_FRAME_RENDERED: WA,
          IX2_SESSION_STOPPED: BA,
          IX2_EVENT_LISTENER_ADDED: HA,
          IX2_EVENT_STATE_CHANGED: XA,
          IX2_ANIMATION_FRAME_CHANGED: jA,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: zA,
          IX2_VIEWPORT_WIDTH_CHANGED: KA,
          IX2_MEDIA_QUERIES_DEFINED: YA,
        } = Ie),
        (Jf = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        ($A = 20),
        (ed = (e = Jf, t) => {
          switch (t.type) {
            case UA: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Pe.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case VA:
              return (0, Pe.set)(e, "active", !0);
            case WA: {
              let {
                payload: { step: r = $A },
              } = t;
              return (0, Pe.set)(e, "tick", e.tick + r);
            }
            case BA:
              return Jf;
            case jA: {
              let {
                payload: { now: r },
              } = t;
              return (0, Pe.set)(e, "tick", r);
            }
            case HA: {
              let r = (0, Pe.addLast)(e.eventListeners, t.payload);
              return (0, Pe.set)(e, "eventListeners", r);
            }
            case XA: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Pe.setIn)(e, ["eventState", r], n);
            }
            case zA: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Pe.setIn)(e, ["playbackState", r], n);
            }
            case KA: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: u, max: d } = n[a];
                if (r >= u && r <= d) {
                  o = s;
                  break;
                }
              }
              return (0, Pe.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case YA:
              return (0, Pe.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var nd = c((cH, rd) => {
    function QA() {
      (this.__data__ = []), (this.size = 0);
    }
    rd.exports = QA;
  });
  var qn = c((lH, id) => {
    function ZA(e, t) {
      return e === t || (e !== e && t !== t);
    }
    id.exports = ZA;
  });
  var qr = c((fH, od) => {
    var JA = qn();
    function ex(e, t) {
      for (var r = e.length; r--; ) if (JA(e[r][0], t)) return r;
      return -1;
    }
    od.exports = ex;
  });
  var sd = c((dH, ad) => {
    var tx = qr(),
      rx = Array.prototype,
      nx = rx.splice;
    function ix(e) {
      var t = this.__data__,
        r = tx(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : nx.call(t, r, 1), --this.size, !0;
    }
    ad.exports = ix;
  });
  var cd = c((pH, ud) => {
    var ox = qr();
    function ax(e) {
      var t = this.__data__,
        r = ox(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    ud.exports = ax;
  });
  var fd = c((vH, ld) => {
    var sx = qr();
    function ux(e) {
      return sx(this.__data__, e) > -1;
    }
    ld.exports = ux;
  });
  var pd = c((gH, dd) => {
    var cx = qr();
    function lx(e, t) {
      var r = this.__data__,
        n = cx(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    dd.exports = lx;
  });
  var Mr = c((hH, vd) => {
    var fx = nd(),
      dx = sd(),
      px = cd(),
      vx = fd(),
      gx = pd();
    function Jt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Jt.prototype.clear = fx;
    Jt.prototype.delete = dx;
    Jt.prototype.get = px;
    Jt.prototype.has = vx;
    Jt.prototype.set = gx;
    vd.exports = Jt;
  });
  var hd = c((mH, gd) => {
    var hx = Mr();
    function mx() {
      (this.__data__ = new hx()), (this.size = 0);
    }
    gd.exports = mx;
  });
  var Ed = c((EH, md) => {
    function Ex(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    md.exports = Ex;
  });
  var _d = c((yH, yd) => {
    function yx(e) {
      return this.__data__.get(e);
    }
    yd.exports = yx;
  });
  var Td = c((_H, bd) => {
    function _x(e) {
      return this.__data__.has(e);
    }
    bd.exports = _x;
  });
  var ut = c((bH, Id) => {
    function bx(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    Id.exports = bx;
  });
  var Qo = c((TH, wd) => {
    var Tx = It(),
      Ix = ut(),
      wx = "[object AsyncFunction]",
      Ox = "[object Function]",
      Ax = "[object GeneratorFunction]",
      xx = "[object Proxy]";
    function Sx(e) {
      if (!Ix(e)) return !1;
      var t = Tx(e);
      return t == Ox || t == Ax || t == wx || t == xx;
    }
    wd.exports = Sx;
  });
  var Ad = c((IH, Od) => {
    var Cx = Qe(),
      Rx = Cx["__core-js_shared__"];
    Od.exports = Rx;
  });
  var Cd = c((wH, Sd) => {
    var Zo = Ad(),
      xd = (function () {
        var e = /[^.]+$/.exec((Zo && Zo.keys && Zo.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function Lx(e) {
      return !!xd && xd in e;
    }
    Sd.exports = Lx;
  });
  var Jo = c((OH, Rd) => {
    var Nx = Function.prototype,
      Px = Nx.toString;
    function qx(e) {
      if (e != null) {
        try {
          return Px.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Rd.exports = qx;
  });
  var Nd = c((AH, Ld) => {
    var Mx = Qo(),
      Fx = Cd(),
      Dx = ut(),
      kx = Jo(),
      Gx = /[\\^$.*+?()[\]{}|]/g,
      Ux = /^\[object .+?Constructor\]$/,
      Vx = Function.prototype,
      Wx = Object.prototype,
      Bx = Vx.toString,
      Hx = Wx.hasOwnProperty,
      Xx = RegExp(
        "^" +
          Bx.call(Hx)
            .replace(Gx, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function jx(e) {
      if (!Dx(e) || Fx(e)) return !1;
      var t = Mx(e) ? Xx : Ux;
      return t.test(kx(e));
    }
    Ld.exports = jx;
  });
  var qd = c((xH, Pd) => {
    function zx(e, t) {
      return e?.[t];
    }
    Pd.exports = zx;
  });
  var wt = c((SH, Md) => {
    var Kx = Nd(),
      Yx = qd();
    function $x(e, t) {
      var r = Yx(e, t);
      return Kx(r) ? r : void 0;
    }
    Md.exports = $x;
  });
  var Mn = c((CH, Fd) => {
    var Qx = wt(),
      Zx = Qe(),
      Jx = Qx(Zx, "Map");
    Fd.exports = Jx;
  });
  var Fr = c((RH, Dd) => {
    var eS = wt(),
      tS = eS(Object, "create");
    Dd.exports = tS;
  });
  var Ud = c((LH, Gd) => {
    var kd = Fr();
    function rS() {
      (this.__data__ = kd ? kd(null) : {}), (this.size = 0);
    }
    Gd.exports = rS;
  });
  var Wd = c((NH, Vd) => {
    function nS(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Vd.exports = nS;
  });
  var Hd = c((PH, Bd) => {
    var iS = Fr(),
      oS = "__lodash_hash_undefined__",
      aS = Object.prototype,
      sS = aS.hasOwnProperty;
    function uS(e) {
      var t = this.__data__;
      if (iS) {
        var r = t[e];
        return r === oS ? void 0 : r;
      }
      return sS.call(t, e) ? t[e] : void 0;
    }
    Bd.exports = uS;
  });
  var jd = c((qH, Xd) => {
    var cS = Fr(),
      lS = Object.prototype,
      fS = lS.hasOwnProperty;
    function dS(e) {
      var t = this.__data__;
      return cS ? t[e] !== void 0 : fS.call(t, e);
    }
    Xd.exports = dS;
  });
  var Kd = c((MH, zd) => {
    var pS = Fr(),
      vS = "__lodash_hash_undefined__";
    function gS(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = pS && t === void 0 ? vS : t),
        this
      );
    }
    zd.exports = gS;
  });
  var $d = c((FH, Yd) => {
    var hS = Ud(),
      mS = Wd(),
      ES = Hd(),
      yS = jd(),
      _S = Kd();
    function er(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    er.prototype.clear = hS;
    er.prototype.delete = mS;
    er.prototype.get = ES;
    er.prototype.has = yS;
    er.prototype.set = _S;
    Yd.exports = er;
  });
  var Jd = c((DH, Zd) => {
    var Qd = $d(),
      bS = Mr(),
      TS = Mn();
    function IS() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Qd(),
          map: new (TS || bS)(),
          string: new Qd(),
        });
    }
    Zd.exports = IS;
  });
  var tp = c((kH, ep) => {
    function wS(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    ep.exports = wS;
  });
  var Dr = c((GH, rp) => {
    var OS = tp();
    function AS(e, t) {
      var r = e.__data__;
      return OS(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    rp.exports = AS;
  });
  var ip = c((UH, np) => {
    var xS = Dr();
    function SS(e) {
      var t = xS(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    np.exports = SS;
  });
  var ap = c((VH, op) => {
    var CS = Dr();
    function RS(e) {
      return CS(this, e).get(e);
    }
    op.exports = RS;
  });
  var up = c((WH, sp) => {
    var LS = Dr();
    function NS(e) {
      return LS(this, e).has(e);
    }
    sp.exports = NS;
  });
  var lp = c((BH, cp) => {
    var PS = Dr();
    function qS(e, t) {
      var r = PS(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    cp.exports = qS;
  });
  var Fn = c((HH, fp) => {
    var MS = Jd(),
      FS = ip(),
      DS = ap(),
      kS = up(),
      GS = lp();
    function tr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    tr.prototype.clear = MS;
    tr.prototype.delete = FS;
    tr.prototype.get = DS;
    tr.prototype.has = kS;
    tr.prototype.set = GS;
    fp.exports = tr;
  });
  var pp = c((XH, dp) => {
    var US = Mr(),
      VS = Mn(),
      WS = Fn(),
      BS = 200;
    function HS(e, t) {
      var r = this.__data__;
      if (r instanceof US) {
        var n = r.__data__;
        if (!VS || n.length < BS - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new WS(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    dp.exports = HS;
  });
  var ea = c((jH, vp) => {
    var XS = Mr(),
      jS = hd(),
      zS = Ed(),
      KS = _d(),
      YS = Td(),
      $S = pp();
    function rr(e) {
      var t = (this.__data__ = new XS(e));
      this.size = t.size;
    }
    rr.prototype.clear = jS;
    rr.prototype.delete = zS;
    rr.prototype.get = KS;
    rr.prototype.has = YS;
    rr.prototype.set = $S;
    vp.exports = rr;
  });
  var hp = c((zH, gp) => {
    var QS = "__lodash_hash_undefined__";
    function ZS(e) {
      return this.__data__.set(e, QS), this;
    }
    gp.exports = ZS;
  });
  var Ep = c((KH, mp) => {
    function JS(e) {
      return this.__data__.has(e);
    }
    mp.exports = JS;
  });
  var _p = c((YH, yp) => {
    var eC = Fn(),
      tC = hp(),
      rC = Ep();
    function Dn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new eC(); ++t < r; ) this.add(e[t]);
    }
    Dn.prototype.add = Dn.prototype.push = tC;
    Dn.prototype.has = rC;
    yp.exports = Dn;
  });
  var Tp = c(($H, bp) => {
    function nC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    bp.exports = nC;
  });
  var wp = c((QH, Ip) => {
    function iC(e, t) {
      return e.has(t);
    }
    Ip.exports = iC;
  });
  var ta = c((ZH, Op) => {
    var oC = _p(),
      aC = Tp(),
      sC = wp(),
      uC = 1,
      cC = 2;
    function lC(e, t, r, n, i, o) {
      var a = r & uC,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var d = o.get(e),
        y = o.get(t);
      if (d && y) return d == t && y == e;
      var v = -1,
        g = !0,
        E = r & cC ? new oC() : void 0;
      for (o.set(e, t), o.set(t, e); ++v < s; ) {
        var O = e[v],
          I = t[v];
        if (n) var C = a ? n(I, O, v, t, e, o) : n(O, I, v, e, t, o);
        if (C !== void 0) {
          if (C) continue;
          g = !1;
          break;
        }
        if (E) {
          if (
            !aC(t, function (w, P) {
              if (!sC(E, P) && (O === w || i(O, w, r, n, o))) return E.push(P);
            })
          ) {
            g = !1;
            break;
          }
        } else if (!(O === I || i(O, I, r, n, o))) {
          g = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), g;
    }
    Op.exports = lC;
  });
  var xp = c((JH, Ap) => {
    var fC = Qe(),
      dC = fC.Uint8Array;
    Ap.exports = dC;
  });
  var Cp = c((e5, Sp) => {
    function pC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    Sp.exports = pC;
  });
  var Lp = c((t5, Rp) => {
    function vC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Rp.exports = vC;
  });
  var Fp = c((r5, Mp) => {
    var Np = Yt(),
      Pp = xp(),
      gC = qn(),
      hC = ta(),
      mC = Cp(),
      EC = Lp(),
      yC = 1,
      _C = 2,
      bC = "[object Boolean]",
      TC = "[object Date]",
      IC = "[object Error]",
      wC = "[object Map]",
      OC = "[object Number]",
      AC = "[object RegExp]",
      xC = "[object Set]",
      SC = "[object String]",
      CC = "[object Symbol]",
      RC = "[object ArrayBuffer]",
      LC = "[object DataView]",
      qp = Np ? Np.prototype : void 0,
      ra = qp ? qp.valueOf : void 0;
    function NC(e, t, r, n, i, o, a) {
      switch (r) {
        case LC:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case RC:
          return !(e.byteLength != t.byteLength || !o(new Pp(e), new Pp(t)));
        case bC:
        case TC:
        case OC:
          return gC(+e, +t);
        case IC:
          return e.name == t.name && e.message == t.message;
        case AC:
        case SC:
          return e == t + "";
        case wC:
          var s = mC;
        case xC:
          var u = n & yC;
          if ((s || (s = EC), e.size != t.size && !u)) return !1;
          var d = a.get(e);
          if (d) return d == t;
          (n |= _C), a.set(e, t);
          var y = hC(s(e), s(t), n, i, o, a);
          return a.delete(e), y;
        case CC:
          if (ra) return ra.call(e) == ra.call(t);
      }
      return !1;
    }
    Mp.exports = NC;
  });
  var kn = c((n5, Dp) => {
    function PC(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    Dp.exports = PC;
  });
  var we = c((i5, kp) => {
    var qC = Array.isArray;
    kp.exports = qC;
  });
  var na = c((o5, Gp) => {
    var MC = kn(),
      FC = we();
    function DC(e, t, r) {
      var n = t(e);
      return FC(e) ? n : MC(n, r(e));
    }
    Gp.exports = DC;
  });
  var Vp = c((a5, Up) => {
    function kC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Up.exports = kC;
  });
  var ia = c((s5, Wp) => {
    function GC() {
      return [];
    }
    Wp.exports = GC;
  });
  var oa = c((u5, Hp) => {
    var UC = Vp(),
      VC = ia(),
      WC = Object.prototype,
      BC = WC.propertyIsEnumerable,
      Bp = Object.getOwnPropertySymbols,
      HC = Bp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                UC(Bp(e), function (t) {
                  return BC.call(e, t);
                }));
          }
        : VC;
    Hp.exports = HC;
  });
  var jp = c((c5, Xp) => {
    function XC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Xp.exports = XC;
  });
  var Kp = c((l5, zp) => {
    var jC = It(),
      zC = vt(),
      KC = "[object Arguments]";
    function YC(e) {
      return zC(e) && jC(e) == KC;
    }
    zp.exports = YC;
  });
  var kr = c((f5, Qp) => {
    var Yp = Kp(),
      $C = vt(),
      $p = Object.prototype,
      QC = $p.hasOwnProperty,
      ZC = $p.propertyIsEnumerable,
      JC = Yp(
        (function () {
          return arguments;
        })()
      )
        ? Yp
        : function (e) {
            return $C(e) && QC.call(e, "callee") && !ZC.call(e, "callee");
          };
    Qp.exports = JC;
  });
  var Jp = c((d5, Zp) => {
    function eR() {
      return !1;
    }
    Zp.exports = eR;
  });
  var Gn = c((Gr, nr) => {
    var tR = Qe(),
      rR = Jp(),
      rv = typeof Gr == "object" && Gr && !Gr.nodeType && Gr,
      ev = rv && typeof nr == "object" && nr && !nr.nodeType && nr,
      nR = ev && ev.exports === rv,
      tv = nR ? tR.Buffer : void 0,
      iR = tv ? tv.isBuffer : void 0,
      oR = iR || rR;
    nr.exports = oR;
  });
  var Un = c((p5, nv) => {
    var aR = 9007199254740991,
      sR = /^(?:0|[1-9]\d*)$/;
    function uR(e, t) {
      var r = typeof e;
      return (
        (t = t ?? aR),
        !!t &&
          (r == "number" || (r != "symbol" && sR.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    nv.exports = uR;
  });
  var Vn = c((v5, iv) => {
    var cR = 9007199254740991;
    function lR(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= cR;
    }
    iv.exports = lR;
  });
  var av = c((g5, ov) => {
    var fR = It(),
      dR = Vn(),
      pR = vt(),
      vR = "[object Arguments]",
      gR = "[object Array]",
      hR = "[object Boolean]",
      mR = "[object Date]",
      ER = "[object Error]",
      yR = "[object Function]",
      _R = "[object Map]",
      bR = "[object Number]",
      TR = "[object Object]",
      IR = "[object RegExp]",
      wR = "[object Set]",
      OR = "[object String]",
      AR = "[object WeakMap]",
      xR = "[object ArrayBuffer]",
      SR = "[object DataView]",
      CR = "[object Float32Array]",
      RR = "[object Float64Array]",
      LR = "[object Int8Array]",
      NR = "[object Int16Array]",
      PR = "[object Int32Array]",
      qR = "[object Uint8Array]",
      MR = "[object Uint8ClampedArray]",
      FR = "[object Uint16Array]",
      DR = "[object Uint32Array]",
      he = {};
    he[CR] =
      he[RR] =
      he[LR] =
      he[NR] =
      he[PR] =
      he[qR] =
      he[MR] =
      he[FR] =
      he[DR] =
        !0;
    he[vR] =
      he[gR] =
      he[xR] =
      he[hR] =
      he[SR] =
      he[mR] =
      he[ER] =
      he[yR] =
      he[_R] =
      he[bR] =
      he[TR] =
      he[IR] =
      he[wR] =
      he[OR] =
      he[AR] =
        !1;
    function kR(e) {
      return pR(e) && dR(e.length) && !!he[fR(e)];
    }
    ov.exports = kR;
  });
  var uv = c((h5, sv) => {
    function GR(e) {
      return function (t) {
        return e(t);
      };
    }
    sv.exports = GR;
  });
  var lv = c((Ur, ir) => {
    var UR = Lo(),
      cv = typeof Ur == "object" && Ur && !Ur.nodeType && Ur,
      Vr = cv && typeof ir == "object" && ir && !ir.nodeType && ir,
      VR = Vr && Vr.exports === cv,
      aa = VR && UR.process,
      WR = (function () {
        try {
          var e = Vr && Vr.require && Vr.require("util").types;
          return e || (aa && aa.binding && aa.binding("util"));
        } catch {}
      })();
    ir.exports = WR;
  });
  var Wn = c((m5, pv) => {
    var BR = av(),
      HR = uv(),
      fv = lv(),
      dv = fv && fv.isTypedArray,
      XR = dv ? HR(dv) : BR;
    pv.exports = XR;
  });
  var sa = c((E5, vv) => {
    var jR = jp(),
      zR = kr(),
      KR = we(),
      YR = Gn(),
      $R = Un(),
      QR = Wn(),
      ZR = Object.prototype,
      JR = ZR.hasOwnProperty;
    function eL(e, t) {
      var r = KR(e),
        n = !r && zR(e),
        i = !r && !n && YR(e),
        o = !r && !n && !i && QR(e),
        a = r || n || i || o,
        s = a ? jR(e.length, String) : [],
        u = s.length;
      for (var d in e)
        (t || JR.call(e, d)) &&
          !(
            a &&
            (d == "length" ||
              (i && (d == "offset" || d == "parent")) ||
              (o &&
                (d == "buffer" || d == "byteLength" || d == "byteOffset")) ||
              $R(d, u))
          ) &&
          s.push(d);
      return s;
    }
    vv.exports = eL;
  });
  var Bn = c((y5, gv) => {
    var tL = Object.prototype;
    function rL(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || tL;
      return e === r;
    }
    gv.exports = rL;
  });
  var mv = c((_5, hv) => {
    var nL = No(),
      iL = nL(Object.keys, Object);
    hv.exports = iL;
  });
  var Hn = c((b5, Ev) => {
    var oL = Bn(),
      aL = mv(),
      sL = Object.prototype,
      uL = sL.hasOwnProperty;
    function cL(e) {
      if (!oL(e)) return aL(e);
      var t = [];
      for (var r in Object(e)) uL.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    Ev.exports = cL;
  });
  var Mt = c((T5, yv) => {
    var lL = Qo(),
      fL = Vn();
    function dL(e) {
      return e != null && fL(e.length) && !lL(e);
    }
    yv.exports = dL;
  });
  var Wr = c((I5, _v) => {
    var pL = sa(),
      vL = Hn(),
      gL = Mt();
    function hL(e) {
      return gL(e) ? pL(e) : vL(e);
    }
    _v.exports = hL;
  });
  var Tv = c((w5, bv) => {
    var mL = na(),
      EL = oa(),
      yL = Wr();
    function _L(e) {
      return mL(e, yL, EL);
    }
    bv.exports = _L;
  });
  var Ov = c((O5, wv) => {
    var Iv = Tv(),
      bL = 1,
      TL = Object.prototype,
      IL = TL.hasOwnProperty;
    function wL(e, t, r, n, i, o) {
      var a = r & bL,
        s = Iv(e),
        u = s.length,
        d = Iv(t),
        y = d.length;
      if (u != y && !a) return !1;
      for (var v = u; v--; ) {
        var g = s[v];
        if (!(a ? g in t : IL.call(t, g))) return !1;
      }
      var E = o.get(e),
        O = o.get(t);
      if (E && O) return E == t && O == e;
      var I = !0;
      o.set(e, t), o.set(t, e);
      for (var C = a; ++v < u; ) {
        g = s[v];
        var w = e[g],
          P = t[g];
        if (n) var R = a ? n(P, w, g, t, e, o) : n(w, P, g, e, t, o);
        if (!(R === void 0 ? w === P || i(w, P, r, n, o) : R)) {
          I = !1;
          break;
        }
        C || (C = g == "constructor");
      }
      if (I && !C) {
        var M = e.constructor,
          k = t.constructor;
        M != k &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof M == "function" &&
            M instanceof M &&
            typeof k == "function" &&
            k instanceof k
          ) &&
          (I = !1);
      }
      return o.delete(e), o.delete(t), I;
    }
    wv.exports = wL;
  });
  var xv = c((A5, Av) => {
    var OL = wt(),
      AL = Qe(),
      xL = OL(AL, "DataView");
    Av.exports = xL;
  });
  var Cv = c((x5, Sv) => {
    var SL = wt(),
      CL = Qe(),
      RL = SL(CL, "Promise");
    Sv.exports = RL;
  });
  var Lv = c((S5, Rv) => {
    var LL = wt(),
      NL = Qe(),
      PL = LL(NL, "Set");
    Rv.exports = PL;
  });
  var ua = c((C5, Nv) => {
    var qL = wt(),
      ML = Qe(),
      FL = qL(ML, "WeakMap");
    Nv.exports = FL;
  });
  var Xn = c((R5, Gv) => {
    var ca = xv(),
      la = Mn(),
      fa = Cv(),
      da = Lv(),
      pa = ua(),
      kv = It(),
      or = Jo(),
      Pv = "[object Map]",
      DL = "[object Object]",
      qv = "[object Promise]",
      Mv = "[object Set]",
      Fv = "[object WeakMap]",
      Dv = "[object DataView]",
      kL = or(ca),
      GL = or(la),
      UL = or(fa),
      VL = or(da),
      WL = or(pa),
      Ft = kv;
    ((ca && Ft(new ca(new ArrayBuffer(1))) != Dv) ||
      (la && Ft(new la()) != Pv) ||
      (fa && Ft(fa.resolve()) != qv) ||
      (da && Ft(new da()) != Mv) ||
      (pa && Ft(new pa()) != Fv)) &&
      (Ft = function (e) {
        var t = kv(e),
          r = t == DL ? e.constructor : void 0,
          n = r ? or(r) : "";
        if (n)
          switch (n) {
            case kL:
              return Dv;
            case GL:
              return Pv;
            case UL:
              return qv;
            case VL:
              return Mv;
            case WL:
              return Fv;
          }
        return t;
      });
    Gv.exports = Ft;
  });
  var zv = c((L5, jv) => {
    var va = ea(),
      BL = ta(),
      HL = Fp(),
      XL = Ov(),
      Uv = Xn(),
      Vv = we(),
      Wv = Gn(),
      jL = Wn(),
      zL = 1,
      Bv = "[object Arguments]",
      Hv = "[object Array]",
      jn = "[object Object]",
      KL = Object.prototype,
      Xv = KL.hasOwnProperty;
    function YL(e, t, r, n, i, o) {
      var a = Vv(e),
        s = Vv(t),
        u = a ? Hv : Uv(e),
        d = s ? Hv : Uv(t);
      (u = u == Bv ? jn : u), (d = d == Bv ? jn : d);
      var y = u == jn,
        v = d == jn,
        g = u == d;
      if (g && Wv(e)) {
        if (!Wv(t)) return !1;
        (a = !0), (y = !1);
      }
      if (g && !y)
        return (
          o || (o = new va()),
          a || jL(e) ? BL(e, t, r, n, i, o) : HL(e, t, u, r, n, i, o)
        );
      if (!(r & zL)) {
        var E = y && Xv.call(e, "__wrapped__"),
          O = v && Xv.call(t, "__wrapped__");
        if (E || O) {
          var I = E ? e.value() : e,
            C = O ? t.value() : t;
          return o || (o = new va()), i(I, C, r, n, o);
        }
      }
      return g ? (o || (o = new va()), XL(e, t, r, n, i, o)) : !1;
    }
    jv.exports = YL;
  });
  var ga = c((N5, $v) => {
    var $L = zv(),
      Kv = vt();
    function Yv(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Kv(e) && !Kv(t))
        ? e !== e && t !== t
        : $L(e, t, r, n, Yv, i);
    }
    $v.exports = Yv;
  });
  var Zv = c((P5, Qv) => {
    var QL = ea(),
      ZL = ga(),
      JL = 1,
      eN = 2;
    function tN(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var u = s[0],
          d = e[u],
          y = s[1];
        if (a && s[2]) {
          if (d === void 0 && !(u in e)) return !1;
        } else {
          var v = new QL();
          if (n) var g = n(d, y, u, e, t, v);
          if (!(g === void 0 ? ZL(y, d, JL | eN, n, v) : g)) return !1;
        }
      }
      return !0;
    }
    Qv.exports = tN;
  });
  var ha = c((q5, Jv) => {
    var rN = ut();
    function nN(e) {
      return e === e && !rN(e);
    }
    Jv.exports = nN;
  });
  var tg = c((M5, eg) => {
    var iN = ha(),
      oN = Wr();
    function aN(e) {
      for (var t = oN(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, iN(i)];
      }
      return t;
    }
    eg.exports = aN;
  });
  var ma = c((F5, rg) => {
    function sN(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    rg.exports = sN;
  });
  var ig = c((D5, ng) => {
    var uN = Zv(),
      cN = tg(),
      lN = ma();
    function fN(e) {
      var t = cN(e);
      return t.length == 1 && t[0][2]
        ? lN(t[0][0], t[0][1])
        : function (r) {
            return r === e || uN(r, e, t);
          };
    }
    ng.exports = fN;
  });
  var Br = c((k5, og) => {
    var dN = It(),
      pN = vt(),
      vN = "[object Symbol]";
    function gN(e) {
      return typeof e == "symbol" || (pN(e) && dN(e) == vN);
    }
    og.exports = gN;
  });
  var zn = c((G5, ag) => {
    var hN = we(),
      mN = Br(),
      EN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      yN = /^\w*$/;
    function _N(e, t) {
      if (hN(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        mN(e)
        ? !0
        : yN.test(e) || !EN.test(e) || (t != null && e in Object(t));
    }
    ag.exports = _N;
  });
  var cg = c((U5, ug) => {
    var sg = Fn(),
      bN = "Expected a function";
    function Ea(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(bN);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (Ea.Cache || sg)()), r;
    }
    Ea.Cache = sg;
    ug.exports = Ea;
  });
  var fg = c((V5, lg) => {
    var TN = cg(),
      IN = 500;
    function wN(e) {
      var t = TN(e, function (n) {
          return r.size === IN && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    lg.exports = wN;
  });
  var pg = c((W5, dg) => {
    var ON = fg(),
      AN =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      xN = /\\(\\)?/g,
      SN = ON(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(AN, function (r, n, i, o) {
            t.push(i ? o.replace(xN, "$1") : n || r);
          }),
          t
        );
      });
    dg.exports = SN;
  });
  var ya = c((B5, vg) => {
    function CN(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    vg.exports = CN;
  });
  var _g = c((H5, yg) => {
    var gg = Yt(),
      RN = ya(),
      LN = we(),
      NN = Br(),
      PN = 1 / 0,
      hg = gg ? gg.prototype : void 0,
      mg = hg ? hg.toString : void 0;
    function Eg(e) {
      if (typeof e == "string") return e;
      if (LN(e)) return RN(e, Eg) + "";
      if (NN(e)) return mg ? mg.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -PN ? "-0" : t;
    }
    yg.exports = Eg;
  });
  var Tg = c((X5, bg) => {
    var qN = _g();
    function MN(e) {
      return e == null ? "" : qN(e);
    }
    bg.exports = MN;
  });
  var Hr = c((j5, Ig) => {
    var FN = we(),
      DN = zn(),
      kN = pg(),
      GN = Tg();
    function UN(e, t) {
      return FN(e) ? e : DN(e, t) ? [e] : kN(GN(e));
    }
    Ig.exports = UN;
  });
  var ar = c((z5, wg) => {
    var VN = Br(),
      WN = 1 / 0;
    function BN(e) {
      if (typeof e == "string" || VN(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -WN ? "-0" : t;
    }
    wg.exports = BN;
  });
  var Kn = c((K5, Og) => {
    var HN = Hr(),
      XN = ar();
    function jN(e, t) {
      t = HN(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[XN(t[r++])];
      return r && r == n ? e : void 0;
    }
    Og.exports = jN;
  });
  var Yn = c((Y5, Ag) => {
    var zN = Kn();
    function KN(e, t, r) {
      var n = e == null ? void 0 : zN(e, t);
      return n === void 0 ? r : n;
    }
    Ag.exports = KN;
  });
  var Sg = c(($5, xg) => {
    function YN(e, t) {
      return e != null && t in Object(e);
    }
    xg.exports = YN;
  });
  var Rg = c((Q5, Cg) => {
    var $N = Hr(),
      QN = kr(),
      ZN = we(),
      JN = Un(),
      eP = Vn(),
      tP = ar();
    function rP(e, t, r) {
      t = $N(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = tP(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && eP(i) && JN(a, i) && (ZN(e) || QN(e)));
    }
    Cg.exports = rP;
  });
  var Ng = c((Z5, Lg) => {
    var nP = Sg(),
      iP = Rg();
    function oP(e, t) {
      return e != null && iP(e, t, nP);
    }
    Lg.exports = oP;
  });
  var qg = c((J5, Pg) => {
    var aP = ga(),
      sP = Yn(),
      uP = Ng(),
      cP = zn(),
      lP = ha(),
      fP = ma(),
      dP = ar(),
      pP = 1,
      vP = 2;
    function gP(e, t) {
      return cP(e) && lP(t)
        ? fP(dP(e), t)
        : function (r) {
            var n = sP(r, e);
            return n === void 0 && n === t ? uP(r, e) : aP(t, n, pP | vP);
          };
    }
    Pg.exports = gP;
  });
  var $n = c((eX, Mg) => {
    function hP(e) {
      return e;
    }
    Mg.exports = hP;
  });
  var _a = c((tX, Fg) => {
    function mP(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Fg.exports = mP;
  });
  var kg = c((rX, Dg) => {
    var EP = Kn();
    function yP(e) {
      return function (t) {
        return EP(t, e);
      };
    }
    Dg.exports = yP;
  });
  var Ug = c((nX, Gg) => {
    var _P = _a(),
      bP = kg(),
      TP = zn(),
      IP = ar();
    function wP(e) {
      return TP(e) ? _P(IP(e)) : bP(e);
    }
    Gg.exports = wP;
  });
  var Ot = c((iX, Vg) => {
    var OP = ig(),
      AP = qg(),
      xP = $n(),
      SP = we(),
      CP = Ug();
    function RP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? xP
        : typeof e == "object"
        ? SP(e)
          ? AP(e[0], e[1])
          : OP(e)
        : CP(e);
    }
    Vg.exports = RP;
  });
  var ba = c((oX, Wg) => {
    var LP = Ot(),
      NP = Mt(),
      PP = Wr();
    function qP(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!NP(t)) {
          var o = LP(r, 3);
          (t = PP(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Wg.exports = qP;
  });
  var Ta = c((aX, Bg) => {
    function MP(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Bg.exports = MP;
  });
  var Xg = c((sX, Hg) => {
    var FP = /\s/;
    function DP(e) {
      for (var t = e.length; t-- && FP.test(e.charAt(t)); );
      return t;
    }
    Hg.exports = DP;
  });
  var zg = c((uX, jg) => {
    var kP = Xg(),
      GP = /^\s+/;
    function UP(e) {
      return e && e.slice(0, kP(e) + 1).replace(GP, "");
    }
    jg.exports = UP;
  });
  var Qn = c((cX, $g) => {
    var VP = zg(),
      Kg = ut(),
      WP = Br(),
      Yg = 0 / 0,
      BP = /^[-+]0x[0-9a-f]+$/i,
      HP = /^0b[01]+$/i,
      XP = /^0o[0-7]+$/i,
      jP = parseInt;
    function zP(e) {
      if (typeof e == "number") return e;
      if (WP(e)) return Yg;
      if (Kg(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Kg(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = VP(e);
      var r = HP.test(e);
      return r || XP.test(e) ? jP(e.slice(2), r ? 2 : 8) : BP.test(e) ? Yg : +e;
    }
    $g.exports = zP;
  });
  var Jg = c((lX, Zg) => {
    var KP = Qn(),
      Qg = 1 / 0,
      YP = 17976931348623157e292;
    function $P(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = KP(e)), e === Qg || e === -Qg)) {
        var t = e < 0 ? -1 : 1;
        return t * YP;
      }
      return e === e ? e : 0;
    }
    Zg.exports = $P;
  });
  var Ia = c((fX, eh) => {
    var QP = Jg();
    function ZP(e) {
      var t = QP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    eh.exports = ZP;
  });
  var rh = c((dX, th) => {
    var JP = Ta(),
      eq = Ot(),
      tq = Ia(),
      rq = Math.max;
    function nq(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : tq(r);
      return i < 0 && (i = rq(n + i, 0)), JP(e, eq(t, 3), i);
    }
    th.exports = nq;
  });
  var wa = c((pX, nh) => {
    var iq = ba(),
      oq = rh(),
      aq = iq(oq);
    nh.exports = aq;
  });
  var ah = {};
  ke(ah, {
    ELEMENT_MATCHES: () => sq,
    FLEX_PREFIXED: () => Oa,
    IS_BROWSER_ENV: () => Je,
    TRANSFORM_PREFIXED: () => At,
    TRANSFORM_STYLE_PREFIXED: () => Jn,
    withBrowser: () => Zn,
  });
  var oh,
    Je,
    Zn,
    sq,
    Oa,
    At,
    ih,
    Jn,
    ei = me(() => {
      "use strict";
      (oh = le(wa())),
        (Je = typeof window < "u"),
        (Zn = (e, t) => (Je ? e() : t)),
        (sq = Zn(() =>
          (0, oh.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (Oa = Zn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (At = Zn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (ih = At.split("transform")[0]),
        (Jn = ih ? ih + "TransformStyle" : "transformStyle");
    });
  var Aa = c((vX, fh) => {
    var uq = 4,
      cq = 0.001,
      lq = 1e-7,
      fq = 10,
      Xr = 11,
      ti = 1 / (Xr - 1),
      dq = typeof Float32Array == "function";
    function sh(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function uh(e, t) {
      return 3 * t - 6 * e;
    }
    function ch(e) {
      return 3 * e;
    }
    function ri(e, t, r) {
      return ((sh(t, r) * e + uh(t, r)) * e + ch(t)) * e;
    }
    function lh(e, t, r) {
      return 3 * sh(t, r) * e * e + 2 * uh(t, r) * e + ch(t);
    }
    function pq(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = ri(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > lq && ++s < fq);
      return a;
    }
    function vq(e, t, r, n) {
      for (var i = 0; i < uq; ++i) {
        var o = lh(t, r, n);
        if (o === 0) return t;
        var a = ri(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    fh.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = dq ? new Float32Array(Xr) : new Array(Xr);
      if (t !== r || n !== i)
        for (var a = 0; a < Xr; ++a) o[a] = ri(a * ti, t, n);
      function s(u) {
        for (var d = 0, y = 1, v = Xr - 1; y !== v && o[y] <= u; ++y) d += ti;
        --y;
        var g = (u - o[y]) / (o[y + 1] - o[y]),
          E = d + g * ti,
          O = lh(E, t, n);
        return O >= cq ? vq(u, E, t, n) : O === 0 ? E : pq(u, d, d + ti, t, n);
      }
      return function (d) {
        return t === r && n === i
          ? d
          : d === 0
          ? 0
          : d === 1
          ? 1
          : ri(s(d), r, i);
      };
    };
  });
  var zr = {};
  ke(zr, {
    bounce: () => $q,
    bouncePast: () => Qq,
    ease: () => gq,
    easeIn: () => hq,
    easeInOut: () => Eq,
    easeOut: () => mq,
    inBack: () => Vq,
    inCirc: () => Dq,
    inCubic: () => Tq,
    inElastic: () => Hq,
    inExpo: () => qq,
    inOutBack: () => Bq,
    inOutCirc: () => Gq,
    inOutCubic: () => wq,
    inOutElastic: () => jq,
    inOutExpo: () => Fq,
    inOutQuad: () => bq,
    inOutQuart: () => xq,
    inOutQuint: () => Rq,
    inOutSine: () => Pq,
    inQuad: () => yq,
    inQuart: () => Oq,
    inQuint: () => Sq,
    inSine: () => Lq,
    outBack: () => Wq,
    outBounce: () => Uq,
    outCirc: () => kq,
    outCubic: () => Iq,
    outElastic: () => Xq,
    outExpo: () => Mq,
    outQuad: () => _q,
    outQuart: () => Aq,
    outQuint: () => Cq,
    outSine: () => Nq,
    swingFrom: () => Kq,
    swingFromTo: () => zq,
    swingTo: () => Yq,
  });
  function yq(e) {
    return Math.pow(e, 2);
  }
  function _q(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function bq(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function Tq(e) {
    return Math.pow(e, 3);
  }
  function Iq(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function wq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function Oq(e) {
    return Math.pow(e, 4);
  }
  function Aq(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function xq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function Sq(e) {
    return Math.pow(e, 5);
  }
  function Cq(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function Rq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function Lq(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function Nq(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function Pq(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function qq(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function Mq(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function Fq(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function Dq(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function kq(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function Gq(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function Uq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Vq(e) {
    let t = gt;
    return e * e * ((t + 1) * e - t);
  }
  function Wq(e) {
    let t = gt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Bq(e) {
    let t = gt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Hq(e) {
    let t = gt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function Xq(e) {
    let t = gt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function jq(e) {
    let t = gt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function zq(e) {
    let t = gt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Kq(e) {
    let t = gt;
    return e * e * ((t + 1) * e - t);
  }
  function Yq(e) {
    let t = gt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function $q(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Qq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var jr,
    gt,
    gq,
    hq,
    mq,
    Eq,
    xa = me(() => {
      "use strict";
      (jr = le(Aa())),
        (gt = 1.70158),
        (gq = (0, jr.default)(0.25, 0.1, 0.25, 1)),
        (hq = (0, jr.default)(0.42, 0, 1, 1)),
        (mq = (0, jr.default)(0, 0, 0.58, 1)),
        (Eq = (0, jr.default)(0.42, 0, 0.58, 1));
    });
  var ph = {};
  ke(ph, {
    applyEasing: () => Jq,
    createBezierEasing: () => Zq,
    optimizeFloat: () => Kr,
  });
  function Kr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function Zq(e) {
    return (0, dh.default)(...e);
  }
  function Jq(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : Kr(r ? (t > 0 ? r(t) : t) : t > 0 && e && zr[e] ? zr[e](t) : t);
  }
  var dh,
    Sa = me(() => {
      "use strict";
      xa();
      dh = le(Aa());
    });
  var hh = {};
  ke(hh, {
    createElementState: () => gh,
    ixElements: () => pM,
    mergeActionState: () => Ca,
  });
  function gh(e, t, r, n, i) {
    let o =
      r === eM ? (0, sr.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, sr.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function Ca(e, t, r, n, i) {
    let o = gM(i);
    return (0, sr.mergeIn)(e, [t, dM, r], n, o);
  }
  function gM(e) {
    let { config: t } = e;
    return vM.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (r[o] = s), r;
    }, {});
  }
  var sr,
    hX,
    eM,
    mX,
    tM,
    rM,
    nM,
    iM,
    oM,
    aM,
    sM,
    uM,
    cM,
    lM,
    fM,
    vh,
    dM,
    pM,
    vM,
    mh = me(() => {
      "use strict";
      sr = le(Zt());
      Ue();
      ({
        HTML_ELEMENT: hX,
        PLAIN_OBJECT: eM,
        ABSTRACT_NODE: mX,
        CONFIG_X_VALUE: tM,
        CONFIG_Y_VALUE: rM,
        CONFIG_Z_VALUE: nM,
        CONFIG_VALUE: iM,
        CONFIG_X_UNIT: oM,
        CONFIG_Y_UNIT: aM,
        CONFIG_Z_UNIT: sM,
        CONFIG_UNIT: uM,
      } = Ce),
        ({
          IX2_SESSION_STOPPED: cM,
          IX2_INSTANCE_ADDED: lM,
          IX2_ELEMENT_STATE_CHANGED: fM,
        } = Ie),
        (vh = {}),
        (dM = "refState"),
        (pM = (e = vh, t = {}) => {
          switch (t.type) {
            case cM:
              return vh;
            case lM: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = o,
                u = e;
              return (
                (0, sr.getIn)(u, [r, n]) !== n && (u = gh(u, n, a, r, o)),
                Ca(u, r, s, i, o)
              );
            }
            case fM: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return Ca(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      vM = [
        [tM, oM],
        [rM, aM],
        [nM, sM],
        [iM, uM],
      ];
    });
  var Eh = c((Oe) => {
    "use strict";
    Object.defineProperty(Oe, "__esModule", { value: !0 });
    Oe.renderPlugin =
      Oe.getPluginOrigin =
      Oe.getPluginDuration =
      Oe.getPluginDestination =
      Oe.getPluginConfig =
      Oe.createPluginInstance =
      Oe.clearPlugin =
        void 0;
    var hM = (e) => e.value;
    Oe.getPluginConfig = hM;
    var mM = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    Oe.getPluginDuration = mM;
    var EM = (e) => e || { value: 0 };
    Oe.getPluginOrigin = EM;
    var yM = (e) => ({ value: e.value });
    Oe.getPluginDestination = yM;
    var _M = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    Oe.createPluginInstance = _M;
    var bM = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    Oe.renderPlugin = bM;
    var TM = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    Oe.clearPlugin = TM;
  });
  var _h = c((Ae) => {
    "use strict";
    Object.defineProperty(Ae, "__esModule", { value: !0 });
    Ae.renderPlugin =
      Ae.getPluginOrigin =
      Ae.getPluginDuration =
      Ae.getPluginDestination =
      Ae.getPluginConfig =
      Ae.createPluginInstance =
      Ae.clearPlugin =
        void 0;
    var IM = (e) => document.querySelector(`[data-w-id="${e}"]`),
      wM = () => window.Webflow.require("spline"),
      OM = (e, t) => e.filter((r) => !t.includes(r)),
      AM = (e, t) => e.value[t];
    Ae.getPluginConfig = AM;
    var xM = () => null;
    Ae.getPluginDuration = xM;
    var yh = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      SM = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = OM(n, o);
          return a.length ? a.reduce((u, d) => ((u[d] = yh[d]), u), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = yh[a]), o), {});
      };
    Ae.getPluginOrigin = SM;
    var CM = (e) => e.value;
    Ae.getPluginDestination = CM;
    var RM = (e, t) => {
      var r;
      let n =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (r = r.target) === null ||
        r === void 0
          ? void 0
          : r.pluginElement;
      return n ? IM(n) : null;
    };
    Ae.createPluginInstance = RM;
    var LM = (e, t, r) => {
      let n = wM(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let u = o && s.findObjectById(o);
          if (!u) return;
          let { PLUGIN_SPLINE: d } = t;
          d.positionX != null && (u.position.x = d.positionX),
            d.positionY != null && (u.position.y = d.positionY),
            d.positionZ != null && (u.position.z = d.positionZ),
            d.rotationX != null && (u.rotation.x = d.rotationX),
            d.rotationY != null && (u.rotation.y = d.rotationY),
            d.rotationZ != null && (u.rotation.z = d.rotationZ),
            d.scaleX != null && (u.scale.x = d.scaleX),
            d.scaleY != null && (u.scale.y = d.scaleY),
            d.scaleZ != null && (u.scale.z = d.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    Ae.renderPlugin = LM;
    var NM = () => null;
    Ae.clearPlugin = NM;
  });
  var La = c((Ra) => {
    "use strict";
    Object.defineProperty(Ra, "__esModule", { value: !0 });
    Ra.normalizeColor = PM;
    var bh = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function PM(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        s = (typeof bh[o] == "string" ? bh[o].toLowerCase() : null) || o;
      if (s.startsWith("#")) {
        let u = s.substring(1);
        u.length === 3
          ? ((t = parseInt(u[0] + u[0], 16)),
            (r = parseInt(u[1] + u[1], 16)),
            (n = parseInt(u[2] + u[2], 16)))
          : u.length === 6 &&
            ((t = parseInt(u.substring(0, 2), 16)),
            (r = parseInt(u.substring(2, 4), 16)),
            (n = parseInt(u.substring(4, 6), 16)));
      } else if (s.startsWith("rgba")) {
        let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10)),
          (i = parseFloat(u[3]));
      } else if (s.startsWith("rgb")) {
        let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10));
      } else if (s.startsWith("hsla")) {
        let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
          d = parseFloat(u[0]),
          y = parseFloat(u[1].replace("%", "")) / 100,
          v = parseFloat(u[2].replace("%", "")) / 100;
        i = parseFloat(u[3]);
        let g = (1 - Math.abs(2 * v - 1)) * y,
          E = g * (1 - Math.abs(((d / 60) % 2) - 1)),
          O = v - g / 2,
          I,
          C,
          w;
        d >= 0 && d < 60
          ? ((I = g), (C = E), (w = 0))
          : d >= 60 && d < 120
          ? ((I = E), (C = g), (w = 0))
          : d >= 120 && d < 180
          ? ((I = 0), (C = g), (w = E))
          : d >= 180 && d < 240
          ? ((I = 0), (C = E), (w = g))
          : d >= 240 && d < 300
          ? ((I = E), (C = 0), (w = g))
          : ((I = g), (C = 0), (w = E)),
          (t = Math.round((I + O) * 255)),
          (r = Math.round((C + O) * 255)),
          (n = Math.round((w + O) * 255));
      } else if (s.startsWith("hsl")) {
        let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
          d = parseFloat(u[0]),
          y = parseFloat(u[1].replace("%", "")) / 100,
          v = parseFloat(u[2].replace("%", "")) / 100,
          g = (1 - Math.abs(2 * v - 1)) * y,
          E = g * (1 - Math.abs(((d / 60) % 2) - 1)),
          O = v - g / 2,
          I,
          C,
          w;
        d >= 0 && d < 60
          ? ((I = g), (C = E), (w = 0))
          : d >= 60 && d < 120
          ? ((I = E), (C = g), (w = 0))
          : d >= 120 && d < 180
          ? ((I = 0), (C = g), (w = E))
          : d >= 180 && d < 240
          ? ((I = 0), (C = E), (w = g))
          : d >= 240 && d < 300
          ? ((I = E), (C = 0), (w = g))
          : ((I = g), (C = 0), (w = E)),
          (t = Math.round((I + O) * 255)),
          (r = Math.round((C + O) * 255)),
          (n = Math.round((w + O) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: r, blue: n, alpha: i };
    }
  });
  var Th = c((xe) => {
    "use strict";
    Object.defineProperty(xe, "__esModule", { value: !0 });
    xe.renderPlugin =
      xe.getPluginOrigin =
      xe.getPluginDuration =
      xe.getPluginDestination =
      xe.getPluginConfig =
      xe.createPluginInstance =
      xe.clearPlugin =
        void 0;
    var qM = La(),
      MM = (e, t) => e.value[t];
    xe.getPluginConfig = MM;
    var FM = () => null;
    xe.getPluginDuration = FM;
    var DM = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null)
        return (0, qM.normalizeColor)(i);
    };
    xe.getPluginOrigin = DM;
    var kM = (e) => e.value;
    xe.getPluginDestination = kM;
    var GM = () => null;
    xe.createPluginInstance = GM;
    var UM = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: a, red: s, green: u, blue: d, alpha: y } = o,
        v;
      a != null && (v = a + i),
        s != null &&
          d != null &&
          u != null &&
          y != null &&
          (v = `rgba(${s}, ${u}, ${d}, ${y})`),
        v != null && document.documentElement.style.setProperty(n, v);
    };
    xe.renderPlugin = UM;
    var VM = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    xe.clearPlugin = VM;
  });
  var Ih = c((ni) => {
    "use strict";
    var Pa = vn().default;
    Object.defineProperty(ni, "__esModule", { value: !0 });
    ni.pluginMethodMap = void 0;
    var Na = (Ue(), nt(Cf)),
      WM = Pa(Eh()),
      BM = Pa(_h()),
      HM = Pa(Th()),
      TX = (ni.pluginMethodMap = new Map([
        [Na.ActionTypeConsts.PLUGIN_LOTTIE, { ...WM }],
        [Na.ActionTypeConsts.PLUGIN_SPLINE, { ...BM }],
        [Na.ActionTypeConsts.PLUGIN_VARIABLE, { ...HM }],
      ]));
  });
  var wh = {};
  ke(wh, {
    clearPlugin: () => Ga,
    createPluginInstance: () => jM,
    getPluginConfig: () => Ma,
    getPluginDestination: () => Da,
    getPluginDuration: () => XM,
    getPluginOrigin: () => Fa,
    isPluginType: () => Dt,
    renderPlugin: () => ka,
  });
  function Dt(e) {
    return qa.pluginMethodMap.has(e);
  }
  var qa,
    kt,
    Ma,
    Fa,
    XM,
    Da,
    jM,
    ka,
    Ga,
    Ua = me(() => {
      "use strict";
      ei();
      qa = le(Ih());
      (kt = (e) => (t) => {
        if (!Je) return () => null;
        let r = qa.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (Ma = kt("getPluginConfig")),
        (Fa = kt("getPluginOrigin")),
        (XM = kt("getPluginDuration")),
        (Da = kt("getPluginDestination")),
        (jM = kt("createPluginInstance")),
        (ka = kt("renderPlugin")),
        (Ga = kt("clearPlugin"));
    });
  var Ah = c((OX, Oh) => {
    function zM(e, t) {
      return e == null || e !== e ? t : e;
    }
    Oh.exports = zM;
  });
  var Sh = c((AX, xh) => {
    function KM(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    xh.exports = KM;
  });
  var Rh = c((xX, Ch) => {
    function YM(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var u = a[e ? s : ++i];
          if (r(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    Ch.exports = YM;
  });
  var Nh = c((SX, Lh) => {
    var $M = Rh(),
      QM = $M();
    Lh.exports = QM;
  });
  var Va = c((CX, Ph) => {
    var ZM = Nh(),
      JM = Wr();
    function eF(e, t) {
      return e && ZM(e, t, JM);
    }
    Ph.exports = eF;
  });
  var Mh = c((RX, qh) => {
    var tF = Mt();
    function rF(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!tF(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    qh.exports = rF;
  });
  var Wa = c((LX, Fh) => {
    var nF = Va(),
      iF = Mh(),
      oF = iF(nF);
    Fh.exports = oF;
  });
  var kh = c((NX, Dh) => {
    function aF(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    Dh.exports = aF;
  });
  var Uh = c((PX, Gh) => {
    var sF = Sh(),
      uF = Wa(),
      cF = Ot(),
      lF = kh(),
      fF = we();
    function dF(e, t, r) {
      var n = fF(e) ? sF : lF,
        i = arguments.length < 3;
      return n(e, cF(t, 4), r, i, uF);
    }
    Gh.exports = dF;
  });
  var Wh = c((qX, Vh) => {
    var pF = Ta(),
      vF = Ot(),
      gF = Ia(),
      hF = Math.max,
      mF = Math.min;
    function EF(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = gF(r)), (i = r < 0 ? hF(n + i, 0) : mF(i, n - 1))),
        pF(e, vF(t, 3), i, !0)
      );
    }
    Vh.exports = EF;
  });
  var Hh = c((MX, Bh) => {
    var yF = ba(),
      _F = Wh(),
      bF = yF(_F);
    Bh.exports = bF;
  });
  function Xh(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function IF(e, t) {
    if (Xh(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!TF.call(t, r[i]) || !Xh(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var TF,
    Ba,
    jh = me(() => {
      "use strict";
      TF = Object.prototype.hasOwnProperty;
      Ba = IF;
    });
  var lm = {};
  ke(lm, {
    cleanupHTMLElement: () => _1,
    clearAllStyles: () => y1,
    clearObjectCache: () => UF,
    getActionListProgress: () => T1,
    getAffectedElements: () => Ka,
    getComputedStyle: () => KF,
    getDestinationValues: () => t1,
    getElementId: () => HF,
    getInstanceId: () => WF,
    getInstanceOrigin: () => QF,
    getItemConfigByKey: () => e1,
    getMaxDurationItemIndex: () => cm,
    getNamespacedParameterId: () => O1,
    getRenderType: () => am,
    getStyleProp: () => r1,
    mediaQueriesEqual: () => x1,
    observeStore: () => zF,
    reduceListToGroup: () => I1,
    reifyState: () => XF,
    renderHTMLElement: () => n1,
    shallowEqual: () => Ba,
    shouldAllowMediaQuery: () => A1,
    shouldNamespaceEventParameter: () => w1,
    stringifyTarget: () => S1,
  });
  function UF() {
    ii.clear();
  }
  function WF() {
    return "i" + VF++;
  }
  function HF(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + BF++;
  }
  function XF({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, ui.default)(
        e,
        (a, s) => {
          let { eventTypeId: u } = s;
          return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function zF({ store: e, select: t, onChange: r, comparator: n = jF }) {
    let { getState: i, subscribe: o } = e,
      a = o(u),
      s = t(i());
    function u() {
      let d = t(i());
      if (d == null) {
        a();
        return;
      }
      n(d, s) || ((s = d), r(s, e));
    }
    return a;
  }
  function Yh(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function Ka({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (S, m) =>
          S.concat(
            Ka({
              config: { target: m },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: d,
        getSiblingElements: y,
        matchSelector: v,
        elementContains: g,
        isSiblingNode: E,
      } = i,
      { target: O } = e;
    if (!O) return [];
    let {
      id: I,
      objectId: C,
      selector: w,
      selectorGuids: P,
      appliesTo: R,
      useEventTarget: M,
    } = Yh(O);
    if (C) return [ii.has(C) ? ii.get(C) : ii.set(C, {}).get(C)];
    if (R === zo.PAGE) {
      let S = a(I);
      return S ? [S] : [];
    }
    let F = (t?.action?.config?.affectedElements ?? {})[I || w] || {},
      z = !!(F.id || F.selector),
      K,
      Q,
      ee,
      B = t && s(Yh(t.target));
    if (
      (z
        ? ((K = F.limitAffectedElements), (Q = B), (ee = s(F)))
        : (Q = ee = s({ id: I, selector: w, selectorGuids: P })),
      t && M)
    ) {
      let S = r && (ee || M === !0) ? [r] : u(B);
      if (ee) {
        if (M === DF) return u(ee).filter((m) => S.some((q) => g(m, q)));
        if (M === zh) return u(ee).filter((m) => S.some((q) => g(q, m)));
        if (M === Kh) return u(ee).filter((m) => S.some((q) => E(q, m)));
      }
      return S;
    }
    return Q == null || ee == null
      ? []
      : Je && n
      ? u(ee).filter((S) => n.contains(S))
      : K === zh
      ? u(Q, ee)
      : K === FF
      ? d(u(Q)).filter(v(ee))
      : K === Kh
      ? y(u(Q)).filter(v(ee))
      : u(ee);
  }
  function KF({ element: e, actionItem: t }) {
    if (!Je) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case dr:
      case pr:
      case vr:
      case gr:
      case li:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function QF(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (Dt(a)) return Fa(a)(t[a], n);
    switch (n.actionTypeId) {
      case cr:
      case lr:
      case fr:
      case Zr:
        return t[n.actionTypeId] || Ya[n.actionTypeId];
      case Jr:
        return YF(t[n.actionTypeId], n.config.filters);
      case en:
        return $F(t[n.actionTypeId], n.config.fontVariations);
      case nm:
        return { value: (0, ht.default)(parseFloat(o(e, ai)), 1) };
      case dr: {
        let s = o(e, ct),
          u = o(e, lt),
          d,
          y;
        return (
          n.config.widthUnit === xt
            ? (d = $h.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (d = (0, ht.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === xt
            ? (y = $h.test(u) ? parseFloat(u) : parseFloat(r.height))
            : (y = (0, ht.default)(parseFloat(u), parseFloat(r.height))),
          { widthValue: d, heightValue: y }
        );
      }
      case pr:
      case vr:
      case gr:
        return h1({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case li:
        return { value: (0, ht.default)(o(e, si), r.display) };
      case GF:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function t1({ element: e, actionItem: t, elementApi: r }) {
    if (Dt(t.actionTypeId)) return Da(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case cr:
      case lr:
      case fr:
      case Zr: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case dr: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: d } = t.config;
        if (!Je) return { widthValue: u, heightValue: d };
        if (a === xt) {
          let y = n(e, ct);
          i(e, ct, ""), (u = o(e, "offsetWidth")), i(e, ct, y);
        }
        if (s === xt) {
          let y = n(e, lt);
          i(e, lt, ""), (d = o(e, "offsetHeight")), i(e, lt, y);
        }
        return { widthValue: u, heightValue: d };
      }
      case pr:
      case vr:
      case gr: {
        let {
          rValue: n,
          gValue: i,
          bValue: o,
          aValue: a,
          globalSwatchId: s,
        } = t.config;
        if (s && s.startsWith("--")) {
          let { getStyle: u } = r,
            d = u(e, s),
            y = (0, Jh.normalizeColor)(d);
          return {
            rValue: y.red,
            gValue: y.green,
            bValue: y.blue,
            aValue: y.alpha,
          };
        }
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case Jr:
        return t.config.filters.reduce(ZF, {});
      case en:
        return t.config.fontVariations.reduce(JF, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function am(e) {
    if (/^TRANSFORM_/.test(e)) return tm;
    if (/^STYLE_/.test(e)) return ja;
    if (/^GENERAL_/.test(e)) return Xa;
    if (/^PLUGIN_/.test(e)) return rm;
  }
  function r1(e, t) {
    return e === ja ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function n1(e, t, r, n, i, o, a, s, u) {
    switch (s) {
      case tm:
        return u1(e, t, r, i, a);
      case ja:
        return m1(e, t, r, i, o, a);
      case Xa:
        return E1(e, i, a);
      case rm: {
        let { actionTypeId: d } = i;
        if (Dt(d)) return ka(d)(u, t, i);
      }
    }
  }
  function u1(e, t, r, n, i) {
    let o = s1
        .map((s) => {
          let u = Ya[s],
            {
              xValue: d = u.xValue,
              yValue: y = u.yValue,
              zValue: v = u.zValue,
              xUnit: g = "",
              yUnit: E = "",
              zUnit: O = "",
            } = t[s] || {};
          switch (s) {
            case cr:
              return `${AF}(${d}${g}, ${y}${E}, ${v}${O})`;
            case lr:
              return `${xF}(${d}${g}, ${y}${E}, ${v}${O})`;
            case fr:
              return `${SF}(${d}${g}) ${CF}(${y}${E}) ${RF}(${v}${O})`;
            case Zr:
              return `${LF}(${d}${g}, ${y}${E})`;
            default:
              return "";
          }
        })
        .join(" "),
      { setStyle: a } = i;
    Gt(e, At, i), a(e, At, o), f1(n, r) && a(e, Jn, NF);
  }
  function c1(e, t, r, n) {
    let i = (0, ui.default)(t, (a, s, u) => `${a} ${u}(${s}${a1(u, r)})`, ""),
      { setStyle: o } = n;
    Gt(e, Yr, n), o(e, Yr, i);
  }
  function l1(e, t, r, n) {
    let i = (0, ui.default)(
        t,
        (a, s, u) => (a.push(`"${u}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    Gt(e, $r, n), o(e, $r, i);
  }
  function f1({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === cr && n !== void 0) ||
      (e === lr && n !== void 0) ||
      (e === fr && (t !== void 0 || r !== void 0))
    );
  }
  function g1(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function h1({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = za[t],
      o = n(e, i),
      a = p1.test(o) ? o : r[i],
      s = g1(v1, a).split(Qr);
    return {
      rValue: (0, ht.default)(parseInt(s[0], 10), 255),
      gValue: (0, ht.default)(parseInt(s[1], 10), 255),
      bValue: (0, ht.default)(parseInt(s[2], 10), 255),
      aValue: (0, ht.default)(parseFloat(s[3]), 1),
    };
  }
  function m1(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case dr: {
        let { widthUnit: s = "", heightUnit: u = "" } = n.config,
          { widthValue: d, heightValue: y } = r;
        d !== void 0 && (s === xt && (s = "px"), Gt(e, ct, o), a(e, ct, d + s)),
          y !== void 0 &&
            (u === xt && (u = "px"), Gt(e, lt, o), a(e, lt, y + u));
        break;
      }
      case Jr: {
        c1(e, r, n.config, o);
        break;
      }
      case en: {
        l1(e, r, n.config, o);
        break;
      }
      case pr:
      case vr:
      case gr: {
        let s = za[n.actionTypeId],
          u = Math.round(r.rValue),
          d = Math.round(r.gValue),
          y = Math.round(r.bValue),
          v = r.aValue;
        Gt(e, s, o),
          a(e, s, v >= 1 ? `(${u},${d},${y})` : `rgba(${u},${d},${y},${v})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        Gt(e, i, o), a(e, i, r.value + s);
        break;
      }
    }
  }
  function E1(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case li: {
        let { value: i } = t.config;
        i === PF && Je ? n(e, si, Oa) : n(e, si, i);
        return;
      }
    }
  }
  function Gt(e, t, r) {
    if (!Je) return;
    let n = om[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, ur);
    if (!a) {
      o(e, ur, n);
      return;
    }
    let s = a.split(Qr).map(im);
    s.indexOf(n) === -1 && o(e, ur, s.concat(n).join(Qr));
  }
  function sm(e, t, r) {
    if (!Je) return;
    let n = om[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, ur);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        ur,
        a
          .split(Qr)
          .map(im)
          .filter((s) => s !== n)
          .join(Qr)
      );
  }
  function y1({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: s } = a.action,
        { actionListId: u } = s,
        d = i[u];
      d && Qh({ actionList: d, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        Qh({ actionList: i[o], elementApi: t });
      });
  }
  function Qh({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        Zh({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            Zh({ actionGroup: s, event: t, elementApi: r });
          });
        });
  }
  function Zh({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      Dt(o)
        ? (s = (u) => Ga(o)(u, i))
        : (s = um({ effect: b1, actionTypeId: o, elementApi: r })),
        Ka({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function _1(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === dr) {
      let { config: a } = t;
      a.widthUnit === xt && n(e, ct, ""), a.heightUnit === xt && n(e, lt, "");
    }
    i(e, ur) && um({ effect: sm, actionTypeId: o, elementApi: r })(e);
  }
  function b1(e, t, r) {
    let { setStyle: n } = r;
    sm(e, t, r), n(e, t, ""), t === At && n(e, Jn, "");
  }
  function cm(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function T1(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((u, d) => {
        if (n && d === 0) return;
        let { actionItems: y } = u,
          v = y[cm(y)],
          { config: g, actionTypeId: E } = v;
        i.id === v.id && (s = a + o);
        let O = am(E) === Xa ? 0 : g.duration;
        a += g.delay + O;
      }),
      a > 0 ? Kr(s / a) : 0
    );
  }
  function I1({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, ci.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: u } = s;
          return u.some(({ actionItems: d }) => d.some(a));
        }),
      (0, ci.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function w1(e, { basedOn: t }) {
    return (
      (e === Ze.SCROLLING_IN_VIEW && (t === st.ELEMENT || t == null)) ||
      (e === Ze.MOUSE_MOVE && t === st.ELEMENT)
    );
  }
  function O1(e, t) {
    return e + kF + t;
  }
  function A1(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function x1(e, t) {
    return Ba(e && e.sort(), t && t.sort());
  }
  function S1(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Ha + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Ha + r + Ha + n;
  }
  var ht,
    ui,
    oi,
    ci,
    Jh,
    wF,
    OF,
    AF,
    xF,
    SF,
    CF,
    RF,
    LF,
    NF,
    PF,
    ai,
    Yr,
    $r,
    ct,
    lt,
    em,
    qF,
    MF,
    zh,
    FF,
    Kh,
    DF,
    si,
    ur,
    xt,
    Qr,
    kF,
    Ha,
    tm,
    Xa,
    ja,
    rm,
    cr,
    lr,
    fr,
    Zr,
    nm,
    Jr,
    en,
    dr,
    pr,
    vr,
    gr,
    li,
    GF,
    im,
    za,
    om,
    ii,
    VF,
    BF,
    jF,
    $h,
    YF,
    $F,
    ZF,
    JF,
    e1,
    Ya,
    i1,
    o1,
    a1,
    s1,
    d1,
    p1,
    v1,
    um,
    fm = me(() => {
      "use strict";
      (ht = le(Ah())), (ui = le(Uh())), (oi = le(Hh())), (ci = le(Zt()));
      Ue();
      jh();
      Sa();
      Jh = le(La());
      Ua();
      ei();
      ({
        BACKGROUND: wF,
        TRANSFORM: OF,
        TRANSLATE_3D: AF,
        SCALE_3D: xF,
        ROTATE_X: SF,
        ROTATE_Y: CF,
        ROTATE_Z: RF,
        SKEW: LF,
        PRESERVE_3D: NF,
        FLEX: PF,
        OPACITY: ai,
        FILTER: Yr,
        FONT_VARIATION_SETTINGS: $r,
        WIDTH: ct,
        HEIGHT: lt,
        BACKGROUND_COLOR: em,
        BORDER_COLOR: qF,
        COLOR: MF,
        CHILDREN: zh,
        IMMEDIATE_CHILDREN: FF,
        SIBLINGS: Kh,
        PARENT: DF,
        DISPLAY: si,
        WILL_CHANGE: ur,
        AUTO: xt,
        COMMA_DELIMITER: Qr,
        COLON_DELIMITER: kF,
        BAR_DELIMITER: Ha,
        RENDER_TRANSFORM: tm,
        RENDER_GENERAL: Xa,
        RENDER_STYLE: ja,
        RENDER_PLUGIN: rm,
      } = Ce),
        ({
          TRANSFORM_MOVE: cr,
          TRANSFORM_SCALE: lr,
          TRANSFORM_ROTATE: fr,
          TRANSFORM_SKEW: Zr,
          STYLE_OPACITY: nm,
          STYLE_FILTER: Jr,
          STYLE_FONT_VARIATION: en,
          STYLE_SIZE: dr,
          STYLE_BACKGROUND_COLOR: pr,
          STYLE_BORDER: vr,
          STYLE_TEXT_COLOR: gr,
          GENERAL_DISPLAY: li,
          OBJECT_VALUE: GF,
        } = Ge),
        (im = (e) => e.trim()),
        (za = Object.freeze({ [pr]: em, [vr]: qF, [gr]: MF })),
        (om = Object.freeze({
          [At]: OF,
          [em]: wF,
          [ai]: ai,
          [Yr]: Yr,
          [ct]: ct,
          [lt]: lt,
          [$r]: $r,
        })),
        (ii = new Map());
      VF = 1;
      BF = 1;
      jF = (e, t) => e === t;
      ($h = /px/),
        (YF = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = i1[n.type]), r),
            e || {}
          )),
        ($F = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = o1[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (ZF = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (JF = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (e1 = (e, t, r) => {
          if (Dt(e)) return Ma(e)(r, t);
          switch (e) {
            case Jr: {
              let n = (0, oi.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case en: {
              let n = (0, oi.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Ya = {
        [cr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [lr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [fr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Zr]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (i1 = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (o1 = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (a1 = (e, t) => {
          let r = (0, oi.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (s1 = Object.keys(Ya));
      (d1 = "\\(([^)]+)\\)"), (p1 = /^rgb/), (v1 = RegExp(`rgba?${d1}`));
      um =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case cr:
            case lr:
            case fr:
            case Zr:
              e(n, At, r);
              break;
            case Jr:
              e(n, Yr, r);
              break;
            case en:
              e(n, $r, r);
              break;
            case nm:
              e(n, ai, r);
              break;
            case dr:
              e(n, ct, r), e(n, lt, r);
              break;
            case pr:
            case vr:
            case gr:
              e(n, za[t], r);
              break;
            case li:
              e(n, si, r);
              break;
          }
        };
    });
  var Ut = c((qe) => {
    "use strict";
    var hr = vn().default;
    Object.defineProperty(qe, "__esModule", { value: !0 });
    qe.IX2VanillaUtils =
      qe.IX2VanillaPlugins =
      qe.IX2ElementsReducer =
      qe.IX2Easings =
      qe.IX2EasingUtils =
      qe.IX2BrowserSupport =
        void 0;
    var C1 = hr((ei(), nt(ah)));
    qe.IX2BrowserSupport = C1;
    var R1 = hr((xa(), nt(zr)));
    qe.IX2Easings = R1;
    var L1 = hr((Sa(), nt(ph)));
    qe.IX2EasingUtils = L1;
    var N1 = hr((mh(), nt(hh)));
    qe.IX2ElementsReducer = N1;
    var P1 = hr((Ua(), nt(wh)));
    qe.IX2VanillaPlugins = P1;
    var q1 = hr((fm(), nt(lm)));
    qe.IX2VanillaUtils = q1;
  });
  var di,
    mt,
    M1,
    F1,
    D1,
    k1,
    G1,
    U1,
    fi,
    dm,
    V1,
    W1,
    $a,
    B1,
    H1,
    X1,
    j1,
    pm,
    vm = me(() => {
      "use strict";
      Ue();
      (di = le(Ut())),
        (mt = le(Zt())),
        ({
          IX2_RAW_DATA_IMPORTED: M1,
          IX2_SESSION_STOPPED: F1,
          IX2_INSTANCE_ADDED: D1,
          IX2_INSTANCE_STARTED: k1,
          IX2_INSTANCE_REMOVED: G1,
          IX2_ANIMATION_FRAME_CHANGED: U1,
        } = Ie),
        ({
          optimizeFloat: fi,
          applyEasing: dm,
          createBezierEasing: V1,
        } = di.IX2EasingUtils),
        ({ RENDER_GENERAL: W1 } = Ce),
        ({
          getItemConfigByKey: $a,
          getRenderType: B1,
          getStyleProp: H1,
        } = di.IX2VanillaUtils),
        (X1 = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: d,
              skipMotion: y,
              skipToValue: v,
            } = e,
            { parameters: g } = t.payload,
            E = Math.max(1 - a, 0.01),
            O = g[n];
          O == null && ((E = 1), (O = s));
          let I = Math.max(O, 0) || 0,
            C = fi(I - r),
            w = y ? v : fi(r + C * E),
            P = w * 100;
          if (w === r && e.current) return e;
          let R, M, k, F;
          for (let K = 0, { length: Q } = i; K < Q; K++) {
            let { keyframe: ee, actionItems: B } = i[K];
            if ((K === 0 && (R = B[0]), P >= ee)) {
              R = B[0];
              let S = i[K + 1],
                m = S && P !== ee;
              (M = m ? S.actionItems[0] : null),
                m && ((k = ee / 100), (F = (S.keyframe - ee) / 100));
            }
          }
          let z = {};
          if (R && !M)
            for (let K = 0, { length: Q } = o; K < Q; K++) {
              let ee = o[K];
              z[ee] = $a(u, ee, R.config);
            }
          else if (R && M && k !== void 0 && F !== void 0) {
            let K = (w - k) / F,
              Q = R.config.easing,
              ee = dm(Q, K, d);
            for (let B = 0, { length: S } = o; B < S; B++) {
              let m = o[B],
                q = $a(u, m, R.config),
                J = ($a(u, m, M.config) - q) * ee + q;
              z[m] = J;
            }
          }
          return (0, mt.merge)(e, { position: w, current: z });
        }),
        (j1 = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: d,
              destinationKeys: y,
              pluginDuration: v,
              instanceDelay: g,
              customEasingFn: E,
              skipMotion: O,
            } = e,
            I = u.config.easing,
            { duration: C, delay: w } = u.config;
          v != null && (C = v),
            (w = g ?? w),
            a === W1 ? (C = 0) : (o || O) && (C = w = 0);
          let { now: P } = t.payload;
          if (r && n) {
            let R = P - (i + w);
            if (s) {
              let K = P - i,
                Q = C + w,
                ee = fi(Math.min(Math.max(0, K / Q), 1));
              e = (0, mt.set)(e, "verboseTimeElapsed", Q * ee);
            }
            if (R < 0) return e;
            let M = fi(Math.min(Math.max(0, R / C), 1)),
              k = dm(I, M, E),
              F = {},
              z = null;
            return (
              y.length &&
                (z = y.reduce((K, Q) => {
                  let ee = d[Q],
                    B = parseFloat(n[Q]) || 0,
                    m = (parseFloat(ee) - B) * k + B;
                  return (K[Q] = m), K;
                }, {})),
              (F.current = z),
              (F.position = M),
              M === 1 && ((F.active = !1), (F.complete = !0)),
              (0, mt.merge)(e, F)
            );
          }
          return e;
        }),
        (pm = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case M1:
              return t.payload.ixInstances || Object.freeze({});
            case F1:
              return Object.freeze({});
            case D1: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: d,
                  isCarrier: y,
                  origin: v,
                  destination: g,
                  immediate: E,
                  verbose: O,
                  continuous: I,
                  parameterId: C,
                  actionGroups: w,
                  smoothing: P,
                  restingValue: R,
                  pluginInstance: M,
                  pluginDuration: k,
                  instanceDelay: F,
                  skipMotion: z,
                  skipToValue: K,
                } = t.payload,
                { actionTypeId: Q } = i,
                ee = B1(Q),
                B = H1(ee, Q),
                S = Object.keys(g).filter(
                  (q) => g[q] != null && typeof g[q] != "string"
                ),
                { easing: m } = i.config;
              return (0, mt.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: v,
                destination: g,
                destinationKeys: S,
                immediate: E,
                verbose: O,
                current: null,
                actionItem: i,
                actionTypeId: Q,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: d,
                renderType: ee,
                isCarrier: y,
                styleProp: B,
                continuous: I,
                parameterId: C,
                actionGroups: w,
                smoothing: P,
                restingValue: R,
                pluginInstance: M,
                pluginDuration: k,
                instanceDelay: F,
                skipMotion: z,
                skipToValue: K,
                customEasingFn:
                  Array.isArray(m) && m.length === 4 ? V1(m) : void 0,
              });
            }
            case k1: {
              let { instanceId: r, time: n } = t.payload;
              return (0, mt.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case G1: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case U1: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  s = e[a],
                  u = s.continuous ? X1 : j1;
                r = (0, mt.set)(r, a, u(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var z1,
    K1,
    Y1,
    gm,
    hm = me(() => {
      "use strict";
      Ue();
      ({
        IX2_RAW_DATA_IMPORTED: z1,
        IX2_SESSION_STOPPED: K1,
        IX2_PARAMETER_CHANGED: Y1,
      } = Ie),
        (gm = (e = {}, t) => {
          switch (t.type) {
            case z1:
              return t.payload.ixParameters || {};
            case K1:
              return {};
            case Y1: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var ym = {};
  ke(ym, { default: () => Q1 });
  var mm,
    Em,
    $1,
    Q1,
    _m = me(() => {
      "use strict";
      mm = le(jo());
      Lf();
      Zf();
      td();
      Em = le(Ut());
      vm();
      hm();
      ({ ixElements: $1 } = Em.IX2ElementsReducer),
        (Q1 = (0, mm.combineReducers)({
          ixData: Rf,
          ixRequest: Qf,
          ixSession: ed,
          ixElements: $1,
          ixInstances: pm,
          ixParameters: gm,
        }));
    });
  var Tm = c((ZX, bm) => {
    var Z1 = It(),
      J1 = we(),
      eD = vt(),
      tD = "[object String]";
    function rD(e) {
      return typeof e == "string" || (!J1(e) && eD(e) && Z1(e) == tD);
    }
    bm.exports = rD;
  });
  var wm = c((JX, Im) => {
    var nD = _a(),
      iD = nD("length");
    Im.exports = iD;
  });
  var Am = c((ej, Om) => {
    var oD = "\\ud800-\\udfff",
      aD = "\\u0300-\\u036f",
      sD = "\\ufe20-\\ufe2f",
      uD = "\\u20d0-\\u20ff",
      cD = aD + sD + uD,
      lD = "\\ufe0e\\ufe0f",
      fD = "\\u200d",
      dD = RegExp("[" + fD + oD + cD + lD + "]");
    function pD(e) {
      return dD.test(e);
    }
    Om.exports = pD;
  });
  var Mm = c((tj, qm) => {
    var Sm = "\\ud800-\\udfff",
      vD = "\\u0300-\\u036f",
      gD = "\\ufe20-\\ufe2f",
      hD = "\\u20d0-\\u20ff",
      mD = vD + gD + hD,
      ED = "\\ufe0e\\ufe0f",
      yD = "[" + Sm + "]",
      Qa = "[" + mD + "]",
      Za = "\\ud83c[\\udffb-\\udfff]",
      _D = "(?:" + Qa + "|" + Za + ")",
      Cm = "[^" + Sm + "]",
      Rm = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Lm = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      bD = "\\u200d",
      Nm = _D + "?",
      Pm = "[" + ED + "]?",
      TD = "(?:" + bD + "(?:" + [Cm, Rm, Lm].join("|") + ")" + Pm + Nm + ")*",
      ID = Pm + Nm + TD,
      wD = "(?:" + [Cm + Qa + "?", Qa, Rm, Lm, yD].join("|") + ")",
      xm = RegExp(Za + "(?=" + Za + ")|" + wD + ID, "g");
    function OD(e) {
      for (var t = (xm.lastIndex = 0); xm.test(e); ) ++t;
      return t;
    }
    qm.exports = OD;
  });
  var Dm = c((rj, Fm) => {
    var AD = wm(),
      xD = Am(),
      SD = Mm();
    function CD(e) {
      return xD(e) ? SD(e) : AD(e);
    }
    Fm.exports = CD;
  });
  var Gm = c((nj, km) => {
    var RD = Hn(),
      LD = Xn(),
      ND = Mt(),
      PD = Tm(),
      qD = Dm(),
      MD = "[object Map]",
      FD = "[object Set]";
    function DD(e) {
      if (e == null) return 0;
      if (ND(e)) return PD(e) ? qD(e) : e.length;
      var t = LD(e);
      return t == MD || t == FD ? e.size : RD(e).length;
    }
    km.exports = DD;
  });
  var Vm = c((ij, Um) => {
    var kD = "Expected a function";
    function GD(e) {
      if (typeof e != "function") throw new TypeError(kD);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Um.exports = GD;
  });
  var Ja = c((oj, Wm) => {
    var UD = wt(),
      VD = (function () {
        try {
          var e = UD(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    Wm.exports = VD;
  });
  var es = c((aj, Hm) => {
    var Bm = Ja();
    function WD(e, t, r) {
      t == "__proto__" && Bm
        ? Bm(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Hm.exports = WD;
  });
  var jm = c((sj, Xm) => {
    var BD = es(),
      HD = qn(),
      XD = Object.prototype,
      jD = XD.hasOwnProperty;
    function zD(e, t, r) {
      var n = e[t];
      (!(jD.call(e, t) && HD(n, r)) || (r === void 0 && !(t in e))) &&
        BD(e, t, r);
    }
    Xm.exports = zD;
  });
  var Ym = c((uj, Km) => {
    var KD = jm(),
      YD = Hr(),
      $D = Un(),
      zm = ut(),
      QD = ar();
    function ZD(e, t, r, n) {
      if (!zm(e)) return e;
      t = YD(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var u = QD(t[i]),
          d = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (i != a) {
          var y = s[u];
          (d = n ? n(y, u, s) : void 0),
            d === void 0 && (d = zm(y) ? y : $D(t[i + 1]) ? [] : {});
        }
        KD(s, u, d), (s = s[u]);
      }
      return e;
    }
    Km.exports = ZD;
  });
  var Qm = c((cj, $m) => {
    var JD = Kn(),
      e2 = Ym(),
      t2 = Hr();
    function r2(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = JD(e, a);
        r(s, a) && e2(o, t2(a, e), s);
      }
      return o;
    }
    $m.exports = r2;
  });
  var Jm = c((lj, Zm) => {
    var n2 = kn(),
      i2 = Po(),
      o2 = oa(),
      a2 = ia(),
      s2 = Object.getOwnPropertySymbols,
      u2 = s2
        ? function (e) {
            for (var t = []; e; ) n2(t, o2(e)), (e = i2(e));
            return t;
          }
        : a2;
    Zm.exports = u2;
  });
  var tE = c((fj, eE) => {
    function c2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    eE.exports = c2;
  });
  var nE = c((dj, rE) => {
    var l2 = ut(),
      f2 = Bn(),
      d2 = tE(),
      p2 = Object.prototype,
      v2 = p2.hasOwnProperty;
    function g2(e) {
      if (!l2(e)) return d2(e);
      var t = f2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !v2.call(e, n))) || r.push(n);
      return r;
    }
    rE.exports = g2;
  });
  var oE = c((pj, iE) => {
    var h2 = sa(),
      m2 = nE(),
      E2 = Mt();
    function y2(e) {
      return E2(e) ? h2(e, !0) : m2(e);
    }
    iE.exports = y2;
  });
  var sE = c((vj, aE) => {
    var _2 = na(),
      b2 = Jm(),
      T2 = oE();
    function I2(e) {
      return _2(e, T2, b2);
    }
    aE.exports = I2;
  });
  var cE = c((gj, uE) => {
    var w2 = ya(),
      O2 = Ot(),
      A2 = Qm(),
      x2 = sE();
    function S2(e, t) {
      if (e == null) return {};
      var r = w2(x2(e), function (n) {
        return [n];
      });
      return (
        (t = O2(t)),
        A2(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    uE.exports = S2;
  });
  var fE = c((hj, lE) => {
    var C2 = Ot(),
      R2 = Vm(),
      L2 = cE();
    function N2(e, t) {
      return L2(e, R2(C2(t)));
    }
    lE.exports = N2;
  });
  var pE = c((mj, dE) => {
    var P2 = Hn(),
      q2 = Xn(),
      M2 = kr(),
      F2 = we(),
      D2 = Mt(),
      k2 = Gn(),
      G2 = Bn(),
      U2 = Wn(),
      V2 = "[object Map]",
      W2 = "[object Set]",
      B2 = Object.prototype,
      H2 = B2.hasOwnProperty;
    function X2(e) {
      if (e == null) return !0;
      if (
        D2(e) &&
        (F2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          k2(e) ||
          U2(e) ||
          M2(e))
      )
        return !e.length;
      var t = q2(e);
      if (t == V2 || t == W2) return !e.size;
      if (G2(e)) return !P2(e).length;
      for (var r in e) if (H2.call(e, r)) return !1;
      return !0;
    }
    dE.exports = X2;
  });
  var gE = c((Ej, vE) => {
    var j2 = es(),
      z2 = Va(),
      K2 = Ot();
    function Y2(e, t) {
      var r = {};
      return (
        (t = K2(t, 3)),
        z2(e, function (n, i, o) {
          j2(r, i, t(n, i, o));
        }),
        r
      );
    }
    vE.exports = Y2;
  });
  var mE = c((yj, hE) => {
    function $2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    hE.exports = $2;
  });
  var yE = c((_j, EE) => {
    var Q2 = $n();
    function Z2(e) {
      return typeof e == "function" ? e : Q2;
    }
    EE.exports = Z2;
  });
  var bE = c((bj, _E) => {
    var J2 = mE(),
      ek = Wa(),
      tk = yE(),
      rk = we();
    function nk(e, t) {
      var r = rk(e) ? J2 : ek;
      return r(e, tk(t));
    }
    _E.exports = nk;
  });
  var IE = c((Tj, TE) => {
    var ik = Qe(),
      ok = function () {
        return ik.Date.now();
      };
    TE.exports = ok;
  });
  var AE = c((Ij, OE) => {
    var ak = ut(),
      ts = IE(),
      wE = Qn(),
      sk = "Expected a function",
      uk = Math.max,
      ck = Math.min;
    function lk(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        u,
        d = 0,
        y = !1,
        v = !1,
        g = !0;
      if (typeof e != "function") throw new TypeError(sk);
      (t = wE(t) || 0),
        ak(r) &&
          ((y = !!r.leading),
          (v = "maxWait" in r),
          (o = v ? uk(wE(r.maxWait) || 0, t) : o),
          (g = "trailing" in r ? !!r.trailing : g));
      function E(F) {
        var z = n,
          K = i;
        return (n = i = void 0), (d = F), (a = e.apply(K, z)), a;
      }
      function O(F) {
        return (d = F), (s = setTimeout(w, t)), y ? E(F) : a;
      }
      function I(F) {
        var z = F - u,
          K = F - d,
          Q = t - z;
        return v ? ck(Q, o - K) : Q;
      }
      function C(F) {
        var z = F - u,
          K = F - d;
        return u === void 0 || z >= t || z < 0 || (v && K >= o);
      }
      function w() {
        var F = ts();
        if (C(F)) return P(F);
        s = setTimeout(w, I(F));
      }
      function P(F) {
        return (s = void 0), g && n ? E(F) : ((n = i = void 0), a);
      }
      function R() {
        s !== void 0 && clearTimeout(s), (d = 0), (n = u = i = s = void 0);
      }
      function M() {
        return s === void 0 ? a : P(ts());
      }
      function k() {
        var F = ts(),
          z = C(F);
        if (((n = arguments), (i = this), (u = F), z)) {
          if (s === void 0) return O(u);
          if (v) return clearTimeout(s), (s = setTimeout(w, t)), E(u);
        }
        return s === void 0 && (s = setTimeout(w, t)), a;
      }
      return (k.cancel = R), (k.flush = M), k;
    }
    OE.exports = lk;
  });
  var SE = c((wj, xE) => {
    var fk = AE(),
      dk = ut(),
      pk = "Expected a function";
    function vk(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(pk);
      return (
        dk(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        fk(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    xE.exports = vk;
  });
  var RE = {};
  ke(RE, {
    actionListPlaybackChanged: () => Er,
    animationFrameChanged: () => vi,
    clearRequested: () => Gk,
    elementStateChanged: () => cs,
    eventListenerAdded: () => pi,
    eventStateChanged: () => as,
    instanceAdded: () => ss,
    instanceRemoved: () => us,
    instanceStarted: () => gi,
    mediaQueriesDefined: () => fs,
    parameterChanged: () => mr,
    playbackRequested: () => Dk,
    previewRequested: () => Fk,
    rawDataImported: () => rs,
    sessionInitialized: () => ns,
    sessionStarted: () => is,
    sessionStopped: () => os,
    stopRequested: () => kk,
    testFrameRendered: () => Uk,
    viewportWidthChanged: () => ls,
  });
  var CE,
    gk,
    hk,
    mk,
    Ek,
    yk,
    _k,
    bk,
    Tk,
    Ik,
    wk,
    Ok,
    Ak,
    xk,
    Sk,
    Ck,
    Rk,
    Lk,
    Nk,
    Pk,
    qk,
    Mk,
    rs,
    ns,
    is,
    os,
    Fk,
    Dk,
    kk,
    Gk,
    pi,
    Uk,
    as,
    vi,
    mr,
    ss,
    gi,
    us,
    cs,
    Er,
    ls,
    fs,
    hi = me(() => {
      "use strict";
      Ue();
      (CE = le(Ut())),
        ({
          IX2_RAW_DATA_IMPORTED: gk,
          IX2_SESSION_INITIALIZED: hk,
          IX2_SESSION_STARTED: mk,
          IX2_SESSION_STOPPED: Ek,
          IX2_PREVIEW_REQUESTED: yk,
          IX2_PLAYBACK_REQUESTED: _k,
          IX2_STOP_REQUESTED: bk,
          IX2_CLEAR_REQUESTED: Tk,
          IX2_EVENT_LISTENER_ADDED: Ik,
          IX2_TEST_FRAME_RENDERED: wk,
          IX2_EVENT_STATE_CHANGED: Ok,
          IX2_ANIMATION_FRAME_CHANGED: Ak,
          IX2_PARAMETER_CHANGED: xk,
          IX2_INSTANCE_ADDED: Sk,
          IX2_INSTANCE_STARTED: Ck,
          IX2_INSTANCE_REMOVED: Rk,
          IX2_ELEMENT_STATE_CHANGED: Lk,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: Nk,
          IX2_VIEWPORT_WIDTH_CHANGED: Pk,
          IX2_MEDIA_QUERIES_DEFINED: qk,
        } = Ie),
        ({ reifyState: Mk } = CE.IX2VanillaUtils),
        (rs = (e) => ({ type: gk, payload: { ...Mk(e) } })),
        (ns = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: hk,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (is = () => ({ type: mk })),
        (os = () => ({ type: Ek })),
        (Fk = ({ rawData: e, defer: t }) => ({
          type: yk,
          payload: { defer: t, rawData: e },
        })),
        (Dk = ({
          actionTypeId: e = Ge.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: _k,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: u,
          },
        })),
        (kk = (e) => ({ type: bk, payload: { actionListId: e } })),
        (Gk = () => ({ type: Tk })),
        (pi = (e, t) => ({
          type: Ik,
          payload: { target: e, listenerParams: t },
        })),
        (Uk = (e = 1) => ({ type: wk, payload: { step: e } })),
        (as = (e, t) => ({ type: Ok, payload: { stateKey: e, newState: t } })),
        (vi = (e, t) => ({ type: Ak, payload: { now: e, parameters: t } })),
        (mr = (e, t) => ({ type: xk, payload: { key: e, value: t } })),
        (ss = (e) => ({ type: Sk, payload: { ...e } })),
        (gi = (e, t) => ({ type: Ck, payload: { instanceId: e, time: t } })),
        (us = (e) => ({ type: Rk, payload: { instanceId: e } })),
        (cs = (e, t, r, n) => ({
          type: Lk,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (Er = ({ actionListId: e, isPlaying: t }) => ({
          type: Nk,
          payload: { actionListId: e, isPlaying: t },
        })),
        (ls = ({ width: e, mediaQueries: t }) => ({
          type: Pk,
          payload: { width: e, mediaQueries: t },
        })),
        (fs = () => ({ type: qk }));
    });
  var Me = {};
  ke(Me, {
    elementContains: () => vs,
    getChildElements: () => $k,
    getClosestElement: () => tn,
    getProperty: () => Xk,
    getQuerySelector: () => ps,
    getRefType: () => gs,
    getSiblingElements: () => Qk,
    getStyle: () => Hk,
    getValidDocument: () => zk,
    isSiblingNode: () => Yk,
    matchSelector: () => jk,
    queryDocument: () => Kk,
    setStyle: () => Bk,
  });
  function Bk(e, t, r) {
    e.style[t] = r;
  }
  function Hk(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function Xk(e, t) {
    return e[t];
  }
  function jk(e) {
    return (t) => t[ds](e);
  }
  function ps({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(LE) !== -1) {
        let n = e.split(LE),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(PE)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function zk(e) {
    return e == null || e === document.documentElement.getAttribute(PE)
      ? document
      : null;
  }
  function Kk(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function vs(e, t) {
    return e.contains(t);
  }
  function Yk(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function $k(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function Qk(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function gs(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? Vk
        : Wk
      : null;
  }
  var NE,
    ds,
    LE,
    Vk,
    Wk,
    PE,
    tn,
    qE = me(() => {
      "use strict";
      NE = le(Ut());
      Ue();
      ({ ELEMENT_MATCHES: ds } = NE.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: LE,
          HTML_ELEMENT: Vk,
          PLAIN_OBJECT: Wk,
          WF_PAGE: PE,
        } = Ce);
      tn = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[ds] && r[ds](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var hs = c((xj, FE) => {
    var Zk = ut(),
      ME = Object.create,
      Jk = (function () {
        function e() {}
        return function (t) {
          if (!Zk(t)) return {};
          if (ME) return ME(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    FE.exports = Jk;
  });
  var mi = c((Sj, DE) => {
    function eG() {}
    DE.exports = eG;
  });
  var yi = c((Cj, kE) => {
    var tG = hs(),
      rG = mi();
    function Ei(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    Ei.prototype = tG(rG.prototype);
    Ei.prototype.constructor = Ei;
    kE.exports = Ei;
  });
  var WE = c((Rj, VE) => {
    var GE = Yt(),
      nG = kr(),
      iG = we(),
      UE = GE ? GE.isConcatSpreadable : void 0;
    function oG(e) {
      return iG(e) || nG(e) || !!(UE && e && e[UE]);
    }
    VE.exports = oG;
  });
  var XE = c((Lj, HE) => {
    var aG = kn(),
      sG = WE();
    function BE(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = sG), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? BE(s, t - 1, r, n, i)
            : aG(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    HE.exports = BE;
  });
  var zE = c((Nj, jE) => {
    var uG = XE();
    function cG(e) {
      var t = e == null ? 0 : e.length;
      return t ? uG(e, 1) : [];
    }
    jE.exports = cG;
  });
  var YE = c((Pj, KE) => {
    function lG(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    KE.exports = lG;
  });
  var ZE = c((qj, QE) => {
    var fG = YE(),
      $E = Math.max;
    function dG(e, t, r) {
      return (
        (t = $E(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = $E(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), fG(e, this, s);
        }
      );
    }
    QE.exports = dG;
  });
  var ey = c((Mj, JE) => {
    function pG(e) {
      return function () {
        return e;
      };
    }
    JE.exports = pG;
  });
  var ny = c((Fj, ry) => {
    var vG = ey(),
      ty = Ja(),
      gG = $n(),
      hG = ty
        ? function (e, t) {
            return ty(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: vG(t),
              writable: !0,
            });
          }
        : gG;
    ry.exports = hG;
  });
  var oy = c((Dj, iy) => {
    var mG = 800,
      EG = 16,
      yG = Date.now;
    function _G(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = yG(),
          i = EG - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= mG) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    iy.exports = _G;
  });
  var sy = c((kj, ay) => {
    var bG = ny(),
      TG = oy(),
      IG = TG(bG);
    ay.exports = IG;
  });
  var cy = c((Gj, uy) => {
    var wG = zE(),
      OG = ZE(),
      AG = sy();
    function xG(e) {
      return AG(OG(e, void 0, wG), e + "");
    }
    uy.exports = xG;
  });
  var dy = c((Uj, fy) => {
    var ly = ua(),
      SG = ly && new ly();
    fy.exports = SG;
  });
  var vy = c((Vj, py) => {
    function CG() {}
    py.exports = CG;
  });
  var ms = c((Wj, hy) => {
    var gy = dy(),
      RG = vy(),
      LG = gy
        ? function (e) {
            return gy.get(e);
          }
        : RG;
    hy.exports = LG;
  });
  var Ey = c((Bj, my) => {
    var NG = {};
    my.exports = NG;
  });
  var Es = c((Hj, _y) => {
    var yy = Ey(),
      PG = Object.prototype,
      qG = PG.hasOwnProperty;
    function MG(e) {
      for (
        var t = e.name + "", r = yy[t], n = qG.call(yy, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    _y.exports = MG;
  });
  var bi = c((Xj, by) => {
    var FG = hs(),
      DG = mi(),
      kG = 4294967295;
    function _i(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = kG),
        (this.__views__ = []);
    }
    _i.prototype = FG(DG.prototype);
    _i.prototype.constructor = _i;
    by.exports = _i;
  });
  var Iy = c((jj, Ty) => {
    function GG(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    Ty.exports = GG;
  });
  var Oy = c((zj, wy) => {
    var UG = bi(),
      VG = yi(),
      WG = Iy();
    function BG(e) {
      if (e instanceof UG) return e.clone();
      var t = new VG(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = WG(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    wy.exports = BG;
  });
  var Sy = c((Kj, xy) => {
    var HG = bi(),
      Ay = yi(),
      XG = mi(),
      jG = we(),
      zG = vt(),
      KG = Oy(),
      YG = Object.prototype,
      $G = YG.hasOwnProperty;
    function Ti(e) {
      if (zG(e) && !jG(e) && !(e instanceof HG)) {
        if (e instanceof Ay) return e;
        if ($G.call(e, "__wrapped__")) return KG(e);
      }
      return new Ay(e);
    }
    Ti.prototype = XG.prototype;
    Ti.prototype.constructor = Ti;
    xy.exports = Ti;
  });
  var Ry = c((Yj, Cy) => {
    var QG = bi(),
      ZG = ms(),
      JG = Es(),
      eU = Sy();
    function tU(e) {
      var t = JG(e),
        r = eU[t];
      if (typeof r != "function" || !(t in QG.prototype)) return !1;
      if (e === r) return !0;
      var n = ZG(r);
      return !!n && e === n[0];
    }
    Cy.exports = tU;
  });
  var qy = c(($j, Py) => {
    var Ly = yi(),
      rU = cy(),
      nU = ms(),
      ys = Es(),
      iU = we(),
      Ny = Ry(),
      oU = "Expected a function",
      aU = 8,
      sU = 32,
      uU = 128,
      cU = 256;
    function lU(e) {
      return rU(function (t) {
        var r = t.length,
          n = r,
          i = Ly.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(oU);
          if (i && !a && ys(o) == "wrapper") var a = new Ly([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = ys(o),
            u = s == "wrapper" ? nU(o) : void 0;
          u &&
          Ny(u[0]) &&
          u[1] == (uU | aU | sU | cU) &&
          !u[4].length &&
          u[9] == 1
            ? (a = a[ys(u[0])].apply(a, u[3]))
            : (a = o.length == 1 && Ny(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var d = arguments,
            y = d[0];
          if (a && d.length == 1 && iU(y)) return a.plant(y).value();
          for (var v = 0, g = r ? t[v].apply(this, d) : y; ++v < r; )
            g = t[v].call(this, g);
          return g;
        };
      });
    }
    Py.exports = lU;
  });
  var Fy = c((Qj, My) => {
    var fU = qy(),
      dU = fU();
    My.exports = dU;
  });
  var ky = c((Zj, Dy) => {
    function pU(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Dy.exports = pU;
  });
  var Uy = c((Jj, Gy) => {
    var vU = ky(),
      _s = Qn();
    function gU(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = _s(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = _s(t)), (t = t === t ? t : 0)),
        vU(_s(e), t, r)
      );
    }
    Gy.exports = gU;
  });
  var Yy,
    $y,
    Qy,
    Zy,
    hU,
    mU,
    EU,
    yU,
    _U,
    bU,
    TU,
    IU,
    wU,
    OU,
    AU,
    xU,
    SU,
    CU,
    RU,
    Jy,
    e_,
    LU,
    NU,
    PU,
    t_,
    qU,
    MU,
    r_,
    FU,
    bs,
    n_,
    Vy,
    Wy,
    i_,
    nn,
    DU,
    ft,
    o_,
    kU,
    We,
    et,
    on,
    a_,
    Ts,
    By,
    Is,
    GU,
    rn,
    UU,
    VU,
    WU,
    s_,
    Hy,
    BU,
    Xy,
    HU,
    XU,
    jU,
    jy,
    Ii,
    wi,
    zy,
    Ky,
    u_,
    c_ = me(() => {
      "use strict";
      (Yy = le(Fy())), ($y = le(Yn())), (Qy = le(Uy()));
      Ue();
      ws();
      hi();
      (Zy = le(Ut())),
        ({
          MOUSE_CLICK: hU,
          MOUSE_SECOND_CLICK: mU,
          MOUSE_DOWN: EU,
          MOUSE_UP: yU,
          MOUSE_OVER: _U,
          MOUSE_OUT: bU,
          DROPDOWN_CLOSE: TU,
          DROPDOWN_OPEN: IU,
          SLIDER_ACTIVE: wU,
          SLIDER_INACTIVE: OU,
          TAB_ACTIVE: AU,
          TAB_INACTIVE: xU,
          NAVBAR_CLOSE: SU,
          NAVBAR_OPEN: CU,
          MOUSE_MOVE: RU,
          PAGE_SCROLL_DOWN: Jy,
          SCROLL_INTO_VIEW: e_,
          SCROLL_OUT_OF_VIEW: LU,
          PAGE_SCROLL_UP: NU,
          SCROLLING_IN_VIEW: PU,
          PAGE_FINISH: t_,
          ECOMMERCE_CART_CLOSE: qU,
          ECOMMERCE_CART_OPEN: MU,
          PAGE_START: r_,
          PAGE_SCROLL: FU,
        } = Ze),
        (bs = "COMPONENT_ACTIVE"),
        (n_ = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: Vy } = Ce),
        ({ getNamespacedParameterId: Wy } = Zy.IX2VanillaUtils),
        (i_ = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (nn = i_(({ element: e, nativeEvent: t }) => e === t.target)),
        (DU = i_(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (ft = (0, Yy.default)([nn, DU])),
        (o_ = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !GU[i.eventTypeId]) return i;
          }
          return null;
        }),
        (kU = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!o_(e, n);
        }),
        (We = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            d = o_(e, u);
          return (
            d &&
              yr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + Vy + n.split(Vy)[1],
                actionListId: (0, $y.default)(d, "action.config.actionListId"),
              }),
            yr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            an({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        }),
        (et = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (on = { handler: et(ft, We) }),
        (a_ = { ...on, types: [bs, n_].join(" ") }),
        (Ts = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (By = "mouseover mouseout"),
        (Is = { types: Ts }),
        (GU = { PAGE_START: r_, PAGE_FINISH: t_ }),
        (rn = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, Qy.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (UU = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (VU = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (WU = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = rn(),
            o = r.scrollOffsetValue,
            u = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return UU(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: n,
            bottom: i - u,
          });
        }),
        (s_ = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [bs, n_].indexOf(n) !== -1 ? n === bs : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (Hy = (e) => (t, r) => {
          let n = { elementHovered: VU(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (BU = (e) => (t, r) => {
          let n = { ...r, elementVisible: WU(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (Xy =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = rn(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: d } = a,
              y = d === "PX",
              v = i - o,
              g = Number((n / v).toFixed(2));
            if (r && r.percentTop === g) return r;
            let E = (y ? u : (o * (u || 0)) / 100) / v,
              O,
              I,
              C = 0;
            r &&
              ((O = g > r.percentTop),
              (I = r.scrollingDown !== O),
              (C = I ? g : r.anchorTop));
            let w = s === Jy ? g >= C + E : g <= C - E,
              P = {
                ...r,
                percentTop: g,
                inBounds: w,
                anchorTop: C,
                scrollingDown: O,
              };
            return (r && w && (I || P.inBounds !== r.inBounds) && e(t, P)) || P;
          }),
        (HU = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (XU = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (jU = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (jy =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (Ii = (e = !0) => ({
          ...a_,
          handler: et(
            e ? ft : nn,
            s_((t, r) => (r.isActive ? on.handler(t, r) : r))
          ),
        })),
        (wi = (e = !0) => ({
          ...a_,
          handler: et(
            e ? ft : nn,
            s_((t, r) => (r.isActive ? r : on.handler(t, r)))
          ),
        })),
        (zy = {
          ...Is,
          handler: BU((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === e_) === r
              ? (We(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (Ky = 0.05),
        (u_ = {
          [wU]: Ii(),
          [OU]: wi(),
          [IU]: Ii(),
          [TU]: wi(),
          [CU]: Ii(!1),
          [SU]: wi(!1),
          [AU]: Ii(),
          [xU]: wi(),
          [MU]: { types: "ecommerce-cart-open", handler: et(ft, We) },
          [qU]: { types: "ecommerce-cart-close", handler: et(ft, We) },
          [hU]: {
            types: "click",
            handler: et(
              ft,
              jy((e, { clickCount: t }) => {
                kU(e) ? t === 1 && We(e) : We(e);
              })
            ),
          },
          [mU]: {
            types: "click",
            handler: et(
              ft,
              jy((e, { clickCount: t }) => {
                t === 2 && We(e);
              })
            ),
          },
          [EU]: { ...on, types: "mousedown" },
          [yU]: { ...on, types: "mouseup" },
          [_U]: {
            types: By,
            handler: et(
              ft,
              Hy((e, t) => {
                t.elementHovered && We(e);
              })
            ),
          },
          [bU]: {
            types: By,
            handler: et(
              ft,
              Hy((e, t) => {
                t.elementHovered || We(e);
              })
            ),
          },
          [RU]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: u,
                  reverse: d,
                  restingState: y = 0,
                } = r,
                {
                  clientX: v = o.clientX,
                  clientY: g = o.clientY,
                  pageX: E = o.pageX,
                  pageY: O = o.pageY,
                } = n,
                I = s === "X_AXIS",
                C = n.type === "mouseout",
                w = y / 100,
                P = u,
                R = !1;
              switch (a) {
                case st.VIEWPORT: {
                  w = I
                    ? Math.min(v, window.innerWidth) / window.innerWidth
                    : Math.min(g, window.innerHeight) / window.innerHeight;
                  break;
                }
                case st.PAGE: {
                  let {
                    scrollLeft: M,
                    scrollTop: k,
                    scrollWidth: F,
                    scrollHeight: z,
                  } = rn();
                  w = I ? Math.min(M + E, F) / F : Math.min(k + O, z) / z;
                  break;
                }
                case st.ELEMENT:
                default: {
                  P = Wy(i, u);
                  let M = n.type.indexOf("mouse") === 0;
                  if (M && ft({ element: t, nativeEvent: n }) !== !0) break;
                  let k = t.getBoundingClientRect(),
                    { left: F, top: z, width: K, height: Q } = k;
                  if (!M && !HU({ left: v, top: g }, k)) break;
                  (R = !0), (w = I ? (v - F) / K : (g - z) / Q);
                  break;
                }
              }
              return (
                C && (w > 1 - Ky || w < Ky) && (w = Math.round(w)),
                (a !== st.ELEMENT || R || R !== o.elementHovered) &&
                  ((w = d ? 1 - w : w), e.dispatch(mr(P, w))),
                {
                  elementHovered: R,
                  clientX: v,
                  clientY: g,
                  pageX: E,
                  pageY: O,
                }
              );
            },
          },
          [FU]: {
            types: Ts,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = rn(),
                s = i / (o - a);
              (s = n ? 1 - s : s), e.dispatch(mr(r, s));
            },
          },
          [PU]: {
            types: Ts,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: u,
                  clientHeight: d,
                } = rn(),
                {
                  basedOn: y,
                  selectedAxis: v,
                  continuousParameterGroupId: g,
                  startsEntering: E,
                  startsExiting: O,
                  addEndOffset: I,
                  addStartOffset: C,
                  addOffsetValue: w = 0,
                  endOffsetValue: P = 0,
                } = r,
                R = v === "X_AXIS";
              if (y === st.VIEWPORT) {
                let M = R ? o / s : a / u;
                return (
                  M !== i.scrollPercent && t.dispatch(mr(g, M)),
                  { scrollPercent: M }
                );
              } else {
                let M = Wy(n, g),
                  k = e.getBoundingClientRect(),
                  F = (C ? w : 0) / 100,
                  z = (I ? P : 0) / 100;
                (F = E ? F : 1 - F), (z = O ? z : 1 - z);
                let K = k.top + Math.min(k.height * F, d),
                  ee = k.top + k.height * z - K,
                  B = Math.min(d + ee, u),
                  m = Math.min(Math.max(0, d - K), B) / B;
                return (
                  m !== i.scrollPercent && t.dispatch(mr(M, m)),
                  { scrollPercent: m }
                );
              }
            },
          },
          [e_]: zy,
          [LU]: zy,
          [Jy]: {
            ...Is,
            handler: Xy((e, t) => {
              t.scrollingDown && We(e);
            }),
          },
          [NU]: {
            ...Is,
            handler: Xy((e, t) => {
              t.scrollingDown || We(e);
            }),
          },
          [t_]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(nn, XU(We)),
          },
          [r_]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(nn, jU(We)),
          },
        });
    });
  var A_ = {};
  ke(A_, {
    observeRequests: () => dV,
    startActionGroup: () => an,
    startEngine: () => Ri,
    stopActionGroup: () => yr,
    stopAllActionGroups: () => I_,
    stopEngine: () => Li,
  });
  function dV(e) {
    Vt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: gV }),
      Vt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: hV }),
      Vt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: mV }),
      Vt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: EV });
  }
  function pV(e) {
    Vt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Li(e),
          y_({ store: e, elementApi: Me }),
          Ri({ store: e, allowEvents: !0 }),
          __();
      },
    });
  }
  function vV(e, t) {
    let r = Vt({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function gV({ rawData: e, defer: t }, r) {
    let n = () => {
      Ri({ store: r, rawData: e, allowEvents: !0 }), __();
    };
    t ? setTimeout(n, 0) : n();
  }
  function __() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function hV(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: d = !0,
      } = e,
      { rawData: y } = e;
    if (n && i && y && s) {
      let v = y.actionLists[n];
      v && (y = tV({ actionList: v, actionItemId: i, rawData: y }));
    }
    if (
      (Ri({ store: t, rawData: y, allowEvents: a, testManual: u }),
      (n && r === Ge.GENERAL_START_ACTION) || Os(r))
    ) {
      yr({ store: t, actionListId: n }),
        T_({ store: t, actionListId: n, eventId: o });
      let v = an({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: s,
        verbose: d,
      });
      d && v && t.dispatch(Er({ actionListId: n, isPlaying: !s }));
    }
  }
  function mV({ actionListId: e }, t) {
    e ? yr({ store: t, actionListId: e }) : I_({ store: t }), Li(t);
  }
  function EV(e, t) {
    Li(t), y_({ store: t, elementApi: Me });
  }
  function Ri({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(rs(t)),
      i.active ||
        (e.dispatch(
          ns({
            hasBoundaryNodes: !!document.querySelector(Ai),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (wV(e), yV(), e.getState().ixSession.hasDefinedMediaQueries && pV(e)),
        e.dispatch(is()),
        _V(e, n));
  }
  function yV() {
    let { documentElement: e } = document;
    e.className.indexOf(l_) === -1 && (e.className += ` ${l_}`);
  }
  function _V(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(vi(n, o)), t ? vV(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Li(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(bV), oV(), e.dispatch(os());
    }
  }
  function bV({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function TV({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: d, ixSession: y } = e.getState(),
      { events: v } = d,
      g = v[n],
      { eventTypeId: E } = g,
      O = {},
      I = {},
      C = [],
      { continuousActionGroups: w } = a,
      { id: P } = a;
    rV(E, i) && (P = nV(t, P));
    let R = y.hasBoundaryNodes && r ? tn(r, Ai) : null;
    w.forEach((M) => {
      let { keyframe: k, actionItems: F } = M;
      F.forEach((z) => {
        let { actionTypeId: K } = z,
          { target: Q } = z.config;
        if (!Q) return;
        let ee = Q.boundaryMode ? R : null,
          B = aV(Q) + As + K;
        if (((I[B] = IV(I[B], k, z)), !O[B])) {
          O[B] = !0;
          let { config: S } = z;
          xi({
            config: S,
            event: g,
            eventTarget: r,
            elementRoot: ee,
            elementApi: Me,
          }).forEach((m) => {
            C.push({ element: m, key: B });
          });
        }
      });
    }),
      C.forEach(({ element: M, key: k }) => {
        let F = I[k],
          z = (0, Et.default)(F, "[0].actionItems[0]", {}),
          { actionTypeId: K } = z,
          Q = Ci(K) ? Ss(K)(M, z) : null,
          ee = xs({ element: M, actionItem: z, elementApi: Me }, Q);
        Cs({
          store: e,
          element: M,
          eventId: n,
          actionListId: o,
          actionItem: z,
          destination: ee,
          continuous: !0,
          parameterId: P,
          actionGroups: F,
          smoothing: s,
          restingValue: u,
          pluginInstance: Q,
        });
      });
  }
  function IV(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function wV(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    b_(e),
      (0, _r.default)(r, (i, o) => {
        let a = u_[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        RV({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && AV(e);
  }
  function AV(e) {
    let t = () => {
      b_(e);
    };
    OV.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(pi(window, [r, t]));
    }),
      t();
  }
  function b_(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(ls({ width: n, mediaQueries: i }));
    }
  }
  function RV({ logic: e, store: t, events: r }) {
    LV(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = xV(r, CV);
    if (!(0, p_.default)(s)) return;
    (0, _r.default)(s, (v, g) => {
      let E = r[g],
        { action: O, id: I, mediaQueries: C = o.mediaQueryKeys } = E,
        { actionListId: w } = O.config;
      sV(C, o.mediaQueryKeys) || t.dispatch(fs()),
        O.actionTypeId === Ge.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(E.config) ? E.config : [E.config]).forEach((R) => {
            let { continuousParameterGroupId: M } = R,
              k = (0, Et.default)(a, `${w}.continuousParameterGroups`, []),
              F = (0, d_.default)(k, ({ id: Q }) => Q === M),
              z = (R.smoothing || 0) / 100,
              K = (R.restingState || 0) / 100;
            F &&
              v.forEach((Q, ee) => {
                let B = I + As + ee;
                TV({
                  store: t,
                  eventStateKey: B,
                  eventTarget: Q,
                  eventId: I,
                  eventConfig: R,
                  actionListId: w,
                  parameterGroup: F,
                  smoothing: z,
                  restingValue: K,
                });
              });
          }),
        (O.actionTypeId === Ge.GENERAL_START_ACTION || Os(O.actionTypeId)) &&
          T_({ store: t, actionListId: w, eventId: I });
    });
    let u = (v) => {
        let { ixSession: g } = t.getState();
        SV(s, (E, O, I) => {
          let C = r[O],
            w = g.eventState[I],
            { action: P, mediaQueries: R = o.mediaQueryKeys } = C;
          if (!Si(R, g.mediaQueryKey)) return;
          let M = (k = {}) => {
            let F = i(
              {
                store: t,
                element: E,
                event: C,
                eventConfig: k,
                nativeEvent: v,
                eventStateKey: I,
              },
              w
            );
            uV(F, w) || t.dispatch(as(I, F));
          };
          P.actionTypeId === Ge.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(C.config) ? C.config : [C.config]).forEach(M)
            : M();
        });
      },
      d = (0, m_.default)(u, fV),
      y = ({ target: v = document, types: g, throttle: E }) => {
        g.split(" ")
          .filter(Boolean)
          .forEach((O) => {
            let I = E ? d : u;
            v.addEventListener(O, I), t.dispatch(pi(v, [O, I]));
          });
      };
    Array.isArray(n) ? n.forEach(y) : typeof n == "string" && y(e);
  }
  function LV(e) {
    if (!lV) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = ps(o);
      t[a] ||
        ((i === Ze.MOUSE_CLICK || i === Ze.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function T_({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      s = a[r],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let d = (0, Et.default)(u, "actionItemGroups[0].actionItems", []),
        y = (0, Et.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!Si(y, i.mediaQueryKey)) return;
      d.forEach((v) => {
        let { config: g, actionTypeId: E } = v,
          O =
            g?.target?.useEventTarget === !0 && g?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : g,
          I = xi({ config: O, event: s, elementApi: Me }),
          C = Ci(E);
        I.forEach((w) => {
          let P = C ? Ss(E)(w, v) : null;
          Cs({
            destination: xs({ element: w, actionItem: v, elementApi: Me }, P),
            immediate: !0,
            store: e,
            element: w,
            eventId: r,
            actionItem: v,
            actionListId: t,
            pluginInstance: P,
          });
        });
      });
    }
  }
  function I_({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, _r.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        Rs(r, e), i && e.dispatch(Er({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function yr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? tn(r, Ai) : null;
    (0, _r.default)(o, (u) => {
      let d = (0, Et.default)(u, "actionItem.config.target.boundaryMode"),
        y = n ? u.eventStateKey === n : !0;
      if (u.actionListId === i && u.eventId === t && y) {
        if (s && d && !vs(s, u.element)) return;
        Rs(u, e),
          u.verbose && e.dispatch(Er({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function an({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: d } = e.getState(),
      { events: y } = u,
      v = y[t] || {},
      { mediaQueries: g = u.mediaQueryKeys } = v,
      E = (0, Et.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: O, useFirstGroupAsInitialState: I } = E;
    if (!O || !O.length) return !1;
    o >= O.length && (0, Et.default)(v, "config.loop") && (o = 0),
      o === 0 && I && o++;
    let w =
        (o === 0 || (o === 1 && I)) && Os(v.action?.actionTypeId)
          ? v.config.delay
          : void 0,
      P = (0, Et.default)(O, [o, "actionItems"], []);
    if (!P.length || !Si(g, d.mediaQueryKey)) return !1;
    let R = d.hasBoundaryNodes && r ? tn(r, Ai) : null,
      M = ZU(P),
      k = !1;
    return (
      P.forEach((F, z) => {
        let { config: K, actionTypeId: Q } = F,
          ee = Ci(Q),
          { target: B } = K;
        if (!B) return;
        let S = B.boundaryMode ? R : null;
        xi({
          config: K,
          event: v,
          eventTarget: r,
          elementRoot: S,
          elementApi: Me,
        }).forEach((q, U) => {
          let H = ee ? Ss(Q)(q, F) : null,
            J = ee ? cV(Q)(q, F) : null;
          k = !0;
          let re = M === z && U === 0,
            V = JU({ element: q, actionItem: F }),
            j = xs({ element: q, actionItem: F, elementApi: Me }, H);
          Cs({
            store: e,
            element: q,
            actionItem: F,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: re,
            computedStyle: V,
            destination: j,
            immediate: a,
            verbose: s,
            pluginInstance: H,
            pluginDuration: J,
            instanceDelay: w,
          });
        });
      }),
      k
    );
  }
  function Cs(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: d,
        eventId: y,
      } = n,
      v = !u,
      g = $U(),
      { ixElements: E, ixSession: O, ixData: I } = t.getState(),
      C = YU(E, i),
      { refState: w } = E[C] || {},
      P = gs(i),
      R = O.reducedMotion && Yo[o.actionTypeId],
      M;
    if (R && u)
      switch (I.events[y]?.eventTypeId) {
        case Ze.MOUSE_MOVE:
        case Ze.MOUSE_MOVE_IN_VIEWPORT:
          M = d;
          break;
        default:
          M = 0.5;
          break;
      }
    let k = eV(i, w, r, o, Me, s);
    if (
      (t.dispatch(
        ss({
          instanceId: g,
          elementId: C,
          origin: k,
          refType: P,
          skipMotion: R,
          skipToValue: M,
          ...n,
        })
      ),
      w_(document.body, "ix2-animation-started", g),
      a)
    ) {
      NV(t, g);
      return;
    }
    Vt({ store: t, select: ({ ixInstances: F }) => F[g], onChange: O_ }),
      v && t.dispatch(gi(g, O.tick));
  }
  function Rs(e, t) {
    w_(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === E_ && iV(o, n, Me), t.dispatch(us(e.id));
  }
  function w_(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function NV(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(gi(t, 0)), e.dispatch(vi(performance.now(), r));
    let { ixInstances: n } = e.getState();
    O_(n[t], e);
  }
  function O_(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: d,
        groupIndex: y,
        eventId: v,
        eventTarget: g,
        eventStateKey: E,
        actionListId: O,
        isCarrier: I,
        styleProp: C,
        verbose: w,
        pluginInstance: P,
      } = e,
      { ixData: R, ixSession: M } = t.getState(),
      { events: k } = R,
      F = k[v] || {},
      { mediaQueries: z = R.mediaQueryKeys } = F;
    if (Si(z, M.mediaQueryKey) && (n || r || i)) {
      if (d || (u === KU && i)) {
        t.dispatch(cs(o, s, d, a));
        let { ixElements: K } = t.getState(),
          { ref: Q, refType: ee, refState: B } = K[o] || {},
          S = B && B[s];
        (ee === E_ || Ci(s)) && QU(Q, B, S, v, a, C, Me, u, P);
      }
      if (i) {
        if (I) {
          let K = an({
            store: t,
            eventId: v,
            eventTarget: g,
            eventStateKey: E,
            actionListId: O,
            groupIndex: y + 1,
            verbose: w,
          });
          w && !K && t.dispatch(Er({ actionListId: O, isPlaying: !1 }));
        }
        Rs(e, t);
      }
    }
  }
  var d_,
    Et,
    p_,
    v_,
    g_,
    h_,
    _r,
    m_,
    Oi,
    zU,
    Os,
    As,
    Ai,
    E_,
    KU,
    l_,
    xi,
    YU,
    xs,
    Vt,
    $U,
    QU,
    y_,
    ZU,
    JU,
    eV,
    tV,
    rV,
    nV,
    Si,
    iV,
    oV,
    aV,
    sV,
    uV,
    Ci,
    Ss,
    cV,
    f_,
    lV,
    fV,
    OV,
    xV,
    SV,
    CV,
    ws = me(() => {
      "use strict";
      (d_ = le(wa())),
        (Et = le(Yn())),
        (p_ = le(Gm())),
        (v_ = le(fE())),
        (g_ = le(pE())),
        (h_ = le(gE())),
        (_r = le(bE())),
        (m_ = le(SE()));
      Ue();
      Oi = le(Ut());
      hi();
      qE();
      c_();
      (zU = Object.keys(xn)),
        (Os = (e) => zU.includes(e)),
        ({
          COLON_DELIMITER: As,
          BOUNDARY_SELECTOR: Ai,
          HTML_ELEMENT: E_,
          RENDER_GENERAL: KU,
          W_MOD_IX: l_,
        } = Ce),
        ({
          getAffectedElements: xi,
          getElementId: YU,
          getDestinationValues: xs,
          observeStore: Vt,
          getInstanceId: $U,
          renderHTMLElement: QU,
          clearAllStyles: y_,
          getMaxDurationItemIndex: ZU,
          getComputedStyle: JU,
          getInstanceOrigin: eV,
          reduceListToGroup: tV,
          shouldNamespaceEventParameter: rV,
          getNamespacedParameterId: nV,
          shouldAllowMediaQuery: Si,
          cleanupHTMLElement: iV,
          clearObjectCache: oV,
          stringifyTarget: aV,
          mediaQueriesEqual: sV,
          shallowEqual: uV,
        } = Oi.IX2VanillaUtils),
        ({
          isPluginType: Ci,
          createPluginInstance: Ss,
          getPluginDuration: cV,
        } = Oi.IX2VanillaPlugins),
        (f_ = navigator.userAgent),
        (lV = f_.match(/iPad/i) || f_.match(/iPhone/)),
        (fV = 12);
      OV = ["resize", "orientationchange"];
      (xV = (e, t) => (0, v_.default)((0, h_.default)(e, t), g_.default)),
        (SV = (e, t) => {
          (0, _r.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + As + o;
              t(i, n, a);
            });
          });
        }),
        (CV = (e) => {
          let t = { target: e.target, targets: e.targets };
          return xi({ config: t, elementApi: Me });
        });
    });
  var S_ = c((yt) => {
    "use strict";
    var PV = vn().default,
      qV = cu().default;
    Object.defineProperty(yt, "__esModule", { value: !0 });
    yt.actions = void 0;
    yt.destroy = x_;
    yt.init = GV;
    yt.setEnv = kV;
    yt.store = void 0;
    Kl();
    var MV = jo(),
      FV = qV((_m(), nt(ym))),
      Ls = (ws(), nt(A_)),
      DV = PV((hi(), nt(RE)));
    yt.actions = DV;
    var Ns = (yt.store = (0, MV.createStore)(FV.default));
    function kV(e) {
      e() && (0, Ls.observeRequests)(Ns);
    }
    function GV(e) {
      x_(), (0, Ls.startEngine)({ store: Ns, rawData: e, allowEvents: !0 });
    }
    function x_() {
      (0, Ls.stopEngine)(Ns);
    }
  });
  var N_ = c((uz, L_) => {
    "use strict";
    var C_ = Ne(),
      R_ = S_();
    R_.setEnv(C_.env);
    C_.define(
      "ix2",
      (L_.exports = function () {
        return R_;
      })
    );
  });
  var q_ = c((cz, P_) => {
    "use strict";
    var br = Ne();
    br.define(
      "links",
      (P_.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = br.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          d = /index\.(html|php)$/,
          y = /\/$/,
          v,
          g;
        r.ready = r.design = r.preview = E;
        function E() {
          (i = o && br.env("design")),
            (g = br.env("slug") || a.pathname || ""),
            br.scroll.off(I),
            (v = []);
          for (var w = document.links, P = 0; P < w.length; ++P) O(w[P]);
          v.length && (br.scroll.on(I), I());
        }
        function O(w) {
          if (!w.getAttribute("hreflang")) {
            var P =
              (i && w.getAttribute("href-disabled")) || w.getAttribute("href");
            if (((s.href = P), !(P.indexOf(":") >= 0))) {
              var R = e(w);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var M = e(s.hash);
                M.length && v.push({ link: R, sec: M, active: !1 });
                return;
              }
              if (!(P === "#" || P === "")) {
                var k =
                  s.href === a.href || P === g || (d.test(P) && y.test(g));
                C(R, u, k);
              }
            }
          }
        }
        function I() {
          var w = n.scrollTop(),
            P = n.height();
          t.each(v, function (R) {
            if (!R.link.attr("hreflang")) {
              var M = R.link,
                k = R.sec,
                F = k.offset().top,
                z = k.outerHeight(),
                K = P * 0.5,
                Q = k.is(":visible") && F + z - K >= w && F + K <= w + P;
              R.active !== Q && ((R.active = Q), C(M, u, Q));
            }
          });
        }
        function C(w, P, R) {
          var M = w.hasClass(P);
          (R && M) || (!R && !M) || (R ? w.addClass(P) : w.removeClass(P));
        }
        return r;
      })
    );
  });
  var F_ = c((lz, M_) => {
    "use strict";
    var Ni = Ne();
    Ni.define(
      "scroll",
      (M_.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = O() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (S) {
              window.setTimeout(S, 15);
            },
          u = Ni.env("editor") ? ".w-editor-body" : "body",
          d =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          y = 'a[href="#"]',
          v = 'a[href*="#"]:not(.w-tab-link):not(' + y + ")",
          g = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          E = document.createElement("style");
        E.appendChild(document.createTextNode(g));
        function O() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var I = /^#[a-zA-Z0-9][\w:.-]*$/;
        function C(S) {
          return I.test(S.hash) && S.host + S.pathname === r.host + r.pathname;
        }
        let w =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function P() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            w.matches
          );
        }
        function R(S, m) {
          var q;
          switch (m) {
            case "add":
              (q = S.attr("tabindex")),
                q
                  ? S.attr("data-wf-tabindex-swap", q)
                  : S.attr("tabindex", "-1");
              break;
            case "remove":
              (q = S.attr("data-wf-tabindex-swap")),
                q
                  ? (S.attr("tabindex", q),
                    S.removeAttr("data-wf-tabindex-swap"))
                  : S.removeAttr("tabindex");
              break;
          }
          S.toggleClass("wf-force-outline-none", m === "add");
        }
        function M(S) {
          var m = S.currentTarget;
          if (
            !(
              Ni.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(m.className))
            )
          ) {
            var q = C(m) ? m.hash : "";
            if (q !== "") {
              var U = e(q);
              U.length &&
                (S && (S.preventDefault(), S.stopPropagation()),
                k(q, S),
                window.setTimeout(
                  function () {
                    F(U, function () {
                      R(U, "add"),
                        U.get(0).focus({ preventScroll: !0 }),
                        R(U, "remove");
                    });
                  },
                  S ? 0 : 300
                ));
            }
          }
        }
        function k(S) {
          if (
            r.hash !== S &&
            n &&
            n.pushState &&
            !(Ni.env.chrome && r.protocol === "file:")
          ) {
            var m = n.state && n.state.hash;
            m !== S && n.pushState({ hash: S }, "", S);
          }
        }
        function F(S, m) {
          var q = i.scrollTop(),
            U = z(S);
          if (q !== U) {
            var H = K(S, q, U),
              J = Date.now(),
              re = function () {
                var V = Date.now() - J;
                window.scroll(0, Q(q, U, V, H)),
                  V <= H ? s(re) : typeof m == "function" && m();
              };
            s(re);
          }
        }
        function z(S) {
          var m = e(d),
            q = m.css("position") === "fixed" ? m.outerHeight() : 0,
            U = S.offset().top - q;
          if (S.data("scroll") === "mid") {
            var H = i.height() - q,
              J = S.outerHeight();
            J < H && (U -= Math.round((H - J) / 2));
          }
          return U;
        }
        function K(S, m, q) {
          if (P()) return 0;
          var U = 1;
          return (
            a.add(S).each(function (H, J) {
              var re = parseFloat(J.getAttribute("data-scroll-time"));
              !isNaN(re) && re >= 0 && (U = re);
            }),
            (472.143 * Math.log(Math.abs(m - q) + 125) - 2e3) * U
          );
        }
        function Q(S, m, q, U) {
          return q > U ? m : S + (m - S) * ee(q / U);
        }
        function ee(S) {
          return S < 0.5
            ? 4 * S * S * S
            : (S - 1) * (2 * S - 2) * (2 * S - 2) + 1;
        }
        function B() {
          var { WF_CLICK_EMPTY: S, WF_CLICK_SCROLL: m } = t;
          o.on(m, v, M),
            o.on(S, y, function (q) {
              q.preventDefault();
            }),
            document.head.insertBefore(E, document.head.firstChild);
        }
        return { ready: B };
      })
    );
  });
  var k_ = c((fz, D_) => {
    "use strict";
    var UV = Ne();
    UV.define(
      "touch",
      (D_.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            d,
            y;
          o.addEventListener("touchstart", v, !1),
            o.addEventListener("touchmove", g, !1),
            o.addEventListener("touchend", E, !1),
            o.addEventListener("touchcancel", O, !1),
            o.addEventListener("mousedown", v, !1),
            o.addEventListener("mousemove", g, !1),
            o.addEventListener("mouseup", E, !1),
            o.addEventListener("mouseout", O, !1);
          function v(C) {
            var w = C.touches;
            (w && w.length > 1) ||
              ((a = !0),
              w ? ((s = !0), (d = w[0].clientX)) : (d = C.clientX),
              (y = d));
          }
          function g(C) {
            if (a) {
              if (s && C.type === "mousemove") {
                C.preventDefault(), C.stopPropagation();
                return;
              }
              var w = C.touches,
                P = w ? w[0].clientX : C.clientX,
                R = P - y;
              (y = P),
                Math.abs(R) > u &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", C, { direction: R > 0 ? "right" : "left" }), O());
            }
          }
          function E(C) {
            if (a && ((a = !1), s && C.type === "mouseup")) {
              C.preventDefault(), C.stopPropagation(), (s = !1);
              return;
            }
          }
          function O() {
            a = !1;
          }
          function I() {
            o.removeEventListener("touchstart", v, !1),
              o.removeEventListener("touchmove", g, !1),
              o.removeEventListener("touchend", E, !1),
              o.removeEventListener("touchcancel", O, !1),
              o.removeEventListener("mousedown", v, !1),
              o.removeEventListener("mousemove", g, !1),
              o.removeEventListener("mouseup", E, !1),
              o.removeEventListener("mouseout", O, !1),
              (o = null);
          }
          this.destroy = I;
        }
        function i(o, a, s) {
          var u = e.Event(o, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var V_ = c((dz, U_) => {
    "use strict";
    var Wt = Ne(),
      VV = Xt(),
      tt = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      G_ = !0,
      WV = /^#[a-zA-Z0-9\-_]+$/;
    Wt.define(
      "dropdown",
      (U_.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          i = Wt.env(),
          o = !1,
          a,
          s = Wt.env.touch,
          u = ".w-dropdown",
          d = "w--open",
          y = VV.triggers,
          v = 900,
          g = "focusout" + u,
          E = "keydown" + u,
          O = "mouseenter" + u,
          I = "mousemove" + u,
          C = "mouseleave" + u,
          w = (s ? "click" : "mouseup") + u,
          P = "w-close" + u,
          R = "setting" + u,
          M = e(document),
          k;
        (n.ready = F),
          (n.design = function () {
            o && m(), (o = !1), F();
          }),
          (n.preview = function () {
            (o = !0), F();
          });
        function F() {
          (a = i && Wt.env("design")), (k = M.find(u)), k.each(z);
        }
        function z(l, G) {
          var W = e(G),
            L = e.data(G, u);
          L ||
            (L = e.data(G, u, {
              open: !1,
              el: W,
              config: {},
              selectedIdx: -1,
            })),
            (L.toggle = L.el.children(".w-dropdown-toggle")),
            (L.list = L.el.children(".w-dropdown-list")),
            (L.links = L.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (L.complete = H(L)),
            (L.mouseLeave = re(L)),
            (L.mouseUpOutside = U(L)),
            (L.mouseMoveOutside = V(L)),
            K(L);
          var ie = L.toggle.attr("id"),
            fe = L.list.attr("id");
          ie || (ie = "w-dropdown-toggle-" + l),
            fe || (fe = "w-dropdown-list-" + l),
            L.toggle.attr("id", ie),
            L.toggle.attr("aria-controls", fe),
            L.toggle.attr("aria-haspopup", "menu"),
            L.toggle.attr("aria-expanded", "false"),
            L.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            L.toggle.prop("tagName") !== "BUTTON" &&
              (L.toggle.attr("role", "button"),
              L.toggle.attr("tabindex") || L.toggle.attr("tabindex", "0")),
            L.list.attr("id", fe),
            L.list.attr("aria-labelledby", ie),
            L.links.each(function (h, X) {
              X.hasAttribute("tabindex") || X.setAttribute("tabindex", "0"),
                WV.test(X.hash) && X.addEventListener("click", S.bind(null, L));
            }),
            L.el.off(u),
            L.toggle.off(u),
            L.nav && L.nav.off(u);
          var oe = ee(L, G_);
          a && L.el.on(R, Q(L)),
            a ||
              (i && ((L.hovering = !1), S(L)),
              L.config.hover && L.toggle.on(O, J(L)),
              L.el.on(P, oe),
              L.el.on(E, j(L)),
              L.el.on(g, b(L)),
              L.toggle.on(w, oe),
              L.toggle.on(E, _(L)),
              (L.nav = L.el.closest(".w-nav")),
              L.nav.on(P, oe));
        }
        function K(l) {
          var G = Number(l.el.css("z-index"));
          (l.manageZ = G === v || G === v + 1),
            (l.config = {
              hover: l.el.attr("data-hover") === "true" && !s,
              delay: l.el.attr("data-delay"),
            });
        }
        function Q(l) {
          return function (G, W) {
            (W = W || {}),
              K(l),
              W.open === !0 && B(l, !0),
              W.open === !1 && S(l, { immediate: !0 });
          };
        }
        function ee(l, G) {
          return r(function (W) {
            if (l.open || (W && W.type === "w-close"))
              return S(l, { forceClose: G });
            B(l);
          });
        }
        function B(l) {
          if (!l.open) {
            q(l),
              (l.open = !0),
              l.list.addClass(d),
              l.toggle.addClass(d),
              l.toggle.attr("aria-expanded", "true"),
              y.intro(0, l.el[0]),
              Wt.redraw.up(),
              l.manageZ && l.el.css("z-index", v + 1);
            var G = Wt.env("editor");
            a || M.on(w, l.mouseUpOutside),
              l.hovering && !G && l.el.on(C, l.mouseLeave),
              l.hovering && G && M.on(I, l.mouseMoveOutside),
              window.clearTimeout(l.delayId);
          }
        }
        function S(l, { immediate: G, forceClose: W } = {}) {
          if (l.open && !(l.config.hover && l.hovering && !W)) {
            l.toggle.attr("aria-expanded", "false"), (l.open = !1);
            var L = l.config;
            if (
              (y.outro(0, l.el[0]),
              M.off(w, l.mouseUpOutside),
              M.off(I, l.mouseMoveOutside),
              l.el.off(C, l.mouseLeave),
              window.clearTimeout(l.delayId),
              !L.delay || G)
            )
              return l.complete();
            l.delayId = window.setTimeout(l.complete, L.delay);
          }
        }
        function m() {
          M.find(u).each(function (l, G) {
            e(G).triggerHandler(P);
          });
        }
        function q(l) {
          var G = l.el[0];
          k.each(function (W, L) {
            var ie = e(L);
            ie.is(G) || ie.has(G).length || ie.triggerHandler(P);
          });
        }
        function U(l) {
          return (
            l.mouseUpOutside && M.off(w, l.mouseUpOutside),
            r(function (G) {
              if (l.open) {
                var W = e(G.target);
                if (!W.closest(".w-dropdown-toggle").length) {
                  var L = e.inArray(l.el[0], W.parents(u)) === -1,
                    ie = Wt.env("editor");
                  if (L) {
                    if (ie) {
                      var fe =
                          W.parents().length === 1 &&
                          W.parents("svg").length === 1,
                        oe = W.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (fe || oe) return;
                    }
                    S(l);
                  }
                }
              }
            })
          );
        }
        function H(l) {
          return function () {
            l.list.removeClass(d),
              l.toggle.removeClass(d),
              l.manageZ && l.el.css("z-index", "");
          };
        }
        function J(l) {
          return function () {
            (l.hovering = !0), B(l);
          };
        }
        function re(l) {
          return function () {
            (l.hovering = !1), l.links.is(":focus") || S(l);
          };
        }
        function V(l) {
          return r(function (G) {
            if (l.open) {
              var W = e(G.target),
                L = e.inArray(l.el[0], W.parents(u)) === -1;
              if (L) {
                var ie = W.parents(".w-editor-bem-EditorHoverControls").length,
                  fe = W.parents(".w-editor-bem-RTToolbar").length,
                  oe = e(".w-editor-bem-EditorOverlay"),
                  h =
                    oe.find(".w-editor-edit-outline").length ||
                    oe.find(".w-editor-bem-RTToolbar").length;
                if (ie || fe || h) return;
                (l.hovering = !1), S(l);
              }
            }
          });
        }
        function j(l) {
          return function (G) {
            if (!(a || !l.open))
              switch (
                ((l.selectedIdx = l.links.index(document.activeElement)),
                G.keyCode)
              ) {
                case tt.HOME:
                  return l.open
                    ? ((l.selectedIdx = 0), p(l), G.preventDefault())
                    : void 0;
                case tt.END:
                  return l.open
                    ? ((l.selectedIdx = l.links.length - 1),
                      p(l),
                      G.preventDefault())
                    : void 0;
                case tt.ESCAPE:
                  return S(l), l.toggle.focus(), G.stopPropagation();
                case tt.ARROW_RIGHT:
                case tt.ARROW_DOWN:
                  return (
                    (l.selectedIdx = Math.min(
                      l.links.length - 1,
                      l.selectedIdx + 1
                    )),
                    p(l),
                    G.preventDefault()
                  );
                case tt.ARROW_LEFT:
                case tt.ARROW_UP:
                  return (
                    (l.selectedIdx = Math.max(-1, l.selectedIdx - 1)),
                    p(l),
                    G.preventDefault()
                  );
              }
          };
        }
        function p(l) {
          l.links[l.selectedIdx] && l.links[l.selectedIdx].focus();
        }
        function _(l) {
          var G = ee(l, G_);
          return function (W) {
            if (!a) {
              if (!l.open)
                switch (W.keyCode) {
                  case tt.ARROW_UP:
                  case tt.ARROW_DOWN:
                    return W.stopPropagation();
                }
              switch (W.keyCode) {
                case tt.SPACE:
                case tt.ENTER:
                  return G(), W.stopPropagation(), W.preventDefault();
              }
            }
          };
        }
        function b(l) {
          return r(function (G) {
            var { relatedTarget: W, target: L } = G,
              ie = l.el[0],
              fe = ie.contains(W) || ie.contains(L);
            return fe || S(l), G.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var W_ = c((Ps) => {
    "use strict";
    Object.defineProperty(Ps, "__esModule", { value: !0 });
    Ps.default = BV;
    function BV(e, t, r, n, i, o, a, s, u, d, y, v, g) {
      return function (E) {
        e(E);
        var O = E.form,
          I = {
            name: O.attr("data-name") || O.attr("name") || "Untitled Form",
            pageId: O.attr("data-wf-page-id") || "",
            elementId: O.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              O.html()
            ),
            trackingCookies: n(),
          };
        let C = O.attr("data-wf-flow");
        C && (I.wfFlow = C), i(E);
        var w = o(O, I.fields);
        if (w) return a(w);
        if (((I.fileUploads = s(O)), u(E), !d)) {
          y(E);
          return;
        }
        v.ajax({
          url: g,
          type: "POST",
          data: I,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (P) {
            P && P.code === 200 && (E.success = !0), y(E);
          })
          .fail(function () {
            y(E);
          });
      };
    }
  });
  var H_ = c((vz, B_) => {
    "use strict";
    var Pi = Ne();
    Pi.define(
      "forms",
      (B_.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          u,
          d = /e(-)?mail/i,
          y = /^\S+@\S+$/,
          v = window.alert,
          g = Pi.env(),
          E,
          O,
          I,
          C = /list-manage[1-9]?.com/i,
          w = t.debounce(function () {
            v(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              P(), !g && !E && M();
            };
        function P() {
          (u = e("html").attr("data-wf-site")),
            (O = "https://webflow.com/api/v1/form/" + u),
            a &&
              O.indexOf("https://webflow.com") >= 0 &&
              (O = O.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (I = `${O}/signFile`),
            (i = e(s + " form")),
            i.length && i.each(R);
        }
        function R(V, j) {
          var p = e(j),
            _ = e.data(j, s);
          _ || (_ = e.data(j, s, { form: p })), k(_);
          var b = p.closest("div.w-form");
          (_.done = b.find("> .w-form-done")),
            (_.fail = b.find("> .w-form-fail")),
            (_.fileUploads = b.find(".w-file-upload")),
            _.fileUploads.each(function (W) {
              H(W, _);
            });
          var l =
            _.form.attr("aria-label") || _.form.attr("data-name") || "Form";
          _.done.attr("aria-label") || _.form.attr("aria-label", l),
            _.done.attr("tabindex", "-1"),
            _.done.attr("role", "region"),
            _.done.attr("aria-label") ||
              _.done.attr("aria-label", l + " success"),
            _.fail.attr("tabindex", "-1"),
            _.fail.attr("role", "region"),
            _.fail.attr("aria-label") ||
              _.fail.attr("aria-label", l + " failure");
          var G = (_.action = p.attr("action"));
          if (
            ((_.handler = null),
            (_.redirect = p.attr("data-redirect")),
            C.test(G))
          ) {
            _.handler = m;
            return;
          }
          if (!G) {
            if (u) {
              _.handler = (() => {
                let W = W_().default;
                return W(k, o, Pi, ee, U, z, v, K, F, u, q, e, O);
              })();
              return;
            }
            w();
          }
        }
        function M() {
          (E = !0),
            n.on("submit", s + " form", function (W) {
              var L = e.data(this, s);
              L.handler && ((L.evt = W), L.handler(L));
            });
          let V = ".w-checkbox-input",
            j = ".w-radio-input",
            p = "w--redirected-checked",
            _ = "w--redirected-focus",
            b = "w--redirected-focus-visible",
            l = ":focus-visible, [data-wf-focus-visible]",
            G = [
              ["checkbox", V],
              ["radio", j],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + V + ")",
            (W) => {
              e(W.target).siblings(V).toggleClass(p);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', (W) => {
              e(`input[name="${W.target.name}"]:not(${V})`).map((ie, fe) =>
                e(fe).siblings(j).removeClass(p)
              );
              let L = e(W.target);
              L.hasClass("w-radio-input") || L.siblings(j).addClass(p);
            }),
            G.forEach(([W, L]) => {
              n.on(
                "focus",
                s + ` form input[type="${W}"]:not(` + L + ")",
                (ie) => {
                  e(ie.target).siblings(L).addClass(_),
                    e(ie.target).filter(l).siblings(L).addClass(b);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${W}"]:not(` + L + ")",
                  (ie) => {
                    e(ie.target).siblings(L).removeClass(`${_} ${b}`);
                  }
                );
            });
        }
        function k(V) {
          var j = (V.btn = V.form.find(':input[type="submit"]'));
          (V.wait = V.btn.attr("data-wait") || null),
            (V.success = !1),
            j.prop("disabled", !1),
            V.label && j.val(V.label);
        }
        function F(V) {
          var j = V.btn,
            p = V.wait;
          j.prop("disabled", !0), p && ((V.label = j.val()), j.val(p));
        }
        function z(V, j) {
          var p = null;
          return (
            (j = j || {}),
            V.find(':input:not([type="submit"]):not([type="file"])').each(
              function (_, b) {
                var l = e(b),
                  G = l.attr("type"),
                  W =
                    l.attr("data-name") || l.attr("name") || "Field " + (_ + 1);
                W = encodeURIComponent(W);
                var L = l.val();
                if (G === "checkbox") L = l.is(":checked");
                else if (G === "radio") {
                  if (j[W] === null || typeof j[W] == "string") return;
                  L =
                    V.find(
                      'input[name="' + l.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof L == "string" && (L = e.trim(L)),
                  (j[W] = L),
                  (p = p || B(l, G, W, L));
              }
            ),
            p
          );
        }
        function K(V) {
          var j = {};
          return (
            V.find(':input[type="file"]').each(function (p, _) {
              var b = e(_),
                l = b.attr("data-name") || b.attr("name") || "File " + (p + 1),
                G = b.attr("data-value");
              typeof G == "string" && (G = e.trim(G)), (j[l] = G);
            }),
            j
          );
        }
        let Q = { _mkto_trk: "marketo" };
        function ee() {
          return document.cookie.split("; ").reduce(function (j, p) {
            let _ = p.split("="),
              b = _[0];
            if (b in Q) {
              let l = Q[b],
                G = _.slice(1).join("=");
              j[l] = G;
            }
            return j;
          }, {});
        }
        function B(V, j, p, _) {
          var b = null;
          return (
            j === "password"
              ? (b = "Passwords cannot be submitted.")
              : V.attr("required")
              ? _
                ? d.test(V.attr("type")) &&
                  (y.test(_) ||
                    (b = "Please enter a valid email address for: " + p))
                : (b = "Please fill out the required field: " + p)
              : p === "g-recaptcha-response" &&
                !_ &&
                (b = "Please confirm you\u2019re not a robot."),
            b
          );
        }
        function S(V) {
          U(V), q(V);
        }
        function m(V) {
          k(V);
          var j = V.form,
            p = {};
          if (/^https/.test(o.href) && !/^https/.test(V.action)) {
            j.attr("method", "post");
            return;
          }
          U(V);
          var _ = z(j, p);
          if (_) return v(_);
          F(V);
          var b;
          t.each(p, function (L, ie) {
            d.test(ie) && (p.EMAIL = L),
              /^((full[ _-]?)?name)$/i.test(ie) && (b = L),
              /^(first[ _-]?name)$/i.test(ie) && (p.FNAME = L),
              /^(last[ _-]?name)$/i.test(ie) && (p.LNAME = L);
          }),
            b &&
              !p.FNAME &&
              ((b = b.split(" ")),
              (p.FNAME = b[0]),
              (p.LNAME = p.LNAME || b[1]));
          var l = V.action.replace("/post?", "/post-json?") + "&c=?",
            G = l.indexOf("u=") + 2;
          G = l.substring(G, l.indexOf("&", G));
          var W = l.indexOf("id=") + 3;
          (W = l.substring(W, l.indexOf("&", W))),
            (p["b_" + G + "_" + W] = ""),
            e
              .ajax({ url: l, data: p, dataType: "jsonp" })
              .done(function (L) {
                (V.success = L.result === "success" || /already/.test(L.msg)),
                  V.success || console.info("MailChimp error: " + L.msg),
                  q(V);
              })
              .fail(function () {
                q(V);
              });
        }
        function q(V) {
          var j = V.form,
            p = V.redirect,
            _ = V.success;
          if (_ && p) {
            Pi.location(p);
            return;
          }
          V.done.toggle(_),
            V.fail.toggle(!_),
            _ ? V.done.focus() : V.fail.focus(),
            j.toggle(!_),
            k(V);
        }
        function U(V) {
          V.evt && V.evt.preventDefault(), (V.evt = null);
        }
        function H(V, j) {
          if (!j.fileUploads || !j.fileUploads[V]) return;
          var p,
            _ = e(j.fileUploads[V]),
            b = _.find("> .w-file-upload-default"),
            l = _.find("> .w-file-upload-uploading"),
            G = _.find("> .w-file-upload-success"),
            W = _.find("> .w-file-upload-error"),
            L = b.find(".w-file-upload-input"),
            ie = b.find(".w-file-upload-label"),
            fe = ie.children(),
            oe = W.find(".w-file-upload-error-msg"),
            h = G.find(".w-file-upload-file"),
            X = G.find(".w-file-remove-link"),
            Z = h.find(".w-file-upload-file-name"),
            Y = oe.attr("data-w-size-error"),
            de = oe.attr("data-w-type-error"),
            Fe = oe.attr("data-w-generic-error");
          if (
            (g ||
              ie.on("click keydown", function (A) {
                (A.type === "keydown" && A.which !== 13 && A.which !== 32) ||
                  (A.preventDefault(), L.click());
              }),
            ie.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            X.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            g)
          )
            L.on("click", function (A) {
              A.preventDefault();
            }),
              ie.on("click", function (A) {
                A.preventDefault();
              }),
              fe.on("click", function (A) {
                A.preventDefault();
              });
          else {
            X.on("click keydown", function (A) {
              if (A.type === "keydown") {
                if (A.which !== 13 && A.which !== 32) return;
                A.preventDefault();
              }
              L.removeAttr("data-value"),
                L.val(""),
                Z.html(""),
                b.toggle(!0),
                G.toggle(!1),
                ie.focus();
            }),
              L.on("change", function (A) {
                (p = A.target && A.target.files && A.target.files[0]),
                  p &&
                    (b.toggle(!1),
                    W.toggle(!1),
                    l.toggle(!0),
                    l.focus(),
                    Z.text(p.name),
                    N() || F(j),
                    (j.fileUploads[V].uploading = !0),
                    J(p, T));
              });
            var He = ie.outerHeight();
            L.height(He), L.width(1);
          }
          function f(A) {
            var D = A.responseJSON && A.responseJSON.msg,
              te = Fe;
            typeof D == "string" && D.indexOf("InvalidFileTypeError") === 0
              ? (te = de)
              : typeof D == "string" &&
                D.indexOf("MaxFileSizeError") === 0 &&
                (te = Y),
              oe.text(te),
              L.removeAttr("data-value"),
              L.val(""),
              l.toggle(!1),
              b.toggle(!0),
              W.toggle(!0),
              W.focus(),
              (j.fileUploads[V].uploading = !1),
              N() || k(j);
          }
          function T(A, D) {
            if (A) return f(A);
            var te = D.fileName,
              ae = D.postData,
              ge = D.fileId,
              $ = D.s3Url;
            L.attr("data-value", ge), re($, ae, p, te, x);
          }
          function x(A) {
            if (A) return f(A);
            l.toggle(!1),
              G.css("display", "inline-block"),
              G.focus(),
              (j.fileUploads[V].uploading = !1),
              N() || k(j);
          }
          function N() {
            var A = (j.fileUploads && j.fileUploads.toArray()) || [];
            return A.some(function (D) {
              return D.uploading;
            });
          }
        }
        function J(V, j) {
          var p = new URLSearchParams({ name: V.name, size: V.size });
          e.ajax({ type: "GET", url: `${I}?${p}`, crossDomain: !0 })
            .done(function (_) {
              j(null, _);
            })
            .fail(function (_) {
              j(_);
            });
        }
        function re(V, j, p, _, b) {
          var l = new FormData();
          for (var G in j) l.append(G, j[G]);
          l.append("file", p, _),
            e
              .ajax({
                type: "POST",
                url: V,
                data: l,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                b(null);
              })
              .fail(function (W) {
                b(W);
              });
        }
        return r;
      })
    );
  });
  var j_ = c((gz, X_) => {
    "use strict";
    var St = Ne(),
      HV = Xt(),
      Se = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    St.define(
      "navbar",
      (X_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          s,
          u,
          d,
          y,
          v = St.env(),
          g = '<div class="w-nav-overlay" data-wf-ignore />',
          E = ".w-nav",
          O = "w--open",
          I = "w--nav-dropdown-open",
          C = "w--nav-dropdown-toggle-open",
          w = "w--nav-dropdown-list-open",
          P = "w--nav-link-open",
          R = HV.triggers,
          M = e();
        (r.ready = r.design = r.preview = k),
          (r.destroy = function () {
            (M = e()), F(), u && u.length && u.each(ee);
          });
        function k() {
          (d = v && St.env("design")),
            (y = St.env("editor")),
            (s = e(document.body)),
            (u = o.find(E)),
            u.length && (u.each(Q), F(), z());
        }
        function F() {
          St.resize.off(K);
        }
        function z() {
          St.resize.on(K);
        }
        function K() {
          u.each(b);
        }
        function Q(h, X) {
          var Z = e(X),
            Y = e.data(X, E);
          Y ||
            (Y = e.data(X, E, {
              open: !1,
              el: Z,
              config: {},
              selectedIdx: -1,
            })),
            (Y.menu = Z.find(".w-nav-menu")),
            (Y.links = Y.menu.find(".w-nav-link")),
            (Y.dropdowns = Y.menu.find(".w-dropdown")),
            (Y.dropdownToggle = Y.menu.find(".w-dropdown-toggle")),
            (Y.dropdownList = Y.menu.find(".w-dropdown-list")),
            (Y.button = Z.find(".w-nav-button")),
            (Y.container = Z.find(".w-container")),
            (Y.overlayContainerId = "w-nav-overlay-" + h),
            (Y.outside = p(Y));
          var de = Z.find(".w-nav-brand");
          de &&
            de.attr("href") === "/" &&
            de.attr("aria-label") == null &&
            de.attr("aria-label", "home"),
            Y.button.attr("style", "-webkit-user-select: text;"),
            Y.button.attr("aria-label") == null &&
              Y.button.attr("aria-label", "menu"),
            Y.button.attr("role", "button"),
            Y.button.attr("tabindex", "0"),
            Y.button.attr("aria-controls", Y.overlayContainerId),
            Y.button.attr("aria-haspopup", "menu"),
            Y.button.attr("aria-expanded", "false"),
            Y.el.off(E),
            Y.button.off(E),
            Y.menu.off(E),
            m(Y),
            d
              ? (B(Y), Y.el.on("setting" + E, q(Y)))
              : (S(Y),
                Y.button.on("click" + E, V(Y)),
                Y.menu.on("click" + E, "a", j(Y)),
                Y.button.on("keydown" + E, U(Y)),
                Y.el.on("keydown" + E, H(Y))),
            b(h, X);
        }
        function ee(h, X) {
          var Z = e.data(X, E);
          Z && (B(Z), e.removeData(X, E));
        }
        function B(h) {
          h.overlay && (oe(h, !0), h.overlay.remove(), (h.overlay = null));
        }
        function S(h) {
          h.overlay ||
            ((h.overlay = e(g).appendTo(h.el)),
            h.overlay.attr("id", h.overlayContainerId),
            (h.parent = h.menu.parent()),
            oe(h, !0));
        }
        function m(h) {
          var X = {},
            Z = h.config || {},
            Y = (X.animation = h.el.attr("data-animation") || "default");
          (X.animOver = /^over/.test(Y)),
            (X.animDirect = /left$/.test(Y) ? -1 : 1),
            Z.animation !== Y && h.open && t.defer(re, h),
            (X.easing = h.el.attr("data-easing") || "ease"),
            (X.easing2 = h.el.attr("data-easing2") || "ease");
          var de = h.el.attr("data-duration");
          (X.duration = de != null ? Number(de) : 400),
            (X.docHeight = h.el.attr("data-doc-height")),
            (h.config = X);
        }
        function q(h) {
          return function (X, Z) {
            Z = Z || {};
            var Y = i.width();
            m(h),
              Z.open === !0 && ie(h, !0),
              Z.open === !1 && oe(h, !0),
              h.open &&
                t.defer(function () {
                  Y !== i.width() && re(h);
                });
          };
        }
        function U(h) {
          return function (X) {
            switch (X.keyCode) {
              case Se.SPACE:
              case Se.ENTER:
                return V(h)(), X.preventDefault(), X.stopPropagation();
              case Se.ESCAPE:
                return oe(h), X.preventDefault(), X.stopPropagation();
              case Se.ARROW_RIGHT:
              case Se.ARROW_DOWN:
              case Se.HOME:
              case Se.END:
                return h.open
                  ? (X.keyCode === Se.END
                      ? (h.selectedIdx = h.links.length - 1)
                      : (h.selectedIdx = 0),
                    J(h),
                    X.preventDefault(),
                    X.stopPropagation())
                  : (X.preventDefault(), X.stopPropagation());
            }
          };
        }
        function H(h) {
          return function (X) {
            if (h.open)
              switch (
                ((h.selectedIdx = h.links.index(document.activeElement)),
                X.keyCode)
              ) {
                case Se.HOME:
                case Se.END:
                  return (
                    X.keyCode === Se.END
                      ? (h.selectedIdx = h.links.length - 1)
                      : (h.selectedIdx = 0),
                    J(h),
                    X.preventDefault(),
                    X.stopPropagation()
                  );
                case Se.ESCAPE:
                  return (
                    oe(h),
                    h.button.focus(),
                    X.preventDefault(),
                    X.stopPropagation()
                  );
                case Se.ARROW_LEFT:
                case Se.ARROW_UP:
                  return (
                    (h.selectedIdx = Math.max(-1, h.selectedIdx - 1)),
                    J(h),
                    X.preventDefault(),
                    X.stopPropagation()
                  );
                case Se.ARROW_RIGHT:
                case Se.ARROW_DOWN:
                  return (
                    (h.selectedIdx = Math.min(
                      h.links.length - 1,
                      h.selectedIdx + 1
                    )),
                    J(h),
                    X.preventDefault(),
                    X.stopPropagation()
                  );
              }
          };
        }
        function J(h) {
          if (h.links[h.selectedIdx]) {
            var X = h.links[h.selectedIdx];
            X.focus(), j(X);
          }
        }
        function re(h) {
          h.open && (oe(h, !0), ie(h, !0));
        }
        function V(h) {
          return a(function () {
            h.open ? oe(h) : ie(h);
          });
        }
        function j(h) {
          return function (X) {
            var Z = e(this),
              Y = Z.attr("href");
            if (!St.validClick(X.currentTarget)) {
              X.preventDefault();
              return;
            }
            Y && Y.indexOf("#") === 0 && h.open && oe(h);
          };
        }
        function p(h) {
          return (
            h.outside && o.off("click" + E, h.outside),
            function (X) {
              var Z = e(X.target);
              (y && Z.closest(".w-editor-bem-EditorOverlay").length) || _(h, Z);
            }
          );
        }
        var _ = a(function (h, X) {
          if (h.open) {
            var Z = X.closest(".w-nav-menu");
            h.menu.is(Z) || oe(h);
          }
        });
        function b(h, X) {
          var Z = e.data(X, E),
            Y = (Z.collapsed = Z.button.css("display") !== "none");
          if ((Z.open && !Y && !d && oe(Z, !0), Z.container.length)) {
            var de = G(Z);
            Z.links.each(de), Z.dropdowns.each(de);
          }
          Z.open && fe(Z);
        }
        var l = "max-width";
        function G(h) {
          var X = h.container.css(l);
          return (
            X === "none" && (X = ""),
            function (Z, Y) {
              (Y = e(Y)), Y.css(l, ""), Y.css(l) === "none" && Y.css(l, X);
            }
          );
        }
        function W(h, X) {
          X.setAttribute("data-nav-menu-open", "");
        }
        function L(h, X) {
          X.removeAttribute("data-nav-menu-open");
        }
        function ie(h, X) {
          if (h.open) return;
          (h.open = !0),
            h.menu.each(W),
            h.links.addClass(P),
            h.dropdowns.addClass(I),
            h.dropdownToggle.addClass(C),
            h.dropdownList.addClass(w),
            h.button.addClass(O);
          var Z = h.config,
            Y = Z.animation;
          (Y === "none" || !n.support.transform || Z.duration <= 0) && (X = !0);
          var de = fe(h),
            Fe = h.menu.outerHeight(!0),
            He = h.menu.outerWidth(!0),
            f = h.el.height(),
            T = h.el[0];
          if (
            (b(0, T),
            R.intro(0, T),
            St.redraw.up(),
            d || o.on("click" + E, h.outside),
            X)
          ) {
            A();
            return;
          }
          var x = "transform " + Z.duration + "ms " + Z.easing;
          if (
            (h.overlay &&
              ((M = h.menu.prev()), h.overlay.show().append(h.menu)),
            Z.animOver)
          ) {
            n(h.menu)
              .add(x)
              .set({ x: Z.animDirect * He, height: de })
              .start({ x: 0 })
              .then(A),
              h.overlay && h.overlay.width(He);
            return;
          }
          var N = f + Fe;
          n(h.menu).add(x).set({ y: -N }).start({ y: 0 }).then(A);
          function A() {
            h.button.attr("aria-expanded", "true");
          }
        }
        function fe(h) {
          var X = h.config,
            Z = X.docHeight ? o.height() : s.height();
          return (
            X.animOver
              ? h.menu.height(Z)
              : h.el.css("position") !== "fixed" && (Z -= h.el.outerHeight(!0)),
            h.overlay && h.overlay.height(Z),
            Z
          );
        }
        function oe(h, X) {
          if (!h.open) return;
          (h.open = !1), h.button.removeClass(O);
          var Z = h.config;
          if (
            ((Z.animation === "none" ||
              !n.support.transform ||
              Z.duration <= 0) &&
              (X = !0),
            R.outro(0, h.el[0]),
            o.off("click" + E, h.outside),
            X)
          ) {
            n(h.menu).stop(), T();
            return;
          }
          var Y = "transform " + Z.duration + "ms " + Z.easing2,
            de = h.menu.outerHeight(!0),
            Fe = h.menu.outerWidth(!0),
            He = h.el.height();
          if (Z.animOver) {
            n(h.menu)
              .add(Y)
              .start({ x: Fe * Z.animDirect })
              .then(T);
            return;
          }
          var f = He + de;
          n(h.menu).add(Y).start({ y: -f }).then(T);
          function T() {
            h.menu.height(""),
              n(h.menu).set({ x: 0, y: 0 }),
              h.menu.each(L),
              h.links.removeClass(P),
              h.dropdowns.removeClass(I),
              h.dropdownToggle.removeClass(C),
              h.dropdownList.removeClass(w),
              h.overlay &&
                h.overlay.children().length &&
                (M.length ? h.menu.insertAfter(M) : h.menu.prependTo(h.parent),
                h.overlay.attr("style", "").hide()),
              h.el.triggerHandler("w-close"),
              h.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var Y_ = c((hz, K_) => {
    "use strict";
    var Ct = Ne(),
      XV = Xt(),
      dt = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      z_ =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    Ct.define(
      "slider",
      (K_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(document),
          o,
          a,
          s = Ct.env(),
          u = ".w-slider",
          d = '<div class="w-slider-dot" data-wf-ignore />',
          y =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          v = "w-slider-force-show",
          g = XV.triggers,
          E,
          O = !1;
        (r.ready = function () {
          (a = Ct.env("design")), I();
        }),
          (r.design = function () {
            (a = !0), setTimeout(I, 1e3);
          }),
          (r.preview = function () {
            (a = !1), I();
          }),
          (r.redraw = function () {
            (O = !0), I(), (O = !1);
          }),
          (r.destroy = C);
        function I() {
          (o = i.find(u)), o.length && (o.each(R), !E && (C(), w()));
        }
        function C() {
          Ct.resize.off(P), Ct.redraw.off(r.redraw);
        }
        function w() {
          Ct.resize.on(P), Ct.redraw.on(r.redraw);
        }
        function P() {
          o.filter(":visible").each(H);
        }
        function R(p, _) {
          var b = e(_),
            l = e.data(_, u);
          l ||
            (l = e.data(_, u, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: b,
              config: {},
            })),
            (l.mask = b.children(".w-slider-mask")),
            (l.left = b.children(".w-slider-arrow-left")),
            (l.right = b.children(".w-slider-arrow-right")),
            (l.nav = b.children(".w-slider-nav")),
            (l.slides = l.mask.children(".w-slide")),
            l.slides.each(g.reset),
            O && (l.maskWidth = 0),
            b.attr("role") === void 0 && b.attr("role", "region"),
            b.attr("aria-label") === void 0 && b.attr("aria-label", "carousel");
          var G = l.mask.attr("id");
          if (
            (G || ((G = "w-slider-mask-" + p), l.mask.attr("id", G)),
            !a && !l.ariaLiveLabel && (l.ariaLiveLabel = e(y).appendTo(l.mask)),
            l.left.attr("role", "button"),
            l.left.attr("tabindex", "0"),
            l.left.attr("aria-controls", G),
            l.left.attr("aria-label") === void 0 &&
              l.left.attr("aria-label", "previous slide"),
            l.right.attr("role", "button"),
            l.right.attr("tabindex", "0"),
            l.right.attr("aria-controls", G),
            l.right.attr("aria-label") === void 0 &&
              l.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            l.left.hide(), l.right.hide(), l.nav.hide(), (E = !0);
            return;
          }
          l.el.off(u),
            l.left.off(u),
            l.right.off(u),
            l.nav.off(u),
            M(l),
            a
              ? (l.el.on("setting" + u, m(l)), S(l), (l.hasTimer = !1))
              : (l.el.on("swipe" + u, m(l)),
                l.left.on("click" + u, K(l)),
                l.right.on("click" + u, Q(l)),
                l.left.on("keydown" + u, z(l, K)),
                l.right.on("keydown" + u, z(l, Q)),
                l.nav.on("keydown" + u, "> div", m(l)),
                l.config.autoplay &&
                  !l.hasTimer &&
                  ((l.hasTimer = !0), (l.timerCount = 1), B(l)),
                l.el.on("mouseenter" + u, F(l, !0, "mouse")),
                l.el.on("focusin" + u, F(l, !0, "keyboard")),
                l.el.on("mouseleave" + u, F(l, !1, "mouse")),
                l.el.on("focusout" + u, F(l, !1, "keyboard"))),
            l.nav.on("click" + u, "> div", m(l)),
            s ||
              l.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var W = b.filter(":hidden");
          W.addClass(v);
          var L = b.parents(":hidden");
          L.addClass(v), O || H(p, _), W.removeClass(v), L.removeClass(v);
        }
        function M(p) {
          var _ = {};
          (_.crossOver = 0),
            (_.animation = p.el.attr("data-animation") || "slide"),
            _.animation === "outin" &&
              ((_.animation = "cross"), (_.crossOver = 0.5)),
            (_.easing = p.el.attr("data-easing") || "ease");
          var b = p.el.attr("data-duration");
          if (
            ((_.duration = b != null ? parseInt(b, 10) : 500),
            k(p.el.attr("data-infinite")) && (_.infinite = !0),
            k(p.el.attr("data-disable-swipe")) && (_.disableSwipe = !0),
            k(p.el.attr("data-hide-arrows"))
              ? (_.hideArrows = !0)
              : p.config.hideArrows && (p.left.show(), p.right.show()),
            k(p.el.attr("data-autoplay")))
          ) {
            (_.autoplay = !0),
              (_.delay = parseInt(p.el.attr("data-delay"), 10) || 2e3),
              (_.timerMax = parseInt(p.el.attr("data-autoplay-limit"), 10));
            var l = "mousedown" + u + " touchstart" + u;
            a ||
              p.el.off(l).one(l, function () {
                S(p);
              });
          }
          var G = p.right.width();
          (_.edge = G ? G + 40 : 100), (p.config = _);
        }
        function k(p) {
          return p === "1" || p === "true";
        }
        function F(p, _, b) {
          return function (l) {
            if (_) p.hasFocus[b] = _;
            else if (
              e.contains(p.el.get(0), l.relatedTarget) ||
              ((p.hasFocus[b] = _),
              (p.hasFocus.mouse && b === "keyboard") ||
                (p.hasFocus.keyboard && b === "mouse"))
            )
              return;
            _
              ? (p.ariaLiveLabel.attr("aria-live", "polite"),
                p.hasTimer && S(p))
              : (p.ariaLiveLabel.attr("aria-live", "off"), p.hasTimer && B(p));
          };
        }
        function z(p, _) {
          return function (b) {
            switch (b.keyCode) {
              case dt.SPACE:
              case dt.ENTER:
                return _(p)(), b.preventDefault(), b.stopPropagation();
            }
          };
        }
        function K(p) {
          return function () {
            U(p, { index: p.index - 1, vector: -1 });
          };
        }
        function Q(p) {
          return function () {
            U(p, { index: p.index + 1, vector: 1 });
          };
        }
        function ee(p, _) {
          var b = null;
          _ === p.slides.length && (I(), J(p)),
            t.each(p.anchors, function (l, G) {
              e(l.els).each(function (W, L) {
                e(L).index() === _ && (b = G);
              });
            }),
            b != null && U(p, { index: b, immediate: !0 });
        }
        function B(p) {
          S(p);
          var _ = p.config,
            b = _.timerMax;
          (b && p.timerCount++ > b) ||
            (p.timerId = window.setTimeout(function () {
              p.timerId == null || a || (Q(p)(), B(p));
            }, _.delay));
        }
        function S(p) {
          window.clearTimeout(p.timerId), (p.timerId = null);
        }
        function m(p) {
          return function (_, b) {
            b = b || {};
            var l = p.config;
            if (a && _.type === "setting") {
              if (b.select === "prev") return K(p)();
              if (b.select === "next") return Q(p)();
              if ((M(p), J(p), b.select == null)) return;
              ee(p, b.select);
              return;
            }
            if (_.type === "swipe")
              return l.disableSwipe || Ct.env("editor")
                ? void 0
                : b.direction === "left"
                ? Q(p)()
                : b.direction === "right"
                ? K(p)()
                : void 0;
            if (p.nav.has(_.target).length) {
              var G = e(_.target).index();
              if (
                (_.type === "click" && U(p, { index: G }), _.type === "keydown")
              )
                switch (_.keyCode) {
                  case dt.ENTER:
                  case dt.SPACE: {
                    U(p, { index: G }), _.preventDefault();
                    break;
                  }
                  case dt.ARROW_LEFT:
                  case dt.ARROW_UP: {
                    q(p.nav, Math.max(G - 1, 0)), _.preventDefault();
                    break;
                  }
                  case dt.ARROW_RIGHT:
                  case dt.ARROW_DOWN: {
                    q(p.nav, Math.min(G + 1, p.pages)), _.preventDefault();
                    break;
                  }
                  case dt.HOME: {
                    q(p.nav, 0), _.preventDefault();
                    break;
                  }
                  case dt.END: {
                    q(p.nav, p.pages), _.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function q(p, _) {
          var b = p.children().eq(_).focus();
          p.children().not(b);
        }
        function U(p, _) {
          _ = _ || {};
          var b = p.config,
            l = p.anchors;
          p.previous = p.index;
          var G = _.index,
            W = {};
          G < 0
            ? ((G = l.length - 1),
              b.infinite &&
                ((W.x = -p.endX), (W.from = 0), (W.to = l[0].width)))
            : G >= l.length &&
              ((G = 0),
              b.infinite &&
                ((W.x = l[l.length - 1].width),
                (W.from = -l[l.length - 1].x),
                (W.to = W.from - W.x))),
            (p.index = G);
          var L = p.nav
            .children()
            .eq(G)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          p.nav
            .children()
            .not(L)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            b.hideArrows &&
              (p.index === l.length - 1 ? p.right.hide() : p.right.show(),
              p.index === 0 ? p.left.hide() : p.left.show());
          var ie = p.offsetX || 0,
            fe = (p.offsetX = -l[p.index].x),
            oe = { x: fe, opacity: 1, visibility: "" },
            h = e(l[p.index].els),
            X = e(l[p.previous] && l[p.previous].els),
            Z = p.slides.not(h),
            Y = b.animation,
            de = b.easing,
            Fe = Math.round(b.duration),
            He = _.vector || (p.index > p.previous ? 1 : -1),
            f = "opacity " + Fe + "ms " + de,
            T = "transform " + Fe + "ms " + de;
          if (
            (h.find(z_).removeAttr("tabindex"),
            h.removeAttr("aria-hidden"),
            h.find("*").removeAttr("aria-hidden"),
            Z.find(z_).attr("tabindex", "-1"),
            Z.attr("aria-hidden", "true"),
            Z.find("*").attr("aria-hidden", "true"),
            a || (h.each(g.intro), Z.each(g.outro)),
            _.immediate && !O)
          ) {
            n(h).set(oe), A();
            return;
          }
          if (p.index === p.previous) return;
          if (
            (a || p.ariaLiveLabel.text(`Slide ${G + 1} of ${l.length}.`),
            Y === "cross")
          ) {
            var x = Math.round(Fe - Fe * b.crossOver),
              N = Math.round(Fe - x);
            (f = "opacity " + x + "ms " + de),
              n(X).set({ visibility: "" }).add(f).start({ opacity: 0 }),
              n(h)
                .set({ visibility: "", x: fe, opacity: 0, zIndex: p.depth++ })
                .add(f)
                .wait(N)
                .then({ opacity: 1 })
                .then(A);
            return;
          }
          if (Y === "fade") {
            n(X).set({ visibility: "" }).stop(),
              n(h)
                .set({ visibility: "", x: fe, opacity: 0, zIndex: p.depth++ })
                .add(f)
                .start({ opacity: 1 })
                .then(A);
            return;
          }
          if (Y === "over") {
            (oe = { x: p.endX }),
              n(X).set({ visibility: "" }).stop(),
              n(h)
                .set({
                  visibility: "",
                  zIndex: p.depth++,
                  x: fe + l[p.index].width * He,
                })
                .add(T)
                .start({ x: fe })
                .then(A);
            return;
          }
          b.infinite && W.x
            ? (n(p.slides.not(X))
                .set({ visibility: "", x: W.x })
                .add(T)
                .start({ x: fe }),
              n(X).set({ visibility: "", x: W.from }).add(T).start({ x: W.to }),
              (p.shifted = X))
            : (b.infinite &&
                p.shifted &&
                (n(p.shifted).set({ visibility: "", x: ie }),
                (p.shifted = null)),
              n(p.slides).set({ visibility: "" }).add(T).start({ x: fe }));
          function A() {
            (h = e(l[p.index].els)),
              (Z = p.slides.not(h)),
              Y !== "slide" && (oe.visibility = "hidden"),
              n(Z).set(oe);
          }
        }
        function H(p, _) {
          var b = e.data(_, u);
          if (b) {
            if (V(b)) return J(b);
            a && j(b) && J(b);
          }
        }
        function J(p) {
          var _ = 1,
            b = 0,
            l = 0,
            G = 0,
            W = p.maskWidth,
            L = W - p.config.edge;
          L < 0 && (L = 0),
            (p.anchors = [{ els: [], x: 0, width: 0 }]),
            p.slides.each(function (fe, oe) {
              l - b > L &&
                (_++,
                (b += W),
                (p.anchors[_ - 1] = { els: [], x: l, width: 0 })),
                (G = e(oe).outerWidth(!0)),
                (l += G),
                (p.anchors[_ - 1].width += G),
                p.anchors[_ - 1].els.push(oe);
              var h = fe + 1 + " of " + p.slides.length;
              e(oe).attr("aria-label", h), e(oe).attr("role", "group");
            }),
            (p.endX = l),
            a && (p.pages = null),
            p.nav.length && p.pages !== _ && ((p.pages = _), re(p));
          var ie = p.index;
          ie >= _ && (ie = _ - 1), U(p, { immediate: !0, index: ie });
        }
        function re(p) {
          var _ = [],
            b,
            l = p.el.attr("data-nav-spacing");
          l && (l = parseFloat(l) + "px");
          for (var G = 0, W = p.pages; G < W; G++)
            (b = e(d)),
              b
                .attr("aria-label", "Show slide " + (G + 1) + " of " + W)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              p.nav.hasClass("w-num") && b.text(G + 1),
              l != null && b.css({ "margin-left": l, "margin-right": l }),
              _.push(b);
          p.nav.empty().append(_);
        }
        function V(p) {
          var _ = p.mask.width();
          return p.maskWidth !== _ ? ((p.maskWidth = _), !0) : !1;
        }
        function j(p) {
          var _ = 0;
          return (
            p.slides.each(function (b, l) {
              _ += e(l).outerWidth(!0);
            }),
            p.slidesWidth !== _ ? ((p.slidesWidth = _), !0) : !1
          );
        }
        return r;
      })
    );
  });
  var Q_ = c((mz, $_) => {
    "use strict";
    var Rt = Ne(),
      jV = Xt();
    Rt.define(
      "tabs",
      ($_.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          i,
          o,
          a = Rt.env,
          s = a.safari,
          u = a(),
          d = "data-w-tab",
          y = "data-w-pane",
          v = ".w-tabs",
          g = "w--current",
          E = "w--tab-active",
          O = jV.triggers,
          I = !1;
        (t.ready = t.design = t.preview = C),
          (t.redraw = function () {
            (I = !0), C(), (I = !1);
          }),
          (t.destroy = function () {
            (i = n.find(v)), i.length && (i.each(R), w());
          });
        function C() {
          (o = u && Rt.env("design")),
            (i = n.find(v)),
            i.length &&
              (i.each(M), Rt.env("preview") && !I && i.each(R), w(), P());
        }
        function w() {
          Rt.redraw.off(t.redraw);
        }
        function P() {
          Rt.redraw.on(t.redraw);
        }
        function R(B, S) {
          var m = e.data(S, v);
          m &&
            (m.links && m.links.each(O.reset),
            m.panes && m.panes.each(O.reset));
        }
        function M(B, S) {
          var m = v.substr(1) + "-" + B,
            q = e(S),
            U = e.data(S, v);
          if (
            (U || (U = e.data(S, v, { el: q, config: {} })),
            (U.current = null),
            (U.tabIdentifier = m + "-" + d),
            (U.paneIdentifier = m + "-" + y),
            (U.menu = q.children(".w-tab-menu")),
            (U.links = U.menu.children(".w-tab-link")),
            (U.content = q.children(".w-tab-content")),
            (U.panes = U.content.children(".w-tab-pane")),
            U.el.off(v),
            U.links.off(v),
            U.menu.attr("role", "tablist"),
            U.links.attr("tabindex", "-1"),
            k(U),
            !o)
          ) {
            U.links.on("click" + v, z(U)), U.links.on("keydown" + v, K(U));
            var H = U.links.filter("." + g),
              J = H.attr(d);
            J && Q(U, { tab: J, immediate: !0 });
          }
        }
        function k(B) {
          var S = {};
          S.easing = B.el.attr("data-easing") || "ease";
          var m = parseInt(B.el.attr("data-duration-in"), 10);
          m = S.intro = m === m ? m : 0;
          var q = parseInt(B.el.attr("data-duration-out"), 10);
          (q = S.outro = q === q ? q : 0),
            (S.immediate = !m && !q),
            (B.config = S);
        }
        function F(B) {
          var S = B.current;
          return Array.prototype.findIndex.call(
            B.links,
            (m) => m.getAttribute(d) === S,
            null
          );
        }
        function z(B) {
          return function (S) {
            S.preventDefault();
            var m = S.currentTarget.getAttribute(d);
            m && Q(B, { tab: m });
          };
        }
        function K(B) {
          return function (S) {
            var m = F(B),
              q = S.key,
              U = {
                ArrowLeft: m - 1,
                ArrowUp: m - 1,
                ArrowRight: m + 1,
                ArrowDown: m + 1,
                End: B.links.length - 1,
                Home: 0,
              };
            if (q in U) {
              S.preventDefault();
              var H = U[q];
              H === -1 && (H = B.links.length - 1),
                H === B.links.length && (H = 0);
              var J = B.links[H],
                re = J.getAttribute(d);
              re && Q(B, { tab: re });
            }
          };
        }
        function Q(B, S) {
          S = S || {};
          var m = B.config,
            q = m.easing,
            U = S.tab;
          if (U !== B.current) {
            B.current = U;
            var H;
            B.links.each(function (b, l) {
              var G = e(l);
              if (S.immediate || m.immediate) {
                var W = B.panes[b];
                l.id || (l.id = B.tabIdentifier + "-" + b),
                  W.id || (W.id = B.paneIdentifier + "-" + b),
                  (l.href = "#" + W.id),
                  l.setAttribute("role", "tab"),
                  l.setAttribute("aria-controls", W.id),
                  l.setAttribute("aria-selected", "false"),
                  W.setAttribute("role", "tabpanel"),
                  W.setAttribute("aria-labelledby", l.id);
              }
              l.getAttribute(d) === U
                ? ((H = l),
                  G.addClass(g)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(O.intro))
                : G.hasClass(g) &&
                  G.removeClass(g)
                    .attr({ tabindex: "-1", "aria-selected": "false" })
                    .each(O.outro);
            });
            var J = [],
              re = [];
            B.panes.each(function (b, l) {
              var G = e(l);
              l.getAttribute(d) === U ? J.push(l) : G.hasClass(E) && re.push(l);
            });
            var V = e(J),
              j = e(re);
            if (S.immediate || m.immediate) {
              V.addClass(E).each(O.intro),
                j.removeClass(E),
                I || Rt.redraw.up();
              return;
            } else {
              var p = window.scrollX,
                _ = window.scrollY;
              H.focus(), window.scrollTo(p, _);
            }
            j.length && m.outro
              ? (j.each(O.outro),
                r(j)
                  .add("opacity " + m.outro + "ms " + q, { fallback: s })
                  .start({ opacity: 0 })
                  .then(() => ee(m, j, V)))
              : ee(m, j, V);
          }
        }
        function ee(B, S, m) {
          if (
            (S.removeClass(E).css({
              opacity: "",
              transition: "",
              transform: "",
              width: "",
              height: "",
            }),
            m.addClass(E).each(O.intro),
            Rt.redraw.up(),
            !B.intro)
          )
            return r(m).set({ opacity: 1 });
          r(m)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + B.intro + "ms " + B.easing, { fallback: s })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  zs();
  Ys();
  Qs();
  eu();
  Xt();
  N_();
  q_();
  F_();
  k_();
  V_();
  H_();
  j_();
  Y_();
  Q_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-4",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|f81e6dbd-c770-6527-2b8b-212393345adc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|f81e6dbd-c770-6527-2b8b-212393345adc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1663809189306,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "preset",
      eventTypeId: "NAVBAR_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-6",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|fab8d4db-71a8-a161-a2b3-8e874c840bf5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|fab8d4db-71a8-a161-a2b3-8e874c840bf5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1636912991722,
    },
    "e-6": {
      id: "e-6",
      name: "",
      animationType: "preset",
      eventTypeId: "NAVBAR_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-5",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|fab8d4db-71a8-a161-a2b3-8e874c840bf5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|fab8d4db-71a8-a161-a2b3-8e874c840bf5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1636912991722,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-8",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65f70bb2b9086115817c157a|fab8d4db-71a8-a161-a2b3-8e874c840c07",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|fab8d4db-71a8-a161-a2b3-8e874c840c07",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1663877557181,
    },
    "e-8": {
      id: "e-8",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-7",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65f70bb2b9086115817c157a|fab8d4db-71a8-a161-a2b3-8e874c840c07",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|fab8d4db-71a8-a161-a2b3-8e874c840c07",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1663877557181,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|fab8d4db-71a8-a161-a2b3-8e874c840c07",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|fab8d4db-71a8-a161-a2b3-8e874c840c07",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1663877557181,
    },
    "e-10": {
      id: "e-10",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-9",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|fab8d4db-71a8-a161-a2b3-8e874c840c07",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|fab8d4db-71a8-a161-a2b3-8e874c840c07",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1663877557181,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-12",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65f70bb2b9086115817c157a|64ceba7c-3862-27ce-76b8-4dd0ad8f6409",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|64ceba7c-3862-27ce-76b8-4dd0ad8f6409",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710702269416,
    },
    "e-12": {
      id: "e-12",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-11",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65f70bb2b9086115817c157a|64ceba7c-3862-27ce-76b8-4dd0ad8f6409",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|64ceba7c-3862-27ce-76b8-4dd0ad8f6409",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710702269416,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|64ceba7c-3862-27ce-76b8-4dd0ad8f6409",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|64ceba7c-3862-27ce-76b8-4dd0ad8f6409",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710702269416,
    },
    "e-14": {
      id: "e-14",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-13",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|64ceba7c-3862-27ce-76b8-4dd0ad8f6409",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|64ceba7c-3862-27ce-76b8-4dd0ad8f6409",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710702269416,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-16",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65f70bb2b9086115817c157a|ace5b97a-94ea-ea31-76d6-87b8d8aff7cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|ace5b97a-94ea-ea31-76d6-87b8d8aff7cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710705739365,
    },
    "e-16": {
      id: "e-16",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-15",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65f70bb2b9086115817c157a|ace5b97a-94ea-ea31-76d6-87b8d8aff7cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|ace5b97a-94ea-ea31-76d6-87b8d8aff7cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710705739365,
    },
    "e-17": {
      id: "e-17",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-18",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|ace5b97a-94ea-ea31-76d6-87b8d8aff7cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|ace5b97a-94ea-ea31-76d6-87b8d8aff7cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710705739365,
    },
    "e-18": {
      id: "e-18",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-17",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|ace5b97a-94ea-ea31-76d6-87b8d8aff7cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|ace5b97a-94ea-ea31-76d6-87b8d8aff7cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710705739365,
    },
    "e-24": {
      id: "e-24",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-23",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|410e444b-a699-a38f-cf1c-61f6c998758d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|410e444b-a699-a38f-cf1c-61f6c998758d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710708251632,
    },
    "e-26": {
      id: "e-26",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-25",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|0ecf0718-a2db-68d0-6c1a-5e609c646981",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|0ecf0718-a2db-68d0-6c1a-5e609c646981",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710708653619,
    },
    "e-30": {
      id: "e-30",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-29",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|ae9e8c5b-280b-26cc-da81-9bd08f4f4a06",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|ae9e8c5b-280b-26cc-da81-9bd08f4f4a06",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710708654722,
    },
    "e-34": {
      id: "e-34",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-33",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|061587be-a44c-c824-bb47-8d1d6a271a02",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|061587be-a44c-c824-bb47-8d1d6a271a02",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710708655175,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-37",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|41d8fc9f-39e2-1270-a4b6-6a48cec410bb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|41d8fc9f-39e2-1270-a4b6-6a48cec410bb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710708655517,
    },
    "e-42": {
      id: "e-42",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-41",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|0d8196c4-3ba0-b70f-42f4-7f91103f51ba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|0d8196c4-3ba0-b70f-42f4-7f91103f51ba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710708655769,
    },
    "e-46": {
      id: "e-46",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-45",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|475e023d-0590-0513-6a72-baf62ef8d486",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|475e023d-0590-0513-6a72-baf62ef8d486",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710708656051,
    },
    "e-50": {
      id: "e-50",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-49",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|ddaf1717-159d-65fd-a7bd-e68fb4514041",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|ddaf1717-159d-65fd-a7bd-e68fb4514041",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710708656426,
    },
    "e-73": {
      id: "e-73",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-74",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|299310ec-f9e1-b741-d502-d7cfb4800902",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|299310ec-f9e1-b741-d502-d7cfb4800902",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711022151661,
    },
    "e-74": {
      id: "e-74",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-73",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|299310ec-f9e1-b741-d502-d7cfb4800902",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|299310ec-f9e1-b741-d502-d7cfb4800902",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711022151661,
    },
    "e-75": {
      id: "e-75",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-76",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|cc29ddb5-7065-b930-cf74-00a5d2a572aa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|cc29ddb5-7065-b930-cf74-00a5d2a572aa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711022152990,
    },
    "e-76": {
      id: "e-76",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-75",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|cc29ddb5-7065-b930-cf74-00a5d2a572aa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|cc29ddb5-7065-b930-cf74-00a5d2a572aa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711022152990,
    },
    "e-77": {
      id: "e-77",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-78",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|b0e88ad6-8241-3cb8-089b-0a0b08e64a45",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|b0e88ad6-8241-3cb8-089b-0a0b08e64a45",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711022153937,
    },
    "e-78": {
      id: "e-78",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-77",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|b0e88ad6-8241-3cb8-089b-0a0b08e64a45",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|b0e88ad6-8241-3cb8-089b-0a0b08e64a45",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711022153937,
    },
    "e-79": {
      id: "e-79",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-80",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|2482804f-84d8-0826-561d-bf9bcf2e85e6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|2482804f-84d8-0826-561d-bf9bcf2e85e6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711022213251,
    },
    "e-80": {
      id: "e-80",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-79",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|2482804f-84d8-0826-561d-bf9bcf2e85e6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|2482804f-84d8-0826-561d-bf9bcf2e85e6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711022213251,
    },
    "e-81": {
      id: "e-81",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-82",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|6d91a3eb-c8bf-840b-70f6-767063e584c7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|6d91a3eb-c8bf-840b-70f6-767063e584c7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711022213924,
    },
    "e-82": {
      id: "e-82",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-81",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|6d91a3eb-c8bf-840b-70f6-767063e584c7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|6d91a3eb-c8bf-840b-70f6-767063e584c7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711022213924,
    },
    "e-83": {
      id: "e-83",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-84",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|faf96eb0-9393-f508-6d52-f98a84aeb42e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|faf96eb0-9393-f508-6d52-f98a84aeb42e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711022214513,
    },
    "e-84": {
      id: "e-84",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-83",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|faf96eb0-9393-f508-6d52-f98a84aeb42e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|faf96eb0-9393-f508-6d52-f98a84aeb42e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711022214513,
    },
    "e-85": {
      id: "e-85",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-86",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|8808d0c4-756d-838d-2aad-eb72fb8679e9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|8808d0c4-756d-838d-2aad-eb72fb8679e9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711022214960,
    },
    "e-86": {
      id: "e-86",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-85",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|8808d0c4-756d-838d-2aad-eb72fb8679e9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|8808d0c4-756d-838d-2aad-eb72fb8679e9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711022214960,
    },
    "e-87": {
      id: "e-87",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-88",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|7b132b9e-88bf-855f-4c91-ffb5d8c2504c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|7b132b9e-88bf-855f-4c91-ffb5d8c2504c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711022215243,
    },
    "e-88": {
      id: "e-88",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-87",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|7b132b9e-88bf-855f-4c91-ffb5d8c2504c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|7b132b9e-88bf-855f-4c91-ffb5d8c2504c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711022215243,
    },
    "e-89": {
      id: "e-89",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-90",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|74c47ccc-8f10-86ea-9e04-7ebac3c8af9e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|74c47ccc-8f10-86ea-9e04-7ebac3c8af9e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1637127038598,
    },
    "e-91": {
      id: "e-91",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-92",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f70bb2b9086115817c157a|375e2d52-2b97-e06d-ae88-8f3e8cf551e0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f70bb2b9086115817c157a|375e2d52-2b97-e06d-ae88-8f3e8cf551e0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1711188331413,
    },
    "e-93": {
      id: "e-93",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-94",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|f81e6dbd-c770-6527-2b8b-212393345adc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|f81e6dbd-c770-6527-2b8b-212393345adc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711188450504,
    },
    "e-95": {
      id: "e-95",
      name: "",
      animationType: "preset",
      eventTypeId: "NAVBAR_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-96",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|fab8d4db-71a8-a161-a2b3-8e874c840bf5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|fab8d4db-71a8-a161-a2b3-8e874c840bf5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711188450504,
    },
    "e-96": {
      id: "e-96",
      name: "",
      animationType: "preset",
      eventTypeId: "NAVBAR_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-95",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|fab8d4db-71a8-a161-a2b3-8e874c840bf5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|fab8d4db-71a8-a161-a2b3-8e874c840bf5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711188450504,
    },
    "e-97": {
      id: "e-97",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-98",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65fea9e02989eb1e11bd7221|fab8d4db-71a8-a161-a2b3-8e874c840c07",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|fab8d4db-71a8-a161-a2b3-8e874c840c07",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711188450504,
    },
    "e-98": {
      id: "e-98",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-97",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65fea9e02989eb1e11bd7221|fab8d4db-71a8-a161-a2b3-8e874c840c07",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|fab8d4db-71a8-a161-a2b3-8e874c840c07",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711188450504,
    },
    "e-99": {
      id: "e-99",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-100",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|fab8d4db-71a8-a161-a2b3-8e874c840c07",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|fab8d4db-71a8-a161-a2b3-8e874c840c07",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711188450504,
    },
    "e-100": {
      id: "e-100",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-99",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|fab8d4db-71a8-a161-a2b3-8e874c840c07",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|fab8d4db-71a8-a161-a2b3-8e874c840c07",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711188450504,
    },
    "e-101": {
      id: "e-101",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-102",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65fea9e02989eb1e11bd7221|64ceba7c-3862-27ce-76b8-4dd0ad8f6409",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|64ceba7c-3862-27ce-76b8-4dd0ad8f6409",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711188450504,
    },
    "e-102": {
      id: "e-102",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-101",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65fea9e02989eb1e11bd7221|64ceba7c-3862-27ce-76b8-4dd0ad8f6409",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|64ceba7c-3862-27ce-76b8-4dd0ad8f6409",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711188450504,
    },
    "e-103": {
      id: "e-103",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-104",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|64ceba7c-3862-27ce-76b8-4dd0ad8f6409",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|64ceba7c-3862-27ce-76b8-4dd0ad8f6409",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711188450504,
    },
    "e-104": {
      id: "e-104",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-103",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|64ceba7c-3862-27ce-76b8-4dd0ad8f6409",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|64ceba7c-3862-27ce-76b8-4dd0ad8f6409",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711188450504,
    },
    "e-105": {
      id: "e-105",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-106",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65fea9e02989eb1e11bd7221|ace5b97a-94ea-ea31-76d6-87b8d8aff7cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|ace5b97a-94ea-ea31-76d6-87b8d8aff7cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711188450504,
    },
    "e-106": {
      id: "e-106",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-105",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65fea9e02989eb1e11bd7221|ace5b97a-94ea-ea31-76d6-87b8d8aff7cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|ace5b97a-94ea-ea31-76d6-87b8d8aff7cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711188450504,
    },
    "e-107": {
      id: "e-107",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-108",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|ace5b97a-94ea-ea31-76d6-87b8d8aff7cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|ace5b97a-94ea-ea31-76d6-87b8d8aff7cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711188450504,
    },
    "e-108": {
      id: "e-108",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-107",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|ace5b97a-94ea-ea31-76d6-87b8d8aff7cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|ace5b97a-94ea-ea31-76d6-87b8d8aff7cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711188450504,
    },
    "e-141": {
      id: "e-141",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-142",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|299310ec-f9e1-b741-d502-d7cfb4800902",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|299310ec-f9e1-b741-d502-d7cfb4800902",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711188450504,
    },
    "e-142": {
      id: "e-142",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-141",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|299310ec-f9e1-b741-d502-d7cfb4800902",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|299310ec-f9e1-b741-d502-d7cfb4800902",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711188450504,
    },
    "e-179": {
      id: "e-179",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-180",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|f45e5769-3338-56f7-4886-4a784e0536ee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|f45e5769-3338-56f7-4886-4a784e0536ee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711208787282,
    },
    "e-180": {
      id: "e-180",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-179",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|f45e5769-3338-56f7-4886-4a784e0536ee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|f45e5769-3338-56f7-4886-4a784e0536ee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711208787282,
    },
    "e-181": {
      id: "e-181",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-182",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|60b18b7b-c91a-2951-b123-eeb972390c22",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|60b18b7b-c91a-2951-b123-eeb972390c22",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711211182097,
    },
    "e-182": {
      id: "e-182",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-181",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|60b18b7b-c91a-2951-b123-eeb972390c22",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|60b18b7b-c91a-2951-b123-eeb972390c22",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711211182097,
    },
    "e-201": {
      id: "e-201",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-202",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|e5f53972-1620-38d9-adca-fda622cc6d00",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|e5f53972-1620-38d9-adca-fda622cc6d00",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711349461395,
    },
    "e-202": {
      id: "e-202",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-201",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|e5f53972-1620-38d9-adca-fda622cc6d00",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|e5f53972-1620-38d9-adca-fda622cc6d00",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711349461395,
    },
    "e-203": {
      id: "e-203",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-204",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|8fca1f50-780a-09e8-c908-5045fd072f5b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|8fca1f50-780a-09e8-c908-5045fd072f5b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711353051153,
    },
    "e-204": {
      id: "e-204",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-203",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|8fca1f50-780a-09e8-c908-5045fd072f5b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|8fca1f50-780a-09e8-c908-5045fd072f5b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711353051153,
    },
    "e-205": {
      id: "e-205",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-206",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|424a9c6e-8fe3-895f-9e1f-76d544e0ac19",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|424a9c6e-8fe3-895f-9e1f-76d544e0ac19",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711353052122,
    },
    "e-206": {
      id: "e-206",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-205",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|424a9c6e-8fe3-895f-9e1f-76d544e0ac19",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|424a9c6e-8fe3-895f-9e1f-76d544e0ac19",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711353052122,
    },
    "e-207": {
      id: "e-207",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-208",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|a00d6722-2b12-eaa6-fbeb-6b3f81a97a62",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|a00d6722-2b12-eaa6-fbeb-6b3f81a97a62",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711353052369,
    },
    "e-208": {
      id: "e-208",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-207",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|a00d6722-2b12-eaa6-fbeb-6b3f81a97a62",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|a00d6722-2b12-eaa6-fbeb-6b3f81a97a62",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711353052369,
    },
    "e-209": {
      id: "e-209",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-210",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|7b7f1442-b778-a489-7072-a9561d5d61c0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|7b7f1442-b778-a489-7072-a9561d5d61c0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711353052610,
    },
    "e-210": {
      id: "e-210",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-209",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|7b7f1442-b778-a489-7072-a9561d5d61c0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|7b7f1442-b778-a489-7072-a9561d5d61c0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711353052610,
    },
    "e-211": {
      id: "e-211",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-212",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|f940b378-44cd-4f17-7f0f-279b6799b405",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|f940b378-44cd-4f17-7f0f-279b6799b405",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711353052827,
    },
    "e-212": {
      id: "e-212",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-211",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|f940b378-44cd-4f17-7f0f-279b6799b405",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|f940b378-44cd-4f17-7f0f-279b6799b405",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711353052827,
    },
    "e-213": {
      id: "e-213",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-214",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|f552435f-8c5e-1c0a-3cec-81b70a46dfc9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|f552435f-8c5e-1c0a-3cec-81b70a46dfc9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711353053090,
    },
    "e-214": {
      id: "e-214",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-213",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|f552435f-8c5e-1c0a-3cec-81b70a46dfc9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|f552435f-8c5e-1c0a-3cec-81b70a46dfc9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711353053090,
    },
    "e-215": {
      id: "e-215",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-216",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|ed4f5bcb-7146-21fc-b6b0-74badeedec72",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|ed4f5bcb-7146-21fc-b6b0-74badeedec72",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711353053643,
    },
    "e-216": {
      id: "e-216",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-215",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|ed4f5bcb-7146-21fc-b6b0-74badeedec72",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|ed4f5bcb-7146-21fc-b6b0-74badeedec72",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711353053643,
    },
    "e-217": {
      id: "e-217",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-218",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|238017cf-beab-b840-6347-412f32a4921a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|238017cf-beab-b840-6347-412f32a4921a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711357195819,
    },
    "e-218": {
      id: "e-218",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-217",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|238017cf-beab-b840-6347-412f32a4921a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|238017cf-beab-b840-6347-412f32a4921a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711357195819,
    },
    "e-219": {
      id: "e-219",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-220",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|57caa0f0-dee6-8e57-aa86-530ea0bc124f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|57caa0f0-dee6-8e57-aa86-530ea0bc124f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711357196517,
    },
    "e-220": {
      id: "e-220",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-219",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|57caa0f0-dee6-8e57-aa86-530ea0bc124f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|57caa0f0-dee6-8e57-aa86-530ea0bc124f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711357196517,
    },
    "e-221": {
      id: "e-221",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-222",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|a49eb04a-7526-9ca6-1f70-79149f3ff9da",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|a49eb04a-7526-9ca6-1f70-79149f3ff9da",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711357197106,
    },
    "e-222": {
      id: "e-222",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-221",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|a49eb04a-7526-9ca6-1f70-79149f3ff9da",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|a49eb04a-7526-9ca6-1f70-79149f3ff9da",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711357197106,
    },
    "e-223": {
      id: "e-223",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-224",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|8c742410-8092-599b-b699-a630065af984",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|8c742410-8092-599b-b699-a630065af984",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711357197645,
    },
    "e-224": {
      id: "e-224",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-223",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|8c742410-8092-599b-b699-a630065af984",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|8c742410-8092-599b-b699-a630065af984",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711357197645,
    },
    "e-225": {
      id: "e-225",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-226",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|7626ac61-4bf6-49a1-2e7c-3d5682615982",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|7626ac61-4bf6-49a1-2e7c-3d5682615982",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711357198002,
    },
    "e-226": {
      id: "e-226",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-225",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|7626ac61-4bf6-49a1-2e7c-3d5682615982",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|7626ac61-4bf6-49a1-2e7c-3d5682615982",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711357198002,
    },
    "e-227": {
      id: "e-227",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-228",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|76e7d2fb-747d-eec7-855a-21f9781e68e1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|76e7d2fb-747d-eec7-855a-21f9781e68e1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711357198525,
    },
    "e-228": {
      id: "e-228",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-227",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|76e7d2fb-747d-eec7-855a-21f9781e68e1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|76e7d2fb-747d-eec7-855a-21f9781e68e1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711357198525,
    },
    "e-229": {
      id: "e-229",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-230",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|cc1c3959-b824-8c20-a29d-7679f206d2f4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|cc1c3959-b824-8c20-a29d-7679f206d2f4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711357200068,
    },
    "e-230": {
      id: "e-230",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-229",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|cc1c3959-b824-8c20-a29d-7679f206d2f4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|cc1c3959-b824-8c20-a29d-7679f206d2f4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711357200068,
    },
    "e-231": {
      id: "e-231",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-232",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|ebb9afef-f6f5-1816-fc8a-aa9183aa1ffb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|ebb9afef-f6f5-1816-fc8a-aa9183aa1ffb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711357200558,
    },
    "e-232": {
      id: "e-232",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-231",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|ebb9afef-f6f5-1816-fc8a-aa9183aa1ffb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|ebb9afef-f6f5-1816-fc8a-aa9183aa1ffb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711357200558,
    },
    "e-233": {
      id: "e-233",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-234",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|188f7577-b326-e3a8-16d2-c87c3073f821",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|188f7577-b326-e3a8-16d2-c87c3073f821",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711357201128,
    },
    "e-234": {
      id: "e-234",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-233",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|188f7577-b326-e3a8-16d2-c87c3073f821",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|188f7577-b326-e3a8-16d2-c87c3073f821",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711357201128,
    },
    "e-239": {
      id: "e-239",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-240",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711368914274,
    },
    "e-240": {
      id: "e-240",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-239",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711368914275,
    },
    "e-253": {
      id: "e-253",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-42",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-254",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65fea9e02989eb1e11bd7221|bd531c0a-2c08-c6f6-5fb0-06ca037a52f2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|bd531c0a-2c08-c6f6-5fb0-06ca037a52f2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711538297307,
    },
    "e-255": {
      id: "e-255",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-43",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-256",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|fa0798f8-4165-1386-bb4e-ee65641c092e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|fa0798f8-4165-1386-bb4e-ee65641c092e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711539278338,
    },
    "e-256": {
      id: "e-256",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-43",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-255",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|fa0798f8-4165-1386-bb4e-ee65641c092e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|fa0798f8-4165-1386-bb4e-ee65641c092e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711539278339,
    },
    "e-257": {
      id: "e-257",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-42",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-258",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65fea9e02989eb1e11bd7221|409de07b-b183-d105-a6c6-99a2840b4347",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|409de07b-b183-d105-a6c6-99a2840b4347",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711540175918,
    },
    "e-259": {
      id: "e-259",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-44",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-260",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711540230465,
    },
    "e-261": {
      id: "e-261",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-47",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-262",
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|bd531c0a-2c08-c6f6-5fb0-06ca037a52f2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|bd531c0a-2c08-c6f6-5fb0-06ca037a52f2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711541247684,
    },
    "e-263": {
      id: "e-263",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-46",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-264",
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|56598885-8e35-0831-5b5c-661cb94fd5bd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|56598885-8e35-0831-5b5c-661cb94fd5bd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711541765870,
    },
    "e-265": {
      id: "e-265",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-47",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-266",
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|409de07b-b183-d105-a6c6-99a2840b4347",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|409de07b-b183-d105-a6c6-99a2840b4347",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711542725753,
    },
    "e-267": {
      id: "e-267",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-268",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65fea9e02989eb1e11bd7221|c5bb2710-9c3f-e6c9-7cde-ce1873daa3bc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|c5bb2710-9c3f-e6c9-7cde-ce1873daa3bc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711630288828,
    },
    "e-268": {
      id: "e-268",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-40",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-267",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65fea9e02989eb1e11bd7221|c5bb2710-9c3f-e6c9-7cde-ce1873daa3bc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|c5bb2710-9c3f-e6c9-7cde-ce1873daa3bc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711630288828,
    },
    "e-269": {
      id: "e-269",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-270",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|c5bb2710-9c3f-e6c9-7cde-ce1873daa3c1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|c5bb2710-9c3f-e6c9-7cde-ce1873daa3c1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711630288828,
    },
    "e-270": {
      id: "e-270",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-40",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-269",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|c5bb2710-9c3f-e6c9-7cde-ce1873daa3c1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|c5bb2710-9c3f-e6c9-7cde-ce1873daa3c1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711630288828,
    },
    "e-271": {
      id: "e-271",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-272",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|c5bb2710-9c3f-e6c9-7cde-ce1873daa3c6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|c5bb2710-9c3f-e6c9-7cde-ce1873daa3c6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711630288828,
    },
    "e-272": {
      id: "e-272",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-40",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-271",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|c5bb2710-9c3f-e6c9-7cde-ce1873daa3c6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|c5bb2710-9c3f-e6c9-7cde-ce1873daa3c6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711630288828,
    },
    "e-273": {
      id: "e-273",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-274",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|c5bb2710-9c3f-e6c9-7cde-ce1873daa3cb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|c5bb2710-9c3f-e6c9-7cde-ce1873daa3cb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711630288828,
    },
    "e-274": {
      id: "e-274",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-40",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-273",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|c5bb2710-9c3f-e6c9-7cde-ce1873daa3cb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|c5bb2710-9c3f-e6c9-7cde-ce1873daa3cb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711630288828,
    },
    "e-275": {
      id: "e-275",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-276",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|c5bb2710-9c3f-e6c9-7cde-ce1873daa3d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|c5bb2710-9c3f-e6c9-7cde-ce1873daa3d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711630288828,
    },
    "e-276": {
      id: "e-276",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-40",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-275",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|c5bb2710-9c3f-e6c9-7cde-ce1873daa3d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|c5bb2710-9c3f-e6c9-7cde-ce1873daa3d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711630288828,
    },
    "e-277": {
      id: "e-277",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-278",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da465",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da465",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711700663810,
    },
    "e-278": {
      id: "e-278",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-277",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da465",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da465",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711700663810,
    },
    "e-279": {
      id: "e-279",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-280",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da46e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da46e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711700663810,
    },
    "e-280": {
      id: "e-280",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-279",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da46e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da46e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711700663810,
    },
    "e-281": {
      id: "e-281",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-282",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da477",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da477",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711700663810,
    },
    "e-282": {
      id: "e-282",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-281",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da477",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da477",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711700663810,
    },
    "e-283": {
      id: "e-283",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-284",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da480",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da480",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711700663810,
    },
    "e-284": {
      id: "e-284",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-283",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da480",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da480",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711700663810,
    },
    "e-285": {
      id: "e-285",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-286",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da489",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da489",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711700663810,
    },
    "e-286": {
      id: "e-286",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-285",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da489",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da489",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711700663810,
    },
    "e-287": {
      id: "e-287",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-288",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da492",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da492",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711700663810,
    },
    "e-288": {
      id: "e-288",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-287",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da492",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da492",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711700663810,
    },
    "e-289": {
      id: "e-289",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-290",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da49b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da49b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711700663810,
    },
    "e-290": {
      id: "e-290",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-289",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da49b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da49b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711700663810,
    },
    "e-291": {
      id: "e-291",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-292",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da4a4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da4a4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711700663810,
    },
    "e-292": {
      id: "e-292",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-291",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da4a4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|a3a0bf42-62d0-9e00-9208-f005024da4a4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711700663810,
    },
    "e-293": {
      id: "e-293",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-294" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".spark-wrapped-card",
        originalId:
          "6347188dda3065f6e0f3f6b7|71a2a3a7-9c47-0f82-7d79-fafe6b7eb54f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".spark-wrapped-card",
          originalId:
            "6347188dda3065f6e0f3f6b7|71a2a3a7-9c47-0f82-7d79-fafe6b7eb54f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: null,
        effectIn: true,
      },
      createdOn: 1666148876926,
    },
    "e-297": {
      id: "e-297",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-43",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-298",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|d99c12a7-c1c8-3f38-7328-bc53d0fe14a8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|d99c12a7-c1c8-3f38-7328-bc53d0fe14a8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711813675022,
    },
    "e-298": {
      id: "e-298",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-43",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-297",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65fea9e02989eb1e11bd7221|d99c12a7-c1c8-3f38-7328-bc53d0fe14a8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65fea9e02989eb1e11bd7221|d99c12a7-c1c8-3f38-7328-bc53d0fe14a8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1711813675022,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "❌ BRIX - Top Bar Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".brix---top-bar-padding",
                  selectorGuids: ["e181eef1-4e8d-16f7-9c0b-d73d393cdfa3"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".brix---top-bar-wrapper",
                  selectorGuids: ["e181eef1-4e8d-16f7-9c0b-d73d393cdfa4"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1636685387979,
    },
    "a-9": {
      id: "a-9",
      title: "🍔 BRIX - Hamburger Menu - Opens",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---hamburger-menu-bar-top",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b1514c"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-9-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---hamburger-menu-bar-bottom",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b1514b"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-9-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---hamburger-menu-bar-bottom",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b1514b"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---hamburger-menu-bar-top",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b1514c"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-9-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---hamburger-menu-bar-top",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b1514c"],
                },
                zValue: 135,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-9-n-6",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---hamburger-menu-bar-bottom",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b1514b"],
                },
                zValue: 45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-9-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---hamburger-menu-bar-bottom",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b1514b"],
                },
                yValue: -7,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-9-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---hamburger-menu-bar-top",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b1514c"],
                },
                yValue: 8,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1636864366516,
    },
    "a-10": {
      id: "a-10",
      title: "🍔 BRIX - Hamburger Menu - Closes",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---hamburger-menu-bar-top",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b1514c"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-10-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---hamburger-menu-bar-bottom",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b1514b"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-10-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---hamburger-menu-bar-bottom",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b1514b"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-10-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---hamburger-menu-bar-top",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b1514c"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1636864667872,
    },
    "a-3": {
      id: "a-3",
      title: "⬇️ 🖥 BRIX - Dropdown Opens - Desktop",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-chevron",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15157"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-3-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-card",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15155"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-3-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-card",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15155"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-3-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-card",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15155"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-3-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-chevron",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15157"],
                },
                zValue: -180,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-3-n-6",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-card",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15155"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-3-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-card",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15155"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1636862239424,
    },
    "a-4": {
      id: "a-4",
      title: "⬆️🖥 BRIX -  Dropdown Closes - Desktop",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-card",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15155"],
                },
                yValue: 10,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-4-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-chevron",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15157"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-4-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-card",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15155"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-4-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-card",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15155"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1636862654345,
    },
    "a-7": {
      id: "a-7",
      title: "⬇️ 📱 BRIX - Dropdown Opens - Tablet",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-card",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15155"],
                },
                value: "none",
              },
            },
            {
              id: "a-7-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-chevron",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15157"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-7-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-card",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15155"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-7-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-card",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15155"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-7-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-card",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15155"],
                },
                xValue: null,
                yValue: 10,
                xUnit: "%",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-6",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-card",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15155"],
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-card",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15155"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-8",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-chevron",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15157"],
                },
                zValue: -180,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-7-n-9",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-card",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15155"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-7-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-card",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15155"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1636862239424,
    },
    "a-8": {
      id: "a-8",
      title: "⬆️📱 BRIX - Dropdown Closes - Tablet",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-card",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15155"],
                },
                yValue: 10,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-8-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-chevron",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15157"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-8-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-card",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15155"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-8-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-card",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15155"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-8-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 300,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---dropdown-card",
                  selectorGuids: ["5653a7f2-6a29-c7c8-576c-449083b15155"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1636862654345,
    },
    "a-11": {
      id: "a-11",
      title: "hover-roott",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-11-n-2",
              actionTypeId: "PLUGIN_VARIABLE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                value: { red: 255, green: 255, blue: 255, alpha: 1 },
                target: {
                  objectId: "--elements-webflow-library--neutral--100",
                  selector: ".roott-card.in",
                  selectorGuids: [
                    "3d1a0e50-b8da-5813-3a26-52a9e7e0f7ee",
                    "eb424ffa-ec65-0d5d-954d-01ee2161d50c",
                  ],
                },
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n",
              actionTypeId: "PLUGIN_VARIABLE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                value: {},
                target: {
                  selector: ".roott-card.in",
                  selectorGuids: [
                    "3d1a0e50-b8da-5813-3a26-52a9e7e0f7ee",
                    "eb424ffa-ec65-0d5d-954d-01ee2161d50c",
                  ],
                },
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1710708306613,
    },
    "a-16": {
      id: "a-16",
      title: "🛒 BRIX - Product Card Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n-2",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {},
                globalSwatchId: "86b36df2",
                rValue: 74,
                bValue: 255,
                gValue: 58,
                aValue: 1,
              },
            },
            {
              id: "a-16-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {},
                globalSwatchId: "07926372",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-16-n-4",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {},
                globalSwatchId: "86b36df2",
                rValue: 74,
                bValue: 255,
                gValue: 58,
                aValue: 1,
              },
            },
            {
              id: "a-16-n-6",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {},
                globalSwatchId: "86b36df2",
                rValue: 74,
                bValue: 255,
                gValue: 58,
                aValue: 1,
              },
            },
            {
              id: "a-16-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---btn-primary-small-prod",
                  selectorGuids: ["72ee16e2-f016-dfea-cc14-c4702bccbd57"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1637630896466,
    },
    "a-17": {
      id: "a-17",
      title: "🛒 BRIX - Blog Card Hover Out 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-17-n-2",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {},
                globalSwatchId: "37cef123",
                rValue: 239,
                bValue: 246,
                gValue: 240,
                aValue: 1,
              },
            },
            {
              id: "a-17-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {},
                globalSwatchId: "44c33ad4",
                rValue: 33,
                bValue: 84,
                gValue: 31,
                aValue: 1,
              },
            },
            {
              id: "a-17-n-4",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {},
                globalSwatchId: "07926372",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-17-n-6",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {},
                globalSwatchId: "44c33ad4",
                rValue: 33,
                bValue: 84,
                gValue: 31,
                aValue: 1,
              },
            },
            {
              id: "a-17-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---btn-primary-small-prod",
                  selectorGuids: ["72ee16e2-f016-dfea-cc14-c4702bccbd57"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1637631044001,
    },
    "a-20": {
      id: "a-20",
      title: "☝️ BRIX - Slide To Top - 0.3s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-20-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b381a",
                },
                yValue: 10,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b381a",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-20-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b381a",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-20-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2b842a8b-4216-fa87-f566-5c75c66b381a",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1637117977426,
    },
    "a-28": {
      id: "a-28",
      title: "🪗 BRIX - Accordion V4 Closes",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-28-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---acordion-body",
                  selectorGuids: ["14aa3b72-5bf9-b1dd-1459-3640ef5c0ca2"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-28-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---accordion-icon-wrapper",
                  selectorGuids: ["14aa3b72-5bf9-b1dd-1459-3640ef5c0c9d"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-28-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---accordion-title",
                  selectorGuids: ["14aa3b72-5bf9-b1dd-1459-3640ef5c0ca3"],
                },
                globalSwatchId: "44c33ad4",
                rValue: 33,
                bValue: 84,
                gValue: 31,
                aValue: 1,
              },
            },
            {
              id: "a-28-n-4",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {
                  useEventTarget: true,
                  id: "65fea9e02989eb1e11bd7221|7697bda2-d2b6-da9d-5582-2d495ba71d90",
                },
                globalSwatchId: "37cef123",
                rValue: 239,
                bValue: 246,
                gValue: 240,
                aValue: 1,
              },
            },
            {
              id: "a-28-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---acordion-body",
                  selectorGuids: ["14aa3b72-5bf9-b1dd-1459-3640ef5c0ca2"],
                },
                xValue: 0.96,
                yValue: 0.96,
                locked: true,
              },
            },
            {
              id: "a-28-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---acordion-body",
                  selectorGuids: ["14aa3b72-5bf9-b1dd-1459-3640ef5c0ca2"],
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-28-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---acordion-body",
                  selectorGuids: ["14aa3b72-5bf9-b1dd-1459-3640ef5c0ca2"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1637428284198,
    },
    "a-27": {
      id: "a-27",
      title: "🪗 BRIX - Accordion V4 Open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-27-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---acordion-body",
                  selectorGuids: ["14aa3b72-5bf9-b1dd-1459-3640ef5c0ca2"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-27-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---acordion-body",
                  selectorGuids: ["14aa3b72-5bf9-b1dd-1459-3640ef5c0ca2"],
                },
                xValue: 0.96,
                yValue: 0.96,
                locked: true,
              },
            },
            {
              id: "a-27-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---acordion-body",
                  selectorGuids: ["14aa3b72-5bf9-b1dd-1459-3640ef5c0ca2"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-27-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---acordion-body",
                  selectorGuids: ["14aa3b72-5bf9-b1dd-1459-3640ef5c0ca2"],
                },
                xValue: null,
                yValue: 20,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-27-n-5",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---acordion-body",
                  selectorGuids: ["14aa3b72-5bf9-b1dd-1459-3640ef5c0ca2"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-27-n-6",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---accordion-icon-wrapper",
                  selectorGuids: ["14aa3b72-5bf9-b1dd-1459-3640ef5c0c9d"],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-27-n-7",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---accordion-title",
                  selectorGuids: ["14aa3b72-5bf9-b1dd-1459-3640ef5c0ca3"],
                },
                globalSwatchId: "86b36df2",
                rValue: 74,
                bValue: 255,
                gValue: 58,
                aValue: 1,
              },
            },
            {
              id: "a-27-n-8",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  useEventTarget: true,
                  id: "65fea9e02989eb1e11bd7221|7697bda2-d2b6-da9d-5582-2d495ba71d90",
                },
                globalSwatchId: "86b36df2",
                rValue: 74,
                bValue: 255,
                gValue: 58,
                aValue: 1,
              },
            },
            {
              id: "a-27-n-9",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---acordion-body",
                  selectorGuids: ["14aa3b72-5bf9-b1dd-1459-3640ef5c0ca2"],
                },
                xValue: 1,
                yValue: 1,
                locked: false,
              },
            },
            {
              id: "a-27-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---acordion-body",
                  selectorGuids: ["14aa3b72-5bf9-b1dd-1459-3640ef5c0ca2"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-27-n-11",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---acordion-body",
                  selectorGuids: ["14aa3b72-5bf9-b1dd-1459-3640ef5c0ca2"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1637427899795,
    },
    "a-37": {
      id: "a-37",
      title: "r1",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-37-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".roott-select",
                  selectorGuids: ["5a7baf40-2e85-50d2-2777-c7ec599e4dcf"],
                },
                widthValue: 0,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-37-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 10,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".roott-select",
                  selectorGuids: ["5a7baf40-2e85-50d2-2777-c7ec599e4dcf"],
                },
                widthValue: 100,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1711348581545,
    },
    "a-38": {
      id: "a-38",
      title: "r2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-38-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 10,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".roott-select",
                  selectorGuids: ["5a7baf40-2e85-50d2-2777-c7ec599e4dcf"],
                },
                widthValue: 0,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1711348696842,
    },
    "a-25": {
      id: "a-25",
      title: "🪗 BRIX - Accordion V3 Open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-25-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---acordion-body",
                  selectorGuids: ["14aa3b72-5bf9-b1dd-1459-3640ef5c0ca2"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-25-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---acordion-body",
                  selectorGuids: ["14aa3b72-5bf9-b1dd-1459-3640ef5c0ca2"],
                },
                xValue: 0.96,
                yValue: 0.96,
                locked: true,
              },
            },
            {
              id: "a-25-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---acordion-body",
                  selectorGuids: ["14aa3b72-5bf9-b1dd-1459-3640ef5c0ca2"],
                },
                xValue: null,
                yValue: 20,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---acordion-body",
                  selectorGuids: ["14aa3b72-5bf9-b1dd-1459-3640ef5c0ca2"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-25-n-5",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---acordion-body",
                  selectorGuids: ["14aa3b72-5bf9-b1dd-1459-3640ef5c0ca2"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-25-n-6",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 100,
                target: {},
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-25-n-7",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---acordion-body",
                  selectorGuids: ["14aa3b72-5bf9-b1dd-1459-3640ef5c0ca2"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-25-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---acordion-body",
                  selectorGuids: ["14aa3b72-5bf9-b1dd-1459-3640ef5c0ca2"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutQuad",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".brix---acordion-body",
                  selectorGuids: ["14aa3b72-5bf9-b1dd-1459-3640ef5c0ca2"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1637427899795,
    },
    "a-42": {
      id: "a-42",
      title: "r-info-menu",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-42-n-3",
              actionTypeId: "PLUGIN_VARIABLE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                value: { size: 0, unit: "%" },
                target: {
                  objectId: "--rmenu1",
                  selector: ".right-info-menu",
                  selectorGuids: ["5f1fbccf-9977-fefc-2558-3386bbdc4d29"],
                },
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-42-n-2",
              actionTypeId: "PLUGIN_VARIABLE",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                value: { size: 50, unit: "%" },
                target: {
                  objectId: "--rmenu1",
                  selector: ".right-info-menu",
                  selectorGuids: ["5f1fbccf-9977-fefc-2558-3386bbdc4d29"],
                },
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1711538304031,
    },
    "a-43": {
      id: "a-43",
      title: "r-info-menu 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-43-n",
              actionTypeId: "PLUGIN_VARIABLE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                value: { size: 50, unit: "%" },
                target: {
                  objectId: "--rmenu1",
                  selector: ".right-info-menu",
                  selectorGuids: ["5f1fbccf-9977-fefc-2558-3386bbdc4d29"],
                },
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-43-n-2",
              actionTypeId: "PLUGIN_VARIABLE",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                value: { size: 0, unit: "%" },
                target: {
                  objectId: "--rmenu1",
                  selector: ".right-info-menu",
                  selectorGuids: ["5f1fbccf-9977-fefc-2558-3386bbdc4d29"],
                },
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1711538304031,
    },
    "a-44": {
      id: "a-44",
      title: "r-m-s",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-44-n",
              actionTypeId: "PLUGIN_VARIABLE",
              config: {
                delay: 0,
                easing: "",
                duration: 10,
                value: { size: 0, unit: "%" },
                target: {
                  objectId: "--rmenu1",
                  id: "65fea9e02989eb1e11bd7221|5432e888-ce5f-325c-8aba-122695d7388d",
                },
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1711540236633,
    },
    "a-47": {
      id: "a-47",
      title: "r-mob-1 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-47-n-2",
              actionTypeId: "PLUGIN_VARIABLE",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                value: { size: 0, unit: "%" },
                target: {
                  objectId: "--rmenu-mob-1",
                  useEventTarget: true,
                  id: "65fea9e02989eb1e11bd7221|56598885-8e35-0831-5b5c-661cb94fd5bd",
                },
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-47-n",
              actionTypeId: "PLUGIN_VARIABLE",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 100,
                value: { size: 95, unit: "%" },
                target: {
                  objectId: "--rmenu-mob-1",
                  useEventTarget: true,
                  id: "65fea9e02989eb1e11bd7221|56598885-8e35-0831-5b5c-661cb94fd5bd",
                },
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1711541266429,
    },
    "a-46": {
      id: "a-46",
      title: "r-mob-1 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-46-n",
              actionTypeId: "PLUGIN_VARIABLE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                value: { size: 95, unit: "%" },
                target: {
                  objectId: "--rmenu-mob-1",
                  useEventTarget: true,
                  id: "65fea9e02989eb1e11bd7221|56598885-8e35-0831-5b5c-661cb94fd5bd",
                },
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-46-n-2",
              actionTypeId: "PLUGIN_VARIABLE",
              config: {
                delay: 0,
                easing: "",
                duration: 100,
                value: { size: 0, unit: "%" },
                target: {
                  objectId: "--rmenu-mob-1",
                  useEventTarget: true,
                  id: "65fea9e02989eb1e11bd7221|56598885-8e35-0831-5b5c-661cb94fd5bd",
                },
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1711541266429,
    },
    "a-41": {
      id: "a-41",
      title: "op2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-41-n",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 200,
                target: {
                  useEventTarget: true,
                  id: "65fea9e02989eb1e11bd7221|3ab3cf2d-d6fa-e347-7f66-fa4dc65cd817",
                },
                filters: [
                  { type: "grayscale", filterId: "5690", value: 0, unit: "%" },
                ],
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1711532765115,
    },
    "a-40": {
      id: "a-40",
      title: "op1",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-40-n",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 200,
                target: {
                  useEventTarget: true,
                  id: "65fea9e02989eb1e11bd7221|3ab3cf2d-d6fa-e347-7f66-fa4dc65cd817",
                },
                filters: [
                  { type: "grayscale", filterId: "9eea", value: 90, unit: "%" },
                ],
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1711532570091,
    },
    fadeIn: {
      id: "fadeIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
