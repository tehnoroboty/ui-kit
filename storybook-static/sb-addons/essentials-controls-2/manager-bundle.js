try {
  var u2 = Object.create
  var Aa = Object.defineProperty
  var s2 = Object.getOwnPropertyDescriptor
  var l2 = Object.getOwnPropertyNames
  var c2 = Object.getPrototypeOf,
    d2 = Object.prototype.hasOwnProperty
  var pr = (e =>
    typeof require < 'u'
      ? require
      : typeof Proxy < 'u'
      ? new Proxy(e, { get: (t, r) => (typeof require < 'u' ? require : t)[r] })
      : e)(function (e) {
    if (typeof require < 'u') return require.apply(this, arguments)
    throw Error('Dynamic require of "' + e + '" is not supported')
  })
  var Ze = (e, t) => () => (e && (t = e((e = 0))), t)
  var S = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Du = (e, t) => {
      for (var r in t) Aa(e, r, { get: t[r], enumerable: !0 })
    },
    p2 = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let a of l2(t))
          !d2.call(e, a) &&
            a !== r &&
            Aa(e, a, { get: () => t[a], enumerable: !(n = s2(t, a)) || n.enumerable })
      return e
    }
  var fe = (e, t, r) => (
    (r = e != null ? u2(c2(e)) : {}),
    p2(t || !e || !e.__esModule ? Aa(r, 'default', { value: e, enumerable: !0 }) : r, e)
  )
  var l = Ze(() => {})
  var c = Ze(() => {})
  var d = Ze(() => {})
  var h,
    en,
    et,
    Cu,
    rk,
    nk,
    ak,
    xu,
    ok,
    me,
    fr,
    Ca,
    ik,
    uk,
    sk,
    lk,
    Su,
    ck,
    ge,
    je,
    dk,
    he,
    pk,
    Fu,
    ot,
    fk,
    Se,
    re,
    hk,
    Ot = Ze(() => {
      l()
      c()
      d()
      ;(h = __REACT__),
        ({
          Children: en,
          Component: et,
          Fragment: Cu,
          Profiler: rk,
          PureComponent: nk,
          StrictMode: ak,
          Suspense: xu,
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ok,
          cloneElement: me,
          createContext: fr,
          createElement: Ca,
          createFactory: ik,
          createRef: uk,
          forwardRef: sk,
          isValidElement: lk,
          lazy: Su,
          memo: ck,
          useCallback: ge,
          useContext: je,
          useDebugValue: dk,
          useEffect: he,
          useImperativeHandle: pk,
          useLayoutEffect: Fu,
          useMemo: ot,
          useReducer: fk,
          useRef: Se,
          useState: re,
          version: hk,
        } = __REACT__)
    })
  var Ru = {}
  Du(Ru, {
    A: () => m2,
    ActionBar: () => Fa,
    AddonPanel: () => wa,
    Badge: () => Ba,
    Bar: () => g2,
    Blockquote: () => y2,
    Button: () => b2,
    ClipboardCode: () => E2,
    Code: () => Ta,
    DL: () => A2,
    Div: () => v2,
    DocumentWrapper: () => D2,
    ErrorFormatter: () => _a,
    FlexBar: () => Oa,
    Form: () => Re,
    H1: () => C2,
    H2: () => Ra,
    H3: () => Pa,
    H4: () => x2,
    H5: () => S2,
    H6: () => F2,
    HR: () => w2,
    IconButton: () => bt,
    IconButtonSkeleton: () => Ia,
    Icons: () => Oe,
    Img: () => B2,
    LI: () => T2,
    Link: () => Et,
    ListItem: () => _2,
    Loader: () => ka,
    OL: () => O2,
    P: () => R2,
    Placeholder: () => P2,
    Pre: () => I2,
    ResetWrapper: () => Na,
    ScrollArea: () => k2,
    Separator: () => N2,
    Spaced: () => La,
    Span: () => L2,
    StorybookIcon: () => M2,
    StorybookLogo: () => q2,
    Symbols: () => j2,
    SyntaxHighlighter: () => tn,
    TT: () => $2,
    TabBar: () => H2,
    TabButton: () => U2,
    TabWrapper: () => z2,
    Table: () => G2,
    Tabs: () => W2,
    TabsState: () => Ma,
    TooltipLinkList: () => V2,
    TooltipMessage: () => K2,
    TooltipNote: () => qa,
    UL: () => Y2,
    WithTooltip: () => rn,
    WithTooltipPure: () => ja,
    Zoom: () => $a,
    codeCommon: () => Rt,
    components: () => Ha,
    createCopyToClipboardFunction: () => X2,
    default: () => h2,
    getStoryHref: () => Ua,
    icons: () => J2,
    interleaveSeparators: () => Q2,
    nameSpaceClassNames: () => za,
    resetComponents: () => Z2,
    withReset: () => Pt,
  })
  var h2,
    m2,
    Fa,
    wa,
    Ba,
    g2,
    y2,
    b2,
    E2,
    Ta,
    A2,
    v2,
    D2,
    _a,
    Oa,
    Re,
    C2,
    Ra,
    Pa,
    x2,
    S2,
    F2,
    w2,
    bt,
    Ia,
    Oe,
    B2,
    T2,
    Et,
    _2,
    ka,
    O2,
    R2,
    P2,
    I2,
    Na,
    k2,
    N2,
    La,
    L2,
    M2,
    q2,
    j2,
    tn,
    $2,
    H2,
    U2,
    z2,
    G2,
    W2,
    Ma,
    V2,
    K2,
    qa,
    Y2,
    rn,
    ja,
    $a,
    Rt,
    Ha,
    X2,
    Ua,
    J2,
    Q2,
    za,
    Z2,
    Pt,
    hr = Ze(() => {
      l()
      c()
      d()
      ;(h2 = __STORYBOOKCOMPONENTS__),
        ({
          A: m2,
          ActionBar: Fa,
          AddonPanel: wa,
          Badge: Ba,
          Bar: g2,
          Blockquote: y2,
          Button: b2,
          ClipboardCode: E2,
          Code: Ta,
          DL: A2,
          Div: v2,
          DocumentWrapper: D2,
          ErrorFormatter: _a,
          FlexBar: Oa,
          Form: Re,
          H1: C2,
          H2: Ra,
          H3: Pa,
          H4: x2,
          H5: S2,
          H6: F2,
          HR: w2,
          IconButton: bt,
          IconButtonSkeleton: Ia,
          Icons: Oe,
          Img: B2,
          LI: T2,
          Link: Et,
          ListItem: _2,
          Loader: ka,
          OL: O2,
          P: R2,
          Placeholder: P2,
          Pre: I2,
          ResetWrapper: Na,
          ScrollArea: k2,
          Separator: N2,
          Spaced: La,
          Span: L2,
          StorybookIcon: M2,
          StorybookLogo: q2,
          Symbols: j2,
          SyntaxHighlighter: tn,
          TT: $2,
          TabBar: H2,
          TabButton: U2,
          TabWrapper: z2,
          Table: G2,
          Tabs: W2,
          TabsState: Ma,
          TooltipLinkList: V2,
          TooltipMessage: K2,
          TooltipNote: qa,
          UL: Y2,
          WithTooltip: rn,
          WithTooltipPure: ja,
          Zoom: $a,
          codeCommon: Rt,
          components: Ha,
          createCopyToClipboardFunction: X2,
          getStoryHref: Ua,
          icons: J2,
          interleaveSeparators: Q2,
          nameSpaceClassNames: za,
          resetComponents: Z2,
          withReset: Pt,
        } = __STORYBOOKCOMPONENTS__)
    })
  var Pe,
    mr,
    Ga = Ze(() => {
      l()
      c()
      d()
      ;(Pe = e => `control-${e.replace(/\s+/g, '-')}`), (mr = e => `set-${e.replace(/\s+/g, '-')}`)
    })
  var Zk,
    e7,
    t7,
    r7,
    Pu,
    n7,
    a7,
    Iu,
    o7,
    i7,
    u7,
    s7,
    l7,
    c7,
    e1,
    ku,
    d7,
    p7,
    f7,
    h7,
    q,
    Wa,
    m7,
    Nu,
    g7,
    Va = Ze(() => {
      l()
      c()
      d()
      ;(Zk = __STORYBOOKTHEMING__),
        ({
          CacheProvider: e7,
          ClassNames: t7,
          Global: r7,
          ThemeProvider: Pu,
          background: n7,
          color: a7,
          convert: Iu,
          create: o7,
          createCache: i7,
          createGlobal: u7,
          createReset: s7,
          css: l7,
          darken: c7,
          ensure: e1,
          ignoreSsrWarning: ku,
          isPropValid: d7,
          jsx: p7,
          keyframes: f7,
          lighten: h7,
          styled: q,
          themes: Wa,
          typography: m7,
          useTheme: Nu,
          withTheme: g7,
        } = __STORYBOOKTHEMING__)
    })
  var no = S((MN, Uu) => {
    l()
    c()
    d()
    function q1(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; ) a[r] = t(e[r], r, e)
      return a
    }
    Uu.exports = q1
  })
  var Gu = S((HN, zu) => {
    l()
    c()
    d()
    function j1() {
      ;(this.__data__ = []), (this.size = 0)
    }
    zu.exports = j1
  })
  var an = S((WN, Wu) => {
    l()
    c()
    d()
    function $1(e, t) {
      return e === t || (e !== e && t !== t)
    }
    Wu.exports = $1
  })
  var Ar = S((XN, Vu) => {
    l()
    c()
    d()
    var H1 = an()
    function U1(e, t) {
      for (var r = e.length; r--; ) if (H1(e[r][0], t)) return r
      return -1
    }
    Vu.exports = U1
  })
  var Yu = S((eL, Ku) => {
    l()
    c()
    d()
    var z1 = Ar(),
      G1 = Array.prototype,
      W1 = G1.splice
    function V1(e) {
      var t = this.__data__,
        r = z1(t, e)
      if (r < 0) return !1
      var n = t.length - 1
      return r == n ? t.pop() : W1.call(t, r, 1), --this.size, !0
    }
    Ku.exports = V1
  })
  var Ju = S((aL, Xu) => {
    l()
    c()
    d()
    var K1 = Ar()
    function Y1(e) {
      var t = this.__data__,
        r = K1(t, e)
      return r < 0 ? void 0 : t[r][1]
    }
    Xu.exports = Y1
  })
  var Zu = S((sL, Qu) => {
    l()
    c()
    d()
    var X1 = Ar()
    function J1(e) {
      return X1(this.__data__, e) > -1
    }
    Qu.exports = J1
  })
  var ts = S((pL, es) => {
    l()
    c()
    d()
    var Q1 = Ar()
    function Z1(e, t) {
      var r = this.__data__,
        n = Q1(r, e)
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this
    }
    es.exports = Z1
  })
  var vr = S((gL, rs) => {
    l()
    c()
    d()
    var eb = Gu(),
      tb = Yu(),
      rb = Ju(),
      nb = Zu(),
      ab = ts()
    function Lt(e) {
      var t = -1,
        r = e == null ? 0 : e.length
      for (this.clear(); ++t < r; ) {
        var n = e[t]
        this.set(n[0], n[1])
      }
    }
    Lt.prototype.clear = eb
    Lt.prototype.delete = tb
    Lt.prototype.get = rb
    Lt.prototype.has = nb
    Lt.prototype.set = ab
    rs.exports = Lt
  })
  var as = S((AL, ns) => {
    l()
    c()
    d()
    var ob = vr()
    function ib() {
      ;(this.__data__ = new ob()), (this.size = 0)
    }
    ns.exports = ib
  })
  var is = S((xL, os) => {
    l()
    c()
    d()
    function ub(e) {
      var t = this.__data__,
        r = t.delete(e)
      return (this.size = t.size), r
    }
    os.exports = ub
  })
  var ss = S((BL, us) => {
    l()
    c()
    d()
    function sb(e) {
      return this.__data__.get(e)
    }
    us.exports = sb
  })
  var cs = S((RL, ls) => {
    l()
    c()
    d()
    function lb(e) {
      return this.__data__.has(e)
    }
    ls.exports = lb
  })
  var ao = S((NL, ds) => {
    l()
    c()
    d()
    var cb = typeof window == 'object' && window && window.Object === Object && window
    ds.exports = cb
  })
  var $e = S((jL, ps) => {
    l()
    c()
    d()
    var db = ao(),
      pb = typeof self == 'object' && self && self.Object === Object && self,
      fb = db || pb || Function('return this')()
    ps.exports = fb
  })
  var vt = S((zL, fs) => {
    l()
    c()
    d()
    var hb = $e(),
      mb = hb.Symbol
    fs.exports = mb
  })
  var ys = S((KL, gs) => {
    l()
    c()
    d()
    var hs = vt(),
      ms = Object.prototype,
      gb = ms.hasOwnProperty,
      yb = ms.toString,
      Dr = hs ? hs.toStringTag : void 0
    function bb(e) {
      var t = gb.call(e, Dr),
        r = e[Dr]
      try {
        e[Dr] = void 0
        var n = !0
      } catch {}
      var a = yb.call(e)
      return n && (t ? (e[Dr] = r) : delete e[Dr]), a
    }
    gs.exports = bb
  })
  var Es = S((QL, bs) => {
    l()
    c()
    d()
    var Eb = Object.prototype,
      Ab = Eb.toString
    function vb(e) {
      return Ab.call(e)
    }
    bs.exports = vb
  })
  var Dt = S((rM, Ds) => {
    l()
    c()
    d()
    var As = vt(),
      Db = ys(),
      Cb = Es(),
      xb = '[object Null]',
      Sb = '[object Undefined]',
      vs = As ? As.toStringTag : void 0
    function Fb(e) {
      return e == null ? (e === void 0 ? Sb : xb) : vs && vs in Object(e) ? Db(e) : Cb(e)
    }
    Ds.exports = Fb
  })
  var Ge = S((iM, Cs) => {
    l()
    c()
    d()
    function wb(e) {
      var t = typeof e
      return e != null && (t == 'object' || t == 'function')
    }
    Cs.exports = wb
  })
  var oo = S((cM, xs) => {
    l()
    c()
    d()
    var Bb = Dt(),
      Tb = Ge(),
      _b = '[object AsyncFunction]',
      Ob = '[object Function]',
      Rb = '[object GeneratorFunction]',
      Pb = '[object Proxy]'
    function Ib(e) {
      if (!Tb(e)) return !1
      var t = Bb(e)
      return t == Ob || t == Rb || t == _b || t == Pb
    }
    xs.exports = Ib
  })
  var Fs = S((hM, Ss) => {
    l()
    c()
    d()
    var kb = $e(),
      Nb = kb['__core-js_shared__']
    Ss.exports = Nb
  })
  var Ts = S((bM, Bs) => {
    l()
    c()
    d()
    var io = Fs(),
      ws = (function () {
        var e = /[^.]+$/.exec((io && io.keys && io.keys.IE_PROTO) || '')
        return e ? 'Symbol(src)_1.' + e : ''
      })()
    function Lb(e) {
      return !!ws && ws in e
    }
    Bs.exports = Lb
  })
  var uo = S((DM, _s) => {
    l()
    c()
    d()
    var Mb = Function.prototype,
      qb = Mb.toString
    function jb(e) {
      if (e != null) {
        try {
          return qb.call(e)
        } catch {}
        try {
          return e + ''
        } catch {}
      }
      return ''
    }
    _s.exports = jb
  })
  var Rs = S((FM, Os) => {
    l()
    c()
    d()
    var $b = oo(),
      Hb = Ts(),
      Ub = Ge(),
      zb = uo(),
      Gb = /[\\^$.*+?()[\]{}|]/g,
      Wb = /^\[object .+?Constructor\]$/,
      Vb = Function.prototype,
      Kb = Object.prototype,
      Yb = Vb.toString,
      Xb = Kb.hasOwnProperty,
      Jb = RegExp(
        '^' +
          Yb.call(Xb)
            .replace(Gb, '\\$&')
            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
          '$'
      )
    function Qb(e) {
      if (!Ub(e) || Hb(e)) return !1
      var t = $b(e) ? Jb : Wb
      return t.test(zb(e))
    }
    Os.exports = Qb
  })
  var Is = S((_M, Ps) => {
    l()
    c()
    d()
    function Zb(e, t) {
      return e?.[t]
    }
    Ps.exports = Zb
  })
  var lt = S((IM, ks) => {
    l()
    c()
    d()
    var eE = Rs(),
      tE = Is()
    function rE(e, t) {
      var r = tE(e, t)
      return eE(r) ? r : void 0
    }
    ks.exports = rE
  })
  var on = S((MM, Ns) => {
    l()
    c()
    d()
    var nE = lt(),
      aE = $e(),
      oE = nE(aE, 'Map')
    Ns.exports = oE
  })
  var Cr = S((HM, Ls) => {
    l()
    c()
    d()
    var iE = lt(),
      uE = iE(Object, 'create')
    Ls.exports = uE
  })
  var js = S((WM, qs) => {
    l()
    c()
    d()
    var Ms = Cr()
    function sE() {
      ;(this.__data__ = Ms ? Ms(null) : {}), (this.size = 0)
    }
    qs.exports = sE
  })
  var Hs = S((XM, $s) => {
    l()
    c()
    d()
    function lE(e) {
      var t = this.has(e) && delete this.__data__[e]
      return (this.size -= t ? 1 : 0), t
    }
    $s.exports = lE
  })
  var zs = S((eq, Us) => {
    l()
    c()
    d()
    var cE = Cr(),
      dE = '__lodash_hash_undefined__',
      pE = Object.prototype,
      fE = pE.hasOwnProperty
    function hE(e) {
      var t = this.__data__
      if (cE) {
        var r = t[e]
        return r === dE ? void 0 : r
      }
      return fE.call(t, e) ? t[e] : void 0
    }
    Us.exports = hE
  })
  var Ws = S((aq, Gs) => {
    l()
    c()
    d()
    var mE = Cr(),
      gE = Object.prototype,
      yE = gE.hasOwnProperty
    function bE(e) {
      var t = this.__data__
      return mE ? t[e] !== void 0 : yE.call(t, e)
    }
    Gs.exports = bE
  })
  var Ks = S((sq, Vs) => {
    l()
    c()
    d()
    var EE = Cr(),
      AE = '__lodash_hash_undefined__'
    function vE(e, t) {
      var r = this.__data__
      return (this.size += this.has(e) ? 0 : 1), (r[e] = EE && t === void 0 ? AE : t), this
    }
    Vs.exports = vE
  })
  var Xs = S((pq, Ys) => {
    l()
    c()
    d()
    var DE = js(),
      CE = Hs(),
      xE = zs(),
      SE = Ws(),
      FE = Ks()
    function Mt(e) {
      var t = -1,
        r = e == null ? 0 : e.length
      for (this.clear(); ++t < r; ) {
        var n = e[t]
        this.set(n[0], n[1])
      }
    }
    Mt.prototype.clear = DE
    Mt.prototype.delete = CE
    Mt.prototype.get = xE
    Mt.prototype.has = SE
    Mt.prototype.set = FE
    Ys.exports = Mt
  })
  var Zs = S((gq, Qs) => {
    l()
    c()
    d()
    var Js = Xs(),
      wE = vr(),
      BE = on()
    function TE() {
      ;(this.size = 0),
        (this.__data__ = { hash: new Js(), map: new (BE || wE)(), string: new Js() })
    }
    Qs.exports = TE
  })
  var tl = S((Aq, el) => {
    l()
    c()
    d()
    function _E(e) {
      var t = typeof e
      return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
        ? e !== '__proto__'
        : e === null
    }
    el.exports = _E
  })
  var xr = S((xq, rl) => {
    l()
    c()
    d()
    var OE = tl()
    function RE(e, t) {
      var r = e.__data__
      return OE(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map
    }
    rl.exports = RE
  })
  var al = S((Bq, nl) => {
    l()
    c()
    d()
    var PE = xr()
    function IE(e) {
      var t = PE(this, e).delete(e)
      return (this.size -= t ? 1 : 0), t
    }
    nl.exports = IE
  })
  var il = S((Rq, ol) => {
    l()
    c()
    d()
    var kE = xr()
    function NE(e) {
      return kE(this, e).get(e)
    }
    ol.exports = NE
  })
  var sl = S((Nq, ul) => {
    l()
    c()
    d()
    var LE = xr()
    function ME(e) {
      return LE(this, e).has(e)
    }
    ul.exports = ME
  })
  var cl = S((jq, ll) => {
    l()
    c()
    d()
    var qE = xr()
    function jE(e, t) {
      var r = qE(this, e),
        n = r.size
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this
    }
    ll.exports = jE
  })
  var un = S((zq, dl) => {
    l()
    c()
    d()
    var $E = Zs(),
      HE = al(),
      UE = il(),
      zE = sl(),
      GE = cl()
    function qt(e) {
      var t = -1,
        r = e == null ? 0 : e.length
      for (this.clear(); ++t < r; ) {
        var n = e[t]
        this.set(n[0], n[1])
      }
    }
    qt.prototype.clear = $E
    qt.prototype.delete = HE
    qt.prototype.get = UE
    qt.prototype.has = zE
    qt.prototype.set = GE
    dl.exports = qt
  })
  var fl = S((Kq, pl) => {
    l()
    c()
    d()
    var WE = vr(),
      VE = on(),
      KE = un(),
      YE = 200
    function XE(e, t) {
      var r = this.__data__
      if (r instanceof WE) {
        var n = r.__data__
        if (!VE || n.length < YE - 1) return n.push([e, t]), (this.size = ++r.size), this
        r = this.__data__ = new KE(n)
      }
      return r.set(e, t), (this.size = r.size), this
    }
    pl.exports = XE
  })
  var sn = S((Qq, hl) => {
    l()
    c()
    d()
    var JE = vr(),
      QE = as(),
      ZE = is(),
      eA = ss(),
      tA = cs(),
      rA = fl()
    function jt(e) {
      var t = (this.__data__ = new JE(e))
      this.size = t.size
    }
    jt.prototype.clear = QE
    jt.prototype.delete = ZE
    jt.prototype.get = eA
    jt.prototype.has = tA
    jt.prototype.set = rA
    hl.exports = jt
  })
  var gl = S((rj, ml) => {
    l()
    c()
    d()
    var nA = '__lodash_hash_undefined__'
    function aA(e) {
      return this.__data__.set(e, nA), this
    }
    ml.exports = aA
  })
  var bl = S((ij, yl) => {
    l()
    c()
    d()
    function oA(e) {
      return this.__data__.has(e)
    }
    yl.exports = oA
  })
  var so = S((cj, El) => {
    l()
    c()
    d()
    var iA = un(),
      uA = gl(),
      sA = bl()
    function ln(e) {
      var t = -1,
        r = e == null ? 0 : e.length
      for (this.__data__ = new iA(); ++t < r; ) this.add(e[t])
    }
    ln.prototype.add = ln.prototype.push = uA
    ln.prototype.has = sA
    El.exports = ln
  })
  var vl = S((hj, Al) => {
    l()
    c()
    d()
    function lA(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; ) if (t(e[r], r, e)) return !0
      return !1
    }
    Al.exports = lA
  })
  var lo = S((bj, Dl) => {
    l()
    c()
    d()
    function cA(e, t) {
      return e.has(t)
    }
    Dl.exports = cA
  })
  var co = S((Dj, Cl) => {
    l()
    c()
    d()
    var dA = so(),
      pA = vl(),
      fA = lo(),
      hA = 1,
      mA = 2
    function gA(e, t, r, n, a, o) {
      var i = r & hA,
        u = e.length,
        s = t.length
      if (u != s && !(i && s > u)) return !1
      var p = o.get(e),
        y = o.get(t)
      if (p && y) return p == t && y == e
      var E = -1,
        m = !0,
        g = r & mA ? new dA() : void 0
      for (o.set(e, t), o.set(t, e); ++E < u; ) {
        var A = e[E],
          b = t[E]
        if (n) var x = i ? n(b, A, E, t, e, o) : n(A, b, E, e, t, o)
        if (x !== void 0) {
          if (x) continue
          m = !1
          break
        }
        if (g) {
          if (
            !pA(t, function (F, B) {
              if (!fA(g, B) && (A === F || a(A, F, r, n, o))) return g.push(B)
            })
          ) {
            m = !1
            break
          }
        } else if (!(A === b || a(A, b, r, n, o))) {
          m = !1
          break
        }
      }
      return o.delete(e), o.delete(t), m
    }
    Cl.exports = gA
  })
  var po = S((Fj, xl) => {
    l()
    c()
    d()
    var yA = $e(),
      bA = yA.Uint8Array
    xl.exports = bA
  })
  var Fl = S((_j, Sl) => {
    l()
    c()
    d()
    function EA(e) {
      var t = -1,
        r = Array(e.size)
      return (
        e.forEach(function (n, a) {
          r[++t] = [a, n]
        }),
        r
      )
    }
    Sl.exports = EA
  })
  var cn = S((Ij, wl) => {
    l()
    c()
    d()
    function AA(e) {
      var t = -1,
        r = Array(e.size)
      return (
        e.forEach(function (n) {
          r[++t] = n
        }),
        r
      )
    }
    wl.exports = AA
  })
  var Rl = S((Mj, Ol) => {
    l()
    c()
    d()
    var Bl = vt(),
      Tl = po(),
      vA = an(),
      DA = co(),
      CA = Fl(),
      xA = cn(),
      SA = 1,
      FA = 2,
      wA = '[object Boolean]',
      BA = '[object Date]',
      TA = '[object Error]',
      _A = '[object Map]',
      OA = '[object Number]',
      RA = '[object RegExp]',
      PA = '[object Set]',
      IA = '[object String]',
      kA = '[object Symbol]',
      NA = '[object ArrayBuffer]',
      LA = '[object DataView]',
      _l = Bl ? Bl.prototype : void 0,
      fo = _l ? _l.valueOf : void 0
    function MA(e, t, r, n, a, o, i) {
      switch (r) {
        case LA:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1
          ;(e = e.buffer), (t = t.buffer)
        case NA:
          return !(e.byteLength != t.byteLength || !o(new Tl(e), new Tl(t)))
        case wA:
        case BA:
        case OA:
          return vA(+e, +t)
        case TA:
          return e.name == t.name && e.message == t.message
        case RA:
        case IA:
          return e == t + ''
        case _A:
          var u = CA
        case PA:
          var s = n & SA
          if ((u || (u = xA), e.size != t.size && !s)) return !1
          var p = i.get(e)
          if (p) return p == t
          ;(n |= FA), i.set(e, t)
          var y = DA(u(e), u(t), n, a, o, i)
          return i.delete(e), y
        case kA:
          if (fo) return fo.call(e) == fo.call(t)
      }
      return !1
    }
    Ol.exports = MA
  })
  var dn = S((Hj, Pl) => {
    l()
    c()
    d()
    function qA(e, t) {
      for (var r = -1, n = t.length, a = e.length; ++r < n; ) e[a + r] = t[r]
      return e
    }
    Pl.exports = qA
  })
  var We = S((Wj, Il) => {
    l()
    c()
    d()
    var jA = Array.isArray
    Il.exports = jA
  })
  var ho = S((Xj, kl) => {
    l()
    c()
    d()
    var $A = dn(),
      HA = We()
    function UA(e, t, r) {
      var n = t(e)
      return HA(e) ? n : $A(n, r(e))
    }
    kl.exports = UA
  })
  var Ll = S((e$, Nl) => {
    l()
    c()
    d()
    function zA(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, a = 0, o = []; ++r < n; ) {
        var i = e[r]
        t(i, r, e) && (o[a++] = i)
      }
      return o
    }
    Nl.exports = zA
  })
  var mo = S((a$, Ml) => {
    l()
    c()
    d()
    function GA() {
      return []
    }
    Ml.exports = GA
  })
  var pn = S((s$, jl) => {
    l()
    c()
    d()
    var WA = Ll(),
      VA = mo(),
      KA = Object.prototype,
      YA = KA.propertyIsEnumerable,
      ql = Object.getOwnPropertySymbols,
      XA = ql
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                WA(ql(e), function (t) {
                  return YA.call(e, t)
                }))
          }
        : VA
    jl.exports = XA
  })
  var Hl = S((p$, $l) => {
    l()
    c()
    d()
    function JA(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r)
      return n
    }
    $l.exports = JA
  })
  var rt = S((g$, Ul) => {
    l()
    c()
    d()
    function QA(e) {
      return e != null && typeof e == 'object'
    }
    Ul.exports = QA
  })
  var Gl = S((A$, zl) => {
    l()
    c()
    d()
    var ZA = Dt(),
      ev = rt(),
      tv = '[object Arguments]'
    function rv(e) {
      return ev(e) && ZA(e) == tv
    }
    zl.exports = rv
  })
  var fn = S((x$, Kl) => {
    l()
    c()
    d()
    var Wl = Gl(),
      nv = rt(),
      Vl = Object.prototype,
      av = Vl.hasOwnProperty,
      ov = Vl.propertyIsEnumerable,
      iv = Wl(
        (function () {
          return arguments
        })()
      )
        ? Wl
        : function (e) {
            return nv(e) && av.call(e, 'callee') && !ov.call(e, 'callee')
          }
    Kl.exports = iv
  })
  var Xl = S((B$, Yl) => {
    l()
    c()
    d()
    function uv() {
      return !1
    }
    Yl.exports = uv
  })
  var hn = S((Sr, $t) => {
    l()
    c()
    d()
    var sv = $e(),
      lv = Xl(),
      Zl = typeof Sr == 'object' && Sr && !Sr.nodeType && Sr,
      Jl = Zl && typeof $t == 'object' && $t && !$t.nodeType && $t,
      cv = Jl && Jl.exports === Zl,
      Ql = cv ? sv.Buffer : void 0,
      dv = Ql ? Ql.isBuffer : void 0,
      pv = dv || lv
    $t.exports = pv
  })
  var mn = S((k$, ec) => {
    l()
    c()
    d()
    var fv = 9007199254740991,
      hv = /^(?:0|[1-9]\d*)$/
    function mv(e, t) {
      var r = typeof e
      return (
        (t = t ?? fv),
        !!t && (r == 'number' || (r != 'symbol' && hv.test(e))) && e > -1 && e % 1 == 0 && e < t
      )
    }
    ec.exports = mv
  })
  var gn = S((q$, tc) => {
    l()
    c()
    d()
    var gv = 9007199254740991
    function yv(e) {
      return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= gv
    }
    tc.exports = yv
  })
  var nc = S((U$, rc) => {
    l()
    c()
    d()
    var bv = Dt(),
      Ev = gn(),
      Av = rt(),
      vv = '[object Arguments]',
      Dv = '[object Array]',
      Cv = '[object Boolean]',
      xv = '[object Date]',
      Sv = '[object Error]',
      Fv = '[object Function]',
      wv = '[object Map]',
      Bv = '[object Number]',
      Tv = '[object Object]',
      _v = '[object RegExp]',
      Ov = '[object Set]',
      Rv = '[object String]',
      Pv = '[object WeakMap]',
      Iv = '[object ArrayBuffer]',
      kv = '[object DataView]',
      Nv = '[object Float32Array]',
      Lv = '[object Float64Array]',
      Mv = '[object Int8Array]',
      qv = '[object Int16Array]',
      jv = '[object Int32Array]',
      $v = '[object Uint8Array]',
      Hv = '[object Uint8ClampedArray]',
      Uv = '[object Uint16Array]',
      zv = '[object Uint32Array]',
      ce = {}
    ce[Nv] = ce[Lv] = ce[Mv] = ce[qv] = ce[jv] = ce[$v] = ce[Hv] = ce[Uv] = ce[zv] = !0
    ce[vv] =
      ce[Dv] =
      ce[Iv] =
      ce[Cv] =
      ce[kv] =
      ce[xv] =
      ce[Sv] =
      ce[Fv] =
      ce[wv] =
      ce[Bv] =
      ce[Tv] =
      ce[_v] =
      ce[Ov] =
      ce[Rv] =
      ce[Pv] =
        !1
    function Gv(e) {
      return Av(e) && Ev(e.length) && !!ce[bv(e)]
    }
    rc.exports = Gv
  })
  var yn = S((V$, ac) => {
    l()
    c()
    d()
    function Wv(e) {
      return function (t) {
        return e(t)
      }
    }
    ac.exports = Wv
  })
  var bn = S((Fr, Ht) => {
    l()
    c()
    d()
    var Vv = ao(),
      oc = typeof Fr == 'object' && Fr && !Fr.nodeType && Fr,
      wr = oc && typeof Ht == 'object' && Ht && !Ht.nodeType && Ht,
      Kv = wr && wr.exports === oc,
      go = Kv && Vv.process,
      Yv = (function () {
        try {
          var e = wr && wr.require && wr.require('util').types
          return e || (go && go.binding && go.binding('util'))
        } catch {}
      })()
    Ht.exports = Yv
  })
  var yo = S((eH, sc) => {
    l()
    c()
    d()
    var Xv = nc(),
      Jv = yn(),
      ic = bn(),
      uc = ic && ic.isTypedArray,
      Qv = uc ? Jv(uc) : Xv
    sc.exports = Qv
  })
  var bo = S((aH, lc) => {
    l()
    c()
    d()
    var Zv = Hl(),
      eD = fn(),
      tD = We(),
      rD = hn(),
      nD = mn(),
      aD = yo(),
      oD = Object.prototype,
      iD = oD.hasOwnProperty
    function uD(e, t) {
      var r = tD(e),
        n = !r && eD(e),
        a = !r && !n && rD(e),
        o = !r && !n && !a && aD(e),
        i = r || n || a || o,
        u = i ? Zv(e.length, String) : [],
        s = u.length
      for (var p in e)
        (t || iD.call(e, p)) &&
          !(
            i &&
            (p == 'length' ||
              (a && (p == 'offset' || p == 'parent')) ||
              (o && (p == 'buffer' || p == 'byteLength' || p == 'byteOffset')) ||
              nD(p, s))
          ) &&
          u.push(p)
      return u
    }
    lc.exports = uD
  })
  var En = S((sH, cc) => {
    l()
    c()
    d()
    var sD = Object.prototype
    function lD(e) {
      var t = e && e.constructor,
        r = (typeof t == 'function' && t.prototype) || sD
      return e === r
    }
    cc.exports = lD
  })
  var Eo = S((pH, dc) => {
    l()
    c()
    d()
    function cD(e, t) {
      return function (r) {
        return e(t(r))
      }
    }
    dc.exports = cD
  })
  var fc = S((gH, pc) => {
    l()
    c()
    d()
    var dD = Eo(),
      pD = dD(Object.keys, Object)
    pc.exports = pD
  })
  var mc = S((AH, hc) => {
    l()
    c()
    d()
    var fD = En(),
      hD = fc(),
      mD = Object.prototype,
      gD = mD.hasOwnProperty
    function yD(e) {
      if (!fD(e)) return hD(e)
      var t = []
      for (var r in Object(e)) gD.call(e, r) && r != 'constructor' && t.push(r)
      return t
    }
    hc.exports = yD
  })
  var Ao = S((xH, gc) => {
    l()
    c()
    d()
    var bD = oo(),
      ED = gn()
    function AD(e) {
      return e != null && ED(e.length) && !bD(e)
    }
    gc.exports = AD
  })
  var Ut = S((BH, yc) => {
    l()
    c()
    d()
    var vD = bo(),
      DD = mc(),
      CD = Ao()
    function xD(e) {
      return CD(e) ? vD(e) : DD(e)
    }
    yc.exports = xD
  })
  var vo = S((RH, bc) => {
    l()
    c()
    d()
    var SD = ho(),
      FD = pn(),
      wD = Ut()
    function BD(e) {
      return SD(e, wD, FD)
    }
    bc.exports = BD
  })
  var vc = S((NH, Ac) => {
    l()
    c()
    d()
    var Ec = vo(),
      TD = 1,
      _D = Object.prototype,
      OD = _D.hasOwnProperty
    function RD(e, t, r, n, a, o) {
      var i = r & TD,
        u = Ec(e),
        s = u.length,
        p = Ec(t),
        y = p.length
      if (s != y && !i) return !1
      for (var E = s; E--; ) {
        var m = u[E]
        if (!(i ? m in t : OD.call(t, m))) return !1
      }
      var g = o.get(e),
        A = o.get(t)
      if (g && A) return g == t && A == e
      var b = !0
      o.set(e, t), o.set(t, e)
      for (var x = i; ++E < s; ) {
        m = u[E]
        var F = e[m],
          B = t[m]
        if (n) var I = i ? n(B, F, m, t, e, o) : n(F, B, m, e, t, o)
        if (!(I === void 0 ? F === B || a(F, B, r, n, o) : I)) {
          b = !1
          break
        }
        x || (x = m == 'constructor')
      }
      if (b && !x) {
        var M = e.constructor,
          w = t.constructor
        M != w &&
          'constructor' in e &&
          'constructor' in t &&
          !(typeof M == 'function' && M instanceof M && typeof w == 'function' && w instanceof w) &&
          (b = !1)
      }
      return o.delete(e), o.delete(t), b
    }
    Ac.exports = RD
  })
  var Cc = S((jH, Dc) => {
    l()
    c()
    d()
    var PD = lt(),
      ID = $e(),
      kD = PD(ID, 'DataView')
    Dc.exports = kD
  })
  var Sc = S((zH, xc) => {
    l()
    c()
    d()
    var ND = lt(),
      LD = $e(),
      MD = ND(LD, 'Promise')
    xc.exports = MD
  })
  var Do = S((KH, Fc) => {
    l()
    c()
    d()
    var qD = lt(),
      jD = $e(),
      $D = qD(jD, 'Set')
    Fc.exports = $D
  })
  var Bc = S((QH, wc) => {
    l()
    c()
    d()
    var HD = lt(),
      UD = $e(),
      zD = HD(UD, 'WeakMap')
    wc.exports = zD
  })
  var Br = S((rU, kc) => {
    l()
    c()
    d()
    var Co = Cc(),
      xo = on(),
      So = Sc(),
      Fo = Do(),
      wo = Bc(),
      Ic = Dt(),
      zt = uo(),
      Tc = '[object Map]',
      GD = '[object Object]',
      _c = '[object Promise]',
      Oc = '[object Set]',
      Rc = '[object WeakMap]',
      Pc = '[object DataView]',
      WD = zt(Co),
      VD = zt(xo),
      KD = zt(So),
      YD = zt(Fo),
      XD = zt(wo),
      Ct = Ic
    ;((Co && Ct(new Co(new ArrayBuffer(1))) != Pc) ||
      (xo && Ct(new xo()) != Tc) ||
      (So && Ct(So.resolve()) != _c) ||
      (Fo && Ct(new Fo()) != Oc) ||
      (wo && Ct(new wo()) != Rc)) &&
      (Ct = function (e) {
        var t = Ic(e),
          r = t == GD ? e.constructor : void 0,
          n = r ? zt(r) : ''
        if (n)
          switch (n) {
            case WD:
              return Pc
            case VD:
              return Tc
            case KD:
              return _c
            case YD:
              return Oc
            case XD:
              return Rc
          }
        return t
      })
    kc.exports = Ct
  })
  var Uc = S((iU, Hc) => {
    l()
    c()
    d()
    var Bo = sn(),
      JD = co(),
      QD = Rl(),
      ZD = vc(),
      Nc = Br(),
      Lc = We(),
      Mc = hn(),
      eC = yo(),
      tC = 1,
      qc = '[object Arguments]',
      jc = '[object Array]',
      An = '[object Object]',
      rC = Object.prototype,
      $c = rC.hasOwnProperty
    function nC(e, t, r, n, a, o) {
      var i = Lc(e),
        u = Lc(t),
        s = i ? jc : Nc(e),
        p = u ? jc : Nc(t)
      ;(s = s == qc ? An : s), (p = p == qc ? An : p)
      var y = s == An,
        E = p == An,
        m = s == p
      if (m && Mc(e)) {
        if (!Mc(t)) return !1
        ;(i = !0), (y = !1)
      }
      if (m && !y)
        return o || (o = new Bo()), i || eC(e) ? JD(e, t, r, n, a, o) : QD(e, t, s, r, n, a, o)
      if (!(r & tC)) {
        var g = y && $c.call(e, '__wrapped__'),
          A = E && $c.call(t, '__wrapped__')
        if (g || A) {
          var b = g ? e.value() : e,
            x = A ? t.value() : t
          return o || (o = new Bo()), a(b, x, r, n, o)
        }
      }
      return m ? (o || (o = new Bo()), ZD(e, t, r, n, a, o)) : !1
    }
    Hc.exports = nC
  })
  var To = S((cU, Wc) => {
    l()
    c()
    d()
    var aC = Uc(),
      zc = rt()
    function Gc(e, t, r, n, a) {
      return e === t
        ? !0
        : e == null || t == null || (!zc(e) && !zc(t))
        ? e !== e && t !== t
        : aC(e, t, r, n, Gc, a)
    }
    Wc.exports = Gc
  })
  var Kc = S((hU, Vc) => {
    l()
    c()
    d()
    var oC = sn(),
      iC = To(),
      uC = 1,
      sC = 2
    function lC(e, t, r, n) {
      var a = r.length,
        o = a,
        i = !n
      if (e == null) return !o
      for (e = Object(e); a--; ) {
        var u = r[a]
        if (i && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1
      }
      for (; ++a < o; ) {
        u = r[a]
        var s = u[0],
          p = e[s],
          y = u[1]
        if (i && u[2]) {
          if (p === void 0 && !(s in e)) return !1
        } else {
          var E = new oC()
          if (n) var m = n(p, y, s, e, t, E)
          if (!(m === void 0 ? iC(y, p, uC | sC, n, E) : m)) return !1
        }
      }
      return !0
    }
    Vc.exports = lC
  })
  var _o = S((bU, Yc) => {
    l()
    c()
    d()
    var cC = Ge()
    function dC(e) {
      return e === e && !cC(e)
    }
    Yc.exports = dC
  })
  var Jc = S((DU, Xc) => {
    l()
    c()
    d()
    var pC = _o(),
      fC = Ut()
    function hC(e) {
      for (var t = fC(e), r = t.length; r--; ) {
        var n = t[r],
          a = e[n]
        t[r] = [n, a, pC(a)]
      }
      return t
    }
    Xc.exports = hC
  })
  var Oo = S((FU, Qc) => {
    l()
    c()
    d()
    function mC(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
      }
    }
    Qc.exports = mC
  })
  var ed = S((_U, Zc) => {
    l()
    c()
    d()
    var gC = Kc(),
      yC = Jc(),
      bC = Oo()
    function EC(e) {
      var t = yC(e)
      return t.length == 1 && t[0][2]
        ? bC(t[0][0], t[0][1])
        : function (r) {
            return r === e || gC(r, e, t)
          }
    }
    Zc.exports = EC
  })
  var Tr = S((IU, td) => {
    l()
    c()
    d()
    var AC = Dt(),
      vC = rt(),
      DC = '[object Symbol]'
    function CC(e) {
      return typeof e == 'symbol' || (vC(e) && AC(e) == DC)
    }
    td.exports = CC
  })
  var vn = S((MU, rd) => {
    l()
    c()
    d()
    var xC = We(),
      SC = Tr(),
      FC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      wC = /^\w*$/
    function BC(e, t) {
      if (xC(e)) return !1
      var r = typeof e
      return r == 'number' || r == 'symbol' || r == 'boolean' || e == null || SC(e)
        ? !0
        : wC.test(e) || !FC.test(e) || (t != null && e in Object(t))
    }
    rd.exports = BC
  })
  var od = S((HU, ad) => {
    l()
    c()
    d()
    var nd = un(),
      TC = 'Expected a function'
    function Ro(e, t) {
      if (typeof e != 'function' || (t != null && typeof t != 'function')) throw new TypeError(TC)
      var r = function () {
        var n = arguments,
          a = t ? t.apply(this, n) : n[0],
          o = r.cache
        if (o.has(a)) return o.get(a)
        var i = e.apply(this, n)
        return (r.cache = o.set(a, i) || o), i
      }
      return (r.cache = new (Ro.Cache || nd)()), r
    }
    Ro.Cache = nd
    ad.exports = Ro
  })
  var ud = S((WU, id) => {
    l()
    c()
    d()
    var _C = od(),
      OC = 500
    function RC(e) {
      var t = _C(e, function (n) {
          return r.size === OC && r.clear(), n
        }),
        r = t.cache
      return t
    }
    id.exports = RC
  })
  var ld = S((XU, sd) => {
    l()
    c()
    d()
    var PC = ud(),
      IC =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      kC = /\\(\\)?/g,
      NC = PC(function (e) {
        var t = []
        return (
          e.charCodeAt(0) === 46 && t.push(''),
          e.replace(IC, function (r, n, a, o) {
            t.push(a ? o.replace(kC, '$1') : n || r)
          }),
          t
        )
      })
    sd.exports = NC
  })
  var md = S((ez, hd) => {
    l()
    c()
    d()
    var cd = vt(),
      LC = no(),
      MC = We(),
      qC = Tr(),
      jC = 1 / 0,
      dd = cd ? cd.prototype : void 0,
      pd = dd ? dd.toString : void 0
    function fd(e) {
      if (typeof e == 'string') return e
      if (MC(e)) return LC(e, fd) + ''
      if (qC(e)) return pd ? pd.call(e) : ''
      var t = e + ''
      return t == '0' && 1 / e == -jC ? '-0' : t
    }
    hd.exports = fd
  })
  var yd = S((az, gd) => {
    l()
    c()
    d()
    var $C = md()
    function HC(e) {
      return e == null ? '' : $C(e)
    }
    gd.exports = HC
  })
  var _r = S((sz, bd) => {
    l()
    c()
    d()
    var UC = We(),
      zC = vn(),
      GC = ld(),
      WC = yd()
    function VC(e, t) {
      return UC(e) ? e : zC(e, t) ? [e] : GC(WC(e))
    }
    bd.exports = VC
  })
  var Gt = S((pz, Ed) => {
    l()
    c()
    d()
    var KC = Tr(),
      YC = 1 / 0
    function XC(e) {
      if (typeof e == 'string' || KC(e)) return e
      var t = e + ''
      return t == '0' && 1 / e == -YC ? '-0' : t
    }
    Ed.exports = XC
  })
  var Dn = S((gz, Ad) => {
    l()
    c()
    d()
    var JC = _r(),
      QC = Gt()
    function ZC(e, t) {
      t = JC(t, e)
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[QC(t[r++])]
      return r && r == n ? e : void 0
    }
    Ad.exports = ZC
  })
  var Dd = S((Az, vd) => {
    l()
    c()
    d()
    var ex = Dn()
    function tx(e, t, r) {
      var n = e == null ? void 0 : ex(e, t)
      return n === void 0 ? r : n
    }
    vd.exports = tx
  })
  var xd = S((xz, Cd) => {
    l()
    c()
    d()
    function rx(e, t) {
      return e != null && t in Object(e)
    }
    Cd.exports = rx
  })
  var Fd = S((Bz, Sd) => {
    l()
    c()
    d()
    var nx = _r(),
      ax = fn(),
      ox = We(),
      ix = mn(),
      ux = gn(),
      sx = Gt()
    function lx(e, t, r) {
      t = nx(t, e)
      for (var n = -1, a = t.length, o = !1; ++n < a; ) {
        var i = sx(t[n])
        if (!(o = e != null && r(e, i))) break
        e = e[i]
      }
      return o || ++n != a
        ? o
        : ((a = e == null ? 0 : e.length), !!a && ux(a) && ix(i, a) && (ox(e) || ax(e)))
    }
    Sd.exports = lx
  })
  var Po = S((Rz, wd) => {
    l()
    c()
    d()
    var cx = xd(),
      dx = Fd()
    function px(e, t) {
      return e != null && dx(e, t, cx)
    }
    wd.exports = px
  })
  var Td = S((Nz, Bd) => {
    l()
    c()
    d()
    var fx = To(),
      hx = Dd(),
      mx = Po(),
      gx = vn(),
      yx = _o(),
      bx = Oo(),
      Ex = Gt(),
      Ax = 1,
      vx = 2
    function Dx(e, t) {
      return gx(e) && yx(t)
        ? bx(Ex(e), t)
        : function (r) {
            var n = hx(r, e)
            return n === void 0 && n === t ? mx(r, e) : fx(t, n, Ax | vx)
          }
    }
    Bd.exports = Dx
  })
  var Io = S((jz, _d) => {
    l()
    c()
    d()
    function Cx(e) {
      return e
    }
    _d.exports = Cx
  })
  var Rd = S((zz, Od) => {
    l()
    c()
    d()
    function xx(e) {
      return function (t) {
        return t?.[e]
      }
    }
    Od.exports = xx
  })
  var Id = S((Kz, Pd) => {
    l()
    c()
    d()
    var Sx = Dn()
    function Fx(e) {
      return function (t) {
        return Sx(t, e)
      }
    }
    Pd.exports = Fx
  })
  var Nd = S((Qz, kd) => {
    l()
    c()
    d()
    var wx = Rd(),
      Bx = Id(),
      Tx = vn(),
      _x = Gt()
    function Ox(e) {
      return Tx(e) ? wx(_x(e)) : Bx(e)
    }
    kd.exports = Ox
  })
  var ko = S((rG, Ld) => {
    l()
    c()
    d()
    var Rx = ed(),
      Px = Td(),
      Ix = Io(),
      kx = We(),
      Nx = Nd()
    function Lx(e) {
      return typeof e == 'function'
        ? e
        : e == null
        ? Ix
        : typeof e == 'object'
        ? kx(e)
          ? Px(e[0], e[1])
          : Rx(e)
        : Nx(e)
    }
    Ld.exports = Lx
  })
  var No = S((iG, Md) => {
    l()
    c()
    d()
    var Mx = lt(),
      qx = (function () {
        try {
          var e = Mx(Object, 'defineProperty')
          return e({}, '', {}), e
        } catch {}
      })()
    Md.exports = qx
  })
  var Cn = S((cG, jd) => {
    l()
    c()
    d()
    var qd = No()
    function jx(e, t, r) {
      t == '__proto__' && qd
        ? qd(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r)
    }
    jd.exports = jx
  })
  var xn = S((hG, $d) => {
    l()
    c()
    d()
    var $x = Cn(),
      Hx = an(),
      Ux = Object.prototype,
      zx = Ux.hasOwnProperty
    function Gx(e, t, r) {
      var n = e[t]
      ;(!(zx.call(e, t) && Hx(n, r)) || (r === void 0 && !(t in e))) && $x(e, t, r)
    }
    $d.exports = Gx
  })
  var zd = S((bG, Ud) => {
    l()
    c()
    d()
    var Wx = xn(),
      Vx = _r(),
      Kx = mn(),
      Hd = Ge(),
      Yx = Gt()
    function Xx(e, t, r, n) {
      if (!Hd(e)) return e
      t = Vx(t, e)
      for (var a = -1, o = t.length, i = o - 1, u = e; u != null && ++a < o; ) {
        var s = Yx(t[a]),
          p = r
        if (s === '__proto__' || s === 'constructor' || s === 'prototype') return e
        if (a != i) {
          var y = u[s]
          ;(p = n ? n(y, s, u) : void 0), p === void 0 && (p = Hd(y) ? y : Kx(t[a + 1]) ? [] : {})
        }
        Wx(u, s, p), (u = u[s])
      }
      return e
    }
    Ud.exports = Xx
  })
  var Lo = S((DG, Gd) => {
    l()
    c()
    d()
    var Jx = Dn(),
      Qx = zd(),
      Zx = _r()
    function eS(e, t, r) {
      for (var n = -1, a = t.length, o = {}; ++n < a; ) {
        var i = t[n],
          u = Jx(e, i)
        r(u, i) && Qx(o, Zx(i, e), u)
      }
      return o
    }
    Gd.exports = eS
  })
  var Sn = S((FG, Wd) => {
    l()
    c()
    d()
    var tS = Eo(),
      rS = tS(Object.getPrototypeOf, Object)
    Wd.exports = rS
  })
  var Mo = S((_G, Vd) => {
    l()
    c()
    d()
    var nS = dn(),
      aS = Sn(),
      oS = pn(),
      iS = mo(),
      uS = Object.getOwnPropertySymbols,
      sS = uS
        ? function (e) {
            for (var t = []; e; ) nS(t, oS(e)), (e = aS(e))
            return t
          }
        : iS
    Vd.exports = sS
  })
  var Yd = S((IG, Kd) => {
    l()
    c()
    d()
    function lS(e) {
      var t = []
      if (e != null) for (var r in Object(e)) t.push(r)
      return t
    }
    Kd.exports = lS
  })
  var Jd = S((MG, Xd) => {
    l()
    c()
    d()
    var cS = Ge(),
      dS = En(),
      pS = Yd(),
      fS = Object.prototype,
      hS = fS.hasOwnProperty
    function mS(e) {
      if (!cS(e)) return pS(e)
      var t = dS(e),
        r = []
      for (var n in e) (n == 'constructor' && (t || !hS.call(e, n))) || r.push(n)
      return r
    }
    Xd.exports = mS
  })
  var Fn = S((HG, Qd) => {
    l()
    c()
    d()
    var gS = bo(),
      yS = Jd(),
      bS = Ao()
    function ES(e) {
      return bS(e) ? gS(e, !0) : yS(e)
    }
    Qd.exports = ES
  })
  var qo = S((WG, Zd) => {
    l()
    c()
    d()
    var AS = ho(),
      vS = Mo(),
      DS = Fn()
    function CS(e) {
      return AS(e, DS, vS)
    }
    Zd.exports = CS
  })
  var jo = S((XG, ep) => {
    l()
    c()
    d()
    var xS = no(),
      SS = ko(),
      FS = Lo(),
      wS = qo()
    function BS(e, t) {
      if (e == null) return {}
      var r = xS(wS(e), function (n) {
        return [n]
      })
      return (
        (t = SS(t)),
        FS(e, r, function (n, a) {
          return t(n, a[0])
        })
      )
    }
    ep.exports = BS
  })
  var Tn = S((_p, Jo) => {
    l()
    c()
    d()
    ;(function (e) {
      if (typeof _p == 'object' && typeof Jo < 'u') Jo.exports = e()
      else if (typeof define == 'function' && define.amd) define([], e)
      else {
        var t
        typeof window < 'u' || typeof window < 'u'
          ? (t = window)
          : typeof self < 'u'
          ? (t = self)
          : (t = this),
          (t.memoizerific = e())
      }
    })(function () {
      var e, t, r
      return (function n(a, o, i) {
        function u(y, E) {
          if (!o[y]) {
            if (!a[y]) {
              var m = typeof pr == 'function' && pr
              if (!E && m) return m(y, !0)
              if (s) return s(y, !0)
              var g = new Error("Cannot find module '" + y + "'")
              throw ((g.code = 'MODULE_NOT_FOUND'), g)
            }
            var A = (o[y] = { exports: {} })
            a[y][0].call(
              A.exports,
              function (b) {
                var x = a[y][1][b]
                return u(x || b)
              },
              A,
              A.exports,
              n,
              a,
              o,
              i
            )
          }
          return o[y].exports
        }
        for (var s = typeof pr == 'function' && pr, p = 0; p < i.length; p++) u(i[p])
        return u
      })(
        {
          1: [
            function (n, a, o) {
              a.exports = function (i) {
                if (typeof Map != 'function' || i) {
                  var u = n('./similar')
                  return new u()
                } else return new Map()
              }
            },
            { './similar': 2 },
          ],
          2: [
            function (n, a, o) {
              function i() {
                return (this.list = []), (this.lastItem = void 0), (this.size = 0), this
              }
              ;(i.prototype.get = function (u) {
                var s
                if (this.lastItem && this.isEqual(this.lastItem.key, u)) return this.lastItem.val
                if (((s = this.indexOf(u)), s >= 0))
                  return (this.lastItem = this.list[s]), this.list[s].val
              }),
                (i.prototype.set = function (u, s) {
                  var p
                  return this.lastItem && this.isEqual(this.lastItem.key, u)
                    ? ((this.lastItem.val = s), this)
                    : ((p = this.indexOf(u)),
                      p >= 0
                        ? ((this.lastItem = this.list[p]), (this.list[p].val = s), this)
                        : ((this.lastItem = { key: u, val: s }),
                          this.list.push(this.lastItem),
                          this.size++,
                          this))
                }),
                (i.prototype.delete = function (u) {
                  var s
                  if (
                    (this.lastItem &&
                      this.isEqual(this.lastItem.key, u) &&
                      (this.lastItem = void 0),
                    (s = this.indexOf(u)),
                    s >= 0)
                  )
                    return this.size--, this.list.splice(s, 1)[0]
                }),
                (i.prototype.has = function (u) {
                  var s
                  return this.lastItem && this.isEqual(this.lastItem.key, u)
                    ? !0
                    : ((s = this.indexOf(u)), s >= 0 ? ((this.lastItem = this.list[s]), !0) : !1)
                }),
                (i.prototype.forEach = function (u, s) {
                  var p
                  for (p = 0; p < this.size; p++)
                    u.call(s || this, this.list[p].val, this.list[p].key, this)
                }),
                (i.prototype.indexOf = function (u) {
                  var s
                  for (s = 0; s < this.size; s++) if (this.isEqual(this.list[s].key, u)) return s
                  return -1
                }),
                (i.prototype.isEqual = function (u, s) {
                  return u === s || (u !== u && s !== s)
                }),
                (a.exports = i)
            },
            {},
          ],
          3: [
            function (n, a, o) {
              var i = n('map-or-similar')
              a.exports = function (y) {
                var E = new i(!1),
                  m = []
                return function (g) {
                  var A = function () {
                    var b = E,
                      x,
                      F,
                      B = arguments.length - 1,
                      I = Array(B + 1),
                      M = !0,
                      w
                    if ((A.numArgs || A.numArgs === 0) && A.numArgs !== B + 1)
                      throw new Error(
                        'Memoizerific functions should always be called with the same number of arguments'
                      )
                    for (w = 0; w < B; w++) {
                      if (((I[w] = { cacheItem: b, arg: arguments[w] }), b.has(arguments[w]))) {
                        b = b.get(arguments[w])
                        continue
                      }
                      ;(M = !1), (x = new i(!1)), b.set(arguments[w], x), (b = x)
                    }
                    return (
                      M && (b.has(arguments[B]) ? (F = b.get(arguments[B])) : (M = !1)),
                      M || ((F = g.apply(null, arguments)), b.set(arguments[B], F)),
                      y > 0 &&
                        ((I[B] = { cacheItem: b, arg: arguments[B] }),
                        M ? u(m, I) : m.push(I),
                        m.length > y && s(m.shift())),
                      (A.wasMemoized = M),
                      (A.numArgs = B + 1),
                      F
                    )
                  }
                  return (A.limit = y), (A.wasMemoized = !1), (A.cache = E), (A.lru = m), A
                }
              }
              function u(y, E) {
                var m = y.length,
                  g = E.length,
                  A,
                  b,
                  x
                for (b = 0; b < m; b++) {
                  for (A = !0, x = 0; x < g; x++)
                    if (!p(y[b][x].arg, E[x].arg)) {
                      A = !1
                      break
                    }
                  if (A) break
                }
                y.push(y.splice(b, 1)[0])
              }
              function s(y) {
                var E = y.length,
                  m = y[E - 1],
                  g,
                  A
                for (
                  m.cacheItem.delete(m.arg), A = E - 2;
                  A >= 0 && ((m = y[A]), (g = m.cacheItem.get(m.arg)), !g || !g.size);
                  A--
                )
                  m.cacheItem.delete(m.arg)
              }
              function p(y, E) {
                return y === E || (y !== y && E !== E)
              }
            },
            { 'map-or-similar': 1 },
          ],
        },
        {},
        [3]
      )(3)
    })
  })
  var Rp = S((bW, Op) => {
    l()
    c()
    d()
    function HF(e, t, r, n) {
      for (var a = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < a; ) if (t(e[o], o, e)) return o
      return -1
    }
    Op.exports = HF
  })
  var Ip = S((DW, Pp) => {
    l()
    c()
    d()
    function UF(e) {
      return e !== e
    }
    Pp.exports = UF
  })
  var Np = S((FW, kp) => {
    l()
    c()
    d()
    function zF(e, t, r) {
      for (var n = r - 1, a = e.length; ++n < a; ) if (e[n] === t) return n
      return -1
    }
    kp.exports = zF
  })
  var Mp = S((_W, Lp) => {
    l()
    c()
    d()
    var GF = Rp(),
      WF = Ip(),
      VF = Np()
    function KF(e, t, r) {
      return t === t ? VF(e, t, r) : GF(e, WF, r)
    }
    Lp.exports = KF
  })
  var jp = S((IW, qp) => {
    l()
    c()
    d()
    var YF = Mp()
    function XF(e, t) {
      var r = e == null ? 0 : e.length
      return !!r && YF(e, t, 0) > -1
    }
    qp.exports = XF
  })
  var Hp = S((MW, $p) => {
    l()
    c()
    d()
    function JF(e, t, r) {
      for (var n = -1, a = e == null ? 0 : e.length; ++n < a; ) if (r(t, e[n])) return !0
      return !1
    }
    $p.exports = JF
  })
  var zp = S((HW, Up) => {
    l()
    c()
    d()
    function QF() {}
    Up.exports = QF
  })
  var Wp = S((WW, Gp) => {
    l()
    c()
    d()
    var Qo = Do(),
      ZF = zp(),
      ew = cn(),
      tw = 1 / 0,
      rw =
        Qo && 1 / ew(new Qo([, -0]))[1] == tw
          ? function (e) {
              return new Qo(e)
            }
          : ZF
    Gp.exports = rw
  })
  var Kp = S((XW, Vp) => {
    l()
    c()
    d()
    var nw = so(),
      aw = jp(),
      ow = Hp(),
      iw = lo(),
      uw = Wp(),
      sw = cn(),
      lw = 200
    function cw(e, t, r) {
      var n = -1,
        a = aw,
        o = e.length,
        i = !0,
        u = [],
        s = u
      if (r) (i = !1), (a = ow)
      else if (o >= lw) {
        var p = t ? null : uw(e)
        if (p) return sw(p)
        ;(i = !1), (a = iw), (s = new nw())
      } else s = t ? [] : u
      e: for (; ++n < o; ) {
        var y = e[n],
          E = t ? t(y) : y
        if (((y = r || y !== 0 ? y : 0), i && E === E)) {
          for (var m = s.length; m--; ) if (s[m] === E) continue e
          t && s.push(E), u.push(y)
        } else a(s, E, r) || (s !== u && s.push(E), u.push(y))
      }
      return u
    }
    Vp.exports = cw
  })
  var Xp = S((eV, Yp) => {
    l()
    c()
    d()
    var dw = Kp()
    function pw(e) {
      return e && e.length ? dw(e) : []
    }
    Yp.exports = pw
  })
  var Qp = S((aV, Jp) => {
    l()
    c()
    d()
    function fw(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; );
      return e
    }
    Jp.exports = fw
  })
  var Rr = S((sV, Zp) => {
    l()
    c()
    d()
    var hw = xn(),
      mw = Cn()
    function gw(e, t, r, n) {
      var a = !r
      r || (r = {})
      for (var o = -1, i = t.length; ++o < i; ) {
        var u = t[o],
          s = n ? n(r[u], e[u], u, r, e) : void 0
        s === void 0 && (s = e[u]), a ? mw(r, u, s) : hw(r, u, s)
      }
      return r
    }
    Zp.exports = gw
  })
  var tf = S((pV, ef) => {
    l()
    c()
    d()
    var yw = Rr(),
      bw = Ut()
    function Ew(e, t) {
      return e && yw(t, bw(t), e)
    }
    ef.exports = Ew
  })
  var nf = S((gV, rf) => {
    l()
    c()
    d()
    var Aw = Rr(),
      vw = Fn()
    function Dw(e, t) {
      return e && Aw(t, vw(t), e)
    }
    rf.exports = Dw
  })
  var lf = S((Pr, Vt) => {
    l()
    c()
    d()
    var Cw = $e(),
      sf = typeof Pr == 'object' && Pr && !Pr.nodeType && Pr,
      af = sf && typeof Vt == 'object' && Vt && !Vt.nodeType && Vt,
      xw = af && af.exports === sf,
      of = xw ? Cw.Buffer : void 0,
      uf = of ? of.allocUnsafe : void 0
    function Sw(e, t) {
      if (t) return e.slice()
      var r = e.length,
        n = uf ? uf(r) : new e.constructor(r)
      return e.copy(n), n
    }
    Vt.exports = Sw
  })
  var df = S((CV, cf) => {
    l()
    c()
    d()
    function Fw(e, t) {
      var r = -1,
        n = e.length
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r]
      return t
    }
    cf.exports = Fw
  })
  var ff = S((wV, pf) => {
    l()
    c()
    d()
    var ww = Rr(),
      Bw = pn()
    function Tw(e, t) {
      return ww(e, Bw(e), t)
    }
    pf.exports = Tw
  })
  var mf = S((OV, hf) => {
    l()
    c()
    d()
    var _w = Rr(),
      Ow = Mo()
    function Rw(e, t) {
      return _w(e, Ow(e), t)
    }
    hf.exports = Rw
  })
  var yf = S((kV, gf) => {
    l()
    c()
    d()
    var Pw = Object.prototype,
      Iw = Pw.hasOwnProperty
    function kw(e) {
      var t = e.length,
        r = new e.constructor(t)
      return (
        t &&
          typeof e[0] == 'string' &&
          Iw.call(e, 'index') &&
          ((r.index = e.index), (r.input = e.input)),
        r
      )
    }
    gf.exports = kw
  })
  var _n = S((qV, Ef) => {
    l()
    c()
    d()
    var bf = po()
    function Nw(e) {
      var t = new e.constructor(e.byteLength)
      return new bf(t).set(new bf(e)), t
    }
    Ef.exports = Nw
  })
  var vf = S((UV, Af) => {
    l()
    c()
    d()
    var Lw = _n()
    function Mw(e, t) {
      var r = t ? Lw(e.buffer) : e.buffer
      return new e.constructor(r, e.byteOffset, e.byteLength)
    }
    Af.exports = Mw
  })
  var Cf = S((VV, Df) => {
    l()
    c()
    d()
    var qw = /\w*$/
    function jw(e) {
      var t = new e.constructor(e.source, qw.exec(e))
      return (t.lastIndex = e.lastIndex), t
    }
    Df.exports = jw
  })
  var Bf = S((JV, wf) => {
    l()
    c()
    d()
    var xf = vt(),
      Sf = xf ? xf.prototype : void 0,
      Ff = Sf ? Sf.valueOf : void 0
    function $w(e) {
      return Ff ? Object(Ff.call(e)) : {}
    }
    wf.exports = $w
  })
  var _f = S((tK, Tf) => {
    l()
    c()
    d()
    var Hw = _n()
    function Uw(e, t) {
      var r = t ? Hw(e.buffer) : e.buffer
      return new e.constructor(r, e.byteOffset, e.length)
    }
    Tf.exports = Uw
  })
  var Rf = S((oK, Of) => {
    l()
    c()
    d()
    var zw = _n(),
      Gw = vf(),
      Ww = Cf(),
      Vw = Bf(),
      Kw = _f(),
      Yw = '[object Boolean]',
      Xw = '[object Date]',
      Jw = '[object Map]',
      Qw = '[object Number]',
      Zw = '[object RegExp]',
      e5 = '[object Set]',
      t5 = '[object String]',
      r5 = '[object Symbol]',
      n5 = '[object ArrayBuffer]',
      a5 = '[object DataView]',
      o5 = '[object Float32Array]',
      i5 = '[object Float64Array]',
      u5 = '[object Int8Array]',
      s5 = '[object Int16Array]',
      l5 = '[object Int32Array]',
      c5 = '[object Uint8Array]',
      d5 = '[object Uint8ClampedArray]',
      p5 = '[object Uint16Array]',
      f5 = '[object Uint32Array]'
    function h5(e, t, r) {
      var n = e.constructor
      switch (t) {
        case n5:
          return zw(e)
        case Yw:
        case Xw:
          return new n(+e)
        case a5:
          return Gw(e, r)
        case o5:
        case i5:
        case u5:
        case s5:
        case l5:
        case c5:
        case d5:
        case p5:
        case f5:
          return Kw(e, r)
        case Jw:
          return new n()
        case Qw:
        case t5:
          return new n(e)
        case Zw:
          return Ww(e)
        case e5:
          return new n()
        case r5:
          return Vw(e)
      }
    }
    Of.exports = h5
  })
  var kf = S((lK, If) => {
    l()
    c()
    d()
    var m5 = Ge(),
      Pf = Object.create,
      g5 = (function () {
        function e() {}
        return function (t) {
          if (!m5(t)) return {}
          if (Pf) return Pf(t)
          e.prototype = t
          var r = new e()
          return (e.prototype = void 0), r
        }
      })()
    If.exports = g5
  })
  var Lf = S((fK, Nf) => {
    l()
    c()
    d()
    var y5 = kf(),
      b5 = Sn(),
      E5 = En()
    function A5(e) {
      return typeof e.constructor == 'function' && !E5(e) ? y5(b5(e)) : {}
    }
    Nf.exports = A5
  })
  var qf = S((yK, Mf) => {
    l()
    c()
    d()
    var v5 = Br(),
      D5 = rt(),
      C5 = '[object Map]'
    function x5(e) {
      return D5(e) && v5(e) == C5
    }
    Mf.exports = x5
  })
  var Uf = S((vK, Hf) => {
    l()
    c()
    d()
    var S5 = qf(),
      F5 = yn(),
      jf = bn(),
      $f = jf && jf.isMap,
      w5 = $f ? F5($f) : S5
    Hf.exports = w5
  })
  var Gf = S((SK, zf) => {
    l()
    c()
    d()
    var B5 = Br(),
      T5 = rt(),
      _5 = '[object Set]'
    function O5(e) {
      return T5(e) && B5(e) == _5
    }
    zf.exports = O5
  })
  var Yf = S((TK, Kf) => {
    l()
    c()
    d()
    var R5 = Gf(),
      P5 = yn(),
      Wf = bn(),
      Vf = Wf && Wf.isSet,
      I5 = Vf ? P5(Vf) : R5
    Kf.exports = I5
  })
  var e0 = S((PK, Zf) => {
    l()
    c()
    d()
    var k5 = sn(),
      N5 = Qp(),
      L5 = xn(),
      M5 = tf(),
      q5 = nf(),
      j5 = lf(),
      $5 = df(),
      H5 = ff(),
      U5 = mf(),
      z5 = vo(),
      G5 = qo(),
      W5 = Br(),
      V5 = yf(),
      K5 = Rf(),
      Y5 = Lf(),
      X5 = We(),
      J5 = hn(),
      Q5 = Uf(),
      Z5 = Ge(),
      e3 = Yf(),
      t3 = Ut(),
      r3 = Fn(),
      n3 = 1,
      a3 = 2,
      o3 = 4,
      Xf = '[object Arguments]',
      i3 = '[object Array]',
      u3 = '[object Boolean]',
      s3 = '[object Date]',
      l3 = '[object Error]',
      Jf = '[object Function]',
      c3 = '[object GeneratorFunction]',
      d3 = '[object Map]',
      p3 = '[object Number]',
      Qf = '[object Object]',
      f3 = '[object RegExp]',
      h3 = '[object Set]',
      m3 = '[object String]',
      g3 = '[object Symbol]',
      y3 = '[object WeakMap]',
      b3 = '[object ArrayBuffer]',
      E3 = '[object DataView]',
      A3 = '[object Float32Array]',
      v3 = '[object Float64Array]',
      D3 = '[object Int8Array]',
      C3 = '[object Int16Array]',
      x3 = '[object Int32Array]',
      S3 = '[object Uint8Array]',
      F3 = '[object Uint8ClampedArray]',
      w3 = '[object Uint16Array]',
      B3 = '[object Uint32Array]',
      le = {}
    le[Xf] =
      le[i3] =
      le[b3] =
      le[E3] =
      le[u3] =
      le[s3] =
      le[A3] =
      le[v3] =
      le[D3] =
      le[C3] =
      le[x3] =
      le[d3] =
      le[p3] =
      le[Qf] =
      le[f3] =
      le[h3] =
      le[m3] =
      le[g3] =
      le[S3] =
      le[F3] =
      le[w3] =
      le[B3] =
        !0
    le[l3] = le[Jf] = le[y3] = !1
    function On(e, t, r, n, a, o) {
      var i,
        u = t & n3,
        s = t & a3,
        p = t & o3
      if ((r && (i = a ? r(e, n, a, o) : r(e)), i !== void 0)) return i
      if (!Z5(e)) return e
      var y = X5(e)
      if (y) {
        if (((i = V5(e)), !u)) return $5(e, i)
      } else {
        var E = W5(e),
          m = E == Jf || E == c3
        if (J5(e)) return j5(e, u)
        if (E == Qf || E == Xf || (m && !a)) {
          if (((i = s || m ? {} : Y5(e)), !u)) return s ? U5(e, q5(i, e)) : H5(e, M5(i, e))
        } else {
          if (!le[E]) return a ? e : {}
          i = K5(e, E, u)
        }
      }
      o || (o = new k5())
      var g = o.get(e)
      if (g) return g
      o.set(e, i),
        e3(e)
          ? e.forEach(function (x) {
              i.add(On(x, t, r, x, e, o))
            })
          : Q5(e) &&
            e.forEach(function (x, F) {
              i.set(F, On(x, t, r, F, e, o))
            })
      var A = p ? (s ? G5 : z5) : s ? r3 : t3,
        b = y ? void 0 : A(e)
      return (
        N5(b || e, function (x, F) {
          b && ((F = x), (x = e[F])), L5(i, F, On(x, t, r, F, e, o))
        }),
        i
      )
    }
    Zf.exports = On
  })
  var r0 = S((LK, t0) => {
    l()
    c()
    d()
    var T3 = e0(),
      _3 = 1,
      O3 = 4
    function R3(e) {
      return T3(e, _3 | O3)
    }
    t0.exports = R3
  })
  var d0 = S((xY, c0) => {
    l()
    c()
    d()
    function cB(e) {
      return function (t, r, n) {
        for (var a = -1, o = Object(t), i = n(t), u = i.length; u--; ) {
          var s = i[e ? u : ++a]
          if (r(o[s], s, o) === !1) break
        }
        return t
      }
    }
    c0.exports = cB
  })
  var f0 = S((BY, p0) => {
    l()
    c()
    d()
    var dB = d0(),
      pB = dB()
    p0.exports = pB
  })
  var m0 = S((RY, h0) => {
    l()
    c()
    d()
    var fB = f0(),
      hB = Ut()
    function mB(e, t) {
      return e && fB(e, t, hB)
    }
    h0.exports = mB
  })
  var Ln = S((NY, g0) => {
    l()
    c()
    d()
    var gB = Cn(),
      yB = m0(),
      bB = ko()
    function EB(e, t) {
      var r = {}
      return (
        (t = bB(t, 3)),
        yB(e, function (n, a, o) {
          gB(r, a, t(n, a, o))
        }),
        r
      )
    }
    g0.exports = EB
  })
  var b0 = S((jY, y0) => {
    l()
    c()
    d()
    var AB = Lo(),
      vB = Po()
    function DB(e, t) {
      return AB(e, t, function (r, n) {
        return vB(e, n)
      })
    }
    y0.exports = DB
  })
  var D0 = S((zY, v0) => {
    l()
    c()
    d()
    var E0 = vt(),
      CB = fn(),
      xB = We(),
      A0 = E0 ? E0.isConcatSpreadable : void 0
    function SB(e) {
      return xB(e) || CB(e) || !!(A0 && e && e[A0])
    }
    v0.exports = SB
  })
  var S0 = S((KY, x0) => {
    l()
    c()
    d()
    var FB = dn(),
      wB = D0()
    function C0(e, t, r, n, a) {
      var o = -1,
        i = e.length
      for (r || (r = wB), a || (a = []); ++o < i; ) {
        var u = e[o]
        t > 0 && r(u) ? (t > 1 ? C0(u, t - 1, r, n, a) : FB(a, u)) : n || (a[a.length] = u)
      }
      return a
    }
    x0.exports = C0
  })
  var w0 = S((QY, F0) => {
    l()
    c()
    d()
    var BB = S0()
    function TB(e) {
      var t = e == null ? 0 : e.length
      return t ? BB(e, 1) : []
    }
    F0.exports = TB
  })
  var T0 = S((rX, B0) => {
    l()
    c()
    d()
    function _B(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t)
        case 1:
          return e.call(t, r[0])
        case 2:
          return e.call(t, r[0], r[1])
        case 3:
          return e.call(t, r[0], r[1], r[2])
      }
      return e.apply(t, r)
    }
    B0.exports = _B
  })
  var R0 = S((iX, O0) => {
    l()
    c()
    d()
    var OB = T0(),
      _0 = Math.max
    function RB(e, t, r) {
      return (
        (t = _0(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (var n = arguments, a = -1, o = _0(n.length - t, 0), i = Array(o); ++a < o; )
            i[a] = n[t + a]
          a = -1
          for (var u = Array(t + 1); ++a < t; ) u[a] = n[a]
          return (u[t] = r(i)), OB(e, this, u)
        }
      )
    }
    O0.exports = RB
  })
  var I0 = S((cX, P0) => {
    l()
    c()
    d()
    function PB(e) {
      return function () {
        return e
      }
    }
    P0.exports = PB
  })
  var L0 = S((hX, N0) => {
    l()
    c()
    d()
    var IB = I0(),
      k0 = No(),
      kB = Io(),
      NB = k0
        ? function (e, t) {
            return k0(e, 'toString', {
              configurable: !0,
              enumerable: !1,
              value: IB(t),
              writable: !0,
            })
          }
        : kB
    N0.exports = NB
  })
  var q0 = S((bX, M0) => {
    l()
    c()
    d()
    var LB = 800,
      MB = 16,
      qB = Date.now
    function jB(e) {
      var t = 0,
        r = 0
      return function () {
        var n = qB(),
          a = MB - (n - r)
        if (((r = n), a > 0)) {
          if (++t >= LB) return arguments[0]
        } else t = 0
        return e.apply(void 0, arguments)
      }
    }
    M0.exports = jB
  })
  var $0 = S((DX, j0) => {
    l()
    c()
    d()
    var $B = L0(),
      HB = q0(),
      UB = HB($B)
    j0.exports = UB
  })
  var U0 = S((FX, H0) => {
    l()
    c()
    d()
    var zB = w0(),
      GB = R0(),
      WB = $0()
    function VB(e) {
      return WB(GB(e, void 0, zB), e + '')
    }
    H0.exports = VB
  })
  var G0 = S((_X, z0) => {
    l()
    c()
    d()
    var KB = b0(),
      YB = U0(),
      XB = YB(function (e, t) {
        return e == null ? {} : KB(e, t)
      })
    z0.exports = XB
  })
  var qn = S((IX, J0) => {
    'use strict'
    l()
    c()
    d()
    function Mn(e) {
      return Array.prototype.slice.apply(e)
    }
    var Y0 = 'pending',
      W0 = 'resolved',
      V0 = 'rejected'
    function ne(e) {
      ;(this.status = Y0),
        (this._continuations = []),
        (this._parent = null),
        (this._paused = !1),
        e && e.call(this, this._continueWith.bind(this), this._failWith.bind(this))
    }
    function Ir(e) {
      return e && typeof e.then == 'function'
    }
    function JB(e) {
      return e
    }
    ne.prototype = {
      then: function (e, t) {
        var r = ne.unresolved()._setParent(this)
        if (this._isRejected()) {
          if (this._paused)
            return this._continuations.push({ promise: r, nextFn: e, catchFn: t }), r
          if (t)
            try {
              var n = t(this._error)
              return Ir(n) ? (this._chainPromiseData(n, r), r) : ne.resolve(n)._setParent(this)
            } catch (a) {
              return ne.reject(a)._setParent(this)
            }
          return ne.reject(this._error)._setParent(this)
        }
        return (
          this._continuations.push({ promise: r, nextFn: e, catchFn: t }), this._runResolutions(), r
        )
      },
      catch: function (e) {
        if (this._isResolved()) return ne.resolve(this._data)._setParent(this)
        var t = ne.unresolved()._setParent(this)
        return this._continuations.push({ promise: t, catchFn: e }), this._runRejections(), t
      },
      finally: function (e) {
        var t = !1
        function r(n, a) {
          if (!t) {
            ;(t = !0), e || (e = JB)
            var o = e(n)
            return Ir(o)
              ? o.then(function () {
                  if (a) throw a
                  return n
                })
              : n
          }
        }
        return this.then(function (n) {
          return r(n)
        }).catch(function (n) {
          return r(null, n)
        })
      },
      pause: function () {
        return (this._paused = !0), this
      },
      resume: function () {
        var e = this._findFirstPaused()
        return e && ((e._paused = !1), e._runResolutions(), e._runRejections()), this
      },
      _findAncestry: function () {
        return this._continuations.reduce(function (e, t) {
          if (t.promise) {
            var r = { promise: t.promise, children: t.promise._findAncestry() }
            e.push(r)
          }
          return e
        }, [])
      },
      _setParent: function (e) {
        if (this._parent) throw new Error('parent already set')
        return (this._parent = e), this
      },
      _continueWith: function (e) {
        var t = this._findFirstPending()
        t && ((t._data = e), t._setResolved())
      },
      _findFirstPending: function () {
        return this._findFirstAncestor(function (e) {
          return e._isPending && e._isPending()
        })
      },
      _findFirstPaused: function () {
        return this._findFirstAncestor(function (e) {
          return e._paused
        })
      },
      _findFirstAncestor: function (e) {
        for (var t = this, r; t; ) e(t) && (r = t), (t = t._parent)
        return r
      },
      _failWith: function (e) {
        var t = this._findFirstPending()
        t && ((t._error = e), t._setRejected())
      },
      _takeContinuations: function () {
        return this._continuations.splice(0, this._continuations.length)
      },
      _runRejections: function () {
        if (!(this._paused || !this._isRejected())) {
          var e = this._error,
            t = this._takeContinuations(),
            r = this
          t.forEach(function (n) {
            if (n.catchFn)
              try {
                var a = n.catchFn(e)
                r._handleUserFunctionResult(a, n.promise)
              } catch (o) {
                n.promise.reject(o)
              }
            else n.promise.reject(e)
          })
        }
      },
      _runResolutions: function () {
        if (!(this._paused || !this._isResolved() || this._isPending())) {
          var e = this._takeContinuations(),
            t = this._data,
            r = this
          if (
            (e.forEach(function (n) {
              if (n.nextFn)
                try {
                  var a = n.nextFn(t)
                  r._handleUserFunctionResult(a, n.promise)
                } catch (o) {
                  r._handleResolutionError(o, n)
                }
              else n.promise && n.promise.resolve(t)
            }),
            Ir(this._data))
          )
            return this._handleWhenResolvedDataIsPromise(this._data)
        }
      },
      _handleResolutionError: function (e, t) {
        if ((this._setRejected(), t.catchFn))
          try {
            t.catchFn(e)
            return
          } catch (r) {
            e = r
          }
        t.promise && t.promise.reject(e)
      },
      _handleWhenResolvedDataIsPromise: function (e) {
        var t = this
        return e
          .then(function (r) {
            ;(t._data = r), t._runResolutions()
          })
          .catch(function (r) {
            ;(t._error = r), t._setRejected(), t._runRejections()
          })
      },
      _handleUserFunctionResult: function (e, t) {
        Ir(e) ? this._chainPromiseData(e, t) : t.resolve(e)
      },
      _chainPromiseData: function (e, t) {
        e.then(function (r) {
          t.resolve(r)
        }).catch(function (r) {
          t.reject(r)
        })
      },
      _setResolved: function () {
        ;(this.status = W0), this._paused || this._runResolutions()
      },
      _setRejected: function () {
        ;(this.status = V0), this._paused || this._runRejections()
      },
      _isPending: function () {
        return this.status === Y0
      },
      _isResolved: function () {
        return this.status === W0
      },
      _isRejected: function () {
        return this.status === V0
      },
    }
    ne.resolve = function (e) {
      return new ne(function (t, r) {
        Ir(e)
          ? e
              .then(function (n) {
                t(n)
              })
              .catch(function (n) {
                r(n)
              })
          : t(e)
      })
    }
    ne.reject = function (e) {
      return new ne(function (t, r) {
        r(e)
      })
    }
    ne.unresolved = function () {
      return new ne(function (e, t) {
        ;(this.resolve = e), (this.reject = t)
      })
    }
    ne.all = function () {
      var e = Mn(arguments)
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new ne(function (t, r) {
              var n = [],
                a = 0,
                o = function () {
                  a === e.length && t(n)
                },
                i = !1,
                u = function (s) {
                  i || ((i = !0), r(s))
                }
              e.forEach(function (s, p) {
                ne.resolve(s)
                  .then(function (y) {
                    ;(n[p] = y), (a += 1), o()
                  })
                  .catch(function (y) {
                    u(y)
                  })
              })
            })
          : ne.resolve([])
      )
    }
    function K0(e) {
      return typeof window < 'u' && 'AggregateError' in window
        ? new window.AggregateError(e)
        : { errors: e }
    }
    ne.any = function () {
      var e = Mn(arguments)
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new ne(function (t, r) {
              var n = [],
                a = 0,
                o = function () {
                  a === e.length && r(K0(n))
                },
                i = !1,
                u = function (s) {
                  i || ((i = !0), t(s))
                }
              e.forEach(function (s, p) {
                ne.resolve(s)
                  .then(function (y) {
                    u(y)
                  })
                  .catch(function (y) {
                    ;(n[p] = y), (a += 1), o()
                  })
              })
            })
          : ne.reject(K0([]))
      )
    }
    ne.allSettled = function () {
      var e = Mn(arguments)
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new ne(function (t) {
              var r = [],
                n = 0,
                a = function () {
                  ;(n += 1), n === e.length && t(r)
                }
              e.forEach(function (o, i) {
                ne.resolve(o)
                  .then(function (u) {
                    ;(r[i] = { status: 'fulfilled', value: u }), a()
                  })
                  .catch(function (u) {
                    ;(r[i] = { status: 'rejected', reason: u }), a()
                  })
              })
            })
          : ne.resolve([])
      )
    }
    if (Promise === ne)
      throw new Error('Please use SynchronousPromise.installGlobally() to install globally')
    var X0 = Promise
    ne.installGlobally = function (e) {
      if (Promise === ne) return e
      var t = QB(e)
      return (Promise = ne), t
    }
    ne.uninstallGlobally = function () {
      Promise === ne && (Promise = X0)
    }
    function QB(e) {
      if (typeof e > 'u' || e.__patched) return e
      var t = e
      return (
        (e = function () {
          var r = X0
          t.apply(this, Mn(arguments))
        }),
        (e.__patched = !0),
        e
      )
    }
    J0.exports = { SynchronousPromise: ne }
  })
  var ri = S((nJ, Z0) => {
    l()
    c()
    d()
    var eT = Dt(),
      tT = Sn(),
      rT = rt(),
      nT = '[object Object]',
      aT = Function.prototype,
      oT = Object.prototype,
      Q0 = aT.toString,
      iT = oT.hasOwnProperty,
      uT = Q0.call(Object)
    function sT(e) {
      if (!rT(e) || eT(e) != nT) return !1
      var t = tT(e)
      if (t === null) return !0
      var r = iT.call(t, 'constructor') && t.constructor
      return typeof r == 'function' && r instanceof r && Q0.call(r) == uT
    }
    Z0.exports = sT
  })
  var th = S((uJ, eh) => {
    l()
    c()
    d()
    eh.exports = lT
    function lT(e, t) {
      if (ni('noDeprecation')) return e
      var r = !1
      function n() {
        if (!r) {
          if (ni('throwDeprecation')) throw new Error(t)
          ni('traceDeprecation') ? console.trace(t) : console.warn(t), (r = !0)
        }
        return e.apply(this, arguments)
      }
      return n
    }
    function ni(e) {
      try {
        if (!window.localStorage) return !1
      } catch {
        return !1
      }
      var t = window.localStorage[e]
      return t == null ? !1 : String(t).toLowerCase() === 'true'
    }
  })
  var sh = S((_J, uh) => {
    'use strict'
    l()
    c()
    d()
    uh.exports = function () {
      if (typeof Symbol != 'function' || typeof Object.getOwnPropertySymbols != 'function')
        return !1
      if (typeof Symbol.iterator == 'symbol') return !0
      var t = {},
        r = Symbol('test'),
        n = Object(r)
      if (
        typeof r == 'string' ||
        Object.prototype.toString.call(r) !== '[object Symbol]' ||
        Object.prototype.toString.call(n) !== '[object Symbol]'
      )
        return !1
      var a = 42
      t[r] = a
      for (r in t) return !1
      if (
        (typeof Object.keys == 'function' && Object.keys(t).length !== 0) ||
        (typeof Object.getOwnPropertyNames == 'function' &&
          Object.getOwnPropertyNames(t).length !== 0)
      )
        return !1
      var o = Object.getOwnPropertySymbols(t)
      if (o.length !== 1 || o[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
        return !1
      if (typeof Object.getOwnPropertyDescriptor == 'function') {
        var i = Object.getOwnPropertyDescriptor(t, r)
        if (i.value !== a || i.enumerable !== !0) return !1
      }
      return !0
    }
  })
  var dh = S((IJ, ch) => {
    'use strict'
    l()
    c()
    d()
    var lh = typeof Symbol < 'u' && Symbol,
      ST = sh()
    ch.exports = function () {
      return typeof lh != 'function' ||
        typeof Symbol != 'function' ||
        typeof lh('foo') != 'symbol' ||
        typeof Symbol('bar') != 'symbol'
        ? !1
        : ST()
    }
  })
  var hh = S((MJ, fh) => {
    'use strict'
    l()
    c()
    d()
    var ph = { foo: {} },
      FT = Object
    fh.exports = function () {
      return { __proto__: ph }.foo === ph.foo && !({ __proto__: null } instanceof FT)
    }
  })
  var yh = S((HJ, gh) => {
    'use strict'
    l()
    c()
    d()
    var wT = 'Function.prototype.bind called on incompatible ',
      BT = Object.prototype.toString,
      TT = Math.max,
      _T = '[object Function]',
      mh = function (t, r) {
        for (var n = [], a = 0; a < t.length; a += 1) n[a] = t[a]
        for (var o = 0; o < r.length; o += 1) n[o + t.length] = r[o]
        return n
      },
      OT = function (t, r) {
        for (var n = [], a = r || 0, o = 0; a < t.length; a += 1, o += 1) n[o] = t[a]
        return n
      },
      RT = function (e, t) {
        for (var r = '', n = 0; n < e.length; n += 1) (r += e[n]), n + 1 < e.length && (r += t)
        return r
      }
    gh.exports = function (t) {
      var r = this
      if (typeof r != 'function' || BT.apply(r) !== _T) throw new TypeError(wT + r)
      for (
        var n = OT(arguments, 1),
          a,
          o = function () {
            if (this instanceof a) {
              var y = r.apply(this, mh(n, arguments))
              return Object(y) === y ? y : this
            }
            return r.apply(t, mh(n, arguments))
          },
          i = TT(0, r.length - n.length),
          u = [],
          s = 0;
        s < i;
        s++
      )
        u[s] = '$' + s
      if (
        ((a = Function(
          'binder',
          'return function (' + RT(u, ',') + '){ return binder.apply(this,arguments); }'
        )(o)),
        r.prototype)
      ) {
        var p = function () {}
        ;(p.prototype = r.prototype), (a.prototype = new p()), (p.prototype = null)
      }
      return a
    }
  })
  var zn = S((WJ, bh) => {
    'use strict'
    l()
    c()
    d()
    var PT = yh()
    bh.exports = Function.prototype.bind || PT
  })
  var Ah = S((XJ, Eh) => {
    'use strict'
    l()
    c()
    d()
    var IT = Function.prototype.call,
      kT = Object.prototype.hasOwnProperty,
      NT = zn()
    Eh.exports = NT.call(IT, kT)
  })
  var pt = S((eQ, Sh) => {
    'use strict'
    l()
    c()
    d()
    var ee,
      Qt = SyntaxError,
      xh = Function,
      Jt = TypeError,
      ui = function (e) {
        try {
          return xh('"use strict"; return (' + e + ').constructor;')()
        } catch {}
      },
      Ft = Object.getOwnPropertyDescriptor
    if (Ft)
      try {
        Ft({}, '')
      } catch {
        Ft = null
      }
    var si = function () {
        throw new Jt()
      },
      LT = Ft
        ? (function () {
            try {
              return arguments.callee, si
            } catch {
              try {
                return Ft(arguments, 'callee').get
              } catch {
                return si
              }
            }
          })()
        : si,
      Yt = dh()(),
      MT = hh()(),
      De =
        Object.getPrototypeOf ||
        (MT
          ? function (e) {
              return e.__proto__
            }
          : null),
      Xt = {},
      qT = typeof Uint8Array > 'u' || !De ? ee : De(Uint8Array),
      wt = {
        '%AggregateError%': typeof AggregateError > 'u' ? ee : AggregateError,
        '%Array%': Array,
        '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? ee : ArrayBuffer,
        '%ArrayIteratorPrototype%': Yt && De ? De([][Symbol.iterator]()) : ee,
        '%AsyncFromSyncIteratorPrototype%': ee,
        '%AsyncFunction%': Xt,
        '%AsyncGenerator%': Xt,
        '%AsyncGeneratorFunction%': Xt,
        '%AsyncIteratorPrototype%': Xt,
        '%Atomics%': typeof Atomics > 'u' ? ee : Atomics,
        '%BigInt%': typeof BigInt > 'u' ? ee : BigInt,
        '%BigInt64Array%': typeof BigInt64Array > 'u' ? ee : BigInt64Array,
        '%BigUint64Array%': typeof BigUint64Array > 'u' ? ee : BigUint64Array,
        '%Boolean%': Boolean,
        '%DataView%': typeof DataView > 'u' ? ee : DataView,
        '%Date%': Date,
        '%decodeURI%': decodeURI,
        '%decodeURIComponent%': decodeURIComponent,
        '%encodeURI%': encodeURI,
        '%encodeURIComponent%': encodeURIComponent,
        '%Error%': Error,
        '%eval%': eval,
        '%EvalError%': EvalError,
        '%Float32Array%': typeof Float32Array > 'u' ? ee : Float32Array,
        '%Float64Array%': typeof Float64Array > 'u' ? ee : Float64Array,
        '%FinalizationRegistry%': typeof FinalizationRegistry > 'u' ? ee : FinalizationRegistry,
        '%Function%': xh,
        '%GeneratorFunction%': Xt,
        '%Int8Array%': typeof Int8Array > 'u' ? ee : Int8Array,
        '%Int16Array%': typeof Int16Array > 'u' ? ee : Int16Array,
        '%Int32Array%': typeof Int32Array > 'u' ? ee : Int32Array,
        '%isFinite%': isFinite,
        '%isNaN%': isNaN,
        '%IteratorPrototype%': Yt && De ? De(De([][Symbol.iterator]())) : ee,
        '%JSON%': typeof JSON == 'object' ? JSON : ee,
        '%Map%': typeof Map > 'u' ? ee : Map,
        '%MapIteratorPrototype%':
          typeof Map > 'u' || !Yt || !De ? ee : De(new Map()[Symbol.iterator]()),
        '%Math%': Math,
        '%Number%': Number,
        '%Object%': Object,
        '%parseFloat%': parseFloat,
        '%parseInt%': parseInt,
        '%Promise%': typeof Promise > 'u' ? ee : Promise,
        '%Proxy%': typeof Proxy > 'u' ? ee : Proxy,
        '%RangeError%': RangeError,
        '%ReferenceError%': ReferenceError,
        '%Reflect%': typeof Reflect > 'u' ? ee : Reflect,
        '%RegExp%': RegExp,
        '%Set%': typeof Set > 'u' ? ee : Set,
        '%SetIteratorPrototype%':
          typeof Set > 'u' || !Yt || !De ? ee : De(new Set()[Symbol.iterator]()),
        '%SharedArrayBuffer%': typeof SharedArrayBuffer > 'u' ? ee : SharedArrayBuffer,
        '%String%': String,
        '%StringIteratorPrototype%': Yt && De ? De(''[Symbol.iterator]()) : ee,
        '%Symbol%': Yt ? Symbol : ee,
        '%SyntaxError%': Qt,
        '%ThrowTypeError%': LT,
        '%TypedArray%': qT,
        '%TypeError%': Jt,
        '%Uint8Array%': typeof Uint8Array > 'u' ? ee : Uint8Array,
        '%Uint8ClampedArray%': typeof Uint8ClampedArray > 'u' ? ee : Uint8ClampedArray,
        '%Uint16Array%': typeof Uint16Array > 'u' ? ee : Uint16Array,
        '%Uint32Array%': typeof Uint32Array > 'u' ? ee : Uint32Array,
        '%URIError%': URIError,
        '%WeakMap%': typeof WeakMap > 'u' ? ee : WeakMap,
        '%WeakRef%': typeof WeakRef > 'u' ? ee : WeakRef,
        '%WeakSet%': typeof WeakSet > 'u' ? ee : WeakSet,
      }
    if (De)
      try {
        null.error
      } catch (e) {
        ;(vh = De(De(e))), (wt['%Error.prototype%'] = vh)
      }
    var vh,
      jT = function e(t) {
        var r
        if (t === '%AsyncFunction%') r = ui('async function () {}')
        else if (t === '%GeneratorFunction%') r = ui('function* () {}')
        else if (t === '%AsyncGeneratorFunction%') r = ui('async function* () {}')
        else if (t === '%AsyncGenerator%') {
          var n = e('%AsyncGeneratorFunction%')
          n && (r = n.prototype)
        } else if (t === '%AsyncIteratorPrototype%') {
          var a = e('%AsyncGenerator%')
          a && De && (r = De(a.prototype))
        }
        return (wt[t] = r), r
      },
      Dh = {
        '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
        '%ArrayPrototype%': ['Array', 'prototype'],
        '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
        '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
        '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
        '%ArrayProto_values%': ['Array', 'prototype', 'values'],
        '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
        '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
        '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
        '%BooleanPrototype%': ['Boolean', 'prototype'],
        '%DataViewPrototype%': ['DataView', 'prototype'],
        '%DatePrototype%': ['Date', 'prototype'],
        '%ErrorPrototype%': ['Error', 'prototype'],
        '%EvalErrorPrototype%': ['EvalError', 'prototype'],
        '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
        '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
        '%FunctionPrototype%': ['Function', 'prototype'],
        '%Generator%': ['GeneratorFunction', 'prototype'],
        '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
        '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
        '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
        '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
        '%JSONParse%': ['JSON', 'parse'],
        '%JSONStringify%': ['JSON', 'stringify'],
        '%MapPrototype%': ['Map', 'prototype'],
        '%NumberPrototype%': ['Number', 'prototype'],
        '%ObjectPrototype%': ['Object', 'prototype'],
        '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
        '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
        '%PromisePrototype%': ['Promise', 'prototype'],
        '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
        '%Promise_all%': ['Promise', 'all'],
        '%Promise_reject%': ['Promise', 'reject'],
        '%Promise_resolve%': ['Promise', 'resolve'],
        '%RangeErrorPrototype%': ['RangeError', 'prototype'],
        '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
        '%RegExpPrototype%': ['RegExp', 'prototype'],
        '%SetPrototype%': ['Set', 'prototype'],
        '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
        '%StringPrototype%': ['String', 'prototype'],
        '%SymbolPrototype%': ['Symbol', 'prototype'],
        '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
        '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
        '%TypeErrorPrototype%': ['TypeError', 'prototype'],
        '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
        '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
        '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
        '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
        '%URIErrorPrototype%': ['URIError', 'prototype'],
        '%WeakMapPrototype%': ['WeakMap', 'prototype'],
        '%WeakSetPrototype%': ['WeakSet', 'prototype'],
      },
      Mr = zn(),
      Gn = Ah(),
      $T = Mr.call(Function.call, Array.prototype.concat),
      HT = Mr.call(Function.apply, Array.prototype.splice),
      Ch = Mr.call(Function.call, String.prototype.replace),
      Wn = Mr.call(Function.call, String.prototype.slice),
      UT = Mr.call(Function.call, RegExp.prototype.exec),
      zT =
        /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
      GT = /\\(\\)?/g,
      WT = function (t) {
        var r = Wn(t, 0, 1),
          n = Wn(t, -1)
        if (r === '%' && n !== '%') throw new Qt('invalid intrinsic syntax, expected closing `%`')
        if (n === '%' && r !== '%') throw new Qt('invalid intrinsic syntax, expected opening `%`')
        var a = []
        return (
          Ch(t, zT, function (o, i, u, s) {
            a[a.length] = u ? Ch(s, GT, '$1') : i || o
          }),
          a
        )
      },
      VT = function (t, r) {
        var n = t,
          a
        if ((Gn(Dh, n) && ((a = Dh[n]), (n = '%' + a[0] + '%')), Gn(wt, n))) {
          var o = wt[n]
          if ((o === Xt && (o = jT(n)), typeof o > 'u' && !r))
            throw new Jt('intrinsic ' + t + ' exists, but is not available. Please file an issue!')
          return { alias: a, name: n, value: o }
        }
        throw new Qt('intrinsic ' + t + ' does not exist!')
      }
    Sh.exports = function (t, r) {
      if (typeof t != 'string' || t.length === 0)
        throw new Jt('intrinsic name must be a non-empty string')
      if (arguments.length > 1 && typeof r != 'boolean')
        throw new Jt('"allowMissing" argument must be a boolean')
      if (UT(/^%?[^%]*%?$/, t) === null)
        throw new Qt(
          '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
        )
      var n = WT(t),
        a = n.length > 0 ? n[0] : '',
        o = VT('%' + a + '%', r),
        i = o.name,
        u = o.value,
        s = !1,
        p = o.alias
      p && ((a = p[0]), HT(n, $T([0, 1], p)))
      for (var y = 1, E = !0; y < n.length; y += 1) {
        var m = n[y],
          g = Wn(m, 0, 1),
          A = Wn(m, -1)
        if ((g === '"' || g === "'" || g === '`' || A === '"' || A === "'" || A === '`') && g !== A)
          throw new Qt('property names with quotes must have matching quotes')
        if (
          ((m === 'constructor' || !E) && (s = !0), (a += '.' + m), (i = '%' + a + '%'), Gn(wt, i))
        )
          u = wt[i]
        else if (u != null) {
          if (!(m in u)) {
            if (!r)
              throw new Jt(
                'base intrinsic for ' + t + ' exists, but the property is not available.'
              )
            return
          }
          if (Ft && y + 1 >= n.length) {
            var b = Ft(u, m)
            ;(E = !!b), E && 'get' in b && !('originalValue' in b.get) ? (u = b.get) : (u = u[m])
          } else (E = Gn(u, m)), (u = u[m])
          E && !s && (wt[i] = u)
        }
      }
      return u
    }
  })
  var di = S((aQ, Fh) => {
    'use strict'
    l()
    c()
    d()
    var KT = pt(),
      li = KT('%Object.defineProperty%', !0),
      ci = function () {
        if (li)
          try {
            return li({}, 'a', { value: 1 }), !0
          } catch {
            return !1
          }
        return !1
      }
    ci.hasArrayLengthDefineBug = function () {
      if (!ci()) return null
      try {
        return li([], 'length', { value: 1 }).length !== 1
      } catch {
        return !0
      }
    }
    Fh.exports = ci
  })
  var pi = S((sQ, wh) => {
    'use strict'
    l()
    c()
    d()
    var YT = pt(),
      Vn = YT('%Object.getOwnPropertyDescriptor%', !0)
    if (Vn)
      try {
        Vn([], 'length')
      } catch {
        Vn = null
      }
    wh.exports = Vn
  })
  var _h = S((pQ, Th) => {
    'use strict'
    l()
    c()
    d()
    var XT = di()(),
      fi = pt(),
      qr = XT && fi('%Object.defineProperty%', !0)
    if (qr)
      try {
        qr({}, 'a', { value: 1 })
      } catch {
        qr = !1
      }
    var JT = fi('%SyntaxError%'),
      Zt = fi('%TypeError%'),
      Bh = pi()
    Th.exports = function (t, r, n) {
      if (!t || (typeof t != 'object' && typeof t != 'function'))
        throw new Zt('`obj` must be an object or a function`')
      if (typeof r != 'string' && typeof r != 'symbol')
        throw new Zt('`property` must be a string or a symbol`')
      if (arguments.length > 3 && typeof arguments[3] != 'boolean' && arguments[3] !== null)
        throw new Zt('`nonEnumerable`, if provided, must be a boolean or null')
      if (arguments.length > 4 && typeof arguments[4] != 'boolean' && arguments[4] !== null)
        throw new Zt('`nonWritable`, if provided, must be a boolean or null')
      if (arguments.length > 5 && typeof arguments[5] != 'boolean' && arguments[5] !== null)
        throw new Zt('`nonConfigurable`, if provided, must be a boolean or null')
      if (arguments.length > 6 && typeof arguments[6] != 'boolean')
        throw new Zt('`loose`, if provided, must be a boolean')
      var a = arguments.length > 3 ? arguments[3] : null,
        o = arguments.length > 4 ? arguments[4] : null,
        i = arguments.length > 5 ? arguments[5] : null,
        u = arguments.length > 6 ? arguments[6] : !1,
        s = !!Bh && Bh(t, r)
      if (qr)
        qr(t, r, {
          configurable: i === null && s ? s.configurable : !i,
          enumerable: a === null && s ? s.enumerable : !a,
          value: n,
          writable: o === null && s ? s.writable : !o,
        })
      else if (u || (!a && !o && !i)) t[r] = n
      else
        throw new JT(
          'This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.'
        )
    }
  })
  var Nh = S((gQ, kh) => {
    'use strict'
    l()
    c()
    d()
    var Ih = pt(),
      Oh = _h(),
      QT = di()(),
      Rh = pi(),
      Ph = Ih('%TypeError%'),
      ZT = Ih('%Math.floor%')
    kh.exports = function (t, r) {
      if (typeof t != 'function') throw new Ph('`fn` is not a function')
      if (typeof r != 'number' || r < 0 || r > 4294967295 || ZT(r) !== r)
        throw new Ph('`length` must be a positive 32-bit integer')
      var n = arguments.length > 2 && !!arguments[2],
        a = !0,
        o = !0
      if ('length' in t && Rh) {
        var i = Rh(t, 'length')
        i && !i.configurable && (a = !1), i && !i.writable && (o = !1)
      }
      return (a || o || !n) && (QT ? Oh(t, 'length', r, !0, !0) : Oh(t, 'length', r)), t
    }
  })
  var $h = S((AQ, Kn) => {
    'use strict'
    l()
    c()
    d()
    var hi = zn(),
      er = pt(),
      e8 = Nh(),
      t8 = er('%TypeError%'),
      Mh = er('%Function.prototype.apply%'),
      qh = er('%Function.prototype.call%'),
      jh = er('%Reflect.apply%', !0) || hi.call(qh, Mh),
      jr = er('%Object.defineProperty%', !0),
      r8 = er('%Math.max%')
    if (jr)
      try {
        jr({}, 'a', { value: 1 })
      } catch {
        jr = null
      }
    Kn.exports = function (t) {
      if (typeof t != 'function') throw new t8('a function is required')
      var r = jh(hi, qh, arguments)
      return e8(r, 1 + r8(0, t.length - (arguments.length - 1)), !0)
    }
    var Lh = function () {
      return jh(hi, Mh, arguments)
    }
    jr ? jr(Kn.exports, 'apply', { value: Lh }) : (Kn.exports.apply = Lh)
  })
  var Gh = S((xQ, zh) => {
    'use strict'
    l()
    c()
    d()
    var Hh = pt(),
      Uh = $h(),
      n8 = Uh(Hh('String.prototype.indexOf'))
    zh.exports = function (t, r) {
      var n = Hh(t, !!r)
      return typeof n == 'function' && n8(t, '.prototype.') > -1 ? Uh(n) : n
    }
  })
  var Wh = S(() => {
    l()
    c()
    d()
  })
  var pm = S((PQ, dm) => {
    l()
    c()
    d()
    var xi = typeof Map == 'function' && Map.prototype,
      mi =
        Object.getOwnPropertyDescriptor && xi
          ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
          : null,
      Xn = xi && mi && typeof mi.get == 'function' ? mi.get : null,
      Vh = xi && Map.prototype.forEach,
      Si = typeof Set == 'function' && Set.prototype,
      gi =
        Object.getOwnPropertyDescriptor && Si
          ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
          : null,
      Jn = Si && gi && typeof gi.get == 'function' ? gi.get : null,
      Kh = Si && Set.prototype.forEach,
      a8 = typeof WeakMap == 'function' && WeakMap.prototype,
      Hr = a8 ? WeakMap.prototype.has : null,
      o8 = typeof WeakSet == 'function' && WeakSet.prototype,
      Ur = o8 ? WeakSet.prototype.has : null,
      i8 = typeof WeakRef == 'function' && WeakRef.prototype,
      Yh = i8 ? WeakRef.prototype.deref : null,
      u8 = Boolean.prototype.valueOf,
      s8 = Object.prototype.toString,
      l8 = Function.prototype.toString,
      c8 = String.prototype.match,
      Fi = String.prototype.slice,
      ht = String.prototype.replace,
      d8 = String.prototype.toUpperCase,
      Xh = String.prototype.toLowerCase,
      om = RegExp.prototype.test,
      Jh = Array.prototype.concat,
      Ye = Array.prototype.join,
      p8 = Array.prototype.slice,
      Qh = Math.floor,
      Ei = typeof BigInt == 'function' ? BigInt.prototype.valueOf : null,
      yi = Object.getOwnPropertySymbols,
      Ai =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? Symbol.prototype.toString
          : null,
      tr = typeof Symbol == 'function' && typeof Symbol.iterator == 'object',
      we =
        typeof Symbol == 'function' &&
        Symbol.toStringTag &&
        (typeof Symbol.toStringTag === tr || 'symbol')
          ? Symbol.toStringTag
          : null,
      im = Object.prototype.propertyIsEnumerable,
      Zh =
        (typeof Reflect == 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
        ([].__proto__ === Array.prototype
          ? function (e) {
              return e.__proto__
            }
          : null)
    function em(e, t) {
      if (e === 1 / 0 || e === -1 / 0 || e !== e || (e && e > -1e3 && e < 1e3) || om.call(/e/, t))
        return t
      var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g
      if (typeof e == 'number') {
        var n = e < 0 ? -Qh(-e) : Qh(e)
        if (n !== e) {
          var a = String(n),
            o = Fi.call(t, a.length + 1)
          return ht.call(a, r, '$&_') + '.' + ht.call(ht.call(o, /([0-9]{3})/g, '$&_'), /_$/, '')
        }
      }
      return ht.call(t, r, '$&_')
    }
    var vi = Wh(),
      tm = vi.custom,
      rm = sm(tm) ? tm : null
    dm.exports = function e(t, r, n, a) {
      var o = r || {}
      if (ft(o, 'quoteStyle') && o.quoteStyle !== 'single' && o.quoteStyle !== 'double')
        throw new TypeError('option "quoteStyle" must be "single" or "double"')
      if (
        ft(o, 'maxStringLength') &&
        (typeof o.maxStringLength == 'number'
          ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0
          : o.maxStringLength !== null)
      )
        throw new TypeError(
          'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
        )
      var i = ft(o, 'customInspect') ? o.customInspect : !0
      if (typeof i != 'boolean' && i !== 'symbol')
        throw new TypeError(
          'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`'
        )
      if (
        ft(o, 'indent') &&
        o.indent !== null &&
        o.indent !== '	' &&
        !(parseInt(o.indent, 10) === o.indent && o.indent > 0)
      )
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`')
      if (ft(o, 'numericSeparator') && typeof o.numericSeparator != 'boolean')
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`')
      var u = o.numericSeparator
      if (typeof t > 'u') return 'undefined'
      if (t === null) return 'null'
      if (typeof t == 'boolean') return t ? 'true' : 'false'
      if (typeof t == 'string') return cm(t, o)
      if (typeof t == 'number') {
        if (t === 0) return 1 / 0 / t > 0 ? '0' : '-0'
        var s = String(t)
        return u ? em(t, s) : s
      }
      if (typeof t == 'bigint') {
        var p = String(t) + 'n'
        return u ? em(t, p) : p
      }
      var y = typeof o.depth > 'u' ? 5 : o.depth
      if ((typeof n > 'u' && (n = 0), n >= y && y > 0 && typeof t == 'object'))
        return Di(t) ? '[Array]' : '[Object]'
      var E = _8(o, n)
      if (typeof a > 'u') a = []
      else if (lm(a, t) >= 0) return '[Circular]'
      function m(Y, R, _) {
        if ((R && ((a = p8.call(a)), a.push(R)), _)) {
          var j = { depth: o.depth }
          return ft(o, 'quoteStyle') && (j.quoteStyle = o.quoteStyle), e(Y, j, n + 1, a)
        }
        return e(Y, o, n + 1, a)
      }
      if (typeof t == 'function' && !nm(t)) {
        var g = v8(t),
          A = Yn(t, m)
        return (
          '[Function' +
          (g ? ': ' + g : ' (anonymous)') +
          ']' +
          (A.length > 0 ? ' { ' + Ye.call(A, ', ') + ' }' : '')
        )
      }
      if (sm(t)) {
        var b = tr ? ht.call(String(t), /^(Symbol\(.*\))_[^)]*$/, '$1') : Ai.call(t)
        return typeof t == 'object' && !tr ? $r(b) : b
      }
      if (w8(t)) {
        for (
          var x = '<' + Xh.call(String(t.nodeName)), F = t.attributes || [], B = 0;
          B < F.length;
          B++
        )
          x += ' ' + F[B].name + '=' + um(f8(F[B].value), 'double', o)
        return (
          (x += '>'),
          t.childNodes && t.childNodes.length && (x += '...'),
          (x += '</' + Xh.call(String(t.nodeName)) + '>'),
          x
        )
      }
      if (Di(t)) {
        if (t.length === 0) return '[]'
        var I = Yn(t, m)
        return E && !T8(I) ? '[' + Ci(I, E) + ']' : '[ ' + Ye.call(I, ', ') + ' ]'
      }
      if (m8(t)) {
        var M = Yn(t, m)
        return !('cause' in Error.prototype) && 'cause' in t && !im.call(t, 'cause')
          ? '{ [' + String(t) + '] ' + Ye.call(Jh.call('[cause]: ' + m(t.cause), M), ', ') + ' }'
          : M.length === 0
          ? '[' + String(t) + ']'
          : '{ [' + String(t) + '] ' + Ye.call(M, ', ') + ' }'
      }
      if (typeof t == 'object' && i) {
        if (rm && typeof t[rm] == 'function' && vi) return vi(t, { depth: y - n })
        if (i !== 'symbol' && typeof t.inspect == 'function') return t.inspect()
      }
      if (D8(t)) {
        var w = []
        return (
          Vh &&
            Vh.call(t, function (Y, R) {
              w.push(m(R, t, !0) + ' => ' + m(Y, t))
            }),
          am('Map', Xn.call(t), w, E)
        )
      }
      if (S8(t)) {
        var N = []
        return (
          Kh &&
            Kh.call(t, function (Y) {
              N.push(m(Y, t))
            }),
          am('Set', Jn.call(t), N, E)
        )
      }
      if (C8(t)) return bi('WeakMap')
      if (F8(t)) return bi('WeakSet')
      if (x8(t)) return bi('WeakRef')
      if (y8(t)) return $r(m(Number(t)))
      if (E8(t)) return $r(m(Ei.call(t)))
      if (b8(t)) return $r(u8.call(t))
      if (g8(t)) return $r(m(String(t)))
      if (typeof window < 'u' && t === window) return '{ [object Window] }'
      if (t === window) return '{ [object globalThis] }'
      if (!h8(t) && !nm(t)) {
        var k = Yn(t, m),
          U = Zh ? Zh(t) === Object.prototype : t instanceof Object || t.constructor === Object,
          V = t instanceof Object ? '' : 'null prototype',
          H = !U && we && Object(t) === t && we in t ? Fi.call(mt(t), 8, -1) : V ? 'Object' : '',
          oe =
            U || typeof t.constructor != 'function'
              ? ''
              : t.constructor.name
              ? t.constructor.name + ' '
              : '',
          X = oe + (H || V ? '[' + Ye.call(Jh.call([], H || [], V || []), ': ') + '] ' : '')
        return k.length === 0
          ? X + '{}'
          : E
          ? X + '{' + Ci(k, E) + '}'
          : X + '{ ' + Ye.call(k, ', ') + ' }'
      }
      return String(t)
    }
    function um(e, t, r) {
      var n = (r.quoteStyle || t) === 'double' ? '"' : "'"
      return n + e + n
    }
    function f8(e) {
      return ht.call(String(e), /"/g, '&quot;')
    }
    function Di(e) {
      return mt(e) === '[object Array]' && (!we || !(typeof e == 'object' && we in e))
    }
    function h8(e) {
      return mt(e) === '[object Date]' && (!we || !(typeof e == 'object' && we in e))
    }
    function nm(e) {
      return mt(e) === '[object RegExp]' && (!we || !(typeof e == 'object' && we in e))
    }
    function m8(e) {
      return mt(e) === '[object Error]' && (!we || !(typeof e == 'object' && we in e))
    }
    function g8(e) {
      return mt(e) === '[object String]' && (!we || !(typeof e == 'object' && we in e))
    }
    function y8(e) {
      return mt(e) === '[object Number]' && (!we || !(typeof e == 'object' && we in e))
    }
    function b8(e) {
      return mt(e) === '[object Boolean]' && (!we || !(typeof e == 'object' && we in e))
    }
    function sm(e) {
      if (tr) return e && typeof e == 'object' && e instanceof Symbol
      if (typeof e == 'symbol') return !0
      if (!e || typeof e != 'object' || !Ai) return !1
      try {
        return Ai.call(e), !0
      } catch {}
      return !1
    }
    function E8(e) {
      if (!e || typeof e != 'object' || !Ei) return !1
      try {
        return Ei.call(e), !0
      } catch {}
      return !1
    }
    var A8 =
      Object.prototype.hasOwnProperty ||
      function (e) {
        return e in this
      }
    function ft(e, t) {
      return A8.call(e, t)
    }
    function mt(e) {
      return s8.call(e)
    }
    function v8(e) {
      if (e.name) return e.name
      var t = c8.call(l8.call(e), /^function\s*([\w$]+)/)
      return t ? t[1] : null
    }
    function lm(e, t) {
      if (e.indexOf) return e.indexOf(t)
      for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r
      return -1
    }
    function D8(e) {
      if (!Xn || !e || typeof e != 'object') return !1
      try {
        Xn.call(e)
        try {
          Jn.call(e)
        } catch {
          return !0
        }
        return e instanceof Map
      } catch {}
      return !1
    }
    function C8(e) {
      if (!Hr || !e || typeof e != 'object') return !1
      try {
        Hr.call(e, Hr)
        try {
          Ur.call(e, Ur)
        } catch {
          return !0
        }
        return e instanceof WeakMap
      } catch {}
      return !1
    }
    function x8(e) {
      if (!Yh || !e || typeof e != 'object') return !1
      try {
        return Yh.call(e), !0
      } catch {}
      return !1
    }
    function S8(e) {
      if (!Jn || !e || typeof e != 'object') return !1
      try {
        Jn.call(e)
        try {
          Xn.call(e)
        } catch {
          return !0
        }
        return e instanceof Set
      } catch {}
      return !1
    }
    function F8(e) {
      if (!Ur || !e || typeof e != 'object') return !1
      try {
        Ur.call(e, Ur)
        try {
          Hr.call(e, Hr)
        } catch {
          return !0
        }
        return e instanceof WeakSet
      } catch {}
      return !1
    }
    function w8(e) {
      return !e || typeof e != 'object'
        ? !1
        : typeof HTMLElement < 'u' && e instanceof HTMLElement
        ? !0
        : typeof e.nodeName == 'string' && typeof e.getAttribute == 'function'
    }
    function cm(e, t) {
      if (e.length > t.maxStringLength) {
        var r = e.length - t.maxStringLength,
          n = '... ' + r + ' more character' + (r > 1 ? 's' : '')
        return cm(Fi.call(e, 0, t.maxStringLength), t) + n
      }
      var a = ht.call(ht.call(e, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, B8)
      return um(a, 'single', t)
    }
    function B8(e) {
      var t = e.charCodeAt(0),
        r = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[t]
      return r ? '\\' + r : '\\x' + (t < 16 ? '0' : '') + d8.call(t.toString(16))
    }
    function $r(e) {
      return 'Object(' + e + ')'
    }
    function bi(e) {
      return e + ' { ? }'
    }
    function am(e, t, r, n) {
      var a = n ? Ci(r, n) : Ye.call(r, ', ')
      return e + ' (' + t + ') {' + a + '}'
    }
    function T8(e) {
      for (var t = 0; t < e.length; t++)
        if (
          lm(
            e[t],
            `
`
          ) >= 0
        )
          return !1
      return !0
    }
    function _8(e, t) {
      var r
      if (e.indent === '	') r = '	'
      else if (typeof e.indent == 'number' && e.indent > 0) r = Ye.call(Array(e.indent + 1), ' ')
      else return null
      return { base: r, prev: Ye.call(Array(t + 1), r) }
    }
    function Ci(e, t) {
      if (e.length === 0) return ''
      var r =
        `
` +
        t.prev +
        t.base
      return (
        r +
        Ye.call(e, ',' + r) +
        `
` +
        t.prev
      )
    }
    function Yn(e, t) {
      var r = Di(e),
        n = []
      if (r) {
        n.length = e.length
        for (var a = 0; a < e.length; a++) n[a] = ft(e, a) ? t(e[a], e) : ''
      }
      var o = typeof yi == 'function' ? yi(e) : [],
        i
      if (tr) {
        i = {}
        for (var u = 0; u < o.length; u++) i['$' + o[u]] = o[u]
      }
      for (var s in e)
        ft(e, s) &&
          ((r && String(Number(s)) === s && s < e.length) ||
            (tr && i['$' + s] instanceof Symbol) ||
            (om.call(/[^\w$]/, s)
              ? n.push(t(s, e) + ': ' + t(e[s], e))
              : n.push(s + ': ' + t(e[s], e))))
      if (typeof yi == 'function')
        for (var p = 0; p < o.length; p++)
          im.call(e, o[p]) && n.push('[' + t(o[p]) + ']: ' + t(e[o[p]], e))
      return n
    }
  })
  var hm = S((LQ, fm) => {
    'use strict'
    l()
    c()
    d()
    var wi = pt(),
      rr = Gh(),
      O8 = pm(),
      R8 = wi('%TypeError%'),
      Qn = wi('%WeakMap%', !0),
      Zn = wi('%Map%', !0),
      P8 = rr('WeakMap.prototype.get', !0),
      I8 = rr('WeakMap.prototype.set', !0),
      k8 = rr('WeakMap.prototype.has', !0),
      N8 = rr('Map.prototype.get', !0),
      L8 = rr('Map.prototype.set', !0),
      M8 = rr('Map.prototype.has', !0),
      Bi = function (e, t) {
        for (var r = e, n; (n = r.next) !== null; r = n)
          if (n.key === t) return (r.next = n.next), (n.next = e.next), (e.next = n), n
      },
      q8 = function (e, t) {
        var r = Bi(e, t)
        return r && r.value
      },
      j8 = function (e, t, r) {
        var n = Bi(e, t)
        n ? (n.value = r) : (e.next = { key: t, next: e.next, value: r })
      },
      $8 = function (e, t) {
        return !!Bi(e, t)
      }
    fm.exports = function () {
      var t,
        r,
        n,
        a = {
          assert: function (o) {
            if (!a.has(o)) throw new R8('Side channel does not contain ' + O8(o))
          },
          get: function (o) {
            if (Qn && o && (typeof o == 'object' || typeof o == 'function')) {
              if (t) return P8(t, o)
            } else if (Zn) {
              if (r) return N8(r, o)
            } else if (n) return q8(n, o)
          },
          has: function (o) {
            if (Qn && o && (typeof o == 'object' || typeof o == 'function')) {
              if (t) return k8(t, o)
            } else if (Zn) {
              if (r) return M8(r, o)
            } else if (n) return $8(n, o)
            return !1
          },
          set: function (o, i) {
            Qn && o && (typeof o == 'object' || typeof o == 'function')
              ? (t || (t = new Qn()), I8(t, o, i))
              : Zn
              ? (r || (r = new Zn()), L8(r, o, i))
              : (n || (n = { key: {}, next: null }), j8(n, o, i))
          },
        }
      return a
    }
  })
  var ea = S(($Q, mm) => {
    'use strict'
    l()
    c()
    d()
    var H8 = String.prototype.replace,
      U8 = /%20/g,
      Ti = { RFC1738: 'RFC1738', RFC3986: 'RFC3986' }
    mm.exports = {
      default: Ti.RFC3986,
      formatters: {
        RFC1738: function (e) {
          return H8.call(e, U8, '+')
        },
        RFC3986: function (e) {
          return String(e)
        },
      },
      RFC1738: Ti.RFC1738,
      RFC3986: Ti.RFC3986,
    }
  })
  var Oi = S((GQ, ym) => {
    'use strict'
    l()
    c()
    d()
    var z8 = ea(),
      _i = Object.prototype.hasOwnProperty,
      Bt = Array.isArray,
      Xe = (function () {
        for (var e = [], t = 0; t < 256; ++t)
          e.push('%' + ((t < 16 ? '0' : '') + t.toString(16)).toUpperCase())
        return e
      })(),
      G8 = function (t) {
        for (; t.length > 1; ) {
          var r = t.pop(),
            n = r.obj[r.prop]
          if (Bt(n)) {
            for (var a = [], o = 0; o < n.length; ++o) typeof n[o] < 'u' && a.push(n[o])
            r.obj[r.prop] = a
          }
        }
      },
      gm = function (t, r) {
        for (var n = r && r.plainObjects ? Object.create(null) : {}, a = 0; a < t.length; ++a)
          typeof t[a] < 'u' && (n[a] = t[a])
        return n
      },
      W8 = function e(t, r, n) {
        if (!r) return t
        if (typeof r != 'object') {
          if (Bt(t)) t.push(r)
          else if (t && typeof t == 'object')
            ((n && (n.plainObjects || n.allowPrototypes)) || !_i.call(Object.prototype, r)) &&
              (t[r] = !0)
          else return [t, r]
          return t
        }
        if (!t || typeof t != 'object') return [t].concat(r)
        var a = t
        return (
          Bt(t) && !Bt(r) && (a = gm(t, n)),
          Bt(t) && Bt(r)
            ? (r.forEach(function (o, i) {
                if (_i.call(t, i)) {
                  var u = t[i]
                  u && typeof u == 'object' && o && typeof o == 'object'
                    ? (t[i] = e(u, o, n))
                    : t.push(o)
                } else t[i] = o
              }),
              t)
            : Object.keys(r).reduce(function (o, i) {
                var u = r[i]
                return _i.call(o, i) ? (o[i] = e(o[i], u, n)) : (o[i] = u), o
              }, a)
        )
      },
      V8 = function (t, r) {
        return Object.keys(r).reduce(function (n, a) {
          return (n[a] = r[a]), n
        }, t)
      },
      K8 = function (e, t, r) {
        var n = e.replace(/\+/g, ' ')
        if (r === 'iso-8859-1') return n.replace(/%[0-9a-f]{2}/gi, unescape)
        try {
          return decodeURIComponent(n)
        } catch {
          return n
        }
      },
      Y8 = function (t, r, n, a, o) {
        if (t.length === 0) return t
        var i = t
        if (
          (typeof t == 'symbol'
            ? (i = Symbol.prototype.toString.call(t))
            : typeof t != 'string' && (i = String(t)),
          n === 'iso-8859-1')
        )
          return escape(i).replace(/%u[0-9a-f]{4}/gi, function (y) {
            return '%26%23' + parseInt(y.slice(2), 16) + '%3B'
          })
        for (var u = '', s = 0; s < i.length; ++s) {
          var p = i.charCodeAt(s)
          if (
            p === 45 ||
            p === 46 ||
            p === 95 ||
            p === 126 ||
            (p >= 48 && p <= 57) ||
            (p >= 65 && p <= 90) ||
            (p >= 97 && p <= 122) ||
            (o === z8.RFC1738 && (p === 40 || p === 41))
          ) {
            u += i.charAt(s)
            continue
          }
          if (p < 128) {
            u = u + Xe[p]
            continue
          }
          if (p < 2048) {
            u = u + (Xe[192 | (p >> 6)] + Xe[128 | (p & 63)])
            continue
          }
          if (p < 55296 || p >= 57344) {
            u = u + (Xe[224 | (p >> 12)] + Xe[128 | ((p >> 6) & 63)] + Xe[128 | (p & 63)])
            continue
          }
          ;(s += 1),
            (p = 65536 + (((p & 1023) << 10) | (i.charCodeAt(s) & 1023))),
            (u +=
              Xe[240 | (p >> 18)] +
              Xe[128 | ((p >> 12) & 63)] +
              Xe[128 | ((p >> 6) & 63)] +
              Xe[128 | (p & 63)])
        }
        return u
      },
      X8 = function (t) {
        for (var r = [{ obj: { o: t }, prop: 'o' }], n = [], a = 0; a < r.length; ++a)
          for (var o = r[a], i = o.obj[o.prop], u = Object.keys(i), s = 0; s < u.length; ++s) {
            var p = u[s],
              y = i[p]
            typeof y == 'object' &&
              y !== null &&
              n.indexOf(y) === -1 &&
              (r.push({ obj: i, prop: p }), n.push(y))
          }
        return G8(r), t
      },
      J8 = function (t) {
        return Object.prototype.toString.call(t) === '[object RegExp]'
      },
      Q8 = function (t) {
        return !t || typeof t != 'object'
          ? !1
          : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
      },
      Z8 = function (t, r) {
        return [].concat(t, r)
      },
      e_ = function (t, r) {
        if (Bt(t)) {
          for (var n = [], a = 0; a < t.length; a += 1) n.push(r(t[a]))
          return n
        }
        return r(t)
      }
    ym.exports = {
      arrayToObject: gm,
      assign: V8,
      combine: Z8,
      compact: X8,
      decode: K8,
      encode: Y8,
      isBuffer: Q8,
      isRegExp: J8,
      maybeMap: e_,
      merge: W8,
    }
  })
  var Cm = S((YQ, Dm) => {
    'use strict'
    l()
    c()
    d()
    var Am = hm(),
      ta = Oi(),
      zr = ea(),
      t_ = Object.prototype.hasOwnProperty,
      bm = {
        brackets: function (t) {
          return t + '[]'
        },
        comma: 'comma',
        indices: function (t, r) {
          return t + '[' + r + ']'
        },
        repeat: function (t) {
          return t
        },
      },
      at = Array.isArray,
      r_ = Array.prototype.push,
      vm = function (e, t) {
        r_.apply(e, at(t) ? t : [t])
      },
      n_ = Date.prototype.toISOString,
      Em = zr.default,
      Be = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: 'utf-8',
        charsetSentinel: !1,
        delimiter: '&',
        encode: !0,
        encoder: ta.encode,
        encodeValuesOnly: !1,
        format: Em,
        formatter: zr.formatters[Em],
        indices: !1,
        serializeDate: function (t) {
          return n_.call(t)
        },
        skipNulls: !1,
        strictNullHandling: !1,
      },
      a_ = function (t) {
        return (
          typeof t == 'string' ||
          typeof t == 'number' ||
          typeof t == 'boolean' ||
          typeof t == 'symbol' ||
          typeof t == 'bigint'
        )
      },
      Ri = {},
      o_ = function e(t, r, n, a, o, i, u, s, p, y, E, m, g, A, b, x) {
        for (var F = t, B = x, I = 0, M = !1; (B = B.get(Ri)) !== void 0 && !M; ) {
          var w = B.get(t)
          if (((I += 1), typeof w < 'u')) {
            if (w === I) throw new RangeError('Cyclic object value')
            M = !0
          }
          typeof B.get(Ri) > 'u' && (I = 0)
        }
        if (
          (typeof s == 'function'
            ? (F = s(r, F))
            : F instanceof Date
            ? (F = E(F))
            : n === 'comma' &&
              at(F) &&
              (F = ta.maybeMap(F, function (j) {
                return j instanceof Date ? E(j) : j
              })),
          F === null)
        ) {
          if (o) return u && !A ? u(r, Be.encoder, b, 'key', m) : r
          F = ''
        }
        if (a_(F) || ta.isBuffer(F)) {
          if (u) {
            var N = A ? r : u(r, Be.encoder, b, 'key', m)
            return [g(N) + '=' + g(u(F, Be.encoder, b, 'value', m))]
          }
          return [g(r) + '=' + g(String(F))]
        }
        var k = []
        if (typeof F > 'u') return k
        var U
        if (n === 'comma' && at(F))
          A && u && (F = ta.maybeMap(F, u)),
            (U = [{ value: F.length > 0 ? F.join(',') || null : void 0 }])
        else if (at(s)) U = s
        else {
          var V = Object.keys(F)
          U = p ? V.sort(p) : V
        }
        for (var H = a && at(F) && F.length === 1 ? r + '[]' : r, oe = 0; oe < U.length; ++oe) {
          var X = U[oe],
            Y = typeof X == 'object' && typeof X.value < 'u' ? X.value : F[X]
          if (!(i && Y === null)) {
            var R = at(F)
              ? typeof n == 'function'
                ? n(H, X)
                : H
              : H + (y ? '.' + X : '[' + X + ']')
            x.set(t, I)
            var _ = Am()
            _.set(Ri, x),
              vm(
                k,
                e(
                  Y,
                  R,
                  n,
                  a,
                  o,
                  i,
                  n === 'comma' && A && at(F) ? null : u,
                  s,
                  p,
                  y,
                  E,
                  m,
                  g,
                  A,
                  b,
                  _
                )
              )
          }
        }
        return k
      },
      i_ = function (t) {
        if (!t) return Be
        if (t.encoder !== null && typeof t.encoder < 'u' && typeof t.encoder != 'function')
          throw new TypeError('Encoder has to be a function.')
        var r = t.charset || Be.charset
        if (typeof t.charset < 'u' && t.charset !== 'utf-8' && t.charset !== 'iso-8859-1')
          throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined')
        var n = zr.default
        if (typeof t.format < 'u') {
          if (!t_.call(zr.formatters, t.format))
            throw new TypeError('Unknown format option provided.')
          n = t.format
        }
        var a = zr.formatters[n],
          o = Be.filter
        return (
          (typeof t.filter == 'function' || at(t.filter)) && (o = t.filter),
          {
            addQueryPrefix:
              typeof t.addQueryPrefix == 'boolean' ? t.addQueryPrefix : Be.addQueryPrefix,
            allowDots: typeof t.allowDots > 'u' ? Be.allowDots : !!t.allowDots,
            charset: r,
            charsetSentinel:
              typeof t.charsetSentinel == 'boolean' ? t.charsetSentinel : Be.charsetSentinel,
            delimiter: typeof t.delimiter > 'u' ? Be.delimiter : t.delimiter,
            encode: typeof t.encode == 'boolean' ? t.encode : Be.encode,
            encoder: typeof t.encoder == 'function' ? t.encoder : Be.encoder,
            encodeValuesOnly:
              typeof t.encodeValuesOnly == 'boolean' ? t.encodeValuesOnly : Be.encodeValuesOnly,
            filter: o,
            format: n,
            formatter: a,
            serializeDate:
              typeof t.serializeDate == 'function' ? t.serializeDate : Be.serializeDate,
            skipNulls: typeof t.skipNulls == 'boolean' ? t.skipNulls : Be.skipNulls,
            sort: typeof t.sort == 'function' ? t.sort : null,
            strictNullHandling:
              typeof t.strictNullHandling == 'boolean'
                ? t.strictNullHandling
                : Be.strictNullHandling,
          }
        )
      }
    Dm.exports = function (e, t) {
      var r = e,
        n = i_(t),
        a,
        o
      typeof n.filter == 'function'
        ? ((o = n.filter), (r = o('', r)))
        : at(n.filter) && ((o = n.filter), (a = o))
      var i = []
      if (typeof r != 'object' || r === null) return ''
      var u
      t && t.arrayFormat in bm
        ? (u = t.arrayFormat)
        : t && 'indices' in t
        ? (u = t.indices ? 'indices' : 'repeat')
        : (u = 'indices')
      var s = bm[u]
      if (t && 'commaRoundTrip' in t && typeof t.commaRoundTrip != 'boolean')
        throw new TypeError('`commaRoundTrip` must be a boolean, or absent')
      var p = s === 'comma' && t && t.commaRoundTrip
      a || (a = Object.keys(r)), n.sort && a.sort(n.sort)
      for (var y = Am(), E = 0; E < a.length; ++E) {
        var m = a[E]
        ;(n.skipNulls && r[m] === null) ||
          vm(
            i,
            o_(
              r[m],
              m,
              s,
              p,
              n.strictNullHandling,
              n.skipNulls,
              n.encode ? n.encoder : null,
              n.filter,
              n.sort,
              n.allowDots,
              n.serializeDate,
              n.format,
              n.formatter,
              n.encodeValuesOnly,
              n.charset,
              y
            )
          )
      }
      var g = i.join(n.delimiter),
        A = n.addQueryPrefix === !0 ? '?' : ''
      return (
        n.charsetSentinel &&
          (n.charset === 'iso-8859-1' ? (A += 'utf8=%26%2310003%3B&') : (A += 'utf8=%E2%9C%93&')),
        g.length > 0 ? A + g : ''
      )
    }
  })
  var Fm = S((ZQ, Sm) => {
    'use strict'
    l()
    c()
    d()
    var nr = Oi(),
      Pi = Object.prototype.hasOwnProperty,
      u_ = Array.isArray,
      Ce = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: 'utf-8',
        charsetSentinel: !1,
        comma: !1,
        decoder: nr.decode,
        delimiter: '&',
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1,
      },
      s_ = function (e) {
        return e.replace(/&#(\d+);/g, function (t, r) {
          return String.fromCharCode(parseInt(r, 10))
        })
      },
      xm = function (e, t) {
        return e && typeof e == 'string' && t.comma && e.indexOf(',') > -1 ? e.split(',') : e
      },
      l_ = 'utf8=%26%2310003%3B',
      c_ = 'utf8=%E2%9C%93',
      d_ = function (t, r) {
        var n = { __proto__: null },
          a = r.ignoreQueryPrefix ? t.replace(/^\?/, '') : t,
          o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
          i = a.split(r.delimiter, o),
          u = -1,
          s,
          p = r.charset
        if (r.charsetSentinel)
          for (s = 0; s < i.length; ++s)
            i[s].indexOf('utf8=') === 0 &&
              (i[s] === c_ ? (p = 'utf-8') : i[s] === l_ && (p = 'iso-8859-1'),
              (u = s),
              (s = i.length))
        for (s = 0; s < i.length; ++s)
          if (s !== u) {
            var y = i[s],
              E = y.indexOf(']='),
              m = E === -1 ? y.indexOf('=') : E + 1,
              g,
              A
            m === -1
              ? ((g = r.decoder(y, Ce.decoder, p, 'key')), (A = r.strictNullHandling ? null : ''))
              : ((g = r.decoder(y.slice(0, m), Ce.decoder, p, 'key')),
                (A = nr.maybeMap(xm(y.slice(m + 1), r), function (b) {
                  return r.decoder(b, Ce.decoder, p, 'value')
                }))),
              A && r.interpretNumericEntities && p === 'iso-8859-1' && (A = s_(A)),
              y.indexOf('[]=') > -1 && (A = u_(A) ? [A] : A),
              Pi.call(n, g) ? (n[g] = nr.combine(n[g], A)) : (n[g] = A)
          }
        return n
      },
      p_ = function (e, t, r, n) {
        for (var a = n ? t : xm(t, r), o = e.length - 1; o >= 0; --o) {
          var i,
            u = e[o]
          if (u === '[]' && r.parseArrays) i = [].concat(a)
          else {
            i = r.plainObjects ? Object.create(null) : {}
            var s = u.charAt(0) === '[' && u.charAt(u.length - 1) === ']' ? u.slice(1, -1) : u,
              p = parseInt(s, 10)
            !r.parseArrays && s === ''
              ? (i = { 0: a })
              : !isNaN(p) &&
                u !== s &&
                String(p) === s &&
                p >= 0 &&
                r.parseArrays &&
                p <= r.arrayLimit
              ? ((i = []), (i[p] = a))
              : s !== '__proto__' && (i[s] = a)
          }
          a = i
        }
        return a
      },
      f_ = function (t, r, n, a) {
        if (t) {
          var o = n.allowDots ? t.replace(/\.([^.[]+)/g, '[$1]') : t,
            i = /(\[[^[\]]*])/,
            u = /(\[[^[\]]*])/g,
            s = n.depth > 0 && i.exec(o),
            p = s ? o.slice(0, s.index) : o,
            y = []
          if (p) {
            if (!n.plainObjects && Pi.call(Object.prototype, p) && !n.allowPrototypes) return
            y.push(p)
          }
          for (var E = 0; n.depth > 0 && (s = u.exec(o)) !== null && E < n.depth; ) {
            if (
              ((E += 1),
              !n.plainObjects && Pi.call(Object.prototype, s[1].slice(1, -1)) && !n.allowPrototypes)
            )
              return
            y.push(s[1])
          }
          return s && y.push('[' + o.slice(s.index) + ']'), p_(y, r, n, a)
        }
      },
      h_ = function (t) {
        if (!t) return Ce
        if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != 'function')
          throw new TypeError('Decoder has to be a function.')
        if (typeof t.charset < 'u' && t.charset !== 'utf-8' && t.charset !== 'iso-8859-1')
          throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined')
        var r = typeof t.charset > 'u' ? Ce.charset : t.charset
        return {
          allowDots: typeof t.allowDots > 'u' ? Ce.allowDots : !!t.allowDots,
          allowPrototypes:
            typeof t.allowPrototypes == 'boolean' ? t.allowPrototypes : Ce.allowPrototypes,
          allowSparse: typeof t.allowSparse == 'boolean' ? t.allowSparse : Ce.allowSparse,
          arrayLimit: typeof t.arrayLimit == 'number' ? t.arrayLimit : Ce.arrayLimit,
          charset: r,
          charsetSentinel:
            typeof t.charsetSentinel == 'boolean' ? t.charsetSentinel : Ce.charsetSentinel,
          comma: typeof t.comma == 'boolean' ? t.comma : Ce.comma,
          decoder: typeof t.decoder == 'function' ? t.decoder : Ce.decoder,
          delimiter:
            typeof t.delimiter == 'string' || nr.isRegExp(t.delimiter) ? t.delimiter : Ce.delimiter,
          depth: typeof t.depth == 'number' || t.depth === !1 ? +t.depth : Ce.depth,
          ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
          interpretNumericEntities:
            typeof t.interpretNumericEntities == 'boolean'
              ? t.interpretNumericEntities
              : Ce.interpretNumericEntities,
          parameterLimit:
            typeof t.parameterLimit == 'number' ? t.parameterLimit : Ce.parameterLimit,
          parseArrays: t.parseArrays !== !1,
          plainObjects: typeof t.plainObjects == 'boolean' ? t.plainObjects : Ce.plainObjects,
          strictNullHandling:
            typeof t.strictNullHandling == 'boolean' ? t.strictNullHandling : Ce.strictNullHandling,
        }
      }
    Sm.exports = function (e, t) {
      var r = h_(t)
      if (e === '' || e === null || typeof e > 'u') return r.plainObjects ? Object.create(null) : {}
      for (
        var n = typeof e == 'string' ? d_(e, r) : e,
          a = r.plainObjects ? Object.create(null) : {},
          o = Object.keys(n),
          i = 0;
        i < o.length;
        ++i
      ) {
        var u = o[i],
          s = f_(u, n[u], r, typeof e == 'string')
        a = nr.merge(a, s, r)
      }
      return r.allowSparse === !0 ? a : nr.compact(a)
    }
  })
  var Ii = S((nZ, wm) => {
    'use strict'
    l()
    c()
    d()
    var m_ = Cm(),
      g_ = Fm(),
      y_ = ea()
    wm.exports = { formats: y_, parse: g_, stringify: m_ }
  })
  var Pm = S((Hee, Rm) => {
    l()
    c()
    d()
    ;(function () {
      'use strict'
      function e(i) {
        if (i == null) return !1
        switch (i.type) {
          case 'ArrayExpression':
          case 'AssignmentExpression':
          case 'BinaryExpression':
          case 'CallExpression':
          case 'ConditionalExpression':
          case 'FunctionExpression':
          case 'Identifier':
          case 'Literal':
          case 'LogicalExpression':
          case 'MemberExpression':
          case 'NewExpression':
          case 'ObjectExpression':
          case 'SequenceExpression':
          case 'ThisExpression':
          case 'UnaryExpression':
          case 'UpdateExpression':
            return !0
        }
        return !1
      }
      function t(i) {
        if (i == null) return !1
        switch (i.type) {
          case 'DoWhileStatement':
          case 'ForInStatement':
          case 'ForStatement':
          case 'WhileStatement':
            return !0
        }
        return !1
      }
      function r(i) {
        if (i == null) return !1
        switch (i.type) {
          case 'BlockStatement':
          case 'BreakStatement':
          case 'ContinueStatement':
          case 'DebuggerStatement':
          case 'DoWhileStatement':
          case 'EmptyStatement':
          case 'ExpressionStatement':
          case 'ForInStatement':
          case 'ForStatement':
          case 'IfStatement':
          case 'LabeledStatement':
          case 'ReturnStatement':
          case 'SwitchStatement':
          case 'ThrowStatement':
          case 'TryStatement':
          case 'VariableDeclaration':
          case 'WhileStatement':
          case 'WithStatement':
            return !0
        }
        return !1
      }
      function n(i) {
        return r(i) || (i != null && i.type === 'FunctionDeclaration')
      }
      function a(i) {
        switch (i.type) {
          case 'IfStatement':
            return i.alternate != null ? i.alternate : i.consequent
          case 'LabeledStatement':
          case 'ForStatement':
          case 'ForInStatement':
          case 'WhileStatement':
          case 'WithStatement':
            return i.body
        }
        return null
      }
      function o(i) {
        var u
        if (i.type !== 'IfStatement' || i.alternate == null) return !1
        u = i.consequent
        do {
          if (u.type === 'IfStatement' && u.alternate == null) return !0
          u = a(u)
        } while (u)
        return !1
      }
      Rm.exports = {
        isExpression: e,
        isStatement: r,
        isIterationStatement: t,
        isSourceElement: n,
        isProblematicIfStatement: o,
        trailingStatement: a,
      }
    })()
  })
  var ki = S((Wee, Im) => {
    l()
    c()
    d()
    ;(function () {
      'use strict'
      var e, t, r, n, a, o
      ;(t = {
        NonAsciiIdentifierStart:
          /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        NonAsciiIdentifierPart:
          /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
      }),
        (e = {
          NonAsciiIdentifierStart:
            /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
          NonAsciiIdentifierPart:
            /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
        })
      function i(x) {
        return 48 <= x && x <= 57
      }
      function u(x) {
        return (48 <= x && x <= 57) || (97 <= x && x <= 102) || (65 <= x && x <= 70)
      }
      function s(x) {
        return x >= 48 && x <= 55
      }
      r = [
        5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288,
        65279,
      ]
      function p(x) {
        return (
          x === 32 ||
          x === 9 ||
          x === 11 ||
          x === 12 ||
          x === 160 ||
          (x >= 5760 && r.indexOf(x) >= 0)
        )
      }
      function y(x) {
        return x === 10 || x === 13 || x === 8232 || x === 8233
      }
      function E(x) {
        if (x <= 65535) return String.fromCharCode(x)
        var F = String.fromCharCode(Math.floor((x - 65536) / 1024) + 55296),
          B = String.fromCharCode(((x - 65536) % 1024) + 56320)
        return F + B
      }
      for (n = new Array(128), o = 0; o < 128; ++o)
        n[o] = (o >= 97 && o <= 122) || (o >= 65 && o <= 90) || o === 36 || o === 95
      for (a = new Array(128), o = 0; o < 128; ++o)
        a[o] =
          (o >= 97 && o <= 122) ||
          (o >= 65 && o <= 90) ||
          (o >= 48 && o <= 57) ||
          o === 36 ||
          o === 95
      function m(x) {
        return x < 128 ? n[x] : t.NonAsciiIdentifierStart.test(E(x))
      }
      function g(x) {
        return x < 128 ? a[x] : t.NonAsciiIdentifierPart.test(E(x))
      }
      function A(x) {
        return x < 128 ? n[x] : e.NonAsciiIdentifierStart.test(E(x))
      }
      function b(x) {
        return x < 128 ? a[x] : e.NonAsciiIdentifierPart.test(E(x))
      }
      Im.exports = {
        isDecimalDigit: i,
        isHexDigit: u,
        isOctalDigit: s,
        isWhiteSpace: p,
        isLineTerminator: y,
        isIdentifierStartES5: m,
        isIdentifierPartES5: g,
        isIdentifierStartES6: A,
        isIdentifierPartES6: b,
      }
    })()
  })
  var Nm = S((Xee, km) => {
    l()
    c()
    d()
    ;(function () {
      'use strict'
      var e = ki()
      function t(m) {
        switch (m) {
          case 'implements':
          case 'interface':
          case 'package':
          case 'private':
          case 'protected':
          case 'public':
          case 'static':
          case 'let':
            return !0
          default:
            return !1
        }
      }
      function r(m, g) {
        return !g && m === 'yield' ? !1 : n(m, g)
      }
      function n(m, g) {
        if (g && t(m)) return !0
        switch (m.length) {
          case 2:
            return m === 'if' || m === 'in' || m === 'do'
          case 3:
            return m === 'var' || m === 'for' || m === 'new' || m === 'try'
          case 4:
            return (
              m === 'this' ||
              m === 'else' ||
              m === 'case' ||
              m === 'void' ||
              m === 'with' ||
              m === 'enum'
            )
          case 5:
            return (
              m === 'while' ||
              m === 'break' ||
              m === 'catch' ||
              m === 'throw' ||
              m === 'const' ||
              m === 'yield' ||
              m === 'class' ||
              m === 'super'
            )
          case 6:
            return (
              m === 'return' ||
              m === 'typeof' ||
              m === 'delete' ||
              m === 'switch' ||
              m === 'export' ||
              m === 'import'
            )
          case 7:
            return m === 'default' || m === 'finally' || m === 'extends'
          case 8:
            return m === 'function' || m === 'continue' || m === 'debugger'
          case 10:
            return m === 'instanceof'
          default:
            return !1
        }
      }
      function a(m, g) {
        return m === 'null' || m === 'true' || m === 'false' || r(m, g)
      }
      function o(m, g) {
        return m === 'null' || m === 'true' || m === 'false' || n(m, g)
      }
      function i(m) {
        return m === 'eval' || m === 'arguments'
      }
      function u(m) {
        var g, A, b
        if (m.length === 0 || ((b = m.charCodeAt(0)), !e.isIdentifierStartES5(b))) return !1
        for (g = 1, A = m.length; g < A; ++g)
          if (((b = m.charCodeAt(g)), !e.isIdentifierPartES5(b))) return !1
        return !0
      }
      function s(m, g) {
        return (m - 55296) * 1024 + (g - 56320) + 65536
      }
      function p(m) {
        var g, A, b, x, F
        if (m.length === 0) return !1
        for (F = e.isIdentifierStartES6, g = 0, A = m.length; g < A; ++g) {
          if (((b = m.charCodeAt(g)), 55296 <= b && b <= 56319)) {
            if ((++g, g >= A || ((x = m.charCodeAt(g)), !(56320 <= x && x <= 57343)))) return !1
            b = s(b, x)
          }
          if (!F(b)) return !1
          F = e.isIdentifierPartES6
        }
        return !0
      }
      function y(m, g) {
        return u(m) && !a(m, g)
      }
      function E(m, g) {
        return p(m) && !o(m, g)
      }
      km.exports = {
        isKeywordES5: r,
        isKeywordES6: n,
        isReservedWordES5: a,
        isReservedWordES6: o,
        isRestrictedWord: i,
        isIdentifierNameES5: u,
        isIdentifierNameES6: p,
        isIdentifierES5: y,
        isIdentifierES6: E,
      }
    })()
  })
  var Ni = S(ra => {
    l()
    c()
    d()
    ;(function () {
      'use strict'
      ;(ra.ast = Pm()), (ra.code = ki()), (ra.keyword = Nm())
    })()
  })
  var Lm = S((ate, N_) => {
    N_.exports = {
      name: 'doctrine',
      description: 'JSDoc parser',
      homepage: 'https://github.com/eslint/doctrine',
      main: 'lib/doctrine.js',
      version: '3.0.0',
      engines: { node: '>=6.0.0' },
      directories: { lib: './lib' },
      files: ['lib'],
      maintainers: [
        {
          name: 'Nicholas C. Zakas',
          email: 'nicholas+npm@nczconsulting.com',
          web: 'https://www.nczonline.net',
        },
        {
          name: 'Yusuke Suzuki',
          email: 'utatane.tea@gmail.com',
          web: 'https://github.com/Constellation',
        },
      ],
      repository: 'eslint/doctrine',
      devDependencies: {
        coveralls: '^3.0.1',
        dateformat: '^1.0.11',
        eslint: '^1.10.3',
        'eslint-release': '^1.0.0',
        linefix: '^0.1.1',
        mocha: '^3.4.2',
        'npm-license': '^0.3.1',
        nyc: '^10.3.2',
        semver: '^5.0.3',
        shelljs: '^0.5.3',
        'shelljs-nodecli': '^0.1.1',
        should: '^5.0.1',
      },
      license: 'Apache-2.0',
      scripts: {
        pretest: 'npm run lint',
        test: 'nyc mocha',
        coveralls: 'nyc report --reporter=text-lcov | coveralls',
        lint: 'eslint lib/',
        'generate-release': 'eslint-generate-release',
        'generate-alpharelease': 'eslint-generate-prerelease alpha',
        'generate-betarelease': 'eslint-generate-prerelease beta',
        'generate-rcrelease': 'eslint-generate-prerelease rc',
        'publish-release': 'eslint-publish-release',
      },
      dependencies: { esutils: '^2.0.2' },
    }
  })
  var qm = S((ote, Mm) => {
    l()
    c()
    d()
    function L_(e, t) {
      if (!e) throw new Error(t || 'unknown assertion error')
    }
    Mm.exports = L_
  })
  var Li = S(Gr => {
    l()
    c()
    d()
    ;(function () {
      'use strict'
      var e
      ;(e = Lm().version), (Gr.VERSION = e)
      function t(n) {
        ;(this.name = 'DoctrineError'), (this.message = n)
      }
      ;(t.prototype = (function () {
        var n = function () {}
        return (n.prototype = Error.prototype), new n()
      })()),
        (t.prototype.constructor = t),
        (Gr.DoctrineError = t)
      function r(n) {
        throw new t(n)
      }
      ;(Gr.throwError = r), (Gr.assert = qm())
    })()
  })
  var jm = S(Wr => {
    l()
    c()
    d()
    ;(function () {
      'use strict'
      var e, t, r, n, a, o, i, u, s, p, y, E
      ;(s = Ni()),
        (p = Li()),
        (e = {
          NullableLiteral: 'NullableLiteral',
          AllLiteral: 'AllLiteral',
          NullLiteral: 'NullLiteral',
          UndefinedLiteral: 'UndefinedLiteral',
          VoidLiteral: 'VoidLiteral',
          UnionType: 'UnionType',
          ArrayType: 'ArrayType',
          RecordType: 'RecordType',
          FieldType: 'FieldType',
          FunctionType: 'FunctionType',
          ParameterType: 'ParameterType',
          RestType: 'RestType',
          NonNullableType: 'NonNullableType',
          OptionalType: 'OptionalType',
          NullableType: 'NullableType',
          NameExpression: 'NameExpression',
          TypeApplication: 'TypeApplication',
          StringLiteralType: 'StringLiteralType',
          NumericLiteralType: 'NumericLiteralType',
          BooleanLiteralType: 'BooleanLiteralType',
        }),
        (t = {
          ILLEGAL: 0,
          DOT_LT: 1,
          REST: 2,
          LT: 3,
          GT: 4,
          LPAREN: 5,
          RPAREN: 6,
          LBRACE: 7,
          RBRACE: 8,
          LBRACK: 9,
          RBRACK: 10,
          COMMA: 11,
          COLON: 12,
          STAR: 13,
          PIPE: 14,
          QUESTION: 15,
          BANG: 16,
          EQUAL: 17,
          NAME: 18,
          STRING: 19,
          NUMBER: 20,
          EOF: 21,
        })
      function m(T) {
        return (
          '><(){}[],:*|?!='.indexOf(String.fromCharCode(T)) === -1 &&
          !s.code.isWhiteSpace(T) &&
          !s.code.isLineTerminator(T)
        )
      }
      function g(T, P, L, O) {
        ;(this._previous = T), (this._index = P), (this._token = L), (this._value = O)
      }
      ;(g.prototype.restore = function () {
        ;(o = this._previous), (a = this._index), (i = this._token), (u = this._value)
      }),
        (g.save = function () {
          return new g(o, a, i, u)
        })
      function A(T, P) {
        return E && (T.range = [P[0] + y, P[1] + y]), T
      }
      function b() {
        var T = r.charAt(a)
        return (a += 1), T
      }
      function x(T) {
        var P,
          L,
          O,
          $ = 0
        for (L = T === 'u' ? 4 : 2, P = 0; P < L; ++P)
          if (a < n && s.code.isHexDigit(r.charCodeAt(a)))
            (O = b()), ($ = $ * 16 + '0123456789abcdef'.indexOf(O.toLowerCase()))
          else return ''
        return String.fromCharCode($)
      }
      function F() {
        var T = '',
          P,
          L,
          O,
          $,
          z
        for (P = r.charAt(a), ++a; a < n; )
          if (((L = b()), L === P)) {
            P = ''
            break
          } else if (L === '\\')
            if (((L = b()), s.code.isLineTerminator(L.charCodeAt(0))))
              L === '\r' && r.charCodeAt(a) === 10 && ++a
            else
              switch (L) {
                case 'n':
                  T += `
`
                  break
                case 'r':
                  T += '\r'
                  break
                case 't':
                  T += '	'
                  break
                case 'u':
                case 'x':
                  ;(z = a), ($ = x(L)), $ ? (T += $) : ((a = z), (T += L))
                  break
                case 'b':
                  T += '\b'
                  break
                case 'f':
                  T += '\f'
                  break
                case 'v':
                  T += '\v'
                  break
                default:
                  s.code.isOctalDigit(L.charCodeAt(0))
                    ? ((O = '01234567'.indexOf(L)),
                      a < n &&
                        s.code.isOctalDigit(r.charCodeAt(a)) &&
                        ((O = O * 8 + '01234567'.indexOf(b())),
                        '0123'.indexOf(L) >= 0 &&
                          a < n &&
                          s.code.isOctalDigit(r.charCodeAt(a)) &&
                          (O = O * 8 + '01234567'.indexOf(b()))),
                      (T += String.fromCharCode(O)))
                    : (T += L)
                  break
              }
          else {
            if (s.code.isLineTerminator(L.charCodeAt(0))) break
            T += L
          }
        return P !== '' && p.throwError('unexpected quote'), (u = T), t.STRING
      }
      function B() {
        var T, P
        if (((T = ''), (P = r.charCodeAt(a)), P !== 46)) {
          if (((T = b()), (P = r.charCodeAt(a)), T === '0')) {
            if (P === 120 || P === 88) {
              for (T += b(); a < n && ((P = r.charCodeAt(a)), !!s.code.isHexDigit(P)); ) T += b()
              return (
                T.length <= 2 && p.throwError('unexpected token'),
                a < n &&
                  ((P = r.charCodeAt(a)),
                  s.code.isIdentifierStartES5(P) && p.throwError('unexpected token')),
                (u = parseInt(T, 16)),
                t.NUMBER
              )
            }
            if (s.code.isOctalDigit(P)) {
              for (T += b(); a < n && ((P = r.charCodeAt(a)), !!s.code.isOctalDigit(P)); ) T += b()
              return (
                a < n &&
                  ((P = r.charCodeAt(a)),
                  (s.code.isIdentifierStartES5(P) || s.code.isDecimalDigit(P)) &&
                    p.throwError('unexpected token')),
                (u = parseInt(T, 8)),
                t.NUMBER
              )
            }
            s.code.isDecimalDigit(P) && p.throwError('unexpected token')
          }
          for (; a < n && ((P = r.charCodeAt(a)), !!s.code.isDecimalDigit(P)); ) T += b()
        }
        if (P === 46)
          for (T += b(); a < n && ((P = r.charCodeAt(a)), !!s.code.isDecimalDigit(P)); ) T += b()
        if (P === 101 || P === 69)
          if (
            ((T += b()),
            (P = r.charCodeAt(a)),
            (P === 43 || P === 45) && (T += b()),
            (P = r.charCodeAt(a)),
            s.code.isDecimalDigit(P))
          )
            for (T += b(); a < n && ((P = r.charCodeAt(a)), !!s.code.isDecimalDigit(P)); ) T += b()
          else p.throwError('unexpected token')
        return (
          a < n &&
            ((P = r.charCodeAt(a)),
            s.code.isIdentifierStartES5(P) && p.throwError('unexpected token')),
          (u = parseFloat(T)),
          t.NUMBER
        )
      }
      function I() {
        var T, P
        for (u = b(); a < n && m(r.charCodeAt(a)); ) {
          if (((T = r.charCodeAt(a)), T === 46)) {
            if (a + 1 >= n) return t.ILLEGAL
            if (((P = r.charCodeAt(a + 1)), P === 60)) break
          }
          u += b()
        }
        return t.NAME
      }
      function M() {
        var T
        for (o = a; a < n && s.code.isWhiteSpace(r.charCodeAt(a)); ) b()
        if (a >= n) return (i = t.EOF), i
        switch (((T = r.charCodeAt(a)), T)) {
          case 39:
          case 34:
            return (i = F()), i
          case 58:
            return b(), (i = t.COLON), i
          case 44:
            return b(), (i = t.COMMA), i
          case 40:
            return b(), (i = t.LPAREN), i
          case 41:
            return b(), (i = t.RPAREN), i
          case 91:
            return b(), (i = t.LBRACK), i
          case 93:
            return b(), (i = t.RBRACK), i
          case 123:
            return b(), (i = t.LBRACE), i
          case 125:
            return b(), (i = t.RBRACE), i
          case 46:
            if (a + 1 < n) {
              if (((T = r.charCodeAt(a + 1)), T === 60)) return b(), b(), (i = t.DOT_LT), i
              if (T === 46 && a + 2 < n && r.charCodeAt(a + 2) === 46)
                return b(), b(), b(), (i = t.REST), i
              if (s.code.isDecimalDigit(T)) return (i = B()), i
            }
            return (i = t.ILLEGAL), i
          case 60:
            return b(), (i = t.LT), i
          case 62:
            return b(), (i = t.GT), i
          case 42:
            return b(), (i = t.STAR), i
          case 124:
            return b(), (i = t.PIPE), i
          case 63:
            return b(), (i = t.QUESTION), i
          case 33:
            return b(), (i = t.BANG), i
          case 61:
            return b(), (i = t.EQUAL), i
          case 45:
            return (i = B()), i
          default:
            return s.code.isDecimalDigit(T) ? ((i = B()), i) : (p.assert(m(T)), (i = I()), i)
        }
      }
      function w(T, P) {
        p.assert(i === T, P || 'consumed token not matched'), M()
      }
      function N(T, P) {
        i !== T && p.throwError(P || 'unexpected token'), M()
      }
      function k() {
        var T,
          P = a - 1
        if ((w(t.LPAREN, 'UnionType should start with ('), (T = []), i !== t.RPAREN))
          for (; T.push(K()), i !== t.RPAREN; ) N(t.PIPE)
        return (
          w(t.RPAREN, 'UnionType should end with )'), A({ type: e.UnionType, elements: T }, [P, o])
        )
      }
      function U() {
        var T,
          P = a - 1,
          L
        for (w(t.LBRACK, 'ArrayType should start with ['), T = []; i !== t.RBRACK; ) {
          if (i === t.REST) {
            ;(L = a - 3), w(t.REST), T.push(A({ type: e.RestType, expression: K() }, [L, o]))
            break
          } else T.push(K())
          i !== t.RBRACK && N(t.COMMA)
        }
        return N(t.RBRACK), A({ type: e.ArrayType, elements: T }, [P, o])
      }
      function V() {
        var T = u
        if (i === t.NAME || i === t.STRING) return M(), T
        if (i === t.NUMBER) return w(t.NUMBER), String(T)
        p.throwError('unexpected token')
      }
      function H() {
        var T,
          P = o
        return (
          (T = V()),
          i === t.COLON
            ? (w(t.COLON), A({ type: e.FieldType, key: T, value: K() }, [P, o]))
            : A({ type: e.FieldType, key: T, value: null }, [P, o])
        )
      }
      function oe() {
        var T,
          P = a - 1,
          L
        if ((w(t.LBRACE, 'RecordType should start with {'), (T = []), i === t.COMMA)) w(t.COMMA)
        else for (; i !== t.RBRACE; ) T.push(H()), i !== t.RBRACE && N(t.COMMA)
        return (L = a), N(t.RBRACE), A({ type: e.RecordType, fields: T }, [P, L])
      }
      function X() {
        var T = u,
          P = a - T.length
        return (
          N(t.NAME),
          i === t.COLON &&
            (T === 'module' || T === 'external' || T === 'event') &&
            (w(t.COLON), (T += ':' + u), N(t.NAME)),
          A({ type: e.NameExpression, name: T }, [P, o])
        )
      }
      function Y() {
        var T = []
        for (T.push(Z()); i === t.COMMA; ) w(t.COMMA), T.push(Z())
        return T
      }
      function R() {
        var T,
          P,
          L = a - u.length
        return (
          (T = X()),
          i === t.DOT_LT || i === t.LT
            ? (M(),
              (P = Y()),
              N(t.GT),
              A({ type: e.TypeApplication, expression: T, applications: P }, [L, o]))
            : T
        )
      }
      function _() {
        return (
          w(t.COLON, 'ResultType should start with :'),
          i === t.NAME && u === 'void' ? (w(t.NAME), { type: e.VoidLiteral }) : K()
        )
      }
      function j() {
        for (var T = [], P = !1, L, O = !1, $, z = a - 3, pe; i !== t.RPAREN; )
          i === t.REST && (w(t.REST), (O = !0)),
            ($ = o),
            (L = K()),
            L.type === e.NameExpression &&
              i === t.COLON &&
              ((pe = o - L.name.length),
              w(t.COLON),
              (L = A({ type: e.ParameterType, name: L.name, expression: K() }, [pe, o]))),
            i === t.EQUAL
              ? (w(t.EQUAL), (L = A({ type: e.OptionalType, expression: L }, [$, o])), (P = !0))
              : P && p.throwError('unexpected token'),
            O && (L = A({ type: e.RestType, expression: L }, [z, o])),
            T.push(L),
            i !== t.RPAREN && N(t.COMMA)
        return T
      }
      function G() {
        var T,
          P,
          L,
          O,
          $,
          z = a - u.length
        return (
          p.assert(i === t.NAME && u === 'function', "FunctionType should start with 'function'"),
          w(t.NAME),
          N(t.LPAREN),
          (T = !1),
          (L = []),
          (P = null),
          i !== t.RPAREN &&
            (i === t.NAME && (u === 'this' || u === 'new')
              ? ((T = u === 'new'),
                w(t.NAME),
                N(t.COLON),
                (P = R()),
                i === t.COMMA && (w(t.COMMA), (L = j())))
              : (L = j())),
          N(t.RPAREN),
          (O = null),
          i === t.COLON && (O = _()),
          ($ = A({ type: e.FunctionType, params: L, result: O }, [z, o])),
          P && (($.this = P), T && ($.new = !0)),
          $
        )
      }
      function J() {
        var T, P
        switch (i) {
          case t.STAR:
            return w(t.STAR), A({ type: e.AllLiteral }, [o - 1, o])
          case t.LPAREN:
            return k()
          case t.LBRACK:
            return U()
          case t.LBRACE:
            return oe()
          case t.NAME:
            if (((P = a - u.length), u === 'null'))
              return w(t.NAME), A({ type: e.NullLiteral }, [P, o])
            if (u === 'undefined') return w(t.NAME), A({ type: e.UndefinedLiteral }, [P, o])
            if (u === 'true' || u === 'false')
              return w(t.NAME), A({ type: e.BooleanLiteralType, value: u === 'true' }, [P, o])
            if (((T = g.save()), u === 'function'))
              try {
                return G()
              } catch {
                T.restore()
              }
            return R()
          case t.STRING:
            return M(), A({ type: e.StringLiteralType, value: u }, [o - u.length - 2, o])
          case t.NUMBER:
            return M(), A({ type: e.NumericLiteralType, value: u }, [o - String(u).length, o])
          default:
            p.throwError('unexpected token')
        }
      }
      function K() {
        var T, P
        return i === t.QUESTION
          ? ((P = a - 1),
            w(t.QUESTION),
            i === t.COMMA ||
            i === t.EQUAL ||
            i === t.RBRACE ||
            i === t.RPAREN ||
            i === t.PIPE ||
            i === t.EOF ||
            i === t.RBRACK ||
            i === t.GT
              ? A({ type: e.NullableLiteral }, [P, o])
              : A({ type: e.NullableType, expression: J(), prefix: !0 }, [P, o]))
          : i === t.BANG
          ? ((P = a - 1),
            w(t.BANG),
            A({ type: e.NonNullableType, expression: J(), prefix: !0 }, [P, o]))
          : ((P = o),
            (T = J()),
            i === t.BANG
              ? (w(t.BANG), A({ type: e.NonNullableType, expression: T, prefix: !1 }, [P, o]))
              : i === t.QUESTION
              ? (w(t.QUESTION), A({ type: e.NullableType, expression: T, prefix: !1 }, [P, o]))
              : i === t.LBRACK
              ? (w(t.LBRACK),
                N(t.RBRACK, 'expected an array-style type declaration (' + u + '[])'),
                A(
                  {
                    type: e.TypeApplication,
                    expression: A({ type: e.NameExpression, name: 'Array' }, [P, o]),
                    applications: [T],
                  },
                  [P, o]
                ))
              : T)
      }
      function Z() {
        var T, P
        if (((T = K()), i !== t.PIPE)) return T
        for (P = [T], w(t.PIPE); P.push(K()), i === t.PIPE; ) w(t.PIPE)
        return A({ type: e.UnionType, elements: P }, [0, a])
      }
      function se() {
        var T
        return i === t.REST
          ? (w(t.REST), A({ type: e.RestType, expression: Z() }, [0, a]))
          : ((T = Z()),
            i === t.EQUAL ? (w(t.EQUAL), A({ type: e.OptionalType, expression: T }, [0, a])) : T)
      }
      function ke(T, P) {
        var L
        return (
          (r = T),
          (n = r.length),
          (a = 0),
          (o = 0),
          (E = P && P.range),
          (y = (P && P.startIndex) || 0),
          M(),
          (L = Z()),
          P && P.midstream
            ? { expression: L, index: o }
            : (i !== t.EOF && p.throwError('not reach to EOF'), L)
        )
      }
      function Ne(T, P) {
        var L
        return (
          (r = T),
          (n = r.length),
          (a = 0),
          (o = 0),
          (E = P && P.range),
          (y = (P && P.startIndex) || 0),
          M(),
          (L = se()),
          P && P.midstream
            ? { expression: L, index: o }
            : (i !== t.EOF && p.throwError('not reach to EOF'), L)
        )
      }
      function Q(T, P, L) {
        var O, $, z
        switch (T.type) {
          case e.NullableLiteral:
            O = '?'
            break
          case e.AllLiteral:
            O = '*'
            break
          case e.NullLiteral:
            O = 'null'
            break
          case e.UndefinedLiteral:
            O = 'undefined'
            break
          case e.VoidLiteral:
            O = 'void'
            break
          case e.UnionType:
            for (L ? (O = '') : (O = '('), $ = 0, z = T.elements.length; $ < z; ++$)
              (O += Q(T.elements[$], P)), $ + 1 !== z && (O += P ? '|' : ' | ')
            L || (O += ')')
            break
          case e.ArrayType:
            for (O = '[', $ = 0, z = T.elements.length; $ < z; ++$)
              (O += Q(T.elements[$], P)), $ + 1 !== z && (O += P ? ',' : ', ')
            O += ']'
            break
          case e.RecordType:
            for (O = '{', $ = 0, z = T.fields.length; $ < z; ++$)
              (O += Q(T.fields[$], P)), $ + 1 !== z && (O += P ? ',' : ', ')
            O += '}'
            break
          case e.FieldType:
            T.value ? (O = T.key + (P ? ':' : ': ') + Q(T.value, P)) : (O = T.key)
            break
          case e.FunctionType:
            for (
              O = P ? 'function(' : 'function (',
                T.this &&
                  (T.new ? (O += P ? 'new:' : 'new: ') : (O += P ? 'this:' : 'this: '),
                  (O += Q(T.this, P)),
                  T.params.length !== 0 && (O += P ? ',' : ', ')),
                $ = 0,
                z = T.params.length;
              $ < z;
              ++$
            )
              (O += Q(T.params[$], P)), $ + 1 !== z && (O += P ? ',' : ', ')
            ;(O += ')'), T.result && (O += (P ? ':' : ': ') + Q(T.result, P))
            break
          case e.ParameterType:
            O = T.name + (P ? ':' : ': ') + Q(T.expression, P)
            break
          case e.RestType:
            ;(O = '...'), T.expression && (O += Q(T.expression, P))
            break
          case e.NonNullableType:
            T.prefix ? (O = '!' + Q(T.expression, P)) : (O = Q(T.expression, P) + '!')
            break
          case e.OptionalType:
            O = Q(T.expression, P) + '='
            break
          case e.NullableType:
            T.prefix ? (O = '?' + Q(T.expression, P)) : (O = Q(T.expression, P) + '?')
            break
          case e.NameExpression:
            O = T.name
            break
          case e.TypeApplication:
            for (O = Q(T.expression, P) + '.<', $ = 0, z = T.applications.length; $ < z; ++$)
              (O += Q(T.applications[$], P)), $ + 1 !== z && (O += P ? ',' : ', ')
            O += '>'
            break
          case e.StringLiteralType:
            O = '"' + T.value + '"'
            break
          case e.NumericLiteralType:
            O = String(T.value)
            break
          case e.BooleanLiteralType:
            O = String(T.value)
            break
          default:
            p.throwError('Unknown type ' + T.type)
        }
        return O
      }
      function He(T, P) {
        return P == null && (P = {}), Q(T, P.compact, P.topLevel)
      }
      ;(Wr.parseType = ke), (Wr.parseParamType = Ne), (Wr.stringify = He), (Wr.Syntax = e)
    })()
  })
  var $m = S(Je => {
    l()
    c()
    d()
    ;(function () {
      'use strict'
      var e, t, r, n, a
      ;(n = Ni()), (e = jm()), (t = Li())
      function o(w, N, k) {
        return w.slice(N, k)
      }
      a = (function () {
        var w = Object.prototype.hasOwnProperty
        return function (k, U) {
          return w.call(k, U)
        }
      })()
      function i(w) {
        var N = {},
          k
        for (k in w) w.hasOwnProperty(k) && (N[k] = w[k])
        return N
      }
      function u(w) {
        return (w >= 97 && w <= 122) || (w >= 65 && w <= 90) || (w >= 48 && w <= 57)
      }
      function s(w) {
        return w === 'param' || w === 'argument' || w === 'arg'
      }
      function p(w) {
        return w === 'return' || w === 'returns'
      }
      function y(w) {
        return w === 'property' || w === 'prop'
      }
      function E(w) {
        return s(w) || y(w) || w === 'alias' || w === 'this' || w === 'mixes' || w === 'requires'
      }
      function m(w) {
        return E(w) || w === 'const' || w === 'constant'
      }
      function g(w) {
        return y(w) || s(w)
      }
      function A(w) {
        return y(w) || s(w)
      }
      function b(w) {
        return (
          s(w) ||
          p(w) ||
          w === 'define' ||
          w === 'enum' ||
          w === 'implements' ||
          w === 'this' ||
          w === 'type' ||
          w === 'typedef' ||
          y(w)
        )
      }
      function x(w) {
        return (
          b(w) ||
          w === 'throws' ||
          w === 'const' ||
          w === 'constant' ||
          w === 'namespace' ||
          w === 'member' ||
          w === 'var' ||
          w === 'module' ||
          w === 'constructor' ||
          w === 'class' ||
          w === 'extends' ||
          w === 'augments' ||
          w === 'public' ||
          w === 'private' ||
          w === 'protected'
        )
      }
      var F = '[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]',
        B =
          '(' +
          F +
          '*(?:\\*' +
          F +
          `?)?)(.+|[\r
\u2028\u2029])`
      function I(w) {
        return w
          .replace(/^\/\*\*?/, '')
          .replace(/\*\/$/, '')
          .replace(new RegExp(B, 'g'), '$2')
          .replace(/\s*$/, '')
      }
      function M(w, N) {
        for (var k = w.replace(/^\/\*\*?/, ''), U = 0, V = new RegExp(B, 'g'), H; (H = V.exec(k)); )
          if (((U += H[1].length), H.index + H[0].length > N + U))
            return N + U + w.length - k.length
        return w.replace(/\*\/$/, '').replace(/\s*$/, '').length
      }
      ;(function (w) {
        var N, k, U, V, H, oe, X, Y, R
        function _() {
          var L = H.charCodeAt(k)
          return (
            (k += 1),
            n.code.isLineTerminator(L) && !(L === 13 && H.charCodeAt(k) === 10) && (U += 1),
            String.fromCharCode(L)
          )
        }
        function j() {
          var L = ''
          for (_(); k < V && u(H.charCodeAt(k)); ) L += _()
          return L
        }
        function G() {
          var L,
            O,
            $ = k
          for (O = !1; $ < V; ) {
            if (
              ((L = H.charCodeAt($)),
              n.code.isLineTerminator(L) && !(L === 13 && H.charCodeAt($ + 1) === 10))
            )
              O = !0
            else if (O) {
              if (L === 64) break
              n.code.isWhiteSpace(L) || (O = !1)
            }
            $ += 1
          }
          return $
        }
        function J(L, O, $) {
          for (var z, pe, ae, ie, Ae = !1; k < O; )
            if (((z = H.charCodeAt(k)), n.code.isWhiteSpace(z))) _()
            else if (z === 123) {
              _()
              break
            } else {
              Ae = !0
              break
            }
          if (Ae) return null
          for (pe = 1, ae = ''; k < O; )
            if (((z = H.charCodeAt(k)), n.code.isLineTerminator(z))) _()
            else {
              if (z === 125) {
                if (((pe -= 1), pe === 0)) {
                  _()
                  break
                }
              } else z === 123 && (pe += 1)
              ae === '' && (ie = k), (ae += _())
            }
          return pe !== 0
            ? t.throwError('Braces are not balanced')
            : A(L)
            ? e.parseParamType(ae, { startIndex: Ne(ie), range: $ })
            : e.parseType(ae, { startIndex: Ne(ie), range: $ })
        }
        function K(L) {
          var O
          if (!n.code.isIdentifierStartES5(H.charCodeAt(k)) && !H[k].match(/[0-9]/)) return null
          for (O = _(); k < L && n.code.isIdentifierPartES5(H.charCodeAt(k)); ) O += _()
          return O
        }
        function Z(L) {
          for (
            ;
            k < L &&
            (n.code.isWhiteSpace(H.charCodeAt(k)) || n.code.isLineTerminator(H.charCodeAt(k)));

          )
            _()
        }
        function se(L, O, $) {
          var z = '',
            pe,
            ae
          if ((Z(L), k >= L)) return null
          if (H.charCodeAt(k) === 91)
            if (O) (pe = !0), (z = _())
            else return null
          if (((z += K(L)), $))
            for (
              H.charCodeAt(k) === 58 &&
                (z === 'module' || z === 'external' || z === 'event') &&
                ((z += _()), (z += K(L))),
                H.charCodeAt(k) === 91 && H.charCodeAt(k + 1) === 93 && ((z += _()), (z += _()));
              H.charCodeAt(k) === 46 ||
              H.charCodeAt(k) === 47 ||
              H.charCodeAt(k) === 35 ||
              H.charCodeAt(k) === 45 ||
              H.charCodeAt(k) === 126;

            )
              (z += _()), (z += K(L))
          if (pe) {
            if ((Z(L), H.charCodeAt(k) === 61)) {
              ;(z += _()), Z(L)
              for (var ie, Ae = 1; k < L; ) {
                if (
                  ((ie = H.charCodeAt(k)),
                  n.code.isWhiteSpace(ie) && (ae || (Z(L), (ie = H.charCodeAt(k)))),
                  ie === 39 && (ae ? ae === "'" && (ae = '') : (ae = "'")),
                  ie === 34 && (ae ? ae === '"' && (ae = '') : (ae = '"')),
                  ie === 91)
                )
                  Ae++
                else if (ie === 93 && --Ae === 0) break
                z += _()
              }
            }
            if ((Z(L), k >= L || H.charCodeAt(k) !== 93)) return null
            z += _()
          }
          return z
        }
        function ke() {
          for (; k < V && H.charCodeAt(k) !== 64; ) _()
          return k >= V ? !1 : (t.assert(H.charCodeAt(k) === 64), !0)
        }
        function Ne(L) {
          return H === oe ? L : M(oe, L)
        }
        function Q(L, O) {
          ;(this._options = L),
            (this._title = O.toLowerCase()),
            (this._tag = { title: O, description: null }),
            this._options.lineNumbers && (this._tag.lineNumber = U),
            (this._first = k - O.length - 1),
            (this._last = 0),
            (this._extra = {})
        }
        ;(Q.prototype.addError = function (O) {
          var $ = Array.prototype.slice.call(arguments, 1),
            z = O.replace(/%(\d)/g, function (pe, ae) {
              return t.assert(ae < $.length, 'Message reference must be in range'), $[ae]
            })
          return (
            this._tag.errors || (this._tag.errors = []),
            R && t.throwError(z),
            this._tag.errors.push(z),
            X
          )
        }),
          (Q.prototype.parseType = function () {
            if (b(this._title))
              try {
                if (
                  ((this._tag.type = J(this._title, this._last, this._options.range)),
                  !this._tag.type &&
                    !s(this._title) &&
                    !p(this._title) &&
                    !this.addError('Missing or invalid tag type'))
                )
                  return !1
              } catch (L) {
                if (((this._tag.type = null), !this.addError(L.message))) return !1
              }
            else if (x(this._title))
              try {
                this._tag.type = J(this._title, this._last, this._options.range)
              } catch {}
            return !0
          }),
          (Q.prototype._parseNamePath = function (L) {
            var O
            return (
              (O = se(this._last, Y && A(this._title), !0)),
              !O && !L && !this.addError('Missing or invalid tag name')
                ? !1
                : ((this._tag.name = O), !0)
            )
          }),
          (Q.prototype.parseNamePath = function () {
            return this._parseNamePath(!1)
          }),
          (Q.prototype.parseNamePathOptional = function () {
            return this._parseNamePath(!0)
          }),
          (Q.prototype.parseName = function () {
            var L, O
            if (m(this._title))
              if (
                ((this._tag.name = se(this._last, Y && A(this._title), g(this._title))),
                this._tag.name)
              )
                (O = this._tag.name),
                  O.charAt(0) === '[' &&
                    O.charAt(O.length - 1) === ']' &&
                    ((L = O.substring(1, O.length - 1).split('=')),
                    L.length > 1 && (this._tag.default = L.slice(1).join('=')),
                    (this._tag.name = L[0]),
                    this._tag.type &&
                      this._tag.type.type !== 'OptionalType' &&
                      (this._tag.type = { type: 'OptionalType', expression: this._tag.type }))
              else {
                if (!E(this._title)) return !0
                if (s(this._title) && this._tag.type && this._tag.type.name)
                  (this._extra.name = this._tag.type),
                    (this._tag.name = this._tag.type.name),
                    (this._tag.type = null)
                else if (!this.addError('Missing or invalid tag name')) return !1
              }
            return !0
          }),
          (Q.prototype.parseDescription = function () {
            var O = o(H, k, this._last).trim()
            return O && (/^-\s+/.test(O) && (O = O.substring(2)), (this._tag.description = O)), !0
          }),
          (Q.prototype.parseCaption = function () {
            var O = o(H, k, this._last).trim(),
              $ = '<caption>',
              z = '</caption>',
              pe = O.indexOf($),
              ae = O.indexOf(z)
            return (
              pe >= 0 && ae >= 0
                ? ((this._tag.caption = O.substring(pe + $.length, ae).trim()),
                  (this._tag.description = O.substring(ae + z.length).trim()))
                : (this._tag.description = O),
              !0
            )
          }),
          (Q.prototype.parseKind = function () {
            var O, $
            return (
              ($ = {
                class: !0,
                constant: !0,
                event: !0,
                external: !0,
                file: !0,
                function: !0,
                member: !0,
                mixin: !0,
                module: !0,
                namespace: !0,
                typedef: !0,
              }),
              (O = o(H, k, this._last).trim()),
              (this._tag.kind = O),
              !(!a($, O) && !this.addError("Invalid kind name '%0'", O))
            )
          }),
          (Q.prototype.parseAccess = function () {
            var O
            return (
              (O = o(H, k, this._last).trim()),
              (this._tag.access = O),
              !(
                O !== 'private' &&
                O !== 'protected' &&
                O !== 'public' &&
                !this.addError("Invalid access name '%0'", O)
              )
            )
          }),
          (Q.prototype.parseThis = function () {
            var O = o(H, k, this._last).trim()
            if (O && O.charAt(0) === '{') {
              var $ = this.parseType()
              return ($ && this._tag.type.type === 'NameExpression') ||
                this._tag.type.type === 'UnionType'
                ? ((this._tag.name = this._tag.type.name), !0)
                : this.addError('Invalid name for this')
            } else return this.parseNamePath()
          }),
          (Q.prototype.parseVariation = function () {
            var O, $
            return (
              ($ = o(H, k, this._last).trim()),
              (O = parseFloat($, 10)),
              (this._tag.variation = O),
              !(isNaN(O) && !this.addError("Invalid variation '%0'", $))
            )
          }),
          (Q.prototype.ensureEnd = function () {
            var L = o(H, k, this._last).trim()
            return !(L && !this.addError("Unknown content '%0'", L))
          }),
          (Q.prototype.epilogue = function () {
            var O
            return (
              (O = this._tag.description),
              !(
                A(this._title) &&
                !this._tag.type &&
                O &&
                O.charAt(0) === '[' &&
                ((this._tag.type = this._extra.name),
                this._tag.name || (this._tag.name = void 0),
                !Y && !this.addError('Missing or invalid tag name'))
              )
            )
          }),
          (N = {
            access: ['parseAccess'],
            alias: ['parseNamePath', 'ensureEnd'],
            augments: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            constructor: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            class: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            extends: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            example: ['parseCaption'],
            deprecated: ['parseDescription'],
            global: ['ensureEnd'],
            inner: ['ensureEnd'],
            instance: ['ensureEnd'],
            kind: ['parseKind'],
            mixes: ['parseNamePath', 'ensureEnd'],
            mixin: ['parseNamePathOptional', 'ensureEnd'],
            member: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            method: ['parseNamePathOptional', 'ensureEnd'],
            module: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            func: ['parseNamePathOptional', 'ensureEnd'],
            function: ['parseNamePathOptional', 'ensureEnd'],
            var: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            name: ['parseNamePath', 'ensureEnd'],
            namespace: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            private: ['parseType', 'parseDescription'],
            protected: ['parseType', 'parseDescription'],
            public: ['parseType', 'parseDescription'],
            readonly: ['ensureEnd'],
            requires: ['parseNamePath', 'ensureEnd'],
            since: ['parseDescription'],
            static: ['ensureEnd'],
            summary: ['parseDescription'],
            this: ['parseThis', 'ensureEnd'],
            todo: ['parseDescription'],
            typedef: ['parseType', 'parseNamePathOptional'],
            variation: ['parseVariation'],
            version: ['parseDescription'],
          }),
          (Q.prototype.parse = function () {
            var O, $, z, pe
            if (!this._title && !this.addError('Missing or invalid title')) return null
            for (
              this._last = G(this._title),
                this._options.range &&
                  (this._tag.range = [
                    this._first,
                    H.slice(0, this._last).replace(/\s*$/, '').length,
                  ].map(Ne)),
                a(N, this._title)
                  ? (z = N[this._title])
                  : (z = ['parseType', 'parseName', 'parseDescription', 'epilogue']),
                O = 0,
                $ = z.length;
              O < $;
              ++O
            )
              if (((pe = z[O]), !this[pe]())) return null
            return this._tag
          })
        function He(L) {
          var O, $, z
          if (!ke()) return null
          for (O = j(), $ = new Q(L, O), z = $.parse(); k < $._last; ) _()
          return z
        }
        function T(L) {
          var O = '',
            $,
            z
          for (z = !0; k < V && (($ = H.charCodeAt(k)), !(z && $ === 64)); )
            n.code.isLineTerminator($) ? (z = !0) : z && !n.code.isWhiteSpace($) && (z = !1),
              (O += _())
          return L ? O : O.trim()
        }
        function P(L, O) {
          var $ = [],
            z,
            pe,
            ae,
            ie,
            Ae
          if (
            (O === void 0 && (O = {}),
            typeof O.unwrap == 'boolean' && O.unwrap ? (H = I(L)) : (H = L),
            (oe = L),
            O.tags)
          )
            if (Array.isArray(O.tags))
              for (ae = {}, ie = 0, Ae = O.tags.length; ie < Ae; ie++)
                typeof O.tags[ie] == 'string'
                  ? (ae[O.tags[ie]] = !0)
                  : t.throwError('Invalid "tags" parameter: ' + O.tags)
            else t.throwError('Invalid "tags" parameter: ' + O.tags)
          for (
            V = H.length,
              k = 0,
              U = 0,
              X = O.recoverable,
              Y = O.sloppy,
              R = O.strict,
              pe = T(O.preserveWhitespace);
            (z = He(O)), !!z;

          )
            (!ae || ae.hasOwnProperty(z.title)) && $.push(z)
          return { description: pe, tags: $ }
        }
        w.parse = P
      })((r = {})),
        (Je.version = t.VERSION),
        (Je.parse = r.parse),
        (Je.parseType = e.parseType),
        (Je.parseParamType = e.parseParamType),
        (Je.unwrapComment = I),
        (Je.Syntax = i(e.Syntax)),
        (Je.Error = t.DoctrineError),
        (Je.type = {
          Syntax: Je.Syntax,
          parseType: e.parseType,
          parseParamType: e.parseParamType,
          stringify: e.stringify,
        })
    })()
  })
  var dg = S((Lte, cg) => {
    l()
    c()
    d()
    cg.exports = {
      tocSelector: '.js-toc',
      contentSelector: '.js-toc-content',
      headingSelector: 'h1, h2, h3',
      ignoreSelector: '.js-toc-ignore',
      hasInnerContainers: !1,
      linkClass: 'toc-link',
      extraLinkClasses: '',
      activeLinkClass: 'is-active-link',
      listClass: 'toc-list',
      extraListClasses: '',
      isCollapsedClass: 'is-collapsed',
      collapsibleClass: 'is-collapsible',
      listItemClass: 'toc-list-item',
      activeListItemClass: 'is-active-li',
      collapseDepth: 0,
      scrollSmooth: !0,
      scrollSmoothDuration: 420,
      scrollSmoothOffset: 0,
      scrollEndCallback: function (e) {},
      headingsOffset: 1,
      throttleTimeout: 50,
      positionFixedSelector: null,
      positionFixedClass: 'is-position-fixed',
      fixedSidebarOffset: 'auto',
      includeHtml: !1,
      includeTitleTags: !1,
      onClick: function (e) {},
      orderedList: !0,
      scrollContainer: null,
      skipRendering: !1,
      headingLabelCallback: !1,
      ignoreHiddenElements: !1,
      headingObjectCallback: null,
      basePath: '',
      disableTocScrollSync: !1,
      tocScrollOffset: 0,
    }
  })
  var fg = S(($te, pg) => {
    l()
    c()
    d()
    pg.exports = function (e) {
      var t = [].forEach,
        r = [].some,
        n = document.body,
        a,
        o = !0,
        i = ' '
      function u(B, I) {
        var M = I.appendChild(p(B))
        if (B.children.length) {
          var w = y(B.isCollapsed)
          B.children.forEach(function (N) {
            u(N, w)
          }),
            M.appendChild(w)
        }
      }
      function s(B, I) {
        var M = !1,
          w = y(M)
        if (
          (I.forEach(function (N) {
            u(N, w)
          }),
          (a = B || a),
          a !== null)
        )
          return a.firstChild && a.removeChild(a.firstChild), I.length === 0 ? a : a.appendChild(w)
      }
      function p(B) {
        var I = document.createElement('li'),
          M = document.createElement('a')
        return (
          e.listItemClass && I.setAttribute('class', e.listItemClass),
          e.onClick && (M.onclick = e.onClick),
          e.includeTitleTags && M.setAttribute('title', B.textContent),
          e.includeHtml && B.childNodes.length
            ? t.call(B.childNodes, function (w) {
                M.appendChild(w.cloneNode(!0))
              })
            : (M.textContent = B.textContent),
          M.setAttribute('href', e.basePath + '#' + B.id),
          M.setAttribute(
            'class',
            e.linkClass + i + 'node-name--' + B.nodeName + i + e.extraLinkClasses
          ),
          I.appendChild(M),
          I
        )
      }
      function y(B) {
        var I = e.orderedList ? 'ol' : 'ul',
          M = document.createElement(I),
          w = e.listClass + i + e.extraListClasses
        return (
          B && ((w = w + i + e.collapsibleClass), (w = w + i + e.isCollapsedClass)),
          M.setAttribute('class', w),
          M
        )
      }
      function E() {
        if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
          var B
          B = document.querySelector(e.scrollContainer).scrollTop
        } else B = document.documentElement.scrollTop || n.scrollTop
        var I = document.querySelector(e.positionFixedSelector)
        e.fixedSidebarOffset === 'auto' && (e.fixedSidebarOffset = a.offsetTop),
          B > e.fixedSidebarOffset
            ? I.className.indexOf(e.positionFixedClass) === -1 &&
              (I.className += i + e.positionFixedClass)
            : (I.className = I.className.replace(i + e.positionFixedClass, ''))
      }
      function m(B) {
        var I = 0
        return (
          B !== null && ((I = B.offsetTop), e.hasInnerContainers && (I += m(B.offsetParent))), I
        )
      }
      function g(B, I) {
        return B && B.className !== I && (B.className = I), B
      }
      function A(B) {
        if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
          var I
          I = document.querySelector(e.scrollContainer).scrollTop
        } else I = document.documentElement.scrollTop || n.scrollTop
        e.positionFixedSelector && E()
        var M = B,
          w
        if (o && a !== null && M.length > 0) {
          r.call(M, function (X, Y) {
            if (m(X) > I + e.headingsOffset + 10) {
              var R = Y === 0 ? Y : Y - 1
              return (w = M[R]), !0
            } else if (Y === M.length - 1) return (w = M[M.length - 1]), !0
          })
          var N = a.querySelector('.' + e.activeLinkClass),
            k = a.querySelector(
              '.' +
                e.linkClass +
                '.node-name--' +
                w.nodeName +
                '[href="' +
                e.basePath +
                '#' +
                w.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, '\\$1') +
                '"]'
            )
          if (N === k) return
          var U = a.querySelectorAll('.' + e.linkClass)
          t.call(U, function (X) {
            g(X, X.className.replace(i + e.activeLinkClass, ''))
          })
          var V = a.querySelectorAll('.' + e.listItemClass)
          t.call(V, function (X) {
            g(X, X.className.replace(i + e.activeListItemClass, ''))
          }),
            k &&
              k.className.indexOf(e.activeLinkClass) === -1 &&
              (k.className += i + e.activeLinkClass)
          var H = k && k.parentNode
          H &&
            H.className.indexOf(e.activeListItemClass) === -1 &&
            (H.className += i + e.activeListItemClass)
          var oe = a.querySelectorAll('.' + e.listClass + '.' + e.collapsibleClass)
          t.call(oe, function (X) {
            X.className.indexOf(e.isCollapsedClass) === -1 &&
              (X.className += i + e.isCollapsedClass)
          }),
            k &&
              k.nextSibling &&
              k.nextSibling.className.indexOf(e.isCollapsedClass) !== -1 &&
              g(k.nextSibling, k.nextSibling.className.replace(i + e.isCollapsedClass, '')),
            b(k && k.parentNode.parentNode)
        }
      }
      function b(B) {
        return B &&
          B.className.indexOf(e.collapsibleClass) !== -1 &&
          B.className.indexOf(e.isCollapsedClass) !== -1
          ? (g(B, B.className.replace(i + e.isCollapsedClass, '')), b(B.parentNode.parentNode))
          : B
      }
      function x(B) {
        var I = B.target || B.srcElement
        typeof I.className != 'string' || I.className.indexOf(e.linkClass) === -1 || (o = !1)
      }
      function F() {
        o = !0
      }
      return { enableTocAnimation: F, disableTocAnimation: x, render: s, updateToc: A }
    }
  })
  var mg = S((Gte, hg) => {
    l()
    c()
    d()
    hg.exports = function (t) {
      var r = [].reduce
      function n(y) {
        return y[y.length - 1]
      }
      function a(y) {
        return +y.nodeName.toUpperCase().replace('H', '')
      }
      function o(y) {
        try {
          return y instanceof window.HTMLElement || y instanceof window.parent.HTMLElement
        } catch {
          return y instanceof window.HTMLElement
        }
      }
      function i(y) {
        if (!o(y)) return y
        if (t.ignoreHiddenElements && (!y.offsetHeight || !y.offsetParent)) return null
        let E =
          y.getAttribute('data-heading-label') ||
          (t.headingLabelCallback
            ? String(t.headingLabelCallback(y.textContent))
            : y.textContent.trim())
        var m = { id: y.id, children: [], nodeName: y.nodeName, headingLevel: a(y), textContent: E }
        return (
          t.includeHtml && (m.childNodes = y.childNodes),
          t.headingObjectCallback ? t.headingObjectCallback(m, y) : m
        )
      }
      function u(y, E) {
        for (
          var m = i(y), g = m.headingLevel, A = E, b = n(A), x = b ? b.headingLevel : 0, F = g - x;
          F > 0 && ((b = n(A)), !(b && g === b.headingLevel));

        )
          b && b.children !== void 0 && (A = b.children), F--
        return g >= t.collapseDepth && (m.isCollapsed = !0), A.push(m), A
      }
      function s(y, E) {
        var m = E
        t.ignoreSelector &&
          (m = E.split(',').map(function (A) {
            return A.trim() + ':not(' + t.ignoreSelector + ')'
          }))
        try {
          return y.querySelectorAll(m)
        } catch {
          return console.warn('Headers not found with selector: ' + m), null
        }
      }
      function p(y) {
        return r.call(
          y,
          function (m, g) {
            var A = i(g)
            return A && u(A, m.nest), m
          },
          { nest: [] }
        )
      }
      return { nestHeadingsArray: p, selectHeadings: s }
    }
  })
  var yg = S((Yte, gg) => {
    l()
    c()
    d()
    gg.exports = function (t) {
      var r = t.tocElement || document.querySelector(t.tocSelector)
      if (r && r.scrollHeight > r.clientHeight) {
        var n = r.querySelector('.' + t.activeListItemClass)
        n && (r.scrollTop = n.offsetTop - t.tocScrollOffset)
      }
    }
  })
  var Eg = S(bg => {
    l()
    c()
    d()
    bg.initSmoothScrolling = _4
    function _4(e) {
      var t = e.duration,
        r = e.offset,
        n = location.hash ? i(location.href) : location.href
      a()
      function a() {
        document.body.addEventListener('click', s, !1)
        function s(p) {
          !o(p.target) ||
            p.target.className.indexOf('no-smooth-scroll') > -1 ||
            (p.target.href.charAt(p.target.href.length - 2) === '#' &&
              p.target.href.charAt(p.target.href.length - 1) === '!') ||
            p.target.className.indexOf(e.linkClass) === -1 ||
            O4(p.target.hash, {
              duration: t,
              offset: r,
              callback: function () {
                u(p.target.hash)
              },
            })
        }
      }
      function o(s) {
        return (
          s.tagName.toLowerCase() === 'a' &&
          (s.hash.length > 0 || s.href.charAt(s.href.length - 1) === '#') &&
          (i(s.href) === n || i(s.href) + '#' === n)
        )
      }
      function i(s) {
        return s.slice(0, s.lastIndexOf('#'))
      }
      function u(s) {
        var p = document.getElementById(s.substring(1))
        p &&
          (/^(?:a|select|input|button|textarea)$/i.test(p.tagName) || (p.tabIndex = -1), p.focus())
      }
    }
    function O4(e, t) {
      var r = window.pageYOffset,
        n = {
          duration: t.duration,
          offset: t.offset || 0,
          callback: t.callback,
          easing: t.easing || E,
        },
        a =
          document.querySelector('[id="' + decodeURI(e).split('#').join('') + '"]') ||
          document.querySelector('[id="' + e.split('#').join('') + '"]'),
        o =
          typeof e == 'string'
            ? n.offset +
              (e
                ? (a && a.getBoundingClientRect().top) || 0
                : -(document.documentElement.scrollTop || document.body.scrollTop))
            : e,
        i = typeof n.duration == 'function' ? n.duration(o) : n.duration,
        u,
        s
      requestAnimationFrame(function (m) {
        ;(u = m), p(m)
      })
      function p(m) {
        ;(s = m - u),
          window.scrollTo(0, n.easing(s, r, o, i)),
          s < i ? requestAnimationFrame(p) : y()
      }
      function y() {
        window.scrollTo(0, r + o), typeof n.callback == 'function' && n.callback()
      }
      function E(m, g, A, b) {
        return (m /= b / 2), m < 1 ? (A / 2) * m * m + g : (m--, (-A / 2) * (m * (m - 2) - 1) + g)
      }
    }
  })
  var Dg = S((Ag, vg) => {
    l()
    c()
    d()
    ;(function (e, t) {
      typeof define == 'function' && define.amd
        ? define([], t(e))
        : typeof Ag == 'object'
        ? (vg.exports = t(e))
        : (e.tocbot = t(e))
    })(typeof window < 'u' ? window : window || window, function (e) {
      'use strict'
      var t = dg(),
        r = {},
        n = {},
        a = fg(),
        o = mg(),
        i = yg(),
        u,
        s,
        p = !!e && !!e.document && !!e.document.querySelector && !!e.addEventListener
      if (typeof window > 'u' && !p) return
      var y,
        E = Object.prototype.hasOwnProperty
      function m() {
        for (var x = {}, F = 0; F < arguments.length; F++) {
          var B = arguments[F]
          for (var I in B) E.call(B, I) && (x[I] = B[I])
        }
        return x
      }
      function g(x, F, B) {
        F || (F = 250)
        var I, M
        return function () {
          var w = B || this,
            N = +new Date(),
            k = arguments
          I && N < I + F
            ? (clearTimeout(M),
              (M = setTimeout(function () {
                ;(I = N), x.apply(w, k)
              }, F)))
            : ((I = N), x.apply(w, k))
        }
      }
      function A(x) {
        try {
          return x.contentElement || document.querySelector(x.contentSelector)
        } catch {
          return console.warn('Contents element not found: ' + x.contentSelector), null
        }
      }
      function b(x) {
        try {
          return x.tocElement || document.querySelector(x.tocSelector)
        } catch {
          return console.warn('TOC element not found: ' + x.tocSelector), null
        }
      }
      return (
        (n.destroy = function () {
          var x = b(r)
          x !== null &&
            (r.skipRendering || (x && (x.innerHTML = '')),
            r.scrollContainer && document.querySelector(r.scrollContainer)
              ? (document
                  .querySelector(r.scrollContainer)
                  .removeEventListener('scroll', this._scrollListener, !1),
                document
                  .querySelector(r.scrollContainer)
                  .removeEventListener('resize', this._scrollListener, !1),
                u &&
                  document
                    .querySelector(r.scrollContainer)
                    .removeEventListener('click', this._clickListener, !1))
              : (document.removeEventListener('scroll', this._scrollListener, !1),
                document.removeEventListener('resize', this._scrollListener, !1),
                u && document.removeEventListener('click', this._clickListener, !1)))
        }),
        (n.init = function (x) {
          if (p) {
            ;(r = m(t, x || {})),
              (this.options = r),
              (this.state = {}),
              r.scrollSmooth &&
                ((r.duration = r.scrollSmoothDuration),
                (r.offset = r.scrollSmoothOffset),
                (n.scrollSmooth = Eg().initSmoothScrolling(r))),
              (u = a(r)),
              (s = o(r)),
              (this._buildHtml = u),
              (this._parseContent = s),
              (this._headingsArray = y),
              n.destroy()
            var F = A(r)
            if (F !== null) {
              var B = b(r)
              if (B !== null && ((y = s.selectHeadings(F, r.headingSelector)), y !== null)) {
                var I = s.nestHeadingsArray(y),
                  M = I.nest
                if (!r.skipRendering) u.render()
                else return this
                ;(this._scrollListener = g(function (N) {
                  u.updateToc(y), !r.disableTocScrollSync && i(r)
                  var k =
                    N &&
                    N.target &&
                    N.target.scrollingElement &&
                    N.target.scrollingElement.scrollTop === 0
                  ;((N && (N.eventPhase === 0 || N.currentTarget === null)) || k) &&
                    (u.updateToc(y), r.scrollEndCallback && r.scrollEndCallback(N))
                }, r.throttleTimeout)),
                  this._scrollListener(),
                  r.scrollContainer && document.querySelector(r.scrollContainer)
                    ? (document
                        .querySelector(r.scrollContainer)
                        .addEventListener('scroll', this._scrollListener, !1),
                      document
                        .querySelector(r.scrollContainer)
                        .addEventListener('resize', this._scrollListener, !1))
                    : (document.addEventListener('scroll', this._scrollListener, !1),
                      document.addEventListener('resize', this._scrollListener, !1))
                var w = null
                return (
                  (this._clickListener = g(function (N) {
                    r.scrollSmooth && u.disableTocAnimation(N),
                      u.updateToc(y),
                      w && clearTimeout(w),
                      (w = setTimeout(function () {
                        u.enableTocAnimation()
                      }, r.scrollSmoothDuration))
                  }, r.throttleTimeout)),
                  r.scrollContainer && document.querySelector(r.scrollContainer)
                    ? document
                        .querySelector(r.scrollContainer)
                        .addEventListener('click', this._clickListener, !1)
                    : document.addEventListener('click', this._clickListener, !1),
                  this
                )
              }
            }
          }
        }),
        (n.refresh = function (x) {
          n.destroy(), n.init(x || this.options)
        }),
        (e.tocbot = n),
        n
      )
    })
  })
  function Tt() {
    return (Tt =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t]
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      }).apply(this, arguments)
  }
  function Ki(e, t) {
    if (e == null) return {}
    var r,
      n,
      a = {},
      o = Object.keys(e)
    for (n = 0; n < o.length; n++) t.indexOf((r = o[n])) >= 0 || (a[r] = e[r])
    return a
  }
  function zi(e) {
    var t = Se(e),
      r = Se(function (n) {
        t.current && t.current(n)
      })
    return (t.current = e), r.current
  }
  function Pg(e, t, r) {
    var n = zi(r),
      a = re(function () {
        return e.toHsva(t)
      }),
      o = a[0],
      i = a[1],
      u = Se({ color: t, hsva: o })
    he(
      function () {
        if (!e.equal(t, u.current.color)) {
          var p = e.toHsva(t)
          ;(u.current = { hsva: p, color: t }), i(p)
        }
      },
      [t, e]
    ),
      he(
        function () {
          var p
          Og(o, u.current.hsva) ||
            e.equal((p = e.fromHsva(o)), u.current.color) ||
            ((u.current = { hsva: o, color: p }), n(p))
        },
        [o, e, n]
      )
    var s = ge(function (p) {
      i(function (y) {
        return Object.assign({}, y, p)
      })
    }, [])
    return [o, s]
  }
  var sr,
    Xr,
    Gi,
    Cg,
    xg,
    Yi,
    Jr,
    Xi,
    xe,
    R4,
    P4,
    Wi,
    I4,
    k4,
    N4,
    L4,
    Fg,
    Vi,
    la,
    wg,
    M4,
    sa,
    q4,
    Bg,
    Tg,
    _g,
    Og,
    Rg,
    j4,
    $4,
    H4,
    U4,
    Sg,
    Ig,
    z4,
    G4,
    kg,
    W4,
    Ng,
    V4,
    Lg,
    K4,
    Mg,
    qg = Ze(() => {
      l()
      c()
      d()
      Ot()
      ;(sr = function (e, t, r) {
        return t === void 0 && (t = 0), r === void 0 && (r = 1), e > r ? r : e < t ? t : e
      }),
        (Xr = function (e) {
          return 'touches' in e
        }),
        (Gi = function (e) {
          return (e && e.ownerDocument.defaultView) || self
        }),
        (Cg = function (e, t, r) {
          var n = e.getBoundingClientRect(),
            a = Xr(t)
              ? (function (o, i) {
                  for (var u = 0; u < o.length; u++) if (o[u].identifier === i) return o[u]
                  return o[0]
                })(t.touches, r)
              : t
          return {
            left: sr((a.pageX - (n.left + Gi(e).pageXOffset)) / n.width),
            top: sr((a.pageY - (n.top + Gi(e).pageYOffset)) / n.height),
          }
        }),
        (xg = function (e) {
          !Xr(e) && e.preventDefault()
        }),
        (Yi = h.memo(function (e) {
          var t = e.onMove,
            r = e.onKey,
            n = Ki(e, ['onMove', 'onKey']),
            a = Se(null),
            o = zi(t),
            i = zi(r),
            u = Se(null),
            s = Se(!1),
            p = ot(
              function () {
                var g = function (x) {
                    xg(x),
                      (Xr(x) ? x.touches.length > 0 : x.buttons > 0) && a.current
                        ? o(Cg(a.current, x, u.current))
                        : b(!1)
                  },
                  A = function () {
                    return b(!1)
                  }
                function b(x) {
                  var F = s.current,
                    B = Gi(a.current),
                    I = x ? B.addEventListener : B.removeEventListener
                  I(F ? 'touchmove' : 'mousemove', g), I(F ? 'touchend' : 'mouseup', A)
                }
                return [
                  function (x) {
                    var F = x.nativeEvent,
                      B = a.current
                    if (
                      B &&
                      (xg(F),
                      !(function (M, w) {
                        return w && !Xr(M)
                      })(F, s.current) && B)
                    ) {
                      if (Xr(F)) {
                        s.current = !0
                        var I = F.changedTouches || []
                        I.length && (u.current = I[0].identifier)
                      }
                      B.focus(), o(Cg(B, F, u.current)), b(!0)
                    }
                  },
                  function (x) {
                    var F = x.which || x.keyCode
                    F < 37 ||
                      F > 40 ||
                      (x.preventDefault(),
                      i({
                        left: F === 39 ? 0.05 : F === 37 ? -0.05 : 0,
                        top: F === 40 ? 0.05 : F === 38 ? -0.05 : 0,
                      }))
                  },
                  b,
                ]
              },
              [i, o]
            ),
            y = p[0],
            E = p[1],
            m = p[2]
          return (
            he(
              function () {
                return m
              },
              [m]
            ),
            h.createElement(
              'div',
              Tt({}, n, {
                onTouchStart: y,
                onMouseDown: y,
                className: 'react-colorful__interactive',
                ref: a,
                onKeyDown: E,
                tabIndex: 0,
                role: 'slider',
              })
            )
          )
        })),
        (Jr = function (e) {
          return e.filter(Boolean).join(' ')
        }),
        (Xi = function (e) {
          var t = e.color,
            r = e.left,
            n = e.top,
            a = n === void 0 ? 0.5 : n,
            o = Jr(['react-colorful__pointer', e.className])
          return h.createElement(
            'div',
            { className: o, style: { top: 100 * a + '%', left: 100 * r + '%' } },
            h.createElement('div', {
              className: 'react-colorful__pointer-fill',
              style: { backgroundColor: t },
            })
          )
        }),
        (xe = function (e, t, r) {
          return (
            t === void 0 && (t = 0), r === void 0 && (r = Math.pow(10, t)), Math.round(r * e) / r
          )
        }),
        (R4 = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }),
        (P4 = function (e) {
          return Bg(Wi(e))
        }),
        (Wi = function (e) {
          return (
            e[0] === '#' && (e = e.substring(1)),
            e.length < 6
              ? {
                  r: parseInt(e[0] + e[0], 16),
                  g: parseInt(e[1] + e[1], 16),
                  b: parseInt(e[2] + e[2], 16),
                  a: e.length === 4 ? xe(parseInt(e[3] + e[3], 16) / 255, 2) : 1,
                }
              : {
                  r: parseInt(e.substring(0, 2), 16),
                  g: parseInt(e.substring(2, 4), 16),
                  b: parseInt(e.substring(4, 6), 16),
                  a: e.length === 8 ? xe(parseInt(e.substring(6, 8), 16) / 255, 2) : 1,
                }
          )
        }),
        (I4 = function (e, t) {
          return t === void 0 && (t = 'deg'), Number(e) * (R4[t] || 1)
        }),
        (k4 = function (e) {
          var t =
            /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
              e
            )
          return t
            ? N4({
                h: I4(t[1], t[2]),
                s: Number(t[3]),
                l: Number(t[4]),
                a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1),
              })
            : { h: 0, s: 0, v: 0, a: 1 }
        }),
        (N4 = function (e) {
          var t = e.s,
            r = e.l
          return {
            h: e.h,
            s: (t *= (r < 50 ? r : 100 - r) / 100) > 0 ? ((2 * t) / (r + t)) * 100 : 0,
            v: r + t,
            a: e.a,
          }
        }),
        (L4 = function (e) {
          return q4(wg(e))
        }),
        (Fg = function (e) {
          var t = e.s,
            r = e.v,
            n = e.a,
            a = ((200 - t) * r) / 100
          return {
            h: xe(e.h),
            s: xe(a > 0 && a < 200 ? ((t * r) / 100 / (a <= 100 ? a : 200 - a)) * 100 : 0),
            l: xe(a / 2),
            a: xe(n, 2),
          }
        }),
        (Vi = function (e) {
          var t = Fg(e)
          return 'hsl(' + t.h + ', ' + t.s + '%, ' + t.l + '%)'
        }),
        (la = function (e) {
          var t = Fg(e)
          return 'hsla(' + t.h + ', ' + t.s + '%, ' + t.l + '%, ' + t.a + ')'
        }),
        (wg = function (e) {
          var t = e.h,
            r = e.s,
            n = e.v,
            a = e.a
          ;(t = (t / 360) * 6), (r /= 100), (n /= 100)
          var o = Math.floor(t),
            i = n * (1 - r),
            u = n * (1 - (t - o) * r),
            s = n * (1 - (1 - t + o) * r),
            p = o % 6
          return {
            r: xe(255 * [n, u, i, i, s, n][p]),
            g: xe(255 * [s, n, n, u, i, i][p]),
            b: xe(255 * [i, i, s, n, n, u][p]),
            a: xe(a, 2),
          }
        }),
        (M4 = function (e) {
          var t =
            /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
              e
            )
          return t
            ? Bg({
                r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
              })
            : { h: 0, s: 0, v: 0, a: 1 }
        }),
        (sa = function (e) {
          var t = e.toString(16)
          return t.length < 2 ? '0' + t : t
        }),
        (q4 = function (e) {
          var t = e.r,
            r = e.g,
            n = e.b,
            a = e.a,
            o = a < 1 ? sa(xe(255 * a)) : ''
          return '#' + sa(t) + sa(r) + sa(n) + o
        }),
        (Bg = function (e) {
          var t = e.r,
            r = e.g,
            n = e.b,
            a = e.a,
            o = Math.max(t, r, n),
            i = o - Math.min(t, r, n),
            u = i ? (o === t ? (r - n) / i : o === r ? 2 + (n - t) / i : 4 + (t - r) / i) : 0
          return {
            h: xe(60 * (u < 0 ? u + 6 : u)),
            s: xe(o ? (i / o) * 100 : 0),
            v: xe((o / 255) * 100),
            a,
          }
        }),
        (Tg = h.memo(function (e) {
          var t = e.hue,
            r = e.onChange,
            n = Jr(['react-colorful__hue', e.className])
          return h.createElement(
            'div',
            { className: n },
            h.createElement(
              Yi,
              {
                onMove: function (a) {
                  r({ h: 360 * a.left })
                },
                onKey: function (a) {
                  r({ h: sr(t + 360 * a.left, 0, 360) })
                },
                'aria-label': 'Hue',
                'aria-valuenow': xe(t),
                'aria-valuemax': '360',
                'aria-valuemin': '0',
              },
              h.createElement(Xi, {
                className: 'react-colorful__hue-pointer',
                left: t / 360,
                color: Vi({ h: t, s: 100, v: 100, a: 1 }),
              })
            )
          )
        })),
        (_g = h.memo(function (e) {
          var t = e.hsva,
            r = e.onChange,
            n = { backgroundColor: Vi({ h: t.h, s: 100, v: 100, a: 1 }) }
          return h.createElement(
            'div',
            { className: 'react-colorful__saturation', style: n },
            h.createElement(
              Yi,
              {
                onMove: function (a) {
                  r({ s: 100 * a.left, v: 100 - 100 * a.top })
                },
                onKey: function (a) {
                  r({ s: sr(t.s + 100 * a.left, 0, 100), v: sr(t.v - 100 * a.top, 0, 100) })
                },
                'aria-label': 'Color',
                'aria-valuetext': 'Saturation ' + xe(t.s) + '%, Brightness ' + xe(t.v) + '%',
              },
              h.createElement(Xi, {
                className: 'react-colorful__saturation-pointer',
                top: 1 - t.v / 100,
                left: t.s / 100,
                color: Vi(t),
              })
            )
          )
        })),
        (Og = function (e, t) {
          if (e === t) return !0
          for (var r in e) if (e[r] !== t[r]) return !1
          return !0
        }),
        (Rg = function (e, t) {
          return e.replace(/\s/g, '') === t.replace(/\s/g, '')
        }),
        (j4 = function (e, t) {
          return e.toLowerCase() === t.toLowerCase() || Og(Wi(e), Wi(t))
        })
      ;(H4 = typeof window < 'u' ? Fu : he),
        (U4 = function () {
          return $4 || (typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : void 0)
        }),
        (Sg = new Map()),
        (Ig = function (e) {
          H4(function () {
            var t = e.current ? e.current.ownerDocument : document
            if (t !== void 0 && !Sg.has(t)) {
              var r = t.createElement('style')
              ;(r.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`),
                Sg.set(t, r)
              var n = U4()
              n && r.setAttribute('nonce', n), t.head.appendChild(r)
            }
          }, [])
        }),
        (z4 = function (e) {
          var t = e.className,
            r = e.colorModel,
            n = e.color,
            a = n === void 0 ? r.defaultColor : n,
            o = e.onChange,
            i = Ki(e, ['className', 'colorModel', 'color', 'onChange']),
            u = Se(null)
          Ig(u)
          var s = Pg(r, a, o),
            p = s[0],
            y = s[1],
            E = Jr(['react-colorful', t])
          return h.createElement(
            'div',
            Tt({}, i, { ref: u, className: E }),
            h.createElement(_g, { hsva: p, onChange: y }),
            h.createElement(Tg, {
              hue: p.h,
              onChange: y,
              className: 'react-colorful__last-control',
            })
          )
        }),
        (G4 = {
          defaultColor: '000',
          toHsva: P4,
          fromHsva: function (e) {
            return L4({ h: e.h, s: e.s, v: e.v, a: 1 })
          },
          equal: j4,
        }),
        (kg = function (e) {
          return h.createElement(z4, Tt({}, e, { colorModel: G4 }))
        }),
        (W4 = function (e) {
          var t = e.className,
            r = e.hsva,
            n = e.onChange,
            a = {
              backgroundImage:
                'linear-gradient(90deg, ' +
                la(Object.assign({}, r, { a: 0 })) +
                ', ' +
                la(Object.assign({}, r, { a: 1 })) +
                ')',
            },
            o = Jr(['react-colorful__alpha', t]),
            i = xe(100 * r.a)
          return h.createElement(
            'div',
            { className: o },
            h.createElement('div', { className: 'react-colorful__alpha-gradient', style: a }),
            h.createElement(
              Yi,
              {
                onMove: function (u) {
                  n({ a: u.left })
                },
                onKey: function (u) {
                  n({ a: sr(r.a + u.left) })
                },
                'aria-label': 'Alpha',
                'aria-valuetext': i + '%',
                'aria-valuenow': i,
                'aria-valuemin': '0',
                'aria-valuemax': '100',
              },
              h.createElement(Xi, {
                className: 'react-colorful__alpha-pointer',
                left: r.a,
                color: la(r),
              })
            )
          )
        }),
        (Ng = function (e) {
          var t = e.className,
            r = e.colorModel,
            n = e.color,
            a = n === void 0 ? r.defaultColor : n,
            o = e.onChange,
            i = Ki(e, ['className', 'colorModel', 'color', 'onChange']),
            u = Se(null)
          Ig(u)
          var s = Pg(r, a, o),
            p = s[0],
            y = s[1],
            E = Jr(['react-colorful', t])
          return h.createElement(
            'div',
            Tt({}, i, { ref: u, className: E }),
            h.createElement(_g, { hsva: p, onChange: y }),
            h.createElement(Tg, { hue: p.h, onChange: y }),
            h.createElement(W4, { hsva: p, onChange: y, className: 'react-colorful__last-control' })
          )
        }),
        (V4 = { defaultColor: 'hsla(0, 0%, 0%, 1)', toHsva: k4, fromHsva: la, equal: Rg }),
        (Lg = function (e) {
          return h.createElement(Ng, Tt({}, e, { colorModel: V4 }))
        }),
        (K4 = {
          defaultColor: 'rgba(0, 0, 0, 1)',
          toHsva: M4,
          fromHsva: function (e) {
            var t = wg(e)
            return 'rgba(' + t.r + ', ' + t.g + ', ' + t.b + ', ' + t.a + ')'
          },
          equal: Rg,
        }),
        (Mg = function (e) {
          return h.createElement(Ng, Tt({}, e, { colorModel: K4 }))
        })
    })
  var $g = S((dre, jg) => {
    'use strict'
    l()
    c()
    d()
    jg.exports = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50],
    }
  })
  var Ji = S((mre, Ug) => {
    l()
    c()
    d()
    var Qr = $g(),
      Hg = {}
    for (let e of Object.keys(Qr)) Hg[Qr[e]] = e
    var W = {
      rgb: { channels: 3, labels: 'rgb' },
      hsl: { channels: 3, labels: 'hsl' },
      hsv: { channels: 3, labels: 'hsv' },
      hwb: { channels: 3, labels: 'hwb' },
      cmyk: { channels: 4, labels: 'cmyk' },
      xyz: { channels: 3, labels: 'xyz' },
      lab: { channels: 3, labels: 'lab' },
      lch: { channels: 3, labels: 'lch' },
      hex: { channels: 1, labels: ['hex'] },
      keyword: { channels: 1, labels: ['keyword'] },
      ansi16: { channels: 1, labels: ['ansi16'] },
      ansi256: { channels: 1, labels: ['ansi256'] },
      hcg: { channels: 3, labels: ['h', 'c', 'g'] },
      apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
      gray: { channels: 1, labels: ['gray'] },
    }
    Ug.exports = W
    for (let e of Object.keys(W)) {
      if (!('channels' in W[e])) throw new Error('missing channels property: ' + e)
      if (!('labels' in W[e])) throw new Error('missing channel labels property: ' + e)
      if (W[e].labels.length !== W[e].channels)
        throw new Error('channel and label counts mismatch: ' + e)
      let { channels: t, labels: r } = W[e]
      delete W[e].channels,
        delete W[e].labels,
        Object.defineProperty(W[e], 'channels', { value: t }),
        Object.defineProperty(W[e], 'labels', { value: r })
    }
    W.rgb.hsl = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255,
        a = Math.min(t, r, n),
        o = Math.max(t, r, n),
        i = o - a,
        u,
        s
      o === a
        ? (u = 0)
        : t === o
        ? (u = (r - n) / i)
        : r === o
        ? (u = 2 + (n - t) / i)
        : n === o && (u = 4 + (t - r) / i),
        (u = Math.min(u * 60, 360)),
        u < 0 && (u += 360)
      let p = (a + o) / 2
      return (
        o === a ? (s = 0) : p <= 0.5 ? (s = i / (o + a)) : (s = i / (2 - o - a)),
        [u, s * 100, p * 100]
      )
    }
    W.rgb.hsv = function (e) {
      let t,
        r,
        n,
        a,
        o,
        i = e[0] / 255,
        u = e[1] / 255,
        s = e[2] / 255,
        p = Math.max(i, u, s),
        y = p - Math.min(i, u, s),
        E = function (m) {
          return (p - m) / 6 / y + 1 / 2
        }
      return (
        y === 0
          ? ((a = 0), (o = 0))
          : ((o = y / p),
            (t = E(i)),
            (r = E(u)),
            (n = E(s)),
            i === p ? (a = n - r) : u === p ? (a = 1 / 3 + t - n) : s === p && (a = 2 / 3 + r - t),
            a < 0 ? (a += 1) : a > 1 && (a -= 1)),
        [a * 360, o * 100, p * 100]
      )
    }
    W.rgb.hwb = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2],
        a = W.rgb.hsl(e)[0],
        o = (1 / 255) * Math.min(t, Math.min(r, n))
      return (n = 1 - (1 / 255) * Math.max(t, Math.max(r, n))), [a, o * 100, n * 100]
    }
    W.rgb.cmyk = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255,
        a = Math.min(1 - t, 1 - r, 1 - n),
        o = (1 - t - a) / (1 - a) || 0,
        i = (1 - r - a) / (1 - a) || 0,
        u = (1 - n - a) / (1 - a) || 0
      return [o * 100, i * 100, u * 100, a * 100]
    }
    function Y4(e, t) {
      return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2
    }
    W.rgb.keyword = function (e) {
      let t = Hg[e]
      if (t) return t
      let r = 1 / 0,
        n
      for (let a of Object.keys(Qr)) {
        let o = Qr[a],
          i = Y4(e, o)
        i < r && ((r = i), (n = a))
      }
      return n
    }
    W.keyword.rgb = function (e) {
      return Qr[e]
    }
    W.rgb.xyz = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255
      ;(t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92),
        (r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92),
        (n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92)
      let a = t * 0.4124 + r * 0.3576 + n * 0.1805,
        o = t * 0.2126 + r * 0.7152 + n * 0.0722,
        i = t * 0.0193 + r * 0.1192 + n * 0.9505
      return [a * 100, o * 100, i * 100]
    }
    W.rgb.lab = function (e) {
      let t = W.rgb.xyz(e),
        r = t[0],
        n = t[1],
        a = t[2]
      ;(r /= 95.047),
        (n /= 100),
        (a /= 108.883),
        (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
        (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116),
        (a = a > 0.008856 ? a ** (1 / 3) : 7.787 * a + 16 / 116)
      let o = 116 * n - 16,
        i = 500 * (r - n),
        u = 200 * (n - a)
      return [o, i, u]
    }
    W.hsl.rgb = function (e) {
      let t = e[0] / 360,
        r = e[1] / 100,
        n = e[2] / 100,
        a,
        o,
        i
      if (r === 0) return (i = n * 255), [i, i, i]
      n < 0.5 ? (a = n * (1 + r)) : (a = n + r - n * r)
      let u = 2 * n - a,
        s = [0, 0, 0]
      for (let p = 0; p < 3; p++)
        (o = t + (1 / 3) * -(p - 1)),
          o < 0 && o++,
          o > 1 && o--,
          6 * o < 1
            ? (i = u + (a - u) * 6 * o)
            : 2 * o < 1
            ? (i = a)
            : 3 * o < 2
            ? (i = u + (a - u) * (2 / 3 - o) * 6)
            : (i = u),
          (s[p] = i * 255)
      return s
    }
    W.hsl.hsv = function (e) {
      let t = e[0],
        r = e[1] / 100,
        n = e[2] / 100,
        a = r,
        o = Math.max(n, 0.01)
      ;(n *= 2), (r *= n <= 1 ? n : 2 - n), (a *= o <= 1 ? o : 2 - o)
      let i = (n + r) / 2,
        u = n === 0 ? (2 * a) / (o + a) : (2 * r) / (n + r)
      return [t, u * 100, i * 100]
    }
    W.hsv.rgb = function (e) {
      let t = e[0] / 60,
        r = e[1] / 100,
        n = e[2] / 100,
        a = Math.floor(t) % 6,
        o = t - Math.floor(t),
        i = 255 * n * (1 - r),
        u = 255 * n * (1 - r * o),
        s = 255 * n * (1 - r * (1 - o))
      switch (((n *= 255), a)) {
        case 0:
          return [n, s, i]
        case 1:
          return [u, n, i]
        case 2:
          return [i, n, s]
        case 3:
          return [i, u, n]
        case 4:
          return [s, i, n]
        case 5:
          return [n, i, u]
      }
    }
    W.hsv.hsl = function (e) {
      let t = e[0],
        r = e[1] / 100,
        n = e[2] / 100,
        a = Math.max(n, 0.01),
        o,
        i
      i = (2 - r) * n
      let u = (2 - r) * a
      return (o = r * a), (o /= u <= 1 ? u : 2 - u), (o = o || 0), (i /= 2), [t, o * 100, i * 100]
    }
    W.hwb.rgb = function (e) {
      let t = e[0] / 360,
        r = e[1] / 100,
        n = e[2] / 100,
        a = r + n,
        o
      a > 1 && ((r /= a), (n /= a))
      let i = Math.floor(6 * t),
        u = 1 - n
      ;(o = 6 * t - i), i & 1 && (o = 1 - o)
      let s = r + o * (u - r),
        p,
        y,
        E
      switch (i) {
        default:
        case 6:
        case 0:
          ;(p = u), (y = s), (E = r)
          break
        case 1:
          ;(p = s), (y = u), (E = r)
          break
        case 2:
          ;(p = r), (y = u), (E = s)
          break
        case 3:
          ;(p = r), (y = s), (E = u)
          break
        case 4:
          ;(p = s), (y = r), (E = u)
          break
        case 5:
          ;(p = u), (y = r), (E = s)
          break
      }
      return [p * 255, y * 255, E * 255]
    }
    W.cmyk.rgb = function (e) {
      let t = e[0] / 100,
        r = e[1] / 100,
        n = e[2] / 100,
        a = e[3] / 100,
        o = 1 - Math.min(1, t * (1 - a) + a),
        i = 1 - Math.min(1, r * (1 - a) + a),
        u = 1 - Math.min(1, n * (1 - a) + a)
      return [o * 255, i * 255, u * 255]
    }
    W.xyz.rgb = function (e) {
      let t = e[0] / 100,
        r = e[1] / 100,
        n = e[2] / 100,
        a,
        o,
        i
      return (
        (a = t * 3.2406 + r * -1.5372 + n * -0.4986),
        (o = t * -0.9689 + r * 1.8758 + n * 0.0415),
        (i = t * 0.0557 + r * -0.204 + n * 1.057),
        (a = a > 0.0031308 ? 1.055 * a ** (1 / 2.4) - 0.055 : a * 12.92),
        (o = o > 0.0031308 ? 1.055 * o ** (1 / 2.4) - 0.055 : o * 12.92),
        (i = i > 0.0031308 ? 1.055 * i ** (1 / 2.4) - 0.055 : i * 12.92),
        (a = Math.min(Math.max(0, a), 1)),
        (o = Math.min(Math.max(0, o), 1)),
        (i = Math.min(Math.max(0, i), 1)),
        [a * 255, o * 255, i * 255]
      )
    }
    W.xyz.lab = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2]
      ;(t /= 95.047),
        (r /= 100),
        (n /= 108.883),
        (t = t > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116),
        (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
        (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116)
      let a = 116 * r - 16,
        o = 500 * (t - r),
        i = 200 * (r - n)
      return [a, o, i]
    }
    W.lab.xyz = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2],
        a,
        o,
        i
      ;(o = (t + 16) / 116), (a = r / 500 + o), (i = o - n / 200)
      let u = o ** 3,
        s = a ** 3,
        p = i ** 3
      return (
        (o = u > 0.008856 ? u : (o - 16 / 116) / 7.787),
        (a = s > 0.008856 ? s : (a - 16 / 116) / 7.787),
        (i = p > 0.008856 ? p : (i - 16 / 116) / 7.787),
        (a *= 95.047),
        (o *= 100),
        (i *= 108.883),
        [a, o, i]
      )
    }
    W.lab.lch = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2],
        a
      ;(a = (Math.atan2(n, r) * 360) / 2 / Math.PI), a < 0 && (a += 360)
      let i = Math.sqrt(r * r + n * n)
      return [t, i, a]
    }
    W.lch.lab = function (e) {
      let t = e[0],
        r = e[1],
        a = (e[2] / 360) * 2 * Math.PI,
        o = r * Math.cos(a),
        i = r * Math.sin(a)
      return [t, o, i]
    }
    W.rgb.ansi16 = function (e, t = null) {
      let [r, n, a] = e,
        o = t === null ? W.rgb.hsv(e)[2] : t
      if (((o = Math.round(o / 50)), o === 0)) return 30
      let i = 30 + ((Math.round(a / 255) << 2) | (Math.round(n / 255) << 1) | Math.round(r / 255))
      return o === 2 && (i += 60), i
    }
    W.hsv.ansi16 = function (e) {
      return W.rgb.ansi16(W.hsv.rgb(e), e[2])
    }
    W.rgb.ansi256 = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2]
      return t === r && r === n
        ? t < 8
          ? 16
          : t > 248
          ? 231
          : Math.round(((t - 8) / 247) * 24) + 232
        : 16 +
            36 * Math.round((t / 255) * 5) +
            6 * Math.round((r / 255) * 5) +
            Math.round((n / 255) * 5)
    }
    W.ansi16.rgb = function (e) {
      let t = e % 10
      if (t === 0 || t === 7) return e > 50 && (t += 3.5), (t = (t / 10.5) * 255), [t, t, t]
      let r = (~~(e > 50) + 1) * 0.5,
        n = (t & 1) * r * 255,
        a = ((t >> 1) & 1) * r * 255,
        o = ((t >> 2) & 1) * r * 255
      return [n, a, o]
    }
    W.ansi256.rgb = function (e) {
      if (e >= 232) {
        let o = (e - 232) * 10 + 8
        return [o, o, o]
      }
      e -= 16
      let t,
        r = (Math.floor(e / 36) / 5) * 255,
        n = (Math.floor((t = e % 36) / 6) / 5) * 255,
        a = ((t % 6) / 5) * 255
      return [r, n, a]
    }
    W.rgb.hex = function (e) {
      let r = (
        ((Math.round(e[0]) & 255) << 16) +
        ((Math.round(e[1]) & 255) << 8) +
        (Math.round(e[2]) & 255)
      )
        .toString(16)
        .toUpperCase()
      return '000000'.substring(r.length) + r
    }
    W.hex.rgb = function (e) {
      let t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i)
      if (!t) return [0, 0, 0]
      let r = t[0]
      t[0].length === 3 &&
        (r = r
          .split('')
          .map(u => u + u)
          .join(''))
      let n = parseInt(r, 16),
        a = (n >> 16) & 255,
        o = (n >> 8) & 255,
        i = n & 255
      return [a, o, i]
    }
    W.rgb.hcg = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255,
        a = Math.max(Math.max(t, r), n),
        o = Math.min(Math.min(t, r), n),
        i = a - o,
        u,
        s
      return (
        i < 1 ? (u = o / (1 - i)) : (u = 0),
        i <= 0
          ? (s = 0)
          : a === t
          ? (s = ((r - n) / i) % 6)
          : a === r
          ? (s = 2 + (n - t) / i)
          : (s = 4 + (t - r) / i),
        (s /= 6),
        (s %= 1),
        [s * 360, i * 100, u * 100]
      )
    }
    W.hsl.hcg = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = r < 0.5 ? 2 * t * r : 2 * t * (1 - r),
        a = 0
      return n < 1 && (a = (r - 0.5 * n) / (1 - n)), [e[0], n * 100, a * 100]
    }
    W.hsv.hcg = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = t * r,
        a = 0
      return n < 1 && (a = (r - n) / (1 - n)), [e[0], n * 100, a * 100]
    }
    W.hcg.rgb = function (e) {
      let t = e[0] / 360,
        r = e[1] / 100,
        n = e[2] / 100
      if (r === 0) return [n * 255, n * 255, n * 255]
      let a = [0, 0, 0],
        o = (t % 1) * 6,
        i = o % 1,
        u = 1 - i,
        s = 0
      switch (Math.floor(o)) {
        case 0:
          ;(a[0] = 1), (a[1] = i), (a[2] = 0)
          break
        case 1:
          ;(a[0] = u), (a[1] = 1), (a[2] = 0)
          break
        case 2:
          ;(a[0] = 0), (a[1] = 1), (a[2] = i)
          break
        case 3:
          ;(a[0] = 0), (a[1] = u), (a[2] = 1)
          break
        case 4:
          ;(a[0] = i), (a[1] = 0), (a[2] = 1)
          break
        default:
          ;(a[0] = 1), (a[1] = 0), (a[2] = u)
      }
      return (s = (1 - r) * n), [(r * a[0] + s) * 255, (r * a[1] + s) * 255, (r * a[2] + s) * 255]
    }
    W.hcg.hsv = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = t + r * (1 - t),
        a = 0
      return n > 0 && (a = t / n), [e[0], a * 100, n * 100]
    }
    W.hcg.hsl = function (e) {
      let t = e[1] / 100,
        n = (e[2] / 100) * (1 - t) + 0.5 * t,
        a = 0
      return (
        n > 0 && n < 0.5 ? (a = t / (2 * n)) : n >= 0.5 && n < 1 && (a = t / (2 * (1 - n))),
        [e[0], a * 100, n * 100]
      )
    }
    W.hcg.hwb = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = t + r * (1 - t)
      return [e[0], (n - t) * 100, (1 - n) * 100]
    }
    W.hwb.hcg = function (e) {
      let t = e[1] / 100,
        n = 1 - e[2] / 100,
        a = n - t,
        o = 0
      return a < 1 && (o = (n - a) / (1 - a)), [e[0], a * 100, o * 100]
    }
    W.apple.rgb = function (e) {
      return [(e[0] / 65535) * 255, (e[1] / 65535) * 255, (e[2] / 65535) * 255]
    }
    W.rgb.apple = function (e) {
      return [(e[0] / 255) * 65535, (e[1] / 255) * 65535, (e[2] / 255) * 65535]
    }
    W.gray.rgb = function (e) {
      return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255]
    }
    W.gray.hsl = function (e) {
      return [0, 0, e[0]]
    }
    W.gray.hsv = W.gray.hsl
    W.gray.hwb = function (e) {
      return [0, 100, e[0]]
    }
    W.gray.cmyk = function (e) {
      return [0, 0, 0, e[0]]
    }
    W.gray.lab = function (e) {
      return [e[0], 0, 0]
    }
    W.gray.hex = function (e) {
      let t = Math.round((e[0] / 100) * 255) & 255,
        n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase()
      return '000000'.substring(n.length) + n
    }
    W.rgb.gray = function (e) {
      return [((e[0] + e[1] + e[2]) / 3 / 255) * 100]
    }
  })
  var Gg = S((Ere, zg) => {
    l()
    c()
    d()
    var ca = Ji()
    function X4() {
      let e = {},
        t = Object.keys(ca)
      for (let r = t.length, n = 0; n < r; n++) e[t[n]] = { distance: -1, parent: null }
      return e
    }
    function J4(e) {
      let t = X4(),
        r = [e]
      for (t[e].distance = 0; r.length; ) {
        let n = r.pop(),
          a = Object.keys(ca[n])
        for (let o = a.length, i = 0; i < o; i++) {
          let u = a[i],
            s = t[u]
          s.distance === -1 && ((s.distance = t[n].distance + 1), (s.parent = n), r.unshift(u))
        }
      }
      return t
    }
    function Q4(e, t) {
      return function (r) {
        return t(e(r))
      }
    }
    function Z4(e, t) {
      let r = [t[e].parent, e],
        n = ca[t[e].parent][e],
        a = t[e].parent
      for (; t[a].parent; )
        r.unshift(t[a].parent), (n = Q4(ca[t[a].parent][a], n)), (a = t[a].parent)
      return (n.conversion = r), n
    }
    zg.exports = function (e) {
      let t = J4(e),
        r = {},
        n = Object.keys(t)
      for (let a = n.length, o = 0; o < a; o++) {
        let i = n[o]
        t[i].parent !== null && (r[i] = Z4(i, t))
      }
      return r
    }
  })
  var Vg = S((Cre, Wg) => {
    l()
    c()
    d()
    var Qi = Ji(),
      eR = Gg(),
      lr = {},
      tR = Object.keys(Qi)
    function rR(e) {
      let t = function (...r) {
        let n = r[0]
        return n == null ? n : (n.length > 1 && (r = n), e(r))
      }
      return 'conversion' in e && (t.conversion = e.conversion), t
    }
    function nR(e) {
      let t = function (...r) {
        let n = r[0]
        if (n == null) return n
        n.length > 1 && (r = n)
        let a = e(r)
        if (typeof a == 'object') for (let o = a.length, i = 0; i < o; i++) a[i] = Math.round(a[i])
        return a
      }
      return 'conversion' in e && (t.conversion = e.conversion), t
    }
    tR.forEach(e => {
      ;(lr[e] = {}),
        Object.defineProperty(lr[e], 'channels', { value: Qi[e].channels }),
        Object.defineProperty(lr[e], 'labels', { value: Qi[e].labels })
      let t = eR(e)
      Object.keys(t).forEach(n => {
        let a = t[n]
        ;(lr[e][n] = nR(a)), (lr[e][n].raw = rR(a))
      })
    })
    Wg.exports = lr
  })
  var Yg = S((wre, Kg) => {
    l()
    c()
    d()
    var aR = $e(),
      oR = function () {
        return aR.Date.now()
      }
    Kg.exports = oR
  })
  var Jg = S((Ore, Xg) => {
    l()
    c()
    d()
    var iR = /\s/
    function uR(e) {
      for (var t = e.length; t-- && iR.test(e.charAt(t)); );
      return t
    }
    Xg.exports = uR
  })
  var Zg = S((kre, Qg) => {
    l()
    c()
    d()
    var sR = Jg(),
      lR = /^\s+/
    function cR(e) {
      return e && e.slice(0, sR(e) + 1).replace(lR, '')
    }
    Qg.exports = cR
  })
  var ny = S((qre, ry) => {
    l()
    c()
    d()
    var dR = Zg(),
      ey = Ge(),
      pR = Tr(),
      ty = 0 / 0,
      fR = /^[-+]0x[0-9a-f]+$/i,
      hR = /^0b[01]+$/i,
      mR = /^0o[0-7]+$/i,
      gR = parseInt
    function yR(e) {
      if (typeof e == 'number') return e
      if (pR(e)) return ty
      if (ey(e)) {
        var t = typeof e.valueOf == 'function' ? e.valueOf() : e
        e = ey(t) ? t + '' : t
      }
      if (typeof e != 'string') return e === 0 ? e : +e
      e = dR(e)
      var r = hR.test(e)
      return r || mR.test(e) ? gR(e.slice(2), r ? 2 : 8) : fR.test(e) ? ty : +e
    }
    ry.exports = yR
  })
  var iy = S((Ure, oy) => {
    l()
    c()
    d()
    var bR = Ge(),
      Zi = Yg(),
      ay = ny(),
      ER = 'Expected a function',
      AR = Math.max,
      vR = Math.min
    function DR(e, t, r) {
      var n,
        a,
        o,
        i,
        u,
        s,
        p = 0,
        y = !1,
        E = !1,
        m = !0
      if (typeof e != 'function') throw new TypeError(ER)
      ;(t = ay(t) || 0),
        bR(r) &&
          ((y = !!r.leading),
          (E = 'maxWait' in r),
          (o = E ? AR(ay(r.maxWait) || 0, t) : o),
          (m = 'trailing' in r ? !!r.trailing : m))
      function g(N) {
        var k = n,
          U = a
        return (n = a = void 0), (p = N), (i = e.apply(U, k)), i
      }
      function A(N) {
        return (p = N), (u = setTimeout(F, t)), y ? g(N) : i
      }
      function b(N) {
        var k = N - s,
          U = N - p,
          V = t - k
        return E ? vR(V, o - U) : V
      }
      function x(N) {
        var k = N - s,
          U = N - p
        return s === void 0 || k >= t || k < 0 || (E && U >= o)
      }
      function F() {
        var N = Zi()
        if (x(N)) return B(N)
        u = setTimeout(F, b(N))
      }
      function B(N) {
        return (u = void 0), m && n ? g(N) : ((n = a = void 0), i)
      }
      function I() {
        u !== void 0 && clearTimeout(u), (p = 0), (n = s = a = u = void 0)
      }
      function M() {
        return u === void 0 ? i : B(Zi())
      }
      function w() {
        var N = Zi(),
          k = x(N)
        if (((n = arguments), (a = this), (s = N), k)) {
          if (u === void 0) return A(s)
          if (E) return clearTimeout(u), (u = setTimeout(F, t)), g(s)
        }
        return u === void 0 && (u = setTimeout(F, t)), i
      }
      return (w.cancel = I), (w.flush = M), w
    }
    oy.exports = DR
  })
  var sy = S((Vre, uy) => {
    l()
    c()
    d()
    var CR = iy(),
      xR = Ge(),
      SR = 'Expected a function'
    function FR(e, t, r) {
      var n = !0,
        a = !0
      if (typeof e != 'function') throw new TypeError(SR)
      return (
        xR(r) && ((n = 'leading' in r ? !!r.leading : n), (a = 'trailing' in r ? !!r.trailing : a)),
        CR(e, t, { leading: n, maxWait: t, trailing: a })
      )
    }
    uy.exports = FR
  })
  var hy = {}
  Du(hy, { ColorControl: () => fy, default: () => zR })
  var qe,
    dy,
    wR,
    BR,
    TR,
    _R,
    OR,
    RR,
    PR,
    ly,
    IR,
    kR,
    py,
    da,
    NR,
    LR,
    MR,
    eu,
    qR,
    jR,
    pa,
    cy,
    cr,
    $R,
    HR,
    fa,
    UR,
    fy,
    zR,
    my = Ze(() => {
      l()
      c()
      d()
      Ga()
      Ot()
      qg()
      ;(qe = fe(Vg(), 1)), (dy = fe(sy(), 1))
      Va()
      hr()
      ;(wR = q.div({ position: 'relative', maxWidth: 250 })),
        (BR = q(rn)({ position: 'absolute', zIndex: 1, top: 4, left: 4 })),
        (TR = q.div({
          width: 200,
          margin: 5,
          '.react-colorful__saturation': { borderRadius: '4px 4px 0 0' },
          '.react-colorful__hue': { boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 5%)' },
          '.react-colorful__last-control': { borderRadius: '0 0 4px 4px' },
        })),
        (_R = q(qa)(({ theme: e }) => ({ fontFamily: e.typography.fonts.base }))),
        (OR = q.div({
          display: 'grid',
          gridTemplateColumns: 'repeat(9, 16px)',
          gap: 6,
          padding: 3,
          marginTop: 5,
          width: 200,
        })),
        (RR = q.div(({ theme: e, active: t }) => ({
          width: 16,
          height: 16,
          boxShadow: t
            ? `${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`
            : `${e.appBorderColor} 0 0 0 1px inset`,
          borderRadius: e.appBorderRadius,
        }))),
        (PR = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`),
        (ly = ({ value: e, active: t, onClick: r, style: n, ...a }) => {
          let o = `linear-gradient(${e}, ${e}), ${PR}, linear-gradient(#fff, #fff)`
          return h.createElement(RR, {
            ...a,
            active: t,
            onClick: r,
            style: { ...n, backgroundImage: o },
          })
        }),
        (IR = q(Re.Input)(({ theme: e }) => ({
          width: '100%',
          paddingLeft: 30,
          paddingRight: 30,
          boxSizing: 'border-box',
          fontFamily: e.typography.fonts.base,
        }))),
        (kR = q(Oe)(({ theme: e }) => ({
          position: 'absolute',
          zIndex: 1,
          top: 6,
          right: 7,
          width: 20,
          height: 20,
          padding: 4,
          boxSizing: 'border-box',
          cursor: 'pointer',
          color: e.input.color,
        }))),
        (py = (e => ((e.RGB = 'rgb'), (e.HSL = 'hsl'), (e.HEX = 'hex'), e))(py || {})),
        (da = Object.values(py)),
        (NR = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/),
        (LR = /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i),
        (MR = /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i),
        (eu = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i),
        (qR = /^\s*#?([0-9a-f]{3})\s*$/i),
        (jR = { hex: kg, rgb: Mg, hsl: Lg }),
        (pa = { hex: 'transparent', rgb: 'rgba(0, 0, 0, 0)', hsl: 'hsla(0, 0%, 0%, 0)' }),
        (cy = e => {
          let t = e?.match(NR)
          if (!t) return [0, 0, 0, 1]
          let [, r, n, a, o = 1] = t
          return [r, n, a, o].map(Number)
        }),
        (cr = e => {
          if (!e) return
          let t = !0
          if (LR.test(e)) {
            let [i, u, s, p] = cy(e),
              [y, E, m] = qe.default.rgb.hsl([i, u, s]) || [0, 0, 0]
            return {
              valid: t,
              value: e,
              keyword: qe.default.rgb.keyword([i, u, s]),
              colorSpace: 'rgb',
              rgb: e,
              hsl: `hsla(${y}, ${E}%, ${m}%, ${p})`,
              hex: `#${qe.default.rgb.hex([i, u, s]).toLowerCase()}`,
            }
          }
          if (MR.test(e)) {
            let [i, u, s, p] = cy(e),
              [y, E, m] = qe.default.hsl.rgb([i, u, s]) || [0, 0, 0]
            return {
              valid: t,
              value: e,
              keyword: qe.default.hsl.keyword([i, u, s]),
              colorSpace: 'hsl',
              rgb: `rgba(${y}, ${E}, ${m}, ${p})`,
              hsl: e,
              hex: `#${qe.default.hsl.hex([i, u, s]).toLowerCase()}`,
            }
          }
          let r = e.replace('#', ''),
            n = qe.default.keyword.rgb(r) || qe.default.hex.rgb(r),
            a = qe.default.rgb.hsl(n),
            o = e
          if ((/[^#a-f0-9]/i.test(e) ? (o = r) : eu.test(e) && (o = `#${r}`), o.startsWith('#')))
            t = eu.test(o)
          else
            try {
              qe.default.keyword.hex(o)
            } catch {
              t = !1
            }
          return {
            valid: t,
            value: o,
            keyword: qe.default.rgb.keyword(n),
            colorSpace: 'hex',
            rgb: `rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,
            hsl: `hsla(${a[0]}, ${a[1]}%, ${a[2]}%, 1)`,
            hex: o,
          }
        }),
        ($R = (e, t, r) => {
          if (!e || !t?.valid) return pa[r]
          if (r !== 'hex') return t?.[r] || pa[r]
          if (!t.hex.startsWith('#'))
            try {
              return `#${qe.default.keyword.hex(t.hex)}`
            } catch {
              return pa.hex
            }
          let n = t.hex.match(qR)
          if (!n) return eu.test(t.hex) ? t.hex : pa.hex
          let [a, o, i] = n[1].split('')
          return `#${a}${a}${o}${o}${i}${i}`
        }),
        (HR = (e, t) => {
          let [r, n] = re(e || ''),
            [a, o] = re(() => cr(r)),
            [i, u] = re(a?.colorSpace || 'hex')
          he(() => {
            let E = e || '',
              m = cr(E)
            n(E), o(m), u(m?.colorSpace || 'hex')
          }, [e])
          let s = ot(() => $R(r, a, i).toLowerCase(), [r, a, i]),
            p = ge(
              E => {
                let m = cr(E),
                  g = m?.value || E || ''
                n(g), g === '' && (o(void 0), t(void 0)), m && (o(m), u(m.colorSpace), t(m.value))
              },
              [t]
            ),
            y = ge(() => {
              let E = da.indexOf(i) + 1
              E >= da.length && (E = 0), u(da[E])
              let m = a?.[da[E]] || ''
              n(m), t(m)
            }, [a, i, t])
          return {
            value: r,
            realValue: s,
            updateValue: p,
            color: a,
            colorSpace: i,
            cycleColorSpace: y,
          }
        }),
        (fa = e => e.replace(/\s*/, '').toLowerCase()),
        (UR = (e, t, r) => {
          let [n, a] = re(t?.valid ? [t] : [])
          he(() => {
            t === void 0 && a([])
          }, [t])
          let o = ot(
              () =>
                (e || [])
                  .map(u =>
                    typeof u == 'string'
                      ? cr(u)
                      : u.title
                      ? { ...cr(u.color), keyword: u.title }
                      : cr(u.color)
                  )
                  .concat(n)
                  .filter(Boolean)
                  .slice(-27),
              [e, n]
            ),
            i = ge(
              u => {
                u?.valid && (o.some(s => fa(s[r]) === fa(u[r])) || a(s => s.concat(u)))
              },
              [r, o]
            )
          return { presets: o, addPreset: i }
        }),
        (fy = ({
          name: e,
          value: t,
          onChange: r,
          onFocus: n,
          onBlur: a,
          presetColors: o,
          startOpen: i = !1,
        }) => {
          let u = ge((0, dy.default)(r, 200), [r]),
            {
              value: s,
              realValue: p,
              updateValue: y,
              color: E,
              colorSpace: m,
              cycleColorSpace: g,
            } = HR(t, u),
            { presets: A, addPreset: b } = UR(o, E, m),
            x = jR[m]
          return h.createElement(
            wR,
            null,
            h.createElement(
              BR,
              {
                startOpen: i,
                closeOnOutsideClick: !0,
                onVisibleChange: () => b(E),
                tooltip: h.createElement(
                  TR,
                  null,
                  h.createElement(x, {
                    color: p === 'transparent' ? '#000000' : p,
                    onChange: y,
                    onFocus: n,
                    onBlur: a,
                  }),
                  A.length > 0 &&
                    h.createElement(
                      OR,
                      null,
                      A.map((F, B) =>
                        h.createElement(
                          rn,
                          {
                            key: `${F.value}-${B}`,
                            hasChrome: !1,
                            tooltip: h.createElement(_R, { note: F.keyword || F.value }),
                          },
                          h.createElement(ly, {
                            value: F[m],
                            active: E && fa(F[m]) === fa(E[m]),
                            onClick: () => y(F.value),
                          })
                        )
                      )
                    )
                ),
              },
              h.createElement(ly, { value: p, style: { margin: 4 } })
            ),
            h.createElement(IR, {
              id: Pe(e),
              value: s,
              onChange: F => y(F.target.value),
              onFocus: F => F.target.select(),
              placeholder: 'Choose color...',
            }),
            s ? h.createElement(kR, { icon: 'markup', onClick: g }) : null
          )
        }),
        (zR = fy)
    })
  l()
  c()
  d()
  l()
  c()
  d()
  l()
  c()
  d()
  l()
  c()
  d()
  var va = 'addon-controls',
    Da = 'controls'
  Ot()
  l()
  c()
  d()
  var bk = __STORYBOOKAPI__,
    {
      ActiveTabs: Ek,
      Consumer: Ak,
      ManagerContext: vk,
      Provider: Dk,
      addons: xa,
      combineParameters: Ck,
      controlOrMetaKey: xk,
      controlOrMetaSymbol: Sk,
      eventMatchesShortcut: Fk,
      eventToShortcut: wk,
      isMacLike: Bk,
      isShortcutTaken: Tk,
      keyToSymbol: _k,
      merge: Ok,
      mockChannel: Rk,
      optionOrAltSymbol: Pk,
      shortcutMatchesShortcut: Ik,
      shortcutToHumanString: kk,
      types: wu,
      useAddonState: Nk,
      useArgTypes: Sa,
      useArgs: Bu,
      useChannel: Lk,
      useGlobalTypes: Mk,
      useGlobals: Tu,
      useParameter: _u,
      useSharedState: qk,
      useStoryPrepared: jk,
      useStorybookApi: $k,
      useStorybookState: Ou,
    } = __STORYBOOKAPI__
  hr()
  l()
  c()
  d()
  Ga()
  Va()
  Ot()
  hr()
  l()
  c()
  d()
  l()
  c()
  d()
  function Fe() {
    return (
      (Fe = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          }),
      Fe.apply(this, arguments)
    )
  }
  l()
  c()
  d()
  function Ka(e) {
    if (e === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    return e
  }
  l()
  c()
  d()
  l()
  c()
  d()
  function tt(e, t) {
    return (
      (tt = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, a) {
            return (n.__proto__ = a), n
          }),
      tt(e, t)
    )
  }
  function Ya(e, t) {
    ;(e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), tt(e, t)
  }
  l()
  c()
  d()
  l()
  c()
  d()
  function gr(e) {
    return (
      (gr = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (r) {
            return r.__proto__ || Object.getPrototypeOf(r)
          }),
      gr(e)
    )
  }
  l()
  c()
  d()
  function Xa(e) {
    try {
      return Function.toString.call(e).indexOf('[native code]') !== -1
    } catch {
      return typeof e == 'function'
    }
  }
  l()
  c()
  d()
  l()
  c()
  d()
  function Ja() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1
    if (typeof Proxy == 'function') return !0
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
    } catch {
      return !1
    }
  }
  function It(e, t, r) {
    return (
      Ja()
        ? (It = Reflect.construct.bind())
        : (It = function (a, o, i) {
            var u = [null]
            u.push.apply(u, o)
            var s = Function.bind.apply(a, u),
              p = new s()
            return i && tt(p, i.prototype), p
          }),
      It.apply(null, arguments)
    )
  }
  function yr(e) {
    var t = typeof Map == 'function' ? new Map() : void 0
    return (
      (yr = function (n) {
        if (n === null || !Xa(n)) return n
        if (typeof n != 'function')
          throw new TypeError('Super expression must either be null or a function')
        if (typeof t < 'u') {
          if (t.has(n)) return t.get(n)
          t.set(n, a)
        }
        function a() {
          return It(n, arguments, gr(this).constructor)
        }
        return (
          (a.prototype = Object.create(n.prototype, {
            constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
          })),
          tt(a, n)
        )
      }),
      yr(e)
    )
  }
  l()
  c()
  d()
  var Ie = (function (e) {
    Ya(t, e)
    function t(r) {
      var n
      if (!0)
        n =
          e.call(
            this,
            'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
              r +
              ' for more information.'
          ) || this
      else for (var a, o, i; i < a; i++);
      return Ka(n)
    }
    return t
  })(yr(Error))
  function Lu(e, t) {
    return e.substr(-t.length) === t
  }
  var t1 = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/
  function Mu(e) {
    if (typeof e != 'string') return e
    var t = e.match(t1)
    return t ? parseFloat(e) : e
  }
  var r1 = function (t) {
      return function (r, n) {
        n === void 0 && (n = '16px')
        var a = r,
          o = n
        if (typeof r == 'string') {
          if (!Lu(r, 'px')) throw new Ie(69, t, r)
          a = Mu(r)
        }
        if (typeof n == 'string') {
          if (!Lu(n, 'px')) throw new Ie(70, t, n)
          o = Mu(n)
        }
        if (typeof a == 'string') throw new Ie(71, r, t)
        if (typeof o == 'string') throw new Ie(72, n, t)
        return '' + a / o + t
      }
    },
    ju = r1,
    AN = ju('em')
  var vN = ju('rem')
  function Qa(e) {
    return Math.round(e * 255)
  }
  function n1(e, t, r) {
    return Qa(e) + ',' + Qa(t) + ',' + Qa(r)
  }
  function br(e, t, r, n) {
    if ((n === void 0 && (n = n1), t === 0)) return n(r, r, r)
    var a = (((e % 360) + 360) % 360) / 60,
      o = (1 - Math.abs(2 * r - 1)) * t,
      i = o * (1 - Math.abs((a % 2) - 1)),
      u = 0,
      s = 0,
      p = 0
    a >= 0 && a < 1
      ? ((u = o), (s = i))
      : a >= 1 && a < 2
      ? ((u = i), (s = o))
      : a >= 2 && a < 3
      ? ((s = o), (p = i))
      : a >= 3 && a < 4
      ? ((s = i), (p = o))
      : a >= 4 && a < 5
      ? ((u = i), (p = o))
      : a >= 5 && a < 6 && ((u = o), (p = i))
    var y = r - o / 2,
      E = u + y,
      m = s + y,
      g = p + y
    return n(E, m, g)
  }
  var qu = {
    aliceblue: 'f0f8ff',
    antiquewhite: 'faebd7',
    aqua: '00ffff',
    aquamarine: '7fffd4',
    azure: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '000',
    blanchedalmond: 'ffebcd',
    blue: '0000ff',
    blueviolet: '8a2be2',
    brown: 'a52a2a',
    burlywood: 'deb887',
    cadetblue: '5f9ea0',
    chartreuse: '7fff00',
    chocolate: 'd2691e',
    coral: 'ff7f50',
    cornflowerblue: '6495ed',
    cornsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: '00ffff',
    darkblue: '00008b',
    darkcyan: '008b8b',
    darkgoldenrod: 'b8860b',
    darkgray: 'a9a9a9',
    darkgreen: '006400',
    darkgrey: 'a9a9a9',
    darkkhaki: 'bdb76b',
    darkmagenta: '8b008b',
    darkolivegreen: '556b2f',
    darkorange: 'ff8c00',
    darkorchid: '9932cc',
    darkred: '8b0000',
    darksalmon: 'e9967a',
    darkseagreen: '8fbc8f',
    darkslateblue: '483d8b',
    darkslategray: '2f4f4f',
    darkslategrey: '2f4f4f',
    darkturquoise: '00ced1',
    darkviolet: '9400d3',
    deeppink: 'ff1493',
    deepskyblue: '00bfff',
    dimgray: '696969',
    dimgrey: '696969',
    dodgerblue: '1e90ff',
    firebrick: 'b22222',
    floralwhite: 'fffaf0',
    forestgreen: '228b22',
    fuchsia: 'ff00ff',
    gainsboro: 'dcdcdc',
    ghostwhite: 'f8f8ff',
    gold: 'ffd700',
    goldenrod: 'daa520',
    gray: '808080',
    green: '008000',
    greenyellow: 'adff2f',
    grey: '808080',
    honeydew: 'f0fff0',
    hotpink: 'ff69b4',
    indianred: 'cd5c5c',
    indigo: '4b0082',
    ivory: 'fffff0',
    khaki: 'f0e68c',
    lavender: 'e6e6fa',
    lavenderblush: 'fff0f5',
    lawngreen: '7cfc00',
    lemonchiffon: 'fffacd',
    lightblue: 'add8e6',
    lightcoral: 'f08080',
    lightcyan: 'e0ffff',
    lightgoldenrodyellow: 'fafad2',
    lightgray: 'd3d3d3',
    lightgreen: '90ee90',
    lightgrey: 'd3d3d3',
    lightpink: 'ffb6c1',
    lightsalmon: 'ffa07a',
    lightseagreen: '20b2aa',
    lightskyblue: '87cefa',
    lightslategray: '789',
    lightslategrey: '789',
    lightsteelblue: 'b0c4de',
    lightyellow: 'ffffe0',
    lime: '0f0',
    limegreen: '32cd32',
    linen: 'faf0e6',
    magenta: 'f0f',
    maroon: '800000',
    mediumaquamarine: '66cdaa',
    mediumblue: '0000cd',
    mediumorchid: 'ba55d3',
    mediumpurple: '9370db',
    mediumseagreen: '3cb371',
    mediumslateblue: '7b68ee',
    mediumspringgreen: '00fa9a',
    mediumturquoise: '48d1cc',
    mediumvioletred: 'c71585',
    midnightblue: '191970',
    mintcream: 'f5fffa',
    mistyrose: 'ffe4e1',
    moccasin: 'ffe4b5',
    navajowhite: 'ffdead',
    navy: '000080',
    oldlace: 'fdf5e6',
    olive: '808000',
    olivedrab: '6b8e23',
    orange: 'ffa500',
    orangered: 'ff4500',
    orchid: 'da70d6',
    palegoldenrod: 'eee8aa',
    palegreen: '98fb98',
    paleturquoise: 'afeeee',
    palevioletred: 'db7093',
    papayawhip: 'ffefd5',
    peachpuff: 'ffdab9',
    peru: 'cd853f',
    pink: 'ffc0cb',
    plum: 'dda0dd',
    powderblue: 'b0e0e6',
    purple: '800080',
    rebeccapurple: '639',
    red: 'f00',
    rosybrown: 'bc8f8f',
    royalblue: '4169e1',
    saddlebrown: '8b4513',
    salmon: 'fa8072',
    sandybrown: 'f4a460',
    seagreen: '2e8b57',
    seashell: 'fff5ee',
    sienna: 'a0522d',
    silver: 'c0c0c0',
    skyblue: '87ceeb',
    slateblue: '6a5acd',
    slategray: '708090',
    slategrey: '708090',
    snow: 'fffafa',
    springgreen: '00ff7f',
    steelblue: '4682b4',
    tan: 'd2b48c',
    teal: '008080',
    thistle: 'd8bfd8',
    tomato: 'ff6347',
    turquoise: '40e0d0',
    violet: 'ee82ee',
    wheat: 'f5deb3',
    white: 'fff',
    whitesmoke: 'f5f5f5',
    yellow: 'ff0',
    yellowgreen: '9acd32',
  }
  function a1(e) {
    if (typeof e != 'string') return e
    var t = e.toLowerCase()
    return qu[t] ? '#' + qu[t] : e
  }
  var o1 = /^#[a-fA-F0-9]{6}$/,
    i1 = /^#[a-fA-F0-9]{8}$/,
    u1 = /^#[a-fA-F0-9]{3}$/,
    s1 = /^#[a-fA-F0-9]{4}$/,
    Za = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
    l1 =
      /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
    c1 =
      /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
    d1 =
      /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i
  function kt(e) {
    if (typeof e != 'string') throw new Ie(3)
    var t = a1(e)
    if (t.match(o1))
      return {
        red: parseInt('' + t[1] + t[2], 16),
        green: parseInt('' + t[3] + t[4], 16),
        blue: parseInt('' + t[5] + t[6], 16),
      }
    if (t.match(i1)) {
      var r = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2))
      return {
        red: parseInt('' + t[1] + t[2], 16),
        green: parseInt('' + t[3] + t[4], 16),
        blue: parseInt('' + t[5] + t[6], 16),
        alpha: r,
      }
    }
    if (t.match(u1))
      return {
        red: parseInt('' + t[1] + t[1], 16),
        green: parseInt('' + t[2] + t[2], 16),
        blue: parseInt('' + t[3] + t[3], 16),
      }
    if (t.match(s1)) {
      var n = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2))
      return {
        red: parseInt('' + t[1] + t[1], 16),
        green: parseInt('' + t[2] + t[2], 16),
        blue: parseInt('' + t[3] + t[3], 16),
        alpha: n,
      }
    }
    var a = Za.exec(t)
    if (a)
      return {
        red: parseInt('' + a[1], 10),
        green: parseInt('' + a[2], 10),
        blue: parseInt('' + a[3], 10),
      }
    var o = l1.exec(t.substring(0, 50))
    if (o)
      return {
        red: parseInt('' + o[1], 10),
        green: parseInt('' + o[2], 10),
        blue: parseInt('' + o[3], 10),
        alpha: parseFloat('' + o[4]) > 1 ? parseFloat('' + o[4]) / 100 : parseFloat('' + o[4]),
      }
    var i = c1.exec(t)
    if (i) {
      var u = parseInt('' + i[1], 10),
        s = parseInt('' + i[2], 10) / 100,
        p = parseInt('' + i[3], 10) / 100,
        y = 'rgb(' + br(u, s, p) + ')',
        E = Za.exec(y)
      if (!E) throw new Ie(4, t, y)
      return {
        red: parseInt('' + E[1], 10),
        green: parseInt('' + E[2], 10),
        blue: parseInt('' + E[3], 10),
      }
    }
    var m = d1.exec(t.substring(0, 50))
    if (m) {
      var g = parseInt('' + m[1], 10),
        A = parseInt('' + m[2], 10) / 100,
        b = parseInt('' + m[3], 10) / 100,
        x = 'rgb(' + br(g, A, b) + ')',
        F = Za.exec(x)
      if (!F) throw new Ie(4, t, x)
      return {
        red: parseInt('' + F[1], 10),
        green: parseInt('' + F[2], 10),
        blue: parseInt('' + F[3], 10),
        alpha: parseFloat('' + m[4]) > 1 ? parseFloat('' + m[4]) / 100 : parseFloat('' + m[4]),
      }
    }
    throw new Ie(5)
  }
  function p1(e) {
    var t = e.red / 255,
      r = e.green / 255,
      n = e.blue / 255,
      a = Math.max(t, r, n),
      o = Math.min(t, r, n),
      i = (a + o) / 2
    if (a === o)
      return e.alpha !== void 0
        ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
        : { hue: 0, saturation: 0, lightness: i }
    var u,
      s = a - o,
      p = i > 0.5 ? s / (2 - a - o) : s / (a + o)
    switch (a) {
      case t:
        u = (r - n) / s + (r < n ? 6 : 0)
        break
      case r:
        u = (n - t) / s + 2
        break
      default:
        u = (t - r) / s + 4
        break
    }
    return (
      (u *= 60),
      e.alpha !== void 0
        ? { hue: u, saturation: p, lightness: i, alpha: e.alpha }
        : { hue: u, saturation: p, lightness: i }
    )
  }
  function it(e) {
    return p1(kt(e))
  }
  var f1 = function (t) {
      return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6]
        ? '#' + t[1] + t[3] + t[5]
        : t
    },
    to = f1
  function At(e) {
    var t = e.toString(16)
    return t.length === 1 ? '0' + t : t
  }
  function eo(e) {
    return At(Math.round(e * 255))
  }
  function h1(e, t, r) {
    return to('#' + eo(e) + eo(t) + eo(r))
  }
  function nn(e, t, r) {
    return br(e, t, r, h1)
  }
  function m1(e, t, r) {
    if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number') return nn(e, t, r)
    if (typeof e == 'object' && t === void 0 && r === void 0)
      return nn(e.hue, e.saturation, e.lightness)
    throw new Ie(1)
  }
  function g1(e, t, r, n) {
    if (
      typeof e == 'number' &&
      typeof t == 'number' &&
      typeof r == 'number' &&
      typeof n == 'number'
    )
      return n >= 1 ? nn(e, t, r) : 'rgba(' + br(e, t, r) + ',' + n + ')'
    if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? nn(e.hue, e.saturation, e.lightness)
        : 'rgba(' + br(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')'
    throw new Ie(2)
  }
  function ro(e, t, r) {
    if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
      return to('#' + At(e) + At(t) + At(r))
    if (typeof e == 'object' && t === void 0 && r === void 0)
      return to('#' + At(e.red) + At(e.green) + At(e.blue))
    throw new Ie(6)
  }
  function Ue(e, t, r, n) {
    if (typeof e == 'string' && typeof t == 'number') {
      var a = kt(e)
      return 'rgba(' + a.red + ',' + a.green + ',' + a.blue + ',' + t + ')'
    } else {
      if (
        typeof e == 'number' &&
        typeof t == 'number' &&
        typeof r == 'number' &&
        typeof n == 'number'
      )
        return n >= 1 ? ro(e, t, r) : 'rgba(' + e + ',' + t + ',' + r + ',' + n + ')'
      if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
        return e.alpha >= 1
          ? ro(e.red, e.green, e.blue)
          : 'rgba(' + e.red + ',' + e.green + ',' + e.blue + ',' + e.alpha + ')'
    }
    throw new Ie(7)
  }
  var y1 = function (t) {
      return (
        typeof t.red == 'number' &&
        typeof t.green == 'number' &&
        typeof t.blue == 'number' &&
        (typeof t.alpha != 'number' || typeof t.alpha > 'u')
      )
    },
    b1 = function (t) {
      return (
        typeof t.red == 'number' &&
        typeof t.green == 'number' &&
        typeof t.blue == 'number' &&
        typeof t.alpha == 'number'
      )
    },
    E1 = function (t) {
      return (
        typeof t.hue == 'number' &&
        typeof t.saturation == 'number' &&
        typeof t.lightness == 'number' &&
        (typeof t.alpha != 'number' || typeof t.alpha > 'u')
      )
    },
    A1 = function (t) {
      return (
        typeof t.hue == 'number' &&
        typeof t.saturation == 'number' &&
        typeof t.lightness == 'number' &&
        typeof t.alpha == 'number'
      )
    }
  function ut(e) {
    if (typeof e != 'object') throw new Ie(8)
    if (b1(e)) return Ue(e)
    if (y1(e)) return ro(e)
    if (A1(e)) return g1(e)
    if (E1(e)) return m1(e)
    throw new Ie(8)
  }
  function $u(e, t, r) {
    return function () {
      var a = r.concat(Array.prototype.slice.call(arguments))
      return a.length >= t ? e.apply(this, a) : $u(e, t, a)
    }
  }
  function Le(e) {
    return $u(e, e.length, [])
  }
  function v1(e, t) {
    if (t === 'transparent') return t
    var r = it(t)
    return ut(Fe({}, r, { hue: r.hue + parseFloat(e) }))
  }
  var DN = Le(v1)
  function Nt(e, t, r) {
    return Math.max(e, Math.min(t, r))
  }
  function D1(e, t) {
    if (t === 'transparent') return t
    var r = it(t)
    return ut(Fe({}, r, { lightness: Nt(0, 1, r.lightness - parseFloat(e)) }))
  }
  var C1 = Le(D1),
    ze = C1
  function x1(e, t) {
    if (t === 'transparent') return t
    var r = it(t)
    return ut(Fe({}, r, { saturation: Nt(0, 1, r.saturation - parseFloat(e)) }))
  }
  var CN = Le(x1)
  function S1(e, t) {
    if (t === 'transparent') return t
    var r = it(t)
    return ut(Fe({}, r, { lightness: Nt(0, 1, r.lightness + parseFloat(e)) }))
  }
  var F1 = Le(S1),
    st = F1
  function w1(e, t, r) {
    if (t === 'transparent') return r
    if (r === 'transparent') return t
    if (e === 0) return r
    var n = kt(t),
      a = Fe({}, n, { alpha: typeof n.alpha == 'number' ? n.alpha : 1 }),
      o = kt(r),
      i = Fe({}, o, { alpha: typeof o.alpha == 'number' ? o.alpha : 1 }),
      u = a.alpha - i.alpha,
      s = parseFloat(e) * 2 - 1,
      p = s * u === -1 ? s : s + u,
      y = 1 + s * u,
      E = (p / y + 1) / 2,
      m = 1 - E,
      g = {
        red: Math.floor(a.red * E + i.red * m),
        green: Math.floor(a.green * E + i.green * m),
        blue: Math.floor(a.blue * E + i.blue * m),
        alpha: a.alpha * parseFloat(e) + i.alpha * (1 - parseFloat(e)),
      }
    return Ue(g)
  }
  var B1 = Le(w1),
    Hu = B1
  function T1(e, t) {
    if (t === 'transparent') return t
    var r = kt(t),
      n = typeof r.alpha == 'number' ? r.alpha : 1,
      a = Fe({}, r, { alpha: Nt(0, 1, (n * 100 + parseFloat(e) * 100) / 100) })
    return Ue(a)
  }
  var _1 = Le(T1),
    Er = _1
  function O1(e, t) {
    if (t === 'transparent') return t
    var r = it(t)
    return ut(Fe({}, r, { saturation: Nt(0, 1, r.saturation + parseFloat(e)) }))
  }
  var xN = Le(O1)
  function R1(e, t) {
    return t === 'transparent' ? t : ut(Fe({}, it(t), { hue: parseFloat(e) }))
  }
  var SN = Le(R1)
  function P1(e, t) {
    return t === 'transparent' ? t : ut(Fe({}, it(t), { lightness: parseFloat(e) }))
  }
  var FN = Le(P1)
  function I1(e, t) {
    return t === 'transparent' ? t : ut(Fe({}, it(t), { saturation: parseFloat(e) }))
  }
  var wN = Le(I1)
  function k1(e, t) {
    return t === 'transparent' ? t : Hu(parseFloat(e), 'rgb(0, 0, 0)', t)
  }
  var BN = Le(k1)
  function N1(e, t) {
    return t === 'transparent' ? t : Hu(parseFloat(e), 'rgb(255, 255, 255)', t)
  }
  var TN = Le(N1)
  function L1(e, t) {
    if (t === 'transparent') return t
    var r = kt(t),
      n = typeof r.alpha == 'number' ? r.alpha : 1,
      a = Fe({}, r, { alpha: Nt(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100) })
    return Ue(a)
  }
  var M1 = Le(L1),
    de = M1
  l()
  c()
  d()
  var ue = (() => {
    let e
    return (
      typeof window < 'u'
        ? (e = window)
        : typeof globalThis < 'u'
        ? (e = globalThis)
        : typeof window < 'u'
        ? (e = window)
        : typeof self < 'u'
        ? (e = self)
        : (e = {}),
      e
    )
  })()
  var _y = fe(jo(), 1)
  l()
  c()
  d()
  var TS = Object.create,
    rp = Object.defineProperty,
    _S = Object.getOwnPropertyDescriptor,
    OS = Object.getOwnPropertyNames,
    RS = Object.getPrototypeOf,
    PS = Object.prototype.hasOwnProperty,
    IS = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    kS = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let a of OS(t))
          !PS.call(e, a) &&
            a !== r &&
            rp(e, a, { get: () => t[a], enumerable: !(n = _S(t, a)) || n.enumerable })
      return e
    },
    NS = (e, t, r) => (
      (r = e != null ? TS(RS(e)) : {}),
      kS(t || !e || !e.__esModule ? rp(r, 'default', { value: e, enumerable: !0 }) : r, e)
    ),
    LS = IS(e => {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.isEqual = (function () {
          var t = Object.prototype.toString,
            r = Object.getPrototypeOf,
            n = Object.getOwnPropertySymbols
              ? function (a) {
                  return Object.keys(a).concat(Object.getOwnPropertySymbols(a))
                }
              : Object.keys
          return function (a, o) {
            return (function i(u, s, p) {
              var y,
                E,
                m,
                g = t.call(u),
                A = t.call(s)
              if (u === s) return !0
              if (u == null || s == null) return !1
              if (p.indexOf(u) > -1 && p.indexOf(s) > -1) return !0
              if (
                (p.push(u, s),
                g != A ||
                  ((y = n(u)),
                  (E = n(s)),
                  y.length != E.length ||
                    y.some(function (b) {
                      return !i(u[b], s[b], p)
                    })))
              )
                return !1
              switch (g.slice(8, -1)) {
                case 'Symbol':
                  return u.valueOf() == s.valueOf()
                case 'Date':
                case 'Number':
                  return +u == +s || (+u != +u && +s != +s)
                case 'RegExp':
                case 'Function':
                case 'String':
                case 'Boolean':
                  return '' + u == '' + s
                case 'Set':
                case 'Map':
                  ;(y = u.entries()), (E = s.entries())
                  do if (!i((m = y.next()).value, E.next().value, p)) return !1
                  while (!m.done)
                  return !0
                case 'ArrayBuffer':
                  ;(u = new Uint8Array(u)), (s = new Uint8Array(s))
                case 'DataView':
                  ;(u = new Uint8Array(u.buffer)), (s = new Uint8Array(s.buffer))
                case 'Float32Array':
                case 'Float64Array':
                case 'Int8Array':
                case 'Int16Array':
                case 'Int32Array':
                case 'Uint8Array':
                case 'Uint16Array':
                case 'Uint32Array':
                case 'Uint8ClampedArray':
                case 'Arguments':
                case 'Array':
                  if (u.length != s.length) return !1
                  for (m = 0; m < u.length; m++)
                    if ((m in u || m in s) && (m in u != m in s || !i(u[m], s[m], p))) return !1
                  return !0
                case 'Object':
                  return i(r(u), r(s), p)
                default:
                  return !1
              }
            })(a, o, [])
          }
        })())
    })
  var tp = NS(LS()),
    np = e => e.map(t => typeof t < 'u').filter(Boolean).length,
    MS = (e, t) => {
      let { exists: r, eq: n, neq: a, truthy: o } = e
      if (np([r, n, a, o]) > 1)
        throw new Error(`Invalid conditional test ${JSON.stringify({ exists: r, eq: n, neq: a })}`)
      if (typeof n < 'u') return (0, tp.isEqual)(t, n)
      if (typeof a < 'u') return !(0, tp.isEqual)(t, a)
      if (typeof r < 'u') {
        let i = typeof t < 'u'
        return r ? i : !i
      }
      return typeof o > 'u' || o ? !!t : !t
    },
    $o = (e, t, r) => {
      if (!e.if) return !0
      let { arg: n, global: a } = e.if
      if (np([n, a]) !== 1)
        throw new Error(`Invalid conditional value ${JSON.stringify({ arg: n, global: a })}`)
      let o = n ? t[n] : r[a]
      return MS(e.if, o)
    }
  l()
  c()
  d()
  var aW = __STORYBOOKCLIENTLOGGER__,
    { deprecate: ye, logger: Ve, once: wn, pretty: oW } = __STORYBOOKCLIENTLOGGER__
  l()
  c()
  d()
  Ot()
  function xt() {
    return (
      (xt = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          }),
      xt.apply(this, arguments)
    )
  }
  var qS = ['children', 'options'],
    ap = [
      'allowFullScreen',
      'allowTransparency',
      'autoComplete',
      'autoFocus',
      'autoPlay',
      'cellPadding',
      'cellSpacing',
      'charSet',
      'className',
      'classId',
      'colSpan',
      'contentEditable',
      'contextMenu',
      'crossOrigin',
      'encType',
      'formAction',
      'formEncType',
      'formMethod',
      'formNoValidate',
      'formTarget',
      'frameBorder',
      'hrefLang',
      'inputMode',
      'keyParams',
      'keyType',
      'marginHeight',
      'marginWidth',
      'maxLength',
      'mediaGroup',
      'minLength',
      'noValidate',
      'radioGroup',
      'readOnly',
      'rowSpan',
      'spellCheck',
      'srcDoc',
      'srcLang',
      'srcSet',
      'tabIndex',
      'useMap',
    ].reduce((e, t) => ((e[t.toLowerCase()] = t), e), { for: 'htmlFor' }),
    op = { amp: '&', apos: "'", gt: '>', lt: '<', nbsp: '\xA0', quot: '\u201C' },
    jS = ['style', 'script'],
    $S =
      /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
    HS = /mailto:/i,
    US = /\n{2,}$/,
    dp = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
    zS = /^ *> ?/gm,
    GS = /^ {2,}\n/,
    WS = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
    pp = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
    fp = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
    VS = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
    KS = /^(?:\n *)*\n/,
    YS = /\r\n?/g,
    XS = /^\[\^([^\]]+)](:.*)\n/,
    JS = /^\[\^([^\]]+)]/,
    QS = /\f/g,
    ZS = /^\s*?\[(x|\s)\]/,
    hp = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
    mp = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
    gp = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
    Wo =
      /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
    eF = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
    yp = /^<!--[\s\S]*?(?:-->)/,
    tF = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
    Vo = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
    rF = /^\{.*\}$/,
    nF = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
    aF = /^<([^ >]+@[^ >]+)>/,
    oF = /^<([^ >]+:\/[^ >]+)>/,
    iF = /-([a-z])?/gi,
    bp = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
    uF = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
    sF = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
    lF = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
    cF = /(\[|\])/g,
    dF = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
    pF = /\t/g,
    fF = /^ *\| */,
    hF = /(^ *\||\| *$)/g,
    mF = / *$/,
    gF = /^ *:-+: *$/,
    yF = /^ *:-+ *$/,
    bF = /^ *-+: *$/,
    EF = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
    AF = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
    vF = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
    DF = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
    CF = /^\\([^0-9A-Za-z\s])/,
    xF = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
    SF = /^\n+/,
    FF = /^([ \t]*)/,
    wF = /\\([^\\])/g,
    ip = / *\n+$/,
    BF = /(?:^|\n)( *)$/,
    Ko = '(?:\\d+\\.)',
    Yo = '(?:[*+-])'
  function Ep(e) {
    return '( *)(' + (e === 1 ? Ko : Yo) + ') +'
  }
  var Ap = Ep(1),
    vp = Ep(2)
  function Dp(e) {
    return new RegExp('^' + (e === 1 ? Ap : vp))
  }
  var TF = Dp(1),
    _F = Dp(2)
  function Cp(e) {
    return new RegExp(
      '^' +
        (e === 1 ? Ap : vp) +
        '[^\\n]*(?:\\n(?!\\1' +
        (e === 1 ? Ko : Yo) +
        ' )[^\\n]*)*(\\n|$)',
      'gm'
    )
  }
  var xp = Cp(1),
    Sp = Cp(2)
  function Fp(e) {
    let t = e === 1 ? Ko : Yo
    return new RegExp(
      '^( *)(' + t + ') [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1' + t + ' (?!' + t + ' ))\\n*|\\s*\\n*$)'
    )
  }
  var wp = Fp(1),
    Bp = Fp(2)
  function up(e, t) {
    let r = t === 1,
      n = r ? wp : Bp,
      a = r ? xp : Sp,
      o = r ? TF : _F
    return {
      t(i, u, s) {
        let p = BF.exec(s)
        return p && (u.o || (!u._ && !u.u)) ? n.exec((i = p[1] + i)) : null
      },
      i: te.HIGH,
      l(i, u, s) {
        let p = r ? +i[2] : void 0,
          y = i[0]
            .replace(
              US,
              `
`
            )
            .match(a),
          E = !1
        return {
          p: y.map(function (m, g) {
            let A = o.exec(m)[0].length,
              b = new RegExp('^ {1,' + A + '}', 'gm'),
              x = m.replace(b, '').replace(o, ''),
              F = g === y.length - 1,
              B =
                x.indexOf(`

`) !== -1 ||
                (F && E)
            E = B
            let I = s._,
              M = s.o,
              w
            ;(s.o = !0),
              B
                ? ((s._ = !1),
                  (w = x.replace(
                    ip,
                    `

`
                  )))
                : ((s._ = !0), (w = x.replace(ip, '')))
            let N = u(w, s)
            return (s._ = I), (s.o = M), N
          }),
          m: r,
          g: p,
        }
      },
      h: (i, u, s) =>
        e(
          i.m ? 'ol' : 'ul',
          { key: s.k, start: i.g },
          i.p.map(function (p, y) {
            return e('li', { key: y }, u(p, s))
          })
        ),
    }
  }
  var OF = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
    RF = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
    Tp = [dp, pp, fp, hp, gp, mp, yp, bp, xp, wp, Sp, Bp],
    PF = [...Tp, /^[^\n]+(?:  \n|\n{2,})/, Wo, Vo]
  function IF(e) {
    return e
      .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, 'a')
      .replace(/[çÇ]/g, 'c')
      .replace(/[ðÐ]/g, 'd')
      .replace(/[ÈÉÊËéèêë]/g, 'e')
      .replace(/[ÏïÎîÍíÌì]/g, 'i')
      .replace(/[Ññ]/g, 'n')
      .replace(/[øØœŒÕõÔôÓóÒò]/g, 'o')
      .replace(/[ÜüÛûÚúÙù]/g, 'u')
      .replace(/[ŸÿÝý]/g, 'y')
      .replace(/[^a-z0-9- ]/gi, '')
      .replace(/ /gi, '-')
      .toLowerCase()
  }
  function kF(e) {
    return bF.test(e) ? 'right' : gF.test(e) ? 'center' : yF.test(e) ? 'left' : null
  }
  function sp(e, t, r) {
    let n = r.$
    r.$ = !0
    let a = t(e.trim(), r)
    r.$ = n
    let o = [[]]
    return (
      a.forEach(function (i, u) {
        i.type === 'tableSeparator'
          ? u !== 0 && u !== a.length - 1 && o.push([])
          : (i.type !== 'text' ||
              (a[u + 1] != null && a[u + 1].type !== 'tableSeparator') ||
              (i.v = i.v.replace(mF, '')),
            o[o.length - 1].push(i))
      }),
      o
    )
  }
  function NF(e, t, r) {
    r._ = !0
    let n = sp(e[1], t, r),
      a = e[2].replace(hF, '').split('|').map(kF),
      o = (function (i, u, s) {
        return i
          .trim()
          .split(
            `
`
          )
          .map(function (p) {
            return sp(p, u, s)
          })
      })(e[3], t, r)
    return (r._ = !1), { S: a, A: o, L: n, type: 'table' }
  }
  function lp(e, t) {
    return e.S[t] == null ? {} : { textAlign: e.S[t] }
  }
  function ct(e) {
    return function (t, r) {
      return r._ ? e.exec(t) : null
    }
  }
  function dt(e) {
    return function (t, r) {
      return r._ || r.u ? e.exec(t) : null
    }
  }
  function nt(e) {
    return function (t, r) {
      return r._ || r.u ? null : e.exec(t)
    }
  }
  function Or(e) {
    return function (t) {
      return e.exec(t)
    }
  }
  function LF(e, t, r) {
    if (
      t._ ||
      t.u ||
      (r &&
        !r.endsWith(`
`))
    )
      return null
    let n = ''
    e.split(
      `
`
    ).every(
      o =>
        !Tp.some(i => i.test(o)) &&
        ((n +=
          o +
          `
`),
        o.trim())
    )
    let a = n.trimEnd()
    return a == '' ? null : [n, a]
  }
  function Wt(e) {
    try {
      if (
        decodeURIComponent(e)
          .replace(/[^A-Za-z0-9/:]/g, '')
          .match(/^\s*(javascript|vbscript|data(?!:image)):/i)
      )
        return
    } catch {
      return null
    }
    return e
  }
  function cp(e) {
    return e.replace(wF, '$1')
  }
  function Bn(e, t, r) {
    let n = r._ || !1,
      a = r.u || !1
    ;(r._ = !0), (r.u = !0)
    let o = e(t, r)
    return (r._ = n), (r.u = a), o
  }
  function MF(e, t, r) {
    let n = r._ || !1,
      a = r.u || !1
    ;(r._ = !1), (r.u = !0)
    let o = e(t, r)
    return (r._ = n), (r.u = a), o
  }
  function qF(e, t, r) {
    return (r._ = !1), e(t, r)
  }
  var Ho = (e, t, r) => ({ v: Bn(t, e[1], r) })
  function Uo() {
    return {}
  }
  function zo() {
    return null
  }
  function jF(...e) {
    return e.filter(Boolean).join(' ')
  }
  function Go(e, t, r) {
    let n = e,
      a = t.split('.')
    for (; a.length && ((n = n[a[0]]), n !== void 0); ) a.shift()
    return n || r
  }
  var te
  function $F(e, t = {}) {
    ;(t.overrides = t.overrides || {}),
      (t.slugify = t.slugify || IF),
      (t.namedCodesToUnicode = t.namedCodesToUnicode ? xt({}, op, t.namedCodesToUnicode) : op)
    let r = t.createElement || Ca
    function n(g, A, ...b) {
      let x = Go(t.overrides, `${g}.props`, {})
      return r(
        (function (F, B) {
          let I = Go(B, F)
          return I
            ? typeof I == 'function' || (typeof I == 'object' && 'render' in I)
              ? I
              : Go(B, `${F}.component`, F)
            : F
        })(g, t.overrides),
        xt({}, A, x, { className: jF(A?.className, x.className) || void 0 }),
        ...b
      )
    }
    function a(g) {
      let A = !1
      t.forceInline ? (A = !0) : t.forceBlock || (A = dF.test(g) === !1)
      let b = y(
        p(
          A
            ? g
            : `${g.trimEnd().replace(SF, '')}

`,
          { _: A }
        )
      )
      for (; typeof b[b.length - 1] == 'string' && !b[b.length - 1].trim(); ) b.pop()
      if (t.wrapper === null) return b
      let x = t.wrapper || (A ? 'span' : 'div'),
        F
      if (b.length > 1 || t.forceWrapper) F = b
      else {
        if (b.length === 1)
          return (F = b[0]), typeof F == 'string' ? n('span', { key: 'outer' }, F) : F
        F = null
      }
      return Ca(x, { key: 'outer' }, F)
    }
    function o(g) {
      let A = g.match($S)
      return A
        ? A.reduce(function (b, x, F) {
            let B = x.indexOf('=')
            if (B !== -1) {
              let I = (function (k) {
                  return (
                    k.indexOf('-') !== -1 &&
                      k.match(tF) === null &&
                      (k = k.replace(iF, function (U, V) {
                        return V.toUpperCase()
                      })),
                    k
                  )
                })(x.slice(0, B)).trim(),
                M = (function (k) {
                  let U = k[0]
                  return (U === '"' || U === "'") && k.length >= 2 && k[k.length - 1] === U
                    ? k.slice(1, -1)
                    : k
                })(x.slice(B + 1).trim()),
                w = ap[I] || I,
                N = (b[w] = (function (k, U) {
                  return k === 'style'
                    ? U.split(/;\s?/).reduce(function (V, H) {
                        let oe = H.slice(0, H.indexOf(':'))
                        return (
                          (V[oe.replace(/(-[a-z])/g, X => X[1].toUpperCase())] = H.slice(
                            oe.length + 1
                          ).trim()),
                          V
                        )
                      }, {})
                    : k === 'href'
                    ? Wt(U)
                    : (U.match(rF) && (U = U.slice(1, U.length - 1)),
                      U === 'true' || (U !== 'false' && U))
                })(I, M))
              typeof N == 'string' &&
                (Wo.test(N) || Vo.test(N)) &&
                (b[w] = me(a(N.trim()), { key: F }))
            } else x !== 'style' && (b[ap[x] || x] = !0)
            return b
          }, {})
        : null
    }
    let i = [],
      u = {},
      s = {
        blockQuote: {
          t: nt(dp),
          i: te.HIGH,
          l: (g, A, b) => ({ v: A(g[0].replace(zS, ''), b) }),
          h: (g, A, b) => n('blockquote', { key: b.k }, A(g.v, b)),
        },
        breakLine: { t: Or(GS), i: te.HIGH, l: Uo, h: (g, A, b) => n('br', { key: b.k }) },
        breakThematic: { t: nt(WS), i: te.HIGH, l: Uo, h: (g, A, b) => n('hr', { key: b.k }) },
        codeBlock: {
          t: nt(fp),
          i: te.MAX,
          l: g => ({ v: g[0].replace(/^ {4}/gm, '').replace(/\n+$/, ''), M: void 0 }),
          h: (g, A, b) =>
            n(
              'pre',
              { key: b.k },
              n('code', xt({}, g.O, { className: g.M ? `lang-${g.M}` : '' }), g.v)
            ),
        },
        codeFenced: {
          t: nt(pp),
          i: te.MAX,
          l: g => ({ O: o(g[3] || ''), v: g[4], M: g[2] || void 0, type: 'codeBlock' }),
        },
        codeInline: {
          t: dt(VS),
          i: te.LOW,
          l: g => ({ v: g[2] }),
          h: (g, A, b) => n('code', { key: b.k }, g.v),
        },
        footnote: { t: nt(XS), i: te.MAX, l: g => (i.push({ I: g[2], j: g[1] }), {}), h: zo },
        footnoteReference: {
          t: ct(JS),
          i: te.HIGH,
          l: g => ({ v: g[1], B: `#${t.slugify(g[1])}` }),
          h: (g, A, b) => n('a', { key: b.k, href: Wt(g.B) }, n('sup', { key: b.k }, g.v)),
        },
        gfmTask: {
          t: ct(ZS),
          i: te.HIGH,
          l: g => ({ R: g[1].toLowerCase() === 'x' }),
          h: (g, A, b) => n('input', { checked: g.R, key: b.k, readOnly: !0, type: 'checkbox' }),
        },
        heading: {
          t: nt(t.enforceAtxHeadings ? mp : hp),
          i: te.HIGH,
          l: (g, A, b) => ({ v: Bn(A, g[2], b), T: t.slugify(g[2]), C: g[1].length }),
          h: (g, A, b) => n(`h${g.C}`, { id: g.T, key: b.k }, A(g.v, b)),
        },
        headingSetext: {
          t: nt(gp),
          i: te.MAX,
          l: (g, A, b) => ({ v: Bn(A, g[1], b), C: g[2] === '=' ? 1 : 2, type: 'heading' }),
        },
        htmlComment: { t: Or(yp), i: te.HIGH, l: () => ({}), h: zo },
        image: {
          t: dt(RF),
          i: te.HIGH,
          l: g => ({ D: g[1], B: cp(g[2]), F: g[3] }),
          h: (g, A, b) =>
            n('img', { key: b.k, alt: g.D || void 0, title: g.F || void 0, src: Wt(g.B) }),
        },
        link: {
          t: ct(OF),
          i: te.LOW,
          l: (g, A, b) => ({ v: MF(A, g[1], b), B: cp(g[2]), F: g[3] }),
          h: (g, A, b) => n('a', { key: b.k, href: Wt(g.B), title: g.F }, A(g.v, b)),
        },
        linkAngleBraceStyleDetector: {
          t: ct(oF),
          i: te.MAX,
          l: g => ({ v: [{ v: g[1], type: 'text' }], B: g[1], type: 'link' }),
        },
        linkBareUrlDetector: {
          t: (g, A) => (A.N ? null : ct(nF)(g, A)),
          i: te.MAX,
          l: g => ({ v: [{ v: g[1], type: 'text' }], B: g[1], F: void 0, type: 'link' }),
        },
        linkMailtoDetector: {
          t: ct(aF),
          i: te.MAX,
          l(g) {
            let A = g[1],
              b = g[1]
            return (
              HS.test(b) || (b = 'mailto:' + b),
              { v: [{ v: A.replace('mailto:', ''), type: 'text' }], B: b, type: 'link' }
            )
          },
        },
        orderedList: up(n, 1),
        unorderedList: up(n, 2),
        newlineCoalescer: {
          t: nt(KS),
          i: te.LOW,
          l: Uo,
          h: () => `
`,
        },
        paragraph: { t: LF, i: te.LOW, l: Ho, h: (g, A, b) => n('p', { key: b.k }, A(g.v, b)) },
        ref: { t: ct(uF), i: te.MAX, l: g => ((u[g[1]] = { B: g[2], F: g[4] }), {}), h: zo },
        refImage: {
          t: dt(sF),
          i: te.MAX,
          l: g => ({ D: g[1] || void 0, P: g[2] }),
          h: (g, A, b) => n('img', { key: b.k, alt: g.D, src: Wt(u[g.P].B), title: u[g.P].F }),
        },
        refLink: {
          t: ct(lF),
          i: te.MAX,
          l: (g, A, b) => ({ v: A(g[1], b), Z: A(g[0].replace(cF, '\\$1'), b), P: g[2] }),
          h: (g, A, b) =>
            u[g.P]
              ? n('a', { key: b.k, href: Wt(u[g.P].B), title: u[g.P].F }, A(g.v, b))
              : n('span', { key: b.k }, A(g.Z, b)),
        },
        table: {
          t: nt(bp),
          i: te.HIGH,
          l: NF,
          h: (g, A, b) =>
            n(
              'table',
              { key: b.k },
              n(
                'thead',
                null,
                n(
                  'tr',
                  null,
                  g.L.map(function (x, F) {
                    return n('th', { key: F, style: lp(g, F) }, A(x, b))
                  })
                )
              ),
              n(
                'tbody',
                null,
                g.A.map(function (x, F) {
                  return n(
                    'tr',
                    { key: F },
                    x.map(function (B, I) {
                      return n('td', { key: I, style: lp(g, I) }, A(B, b))
                    })
                  )
                })
              )
            ),
        },
        tableSeparator: {
          t: function (g, A) {
            return A.$ ? ((A._ = !0), fF.exec(g)) : null
          },
          i: te.HIGH,
          l: function () {
            return { type: 'tableSeparator' }
          },
          h: () => ' | ',
        },
        text: {
          t: Or(xF),
          i: te.MIN,
          l: g => ({
            v: g[0].replace(eF, (A, b) =>
              t.namedCodesToUnicode[b] ? t.namedCodesToUnicode[b] : A
            ),
          }),
          h: g => g.v,
        },
        textBolded: {
          t: dt(EF),
          i: te.MED,
          l: (g, A, b) => ({ v: A(g[2], b) }),
          h: (g, A, b) => n('strong', { key: b.k }, A(g.v, b)),
        },
        textEmphasized: {
          t: dt(AF),
          i: te.LOW,
          l: (g, A, b) => ({ v: A(g[2], b) }),
          h: (g, A, b) => n('em', { key: b.k }, A(g.v, b)),
        },
        textEscaped: { t: dt(CF), i: te.HIGH, l: g => ({ v: g[1], type: 'text' }) },
        textMarked: {
          t: dt(vF),
          i: te.LOW,
          l: Ho,
          h: (g, A, b) => n('mark', { key: b.k }, A(g.v, b)),
        },
        textStrikethroughed: {
          t: dt(DF),
          i: te.LOW,
          l: Ho,
          h: (g, A, b) => n('del', { key: b.k }, A(g.v, b)),
        },
      }
    t.disableParsingRawHTML !== !0 &&
      ((s.htmlBlock = {
        t: Or(Wo),
        i: te.HIGH,
        l(g, A, b) {
          let [, x] = g[3].match(FF),
            F = new RegExp(`^${x}`, 'gm'),
            B = g[3].replace(F, ''),
            I = ((M = B), PF.some(U => U.test(M)) ? qF : Bn)
          var M
          let w = g[1].toLowerCase(),
            N = jS.indexOf(w) !== -1
          b.N = b.N || w === 'a'
          let k = N ? g[3] : I(A, B, b)
          return (b.N = !1), { O: o(g[2]), v: k, G: N, H: N ? w : g[1] }
        },
        h: (g, A, b) => n(g.H, xt({ key: b.k }, g.O), g.G ? g.v : A(g.v, b)),
      }),
      (s.htmlSelfClosing = {
        t: Or(Vo),
        i: te.HIGH,
        l: g => ({ O: o(g[2] || ''), H: g[1] }),
        h: (g, A, b) => n(g.H, xt({}, g.O, { key: b.k })),
      }))
    let p = (function (g) {
        let A = Object.keys(g)
        function b(x, F) {
          let B = [],
            I = ''
          for (; x; ) {
            let M = 0
            for (; M < A.length; ) {
              let w = A[M],
                N = g[w],
                k = N.t(x, F, I)
              if (k) {
                let U = k[0]
                x = x.substring(U.length)
                let V = N.l(k, b, F)
                V.type == null && (V.type = w), B.push(V), (I = U)
                break
              }
              M++
            }
          }
          return B
        }
        return (
          A.sort(function (x, F) {
            let B = g[x].i,
              I = g[F].i
            return B !== I ? B - I : x < F ? -1 : 1
          }),
          function (x, F) {
            return b(
              (function (B) {
                return B.replace(
                  YS,
                  `
`
                )
                  .replace(QS, '')
                  .replace(pF, '    ')
              })(x),
              F
            )
          }
        )
      })(s),
      y =
        ((E = (function (g) {
          return function (A, b, x) {
            return g[A.type].h(A, b, x)
          }
        })(s)),
        function g(A, b = {}) {
          if (Array.isArray(A)) {
            let x = b.k,
              F = [],
              B = !1
            for (let I = 0; I < A.length; I++) {
              b.k = I
              let M = g(A[I], b),
                w = typeof M == 'string'
              w && B ? (F[F.length - 1] += M) : M !== null && F.push(M), (B = w)
            }
            return (b.k = x), F
          }
          return E(A, g, b)
        })
    var E
    let m = a(e)
    return i.length
      ? n(
          'div',
          null,
          m,
          n(
            'footer',
            { key: 'footer' },
            i.map(function (g) {
              return n('div', { id: t.slugify(g.j), key: g.j }, g.j, y(p(g.I, { _: !0 })))
            })
          )
        )
      : m
  }
  ;(function (e) {
    ;(e[(e.MAX = 0)] = 'MAX'),
      (e[(e.HIGH = 1)] = 'HIGH'),
      (e[(e.MED = 2)] = 'MED'),
      (e[(e.LOW = 3)] = 'LOW'),
      (e[(e.MIN = 4)] = 'MIN')
  })(te || (te = {}))
  var Xo = e => {
    let { children: t, options: r } = e,
      n = (function (a, o) {
        if (a == null) return {}
        var i,
          u,
          s = {},
          p = Object.keys(a)
        for (u = 0; u < p.length; u++) o.indexOf((i = p[u])) >= 0 || (s[i] = a[i])
        return s
      })(e, qS)
    return me($F(t, r), n)
  }
  var Oy = fe(Tn(), 1),
    Ry = fe(Xp(), 1),
    Py = fe(r0(), 1)
  l()
  c()
  d()
  l()
  c()
  d()
  l()
  c()
  d()
  l()
  c()
  d()
  l()
  c()
  d()
  l()
  c()
  d()
  var $K = __STORYBOOKCHANNELS__,
    {
      Channel: Zo,
      PostMessageTransport: HK,
      WebsocketTransport: UK,
      createBrowserChannel: P3,
      createPostMessageChannel: zK,
      createWebSocketChannel: GK,
    } = __STORYBOOKCHANNELS__
  l()
  c()
  d()
  var XK = __STORYBOOKCOREEVENTS__,
    {
      CHANNEL_CREATED: JK,
      CONFIG_ERROR: I3,
      CURRENT_STORY_WAS_SET: k3,
      DOCS_PREPARED: N3,
      DOCS_RENDERED: L3,
      FORCE_REMOUNT: M3,
      FORCE_RE_RENDER: ei,
      GLOBALS_UPDATED: Rn,
      IGNORED_EXCEPTION: QK,
      NAVIGATE_URL: n0,
      PLAY_FUNCTION_THREW_EXCEPTION: q3,
      PRELOAD_ENTRIES: j3,
      PREVIEW_BUILDER_PROGRESS: ZK,
      PREVIEW_KEYDOWN: $3,
      REGISTER_SUBSCRIPTION: eY,
      REQUEST_WHATS_NEW_DATA: tY,
      RESET_STORY_ARGS: Pn,
      RESULT_WHATS_NEW_DATA: rY,
      SELECT_STORY: nY,
      SET_CONFIG: aY,
      SET_CURRENT_STORY: H3,
      SET_GLOBALS: U3,
      SET_INDEX: z3,
      SET_STORIES: oY,
      SET_WHATS_NEW_CACHE: iY,
      SHARED_STATE_CHANGED: G3,
      SHARED_STATE_SET: W3,
      STORIES_COLLAPSE_ALL: uY,
      STORIES_EXPAND_ALL: sY,
      STORY_ARGS_UPDATED: In,
      STORY_CHANGED: V3,
      STORY_ERRORED: K3,
      STORY_INDEX_INVALIDATED: Y3,
      STORY_MISSING: X3,
      STORY_PREPARED: J3,
      STORY_RENDERED: a0,
      STORY_RENDER_PHASE_CHANGED: Q3,
      STORY_SPECIFIED: Z3,
      STORY_THREW_EXCEPTION: eB,
      STORY_UNCHANGED: tB,
      TELEMETRY_ERROR: lY,
      TOGGLE_WHATS_NEW_NOTIFICATIONS: cY,
      UPDATE_GLOBALS: o0,
      UPDATE_QUERY_PARAMS: rB,
      UPDATE_STORY_ARGS: kn,
    } = __STORYBOOKCOREEVENTS__
  var nB = Object.create,
    i0 = Object.defineProperty,
    aB = Object.getOwnPropertyDescriptor,
    u0 = Object.getOwnPropertyNames,
    oB = Object.getPrototypeOf,
    iB = Object.prototype.hasOwnProperty,
    Ke = (e, t) =>
      function () {
        return t || (0, e[u0(e)[0]])((t = { exports: {} }).exports, t), t.exports
      },
    uB = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let a of u0(t))
          !iB.call(e, a) &&
            a !== r &&
            i0(e, a, { get: () => t[a], enumerable: !(n = aB(t, a)) || n.enumerable })
      return e
    },
    s0 = (e, t, r) => (
      (r = e != null ? nB(oB(e)) : {}),
      uB(t || !e || !e.__esModule ? i0(r, 'default', { value: e, enumerable: !0 }) : r, e)
    )
  function l0() {
    let e = { setHandler: () => {}, send: () => {} }
    return new Zo({ transport: e })
  }
  var sB = class {
      constructor() {
        ;(this.getChannel = () => {
          if (!this.channel) {
            let e = l0()
            return this.setChannel(e), e
          }
          return this.channel
        }),
          (this.getServerChannel = () => {
            if (!this.serverChannel) throw new Error('Accessing non-existent serverChannel')
            return this.serverChannel
          }),
          (this.ready = () => this.promise),
          (this.hasChannel = () => !!this.channel),
          (this.hasServerChannel = () => !!this.serverChannel),
          (this.setChannel = e => {
            ;(this.channel = e), this.resolve()
          }),
          (this.setServerChannel = e => {
            this.serverChannel = e
          }),
          (this.promise = new Promise(e => {
            this.resolve = () => e(this.getChannel())
          }))
      }
    },
    ti = '__STORYBOOK_ADDONS_PREVIEW'
  function lB() {
    return ue[ti] || (ue[ti] = new sB()), ue[ti]
  }
  var Nn = lB()
  var nh = fe(Tn(), 1),
    kr = fe(Ln(), 1),
    AT = fe(G0(), 1),
    vT = fe(qn(), 1)
  l()
  c()
  d()
  l()
  c()
  d()
  l()
  c()
  d()
  function Kt(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
    var n = Array.from(typeof e == 'string' ? [e] : e)
    n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, '')
    var a = n.reduce(function (u, s) {
      var p = s.match(/\n([\t ]+|(?!\s).)/g)
      return p
        ? u.concat(
            p.map(function (y) {
              var E, m
              return (m = (E = y.match(/[\t ]/g)) === null || E === void 0 ? void 0 : E.length) !==
                null && m !== void 0
                ? m
                : 0
            })
          )
        : u
    }, [])
    if (a.length) {
      var o = new RegExp(
        `
[	 ]{` +
          Math.min.apply(Math, a) +
          '}',
        'g'
      )
      n = n.map(function (u) {
        return u.replace(
          o,
          `
`
        )
      })
    }
    n[0] = n[0].replace(/^\r?\n/, '')
    var i = n[0]
    return (
      t.forEach(function (u, s) {
        var p = i.match(/(?:^|\n)( *)$/),
          y = p ? p[1] : '',
          E = u
        typeof u == 'string' &&
          u.includes(`
`) &&
          (E = String(u)
            .split(
              `
`
            )
            .map(function (m, g) {
              return g === 0 ? m : '' + y + m
            }).join(`
`)),
          (i += E + n[s + 1])
      }),
      i
    )
  }
  var ve = Kt
  var ZB = (e => (
    (e.PREVIEW_CLIENT_LOGGER = 'PREVIEW_CLIENT-LOGGER'),
    (e.PREVIEW_CHANNELS = 'PREVIEW_CHANNELS'),
    (e.PREVIEW_CORE_EVENTS = 'PREVIEW_CORE-EVENTS'),
    (e.PREVIEW_INSTRUMENTER = 'PREVIEW_INSTRUMENTER'),
    (e.PREVIEW_API = 'PREVIEW_API'),
    (e.PREVIEW_REACT_DOM_SHIM = 'PREVIEW_REACT-DOM-SHIM'),
    (e.PREVIEW_ROUTER = 'PREVIEW_ROUTER'),
    (e.PREVIEW_THEMING = 'PREVIEW_THEMING'),
    (e.RENDERER_HTML = 'RENDERER_HTML'),
    (e.RENDERER_PREACT = 'RENDERER_PREACT'),
    (e.RENDERER_REACT = 'RENDERER_REACT'),
    (e.RENDERER_SERVER = 'RENDERER_SERVER'),
    (e.RENDERER_SVELTE = 'RENDERER_SVELTE'),
    (e.RENDERER_VUE = 'RENDERER_VUE'),
    (e.RENDERER_VUE3 = 'RENDERER_VUE3'),
    (e.RENDERER_WEB_COMPONENTS = 'RENDERER_WEB-COMPONENTS'),
    e
  ))(ZB || {})
  l()
  c()
  d()
  var Un = fe(ri(), 1)
  var ah = fe(th(), 1)
  var oh = fe(jo(), 1)
  var vJ = (0, nh.default)(1)(e =>
    Object.values(e).reduce((t, r) => ((t[r.importPath] = t[r.importPath] || r), t), {})
  )
  var DJ = Symbol('incompatible')
  var CJ = Symbol('Deeply equal')
  var DT = Kt`
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`,
    xJ = (0, ah.default)(() => {}, DT)
  var St = (...e) => {
    let t = {},
      r = e.filter(Boolean),
      n = r.reduce(
        (a, o) => (
          Object.entries(o).forEach(([i, u]) => {
            let s = a[i]
            Array.isArray(u) || typeof s > 'u'
              ? (a[i] = u)
              : (0, Un.default)(u) && (0, Un.default)(s)
              ? (t[i] = !0)
              : typeof u < 'u' && (a[i] = u)
          }),
          a
        ),
        {}
      )
    return (
      Object.keys(t).forEach(a => {
        let o = r
          .filter(Boolean)
          .map(i => i[a])
          .filter(i => typeof i < 'u')
        o.every(i => (0, Un.default)(i)) ? (n[a] = St(...o)) : (n[a] = o[o.length - 1])
      }),
      n
    )
  }
  var ai = (e, t, r) => {
      let n = typeof e
      switch (n) {
        case 'boolean':
        case 'string':
        case 'number':
        case 'function':
        case 'symbol':
          return { name: n }
      }
      return e
        ? r.has(e)
          ? (Ve.warn(Kt`
        We've detected a cycle in arg '${t}'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/react/essentials/controls#fully-custom-args
      `),
            { name: 'other', value: 'cyclic object' })
          : (r.add(e),
            Array.isArray(e)
              ? {
                  name: 'array',
                  value:
                    e.length > 0 ? ai(e[0], t, new Set(r)) : { name: 'other', value: 'unknown' },
                }
              : { name: 'object', value: (0, kr.default)(e, a => ai(a, t, new Set(r))) })
        : { name: 'object', value: {} }
    },
    CT = e => {
      let { id: t, argTypes: r = {}, initialArgs: n = {} } = e,
        a = (0, kr.default)(n, (i, u) => ({ name: u, type: ai(i, `${t}.${u}`, new Set()) })),
        o = (0, kr.default)(r, (i, u) => ({ name: u }))
      return St(a, o, r)
    }
  CT.secondPass = !0
  var rh = (e, t) => (Array.isArray(t) ? t.includes(e) : e.match(t)),
    Lr = (e, t, r) =>
      !t && !r
        ? e
        : e &&
          (0, oh.default)(e, (n, a) => {
            let o = n.name || a
            return (!t || rh(o, t)) && (!r || !rh(o, r))
          }),
    xT = (e, t, r) => {
      let { type: n, options: a } = e
      if (n) {
        if (r.color && r.color.test(t)) {
          let o = n.name
          if (o === 'string') return { control: { type: 'color' } }
          o !== 'enum' &&
            Ve.warn(
              `Addon controls: Control of type color only supports string, received "${o}" instead`
            )
        }
        if (r.date && r.date.test(t)) return { control: { type: 'date' } }
        switch (n.name) {
          case 'array':
            return { control: { type: 'object' } }
          case 'boolean':
            return { control: { type: 'boolean' } }
          case 'string':
            return { control: { type: 'text' } }
          case 'number':
            return { control: { type: 'number' } }
          case 'enum': {
            let { value: o } = n
            return { control: { type: o?.length <= 5 ? 'radio' : 'select' }, options: o }
          }
          case 'function':
          case 'symbol':
            return null
          default:
            return { control: { type: a ? 'select' : 'object' } }
        }
      }
    },
    ih = e => {
      let {
        argTypes: t,
        parameters: {
          __isArgsStory: r,
          controls: { include: n = null, exclude: a = null, matchers: o = {} } = {},
        },
      } = e
      if (!r) return t
      let i = Lr(t, n, a),
        u = (0, kr.default)(i, (s, p) => s?.type && xT(s, p, o))
      return St(u, i)
    }
  ih.secondPass = !0
  function oi(e) {
    return async (t, r, n) => {
      await e.reduceRight(
        (a, o) => async () => o(t, a, n),
        async () => r(n)
      )()
    }
  }
  function Nr(e, t) {
    return e.map(r => r.default?.[t] ?? r[t]).filter(Boolean)
  }
  function jn(e, t, r = {}) {
    return Nr(e, t).reduce((n, a) => (r.reverseFileOrder ? [...a, ...n] : [...n, ...a]), [])
  }
  function $n(e, t) {
    return Object.assign({}, ...Nr(e, t))
  }
  function Hn(e, t) {
    return Nr(e, t).pop()
  }
  function ii(e) {
    let t = jn(e, 'argTypesEnhancers'),
      r = Nr(e, 'runStep')
    return {
      parameters: St(...Nr(e, 'parameters')),
      decorators: jn(e, 'decorators', {
        reverseFileOrder: !(ue.FEATURES?.legacyDecoratorFileOrder ?? !1),
      }),
      args: $n(e, 'args'),
      argsEnhancers: jn(e, 'argsEnhancers'),
      argTypes: $n(e, 'argTypes'),
      argTypesEnhancers: [...t.filter(n => !n.secondPass), ...t.filter(n => n.secondPass)],
      globals: $n(e, 'globals'),
      globalTypes: $n(e, 'globalTypes'),
      loaders: jn(e, 'loaders'),
      render: Hn(e, 'render'),
      renderToCanvas: Hn(e, 'renderToCanvas'),
      renderToDOM: Hn(e, 'renderToDOM'),
      applyDecorators: Hn(e, 'applyDecorators'),
      runStep: oi(r),
    }
  }
  var SJ = ii([])
  var E_ = fe(qn(), 1),
    A_ = fe(Ii(), 1)
  l()
  c()
  d()
  var D_ = fe(qn(), 1)
  var C_ = fe(Ii(), 1),
    x_ = fe(ri(), 1),
    _m = Ke({
      '../../node_modules/entities/lib/maps/entities.json'(e, t) {
        t.exports = {
          Aacute: '\xC1',
          aacute: '\xE1',
          Abreve: '\u0102',
          abreve: '\u0103',
          ac: '\u223E',
          acd: '\u223F',
          acE: '\u223E\u0333',
          Acirc: '\xC2',
          acirc: '\xE2',
          acute: '\xB4',
          Acy: '\u0410',
          acy: '\u0430',
          AElig: '\xC6',
          aelig: '\xE6',
          af: '\u2061',
          Afr: '\u{1D504}',
          afr: '\u{1D51E}',
          Agrave: '\xC0',
          agrave: '\xE0',
          alefsym: '\u2135',
          aleph: '\u2135',
          Alpha: '\u0391',
          alpha: '\u03B1',
          Amacr: '\u0100',
          amacr: '\u0101',
          amalg: '\u2A3F',
          amp: '&',
          AMP: '&',
          andand: '\u2A55',
          And: '\u2A53',
          and: '\u2227',
          andd: '\u2A5C',
          andslope: '\u2A58',
          andv: '\u2A5A',
          ang: '\u2220',
          ange: '\u29A4',
          angle: '\u2220',
          angmsdaa: '\u29A8',
          angmsdab: '\u29A9',
          angmsdac: '\u29AA',
          angmsdad: '\u29AB',
          angmsdae: '\u29AC',
          angmsdaf: '\u29AD',
          angmsdag: '\u29AE',
          angmsdah: '\u29AF',
          angmsd: '\u2221',
          angrt: '\u221F',
          angrtvb: '\u22BE',
          angrtvbd: '\u299D',
          angsph: '\u2222',
          angst: '\xC5',
          angzarr: '\u237C',
          Aogon: '\u0104',
          aogon: '\u0105',
          Aopf: '\u{1D538}',
          aopf: '\u{1D552}',
          apacir: '\u2A6F',
          ap: '\u2248',
          apE: '\u2A70',
          ape: '\u224A',
          apid: '\u224B',
          apos: "'",
          ApplyFunction: '\u2061',
          approx: '\u2248',
          approxeq: '\u224A',
          Aring: '\xC5',
          aring: '\xE5',
          Ascr: '\u{1D49C}',
          ascr: '\u{1D4B6}',
          Assign: '\u2254',
          ast: '*',
          asymp: '\u2248',
          asympeq: '\u224D',
          Atilde: '\xC3',
          atilde: '\xE3',
          Auml: '\xC4',
          auml: '\xE4',
          awconint: '\u2233',
          awint: '\u2A11',
          backcong: '\u224C',
          backepsilon: '\u03F6',
          backprime: '\u2035',
          backsim: '\u223D',
          backsimeq: '\u22CD',
          Backslash: '\u2216',
          Barv: '\u2AE7',
          barvee: '\u22BD',
          barwed: '\u2305',
          Barwed: '\u2306',
          barwedge: '\u2305',
          bbrk: '\u23B5',
          bbrktbrk: '\u23B6',
          bcong: '\u224C',
          Bcy: '\u0411',
          bcy: '\u0431',
          bdquo: '\u201E',
          becaus: '\u2235',
          because: '\u2235',
          Because: '\u2235',
          bemptyv: '\u29B0',
          bepsi: '\u03F6',
          bernou: '\u212C',
          Bernoullis: '\u212C',
          Beta: '\u0392',
          beta: '\u03B2',
          beth: '\u2136',
          between: '\u226C',
          Bfr: '\u{1D505}',
          bfr: '\u{1D51F}',
          bigcap: '\u22C2',
          bigcirc: '\u25EF',
          bigcup: '\u22C3',
          bigodot: '\u2A00',
          bigoplus: '\u2A01',
          bigotimes: '\u2A02',
          bigsqcup: '\u2A06',
          bigstar: '\u2605',
          bigtriangledown: '\u25BD',
          bigtriangleup: '\u25B3',
          biguplus: '\u2A04',
          bigvee: '\u22C1',
          bigwedge: '\u22C0',
          bkarow: '\u290D',
          blacklozenge: '\u29EB',
          blacksquare: '\u25AA',
          blacktriangle: '\u25B4',
          blacktriangledown: '\u25BE',
          blacktriangleleft: '\u25C2',
          blacktriangleright: '\u25B8',
          blank: '\u2423',
          blk12: '\u2592',
          blk14: '\u2591',
          blk34: '\u2593',
          block: '\u2588',
          bne: '=\u20E5',
          bnequiv: '\u2261\u20E5',
          bNot: '\u2AED',
          bnot: '\u2310',
          Bopf: '\u{1D539}',
          bopf: '\u{1D553}',
          bot: '\u22A5',
          bottom: '\u22A5',
          bowtie: '\u22C8',
          boxbox: '\u29C9',
          boxdl: '\u2510',
          boxdL: '\u2555',
          boxDl: '\u2556',
          boxDL: '\u2557',
          boxdr: '\u250C',
          boxdR: '\u2552',
          boxDr: '\u2553',
          boxDR: '\u2554',
          boxh: '\u2500',
          boxH: '\u2550',
          boxhd: '\u252C',
          boxHd: '\u2564',
          boxhD: '\u2565',
          boxHD: '\u2566',
          boxhu: '\u2534',
          boxHu: '\u2567',
          boxhU: '\u2568',
          boxHU: '\u2569',
          boxminus: '\u229F',
          boxplus: '\u229E',
          boxtimes: '\u22A0',
          boxul: '\u2518',
          boxuL: '\u255B',
          boxUl: '\u255C',
          boxUL: '\u255D',
          boxur: '\u2514',
          boxuR: '\u2558',
          boxUr: '\u2559',
          boxUR: '\u255A',
          boxv: '\u2502',
          boxV: '\u2551',
          boxvh: '\u253C',
          boxvH: '\u256A',
          boxVh: '\u256B',
          boxVH: '\u256C',
          boxvl: '\u2524',
          boxvL: '\u2561',
          boxVl: '\u2562',
          boxVL: '\u2563',
          boxvr: '\u251C',
          boxvR: '\u255E',
          boxVr: '\u255F',
          boxVR: '\u2560',
          bprime: '\u2035',
          breve: '\u02D8',
          Breve: '\u02D8',
          brvbar: '\xA6',
          bscr: '\u{1D4B7}',
          Bscr: '\u212C',
          bsemi: '\u204F',
          bsim: '\u223D',
          bsime: '\u22CD',
          bsolb: '\u29C5',
          bsol: '\\',
          bsolhsub: '\u27C8',
          bull: '\u2022',
          bullet: '\u2022',
          bump: '\u224E',
          bumpE: '\u2AAE',
          bumpe: '\u224F',
          Bumpeq: '\u224E',
          bumpeq: '\u224F',
          Cacute: '\u0106',
          cacute: '\u0107',
          capand: '\u2A44',
          capbrcup: '\u2A49',
          capcap: '\u2A4B',
          cap: '\u2229',
          Cap: '\u22D2',
          capcup: '\u2A47',
          capdot: '\u2A40',
          CapitalDifferentialD: '\u2145',
          caps: '\u2229\uFE00',
          caret: '\u2041',
          caron: '\u02C7',
          Cayleys: '\u212D',
          ccaps: '\u2A4D',
          Ccaron: '\u010C',
          ccaron: '\u010D',
          Ccedil: '\xC7',
          ccedil: '\xE7',
          Ccirc: '\u0108',
          ccirc: '\u0109',
          Cconint: '\u2230',
          ccups: '\u2A4C',
          ccupssm: '\u2A50',
          Cdot: '\u010A',
          cdot: '\u010B',
          cedil: '\xB8',
          Cedilla: '\xB8',
          cemptyv: '\u29B2',
          cent: '\xA2',
          centerdot: '\xB7',
          CenterDot: '\xB7',
          cfr: '\u{1D520}',
          Cfr: '\u212D',
          CHcy: '\u0427',
          chcy: '\u0447',
          check: '\u2713',
          checkmark: '\u2713',
          Chi: '\u03A7',
          chi: '\u03C7',
          circ: '\u02C6',
          circeq: '\u2257',
          circlearrowleft: '\u21BA',
          circlearrowright: '\u21BB',
          circledast: '\u229B',
          circledcirc: '\u229A',
          circleddash: '\u229D',
          CircleDot: '\u2299',
          circledR: '\xAE',
          circledS: '\u24C8',
          CircleMinus: '\u2296',
          CirclePlus: '\u2295',
          CircleTimes: '\u2297',
          cir: '\u25CB',
          cirE: '\u29C3',
          cire: '\u2257',
          cirfnint: '\u2A10',
          cirmid: '\u2AEF',
          cirscir: '\u29C2',
          ClockwiseContourIntegral: '\u2232',
          CloseCurlyDoubleQuote: '\u201D',
          CloseCurlyQuote: '\u2019',
          clubs: '\u2663',
          clubsuit: '\u2663',
          colon: ':',
          Colon: '\u2237',
          Colone: '\u2A74',
          colone: '\u2254',
          coloneq: '\u2254',
          comma: ',',
          commat: '@',
          comp: '\u2201',
          compfn: '\u2218',
          complement: '\u2201',
          complexes: '\u2102',
          cong: '\u2245',
          congdot: '\u2A6D',
          Congruent: '\u2261',
          conint: '\u222E',
          Conint: '\u222F',
          ContourIntegral: '\u222E',
          copf: '\u{1D554}',
          Copf: '\u2102',
          coprod: '\u2210',
          Coproduct: '\u2210',
          copy: '\xA9',
          COPY: '\xA9',
          copysr: '\u2117',
          CounterClockwiseContourIntegral: '\u2233',
          crarr: '\u21B5',
          cross: '\u2717',
          Cross: '\u2A2F',
          Cscr: '\u{1D49E}',
          cscr: '\u{1D4B8}',
          csub: '\u2ACF',
          csube: '\u2AD1',
          csup: '\u2AD0',
          csupe: '\u2AD2',
          ctdot: '\u22EF',
          cudarrl: '\u2938',
          cudarrr: '\u2935',
          cuepr: '\u22DE',
          cuesc: '\u22DF',
          cularr: '\u21B6',
          cularrp: '\u293D',
          cupbrcap: '\u2A48',
          cupcap: '\u2A46',
          CupCap: '\u224D',
          cup: '\u222A',
          Cup: '\u22D3',
          cupcup: '\u2A4A',
          cupdot: '\u228D',
          cupor: '\u2A45',
          cups: '\u222A\uFE00',
          curarr: '\u21B7',
          curarrm: '\u293C',
          curlyeqprec: '\u22DE',
          curlyeqsucc: '\u22DF',
          curlyvee: '\u22CE',
          curlywedge: '\u22CF',
          curren: '\xA4',
          curvearrowleft: '\u21B6',
          curvearrowright: '\u21B7',
          cuvee: '\u22CE',
          cuwed: '\u22CF',
          cwconint: '\u2232',
          cwint: '\u2231',
          cylcty: '\u232D',
          dagger: '\u2020',
          Dagger: '\u2021',
          daleth: '\u2138',
          darr: '\u2193',
          Darr: '\u21A1',
          dArr: '\u21D3',
          dash: '\u2010',
          Dashv: '\u2AE4',
          dashv: '\u22A3',
          dbkarow: '\u290F',
          dblac: '\u02DD',
          Dcaron: '\u010E',
          dcaron: '\u010F',
          Dcy: '\u0414',
          dcy: '\u0434',
          ddagger: '\u2021',
          ddarr: '\u21CA',
          DD: '\u2145',
          dd: '\u2146',
          DDotrahd: '\u2911',
          ddotseq: '\u2A77',
          deg: '\xB0',
          Del: '\u2207',
          Delta: '\u0394',
          delta: '\u03B4',
          demptyv: '\u29B1',
          dfisht: '\u297F',
          Dfr: '\u{1D507}',
          dfr: '\u{1D521}',
          dHar: '\u2965',
          dharl: '\u21C3',
          dharr: '\u21C2',
          DiacriticalAcute: '\xB4',
          DiacriticalDot: '\u02D9',
          DiacriticalDoubleAcute: '\u02DD',
          DiacriticalGrave: '`',
          DiacriticalTilde: '\u02DC',
          diam: '\u22C4',
          diamond: '\u22C4',
          Diamond: '\u22C4',
          diamondsuit: '\u2666',
          diams: '\u2666',
          die: '\xA8',
          DifferentialD: '\u2146',
          digamma: '\u03DD',
          disin: '\u22F2',
          div: '\xF7',
          divide: '\xF7',
          divideontimes: '\u22C7',
          divonx: '\u22C7',
          DJcy: '\u0402',
          djcy: '\u0452',
          dlcorn: '\u231E',
          dlcrop: '\u230D',
          dollar: '$',
          Dopf: '\u{1D53B}',
          dopf: '\u{1D555}',
          Dot: '\xA8',
          dot: '\u02D9',
          DotDot: '\u20DC',
          doteq: '\u2250',
          doteqdot: '\u2251',
          DotEqual: '\u2250',
          dotminus: '\u2238',
          dotplus: '\u2214',
          dotsquare: '\u22A1',
          doublebarwedge: '\u2306',
          DoubleContourIntegral: '\u222F',
          DoubleDot: '\xA8',
          DoubleDownArrow: '\u21D3',
          DoubleLeftArrow: '\u21D0',
          DoubleLeftRightArrow: '\u21D4',
          DoubleLeftTee: '\u2AE4',
          DoubleLongLeftArrow: '\u27F8',
          DoubleLongLeftRightArrow: '\u27FA',
          DoubleLongRightArrow: '\u27F9',
          DoubleRightArrow: '\u21D2',
          DoubleRightTee: '\u22A8',
          DoubleUpArrow: '\u21D1',
          DoubleUpDownArrow: '\u21D5',
          DoubleVerticalBar: '\u2225',
          DownArrowBar: '\u2913',
          downarrow: '\u2193',
          DownArrow: '\u2193',
          Downarrow: '\u21D3',
          DownArrowUpArrow: '\u21F5',
          DownBreve: '\u0311',
          downdownarrows: '\u21CA',
          downharpoonleft: '\u21C3',
          downharpoonright: '\u21C2',
          DownLeftRightVector: '\u2950',
          DownLeftTeeVector: '\u295E',
          DownLeftVectorBar: '\u2956',
          DownLeftVector: '\u21BD',
          DownRightTeeVector: '\u295F',
          DownRightVectorBar: '\u2957',
          DownRightVector: '\u21C1',
          DownTeeArrow: '\u21A7',
          DownTee: '\u22A4',
          drbkarow: '\u2910',
          drcorn: '\u231F',
          drcrop: '\u230C',
          Dscr: '\u{1D49F}',
          dscr: '\u{1D4B9}',
          DScy: '\u0405',
          dscy: '\u0455',
          dsol: '\u29F6',
          Dstrok: '\u0110',
          dstrok: '\u0111',
          dtdot: '\u22F1',
          dtri: '\u25BF',
          dtrif: '\u25BE',
          duarr: '\u21F5',
          duhar: '\u296F',
          dwangle: '\u29A6',
          DZcy: '\u040F',
          dzcy: '\u045F',
          dzigrarr: '\u27FF',
          Eacute: '\xC9',
          eacute: '\xE9',
          easter: '\u2A6E',
          Ecaron: '\u011A',
          ecaron: '\u011B',
          Ecirc: '\xCA',
          ecirc: '\xEA',
          ecir: '\u2256',
          ecolon: '\u2255',
          Ecy: '\u042D',
          ecy: '\u044D',
          eDDot: '\u2A77',
          Edot: '\u0116',
          edot: '\u0117',
          eDot: '\u2251',
          ee: '\u2147',
          efDot: '\u2252',
          Efr: '\u{1D508}',
          efr: '\u{1D522}',
          eg: '\u2A9A',
          Egrave: '\xC8',
          egrave: '\xE8',
          egs: '\u2A96',
          egsdot: '\u2A98',
          el: '\u2A99',
          Element: '\u2208',
          elinters: '\u23E7',
          ell: '\u2113',
          els: '\u2A95',
          elsdot: '\u2A97',
          Emacr: '\u0112',
          emacr: '\u0113',
          empty: '\u2205',
          emptyset: '\u2205',
          EmptySmallSquare: '\u25FB',
          emptyv: '\u2205',
          EmptyVerySmallSquare: '\u25AB',
          emsp13: '\u2004',
          emsp14: '\u2005',
          emsp: '\u2003',
          ENG: '\u014A',
          eng: '\u014B',
          ensp: '\u2002',
          Eogon: '\u0118',
          eogon: '\u0119',
          Eopf: '\u{1D53C}',
          eopf: '\u{1D556}',
          epar: '\u22D5',
          eparsl: '\u29E3',
          eplus: '\u2A71',
          epsi: '\u03B5',
          Epsilon: '\u0395',
          epsilon: '\u03B5',
          epsiv: '\u03F5',
          eqcirc: '\u2256',
          eqcolon: '\u2255',
          eqsim: '\u2242',
          eqslantgtr: '\u2A96',
          eqslantless: '\u2A95',
          Equal: '\u2A75',
          equals: '=',
          EqualTilde: '\u2242',
          equest: '\u225F',
          Equilibrium: '\u21CC',
          equiv: '\u2261',
          equivDD: '\u2A78',
          eqvparsl: '\u29E5',
          erarr: '\u2971',
          erDot: '\u2253',
          escr: '\u212F',
          Escr: '\u2130',
          esdot: '\u2250',
          Esim: '\u2A73',
          esim: '\u2242',
          Eta: '\u0397',
          eta: '\u03B7',
          ETH: '\xD0',
          eth: '\xF0',
          Euml: '\xCB',
          euml: '\xEB',
          euro: '\u20AC',
          excl: '!',
          exist: '\u2203',
          Exists: '\u2203',
          expectation: '\u2130',
          exponentiale: '\u2147',
          ExponentialE: '\u2147',
          fallingdotseq: '\u2252',
          Fcy: '\u0424',
          fcy: '\u0444',
          female: '\u2640',
          ffilig: '\uFB03',
          fflig: '\uFB00',
          ffllig: '\uFB04',
          Ffr: '\u{1D509}',
          ffr: '\u{1D523}',
          filig: '\uFB01',
          FilledSmallSquare: '\u25FC',
          FilledVerySmallSquare: '\u25AA',
          fjlig: 'fj',
          flat: '\u266D',
          fllig: '\uFB02',
          fltns: '\u25B1',
          fnof: '\u0192',
          Fopf: '\u{1D53D}',
          fopf: '\u{1D557}',
          forall: '\u2200',
          ForAll: '\u2200',
          fork: '\u22D4',
          forkv: '\u2AD9',
          Fouriertrf: '\u2131',
          fpartint: '\u2A0D',
          frac12: '\xBD',
          frac13: '\u2153',
          frac14: '\xBC',
          frac15: '\u2155',
          frac16: '\u2159',
          frac18: '\u215B',
          frac23: '\u2154',
          frac25: '\u2156',
          frac34: '\xBE',
          frac35: '\u2157',
          frac38: '\u215C',
          frac45: '\u2158',
          frac56: '\u215A',
          frac58: '\u215D',
          frac78: '\u215E',
          frasl: '\u2044',
          frown: '\u2322',
          fscr: '\u{1D4BB}',
          Fscr: '\u2131',
          gacute: '\u01F5',
          Gamma: '\u0393',
          gamma: '\u03B3',
          Gammad: '\u03DC',
          gammad: '\u03DD',
          gap: '\u2A86',
          Gbreve: '\u011E',
          gbreve: '\u011F',
          Gcedil: '\u0122',
          Gcirc: '\u011C',
          gcirc: '\u011D',
          Gcy: '\u0413',
          gcy: '\u0433',
          Gdot: '\u0120',
          gdot: '\u0121',
          ge: '\u2265',
          gE: '\u2267',
          gEl: '\u2A8C',
          gel: '\u22DB',
          geq: '\u2265',
          geqq: '\u2267',
          geqslant: '\u2A7E',
          gescc: '\u2AA9',
          ges: '\u2A7E',
          gesdot: '\u2A80',
          gesdoto: '\u2A82',
          gesdotol: '\u2A84',
          gesl: '\u22DB\uFE00',
          gesles: '\u2A94',
          Gfr: '\u{1D50A}',
          gfr: '\u{1D524}',
          gg: '\u226B',
          Gg: '\u22D9',
          ggg: '\u22D9',
          gimel: '\u2137',
          GJcy: '\u0403',
          gjcy: '\u0453',
          gla: '\u2AA5',
          gl: '\u2277',
          glE: '\u2A92',
          glj: '\u2AA4',
          gnap: '\u2A8A',
          gnapprox: '\u2A8A',
          gne: '\u2A88',
          gnE: '\u2269',
          gneq: '\u2A88',
          gneqq: '\u2269',
          gnsim: '\u22E7',
          Gopf: '\u{1D53E}',
          gopf: '\u{1D558}',
          grave: '`',
          GreaterEqual: '\u2265',
          GreaterEqualLess: '\u22DB',
          GreaterFullEqual: '\u2267',
          GreaterGreater: '\u2AA2',
          GreaterLess: '\u2277',
          GreaterSlantEqual: '\u2A7E',
          GreaterTilde: '\u2273',
          Gscr: '\u{1D4A2}',
          gscr: '\u210A',
          gsim: '\u2273',
          gsime: '\u2A8E',
          gsiml: '\u2A90',
          gtcc: '\u2AA7',
          gtcir: '\u2A7A',
          gt: '>',
          GT: '>',
          Gt: '\u226B',
          gtdot: '\u22D7',
          gtlPar: '\u2995',
          gtquest: '\u2A7C',
          gtrapprox: '\u2A86',
          gtrarr: '\u2978',
          gtrdot: '\u22D7',
          gtreqless: '\u22DB',
          gtreqqless: '\u2A8C',
          gtrless: '\u2277',
          gtrsim: '\u2273',
          gvertneqq: '\u2269\uFE00',
          gvnE: '\u2269\uFE00',
          Hacek: '\u02C7',
          hairsp: '\u200A',
          half: '\xBD',
          hamilt: '\u210B',
          HARDcy: '\u042A',
          hardcy: '\u044A',
          harrcir: '\u2948',
          harr: '\u2194',
          hArr: '\u21D4',
          harrw: '\u21AD',
          Hat: '^',
          hbar: '\u210F',
          Hcirc: '\u0124',
          hcirc: '\u0125',
          hearts: '\u2665',
          heartsuit: '\u2665',
          hellip: '\u2026',
          hercon: '\u22B9',
          hfr: '\u{1D525}',
          Hfr: '\u210C',
          HilbertSpace: '\u210B',
          hksearow: '\u2925',
          hkswarow: '\u2926',
          hoarr: '\u21FF',
          homtht: '\u223B',
          hookleftarrow: '\u21A9',
          hookrightarrow: '\u21AA',
          hopf: '\u{1D559}',
          Hopf: '\u210D',
          horbar: '\u2015',
          HorizontalLine: '\u2500',
          hscr: '\u{1D4BD}',
          Hscr: '\u210B',
          hslash: '\u210F',
          Hstrok: '\u0126',
          hstrok: '\u0127',
          HumpDownHump: '\u224E',
          HumpEqual: '\u224F',
          hybull: '\u2043',
          hyphen: '\u2010',
          Iacute: '\xCD',
          iacute: '\xED',
          ic: '\u2063',
          Icirc: '\xCE',
          icirc: '\xEE',
          Icy: '\u0418',
          icy: '\u0438',
          Idot: '\u0130',
          IEcy: '\u0415',
          iecy: '\u0435',
          iexcl: '\xA1',
          iff: '\u21D4',
          ifr: '\u{1D526}',
          Ifr: '\u2111',
          Igrave: '\xCC',
          igrave: '\xEC',
          ii: '\u2148',
          iiiint: '\u2A0C',
          iiint: '\u222D',
          iinfin: '\u29DC',
          iiota: '\u2129',
          IJlig: '\u0132',
          ijlig: '\u0133',
          Imacr: '\u012A',
          imacr: '\u012B',
          image: '\u2111',
          ImaginaryI: '\u2148',
          imagline: '\u2110',
          imagpart: '\u2111',
          imath: '\u0131',
          Im: '\u2111',
          imof: '\u22B7',
          imped: '\u01B5',
          Implies: '\u21D2',
          incare: '\u2105',
          in: '\u2208',
          infin: '\u221E',
          infintie: '\u29DD',
          inodot: '\u0131',
          intcal: '\u22BA',
          int: '\u222B',
          Int: '\u222C',
          integers: '\u2124',
          Integral: '\u222B',
          intercal: '\u22BA',
          Intersection: '\u22C2',
          intlarhk: '\u2A17',
          intprod: '\u2A3C',
          InvisibleComma: '\u2063',
          InvisibleTimes: '\u2062',
          IOcy: '\u0401',
          iocy: '\u0451',
          Iogon: '\u012E',
          iogon: '\u012F',
          Iopf: '\u{1D540}',
          iopf: '\u{1D55A}',
          Iota: '\u0399',
          iota: '\u03B9',
          iprod: '\u2A3C',
          iquest: '\xBF',
          iscr: '\u{1D4BE}',
          Iscr: '\u2110',
          isin: '\u2208',
          isindot: '\u22F5',
          isinE: '\u22F9',
          isins: '\u22F4',
          isinsv: '\u22F3',
          isinv: '\u2208',
          it: '\u2062',
          Itilde: '\u0128',
          itilde: '\u0129',
          Iukcy: '\u0406',
          iukcy: '\u0456',
          Iuml: '\xCF',
          iuml: '\xEF',
          Jcirc: '\u0134',
          jcirc: '\u0135',
          Jcy: '\u0419',
          jcy: '\u0439',
          Jfr: '\u{1D50D}',
          jfr: '\u{1D527}',
          jmath: '\u0237',
          Jopf: '\u{1D541}',
          jopf: '\u{1D55B}',
          Jscr: '\u{1D4A5}',
          jscr: '\u{1D4BF}',
          Jsercy: '\u0408',
          jsercy: '\u0458',
          Jukcy: '\u0404',
          jukcy: '\u0454',
          Kappa: '\u039A',
          kappa: '\u03BA',
          kappav: '\u03F0',
          Kcedil: '\u0136',
          kcedil: '\u0137',
          Kcy: '\u041A',
          kcy: '\u043A',
          Kfr: '\u{1D50E}',
          kfr: '\u{1D528}',
          kgreen: '\u0138',
          KHcy: '\u0425',
          khcy: '\u0445',
          KJcy: '\u040C',
          kjcy: '\u045C',
          Kopf: '\u{1D542}',
          kopf: '\u{1D55C}',
          Kscr: '\u{1D4A6}',
          kscr: '\u{1D4C0}',
          lAarr: '\u21DA',
          Lacute: '\u0139',
          lacute: '\u013A',
          laemptyv: '\u29B4',
          lagran: '\u2112',
          Lambda: '\u039B',
          lambda: '\u03BB',
          lang: '\u27E8',
          Lang: '\u27EA',
          langd: '\u2991',
          langle: '\u27E8',
          lap: '\u2A85',
          Laplacetrf: '\u2112',
          laquo: '\xAB',
          larrb: '\u21E4',
          larrbfs: '\u291F',
          larr: '\u2190',
          Larr: '\u219E',
          lArr: '\u21D0',
          larrfs: '\u291D',
          larrhk: '\u21A9',
          larrlp: '\u21AB',
          larrpl: '\u2939',
          larrsim: '\u2973',
          larrtl: '\u21A2',
          latail: '\u2919',
          lAtail: '\u291B',
          lat: '\u2AAB',
          late: '\u2AAD',
          lates: '\u2AAD\uFE00',
          lbarr: '\u290C',
          lBarr: '\u290E',
          lbbrk: '\u2772',
          lbrace: '{',
          lbrack: '[',
          lbrke: '\u298B',
          lbrksld: '\u298F',
          lbrkslu: '\u298D',
          Lcaron: '\u013D',
          lcaron: '\u013E',
          Lcedil: '\u013B',
          lcedil: '\u013C',
          lceil: '\u2308',
          lcub: '{',
          Lcy: '\u041B',
          lcy: '\u043B',
          ldca: '\u2936',
          ldquo: '\u201C',
          ldquor: '\u201E',
          ldrdhar: '\u2967',
          ldrushar: '\u294B',
          ldsh: '\u21B2',
          le: '\u2264',
          lE: '\u2266',
          LeftAngleBracket: '\u27E8',
          LeftArrowBar: '\u21E4',
          leftarrow: '\u2190',
          LeftArrow: '\u2190',
          Leftarrow: '\u21D0',
          LeftArrowRightArrow: '\u21C6',
          leftarrowtail: '\u21A2',
          LeftCeiling: '\u2308',
          LeftDoubleBracket: '\u27E6',
          LeftDownTeeVector: '\u2961',
          LeftDownVectorBar: '\u2959',
          LeftDownVector: '\u21C3',
          LeftFloor: '\u230A',
          leftharpoondown: '\u21BD',
          leftharpoonup: '\u21BC',
          leftleftarrows: '\u21C7',
          leftrightarrow: '\u2194',
          LeftRightArrow: '\u2194',
          Leftrightarrow: '\u21D4',
          leftrightarrows: '\u21C6',
          leftrightharpoons: '\u21CB',
          leftrightsquigarrow: '\u21AD',
          LeftRightVector: '\u294E',
          LeftTeeArrow: '\u21A4',
          LeftTee: '\u22A3',
          LeftTeeVector: '\u295A',
          leftthreetimes: '\u22CB',
          LeftTriangleBar: '\u29CF',
          LeftTriangle: '\u22B2',
          LeftTriangleEqual: '\u22B4',
          LeftUpDownVector: '\u2951',
          LeftUpTeeVector: '\u2960',
          LeftUpVectorBar: '\u2958',
          LeftUpVector: '\u21BF',
          LeftVectorBar: '\u2952',
          LeftVector: '\u21BC',
          lEg: '\u2A8B',
          leg: '\u22DA',
          leq: '\u2264',
          leqq: '\u2266',
          leqslant: '\u2A7D',
          lescc: '\u2AA8',
          les: '\u2A7D',
          lesdot: '\u2A7F',
          lesdoto: '\u2A81',
          lesdotor: '\u2A83',
          lesg: '\u22DA\uFE00',
          lesges: '\u2A93',
          lessapprox: '\u2A85',
          lessdot: '\u22D6',
          lesseqgtr: '\u22DA',
          lesseqqgtr: '\u2A8B',
          LessEqualGreater: '\u22DA',
          LessFullEqual: '\u2266',
          LessGreater: '\u2276',
          lessgtr: '\u2276',
          LessLess: '\u2AA1',
          lesssim: '\u2272',
          LessSlantEqual: '\u2A7D',
          LessTilde: '\u2272',
          lfisht: '\u297C',
          lfloor: '\u230A',
          Lfr: '\u{1D50F}',
          lfr: '\u{1D529}',
          lg: '\u2276',
          lgE: '\u2A91',
          lHar: '\u2962',
          lhard: '\u21BD',
          lharu: '\u21BC',
          lharul: '\u296A',
          lhblk: '\u2584',
          LJcy: '\u0409',
          ljcy: '\u0459',
          llarr: '\u21C7',
          ll: '\u226A',
          Ll: '\u22D8',
          llcorner: '\u231E',
          Lleftarrow: '\u21DA',
          llhard: '\u296B',
          lltri: '\u25FA',
          Lmidot: '\u013F',
          lmidot: '\u0140',
          lmoustache: '\u23B0',
          lmoust: '\u23B0',
          lnap: '\u2A89',
          lnapprox: '\u2A89',
          lne: '\u2A87',
          lnE: '\u2268',
          lneq: '\u2A87',
          lneqq: '\u2268',
          lnsim: '\u22E6',
          loang: '\u27EC',
          loarr: '\u21FD',
          lobrk: '\u27E6',
          longleftarrow: '\u27F5',
          LongLeftArrow: '\u27F5',
          Longleftarrow: '\u27F8',
          longleftrightarrow: '\u27F7',
          LongLeftRightArrow: '\u27F7',
          Longleftrightarrow: '\u27FA',
          longmapsto: '\u27FC',
          longrightarrow: '\u27F6',
          LongRightArrow: '\u27F6',
          Longrightarrow: '\u27F9',
          looparrowleft: '\u21AB',
          looparrowright: '\u21AC',
          lopar: '\u2985',
          Lopf: '\u{1D543}',
          lopf: '\u{1D55D}',
          loplus: '\u2A2D',
          lotimes: '\u2A34',
          lowast: '\u2217',
          lowbar: '_',
          LowerLeftArrow: '\u2199',
          LowerRightArrow: '\u2198',
          loz: '\u25CA',
          lozenge: '\u25CA',
          lozf: '\u29EB',
          lpar: '(',
          lparlt: '\u2993',
          lrarr: '\u21C6',
          lrcorner: '\u231F',
          lrhar: '\u21CB',
          lrhard: '\u296D',
          lrm: '\u200E',
          lrtri: '\u22BF',
          lsaquo: '\u2039',
          lscr: '\u{1D4C1}',
          Lscr: '\u2112',
          lsh: '\u21B0',
          Lsh: '\u21B0',
          lsim: '\u2272',
          lsime: '\u2A8D',
          lsimg: '\u2A8F',
          lsqb: '[',
          lsquo: '\u2018',
          lsquor: '\u201A',
          Lstrok: '\u0141',
          lstrok: '\u0142',
          ltcc: '\u2AA6',
          ltcir: '\u2A79',
          lt: '<',
          LT: '<',
          Lt: '\u226A',
          ltdot: '\u22D6',
          lthree: '\u22CB',
          ltimes: '\u22C9',
          ltlarr: '\u2976',
          ltquest: '\u2A7B',
          ltri: '\u25C3',
          ltrie: '\u22B4',
          ltrif: '\u25C2',
          ltrPar: '\u2996',
          lurdshar: '\u294A',
          luruhar: '\u2966',
          lvertneqq: '\u2268\uFE00',
          lvnE: '\u2268\uFE00',
          macr: '\xAF',
          male: '\u2642',
          malt: '\u2720',
          maltese: '\u2720',
          Map: '\u2905',
          map: '\u21A6',
          mapsto: '\u21A6',
          mapstodown: '\u21A7',
          mapstoleft: '\u21A4',
          mapstoup: '\u21A5',
          marker: '\u25AE',
          mcomma: '\u2A29',
          Mcy: '\u041C',
          mcy: '\u043C',
          mdash: '\u2014',
          mDDot: '\u223A',
          measuredangle: '\u2221',
          MediumSpace: '\u205F',
          Mellintrf: '\u2133',
          Mfr: '\u{1D510}',
          mfr: '\u{1D52A}',
          mho: '\u2127',
          micro: '\xB5',
          midast: '*',
          midcir: '\u2AF0',
          mid: '\u2223',
          middot: '\xB7',
          minusb: '\u229F',
          minus: '\u2212',
          minusd: '\u2238',
          minusdu: '\u2A2A',
          MinusPlus: '\u2213',
          mlcp: '\u2ADB',
          mldr: '\u2026',
          mnplus: '\u2213',
          models: '\u22A7',
          Mopf: '\u{1D544}',
          mopf: '\u{1D55E}',
          mp: '\u2213',
          mscr: '\u{1D4C2}',
          Mscr: '\u2133',
          mstpos: '\u223E',
          Mu: '\u039C',
          mu: '\u03BC',
          multimap: '\u22B8',
          mumap: '\u22B8',
          nabla: '\u2207',
          Nacute: '\u0143',
          nacute: '\u0144',
          nang: '\u2220\u20D2',
          nap: '\u2249',
          napE: '\u2A70\u0338',
          napid: '\u224B\u0338',
          napos: '\u0149',
          napprox: '\u2249',
          natural: '\u266E',
          naturals: '\u2115',
          natur: '\u266E',
          nbsp: '\xA0',
          nbump: '\u224E\u0338',
          nbumpe: '\u224F\u0338',
          ncap: '\u2A43',
          Ncaron: '\u0147',
          ncaron: '\u0148',
          Ncedil: '\u0145',
          ncedil: '\u0146',
          ncong: '\u2247',
          ncongdot: '\u2A6D\u0338',
          ncup: '\u2A42',
          Ncy: '\u041D',
          ncy: '\u043D',
          ndash: '\u2013',
          nearhk: '\u2924',
          nearr: '\u2197',
          neArr: '\u21D7',
          nearrow: '\u2197',
          ne: '\u2260',
          nedot: '\u2250\u0338',
          NegativeMediumSpace: '\u200B',
          NegativeThickSpace: '\u200B',
          NegativeThinSpace: '\u200B',
          NegativeVeryThinSpace: '\u200B',
          nequiv: '\u2262',
          nesear: '\u2928',
          nesim: '\u2242\u0338',
          NestedGreaterGreater: '\u226B',
          NestedLessLess: '\u226A',
          NewLine: `
`,
          nexist: '\u2204',
          nexists: '\u2204',
          Nfr: '\u{1D511}',
          nfr: '\u{1D52B}',
          ngE: '\u2267\u0338',
          nge: '\u2271',
          ngeq: '\u2271',
          ngeqq: '\u2267\u0338',
          ngeqslant: '\u2A7E\u0338',
          nges: '\u2A7E\u0338',
          nGg: '\u22D9\u0338',
          ngsim: '\u2275',
          nGt: '\u226B\u20D2',
          ngt: '\u226F',
          ngtr: '\u226F',
          nGtv: '\u226B\u0338',
          nharr: '\u21AE',
          nhArr: '\u21CE',
          nhpar: '\u2AF2',
          ni: '\u220B',
          nis: '\u22FC',
          nisd: '\u22FA',
          niv: '\u220B',
          NJcy: '\u040A',
          njcy: '\u045A',
          nlarr: '\u219A',
          nlArr: '\u21CD',
          nldr: '\u2025',
          nlE: '\u2266\u0338',
          nle: '\u2270',
          nleftarrow: '\u219A',
          nLeftarrow: '\u21CD',
          nleftrightarrow: '\u21AE',
          nLeftrightarrow: '\u21CE',
          nleq: '\u2270',
          nleqq: '\u2266\u0338',
          nleqslant: '\u2A7D\u0338',
          nles: '\u2A7D\u0338',
          nless: '\u226E',
          nLl: '\u22D8\u0338',
          nlsim: '\u2274',
          nLt: '\u226A\u20D2',
          nlt: '\u226E',
          nltri: '\u22EA',
          nltrie: '\u22EC',
          nLtv: '\u226A\u0338',
          nmid: '\u2224',
          NoBreak: '\u2060',
          NonBreakingSpace: '\xA0',
          nopf: '\u{1D55F}',
          Nopf: '\u2115',
          Not: '\u2AEC',
          not: '\xAC',
          NotCongruent: '\u2262',
          NotCupCap: '\u226D',
          NotDoubleVerticalBar: '\u2226',
          NotElement: '\u2209',
          NotEqual: '\u2260',
          NotEqualTilde: '\u2242\u0338',
          NotExists: '\u2204',
          NotGreater: '\u226F',
          NotGreaterEqual: '\u2271',
          NotGreaterFullEqual: '\u2267\u0338',
          NotGreaterGreater: '\u226B\u0338',
          NotGreaterLess: '\u2279',
          NotGreaterSlantEqual: '\u2A7E\u0338',
          NotGreaterTilde: '\u2275',
          NotHumpDownHump: '\u224E\u0338',
          NotHumpEqual: '\u224F\u0338',
          notin: '\u2209',
          notindot: '\u22F5\u0338',
          notinE: '\u22F9\u0338',
          notinva: '\u2209',
          notinvb: '\u22F7',
          notinvc: '\u22F6',
          NotLeftTriangleBar: '\u29CF\u0338',
          NotLeftTriangle: '\u22EA',
          NotLeftTriangleEqual: '\u22EC',
          NotLess: '\u226E',
          NotLessEqual: '\u2270',
          NotLessGreater: '\u2278',
          NotLessLess: '\u226A\u0338',
          NotLessSlantEqual: '\u2A7D\u0338',
          NotLessTilde: '\u2274',
          NotNestedGreaterGreater: '\u2AA2\u0338',
          NotNestedLessLess: '\u2AA1\u0338',
          notni: '\u220C',
          notniva: '\u220C',
          notnivb: '\u22FE',
          notnivc: '\u22FD',
          NotPrecedes: '\u2280',
          NotPrecedesEqual: '\u2AAF\u0338',
          NotPrecedesSlantEqual: '\u22E0',
          NotReverseElement: '\u220C',
          NotRightTriangleBar: '\u29D0\u0338',
          NotRightTriangle: '\u22EB',
          NotRightTriangleEqual: '\u22ED',
          NotSquareSubset: '\u228F\u0338',
          NotSquareSubsetEqual: '\u22E2',
          NotSquareSuperset: '\u2290\u0338',
          NotSquareSupersetEqual: '\u22E3',
          NotSubset: '\u2282\u20D2',
          NotSubsetEqual: '\u2288',
          NotSucceeds: '\u2281',
          NotSucceedsEqual: '\u2AB0\u0338',
          NotSucceedsSlantEqual: '\u22E1',
          NotSucceedsTilde: '\u227F\u0338',
          NotSuperset: '\u2283\u20D2',
          NotSupersetEqual: '\u2289',
          NotTilde: '\u2241',
          NotTildeEqual: '\u2244',
          NotTildeFullEqual: '\u2247',
          NotTildeTilde: '\u2249',
          NotVerticalBar: '\u2224',
          nparallel: '\u2226',
          npar: '\u2226',
          nparsl: '\u2AFD\u20E5',
          npart: '\u2202\u0338',
          npolint: '\u2A14',
          npr: '\u2280',
          nprcue: '\u22E0',
          nprec: '\u2280',
          npreceq: '\u2AAF\u0338',
          npre: '\u2AAF\u0338',
          nrarrc: '\u2933\u0338',
          nrarr: '\u219B',
          nrArr: '\u21CF',
          nrarrw: '\u219D\u0338',
          nrightarrow: '\u219B',
          nRightarrow: '\u21CF',
          nrtri: '\u22EB',
          nrtrie: '\u22ED',
          nsc: '\u2281',
          nsccue: '\u22E1',
          nsce: '\u2AB0\u0338',
          Nscr: '\u{1D4A9}',
          nscr: '\u{1D4C3}',
          nshortmid: '\u2224',
          nshortparallel: '\u2226',
          nsim: '\u2241',
          nsime: '\u2244',
          nsimeq: '\u2244',
          nsmid: '\u2224',
          nspar: '\u2226',
          nsqsube: '\u22E2',
          nsqsupe: '\u22E3',
          nsub: '\u2284',
          nsubE: '\u2AC5\u0338',
          nsube: '\u2288',
          nsubset: '\u2282\u20D2',
          nsubseteq: '\u2288',
          nsubseteqq: '\u2AC5\u0338',
          nsucc: '\u2281',
          nsucceq: '\u2AB0\u0338',
          nsup: '\u2285',
          nsupE: '\u2AC6\u0338',
          nsupe: '\u2289',
          nsupset: '\u2283\u20D2',
          nsupseteq: '\u2289',
          nsupseteqq: '\u2AC6\u0338',
          ntgl: '\u2279',
          Ntilde: '\xD1',
          ntilde: '\xF1',
          ntlg: '\u2278',
          ntriangleleft: '\u22EA',
          ntrianglelefteq: '\u22EC',
          ntriangleright: '\u22EB',
          ntrianglerighteq: '\u22ED',
          Nu: '\u039D',
          nu: '\u03BD',
          num: '#',
          numero: '\u2116',
          numsp: '\u2007',
          nvap: '\u224D\u20D2',
          nvdash: '\u22AC',
          nvDash: '\u22AD',
          nVdash: '\u22AE',
          nVDash: '\u22AF',
          nvge: '\u2265\u20D2',
          nvgt: '>\u20D2',
          nvHarr: '\u2904',
          nvinfin: '\u29DE',
          nvlArr: '\u2902',
          nvle: '\u2264\u20D2',
          nvlt: '<\u20D2',
          nvltrie: '\u22B4\u20D2',
          nvrArr: '\u2903',
          nvrtrie: '\u22B5\u20D2',
          nvsim: '\u223C\u20D2',
          nwarhk: '\u2923',
          nwarr: '\u2196',
          nwArr: '\u21D6',
          nwarrow: '\u2196',
          nwnear: '\u2927',
          Oacute: '\xD3',
          oacute: '\xF3',
          oast: '\u229B',
          Ocirc: '\xD4',
          ocirc: '\xF4',
          ocir: '\u229A',
          Ocy: '\u041E',
          ocy: '\u043E',
          odash: '\u229D',
          Odblac: '\u0150',
          odblac: '\u0151',
          odiv: '\u2A38',
          odot: '\u2299',
          odsold: '\u29BC',
          OElig: '\u0152',
          oelig: '\u0153',
          ofcir: '\u29BF',
          Ofr: '\u{1D512}',
          ofr: '\u{1D52C}',
          ogon: '\u02DB',
          Ograve: '\xD2',
          ograve: '\xF2',
          ogt: '\u29C1',
          ohbar: '\u29B5',
          ohm: '\u03A9',
          oint: '\u222E',
          olarr: '\u21BA',
          olcir: '\u29BE',
          olcross: '\u29BB',
          oline: '\u203E',
          olt: '\u29C0',
          Omacr: '\u014C',
          omacr: '\u014D',
          Omega: '\u03A9',
          omega: '\u03C9',
          Omicron: '\u039F',
          omicron: '\u03BF',
          omid: '\u29B6',
          ominus: '\u2296',
          Oopf: '\u{1D546}',
          oopf: '\u{1D560}',
          opar: '\u29B7',
          OpenCurlyDoubleQuote: '\u201C',
          OpenCurlyQuote: '\u2018',
          operp: '\u29B9',
          oplus: '\u2295',
          orarr: '\u21BB',
          Or: '\u2A54',
          or: '\u2228',
          ord: '\u2A5D',
          order: '\u2134',
          orderof: '\u2134',
          ordf: '\xAA',
          ordm: '\xBA',
          origof: '\u22B6',
          oror: '\u2A56',
          orslope: '\u2A57',
          orv: '\u2A5B',
          oS: '\u24C8',
          Oscr: '\u{1D4AA}',
          oscr: '\u2134',
          Oslash: '\xD8',
          oslash: '\xF8',
          osol: '\u2298',
          Otilde: '\xD5',
          otilde: '\xF5',
          otimesas: '\u2A36',
          Otimes: '\u2A37',
          otimes: '\u2297',
          Ouml: '\xD6',
          ouml: '\xF6',
          ovbar: '\u233D',
          OverBar: '\u203E',
          OverBrace: '\u23DE',
          OverBracket: '\u23B4',
          OverParenthesis: '\u23DC',
          para: '\xB6',
          parallel: '\u2225',
          par: '\u2225',
          parsim: '\u2AF3',
          parsl: '\u2AFD',
          part: '\u2202',
          PartialD: '\u2202',
          Pcy: '\u041F',
          pcy: '\u043F',
          percnt: '%',
          period: '.',
          permil: '\u2030',
          perp: '\u22A5',
          pertenk: '\u2031',
          Pfr: '\u{1D513}',
          pfr: '\u{1D52D}',
          Phi: '\u03A6',
          phi: '\u03C6',
          phiv: '\u03D5',
          phmmat: '\u2133',
          phone: '\u260E',
          Pi: '\u03A0',
          pi: '\u03C0',
          pitchfork: '\u22D4',
          piv: '\u03D6',
          planck: '\u210F',
          planckh: '\u210E',
          plankv: '\u210F',
          plusacir: '\u2A23',
          plusb: '\u229E',
          pluscir: '\u2A22',
          plus: '+',
          plusdo: '\u2214',
          plusdu: '\u2A25',
          pluse: '\u2A72',
          PlusMinus: '\xB1',
          plusmn: '\xB1',
          plussim: '\u2A26',
          plustwo: '\u2A27',
          pm: '\xB1',
          Poincareplane: '\u210C',
          pointint: '\u2A15',
          popf: '\u{1D561}',
          Popf: '\u2119',
          pound: '\xA3',
          prap: '\u2AB7',
          Pr: '\u2ABB',
          pr: '\u227A',
          prcue: '\u227C',
          precapprox: '\u2AB7',
          prec: '\u227A',
          preccurlyeq: '\u227C',
          Precedes: '\u227A',
          PrecedesEqual: '\u2AAF',
          PrecedesSlantEqual: '\u227C',
          PrecedesTilde: '\u227E',
          preceq: '\u2AAF',
          precnapprox: '\u2AB9',
          precneqq: '\u2AB5',
          precnsim: '\u22E8',
          pre: '\u2AAF',
          prE: '\u2AB3',
          precsim: '\u227E',
          prime: '\u2032',
          Prime: '\u2033',
          primes: '\u2119',
          prnap: '\u2AB9',
          prnE: '\u2AB5',
          prnsim: '\u22E8',
          prod: '\u220F',
          Product: '\u220F',
          profalar: '\u232E',
          profline: '\u2312',
          profsurf: '\u2313',
          prop: '\u221D',
          Proportional: '\u221D',
          Proportion: '\u2237',
          propto: '\u221D',
          prsim: '\u227E',
          prurel: '\u22B0',
          Pscr: '\u{1D4AB}',
          pscr: '\u{1D4C5}',
          Psi: '\u03A8',
          psi: '\u03C8',
          puncsp: '\u2008',
          Qfr: '\u{1D514}',
          qfr: '\u{1D52E}',
          qint: '\u2A0C',
          qopf: '\u{1D562}',
          Qopf: '\u211A',
          qprime: '\u2057',
          Qscr: '\u{1D4AC}',
          qscr: '\u{1D4C6}',
          quaternions: '\u210D',
          quatint: '\u2A16',
          quest: '?',
          questeq: '\u225F',
          quot: '"',
          QUOT: '"',
          rAarr: '\u21DB',
          race: '\u223D\u0331',
          Racute: '\u0154',
          racute: '\u0155',
          radic: '\u221A',
          raemptyv: '\u29B3',
          rang: '\u27E9',
          Rang: '\u27EB',
          rangd: '\u2992',
          range: '\u29A5',
          rangle: '\u27E9',
          raquo: '\xBB',
          rarrap: '\u2975',
          rarrb: '\u21E5',
          rarrbfs: '\u2920',
          rarrc: '\u2933',
          rarr: '\u2192',
          Rarr: '\u21A0',
          rArr: '\u21D2',
          rarrfs: '\u291E',
          rarrhk: '\u21AA',
          rarrlp: '\u21AC',
          rarrpl: '\u2945',
          rarrsim: '\u2974',
          Rarrtl: '\u2916',
          rarrtl: '\u21A3',
          rarrw: '\u219D',
          ratail: '\u291A',
          rAtail: '\u291C',
          ratio: '\u2236',
          rationals: '\u211A',
          rbarr: '\u290D',
          rBarr: '\u290F',
          RBarr: '\u2910',
          rbbrk: '\u2773',
          rbrace: '}',
          rbrack: ']',
          rbrke: '\u298C',
          rbrksld: '\u298E',
          rbrkslu: '\u2990',
          Rcaron: '\u0158',
          rcaron: '\u0159',
          Rcedil: '\u0156',
          rcedil: '\u0157',
          rceil: '\u2309',
          rcub: '}',
          Rcy: '\u0420',
          rcy: '\u0440',
          rdca: '\u2937',
          rdldhar: '\u2969',
          rdquo: '\u201D',
          rdquor: '\u201D',
          rdsh: '\u21B3',
          real: '\u211C',
          realine: '\u211B',
          realpart: '\u211C',
          reals: '\u211D',
          Re: '\u211C',
          rect: '\u25AD',
          reg: '\xAE',
          REG: '\xAE',
          ReverseElement: '\u220B',
          ReverseEquilibrium: '\u21CB',
          ReverseUpEquilibrium: '\u296F',
          rfisht: '\u297D',
          rfloor: '\u230B',
          rfr: '\u{1D52F}',
          Rfr: '\u211C',
          rHar: '\u2964',
          rhard: '\u21C1',
          rharu: '\u21C0',
          rharul: '\u296C',
          Rho: '\u03A1',
          rho: '\u03C1',
          rhov: '\u03F1',
          RightAngleBracket: '\u27E9',
          RightArrowBar: '\u21E5',
          rightarrow: '\u2192',
          RightArrow: '\u2192',
          Rightarrow: '\u21D2',
          RightArrowLeftArrow: '\u21C4',
          rightarrowtail: '\u21A3',
          RightCeiling: '\u2309',
          RightDoubleBracket: '\u27E7',
          RightDownTeeVector: '\u295D',
          RightDownVectorBar: '\u2955',
          RightDownVector: '\u21C2',
          RightFloor: '\u230B',
          rightharpoondown: '\u21C1',
          rightharpoonup: '\u21C0',
          rightleftarrows: '\u21C4',
          rightleftharpoons: '\u21CC',
          rightrightarrows: '\u21C9',
          rightsquigarrow: '\u219D',
          RightTeeArrow: '\u21A6',
          RightTee: '\u22A2',
          RightTeeVector: '\u295B',
          rightthreetimes: '\u22CC',
          RightTriangleBar: '\u29D0',
          RightTriangle: '\u22B3',
          RightTriangleEqual: '\u22B5',
          RightUpDownVector: '\u294F',
          RightUpTeeVector: '\u295C',
          RightUpVectorBar: '\u2954',
          RightUpVector: '\u21BE',
          RightVectorBar: '\u2953',
          RightVector: '\u21C0',
          ring: '\u02DA',
          risingdotseq: '\u2253',
          rlarr: '\u21C4',
          rlhar: '\u21CC',
          rlm: '\u200F',
          rmoustache: '\u23B1',
          rmoust: '\u23B1',
          rnmid: '\u2AEE',
          roang: '\u27ED',
          roarr: '\u21FE',
          robrk: '\u27E7',
          ropar: '\u2986',
          ropf: '\u{1D563}',
          Ropf: '\u211D',
          roplus: '\u2A2E',
          rotimes: '\u2A35',
          RoundImplies: '\u2970',
          rpar: ')',
          rpargt: '\u2994',
          rppolint: '\u2A12',
          rrarr: '\u21C9',
          Rrightarrow: '\u21DB',
          rsaquo: '\u203A',
          rscr: '\u{1D4C7}',
          Rscr: '\u211B',
          rsh: '\u21B1',
          Rsh: '\u21B1',
          rsqb: ']',
          rsquo: '\u2019',
          rsquor: '\u2019',
          rthree: '\u22CC',
          rtimes: '\u22CA',
          rtri: '\u25B9',
          rtrie: '\u22B5',
          rtrif: '\u25B8',
          rtriltri: '\u29CE',
          RuleDelayed: '\u29F4',
          ruluhar: '\u2968',
          rx: '\u211E',
          Sacute: '\u015A',
          sacute: '\u015B',
          sbquo: '\u201A',
          scap: '\u2AB8',
          Scaron: '\u0160',
          scaron: '\u0161',
          Sc: '\u2ABC',
          sc: '\u227B',
          sccue: '\u227D',
          sce: '\u2AB0',
          scE: '\u2AB4',
          Scedil: '\u015E',
          scedil: '\u015F',
          Scirc: '\u015C',
          scirc: '\u015D',
          scnap: '\u2ABA',
          scnE: '\u2AB6',
          scnsim: '\u22E9',
          scpolint: '\u2A13',
          scsim: '\u227F',
          Scy: '\u0421',
          scy: '\u0441',
          sdotb: '\u22A1',
          sdot: '\u22C5',
          sdote: '\u2A66',
          searhk: '\u2925',
          searr: '\u2198',
          seArr: '\u21D8',
          searrow: '\u2198',
          sect: '\xA7',
          semi: ';',
          seswar: '\u2929',
          setminus: '\u2216',
          setmn: '\u2216',
          sext: '\u2736',
          Sfr: '\u{1D516}',
          sfr: '\u{1D530}',
          sfrown: '\u2322',
          sharp: '\u266F',
          SHCHcy: '\u0429',
          shchcy: '\u0449',
          SHcy: '\u0428',
          shcy: '\u0448',
          ShortDownArrow: '\u2193',
          ShortLeftArrow: '\u2190',
          shortmid: '\u2223',
          shortparallel: '\u2225',
          ShortRightArrow: '\u2192',
          ShortUpArrow: '\u2191',
          shy: '\xAD',
          Sigma: '\u03A3',
          sigma: '\u03C3',
          sigmaf: '\u03C2',
          sigmav: '\u03C2',
          sim: '\u223C',
          simdot: '\u2A6A',
          sime: '\u2243',
          simeq: '\u2243',
          simg: '\u2A9E',
          simgE: '\u2AA0',
          siml: '\u2A9D',
          simlE: '\u2A9F',
          simne: '\u2246',
          simplus: '\u2A24',
          simrarr: '\u2972',
          slarr: '\u2190',
          SmallCircle: '\u2218',
          smallsetminus: '\u2216',
          smashp: '\u2A33',
          smeparsl: '\u29E4',
          smid: '\u2223',
          smile: '\u2323',
          smt: '\u2AAA',
          smte: '\u2AAC',
          smtes: '\u2AAC\uFE00',
          SOFTcy: '\u042C',
          softcy: '\u044C',
          solbar: '\u233F',
          solb: '\u29C4',
          sol: '/',
          Sopf: '\u{1D54A}',
          sopf: '\u{1D564}',
          spades: '\u2660',
          spadesuit: '\u2660',
          spar: '\u2225',
          sqcap: '\u2293',
          sqcaps: '\u2293\uFE00',
          sqcup: '\u2294',
          sqcups: '\u2294\uFE00',
          Sqrt: '\u221A',
          sqsub: '\u228F',
          sqsube: '\u2291',
          sqsubset: '\u228F',
          sqsubseteq: '\u2291',
          sqsup: '\u2290',
          sqsupe: '\u2292',
          sqsupset: '\u2290',
          sqsupseteq: '\u2292',
          square: '\u25A1',
          Square: '\u25A1',
          SquareIntersection: '\u2293',
          SquareSubset: '\u228F',
          SquareSubsetEqual: '\u2291',
          SquareSuperset: '\u2290',
          SquareSupersetEqual: '\u2292',
          SquareUnion: '\u2294',
          squarf: '\u25AA',
          squ: '\u25A1',
          squf: '\u25AA',
          srarr: '\u2192',
          Sscr: '\u{1D4AE}',
          sscr: '\u{1D4C8}',
          ssetmn: '\u2216',
          ssmile: '\u2323',
          sstarf: '\u22C6',
          Star: '\u22C6',
          star: '\u2606',
          starf: '\u2605',
          straightepsilon: '\u03F5',
          straightphi: '\u03D5',
          strns: '\xAF',
          sub: '\u2282',
          Sub: '\u22D0',
          subdot: '\u2ABD',
          subE: '\u2AC5',
          sube: '\u2286',
          subedot: '\u2AC3',
          submult: '\u2AC1',
          subnE: '\u2ACB',
          subne: '\u228A',
          subplus: '\u2ABF',
          subrarr: '\u2979',
          subset: '\u2282',
          Subset: '\u22D0',
          subseteq: '\u2286',
          subseteqq: '\u2AC5',
          SubsetEqual: '\u2286',
          subsetneq: '\u228A',
          subsetneqq: '\u2ACB',
          subsim: '\u2AC7',
          subsub: '\u2AD5',
          subsup: '\u2AD3',
          succapprox: '\u2AB8',
          succ: '\u227B',
          succcurlyeq: '\u227D',
          Succeeds: '\u227B',
          SucceedsEqual: '\u2AB0',
          SucceedsSlantEqual: '\u227D',
          SucceedsTilde: '\u227F',
          succeq: '\u2AB0',
          succnapprox: '\u2ABA',
          succneqq: '\u2AB6',
          succnsim: '\u22E9',
          succsim: '\u227F',
          SuchThat: '\u220B',
          sum: '\u2211',
          Sum: '\u2211',
          sung: '\u266A',
          sup1: '\xB9',
          sup2: '\xB2',
          sup3: '\xB3',
          sup: '\u2283',
          Sup: '\u22D1',
          supdot: '\u2ABE',
          supdsub: '\u2AD8',
          supE: '\u2AC6',
          supe: '\u2287',
          supedot: '\u2AC4',
          Superset: '\u2283',
          SupersetEqual: '\u2287',
          suphsol: '\u27C9',
          suphsub: '\u2AD7',
          suplarr: '\u297B',
          supmult: '\u2AC2',
          supnE: '\u2ACC',
          supne: '\u228B',
          supplus: '\u2AC0',
          supset: '\u2283',
          Supset: '\u22D1',
          supseteq: '\u2287',
          supseteqq: '\u2AC6',
          supsetneq: '\u228B',
          supsetneqq: '\u2ACC',
          supsim: '\u2AC8',
          supsub: '\u2AD4',
          supsup: '\u2AD6',
          swarhk: '\u2926',
          swarr: '\u2199',
          swArr: '\u21D9',
          swarrow: '\u2199',
          swnwar: '\u292A',
          szlig: '\xDF',
          Tab: '	',
          target: '\u2316',
          Tau: '\u03A4',
          tau: '\u03C4',
          tbrk: '\u23B4',
          Tcaron: '\u0164',
          tcaron: '\u0165',
          Tcedil: '\u0162',
          tcedil: '\u0163',
          Tcy: '\u0422',
          tcy: '\u0442',
          tdot: '\u20DB',
          telrec: '\u2315',
          Tfr: '\u{1D517}',
          tfr: '\u{1D531}',
          there4: '\u2234',
          therefore: '\u2234',
          Therefore: '\u2234',
          Theta: '\u0398',
          theta: '\u03B8',
          thetasym: '\u03D1',
          thetav: '\u03D1',
          thickapprox: '\u2248',
          thicksim: '\u223C',
          ThickSpace: '\u205F\u200A',
          ThinSpace: '\u2009',
          thinsp: '\u2009',
          thkap: '\u2248',
          thksim: '\u223C',
          THORN: '\xDE',
          thorn: '\xFE',
          tilde: '\u02DC',
          Tilde: '\u223C',
          TildeEqual: '\u2243',
          TildeFullEqual: '\u2245',
          TildeTilde: '\u2248',
          timesbar: '\u2A31',
          timesb: '\u22A0',
          times: '\xD7',
          timesd: '\u2A30',
          tint: '\u222D',
          toea: '\u2928',
          topbot: '\u2336',
          topcir: '\u2AF1',
          top: '\u22A4',
          Topf: '\u{1D54B}',
          topf: '\u{1D565}',
          topfork: '\u2ADA',
          tosa: '\u2929',
          tprime: '\u2034',
          trade: '\u2122',
          TRADE: '\u2122',
          triangle: '\u25B5',
          triangledown: '\u25BF',
          triangleleft: '\u25C3',
          trianglelefteq: '\u22B4',
          triangleq: '\u225C',
          triangleright: '\u25B9',
          trianglerighteq: '\u22B5',
          tridot: '\u25EC',
          trie: '\u225C',
          triminus: '\u2A3A',
          TripleDot: '\u20DB',
          triplus: '\u2A39',
          trisb: '\u29CD',
          tritime: '\u2A3B',
          trpezium: '\u23E2',
          Tscr: '\u{1D4AF}',
          tscr: '\u{1D4C9}',
          TScy: '\u0426',
          tscy: '\u0446',
          TSHcy: '\u040B',
          tshcy: '\u045B',
          Tstrok: '\u0166',
          tstrok: '\u0167',
          twixt: '\u226C',
          twoheadleftarrow: '\u219E',
          twoheadrightarrow: '\u21A0',
          Uacute: '\xDA',
          uacute: '\xFA',
          uarr: '\u2191',
          Uarr: '\u219F',
          uArr: '\u21D1',
          Uarrocir: '\u2949',
          Ubrcy: '\u040E',
          ubrcy: '\u045E',
          Ubreve: '\u016C',
          ubreve: '\u016D',
          Ucirc: '\xDB',
          ucirc: '\xFB',
          Ucy: '\u0423',
          ucy: '\u0443',
          udarr: '\u21C5',
          Udblac: '\u0170',
          udblac: '\u0171',
          udhar: '\u296E',
          ufisht: '\u297E',
          Ufr: '\u{1D518}',
          ufr: '\u{1D532}',
          Ugrave: '\xD9',
          ugrave: '\xF9',
          uHar: '\u2963',
          uharl: '\u21BF',
          uharr: '\u21BE',
          uhblk: '\u2580',
          ulcorn: '\u231C',
          ulcorner: '\u231C',
          ulcrop: '\u230F',
          ultri: '\u25F8',
          Umacr: '\u016A',
          umacr: '\u016B',
          uml: '\xA8',
          UnderBar: '_',
          UnderBrace: '\u23DF',
          UnderBracket: '\u23B5',
          UnderParenthesis: '\u23DD',
          Union: '\u22C3',
          UnionPlus: '\u228E',
          Uogon: '\u0172',
          uogon: '\u0173',
          Uopf: '\u{1D54C}',
          uopf: '\u{1D566}',
          UpArrowBar: '\u2912',
          uparrow: '\u2191',
          UpArrow: '\u2191',
          Uparrow: '\u21D1',
          UpArrowDownArrow: '\u21C5',
          updownarrow: '\u2195',
          UpDownArrow: '\u2195',
          Updownarrow: '\u21D5',
          UpEquilibrium: '\u296E',
          upharpoonleft: '\u21BF',
          upharpoonright: '\u21BE',
          uplus: '\u228E',
          UpperLeftArrow: '\u2196',
          UpperRightArrow: '\u2197',
          upsi: '\u03C5',
          Upsi: '\u03D2',
          upsih: '\u03D2',
          Upsilon: '\u03A5',
          upsilon: '\u03C5',
          UpTeeArrow: '\u21A5',
          UpTee: '\u22A5',
          upuparrows: '\u21C8',
          urcorn: '\u231D',
          urcorner: '\u231D',
          urcrop: '\u230E',
          Uring: '\u016E',
          uring: '\u016F',
          urtri: '\u25F9',
          Uscr: '\u{1D4B0}',
          uscr: '\u{1D4CA}',
          utdot: '\u22F0',
          Utilde: '\u0168',
          utilde: '\u0169',
          utri: '\u25B5',
          utrif: '\u25B4',
          uuarr: '\u21C8',
          Uuml: '\xDC',
          uuml: '\xFC',
          uwangle: '\u29A7',
          vangrt: '\u299C',
          varepsilon: '\u03F5',
          varkappa: '\u03F0',
          varnothing: '\u2205',
          varphi: '\u03D5',
          varpi: '\u03D6',
          varpropto: '\u221D',
          varr: '\u2195',
          vArr: '\u21D5',
          varrho: '\u03F1',
          varsigma: '\u03C2',
          varsubsetneq: '\u228A\uFE00',
          varsubsetneqq: '\u2ACB\uFE00',
          varsupsetneq: '\u228B\uFE00',
          varsupsetneqq: '\u2ACC\uFE00',
          vartheta: '\u03D1',
          vartriangleleft: '\u22B2',
          vartriangleright: '\u22B3',
          vBar: '\u2AE8',
          Vbar: '\u2AEB',
          vBarv: '\u2AE9',
          Vcy: '\u0412',
          vcy: '\u0432',
          vdash: '\u22A2',
          vDash: '\u22A8',
          Vdash: '\u22A9',
          VDash: '\u22AB',
          Vdashl: '\u2AE6',
          veebar: '\u22BB',
          vee: '\u2228',
          Vee: '\u22C1',
          veeeq: '\u225A',
          vellip: '\u22EE',
          verbar: '|',
          Verbar: '\u2016',
          vert: '|',
          Vert: '\u2016',
          VerticalBar: '\u2223',
          VerticalLine: '|',
          VerticalSeparator: '\u2758',
          VerticalTilde: '\u2240',
          VeryThinSpace: '\u200A',
          Vfr: '\u{1D519}',
          vfr: '\u{1D533}',
          vltri: '\u22B2',
          vnsub: '\u2282\u20D2',
          vnsup: '\u2283\u20D2',
          Vopf: '\u{1D54D}',
          vopf: '\u{1D567}',
          vprop: '\u221D',
          vrtri: '\u22B3',
          Vscr: '\u{1D4B1}',
          vscr: '\u{1D4CB}',
          vsubnE: '\u2ACB\uFE00',
          vsubne: '\u228A\uFE00',
          vsupnE: '\u2ACC\uFE00',
          vsupne: '\u228B\uFE00',
          Vvdash: '\u22AA',
          vzigzag: '\u299A',
          Wcirc: '\u0174',
          wcirc: '\u0175',
          wedbar: '\u2A5F',
          wedge: '\u2227',
          Wedge: '\u22C0',
          wedgeq: '\u2259',
          weierp: '\u2118',
          Wfr: '\u{1D51A}',
          wfr: '\u{1D534}',
          Wopf: '\u{1D54E}',
          wopf: '\u{1D568}',
          wp: '\u2118',
          wr: '\u2240',
          wreath: '\u2240',
          Wscr: '\u{1D4B2}',
          wscr: '\u{1D4CC}',
          xcap: '\u22C2',
          xcirc: '\u25EF',
          xcup: '\u22C3',
          xdtri: '\u25BD',
          Xfr: '\u{1D51B}',
          xfr: '\u{1D535}',
          xharr: '\u27F7',
          xhArr: '\u27FA',
          Xi: '\u039E',
          xi: '\u03BE',
          xlarr: '\u27F5',
          xlArr: '\u27F8',
          xmap: '\u27FC',
          xnis: '\u22FB',
          xodot: '\u2A00',
          Xopf: '\u{1D54F}',
          xopf: '\u{1D569}',
          xoplus: '\u2A01',
          xotime: '\u2A02',
          xrarr: '\u27F6',
          xrArr: '\u27F9',
          Xscr: '\u{1D4B3}',
          xscr: '\u{1D4CD}',
          xsqcup: '\u2A06',
          xuplus: '\u2A04',
          xutri: '\u25B3',
          xvee: '\u22C1',
          xwedge: '\u22C0',
          Yacute: '\xDD',
          yacute: '\xFD',
          YAcy: '\u042F',
          yacy: '\u044F',
          Ycirc: '\u0176',
          ycirc: '\u0177',
          Ycy: '\u042B',
          ycy: '\u044B',
          yen: '\xA5',
          Yfr: '\u{1D51C}',
          yfr: '\u{1D536}',
          YIcy: '\u0407',
          yicy: '\u0457',
          Yopf: '\u{1D550}',
          yopf: '\u{1D56A}',
          Yscr: '\u{1D4B4}',
          yscr: '\u{1D4CE}',
          YUcy: '\u042E',
          yucy: '\u044E',
          yuml: '\xFF',
          Yuml: '\u0178',
          Zacute: '\u0179',
          zacute: '\u017A',
          Zcaron: '\u017D',
          zcaron: '\u017E',
          Zcy: '\u0417',
          zcy: '\u0437',
          Zdot: '\u017B',
          zdot: '\u017C',
          zeetrf: '\u2128',
          ZeroWidthSpace: '\u200B',
          Zeta: '\u0396',
          zeta: '\u03B6',
          zfr: '\u{1D537}',
          Zfr: '\u2128',
          ZHcy: '\u0416',
          zhcy: '\u0436',
          zigrarr: '\u21DD',
          zopf: '\u{1D56B}',
          Zopf: '\u2124',
          Zscr: '\u{1D4B5}',
          zscr: '\u{1D4CF}',
          zwj: '\u200D',
          zwnj: '\u200C',
        }
      },
    }),
    S_ = Ke({
      '../../node_modules/entities/lib/maps/legacy.json'(e, t) {
        t.exports = {
          Aacute: '\xC1',
          aacute: '\xE1',
          Acirc: '\xC2',
          acirc: '\xE2',
          acute: '\xB4',
          AElig: '\xC6',
          aelig: '\xE6',
          Agrave: '\xC0',
          agrave: '\xE0',
          amp: '&',
          AMP: '&',
          Aring: '\xC5',
          aring: '\xE5',
          Atilde: '\xC3',
          atilde: '\xE3',
          Auml: '\xC4',
          auml: '\xE4',
          brvbar: '\xA6',
          Ccedil: '\xC7',
          ccedil: '\xE7',
          cedil: '\xB8',
          cent: '\xA2',
          copy: '\xA9',
          COPY: '\xA9',
          curren: '\xA4',
          deg: '\xB0',
          divide: '\xF7',
          Eacute: '\xC9',
          eacute: '\xE9',
          Ecirc: '\xCA',
          ecirc: '\xEA',
          Egrave: '\xC8',
          egrave: '\xE8',
          ETH: '\xD0',
          eth: '\xF0',
          Euml: '\xCB',
          euml: '\xEB',
          frac12: '\xBD',
          frac14: '\xBC',
          frac34: '\xBE',
          gt: '>',
          GT: '>',
          Iacute: '\xCD',
          iacute: '\xED',
          Icirc: '\xCE',
          icirc: '\xEE',
          iexcl: '\xA1',
          Igrave: '\xCC',
          igrave: '\xEC',
          iquest: '\xBF',
          Iuml: '\xCF',
          iuml: '\xEF',
          laquo: '\xAB',
          lt: '<',
          LT: '<',
          macr: '\xAF',
          micro: '\xB5',
          middot: '\xB7',
          nbsp: '\xA0',
          not: '\xAC',
          Ntilde: '\xD1',
          ntilde: '\xF1',
          Oacute: '\xD3',
          oacute: '\xF3',
          Ocirc: '\xD4',
          ocirc: '\xF4',
          Ograve: '\xD2',
          ograve: '\xF2',
          ordf: '\xAA',
          ordm: '\xBA',
          Oslash: '\xD8',
          oslash: '\xF8',
          Otilde: '\xD5',
          otilde: '\xF5',
          Ouml: '\xD6',
          ouml: '\xF6',
          para: '\xB6',
          plusmn: '\xB1',
          pound: '\xA3',
          quot: '"',
          QUOT: '"',
          raquo: '\xBB',
          reg: '\xAE',
          REG: '\xAE',
          sect: '\xA7',
          shy: '\xAD',
          sup1: '\xB9',
          sup2: '\xB2',
          sup3: '\xB3',
          szlig: '\xDF',
          THORN: '\xDE',
          thorn: '\xFE',
          times: '\xD7',
          Uacute: '\xDA',
          uacute: '\xFA',
          Ucirc: '\xDB',
          ucirc: '\xFB',
          Ugrave: '\xD9',
          ugrave: '\xF9',
          uml: '\xA8',
          Uuml: '\xDC',
          uuml: '\xFC',
          Yacute: '\xDD',
          yacute: '\xFD',
          yen: '\xA5',
          yuml: '\xFF',
        }
      },
    }),
    Om = Ke({
      '../../node_modules/entities/lib/maps/xml.json'(e, t) {
        t.exports = { amp: '&', apos: "'", gt: '>', lt: '<', quot: '"' }
      },
    }),
    F_ = Ke({
      '../../node_modules/entities/lib/maps/decode.json'(e, t) {
        t.exports = {
          0: 65533,
          128: 8364,
          130: 8218,
          131: 402,
          132: 8222,
          133: 8230,
          134: 8224,
          135: 8225,
          136: 710,
          137: 8240,
          138: 352,
          139: 8249,
          140: 338,
          142: 381,
          145: 8216,
          146: 8217,
          147: 8220,
          148: 8221,
          149: 8226,
          150: 8211,
          151: 8212,
          152: 732,
          153: 8482,
          154: 353,
          155: 8250,
          156: 339,
          158: 382,
          159: 376,
        }
      },
    }),
    w_ = Ke({
      '../../node_modules/entities/lib/decode_codepoint.js'(e) {
        var t =
          (e && e.__importDefault) ||
          function (o) {
            return o && o.__esModule ? o : { default: o }
          }
        Object.defineProperty(e, '__esModule', { value: !0 })
        var r = t(F_()),
          n =
            String.fromCodePoint ||
            function (o) {
              var i = ''
              return (
                o > 65535 &&
                  ((o -= 65536),
                  (i += String.fromCharCode(((o >>> 10) & 1023) | 55296)),
                  (o = 56320 | (o & 1023))),
                (i += String.fromCharCode(o)),
                i
              )
            }
        function a(o) {
          return (o >= 55296 && o <= 57343) || o > 1114111
            ? '\uFFFD'
            : (o in r.default && (o = r.default[o]), n(o))
        }
        e.default = a
      },
    }),
    Bm = Ke({
      '../../node_modules/entities/lib/decode.js'(e) {
        var t =
          (e && e.__importDefault) ||
          function (y) {
            return y && y.__esModule ? y : { default: y }
          }
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.decodeHTML = e.decodeHTMLStrict = e.decodeXML = void 0)
        var r = t(_m()),
          n = t(S_()),
          a = t(Om()),
          o = t(w_()),
          i = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g
        ;(e.decodeXML = u(a.default)), (e.decodeHTMLStrict = u(r.default))
        function u(y) {
          var E = p(y)
          return function (m) {
            return String(m).replace(i, E)
          }
        }
        var s = function (y, E) {
          return y < E ? 1 : -1
        }
        e.decodeHTML = (function () {
          for (
            var y = Object.keys(n.default).sort(s),
              E = Object.keys(r.default).sort(s),
              m = 0,
              g = 0;
            m < E.length;
            m++
          )
            y[g] === E[m] ? ((E[m] += ';?'), g++) : (E[m] += ';')
          var A = new RegExp('&(?:' + E.join('|') + '|#[xX][\\da-fA-F]+;?|#\\d+;?)', 'g'),
            b = p(r.default)
          function x(F) {
            return F.substr(-1) !== ';' && (F += ';'), b(F)
          }
          return function (F) {
            return String(F).replace(A, x)
          }
        })()
        function p(y) {
          return function (E) {
            if (E.charAt(1) === '#') {
              var m = E.charAt(2)
              return m === 'X' || m === 'x'
                ? o.default(parseInt(E.substr(3), 16))
                : o.default(parseInt(E.substr(2), 10))
            }
            return y[E.slice(1, -1)] || E
          }
        }
      },
    }),
    Tm = Ke({
      '../../node_modules/entities/lib/encode.js'(e) {
        var t =
          (e && e.__importDefault) ||
          function (B) {
            return B && B.__esModule ? B : { default: B }
          }
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.escapeUTF8 = e.escape = e.encodeNonAsciiHTML = e.encodeHTML = e.encodeXML = void 0)
        var r = t(Om()),
          n = s(r.default),
          a = p(n)
        e.encodeXML = F(n)
        var o = t(_m()),
          i = s(o.default),
          u = p(i)
        ;(e.encodeHTML = g(i, u)), (e.encodeNonAsciiHTML = F(i))
        function s(B) {
          return Object.keys(B)
            .sort()
            .reduce(function (I, M) {
              return (I[B[M]] = '&' + M + ';'), I
            }, {})
        }
        function p(B) {
          for (var I = [], M = [], w = 0, N = Object.keys(B); w < N.length; w++) {
            var k = N[w]
            k.length === 1 ? I.push('\\' + k) : M.push(k)
          }
          I.sort()
          for (var U = 0; U < I.length - 1; U++) {
            for (var V = U; V < I.length - 1 && I[V].charCodeAt(1) + 1 === I[V + 1].charCodeAt(1); )
              V += 1
            var H = 1 + V - U
            H < 3 || I.splice(U, H, I[U] + '-' + I[V])
          }
          return M.unshift('[' + I.join('') + ']'), new RegExp(M.join('|'), 'g')
        }
        var y =
            /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
          E =
            String.prototype.codePointAt != null
              ? function (B) {
                  return B.codePointAt(0)
                }
              : function (B) {
                  return (B.charCodeAt(0) - 55296) * 1024 + B.charCodeAt(1) - 56320 + 65536
                }
        function m(B) {
          return '&#x' + (B.length > 1 ? E(B) : B.charCodeAt(0)).toString(16).toUpperCase() + ';'
        }
        function g(B, I) {
          return function (M) {
            return M.replace(I, function (w) {
              return B[w]
            }).replace(y, m)
          }
        }
        var A = new RegExp(a.source + '|' + y.source, 'g')
        function b(B) {
          return B.replace(A, m)
        }
        e.escape = b
        function x(B) {
          return B.replace(a, m)
        }
        e.escapeUTF8 = x
        function F(B) {
          return function (I) {
            return I.replace(A, function (M) {
              return B[M] || m(M)
            })
          }
        }
      },
    }),
    B_ = Ke({
      '../../node_modules/entities/lib/index.js'(e) {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.decodeXMLStrict =
            e.decodeHTML5Strict =
            e.decodeHTML4Strict =
            e.decodeHTML5 =
            e.decodeHTML4 =
            e.decodeHTMLStrict =
            e.decodeHTML =
            e.decodeXML =
            e.encodeHTML5 =
            e.encodeHTML4 =
            e.escapeUTF8 =
            e.escape =
            e.encodeNonAsciiHTML =
            e.encodeHTML =
            e.encodeXML =
            e.encode =
            e.decodeStrict =
            e.decode =
              void 0)
        var t = Bm(),
          r = Tm()
        function n(s, p) {
          return (!p || p <= 0 ? t.decodeXML : t.decodeHTML)(s)
        }
        e.decode = n
        function a(s, p) {
          return (!p || p <= 0 ? t.decodeXML : t.decodeHTMLStrict)(s)
        }
        e.decodeStrict = a
        function o(s, p) {
          return (!p || p <= 0 ? r.encodeXML : r.encodeHTML)(s)
        }
        e.encode = o
        var i = Tm()
        Object.defineProperty(e, 'encodeXML', {
          enumerable: !0,
          get: function () {
            return i.encodeXML
          },
        }),
          Object.defineProperty(e, 'encodeHTML', {
            enumerable: !0,
            get: function () {
              return i.encodeHTML
            },
          }),
          Object.defineProperty(e, 'encodeNonAsciiHTML', {
            enumerable: !0,
            get: function () {
              return i.encodeNonAsciiHTML
            },
          }),
          Object.defineProperty(e, 'escape', {
            enumerable: !0,
            get: function () {
              return i.escape
            },
          }),
          Object.defineProperty(e, 'escapeUTF8', {
            enumerable: !0,
            get: function () {
              return i.escapeUTF8
            },
          }),
          Object.defineProperty(e, 'encodeHTML4', {
            enumerable: !0,
            get: function () {
              return i.encodeHTML
            },
          }),
          Object.defineProperty(e, 'encodeHTML5', {
            enumerable: !0,
            get: function () {
              return i.encodeHTML
            },
          })
        var u = Bm()
        Object.defineProperty(e, 'decodeXML', {
          enumerable: !0,
          get: function () {
            return u.decodeXML
          },
        }),
          Object.defineProperty(e, 'decodeHTML', {
            enumerable: !0,
            get: function () {
              return u.decodeHTML
            },
          }),
          Object.defineProperty(e, 'decodeHTMLStrict', {
            enumerable: !0,
            get: function () {
              return u.decodeHTMLStrict
            },
          }),
          Object.defineProperty(e, 'decodeHTML4', {
            enumerable: !0,
            get: function () {
              return u.decodeHTML
            },
          }),
          Object.defineProperty(e, 'decodeHTML5', {
            enumerable: !0,
            get: function () {
              return u.decodeHTML
            },
          }),
          Object.defineProperty(e, 'decodeHTML4Strict', {
            enumerable: !0,
            get: function () {
              return u.decodeHTMLStrict
            },
          }),
          Object.defineProperty(e, 'decodeHTML5Strict', {
            enumerable: !0,
            get: function () {
              return u.decodeHTMLStrict
            },
          }),
          Object.defineProperty(e, 'decodeXMLStrict', {
            enumerable: !0,
            get: function () {
              return u.decodeXML
            },
          })
      },
    }),
    T_ = Ke({
      '../../node_modules/ansi-to-html/lib/ansi_to_html.js'(e, t) {
        function r(R, _) {
          if (!(R instanceof _)) throw new TypeError('Cannot call a class as a function')
        }
        function n(R, _) {
          for (var j = 0; j < _.length; j++) {
            var G = _[j]
            ;(G.enumerable = G.enumerable || !1),
              (G.configurable = !0),
              'value' in G && (G.writable = !0),
              Object.defineProperty(R, G.key, G)
          }
        }
        function a(R, _, j) {
          return _ && n(R.prototype, _), j && n(R, j), R
        }
        function o(R) {
          if (typeof Symbol > 'u' || R[Symbol.iterator] == null) {
            if (Array.isArray(R) || (R = i(R))) {
              var _ = 0,
                j = function () {}
              return {
                s: j,
                n: function () {
                  return _ >= R.length ? { done: !0 } : { done: !1, value: R[_++] }
                },
                e: function (se) {
                  throw se
                },
                f: j,
              }
            }
            throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          var G,
            J = !0,
            K = !1,
            Z
          return {
            s: function () {
              G = R[Symbol.iterator]()
            },
            n: function () {
              var se = G.next()
              return (J = se.done), se
            },
            e: function (se) {
              ;(K = !0), (Z = se)
            },
            f: function () {
              try {
                !J && G.return != null && G.return()
              } finally {
                if (K) throw Z
              }
            },
          }
        }
        function i(R, _) {
          if (R) {
            if (typeof R == 'string') return u(R, _)
            var j = Object.prototype.toString.call(R).slice(8, -1)
            if (
              (j === 'Object' && R.constructor && (j = R.constructor.name),
              j === 'Map' || j === 'Set')
            )
              return Array.from(j)
            if (j === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))
              return u(R, _)
          }
        }
        function u(R, _) {
          ;(_ == null || _ > R.length) && (_ = R.length)
          for (var j = 0, G = new Array(_); j < _; j++) G[j] = R[j]
          return G
        }
        var s = B_(),
          p = { fg: '#FFF', bg: '#000', newline: !1, escapeXML: !1, stream: !1, colors: y() }
        function y() {
          var R = {
            0: '#000',
            1: '#A00',
            2: '#0A0',
            3: '#A50',
            4: '#00A',
            5: '#A0A',
            6: '#0AA',
            7: '#AAA',
            8: '#555',
            9: '#F55',
            10: '#5F5',
            11: '#FF5',
            12: '#55F',
            13: '#F5F',
            14: '#5FF',
            15: '#FFF',
          }
          return (
            B(0, 5).forEach(function (_) {
              B(0, 5).forEach(function (j) {
                B(0, 5).forEach(function (G) {
                  return E(_, j, G, R)
                })
              })
            }),
            B(0, 23).forEach(function (_) {
              var j = _ + 232,
                G = m(_ * 10 + 8)
              R[j] = '#' + G + G + G
            }),
            R
          )
        }
        function E(R, _, j, G) {
          var J = 16 + R * 36 + _ * 6 + j,
            K = R > 0 ? R * 40 + 55 : 0,
            Z = _ > 0 ? _ * 40 + 55 : 0,
            se = j > 0 ? j * 40 + 55 : 0
          G[J] = g([K, Z, se])
        }
        function m(R) {
          for (var _ = R.toString(16); _.length < 2; ) _ = '0' + _
          return _
        }
        function g(R) {
          var _ = [],
            j = o(R),
            G
          try {
            for (j.s(); !(G = j.n()).done; ) {
              var J = G.value
              _.push(m(J))
            }
          } catch (K) {
            j.e(K)
          } finally {
            j.f()
          }
          return '#' + _.join('')
        }
        function A(R, _, j, G) {
          var J
          return (
            _ === 'text'
              ? (J = w(j, G))
              : _ === 'display'
              ? (J = x(R, j, G))
              : _ === 'xterm256'
              ? (J = U(R, G.colors[j]))
              : _ === 'rgb' && (J = b(R, j)),
            J
          )
        }
        function b(R, _) {
          _ = _.substring(2).slice(0, -1)
          var j = +_.substr(0, 2),
            G = _.substring(5).split(';'),
            J = G.map(function (K) {
              return ('0' + Number(K).toString(16)).substr(-2)
            }).join('')
          return k(R, (j === 38 ? 'color:#' : 'background-color:#') + J)
        }
        function x(R, _, j) {
          _ = parseInt(_, 10)
          var G = {
              '-1': function () {
                return '<br/>'
              },
              0: function () {
                return R.length && F(R)
              },
              1: function () {
                return N(R, 'b')
              },
              3: function () {
                return N(R, 'i')
              },
              4: function () {
                return N(R, 'u')
              },
              8: function () {
                return k(R, 'display:none')
              },
              9: function () {
                return N(R, 'strike')
              },
              22: function () {
                return k(R, 'font-weight:normal;text-decoration:none;font-style:normal')
              },
              23: function () {
                return H(R, 'i')
              },
              24: function () {
                return H(R, 'u')
              },
              39: function () {
                return U(R, j.fg)
              },
              49: function () {
                return V(R, j.bg)
              },
              53: function () {
                return k(R, 'text-decoration:overline')
              },
            },
            J
          return (
            G[_]
              ? (J = G[_]())
              : 4 < _ && _ < 7
              ? (J = N(R, 'blink'))
              : 29 < _ && _ < 38
              ? (J = U(R, j.colors[_ - 30]))
              : 39 < _ && _ < 48
              ? (J = V(R, j.colors[_ - 40]))
              : 89 < _ && _ < 98
              ? (J = U(R, j.colors[8 + (_ - 90)]))
              : 99 < _ && _ < 108 && (J = V(R, j.colors[8 + (_ - 100)])),
            J
          )
        }
        function F(R) {
          var _ = R.slice(0)
          return (
            (R.length = 0),
            _.reverse()
              .map(function (j) {
                return '</' + j + '>'
              })
              .join('')
          )
        }
        function B(R, _) {
          for (var j = [], G = R; G <= _; G++) j.push(G)
          return j
        }
        function I(R) {
          return function (_) {
            return (R === null || _.category !== R) && R !== 'all'
          }
        }
        function M(R) {
          R = parseInt(R, 10)
          var _ = null
          return (
            R === 0
              ? (_ = 'all')
              : R === 1
              ? (_ = 'bold')
              : 2 < R && R < 5
              ? (_ = 'underline')
              : 4 < R && R < 7
              ? (_ = 'blink')
              : R === 8
              ? (_ = 'hide')
              : R === 9
              ? (_ = 'strike')
              : (29 < R && R < 38) || R === 39 || (89 < R && R < 98)
              ? (_ = 'foreground-color')
              : ((39 < R && R < 48) || R === 49 || (99 < R && R < 108)) && (_ = 'background-color'),
            _
          )
        }
        function w(R, _) {
          return _.escapeXML ? s.encodeXML(R) : R
        }
        function N(R, _, j) {
          return (
            j || (j = ''), R.push(_), '<'.concat(_).concat(j ? ' style="'.concat(j, '"') : '', '>')
          )
        }
        function k(R, _) {
          return N(R, 'span', _)
        }
        function U(R, _) {
          return N(R, 'span', 'color:' + _)
        }
        function V(R, _) {
          return N(R, 'span', 'background-color:' + _)
        }
        function H(R, _) {
          var j
          if ((R.slice(-1)[0] === _ && (j = R.pop()), j)) return '</' + _ + '>'
        }
        function oe(R, _, j) {
          var G = !1,
            J = 3
          function K() {
            return ''
          }
          function Z(ie, Ae) {
            return j('xterm256', Ae), ''
          }
          function se(ie) {
            return _.newline ? j('display', -1) : j('text', ie), ''
          }
          function ke(ie, Ae) {
            ;(G = !0), Ae.trim().length === 0 && (Ae = '0'), (Ae = Ae.trimRight(';').split(';'))
            var Zr = o(Ae),
              vu
            try {
              for (Zr.s(); !(vu = Zr.n()).done; ) {
                var o2 = vu.value
                j('display', o2)
              }
            } catch (i2) {
              Zr.e(i2)
            } finally {
              Zr.f()
            }
            return ''
          }
          function Ne(ie) {
            return j('text', ie), ''
          }
          function Q(ie) {
            return j('rgb', ie), ''
          }
          var He = [
            { pattern: /^\x08+/, sub: K },
            { pattern: /^\x1b\[[012]?K/, sub: K },
            { pattern: /^\x1b\[\(B/, sub: K },
            { pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: Q },
            { pattern: /^\x1b\[38;5;(\d+)m/, sub: Z },
            { pattern: /^\n/, sub: se },
            { pattern: /^\r+\n/, sub: se },
            { pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: ke },
            { pattern: /^\x1b\[\d?J/, sub: K },
            { pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: K },
            { pattern: /^\x1b\[?[\d;]{0,3}/, sub: K },
            { pattern: /^(([^\x1b\x08\r\n])+)/, sub: Ne },
          ]
          function T(ie, Ae) {
            ;(Ae > J && G) || ((G = !1), (R = R.replace(ie.pattern, ie.sub)))
          }
          var P = [],
            L = R,
            O = L.length
          e: for (; O > 0; ) {
            for (var $ = 0, z = 0, pe = He.length; z < pe; $ = ++z) {
              var ae = He[$]
              if ((T(ae, $), R.length !== O)) {
                O = R.length
                continue e
              }
            }
            if (R.length === O) break
            P.push(0), (O = R.length)
          }
          return P
        }
        function X(R, _, j) {
          return (
            _ !== 'text' &&
              ((R = R.filter(I(M(j)))), R.push({ token: _, data: j, category: M(j) })),
            R
          )
        }
        var Y = (function () {
          function R(_) {
            r(this, R),
              (_ = _ || {}),
              _.colors && (_.colors = Object.assign({}, p.colors, _.colors)),
              (this.options = Object.assign({}, p, _)),
              (this.stack = []),
              (this.stickyStack = [])
          }
          return (
            a(R, [
              {
                key: 'toHtml',
                value: function (_) {
                  var j = this
                  _ = typeof _ == 'string' ? [_] : _
                  var G = this.stack,
                    J = this.options,
                    K = []
                  return (
                    this.stickyStack.forEach(function (Z) {
                      var se = A(G, Z.token, Z.data, J)
                      se && K.push(se)
                    }),
                    oe(_.join(''), J, function (Z, se) {
                      var ke = A(G, Z, se, J)
                      ke && K.push(ke), J.stream && (j.stickyStack = X(j.stickyStack, Z, se))
                    }),
                    G.length && K.push(F(G)),
                    K.join('')
                  )
                },
              },
            ]),
            R
          )
        })()
        t.exports = Y
      },
    }),
    xZ = new Error('prepareAborted'),
    { AbortController: SZ } = globalThis
  var { fetch: FZ } = ue
  var { history: wZ, document: BZ } = ue
  var __ = s0(T_()),
    { document: TZ } = ue
  var O_ = (e => (
    (e.MAIN = 'MAIN'),
    (e.NOPREVIEW = 'NOPREVIEW'),
    (e.PREPARING_STORY = 'PREPARING_STORY'),
    (e.PREPARING_DOCS = 'PREPARING_DOCS'),
    (e.ERROR = 'ERROR'),
    e
  ))(O_ || {})
  var _Z = new __.default({ escapeXML: !0 })
  var { document: OZ } = ue
  var { FEATURES: UZ } = ue
  l()
  c()
  d()
  var Iy = fe(Ln(), 1)
  l()
  c()
  d()
  var M_ = fe(Ln(), 1),
    q_ = fe($m(), 1)
  var j_ = (e => (
    (e.JAVASCRIPT = 'JavaScript'),
    (e.FLOW = 'Flow'),
    (e.TYPESCRIPT = 'TypeScript'),
    (e.UNKNOWN = 'Unknown'),
    e
  ))(j_ || {})
  var na = e => {
    if (!e) return ''
    if (typeof e == 'string') return e
    throw new Error(`Description: expected string, got: ${JSON.stringify(e)}`)
  }
  var Hm = 'storybook/docs',
    Dte = `${Hm}/panel`
  var $_ = `${Hm}/snippet-rendered`,
    Vr = (e => ((e.AUTO = 'auto'), (e.CODE = 'code'), (e.DYNAMIC = 'dynamic'), e))(Vr || {})
  l()
  c()
  d()
  l()
  c()
  d()
  var H_ = Object.create,
    Um = Object.defineProperty,
    U_ = Object.getOwnPropertyDescriptor,
    zm = Object.getOwnPropertyNames,
    z_ = Object.getPrototypeOf,
    G_ = Object.prototype.hasOwnProperty,
    Me = (e, t) =>
      function () {
        return t || (0, e[zm(e)[0]])((t = { exports: {} }).exports, t), t.exports
      },
    W_ = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let a of zm(t))
          !G_.call(e, a) &&
            a !== r &&
            Um(e, a, { get: () => t[a], enumerable: !(n = U_(t, a)) || n.enumerable })
      return e
    },
    aa = (e, t, r) => (
      (r = e != null ? H_(z_(e)) : {}),
      W_(t || !e || !e.__esModule ? Um(r, 'default', { value: e, enumerable: !0 }) : r, e)
    ),
    V_ = [
      'bubbles',
      'cancelBubble',
      'cancelable',
      'composed',
      'currentTarget',
      'defaultPrevented',
      'eventPhase',
      'isTrusted',
      'returnValue',
      'srcElement',
      'target',
      'timeStamp',
      'type',
    ],
    K_ = ['detail']
  function Gm(e) {
    let t = V_.filter(r => e[r] !== void 0).reduce((r, n) => ({ ...r, [n]: e[n] }), {})
    return (
      e instanceof CustomEvent &&
        K_.filter(r => e[r] !== void 0).forEach(r => {
          t[r] = e[r]
        }),
      t
    )
  }
  var ig = fe(Tn(), 1),
    Jm = Me({
      'node_modules/has-symbols/shams.js'(e, t) {
        'use strict'
        t.exports = function () {
          if (typeof Symbol != 'function' || typeof Object.getOwnPropertySymbols != 'function')
            return !1
          if (typeof Symbol.iterator == 'symbol') return !0
          var n = {},
            a = Symbol('test'),
            o = Object(a)
          if (
            typeof a == 'string' ||
            Object.prototype.toString.call(a) !== '[object Symbol]' ||
            Object.prototype.toString.call(o) !== '[object Symbol]'
          )
            return !1
          var i = 42
          n[a] = i
          for (a in n) return !1
          if (
            (typeof Object.keys == 'function' && Object.keys(n).length !== 0) ||
            (typeof Object.getOwnPropertyNames == 'function' &&
              Object.getOwnPropertyNames(n).length !== 0)
          )
            return !1
          var u = Object.getOwnPropertySymbols(n)
          if (u.length !== 1 || u[0] !== a || !Object.prototype.propertyIsEnumerable.call(n, a))
            return !1
          if (typeof Object.getOwnPropertyDescriptor == 'function') {
            var s = Object.getOwnPropertyDescriptor(n, a)
            if (s.value !== i || s.enumerable !== !0) return !1
          }
          return !0
        }
      },
    }),
    Qm = Me({
      'node_modules/has-symbols/index.js'(e, t) {
        'use strict'
        var r = typeof Symbol < 'u' && Symbol,
          n = Jm()
        t.exports = function () {
          return typeof r != 'function' ||
            typeof Symbol != 'function' ||
            typeof r('foo') != 'symbol' ||
            typeof Symbol('bar') != 'symbol'
            ? !1
            : n()
        }
      },
    }),
    Y_ = Me({
      'node_modules/function-bind/implementation.js'(e, t) {
        'use strict'
        var r = 'Function.prototype.bind called on incompatible ',
          n = Array.prototype.slice,
          a = Object.prototype.toString,
          o = '[object Function]'
        t.exports = function (u) {
          var s = this
          if (typeof s != 'function' || a.call(s) !== o) throw new TypeError(r + s)
          for (
            var p = n.call(arguments, 1),
              y,
              E = function () {
                if (this instanceof y) {
                  var x = s.apply(this, p.concat(n.call(arguments)))
                  return Object(x) === x ? x : this
                } else return s.apply(u, p.concat(n.call(arguments)))
              },
              m = Math.max(0, s.length - p.length),
              g = [],
              A = 0;
            A < m;
            A++
          )
            g.push('$' + A)
          if (
            ((y = Function(
              'binder',
              'return function (' + g.join(',') + '){ return binder.apply(this,arguments); }'
            )(E)),
            s.prototype)
          ) {
            var b = function () {}
            ;(b.prototype = s.prototype), (y.prototype = new b()), (b.prototype = null)
          }
          return y
        }
      },
    }),
    qi = Me({
      'node_modules/function-bind/index.js'(e, t) {
        'use strict'
        var r = Y_()
        t.exports = Function.prototype.bind || r
      },
    }),
    X_ = Me({
      'node_modules/has/src/index.js'(e, t) {
        'use strict'
        var r = qi()
        t.exports = r.call(Function.call, Object.prototype.hasOwnProperty)
      },
    }),
    Zm = Me({
      'node_modules/get-intrinsic/index.js'(e, t) {
        'use strict'
        var r,
          n = SyntaxError,
          a = Function,
          o = TypeError,
          i = function (X) {
            try {
              return a('"use strict"; return (' + X + ').constructor;')()
            } catch {}
          },
          u = Object.getOwnPropertyDescriptor
        if (u)
          try {
            u({}, '')
          } catch {
            u = null
          }
        var s = function () {
            throw new o()
          },
          p = u
            ? (function () {
                try {
                  return arguments.callee, s
                } catch {
                  try {
                    return u(arguments, 'callee').get
                  } catch {
                    return s
                  }
                }
              })()
            : s,
          y = Qm()(),
          E =
            Object.getPrototypeOf ||
            function (X) {
              return X.__proto__
            },
          m = {},
          g = typeof Uint8Array > 'u' ? r : E(Uint8Array),
          A = {
            '%AggregateError%': typeof AggregateError > 'u' ? r : AggregateError,
            '%Array%': Array,
            '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? r : ArrayBuffer,
            '%ArrayIteratorPrototype%': y ? E([][Symbol.iterator]()) : r,
            '%AsyncFromSyncIteratorPrototype%': r,
            '%AsyncFunction%': m,
            '%AsyncGenerator%': m,
            '%AsyncGeneratorFunction%': m,
            '%AsyncIteratorPrototype%': m,
            '%Atomics%': typeof Atomics > 'u' ? r : Atomics,
            '%BigInt%': typeof BigInt > 'u' ? r : BigInt,
            '%Boolean%': Boolean,
            '%DataView%': typeof DataView > 'u' ? r : DataView,
            '%Date%': Date,
            '%decodeURI%': decodeURI,
            '%decodeURIComponent%': decodeURIComponent,
            '%encodeURI%': encodeURI,
            '%encodeURIComponent%': encodeURIComponent,
            '%Error%': Error,
            '%eval%': eval,
            '%EvalError%': EvalError,
            '%Float32Array%': typeof Float32Array > 'u' ? r : Float32Array,
            '%Float64Array%': typeof Float64Array > 'u' ? r : Float64Array,
            '%FinalizationRegistry%': typeof FinalizationRegistry > 'u' ? r : FinalizationRegistry,
            '%Function%': a,
            '%GeneratorFunction%': m,
            '%Int8Array%': typeof Int8Array > 'u' ? r : Int8Array,
            '%Int16Array%': typeof Int16Array > 'u' ? r : Int16Array,
            '%Int32Array%': typeof Int32Array > 'u' ? r : Int32Array,
            '%isFinite%': isFinite,
            '%isNaN%': isNaN,
            '%IteratorPrototype%': y ? E(E([][Symbol.iterator]())) : r,
            '%JSON%': typeof JSON == 'object' ? JSON : r,
            '%Map%': typeof Map > 'u' ? r : Map,
            '%MapIteratorPrototype%': typeof Map > 'u' || !y ? r : E(new Map()[Symbol.iterator]()),
            '%Math%': Math,
            '%Number%': Number,
            '%Object%': Object,
            '%parseFloat%': parseFloat,
            '%parseInt%': parseInt,
            '%Promise%': typeof Promise > 'u' ? r : Promise,
            '%Proxy%': typeof Proxy > 'u' ? r : Proxy,
            '%RangeError%': RangeError,
            '%ReferenceError%': ReferenceError,
            '%Reflect%': typeof Reflect > 'u' ? r : Reflect,
            '%RegExp%': RegExp,
            '%Set%': typeof Set > 'u' ? r : Set,
            '%SetIteratorPrototype%': typeof Set > 'u' || !y ? r : E(new Set()[Symbol.iterator]()),
            '%SharedArrayBuffer%': typeof SharedArrayBuffer > 'u' ? r : SharedArrayBuffer,
            '%String%': String,
            '%StringIteratorPrototype%': y ? E(''[Symbol.iterator]()) : r,
            '%Symbol%': y ? Symbol : r,
            '%SyntaxError%': n,
            '%ThrowTypeError%': p,
            '%TypedArray%': g,
            '%TypeError%': o,
            '%Uint8Array%': typeof Uint8Array > 'u' ? r : Uint8Array,
            '%Uint8ClampedArray%': typeof Uint8ClampedArray > 'u' ? r : Uint8ClampedArray,
            '%Uint16Array%': typeof Uint16Array > 'u' ? r : Uint16Array,
            '%Uint32Array%': typeof Uint32Array > 'u' ? r : Uint32Array,
            '%URIError%': URIError,
            '%WeakMap%': typeof WeakMap > 'u' ? r : WeakMap,
            '%WeakRef%': typeof WeakRef > 'u' ? r : WeakRef,
            '%WeakSet%': typeof WeakSet > 'u' ? r : WeakSet,
          },
          b = function X(Y) {
            var R
            if (Y === '%AsyncFunction%') R = i('async function () {}')
            else if (Y === '%GeneratorFunction%') R = i('function* () {}')
            else if (Y === '%AsyncGeneratorFunction%') R = i('async function* () {}')
            else if (Y === '%AsyncGenerator%') {
              var _ = X('%AsyncGeneratorFunction%')
              _ && (R = _.prototype)
            } else if (Y === '%AsyncIteratorPrototype%') {
              var j = X('%AsyncGenerator%')
              j && (R = E(j.prototype))
            }
            return (A[Y] = R), R
          },
          x = {
            '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
            '%ArrayPrototype%': ['Array', 'prototype'],
            '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
            '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
            '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
            '%ArrayProto_values%': ['Array', 'prototype', 'values'],
            '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
            '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
            '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
            '%BooleanPrototype%': ['Boolean', 'prototype'],
            '%DataViewPrototype%': ['DataView', 'prototype'],
            '%DatePrototype%': ['Date', 'prototype'],
            '%ErrorPrototype%': ['Error', 'prototype'],
            '%EvalErrorPrototype%': ['EvalError', 'prototype'],
            '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
            '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
            '%FunctionPrototype%': ['Function', 'prototype'],
            '%Generator%': ['GeneratorFunction', 'prototype'],
            '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
            '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
            '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
            '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
            '%JSONParse%': ['JSON', 'parse'],
            '%JSONStringify%': ['JSON', 'stringify'],
            '%MapPrototype%': ['Map', 'prototype'],
            '%NumberPrototype%': ['Number', 'prototype'],
            '%ObjectPrototype%': ['Object', 'prototype'],
            '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
            '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
            '%PromisePrototype%': ['Promise', 'prototype'],
            '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
            '%Promise_all%': ['Promise', 'all'],
            '%Promise_reject%': ['Promise', 'reject'],
            '%Promise_resolve%': ['Promise', 'resolve'],
            '%RangeErrorPrototype%': ['RangeError', 'prototype'],
            '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
            '%RegExpPrototype%': ['RegExp', 'prototype'],
            '%SetPrototype%': ['Set', 'prototype'],
            '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
            '%StringPrototype%': ['String', 'prototype'],
            '%SymbolPrototype%': ['Symbol', 'prototype'],
            '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
            '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
            '%TypeErrorPrototype%': ['TypeError', 'prototype'],
            '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
            '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
            '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
            '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
            '%URIErrorPrototype%': ['URIError', 'prototype'],
            '%WeakMapPrototype%': ['WeakMap', 'prototype'],
            '%WeakSetPrototype%': ['WeakSet', 'prototype'],
          },
          F = qi(),
          B = X_(),
          I = F.call(Function.call, Array.prototype.concat),
          M = F.call(Function.apply, Array.prototype.splice),
          w = F.call(Function.call, String.prototype.replace),
          N = F.call(Function.call, String.prototype.slice),
          k = F.call(Function.call, RegExp.prototype.exec),
          U =
            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
          V = /\\(\\)?/g,
          H = function (Y) {
            var R = N(Y, 0, 1),
              _ = N(Y, -1)
            if (R === '%' && _ !== '%')
              throw new n('invalid intrinsic syntax, expected closing `%`')
            if (_ === '%' && R !== '%')
              throw new n('invalid intrinsic syntax, expected opening `%`')
            var j = []
            return (
              w(Y, U, function (G, J, K, Z) {
                j[j.length] = K ? w(Z, V, '$1') : J || G
              }),
              j
            )
          },
          oe = function (Y, R) {
            var _ = Y,
              j
            if ((B(x, _) && ((j = x[_]), (_ = '%' + j[0] + '%')), B(A, _))) {
              var G = A[_]
              if ((G === m && (G = b(_)), typeof G > 'u' && !R))
                throw new o(
                  'intrinsic ' + Y + ' exists, but is not available. Please file an issue!'
                )
              return { alias: j, name: _, value: G }
            }
            throw new n('intrinsic ' + Y + ' does not exist!')
          }
        t.exports = function (Y, R) {
          if (typeof Y != 'string' || Y.length === 0)
            throw new o('intrinsic name must be a non-empty string')
          if (arguments.length > 1 && typeof R != 'boolean')
            throw new o('"allowMissing" argument must be a boolean')
          if (k(/^%?[^%]*%?$/, Y) === null)
            throw new n(
              '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
            )
          var _ = H(Y),
            j = _.length > 0 ? _[0] : '',
            G = oe('%' + j + '%', R),
            J = G.name,
            K = G.value,
            Z = !1,
            se = G.alias
          se && ((j = se[0]), M(_, I([0, 1], se)))
          for (var ke = 1, Ne = !0; ke < _.length; ke += 1) {
            var Q = _[ke],
              He = N(Q, 0, 1),
              T = N(Q, -1)
            if (
              (He === '"' || He === "'" || He === '`' || T === '"' || T === "'" || T === '`') &&
              He !== T
            )
              throw new n('property names with quotes must have matching quotes')
            if (
              ((Q === 'constructor' || !Ne) && (Z = !0),
              (j += '.' + Q),
              (J = '%' + j + '%'),
              B(A, J))
            )
              K = A[J]
            else if (K != null) {
              if (!(Q in K)) {
                if (!R)
                  throw new o(
                    'base intrinsic for ' + Y + ' exists, but the property is not available.'
                  )
                return
              }
              if (u && ke + 1 >= _.length) {
                var P = u(K, Q)
                ;(Ne = !!P),
                  Ne && 'get' in P && !('originalValue' in P.get) ? (K = P.get) : (K = K[Q])
              } else (Ne = B(K, Q)), (K = K[Q])
              Ne && !Z && (A[J] = K)
            }
          }
          return K
        }
      },
    }),
    J_ = Me({
      'node_modules/call-bind/index.js'(e, t) {
        'use strict'
        var r = qi(),
          n = Zm(),
          a = n('%Function.prototype.apply%'),
          o = n('%Function.prototype.call%'),
          i = n('%Reflect.apply%', !0) || r.call(o, a),
          u = n('%Object.getOwnPropertyDescriptor%', !0),
          s = n('%Object.defineProperty%', !0),
          p = n('%Math.max%')
        if (s)
          try {
            s({}, 'a', { value: 1 })
          } catch {
            s = null
          }
        t.exports = function (m) {
          var g = i(r, o, arguments)
          if (u && s) {
            var A = u(g, 'length')
            A.configurable && s(g, 'length', { value: 1 + p(0, m.length - (arguments.length - 1)) })
          }
          return g
        }
        var y = function () {
          return i(r, a, arguments)
        }
        s ? s(t.exports, 'apply', { value: y }) : (t.exports.apply = y)
      },
    }),
    Q_ = Me({
      'node_modules/call-bind/callBound.js'(e, t) {
        'use strict'
        var r = Zm(),
          n = J_(),
          a = n(r('String.prototype.indexOf'))
        t.exports = function (i, u) {
          var s = r(i, !!u)
          return typeof s == 'function' && a(i, '.prototype.') > -1 ? n(s) : s
        }
      },
    }),
    Z_ = Me({
      'node_modules/has-tostringtag/shams.js'(e, t) {
        'use strict'
        var r = Jm()
        t.exports = function () {
          return r() && !!Symbol.toStringTag
        }
      },
    }),
    eO = Me({
      'node_modules/is-regex/index.js'(e, t) {
        'use strict'
        var r = Q_(),
          n = Z_()(),
          a,
          o,
          i,
          u
        n &&
          ((a = r('Object.prototype.hasOwnProperty')),
          (o = r('RegExp.prototype.exec')),
          (i = {}),
          (s = function () {
            throw i
          }),
          (u = { toString: s, valueOf: s }),
          typeof Symbol.toPrimitive == 'symbol' && (u[Symbol.toPrimitive] = s))
        var s,
          p = r('Object.prototype.toString'),
          y = Object.getOwnPropertyDescriptor,
          E = '[object RegExp]'
        t.exports = n
          ? function (g) {
              if (!g || typeof g != 'object') return !1
              var A = y(g, 'lastIndex'),
                b = A && a(A, 'value')
              if (!b) return !1
              try {
                o(g, u)
              } catch (x) {
                return x === i
              }
            }
          : function (g) {
              return !g || (typeof g != 'object' && typeof g != 'function') ? !1 : p(g) === E
            }
      },
    }),
    tO = Me({
      'node_modules/is-function/index.js'(e, t) {
        t.exports = n
        var r = Object.prototype.toString
        function n(a) {
          if (!a) return !1
          var o = r.call(a)
          return (
            o === '[object Function]' ||
            (typeof a == 'function' && o !== '[object RegExp]') ||
            (typeof window < 'u' &&
              (a === window.setTimeout ||
                a === window.alert ||
                a === window.confirm ||
                a === window.prompt))
          )
        }
      },
    }),
    rO = Me({
      'node_modules/is-symbol/index.js'(e, t) {
        'use strict'
        var r = Object.prototype.toString,
          n = Qm()()
        n
          ? ((a = Symbol.prototype.toString),
            (o = /^Symbol\(.*\)$/),
            (i = function (s) {
              return typeof s.valueOf() != 'symbol' ? !1 : o.test(a.call(s))
            }),
            (t.exports = function (s) {
              if (typeof s == 'symbol') return !0
              if (r.call(s) !== '[object Symbol]') return !1
              try {
                return i(s)
              } catch {
                return !1
              }
            }))
          : (t.exports = function (s) {
              return !1
            })
        var a, o, i
      },
    }),
    nO = aa(eO()),
    aO = aa(tO()),
    oO = aa(rO())
  function iO(e) {
    return e != null && typeof e == 'object' && Array.isArray(e) === !1
  }
  var uO = typeof window == 'object' && window && window.Object === Object && window,
    sO = uO,
    lO = typeof self == 'object' && self && self.Object === Object && self,
    cO = sO || lO || Function('return this')(),
    ji = cO,
    dO = ji.Symbol,
    ar = dO,
    eg = Object.prototype,
    pO = eg.hasOwnProperty,
    fO = eg.toString,
    Kr = ar ? ar.toStringTag : void 0
  function hO(e) {
    var t = pO.call(e, Kr),
      r = e[Kr]
    try {
      e[Kr] = void 0
      var n = !0
    } catch {}
    var a = fO.call(e)
    return n && (t ? (e[Kr] = r) : delete e[Kr]), a
  }
  var mO = hO,
    gO = Object.prototype,
    yO = gO.toString
  function bO(e) {
    return yO.call(e)
  }
  var EO = bO,
    AO = '[object Null]',
    vO = '[object Undefined]',
    Wm = ar ? ar.toStringTag : void 0
  function DO(e) {
    return e == null ? (e === void 0 ? vO : AO) : Wm && Wm in Object(e) ? mO(e) : EO(e)
  }
  var tg = DO
  function CO(e) {
    return e != null && typeof e == 'object'
  }
  var xO = CO,
    SO = '[object Symbol]'
  function FO(e) {
    return typeof e == 'symbol' || (xO(e) && tg(e) == SO)
  }
  var $i = FO
  function wO(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; ) a[r] = t(e[r], r, e)
    return a
  }
  var BO = wO,
    TO = Array.isArray,
    Hi = TO,
    _O = 1 / 0,
    Vm = ar ? ar.prototype : void 0,
    Km = Vm ? Vm.toString : void 0
  function rg(e) {
    if (typeof e == 'string') return e
    if (Hi(e)) return BO(e, rg) + ''
    if ($i(e)) return Km ? Km.call(e) : ''
    var t = e + ''
    return t == '0' && 1 / e == -_O ? '-0' : t
  }
  var OO = rg
  function RO(e) {
    var t = typeof e
    return e != null && (t == 'object' || t == 'function')
  }
  var ng = RO,
    PO = '[object AsyncFunction]',
    IO = '[object Function]',
    kO = '[object GeneratorFunction]',
    NO = '[object Proxy]'
  function LO(e) {
    if (!ng(e)) return !1
    var t = tg(e)
    return t == IO || t == kO || t == PO || t == NO
  }
  var MO = LO,
    qO = ji['__core-js_shared__'],
    Mi = qO,
    Ym = (function () {
      var e = /[^.]+$/.exec((Mi && Mi.keys && Mi.keys.IE_PROTO) || '')
      return e ? 'Symbol(src)_1.' + e : ''
    })()
  function jO(e) {
    return !!Ym && Ym in e
  }
  var $O = jO,
    HO = Function.prototype,
    UO = HO.toString
  function zO(e) {
    if (e != null) {
      try {
        return UO.call(e)
      } catch {}
      try {
        return e + ''
      } catch {}
    }
    return ''
  }
  var GO = zO,
    WO = /[\\^$.*+?()[\]{}|]/g,
    VO = /^\[object .+?Constructor\]$/,
    KO = Function.prototype,
    YO = Object.prototype,
    XO = KO.toString,
    JO = YO.hasOwnProperty,
    QO = RegExp(
      '^' +
        XO.call(JO)
          .replace(WO, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
    )
  function ZO(e) {
    if (!ng(e) || $O(e)) return !1
    var t = MO(e) ? QO : VO
    return t.test(GO(e))
  }
  var e6 = ZO
  function t6(e, t) {
    return e?.[t]
  }
  var r6 = t6
  function n6(e, t) {
    var r = r6(e, t)
    return e6(r) ? r : void 0
  }
  var ag = n6
  function a6(e, t) {
    return e === t || (e !== e && t !== t)
  }
  var o6 = a6,
    i6 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    u6 = /^\w*$/
  function s6(e, t) {
    if (Hi(e)) return !1
    var r = typeof e
    return r == 'number' || r == 'symbol' || r == 'boolean' || e == null || $i(e)
      ? !0
      : u6.test(e) || !i6.test(e) || (t != null && e in Object(t))
  }
  var l6 = s6,
    c6 = ag(Object, 'create'),
    Yr = c6
  function d6() {
    ;(this.__data__ = Yr ? Yr(null) : {}), (this.size = 0)
  }
  var p6 = d6
  function f6(e) {
    var t = this.has(e) && delete this.__data__[e]
    return (this.size -= t ? 1 : 0), t
  }
  var h6 = f6,
    m6 = '__lodash_hash_undefined__',
    g6 = Object.prototype,
    y6 = g6.hasOwnProperty
  function b6(e) {
    var t = this.__data__
    if (Yr) {
      var r = t[e]
      return r === m6 ? void 0 : r
    }
    return y6.call(t, e) ? t[e] : void 0
  }
  var E6 = b6,
    A6 = Object.prototype,
    v6 = A6.hasOwnProperty
  function D6(e) {
    var t = this.__data__
    return Yr ? t[e] !== void 0 : v6.call(t, e)
  }
  var C6 = D6,
    x6 = '__lodash_hash_undefined__'
  function S6(e, t) {
    var r = this.__data__
    return (this.size += this.has(e) ? 0 : 1), (r[e] = Yr && t === void 0 ? x6 : t), this
  }
  var F6 = S6
  function or(e) {
    var t = -1,
      r = e == null ? 0 : e.length
    for (this.clear(); ++t < r; ) {
      var n = e[t]
      this.set(n[0], n[1])
    }
  }
  or.prototype.clear = p6
  or.prototype.delete = h6
  or.prototype.get = E6
  or.prototype.has = C6
  or.prototype.set = F6
  var Xm = or
  function w6() {
    ;(this.__data__ = []), (this.size = 0)
  }
  var B6 = w6
  function T6(e, t) {
    for (var r = e.length; r--; ) if (o6(e[r][0], t)) return r
    return -1
  }
  var ia = T6,
    _6 = Array.prototype,
    O6 = _6.splice
  function R6(e) {
    var t = this.__data__,
      r = ia(t, e)
    if (r < 0) return !1
    var n = t.length - 1
    return r == n ? t.pop() : O6.call(t, r, 1), --this.size, !0
  }
  var P6 = R6
  function I6(e) {
    var t = this.__data__,
      r = ia(t, e)
    return r < 0 ? void 0 : t[r][1]
  }
  var k6 = I6
  function N6(e) {
    return ia(this.__data__, e) > -1
  }
  var L6 = N6
  function M6(e, t) {
    var r = this.__data__,
      n = ia(r, e)
    return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this
  }
  var q6 = M6
  function ir(e) {
    var t = -1,
      r = e == null ? 0 : e.length
    for (this.clear(); ++t < r; ) {
      var n = e[t]
      this.set(n[0], n[1])
    }
  }
  ir.prototype.clear = B6
  ir.prototype.delete = P6
  ir.prototype.get = k6
  ir.prototype.has = L6
  ir.prototype.set = q6
  var j6 = ir,
    $6 = ag(ji, 'Map'),
    H6 = $6
  function U6() {
    ;(this.size = 0), (this.__data__ = { hash: new Xm(), map: new (H6 || j6)(), string: new Xm() })
  }
  var z6 = U6
  function G6(e) {
    var t = typeof e
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
      ? e !== '__proto__'
      : e === null
  }
  var W6 = G6
  function V6(e, t) {
    var r = e.__data__
    return W6(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map
  }
  var ua = V6
  function K6(e) {
    var t = ua(this, e).delete(e)
    return (this.size -= t ? 1 : 0), t
  }
  var Y6 = K6
  function X6(e) {
    return ua(this, e).get(e)
  }
  var J6 = X6
  function Q6(e) {
    return ua(this, e).has(e)
  }
  var Z6 = Q6
  function e4(e, t) {
    var r = ua(this, e),
      n = r.size
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this
  }
  var t4 = e4
  function ur(e) {
    var t = -1,
      r = e == null ? 0 : e.length
    for (this.clear(); ++t < r; ) {
      var n = e[t]
      this.set(n[0], n[1])
    }
  }
  ur.prototype.clear = z6
  ur.prototype.delete = Y6
  ur.prototype.get = J6
  ur.prototype.has = Z6
  ur.prototype.set = t4
  var og = ur,
    r4 = 'Expected a function'
  function Ui(e, t) {
    if (typeof e != 'function' || (t != null && typeof t != 'function')) throw new TypeError(r4)
    var r = function () {
      var n = arguments,
        a = t ? t.apply(this, n) : n[0],
        o = r.cache
      if (o.has(a)) return o.get(a)
      var i = e.apply(this, n)
      return (r.cache = o.set(a, i) || o), i
    }
    return (r.cache = new (Ui.Cache || og)()), r
  }
  Ui.Cache = og
  var n4 = Ui,
    a4 = 500
  function o4(e) {
    var t = n4(e, function (n) {
        return r.size === a4 && r.clear(), n
      }),
      r = t.cache
    return t
  }
  var i4 = o4,
    u4 =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    s4 = /\\(\\)?/g,
    l4 = i4(function (e) {
      var t = []
      return (
        e.charCodeAt(0) === 46 && t.push(''),
        e.replace(u4, function (r, n, a, o) {
          t.push(a ? o.replace(s4, '$1') : n || r)
        }),
        t
      )
    }),
    c4 = l4
  function d4(e) {
    return e == null ? '' : OO(e)
  }
  var p4 = d4
  function f4(e, t) {
    return Hi(e) ? e : l6(e, t) ? [e] : c4(p4(e))
  }
  var h4 = f4,
    m4 = 1 / 0
  function g4(e) {
    if (typeof e == 'string' || $i(e)) return e
    var t = e + ''
    return t == '0' && 1 / e == -m4 ? '-0' : t
  }
  var y4 = g4
  function b4(e, t) {
    t = h4(t, e)
    for (var r = 0, n = t.length; e != null && r < n; ) e = e[y4(t[r++])]
    return r && r == n ? e : void 0
  }
  var E4 = b4
  function A4(e, t, r) {
    var n = e == null ? void 0 : E4(e, t)
    return n === void 0 ? r : n
  }
  var v4 = A4,
    oa = iO,
    D4 = e => {
      let t = null,
        r = !1,
        n = !1,
        a = !1,
        o = ''
      if (e.indexOf('//') >= 0 || e.indexOf('/*') >= 0)
        for (let i = 0; i < e.length; i += 1)
          !t && !r && !n && !a
            ? e[i] === '"' || e[i] === "'" || e[i] === '`'
              ? (t = e[i])
              : e[i] === '/' && e[i + 1] === '*'
              ? (r = !0)
              : e[i] === '/' && e[i + 1] === '/'
              ? (n = !0)
              : e[i] === '/' && e[i + 1] !== '/' && (a = !0)
            : (t &&
                ((e[i] === t && e[i - 1] !== '\\') ||
                  (e[i] ===
                    `
` &&
                    t !== '`')) &&
                (t = null),
              a &&
                ((e[i] === '/' && e[i - 1] !== '\\') ||
                  e[i] ===
                    `
`) &&
                (a = !1),
              r && e[i - 1] === '/' && e[i - 2] === '*' && (r = !1),
              n &&
                e[i] ===
                  `
` &&
                (n = !1)),
            !r && !n && (o += e[i])
      else o = e
      return o
    },
    C4 = (0, ig.default)(1e4)(e => D4(e).replace(/\n\s*/g, '').trim()),
    x4 = function (t, r) {
      let n = r.slice(0, r.indexOf('{')),
        a = r.slice(r.indexOf('{'))
      if (n.includes('=>') || n.includes('function')) return r
      let o = n
      return (o = o.replace(t, 'function')), o + a
    },
    S4 = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/,
    F4 = e => e.match(/^[\[\{\"\}].*[\]\}\"]$/)
  function ug(e) {
    if (!oa(e)) return e
    let t = e,
      r = !1
    return (
      typeof Event < 'u' && e instanceof Event && ((t = Gm(t)), (r = !0)),
      (t = Object.keys(t).reduce((n, a) => {
        try {
          t[a] && t[a].toJSON, (n[a] = t[a])
        } catch {
          r = !0
        }
        return n
      }, {})),
      r ? t : e
    )
  }
  var w4 = function (t) {
      let r, n, a, o
      return function (u, s) {
        try {
          if (u === '') return (o = []), (r = new Map([[s, '[]']])), (n = new Map()), (a = []), s
          let p = n.get(this) || this
          for (; a.length && p !== a[0]; ) a.shift(), o.pop()
          if (typeof s == 'boolean') return s
          if (s === void 0) return t.allowUndefined ? '_undefined_' : void 0
          if (s === null) return null
          if (typeof s == 'number')
            return s === -1 / 0
              ? '_-Infinity_'
              : s === 1 / 0
              ? '_Infinity_'
              : Number.isNaN(s)
              ? '_NaN_'
              : s
          if (typeof s == 'bigint') return `_bigint_${s.toString()}`
          if (typeof s == 'string') return S4.test(s) ? (t.allowDate ? `_date_${s}` : void 0) : s
          if ((0, nO.default)(s)) return t.allowRegExp ? `_regexp_${s.flags}|${s.source}` : void 0
          if ((0, aO.default)(s)) {
            if (!t.allowFunction) return
            let { name: E } = s,
              m = s.toString()
            return m.match(
              /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
            )
              ? `_function_${E}|${(() => {}).toString()}`
              : `_function_${E}|${C4(x4(u, m))}`
          }
          if ((0, oO.default)(s)) {
            if (!t.allowSymbol) return
            let E = Symbol.keyFor(s)
            return E !== void 0 ? `_gsymbol_${E}` : `_symbol_${s.toString().slice(7, -1)}`
          }
          if (a.length >= t.maxDepth) return Array.isArray(s) ? `[Array(${s.length})]` : '[Object]'
          if (s === this) return `_duplicate_${JSON.stringify(o)}`
          if (s instanceof Error && t.allowError)
            return {
              __isConvertedError__: !0,
              errorProperties: {
                ...(s.cause ? { cause: s.cause } : {}),
                ...s,
                name: s.name,
                message: s.message,
                stack: s.stack,
                '_constructor-name_': s.constructor.name,
              },
            }
          if (
            s.constructor &&
            s.constructor.name &&
            s.constructor.name !== 'Object' &&
            !Array.isArray(s) &&
            !t.allowClass
          )
            return
          let y = r.get(s)
          if (!y) {
            let E = Array.isArray(s) ? s : ug(s)
            if (
              s.constructor &&
              s.constructor.name &&
              s.constructor.name !== 'Object' &&
              !Array.isArray(s) &&
              t.allowClass
            )
              try {
                Object.assign(E, { '_constructor-name_': s.constructor.name })
              } catch {}
            return o.push(u), a.unshift(E), r.set(s, JSON.stringify(o)), s !== E && n.set(s, E), E
          }
          return `_duplicate_${y}`
        } catch {
          return
        }
      }
    },
    B4 = function reviver(options) {
      let refs = [],
        root
      return function revive(key, value) {
        if (
          (key === '' &&
            ((root = value),
            refs.forEach(({ target: e, container: t, replacement: r }) => {
              let n = F4(r) ? JSON.parse(r) : r.split('.')
              n.length === 0 ? (t[e] = root) : (t[e] = v4(root, n))
            })),
          key === '_constructor-name_')
        )
          return value
        if (oa(value) && value.__isConvertedError__) {
          let { message: e, ...t } = value.errorProperties,
            r = new Error(e)
          return Object.assign(r, t), r
        }
        if (oa(value) && value['_constructor-name_'] && options.allowFunction) {
          let e = value['_constructor-name_']
          if (e !== 'Object') {
            let t = new Function(`return function ${e.replace(/[^a-zA-Z0-9$_]+/g, '')}(){}`)()
            Object.setPrototypeOf(value, new t())
          }
          return delete value['_constructor-name_'], value
        }
        if (typeof value == 'string' && value.startsWith('_function_') && options.allowFunction) {
          let [, name, source] = value.match(/_function_([^|]*)\|(.*)/) || [],
            sourceSanitized = source.replace(/[(\(\))|\\| |\]|`]*$/, '')
          if (!options.lazyEval) return eval(`(${sourceSanitized})`)
          let result = (...args) => {
            let f = eval(`(${sourceSanitized})`)
            return f(...args)
          }
          return (
            Object.defineProperty(result, 'toString', { value: () => sourceSanitized }),
            Object.defineProperty(result, 'name', { value: name }),
            result
          )
        }
        if (typeof value == 'string' && value.startsWith('_regexp_') && options.allowRegExp) {
          let [, e, t] = value.match(/_regexp_([^|]*)\|(.*)/) || []
          return new RegExp(t, e)
        }
        return typeof value == 'string' && value.startsWith('_date_') && options.allowDate
          ? new Date(value.replace('_date_', ''))
          : typeof value == 'string' && value.startsWith('_duplicate_')
          ? (refs.push({
              target: key,
              container: this,
              replacement: value.replace(/^_duplicate_/, ''),
            }),
            null)
          : typeof value == 'string' && value.startsWith('_symbol_') && options.allowSymbol
          ? Symbol(value.replace('_symbol_', ''))
          : typeof value == 'string' && value.startsWith('_gsymbol_') && options.allowSymbol
          ? Symbol.for(value.replace('_gsymbol_', ''))
          : typeof value == 'string' && value === '_-Infinity_'
          ? -1 / 0
          : typeof value == 'string' && value === '_Infinity_'
          ? 1 / 0
          : typeof value == 'string' && value === '_NaN_'
          ? NaN
          : typeof value == 'string' && value.startsWith('_bigint_') && typeof BigInt == 'function'
          ? BigInt(value.replace('_bigint_', ''))
          : value
      }
    },
    sg = {
      maxDepth: 10,
      space: void 0,
      allowFunction: !0,
      allowRegExp: !0,
      allowDate: !0,
      allowClass: !0,
      allowError: !0,
      allowUndefined: !0,
      allowSymbol: !0,
      lazyEval: !0,
    },
    lg = (e, t = {}) => {
      let r = { ...sg, ...t }
      return JSON.stringify(ug(e), w4(r), t.space)
    },
    T4 = () => {
      let e = new Map()
      return function t(r) {
        oa(r) &&
          Object.entries(r).forEach(([n, a]) => {
            a === '_undefined_' ? (r[n] = void 0) : e.get(a) || (e.set(a, !0), t(a))
          }),
          Array.isArray(r) &&
            r.forEach((n, a) => {
              n === '_undefined_'
                ? (e.set(n, !0), (r[a] = void 0))
                : e.get(n) || (e.set(n, !0), t(n))
            })
      }
    },
    Rte = (e, t = {}) => {
      let r = { ...sg, ...t },
        n = JSON.parse(e, B4(r))
      return T4()(n), n
    }
  var ky = fe(Dg(), 1)
  var GR = q.div(Pt, ({ theme: e }) => ({
      backgroundColor: e.base === 'light' ? 'rgba(0,0,0,.01)' : 'rgba(255,255,255,.01)',
      borderRadius: e.appBorderRadius,
      border: `1px dashed ${e.appBorderColor}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      margin: '25px 0 40px',
      color: de(0.3, e.color.defaultText),
      fontSize: e.typography.size.s2,
    })),
    Ny = e => h.createElement(GR, { ...e, className: 'docblock-emptyblock sb-unstyled' }),
    WR = q(tn)(({ theme: e }) => ({
      fontSize: `${e.typography.size.s2 - 1}px`,
      lineHeight: '19px',
      margin: '25px 0 40px',
      borderRadius: e.appBorderRadius,
      boxShadow:
        e.base === 'light' ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0' : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
      'pre.prismjs': { padding: 20, background: 'inherit' },
    })),
    VR = q.div(({ theme: e }) => ({
      background: e.background.content,
      borderRadius: e.appBorderRadius,
      border: `1px solid ${e.appBorderColor}`,
      boxShadow:
        e.base === 'light' ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0' : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
      margin: '25px 0 40px',
      padding: '20px 20px 20px 22px',
    })),
    ha = q.div(({ theme: e }) => ({
      animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
      background: e.appBorderColor,
      height: 17,
      marginTop: 1,
      width: '60%',
      [`&:first-child${ku}`]: { margin: 0 },
    })),
    KR = () =>
      h.createElement(
        VR,
        null,
        h.createElement(ha, null),
        h.createElement(ha, { style: { width: '80%' } }),
        h.createElement(ha, { style: { width: '30%' } }),
        h.createElement(ha, { style: { width: '80%' } })
      ),
    du = ({ isLoading: e, error: t, language: r, code: n, dark: a, format: o, ...i }) => {
      if (e) return h.createElement(KR, null)
      if (t) return h.createElement(Ny, null, t)
      let u = h.createElement(
        WR,
        {
          bordered: !0,
          copyable: !0,
          format: o,
          language: r,
          className: 'docblock-source sb-unstyled',
          ...i,
        },
        n
      )
      if (typeof a > 'u') return u
      let s = a ? Wa.dark : Wa.light
      return h.createElement(Pu, { theme: Iu(s) }, u)
    }
  du.defaultProps = { format: !1 }
  var be = e => `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`,
    pu = 600,
    Ane = q.h1(Pt, ({ theme: e }) => ({
      color: e.color.defaultText,
      fontSize: e.typography.size.m3,
      fontWeight: e.typography.weight.bold,
      lineHeight: '32px',
      [`@media (min-width: ${pu}px)`]: {
        fontSize: e.typography.size.l1,
        lineHeight: '36px',
        marginBottom: '16px',
      },
    })),
    vne = q.h2(Pt, ({ theme: e }) => ({
      fontWeight: e.typography.weight.regular,
      fontSize: e.typography.size.s3,
      lineHeight: '20px',
      borderBottom: 'none',
      marginBottom: 15,
      [`@media (min-width: ${pu}px)`]: {
        fontSize: e.typography.size.m1,
        lineHeight: '28px',
        marginBottom: 24,
      },
      color: de(0.25, e.color.defaultText),
    })),
    Dne = q.div(({ theme: e }) => {
      let t = {
          fontFamily: e.typography.fonts.base,
          fontSize: e.typography.size.s3,
          margin: 0,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
          WebkitOverflowScrolling: 'touch',
        },
        r = {
          margin: '20px 0 8px',
          padding: 0,
          cursor: 'text',
          position: 'relative',
          color: e.color.defaultText,
          '&:first-of-type': { marginTop: 0, paddingTop: 0 },
          '&:hover a.anchor': { textDecoration: 'none' },
          '& code': { fontSize: 'inherit' },
        },
        n = {
          lineHeight: 1,
          margin: '0 2px',
          padding: '3px 5px',
          whiteSpace: 'nowrap',
          borderRadius: 3,
          fontSize: e.typography.size.s2 - 1,
          border:
            e.base === 'light' ? `1px solid ${e.color.mediumlight}` : `1px solid ${e.color.darker}`,
          color: e.base === 'light' ? de(0.1, e.color.defaultText) : de(0.3, e.color.defaultText),
          backgroundColor: e.base === 'light' ? e.color.lighter : e.color.border,
        }
      return {
        maxWidth: 1e3,
        width: '100%',
        [be('a')]: {
          ...t,
          fontSize: 'inherit',
          lineHeight: '24px',
          color: e.color.secondary,
          textDecoration: 'none',
          '&.absent': { color: '#cc0000' },
          '&.anchor': {
            display: 'block',
            paddingLeft: 30,
            marginLeft: -30,
            cursor: 'pointer',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
          },
        },
        [be('blockquote')]: {
          ...t,
          margin: '16px 0',
          borderLeft: `4px solid ${e.color.medium}`,
          padding: '0 15px',
          color: e.color.dark,
          '& > :first-of-type': { marginTop: 0 },
          '& > :last-child': { marginBottom: 0 },
        },
        [be('div')]: t,
        [be('dl')]: {
          ...t,
          margin: '16px 0',
          padding: 0,
          '& dt': {
            fontSize: '14px',
            fontWeight: 'bold',
            fontStyle: 'italic',
            padding: 0,
            margin: '16px 0 4px',
          },
          '& dt:first-of-type': { padding: 0 },
          '& dt > :first-of-type': { marginTop: 0 },
          '& dt > :last-child': { marginBottom: 0 },
          '& dd': { margin: '0 0 16px', padding: '0 15px' },
          '& dd > :first-of-type': { marginTop: 0 },
          '& dd > :last-child': { marginBottom: 0 },
        },
        [be('h1')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.l1}px`,
          fontWeight: e.typography.weight.bold,
        },
        [be('h2')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.m2}px`,
          paddingBottom: 4,
          borderBottom: `1px solid ${e.appBorderColor}`,
        },
        [be('h3')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.m1}px`,
          fontWeight: e.typography.weight.bold,
        },
        [be('h4')]: { ...t, ...r, fontSize: `${e.typography.size.s3}px` },
        [be('h5')]: { ...t, ...r, fontSize: `${e.typography.size.s2}px` },
        [be('h6')]: { ...t, ...r, fontSize: `${e.typography.size.s2}px`, color: e.color.dark },
        [be('hr')]: {
          border: '0 none',
          borderTop: `1px solid ${e.appBorderColor}`,
          height: 4,
          padding: 0,
        },
        [be('img')]: { maxWidth: '100%' },
        [be('li')]: {
          ...t,
          fontSize: e.typography.size.s2,
          color: e.color.defaultText,
          lineHeight: '24px',
          '& + li': { marginTop: '.25em' },
          '& ul, & ol': { marginTop: '.25em', marginBottom: 0 },
          '& code': n,
        },
        [be('ol')]: {
          ...t,
          margin: '16px 0',
          paddingLeft: 30,
          '& :first-of-type': { marginTop: 0 },
          '& :last-child': { marginBottom: 0 },
        },
        [be('p')]: {
          ...t,
          margin: '16px 0',
          fontSize: e.typography.size.s2,
          lineHeight: '24px',
          color: e.color.defaultText,
          '& code': n,
        },
        [be('pre')]: {
          ...t,
          fontFamily: e.typography.fonts.mono,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          lineHeight: '18px',
          padding: '11px 1rem',
          whiteSpace: 'pre-wrap',
          color: 'inherit',
          borderRadius: 3,
          margin: '1rem 0',
          '&:not(.prismjs)': {
            background: 'transparent',
            border: 'none',
            borderRadius: 0,
            padding: 0,
            margin: 0,
          },
          '& pre, &.prismjs': {
            padding: 15,
            margin: 0,
            whiteSpace: 'pre-wrap',
            color: 'inherit',
            fontSize: '13px',
            lineHeight: '19px',
            code: { color: 'inherit', fontSize: 'inherit' },
          },
          '& code': { whiteSpace: 'pre' },
          '& code, & tt': { border: 'none' },
        },
        [be('span')]: {
          ...t,
          '&.frame': {
            display: 'block',
            overflow: 'hidden',
            '& > span': {
              border: `1px solid ${e.color.medium}`,
              display: 'block',
              float: 'left',
              overflow: 'hidden',
              margin: '13px 0 0',
              padding: 7,
              width: 'auto',
            },
            '& span img': { display: 'block', float: 'left' },
            '& span span': {
              clear: 'both',
              color: e.color.darkest,
              display: 'block',
              padding: '5px 0 0',
            },
          },
          '&.align-center': {
            display: 'block',
            overflow: 'hidden',
            clear: 'both',
            '& > span': {
              display: 'block',
              overflow: 'hidden',
              margin: '13px auto 0',
              textAlign: 'center',
            },
            '& span img': { margin: '0 auto', textAlign: 'center' },
          },
          '&.align-right': {
            display: 'block',
            overflow: 'hidden',
            clear: 'both',
            '& > span': {
              display: 'block',
              overflow: 'hidden',
              margin: '13px 0 0',
              textAlign: 'right',
            },
            '& span img': { margin: 0, textAlign: 'right' },
          },
          '&.float-left': {
            display: 'block',
            marginRight: 13,
            overflow: 'hidden',
            float: 'left',
            '& span': { margin: '13px 0 0' },
          },
          '&.float-right': {
            display: 'block',
            marginLeft: 13,
            overflow: 'hidden',
            float: 'right',
            '& > span': {
              display: 'block',
              overflow: 'hidden',
              margin: '13px auto 0',
              textAlign: 'right',
            },
          },
        },
        [be('table')]: {
          ...t,
          margin: '16px 0',
          fontSize: e.typography.size.s2,
          lineHeight: '24px',
          padding: 0,
          borderCollapse: 'collapse',
          '& tr': {
            borderTop: `1px solid ${e.appBorderColor}`,
            backgroundColor: e.appContentBg,
            margin: 0,
            padding: 0,
          },
          '& tr:nth-of-type(2n)': {
            backgroundColor: e.base === 'dark' ? e.color.darker : e.color.lighter,
          },
          '& tr th': {
            fontWeight: 'bold',
            color: e.color.defaultText,
            border: `1px solid ${e.appBorderColor}`,
            margin: 0,
            padding: '6px 13px',
          },
          '& tr td': {
            border: `1px solid ${e.appBorderColor}`,
            color: e.color.defaultText,
            margin: 0,
            padding: '6px 13px',
          },
          '& tr th :first-of-type, & tr td :first-of-type': { marginTop: 0 },
          '& tr th :last-child, & tr td :last-child': { marginBottom: 0 },
        },
        [be('ul')]: {
          ...t,
          margin: '16px 0',
          paddingLeft: 30,
          '& :first-of-type': { marginTop: 0 },
          '& :last-child': { marginBottom: 0 },
          listStyle: 'disc',
        },
      }
    }),
    Cne = q.div(({ theme: e }) => ({
      background: e.background.content,
      display: 'flex',
      justifyContent: 'center',
      padding: '4rem 20px',
      minHeight: '100vh',
      boxSizing: 'border-box',
      gap: '3rem',
      [`@media (min-width: ${pu}px)`]: {},
    }))
  var ba = e => ({
      borderRadius: e.appBorderRadius,
      background: e.background.content,
      boxShadow:
        e.base === 'light' ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0' : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
      border: `1px solid ${e.appBorderColor}`,
    }),
    YR = ({ zoom: e, resetZoom: t }) =>
      h.createElement(
        h.Fragment,
        null,
        h.createElement(
          bt,
          {
            key: 'zoomin',
            onClick: r => {
              r.preventDefault(), e(0.8)
            },
            title: 'Zoom in',
          },
          h.createElement(Oe, { icon: 'zoom' })
        ),
        h.createElement(
          bt,
          {
            key: 'zoomout',
            onClick: r => {
              r.preventDefault(), e(1.25)
            },
            title: 'Zoom out',
          },
          h.createElement(Oe, { icon: 'zoomout' })
        ),
        h.createElement(
          bt,
          {
            key: 'zoomreset',
            onClick: r => {
              r.preventDefault(), t()
            },
            title: 'Reset zoom',
          },
          h.createElement(Oe, { icon: 'zoomreset' })
        )
      ),
    XR = q(Oa)({
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      transition: 'transform .2s linear',
    }),
    JR = ({ isLoading: e, storyId: t, baseUrl: r, zoom: n, resetZoom: a, ...o }) =>
      h.createElement(
        XR,
        { ...o },
        h.createElement(
          Cu,
          { key: 'left' },
          e
            ? [1, 2, 3].map(i => h.createElement(Ia, { key: i }))
            : h.createElement(YR, { zoom: n, resetZoom: a })
        )
      ),
    Ly = fr({ scale: 1 }),
    { window: QR } = ue,
    ZR = class extends et {
      constructor() {
        super(...arguments), (this.iframe = null)
      }
      componentDidMount() {
        let { id: e } = this.props
        this.iframe = QR.document.getElementById(e)
      }
      shouldComponentUpdate(e) {
        let { scale: t } = e
        return (
          t !== this.props.scale &&
            this.setIframeBodyStyle({
              width: `${t * 100}%`,
              height: `${t * 100}%`,
              transform: `scale(${1 / t})`,
              transformOrigin: 'top left',
            }),
          !1
        )
      }
      setIframeBodyStyle(e) {
        return Object.assign(this.iframe.contentDocument.body.style, e)
      }
      render() {
        let { id: e, title: t, src: r, allowFullScreen: n, scale: a, ...o } = this.props
        return h.createElement('iframe', {
          id: e,
          title: t,
          src: r,
          ...(n ? { allow: 'fullscreen' } : {}),
          loading: 'lazy',
          ...o,
        })
      }
    },
    { PREVIEW_URL: e9 } = ue,
    t9 = e9 || 'iframe.html',
    au = ({ story: e, primary: t }) => `story--${e.id}${t ? '--primary' : ''}`,
    r9 = e => {
      let t = Se(),
        [r, n] = re(!0),
        [a, o] = re(),
        { story: i, height: u, autoplay: s, forceInitialArgs: p, renderStoryToElement: y } = e
      return (
        he(() => {
          if (!(i && t.current)) return () => {}
          let E = t.current,
            m = y(
              i,
              E,
              {
                showMain: () => {},
                showError: ({ title: g, description: A }) => o(new Error(`${g} - ${A}`)),
                showException: g => o(g),
              },
              { autoplay: s, forceInitialArgs: p }
            )
          return (
            n(!1),
            () => {
              Promise.resolve().then(() => m())
            }
          )
        }, [s, y, i]),
        a
          ? h.createElement('pre', null, h.createElement(_a, { error: a }))
          : h.createElement(
              h.Fragment,
              null,
              u
                ? h.createElement(
                    'style',
                    null,
                    `#${au(e)} { min-height: ${u}; transform: translateZ(0); overflow: auto }`
                  )
                : null,
              r && h.createElement(fu, null),
              h.createElement('div', { ref: t, id: `${au(e)}-inner`, 'data-name': i.name })
            )
      )
    },
    n9 = ({ story: e, height: t = '500px' }) =>
      h.createElement(
        'div',
        { style: { width: '100%', height: t } },
        h.createElement(Ly.Consumer, null, ({ scale: r }) =>
          h.createElement(ZR, {
            key: 'iframe',
            id: `iframe--${e.id}`,
            title: e.name,
            src: Ua(t9, e.id, { viewMode: 'story' }),
            allowFullScreen: !0,
            scale: r,
            style: { width: '100%', height: '100%', border: '0 none' },
          })
        )
      ),
    a9 = e => {
      let { inline: t } = e
      return h.createElement(
        'div',
        { id: au(e), className: 'sb-story sb-unstyled', 'data-story-block': 'true' },
        t ? h.createElement(r9, { ...e }) : h.createElement(n9, { ...e })
      )
    },
    fu = () => h.createElement(ka, null),
    o9 = q.div(
      ({ isColumn: e, columns: t, layout: r }) => ({
        display: e || !t ? 'block' : 'flex',
        position: 'relative',
        flexWrap: 'wrap',
        overflow: 'auto',
        flexDirection: e ? 'column' : 'row',
        '& .innerZoomElementWrapper > *': e
          ? { width: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%', display: 'block' }
          : {
              maxWidth: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
              display: 'inline-block',
            },
      }),
      ({ layout: e = 'padded' }) =>
        e === 'centered' || e === 'padded'
          ? {
              padding: '30px 20px',
              margin: -10,
              '& .innerZoomElementWrapper > *': {
                width: 'auto',
                border: '10px solid transparent!important',
              },
            }
          : {},
      ({ layout: e = 'padded' }) =>
        e === 'centered'
          ? {
              display: 'flex',
              justifyContent: 'center',
              justifyItems: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }
          : {},
      ({ columns: e }) =>
        e && e > 1
          ? { '.innerZoomElementWrapper > *': { minWidth: `calc(100% / ${e} - 20px)` } }
          : {}
    ),
    gy = q(du)(({ theme: e }) => ({
      margin: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: e.appBorderRadius,
      borderBottomRightRadius: e.appBorderRadius,
      border: 'none',
      background: e.base === 'light' ? 'rgba(0, 0, 0, 0.85)' : ze(0.05, e.background.content),
      color: e.color.lightest,
      button: {
        background: e.base === 'light' ? 'rgba(0, 0, 0, 0.85)' : ze(0.05, e.background.content),
      },
    })),
    i9 = q.div(
      ({ theme: e, withSource: t, isExpanded: r }) => ({
        position: 'relative',
        overflow: 'hidden',
        margin: '25px 0 40px',
        ...ba(e),
        borderBottomLeftRadius: t && r && 0,
        borderBottomRightRadius: t && r && 0,
        borderBottomWidth: r && 0,
        'h3 + &': { marginTop: '16px' },
      }),
      ({ withToolbar: e }) => e && { paddingTop: 40 }
    ),
    u9 = (e, t, r) => {
      switch (!0) {
        case !!(e && e.error):
          return {
            source: null,
            actionItem: {
              title: 'No code available',
              className: 'docblock-code-toggle docblock-code-toggle--disabled',
              disabled: !0,
              onClick: () => r(!1),
            },
          }
        case t:
          return {
            source: h.createElement(gy, { ...e, dark: !0 }),
            actionItem: {
              title: 'Hide code',
              className: 'docblock-code-toggle docblock-code-toggle--expanded',
              onClick: () => r(!1),
            },
          }
        default:
          return {
            source: h.createElement(gy, { ...e, dark: !0 }),
            actionItem: {
              title: 'Show code',
              className: 'docblock-code-toggle',
              onClick: () => r(!0),
            },
          }
      }
    }
  function s9(e) {
    if (en.count(e) === 1) {
      let t = e
      if (t.props) return t.props.id
    }
    return null
  }
  var l9 = q(JR)({ position: 'absolute', top: 0, left: 0, right: 0, height: 40 }),
    c9 = q.div({ overflow: 'hidden', position: 'relative' }),
    ou = ({
      isLoading: e,
      isColumn: t,
      columns: r,
      children: n,
      withSource: a,
      withToolbar: o = !1,
      isExpanded: i = !1,
      additionalActions: u,
      className: s,
      layout: p = 'padded',
      ...y
    }) => {
      let [E, m] = re(i),
        { source: g, actionItem: A } = u9(a, E, m),
        [b, x] = re(1),
        F = [s].concat(['sbdocs', 'sbdocs-preview', 'sb-unstyled']),
        B = a ? [A] : [],
        [I, M] = re(u ? [...u] : []),
        w = [...B, ...I],
        { window: N } = ue,
        k = ge(async V => {
          let { createCopyToClipboardFunction: H } = await Promise.resolve().then(() => (hr(), Ru))
          H()
        }, []),
        U = V => {
          let H = N.getSelection()
          ;(H && H.type === 'Range') ||
            (V.preventDefault(),
            I.filter(oe => oe.title === 'Copied').length === 0 &&
              k(g.props.code).then(() => {
                M([...I, { title: 'Copied', onClick: () => {} }]),
                  N.setTimeout(() => M(I.filter(oe => oe.title !== 'Copied')), 1500)
              }))
        }
      return h.createElement(
        i9,
        { withSource: a, withToolbar: o, ...y, className: F.join(' ') },
        o &&
          h.createElement(l9, {
            isLoading: e,
            border: !0,
            zoom: V => x(b * V),
            resetZoom: () => x(1),
            storyId: s9(n),
            baseUrl: './iframe.html',
          }),
        h.createElement(
          Ly.Provider,
          { value: { scale: b } },
          h.createElement(
            c9,
            { className: 'docs-story', onCopyCapture: a && U },
            h.createElement(
              o9,
              { isColumn: t || !Array.isArray(n), columns: r, layout: p },
              h.createElement(
                $a.Element,
                { scale: b },
                Array.isArray(n)
                  ? n.map((V, H) => h.createElement('div', { key: H }, V))
                  : h.createElement('div', null, n)
              )
            ),
            h.createElement(Fa, { actionItems: w })
          )
        ),
        a && E && g
      )
    },
    d9 = q(ou)(() => ({ '.docs-story': { paddingTop: 32, paddingBottom: 40 } })),
    p9 = () => h.createElement(d9, { isLoading: !0, withToolbar: !0 }, h.createElement(fu, null)),
    f9 = q.table(({ theme: e }) => ({
      '&&': {
        borderCollapse: 'collapse',
        borderSpacing: 0,
        border: 'none',
        tr: { border: 'none !important', background: 'none' },
        'td, th': { padding: 0, border: 'none', width: 'auto!important' },
        marginTop: 0,
        marginBottom: 0,
        'th:first-of-type, td:first-of-type': { paddingLeft: 0 },
        'th:last-of-type, td:last-of-type': { paddingRight: 0 },
        td: {
          paddingTop: 0,
          paddingBottom: 4,
          '&:not(:first-of-type)': { paddingLeft: 10, paddingRight: 0 },
        },
        tbody: { boxShadow: 'none', border: 'none' },
        code: Rt({ theme: e }),
        div: { span: { fontWeight: 'bold' } },
        '& code': { margin: 0, display: 'inline-block', fontSize: e.typography.size.s1 },
      },
    })),
    h9 = ({ tags: e }) => {
      let t = (e.params || []).filter(o => o.description),
        r = t.length !== 0,
        n = e.deprecated != null,
        a = e.returns != null && e.returns.description != null
      return !r && !a && !n
        ? null
        : h.createElement(
            h.Fragment,
            null,
            h.createElement(
              f9,
              null,
              h.createElement(
                'tbody',
                null,
                n &&
                  h.createElement(
                    'tr',
                    { key: 'deprecated' },
                    h.createElement(
                      'td',
                      { colSpan: 2 },
                      h.createElement('strong', null, 'Deprecated'),
                      ': ',
                      e.deprecated
                    )
                  ),
                r &&
                  t.map(o =>
                    h.createElement(
                      'tr',
                      { key: o.name },
                      h.createElement('td', null, h.createElement('code', null, o.name)),
                      h.createElement('td', null, o.description)
                    )
                  ),
                a &&
                  h.createElement(
                    'tr',
                    { key: 'returns' },
                    h.createElement('td', null, h.createElement('code', null, 'Returns')),
                    h.createElement('td', null, e.returns.description)
                  )
              )
            )
          )
    },
    iu = 8,
    yy = q.div(({ isExpanded: e }) => ({
      display: 'flex',
      flexDirection: e ? 'column' : 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      marginBottom: '-4px',
      minWidth: 100,
    })),
    m9 = q.span(Rt, ({ theme: e, simple: t = !1 }) => ({
      flex: '0 0 auto',
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      wordBreak: 'break-word',
      whiteSpace: 'normal',
      maxWidth: '100%',
      margin: 0,
      marginRight: '4px',
      marginBottom: '4px',
      paddingTop: '2px',
      paddingBottom: '2px',
      lineHeight: '13px',
      ...(t && { background: 'transparent', border: '0 none', paddingLeft: 0 }),
    })),
    g9 = q.button(({ theme: e }) => ({
      fontFamily: e.typography.fonts.mono,
      color: e.color.secondary,
      marginBottom: '4px',
      background: 'none',
      border: 'none',
    })),
    y9 = q.div(Rt, ({ theme: e }) => ({
      fontFamily: e.typography.fonts.mono,
      color: e.color.secondary,
      fontSize: e.typography.size.s1,
      margin: 0,
      whiteSpace: 'nowrap',
      display: 'flex',
      alignItems: 'center',
    })),
    b9 = q.div(({ theme: e, width: t }) => ({
      width: t,
      minWidth: 200,
      maxWidth: 800,
      padding: 15,
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      boxSizing: 'content-box',
      '& code': { padding: '0 !important' },
    })),
    E9 = q(Oe)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 }),
    A9 = () => h.createElement('span', null, '-'),
    My = ({ text: e, simple: t }) => h.createElement(m9, { simple: t }, e),
    v9 = (0, Oy.default)(1e3)(e => {
      let t = e.split(/\r?\n/)
      return `${Math.max(...t.map(r => r.length))}ch`
    }),
    D9 = e => {
      if (!e) return [e]
      let t = e.split('|').map(r => r.trim())
      return (0, Ry.default)(t)
    },
    by = (e, t = !0) => {
      let r = e
      return (
        t || (r = e.slice(0, iu)),
        r.map(n => h.createElement(My, { key: n, text: n === '' ? '""' : n }))
      )
    },
    C9 = ({ value: e, initialExpandedArgs: t }) => {
      let { summary: r, detail: n } = e,
        [a, o] = re(!1),
        [i, u] = re(t || !1)
      if (r == null) return null
      let s = typeof r.toString == 'function' ? r.toString() : r
      if (n == null) {
        if (/[(){}[\]<>]/.test(s)) return h.createElement(My, { text: s })
        let p = D9(s),
          y = p.length
        return y > iu
          ? h.createElement(
              yy,
              { isExpanded: i },
              by(p, i),
              h.createElement(
                g9,
                { onClick: () => u(!i) },
                i ? 'Show less...' : `Show ${y - iu} more...`
              )
            )
          : h.createElement(yy, null, by(p))
      }
      return h.createElement(
        ja,
        {
          closeOnOutsideClick: !0,
          placement: 'bottom',
          visible: a,
          onVisibleChange: p => {
            o(p)
          },
          tooltip: h.createElement(
            b9,
            { width: v9(n) },
            h.createElement(tn, { language: 'jsx', format: !1 }, n)
          ),
        },
        h.createElement(
          y9,
          { className: 'sbdocs-expandable' },
          h.createElement('span', null, s),
          h.createElement(E9, { icon: a ? 'arrowup' : 'arrowdown' })
        )
      )
    },
    tu = ({ value: e, initialExpandedArgs: t }) =>
      e == null
        ? h.createElement(A9, null)
        : h.createElement(C9, { value: e, initialExpandedArgs: t }),
    x9 = q.label(({ theme: e }) => ({
      lineHeight: '18px',
      alignItems: 'center',
      marginBottom: 8,
      display: 'inline-block',
      position: 'relative',
      whiteSpace: 'nowrap',
      background: e.boolean.background,
      borderRadius: '3em',
      padding: 1,
      input: {
        appearance: 'none',
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        margin: 0,
        padding: 0,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        borderRadius: '3em',
        '&:focus': {
          outline: 'none',
          boxShadow: `${e.color.secondary} 0 0 0 1px inset !important`,
        },
      },
      span: {
        textAlign: 'center',
        fontSize: e.typography.size.s1,
        fontWeight: e.typography.weight.bold,
        lineHeight: '1',
        cursor: 'pointer',
        display: 'inline-block',
        padding: '7px 15px',
        transition: 'all 100ms ease-out',
        userSelect: 'none',
        borderRadius: '3em',
        color: de(0.5, e.color.defaultText),
        background: 'transparent',
        '&:hover': { boxShadow: `${Er(0.3, e.appBorderColor)} 0 0 0 1px inset` },
        '&:active': {
          boxShadow: `${Er(0.05, e.appBorderColor)} 0 0 0 2px inset`,
          color: Er(1, e.appBorderColor),
        },
        '&:first-of-type': { paddingRight: 8 },
        '&:last-of-type': { paddingLeft: 8 },
      },
      'input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type': {
        background: e.boolean.selectedBackground,
        boxShadow:
          e.base === 'light'
            ? `${Er(0.1, e.appBorderColor)} 0 0 2px`
            : `${e.appBorderColor} 0 0 0 1px`,
        color: e.color.defaultText,
        padding: '7px 15px',
      },
    })),
    S9 = e => e === 'true',
    F9 = ({ name: e, value: t, onChange: r, onBlur: n, onFocus: a }) => {
      let o = ge(() => r(!1), [r])
      if (t === void 0) return h.createElement(Re.Button, { id: mr(e), onClick: o }, 'Set boolean')
      let i = Pe(e),
        u = typeof t == 'string' ? S9(t) : t
      return h.createElement(
        x9,
        { htmlFor: i, title: u ? 'Change to false' : 'Change to true' },
        h.createElement('input', {
          id: i,
          type: 'checkbox',
          onChange: s => r(s.target.checked),
          checked: u,
          name: e,
          onBlur: n,
          onFocus: a,
        }),
        h.createElement('span', null, 'False'),
        h.createElement('span', null, 'True')
      )
    },
    w9 = e => {
      let [t, r, n] = e.split('-'),
        a = new Date()
      return a.setFullYear(parseInt(t, 10), parseInt(r, 10) - 1, parseInt(n, 10)), a
    },
    B9 = e => {
      let [t, r] = e.split(':'),
        n = new Date()
      return n.setHours(parseInt(t, 10)), n.setMinutes(parseInt(r, 10)), n
    },
    T9 = e => {
      let t = new Date(e),
        r = `000${t.getFullYear()}`.slice(-4),
        n = `0${t.getMonth() + 1}`.slice(-2),
        a = `0${t.getDate()}`.slice(-2)
      return `${r}-${n}-${a}`
    },
    _9 = e => {
      let t = new Date(e),
        r = `0${t.getHours()}`.slice(-2),
        n = `0${t.getMinutes()}`.slice(-2)
      return `${r}:${n}`
    },
    O9 = q.div(({ theme: e }) => ({
      flex: 1,
      display: 'flex',
      input: {
        marginLeft: 10,
        flex: 1,
        height: 32,
        '&::-webkit-calendar-picker-indicator': {
          opacity: 0.5,
          height: 12,
          filter: e.base === 'light' ? void 0 : 'invert(1)',
        },
      },
      'input:first-of-type': { marginLeft: 0, flexGrow: 4 },
      'input:last-of-type': { flexGrow: 3 },
    })),
    R9 = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: a }) => {
      let [o, i] = re(!0),
        u = Se(),
        s = Se()
      he(() => {
        o !== !1 &&
          (u && u.current && (u.current.value = T9(t)), s && s.current && (s.current.value = _9(t)))
      }, [t])
      let p = m => {
          let g = w9(m.target.value),
            A = new Date(t)
          A.setFullYear(g.getFullYear(), g.getMonth(), g.getDate())
          let b = A.getTime()
          b && r(b), i(!!b)
        },
        y = m => {
          let g = B9(m.target.value),
            A = new Date(t)
          A.setHours(g.getHours()), A.setMinutes(g.getMinutes())
          let b = A.getTime()
          b && r(b), i(!!b)
        },
        E = Pe(e)
      return h.createElement(
        O9,
        null,
        h.createElement(Re.Input, {
          type: 'date',
          max: '9999-12-31',
          ref: u,
          id: `${E}-date`,
          name: `${E}-date`,
          onChange: p,
          onFocus: n,
          onBlur: a,
        }),
        h.createElement(Re.Input, {
          type: 'time',
          id: `${E}-time`,
          name: `${E}-time`,
          ref: s,
          onChange: y,
          onFocus: n,
          onBlur: a,
        }),
        o ? null : h.createElement('div', null, 'invalid')
      )
    },
    P9 = q.label({ display: 'flex' }),
    I9 = e => {
      let t = parseFloat(e)
      return Number.isNaN(t) ? void 0 : t
    }
  var k9 = ({ name: e, value: t, onChange: r, min: n, max: a, step: o, onBlur: i, onFocus: u }) => {
      let [s, p] = re(typeof t == 'number' ? t : ''),
        [y, E] = re(!1),
        [m, g] = re(null),
        A = ge(
          F => {
            p(F.target.value)
            let B = parseFloat(F.target.value)
            Number.isNaN(B) ? g(new Error(`'${F.target.value}' is not a number`)) : (r(B), g(null))
          },
          [r, g]
        ),
        b = ge(() => {
          p('0'), r(0), E(!0)
        }, [E]),
        x = Se(null)
      return (
        he(() => {
          y && x.current && x.current.select()
        }, [y]),
        he(() => {
          s !== (typeof t == 'number' ? t : '') && p(t)
        }, [t]),
        !y && t === void 0
          ? h.createElement(Re.Button, { id: mr(e), onClick: b }, 'Set number')
          : h.createElement(
              P9,
              null,
              h.createElement(Re.Input, {
                ref: x,
                id: Pe(e),
                type: 'number',
                onChange: A,
                size: 'flex',
                placeholder: 'Edit number...',
                value: s,
                valid: m ? 'error' : null,
                autoFocus: y,
                name: e,
                min: n,
                max: a,
                step: o,
                onFocus: u,
                onBlur: i,
              })
            )
      )
    },
    qy = (e, t) => {
      let r = t && Object.entries(t).find(([n, a]) => a === e)
      return r ? r[0] : void 0
    },
    uu = (e, t) =>
      e && t
        ? Object.entries(t)
            .filter(r => e.includes(r[1]))
            .map(r => r[0])
        : [],
    jy = (e, t) => e && t && e.map(r => t[r]),
    N9 = q.div(({ isInline: e }) =>
      e
        ? {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            label: { display: 'inline-flex', marginRight: 15 },
          }
        : { label: { display: 'flex' } }
    ),
    L9 = q.span({}),
    M9 = q.label({
      lineHeight: '20px',
      alignItems: 'center',
      marginBottom: 8,
      '&:last-child': { marginBottom: 0 },
      input: { margin: 0, marginRight: 6 },
    }),
    Ey = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
      if (!t)
        return Ve.warn(`Checkbox with no options: ${e}`), h.createElement(h.Fragment, null, '-')
      let o = uu(r, t),
        [i, u] = re(o),
        s = y => {
          let E = y.target.value,
            m = [...i]
          m.includes(E) ? m.splice(m.indexOf(E), 1) : m.push(E), n(jy(m, t)), u(m)
        }
      he(() => {
        u(uu(r, t))
      }, [r])
      let p = Pe(e)
      return h.createElement(
        N9,
        { isInline: a },
        Object.keys(t).map((y, E) => {
          let m = `${p}-${E}`
          return h.createElement(
            M9,
            { key: m, htmlFor: m },
            h.createElement('input', {
              type: 'checkbox',
              id: m,
              name: m,
              value: y,
              onChange: s,
              checked: i?.includes(y),
            }),
            h.createElement(L9, null, y)
          )
        })
      )
    },
    q9 = q.div(({ isInline: e }) =>
      e
        ? {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            label: { display: 'inline-flex', marginRight: 15 },
          }
        : { label: { display: 'flex' } }
    ),
    j9 = q.span({}),
    $9 = q.label({
      lineHeight: '20px',
      alignItems: 'center',
      marginBottom: 8,
      '&:last-child': { marginBottom: 0 },
      input: { margin: 0, marginRight: 6 },
    }),
    Ay = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
      if (!t) return Ve.warn(`Radio with no options: ${e}`), h.createElement(h.Fragment, null, '-')
      let o = qy(r, t),
        i = Pe(e)
      return h.createElement(
        q9,
        { isInline: a },
        Object.keys(t).map((u, s) => {
          let p = `${i}-${s}`
          return h.createElement(
            $9,
            { key: p, htmlFor: p },
            h.createElement('input', {
              type: 'radio',
              id: p,
              name: p,
              value: u,
              onChange: y => n(t[y.currentTarget.value]),
              checked: u === o,
            }),
            h.createElement(j9, null, u)
          )
        })
      )
    },
    H9 = {
      appearance: 'none',
      border: '0 none',
      boxSizing: 'inherit',
      display: ' block',
      margin: ' 0',
      background: 'transparent',
      padding: 0,
      fontSize: 'inherit',
      position: 'relative',
    },
    $y = q.select(({ theme: e }) => ({
      ...H9,
      boxSizing: 'border-box',
      position: 'relative',
      padding: '6px 10px',
      width: '100%',
      color: e.input.color || 'inherit',
      background: e.input.background,
      borderRadius: e.input.borderRadius,
      boxShadow: `${e.input.border} 0 0 0 1px inset`,
      fontSize: e.typography.size.s2 - 1,
      lineHeight: '20px',
      '&:focus': { boxShadow: `${e.color.secondary} 0 0 0 1px inset`, outline: 'none' },
      '&[disabled]': { cursor: 'not-allowed', opacity: 0.5 },
      '::placeholder': { color: e.textMutedColor },
      '&[multiple]': {
        overflow: 'auto',
        padding: 0,
        option: { display: 'block', padding: '6px 10px', marginLeft: 1, marginRight: 1 },
      },
    })),
    Hy = q.span(({ theme: e }) => ({
      display: 'inline-block',
      lineHeight: 'normal',
      overflow: 'hidden',
      position: 'relative',
      verticalAlign: 'top',
      width: '100%',
      svg: {
        position: 'absolute',
        zIndex: 1,
        pointerEvents: 'none',
        height: '12px',
        marginTop: '-6px',
        right: '12px',
        top: '50%',
        fill: e.textMutedColor,
        path: { fill: e.textMutedColor },
      },
    })),
    vy = 'Choose option...',
    U9 = ({ name: e, value: t, options: r, onChange: n }) => {
      let a = u => {
          n(r[u.currentTarget.value])
        },
        o = qy(t, r) || vy,
        i = Pe(e)
      return h.createElement(
        Hy,
        null,
        h.createElement(Oe, { icon: 'arrowdown' }),
        h.createElement(
          $y,
          { id: i, value: o, onChange: a },
          h.createElement('option', { key: 'no-selection', disabled: !0 }, vy),
          Object.keys(r).map(u => h.createElement('option', { key: u, value: u }, u))
        )
      )
    },
    z9 = ({ name: e, value: t, options: r, onChange: n }) => {
      let a = u => {
          let s = Array.from(u.currentTarget.options)
            .filter(p => p.selected)
            .map(p => p.value)
          n(jy(s, r))
        },
        o = uu(t, r),
        i = Pe(e)
      return h.createElement(
        Hy,
        null,
        h.createElement(
          $y,
          { id: i, multiple: !0, value: o, onChange: a },
          Object.keys(r).map(u => h.createElement('option', { key: u, value: u }, u))
        )
      )
    },
    Dy = e => {
      let { name: t, options: r } = e
      return r
        ? e.isMulti
          ? h.createElement(z9, { ...e })
          : h.createElement(U9, { ...e })
        : (Ve.warn(`Select with no options: ${t}`), h.createElement(h.Fragment, null, '-'))
    },
    G9 = (e, t) =>
      Array.isArray(e) ? e.reduce((r, n) => ((r[t?.[n] || String(n)] = n), r), {}) : e,
    W9 = {
      check: Ey,
      'inline-check': Ey,
      radio: Ay,
      'inline-radio': Ay,
      select: Dy,
      'multi-select': Dy,
    },
    dr = e => {
      let { type: t = 'select', labels: r, argType: n } = e,
        a = {
          ...e,
          options: n ? G9(n.options, r) : {},
          isInline: t.includes('inline'),
          isMulti: t.includes('multi'),
        },
        o = W9[t]
      if (o) return h.createElement(o, { ...a })
      throw new Error(`Unknown options type: ${t}`)
    },
    hu = 'value',
    V9 = 'key',
    K9 = 'Error',
    Y9 = 'Object',
    X9 = 'Array',
    J9 = 'String',
    Q9 = 'Number',
    Z9 = 'Boolean',
    eP = 'Date',
    tP = 'Null',
    rP = 'Undefined',
    nP = 'Function',
    aP = 'Symbol',
    Uy = 'ADD_DELTA_TYPE',
    zy = 'REMOVE_DELTA_TYPE',
    Gy = 'UPDATE_DELTA_TYPE'
  function yt(e) {
    return e !== null &&
      typeof e == 'object' &&
      !Array.isArray(e) &&
      typeof e[Symbol.iterator] == 'function'
      ? 'Iterable'
      : Object.prototype.toString.call(e).slice(8, -1)
  }
  function Wy(e, t) {
    let r = yt(e),
      n = yt(t)
    return (r === 'Function' || n === 'Function') && n !== r
  }
  var mu = class extends et {
    constructor(e) {
      super(e),
        (this.state = { inputRefKey: null, inputRefValue: null }),
        (this.refInputValue = this.refInputValue.bind(this)),
        (this.refInputKey = this.refInputKey.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this)),
        (this.onSubmit = this.onSubmit.bind(this))
    }
    componentDidMount() {
      let { inputRefKey: e, inputRefValue: t } = this.state,
        { onlyValue: r } = this.props
      e && typeof e.focus == 'function' && e.focus(),
        r && t && typeof t.focus == 'function' && t.focus(),
        document.addEventListener('keydown', this.onKeydown)
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeydown)
    }
    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === 'Enter' || e.key === 'Enter') && (e.preventDefault(), this.onSubmit()),
        (e.code === 'Escape' || e.key === 'Escape') &&
          (e.preventDefault(), this.props.handleCancel()))
    }
    onSubmit() {
      let { handleAdd: e, onlyValue: t, onSubmitValueParser: r, keyPath: n, deep: a } = this.props,
        { inputRefKey: o, inputRefValue: i } = this.state,
        u = {}
      if (!t) {
        if (!o.value) return
        u.key = o.value
      }
      ;(u.newValue = r(!1, n, a, u.key, i.value)), e(u)
    }
    refInputKey(e) {
      this.state.inputRefKey = e
    }
    refInputValue(e) {
      this.state.inputRefValue = e
    }
    render() {
      let {
          handleCancel: e,
          onlyValue: t,
          addButtonElement: r,
          cancelButtonElement: n,
          inputElementGenerator: a,
          keyPath: o,
          deep: i,
        } = this.props,
        u = me(r, { onClick: this.onSubmit }),
        s = me(n, { onClick: e }),
        p = a(hu, o, i),
        y = me(p, { placeholder: 'Value', ref: this.refInputValue }),
        E = null
      if (!t) {
        let m = a(V9, o, i)
        E = me(m, { placeholder: 'Key', ref: this.refInputKey })
      }
      return h.createElement('span', { className: 'rejt-add-value-node' }, E, y, s, u)
    }
  }
  mu.defaultProps = {
    onlyValue: !1,
    addButtonElement: h.createElement('button', null, '+'),
    cancelButtonElement: h.createElement('button', null, 'c'),
  }
  var Vy = class extends et {
    constructor(e) {
      super(e)
      let t = [...e.keyPath, e.name]
      ;(this.state = {
        data: e.data,
        name: e.name,
        keyPath: t,
        deep: e.deep,
        nextDeep: e.deep + 1,
        collapsed: e.isCollapsed(t, e.deep, e.data),
        addFormVisible: !1,
      }),
        (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
        (this.handleRemoveItem = this.handleRemoveItem.bind(this)),
        (this.handleAddMode = this.handleAddMode.bind(this)),
        (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
        (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
        (this.handleEditValue = this.handleEditValue.bind(this)),
        (this.onChildUpdate = this.onChildUpdate.bind(this)),
        (this.renderCollapsed = this.renderCollapsed.bind(this)),
        (this.renderNotCollapsed = this.renderNotCollapsed.bind(this))
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? { data: e.data } : null
    }
    onChildUpdate(e, t) {
      let { data: r, keyPath: n } = this.state
      ;(r[e] = t), this.setState({ data: r })
      let { onUpdate: a } = this.props,
        o = n.length
      a(n[o - 1], r)
    }
    handleAddMode() {
      this.setState({ addFormVisible: !0 })
    }
    handleCollapseMode() {
      this.setState(e => ({ collapsed: !e.collapsed }))
    }
    handleRemoveItem(e) {
      return () => {
        let { beforeRemoveAction: t, logger: r } = this.props,
          { data: n, keyPath: a, nextDeep: o } = this.state,
          i = n[e]
        t(e, a, o, i)
          .then(() => {
            let u = { keyPath: a, deep: o, key: e, oldValue: i, type: zy }
            n.splice(e, 1), this.setState({ data: n })
            let { onUpdate: s, onDeltaUpdate: p } = this.props
            s(a[a.length - 1], n), p(u)
          })
          .catch(r.error)
      }
    }
    handleAddValueAdd({ newValue: e }) {
      let { data: t, keyPath: r, nextDeep: n } = this.state,
        { beforeAddAction: a, logger: o } = this.props
      a(t.length, r, n, e)
        .then(() => {
          let i = [...t, e]
          this.setState({ data: i }), this.handleAddValueCancel()
          let { onUpdate: u, onDeltaUpdate: s } = this.props
          u(r[r.length - 1], i),
            s({ type: Uy, keyPath: r, deep: n, key: i.length - 1, newValue: e })
        })
        .catch(o.error)
    }
    handleAddValueCancel() {
      this.setState({ addFormVisible: !1 })
    }
    handleEditValue({ key: e, value: t }) {
      return new Promise((r, n) => {
        let { beforeUpdateAction: a } = this.props,
          { data: o, keyPath: i, nextDeep: u } = this.state,
          s = o[e]
        a(e, i, u, s, t)
          .then(() => {
            ;(o[e] = t), this.setState({ data: o })
            let { onUpdate: p, onDeltaUpdate: y } = this.props
            p(i[i.length - 1], o),
              y({ type: Gy, keyPath: i, deep: u, key: e, newValue: t, oldValue: s }),
              r(void 0)
          })
          .catch(n)
      })
    }
    renderCollapsed() {
      let { name: e, data: t, keyPath: r, deep: n } = this.state,
        {
          handleRemove: a,
          readOnly: o,
          getStyle: i,
          dataType: u,
          minusMenuElement: s,
        } = this.props,
        { minus: p, collapsed: y } = i(e, t, r, n, u),
        E = o(e, t, r, n, u),
        m = me(s, { onClick: a, className: 'rejt-minus-menu', style: p })
      return h.createElement(
        'span',
        { className: 'rejt-collapsed' },
        h.createElement(
          'span',
          { className: 'rejt-collapsed-text', style: y, onClick: this.handleCollapseMode },
          '[...] ',
          t.length,
          ' ',
          t.length === 1 ? 'item' : 'items'
        ),
        !E && m
      )
    }
    renderNotCollapsed() {
      let { name: e, data: t, keyPath: r, deep: n, addFormVisible: a, nextDeep: o } = this.state,
        {
          isCollapsed: i,
          handleRemove: u,
          onDeltaUpdate: s,
          readOnly: p,
          getStyle: y,
          dataType: E,
          addButtonElement: m,
          cancelButtonElement: g,
          editButtonElement: A,
          inputElementGenerator: b,
          textareaElementGenerator: x,
          minusMenuElement: F,
          plusMenuElement: B,
          beforeRemoveAction: I,
          beforeAddAction: M,
          beforeUpdateAction: w,
          logger: N,
          onSubmitValueParser: k,
        } = this.props,
        { minus: U, plus: V, delimiter: H, ul: oe, addForm: X } = y(e, t, r, n, E),
        Y = p(e, t, r, n, E),
        R = me(B, { onClick: this.handleAddMode, className: 'rejt-plus-menu', style: V }),
        _ = me(F, { onClick: u, className: 'rejt-minus-menu', style: U }),
        j = !0,
        G = '[',
        J = ']'
      return h.createElement(
        'span',
        { className: 'rejt-not-collapsed' },
        h.createElement('span', { className: 'rejt-not-collapsed-delimiter', style: H }, G),
        !a && R,
        h.createElement(
          'ul',
          { className: 'rejt-not-collapsed-list', style: oe },
          t.map((K, Z) =>
            h.createElement(Ea, {
              key: Z,
              name: Z.toString(),
              data: K,
              keyPath: r,
              deep: o,
              isCollapsed: i,
              handleRemove: this.handleRemoveItem(Z),
              handleUpdateValue: this.handleEditValue,
              onUpdate: this.onChildUpdate,
              onDeltaUpdate: s,
              readOnly: p,
              getStyle: y,
              addButtonElement: m,
              cancelButtonElement: g,
              editButtonElement: A,
              inputElementGenerator: b,
              textareaElementGenerator: x,
              minusMenuElement: F,
              plusMenuElement: B,
              beforeRemoveAction: I,
              beforeAddAction: M,
              beforeUpdateAction: w,
              logger: N,
              onSubmitValueParser: k,
            })
          )
        ),
        !Y &&
          a &&
          h.createElement(
            'div',
            { className: 'rejt-add-form', style: X },
            h.createElement(mu, {
              handleAdd: this.handleAddValueAdd,
              handleCancel: this.handleAddValueCancel,
              onlyValue: j,
              addButtonElement: m,
              cancelButtonElement: g,
              inputElementGenerator: b,
              keyPath: r,
              deep: n,
              onSubmitValueParser: k,
            })
          ),
        h.createElement('span', { className: 'rejt-not-collapsed-delimiter', style: H }, J),
        !Y && _
      )
    }
    render() {
      let { name: e, collapsed: t, data: r, keyPath: n, deep: a } = this.state,
        { dataType: o, getStyle: i } = this.props,
        u = t ? this.renderCollapsed() : this.renderNotCollapsed(),
        s = i(e, r, n, a, o)
      return h.createElement(
        'div',
        { className: 'rejt-array-node' },
        h.createElement(
          'span',
          { onClick: this.handleCollapseMode },
          h.createElement('span', { className: 'rejt-name', style: s.name }, e, ' :', ' ')
        ),
        u
      )
    }
  }
  Vy.defaultProps = {
    keyPath: [],
    deep: 0,
    minusMenuElement: h.createElement('span', null, ' - '),
    plusMenuElement: h.createElement('span', null, ' + '),
  }
  var Ky = class extends et {
    constructor(e) {
      super(e)
      let t = [...e.keyPath, e.name]
      ;(this.state = {
        value: e.value,
        name: e.name,
        keyPath: t,
        deep: e.deep,
        editEnabled: !1,
        inputRef: null,
      }),
        (this.handleEditMode = this.handleEditMode.bind(this)),
        (this.refInput = this.refInput.bind(this)),
        (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
        (this.handleEdit = this.handleEdit.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this))
    }
    static getDerivedStateFromProps(e, t) {
      return e.value !== t.value ? { value: e.value } : null
    }
    componentDidUpdate() {
      let { editEnabled: e, inputRef: t, name: r, value: n, keyPath: a, deep: o } = this.state,
        { readOnly: i, dataType: u } = this.props,
        s = i(r, n, a, o, u)
      e && !s && typeof t.focus == 'function' && t.focus()
    }
    componentDidMount() {
      document.addEventListener('keydown', this.onKeydown)
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeydown)
    }
    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === 'Enter' || e.key === 'Enter') && (e.preventDefault(), this.handleEdit()),
        (e.code === 'Escape' || e.key === 'Escape') &&
          (e.preventDefault(), this.handleCancelEdit()))
    }
    handleEdit() {
      let {
          handleUpdateValue: e,
          originalValue: t,
          logger: r,
          onSubmitValueParser: n,
          keyPath: a,
        } = this.props,
        { inputRef: o, name: i, deep: u } = this.state
      if (!o) return
      let s = n(!0, a, u, i, o.value)
      e({ value: s, key: i })
        .then(() => {
          Wy(t, s) || this.handleCancelEdit()
        })
        .catch(r.error)
    }
    handleEditMode() {
      this.setState({ editEnabled: !0 })
    }
    refInput(e) {
      this.state.inputRef = e
    }
    handleCancelEdit() {
      this.setState({ editEnabled: !1 })
    }
    render() {
      let { name: e, value: t, editEnabled: r, keyPath: n, deep: a } = this.state,
        {
          handleRemove: o,
          originalValue: i,
          readOnly: u,
          dataType: s,
          getStyle: p,
          editButtonElement: y,
          cancelButtonElement: E,
          textareaElementGenerator: m,
          minusMenuElement: g,
          keyPath: A,
        } = this.props,
        b = p(e, i, n, a, s),
        x = null,
        F = null,
        B = u(e, i, n, a, s)
      if (r && !B) {
        let I = m(hu, A, a, e, i, s),
          M = me(y, { onClick: this.handleEdit }),
          w = me(E, { onClick: this.handleCancelEdit }),
          N = me(I, { ref: this.refInput, defaultValue: i })
        ;(x = h.createElement(
          'span',
          { className: 'rejt-edit-form', style: b.editForm },
          N,
          ' ',
          w,
          M
        )),
          (F = null)
      } else {
        x = h.createElement(
          'span',
          { className: 'rejt-value', style: b.value, onClick: B ? null : this.handleEditMode },
          t
        )
        let I = me(g, { onClick: o, className: 'rejt-minus-menu', style: b.minus })
        F = B ? null : I
      }
      return h.createElement(
        'li',
        { className: 'rejt-function-value-node', style: b.li },
        h.createElement('span', { className: 'rejt-name', style: b.name }, e, ' :', ' '),
        x,
        F
      )
    }
  }
  Ky.defaultProps = {
    keyPath: [],
    deep: 0,
    handleUpdateValue: () => {},
    editButtonElement: h.createElement('button', null, 'e'),
    cancelButtonElement: h.createElement('button', null, 'c'),
    minusMenuElement: h.createElement('span', null, ' - '),
  }
  var Ea = class extends et {
    constructor(e) {
      super(e), (this.state = { data: e.data, name: e.name, keyPath: e.keyPath, deep: e.deep })
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? { data: e.data } : null
    }
    render() {
      let { data: e, name: t, keyPath: r, deep: n } = this.state,
        {
          isCollapsed: a,
          handleRemove: o,
          handleUpdateValue: i,
          onUpdate: u,
          onDeltaUpdate: s,
          readOnly: p,
          getStyle: y,
          addButtonElement: E,
          cancelButtonElement: m,
          editButtonElement: g,
          inputElementGenerator: A,
          textareaElementGenerator: b,
          minusMenuElement: x,
          plusMenuElement: F,
          beforeRemoveAction: B,
          beforeAddAction: I,
          beforeUpdateAction: M,
          logger: w,
          onSubmitValueParser: N,
        } = this.props,
        k = () => !0,
        U = yt(e)
      switch (U) {
        case K9:
          return h.createElement(su, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: o,
            onUpdate: u,
            onDeltaUpdate: s,
            readOnly: k,
            dataType: U,
            getStyle: y,
            addButtonElement: E,
            cancelButtonElement: m,
            editButtonElement: g,
            inputElementGenerator: A,
            textareaElementGenerator: b,
            minusMenuElement: x,
            plusMenuElement: F,
            beforeRemoveAction: B,
            beforeAddAction: I,
            beforeUpdateAction: M,
            logger: w,
            onSubmitValueParser: N,
          })
        case Y9:
          return h.createElement(su, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: o,
            onUpdate: u,
            onDeltaUpdate: s,
            readOnly: p,
            dataType: U,
            getStyle: y,
            addButtonElement: E,
            cancelButtonElement: m,
            editButtonElement: g,
            inputElementGenerator: A,
            textareaElementGenerator: b,
            minusMenuElement: x,
            plusMenuElement: F,
            beforeRemoveAction: B,
            beforeAddAction: I,
            beforeUpdateAction: M,
            logger: w,
            onSubmitValueParser: N,
          })
        case X9:
          return h.createElement(Vy, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: o,
            onUpdate: u,
            onDeltaUpdate: s,
            readOnly: p,
            dataType: U,
            getStyle: y,
            addButtonElement: E,
            cancelButtonElement: m,
            editButtonElement: g,
            inputElementGenerator: A,
            textareaElementGenerator: b,
            minusMenuElement: x,
            plusMenuElement: F,
            beforeRemoveAction: B,
            beforeAddAction: I,
            beforeUpdateAction: M,
            logger: w,
            onSubmitValueParser: N,
          })
        case J9:
          return h.createElement(gt, {
            name: t,
            value: `"${e}"`,
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: p,
            dataType: U,
            getStyle: y,
            cancelButtonElement: m,
            editButtonElement: g,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: N,
          })
        case Q9:
          return h.createElement(gt, {
            name: t,
            value: e,
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: p,
            dataType: U,
            getStyle: y,
            cancelButtonElement: m,
            editButtonElement: g,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: N,
          })
        case Z9:
          return h.createElement(gt, {
            name: t,
            value: e ? 'true' : 'false',
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: p,
            dataType: U,
            getStyle: y,
            cancelButtonElement: m,
            editButtonElement: g,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: N,
          })
        case eP:
          return h.createElement(gt, {
            name: t,
            value: e.toISOString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: k,
            dataType: U,
            getStyle: y,
            cancelButtonElement: m,
            editButtonElement: g,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: N,
          })
        case tP:
          return h.createElement(gt, {
            name: t,
            value: 'null',
            originalValue: 'null',
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: p,
            dataType: U,
            getStyle: y,
            cancelButtonElement: m,
            editButtonElement: g,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: N,
          })
        case rP:
          return h.createElement(gt, {
            name: t,
            value: 'undefined',
            originalValue: 'undefined',
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: p,
            dataType: U,
            getStyle: y,
            cancelButtonElement: m,
            editButtonElement: g,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: N,
          })
        case nP:
          return h.createElement(Ky, {
            name: t,
            value: e.toString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: p,
            dataType: U,
            getStyle: y,
            cancelButtonElement: m,
            editButtonElement: g,
            textareaElementGenerator: b,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: N,
          })
        case aP:
          return h.createElement(gt, {
            name: t,
            value: e.toString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: k,
            dataType: U,
            getStyle: y,
            cancelButtonElement: m,
            editButtonElement: g,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: N,
          })
        default:
          return null
      }
    }
  }
  Ea.defaultProps = { keyPath: [], deep: 0 }
  var su = class extends et {
    constructor(e) {
      super(e)
      let t = e.deep === -1 ? [] : [...e.keyPath, e.name]
      ;(this.state = {
        name: e.name,
        data: e.data,
        keyPath: t,
        deep: e.deep,
        nextDeep: e.deep + 1,
        collapsed: e.isCollapsed(t, e.deep, e.data),
        addFormVisible: !1,
      }),
        (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
        (this.handleRemoveValue = this.handleRemoveValue.bind(this)),
        (this.handleAddMode = this.handleAddMode.bind(this)),
        (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
        (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
        (this.handleEditValue = this.handleEditValue.bind(this)),
        (this.onChildUpdate = this.onChildUpdate.bind(this)),
        (this.renderCollapsed = this.renderCollapsed.bind(this)),
        (this.renderNotCollapsed = this.renderNotCollapsed.bind(this))
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? { data: e.data } : null
    }
    onChildUpdate(e, t) {
      let { data: r, keyPath: n } = this.state
      ;(r[e] = t), this.setState({ data: r })
      let { onUpdate: a } = this.props,
        o = n.length
      a(n[o - 1], r)
    }
    handleAddMode() {
      this.setState({ addFormVisible: !0 })
    }
    handleAddValueCancel() {
      this.setState({ addFormVisible: !1 })
    }
    handleAddValueAdd({ key: e, newValue: t }) {
      let { data: r, keyPath: n, nextDeep: a } = this.state,
        { beforeAddAction: o, logger: i } = this.props
      o(e, n, a, t)
        .then(() => {
          ;(r[e] = t), this.setState({ data: r }), this.handleAddValueCancel()
          let { onUpdate: u, onDeltaUpdate: s } = this.props
          u(n[n.length - 1], r), s({ type: Uy, keyPath: n, deep: a, key: e, newValue: t })
        })
        .catch(i.error)
    }
    handleRemoveValue(e) {
      return () => {
        let { beforeRemoveAction: t, logger: r } = this.props,
          { data: n, keyPath: a, nextDeep: o } = this.state,
          i = n[e]
        t(e, a, o, i)
          .then(() => {
            let u = { keyPath: a, deep: o, key: e, oldValue: i, type: zy }
            delete n[e], this.setState({ data: n })
            let { onUpdate: s, onDeltaUpdate: p } = this.props
            s(a[a.length - 1], n), p(u)
          })
          .catch(r.error)
      }
    }
    handleCollapseMode() {
      this.setState(e => ({ collapsed: !e.collapsed }))
    }
    handleEditValue({ key: e, value: t }) {
      return new Promise((r, n) => {
        let { beforeUpdateAction: a } = this.props,
          { data: o, keyPath: i, nextDeep: u } = this.state,
          s = o[e]
        a(e, i, u, s, t)
          .then(() => {
            ;(o[e] = t), this.setState({ data: o })
            let { onUpdate: p, onDeltaUpdate: y } = this.props
            p(i[i.length - 1], o),
              y({ type: Gy, keyPath: i, deep: u, key: e, newValue: t, oldValue: s }),
              r()
          })
          .catch(n)
      })
    }
    renderCollapsed() {
      let { name: e, keyPath: t, deep: r, data: n } = this.state,
        {
          handleRemove: a,
          readOnly: o,
          dataType: i,
          getStyle: u,
          minusMenuElement: s,
        } = this.props,
        { minus: p, collapsed: y } = u(e, n, t, r, i),
        E = Object.getOwnPropertyNames(n),
        m = o(e, n, t, r, i),
        g = me(s, { onClick: a, className: 'rejt-minus-menu', style: p })
      return h.createElement(
        'span',
        { className: 'rejt-collapsed' },
        h.createElement(
          'span',
          { className: 'rejt-collapsed-text', style: y, onClick: this.handleCollapseMode },
          '{...}',
          ' ',
          E.length,
          ' ',
          E.length === 1 ? 'key' : 'keys'
        ),
        !m && g
      )
    }
    renderNotCollapsed() {
      let { name: e, data: t, keyPath: r, deep: n, nextDeep: a, addFormVisible: o } = this.state,
        {
          isCollapsed: i,
          handleRemove: u,
          onDeltaUpdate: s,
          readOnly: p,
          getStyle: y,
          dataType: E,
          addButtonElement: m,
          cancelButtonElement: g,
          editButtonElement: A,
          inputElementGenerator: b,
          textareaElementGenerator: x,
          minusMenuElement: F,
          plusMenuElement: B,
          beforeRemoveAction: I,
          beforeAddAction: M,
          beforeUpdateAction: w,
          logger: N,
          onSubmitValueParser: k,
        } = this.props,
        { minus: U, plus: V, addForm: H, ul: oe, delimiter: X } = y(e, t, r, n, E),
        Y = Object.getOwnPropertyNames(t),
        R = p(e, t, r, n, E),
        _ = me(B, { onClick: this.handleAddMode, className: 'rejt-plus-menu', style: V }),
        j = me(F, { onClick: u, className: 'rejt-minus-menu', style: U }),
        G = Y.map(Z =>
          h.createElement(Ea, {
            key: Z,
            name: Z,
            data: t[Z],
            keyPath: r,
            deep: a,
            isCollapsed: i,
            handleRemove: this.handleRemoveValue(Z),
            handleUpdateValue: this.handleEditValue,
            onUpdate: this.onChildUpdate,
            onDeltaUpdate: s,
            readOnly: p,
            getStyle: y,
            addButtonElement: m,
            cancelButtonElement: g,
            editButtonElement: A,
            inputElementGenerator: b,
            textareaElementGenerator: x,
            minusMenuElement: F,
            plusMenuElement: B,
            beforeRemoveAction: I,
            beforeAddAction: M,
            beforeUpdateAction: w,
            logger: N,
            onSubmitValueParser: k,
          })
        ),
        J = '{',
        K = '}'
      return h.createElement(
        'span',
        { className: 'rejt-not-collapsed' },
        h.createElement('span', { className: 'rejt-not-collapsed-delimiter', style: X }, J),
        !R && _,
        h.createElement('ul', { className: 'rejt-not-collapsed-list', style: oe }, G),
        !R &&
          o &&
          h.createElement(
            'div',
            { className: 'rejt-add-form', style: H },
            h.createElement(mu, {
              handleAdd: this.handleAddValueAdd,
              handleCancel: this.handleAddValueCancel,
              addButtonElement: m,
              cancelButtonElement: g,
              inputElementGenerator: b,
              keyPath: r,
              deep: n,
              onSubmitValueParser: k,
            })
          ),
        h.createElement('span', { className: 'rejt-not-collapsed-delimiter', style: X }, K),
        !R && j
      )
    }
    render() {
      let { name: e, collapsed: t, data: r, keyPath: n, deep: a } = this.state,
        { getStyle: o, dataType: i } = this.props,
        u = t ? this.renderCollapsed() : this.renderNotCollapsed(),
        s = o(e, r, n, a, i)
      return h.createElement(
        'div',
        { className: 'rejt-object-node' },
        h.createElement(
          'span',
          { onClick: this.handleCollapseMode },
          h.createElement('span', { className: 'rejt-name', style: s.name }, e, ' :', ' ')
        ),
        u
      )
    }
  }
  su.defaultProps = {
    keyPath: [],
    deep: 0,
    minusMenuElement: h.createElement('span', null, ' - '),
    plusMenuElement: h.createElement('span', null, ' + '),
  }
  var gt = class extends et {
    constructor(e) {
      super(e)
      let t = [...e.keyPath, e.name]
      ;(this.state = {
        value: e.value,
        name: e.name,
        keyPath: t,
        deep: e.deep,
        editEnabled: !1,
        inputRef: null,
      }),
        (this.handleEditMode = this.handleEditMode.bind(this)),
        (this.refInput = this.refInput.bind(this)),
        (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
        (this.handleEdit = this.handleEdit.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this))
    }
    static getDerivedStateFromProps(e, t) {
      return e.value !== t.value ? { value: e.value } : null
    }
    componentDidUpdate() {
      let { editEnabled: e, inputRef: t, name: r, value: n, keyPath: a, deep: o } = this.state,
        { readOnly: i, dataType: u } = this.props,
        s = i(r, n, a, o, u)
      e && !s && typeof t.focus == 'function' && t.focus()
    }
    componentDidMount() {
      document.addEventListener('keydown', this.onKeydown)
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeydown)
    }
    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === 'Enter' || e.key === 'Enter') && (e.preventDefault(), this.handleEdit()),
        (e.code === 'Escape' || e.key === 'Escape') &&
          (e.preventDefault(), this.handleCancelEdit()))
    }
    handleEdit() {
      let {
          handleUpdateValue: e,
          originalValue: t,
          logger: r,
          onSubmitValueParser: n,
          keyPath: a,
        } = this.props,
        { inputRef: o, name: i, deep: u } = this.state
      if (!o) return
      let s = n(!0, a, u, i, o.value)
      e({ value: s, key: i })
        .then(() => {
          Wy(t, s) || this.handleCancelEdit()
        })
        .catch(r.error)
    }
    handleEditMode() {
      this.setState({ editEnabled: !0 })
    }
    refInput(e) {
      this.state.inputRef = e
    }
    handleCancelEdit() {
      this.setState({ editEnabled: !1 })
    }
    render() {
      let { name: e, value: t, editEnabled: r, keyPath: n, deep: a } = this.state,
        {
          handleRemove: o,
          originalValue: i,
          readOnly: u,
          dataType: s,
          getStyle: p,
          editButtonElement: y,
          cancelButtonElement: E,
          inputElementGenerator: m,
          minusMenuElement: g,
          keyPath: A,
        } = this.props,
        b = p(e, i, n, a, s),
        x = u(e, i, n, a, s),
        F = r && !x,
        B = m(hu, A, a, e, i, s),
        I = me(y, { onClick: this.handleEdit }),
        M = me(E, { onClick: this.handleCancelEdit }),
        w = me(B, { ref: this.refInput, defaultValue: JSON.stringify(i) }),
        N = me(g, { onClick: o, className: 'rejt-minus-menu', style: b.minus })
      return h.createElement(
        'li',
        { className: 'rejt-value-node', style: b.li },
        h.createElement('span', { className: 'rejt-name', style: b.name }, e, ' : '),
        F
          ? h.createElement(
              'span',
              { className: 'rejt-edit-form', style: b.editForm },
              w,
              ' ',
              M,
              I
            )
          : h.createElement(
              'span',
              { className: 'rejt-value', style: b.value, onClick: x ? null : this.handleEditMode },
              String(t)
            ),
        !x && !F && N
      )
    }
  }
  gt.defaultProps = {
    keyPath: [],
    deep: 0,
    handleUpdateValue: () => Promise.resolve(),
    editButtonElement: h.createElement('button', null, 'e'),
    cancelButtonElement: h.createElement('button', null, 'c'),
    minusMenuElement: h.createElement('span', null, ' - '),
  }
  var oP = {
      minus: { color: 'red' },
      plus: { color: 'green' },
      collapsed: { color: 'grey' },
      delimiter: {},
      ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
      name: { color: '#2287CD' },
      addForm: {},
    },
    iP = {
      minus: { color: 'red' },
      plus: { color: 'green' },
      collapsed: { color: 'grey' },
      delimiter: {},
      ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
      name: { color: '#2287CD' },
      addForm: {},
    },
    uP = {
      minus: { color: 'red' },
      editForm: {},
      value: { color: '#7bba3d' },
      li: { minHeight: '22px', lineHeight: '22px', outline: '0px' },
      name: { color: '#2287CD' },
    }
  function sP(e) {
    let t = e
    if (t.indexOf('function') === 0) return (0, eval)(`(${t})`)
    try {
      t = JSON.parse(e)
    } catch {}
    return t
  }
  var Yy = class extends et {
    constructor(e) {
      super(e),
        (this.state = { data: e.data, rootName: e.rootName }),
        (this.onUpdate = this.onUpdate.bind(this)),
        (this.removeRoot = this.removeRoot.bind(this))
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data || e.rootName !== t.rootName
        ? { data: e.data, rootName: e.rootName }
        : null
    }
    onUpdate(e, t) {
      this.setState({ data: t }), this.props.onFullyUpdate(t)
    }
    removeRoot() {
      this.onUpdate(null, null)
    }
    render() {
      let { data: e, rootName: t } = this.state,
        {
          isCollapsed: r,
          onDeltaUpdate: n,
          readOnly: a,
          getStyle: o,
          addButtonElement: i,
          cancelButtonElement: u,
          editButtonElement: s,
          inputElement: p,
          textareaElement: y,
          minusMenuElement: E,
          plusMenuElement: m,
          beforeRemoveAction: g,
          beforeAddAction: A,
          beforeUpdateAction: b,
          logger: x,
          onSubmitValueParser: F,
          fallback: B = null,
        } = this.props,
        I = yt(e),
        M = a
      yt(a) === 'Boolean' && (M = () => a)
      let w = p
      p && yt(p) !== 'Function' && (w = () => p)
      let N = y
      return (
        y && yt(y) !== 'Function' && (N = () => y),
        I === 'Object' || I === 'Array'
          ? h.createElement(
              'div',
              { className: 'rejt-tree' },
              h.createElement(Ea, {
                data: e,
                name: t,
                deep: -1,
                isCollapsed: r,
                onUpdate: this.onUpdate,
                onDeltaUpdate: n,
                readOnly: M,
                getStyle: o,
                addButtonElement: i,
                cancelButtonElement: u,
                editButtonElement: s,
                inputElementGenerator: w,
                textareaElementGenerator: N,
                minusMenuElement: E,
                plusMenuElement: m,
                handleRemove: this.removeRoot,
                beforeRemoveAction: g,
                beforeAddAction: A,
                beforeUpdateAction: b,
                logger: x,
                onSubmitValueParser: F,
              })
            )
          : B
      )
    }
  }
  Yy.defaultProps = {
    rootName: 'root',
    isCollapsed: (e, t) => t !== -1,
    getStyle: (e, t, r, n, a) => {
      switch (a) {
        case 'Object':
        case 'Error':
          return oP
        case 'Array':
          return iP
        default:
          return uP
      }
    },
    readOnly: () => !1,
    onFullyUpdate: () => {},
    onDeltaUpdate: () => {},
    beforeRemoveAction: () => Promise.resolve(),
    beforeAddAction: () => Promise.resolve(),
    beforeUpdateAction: () => Promise.resolve(),
    logger: { error: () => {} },
    onSubmitValueParser: (e, t, r, n, a) => sP(a),
    inputElement: () => h.createElement('input', null),
    textareaElement: () => h.createElement('textarea', null),
    fallback: null,
  }
  var { window: lP } = ue,
    cP = q.div(({ theme: e }) => ({
      position: 'relative',
      display: 'flex',
      '.rejt-tree': { marginLeft: '1rem', fontSize: '13px' },
      '.rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed':
        { '& > svg': { opacity: 0, transition: 'opacity 0.2s' } },
      '.rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed':
        { '& > svg': { opacity: 1 } },
      '.rejt-edit-form button': { display: 'none' },
      '.rejt-add-form': { marginLeft: 10 },
      '.rejt-add-value-node': { display: 'inline-flex', alignItems: 'center' },
      '.rejt-name': { lineHeight: '22px' },
      '.rejt-not-collapsed-delimiter': { lineHeight: '22px' },
      '.rejt-plus-menu': { marginLeft: 5 },
      '.rejt-object-node > span > *, .rejt-array-node > span > *': {
        position: 'relative',
        zIndex: 2,
      },
      '.rejt-object-node, .rejt-array-node': { position: 'relative' },
      '.rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before':
        {
          content: '""',
          position: 'absolute',
          top: 0,
          display: 'block',
          width: '100%',
          marginLeft: '-1rem',
          padding: '0 4px 0 1rem',
          height: 22,
        },
      '.rejt-collapsed::before, .rejt-not-collapsed::before': {
        zIndex: 1,
        background: 'transparent',
        borderRadius: 4,
        transition: 'background 0.2s',
        pointerEvents: 'none',
        opacity: 0.1,
      },
      '.rejt-object-node:hover, .rejt-array-node:hover': {
        '& > .rejt-collapsed::before, & > .rejt-not-collapsed::before': {
          background: e.color.secondary,
        },
      },
      '.rejt-collapsed::after, .rejt-not-collapsed::after': {
        content: '""',
        position: 'absolute',
        display: 'inline-block',
        pointerEvents: 'none',
        width: 0,
        height: 0,
      },
      '.rejt-collapsed::after': {
        left: -8,
        top: 8,
        borderTop: '3px solid transparent',
        borderBottom: '3px solid transparent',
        borderLeft: '3px solid rgba(153,153,153,0.6)',
      },
      '.rejt-not-collapsed::after': {
        left: -10,
        top: 10,
        borderTop: '3px solid rgba(153,153,153,0.6)',
        borderLeft: '3px solid transparent',
        borderRight: '3px solid transparent',
      },
      '.rejt-value': {
        display: 'inline-block',
        border: '1px solid transparent',
        borderRadius: 4,
        margin: '1px 0',
        padding: '0 4px',
        cursor: 'text',
        color: e.color.defaultText,
      },
      '.rejt-value-node:hover > .rejt-value': {
        background: e.color.lighter,
        borderColor: e.appBorderColor,
      },
    })),
    ru = q.button(({ theme: e, primary: t }) => ({
      border: 0,
      height: 20,
      margin: 1,
      borderRadius: 4,
      background: t ? e.color.secondary : 'transparent',
      color: t ? e.color.lightest : e.color.dark,
      fontWeight: t ? 'bold' : 'normal',
      cursor: 'pointer',
      order: t ? 'initial' : 9,
    })),
    Cy = q(Oe)(({ theme: e, icon: t, disabled: r }) => ({
      display: 'inline-block',
      verticalAlign: 'middle',
      width: 15,
      height: 15,
      padding: 3,
      marginLeft: 5,
      cursor: r ? 'not-allowed' : 'pointer',
      color: e.textMutedColor,
      '&:hover': r ? {} : { color: t === 'subtract' ? e.color.negative : e.color.ancillary },
      'svg + &': { marginLeft: 0 },
    })),
    xy = q.input(({ theme: e, placeholder: t }) => ({
      outline: 0,
      margin: t ? 1 : '1px 0',
      padding: '3px 4px',
      color: e.color.defaultText,
      background: e.background.app,
      border: `1px solid ${e.appBorderColor}`,
      borderRadius: 4,
      lineHeight: '14px',
      width: t === 'Key' ? 80 : 120,
      '&:focus': { border: `1px solid ${e.color.secondary}` },
    })),
    dP = q(bt)(({ theme: e }) => ({
      position: 'absolute',
      zIndex: 2,
      top: 2,
      right: 2,
      height: 21,
      padding: '0 3px',
      background: e.background.bar,
      border: `1px solid ${e.appBorderColor}`,
      borderRadius: 3,
      color: e.textMutedColor,
      fontSize: '9px',
      fontWeight: 'bold',
      textDecoration: 'none',
      span: { marginLeft: 3, marginTop: 1 },
    })),
    pP = q(Re.Textarea)(({ theme: e }) => ({
      flex: 1,
      padding: '7px 6px',
      fontFamily: e.typography.fonts.mono,
      fontSize: '12px',
      lineHeight: '18px',
      '&::placeholder': { fontFamily: e.typography.fonts.base, fontSize: '13px' },
      '&:placeholder-shown': { padding: '7px 10px' },
    })),
    fP = { bubbles: !0, cancelable: !0, key: 'Enter', code: 'Enter', keyCode: 13 },
    hP = e => {
      e.currentTarget.dispatchEvent(new lP.KeyboardEvent('keydown', fP))
    },
    mP = e => {
      e.currentTarget.select()
    },
    gP = e => () => ({
      name: { color: e.color.secondary },
      collapsed: { color: e.color.dark },
      ul: { listStyle: 'none', margin: '0 0 0 1rem', padding: 0 },
      li: { outline: 0 },
    }),
    Sy = ({ name: e, value: t, onChange: r }) => {
      let n = Nu(),
        a = ot(() => t && (0, Py.default)(t), [t]),
        o = a != null,
        [i, u] = re(!o),
        [s, p] = re(null),
        y = ge(
          x => {
            try {
              x && r(JSON.parse(x)), p(void 0)
            } catch (F) {
              p(F)
            }
          },
          [r]
        ),
        [E, m] = re(!1),
        g = ge(() => {
          r({}), m(!0)
        }, [m]),
        A = Se(null)
      if (
        (he(() => {
          E && A.current && A.current.select()
        }, [E]),
        !o)
      )
        return h.createElement(Re.Button, { id: mr(e), onClick: g }, 'Set object')
      let b = h.createElement(pP, {
        ref: A,
        id: Pe(e),
        name: e,
        defaultValue: t === null ? '' : JSON.stringify(t, null, 2),
        onBlur: x => y(x.target.value),
        placeholder: 'Edit JSON string...',
        autoFocus: E,
        valid: s ? 'error' : null,
      })
      return h.createElement(
        cP,
        null,
        ['Object', 'Array'].includes(yt(a)) &&
          h.createElement(
            dP,
            {
              href: '#',
              onClick: x => {
                x.preventDefault(), u(F => !F)
              },
            },
            h.createElement(Oe, { icon: i ? 'eyeclose' : 'eye' }),
            h.createElement('span', null, 'RAW')
          ),
        i
          ? b
          : h.createElement(Yy, {
              data: a,
              rootName: e,
              onFullyUpdate: r,
              getStyle: gP(n),
              cancelButtonElement: h.createElement(ru, { type: 'button' }, 'Cancel'),
              editButtonElement: h.createElement(ru, { type: 'submit' }, 'Save'),
              addButtonElement: h.createElement(ru, { type: 'submit', primary: !0 }, 'Save'),
              plusMenuElement: h.createElement(Cy, { icon: 'add' }),
              minusMenuElement: h.createElement(Cy, { icon: 'subtract' }),
              inputElement: (x, F, B, I) =>
                I ? h.createElement(xy, { onFocus: mP, onBlur: hP }) : h.createElement(xy, null),
              fallback: b,
            })
      )
    },
    yP = q.input(({ theme: e, min: t, max: r, value: n }) => ({
      '&': { width: '100%', backgroundColor: 'transparent', appearance: 'none' },
      '&::-webkit-slider-runnable-track': {
        background:
          e.base === 'light'
            ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${ze(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${ze(0.02, e.input.background)} 100%)`
            : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${st(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${st(0.02, e.input.background)} 100%)`,
        boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        borderRadius: 6,
        width: '100%',
        height: 6,
        cursor: 'pointer',
      },
      '&::-webkit-slider-thumb': {
        marginTop: '-6px',
        width: 16,
        height: 16,
        border: `1px solid ${Ue(e.appBorderColor, 0.2)}`,
        borderRadius: '50px',
        boxShadow: `0 1px 3px 0px ${Ue(e.appBorderColor, 0.2)}`,
        cursor: 'grab',
        appearance: 'none',
        background: `${e.input.background}`,
        transition: 'all 150ms ease-out',
        '&:hover': {
          background: `${ze(0.05, e.input.background)}`,
          transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
          transition: 'all 50ms ease-out',
        },
        '&:active': {
          background: `${e.input.background}`,
          transform: 'scale3d(1, 1, 1) translateY(0px)',
          cursor: 'grabbing',
        },
      },
      '&:focus': {
        outline: 'none',
        '&::-webkit-slider-runnable-track': { borderColor: Ue(e.color.secondary, 0.4) },
        '&::-webkit-slider-thumb': {
          borderColor: e.color.secondary,
          boxShadow: `0 0px 5px 0px ${e.color.secondary}`,
        },
      },
      '&::-moz-range-track': {
        background:
          e.base === 'light'
            ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${ze(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${ze(0.02, e.input.background)} 100%)`
            : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${st(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${st(0.02, e.input.background)} 100%)`,
        boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        borderRadius: 6,
        width: '100%',
        height: 6,
        cursor: 'pointer',
        outline: 'none',
      },
      '&::-moz-range-thumb': {
        width: 16,
        height: 16,
        border: `1px solid ${Ue(e.appBorderColor, 0.2)}`,
        borderRadius: '50px',
        boxShadow: `0 1px 3px 0px ${Ue(e.appBorderColor, 0.2)}`,
        cursor: 'grab',
        background: `${e.input.background}`,
        transition: 'all 150ms ease-out',
        '&:hover': {
          background: `${ze(0.05, e.input.background)}`,
          transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
          transition: 'all 50ms ease-out',
        },
        '&:active': {
          background: `${e.input.background}`,
          transform: 'scale3d(1, 1, 1) translateY(0px)',
          cursor: 'grabbing',
        },
      },
      '&::-ms-track': {
        background:
          e.base === 'light'
            ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${ze(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${ze(0.02, e.input.background)} 100%)`
            : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${((n - t) / (r - t)) * 100}%, 
            ${st(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${st(0.02, e.input.background)} 100%)`,
        boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        color: 'transparent',
        width: '100%',
        height: '6px',
        cursor: 'pointer',
      },
      '&::-ms-fill-lower': { borderRadius: 6 },
      '&::-ms-fill-upper': { borderRadius: 6 },
      '&::-ms-thumb': {
        width: 16,
        height: 16,
        background: `${e.input.background}`,
        border: `1px solid ${Ue(e.appBorderColor, 0.2)}`,
        borderRadius: 50,
        cursor: 'grab',
        marginTop: 0,
      },
      '@supports (-ms-ime-align:auto)': { 'input[type=range]': { margin: '0' } },
    })),
    Xy = q.span({
      paddingLeft: 5,
      paddingRight: 5,
      fontSize: 12,
      whiteSpace: 'nowrap',
      fontFeatureSettings: 'tnum',
      fontVariantNumeric: 'tabular-nums',
    }),
    bP = q(Xy)(({ numberOFDecimalsPlaces: e, max: t }) => ({
      width: `${e + t.toString().length * 2 + 3}ch`,
      textAlign: 'right',
      flexShrink: 0,
    })),
    EP = q.div({ display: 'flex', alignItems: 'center', width: '100%' })
  function AP(e) {
    let t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)
    return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
  }
  var vP = ({
      name: e,
      value: t,
      onChange: r,
      min: n = 0,
      max: a = 100,
      step: o = 1,
      onBlur: i,
      onFocus: u,
    }) => {
      let s = E => {
          r(I9(E.target.value))
        },
        p = t !== void 0,
        y = ot(() => AP(o), [o])
      return h.createElement(
        EP,
        null,
        h.createElement(Xy, null, n),
        h.createElement(yP, {
          id: Pe(e),
          type: 'range',
          onChange: s,
          name: e,
          value: t,
          min: n,
          max: a,
          step: o,
          onFocus: u,
          onBlur: i,
        }),
        h.createElement(
          bP,
          { numberOFDecimalsPlaces: y, max: a },
          p ? t.toFixed(y) : '--',
          ' / ',
          a
        )
      )
    },
    DP = q.label({ display: 'flex' }),
    CP = q.div(({ isMaxed: e }) => ({
      marginLeft: '0.75rem',
      paddingTop: '0.35rem',
      color: e ? 'red' : void 0,
    })),
    xP = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: a, maxLength: o }) => {
      let i = E => {
          r(E.target.value)
        },
        [u, s] = re(!1),
        p = ge(() => {
          r(''), s(!0)
        }, [s])
      if (t === void 0) return h.createElement(Re.Button, { id: mr(e), onClick: p }, 'Set string')
      let y = typeof t == 'string'
      return h.createElement(
        DP,
        null,
        h.createElement(Re.Textarea, {
          id: Pe(e),
          maxLength: o,
          onChange: i,
          size: 'flex',
          placeholder: 'Edit string...',
          autoFocus: u,
          valid: y ? null : 'error',
          name: e,
          value: y ? t : '',
          onFocus: n,
          onBlur: a,
        }),
        o && h.createElement(CP, { isMaxed: t?.length === o }, t?.length ?? 0, ' / ', o)
      )
    },
    SP = q(Re.Input)({ padding: 10 })
  function FP(e) {
    e.forEach(t => {
      t.startsWith('blob:') && URL.revokeObjectURL(t)
    })
  }
  var wP = ({ onChange: e, name: t, accept: r = 'image/*', value: n }) => {
      let a = Se(null)
      function o(i) {
        if (!i.target.files) return
        let u = Array.from(i.target.files).map(s => URL.createObjectURL(s))
        e(u), FP(n)
      }
      return (
        he(() => {
          n == null && a.current && (a.current.value = null)
        }, [n, t]),
        h.createElement(SP, {
          ref: a,
          id: Pe(t),
          type: 'file',
          name: t,
          multiple: !0,
          onChange: o,
          accept: r,
          size: 'flex',
        })
      )
    },
    BP = Su(() => Promise.resolve().then(() => (my(), hy))),
    TP = e =>
      h.createElement(
        xu,
        { fallback: h.createElement('div', null) },
        h.createElement(BP, { ...e })
      ),
    _P = {
      array: Sy,
      object: Sy,
      boolean: F9,
      color: TP,
      date: R9,
      number: k9,
      check: dr,
      'inline-check': dr,
      radio: dr,
      'inline-radio': dr,
      select: dr,
      'multi-select': dr,
      range: vP,
      text: xP,
      file: wP,
    },
    Fy = () => h.createElement(h.Fragment, null, '-'),
    OP = ({ row: e, arg: t, updateArgs: r, isHovered: n }) => {
      let { key: a, control: o } = e,
        [i, u] = re(!1),
        [s, p] = re({ value: t })
      he(() => {
        i || p({ value: t })
      }, [i, t])
      let y = ge(b => (p({ value: b }), r({ [a]: b }), b), [r, a]),
        E = ge(() => u(!1), []),
        m = ge(() => u(!0), [])
      if (!o || o.disable)
        return n
          ? h.createElement(
              Et,
              {
                href: 'https://storybook.js.org/docs/react/essentials/controls',
                target: '_blank',
                withArrow: !0,
              },
              'Setup controls'
            )
          : h.createElement(Fy, null)
      let g = { name: a, argType: e, value: s.value, onChange: y, onBlur: E, onFocus: m },
        A = _P[o.type] || Fy
      return h.createElement(A, { ...g, ...o, controlType: o.type })
    },
    RP = q.span({ fontWeight: 'bold' }),
    PP = q.span(({ theme: e }) => ({
      color: e.color.negative,
      fontFamily: e.typography.fonts.mono,
      cursor: 'help',
    })),
    IP = q.div(({ theme: e }) => ({
      '&&': { p: { margin: '0 0 10px 0' }, a: { color: e.color.secondary } },
      code: { ...Rt({ theme: e }), fontSize: 12, fontFamily: e.typography.fonts.mono },
      '& code': { margin: 0, display: 'inline-block' },
      '& pre > code': { whiteSpace: 'pre-wrap' },
    })),
    kP = q.div(({ theme: e, hasDescription: t }) => ({
      color: e.base === 'light' ? de(0.1, e.color.defaultText) : de(0.2, e.color.defaultText),
      marginTop: t ? 4 : 0,
    })),
    NP = q.div(({ theme: e, hasDescription: t }) => ({
      color: e.base === 'light' ? de(0.1, e.color.defaultText) : de(0.2, e.color.defaultText),
      marginTop: t ? 12 : 0,
      marginBottom: 12,
    })),
    LP = q.td(({ theme: e, expandable: t }) => ({
      paddingLeft: t ? '40px !important' : '20px !important',
    })),
    ma = e => {
      let [t, r] = re(!1),
        { row: n, updateArgs: a, compact: o, expandable: i, initialExpandedArgs: u } = e,
        { name: s, description: p } = n,
        y = n.table || {},
        E = y.type || n.type,
        m = y.defaultValue || n.defaultValue,
        g = n.type?.required,
        A = p != null && p !== ''
      return h.createElement(
        'tr',
        { onMouseEnter: () => r(!0), onMouseLeave: () => r(!1) },
        h.createElement(
          LP,
          { expandable: i },
          h.createElement(RP, null, s),
          g ? h.createElement(PP, { title: 'Required' }, '*') : null
        ),
        o
          ? null
          : h.createElement(
              'td',
              null,
              A && h.createElement(IP, null, h.createElement(Xo, null, p)),
              y.jsDocTags != null
                ? h.createElement(
                    h.Fragment,
                    null,
                    h.createElement(
                      NP,
                      { hasDescription: A },
                      h.createElement(tu, { value: E, initialExpandedArgs: u })
                    ),
                    h.createElement(h9, { tags: y.jsDocTags })
                  )
                : h.createElement(
                    kP,
                    { hasDescription: A },
                    h.createElement(tu, { value: E, initialExpandedArgs: u })
                  )
            ),
        o
          ? null
          : h.createElement('td', null, h.createElement(tu, { value: m, initialExpandedArgs: u })),
        a ? h.createElement('td', null, h.createElement(OP, { ...e, isHovered: t })) : null
      )
    },
    MP = q(Oe)(({ theme: e }) => ({
      marginRight: 8,
      marginLeft: -10,
      marginTop: -2,
      height: 12,
      width: 12,
      color: e.base === 'light' ? de(0.25, e.color.defaultText) : de(0.3, e.color.defaultText),
      border: 'none',
      display: 'inline-block',
    })),
    qP = q.span(({ theme: e }) => ({ display: 'flex', lineHeight: '20px', alignItems: 'center' })),
    jP = q.td(({ theme: e }) => ({
      position: 'relative',
      letterSpacing: '0.35em',
      textTransform: 'uppercase',
      fontWeight: e.typography.weight.bold,
      fontSize: e.typography.size.s1 - 1,
      color: e.base === 'light' ? de(0.4, e.color.defaultText) : de(0.6, e.color.defaultText),
      background: `${e.background.app} !important`,
      '& ~ td': { background: `${e.background.app} !important` },
    })),
    $P = q.td(({ theme: e }) => ({
      position: 'relative',
      fontWeight: e.typography.weight.bold,
      fontSize: e.typography.size.s2 - 1,
      background: e.background.app,
    })),
    HP = q.td(() => ({ position: 'relative' })),
    UP = q.tr(({ theme: e }) => ({
      '&:hover > td': {
        backgroundColor: `${st(0.005, e.background.app)} !important`,
        boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`,
        cursor: 'row-resize',
      },
    })),
    wy = q.button(() => ({
      background: 'none',
      border: 'none',
      padding: '0',
      font: 'inherit',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: '100%',
      width: '100%',
      color: 'transparent',
      cursor: 'row-resize !important',
    })),
    nu = ({
      level: e = 'section',
      label: t,
      children: r,
      initialExpanded: n = !0,
      colSpan: a = 3,
    }) => {
      let [o, i] = re(n),
        u = e === 'subsection' ? $P : jP,
        s = r?.length || 0,
        p = e === 'subsection' ? `${s} item${s !== 1 ? 's' : ''}` : '',
        y = o ? 'arrowdown' : 'arrowright',
        E = `${o ? 'Hide' : 'Show'} ${e === 'subsection' ? s : t} item${s !== 1 ? 's' : ''}`
      return h.createElement(
        h.Fragment,
        null,
        h.createElement(
          UP,
          { title: E },
          h.createElement(
            u,
            { colSpan: 1 },
            h.createElement(wy, { onClick: m => i(!o), tabIndex: 0 }, E),
            h.createElement(qP, null, h.createElement(MP, { icon: y }), t)
          ),
          h.createElement(
            HP,
            { colSpan: a - 1 },
            h.createElement(
              wy,
              { onClick: m => i(!o), tabIndex: -1, style: { outline: 'none' } },
              E
            ),
            o ? null : p
          )
        ),
        o ? r : null
      )
    },
    ga = q.div(({ theme: e }) => ({
      display: 'flex',
      gap: 16,
      borderBottom: `1px solid ${e.appBorderColor}`,
      '&:last-child': { borderBottom: 0 },
    })),
    Te = q.div(({ numColumn: e }) => ({
      display: 'flex',
      flexDirection: 'column',
      flex: e || 1,
      gap: 5,
      padding: '12px 20px',
    })),
    Ee = q.div(({ theme: e, width: t, height: r }) => ({
      animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
      background: e.appBorderColor,
      width: t || '100%',
      height: r || 16,
      borderRadius: 3,
    })),
    _e = [2, 4, 2, 2],
    zP = () =>
      h.createElement(
        h.Fragment,
        null,
        h.createElement(
          ga,
          null,
          h.createElement(Te, { numColumn: _e[0] }, h.createElement(Ee, { width: '60%' })),
          h.createElement(Te, { numColumn: _e[1] }, h.createElement(Ee, { width: '30%' })),
          h.createElement(Te, { numColumn: _e[2] }, h.createElement(Ee, { width: '60%' })),
          h.createElement(Te, { numColumn: _e[3] }, h.createElement(Ee, { width: '60%' }))
        ),
        h.createElement(
          ga,
          null,
          h.createElement(Te, { numColumn: _e[0] }, h.createElement(Ee, { width: '60%' })),
          h.createElement(
            Te,
            { numColumn: _e[1] },
            h.createElement(Ee, { width: '80%' }),
            h.createElement(Ee, { width: '30%' })
          ),
          h.createElement(Te, { numColumn: _e[2] }, h.createElement(Ee, { width: '60%' })),
          h.createElement(Te, { numColumn: _e[3] }, h.createElement(Ee, { width: '60%' }))
        ),
        h.createElement(
          ga,
          null,
          h.createElement(Te, { numColumn: _e[0] }, h.createElement(Ee, { width: '60%' })),
          h.createElement(
            Te,
            { numColumn: _e[1] },
            h.createElement(Ee, { width: '80%' }),
            h.createElement(Ee, { width: '30%' })
          ),
          h.createElement(Te, { numColumn: _e[2] }, h.createElement(Ee, { width: '60%' })),
          h.createElement(Te, { numColumn: _e[3] }, h.createElement(Ee, { width: '60%' }))
        ),
        h.createElement(
          ga,
          null,
          h.createElement(Te, { numColumn: _e[0] }, h.createElement(Ee, { width: '60%' })),
          h.createElement(
            Te,
            { numColumn: _e[1] },
            h.createElement(Ee, { width: '80%' }),
            h.createElement(Ee, { width: '30%' })
          ),
          h.createElement(Te, { numColumn: _e[2] }, h.createElement(Ee, { width: '60%' })),
          h.createElement(Te, { numColumn: _e[3] }, h.createElement(Ee, { width: '60%' }))
        )
      ),
    GP = q.div(({ inAddonPanel: e, theme: t }) => ({
      height: e ? '100%' : 'auto',
      display: 'flex',
      border: e ? 'none' : `1px solid ${t.appBorderColor}`,
      borderRadius: e ? 0 : t.appBorderRadius,
      padding: e ? 0 : 40,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 15,
      background: t.background.content,
      boxShadow: 'rgba(0, 0, 0, 0.10) 0 1px 3px 0',
    })),
    WP = q.div({ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: 415 }),
    VP = q.div(({ theme: e }) => ({
      fontWeight: e.typography.weight.bold,
      fontSize: e.typography.size.s2 - 1,
      textAlign: 'center',
      color: e.textColor,
    })),
    KP = q.div(({ theme: e }) => ({
      fontWeight: e.typography.weight.regular,
      fontSize: e.typography.size.s2 - 1,
      textAlign: 'center',
      color: e.textMutedColor,
    })),
    YP = q.div(({ theme: e }) => ({
      display: 'flex',
      fontSize: e.typography.size.s2 - 1,
      gap: 25,
    })),
    XP = q.div(({ theme: e }) => ({ width: 1, height: 16, backgroundColor: e.appBorderColor })),
    JP = ({ inAddonPanel: e }) => {
      let [t, r] = re(!0)
      return (
        he(() => {
          let n = setTimeout(() => {
            r(!1)
          }, 100)
          return () => clearTimeout(n)
        }, []),
        t
          ? null
          : h.createElement(
              GP,
              { inAddonPanel: e },
              h.createElement(
                WP,
                null,
                h.createElement(
                  VP,
                  null,
                  e
                    ? 'Interactive story playground'
                    : "Args table with interactive controls couldn't be auto-generated"
                ),
                h.createElement(
                  KP,
                  null,
                  "Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically."
                )
              ),
              h.createElement(
                YP,
                null,
                e &&
                  h.createElement(
                    h.Fragment,
                    null,
                    h.createElement(
                      Et,
                      { href: 'https://youtu.be/0gOfS6K0x0E', target: '_blank', withArrow: !0 },
                      h.createElement(Oe, { icon: 'video' }),
                      ' Watch 5m video'
                    ),
                    h.createElement(XP, null),
                    h.createElement(
                      Et,
                      {
                        href: 'https://storybook.js.org/docs/react/essentials/controls',
                        target: '_blank',
                        withArrow: !0,
                      },
                      'Read docs'
                    )
                  ),
                !e &&
                  h.createElement(
                    Et,
                    {
                      href: 'https://storybook.js.org/docs/react/essentials/controls',
                      target: '_blank',
                      withArrow: !0,
                    },
                    'Learn how to set that up'
                  )
              )
            )
      )
    },
    QP = q.table(({ theme: e, compact: t, inAddonPanel: r }) => ({
      '&&': {
        borderSpacing: 0,
        color: e.color.defaultText,
        'td, th': { padding: 0, border: 'none', verticalAlign: 'top', textOverflow: 'ellipsis' },
        fontSize: e.typography.size.s2 - 1,
        lineHeight: '20px',
        textAlign: 'left',
        width: '100%',
        marginTop: r ? 0 : 25,
        marginBottom: r ? 0 : 40,
        'thead th:first-of-type, td:first-of-type': { width: '25%' },
        'th:first-of-type, td:first-of-type': { paddingLeft: 20 },
        'th:nth-of-type(2), td:nth-of-type(2)': { ...(t ? null : { width: '35%' }) },
        'td:nth-of-type(3)': { ...(t ? null : { width: '15%' }) },
        'th:last-of-type, td:last-of-type': { paddingRight: 20, ...(t ? null : { width: '25%' }) },
        th: {
          color: e.base === 'light' ? de(0.25, e.color.defaultText) : de(0.45, e.color.defaultText),
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 15,
          paddingRight: 15,
        },
        td: {
          paddingTop: '10px',
          paddingBottom: '10px',
          '&:not(:first-of-type)': { paddingLeft: 15, paddingRight: 15 },
          '&:last-of-type': { paddingRight: 20 },
        },
        marginLeft: r ? 0 : 1,
        marginRight: r ? 0 : 1,
        tbody: {
          ...(r
            ? null
            : {
                filter:
                  e.base === 'light'
                    ? 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))'
                    : 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))',
              }),
          '> tr > *': {
            background: e.background.content,
            borderTop: `1px solid ${e.appBorderColor}`,
          },
          ...(r
            ? null
            : {
                '> tr:first-of-type > *': { borderBlockStart: `1px solid ${e.appBorderColor}` },
                '> tr:last-of-type > *': { borderBlockEnd: `1px solid ${e.appBorderColor}` },
                '> tr > *:first-of-type': { borderInlineStart: `1px solid ${e.appBorderColor}` },
                '> tr > *:last-of-type': { borderInlineEnd: `1px solid ${e.appBorderColor}` },
                '> tr:first-of-type > td:first-of-type': { borderTopLeftRadius: e.appBorderRadius },
                '> tr:first-of-type > td:last-of-type': { borderTopRightRadius: e.appBorderRadius },
                '> tr:last-of-type > td:first-of-type': {
                  borderBottomLeftRadius: e.appBorderRadius,
                },
                '> tr:last-of-type > td:last-of-type': {
                  borderBottomRightRadius: e.appBorderRadius,
                },
              }),
        },
      },
    })),
    ZP = q(bt)(({ theme: e }) => ({ color: e.barTextColor, margin: '-4px -12px -4px 0' })),
    eI = q.span({ display: 'flex', justifyContent: 'space-between' }),
    tI = {
      alpha: (e, t) => e.name.localeCompare(t.name),
      requiredFirst: (e, t) =>
        +!!t.type?.required - +!!e.type?.required || e.name.localeCompare(t.name),
      none: void 0,
    },
    rI = (e, t) => {
      let r = { ungrouped: [], ungroupedSubsections: {}, sections: {} }
      if (!e) return r
      Object.entries(e).forEach(([o, i]) => {
        let { category: u, subcategory: s } = i?.table || {}
        if (u) {
          let p = r.sections[u] || { ungrouped: [], subsections: {} }
          if (!s) p.ungrouped.push({ key: o, ...i })
          else {
            let y = p.subsections[s] || []
            y.push({ key: o, ...i }), (p.subsections[s] = y)
          }
          r.sections[u] = p
        } else if (s) {
          let p = r.ungroupedSubsections[s] || []
          p.push({ key: o, ...i }), (r.ungroupedSubsections[s] = p)
        } else r.ungrouped.push({ key: o, ...i })
      })
      let n = tI[t],
        a = o => (n ? Object.keys(o).reduce((i, u) => ({ ...i, [u]: o[u].sort(n) }), {}) : o)
      return {
        ungrouped: r.ungrouped.sort(n),
        ungroupedSubsections: a(r.ungroupedSubsections),
        sections: Object.keys(r.sections).reduce(
          (o, i) => ({
            ...o,
            [i]: {
              ungrouped: r.sections[i].ungrouped.sort(n),
              subsections: a(r.sections[i].subsections),
            },
          }),
          {}
        ),
      }
    },
    nI = (e, t, r) => {
      try {
        return $o(e, t, r)
      } catch (n) {
        return wn.warn(n.message), !1
      }
    },
    _t = e => {
      let {
        updateArgs: t,
        resetArgs: r,
        compact: n,
        inAddonPanel: a,
        initialExpandedArgs: o,
        sort: i = 'none',
        isLoading: u,
      } = e
      if ('error' in e) {
        let { error: B } = e
        return h.createElement(
          Ny,
          null,
          B,
          '\xA0',
          h.createElement(
            Et,
            { href: 'http://storybook.js.org/docs/', target: '_blank', withArrow: !0 },
            'Read the docs'
          )
        )
      }
      if (u) return h.createElement(zP, null)
      let { rows: s, args: p, globals: y } = 'rows' in e && e,
        E = rI(
          (0, _y.default)(s, B => !B?.table?.disable && nI(B, p || {}, y || {})),
          i
        ),
        m = E.ungrouped.length === 0,
        g = Object.entries(E.sections).length === 0,
        A = Object.entries(E.ungroupedSubsections).length === 0
      if (m && g && A) return h.createElement(JP, { inAddonPanel: a })
      let b = 1
      t && (b += 1), n || (b += 2)
      let x = Object.keys(E.sections).length > 0,
        F = { updateArgs: t, compact: n, inAddonPanel: a, initialExpandedArgs: o }
      return h.createElement(
        Na,
        null,
        h.createElement(
          QP,
          { compact: n, inAddonPanel: a, className: 'docblock-argstable sb-unstyled' },
          h.createElement(
            'thead',
            { className: 'docblock-argstable-head' },
            h.createElement(
              'tr',
              null,
              h.createElement('th', null, h.createElement('span', null, 'Name')),
              n ? null : h.createElement('th', null, h.createElement('span', null, 'Description')),
              n ? null : h.createElement('th', null, h.createElement('span', null, 'Default')),
              t
                ? h.createElement(
                    'th',
                    null,
                    h.createElement(
                      eI,
                      null,
                      'Control',
                      ' ',
                      !u &&
                        r &&
                        h.createElement(
                          ZP,
                          { onClick: () => r(), title: 'Reset controls' },
                          h.createElement(Oe, { icon: 'undo', 'aria-hidden': !0 })
                        )
                    )
                  )
                : null
            )
          ),
          h.createElement(
            'tbody',
            { className: 'docblock-argstable-body' },
            E.ungrouped.map(B =>
              h.createElement(ma, { key: B.key, row: B, arg: p && p[B.key], ...F })
            ),
            Object.entries(E.ungroupedSubsections).map(([B, I]) =>
              h.createElement(
                nu,
                { key: B, label: B, level: 'subsection', colSpan: b },
                I.map(M =>
                  h.createElement(ma, {
                    key: M.key,
                    row: M,
                    arg: p && p[M.key],
                    expandable: x,
                    ...F,
                  })
                )
              )
            ),
            Object.entries(E.sections).map(([B, I]) =>
              h.createElement(
                nu,
                { key: B, label: B, level: 'section', colSpan: b },
                I.ungrouped.map(M =>
                  h.createElement(ma, { key: M.key, row: M, arg: p && p[M.key], ...F })
                ),
                Object.entries(I.subsections).map(([M, w]) =>
                  h.createElement(
                    nu,
                    { key: M, label: M, level: 'subsection', colSpan: b },
                    w.map(N =>
                      h.createElement(ma, {
                        key: N.key,
                        row: N,
                        arg: p && p[N.key],
                        expandable: x,
                        ...F,
                      })
                    )
                  )
                )
              )
            )
          )
        )
      )
    },
    Jy = ({ tabs: e, ...t }) => {
      let r = Object.entries(e)
      return r.length === 1
        ? h.createElement(_t, { ...r[0][1], ...t })
        : h.createElement(
            Ma,
            null,
            r.map(n => {
              let [a, o] = n,
                i = `prop_table_div_${a}`
              return h.createElement('div', { key: i, id: i, title: a }, ({ active: u }) =>
                u ? h.createElement(_t, { key: `prop_table_${a}`, ...o, ...t }) : null
              )
            })
          )
    },
    xne = q.div(({ theme: e }) => ({
      marginRight: 30,
      fontSize: `${e.typography.size.s1}px`,
      color: e.base === 'light' ? de(0.4, e.color.defaultText) : de(0.6, e.color.defaultText),
    })),
    Sne = q.div({ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }),
    Fne = q.div({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'baseline',
      '&:not(:last-child)': { marginBottom: '1rem' },
    }),
    wne = q.div(Pt, ({ theme: e }) => ({ ...ba(e), margin: '25px 0 40px', padding: '30px 20px' }))
  var Bne = q.div(({ theme: e }) => ({
      fontWeight: e.typography.weight.bold,
      color: e.color.defaultText,
    })),
    Tne = q.div(({ theme: e }) => ({
      color: e.base === 'light' ? de(0.2, e.color.defaultText) : de(0.6, e.color.defaultText),
    })),
    _ne = q.div({ flex: '0 0 30%', lineHeight: '20px', marginTop: 5 }),
    One = q.div(({ theme: e }) => ({
      flex: 1,
      textAlign: 'center',
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      lineHeight: 1,
      overflow: 'hidden',
      color: e.base === 'light' ? de(0.4, e.color.defaultText) : de(0.6, e.color.defaultText),
      '> div': {
        display: 'inline-block',
        overflow: 'hidden',
        maxWidth: '100%',
        textOverflow: 'ellipsis',
      },
      span: { display: 'block', marginTop: 2 },
    })),
    Rne = q.div({ display: 'flex', flexDirection: 'row' }),
    Pne = q.div(({ background: e }) => ({
      position: 'relative',
      flex: 1,
      '&::before': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: e,
        content: '""',
      },
    })),
    Ine = q.div(({ theme: e }) => ({
      ...ba(e),
      display: 'flex',
      flexDirection: 'row',
      height: 50,
      marginBottom: 5,
      overflow: 'hidden',
      backgroundColor: 'white',
      backgroundImage: 'repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)',
      backgroundClip: 'padding-box',
    })),
    kne = q.div({
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      position: 'relative',
      marginBottom: 30,
    }),
    Nne = q.div({ flex: 1, display: 'flex', flexDirection: 'row' }),
    Lne = q.div({ display: 'flex', alignItems: 'flex-start' }),
    Mne = q.div({ flex: '0 0 30%' }),
    qne = q.div({ flex: 1 }),
    jne = q.div(({ theme: e }) => ({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 20,
      fontWeight: e.typography.weight.bold,
      color: e.base === 'light' ? de(0.4, e.color.defaultText) : de(0.6, e.color.defaultText),
    })),
    $ne = q.div(({ theme: e }) => ({
      fontSize: e.typography.size.s2,
      lineHeight: '20px',
      display: 'flex',
      flexDirection: 'column',
    }))
  var Hne = q.div(({ theme: e }) => ({
      fontFamily: e.typography.fonts.base,
      fontSize: e.typography.size.s2,
      color: e.color.defaultText,
      marginLeft: 10,
      lineHeight: 1.2,
    })),
    Une = q.div(({ theme: e }) => ({
      ...ba(e),
      overflow: 'hidden',
      height: 40,
      width: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none',
      '> img, > svg': { width: 20, height: 20 },
    })),
    zne = q.div({
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      flex: '0 1 calc(20% - 10px)',
      minWidth: 120,
      margin: '0px 10px 30px 0',
    }),
    Gne = q.div({ display: 'flex', flexFlow: 'row wrap' })
  var aI = e => `anchor--${e}`,
    oI = ({ storyId: e, children: t }) =>
      h.createElement('div', { id: aI(e), className: 'sb-anchor' }, t)
  ue &&
    ue.__DOCS_CONTEXT__ === void 0 &&
    ((ue.__DOCS_CONTEXT__ = fr(null)), (ue.__DOCS_CONTEXT__.displayName = 'DocsContext'))
  var Qe = ue ? ue.__DOCS_CONTEXT__ : fr(null),
    gu = (e, t) => je(Qe).resolveOf(e, t)
  var yu = '^',
    iI = e =>
      e
        .split('-')
        .map(t => t.charAt(0).toUpperCase() + t.slice(1))
        .join(''),
    Qy = e => {
      if (e)
        return typeof e == 'string'
          ? e.includes('-')
            ? iI(e)
            : e
          : e.__docgenInfo && e.__docgenInfo.displayName
          ? e.__docgenInfo.displayName
          : e.name
    }
  function Zy(e, t) {
    let r = bu([e], t)
    return r && r[0]
  }
  function bu(e, t) {
    let [r, n] = re({})
    return (
      he(() => {
        Promise.all(
          e.map(async a => {
            let o = await t.loadStory(a)
            n(i => (i[a] === o ? i : { ...i, [a]: o }))
          })
        )
      }),
      e.map(a => {
        if (r[a]) return r[a]
        try {
          return t.storyById(a)
        } catch {
          return null
        }
      })
    )
  }
  var uI = (e, t) => {
      let r = t.getStoryContext(t.storyById()),
        [n, a] = re(r.args)
      he(() => {
        let u = s => {
          s.storyId === e && a(s.args)
        }
        return t.channel.on(In, u), () => t.channel.off(In, u)
      }, [e])
      let o = ge(u => t.channel.emit(kn, { storyId: e, updatedArgs: u }), [e]),
        i = ge(u => t.channel.emit(Pn, { storyId: e, argNames: u }), [e])
      return [n, o, i]
    },
    sI = e => {
      let t = e.getStoryContext(e.storyById()),
        [r, n] = re(t.globals)
      return (
        he(() => {
          let a = o => {
            n(o.globals)
          }
          return e.channel.on(Rn, a), () => e.channel.off(Rn, a)
        }, []),
        [r]
      )
    },
    e2 = (e, t, r, n) => {
      let { extractArgTypes: a } = t.docs || {}
      if (!a) throw new Error('Args unsupported. See Args documentation for your framework.')
      let o = a(e)
      return (o = Lr(o, r, n)), o
    },
    By = e => e && [yu].includes(e),
    lI = (e = {}, t) => {
      let { of: r } = e,
        { story: n } = e
      if (By(r) || By(n)) return t || null
      if (!r) throw new Error('No component found.')
      return r
    },
    lu = (e, t, r, n, a, o) => ({
      ...e,
      ...(0, Iy.default)(t, i => ({ rows: e2(i, r, n, a), sort: o })),
    }),
    cI = e => {
      let t = je(Qe),
        {
          story: r,
          component: n,
          subcomponents: a,
          showComponent: o,
          include: i,
          exclude: u,
          sort: s,
        } = e
      try {
        let p
        switch (r) {
          case yu: {
            p = t.storyById().id
            break
          }
          default:
            p = t.storyIdByName(r)
        }
        let y = Zy(p, t),
          [E, m, g] = uI(p, t),
          [A] = sI(t)
        if (!y) return h.createElement(_t, { isLoading: !0, updateArgs: m, resetArgs: g })
        let b = Lr(y.argTypes, i, u),
          x = Qy(n) || 'Story',
          F = { [x]: { rows: b, args: E, globals: A, updateArgs: m, resetArgs: g } },
          B = b && Object.values(b).find(I => !!I?.control)
        if (
          (B || ((m = null), (g = null), (F = {})),
          n && (!B || o) && (F = lu(F, { [x]: n }, y.parameters, i, u)),
          a)
        ) {
          if (Array.isArray(a))
            throw new Error(
              'Unexpected subcomponents array. Expected an object whose keys are tab labels and whose values are components.'
            )
          F = lu(F, a, y.parameters, i, u)
        }
        return h.createElement(Jy, { tabs: F, sort: s })
      } catch (p) {
        return h.createElement(_t, { error: p.message })
      }
    },
    Ty = e => {
      let { components: t, include: r, exclude: n, sort: a, parameters: o } = e,
        i = lu({}, t, o, r, n)
      return h.createElement(Jy, { tabs: i, sort: a })
    },
    dI = e => {
      ye(ve`The ArgsTable doc block is deprecated. Instead use the ArgTypes doc block for static tables or the Controls doc block for tables with controls.
    
  Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#argstable-block
  `)
      let t = je(Qe),
        r,
        n,
        a
      try {
        ;({ parameters: r, component: n, subcomponents: a } = t.storyById())
      } catch {
        let { of: g } = e
        if ('of' in e && g === void 0)
          throw new Error('Unexpected `of={undefined}`, did you mistype a CSF file reference?')
        ;({
          projectAnnotations: { parameters: r },
        } = t.resolveOf(g, ['component']))
      }
      let { include: o, exclude: i, components: u, sort: s } = e,
        { story: p } = e,
        y = s || r.controls?.sort,
        E = lI(e, n)
      if (p) return h.createElement(cI, { ...e, component: E, subcomponents: a, sort: y })
      if (!u && !a) {
        let g
        try {
          g = { rows: e2(E, r, o, i) }
        } catch (A) {
          g = { error: A.message }
        }
        return h.createElement(_t, { ...g, sort: y })
      }
      if (u) return h.createElement(Ty, { ...e, components: u, sort: y, parameters: r })
      let m = Qy(E)
      return h.createElement(Ty, { ...e, components: { [m]: E, ...a }, sort: y, parameters: r })
    }
  dI.defaultProps = { of: yu }
  function pI(e) {
    return lg(e)
  }
  var fI = fr({ sources: {} }),
    hI = '--unknown--'
  var mI = (e => ((e.OPEN = 'open'), (e.CLOSED = 'closed'), (e.NONE = 'none'), e))(mI || {}),
    gI = e => {
      let t = e.map(r => r.parameters.docs?.source?.state).filter(Boolean)
      return t.length === 0 ? 'closed' : t[0]
    },
    yI = (e, t, r) => {
      let { sources: n } = r,
        a = n?.[e]
      return a?.[pI(t)] || a?.[hI] || { code: '' }
    },
    bI = ({ snippet: e, storyContext: t, typeFromProps: r, transformFromProps: n }) => {
      let { __isArgsStory: a } = t.parameters,
        o = t.parameters.docs?.source || {},
        i = r || o.type || Vr.AUTO
      if (o.code !== void 0) return o.code
      let u = i === Vr.DYNAMIC || (i === Vr.AUTO && e && a) ? e : o.originalSource || ''
      return (
        o.transformSource &&
          ye(ve`The \`transformSource\` parameter at \`parameters.docs.source.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
        t.parameters.docs?.transformSource &&
          ye(ve`The \`transformSource\` parameter at \`parameters.docs.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
        t.parameters.jsx?.transformSource &&
          ye(ve`The \`transformSource\` parameter at \`parameters.jsx.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
        (
          n ??
          o.transform ??
          o.transformSource ??
          t.parameters.docs?.transformSource ??
          t.parameters.jsx?.transformSource
        )?.(u, t) || u
      )
    },
    t2 = (e, t, r) => {
      let n = e.ids || (e.id ? [e.id] : []),
        a = bu(n, t),
        o = a,
        { of: i } = e
      if ('of' in e && i === void 0)
        throw new Error('Unexpected `of={undefined}`, did you mistype a CSF file reference?')
      if (i) o = [t.resolveOf(i, ['story']).story]
      else if (o.length === 0)
        try {
          o = [t.storyById()]
        } catch {}
      if (!a.every(Boolean)) return { error: 'Oh no! The source is not available.', state: 'none' }
      let u = o[0]?.parameters?.docs?.source || {},
        { code: s } = e,
        p = e.format ?? u.format,
        y = e.language ?? u.language ?? 'jsx',
        E = e.dark ?? u.dark ?? !1
      s ||
        (s = o.map((g, A) => {
          if (!g) return ''
          let b = t.getStoryContext(g),
            x = e.__forceInitialArgs ? b.initialArgs : b.unmappedArgs,
            F = yI(g.id, x, r)
          return (
            A === 0 && (p = F.format ?? g.parameters.docs?.source?.format ?? !1),
            bI({
              snippet: F.code,
              storyContext: { ...b, args: x },
              typeFromProps: e.type,
              transformFromProps: e.transform,
            })
          )
        }).join(`

`))
      let m = gI(o)
      return s
        ? { code: s, format: p, language: y, dark: E, state: m }
        : { error: 'Oh no! The source is not available.', state: m }
    }
  var r2 = (e, t) => {
      let { id: r, of: n, meta: a, story: o } = e
      if ('of' in e && n === void 0)
        throw new Error('Unexpected `of={undefined}`, did you mistype a CSF file reference?')
      if (r)
        return (
          ye(ve`Referencing stories by \`id\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
          r
        )
      let { name: i } = e
      return i
        ? (ye(ve`Referencing stories by \`name\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
          t.storyIdByName(i))
        : (o &&
            ye(ve`The \`story\` prop is deprecated, please export your stories from CSF files and reference them with \`of={}\`.

      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
          a && t.referenceMeta(a, !1),
          t.resolveOf(n || o || 'story', ['story']).story.id)
    },
    EI = (e, t, r) => {
      let { parameters: n = {} } = t || {},
        { docs: a = {} } = n,
        o = a.story || {}
      if (a.disable) return null
      let { inlineStories: i, iframeHeight: u } = a
      typeof i < 'u' &&
        ye(ve`The \`docs.inlineStories\` parameter is deprecated, use \`docs.story.inline\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `)
      let s = e.inline ?? o.inline ?? i ?? !1
      if (
        (typeof u < 'u' &&
          ye(ve`The \`docs.iframeHeight\` parameter is deprecated, use \`docs.story.iframeHeight\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `),
        s)
      ) {
        let y = e.height ?? o.height,
          E = e.autoplay ?? o.autoplay ?? !1
        return {
          story: t,
          inline: !0,
          height: y,
          autoplay: E,
          forceInitialArgs: !!e.__forceInitialArgs,
          primary: !!e.__primary,
          renderStoryToElement: r.renderStoryToElement,
        }
      }
      let p = e.height ?? o.height ?? o.iframeHeight ?? u ?? '100px'
      return { story: t, inline: !1, height: p, primary: !!e.__primary }
    },
    AI = (e = { __forceInitialArgs: !1, __primary: !1 }) => {
      let t = je(Qe),
        r = r2(e, t),
        n = Zy(r, t)
      if (!n) return h.createElement(fu, null)
      let a = EI(e, n, t)
      return a ? h.createElement(a9, { ...a }) : null
    },
    vI = ({ withSource: e, mdxSource: t, children: r, layout: n, ...a }, o, i) => {
      let u = en
          .toArray(r)
          .filter(m => m.props && (m.props.id || m.props.name || m.props.of))
          .map(m => r2(m.props, o)),
        s = bu(u, o),
        p = s.some(m => !m),
        y = t2({ ...(t ? { code: decodeURI(t) } : { ids: u }), ...(a.of && { of: a.of }) }, o, i)
      if (e === 'none') return { isLoading: p, previewProps: a }
      let E = n
      return (
        en.forEach(r, m => {
          E || (E = m?.props?.parameters?.layout)
        }),
        s.forEach(m => {
          E || !m || (E = m?.parameters.layout ?? m.parameters.docs?.canvas?.layout)
        }),
        {
          isLoading: p,
          previewProps: {
            ...a,
            layout: E ?? 'padded',
            withSource: y,
            isExpanded: (e || y.state) === 'open',
          },
        }
      )
    },
    DI = e => {
      let t = je(Qe),
        r = je(fI),
        { children: n, of: a, source: o } = e
      if ('of' in e && a === void 0)
        throw new Error('Unexpected `of={undefined}`, did you mistype a CSF file reference?')
      let { isLoading: i, previewProps: u } = vI(e, t, r),
        s,
        p,
        y
      try {
        ;({ story: s } = gu(a || 'story', ['story']))
      } catch (x) {
        n || (y = x)
      }
      try {
        p = t2({ ...o, ...(a && { of: a }) }, t, r)
      } catch (x) {
        n || (y = x)
      }
      if (y) throw y
      if (
        (e.withSource &&
          ye(ve`Setting source state with \`withSource\` is deprecated, please use \`sourceState\` with 'hidden', 'shown' or 'none' instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
        e.mdxSource &&
          ye(ve`Setting source code with \`mdxSource\` is deprecated, please use source={{code: '...'}} instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
        (e.isColumn !== void 0 || e.columns !== void 0) &&
          ye(ve`\`isColumn\` and \`columns\` props are deprecated as the Canvas block now only supports showing a single story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
        n)
      )
        return (
          ye(ve`Passing children to Canvas is deprecated, please use the \`of\` prop instead to reference a story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
  `),
          i ? h.createElement(p9, null) : h.createElement(ou, { ...u }, n)
        )
      let E = e.layout ?? s.parameters.layout ?? s.parameters.docs?.canvas?.layout ?? 'padded',
        m = e.withToolbar ?? s.parameters.docs?.canvas?.withToolbar ?? !1,
        g = e.additionalActions ?? s.parameters.docs?.canvas?.additionalActions,
        A = e.sourceState ?? s.parameters.docs?.canvas?.sourceState ?? 'hidden',
        b = e.className ?? s.parameters.docs?.canvas?.className
      return h.createElement(
        ou,
        {
          withSource: A === 'none' ? void 0 : p,
          isExpanded: A === 'shown',
          withToolbar: m,
          additionalActions: g,
          className: b,
          layout: E,
        },
        h.createElement(AI, { of: a || s.moduleExport, meta: e.meta, ...e.story })
      )
    }
  var { document: n2 } = ue
  var CI = ({ className: e, children: t, ...r }) => {
    if (typeof e != 'string' && (typeof t != 'string' || !t.match(/[\n\r]/g)))
      return h.createElement(Ta, null, t)
    let n = e && e.split('-')
    return h.createElement(du, { language: (n && n[1]) || 'plaintext', format: !1, code: t, ...r })
  }
  function Eu(e, t) {
    e.channel.emit(n0, t)
  }
  var cu = Ha.a,
    xI = ({ hash: e, children: t }) => {
      let r = je(Qe)
      return h.createElement(
        cu,
        {
          href: e,
          target: '_self',
          onClick: n => {
            let a = e.substring(1)
            n2.getElementById(a) && Eu(r, e)
          },
        },
        t
      )
    },
    SI = e => {
      let { href: t, target: r, children: n, ...a } = e,
        o = je(Qe)
      if (t) {
        if (t.startsWith('#')) return h.createElement(xI, { hash: t }, n)
        if (r !== '_blank' && !t.startsWith('https://'))
          return h.createElement(
            cu,
            {
              href: t,
              onClick: i => {
                i.button === 0 &&
                  !i.altKey &&
                  !i.ctrlKey &&
                  !i.metaKey &&
                  !i.shiftKey &&
                  (i.preventDefault(), Eu(o, i.currentTarget.getAttribute('href')))
              },
              target: r,
              ...a,
            },
            n
          )
      }
      return h.createElement(cu, { ...e })
    },
    a2 = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    FI = a2.reduce(
      (e, t) => ({
        ...e,
        [t]: q(t)({
          '& svg': { position: 'relative', top: '-0.1em', visibility: 'hidden' },
          '&:hover svg': { visibility: 'visible' },
        }),
      }),
      {}
    ),
    wI = q.a(() => ({
      float: 'left',
      lineHeight: 'inherit',
      paddingRight: '10px',
      marginLeft: '-24px',
      color: 'inherit',
    })),
    BI = ({ as: e, id: t, children: r, ...n }) => {
      let a = je(Qe),
        o = FI[e],
        i = `#${t}`
      return h.createElement(
        o,
        { id: t, ...n },
        h.createElement(
          wI,
          {
            'aria-hidden': 'true',
            href: i,
            tabIndex: -1,
            target: '_self',
            onClick: u => {
              n2.getElementById(t) && Eu(a, i)
            },
          },
          h.createElement(Oe, { icon: 'link' })
        ),
        r
      )
    },
    Au = e => {
      let { as: t, id: r, children: n, ...a } = e
      if (r) return h.createElement(BI, { as: t, id: r, ...a }, n)
      let o = t,
        { as: i, ...u } = e
      return h.createElement(o, { ...za(u, t) })
    },
    TI = a2.reduce((e, t) => ({ ...e, [t]: r => h.createElement(Au, { as: t, ...r }) }), {}),
    _I = e => {
      if (!e.children) return null
      if (typeof e.children != 'string')
        throw new Error(ve`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `)
      return h.createElement(Xo, {
        ...e,
        options: {
          forceBlock: !0,
          overrides: { code: CI, a: SI, ...TI, ...e?.options?.overrides },
          ...e?.options,
        },
      })
    },
    OI = (e => (
      (e.INFO = 'info'), (e.NOTES = 'notes'), (e.DOCGEN = 'docgen'), (e.AUTO = 'auto'), e
    ))(OI || {}),
    ya =
      'https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#description-block-parametersnotes-and-parametersinfo',
    RI = e => e && (typeof e == 'string' ? e : na(e.markdown) || na(e.text)),
    PI = e => e && (typeof e == 'string' ? e : na(e.text)),
    II = e => null,
    kI = e => {
      switch (e.type) {
        case 'story':
          return e.story.parameters.docs?.description?.story || null
        case 'meta': {
          let { parameters: t, component: r } = e.preparedMeta
          return (
            t.docs?.description?.component ||
            t.docs?.extractComponentDescription?.(r, { component: r, parameters: t }) ||
            null
          )
        }
        case 'component': {
          let {
            component: t,
            projectAnnotations: { parameters: r },
          } = e
          return r.docs?.extractComponentDescription?.(t, { component: t, parameters: r }) || null
        }
        default:
          throw new Error(`Unrecognized module type resolved from 'useOf', got: ${e.type}`)
      }
    },
    NI = ({ type: e, markdown: t, children: r }, { storyById: n }) => {
      let { component: a, parameters: o } = n()
      if (r || t) return r || t
      let { notes: i, info: u, docs: s } = o
      ;(i || u) &&
        ye(
          `Using 'parameters.notes' or 'parameters.info' properties to describe stories is deprecated. See ${ya}`
        )
      let { extractComponentDescription: p = II, description: y } = s || {},
        E = y?.component
      if (E) return E
      switch (e) {
        case 'info':
          return PI(u)
        case 'notes':
          return RI(i)
        case 'docgen':
        case 'auto':
        default:
          return p(a, { component: a, ...o })
      }
    },
    LI = e => {
      let { of: t, type: r, markdown: n, children: a } = e
      if ('of' in e && t === void 0)
        throw new Error('Unexpected `of={undefined}`, did you mistype a CSF file reference?')
      let o = je(Qe),
        i = gu(t || 'meta'),
        u
      return (
        r || n || a ? (u = NI(e, o)) : (u = kI(i)),
        r && ye(`Manually specifying description type is deprecated. See ${ya}`),
        n && ye(`The 'markdown' prop on the Description block is deprecated. See ${ya}`),
        a && ye(`The 'children' prop on the Description block is deprecated. See ${ya}`),
        u ? h.createElement(_I, null, u) : null
      )
    },
    Wne = q.div(({ theme: e }) => ({
      width: '10rem',
      '@media (max-width: 768px)': { display: 'none' },
    })),
    Vne = q.div(({ theme: e }) => ({
      position: 'fixed',
      bottom: 0,
      top: 0,
      width: '10rem',
      paddingTop: '4rem',
      paddingBottom: '2rem',
      overflowY: 'auto',
      fontFamily: e.typography.fonts.base,
      fontSize: e.typography.size.s2,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      WebkitOverflowScrolling: 'touch',
      '& *': { boxSizing: 'border-box' },
      '& > .toc-wrapper > .toc-list': {
        paddingLeft: 0,
        borderLeft: `solid 2px ${e.color.mediumlight}`,
        '.toc-list': {
          paddingLeft: 0,
          borderLeft: `solid 2px ${e.color.mediumlight}`,
          '.toc-list': { paddingLeft: 0, borderLeft: `solid 2px ${e.color.mediumlight}` },
        },
      },
      '& .toc-list-item': {
        position: 'relative',
        listStyleType: 'none',
        marginLeft: 20,
        paddingTop: 3,
        paddingBottom: 3,
      },
      '& .toc-list-item::before': {
        content: '""',
        position: 'absolute',
        height: '100%',
        top: 0,
        left: 0,
        transform: 'translateX(calc(-2px - 20px))',
        borderLeft: `solid 2px ${e.color.mediumdark}`,
        opacity: 0,
        transition: 'opacity 0.2s',
      },
      '& .toc-list-item.is-active-li::before': { opacity: 1 },
      '& .toc-list-item > a': { color: e.color.defaultText, textDecoration: 'none' },
      '& .toc-list-item.is-active-li > a': {
        fontWeight: 600,
        color: e.color.secondary,
        textDecoration: 'none',
      },
    })),
    Kne = q.p(({ theme: e }) => ({
      fontWeight: 600,
      fontSize: '0.875em',
      color: e.textColor,
      textTransform: 'uppercase',
      marginBottom: 10,
    }))
  var { document: Yne, window: Xne } = ue
  var MI = ({ children: e, disableAnchor: t }) => {
      if (t || typeof e != 'string') return h.createElement(Pa, null, e)
      let r = e.toLowerCase().replace(/[^a-z0-9]/gi, '-')
      return h.createElement(Au, { as: 'h3', id: r }, e)
    },
    qI = ({
      of: e,
      expanded: t = !0,
      withToolbar: r = !1,
      __forceInitialArgs: n = !1,
      __primary: a = !1,
    }) => {
      let { story: o } = gu(e || 'story', ['story']),
        i = o.parameters.docs?.canvas?.withToolbar ?? r
      return h.createElement(
        oI,
        { storyId: o.id },
        t &&
          h.createElement(
            h.Fragment,
            null,
            h.createElement(MI, null, o.name),
            h.createElement(LI, { of: e })
          ),
        h.createElement(DI, {
          of: e,
          withToolbar: i,
          story: { __forceInitialArgs: n, __primary: a },
          source: { __forceInitialArgs: n },
        })
      )
    }
  var jI = ({ children: e, disableAnchor: t, ...r }) => {
      if (t || typeof e != 'string') return h.createElement(Ra, null, e)
      let n = e.toLowerCase().replace(/[^a-z0-9]/gi, '-')
      return h.createElement(Au, { as: 'h2', id: n, ...r }, e)
    },
    $I = q(jI)(({ theme: e }) => ({
      fontSize: `${e.typography.size.s2 - 1}px`,
      fontWeight: e.typography.weight.bold,
      lineHeight: '16px',
      letterSpacing: '0.35em',
      textTransform: 'uppercase',
      color: e.textMutedColor,
      border: 0,
      marginBottom: '12px',
      '&:first-of-type': { marginTop: '56px' },
    })),
    HI = ({ title: e, includePrimary: t = !0 }) => {
      let { componentStories: r } = je(Qe),
        n = r().filter(a => !a.parameters?.docs?.disable)
      return (
        t || (n = n.slice(1)),
        !n || n.length === 0
          ? null
          : h.createElement(
              h.Fragment,
              null,
              h.createElement($I, null, e),
              n.map(
                a =>
                  a &&
                  h.createElement(qI, {
                    key: a.id,
                    of: a.moduleExport,
                    expanded: !0,
                    __forceInitialArgs: !0,
                  })
              )
            )
      )
    }
  HI.defaultProps = { title: 'Stories' }
  var UI = () => {
    let [e, t] = re(!0),
      [r, n, a] = Bu(),
      [o] = Tu(),
      i = Sa(),
      { expanded: u, sort: s, presetColors: p } = _u(Da, {}),
      { path: y, previewInitialized: E } = Ou()
    he(() => {
      E && t(!1)
    }, [E])
    let m = Object.values(i).some(A => A?.control),
      g = Object.entries(i).reduce(
        (A, [b, x]) => (
          x?.control?.type !== 'color' || x?.control?.presetColors
            ? (A[b] = x)
            : (A[b] = { ...x, control: { ...x.control, presetColors: p } }),
          A
        ),
        {}
      )
    return h.createElement(_t, {
      key: y,
      compact: !u && m,
      rows: g,
      args: r,
      globals: o,
      updateArgs: n,
      resetArgs: a,
      inAddonPanel: !0,
      sort: s,
      isLoading: e,
    })
  }
  function zI() {
    let e = Sa(),
      t = Object.values(e).filter(r => r?.control && !r?.table?.disable).length
    return h.createElement(
      'div',
      null,
      h.createElement(
        La,
        { col: 1 },
        h.createElement(
          'span',
          { style: { display: 'inline-block', verticalAlign: 'middle' } },
          'Controls'
        ),
        t === 0 ? '' : h.createElement(Ba, { status: 'neutral' }, t)
      )
    )
  }
  xa.register(va, e => {
    xa.add(va, {
      title: zI,
      type: wu.PANEL,
      paramKey: Da,
      render: ({ active: t }) =>
        !t || !e.getCurrentStoryData()
          ? null
          : h.createElement(wa, { active: t }, h.createElement(UI, null)),
    })
  })
} catch (e) {
  console.error('[Storybook] One of your manager-entries failed: ' + import.meta.url, e)
}
