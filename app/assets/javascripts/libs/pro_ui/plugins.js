(function() {
  var e;
  var t = function() {};
  var n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"];
  var r = n.length;
  var i = window.console = window.console || {};
  while (r--) {
    e = n[r];
    if (!i[e]) {
      i[e] = t
    }
  }
})();
(function(e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
})(function(e) {
  function t(t, s) {
    var n, a, o, r = t.nodeName.toLowerCase();
    return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t)
  }

  function i(t) {
    return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
      return "hidden" === e.css(this, "visibility")
    }).length
  }
  e.ui = e.ui || {}, e.extend(e.ui, {
    version: "1.11.1",
    keyCode: {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
    }
  }), e.fn.extend({
    scrollParent: function(t) {
      var i = this.css("position"),
        s = "absolute" === i,
        n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        a = this.parents().filter(function() {
          var t = e(this);
          return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
        }).eq(0);
      return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
    },
    uniqueId: function() {
      var e = 0;
      return function() {
        return this.each(function() {
          this.id || (this.id = "ui-id-" + ++e)
        })
      }
    }(),
    removeUniqueId: function() {
      return this.each(function() {
        /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
      })
    }
  }), e.extend(e.expr[":"], {
    data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
      return function(i) {
        return !!e.data(i, t)
      }
    }) : function(t, i, s) {
      return !!e.data(t, s[3])
    },
    focusable: function(i) {
      return t(i, !isNaN(e.attr(i, "tabindex")))
    },
    tabbable: function(i) {
      var s = e.attr(i, "tabindex"),
        n = isNaN(s);
      return (n || s >= 0) && t(i, !n)
    }
  }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, i) {
    function s(t, i, s, a) {
      return e.each(n, function() {
        i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
      }), i
    }
    var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
      a = i.toLowerCase(),
      o = {
        innerWidth: e.fn.innerWidth,
        innerHeight: e.fn.innerHeight,
        outerWidth: e.fn.outerWidth,
        outerHeight: e.fn.outerHeight
      };
    e.fn["inner" + i] = function(t) {
      return void 0 === t ? o["inner" + i].call(this) : this.each(function() {
        e(this).css(a, s(this, t) + "px")
      })
    }, e.fn["outer" + i] = function(t, n) {
      return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function() {
        e(this).css(a, s(this, t, !0, n) + "px")
      })
    }
  }), e.fn.addBack || (e.fn.addBack = function(e) {
    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
  }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
    return function(i) {
      return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
    }
  }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
    focus: function(t) {
      return function(i, s) {
        return "number" == typeof i ? this.each(function() {
          var t = this;
          setTimeout(function() {
            e(t).focus(), s && s.call(t)
          }, i)
        }) : t.apply(this, arguments)
      }
    }(e.fn.focus),
    disableSelection: function() {
      var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
      return function() {
        return this.bind(e + ".ui-disableSelection", function(e) {
          e.preventDefault()
        })
      }
    }(),
    enableSelection: function() {
      return this.unbind(".ui-disableSelection")
    },
    zIndex: function(t) {
      if (void 0 !== t) return this.css("zIndex", t);
      if (this.length)
        for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
          if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
          n = n.parent()
        }
      return 0
    }
  }), e.ui.plugin = {
    add: function(t, i, s) {
      var n, a = e.ui[t].prototype;
      for (n in s) a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
    },
    call: function(e, t, i, s) {
      var n, a = e.plugins[t];
      if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
        for (n = 0; a.length > n; n++) e.options[a[n][0]] && a[n][1].apply(e.element, i)
    }
  };
  var s = 0,
    n = Array.prototype.slice;
  e.cleanData = function(t) {
    return function(i) {
      var s, n, a;
      for (a = 0; null != (n = i[a]); a++) try {
        s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove")
      } catch (o) {}
      t(i)
    }
  }(e.cleanData), e.widget = function(t, i, s) {
    var n, a, o, r, h = {},
      l = t.split(".")[0];
    return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function(t) {
      return !!e.data(t, n)
    }, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function(e, t) {
      return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t)
    }, e.extend(o, a, {
      version: s.version,
      _proto: e.extend({}, s),
      _childConstructors: []
    }), r = new i, r.options = e.widget.extend({}, r.options), e.each(s, function(t, s) {
      return e.isFunction(s) ? (h[t] = function() {
        var e = function() {
            return i.prototype[t].apply(this, arguments)
          },
          n = function(e) {
            return i.prototype[t].apply(this, e)
          };
        return function() {
          var t, i = this._super,
            a = this._superApply;
          return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t
        }
      }(), void 0) : (h[t] = s, void 0)
    }), o.prototype = e.widget.extend(r, {
      widgetEventPrefix: a ? r.widgetEventPrefix || t : t
    }, h, {
      constructor: o,
      namespace: l,
      widgetName: t,
      widgetFullName: n
    }), a ? (e.each(a._childConstructors, function(t, i) {
      var s = i.prototype;
      e.widget(s.namespace + "." + s.widgetName, o, i._proto)
    }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o
  }, e.widget.extend = function(t) {
    for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++)
      for (i in a[o]) s = a[o][i], a[o].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
    return t
  }, e.widget.bridge = function(t, i) {
    var s = i.prototype.widgetFullName || t;
    e.fn[t] = function(a) {
      var o = "string" == typeof a,
        r = n.call(arguments, 1),
        h = this;
      return a = !o && r.length ? e.widget.extend.apply(null, [a].concat(r)) : a, o ? this.each(function() {
        var i, n = e.data(this, s);
        return "instance" === a ? (h = n, !1) : n ? e.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, r), i !== n && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + a + "'")
      }) : this.each(function() {
        var t = e.data(this, s);
        t ? (t.option(a || {}), t._init && t._init()) : e.data(this, s, new i(a, this))
      }), h
    }
  }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      disabled: !1,
      create: null
    },
    _createWidget: function(t, i) {
      i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = s++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function(e) {
          e.target === i && this.destroy()
        }
      }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
    },
    _getCreateOptions: e.noop,
    _getCreateEventData: e.noop,
    _create: e.noop,
    _init: e.noop,
    destroy: function() {
      this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
    },
    _destroy: e.noop,
    widget: function() {
      return this.element
    },
    option: function(t, i) {
      var s, n, a, o = t;
      if (0 === arguments.length) return e.widget.extend({}, this.options);
      if ("string" == typeof t)
        if (o = {}, s = t.split("."), t = s.shift(), s.length) {
          for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) n[s[a]] = n[s[a]] || {}, n = n[s[a]];
          if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
          n[t] = i
        } else {
          if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
          o[t] = i
        }
      return this._setOptions(o), this
    },
    _setOptions: function(e) {
      var t;
      for (t in e) this._setOption(t, e[t]);
      return this
    },
    _setOption: function(e, t) {
      return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
    },
    enable: function() {
      return this._setOptions({
        disabled: !1
      })
    },
    disable: function() {
      return this._setOptions({
        disabled: !0
      })
    },
    _on: function(t, i, s) {
      var n, a = this;
      "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function(s, o) {
        function r() {
          return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
        }
        "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
        var h = s.match(/^([\w:-]*)\s*(.*)$/),
          l = h[1] + a.eventNamespace,
          u = h[2];
        u ? n.delegate(u, l, r) : i.bind(l, r)
      })
    },
    _off: function(e, t) {
      t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
    },
    _delay: function(e, t) {
      function i() {
        return ("string" == typeof e ? s[e] : e).apply(s, arguments)
      }
      var s = this;
      return setTimeout(i, t || 0)
    },
    _hoverable: function(t) {
      this.hoverable = this.hoverable.add(t), this._on(t, {
        mouseenter: function(t) {
          e(t.currentTarget).addClass("ui-state-hover")
        },
        mouseleave: function(t) {
          e(t.currentTarget).removeClass("ui-state-hover")
        }
      })
    },
    _focusable: function(t) {
      this.focusable = this.focusable.add(t), this._on(t, {
        focusin: function(t) {
          e(t.currentTarget).addClass("ui-state-focus")
        },
        focusout: function(t) {
          e(t.currentTarget).removeClass("ui-state-focus")
        }
      })
    },
    _trigger: function(t, i, s) {
      var n, a, o = this.options[t];
      if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
        for (n in a) n in i || (i[n] = a[n]);
      return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
    }
  }, e.each({
    show: "fadeIn",
    hide: "fadeOut"
  }, function(t, i) {
    e.Widget.prototype["_" + t] = function(s, n, a) {
      "string" == typeof n && (n = {
        effect: n
      });
      var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
      n = n || {}, "number" == typeof n && (n = {
        duration: n
      }), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function(i) {
        e(this)[t](), a && a.call(s[0]), i()
      })
    }
  }), e.widget;
  var a = !1;
  e(document).mouseup(function() {
    a = !1
  }), e.widget("ui.mouse", {
    version: "1.11.1",
    options: {
      cancel: "input,textarea,button,select,option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function() {
      var t = this;
      this.element.bind("mousedown." + this.widgetName, function(e) {
        return t._mouseDown(e)
      }).bind("click." + this.widgetName, function(i) {
        return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
      }), this.started = !1
    },
    _mouseDestroy: function() {
      this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
    },
    _mouseDown: function(t) {
      if (!a) {
        this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
        var i = this,
          s = 1 === t.which,
          n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
        return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
          i.mouseDelayMet = !0
        }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
          return i._mouseMove(e)
        }, this._mouseUpDelegate = function(e) {
          return i._mouseUp(e)
        }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), a = !0, !0)) : !0
      }
    },
    _mouseMove: function(t) {
      return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : t.which ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
    },
    _mouseUp: function(t) {
      return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), a = !1, !1
    },
    _mouseDistanceMet: function(e) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
    },
    _mouseDelayMet: function() {
      return this.mouseDelayMet
    },
    _mouseStart: function() {},
    _mouseDrag: function() {},
    _mouseStop: function() {},
    _mouseCapture: function() {
      return !0
    }
  }), e.widget("ui.draggable", e.ui.mouse, {
    version: "1.11.1",
    widgetEventPrefix: "drag",
    options: {
      addClasses: !0,
      appendTo: "parent",
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: "default",
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: "both",
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
      drag: null,
      start: null,
      stop: null
    },
    _create: function() {
      "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
    },
    _setOption: function(e, t) {
      this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName())
    },
    _destroy: function() {
      return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0)
    },
    _mouseCapture: function(t) {
      var i = this.document[0],
        s = this.options;
      try {
        i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && e(i.activeElement).blur()
      } catch (n) {}
      return this.helper || s.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(s.iframeFix === !0 ? "iframe" : s.iframeFix).each(function() {
        e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
          width: this.offsetWidth + "px",
          height: this.offsetHeight + "px",
          position: "absolute",
          opacity: "0.001",
          zIndex: 1e3
        }).css(e(this).offset()).appendTo("body")
      }), !0) : !1)
    },
    _mouseStart: function(t) {
      var i = this.options;
      return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left
      }, this.offset.scroll = !1, e.extend(this.offset, {
        click: {
          left: t.pageX - this.offset.left,
          top: t.pageY - this.offset.top
        },
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
    },
    _mouseDrag: function(t, i) {
      if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
        var s = this._uiHash();
        if (this._trigger("drag", t, s) === !1) return this._mouseUp({}), !1;
        this.position = s.position
      }
      return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
    },
    _mouseStop: function(t) {
      var i = this,
        s = !1;
      return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
        i._trigger("stop", t) !== !1 && i._clear()
      }) : this._trigger("stop", t) !== !1 && this._clear(), !1
    },
    _mouseUp: function(t) {
      return e("div.ui-draggable-iframeFix").each(function() {
        this.parentNode.removeChild(this)
      }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t)
    },
    cancel: function() {
      return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
    },
    _getHandle: function(t) {
      return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
    },
    _setHandleClassName: function() {
      this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
    },
    _removeHandleClassName: function() {
      this.handleElement.removeClass("ui-draggable-handle")
    },
    _createHelper: function(t) {
      var i = this.options,
        s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
      return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
    },
    _adjustOffsetFromHelper: function(t) {
      "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
        left: +t[0],
        top: +t[1] || 0
      }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
    },
    _isRootNode: function(e) {
      return /(html|body)/i.test(e.tagName) || e === this.document[0]
    },
    _getParentOffset: function() {
      var t = this.offsetParent.offset(),
        i = this.document[0];
      return "absolute" === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
        top: 0,
        left: 0
      }), {
        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      }
    },
    _getRelativeOffset: function() {
      if ("relative" !== this.cssPosition) return {
        top: 0,
        left: 0
      };
      var e = this.element.position(),
        t = this._isRootNode(this.scrollParent[0]);
      return {
        top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
        left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
      }
    },
    _cacheMargins: function() {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
        right: parseInt(this.element.css("marginRight"), 10) || 0,
        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
      }
    },
    _cacheHelperProportions: function() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      }
    },
    _setContainment: function() {
      var t, i, s, n = this.options,
        a = this.document[0];
      return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, e(a).width() - this.helperProportions.width - this.margins.left, (e(a).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = e(n.containment), s = i[0], s && (t = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0)
    },
    _convertPositionTo: function(e, t) {
      t || (t = this.position);
      var i = "absolute" === e ? 1 : -1,
        s = this._isRootNode(this.scrollParent[0]);
      return {
        top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
        left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
      }
    },
    _generatePosition: function(e, t) {
      var i, s, n, a, o = this.options,
        r = this._isRootNode(this.scrollParent[0]),
        h = e.pageX,
        l = e.pageY;
      return r && this.offset.scroll || (this.offset.scroll = {
        top: this.scrollParent.scrollTop(),
        left: this.scrollParent.scrollLeft()
      }), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, h = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a), "y" === o.axis && (h = this.originalPageX), "x" === o.axis && (l = this.originalPageY)), {
        top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
        left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
      }
    },
    _clear: function() {
      this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
    },
    _trigger: function(t, i, s) {
      return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s, this], !0), "drag" === t && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, i, s)
    },
    plugins: {},
    _uiHash: function() {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs
      }
    }
  }), e.ui.plugin.add("draggable", "connectToSortable", {
    start: function(t, i, s) {
      var n = s.options,
        a = e.extend({}, i, {
          item: s.element
        });
      s.sortables = [], e(n.connectToSortable).each(function() {
        var i = e(this).sortable("instance");
        i && !i.options.disabled && (s.sortables.push({
          instance: i,
          shouldRevert: i.options.revert
        }), i.refreshPositions(), i._trigger("activate", t, a))
      })
    },
    stop: function(t, i, s) {
      var n = e.extend({}, i, {
        item: s.element
      });
      e.each(s.sortables, function() {
        this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({
          top: "auto",
          left: "auto"
        })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, n))
      })
    },
    drag: function(t, i, s) {
      var n = this;
      e.each(s.sortables, function() {
        var a = !1,
          o = this;
        this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (a = !0, e.each(s.sortables, function() {
          return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.contains(o.instance.element[0], this.instance.element[0]) && (a = !1), a
        })), a ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
          return i.helper[0]
        }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", t), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", t), s.dropped = !1)
      })
    }
  }), e.ui.plugin.add("draggable", "cursor", {
    start: function(t, i, s) {
      var n = e("body"),
        a = s.options;
      n.css("cursor") && (a._cursor = n.css("cursor")), n.css("cursor", a.cursor)
    },
    stop: function(t, i, s) {
      var n = s.options;
      n._cursor && e("body").css("cursor", n._cursor)
    }
  }), e.ui.plugin.add("draggable", "opacity", {
    start: function(t, i, s) {
      var n = e(i.helper),
        a = s.options;
      n.css("opacity") && (a._opacity = n.css("opacity")), n.css("opacity", a.opacity)
    },
    stop: function(t, i, s) {
      var n = s.options;
      n._opacity && e(i.helper).css("opacity", n._opacity)
    }
  }), e.ui.plugin.add("draggable", "scroll", {
    start: function(e, t, i) {
      i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
    },
    drag: function(t, i, s) {
      var n = s.options,
        a = !1,
        o = s.scrollParentNotHidden[0],
        r = s.document[0];
      o !== r && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + o.offsetHeight - t.pageY < n.scrollSensitivity ? o.scrollTop = a = o.scrollTop + n.scrollSpeed : t.pageY - s.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = a = o.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + o.offsetWidth - t.pageX < n.scrollSensitivity ? o.scrollLeft = a = o.scrollLeft + n.scrollSpeed : t.pageX - s.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = a = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (t.pageY - e(r).scrollTop() < n.scrollSensitivity ? a = e(r).scrollTop(e(r).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(r).scrollTop()) < n.scrollSensitivity && (a = e(r).scrollTop(e(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (t.pageX - e(r).scrollLeft() < n.scrollSensitivity ? a = e(r).scrollLeft(e(r).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(r).scrollLeft()) < n.scrollSensitivity && (a = e(r).scrollLeft(e(r).scrollLeft() + n.scrollSpeed)))), a !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(s, t)
    }
  }), e.ui.plugin.add("draggable", "snap", {
    start: function(t, i, s) {
      var n = s.options;
      s.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
        var t = e(this),
          i = t.offset();
        this !== s.element[0] && s.snapElements.push({
          item: this,
          width: t.outerWidth(),
          height: t.outerHeight(),
          top: i.top,
          left: i.left
        })
      })
    },
    drag: function(t, i, s) {
      var n, a, o, r, h, l, u, d, c, p, f = s.options,
        m = f.snapTolerance,
        g = i.offset.left,
        v = g + s.helperProportions.width,
        y = i.offset.top,
        b = y + s.helperProportions.height;
      for (c = s.snapElements.length - 1; c >= 0; c--) h = s.snapElements[c].left, l = h + s.snapElements[c].width, u = s.snapElements[c].top, d = u + s.snapElements[c].height, h - m > v || g > l + m || u - m > b || y > d + m || !e.contains(s.snapElements[c].item.ownerDocument, s.snapElements[c].item) ? (s.snapElements[c].snapping && s.options.snap.release && s.options.snap.release.call(s.element, t, e.extend(s._uiHash(), {
        snapItem: s.snapElements[c].item
      })), s.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (n = m >= Math.abs(u - b), a = m >= Math.abs(d - y), o = m >= Math.abs(h - v), r = m >= Math.abs(l - g), n && (i.position.top = s._convertPositionTo("relative", {
        top: u - s.helperProportions.height,
        left: 0
      }).top - s.margins.top), a && (i.position.top = s._convertPositionTo("relative", {
        top: d,
        left: 0
      }).top - s.margins.top), o && (i.position.left = s._convertPositionTo("relative", {
        top: 0,
        left: h - s.helperProportions.width
      }).left - s.margins.left), r && (i.position.left = s._convertPositionTo("relative", {
        top: 0,
        left: l
      }).left - s.margins.left)), p = n || a || o || r, "outer" !== f.snapMode && (n = m >= Math.abs(u - y), a = m >= Math.abs(d - b), o = m >= Math.abs(h - g), r = m >= Math.abs(l - v), n && (i.position.top = s._convertPositionTo("relative", {
        top: u,
        left: 0
      }).top - s.margins.top), a && (i.position.top = s._convertPositionTo("relative", {
        top: d - s.helperProportions.height,
        left: 0
      }).top - s.margins.top), o && (i.position.left = s._convertPositionTo("relative", {
        top: 0,
        left: h
      }).left - s.margins.left), r && (i.position.left = s._convertPositionTo("relative", {
        top: 0,
        left: l - s.helperProportions.width
      }).left - s.margins.left)), !s.snapElements[c].snapping && (n || a || o || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, t, e.extend(s._uiHash(), {
        snapItem: s.snapElements[c].item
      })), s.snapElements[c].snapping = n || a || o || r || p)
    }
  }), e.ui.plugin.add("draggable", "stack", {
    start: function(t, i, s) {
      var n, a = s.options,
        o = e.makeArray(e(a.stack)).sort(function(t, i) {
          return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
        });
      o.length && (n = parseInt(e(o[0]).css("zIndex"), 10) || 0, e(o).each(function(t) {
        e(this).css("zIndex", n + t)
      }), this.css("zIndex", n + o.length))
    }
  }), e.ui.plugin.add("draggable", "zIndex", {
    start: function(t, i, s) {
      var n = e(i.helper),
        a = s.options;
      n.css("zIndex") && (a._zIndex = n.css("zIndex")), n.css("zIndex", a.zIndex)
    },
    stop: function(t, i, s) {
      var n = s.options;
      n._zIndex && e(i.helper).css("zIndex", n._zIndex)
    }
  }), e.ui.draggable, e.widget("ui.resizable", e.ui.mouse, {
    version: "1.11.1",
    widgetEventPrefix: "resize",
    options: {
      alsoResize: !1,
      animate: !1,
      animateDuration: "slow",
      animateEasing: "swing",
      aspectRatio: !1,
      autoHide: !1,
      containment: !1,
      ghost: !1,
      grid: !1,
      handles: "e,s,se",
      helper: !1,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 90,
      resize: null,
      start: null,
      stop: null
    },
    _num: function(e) {
      return parseInt(e, 10) || 0
    },
    _isNumber: function(e) {
      return !isNaN(parseInt(e, 10))
    },
    _hasScroll: function(t, i) {
      if ("hidden" === e(t).css("overflow")) return !1;
      var s = i && "left" === i ? "scrollLeft" : "scrollTop",
        n = !1;
      return t[s] > 0 ? !0 : (t[s] = 1, n = t[s] > 0, t[s] = 0, n)
    },
    _create: function() {
      var t, i, s, n, a, o = this,
        r = this.options;
      if (this.element.addClass("ui-resizable"), e.extend(this, {
          _aspectRatio: !!r.aspectRatio,
          aspectRatio: r.aspectRatio,
          originalElement: this.element,
          _proportionallyResizeElements: [],
          _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
        }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
          position: this.element.css("position"),
          width: this.element.outerWidth(),
          height: this.element.outerHeight(),
          top: this.element.css("top"),
          left: this.element.css("left")
        })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
          marginLeft: this.originalElement.css("marginLeft"),
          marginTop: this.originalElement.css("marginTop"),
          marginRight: this.originalElement.css("marginRight"),
          marginBottom: this.originalElement.css("marginBottom")
        }), this.originalElement.css({
          marginLeft: 0,
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0
        }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
          position: "static",
          zoom: 1,
          display: "block"
        })), this.originalElement.css({
          margin: this.originalElement.css("margin")
        }), this._proportionallyResize()), this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? {
          n: ".ui-resizable-n",
          e: ".ui-resizable-e",
          s: ".ui-resizable-s",
          w: ".ui-resizable-w",
          se: ".ui-resizable-se",
          sw: ".ui-resizable-sw",
          ne: ".ui-resizable-ne",
          nw: ".ui-resizable-nw"
        } : "e,s,se"), this.handles.constructor === String)
        for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++) s = e.trim(t[i]), a = "ui-resizable-" + s, n = e("<div class='ui-resizable-handle " + a + "'></div>"), n.css({
          zIndex: r.zIndex
        }), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
      this._renderAxis = function(t) {
        var i, s, n, a;
        t = t || this.element;
        for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = this.element.children(this.handles[i]).first().show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = e(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(n, a), this._proportionallyResize()), e(this.handles[i]).length
      }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
        o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
      }), r.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
        r.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show())
      }).mouseleave(function() {
        r.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide())
      })), this._mouseInit()
    },
    _destroy: function() {
      this._mouseDestroy();
      var t, i = function(t) {
        e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
      };
      return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
        position: t.css("position"),
        width: t.outerWidth(),
        height: t.outerHeight(),
        top: t.css("top"),
        left: t.css("left")
      }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
    },
    _mouseCapture: function(t) {
      var i, s, n = !1;
      for (i in this.handles) s = e(this.handles[i])[0], (s === t.target || e.contains(s, t.target)) && (n = !0);
      return !this.options.disabled && n
    },
    _mouseStart: function(t) {
      var i, s, n, a = this.options,
        o = this.element;
      return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), a.containment && (i += e(a.containment).scrollLeft() || 0, s += e(a.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
        left: i,
        top: s
      }, this.size = this._helper ? {
        width: this.helper.width(),
        height: this.helper.height()
      } : {
        width: o.width(),
        height: o.height()
      }, this.originalSize = this._helper ? {
        width: o.outerWidth(),
        height: o.outerHeight()
      } : {
        width: o.width(),
        height: o.height()
      }, this.sizeDiff = {
        width: o.outerWidth() - o.width(),
        height: o.outerHeight() - o.height()
      }, this.originalPosition = {
        left: i,
        top: s
      }, this.originalMousePosition = {
        left: t.pageX,
        top: t.pageY
      }, this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), o.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
    },
    _mouseDrag: function(t) {
      var i, s, n = this.originalMousePosition,
        a = this.axis,
        o = t.pageX - n.left || 0,
        r = t.pageY - n.top || 0,
        h = this._change[a];
      return this._updatePrevProperties(), h ? (i = h.apply(this, [t, o, r]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1
    },
    _mouseStop: function(t) {
      this.resizing = !1;
      var i, s, n, a, o, r, h, l = this.options,
        u = this;
      return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, a = s ? 0 : u.sizeDiff.width, o = {
        width: u.helper.width() - a,
        height: u.helper.height() - n
      }, r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(e.extend(o, {
        top: h,
        left: r
      })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
    },
    _updatePrevProperties: function() {
      this.prevPosition = {
        top: this.position.top,
        left: this.position.left
      }, this.prevSize = {
        width: this.size.width,
        height: this.size.height
      }
    },
    _applyChanges: function() {
      var e = {};
      return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e
    },
    _updateVirtualBoundaries: function(e) {
      var t, i, s, n, a, o = this.options;
      a = {
        minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
        maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0,
        minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
        maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0
      }, (this._aspectRatio || e) && (t = a.minHeight * this.aspectRatio, s = a.minWidth / this.aspectRatio, i = a.maxHeight * this.aspectRatio, n = a.maxWidth / this.aspectRatio, t > a.minWidth && (a.minWidth = t), s > a.minHeight && (a.minHeight = s), a.maxWidth > i && (a.maxWidth = i), a.maxHeight > n && (a.maxHeight = n)), this._vBoundaries = a
    },
    _updateCache: function(e) {
      this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width)
    },
    _updateRatio: function(e) {
      var t = this.position,
        i = this.size,
        s = this.axis;
      return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), "sw" === s && (e.left = t.left + (i.width - e.width), e.top = null), "nw" === s && (e.top = t.top + (i.height - e.height), e.left = t.left + (i.width - e.width)), e
    },
    _respectSize: function(e) {
      var t = this._vBoundaries,
        i = this.axis,
        s = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width,
        n = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height,
        a = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width,
        o = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height,
        r = this.originalPosition.left + this.originalSize.width,
        h = this.position.top + this.size.height,
        l = /sw|nw|w/.test(i),
        u = /nw|ne|n/.test(i);
      return a && (e.width = t.minWidth), o && (e.height = t.minHeight), s && (e.width = t.maxWidth), n && (e.height = t.maxHeight), a && l && (e.left = r - t.minWidth), s && l && (e.left = r - t.maxWidth), o && u && (e.top = h - t.minHeight), n && u && (e.top = h - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
    },
    _getPaddingPlusBorderDimensions: function(e) {
      for (var t = 0, i = [], s = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], n = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; 4 > t; t++) i[t] = parseInt(s[t], 10) || 0, i[t] += parseInt(n[t], 10) || 0;
      return {
        height: i[0] + i[2],
        width: i[1] + i[3]
      }
    },
    _proportionallyResize: function() {
      if (this._proportionallyResizeElements.length)
        for (var e, t = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > t; t++) e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({
          height: i.height() - this.outerDimensions.height || 0,
          width: i.width() - this.outerDimensions.width || 0
        })
    },
    _renderProxy: function() {
      var t = this.element,
        i = this.options;
      this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
        width: this.element.outerWidth() - 1,
        height: this.element.outerHeight() - 1,
        position: "absolute",
        left: this.elementOffset.left + "px",
        top: this.elementOffset.top + "px",
        zIndex: ++i.zIndex
      }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
    },
    _change: {
      e: function(e, t) {
        return {
          width: this.originalSize.width + t
        }
      },
      w: function(e, t) {
        var i = this.originalSize,
          s = this.originalPosition;
        return {
          left: s.left + t,
          width: i.width - t
        }
      },
      n: function(e, t, i) {
        var s = this.originalSize,
          n = this.originalPosition;
        return {
          top: n.top + i,
          height: s.height - i
        }
      },
      s: function(e, t, i) {
        return {
          height: this.originalSize.height + i
        }
      },
      se: function(t, i, s) {
        return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
      },
      sw: function(t, i, s) {
        return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
      },
      ne: function(t, i, s) {
        return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
      },
      nw: function(t, i, s) {
        return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
      }
    },
    _propagate: function(t, i) {
      e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui())
    },
    plugins: {},
    ui: function() {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition
      }
    }
  }), e.ui.plugin.add("resizable", "animate", {
    stop: function(t) {
      var i = e(this).resizable("instance"),
        s = i.options,
        n = i._proportionallyResizeElements,
        a = n.length && /textarea/i.test(n[0].nodeName),
        o = a && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
        r = a ? 0 : i.sizeDiff.width,
        h = {
          width: i.size.width - r,
          height: i.size.height - o
        },
        l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
        u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
      i.element.animate(e.extend(h, u && l ? {
        top: u,
        left: l
      } : {}), {
        duration: s.animateDuration,
        easing: s.animateEasing,
        step: function() {
          var s = {
            width: parseInt(i.element.css("width"), 10),
            height: parseInt(i.element.css("height"), 10),
            top: parseInt(i.element.css("top"), 10),
            left: parseInt(i.element.css("left"), 10)
          };
          n && n.length && e(n[0]).css({
            width: s.width,
            height: s.height
          }), i._updateCache(s), i._propagate("resize", t)
        }
      })
    }
  }), e.ui.plugin.add("resizable", "containment", {
    start: function() {
      var t, i, s, n, a, o, r, h = e(this).resizable("instance"),
        l = h.options,
        u = h.element,
        d = l.containment,
        c = d instanceof e ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
      c && (h.containerElement = e(c), /document/.test(d) || d === document ? (h.containerOffset = {
        left: 0,
        top: 0
      }, h.containerPosition = {
        left: 0,
        top: 0
      }, h.parentData = {
        element: e(document),
        left: 0,
        top: 0,
        width: e(document).width(),
        height: e(document).height() || document.body.parentNode.scrollHeight
      }) : (t = e(c), i = [], e(["Top", "Right", "Left", "Bottom"]).each(function(e, s) {
        i[e] = h._num(t.css("padding" + s))
      }), h.containerOffset = t.offset(), h.containerPosition = t.position(), h.containerSize = {
        height: t.innerHeight() - i[3],
        width: t.innerWidth() - i[1]
      }, s = h.containerOffset, n = h.containerSize.height, a = h.containerSize.width, o = h._hasScroll(c, "left") ? c.scrollWidth : a, r = h._hasScroll(c) ? c.scrollHeight : n, h.parentData = {
        element: c,
        left: s.left,
        top: s.top,
        width: o,
        height: r
      }))
    },
    resize: function(t) {
      var i, s, n, a, o = e(this).resizable("instance"),
        r = o.options,
        h = o.containerOffset,
        l = o.position,
        u = o._aspectRatio || t.shiftKey,
        d = {
          top: 0,
          left: 0
        },
        c = o.containerElement,
        p = !0;
      c[0] !== document && /static/.test(c.css("position")) && (d = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - d.left), u && (o.size.height = o.size.width / o.aspectRatio, p = !1), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), u && (o.size.width = o.size.height * o.aspectRatio, p = !1), o.position.top = o._helper ? h.top : 0), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), i = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - d.left : o.offset.left - h.left)), s = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - d.top : o.offset.top - h.top)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, u && (o.size.height = o.size.width / o.aspectRatio, p = !1)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, u && (o.size.width = o.size.height * o.aspectRatio, p = !1)), p || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height)
    },
    stop: function() {
      var t = e(this).resizable("instance"),
        i = t.options,
        s = t.containerOffset,
        n = t.containerPosition,
        a = t.containerElement,
        o = e(t.helper),
        r = o.offset(),
        h = o.outerWidth() - t.sizeDiff.width,
        l = o.outerHeight() - t.sizeDiff.height;
      t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({
        left: r.left - n.left - s.left,
        width: h,
        height: l
      }), t._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({
        left: r.left - n.left - s.left,
        width: h,
        height: l
      })
    }
  }), e.ui.plugin.add("resizable", "alsoResize", {
    start: function() {
      var t = e(this).resizable("instance"),
        i = t.options,
        s = function(t) {
          e(t).each(function() {
            var t = e(this);
            t.data("ui-resizable-alsoresize", {
              width: parseInt(t.width(), 10),
              height: parseInt(t.height(), 10),
              left: parseInt(t.css("left"), 10),
              top: parseInt(t.css("top"), 10)
            })
          })
        };
      "object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : e.each(i.alsoResize, function(e) {
        s(e)
      })
    },
    resize: function(t, i) {
      var s = e(this).resizable("instance"),
        n = s.options,
        a = s.originalSize,
        o = s.originalPosition,
        r = {
          height: s.size.height - a.height || 0,
          width: s.size.width - a.width || 0,
          top: s.position.top - o.top || 0,
          left: s.position.left - o.left || 0
        },
        h = function(t, s) {
          e(t).each(function() {
            var t = e(this),
              n = e(this).data("ui-resizable-alsoresize"),
              a = {},
              o = s && s.length ? s : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
            e.each(o, function(e, t) {
              var i = (n[t] || 0) + (r[t] || 0);
              i && i >= 0 && (a[t] = i || null)
            }), t.css(a)
          })
        };
      "object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : e.each(n.alsoResize, function(e, t) {
        h(e, t)
      })
    },
    stop: function() {
      e(this).removeData("resizable-alsoresize")
    }
  }), e.ui.plugin.add("resizable", "ghost", {
    start: function() {
      var t = e(this).resizable("instance"),
        i = t.options,
        s = t.size;
      t.ghost = t.originalElement.clone(), t.ghost.css({
        opacity: .25,
        display: "block",
        position: "relative",
        height: s.height,
        width: s.width,
        margin: 0,
        left: 0,
        top: 0
      }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper)
    },
    resize: function() {
      var t = e(this).resizable("instance");
      t.ghost && t.ghost.css({
        position: "relative",
        height: t.size.height,
        width: t.size.width
      })
    },
    stop: function() {
      var t = e(this).resizable("instance");
      t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
    }
  }), e.ui.plugin.add("resizable", "grid", {
    resize: function() {
      var t, i = e(this).resizable("instance"),
        s = i.options,
        n = i.size,
        a = i.originalSize,
        o = i.originalPosition,
        r = i.axis,
        h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
        l = h[0] || 1,
        u = h[1] || 1,
        d = Math.round((n.width - a.width) / l) * l,
        c = Math.round((n.height - a.height) / u) * u,
        p = a.width + d,
        f = a.height + c,
        m = s.maxWidth && p > s.maxWidth,
        g = s.maxHeight && f > s.maxHeight,
        v = s.minWidth && s.minWidth > p,
        y = s.minHeight && s.minHeight > f;
      s.grid = h, v && (p += l), y && (f += u), m && (p -= l), g && (f -= u), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = o.top - c) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = o.left - d) : ((0 >= f - u || 0 >= p - l) && (t = i._getPaddingPlusBorderDimensions(this)), f - u > 0 ? (i.size.height = f, i.position.top = o.top - c) : (f = u - t.height, i.size.height = f, i.position.top = o.top + a.height - f), p - l > 0 ? (i.size.width = p, i.position.left = o.left - d) : (p = u - t.height, i.size.width = p, i.position.left = o.left + a.width - p))
    }
  }), e.ui.resizable, e.widget("ui.sortable", e.ui.mouse, {
    version: "1.11.1",
    widgetEventPrefix: "sort",
    ready: !1,
    options: {
      appendTo: "parent",
      axis: !1,
      connectWith: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      dropOnEmpty: !0,
      forcePlaceholderSize: !1,
      forceHelperSize: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      items: "> *",
      opacity: !1,
      placeholder: !1,
      revert: !1,
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: "default",
      tolerance: "intersect",
      zIndex: 1e3,
      activate: null,
      beforeStop: null,
      change: null,
      deactivate: null,
      out: null,
      over: null,
      receive: null,
      remove: null,
      sort: null,
      start: null,
      stop: null,
      update: null
    },
    _isOverAxis: function(e, t, i) {
      return e >= t && t + i > e
    },
    _isFloating: function(e) {
      return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
    },
    _create: function() {
      var e = this.options;
      this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === e.axis || this._isFloating(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
    },
    _setOption: function(e, t) {
      this._super(e, t), "handle" === e && this._setHandleClassName()
    },
    _setHandleClassName: function() {
      this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), e.each(this.items, function() {
        (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
      })
    },
    _destroy: function() {
      this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
      for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
      return this
    },
    _mouseCapture: function(t, i) {
      var s = null,
        n = !1,
        a = this;
      return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function() {
        return e.data(this, a.widgetName + "-item") === a ? (s = e(this), !1) : void 0
      }), e.data(t.target, a.widgetName + "-item") === a && (s = e(t.target)), s ? !this.options.handle || i || (e(this.options.handle, s).find("*").addBack().each(function() {
        this === t.target && (n = !0)
      }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
    },
    _mouseStart: function(t, i, s) {
      var n, a, o = this.options;
      if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
          top: this.offset.top - this.margins.top,
          left: this.offset.left - this.margins.left
        }, e.extend(this.offset, {
          click: {
            left: t.pageX - this.offset.left,
            top: t.pageY - this.offset.top
          },
          parent: this._getParentOffset(),
          relative: this._getRelativeOffset()
        }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
          prev: this.currentItem.prev()[0],
          parent: this.currentItem.parent()[0]
        }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", o.cursor), this.storedStylesheet = e("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(a)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
        for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", t, this._uiHash(this));
      return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
    },
    _mouseDrag: function(t) {
      var i, s, n, a, o = this.options,
        r = !1;
      for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - e(document).scrollTop() < o.scrollSensitivity ? r = e(document).scrollTop(e(document).scrollTop() - o.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < o.scrollSensitivity && (r = e(document).scrollTop(e(document).scrollTop() + o.scrollSpeed)), t.pageX - e(document).scrollLeft() < o.scrollSensitivity ? r = e(document).scrollLeft(e(document).scrollLeft() - o.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < o.scrollSensitivity && (r = e(document).scrollLeft(e(document).scrollLeft() + o.scrollSpeed))), r !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
        if (s = this.items[i], n = s.item[0], a = this._intersectsWithPointer(s), a && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === a ? "next" : "prev"]()[0] !== n && !e.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !e.contains(this.element[0], n) : !0)) {
          if (this.direction = 1 === a ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
          this._rearrange(t, s), this._trigger("change", t, this._uiHash());
          break
        }
      return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
    },
    _mouseStop: function(t, i) {
      if (t) {
        if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
          var s = this,
            n = this.placeholder.offset(),
            a = this.options.axis,
            o = {};
          a && "x" !== a || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), a && "y" !== a || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function() {
            s._clear(t)
          })
        } else this._clear(t, i);
        return !1
      }
    },
    cancel: function() {
      if (this.dragging) {
        this._mouseUp({
          target: null
        }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
        for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
      }
      return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
        helper: null,
        dragging: !1,
        reverting: !1,
        _noFinalSort: null
      }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
    },
    serialize: function(t) {
      var i = this._getItemsAsjQuery(t && t.connected),
        s = [];
      return t = t || {}, e(i).each(function() {
        var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
        i && s.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]))
      }), !s.length && t.key && s.push(t.key + "="), s.join("&")
    },
    toArray: function(t) {
      var i = this._getItemsAsjQuery(t && t.connected),
        s = [];
      return t = t || {}, i.each(function() {
        s.push(e(t.item || this).attr(t.attribute || "id") || "")
      }), s
    },
    _intersectsWith: function(e) {
      var t = this.positionAbs.left,
        i = t + this.helperProportions.width,
        s = this.positionAbs.top,
        n = s + this.helperProportions.height,
        a = e.left,
        o = a + e.width,
        r = e.top,
        h = r + e.height,
        l = this.offset.click.top,
        u = this.offset.click.left,
        d = "x" === this.options.axis || s + l > r && h > s + l,
        c = "y" === this.options.axis || t + u > a && o > t + u,
        p = d && c;
      return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : t + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
    },
    _intersectsWithPointer: function(e) {
      var t = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
        i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
        s = t && i,
        n = this._getDragVerticalDirection(),
        a = this._getDragHorizontalDirection();
      return s ? this.floating ? a && "right" === a || "down" === n ? 2 : 1 : n && ("down" === n ? 2 : 1) : !1
    },
    _intersectsWithSides: function(e) {
      var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
        i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
        s = this._getDragVerticalDirection(),
        n = this._getDragHorizontalDirection();
      return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && t || "up" === s && !t)
    },
    _getDragVerticalDirection: function() {
      var e = this.positionAbs.top - this.lastPositionAbs.top;
      return 0 !== e && (e > 0 ? "down" : "up")
    },
    _getDragHorizontalDirection: function() {
      var e = this.positionAbs.left - this.lastPositionAbs.left;
      return 0 !== e && (e > 0 ? "right" : "left")
    },
    refresh: function(e) {
      return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this
    },
    _connectWith: function() {
      var e = this.options;
      return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
    },
    _getItemsAsjQuery: function(t) {
      function i() {
        r.push(this)
      }
      var s, n, a, o, r = [],
        h = [],
        l = this._connectWith();
      if (l && t)
        for (s = l.length - 1; s >= 0; s--)
          for (a = e(l[s]), n = a.length - 1; n >= 0; n--) o = e.data(a[n], this.widgetFullName), o && o !== this && !o.options.disabled && h.push([e.isFunction(o.options.items) ? o.options.items.call(o.element) : e(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
      for (h.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
          options: this.options,
          item: this.currentItem
        }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) h[s][0].each(i);
      return e(r)
    },
    _removeCurrentsFromItems: function() {
      var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
      this.items = e.grep(this.items, function(e) {
        for (var i = 0; t.length > i; i++)
          if (t[i] === e.item[0]) return !1;
        return !0
      })
    },
    _refreshItems: function(t) {
      this.items = [], this.containers = [this];
      var i, s, n, a, o, r, h, l, u = this.items,
        d = [
          [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
            item: this.currentItem
          }) : e(this.options.items, this.element), this]
        ],
        c = this._connectWith();
      if (c && this.ready)
        for (i = c.length - 1; i >= 0; i--)
          for (n = e(c[i]), s = n.length - 1; s >= 0; s--) a = e.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && (d.push([e.isFunction(a.options.items) ? a.options.items.call(a.element[0], t, {
            item: this.currentItem
          }) : e(a.options.items, a.element), a]), this.containers.push(a));
      for (i = d.length - 1; i >= 0; i--)
        for (o = d[i][1], r = d[i][0], s = 0, l = r.length; l > s; s++) h = e(r[s]), h.data(this.widgetName + "-item", o), u.push({
          item: h,
          instance: o,
          width: 0,
          height: 0,
          left: 0,
          top: 0
        })
    },
    refreshPositions: function(t) {
      this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
      var i, s, n, a;
      for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? e(this.options.toleranceElement, s.item) : s.item, t || (s.width = n.outerWidth(), s.height = n.outerHeight()), a = n.offset(), s.left = a.left, s.top = a.top);
      if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
      else
        for (i = this.containers.length - 1; i >= 0; i--) a = this.containers[i].element.offset(), this.containers[i].containerCache.left = a.left, this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
      return this
    },
    _createPlaceholder: function(t) {
      t = t || this;
      var i, s = t.options;
      s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
        element: function() {
          var s = t.currentItem[0].nodeName.toLowerCase(),
            n = e("<" + s + ">", t.document[0]).addClass(i || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
          return "tr" === s ? t.currentItem.children().each(function() {
            e("<td>&#160;</td>", t.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(n)
          }) : "img" === s && n.attr("src", t.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
        },
        update: function(e, n) {
          (!i || s.forcePlaceholderSize) && (n.height() || n.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
        }
      }), t.placeholder = e(s.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), s.placeholder.update(t, t.placeholder)
    },
    _contactContainers: function(t) {
      var i, s, n, a, o, r, h, l, u, d, c = null,
        p = null;
      for (i = this.containers.length - 1; i >= 0; i--)
        if (!e.contains(this.currentItem[0], this.containers[i].element[0]))
          if (this._intersectsWith(this.containers[i].containerCache)) {
            if (c && e.contains(this.containers[i].element[0], c.element[0])) continue;
            c = this.containers[i], p = i
          } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0);
      if (c)
        if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1);
        else {
          for (n = 1e4, a = null, u = c.floating || this._isFloating(this.currentItem), o = u ? "left" : "top", r = u ? "width" : "height", d = u ? "clientX" : "clientY", s = this.items.length - 1; s >= 0; s--) e.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[o], l = !1, t[d] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(t[d] - h) && (n = Math.abs(t[d] - h), a = this.items[s], this.direction = l ? "up" : "down"));
          if (!a && !this.options.dropOnEmpty) return;
          if (this.currentContainer === this.containers[p]) return;
          a ? this._rearrange(t, a, null, !0) : this._rearrange(t, null, this.containers[p].element, !0), this._trigger("change", t, this._uiHash()), this.containers[p]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1
        }
    },
    _createHelper: function(t) {
      var i = this.options,
        s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
      return s.parents("body").length || e("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
        width: this.currentItem[0].style.width,
        height: this.currentItem[0].style.height,
        position: this.currentItem.css("position"),
        top: this.currentItem.css("top"),
        left: this.currentItem.css("left")
      }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
    },
    _adjustOffsetFromHelper: function(t) {
      "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
        left: +t[0],
        top: +t[1] || 0
      }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
    },
    _getParentOffset: function() {
      this.offsetParent = this.helper.offsetParent();
      var t = this.offsetParent.offset();
      return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
        top: 0,
        left: 0
      }), {
        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      }
    },
    _getRelativeOffset: function() {
      if ("relative" === this.cssPosition) {
        var e = this.currentItem.position();
        return {
          top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
          left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
        }
      }
      return {
        top: 0,
        left: 0
      }
    },
    _cacheMargins: function() {
      this.margins = {
        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
      }
    },
    _cacheHelperProportions: function() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      }
    },
    _setContainment: function() {
      var t, i, s, n = this.options;
      "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (e("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (t = e(n.containment)[0], i = e(n.containment).offset(), s = "hidden" !== e(t).css("overflow"), this.containment = [i.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
    },
    _convertPositionTo: function(t, i) {
      i || (i = this.position);
      var s = "absolute" === t ? 1 : -1,
        n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
        a = /(html|body)/i.test(n[0].tagName);
      return {
        top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s,
        left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s
      }
    },
    _generatePosition: function(t) {
      var i, s, n = this.options,
        a = t.pageX,
        o = t.pageY,
        r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
        h = /(html|body)/i.test(r[0].tagName);
      return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0], a = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
        top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
        left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
      }
    },
    _rearrange: function(e, t, i, s) {
      i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
      var n = this.counter;
      this._delay(function() {
        n === this.counter && this.refreshPositions(!s)
      })
    },
    _clear: function(e, t) {
      function i(e, t, i) {
        return function(s) {
          i._trigger(e, s, t._uiHash(t))
        }
      }
      this.reverting = !1;
      var s, n = [];
      if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
        for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
        this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
      } else this.currentItem.show();
      for (this.fromOutside && !t && n.push(function(e) {
          this._trigger("receive", e, this._uiHash(this.fromOutside))
        }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || n.push(function(e) {
          this._trigger("update", e, this._uiHash())
        }), this !== this.currentContainer && (t || (n.push(function(e) {
          this._trigger("remove", e, this._uiHash())
        }), n.push(function(e) {
          return function(t) {
            e._trigger("receive", t, this._uiHash(this))
          }
        }.call(this, this.currentContainer)), n.push(function(e) {
          return function(t) {
            e._trigger("update", t, this._uiHash(this))
          }
        }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) t || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
      if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
        if (!t) {
          for (this._trigger("beforeStop", e, this._uiHash()), s = 0; n.length > s; s++) n[s].call(this, e);
          this._trigger("stop", e, this._uiHash())
        }
        return this.fromOutside = !1, !1
      }
      if (t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !t) {
        for (s = 0; n.length > s; s++) n[s].call(this, e);
        this._trigger("stop", e, this._uiHash())
      }
      return this.fromOutside = !1, !0
    },
    _trigger: function() {
      e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
    },
    _uiHash: function(t) {
      var i = t || this;
      return {
        helper: i.helper,
        placeholder: i.placeholder || e([]),
        position: i.position,
        originalPosition: i.originalPosition,
        offset: i.positionAbs,
        item: i.currentItem,
        sender: t ? t.element : null
      }
    }
  })
});
! function(e, t, n) {
  function i(e) {
    var t = {},
      i = /^jQuery\d+$/;
    return n.each(e.attributes, function(e, n) {
      n.specified && !i.test(n.name) && (t[n.name] = n.value)
    }), t
  }

  function r(e, t) {
    var i = this,
      r = n(i);
    if (i.value == r.attr("placeholder") && r.hasClass("placeholder"))
      if (r.data("placeholder-password")) {
        if (r = r.hide().next().show().attr("id", r.removeAttr("id").data("placeholder-id")), e === !0) return r[0].value = t;
        r.focus()
      } else i.value = "", r.removeClass("placeholder"), i == o() && i.select()
  }

  function a() {
    var e, t = this,
      a = n(t),
      o = this.id;
    if ("" == t.value) {
      if ("password" == t.type) {
        if (!a.data("placeholder-textinput")) {
          try {
            e = a.clone().attr({
              type: "text"
            })
          } catch (s) {
            e = n("<input>").attr(n.extend(i(this), {
              type: "text"
            }))
          }
          e.removeAttr("name").data({
            "placeholder-password": a,
            "placeholder-id": o
          }).bind("focus.placeholder", r), a.data({
            "placeholder-textinput": e,
            "placeholder-id": o
          }).before(e)
        }
        a = a.removeAttr("id").hide().prev().attr("id", o).show()
      }
      a.addClass("placeholder"), a[0].value = a.attr("placeholder")
    } else a.removeClass("placeholder")
  }

  function o() {
    try {
      return t.activeElement
    } catch (e) {}
  }
  var s, l, c = "placeholder" in t.createElement("input"),
    u = "placeholder" in t.createElement("textarea"),
    d = n.fn,
    h = n.valHooks,
    f = n.propHooks;
  c && u ? (l = d.placeholder = function() {
    return this
  }, l.input = l.textarea = !0) : (l = d.placeholder = function() {
    var e = this;
    return e.filter((c ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
      "focus.placeholder": r,
      "blur.placeholder": a
    }).data("placeholder-enabled", !0).trigger("blur.placeholder"), e
  }, l.input = c, l.textarea = u, s = {
    get: function(e) {
      var t = n(e),
        i = t.data("placeholder-password");
      return i ? i[0].value : t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
    },
    set: function(e, t) {
      var i = n(e),
        s = i.data("placeholder-password");
      return s ? s[0].value = t : i.data("placeholder-enabled") ? ("" == t ? (e.value = t, e != o() && a.call(e)) : i.hasClass("placeholder") ? r.call(e, !0, t) || (e.value = t) : e.value = t, i) : e.value = t
    }
  }, c || (h.input = s, f.value = s), u || (h.textarea = s, f.value = s), n(function() {
    n(t).delegate("form", "submit.placeholder", function() {
      var e = n(".placeholder", this).each(r);
      setTimeout(function() {
        e.each(a)
      }, 10)
    })
  }), n(e).bind("beforeunload.placeholder", function() {
    n(".placeholder").each(function() {
      this.value = ""
    })
  }))
}(this, document, jQuery);
! function() {
  function t() {}

  function e(t, e) {
    this.path = t, "undefined" != typeof e && null !== e ? (this.at_2x_path = e, this.perform_check = !1) : (this.at_2x_path = t.replace(/\.\w+$/, function(t) {
      return "@2x" + t
    }), this.perform_check = !0)
  }

  function i(t) {
    this.el = t, this.path = new e(this.el.getAttribute("src"), this.el.getAttribute("data-at2x"));
    var i = this;
    this.path.check_2x_variant(function(t) {
      t && i.swap()
    })
  }
  var n = "undefined" == typeof exports ? window : exports,
    a = {
      check_mime_type: !0
    };
  n.Retina = t, t.configure = function(t) {
    null == t && (t = {});
    for (var e in t) a[e] = t[e]
  }, t.init = function(t) {
    null == t && (t = n);
    var e = t.onload || new Function;
    t.onload = function() {
      var t, n, a = document.getElementsByTagName("img"),
        h = [];
      for (t = 0; t < a.length; t++) n = a[t], h.push(new i(n));
      e()
    }
  }, t.isRetina = function() {
    var t = "(-webkit-min-device-pixel-ratio: 1.5),            (min--moz-device-pixel-ratio: 1.5),            (-o-min-device-pixel-ratio: 3/2),            (min-resolution: 1.5dppx)";
    return n.devicePixelRatio > 1 ? !0 : n.matchMedia && n.matchMedia(t).matches ? !0 : !1
  }, n.RetinaImagePath = e, e.confirmed_paths = [], e.prototype.is_external = function() {
    return !(!this.path.match(/^https?\:/i) || this.path.match("//" + document.domain))
  }, e.prototype.check_2x_variant = function(t) {
    var i, n = this;
    return this.is_external() ? t(!1) : this.perform_check || "undefined" == typeof this.at_2x_path || null === this.at_2x_path ? this.at_2x_path in e.confirmed_paths ? t(!0) : (i = new XMLHttpRequest, i.open("HEAD", this.at_2x_path), i.onreadystatechange = function() {
      if (4 != i.readyState) return t(!1);
      if (i.status >= 200 && i.status <= 399) {
        if (a.check_mime_type) {
          var h = i.getResponseHeader("Content-Type");
          if (null == h || !h.match(/^image/i)) return t(!1)
        }
        return e.confirmed_paths.push(n.at_2x_path), t(!0)
      }
      return t(!1)
    }, i.send(), void 0) : t(!0)
  }, n.RetinaImage = i, i.prototype.swap = function(t) {
    function e() {
      i.el.complete ? $(i.el).is(":visible") && (i.el.setAttribute("width", i.el.offsetWidth), i.el.setAttribute("height", i.el.offsetHeight), i.el.setAttribute("src", t)) : setTimeout(e, 5)
    }
    "undefined" == typeof t && (t = this.path.at_2x_path);
    var i = this;
    e()
  }, t.isRetina() && t.init(n)
}();
(function(a) {
  var b = "Close",
    c = "BeforeClose",
    d = "AfterClose",
    e = "BeforeAppend",
    f = "MarkupParse",
    g = "Open",
    h = "Change",
    i = "mfp",
    j = "." + i,
    k = "mfp-ready",
    l = "mfp-removing",
    m = "mfp-prevent-close",
    n, o = function() {},
    p = !!window.jQuery,
    q, r = a(window),
    s, t, u, v, w, x = function(a, b) {
      n.ev.on(i + a + j, b)
    },
    y = function(b, c, d, e) {
      var f = document.createElement("div");
      return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
    },
    z = function(b, c) {
      n.ev.triggerHandler(i + b, c), n.st.callbacks && (b = b.charAt(0).toLowerCase() + b.slice(1), n.st.callbacks[b] && n.st.callbacks[b].apply(n, a.isArray(c) ? c : [c]))
    },
    A = function(b) {
      if (b !== w || !n.currTemplate.closeBtn) n.currTemplate.closeBtn = a(n.st.closeMarkup.replace("%title%", n.st.tClose)), w = b;
      return n.currTemplate.closeBtn
    },
    B = function() {
      a.magnificPopup.instance || (n = new o, n.init(), a.magnificPopup.instance = n)
    },
    C = function() {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (a.transition !== undefined) return !0;
      while (b.length)
        if (b.pop() + "Transition" in a) return !0;
      return !1
    };
  o.prototype = {
    constructor: o,
    init: function() {
      var b = navigator.appVersion;
      n.isIE7 = b.indexOf("MSIE 7.") !== -1, n.isIE8 = b.indexOf("MSIE 8.") !== -1, n.isLowIE = n.isIE7 || n.isIE8, n.isAndroid = /android/gi.test(b), n.isIOS = /iphone|ipad|ipod/gi.test(b), n.supportsTransition = C(), n.probablyMobile = n.isAndroid || n.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), t = a(document), n.popupsCache = {}
    },
    open: function(b) {
      s || (s = a(document.body));
      var c;
      if (b.isObj === !1) {
        n.items = b.items.toArray(), n.index = 0;
        var d = b.items,
          e;
        for (c = 0; c < d.length; c++) {
          e = d[c], e.parsed && (e = e.el[0]);
          if (e === b.el[0]) {
            n.index = c;
            break
          }
        }
      } else n.items = a.isArray(b.items) ? b.items : [b.items], n.index = b.index || 0;
      if (n.isOpen) {
        n.updateItemHTML();
        return
      }
      n.types = [], v = "", b.mainEl && b.mainEl.length ? n.ev = b.mainEl.eq(0) : n.ev = t, b.key ? (n.popupsCache[b.key] || (n.popupsCache[b.key] = {}), n.currTemplate = n.popupsCache[b.key]) : n.currTemplate = {}, n.st = a.extend(!0, {}, a.magnificPopup.defaults, b), n.fixedContentPos = n.st.fixedContentPos === "auto" ? !n.probablyMobile : n.st.fixedContentPos, n.st.modal && (n.st.closeOnContentClick = !1, n.st.closeOnBgClick = !1, n.st.showCloseBtn = !1, n.st.enableEscapeKey = !1), n.bgOverlay || (n.bgOverlay = y("bg").on("click" + j, function() {
        n.close()
      }), n.wrap = y("wrap").attr("tabindex", -1).on("click" + j, function(a) {
        n._checkIfClose(a.target) && n.close()
      }), n.container = y("container", n.wrap)), n.contentContainer = y("content"), n.st.preloader && (n.preloader = y("preloader", n.container, n.st.tLoading));
      var h = a.magnificPopup.modules;
      for (c = 0; c < h.length; c++) {
        var i = h[c];
        i = i.charAt(0).toUpperCase() + i.slice(1), n["init" + i].call(n)
      }
      z("BeforeOpen"), n.st.showCloseBtn && (n.st.closeBtnInside ? (x(f, function(a, b, c, d) {
        c.close_replaceWith = A(d.type)
      }), v += " mfp-close-btn-in") : n.wrap.append(A())), n.st.alignTop && (v += " mfp-align-top"), n.fixedContentPos ? n.wrap.css({
        overflow: n.st.overflowY,
        overflowX: "hidden",
        overflowY: n.st.overflowY
      }) : n.wrap.css({
        top: r.scrollTop(),
        position: "absolute"
      }), (n.st.fixedBgPos === !1 || n.st.fixedBgPos === "auto" && !n.fixedContentPos) && n.bgOverlay.css({
        height: t.height(),
        position: "absolute"
      }), n.st.enableEscapeKey && t.on("keyup" + j, function(a) {
        a.keyCode === 27 && n.close()
      }), r.on("resize" + j, function() {
        n.updateSize()
      }), n.st.closeOnContentClick || (v += " mfp-auto-cursor"), v && n.wrap.addClass(v);
      var l = n.wH = r.height(),
        m = {};
      if (n.fixedContentPos && n._hasScrollBar(l)) {
        var o = n._getScrollbarSize();
        o && (m.marginRight = o)
      }
      n.fixedContentPos && (n.isIE7 ? a("body, html").css("overflow", "hidden") : m.overflow = "hidden");
      var p = n.st.mainClass;
      return n.isIE7 && (p += " mfp-ie7"), p && n._addClassToMFP(p), n.updateItemHTML(), z("BuildControls"), a("html").css(m), n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo || s), n._lastFocusedEl = document.activeElement, setTimeout(function() {
        n.content ? (n._addClassToMFP(k), n._setFocus()) : n.bgOverlay.addClass(k), t.on("focusin" + j, n._onFocusIn)
      }, 16), n.isOpen = !0, n.updateSize(l), z(g), b
    },
    close: function() {
      if (!n.isOpen) return;
      z(c), n.isOpen = !1, n.st.removalDelay && !n.isLowIE && n.supportsTransition ? (n._addClassToMFP(l), setTimeout(function() {
        n._close()
      }, n.st.removalDelay)) : n._close()
    },
    _close: function() {
      z(b);
      var c = l + " " + k + " ";
      n.bgOverlay.detach(), n.wrap.detach(), n.container.empty(), n.st.mainClass && (c += n.st.mainClass + " "), n._removeClassFromMFP(c);
      if (n.fixedContentPos) {
        var e = {
          marginRight: ""
        };
        n.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
      }
      t.off("keyup" + j + " focusin" + j), n.ev.off(j), n.wrap.attr("class", "mfp-wrap").removeAttr("style"), n.bgOverlay.attr("class", "mfp-bg"), n.container.attr("class", "mfp-container"), n.st.showCloseBtn && (!n.st.closeBtnInside || n.currTemplate[n.currItem.type] === !0) && n.currTemplate.closeBtn && n.currTemplate.closeBtn.detach(), n._lastFocusedEl && a(n._lastFocusedEl).focus(), n.currItem = null, n.content = null, n.currTemplate = null, n.prevHeight = 0, z(d)
    },
    updateSize: function(a) {
      if (n.isIOS) {
        var b = document.documentElement.clientWidth / window.innerWidth,
          c = window.innerHeight * b;
        n.wrap.css("height", c), n.wH = c
      } else n.wH = a || r.height();
      n.fixedContentPos || n.wrap.css("height", n.wH), z("Resize")
    },
    updateItemHTML: function() {
      var b = n.items[n.index];
      n.contentContainer.detach(), n.content && n.content.detach(), b.parsed || (b = n.parseEl(n.index));
      var c = b.type;
      z("BeforeChange", [n.currItem ? n.currItem.type : "", c]), n.currItem = b;
      if (!n.currTemplate[c]) {
        var d = n.st[c] ? n.st[c].markup : !1;
        z("FirstMarkupParse", d), d ? n.currTemplate[c] = a(d) : n.currTemplate[c] = !0
      }
      u && u !== b.type && n.container.removeClass("mfp-" + u + "-holder");
      var e = n["get" + c.charAt(0).toUpperCase() + c.slice(1)](b, n.currTemplate[c]);
      n.appendContent(e, c), b.preloaded = !0, z(h, b), u = b.type, n.container.prepend(n.contentContainer), z("AfterChange")
    },
    appendContent: function(a, b) {
      n.content = a, a ? n.st.showCloseBtn && n.st.closeBtnInside && n.currTemplate[b] === !0 ? n.content.find(".mfp-close").length || n.content.append(A()) : n.content = a : n.content = "", z(e), n.container.addClass("mfp-" + b + "-holder"), n.contentContainer.append(n.content)
    },
    parseEl: function(b) {
      var c = n.items[b],
        d;
      c.tagName ? c = {
        el: a(c)
      } : (d = c.type, c = {
        data: c,
        src: c.src
      });
      if (c.el) {
        var e = n.types;
        for (var f = 0; f < e.length; f++)
          if (c.el.hasClass("mfp-" + e[f])) {
            d = e[f];
            break
          }
        c.src = c.el.attr("data-mfp-src"), c.src || (c.src = c.el.attr("href"))
      }
      return c.type = d || n.st.type || "inline", c.index = b, c.parsed = !0, n.items[b] = c, z("ElementParse", c), n.items[b]
    },
    addGroup: function(a, b) {
      var c = function(c) {
        c.mfpEl = this, n._openClick(c, a, b)
      };
      b || (b = {});
      var d = "click.magnificPopup";
      b.mainEl = a, b.items ? (b.isObj = !0, a.off(d).on(d, c)) : (b.isObj = !1, b.delegate ? a.off(d).on(d, b.delegate, c) : (b.items = a, a.off(d).on(d, c)))
    },
    _openClick: function(b, c, d) {
      var e = d.midClick !== undefined ? d.midClick : a.magnificPopup.defaults.midClick;
      if (!e && (b.which === 2 || b.ctrlKey || b.metaKey)) return;
      var f = d.disableOn !== undefined ? d.disableOn : a.magnificPopup.defaults.disableOn;
      if (f)
        if (a.isFunction(f)) {
          if (!f.call(n)) return !0
        } else if (r.width() < f) return !0;
      b.type && (b.preventDefault(), n.isOpen && b.stopPropagation()), d.el = a(b.mfpEl), d.delegate && (d.items = c.find(d.delegate)), n.open(d)
    },
    updateStatus: function(a, b) {
      if (n.preloader) {
        q !== a && n.container.removeClass("mfp-s-" + q), !b && a === "loading" && (b = n.st.tLoading);
        var c = {
          status: a,
          text: b
        };
        z("UpdateStatus", c), a = c.status, b = c.text, n.preloader.html(b), n.preloader.find("a").on("click", function(a) {
          a.stopImmediatePropagation()
        }), n.container.addClass("mfp-s-" + a), q = a
      }
    },
    _checkIfClose: function(b) {
      if (a(b).hasClass(m)) return;
      var c = n.st.closeOnContentClick,
        d = n.st.closeOnBgClick;
      if (c && d) return !0;
      if (!n.content || a(b).hasClass("mfp-close") || n.preloader && b === n.preloader[0]) return !0;
      if (b !== n.content[0] && !a.contains(n.content[0], b)) {
        if (d && a.contains(document, b)) return !0
      } else if (c) return !0;
      return !1
    },
    _addClassToMFP: function(a) {
      n.bgOverlay.addClass(a), n.wrap.addClass(a)
    },
    _removeClassFromMFP: function(a) {
      this.bgOverlay.removeClass(a), n.wrap.removeClass(a)
    },
    _hasScrollBar: function(a) {
      return (n.isIE7 ? t.height() : document.body.scrollHeight) > (a || r.height())
    },
    _setFocus: function() {
      (n.st.focus ? n.content.find(n.st.focus).eq(0) : n.wrap).focus()
    },
    _onFocusIn: function(b) {
      if (b.target !== n.wrap[0] && !a.contains(n.wrap[0], b.target)) return n._setFocus(), !1
    },
    _parseMarkup: function(b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)), z(f, [b, c, d]), a.each(c, function(a, c) {
        if (c === undefined || c === !1) return !0;
        e = a.split("_");
        if (e.length > 1) {
          var d = b.find(j + "-" + e[0]);
          if (d.length > 0) {
            var f = e[1];
            f === "replaceWith" ? d[0] !== c[0] && d.replaceWith(c) : f === "img" ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
          }
        } else b.find(j + "-" + a).html(c)
      })
    },
    _getScrollbarSize: function() {
      if (n.scrollbarSize === undefined) {
        var a = document.createElement("div");
        a.id = "mfp-sbm", a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), n.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
      }
      return n.scrollbarSize
    }
  }, a.magnificPopup = {
    instance: null,
    proto: o.prototype,
    modules: [],
    open: function(b, c) {
      return B(), b ? b = a.extend(!0, {}, b) : b = {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
    },
    close: function() {
      return a.magnificPopup.instance && a.magnificPopup.instance.close()
    },
    registerModule: function(b, c) {
      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading..."
    }
  }, a.fn.magnificPopup = function(b) {
    B();
    var c = a(this);
    if (typeof b == "string")
      if (b === "open") {
        var d, e = p ? c.data("magnificPopup") : c[0].magnificPopup,
          f = parseInt(arguments[1], 10) || 0;
        e.items ? d = e.items[f] : (d = c, e.delegate && (d = d.find(e.delegate)), d = d.eq(f)), n._openClick({
          mfpEl: d
        }, c, e)
      } else n.isOpen && n[b].apply(n, Array.prototype.slice.call(arguments, 1));
    else b = a.extend(!0, {}, b), p ? c.data("magnificPopup", b) : c[0].magnificPopup = b, n.addGroup(c, b);
    return c
  };
  var D = "inline",
    E, F, G, H = function() {
      G && (F.after(G.addClass(E)).detach(), G = null)
    };
  a.magnificPopup.registerModule(D, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function() {
        n.types.push(D), x(b + "." + D, function() {
          H()
        })
      },
      getInline: function(b, c) {
        H();
        if (b.src) {
          var d = n.st.inline,
            e = a(b.src);
          if (e.length) {
            var f = e[0].parentNode;
            f && f.tagName && (F || (E = d.hiddenClass, F = y(E), E = "mfp-" + E), G = e.after(F).detach().removeClass(E)), n.updateStatus("ready")
          } else n.updateStatus("error", d.tNotFound), e = a("<div>");
          return b.inlineElement = e, e
        }
        return n.updateStatus("ready"), n._parseMarkup(c, {}, b), c
      }
    }
  });
  var I = "ajax",
    J, K = function() {
      J && s.removeClass(J)
    },
    L = function() {
      K(), n.req && n.req.abort()
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function() {
        n.types.push(I), J = n.st.ajax.cursor, x(b + "." + I, L), x("BeforeChange." + I, L)
      },
      getAjax: function(b) {
        J && s.addClass(J), n.updateStatus("loading");
        var c = a.extend({
          url: b.src,
          success: function(c, d, e) {
            var f = {
              data: c,
              xhr: e
            };
            z("ParseAjax", f), n.appendContent(a(f.data), I), b.finished = !0, K(), n._setFocus(), setTimeout(function() {
              n.wrap.addClass(k)
            }, 16), n.updateStatus("ready"), z("AjaxContentAdded")
          },
          error: function() {
            K(), b.finished = b.loadError = !0, n.updateStatus("error", n.st.ajax.tError.replace("%url%", b.src))
          }
        }, n.st.ajax.settings);
        return n.req = a.ajax(c), ""
      }
    }
  });
  var M, N = function(b) {
    if (b.data && b.data.title !== undefined) return b.data.title;
    var c = n.st.image.titleSrc;
    if (c) {
      if (a.isFunction(c)) return c.call(n, b);
      if (b.el) return b.el.attr(c) || ""
    }
    return ""
  };
  a.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function() {
        var a = n.st.image,
          c = ".image";
        n.types.push("image"), x(g + c, function() {
          n.currItem.type === "image" && a.cursor && s.addClass(a.cursor)
        }), x(b + c, function() {
          a.cursor && s.removeClass(a.cursor), r.off("resize" + j)
        }), x("Resize" + c, n.resizeImage), n.isLowIE && x("AfterChange", n.resizeImage)
      },
      resizeImage: function() {
        var a = n.currItem;
        if (!a || !a.img) return;
        if (n.st.image.verticalFit) {
          var b = 0;
          n.isLowIE && (b = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", n.wH - b)
        }
      },
      _onImageHasSize: function(a) {
        a.img && (a.hasSize = !0, M && clearInterval(M), a.isCheckingImgSize = !1, z("ImageHasSize", a), a.imgHidden && (n.content && n.content.removeClass("mfp-loading"), a.imgHidden = !1))
      },
      findImageSize: function(a) {
        var b = 0,
          c = a.img[0],
          d = function(e) {
            M && clearInterval(M), M = setInterval(function() {
              if (c.naturalWidth > 0) {
                n._onImageHasSize(a);
                return
              }
              b > 200 && clearInterval(M), b++, b === 3 ? d(10) : b === 40 ? d(50) : b === 100 && d(500)
            }, e)
          };
        d(1)
      },
      getImage: function(b, c) {
        var d = 0,
          e = function() {
            b && (b.img[0].complete ? (b.img.off(".mfploader"), b === n.currItem && (n._onImageHasSize(b), n.updateStatus("ready")), b.hasSize = !0, b.loaded = !0, z("ImageLoadComplete")) : (d++, d < 200 ? setTimeout(e, 100) : f()))
          },
          f = function() {
            b && (b.img.off(".mfploader"), b === n.currItem && (n._onImageHasSize(b), n.updateStatus("error", g.tError.replace("%url%", b.src))), b.hasSize = !0, b.loaded = !0, b.loadError = !0)
          },
          g = n.st.image,
          h = c.find(".mfp-img");
        if (h.length) {
          var i = document.createElement("img");
          i.className = "mfp-img", b.img = a(i).on("load.mfploader", e).on("error.mfploader", f), i.src = b.src, h.is("img") && (b.img = b.img.clone()), i = b.img[0], i.naturalWidth > 0 ? b.hasSize = !0 : i.width || (b.hasSize = !1)
        }
        return n._parseMarkup(c, {
          title: N(b),
          img_replaceWith: b.img
        }, b), n.resizeImage(), b.hasSize ? (M && clearInterval(M), b.loadError ? (c.addClass("mfp-loading"), n.updateStatus("error", g.tError.replace("%url%", b.src))) : (c.removeClass("mfp-loading"), n.updateStatus("ready")), c) : (n.updateStatus("loading"), b.loading = !0, b.hasSize || (b.imgHidden = !0, c.addClass("mfp-loading"), n.findImageSize(b)), c)
      }
    }
  });
  var O, P = function() {
    return O === undefined && (O = document.createElement("p").style.MozTransform !== undefined), O
  };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function(a) {
        return a.is("img") ? a : a.find("img")
      }
    },
    proto: {
      initZoom: function() {
        var a = n.st.zoom,
          d = ".zoom",
          e;
        if (!a.enabled || !n.supportsTransition) return;
        var f = a.duration,
          g = function(b) {
            var c = b.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
              d = "all " + a.duration / 1e3 + "s " + a.easing,
              e = {
                position: "fixed",
                zIndex: 9999,
                left: 0,
                top: 0,
                "-webkit-backface-visibility": "hidden"
              },
              f = "transition";
            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, c.css(e), c
          },
          h = function() {
            n.content.css("visibility", "visible")
          },
          i, j;
        x("BuildControls" + d, function() {
          if (n._allowZoom()) {
            clearTimeout(i), n.content.css("visibility", "hidden"), e = n._getItemToZoom();
            if (!e) {
              h();
              return
            }
            j = g(e), j.css(n._getOffset()), n.wrap.append(j), i = setTimeout(function() {
              j.css(n._getOffset(!0)), i = setTimeout(function() {
                h(), setTimeout(function() {
                  j.remove(), e = j = null, z("ZoomAnimationEnded")
                }, 16)
              }, f)
            }, 16)
          }
        }), x(c + d, function() {
          if (n._allowZoom()) {
            clearTimeout(i), n.st.removalDelay = f;
            if (!e) {
              e = n._getItemToZoom();
              if (!e) return;
              j = g(e)
            }
            j.css(n._getOffset(!0)), n.wrap.append(j), n.content.css("visibility", "hidden"), setTimeout(function() {
              j.css(n._getOffset())
            }, 16)
          }
        }), x(b + d, function() {
          n._allowZoom() && (h(), j && j.remove(), e = null)
        })
      },
      _allowZoom: function() {
        return n.currItem.type === "image"
      },
      _getItemToZoom: function() {
        return n.currItem.hasSize ? n.currItem.img : !1
      },
      _getOffset: function(b) {
        var c;
        b ? c = n.currItem.img : c = n.st.zoom.opener(n.currItem.el || n.currItem);
        var d = c.offset(),
          e = parseInt(c.css("padding-top"), 10),
          f = parseInt(c.css("padding-bottom"), 10);
        d.top -= a(window).scrollTop() - e;
        var g = {
          width: c.width(),
          height: (p ? c.innerHeight() : c[0].offsetHeight) - f - e
        };
        return P() ? g["-moz-transform"] = g.transform = "translate(" + d.left + "px," + d.top + "px)" : (g.left = d.left, g.top = d.top), g
      }
    }
  });
  var Q = "iframe",
    R = "//about:blank",
    S = function(a) {
      if (n.currTemplate[Q]) {
        var b = n.currTemplate[Q].find("iframe");
        b.length && (a || (b[0].src = R), n.isIE8 && b.css("display", a ? "block" : "none"))
      }
    };
  a.magnificPopup.registerModule(Q, {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed"
        }
      }
    },
    proto: {
      initIframe: function() {
        n.types.push(Q), x("BeforeChange", function(a, b, c) {
          b !== c && (b === Q ? S() : c === Q && S(!0))
        }), x(b + "." + Q, function() {
          S()
        })
      },
      getIframe: function(b, c) {
        var d = b.src,
          e = n.st.iframe;
        a.each(e.patterns, function() {
          if (d.indexOf(this.index) > -1) return this.id && (typeof this.id == "string" ? d = d.substr(d.lastIndexOf(this.id) + this.id.length, d.length) : d = this.id.call(this, d)), d = this.src.replace("%id%", d), !1
        });
        var f = {};
        return e.srcAction && (f[e.srcAction] = d), n._parseMarkup(c, f, b), n.updateStatus("ready"), c
      }
    }
  });
  var T = function(a) {
      var b = n.items.length;
      return a > b - 1 ? a - b : a < 0 ? b + a : a
    },
    U = function(a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    },
    proto: {
      initGallery: function() {
        var c = n.st.gallery,
          d = ".mfp-gallery",
          e = Boolean(a.fn.mfpFastClick);
        n.direction = !0;
        if (!c || !c.enabled) return !1;
        v += " mfp-gallery", x(g + d, function() {
          c.navigateByImgClick && n.wrap.on("click" + d, ".mfp-img", function() {
            if (n.items.length > 1) return n.next(), !1
          }), t.on("keydown" + d, function(a) {
            a.keyCode === 37 ? n.prev() : a.keyCode === 39 && n.next()
          })
        }), x("UpdateStatus" + d, function(a, b) {
          b.text && (b.text = U(b.text, n.currItem.index, n.items.length))
        }), x(f + d, function(a, b, d, e) {
          var f = n.items.length;
          d.counter = f > 1 ? U(c.tCounter, e.index, f) : ""
        }), x("BuildControls" + d, function() {
          if (n.items.length > 1 && c.arrows && !n.arrowLeft) {
            var b = c.arrowMarkup,
              d = n.arrowLeft = a(b.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(m),
              f = n.arrowRight = a(b.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(m),
              g = e ? "mfpFastClick" : "click";
            d[g](function() {
              n.prev()
            }), f[g](function() {
              n.next()
            }), n.isIE7 && (y("b", d[0], !1, !0), y("a", d[0], !1, !0), y("b", f[0], !1, !0), y("a", f[0], !1, !0)), n.container.append(d.add(f))
          }
        }), x(h + d, function() {
          n._preloadTimeout && clearTimeout(n._preloadTimeout), n._preloadTimeout = setTimeout(function() {
            n.preloadNearbyImages(), n._preloadTimeout = null
          }, 16)
        }), x(b + d, function() {
          t.off(d), n.wrap.off("click" + d), n.arrowLeft && e && n.arrowLeft.add(n.arrowRight).destroyMfpFastClick(), n.arrowRight = n.arrowLeft = null
        })
      },
      next: function() {
        n.direction = !0, n.index = T(n.index + 1), n.updateItemHTML()
      },
      prev: function() {
        n.direction = !1, n.index = T(n.index - 1), n.updateItemHTML()
      },
      goTo: function(a) {
        n.direction = a >= n.index, n.index = a, n.updateItemHTML()
      },
      preloadNearbyImages: function() {
        var a = n.st.gallery.preload,
          b = Math.min(a[0], n.items.length),
          c = Math.min(a[1], n.items.length),
          d;
        for (d = 1; d <= (n.direction ? c : b); d++) n._preloadItem(n.index + d);
        for (d = 1; d <= (n.direction ? b : c); d++) n._preloadItem(n.index - d)
      },
      _preloadItem: function(b) {
        b = T(b);
        if (n.items[b].preloaded) return;
        var c = n.items[b];
        c.parsed || (c = n.parseEl(b)), z("LazyLoad", c), c.type === "image" && (c.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
          c.hasSize = !0
        }).on("error.mfploader", function() {
          c.hasSize = !0, c.loadError = !0, z("LazyLoadError", c)
        }).attr("src", c.src)), c.preloaded = !0
      }
    }
  });
  var V = "retina";
  a.magnificPopup.registerModule(V, {
      options: {
        replaceSrc: function(a) {
          return a.src.replace(/\.\w+$/, function(a) {
            return "@2x" + a
          })
        },
        ratio: 1
      },
      proto: {
        initRetina: function() {
          if (window.devicePixelRatio > 1) {
            var a = n.st.retina,
              b = a.ratio;
            b = isNaN(b) ? b() : b, b > 1 && (x("ImageHasSize." + V, function(a, c) {
              c.img.css({
                "max-width": c.img[0].naturalWidth / b,
                width: "100%"
              })
            }), x("ElementParse." + V, function(c, d) {
              d.src = a.replaceSrc(d, b)
            }))
          }
        }
      }
    }),
    function() {
      var b = 1e3,
        c = "ontouchstart" in window,
        d = function() {
          r.off("touchmove" + f + " touchend" + f)
        },
        e = "mfpFastClick",
        f = "." + e;
      a.fn.mfpFastClick = function(e) {
        return a(this).each(function() {
          var g = a(this),
            h;
          if (c) {
            var i, j, k, l, m, n;
            g.on("touchstart" + f, function(a) {
              l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, r.on("touchmove" + f, function(a) {
                m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0];
                if (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) l = !0, d()
              }).on("touchend" + f, function(a) {
                d();
                if (l || n > 1) return;
                h = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function() {
                  h = !1
                }, b), e()
              })
            })
          }
          g.on("click" + f, function() {
            h || e()
          })
        })
      }, a.fn.destroyMfpFastClick = function() {
        a(this).off("touchstart" + f + " click" + f), c && r.off("touchmove" + f + " touchend" + f)
      }
    }(), B()
})(window.jQuery || window.Zepto);
(function(t) {
  t.extend(t.fn, {
    validate: function(e) {
      if (!this.length) return e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."), void 0;
      var i = t.data(this[0], "validator");
      return i ? i : (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
        i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0)
      }), this.submit(function(e) {
        function s() {
          var s;
          return i.settings.submitHandler ? (i.submitButton && (s = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && s.remove(), !1) : !0
        }
        return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : s() : (i.focusInvalid(), !1)
      })), i)
    },
    valid: function() {
      if (t(this[0]).is("form")) return this.validate().form();
      var e = !0,
        i = t(this[0].form).validate();
      return this.each(function() {
        e = e && i.element(this)
      }), e
    },
    removeAttrs: function(e) {
      var i = {},
        s = this;
      return t.each(e.split(/\s/), function(t, e) {
        i[e] = s.attr(e), s.removeAttr(e)
      }), i
    },
    rules: function(e, i) {
      var s = this[0];
      if (e) {
        var r = t.data(s.form, "validator").settings,
          n = r.rules,
          a = t.validator.staticRules(s);
        switch (e) {
          case "add":
            t.extend(a, t.validator.normalizeRule(i)), delete a.messages, n[s.name] = a, i.messages && (r.messages[s.name] = t.extend(r.messages[s.name], i.messages));
            break;
          case "remove":
            if (!i) return delete n[s.name], a;
            var u = {};
            return t.each(i.split(/\s/), function(t, e) {
              u[e] = a[e], delete a[e]
            }), u
        }
      }
      var o = t.validator.normalizeRules(t.extend({}, t.validator.classRules(s), t.validator.attributeRules(s), t.validator.dataRules(s), t.validator.staticRules(s)), s);
      if (o.required) {
        var l = o.required;
        delete o.required, o = t.extend({
          required: l
        }, o)
      }
      return o
    }
  }), t.extend(t.expr[":"], {
    blank: function(e) {
      return !t.trim("" + t(e).val())
    },
    filled: function(e) {
      return !!t.trim("" + t(e).val())
    },
    unchecked: function(e) {
      return !t(e).prop("checked")
    }
  }), t.validator = function(e, i) {
    this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
  }, t.validator.format = function(e, i) {
    return 1 === arguments.length ? function() {
      var i = t.makeArray(arguments);
      return i.unshift(e), t.validator.format.apply(this, i)
    } : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function(t, i) {
      e = e.replace(RegExp("\\{" + t + "\\}", "g"), function() {
        return i
      })
    }), e)
  }, t.extend(t.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      validClass: "valid",
      errorElement: "label",
      focusInvalid: !0,
      errorContainer: t([]),
      errorLabelContainer: t([]),
      onsubmit: !0,
      ignore: ":hidden",
      ignoreTitle: !1,
      onfocusin: function(t) {
        this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
      },
      onfocusout: function(t) {
        this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
      },
      onkeyup: function(t, e) {
        (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
      },
      onclick: function(t) {
        t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
      },
      highlight: function(e, i, s) {
        "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s)
      },
      unhighlight: function(e, i, s) {
        "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s)
      }
    },
    setDefaults: function(e) {
      t.extend(t.validator.defaults, e)
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date (ISO).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      creditcard: "Please enter a valid credit card number.",
      equalTo: "Please enter the same value again.",
      maxlength: t.validator.format("Please enter no more than {0} characters."),
      minlength: t.validator.format("Please enter at least {0} characters."),
      rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
      range: t.validator.format("Please enter a value between {0} and {1}."),
      max: t.validator.format("Please enter a value less than or equal to {0}."),
      min: t.validator.format("Please enter a value greater than or equal to {0}.")
    },
    autoCreateRanges: !1,
    prototype: {
      init: function() {
        function e(e) {
          var i = t.data(this[0].form, "validator"),
            s = "on" + e.type.replace(/^validate/, "");
          i.settings[s] && i.settings[s].call(i, this[0], e)
        }
        this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
        var i = this.groups = {};
        t.each(this.settings.groups, function(e, s) {
          "string" == typeof s && (s = s.split(/\s/)), t.each(s, function(t, s) {
            i[s] = e
          })
        });
        var s = this.settings.rules;
        t.each(s, function(e, i) {
          s[e] = t.validator.normalizeRule(i)
        }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
      },
      form: function() {
        return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
      },
      checkForm: function() {
        this.prepareForm();
        for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
        return this.valid()
      },
      element: function(e) {
        e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);
        var i = this.check(e) !== !1;
        return i ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
      },
      showErrors: function(e) {
        if (e) {
          t.extend(this.errorMap, e), this.errorList = [];
          for (var i in e) this.errorList.push({
            message: e[i],
            element: this.findByName(i)[0]
          });
          this.successList = t.grep(this.successList, function(t) {
            return !(t.name in e)
          })
        }
        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
      },
      resetForm: function() {
        t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
      },
      numberOfInvalids: function() {
        return this.objectLength(this.invalid)
      },
      objectLength: function(t) {
        var e = 0;
        for (var i in t) e++;
        return e
      },
      hideErrors: function() {
        this.addWrapper(this.toHide).hide()
      },
      valid: function() {
        return 0 === this.size()
      },
      size: function() {
        return this.errorList.length
      },
      focusInvalid: function() {
        if (this.settings.focusInvalid) try {
          t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
        } catch (e) {}
      },
      findLastActive: function() {
        var e = this.lastActive;
        return e && 1 === t.grep(this.errorList, function(t) {
          return t.element.name === e.name
        }).length && e
      },
      elements: function() {
        var e = this,
          i = {};
        return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
          return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !e.objectLength(t(this).rules()) ? !1 : (i[this.name] = !0, !0)
        })
      },
      clean: function(e) {
        return t(e)[0]
      },
      errors: function() {
        var e = this.settings.errorClass.replace(" ", ".");
        return t(this.settings.errorElement + "." + e, this.errorContext)
      },
      reset: function() {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
      },
      prepareForm: function() {
        this.reset(), this.toHide = this.errors().add(this.containers)
      },
      prepareElement: function(t) {
        this.reset(), this.toHide = this.errorsFor(t)
      },
      elementValue: function(e) {
        var i = t(e).attr("type"),
          s = t(e).val();
        return "radio" === i || "checkbox" === i ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof s ? s.replace(/\r/g, "") : s
      },
      check: function(e) {
        e = this.validationTargetFor(this.clean(e));
        var i, s = t(e).rules(),
          r = !1,
          n = this.elementValue(e);
        for (var a in s) {
          var u = {
            method: a,
            parameters: s[a]
          };
          try {
            if (i = t.validator.methods[a].call(this, n, e, u.parameters), "dependency-mismatch" === i) {
              r = !0;
              continue
            }
            if (r = !1, "pending" === i) return this.toHide = this.toHide.not(this.errorsFor(e)), void 0;
            if (!i) return this.formatAndAdd(e, u), !1
          } catch (o) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + u.method + "' method.", o), o
          }
        }
        return r ? void 0 : (this.objectLength(s) && this.successList.push(e), !0)
      },
      customDataMessage: function(e, i) {
        return t(e).data("msg-" + i.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + i.toLowerCase())
      },
      customMessage: function(t, e) {
        var i = this.settings.messages[t];
        return i && (i.constructor === String ? i : i[e])
      },
      findDefined: function() {
        for (var t = 0; arguments.length > t; t++)
          if (void 0 !== arguments[t]) return arguments[t];
        return void 0
      },
      defaultMessage: function(e, i) {
        return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
      },
      formatAndAdd: function(e, i) {
        var s = this.defaultMessage(e, i.method),
          r = /\$?\{(\d+)\}/g;
        "function" == typeof s ? s = s.call(this, i.parameters, e) : r.test(s) && (s = t.validator.format(s.replace(r, "{$1}"), i.parameters)), this.errorList.push({
          message: s,
          element: e
        }), this.errorMap[e.name] = s, this.submitted[e.name] = s
      },
      addWrapper: function(t) {
        return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
      },
      defaultShowErrors: function() {
        var t, e;
        for (t = 0; this.errorList[t]; t++) {
          var i = this.errorList[t];
          this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message)
        }
        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
          for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
        if (this.settings.unhighlight)
          for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
      },
      validElements: function() {
        return this.currentElements.not(this.invalidElements())
      },
      invalidElements: function() {
        return t(this.errorList).map(function() {
          return this.element
        })
      },
      showLabel: function(e, i) {
        var s = this.errorsFor(e);
        s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(i)) : (s = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (s = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(s).length || (this.settings.errorPlacement ? this.settings.errorPlacement(s, t(e)) : s.insertAfter(e))), !i && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)), this.toShow = this.toShow.add(s)
      },
      errorsFor: function(e) {
        var i = this.idOrName(e);
        return this.errors().filter(function() {
          return t(this).attr("for") === i
        })
      },
      idOrName: function(t) {
        return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
      },
      validationTargetFor: function(t) {
        return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
      },
      checkable: function(t) {
        return /radio|checkbox/i.test(t.type)
      },
      findByName: function(e) {
        return t(this.currentForm).find("[name='" + e + "']")
      },
      getLength: function(e, i) {
        switch (i.nodeName.toLowerCase()) {
          case "select":
            return t("option:selected", i).length;
          case "input":
            if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
        }
        return e.length
      },
      depend: function(t, e) {
        return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
      },
      dependTypes: {
        "boolean": function(t) {
          return t
        },
        string: function(e, i) {
          return !!t(e, i.form).length
        },
        "function": function(t, e) {
          return t(e)
        }
      },
      optional: function(e) {
        var i = this.elementValue(e);
        return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
      },
      startRequest: function(t) {
        this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
      },
      stopRequest: function(e, i) {
        this.pendingRequest--, 0 > this.pendingRequest && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
      },
      previousValue: function(e) {
        return t.data(e, "previousValue") || t.data(e, "previousValue", {
          old: null,
          valid: !0,
          message: this.defaultMessage(e, "remote")
        })
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
    addClassRules: function(e, i) {
      e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
    },
    classRules: function(e) {
      var i = {},
        s = t(e).attr("class");
      return s && t.each(s.split(" "), function() {
        this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
      }), i
    },
    attributeRules: function(e) {
      var i = {},
        s = t(e),
        r = s[0].getAttribute("type");
      for (var n in t.validator.methods) {
        var a;
        "required" === n ? (a = s.get(0).getAttribute(n), "" === a && (a = !0), a = !!a) : a = s.attr(n), /min|max/.test(n) && (null === r || /number|range|text/.test(r)) && (a = Number(a)), a ? i[n] = a : r === n && "range" !== r && (i[n] = !0)
      }
      return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
    },
    dataRules: function(e) {
      var i, s, r = {},
        n = t(e);
      for (i in t.validator.methods) s = n.data("rule-" + i.toLowerCase()), void 0 !== s && (r[i] = s);
      return r
    },
    staticRules: function(e) {
      var i = {},
        s = t.data(e.form, "validator");
      return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}), i
    },
    normalizeRules: function(e, i) {
      return t.each(e, function(s, r) {
        if (r === !1) return delete e[s], void 0;
        if (r.param || r.depends) {
          var n = !0;
          switch (typeof r.depends) {
            case "string":
              n = !!t(r.depends, i.form).length;
              break;
            case "function":
              n = r.depends.call(i, i)
          }
          n ? e[s] = void 0 !== r.param ? r.param : !0 : delete e[s]
        }
      }), t.each(e, function(s, r) {
        e[s] = t.isFunction(r) ? r(i) : r
      }), t.each(["minlength", "maxlength"], function() {
        e[this] && (e[this] = Number(e[this]))
      }), t.each(["rangelength", "range"], function() {
        var i;
        e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
      }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
    },
    normalizeRule: function(e) {
      if ("string" == typeof e) {
        var i = {};
        t.each(e.split(/\s/), function() {
          i[this] = !0
        }), e = i
      }
      return e
    },
    addMethod: function(e, i, s) {
      t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e], 3 > i.length && t.validator.addClassRules(e, t.validator.normalizeRule(e))
    },
    methods: {
      required: function(e, i, s) {
        if (!this.depend(s, i)) return "dependency-mismatch";
        if ("select" === i.nodeName.toLowerCase()) {
          var r = t(i).val();
          return r && r.length > 0
        }
        return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0
      },
      email: function(t, e) {
        return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
      },
      url: function(t, e) {
        return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
      },
      date: function(t, e) {
        return this.optional(e) || !/Invalid|NaN/.test("" + new Date(t))
      },
      dateISO: function(t, e) {
        return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
      },
      number: function(t, e) {
        return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
      },
      digits: function(t, e) {
        return this.optional(e) || /^\d+$/.test(t)
      },
      creditcard: function(t, e) {
        if (this.optional(e)) return "dependency-mismatch";
        if (/[^0-9 \-]+/.test(t)) return !1;
        var i = 0,
          s = 0,
          r = !1;
        t = t.replace(/\D/g, "");
        for (var n = t.length - 1; n >= 0; n--) {
          var a = t.charAt(n);
          s = parseInt(a, 10), r && (s *= 2) > 9 && (s -= 9), i += s, r = !r
        }
        return 0 === i % 10
      },
      minlength: function(e, i, s) {
        var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
        return this.optional(i) || r >= s
      },
      maxlength: function(e, i, s) {
        var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
        return this.optional(i) || s >= r
      },
      rangelength: function(e, i, s) {
        var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
        return this.optional(i) || r >= s[0] && s[1] >= r
      },
      min: function(t, e, i) {
        return this.optional(e) || t >= i
      },
      max: function(t, e, i) {
        return this.optional(e) || i >= t
      },
      range: function(t, e, i) {
        return this.optional(e) || t >= i[0] && i[1] >= t
      },
      equalTo: function(e, i, s) {
        var r = t(s);
        return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
          t(i).valid()
        }), e === r.val()
      },
      remote: function(e, i, s) {
        if (this.optional(i)) return "dependency-mismatch";
        var r = this.previousValue(i);
        if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), r.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = r.message, s = "string" == typeof s && {
            url: s
          } || s, r.old === e) return r.valid;
        r.old = e;
        var n = this;
        this.startRequest(i);
        var a = {};
        return a[i.name] = e, t.ajax(t.extend(!0, {
          url: s,
          mode: "abort",
          port: "validate" + i.name,
          dataType: "json",
          data: a,
          success: function(s) {
            n.settings.messages[i.name].remote = r.originalMessage;
            var a = s === !0 || "true" === s;
            if (a) {
              var u = n.formSubmitted;
              n.prepareElement(i), n.formSubmitted = u, n.successList.push(i), delete n.invalid[i.name], n.showErrors()
            } else {
              var o = {},
                l = s || n.defaultMessage(i, "remote");
              o[i.name] = r.message = t.isFunction(l) ? l(e) : l, n.invalid[i.name] = !0, n.showErrors(o)
            }
            r.valid = a, n.stopRequest(i, a)
          }
        }, s)), "pending"
      }
    }
  }), t.format = t.validator.format
})(jQuery),
function(t) {
  var e = {};
  if (t.ajaxPrefilter) t.ajaxPrefilter(function(t, i, s) {
    var r = t.port;
    "abort" === t.mode && (e[r] && e[r].abort(), e[r] = s)
  });
  else {
    var i = t.ajax;
    t.ajax = function(s) {
      var r = ("mode" in s ? s : t.ajaxSettings).mode,
        n = ("port" in s ? s : t.ajaxSettings).port;
      return "abort" === r ? (e[n] && e[n].abort(), e[n] = i.apply(this, arguments), e[n]) : i.apply(this, arguments)
    }
  }
}(jQuery),
function(t) {
  t.extend(t.fn, {
    validateDelegate: function(e, i, s) {
      return this.bind(i, function(i) {
        var r = t(i.target);
        return r.is(e) ? s.apply(r, arguments) : void 0
      })
    }
  })
}(jQuery);
(function(e) {
  e.widget("ui.formwizard", {
    _init: function() {
      var t = this;
      var n = this.options.formOptions.success;
      var r = this.options.formOptions.complete;
      var i = this.options.formOptions.beforeSend;
      var s = this.options.formOptions.beforeSubmit;
      var o = this.options.formOptions.beforeSerialize;
      this.options.formOptions = e.extend(this.options.formOptions, {
        success: function(e, r, i) {
          if (n) {
            n(e, r, i)
          }
          if (t.options.formOptions && t.options.formOptions.resetForm || !t.options.formOptions) {
            t._reset()
          }
        },
        complete: function(e, n) {
          if (r) {
            r(e, n)
          }
          t._enableNavigation()
        },
        beforeSubmit: function(e, n, r) {
          if (s) {
            var i = s(e, n, r);
            if (!i) t._enableNavigation();
            return i
          }
        },
        beforeSend: function(e) {
          if (i) {
            var n = i(e);
            if (!n) t._enableNavigation();
            return n
          }
        },
        beforeSerialize: function(e, n) {
          if (o) {
            var r = o(e, n);
            if (!r) t._enableNavigation();
            return r
          }
        }
      });
      if (this.options.historyEnabled) {
        e.bbq.removeState("_" + e(this.element).attr("id"))
      }
      this.steps = this.element.find(".step").hide();
      this.firstStep = this.steps.eq(0).attr("id");
      this.activatedSteps = new Array;
      this.isLastStep = false;
      this.previousStep = undefined;
      this.currentStep = this.steps.eq(0).attr("id");
      this.nextButton = this.element.find(this.options.next).click(function() {
        return t._next()
      });
      this.nextButtonInitinalValue = this.nextButton.val();
      this.nextButton.val(this.options.textNext);
      this.backButton = this.element.find(this.options.back).click(function() {
        t._back();
        return false
      });
      this.backButtonInitinalValue = this.backButton.val();
      this.backButton.val(this.options.textBack);
      if (this.options.validationEnabled && jQuery().validate == undefined) {
        this.options.validationEnabled = false;
        if (window["console"] !== undefined) {
          console.log("%s", "validationEnabled option set, but the validation plugin is not included")
        }
      } else if (this.options.validationEnabled) {
        this.element.validate(this.options.validationOptions)
      }
      if (this.options.formPluginEnabled && jQuery().ajaxSubmit == undefined) {
        this.options.formPluginEnabled = false;
        if (window["console"] !== undefined) {
          console.log("%s", "formPluginEnabled option set but the form plugin is not included")
        }
      }
      if (this.options.disableInputFields == true) {
        e(this.steps).find(":input:not('.wizard-ignore')").attr("disabled", "disabled")
      }
      if (this.options.historyEnabled) {
        e(window).bind("hashchange", undefined, function(n) {
          var r = n.getState("_" + e(t.element).attr("id")) || t.firstStep;
          if (r !== t.currentStep) {
            if (t.options.validationEnabled && r === t._navigate(t.currentStep)) {
              if (!t.element.valid()) {
                t._updateHistory(t.currentStep);
                t.element.validate().focusInvalid();
                return false
              }
            }
            if (r !== t.currentStep) t._show(r)
          }
        })
      }
      this.element.addClass("ui-formwizard");
      this.element.find(":input").addClass("ui-wizard-content");
      this.steps.addClass("ui-formwizard-content");
      this.backButton.addClass("ui-formwizard-button ui-wizard-content");
      this.nextButton.addClass("ui-formwizard-button ui-wizard-content");
      if (!this.options.disableUIStyles) {
        this.element.addClass("ui-helper-reset ui-widget ui-widget-content ui-helper-reset ui-corner-all");
        this.element.find(":input").addClass("ui-helper-reset ui-state-default");
        this.steps.addClass("ui-helper-reset ui-corner-all");
        this.backButton.addClass("ui-helper-reset ui-state-default");
        this.nextButton.addClass("ui-helper-reset ui-state-default")
      }
      this._show(undefined);
      return e(this)
    },
    _next: function() {
      if (this.options.validationEnabled) {
        if (!this.element.valid()) {
          this.element.validate().focusInvalid();
          return false
        }
      }
      if (this.options.remoteAjax != undefined) {
        var t = this.options.remoteAjax[this.currentStep];
        var n = this;
        if (t !== undefined) {
          var r = t.success;
          var i = t.beforeSend;
          var s = t.complete;
          t = e.extend({}, t, {
            success: function(e, t) {
              if (r !== undefined && r(e, t) || r == undefined) {
                n._continueToNextStep()
              }
            },
            beforeSend: function(t) {
              n._disableNavigation();
              if (i !== undefined) i(t);
              e(n.element).trigger("before_remote_ajax", {
                currentStep: n.currentStep
              })
            },
            complete: function(t, r) {
              if (s !== undefined) s(t, r);
              e(n.element).trigger("after_remote_ajax", {
                currentStep: n.currentStep
              });
              n._enableNavigation()
            }
          });
          this.element.ajaxSubmit(t);
          return false
        }
      }
      return this._continueToNextStep()
    },
    _back: function() {
      if (this.activatedSteps.length > 0) {
        if (this.options.historyEnabled) {
          this._updateHistory(this.activatedSteps[this.activatedSteps.length - 2])
        } else {
          this._show(this.activatedSteps[this.activatedSteps.length - 2], true)
        }
      }
      return false
    },
    _continueToNextStep: function() {
      if (this.isLastStep) {
        for (var e = 0; e < this.activatedSteps.length; e++) {
          this.steps.filter("#" + this.activatedSteps[e]).find(":input").not(".wizard-ignore").removeAttr("disabled")
        }
        if (!this.options.formPluginEnabled) {
          return true
        } else {
          this._disableNavigation();
          this.element.ajaxSubmit(this.options.formOptions);
          return false
        }
      }
      var t = this._navigate(this.currentStep);
      if (t == this.currentStep) {
        return false
      }
      if (this.options.historyEnabled) {
        this._updateHistory(t)
      } else {
        this._show(t, true)
      }
      return false
    },
    _updateHistory: function(t) {
      var n = {};
      n["_" + e(this.element).attr("id")] = t;
      e.bbq.pushState(n)
    },
    _disableNavigation: function() {
      this.nextButton.attr("disabled", "disabled");
      this.backButton.attr("disabled", "disabled");
      if (!this.options.disableUIStyles) {
        this.nextButton.removeClass("ui-state-active").addClass("ui-state-disabled");
        this.backButton.removeClass("ui-state-active").addClass("ui-state-disabled")
      }
    },
    _enableNavigation: function() {
      if (this.isLastStep) {
        this.nextButton.val(this.options.textSubmit)
      } else {
        this.nextButton.val(this.options.textNext)
      }
      if (e.trim(this.currentStep) !== this.steps.eq(0).attr("id")) {
        this.backButton.removeAttr("disabled");
        if (!this.options.disableUIStyles) {
          this.backButton.removeClass("ui-state-disabled").addClass("ui-state-active")
        }
      }
      this.nextButton.removeAttr("disabled");
      if (!this.options.disableUIStyles) {
        this.nextButton.removeClass("ui-state-disabled").addClass("ui-state-active")
      }
    },
    _animate: function(e, t, n) {
      this._disableNavigation();
      var r = this.steps.filter("#" + e);
      var i = this.steps.filter("#" + t);
      r.find(":input").not(".wizard-ignore").attr("disabled", "disabled");
      i.find(":input").not(".wizard-ignore").removeAttr("disabled");
      var s = this;
      r.animate(s.options.outAnimation, s.options.outDuration, s.options.easing, function() {
        i.animate(s.options.inAnimation, s.options.inDuration, s.options.easing, function() {
          if (s.options.focusFirstInput) i.find(":input:first").focus();
          s._enableNavigation();
          n.apply(s)
        });
        return
      })
    },
    _checkIflastStep: function(t) {
      this.isLastStep = false;
      if (e("#" + t).hasClass(this.options.submitStepClass) || this.steps.filter(":last").attr("id") == t) {
        this.isLastStep = true
      }
    },
    _getLink: function(t) {
      var n = undefined;
      var r = this.steps.filter("#" + t).find(this.options.linkClass);
      if (r != undefined) {
        if (r.filter(":radio,:checkbox").size() > 0) {
          n = r.filter(this.options.linkClass + ":checked").val()
        } else {
          n = e(r).val()
        }
      }
      return n
    },
    _navigate: function(e) {
      var t = this._getLink(e);
      if (t != undefined) {
        if (t != "" && t != null && t != undefined && this.steps.filter("#" + t).attr("id") != undefined) {
          return t
        }
        return this.currentStep
      } else if (t == undefined && !this.isLastStep) {
        var n = this.steps.filter("#" + e).next().attr("id");
        return n
      }
    },
    _show: function(t) {
      var n = false;
      var r = t !== undefined;
      if (t == undefined || t == "") {
        this.activatedSteps.pop();
        t = this.firstStep;
        this.activatedSteps.push(t)
      } else {
        if (e.inArray(t, this.activatedSteps) > -1) {
          n = true;
          this.activatedSteps.pop()
        } else {
          this.activatedSteps.push(t)
        }
      }
      if (this.currentStep !== t || t === this.firstStep) {
        this.previousStep = this.currentStep;
        this._checkIflastStep(t);
        this.currentStep = t;
        var i = function() {
          if (r) {
            e(this.element).trigger("step_shown", e.extend({
              isBackNavigation: n
            }, this._state()))
          }
        };
        if (r) {
          e(this.element).trigger("before_step_shown", e.extend({
            isBackNavigation: n
          }, this._state()))
        }
        this._animate(this.previousStep, t, i)
      }
    },
    _reset: function() {
      this.element.resetForm();
      e("label,:input,textarea", this).removeClass("error");
      for (var t = 0; t < this.activatedSteps.length; t++) {
        this.steps.filter("#" + this.activatedSteps[t]).hide().find(":input").attr("disabled", "disabled")
      }
      this.activatedSteps = new Array;
      this.previousStep = undefined;
      this.isLastStep = false;
      if (this.options.historyEnabled) {
        this._updateHistory(this.firstStep)
      } else {
        this._show(this.firstStep)
      }
    },
    _state: function(e) {
      var t = {
        settings: this.options,
        activatedSteps: this.activatedSteps,
        isLastStep: this.isLastStep,
        isFirstStep: this.currentStep === this.firstStep,
        previousStep: this.previousStep,
        currentStep: this.currentStep,
        backButton: this.backButton,
        nextButton: this.nextButton,
        steps: this.steps,
        firstStep: this.firstStep
      };
      if (e !== undefined) return t[e];
      return t
    },
    show: function(e) {
      if (this.options.historyEnabled) {
        this._updateHistory(e)
      } else {
        this._show(e)
      }
    },
    state: function(e) {
      return this._state(e)
    },
    reset: function() {
      this._reset()
    },
    next: function() {
      this._next()
    },
    back: function() {
      this._back()
    },
    destroy: function() {
      this.element.find("*").removeAttr("disabled").show();
      this.nextButton.unbind("click").val(this.nextButtonInitinalValue).removeClass("ui-state-disabled").addClass("ui-state-active");
      this.backButton.unbind("click").val(this.backButtonInitinalValue).removeClass("ui-state-disabled").addClass("ui-state-active");
      this.backButtonInitinalValue = undefined;
      this.nextButtonInitinalValue = undefined;
      this.activatedSteps = undefined;
      this.previousStep = undefined;
      this.currentStep = undefined;
      this.isLastStep = undefined;
      this.options = undefined;
      this.nextButton = undefined;
      this.backButton = undefined;
      this.formwizard = undefined;
      this.element = undefined;
      this.steps = undefined;
      this.firstStep = undefined
    },
    update_steps: function() {
      this.steps = this.element.find(".step").addClass("ui-formwizard-content");
      this.firstStep = this.steps.eq(0).attr("id");
      this.steps.not("#" + this.currentStep).hide().find(":input").addClass("ui-wizard-content").attr("disabled", "disabled");
      this._checkIflastStep(this.currentStep);
      this._enableNavigation();
      if (!this.options.disableUIStyles) {
        this.steps.addClass("ui-helper-reset ui-corner-all");
        this.steps.find(":input").addClass("ui-helper-reset ui-state-default")
      }
    },
    options: {
      historyEnabled: false,
      validationEnabled: false,
      validationOptions: undefined,
      formPluginEnabled: false,
      linkClass: ".link",
      submitStepClass: "submit_step",
      back: ":reset",
      next: ":submit",
      textSubmit: "Submit",
      textNext: "Next",
      textBack: "Back",
      remoteAjax: undefined,
      inAnimation: {
        opacity: "show"
      },
      outAnimation: {
        opacity: "hide"
      },
      inDuration: 400,
      outDuration: 400,
      easing: "swing",
      focusFirstInput: false,
      disableInputFields: true,
      formOptions: {
        reset: true,
        success: function(e) {
          if (window["console"] !== undefined) {
            console.log("%s", "form submit successful")
          }
        },
        disableUIStyles: false
      }
    }
  })
})(jQuery);
! function(t) {
  function e(t, e) {
    return t.toFixed(e.decimals)
  }
  t.fn.countTo = function(e) {
    return e = e || {}, t(this).each(function() {
      function a() {
        s += l, c++, n(s), "function" == typeof o.onUpdate && o.onUpdate.call(f, s), c >= r && (i.removeData("countTo"), clearInterval(d.interval), s = o.to, "function" == typeof o.onComplete && o.onComplete.call(f, s))
      }

      function n(t) {
        var e = o.formatter.call(f, t, o);
        i.text(e)
      }
      var o = t.extend({}, t.fn.countTo.defaults, {
          from: t(this).data("from"),
          to: t(this).data("to"),
          speed: t(this).data("speed"),
          refreshInterval: t(this).data("refresh-interval"),
          decimals: t(this).data("decimals")
        }, e),
        r = Math.ceil(o.speed / o.refreshInterval),
        l = (o.to - o.from) / r,
        f = this,
        i = t(this),
        c = 0,
        s = o.from,
        d = i.data("countTo") || {};
      i.data("countTo", d), d.interval && clearInterval(d.interval), d.interval = setInterval(a, o.refreshInterval), n(s)
    })
  }, t.fn.countTo.defaults = {
    from: 0,
    to: 0,
    speed: 1e3,
    refreshInterval: 100,
    decimals: 0,
    formatter: e,
    onUpdate: null,
    onComplete: null
  }
}(jQuery);
! function(e) {
  e.fn.appear = function(a, r) {
    var n = e.extend({
      data: void 0,
      one: !0,
      accX: 0,
      accY: 0
    }, r);
    return this.each(function() {
      var r = e(this);
      if (r.appeared = !1, !a) return void r.trigger("appear", n.data);
      var p = e(window),
        t = function() {
          if (!r.is(":visible")) return void(r.appeared = !1);
          var e = p.scrollLeft(),
            a = p.scrollTop(),
            t = r.offset(),
            c = t.left,
            i = t.top,
            o = n.accX,
            f = n.accY,
            s = r.height(),
            u = p.height(),
            d = r.width(),
            l = p.width();
          i + s + f >= a && a + u + f >= i && c + d + o >= e && e + l + o >= c ? r.appeared || r.trigger("appear", n.data) : r.appeared = !1
        },
        c = function() {
          if (r.appeared = !0, n.one) {
            p.unbind("scroll", t);
            var c = e.inArray(t, e.fn.appear.checks);
            c >= 0 && e.fn.appear.checks.splice(c, 1)
          }
          a.apply(this, arguments)
        };
      n.one ? r.one("appear", n.data, c) : r.bind("appear", n.data, c), p.scroll(t), e.fn.appear.checks.push(t), t()
    })
  }, e.extend(e.fn.appear, {
    checks: [],
    timeout: null,
    checkAll: function() {
      var a = e.fn.appear.checks.length;
      if (a > 0)
        for (; a--;) e.fn.appear.checks[a]()
    },
    run: function() {
      e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout), e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
    }
  }), e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(a, r) {
    var n = e.fn[r];
    n && (e.fn[r] = function() {
      var a = n.apply(this, arguments);
      return e.fn.appear.run(), a
    })
  })
}(jQuery);
