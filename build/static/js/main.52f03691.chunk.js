(this["webpackJsonpchat-app"] = this["webpackJsonpchat-app"] || []).push([
  [0], {
    41: function (e, t, n) {},
    42: function (e, t, n) {},
    43: function (e, t, n) {},
    76: function (e, t, n) {
      "use strict";
      n.r(t);
      var c = n(1),
        s = n.n(c),
        a = n(34),
        l = n.n(a),
        i = (n(41), n(7)),
        r = (n(42), n(36)),
        o = (n(43), n(35)),
        j = n.n(o),
        u = n(0),
        b = j.a.connect(),
        m = function (e) {
          var t = Object(c.useState)(!1),
            n = Object(i.a)(t, 2),
            s = n[0],
            a = n[1],
            l = Object(c.useState)(""),
            o = Object(i.a)(l, 2),
            j = o[0],
            m = o[1],
            d = Object(c.useState)([]),
            h = Object(i.a)(d, 2),
            O = h[0],
            p = h[1];
          return Object(c.useEffect)((function () {
            b.on("msg-from-server", (function (e) {
              p([].concat(Object(r.a)(O), [e]))
            }))
          })), Object(u.jsxs)("div", {
            className: "chat",
            children: [Object(u.jsxs)("p", {
              children: ["Hello ", e.name, " !"]
            }), Object(u.jsx)("div", {
              className: "messages",
              id: "messages",
              children: 0 !== O.length ? O.map((function (e) {
                return Object(u.jsx)("div", {
                  className: "messageDiv",
                  children: Object(u.jsx)("p", {
                    className: "message",
                    children: e
                  })
                })
              })) : null
            }), s ? Object(u.jsx)("p", {
              className: "err",
              children: "You cant send empty message"
            }) : null, Object(u.jsxs)("div", {
              className: "input-group mb-3",
              children: [Object(u.jsx)("input", {
                type: "text",
                className: "form-control",
                placeholder: "Enter message",
                value: j,
                onChange: function (e) {
                  return m(e.target.value)
                }
              }), Object(u.jsx)("button", {
                className: "btn btn-primary",
                type: "button",
                onClick: function () {
                  if (0 !== j.length) {
                    a(!1);
                    var t = e.name + ": " + j;
                    b.emit("msg-from-client", t), m("");
                    var n = document.getElementById("messages");
                    null !== n.lastChild && setTimeout((function () {
                      n.lastChild.scrollIntoView()
                    }), 1e3)
                  } else a(!0)
                },
                children: "Send"
              })]
            })]
          })
        };
      var d = function () {
          var e = Object(c.useState)(),
            t = Object(i.a)(e, 2),
            n = t[0],
            s = t[1],
            a = Object(c.useState)(!1),
            l = Object(i.a)(a, 2),
            r = l[0],
            o = l[1],
            j = Object(c.useState)(!1),
            b = Object(i.a)(j, 2),
            d = b[0],
            h = b[1];
          return Object(u.jsxs)("div", {
            className: "App",
            children: [Object(u.jsx)("h1", {
              children: "Online Chat"
            }), r ? Object(u.jsx)(m, {
              name: n
            }) : Object(u.jsxs)("div", {
              className: "login",
              children: [Object(u.jsx)("p", {
                children: "Enter nickname :"
              }), d ? Object(u.jsx)("p", {
                className: "err",
                children: "The nickname must contain at least 3 letters"
              }) : null, Object(u.jsxs)("div", {
                className: "input-group mb-3",
                children: [Object(u.jsx)("input", {
                  type: "text",
                  className: "form-control",
                  placeholder: "Nickname",
                  onChange: function (e) {
                    return s(e.target.value)
                  }
                }), Object(u.jsx)("button", {
                  className: "btn btn-primary",
                  type: "button",
                  onClick: function () {
                    !n || n.length < 3 ? h(!0) : (h(!1), o(!0))
                  },
                  children: "Enter"
                })]
              })]
            })]
          })
        },
        h = function (e) {
          e && e instanceof Function && n.e(3).then(n.bind(null, 77)).then((function (t) {
            var n = t.getCLS,
              c = t.getFID,
              s = t.getFCP,
              a = t.getLCP,
              l = t.getTTFB;
            n(e), c(e), s(e), a(e), l(e)
          }))
        };
      l.a.render(Object(u.jsx)(s.a.StrictMode, {
        children: Object(u.jsx)(d, {})
      }), document.getElementById("root")), h()
    }
  },
  [
    [76, 1, 2]
  ]
]);
//# sourceMappingURL=main.52f03691.chunk.js.map