(() => {
  var t = {
      629: () => {
        function t(n) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(n)
          );
        }
        function n(t, n) {
          for (var e = 0; e < n.length; e++) {
            var r = n[e];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, a(r.key), r);
          }
        }
        function e(t) {
          var n = "function" == typeof Map ? new Map() : void 0;
          return (
            (e = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (n) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== n) {
                if (n.has(t)) return n.get(t);
                n.set(t, e);
              }
              function e() {
                return (function (t, n, e) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, n);
                  var a = new (t.bind.apply(t, i))();
                  return e && o(a, e.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (e.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(e, t)
              );
            }),
            e(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, n) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, n) {
                  return (t.__proto__ = n), t;
                }),
            o(t, n)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(n) {
          var e = (function (n) {
            if ("object" != t(n) || !n) return n;
            var e = n[Symbol.toPrimitive];
            if (void 0 !== e) {
              var r = e.call(n, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(n);
          })(n);
          return "symbol" == t(e) ? e : e + "";
        }
        var s = (function (e) {
          function s() {
            var n, e, o;
            return (
              (function (t, n) {
                if (!(t instanceof n))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              (n = (function (n, e, o) {
                return (
                  (e = i(e)),
                  (function (n, e) {
                    if (e && ("object" == t(e) || "function" == typeof e))
                      return e;
                    if (void 0 !== e)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (t) {
                      if (void 0 === t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t;
                    })(n);
                  })(
                    n,
                    r()
                      ? Reflect.construct(e, o || [], i(n).constructor)
                      : e.apply(n, o),
                  )
                );
              })(this, s)),
              (e = n),
              (o = a((o = "_shadowRoot"))) in e
                ? Object.defineProperty(e, o, {
                    value: null,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[o] = null),
              (n._shadowRoot = n.attachShadow({ mode: "open" })),
              n
            );
          }
          return (
            (function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(n && n.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                n && o(t, n);
            })(s, e),
            (c = s),
            (u = [
              {
                key: "emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "render",
                value: function () {
                  this.emptyContent();
                  var t = document.createElement("link");
                  t.setAttribute("rel", "stylesheet"),
                    t.setAttribute("href", "src/style/style.css"),
                    this._shadowRoot.appendChild(t),
                    (this._shadowRoot.innerHTML +=
                      "\n       <footer-bar>\n            <p>&copy; 2024 - Aplikasi Pencatatan Online oleh Sarif Hidayatullah</p>\n       </footer-bar>\n       ");
                },
              },
            ]) && n(c.prototype, u),
            Object.defineProperty(c, "prototype", { writable: !1 }),
            c
          );
          var c, u;
        })(e(HTMLElement));
        customElements.define("footer-bar", s);
      },
      151: () => {
        function t(n) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(n)
          );
        }
        function n(t, n) {
          for (var e = 0; e < n.length; e++) {
            var r = n[e];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, s(r.key), r);
          }
        }
        function e(t) {
          var n = "function" == typeof Map ? new Map() : void 0;
          return (
            (e = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (n) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== n) {
                if (n.has(t)) return n.get(t);
                n.set(t, e);
              }
              function e() {
                return (function (t, n, e) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, n);
                  var a = new (t.bind.apply(t, i))();
                  return e && o(a, e.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (e.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(e, t)
              );
            }),
            e(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, n) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, n) {
                  return (t.__proto__ = n), t;
                }),
            o(t, n)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, n, e) {
          return (
            (n = s(n)) in t
              ? Object.defineProperty(t, n, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = e),
            t
          );
        }
        function s(n) {
          var e = (function (n) {
            if ("object" != t(n) || !n) return n;
            var e = n[Symbol.toPrimitive];
            if (void 0 !== e) {
              var r = e.call(n, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(n);
          })(n);
          return "symbol" == t(e) ? e : e + "";
        }
        var c = (function (e) {
          function s() {
            var n;
            return (
              (function (t, n) {
                if (!(t instanceof n))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              a(
                (n = (function (n, e, o) {
                  return (
                    (e = i(e)),
                    (function (n, e) {
                      if (e && ("object" == t(e) || "function" == typeof e))
                        return e;
                      if (void 0 !== e)
                        throw new TypeError(
                          "Derived constructors may only return object or undefined",
                        );
                      return (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t;
                      })(n);
                    })(
                      n,
                      r()
                        ? Reflect.construct(e, o || [], i(n).constructor)
                        : e.apply(n, o),
                    )
                  );
                })(this, s)),
                "_shadowRoot",
                null,
              ),
              a(n, "_style", null),
              (n._shadowRoot = n.attachShadow({ mode: "open" })),
              (n._style = document.createElement("style")),
              n
            );
          }
          return (
            (function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(n && n.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                n && o(t, n);
            })(s, e),
            (c = s),
            (u = [
              {
                key: "_updateStyle",
                value: function () {
                  this._style.textContent =
                    "\n            :host {\n                display: block;\n            }\n\n            nav {\n              display: flex;\n              background-color: #005792;\n              width: 100%;\n              justify-content: center;\n              padding: 16px;\n              position: fixed;\n              z-index: 1;\n\n            }\n\n            nav .title-app {\n              color: white;\n              font-size: 1em;\n            }\n        ";
                },
              },
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "connectedCallback",
                value: function () {
                  this.render();
                },
              },
              {
                key: "render",
                value: function () {
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n      <nav>    \n        <div class="title-app">\n          <h1>Aplikasi Pencatatan Online</h1>\n        </div>\n      </nav>\n    ');
                },
              },
            ]) && n(c.prototype, u),
            Object.defineProperty(c, "prototype", { writable: !1 }),
            c
          );
          var c, u;
        })(e(HTMLElement));
        customElements.define("header-bar", c);
      },
      17: () => {
        function t(n) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(n)
          );
        }
        function n(t, n) {
          for (var e = 0; e < n.length; e++) {
            var r = n[e];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, s(r.key), r);
          }
        }
        function e(t) {
          var n = "function" == typeof Map ? new Map() : void 0;
          return (
            (e = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (n) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== n) {
                if (n.has(t)) return n.get(t);
                n.set(t, e);
              }
              function e() {
                return (function (t, n, e) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, n);
                  var a = new (t.bind.apply(t, i))();
                  return e && o(a, e.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (e.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(e, t)
              );
            }),
            e(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, n) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, n) {
                  return (t.__proto__ = n), t;
                }),
            o(t, n)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, n, e) {
          return (
            (n = s(n)) in t
              ? Object.defineProperty(t, n, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = e),
            t
          );
        }
        function s(n) {
          var e = (function (n) {
            if ("object" != t(n) || !n) return n;
            var e = n[Symbol.toPrimitive];
            if (void 0 !== e) {
              var r = e.call(n, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(n);
          })(n);
          return "symbol" == t(e) ? e : e + "";
        }
        var c = (function (e) {
          function s() {
            var n;
            return (
              (function (t, n) {
                if (!(t instanceof n))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              a(
                (n = (function (n, e, o) {
                  return (
                    (e = i(e)),
                    (function (n, e) {
                      if (e && ("object" == t(e) || "function" == typeof e))
                        return e;
                      if (void 0 !== e)
                        throw new TypeError(
                          "Derived constructors may only return object or undefined",
                        );
                      return (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t;
                      })(n);
                    })(
                      n,
                      r()
                        ? Reflect.construct(e, o || [], i(n).constructor)
                        : e.apply(n, o),
                    )
                  );
                })(this, s)),
                "_shadowRoot",
                null,
              ),
              a(n, "_style", null),
              (n._shadowRoot = n.attachShadow({ mode: "open" })),
              (n._style = document.createElement("style")),
              n
            );
          }
          return (
            (function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(n && n.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                n && o(t, n);
            })(s, e),
            (c = s),
            (u = [
              {
                key: "_updateStyle",
                value: function () {
                  this._style.textContent =
                    '\n    :host {\n      display: block;\n    }\n    \n    * {\n      font-family: "Nunito", sans-serif;\n    }\n\n    .note-wrapper {\n      display: flex;\n      width: 100%;\n      align-items: center;\n      padding-top: 10%;\n      flex-direction: column;\n    }\n\n    .note-form-wrapper {\n      background-color: white;\n      opacity: 0.8;\n      border: none;\n      border-radius: 10px;\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n      justify-content: center;\n      padding: 2em;\n      width: 100%;\n      max-width: 400px;\n      margin: auto;\n    }\n\n    .form-title,\n    .form-description {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      margin-bottom: 1em;\n    }\n\n    .info-group {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      width: 100%;\n      margin-top: 5px;\n    }\n\n    .error-message {\n      color: #ef5a6f;\n      font-size: 0.75rem;\n      margin: 0;\n      flex: 1;\n      text-align: left;\n    }\n\n    .char-count {\n      color: #666;\n      font-size: 0.75rem;\n      margin: 0;\n      flex: 0;\n      text-align: right;\n    }\n\n    #note-title,\n    #note-description {\n      padding-right: 3em;\n    }\n\n    .note-form-wrapper h1 {\n      text-align: center;\n      margin-bottom: 1em;\n      font-weight: 700;\n      font-size: 24px;\n      width: 100%;\n    }\n\n    .note-form {\n      display: grid;\n      grid-template-columns: 1fr;\n      grid-gap: 1em;\n      width: 100%;\n    }\n\n    .note-form .form-title {\n      width: 100%;\n      margin-bottom: auto;\n    }\n\n    .note-form .form-title input {\n      font-size: 1rem;\n      width: 100%;\n      margin-bottom: 10px;\n      padding: 10px;\n      box-sizing: border-box;\n    }\n\n    .note-form .form-description {\n      width: 100%;\n    }\n\n    .note-form .form-description textarea {\n      font-size: 1rem;\n      padding: 6px;\n      width: 100%;\n      height: 9rem;\n      box-sizing: border-box;\n    }\n\n    .note-form .form-group {\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n\n    .form-description {\n      margin-bottom: 1em;\n    }\n\n    .note-form .form-group button {\n      color: black;\n      font-weight: 600;\n      font-size: 1rem;\n      line-height: 1.5rem;\n      background-color: #ffb200;\n      padding-top: 0.4rem;\n      padding-bottom: 0.4rem;\n      padding-left: 2rem;\n      padding-right: 2rem;\n      border-radius: 5px;\n      transition: all 0.2s ease-in-out;\n      border: white;\n      width: 100%;\n      cursor: pointer;\n    }\n\n    .note-form .form-group button:hover {\n      opacity: 0.8;\n    }\n\n    .note-form .form-group button:disabled {\n      background-color: #ccc;\n      cursor: not-allowed;\n    }\n\n\n  @media screen and (max-width: 768px) {\n    .wrapper {\n        padding-top: 20%;\n    }\n\n    .wrapper .form-wrapper {\n      width: 50%;\n    }\n  }\n\n  @media screen and (max-width: 576px) {\n    .wrapper {\n        padding-top: 25%;\n    }\n\n    .note-wrapper {\n      padding-top: 25%;\n    }\n\n    .note-form-wrapper {\n      padding: 1em;\n      max-width: 60%;\n      align-items: center;\n      justify-items: center;\n    }\n\n    .note-form .form-title input,\n    .note-form .form-description textarea,\n    .note-form .form-group button {\n      font-size: 0.8rem; /* Mengurangi ukuran font lebih lanjut */\n      padding: 6px;\n    }\n  }\n    ';
                },
              },
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "connectedCallback",
                value: function () {
                  var t = this;
                  this.render();
                  var n = this._shadowRoot.querySelector("#note-title"),
                    e = this._shadowRoot.querySelector("#note-description"),
                    r = this._shadowRoot.querySelector(".btn-submit"),
                    o = function () {
                      var t = n.value.length >= 5 && n.value.length <= 30,
                        o = e.value.length >= 15 && e.value.length <= 120;
                      r.disabled = !(t && o);
                    };
                  n.addEventListener("input", function () {
                    t._updateTitleCharCount(), t._validateTitle(), o();
                  }),
                    e.addEventListener("input", function () {
                      t._updateDescriptionCharCount(),
                        t._validateDescription(),
                        o();
                    }),
                    o();
                },
              },
              {
                key: "_handleSubmit",
                value: function (t) {
                  t.preventDefault();
                  var n = this._shadowRoot.querySelector("#note-title"),
                    e = this._shadowRoot.querySelector("#note-description"),
                    r = this._shadowRoot.querySelector("#title-error"),
                    o = this._shadowRoot.querySelector("#description-error"),
                    i = n.value.trim(),
                    a = e.value.trim();
                  (r.textContent = ""), (o.textContent = "");
                  var s = !1;
                  if (
                    (i.length < 5
                      ? ((r.textContent =
                          "Judul catatan harus memiliki minimal ".concat(
                            5,
                            " karakter.",
                          )),
                        (s = !0))
                      : i.length > 30 &&
                        ((r.textContent =
                          "Judul catatan tidak boleh melebihi 30 karakter."),
                        (s = !0)),
                    a.length < 15
                      ? ((o.textContent =
                          "Deskripsi catatan harus memiliki minimal ".concat(
                            15,
                            " karakter.",
                          )),
                        (s = !0))
                      : a.length > 120 &&
                        ((o.textContent =
                          "Deskripsi catatan tidak boleh melebihi 120 karakter."),
                        (s = !0)),
                    !s)
                  ) {
                    var c = {
                      id: "notes-".concat(
                        Math.random().toString(36).substring(2, 9),
                      ),
                      title: i,
                      body: a,
                      createdAt: new Date().toISOString(),
                      archived: !1,
                    };
                    this.dispatchEvent(
                      new CustomEvent("note-added", { detail: c }),
                    ),
                      (n.value = ""),
                      (e.value = "");
                    var u = this._shadowRoot.querySelector("#title-char-count"),
                      l = this._shadowRoot.querySelector(
                        "#description-char-count",
                      );
                    (u.textContent = "0/30"), (l.textContent = "0/120");
                  }
                },
              },
              {
                key: "_updateTitleCharCount",
                value: function () {
                  var t = this._shadowRoot.querySelector("#note-title");
                  this._shadowRoot.querySelector(
                    "#title-char-count",
                  ).textContent = "".concat(t.value.length, "/30");
                },
              },
              {
                key: "_updateDescriptionCharCount",
                value: function () {
                  var t = this._shadowRoot.querySelector("#note-description");
                  this._shadowRoot.querySelector(
                    "#description-char-count",
                  ).textContent = "".concat(t.value.length, "/120");
                },
              },
              {
                key: "_validateTitle",
                value: function () {
                  var t = this._shadowRoot.querySelector("#note-title"),
                    n = this._shadowRoot.querySelector("#title-error");
                  t.value.length < 5
                    ? ((n.textContent =
                        "Judul catatan harus memiliki minimal 5 karakter."),
                      (n.style.display = "block"))
                    : t.value.length > 30
                      ? ((n.textContent =
                          "Judul catatan tidak boleh melebihi 30 karakter."),
                        (n.style.display = "block"))
                      : ((n.textContent = ""), (n.style.display = "none"));
                },
              },
              {
                key: "_validateDescription",
                value: function () {
                  var t = this._shadowRoot.querySelector("#note-description"),
                    n = this._shadowRoot.querySelector("#description-error");
                  t.value.length < 15
                    ? ((n.textContent =
                        "Deskripsi catatan harus memiliki minimal 15 karakter."),
                      (n.style.display = "block"))
                    : t.value.length > 120
                      ? ((n.textContent =
                          "Deskripsi catatan tidak boleh melebihi 120 karakter."),
                        (n.style.display = "block"))
                      : ((n.textContent = ""), (n.style.display = "none"));
                },
              },
              {
                key: "render",
                value: function () {
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n    <div class="note-wrapper">\n      <div class="note-form-wrapper">\n        <h1>Menambahkan Catatan Baru</h1>\n        <form class="note-form" id="note-form">\n          <div class="form-title">\n            <label for="note-title"></label>\n            <input type="text" id="note-title" placeholder="Masukkan judul catatan" />\n            <span class="info-group">\n              <p id="title-error" class="error-message"></p>\n              <span class="char-count" id="title-char-count">0/30</span>\n            </span>\n          </div>\n          <div class="form-description">\n            <label for="note-description"></label>\n            <textarea id="note-description" placeholder="Masukkan deskripsi catatan"></textarea>\n            <span class="info-group">\n              <p id="description-error" class="error-message"></p>\n              <span class="char-count" id="description-char-count">0/120</span>\n            </span>\n          </div>\n          <div class="form-group">\n            <button type="submit" class="btn-submit" disabled>Simpan Catatanku</button>\n          </div>\n        </form>\n      </div>\n    </div>\n    '),
                    this._shadowRoot
                      .querySelector("form")
                      .addEventListener(
                        "submit",
                        this._handleSubmit.bind(this),
                      );
                },
              },
            ]) && n(c.prototype, u),
            Object.defineProperty(c, "prototype", { writable: !1 }),
            c
          );
          var c, u;
        })(e(HTMLElement));
        customElements.define("note-form", c);
      },
      831: () => {
        function t(n) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            t(n)
          );
        }
        function n(t, n) {
          for (var e = 0; e < n.length; e++) {
            var r = n[e];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, s(r.key), r);
          }
        }
        function e(t) {
          var n = "function" == typeof Map ? new Map() : void 0;
          return (
            (e = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf("[native code]")
                    );
                  } catch (n) {
                    return "function" == typeof t;
                  }
                })(t)
              )
                return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== n) {
                if (n.has(t)) return n.get(t);
                n.set(t, e);
              }
              function e() {
                return (function (t, n, e) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, n);
                  var a = new (t.bind.apply(t, i))();
                  return e && o(a, e.prototype), a;
                })(t, arguments, i(this).constructor);
              }
              return (
                (e.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(e, t)
              );
            }),
            e(t)
          );
        }
        function r() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (t) {}
          return (r = function () {
            return !!t;
          })();
        }
        function o(t, n) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, n) {
                  return (t.__proto__ = n), t;
                }),
            o(t, n)
          );
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            i(t)
          );
        }
        function a(t, n, e) {
          return (
            (n = s(n)) in t
              ? Object.defineProperty(t, n, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[n] = e),
            t
          );
        }
        function s(n) {
          var e = (function (n) {
            if ("object" != t(n) || !n) return n;
            var e = n[Symbol.toPrimitive];
            if (void 0 !== e) {
              var r = e.call(n, "string");
              if ("object" != t(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(n);
          })(n);
          return "symbol" == t(e) ? e : e + "";
        }
        var c = (function (e) {
          function s() {
            var n;
            return (
              (function (t, n) {
                if (!(t instanceof n))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              a(
                (n = (function (n, e, o) {
                  return (
                    (e = i(e)),
                    (function (n, e) {
                      if (e && ("object" == t(e) || "function" == typeof e))
                        return e;
                      if (void 0 !== e)
                        throw new TypeError(
                          "Derived constructors may only return object or undefined",
                        );
                      return (function (t) {
                        if (void 0 === t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t;
                      })(n);
                    })(
                      n,
                      r()
                        ? Reflect.construct(e, o || [], i(n).constructor)
                        : e.apply(n, o),
                    )
                  );
                })(this, s)),
                "_shadowRoot",
                null,
              ),
              a(n, "_style", null),
              a(n, "_note", {
                id: null,
                title: null,
                body: null,
                createdAt: null,
              }),
              (n._shadowRoot = n.attachShadow({ mode: "open" })),
              (n._style = document.createElement("style")),
              n
            );
          }
          return (
            (function (t, n) {
              if ("function" != typeof n && null !== n)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(n && n.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                n && o(t, n);
            })(s, e),
            (c = s),
            (u = [
              {
                key: "_emptyContent",
                value: function () {
                  this._shadowRoot.innerHTML = "";
                },
              },
              {
                key: "note",
                get: function () {
                  return this._note;
                },
                set: function (t) {
                  (this._note = t), this.render();
                },
              },
              {
                key: "_updateStyle",
                value: function () {
                  this._style.textContent =
                    '\n    :host {\n      display: block;\n    }\n    \n    * {\n      font-family: "Nunito", sans-serif;\n    }\n    \n    .note-list {\n      display: block;\n    }\n\n    .note-list .grid-wrapper {\n      padding-top: 5%;\n      display: grid;\n    }\n\n    .note-list .grid-wrapper .all-notes {\n      padding-top: 1em;\n      text-align: center;\n    }\n\n    .note-list .grid-wrapper hr {\n      width: 90%;\n      border: 1.8px solid #ffb200;\n      margin: 1em auto;\n    }\n\n    .note-list .grid-wrapper .grid-container {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n      align-items: center;\n      justify-items: center;\n      gap: 2em;\n      padding: 2em;\n    }\n\n    .note-list .grid-wrapper .grid-container .card .desc {\n      padding-top: 1em;\n      font-size: 0.9em;\n      line-height: 1.5em;\n      color: #333;\n      display: -webkit-box; /* Menggunakan box model */\n      -webkit-box-orient: vertical; /* Mengatur orientasi box secara vertikal */\n      -webkit-line-clamp: 2; /* Menampilkan maksimal 2 baris */\n      overflow: hidden; /* Mengatur overflow teks agar tidak meluap */\n      text-overflow: ellipsis; /* Menambahkan titik tiga jika teks terlalu panjang */\n    }\n\n    .note-list .grid-wrapper .grid-container .card {\n      background-color: white;\n      opacity: 0.8;\n      border: none;\n      border-radius: 10px;\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n      width: 100%;\n      max-width: 300px;\n      height: 100%;\n      padding: 1em;\n      text-align: left;\n    }\n\n    .note-list .grid-wrapper .grid-container .card h4 {\n      margin-bottom: 0.5em;\n      font-size: 1.2em;\n    }\n\n    .note-list .grid-wrapper .grid-container .card .date {\n      font-size: 0.7em;\n      margin-top: -9px;\n      color: #666;\n    }\n\n    .note-list .grid-wrapper .grid-container .card .desc {\n      padding-top: 1em;\n      font-size: 0.9em;\n      line-height: 1.5em;\n      color: #333;\n    }\n        .card-note .note-delete {\n            padding-top: 1em;\n        }\n\n        .note-delete .button-delete {\n            background-color: red;\n            color: white;\n            border: none;\n            border-radius: 5px;\n            padding: 8px;\n            cursor: pointer;\n        }\n    ';
                },
              },
              {
                key: "render",
                value: function () {
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n\n    \x3c!-- Wrapper utama untuk grid --\x3e\n    <div class="grid-wrapper">\n\n    \x3c!-- Judul halaman --\x3e\n    <h1 class="all-notes">Semua Catatan</h1>\n    <hr>\n\n    \x3c!-- Kontainer untuk card catatan --\x3e\n    <div class="grid-container">\n\n    \x3c!-- Iterasi melalui array catatan dan menampilkan setiap catatan --\x3e\n    '.concat(
                        this._note
                          .map(function (t) {
                            return '\n    <div class="card-note">\n      \x3c!-- Judul catatan --\x3e\n      <h4>'
                              .concat(
                                t.title,
                                '</h4>\n                    \n      \x3c!-- Tanggal pembuatan catatan --\x3e\n      <p class="date">\n        ',
                              )
                              .concat(
                                new Date(t.createdAt).toLocaleTimeString(
                                  "id-ID",
                                  {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    hour12: !1,
                                  },
                                ),
                                ", - ",
                              )
                              .concat(
                                new Date(t.createdAt).toLocaleDateString(
                                  "id-ID",
                                  {
                                    weekday: "long",
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                  },
                                ),
                                '\n      </p>\n                    \n      \x3c!-- Deskripsi catatan --\x3e\n      <p class="desc">',
                              )
                              .concat(
                                t.body,
                                '</p>\n\n      \x3c!-- Bagian untuk tombol hapus catatan --\x3e\n      <div class="note-delete">\n      <button class="button-delete" type="button" data-id="',
                              )
                              .concat(
                                t.id,
                                '">Hapus</button>\n      </div>\n    </div>\n    ',
                              );
                          })
                          .join(""),
                        "\n\n    </div>\n    </div>\n\n    ",
                      ));
                },
              },
            ]) && n(c.prototype, u),
            Object.defineProperty(c, "prototype", { writable: !1 }),
            c
          );
          var c, u;
        })(e(HTMLElement));
        customElements.define("note-list", c);
      },
      106: (t, n, e) => {
        "use strict";
        e.d(n, { A: () => s });
        var r = e(601),
          o = e.n(r),
          i = e(314),
          a = e.n(i)()(o());
        a.push([
          t.id,
          '* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: "Nunito", sans-serif;\n}\n\nbody {\n  background-color: #edf9fc;\n}\n\nmain {\n  padding-bottom: 2em;\n}\n\n/* Loading Indicator Styles */\n.loadingIndicator {\n  position: fixed;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-25%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: "Poppins", sans-serif;\n}\n\n.dots-loader {\n  display: flex;\n  align-items: center;\n}\n\n.dot {\n  width: 8px;\n  height: 8px;\n  margin: 0 4px;\n  background-color: black;\n  border-radius: 70%;\n  animation: bounce 1.6s infinite ease-in-out;\n}\n\n.dot:nth-child(2) {\n  animation-delay: 0.4s;\n}\n\n.dot:nth-child(3) {\n  animation-delay: 0.6s;\n}\n\n@keyframes bounce {\n  0%,\n  80%,\n  100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-10px);\n  }\n}\n\n.text-load {\n  margin-left: 10px;\n  font-size: 1rem;\n}\n\n/* Note List */\n.note-list {\n  display: block;\n}\n\n.note-list .grid-wrapper {\n  padding-top: 5%;\n  display: grid;\n}\n\n.note-list .grid-wrapper .all-notes {\n  padding-top: 1em;\n  text-align: center;\n}\n\n.note-list .grid-wrapper hr {\n  width: 90%;\n  border: 1.8px solid #ffb200;\n  margin: 1em auto;\n}\n\n.note-list .grid-wrapper .grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  align-items: center;\n  justify-items: center;\n  gap: 2em;\n  padding: 2em;\n}\n\n.note-list .grid-wrapper .grid-container .card {\n  background-color: white;\n  opacity: 0.8;\n  border: none;\n  border-radius: 10px;\n  box-shadow:\n    0 4px 8px 0 rgba(0, 0, 0, 0.2),\n    0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  width: 100%;\n  max-width: 300px;\n  height: 100%;\n  padding: 1em;\n  text-align: left;\n}\n\n.note-list .grid-wrapper .grid-container .card h4 {\n  margin-bottom: 0.5em;\n  font-size: 1.2em;\n}\n\n.note-list .grid-wrapper .grid-container .card .date {\n  font-size: 0.7em;\n  margin-top: -9px;\n  color: #666;\n}\n\n.note-list .grid-wrapper .grid-container .card .desc {\n  padding-top: 1em;\n  font-size: 0.9em;\n  line-height: 1.5em;\n  color: #333;\n}\n\n/* Footer */\nfooter {\n  display: flex;\n  background-color: #d1f4fa;\n  height: 60px;\n  align-items: center;\n  justify-content: center;\n  bottom: 0;\n  margin-top: 72px;\n  color: black;\n  padding: 15px;\n  font-size: 12px;\n}\n\n/* Media Query */\n@media screen and (max-width: 768px) {\n  nav {\n    padding: 20px;\n  }\n\n  .wrapper {\n    padding-top: 20%;\n  }\n\n  .wrapper .form-wrapper {\n    width: 50%;\n  }\n  .note-wrapper {\n    padding-top: 20%;\n  }\n\n  .note-form-wrapper {\n    padding: 1.5em;\n    max-width: 80%; /* Memperluas form di layar kecil */\n  }\n\n  .note-form .form-title input,\n  .note-form .form-description textarea,\n  .note-form .form-group button {\n    font-size: 0.9rem; /* Mengurangi ukuran font */\n    padding: 8px;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  nav {\n    padding: 16px;\n  }\n\n  .wrapper {\n    padding-top: 30%;\n  }\n\n  .note-wrapper {\n    padding-top: 40%;\n  }\n\n  .note-form-wrapper {\n    padding: 1em;\n    max-width: 200px;\n    align-items: center;\n    justify-items: center;\n  }\n\n  .note-form .form-title input,\n  .note-form .form-description textarea,\n  .note-form .form-group button {\n    font-size: 0.8rem; /* Mengurangi ukuran font lebih lanjut */\n    padding: 6px;\n  }\n}\n',
          "",
        ]);
        const s = a;
      },
      314: (t) => {
        "use strict";
        t.exports = function (t) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var e = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (e += "@supports (".concat(n[4], ") {")),
                  n[2] && (e += "@media ".concat(n[2], " {")),
                  r &&
                    (e += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {",
                    )),
                  (e += t(n)),
                  r && (e += "}"),
                  n[2] && (e += "}"),
                  n[4] && (e += "}"),
                  e
                );
              }).join("");
            }),
            (n.i = function (t, e, r, o, i) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (a[c] = !0);
                }
              for (var u = 0; u < t.length; u++) {
                var l = [].concat(t[u]);
                (r && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  e &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = e))
                      : (l[2] = e)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  n.push(l));
              }
            }),
            n
          );
        };
      },
      601: (t) => {
        "use strict";
        t.exports = function (t) {
          return t[1];
        };
      },
      72: (t) => {
        "use strict";
        var n = [];
        function e(t) {
          for (var e = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === t) {
              e = r;
              break;
            }
          return e;
        }
        function r(t, r) {
          for (var i = {}, a = [], s = 0; s < t.length; s++) {
            var c = t[s],
              u = r.base ? c[0] + r.base : c[0],
              l = i[u] || 0,
              p = "".concat(u, " ").concat(l);
            i[u] = l + 1;
            var d = e(p),
              f = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== d) n[d].references++, n[d].updater(f);
            else {
              var h = o(f, r);
              (r.byIndex = s),
                n.splice(s, 0, { identifier: p, updater: h, references: 1 });
            }
            a.push(p);
          }
          return a;
        }
        function o(t, n) {
          var e = n.domAPI(n);
          return (
            e.update(t),
            function (n) {
              if (n) {
                if (
                  n.css === t.css &&
                  n.media === t.media &&
                  n.sourceMap === t.sourceMap &&
                  n.supports === t.supports &&
                  n.layer === t.layer
                )
                  return;
                e.update((t = n));
              } else e.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var i = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var a = 0; a < i.length; a++) {
              var s = e(i[a]);
              n[s].references--;
            }
            for (var c = r(t, o), u = 0; u < i.length; u++) {
              var l = e(i[u]);
              0 === n[l].references && (n[l].updater(), n.splice(l, 1));
            }
            i = c;
          };
        };
      },
      659: (t) => {
        "use strict";
        var n = {};
        t.exports = function (t, e) {
          var r = (function (t) {
            if (void 0 === n[t]) {
              var e = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (t) {
                  e = null;
                }
              n[t] = e;
            }
            return n[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(e);
        };
      },
      540: (t) => {
        "use strict";
        t.exports = function (t) {
          var n = document.createElement("style");
          return t.setAttributes(n, t.attributes), t.insert(n, t.options), n;
        };
      },
      56: (t, n, e) => {
        "use strict";
        t.exports = function (t) {
          var n = e.nc;
          n && t.setAttribute("nonce", n);
        };
      },
      825: (t) => {
        "use strict";
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = t.insertStyleElement(t);
          return {
            update: function (e) {
              !(function (t, n, e) {
                var r = "";
                e.supports && (r += "@supports (".concat(e.supports, ") {")),
                  e.media && (r += "@media ".concat(e.media, " {"));
                var o = void 0 !== e.layer;
                o &&
                  (r += "@layer".concat(
                    e.layer.length > 0 ? " ".concat(e.layer) : "",
                    " {",
                  )),
                  (r += e.css),
                  o && (r += "}"),
                  e.media && (r += "}"),
                  e.supports && (r += "}");
                var i = e.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */",
                    )),
                  n.styleTagTransform(r, t, n.options);
              })(n, t, e);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(n);
            },
          };
        };
      },
      113: (t) => {
        "use strict";
        t.exports = function (t, n) {
          if (n.styleSheet) n.styleSheet.cssText = t;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    n = {};
  function e(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var i = (n[r] = { id: r, exports: {} });
    return t[r](i, i.exports, e), i.exports;
  }
  (e.n = (t) => {
    var n = t && t.__esModule ? () => t.default : () => t;
    return e.d(n, { a: n }), n;
  }),
    (e.d = (t, n) => {
      for (var r in n)
        e.o(n, r) &&
          !e.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
    }),
    (e.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
    (e.nc = void 0),
    (() => {
      "use strict";
      var t = e(72),
        n = e.n(t),
        r = e(825),
        o = e.n(r),
        i = e(659),
        a = e.n(i),
        s = e(56),
        c = e.n(s),
        u = e(540),
        l = e.n(u),
        p = e(113),
        d = e.n(p),
        f = e(106),
        h = {};
      (h.styleTagTransform = d()),
        (h.setAttributes = c()),
        (h.insert = a().bind(null, "head")),
        (h.domAPI = o()),
        (h.insertStyleElement = l()),
        n()(f.A, h),
        f.A && f.A.locals && f.A.locals,
        e(151),
        e(17),
        e(831),
        e(629);
      const m = {
          duration: 0.3,
          delay: 0,
          endDelay: 0,
          repeat: 0,
          easing: "ease",
        },
        y = (t) => 1e3 * t,
        g = (t) => t / 1e3,
        b = () => {},
        v = (t) => t;
      function w(t, n = !0) {
        if (t && "finished" !== t.playState)
          try {
            t.stop ? t.stop() : (n && t.commitStyles(), t.cancel());
          } catch (t) {}
      }
      const x = (t) => t(),
        k = (t, n, e = m.duration) =>
          new Proxy(
            { animations: t.map(x).filter(Boolean), duration: e, options: n },
            S,
          ),
        S = {
          get: (t, n) => {
            const e = t.animations[0];
            switch (n) {
              case "duration":
                return t.duration;
              case "currentTime":
                return g((null == e ? void 0 : e[n]) || 0);
              case "playbackRate":
              case "playState":
                return null == e ? void 0 : e[n];
              case "finished":
                return (
                  t.finished ||
                    (t.finished = Promise.all(t.animations.map(_)).catch(b)),
                  t.finished
                );
              case "stop":
                return () => {
                  t.animations.forEach((t) => w(t));
                };
              case "forEachNative":
                return (n) => {
                  t.animations.forEach((e) => n(e, t));
                };
              default:
                return void 0 === (null == e ? void 0 : e[n])
                  ? void 0
                  : () => t.animations.forEach((t) => t[n]());
            }
          },
          set: (t, n, e) => {
            switch (n) {
              case "currentTime":
                e = y(e);
              case "playbackRate":
                for (let r = 0; r < t.animations.length; r++)
                  t.animations[r][n] = e;
                return !0;
            }
            return !1;
          },
        },
        _ = (t) => t.finished,
        O = (t) => "object" == typeof t && Boolean(t.createAnimation),
        j = (t) => "number" == typeof t,
        T = (t) => Array.isArray(t) && !j(t[0]),
        M = (t, n, e) => -e * t + e * n + t,
        R = (t, n, e) => (n - t == 0 ? 1 : (e - t) / (n - t));
      function E(t, n) {
        const e = t[t.length - 1];
        for (let r = 1; r <= n; r++) {
          const o = R(0, n, r);
          t.push(M(e, 1, o));
        }
      }
      const C = (t, n, e) => Math.min(Math.max(e, t), n);
      const P = (t, n, e) =>
          (((1 - 3 * e + 3 * n) * t + (3 * e - 6 * n)) * t + 3 * n) * t,
        D = 1e-7,
        A = 12;
      function q(t, n, e, r) {
        if (t === n && e === r) return v;
        return (o) =>
          0 === o || 1 === o
            ? o
            : P(
                (function (t, n, e, r, o) {
                  let i,
                    a,
                    s = 0;
                  do {
                    (a = n + (e - n) / 2),
                      (i = P(a, r, o) - t),
                      i > 0 ? (e = a) : (n = a);
                  } while (Math.abs(i) > D && ++s < A);
                  return a;
                })(o, 0, 1, t, e),
                n,
                r,
              );
      }
      const L = (t) => "function" == typeof t,
        z = (t) => Array.isArray(t) && j(t[0]),
        I = {
          ease: q(0.25, 0.1, 0.25, 1),
          "ease-in": q(0.42, 0, 1, 1),
          "ease-in-out": q(0.42, 0, 0.58, 1),
          "ease-out": q(0, 0, 0.58, 1),
        },
        H = /\((.*?)\)/;
      function B(t) {
        if (L(t)) return t;
        if (z(t)) return q(...t);
        const n = I[t];
        if (n) return n;
        if (t.startsWith("steps")) {
          const n = H.exec(t);
          if (n) {
            const t = n[1].split(",");
            return (
              (t, n = "end") =>
              (e) => {
                const r =
                    (e =
                      "end" === n ? Math.min(e, 0.999) : Math.max(e, 0.001)) *
                    t,
                  o = "end" === n ? Math.floor(r) : Math.ceil(r);
                return C(0, 1, o / t);
              }
            )(parseFloat(t[0]), t[1].trim());
          }
        }
        return v;
      }
      class N {
        constructor(
          t,
          n = [0, 1],
          {
            easing: e,
            duration: r = m.duration,
            delay: o = m.delay,
            endDelay: i = m.endDelay,
            repeat: a = m.repeat,
            offset: s,
            direction: c = "normal",
            autoplay: u = !0,
          } = {},
        ) {
          if (
            ((this.startTime = null),
            (this.rate = 1),
            (this.t = 0),
            (this.cancelTimestamp = null),
            (this.easing = v),
            (this.duration = 0),
            (this.totalDuration = 0),
            (this.repeat = 0),
            (this.playState = "idle"),
            (this.finished = new Promise((t, n) => {
              (this.resolve = t), (this.reject = n);
            })),
            (e = e || m.easing),
            O(e))
          ) {
            const t = e.createAnimation(n);
            (e = t.easing), (n = t.keyframes || n), (r = t.duration || r);
          }
          (this.repeat = a),
            (this.easing = T(e) ? v : B(e)),
            this.updateDuration(r);
          const l = (function (
            t,
            n = (function (t) {
              const n = [0];
              return E(n, t - 1), n;
            })(t.length),
            e = v,
          ) {
            const r = t.length,
              o = r - n.length;
            return (
              o > 0 && E(n, o),
              (o) => {
                let i = 0;
                for (; i < r - 2 && !(o < n[i + 1]); i++);
                let a = C(0, 1, R(n[i], n[i + 1], o));
                const s = (function (t, n) {
                  return T(t)
                    ? t[
                        ((t, n, e) => {
                          const r = n - t;
                          return ((((e - t) % r) + r) % r) + t;
                        })(0, t.length, n)
                      ]
                    : t;
                })(e, i);
                return (a = s(a)), M(t[i], t[i + 1], a);
              }
            );
          })(n, s, T(e) ? e.map(B) : v);
          (this.tick = (n) => {
            var e;
            let r = 0;
            (r =
              void 0 !== this.pauseTime
                ? this.pauseTime
                : (n - this.startTime) * this.rate),
              (this.t = r),
              (r /= 1e3),
              (r = Math.max(r - o, 0)),
              "finished" === this.playState &&
                void 0 === this.pauseTime &&
                (r = this.totalDuration);
            const a = r / this.duration;
            let s = Math.floor(a),
              u = a % 1;
            !u && a >= 1 && (u = 1), 1 === u && s--;
            const p = s % 2;
            ("reverse" === c ||
              ("alternate" === c && p) ||
              ("alternate-reverse" === c && !p)) &&
              (u = 1 - u);
            const d = r >= this.totalDuration ? 1 : Math.min(u, 1),
              f = l(this.easing(d));
            t(f),
              void 0 === this.pauseTime &&
              ("finished" === this.playState || r >= this.totalDuration + i)
                ? ((this.playState = "finished"),
                  null === (e = this.resolve) ||
                    void 0 === e ||
                    e.call(this, f))
                : "idle" !== this.playState &&
                  (this.frameRequestId = requestAnimationFrame(this.tick));
          }),
            u && this.play();
        }
        play() {
          const t = performance.now();
          (this.playState = "running"),
            void 0 !== this.pauseTime
              ? (this.startTime = t - this.pauseTime)
              : this.startTime || (this.startTime = t),
            (this.cancelTimestamp = this.startTime),
            (this.pauseTime = void 0),
            (this.frameRequestId = requestAnimationFrame(this.tick));
        }
        pause() {
          (this.playState = "paused"), (this.pauseTime = this.t);
        }
        finish() {
          (this.playState = "finished"), this.tick(0);
        }
        stop() {
          var t;
          (this.playState = "idle"),
            void 0 !== this.frameRequestId &&
              cancelAnimationFrame(this.frameRequestId),
            null === (t = this.reject) || void 0 === t || t.call(this, !1);
        }
        cancel() {
          this.stop(), this.tick(this.cancelTimestamp);
        }
        reverse() {
          this.rate *= -1;
        }
        commitStyles() {}
        updateDuration(t) {
          (this.duration = t), (this.totalDuration = t * (this.repeat + 1));
        }
        get currentTime() {
          return this.t;
        }
        set currentTime(t) {
          void 0 !== this.pauseTime || 0 === this.rate
            ? (this.pauseTime = t)
            : (this.startTime = performance.now() - t / this.rate);
        }
        get playbackRate() {
          return this.rate;
        }
        set playbackRate(t) {
          this.rate = t;
        }
      }
      class F {
        setAnimation(t) {
          (this.animation = t),
            null == t ||
              t.finished.then(() => this.clearAnimation()).catch(() => {});
        }
        clearAnimation() {
          this.animation = this.generator = void 0;
        }
      }
      const $ = new WeakMap();
      function V(t) {
        return (
          $.has(t) || $.set(t, { transforms: [], values: new Map() }), $.get(t)
        );
      }
      const J = ["", "X", "Y", "Z"],
        U = { x: "translateX", y: "translateY", z: "translateZ" },
        W = {
          syntax: "<angle>",
          initialValue: "0deg",
          toDefaultUnit: (t) => t + "deg",
        },
        X = {
          translate: {
            syntax: "<length-percentage>",
            initialValue: "0px",
            toDefaultUnit: (t) => t + "px",
          },
          rotate: W,
          scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: v },
          skew: W,
        },
        Y = new Map(),
        K = (t) => `--motion-${t}`,
        Z = ["x", "y", "z"];
      ["translate", "scale", "rotate", "skew"].forEach((t) => {
        J.forEach((n) => {
          Z.push(t + n), Y.set(K(t + n), X[t]);
        });
      });
      const Q = (t, n) => Z.indexOf(t) - Z.indexOf(n),
        G = new Set(Z),
        tt = (t) => G.has(t),
        nt = (t) => t.sort(Q).reduce(et, "").trim(),
        et = (t, n) => `${t} ${n}(var(${K(n)}))`,
        rt = (t) => t.startsWith("--"),
        ot = new Set(),
        it = (t, n) => document.createElement("div").animate(t, n),
        at = {
          cssRegisterProperty: () =>
            "undefined" != typeof CSS &&
            Object.hasOwnProperty.call(CSS, "registerProperty"),
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
          partialKeyframes: () => {
            try {
              it({ opacity: [1] });
            } catch (t) {
              return !1;
            }
            return !0;
          },
          finished: () =>
            Boolean(it({ opacity: [0, 1] }, { duration: 0.001 }).finished),
          linearEasing: () => {
            try {
              it({ opacity: 0 }, { easing: "linear(0, 1)" });
            } catch (t) {
              return !1;
            }
            return !0;
          },
        },
        st = {},
        ct = {};
      for (const t in at)
        ct[t] = () => (void 0 === st[t] && (st[t] = at[t]()), st[t]);
      const ut = (t, n) =>
          L(t)
            ? ct.linearEasing()
              ? `linear(${((t, n) => {
                  let e = "";
                  const r = Math.round(n / 0.015);
                  for (let n = 0; n < r; n++) e += t(R(0, r - 1, n)) + ", ";
                  return e.substring(0, e.length - 2);
                })(t, n)})`
              : m.easing
            : z(t)
              ? lt(t)
              : t,
        lt = ([t, n, e, r]) => `cubic-bezier(${t}, ${n}, ${e}, ${r})`;
      function pt(t) {
        return U[t] && (t = U[t]), tt(t) ? K(t) : t;
      }
      const dt = (t, n) => {
          n = pt(n);
          let e = rt(n) ? t.style.getPropertyValue(n) : getComputedStyle(t)[n];
          if (!e && 0 !== e) {
            const t = Y.get(n);
            t && (e = t.initialValue);
          }
          return e;
        },
        ft = (t, n, e) => {
          (n = pt(n)), rt(n) ? t.style.setProperty(n, e) : (t.style[n] = e);
        },
        ht = (t) => "string" == typeof t;
      function mt(t, n) {
        var e;
        let r = (null == n ? void 0 : n.toDefaultUnit) || v;
        const o = t[t.length - 1];
        if (ht(o)) {
          const t =
            (null === (e = o.match(/(-?[\d.]+)([a-z%]*)/)) || void 0 === e
              ? void 0
              : e[2]) || "";
          t && (r = (n) => n + t);
        }
        return r;
      }
      function yt(t, n, e, r = {}, o) {
        const i = window.__MOTION_DEV_TOOLS_RECORD,
          a = !1 !== r.record && i;
        let s,
          {
            duration: c = m.duration,
            delay: u = m.delay,
            endDelay: l = m.endDelay,
            repeat: p = m.repeat,
            easing: d = m.easing,
            persist: f = !1,
            direction: h,
            offset: g,
            allowWebkitAcceleration: v = !1,
            autoplay: x = !0,
          } = r;
        const k = V(t),
          S = tt(n);
        let _ = ct.waapi();
        S &&
          ((t, n) => {
            U[n] && (n = U[n]);
            const { transforms: e } = V(t);
            var r, o;
            (o = n),
              -1 === (r = e).indexOf(o) && r.push(o),
              (t.style.transform = nt(e));
          })(t, n);
        const M = pt(n),
          R = (function (t, n) {
            return t.has(n) || t.set(n, new F()), t.get(n);
          })(k.values, M),
          E = Y.get(M);
        return (
          w(R.animation, !(O(d) && R.generator) && !1 !== r.record),
          () => {
            const m = () => {
              var n, e;
              return null !==
                (e =
                  null !== (n = dt(t, M)) && void 0 !== n
                    ? n
                    : null == E
                      ? void 0
                      : E.initialValue) && void 0 !== e
                ? e
                : 0;
            };
            let w = (function (t, n) {
              for (let e = 0; e < t.length; e++)
                null === t[e] && (t[e] = e ? t[e - 1] : n());
              return t;
            })(((t) => (Array.isArray(t) ? t : [t]))(e), m);
            const k = mt(w, E);
            if (O(d)) {
              const t = d.createAnimation(w, "opacity" !== n, m, M, R);
              (d = t.easing), (w = t.keyframes || w), (c = t.duration || c);
            }
            if (
              (rt(M) &&
                (ct.cssRegisterProperty()
                  ? (function (t) {
                      if (!ot.has(t)) {
                        ot.add(t);
                        try {
                          const { syntax: n, initialValue: e } = Y.has(t)
                            ? Y.get(t)
                            : {};
                          CSS.registerProperty({
                            name: t,
                            inherits: !1,
                            syntax: n,
                            initialValue: e,
                          });
                        } catch (t) {}
                      }
                    })(M)
                  : (_ = !1)),
              S &&
                !ct.linearEasing() &&
                (L(d) || (T(d) && d.some(L))) &&
                (_ = !1),
              _)
            ) {
              E && (w = w.map((t) => (j(t) ? E.toDefaultUnit(t) : t))),
                1 !== w.length ||
                  (ct.partialKeyframes() && !a) ||
                  w.unshift(m());
              const n = {
                delay: y(u),
                duration: y(c),
                endDelay: y(l),
                easing: T(d) ? void 0 : ut(d, c),
                direction: h,
                iterations: p + 1,
                fill: "both",
              };
              (s = t.animate(
                {
                  [M]: w,
                  offset: g,
                  easing: T(d) ? d.map((t) => ut(t, c)) : void 0,
                },
                n,
              )),
                s.finished ||
                  (s.finished = new Promise((t, n) => {
                    (s.onfinish = t), (s.oncancel = n);
                  }));
              const e = w[w.length - 1];
              s.finished
                .then(() => {
                  f || (ft(t, M, e), s.cancel());
                })
                .catch(b),
                v || (s.playbackRate = 1.000001);
            } else if (o && S)
              (w = w.map((t) => ("string" == typeof t ? parseFloat(t) : t))),
                1 === w.length && w.unshift(parseFloat(m())),
                (s = new o(
                  (n) => {
                    ft(t, M, k ? k(n) : n);
                  },
                  w,
                  Object.assign(Object.assign({}, r), {
                    duration: c,
                    easing: d,
                  }),
                ));
            else {
              const n = w[w.length - 1];
              ft(t, M, E && j(n) ? E.toDefaultUnit(n) : n);
            }
            return (
              a &&
                i(
                  t,
                  n,
                  w,
                  { duration: c, delay: u, easing: d, repeat: p, offset: g },
                  "motion-one",
                ),
              R.setAnimation(s),
              s && !x && s.pause(),
              s
            );
          }
        );
      }
      const gt = (t, n) =>
        t[n] ? Object.assign(Object.assign({}, t), t[n]) : Object.assign({}, t);
      function bt(t, n, e) {
        return L(t) ? t(n, e) : t;
      }
      const vt =
        ((wt = N),
        function (t, n, e = {}) {
          const r = (t = (function (t) {
            return (
              "string" == typeof t
                ? (t = document.querySelectorAll(t))
                : t instanceof Element && (t = [t]),
              Array.from(t || [])
            );
          })(t)).length;
          Boolean(r), Boolean(n);
          const o = [];
          for (let i = 0; i < r; i++) {
            const a = t[i];
            for (const t in n) {
              const s = gt(e, t);
              s.delay = bt(s.delay, i, r);
              const c = yt(a, t, n[t], s, wt);
              o.push(c);
            }
          }
          return k(o, e, e.duration);
        });
      var wt;
      function xt(t, n = {}) {
        return k(
          [
            () => {
              const e = new N(t, [0, 1], n);
              return e.finished.catch(() => {}), e;
            },
          ],
          n,
          n.duration,
        );
      }
      function kt(t, n, e) {
        const r = Math.max(n - 5, 0);
        return (o = e - t(r)), (i = n - r) ? o * (1e3 / i) : 0;
        var o, i;
      }
      function St(t) {
        return j(t) && !isNaN(t);
      }
      function _t(t) {
        return ht(t) ? parseFloat(t) : t;
      }
      const Ot = (function () {
        const t = new WeakMap();
        return (n = {}) => {
          const e = new Map(),
            r = (t = 0, r = 100, o = 0, i = !1) => {
              const a = `${t}-${r}-${o}-${i}`;
              return (
                e.has(a) ||
                  e.set(
                    a,
                    (({
                      from: t = 0,
                      velocity: n = 0,
                      power: e = 0.8,
                      decay: r = 0.325,
                      bounceDamping: o,
                      bounceStiffness: i,
                      changeTarget: a,
                      min: s,
                      max: c,
                      restDistance: u = 0.5,
                      restSpeed: l,
                    }) => {
                      r = y(r);
                      const p = {
                          hasReachedTarget: !1,
                          done: !1,
                          current: t,
                          target: t,
                        },
                        d = (t) =>
                          void 0 === s
                            ? c
                            : void 0 === c || Math.abs(s - t) < Math.abs(c - t)
                              ? s
                              : c;
                      let f = e * n;
                      const h = t + f,
                        m = void 0 === a ? h : a(h);
                      (p.target = m), m !== h && (f = m - t);
                      const b = (t) => -f * Math.exp(-t / r),
                        v = (t) => m + b(t),
                        w = (t) => {
                          const n = b(t),
                            e = v(t);
                          (p.done = Math.abs(n) <= u),
                            (p.current = p.done ? m : e);
                        };
                      let x, k;
                      const S = (t) => {
                        var n;
                        (n = p.current),
                          ((void 0 !== s && n < s) ||
                            (void 0 !== c && n > c)) &&
                            ((x = t),
                            (k = (({
                              stiffness: t = 100,
                              damping: n = 10,
                              mass: e = 1,
                              from: r = 0,
                              to: o = 1,
                              velocity: i = 0,
                              restSpeed: a,
                              restDistance: s,
                            } = {}) => {
                              i = i ? g(i) : 0;
                              const c = {
                                  done: !1,
                                  hasReachedTarget: !1,
                                  current: r,
                                  target: o,
                                },
                                u = o - r,
                                l = Math.sqrt(t / e) / 1e3,
                                p = ((t = 100, n = 10, e = 1) =>
                                  n / (2 * Math.sqrt(t * e)))(t, n, e),
                                d = Math.abs(u) < 5;
                              let f;
                              if (
                                (a || (a = d ? 0.01 : 2),
                                s || (s = d ? 0.005 : 0.5),
                                p < 1)
                              ) {
                                const t = l * Math.sqrt(1 - p * p);
                                f = (n) =>
                                  o -
                                  Math.exp(-p * l * n) *
                                    (((p * l * u - i) / t) * Math.sin(t * n) +
                                      u * Math.cos(t * n));
                              } else
                                f = (t) =>
                                  o - Math.exp(-l * t) * (u + (l * u - i) * t);
                              return (t) => {
                                c.current = f(t);
                                const n = 0 === t ? i : kt(f, t, c.current),
                                  e = Math.abs(n) <= a,
                                  u = Math.abs(o - c.current) <= s;
                                var l, p, d;
                                return (
                                  (c.done = e && u),
                                  (c.hasReachedTarget =
                                    ((l = r),
                                    (p = o),
                                    (d = c.current),
                                    (l < p && d >= p) || (l > p && d <= p))),
                                  c
                                );
                              };
                            })({
                              from: p.current,
                              to: d(p.current),
                              velocity: kt(v, t, p.current),
                              damping: o,
                              stiffness: i,
                              restDistance: u,
                              restSpeed: l,
                            })));
                      };
                      return (
                        S(0),
                        (t) => {
                          let n = !1;
                          return (
                            k || void 0 !== x || ((n = !0), w(t), S(t)),
                            void 0 !== x && t > x
                              ? ((p.hasReachedTarget = !0), k(t - x))
                              : ((p.hasReachedTarget = !1), !n && w(t), p)
                          );
                        }
                      );
                    })(Object.assign({ from: t, to: r, velocity: o }, n)),
                  ),
                e.get(a)
              );
            },
            o = (n, e) => (
              t.has(n) ||
                t.set(
                  n,
                  (function (t, n = v) {
                    let e,
                      r = 10,
                      o = t(0);
                    const i = [n(o.current)];
                    for (; !o.done && r < 1e4; )
                      (o = t(r)),
                        i.push(n(o.done ? o.target : o.current)),
                        void 0 === e && o.hasReachedTarget && (e = r),
                        (r += 10);
                    const a = r - 10;
                    return (
                      1 === i.length && i.push(o.current),
                      {
                        keyframes: i,
                        duration: a / 1e3,
                        overshootDuration: (null != e ? e : a) / 1e3,
                      }
                    );
                  })(n, e),
                ),
              t.get(n)
            );
          return {
            createAnimation: (t, n = !0, e, i, a) => {
              let s,
                c,
                u,
                l = 0,
                p = v;
              const d = t.length;
              if (n)
                if (
                  ((p = mt(t, i ? Y.get(pt(i)) : void 0)),
                  (u = _t(t[d - 1])),
                  d > 1 && null !== t[0])
                )
                  c = _t(t[0]);
                else {
                  const t = null == a ? void 0 : a.generator;
                  if (t) {
                    const { animation: n, generatorStartTime: e } = a,
                      r = (null == n ? void 0 : n.startTime) || e || 0,
                      o =
                        (null == n ? void 0 : n.currentTime) ||
                        performance.now() - r,
                      i = t(o).current;
                    (c = i), (l = kt((n) => t(n).current, o, i));
                  } else e && (c = _t(e()));
                }
              if (St(c) && St(u)) {
                const t = r(c, u, l, null == i ? void 0 : i.includes("scale"));
                (s = Object.assign(Object.assign({}, o(t, p)), {
                  easing: "linear",
                })),
                  a &&
                    ((a.generator = t),
                    (a.generatorStartTime = performance.now()));
              }
              return (
                s ||
                  (s = {
                    easing: "ease",
                    duration: o(r(0, 100)).overshootDuration,
                  }),
                s
              );
            },
          };
        };
      })();
      var jt = "https://notes-api.dicoding.dev/v2",
        Tt = function () {
          fetch("".concat(jt, "/notes"))
            .then(function (t) {
              return t.json();
            })
            .then(function (t) {
              t.error ? Rt(t.message) : (console.log(t.data), Mt(t.data));
            })
            .catch(function (t) {
              Rt(t);
            });
        },
        Mt = function (t) {
          var n = document.querySelectorAll("note-list");
          (n.innerHTML = ""),
            n.forEach(function (n) {
              (n.note = t),
                n.shadowRoot
                  .querySelectorAll(".note-delete")
                  .forEach(function (t) {
                    var n = t.querySelector(".button-delete");
                    n &&
                      n.addEventListener("click", function (t) {
                        var n;
                        (n = t.target.dataset.id),
                          fetch("".concat(jt, "/notes/").concat(n), {
                            method: "DELETE",
                            headers: { "X-Auth-Token": "12345" },
                          }),
                          Swal.fire({
                            title: "Deleted!",
                            text: "Your note has been deleted.",
                            icon: "success",
                          })
                            .then(function (t) {
                              Tt();
                            })
                            .catch(function (t) {
                              Ct(), Rt(t);
                            });
                      });
                  });
            });
        },
        Rt = function (t) {
          Swal.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "question",
          }),
            Rt(t);
        };
      document.addEventListener("DOMContentLoaded", function () {
        Tt();
        var t = document.querySelector("note-form");
        t &&
          t.addEventListener("note-added", function (t) {
            var n;
            (n = t.detail),
              Et(),
              fetch("".concat(jt, "/notes"), {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "X-Auth-Token": "12345",
                },
                body: JSON.stringify({ title: n.title, body: n.body }),
              }),
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Notes has been added",
                showConfirmButton: !1,
                timer: 1500,
              })
                .then(function (t) {
                  Ct(), Tt();
                })
                .catch(function (t) {
                  Ct(), Rt(t);
                });
          });
      });
      var Et = function () {
          document.querySelector(".loadingIndicator").style.display = "flex";
        },
        Ct = function () {
          document.querySelector(".loadingIndicator").style.display = "none";
        };
      !(function (t, n, e) {
        (L(t) ? xt : vt)(t, { y: 0 }, e);
      })("#itemNotes", 0, { easing: Ot({ velocity: -50 }) });
    })();
})();
