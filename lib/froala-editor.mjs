var M1 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function A1(i1) {
  return i1 && i1.__esModule && Object.prototype.hasOwnProperty.call(i1, "default") ? i1.default : i1;
}
var S1 = { exports: {} };
/*!
 * froala_editor v4.1.4 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2023 Froala Labs
 */
(function(i1, x1) {
  (function(o1, a) {
    i1.exports = a();
  })(M1, function() {
    function o1(e) {
      return (o1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t;
      } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      })(e);
    }
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(e) {
      var t = this;
      if (!document.documentElement.contains(t))
        return null;
      do {
        if (t.matches(e))
          return t;
        t = t.parentElement || t.parentNode;
      } while (t !== null && t.nodeType === 1);
      return null;
    }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
      for (var t = (this.document || this.ownerDocument).querySelectorAll(e), l = t.length; 0 <= --l && t.item(l) !== this; )
        ;
      return -1 < l;
    }), Array.isArray || (Array.isArray = function(e) {
      return Object.prototype.toString.call(e) === "[object Array]";
    }), typeof Object.assign != "function" && Object.defineProperty(Object, "assign", { value: function(e, t) {
      if (e == null)
        throw new TypeError("Cannot convert undefined or null to object");
      for (var l = Object(e), v = 1; v < arguments.length; v++) {
        var c = arguments[v];
        if (c != null)
          for (var N in c)
            Object.prototype.hasOwnProperty.call(c, N) && (l[N] = c[N]);
      }
      return l;
    }, writable: !0, configurable: !0 }), function() {
      var e = /^\s*:scope/gi, t = /,\s*:scope/gi, l = document.createElement("div");
      function v(N, L) {
        var b = N[L];
        N[L] = function(f) {
          var u, T = !1, x = !1;
          if (!f || Array.isArray(f) || !f.match(e) && !f.match(t))
            return b.call(this, f);
          this.parentNode || (l.appendChild(this), x = !0);
          var $ = this.parentNode;
          return this.id || (this.id = "rootedQuerySelector_id_".concat((/* @__PURE__ */ new Date()).getTime()), T = !0), u = b.call($, f.replace(e, "#".concat(this.id)).replace(t, ",#".concat(this.id))), T && (this.id = ""), x && l.removeChild(this), u;
        };
      }
      try {
        var c = l.querySelectorAll(":scope *");
        if (!c || Array.isArray(c))
          throw "error";
      } catch {
        v(Element.prototype, "querySelector"), v(Element.prototype, "querySelectorAll"), v(HTMLElement.prototype, "querySelector"), v(HTMLElement.prototype, "querySelectorAll");
      }
    }(), "document" in self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || function(e) {
      if ("Element" in e) {
        var t = "classList", l = "prototype", v = e.Element[l], c = Object, N = String[l].trim || function() {
          return this.replace(/^\s+|\s+$/g, "");
        }, L = Array[l].indexOf || function(E) {
          for (var A = 0, k = this.length; A < k; A++)
            if (A in this && this[A] === E)
              return A;
          return -1;
        }, b = function(A, k) {
          this.name = A, this.code = DOMException[A], this.message = k;
        }, f = function(A, k) {
          if (k === "")
            throw new b("SYNTAX_ERR", "The token must not be empty.");
          if (/\s/.test(k))
            throw new b("INVALID_CHARACTER_ERR", "The token must not contain space characters.");
          return L.call(A, k);
        }, u = function(A) {
          for (var k = N.call(A.getAttribute("class") || ""), d = k ? k.split(/\s+/) : [], g = 0, r = d.length; g < r; g++)
            this.push(d[g]);
          this._updateClassName = function() {
            A.setAttribute("class", this.toString());
          };
        }, T = u[l] = [], x = function() {
          return new u(this);
        };
        if (b[l] = Error[l], T.item = function(E) {
          return this[E] || null;
        }, T.contains = function(E) {
          return ~f(this, E + "");
        }, T.add = function() {
          for (var E, A = arguments, k = 0, d = A.length, g = !1; E = A[k] + "", ~f(this, E) || (this.push(E), g = !0), ++k < d; )
            ;
          g && this._updateClassName();
        }, T.remove = function() {
          var E, A, k = arguments, d = 0, g = k.length, r = !1;
          do
            for (E = k[d] + "", A = f(this, E); ~A; )
              this.splice(A, 1), r = !0, A = f(this, E);
          while (++d < g);
          r && this._updateClassName();
        }, T.toggle = function(E, A) {
          var k = this.contains(E), d = k ? A !== !0 && "remove" : A !== !1 && "add";
          return d && this[d](E), A === !0 || A === !1 ? A : !k;
        }, T.replace = function(E, A) {
          var k = f(E + "");
          ~k && (this.splice(k, 1, A), this._updateClassName());
        }, T.toString = function() {
          return this.join(" ");
        }, c.defineProperty) {
          var $ = { get: x, enumerable: !0, configurable: !0 };
          try {
            c.defineProperty(v, t, $);
          } catch (E) {
            E.number !== void 0 && E.number !== -2146823252 || ($.enumerable = !1, c.defineProperty(v, t, $));
          }
        } else
          c[l].__defineGetter__ && v.__defineGetter__(t, x);
      }
    }(self), function() {
      var e = document.createElement("_");
      if (e.classList.add("c1", "c2"), !e.classList.contains("c2")) {
        var t = function(c) {
          var N = DOMTokenList.prototype[c];
          DOMTokenList.prototype[c] = function(L) {
            var b, f = arguments.length;
            for (b = 0; b < f; b++)
              L = arguments[b], N.call(this, L);
          };
        };
        t("add"), t("remove");
      }
      if (e.classList.toggle("c3", !1), e.classList.contains("c3")) {
        var l = DOMTokenList.prototype.toggle;
        DOMTokenList.prototype.toggle = function(v, c) {
          return 1 in arguments && !this.contains(v) == !c ? c : l.call(this, v);
        };
      }
      "replace" in document.createElement("_").classList || (DOMTokenList.prototype.replace = function(v, c) {
        var N = this.toString().split(" "), L = N.indexOf(v + "");
        ~L && (N = N.slice(L), this.remove.apply(this, N), this.add(c), this.add.apply(this, N.slice(1)));
      }), e = null;
    }()), function() {
      var e, t = -1;
      if (navigator.appName === "Microsoft Internet Explorer" ? (e = navigator.userAgent, new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})").exec(e) !== null && (t = parseFloat(RegExp.$1))) : navigator.appName === "Netscape" && (e = navigator.userAgent, new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})").exec(e) !== null && (t = parseFloat(RegExp.$1))), !(typeof window > "u" || typeof document > "u" || typeof HTMLElement > "u" || t < 0)) {
        var l = !1;
        try {
          var v = document.createElement("div");
          v.addEventListener("focus", function(b) {
            b.preventDefault(), b.stopPropagation();
          }, !0), v.focus(Object.defineProperty({}, "preventScroll", { get: function() {
            if (navigator && typeof navigator.userAgent < "u" && navigator.userAgent && navigator.userAgent.match(/Edge\/1[7-8]/))
              return l = !1;
            l = !0;
          } }));
        } catch {
        }
        if (HTMLElement.prototype.nativeFocus === void 0 && !l) {
          HTMLElement.prototype.nativeFocus = HTMLElement.prototype.focus;
          var c = function(f) {
            for (var u = f.parentNode, T = [], x = document.scrollingElement || document.documentElement; u && u !== x; )
              (u.offsetHeight < u.scrollHeight || u.offsetWidth < u.scrollWidth) && T.push([u, u.scrollTop, u.scrollLeft]), u = u.parentNode;
            return u = x, T.push([u, u.scrollTop, u.scrollLeft]), T;
          }, N = function(f) {
            for (var u = 0; u < f.length; u++)
              f[u][0].scrollTop = f[u][1], f[u][0].scrollLeft = f[u][2];
            f = [];
          }, L = function(f) {
            if (f && f.preventScroll) {
              var u = c(this);
              if (typeof setTimeout == "function") {
                var T = this;
                setTimeout(function() {
                  T.nativeFocus(), N(u);
                }, 0);
              } else
                this.nativeFocus(), N(u);
            } else
              this.nativeFocus();
          };
          HTMLElement.prototype.focus = L;
        }
      }
    }();
    function a(e, t, l) {
      if (typeof e != "string")
        return new a.Bootstrap(e, t, l);
      var v = document.querySelectorAll(e);
      t && t.iframe_document && (v = t.iframe_document.querySelectorAll(e));
      for (var c = [], N = 0; N < v.length; N++) {
        var L = v[N]["data-froala.editor"];
        L ? c.push(L) : c.push(new a.Bootstrap(v[N], t, l));
      }
      return c.length == 1 ? c[0] : c;
    }
    a.RegisterPlugins = function(e) {
      for (var t = 0; t < e.length; t++)
        e[t].call(a);
    }, Object.assign(a, { DEFAULTS: { initOnClick: !1, pluginsEnabled: null }, MODULES: {}, PLUGINS: {}, VERSION: "4.1.4", INSTANCES: [], OPTS_MAPPING: {}, SHARED: {}, ID: 0 }), a.MODULES.node = function(e) {
      var t = e.$;
      function l(b) {
        return b && b.tagName !== "IFRAME" ? Array.prototype.slice.call(b.childNodes || []) : [];
      }
      function v(b) {
        return !!b && b.nodeType === Node.ELEMENT_NODE && 0 <= a.BLOCK_TAGS.indexOf(b.tagName.toLowerCase());
      }
      function c(b) {
        var f = {}, u = b.attributes;
        if (u)
          for (var T = 0; T < u.length; T++) {
            var x = u[T];
            f[x.nodeName] = x.value;
          }
        return f;
      }
      function N(b) {
        for (var f = "", u = c(b), T = Object.keys(u), x = 0; x < T.length; x++) {
          var $ = T[x], E = u[$];
          E.indexOf("'") < 0 && 0 <= E.indexOf('"') ? f += " ".concat($, "='").concat(E, "'") : (0 <= E.indexOf('"') && 0 <= E.indexOf("'") && (E = E.replace(/"/g, "&quot;")), f += " ".concat($, '="').concat(E, '"'));
        }
        return f;
      }
      function L(b) {
        return b === e.el;
      }
      return { isBlock: v, isEmpty: function(f, u) {
        if (!f)
          return !0;
        if (f.querySelector("table"))
          return !1;
        var T = l(f);
        T.length === 1 && v(T[0]) && (T = l(T[0]));
        for (var x = !1, $ = 0; $ < T.length; $++) {
          var E = T[$];
          if (!(u && e.node.hasClass(E, "fr-marker") || E.nodeType === Node.TEXT_NODE && E.textContent.length === 0)) {
            if (E.tagName !== "BR" && 0 < (E.textContent || "").replace(/\u200B/gi, "").replace(/\n/g, "").length || x)
              return !1;
            E.tagName === "BR" && (x = !0);
          }
        }
        return !(f.querySelectorAll(a.VOID_ELEMENTS.join(",")).length - f.querySelectorAll("br").length || f.querySelector("".concat(e.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),"), ":not(.fr-marker)")) || 1 < f.querySelectorAll(a.BLOCK_TAGS.join(",")).length || f.querySelector("".concat(e.opts.htmlDoNotWrapTags.join(":not(.fr-marker),"), ":not(.fr-marker)")));
      }, blockParent: function(f) {
        for (; f && f.parentNode !== e.el && (!f.parentNode || !e.node.hasClass(f.parentNode, "fr-inner")); )
          if (v(f = f.parentNode))
            return f;
        return null;
      }, deepestParent: function(f, u, T) {
        if (u === void 0 && (u = []), T === void 0 && (T = !0), u.push(e.el), 0 <= u.indexOf(f.parentNode) || f.parentNode && e.node.hasClass(f.parentNode, "fr-inner") || f.parentNode && 0 <= a.SIMPLE_ENTER_TAGS.indexOf(f.parentNode.tagName) && T)
          return null;
        for (; u.indexOf(f.parentNode) < 0 && f.parentNode && !e.node.hasClass(f.parentNode, "fr-inner") && (a.SIMPLE_ENTER_TAGS.indexOf(f.parentNode.tagName) < 0 || !T) && (!v(f) || v(f.parentNode)) && (!v(f) || !v(f.parentNode) || !T); )
          f = f.parentNode;
        return f;
      }, rawAttributes: c, attributes: N, clearAttributes: function(f) {
        for (var u = f.attributes, T = u.length - 1; 0 <= T; T--) {
          var x = u[T];
          f.removeAttribute(x.nodeName);
        }
      }, openTagString: function(f) {
        return "<".concat(f.tagName.toLowerCase()).concat(N(f), ">");
      }, closeTagString: function(f) {
        return "</".concat(f.tagName.toLowerCase(), ">");
      }, isFirstSibling: function b(f, u) {
        u === void 0 && (u = !0);
        for (var T = f.previousSibling; T && u && e.node.hasClass(T, "fr-marker"); )
          T = T.previousSibling;
        return !T || T.nodeType === Node.TEXT_NODE && T.textContent === "" && b(T);
      }, isLastSibling: function b(f, u) {
        u === void 0 && (u = !0);
        for (var T = f.nextSibling; T && u && e.node.hasClass(T, "fr-marker"); )
          T = T.nextSibling;
        return !T || T.nodeType === Node.TEXT_NODE && T.textContent === "" && b(T);
      }, isList: function(f) {
        return !!f && 0 <= ["UL", "OL"].indexOf(f.tagName);
      }, isLink: function(f) {
        return !!f && f.nodeType === Node.ELEMENT_NODE && f.tagName.toLowerCase() === "a";
      }, isElement: L, contents: l, isVoid: function(f) {
        return f && f.nodeType === Node.ELEMENT_NODE && 0 <= a.VOID_ELEMENTS.indexOf((f.tagName || "").toLowerCase());
      }, hasFocus: function(f) {
        return f === e.doc.activeElement && (!e.doc.hasFocus || e.doc.hasFocus()) && !!(L(f) || f.type || f.href || ~f.tabIndex);
      }, isEditable: function(f) {
        return (!f.getAttribute || f.getAttribute("contenteditable") !== "false") && ["STYLE", "SCRIPT"].indexOf(f.tagName) < 0;
      }, isDeletable: function(f) {
        return f && f.nodeType === Node.ELEMENT_NODE && f.getAttribute("class") && 0 <= (f.getAttribute("class") || "").indexOf("fr-deletable");
      }, hasClass: function(f, u) {
        return f instanceof t && (f = f.get(0)), f && f.classList && f.classList.contains(u);
      }, filter: function(f) {
        return e.browser.msie ? f : { acceptNode: f };
      } };
    }, Object.assign(a.DEFAULTS, { DOMPurify: window.DOMPurify, htmlAllowedTags: ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "pre", "progress", "queue", "rp", "rt", "ruby", "s", "samp", "script", "style", "section", "select", "small", "source", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "var", "video", "wbr"], htmlRemoveTags: ["script", "style"], htmlAllowedAttrs: ["accept", "accept-charset", "accesskey", "action", "align", "allowfullscreen", "allowtransparency", "alt", "async", "autocomplete", "autofocus", "autoplay", "autosave", "background", "bgcolor", "border", "charset", "cellpadding", "cellspacing", "checked", "cite", "class", "color", "cols", "colspan", "content", "contenteditable", "contextmenu", "controls", "coords", "data", "data-.*", "datetime", "default", "defer", "dir", "dirname", "disabled", "download", "draggable", "dropzone", "enctype", "for", "form", "formaction", "frameborder", "headers", "height", "hidden", "high", "href", "hreflang", "http-equiv", "icon", "id", "ismap", "itemprop", "keytype", "kind", "label", "lang", "language", "list", "loop", "low", "max", "maxlength", "media", "method", "min", "mozallowfullscreen", "multiple", "muted", "name", "novalidate", "open", "optimum", "pattern", "ping", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "reversed", "rows", "rowspan", "sandbox", "scope", "scoped", "scrolling", "seamless", "selected", "shape", "size", "sizes", "span", "src", "srcdoc", "srclang", "srcset", "start", "step", "summary", "spellcheck", "style", "tabindex", "target", "title", "type", "translate", "usemap", "value", "valign", "webkitallowfullscreen", "width", "wrap"], htmlAllowedStyleProps: [".*"], htmlAllowComments: !0, htmlUntouched: !1, fullPage: !1 }), a.HTML5Map = { B: "STRONG", I: "EM", STRIKE: "S" }, a.MODULES.clean = function(e) {
      var t, l, v, c, N = e.$;
      function L(k) {
        if (k.nodeType === Node.ELEMENT_NODE && k.getAttribute("class") && 0 <= k.getAttribute("class").indexOf("fr-marker"))
          return !1;
        var d, g = e.node.contents(k), r = [];
        for (d = 0; d < g.length; d++)
          g[d].nodeType !== Node.ELEMENT_NODE || e.node.isVoid(g[d]) ? g[d].nodeType === Node.TEXT_NODE && (g[d].textContent = g[d].textContent.replace(/\u200b/g, "")) : g[d].textContent.replace(/\u200b/g, "").length !== g[d].textContent.length && L(g[d]);
        if (k.nodeType === Node.ELEMENT_NODE && !e.node.isVoid(k) && (k.normalize(), g = e.node.contents(k), r = k.querySelectorAll(".fr-marker"), g.length - r.length == 0)) {
          for (d = 0; d < g.length; d++)
            if (g[d].nodeType === Node.ELEMENT_NODE && (g[d].getAttribute("class") || "").indexOf("fr-marker") < 0)
              return !1;
          for (d = 0; d < r.length; d++)
            k.parentNode.insertBefore(r[d].cloneNode(!0), k);
          return k.parentNode.removeChild(k), !1;
        }
      }
      function b(k, d) {
        if (k.nodeType === Node.COMMENT_NODE)
          return "<!--".concat(k.nodeValue, "-->");
        if (k.nodeType === Node.TEXT_NODE)
          return d ? k.textContent.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : k.textContent.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\u00A0/g, "&nbsp;").replace(/\u0009/g, "");
        if (k.nodeType !== Node.ELEMENT_NODE || k.nodeType === Node.ELEMENT_NODE && 0 <= ["STYLE", "SCRIPT", "NOSCRIPT"].indexOf(k.tagName))
          return k.outerHTML;
        if (k.nodeType === Node.ELEMENT_NODE && k.tagName === "svg") {
          var g = document.createElement("div"), r = k.cloneNode(!0);
          return g.appendChild(r), g.innerHTML;
        }
        if (k.tagName === "IFRAME")
          return k.outerHTML.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
        var o = k.childNodes;
        if (o.length === 0)
          return k.outerHTML;
        for (var i = "", p = 0; p < o.length; p++)
          k.tagName === "PRE" && (d = !0), i += b(o[p], d);
        return e.node.openTagString(k) + i + e.node.closeTagString(k);
      }
      var f = [];
      function u(k) {
        var d = k.replace(/;;/gi, ";");
        return (d = d.replace(/^;/gi, "")).charAt(d.length) !== ";" && (d += ";"), d;
      }
      function T(k) {
        var d;
        for (d in k)
          if (Object.prototype.hasOwnProperty.call(k, d)) {
            var g = d.match(v), r = null;
            d === "style" && e.opts.htmlAllowedStyleProps.length && (r = k[d].match(c)), g && r ? k[d] = u(r.join(";")) : g && (d !== "style" || r) || delete k[d];
          }
        for (var o = "", i = Object.keys(k).sort(), p = 0; p < i.length; p++)
          k[d = i[p]].indexOf('"') < 0 ? o += " ".concat(d, '="').concat(k[d], '"') : o += " ".concat(d, "='").concat(k[d], "'");
        return o;
      }
      function x(k, d) {
        var g, r = document.implementation.createHTMLDocument("Froala DOC").createElement("DIV");
        N(r).append(k);
        var o = "";
        if (r) {
          var i = e.node.contents(r);
          for (g = 0; g < i.length; g++)
            d(i[g]);
          for (i = e.node.contents(r), g = 0; g < i.length; g++)
            o += b(i[g]);
        }
        return o;
      }
      function $(k, d, g) {
        var r = k = function(p) {
          return f = [], p = (p = (p = (p = p.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, function(s) {
            return f.push(s), "[FROALA.EDITOR.SCRIPT ".concat(f.length - 1, "]");
          })).replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi, function(s) {
            return f.push(s), "[FROALA.EDITOR.NOSCRIPT ".concat(f.length - 1, "]");
          })).replace(/<meta((?:[\w\W]*?)) http-equiv="/g, '<meta$1 data-fr-http-equiv="')).replace(/<img((?:[\w\W]*?)) src="/g, '<img$1 data-fr-src="');
        }(k), o = null;
        return e.opts.fullPage && (r = e.html.extractNode(k, "body") || (0 <= k.indexOf("<body") ? "" : k), g && (o = e.html.extractNode(k, "head") || "")), r = x(r, d), o && (o = x(o, d)), function(p) {
          return p = (p = (p = p.replace(/\[FROALA\.EDITOR\.SCRIPT ([\d]*)\]/gi, function(s, n) {
            return 0 <= e.opts.htmlRemoveTags.indexOf("script") ? "" : f[parseInt(n, 10)];
          })).replace(/\[FROALA\.EDITOR\.NOSCRIPT ([\d]*)\]/gi, function(s, n) {
            if (0 <= e.opts.htmlRemoveTags.indexOf("noscript"))
              return "";
            var C = f[parseInt(n, 10)].replace(/&lt;/g, "<").replace(/&gt;/g, ">"), m = N(C);
            if (m && m.length) {
              var h = x(m.html(), A);
              m.html(h), C = m.get(0).outerHTML;
            }
            return C;
          })).replace(/<img((?:[\w\W]*?)) data-fr-src="/g, '<img$1 src="');
        }(function(p, s, n) {
          if (e.opts.fullPage) {
            var C = e.html.extractDoctype(n), m = T(e.html.extractNodeAttrs(n, "html"));
            s = s === null ? e.html.extractNode(n, "head") || "<title></title>" : s;
            var h = T(e.html.extractNodeAttrs(n, "head")), S = T(e.html.extractNodeAttrs(n, "body"));
            return "".concat(C, "<html").concat(m, "><head").concat(h, ">").concat(s, "</head><body").concat(S, ">").concat(p, "</body></html>");
          }
          return p;
        }(r, o, k));
      }
      function E(k) {
        var d = e.doc.createElement("DIV");
        return d.innerText = k, d.textContent;
      }
      function A(k) {
        for (var d = e.node.contents(k), g = 0; g < d.length; g++)
          d[g].nodeType !== Node.TEXT_NODE && A(d[g]);
        (function(o) {
          if (o.tagName === "SPAN" && 0 <= (o.getAttribute("class") || "").indexOf("fr-marker"))
            return !1;
          if (o.tagName === "PRE" && function(w) {
            var R = w.innerHTML;
            0 <= R.indexOf(`
`) && (w.innerHTML = R.replace(/\n/g, "<br>"));
          }(o), o.nodeType === Node.ELEMENT_NODE && (o.getAttribute("data-fr-src") && o.getAttribute("data-fr-src").indexOf("blob:") !== 0 && o.setAttribute("data-fr-src", e.helpers.sanitizeURL(E(o.getAttribute("data-fr-src")))), o.getAttribute("href") && o.setAttribute("href", e.helpers.sanitizeURL(E(o.getAttribute("href")))), o.getAttribute("src") && o.setAttribute("src", e.helpers.sanitizeURL(E(o.getAttribute("src")))), o.getAttribute("srcdoc") && o.setAttribute("srcdoc", e.clean.html(o.getAttribute("srcdoc"))), 0 <= ["TABLE", "TBODY", "TFOOT", "TR"].indexOf(o.tagName) && (o.innerHTML = o.innerHTML.trim())), !e.opts.pasteAllowLocalImages && o.nodeType === Node.ELEMENT_NODE && o.tagName === "IMG" && o.getAttribute("data-fr-src") && o.getAttribute("data-fr-src").indexOf("file://") === 0)
            return o.parentNode.removeChild(o), !1;
          if (o.nodeType === Node.ELEMENT_NODE && a.HTML5Map[o.tagName] && e.node.attributes(o) === "") {
            var i = a.HTML5Map[o.tagName], p = "<".concat(i, ">").concat(o.innerHTML, "</").concat(i, ">");
            o.insertAdjacentHTML("beforebegin", p), (o = o.previousSibling).parentNode.removeChild(o.nextSibling);
          }
          if (e.opts.htmlAllowComments || o.nodeType !== Node.COMMENT_NODE)
            if (o.tagName && o.tagName.match(l)) {
              if (o.tagName == "STYLE" && e.helpers.isMac()) {
                var s, n = o.innerHTML.trim(), C = [], m = /{([^}]+)}/g;
                for (n = n.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*|<!--[\s\S]*?-->$/, ""); s = m.exec(n); )
                  C.push(s[1]);
                for (var h = function(w) {
                  var R = n.substring(0, n.indexOf("{")).trim();
                  !/^[a-z_-][a-z\d_-]*$/i.test(R) == 0 && o.parentNode.querySelectorAll(R).forEach(function(B) {
                    B.removeAttribute("class"), B.setAttribute("style", C[w]);
                  }), n = n.substring(n.indexOf("}") + 1);
                }, S = 0; n.indexOf("{") != -1; S++)
                  h(S);
              }
              o.parentNode.removeChild(o);
            } else if (o.tagName && !o.tagName.match(t))
              o.tagName === "svg" ? o.parentNode.removeChild(o) : e.browser.safari && o.tagName === "path" && o.parentNode && o.parentNode.tagName === "svg" || (o.outerHTML = o.innerHTML);
            else {
              var y = o.attributes;
              if (y)
                for (var M = y.length - 1; 0 <= M; M--) {
                  var O = y[M], H = O.nodeName.match(v), _ = null;
                  O.nodeName === "style" && e.opts.htmlAllowedStyleProps.length && (_ = O.value.match(c)), H && _ ? O.value = u(_.join(";")) : H && (O.nodeName !== "style" || _) || o.removeAttribute(O.nodeName);
                }
            }
          else
            o.data.indexOf("[FROALA.EDITOR") !== 0 && o.parentNode.removeChild(o);
        })(k);
      }
      return { _init: function() {
        e.opts.fullPage && N.merge(e.opts.htmlAllowedTags, ["head", "title", "style", "link", "base", "body", "html", "meta"]);
      }, html: function(d, g, r, o) {
        g === void 0 && (g = []), r === void 0 && (r = []);
        var i, p = N.merge([], e.opts.htmlAllowedTags);
        for (i = 0; i < g.length; i++)
          0 <= p.indexOf(g[i]) && p.splice(p.indexOf(g[i]), 1);
        var s = N.merge([], e.opts.htmlAllowedAttrs);
        for (i = 0; i < r.length; i++)
          0 <= s.indexOf(r[i]) && s.splice(s.indexOf(r[i]), 1);
        return s.push("data-fr-.*"), s.push("fr-.*"), t = new RegExp("^".concat(p.join("$|^"), "$"), "gi"), v = new RegExp("^".concat(s.join("$|^"), "$"), "gi"), l = new RegExp("^".concat(e.opts.htmlRemoveTags.join("$|^"), "$"), "gi"), c = e.opts.htmlAllowedStyleProps.length ? new RegExp("((^|;|\\s)".concat(e.opts.htmlAllowedStyleProps.join(":.+?(?=;|$))|((^|;|\\s)"), ":.+?(?=(;)|$))"), "gi") : null, d = $(d, A, !0), typeof e.opts.DOMPurify < "u" && (d = e.opts.DOMPurify.sanitize(d, { ADD_TAGS: e.opts.htmlAllowedTags, ALLOW_UNKNOWN_PROTOCOLS: !0 })), d;
      }, toHTML5: function() {
        var d = e.el.querySelectorAll(Object.keys(a.HTML5Map).join(","));
        if (d.length) {
          var g = !1;
          e.el.querySelector(".fr-marker") || (e.selection.save(), g = !0);
          for (var r = 0; r < d.length; r++)
            e.node.attributes(d[r]) === "" && N(d[r]).replaceWith("<".concat(a.HTML5Map[d[r].tagName], ">").concat(d[r].innerHTML, "</").concat(a.HTML5Map[d[r].tagName], ">"));
          g && e.selection.restore();
        }
      }, tables: function() {
        (function() {
          for (var g = e.el.querySelectorAll("tr"), r = 0, o = 0; o < g.length; o++) {
            var i = g[o].outerHTML.match(/rowspan="([0-9]+)"/);
            i && (r += Number(i[1]) - 1);
            for (var p = g[o].children, s = !0, n = 0; n < p.length; n++)
              if (p[n].tagName !== "TH") {
                s = !1;
                break;
              }
            if (s !== !1 && p.length !== 0) {
              var C = g[o];
              if (p.length === 1 && p[0].tagName === "TH" && r)
                r--;
              else {
                for (; C && C.tagName !== "TABLE" && C.tagName !== "THEAD"; )
                  C = C.parentNode;
                var m = C;
                m.firstChild.nodeType === Node.ELEMENT_NODE && m.firstChild.tagName === "THEAD" ? m = m.firstChild : m.tagName !== "THEAD" && (m = e.doc.createElement("THEAD"), C.insertBefore(m, C.firstChild)), m.appendChild(g[o]);
              }
            }
          }
        })();
      }, lists: function() {
        (function() {
          var g, r = [];
          do {
            if (r.length) {
              var o = r[0], i = e.doc.createElement("ul");
              o.parentNode.insertBefore(i, o);
              do {
                var p = o;
                o = o.nextSibling, i.appendChild(p);
              } while (o && o.tagName === "LI");
            }
            r = [];
            for (var s = e.el.querySelectorAll("li"), n = 0; n < s.length; n++)
              g = s[n], e.node.isList(g.parentNode) || r.push(s[n]);
          } while (0 < r.length);
        })(), function() {
          for (var g = e.el.querySelectorAll("ol + ol, ul + ul"), r = 0; r < g.length; r++) {
            var o = g[r];
            if (e.node.isList(o.previousSibling) && e.node.openTagString(o) === e.node.openTagString(o.previousSibling)) {
              for (var i = e.node.contents(o), p = 0; p < i.length; p++)
                o.previousSibling.appendChild(i[p]);
              o.parentNode.removeChild(o);
            }
          }
        }(), function() {
          for (var g = e.el.querySelectorAll("ul, ol"), r = 0; r < g.length; r++)
            for (var o = e.node.contents(g[r]), i = null, p = o.length - 1; 0 <= p; p--)
              !o[p].tagName && e.opts.htmlUntouched || o[p].tagName === "LI" || o[p].tagName == "UL" || o[p].tagName == "OL" ? i = null : o[p].tagName == "BR" ? N(o[p]).remove() : (i || (i = N(e.doc.createElement("LI"))).insertBefore(o[p]), i.prepend(o[p]));
        }(), function() {
          var g, r, o;
          do {
            r = !1;
            var i = e.el.querySelectorAll("li:empty");
            for (g = 0; g < i.length; g++)
              i[g].parentNode.removeChild(i[g]);
            var p = e.el.querySelectorAll("ul, ol");
            for (g = 0; g < p.length; g++)
              (o = p[g]).querySelector("LI") || (r = !0, o.parentNode.removeChild(o));
          } while (r === !0);
        }(), function() {
          for (var g = e.el.querySelectorAll("ul > ul, ol > ol, ul > ol, ol > ul"), r = 0; r < g.length; r++) {
            var o = g[r], i = o.previousSibling;
            i && (i.tagName === "LI" ? i.appendChild(o) : N(o).wrap("<li></li>"));
          }
        }(), function() {
          for (var g = e.el.querySelectorAll("li > ul, li > ol"), r = 0; r < g.length; r++) {
            var o = g[r];
            if (o.nextSibling)
              for (var i = o.nextSibling; 0 < i.childNodes.length; )
                o.append(i.childNodes[0]);
          }
        }(), function() {
          for (var g = e.el.querySelectorAll("li > ul, li > ol"), r = 0; r < g.length; r++) {
            var o = g[r];
            if (e.node.isFirstSibling(o) && o.parentNode.style.listStyleType != "none")
              N(o).before("<br/>");
            else if (o.previousSibling && o.previousSibling.tagName === "BR") {
              for (var i = o.previousSibling.previousSibling; i && e.node.hasClass(i, "fr-marker"); )
                i = i.previousSibling;
              i && i.tagName !== "BR" && N(o.previousSibling).remove();
            }
          }
        }(), function() {
          for (var g = e.el.querySelectorAll("li:empty"), r = 0; r < g.length; r++)
            N(g[r]).remove();
        }();
      }, invisibleSpaces: function(d) {
        return d.replace(/\u200b/g, "").length === d.length ? d : e.clean.exec(d, L);
      }, exec: $ };
    }, a.XS = 0, a.SM = 1, a.MD = 2, a.LG = 3, a.LinkRegExCommon = "[".concat("a-z\\u0080-\\u009f\\u00a1-\\uffff0-9-_\\.", "]{1,}"), a.LinkRegExEnd = "((:[0-9]{1,5})|)(((\\/|\\?|#)[a-z\\u00a1-\\uffff0-9@?\\|!^=%&amp;\\/~+#-\\'*-_{}]*)|())", a.LinkRegExTLD = "((".concat(a.LinkRegExCommon, ")(\\.(com|net|org|edu|mil|gov|co|biz|info|me|dev)))"), a.LinkRegExHTTP = "((ftp|http|https):\\/\\/".concat(a.LinkRegExCommon, ")"), a.LinkRegExAuth = "((ftp|http|https):\\/\\/[\\u0021-\\uffff]{1,}@".concat(a.LinkRegExCommon, ")"), a.LinkRegExWWW = "(www\\.".concat(a.LinkRegExCommon, "\\.[a-z0-9-]{2,24})"), a.LinkRegEx = "(".concat(a.LinkRegExTLD, "|").concat(a.LinkRegExHTTP, "|").concat(a.LinkRegExWWW, "|").concat(a.LinkRegExAuth, ")").concat(a.LinkRegExEnd), a.LinkProtocols = ["mailto", "tel", "sms", "notes", "data"], a.MAIL_REGEX = /.+@.+\..+/i, a.MODULES.helpers = function(e) {
      var t, l = e.$;
      function v() {
        var u = {}, T = function() {
          var k, d = -1;
          return navigator.appName === "Microsoft Internet Explorer" ? (k = navigator.userAgent, new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})").exec(k) !== null && (d = parseFloat(RegExp.$1))) : navigator.appName === "Netscape" && (k = navigator.userAgent, new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})").exec(k) !== null && (d = parseFloat(RegExp.$1))), d;
        }();
        if (0 < T)
          u.msie = !0;
        else {
          var x = navigator.userAgent.toLowerCase(), $ = /(edge)[ /]([\w.]+)/.exec(x) || /(chrome)[ /]([\w.]+)/.exec(x) || /(webkit)[ /]([\w.]+)/.exec(x) || /(opera)(?:.*version|)[ /]([\w.]+)/.exec(x) || /(msie) ([\w.]+)/.exec(x) || x.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(x) || [], E = $[1] || "";
          $[2], $[1] && (u[E] = !0), u.chrome ? u.webkit = !0 : u.webkit && (u.safari = !0);
        }
        return u.msie && (u.version = T), u;
      }
      function c() {
        return (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || function() {
          return navigator.maxTouchPoints && 2 < navigator.maxTouchPoints && /Macintosh/.test(navigator.userAgent);
        }()) && !b();
      }
      function N() {
        return /(Android)/g.test(navigator.userAgent) && !b();
      }
      function L() {
        return /(Blackberry)/g.test(navigator.userAgent);
      }
      function b() {
        return /(Windows Phone)/gi.test(navigator.userAgent);
      }
      var f = null;
      return { _init: function() {
        e.browser = v();
      }, isIOS: c, isMac: function() {
        return f === null && (f = 0 <= navigator.platform.toUpperCase().indexOf("MAC")), f;
      }, getIOSVersion: function() {
        if (c()) {
          var T = navigator.userAgent.match(/OS (\d)?\d_\d(_\d)?/i) || navigator.userAgent.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/);
          return T && T.length && Math.abs(T[0].split("_")[0].replace("OS ", "")) || NaN;
        }
        return NaN;
      }, isAndroid: N, isBlackberry: L, isWindowsPhone: b, isMobile: function() {
        return N() || c() || L();
      }, isEmail: function(T) {
        return !/^(https?:|ftps?:|)\/\//i.test(T) && a.MAIL_REGEX.test(T);
      }, requestAnimationFrame: function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(T) {
          window.setTimeout(T, 1e3 / 60);
        };
      }, getPX: function(T) {
        return parseInt(T, 10) || 0;
      }, screenSize: function(T) {
        try {
          var x = 0;
          if ((x = T ? e.$box.width() : e.$sc.width()) < 768)
            return a.XS;
          if (768 <= x && x < 992)
            return a.SM;
          if (992 <= x && x < 1200)
            return a.MD;
          if (1200 <= x)
            return a.LG;
        } catch {
          return a.LG;
        }
      }, isTouch: function() {
        return "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
      }, sanitizeURL: function(T) {
        return e.opts.DOMPurify && (T = e.opts.DOMPurify.sanitize(T, { ADD_TAGS: e.opts.htmlAllowedTags, ALLOW_UNKNOWN_PROTOCOLS: !0, ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp|xxx):|[^a-z]|[a-z+.]+(?:[^a-z+.\-:]|$))/i })), T = T.replace(/\son\w+='[^']*'/g, ""), /^(https?:|ftps?:|)\/\//i.test(T) || /^([A-Za-z]:(\\){1,2}|[A-Za-z]:((\\){1,2}[^\\]+)+)(\\)?$/i.test(T) || new RegExp("^(".concat(a.LinkProtocols.join("|"), "):"), "i").test(T) ? T : T = encodeURIComponent(T).replace(/%23/g, "#").replace(/%2F/g, "/").replace(/%25/g, "%").replace(/mailto%3A/gi, "mailto:").replace(/file%3A/gi, "file:").replace(/sms%3A/gi, "sms:").replace(/tel%3A/gi, "tel:").replace(/notes%3A/gi, "notes:").replace(/data%3Aimage/gi, "data:image").replace(/blob%3A/gi, "blob:").replace(/%3A(\d)/gi, ":$1").replace(/webkit-fake-url%3A/gi, "webkit-fake-url:").replace(/%3F/g, "?").replace(/%3D/g, "=").replace(/%26/g, "&").replace(/&amp;/g, "&").replace(/%2C/g, ",").replace(/%3B/g, ";").replace(/%2B/g, "+").replace(/%40/g, "@").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/%7B/g, "{").replace(/%7D/g, "}").replace(/%[0-1]+[0-9]+|%[0-1]+[A-F]+/g, "");
      }, isArray: function(T) {
        return T && !Object.prototype.propertyIsEnumerable.call(T, "length") && o1(T) === "object" && typeof T.length == "number";
      }, RGBToHex: function(T) {
        function x($) {
          return "0".concat(parseInt($, 10).toString(16)).slice(-2);
        }
        try {
          return T && T !== "transparent" ? /^#[0-9A-F]{6}$/i.test(T) ? T : (T = T.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/), "#".concat(x(T[1])).concat(x(T[2])).concat(x(T[3])).toUpperCase()) : "";
        } catch {
          return null;
        }
      }, HEXtoRGB: function(T) {
        T = T.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function($, E, A, k) {
          return E + E + A + A + k + k;
        });
        var x = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(T);
        return x ? "rgb(".concat(parseInt(x[1], 16), ", ").concat(parseInt(x[2], 16), ", ").concat(parseInt(x[3], 16), ")") : "";
      }, isURL: function(T) {
        return !!/^(https?:|ftps?:|)\/\//i.test(T) && (T = String(T).replace(/</g, "%3C").replace(/>/g, "%3E").replace(/"/g, "%22").replace(/ /g, "%20"), new RegExp("^".concat(a.LinkRegExHTTP).concat(a.LinkRegExEnd, "$"), "gi").test(T));
      }, getAlignment: function(T) {
        T.css || (T = l(T));
        var x = (T.css("text-align") || "").replace(/-(.*)-/g, "");
        if (["left", "right", "justify", "center"].indexOf(x) < 0) {
          if (!t) {
            var $ = l('<div dir="'.concat(e.opts.direction === "rtl" ? "rtl" : "auto", '" style="text-align: ').concat(e.$el.css("text-align"), '; position: fixed; left: -3000px;"><span id="s1">.</span><span id="s2">.</span></div>'));
            l("body").first().append($);
            var E = $.find("#s1").get(0).getBoundingClientRect().left, A = $.find("#s2").get(0).getBoundingClientRect().left;
            $.remove(), t = E < A ? "left" : "right";
          }
          x = t;
        }
        return x;
      }, scrollTop: function() {
        return e.o_win.pageYOffset ? e.o_win.pageYOffset : e.o_doc.documentElement && e.o_doc.documentElement.scrollTop ? e.o_doc.documentElement.scrollTop : e.o_doc.body.scrollTop ? e.o_doc.body.scrollTop : 0;
      }, scrollLeft: function() {
        return e.o_win.pageXOffset ? e.o_win.pageXOffset : e.o_doc.documentElement && e.o_doc.documentElement.scrollLeft ? e.o_doc.documentElement.scrollLeft : e.o_doc.body.scrollLeft ? e.o_doc.body.scrollLeft : 0;
      }, isInViewPort: function(T) {
        var x = T.getBoundingClientRect();
        return 0 <= (x = { top: Math.round(x.top), bottom: Math.round(x.bottom) }).top && x.bottom <= (window.innerHeight || document.documentElement.clientHeight) || x.top <= 0 && x.bottom >= (window.innerHeight || document.documentElement.clientHeight);
      } };
    }, a.MODULES.events = function(e) {
      var t, l = e.$, v = {};
      function c(g, r, o) {
        $(g, r, o);
      }
      function N(g) {
        if (g === void 0 && (g = !0), !e.$wp || (e.helpers.isIOS() && e.$win.get(0).focus(), e.core.hasFocus()))
          return !1;
        if (!e.core.hasFocus() && g) {
          var r = e.$win.scrollTop();
          if (e.browser.msie && e.$box && e.$box.css("position", "fixed"), e.browser.msie && e.$wp && e.$wp.css("overflow", "visible"), e.browser.msie && e.$sc && e.$sc.css("position", "fixed"), e.browser.msie || (f(), e.el.focus(), e.events.trigger("focus"), b()), e.browser.msie && e.$sc && e.$sc.css("position", ""), e.browser.msie && e.$box && e.$box.css("position", ""), e.browser.msie && e.$wp && e.$wp.css("overflow", "auto"), r !== e.$win.scrollTop() && e.$win.scrollTop(r), !e.selection.info(e.el).atStart)
            return !1;
        }
        if (!e.core.hasFocus() || 0 < e.$el.find(".fr-marker").length)
          return !1;
        if (e.selection.info(e.el).atStart && e.selection.isCollapsed() && e.html.defaultTag() !== null) {
          var o = e.markers.insert();
          if (o && !e.node.blockParent(o)) {
            l(o).remove();
            var i = e.$el.find(e.html.blockTagsQuery()).get(0);
            i && (l(i).prepend(a.MARKERS), e.selection.restore());
          } else
            o && l(o).remove();
        }
      }
      var L = !1;
      function b() {
        t = !0;
      }
      function f() {
        t = !1;
      }
      function u() {
        return t;
      }
      function T(g, r, o) {
        var i, p = g.split(" ");
        if (1 < p.length) {
          for (var s = 0; s < p.length; s++)
            T(p[s], r, o);
          return !0;
        }
        o === void 0 && (o = !1), i = g.indexOf("shared.") !== 0 ? (v[g] = v[g] || [], v[g]) : (e.shared._events[g] = e.shared._events[g] || [], e.shared._events[g]), o ? i.unshift(r) : i.push(r);
      }
      var x = [];
      function $(g, r, o, i, p) {
        typeof o == "function" && (p = i, i = o, o = !1);
        var s = p ? e.shared.$_events : x, n = p ? e.sid : e.id, C = "".concat(r.trim().split(" ").join(".ed".concat(n, " ")), ".ed").concat(n);
        o ? g.on(C, o, i) : g.on(C, i), s.push([g, C]);
      }
      function E(g) {
        for (var r = 0; r < g.length; r++)
          g[r][0].off(g[r][1]);
      }
      function A(g, r, o) {
        if (!e.edit.isDisabled() || o) {
          var i, p;
          if (g.indexOf("shared.") !== 0)
            i = v[g];
          else {
            if (0 < e.shared.count)
              return !1;
            i = e.shared._events[g];
          }
          if (i) {
            for (var s = 0; s < i.length; s++)
              if ((p = i[s].apply(e, r)) === !1)
                return !1;
          }
          return (!e.opts.events || !e.opts.events[g] || (p = e.opts.events[g].apply(e, r)) !== !1) && p;
        }
      }
      function k() {
        for (var g in v)
          Object.prototype.hasOwnProperty.call(v, g) && delete v[g];
      }
      function d() {
        for (var g in e.shared._events)
          Object.prototype.hasOwnProperty.call(e.shared._events, g) && delete e.shared._events[g];
      }
      return { _init: function() {
        e.shared.$_events = e.shared.$_events || [], e.shared._events = {}, function() {
          e.helpers.isMobile() ? (e._mousedown = "touchstart", e._mouseup = "touchend", e._move = "touchmove", e._mousemove = "touchmove") : (e._mousedown = "mousedown", e._mouseup = "mouseup", e._move = "", e._mousemove = "mousemove");
        }(), function() {
          c(e.$el, "click mouseup mousemove mousedown touchstart touchend dragenter dragover dragleave dragend drop dragstart", function(o) {
            A(o.type, [o]);
          }), T("mousedown", function() {
            for (var o = 0; o < a.INSTANCES.length; o++)
              a.INSTANCES[o] !== e && a.INSTANCES[o].popups && a.INSTANCES[o].popups.areVisible() && a.INSTANCES[o].$el.find(".fr-marker").remove();
          });
        }(), function() {
          c(e.$win, e._mousedown, function(o) {
            A("window.mousedown", [o]), b();
          }), c(e.$win, e._mouseup, function(o) {
            A("window.mouseup", [o]);
          }), c(e.$win, "beforeinput cut copy keydown keyup touchmove touchend", function(o) {
            A("window.".concat(o.type), [o]);
          });
        }(), function() {
          c(e.$doc, "dragend drop", function(o) {
            A("document.".concat(o.type), [o]);
          });
        }(), function() {
          c(e.$el, "beforeinput keydown keypress keyup input", function(o) {
            A(o.type, [o]);
          });
        }(), function() {
          c(e.$el, "focus", function(o) {
            u() && (N(!1), L === !1 && (A(o.type, [o]), e.helpers.isMobile() && f()));
          }), c(e.$el, "blur", function(o) {
            u() && L === !0 && (A(o.type, [o]), e.helpers.isMobile() && e.opts.toolbarContainer && (e.shared.selected_editor = e.id), b());
          }), $(e.$el, "mousedown", '[contenteditable="true"]', function() {
            f(), e.$el.blur();
          }), T("focus", function() {
            L = !0;
          }), T("blur", function() {
            L = !1;
          });
        }(), b(), function() {
          c(e.$el, "cut copy paste beforepaste", function(o) {
            A(o.type, [o]);
          });
        }(), T("destroy", k), T("shared.destroy", d);
      }, on: T, trigger: A, bindClick: function(r, o, i) {
        $(r, e._mousedown, o, function(p) {
          e.edit.isDisabled() || function(n) {
            var C = l(n.currentTarget);
            return e.edit.isDisabled() || e.node.hasClass(C.get(0), "fr-disabled") ? (n.preventDefault(), !1) : n.type === "mousedown" && n.which !== 1 || (e.helpers.isMobile() || n.preventDefault(), (e.helpers.isAndroid() || e.helpers.isWindowsPhone()) && C.parents(".fr-dropdown-menu").length === 0 && (n.preventDefault(), n.stopPropagation()), C.addClass("fr-selected"), void e.events.trigger("commands.mousedown", [C]));
          }(p);
        }, !0), $(r, "".concat(e._mouseup, " ").concat(e._move), o, function(p) {
          e.edit.isDisabled() || function(n, C) {
            var m = l(n.currentTarget);
            if (e.edit.isDisabled() || e.node.hasClass(m.get(0), "fr-disabled"))
              return n.preventDefault(), !1;
            if (n.type === "mouseup" && n.which !== 1 || e.button.getButtons(".fr-selected", !0).get(0) == m.get(0) && !e.node.hasClass(m.get(0), "fr-selected"))
              return !0;
            if (n.type !== "touchmove") {
              if (n.stopPropagation(), n.stopImmediatePropagation(), n.preventDefault(), !e.node.hasClass(m.get(0), "fr-selected"))
                return e.button.getButtons(".fr-selected", !0).removeClass("fr-selected"), !1;
              if (e.button.getButtons(".fr-selected", !0).removeClass("fr-selected"), m.data("dragging") || m.attr("disabled"))
                return m.removeData("dragging"), !1;
              var h = m.data("timeout");
              h && (clearTimeout(h), m.removeData("timeout")), C.apply(e, [n]);
            } else
              m.data("timeout") || m.data("timeout", setTimeout(function() {
                m.data("dragging", !0);
              }, 100));
          }(p, i);
        }, !0), $(r, "mousedown click mouseup", o, function(p) {
          e.edit.isDisabled() || p.stopPropagation();
        }, !0), T("window.mouseup", function() {
          e.edit.isDisabled() || (r.find(o).removeClass("fr-selected"), b());
        }), $(r, "mouseover", o, function() {
          l(this).hasClass("fr-options") && l(this).prev(".fr-btn").addClass("fr-btn-hover"), l(this).next(".fr-btn").hasClass("fr-options") && l(this).next(".fr-btn").addClass("fr-btn-hover");
        }), $(r, "mouseout", o, function() {
          l(this).hasClass("fr-options") && l(this).prev(".fr-btn").removeClass("fr-btn-hover"), l(this).next(".fr-btn").hasClass("fr-options") && l(this).next(".fr-btn").removeClass("fr-btn-hover");
        });
      }, disableBlur: f, enableBlur: b, blurActive: u, focus: N, chainTrigger: function(r, o, i) {
        if (!e.edit.isDisabled() || i) {
          var p, s;
          if (r.indexOf("shared.") !== 0)
            p = v[r];
          else {
            if (0 < e.shared.count)
              return !1;
            p = e.shared._events[r];
          }
          if (p)
            for (var n = 0; n < p.length; n++)
              (s = p[n].apply(e, [o])) !== void 0 && (o = s);
          return e.opts.events && e.opts.events[r] && (s = e.opts.events[r].apply(e, [o])) !== void 0 && (o = s), o;
        }
      }, $on: $, $off: function() {
        E(x), x = [], e.shared.count === 0 && (E(e.shared.$_events), e.shared.$_events = []);
      } };
    }, Object.assign(a.DEFAULTS, { indentMargin: 20 }), a.COMMANDS = { bold: { title: "Bold", toggle: !0, refresh: function(e) {
      var t = this.format.is("strong");
      e.toggleClass("fr-active", t).attr("aria-pressed", t);
    } }, italic: { title: "Italic", toggle: !0, refresh: function(e) {
      var t = this.format.is("em");
      e.toggleClass("fr-active", t).attr("aria-pressed", t);
    } }, underline: { title: "Underline", toggle: !0, refresh: function(e) {
      var t = this.format.is("u");
      e.toggleClass("fr-active", t).attr("aria-pressed", t);
    } }, strikeThrough: { title: "Strikethrough", toggle: !0, refresh: function(e) {
      var t = this.format.is("s");
      e.toggleClass("fr-active", t).attr("aria-pressed", t);
    } }, subscript: { title: "Subscript", toggle: !0, refresh: function(e) {
      var t = this.format.is("sub");
      e.toggleClass("fr-active", t).attr("aria-pressed", t);
    } }, superscript: { title: "Superscript", toggle: !0, refresh: function(e) {
      var t = this.format.is("sup");
      e.toggleClass("fr-active", t).attr("aria-pressed", t);
    } }, outdent: { title: "Decrease Indent" }, indent: { title: "Increase Indent" }, undo: { title: "Undo", undo: !1, forcedRefresh: !0, disabled: !0 }, redo: { title: "Redo", undo: !1, forcedRefresh: !0, disabled: !0 }, insertHR: { title: "Insert Horizontal Line" }, clearFormatting: { title: "Clear Formatting" }, selectAll: { title: "Select All", undo: !1 }, moreText: { title: "More Text", undo: !1 }, moreParagraph: { title: "More Paragraph", undo: !1 }, moreRich: { title: "More Rich", undo: !1 }, moreMisc: { title: "More Misc", undo: !1 } }, a.RegisterCommand = function(e, t) {
      a.COMMANDS[e] = t;
    }, a.MODULES.commands = function(e) {
      var t = e.$;
      function l(x) {
        return e.html.defaultTag() && (x = "<".concat(e.html.defaultTag(), ">").concat(x, "</").concat(e.html.defaultTag(), ">")), x;
      }
      var v = { bold: function() {
        L("bold", "strong");
      }, subscript: function() {
        e.format.is("sup") && e.format.remove("sup"), L("subscript", "sub");
      }, superscript: function() {
        e.format.is("sub") && e.format.remove("sub"), L("superscript", "sup");
      }, italic: function() {
        L("italic", "em");
      }, strikeThrough: function() {
        L("strikeThrough", "s");
      }, underline: function() {
        L("underline", "u");
      }, undo: function() {
        e.undo.run();
      }, redo: function() {
        e.undo.redo();
      }, indent: function() {
        b(1);
      }, outdent: function() {
        b(-1);
      }, show: function() {
        e.opts.toolbarInline && e.toolbar.showInline(null, !0);
      }, insertHR: function() {
        e.selection.remove();
        var x = "";
        e.core.isEmpty() && (x = l(x = "<br>"));
        var $ = '<hr id="fr-just" class="fr-just">'.concat(x);
        e.opts.trackChangesEnabled && ($ = e.track_changes.wrapInTracking(t($), "hrWrapper").get(0).outerHTML), e.html.insert($);
        var E, A = e.$el.find("hr#fr-just").length ? e.$el.find("hr#fr-just") : e.$el.find(".fr-just");
        A.removeAttr("id"), A.removeAttr("class");
        var k = e.opts.trackChangesEnabled && A[0].parentNode.tagName === "SPAN" && A[0].parentNode.parentNode.tagName === "P";
        if (A.next().length === 0) {
          var d = e.html.defaultTag();
          d && !k ? A.after(t(e.doc.createElement(d)).append("<br>").get(0)) : k ? A[0].parentNode.after(t(e.doc.createElement(d)).append("<br>").get(0)) : A.after("<br>");
        }
        A.prev().is("hr") ? E = e.selection.setAfter(A.get(0), !1) : A.next().is("hr") ? E = e.selection.setBefore(A.get(0), !1) : k || e.selection.setAfter(A.get(0), !1) ? e.selection.setAfter(A[0].parentNode, !1) : e.selection.setBefore(A.get(0), !1), E || E === void 0 || (x = l(x = "".concat(a.MARKERS, "<br>")), A.after(x)), e.selection.restore();
      }, clearFormatting: function() {
        e.format.remove();
      }, selectAll: function() {
        e.doc.execCommand("selectAll", !1, !1);
      }, moreText: function(x) {
        c(x);
      }, moreParagraph: function(x) {
        c(x);
      }, moreRich: function(x) {
        c(x);
      }, moreMisc: function(x) {
        c(x);
      }, moreTrackChanges: function() {
        c("trackChanges");
      } };
      function c(x) {
        var $ = e.$tb.find("[data-cmd=".concat(x, "]")), E = e.$tb.find("[data-cmd=html]");
        e.opts.trackChangesEnabled || e.markdown && e.markdown.isEnabled() ? E && E.addClass("fr-disabled") : E && E.removeClass("fr-disabled"), function(k) {
          e.helpers.isMobile() && e.opts.toolbarInline && e.events.disableBlur();
          var d = e.$tb.find('.fr-more-toolbar[data-name="'.concat(k.attr("data-group-name"), '"]'));
          if (k.data("cmd") === "trackChanges" && (d = e.$tb.find('.fr-more-toolbar[data-name="'.concat(k.attr("id"), '"]'))), e.$tb.find(".fr-open").not(k).not('[data-cmd="trackChanges"]').removeClass("fr-open"), k.toggleClass("fr-open"), e.$tb.find(".fr-more-toolbar").removeClass("fr-overflow-visible"), e.$tb.find(".fr-expanded").not(d).length) {
            var g = e.$tb.find(".fr-expanded").not(d);
            g.each(function(r, o) {
              t(o).data("name").indexOf("trackChanges-") != 0 && t(o).data("name").indexOf("moreRich-") != 0 ? t(o).toggleClass("fr-expanded") : k.parents('[data-name^="moreRich-"]').length || t(o).data("name").indexOf("trackChanges-") == 0 || t(o).find('[id^="trackChanges-"]').length && e.opts.trackChangesEnabled || t(o).toggleClass("fr-expanded");
            }), d.toggleClass("fr-expanded");
          } else
            d.toggleClass("fr-expanded"), e.$box.toggleClass("fr-toolbar-open"), e.$tb.toggleClass("fr-toolbar-open");
        }($), e.toolbar.setMoreToolbarsHeight();
      }
      function N(x, $) {
        if (!(e.markdown && e.markdown.isEnabled() && (x === "bold" || x === "italic" || x === "underline") || e.opts.trackChangesEnabled && x === "markdown") && e.events.trigger("commands.before", t.merge([x], $ || [])) !== !1) {
          var E = a.COMMANDS[x] && a.COMMANDS[x].callback || v[x], A = !0, k = !1;
          a.COMMANDS[x] && (typeof a.COMMANDS[x].focus < "u" && (A = a.COMMANDS[x].focus), typeof a.COMMANDS[x].accessibilityFocus < "u" && (k = a.COMMANDS[x].accessibilityFocus)), (!e.core.hasFocus() && A || !e.core.hasFocus() && k && e.accessibility.hasFocus()) && (e.el.focus({ preventScroll: !0 }), e.events.trigger("focus")), a.COMMANDS[x] && a.COMMANDS[x].undo !== !1 && (e.$el.find(".fr-marker").length && (e.events.disableBlur(), e.selection.restore()), e.undo.saveStep()), E && E.apply(e, t.merge([x], $ || [])), e.events.trigger("commands.after", t.merge([x], $ || [])), a.COMMANDS[x] && a.COMMANDS[x].undo !== !1 && e.undo.saveStep();
        }
      }
      function L(x, $) {
        e.format.toggle($);
      }
      function b(x) {
        e.selection.save(), e.html.wrap(!0, !0, !0, !0), e.selection.restore();
        for (var $ = e.selection.blocks(), E = 0; E < $.length; E++)
          if ($[E].tagName !== "LI" && $[E].parentNode.tagName != "LI" && ($[E].tagName !== "LI" || $[E].parentNode.tagName !== "LI")) {
            var A = t($[E]);
            $[E].tagName != "LI" && $[E].parentNode.tagName == "LI" && (A = t($[E].parentNode));
            var k = e.opts.direction === "rtl" || A.css("direction") === "rtl" ? "margin-right" : "margin-left", d = e.helpers.getPX(A.css(k));
            if (A.width() < 2 * e.opts.indentMargin && 0 < x)
              continue;
            $[E].parentNode.tagName != "UL" && $[E].parentNode.tagName != "OL" && $[E].parentNode.tagName != "LI" && A.css(k, Math.max(d + x * e.opts.indentMargin, 0) || ""), A.removeClass("fr-temp-div");
          }
        e.selection.save(), e.html.unwrap(), e.selection.restore();
      }
      function f(x) {
        return function() {
          N(x);
        };
      }
      var u = {};
      for (var T in v)
        Object.prototype.hasOwnProperty.call(v, T) && (u[T] = f(T));
      return Object.assign(u, { exec: N, _init: function() {
        e.events.on("keydown", function($) {
          var E = e.selection.element();
          if (E && E.tagName === "HR" && !e.keys.isArrow($.which))
            return $.preventDefault(), !1;
        }), e.events.on("keyup", function($) {
          var E = e.selection.element();
          if (E && E.tagName === "HR") {
            if ($.which === a.KEYCODE.ARROW_LEFT || $.which === a.KEYCODE.ARROW_UP) {
              if (E.previousSibling)
                return e.node.isBlock(E.previousSibling) ? e.selection.setAtEnd(E.previousSibling) : t(E).before(a.MARKERS), e.selection.restore(), !1;
            } else if (($.which === a.KEYCODE.ARROW_RIGHT || $.which === a.KEYCODE.ARROW_DOWN) && E.nextSibling)
              return e.node.isBlock(E.nextSibling) ? e.selection.setAtStart(E.nextSibling) : t(E).after(a.MARKERS), e.selection.restore(), !1;
          }
        }), e.events.on("mousedown", function($) {
          if ($.target && $.target.tagName === "HR")
            return $.preventDefault(), $.stopPropagation(), !1;
        }), e.events.on("mouseup", function() {
          var $ = e.selection.element();
          $ === e.selection.endElement() && $ && $.tagName === "HR" && ($.nextSibling && (e.node.isBlock($.nextSibling) ? e.selection.setAtStart($.nextSibling) : t($).after(a.MARKERS)), e.selection.restore());
        });
      } });
    }, a.MODULES.cursorLists = function(e) {
      var t = e.$;
      function l(N) {
        for (var L = N; L.tagName !== "LI"; )
          L = L.parentNode;
        return L;
      }
      function v(N) {
        for (var L = N; !e.node.isList(L); )
          L = L.parentNode;
        return L;
      }
      function c(N) {
        for (var L = "", b = 0; b < N.length; b++) {
          var f = N[b];
          L += "".concat(f.name, "='").concat(f.value, "' ");
        }
        return L;
      }
      return { _startEnter: function(L) {
        var b, f = l(L), u = f.nextSibling, T = f.previousSibling, x = e.html.defaultTag();
        if (e.node.isEmpty(f, !0) && u) {
          for (var $ = "", E = "", A = L.parentNode; !e.node.isList(A) && A.parentNode && (A.parentNode.tagName !== "LI" || A.parentNode === f); )
            -1 < ["OL", "LI", "UL"].indexOf(A.tagName) && ($ = e.node.openTagString(A) + $, E += e.node.closeTagString(A)), A = A.parentNode;
          $ = e.node.openTagString(A) + $, E += e.node.closeTagString(A);
          var k = "";
          if (A.parentNode && A.parentNode.tagName === "LI")
            if (A.parentNode.attributes.length) {
              var d = c(A.parentNode.attributes);
              k = "".concat(E, "<li ").concat(d, ">").concat(a.MARKERS, "<br>").concat($);
            } else
              k = "".concat(E, "<li>").concat(a.MARKERS, "<br>").concat($);
          else
            k = x ? "".concat(E, "<").concat(x, ">").concat(a.MARKERS, "<br></").concat(x, ">").concat($) : "".concat(E + a.MARKERS, "<br>").concat($);
          for (; ["UL", "OL"].indexOf(A.tagName) < 0 || A.parentNode && A.parentNode.tagName === "LI"; )
            A = A.parentNode;
          t(f).replaceWith('<span id="fr-break"></span>');
          var g = e.node.openTagString(A) + t(A).html() + e.node.closeTagString(A);
          g = g.replace(/<span id="fr-break"><\/span>/g, k), t(A).replaceWith(g), e.$el.find("li:empty").remove(), e.$el.find("li > p > span:empty").length && e.$el.find("li > p > span:empty")[0].parentNode.parentNode.remove();
        } else if (T && u || !e.node.isEmpty(f, !0)) {
          var r = "<br>", o = L.parentNode;
          for (o && o.tagName === "A" && (o = null); o && o.tagName !== "LI"; )
            r = e.node.openTagString(o) + r + e.node.closeTagString(o), o = o.parentNode;
          if (o && o.attributes.length) {
            var i = c(o.attributes);
            t(f).before("<li ".concat(i, ">").concat(r, "</li>"));
          } else
            t(f).before("<li>".concat(r, "</li>"));
          t(L).remove();
        } else if (T) {
          b = v(f);
          for (var p = "".concat(a.MARKERS, "<br>"), s = L.parentNode; s && s.tagName !== "LI"; )
            p = e.node.openTagString(s) + p + e.node.closeTagString(s), s = s.parentNode;
          if (b.parentNode && b.parentNode.tagName === "LI")
            if (b.parentNode.attributes.length) {
              var n = c(b.parentNode.attributes);
              t(b.parentNode).after("<li ".concat(n, ">").concat(p, "</li>"));
            } else
              t(b.parentNode).after("<li>".concat(p, "</li>"));
          else
            x ? t(b).after("<".concat(x, ">").concat(p, "</").concat(x, ">")) : t(b).after(p);
          t(f).remove();
        } else
          (b = v(f)).parentNode && b.parentNode.tagName === "LI" ? u ? t(b.parentNode).before("".concat(e.node.openTagString(f) + a.MARKERS, "<br></li>")) : t(b.parentNode).after("".concat(e.node.openTagString(f) + a.MARKERS, "<br></li>")) : x ? t(b).before("<".concat(x, ">").concat(a.MARKERS, "<br></").concat(x, ">")) : t(b).before("".concat(a.MARKERS, "<br>")), t(f).remove();
      }, _middleEnter: function(L) {
        for (var b = l(L), f = "", u = L, T = "", x = "", $ = !1; u !== b; ) {
          var E = (u = u.parentNode).tagName === "A" && e.cursor.isAtEnd(L, u) ? "fr-to-remove" : "";
          $ || u == b || e.node.isBlock(u) || ($ = !0, T += a.INVISIBLE_SPACE), T = e.node.openTagString(t(u).clone().addClass(E).get(0)) + T, x += e.node.closeTagString(u);
        }
        f = x + f + T + a.MARKERS + (e.opts.keepFormatOnDelete ? a.INVISIBLE_SPACE : ""), t(L).replaceWith('<span id="fr-break"></span>');
        var A = e.node.openTagString(b) + t(b).html() + e.node.closeTagString(b);
        A = A.replace(/<span id="fr-break"><\/span>/g, f), t(b).replaceWith(A);
      }, _endEnter: function(L) {
        for (var b = l(L), f = a.MARKERS, u = "", T = L, x = !1; T !== b; )
          if (!(T = T.parentNode).classList.contains("fr-img-space-wrap") && !T.classList.contains("fr-img-space-wrap2")) {
            var $ = T.tagName === "A" && e.cursor.isAtEnd(L, T) ? "fr-to-remove" : "";
            x || T === b || e.node.isBlock(T) || (x = !0, u += a.INVISIBLE_SPACE), u = e.node.openTagString(t(T).clone().addClass($).get(0)) + u, f += e.node.closeTagString(T);
          }
        var E = u + f;
        t(L).remove(), t(b).after(E);
      }, _backspace: function(L) {
        var b = l(L), f = b.previousSibling;
        if (f) {
          f = t(f).find(e.html.blockTagsQuery()).get(-1) || f, t(L).replaceWith(a.MARKERS);
          var u = e.node.contents(f);
          u.length && u[u.length - 1].tagName === "BR" && t(u[u.length - 1]).remove(), t(b).find(e.html.blockTagsQuery()).not("ol, ul, table").each(function() {
            this.parentNode === b && t(this).replaceWith(t(this).html() + (e.node.isEmpty(this) ? "" : "<br>"));
          });
          for (var T, x = e.node.contents(b)[0]; x && !e.node.isList(x); )
            T = x.nextSibling, t(f).append(x), x = T;
          for (f = b.previousSibling; x; )
            T = x.nextSibling, t(f).append(x), x = T;
          1 < (u = e.node.contents(f)).length && u[u.length - 1].tagName === "BR" && t(u[u.length - 1]).remove(), t(b).remove();
        } else {
          var $ = v(b);
          if (t(L).replaceWith(a.MARKERS), $.parentNode && $.parentNode.tagName === "LI") {
            var E = $.previousSibling;
            e.node.isBlock(E) ? (t(b).find(e.html.blockTagsQuery()).not("ol, ul, table").each(function() {
              this.parentNode === b && t(this).replaceWith(t(this).html() + (e.node.isEmpty(this) ? "" : "<br>"));
            }), t(E).append(t(b).html())) : t($).before(t(b).html());
          } else {
            var A = e.html.defaultTag();
            A && t(b).find(e.html.blockTagsQuery()).length === 0 ? t($).before("<".concat(A, ">").concat(t(b).html(), "</").concat(A, ">")) : t($).before(t(b).html());
          }
          t(b).remove(), e.html.wrap(), t($).find("li").length === 0 && t($).remove();
        }
      }, _del: function(L) {
        var b, f = l(L), u = f.nextSibling;
        if (u) {
          (b = e.node.contents(u)).length && b[0].tagName === "BR" && t(b[0]).remove(), t(u).find(e.html.blockTagsQuery()).not("ol, ul, table").each(function() {
            this.parentNode === u && t(this).replaceWith(t(this).html() + (e.node.isEmpty(this) ? "" : "<br>"));
          });
          for (var T, x = L, $ = e.node.contents(u)[0]; $ && !e.node.isList($); )
            T = $.nextSibling, t(x).after($), x = $, $ = T;
          for (; $; )
            T = $.nextSibling, t(f).append($), $ = T;
          t(L).replaceWith(a.MARKERS), t(u).remove();
        } else {
          for (var E = f; !E.nextSibling && E !== e.el; )
            E = E.parentNode;
          if (E === e.el)
            return !1;
          if (E = E.nextSibling, e.node.isBlock(E)) {
            if (a.NO_DELETE_TAGS.indexOf(E.tagName) < 0) {
              if (t(L).replaceWith(a.MARKERS), (b = e.node.contents(f)).length && b[b.length - 1].tagName === "BR" && t(b[b.length - 1]).remove(), E.isContentEditable && E.tagName === "DIV" && (!e.node.isBlock(E.previousSibling) || E.previousSibling.tagName === "DIV"))
                return;
              t(f).append(t(E).html()), t(E).remove();
            }
          } else {
            for ((b = e.node.contents(f)).length && b[b.length - 1].tagName === "BR" && t(b[b.length - 1]).remove(), t(L).replaceWith(a.MARKERS); E && !e.node.isBlock(E) && E.tagName !== "BR"; )
              t(f).append(t(E)), E = E.nextSibling;
            t(E).remove();
          }
        }
      } };
    }, a.NO_DELETE_TAGS = ["TH", "TD", "TR", "TABLE", "FORM"], a.SIMPLE_ENTER_TAGS = ["TH", "TD", "LI", "DL", "DT", "FORM"], a.MODULES.cursor = function(e) {
      var t = e.$;
      function l(d) {
        return !!d && (e.node.isBlock(d) ? d.tagName !== "P" || !d.nextElementSibling || !d.parentElement || d.nextElementSibling.tagName !== "OL" || d.parentElement.tagName !== "LI" : d.nextSibling && d.nextSibling.nodeType === Node.TEXT_NODE && d.nextSibling.textContent.replace(/\u200b/g, "").length === 0 ? l(d.nextSibling) : !(d.nextSibling && (!d.previousSibling || d.nextSibling.tagName !== "BR" || d.nextSibling.nextSibling)) && l(d.parentNode));
      }
      function v(d) {
        return !!d && (!!e.node.isBlock(d) || (d.previousSibling && d.previousSibling.nodeType === Node.TEXT_NODE && d.previousSibling.textContent.replace(/\u200b/g, "").length === 0 ? v(d.previousSibling) : !d.previousSibling && (!(d.previousSibling || !e.node.hasClass(d.parentNode, "fr-inner")) || v(d.parentNode))));
      }
      function c(d, g) {
        return !!d && d !== e.$wp.get(0) && (d.previousSibling && d.previousSibling.nodeType === Node.TEXT_NODE && d.previousSibling.textContent.replace(/\u200b/g, "").length === 0 ? c(d.previousSibling, g) : !d.previousSibling && (d.parentNode === g || c(d.parentNode, g)));
      }
      function N(d, g) {
        return !!d && d !== e.$wp.get(0) && (d.nextSibling && d.nextSibling.nodeType === Node.TEXT_NODE && d.nextSibling.textContent.replace(/\u200b/g, "").length === 0 ? N(d.nextSibling, g) : !(d.nextSibling && (!d.previousSibling || d.nextSibling.tagName !== "BR" || d.nextSibling.nextSibling)) && (d.parentNode === g || N(d.parentNode, g)));
      }
      function L(d) {
        return 0 < t(d).parentsUntil(e.$el, "LI").length && t(d).parentsUntil("LI", "TABLE").length === 0;
      }
      function b(d, g) {
        var r = new RegExp("".concat(g ? "^" : "", "(([\\uD83C-\\uDBFF\\uDC00-\\uDFFF]+\\u200D)*[\\uD83C-\\uDBFF\\uDC00-\\uDFFF]{2})").concat(g ? "" : "$"), "i"), o = d.match(r);
        return o ? o[0].length : 1;
      }
      function f(d) {
        for (var g, r = d; !r.previousSibling; )
          if (r = r.parentNode, e.node.isElement(r))
            return !1;
        r = r.previousSibling;
        var o = e.opts.htmlAllowedEmptyTags, i = r.tagName && r.tagName.toLowerCase();
        if ((!e.node.isBlock(r) || r.lastChild && i && 0 <= o.indexOf(i)) && e.node.isEditable(r)) {
          for (g = e.node.contents(r); r.nodeType !== Node.TEXT_NODE && !e.node.isDeletable(r) && g.length && e.node.isEditable(r); )
            r = g[g.length - 1], g = e.node.contents(r);
          if (r.nodeType === Node.TEXT_NODE) {
            var p = r.textContent, s = p.length;
            if (p.length && p[p.length - 1] === `
`)
              return r.textContent = p.substring(0, s - 2), r.textContent.length === 0 && r.parentNode.removeChild(r), f(d);
            e.opts.tabSpaces && p.length >= e.opts.tabSpaces && p.substr(p.length - e.opts.tabSpaces, p.length - 1).replace(/ /g, "").replace(new RegExp(a.UNICODE_NBSP, "g"), "").length === 0 && (s = p.length - e.opts.tabSpaces + 1), r.textContent = p.substring(0, s - b(p));
            var n = r.textContent;
            (e.opts.enter === a.ENTER_BR && 0 < n.length && n.charAt(n.length - 1) === " " || n.length === 0 && d.previousSibling && d.previousSibling.nodeType === 3 && d.parentNode.tagName !== "TD" && d.parentNode.tagName !== "LI" && p !== "​") && (d.insertAdjacentHTML("beforebegin", a.INVISIBLE_SPACE), r = r.nextSibling), e.opts.trackChangesEnabled && r.textContent.length === 0 && t(r.parentElement).data("tracking") && t(r.parentElement).find("[data-tracking-deleted=true]").length === 0 && (t(d).insertBefore(r.parentElement), t(r.parentElement).remove(), r = t(d)[0].previousSibling), e.opts.htmlUntouched && !d.nextSibling && r.textContent.length && r.textContent[r.textContent.length - 1] === " " && (r.textContent = r.textContent.substring(0, r.textContent.length - 1) + a.UNICODE_NBSP);
            var C = p.length !== r.textContent.length;
            if (e.opts.enter !== a.ENTER_BR && r && r.previousSibling && r.previousSibling.previousSibling && r.previousSibling.previousSibling.tagName === "BR" && r.textContent.length === 0 && r.previousSibling.previousSibling.remove(), r.textContent.length === 0 && r.parentNode.tagName === "LI" && r.previousSibling && r.previousSibling.tagName === "BR" && r.previousSibling.remove(), r.textContent.length === 0)
              if (C && e.opts.keepFormatOnDelete)
                t(r).after(a.INVISIBLE_SPACE + a.MARKERS);
              else if (p.length !== 0 && e.node.isBlock(r.parentNode))
                t(r).after(a.MARKERS);
              else if ((r.parentNode.childNodes.length != 2 || r.parentNode != d.parentNode) && r.parentNode.childNodes.length != 1 || e.node.isBlock(r.parentNode) || e.node.isElement(r.parentNode) || !e.node.isDeletable(r.parentNode)) {
                for (var m, h = r; !e.node.isElement(r.parentNode) && e.node.isEmpty(r.parentNode) && a.NO_DELETE_TAGS.indexOf(r.parentNode.tagName) < 0; )
                  if ((r = r.parentNode).tagName === "A") {
                    var S = r.childNodes[0];
                    for (t(r).before(S), m = !0; 0 < S.childNodes.length; )
                      S = S.childNodes[0];
                    r.parentNode.removeChild(r), r = S;
                    break;
                  }
                m || (r = h), t(r).after(a.MARKERS), e.node.isElement(r.parentNode) && !d.nextSibling && r.previousSibling && r.previousSibling.tagName === "BR" && t(d).after("<br>");
                var y = r.parentNode;
                r.parentNode.removeChild(r), e.node.isEmpty(y) && t(y).html(a.INVISIBLE_SPACE + a.MARKERS);
              } else
                t(r.parentNode).after(a.MARKERS), t(r.parentNode).remove();
            else
              t(r).after(a.MARKERS);
          } else
            e.node.isDeletable(r) ? (t(r).after(a.MARKERS), t(r).remove()) : d.nextSibling && d.nextSibling.tagName === "BR" && e.node.isVoid(r) && r.tagName !== "BR" ? (t(d.nextSibling).remove(), t(d).replaceWith(a.MARKERS)) : e.events.trigger("node.remove", [t(r)]) !== !1 && (t(r).after(a.MARKERS), t(r).remove());
        } else if (a.NO_DELETE_TAGS.indexOf(r.tagName) < 0 && (e.node.isEditable(r) || e.node.isDeletable(r)))
          if (e.node.isDeletable(r))
            t(d).replaceWith(a.MARKERS), t(r).remove();
          else if (e.node.isEmpty(r) && !e.node.isList(r))
            t(r).remove(), t(d).replaceWith(a.MARKERS);
          else {
            for (e.node.isList(r) && (r = t(r).find("li").last().get(0)), (g = e.node.contents(r)) && 0 < g.length && g[g.length - 1].tagName === "BR" && t(g[g.length - 1]).remove(), g = e.node.contents(r); g && 0 < g.length && e.node.isBlock(g[g.length - 1]); )
              r = g[g.length - 1], g = e.node.contents(r);
            t(r).append(a.MARKERS);
            for (var M = d; !M.previousSibling; )
              M = M.parentNode;
            for (; M && M.tagName !== "BR" && !e.node.isBlock(M); ) {
              var O = M;
              M = M.nextSibling, t(r).append(O);
            }
            M && M.tagName === "BR" && t(M).remove(), t(d).remove();
          }
        else
          d.nextSibling && d.nextSibling.tagName === "BR" && t(d.nextSibling).remove();
        return !0;
      }
      function u(d) {
        var g = 0 < t(d).parentsUntil(e.$el, "BLOCKQUOTE").length, r = e.node.deepestParent(d, [], !g);
        if (r && r.tagName === "BLOCKQUOTE") {
          var o = e.node.deepestParent(d, [t(d).parentsUntil(e.$el, "BLOCKQUOTE").get(0)]);
          o && o.nextSibling && (r = o);
        }
        if (r !== null) {
          var i, p = r.nextSibling;
          if (e.node.isBlock(r) && (e.node.isEditable(r) || e.node.isDeletable(r)) && p && a.NO_DELETE_TAGS.indexOf(p.tagName) < 0)
            if (e.node.isDeletable(p))
              t(p).remove(), t(d).replaceWith(a.MARKERS);
            else if (e.node.isBlock(p) && e.node.isEditable(p))
              if (e.node.isList(p))
                if (e.node.isEmpty(r, !0))
                  t(r).remove(), t(p).find("li").first().prepend(a.MARKERS);
                else {
                  var s = t(p).find("li").first();
                  r.tagName === "BLOCKQUOTE" && (i = e.node.contents(r)).length && e.node.isBlock(i[i.length - 1]) && (r = i[i.length - 1]), s.find("ul, ol").length === 0 && (t(d).replaceWith(a.MARKERS), s.find(e.html.blockTagsQuery()).not("ol, ul, table").each(function() {
                    this.parentNode === s.get(0) && t(this).replaceWith(t(this).html() + (e.node.isEmpty(this) ? "" : "<br>"));
                  }), t(r).append(e.node.contents(s.get(0))), s.remove(), t(p).find("li").length === 0 && t(p).remove());
                }
              else {
                if ((i = e.node.contents(p)).length && i[0].tagName === "BR" && t(i[0]).remove(), p.tagName !== "BLOCKQUOTE" && r.tagName === "BLOCKQUOTE")
                  for (i = e.node.contents(r); i.length && e.node.isBlock(i[i.length - 1]); )
                    r = i[i.length - 1], i = e.node.contents(r);
                else if (p.tagName === "BLOCKQUOTE" && r.tagName !== "BLOCKQUOTE")
                  for (i = e.node.contents(p); i.length && e.node.isBlock(i[0]); )
                    p = i[0], i = e.node.contents(p);
                t(d).replaceWith(a.MARKERS), t(r).append(p.innerHTML), t(p).remove();
              }
            else {
              for (t(d).replaceWith(a.MARKERS); p && p.tagName !== "BR" && !e.node.isBlock(p) && e.node.isEditable(p); ) {
                var n = p;
                p = p.nextSibling, t(r).append(n);
              }
              p && p.tagName === "BR" && e.node.isEditable(p) && t(p).remove();
            }
        }
      }
      function T(d) {
        for (var g, r = d; !r.nextSibling; )
          if (r = r.parentNode, e.node.isElement(r))
            return !1;
        if ((r = r.nextSibling).tagName === "BR" && e.node.isEditable(r)) {
          if (r.nextSibling) {
            if (e.node.isBlock(r.nextSibling) && e.node.isEditable(r.nextSibling)) {
              if (!(a.NO_DELETE_TAGS.indexOf(r.nextSibling.tagName) < 0))
                return void t(r).remove();
              r = r.nextSibling, t(r.previousSibling).remove();
            }
          } else if (l(r)) {
            L(d) ? e.cursorLists._del(d) : e.node.deepestParent(r) && ((!e.node.isEmpty(e.node.blockParent(r)) || (e.node.blockParent(r).nextSibling && a.NO_DELETE_TAGS.indexOf(e.node.blockParent(r).nextSibling.tagName)) < 0) && t(r).remove(), r && r.parentNode && r.parentNode.textContent.charCodeAt() === 8203 && r.parentNode.childNodes[1] && r.parentNode.childNodes[1].tagName === "BR" && r.parentNode.tagName.toLowerCase() === e.html.defaultTag() && r.parentNode.nextSibling && r.parentNode.nextSibling.tagName === "TABLE" && t(r.parentNode).remove(), u(d));
            return;
          }
        }
        if (!e.node.isBlock(r) && e.node.isEditable(r)) {
          for (g = e.node.contents(r); r.nodeType !== Node.TEXT_NODE && g.length && !e.node.isDeletable(r) && e.node.isEditable(r); )
            r = g[0], g = e.node.contents(r);
          r.nodeType === Node.TEXT_NODE ? (t(r).before(a.MARKERS), r.textContent.length && (r.textContent = r.textContent.substring(b(r.textContent, !0), r.textContent.length))) : (e.node.isDeletable(r) || e.events.trigger("node.remove", [t(r)]) !== !1) && (t(r).before(a.MARKERS), t(r).remove()), t(d).remove();
        } else if (a.NO_DELETE_TAGS.indexOf(r.tagName) < 0 && (e.node.isEditable(r) || e.node.isDeletable(r)))
          if (e.node.isDeletable(r))
            t(d).replaceWith(a.MARKERS), t(r).remove();
          else if (e.node.isList(r))
            d.previousSibling ? (t(r).find("li").first().prepend(d), e.cursorLists._backspace(d)) : (t(r).find("li").first().prepend(a.MARKERS), t(d).remove());
          else if ((g = e.node.contents(r)) && 0 < g.length && g[0].tagName === "BR" && t(g[0]).remove(), g && 0 < g.length && r.tagName === "BLOCKQUOTE") {
            var o = g[0];
            for (t(d).before(a.MARKERS); o && o.tagName !== "BR"; ) {
              var i = o;
              o = o.nextSibling, t(d).before(i);
            }
            o && o.tagName === "BR" && t(o).remove();
          } else
            t(d).after(t(r).html()).after(a.MARKERS), t(r).remove();
      }
      function x() {
        for (var d = e.el.querySelectorAll("blockquote:empty"), g = 0; g < d.length; g++)
          d[g].parentNode.removeChild(d[g]);
      }
      function $(d, g, r) {
        var o, i = e.node.deepestParent(d, [], !r);
        if (i && i.tagName === "BLOCKQUOTE")
          return N(d, i) ? (o = e.html.defaultTag(), g ? t(d).replaceWith("<br>" + a.MARKERS) : o ? t(i).after("<".concat(o, ">").concat(a.MARKERS, "<br></").concat(o, ">")) : t(i).after("".concat(a.MARKERS, "<br>")), t(d).remove()) : E(d, g, r), !1;
        if (i === null)
          (o = e.html.defaultTag()) && e.node.isElement(d.parentNode) ? t(d).replaceWith("<".concat(o, ">").concat(a.MARKERS, "<br></").concat(o, ">")) : !d.previousSibling || t(d.previousSibling).is("br") || d.nextSibling ? t(d).replaceWith("<br>".concat(a.MARKERS)) : t(d).replaceWith("<br>".concat(a.MARKERS, "<br>"));
        else {
          var p = d, s = "";
          i.tagName != "PRE" || d.nextSibling || (g = !0), e.node.isBlock(i) && !g || (s = "<br/>");
          var n, C = "", m = "", h = "", S = "";
          (o = e.html.defaultTag()) && e.node.isBlock(i) && (h = "<".concat(o, ">"), S = "</".concat(o, ">"), i.tagName === o.toUpperCase() && (h = e.node.openTagString(t(i).clone().removeAttr("id").get(0))));
          do
            if (p = p.parentNode, !g || p !== i || g && !e.node.isBlock(i))
              if (C += e.node.closeTagString(p), p === i && e.node.isBlock(i))
                m = h + m;
              else {
                var y = (p.tagName === "A" || e.node.hasClass(p, "fa")) && N(d, p) ? "fr-to-remove" : "";
                m = p.getAttribute("id") === "isPasted" ? e.node.openTagString(t(p).clone().attr("style", "").addClass(y).get(0)) + m : e.node.openTagString(t(p).clone().addClass(y).get(0)) + m;
              }
          while (p !== i);
          s = C + s + m + (d.parentNode === i && e.node.isBlock(i) ? "" : a.INVISIBLE_SPACE) + a.MARKERS, e.node.isBlock(i) && !t(i).find("*").last().is("br") && t(i).append("<br/>"), t(d).after('<span id="fr-break"></span>'), t(d).remove(), i.nextSibling && !e.node.isBlock(i.nextSibling) || e.node.isBlock(i) || t(i).after("<br>"), n = (n = !g && e.node.isBlock(i) ? e.node.openTagString(i) + t(i).html() + S : e.node.openTagString(i) + t(i).html() + e.node.closeTagString(i)).replace(/<span id="fr-break"><\/span>/g, s), t(i).replaceWith(n);
        }
      }
      function E(d, g, r) {
        var o = e.node.deepestParent(d, [], !r);
        if (o === null)
          e.html.defaultTag() && d.parentNode === e.el ? t(d).replaceWith("<".concat(e.html.defaultTag(), ">").concat(a.MARKERS, "<br></").concat(e.html.defaultTag(), ">")) : (d.nextSibling && !e.node.isBlock(d.nextSibling) || t(d).after("<br>"), t(d).replaceWith("<br>".concat(a.MARKERS)));
        else if (d.previousSibling && d.previousSibling.tagName == "IMG" || d.nextSibling && d.nextSibling.tagName == "IMG")
          t(d).replaceWith("<" + e.html.defaultTag() + ">" + a.MARKERS + "<br></" + e.html.defaultTag() + ">");
        else {
          var i = d, p = "";
          o.tagName === "PRE" && (g = !0), e.node.isBlock(o) && !g || (p = "<br>");
          var s = "", n = "";
          do {
            var C = i;
            if (i = i.parentNode, o.tagName === "BLOCKQUOTE" && e.node.isEmpty(C) && !e.node.hasClass(C, "fr-marker") && t(C).contains(d) && t(C).after(d), o.tagName !== "BLOCKQUOTE" || !N(d, i) && !c(d, i))
              if (!g || i !== o || g && !e.node.isBlock(o)) {
                s += e.node.closeTagString(i);
                var m = i.tagName == "A" && N(d, i) || e.node.hasClass(i, "fa") ? "fr-to-remove" : "";
                n = e.node.openTagString(t(i).clone().addClass(m).removeAttr("id").get(0)) + n, e.opts.enter !== a.ENTER_DIV && i === o && o.tagName === "DIV" && (s = "<br>", n = "");
              } else
                o.tagName == "BLOCKQUOTE" && g && (n = s = "");
          } while (i !== o);
          var h = o === d.parentNode && e.node.isBlock(o) || d.nextSibling;
          if (o.tagName === "BLOCKQUOTE")
            if (d.previousSibling && e.node.isBlock(d.previousSibling) && d.nextSibling && d.nextSibling.tagName === "BR" && (t(d.nextSibling).after(d), d.nextSibling && d.nextSibling.tagName === "BR" && t(d.nextSibling).remove()), g)
              p = s + p + a.MARKERS + n;
            else {
              var S = e.html.defaultTag();
              p = "".concat(s + p + (S ? "<".concat(S, ">") : "") + a.MARKERS, "<br>").concat(S ? "</".concat(S, ">") : "").concat(n);
            }
          else
            p = s + p + n + (h ? "" : a.INVISIBLE_SPACE) + a.MARKERS;
          t(d).replaceWith('<span id="fr-break"></span>');
          var y = e.node.openTagString(o) + t(o).html() + e.node.closeTagString(o);
          y = y.replace(/<span id="fr-break"><\/span>/g, p), t(o).replaceWith(y);
        }
      }
      function A(d) {
        var g = d.getBoundingClientRect(), r = window.pageXOffset || document.documentElement.scrollLeft, o = window.pageYOffset || document.documentElement.scrollTop;
        return { top: g.top + o, left: g.left + r };
      }
      function k() {
        var d = e.selection.get(), g = null;
        if (e.selection.inEditor() && d.rangeCount)
          for (var r = e.selection.ranges(), o = 0; o < r.length; o++) {
            var i = r[o];
            g = e.selection.rangeElement(i.startContainer, i.startOffset);
            break;
          }
        return g;
      }
      return { enter: function(g) {
        var r = e.markers.insert();
        if (!r)
          return !0;
        for (var o = r.parentNode; o && !e.node.isElement(o); ) {
          if (o.getAttribute("contenteditable") === "false")
            return t(r).replaceWith(a.MARKERS), e.selection.restore(), !1;
          if (o.getAttribute("contenteditable") === "true")
            break;
          o = o.parentNode;
        }
        e.el.normalize();
        var i = !1;
        0 < t(r).parentsUntil(e.$el, "BLOCKQUOTE").length && (i = !0), t(r).parentsUntil(e.$el, "TD, TH").length && (i = !1), l(r) ? !L(r) || g || i ? $(r, g, i) : e.cursorLists._endEnter(r) : v(r) ? !L(r) || g || i ? function y(M, O, H) {
          var _, D = e.node.deepestParent(M, [], !H);
          if (D && D.tagName === "TABLE")
            return t(D).find("td, th").first().prepend(M), y(M, O, H);
          if (D && D.tagName === "BLOCKQUOTE")
            if (c(M, D)) {
              if (!O)
                return (_ = e.html.defaultTag()) ? t(D).before("<".concat(_, ">").concat(a.MARKERS, "<br></").concat(_, ">")) : t(D).before("".concat(a.MARKERS, "<br>")), t(M).remove(), !1;
            } else
              N(M, D) ? $(M, O, !0) : E(M, O, !0);
          if (D === null)
            (_ = e.html.defaultTag()) && e.node.isElement(M.parentNode) ? t(M).replaceWith("<".concat(_, ">").concat(a.MARKERS, "<br></").concat(_, ">")) : t(M).replaceWith("<br>".concat(a.MARKERS));
          else {
            if (_ = e.html.defaultTag(), e.node.isBlock(D))
              if (D.tagName === "PRE" && (O = !0), O)
                t(M).remove(), t(D).prepend("<br>".concat(a.MARKERS));
              else if (M.nextSibling && M.nextSibling.tagName == "IMG" || M.nextSibling && M.nextSibling.nextElementSibling && M.nextSibling.nextElementSibling == "IMG")
                t(M).replaceWith("<" + e.html.defaultTag() + ">" + a.MARKERS + "<br></" + e.html.defaultTag() + ">");
              else {
                if (e.node.isEmpty(D, !0))
                  return $(M, O, H);
                if (e.opts.keepFormatOnDelete || D.tagName === "DIV" || e.html.defaultTag() === "div")
                  if (!e.opts.keepFormatOnDelete && D.tagName === "DIV" || e.html.defaultTag() === "div")
                    t(D).before("<" + e.html.defaultTag() + "><br></" + e.html.defaultTag() + ">");
                  else if (e.opts.keepFormatOnDelete && !e.opts.htmlUntouched && D.tagName !== "DIV" && e.html.defaultTag() !== "div" && v(e.selection.get().focusNode))
                    t(D).before("".concat(e.node.openTagString(t(D).clone().removeAttr("id").get(0)), "<br>").concat(e.node.closeTagString(D)));
                  else {
                    for (var w = M, R = a.INVISIBLE_SPACE; w !== D && !e.node.isElement(w); )
                      w = w.parentNode, R = e.node.openTagString(w) + R + e.node.closeTagString(w);
                    t(D).before(R);
                  }
                else
                  t(D).before("".concat(e.node.openTagString(t(D).clone().removeAttr("id").get(0)), "<br>").concat(e.node.closeTagString(D)));
              }
            else
              t(D).before("<br>");
            t(M).remove();
          }
        }(r, g, i) : e.cursorLists._startEnter(r) : !L(r) || g || i ? E(r, g, i) : e.cursorLists._middleEnter(r), function() {
          e.$el.find(".fr-to-remove").each(function() {
            for (var M = e.node.contents(this), O = 0; O < M.length; O++)
              M[O].nodeType === Node.TEXT_NODE && (M[O].textContent = M[O].textContent.replace(/\u200B/g, ""));
            t(this).replaceWith(this.innerHTML);
          });
        }(), e.html.fillEmptyBlocks(!0), e.opts.htmlUntouched || (e.html.cleanEmptyTags(), e.clean.lists(), e.spaces.normalizeAroundCursor()), e.selection.restore();
        var p = e.o_win.innerHeight;
        if (e.$oel[0].offsetHeight > p) {
          var s = k();
          if (s) {
            var n = A(s);
            n = n.top;
            var C = s.getBoundingClientRect().top;
            e.opts.scrollableContainer && e.opts.enter !== a.ENTER_BR && s.tagName === "BR" && C + 20 === p && (C = n = s.parentNode.offsetTop), s.parentNode && s.parentNode.tagName === "TD" && p < C ? e.o_win.scroll(0, C - 50) : s.tagName === "BR" && C < 0 ? e.o_win.scroll(0, n - 80) : e.opts.scrollableContainer && p < C + 20 ? e.o_win.scroll(0, n - p + 50) : e.opts.scrollableContainer && C + 2 * e.$tb.height() > e.$sc[0].scrollTop + t(e.$sc).height() && e.$sc[0].scroll(0, n - t(e.$sc).height() + 2 * e.$tb.height());
          }
        } else if (e.opts.scrollableContainer && e.opts.toolbarSticky) {
          var m = k();
          if (m) {
            var h = A(m);
            h = h.top;
            var S = m.getBoundingClientRect().top;
            e.opts.enter !== a.ENTER_BR && m.tagName === "BR" && (S = h = m.parentNode.offsetTop), (e.opts.iframe && S + 2 * e.$tb.height() > e.$sc[0].scrollTop + t(e.$sc).height() || S + 2 * e.$tb.height() > t(e.$sc).height()) && e.$sc[0].scroll(0, h - t(e.$sc).height() + 2 * e.$tb.height());
          }
        }
      }, backspace: function() {
        var g = !1, r = e.markers.insert();
        if (!r)
          return !0;
        for (var o = r.parentNode; o && !e.node.isElement(o); ) {
          if (o.getAttribute("contenteditable") === "false")
            return t(r).replaceWith(a.MARKERS), e.selection.restore(), !1;
          if (o.innerText.length && o.getAttribute("contenteditable") === "true")
            break;
          o = o.parentNode;
        }
        e.el.normalize();
        var i = r.previousSibling;
        if (i) {
          var p = i.textContent;
          p && p.length && p.charCodeAt(p.length - 1) === 8203 && (p.length === 1 ? t(i).remove() : i.textContent = i.textContent.substr(0, p.length - b(p)));
        }
        return l(r) ? L(r) && c(r, t(r).parents("li").first().get(0)) ? e.cursorLists._backspace(r) : g = f(r) : v(r) ? L(r) && c(r, t(r).parents("li").first().get(0)) ? e.cursorLists._backspace(r) : function(n) {
          for (var C = 0 < t(n).parentsUntil(e.$el, "BLOCKQUOTE").length, m = e.node.deepestParent(n, [], !C), h = m; m && !m.previousSibling && m.tagName !== "BLOCKQUOTE" && m.parentElement !== e.el && !e.node.hasClass(m.parentElement, "fr-inner") && a.SIMPLE_ENTER_TAGS.indexOf(m.parentElement.tagName) < 0; )
            m = m.parentElement;
          if (m && m.tagName === "BLOCKQUOTE") {
            var S = e.node.deepestParent(n, [t(n).parentsUntil(e.$el, "BLOCKQUOTE").get(0)]);
            S && S.previousSibling && (h = m = S);
          }
          if (m !== null) {
            var y, M = m.previousSibling;
            if (e.node.isBlock(m) && e.node.isEditable(m))
              if (M && a.NO_DELETE_TAGS.indexOf(M.tagName) < 0) {
                if (e.node.isDeletable(M))
                  t(M).remove(), t(n).replaceWith(a.MARKERS);
                else if (e.node.isEditable(M))
                  if (e.node.isBlock(M))
                    if (e.node.isEmpty(M) && !e.node.isList(M))
                      t(M).remove(), t(n).after(e.opts.keepFormatOnDelete ? a.INVISIBLE_SPACE : "");
                    else {
                      if (e.node.isList(M) && (M = t(M).find("li").last().get(0)), (y = e.node.contents(M)).length && y[y.length - 1].tagName === "BR" && t(y[y.length - 1]).remove(), M.tagName === "BLOCKQUOTE" && m.tagName !== "BLOCKQUOTE")
                        for (y = e.node.contents(M); y.length && e.node.isBlock(y[y.length - 1]); )
                          M = y[y.length - 1], y = e.node.contents(M);
                      else if (M.tagName !== "BLOCKQUOTE" && h.tagName === "BLOCKQUOTE")
                        for (y = e.node.contents(h); y.length && e.node.isBlock(y[0]); )
                          h = y[0], y = e.node.contents(h);
                      if (e.node.isEmpty(m))
                        t(n).remove(), e.selection.setAtEnd(M, !0);
                      else {
                        t(n).replaceWith(a.MARKERS);
                        var O = M.childNodes;
                        e.node.isBlock(O[O.length - 1]) ? t(O[O.length - 1]).append(h.innerHTML) : t(M).append(h.innerHTML);
                      }
                      t(h).remove(), e.node.isEmpty(m) && t(m).remove();
                    }
                  else
                    t(n).replaceWith(a.MARKERS), m.tagName === "BLOCKQUOTE" && M.nodeType === Node.ELEMENT_NODE ? t(M).remove() : (t(M).after(e.node.isEmpty(m) ? "" : t(m).html()), t(m).remove(), M.tagName === "BR" && t(M).remove());
              } else if (M)
                m.textContent.charCodeAt() === 8203 && m.childNodes[1] && m.childNodes[1].tagName === "BR" && m.tagName.toLowerCase() === e.html.defaultTag() && m.previousSibling && m.previousSibling.tagName === "TABLE" && t(m).remove();
              else if (m && m.tagName === "BLOCKQUOTE" && t(m).text().replace(/\u200B/g, "").length === 0)
                t(m).remove();
              else {
                var H = m.nextSibling;
                e.node.isEmpty(m) && m.parentNode && e.node.isEditable(m.parentNode) && !H && (m.parentNode != e.el && m.parentNode.tagName !== "TD" ? t(m.parentNode).remove() : m.parentNode != e.el && m.parentNode.tagName === "TD" && t(m).remove());
              }
          }
        }(r) : g = f(r), t(r).remove(), x(), e.html.fillEmptyBlocks(!0), e.opts.htmlUntouched || (e.html.cleanEmptyTags(), e.clean.lists(), e.spaces.normalizeAroundCursor()), e.selection.restore(), g;
      }, del: function() {
        var g = e.markers.insert();
        if (!g)
          return !1;
        if (e.el.normalize(), l(g))
          if (L(g))
            if (t(g).parents("li").first().find("ul, ol").length === 0)
              e.cursorLists._del(g);
            else {
              var r = t(g).parents("li").first().find("ul, ol").first().find("li").first();
              (r = r.find(e.html.blockTagsQuery()).get(-1) || r).prepend(g), e.cursorLists._backspace(g);
            }
          else
            u(g);
        else
          v(g), T(g);
        t(g).remove(), x(), e.html.fillEmptyBlocks(!0), e.opts.htmlUntouched || (e.html.cleanEmptyTags(), e.clean.lists()), e.spaces.normalizeAroundCursor(), e.selection.restore();
      }, isAtEnd: N, isAtStart: c };
    }, a.MODULES.data = function(e) {
      function t(i) {
        return i;
      }
      function l(i) {
        for (var p = i.toString(), s = 0, n = 0; n < p.length; n++)
          s += parseInt(p.charAt(n), 10);
        return 10 < s ? s % 9 + 1 : s;
      }
      function v(i, p, s) {
        for (var n = Math.abs(s); 0 < n--; )
          i -= p;
        return s < 0 && (i += 123), i;
      }
      function c(i) {
        return i && i.css("display") !== "block" || i && e.helpers.getPX(i.css("height")) === 0 ? (i.remove(), !0) : !(!i || i.css("position") !== "absolute" && i.css("position") !== "fixed" || (i.remove(), 0));
      }
      function N(i) {
        return i && e.$box.find(i).length === 0;
      }
      function L() {
        if (10 < o && (e[r("0ppecjvc==")](), setTimeout(function() {
          x.FE = null;
        }, 10)), !e.$box)
          return !1;
        e.$wp.prepend(r(r(d))), u = e.$wp.find("> div").first(), T = u.find("> a"), e.opts.direction === "rtl" && u.css("left", "auto").css("right", 0).attr("direction", "rtl"), o++;
      }
      function b(i) {
        for (var p = [r("9qqG-7amjlwq=="), r("KA3B3C2A6D1D5H5H1A3=="), r("3B9B3B5F3C4G3E3=="), r("QzbzvxyB2yA-9m=="), r("ji1kacwmgG5bc=="), r("nmA-13aogi1A3c1jd=="), r("BA9ggq=="), r("emznbjbH3fij=="), r("tkC-22d1qC-13sD1wzF-7=="), r("tA3jjf=="), r("1D1brkm==")], s = 0; s < p.length; s++)
          if (String.prototype.endsWith || (String.prototype.endsWith = function(n, C) {
            return (C === void 0 || C > this.length) && (C = this.length), this.substring(C - n.length, C) === n;
          }), i.endsWith(p[s]))
            return !0;
        return !1;
      }
      function f() {
        var i = r(A), p = r("tzgatD-13eD1dtdrvmF3c1nrC-7saQcdav==").split(".");
        try {
          return window.parent.document.querySelector(i) && window[p[1]][p[2]];
        } catch {
          return !1;
        }
      }
      var u, T, x = e.$, $ = "sC-7OB2fwhVC4vsG-7ohPA4ZD4D-8f1J3stzB-11bFE2FC1A3NB2IF1HE1TH4WB8eB-11zVG2F3I3yYB5ZG4CB2DA15CC5AD3F1A1KG1oLA10B1A6wQF1H3vgale2C4F4XA2qc2A5D5B3pepmriKB3OE1HD1fUC10pjD-11E-11TB4YJ3bC-16zE-11yc1B2CE2BC3jhjKC1pdA-21OA6C1D5B-8vF4QA11pD6sqf1C3lldA-16BD4A2H3qoEA7bB-16rmNH5H1F1vSB7RE2A3TH4YC5A5b1A4d1B3whepyAC3AA2zknC3mbgf1SC4WH4PD8TC5ZB2C3H3jb2A5ZA2EF2aoFC5qqHC4B1H1zeGA7UA5RF4TA29TA6ZC4d1C3hyWA10A3rBB2E3decorationRD3QC10UD3E6E6ZD2F3F3fme2E5uxxrEC9C3E4fB-11azhHB1LD7D6VF4VVTPC6b1C4TYG3qzDD6B3B3AH4I2H2kxbHE1JD1yihfd1QD6WB1D4mhrc1B5rvFG3A14A7cDA2OC1AA1JB5zC-16KA6WB4C-8wvlTB5A5lkZB2C2C7zynBD2D2bI-7C-21d1HE2cubyvPC8A6VB3aroxxZE4C4F4e1I2BE1WjdifH1H4A14NA1GB1YG-10tWA3A14A9sVA2C5XH2A29b2A6gsleGG2jaED2D-13fhE1OA8NjwytyTD4e1sc1D-16ZC3B5C-9e1C2FB6EFF5B2C2JH4E1C2tdLE5A3UG4G-7b2D3B4fA-9oh1G3kqvB4AG3ibnjcAC6D2B1cDA9KC2QA6bRC4VA30RB8hYB2A4A-8h1A21A2B2==", E = "7D4YH4fkhHB3pqDC3H2E1fkMD1IB1NF1D3QD9wB5rxqlh1A8c2B4ZA3FD2AA6FB5EB3jJG4D2J-7aC-21GB6PC5RE4TC11QD6XC4XE3XH3mlvnqjbaOA2OC2BE6A1fmI-7ujwbc1G5f1F3e1C11mXF4owBG3E1yD1E4F1D2D-8B-8C-7yC-22HD1MF5UE4cWA3D8D6a1B2C3H3a3I3sZA4B3A2akfwEB3xHD5D1F1wIC11pA-16xdxtVI2C9A6YC4a1A2F3B2GA6B4C3lsjyJB1eMA1D-11MF5PE4ja1D3D7byrf1C3e1C7D-16lwqAF3H2A1B-21wNE1MA1OG1HB2A-16tSE5UD4RB3icRA4F-10wtwzBB3E1C3CC2DA8LA2LA1EB1kdH-8uVB7decorg1J2B7B6qjrqGI2J1C6ijehIB1hkemC-13hqkrH4H-7QD6XF5XF3HLNAC3CB2aD2CD2KB10B4ycg1A-8KA4H4B11jVB5TC4yqpB-21pd1E4pedzGB6MD5B3ncB-7MA4LD2JB6PD5uH-8TB9C7YD5XD2E3I3jmiDB3zeimhLD8E2F2JC1H-9ivkPC5lG-10SB1D3H3A-21rc1A3d1E3fsdqwfGA2KA1OrC-22LA6D1B4afUB16SC7AitC-8qYA11fsxcajGA15avjNE2A-9h1hDB16B9tPC1C5F5UC1G3B8d2A5d1D4RnHJ3C3JB5D3ucMG1yzD-17hafjC-8VD3yWC6e1YD2H3ZE2C8C5oBA3H3D2vFA4WzJC4C2i1A-65fNB8afWA1H4A26mvkC-13ZB3E3h1A21BC4eFB2GD2AA5ghqND2A2B2==", A = "MekC-11nB-8tIzpD7pewxvzC6mD-16xerg1==", k = "lC4B3A3B2B5A1C2E4G1A2==", d = "sC-7OB2fwhVC4vsG-7ohPA4ZD4D-8f1J3stzB-11bFE2EE1MA2ND1KD1IE4cA-21pSD2D5ve1G3h1A8b1E5ZC3CD2FA16mC5OC5E1hpnG1NA10B1D7hkUD4I-7b2C3C5nXD2E3F3whidEC2EH3GI2mJE2E2bxci1WA10VC7pllSG2F3A7xd1A4ZC3DB2aaeGA2DE4H2E1j1ywD-13FD1A3VE4WA3D8C6wuc1A2hf1B5B7vnrrjA1B9ic1mpbD1oMB1iSB7rWC4RI4G-7upB6jd1A2F3H2EA4FD3kDF4A2moc1anJD1TD4VI4b2C7oeQF4c1E3XC7ZA3C3G3uDB2wGB6D1JC4D1JD4C1hTE6QC5pH4pD3C-22D7c1A3textAA4gdlB2mpozkmhNC1mrxA3yWA5edhg1I2H3B7ozgmvAI3I2B5GD1LD2RSNH1KA1XA5SB4PA3sA9tlmC-9tnf1G3nd1coBH4I2I2JC3C-16LE6A1tnUA3vbwQB1G3f1A20a3A8a1C6pxAB2eniuE1F3kH2lnjB2hB-16XA5PF1G4zwtYA5B-11mzTG2B9pHB3BE2hGH3B3B2cMD5C1F1wzPA8E7VG5H5vD3H-7C8tyvsVF2I1G2A5fE3bg1mgajoyxMA4fhuzSD8aQB2B4g1A20ukb1A4B3F3GG2CujjanIC1ObiB11SD1C5pWC1D4YB8YE5FE-11jXE2F-7jB4CC2G-10uLH4E1C2tA-13yjUH5d1H1A7sWD5E4hmjF-7pykafoGA16hDD4joyD-8OA33B3C2tC7cRE4SA31a1B8d1e2A4F4g1A2A22CC5zwlAC2C1A12==", g = function() {
        for (var i = 0, p = document.domain, s = p.split("."), n = "_gd".concat((/* @__PURE__ */ new Date()).getTime()); i < s.length - 1 && document.cookie.indexOf("".concat(n, "=").concat(n)) === -1; )
          p = s.slice(-1 - ++i).join("."), document.cookie = "".concat(n, "=").concat(n, ";domain=").concat(p, ";");
        return document.cookie = "".concat(n, "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=").concat(p, ";"), (p || "").replace(/(^\.*)|(\.*$)/g, "");
      }(), r = function(p) {
        if (!p)
          return p;
        for (var s = "", n = "charCodeAt", C = "fromCharCode", m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".indexOf(p[0]), h = 1; h < p.length - 2; h++) {
          for (var S = l(++m), y = p[n](h), M = ""; /[0-9-]/.test(p[h + 1]); )
            M += p[++h];
          y = v(y, S, M = parseInt(M, 10) || 0), y ^= m - 1 & 31, s += String[C](y);
        }
        return s;
      }, o = 0;
      return { _init: function() {
        var p = e.opts.key || [""], s = r("ziRA1E3B9pA5B-11D-11xg1A3ZB5D1D4B-11ED2EG2pdeoC1clIH4wB-22yQD5uF4YE3E3A9==");
        typeof p == "string" && (p = [p]);
        for (var n, C, m, h = !(e.ul = !0), S = 0, y = 0; y < p.length; y++) {
          var M = (C = p[y], (m = (r(C) || "").split("|")).length === 4 && m[0] === "V3" ? [m[1], m[3], m[2]] : [null, null, ""]), O = M[2];
          if (O === r(r("LGnD1KNZf1CPBYCAZB-8F3UDSLLSG1VFf1A3C2==")) || 0 <= O.indexOf(g, O.length - g.length) || b(g) || f()) {
            if ((n = M[1]) !== null && !(n.indexOf("TRIAL") == 0 ? (n = new Date(n.replace(/TRIAL/, "")), new Date(n) < /* @__PURE__ */ new Date() && ($ = E, 1)) : new Date(n) < new Date(r(k))) || !(0 < (g || "").length) || b(g) || f()) {
              e.ul = !1;
              break;
            }
            h = !0, d = $, S = M[0] || -1;
          }
        }
        var H = new Image();
        e.ul === !0 && (L(), H.src = h ? "".concat(r(s), "e=").concat(S) : "".concat(r(s), "u")), e.ul === !0 && (e.events.on("contentChanged", function() {
          (function() {
            return c(u) || c(T) || N(u) || N(T);
          })() && L();
        }), e.events.on("html.get", function(_) {
          return _ + r("qD2H-9G3ioD-17qA1tE1B-8qI3A4hA-13C-11E2C1njfldD1E6pg1C-8sC3hfbkcD2G3stC-22gqgB3G2B-7vtoA4nweeD1A31A15B9uC-16A1F5dkykdc1B8dE-11bA3F2D3A9gd1E7F2tlI-8H-7vtxB2A5B2C3B2F2B5A6ldbyC4iqC-22D-17E-13mA3D2dywiB3oxlvfC1H4C2TjqbzlnI3ntB4E3qA2zaqsC6D3pmnkoE3C6D5wvuE3bwifdhB6hch1E4xibD-17dmrC1rG-7pntnF6nB-8F1D2A11C8plrkmF2F3MC-16bocqA2WwA-21ayeA1C4d1isC-22rD-13D6DfjpjtC2E6hB2G2G4A-7D2==");
        })), e.events.on("html.set", function() {
          var _ = e.el.querySelector('[data-f-id="pbf"]');
          _ && x(_).remove();
        }), e.events.on("destroy", function() {
          u && u.length && u.remove();
        }, !0);
      } };
    }, a.MODULES.edit = function(e) {
      function t() {
        if (e.browser.mozilla)
          try {
            e.doc.execCommand("enableObjectResizing", !1, "false"), e.doc.execCommand("enableInlineTableEditing", !1, "false");
          } catch {
          }
        if (e.browser.msie)
          try {
            e.doc.body.addEventListener("mscontrolselect", function(c) {
              return c.srcElement.focus(), !1;
            });
          } catch {
          }
      }
      var l = !1;
      function v() {
        return l;
      }
      return { _init: function() {
        e.events.on("focus", function() {
          v() ? e.edit.off() : e.edit.on();
        });
      }, on: function() {
        e.$wp ? (e.$el.attr("contenteditable", !0), e.$el.removeClass("fr-disabled").attr("aria-disabled", !1), t()) : e.$el.is("a") && e.$el.attr("contenteditable", !0), e.events.trigger("edit.on", [], !0), l = !1;
      }, off: function() {
        e.events.disableBlur(), e.$wp ? (e.$el.attr("contenteditable", !1), e.$el.addClass("fr-disabled").attr("aria-disabled", !0)) : e.$el.is("a") && e.$el.attr("contenteditable", !1), e.events.trigger("edit.off"), e.events.enableBlur(), l = !0;
      }, disableDesign: t, isDisabled: v };
    }, a.MODULES.format = function(e) {
      var t = e.$;
      function l(E, A) {
        var k = E;
        for (var d in A)
          Object.prototype.hasOwnProperty.call(A, d) && (k += d === "id" ? "#".concat(A[d]) : d === "class" ? ".".concat(A[d]) : "[".concat(d, '="').concat(A[d], '"]'));
        return k;
      }
      function v(E, A) {
        return !(!E || E.nodeType !== Node.ELEMENT_NODE) && (E.matches || E.matchesSelector || E.msMatchesSelector || E.mozMatchesSelector || E.webkitMatchesSelector || E.oMatchesSelector).call(E, A);
      }
      function c(E, A, k) {
        var d, g, r, o = { strong: { prop: "font-weight", val: "bold" }, em: { prop: "font-style", val: "italic" } };
        if (E) {
          var i = E.tagName === "LI" ? E : t(E).parentsUntil(e.$el, "li").get(0), p = t(i).find(".fr-marker[data-type=false]").get(0);
          if (E.parentNode.parentNode.tagName !== "LI" || !p || p.previousSibling != null) {
            if (e.node.isBlock(E) && E.hasAttribute("contenteditable") && E.getAttribute("contenteditable") === "false" || E.parentNode && E.parentNode.hasAttribute("contenteditable") && E.parentNode.getAttribute("contenteditable") === "false") {
              if (E.nextSibling && t(E.nextSibling).hasClass("fr-marker"))
                return;
              if (E.nextSibling)
                return void c(E.nextSibling, A, k);
              if (E.parentNode)
                return void c(E.parentNode, A, k);
            }
            for (; E && E.nodeType === Node.COMMENT_NODE; )
              E = E.nextSibling;
            if (E) {
              if (e.node.isBlock(E) && E.tagName !== "HR" && E.tagName !== "LI")
                return e.node.hasClass(E.firstChild, "fr-marker") ? c(E.firstChild.nextSibling, A, k) : c(E.firstChild, A, k), !1;
              var s = t(e.doc.createElement(A));
              s.attr(k), s.insertBefore(E), (d = T(E)) && (0 <= ["strong", "em"].indexOf(A) || A === "span" && k.hasOwnProperty("style")) && (r = A === "span" ? (g = (o = k.style.replace(/;$/, "").split(":"))[0].trim(), o[1].trim()) : (g = o[A].prop, o[A].val), g !== "background-color" && (t(d).css(g, r), function(O, H) {
                var _, D = O.childNodes;
                for (_ = 0; _ < D.length; _++)
                  0 <= ["UL", "OL", "LI"].indexOf(D[_].tagName) && D[_].style[H] === "" && t(D[_]).css(H, "initial");
              }(d, g)));
              for (var n = E; n && !t(n).hasClass("fr-marker") && t(n).find(".fr-marker").length === 0 && n.tagName !== "UL" && n.tagName !== "OL"; ) {
                var C = n;
                if (n.tagName === "SPAN" && t(n).hasClass("fr-tracking-deleted"))
                  n = n.nextSibling;
                else {
                  if (e.node.isBlock(n) && E.tagName !== "HR")
                    return c(n.firstChild, A, k), !1;
                  if (n.tagName === "SPAN" && e.node.isEditable(n))
                    return s.is(":empty") && s.remove(), c(n.firstChild, A, k), !1;
                  if (n.tagName && n.hasAttribute("contenteditable") && n.getAttribute("contenteditable") === "false") {
                    var m = s.get(0).parentNode, h = n.nextSibling;
                    return n.parentNode.tagName === "P" && n.nextSibling == null ? h = n.parentNode.nextSibling : !h && m && m.nextSibling && m.nextSibling.tagName === "DIV" && (h = m.nextSibling), void c(h, A, k);
                  }
                  if (!e.node.isEditable(n.parentNode))
                    return e.selection.restore(), void e.toolbar.disable();
                  n = n.nextSibling, s.append(C), e.browser.mozilla && 0 < s.length && N(s[0]);
                }
              }
              if (n)
                (t(n).find(".fr-marker").length || n.tagName === "UL" || n.tagName === "OL") && c(n.firstChild, A, k);
              else {
                for (var S = s.get(0).parentNode; S && !S.nextSibling && !e.node.isElement(S); )
                  S = S.parentNode;
                if (S) {
                  var y = S.nextSibling;
                  y && (e.node.isBlock(y) ? y.tagName === "HR" ? c(y.nextSibling, A, k) : c(y.firstChild, A, k) : c(y, A, k));
                }
              }
              s.is(":empty") && s.remove();
            }
          }
        }
      }
      function N(E) {
        if (t(E).parentsUntil(e.$el, "TABLE").length) {
          for (var A = null, k = E.nextSibling; k; )
            k.nodeName === "BR" && (A = k), k = k.nextSibling;
          A && !A.nextSibling && A.parentNode.nodeName != "TD" && A.parentNode.textContent && A.remove();
        }
      }
      function L(E, A) {
        var k;
        if (A === void 0 && (A = {}), A.style && delete A.style, e.selection.isCollapsed()) {
          e.markers.insert();
          var d = e.$el.find(".fr-marker");
          d.get(0).nextSibling && e.node.isBlock(d.get(0).nextSibling) && !d.get(0).previousSibling && d.get(0).parentNode.tagName === "LI" && d.get(0).nextSibling.prepend(d.get(0)), d.replaceWith(function(s, n) {
            var C = "<".concat(s);
            for (var m in n)
              Object.prototype.hasOwnProperty.call(n, m) && (C += " ".concat(m, '="').concat(n[m], '"'));
            return C += ">";
          }(E, A) + a.INVISIBLE_SPACE + a.MARKERS + function(s) {
            return "</".concat(s, ">");
          }(E)), e.selection.restore();
        } else {
          e.selection.save();
          var g, r = e.$el.find('.fr-marker[data-type="true"]').length && e.$el.find('.fr-marker[data-type="true"]').get(0).nextSibling;
          c(r, E, A), t(r).parent().find("a:empty").remove();
          do
            for (g = e.$el.find("".concat(l(E, A), " > ").concat(l(E, A))), k = 0; k < g.length; k++)
              g[k].outerHTML = g[k].innerHTML;
          while (g.length);
          e.el.normalize();
          var o = e.el.querySelectorAll(".fr-marker");
          for (k = 0; k < o.length; k++) {
            var i = t(o[k]);
            i.data("type") === !0 ? v(i.get(0).nextSibling, l(E, A)) && i.next().prepend(i) : v(i.get(0).previousSibling, l(E, A)) && i.prev().append(i);
          }
          e.selection.restore();
        }
      }
      function b(E, A, k, d) {
        if (!d) {
          var g = !1;
          if (E.data("type") === !0)
            for (; e.node.isFirstSibling(E.get(0)) && !E.parent().is(e.$el) && !E.parent().is("ol") && !E.parent().is("ul"); )
              E.parent().before(E), g = !0;
          else if (E.data("type") === !1)
            for (; e.node.isLastSibling(E.get(0)) && !E.parent().is(e.$el) && !E.parent().is("ol") && !E.parent().is("ul"); )
              E.parent().after(E), g = !0;
          if (g)
            return !0;
        }
        if (E.parents(A).length || A === void 0) {
          var r, o = "", i = "", p = E.parent();
          if (p[0].tagName === "A" && (p = p.parent()), p.is(e.$el) || e.node.isBlock(p.get(0)))
            return !1;
          for (; !(e.node.isBlock(p.parent().get(0)) || A !== void 0 && v(p.get(0), l(A, k))); )
            o += e.node.closeTagString(p.get(0)), i = e.node.openTagString(p.get(0)) + i, p = p.parent();
          var s = E.get(0).outerHTML;
          return E.replaceWith('<span id="mark"></span>'), r = p.html().replace(/<span id="mark"><\/span>/, o + e.node.closeTagString(p.get(0)) + i + s + o + e.node.openTagString(p.get(0)) + i), p.replaceWith(e.node.openTagString(p.get(0)) + r + e.node.closeTagString(p.get(0))), !0;
        }
        return !1;
      }
      function f(E, A) {
        A === void 0 && (A = {}), A.style && delete A.style;
        var k = e.selection.isCollapsed();
        e.selection.save();
        var d = e.$el.find(".fr-marker");
        if (E && d.length && (d[0].parentNode && d[0].parentNode.tagName === E.toUpperCase() || d[1].parentNode.tagName === E.toUpperCase())) {
          var g = d[0];
          d[0].parentNode.tagName !== E.toUpperCase() && (g = d[1]);
          for (var r = g.parentNode.previousSibling; r != null; )
            r.nodeType === Node.TEXT_NODE && (r.textContent = r.textContent.replace(/\u200B/g, "")), r = r.previousSibling;
          for (var o = g.parentNode.nextSibling; o != null; )
            o.nodeType === Node.TEXT_NODE && (o.textContent = o.textContent.replace(/\u200B/g, "")), o = o.nextSibling;
        }
        for (var i = !0; i; ) {
          i = !1;
          for (var p = e.$el.find(".fr-marker"), s = 0; s < p.length; s++) {
            var n = t(p[s]), C = null;
            if (n.attr("data-cloned") || k || (C = n.clone().removeClass("fr-marker").addClass("fr-clone"), n.data("type") && n.data("type").toString() === "true" ? n.attr("data-cloned", !0).after(C) : n.attr("data-cloned", !0).before(C)), b(n, E, A, k)) {
              i = !0;
              break;
            }
          }
        }
        (function V(F, G, P, j) {
          for (var Y, e1 = { strong: { prop: "font-weight", val: "bold" }, em: { prop: "font-style", val: "italic" } }, z = e.node.contents(F.get(0)), X = 0; X < z.length; X++) {
            var Z = z[X];
            if (Z.innerHTML && Z.innerHTML.charCodeAt() == 8203 && Z.tagName.toLocaleLowerCase() == P && Z.childNodes.length < 2 && !e.helpers.isMobile() && (Z.outerHTML = Z.innerHTML), e.node.hasClass(Z, "fr-marker"))
              G = (G + 1) % 2;
            else if (G)
              if (0 < t(Z).find(".fr-marker").length)
                G = V(t(Z), G, P, j);
              else {
                (Y = Z.tagName === "LI" ? Z : t(Z).parentsUntil(e.$el, "li").get(0)) && (P === void 0 || 0 <= ["strong", "em"].indexOf(P)) && (P ? t(Y).css(e1[P].prop, "") : Y.style = ""), (Y = Z.parentNode !== e.el ? Z.parentNode : null) && Y.nodeType === 1 && ["p", "strong", "u", "em", "s", "sub", "sup", "a"].indexOf(P) < 0 && Y.hasAttribute("style") && Y.tagName !== "SPAN" && Y.tagName !== "LI" ? Y.style = "" : Z && Z.nodeType === 1 && Z.hasAttribute("style") && ["p", "strong", "u", "em", "s", "sub", "sup", "a"].indexOf(P) < 0 && (e.browser.msie ? t(Z).attr("style", "") : Z.style = "");
                for (var J = t(Z).find(P || "*:not(br)"), t1 = J.length - 1; 0 <= t1; t1--) {
                  var q = J[t1];
                  (Y = q.tagName === "LI" ? q : t(q).parentsUntil(e.$el, "li").get(0)) && (!P || 0 <= ["strong", "em"].indexOf(P)) && (P ? t(Y).css(e1[P].prop, "") : Y.style = ""), q.tagName === "A" || e.node.isBlock(q) || e.node.isVoid(q) || P !== void 0 && !v(q, l(P, j)) ? e.node.isBlock(q) && P === void 0 && Z.tagName !== "TABLE" && e.node.clearAttributes(q) : e.node.hasClass(q, "fr-clone") || e.node.hasClass(q, "fr-tracking-deleted") || t(q).data("tracking") || (q.outerHTML = q.innerHTML);
                }
                Z.tagName !== "A" && P === void 0 && Z.nodeType === Node.ELEMENT_NODE && !e.node.isVoid(Z) || v(Z, l(P, j)) ? e.node.isBlock(Z) || (e.node.hasClass(Z, "fr-clone") || e.opts.trackChangesEnabled ? !e.node.hasClass(Z, "fr-clone") && e.opts.trackChangesEnabled && Z.parentNode && (Z.outerHTML = Z.innerHTML) : Z.outerHTML = Z.innerHTML) : P === void 0 && Z.nodeType === Node.ELEMENT_NODE && e.node.isBlock(Z) && Z.tagName !== "TABLE" && e.node.clearAttributes(Z);
              }
            else
              0 < t(Z).find(".fr-marker").length && (G = V(t(Z), G, P, j));
          }
          return G;
        })(e.$el, 0, E, A), k || (e.$el.find(".fr-marker").remove(), e.$el.find(".fr-clone").removeClass("fr-clone").addClass("fr-marker")), k && e.$el.find(".fr-marker").before(a.INVISIBLE_SPACE).after(a.INVISIBLE_SPACE), e.html.cleanEmptyTags(), e.el.normalize(), e.selection.restore();
        var m = e.win.getSelection() && e.win.getSelection().anchorNode;
        if (m) {
          var h = e.node.blockParent(m), S = !!m.textContent.replace(/\u200B/g, "").length, y = e.win.getSelection().getRangeAt(0), M = y.startOffset, O = y.endOffset;
          e.selection.text().replace(/\u200B/g, "").length || function V(F, G) {
            if (F && G) {
              if (F.isSameNode(G) ? F.textContent = F.textContent.replace(/\u200B(?=.*\u200B)/g, "") : F.nodeType === Node.TEXT_NODE && (F.textContent = F.textContent.replace(/\u200B/g, "")), !F.childNodes.length)
                return !1;
              Array.isArray(F.childNodes) && F.childNodes.forEach(function(P) {
                V(P, G);
              });
            }
          }(h, m);
          var H = e.win.getSelection().getRangeAt(0);
          if (m.nodeType === Node.TEXT_NODE) {
            if (!S || !e.selection.text().length && M === O) {
              var _ = m.textContent.search(/\u200B/g) + 1;
              if (e.browser.msie) {
                var D = e.doc.createRange();
                e.selection.get().removeAllRanges(), D.setStart(m, _), D.setEnd(m, _), e.selection.get().addRange(D);
              } else
                E !== "a" && (H.setStart(m, _), H.setEnd(m, _));
            }
          } else {
            var w, R, B = 0, I = t(m).contents();
            if (e.browser.msie) {
              for (; R = I[B]; )
                R.nodeType === Node.TEXT_NODE && 0 <= R.textContent.search(/\u200B/g) && (w = R), B++;
              w = t(w);
            } else
              w = I.filter(function(V) {
                return V.nodeType === Node.TEXT_NODE && 0 <= V.textContent.search(/\u200B/g);
              });
            if (w.length && !e.opts.trackChangesEnabled) {
              var U = w.text().search(/\u200B/g) + 1;
              H.setStart(w.get(0), U), H.setEnd(w.get(0), U);
            }
          }
        }
      }
      function u(E, A) {
        var k, d, g, r, o, i, p, s = null;
        if (e.selection.isCollapsed()) {
          e.markers.insert();
          var n = (d = e.$el.find(".fr-marker")).parent();
          if (e.node.openTagString(n.get(0)) === '<span style="'.concat(E, ": ").concat(n.css(E), ';">')) {
            if (e.node.isEmpty(n.get(0)))
              s = t(e.doc.createElement("span")).attr("style", "".concat(E, ": ").concat(A, ";")).html("".concat(a.INVISIBLE_SPACE).concat(a.MARKERS)), n.replaceWith(s);
            else {
              var C = {};
              C["style*"] = "".concat(E, ":"), b(d, "span", C, !0), d = e.$el.find(".fr-marker"), A ? (s = t(e.doc.createElement("span")).attr("style", "".concat(E, ": ").concat(A, ";")).html("".concat(a.INVISIBLE_SPACE).concat(a.MARKERS)), d.replaceWith(s)) : d.replaceWith(a.INVISIBLE_SPACE + a.MARKERS);
            }
            e.html.cleanEmptyTags();
          } else
            e.node.isEmpty(n.get(0)) && n.is("span") ? (d.replaceWith(a.MARKERS), n.css(E, A)) : (d.get(0).nextSibling && e.node.isBlock(d.get(0).nextSibling) && !d.get(0).previousSibling && d.get(0).parentNode.tagName === "LI" && d.get(0).nextSibling.prepend(d.get(0)), s = t(A ? '<span style="'.concat(E, ": ").concat(A, ';">').concat(a.INVISIBLE_SPACE).concat(a.MARKERS, "</span>") : "<span>".concat(a.INVISIBLE_SPACE).concat(a.MARKERS, "</span>")), d.replaceWith(s));
          s && x(s, E, A);
        } else {
          if (e.selection.save(), A === null || E === "color" && 0 < e.$el.find(".fr-marker").parents("u, a").length) {
            var m = e.$el.find(".fr-marker");
            for (k = 0; k < m.length; k++)
              if ((d = t(m[k])).data("type") === !0 || d.data("type") === "true")
                for (; e.node.isFirstSibling(d.get(0)) && !d.parent().is(e.$el) && !e.node.isElement(d.parent().get(0)) && !e.node.isBlock(d.parent().get(0)); )
                  d.parent().before(d);
              else
                for (; e.node.isLastSibling(d.get(0)) && !d.parent().is(e.$el) && !e.node.isElement(d.parent().get(0)) && !e.node.isBlock(d.parent().get(0)); )
                  d.parent().after(d);
          }
          for (var h = e.$el.find('.fr-marker[data-type="true"]').get(0).nextSibling; h.firstChild; )
            h = h.firstChild;
          var S = { class: "fr-unprocessed" };
          for (A && (S.style = "".concat(E, ": ").concat(A, ";")), c(h, "span", S), e.$el.find(".fr-marker + .fr-unprocessed").each(function() {
            t(this).prepend(t(this).prev());
          }), e.$el.find(".fr-unprocessed + .fr-marker").each(function() {
            t(this).prev().append(t(this));
          }), (A || "").match(/\dem$/) && e.$el.find("span.fr-unprocessed").removeClass("fr-unprocessed"); 0 < e.$el.find("span.fr-unprocessed").length; ) {
            if (g = T(s = e.$el.find("span.fr-unprocessed").first().removeClass("fr-unprocessed")), s.parent().get(0).normalize(), s.parent().is("span") && s.parent().get(0).childNodes.length === 1) {
              var y = A;
              e.browser.msie && !A && (y = ""), s.parent().css(E, y);
              var M = s;
              s = s.parent(), M.replaceWith(M.html());
            }
            for (r = s.find("span"), g && E !== "background-color" && (g.normalize(), r = t(g).find("span:not(.fr-unprocessed)")), k = r.length - 1; 0 <= k; k--)
              o = r[k], i = E, p = void 0, (p = t(o)).css(i, ""), p.attr("style") === "" && p.replaceWith(p.html());
            x(s, E, A);
          }
        }
        (function() {
          for (var H; 0 < e.$el.find(".fr-split:empty").length; )
            e.$el.find(".fr-split:empty").remove();
          e.$el.find(".fr-split").removeClass("fr-split"), e.$el.find('[style=""]').removeAttr("style"), e.$el.find('[class=""]').removeAttr("class"), e.html.cleanEmptyTags();
          for (var _ = e.$el.find("span"), D = _.length - 1; 0 <= D; D--) {
            var w = _[D];
            w.attributes && w.attributes.length !== 0 || t(w).replaceWith(w.innerHTML);
          }
          e.el.normalize();
          var R = e.$el.find("span[style] + span[style]");
          for (H = 0; H < R.length; H++) {
            var B = t(R[H]), I = t(R[H]).prev();
            B.get(0).previousSibling === I.get(0) && e.node.openTagString(B.get(0)) === e.node.openTagString(I.get(0)) && (B.prepend(I.html()), I.remove());
          }
          e.$el.find("span[style] span[style]").each(function() {
            if (0 <= t(this).attr("style").indexOf("font-size")) {
              var U = t(this).parents("span[style]");
              U.attr("style") && 0 <= U.attr("style").indexOf("background-color") && (t(this).attr("style", "".concat(t(this).attr("style"), ";").concat(U.attr("style"))), b(t(this), "span[style]", {}, !1));
            }
          }), e.el.normalize(), e.selection.restore();
        })();
      }
      function T(E) {
        var A, k, d, g, r, o;
        if ((A = E.tagName === "LI" ? E : t(E).parentsUntil(e.$el, "li").get(0)) && ((o = e.selection.info(A)).atStart && o.atEnd || o.atStart && !o.atEnd && (k = t(A).find(".fr-marker[data-type=false]").get(0), d = t(k).parentsUntil(e.$el, "li").get(0), g = t(k).parent().get(0), (r = k.nextSibling) && 0 <= ["UL", "OL"].indexOf(r.tagName) || !d.isSameNode(A) || !r && (g.tagName === "LI" || !g.nextSibling || 0 <= ["UL", "OL"].indexOf(g.nextSibling.tagName) || e.node.isVoid(g.nextSibling)))))
          return A;
      }
      function x(E, A, k) {
        var d, g, r, o = E.parentsUntil(e.$el, "span[style]"), i = [];
        for (d = o.length - 1; 0 <= d; d--)
          g = o[d], r = A, t(g).attr("style").indexOf("".concat(r, ":")) === 0 || 0 <= t(g).attr("style").indexOf(";".concat(r, ":")) || 0 <= t(g).attr("style").indexOf("; ".concat(r, ":")) || i.push(o[d]);
        if ((o = o.not(i)).length) {
          for (var p = "", s = "", n = "", C = "", m = E.get(0); m = m.parentNode, t(m).addClass("fr-split"), p += e.node.closeTagString(m), s = e.node.openTagString(t(m).clone().addClass("fr-split").get(0)) + s, o.get(0) !== m && (n += e.node.closeTagString(m), C = e.node.openTagString(t(m).clone().addClass("fr-split").get(0)) + C), o.get(0) !== m; )
            ;
          var h = "".concat(p + e.node.openTagString(t(o.get(0)).clone().css(A, k || "").get(0)) + C + E.css(A, "").get(0).outerHTML + n, "</span>").concat(s);
          E.replaceWith('<span id="fr-break"></span>');
          var S = o.get(0).outerHTML;
          t(o.get(0)).replaceWith(S.replace(/<span id="fr-break"><\/span>/g, function() {
            return h;
          }));
        }
      }
      function $(E, A) {
        A === void 0 && (A = {}), A.style && delete A.style;
        var k = e.selection.ranges(0), d = k.startContainer;
        if (d.nodeType === Node.ELEMENT_NODE && 0 < d.childNodes.length && d.childNodes[k.startOffset] && (d = d.childNodes[k.startOffset]), !k.collapsed && d.nodeType === Node.TEXT_NODE && k.startOffset === (d.textContent || "").length) {
          for (; !e.node.isBlock(d.parentNode) && !d.nextSibling; )
            d = d.parentNode;
          d.nextSibling && (d = d.nextSibling);
        }
        for (var g = d; g && g.nodeType === Node.ELEMENT_NODE && !v(g, l(E, A)); )
          g = g.firstChild;
        if (g && g.nodeType === Node.ELEMENT_NODE && v(g, l(E, A)))
          return !0;
        var r = d;
        for (r && r.nodeType !== Node.ELEMENT_NODE && (r = r.parentNode); r && r.nodeType === Node.ELEMENT_NODE && r !== e.el && !v(r, l(E, A)); )
          r = r.parentNode;
        return !(!r || r.nodeType !== Node.ELEMENT_NODE || r === e.el || !v(r, l(E, A)));
      }
      return { is: $, toggle: function(A, k) {
        if (e.browser.safari && e.shared.safariSelection) {
          var d = e.shared.safariSelection, g = d.startContainer, r = d.endContainer, o = d.startOffset, i = d.endOffset, p = e.doc.createRange();
          p.setStart(g, o), p.setEnd(r, i), e.selection.get().removeAllRanges(), e.selection.get().addRange(p), e.shared.safariSelection = null;
        }
        $(A, k) ? f(A, k) : L(A, k);
      }, apply: L, remove: f, applyStyle: u, removeStyle: function(A) {
        u(A, null);
      } };
    }, a.MODULES.spaces = function(e) {
      function t(v, c) {
        var N = v.previousSibling, L = v.nextSibling, b = v.textContent, f = v.parentNode, u = [a.ENTER_P, a.ENTER_DIV, a.ENTER_BR];
        if (!e.html.isPreformatted(f)) {
          c && (b = b.replace(/[\f\n\r\t\v ]{2,}/g, " "), L && L.tagName !== "BR" && !e.node.isBlock(L) || !(e.node.isBlock(f) || e.node.isLink(f) && !f.nextSibling || e.node.isElement(f)) || (b = b.replace(/[\f\n\r\t\v ]{1,}$/g, "")), N && N.tagName !== "BR" && !e.node.isBlock(N) || !(e.node.isBlock(f) || e.node.isLink(f) && !f.previousSibling || e.node.isElement(f)) || (b = b.replace(/^[\f\n\r\t\v ]{1,}/g, "")), (e.node.isBlock(L) || e.node.isBlock(N)) && (!N || N && N.tagName !== "A") && (b = b.replace(/^[\f\n\r\t\v ]{1,}/g, "")), b === " " && (N && e.node.isVoid(N) || L && e.node.isVoid(L)) && !(N && L && e.node.isVoid(N) || L && N && e.node.isVoid(L)) && (b = "")), (!N && e.node.isBlock(L) || !L && e.node.isBlock(N)) && e.node.isBlock(f) && f !== e.el && (b = b.replace(/^[\f\n\r\t\v ]{1,}/g, "")), c || (b = b.replace(new RegExp(a.UNICODE_NBSP, "g"), " "));
          for (var T = "", x = 0; x < b.length; x++)
            b.charCodeAt(x) != 32 || x !== 0 && T.charCodeAt(x - 1) != 32 || !((e.opts.enter === a.ENTER_BR || e.opts.enter === a.ENTER_DIV) && (N && N.tagName === "BR" || L && L.tagName === "BR") || N && L && N.tagName === L.tagName || !(N && L && e.node.isVoid(N) || N && L && e.node.isVoid(L)) || N && L && 0 <= ["STRONG", "U", "EM"].indexOf(N.tagName) && L.tagName === "BR") ? T += b[x] : T += a.UNICODE_NBSP;
          e.browser.chrome && 1 < T.length && T.charCodeAt(T.length - 1) === 32 && (L && L.nextSibling && L.nextSibling.nextSibling && L.nextSibling.nextSibling.tagName === "BR" || L && L.tagName === "BR") && (T = T.substring(0, T.length - 1) + a.UNICODE_NBSP), (!L || L && e.node.isBlock(L) || L && L.nodeType === Node.ELEMENT_NODE && e.win.getComputedStyle(L) && e.win.getComputedStyle(L).display === "block") && (!e.node.isVoid(N) || N && ["P", "DIV", "BR"].indexOf(N.tagName) !== -1 && u.indexOf(e.opts.enter) !== -1) && (T = T.replace(/ $/, a.UNICODE_NBSP)), !N || e.node.isVoid(N) || e.node.isBlock(N) || (T = T.replace(/^\u00A0([^ $])/, " $1")).length !== 1 || T.charCodeAt(0) !== 160 || !L || e.node.isVoid(L) || e.node.isBlock(L) || e.node.hasClass(N, "fr-marker") && e.node.hasClass(L, "fr-marker") || (T = " "), c || (T = T.replace(/([^ \u00A0])\u00A0([^ \u00A0])/g, "$1 $2")), v.textContent !== T && (v.textContent = T);
        }
      }
      function l(v, c) {
        if (v !== void 0 && v || (v = e.el), c === void 0 && (c = !1), !v.getAttribute || v.getAttribute("contenteditable") !== "false") {
          if (v.nodeType === Node.TEXT_NODE)
            t(v, c);
          else if (v.nodeType === Node.ELEMENT_NODE)
            for (var N = e.doc.createTreeWalker(v, NodeFilter.SHOW_TEXT, e.node.filter(function(L) {
              for (var b = L.parentNode; b && b !== e.el; ) {
                if (b.tagName === "STYLE" || b.tagName === "IFRAME" || b.tagName === "PRE")
                  return !1;
                b = b.parentNode;
              }
              return L.textContent.match(/([ \u00A0\f\n\r\t\v]{2,})|(^[ \u00A0\f\n\r\t\v]{1,})|([ \u00A0\f\n\r\t\v]{1,}$)/g) !== null && !e.node.hasClass(L.parentNode, "fr-marker");
            }), !1); N.nextNode(); )
              t(N.currentNode, c);
        }
      }
      return { normalize: l, normalizeAroundCursor: function() {
        for (var c = [], N = e.el.querySelectorAll(".fr-marker"), L = 0; L < N.length; L++) {
          for (var b = null, f = e.node.blockParent(N[L]), u = (b = f || N[L]).nextSibling, T = b.previousSibling; u && u.tagName === "BR"; )
            u = u.nextSibling;
          for (; T && T.tagName === "BR"; )
            T = T.previousSibling;
          b && c.indexOf(b) < 0 && c.push(b), T && c.indexOf(T) < 0 && c.push(T), u && c.indexOf(u) < 0 && c.push(u);
        }
        for (var x = 0; x < c.length; x++)
          l(c[x]);
      } };
    }, a.INVISIBLE_SPACE = "&#8203;", a.HAIR_SPACE = "&#8202;", a.START_MARKER = '<span class="fr-marker" data-id="0" data-type="true" style="display: none; line-height: 0;">'.concat(a.INVISIBLE_SPACE, "</span>"), a.END_MARKER = '<span class="fr-marker" data-id="0" data-type="false" style="display: none; line-height: 0;">'.concat(a.INVISIBLE_SPACE, "</span>"), a.MARKERS = a.START_MARKER + a.END_MARKER, a.MODULES.markers = function(e) {
      var t = e.$;
      function l() {
        if (!e.$wp)
          return null;
        try {
          var c = e.selection.ranges(0), N = c.commonAncestorContainer;
          if (N !== e.el && !e.$el.contains(N))
            return null;
          var L = c.cloneRange(), b = c.cloneRange();
          L.collapse(!0);
          var f = t(e.doc.createElement("SPAN")).addClass("fr-marker").attr("style", "display: none; line-height: 0;").html(a.INVISIBLE_SPACE).get(0);
          if (L.insertNode(f), f = e.$el.find("span.fr-marker").get(0)) {
            for (var u = f.nextSibling; u && u.nodeType === Node.TEXT_NODE && u.textContent.length === 0; )
              t(u).remove(), u = e.$el.find("span.fr-marker").get(0).nextSibling;
            return e.selection.clear(), e.selection.get().addRange(b), f;
          }
          return null;
        } catch {
        }
      }
      function v() {
        e.$el.find(".fr-marker").remove();
      }
      return { place: function(N, L, b) {
        var f, u, T;
        try {
          var x = N.cloneRange();
          if (x.collapse(L), x.insertNode(function(A, k) {
            var d = t(e.doc.createElement("SPAN"));
            return d.addClass("fr-marker").attr("data-id", k).attr("data-type", A).attr("style", "display: ".concat(e.browser.safari ? "none" : "inline-block", "; line-height: 0;")).html(a.INVISIBLE_SPACE), d.get(0);
          }(L, b)), L === !0)
            for (T = (f = e.$el.find('span.fr-marker[data-type="true"][data-id="'.concat(b, '"]')).get(0)).nextSibling; T && T.nodeType === Node.TEXT_NODE && T.textContent.length === 0; )
              t(T).remove(), T = f.nextSibling;
          if (L === !0 && !N.collapsed) {
            for (; !e.node.isElement(f.parentNode) && !T; )
              -1 < /\bfa\b/g.test(f.parentNode.className) && f.parentNode.tagName === "I" ? t(f.parentNode).before(f) : t(f.parentNode).after(f), T = f.nextSibling;
            if (T && T.nodeType === Node.ELEMENT_NODE && e.node.isBlock(T) && T.tagName !== "HR") {
              for (u = [T]; T = u[0], (u = e.node.contents(T))[0] && e.node.isBlock(u[0]); )
                ;
              t(T).prepend(t(f));
            }
          }
          if (L === !1 && !N.collapsed) {
            if ((T = (f = e.$el.find('span.fr-marker[data-type="false"][data-id="'.concat(b, '"]')).get(0)).previousSibling) && T.nodeType === Node.ELEMENT_NODE && e.node.isBlock(T) && T.tagName !== "HR") {
              for (u = [T]; T = u[u.length - 1], (u = e.node.contents(T))[u.length - 1] && e.node.isBlock(u[u.length - 1]); )
                ;
              t(T).append(t(f));
            }
            (f.parentNode && 0 <= ["TD", "TH"].indexOf(f.parentNode.tagName) || !f.previousSibling && e.node.isBlock(f.parentElement)) && (f.parentNode.previousSibling && !f.previousSibling ? t(f.parentNode.previousSibling).append(f) : 0 <= ["TD", "TH"].indexOf(f.parentNode.tagName) && f.parentNode.firstChild === f && (f.parentNode.previousSibling ? t(f.parentNode.previousSibling).append(f) : f.parentNode.parentNode && f.parentNode.parentNode.previousSibling && t(f.parentNode.parentNode.previousSibling).append(f)));
          }
          var $ = e.$el.find('span.fr-marker[data-type="'.concat(L, '"][data-id="').concat(b, '"]')).get(0);
          return $ && ($.style.display = "none"), $;
        } catch {
          return null;
        }
      }, insert: l, split: function() {
        e.selection.isCollapsed() || e.selection.remove();
        var N = e.$el.find(".fr-marker").get(0);
        if (N || (N = l()), !N)
          return null;
        var L = e.node.deepestParent(N);
        if (L || (L = e.node.blockParent(N)) && L.tagName !== "LI" && (L = null), L)
          if (e.node.isBlock(L) && e.node.isEmpty(L))
            L.tagName !== "LI" || L.parentNode.firstElementChild !== L || e.node.isEmpty(L.parentNode) ? t(L).replaceWith('<span class="fr-marker"></span>') : t(L).append('<span class="fr-marker"></span>');
          else if (e.cursor.isAtStart(N, L))
            t(L).before('<span class="fr-marker"></span>'), t(N).remove();
          else if (e.cursor.isAtEnd(N, L))
            t(L).after('<span class="fr-marker"></span>'), t(N).remove();
          else {
            for (var b = N, f = "", u = ""; b = b.parentNode, f += e.node.closeTagString(b), u = e.node.openTagString(b) + u, b !== L; )
              ;
            t(N).replaceWith('<span id="fr-break"></span>');
            var T = e.node.openTagString(L) + t(L).html() + e.node.closeTagString(L);
            T = T.replace(/<span id="fr-break"><\/span>/g, "".concat(f, '<span class="fr-marker"></span>').concat(u)), t(L).replaceWith(T);
          }
        return e.$el.find(".fr-marker").get(0);
      }, insertAtPoint: function(N) {
        var L, b = N.clientX, f = N.clientY;
        v();
        var u = null;
        if (typeof e.doc.caretPositionFromPoint < "u" ? (L = e.doc.caretPositionFromPoint(b, f), (u = e.doc.createRange()).setStart(L.offsetNode, L.offset), u.setEnd(L.offsetNode, L.offset)) : typeof e.doc.caretRangeFromPoint < "u" && (L = e.doc.caretRangeFromPoint(b, f), (u = e.doc.createRange()).setStart(L.startContainer, L.startOffset), u.setEnd(L.startContainer, L.startOffset)), u !== null && typeof e.win.getSelection < "u") {
          var T = e.win.getSelection();
          T.removeAllRanges(), T.addRange(u);
        } else if (typeof e.doc.body.createTextRange < "u")
          try {
            (u = e.doc.body.createTextRange()).moveToPoint(b, f);
            var x = u.duplicate();
            x.moveToPoint(b, f), u.setEndPoint("EndToEnd", x), u.select();
          } catch {
            return !1;
          }
        l();
      }, remove: v };
    }, a.MODULES.selection = function(e) {
      var t = e.$;
      function l() {
        var r = "";
        return e.win.getSelection ? r = e.win.getSelection() : e.doc.getSelection ? r = e.doc.getSelection() : e.doc.selection && (r = e.doc.selection.createRange().text), r.toString();
      }
      function v() {
        return e.win.getSelection ? e.win.getSelection() : e.doc.getSelection ? e.doc.getSelection() : e.doc.selection.createRange();
      }
      function c(r) {
        var o = v(), i = [];
        if (o && o.getRangeAt && o.rangeCount) {
          i = [];
          for (var p = 0; p < o.rangeCount; p++)
            i.push(o.getRangeAt(p));
        } else
          i = e.doc.createRange ? [e.doc.createRange()] : [];
        return r !== void 0 ? i[r] : i;
      }
      function N() {
        var r = v();
        try {
          r.removeAllRanges ? r.removeAllRanges() : r.empty ? r.empty() : r.clear && r.clear();
        } catch {
        }
      }
      function L(r, o) {
        var i = r;
        return i.nodeType === Node.ELEMENT_NODE && 0 < i.childNodes.length && i.childNodes[o] && (i = i.childNodes[o]), i.nodeType === Node.TEXT_NODE && (i = i.parentNode), i;
      }
      function b() {
        if (e.$wp) {
          e.markers.remove();
          var r, o, i = c(), p = [];
          for (o = 0; o < i.length; o++)
            if (i[o].startContainer !== e.doc || e.browser.msie) {
              var s = (r = i[o]).collapsed, n = e.markers.place(r, !0, o), C = e.markers.place(r, !1, o);
              if (n !== void 0 && n || !s || (t(".fr-marker").remove(), e.selection.setAtEnd(e.el)), e.el.normalize(), e.browser.safari && !s)
                try {
                  (r = e.doc.createRange()).setStartAfter(n), r.setEndBefore(C), p.push(r);
                } catch {
                }
            }
          if (e.browser.safari && p.length)
            for (e.selection.clear(), o = 0; o < p.length; o++)
              e.selection.get().addRange(p[o]);
        }
      }
      function f() {
        var r, o = e.el.querySelectorAll('.fr-marker[data-type="true"]');
        if (!e.$wp)
          return e.markers.remove(), !1;
        if (o.length === 0)
          return !1;
        if (e.browser.msie || e.browser.edge)
          for (r = 0; r < o.length; r++)
            o[r].style.display = "inline-block";
        e.core.hasFocus() || e.browser.msie || e.browser.webkit || e.$el.focus(), N();
        var i = v();
        for (r = 0; r < o.length; r++) {
          var p = t(o[r]).data("id"), s = o[r], n = e.doc.createRange(), C = e.$el.find('.fr-marker[data-type="false"][data-id="'.concat(p, '"]'));
          (e.browser.msie || e.browser.edge) && C.css("display", "inline-block");
          var m = null;
          if (0 < C.length) {
            C = C[0];
            try {
              for (var h = !1, S = s.nextSibling, y = null; S && S.nodeType === Node.TEXT_NODE && S.textContent.length === 0; )
                S = (y = S).nextSibling, t(y).remove();
              for (var M = C.nextSibling; M && M.nodeType === Node.TEXT_NODE && M.textContent.length === 0; )
                M = (y = M).nextSibling, t(y).remove();
              if (s.nextSibling === C || C.nextSibling === s) {
                for (var O = s.nextSibling === C ? s : C, H = O === s ? C : s, _ = O.previousSibling; _ && _.nodeType === Node.TEXT_NODE && _.length === 0; )
                  _ = (y = _).previousSibling, t(y).remove();
                if (_ && _.nodeType === Node.TEXT_NODE)
                  for (; _ && _.previousSibling && _.previousSibling.nodeType === Node.TEXT_NODE; )
                    _.previousSibling.textContent += _.textContent, _ = _.previousSibling, t(_.nextSibling).remove();
                for (var D = H.nextSibling; D && D.nodeType === Node.TEXT_NODE && D.length === 0; )
                  D = (y = D).nextSibling, t(y).remove();
                if (D && D.nodeType === Node.TEXT_NODE)
                  for (; D && D.nextSibling && D.nextSibling.nodeType === Node.TEXT_NODE; )
                    D.nextSibling.textContent = D.textContent + D.nextSibling.textContent, D = D.nextSibling, t(D.previousSibling).remove();
                if (_ && (e.node.isVoid(_) || e.node.isBlock(_)) && (_ = null), D && (e.node.isVoid(D) || e.node.isBlock(D)) && (D = null), _ && D && _.nodeType === Node.TEXT_NODE && D.nodeType === Node.TEXT_NODE) {
                  t(s).remove(), t(C).remove();
                  var w = _.textContent.length;
                  _.textContent += D.textContent, t(D).remove(), e.spaces.normalize(_), n.setStart(_, w), n.setEnd(_, w), h = !0;
                } else
                  !_ && D && D.nodeType === Node.TEXT_NODE ? (t(s).remove(), t(C).remove(), e.opts.htmlUntouched || e.spaces.normalize(D), m = t(e.doc.createTextNode("​")).get(0), t(D).before(m), n.setStart(D, 0), n.setEnd(D, 0), h = !0) : !D && _ && _.nodeType === Node.TEXT_NODE && (t(s).remove(), t(C).remove(), e.opts.htmlUntouched || e.spaces.normalize(_), m = t(e.doc.createTextNode("​")).get(0), t(_).after(m), n.setStart(_, _.textContent.length), n.setEnd(_, _.textContent.length), h = !0);
              }
              if (!h) {
                var R = void 0, B = void 0;
                B = (e.browser.chrome || e.browser.edge) && s.nextSibling === C ? (R = u(C, n, !0) || n.setStartAfter(C), u(s, n, !1) || n.setEndBefore(s)) : (s.previousSibling === C && (C = (s = C).nextSibling), C.nextSibling && C.nextSibling.tagName === "BR" || !C.nextSibling && e.node.isBlock(s.previousSibling) || s.previousSibling && s.previousSibling.tagName === "BR" || (s.style.display = "inline", C.style.display = "inline", m = t(e.doc.createTextNode("​")).get(0)), R = u(s, n, !0) || t(s).before(m) && n.setStartBefore(s), u(C, n, !1) || t(C).after(m) && n.setEndAfter(C)), typeof R == "function" && R(), typeof B == "function" && B();
              }
            } catch {
            }
          }
          m && t(m).remove();
          try {
            i.addRange(n);
          } catch {
          }
        }
        e.markers.remove();
      }
      function u(r, o, i) {
        var p, s = r.previousSibling, n = r.nextSibling;
        return s && n && s.nodeType === Node.TEXT_NODE && n.nodeType === Node.TEXT_NODE ? (p = s.textContent.length, i ? (n.textContent = s.textContent + n.textContent, t(s).remove(), t(r).remove(), e.opts.htmlUntouched || e.spaces.normalize(n), function() {
          o.setStart(n, p);
        }) : (s.textContent += n.textContent, t(n).remove(), t(r).remove(), e.opts.htmlUntouched || e.spaces.normalize(s), function() {
          o.setEnd(s, p);
        })) : s && !n && s.nodeType === Node.TEXT_NODE ? (p = s.textContent.length, i ? (e.opts.htmlUntouched || e.spaces.normalize(s), function() {
          o.setStart(s, p);
        }) : (e.opts.htmlUntouched || e.spaces.normalize(s), function() {
          o.setEnd(s, p);
        })) : !(!n || s || n.nodeType !== Node.TEXT_NODE) && (i ? (e.opts.htmlUntouched || e.spaces.normalize(n), function() {
          o.setStart(n, 0);
        }) : (e.opts.htmlUntouched || e.spaces.normalize(n), function() {
          o.setEnd(n, 0);
        }));
      }
      function T() {
        for (var r = c(), o = 0; o < r.length; o++)
          if (!r[o].collapsed)
            return !1;
        return !0;
      }
      function x(r) {
        var o, i, p = !1, s = !1;
        if (e.win.getSelection) {
          var n = e.win.getSelection();
          n.rangeCount && ((i = (o = n.getRangeAt(0)).cloneRange()).selectNodeContents(r), i.setEnd(o.startContainer, o.startOffset), p = $(i), i.selectNodeContents(r), i.setStart(o.endContainer, o.endOffset), s = $(i));
        } else
          e.doc.selection && e.doc.selection.type !== "Control" && ((i = (o = e.doc.selection.createRange()).duplicate()).moveToElementText(r), i.setEndPoint("EndToStart", o), p = $(i), i.moveToElementText(r), i.setEndPoint("StartToEnd", o), s = $(i));
        return { atStart: p, atEnd: s };
      }
      function $(r) {
        return r.toString().replace(/[\u200B-\u200D\uFEFF]/g, "") === "";
      }
      function E(r, o) {
        o === void 0 && (o = !0);
        var i = t(r).html();
        i && i.replace(/\u200b/g, "").length !== i.length && t(r).html(i.replace(/\u200b/g, ""));
        for (var p = e.node.contents(r), s = 0; s < p.length; s++)
          p[s].nodeType !== Node.ELEMENT_NODE ? t(p[s]).remove() : (E(p[s], s === 0), s === 0 && (o = !1));
        if (r.nodeType === Node.TEXT_NODE) {
          var n = t(document.createElement("span")).attr("data-first", "true").attr("data-text", "true");
          t(r)[0].replaceWith(n[0]);
        } else
          o && t(r).attr("data-first", !0);
      }
      function A() {
        return t(this).find("fr-inner").length === 0;
      }
      function k() {
        try {
          if (!e.$wp)
            return !1;
          for (var r = c(0).commonAncestorContainer; r && !e.node.isElement(r); )
            r = r.parentNode;
          return !!e.node.isElement(r);
        } catch {
          return !1;
        }
      }
      function d(r, o) {
        if (!r || 0 < r.getElementsByClassName("fr-marker").length)
          return !1;
        for (var i = r.firstChild; i && (e.node.isBlock(i) || o && !e.node.isVoid(i) && i.nodeType === Node.ELEMENT_NODE); )
          i = (r = i).firstChild;
        r.innerHTML = a.MARKERS + r.innerHTML;
      }
      function g(r, o) {
        if (!r || 0 < r.getElementsByClassName("fr-marker").length)
          return !1;
        for (var i = r.lastChild; i && (e.node.isBlock(i) || o && !e.node.isVoid(i) && i.nodeType === Node.ELEMENT_NODE); )
          i = (r = i).lastChild;
        var p = e.doc.createElement("SPAN");
        for (p.setAttribute("id", "fr-sel-markers"), p.innerHTML = a.MARKERS; r.parentNode && e.opts.htmlAllowedEmptyTags && 0 <= e.opts.htmlAllowedEmptyTags.indexOf(r.tagName.toLowerCase()); )
          r = r.parentNode;
        r.appendChild(p);
        var s = r.querySelector("#fr-sel-markers");
        s.outerHTML = s.innerHTML;
      }
      return { text: l, get: v, ranges: c, clear: N, element: function() {
        var o = v();
        try {
          if (o.rangeCount) {
            var i, p = c(0), s = p.startContainer;
            if (e.node.isElement(s) && p.startOffset === 0 && s.childNodes.length)
              for (; s.childNodes.length && s.childNodes[0].nodeType === Node.ELEMENT_NODE; )
                s = s.childNodes[0];
            if (s.nodeType === Node.TEXT_NODE && p.startOffset === (s.textContent || "").length && s.nextSibling && (s = s.nextSibling), s.nodeType === Node.ELEMENT_NODE) {
              var n = !1;
              if (e.node.isElement(s) && s.textContent == "" && s.childNodes[0].tagName == "IMG" && s.childNodes.length)
                for (; s.childNodes.length && s.childNodes[0].nodeType === Node.ELEMENT_NODE; )
                  s = s.childNodes[0];
              if (0 < s.childNodes.length && s.childNodes[p.startOffset]) {
                for (i = s.childNodes[p.startOffset]; i && i.nodeType === Node.TEXT_NODE && i.textContent.length === 0; )
                  i = i.nextSibling;
                if (i && i.textContent.replace(/\u200B/g, "") === l().replace(/\u200B/g, "") && (s = i, n = !0), !n && 1 < s.childNodes.length && 0 < p.startOffset && s.childNodes[p.startOffset - 1]) {
                  for (i = s.childNodes[p.startOffset - 1]; i && i.nodeType === Node.TEXT_NODE && i.textContent.length === 0; )
                    i = i.nextSibling;
                  i && i.textContent.replace(/\u200B/g, "") === l().replace(/\u200B/g, "") && (s = i, n = !0);
                }
              } else
                !p.collapsed && s.nextSibling && s.nextSibling.nodeType === Node.ELEMENT_NODE && (i = s.nextSibling) && i.textContent.replace(/\u200B/g, "") === l().replace(/\u200B/g, "") && (s = i, n = !0);
              !n && 0 < s.childNodes.length && t(s.childNodes[0]).text().replace(/\u200B/g, "") === l().replace(/\u200B/g, "") && ["BR", "IMG", "HR"].indexOf(s.childNodes[0].tagName) < 0 && (s = s.childNodes[0]);
            }
            for (; s.nodeType !== Node.ELEMENT_NODE && s.parentNode; )
              s = s.parentNode;
            for (var C = s; C && C.tagName !== "HTML"; ) {
              if (C === e.el)
                return s;
              C = t(C).parent()[0];
            }
          }
        } catch {
        }
        return e.el;
      }, endElement: function() {
        var o = v();
        try {
          if (o.rangeCount) {
            var i, p = c(0), s = p.endContainer;
            if (s.nodeType === Node.ELEMENT_NODE) {
              var n = !1;
              0 < s.childNodes.length && s.childNodes[p.endOffset] && t(s.childNodes[p.endOffset]).text() === l() ? (s = s.childNodes[p.endOffset], n = !0) : !p.collapsed && s.previousSibling && s.previousSibling.nodeType === Node.ELEMENT_NODE ? (i = s.previousSibling) && i.textContent.replace(/\u200B/g, "") === l().replace(/\u200B/g, "") && (s = i, n = !0) : !p.collapsed && 0 < s.childNodes.length && s.childNodes[p.endOffset] && (i = s.childNodes[p.endOffset].previousSibling).nodeType === Node.ELEMENT_NODE && i && i.textContent.replace(/\u200B/g, "") === l().replace(/\u200B/g, "") && (s = i, n = !0), !n && 0 < s.childNodes.length && t(s.childNodes[s.childNodes.length - 1]).text() === l() && ["BR", "IMG", "HR"].indexOf(s.childNodes[s.childNodes.length - 1].tagName) < 0 && (s = s.childNodes[s.childNodes.length - 1]);
            }
            for (s.nodeType === Node.TEXT_NODE && p.endOffset === 0 && s.previousSibling && s.previousSibling.nodeType === Node.ELEMENT_NODE && (s = s.previousSibling); s.nodeType !== Node.ELEMENT_NODE && s.parentNode; )
              s = s.parentNode;
            for (var C = s; C && C.tagName !== "HTML"; ) {
              if (C === e.el)
                return s;
              C = t(C).parent()[0];
            }
          }
        } catch {
        }
        return e.el;
      }, save: b, restore: f, isCollapsed: T, isFull: function() {
        if (T())
          return !1;
        e.selection.save();
        var o, i = e.el.querySelectorAll("td, th, img, br, iframe");
        for (o = 0; o < i.length; o++)
          (i[o].nextSibling || i[o].tagName === "IMG" || i[o].tagName === "IFRAME") && (i[o].innerHTML = '<span class="fr-mk" style="display: none;">&nbsp;</span>'.concat(i[o].innerHTML));
        var p = !1, s = x(e.el);
        for (s.atStart && s.atEnd && (p = !0), i = e.el.querySelectorAll(".fr-mk"), o = 0; o < i.length; o++)
          i[o].parentNode.removeChild(i[o]);
        return e.selection.restore(), p;
      }, inEditor: k, remove: function() {
        if (T())
          return !0;
        var o;
        function i(U) {
          for (var V = U.previousSibling; V && V.nodeType === Node.TEXT_NODE && V.textContent.length === 0; ) {
            var F = V;
            V = V.previousSibling, t(F).remove();
          }
          return V;
        }
        function p(U) {
          for (var V = U.nextSibling; V && V.nodeType === Node.TEXT_NODE && V.textContent.length === 0; ) {
            var F = V;
            V = V.nextSibling, t(F).remove();
          }
          return V;
        }
        b();
        var s = e.$el.find('.fr-marker[data-type="true"]');
        for (o = 0; o < s.length; o++)
          for (var n = s[o]; !(i(n) || e.node.isBlock(n.parentNode) || e.$el.is(n.parentNode) || e.node.hasClass(n.parentNode, "fr-inner")); )
            t(n.parentNode).before(n);
        var C = e.$el.find('.fr-marker[data-type="false"]');
        for (o = 0; o < C.length; o++) {
          for (var m = C[o]; !(p(m) || e.node.isBlock(m.parentNode) || e.$el.is(m.parentNode) || e.node.hasClass(m.parentNode, "fr-inner")); )
            t(m.parentNode).after(m);
          m.parentNode && e.node.isBlock(m.parentNode) && e.node.isEmpty(m.parentNode) && !e.$el.is(m.parentNode) && !e.node.hasClass(m.parentNode, "fr-inner") && e.opts.keepFormatOnDelete && t(m.parentNode).after(m);
        }
        if (function() {
          for (var V = e.$el.find(".fr-marker"), F = 0; F < V.length; F++)
            if (t(V[F]).parentsUntil('.fr-element, [contenteditable="true"]', '[contenteditable="false"]').length)
              return !1;
          return !0;
        }()) {
          (function U(V, F) {
            var G = e.node.contents(V.get(0));
            0 <= ["TD", "TH"].indexOf(V.get(0).tagName) && V.find(".fr-marker").length === 1 && (e.node.hasClass(G[0], "fr-marker") || G[0].tagName == "BR" && e.node.hasClass(G[0].nextElementSibling, "fr-marker")) && V.attr("data-del-cell", !0);
            for (var P = 0; P < G.length; P++) {
              var j = G[P];
              e.node.hasClass(j, "fr-marker") ? F = (F + 1) % 2 : F ? 0 < t(j).find(".fr-marker").length ? F = U(t(j), F) : ["TD", "TH"].indexOf(j.tagName) < 0 && !e.node.hasClass(j, "fr-inner") ? !e.opts.keepFormatOnDelete || 0 < e.$el.find("[data-first]").length || e.node.isVoid(j) ? t(j).remove() : E(j) : e.node.hasClass(j, "fr-inner") ? t(j).find(".fr-inner").length === 0 ? t(j).html("<br>") : t(j).find(".fr-inner").filter(A).html("<br>") : (t(j).empty(), t(j).attr("data-del-cell", !0)) : 0 < t(j).find(".fr-marker").length && (F = U(t(j), F));
            }
            return F;
          })(e.$el, 0);
          var h = e.$el.find('[data-first="true"]');
          if (h.length)
            e.$el.find(".fr-marker").remove(), h.append(a.INVISIBLE_SPACE + a.MARKERS).removeAttr("data-first"), h.attr("data-text") && h.replaceWith(h.html());
          else
            for (e.$el.find("table").filter(function() {
              return 0 < t(this).find("[data-del-cell]").length && t(this).find("[data-del-cell]").length === t(this).find("td, th").length;
            }).remove(), e.$el.find("[data-del-cell]").removeAttr("data-del-cell"), s = e.$el.find('.fr-marker[data-type="true"]'), o = 0; o < s.length; o++) {
              var S = s[o], y = S.nextSibling, M = e.$el.find('.fr-marker[data-type="false"][data-id="'.concat(t(S).data("id"), '"]')).get(0);
              if (M) {
                if (S && (!y || y !== M)) {
                  var O = e.node.blockParent(S), H = e.node.blockParent(M), _ = !1, D = !1;
                  if (O && 0 <= ["UL", "OL"].indexOf(O.tagName) && (_ = !(O = null)), H && 0 <= ["UL", "OL"].indexOf(H.tagName) && (D = !(H = null)), t(S).after(M), O !== H)
                    if (O !== null || _)
                      if (H !== null || D || t(O).parentsUntil(e.$el, "table").length !== 0)
                        O && H && t(O).parentsUntil(e.$el, "table").length === 0 && t(H).parentsUntil(e.$el, "table").length === 0 && !t(O).contains(H) && !t(H).contains(O) && (t(O).append(t(H).html()), t(H).remove());
                      else {
                        for (y = O; !y.nextSibling && y.parentNode !== e.el; )
                          y = y.parentNode;
                        for (y = y.nextSibling; y && y.tagName !== "BR"; ) {
                          var w = y.nextSibling;
                          t(O).append(y), y = w;
                        }
                        y && y.tagName === "BR" && t(y).remove();
                      }
                    else {
                      var R = e.node.deepestParent(S);
                      R ? (t(R).after(t(H).html()), t(H).remove()) : t(H).parentsUntil(e.$el, "table").length === 0 && (t(S).next().after(t(H).html()), t(H).remove());
                    }
                }
              } else
                M = t(S).clone().attr("data-type", !1), t(S).after(M);
            }
        }
        e.$el.find("li:empty").remove(), e.opts.keepFormatOnDelete || e.html.fillEmptyBlocks(), e.html.cleanEmptyTags(!0), e.opts.htmlUntouched || (e.clean.lists(), e.$el.find("li:empty").append("<br>"), e.spaces.normalize());
        var B = e.$el.find(".fr-marker").last().get(0), I = e.$el.find(".fr-marker").first().get(0);
        B !== void 0 && I !== void 0 && !B.nextSibling && I.previousSibling && I.previousSibling.tagName === "BR" && e.node.isElement(B.parentNode) && e.node.isElement(I.parentNode) && e.$el.append("<br>"), f();
      }, blocks: function(o) {
        var i, p, s = [], n = v();
        if (k() && n.rangeCount) {
          var C = c();
          for (i = 0; i < C.length; i++) {
            var m = C[i], h = L(m.startContainer, m.startOffset), S = L(m.endContainer, m.endOffset);
            (p = e.node.blockParent(h)) && s.indexOf(p) < 0 && s.push(p), (e.node.isBlock(h) || e.node.hasClass(h, "fr-inner")) && s.indexOf(h) < 0 && s.push(h);
            for (var y = [], M = h; M !== S && M !== e.el; )
              y.indexOf(M) < 0 && M.children && M.children.length ? (y.push(M), M = M.children[0]) : M.nextSibling ? M = M.nextSibling : M.parentNode && (M = M.parentNode, y.push(M)), e.node.isBlock(M) && y.indexOf(M) < 0 && s.indexOf(M) < 0 && (M !== S || 0 < m.endOffset) && s.push(M);
            e.node.isBlock(S) && s.indexOf(S) < 0 && 0 < m.endOffset && s.push(S), (p = e.node.blockParent(S)) && s.indexOf(p) < 0 && s.push(p);
          }
        }
        for (i = s.length - 1; 0 < i; i--)
          if (t(s[i - 1]).contains(s[i])) {
            if (o && t(s[i]).find("ul, ol").length)
              continue;
            s.splice(i - 1, 1);
          } else if (t(s[i]).contains(s[i - 1])) {
            if (o && t(s[i]).find("ul, ol").length)
              continue;
            s.splice(i, 1);
          }
        return s;
      }, info: x, setAtEnd: g, setAtStart: d, setBefore: function(o, i) {
        i === void 0 && (i = !0);
        for (var p = o.previousSibling; p && p.nodeType === Node.TEXT_NODE && p.textContent.length === 0; )
          p = p.previousSibling;
        return p ? (e.node.isBlock(p) ? g(p) : p.tagName === "BR" ? t(p).before(a.MARKERS) : t(p).after(a.MARKERS), !0) : !!i && (e.node.isBlock(o) ? d(o) : t(o).before(a.MARKERS), !0);
      }, setAfter: function(o, i) {
        i === void 0 && (i = !0);
        for (var p = o.nextSibling; p && p.nodeType === Node.TEXT_NODE && p.textContent.length === 0; )
          p = p.nextSibling;
        return p ? (e.node.isBlock(p) ? d(p) : t(p).before(a.MARKERS), !0) : !!i && (e.node.isBlock(o) ? g(o) : t(o).after(a.MARKERS), !0);
      }, rangeElement: L };
    }, Object.assign(a.DEFAULTS, { language: null }), a.LANGUAGE = {}, a.MODULES.language = function(e) {
      var t;
      return { _init: function() {
        a.LANGUAGE && (t = a.LANGUAGE[e.opts.language]), t && t.direction && (e.opts.direction = t.direction);
      }, translate: function(v) {
        return t && t.translation[v] && t.translation[v].length ? t.translation[v] : v;
      } };
    }, Object.assign(a.DEFAULTS, { placeholderText: "Type something" }), a.MODULES.placeholder = function(e) {
      var t = e.$;
      function l() {
        e.$placeholder || function() {
          e.$placeholder = t(e.doc.createElement("SPAN")).addClass("fr-placeholder"), e.$wp.append(e.$placeholder);
        }();
        var N = e.opts.iframe ? e.$iframe.prev().outerHeight(!0) : e.$el.prev().outerHeight(!0), L = 0, b = 0, f = 0, u = 0, T = 0, x = 0, $ = e.node.contents(e.el), E = t(e.selection.element()).css("text-align");
        if ($.length && $[0].nodeType === Node.ELEMENT_NODE) {
          var A = t($[0]);
          (0 < e.$wp.prev().length || 0 < e.$el.prev().length) && e.ready && (L = e.helpers.getPX(A.css("margin-top")), u = e.helpers.getPX(A.css("padding-top")), b = e.helpers.getPX(A.css("margin-left")), f = e.helpers.getPX(A.css("margin-right")), T = e.helpers.getPX(A.css("padding-left")), x = e.helpers.getPX(A.css("padding-right"))), e.$placeholder.css("font-size", A.css("font-size")), e.$placeholder.css("line-height", A.css("line-height"));
        } else
          e.$placeholder.css("font-size", e.$el.css("font-size")), e.$placeholder.css("line-height", e.$el.css("line-height"));
        e.$wp.addClass("show-placeholder"), e.$placeholder.css({ marginTop: Math.max(e.helpers.getPX(e.$el.css("margin-top")), L) + (N || 0), paddingTop: Math.max(e.helpers.getPX(e.$el.css("padding-top")), u), paddingLeft: Math.max(e.helpers.getPX(e.$el.css("padding-left")), T), marginLeft: Math.max(e.helpers.getPX(e.$el.css("margin-left")), b), paddingRight: Math.max(e.helpers.getPX(e.$el.css("padding-right")), x), marginRight: Math.max(e.helpers.getPX(e.$el.css("margin-right")), f), textAlign: E }).text(e.language.translate(e.opts.placeholderText || e.$oel.attr("placeholder") || "")), e.$placeholder.html(e.$placeholder.text().replace(/\n/g, "<br>"));
      }
      function v() {
        e.$wp.removeClass("show-placeholder");
      }
      function c() {
        if (!e.$wp)
          return !1;
        e.core.isEmpty() ? l() : v();
      }
      return { _init: function() {
        if (!e.$wp)
          return !1;
        e.events.on("init input keydown keyup contentChanged initialized", c);
      }, show: l, hide: v, refresh: c, isVisible: function() {
        return !e.$wp || e.node.hasClass(e.$wp.get(0), "show-placeholder");
      } };
    }, a.UNICODE_NBSP = " ", a.VOID_ELEMENTS = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"], a.BLOCK_TAGS = ["address", "article", "aside", "audio", "blockquote", "canvas", "details", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "noscript", "ol", "output", "p", "pre", "section", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "ul", "video"], Object.assign(a.DEFAULTS, { htmlAllowedEmptyTags: ["textarea", "a", "iframe", "object", "video", "style", "script", ".fa", ".fr-emoticon", ".fr-inner", "path", "line", "hr"], htmlDoNotWrapTags: ["script", "style"], htmlSimpleAmpersand: !1, htmlIgnoreCSSProperties: [], htmlExecuteScripts: !0 }), a.MODULES.html = function(e) {
      var t = e.$;
      function l() {
        return e.opts.enter === a.ENTER_P ? "p" : e.opts.enter === a.ENTER_DIV ? "div" : e.opts.enter === a.ENTER_BR ? null : void 0;
      }
      function v(S, y) {
        return !(!S || S === e.el) && (y ? ["PRE", "SCRIPT", "STYLE"].indexOf(S.tagName) != -1 || v(S.parentNode, y) : ["PRE", "SCRIPT", "STYLE"].indexOf(S.tagName) !== -1);
      }
      function c(S) {
        var y, M = [], O = [];
        if (S) {
          var H = e.el.querySelectorAll(".fr-marker");
          for (y = 0; y < H.length; y++) {
            var _ = e.node.blockParent(H[y]) || H[y];
            if (_) {
              var D = _.nextSibling, w = _.previousSibling;
              _ && O.indexOf(_) < 0 && e.node.isBlock(_) && O.push(_), w && e.node.isBlock(w) && O.indexOf(w) < 0 && O.push(w), D && e.node.isBlock(D) && O.indexOf(D) < 0 && O.push(D);
            }
          }
        } else
          O = e.el.querySelectorAll(N());
        var R = N();
        for (R += ",".concat(a.VOID_ELEMENTS.join(",")), R += ", .fr-inner", R += ",".concat(e.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),"), ":not(.fr-marker)"), y = O.length - 1; 0 <= y; y--)
          if (!(O[y].textContent && 0 < O[y].textContent.replace(/\u200B|\n/g, "").length || 0 < O[y].querySelectorAll(R).length)) {
            for (var B = e.node.contents(O[y]), I = !1, U = 0; U < B.length; U++)
              if (B[U].nodeType !== Node.COMMENT_NODE && B[U].textContent && 0 < B[U].textContent.replace(/\u200B|\n/g, "").length) {
                I = !0;
                break;
              }
            I || M.push(O[y]);
          }
        return M;
      }
      function N() {
        return a.BLOCK_TAGS.join(", ");
      }
      function L(S) {
        var y, M, O = t.merge([], a.VOID_ELEMENTS);
        O = t.merge(O, e.opts.htmlAllowedEmptyTags), O = S === void 0 ? t.merge(O, a.BLOCK_TAGS) : t.merge(O, a.NO_DELETE_TAGS), y = e.el.querySelectorAll("*:empty:not(".concat(O.join("):not("), "):not(.fr-marker):not(template)"));
        do {
          M = !1;
          for (var H = 0; H < y.length; H++)
            y[H].attributes.length !== 0 && y[H].getAttribute("href") === void 0 || (y[H].parentNode.removeChild(y[H]), M = !0);
          (y = e.el.querySelectorAll("*:empty:not(".concat(O.join("):not("), "):not(.fr-marker):not(template)"))).length || (y = e.el.querySelectorAll("a[href]:not([name]):empty"));
        } while (y.length && M);
      }
      function b(S, y) {
        var M = l();
        if (y && (M = "div"), M) {
          for (var O = e.doc.createDocumentFragment(), H = null, _ = !1, D = S.firstChild, w = !1; D; ) {
            var R = D.nextSibling;
            if (D.nodeType === Node.ELEMENT_NODE && (e.node.isBlock(D) || 0 <= e.opts.htmlDoNotWrapTags.indexOf(D.tagName.toLowerCase()) && !e.node.hasClass(D, "fr-marker")))
              H = null, O.appendChild(D.cloneNode(!0));
            else if (D.nodeType !== Node.ELEMENT_NODE && D.nodeType !== Node.TEXT_NODE)
              H = null, O.appendChild(D.cloneNode(!0));
            else if (D.tagName === "BR")
              H === null ? (H = e.doc.createElement(M), w = !0, y && (H.setAttribute("class", "fr-temp-div"), H.setAttribute("data-empty", !0)), H.appendChild(D.cloneNode(!0)), D && D.parentNode && ["TD", "TH"].indexOf(D.parentNode.tagName) < 0 && O.appendChild(H)) : _ === !1 && (H.appendChild(e.doc.createElement("br")), y && (H.setAttribute("class", "fr-temp-div"), H.setAttribute("data-empty", !0))), H = null;
            else {
              var B = D.textContent;
              if (D.nodeType !== Node.TEXT_NODE || 0 < B.replace(/\n/g, "").replace(/(^ *)|( *$)/g, "").length || B.replace(/(^ *)|( *$)/g, "").length && B.indexOf(`
`) < 0) {
                if (D.tagName === "SPAN" && t(D).hasClass("fr-marker") && !D.previousSibling && (D.nextSibling && D.nextSibling.tagName == "TABLE" || D.nextSibling && D.nextSibling.nextSibling && D.nextSibling.nextSibling.tagName == "TABLE")) {
                  O.appendChild(D), D = R;
                  continue;
                }
                if (D.tagName === "SPAN" && t(D).hasClass("fr-marker") && D.previousSibling && D.previousSibling.nodeType === Node.ELEMENT_NODE && (D.nextSibling && D.nextSibling.tagName == "TABLE" || D.nextSibling && D.nextSibling.nextSibling && D.nextSibling.nextSibling.tagName == "TABLE")) {
                  O.appendChild(D), w = !0, D = R;
                  continue;
                }
                H === null && (H = e.doc.createElement(M), w = !0, y && H.setAttribute("class", "fr-temp-div"), O.appendChild(H), _ = !1), H.appendChild(D.cloneNode(!0)), _ || e.node.hasClass(D, "fr-marker") || D.nodeType === Node.TEXT_NODE && B.replace(/ /g, "").length === 0 || (_ = !0);
              } else
                w = !0;
            }
            D = R;
          }
          w && (S.innerHTML = "", S.appendChild(O));
        }
      }
      function f(S, y) {
        for (var M = S.length - 1; 0 <= M; M--)
          b(S[M], y);
      }
      function u(S, y, M, O, H) {
        if (!e.$wp)
          return !1;
        S === void 0 && (S = !1), y === void 0 && (y = !1), M === void 0 && (M = !1), O === void 0 && (O = !1), H === void 0 && (H = !1);
        var _ = e.$wp.scrollTop();
        b(e.el, S), O && f(e.el.querySelectorAll(".fr-inner"), S), y && f(e.el.querySelectorAll("td, th"), S), M && f(e.el.querySelectorAll("blockquote"), S), H && f(e.el.querySelectorAll("li"), S), _ !== e.$wp.scrollTop() && e.$wp.scrollTop(_);
      }
      function T(S) {
        if (S === void 0 && (S = e.el), S && 0 <= ["SCRIPT", "STYLE", "PRE"].indexOf(S.tagName))
          return !1;
        for (var y = e.doc.createTreeWalker(S, NodeFilter.SHOW_TEXT, e.node.filter(function(w) {
          return w.textContent.match(/([ \n]{2,})|(^[ \n]{1,})|([ \n]{1,}$)/g) !== null;
        }), !1); y.nextNode(); ) {
          var M = y.currentNode;
          if (!v(M.parentNode, !0)) {
            var O = e.node.isBlock(M.parentNode) || e.node.isElement(M.parentNode), H = M.textContent.replace(/(?!^)( ){2,}(?!$)/g, " ").replace(/\n/g, " ").replace(/^[ ]{2,}/g, " ").replace(/[ ]{2,}$/g, " ");
            if (O) {
              var _ = M.previousSibling, D = M.nextSibling;
              _ && D && H === " " ? H = e.node.isBlock(_) && e.node.isBlock(D) ? "" : " " : (_ || (H = H.replace(/^ */, "")), D || (H = H.replace(/ *$/, "")));
            }
            M.textContent = H;
          }
        }
      }
      function x(S, y, M) {
        var O = new RegExp(y, "gi").exec(S);
        return O ? O[M] : null;
      }
      function $(S) {
        var y = S.doctype, M = "<!DOCTYPE html>";
        return y && (M = "<!DOCTYPE ".concat(y.name).concat(y.publicId ? ' PUBLIC "'.concat(y.publicId, '"') : "").concat(!y.publicId && y.systemId ? " SYSTEM" : "").concat(y.systemId ? ' "'.concat(y.systemId, '"') : "", ">")), M;
      }
      function E(S) {
        var y = S.parentNode;
        if (y && (e.node.isBlock(y) || e.node.isElement(y)) && ["TD", "TH"].indexOf(y.tagName) < 0) {
          for (var M = S.previousSibling, O = S.nextSibling; M && (M.nodeType === Node.TEXT_NODE && M.textContent.replace(/\n|\r/g, "").length === 0 || e.node.hasClass(M, "fr-tmp")); )
            M = M.previousSibling;
          if (O)
            return !1;
          M && y && M.tagName !== "BR" && !e.node.isBlock(M) && !O && 0 < y.textContent.replace(/\u200B/g, "").length && 0 < M.textContent.length && !e.node.hasClass(M, "fr-marker") && (e.el === y && !O && e.opts.enter === a.ENTER_BR && e.browser.msie || S.parentNode.removeChild(S));
        } else
          !y || e.node.isBlock(y) || e.node.isElement(y) || S.previousSibling || S.nextSibling || !e.node.isDeletable(S.parentNode) || E(S.parentNode);
      }
      function A() {
        e.opts.htmlUntouched || (L(), u(), T(), e.spaces.normalize(null, !0), e.html.fillEmptyBlocks(), e.clean.lists(), e.clean.tables(), e.clean.toHTML5(), e.html.cleanBRs()), e.selection.restore(), k(), e.placeholder.refresh();
      }
      function k() {
        e.node.isEmpty(e.el) && (l() !== null ? e.el.querySelector(N()) || e.el.querySelector("".concat(e.opts.htmlDoNotWrapTags.join(":not(.fr-marker),"), ":not(.fr-marker)")) || (e.core.hasFocus() ? (e.$el.html("<".concat(l(), ">").concat(a.MARKERS, "<br/></").concat(l(), ">")), e.selection.restore()) : e.$el.html("<".concat(l(), "><br/></").concat(l(), ">"))) : e.el.querySelector("*:not(.fr-marker):not(br)") || (e.core.hasFocus() ? (e.$el.html("".concat(a.MARKERS, "<br/>")), e.selection.restore()) : e.$el.html("<br/>")));
      }
      function d(S, y) {
        return x(S, "<".concat(y, "[^>]*?>([\\w\\W]*)</").concat(y, ">"), 1);
      }
      function g(S, y) {
        var M = t("<div ".concat(x(S, "<".concat(y, "([^>]*?)>"), 1) || "", ">"));
        return e.node.rawAttributes(M.get(0));
      }
      function r(S) {
        return (x(S, "<!DOCTYPE([^>]*?)>", 0) || "<!DOCTYPE html>").replace(/\n/g, " ").replace(/ {2,}/g, " ");
      }
      function o(S, y) {
        e.opts.htmlExecuteScripts ? S.html(y) : S.get(0).innerHTML = y;
      }
      function i(S) {
        var y;
        (y = /:not\(([^)]*)\)/g).test(S) && (S = S.replace(y, "     $1 "));
        var M = 100 * (S.match(/(#[^\s+>~.[:]+)/g) || []).length + 10 * (S.match(/(\[[^]]+\])/g) || []).length + 10 * (S.match(/(\.[^\s+>~.[:]+)/g) || []).length + 10 * (S.match(/(:[\w-]+\([^)]*\))/gi) || []).length + 10 * (S.match(/(:[^\s+>~.[:]+)/g) || []).length + (S.match(/(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi) || []).length;
        return M += ((S = (S = S.replace(/[*\s+>~]/g, " ")).replace(/[#.]/g, " ")).match(/([^\s+>~.[:]+)/g) || []).length;
      }
      function p(S) {
        if (e.events.trigger("html.processGet", [S]), S && S.getAttribute && S.getAttribute("class") === "" && S.removeAttribute("class"), S && S.getAttribute && S.getAttribute("style") === "" && S.removeAttribute("style"), S && S.nodeType === Node.ELEMENT_NODE) {
          var y, M = S.querySelectorAll('[class=""],[style=""]');
          for (y = 0; y < M.length; y++) {
            var O = M[y];
            O.getAttribute("class") === "" && O.removeAttribute("class"), O.getAttribute("style") === "" && O.removeAttribute("style");
          }
          if (S.tagName === "BR")
            E(S);
          else {
            var H = S.querySelectorAll("br");
            for (y = 0; y < H.length; y++)
              E(H[y]);
          }
        }
      }
      function s(S, y) {
        return S[3] - y[3];
      }
      function n() {
        for (var S = e.el.querySelectorAll("input, textarea"), y = 0; y < S.length; y++)
          S[y].type !== "checkbox" && S[y].type !== "radio" || (S[y].checked ? S[y].setAttribute("checked", S[y].checked) : e.$(S[y]).removeAttr("checked")), S[y].getAttribute("value") && S[y].setAttribute("value", S[y].value);
      }
      function C(S) {
        var y = e.doc.createElement("div");
        return y.innerHTML = S, y.querySelector(N()) !== null;
      }
      function m(S) {
        var y = null;
        if (S === void 0 && (y = e.selection.element()), e.opts.keepFormatOnDelete)
          return !1;
        var M, O, H = y ? (y.textContent.match(/\u200B/g) || []).length - y.querySelectorAll(".fr-marker").length : 0;
        if ((e.el.textContent.match(/\u200B/g) || []).length - e.el.querySelectorAll(".fr-marker").length === H)
          return !1;
        do {
          O = !1, M = e.el.querySelectorAll("*:not(.fr-marker)");
          for (var _ = 0; _ < M.length; _++) {
            var D = M[_];
            if (y !== D) {
              var w = D.textContent;
              D.children.length === 0 && w.length === 1 && w.charCodeAt(0) === 8203 && ["TD", "STRONG", "SPAN", "EM", "U", "S", "SUB", "SUP"].indexOf(D.tagName) < 0 && (t(D).remove(), O = !0);
            }
          }
        } while (O);
      }
      function h() {
        m(), e.placeholder && setTimeout(e.placeholder.refresh, 0);
      }
      return { defaultTag: l, isPreformatted: v, emptyBlocks: c, emptyBlockTagsQuery: function() {
        return "".concat(a.BLOCK_TAGS.join(":empty, "), ":empty");
      }, blockTagsQuery: N, fillEmptyBlocks: function(y) {
        var M = c(y);
        e.node.isEmpty(e.el) && e.opts.enter === a.ENTER_BR && M.push(e.el);
        for (var O = 0; O < M.length; O++) {
          var H = M[O];
          H.getAttribute("contenteditable") === "false" || H.querySelector("".concat(e.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),"), ":not(.fr-marker)")) || e.node.isVoid(H) || H.tagName === "TABLE" || H.tagName === "TBODY" || H.tagName === "TR" || H.tagName === "UL" || H.tagName === "OL" || H.querySelector("br") || H.appendChild(e.doc.createElement("br"));
        }
        if (e.browser.msie && e.opts.enter === a.ENTER_BR) {
          var _ = e.node.contents(e.el);
          _.length && _[_.length - 1].nodeType === Node.TEXT_NODE && e.$el.append("<br>");
        }
      }, cleanEmptyTags: L, cleanWhiteTags: m, cleanBlankSpaces: T, blocks: function() {
        return e.$el.get(0).querySelectorAll(N());
      }, getDoctype: $, set: function(y) {
        var M = e.clean.html((y || "").trim(), [], [], e.opts.fullPage), O = new RegExp("%3A//", "g"), H = M.replace(O, "://");
        if (e.opts.fullPage) {
          var _ = d(H, "body") || (0 <= H.indexOf("<body") ? "" : H), D = g(H, "body"), w = d(H, "head") || "<title></title>", R = g(H, "head"), B = t("<div>");
          B.append(w).contents().each(function() {
            (this.nodeType === Node.COMMENT_NODE || 0 <= ["BASE", "LINK", "META", "NOSCRIPT", "SCRIPT", "STYLE", "TEMPLATE", "TITLE"].indexOf(this.tagName)) && this.parentNode.removeChild(this);
          });
          var I = B.html().trim();
          w = t("<div>").append(w).contents().map(function() {
            return this.nodeType === Node.COMMENT_NODE ? "<!--".concat(this.nodeValue, "-->") : 0 <= ["BASE", "LINK", "META", "NOSCRIPT", "SCRIPT", "STYLE", "TEMPLATE", "TITLE"].indexOf(this.tagName) ? this.outerHTML : "";
          }).toArray().join("");
          var U = r(H), V = g(H, "html");
          o(e.$el, "".concat(I, `
`).concat(_)), e.node.clearAttributes(e.el), e.$el.attr(D), e.$el.addClass("fr-view"), e.$el.attr("spellcheck", e.opts.spellcheck), e.$el.attr("dir", e.opts.direction), o(e.$head, w), e.node.clearAttributes(e.$head.get(0)), e.$head.attr(R), e.node.clearAttributes(e.$html.get(0)), e.$html.attr(V), e.iframe_document.doctype.parentNode.replaceChild(function(P, j) {
            var Y = P.match(/<!DOCTYPE ?([^ ]*) ?([^ ]*) ?"?([^"]*)"? ?"?([^"]*)"?>/i);
            return Y ? j.implementation.createDocumentType(Y[1], Y[3], Y[4]) : j.implementation.createDocumentType("html");
          }(U, e.iframe_document), e.iframe_document.doctype);
        } else
          o(e.$el, H);
        var F = e.edit.isDisabled();
        e.edit.on(), e.core.injectStyle(e.opts.iframeDefaultStyle + e.opts.iframeStyle), A(), e.opts.useClasses || (e.$el.find("[fr-original-class]").each(function() {
          this.setAttribute("class", this.getAttribute("fr-original-class")), this.removeAttribute("fr-original-class");
        }), e.$el.find("[fr-original-style]").each(function() {
          this.setAttribute("style", this.getAttribute("fr-original-style")), this.removeAttribute("fr-original-style");
        })), F && e.edit.off(), e.events.trigger("html.set"), e.events.trigger("charCounter.update");
      }, syncInputs: n, get: function(y, M) {
        if (!e.$wp)
          return e.$oel.clone().removeClass("fr-view").removeAttr("contenteditable").get(0).outerHTML;
        var O = "";
        e.events.trigger("html.beforeGet");
        var H, _, D = [], w = {}, R = [];
        if (n(), !e.opts.useClasses && !M) {
          var B = new RegExp("^".concat(e.opts.htmlIgnoreCSSProperties.join("$|^"), "$"), "gi");
          for (H = 0; H < e.doc.styleSheets.length; H++) {
            var I = void 0, U = 0;
            try {
              I = e.doc.styleSheets[H].cssRules, e.doc.styleSheets[H].ownerNode && e.doc.styleSheets[H].ownerNode.nodeType === "STYLE" && (U = 1);
            } catch {
            }
            if (I) {
              for (var V = 0, F = I.length; V < F; V++)
                if (I[V].selectorText && 0 < I[V].style.cssText.length) {
                  var G = I[V].selectorText.replace(/body \s tbody \.fr-view /g, "").replace(/::/g, ":"), P = void 0;
                  try {
                    P = e.el.querySelectorAll(G);
                  } catch {
                    P = [];
                  }
                  for (_ = 0; _ < P.length; _++) {
                    !P[_].getAttribute("fr-original-style") && P[_].getAttribute("style") ? (P[_].setAttribute("fr-original-style", P[_].getAttribute("style")), D.push(P[_])) : P[_].getAttribute("fr-original-style") || (P[_].setAttribute("fr-original-style", ""), D.push(P[_])), w[P[_]] || (w[P[_]] = {});
                    for (var j = 1e3 * U + i(I[V].selectorText), Y = I[V].style.cssText.split(";"), e1 = 0; e1 < Y.length; e1++) {
                      var z = Y[e1].trim().split(":")[0];
                      if (z && !z.match(B) && ((!w[P[_]][z] || w[P[_]][z] && P[_].getAttribute("fr-original-style") == "") && (w[P[_]][z] = 0) <= (P[_].getAttribute("fr-original-style") || "").indexOf("".concat(z, ":")) && (w[P[_]][z] = 1e4), j >= w[P[_]][z] && (w[P[_]][z] = j, Y[e1].trim().length))) {
                        var X = Y[e1].trim().split(":");
                        X.splice(0, 1);
                        var Z = X.join(":").trim();
                        -1 < Z.indexOf("!important") && (j += 1), R.push([P[_], z.trim(), Z, j]);
                      }
                    }
                  }
                }
            }
          }
          for (R.sort(s), H = 0; H < R.length; H++) {
            var J = R[H];
            J[0].style[J[1]] = J[2].replace(/!important/, "");
          }
          for (H = 0; H < D.length; H++)
            if (D[H].getAttribute("class") && (D[H].setAttribute("fr-original-class", D[H].getAttribute("class")), D[H].removeAttribute("class")), 0 < (D[H].getAttribute("fr-original-style") || "").trim().length) {
              var t1 = D[H].getAttribute("fr-original-style").split(";");
              for (_ = 0; _ < t1.length; _++)
                if (0 < t1[_].indexOf(":")) {
                  var q = t1[_].split(":"), l1 = q[0];
                  q.splice(0, 1), D[H].style[l1.trim()] = q.join(":").trim();
                }
            }
        }
        if (e.node.isEmpty(e.el))
          e.opts.fullPage && (O = $(e.iframe_document), O += "<html".concat(e.node.attributes(e.$html.get(0)), ">").concat(e.$html.find("head").get(0).outerHTML, "<body></body></html>"));
        else if (y === void 0 && (y = !1), e.opts.fullPage) {
          O = $(e.iframe_document), e.$el.removeClass("fr-view");
          var a1 = e.opts.heightMin, r1 = e.opts.height, n1 = e.opts.heightMax;
          e.opts.heightMin = null, e.opts.height = null, e.opts.heightMax = null, e.size.refresh(), O += "<html".concat(e.node.attributes(e.$html.get(0)), ">").concat(e.$html.html(), "</html>"), e.opts.iframe && e.$html && 0 < e.$html.find(".fr-element").length && (O = e.$html.find(".fr-element").html()), e.opts.heightMin = a1, e.opts.height = r1, e.opts.heightMax = n1, e.size.refresh(), e.$el.addClass("fr-view");
        } else
          O = e.$el.html(), e.opts.iframe && e.$html && 0 < e.$html.find(".fr-element").length && (O = e.$html.find(".fr-element").html());
        if (!e.opts.useClasses && !M)
          for (H = 0; H < D.length; H++)
            D[H].getAttribute("fr-original-class") && (D[H].setAttribute("class", D[H].getAttribute("fr-original-class")), D[H].removeAttribute("fr-original-class")), D[H].getAttribute("fr-original-style") !== null && D[H].getAttribute("fr-original-style") !== void 0 ? (D[H].getAttribute("fr-original-style").length !== 0 ? D[H].setAttribute("style", D[H].getAttribute("fr-original-style")) : D[H].removeAttribute("style"), D[H].removeAttribute("fr-original-style")) : D[H].removeAttribute("style");
        e.opts.fullPage && (O = (O = (O = (O = (O = (O = (O = (O = O.replace(/<style data-fr-style="true">(?:[\w\W]*?)<\/style>/g, "")).replace(/<link([^>]*)data-fr-style="true"([^>]*)>/g, "")).replace(/<style(?:[\w\W]*?)class="firebugResetStyles"(?:[\w\W]*?)>(?:[\w\W]*?)<\/style>/g, "")).replace(/<body((?:[\w\W]*?)) spellcheck="true"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g, "<body$1$2>$3</body>")).replace(/<body((?:[\w\W]*?)) contenteditable="(true|false)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g, "<body$1$3>$4</body>")).replace(/<body((?:[\w\W]*?)) dir="([\w]*)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g, "<body$1$3>$4</body>")).replace(/<body((?:[\w\W]*?))class="([\w\W]*?)(fr-rtl|fr-ltr)([\w\W]*?)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g, '<body$1class="$2$4"$5>$6</body>')).replace(/<body((?:[\w\W]*?)) class=""((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g, "<body$1$2>$3</body>")), e.opts.htmlSimpleAmpersand && (O = O.replace(/&amp;/gi, "&")), e.events.trigger("html.afterGet"), y || (O = O.replace(/<span[^>]*? class\s*=\s*["']?fr-marker["']?[^>]+>\u200b<\/span>/gi, "")), O = e.clean.invisibleSpaces(O), O = e.clean.exec(O, p);
        var y1 = e.events.chainTrigger("html.get", O);
        return typeof y1 == "string" && (O = y1), O = (O = O.replace(/<pre(?:[\w\W]*?)>(?:[\w\W]*?)<\/pre>/g, function(p1) {
          return p1.replace(/<br>/g, `
`);
        })).replace(/<meta((?:[\w\W]*?)) data-fr-http-equiv="/g, '<meta$1 http-equiv="');
      }, getSelected: function() {
        function y(R, B) {
          for (; B && (B.nodeType === Node.TEXT_NODE || !e.node.isBlock(B)) && !e.node.isElement(B) && !e.node.hasClass(B, "fr-inner") && (e.opts.enter !== a.ENTER_BR || B !== e.$el[0]); )
            B && B.nodeType !== Node.TEXT_NODE && t(R).wrapContent(B), B = B.parentNode;
          B && R.innerHTML === B.innerHTML ? R.innerHTML = B.outerHTML : B && B.tagName !== "DIV" && B.innerText && B.innerText.indexOf(R.innerHTML) != -1 && B !== e.$el.get(0) && (R.innerHTML = e.node.openTagString(B) + R.innerHTML + e.node.closeTagString(B));
        }
        var M, O, H = "";
        if (typeof e.win.getSelection < "u") {
          e.browser.mozilla && (e.selection.save(), 1 < e.$el.find('.fr-marker[data-type="false"]').length && (e.$el.find('.fr-marker[data-type="false"][data-id="0"]').remove(), e.$el.find('.fr-marker[data-type="false"]:last').attr("data-id", "0"), e.$el.find(".fr-marker").not('[data-id="0"]').remove()), e.selection.restore());
          for (var _ = e.selection.ranges(), D = 0; D < _.length; D++) {
            var w = document.createElement("div");
            w.appendChild(_[D].cloneContents()), y(w, (O = M = void 0, O = null, e.win.getSelection ? (M = e.win.getSelection()) && M.rangeCount && ((O = M.getRangeAt(0).commonAncestorContainer).nodeType === Node.ELEMENT_NODE || e.opts.enter === a.ENTER_BR && O.parentNode === e.$el[0] || (O = O.parentNode)) : (M = e.doc.selection) && M.type !== "Control" && (O = M.createRange().parentElement()), O !== null && (0 <= t(O).parents().toArray().indexOf(e.el) || O === e.el) ? O : null)), 0 < t(w).find(".fr-element").length && (w = e.el), H += w.innerHTML;
          }
        } else
          typeof e.doc.selection < "u" && e.doc.selection.type === "Text" && (H = e.doc.selection.createRange().htmlText);
        return H;
      }, insert: function(y, M, O) {
        var H;
        if (e.selection.isCollapsed() || e.selection.remove(), H = M ? y : e.clean.html(y), y.indexOf('<i class="fa ') === 0 && (H = "<span>&nbsp;".concat(H, "</span>")), y.indexOf('class="fr-marker"') < 0 && (H = function(R) {
          var B = e.doc.createElement("div");
          return B.innerHTML = R, e.selection.setAtEnd(B, !0), B.innerHTML;
        }(H)), e.node.isEmpty(e.el) && !e.opts.keepFormatOnDelete && C(H))
          e.opts.trackChangesEnabled ? e.track_changes.pasteInEmptyEdior(H) : e.el.innerHTML = H;
        else {
          (function() {
            var R = e.selection.ranges(0).commonAncestorContainer;
            return R !== e.el && !e.$el.contains(R);
          })() && e.selection.restore();
          var _ = e.markers.insert();
          if (_)
            if (e.opts.trackChangesEnabled)
              e.track_changes.pasteInEdior(H);
            else {
              e.node.isLastSibling(_) && t(_).parent().hasClass("fr-deletable") && t(_).insertAfter(t(_).parent());
              var D = e.node.blockParent(_);
              if ((C(H) || O) && (e.node.deepestParent(_) || D && D.tagName === "LI")) {
                if (D && D.tagName === "LI" && (H = function(R) {
                  if (!e.html.defaultTag())
                    return R;
                  var B = e.doc.createElement("div");
                  B.innerHTML = R;
                  for (var I = B.querySelectorAll(":scope > ".concat(e.html.defaultTag())), U = I.length - 1; 0 <= U; U--) {
                    var V = I[U];
                    e.node.isBlock(V.previousSibling) || (V.previousSibling && !e.node.isEmpty(V) && t("<br>").insertAfter(V.previousSibling), V.outerHTML = V.innerHTML);
                  }
                  return B.innerHTML;
                }(H)), !(_ = e.markers.split()))
                  return !1;
                _.outerHTML = H;
              } else
                _.outerHTML = H;
            }
          else
            e.el.innerHTML += H;
        }
        A(), e.keys.positionCaret(), e.events.trigger("html.inserted");
      }, wrap: u, unwrap: function() {
        e.$el.find("div.fr-temp-div").each(function() {
          this.previousSibling && this.previousSibling.nodeType === Node.TEXT_NODE && t(this).before("<br>"), t(this).attr("data-empty") || !this.nextSibling || e.node.isBlock(this.nextSibling) && !t(this.nextSibling).hasClass("fr-temp-div") ? t(this).replaceWith(t(this).html()) : t(this).replaceWith("".concat(t(this).html(), "<br>"));
        }), e.$el.find(".fr-temp-div").removeClass("fr-temp-div").filter(function() {
          return t(this).attr("class") === "";
        }).removeAttr("class");
      }, escapeEntities: function(y) {
        return y.replace(/</gi, "&lt;").replace(/>/gi, "&gt;").replace(/"/gi, "&quot;").replace(/'/gi, "&#39;");
      }, checkIfEmpty: k, extractNode: d, extractNodeAttrs: g, extractDoctype: r, cleanBRs: function() {
        for (var y = e.el.getElementsByTagName("br"), M = 0; M < y.length; M++)
          E(y[M]);
      }, _init: function() {
        e.events.$on(e.$el, "mousemove", "span.fr-word-select", function(y) {
          var M = window.getSelection();
          M = window.getSelection();
          var O = document.createRange();
          O.selectNodeContents(y.target), M.removeAllRanges(), M.addRange(O);
        }), e.$wp && (e.events.on("mouseup", h), e.events.on("keydown", h), e.events.on("contentChanged", k));
      }, _setHtml: o };
    }, a.ENTER_P = 0, a.ENTER_DIV = 1, a.ENTER_BR = 2, a.KEYCODE = { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, ARROW_LEFT: 37, ARROW_UP: 38, ARROW_RIGHT: 39, ARROW_DOWN: 40, DELETE: 46, ZERO: 48, ONE: 49, TWO: 50, THREE: 51, FOUR: 52, FIVE: 53, SIX: 54, SEVEN: 55, EIGHT: 56, NINE: 57, FF_SEMICOLON: 59, FF_EQUALS: 61, QUESTION_MARK: 63, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, META: 91, NUM_ZERO: 96, NUM_ONE: 97, NUM_TWO: 98, NUM_THREE: 99, NUM_FOUR: 100, NUM_FIVE: 101, NUM_SIX: 102, NUM_SEVEN: 103, NUM_EIGHT: 104, NUM_NINE: 105, NUM_MULTIPLY: 106, NUM_PLUS: 107, NUM_MINUS: 109, NUM_PERIOD: 110, NUM_DIVISION: 111, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, FF_HYPHEN: 173, SEMICOLON: 186, DASH: 189, EQUALS: 187, COMMA: 188, HYPHEN: 189, PERIOD: 190, SLASH: 191, APOSTROPHE: 192, TILDE: 192, SINGLE_QUOTE: 222, OPEN_SQUARE_BRACKET: 219, BACKSLASH: 220, CLOSE_SQUARE_BRACKET: 221, IME: 229 }, Object.assign(a.DEFAULTS, { enter: a.ENTER_P, multiLine: !0, tabSpaces: 0 }), a.MODULES.keys = function(e) {
      var t, l, v, c = e.$, N = !1;
      function L(h) {
        if (e.selection.isCollapsed())
          if (["INPUT", "BUTTON", "TEXTAREA"].indexOf(h.target && h.target.tagName) < 0 && e.cursor.backspace(), e.helpers.isIOS()) {
            var S = e.selection.ranges(0);
            S.deleteContents(), S.insertNode(document.createTextNode("​")), e.selection.get().modify("move", "forward", "character");
          } else
            ["INPUT", "BUTTON", "TEXTAREA"].indexOf(h.target && h.target.tagName) < 0 && h.preventDefault(), h.stopPropagation();
        else
          h.preventDefault(), h.stopPropagation(), e.selection.remove();
        e.placeholder.refresh();
      }
      function b(h) {
        ["INPUT", "BUTTON", "TEXTAREA"].indexOf(h.target && h.target.tagName) < 0 && h.preventDefault(), h.stopPropagation(), e.selection.text() !== "" || e.selection.element().hasAttribute("contenteditable") && e.selection.element().getAttribute("contenteditable") === "false" || !e.selection.isCollapsed() && e.selection.element().tagName == "IMG" ? e.selection.remove() : e.cursor.del(), e.placeholder.refresh();
      }
      function f() {
        if (e.browser.mozilla && e.selection.isCollapsed() && !N) {
          var h = e.selection.ranges(0), S = h.startContainer, y = h.startOffset;
          S && S.nodeType === Node.TEXT_NODE && y <= S.textContent.length && 0 < y && S.textContent.charCodeAt(y - 1) === 32 && (e.selection.save(), e.spaces.normalize(), e.selection.restore());
        }
      }
      function u() {
        e.selection.isFull() && setTimeout(function() {
          var h = e.html.defaultTag();
          h ? e.$el.html("<".concat(h, ">").concat(a.MARKERS, "<br/></").concat(h, ">")) : e.$el.html("".concat(a.MARKERS, "<br/>")), e.selection.restore(), e.placeholder.refresh(), e.button.bulkRefresh(), e.undo.saveStep();
        }, 0);
      }
      function T() {
        N = !1;
      }
      function x() {
        N = !1;
      }
      function $() {
        var h = e.html.defaultTag();
        h ? e.$el.html("<".concat(h, ">").concat(a.MARKERS, "<br/></").concat(h, ">")) : e.$el.html("".concat(a.MARKERS, "<br/>")), e.selection.restore();
      }
      function E(h, S) {
        var y = (h && h.parentElement).parentElement;
        if (h.parentElement && (-1 < h.innerHTML.indexOf("<span") || -1 < h.parentElement.innerHTML.indexOf("<span") || y && -1 < h.parentElement.parentElement.innerHTML.indexOf("<span")) && (h.classList.contains("fr-img-space-wrap") || h.parentElement.classList.contains("fr-img-space-wrap") || y && h.parentElement.parentElement.classList.contains("fr-img-space-wrap"))) {
          if (c(h.parentElement).is("p")) {
            var M = h.parentElement.innerHTML;
            return (M = M.replace(/<br>/g, "")).length < 1 ? h.parentElement.insertAdjacentHTML("afterbegin", "&nbsp;") : M != "&nbsp;" && M != " " && S.key == "Backspace" ? L(S) : M != "&nbsp;" && M != " " && S.key == "Delete" && b(S), !0;
          }
          if (c(h).is("p")) {
            var O = h.innerHTML.replace(/<br>/g, "");
            return O.length < 1 ? h.insertAdjacentHTML("afterbegin", "&nbsp;") : O != "&nbsp;" && O != " " && S.key == "Backspace" ? L(S) : O != "&nbsp;" && O != " " && S.key == "Delete" && b(S), !0;
          }
        }
        return !1;
      }
      function A(h) {
        var S = e.selection.element();
        if (S && 0 <= ["INPUT", "TEXTAREA"].indexOf(S.tagName))
          return !0;
        if (h && o(h.which)) {
          var y = e.selection.element(), M = e.selection.get(), O = M.anchorNode, H = M.anchorOffset;
          if (O.nodeType === Node.TEXT_NODE && 0 < H && 1 < O.textContent.length && O.textContent.charCodeAt(H) === 8203) {
            k(y);
            var _ = e.doc.createRange();
            e.selection.get().removeAllRanges(), _.setStart(O, H - 1), _.setEnd(O, H - 1), e.selection.get().addRange(_);
          }
          return !0;
        }
        e.events.disableBlur();
        var D = h.which;
        if (D === 16)
          return !0;
        if ((t = D) === a.KEYCODE.IME)
          return N = !0;
        if (N = !1, r(h))
          return !0;
        var w = i(D) && !r(h) && !h.altKey, R = D === a.KEYCODE.BACKSPACE || D === a.KEYCODE.DELETE;
        if ((e.selection.isFull() && !e.opts.keepFormatOnDelete && !e.placeholder.isVisible() || R && e.placeholder.isVisible() && e.opts.keepFormatOnDelete) && (w || R) && ($(), !i(D)))
          return h.preventDefault(), !0;
        if (D === a.KEYCODE.ENTER)
          !e.helpers.isIOS() && h.shiftKey || S.classList.contains("fr-inner") || S.parentElement.classList.contains("fr-inner") ? function(I) {
            I.preventDefault(), I.stopPropagation(), e.opts.multiLine && (e.selection.isCollapsed() || e.selection.remove(), e.cursor.enter(!0));
          }(h) : function(I) {
            e.opts.multiLine ? (e.helpers.isIOS() || (I.preventDefault(), I.stopPropagation()), e.selection.isCollapsed() || e.selection.remove(), e.cursor.enter()) : (I.preventDefault(), I.stopPropagation());
          }(h);
        else if (D === a.KEYCODE.BACKSPACE && (h.metaKey || h.ctrlKey))
          (function() {
            setTimeout(function() {
              e.events.disableBlur(), e.events.focus();
            }, 0);
          })();
        else if (D !== a.KEYCODE.BACKSPACE || r(h) || h.altKey)
          if (D !== a.KEYCODE.DELETE || r(h) || h.altKey || h.shiftKey)
            D === a.KEYCODE.SPACE ? function(I) {
              var U = e.selection.element();
              if (!e.helpers.isMobile() && U && U.tagName === "A") {
                I.preventDefault(), I.stopPropagation(), e.selection.isCollapsed() || e.selection.remove();
                var V = e.markers.insert();
                if (V) {
                  var F = V.previousSibling;
                  !V.nextSibling && V.parentNode && V.parentNode.tagName === "A" ? (V.parentNode.insertAdjacentHTML("afterend", "&nbsp;".concat(a.MARKERS)), V.parentNode.removeChild(V)) : (F && F.nodeType === Node.TEXT_NODE && F.textContent.length === 1 && F.textContent.charCodeAt(0) === 160 ? F.textContent += " " : V.insertAdjacentHTML("beforebegin", "&nbsp;"), V.outerHTML = a.MARKERS), e.selection.restore();
                }
              }
            }(h) : D === a.KEYCODE.TAB ? function(I) {
              if (0 < e.opts.tabSpaces)
                if (e.selection.isCollapsed()) {
                  e.undo.saveStep(), I.preventDefault(), I.stopPropagation();
                  for (var U = "", V = 0; V < e.opts.tabSpaces; V++)
                    U += "&nbsp;";
                  e.html.insert(U), e.placeholder.refresh(), e.undo.saveStep();
                } else
                  I.preventDefault(), I.stopPropagation(), I.shiftKey ? e.commands.outdent() : e.commands.indent();
            }(h) : r(h) || !i(h.which) || e.selection.isCollapsed() || h.ctrlKey || h.altKey || e.browser.mozilla || e.selection.remove();
          else {
            if (E(S, h))
              return h.preventDefault(), void h.stopPropagation();
            e.placeholder.isVisible() ? (e.opts.keepFormatOnDelete || $(), h.preventDefault(), h.stopPropagation()) : b(h);
          }
        else {
          if (E(S, h))
            return h.preventDefault(), void h.stopPropagation();
          e.placeholder.isVisible() ? (e.opts.keepFormatOnDelete || $(), h.preventDefault(), h.stopPropagation()) : L(h);
        }
        e.events.enableBlur();
      }
      function k(h) {
        var S = h;
        -1 < ["STRONG", "U", "EM"].indexOf(h.nodeName) && h.parentNode && (S = h.parentNode);
        for (var y = e.doc.createTreeWalker(S, NodeFilter.SHOW_TEXT, e.node.filter(function(O) {
          return /\u200B/gi.test(O.textContent);
        }), !1); y.nextNode(); ) {
          var M = y.currentNode;
          M.textContent = M.textContent.replace(/\u200B/gi, "");
        }
      }
      function d() {
        if (!e.$wp)
          return !0;
        var h;
        if (e.opts.height || e.opts.heightMax) {
          h = e.position.getBoundingRect().top, (e.helpers.isIOS() || e.helpers.isAndroid()) && (h -= e.helpers.scrollTop()), e.opts.iframe && (h += e.$iframe.offset().top);
          var S = e.selection.blocks(), y = null;
          if (S && 0 < S.length && S[0].offsetTop && (y = S[0].getBoundingClientRect().top, e.selection.get().anchorNode.nodeType === 3)) {
            var M = e.doc.createRange(), O = e.selection.get().anchorNode, H = e.selection.get().anchorOffset;
            M.selectNode(O), M.setStart(O, H), y = M.getBoundingClientRect().top;
          }
          !e.opts.iframe && h > e.$wp.offset().top - e.helpers.scrollTop() + e.$wp.height() - 20 ? e.$wp.scrollTop(h + e.$wp.scrollTop() - (e.$wp.height() + e.$wp.offset().top) + e.helpers.scrollTop() + 20) : e.opts.iframe && y && (e.$wp.scrollTop() > y ? e.$wp.scrollTop(y - 20) : y > e.$wp.scrollTop() + e.$wp.height() && e.$wp.scrollTop(y));
        } else
          h = e.position.getBoundingRect().top, e.opts.toolbarBottom && (h += e.opts.toolbarStickyOffset), (e.helpers.isIOS() || e.helpers.isAndroid()) && (h -= e.helpers.scrollTop()), e.opts.iframe && (h += e.$iframe.offset().top, h -= e.helpers.scrollTop()), (h += e.opts.toolbarStickyOffset) > e.o_win.innerHeight - 20 && c(e.o_win).scrollTop(h + e.helpers.scrollTop() - e.o_win.innerHeight + 20), h = e.position.getBoundingRect().top, e.opts.toolbarBottom || (h -= e.opts.toolbarStickyOffset), (e.helpers.isIOS() || e.helpers.isAndroid()) && (h -= e.helpers.scrollTop()), e.opts.iframe && (h += e.$iframe.offset().top, h -= e.helpers.scrollTop()), h < 100 && c(e.o_win).scrollTop(h + e.helpers.scrollTop() - 100);
      }
      function g(h) {
        var S = e.selection.element();
        if (S && 0 <= ["INPUT", "TEXTAREA"].indexOf(S.tagName) || (h && h.which === 0 && t && (h.which = t), e.helpers.isAndroid() && e.browser.mozilla))
          return !0;
        if (N)
          return !1;
        if (h && e.helpers.isIOS() && h.which === a.KEYCODE.ENTER && e.doc.execCommand("undo"), !e.selection.isCollapsed() || h && (h.which === a.KEYCODE.META || h.which === a.KEYCODE.CTRL) || h && o(h.which))
          return !0;
        if (h && !e.helpers.isIOS() && (h.which === a.KEYCODE.ENTER || h.which === a.KEYCODE.BACKSPACE || 37 <= h.which && h.which <= 40 && !e.browser.msie))
          try {
            d();
          } catch {
          }
        var y = e.selection.element();
        if (function(_) {
          if (!_)
            return !1;
          var D = _.innerHTML;
          return !!((D = D.replace(/<span[^>]*? class\s*=\s*["']?fr-marker["']?[^>]+>\u200b<\/span>/gi, "")) && /\u200B/.test(D) && 0 < D.replace(/\u200B/gi, "").length);
        }(y) && !e.node.hasClass(y, "fr-marker") && y.tagName !== "IFRAME" && function(_) {
          return !e.helpers.isIOS() || ((_.textContent || "").match(/[\u3041-\u3096\u30A0-\u30FF\u4E00-\u9FFF\u3130-\u318F\uAC00-\uD7AF]/gi) || []).length === 0;
        }(y)) {
          e.selection.save();
          var M = e.$el.find(".fr-marker")[1], O = (h || "").which;
          e.opts.enter === a.ENTER_BR && y === e.$el.get(0) && O === 8 && M.nextSibling == null || k(y), e.selection.restore();
        }
      }
      function r(h) {
        if (navigator.userAgent.indexOf("Mac OS X") !== -1) {
          if (h.metaKey && !h.altKey)
            return !0;
        } else if (h.ctrlKey && !h.altKey)
          return !0;
        return !1;
      }
      function o(h) {
        if (h >= a.KEYCODE.ARROW_LEFT && h <= a.KEYCODE.ARROW_DOWN)
          return !0;
      }
      function i(h) {
        if (h >= a.KEYCODE.ZERO && h <= a.KEYCODE.NINE || h >= a.KEYCODE.NUM_ZERO && h <= a.KEYCODE.NUM_MULTIPLY || h >= a.KEYCODE.A && h <= a.KEYCODE.Z || e.browser.webkit && h === 0)
          return !0;
        switch (h) {
          case a.KEYCODE.SPACE:
          case a.KEYCODE.QUESTION_MARK:
          case a.KEYCODE.NUM_PLUS:
          case a.KEYCODE.NUM_MINUS:
          case a.KEYCODE.NUM_PERIOD:
          case a.KEYCODE.NUM_DIVISION:
          case a.KEYCODE.SEMICOLON:
          case a.KEYCODE.FF_SEMICOLON:
          case a.KEYCODE.DASH:
          case a.KEYCODE.EQUALS:
          case a.KEYCODE.FF_EQUALS:
          case a.KEYCODE.COMMA:
          case a.KEYCODE.PERIOD:
          case a.KEYCODE.SLASH:
          case a.KEYCODE.APOSTROPHE:
          case a.KEYCODE.SINGLE_QUOTE:
          case a.KEYCODE.OPEN_SQUARE_BRACKET:
          case a.KEYCODE.BACKSLASH:
          case a.KEYCODE.CLOSE_SQUARE_BRACKET:
            return !0;
          default:
            return !1;
        }
      }
      function p(h) {
        var S = h.which;
        if (r(h) || 37 <= S && S <= 40 || !i(S) && S !== a.KEYCODE.DELETE && S !== a.KEYCODE.BACKSPACE && S !== a.KEYCODE.ENTER && S !== a.KEYCODE.IME)
          return !0;
        l || (v = e.snapshot.get(), e.undo.canDo() || e.undo.saveStep()), clearTimeout(l), l = setTimeout(function() {
          l = null, e.undo.saveStep();
        }, Math.max(250, e.opts.typingTimer));
      }
      function s(h) {
        var S = h.which;
        if (r(h) || 37 <= S && S <= 40)
          return !0;
        v && l ? (e.undo.saveStep(v), v = null) : S !== void 0 && S !== 0 || v || l || e.undo.saveStep();
      }
      function n(h) {
        if (h && h.tagName === "BR")
          return !1;
        try {
          return (h.textContent || "").length === 0 && h.querySelector && !h.querySelector(":scope > br") || h.childNodes && h.childNodes.length === 1 && h.childNodes[0].getAttribute && (h.childNodes[0].getAttribute("contenteditable") === "false" || e.node.hasClass(h.childNodes[0], "fr-img-caption"));
        } catch {
          return !1;
        }
      }
      function C(h) {
        var S = e.el.childNodes, y = e.html.defaultTag(), M = e.node.blockParent(e.selection.blocks()[0]);
        return M && M.tagName == "TR" && M.getAttribute("contenteditable") == null && (M = M.closest("table")), !e.node.isEditable(h.target) || M && M.getAttribute("contenteditable") === "false" ? e.toolbar.disable() : e.toolbar.enable(), !(!h.target || h.target === e.el) || S.length === 0 || void (S[0].offsetHeight + S[0].offsetTop <= h.offsetY ? n(S[S.length - 1]) && (y ? e.$el.append("<".concat(y, ">").concat(a.MARKERS, "<br></").concat(y, ">")) : e.$el.append("".concat(a.MARKERS, "<br>")), e.selection.restore(), d()) : h.offsetY <= 10 && n(S[0]) && (y ? e.$el.prepend("<".concat(y, ">").concat(a.MARKERS, "<br></").concat(y, ">")) : e.$el.prepend("".concat(a.MARKERS, "<br>")), e.selection.restore(), d()));
      }
      function m() {
        l && clearTimeout(l);
      }
      return { _init: function() {
        e.events.on("keydown", p), e.events.on("input", f), e.events.on("mousedown", x), e.events.on("keyup input", s), e.events.on("keypress", T), e.events.on("keydown", A), e.events.on("keyup", g), e.events.on("destroy", m), e.events.on("html.inserted", g), e.events.on("cut", u), e.opts.multiLine && e.events.on("click", C), e.events.on("initialized", function() {
          e.el.addEventListener("compositionstart", function() {
            if (e.selection.isCollapsed()) {
              var S = e.selection.ranges(0), y = S.startContainer, M = S.startOffset;
              if (y && y.nodeType === Node.TEXT_NODE && M <= y.textContent.length && 0 < M && y.textContent.charCodeAt(M - 1) === 8203) {
                e.selection.save();
                var O = e.$el.find(".fr-marker");
                c(O.get(0).previousSibling).before(a.HAIR_SPACE), O.get(0).previousSibling.textContent = O.get(0).previousSibling.textContent.replace(/\u200B/gi, ""), e.selection.restore();
              }
            }
          }), e.el.addEventListener("compositionend", function() {
            if (e.selection.isCollapsed()) {
              var S = e.selection.ranges(0), y = S.startContainer, M = S.startOffset;
              if (y && y.nodeType === Node.TEXT_NODE && M <= y.textContent.length && 0 < M && y.textContent.charCodeAt(0) === 8202) {
                e.selection.save();
                var O = e.$el.find(".fr-marker");
                O.get(0).previousSibling.textContent = O.get(0).previousSibling.textContent.replace(/\u200A/gi, ""), e.selection.restore();
              }
            }
          });
        });
      }, ctrlKey: r, isCharacter: i, isArrow: o, forceUndo: function() {
        l && (clearTimeout(l), e.undo.saveStep(), v = null);
      }, isIME: function() {
        return N;
      }, isBrowserAction: function(S) {
        var y = S.which;
        return r(S) || y === a.KEYCODE.F5;
      }, positionCaret: d };
    }, Object.assign(a.DEFAULTS, { pastePlain: !1, pasteDeniedTags: ["colgroup", "col", "meta"], pasteDeniedAttrs: ["class", "id"], pasteAllowedStyleProps: [".*"], pasteAllowLocalImages: !1 }), a.MODULES.paste = function(e) {
      var t, l, v, c, N, L, b = e.$;
      function f(n, C) {
        try {
          e.win.localStorage.setItem("fr-copied-html", n), e.win.localStorage.setItem("fr-copied-text", C);
        } catch {
        }
      }
      function u(n) {
        var C = e.html.getSelected();
        f(C, b(e.doc.createElement("div")).html(C).text()), n.type === "cut" && (e.undo.saveStep(), setTimeout(function() {
          e.selection.save(), e.html.wrap(), e.selection.restore(), e.events.focus(), e.undo.saveStep();
        }, 0));
      }
      var T, x = !1;
      function $(n) {
        if ((T = n).target.nodeName === "INPUT" && n.target.type === "text")
          return !0;
        if (e.edit.isDisabled() || E(n.target) || x || (n.originalEvent && (n = n.originalEvent), n && n.clipboardData && n.clipboardData.getData && ((n.clipboardData || window.clipboardData).getData("text/html") || "").match('content="Microsoft OneNote')))
          return !1;
        if (e.events.trigger("paste.before", [n]) === !1)
          return n.preventDefault(), !1;
        if (n && n.clipboardData && n.clipboardData.getData) {
          var C = "";
          if (c = n.clipboardData.types, e.helpers.isArray(c))
            for (var m = 0; m < c.length; m++)
              C += "".concat(c[m], ";");
          else
            C = c;
          if (t = "", /text\/rtf/.test(C) && (l = n.clipboardData.getData("text/rtf")), /text\/html/.test(C) ? (t = n.clipboardData.getData("text/html"), e.browser.mozilla && (t === "<p></p>" || t === "" || /<!--StartFragment-->([ ])<!--EndFragment-->/.test(t) || /<!--StartFragment-->([<p></p>]*)<!--EndFragment-->/.test(t)) && (t = e.win.localStorage.getItem("fr-copied-html"))) : /text\/uri-list/.test(C) && e.browser.safari ? t = n.clipboardData.getData("text/uri-list") : /text\/rtf/.test(C) && e.browser.safari ? t = l : /public.rtf/.test(C) && e.browser.safari && (t = n.clipboardData.getData("text/rtf")), v = n.clipboardData.getData("text"), t !== "")
            return g(), n.preventDefault && (n.stopPropagation(), n.preventDefault()), !1;
          t = null;
        }
        return function() {
          if (e.selection.save(), e.events.disableBlur(), t = null, N) {
            N.html("");
            var S = k(e.selection.get().anchorNode) + e.$wp.offset().top;
            N.css("top", S), e.browser.edge && e.opts.iframe && e.$el.append(N);
          } else {
            var y = document.getElementsByTagName("BODY")[0], M = window.getComputedStyle(y).transform;
            if (M !== "none") {
              var O = k(e.selection.get().anchorNode) + e.$wp.offset().top;
              N = b('<div contenteditable="true" style="position: fixed; top: ' + O + 'px; left: -9999px; height: 100%; width: 0; word-break: break-all; overflow:hidden; z-index: 2147483647; line-height: 140%; -moz-user-select: text; -webkit-user-select: text; -ms-user-select: text; user-select: text;" tabIndex="-1"></div>');
            } else
              N = b('<div contenteditable="true" style="position: fixed; top: 0; left: -9999px; height: 100%; width: 0; word-break: break-all; overflow:hidden; z-index: 2147483647; line-height: 140%; -moz-user-select: text; -webkit-user-select: text; -ms-user-select: text; user-select: text;" tabIndex="-1"></div>');
            e.browser.webkit || e.browser.mozilla ? (M === "none" && N.css("top", e.$sc.scrollTop()), e.$el.after(N)) : e.browser.edge && e.opts.iframe ? e.$el.append(N) : e.$box.after(N), e.events.on("destroy", function() {
              N.remove();
            });
          }
          var H;
          e.helpers.isIOS() && e.$sc && (H = e.$sc.scrollTop()), e.opts.iframe && e.$el.attr("contenteditable", "false"), e.helpers.isIOS() && e.$sc && e.$sc.scrollTop(H);
          var _ = T.clipboardData.getData("Text");
          4e5 < _.length ? (T.preventDefault(), _ = d(_), N.get(0).innerHTML = _, setTimeout(function() {
            e.win.setTimeout(g, 1);
          }, 0)) : (N.focus(), e.win.setTimeout(g, 1));
        }(), !1;
      }
      function E(n) {
        return n && n.contentEditable === "false";
      }
      function A(n) {
        if (n.originalEvent && (n = n.originalEvent), E(n.target))
          return !1;
        if (n && n.dataTransfer && n.dataTransfer.getData) {
          var C = "";
          if (c = n.dataTransfer.types, e.helpers.isArray(c))
            for (var m = 0; m < c.length; m++)
              C += "".concat(c[m], ";");
          else
            C = c;
          if (t = "", /text\/rtf/.test(C) && (l = n.dataTransfer.getData("text/rtf")), /text\/html/.test(C) ? t = n.dataTransfer.getData("text/html") : /text\/rtf/.test(C) && e.browser.safari ? t = l : /text\/plain/.test(C) && !this.browser.mozilla && (t = e.html.escapeEntities(n.dataTransfer.getData("text/plain")).replace(/\n/g, "<br>")), t !== "") {
            e.keys.forceUndo(), L = e.snapshot.get(), e.selection.save(), e.$el.find(".fr-marker").removeClass("fr-marker").addClass("fr-marker-helper");
            var h = e.markers.insertAtPoint(n);
            if (e.$el.find(".fr-marker").removeClass("fr-marker").addClass("fr-marker-placeholder"), e.$el.find(".fr-marker-helper").addClass("fr-marker").removeClass("fr-marker-helper"), e.selection.restore(), e.selection.remove(), e.$el.find(".fr-marker-placeholder").addClass("fr-marker").removeClass("fr-marker-placeholder"), h !== !1) {
              var S = e.el.querySelector(".fr-marker");
              return b(S).replaceWith(a.MARKERS), e.selection.restore(), g(), n.preventDefault && (n.stopPropagation(), n.preventDefault()), !1;
            }
          } else
            t = null;
        }
      }
      function k(n) {
        return n.nodeType === Node.TEXT_NODE ? n.parentNode.offsetTop : n.offsetTop;
      }
      function d(n) {
        var C = e.html.defaultTag() || "p", m = "</".concat(C, "><").concat(C, ">");
        return e.opts.enter === a.ENTER_BR ? m = "<br />" : n = "<".concat(C, ">") + n, n.replace(/\n{2,}/g, m);
      }
      function g() {
        e.opts.iframe && e.$el.attr("contenteditable", "true"), e.browser.edge && e.opts.iframe && e.$box.after(N), L || (e.keys.forceUndo(), L = e.snapshot.get()), t || (t = N.get(0).innerHTML, v = N.text(), e.$el[0].setAttribute("plainpaste", !0), e.selection.restore(), e.events.enableBlur());
        var n = t.match(/(class="?Mso|class='?Mso|class="?Xl|class='?Xl|class=Xl|style="[^"]*\bmso-|style='[^']*\bmso-|w:WordDocument|LibreOffice)/gi), C = e.events.chainTrigger("paste.beforeCleanup", t);
        if (C && typeof C == "string") {
          t = C;
          var m = new DOMParser().parseFromString(C, "text/html");
          v = m.body.innerText;
        }
        (!n || n && e.events.trigger("paste.wordPaste", [t]) !== !1) && o(t, n);
      }
      function r(n) {
        for (var C = "", m = 0; m++ < n; )
          C += "&nbsp;";
        return C;
      }
      function o(n, C, m) {
        var h, S = null, y = null;
        if (0 <= n.toLowerCase().indexOf("<body")) {
          var M = "";
          0 <= n.indexOf("<style") && (M = n.replace(/[.\s\S\w\W<>]*(<style[^>]*>[\s]*[.\s\S\w\W<>]*[\s]*<\/style>)[.\s\S\w\W<>]*/gi, "$1")), n = (n = (n = M + n.replace(/[.\s\S\w\W<>]*<body[^>]*>[\s]*([.\s\S\w\W<>]*)[\s]*<\/body>[.\s\S\w\W<>]*/gi, "$1")).replace(/<pre(?:[\w\W]*?)>(?:[\w\W]*?)<\/pre>/g, function(e1) {
            return e1.replace(/\n/g, "<br />");
          })).replace(/ \n/g, " ").replace(/\n /g, " ").replace(/([^>])\n([^<])/g, "$1 $2");
        }
        var O = !1;
        0 <= n.indexOf('id="docs-internal-guid') && (n = n.replace(/^[\w\W\s\S]* id="docs-internal-guid[^>]*>([\w\W\s\S]*)<\/b>[\w\W\s\S]*$/g, "$1"), O = !0), (0 <= n.indexOf('content="Sheets"') || 0 <= n.indexOf("google-sheets-html-origin")) && (n = n.replace(/width:0px;/g, ""));
        var H = !1;
        if (!C)
          if ((H = function() {
            var z = null;
            try {
              z = e.win.localStorage.getItem("fr-copied-text");
            } catch {
            }
            return !(!z || !v || c && c.indexOf("text/html") === -1 || v.replace(/\u00A0/gi, " ").replace(/\r|\n/gi, "") !== z.replace(/\u00A0/gi, " ").replace(/\r|\n/gi, "") && v.replace(/\s/g, "") !== z.replace(/\s/g, ""));
          }()) && (n = e.win.localStorage.getItem("fr-copied-html")), H)
            n = e.clean.html(n, e.opts.pasteDeniedTags, e.opts.pasteDeniedAttrs);
          else {
            var _ = e.opts.htmlAllowedStyleProps;
            e.opts.htmlAllowedStyleProps = e.opts.pasteAllowedStyleProps, e.opts.htmlAllowComments = !1, n = (n = (n = n.replace(/<span class="Apple-tab-span">\s*<\/span>/g, r(e.opts.tabSpaces || 4))).replace(/<span class="Apple-tab-span" style="white-space:pre">(\t*)<\/span>/g, function(e1, z) {
              return r(z.length * (e.opts.tabSpaces || 4));
            })).replace(/\t/g, r(e.opts.tabSpaces || 4)), n = e.clean.html(n, e.opts.pasteDeniedTags, e.opts.pasteDeniedAttrs), e.opts.htmlAllowedStyleProps = _, e.opts.htmlAllowComments = !0, e.html.defaultTag() && e.html.defaultTag() === "div" || (n = p(n)), n = (n = n.replace(/\r/g, "")).replace(/^ */g, "").replace(/ *$/g, "");
          }
        !C || e.wordPaste && m || ((n = n.replace(/^\n*/g, "").replace(/^ /g, "")).indexOf("<colgroup>") === 0 && (n = "<table>".concat(n, "</table>")), n = p(n = function(z) {
          var X;
          z = (z = (z = (z = (z = (z = (z = (z = (z = (z = (z = (z = (z = (z = (z = z.replace(/<p(.*?)class="?'?MsoListParagraph"?'? ([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<ul><li>$3</li></ul>")).replace(/<p(.*?)class="?'?NumberedText"?'? ([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<ol><li>$3</li></ol>")).replace(/<p(.*?)class="?'?MsoListParagraphCxSpFirst"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<ul><li$3>$5</li>")).replace(/<p(.*?)class="?'?NumberedTextCxSpFirst"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<ol><li$3>$5</li>")).replace(/<p(.*?)class="?'?MsoListParagraphCxSpMiddle"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<li$3>$5</li>")).replace(/<p(.*?)class="?'?NumberedTextCxSpMiddle"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<li$3>$5</li>")).replace(/<p(.*?)class="?'?MsoListBullet"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<li$3>$5</li>")).replace(/<p(.*?)class="?'?MsoListParagraphCxSpLast"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<li$3>$5</li></ul>")).replace(/<p(.*?)class="?'?NumberedTextCxSpLast"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi, "<li$3>$5</li></ol>")).replace(/<span([^<]*?)style="?'?mso-list:Ignore"?'?([\s\S]*?)>([\s\S]*?)<span/gi, "<span><span")).replace(/<!--\[if !supportLists\]-->([\s\S]*?)<!--\[endif\]-->/gi, "")).replace(/<!\[if !supportLists\]>([\s\S]*?)<!\[endif\]>/gi, "")).replace(/(\n|\r| class=(")?Mso[a-zA-Z0-9]+(")?)/gi, " ")).replace(/<!--[\s\S]*?-->/gi, "")).replace(/<(\/)*(meta|link|span|\\?xml:|st1:|o:|font)(.*?)>/gi, "");
          var Z, J = ["style", "script", "applet", "embed", "noframes", "noscript"];
          for (X = 0; X < J.length; X++) {
            var t1 = new RegExp("<".concat(J[X], ".*?").concat(J[X], "(.*?)>"), "gi");
            z = z.replace(t1, "");
          }
          for (z = (z = (z = z.replace(/&nbsp;/gi, " ")).replace(/<td([^>]*)><\/td>/g, "<td$1><br></td>")).replace(/<th([^>]*)><\/th>/g, "<th$1><br></th>"); (z = (Z = z).replace(/<[^/>][^>]*><\/[^>]+>/gi, "")) !== Z; )
            ;
          z = (z = z.replace(/<lilevel([^1])([^>]*)>/gi, '<li data-indent="true"$2>')).replace(/<lilevel1([^>]*)>/gi, "<li$1>"), z = (z = (z = e.clean.html(z, e.opts.pasteDeniedTags, e.opts.pasteDeniedAttrs)).replace(/<a>(.[^<]+)<\/a>/gi, "$1")).replace(/<br> */g, "<br>");
          var q = e.o_doc.createElement("div");
          q.innerHTML = z;
          var l1 = q.querySelectorAll("li[data-indent]");
          for (X = 0; X < l1.length; X++) {
            var a1 = l1[X], r1 = a1.previousElementSibling;
            if (r1 && r1.tagName === "LI") {
              var n1 = r1.querySelector(":scope > ul, :scope > ol");
              n1 || (n1 = document.createElement("ul"), r1.appendChild(n1)), n1.appendChild(a1);
            } else
              a1.removeAttribute("data-indent");
          }
          return e.html.cleanBlankSpaces(q), z = q.innerHTML;
        }(n))), e.opts.pastePlain && (n = function(z) {
          var X, Z = null, J = e.doc.createElement("div");
          J.innerHTML = z;
          var t1 = J.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, pre, blockquote");
          for (X = 0; X < t1.length; X++)
            if ((Z = t1[X]).innerText) {
              var q = e.clean.html("<".concat(e.html.defaultTag() || "DIV", ">").concat(Z.innerText, "</").concat(e.html.defaultTag() || "DIV", ">"));
              Z.outerHTML = q;
            }
          for (X = (t1 = J.querySelectorAll("*:not(".concat("p, div, h1, h2, h3, h4, h5, h6, pre, blockquote, ul, ol, li, table, tbody, thead, tr, td, br, img".split(",").join("):not("), ")"))).length - 1; 0 <= X; X--)
            (Z = t1[X]).outerHTML = Z.innerHTML;
          return function l1(a1) {
            for (var r1 = e.node.contents(a1), n1 = 0; n1 < r1.length; n1++)
              r1[n1].nodeType !== Node.TEXT_NODE && r1[n1].nodeType !== Node.ELEMENT_NODE ? r1[n1].parentNode.removeChild(r1[n1]) : l1(r1[n1]);
          }(J), J.innerHTML;
        }(n));
        var D = e.events.chainTrigger("paste.afterCleanup", n);
        if (e.$el[0].removeAttribute("plainpaste", !0), typeof D == "string" && (n = D), n !== "") {
          var w = e.o_doc.createElement("div");
          0 <= (w.innerHTML = n).indexOf("<body>") ? (e.html.cleanBlankSpaces(w), e.spaces.normalize(w, !0)) : e.spaces.normalize(w);
          var R = w.getElementsByTagName("span");
          for (h = R.length - 1; 0 <= h; h--) {
            var B = R[h];
            B.attributes.length === 0 && (B.outerHTML = B.innerHTML);
          }
          if (e.opts.linkAlwaysBlank === !0) {
            var I = w.getElementsByTagName("a");
            for (h = I.length - 1; 0 <= h; h--) {
              var U = I[h];
              U.getAttribute("target") || U.setAttribute("target", "_blank");
            }
          }
          var V = e.selection.element(), F = !1;
          if (V && b(V).parentsUntil(e.el, "ul, ol").length && (F = !0), F) {
            var G = w.children;
            G.length === 1 && 0 <= ["OL", "UL"].indexOf(G[0].tagName) && (G[0].outerHTML = G[0].innerHTML);
          }
          if (!O) {
            var P = w.getElementsByTagName("br");
            for (h = P.length - 1; 0 <= h; h--) {
              var j = P[h];
              e.node.isBlock(j.previousSibling) && j.parentNode.removeChild(j);
            }
          }
          if (e.opts.enter === a.ENTER_BR)
            for (h = (S = w.querySelectorAll("p, div")).length - 1; 0 <= h; h--)
              (y = S[h]).attributes.length === 0 && (y.outerHTML = y.innerHTML + (y.nextSibling && !e.node.isEmpty(y) ? "<br>" : ""));
          else if (e.opts.enter === a.ENTER_DIV)
            for (h = (S = w.getElementsByTagName("p")).length - 1; 0 <= h; h--)
              (y = S[h]).attributes.length === 0 && (y.outerHTML = "<div>".concat(y.innerHTML, "</div>"));
          else
            e.opts.enter === a.ENTER_P && w.childNodes.length === 1 && w.childNodes[0].tagName === "P" && w.childNodes[0].attributes.length === 0 && (w.childNodes[0].outerHTML = w.childNodes[0].innerHTML);
          if (w.childNodes[0] instanceof HTMLHeadingElement && e.selection.element().tagName === w.childNodes[0].tagName && (w.childNodes[0].outerHTML = w.childNodes[0].innerHTML), w.children && 0 < w.children.length)
            if (e.opts.trackChangesEnabled)
              for (var Y = 0; Y < w.children.length; Y++)
                w.children[Y].setAttribute("id", "isPasted");
            else
              w.children[0].setAttribute("id", "isPasted");
          n = (n = w.innerHTML).replace(/\n/g, ""), H && (n = function(z) {
            var X, Z = e.o_doc.createElement("div");
            Z.innerHTML = z;
            for (var J = Z.querySelectorAll("*:empty:not(td):not(th):not(tr):not(iframe):not(svg):not(".concat(a.VOID_ELEMENTS.join("):not("), "):not(").concat(e.opts.htmlAllowedEmptyTags.join("):not("), ")")); J.length; ) {
              for (X = 0; X < J.length; X++)
                J[X].parentNode.removeChild(J[X]);
              J = Z.querySelectorAll("*:empty:not(td):not(th):not(tr):not(iframe):not(svg):not(".concat(a.VOID_ELEMENTS.join("):not("), "):not(").concat(e.opts.htmlAllowedEmptyTags.join("):not("), ")"));
            }
            return Z.innerHTML;
          }(n)), e.html.insert(n, !0);
        }
        (function() {
          e.events.trigger("paste.after");
        })(), e.undo.saveStep(L), L = null, e.undo.saveStep();
      }
      function i(n) {
        for (var C = n.length - 1; 0 <= C; C--)
          n[C].attributes && n[C].attributes.length && n.splice(C, 1);
        return n;
      }
      function p(n) {
        var C, m = e.o_doc.createElement("div");
        m.innerHTML = n;
        for (var h = i(Array.prototype.slice.call(m.querySelectorAll(":scope > div:not([style]), td > div:not([style]), th > div:not([style]), li > div:not([style])"))); h.length; ) {
          var S = h[h.length - 1];
          if (e.html.defaultTag() && e.html.defaultTag() !== "div")
            S.querySelector(e.html.blockTagsQuery()) ? S.outerHTML = S.innerHTML : S.outerHTML = "<".concat(e.html.defaultTag(), ">").concat(S.innerHTML, "</").concat(e.html.defaultTag(), ">");
          else {
            var y = S.querySelectorAll("*");
            !y.length || y[y.length - 1].tagName !== "BR" && S.innerText.length === 0 || !y.length || y[y.length - 1].tagName !== "BR" || y[y.length - 1].nextSibling ? S.outerHTML = S.innerHTML + (S.nextSibling ? "<br>" : "") : S.outerHTML = S.innerHTML;
          }
          h = i(Array.prototype.slice.call(m.querySelectorAll(":scope > div:not([style]), td > div:not([style]), th > div:not([style]), li > div:not([style])")));
        }
        for (h = i(Array.prototype.slice.call(m.querySelectorAll("div:not([style])"))); h.length; ) {
          for (C = 0; C < h.length; C++) {
            var M = h[C], O = M.innerHTML.replace(/\u0009/gi, "").trim();
            M.outerHTML = O;
          }
          h = i(Array.prototype.slice.call(m.querySelectorAll("div:not([style])")));
        }
        return m.innerHTML;
      }
      function s() {
        e.el.removeEventListener("copy", u), e.el.removeEventListener("cut", u), e.el.removeEventListener("paste", $);
      }
      return { _init: function() {
        e.el.addEventListener("copy", u), e.el.addEventListener("cut", u), e.el.addEventListener("paste", $, { capture: !0 }), e.events.on("drop", A), e.browser.msie && e.browser.version < 11 && (e.events.on("mouseup", function(C) {
          C.button === 2 && (setTimeout(function() {
            x = !1;
          }, 50), x = !0);
        }, !0), e.events.on("beforepaste", $)), e.events.on("destroy", s);
      }, cleanEmptyTagsAndDivs: p, getRtfClipboard: function() {
        return l;
      }, saveCopiedText: f, clean: o, replaceNewLines: d };
    }, Object.assign(a.DEFAULTS, { shortcutsEnabled: [], shortcutsHint: !0 }), a.SHORTCUTS_MAP = {}, a.RegisterShortcut = function(e, t, l, v, c, N) {
      a.SHORTCUTS_MAP[(c ? "^" : "") + (N ? "@" : "") + e] = { cmd: t, val: l, letter: v, shift: c, option: N }, a.DEFAULTS.shortcutsEnabled.push(t);
    }, a.RegisterShortcut(a.KEYCODE.E, "show", null, "E", !1, !1), a.RegisterShortcut(a.KEYCODE.B, "bold", null, "B", !1, !1), a.RegisterShortcut(a.KEYCODE.I, "italic", null, "I", !1, !1), a.RegisterShortcut(a.KEYCODE.U, "underline", null, "U", !1, !1), a.RegisterShortcut(a.KEYCODE.S, "strikeThrough", null, "S", !1, !1), a.RegisterShortcut(a.KEYCODE.CLOSE_SQUARE_BRACKET, "indent", null, "]", !1, !1), a.RegisterShortcut(a.KEYCODE.OPEN_SQUARE_BRACKET, "outdent", null, "[", !1, !1), a.RegisterShortcut(a.KEYCODE.Z, "undo", null, "Z", !1, !1), a.RegisterShortcut(a.KEYCODE.Z, "redo", null, "Z", !0, !1), a.RegisterShortcut(a.KEYCODE.Y, "redo", null, "Y", !1, !1), a.MODULES.shortcuts = function(e) {
      var t = null, l = !1;
      function v(c) {
        if (!e.core.hasFocus())
          return !0;
        var N = c.which, L = navigator.userAgent.indexOf("Mac OS X") !== -1 ? c.metaKey : c.ctrlKey;
        if (c.type === "keyup" && l && N !== a.KEYCODE.META)
          return l = !1;
        c.type === "keydown" && (l = !1);
        var b = (c.shiftKey ? "^" : "") + (c.altKey ? "@" : "") + N, f = e.node.blockParent(e.selection.blocks()[0]);
        if (f && f.tagName == "TR" && f.getAttribute("contenteditable") == null && (f = f.closest("table")), L && a.SHORTCUTS_MAP[b] && (!f || f.getAttribute("contenteditable") !== "false")) {
          var u = a.SHORTCUTS_MAP[b].cmd;
          if (u && 0 <= e.opts.shortcutsEnabled.indexOf(u)) {
            var T = a.SHORTCUTS_MAP[b].val;
            if (e.events.trigger("shortcut", [c, u, T]) === !1)
              return !(l = !0);
            if (u && (e.commands[u] || a.COMMANDS[u] && a.COMMANDS[u].callback))
              return c.preventDefault(), c.stopPropagation(), c.type === "keydown" && ((e.commands[u] || a.COMMANDS[u].callback)(), l = !0), !1;
          }
        }
      }
      return { _init: function() {
        e.events.on("keydown", v, !0), e.events.on("keyup", v, !0);
      }, get: function(N) {
        if (!e.opts.shortcutsHint)
          return null;
        if (!t)
          for (var L in t = {}, a.SHORTCUTS_MAP)
            Object.prototype.hasOwnProperty.call(a.SHORTCUTS_MAP, L) && 0 <= e.opts.shortcutsEnabled.indexOf(a.SHORTCUTS_MAP[L].cmd) && (t["".concat(a.SHORTCUTS_MAP[L].cmd, ".").concat(a.SHORTCUTS_MAP[L].val || "")] = { shift: a.SHORTCUTS_MAP[L].shift, option: a.SHORTCUTS_MAP[L].option, letter: a.SHORTCUTS_MAP[L].letter });
        var b = t[N];
        return b ? (e.helpers.isMac() ? "⌘" : "".concat(e.language.translate("Ctrl"), "+")) + (b.shift ? e.helpers.isMac() ? "⇧" : "".concat(e.language.translate("Shift"), "+") : "") + (b.option ? e.helpers.isMac() ? "⌥" : "".concat(e.language.translate("Alt"), "+") : "") + b.letter : null;
      } };
    }, a.MODULES.snapshot = function(e) {
      function t(L) {
        for (var b = L.parentNode.childNodes, f = 0, u = null, T = 0; T < b.length; T++) {
          if (u) {
            var x = b[T].nodeType === Node.TEXT_NODE && b[T].textContent === "", $ = u.nodeType === Node.TEXT_NODE && b[T].nodeType === Node.TEXT_NODE, E = u.nodeType === Node.TEXT_NODE && u.textContent === "";
            x || $ || E || f++;
          }
          if (b[T] === L)
            return f;
          u = b[T];
        }
      }
      function l(L) {
        var b = [];
        if (!L.parentNode)
          return [];
        for (; !e.node.isElement(L); )
          b.push(t(L)), L = L.parentNode;
        return b.reverse();
      }
      function v(L, b) {
        for (; L && L.nodeType === Node.TEXT_NODE; ) {
          var f = L.previousSibling;
          f && f.nodeType === Node.TEXT_NODE && (b += f.textContent.length), L = f;
        }
        return b;
      }
      function c(L) {
        for (var b = e.el, f = 0; f < L.length; f++)
          b = b.childNodes[L[f]];
        return b;
      }
      function N(L, b) {
        try {
          var f = c(b.scLoc), u = b.scOffset, T = c(b.ecLoc), x = b.ecOffset, $ = e.doc.createRange();
          $.setStart(f, u), $.setEnd(T, x), L.addRange($);
        } catch {
        }
      }
      return { get: function() {
        var b, f = {};
        if (e.events.trigger("snapshot.before"), f.html = (e.$wp ? e.$el.html() : e.$oel.get(0).outerHTML).replace(/ style=""/g, ""), f.ranges = [], e.$wp && e.selection.inEditor() && e.core.hasFocus())
          for (var u = e.selection.ranges(), T = 0; T < u.length; T++)
            f.ranges.push({ scLoc: l((b = u[T]).startContainer), scOffset: v(b.startContainer, b.startOffset), ecLoc: l(b.endContainer), ecOffset: v(b.endContainer, b.endOffset) });
        return e.events.trigger("snapshot.after", [f]), f;
      }, restore: function(b) {
        e.$el.html() !== b.html && (e.opts.htmlExecuteScripts ? e.$el.html(b.html) : e.el.innerHTML = b.html);
        var f = e.selection.get();
        e.selection.clear(), e.events.focus(!0);
        for (var u = 0; u < b.ranges.length; u++)
          N(f, b.ranges[u]);
      }, equal: function(b, f) {
        return b.html === f.html && (!e.core.hasFocus() || JSON.stringify(b.ranges) === JSON.stringify(f.ranges));
      } };
    }, a.MODULES.undo = function(e) {
      function t(L) {
        var b = L.which;
        e.keys.ctrlKey(L) && (b === a.KEYCODE.Z && L.shiftKey && L.preventDefault(), b === a.KEYCODE.Z && L.preventDefault());
      }
      var l = null;
      function v() {
        if (e.undo_stack && !e.undoing)
          for (; e.undo_stack.length > e.undo_index; )
            e.undo_stack.pop();
      }
      function c() {
        e.undo_index = 0, e.undo_stack = [];
      }
      function N() {
        e.undo_stack = [];
      }
      return { _init: function() {
        c(), e.events.on("initialized", function() {
          l = (e.$wp ? e.$el.html() : e.$oel.get(0).outerHTML).replace(/ style=""/g, "");
        }), e.events.on("blur", function() {
          e.el.querySelector(".fr-dragging") || e.undo.saveStep();
        }), e.events.on("keydown", t), e.events.on("destroy", N);
      }, run: function() {
        if (1 < e.undo_index) {
          e.undoing = !0;
          var b = e.undo_stack[--e.undo_index - 1];
          clearTimeout(e._content_changed_timer), e.snapshot.restore(b), l = b.html, e.popups.hideAll(), e.toolbar.enable(), e.events.trigger("contentChanged"), e.events.trigger("commands.undo"), e.undoing = !1, e.selection.restore();
        }
      }, redo: function() {
        if (e.undo_index < e.undo_stack.length) {
          e.undoing = !0;
          var b = e.undo_stack[e.undo_index++];
          clearTimeout(e._content_changed_timer), e.snapshot.restore(b), l = b.html, e.popups.hideAll(), e.toolbar.enable(), e.events.trigger("contentChanged"), e.events.trigger("commands.redo"), e.undoing = !1;
        }
      }, canDo: function() {
        return !(e.undo_stack.length === 0 || e.undo_index <= 1);
      }, canRedo: function() {
        return e.undo_index !== e.undo_stack.length;
      }, dropRedo: v, reset: c, saveStep: function(b) {
        if (!(!e.undo_stack || e.undoing || e.el.querySelector(".fr-marker") || e.el.querySelector(".fr-marker") && e.opts.iframe && e.markdown && !e.markdown.isEnabled()))
          if (b === void 0) {
            if ((b = e.snapshot.get()) && b.html && e.undo_stack[e.undo_stack.length - 1] && b.html === e.undo_stack[e.undo_stack.length - 1].html)
              return;
            e.undo_stack[e.undo_index - 1] && e.snapshot.equal(e.undo_stack[e.undo_index - 1], b) || (v(), e.undo_stack.push(b), e.undo_index++, function(u, T) {
              var x = T.split("fr-selected-cell").join("");
              x = x.split(' class=""').join("");
              var $ = u.split("fr-selected-cell").join("");
              return x === ($ = $.split(' class=""').join(""));
            }(l, b.html) || (e.events.trigger("contentChanged"), l = b.html));
          } else
            v(), 0 < e.undo_index ? e.undo_stack[e.undo_index - 1] = b : (e.undo_stack.push(b), e.undo_index++);
      } };
    }, Object.assign(a.DEFAULTS, { height: null, heightMax: null, heightMin: null, width: null }), a.MODULES.size = function(e) {
      function t() {
        l(), e.opts.height && e.$el.css("minHeight", e.opts.height - e.helpers.getPX(e.$el.css("padding-top")) - e.helpers.getPX(e.$el.css("padding-bottom")));
        var v = !1;
        if (e.opts.fullPage) {
          for (var c = e.$el.find("span,p,div"), N = 0; N < c.length; N++)
            if (c[N].style.height && c[N].style.height.includes("vh")) {
              v = !0;
              break;
            }
        }
        e.opts.fullPage && v && (e.opts.heightMin && e.$iframe.css("minHeight", e.opts.heightMin), e.opts.heightMax && e.$iframe.css("maxHeight", e.opts.heightMax), e.$el.css("overflow-y", "auto")), e.opts.iframe && e.markdown && e.markdown.isEnabled() ? e.$iframe.height(e.$wp.parent().outerHeight(!0)) : e.$iframe.height(e.$el.outerHeight(!0));
      }
      function l() {
        e.opts.heightMin ? e.$el.css("minHeight", e.opts.heightMin) : e.$el.css("minHeight", ""), e.opts.heightMax ? (e.$wp.css("maxHeight", e.opts.heightMax), e.$wp.css("overflow", "auto")) : (e.$wp.css("maxHeight", ""), e.$wp.css("overflow", "")), e.opts.height ? (e.$wp.css("height", e.opts.height), e.$wp.css("overflow", "auto"), e.$el.css("minHeight", e.opts.height - e.helpers.getPX(e.$el.css("padding-top")) - e.helpers.getPX(e.$el.css("padding-bottom")))) : (e.$wp.css("height", ""), e.opts.heightMin || e.$el.css("minHeight", ""), e.opts.heightMax || e.$wp.css("overflow", "")), e.opts.width && e.$box.width(e.opts.width);
      }
      return { _init: function() {
        if (!e.$wp)
          return !1;
        l(), e.$iframe && (e.events.on("keyup keydown", function() {
          setTimeout(t, 0);
        }, !0), e.events.on("commands.after html.set init initialized paste.after", t));
      }, syncIframe: t, refresh: l };
    }, Object.assign(a.DEFAULTS, { documentReady: !1, editorClass: null, typingTimer: 500, iframe: !1, requestWithCORS: !0, requestWithCredentials: !1, requestHeaders: {}, useClasses: !0, spellcheck: !0, iframeDefaultStyle: 'html{margin:0px;height:auto;}body{height:auto;padding:20px;background:transparent;color:#000000;position:relative;z-index: 2;-webkit-user-select:auto;margin:0px;overflow:hidden;min-height:20px;}body:after{content:"";display:block;clear:both;}body::-moz-selection{background:#b5d6fd;color:#000;}body::selection{background:#b5d6fd;color:#000;}', iframeStyle: "", iframeStyleFiles: [], direction: "auto", zIndex: 1, tabIndex: null, disableRightClick: !1, scrollableContainer: "body", keepFormatOnDelete: !1, theme: null }), a.MODULES.core = function(e) {
      var t = e.$;
      function l() {
        if (e.$box.addClass("fr-box".concat(e.opts.editorClass ? " ".concat(e.opts.editorClass) : "")), e.$box.attr("role", "application"), e.$wp.addClass("fr-wrapper"), e.opts.documentReady && e.$box.addClass("fr-document"), function() {
          e.opts.iframe || e.$el.addClass("fr-element fr-view"), (e.opts.height && e.opts.height < window.innerHeight || e.opts.heightMax && e.opts.heightMax < window.innerHeight) && e.$el.addClass("fr-element-scroll-visible");
        }(), e.opts.iframe) {
          e.$iframe.addClass("fr-iframe"), e.$el.addClass("fr-view");
          for (var v = 0; v < e.o_doc.styleSheets.length; v++) {
            var c = void 0, N = !1;
            try {
              c = e.o_doc.styleSheets[v].cssRules;
            } catch {
            }
            if (e.o_doc.styleSheets[v].href && (-1 < e.o_doc.styleSheets[v].href.indexOf("codemirror") || -1 < e.o_doc.styleSheets[v].href.indexOf("font-awesome")) && (N = !(c = null)), c)
              for (var L = 0, b = c.length; L < b; L++)
                if (!c[L].selectorText || c[L].selectorText.indexOf(".fr-view") !== 0 && c[L].selectorText.indexOf(".fr-element") !== 0 && c[L].selectorText.indexOf(".fr-box.fr-basic .fr-element") !== 0 && c[L].selectorText.indexOf(".fr-markdown-view") !== 0 && c[L].selectorText.indexOf(".fr-markdown-editor") !== 0 && c[L].selectorText.indexOf(".fr-wrapper-markdown") !== 0 && c[L].selectorText.indexOf(".gutter-horizontal") !== 0 && c[L].selectorText.indexOf(".e-resize-handler") !== 0)
                  try {
                    N && e.o_doc.styleSheets[v].href && c[L].selectorText && (e.opts.iframeStyle += "".concat(c[L].selectorText, "{").concat(c[L].style.cssText, "}"), N = !1);
                  } catch {
                  }
                else
                  0 < c[L].style.cssText.length && (c[L].selectorText.indexOf(".fr-box.fr-basic .fr-element") === 0 && (e.opts.iframeStyle += "".concat(c[L].selectorText, "{").concat(c[L].style.cssText, "}")), c[L].selectorText.indexOf(".fr-view") === 0 ? e.opts.iframeStyle += "".concat(c[L].selectorText.replace(/\.fr-view/g, "body"), "{").concat(c[L].style.cssText, "}") : e.opts.iframeStyle += "".concat(c[L].selectorText.replace(/\.fr-element/g, "body"), "{").concat(c[L].style.cssText, "}"));
            else if (e.o_doc.styleSheets[v].href && (-1 < e.o_doc.styleSheets[v].href.indexOf("codemirror") || -1 < e.o_doc.styleSheets[v].href.indexOf("font-awesome") || -1 < e.o_doc.styleSheets[v].href.indexOf("froala-editor"))) {
              var f = t("<link rel='stylesheet' type='text/css' href='".concat(e.o_doc.styleSheets[v].href, "'>"));
              e.$head.append(f);
            }
          }
        }
        e.opts.direction !== "auto" && e.$box.removeClass("fr-ltr fr-rtl").addClass("fr-".concat(e.opts.direction)), e.$el.attr("dir", e.opts.direction), e.$wp.attr("dir", e.opts.direction), 1 < e.opts.zIndex && e.$box.css("z-index", e.opts.zIndex), e.opts.theme && e.$box.addClass("".concat(e.opts.theme, "-theme")), e.opts.tabIndex = e.opts.tabIndex || e.$oel.attr("tabIndex"), e.opts.tabIndex && e.$el.attr("tabIndex", e.opts.tabIndex);
      }
      return { _init: function() {
        if (a.INSTANCES.push(e), function() {
          e.drag_support = { filereader: typeof FileReader < "u", formdata: !!e.win.FormData, progress: "upload" in new XMLHttpRequest() };
        }(), e.$wp) {
          l(), e.html.set(e._original_html), e.$el.attr("spellcheck", e.opts.spellcheck), e.helpers.isMobile() && (e.$el.attr("autocomplete", e.opts.spellcheck ? "on" : "off"), e.$el.attr("autocorrect", e.opts.spellcheck ? "on" : "off"), e.$el.attr("autocapitalize", e.opts.spellcheck ? "on" : "off")), e.opts.disableRightClick && e.events.$on(e.$el, "contextmenu", function(c) {
            if (c.button === 2)
              return c.preventDefault(), c.stopPropagation(), !1;
          });
          try {
            e.doc.execCommand("styleWithCSS", !1, !1);
          } catch {
          }
        }
        e.$oel.get(0).tagName === "TEXTAREA" && (e.events.on("contentChanged", function() {
          e.$oel.val(e.html.get());
        }), e.events.on("form.submit", function() {
          e.$oel.val(e.html.get());
        }), e.events.on("form.reset", function() {
          e.html.set(e._original_html);
        }), e.$oel.val(e.html.get())), e.helpers.isIOS() && e.events.$on(e.$doc, "selectionchange", function() {
          e.$doc.get(0).hasFocus() || e.$win.get(0).focus();
        }), e.events.trigger("init"), e.opts.autofocus && !e.opts.initOnClick && e.$wp && e.events.on("initialized", function() {
          e.events.focus(!0);
        });
      }, destroy: function(c) {
        e.$oel.get(0).tagName === "TEXTAREA" && e.$oel.val(c), e.$box && e.$box.removeAttr("role"), e.$wp && (e.$oel.get(0).tagName === "TEXTAREA" ? (e.$el.html(""), e.$wp.html(""), e.$box.replaceWith(e.$oel), e.$oel.show()) : (e.$wp.replaceWith(c), e.$el.html(""), e.$box.removeClass("fr-view fr-ltr fr-box ".concat(e.opts.editorClass || "")), e.opts.theme && e.$box.addClass("".concat(e.opts.theme, "-theme")))), this.$wp = null, this.$el = null, this.el = null, this.$box = null;
      }, isEmpty: function() {
        return e.node.isEmpty(e.el);
      }, getXHR: function(c, N) {
        var L = new XMLHttpRequest();
        for (var b in L.open(N, c, !0), e.opts.requestWithCredentials && (L.withCredentials = !0), e.opts.requestHeaders)
          Object.prototype.hasOwnProperty.call(e.opts.requestHeaders, b) && L.setRequestHeader(b, e.opts.requestHeaders[b]);
        return L;
      }, injectStyle: function(c) {
        if (e.opts.iframe) {
          e.$head.find("style[data-fr-style], link[data-fr-style]").remove(), e.$head.append('<style data-fr-style="true">'.concat(c, "</style>"));
          for (var N = 0; N < e.opts.iframeStyleFiles.length; N++) {
            var L = t('<link data-fr-style="true" rel="stylesheet" href="'.concat(e.opts.iframeStyleFiles[N], '">'));
            L.get(0).addEventListener("load", e.size.syncIframe), e.$head.append(L);
          }
        }
      }, hasFocus: function() {
        return e.browser.mozilla && e.helpers.isMobile() ? e.selection.inEditor() : e.node.hasFocus(e.el) || 0 < e.$el.find("*:focus").length;
      }, sameInstance: function(c) {
        if (!c)
          return !1;
        var N = c.data("instance");
        return !!N && N.id === e.id;
      } };
    }, a.POPUP_TEMPLATES = { "text.edit": "[_EDIT_]" }, a.RegisterTemplate = function(e, t) {
      a.POPUP_TEMPLATES[e] = t;
    }, a.MODULES.popups = function(e) {
      var t, l = e.$;
      e.shared.popups || (e.shared.popups = {});
      var v, c = e.shared.popups;
      function N(s, n) {
        n.isVisible() || (n = e.$sc), n.is(c[s].data("container")) || (c[s].data("container", n), n.append(c[s]));
      }
      function L(s) {
        var n;
        s.find(".fr-upload-progress").addClass("fr-height-set"), s.find(".fr-upload-progress").removeClass("fr-height-auto"), e.popups.get("filesManager.insert").removeClass("fr-height-auto"), s.find(".fr-files-upload-layer").hasClass("fr-active") && (n = 1), s.find(".fr-files-by-url-layer").hasClass("fr-active") && (n = 2), s.find(".fr-files-embed-layer").hasClass("fr-active") && (n = 3), s.find(".fr-upload-progress-layer").get(0).clientHeight + 10 < s.find(".fr-upload-progress").get(0).clientHeight && s.find(".fr-upload-progress").addClass("fr-height-auto"), 400 < s[0].clientHeight && (s[0].childNodes[4].style.height = "".concat(s[0].clientHeight - (s[0].childNodes[0].clientHeight + s[0].childNodes[n].clientHeight) - 80, "px"));
      }
      var b = 2e3;
      function f() {
        l(this).toggleClass("fr-not-empty", !0);
      }
      function u() {
        var s = l(this);
        s.toggleClass("fr-not-empty", s.val() !== "");
      }
      function T(s) {
        return c[s] && e.node.hasClass(c[s], "fr-active") && e.core.sameInstance(c[s]) || !1;
      }
      function x(s) {
        for (var n in c)
          if (Object.prototype.hasOwnProperty.call(c, n) && T(n) && (s === void 0 || c[n].data("instance") === s))
            return c[n];
        return !1;
      }
      function $(s) {
        var n = null;
        if (n = typeof s != "string" ? s : c[s], s === "filesManager.insert" && e.filesManager !== void 0 && e.filesManager.isChildWindowOpen())
          return !1;
        if (n && e.node.hasClass(n, "fr-active") && (n.removeClass("fr-active fr-above"), e.events.trigger("popups.hide.".concat(s)), e.$tb && (1 < e.opts.zIndex ? e.$tb.css("zIndex", e.opts.zIndex + 1) : e.$tb.css("zIndex", "")), e.events.disableBlur(), n.find("input, textarea, button").each(function() {
          this === this.ownerDocument.activeElement && this.blur();
        }), n.find("input, textarea").attr("disabled", "disabled"), v))
          for (var C = 0; C < v.length; C++)
            l(v[C]).removeClass("fr-btn-active-popup");
      }
      function E(s) {
        for (var n in s === void 0 && (s = []), c)
          Object.prototype.hasOwnProperty.call(c, n) && s.indexOf(n) < 0 && $(n);
      }
      function A() {
        e.shared.exit_flag = !0;
      }
      function k() {
        e.shared.exit_flag = !1;
      }
      function d() {
        return e.shared.exit_flag;
      }
      function g(s, n) {
        var C, m = function(_, D) {
          var w = a.POPUP_TEMPLATES[_];
          if (!w)
            return null;
          for (var R in typeof w == "function" && (w = w.apply(e)), D)
            Object.prototype.hasOwnProperty.call(D, R) && (w = w.replace("[_".concat(R.toUpperCase(), "_]"), D[R]));
          return w;
        }(s, n), h = l(e.doc.createElement("DIV"));
        if (!m)
          return s === "filesManager.insert" ? h.addClass("fr-popup fr-files-manager fr-empty") : h.addClass("fr-popup fr-empty"), (C = l("body").first()).append(h), h.data("container", C), c[s] = h;
        s === "filesManager.insert" ? h.addClass("fr-popup fr-files-manager".concat(e.helpers.isMobile() ? " fr-mobile" : " fr-desktop").concat(e.opts.toolbarInline ? " fr-inline" : "")) : h.addClass("fr-popup".concat(e.helpers.isMobile() ? " fr-mobile" : " fr-desktop").concat(e.opts.toolbarInline ? " fr-inline" : "")), h.html(m), e.opts.theme && h.addClass("".concat(e.opts.theme, "-theme")), 1 < e.opts.zIndex && (!e.opts.editInPopup && e.$tb ? e.$tb.css("z-index", e.opts.zIndex + 2) : h.css("z-index", e.opts.zIndex + 2)), e.opts.direction !== "auto" && h.removeClass("fr-ltr fr-rtl").addClass("fr-".concat(e.opts.direction)), h.find("input, textarea").attr("dir", e.opts.direction).attr("disabled", "disabled"), (C = l("body").first()).append(h), h.data("container", C);
        var S = (c[s] = h).find(".fr-color-hex-layer");
        if (0 < S.length) {
          var y = e.helpers.getPX(h.find(".fr-color-set > span").css("width")), M = e.helpers.getPX(S.css("paddingLeft")), O = e.helpers.getPX(S.css("paddingRight"));
          S.css("width", y * e.opts.colorsStep + M + O);
        }
        return e.button.bindCommands(h, !1), h;
      }
      function r(s) {
        var n = c[s];
        return { _windowResize: function() {
          var C = n.data("instance") || e;
          if (!C.helpers.isMobile() && n.isVisible()) {
            var m = n.find(".fr-file-progress-bar-layer");
            if (s === "file.insert" && 0 < m.length && m.hasClass("fr-active")) {
              var h = e.$tb.find('.fr-command[data-cmd="insertFile"]');
              C.events.disableBlur();
              var S = e.button.getPosition(h), y = S.left, M = S.top;
              e.position.at(y, M, c[s], 0), C.events.enableBlur();
            } else
              C.events.disableBlur(), C.popups.hide(s), C.events.enableBlur();
          }
        }, _inputFocus: function(C) {
          var m = n.data("instance") || e, h = l(C.currentTarget);
          if (h.is("input:file") && h.closest(".fr-layer").addClass("fr-input-focus"), C.preventDefault(), C.stopPropagation(), setTimeout(function() {
            m.events.enableBlur();
          }, 100), m.helpers.isMobile()) {
            var S = l(m.o_win).scrollTop();
            setTimeout(function() {
              l(m.o_win).scrollTop(S);
            }, 0);
          }
        }, _inputBlur: function(C) {
          var m = n.data("instance") || e, h = l(C.currentTarget);
          h.is("input:file") && h.closest(".fr-layer").removeClass("fr-input-focus"), document.activeElement !== this && l(this).isVisible() && (m.events.blurActive() && m.events.trigger("blur"), m.events.enableBlur());
        }, _editorKeydown: function(C) {
          var m = n.data("instance") || e;
          m.keys.ctrlKey(C) || C.which === a.KEYCODE.ALT || C.which === a.KEYCODE.ESC || (T(s) && n.findVisible(".fr-back").length ? m.button.exec(n.findVisible(".fr-back").first()) : C.which !== a.KEYCODE.ALT && m.popups.hide(s));
        }, _preventFocus: function(C) {
          var m = n.data("instance") || e, h = C.originalEvent ? C.originalEvent.target || C.originalEvent.originalTarget : null;
          C.type === "mouseup" || l(h).is(":focus") || m.events.disableBlur(), C.type !== "mouseup" || l(h).hasClass("fr-command") || 0 < l(h).parents(".fr-command").length || l(h).hasClass("fr-dropdown-content") || l(h).hasClass("fr-dropdown-menu") || e.button.hideActiveDropdowns(n), (e.browser.safari || e.browser.mozilla) && C.type === "mousedown" && l(h).is("input[type=file]") && m.events.disableBlur();
          var S = "input, textarea, button, select, label, .fr-command";
          if (h && !l(h).is(S) && l(h).parents(S).length === 0)
            return C.stopPropagation(), !1;
          h && l(h).is(S) && C.stopPropagation(), k();
        }, _editorMouseup: function() {
          n.isVisible() && d() && 0 < n.findVisible("input:focus, textarea:focus, button:focus, select:focus").length && e.events.disableBlur();
        }, _windowMouseup: function(C) {
          if (!e.core.sameInstance(n))
            return !0;
          var m = n.data("instance") || e;
          n.isVisible() && d() && (C.stopPropagation(), m.markers.remove(), m.popups.hide(s), k());
        }, _windowKeydown: function(C) {
          if (!e.core.sameInstance(n))
            return !0;
          var m = n.data("instance") || e, h = C.which;
          if (a.KEYCODE.ESC === h) {
            if (m.popups.isVisible(s) && m.opts.toolbarInline)
              return C.stopPropagation(), m.popups.isVisible(s) && (n.findVisible(".fr-back").length ? (m.button.exec(n.findVisible(".fr-back").first()), m.accessibility.focusPopupButton(n)) : n.findVisible(".fr-dismiss").length ? m.button.exec(n.findVisible(".fr-dismiss").first()) : (m.popups.hide(s), m.toolbar.showInline(null, !0), m.accessibility.focusPopupButton(n))), !1;
            if (m.popups.isVisible(s))
              return n.findVisible(".fr-back").length ? (m.button.exec(n.findVisible(".fr-back").first), m.accessibility.focusPopupButton(n)) : n.findVisible(".fr-dismiss").length ? m.button.exec(n.findVisible(".fr-dismiss").first()) : (m.popups.hide(s), m.accessibility.focusPopupButton(n)), !1;
          }
        }, _repositionPopup: function() {
          if (!e.opts.height && !e.opts.heightMax || e.opts.toolbarInline)
            return !0;
          if (e.$wp && T(s) && n.parent().get(0) === e.$sc.get(0)) {
            var C = n.offset().top - e.$wp.offset().top, m = e.$wp.outerHeight();
            e.node.hasClass(n.get(0), "fr-above") && (C += n.outerHeight()), m < C || C < 0 ? n.addClass("fr-hidden") : n.removeClass("fr-hidden");
          }
        }, handleWindowClick: function(C) {
          if (!e.core.sameInstance(n))
            return !0;
          var m = n.data("instance") || e;
          n.isVisible() && C.target && (0 < l(C.target).find("body").length || l(C.target)[0].tagName === "BODY") && (C.stopPropagation(), m.popups.hide(s));
        } };
      }
      function o(s, n) {
        e.events.on("mouseup", s._editorMouseup, !0), e.$wp && e.events.on("keydown", s._editorKeydown), e.events.on("focus", function() {
          c[n].removeClass("focused");
        }), e.events.on("blur", function() {
          x() && e.markers.remove(), e.helpers.isMobile() ? c[n].hasClass("focused") ? (E(), c[n].removeClass("focused")) : c[n].addClass("focused") : c[n].find("iframe").length || E();
        }), e.$wp && !e.helpers.isMobile() && e.events.$on(e.$wp, "scroll.popup".concat(n), s._repositionPopup), e.events.on("window.mouseup", s._windowMouseup, !0), e.events.on("window.keydown", s._windowKeydown, !0), e.opts.iframe && window.addEventListener("click", s.handleWindowClick), c[n].data("inst".concat(e.id), !0), e.events.on("destroy", function() {
          e.core.sameInstance(c[n]) && (l("body").first().append(c[n]), c[n].removeClass("fr-active"));
        }, !0);
      }
      function i() {
        var s = l(this).prev().children().first();
        s.attr("checked", !s.attr("checked"));
      }
      function p() {
        for (var s in c)
          if (Object.prototype.hasOwnProperty.call(c, s)) {
            var n = c[s];
            n && (n.html("").removeData().remove(), c[s] = null);
          }
        c = [];
      }
      return e.shared.exit_flag = !1, { _init: function() {
        t = window.innerHeight, e.events.on("shared.destroy", p, !0), e.events.on("window.mousedown", A), e.events.on("window.touchmove", k), e.events.$on(l(e.o_win), "scroll", k), e.events.on("mousedown", function(n) {
          x() && (n.stopPropagation(), e.$el.find(".fr-marker").remove(), A(), e.events.disableBlur());
        });
      }, create: function(n, C) {
        var m = g(n, C), h = r(n);
        o(h, n), e.events.$on(m, "mousedown mouseup touchstart touchend touch", "*", h._preventFocus, !0), e.events.$on(m, "focus", "input, textarea, button, select", h._inputFocus, !0), e.events.$on(m, "blur", "input, textarea, button, select", h._inputBlur, !0);
        var S = m.find("input, textarea");
        return function(M) {
          for (var O = 0; O < M.length; O++) {
            var H = M[O], _ = l(H);
            _.next().length === 0 && _.attr("placeholder") && (_.after('<label for="'.concat(_.attr("id"), '">').concat(_.attr("placeholder"), "</label>")), _.attr("placeholder", ""));
          }
        }(S), e.events.$on(S, "focus", f), e.events.$on(S, "blur change", u), e.events.$on(m, "click", ".fr-checkbox + label", i), e.accessibility.registerPopup(n), e.helpers.isIOS() && e.events.$on(m, "touchend", "label", function() {
          l("#".concat(l(this).attr("for"))).prop("checked", function(y, M) {
            return !M;
          });
        }, !0), e.events.$on(l(e.o_win), "resize", h._windowResize, !0), n === "filesManager.insert" && c["filesManager.insert"].css("zIndex", 2147483641), m;
      }, get: function(n) {
        var C = c[n];
        return C && !C.data("inst".concat(e.id)) && o(r(n), n), C;
      }, show: function(n, C, m, h, S) {
        if (T(n) || (x() && 0 < e.$el.find(".fr-marker").length ? (e.events.disableBlur(), e.selection.restore()) : x() || (e.events.disableBlur(), e.events.focus(), e.events.enableBlur())), E([n]), !c[n])
          return !1;
        var y = e.button.getButtons(".fr-dropdown.fr-active");
        y.removeClass("fr-active").attr("aria-expanded", !1).parents(".fr-toolbar").css("zIndex", "").find("> .fr-dropdown-wrapper").css("height", ""), y.next().attr("aria-hidden", !0).css("overflow", "").find("> .fr-dropdown-wrapper").css("height", ""), c[n].data("instance", e), e.$tb && e.$tb.data("instance", e);
        var M = T(n);
        c[n].addClass("fr-active").removeClass("fr-hidden").find("input, textarea").removeAttr("disabled");
        var O = c[n].data("container");
        if (function(B, I) {
          I.isVisible() || (I = e.$sc), I.contains([c[B].get(0)]) || I.append(c[B]);
        }(n, O), e.opts.toolbarInline && O && e.$tb && O.get(0) === e.$tb.get(0) && (N(n, e.$sc), m = e.$tb.offset().top - e.helpers.getPX(e.$tb.css("margin-top")), C = e.$tb.offset().left + e.$tb.outerWidth() / 2, e.node.hasClass(e.$tb.get(0), "fr-above") && m && (m += e.$tb.outerHeight()), h = 0), O = c[n].data("container"), e.opts.iframe && !h && !M) {
          var H = e.helpers.getPX(e.$wp.find(".fr-iframe").css("padding-top")), _ = e.helpers.getPX(e.$wp.find(".fr-iframe").css("padding-left"));
          C && (C -= e.$iframe.offset().left + _), m && (m -= e.$iframe.offset().top + H);
        }
        O.is(e.$tb) ? e.$tb.css("zIndex", (e.opts.zIndex || 1) + 4) : c[n].css("zIndex", (e.opts.zIndex || 1) + 3), e.opts.toolbarBottom && O && e.$tb && O.get(0) === e.$tb.get(0) && (c[n].addClass("fr-above"), m && (m -= c[n].outerHeight())), S && (C -= c[n].width() / 2), C + c[n].outerWidth() > e.$sc.offset().left + e.$sc.width() && (C -= C + c[n].outerWidth() - e.$sc.offset().left - e.$sc.width()), C < e.$sc.offset().left && e.opts.direction === "rtl" && (C = e.$sc.offset().left), c[n].removeClass("fr-active"), e.position.at(C, m, c[n], h || 0);
        var D = e.node.blockParent(e.selection.blocks()[0]);
        if (D && D.getAttribute("contenteditable") === "false")
          c[n].removeClass("fr-active");
        else {
          var w = e.selection.element().parentElement.getAttribute("contenteditable");
          w && w === "false" ? c[n].removeClass("fr-active") : c[n].addClass("fr-active");
        }
        M || e.accessibility.focusPopup(c[n]), e.opts.toolbarInline && e.toolbar.hide(), e.$tb && (v = e.$tb.find(".fr-btn-active-popup")), e.events.trigger("popups.show.".concat(n)), r(n)._repositionPopup(), k();
      }, hide: $, onHide: function(n, C) {
        e.events.on("popups.hide.".concat(n), C);
      }, hideAll: E, setContainer: N, refresh: function(n) {
        c[n].data("instance", e), e.events.trigger("popups.refresh.".concat(n));
        for (var C = c[n].find(".fr-command"), m = 0; m < C.length; m++) {
          var h = l(C[m]);
          h.parents(".fr-dropdown-menu").length === 0 && e.button.refresh(h);
        }
      }, onRefresh: function(n, C) {
        e.events.on("popups.refresh.".concat(n), C);
      }, onShow: function(n, C) {
        e.events.on("popups.show.".concat(n), C);
      }, isVisible: T, setFileListHeight: L, areVisible: x, setPopupDimensions: function(n, C) {
        C && n.find(".fr-upload-progress-layer").get(0).clientHeight < b && (n.find(".fr-upload-progress").addClass("fr-height-auto"), e.popups.get("filesManager.insert").addClass("fr-height-auto"), n.find(".fr-upload-progress").removeClass("fr-height-set"), b = 2e3), n.get(0).clientHeight > window.innerHeight / 2 && (window.innerWidth < 500 ? n.get(0).clientHeight > 0.6 * t && L(n) : 400 < n.get(0).clientHeight && L(n), b = n.find(".fr-upload-progress-layer").get(0).clientHeight);
        var m = window.innerWidth;
        switch (!0) {
          case m <= 320:
            n.width(200);
            break;
          case m <= 420:
            n.width(250);
            break;
          case m <= 520:
            n.width(300);
            break;
          case m <= 720:
            n.width(400);
            break;
          case 720 < m:
            n.width(530);
        }
      } };
    }, a.MODULES.accessibility = function(e) {
      var t, l = e.$, v = !0;
      function c(n) {
        for (var C = e.$el.find('[contenteditable="true"]'), m = !1, h = 0; C.get(h); )
          l(C.get(h)).is(":focus") && (m = !0), h++;
        if (n && n.length && !m) {
          n.data("blur-event-set") || n.parents(".fr-popup").length || (e.events.$on(n, "blur", function() {
            var y = n.parents(".fr-toolbar, .fr-popup").data("instance") || e;
            y.events.blurActive() && !e.core.hasFocus() && y.events.trigger("blur"), setTimeout(function() {
              y.events.enableBlur();
            }, 100);
          }, !0), n.data("blur-event-set", !0));
          var S = n.parents(".fr-toolbar, .fr-popup").data("instance") || e;
          !e.browser.safari || t && e.shared.safariSelection != null || (e.shared.safariSelection = e.selection.get().getRangeAt(0).cloneRange()), S.events.disableBlur(), n.get(0).focus(), e.shared.$f_el = n;
        }
      }
      function N(n, C) {
        var m = C ? "last" : "first", h = x($(n))[m]();
        if (h.length)
          return c(h), !0;
      }
      function L(n) {
        return n.is("input, textarea, select") && f(), e.events.disableBlur(), n.get(0).focus(), !0;
      }
      function b(n, C) {
        var m = n.find("input, textarea, button, select, span").filter(function() {
          return l(this).isVisible();
        }).not(":disabled"), h = m.first();
        if ((m = h.parents(".fr-color-set").get(0) && h.parents(".fr-popup").get(0) ? m.filter("input") : C ? m.last() : m.first()).length)
          return L(m);
        if (e.shared.with_kb) {
          var S = n.findVisible(".fr-active-item").first();
          if (S.length)
            return L(S);
          var y = n.findVisible("[tabIndex]").first();
          if (y.length)
            return L(y);
        }
      }
      function f() {
        e.$el.find(".fr-marker").length === 0 && e.core.hasFocus() && e.selection.save();
      }
      function u() {
        var n = e.popups.areVisible();
        if (n) {
          var C = n.find(".fr-buttons");
          return C.find("button:focus, .fr-group span:focus").length ? !N(n.data("instance").$tb) : !N(C);
        }
        return !N(e.$tb);
      }
      function T() {
        var n = null;
        return e.shared.$f_el.is(".fr-dropdown.fr-active") ? n = e.shared.$f_el : e.shared.$f_el.closest(".fr-dropdown-menu").prev().is(".fr-dropdown.fr-active") && (n = e.shared.$f_el.closest(".fr-dropdown-menu").prev()), n;
      }
      function x(n) {
        for (var C = -1, m = 0; m < n.length; m++)
          l(n[m]).hasClass("fr-open") && (C = m);
        var h = n.index(e.$tb.find(".fr-more-toolbar.fr-expanded > button.fr-command").first());
        if (0 < h && C !== -1) {
          var S = n.slice(h, n.length), y = (n = n.slice(0, h)).slice(0, C + 1), M = n.slice(C + 1, n.length);
          n = y;
          for (var O = 0; O < S.length; O++)
            n.push(S[O]);
          for (var H = 0; H < M.length; H++)
            n.push(M[H]);
        }
        return n;
      }
      function $(n) {
        return n.findVisible("button:not(.fr-disabled), .fr-group span.fr-command").filter(function(C) {
          var m = l(C).parents(".fr-more-toolbar");
          return m.length === 0 || 0 < m.length && m.hasClass("fr-expanded");
        });
      }
      function E(n, C, m) {
        if (e.shared.$f_el) {
          var h = T();
          h && (e.button.click(h), e.shared.$f_el = h);
          var S = x($(n)), y = S.index(e.shared.$f_el);
          if (y === 0 && !m || y === S.length - 1 && m) {
            var M;
            C && (n.parent().is(".fr-popup") && (M = !b(n.parent().children().not(".fr-buttons"), !m)), M === !1 && (e.shared.$f_el = null)), C && M === !1 || N(n, !m);
          } else
            c(l(S.get(y + (m ? 1 : -1))));
          return !1;
        }
      }
      function A(n, C) {
        return E(n, C, !0);
      }
      function k(n, C) {
        return E(n, C);
      }
      function d(n) {
        if (e.shared.$f_el) {
          var C;
          if (e.shared.$f_el.is(".fr-dropdown.fr-active"))
            return c(C = n ? e.shared.$f_el.next().find(".fr-command:not(.fr-disabled)").first() : e.shared.$f_el.next().find(".fr-command:not(.fr-disabled)").last()), !1;
          if (e.shared.$f_el.is("a.fr-command"))
            return (C = n ? e.shared.$f_el.closest("li").nextAllVisible().first().find(".fr-command:not(.fr-disabled)").first() : e.shared.$f_el.closest("li").prevAllVisible().first().find(".fr-command:not(.fr-disabled)").first()).length || (C = n ? e.shared.$f_el.closest(".fr-dropdown-menu").find(".fr-command:not(.fr-disabled)").first() : e.shared.$f_el.closest(".fr-dropdown-menu").find(".fr-command:not(.fr-disabled)").last()), c(C), !1;
        }
      }
      function g() {
        if (e.shared.$f_el) {
          if (e.shared.$f_el.hasClass("fr-dropdown"))
            e.button.click(e.shared.$f_el);
          else if (e.shared.$f_el.is("button.fr-back")) {
            e.opts.toolbarInline && (e.events.disableBlur(), e.events.focus());
            var n = e.popups.areVisible(e);
            n && (e.shared.with_kb = !1), e.button.click(e.shared.$f_el), i(n);
          } else {
            if (e.events.disableBlur(), e.button.click(e.shared.$f_el), e.shared.$f_el.attr("data-group-name")) {
              var C = e.$tb.find('.fr-more-toolbar[data-name="'.concat(e.shared.$f_el.attr("data-group-name"), '"]')), m = e.shared.$f_el;
              C.hasClass("fr-expanded") && (m = C.findVisible("button:not(.fr-disabled)").first()), m && c(m);
            } else if (e.shared.$f_el.attr("data-popup")) {
              var h = e.popups.areVisible(e);
              h && h.data("popup-button", e.shared.$f_el);
            } else if (e.shared.$f_el.attr("data-modal")) {
              var S = e.modals.areVisible(e);
              S && S.data("modal-button", e.shared.$f_el);
            }
            e.shared.$f_el = null;
          }
          return !1;
        }
      }
      function r() {
        if (e.shared.$f_el && (e.events.disableBlur(), e.shared.$f_el.blur(), e.shared.$f_el = null), e.events.trigger("toolbar.focusEditor") !== !1 && (e.events.disableBlur(), e.$el.get(0).focus(), e.events.focus(), e.browser.safari && e.shared.safariSelection)) {
          var n = e.shared.safariSelection, C = n.startContainer, m = n.endContainer, h = n.startOffset, S = n.endOffset, y = e.doc.createRange();
          y.setStart(C, h), y.setEnd(m, S), e.selection.get().removeAllRanges(), e.selection.get().addRange(y), e.shared.safariSelection = null;
        }
      }
      function o(n) {
        n && n.length && (e.events.$on(n, "keydown", function(C) {
          if (!l(C.target).is("a.fr-command, button.fr-command, .fr-group span.fr-command"))
            return !0;
          var m = n.parents(".fr-popup").data("instance") || n.data("instance") || e;
          e.shared.with_kb = !0;
          var h = m.accessibility.exec(C, n);
          return e.shared.with_kb = !1, h;
        }, !0), e.events.$on(n, "mouseenter", "[tabIndex]", function(C) {
          var m = n.parents(".fr-popup").data("instance") || n.data("instance") || e;
          if (!v)
            return C.stopPropagation(), void C.preventDefault();
          var h = l(C.currentTarget);
          m.shared.$f_el && m.shared.$f_el.not(h) && m.accessibility.focusEditor();
        }, !0), e.$tb && e.events.$on(e.$tb, "transitionend", ".fr-more-toolbar", function() {
          e.shared.$f_el = l(document.activeElement);
        }));
      }
      function i(n) {
        var C = n.data("popup-button");
        C && setTimeout(function() {
          c(C), n.data("popup-button", null);
        }, 0);
      }
      function p(n) {
        var C = e.popups.areVisible(n);
        C && C.data("popup-button", null);
      }
      function s(n) {
        var C = navigator.userAgent.indexOf("Mac OS X") !== -1 ? n.metaKey : n.ctrlKey;
        if (n.which !== a.KEYCODE.F10 || C || n.shiftKey || !n.altKey)
          return !0;
        e.shared.with_kb = !0;
        var m = e.popups.areVisible(e), h = !1;
        return m && (h = b(m.children().not(".fr-buttons"))), h || u(), e.shared.with_kb = !1, n.preventDefault(), n.stopPropagation(), !1;
      }
      return { _init: function() {
        e.$wp ? e.events.on("keydown", s, !0) : e.events.$on(e.$win, "keydown", s, !0), e.events.on("mousedown", function(C) {
          p(e), e.shared.$f_el && e.el.isSameNode(e.shared.$f_el[0]) && (e.accessibility.restoreSelection(), C.stopPropagation(), e.events.disableBlur(), e.shared.$f_el = null);
        }, !0), e.events.on("blur", function() {
          e.shared.$f_el = null, p(e);
        }, !0);
      }, registerPopup: function(C) {
        var m = e.popups.get(C), h = function(y) {
          var M = e.popups.get(y);
          return { _tiKeydown: function(O) {
            var H = M.data("instance") || e;
            if (H.events.trigger("popup.tab", [O]) === !1)
              return !1;
            var _ = O.which, D = M.find(":focus").first();
            if (a.KEYCODE.TAB === _) {
              O.preventDefault();
              var w = M.children().not(".fr-buttons"), R = w.findVisible("input, textarea, button, select").not(".fr-no-touch input, .fr-no-touch textarea, .fr-no-touch button, .fr-no-touch select, :disabled").toArray(), B = R.indexOf(this) + (O.shiftKey ? -1 : 1);
              if (0 <= B && B < R.length)
                return H.events.disableBlur(), l(R[B]).focus(), O.stopPropagation(), !1;
              var I = M.find(".fr-buttons");
              if (I.length && N(I, !!O.shiftKey) || b(w))
                return O.stopPropagation(), !1;
            } else {
              if (a.KEYCODE.ENTER !== _ || !O.target || O.target.tagName === "TEXTAREA")
                return a.KEYCODE.ESC === _ ? (O.preventDefault(), O.stopPropagation(), H.accessibility.restoreSelection(), H.popups.isVisible(y) && M.findVisible(".fr-back").length ? (H.opts.toolbarInline && (H.events.disableBlur(), H.events.focus()), H.button.exec(M.findVisible(".fr-back").first()), i(M)) : H.popups.isVisible(y) && M.findVisible(".fr-dismiss").length ? H.button.exec(M.findVisible(".fr-dismiss").first()) : (H.popups.hide(y), H.opts.toolbarInline && H.toolbar.showInline(null, !0), i(M)), !1) : a.KEYCODE.SPACE === _ && (D.is(".fr-submit") || D.is(".fr-dismiss")) ? (O.preventDefault(), O.stopPropagation(), H.events.disableBlur(), H.button.exec(D), !0) : H.keys.isBrowserAction(O) || D.is("input[type=text], textarea") || a.KEYCODE.SPACE === _ && (D.is(".fr-link-attr") || D.is("input[type=file]")) ? void O.stopPropagation() : (O.stopPropagation(), O.preventDefault(), !1);
              var U = null;
              0 < M.findVisible(".fr-submit").length ? U = M.findVisible(".fr-submit").first() : M.findVisible(".fr-dismiss").length && (U = M.findVisible(".fr-dismiss").first()), U && (O.preventDefault(), O.stopPropagation(), H.events.disableBlur(), H.button.exec(U));
            }
          }, _tiMouseenter: function() {
            var O = M.data("instance") || e;
            p(O);
          } };
        }(C);
        o(m.find(".fr-buttons")), e.events.$on(m, "mouseenter", "tabIndex", h._tiMouseenter, !0), e.events.$on(m.children().not(".fr-buttons"), "keydown", "[tabIndex]", h._tiKeydown, !0), e.popups.onHide(C, function() {
          (m.data("instance") || e).accessibility.restoreSelection();
        }), e.popups.onShow(C, function() {
          v = !1, setTimeout(function() {
            v = !0;
          }, 0);
        });
      }, registerToolbar: o, focusToolbarElement: c, focusToolbar: N, focusContent: b, focusPopup: function(C) {
        var m = C.children().not(".fr-buttons");
        m.data("mouseenter-event-set") || (e.events.$on(m, "mouseenter", "[tabIndex]", function(h) {
          var S = C.data("instance") || e;
          if (!v)
            return h.stopPropagation(), void h.preventDefault();
          var y = m.find(":focus").first();
          y.length && !y.is("input, button, textarea, select") && (S.events.disableBlur(), y.blur(), S.events.disableBlur(), S.events.focus());
        }), m.data("mouseenter-event-set", !0)), !b(m) && e.shared.with_kb && N(C.find(".fr-buttons"));
      }, focusModal: function(C) {
        e.core.hasFocus() || (e.events.disableBlur(), e.events.focus()), e.accessibility.saveSelection(), e.events.disableBlur(), e.el.blur(), e.selection.clear(), e.events.disableBlur(), e.shared.with_kb ? C.find(".fr-command[tabIndex], [tabIndex]").first().focus() : C.find("[tabIndex]").first().focus();
      }, focusEditor: r, focusPopupButton: i, focusModalButton: function(C) {
        var m = C.data("modal-button");
        m && setTimeout(function() {
          c(m), C.data("modal-button", null);
        }, 0);
      }, hasFocus: function() {
        return e.shared.$f_el !== null;
      }, exec: function(C, m) {
        var h = navigator.userAgent.indexOf("Mac OS X") !== -1 ? C.metaKey : C.ctrlKey, S = C.which, y = !1;
        return S !== a.KEYCODE.TAB || h || C.shiftKey || C.altKey ? S !== a.KEYCODE.ARROW_RIGHT || h || C.shiftKey || C.altKey ? S !== a.KEYCODE.TAB || h || !C.shiftKey || C.altKey ? S !== a.KEYCODE.ARROW_LEFT || h || C.shiftKey || C.altKey ? S !== a.KEYCODE.ARROW_UP || h || C.shiftKey || C.altKey ? S !== a.KEYCODE.ARROW_DOWN || h || C.shiftKey || C.altKey ? S !== a.KEYCODE.ENTER && S !== a.KEYCODE.SPACE || h || C.shiftKey || C.altKey ? S !== a.KEYCODE.ESC || h || C.shiftKey || C.altKey ? S !== a.KEYCODE.F10 || h || C.shiftKey || !C.altKey || (y = u()) : y = function(O) {
          if (e.shared.$f_el) {
            var H = T();
            return H ? (e.button.click(H), c(H)) : O.parent().findVisible(".fr-back").length ? (e.shared.with_kb = !1, e.opts.toolbarInline && (e.events.disableBlur(), e.events.focus()), e.button.exec(O.parent().findVisible(".fr-back")).first(), i(O.parent())) : e.shared.$f_el.is("button, .fr-group span") && (O.parent().is(".fr-popup") ? (e.accessibility.restoreSelection(), e.shared.$f_el = null, e.events.trigger("toolbar.esc") !== !1 && (e.popups.hide(O.parent()), e.opts.toolbarInline && e.toolbar.showInline(null, !0), i(O.parent()))) : r()), !1;
          }
        }(m) : y = g() : y = function() {
          return e.shared.$f_el && e.shared.$f_el.is(".fr-dropdown:not(.fr-active)") ? g() : d(!0);
        }() : y = function() {
          return d();
        }() : y = k(m) : y = k(m, !0) : y = A(m) : (t = S, y = A(m, !0)), e.shared.$f_el || y !== void 0 || (y = !0), !y && e.keys.isBrowserAction(C) && (y = !0), !!y || (C.preventDefault(), C.stopPropagation(), !1);
      }, saveSelection: f, restoreSelection: function() {
        e.$el.find(".fr-marker").length && (e.events.disableBlur(), e.selection.restore(), e.events.enableBlur());
      } };
    }, Object.assign(a.DEFAULTS, { tooltips: !0 }), a.MODULES.tooltip = function(e) {
      var t = e.$;
      function l() {
        e.helpers.isMobile() || e.$tooltip && e.$tooltip.removeClass("fr-visible").css("left", "-3000px").css("position", "fixed");
      }
      function v(c, N) {
        if (!e.helpers.isMobile()) {
          var L = c.attr("id") && c.attr("id").split("-")[0], b = c.attr("title"), f = e.opts.trackChangesEnabled, u = e.opts.showChangesEnabled;
          if (e.opts.toolbarContainer) {
            for (var T = !1, x = 0; x < a.INSTANCES.length; x++)
              if (a.INSTANCES[x].core.hasFocus()) {
                f = a.INSTANCES[x].opts.trackChangesEnabled, u = a.INSTANCES[x].opts.showChangesEnabled, T = !0;
                break;
              }
            T || (u = f = c.hasClass("fr-active"));
          }
          if (L === "trackChanges")
            b = f ? "Disable Track Changes" : "Enable Track Changes";
          else if (L === "showChanges")
            b = u ? "Hide Changes" : "Show Changes";
          else if ((L === "applyAll" || L === "removeAll" || L === "applyLast" || L === "removeLast") && e.track_changes.getPendingChanges().length === 0)
            return;
          if (c.data("title", b), c.data("title")) {
            e.$tooltip || function() {
              if (e.opts.tooltips && !e.helpers.isMobile()) {
                if (e.shared.$tooltip)
                  e.$tooltip = e.shared.$tooltip;
                else {
                  e.shared.$tooltip = t(e.doc.createElement("DIV")).addClass("fr-tooltip"), e.$tooltip = e.shared.$tooltip, e.opts.theme && e.$tooltip.addClass("".concat(e.opts.theme, "-theme"));
                  var d = {};
                  e.$wp && 0 < e.$wp.length && (d = e.$wp.closest("dialog")), 0 < d.length ? d.first().append(e.$tooltip) : t(e.o_doc).find("body").first().append(e.$tooltip);
                }
                e.events.on("shared.destroy", function() {
                  e.$tooltip.html("").removeData().remove(), e.$tooltip = null;
                }, !0);
              }
            }(), c.removeAttr("title"), e.$tooltip.text(e.language.translate(c.data("title"))), e.$tooltip.addClass("fr-visible");
            var $ = c.offset().left + (c.outerWidth() - e.$tooltip.outerWidth()) / 2;
            $ < 0 && ($ = 0), $ + e.$tooltip.outerWidth() > t(e.o_win).width() && ($ = t(e.o_win).width() - e.$tooltip.outerWidth()), N === void 0 && (N = e.opts.toolbarBottom), c.offset().top - t(window).scrollTop() + c.outerHeight() + 10 >= t(window).height() && (N = !0);
            var E = N ? c.offset().top - e.$tooltip.height() : c.offset().top + c.outerHeight();
            e.$tooltip.css("position", ""), e.$tooltip.css("left", $), e.$tooltip.css("top", Math.ceil(E));
            var A = {};
            e.$wp && 0 < e.$wp.length && (A = e.$wp.closest("dialog")), 0 < A.length ? (e.$tooltip.css("margin-left", -A.first().offset().left), e.$tooltip.css("margin-top", -A.first().offset().top)) : t(e.o_doc).find("body").first().css("position") !== "static" ? (e.$tooltip.css("margin-left", -t(e.o_doc).find("body").first().offset().left), e.$tooltip.css("margin-top", -t(e.o_doc).find("body").first().offset().top)) : (e.$tooltip.css("margin-left", ""), e.$tooltip.css("margin-top", ""));
          }
        }
      }
      return { hide: l, to: v, bind: function(N, L, b) {
        e.opts.tooltips && !e.helpers.isMobile() && (e.events.$on(N, "mouseover", L, function(f) {
          e.node.hasClass(f.currentTarget, "fr-disabled") || e.edit.isDisabled() || v(t(f.currentTarget), b);
        }, !0), e.events.$on(N, "mouseout ".concat(e._mousedown, " ").concat(e._mouseup), L, function() {
          l();
        }, !0));
      } };
    }, a.TOOLBAR_VISIBLE_BUTTONS = 3, a.MODULES.button = function(e) {
      var t = e.$, l = [];
      (e.opts.toolbarInline || e.opts.toolbarContainer) && (e.shared.buttons || (e.shared.buttons = []), l = e.shared.buttons);
      var v = [];
      function c(o, i, p) {
        for (var s = t(), n = 0; n < o.length; n++) {
          var C = t(o[n]);
          if (C.is(i) && (s = s.add(C)), p && C.is(".fr-dropdown")) {
            var m = C.next().find(i);
            s = s.add(m);
          }
        }
        return s;
      }
      function N(o, i) {
        var p, s = t();
        if (!o)
          return s;
        for (p in s = (s = s.add(c(l, o, i))).add(c(v, o, i)), e.shared.popups)
          if (Object.prototype.hasOwnProperty.call(e.shared.popups, p)) {
            var n = e.shared.popups[p].children().find(o);
            s = s.add(n);
          }
        for (p in e.shared.modals)
          if (Object.prototype.hasOwnProperty.call(e.shared.modals, p)) {
            var C = e.shared.modals[p].$modal.find(o);
            s = s.add(C);
          }
        return s;
      }
      function L(o) {
        var i = o.next(), p = e.node.hasClass(o.get(0), "fr-active"), s = N(".fr-dropdown.fr-active").not(o), n = o.parents(".fr-toolbar, .fr-popup").data("instance") || e;
        n.helpers.isIOS() && !n.el.querySelector(".fr-marker") && (n.selection.save(), n.selection.clear(), n.selection.restore()), i.parents(".fr-more-toolbar").addClass("fr-overflow-visible");
        var C = 0, m = 0, h = i.find("> .fr-dropdown-wrapper");
        if (!p) {
          var S = o.data("cmd");
          i.find(".fr-command").removeClass("fr-active").attr("aria-selected", !1), a.COMMANDS[S] && a.COMMANDS[S].refreshOnShow && a.COMMANDS[S].refreshOnShow.apply(n, [o, i]), i.css("left", o.offset().left - o.parents(".fr-btn-wrap, .fr-toolbar, .fr-buttons").offset().left - (e.opts.direction === "rtl" ? i.width() - o.outerWidth() : 0)), i.addClass("test-height"), C = i.outerHeight(), m = e.helpers.getPX(h.css("max-height")), i.removeClass("test-height"), i.css("top", "").css("bottom", "");
          var y = o.outerHeight() / 10;
          if (!e.opts.toolbarBottom && i.offset().top + o.outerHeight() + C < t(e.o_doc).height())
            i.css("top", o.position().top + o.outerHeight() - y);
          else {
            var M = 0, O = o.parents(".fr-more-toolbar");
            0 < O.length && (M = O.first().height()), i.css("bottom", o.parents(".fr-popup, .fr-toolbar").first().height() - M - o.position().top);
          }
        }
        o.addClass("fr-blink").toggleClass("fr-active"), o.hasClass("fr-options") && o.prev().toggleClass("fr-expanded"), o.hasClass("fr-active") ? (i.attr("aria-hidden", !1), o.attr("aria-expanded", !0), function(D, w, R) {
          R <= w && (D.parent().css("overflow", "auto"), D.parent().css("overflow-x", "hidden")), D.css("height", Math.min(w, R));
        }(h, C, m)) : (i.attr("aria-hidden", !0).css("overflow", ""), o.attr("aria-expanded", !1), h.css("height", "")), setTimeout(function() {
          o.removeClass("fr-blink");
        }, 300), i.css("margin-left", ""), i.offset().left + i.outerWidth() > e.$sc.offset().left + e.$sc.width() && i.css("margin-left", -(i.offset().left + i.outerWidth() - e.$sc.offset().left - e.$sc.width())), i.offset().left < e.$sc.offset().left && e.opts.direction === "rtl" && i.css("margin-left", e.$sc.offset().left), s.removeClass("fr-active").attr("aria-expanded", !1).next().attr("aria-hidden", !0).css("overflow", "").find("> .fr-dropdown-wrapper").css("height", ""), s.prev(".fr-expanded").removeClass("fr-expanded"), s.parents(".fr-toolbar:not(.fr-inline)").css("zIndex", ""), o.parents(".fr-popup").length !== 0 || e.opts.toolbarInline || (e.node.hasClass(o.get(0), "fr-active") ? e.$tb.css("zIndex", (e.opts.zIndex || 1) + 4) : e.$tb.css("zIndex", ""));
        var H = i.find("a.fr-command.fr-active").first();
        e.helpers.isMobile() || (H.length ? (e.accessibility.focusToolbarElement(H), h.scrollTop(Math.abs(H.parents(".fr-dropdown-content").offset().top - H.offset().top) - H.offset().top)) : (e.accessibility.focusToolbarElement(o), h.scrollTop(0)));
      }
      function b(o) {
        o.addClass("fr-blink"), setTimeout(function() {
          o.removeClass("fr-blink");
        }, 500);
        for (var i = o.data("cmd"), p = []; o.data("param".concat(p.length + 1)) !== void 0; )
          p.push(o.data("param".concat(p.length + 1)));
        var s = N(".fr-dropdown.fr-active");
        s.length && (s.removeClass("fr-active").attr("aria-expanded", !1).next().attr("aria-hidden", !0).css("overflow", "").find("> .fr-dropdown-wrapper").css("height", ""), s.prev(".fr-expanded").removeClass("fr-expanded"), s.parents(".fr-toolbar:not(.fr-inline)").css("zIndex", "")), o.parents(".fr-popup, .fr-toolbar").data("instance").commands.exec(i, p);
      }
      function f(o) {
        var i = o.parents(".fr-popup, .fr-toolbar").data("instance"), p = e.popups.get("link.insert");
        if (o.parents(".fr-popup").length === 0 && o.data("popup") && !o.hasClass("fr-btn-active-popup") && (o.attr("id") === "insertLink-".concat(e.id) && p && p.hasClass("fr-active") || o.addClass("fr-btn-active-popup")), o.parents(".fr-popup").length !== 0 || o.data("popup") || i.popups.hideAll(), i.popups.areVisible() && !i.popups.areVisible(i)) {
          for (var s = 0; s < a.INSTANCES.length; s++)
            a.INSTANCES[s] !== i && a.INSTANCES[s].popups && a.INSTANCES[s].popups.areVisible() && a.INSTANCES[s].$el.find(".fr-marker").remove();
          i.popups.hideAll();
        }
        e.node.hasClass(o.get(0), "fr-dropdown") ? L(o) : (function(C) {
          b(C);
        }(o), a.COMMANDS[o.data("cmd")] && a.COMMANDS[o.data("cmd")].refreshAfterCallback !== !1 && i.button.bulkRefresh());
      }
      function u(o) {
        f(t(o.currentTarget));
      }
      function T(o) {
        var i = o.find(".fr-dropdown.fr-active");
        i.length && (i.removeClass("fr-active").attr("aria-expanded", !1).next().attr("aria-hidden", !0).css("overflow", "").find("> .fr-dropdown-wrapper").css("height", ""), i.parents(".fr-toolbar:not(.fr-inline)").css("zIndex", ""), i.prev().removeClass("fr-expanded"));
      }
      function x(o) {
        o.preventDefault(), o.stopPropagation();
      }
      function $(o) {
        if (o.stopPropagation(), !e.helpers.isMobile())
          return !1;
      }
      function E(o) {
        var i = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, p = 2 < arguments.length ? arguments[2] : void 0;
        if (e.helpers.isMobile() && i.showOnMobile === !1)
          return "";
        var s = i.displaySelection;
        typeof s == "function" && (s = s(e));
        var n = "";
        if (i.type !== "options")
          if (s) {
            var C = typeof i.defaultSelection == "function" ? i.defaultSelection(e) : i.defaultSelection;
            n = '<span style="width:'.concat(i.displaySelectionWidth || 100, 'px">').concat(e.language.translate(C || i.title), "</span>");
          } else
            n = e.icon.create(i.icon || o), n += '<span class="fr-sr-only">'.concat(e.language.translate(i.title) || "", "</span>");
        var m = i.popup ? ' data-popup="true"' : "", h = i.modal ? ' data-modal="true"' : "", S = e.shortcuts.get("".concat(o, "."));
        S = S ? " (".concat(S, ")") : "";
        var y = "".concat(o, "-").concat(e.id), M = "dropdown-menu-".concat(y), O = '<button id="'.concat(y, '"').concat(i.more_btn ? ' data-group-name="'.concat(y, '" ') : "", 'type="button" tabIndex="-1" role="button"').concat(i.toggle ? ' aria-pressed="false"' : "").concat(i.type === "dropdown" || i.type === "options" ? ' aria-controls="'.concat(M, '" aria-expanded="false" aria-haspopup="true"') : "").concat(i.disabled ? ' aria-disabled="true"' : "", ' title="').concat(e.language.translate(i.title) || "").concat(S, '" class="fr-command fr-btn').concat(i.type === "dropdown" || i.type == "options" ? " fr-dropdown" : "").concat(i.type == "options" ? " fr-options" : "").concat(i.type == "more" ? " fr-more" : "").concat(i.displaySelection ? " fr-selection" : "").concat(i.back ? " fr-back" : "").concat(i.disabled ? " fr-disabled" : "").concat(p ? "" : " fr-hidden", '" data-cmd="').concat(o, '"').concat(m).concat(h, ">").concat(n, "</button>");
        if (i.type === "dropdown" || i.type === "options") {
          var H = '<div id="'.concat(M, '" class="fr-dropdown-menu" role="listbox" aria-labelledby="').concat(y, '" aria-hidden="true"><div class="fr-dropdown-wrapper" role="presentation"><div class="fr-dropdown-content" role="presentation">');
          H += function(D, w) {
            var R = "";
            if (w.html)
              typeof w.html == "function" ? R += w.html.call(e) : R += w.html;
            else {
              var B = w.options;
              for (var I in typeof B == "function" && (B = B()), R += '<ul class="fr-dropdown-list" role="presentation">', B)
                Object.prototype.hasOwnProperty.call(B, I) && (e.shortcuts.get("".concat(D, ".").concat(I)), R += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="'.concat(w.type === "options" ? D.replace(/Options/g, "") : D, '" data-param1="').concat(I, '" title="').concat(B[I], '">').concat(e.language.translate(B[I]), "</a></li>"));
              R += "</ul>";
            }
            return R;
          }(o, i), O += H += "</div></div></div>";
        }
        return i.hasOptions && i.hasOptions.apply(e) && (O = '<div class="fr-btn-wrap">'.concat(O, " ").concat(E(o + "Options", Object.assign({}, i, { type: "options", hasOptions: !1 }), p), "  </div>")), O;
      }
      function A(o) {
        var i = e.$tb && e.$tb.data("instance") || e;
        if (e.events.trigger("buttons.refresh") === !1)
          return !0;
        setTimeout(function() {
          for (var p = i.selection.inEditor() && i.core.hasFocus(), s = 0; s < o.length; s++) {
            var n = t(o[s]), C = n.data("cmd");
            n.parents(".fr-popup").length === 0 ? p || a.COMMANDS[C] && a.COMMANDS[C].forcedRefresh ? i.button.refresh(n) : e.node.hasClass(n.get(0), "fr-dropdown") || (n.removeClass("fr-active"), n.attr("aria-pressed") && n.attr("aria-pressed", !1)) : n.parents(".fr-popup").isVisible() && i.button.refresh(n);
          }
        }, 0);
      }
      function k() {
        A(l), A(v);
      }
      function d() {
        l = [], v = [];
      }
      e.shared.popup_buttons || (e.shared.popup_buttons = []), v = e.shared.popup_buttons;
      var g = null;
      function r() {
        clearTimeout(g), g = setTimeout(k, 50);
      }
      return { _init: function() {
        e.opts.toolbarInline ? e.events.on("toolbar.show", k) : (e.events.on("mouseup", r), e.events.on("keyup", r), e.events.on("blur", r), e.events.on("focus", r), e.events.on("contentChanged", r), e.helpers.isMobile() && e.events.$on(e.$doc, "selectionchange", k)), e.events.on("shared.destroy", d);
      }, build: E, buildList: function(i, p) {
        for (var s = "", n = 0; n < i.length; n++) {
          var C = i[n], m = a.COMMANDS[C];
          m && typeof m.plugin < "u" && e.opts.pluginsEnabled.indexOf(m.plugin) < 0 || (m ? s += E(C, m, p === void 0 || 0 <= p.indexOf(C)) : C === "|" ? s += '<div class="fr-separator fr-vs" role="separator" aria-orientation="vertical"></div>' : C === "-" && (s += '<div class="fr-separator fr-hs" role="separator" aria-orientation="horizontal"></div>'));
        }
        return s;
      }, buildGroup: function(i) {
        var p = "", s = "";
        for (var n in i) {
          var C = i[n];
          if (C.buttons) {
            for (var m = "", h = "", S = 0, y = "left", M = a.TOOLBAR_VISIBLE_BUTTONS, O = 0; O < C.buttons.length; O++) {
              var H = C.buttons[O], _ = a.COMMANDS[H];
              _ || (H == "|" ? m += '<div class="fr-separator fr-vs" role="separator" aria-orientation="vertical"></div>' : H == "-" && (m += '<div class="fr-separator fr-hs" role="separator" aria-orientation="horizontal"></div>')), !_ || _ && typeof _.plugin < "u" && e.opts.pluginsEnabled.indexOf(_.plugin) < 0 || (i[n].align !== void 0 && (y = i[n].align), i[n].buttonsVisible !== void 0 && (M = i[n].buttonsVisible), i.showMoreButtons && M <= S ? h += E(H, _, !0) : m += E(H, _, !0), S++);
            }
            if (i.showMoreButtons && M < S) {
              var D = n, w = a.COMMANDS[D];
              w.more_btn = !0, m += E(D, w, !0);
            }
            n !== "trackChanges" && (p += '<div class="fr-btn-grp fr-float-'.concat(y, '">').concat(m, "</div>")), i.showMoreButtons && 0 < h.length && (s += '<div class="fr-more-toolbar" data-name="'.concat(n + "-" + e.id, '">').concat(h, "</div>"));
          }
        }
        return e.opts.toolbarBottom ? e.helpers.isMobile() ? '<div class="fr-bottom-extended">'.concat(s, "</div><div>").concat(p, "</div>") : "".concat(s, '<div class="fr-newline"></div>').concat(p) : "".concat(p, '<div class="fr-newline"></div>').concat(s);
      }, bindCommands: function(i, p) {
        e.events.bindClick(i, ".fr-command:not(.fr-disabled)", u), e.events.$on(i, "".concat(e._mousedown, " ").concat(e._mouseup, " ").concat(e._move), ".fr-dropdown-menu", x, !0), e.events.$on(i, "".concat(e._mousedown, " ").concat(e._mouseup, " ").concat(e._move), ".fr-dropdown-menu .fr-dropdown-wrapper", $, !0);
        var s = i.get(0).ownerDocument, n = "defaultView" in s ? s.defaultView : s.parentWindow;
        function C(m) {
          (!m || m.type === e._mouseup && m.target !== t("html").get(0) || m.type === "keydown" && (e.keys.isCharacter(m.which) && !e.keys.ctrlKey(m) || m.which === a.KEYCODE.ESC)) && (T(i), e.opts.iframe && function(S) {
            var y = S.find(".fr-popup.fr-active");
            if (y.length) {
              y.removeClass("fr-active").attr("aria-expanded", !1).next().attr("aria-hidden", !0).css("overflow", "").find("> .fr-dropdown-wrapper").css("height", ""), y.parents(".fr-toolbar:not(.fr-inline)").css("zIndex", ""), y.prev().removeClass("fr-expanded");
              var M = e.$tb.find(".fr-btn-active-popup");
              t(M[0]).removeClass("fr-btn-active-popup");
            }
          }(i));
        }
        e.events.$on(t(n), "".concat(e._mouseup, " resize keydown"), C, !0), e.opts.iframe && e.events.$on(e.$win, e._mouseup, C, !0), e.node.hasClass(i.get(0), "fr-popup") ? t.merge(v, i.find(".fr-btn").toArray()) : t.merge(l, i.find(".fr-btn").toArray()), e.tooltip.bind(i, ".fr-btn, .fr-title", p);
      }, refresh: function(i) {
        var p, s = i.parents(".fr-popup, .fr-toolbar").data("instance") || e, n = i.data("cmd");
        e.node.hasClass(i.get(0), "fr-dropdown") ? p = i.next() : (i.removeClass("fr-active"), i.attr("aria-pressed") && i.attr("aria-pressed", !1)), a.COMMANDS[n] && a.COMMANDS[n].refresh ? a.COMMANDS[n].refresh.apply(s, [i, p]) : e.refresh[n] && s.refresh[n](i, p);
      }, bulkRefresh: k, exec: b, click: f, hideActiveDropdowns: T, addButtons: function(i) {
        for (var p = 0; p < i.length; p++)
          l.push(i[p]);
      }, getButtons: N, getPosition: function(i) {
        var p = i.offset().left, s = e.opts.toolbarBottom ? 10 : i.outerHeight() - 10;
        return { left: p, top: i.offset().top + s };
      } };
    }, a.ICON_TEMPLATES = { font_awesome: '<i class="fa fa-[NAME]" aria-hidden="true"></i>', font_awesome_5: '<i class="fas fa-[FA5NAME]" aria-hidden="true"></i>', font_awesome_5r: '<i class="far fa-[FA5NAME]" aria-hidden="true"></i>', font_awesome_5l: '<i class="fal fa-[FA5NAME]" aria-hidden="true"></i>', font_awesome_5b: '<i class="fab fa-[FA5NAME]" aria-hidden="true"></i>', text: '<span style="text-align: center;">[NAME]</span>', image: "<img src=[SRC] alt=[ALT] />", svg: '<svg class="fr-svg" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="[PATH]"/></svg>', empty: " " }, a.ICONS = { bold: { NAME: "bold", SVG_KEY: "bold" }, italic: { NAME: "italic", SVG_KEY: "italic" }, underline: { NAME: "underline", SVG_KEY: "underline" }, strikeThrough: { NAME: "strikethrough", SVG_KEY: "strikeThrough" }, subscript: { NAME: "subscript", SVG_KEY: "subscript" }, superscript: { NAME: "superscript", SVG_KEY: "superscript" }, cancel: { NAME: "cancel", SVG_KEY: "cancel" }, color: { NAME: "tint", SVG_KEY: "textColor" }, outdent: { NAME: "outdent", SVG_KEY: "outdent" }, indent: { NAME: "indent", SVG_KEY: "indent" }, undo: { NAME: "rotate-left", FA5NAME: "undo", SVG_KEY: "undo" }, redo: { NAME: "rotate-right", FA5NAME: "redo", SVG_KEY: "redo" }, insert: { NAME: "insert", SVG_KEY: "insert" }, insertAll: { NAME: "insertAll", SVG_KEY: "insertAll" }, insertHR: { NAME: "minus", SVG_KEY: "horizontalLine" }, clearFormatting: { NAME: "eraser", SVG_KEY: "clearFormatting" }, selectAll: { NAME: "mouse-pointer", SVG_KEY: "selectAll" }, minimize: { NAME: "minimize", SVG_KEY: "minimize" }, moreText: { NAME: "ellipsis-v", SVG_KEY: "textMore" }, moreParagraph: { NAME: "ellipsis-v", SVG_KEY: "paragraphMore" }, moreRich: { NAME: "ellipsis-v", SVG_KEY: "insertMore" }, moreMisc: { NAME: "ellipsis-v", SVG_KEY: "more" } }, a.DefineIconTemplate = function(e, t) {
      a.ICON_TEMPLATES[e] = t;
    }, a.DefineIcon = function(e, t) {
      a.ICONS[e] = t;
    }, Object.assign(a.DEFAULTS, { iconsTemplate: "svg" }), a.MODULES.icon = function(e) {
      return { create: function(l) {
        var v = null, c = a.ICONS[l];
        if (c !== void 0) {
          var N = c.template || a.ICON_DEFAULT_TEMPLATE || e.opts.iconsTemplate;
          N && N.apply && (N = N.apply(e)), c.FA5NAME || (c.FA5NAME = c.NAME), N !== "svg" || c.PATH || (c.PATH = a.SVG[c.SVG_KEY] || ""), N && (N = a.ICON_TEMPLATES[N]) && (v = N.replace(/\[([a-zA-Z0-9]*)\]/g, function(L, b) {
            return b === "NAME" ? c[b] || l : c[b];
          }));
        }
        return v || l;
      }, getTemplate: function(l) {
        var v = a.ICONS[l], c = e.opts.iconsTemplate;
        return v !== void 0 ? c = v.template || a.ICON_DEFAULT_TEMPLATE || e.opts.iconsTemplate : c;
      }, getFileIcon: function(l) {
        var v = a.FILEICONS[l];
        return v !== void 0 ? v : l;
      } };
    }, a.SVG = { add: "M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z", advancedImageEditor: "M3,17v2h6v-2H3z M3,5v2h10V5H3z M13,21v-2h8v-2h-8v-2h-2v6H13z M7,9v2H3v2h4v2h2V9H7z M21,13v-2H11v2H21z M15,9h2V7h4V5h-4  V3h-2V9z", alignCenter: "M9,18h6v-2H9V18z M6,11v2h12v-2H6z M3,6v2h18V6H3z", alignJustify: "M3,18h18v-2H3V18z M3,11v2h18v-2H3z M3,6v2h18V6H3z", alignLeft: "M3,18h6v-2H3V18z M3,11v2h12v-2H3z M3,6v2h18V6H3z", alignRight: "M15,18h6v-2h-6V18z M9,11v2h12v-2H9z M3,6v2h18V6H3z", anchors: "M16,4h-4H8C6.9,4,6,4.9,6,6v4v10l6-2.6l6,2.6V10V6C18,4.9,17.1,4,16,4z M16,17l-4-1.8L8,17v-7V6h4h4v4V17z", autoplay: "M 7.570312 0.292969 C 7.542969 0.292969 7.515625 0.292969 7.488281 0.296875 C 7.203125 0.324219 6.984375 0.539062 6.980469 0.792969 L 6.925781 3.535156 C 2.796875 3.808594 -0.0078125 6.425781 -0.0859375 10.09375 C -0.121094 11.96875 0.710938 13.6875 2.265625 14.921875 C 3.769531 16.117188 5.839844 16.796875 8.097656 16.828125 C 8.140625 16.828125 12.835938 16.898438 13.035156 16.886719 C 15.171875 16.796875 17.136719 16.128906 18.558594 15.003906 C 20.066406 13.816406 20.882812 12.226562 20.917969 10.40625 C 20.960938 8.410156 20.023438 6.605469 18.289062 5.335938 C 18.214844 5.277344 18.128906 5.230469 18.035156 5.203125 C 17.636719 5.074219 17.222656 5.199219 17 5.476562 L 15.546875 7.308594 C 15.304688 7.609375 15.363281 8.007812 15.664062 8.265625 C 16.351562 8.851562 16.707031 9.625 16.6875 10.5 C 16.652344 12.25 15.070312 13.390625 12.757812 13.535156 C 12.59375 13.539062 8.527344 13.472656 8.164062 13.464844 C 5.703125 13.429688 4.101562 12.191406 4.140625 10.3125 C 4.175781 8.570312 5.132812 7.46875 6.847656 7.199219 L 6.796875 9.738281 C 6.792969 9.992188 7 10.214844 7.285156 10.253906 C 7.3125 10.257812 7.339844 10.257812 7.367188 10.257812 C 7.503906 10.261719 7.632812 10.222656 7.738281 10.148438 L 14.039062 5.785156 C 14.171875 5.691406 14.253906 5.558594 14.253906 5.410156 C 14.257812 5.261719 14.1875 5.125 14.058594 5.027344 L 7.941406 0.414062 C 7.835938 0.335938 7.707031 0.292969 7.570312 0.292969 ", back: "M20 11L7.83 11 11.425 7.405 10.01 5.991 5.416 10.586 5.414 10.584 4 11.998 4.002 12 4 12.002 5.414 13.416 5.416 13.414 10.01 18.009 11.425 16.595 7.83 13 20 13 20 13 20 11 20 11Z", backgroundColor: "M9.91752,12.24082l7.74791-5.39017,1.17942,1.29591-6.094,7.20747L9.91752,12.24082M7.58741,12.652l4.53533,4.98327a.93412.93412,0,0,0,1.39531-.0909L20.96943,8.7314A.90827.90827,0,0,0,20.99075,7.533l-2.513-2.76116a.90827.90827,0,0,0-1.19509-.09132L7.809,11.27135A.93412.93412,0,0,0,7.58741,12.652ZM2.7939,18.52772,8.41126,19.5l1.47913-1.34617-3.02889-3.328Z", blockquote: "M10.31788,5l.93817,1.3226A12.88271,12.88271,0,0,0,8.1653,9.40125a5.54242,5.54242,0,0,0-.998,3.07866v.33733q.36089-.04773.66067-.084a4.75723,4.75723,0,0,1,.56519-.03691,2.87044,2.87044,0,0,1,2.11693.8427,2.8416,2.8416,0,0,1,.8427,2.09274,3.37183,3.37183,0,0,1-.8898,2.453A3.143,3.143,0,0,1,8.10547,19,3.40532,3.40532,0,0,1,5.375,17.7245,4.91156,4.91156,0,0,1,4.30442,14.453,9.3672,9.3672,0,0,1,5.82051,9.32933,14.75716,14.75716,0,0,1,10.31788,5Zm8.39243,0,.9369,1.3226a12.88289,12.88289,0,0,0-3.09075,3.07865,5.54241,5.54241,0,0,0-.998,3.07866v.33733q.33606-.04773.63775-.084a4.91773,4.91773,0,0,1,.58938-.03691,2.8043,2.8043,0,0,1,2.1042.83,2.89952,2.89952,0,0,1,.80578,2.10547,3.42336,3.42336,0,0,1-.86561,2.453A3.06291,3.06291,0,0,1,16.49664,19,3.47924,3.47924,0,0,1,13.742,17.7245,4.846,4.846,0,0,1,12.64721,14.453,9.25867,9.25867,0,0,1,14.17476,9.3898,15.26076,15.26076,0,0,1,18.71031,5Z", bold: "M15.25,11.8h0A3.68,3.68,0,0,0,17,9a3.93,3.93,0,0,0-3.86-4H6.65V19h7a3.74,3.74,0,0,0,3.7-3.78V15.1A3.64,3.64,0,0,0,15.25,11.8ZM8.65,7h4.2a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61,2.23,2.23,0,0,1-.63.09H8.65Zm4.6,10H8.65V13h4.6a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61A2.23,2.23,0,0,1,13.25,17Z", cancel: "M13.4,12l5.6,5.6L17.6,19L12,13.4L6.4,19L5,17.6l5.6-5.6L5,6.4L6.4,5l5.6,5.6L17.6,5L19,6.4L13.4,12z", cellBackground: "M16.6,12.4L7.6,3.5L6.2,4.9l2.4,2.4l-5.2,5.2c-0.6,0.6-0.6,1.5,0,2.1l5.5,5.5c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4  l5.5-5.5C17.2,14,17.2,13,16.6,12.4z M5.2,13.5L10,8.7l4.8,4.8H5.2z M19,15c0,0-2,2.2-2,3.5c0,1.1,0.9,2,2,2s2-0.9,2-2  C21,17.2,19,15,19,15z", cellBorderColor: "M22,22H2v2h20V22z", cellOptions: "M20,5H4C2.9,5,2,5.9,2,7v10c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M9.5,6.5h5V9h-5V6.5z M8,17.5H4  c-0.3,0-0.5-0.2-0.5-0.4c0,0,0,0,0,0V17v-2H8V17.5z M8,13.5H3.5v-3H8V13.5z M8,9H3.5V7c0-0.3,0.2-0.5,0.4-0.5c0,0,0,0,0,0H8V9z   M14.5,17.5h-5V15h5V17.5z M20.5,17c0,0.3-0.2,0.5-0.4,0.5c0,0,0,0,0,0H16V15h4.5V17z M20.5,13.5H16v-3h4.5V13.5z M20.5,9H16V6.5h4  c0.3,0,0.5,0.2,0.5,0.4c0,0,0,0,0,0V9z", cellStyle: "M20,19.9l0.9,3.6l-3.2-1.9l-3.3,1.9l0.8-3.6L12.3,17h3.8l1.7-3.5l1.4,3.5H23L20,19.9z M20,5H4C2.9,5,2,5.9,2,7v10  c0,1.1,0.9,2,2,2h7.5l-0.6-0.6L10,17.5H9.5V15h5.4l1.1-2.3v-2.2h4.5v3H20l0.6,1.5H22V7C22,5.9,21.1,5,20,5z M3.5,7  c0-0.3,0.2-0.5,0.4-0.5c0,0,0,0,0.1,0h4V9H3.5V7z M3.5,10.5H8v3H3.5V10.5z M4,17.5c-0.3,0-0.5-0.2-0.5-0.4c0,0,0,0,0-0.1v-2H8v2.5H4  z M14.5,9h-5V6.5h5V9z M20.5,9H16V6.5h4c0.3,0,0.5,0.2,0.5,0.4c0,0,0,0,0,0.1V9z", clearFormatting: "M11.48,10.09l-1.2-1.21L8.8,7.41,6.43,5,5.37,6.1,8.25,9,4.66,19h2l1.43-4h5.14l1.43,4h2l-.89-2.51L18.27,19l1.07-1.06L14.59,13.2ZM8.8,13l.92-2.56L12.27,13Zm.56-7.15L9.66,5h2l1.75,4.9Z", close: "M13.4,12l5.6,5.6L17.6,19L12,13.4L6.4,19L5,17.6l5.6-5.6L5,6.4L6.4,5l5.6,5.6L17.6,5L19,6.4L13.4,12z", codeView: "M9.4,16.6,4.8,12,9.4,7.4,8,6,2,12l6,6Zm5.2,0L19.2,12,14.6,7.4,16,6l6,6-6,6Z", cogs: "M18.877 12.907a6.459 6.459 0 0 0 0 -1.814l1.952 -1.526a0.468 0.468 0 0 0 0.111 -0.593l-1.851 -3.2a0.461 0.461 0 0 0 -0.407 -0.231 0.421 0.421 0 0 0 -0.157 0.028l-2.3 0.925a6.755 6.755 0 0 0 -1.563 -0.907l-0.352 -2.452a0.451 0.451 0 0 0 -0.453 -0.388h-3.7a0.451 0.451 0 0 0 -0.454 0.388L9.347 5.588A7.077 7.077 0 0 0 7.783 6.5l-2.3 -0.925a0.508 0.508 0 0 0 -0.166 -0.028 0.457 0.457 0 0 0 -0.4 0.231l-1.851 3.2a0.457 0.457 0 0 0 0.111 0.593l1.952 1.526A7.348 7.348 0 0 0 5.063 12a7.348 7.348 0 0 0 0.064 0.907L3.175 14.433a0.468 0.468 0 0 0 -0.111 0.593l1.851 3.2a0.461 0.461 0 0 0 0.407 0.231 0.421 0.421 0 0 0 0.157 -0.028l2.3 -0.925a6.74 6.74 0 0 0 1.564 0.907L9.7 20.864a0.451 0.451 0 0 0 0.454 0.388h3.7a0.451 0.451 0 0 0 0.453 -0.388l0.352 -2.452a7.093 7.093 0 0 0 1.563 -0.907l2.3 0.925a0.513 0.513 0 0 0 0.167 0.028 0.457 0.457 0 0 0 0.4 -0.231l1.851 -3.2a0.468 0.468 0 0 0 -0.111 -0.593Zm-0.09 2.029l-0.854 1.476 -2.117 -0.852 -0.673 0.508a5.426 5.426 0 0 1 -1.164 0.679l-0.795 0.323 -0.33 2.269h-1.7l-0.32 -2.269 -0.793 -0.322a5.3 5.3 0 0 1 -1.147 -0.662L8.2 15.56l-2.133 0.86 -0.854 -1.475 1.806 -1.411 -0.1 -0.847c-0.028 -0.292 -0.046 -0.5 -0.046 -0.687s0.018 -0.4 0.045 -0.672l0.106 -0.854L5.217 9.064l0.854 -1.475 2.117 0.851 0.673 -0.508a5.426 5.426 0 0 1 1.164 -0.679l0.8 -0.323 0.331 -2.269h1.7l0.321 2.269 0.792 0.322a5.3 5.3 0 0 1 1.148 0.661l0.684 0.526 2.133 -0.859 0.853 1.473 -1.8 1.421 0.1 0.847a5 5 0 0 1 0.046 0.679c0 0.193 -0.018 0.4 -0.045 0.672l-0.106 0.853ZM12 14.544A2.544 2.544 0 1 1 14.546 12 2.552 2.552 0 0 1 12 14.544Z", columns: "M20,5H4C2.9,5,2,5.9,2,7v10c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M8,17.5H4c-0.3,0-0.5-0.2-0.5-0.4  c0,0,0,0,0,0V17v-2H8V17.5z M8,13.5H3.5v-3H8V13.5z M8,9H3.5V7c0-0.3,0.2-0.5,0.4-0.5c0,0,0,0,0,0H8V9z M20.5,17  c0,0.3-0.2,0.5-0.4,0.5c0,0,0,0,0,0H16V15h4.5V17z M20.5,13.5H16v-3h4.5V13.5z M20.5,9H16V6.5h4c0.3,0,0.5,0.2,0.5,0.4c0,0,0,0,0,0  V9z", edit: "M17,11.2L12.8,7L5,14.8V19h4.2L17,11.2z M7,16.8v-1.5l5.6-5.6l1.4,1.5l-5.6,5.6H7z M13.5,6.3l0.7-0.7c0.8-0.8,2.1-0.8,2.8,0  c0,0,0,0,0,0L18.4,7c0.8,0.8,0.8,2,0,2.8l-0.7,0.7L13.5,6.3z", exitFullscreen: "M5,16H8v3h2V14H5ZM8,8H5v2h5V5H8Zm6,11h2V16h3V14H14ZM16,8V5H14v5h5V8Z", fileInsert: "M 8.09375 12.75 L 5.90625 12.75 C 5.542969 12.75 5.25 12.394531 5.25 11.953125 L 5.25 6.375 L 2.851562 6.375 C 2.367188 6.375 2.121094 5.660156 2.464844 5.242188 L 6.625 0.1875 C 6.832031 -0.0585938 7.167969 -0.0585938 7.371094 0.1875 L 11.535156 5.242188 C 11.878906 5.660156 11.632812 6.375 11.148438 6.375 L 8.75 6.375 L 8.75 11.953125 C 8.75 12.394531 8.457031 12.75 8.09375 12.75 Z M 14 12.484375 L 14 16.203125 C 14 16.644531 13.707031 17 13.34375 17 L 0.65625 17 C 0.292969 17 0 16.644531 0 16.203125 L 0 12.484375 C 0 12.042969 0.292969 11.6875 0.65625 11.6875 L 4.375 11.6875 L 4.375 11.953125 C 4.375 12.980469 5.0625 13.8125 5.90625 13.8125 L 8.09375 13.8125 C 8.9375 13.8125 9.625 12.980469 9.625 11.953125 L 9.625 11.6875 L 13.34375 11.6875 C 13.707031 11.6875 14 12.042969 14 12.484375 Z M 10.609375 15.40625 C 10.609375 15.039062 10.363281 14.742188 10.0625 14.742188 C 9.761719 14.742188 9.515625 15.039062 9.515625 15.40625 C 9.515625 15.773438 9.761719 16.070312 10.0625 16.070312 C 10.363281 16.070312 10.609375 15.773438 10.609375 15.40625 Z M 12.359375 15.40625 C 12.359375 15.039062 12.113281 14.742188 11.8125 14.742188 C 11.511719 14.742188 11.265625 15.039062 11.265625 15.40625 C 11.265625 15.773438 11.511719 16.070312 11.8125 16.070312 C 12.113281 16.070312 12.359375 15.773438 12.359375 15.40625 Z M 12.359375 15.40625 ", fileManager: "M 0 5.625 L 20.996094 5.625 L 21 15.75 C 21 16.371094 20.410156 16.875 19.6875 16.875 L 1.3125 16.875 C 0.585938 16.875 0 16.371094 0 15.75 Z M 0 5.625 M 21 4.5 L 0 4.5 L 0 2.25 C 0 1.628906 0.585938 1.125 1.3125 1.125 L 6.921875 1.125 C 7.480469 1.125 8.015625 1.316406 8.40625 1.652344 L 9.800781 2.847656 C 10.195312 3.183594 10.730469 3.375 11.289062 3.375 L 19.6875 3.375 C 20.414062 3.375 21 3.878906 21 4.5 Z M 21 4.5", markdown: "M5.55006 17.75V7.35L8.96006 16.89H10.7101L14.2301 7.37V14.0729C14.3951 14.1551 14.5499 14.265 14.6875 14.4026L14.7001 14.4151V11.64C14.7001 10.8583 15.2127 10.1963 15.9201 9.97171V5H13.6801L10.0401 14.86L6.51006 5H4.00006V17.75H5.55006ZM17.2001 11.64C17.2001 11.2258 16.8643 10.89 16.4501 10.89C16.0359 10.89 15.7001 11.2258 15.7001 11.64V16.8294L13.9804 15.1097C13.6875 14.8168 13.2126 14.8168 12.9197 15.1097C12.6269 15.4026 12.6269 15.8775 12.9197 16.1703L15.9197 19.1703C16.2126 19.4632 16.6875 19.4632 16.9804 19.1703L19.9804 16.1703C20.2733 15.8775 20.2733 15.4026 19.9804 15.1097C19.6875 14.8168 19.2126 14.8168 18.9197 15.1097L17.2001 16.8294V11.64Z", fontAwesome: "M18.99018,13.98212V7.52679c-.08038-1.21875-1.33929-.683-1.33929-.683-2.933,1.39282-4.36274.61938-5.85938.15625a6.23272,6.23272,0,0,0-2.79376-.20062l-.00946.004A1.98777,1.98777,0,0,0,7.62189,5.106a.984.984,0,0,0-.17517-.05432c-.02447-.0055-.04882-.01032-.0736-.0149A.9565.9565,0,0,0,7.1908,5H6.82539a.9565.9565,0,0,0-.18232.0368c-.02472.00458-.04907.0094-.07348.01484a.985.985,0,0,0-.17523.05438,1.98585,1.98585,0,0,0-.573,3.49585v9.394A1.004,1.004,0,0,0,6.82539,19H7.1908a1.00406,1.00406,0,0,0,1.00409-1.00409V15.52234c3.64221-1.09827,5.19709.64282,7.09888.57587a5.57291,5.57291,0,0,0,3.25446-1.05805A1.2458,1.2458,0,0,0,18.99018,13.98212Z", fontFamily: "M16,19h2L13,5H11L6,19H8l1.43-4h5.14Zm-5.86-6L12,7.8,13.86,13Z", fontSize: "M20.75,19h1.5l-3-10h-1.5l-3,10h1.5L17,16.5h3Zm-3.3-4,1.05-3.5L19.55,15Zm-5.7,4h2l-5-14h-2l-5,14h2l1.43-4h5.14ZM5.89,13,7.75,7.8,9.61,13Z", fullscreen: "M7,14H5v5h5V17H7ZM5,10H7V7h3V5H5Zm12,7H14v2h5V14H17ZM14,5V7h3v3h2V5Z", help: "M11,17h2v2h-2V17z M12,5C9.8,5,8,6.8,8,9h2c0-1.1,0.9-2,2-2s2,0.9,2,2c0,2-3,1.7-3,5v1h2v-1c0-2.2,3-2.5,3-5  C16,6.8,14.2,5,12,5z", horizontalLine: "M5,12h14 M19,11H5v2h14V11z", imageAltText: "M19,7h-6v12h-2V7H5V5h6h2h6V7z", imageCaption: "M14.2,11l3.8,5H6l3-3.9l2.1,2.7L14,11H14.2z M8.5,11c0.8,0,1.5-0.7,1.5-1.5S9.3,8,8.5,8S7,8.7,7,9.5C7,10.3,7.7,11,8.5,11z   M22,6v12c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h16C21.1,4,22,4.9,22,6z M20,8.8V6H4v12h16V8.8z M22,22H2v2h20V22z", imageClass: "M9.5,13.4l-2.9-2.9h3.8L12.2,7l1.4,3.5h3.8l-3,2.9l0.9,3.6L12,15.1L8.8,17L9.5,13.4z M22,6v12c0,1.1-0.9,2-2,2H4  c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h16C21.1,4,22,4.9,22,6z M20,6H4v12h16V8.8V6z", imageDisplay: "M3,5h18v2H3V5z M13,9h8v2h-8V9z M13,13h8v2h-8V13z M3,17h18v2H3V17z M3,9h8v6H3V9z", imageManager: "M20,6h-7l-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M20,18H4V6h6.2l2,2H20V18z   M18,16l-3.8-5H14l-2.9,3.8L9,12.1L6,16H18z M10,9.5C10,8.7,9.3,8,8.5,8S7,8.7,7,9.5S7.7,11,8.5,11S10,10.3,10,9.5z", imageSize: "M16.9,4c-0.3,0-0.5,0.2-0.8,0.3L3.3,13c-0.9,0.6-1.1,1.9-0.5,2.8l2.2,3.3c0.4,0.7,1.2,1,2,0.8c0.3,0,0.5-0.2,0.8-0.3  L20.7,11c0.9-0.6,1.1-1.9,0.5-2.8l-2.2-3.3C18.5,4.2,17.7,3.9,16.9,4L16.9,4z M16.9,9.9L18.1,9l-2-2.9L17,5.6c0.1,0,0.1-0.1,0.2-0.1  c0.2,0,0.4,0,0.5,0.2L19.9,9c0.2,0.2,0.1,0.5-0.1,0.7L7,18.4c-0.1,0-0.1,0.1-0.2,0.1c-0.2,0-0.4,0-0.5-0.2L4.1,15  c-0.2-0.2-0.1-0.5,0.1-0.7L5,13.7l2,2.9l1.2-0.8l-2-2.9L7.5,12l1.1,1.7l1.2-0.8l-1.1-1.7l1.2-0.8l2,2.9l1.2-0.8l-2-2.9l1.2-0.8  l1.1,1.7l1.2-0.8l-1.1-1.7L14.9,7L16.9,9.9z", indent: "M3,9v6l3-3L3,9z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z", inlineClass: "M9.9,13.313A1.2,1.2,0,0,1,9.968,13H6.277l1.86-5.2,1.841,5.148A1.291,1.291,0,0,1,11.212,12h.426l-2.5-7h-2l-5,14h2l1.43-4H9.9Zm2.651,6.727a2.884,2.884,0,0,1-.655-2.018v-2.71A1.309,1.309,0,0,1,13.208,14h3.113a3.039,3.039,0,0,1,2,1.092s1.728,1.818,2.964,2.928a1.383,1.383,0,0,1,.318,1.931,1.44,1.44,0,0,1-.19.215l-3.347,3.31a1.309,1.309,0,0,1-1.832.258h0a1.282,1.282,0,0,1-.258-.257l-1.71-1.728Zm2.48-3.96a.773.773,0,1,0,.008,0Z", inlineStyle: "M11.88,15h.7l.7-1.7-3-8.3h-2l-5,14h2l1.4-4Zm-4.4-2,1.9-5.2,1.9,5.2ZM15.4,21.545l3.246,1.949-.909-3.637L20.72,17H16.954l-1.429-3.506L13.837,17H10.071l2.857,2.857-.779,3.637Z", insert: "M13.889,11.611c-0.17,0.17-0.443,0.17-0.612,0l-3.189-3.187l-3.363,3.36c-0.171,0.171-0.441,0.171-0.612,0c-0.172-0.169-0.172-0.443,0-0.611l3.667-3.669c0.17-0.17,0.445-0.172,0.614,0l3.496,3.493C14.058,11.167,14.061,11.443,13.889,11.611 M18.25,10c0,4.558-3.693,8.25-8.25,8.25c-4.557,0-8.25-3.692-8.25-8.25c0-4.557,3.693-8.25,8.25-8.25C14.557,1.75,18.25,5.443,18.25,10 M17.383,10c0-4.07-3.312-7.382-7.383-7.382S2.618,5.93,2.618,10S5.93,17.381,10,17.381S17.383,14.07,17.383,10", insertEmbed: "M20.73889,15.45929a3.4768,3.4768,0,0,0-5.45965-.28662L9.5661,12.50861a3.49811,3.49811,0,0,0-.00873-1.01331l5.72174-2.66809a3.55783,3.55783,0,1,0-.84527-1.81262L8.70966,9.6839a3.50851,3.50851,0,1,0,.0111,4.63727l5.7132,2.66412a3.49763,3.49763,0,1,0,6.30493-1.526ZM18.00745,5.01056A1.49993,1.49993,0,1,1,16.39551,6.3894,1.49994,1.49994,0,0,1,18.00745,5.01056ZM5.99237,13.49536a1.49989,1.49989,0,1,1,1.61194-1.37878A1.49982,1.49982,0,0,1,5.99237,13.49536Zm11.78211,5.494a1.49993,1.49993,0,1,1,1.61193-1.37885A1.49987,1.49987,0,0,1,17.77448,18.98932Z", insertFile: "M7,3C5.9,3,5,3.9,5,5v14c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V7.6L14.4,3H7z M17,19H7V5h6v4h4V19z", insertImage: "M14.2,11l3.8,5H6l3-3.9l2.1,2.7L14,11H14.2z M8.5,11c0.8,0,1.5-0.7,1.5-1.5S9.3,8,8.5,8S7,8.7,7,9.5C7,10.3,7.7,11,8.5,11z   M22,6v12c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h16C21.1,4,22,4.9,22,6z M20,8.8V6H4v12h16V8.8z", insertLink: "M11,17H7A5,5,0,0,1,7,7h4V9H7a3,3,0,0,0,0,6h4ZM17,7H13V9h4a3,3,0,0,1,0,6H13v2h4A5,5,0,0,0,17,7Zm-1,4H8v2h8Z", insertMore: "M16.5,13h-6v6h-2V13h-6V11h6V5h2v6h6Zm5,4.5A1.5,1.5,0,1,1,20,16,1.5,1.5,0,0,1,21.5,17.5Zm0-4A1.5,1.5,0,1,1,20,12,1.5,1.5,0,0,1,21.5,13.5Zm0-4A1.5,1.5,0,1,1,20,8,1.5,1.5,0,0,1,21.5,9.5Z", insertTable: "M20,5H4C2.9,5,2,5.9,2,7v2v1.5v3V15v2c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-2v-1.5v-3V9V7C22,5.9,21.1,5,20,5z M9.5,13.5v-3  h5v3H9.5z M14.5,15v2.5h-5V15H14.5z M9.5,9V6.5h5V9H9.5z M3.5,7c0-0.3,0.2-0.5,0.5-0.5h4V9H3.5V7z M3.5,10.5H8v3H3.5V10.5z M3.5,17  v-2H8v2.5H4C3.7,17.5,3.5,17.3,3.5,17z M20.5,17c0,0.3-0.2,0.5-0.5,0.5h-4V15h4.5V17z M20.5,13.5H16v-3h4.5V13.5z M16,9V6.5h4  c0.3,0,0.5,0.2,0.5,0.5v2H16z", insertVideo: "M15,8v8H5V8H15m2,2.5V7a1,1,0,0,0-1-1H4A1,1,0,0,0,3,7V17a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V13.5l2.29,2.29A1,1,0,0,0,21,15.08V8.91a1,1,0,0,0-1.71-.71Z", upload: "M12 6.66667a4.87654 4.87654 0 0 1 4.77525 3.92342l0.29618 1.50268 1.52794 0.10578a2.57021 2.57021 0 0 1 -0.1827 5.13478H6.5a3.49774 3.49774 0 0 1 -0.3844 -6.97454l1.06682 -0.11341L7.678 9.29387A4.86024 4.86024 0 0 1 12 6.66667m0 -2A6.871 6.871 0 0 0 5.90417 8.37 5.49773 5.49773 0 0 0 6.5 19.33333H18.41667a4.57019 4.57019 0 0 0 0.32083 -9.13A6.86567 6.86567 0 0 0 12 4.66667Zm0.99976 7.2469h1.91406L11.99976 9 9.08618 11.91357h1.91358v3H11V16h2V14h-0.00024Z", uploadFiles: "M12 6.66667a4.87654 4.87654 0 0 1 4.77525 3.92342l0.29618 1.50268 1.52794 0.10578a2.57021 2.57021 0 0 1 -0.1827 5.13478H6.5a3.49774 3.49774 0 0 1 -0.3844 -6.97454l1.06682 -0.11341L7.678 9.29387A4.86024 4.86024 0 0 1 12 6.66667m0 -2A6.871 6.871 0 0 0 5.90417 8.37 5.49773 5.49773 0 0 0 6.5 19.33333H18.41667a4.57019 4.57019 0 0 0 0.32083 -9.13A6.86567 6.86567 0 0 0 12 4.66667Zm0.99976 7.2469h1.91406L11.99976 9 9.08618 11.91357h1.91358v3H11V16h2V14h-0.00024Z", italic: "M11.76,9h2l-2.2,10h-2Zm1.68-4a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z", search: "M15.5 14h-0.79l-0.28 -0.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09 -0.59 4.23 -1.57l0.27 0.28v0.79l5 4.99L20.49 19l-4.99 -5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z", lineHeight: "M6.25,7h2.5L5.25,3.5,1.75,7h2.5V17H1.75l3.5,3.5L8.75,17H6.25Zm4-2V7h12V5Zm0,14h12V17h-12Zm0-6h12V11h-12Z", linkStyles: "M19,17.9l0.9,3.6l-3.2-1.9l-3.3,1.9l0.8-3.6L11.3,15h3.8l1.7-3.5l1.4,3.5H22L19,17.9z M20,12c0,0.3-0.1,0.7-0.2,1h2.1  c0.1-0.3,0.1-0.6,0.1-1c0-2.8-2.2-5-5-5h-4v2h4C18.7,9,20,10.3,20,12z M14.8,11H8v2h3.3h2.5L14.8,11z M9.9,16.4L8.5,15H7  c-1.7,0-3-1.3-3-3s1.3-3,3-3h4V7H7c-2.8,0-5,2.2-5,5s2.2,5,5,5h3.5L9.9,16.4z", mention: "M12.4,5c-4.1,0-7.5,3.4-7.5,7.5S8.3,20,12.4,20h3.8v-1.5h-3.8c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6v1.1  c0,0.6-0.5,1.2-1.1,1.2s-1.1-0.6-1.1-1.2v-1.1c0-2.1-1.7-3.8-3.8-3.8s-3.7,1.7-3.7,3.8s1.7,3.8,3.8,3.8c1,0,2-0.4,2.7-1.1  c0.5,0.7,1.3,1.1,2.2,1.1c1.5,0,2.6-1.2,2.6-2.7v-1.1C19.9,8.4,16.6,5,12.4,5z M12.4,14.7c-1.2,0-2.3-1-2.3-2.2s1-2.3,2.3-2.3  s2.3,1,2.3,2.3S13.6,14.7,12.4,14.7z", minimize: "M5,12h14 M19,11H5v2h14V11z", more: "M13.5,17c0,0.8-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5S13.5,16.2,13.5,17z M13.5,12c0,0.8-0.7,1.5-1.5,1.5 s-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5S13.5,11.2,13.5,12z M13.5,7c0,0.8-0.7,1.5-1.5,1.5S10.5,7.8,10.5,7s0.7-1.5,1.5-1.5 S13.5,6.2,13.5,7z", openLink: "M17,17H7V7h3V5H7C6,5,5,6,5,7v10c0,1,1,2,2,2h10c1,0,2-1,2-2v-3h-2V17z M14,5v2h1.6l-5.8,5.8l1.4,1.4L17,8.4V10h2V5H14z", orderedList: "M2.5,16h2v.5h-1v1h1V18h-2v1h3V15h-3Zm1-7h1V5h-2V6h1Zm-1,2H4.3L2.5,13.1V14h3V13H3.7l1.8-2.1V10h-3Zm5-5V8h14V6Zm0,12h14V16H7.5Zm0-5h14V11H7.5Z", outdent: "M3,12l3,3V9L3,12z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z", pageBreaker: "M3,9v6l3-3L3,9z M21,9H8V4h2v3h9V4h2V9z M21,20h-2v-3h-9v3H8v-5h13V20z M11,13H8v-2h3V13z M16,13h-3v-2h3V13z M21,13h-3v-2  h3V13z", paragraphFormat: "M10.15,5A4.11,4.11,0,0,0,6.08,8.18,4,4,0,0,0,10,13v6h2V7h2V19h2V7h2V5ZM8,9a2,2,0,0,1,2-2v4A2,2,0,0,1,8,9Z", paragraphMore: "M7.682,5a4.11,4.11,0,0,0-4.07,3.18,4,4,0,0,0,3.11,4.725h0l.027.005a3.766,3.766,0,0,0,.82.09v6h2V7h2V19h2V7h2V5ZM5.532,9a2,2,0,0,1,2-2v4A2,2,0,0,1,5.532,9Zm14.94,8.491a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,20.472,17.491Zm0-4a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,20.472,13.491Zm0-4a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,20.472,9.491Z", paragraphStyle: "M4,9c0-1.1,0.9-2,2-2v4C4.9,11,4,10.1,4,9z M16.7,20.5l3.2,1.9L19,18.8l3-2.9h-3.7l-1.4-3.5L15.3,16h-3.8l2.9,2.9l-0.9,3.6  L16.7,20.5z M10,17.4V19h1.6L10,17.4z M6.1,5c-1.9,0-3.6,1.3-4,3.2c-0.5,2.1,0.8,4.2,2.9,4.7c0,0,0,0,0,0h0.2C5.5,13,5.8,13,6,13v6  h2V7h2v7h2V7h2V5H6.1z", pdfExport: "M7,3C5.9,3,5,3.9,5,5v14c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V7.6L14.4,3H7z M17,19H7V5h6v4h4V19z M16.3,13.5  c-0.2-0.6-1.1-0.8-2.6-0.8c-0.1,0-0.1,0-0.2,0c-0.3-0.3-0.8-0.9-1-1.2c-0.2-0.2-0.3-0.3-0.4-0.6c0.2-0.7,0.2-1,0.3-1.5  c0.1-0.9,0-1.6-0.2-1.8c-0.4-0.2-0.7-0.2-0.9-0.2c-0.1,0-0.3,0.2-0.7,0.7c-0.2,0.7-0.1,1.8,0.6,2.8c-0.2,0.8-0.7,1.6-1,2.4  c-0.8,0.2-1.5,0.7-1.9,1.1c-0.7,0.7-0.9,1.1-0.7,1.6c0,0.3,0.2,0.6,0.7,0.6c0.3-0.1,0.3-0.2,0.7-0.3c0.6-0.3,1.2-1.7,1.7-2.4  c0.8-0.2,1.7-0.3,2-0.3c0.1,0,0.3,0,0.6,0c0.8,0.8,1.2,1.1,1.8,1.2c0.1,0,0.2,0,0.3,0c0.3,0,0.8-0.1,1-0.6  C16.4,14.1,16.4,13.9,16.3,13.5z M8.3,15.7c-0.1,0.1-0.2,0.1-0.2,0.1c0-0.1,0-0.3,0.6-0.8c0.2-0.2,0.6-0.3,0.9-0.7  C9,15,8.6,15.5,8.3,15.7z M11.3,9c0-0.1,0.1-0.2,0.1-0.2S11.6,9,11.5,10c0,0.1,0,0.3-0.1,0.7C11.3,10.1,11,9.5,11.3,9z M10.9,13.1  c0.2-0.6,0.6-1,0.7-1.5c0.1,0.1,0.1,0.1,0.2,0.2c0.1,0.2,0.3,0.7,0.7,0.9C12.2,12.8,11.6,13,10.9,13.1z M15.2,14.1  c-0.1,0-0.1,0-0.2,0c-0.2,0-0.7-0.2-1-0.7c1.1,0,1.6,0.2,1.6,0.6C15.5,14.1,15.4,14.1,15.2,14.1z", print: "M16.1,17c0-0.6,0.4-1,1-1c0.6,0,1,0.4,1,1s-0.4,1-1,1C16.5,18,16.1,17.6,16.1,17z M22,15v4c0,1.1-0.9,2-2,2H4  c-1.1,0-2-0.9-2-2v-4c0-1.1,0.9-2,2-2h1V5c0-1.1,0.9-2,2-2h7.4L19,7.6V13h1C21.1,13,22,13.9,22,15z M7,13h10V9h-4V5H7V13z M20,15H4  v4h16V15z", redo: "M13.6,9.4c1.7,0.3,3.2,0.9,4.6,2L21,8.5v7h-7l2.7-2.7C13,10.1,7.9,11,5.3,14.7c-0.2,0.3-0.4,0.5-0.5,0.8L3,14.6  C5.1,10.8,9.3,8.7,13.6,9.4z", removeTable: "M15,10v8H9v-8H15 M14,4H9.9l-1,1H6v2h12V5h-3L14,4z M17,8H7v10c0,1.1,0.9,2,2,2h6c1.1,0,2-0.9,2-2V8z", insertAll: "M 9.25 12 L 6.75 12 C 6.335938 12 6 11.664062 6 11.25 L 6 6 L 3.257812 6 C 2.703125 6 2.425781 5.328125 2.820312 4.933594 L 7.570312 0.179688 C 7.804688 -0.0546875 8.191406 -0.0546875 8.425781 0.179688 L 13.179688 4.933594 C 13.574219 5.328125 13.296875 6 12.742188 6 L 10 6 L 10 11.25 C 10 11.664062 9.664062 12 9.25 12 Z M 16 11.75 L 16 15.25 C 16 15.664062 15.664062 16 15.25 16 L 0.75 16 C 0.335938 16 0 15.664062 0 15.25 L 0 11.75 C 0 11.335938 0.335938 11 0.75 11 L 5 11 L 5 11.25 C 5 12.214844 5.785156 13 6.75 13 L 9.25 13 C 10.214844 13 11 12.214844 11 11.25 L 11 11 L 15.25 11 C 15.664062 11 16 11.335938 16 11.75 Z M 12.125 14.5 C 12.125 14.15625 11.84375 13.875 11.5 13.875 C 11.15625 13.875 10.875 14.15625 10.875 14.5 C 10.875 14.84375 11.15625 15.125 11.5 15.125 C 11.84375 15.125 12.125 14.84375 12.125 14.5 Z M 14.125 14.5 C 14.125 14.15625 13.84375 13.875 13.5 13.875 C 13.15625 13.875 12.875 14.15625 12.875 14.5 C 12.875 14.84375 13.15625 15.125 13.5 15.125 C 13.84375 15.125 14.125 14.84375 14.125 14.5 Z M 14.125 14.5 ", remove: "M15,10v8H9v-8H15 M14,4H9.9l-1,1H6v2h12V5h-3L14,4z M17,8H7v10c0,1.1,0.9,2,2,2h6c1.1,0,2-0.9,2-2V8z", replaceImage: "M16,5v3H4v2h12v3l4-4L16,5z M8,19v-3h12v-2H8v-3l-4,4L8,19z", row: "M20,5H4C2.9,5,2,5.9,2,7v2v1.5v3V15v2c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-2v-1.5v-3V9V7C22,5.9,21.1,5,20,5z M16,6.5h4  c0.3,0,0.5,0.2,0.5,0.5v2H16V6.5z M9.5,6.5h5V9h-5V6.5z M3.5,7c0-0.3,0.2-0.5,0.5-0.5h4V9H3.5V7z M8,17.5H4c-0.3,0-0.5-0.2-0.5-0.5  v-2H8V17.5z M14.5,17.5h-5V15h5V17.5z M20.5,17c0,0.3-0.2,0.5-0.5,0.5h-4V15h4.5V17z", selectAll: "M5,7h2V5C5.9,5,5,5.9,5,7z M5,11h2V9H5V11z M9,19h2v-2H9V19z M5,11h2V9H5V11z M15,5h-2v2h2V5z M17,5v2h2C19,5.9,18.1,5,17,5  z M7,19v-2H5C5,18.1,5.9,19,7,19z M5,15h2v-2H5V15z M11,5H9v2h2V5z M13,19h2v-2h-2V19z M17,11h2V9h-2V11z M17,19c1.1,0,2-0.9,2-2h-2  V19z M17,11h2V9h-2V11z M17,15h2v-2h-2V15z M13,19h2v-2h-2V19z M13,7h2V5h-2V7z M9,15h6V9H9V15z M11,11h2v2h-2V11z", smile: "M11.991,3A9,9,0,1,0,21,12,8.99557,8.99557,0,0,0,11.991,3ZM12,19a7,7,0,1,1,7-7A6.99808,6.99808,0,0,1,12,19Zm3.105-5.2h1.503a4.94542,4.94542,0,0,1-9.216,0H8.895a3.57808,3.57808,0,0,0,6.21,0ZM7.5,9.75A1.35,1.35,0,1,1,8.85,11.1,1.35,1.35,0,0,1,7.5,9.75Zm6.3,0a1.35,1.35,0,1,1,1.35,1.35A1.35,1.35,0,0,1,13.8,9.75Z", spellcheck: "M19.1,13.6l-5.6,5.6l-2.7-2.7l-1.4,1.4l4.1,4.1l7-7L19.1,13.6z M10.8,13.7l2.7,2.7l0.8-0.8L10.5,5h-2l-5,14h2l1.4-4h2.6  L10.8,13.7z M9.5,7.8l1.9,5.2H7.6L9.5,7.8z", star: "M12.1,7.7l1,2.5l0.4,0.9h1h2.4l-2.1,2l-0.6,0.6l0.2,0.9l0.6,2.3l-2.2-1.3L12,15.2l-0.8,0.5L9,17l0.5-2.5l0.1-0.8L9,13.1  l-2-2h2.5h0.9l0.4-0.8L12.1,7.7 M12.2,4L9.5,9.6H3.4L8,14.2L6.9,20l5.1-3.1l5.3,3.1l-1.5-5.8l4.8-4.6h-6.1L12.2,4L12.2,4z", strikeThrough: "M3,12.20294H21v1.5H16.63422a3.59782,3.59782,0,0,1,.34942,1.5929,3.252,3.252,0,0,1-1.31427,2.6997A5.55082,5.55082,0,0,1,12.20251,19a6.4421,6.4421,0,0,1-2.62335-.539,4.46335,4.46335,0,0,1-1.89264-1.48816,3.668,3.668,0,0,1-.67016-2.15546V14.704h.28723v-.0011h.34149v.0011H9.02v.11334a2.18275,2.18275,0,0,0,.85413,1.83069,3.69,3.69,0,0,0,2.32836.67926,3.38778,3.38778,0,0,0,2.07666-.5462,1.73346,1.73346,0,0,0,.7013-1.46655,1.69749,1.69749,0,0,0-.647-1.43439,3.00525,3.00525,0,0,0-.27491-.17725H3ZM16.34473,7.05981A4.18163,4.18163,0,0,0,14.6236,5.5462,5.627,5.627,0,0,0,12.11072,5,5.16083,5.16083,0,0,0,8.74719,6.06213,3.36315,3.36315,0,0,0,7.44006,8.76855a3.22923,3.22923,0,0,0,.3216,1.42786h2.59668c-.08338-.05365-.18537-.10577-.25269-.16064a1.60652,1.60652,0,0,1-.65283-1.30036,1.79843,1.79843,0,0,1,.68842-1.5108,3.12971,3.12971,0,0,1,1.96948-.55243,3.04779,3.04779,0,0,1,2.106.6687,2.35066,2.35066,0,0,1,.736,1.83258v.11341h2.00317V9.17346A3.90013,3.90013,0,0,0,16.34473,7.05981Z", subscript: "M10.4,12l3.6,3.6L12.6,17L9,13.4L5.4,17L4,15.6L7.6,12L4,8.4L5.4,7L9,10.6L12.6,7L14,8.4L10.4,12z M18.31234,19.674  l1.06812-1.1465c0.196-0.20141,0.37093-0.40739,0.5368-0.6088c0.15975-0.19418,0.30419-0.40046,0.432-0.617  c0.11969-0.20017,0.21776-0.41249,0.29255-0.6334c0.07103-0.21492,0.10703-0.43986,0.10662-0.66621  c0.00297-0.28137-0.04904-0.56062-0.1531-0.82206c-0.09855-0.24575-0.25264-0.46534-0.45022-0.6416  c-0.20984-0.18355-0.45523-0.32191-0.72089-0.40646c-0.63808-0.19005-1.3198-0.17443-1.94851,0.04465  c-0.28703,0.10845-0.54746,0.2772-0.76372,0.49487c-0.20881,0.20858-0.37069,0.45932-0.47483,0.73548  c-0.10002,0.26648-0.15276,0.54838-0.15585,0.833l-0.00364,0.237H17.617l0.00638-0.22692  c0.00158-0.12667,0.01966-0.25258,0.05377-0.37458c0.03337-0.10708,0.08655-0.20693,0.15679-0.29437  c0.07105-0.08037,0.15959-0.14335,0.25882-0.1841c0.22459-0.08899,0.47371-0.09417,0.7018-0.01458  c0.0822,0.03608,0.15559,0.08957,0.21509,0.15679c0.06076,0.07174,0.10745,0.15429,0.13761,0.24333  c0.03567,0.10824,0.05412,0.22141,0.05469,0.33538c-0.00111,0.08959-0.0118,0.17881-0.0319,0.26612  c-0.02913,0.10428-0.07076,0.20465-0.124,0.29893c-0.07733,0.13621-0.1654,0.26603-0.26338,0.38823  c-0.13438,0.17465-0.27767,0.34226-0.42929,0.50217l-2.15634,2.35315V21H21v-1.326H18.31234z", superscript: "M10.4,12,14,15.6,12.6,17,9,13.4,5.4,17,4,15.6,7.6,12,4,8.4,5.4,7,9,10.6,12.6,7,14,8.4Zm8.91234-3.326,1.06812-1.1465c.196-.20141.37093-.40739.5368-.6088a4.85745,4.85745,0,0,0,.432-.617,3.29,3.29,0,0,0,.29255-.6334,2.11079,2.11079,0,0,0,.10662-.66621,2.16127,2.16127,0,0,0-.1531-.82206,1.7154,1.7154,0,0,0-.45022-.6416,2.03,2.03,0,0,0-.72089-.40646,3.17085,3.17085,0,0,0-1.94851.04465,2.14555,2.14555,0,0,0-.76372.49487,2.07379,2.07379,0,0,0-.47483.73548,2.446,2.446,0,0,0-.15585.833l-.00364.237H18.617L18.62338,5.25a1.45865,1.45865,0,0,1,.05377-.37458.89552.89552,0,0,1,.15679-.29437.70083.70083,0,0,1,.25882-.1841,1.00569,1.00569,0,0,1,.7018-.01458.62014.62014,0,0,1,.21509.15679.74752.74752,0,0,1,.13761.24333,1.08893,1.08893,0,0,1,.05469.33538,1.25556,1.25556,0,0,1-.0319.26612,1.34227,1.34227,0,0,1-.124.29893,2.94367,2.94367,0,0,1-.26338.38823,6.41629,6.41629,0,0,1-.42929.50217L17.19709,8.92642V10H22V8.674Z", symbols: "M15.77493,16.98885a8.21343,8.21343,0,0,0,1.96753-2.57651,7.34824,7.34824,0,0,0,.6034-3.07618A6.09092,6.09092,0,0,0,11.99515,5a6.13347,6.13347,0,0,0-4.585,1.79187,6.417,6.417,0,0,0-1.756,4.69207,6.93955,6.93955,0,0,0,.622,2.97415,8.06587,8.06587,0,0,0,1.949,2.53076H5.41452V19h5.54114v-.04331h-.00147V16.84107a5.82825,5.82825,0,0,1-2.2052-2.2352A6.40513,6.40513,0,0,1,7.97672,11.447,4.68548,4.68548,0,0,1,9.07785,8.19191a3.73232,3.73232,0,0,1,2.9173-1.22462,3.76839,3.76839,0,0,1,2.91241,1.21489,4.482,4.482,0,0,1,1.11572,3.154,6.71141,6.71141,0,0,1-.75384,3.24732,5.83562,5.83562,0,0,1-2.22357,2.25759v2.11562H13.0444V19h5.54108V16.98885Z", tags: "M8.9749 7.47489a1.5 1.5 0 1 1 -1.5 1.5A1.5 1.5 0 0 1 8.9749 7.47489Zm3.78866 -3.12713L16.5362 8.12041l0.33565 0.33564 2.77038 2.77038a2.01988 2.01988 0 0 1 0.59 1.42 1.95518 1.95518 0 0 1 -0.5854 1.40455l0.00044 0.00043 -5.59583 5.59583 -0.00043 -0.00044a1.95518 1.95518 0 0 1 -1.40455 0.5854 1.98762 1.98762 0 0 1 -1.41 -0.58L8.45605 16.87185l-0.33564 -0.33565L4.35777 12.77357a1.99576 1.99576 0 0 1 -0.59 -1.42V9.36358l0 -3.59582a2.00579 2.00579 0 0 1 2 -2l3.59582 0h1.98995A1.98762 1.98762 0 0 1 12.76356 4.34776ZM15.46186 9.866l-0.33564 -0.33564L11.36359 5.76776H5.76776v5.59583L9.866 15.46186l2.7794 2.7794 5.5878 -5.60385 -0.001 -0.001Z", tableHeader: "M20,5H4C2.9,5,2,5.9,2,7v10c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M8,17.5H4c-0.3,0-0.5-0.2-0.5-0.4  l0,0V17v-2H8V17.5z M8,13.5H3.5v-3H8V13.5z M14.5,17.5h-5V15h5V17.5z M14.5,13.5h-5v-3h5V13.5z M20.5,17c0,0.3-0.2,0.5-0.4,0.5l0,0  H16V15h4.5V17z M20.5,13.5H16v-3h4.5V13.5z M20.5,9h-4.4H16h-1.5h-5H8H7.9H3.5V7c0-0.3,0.2-0.5,0.4-0.5l0,0h4l0,0h8.2l0,0H20  c0.3,0,0.5,0.2,0.5,0.4l0,0V9z", tableFooter: "M20,19H4a2.006,2.006,0,0,1-2-2V7A2.006,2.006,0,0,1,4,5H20a2.006,2.006,0,0,1,2,2V17A2.006,2.006,0,0,1,20,19ZM8,6.5H4a.458.458,0,0,0-.5.4h0V9H8Zm0,4H3.5v3H8Zm6.5-4h-5V9h5Zm0,4h-5v3h5Zm6-3.5a.458.458,0,0,0-.4-.5H16V9h4.5Zm0,3.5H16v3h4.5Zm0,4.5H3.5v2a.458.458,0,0,0,.4.5H20a.458.458,0,0,0,.5-.4h0Z", tableStyle: "M20.0171,19.89752l.9,3.6-3.2-1.9-3.3,1.9.8-3.6-2.9-2.9h3.8l1.7-3.5,1.4,3.5h3.8ZM20,5H4A2.00591,2.00591,0,0,0,2,7V17a2.00591,2.00591,0,0,0,2,2h7.49115l-.58826-.58826L9.99115,17.5H9.5V14.9975h5.36511L16,12.66089V10.5h4.5v3h-.52783l.599,1.4975H22V7A2.00591,2.00591,0,0,0,20,5ZM3.5,7A.4724.4724,0,0,1,4,6.5H8V9H3.5Zm0,3.5H8v3H3.5Zm.5,7a.4724.4724,0,0,1-.5-.5V15H8v2.5Zm10.5-4h-5v-3h5Zm0-4.5h-5V6.5h5Zm6,0H16V6.5h4a.4724.4724,0,0,1,.5.5Z", textColor: "M15.2,13.494s-3.6,3.9-3.6,6.3a3.65,3.65,0,0,0,7.3.1v-.1C18.9,17.394,15.2,13.494,15.2,13.494Zm-1.47-1.357.669-.724L12.1,5h-2l-5,14h2l1.43-4h2.943A24.426,24.426,0,0,1,13.726,12.137ZM11.1,7.8l1.86,5.2H9.244Z", textMore: "M13.55,19h2l-5-14h-2l-5,14h2l1.4-4h5.1Zm-5.9-6,1.9-5.2,1.9,5.2Zm12.8,4.5a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,20.45,17.5Zm0-4a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,20.45,13.5Zm0-4A1.5,1.5,0,1,1,18.95,8,1.5,1.5,0,0,1,20.45,9.5Z", underline: "M19,20v2H5V20Zm-3-6.785a4,4,0,0,1-5.74,3.4A3.75,3.75,0,0,1,8,13.085V5.005H6v8.21a6,6,0,0,0,8,5.44,5.851,5.851,0,0,0,4-5.65v-8H16ZM16,5v0h2V5ZM8,5H6v0H8Z", undo: "M10.4,9.4c-1.7,0.3-3.2,0.9-4.6,2L3,8.5v7h7l-2.7-2.7c3.7-2.6,8.8-1.8,11.5,1.9c0.2,0.3,0.4,0.5,0.5,0.8l1.8-0.9  C18.9,10.8,14.7,8.7,10.4,9.4z", unlink: "M14.4,11l1.6,1.6V11H14.4z M17,7h-4v1.9h4c1.7,0,3.1,1.4,3.1,3.1c0,1.3-0.8,2.4-1.9,2.8l1.4,1.4C21,15.4,22,13.8,22,12  C22,9.2,19.8,7,17,7z M2,4.3l3.1,3.1C3.3,8.1,2,9.9,2,12c0,2.8,2.2,5,5,5h4v-1.9H7c-1.7,0-3.1-1.4-3.1-3.1c0-1.6,1.2-2.9,2.8-3.1  L8.7,11H8v2h2.7l2.3,2.3V17h1.7l4,4l1.4-1.4L3.4,2.9L2,4.3z", unorderedList: "M4,10.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,10.5,4,10.5z M4,5.5C3.2,5.5,2.5,6.2,2.5,7  S3.2,8.5,4,8.5S5.5,7.8,5.5,7S4.8,5.5,4,5.5z M4,15.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,15.5,4,15.5z   M7.5,6v2h14V6H7.5z M7.5,18h14v-2h-14V18z M7.5,13h14v-2h-14V13z", verticalAlignBottom: "M16,13h-3V3h-2v10H8l4,4L16,13z M3,19v2h18v-2H3z", verticalAlignMiddle: "M3,11v2h18v-2H3z M8,18h3v3h2v-3h3l-4-4L8,18z M16,6h-3V3h-2v3H8l4,4L16,6z", verticalAlignTop: "M8,11h3v10h2V11h3l-4-4L8,11z M21,5V3H3v2H21z", trackChanges: "M17.2 20H12.4599L13.9938 19.2076L14.0305 19.1886L14.0616 19.1612C14.1036 19.1242 14.1373 19.0786 14.1603 19.0275C14.1806 18.9825 14.1923 18.9342 14.1948 18.885H14.2H14.3384L14.4364 18.7874L14.7049 18.52H15.45C15.5747 18.52 15.6942 18.4705 15.7823 18.3823C15.8705 18.2942 15.92 18.1746 15.92 18.05C15.92 17.9253 15.8705 17.8058 15.7823 17.7176C15.7351 17.6704 15.6789 17.6343 15.6177 17.6109L17.33 15.9056V19.87C17.33 19.8871 17.3266 19.904 17.3201 19.9197C17.3136 19.9355 17.304 19.9499 17.2919 19.9619C17.2799 19.974 17.2655 19.9836 17.2497 19.9901C17.234 19.9966 17.2171 20 17.2 20ZM4.13 20H11.2508C11.2396 19.9629 11.2337 19.9242 11.2337 19.885C11.2337 19.8133 11.2533 19.7431 11.29 19.6819L11.2739 19.6734L11.8838 18.52H5C4.87535 18.52 4.7558 18.4705 4.66766 18.3823C4.57952 18.2942 4.53 18.1746 4.53 18.05C4.53 17.9253 4.57952 17.8058 4.66766 17.7176C4.7558 17.6295 4.87535 17.58 5 17.58H12.3809L12.3925 17.5582L12.4187 17.5284C12.4558 17.4864 12.5014 17.4527 12.5525 17.4297C12.5836 17.4156 12.6163 17.4057 12.6498 17.4001C12.6522 17.3065 12.6877 17.2166 12.7503 17.1467L13 17.37C12.9902 17.381 12.9847 17.3952 12.9847 17.41C12.9847 17.4247 12.9902 17.439 13 17.45L14.13 18.55H14.2L19.09 13.68V13.6L17.99 12.5C17.979 12.4902 17.9647 12.4847 17.95 12.4847C17.9352 12.4847 17.921 12.4902 17.91 12.5L13 17.37L12.7641 17.1322L15.1759 14.74H5C4.87535 14.74 4.7558 14.6905 4.66766 14.6023C4.57952 14.5142 4.53 14.3946 4.53 14.27C4.53 14.1453 4.57952 14.0258 4.66766 13.9376C4.7558 13.8495 4.87535 13.8 5 13.8H15.45C15.5747 13.8 15.6942 13.8495 15.7823 13.9376C15.8169 13.9722 15.8454 14.0115 15.8675 14.0541L17.33 12.6034V9.3H13.28C13.207 9.30976 13.133 9.30976 13.06 9.3C12.7697 9.22119 12.5113 9.05343 12.3212 8.82027C12.1311 8.58711 12.0187 8.30026 12 8V4H4.13C4.09552 4 4.06246 4.0137 4.03808 4.03808C4.0137 4.06246 4 4.09552 4 4.13V19.87C4 19.9045 4.0137 19.9375 4.03808 19.9619C4.06246 19.9863 4.09552 20 4.13 20ZM11.7889 20H11.8785C11.8902 19.9746 11.898 19.9475 11.9015 19.9197L11.8661 19.9866L11.8117 19.9578L13.84 18.91C13.8464 18.9044 13.8515 18.8974 13.855 18.8897C13.8585 18.8819 13.8603 18.8735 13.8603 18.865C13.8603 18.8565 13.8585 18.8481 13.855 18.8403C13.8515 18.8325 13.8464 18.8256 13.84 18.82L12.76 17.75C12.7544 17.7436 12.7474 17.7385 12.7397 17.735C12.7319 17.7315 12.7235 17.7297 12.715 17.7297C12.7065 17.7297 12.6981 17.7315 12.6903 17.735C12.6825 17.7385 12.6756 17.7436 12.67 17.75L11.57 19.83L11.5023 19.7942L11.58 19.85C11.5727 19.8602 11.5687 19.8724 11.5687 19.885C11.5687 19.8975 11.5727 19.9098 11.58 19.92L11.67 20H11.73L11.7642 19.9823L11.7889 20ZM13.1 4.65L16.6 8.15C16.6212 8.17232 16.6355 8.20028 16.6412 8.23051C16.6469 8.26075 16.6437 8.29199 16.6321 8.32048C16.6205 8.34898 16.6009 8.37352 16.5757 8.39117C16.5505 8.40882 16.5207 8.41883 16.49 8.42H13.06L12.83 8.19V4.76C12.8312 4.72925 12.8412 4.6995 12.8588 4.67429C12.8765 4.64909 12.901 4.62951 12.9295 4.6179C12.958 4.6063 12.9893 4.60315 13.0195 4.60884C13.0497 4.61453 13.0777 4.62882 13.1 4.65ZM11 6.72C11.0027 6.66089 10.9937 6.60183 10.9735 6.54621C10.9534 6.49058 10.9224 6.43948 10.8825 6.39582C10.8425 6.35216 10.7944 6.31681 10.7408 6.29179C10.6871 6.26677 10.6291 6.25257 10.57 6.25H5C4.88239 6.25773 4.77251 6.3113 4.69397 6.39918C4.61543 6.48707 4.57451 6.60226 4.58 6.72C4.57451 6.83774 4.61543 6.95293 4.69397 7.04082C4.77251 7.12871 4.88239 7.18227 5 7.19H10.6C10.714 7.1774 10.8189 7.12173 10.8933 7.03438C10.9676 6.94702 11.0058 6.83457 11 6.72ZM11.1 8.14001H5C4.87535 8.14001 4.7558 8.18953 4.66766 8.27767C4.57952 8.36582 4.53 8.48536 4.53 8.61001C4.53 8.73467 4.57952 8.85421 4.66766 8.94236C4.7558 9.0305 4.87535 9.08001 5 9.08001H11.1C11.2247 9.08001 11.3442 9.0305 11.4323 8.94236C11.5205 8.85421 11.57 8.73467 11.57 8.61001C11.57 8.48536 11.5205 8.36582 11.4323 8.27767C11.3442 8.18953 11.2247 8.14001 11.1 8.14001ZM5 11H15.45C15.5826 11 15.7098 10.9473 15.8036 10.8536C15.8973 10.7598 15.95 10.6326 15.95 10.5C15.95 10.3674 15.8973 10.2402 15.8036 10.1464C15.7098 10.0527 15.5826 10 15.45 10H5C4.86739 10 4.74021 10.0527 4.64645 10.1464C4.55268 10.2402 4.5 10.3674 4.5 10.5C4.5 10.6326 4.55268 10.7598 4.64645 10.8536C4.74021 10.9473 4.86739 11 5 11ZM5 12.86H11.1C11.2211 12.8523 11.3346 12.798 11.4166 12.7085C11.4986 12.6191 11.5428 12.5013 11.54 12.38C11.5427 12.2597 11.4982 12.1431 11.4159 12.0552C11.3337 11.9673 11.2202 11.9152 11.1 11.91H5C4.94089 11.9126 4.88286 11.9268 4.82924 11.9518C4.77562 11.9768 4.72746 12.0122 4.68752 12.0558C4.64758 12.0995 4.61664 12.1506 4.59648 12.2062C4.57631 12.2618 4.56731 12.3209 4.57 12.38C4.56451 12.5004 4.60649 12.6181 4.6869 12.7079C4.76731 12.7976 4.87974 12.8523 5 12.86ZM11.1 16.63H5C4.87535 16.63 4.7558 16.5805 4.66766 16.4923C4.57952 16.4042 4.53 16.2846 4.53 16.16C4.53 16.0353 4.57952 15.9158 4.66766 15.8276C4.7558 15.7395 4.87535 15.69 5 15.69H11.1C11.2247 15.69 11.3442 15.7395 11.4323 15.8276C11.5205 15.9158 11.57 16.0353 11.57 16.16C11.57 16.2846 11.5205 16.4042 11.4323 16.4923C11.3442 16.5805 11.2247 16.63 11.1 16.63ZM18.8503 11.592C18.7991 11.6175 18.7545 11.6544 18.72 11.7L18.26 12.14C18.2501 12.151 18.2447 12.1652 18.2447 12.18C18.2447 12.1947 18.2501 12.209 18.26 12.22L19.37 13.32C19.381 13.3298 19.3952 13.3353 19.41 13.3353C19.4247 13.3353 19.439 13.3298 19.45 13.32L19.86 12.91C19.9057 12.867 19.9421 12.8151 19.967 12.7575C19.9919 12.6998 20.0047 12.6377 20.0047 12.575C20.0047 12.5122 19.9919 12.4501 19.967 12.3925C19.9421 12.3349 19.9057 12.283 19.86 12.24L19.31 11.7C19.2755 11.6544 19.2309 11.6175 19.1797 11.592C19.1285 11.5666 19.0721 11.5533 19.015 11.5533C18.9578 11.5533 18.9014 11.5666 18.8503 11.592Z", showTrackChanges: "M17.2421 13.6048C17.2631 13.6136 17.2841 13.6226 17.305 13.6317V9.29505H13.2626C13.1897 9.30481 13.1159 9.30481 13.043 9.29505C12.7532 9.21632 12.4953 9.04872 12.3056 8.81577C12.1158 8.58283 12.0037 8.29625 11.985 7.99627V4H4.12976C4.09534 4 4.06234 4.01368 4.038 4.03804C4.01367 4.0624 4 4.09543 4 4.12988V19.8552C4 19.8896 4.01367 19.9227 4.038 19.947C4.06234 19.9714 4.09534 19.9851 4.12976 19.9851H13.4875C13.0501 19.8216 12.6281 19.6155 12.2277 19.3686C11.8529 19.1551 11.4911 18.9196 11.1442 18.6632C11.0697 18.6152 10.9982 18.5628 10.9302 18.5065H4.99812C4.87371 18.5065 4.75438 18.457 4.66641 18.3689C4.57843 18.2809 4.529 18.1614 4.529 18.0369C4.529 17.9124 4.57843 17.7929 4.66641 17.7049C4.75438 17.6168 4.87371 17.5673 4.99812 17.5673H10.4396C10.4472 17.4488 10.4756 17.3324 10.5235 17.2235C10.5939 17.017 10.6761 16.8149 10.7694 16.6182H4.99812C4.87371 16.6182 4.75438 16.5687 4.66641 16.4807C4.57843 16.3926 4.529 16.2732 4.529 16.1487C4.529 16.0241 4.57843 15.9047 4.66641 15.8166C4.75438 15.7286 4.87371 15.6791 4.99812 15.6791H11.0867C11.1576 15.6791 11.2268 15.6952 11.2895 15.7253C11.5204 15.361 11.7938 15.027 12.1033 14.73H4.99812C4.87371 14.73 4.75438 14.6805 4.66641 14.5924C4.57843 14.5044 4.529 14.385 4.529 14.2604C4.529 14.1359 4.57843 14.0164 4.66641 13.9284C4.75438 13.8403 4.87371 13.7909 4.99812 13.7909H13.4434C13.9833 13.525 14.5656 13.3516 15.166 13.2795L15.1923 13.2763H15.2189H15.4925C16.0923 13.2609 16.6886 13.3728 17.2421 13.6048ZM13.0829 4.64939L16.5764 8.14613C16.5975 8.16843 16.6118 8.19636 16.6174 8.22657C16.6231 8.25677 16.62 8.28798 16.6084 8.31645C16.5968 8.34492 16.5773 8.36944 16.5521 8.38707C16.527 8.40471 16.4973 8.41471 16.4666 8.41587H13.043L12.8134 8.18609V4.75929C12.8146 4.72857 12.8246 4.69884 12.8422 4.67366C12.8598 4.64849 12.8843 4.62893 12.9128 4.61733C12.9412 4.60573 12.9724 4.60259 13.0026 4.60827C13.0328 4.61396 13.0607 4.62824 13.0829 4.64939ZM10.9869 6.71746C10.9896 6.65841 10.9806 6.59941 10.9604 6.54383C10.9403 6.48825 10.9094 6.4372 10.8696 6.39358C10.8297 6.34997 10.7816 6.31465 10.7281 6.28965C10.6746 6.26466 10.6167 6.25047 10.5577 6.2479H4.99813C4.88074 6.25562 4.77106 6.30914 4.69267 6.39694C4.61428 6.48475 4.57343 6.59983 4.57891 6.71746C4.57343 6.83509 4.61428 6.95017 4.69267 7.03798C4.77106 7.12579 4.88074 7.1793 4.99813 7.18702H10.5876C10.7014 7.17444 10.8061 7.11882 10.8803 7.03154C10.9545 6.94427 10.9927 6.83192 10.9869 6.71746ZM11.0867 8.13614H4.99812C4.87371 8.13614 4.75438 8.18561 4.66641 8.27367C4.57843 8.36173 4.529 8.48116 4.529 8.6057C4.529 8.73023 4.57843 8.84967 4.66641 8.93773C4.75438 9.02579 4.87371 9.07526 4.99812 9.07526H11.0867C11.2111 9.07526 11.3304 9.02579 11.4184 8.93773C11.5064 8.84967 11.5558 8.73023 11.5558 8.6057C11.5558 8.48116 11.5064 8.36173 11.4184 8.27367C11.3304 8.18561 11.2111 8.13614 11.0867 8.13614ZM4.99812 10.9935H15.4285C15.5609 10.9935 15.6878 10.9408 15.7814 10.8472C15.875 10.7535 15.9276 10.6264 15.9276 10.4939C15.9276 10.3614 15.875 10.2344 15.7814 10.1407C15.6878 10.047 15.5609 9.9944 15.4285 9.9944H4.99812C4.86576 9.9944 4.73883 10.047 4.64523 10.1407C4.55164 10.2344 4.49906 10.3614 4.49906 10.4939C4.49906 10.6264 4.55164 10.7535 4.64523 10.8472C4.73883 10.9408 4.86576 10.9935 4.99812 10.9935ZM4.99812 12.8517H11.0867C11.2076 12.844 11.3208 12.7898 11.4027 12.7004C11.4845 12.611 11.5287 12.4934 11.5259 12.3722C11.5286 12.252 11.4841 12.1355 11.402 12.0477C11.3199 11.9599 11.2067 11.9078 11.0867 11.9026H4.99812C4.93912 11.9052 4.8812 11.9194 4.82769 11.9444C4.77417 11.9694 4.7261 12.0047 4.68623 12.0483C4.64637 12.0919 4.61549 12.143 4.59536 12.1985C4.57523 12.2541 4.56625 12.3131 4.56893 12.3722C4.56345 12.4925 4.60535 12.6101 4.68561 12.6998C4.76587 12.7894 4.87809 12.844 4.99812 12.8517ZM19.97 17.4974C19.5787 16.5636 19.0431 15.6971 18.383 14.9298C18.0152 14.5351 17.5679 14.2233 17.0706 14.0148C16.5732 13.8064 16.0373 13.7062 15.4984 13.7209H15.2189C14.4787 13.8098 13.7684 14.0666 13.1423 14.4717C12.5162 14.8769 11.9906 15.4196 11.6057 16.0587C11.3211 16.4677 11.0959 16.9151 10.937 17.3875C10.9006 17.464 10.8817 17.5476 10.8817 17.6323C10.8817 17.717 10.9006 17.8006 10.937 17.877C11.0642 18.0428 11.2196 18.1849 11.3961 18.2967C11.7346 18.5476 12.0879 18.7778 12.4541 18.986C13.4096 19.5767 14.497 19.92 15.6182 19.9851C16.4392 20.0504 17.2632 19.9005 18.0088 19.5501C18.7544 19.1998 19.3959 18.661 19.8702 17.9869C19.9311 17.923 19.9729 17.8432 19.9905 17.7566C20.0082 17.67 20.0011 17.5801 19.97 17.4974ZM15.9775 19.1758C14.3849 19.068 12.8507 18.5331 11.5358 17.6273C11.5788 17.5678 11.6255 17.5111 11.6756 17.4574C12.3061 16.569 13.1295 15.8359 14.0832 15.3126C13.8003 15.7406 13.6785 16.2566 13.7417 16.7681C13.7676 17.0339 13.8465 17.2918 13.9737 17.5265C14.1009 17.7613 14.2739 17.9681 14.4823 18.1348C14.6907 18.3016 14.9304 18.4248 15.1872 18.4972C15.4441 18.5696 15.7128 18.5897 15.9775 18.5564C16.305 18.4971 16.6137 18.3609 16.8785 18.159C17.1432 17.9572 17.3564 17.6954 17.5005 17.3951C17.6446 17.0949 17.7156 16.7647 17.7077 16.4317C17.6997 16.0987 17.613 15.7723 17.4547 15.4793C17.2614 15.3391 17.0533 15.2235 16.8351 15.1339C17.0715 15.226 17.2966 15.3485 17.5046 15.4993C18.0049 15.8976 18.4424 16.3691 18.8022 16.898L18.8927 17.0137L18.8927 17.0137C19.0823 17.2564 19.2729 17.5004 19.4709 17.7072C18.5404 18.6311 17.288 19.1576 15.9775 19.1758ZM16.3168 15.769C16.2085 15.8106 16.1171 15.8873 16.0574 15.9869C15.9977 16.0865 15.9731 16.2032 15.9875 16.3185C15.9949 16.3856 16.0156 16.4505 16.0483 16.5096C16.081 16.5686 16.1251 16.6206 16.178 16.6624C16.2309 16.7042 16.2916 16.7351 16.3566 16.7532C16.4216 16.7714 16.4895 16.7764 16.5564 16.7681H16.6063C16.5618 16.9495 16.4637 17.1132 16.3248 17.238C16.186 17.3627 16.0127 17.4427 15.8278 17.4674H15.6481C15.4335 17.4396 15.2337 17.3427 15.0789 17.1913C14.924 17.04 14.8226 16.8423 14.7897 16.6282C14.7628 16.3782 14.8311 16.1271 14.981 15.9253C15.1305 15.7238 15.3504 15.5861 15.5968 15.5395C15.3446 15.5862 15.12 15.7284 14.9697 15.9364C14.8191 16.1448 14.7547 16.4034 14.7897 16.6582C14.8226 16.8723 14.924 17.0699 15.0789 17.2213C15.2337 17.3727 15.4335 17.4696 15.6481 17.4974H15.8377C16.0209 17.4708 16.1919 17.39 16.3289 17.2654C16.4658 17.1408 16.5625 16.978 16.6063 16.7981C16.7293 16.7633 16.8359 16.686 16.9072 16.5799C16.9785 16.4737 17.0098 16.3457 16.9956 16.2186C16.9882 16.1515 16.9675 16.0865 16.9348 16.0275C16.9021 15.9685 16.858 15.9165 16.805 15.8747C16.7521 15.8329 16.6914 15.802 16.6264 15.7838C16.5615 15.7657 16.4936 15.7607 16.4266 15.769H16.3168Z", acceptAllChanges: "M9.36499 16.7348C9.38499 16.7547 9.41212 16.7659 9.44041 16.7659H10.9881C10.9028 16.6008 10.9289 16.3933 11.0663 16.2541L11.7266 15.585H10.1444C10.0549 15.5701 9.97363 15.5238 9.91498 15.4547C9.85639 15.3856 9.82422 15.298 9.82422 15.2074C9.82422 15.1169 9.85639 15.0292 9.91498 14.9601C9.97363 14.891 10.0549 14.8448 10.1444 14.8298H12.4879C12.5584 14.785 12.6407 14.7607 12.7257 14.7607C12.8106 14.7607 12.893 14.785 12.9635 14.8298H16.5295L18.3303 13.0091C18.4135 12.925 18.5271 12.8776 18.6456 12.8777C18.7642 12.8777 18.8777 12.9252 18.9609 13.0094L20 14.0621V8.25532H16.8001C16.7301 8.27288 16.6568 8.27288 16.5868 8.25532C16.3485 8.1935 16.1367 8.0565 15.9829 7.86478C15.8292 7.67306 15.7416 7.43688 15.7335 7.19149V4H9.44041C9.41293 4.0024 9.38718 4.01437 9.36767 4.03383C9.34816 4.05329 9.33615 4.07897 9.33375 4.10638V16.6596C9.33375 16.6878 9.34499 16.7148 9.36499 16.7348ZM10.0744 17.2979H11.4803L12.259 18.0957H5.06727C5.01734 18.0957 4.96838 18.1057 4.9232 18.1246C4.8788 18.1431 4.83798 18.1702 4.80335 18.2048C4.7333 18.2746 4.69398 18.3693 4.69398 18.468C4.69398 18.5668 4.7333 18.6615 4.80335 18.7313C4.87333 18.8011 4.96832 18.8404 5.06727 18.8404H12.9857L13.7947 19.6693L14.0836 19.9574H4.10733C4.09291 19.9591 4.07829 19.9576 4.06457 19.9528C4.05085 19.9481 4.03838 19.9403 4.02812 19.9301C4.01785 19.9198 4.01004 19.9074 4.00529 19.8937C4.00054 19.88 3.99896 19.8654 4.00067 19.8511V7.29787C4.00067 7.26966 4.01191 7.2426 4.03191 7.22265C4.05192 7.2027 4.07905 7.19149 4.10733 7.19149H8.70447V9.05319H5.06727C4.97294 9.05867 4.88453 9.10069 4.8208 9.17019C4.757 9.23973 4.72302 9.33135 4.72594 9.42553C4.72289 9.52082 4.75654 9.61364 4.82002 9.6849C4.88356 9.75613 4.97203 9.80038 5.06727 9.8085H8.70447V10.5638H5.06727C5.01968 10.5652 4.97274 10.5759 4.92932 10.5954C4.88583 10.6148 4.84664 10.6426 4.8139 10.6772C4.78122 10.7118 4.7557 10.7525 4.73877 10.7969C4.72184 10.8413 4.7139 10.8887 4.71527 10.9361C4.7139 10.9837 4.72184 11.031 4.73877 11.0754C4.74424 11.0897 4.75055 11.1037 4.75778 11.1171C4.76162 11.1243 4.76566 11.1313 4.76995 11.1382C4.78265 11.1585 4.79736 11.1776 4.8139 11.1951C4.84664 11.2297 4.88583 11.2575 4.92932 11.2769C4.95491 11.2884 4.98173 11.2968 5.0092 11.3021C5.02834 11.3058 5.04774 11.3079 5.06727 11.3085H8.70447V12.0638H5.06734C4.97782 12.0789 4.89651 12.1251 4.83792 12.1942C4.77926 12.2633 4.7471 12.351 4.7471 12.4415C4.7471 12.5321 4.77926 12.6197 4.83792 12.6888C4.89651 12.758 4.97782 12.8041 5.06734 12.8192H8.70447V13.5745H5.06734C4.97782 13.5895 4.89651 13.6357 4.83792 13.7048C4.81383 13.7332 4.79424 13.7647 4.77946 13.7983C4.7583 13.8465 4.7471 13.8988 4.7471 13.9522C4.7471 14.0427 4.77926 14.1303 4.83792 14.1994C4.89651 14.2686 4.97782 14.3147 5.06734 14.3298H8.70447V15.0744H5.06727C4.97776 15.0895 4.89651 15.1357 4.83785 15.2048C4.77926 15.2739 4.7471 15.3616 4.7471 15.4521C4.7471 15.5043 4.75778 15.5556 4.77809 15.6029C4.793 15.6376 4.81305 15.6701 4.83785 15.6994C4.89651 15.7685 4.97776 15.8147 5.06727 15.8298H8.70447V16.5851H5.06727C4.97776 16.6001 4.89651 16.6463 4.83785 16.7154C4.79489 16.7661 4.76618 16.8267 4.75387 16.8912C4.74938 16.9146 4.7471 16.9386 4.7471 16.9628C4.7471 17.0533 4.77926 17.1409 4.83785 17.21C4.89651 17.2792 4.97776 17.3253 5.06727 17.3404H9.95241C9.99552 17.3331 10.0367 17.3187 10.0744 17.2979ZM20 15.3204L18.5709 16.7659H19.8933C19.9216 16.7659 19.9487 16.7547 19.9687 16.7348C19.9887 16.7148 20 16.6878 20 16.6596V15.3204ZM14.7526 16.6264L13.7248 15.585H15.7825L14.7526 16.6264ZM14.9498 6.08721C14.9465 6.06854 14.9416 6.05023 14.9353 6.03244C14.9202 5.98939 14.897 5.94929 14.8665 5.91442C14.8145 5.85488 14.7444 5.81394 14.6669 5.79787H10.1337C10.0348 5.79787 9.93978 5.83709 9.8698 5.90693C9.79975 5.97676 9.76043 6.07146 9.76043 6.17022C9.76043 6.19463 9.76283 6.21879 9.76752 6.24239C9.77462 6.2782 9.78692 6.31268 9.80398 6.34479C9.82123 6.37716 9.8433 6.40709 9.8698 6.43348C9.93978 6.50332 10.0348 6.54257 10.1337 6.54257H14.6669C14.6811 6.54023 14.6951 6.53702 14.7088 6.53299C14.7206 6.52955 14.7322 6.52549 14.7436 6.52082C14.7624 6.51309 14.7806 6.50371 14.7979 6.4928C14.8378 6.46764 14.8722 6.43468 14.8991 6.39599C14.9259 6.35729 14.9447 6.31359 14.9543 6.26749C14.9554 6.26232 14.9563 6.25716 14.9571 6.25197C14.9579 6.24739 14.9586 6.24281 14.9591 6.23824C14.9612 6.22129 14.962 6.20424 14.9616 6.18723C14.961 6.16727 14.9588 6.14733 14.9549 6.12766C14.9539 6.11406 14.9523 6.10055 14.9498 6.08721ZM15.0189 7.29788H10.1445C10.0549 7.31291 9.97363 7.35911 9.91504 7.42823C9.85639 7.49738 9.82422 7.585 9.82422 7.67555C9.82422 7.76609 9.85639 7.85369 9.91504 7.92284C9.97363 7.99196 10.0549 8.03815 10.1445 8.05319H15.0189C15.0321 8.05241 15.0451 8.05095 15.058 8.04877C15.0745 8.04601 15.0906 8.04212 15.1064 8.03718C15.1669 8.01822 15.2219 7.98361 15.2654 7.93618C15.3291 7.86664 15.3632 7.77502 15.3602 7.68084C15.3606 7.67392 15.3608 7.66701 15.3608 7.66009C15.3609 7.65087 15.3606 7.64165 15.3599 7.63247C15.3592 7.62263 15.358 7.61279 15.3565 7.60302C15.3532 7.58188 15.3479 7.56104 15.3409 7.54072C15.3254 7.49575 15.301 7.45426 15.2693 7.41868C15.2492 7.39621 15.2265 7.37638 15.2017 7.35959C15.1872 7.34979 15.172 7.34102 15.1562 7.33339C15.1132 7.31265 15.0665 7.3006 15.0189 7.29788ZM10.1445 9.56381H18.496C18.5856 9.54877 18.6669 9.50258 18.7255 9.43346C18.7841 9.3643 18.8163 9.27671 18.8163 9.18617C18.8163 9.09562 18.7841 9.008 18.7255 8.93884C18.6669 8.86973 18.5856 8.82353 18.496 8.8085H10.1445C10.0549 8.82353 9.97363 8.86973 9.91504 8.93884C9.85639 9.008 9.82422 9.09562 9.82422 9.18617C9.82422 9.24412 9.83738 9.30087 9.86224 9.35236C9.87624 9.38132 9.89395 9.40859 9.91504 9.43346C9.97363 9.50258 10.0549 9.54877 10.1445 9.56381ZM10.1445 11.0638H15.0189C15.1084 11.0488 15.1897 11.0026 15.2483 10.9335C15.2854 10.8898 15.3118 10.8387 15.3263 10.7842C15.3347 10.7525 15.3391 10.7195 15.3391 10.6861C15.3391 10.5956 15.3069 10.508 15.2483 10.4389C15.1897 10.3697 15.1084 10.3235 15.0189 10.3085H10.1445C10.0549 10.3235 9.97363 10.3697 9.91504 10.4389C9.85639 10.508 9.82422 10.5956 9.82422 10.6861C9.82422 10.7424 9.83666 10.7976 9.8601 10.8478C9.87442 10.8785 9.89284 10.9073 9.91504 10.9335C9.97363 11.0026 10.0549 11.0488 10.1445 11.0638ZM18.496 12.5745H10.1444C10.0549 12.5594 9.97363 12.5132 9.91498 12.4441C9.85639 12.3749 9.82422 12.2873 9.82422 12.1968C9.82422 12.1062 9.85639 12.0186 9.91498 11.9495C9.97363 11.8803 10.0549 11.8342 10.1444 11.8191H18.496C18.5856 11.8342 18.6669 11.8803 18.7255 11.9495C18.7841 12.0186 18.8163 12.1062 18.8163 12.1968C18.8163 12.2873 18.7841 12.3749 18.7255 12.4441C18.6971 12.4776 18.6633 12.5058 18.6259 12.5276C18.5861 12.5507 18.5421 12.5667 18.496 12.5745ZM15.0189 14.0744H10.1444C10.0968 14.0731 10.0499 14.0624 10.0064 14.0429C9.96296 14.0234 9.92376 13.9956 9.89102 13.961C9.85834 13.9265 9.83282 13.8857 9.81589 13.8413C9.79897 13.7969 9.79102 13.7496 9.79239 13.7021C9.79102 13.6546 9.79897 13.6073 9.81589 13.5628C9.83282 13.5184 9.85834 13.4778 9.89102 13.4432C9.92376 13.4086 9.96296 13.3808 10.0064 13.3613C10.0499 13.3419 10.0968 13.3311 10.1444 13.3297H15.0189C15.0661 13.3311 15.1125 13.3419 15.1554 13.3615C15.1983 13.381 15.2368 13.4091 15.2686 13.4438C15.3005 13.4785 15.325 13.5193 15.3407 13.5637C15.3564 13.608 15.363 13.6551 15.3602 13.7021C15.3631 13.7963 15.3291 13.8879 15.2653 13.9574C15.2016 14.027 15.1132 14.0689 15.0189 14.0744ZM16.6188 4.52128L19.4133 7.30852C19.4293 7.32624 19.4401 7.34808 19.4443 7.37157C19.4485 7.39506 19.446 7.41925 19.4371 7.4414C19.4282 7.46356 19.4133 7.48278 19.394 7.4969C19.3747 7.51102 19.3518 7.51947 19.328 7.52128H16.5868L16.4054 7.34043V4.60639C16.4073 4.5826 16.4157 4.55979 16.4299 4.54056C16.444 4.52133 16.4633 4.50644 16.4855 4.49757C16.5077 4.48871 16.532 4.48624 16.5556 4.49043C16.5791 4.49462 16.601 4.50531 16.6188 4.52128ZM18.6454 13.3192L20 14.6915L14.7522 20L14.7416 19.9894L14.1123 19.3617L13.3976 18.6277L11.3817 16.5638L12.7257 15.2021L14.7522 17.2553L18.6454 13.3192Z", rejectAllChanges: "M9.54637 16.5847H8.96997V15.8295H12.786C12.8024 15.8265 12.8186 15.8223 12.8343 15.817C12.8535 15.8105 12.8719 15.8023 12.8897 15.7926C12.9315 15.7697 12.969 15.738 12.9997 15.6991C13.0268 15.6649 13.0478 15.6261 13.0621 15.5847H13.571V16.7656H9.79386C9.78396 16.7479 9.77269 16.731 9.76011 16.7151C9.70552 16.6459 9.62976 16.5998 9.54637 16.5847ZM13.4717 12.9573V13.3295H9.72523C9.6809 13.3309 9.63716 13.3416 9.59671 13.361C9.57578 13.3711 9.55595 13.3834 9.53745 13.3977C9.5201 13.411 9.50391 13.4262 9.48917 13.4429C9.45872 13.4775 9.43494 13.5182 9.41917 13.5626C9.41778 13.5664 9.41644 13.5703 9.41523 13.5742H8.96997V12.8189H12.786C12.8694 12.8039 12.9452 12.7577 12.9997 12.6886C13.0078 12.6784 13.0153 12.6677 13.0223 12.6568L13.029 12.6458L13.033 12.6389L13.0397 12.6266C13.0452 12.6157 13.0503 12.6046 13.055 12.5931C13.0576 12.5869 13.0599 12.5806 13.0621 12.5742H13.6872C13.6453 12.5965 13.607 12.6269 13.5746 12.6644C13.5059 12.7439 13.469 12.849 13.4717 12.9573ZM9.82598 14.0742H13.4758C13.4809 14.0932 13.4904 14.1108 13.5037 14.1251C13.5242 14.147 13.552 14.1593 13.581 14.1593H13.6008L13.571 14.1912V14.8295H9.72523C9.64183 14.8445 9.56614 14.8907 9.51149 14.9598C9.4845 14.994 9.46351 15.0328 9.4492 15.0741H8.96997V14.3295H9.54637C9.62976 14.3145 9.70552 14.2683 9.76011 14.1992C9.78947 14.162 9.81166 14.1195 9.82598 14.0742ZM18.9075 8.2552V12.5317H17.7846V12.323C17.7978 12.2827 17.8047 12.2399 17.8047 12.1965C17.8047 12.106 17.7747 12.0184 17.7201 11.9493C17.6655 11.8801 17.5897 11.834 17.5063 11.8189H9.72523C9.64183 11.834 9.56614 11.8801 9.51149 11.9493C9.48444 11.9835 9.46351 12.0222 9.4492 12.0636H8.96997V11.3083H9.54637C9.63425 11.3028 9.71662 11.2608 9.776 11.1913C9.80687 11.1551 9.83029 11.113 9.84527 11.0676L9.84654 11.0637H14.2667C14.3501 11.0486 14.4258 11.0024 14.4805 10.9333C14.5231 10.8794 14.5507 10.8142 14.5607 10.7452C14.5636 10.7258 14.565 10.706 14.565 10.686C14.565 10.6658 14.5635 10.6458 14.5606 10.626C14.5572 10.6026 14.5516 10.5796 14.5442 10.5573C14.5299 10.5144 14.5084 10.4741 14.4805 10.4387C14.4258 10.3696 14.3501 10.3234 14.2667 10.3083H9.72529C9.6832 10.3159 9.64299 10.3314 9.60653 10.3538C9.57081 10.3759 9.5386 10.4045 9.51155 10.4387C9.49639 10.4579 9.4831 10.4785 9.47182 10.5002C9.46133 10.5205 9.45259 10.5417 9.44568 10.5636H8.96997V9.80838H9.16873C9.25656 9.80286 9.33899 9.76085 9.39837 9.69131C9.45775 9.62177 9.48947 9.53022 9.48674 9.43601C9.48711 9.42951 9.48735 9.42302 9.48741 9.41653C9.48741 9.41049 9.48729 9.40445 9.48705 9.39848C9.49457 9.41055 9.50269 9.42218 9.51155 9.43334C9.56614 9.50249 9.64189 9.54866 9.72529 9.56372H17.5063C17.5897 9.54866 17.6655 9.50249 17.7201 9.43334C17.7747 9.36419 17.8047 9.2766 17.8047 9.18603C17.8047 9.09552 17.7747 9.00786 17.7201 8.93878C17.6655 8.86963 17.5897 8.82346 17.5063 8.8084H9.72529C9.64189 8.82346 9.56614 8.86963 9.51155 8.93878C9.4569 9.00786 9.42694 9.09552 9.42694 9.18603L9.427 9.19707L9.42754 9.20875C9.41972 9.19661 9.41123 9.18499 9.40201 9.17389C9.38478 9.15311 9.36537 9.1346 9.34427 9.11863C9.33735 9.11344 9.33026 9.1085 9.32298 9.10383C9.31855 9.10097 9.31406 9.09824 9.30951 9.09565L9.30424 9.09266L9.29659 9.08857C9.28792 9.08402 9.27906 9.07993 9.27009 9.07623C9.2616 9.07279 9.25298 9.06974 9.24431 9.06701C9.21974 9.05935 9.19439 9.05461 9.16873 9.05305H8.96997V4.10638C8.97221 4.07897 8.9834 4.05328 9.00157 4.03383C9.01975 4.01437 9.04374 4.0024 9.06935 4H14.9325V7.1914C14.9401 7.43679 15.0216 7.67296 15.1649 7.86468C15.3082 8.0564 15.5055 8.19338 15.7275 8.2552C15.7927 8.27277 15.861 8.27277 15.9262 8.2552H18.9075ZM13.571 17.2975V19.4251L13.5722 19.4615C13.5835 19.6376 13.6323 19.8068 13.7133 19.957H4.10061C4.08718 19.9587 4.07355 19.9571 4.06077 19.9524C4.04799 19.9477 4.03637 19.9399 4.02681 19.9296C4.01724 19.9194 4.00997 19.907 4.00554 19.8933C4.00111 19.8796 3.99964 19.865 4.00124 19.8506V7.29778C4.00124 7.26957 4.01171 7.24251 4.03034 7.22256C4.04898 7.20261 4.07426 7.1914 4.10061 7.1914H8.38368V9.05305H4.99497C4.90708 9.05857 4.82471 9.10052 4.76533 9.17006C4.70589 9.2396 4.67423 9.33121 4.67696 9.42536C4.67411 9.52067 4.70547 9.61346 4.76461 9.68475C4.8238 9.75598 4.90623 9.80026 4.99497 9.80838H8.38368V10.5636H4.99497C4.96682 10.5645 4.93898 10.5692 4.91199 10.5774C4.89647 10.5821 4.88124 10.588 4.86644 10.5952C4.8494 10.6034 4.83308 10.613 4.81762 10.6241C4.79627 10.6393 4.77655 10.657 4.7589 10.6771C4.72846 10.7116 4.70468 10.7523 4.68891 10.7967C4.67314 10.8411 4.66574 10.8885 4.66701 10.9359C4.66641 10.9597 4.66792 10.9834 4.67156 11.0067C4.6752 11.03 4.68102 11.053 4.68891 11.0752C4.70468 11.1196 4.72846 11.1603 4.7589 11.1949C4.7731 11.211 4.78862 11.2256 4.80524 11.2386C4.81452 11.2459 4.82417 11.2527 4.83417 11.259C4.84461 11.2655 4.85534 11.2714 4.86644 11.2767C4.9069 11.2962 4.95063 11.3069 4.99497 11.3083H8.38368V12.0636H4.99503C4.91163 12.0787 4.83587 12.1249 4.78128 12.194C4.7526 12.2303 4.7307 12.2717 4.71639 12.3159C4.70347 12.3559 4.69667 12.3983 4.69667 12.4413C4.69667 12.5318 4.72664 12.6194 4.78128 12.6886C4.809 12.7237 4.84218 12.7529 4.87906 12.7751C4.89416 12.7842 4.90993 12.7921 4.92619 12.7988C4.94833 12.8079 4.97137 12.8147 4.99503 12.8189H8.38368V13.5742H4.99503C4.95275 13.5819 4.91242 13.5975 4.87584 13.62C4.8403 13.642 4.80822 13.6705 4.78128 13.7046C4.72664 13.7737 4.69667 13.8613 4.69667 13.9519C4.69667 14.0424 4.72664 14.13 4.78128 14.1992C4.83587 14.2683 4.91163 14.3145 4.99503 14.3295H8.38368V15.0741H4.99497C4.94644 15.0829 4.90047 15.1022 4.85977 15.1304C4.83878 15.145 4.81919 15.162 4.80136 15.1811C4.79439 15.1885 4.78765 15.1964 4.78122 15.2045C4.77188 15.2163 4.76327 15.2287 4.75539 15.2416C4.74441 15.2594 4.73495 15.2781 4.727 15.2975C4.71924 15.3163 4.71293 15.3358 4.70808 15.3558C4.70407 15.3723 4.7011 15.389 4.69922 15.4061C4.69752 15.4212 4.69667 15.4364 4.69667 15.4518C4.69667 15.5423 4.72664 15.6299 4.78122 15.6991C4.83587 15.7682 4.91157 15.8144 4.99497 15.8295H8.38368V16.5847H4.99497C4.91157 16.5998 4.83587 16.6459 4.78122 16.7151C4.72664 16.7842 4.69667 16.8718 4.69667 16.9624C4.69667 17.0529 4.72664 17.1405 4.78122 17.2097C4.83587 17.2788 4.91157 17.325 4.99497 17.34H9.54637C9.58655 17.3328 9.62496 17.3183 9.66008 17.2975H13.571ZM15.7573 4.52124L18.3609 7.30839C18.3758 7.32612 18.3858 7.34796 18.3897 7.37145C18.3937 7.39493 18.3914 7.41913 18.3831 7.44128C18.3748 7.46343 18.3609 7.48266 18.3429 7.49678C18.325 7.51089 18.3036 7.51934 18.2814 7.52115H15.7275L15.5585 7.34031V4.60634C15.5602 4.58255 15.5681 4.55975 15.5813 4.54051C15.5945 4.52128 15.6125 4.50639 15.6332 4.49753C15.6539 4.48867 15.6765 4.48619 15.6984 4.49038C15.7203 4.49457 15.7407 4.50526 15.7573 4.52124ZM14.1248 5.91437C14.1732 5.97391 14.2021 6.04884 14.2071 6.1276C14.2157 6.17377 14.2155 6.22129 14.2065 6.26739C14.2045 6.27778 14.2021 6.28804 14.1992 6.29817L14.1944 6.31388C14.1847 6.34291 14.1715 6.3705 14.1551 6.39595C14.13 6.43465 14.098 6.46757 14.0608 6.49276C14.0354 6.5099 14.008 6.52328 13.9794 6.53244C13.9661 6.53672 13.9525 6.5401 13.9387 6.5425H9.71529C9.62309 6.5425 9.5346 6.50328 9.4694 6.43342C9.40413 6.36362 9.3675 6.26889 9.3675 6.17013C9.3675 6.07144 9.40413 5.97671 9.4694 5.90691C9.5346 5.83704 9.62309 5.79783 9.71529 5.79783H13.9387C13.9718 5.80516 14.0034 5.81769 14.0326 5.83484C14.0672 5.85522 14.0984 5.88204 14.1248 5.91437ZM14.2667 7.29776H9.72529C9.69606 7.30302 9.66773 7.31211 9.64092 7.3247C9.62612 7.33171 9.61175 7.33977 9.59798 7.34879C9.56565 7.36996 9.53642 7.39664 9.51155 7.42813C9.4569 7.49722 9.42694 7.58487 9.42694 7.67538C9.42694 7.70155 9.42942 7.72752 9.43434 7.75285C9.44635 7.81505 9.47273 7.87355 9.51155 7.9227C9.55292 7.9751 9.60647 8.01432 9.66628 8.03678C9.67762 8.04107 9.6892 8.04477 9.70097 8.04775C9.70898 8.04983 9.71711 8.05158 9.72529 8.05308H14.2667C14.3546 8.04756 14.437 8.00555 14.4964 7.93601C14.5558 7.86647 14.5875 7.77492 14.5847 7.68071C14.5874 7.63318 14.5813 7.58559 14.5667 7.54059C14.5522 7.4956 14.5296 7.45417 14.5 7.41859C14.4704 7.38301 14.4346 7.35398 14.3946 7.33327C14.3546 7.31256 14.3111 7.30048 14.2667 7.29776ZM4.99497 18.84H12.786C12.8783 18.84 12.9667 18.8008 13.032 18.731C13.0972 18.6611 13.1338 18.5664 13.1338 18.4677C13.1338 18.3689 13.0972 18.2742 13.032 18.2044C12.9667 18.1346 12.8783 18.0954 12.786 18.0954H4.99497C4.90277 18.0954 4.81428 18.1346 4.74908 18.2044C4.68381 18.2742 4.64718 18.3689 4.64718 18.4677C4.64718 18.5664 4.68381 18.6611 4.74908 18.731C4.81428 18.8008 4.90277 18.84 4.99497 18.84ZM17.5858 12.7444H19.5733H19.623C19.7249 12.7499 19.821 12.7971 19.8913 12.8764C19.9616 12.9556 20.0007 13.0607 20.0006 13.17V13.8295C20.0007 13.8458 19.9976 13.862 19.9914 13.8769C19.9853 13.8918 19.9764 13.9052 19.9652 13.9163C19.9539 13.9273 19.9407 13.9357 19.9262 13.9409C19.9118 13.9461 19.8965 13.948 19.8814 13.9465H13.7797C13.7507 13.9465 13.7229 13.9342 13.7024 13.9123C13.6819 13.8903 13.6704 13.8606 13.6704 13.8295V13.17C13.6677 13.0617 13.7046 12.9566 13.7733 12.8771C13.842 12.7976 13.9371 12.75 14.0381 12.7444H16.0256V12.5104C16.0352 12.439 16.0687 12.3737 16.1199 12.3268C16.1711 12.2798 16.2365 12.2544 16.3039 12.2551H17.2976C17.3667 12.2517 17.4345 12.276 17.4878 12.3232C17.541 12.3704 17.576 12.4371 17.5858 12.5104V12.7444ZM14.0679 19.4251V14.1912H19.5037V19.4251C19.4935 19.585 19.4256 19.7344 19.3143 19.8416C19.203 19.9488 19.0571 20.0055 18.9075 19.9996H14.6642C14.5146 20.0055 14.3687 19.9488 14.2574 19.8416C14.1461 19.7344 14.0781 19.585 14.0679 19.4251ZM15.5983 15.1593H15.2505C15.0969 15.1593 14.9723 15.2926 14.9723 15.4572V18.7336C14.9723 18.8981 15.0969 19.0315 15.2505 19.0315H15.5983C15.752 19.0315 15.8766 18.8981 15.8766 18.7336V15.4572C15.8766 15.2926 15.752 15.1593 15.5983 15.1593ZM16.9598 15.1593H16.612C16.4583 15.1593 16.3337 15.2926 16.3337 15.4572V18.7336C16.3337 18.8981 16.4583 19.0315 16.612 19.0315H16.9598C17.1135 19.0315 17.238 18.8981 17.238 18.7336V15.4572C17.238 15.2926 17.1135 15.1593 16.9598 15.1593ZM17.9635 15.1593H18.3113C18.465 15.1593 18.5895 15.2926 18.5895 15.4572V18.7336C18.5895 18.8981 18.465 19.0315 18.3113 19.0315H17.9635C17.8098 19.0315 17.6852 18.8981 17.6852 18.7336V15.4572C17.6852 15.2926 17.8098 15.1593 17.9635 15.1593Z", acceptSingleChange: "M17.2 20H15.6628L17.33 18.3091V19.87C17.33 19.8871 17.3266 19.904 17.3201 19.9197C17.3136 19.9355 17.304 19.9499 17.2919 19.9619C17.2799 19.974 17.2655 19.9836 17.2497 19.9901C17.234 19.9966 17.2171 20 17.2 20ZM4.13 20H14.4978L14.1823 19.6791L13.5135 18.9904L13.5123 18.9891L13.0529 18.52H5C4.87537 18.52 4.75586 18.4705 4.66766 18.3823C4.57953 18.2942 4.53003 18.1747 4.53003 18.05C4.53003 17.9253 4.57953 17.8058 4.66766 17.7177C4.75586 17.6295 4.87537 17.58 5 17.58H12.1323L11.6235 17.0604L11.6231 16.48L12.8831 15.19L13.4765 15.1896L15.0807 16.8276L17.33 14.5413V9.3H13.28C13.207 9.30976 13.133 9.30976 13.06 9.3C12.7697 9.22119 12.5113 9.05343 12.3212 8.82027C12.1311 8.58711 12.0187 8.30026 12 8V4H4.13C4.09552 4 4.06246 4.0137 4.03808 4.03808C4.0137 4.06246 4 4.09552 4 4.13V19.87C4 19.9045 4.0137 19.9375 4.03808 19.9619C4.06246 19.9863 4.09552 20 4.13 20ZM13.1 4.65L16.6 8.15C16.6212 8.17232 16.6355 8.20028 16.6412 8.23051C16.6469 8.26075 16.6437 8.29199 16.6321 8.32048C16.6205 8.34898 16.6009 8.37352 16.5757 8.39117C16.5505 8.40882 16.5208 8.41883 16.49 8.42H13.06L12.83 8.19V4.76C12.8312 4.72925 12.8412 4.6995 12.8588 4.67429C12.8765 4.64909 12.901 4.62951 12.9295 4.6179C12.958 4.6063 12.9893 4.60315 13.0195 4.60884C13.0497 4.61453 13.0777 4.62882 13.1 4.65ZM11 6.72C11.0027 6.66089 10.9937 6.60184 10.9735 6.5462C10.9534 6.49057 10.9224 6.43948 10.8825 6.39581C10.8425 6.35217 10.7944 6.3168 10.7408 6.29178C10.6871 6.26678 10.6292 6.25256 10.57 6.25H5C4.88239 6.25772 4.77252 6.31131 4.69397 6.39917C4.61542 6.48706 4.57452 6.60226 4.58002 6.72C4.57452 6.83774 4.61542 6.95294 4.69397 7.04083C4.77252 7.12869 4.88239 7.18228 5 7.19H10.6C10.7141 7.1774 10.8189 7.12173 10.8933 7.03436C10.9677 6.94702 11.0058 6.83456 11 6.72ZM11.1 8.14001H5C4.87537 8.14001 4.75586 8.18954 4.66766 8.27768C4.57953 8.36581 4.53003 8.48535 4.53003 8.61002C4.53003 8.73468 4.57953 8.85422 4.66766 8.94235C4.71558 8.99023 4.77277 9.02673 4.83496 9.05008C4.86932 9.06296 4.90521 9.07184 4.94189 9.07642C4.96106 9.0788 4.98047 9.08002 5 9.08002H11.1C11.2247 9.08002 11.3442 9.03049 11.4324 8.94235C11.5205 8.85422 11.57 8.73468 11.57 8.61002C11.57 8.48535 11.5205 8.36581 11.4324 8.27768C11.3442 8.18954 11.2247 8.14001 11.1 8.14001ZM5 11H15.45C15.5826 11 15.7098 10.9473 15.8035 10.8535C15.8973 10.7598 15.95 10.6326 15.95 10.5C15.95 10.3674 15.8973 10.2402 15.8035 10.1465C15.7098 10.0527 15.5826 10 15.45 10H5C4.86737 10 4.74023 10.0527 4.64642 10.1465C4.55267 10.2402 4.5 10.3674 4.5 10.5C4.5 10.6326 4.55267 10.7598 4.64642 10.8535C4.74023 10.9473 4.86737 11 5 11ZM5 12.86H11.1C11.2211 12.8523 11.3346 12.798 11.4166 12.7085C11.4986 12.6191 11.5428 12.5013 11.54 12.38C11.5427 12.2597 11.4982 12.1431 11.416 12.0552C11.3337 11.9673 11.2203 11.9152 11.1 11.91H5C4.94086 11.9126 4.88287 11.9268 4.82922 11.9518C4.77563 11.9768 4.72748 12.0122 4.6875 12.0558C4.65833 12.0878 4.63391 12.1237 4.61505 12.1624C4.60809 12.1767 4.60193 12.1913 4.5965 12.2062C4.58264 12.2443 4.5741 12.2841 4.57092 12.3243C4.56946 12.3428 4.56915 12.3614 4.57001 12.38C4.56451 12.5004 4.60651 12.6181 4.68689 12.7079C4.76733 12.7976 4.87976 12.8523 5 12.86ZM15.45 14.74H5C4.87537 14.74 4.75586 14.6905 4.66766 14.6023C4.57953 14.5142 4.53003 14.3947 4.53003 14.27C4.53003 14.1453 4.57953 14.0258 4.66766 13.9377C4.75586 13.8495 4.87537 13.8 5 13.8H15.45C15.5747 13.8 15.6942 13.8495 15.7823 13.9377C15.8705 14.0258 15.92 14.1453 15.92 14.27C15.92 14.3947 15.8705 14.5142 15.7823 14.6023C15.6942 14.6905 15.5747 14.74 15.45 14.74ZM11.1 16.63H5C4.87537 16.63 4.75586 16.5805 4.66766 16.4923C4.57953 16.4042 4.53003 16.2846 4.53003 16.16C4.53003 16.0353 4.57953 15.9158 4.66766 15.8276C4.75586 15.7395 4.87537 15.69 5 15.69H11.1C11.2247 15.69 11.3442 15.7395 11.4324 15.8276C11.5205 15.9158 11.57 16.0353 11.57 16.16C11.57 16.2846 11.5205 16.4042 11.4324 16.4923C11.3442 16.5805 11.2247 16.63 11.1 16.63ZM18.73 13.71L20 15.01L15.08 20L15.07 19.99L14.48 19.39L13.81 18.7L11.92 16.77L13.18 15.48L15.08 17.42L18.73 13.71Z", rejectSingleChange: "M17.0495 11.5C17.1461 11.5 17.241 11.5173 17.33 11.5501V9.3H13.28C13.207 9.30976 13.133 9.30976 13.06 9.3C12.7697 9.22119 12.5113 9.05343 12.3212 8.82027C12.1311 8.58711 12.0187 8.30026 12 8V4H4.13C4.09552 4 4.06246 4.0137 4.03808 4.03808C4.0137 4.06246 4 4.09552 4 4.13V19.87C4 19.9045 4.0137 19.9375 4.03808 19.9619C4.06246 19.9863 4.09552 20 4.13 20H13.2305C13.1075 19.8287 13.0338 19.6249 13.0205 19.4112L13.0195 19.3956V18.52H5C4.87537 18.52 4.75586 18.4705 4.66772 18.3823C4.57959 18.2942 4.53003 18.1747 4.53003 18.05C4.53003 18.0119 4.53467 17.9742 4.54358 17.9378C4.56396 17.8552 4.60657 17.7788 4.66772 17.7177C4.75586 17.6295 4.87537 17.58 5 17.58H13.0195V14.74H5C4.87537 14.74 4.75586 14.6905 4.66772 14.6023C4.57959 14.5142 4.53003 14.3947 4.53003 14.27C4.53003 14.1453 4.57959 14.0258 4.66772 13.9377C4.75586 13.8495 4.87537 13.8 5 13.8H12.8393C12.6229 13.6377 12.4998 13.3897 12.4998 13.1032C12.4997 12.8414 12.6008 12.5847 12.7513 12.3911C12.9 12.1998 13.1561 12 13.4994 12L15.2519 12C15.2928 11.8972 15.3589 11.7915 15.4649 11.6992C15.6135 11.5698 15.8041 11.499 16.0011 11.5H17.0495ZM13.1 4.65L16.6 8.15C16.6211 8.17232 16.6354 8.20028 16.6411 8.23051C16.6468 8.26075 16.6437 8.29199 16.6321 8.32048C16.6204 8.34898 16.6009 8.37352 16.5757 8.39117C16.5505 8.40882 16.5207 8.41883 16.49 8.42H13.06L12.83 8.19V4.76C12.8311 4.72925 12.8411 4.6995 12.8588 4.67429C12.8764 4.64909 12.901 4.62951 12.9295 4.6179C12.958 4.6063 12.9892 4.60315 13.0194 4.60884C13.0497 4.61453 13.0776 4.62882 13.1 4.65ZM11 6.72C11.0027 6.66089 10.9937 6.60184 10.9735 6.5462C10.9716 6.5408 10.9695 6.53543 10.9673 6.53012C10.9626 6.51852 10.9575 6.50717 10.9518 6.49603C10.9406 6.47391 10.9275 6.45273 10.9127 6.43274C10.9033 6.41992 10.8932 6.40759 10.8824 6.39581C10.8425 6.35217 10.7943 6.3168 10.7407 6.29178C10.6871 6.26678 10.629 6.25256 10.5699 6.25H5C4.88232 6.25772 4.77246 6.31131 4.69397 6.39917C4.61536 6.48706 4.57446 6.60226 4.57996 6.72C4.57715 6.7811 4.58679 6.84152 4.60767 6.8978C4.61523 6.91803 4.62415 6.93771 4.63452 6.9567C4.65088 6.98669 4.67078 7.01495 4.69397 7.04083C4.77246 7.12869 4.88232 7.18228 5 7.19H10.6C10.714 7.1774 10.8188 7.12173 10.8932 7.03436C10.922 7.00049 10.9454 6.96283 10.9629 6.92273C10.9725 6.9006 10.9805 6.87775 10.9865 6.8544C10.9933 6.82791 10.9977 6.80075 10.9995 6.77325C11.0001 6.76453 11.0004 6.75574 11.0005 6.74695C11.0006 6.73798 11.0005 6.729 11 6.72ZM11.1 8.14001H5C4.97534 8.14001 4.95081 8.14194 4.92676 8.14575C4.89587 8.15063 4.8656 8.15857 4.83643 8.1694C4.77368 8.19272 4.71606 8.2294 4.66772 8.27768C4.57959 8.36581 4.53003 8.48535 4.53003 8.61002C4.53003 8.73468 4.57959 8.85422 4.66772 8.94235C4.75586 9.03049 4.87537 9.08002 5 9.08002H11.1C11.2247 9.08002 11.3442 9.03049 11.4324 8.94235C11.4617 8.91306 11.4867 8.88028 11.5071 8.845C11.5349 8.79691 11.554 8.74414 11.5634 8.68915C11.5677 8.66318 11.5701 8.63672 11.5701 8.61002C11.5701 8.48535 11.5205 8.36581 11.4324 8.27768C11.3929 8.23831 11.3474 8.20663 11.2979 8.18365C11.2365 8.15518 11.1689 8.14001 11.1 8.14001ZM5 11H15.45C15.5826 11 15.7098 10.9473 15.8036 10.8535C15.8973 10.7598 15.95 10.6326 15.95 10.5C15.95 10.3674 15.8973 10.2402 15.8036 10.1465C15.7098 10.0527 15.5826 10 15.45 10H5C4.86743 10 4.74023 10.0527 4.64648 10.1465C4.55273 10.2402 4.5 10.3674 4.5 10.5C4.5 10.6326 4.55273 10.7598 4.64648 10.8535C4.74023 10.9473 4.86743 11 5 11ZM5 12.86H11.1C11.2211 12.8523 11.3346 12.798 11.4166 12.7085C11.4987 12.6191 11.5428 12.5013 11.54 12.38C11.5427 12.2597 11.4982 12.1431 11.4159 12.0552C11.3336 11.9673 11.2202 11.9152 11.1 11.91H5C4.94092 11.9126 4.88281 11.9268 4.82922 11.9518C4.77563 11.9768 4.72742 12.0122 4.6875 12.0558C4.64758 12.0995 4.6167 12.1506 4.59644 12.2062C4.58899 12.2266 4.58313 12.2475 4.57874 12.2687C4.57129 12.3052 4.56824 12.3426 4.56995 12.38C4.56445 12.5004 4.60645 12.6181 4.68689 12.7079C4.76733 12.7976 4.87976 12.8523 5 12.86ZM11.1 16.63H5C4.87537 16.63 4.75586 16.5805 4.66772 16.4923C4.57959 16.4042 4.53003 16.2846 4.53003 16.16C4.53003 16.0353 4.57959 15.9158 4.66772 15.8276C4.75586 15.7395 4.87537 15.69 5 15.69H11.1C11.2247 15.69 11.3442 15.7395 11.4324 15.8276C11.5205 15.9158 11.5701 16.0353 11.5701 16.16C11.5701 16.2846 11.5205 16.4042 11.4324 16.4923C11.3442 16.5805 11.2247 16.63 11.1 16.63ZM19.59 12.53H17.36V12.3C17.3574 12.2195 17.3236 12.1432 17.2657 12.0872C17.2078 12.0313 17.1305 12 17.05 12H16C15.9242 11.9994 15.8509 12.0265 15.7938 12.0762C15.7367 12.126 15.6997 12.1949 15.69 12.27V12.5H13.44C13.3768 12.4994 13.3142 12.5125 13.2565 12.5382C13.1988 12.564 13.1473 12.6019 13.1055 12.6493C13.0638 12.6968 13.0327 12.7526 13.0145 12.8132C12.9963 12.8737 12.9913 12.9374 13 13V13.67C13 13.6871 13.0033 13.704 13.0099 13.7198C13.0164 13.7355 13.026 13.7499 13.038 13.7619C13.0501 13.774 13.0644 13.7836 13.0802 13.7901C13.096 13.7966 13.1129 13.8 13.13 13.8H19.84C19.8611 13.8054 19.8834 13.8054 19.9045 13.8C19.9257 13.7946 19.9452 13.7839 19.9611 13.7689C19.9771 13.754 19.989 13.7352 19.9958 13.7144C20.0026 13.6937 20.004 13.6715 20 13.65V13C20.0028 12.8866 19.9617 12.7765 19.8853 12.6927C19.809 12.6088 19.7031 12.5577 19.59 12.55V12.53ZM13.52 14V19.38C13.5303 19.5454 13.6054 19.7 13.7289 19.8105C13.8525 19.9209 14.0145 19.9782 14.18 19.97H18.84C19.0055 19.9782 19.1676 19.9209 19.2911 19.8105C19.4146 19.7 19.4897 19.5454 19.5 19.38V14H13.52ZM15.52 18.67C15.52 18.7522 15.4874 18.8311 15.4292 18.8892C15.3711 18.9473 15.2922 18.98 15.21 18.98H14.83C14.7478 18.98 14.669 18.9473 14.6108 18.8892C14.5527 18.8311 14.52 18.7522 14.52 18.67V15.33C14.52 15.2893 14.528 15.249 14.5436 15.2114C14.5592 15.1738 14.582 15.1396 14.6108 15.1108C14.6396 15.082 14.6738 15.0592 14.7114 15.0436C14.749 15.028 14.7893 15.02 14.83 15.02H15.21C15.2507 15.02 15.291 15.028 15.3287 15.0436C15.3663 15.0592 15.4004 15.082 15.4292 15.1108C15.458 15.1396 15.4808 15.1738 15.4964 15.2114C15.512 15.249 15.52 15.2893 15.52 15.33V18.67ZM17.01 18.67C17.01 18.7522 16.9774 18.8311 16.9192 18.8892C16.8611 18.9473 16.7822 18.98 16.7 18.98H16.32C16.2798 18.98 16.2399 18.9719 16.2029 18.9562C16.1658 18.9405 16.1323 18.9176 16.1043 18.8886C16.0763 18.8597 16.0544 18.8254 16.0399 18.7879C16.0254 18.7503 16.0187 18.7102 16.02 18.67V15.33C16.0187 15.2898 16.0254 15.2497 16.0399 15.2121C16.0544 15.1746 16.0763 15.1403 16.1043 15.1114C16.1323 15.0824 16.1658 15.0595 16.2029 15.0438C16.2399 15.0281 16.2798 15.02 16.32 15.02H16.7C16.7407 15.02 16.781 15.028 16.8187 15.0436C16.8563 15.0592 16.8904 15.082 16.9192 15.1108C16.948 15.1396 16.9708 15.1738 16.9864 15.2114C17.002 15.249 17.01 15.2893 17.01 15.33V18.67ZM18.51 18.67C18.51 18.7107 18.502 18.751 18.4864 18.7886C18.4708 18.8262 18.448 18.8604 18.4192 18.8892C18.3904 18.918 18.3563 18.9408 18.3187 18.9564C18.281 18.972 18.2407 18.98 18.2 18.98H17.82C17.7378 18.98 17.659 18.9473 17.6008 18.8892C17.5427 18.8311 17.51 18.7522 17.51 18.67V15.33C17.51 15.2893 17.518 15.249 17.5336 15.2114C17.5492 15.1738 17.572 15.1396 17.6008 15.1108C17.6296 15.082 17.6638 15.0592 17.7014 15.0436C17.739 15.028 17.7793 15.02 17.82 15.02H18.2C18.2407 15.02 18.281 15.028 18.3187 15.0436C18.3563 15.0592 18.3904 15.082 18.4192 15.1108C18.448 15.1396 18.4708 15.1738 18.4864 15.2114C18.502 15.249 18.51 15.2893 18.51 15.33V18.67Z" }, a.FILEICONS = { docIcon: { extension: ".doc", path: `<g id="surface1">
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>
      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 9.617188 46.875 C 13.234375 46.875 16.160156 43.929688 16.160156 40.292969 C 16.160156 36.695312 13.234375 33.75 9.617188 33.75 L 7.402344 33.75 C 6.820312 33.75 6.371094 34.199219 6.371094 34.78125 L 6.371094 45.84375 C 6.371094 46.335938 6.714844 46.757812 7.191406 46.855469 L 7.402344 46.875 Z M 9.617188 44.792969 L 8.453125 44.792969 L 8.453125 35.832031 L 9.617188 35.832031 C 12.089844 35.832031 14.078125 37.835938 14.078125 40.292969 C 14.078125 42.789062 12.089844 44.773438 9.617188 44.792969 Z M 24.816406 46.875 C 26.539062 46.875 28.191406 46.085938 29.296875 44.867188 C 30.460938 43.648438 31.191406 41.980469 31.191406 40.125 C 31.191406 38.269531 30.460938 36.617188 29.296875 35.382812 C 28.191406 34.144531 26.539062 33.375 24.816406 33.375 C 23.015625 33.375 21.367188 34.144531 20.222656 35.382812 C 19.058594 36.617188 18.367188 38.269531 18.367188 40.125 C 18.367188 41.980469 19.058594 43.648438 20.222656 44.867188 C 21.367188 46.085938 23.015625 46.875 24.816406 46.875 Z M 24.816406 44.738281 C 23.617188 44.738281 22.566406 44.230469 21.777344 43.386719 C 20.992188 42.582031 20.503906 41.398438 20.503906 40.125 C 20.503906 38.851562 20.992188 37.667969 21.777344 36.84375 C 22.566406 36 23.617188 35.511719 24.816406 35.511719 C 25.941406 35.511719 26.992188 36 27.777344 36.84375 C 28.546875 37.667969 29.054688 38.851562 29.054688 40.125 C 29.054688 41.398438 28.546875 42.582031 27.777344 43.386719 C 26.992188 44.230469 25.941406 44.738281 24.816406 44.738281 Z M 39.996094 46.875 C 41.648438 46.875 43.148438 46.332031 44.328125 45.414062 C 44.777344 45.054688 44.851562 44.382812 44.515625 43.914062 C 44.140625 43.460938 43.445312 43.386719 43.015625 43.707031 C 42.171875 44.382812 41.160156 44.738281 39.996094 44.738281 C 38.703125 44.738281 37.503906 44.210938 36.621094 43.386719 C 35.777344 42.5625 35.253906 41.398438 35.253906 40.125 C 35.253906 38.851562 35.777344 37.726562 36.621094 36.863281 C 37.503906 36.039062 38.703125 35.511719 39.996094 35.511719 C 41.160156 35.511719 42.191406 35.867188 43.015625 36.542969 C 43.445312 36.882812 44.140625 36.804688 44.515625 36.335938 C 44.851562 35.867188 44.777344 35.210938 44.328125 34.835938 C 43.148438 33.917969 41.648438 33.375 39.996094 33.375 C 36.246094 33.394531 33.132812 36.414062 33.117188 40.125 C 33.132812 43.855469 36.246094 46.875 39.996094 46.875 Z M 39.996094 46.875 "/>
      </g>` }, gifIcon: { extension: ".gif", path: `<g id="surface1">
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>
      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 17.394531 46.875 C 18.988281 46.875 20.46875 46.332031 21.648438 45.414062 C 21.835938 45.28125 21.949219 45.132812 22.003906 44.960938 L 22.003906 44.945312 C 22.023438 44.90625 22.023438 44.886719 22.042969 44.851562 C 22.0625 44.738281 22.097656 44.664062 22.097656 44.53125 L 22.097656 40.386719 C 22.097656 39.789062 21.613281 39.335938 21.011719 39.335938 L 17.28125 39.335938 C 16.699219 39.335938 16.210938 39.789062 16.210938 40.386719 C 16.210938 40.96875 16.699219 41.457031 17.28125 41.457031 L 19.960938 41.457031 L 19.960938 44.023438 C 19.210938 44.457031 18.332031 44.738281 17.394531 44.738281 C 16.042969 44.738281 14.863281 44.230469 14.019531 43.367188 C 13.136719 42.523438 12.613281 41.382812 12.613281 40.144531 C 12.613281 38.867188 13.136719 37.726562 14.019531 36.882812 C 14.863281 36.019531 16.042969 35.511719 17.394531 35.511719 C 18.519531 35.511719 19.550781 35.90625 20.355469 36.523438 C 20.824219 36.898438 21.519531 36.804688 21.875 36.355469 C 22.230469 35.886719 22.15625 35.195312 21.667969 34.835938 C 20.503906 33.917969 18.988281 33.375 17.394531 33.375 C 13.585938 33.375 10.472656 36.375 10.472656 40.144531 C 10.472656 43.894531 13.585938 46.875 17.394531 46.875 Z M 26.945312 46.875 C 27.507812 46.875 27.996094 46.425781 27.996094 45.84375 L 27.996094 34.78125 C 27.996094 34.199219 27.507812 33.75 26.945312 33.75 C 26.363281 33.75 25.914062 34.199219 25.914062 34.78125 L 25.914062 45.84375 C 25.914062 46.425781 26.363281 46.875 26.945312 46.875 Z M 33.066406 46.875 C 33.648438 46.875 34.117188 46.40625 34.117188 45.84375 L 34.117188 41.34375 L 38.488281 41.34375 C 39.050781 41.34375 39.519531 40.875 39.519531 40.292969 C 39.519531 39.75 39.050781 39.261719 38.488281 39.261719 L 34.117188 39.261719 L 34.117188 35.832031 L 39.199219 35.832031 C 39.742188 35.832031 40.230469 35.363281 40.230469 34.78125 C 40.230469 34.21875 39.742188 33.75 39.199219 33.75 L 33.066406 33.75 C 32.488281 33.75 32.035156 34.21875 32.035156 34.78125 L 32.035156 45.84375 C 32.035156 46.40625 32.488281 46.875 33.066406 46.875 Z M 33.066406 46.875 "/>
      </g>` }, jpegIcon: { extension: ".jpeg", path: `<g id="surface1">
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>
      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 9 43.75 C 11.140625 43.75 12.890625 42.015625 12.890625 39.875 L 12.890625 33.671875 C 12.890625 33.1875 12.5 32.8125 12.03125 32.8125 C 11.546875 32.8125 11.15625 33.1875 11.15625 33.671875 L 11.15625 39.875 C 11.15625 41.046875 10.1875 42.015625 9 42.015625 C 8.046875 42.015625 7.234375 41.390625 6.953125 40.53125 C 6.8125 40.078125 6.328125 39.828125 5.859375 39.984375 C 5.421875 40.109375 5.15625 40.59375 5.3125 41.0625 C 5.8125 42.625 7.28125 43.75 9 43.75 Z M 15.640625 43.75 C 16.125 43.75 16.515625 43.359375 16.515625 42.890625 L 16.515625 39.5 L 18.4375 39.5 C 20.296875 39.5 21.796875 38 21.796875 36.171875 C 21.796875 34.3125 20.296875 32.8125 18.4375 32.8125 L 15.640625 32.8125 C 15.171875 32.8125 14.78125 33.1875 14.78125 33.671875 L 14.78125 42.890625 C 14.78125 43.359375 15.171875 43.75 15.640625 43.75 Z M 18.4375 37.765625 L 16.515625 37.765625 L 16.515625 34.546875 L 18.4375 34.546875 C 19.34375 34.546875 20.046875 35.265625 20.0625 36.171875 C 20.046875 37.046875 19.34375 37.765625 18.4375 37.765625 Z M 29.234375 43.75 C 29.6875 43.75 30.09375 43.359375 30.09375 42.890625 C 30.09375 42.40625 29.6875 42.015625 29.234375 42.015625 L 25 42.015625 L 25 39.140625 L 28.640625 39.140625 C 29.109375 39.140625 29.5 38.75 29.5 38.265625 C 29.5 37.8125 29.109375 37.40625 28.640625 37.40625 L 25 37.40625 L 25 34.546875 L 29.234375 34.546875 C 29.6875 34.546875 30.09375 34.15625 30.09375 33.671875 C 30.09375 33.1875 29.6875 32.8125 29.234375 32.8125 L 24.125 32.8125 C 23.640625 32.8125 23.265625 33.1875 23.265625 33.671875 L 23.265625 42.890625 C 23.265625 43.359375 23.640625 43.75 24.125 43.75 C 24.125 43.75 24.140625 43.734375 24.140625 43.734375 C 24.140625 43.734375 24.140625 43.75 24.171875 43.75 Z M 37.1875 43.75 C 38.515625 43.75 39.75 43.296875 40.734375 42.53125 C 40.890625 42.421875 40.984375 42.296875 41.03125 42.15625 L 41.03125 42.140625 C 41.046875 42.109375 41.046875 42.09375 41.0625 42.0625 C 41.078125 41.96875 41.109375 41.90625 41.109375 41.796875 L 41.109375 38.34375 C 41.109375 37.914062 40.8125 37.578125 40.410156 37.492188 L 40.203125 37.46875 L 37.09375 37.46875 C 36.609375 37.46875 36.203125 37.84375 36.203125 38.34375 C 36.203125 38.828125 36.609375 39.234375 37.09375 39.234375 L 39.328125 39.234375 L 39.328125 41.375 C 38.703125 41.734375 37.96875 41.96875 37.1875 41.96875 C 36.0625 41.96875 35.078125 41.546875 34.375 40.828125 C 33.640625 40.125 33.203125 39.171875 33.203125 38.140625 C 33.203125 37.078125 33.640625 36.125 34.375 35.421875 C 35.078125 34.703125 36.0625 34.28125 37.1875 34.28125 C 38.125 34.28125 38.984375 34.609375 39.65625 35.125 C 40.046875 35.4375 40.625 35.359375 40.921875 34.984375 C 41.21875 34.59375 41.15625 34.015625 40.75 33.71875 C 39.78125 32.953125 38.515625 32.5 37.1875 32.5 C 34.015625 32.5 31.421875 35 31.421875 38.140625 C 31.421875 41.265625 34.015625 43.75 37.1875 43.75 Z M 37.1875 43.75 "/>
      </g>` }, logIcon: { extension: ".log", path: `<g id="surface1">
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>
      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 13.542969 46.875 C 14.085938 46.875 14.574219 46.40625 14.574219 45.84375 C 14.574219 45.261719 14.085938 44.792969 13.542969 44.792969 L 8.460938 44.792969 L 8.460938 34.78125 C 8.460938 34.21875 7.992188 33.75 7.410156 33.75 C 6.828125 33.75 6.378906 34.21875 6.378906 34.78125 L 6.378906 45.84375 C 6.378906 46.40625 6.828125 46.875 7.410156 46.875 Z M 21.742188 46.875 C 23.46875 46.875 25.117188 46.085938 26.222656 44.867188 C 27.386719 43.648438 28.117188 41.980469 28.117188 40.125 C 28.117188 38.269531 27.386719 36.617188 26.222656 35.382812 C 25.117188 34.144531 23.46875 33.375 21.742188 33.375 C 19.941406 33.375 18.292969 34.144531 17.148438 35.382812 C 15.984375 36.617188 15.292969 38.269531 15.292969 40.125 C 15.292969 41.980469 15.984375 43.648438 17.148438 44.867188 C 18.292969 46.085938 19.941406 46.875 21.742188 46.875 Z M 21.742188 44.738281 C 20.542969 44.738281 19.492188 44.230469 18.703125 43.386719 C 17.917969 42.582031 17.429688 41.398438 17.429688 40.125 C 17.429688 38.851562 17.917969 37.667969 18.703125 36.84375 C 19.492188 36 20.542969 35.511719 21.742188 35.511719 C 22.867188 35.511719 23.917969 36 24.703125 36.84375 C 25.472656 37.667969 25.980469 38.851562 25.980469 40.125 C 25.980469 41.398438 25.472656 42.582031 24.703125 43.386719 C 23.917969 44.230469 22.867188 44.738281 21.742188 44.738281 Z M 37.300781 46.875 C 38.894531 46.875 40.375 46.332031 41.558594 45.414062 C 41.746094 45.28125 41.855469 45.132812 41.914062 44.960938 L 41.914062 44.945312 L 41.949219 44.851562 C 41.96875 44.738281 42.007812 44.664062 42.007812 44.53125 L 42.007812 40.386719 C 42.007812 39.789062 41.519531 39.335938 40.917969 39.335938 L 37.1875 39.335938 C 36.605469 39.335938 36.121094 39.789062 36.121094 40.386719 C 36.121094 40.96875 36.605469 41.457031 37.1875 41.457031 L 39.871094 41.457031 L 39.871094 44.023438 C 39.121094 44.457031 38.238281 44.738281 37.300781 44.738281 C 35.949219 44.738281 34.769531 44.230469 33.925781 43.367188 C 33.042969 42.523438 32.519531 41.382812 32.519531 40.144531 C 32.519531 38.867188 33.042969 37.726562 33.925781 36.882812 C 34.769531 36.019531 35.949219 35.511719 37.300781 35.511719 C 38.425781 35.511719 39.457031 35.90625 40.261719 36.523438 C 40.730469 36.898438 41.425781 36.804688 41.78125 36.355469 C 42.136719 35.886719 42.0625 35.195312 41.574219 34.835938 C 40.414062 33.917969 38.894531 33.375 37.300781 33.375 C 33.496094 33.375 30.382812 36.375 30.382812 40.144531 C 30.382812 43.894531 33.496094 46.875 37.300781 46.875 Z M 37.300781 46.875 "/>
      </g>` }, movIcon: { extension: ".mov", path: `<g id="surface1">
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>
      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 15.472656 46.875 C 16.035156 46.875 16.523438 46.40625 16.523438 45.84375 L 16.523438 34.78125 C 16.523438 34.289062 16.152344 33.882812 15.679688 33.777344 L 15.472656 33.75 L 15.453125 33.75 C 15.117188 33.75 14.816406 33.898438 14.609375 34.179688 L 10.878906 39.355469 L 7.148438 34.179688 C 6.960938 33.898438 6.625 33.75 6.324219 33.75 L 6.265625 33.75 C 5.703125 33.75 5.234375 34.21875 5.234375 34.78125 L 5.234375 45.84375 C 5.234375 46.40625 5.703125 46.875 6.265625 46.875 C 6.847656 46.875 7.316406 46.40625 7.316406 45.84375 L 7.316406 37.949219 L 10 41.699219 C 10.203125 41.980469 10.523438 42.132812 10.859375 42.132812 L 10.898438 42.132812 C 11.234375 42.132812 11.535156 41.980469 11.742188 41.699219 L 14.441406 37.949219 L 14.441406 45.84375 C 14.441406 46.40625 14.890625 46.875 15.472656 46.875 Z M 25.460938 46.875 C 27.1875 46.875 28.835938 46.085938 29.941406 44.867188 C 31.105469 43.648438 31.835938 41.980469 31.835938 40.125 C 31.835938 38.269531 31.105469 36.617188 29.941406 35.382812 C 28.835938 34.144531 27.1875 33.375 25.460938 33.375 C 23.660156 33.375 22.011719 34.144531 20.867188 35.382812 C 19.703125 36.617188 19.011719 38.269531 19.011719 40.125 C 19.011719 41.980469 19.703125 43.648438 20.867188 44.867188 C 22.011719 46.085938 23.660156 46.875 25.460938 46.875 Z M 25.460938 44.738281 C 24.261719 44.738281 23.210938 44.230469 22.421875 43.386719 C 21.636719 42.582031 21.148438 41.398438 21.148438 40.125 C 21.148438 38.851562 21.636719 37.667969 22.421875 36.84375 C 23.210938 36 24.261719 35.511719 25.460938 35.511719 C 26.585938 35.511719 27.636719 36 28.421875 36.84375 C 29.191406 37.667969 29.699219 38.851562 29.699219 40.125 C 29.699219 41.398438 29.191406 42.582031 28.421875 43.386719 C 27.636719 44.230469 26.585938 44.738281 25.460938 44.738281 Z M 38.683594 46.855469 L 38.71875 46.855469 C 38.777344 46.835938 38.8125 46.820312 38.871094 46.820312 C 38.886719 46.800781 38.886719 46.800781 38.90625 46.800781 C 38.964844 46.78125 39.019531 46.726562 39.058594 46.707031 L 39.09375 46.6875 L 39.207031 46.59375 C 39.226562 46.574219 39.226562 46.574219 39.246094 46.539062 L 39.339844 46.425781 C 39.355469 46.425781 39.355469 46.425781 39.355469 46.40625 C 39.394531 46.367188 39.414062 46.292969 39.433594 46.257812 L 44.0625 35.304688 C 44.269531 34.800781 44.027344 34.179688 43.5 33.976562 C 42.996094 33.75 42.375 33.992188 42.152344 34.519531 L 38.496094 43.199219 L 34.839844 34.519531 C 34.613281 33.992188 34.011719 33.75 33.507812 33.976562 C 32.964844 34.179688 32.71875 34.800781 32.945312 35.304688 L 37.539062 46.257812 C 37.574219 46.292969 37.613281 46.367188 37.632812 46.40625 C 37.632812 46.425781 37.652344 46.425781 37.652344 46.425781 C 37.667969 46.460938 37.707031 46.5 37.746094 46.539062 C 37.746094 46.574219 37.761719 46.574219 37.761719 46.59375 C 37.820312 46.632812 37.855469 46.648438 37.894531 46.6875 L 37.914062 46.6875 C 37.96875 46.726562 38.042969 46.78125 38.082031 46.800781 L 38.101562 46.800781 C 38.101562 46.800781 38.121094 46.800781 38.121094 46.820312 C 38.15625 46.820312 38.230469 46.835938 38.269531 46.855469 L 38.308594 46.855469 L 38.402344 46.871094 L 38.496094 46.875 C 38.550781 46.875 38.605469 46.875 38.683594 46.855469 Z M 38.683594 46.855469 "/>
      </g>` }, ogvIcon: { extension: ".ogv", path: `<g id="surface1">
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>
      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 11.511719 46.875 C 13.238281 46.875 14.886719 46.085938 15.996094 44.867188 C 17.15625 43.648438 17.886719 41.980469 17.886719 40.125 C 17.886719 38.269531 17.15625 36.617188 15.996094 35.382812 C 14.886719 34.144531 13.238281 33.375 11.511719 33.375 C 9.714844 33.375 8.0625 34.144531 6.917969 35.382812 C 5.757812 36.617188 5.0625 38.269531 5.0625 40.125 C 5.0625 41.980469 5.757812 43.648438 6.917969 44.867188 C 8.0625 46.085938 9.714844 46.875 11.511719 46.875 Z M 11.511719 44.738281 C 10.3125 44.738281 9.261719 44.230469 8.476562 43.386719 C 7.6875 42.582031 7.199219 41.398438 7.199219 40.125 C 7.199219 38.851562 7.6875 37.667969 8.476562 36.84375 C 9.261719 36 10.3125 35.511719 11.511719 35.511719 C 12.636719 35.511719 13.6875 36 14.476562 36.84375 C 15.246094 37.667969 15.75 38.851562 15.75 40.125 C 15.75 41.398438 15.246094 42.582031 14.476562 43.386719 C 13.6875 44.230469 12.636719 44.738281 11.511719 44.738281 Z M 27.25 46.875 C 28.84375 46.875 30.324219 46.332031 31.507812 45.414062 C 31.695312 45.28125 31.804688 45.132812 31.863281 44.960938 L 31.863281 44.945312 C 31.882812 44.90625 31.882812 44.886719 31.898438 44.851562 C 31.917969 44.738281 31.957031 44.664062 31.957031 44.53125 L 31.957031 40.386719 C 31.957031 39.789062 31.46875 39.335938 30.867188 39.335938 L 27.136719 39.335938 C 26.554688 39.335938 26.070312 39.789062 26.070312 40.386719 C 26.070312 40.96875 26.554688 41.457031 27.136719 41.457031 L 29.820312 41.457031 L 29.820312 44.023438 C 29.070312 44.457031 28.1875 44.738281 27.25 44.738281 C 25.898438 44.738281 24.71875 44.230469 23.875 43.367188 C 22.992188 42.523438 22.46875 41.382812 22.46875 40.144531 C 22.46875 38.867188 22.992188 37.726562 23.875 36.882812 C 24.71875 36.019531 25.898438 35.511719 27.25 35.511719 C 28.375 35.511719 29.40625 35.90625 30.210938 36.523438 C 30.679688 36.898438 31.375 36.804688 31.730469 36.355469 C 32.085938 35.886719 32.011719 35.195312 31.523438 34.835938 C 30.363281 33.917969 28.84375 33.375 27.25 33.375 C 23.445312 33.375 20.332031 36.375 20.332031 40.144531 C 20.332031 43.894531 23.445312 46.875 27.25 46.875 Z M 40.191406 46.855469 L 40.230469 46.855469 C 40.285156 46.835938 40.324219 46.820312 40.378906 46.820312 C 40.398438 46.800781 40.398438 46.800781 40.417969 46.800781 C 40.472656 46.78125 40.53125 46.726562 40.566406 46.707031 C 40.605469 46.6875 40.605469 46.6875 40.605469 46.6875 L 40.71875 46.59375 C 40.738281 46.574219 40.738281 46.574219 40.753906 46.539062 L 40.847656 46.425781 C 40.867188 46.425781 40.867188 46.425781 40.867188 46.40625 C 40.90625 46.367188 40.925781 46.292969 40.941406 46.257812 L 45.574219 35.304688 C 45.78125 34.800781 45.535156 34.179688 45.011719 33.976562 C 44.503906 33.75 43.886719 33.992188 43.660156 34.519531 L 40.003906 43.199219 L 36.347656 34.519531 C 36.125 33.992188 35.523438 33.75 35.019531 33.976562 C 34.472656 34.179688 34.230469 34.800781 34.457031 35.304688 L 39.050781 46.257812 C 39.085938 46.292969 39.125 46.367188 39.144531 46.40625 C 39.144531 46.425781 39.160156 46.425781 39.160156 46.425781 C 39.179688 46.460938 39.21875 46.5 39.253906 46.539062 C 39.253906 46.574219 39.273438 46.574219 39.273438 46.59375 C 39.332031 46.632812 39.367188 46.648438 39.40625 46.6875 L 39.425781 46.6875 C 39.480469 46.726562 39.554688 46.78125 39.59375 46.800781 L 39.613281 46.800781 C 39.613281 46.800781 39.628906 46.800781 39.628906 46.820312 C 39.667969 46.820312 39.742188 46.835938 39.78125 46.855469 L 39.816406 46.855469 L 39.910156 46.871094 L 40.003906 46.875 C 40.0625 46.875 40.117188 46.875 40.191406 46.855469 Z M 40.191406 46.855469 "/>
      </g>` }, pngIcon: { extension: ".png", path: `<g id="surface1">
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>
      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 7.523438 46.875 C 8.105469 46.875 8.574219 46.40625 8.574219 45.84375 L 8.574219 41.773438 L 10.878906 41.773438 C 13.109375 41.773438 14.910156 39.976562 14.910156 37.78125 C 14.910156 35.550781 13.109375 33.75 10.878906 33.75 L 7.523438 33.75 C 6.960938 33.75 6.492188 34.199219 6.492188 34.78125 L 6.492188 45.84375 C 6.492188 46.40625 6.960938 46.875 7.523438 46.875 Z M 10.878906 39.695312 L 8.574219 39.695312 L 8.574219 35.832031 L 10.878906 35.832031 C 11.964844 35.832031 12.808594 36.695312 12.828125 37.78125 C 12.808594 38.832031 11.964844 39.695312 10.878906 39.695312 Z M 26.75 46.875 C 27.3125 46.875 27.78125 46.40625 27.78125 45.84375 L 27.78125 34.949219 C 27.78125 34.40625 27.3125 33.9375 26.75 33.9375 C 26.1875 33.9375 25.738281 34.40625 25.738281 34.949219 L 25.738281 42.675781 L 19.679688 34.292969 C 19.363281 33.84375 18.722656 33.75 18.253906 34.070312 C 17.972656 34.273438 17.824219 34.613281 17.84375 34.929688 L 17.84375 45.84375 C 17.84375 46.40625 18.292969 46.875 18.875 46.875 C 19.417969 46.875 19.886719 46.40625 19.886719 45.84375 L 19.886719 38.0625 L 25.886719 46.386719 C 25.90625 46.425781 25.941406 46.460938 25.980469 46.5 C 26.167969 46.726562 26.449219 46.875 26.75 46.875 Z M 38.082031 46.875 C 39.675781 46.875 41.15625 46.332031 42.339844 45.414062 C 42.527344 45.28125 42.636719 45.132812 42.695312 44.960938 L 42.695312 44.945312 C 42.714844 44.90625 42.714844 44.886719 42.730469 44.851562 C 42.75 44.738281 42.789062 44.664062 42.789062 44.53125 L 42.789062 40.386719 C 42.789062 39.789062 42.300781 39.335938 41.699219 39.335938 L 37.96875 39.335938 C 37.386719 39.335938 36.902344 39.789062 36.902344 40.386719 C 36.902344 40.96875 37.386719 41.457031 37.96875 41.457031 L 40.652344 41.457031 L 40.652344 44.023438 C 39.902344 44.457031 39.019531 44.738281 38.082031 44.738281 C 36.730469 44.738281 35.550781 44.230469 34.707031 43.367188 C 33.824219 42.523438 33.300781 41.382812 33.300781 40.144531 C 33.300781 38.867188 33.824219 37.726562 34.707031 36.882812 C 35.550781 36.019531 36.730469 35.511719 38.082031 35.511719 C 39.207031 35.511719 40.238281 35.90625 41.042969 36.523438 C 41.511719 36.898438 42.207031 36.804688 42.5625 36.355469 C 42.917969 35.886719 42.84375 35.195312 42.355469 34.835938 C 41.195312 33.917969 39.675781 33.375 38.082031 33.375 C 34.277344 33.375 31.164062 36.375 31.164062 40.144531 C 31.164062 43.894531 34.277344 46.875 38.082031 46.875 Z M 38.082031 46.875 "/>
      </g>` }, txtIcon: { extension: ".txt", path: `<g id="surface1">
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>
      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 12.847656 46.875 C 13.429688 46.875 13.878906 46.425781 13.878906 45.84375 L 13.878906 35.832031 L 16.859375 35.832031 C 17.421875 35.832031 17.890625 35.34375 17.890625 34.78125 C 17.890625 34.199219 17.421875 33.75 16.859375 33.75 L 8.855469 33.75 C 8.273438 33.75 7.824219 34.199219 7.824219 34.78125 C 7.824219 35.34375 8.273438 35.832031 8.855469 35.832031 L 11.816406 35.832031 L 11.816406 45.84375 C 11.816406 46.425781 12.285156 46.875 12.847656 46.875 Z M 29.019531 46.875 C 29.222656 46.875 29.429688 46.800781 29.617188 46.667969 C 30.085938 46.351562 30.160156 45.695312 29.84375 45.242188 L 26.28125 40.367188 L 29.84375 35.53125 C 30.160156 35.0625 30.085938 34.425781 29.617188 34.105469 C 29.148438 33.75 28.53125 33.84375 28.175781 34.332031 L 25.023438 38.644531 L 21.855469 34.332031 C 21.535156 33.84375 20.878906 33.75 20.429688 34.105469 C 19.960938 34.425781 19.867188 35.0625 20.1875 35.53125 L 23.75 40.367188 L 20.1875 45.242188 C 19.867188 45.695312 19.960938 46.351562 20.429688 46.667969 C 20.597656 46.800781 20.804688 46.875 21.03125 46.875 C 21.347656 46.875 21.648438 46.707031 21.855469 46.445312 L 25.023438 42.113281 L 28.175781 46.445312 C 28.378906 46.707031 28.679688 46.875 29.019531 46.875 Z M 37.464844 46.875 C 38.042969 46.875 38.496094 46.425781 38.496094 45.84375 L 38.496094 35.832031 L 41.476562 35.832031 C 42.039062 35.832031 42.507812 35.34375 42.507812 34.78125 C 42.507812 34.199219 42.039062 33.75 41.476562 33.75 L 33.46875 33.75 C 32.886719 33.75 32.4375 34.199219 32.4375 34.78125 C 32.4375 35.34375 32.886719 35.832031 33.46875 35.832031 L 36.433594 35.832031 L 36.433594 45.84375 C 36.433594 46.425781 36.902344 46.875 37.464844 46.875 Z M 37.464844 46.875 "/>
      </g>` }, webmIcon: { extension: ".webm", path: `<g id="surface1">
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>
      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 7.195312 43.734375 L 7.242188 43.734375 C 7.273438 43.71875 7.304688 43.703125 7.367188 43.703125 C 7.367188 43.6875 7.382812 43.6875 7.382812 43.6875 L 7.398438 43.6875 C 7.429688 43.671875 7.476562 43.625 7.523438 43.59375 L 7.554688 43.59375 C 7.585938 43.5625 7.617188 43.53125 7.648438 43.515625 C 7.648438 43.5 7.664062 43.5 7.664062 43.46875 L 7.757812 43.375 C 7.757812 43.375 7.757812 43.359375 7.773438 43.359375 C 7.789062 43.328125 7.820312 43.265625 7.835938 43.21875 L 9.882812 38.375 L 11.929688 43.21875 C 11.945312 43.265625 11.960938 43.328125 11.992188 43.359375 C 11.992188 43.359375 11.992188 43.375 12.023438 43.375 L 12.085938 43.46875 C 12.101562 43.5 12.101562 43.5 12.117188 43.515625 C 12.148438 43.53125 12.179688 43.5625 12.226562 43.59375 L 12.242188 43.59375 C 12.273438 43.625 12.320312 43.671875 12.382812 43.6875 C 12.398438 43.6875 12.398438 43.6875 12.414062 43.703125 C 12.445312 43.703125 12.476562 43.71875 12.523438 43.734375 L 12.570312 43.734375 L 12.640625 43.746094 L 12.710938 43.75 C 12.773438 43.75 12.820312 43.75 12.867188 43.734375 L 12.898438 43.734375 C 12.945312 43.71875 12.992188 43.703125 13.023438 43.703125 C 13.023438 43.6875 13.039062 43.6875 13.039062 43.6875 L 13.054688 43.6875 C 13.117188 43.671875 13.148438 43.625 13.195312 43.59375 L 13.210938 43.59375 C 13.242188 43.5625 13.289062 43.53125 13.320312 43.515625 C 13.320312 43.5 13.335938 43.5 13.335938 43.46875 C 13.367188 43.4375 13.398438 43.40625 13.414062 43.375 C 13.414062 43.375 13.429688 43.359375 13.429688 43.359375 C 13.460938 43.328125 13.492188 43.265625 13.507812 43.21875 L 17.335938 34.109375 C 17.523438 33.6875 17.320312 33.171875 16.898438 33 C 16.445312 32.8125 15.945312 33.015625 15.757812 33.453125 L 12.710938 40.6875 L 10.695312 35.890625 C 10.539062 35.546875 10.210938 35.359375 9.882812 35.359375 C 9.539062 35.359375 9.210938 35.546875 9.070312 35.890625 L 7.054688 40.6875 L 3.992188 33.453125 C 3.820312 33.015625 3.304688 32.8125 2.882812 33 C 2.429688 33.171875 2.242188 33.6875 2.414062 34.109375 L 6.257812 43.21875 C 6.289062 43.265625 6.304688 43.328125 6.335938 43.359375 L 6.335938 43.375 C 6.367188 43.40625 6.382812 43.4375 6.414062 43.46875 C 6.429688 43.5 6.429688 43.5 6.445312 43.515625 C 6.492188 43.53125 6.507812 43.5625 6.554688 43.59375 L 6.570312 43.59375 C 6.601562 43.625 6.664062 43.671875 6.710938 43.6875 C 6.726562 43.6875 6.726562 43.6875 6.742188 43.703125 C 6.773438 43.703125 6.804688 43.71875 6.851562 43.734375 L 6.898438 43.734375 L 6.976562 43.746094 L 7.054688 43.75 C 7.101562 43.75 7.148438 43.75 7.195312 43.734375 Z M 25.179688 43.75 C 25.632812 43.75 26.039062 43.359375 26.039062 42.890625 C 26.039062 42.40625 25.632812 42.015625 25.179688 42.015625 L 20.945312 42.015625 L 20.945312 39.140625 L 24.585938 39.140625 C 25.054688 39.140625 25.445312 38.75 25.445312 38.265625 C 25.445312 37.8125 25.054688 37.40625 24.585938 37.40625 L 20.945312 37.40625 L 20.945312 34.546875 L 25.179688 34.546875 C 25.632812 34.546875 26.039062 34.15625 26.039062 33.671875 C 26.039062 33.1875 25.632812 32.8125 25.179688 32.8125 L 20.070312 32.8125 C 19.585938 32.8125 19.210938 33.1875 19.210938 33.671875 L 19.210938 42.890625 C 19.210938 43.359375 19.585938 43.75 20.070312 43.75 C 20.070312 43.75 20.085938 43.734375 20.085938 43.734375 C 20.085938 43.734375 20.085938 43.75 20.117188 43.75 Z M 31.539062 43.75 C 33.382812 43.75 34.882812 42.25 34.882812 40.390625 C 34.882812 39.203125 34.242188 38.15625 33.304688 37.5625 C 33.679688 37.0625 33.898438 36.453125 33.898438 35.78125 C 33.898438 34.140625 32.570312 32.8125 30.929688 32.8125 L 28.710938 32.8125 C 28.242188 32.8125 27.851562 33.1875 27.851562 33.671875 L 27.851562 42.890625 C 27.851562 43.359375 28.242188 43.75 28.710938 43.75 L 28.757812 43.734375 C 28.757812 43.734375 28.757812 43.75 28.773438 43.75 Z M 30.929688 37.046875 L 29.585938 37.046875 L 29.585938 34.546875 L 30.929688 34.546875 C 31.617188 34.546875 32.164062 35.09375 32.164062 35.78125 C 32.164062 36.46875 31.617188 37.046875 30.929688 37.046875 Z M 31.539062 42.015625 L 29.585938 42.015625 L 29.585938 38.78125 L 31.539062 38.78125 C 32.429688 38.796875 33.148438 39.5 33.148438 40.390625 C 33.148438 41.296875 32.429688 42 31.539062 42.015625 Z M 45.664062 43.75 C 46.132812 43.75 46.539062 43.359375 46.539062 42.890625 L 46.539062 33.671875 C 46.539062 33.269531 46.242188 32.9375 45.859375 32.839844 L 45.664062 32.8125 L 45.648438 32.8125 C 45.367188 32.8125 45.117188 32.9375 44.945312 33.171875 L 41.835938 37.484375 L 38.726562 33.171875 C 38.570312 32.9375 38.289062 32.8125 38.039062 32.8125 L 37.992188 32.8125 C 37.523438 32.8125 37.132812 33.203125 37.132812 33.671875 L 37.132812 42.890625 C 37.132812 43.359375 37.523438 43.75 37.992188 43.75 C 38.476562 43.75 38.867188 43.359375 38.867188 42.890625 L 38.867188 36.3125 L 41.101562 39.4375 C 41.273438 39.671875 41.539062 39.796875 41.820312 39.796875 L 41.851562 39.796875 C 42.132812 39.796875 42.382812 39.671875 42.554688 39.4375 L 44.804688 36.3125 L 44.804688 42.890625 C 44.804688 43.359375 45.179688 43.75 45.664062 43.75 Z M 45.664062 43.75 "/>
      </g>` }, webpIcon: { extension: ".webp", path: `<g id="surface1">
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>
      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 9.234375 43.734375 L 9.28125 43.734375 C 9.3125 43.71875 9.34375 43.703125 9.40625 43.703125 L 9.414062 43.6875 C 9.421875 43.6875 9.421875 43.6875 9.4375 43.6875 C 9.46875 43.671875 9.515625 43.625 9.5625 43.59375 L 9.59375 43.59375 C 9.625 43.5625 9.65625 43.53125 9.6875 43.515625 C 9.6875 43.5 9.703125 43.5 9.703125 43.46875 L 9.796875 43.375 C 9.796875 43.375 9.796875 43.359375 9.8125 43.359375 C 9.828125 43.328125 9.859375 43.265625 9.875 43.21875 L 11.921875 38.375 L 13.96875 43.21875 C 13.984375 43.265625 14 43.328125 14.03125 43.359375 C 14.03125 43.359375 14.03125 43.375 14.0625 43.375 L 14.125 43.46875 C 14.140625 43.5 14.140625 43.5 14.15625 43.515625 L 14.203125 43.546875 L 14.265625 43.59375 C 14.265625 43.59375 14.265625 43.59375 14.28125 43.59375 C 14.3125 43.625 14.359375 43.671875 14.421875 43.6875 C 14.4375 43.6875 14.4375 43.6875 14.453125 43.703125 C 14.484375 43.703125 14.515625 43.71875 14.5625 43.734375 L 14.609375 43.734375 L 14.679688 43.746094 L 14.75 43.75 C 14.8125 43.75 14.859375 43.75 14.90625 43.734375 L 14.9375 43.734375 C 14.984375 43.71875 15.03125 43.703125 15.0625 43.703125 C 15.0625 43.6875 15.078125 43.6875 15.078125 43.6875 L 15.09375 43.6875 C 15.15625 43.671875 15.1875 43.625 15.234375 43.59375 L 15.25 43.59375 C 15.28125 43.5625 15.328125 43.53125 15.359375 43.515625 C 15.359375 43.5 15.375 43.5 15.375 43.46875 C 15.40625 43.4375 15.4375 43.40625 15.453125 43.375 L 15.46875 43.359375 C 15.5 43.328125 15.53125 43.265625 15.546875 43.21875 L 19.375 34.109375 C 19.5625 33.6875 19.359375 33.171875 18.9375 33 C 18.484375 32.8125 17.984375 33.015625 17.796875 33.453125 L 14.75 40.6875 L 12.734375 35.890625 C 12.578125 35.546875 12.25 35.359375 11.921875 35.359375 C 11.578125 35.359375 11.25 35.546875 11.109375 35.890625 L 9.09375 40.6875 L 6.03125 33.453125 C 5.859375 33.015625 5.34375 32.8125 4.921875 33 C 4.46875 33.171875 4.28125 33.6875 4.453125 34.109375 L 8.296875 43.21875 C 8.328125 43.265625 8.34375 43.328125 8.375 43.359375 L 8.375 43.375 C 8.40625 43.40625 8.421875 43.4375 8.453125 43.46875 C 8.46875 43.5 8.46875 43.5 8.484375 43.515625 L 8.539062 43.546875 L 8.59375 43.59375 C 8.59375 43.59375 8.59375 43.59375 8.609375 43.59375 C 8.640625 43.625 8.703125 43.671875 8.75 43.6875 C 8.765625 43.6875 8.765625 43.6875 8.78125 43.703125 C 8.8125 43.703125 8.84375 43.71875 8.890625 43.734375 L 8.9375 43.734375 L 9.015625 43.746094 L 9.09375 43.75 C 9.140625 43.75 9.1875 43.75 9.234375 43.734375 Z M 27.21875 43.75 C 27.671875 43.75 28.078125 43.359375 28.078125 42.890625 C 28.078125 42.40625 27.671875 42.015625 27.21875 42.015625 L 22.984375 42.015625 L 22.984375 39.140625 L 26.625 39.140625 C 27.09375 39.140625 27.484375 38.75 27.484375 38.265625 C 27.484375 37.8125 27.09375 37.40625 26.625 37.40625 L 22.984375 37.40625 L 22.984375 34.546875 L 27.21875 34.546875 C 27.671875 34.546875 28.078125 34.15625 28.078125 33.671875 C 28.078125 33.1875 27.671875 32.8125 27.21875 32.8125 L 22.109375 32.8125 C 21.625 32.8125 21.25 33.1875 21.25 33.671875 L 21.25 42.890625 C 21.25 43.359375 21.625 43.75 22.109375 43.75 L 22.125 43.734375 C 22.125 43.734375 22.125 43.75 22.15625 43.75 Z M 33.578125 43.75 C 35.421875 43.75 36.921875 42.25 36.921875 40.390625 C 36.921875 39.203125 36.28125 38.15625 35.34375 37.5625 C 35.71875 37.0625 35.9375 36.453125 35.9375 35.78125 C 35.9375 34.140625 34.609375 32.8125 32.96875 32.8125 L 30.75 32.8125 C 30.28125 32.8125 29.890625 33.1875 29.890625 33.671875 L 29.890625 42.890625 C 29.890625 43.359375 30.28125 43.75 30.75 43.75 C 30.765625 43.75 30.765625 43.734375 30.796875 43.734375 C 30.796875 43.734375 30.796875 43.75 30.8125 43.75 Z M 32.96875 37.046875 L 31.625 37.046875 L 31.625 34.546875 L 32.96875 34.546875 C 33.65625 34.546875 34.203125 35.09375 34.203125 35.78125 C 34.203125 36.46875 33.65625 37.046875 32.96875 37.046875 Z M 33.578125 42.015625 L 31.625 42.015625 L 31.625 38.78125 L 33.578125 38.78125 C 34.46875 38.796875 35.1875 39.5 35.1875 40.390625 C 35.1875 41.296875 34.46875 42 33.578125 42.015625 Z M 40.03125 43.75 C 40.515625 43.75 40.90625 43.359375 40.90625 42.890625 L 40.90625 39.5 L 42.828125 39.5 C 44.6875 39.5 46.1875 38 46.1875 36.171875 C 46.1875 34.3125 44.6875 32.8125 42.828125 32.8125 L 40.03125 32.8125 C 39.5625 32.8125 39.171875 33.1875 39.171875 33.671875 L 39.171875 42.890625 C 39.171875 43.359375 39.5625 43.75 40.03125 43.75 Z M 42.828125 37.765625 L 40.90625 37.765625 L 40.90625 34.546875 L 42.828125 34.546875 C 43.734375 34.546875 44.4375 35.265625 44.453125 36.171875 C 44.4375 37.046875 43.734375 37.765625 42.828125 37.765625 Z M 42.828125 37.765625 "/>
      </g>` }, wmvIcon: { extension: ".wmv", path: `<g id="surface1">
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>
      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 8.484375 43.734375 L 8.53125 43.734375 C 8.5625 43.71875 8.59375 43.703125 8.65625 43.703125 L 8.664062 43.6875 C 8.671875 43.6875 8.671875 43.6875 8.6875 43.6875 C 8.71875 43.671875 8.765625 43.625 8.8125 43.59375 L 8.84375 43.59375 C 8.875 43.5625 8.90625 43.53125 8.9375 43.515625 C 8.9375 43.5 8.953125 43.5 8.953125 43.46875 L 9.046875 43.375 C 9.046875 43.375 9.046875 43.359375 9.0625 43.359375 C 9.078125 43.328125 9.109375 43.265625 9.125 43.21875 L 11.171875 38.375 L 13.21875 43.21875 C 13.234375 43.265625 13.25 43.328125 13.28125 43.359375 C 13.28125 43.359375 13.28125 43.375 13.3125 43.375 L 13.375 43.46875 C 13.390625 43.5 13.390625 43.5 13.40625 43.515625 L 13.453125 43.546875 L 13.515625 43.59375 C 13.515625 43.59375 13.515625 43.59375 13.53125 43.59375 C 13.5625 43.625 13.609375 43.671875 13.671875 43.6875 C 13.6875 43.6875 13.6875 43.6875 13.703125 43.703125 C 13.734375 43.703125 13.765625 43.71875 13.8125 43.734375 L 13.859375 43.734375 L 13.929688 43.746094 L 14 43.75 C 14.0625 43.75 14.109375 43.75 14.15625 43.734375 L 14.1875 43.734375 C 14.234375 43.71875 14.28125 43.703125 14.3125 43.703125 C 14.3125 43.6875 14.328125 43.6875 14.328125 43.6875 L 14.34375 43.6875 C 14.40625 43.671875 14.4375 43.625 14.484375 43.59375 L 14.5 43.59375 C 14.53125 43.5625 14.578125 43.53125 14.609375 43.515625 C 14.609375 43.5 14.625 43.5 14.625 43.46875 C 14.65625 43.4375 14.6875 43.40625 14.703125 43.375 L 14.71875 43.359375 C 14.75 43.328125 14.78125 43.265625 14.796875 43.21875 L 18.625 34.109375 C 18.8125 33.6875 18.609375 33.171875 18.1875 33 C 17.734375 32.8125 17.234375 33.015625 17.046875 33.453125 L 14 40.6875 L 11.984375 35.890625 C 11.828125 35.546875 11.5 35.359375 11.171875 35.359375 C 10.828125 35.359375 10.5 35.546875 10.359375 35.890625 L 8.34375 40.6875 L 5.28125 33.453125 C 5.109375 33.015625 4.59375 32.8125 4.171875 33 C 3.71875 33.171875 3.53125 33.6875 3.703125 34.109375 L 7.546875 43.21875 C 7.578125 43.265625 7.59375 43.328125 7.625 43.359375 L 7.625 43.375 C 7.65625 43.40625 7.671875 43.4375 7.703125 43.46875 C 7.71875 43.5 7.71875 43.5 7.734375 43.515625 L 7.789062 43.546875 L 7.84375 43.59375 C 7.84375 43.59375 7.84375 43.59375 7.859375 43.59375 C 7.890625 43.625 7.953125 43.671875 8 43.6875 C 8.015625 43.6875 8.015625 43.6875 8.03125 43.703125 C 8.0625 43.703125 8.09375 43.71875 8.140625 43.734375 L 8.1875 43.734375 L 8.265625 43.746094 L 8.34375 43.75 C 8.390625 43.75 8.4375 43.75 8.484375 43.734375 Z M 29.03125 43.75 C 29.5 43.75 29.90625 43.359375 29.90625 42.890625 L 29.90625 33.671875 C 29.90625 33.269531 29.609375 32.9375 29.226562 32.839844 L 29.03125 32.8125 L 29.015625 32.8125 C 28.734375 32.8125 28.484375 32.9375 28.3125 33.171875 L 25.203125 37.484375 L 22.09375 33.171875 C 21.9375 32.9375 21.65625 32.8125 21.40625 32.8125 L 21.359375 32.8125 C 20.890625 32.8125 20.5 33.203125 20.5 33.671875 L 20.5 42.890625 C 20.5 43.359375 20.890625 43.75 21.359375 43.75 C 21.84375 43.75 22.234375 43.359375 22.234375 42.890625 L 22.234375 36.3125 L 24.46875 39.4375 C 24.640625 39.671875 24.90625 39.796875 25.1875 39.796875 L 25.21875 39.796875 C 25.5 39.796875 25.75 39.671875 25.921875 39.4375 L 28.171875 36.3125 L 28.171875 42.890625 C 28.171875 43.359375 28.546875 43.75 29.03125 43.75 Z M 37.015625 43.734375 L 37.0625 43.734375 C 37.09375 43.71875 37.125 43.703125 37.1875 43.703125 L 37.195312 43.6875 C 37.203125 43.6875 37.203125 43.6875 37.21875 43.6875 C 37.25 43.671875 37.296875 43.625 37.34375 43.59375 L 37.375 43.59375 C 37.40625 43.5625 37.4375 43.53125 37.46875 43.515625 C 37.46875 43.5 37.484375 43.5 37.484375 43.46875 L 37.578125 43.375 C 37.578125 43.375 37.578125 43.359375 37.59375 43.359375 C 37.609375 43.328125 37.640625 43.265625 37.65625 43.21875 L 39.703125 38.375 L 41.75 43.21875 C 41.765625 43.265625 41.78125 43.328125 41.8125 43.359375 C 41.8125 43.359375 41.8125 43.375 41.84375 43.375 L 41.90625 43.46875 C 41.921875 43.5 41.921875 43.5 41.9375 43.515625 L 41.984375 43.546875 L 42.046875 43.59375 C 42.046875 43.59375 42.046875 43.59375 42.0625 43.59375 C 42.09375 43.625 42.140625 43.671875 42.203125 43.6875 C 42.21875 43.6875 42.21875 43.6875 42.234375 43.703125 C 42.265625 43.703125 42.296875 43.71875 42.34375 43.734375 L 42.390625 43.734375 L 42.460938 43.746094 L 42.53125 43.75 C 42.59375 43.75 42.640625 43.75 42.6875 43.734375 L 42.71875 43.734375 C 42.765625 43.71875 42.8125 43.703125 42.84375 43.703125 C 42.84375 43.6875 42.859375 43.6875 42.859375 43.6875 L 42.875 43.6875 C 42.9375 43.671875 42.96875 43.625 43.015625 43.59375 L 43.03125 43.59375 C 43.0625 43.5625 43.109375 43.53125 43.140625 43.515625 C 43.140625 43.5 43.15625 43.5 43.15625 43.46875 C 43.1875 43.4375 43.21875 43.40625 43.234375 43.375 L 43.25 43.359375 C 43.28125 43.328125 43.3125 43.265625 43.328125 43.21875 L 47.15625 34.109375 C 47.34375 33.6875 47.140625 33.171875 46.71875 33 C 46.265625 32.8125 45.765625 33.015625 45.578125 33.453125 L 42.53125 40.6875 L 40.515625 35.890625 C 40.359375 35.546875 40.03125 35.359375 39.703125 35.359375 C 39.359375 35.359375 39.03125 35.546875 38.890625 35.890625 L 36.875 40.6875 L 33.8125 33.453125 C 33.640625 33.015625 33.125 32.8125 32.703125 33 C 32.25 33.171875 32.0625 33.6875 32.234375 34.109375 L 36.078125 43.21875 C 36.109375 43.265625 36.125 43.328125 36.15625 43.359375 L 36.15625 43.375 C 36.1875 43.40625 36.203125 43.4375 36.234375 43.46875 C 36.25 43.5 36.25 43.5 36.265625 43.515625 L 36.320312 43.546875 L 36.375 43.59375 C 36.375 43.59375 36.375 43.59375 36.390625 43.59375 C 36.421875 43.625 36.484375 43.671875 36.53125 43.6875 C 36.546875 43.6875 36.546875 43.6875 36.5625 43.703125 C 36.59375 43.703125 36.625 43.71875 36.671875 43.734375 L 36.71875 43.734375 L 36.796875 43.746094 L 36.875 43.75 C 36.921875 43.75 36.96875 43.75 37.015625 43.734375 Z M 37.015625 43.734375 "/>
      </g>` }, xlsIcon: { extension: ".xls", path: `<g id="surface1">
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>
      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 17.21875 46.875 C 17.425781 46.875 17.632812 46.800781 17.820312 46.667969 C 18.289062 46.351562 18.363281 45.695312 18.042969 45.242188 L 14.480469 40.367188 L 18.042969 35.53125 C 18.363281 35.0625 18.289062 34.425781 17.820312 34.105469 C 17.351562 33.75 16.730469 33.84375 16.375 34.332031 L 13.226562 38.644531 L 10.054688 34.332031 C 9.738281 33.84375 9.082031 33.75 8.632812 34.105469 C 8.164062 34.425781 8.070312 35.0625 8.386719 35.53125 L 11.949219 40.367188 L 8.386719 45.242188 C 8.070312 45.695312 8.164062 46.351562 8.632812 46.667969 C 8.800781 46.800781 9.007812 46.875 9.230469 46.875 C 9.550781 46.875 9.851562 46.707031 10.054688 46.445312 L 13.226562 42.113281 L 16.375 46.445312 C 16.582031 46.707031 16.882812 46.875 17.21875 46.875 Z M 29.351562 46.875 C 29.894531 46.875 30.382812 46.40625 30.382812 45.84375 C 30.382812 45.261719 29.894531 44.792969 29.351562 44.792969 L 24.269531 44.792969 L 24.269531 34.78125 C 24.269531 34.21875 23.800781 33.75 23.21875 33.75 C 22.636719 33.75 22.1875 34.21875 22.1875 34.78125 L 22.1875 45.84375 C 22.1875 46.335938 22.53125 46.757812 23.007812 46.855469 L 23.222656 46.875 Z M 37.28125 46.855469 C 38.613281 46.855469 39.832031 46.460938 40.75 45.789062 C 41.6875 45.113281 42.363281 44.082031 42.363281 42.882812 C 42.363281 42.300781 42.195312 41.738281 41.914062 41.289062 C 41.480469 40.59375 40.804688 40.105469 40.039062 39.730469 C 39.289062 39.375 38.40625 39.132812 37.449219 38.945312 L 37.414062 38.945312 C 36.398438 38.757812 35.554688 38.457031 35.070312 38.117188 C 34.824219 37.949219 34.65625 37.78125 34.5625 37.632812 C 34.46875 37.480469 34.429688 37.332031 34.429688 37.105469 C 34.429688 36.710938 34.636719 36.300781 35.144531 35.925781 C 35.648438 35.550781 36.398438 35.289062 37.242188 35.289062 C 38.386719 35.289062 39.304688 35.851562 40.261719 36.488281 C 40.710938 36.789062 41.3125 36.65625 41.59375 36.207031 C 41.894531 35.773438 41.761719 35.175781 41.332031 34.875 C 40.375 34.257812 39.042969 33.375 37.242188 33.375 C 36.023438 33.375 34.882812 33.730469 34 34.367188 C 33.136719 35.007812 32.5 35.980469 32.5 37.105469 C 32.5 37.667969 32.648438 38.195312 32.929688 38.644531 C 33.34375 39.300781 33.960938 39.769531 34.675781 40.105469 C 35.386719 40.445312 36.210938 40.667969 37.09375 40.835938 L 37.132812 40.835938 C 38.238281 41.042969 39.15625 41.363281 39.699219 41.71875 C 39.980469 41.90625 40.148438 42.09375 40.261719 42.28125 C 40.375 42.46875 40.429688 42.636719 40.429688 42.882812 C 40.429688 43.351562 40.1875 43.820312 39.625 44.230469 C 39.0625 44.644531 38.21875 44.925781 37.28125 44.925781 C 35.949219 44.945312 34.523438 44.15625 33.699219 43.480469 C 33.289062 43.144531 32.667969 43.199219 32.332031 43.613281 C 32.011719 44.023438 32.070312 44.644531 32.480469 44.980469 C 33.550781 45.824219 35.257812 46.835938 37.28125 46.855469 Z M 37.28125 46.855469 "/>
      </g>` }, xlsxIcon: { extension: ".xlsx", path: `<g id="surface1">
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>
      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 13.070312 43.75 C 13.242188 43.75 13.414062 43.6875 13.570312 43.578125 C 13.960938 43.3125 14.023438 42.765625 13.757812 42.390625 L 10.789062 38.328125 L 13.757812 34.296875 C 14.023438 33.90625 13.960938 33.375 13.570312 33.109375 C 13.179688 32.8125 12.664062 32.890625 12.367188 33.296875 L 9.742188 36.890625 L 7.101562 33.296875 C 6.835938 32.890625 6.289062 32.8125 5.914062 33.109375 C 5.523438 33.375 5.445312 33.90625 5.710938 34.296875 L 8.679688 38.328125 L 5.710938 42.390625 C 5.445312 42.765625 5.523438 43.3125 5.914062 43.578125 C 6.054688 43.6875 6.226562 43.75 6.414062 43.75 C 6.679688 43.75 6.929688 43.609375 7.101562 43.390625 L 9.742188 39.78125 L 12.367188 43.390625 C 12.539062 43.609375 12.789062 43.75 13.070312 43.75 Z M 23.179688 43.75 C 23.632812 43.75 24.039062 43.359375 24.039062 42.890625 C 24.039062 42.40625 23.632812 42.015625 23.179688 42.015625 L 18.945312 42.015625 L 18.945312 33.671875 C 18.945312 33.203125 18.554688 32.8125 18.070312 32.8125 C 17.585938 32.8125 17.210938 33.203125 17.210938 33.671875 L 17.210938 42.890625 C 17.210938 43.359375 17.585938 43.75 18.070312 43.75 Z M 29.789062 43.734375 C 30.898438 43.734375 31.914062 43.40625 32.679688 42.84375 C 33.460938 42.28125 34.023438 41.421875 34.023438 40.421875 C 34.023438 39.9375 33.882812 39.46875 33.648438 39.09375 C 33.289062 38.515625 32.726562 38.109375 32.085938 37.796875 C 31.460938 37.5 30.726562 37.296875 29.929688 37.140625 L 29.898438 37.140625 C 29.054688 36.984375 28.351562 36.734375 27.945312 36.453125 C 27.742188 36.3125 27.601562 36.171875 27.523438 36.046875 C 27.445312 35.921875 27.414062 35.796875 27.414062 35.609375 C 27.414062 35.28125 27.585938 34.9375 28.007812 34.625 C 28.429688 34.3125 29.054688 34.09375 29.757812 34.09375 C 30.710938 34.09375 31.476562 34.5625 32.273438 35.09375 C 32.648438 35.34375 33.148438 35.234375 33.382812 34.859375 C 33.632812 34.5 33.523438 34 33.164062 33.75 C 32.367188 33.234375 31.257812 32.5 29.757812 32.5 C 28.742188 32.5 27.789062 32.796875 27.054688 33.328125 C 26.335938 33.859375 25.804688 34.671875 25.804688 35.609375 C 25.804688 36.078125 25.929688 36.515625 26.164062 36.890625 C 26.507812 37.4375 27.023438 37.828125 27.617188 38.109375 C 28.210938 38.390625 28.898438 38.578125 29.632812 38.71875 L 29.664062 38.71875 C 30.585938 38.890625 31.351562 39.15625 31.804688 39.453125 C 32.039062 39.609375 32.179688 39.765625 32.273438 39.921875 C 32.367188 40.078125 32.414062 40.21875 32.414062 40.421875 C 32.414062 40.8125 32.210938 41.203125 31.742188 41.546875 C 31.273438 41.890625 30.570312 42.125 29.789062 42.125 C 28.679688 42.140625 27.492188 41.484375 26.804688 40.921875 C 26.460938 40.640625 25.945312 40.6875 25.664062 41.03125 C 25.398438 41.375 25.445312 41.890625 25.789062 42.171875 C 26.679688 42.875 28.101562 43.71875 29.789062 43.734375 Z M 43.179688 43.75 C 43.351562 43.75 43.523438 43.6875 43.679688 43.578125 C 44.070312 43.3125 44.132812 42.765625 43.867188 42.390625 L 40.898438 38.328125 L 43.867188 34.296875 C 44.132812 33.90625 44.070312 33.375 43.679688 33.109375 C 43.289062 32.8125 42.773438 32.890625 42.476562 33.296875 L 39.851562 36.890625 L 37.210938 33.296875 C 36.945312 32.890625 36.398438 32.8125 36.023438 33.109375 C 35.632812 33.375 35.554688 33.90625 35.820312 34.296875 L 38.789062 38.328125 L 35.820312 42.390625 C 35.554688 42.765625 35.632812 43.3125 36.023438 43.578125 C 36.164062 43.6875 36.335938 43.75 36.523438 43.75 C 36.789062 43.75 37.039062 43.609375 37.210938 43.390625 L 39.851562 39.78125 L 42.476562 43.390625 C 42.648438 43.609375 42.898438 43.75 43.179688 43.75 Z M 43.179688 43.75 "/>
      </g>` }, zipIcon: { extension: ".zip", path: `<g id="surface1">
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>
      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 20.175781 46.875 C 20.855469 46.875 21.402344 46.351562 21.402344 45.671875 C 21.402344 44.992188 20.855469 44.445312 20.175781 44.445312 L 13.132812 44.445312 L 21.183594 33.488281 L 21.183594 33.445312 C 21.203125 33.421875 21.226562 33.378906 21.25 33.335938 C 21.269531 33.3125 21.269531 33.289062 21.292969 33.269531 C 21.3125 33.203125 21.3125 33.179688 21.335938 33.136719 C 21.335938 33.09375 21.378906 33.070312 21.378906 33.007812 C 21.378906 32.984375 21.378906 32.960938 21.402344 32.917969 L 21.402344 32.679688 C 21.402344 32.632812 21.402344 32.613281 21.378906 32.546875 C 21.378906 32.503906 21.378906 32.480469 21.335938 32.4375 C 21.335938 32.414062 21.3125 32.371094 21.3125 32.304688 C 21.292969 32.285156 21.269531 32.242188 21.269531 32.21875 C 21.25 32.195312 21.226562 32.152344 21.203125 32.109375 C 21.183594 32.066406 21.160156 32.042969 21.117188 32.023438 C 21.09375 32 21.074219 31.957031 21.050781 31.933594 C 21.03125 31.914062 21.007812 31.867188 20.964844 31.847656 C 20.941406 31.824219 20.941406 31.804688 20.898438 31.78125 L 20.875 31.78125 C 20.832031 31.757812 20.8125 31.738281 20.765625 31.714844 C 20.746094 31.695312 20.722656 31.648438 20.65625 31.648438 L 20.570312 31.605469 L 20.4375 31.585938 C 20.417969 31.585938 20.375 31.5625 20.351562 31.5625 L 10.75 31.5625 C 10.070312 31.5625 9.546875 32.085938 9.546875 32.765625 C 9.546875 33.421875 10.070312 33.992188 10.75 33.992188 L 17.8125 33.992188 L 9.785156 44.972656 L 9.765625 44.972656 C 9.742188 45.015625 9.71875 45.058594 9.699219 45.082031 C 9.699219 45.101562 9.675781 45.148438 9.632812 45.167969 C 9.632812 45.210938 9.609375 45.257812 9.609375 45.277344 C 9.589844 45.320312 9.589844 45.367188 9.566406 45.386719 L 9.566406 45.496094 C 9.546875 45.539062 9.546875 45.585938 9.546875 45.648438 L 9.546875 45.738281 C 9.546875 45.78125 9.566406 45.824219 9.566406 45.890625 C 9.566406 45.933594 9.589844 45.957031 9.589844 45.976562 L 9.632812 46.109375 C 9.632812 46.152344 9.675781 46.175781 9.699219 46.21875 C 9.699219 46.242188 9.71875 46.261719 9.742188 46.328125 C 9.765625 46.351562 9.785156 46.394531 9.808594 46.414062 C 9.828125 46.4375 9.851562 46.460938 9.894531 46.480469 L 9.9375 46.542969 L 9.984375 46.589844 C 10.003906 46.613281 10.027344 46.632812 10.046875 46.632812 L 10.046875 46.65625 C 10.070312 46.679688 10.09375 46.679688 10.136719 46.699219 C 10.179688 46.722656 10.222656 46.742188 10.246094 46.742188 C 10.265625 46.789062 10.289062 46.789062 10.3125 46.808594 C 10.375 46.808594 10.421875 46.832031 10.464844 46.832031 C 10.484375 46.851562 10.507812 46.851562 10.53125 46.851562 L 10.648438 46.871094 Z M 26.214844 46.875 C 26.871094 46.875 27.4375 46.351562 27.4375 45.671875 L 27.4375 32.765625 C 27.4375 32.085938 26.871094 31.5625 26.214844 31.5625 C 25.535156 31.5625 25.011719 32.085938 25.011719 32.765625 L 25.011719 45.671875 C 25.011719 46.351562 25.535156 46.875 26.214844 46.875 Z M 32.734375 46.875 C 33.410156 46.875 33.957031 46.328125 33.957031 45.671875 L 33.957031 40.925781 L 36.648438 40.925781 C 39.25 40.925781 41.351562 38.824219 41.351562 36.265625 C 41.351562 33.664062 39.25 31.5625 36.648438 31.5625 L 32.734375 31.5625 C 32.078125 31.5625 31.53125 32.085938 31.53125 32.765625 L 31.53125 45.671875 C 31.53125 46.328125 32.078125 46.875 32.734375 46.875 Z M 36.648438 38.496094 L 33.957031 38.496094 L 33.957031 33.992188 L 36.648438 33.992188 C 37.917969 33.992188 38.902344 34.996094 38.921875 36.265625 C 38.902344 37.492188 37.917969 38.496094 36.648438 38.496094 Z M 36.648438 38.496094 "/>
      </g>` }, docxIcon: { extension: ".docx", path: `<g id="surface9" clip-path="url(#clip1)">
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>
      </g>
      </defs>
      <g id="surface1">
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>
      <use xlink:href="#surface9" mask="url(#mask0)"/>
      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 7.789062 43.75 C 9.589844 43.75 10.988281 43.269531 11.984375 42.304688 C 12.980469 41.339844 13.476562 39.984375 13.476562 38.234375 C 13.476562 36.496094 12.980469 35.144531 11.984375 34.179688 C 10.988281 33.214844 9.589844 32.734375 7.789062 32.734375 L 4.695312 32.734375 C 4.394531 32.734375 4.15625 32.816406 3.984375 32.984375 C 3.8125 33.152344 3.726562 33.386719 3.726562 33.6875 L 3.726562 42.796875 C 3.726562 43.097656 3.8125 43.332031 3.984375 43.5 C 4.15625 43.667969 4.394531 43.75 4.695312 43.75 Z M 7.664062 42.109375 L 5.742188 42.109375 L 5.742188 34.375 L 7.664062 34.375 C 10.195312 34.375 11.460938 35.660156 11.460938 38.234375 C 11.460938 40.816406 10.195312 42.109375 7.664062 42.109375 Z M 20.414062 43.890625 C 21.476562 43.890625 22.402344 43.660156 23.1875 43.203125 C 23.972656 42.746094 24.582031 42.089844 25.007812 41.234375 C 25.433594 40.378906 25.648438 39.378906 25.648438 38.234375 C 25.648438 37.089844 25.4375 36.089844 25.015625 35.242188 C 24.59375 34.394531 23.988281 33.738281 23.203125 33.28125 C 22.417969 32.824219 21.488281 32.59375 20.414062 32.59375 C 19.339844 32.59375 18.410156 32.824219 17.617188 33.28125 C 16.824219 33.738281 16.21875 34.394531 15.796875 35.242188 C 15.375 36.089844 15.164062 37.089844 15.164062 38.234375 C 15.164062 39.378906 15.378906 40.378906 15.804688 41.234375 C 16.230469 42.089844 16.839844 42.746094 17.625 43.203125 C 18.410156 43.660156 19.339844 43.890625 20.414062 43.890625 Z M 20.414062 42.28125 C 19.394531 42.28125 18.597656 41.933594 18.03125 41.234375 C 17.464844 40.535156 17.179688 39.535156 17.179688 38.234375 C 17.179688 36.933594 17.464844 35.933594 18.03125 35.242188 C 18.597656 34.550781 19.394531 34.203125 20.414062 34.203125 C 21.425781 34.203125 22.214844 34.550781 22.78125 35.242188 C 23.347656 35.933594 23.632812 36.933594 23.632812 38.234375 C 23.632812 39.535156 23.347656 40.535156 22.78125 41.234375 C 22.214844 41.933594 21.425781 42.28125 20.414062 42.28125 Z M 32.601562 43.890625 C 33.289062 43.890625 33.933594 43.789062 34.539062 43.585938 C 35.144531 43.382812 35.679688 43.089844 36.148438 42.703125 C 36.285156 42.597656 36.378906 42.488281 36.429688 42.367188 C 36.480469 42.246094 36.507812 42.109375 36.507812 41.953125 C 36.507812 41.722656 36.445312 41.53125 36.320312 41.375 C 36.195312 41.21875 36.042969 41.140625 35.867188 41.140625 C 35.753906 41.140625 35.644531 41.160156 35.539062 41.203125 C 35.433594 41.246094 35.332031 41.296875 35.226562 41.359375 C 34.746094 41.683594 34.316406 41.910156 33.9375 42.046875 C 33.558594 42.183594 33.144531 42.25 32.695312 42.25 C 31.613281 42.25 30.792969 41.910156 30.234375 41.234375 C 29.675781 40.558594 29.398438 39.558594 29.398438 38.234375 C 29.398438 36.921875 29.675781 35.925781 30.234375 35.25 C 30.792969 34.574219 31.613281 34.234375 32.695312 34.234375 C 33.164062 34.234375 33.589844 34.300781 33.976562 34.429688 C 34.363281 34.558594 34.777344 34.792969 35.226562 35.125 C 35.445312 35.269531 35.660156 35.34375 35.867188 35.34375 C 36.042969 35.34375 36.195312 35.265625 36.320312 35.109375 C 36.445312 34.953125 36.507812 34.761719 36.507812 34.53125 C 36.507812 34.363281 36.480469 34.222656 36.429688 34.109375 C 36.378906 33.996094 36.285156 33.886719 36.148438 33.78125 C 35.679688 33.394531 35.144531 33.101562 34.539062 32.898438 C 33.933594 32.695312 33.289062 32.59375 32.601562 32.59375 C 31.539062 32.59375 30.609375 32.824219 29.8125 33.28125 C 29.015625 33.738281 28.402344 34.394531 27.976562 35.242188 C 27.550781 36.089844 27.335938 37.089844 27.335938 38.234375 C 27.335938 39.378906 27.550781 40.378906 27.976562 41.234375 C 28.402344 42.089844 29.015625 42.746094 29.8125 43.203125 C 30.609375 43.660156 31.539062 43.890625 32.601562 43.890625 Z M 46.132812 43.84375 C 46.382812 43.84375 46.605469 43.75 46.796875 43.5625 C 46.988281 43.375 47.085938 43.15625 47.085938 42.90625 C 47.085938 42.707031 47.003906 42.511719 46.835938 42.3125 L 43.445312 38.15625 L 46.710938 34.171875 C 46.867188 34.003906 46.945312 33.808594 46.945312 33.578125 C 46.945312 33.328125 46.847656 33.113281 46.65625 32.929688 C 46.464844 32.746094 46.242188 32.65625 45.992188 32.65625 C 45.730469 32.65625 45.507812 32.769531 45.320312 33 L 42.273438 36.765625 L 39.226562 33 C 39.027344 32.769531 38.800781 32.65625 38.539062 32.65625 C 38.289062 32.65625 38.070312 32.746094 37.882812 32.929688 C 37.695312 33.113281 37.601562 33.328125 37.601562 33.578125 C 37.601562 33.808594 37.679688 34.003906 37.835938 34.171875 L 41.101562 38.15625 L 37.695312 42.3125 C 37.539062 42.5 37.460938 42.699219 37.460938 42.90625 C 37.460938 43.15625 37.558594 43.371094 37.75 43.554688 C 37.941406 43.738281 38.164062 43.828125 38.414062 43.828125 C 38.675781 43.828125 38.898438 43.71875 39.085938 43.5 L 42.273438 39.5625 L 45.445312 43.5 C 45.644531 43.730469 45.871094 43.84375 46.132812 43.84375 Z M 46.132812 43.84375 "/>
      </g>` }, jpgIcon: { extension: ".jpg", path: `<g id="surface1">
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>
      <use xlink:href="#surface9" mask="url(#mask0)"/>
      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 8.789062 47.007812 L 9.488281 46.960938 C 12.214844 46.757812 13.578125 45.277344 13.578125 42.523438 L 13.578125 32.742188 C 13.578125 32.320312 13.453125 31.980469 13.195312 31.726562 C 12.941406 31.472656 12.59375 31.34375 12.15625 31.34375 C 11.734375 31.34375 11.394531 31.472656 11.140625 31.726562 C 10.886719 31.980469 10.757812 32.320312 10.757812 32.742188 L 10.757812 42.523438 C 10.757812 43.238281 10.605469 43.769531 10.296875 44.117188 C 9.992188 44.46875 9.539062 44.660156 8.941406 44.6875 L 8.242188 44.730469 C 7.847656 44.761719 7.558594 44.867188 7.378906 45.046875 C 7.195312 45.230469 7.105469 45.496094 7.105469 45.847656 C 7.105469 46.664062 7.667969 47.050781 8.789062 47.007812 Z M 18.304688 47.007812 C 18.742188 47.007812 19.089844 46.878906 19.34375 46.625 C 19.597656 46.367188 19.726562 46.023438 19.726562 45.585938 L 19.726562 40.882812 L 23.640625 40.882812 C 25.289062 40.882812 26.574219 40.464844 27.492188 39.632812 C 28.410156 38.804688 28.871094 37.644531 28.871094 36.15625 C 28.871094 34.667969 28.410156 33.511719 27.492188 32.6875 C 26.574219 31.863281 25.289062 31.453125 23.640625 31.453125 L 18.261719 31.453125 C 17.839844 31.453125 17.507812 31.570312 17.265625 31.804688 C 17.023438 32.035156 16.90625 32.363281 16.90625 32.789062 L 16.90625 45.585938 C 16.90625 46.023438 17.03125 46.367188 17.289062 46.625 C 17.542969 46.878906 17.882812 47.007812 18.304688 47.007812 Z M 23.292969 38.714844 L 19.726562 38.714844 L 19.726562 33.640625 L 23.292969 33.640625 C 25.230469 33.640625 26.203125 34.488281 26.203125 36.179688 C 26.203125 37.871094 25.230469 38.714844 23.292969 38.714844 Z M 38.605469 47.070312 C 39.320312 47.070312 40.0625 47.011719 40.835938 46.898438 C 41.609375 46.78125 42.285156 46.621094 42.871094 46.414062 C 43.410156 46.242188 43.765625 46.015625 43.941406 45.738281 C 44.117188 45.460938 44.203125 44.988281 44.203125 44.316406 L 44.203125 39.613281 C 44.203125 39.292969 44.101562 39.03125 43.898438 38.835938 C 43.695312 38.640625 43.425781 38.539062 43.089844 38.539062 L 39.21875 38.539062 C 38.867188 38.539062 38.59375 38.628906 38.398438 38.804688 C 38.199219 38.976562 38.101562 39.226562 38.101562 39.546875 C 38.101562 39.867188 38.199219 40.117188 38.398438 40.289062 C 38.59375 40.464844 38.867188 40.554688 39.21875 40.554688 L 41.6875 40.554688 L 41.6875 44.425781 C 40.699219 44.703125 39.707031 44.839844 38.714844 44.839844 C 35.390625 44.839844 33.726562 42.945312 33.726562 39.152344 C 33.726562 37.300781 34.132812 35.90625 34.941406 34.964844 C 35.75 34.023438 36.949219 33.554688 38.539062 33.554688 C 39.238281 33.554688 39.867188 33.644531 40.421875 33.828125 C 40.972656 34.007812 41.574219 34.324219 42.214844 34.777344 C 42.390625 34.894531 42.542969 34.980469 42.671875 35.03125 C 42.804688 35.082031 42.949219 35.105469 43.109375 35.105469 C 43.359375 35.105469 43.570312 34.996094 43.746094 34.777344 C 43.921875 34.558594 44.007812 34.289062 44.007812 33.96875 C 44.007812 33.75 43.96875 33.558594 43.886719 33.398438 C 43.808594 33.238281 43.679688 33.078125 43.503906 32.917969 C 42.191406 31.808594 40.507812 31.257812 38.453125 31.257812 C 36.90625 31.257812 35.5625 31.574219 34.425781 32.207031 C 33.289062 32.84375 32.410156 33.753906 31.789062 34.941406 C 31.171875 36.128906 30.859375 37.535156 30.859375 39.152344 C 30.859375 40.800781 31.171875 42.21875 31.789062 43.40625 C 32.410156 44.597656 33.304688 45.503906 34.46875 46.132812 C 35.636719 46.757812 37.015625 47.070312 38.605469 47.070312 Z M 38.605469 47.070312 "/>
      </g>` }, mp3Icon: { extension: ".mp3", path: `<g id="surface9" clip-path="url(#clip1)">
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 43.828125 43.710938 C 43.605469 44.28125 43.273438 44.804688 42.84375 45.265625 C 42.40625 45.730469 41.867188 46.113281 41.242188 46.398438 C 40.597656 46.699219 39.851562 46.855469 39.027344 46.855469 C 38.328125 46.855469 37.703125 46.757812 37.160156 46.570312 C 36.609375 46.378906 36.160156 46.136719 35.769531 45.839844 C 35.386719 45.550781 35.050781 45.210938 34.796875 44.832031 C 34.570312 44.507812 34.394531 44.195312 34.265625 43.890625 C 34.140625 43.59375 34.054688 43.335938 33.996094 43.101562 C 33.792969 42.261719 34.304688 41.417969 35.140625 41.210938 C 35.980469 41.007812 36.828125 41.519531 37.03125 42.355469 C 37.039062 42.390625 37.066406 42.488281 37.144531 42.671875 C 37.191406 42.777344 37.265625 42.914062 37.371094 43.0625 C 37.4375 43.160156 37.53125 43.257812 37.65625 43.351562 C 37.792969 43.453125 37.972656 43.542969 38.195312 43.625 C 38.332031 43.667969 38.59375 43.730469 39.027344 43.730469 C 39.390625 43.730469 39.695312 43.675781 39.925781 43.566406 C 40.1875 43.445312 40.398438 43.300781 40.558594 43.132812 C 40.71875 42.957031 40.839844 42.773438 40.914062 42.578125 C 40.996094 42.371094 41.03125 42.195312 41.03125 42.023438 C 41.03125 41.789062 41 41.585938 40.921875 41.398438 C 40.871094 41.257812 40.785156 41.148438 40.660156 41.039062 C 40.515625 40.910156 40.296875 40.792969 40.011719 40.699219 C 39.6875 40.59375 39.253906 40.539062 38.738281 40.535156 C 37.882812 40.527344 37.1875 39.832031 37.1875 38.972656 L 37.1875 38.832031 C 37.1875 37.984375 37.859375 37.292969 38.699219 37.265625 C 39.070312 37.257812 39.398438 37.195312 39.679688 37.101562 C 39.921875 37.011719 40.121094 36.902344 40.273438 36.773438 C 40.40625 36.652344 40.507812 36.519531 40.582031 36.359375 C 40.652344 36.210938 40.6875 36.027344 40.6875 35.8125 C 40.6875 35.523438 40.644531 35.289062 40.574219 35.125 C 40.5 34.96875 40.414062 34.847656 40.304688 34.757812 C 40.1875 34.660156 40.042969 34.582031 39.867188 34.53125 C 39.402344 34.386719 38.878906 34.398438 38.480469 34.542969 C 38.289062 34.617188 38.121094 34.714844 37.976562 34.84375 C 37.820312 34.984375 37.695312 35.148438 37.59375 35.339844 C 37.484375 35.550781 37.40625 35.773438 37.367188 36.039062 C 37.230469 36.890625 36.429688 37.472656 35.574219 37.335938 C 34.722656 37.195312 34.140625 36.398438 34.28125 35.542969 C 34.378906 34.9375 34.5625 34.378906 34.835938 33.871094 C 35.109375 33.355469 35.464844 32.898438 35.890625 32.519531 C 36.320312 32.132812 36.824219 31.828125 37.382812 31.617188 C 38.433594 31.226562 39.667969 31.199219 40.78125 31.539062 C 41.351562 31.714844 41.863281 31.992188 42.308594 32.355469 C 42.777344 32.753906 43.148438 33.242188 43.414062 33.824219 C 43.679688 34.402344 43.8125 35.070312 43.8125 35.8125 C 43.8125 36.476562 43.679688 37.097656 43.421875 37.660156 C 43.25 38.046875 43.023438 38.394531 42.746094 38.707031 C 43.242188 39.148438 43.609375 39.671875 43.835938 40.261719 C 44.046875 40.804688 44.15625 41.398438 44.15625 42.023438 C 44.15625 42.578125 44.046875 43.148438 43.828125 43.710938 Z M 31.445312 38.492188 C 31.148438 39.140625 30.734375 39.703125 30.199219 40.164062 C 29.6875 40.605469 29.078125 40.957031 28.390625 41.199219 C 27.71875 41.4375 26.976562 41.5625 26.191406 41.5625 L 25 41.5625 L 25 45 C 25 45.859375 24.296875 46.5625 23.4375 46.5625 C 22.578125 46.5625 21.875 45.859375 21.875 45 L 21.875 32.8125 C 21.875 31.945312 22.578125 31.25 23.4375 31.25 L 26.191406 31.25 C 27.890625 31.25 29.257812 31.667969 30.253906 32.5 C 31.339844 33.398438 31.886719 34.714844 31.886719 36.40625 C 31.886719 37.148438 31.738281 37.851562 31.445312 38.492188 Z M 18.730469 45.210938 C 18.730469 46.070312 18.03125 46.773438 17.167969 46.773438 C 16.300781 46.773438 15.605469 46.070312 15.605469 45.210938 L 15.605469 39.28125 L 14.015625 43.140625 C 14.007812 43.164062 13.996094 43.191406 13.984375 43.214844 C 13.71875 43.777344 13.15625 44.117188 12.566406 44.117188 L 12.53125 44.117188 C 11.9375 44.117188 11.375 43.777344 11.109375 43.214844 L 11.082031 43.160156 L 9.339844 39.101562 L 9.339844 45.210938 C 9.339844 46.070312 8.640625 46.773438 7.777344 46.773438 C 6.910156 46.773438 6.214844 46.070312 6.214844 45.210938 L 6.214844 32.824219 C 6.214844 31.960938 6.910156 31.261719 7.777344 31.261719 L 7.835938 31.261719 C 8.472656 31.261719 9.046875 31.617188 9.335938 32.1875 L 12.527344 39.09375 L 15.59375 32.207031 C 15.894531 31.617188 16.46875 31.261719 17.105469 31.261719 L 17.167969 31.261719 C 18.03125 31.261719 18.730469 31.960938 18.730469 32.824219 Z M 41.382812 28.125 L 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.136719 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.136719 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 41.382812 28.125 "/>
      </g>
      </defs>
      <g id="surface1">
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>
      <use xlink:href="#surface9" mask="url(#mask0)"/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 28.257812 34.902344 C 27.835938 34.550781 27.140625 34.375 26.191406 34.375 L 25 34.375 L 25 38.4375 L 26.191406 38.4375 C 26.621094 38.4375 27.007812 38.375 27.34375 38.253906 C 27.667969 38.140625 27.929688 37.992188 28.148438 37.804688 C 28.34375 37.632812 28.492188 37.4375 28.601562 37.195312 C 28.710938 36.964844 28.757812 36.703125 28.757812 36.40625 C 28.757812 35.324219 28.382812 35.003906 28.257812 34.902344 "/>
      <path style="fill:none;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(99.607843%,99.607843%,99.607843%);stroke-opacity:1;stroke-miterlimit:4;" d="M 11.34125 13.57875 C 11.345 13.5925 11.3525 13.62375 11.36375 13.67375 C 11.3775 13.7225 11.3975 13.78125 11.42625 13.85 C 11.45375 13.9175 11.49375 13.9875 11.54625 14.0625 C 11.5975 14.13875 11.66625 14.20875 11.75 14.27125 C 11.83375 14.33625 11.9375 14.38875 12.0575 14.43125 C 12.1775 14.4725 12.32 14.49375 12.4875 14.49375 C 12.67875 14.49375 12.845 14.46125 12.9875 14.39375 C 13.13 14.32875 13.24875 14.245 13.34375 14.1425 C 13.43875 14.0425 13.51125 13.93 13.55875 13.8075 C 13.6075 13.6825 13.63125 13.56375 13.63125 13.4475 C 13.63125 13.31125 13.6075 13.1825 13.5625 13.065 C 13.515 12.9475 13.4425 12.845 13.3425 12.7575 C 13.2425 12.67 13.115 12.6 12.96 12.55 C 12.805 12.49875 12.6175 12.4725 12.4 12.4725 L 12.4 12.42625 C 12.57 12.42 12.72375 12.3925 12.8625 12.34375 C 13.0025 12.29625 13.11875 12.2275 13.21625 12.14375 C 13.31375 12.05875 13.3875 11.96 13.44125 11.845 C 13.4925 11.7275 13.52 11.60125 13.52 11.46 C 13.52 11.29375 13.4925 11.1525 13.43875 11.0325 C 13.38375 10.91375 13.31125 10.81625 13.21875 10.74 C 13.1275 10.66375 13.0225 10.6075 12.90375 10.5725 C 12.78625 10.535 12.66375 10.5175 12.5375 10.5175 C 12.395 10.5175 12.26125 10.54 12.14 10.58625 C 12.0175 10.6325 11.91 10.69625 11.81875 10.77875 C 11.72625 10.8625 11.64875 10.96 11.5875 11.07375 C 11.5275 11.18875 11.48625 11.315 11.4625 11.45375 M 7.5 14.4 L 7.5 10.5 L 8.3825 10.5 C 8.8075 10.5 9.13375 10.595 9.3625 10.78375 C 9.59 10.975 9.7025 11.2625 9.7025 11.65 C 9.7025 11.81625 9.6725 11.97125 9.6075 12.11125 C 9.5425 12.2525 9.4525 12.37375 9.335 12.475 C 9.21875 12.5775 9.0775 12.65625 8.9175 12.71375 C 8.75625 12.77125 8.5775 12.8 8.3825 12.8 L 7.6 12.8 M 2.4875 14.4675 L 2.4875 10.50375 L 2.5075 10.50375 C 2.5225 10.50375 2.53375 10.5125 2.5425 10.52625 L 3.9925 13.58625 C 3.99875 13.5975 4.005 13.6075 4.00875 13.6175 M 4.02125 13.6175 C 4.02625 13.6075 4.03125 13.5975 4.0375 13.58625 L 5.44 10.52625 C 5.4475 10.5125 5.45875 10.50375 5.4725 10.50375 L 5.4925 10.50375 L 5.4925 14.4675 " transform="matrix(3.125,0,0,3.125,0,0)"/>
      </g>` }, mp4Icon: { extension: ".mp4", path: `<g id="surface6" clip-path="url(#clip1)">
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 36.898438 40.625 L 40.625 35.480469 L 40.625 40.625 Z M 28.761719 36.40625 C 28.761719 36.703125 28.707031 36.964844 28.605469 37.195312 C 28.496094 37.433594 28.347656 37.632812 28.148438 37.804688 C 27.929688 37.992188 27.667969 38.144531 27.34375 38.257812 C 27.003906 38.375 26.621094 38.4375 26.191406 38.4375 L 25 38.4375 L 25 34.375 L 26.191406 34.375 C 27.140625 34.375 27.835938 34.554688 28.253906 34.902344 C 28.378906 35.007812 28.761719 35.324219 28.761719 36.40625 Z M 44.6875 43.75 L 43.75 43.75 L 43.75 45.3125 C 43.75 46.175781 43.050781 46.875 42.1875 46.875 C 41.324219 46.875 40.625 46.175781 40.625 45.3125 L 40.625 43.75 L 34.066406 43.75 C 33.199219 43.75 32.503906 43.050781 32.503906 42.1875 L 32.503906 41.875 C 32.503906 41.546875 32.605469 41.226562 32.800781 40.957031 L 39.363281 31.898438 C 39.660156 31.492188 40.128906 31.25 40.628906 31.25 L 42.1875 31.25 C 43.050781 31.25 43.75 31.949219 43.75 32.8125 L 43.75 40.625 L 44.6875 40.625 C 45.550781 40.625 46.25 41.324219 46.25 42.1875 C 46.25 43.050781 45.550781 43.75 44.6875 43.75 Z M 31.445312 38.492188 C 31.148438 39.140625 30.730469 39.703125 30.195312 40.167969 C 29.6875 40.605469 29.082031 40.957031 28.390625 41.203125 C 27.71875 41.441406 26.976562 41.5625 26.191406 41.5625 L 25 41.5625 L 25 45 C 25 45.863281 24.300781 46.5625 23.4375 46.5625 C 22.578125 46.5625 21.875 45.863281 21.875 45 L 21.875 32.8125 C 21.875 31.949219 22.578125 31.25 23.4375 31.25 L 26.191406 31.25 C 27.890625 31.25 29.257812 31.671875 30.253906 32.5 C 31.339844 33.398438 31.886719 34.714844 31.886719 36.40625 C 31.886719 37.148438 31.738281 37.851562 31.445312 38.492188 Z M 18.730469 45.210938 C 18.730469 46.070312 18.027344 46.773438 17.167969 46.773438 C 16.300781 46.773438 15.605469 46.070312 15.605469 45.210938 L 15.605469 39.6875 L 14.035156 43.105469 C 14.019531 43.144531 14.003906 43.179688 13.984375 43.214844 C 13.71875 43.78125 13.15625 44.117188 12.566406 44.117188 L 12.53125 44.117188 C 11.941406 44.117188 11.378906 43.78125 11.113281 43.214844 C 11.097656 43.183594 11.078125 43.152344 11.066406 43.125 L 9.339844 39.484375 L 9.339844 45.210938 C 9.339844 46.070312 8.640625 46.773438 7.777344 46.773438 C 6.910156 46.773438 6.214844 46.070312 6.214844 45.210938 L 6.214844 32.824219 C 6.214844 31.960938 6.910156 31.261719 7.777344 31.261719 L 7.835938 31.261719 C 8.472656 31.261719 9.046875 31.617188 9.335938 32.191406 L 9.355469 32.226562 L 12.523438 38.90625 L 15.578125 32.242188 C 15.585938 32.226562 15.597656 32.210938 15.605469 32.191406 C 15.894531 31.617188 16.46875 31.261719 17.105469 31.261719 L 17.164062 31.261719 C 18.027344 31.261719 18.726562 31.960938 18.726562 32.824219 L 18.726562 45.210938 Z M 41.382812 28.125 L 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 41.382812 28.125 "/>
      </g>
      </defs>
      <g id="surface1">
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>
      <use xlink:href="#surface6" mask="url(#mask0)"/>
      <path style="fill:none;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke:rgb(99.607843%,99.607843%,99.607843%);stroke-opacity:1;stroke-miterlimit:4;" d="M 14.3 13.5 L 10.90125 13.5 L 10.90125 13.4 L 13.00125 10.5 L 13.5 10.5 L 13.5 14.5 M 7.5 14.4 L 7.5 10.5 L 8.3825 10.5 C 8.8075 10.5 9.13375 10.595 9.3625 10.78375 C 9.59 10.975 9.7025 11.2625 9.7025 11.65 C 9.7025 11.81625 9.6725 11.97125 9.6075 12.11125 C 9.5425 12.2525 9.4525 12.37375 9.335 12.47625 C 9.21875 12.5775 9.0775 12.65625 8.9175 12.71375 C 8.75625 12.77125 8.5775 12.8 8.3825 12.8 L 7.6 12.8 M 2.4875 14.4675 L 2.4875 10.50375 L 2.5075 10.50375 C 2.5225 10.50375 2.53375 10.5125 2.5425 10.52625 L 3.9925 13.58625 C 3.99875 13.5975 4.005 13.6075 4.00875 13.6175 M 4.02125 13.6175 C 4.02625 13.6075 4.03125 13.5975 4.0375 13.58625 L 5.44 10.52625 C 5.4475 10.5125 5.45875 10.50375 5.4725 10.50375 L 5.4925 10.50375 L 5.4925 14.4675 " transform="matrix(3.125,0,0,3.125,0,0)"/>
      </g>` }, oggIcon: { extension: ".ogg", path: `<g id="surface9" clip-path="url(#clip1)">
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.621094 28.125 C 3.859375 28.125 0 31.984375 0 36.742188 L 0 41.378906 C 0 46.140625 3.859375 50 8.621094 50 L 41.378906 50 C 46.140625 50 50 46.140625 50 41.382812 L 50 36.746094 C 50 31.984375 46.140625 28.125 41.382812 28.125 Z M 8.621094 28.125 "/>
      </g>
      </defs>
      <g id="surface1">
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.578125 25 L 39.421875 25 C 41.53125 25 43.527344 25.492188 45.3125 26.367188 L 45.3125 15.367188 C 45.3125 13.90625 44.976562 13.097656 43.984375 12.109375 C 42.996094 11.121094 35.105469 3.226562 34.503906 2.628906 C 33.90625 2.027344 33.070312 1.5625 31.617188 1.5625 L 6.5625 1.5625 C 5.527344 1.5625 4.6875 2.402344 4.6875 3.4375 L 4.6875 26.367188 C 6.476562 25.492188 8.472656 25 10.578125 25 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.710938 L 42.164062 12.5 L 34.515625 12.5 C 34.464844 12.46875 34.414062 12.425781 34.375 12.390625 Z M 6.25 25.722656 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.25 13.980469 32.496094 15.210938 33.742188 15.539062 C 33.902344 15.59375 34.074219 15.625 34.257812 15.625 L 43.75 15.625 L 43.75 25.722656 C 44.859375 26.105469 45.910156 26.625 46.875 27.269531 L 46.875 15.363281 C 46.875 13.511719 46.375 12.289062 45.089844 11.003906 L 35.609375 1.523438 C 34.582031 0.496094 33.273438 0 31.617188 0 L 6.5625 0 C 4.667969 0 3.125 1.542969 3.125 3.4375 L 3.125 27.269531 C 4.089844 26.625 5.140625 26.105469 6.25 25.722656 Z M 6.25 25.722656 "/>
      <use xlink:href="#surface9" mask="url(#mask0)"/>
      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 8.976562 47.070312 C 10.464844 47.070312 11.757812 46.75 12.859375 46.109375 C 13.960938 45.46875 14.808594 44.550781 15.40625 43.351562 C 16.003906 42.15625 16.304688 40.757812 16.304688 39.152344 C 16.304688 37.550781 16.007812 36.152344 15.417969 34.964844 C 14.828125 33.777344 13.980469 32.859375 12.882812 32.21875 C 11.78125 31.578125 10.480469 31.257812 8.976562 31.257812 C 7.472656 31.257812 6.167969 31.578125 5.0625 32.21875 C 3.953125 32.859375 3.101562 33.777344 2.511719 34.964844 C 1.921875 36.152344 1.625 37.550781 1.625 39.152344 C 1.625 40.757812 1.925781 42.15625 2.523438 43.351562 C 3.121094 44.550781 3.972656 45.46875 5.070312 46.109375 C 6.171875 46.75 7.472656 47.070312 8.976562 47.070312 Z M 8.976562 44.820312 C 7.546875 44.820312 6.433594 44.332031 5.640625 43.351562 C 4.847656 42.375 4.449219 40.976562 4.449219 39.152344 C 4.449219 37.332031 4.847656 35.933594 5.640625 34.964844 C 6.433594 33.996094 7.546875 33.507812 8.976562 33.507812 C 10.390625 33.507812 11.496094 33.996094 12.289062 34.964844 C 13.085938 35.933594 13.484375 37.332031 13.484375 39.152344 C 13.484375 40.976562 13.085938 42.375 12.289062 43.351562 C 11.496094 44.332031 10.390625 44.820312 8.976562 44.820312 Z M 26.410156 47.070312 C 27.125 47.070312 27.871094 47.011719 28.640625 46.898438 C 29.414062 46.78125 30.09375 46.621094 30.675781 46.414062 C 31.214844 46.242188 31.574219 46.015625 31.75 45.738281 C 31.921875 45.460938 32.011719 44.988281 32.011719 44.316406 L 32.011719 39.613281 C 32.011719 39.292969 31.910156 39.03125 31.703125 38.835938 C 31.5 38.640625 31.230469 38.539062 30.894531 38.539062 L 27.023438 38.539062 C 26.671875 38.539062 26.398438 38.628906 26.203125 38.804688 C 26.007812 38.976562 25.90625 39.226562 25.90625 39.546875 C 25.90625 39.867188 26.007812 40.117188 26.203125 40.289062 C 26.398438 40.464844 26.671875 40.554688 27.023438 40.554688 L 29.496094 40.554688 L 29.496094 44.425781 C 28.503906 44.703125 27.511719 44.839844 26.519531 44.839844 C 23.195312 44.839844 21.53125 42.945312 21.53125 39.152344 C 21.53125 37.300781 21.9375 35.90625 22.746094 34.964844 C 23.554688 34.023438 24.753906 33.554688 26.34375 33.554688 C 27.046875 33.554688 27.671875 33.644531 28.226562 33.828125 C 28.78125 34.007812 29.378906 34.324219 30.019531 34.777344 C 30.195312 34.894531 30.347656 34.980469 30.480469 35.03125 C 30.609375 35.082031 30.757812 35.105469 30.917969 35.105469 C 31.164062 35.105469 31.375 34.996094 31.550781 34.777344 C 31.726562 34.558594 31.8125 34.289062 31.8125 33.96875 C 31.8125 33.75 31.773438 33.558594 31.695312 33.398438 C 31.613281 33.238281 31.484375 33.078125 31.3125 32.917969 C 30 31.808594 28.3125 31.257812 26.257812 31.257812 C 24.710938 31.257812 23.371094 31.574219 22.234375 32.207031 C 21.09375 32.84375 20.214844 33.753906 19.597656 34.941406 C 18.976562 36.128906 18.667969 37.535156 18.667969 39.152344 C 18.667969 40.800781 18.976562 42.21875 19.597656 43.40625 C 20.214844 44.597656 21.109375 45.503906 22.277344 46.132812 C 23.441406 46.757812 24.820312 47.070312 26.410156 47.070312 Z M 42.445312 47.070312 C 43.160156 47.070312 43.902344 47.011719 44.675781 46.898438 C 45.449219 46.78125 46.128906 46.621094 46.710938 46.414062 C 47.25 46.242188 47.609375 46.015625 47.78125 45.738281 C 47.957031 45.460938 48.046875 44.988281 48.046875 44.316406 L 48.046875 39.613281 C 48.046875 39.292969 47.941406 39.03125 47.738281 38.835938 C 47.535156 38.640625 47.265625 38.539062 46.929688 38.539062 L 43.058594 38.539062 C 42.707031 38.539062 42.433594 38.628906 42.238281 38.804688 C 42.039062 38.976562 41.941406 39.226562 41.941406 39.546875 C 41.941406 39.867188 42.039062 40.117188 42.238281 40.289062 C 42.433594 40.464844 42.707031 40.554688 43.058594 40.554688 L 45.53125 40.554688 L 45.53125 44.425781 C 44.539062 44.703125 43.546875 44.839844 42.554688 44.839844 C 39.230469 44.839844 37.566406 42.945312 37.566406 39.152344 C 37.566406 37.300781 37.972656 35.90625 38.78125 34.964844 C 39.589844 34.023438 40.789062 33.554688 42.378906 33.554688 C 43.078125 33.554688 43.707031 33.644531 44.261719 33.828125 C 44.816406 34.007812 45.414062 34.324219 46.054688 34.777344 C 46.230469 34.894531 46.382812 34.980469 46.515625 35.03125 C 46.644531 35.082031 46.792969 35.105469 46.953125 35.105469 C 47.199219 35.105469 47.410156 34.996094 47.585938 34.777344 C 47.761719 34.558594 47.847656 34.289062 47.847656 33.96875 C 47.847656 33.75 47.808594 33.558594 47.726562 33.398438 C 47.648438 33.238281 47.519531 33.078125 47.34375 32.917969 C 46.03125 31.808594 44.347656 31.257812 42.292969 31.257812 C 40.746094 31.257812 39.40625 31.574219 38.265625 32.207031 C 37.128906 32.84375 36.25 33.753906 35.632812 34.941406 C 35.011719 36.128906 34.703125 37.535156 34.703125 39.152344 C 34.703125 40.800781 35.011719 42.21875 35.632812 43.40625 C 36.25 44.597656 37.144531 45.503906 38.3125 46.132812 C 39.476562 46.757812 40.855469 47.070312 42.445312 47.070312 Z M 42.445312 47.070312 "/>
      </g>` }, pdfIcon: { extension: ".pdf", path: `<g id="surface1">
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(99.607843%,99.607843%,99.607843%);fill-opacity:1;" d="M 10.59375 25 L 39.4375 25 C 41.476562 25.003906 43.484375 25.472656 45.3125 26.375 L 45.3125 15.375 C 45.347656 14.191406 44.867188 13.054688 44 12.25 L 34.625 2.875 C 33.875 2.003906 32.773438 1.523438 31.625 1.5625 L 6.625 1.5625 C 5.589844 1.5625 4.75 2.402344 4.75 3.4375 L 4.75 26.375 C 6.566406 25.480469 8.566406 25.007812 10.59375 25 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 34.375 4.71875 L 42.15625 12.5 L 34.53125 12.5 C 34.480469 12.511719 34.425781 12.511719 34.375 12.5 Z M 6.25 25.71875 L 6.25 3.4375 C 6.25 3.265625 6.390625 3.125 6.5625 3.125 L 31.25 3.125 L 31.25 12.5 C 31.300781 13.980469 32.316406 15.253906 33.75 15.625 C 33.957031 15.675781 34.167969 15.675781 34.375 15.625 L 43.75 15.625 L 43.75 25.71875 C 44.859375 26.09375 45.910156 26.621094 46.875 27.28125 L 46.875 15.375 C 46.964844 13.722656 46.3125 12.117188 45.09375 11 L 35.71875 1.625 C 34.648438 0.523438 33.160156 -0.0664062 31.625 0 L 6.625 0 C 5.703125 -0.015625 4.8125 0.339844 4.152344 0.984375 C 3.496094 1.632812 3.125 2.515625 3.125 3.4375 L 3.125 27.28125 C 4.09375 26.625 5.144531 26.101562 6.25 25.71875 Z M 6.25 25.71875 "/>
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 8.625 28.125 C 6.335938 28.117188 4.136719 29.023438 2.515625 30.640625 C 0.898438 32.261719 -0.0078125 34.460938 0 36.75 L 0 41.375 C 0 46.136719 3.863281 50 8.625 50 L 41.375 50 C 46.132812 49.984375 49.984375 46.132812 50 41.375 L 50 36.75 C 50 31.988281 46.136719 28.125 41.375 28.125 Z M 8.625 28.125 "/>
      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 14.40625 41.78125 L 12.09375 41.78125 L 12.09375 45.84375 C 12.003906 46.351562 11.5625 46.726562 11.046875 46.726562 C 10.53125 46.726562 10.089844 46.351562 10 45.84375 L 10 34.78125 C 10 34.210938 10.460938 33.75 11.03125 33.75 L 14.40625 33.75 C 15.925781 33.617188 17.390625 34.351562 18.191406 35.648438 C 18.992188 36.945312 18.992188 38.585938 18.191406 39.882812 C 17.390625 41.179688 15.925781 41.914062 14.40625 41.78125 Z M 12.09375 39.6875 L 14.40625 39.6875 C 15.152344 39.78125 15.882812 39.4375 16.289062 38.804688 C 16.691406 38.171875 16.691406 37.359375 16.289062 36.726562 C 15.882812 36.09375 15.152344 35.75 14.40625 35.84375 L 12.09375 35.84375 Z M 12.09375 39.6875 "/>
      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 20.3125 45.84375 L 20.3125 34.78125 C 20.3125 34.210938 20.773438 33.75 21.34375 33.75 L 23.5625 33.75 C 27.1875 33.75 30.125 36.6875 30.125 40.3125 C 30.125 43.9375 27.1875 46.875 23.5625 46.875 L 21.34375 46.875 C 20.773438 46.875 20.3125 46.414062 20.3125 45.84375 Z M 22.40625 44.78125 L 23.5625 44.78125 C 26.03125 44.78125 28.03125 42.78125 28.03125 40.3125 C 28.03125 37.84375 26.03125 35.84375 23.5625 35.84375 L 22.40625 35.84375 Z M 22.40625 44.78125 "/>
      <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 33.1875 45.84375 L 33.1875 34.78125 C 33.183594 34.476562 33.3125 34.1875 33.542969 33.992188 C 33.769531 33.792969 34.074219 33.703125 34.375 33.75 L 40.625 33.75 C 41.132812 33.839844 41.507812 34.28125 41.507812 34.796875 C 41.507812 35.3125 41.132812 35.753906 40.625 35.84375 L 35.25 35.84375 L 35.25 39.28125 L 39.625 39.28125 C 40.195312 39.28125 40.65625 39.742188 40.65625 40.3125 C 40.65625 40.882812 40.195312 41.34375 39.625 41.34375 L 35.25 41.34375 L 35.25 45.84375 C 35.257812 46.359375 34.882812 46.796875 34.375 46.875 C 34.074219 46.921875 33.769531 46.832031 33.542969 46.632812 C 33.3125 46.4375 33.183594 46.148438 33.1875 45.84375 Z M 33.1875 45.84375 "/>
      </g>` }, defaultIcon: { extension: ".default", path: `<g id="surface1">
      <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 3.117188 44.777344 C 1.394531 44.777344 0 43.386719 0 41.671875 L 0 3.484375 C 0 1.769531 1.394531 0.378906 3.117188 0.378906 L 25.792969 0.378906 C 27.164062 0.304688 28.5 0.808594 29.480469 1.765625 L 37.980469 10.230469 C 39.144531 11.242188 39.769531 12.730469 39.683594 14.265625 L 39.683594 41.671875 C 39.683594 43.386719 38.289062 44.777344 36.5625 44.777344 Z M 25.511719 3.203125 L 3.117188 3.203125 C 2.960938 3.203125 2.832031 3.328125 2.832031 3.484375 L 2.832031 41.671875 C 2.832031 41.828125 2.960938 41.957031 3.117188 41.957031 L 36.5625 41.957031 C 36.679688 41.949219 36.785156 41.867188 36.820312 41.757812 L 36.820312 14.492188 L 28.34375 14.492188 C 28.160156 14.539062 27.964844 14.539062 27.777344 14.492188 C 26.480469 14.15625 25.554688 13.007812 25.511719 11.671875 Z M 28.34375 4.640625 L 28.34375 11.671875 C 28.390625 11.683594 28.441406 11.683594 28.488281 11.671875 L 35.402344 11.671875 Z M 28.34375 4.640625 "/>
      </g>` } }, a.MODULES.modals = function(e) {
      var t = e.$;
      e.shared.modals || (e.shared.modals = {});
      var l, v = e.shared.modals;
      function c() {
        for (var b in v)
          if (Object.prototype.hasOwnProperty.call(v, b)) {
            var f = v[b];
            f && f.$modal && f.$modal.removeData().remove();
          }
        l && l.removeData().remove(), v = {};
      }
      function N(b, f) {
        if (v[b]) {
          var u = v[b].$modal, T = u.data("instance") || e;
          T.events.enableBlur(), u.hide(), l.hide(), t(T.o_doc).find("body").first().removeClass("fr-prevent-scroll fr-mobile"), u.removeClass("fr-active"), f || (T.accessibility.restoreSelection(), T.events.trigger("modals.hide"));
        }
      }
      function L(b) {
        var f;
        if (typeof b == "string") {
          if (!v[b])
            return;
          f = v[b].$modal;
        } else
          f = b;
        return f && e.node.hasClass(f, "fr-active") && e.core.sameInstance(f) || !1;
      }
      return { _init: function() {
        e.events.on("shared.destroy", c, !0);
      }, get: function(f) {
        return v[f];
      }, create: function(f, u, T) {
        if (u = '<div class="fr-modal-head-line">'.concat(u, "</div>"), e.shared.$overlay || (e.shared.$overlay = t(e.doc.createElement("DIV")).addClass("fr-overlay"), t("body").first().append(e.shared.$overlay)), l = e.shared.$overlay, e.opts.theme && l.addClass("".concat(e.opts.theme, "-theme")), !v[f]) {
          var x = function(E, A) {
            var k = '<div tabIndex="-1" class="fr-modal'.concat(e.opts.theme ? " ".concat(e.opts.theme, "-theme") : "", '"><div class="fr-modal-wrapper">'), d = '<button title="'.concat(e.language.translate("Cancel"), '" class="fr-command fr-btn fr-modal-close"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24"><path d="').concat(a.SVG.close, '"/></svg></button>');
            k += '<div class="fr-modal-head">'.concat(E).concat(d, "</div>"), k += '<div tabIndex="-1" class="fr-modal-body">'.concat(A, "</div>"), k += "</div></div>";
            var g = t(e.doc.createElement("DIV"));
            return g.html(k), g.find("> .fr-modal");
          }(u, T);
          v[f] = { $modal: x, $head: x.find(".fr-modal-head"), $body: x.find(".fr-modal-body") }, e.helpers.isMobile() || x.addClass("fr-desktop"), t("body").first().append(x), e.events.$on(x, "click", ".fr-modal-close", function() {
            N(f);
          }, !0), v[f].$body.css("margin-top", v[f].$head.outerHeight()), e.events.$on(x, "keydown", function($) {
            var E = $.which;
            return E === a.KEYCODE.ESC ? (N(f), e.accessibility.focusModalButton(x), !1) : !(!t($.currentTarget).is("input[type=text], textarea") && E !== a.KEYCODE.ARROW_UP && E !== a.KEYCODE.ARROW_DOWN && !e.keys.isBrowserAction($) && ($.preventDefault(), $.stopPropagation(), 1));
          }, !0), N(f, !0);
        }
        return v[f];
      }, show: function(f) {
        if (v[f]) {
          var u = v[f].$modal;
          u.data("instance", e), u.show(), l.show(), t(e.o_doc).find("body").first().addClass("fr-prevent-scroll"), e.helpers.isMobile() && t(e.o_doc).find("body").first().addClass("fr-mobile"), u.addClass("fr-active"), e.accessibility.focusModal(u);
        }
      }, hide: N, resize: function(f) {
        if (v[f]) {
          var u = v[f], T = u.$modal, x = u.$body, $ = e.o_win.innerHeight, E = T.find(".fr-modal-wrapper"), A = $ - E.outerHeight(!0) + (E.height() - (x.outerHeight(!0) - x.height())), k = "auto";
          A < x.get(0).scrollHeight && (k = A), x.height(k);
        }
      }, isVisible: L, areVisible: function(f) {
        for (var u in v)
          if (Object.prototype.hasOwnProperty.call(v, u) && L(u) && (f === void 0 || v[u].$modal.data("instance") === f))
            return v[u].$modal;
        return !1;
      } };
    }, a.MODULES.position = function(e) {
      var t = e.$;
      function l() {
        var f = e.selection.ranges(0), u = f.getBoundingClientRect();
        if (u.top === 0 && u.left === 0 && u.width === 0 || u.height === 0) {
          var T = !1, x = e.opts.toolbarInline && f.startContainer && f.startContainer.firstChild && f.startContainer.firstChild.tagName === "BR";
          e.$el.find(".fr-marker").length === 0 && (x ? t(f.startContainer.firstChild).after(a.MARKERS) : e.selection.save(), T = !0);
          var $ = e.$el.find(".fr-marker").first();
          $.css("display", "inline"), $.css("line-height", "");
          var E = $.offset(), A = $.outerHeight();
          $.css("display", "none"), $.css("line-height", 0), (u = {}).left = E && E.left, u.width = 0, u.height = A, u.top = E && E.top - (e.helpers.isMobile() && !e.helpers.isIOS() || e.opts.iframe ? 0 : e.helpers.scrollTop()), $ && 0 < $.length && (u.top -= t($.get(0).parentNode).height()), u.right = 1, u.bottom = 1, u.ok = !0, T && (x ? e.$el.find(".fr-marker").remove() : e.selection.restore());
        }
        return u;
      }
      function v(f, u, T, x) {
        var $ = T.data("container");
        if (!$ || $.get(0).tagName === "BODY" && $.css("position") === "static" || (f && (f -= $.offset().left), u && (u -= $.offset().top), $.get(0).tagName !== "BODY" ? (f && (f += $.get(0).scrollLeft), u && (u += $.get(0).scrollTop)) : $.css("position") === "absolute" && (f && (f += $.position().left), u && (u += $.position().top))), e.opts.iframe && $ && e.$tb && $.get(0) !== e.$tb.get(0)) {
          var E = e.helpers.getPX(e.$wp.find(".fr-iframe").css("padding-top")), A = e.helpers.getPX(e.$wp.find(".fr-iframe").css("padding-left"));
          f && (f += e.$iframe.offset().left + A), u && (u += e.$iframe.offset().top + E);
        }
        var k = function(g, r) {
          var o = g.outerWidth(!0);
          return r + o > e.$sc.get(0).clientWidth - 10 && (r = e.$sc.get(0).clientWidth - o - 10), r < 0 && (r = 10), r;
        }(T, f);
        f && T.css("left", k), u && T.css("top", function(g, r, o) {
          var i = g.outerHeight(!0);
          if (!e.helpers.isMobile() && e.$tb && g.parent().get(0) !== e.$tb.get(0)) {
            var p = g.parent().offset().top, s = r - i - (o || 0);
            g.parent().get(0) === e.$sc.get(0) && (p -= g.parent().position().top);
            var n = e.$sc.get(0).clientHeight;
            p + r + i > e.$sc.offset().top + n && 0 < g.parent().offset().top + s && 0 < s ? s > e.$wp.scrollTop() && (r = s, g.addClass("fr-above")) : g.removeClass("fr-above");
          }
          return r;
        }(T, u, x));
      }
      function c(f) {
        var u = t(f), T = u.is(".fr-sticky-on"), x = u.data("sticky-top"), $ = u.data("sticky-scheduled");
        if (x === void 0) {
          u.data("sticky-top", 0);
          var E = t('<div class="fr-sticky-dummy" style="height: '.concat(u.outerHeight(), 'px;"></div>'));
          e.$box.prepend(E);
        } else
          e.$box.find(".fr-sticky-dummy").css("height", u.outerHeight());
        if (e.core.hasFocus() || 0 < e.$tb.findVisible("input:focus").length) {
          var A = e.helpers.scrollTop(), k = Math.min(Math.max(A - e.$tb.parent().offset().top, 0), e.$tb.parent().outerHeight() - u.outerHeight());
          if (k !== x && k !== $ && (clearTimeout(u.data("sticky-timeout")), u.data("sticky-scheduled", k), u.outerHeight() < A - e.$tb.parent().offset().top && u.addClass("fr-opacity-0"), u.data("sticky-timeout", setTimeout(function() {
            var r = e.helpers.scrollTop(), o = Math.min(Math.max(r - e.$tb.parent().offset().top, 0), e.$tb.parent().outerHeight() - u.outerHeight());
            0 < o && e.$tb.parent().get(0).tagName === "BODY" && (o += e.$tb.parent().position().top), o !== x && (u.css("top", Math.max(o, 0)), u.data("sticky-top", o), u.data("sticky-scheduled", o)), u.removeClass("fr-opacity-0");
          }, 100))), !T) {
            var d = e.$tb.parent(), g = d.get(0).offsetWidth - d.get(0).clientWidth;
            u.css("top", "0"), u.width(d.width() - g), u.addClass("fr-sticky-on"), e.$box.addClass("fr-sticky-box");
          }
        } else
          clearTimeout(t(f).css("sticky-timeout")), u.css("top", "0"), u.css("position", ""), u.css("width", ""), u.data("sticky-top", 0), u.removeClass("fr-sticky-on"), e.$box.removeClass("fr-sticky-box");
      }
      function N(f) {
        if (f.offsetWidth) {
          var u = t(f), T = u.outerHeight(), x = u.data("sticky-position"), $ = t(e.opts.scrollableContainer === "body" ? e.o_win : e.opts.scrollableContainer).outerHeight(), E = 0, A = 0;
          e.opts.scrollableContainer !== "body" && (E = e.$sc.offset().top, A = t(e.o_win).outerHeight() - E - $);
          var k = e.opts.scrollableContainer === "body" ? e.helpers.scrollTop() : E, d = u.is(".fr-sticky-on");
          u.data("sticky-parent") || u.data("sticky-parent", u.parent());
          var g = u.data("sticky-parent"), r = g.offset().top, o = g.outerHeight();
          if (u.data("sticky-offset") ? e.$box.find(".fr-sticky-dummy").css("height", "".concat(T, "px")) : (u.data("sticky-offset", !0), u.after('<div class="fr-sticky-dummy" style="height: '.concat(T, 'px;"></div>'))), !x) {
            var i = u.css("top") !== "auto" || u.css("bottom") !== "auto";
            i || u.css("position", "fixed"), x = { top: e.node.hasClass(u.get(0), "fr-top"), bottom: e.node.hasClass(u.get(0), "fr-bottom") }, i || u.css("position", ""), u.data("sticky-position", x), u.data("top", e.node.hasClass(u.get(0), "fr-top") ? u.css("top") : "auto"), u.data("bottom", e.node.hasClass(u.get(0), "fr-bottom") ? u.css("bottom") : "auto");
          }
          var p = e.helpers.getPX(u.data("top")), s = e.helpers.getPX(u.data("bottom")), n = x.top && function() {
            return r < k + p && k + p <= r + o - T;
          }() && (e.helpers.isInViewPort(e.$sc.get(0)) || e.opts.scrollableContainer === "body"), C = x.bottom && function() {
            return r + T < k + $ - s && k + $ - s < r + o;
          }();
          if (n || C) {
            var m = g.get(0).offsetWidth - g.get(0).clientWidth;
            u.css("width", "".concat(g.get(0).getBoundingClientRect().width - m, "px")), d || (u.addClass("fr-sticky-on"), u.removeClass("fr-sticky-off"), u.css("top") && (u.data("top") !== "auto" ? u.css("top", e.helpers.getPX(u.data("top")) + E) : u.data("top", "auto")), u.css("bottom") && (u.data("bottom") !== "auto" ? u.css("bottom", e.helpers.getPX(u.data("bottom")) + A) : u.css("bottom", "auto")));
          } else
            e.node.hasClass(u.get(0), "fr-sticky-off") || (u.css("width", ""), u.removeClass("fr-sticky-on"), u.addClass("fr-sticky-off"), u.css("top") && u.data("top") !== "auto" && x.top && u.css("top", 0), u.css("bottom") && u.data("bottom") !== "auto" && x.bottom && u.css("bottom", 0));
        }
      }
      function L() {
        if (e.helpers.requestAnimationFrame()(L), e.events.trigger("position.refresh") !== !1)
          for (var f = 0; f < e._stickyElements.length; f++)
            if (e.opts.toolbarBottom) {
              var u = e.$tb.parent(), T = u.get(0).offsetWidth - u.get(0).clientWidth, x = t(e._stickyElements[f]);
              x.width(u.width() - T), x.addClass("fr-sticky-on"), e.$box.addClass("fr-sticky-box");
            } else
              c(e._stickyElements[f]);
      }
      function b() {
        if (e._stickyElements)
          for (var f = 0; f < e._stickyElements.length; f++)
            N(e._stickyElements[f]);
      }
      return { _init: function() {
        (function() {
          if (e._stickyElements = [], e.helpers.getIOSVersion() <= 8)
            L(), e.events.$on(t(e.o_win), "scroll", function() {
              if (e.core.hasFocus())
                for (var x = 0; x < e._stickyElements.length; x++) {
                  var $ = t(e._stickyElements[x]), E = $.parent(), A = e.helpers.scrollTop();
                  $.outerHeight() < A - E.offset().top && (e.opts.toolbarBottom && e.helpers.isIOS() || ($.addClass("fr-opacity-0"), $.data("sticky-top", -1), $.data("sticky-scheduled", -1)));
                }
            }, !0);
          else {
            e.opts.scrollableContainer !== "body" && e.events.$on(t(e.opts.scrollableContainer), "scroll", b, !0), e.events.$on(t(e.o_win), "scroll", b, !0), e.events.$on(t(e.o_win), "resize", b, !0), e.events.on("initialized", b), e.events.on("focus", b), e.events.$on(t(e.o_win), "resize", "textarea", b, !0);
            var T = t(e.el).parents(".modal");
            T.get(0) && e.events.$on(T, "scroll", b, !0);
          }
          e.events.on("destroy", function() {
            e._stickyElements = [];
          });
        })();
      }, forSelection: function(u) {
        var T = l();
        if (T.top != null) {
          u.css({ top: 0, left: 0 });
          var x = T.top + T.height, $ = T.left + T.width / 2 - u.get(0).offsetWidth / 2 + e.helpers.scrollLeft();
          e.opts.iframe || (x += e.helpers.scrollTop()), v($, x, u, T.height);
        }
      }, addSticky: function(u) {
        u.addClass("fr-sticky"), e.helpers.isIOS() && !e.opts.toolbarBottom && u.addClass("fr-sticky-ios"), u.removeClass("fr-sticky"), e._stickyElements.push(u.get(0));
      }, refresh: b, at: v, getBoundingRect: l };
    }, a.MODULES.refresh = function(e) {
      var t = e.$;
      function l(c, N) {
        c.toggleClass("fr-disabled", N).attr("aria-disabled", N);
      }
      function v(c) {
        var N = e.$tb.find('.fr-more-toolbar[data-name="'.concat(c.attr("data-group-name"), '"]')), L = function(f, u) {
          var T = 0, x = u.find("> .fr-command, > .fr-btn-wrap");
          x.each(function(k, d) {
            T += t(d).outerWidth();
          });
          var $, E = e.helpers.getPX(t(x[0]).css("margin-left")), A = e.helpers.getPX(t(x[0]).css("margin-right"));
          return $ = e.opts.direction === "rtl" ? e.$tb.outerWidth() - f.offset().left + e.$tb.offset().left - (T + f.outerWidth() + x.length * (E + A)) / 2 : f.offset().left - e.$tb.offset().left - (T - f.outerWidth() + x.length * (E + A)) / 2, $ + T + x.length * (E + A) > e.$tb.outerWidth() && ($ -= (T + x.length * (E + A) - f.outerWidth()) / 2), $ < 0 && ($ = 0), $;
        }(c, N);
        e.opts.direction === "rtl" ? N.css("padding-right", L) : N.css("padding-left", L);
      }
      return { undo: function(N) {
        l(N, !e.undo.canDo());
      }, redo: function(N) {
        l(N, !e.undo.canRedo());
      }, outdent: function(N) {
        if (e.node.hasClass(N.get(0), "fr-no-refresh") || t("button#markdown-".concat(e.id, ".fr-active")).length)
          return !1;
        for (var L = e.selection.blocks(), b = 0; b < L.length; b++) {
          var f = e.opts.direction === "rtl" || t(L[b]).css("direction") === "rtl" ? "margin-right" : "margin-left", u = L[0].parentElement;
          if (["HTML", "P", "DIV", "UL", "OL", "LI", "TR", "BLOCKQUOTE", "BODY"].indexOf(u.parentNode.tagName) < 0 || L[0].previousSibling && u.parentNode.style.listStyleType == "none")
            return l(N, !0), !0;
          if (L[b].tagName === "LI" || L[b].parentNode.tagName === "LI" || 0 < e.helpers.getPX(t(L[b]).css(f)))
            return l(N, !1), !0;
        }
        l(N, !0);
      }, indent: function(N) {
        if (e.node.hasClass(N.get(0), "fr-no-refresh") || t("button#markdown-".concat(e.id, ".fr-active")).length)
          return !1;
        for (var L = e.selection.blocks(), b = 0; b < L.length; b++) {
          for (var f = L[b].previousSibling; f && f.nodeType === Node.TEXT_NODE && f.textContent.length === 0; )
            f = f.previousSibling;
          if (L[b].tagName !== "LI" || f)
            return l(N, !1), !0;
          l(N, !0);
        }
      }, moreText: v, moreParagraph: v, moreMisc: v, moreRich: v };
    }, Object.assign(a.DEFAULTS, { attribution: !0, toolbarBottom: !1, toolbarButtons: null, toolbarButtonsXS: null, toolbarButtonsSM: null, toolbarButtonsMD: null, toolbarContainer: null, toolbarInline: !1, toolbarSticky: !0, toolbarStickyOffset: 0, toolbarVisibleWithoutSelection: !1, toolbarResponsiveToEditor: !1 }), a.TOOLBAR_BUTTONS = { moreText: { buttons: ["bold", "italic", "underline", "strikeThrough", "subscript", "superscript", "fontFamily", "fontSize", "textColor", "backgroundColor", "inlineClass", "inlineStyle", "clearFormatting"] }, moreParagraph: { buttons: ["alignLeft", "alignCenter", "formatOLSimple", "alignRight", "alignJustify", "formatOL", "formatUL", "paragraphFormat", "paragraphStyle", "lineHeight", "outdent", "indent", "quote"] }, moreRich: { buttons: ["trackChanges", "markdown", "insertLink", "insertFiles", "insertImage", "insertVideo", "insertTable", "emoticons", "fontAwesome", "specialCharacters", "embedly", "insertFile", "insertHR"], buttonsVisible: 4 }, moreMisc: { buttons: ["undo", "redo", "fullscreen", "print", "getPDF", "spellChecker", "selectAll", "html", "help"], align: "right", buttonsVisible: 2 }, trackChanges: { buttons: ["showChanges", "applyAll", "removeAll", "applyLast", "removeLast"], buttonsVisible: 0 } }, a.TOOLBAR_BUTTONS_MD = null, (a.TOOLBAR_BUTTONS_SM = {}).moreText = Object.assign({}, a.TOOLBAR_BUTTONS.moreText, { buttonsVisible: 2 }), a.TOOLBAR_BUTTONS_SM.moreParagraph = Object.assign({}, a.TOOLBAR_BUTTONS.moreParagraph, { buttonsVisible: 2 }), a.TOOLBAR_BUTTONS_SM.moreRich = Object.assign({}, a.TOOLBAR_BUTTONS.moreRich, { buttonsVisible: 2 }), a.TOOLBAR_BUTTONS_SM.moreMisc = Object.assign({}, a.TOOLBAR_BUTTONS.moreMisc, { buttonsVisible: 2 }), a.TOOLBAR_BUTTONS_SM.trackChanges = Object.assign({}, a.TOOLBAR_BUTTONS.trackChanges, { buttonsVisible: 0 }), (a.TOOLBAR_BUTTONS_XS = {}).moreText = Object.assign({}, a.TOOLBAR_BUTTONS.moreText, { buttonsVisible: 0 }), a.TOOLBAR_BUTTONS_XS.moreParagraph = Object.assign({}, a.TOOLBAR_BUTTONS.moreParagraph, { buttonsVisible: 0 }), a.TOOLBAR_BUTTONS_XS.moreRich = Object.assign({}, a.TOOLBAR_BUTTONS.moreRich, { buttonsVisible: 0 }), a.TOOLBAR_BUTTONS_XS.moreMisc = Object.assign({}, a.TOOLBAR_BUTTONS.moreMisc, { buttonsVisible: 2 }), a.TOOLBAR_BUTTONS_XS.trackChanges = Object.assign({}, a.TOOLBAR_BUTTONS.trackChanges, { buttonsVisible: 0 }), a.POWERED_BY = '<a id="fr-logo" href="https://froala.com/wysiwyg-editor" target="_blank" title="Froala WYSIWYG HTML Editor"><span>Powered by</span><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 822.8 355.33"><defs><style>.fr-logo{fill:#b1b2b7;}</style></defs><title>Froala</title><path class="fr-logo" d="M123.58,78.65A16.16,16.16,0,0,0,111.13,73H16.6C7.6,73,0,80.78,0,89.94V128.3a16.45,16.45,0,0,0,32.9,0V104.14h78.5A15.63,15.63,0,0,0,126.87,91.2,15.14,15.14,0,0,0,123.58,78.65Z"/><path class="fr-logo" d="M103.54,170a16.05,16.05,0,0,0-11.44-4.85H15.79A15.81,15.81,0,0,0,0,180.93v88.69a16.88,16.88,0,0,0,5,11.92,16,16,0,0,0,11.35,4.7h.17a16.45,16.45,0,0,0,16.41-16.6v-73.4H92.2A15.61,15.61,0,0,0,107.89,181,15.1,15.1,0,0,0,103.54,170Z"/><path class="fr-logo" d="M233,144.17c-5.29-6.22-16-7.52-24.14-7.52-16.68,0-28.72,7.71-36.5,23.47v-5.67a16.15,16.15,0,1,0-32.3,0v115.5a16.15,16.15,0,1,0,32.3,0v-38.7c0-19.09,3.5-63.5,35.9-63.5a44.73,44.73,0,0,1,5.95.27h.12c12.79,1.2,20.06-2.73,21.6-11.69C236.76,151.48,235.78,147.39,233,144.17Z"/><path class="fr-logo" d="M371.83,157c-13.93-13.11-32.9-20.33-53.43-20.33S279,143.86,265.12,157c-14.67,13.88-22.42,32.82-22.42,54.77,0,21.68,8,41.28,22.4,55.2,13.92,13.41,32.85,20.8,53.3,20.8s39.44-7.38,53.44-20.79c14.55-13.94,22.56-33.54,22.56-55.21S386.39,170.67,371.83,157Zm-9.73,54.77c0,25.84-18.38,44.6-43.7,44.6s-43.7-18.76-43.7-44.6c0-25.15,18.38-43.4,43.7-43.4S362.1,186.59,362.1,211.74Z"/><path class="fr-logo" d="M552.7,138.14a16.17,16.17,0,0,0-16,16.3v1C526.41,143.85,509,136.64,490,136.64c-19.83,0-38.19,7.24-51.69,20.4C424,171,416.4,190,416.4,212c0,21.61,7.78,41.16,21.9,55,13.56,13.33,31.92,20.67,51.7,20.67,18.83,0,36.29-7.41,46.7-19.37v1.57a16.15,16.15,0,1,0,32.3,0V154.44A16.32,16.32,0,0,0,552.7,138.14Zm-16.3,73.6c0,30.44-22.81,44.3-44,44.3-24.57,0-43.1-19-43.1-44.3s18.13-43.4,43.1-43.4C513.73,168.34,536.4,183.55,536.4,211.74Z"/><path class="fr-logo" d="M623.5,61.94a16.17,16.17,0,0,0-16,16.3v191.7a16.15,16.15,0,1,0,32.3,0V78.24A16.32,16.32,0,0,0,623.5,61.94Z"/><path class="fr-logo" d="M806.5,138.14a16.17,16.17,0,0,0-16,16.3v1c-10.29-11.63-27.74-18.84-46.7-18.84-19.83,0-38.19,7.24-51.69,20.4-14.33,14-21.91,33-21.91,55,0,21.61,7.78,41.16,21.9,55,13.56,13.33,31.92,20.67,51.7,20.67,18.83,0,36.29-7.41,46.7-19.37v1.57a16.15,16.15,0,1,0,32.3,0V154.44A16.32,16.32,0,0,0,806.5,138.14Zm-16.3,73.6c0,30.44-22.81,44.3-44,44.3-24.57,0-43.1-19-43.1-44.3s18.13-43.4,43.1-43.4C767.53,168.34,790.2,183.55,790.2,211.74Z"/></svg></a>', a.MODULES.toolbar = function(e) {
      var t, l = e.$, v = [];
      function c(g) {
        var r = {};
        if (Array.isArray(g)) {
          if (!Array.isArray(g[0])) {
            for (var o = [], i = [], p = 0; p < g.length; p++)
              g[p] === "|" || g[p] === "-" ? (0 < i.length && o.push(i), i = []) : i.push(g[p]);
            0 < i.length && o.push(i), g = o;
          }
          g.forEach(function(s, n) {
            r["group".concat(n + 1)] = { buttons: s };
          }), r.showMoreButtons = !1;
        } else
          o1(g) !== "object" || Array.isArray(g) || ((r = g).showMoreButtons = !0);
        return r;
      }
      function N() {
        var g = e.helpers.screenSize(e.opts.toolbarResponsiveToEditor);
        return v[t = g];
      }
      function L() {
        for (var g = e.$tb.find(".fr-more-toolbar"), r = function() {
          var p = l(g[o]);
          if (p.hasClass("fr-expanded")) {
            var s = e.helpers.getPX(p.css("padding-left")), n = p.find("> .fr-command, > .fr-btn-wrap"), C = l(n[0]), m = e.helpers.getPX(C.css("margin-left")), h = e.helpers.getPX(C.css("margin-right")), S = e.helpers.getPX(C.css("margin-top")), y = e.helpers.getPX(C.css("margin-bottom"));
            if (n.each(function(H, _) {
              s += l(_).outerWidth() + m + h;
            }), e.$tb.outerWidth() < s) {
              var M = Math.floor(s / e.$tb.outerWidth());
              s += M * (s / p[0].childElementCount), M = Math.ceil(s / e.$tb.outerWidth());
              var O = (e.helpers.getPX(C.css("height")) + S + y) * M;
              p.css("height", O);
            }
          } else
            p.css("height", "");
        }, o = 0; o < g.length; o++)
          r();
        !e.helpers.isMobile() && e.opts.toolbarBottom ? e.$tb.find(".fr-toolbar .fr-more-toolbar").removeClass("position-relative") : e.$tb.find(".fr-toolbar .fr-more-toolbar").addClass("position-relative");
      }
      function b() {
        if (e.$tb.find("[data-name='trackChanges-".concat(e.id, "']")).length == 0 && -1 < e.opts.pluginsEnabled.indexOf("track_changes")) {
          e.$tb.append(l('<div class="fr-more-toolbar"></div>').data("name", "trackChanges-".concat(e.id)));
          for (var g = 0, r = ["showChanges", "applyAll", "removeAll", "applyLast", "removeLast"]; g < r.length; g++) {
            var o = r[g], i = a.COMMANDS[o];
            if (i) {
              i.more_btn = !0;
              var p = l(e.button.build(o, i, !0));
              e.button.addButtons(p), e.$tb.find("[data-name='trackChanges-".concat(e.id, "']")).append(p);
            }
          }
        }
        if (t !== e.helpers.screenSize(e.opts.toolbarResponsiveToEditor)) {
          var s = N(), n = l(), C = l();
          for (var m in e.$tb.find(".fr-btn-grp > .fr-command, .fr-more-toolbar > .fr-command, .fr-btn-grp > .fr-btn-wrap > .fr-command, .fr-more-toolbar > .fr-btn-wrap > .fr-command").addClass("fr-hidden"), function() {
            for (var U = e.$tb.find(".fr-btn-grp, .fr-more-toolbar"), V = function() {
              var P = l(U[F]);
              P.children().each(function(j, Y) {
                P.before(Y);
              }), P.remove();
            }, F = 0; F < U.length; F++)
              V();
          }(), s) {
            var h = s[m];
            if (h.buttons && (m !== "trackChanges" || e.opts.pluginsEnabled.indexOf("track_changes") !== -1)) {
              var S = void 0, y = 0, M = 3, O = void 0;
              m !== "trackChanges" && (O = l('<div class="fr-btn-grp fr-float-'.concat(s[m].align ? s[m].align : "left", '"></div>'))), s.showMoreButtons && (S = l('<div class="fr-more-toolbar"></div>').data("name", "".concat(m, "-").concat(e.id)), m !== "trackChanges" && m !== "moreRich" || !e.opts.trackChangesEnabled || S.addClass("fr-expanded"));
              for (var H = 0; H < h.buttons.length; H++) {
                h.buttonsVisible !== void 0 && (M = h.buttonsVisible);
                var _ = e.$tb.find('> .fr-command[data-cmd="' + h.buttons[H] + '"], > div.fr-btn-wrap > .fr-command[data-cmd="' + h.buttons[H] + '"]'), D = null;
                e.node.hasClass(_.next().get(0), "fr-dropdown-menu") && (D = _.next()), e.node.hasClass(_.next().get(0), "fr-options") && (_.removeClass("fr-hidden"), _.next().removeClass("fr-hidden"), _ = _.parent()), _.removeClass("fr-hidden"), s.showMoreButtons && M <= y ? (S.append(_), D && S.append(D)) : (O.append(_), D && O.append(D)), y++;
              }
              if (s.showMoreButtons && M < y) {
                var w = e.$tb.find('.fr-command[data-cmd="'.concat(m, '"]'));
                if (0 < w.length)
                  w.removeClass("fr-hidden fr-open");
                else {
                  var R = m, B = a.COMMANDS[R];
                  B && (B.more_btn = !0, w = l(e.button.build(R, B, !0)), e.button.addButtons(w));
                }
                O && O.append(w);
              }
              O && n.push(O), s.showMoreButtons && C.push(S);
            }
          }
          e.opts.toolbarBottom ? (e.$tb.append(C), e.$tb.find(".fr-newline").remove(), e.$tb.append('<div class="fr-newline"></div>'), e.$tb.append(n)) : (e.$tb.append(n), e.$tb.find(".fr-newline").remove(), e.$tb.append('<div class="fr-newline"></div>'), e.$tb.append(C)), e.$tb.removeClass("fr-toolbar-open"), e.$box.removeClass("fr-toolbar-open"), e.events.trigger("codeView.toggle");
        }
        L();
      }
      function f(g, r) {
        setTimeout(function() {
          var o;
          if (e.opts.iframe ? o = e.$iframe.get(0).contentWindow.document.activeElement : o = document.activeElement, (!g || g.which != a.KEYCODE.ESC) && e.selection.inEditor() && e.core.hasFocus() && !e.popups.areVisible() && l(e.selection.blocks()[0]).closest("table").attr("contenteditable") != "false" && o.tagName !== "INPUT" && o.tagName !== "TEXTAREA" && (e.opts.toolbarVisibleWithoutSelection || !e.selection.isCollapsed() && !e.keys.isIME() || r)) {
            if (e.$tb.data("instance", e), e.events.trigger("toolbar.show", [g]) === !1)
              return;
            e.$tb.show(), e.opts.toolbarContainer || e.position.forSelection(e.$tb), 1 < e.opts.zIndex ? e.$tb.css("z-index", e.opts.zIndex + 1) : e.$tb.css("z-index", null);
          }
        }, 0);
      }
      function u(g) {
        return (!g || g.type !== "blur" || document.activeElement !== e.el) && (!(!g || g.type !== "keydown" || !e.keys.ctrlKey(g)) || !!e.button.getButtons(".fr-dropdown.fr-active").next().find(e.o_doc.activeElement).length || (e.helpers.isMobile() && e.opts.toolbarInline && (e.$tb.find(".fr-expanded").toggleClass("fr-expanded"), e.$tb.find(".fr-open").removeClass("fr-open"), e.$tb.removeClass("fr-toolbar-open"), L()), void (e.events.trigger("toolbar.hide") !== !1 && e.$tb.hide())));
      }
      v[a.XS] = c(e.opts.toolbarButtonsXS || e.opts.toolbarButtons || a.TOOLBAR_BUTTONS_XS || a.TOOLBAR_BUTTONS || []), v[a.SM] = c(e.opts.toolbarButtonsSM || e.opts.toolbarButtons || a.TOOLBAR_BUTTONS_SM || a.TOOLBAR_BUTTONS || []), v[a.MD] = c(e.opts.toolbarButtonsMD || e.opts.toolbarButtons || a.TOOLBAR_BUTTONS_MD || a.TOOLBAR_BUTTONS || []), v[a.LG] = c(e.opts.toolbarButtons || a.TOOLBAR_BUTTONS || []);
      var T = null;
      function x(g) {
        clearTimeout(T), g && g.which === a.KEYCODE.ESC || (T = setTimeout(f, e.opts.typingTimer));
      }
      function $() {
        e.events.on("window.mousedown", u), e.events.on("keydown", u), e.events.on("blur", u), e.events.$on(e.$tb, "transitionend", ".fr-more-toolbar", function() {
          e.position.forSelection(e.$tb);
        }), e.helpers.isMobile() || e.events.on("window.mouseup", f), e.helpers.isMobile() ? e.helpers.isIOS() || (e.events.on("window.touchend", f), e.browser.mozilla && setInterval(f, 200)) : e.events.on("window.keyup", x), e.events.on("keydown", function(g) {
          g && g.which === a.KEYCODE.ESC && e.events.trigger("toolbar.esc");
        }), e.events.on("keydown", function(g) {
          if (g.which === a.KEYCODE.ALT)
            return g.stopPropagation(), !1;
        }, !0), e.events.$on(e.$wp, "scroll.toolbar", f), e.events.on("commands.after", f), e.helpers.isMobile() && (e.events.$on(e.$doc, "selectionchange", x), e.events.$on(e.$doc, "orientationchange", f));
      }
      function E() {
        e.$tb.html("").removeData().remove(), e.$tb = null, e.$second_tb && (e.$second_tb.html("").removeData().remove(), e.$second_tb = null);
      }
      function A() {
        e.$box.removeClass("fr-top fr-bottom fr-inline fr-basic"), e.$box.find(".fr-sticky-dummy").remove();
      }
      function k() {
        e.opts.theme && e.$tb.addClass("".concat(e.opts.theme, "-theme")), 1 < e.opts.zIndex && e.$tb.css("z-index", e.opts.zIndex + 1), e.opts.direction !== "auto" && e.$tb.removeClass("fr-ltr fr-rtl").addClass("fr-".concat(e.opts.direction)), e.helpers.isMobile() ? e.$tb.addClass("fr-mobile") : e.$tb.addClass("fr-desktop"), e.opts.toolbarContainer ? (e.opts.toolbarInline && ($(), u()), e.opts.toolbarBottom ? e.$tb.addClass("fr-bottom") : e.$tb.addClass("fr-top")) : function() {
          e.opts.toolbarInline ? (e.$sc.append(e.$tb), e.$tb.data("container", e.$sc), e.$tb.addClass("fr-inline"), $(), e.opts.toolbarBottom = !1) : (e.opts.toolbarBottom ? (e.$box.append(e.$tb), e.$tb.addClass("fr-bottom"), e.$box.addClass("fr-bottom")) : (e.opts.toolbarBottom = !1, e.$box.prepend(e.$tb), e.$tb.addClass("fr-top"), e.$box.addClass("fr-top")), e.$tb.addClass("fr-basic"), e.opts.toolbarSticky && (e.opts.toolbarStickyOffset && (e.opts.toolbarBottom ? e.$tb.css("bottom", e.opts.toolbarStickyOffset) : e.$tb.css("top", e.opts.toolbarStickyOffset)), e.position.addSticky(e.$tb)));
        }(), function() {
          var r = e.button.buildGroup(N());
          e.$tb.append(r), L(), e.button.bindCommands(e.$tb);
        }(), function() {
          e.events.$on(l(e.o_win), "resize", b), e.events.$on(l(e.o_win), "orientationchange", b), e.opts.toolbarButtons && -1 < JSON.stringify(e.opts.toolbarButtons).indexOf("trackChanges") && b();
          var r = e.$tb.find(".fr-more-toolbar[data-name=trackChanges-".concat(e.id, "]")), o = r.length !== 0 && r.hasClass("fr-expanded");
          if (e.opts.trackChangesEnabled && !o) {
            var i = e.$tb.find(".fr-command.fr-btn[data-cmd=trackChanges");
            r.addClass("fr-expanded"), i.toggleClass("fr-open"), e.toolbar.enable();
          }
        }(), e.accessibility.registerToolbar(e.$tb), e.events.$on(e.$tb, "".concat(e._mousedown, " ").concat(e._mouseup), function(g) {
          var r = g.originalEvent ? g.originalEvent.target || g.originalEvent.originalTarget : null;
          if (r && r.tagName !== "INPUT" && !e.edit.isDisabled())
            return g.stopPropagation(), g.preventDefault(), !1;
        }, !0), e.helpers.isMobile() && e.events.$on(e.$tb, "click", function() {
          e.popups.areVisible().length || e.id !== e.shared.selected_editor && e.shared.selected_editor || e.$el.focus();
        }), e.events.$on(e.$tb, "transitionend", ".fr-more-toolbar", function() {
          e.$box.hasClass("fr-fullscreen") && (e.opts.height = e.o_win.innerHeight - (e.opts.toolbarInline ? 0 : e.$tb.outerHeight() + (e.$second_tb ? e.$second_tb.outerHeight() : 0)), e.size.refresh());
        });
      }
      var d = !1;
      return { _init: function() {
        if (e.$sc = l(e.opts.scrollableContainer).first(), !e.$wp)
          return !1;
        e.opts.toolbarInline || e.opts.toolbarBottom || (e.$second_tb = l(e.doc.createElement("div")).attr("class", "fr-second-toolbar"), e.$box.append(e.$second_tb), (e.ul !== !1 || e.opts.attribution) && e.$second_tb.prepend(a.POWERED_BY)), e.opts.toolbarContainer ? (e.shared.$tb ? (e.$tb = e.shared.$tb, e.opts.toolbarInline && $()) : (e.shared.$tb = l(e.doc.createElement("DIV")), e.shared.$tb.addClass("fr-toolbar"), e.$tb = e.shared.$tb, l(e.opts.toolbarContainer).append(e.$tb), k(), e.$tb.data("instance", e)), e.opts.toolbarInline ? e.$box.addClass("fr-inline") : e.$box.addClass("fr-basic"), e.events.on("focus", function() {
          e.$tb.data("instance", e);
        }, !0), e.opts.toolbarInline = !1) : e.opts.toolbarInline ? (e.$box.addClass("fr-inline"), e.shared.$tb ? (e.$tb = e.shared.$tb, $()) : (e.shared.$tb = l(e.doc.createElement("DIV")), e.shared.$tb.addClass("fr-toolbar"), e.$tb = e.shared.$tb, k())) : (e.$box.addClass("fr-basic"), e.$tb = l(e.doc.createElement("DIV")), e.$tb.addClass("fr-toolbar"), k(), e.$tb.data("instance", e)), e.events.on("destroy", A, !0), e.events.on(e.opts.toolbarInline || e.opts.toolbarContainer ? "shared.destroy" : "destroy", E, !0), e.events.on("edit.on", function() {
          e.$tb.removeClass("fr-disabled").removeAttr("aria-disabled");
        }), e.events.on("edit.off", function() {
          e.$tb.addClass("fr-disabled").attr("aria-disabled", !0);
        }), function() {
          e.events.on("shortcut", function(o, i, p) {
            var s;
            if (i && !p ? s = e.$tb.find('.fr-command[data-cmd="'.concat(i, '"]')) : i && p && (s = e.$tb.find('.fr-command[data-cmd="'.concat(i, '"][data-param1="').concat(p, '"]'))), s.length && (o.preventDefault(), o.stopPropagation(), s.parents(".fr-toolbar").data("instance", e), o.type === "keydown"))
              return e.button.exec(s), !1;
          });
        }();
      }, hide: u, show: function() {
        if (e.events.trigger("toolbar.show") === !1)
          return !1;
        e.$tb.show();
      }, showInline: f, disable: function() {
        !d && e.$tb && (e.$tb.find(".fr-btn-grp > .fr-command, .fr-more-toolbar > .fr-command, .fr-btn-wrap > .fr-command").addClass("fr-disabled fr-no-refresh").attr("aria-disabled", !0), d = !0);
      }, enable: function() {
        d && e.$tb && (e.$tb.find(".fr-btn-grp > .fr-command, .fr-more-toolbar > .fr-command, .fr-btn-wrap > .fr-command").removeClass("fr-disabled fr-no-refresh").attr("aria-disabled", !1), d = !1), e.button.bulkRefresh();
      }, setMoreToolbarsHeight: L };
    };
    var u1 = ["scroll", "wheel", "touchmove", "touchstart", "touchend"], h1 = ["webkit", "moz", "ms", "o"], N1 = ["transitionend"], C1 = document.createElement("div").style, g1 = ["Webkit", "Moz", "ms", "O", "css", "style"], s1 = { visibility: "hidden", display: "block" }, T1 = ["focus", "blur", "click"], f1 = {}, m1 = function(t, l) {
      return { altKey: t.altKey, bubbles: t.bubbles, cancelable: t.cancelable, changedTouches: t.changedTouches, ctrlKey: t.ctrlKey, detail: t.detail, eventPhase: t.eventPhase, metaKey: t.metaKey, pageX: t.pageX, pageY: t.pageY, shiftKey: t.shiftKey, view: t.view, char: t.char, key: t.key, keyCode: t.keyCode, button: t.button, buttons: t.buttons, clientX: t.clientX, clientY: t.clientY, offsetX: t.offsetX, offsetY: t.offsetY, pointerId: t.pointerId, pointerType: t.pointerType, screenX: t.screenX, screenY: t.screenY, targetTouches: t.targetTouches, toElement: t.toElement, touches: t.touches, type: t.type, which: t.which, target: t.target, currentTarget: l, originalEvent: t, stopPropagation: function() {
        t.stopPropagation();
      }, stopImmediatePropagation: function() {
        t.stopImmediatePropagation();
      }, preventDefault: function() {
        u1.indexOf(t.type) === -1 && t.preventDefault();
      } };
    }, E1 = function(t) {
      return t.ownerDocument && t.ownerDocument.body && t.ownerDocument.body.contains(t) || t.nodeName === "#document" || t.nodeName === "HTML" || t === window;
    }, v1 = function(t, l) {
      return function(v) {
        var c = v.target;
        if (l)
          for (l = c1(l); c && c !== this; )
            Element.prototype.matches.call(c, c1(l)) && t.call(c, m1(v, c)), c = c.parentNode;
        else
          E1(c) && t.call(c, m1(v, c));
      };
    }, W = function(t, l) {
      return new L1(t, l);
    }, c1 = function(t) {
      return t && typeof t == "string" ? t.replace(/^\s*>/g, ":scope >").replace(/,\s*>/g, ", :scope >") : t;
    }, b1 = function(t) {
      return typeof t == "function" && typeof t.nodeType != "number";
    }, K = W;
    W.fn = W.prototype = { constructor: W, length: 0, contains: function(e) {
      if (!e)
        return !1;
      if (Array.isArray(e)) {
        for (var t = 0; t < e.length; t++)
          if (this.contains(e[t]) && this != e[t])
            return !0;
        return !1;
      }
      for (var l = 0; l < this.length; l++)
        for (var v = e; v; ) {
          if (v == this[l] || v[0] && v[0].isEqualNode(this[l]))
            return !0;
          v = v.parentNode;
        }
      return !1;
    }, findVisible: function(e) {
      for (var t = this.find(e), l = t.length - 1; 0 <= l; l--)
        K(t[l]).isVisible() || t.splice(l, 1);
      return t;
    }, formatParams: function(e) {
      var t = "".concat(Object.keys(e).map(function(l) {
        return "".concat(l, "=").concat(encodeURIComponent(e[l]));
      }).join("&"));
      return t || "";
    }, ajax: function(e) {
      var t = new XMLHttpRequest(), l = this.formatParams(e.data);
      for (var v in e.method.toUpperCase() === "GET" && (e.url = l ? e.url + "?" + l : e.url), t.open(e.method, e.url, !0), e.withCredentials && (t.withCredentials = !0), e.crossDomain && t.setRequestHeader("Access-Control-Allow-Origin", "*"), e.headers)
        Object.prototype.hasOwnProperty.call(e.headers, v) && t.setRequestHeader(v, e.headers[v]);
      Object.prototype.hasOwnProperty.call(e.headers, "Content-Type") || (e.dataType === "json" ? t.setRequestHeader("Content-Type", "application/json") : t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")), t.onload = function() {
        if (t.status == 200) {
          var c = t.responseText;
          e.dataType === "json" && (c = JSON.parse(c)), e.done(c, t.status, t);
        } else
          e.fail(t);
      }, t.send(l);
    }, prevAll: function() {
      var e = K();
      if (!this[0])
        return e;
      for (var t = this[0]; t && t.previousSibling; )
        t = t.previousSibling, e.push(t);
      return e;
    }, index: function(e) {
      return e ? typeof e == "string" ? [].indexOf.call(K(e), this[0]) : [].indexOf.call(this, e.length ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, isVisible: function() {
      return !!this[0] && !!(this[0].offsetWidth || this[0].offsetHeight || this[0].getClientRects().length);
    }, toArray: function() {
      return [].slice.call(this);
    }, get: function(e) {
      return e == null ? [].slice.call(this) : e < 0 ? this[e + this.length] : this[e];
    }, pushStack: function(e) {
      var t = W.merge(this.constructor(), e);
      return t.prevObject = this, t;
    }, wrapAll: function(e) {
      var t;
      return this[0] && (b1(e) && (e = e.call(this[0])), t = W(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
        for (var l = this; l.firstElementChild; )
          l = l.firstElementChild;
        return l;
      }).append(this)), this;
    }, wrapInner: function(e) {
      if (typeof e == "string") {
        for (var t = e.split(" "), l = 0; l < t.length && t[l].trim().length === 0; )
          l++;
        if (l < t.length && (K(e).length && t[l].trim() === K(e)[0].tagName && (e = document.createElement(t[l].trim())), l++), typeof e != "string")
          for (var v = K(e); l < t.length; l++) {
            t[l] = t[l].trim();
            var c = t[l].split("=");
            v.attr(c[0], c[1].replace('"', ""));
          }
      }
      for (; this[0].firstChild && this[0].firstChild !== e && typeof e != "string"; )
        e.appendChild(this[0].firstChild);
    }, wrapContent: function(e) {
      for (var t = document.createElement(e.tagName), l = 0; l < e.attributes.length; l++)
        K(t).attr(e.attributes[l].nodeName, e.attributes[l].value);
      K(this[0]).contents().wrapAll(t);
    }, wrap: function(e) {
      var t = b1(e);
      return this.each(function(l) {
        K(this).wrapAll(t ? e.call(this, l) : e);
      });
    }, unwrap: function() {
      return this.parent().each(function() {
        this.nodeName && this.nodeName.toLowerCase() === name.toLowerCase() || W(this).replaceWith(this.childNodes);
      });
    }, grep: function(e, t, l) {
      for (var v = [], c = 0, N = e.length, L = !l; c < N; c++)
        !t(e[c], c) !== L && v.push(e[c]);
      return v;
    }, map: function(e) {
      return this.pushStack(W.map(this, function(t, l) {
        return e.call(t, l, t);
      }));
    }, slice: function() {
      return this.pushStack([].slice.apply(this, arguments));
    }, each: function(e) {
      if (this.length)
        for (var t = 0; t < this.length && e.call(this[t], t, this[t]) !== !1; t++)
          ;
      return this;
    }, first: function() {
      return this.eq(0);
    }, last: function() {
      return this.eq(-1);
    }, eq: function(e) {
      var t = this.length, l = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= l && l < t ? [this[l]] : []);
    }, empty: function() {
      for (var e = 0; e < this.length; e++)
        this[e].innerHTML = "";
    }, contents: function() {
      for (var e = K(), t = 0; t < this.length; t++)
        for (var l = this[t].childNodes, v = 0; v < l.length; v++)
          e.push(l[v]);
      return e;
    }, attr: function(e, t) {
      if (o1(e) === "object") {
        for (var l in e)
          Object.prototype.hasOwnProperty.call(e, l) && e[l] !== null && this.attr(l, e[l]);
        return this;
      }
      if (t === void 0)
        return this.length === 0 || !this[0].getAttribute && e !== "checked" ? void 0 : e === "checked" ? this[0].checked : e === "tagName" ? this[0].tagName : this[0].getAttribute(e);
      if (e === "checked")
        for (var v = 0; v < this.length; v++)
          this[v].checked = t;
      else if (e === "tagName")
        for (var c = 0; c < this.length; c++)
          this[c].tagName = t;
      else
        for (var N = 0; N < this.length; N++)
          this[N].setAttribute(e, t);
      return this;
    }, removeAttr: function(e) {
      for (var t = 0; t < this.length; t++)
        this[t].removeAttribute && this[t].removeAttribute(e);
      return this;
    }, hide: function() {
      return this.css("display", "none"), this;
    }, show: function() {
      return this.css("display", "block"), this;
    }, focus: function() {
      return this.length && this[0].focus(), this;
    }, blur: function() {
      return this.length && this[0].blur(), this;
    }, data: function(e, t) {
      if (t !== void 0) {
        for (var l = 0; l < this.length; l++)
          o1(this[l]["data-" + e] = t) !== "object" && typeof t != "function" && this[l].setAttribute && this[l].setAttribute("data-" + e, t);
        return this;
      }
      if (t !== void 0)
        return this.attr("data-" + e, t);
      if (this.length !== 0)
        for (var v = 0; v < this.length; v++) {
          var c = this[v]["data-" + e];
          if (c == null && this[v].getAttribute && (c = this[v].getAttribute("data-" + e)), c !== void 0 && c != null)
            return c;
        }
    }, removeData: function(e) {
      for (var t = 0; t < this.length; t++)
        this[t].removeAttribute && this[t].removeAttribute("data-" + e), this[t]["data-" + e] = null;
      return this;
    }, getCorrectStyleName: function(e) {
      if (!f1[e]) {
        var t;
        e in C1 && (t = e);
        for (var l = e[0].toUpperCase() + e.slice(1), v = g1.length; v--; )
          (e = g1[v] + l) in C1 && (t = e);
        f1[e] = t;
      }
      return f1[e];
    }, css: function(e, t) {
      if (t !== void 0) {
        if (this.length === 0)
          return this;
        (typeof t != "string" || t.trim() === "" || isNaN(t)) && typeof t != "number" || !/(margin)|(padding)|(height)|(width)|(top)|(left)|(right)|(bottom)/gi.test(e) || /(line-height)/gi.test(e) || (t += "px");
        for (var l = 0; l < this.length; l++)
          e = K(this).getCorrectStyleName(e), this[l].style[e] = t;
        return this;
      }
      if (typeof e == "string") {
        if (this.length === 0)
          return;
        var v = this[0].ownerDocument || document, c = v.defaultView || v.parentWindow;
        return e = K(this).getCorrectStyleName(e), c.getComputedStyle(this[0])[e];
      }
      for (var N in e)
        Object.prototype.hasOwnProperty.call(e, N) && this.css(N, e[N]);
      return this;
    }, toggleClass: function(e, t) {
      if (1 < e.split(" ").length) {
        for (var l = e.split(" "), v = 0; v < l.length; v++)
          this.toggleClass(l[v], t);
        return this;
      }
      for (var c = 0; c < this.length; c++)
        t === void 0 ? this[c].classList.contains(e) ? this[c].classList.remove(e) : this[c].classList.add(e) : t ? this[c].classList.contains(e) || this[c].classList.add(e) : this[c].classList.contains(e) && this[c].classList.remove(e);
      return this;
    }, addClass: function(e) {
      if (e.length === 0)
        return this;
      if (1 < e.split(" ").length) {
        for (var t = e.split(" "), l = 0; l < t.length; l++)
          this.addClass(t[l]);
        return this;
      }
      for (var v = 0; v < this.length; v++)
        this[v].classList.add(e);
      return this;
    }, removeClass: function(e) {
      if (1 < e.split(" ").length) {
        for (var t = e.split(" "), l = 0; l < t.length; l++)
          t[l] = t[l].trim(), t[l].length && this.removeClass(t[l]);
        return this;
      }
      for (var v = 0; v < this.length; v++)
        e.length && this[v].classList.remove(e);
      return this;
    }, getClass: function(e) {
      return e.getAttribute && e.getAttribute("class") || "";
    }, stripAndCollapse: function(e) {
      return (e.match(/[^\x20\t\r\n\f]+/g) || []).join(" ");
    }, hasClass: function(e) {
      var t, l, v = 0;
      for (t = " " + e + " "; l = this[v++]; )
        if (l.nodeType === 1 && -1 < (" " + K(this).stripAndCollapse(K(this).getClass(l)) + " ").indexOf(t))
          return !0;
      return !1;
    }, scrollTop: function(e) {
      if (e === void 0)
        return this.length === 0 ? void 0 : this[0] === document ? document.documentElement.scrollTop : this[0].scrollTop;
      for (var t = 0; t < this.length; t++)
        this[t] === document ? window.scrollTo(document.documentElement.scrollLeft, e) : this[t].scrollTop = e;
    }, scrollLeft: function(e) {
      if (e === void 0)
        return this.length === 0 ? void 0 : this[0] === document ? document.documentElement.scrollLeft : this[0].scrollLeft;
      for (var t = 0; t < this.length; t++)
        this[t] === document ? window.scrollTo(e, document.documentElement.scrollTop) : this[t].scrollLeft = e;
    }, on: function(e, t, l) {
      if (1 < e.split(" ").length) {
        for (var v = e.split(" "), c = 0; c < v.length; c++)
          if (N1.indexOf(e) !== -1)
            for (var N = 0; N < h1.length; N++)
              this.on(h1[N] + e[0].toUpperCase() + e.slice(1), t, l);
          else
            this.on(v[c], t, l);
        return this;
      }
      l = typeof t == "function" ? v1(t, null) : v1(l, t);
      for (var L = 0; L < this.length; L++) {
        var b = K(this[L]);
        b.data("events") || b.data("events", []), b.data("events").push([e, l]);
        var f = e.split(".");
        f = f[0], 0 <= u1.indexOf(f) ? b.get(0).addEventListener(f, l, { passive: !0 }) : b.get(0).addEventListener(f, l);
      }
    }, off: function(e) {
      if (1 < e.split(" ").length) {
        for (var t = e.split(" "), l = 0; l < t.length; l++)
          this.off(t[l]);
        return this;
      }
      for (var v = 0; v < this.length; v++) {
        var c = K(this[v]);
        if (c.data("events")) {
          var N = e.split(".");
          N = N[0];
          for (var L = c.data("events") || [], b = L.length - 1; 0 <= b; b--) {
            var f = L[b];
            f[0] == e && (c.get(0).removeEventListener(N, f[1]), L.splice(b, 1));
          }
        }
      }
    }, trigger: function(e) {
      for (var t = 0; t < this.length; t++) {
        var l = void 0;
        typeof Event == "function" ? l = 0 <= e.search(/^mouse/g) ? new MouseEvent(e, { view: window, cancelable: !0, bubbles: !0 }) : new Event(e) : 0 <= e.search(/^mouse/g) ? (l = document.createEvent("MouseEvents")).initMouseEvent(e, !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null) : (l = document.createEvent("Event")).initEvent(e, !0, !0), 0 <= T1.indexOf(e) && typeof this[t][e] == "function" ? this[t][e]() : this[t].dispatchEvent(l);
      }
    }, triggerHandler: function() {
    }, val: function(e) {
      if (e === void 0)
        return this[0].value;
      for (var t = 0; t < this.length; t++)
        this[t].value = e;
      return this;
    }, siblings: function() {
      return K(this[0]).parent().children().not(this);
    }, find: function(e) {
      var t = K();
      if (typeof e != "string") {
        for (var l = 0; l < e.length; l++)
          for (var v = 0; v < this.length; v++)
            if (this[v] !== e[l] && K(this[v]).contains(e[l])) {
              t.push(e[l]);
              break;
            }
        return t;
      }
      var c = function(u) {
        return (typeof HTMLElement > "u" ? "undefined" : o1(HTMLElement)) === "object" ? u instanceof HTMLElement : u && o1(u) === "object" && u !== null && u.nodeType === 1 && typeof u.nodeName == "string";
      };
      e = c1(e);
      for (var N = 0; N < this.length; N++)
        if (this[N].querySelectorAll) {
          var L = [];
          if (e && typeof e == "string")
            try {
              L = this[N].querySelectorAll(e);
            } catch {
              L = this[N].children;
            }
          else
            c(e) && (L = [e]);
          for (var b = 0; b < L.length; b++)
            t.push(L[b]);
        }
      return t;
    }, children: function() {
      for (var e = K(), t = 0; t < this.length; t++)
        for (var l = this[t].children, v = 0; v < l.length; v++)
          e.push(l[v]);
      return e;
    }, not: function(e) {
      if (typeof e == "string")
        for (var t = this.length - 1; 0 <= t; t--)
          Element.prototype.matches.call(this[t], e) && this.splice(t, 1);
      else if (e instanceof W) {
        for (var l = this.length - 1; 0 <= l; l--)
          for (var v = 0; v < e.length; v++)
            if (this[l] === e[v]) {
              this.splice(l, 1);
              break;
            }
      } else
        for (var c = this.length - 1; 0 <= c; c--)
          this[c] === e[0] && this.splice(c, 1);
      return this;
    }, add: function(e) {
      for (var t = 0; t < e.length; t++)
        this.push(e[t]);
      return this;
    }, closest: function(e) {
      for (var t = 0; t < this.length; t++) {
        var l = Element.prototype.closest.call(this[t], e);
        if (l)
          return K(l);
      }
      return K();
    }, html: function(e) {
      if (e === void 0)
        return this.length === 0 ? void 0 : this[0].innerHTML;
      if (typeof e == "string")
        for (var t = 0; t < this.length; t++) {
          this[t].innerHTML = e;
          for (var l = this[t].children, v = this[t].ownerDocument || document, c = 0; c < l.length; c++)
            if (l[c].tagName === "SCRIPT") {
              var N = v.createElement("script");
              N.innerHTML = l[c].innerHTML, l[c].hasAttribute("async") && N.setAttribute("async", ""), N.src = l[c].src, l[c].hasAttribute("defer") && N.setAttribute("defer", ""), v.head.appendChild(N).parentNode.removeChild(N);
            }
        }
      else {
        this[0].innerHTML = "", this.append(e[0]);
        var L = this[0].ownerDocument || document;
        if (e[0].tagName === "SCRIPT") {
          var b = L.createElement("script");
          b.innerHTML = e[0].innerHTML, L.head.appendChild(b).parentNode.removeChild(b);
        }
      }
      return this;
    }, text: function(e) {
      if (!e)
        return this.length ? this[0].textContent : "";
      for (var t = 0; t < this.length; t++)
        this[t].textContent = e;
    }, after: function(t) {
      if (t)
        if (typeof t == "string")
          for (var l = 0; l < this.length; l++) {
            var v = this[l];
            if (v.nodeType != Node.ELEMENT_NODE) {
              var c = v.ownerDocument.createElement("SPAN");
              K(v).after(c), K(c).after(t).remove();
            } else
              v.insertAdjacentHTML("afterend", t);
          }
        else {
          var N = this[0];
          if (N.nextSibling)
            if (t instanceof W)
              for (var L = 0; L < t.length; L++)
                N.nextSibling.parentNode.insertBefore(t[L], N.nextSibling);
            else
              N.nextSibling.parentNode.insertBefore(t, N.nextSibling);
          else
            K(N.parentNode).append(t);
        }
      return this;
    }, clone: function(e) {
      for (var t = K(), l = 0; l < this.length; l++)
        t.push(this[l].cloneNode(e));
      return t;
    }, replaceWith: function(e) {
      if (typeof e == "string")
        for (var t = 0; t < this.length; t++)
          this[t].parentNode && (this[t].outerHTML = e);
      else if (e && e.length)
        for (var l = 0; l < this.length; l++)
          this.replaceWith(e[l]);
      else
        this.after(e).remove();
    }, insertBefore: function(e) {
      return K(e).before(this[0]), this;
    }, before: function(t) {
      if (t instanceof W) {
        for (var l = 0; l < t.length; l++)
          this.before(t[l]);
        return this;
      }
      if (t)
        if (typeof t == "string")
          for (var v = 0; v < this.length; v++) {
            var c = this[v];
            if (c.nodeType != Node.ELEMENT_NODE) {
              var N = c.ownerDocument.createElement("SPAN");
              K(c).before(N), K(N).before(t).remove();
            } else
              c.parentNode && c.insertAdjacentHTML("beforebegin", t);
          }
        else {
          var L = this[0];
          if (L.parentNode)
            if (t instanceof W)
              for (var b = 0; b < t.length; b++)
                L.parentNode.insertBefore(t[b], L);
            else
              L.parentNode.insertBefore(t, L);
        }
      return this;
    }, append: function(e) {
      if (this.length == 0)
        return this;
      if (typeof e == "string")
        for (var t = 0; t < this.length; t++) {
          var l = this[t], v = l.ownerDocument.createElement("SPAN");
          K(l).append(v), K(v).after(e).remove();
        }
      else if (e instanceof W || Array.isArray(e))
        for (var c = 0; c < e.length; c++)
          this.append(e[c]);
      else
        typeof e != "function" && this[0].appendChild(e);
      return this;
    }, prepend: function(e) {
      if (this.length == 0)
        return this;
      if (typeof e == "string")
        for (var t = 0; t < this.length; t++) {
          var l = this[t], v = l.ownerDocument.createElement("SPAN");
          K(l).prepend(v), K(v).before(e).remove();
        }
      else if (e instanceof W)
        for (var c = 0; c < e.length; c++)
          this.prepend(e[c]);
      else {
        var N = this[0];
        N.firstChild ? N.firstChild ? N.insertBefore(e, N.firstChild) : N.appendChild(e) : K(N).append(e);
      }
      return this;
    }, remove: function() {
      for (var e = 0; e < this.length; e++)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    }, prev: function() {
      return this.length && this[0].previousElementSibling ? K(this[0].previousElementSibling) : K();
    }, next: function() {
      return this.length && this[0].nextElementSibling ? K(this[0].nextElementSibling) : K();
    }, nextAllVisible: function() {
      return this.next();
    }, prevAllVisible: function() {
      return this.prev();
    }, outerHeight: function(e) {
      if (this.length !== 0) {
        var t = this[0];
        if (t === t.window)
          return t.innerHeight;
        var l = {}, v = this.isVisible();
        if (!v)
          for (var c in s1)
            l[c] = t.style[c], t.style[c] = s1[c];
        var N = t.offsetHeight;
        if (e && (N += parseInt(K(t).css("marginTop")) + parseInt(K(t).css("marginBottom"))), !v)
          for (var L in s1)
            t.style[L] = l[L];
        return N;
      }
    }, outerWidth: function(e) {
      if (this.length !== 0) {
        var t = this[0];
        if (t === t.window)
          return t.outerWidth;
        var l = {}, v = this.isVisible();
        if (!v)
          for (var c in s1)
            l[c] = t.style[c], t.style[c] = s1[c];
        var N = t.offsetWidth;
        if (e && (N += parseInt(K(t).css("marginLeft")) + parseInt(K(t).css("marginRight"))), !v)
          for (var L in s1)
            t.style[L] = l[L];
        return N;
      }
    }, width: function(e) {
      if (e === void 0) {
        if (this[0] instanceof HTMLDocument)
          return this[0].body.offsetWidth;
        if (this[0])
          return this[0].offsetWidth;
      } else
        this[0].style.width = e + "px";
    }, height: function(e) {
      var t = this[0];
      if (e === void 0) {
        if (t instanceof HTMLDocument) {
          var l = t.documentElement;
          return Math.max(t.body.scrollHeight, l.scrollHeight, t.body.offsetHeight, l.offsetHeight, l.clientHeight);
        }
        return t.offsetHeight;
      }
      t.style.height = e + "px";
    }, is: function(e) {
      return this.length !== 0 && (typeof e == "string" && this[0].matches ? this[0].matches(e) : e instanceof W ? this[0] == e[0] : this[0] == e);
    }, parent: function() {
      return this.length === 0 ? K() : K(this[0].parentNode);
    }, _matches: function(e, t) {
      var l = e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector;
      return e && !t ? l : l.call(e, t);
    }, parents: function(e) {
      for (var t = K(), l = 0; l < this.length; l++)
        for (var v = this[l].parentNode; v && v != document && this._matches(v); )
          e ? this._matches(v, e) && t.push(v) : t.push(v), v = v.parentNode;
      return t;
    }, parentsUntil: function(e, t) {
      var l = K();
      e instanceof W && 0 < e.length && (e = e[0]);
      for (var v = 0; v < this.length; v++)
        for (var c = this[v].parentNode; c && c != document && c != e && this[v] != e && (typeof e != "string" || !Element.prototype.matches.call(c, e)); )
          t ? Element.prototype.matches.call(c, t) && l.push(c) : l.push(c), c = c.parentNode;
      return l;
    }, insertAfter: function(e) {
      var t = e.parent()[0];
      t && t.insertBefore(this[0], e[0].nextElementSibling);
    }, filter: function(e) {
      var t = K();
      if (typeof e == "function")
        for (var l = 0; l < this.length; l++)
          e.call(this[l], this[l]) && t.push(this[l]);
      else if (typeof e == "string")
        for (var v = 0; v < this.length; v++)
          this[v].matches(e) && t.push(this[v]);
      return t;
    }, offset: function() {
      if (this.length !== 0) {
        var e = this[0].getBoundingClientRect(), t = this[0].ownerDocument.defaultView;
        return { top: e.top + t.pageYOffset, left: e.left + t.pageXOffset };
      }
    }, position: function() {
      return { left: this[0].offsetLeft, top: this[0].offsetTop };
    }, push: [].push, splice: [].splice }, W.extend = function(e) {
      e = e || {};
      for (var t = 1; t < arguments.length; t++)
        if (arguments[t])
          for (var l in arguments[t])
            Object.prototype.hasOwnProperty.call(arguments[t], l) && (e[l] = arguments[t][l]);
      return e;
    }, W.merge = function(e, t) {
      for (var l = +t.length, v = 0, c = e.length; v < l; v++)
        e[c++] = t[v];
      return e.length = c, e;
    }, W.map = function(e, t, l) {
      var v, c, N = 0, L = [];
      if (Array.isArray(e))
        for (v = e.length; N < v; N++)
          (c = t(e[N], N, l)) != null && L.push(c);
      else
        for (N in e)
          (c = t(e[N], N, l)) != null && L.push(c);
      return [].concat.apply([], L);
    };
    var L1 = function(t, l) {
      if (!t)
        return this;
      if (typeof t == "string" && t[0] === "<") {
        var v = document.createElement("DIV");
        return v.innerHTML = t, K(v.firstElementChild);
      }
      if (l = l instanceof W ? l[0] : l, typeof t != "string")
        return t instanceof W ? t : (this[0] = t, this.length = 1, this);
      t = c1(t);
      for (var c = (l || document).querySelectorAll(t), N = 0; N < c.length; N++)
        this[N] = c[N];
      return this.length = c.length, this;
    };
    L1.prototype = W.prototype;
    var Q = a;
    function d1() {
      this.doc = this.$el.get(0).ownerDocument, this.win = "defaultView" in this.doc ? this.doc.defaultView : this.doc.parentWindow, this.$doc = W(this.doc), this.$win = W(this.win), this.opts.pluginsEnabled || (this.opts.pluginsEnabled = Object.keys(Q.PLUGINS)), this.opts.initOnClick ? (this.load(Q.MODULES), this.$el.on("touchstart.init", function() {
        W(this).data("touched", !0);
      }), this.$el.on("touchmove.init", function() {
        W(this).removeData("touched");
      }), this.$el.on("mousedown.init touchend.init dragenter.init focus.init", (function(t) {
        if (this.$el.attr("contentEditable") !== "false" || !this.opts.initOnClick) {
          if (t.type === "touchend" && !this.$el.data("touched"))
            return !0;
          if (t.which === 1 || !t.which) {
            this.$el.off("mousedown.init touchstart.init touchmove.init touchend.init dragenter.init focus.init"), this.load(Q.MODULES), this.load(Q.PLUGINS);
            var l = t.originalEvent && t.originalEvent.originalTarget;
            if (l && l.tagName === "IMG" && W(l).trigger("mousedown"), typeof this.ul > "u" && this.destroy(), t.type === "touchend" && this.image && t.originalEvent && t.originalEvent.target && W(t.originalEvent.target).is("img")) {
              var v = this;
              setTimeout(function() {
                v.image.edit(W(t.originalEvent.target));
              }, 100);
            }
            this.ready = !0, this.events.trigger("initialized");
          }
        }
      }).bind(this)), this.events.trigger("initializationDelayed")) : (this.load(Q.MODULES), this.load(Q.PLUGINS), W(this.o_win).scrollTop(this.c_scroll), typeof this.ul > "u" && this.destroy(), this.ready = !0, this.events.trigger("initialized"));
    }
    return Q.Bootstrap = function(e, t, l) {
      this.id = ++Q.ID, this.$ = W;
      var v = {};
      typeof t == "function" && (l = t, t = {}), l && (t.events || (t.events = {}), t.events.initialized = l), t && t.documentReady && (v.toolbarButtons = [["fullscreen", "undo", "redo", "getPDF", "print"], ["bold", "italic", "underline", "textColor", "backgroundColor", "clearFormatting"], ["alignLeft", "alignCenter", "alignRight", "alignJustify"], ["formatOL", "formatUL", "indent", "outdent"], ["paragraphFormat"], ["fontFamily"], ["fontSize"], ["insertLink", "insertImage", "quote"]], v.paragraphFormatSelection = !0, v.fontFamilySelection = !0, v.fontSizeSelection = !0, v.placeholderText = "", v.quickInsertEnabled = !1, v.charCounterCount = !1), this.opts = Object.assign({}, Object.assign({}, Q.DEFAULTS, v, o1(t) === "object" && t));
      var c = JSON.stringify(this.opts);
      Q.OPTS_MAPPING[c] = Q.OPTS_MAPPING[c] || this.id, this.sid = Q.OPTS_MAPPING[c], Q.SHARED[this.sid] = Q.SHARED[this.sid] || {}, this.shared = Q.SHARED[this.sid], this.shared.count = (this.shared.count || 0) + 1, this.$oel = W(e), this.$oel.data("froala.editor", this), this.o_doc = e.ownerDocument, this.o_win = "defaultView" in this.o_doc ? this.o_doc.defaultView : this.o_doc.parentWindow, this.c_scroll = W(this.o_win).scrollTop(), this._init();
    }, Q.Bootstrap.prototype._init = function() {
      var e = this.$oel.get(0).tagName;
      this.$oel.closest("label").length;
      var t = (function() {
        e !== "TEXTAREA" && (this._original_html = this._original_html || this.$oel.html()), this.$box = this.$box || this.$oel, this.opts.fullPage && (this.opts.iframe = !0), this.opts.iframe ? (this.$iframe = W('<iframe src="about:blank" frameBorder="0">'), this.$wp = W("<div></div>"), this.$box.html(this.$wp), this.$wp.append(this.$iframe), this.$iframe.get(0).contentWindow.document.open(), this.$iframe.get(0).contentWindow.document.write("<!DOCTYPE html>"), this.$iframe.get(0).contentWindow.document.write("<html><head></head><body></body></html>"), this.$iframe.get(0).contentWindow.document.close(), this.iframe_document = this.$iframe.get(0).contentWindow.document, this.$el = W(this.iframe_document.querySelector("body")), this.el = this.$el.get(0), this.$head = W(this.iframe_document.querySelector("head")), this.$html = W(this.iframe_document.querySelector("html"))) : (this.$el = W(this.o_doc.createElement("DIV")), this.el = this.$el.get(0), this.$wp = W(this.o_doc.createElement("DIV")).append(this.$el), this.$box.html(this.$wp)), setTimeout(d1.bind(this), 0);
      }).bind(this), l = (function() {
        this.$box = W("<div>"), this.$oel.before(this.$box).hide(), this._original_html = this.$oel.val();
        var L = this;
        this.$oel.parents("form").on("submit.".concat(this.id), function() {
          L.events.trigger("form.submit");
        }), this.$oel.parents("form").on("reset.".concat(this.id), function() {
          L.events.trigger("form.reset");
        }), t();
      }).bind(this), v = (function() {
        this.$el = this.$oel, this.el = this.$el.get(0), this.$el.attr("contenteditable", !0).css("outline", "none").css("display", "inline-block"), this.opts.multiLine = !1, this.opts.toolbarInline = !1, setTimeout(d1.bind(this), 0);
      }).bind(this), c = (function() {
        this.$el = this.$oel, this.el = this.$el.get(0), this.opts.toolbarInline = !1, setTimeout(d1.bind(this), 0);
      }).bind(this), N = (function() {
        this.$el = this.$oel, this.el = this.$el.get(0), this.opts.toolbarInline = !1, this.$oel.on("click.popup", function(L) {
          L.preventDefault();
        }), setTimeout(d1.bind(this), 0);
      }).bind(this);
      this.opts.editInPopup ? N() : e === "TEXTAREA" ? l() : e === "A" ? v() : e === "IMG" ? c() : e === "BUTTON" || e === "INPUT" ? (this.opts.editInPopup = !0, this.opts.toolbarInline = !1, N()) : t();
    }, Q.Bootstrap.prototype.load = function(e) {
      for (var t in e)
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          if (this[t] || Q.PLUGINS[t] && this.opts.pluginsEnabled.indexOf(t) < 0)
            continue;
          if (this[t] = new e[t](this), this[t]._init && (this[t]._init(), this.opts.initOnClick && t === "core"))
            return !1;
        }
    }, Q.Bootstrap.prototype.destroy = function() {
      this.destrying = !0, this.shared.count--, this.events && this.events.$off();
      var e = this.html && this.html.get();
      if (this.opts.iframe && (this.events.disableBlur(), this.win.focus(), this.events.enableBlur()), this.events && (this.events.trigger("destroy", [], !0), this.events.trigger("shared.destroy", [], !0)), this.shared.count === 0) {
        for (var t in this.shared)
          Object.prototype.hasOwnProperty.call(this.shared, t) && (this.shared[t] = null, Q.SHARED[this.sid][t] = null);
        delete Q.SHARED[this.sid];
      }
      this.$oel.parents("form").off(".".concat(this.id)), this.$oel.off("click.popup"), this.$oel.removeData("froala.editor"), this.$oel.off("froalaEditor"), this.core && this.core.destroy(e), Q.INSTANCES.splice(Q.INSTANCES.indexOf(this), 1);
    }, a;
  });
})(S1);
var O1 = S1.exports;
const k1 = /* @__PURE__ */ A1(O1);
export {
  k1 as default
};
