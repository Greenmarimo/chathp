(()=>{
    "use strict";
    var __webpack_modules__ = {
        199: (e,t,s)=>{
            s.d(t, {
                q: ()=>i,
                z: ()=>o
            });
            var a = s(360);
            let n = 0;
            function i(e) {
                n = e,
                (0,
                a.D)()
            }
            function o() {
                return n
            }
        }
        ,
        983: (e,t,s)=>{
            s.d(t, {
                Z: ()=>a
            });
            const a = {
                listeners: {},
                on(e, t) {
                    this.listeners[e] || (this.listeners[e] = []),
                    this.listeners[e].push(t)
                },
                off(e, t) {
                    if (!this.listeners[e])
                        return;
                    const s = this.listeners[e].indexOf(t);
                    s > -1 && this.listeners[e].splice(s, 1)
                },
                emit(e, t) {
                    this.listeners[e] && this.listeners[e].forEach((e=>e(t)))
                }
            }
        }
        ,
        808: (e,t,s)=>{
            s.d(t, {
                $p: ()=>M,
                $t: ()=>H,
                C2: ()=>m,
                Ck: ()=>l,
                DW: ()=>A,
                FC: ()=>T,
                Gw: ()=>f,
                Hf: ()=>g,
                JY: ()=>b,
                Kv: ()=>E,
                Oo: ()=>y,
                Rc: ()=>O,
                UH: ()=>x,
                UL: ()=>q,
                VP: ()=>u,
                _F: ()=>v,
                cC: ()=>B,
                eH: ()=>c,
                hE: ()=>P,
                iE: ()=>_,
                iO: ()=>S,
                mU: ()=>C,
                rF: ()=>p,
                sO: ()=>$,
                t: ()=>d,
                uK: ()=>I,
                vf: ()=>L,
                w7: ()=>h,
                xb: ()=>D,
                yb: ()=>N
            });
            var a = s(268)
              , n = s(878)
              , i = s(199);
            let o = [];
            const r = e=>{
                if (null === e)
                    return !1;
                try {
                    JSON.parse(e)
                } catch (e) {
                    return !1
                }
                return !0
            }
              , c = e=>e.toLocaleString("en", {
                maximumFractionDigits: 2
            })
              , l = e=>new Date(e).toLocaleString("en", {
                year: "2-digit",
                month: "2-digit",
                day: "2-digit"
            })
              , d = (e,t)=>{
                if (Object.keys(e).length !== Object.keys(t).length)
                    return !1;
                for (let s in e)
                    if (e.hasOwnProperty(s))
                        if ("object" == typeof e[s]) {
                            if (!d(e[s], t[s]))
                                return !1
                        } else if (e[s] !== t[s])
                            return !1;
                return !0
            }
              , u = (e,t)=>{
                let s = (0,
                a.U2)("ch_settings");
                s = r(s) ? JSON.parse(s) : {},
                Array.isArray(s) && (s = {
                    ...s
                }),
                s[e] = t,
                (0,
                a.t8)("ch_settings", JSON.stringify(s))
            }
              , m = ()=>0 !== (0,
            i.z)()
              , h = ()=>{
                p({}, !0),
                u("operator_id", 0),
                document.getElementById("bs-5").remove();
                const e = document.createElement("div");
                e.innerHTML = (0,
                n.AH)("../../assets/html/app/service.html"),
                document.body.appendChild(e)
            }
              , p = (e,t=!1)=>{
                let s;
                t ? s = {} : (s = (0,
                a.U2)("ch_config"),
                s = r(s) ? JSON.parse(s) : {}),
                Object.keys(e).forEach((t=>{
                    s[t] = e[t]
                }
                )),
                Array.isArray(s) && (s = {
                    ...s
                }),
                (0,
                a.t8)("ch_config", JSON.stringify(s))
            }
            ;
            function g(e, t, s=!1) {
                const n = (0,
                a.U2)("ch_config")
                  , i = e.split(".");
                let o = JSON.parse(n)
                  , r = {};
                const c = i[i.length - 1];
                for (let e = 0; e < i.length - 1; e++) {
                    if (r = o[i[e]],
                    !o)
                        return
                }
                "object" == typeof r[c] ? s ? r[c] = t : r[c].push(t) : r[c] = t,
                (0,
                a.t8)("ch_config", JSON.stringify(o))
            }
            const f = ()=>{
                let e = (0,
                a.U2)("ch_settings");
                return e = r(e) ? JSON.parse(e) : {},
                e
            }
              , _ = ()=>{
                let e = (0,
                a.U2)("ch_config");
                return e = r(e) ? JSON.parse(e) : {},
                e
            }
              , y = (e,t,s)=>{
                e?.removeEventListener(t, s),
                e?.addEventListener(t, s)
            }
              , b = (e,t,s)=>{
                let a;
                if ("checkbox" === s)
                    a = document.getElementById(e).querySelector('input[name="' + t + '"]').checked;
                else
                    a = document.getElementById(e).querySelector('input[name="' + t + '"]').value;
                return a
            }
              , v = (e,t,s,a)=>{
                switch (a) {
                case "select":
                    document.getElementById(e).querySelector('select[name="' + t + '"]').value = s;
                    break;
                case "checkbox":
                    document.getElementById(e).querySelector('input[name="' + t + '"]').checked = s;
                    break;
                case "textarea":
                    document.getElementById(e).querySelector('textarea[name="' + t + '"]').value = s;
                    break;
                default:
                    document.getElementById(e).querySelector('input[name="' + t + '"]').value = s
                }
            }
              , E = e=>w(new Date(e), new Date);
            function w(e, t) {
                let s = (0,
                a.U2)("locale");
                const n = Math.abs(e.getTime() - t.getTime())
                  , i = Math.floor(n / 1e3 / 60)
                  , o = Math.floor(i / 60)
                  , r = Math.floor(o / 24)
                  , c = Math.floor(r / 7)
                  , l = Math.floor(r / 30)
                  , d = Math.floor(r / 365)
                  , u = {
                    en: {
                        year: "year",
                        month: "month",
                        week: "week",
                        day: "day",
                        hour: "hour",
                        minute: "minute",
                        pluralize: (e,t)=>1 === e ? t : t + "s"
                    },
                    ru: {
                        year: "г.",
                        month: "мсц.",
                        week: "нед.",
                        day: "д.",
                        hour: "ч.",
                        minute: "мин.",
                        pluralize: (e,t)=>t
                    }
                }
                  , m = u[s] || u.en;
                return d >= 1 ? `${d} ${m.pluralize(d, m.year)}` : l >= 1 ? `${l} ${m.pluralize(l, m.month)}` : c >= 1 ? `${c} ${m.pluralize(c, m.week)}` : r >= 1 ? `${r} ${m.pluralize(r, m.day)}` : o >= 1 ? `${o} ${m.pluralize(o, m.hour)}` : `${i} ${m.pluralize(i, m.minute)}`
            }
            function S(e, t=new Date) {
                let s = (0,
                a.U2)("locale");
                const n = Math.abs(e.getTime() - t.getTime())
                  , i = Math.floor(n / 1e3 / 60)
                  , o = Math.floor(i / 60)
                  , r = Math.floor(o / 24)
                  , c = {
                    en: {
                        day: "d",
                        hour: "h",
                        minute: "m"
                    },
                    ru: {
                        day: "д",
                        hour: "ч",
                        minute: "мин"
                    }
                }
                  , l = c[s] || c.en;
                return r >= 1 ? `${r}${l.day}. ${o % 24}${l.hour}.` : o >= 1 ? `${o}${l.hour}. ${i % 60}${l.minute}.` : `${i}${l.minute}.`
            }
            function M() {
                document.querySelectorAll(".ch-dropdown-content").forEach((e=>{
                    e.classList.remove("show")
                }
                ))
            }
            function L(e, t=!1, s=!1, a="new_post_text_input") {
                const n = document.querySelector(`#${a}`);
                if (!n)
                    return;
                n.focus();
                const i = s ? "" : n.value || "";
                let o, r;
                if (t)
                    o = `${i}${e}`,
                    r = o.length;
                else {
                    let t = n.selectionStart || 0
                      , s = n.selectionEnd || 0;
                    o = `${i.substring(0, t)}${e}${i.substring(s, i.length)}`,
                    r = t + e.length
                }
                n.value = o,
                n.setSelectionRange(r, r),
                n.dispatchEvent(new Event("input",{
                    bubbles: !0
                }))
            }
            window.onclick = function(e) {
                if (!e.target.matches(".dropbtn")) {
                    let e, t = document.getElementsByClassName("ch-dropdown-content");
                    for (e = 0; e < t.length; e++) {
                        let s = t[e];
                        s.classList.contains("show") && s.classList.remove("show")
                    }
                }
            }
            ;
            const k = e=>[...(new Intl.Segmenter).segment(e)].map((e=>e.segment));
            function B(e) {
                let t, s = f();
                if (void 0 !== s.settings && void 0 !== s.settings.emojis) {
                    if (null === s.settings.emojis || "" === s.settings.emojis || 0 === s.settings.emojis.length)
                        return;
                    t = k(s.settings.emojis)
                } else
                    t = ["🥰", "🍆", "💦", "😍", "❤️", "🤤", "🔥", "😈", "😘", "💗", "🙈", "🔞", "😽", "😹", "😅", "😪", "😭", "💞", "🥺", "🤐", "🥵", "😏", "💕", "🤝", "😱", "😉", "🤬", "👅", "💋", "😻", "😼", "🔥", "💥", "✨", "💫", "🍑", "🍒", "🍌", "🍓"];
                if (0 === t.length)
                    return;
                let a = '<div id="ch-emoji-bar" class="rounded"><div class="ch-emoji-bar-wrapper">';
                t.forEach((e=>{
                    a += '<button class="ch-emoji-bar-button" type="button">' + e + "</button>"
                }
                )),
                a += "</div></div>";
                const n = document.querySelector(".emoji-block");
                if (!n)
                    return;
                n.insertAdjacentHTML("afterbegin", a);
                n.querySelectorAll(".ch-emoji-bar-button").forEach((t=>{
                    t.addEventListener("click", (s=>{
                        L(t.innerText, !1, !1, e)
                    }
                    ))
                }
                ))
            }
            const T = ()=>{
                const e = `_locales/${(0,
                a.U2)("locale") ?? "en"}/messages.json`;
                o = (0,
                n.zr)(e)
            }
            ;
            function x() {
                0 === Object.keys(o).length && T(),
                document.querySelectorAll("[data-locale-key]").forEach((e=>{
                    const t = e.getAttribute("data-locale-key");
                    var s;
                    t in o && (e.hasAttribute("data-set-title") || (s = o[t].message,
                    /<[^>]+>/g.test(s) ? e.innerHTML = o[t].message : e.innerText = o[t].message),
                    e.hasAttribute("data-locale-placeholder") && (e.placeholder = o[t].message),
                    e.hasAttribute("data-set-title") && (e.title = o[t].message))
                }
                ))
            }
            const q = e=>{
                const t = document.getElementById(e)
                  , s = {};
                for (let e = 0; e < t.elements.length; e++) {
                    const a = t.elements[e];
                    "INPUT" !== a.tagName && "TEXTAREA" !== a.tagName || !a.name || ("checkbox" === a.type ? s[a.name] = a.checked ? 0 : 1 : s[a.name] = a.value)
                }
                return s
            }
            ;
            const H = (e,t=null)=>e in o ? t ? o[e].message.replace(/\$\${(\w+)}/g, ((e,s)=>t[s])) : o[e].message : e
              , I = ()=>{
                let e = _();
                0 === e?.greeting?.status ? (document.getElementById("greetingStatus")?.classList.remove("ch-status-disable"),
                document.getElementById("greetingStatus")?.classList.add("ch-status-enable")) : (document.getElementById("greetingStatus")?.classList.remove("ch-status-enable"),
                document.getElementById("greetingStatus")?.classList.add("ch-status-disable"))
            }
              , O = e=>{
                const t = document.querySelector(e).selectedOptions;
                return Array.from(t).map((e=>e.value))
            }
              , A = e=>{
                const t = document.querySelector(e);
                return {
                    resetForm: ()=>{
                        t.reset()
                    }
                    ,
                    value: ()=>t ? t.value : void 0,
                    append: e=>{
                        t && t.insertAdjacentHTML("beforeend", e)
                    }
                    ,
                    exists: ()=>t instanceof HTMLElement,
                    empty: ()=>{
                        t && (t.innerHTML = "")
                    }
                    ,
                    disableButton: ()=>{
                        t.setAttribute("disabled", !0)
                    }
                    ,
                    enableButton: ()=>{
                        t.removeAttribute("disabled")
                    }
                    ,
                    stopSkeleton: (e,s)=>{
                        setTimeout((()=>{
                            t.classList.remove(e)
                        }
                        ), s)
                    }
                    ,
                    startSkeleton: e=>{
                        t.classList.add(e)
                    }
                }
            }
            ;
            function $(e) {
                try {
                    JSON.parse(e)
                } catch (e) {
                    return !1
                }
                return !0
            }
            function D(e) {
                if ("" === e || null === e || "null" === e || void 0 === e || "undefined" === e || !1 === e || "false" === e || 0 === e || "0" === e)
                    return !0;
                if (Array.isArray(e))
                    return 0 === e.length;
                if ("object" == typeof e) {
                    for (const t in e)
                        if (e.hasOwnProperty(t))
                            return !1;
                    return !0
                }
                return !1
            }
            function C(e) {
                document.addEventListener("click", (function(t) {
                    let s = document.getElementById(e);
                    s && (s.contains(t.target) || t.target === document.getElementById("chatGPTBtn") || s.classList.remove("show"))
                }
                ))
            }
            function N(e) {
                const t = {
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: e,
                    hour12: !1
                };
                return new Intl.DateTimeFormat("en-US",t).format(new Date)
            }
            const P = e=>new Promise((t=>{
                setTimeout(t, e)
            }
            ))
        }
        ,
        928: (e,t,s)=>{
            s.d(t, {
                SP: ()=>He,
                jf: ()=>xe,
                gB: ()=>Oe
            });
            var a = s(808)
              , n = s(878)
              , i = s(776)
              , o = s(686)
              , r = s(60);
            const c = "ch_fans";
            let l = !0
              , d = {
                last_data_load: {
                    online: 0,
                    last_subscribers: 0,
                    last_comments: 0,
                    last_likes: 0
                },
                fans_online: [],
                data_open: "online",
                last_fans_offset: 0,
                last_fans_loaded: 0,
                last_subscribers_offset: 0,
                last_subscribers_loaded: 0,
                last_comments_offset: 0,
                last_comments_loaded: 0,
                last_likes_offset: 0,
                last_likes_loaded: 0
            }
              , u = {
                online_fans_loading: !1,
                last_subscribers_loading: !1,
                last_comments_loading: !1,
                last_likes_loading: !1
            }
              , m = {};
            const h = async()=>{
                (0,
                i.K2)() && (0,
                a.C2)() ? (l && (l = 0,
                (0,
                n.Nj)(c, "fans.html"),
                document.getElementById("fansUpdateButton").addEventListener("click", (function() {
                    p(!0)
                }
                )),
                document.getElementById("onlineFansList").addEventListener("scroll", x),
                document.getElementById("lastSubscribersList").addEventListener("scroll", O),
                document.getElementById("lastCommentsList").addEventListener("scroll", I),
                document.getElementById("lastLikesList").addEventListener("scroll", H),
                document.getElementById("lastPurchases").addEventListener("scroll", q),
                document.getElementById("fansMenuOnline").addEventListener("click", _),
                document.getElementById("fansMenuLastSubscribers").addEventListener("click", y),
                document.getElementById("fansMenuLastPurchases").addEventListener("click", b),
                document.getElementById("fansMenuLastComments").addEventListener("click", v),
                document.getElementById("fansMenuLastLikes").addEventListener("click", E),
                w()),
                (0,
                n.Ok)(c),
                p()) : alert("Error! Need activate")
            }
            ;
            function p(e=!1) {
                if (e || !(d.last_data_load[d.data_open] > Math.floor(Date.now() / 1e3) - 300)) {
                    switch (async function() {
                        let e = await (0,
                        o.W)("/api2/v2/subscriptions/subscribers/count?type=active&filter[online]=1", "GET", null)
                          , t = await (0,
                        o.W)("/api2/v2/subscriptions/count/all", "GET", null);
                        void 0 === e.error && (document.getElementById("onlineCount").innerHTML = e.count);
                        void 0 === t.error && (document.getElementById("allFansCount").innerHTML = t.subscribers.active)
                    }(),
                    d.data_open) {
                    case "online":
                        T(0);
                        break;
                    case "last_subscribers":
                        B(0);
                        break;
                    case "last_comments":
                        k(0);
                        break;
                    case "last_likes":
                        L(0);
                        break;
                    case "last_purchases":
                        M(0);
                        break;
                    default:
                        return
                    }
                    d.last_data_load[d.data_open] = Math.floor(Date.now() / 1e3)
                }
            }
            async function g(e) {
                chrome.runtime.sendMessage({
                    method: "change_route",
                    args: [e]
                })
            }
            function f(e) {
                document.querySelector("#fansMenuDropdown").setAttribute("data-locale-key", e)
            }
            function _() {
                (0,
                n.Yh)("#fansMenuDropdown", (0,
                a.$t)("fans_online")),
                f("fans_online"),
                d.data_open = "online",
                (0,
                n.e6)("#lastSubscribersList"),
                (0,
                n.e6)("#lastCommentsList"),
                (0,
                n.e6)("#lastLikesList"),
                (0,
                n.e6)("#lastPurchases"),
                (0,
                n.V_)("#onlineFansList"),
                p()
            }
            function y() {
                (0,
                n.Yh)("#fansMenuDropdown", (0,
                a.$t)("last_subscribers")),
                f("last_subscribers"),
                d.data_open = "last_subscribers",
                (0,
                n.e6)("#onlineFansList"),
                (0,
                n.e6)("#lastCommentsList"),
                (0,
                n.e6)("#lastLikesList"),
                (0,
                n.e6)("#lastPurchases"),
                (0,
                n.V_)("#lastSubscribersList"),
                p()
            }
            function b() {
                (0,
                n.Yh)("#fansMenuDropdown", (0,
                a.$t)("last_purchases")),
                f("last_purchases"),
                d.data_open = "last_purchases",
                (0,
                n.e6)("#onlineFansList"),
                (0,
                n.e6)("#lastCommentsList"),
                (0,
                n.e6)("#lastLikesList"),
                (0,
                n.e6)("#lastSubscribersList"),
                (0,
                n.V_)("#lastPurchases"),
                p()
            }
            function v() {
                (0,
                n.Yh)("#fansMenuDropdown", (0,
                a.$t)("last_comments")),
                f("last_comments"),
                d.data_open = "last_comments",
                (0,
                n.e6)("#onlineFansList"),
                (0,
                n.e6)("#lastSubscribersList"),
                (0,
                n.e6)("#lastLikesList"),
                (0,
                n.e6)("#lastPurchases"),
                (0,
                n.V_)("#lastCommentsList"),
                p()
            }
            function E() {
                (0,
                n.Yh)("#fansMenuDropdown", (0,
                a.$t)("last_likes")),
                f("last_likes"),
                d.data_open = "last_likes",
                (0,
                n.e6)("#onlineFansList"),
                (0,
                n.e6)("#lastSubscribersList"),
                (0,
                n.e6)("#lastCommentsList"),
                (0,
                n.e6)("#lastPurchases"),
                (0,
                n.V_)("#lastLikesList"),
                p()
            }
            function w() {
                let e = (0,
                a.Gw)();
                m = e.onlinefans,
                void 0 !== m && void 0 !== m.min_total_sum || (m = {},
                m.min_total_sum = 0,
                m.hide_creators = !1),
                document.getElementById("onlyFansSettingsButton").addEventListener("click", S)
            }
            function S(e) {
                e.stopImmediatePropagation(),
                (0,
                r.Sv)("setting", "settings").then((e=>{
                    document.getElementById("saveOnlyFansSettings").addEventListener("click", A);
                    let t = e.id;
                    (0,
                    a._F)(`${t}`, "min_total_sum", m.min_total_sum),
                    (0,
                    a._F)(`${t}`, "hide_creators", m.hide_creators, "checkbox")
                }
                )).catch((e=>{
                    console.error(e)
                }
                ))
            }
            const M = async e=>{
                if (e > 200)
                    return void (d.last_purchases_loaded = 0);
                let t;
                if (u.last_purchases_loading = !0,
                0 === e ? document.getElementById("lastPurchases").innerHTML = '<div class="d-flex justify-content-center card-loader"><div class="spinner-border m-5" role="status"><span class="visually-hidden">Loading...</span></div></div>' : document.getElementById("lastPurchases").innerHTML += '<div class="d-flex justify-content-center card-loader"><div class="spinner-border m-5" role="status"><span class="visually-hidden">Loading...</span></div></div>',
                t = await (0,
                o.W)("/api2/v2/payouts/transactions?limit=20&offset=" + e, "GET", null),
                0 === e ? document.getElementById("lastPurchases").innerHTML = "" : void 0 !== document.getElementById("lastPurchases").getElementsByClassName("card-loader")[0] && document.getElementById("lastPurchases").getElementsByClassName("card-loader")[0].remove(),
                d.last_purchases_loaded = t.list.length,
                d.last_purchases_offset = e,
                void 0 === t.list || void 0 !== t.error || 0 === t.list.length)
                    return;
                let s = document.createElement("div");
                t.list.forEach((e=>{
                    let t = `\n            <button \n                type="button" \n                class="btn btn-secondary btn-xs" \n                data-bs-toggle="popover" \n                data-bs-content="${(0,
                    n.CB)(e.description).replace(/"/g, "'")}"\n            >\n                <i class="fa-regular fa-info-circle"></i>\n            </button>`;
                    s.innerHTML += `<div class="clearfix item p-2">\n            <div class="float-start me-1">\n                <a href="#" class="open-chat" data-user_id="${e.user.id}">\n                    <i class="fa fa-envelope"></i>\n                </a>\n            </div>\n            <div class="float-start">\n                <strong class="text-truncate d-block name1">\n                    ${e.user.name}\n                </strong>\n                <div>\n                    <span class="badge bg-success">${e.amount} ${e.currency}</span>\n                </div>\n            </div>\n            <div class="float-start mx-2">${t}</div>\n            <div class="float-end">\n                <small>\n                    <i class="fa-regular fa-clock"></i> ${(0,
                    a.Kv)(e.createdAt)}\n                </small>\n            </div>\n        </div>`
                }
                )),
                document.getElementById("lastPurchases").appendChild(s);
                document.getElementById("lastPurchases").querySelectorAll(".open-chat").forEach((e=>{
                    e.removeEventListener("click", (()=>{}
                    )),
                    e.addEventListener("click", (t=>(t.preventDefault(),
                    g(e.dataset.user_id),
                    !1)))
                }
                )),
                u.last_purchases_loading = !1,
                (0,
                n.Yq)()
            }
              , L = async e=>{
                if (e > 200)
                    return void (d.last_likes_loaded = 0);
                let t;
                if (u.last_likes_loading = !0,
                0 === e ? document.getElementById("lastLikesList").innerHTML = '<div class="d-flex justify-content-center card-loader"><div class="spinner-border m-5" role="status"><span class="visually-hidden">Loading...</span></div></div>' : document.getElementById("lastLikesList").innerHTML += '<div class="d-flex justify-content-center card-loader"><div class="spinner-border m-5" role="status"><span class="visually-hidden">Loading...</span></div></div>',
                t = await (0,
                o.W)("/api2/v2/users/notifications?limit=20&offset=" + e + "&type=favorited&skip_users=all&format=infinite", "GET", null),
                0 === e ? document.getElementById("lastLikesList").innerHTML = "" : void 0 !== document.getElementById("lastLikesList").getElementsByClassName("card-loader")[0] && document.getElementById("lastLikesList").getElementsByClassName("card-loader")[0].remove(),
                d.last_likes_loaded = t.list.length,
                d.last_likes_offset = e,
                void 0 === t.list || void 0 !== t.error || 0 === t.list.length)
                    return;
                let s = document.createElement("div");
                t.list.forEach((e=>{
                    let t = '<button type="button" class="btn btn-secondary btn-xs" data-bs-toggle="popover" data-bs-content="' + (0,
                    n.CB)(e.text).replace(/"/g, "'") + '"><i class="fa-regular fa-heart"></i></button>';
                    s.innerHTML += '<div class="clearfix item p-2">\n                            <div class="float-start me-1"><a href="#" class="open-chat" data-user_id="' + e.replacePairs["{RELATED_USER_ID}"] + '"><i class="fa fa-envelope"></i></a></div>\n                            <div class="float-start"><strong class="text-truncate d-block name1">' + e.replacePairs["{RELATED_USER_NAME}"] + '</strong></div>\n                            <div class="float-start mx-2">' + t + '</div>\n                            <div class="float-end"><small><i class="fa-regular fa-clock"></i> ' + (0,
                    a.Kv)(e.createdAt) + "</small></div>\n                        </div>"
                }
                )),
                document.getElementById("lastLikesList").appendChild(s);
                document.getElementById("lastLikesList").querySelectorAll(".open-chat").forEach((e=>{
                    e.removeEventListener("click", (()=>{}
                    )),
                    e.addEventListener("click", (t=>(t.preventDefault(),
                    g(e.dataset.user_id),
                    !1)))
                }
                )),
                u.last_likes_loading = !1,
                (0,
                n.Yq)()
            }
              , k = async e=>{
                if (e > 200)
                    return void (d.last_comments_loaded = 0);
                let t;
                if (u.last_comments_loading = !0,
                0 === e ? document.getElementById("lastCommentsList").innerHTML = '<div class="d-flex justify-content-center card-loader"><div class="spinner-border m-5" role="status"><span class="visually-hidden">Loading...</span></div></div>' : document.getElementById("lastCommentsList").innerHTML += '<div class="d-flex justify-content-center card-loader"><div class="spinner-border m-5" role="status"><span class="visually-hidden">Loading...</span></div></div>',
                t = await (0,
                o.W)("/api2/v2/users/notifications?limit=20&offset=" + e + "&type=commented&skip_users=all&format=infinite", "GET", null),
                0 === e ? document.getElementById("lastCommentsList").innerHTML = "" : void 0 !== document.getElementById("lastCommentsList").getElementsByClassName("card-loader")[0] && document.getElementById("lastCommentsList").getElementsByClassName("card-loader")[0].remove(),
                d.last_comments_loaded = t.list.length,
                d.last_comments_offset = e,
                void 0 === t.list || void 0 !== t.error || 0 === t.list.length)
                    return;
                let s = document.createElement("div");
                t.list.forEach((e=>{
                    let t = '<button type="button" class="btn btn-secondary btn-xs" data-bs-toggle="popover" data-bs-content="' + (0,
                    n.CB)(e.text).replace(/"/g, "'") + '"><i class="fa-regular fa-comment-dots"></i></button>';
                    s.innerHTML += '<div class="clearfix item p-2">\n                            <div class="float-start me-1"><a href="#" class="open-chat" data-user_id="' + e.replacePairs["{RELATED_USER_ID}"] + '"><i class="fa fa-envelope"></i></a></div>\n                            <div class="float-start"><strong class="text-truncate d-block name1">' + e.replacePairs["{RELATED_USER_NAME}"] + '</strong></div>\n                            <div class="float-start mx-2">' + t + '</div>\n                            <div class="float-end"><small><i class="fa-regular fa-clock"></i> ' + (0,
                    a.Kv)(e.createdAt) + "</small></div>\n                        </div>"
                }
                )),
                document.getElementById("lastCommentsList").appendChild(s);
                document.getElementById("lastCommentsList").querySelectorAll(".open-chat").forEach((e=>{
                    e.removeEventListener("click", (()=>{}
                    )),
                    e.addEventListener("click", (t=>(t.preventDefault(),
                    g(e.dataset.user_id),
                    !1)))
                }
                )),
                u.last_comments_loading = !1,
                (0,
                n.Yq)()
            }
              , B = async e=>{
                if (e > 200)
                    return void (d.last_subscribers_loaded = 0);
                let t;
                if (u.last_subscribers_loading = !0,
                0 === e ? document.getElementById("lastSubscribersList").innerHTML = '<div class="d-flex justify-content-center card-loader"><div class="spinner-border m-5" role="status"><span class="visually-hidden">Loading...</span></div></div>' : document.getElementById("lastSubscribersList").innerHTML += '<div class="d-flex justify-content-center card-loader"><div class="spinner-border m-5" role="status"><span class="visually-hidden">Loading...</span></div></div>',
                t = await (0,
                o.W)("/api2/v2/users/notifications?limit=20&offset=" + e + "&type=subscribed&skip_users=all&format=infinite", "GET", null),
                0 === e ? document.getElementById("lastSubscribersList").innerHTML = "" : void 0 !== document.getElementById("lastSubscribersList").getElementsByClassName("card-loader")[0] && document.getElementById("lastSubscribersList").getElementsByClassName("card-loader")[0].remove(),
                d.last_subscribers_loaded = t.list.length,
                d.last_subscribers_offset = e,
                void 0 === t.list || void 0 !== t.error || 0 === t.list.length)
                    return;
                let s, n, i = document.createElement("div");
                t.list.forEach((e=>{
                    if ("price_changed_from_free" === e.subType)
                        return;
                    if ("price_changed_not_from_free" === e.subType)
                        return;
                    if ("subscribe_was_expired" === e.subType)
                        return;
                    let t;
                    if (t = "returning_subscriber" === e.subType ? '<span class="badge bg-warning"><i class="fa-solid fa-rotate-left"></i> <span data-locale-key="returning">' + (0,
                    a.$t)("returning") + "</span></span>" : "new_subscriber" === e.subType ? '<span class="badge bg-success"><i class="fa-solid fa-plus"></i> <span data-locale-key="new">New</span></span>' : '<span class="badge bg-light">' + e.subType + "</span>",
                    e.replacePairs["{RELATED_USER_ID}"])
                        s = e.replacePairs["{RELATED_USER_ID}"],
                        n = e.replacePairs["{RELATED_USER_NAME}"];
                    else if (e.user.id) {
                        s = e.user.id;
                        const t = /<a href='https:\/\/onlyfans\.com\/([^']+)'>(.+)<\/a>/.exec(e.replacePairs["{SUBSCRIBER_LINK}"]);
                        t && (n = t[2])
                    }
                    i.innerHTML += `<div class="clearfix item p-2">\n\t\t\t<div class="float-start me-1"><a href="#" class="open-chat" data-user_id="${s}"><i class="fa fa-envelope"></i></a></div>\n\t\t\t<div class="float-start"><strong class="text-truncate d-block name2">${n}</strong></div>\n\t\t\t<div class="float-start mx-2">${t}</div>\n\t\t\t<div class="float-end"><small><i class="fa-regular fa-clock"></i> ${(0,
                    a.Kv)(e.createdAt)}</small></div>\n\t\t</div>`
                }
                )),
                document.getElementById("lastSubscribersList").appendChild(i);
                document.getElementById("lastSubscribersList").querySelectorAll(".open-chat").forEach((e=>{
                    e.removeEventListener("click", (()=>{}
                    )),
                    e.addEventListener("click", (t=>(t.preventDefault(),
                    g(e.dataset.user_id),
                    !1)))
                }
                )),
                u.last_subscribers_loading = !1
            }
              , T = async e=>{
                let t;
                if (u.online_fans_loading = !0,
                0 === e ? (d.fans_online = [],
                document.getElementById("onlineFansList").innerHTML = '<div class="d-flex justify-content-center card-loader"><div class="spinner-border m-5" role="status"><span class="visually-hidden">Loading...</span></div></div>') : document.getElementById("onlineFansList").innerHTML += '<div class="d-flex justify-content-center card-loader"><div class="spinner-border m-5" role="status"><span class="visually-hidden">Loading...</span></div></div>',
                t = m.min_total_sum > 0 ? await (0,
                o.W)("/api2/v2/subscriptions/subscribers?limit=10&offset=" + e + "&format=infinite&sort=desc&type=active&filter[total_spent]=" + Number(m.min_total_sum) + "&filter[online]=1&more=true", "GET", null) : await (0,
                o.W)("/api2/v2/subscriptions/subscribers?limit=10&offset=" + e + "&format=infinite&sort=desc&type=active&filter[online]=1&more=true", "GET", null),
                0 === e ? document.getElementById("onlineFansList").innerHTML = "" : void 0 !== document.getElementById("onlineFansList").getElementsByClassName("card-loader")[0] && document.getElementById("onlineFansList").getElementsByClassName("card-loader")[0].remove(),
                d.last_fans_loaded = t.list.length,
                d.last_fans_offset = e,
                void 0 === t.list || void 0 !== t.error || 0 === t.list.length)
                    return;
                let s = document.createElement("div");
                t.list.forEach((e=>{
                    if (d.fans_online.includes(e.id))
                        return;
                    if (d.fans_online.push(e.id),
                    void 0 !== m && null !== m.hide_creators && !0 === m.hide_creators && e.isPerformer)
                        return;
                    void 0 === e.avatar || null === e.avatar ? e.avatar = '<div class="rounded-circle bg-info text-center text-uppercase text-muted fs-5" style="width:30px;height:30px;"></div>' : e.avatar = '<img src="' + e.avatar + '" class="rounded-circle" style="width:30px;height:30px;">';
                    let t = 0;
                    void 0 !== e.subscribedOnData && void 0 !== e.subscribedOnData.totalSumm && (t = e.subscribedOnData.totalSumm),
                    s.innerHTML += '<div class="clearfFix item p-1">\n                            <div class="float-start pt-1 item-avatar"><span class="online"> </span>' + e.avatar + '</div>\n                            <div class="float-start mx-2 text-truncate name3">\n                                <a href="https://onlyfans.com/' + e.username + '" class="text-decoration-none">' + e.name.substring(0, 20) + "</a><br/>" + $(t) + '\n                            </div>\n                            <div class="float-end p-2"><a href="#" class="open-chat" data-user_id="' + e.id + '"><i class="fa fa-envelope"></i></a></div>\n                        </div>'
                }
                )),
                document.getElementById("onlineFansList").appendChild(s);
                var a;
                document.getElementById("onlineFansList").querySelectorAll(".open-chat").forEach((e=>{
                    e.removeEventListener("click", (()=>{}
                    )),
                    e.addEventListener("click", (t=>(t.preventDefault(),
                    g(e.dataset.user_id),
                    !1)))
                }
                )),
                u.online_fans_loading = !1,
                !t?.hasMore || (a = document.getElementById("onlineFansList")).scrollHeight > a.clientHeight || await T(e + 10)
            }
            ;
            const x = async()=>{
                if (!1 === u.online_fans_loading) {
                    let e = document.getElementById("onlineFansList");
                    e.offsetHeight + e.scrollTop >= e.scrollHeight - 1 && await T(d.last_fans_offset + 10)
                }
            }
              , q = async()=>{
                if (20 === d.last_purchases_loaded && !1 === u.last_purchases_loading) {
                    let e = document.getElementById("lastPurchases");
                    e.offsetHeight + e.scrollTop >= e.scrollHeight - 1 && M(d.last_purchases_offset + 20)
                }
            }
              , H = async()=>{
                if (20 === d.last_likes_loaded && !1 === u.last_likes_loading) {
                    let e = document.getElementById("lastLikesList");
                    e.offsetHeight + e.scrollTop >= e.scrollHeight - 1 && L(d.last_likes_offset + 20)
                }
            }
              , I = async()=>{
                if (20 === d.last_comments_loaded && !1 === u.last_comments_loading) {
                    let e = document.getElementById("lastCommentsList");
                    e.offsetHeight + e.scrollTop >= e.scrollHeight - 1 && k(d.last_comments_offset + 20)
                }
            }
              , O = async()=>{
                if (20 === d.last_subscribers_loaded && !1 === u.last_subscribers_loading) {
                    let e = document.getElementById("lastSubscribersList");
                    e.offsetHeight + e.scrollTop >= e.scrollHeight - 1 && B(d.last_subscribers_offset + 20)
                }
            }
              , A = async()=>{
                (0,
                a.VP)("onlinefans", {
                    min_total_sum: (0,
                    a.JY)("onlyFansSettings", "min_total_sum"),
                    hide_creators: (0,
                    a.JY)("onlyFansSettings", "hide_creators", "checkbox")
                }),
                w(),
                alert("Saved"),
                (0,
                n.Mr)("onlyFansSettings"),
                T(0)
            }
              , $ = e=>e > 0 ? '<span class="badge bg-success">$' + e + "</span>" : '<span class="badge bg-light text-dark">$0</span>';
            var D = s(522)
              , C = s(329)
              , N = s(360)
              , P = s(76)
              , F = s(783)
              , U = s(268);
            class j {
                constructor(e, t, s) {
                    this.statuses = e,
                    this.message_id = t,
                    this.messages = s,
                    this.sent = []
                }
                fixInStorage() {
                    let e = (0,
                    U.U2)("unsent_messages")
                      , t = {
                        messages: this.messages,
                        sent: this.sent,
                        message_id: this.message_id,
                        already_unsent: this.statuses.already_unsent,
                        unsent_success: this.statuses.already_unsent
                    };
                    if (e)
                        e = JSON.parse((0,
                        U.U2)("unsent_messages")),
                        e[this.message_id] = t,
                        (0,
                        U.t8)("unsent_messages", JSON.stringify(e));
                    else {
                        let e = {};
                        e[this.message_id] = t,
                        (0,
                        U.t8)("unsent_messages", JSON.stringify(e))
                    }
                }
                async cancelMessage() {
                    for (const e of this.messages) {
                        if (!e.user_id)
                            continue;
                        const t = await this.cancelSingleMessage(e);
                        this.sent.push(e),
                        this.statuses.already_unsent++,
                        (0,
                        n.Xf)("chMessageUnsent", `${(0,
                        a.$t)("cancelling")} ${this.statuses.already_unsent} / ${this.messages.length}`, 1),
                        !0 === t && this.statuses.unsent_success++,
                        this.fixInStorage()
                    }
                    await this.updateMessageStatus(this.message_id, 3, this.statuses.unsent_success),
                    this.removeMessageFromStorage()
                }
                removeMessageFromStorage() {
                    let e = (0,
                    U.U2)("unsent_messages");
                    e = JSON.parse(e),
                    delete e[this.message_id],
                    (0,
                    U.t8)("unsent_messages", JSON.stringify(e))
                }
                async cancelSingleMessage(e) {
                    try {
                        return (await (0,
                        o.W)(`/api2/v2/messages/${e.message_id}`, "DELETE", {
                            withUserId: e.user_id
                        })).success
                    } catch (e) {
                        return console.error(e),
                        !1
                    }
                }
                async updateMessageStatus(e, t, s) {
                    try {
                        await (0,
                        P.D)({
                            module: "of_messages",
                            action: "update_status"
                        }, {
                            message_id: e,
                            status: t,
                            message_unsent: s
                        })
                    } catch (e) {
                        console.error(e)
                    }
                }
            }
            const G = chrome.runtime.getURL("assets/img/collect.gif")
              , R = "ch_messages";
            let W, z = !0, X = 0, V = {
                lists: [],
                media_vault: [],
                media_selected: [],
                last_vault_offset: 0,
                list_id: 0
            }, J = {
                stop_sending: !1,
                media_vault_loading: 0
            }, K = {}, Y = 0, Z = [], Q = {}, ee = [];
            async function te(e) {
                e.message_sent.status = 2,
                W = e.message_sent,
                Q = e.message,
                await pe(),
                de()
            }
            !async function() {
                setTimeout((async()=>{
                    await async function() {
                        let e = (0,
                        U.U2)("mass_message");
                        if (!e)
                            return;
                        e = JSON.parse((0,
                        U.U2)("mass_message")),
                        await te({
                            message: e,
                            message_sent: JSON.parse((0,
                            U.U2)("message_sent"))
                        })
                    }(),
                    await async function() {
                        let e = (0,
                        U.U2)("unsent_messages");
                        if (!e)
                            return;
                        if (e = JSON.parse((0,
                        U.U2)("unsent_messages")),
                        !Object.keys(e).length)
                            return;
                        for (const [t,s] of Object.entries(e)) {
                            let e = {
                                already_unsent: s.already_unsent,
                                unsent_success: s.unsent_success
                            }
                              , t = s.message_id
                              , a = s.ids.filter((e=>-1 === s.sent.indexOf(e)));
                            const n = new j(e,t,a);
                            await n.cancelMessage(),
                            await ne(),
                            console.log(`Done: ${t}`)
                        }
                        (0,
                        U.Od)("unsent_messages")
                    }()
                }
                ), 2e3)
            }();
            const se = async()=>{
                (0,
                i.K2)() && (0,
                a.C2)() ? (z && (z = 0,
                (0,
                n.Nj)(R, "messages.html"),
                document.getElementById("chMessagesNewButton").addEventListener("click", (e=>{
                    document.querySelector("#chMessagesNew") && (0,
                    r.GA)("chMessagesNew"),
                    (0,
                    r.Sv)("message", "message", !0).then((e=>{
                        (0,
                        n.V5)("#chMessagesNew .spinner-border"),
                        document.querySelector('#chMessagesNew select[name="send_to[]"]').innerHTML = "",
                        document.querySelector('#chMessagesNew select[name="excluded_lists[]"]').innerHTML = "",
                        document.getElementById("chMessageMedia").innerHTML = "",
                        Se(0),
                        (0,
                        a.cC)("chMessagesNewMessage"),
                        document.getElementById("chMessageMediaModal").addEventListener("click", (function() {
                            (0,
                            r.Sv)("message", "media", !1).then((e=>{
                                document.querySelector("#chMessageMediaModal .ch-media-vault-container").innerHTML = "",
                                document.querySelector("#chMessageMediaModal .ch-media-vault-lists").innerHTML = "",
                                V.last_vault_offset = 0,
                                V.list_id = 0,
                                we(0),
                                Me(0),
                                document.querySelector("#chMessageMediaModal .ch-media-vault-container").addEventListener("scroll", (function() {
                                    !function() {
                                        if (-1 !== V.last_vault_offset && !1 === J.media_vault_loading) {
                                            let e = document.querySelector("#chMessageMediaModal .ch-media-vault-container");
                                            e.offsetHeight + e.scrollTop >= e.scrollHeight - 1 && Me(V.last_vault_offset + 24)
                                        }
                                    }()
                                }
                                )),
                                document.getElementById("chMediaVaultAdd").addEventListener("click", (function() {
                                    !function() {
                                        let e = document.querySelectorAll("#chMessageMediaModal .ch-media-vault-container input[type='checkbox']:checked")
                                          , t = "";
                                        for (let s = 0; s < e.length; s++) {
                                            let a = Number(e[s].value);
                                            if (void 0 === V.media_selected[a] && (V.media_selected[a] = V.media_vault[a]),
                                            !document.querySelector("#chMessageMedia .media-item[data-id='" + a + "']")) {
                                                let e;
                                                e = "video" === V.media_selected[a].type ? '<i class="fa-solid fa-video"></i> ' + (0,
                                                n.hb)(V.media_selected[a].source.duration) : '<i class="fa-solid fa-image"></i>',
                                                t += `\n\t\t\t\t<div class="media-item position-relative d-inline-block m-1 rounded" data-id="${a}">\n\t\t\t\t\t<a class="position-absolute end-0 m-1 badge bg-danger" type="button" onclick="this.parentNode.remove();">\n\t\t\t\t\t\t<i class="fa fa-trash"></i>\n\t\t\t\t\t</a>\n\t\t\t\t\t<span class="position-absolute badge bg-success bg-opacity-75 m-1">${e}</span>\n\t\t\t\t\t<span class="position-absolute bottom-0 m-1 bg-light media-paid">\n\t\t\t\t\t\t<div class="form-check">\n\t\t\t\t\t\t\t<input class="form-check-input" type="checkbox" value="${V.media_selected[a].id}" name="media-paid" id="forPaid${a}">\n\t\t\t\t\t\t\t<label class="form-check-label text-white" for="forPaid${a}">Paid</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</span>\n\t\t\t\t\t<img src="${V.media_selected[a].thumb}" width="100" data-not-make-blur height="100" class="rounded"/>\n\t\t\t\t</div>\n\t\t\t`
                                            }
                                        }
                                        "" !== t && document.querySelector("#chMessageMedia").insertAdjacentHTML("beforeend", t)
                                    }()
                                }
                                ))
                            }
                            )).catch((e=>{
                                console.error(e)
                            }
                            ))
                        }
                        )),
                        document.getElementById("chCreateMessageButton").addEventListener("click", (function() {
                            _e = !1,
                            function() {
                                let e = ce();
                                if (0 === e.send_to_list.length)
                                    return (0,
                                    F.cB)("Please chose any group from send to list."),
                                    !1;
                                if (!e.media_free.length && !e.media_paid.length && !e.message.trim().length)
                                    return (0,
                                    F.cB)("Please fill message field or add media from vault."),
                                    !1;
                                if (0 === e.price && e.media_paid.length > 0)
                                    return (0,
                                    F.cB)("Error! Paid media can't be added to free message"),
                                    !1;
                                if (e.price > 0 && e.price < 3)
                                    return (0,
                                    F.cB)("Error! Minimum $3"),
                                    !1;
                                if (e.price > 0 && 0 === e.media_paid.length)
                                    return (0,
                                    F.cB)("Error! No paid media in paid message"),
                                    !1;
                                if (e.send_to_list = e.send_to_list.filter((e=>0 !== e.usersCount)),
                                0 === e.send_to_list.length)
                                    return (0,
                                    F.cB)("Error! List to send is incorrect"),
                                    !1;
                                const t = parseFloat(e.delay);
                                return isNaN(t) ? ((0,
                                F.cB)("Error! Please enter a valid number"),
                                !1) : t < 0 ? ((0,
                                F.cB)("Error! Number must be greater than or equal to 0"),
                                !1) : !(t > 60 && ((0,
                                F.cB)("Error! Number must be less than or equal to 60"),
                                1))
                            }() && (0,
                            r.Sv)("message", "preview", !1).then((async e=>{
                                e.querySelector(".ch-information-loading-gif").src = G,
                                e.querySelector(".excluded-lists").innerHTML = "",
                                e.querySelector(".send-to").innerHTML = "",
                                e.querySelector(".count-list").innerHTML = "0",
                                e.querySelector(".estimated_time").innerHTML = "",
                                e.querySelector(".result-success").innerHTML = "0",
                                e.querySelector(".result-excluded").innerHTML = "0",
                                e.querySelector(".result-failed").innerHTML = "0",
                                e.querySelector(".result-unsend").innerHTML = "0",
                                e.querySelector(".unsed-count").innerHTML = "0",
                                e.querySelector(".unsend-result-block").classList.add("d-none"),
                                (0,
                                a.Oo)(document.querySelector("#chCancelMassMessage"), "click", be),
                                (0,
                                a.$t)("start"),
                                (0,
                                a.$t)("unsend");
                                let t = 0
                                  , s = ce();
                                if (ee = await async function(e, t=0) {
                                    let s = [];
                                    for (const t of e.send_to_list) {
                                        let a = !0
                                          , n = 0;
                                        for (; a && !_e; ) {
                                            let i;
                                            if (i = 1 === t.id ? await (0,
                                            o.W)("/api2/v2/subscriptions/subscribers?limit=10&offset=" + n + "&format=infinite&sort=desc&field=last_activity&type=active&filter[online]=1&more=false", "GET", null) : await (0,
                                            o.W)("/api2/v2/lists/" + t.id + "/users?offset=" + n + "&limit=10&format=infinite", "GET", null),
                                            i && i.list) {
                                                let a = i.list.filter((t=>!(e.excluded_lists_ids.some((e=>t.listsStates.map((e=>e.id)).includes(e))) || e.exclude_spend_less > 0 && (void 0 === t.subscribedOnData?.totalSumm || t.subscribedOnData.totalSumm < e.exclude_spend_less) || e.exclude_spend_more > 0 && void 0 !== t.subscribedOnData?.totalSumm && t.subscribedOnData.totalSumm > e.exclude_spend_more || e.exclude_creators && void 0 !== t.isPerformer && t.isPerformer))).map((e=>({
                                                    id: e.id,
                                                    tries: 0,
                                                    successSent: !1,
                                                    isPerformer: e.isPerformer,
                                                    subscribedOnData: {
                                                        totalSumm: e.subscribedOnData?.totalSumm
                                                    }
                                                })));
                                                t.users.push(...a),
                                                s = s.concat(i.list),
                                                ye(s.length)
                                            }
                                            n += 10,
                                            i && !1 !== i.hasMore || (a = !1)
                                        }
                                    }
                                    e.send_to_list = e.send_to_list.filter((e=>e.users.length > 0));
                                    let a = 0;
                                    return e.send_to_list.forEach((e=>{
                                        a += e.users.length
                                    }
                                    )),
                                    e.total_accounts = a,
                                    ye(a),
                                    e
                                }(s),
                                ee.total_accounts > 0 && document.getElementById("chStartPendingMassMessage")?.classList.remove("d-none"),
                                document.querySelector("#chMessagePreviewModal .message-preview").value = s.message,
                                document.querySelectorAll(".ch-information-loading")?.forEach((e=>{
                                    e.classList.add("d-none")
                                }
                                )),
                                document.querySelector(".total_accounts").innerHTML = s.total_accounts,
                                0 === s.price ? document.querySelector("#chMessagePreviewModal .message-price").innerHTML = '<strong class="text-success">FREE</strong>' : document.querySelector("#chMessagePreviewModal .message-price").innerHTML = "<strong>$" + (0,
                                a.eH)(s.price) + "</strong>",
                                document.querySelector("#chMessagePreviewModal .media-files").innerHTML = s.media_free.length + " free, " + s.media_paid.length + " paid",
                                s.send_to_list.length > 0) {
                                    s.send_to_list.forEach(((e,s)=>{
                                        void 0 !== e.name && (t += e.usersCount,
                                        document.querySelector("#chMessagePreviewModal .send-to").innerHTML += `${s + 1}. ${e.name}: <strong>${e.users.length}</strong> ${(0,
                                        a.$t)("of")} ${e.usersCount}<br/>`)
                                    }
                                    ));
                                    const e = s.delay > 0 ? s.total_accounts * Number(s.delay) : t;
                                    document.querySelector("#chMessagePreviewModal .estimated_time").innerHTML = (0,
                                    n.hb)(e)
                                } else
                                    document.querySelector("#chMessagePreviewModal .send-to").innerHTML += `<span class='text-danger'>${(0,
                                    a.$t)("fan_not_found_error")}</span>`;
                                if (s.excluded_lists.length > 0 && Object.keys(s.excluded_lists).forEach((e=>{
                                    void 0 !== s.excluded_lists[e].name && (document.querySelector("#chMessagePreviewModal .excluded-lists").innerHTML += Number(e) + 1 + ". " + s.excluded_lists[e].name + " (" + s.excluded_lists[e].usersCount + ")<br/>")
                                }
                                )),
                                s.exclude_spend_less > 0) {
                                    let e = (0,
                                    a.$t)("exclude_who_spend_less");
                                    document.querySelector("#chMessagePreviewModal .excluded-lists").innerHTML += `<i class="fa fa-plus"></i> <span data-locale-key="exclude_who_spend_less">${e}</span> <strong>${s.exclude_spend_less}</strong><br/>`
                                }
                                if (s.exclude_spend_more > 0) {
                                    let e = (0,
                                    a.$t)("exclude_who_spend_more");
                                    document.querySelector("#chMessagePreviewModal .excluded-lists").innerHTML += `<i class="fa fa-plus"></i> <span data-locale-key="exclude_who_spend_more">${e}</span> <strong>${s.exclude_spend_more}</strong><br/>`
                                }
                                if (s.exclude_creators) {
                                    let e = (0,
                                    a.$t)("exclude_creators");
                                    document.querySelector("#chMessagePreviewModal .excluded-lists").innerHTML += `<i class="fa fa-plus"></i> <span data-locale-key="exclude_creators">${e}</span><br/>`
                                }
                                document.getElementById("chStartPendingMassMessage").addEventListener("click", ve)
                            }
                            )).catch((e=>{
                                console.error(e)
                            }
                            ))
                        }
                        )),
                        document.getElementById("chMessagesUpdate").addEventListener("click", (function() {
                            ne()
                        }
                        )),
                        document.querySelector('#chMessagesNew input[name="exclude_spend_less"]').addEventListener("keyup", (function() {
                            ae()
                        }
                        )),
                        document.querySelector('#chMessagesNew input[name="exclude_spend_more"]').addEventListener("keyup", (function() {
                            ae()
                        }
                        )),
                        (0,
                        n.WR)()
                    }
                    )).catch((e=>{
                        console.error(e)
                    }
                    ))
                }
                )),
                function() {
                    let e = (0,
                    a.Gw)();
                    K = e.messages,
                    void 0 === K || K.min_total_sum
                }()),
                X < Date.now() - 3e5 && ne(),
                (0,
                n.Ok)(R)) : (0,
                F.cB)("Error! Need activate")
            }
            ;
            function ae() {
                let e = document.querySelector('#chMessagesNew input[name="exclude_spend_less"]').value
                  , t = document.querySelector('#chMessagesNew input[name="exclude_spend_more"]').value
                  , s = document.querySelector("#chMessagesNew .filter-calc");
                (0,
                a.xb)(e) && (0,
                a.xb)(t) ? s.classList.add("d-none") : (s.classList.remove("d-none"),
                e > 0 && t > 0 ? s.innerHTML = (0,
                a.$t)("spent_less_than_zero_and_spend_more_then_zero", {
                    spend_less: e,
                    spend_more: t
                }) : (e > 0 && (s.innerHTML = (0,
                a.$t)("spend_less_than_zero", {
                    spend_less: e
                })),
                t > 0 && (s.innerHTML = (0,
                a.$t)("spend_more_than_zero", {
                    spend_more: t
                }))))
            }
            async function ne() {
                X = Date.now();
                let e = document.getElementById("chMessagesTable");
                e.innerHTML = "",
                document.getElementById("chMessagesUpdate").innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>',
                document.getElementById("chMessagesUpdate").disabled = !0;
                let t = await (0,
                P.D)({
                    module: "of_messages",
                    action: "load"
                }, null);
                if (Z = t.profiles,
                "success" === t.status) {
                    let s = "";
                    t.data.forEach((e=>{
                        s += ` \n \t\t\t\t<tr>\n \t\t\t\t\t<td>${e.info}</td>\n                \t<td class="text-center" style="width: 100px;">\n                    \t${e.status}\n                    \t<button class="btn btn-light btn-xs mt-1 open-message" type="button" data-id="${e.id}">\n\t\t\t\t\t\t\t<i class="fa fa-eye pointer-events-none"></i> \n\t\t\t\t\t\t\t<span data-locale-key="open" class="pointer-events-none">Open</span>\n\t\t\t\t\t\t</button>\n                \t</td>\n                </tr>`
                    }
                    )),
                    "" !== s && e.insertAdjacentHTML("beforeend", s)
                }
                document.querySelectorAll("#chMessagesTable .open-message")?.forEach((e=>{
                    e.addEventListener("click", (async function(e) {
                        e.stopImmediatePropagation(),
                        e.preventDefault(),
                        await async function(e) {
                            try {
                                await (0,
                                r.Sv)("message", "overview");
                                let t = e.target.dataset.id;
                                if (!t)
                                    return void (0,
                                    F.cB)("Undefined message");
                                document.getElementById("chMessageUnsent").addEventListener("click", ie),
                                await oe(t)
                            } catch (e) {
                                console.error(e)
                            }
                        }(e)
                    }
                    ))
                }
                )),
                (0,
                n.WR)(),
                document.getElementById("chMessagesUpdate").innerHTML = '<i class="fa-solid fa-sync"></i>',
                document.getElementById("chMessagesUpdate").disabled = !1,
                (0,
                a.UH)()
            }
            async function ie(e) {
                let t = e.currentTarget.getAttribute("data-id");
                if ("" === t)
                    return void (0,
                    F.cB)("Undefined message");
                (0,
                n.Xf)("chMessageUnsent", (0,
                a.$t)("cancelling"), 1);
                let s = await (0,
                P.D)({
                    module: "of_messages",
                    action: "get_ids"
                }, {
                    message_id: t
                });
                if ("success" !== s.status)
                    return void (0,
                    F.cB)("Cant fetch messages");
                const i = new j({
                    already_unsent: 0,
                    unsent_success: 0
                },t,s.ids);
                await i.cancelMessage(),
                await ne(),
                (0,
                U.Od)("unsent_messages"),
                (0,
                n.Xf)("chMessageUnsent", `<i class="fa fa-check"></i> ${(0,
                a.$t)("cancellation_completed")}`, 0)
            }
            async function oe(e) {
                if (void 0 === typeof e)
                    return;
                document.querySelector("#chMessageOverview") && ((0,
                n.V5)("#chMessageOverview .spinner-border"),
                document.querySelector("#chMessageOverview .message-initiator").innerHTML = "",
                document.querySelector("#chMessageOverview .message-preview").value = "",
                document.querySelector("#chMessageOverview .message-price").innerHTML = "",
                document.querySelector("#chMessageOverview .media-files").innerHTML = "",
                document.querySelector("#chMessageOverview .send-to").innerHTML = "",
                document.querySelector("#chMessageOverview .excluded-lists").innerHTML = "",
                document.querySelector("#chMessageOverview .message-create").innerHTML = "",
                document.querySelector("#chMessageOverview .message-status").innerHTML = "",
                document.querySelector("#chMessageOverview .unsent-block").classList.add("d-none"),
                document.getElementById("chMessageUnsent").dataset.id = "",
                document.getElementById("chMessageUnsent").disabled = !1,
                document.getElementById("chMessageUnsent").innerHTML = '<i class="fa fa-rotate-left"></i> Unsend');
                let t = await (0,
                P.D)({
                    module: "of_messages",
                    action: "load_message"
                }, {
                    message_id: e
                });
                1 === t.message.status_code && document.querySelector("#chStopMassMessage")?.classList.add("d-none"),
                2 === t.message.status_code && (document.querySelector("#chContinuePendingMassMessage")?.classList.remove("d-none"),
                document.querySelector("#chContinuePendingMassMessage")?.addEventListener("click", re),
                document.querySelector("#chContinuePendingMassMessage")?.setAttribute("data-id", t.message.id)),
                5 === t.message.status_code && (document.querySelector("#chStopMassMessage")?.classList.remove("d-none"),
                document.querySelector("#chStopMassMessage")?.addEventListener("click", ge),
                document.querySelector("#chStopMassMessage")?.setAttribute("data-id", t.message.id)),
                "success" === t.status && document.querySelector("#chMessageOverview") && (document.querySelector("#chMessageOverview .message-initiator").innerHTML = t.message.initiator,
                document.querySelector("#chMessageOverview .message-preview").value = t.message.message,
                document.querySelector("#chMessageOverview .message-price").innerHTML = t.message.price,
                document.querySelector("#chMessageOverview .media-files").innerHTML = t.message.media,
                document.querySelector("#chMessageOverview .send-to").innerHTML = t.message.send_to,
                document.querySelector("#chMessageOverview .excluded-lists").innerHTML = t.message.excluded_lists,
                document.querySelector("#chMessageOverview .message-create").innerHTML = t.message.date_create,
                document.querySelector("#chMessageOverview .message-status").innerHTML = t.message.status,
                t.message.unsent > 0 && (document.querySelector("#chMessageOverview .unsent-block").classList.remove("d-none"),
                document.getElementById("chMessageUnsent").dataset.id = e,
                document.getElementById("chMessageUnsent").innerHTML = '<i class="fa fa-rotate-left"></i> Unsend (' + t.message.unsent + ")")),
                (0,
                n.BB)("#chMessageOverview .spinner-border"),
                (0,
                n.WR)("#chMessageOverview")
            }
            async function re(e) {
                (0,
                n.Xh)("chContinuePendingMassMessage", 1),
                J.stop_sending = !1;
                const t = e.currentTarget.getAttribute("data-id");
                try {
                    await (0,
                    P.D)({
                        module: "of_messages",
                        action: "continue_message_sending"
                    }, {
                        message_id: t
                    }),
                    await ne(),
                    (0,
                    r.GA)("chMessageOverview"),
                    "true" !== (0,
                    U.U2)("mass_message_process_is_running") && await ue()
                } catch (e) {
                    (0,
                    F.cB)(e.message)
                } finally {
                    (0,
                    n.Xh)("chContinuePendingMassMessage", 0)
                }
            }
            function ce() {
                let e = {
                    send_to: 0,
                    send_to_list: [],
                    excluded_lists: [],
                    excluded_lists_ids: []
                };
                e.message = document.querySelector('#chMessagesNew textarea[name="message"]').value,
                e.delay = document.querySelector('#chMessagesNew input[name="delay"]').value ?? 0,
                e.exclude_spend_less = document.querySelector('#chMessagesNew input[name="exclude_spend_less"]').value,
                e.exclude_spend_more = document.querySelector('#chMessagesNew input[name="exclude_spend_more"]').value,
                e.exclude_creators = document.querySelector('#chMessagesNew input[name="exclude_creators"]').checked,
                e.price = Number(document.querySelector('#chMessagesNew input[name="message_price"]').value),
                e.media_paid = [],
                e.media_free = [];
                let t = document.querySelectorAll("#chMessageMedia .media-item");
                for (let s = 0; s < t.length; s++) {
                    let a = {};
                    a.id = V.media_selected[Number(t[s].dataset.id)].id,
                    a.type = V.media_selected[Number(t[s].dataset.id)].type,
                    void 0 !== V.media_selected[Number(t[s].dataset.id)].source && void 0 !== V.media_selected[Number(t[s].dataset.id)].source.duration && (a.duration = V.media_selected[Number(t[s].dataset.id)].source.duration),
                    t[s].querySelector("input[name='media-paid']:checked") ? (a.paid = !0,
                    e.media_paid.push(a)) : (a.paid = !1,
                    e.media_free.push(a))
                }
                (0,
                a.Rc)('#chMessagesNew select[name="send_to[]"]').forEach((t=>{
                    1 == t ? e.send_to_list.push({
                        id: 1,
                        name: "Fans Online",
                        usersCount: Y,
                        users: []
                    }) : void 0 !== V.lists[t] && void 0 !== V.lists[t].id && e.send_to_list.push({
                        id: V.lists[t].id,
                        name: V.lists[t].name,
                        usersCount: V.lists[t].usersCount,
                        users: []
                    })
                }
                ));
                let s = document.querySelector('#chMessagesNew select[name="excluded_lists[]"]');
                for (let t = 0; t < s.options.length; t++)
                    if (s.options[t].selected && void 0 !== V.lists[Number(s.options[t].value)] && void 0 !== V.lists[Number(s.options[t].value)].id) {
                        let a = {};
                        a.id = V.lists[Number(s.options[t].value)].id,
                        a.name = V.lists[Number(s.options[t].value)].name,
                        a.usersCount = V.lists[Number(s.options[t].value)].usersCount,
                        e.excluded_lists.push(a),
                        e.excluded_lists_ids.push(Number(s.options[t].value))
                    }
                return e
            }
            function le(e, t) {
                return e.replace(/\{\{([^{}|]+)(?:\|([^{}]*))*\}\}/g, ((e,s,a)=>t.hasOwnProperty(s) ? t[s] : void 0 !== a ? a : ""))
            }
            function de() {
                (0,
                U.Od)("message_sent"),
                (0,
                U.Od)("mass_message"),
                (0,
                U.Od)("mass_message_process_is_running")
            }
            async function ue() {
                let e = await (0,
                P.D)({
                    module: "of_messages",
                    action: "get_message"
                });
                if (e.data.message) {
                    Q = e.data.message,
                    W = {
                        status: 0,
                        date_start: Date.now(),
                        count_left: Q.count_all || 0,
                        success_count: Q.count_success || 0,
                        failed_count: Q.count_failed || 0,
                        excluded_count: Q.count_excluded || 0,
                        messages_ids: Q.messages_ids || []
                    },
                    (0,
                    U.t8)("mass_message", JSON.stringify(Q)),
                    (0,
                    U.t8)("message_sent", JSON.stringify(W)),
                    (0,
                    U.t8)("mass_message_process_is_running", !0),
                    J.stop_sending = !1;
                    try {
                        await async function() {
                            document.querySelector("#chMessagePreviewModal") && (0,
                            r.GA)("chMessagePreviewModal");
                            if (await (0,
                            r.Sv)("message", "overview"),
                            await oe(Q.id),
                            await ne(),
                            !0 === J.stop_sending)
                                return;
                            let e = function(e) {
                                let t = {
                                    lockedText: !1
                                };
                                t.text = e.message,
                                t.price = e.price,
                                t.isCouplePeopleMedia = !1,
                                t.isForward = !1,
                                t.mediaFiles = [],
                                t.previews = [],
                                e.price > 0 && e.media_free.length > 0 && Object.keys(e.media_free).forEach((s=>{
                                    t.previews.push(e.media_free[s].id)
                                }
                                ));
                                e.media_free.length > 0 && Object.keys(e.media_free).forEach((s=>{
                                    t.mediaFiles.push(e.media_free[s].id)
                                }
                                ));
                                e.price > 0 && e.media_paid.length > 0 && Object.keys(e.media_paid).forEach((s=>{
                                    t.mediaFiles.push(e.media_paid[s].id)
                                }
                                ));
                                return t
                            }(Q);
                            const t = Q.send_to_list.filter((e=>e.users.some((e=>0 === e.tries))));
                            for (const s of t) {
                                let t = s.users.filter((e=>0 === e.tries));
                                for (const s of t) {
                                    await he(1e3 * Q.delay);
                                    let t = s.id in Z ? Z[s.id] : {};
                                    if (e.text = le(Q.message, t),
                                    !0 === J.stop_sending) {
                                        clearTimeout(me);
                                        break
                                    }
                                    let a = await (0,
                                    o.W)("/api2/v2/chats/" + s.id + "/messages", "POST", e);
                                    s.tries = s.tries += 1,
                                    s.successSent = void 0 !== a.id,
                                    (0,
                                    U.t8)("mass_message", JSON.stringify(Q)),
                                    void 0 !== a.id ? (W.success_count++,
                                    W.messages_ids.push({
                                        user_id: s.id,
                                        message_id: a.id
                                    })) : W.failed_count++,
                                    (0,
                                    U.t8)("message_sent", JSON.stringify(W)),
                                    fe(Q),
                                    document.getElementById("chMessageUnsent")?.addEventListener("click", ie)
                                }
                            }
                            W.status = !0 === J.stop_sending ? 2 : 1,
                            (0,
                            U.t8)("mass_message", JSON.stringify(Q)),
                            (0,
                            U.t8)("message_sent", JSON.stringify(W)),
                            await pe(),
                            await ne(),
                            await oe(Q.id),
                            de(),
                            !0 !== J.stop_sending && await ue();
                            console.log("Finish!!!")
                        }()
                    } catch (e) {
                        await pe()
                    }
                } else
                    de()
            }
            let me;
            const he = e=>new Promise((t=>{
                me = setTimeout(t, e)
            }
            ));
            async function pe() {
                let e = {
                    message: Q,
                    statuses: W
                };
                await (0,
                P.D)({
                    module: "of_messages",
                    action: "update_pending_message"
                }, e),
                de()
            }
            async function ge() {
                confirm("Are you sure?") && ((0,
                n.Xh)("chStopMassMessage", 1),
                J.stop_sending = !0,
                document.getElementById("chStartPendingMassMessage")?.classList.add("d-none"),
                document.getElementById("chStopMassMessage")?.classList?.add("d-none"),
                document.getElementById("chCancelMassMessage")?.classList.remove("d-none"),
                W.status = 2,
                await ne(),
                (0,
                n.Xh)("chStopMassMessage", 0))
            }
            function fe(e) {
                W.count_left = e.send_to_list.reduce(((e,t)=>e + t.users.filter((e=>1 === e.tries)).length), 0),
                document.querySelectorAll(`.success_count_${e.id}`)?.forEach((e=>{
                    e.innerHTML = W.success_count
                }
                )),
                document.querySelectorAll(`.excluded_count_${e.id}`)?.forEach((e=>{
                    e.innerHTML = W.failed_count
                }
                )),
                document.querySelectorAll(`.unsended_count_${e.id}`)?.forEach((e=>{
                    e.innerHTML = W.excluded_count
                }
                )),
                function(e) {
                    let t = e.send_to_list;
                    t.forEach((t=>{
                        document.querySelectorAll(`.message_${e.id}_${t.id}`)?.forEach((e=>{
                            e.innerHTML = t.users.filter((e=>1 === e.tries && e.successSent)).length
                        }
                        ))
                    }
                    ))
                }(e)
            }
            let _e = !1;
            function ye(e) {
                document.querySelector(".total_accounts") && (0,
                n.yG)(".total_accounts", e)
            }
            function be() {
                (0,
                r.GA)("chMessagePreviewModal"),
                _e = !0
            }
            async function ve() {
                try {
                    if ((0,
                    n.Xh)("chStartPendingMassMessage", 1),
                    await (0,
                    P.D)({
                        module: "of_messages",
                        action: "save_pending_messages"
                    }, ee),
                    !(0,
                    U.U2)("mass_message_process_is_running"))
                        return void await ue();
                    await ne(),
                    (0,
                    r.GA)("chMessagePreviewModal")
                } catch (e) {
                    (0,
                    F.cB)(e.message)
                } finally {
                    (0,
                    n.Xh)("chStartPendingMassMessage", 0)
                }
            }
            function Ee(e) {
                let t = document.querySelectorAll(".ch-media-vault-lists .vault-list");
                for (let e = 0; e < t.length; e++)
                    t[e].classList.remove("active");
                e.classList.add("active"),
                V.list_id = e.dataset.id,
                document.querySelector("#chMessageMediaModal .ch-media-vault-container").innerHTML = "",
                Me(0)
            }
            async function we(e) {
                let t = "";
                0 === e && (t += '<button class="btn btn-primary btn-xs vault-list m-1 active" type="button" data-id="0">All</button>');
                let s = await (0,
                o.W)("/api2/v2/vault/lists?view=list&offset=" + e + "&filled=1&limit=10", "GET", null);
                if (Object.keys(s.list).forEach((e=>{
                    void 0 !== s.list[e].id && (t += '<button class="btn btn-primary btn-xs vault-list m-1" type="button" data-id="' + s.list[e].id + '">' + s.list[e].name + " (" + (s.list[e].photosCount + s.list[e].videosCount) + ")</button>")
                }
                )),
                document.querySelector("#chMessageMediaModal .ch-media-vault-lists").insertAdjacentHTML("beforeend", t),
                void 0 !== s.hasMore && !0 === s.hasMore)
                    we(e + 10);
                else {
                    let e = document.querySelectorAll(".ch-media-vault-lists .vault-list");
                    for (let t = 0; t < e.length; t++)
                        e[t].addEventListener("click", (function(e) {
                            Ee(e.target)
                        }
                        ))
                }
            }
            async function Se(e) {
                if (0 === e) {
                    V.lists = [];
                    let e = await (0,
                    o.W)("/api2/v2/subscriptions/subscribers/count?type=active&filter[online]=1", "GET", null);
                    void 0 === e.error && (Y = e.count)
                }
                let t = await (0,
                o.W)("/api2/v2/lists?offset=" + e + "&skip_users=all&limit=10&format=infinite", "GET", null);
                Object.keys(t.list).forEach((e=>{
                    void 0 === t.list[e].usersCount || t.list[e].usersCount < 1 || (V.lists[t.list[e].id] = t.list[e])
                }
                )),
                void 0 !== t.hasMore && !0 === t.hasMore ? Se(e + 10) : function() {
                    (0,
                    n.BB)("#chMessagesNew .spinner-border");
                    let e = document.querySelector('#chMessagesNew select[name="send_to[]"]')
                      , t = document.querySelector('#chMessagesNew select[name="excluded_lists[]"]');
                    e.innerHTML = '<option value="1">Fans Online (' + Y + ")</option>",
                    t.innerHTML = "";
                    let s = [];
                    Object.keys(V.lists).forEach((e=>{
                        s.push({
                            name: V.lists[e].name + " (" + V.lists[e].usersCount + ")",
                            value: V.lists[e].id
                        })
                    }
                    )),
                    (0,
                    n.f7)(e, s),
                    (0,
                    n.f7)(t, s),
                    void 0 !== t.tomselect && t.tomselect.destroy();
                    new TomSelect("#chExcludedLists",{
                        plugins: ["remove_button"]
                    }),
                    new TomSelect("#chSendToLists",{
                        plugins: ["remove_button"]
                    })
                }()
            }
            async function Me(e) {
                let t;
                (0,
                n.V5)("#chMessageMediaModal .spinner-border"),
                J.media_vault_loading = !0,
                0 === e && (V.media_vault = []),
                t = 0 === V.list_id ? await (0,
                o.W)("/api2/v2/vault/media?limit=24&offset=" + e + "&field=recent&sort=desc", "GET", null) : await (0,
                o.W)("/api2/v2/vault/media?limit=24&offset=" + e + "&field=recent&sort=desc&list=" + V.list_id, "GET", null);
                let s = "";
                Object.keys(t.list).forEach((e=>{
                    if (void 0 === t.list[e].id || void 0 !== V.media_vault[t.list[e].id])
                        return;
                    let i;
                    V.media_vault[t.list[e].id] = t.list[e],
                    i = "video" === t.list[e].type ? '<i class="fa-solid fa-video"></i> ' + (0,
                    n.hb)(t.list[e].source.duration) : '<i class="fa-solid fa-image"></i>',
                    s += `\n\t\t\t<div class="vault-item position-relative d-inline-block m-1 rounded" data-id="${t.list[e].id}">\n\t\t\t\t<span class="position-absolute end-0 m-2">\n    \t\t\t\t<input \n    \t\t\t\t\tclass="form-check-input checkbox-select" \n    \t\t\t\t\ttype="checkbox"\n    \t\t\t\t\tvalue="${t.list[e].id}" name="vault-selected"\n    \t\t\t\t/>\n\t\t\t\t</span>\n\t\t\t\t<span class="position-absolute badge bg-success bg-opacity-75 m-2">${i}</span>\n\t\t\t\t<span class="position-absolute bottom-0 badge bg-light m-2 text-dark bg-opacity-75">\n\t\t\t\t\t<i class="fa-solid fa-calendar-days"></i> ${(0,
                    a.Ck)(t.list[e].createdAt)}\n\t\t\t\t</span>\n\t\t\t\t<img src="${t.list[e].thumb}" width="135" height="135" class="rounded"/>\n\t\t\t</div>`
                }
                )),
                void 0 !== t.hasMore && !0 === t.hasMore ? V.last_vault_offset = e : V.last_vault_offset = -1,
                "" !== s && document.querySelector("#chMessageMediaModal .ch-media-vault-container").insertAdjacentHTML("beforeend", s),
                (0,
                n.BB)("#chMessageMediaModal .spinner-border"),
                J.media_vault_loading = !1;
                const i = document.querySelector(".ch-media-vault-container");
                !(i.scrollHeight > i.clientHeight) && t.hasMore && setTimeout((()=>{
                    Me(e + 24)
                }
                ), 800)
            }
            var Le = s(70);
            let ke = "#tab_home";
            const Be = chrome.runtime.getManifest()
              , Te = ["#tab_settings", "#tab_home"]
              , xe = async()=>{
                let e = (0,
                a.Gw)();
                const t = document.createElement("div");
                t.innerHTML = (0,
                n.AH)("../../assets/html/app/index.html"),
                document.body.appendChild(t);
                let s = document.getElementById("chatHelperPanel")
                  , i = document.getElementById("panelSwitchButton").getElementsByClassName("arrow-position")[0];
                document.getElementById("panelSwitchButton").addEventListener("click", (function() {
                    s.classList instanceof DOMTokenList && (s.classList.contains("d-none") ? qe(s, i) : Ie(s, i))
                }
                )),
                void 0 !== e.show_panel && e.show_panel ? qe(s, i) : Ie(s, i),
                void 0 !== e.settings && (void 0 !== e.settings.ext_position && (0,
                n.WY)(e.settings.ext_position),
                void 0 !== e.settings.ext_size && (0,
                n.Ht)(e.settings.ext_size)),
                document.getElementById("chatHelperPanel").querySelectorAll(".panel-tab-link").forEach((e=>{
                    e.addEventListener("click", (t=>{
                        void 0 !== e.dataset.bsTarget && ke !== e.dataset.bsTarget && Oe(e)
                    }
                    ))
                }
                )),
                (0,
                N.h)(),
                He(),
                (0,
                a.UH)()
            }
            ;
            function qe(e, t) {
                (0,
                a.VP)("show_panel", !0),
                e.classList.remove("d-none"),
                t.classList.add("fa-eye"),
                t.classList.remove("fa-eye-slash")
            }
            const He = ()=>{
                let e = (0,
                a.iE)();
                const t = document.getElementById("chatHelperPanel").querySelectorAll(".panel-tab-link");
                (0,
                i.K2)() && (0,
                a.C2)() ? t.forEach((e=>e.removeAttribute("disabled"))) : t.forEach((e=>{
                    Te.includes(e.getAttribute("data-bs-target")) || e.setAttribute("disabled", !0)
                }
                )),
                (0,
                i.K2)() ? ((0,
                n.yG)("chCfActivateStatus", '<span class="badge bg-success"><i class="fa fa-check"></i> <span data-locale-key="active">active</span></span>', !1),
                void 0 !== e.auth && void 0 !== e.auth.license_name && (0,
                n.yG)("chCfAccountName", '<span class="badge bg-light text-dark"><i class="fa fa-user"></i> ' + e.auth.license_name + "</span>", !1)) : ((0,
                n.yG)("chCfActivateStatus", '<span class="badge bg-danger"><i class="fa fa-times"></i> <span data-locale-key="disabled">disabled</span></span>', !1),
                (0,
                n.yG)("chCfAccountName", "", !1),
                document.getElementById("greetingBlock")?.classList.add("d-none")),
                (0,
                n.yG)("chCfPanelVersion", '<span class="badge bg-dark"><i class="fa-solid fa-code-branch"></i> ' + Be.version + "</span>", !1),
                (0,
                a.UH)()
            }
            ;
            function Ie(e, t) {
                (0,
                a.VP)("show_panel", !1),
                e.classList.add("d-none"),
                t.classList.remove("fa-eye"),
                t.classList.add("fa-eye-slash")
            }
            const Oe = (e,t=null)=>{
                switch (document.getElementById("chatHelperPanel").querySelectorAll(".panel-tab-link").forEach((e=>{
                    e.classList.remove("active")
                }
                )),
                e.classList.add("active"),
                e.dataset.bsTarget) {
                case "#tab_home":
                    (0,
                    N.h)();
                    break;
                case "#tab_fans":
                    h();
                    break;
                case "#tab_fan":
                    (0,
                    C.yk)();
                    break;
                case "#tab_settings":
                    (0,
                    D.n)();
                    break;
                case "#tab_messages":
                    se();
                    break;
                case "#tab_todo":
                    (0,
                    Le.V)(t)
                }
                ke = e.dataset.bsTarget,
                (0,
                a.UH)()
            }
        }
        ,
        268: (e,t,s)=>{
            s.d(t, {
                Od: ()=>n,
                U2: ()=>a,
                t8: ()=>i
            });
            const a = e=>localStorage.getItem(e)
              , n = e=>localStorage.removeItem(e)
              , i = (e,t)=>localStorage.setItem(e, t)
        }
        ,
        60: (e,t,s)=>{
            s.d(t, {
                GA: ()=>u,
                Sv: ()=>o,
                jB: ()=>r
            });
            var a = s(878)
              , n = s(808);
            function i() {
                document.querySelectorAll(".modal").forEach((e=>e.remove())),
                document.querySelectorAll(".modal-backdrop").forEach((e=>e.remove()))
            }
            const o = async(e,t,s=!0,n=!1)=>(s && i(),
            new Promise(((s,i)=>{
                const o = `../../assets/html/app/modules/${e}/modals/${t}`
                  , r = (0,
                a.JI)(o);
                n && s(r);
                const u = c(r);
                u ? (l(u),
                d(u),
                s(u)) : i("No modal element found in the fetched content")
            }
            )))
              , r = async(e,t=!0)=>(t && i(),
            new Promise(((t,s)=>{
                const a = c(e);
                a ? (l(a),
                d(a),
                t(a)) : s("No modal element found in the fetched content")
            }
            )));
            function c(e) {
                const t = document.createElement("div");
                return t.innerHTML = e,
                t.querySelector(".modal")
            }
            function l(e) {
                const t = new bootstrap.Modal(e);
                document.getElementById("bs-5").appendChild(e),
                t.show(),
                (0,
                n.UH)()
            }
            function d(e) {
                e.addEventListener("hidden.bs.modal", (()=>{
                    bootstrap.Modal.getInstance(e).dispose(),
                    e.remove()
                }
                ))
            }
            const u = e=>{
                const t = document.getElementById(e);
                if (t) {
                    const s = bootstrap.Modal.getInstance(t);
                    s ? s.hide() : console.error("No Bootstrap modal instance found for the element with ID:", e)
                } else
                    console.error("No element found with ID:", e)
            }
        }
        ,
        76: (e,t,s)=>{
            s.d(t, {
                D: ()=>o
            });
            var a = s(808)
              , n = s(268);
            const i = chrome.runtime.getManifest()
              , o = async(e,t=null)=>{
                const s = (0,
                a.iE)()
                  , o = (0,
                a.Gw)();
                let r = {};
                if (r.version = i.version,
                void 0 !== s.auth && void 0 !== s.auth.id && (r.id = s.auth.id,
                r.key = s.auth.key),
                void 0 !== s.account && void 0 !== s.account.id && (r.of_account_id = s.account.id),
                void 0 !== s.auth && void 0 !== s.auth.activation_key && (r.activation_key = s.auth.activation_key),
                void 0 !== o && !(0,
                a.xb)(o.operator_id) && s.auth?.operators?.length) {
                    let e = (s.auth?.operators ?? []).find((e=>e.id === Number(o.operator_id)));
                    r.operator_name = e?.name || null
                }
                void 0 === o || (0,
                a.xb)(o.operator_id) || (r.operator_id = o.operator_id);
                let c = (0,
                n.U2)("locale") ?? "en";
                const l = await fetch(`https://chathelper.ai/api/ext?lang=${c}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        auth: r,
                        action: e,
                        data: t
                    })
                });
                if (-1 === l.headers.get("content-type").indexOf("application/json"))
                    throw new Error("Server error, please try later.");
                const d = await l.json();
                if ("unauthorized" === d.status && (0,
                a.w7)(),
                "error" === d.status)
                    throw new Error(d.message);
                return d
            }
        }
        ,
        776: (e,t,s)=>{
            s.d(t, {
                $N: ()=>h,
                K2: ()=>p,
                NG: ()=>m
            });
            var a = s(808)
              , n = s(76)
              , i = s(199)
              , o = s(686)
              , r = s(360)
              , c = s(928)
              , l = s(783);
            const d = chrome.runtime.getManifest();
            let u = !1;
            const m = async()=>{
                document.getElementById("activeChAccountButton").innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Verifying..',
                document.getElementById("activeChAccountButton").disabled = !0;
                try {
                    let e = document.getElementById("chActivateKey").value
                      , t = await (0,
                    n.D)({
                        module: "auth",
                        action: "process_activate"
                    }, {
                        key: e,
                        of_account_id: (0,
                        i.z)(),
                        version: d.version
                    });
                    if ("error" === t.status)
                        throw new Error(t.message);
                    if ("verify" === t.status) {
                        let s = t.verify_key;
                        (0,
                        a.rF)({
                            account: {
                                id: (0,
                                i.z)()
                            },
                            rules: t.rules
                        }),
                        t.isSpecificOperator && (0,
                        a.rF)({
                            isSpecificOperator: !0
                        });
                        let r = await (0,
                        o.W)("/api2/v2/users/me", "GET", null);
                        if (r.id !== Number((0,
                        i.z)()))
                            throw new Error("Account Error, please refresh page");
                        let c = r.about
                          , l = function(e) {
                            const t = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[\u2194-\u21AA\u2B05\u2B06\u2B07\u2B50\u2B05\u2B06\u2B07\u2B1B\u2B1C\u200D\u2600-\u2B05\u2B06\u2B07\u2B50\u2B1B\u2B1C\u200D\u2934-\u2B05\u2B06\u2B07\u2B50\u2B1B\u2B1C\u200D\u2B05\u2B06\u2B07\u2B50\u2B1B\u2B1C\u200D]/g;
                            return e.replace(t, "")
                        }(c).slice(0, 900) + " " + s;
                        if (!0 !== (await (0,
                        o.W)("/api2/v2/users/me", "PATCH", {
                            about: l
                        })).success)
                            throw new Error("Error Account Verify (update about), try later");
                        let u = await (0,
                        n.D)({
                            module: "auth",
                            action: "process_verify"
                        }, {
                            key: e,
                            of_account_id: (0,
                            i.z)(),
                            version: d.version
                        });
                        if (await (0,
                        o.W)("/api2/v2/users/me", "PATCH", {
                            about: c
                        }),
                        "error" === u.status)
                            throw new Error(check_verify.message);
                        t = u
                    }
                    if ("subscribe_end" === t.status) {
                        return document.querySelector("#chSubscribeEndModal .modal-body").innerHTML = t.body,
                        new bootstrap.Modal(document.getElementById("chSubscribeEndModal"),{}).show(),
                        document.getElementById("activeChAccountButton").innerHTML = "Activate",
                        void (document.getElementById("activeChAccountButton").disabled = !1)
                    }
                    return "success" === t.status && (0,
                    a.rF)({
                        account: t.account,
                        auth: t.auth,
                        subscribe: t.subscribe,
                        rules: t.rules
                    }),
                    t.isSpecificOperator && ((0,
                    a.rF)({
                        isSpecificOperator: !0
                    }),
                    (0,
                    a.VP)("operator_id", t.auth.operators[0].id),
                    document.getElementById("addOperatorName").classList.add("d-none"),
                    document.getElementById("chOperatorName").disabled = !0),
                    (0,
                    a.Hf)("auth.activation_key", e),
                    document.getElementById("activeChAccountButton").innerHTML = "Activate",
                    document.getElementById("activeChAccountButton").disabled = !1,
                    await h(),
                    (0,
                    r.D)(),
                    (0,
                    c.SP)(),
                    !0
                } catch (e) {
                    (0,
                    l.cB)(e.message),
                    document.getElementById("activeChAccountButton").innerHTML = "Activate",
                    document.getElementById("activeChAccountButton").disabled = !1
                }
            }
            ;
            const h = async()=>{
                let e = (0,
                a.iE)();
                if (0 === (0,
                i.z)())
                    return u = !1,
                    !1;
                if (void 0 === e.account || void 0 === e.account.id || void 0 === e.auth || void 0 === e.auth.id || void 0 === e.auth.key || void 0 === e.rules || void 0 === e.rules.static_param)
                    return u = !1,
                    !1;
                let t = await (0,
                n.D)({
                    module: "auth",
                    action: "check"
                }, {
                    isSpecificOperator: e.isSpecificOperator ?? null,
                    operator: e.auth.operators[0]
                });
                if (e.isSpecificOperator && (document.getElementById("addOperatorName").classList.add("d-none"),
                document.getElementById("chOperatorName").disabled = !0,
                setTimeout((()=>{
                    document.querySelector("#chOperatorName-ts-control").style.opacity = 1
                }
                ), 500)),
                void 0 !== t.status && "success" === t.status && t.account.id === (0,
                i.z)()) {
                    u = !0,
                    (0,
                    a.rF)({
                        account: t.account,
                        subscribe: t.subscribe
                    });
                    let e = new CustomEvent("updateOperators",{
                        cancelable: !0,
                        detail: t.operators
                    });
                    return t.isSpecificOperator && ((0,
                    a.rF)({
                        isSpecificOperator: !0
                    }),
                    document.getElementById("addOperatorName").classList.add("d-none")),
                    t.greeting && (0,
                    a.rF)({
                        greeting: t.greeting
                    }),
                    document.dispatchEvent(e),
                    !0
                }
                return u = !1,
                (0,
                a.w7)(),
                !1
            }
              , p = ()=>u
        }
        ,
        329: (e,t,s)=>{
            s.d(t, {
                BD: ()=>ee,
                JW: ()=>F,
                Jg: ()=>I,
                Xn: ()=>H,
                Xz: ()=>te,
                ot: ()=>q,
                t0: ()=>A,
                yk: ()=>B
            });
            var a = s(686)
              , n = s(878)
              , i = s(60)
              , o = s(808)
              , r = s(776)
              , c = s(76)
              , l = s(70)
              , d = s(928)
              , u = s(983);
            const m = "ch_fan"
              , h = {
                small: 67,
                medium: 170,
                large: 370
            }
              , p = chrome.runtime.getURL("assets/img/saved.gif");
            let g, f = !1, _ = {}, y = 0, b = {}, v = {}, E = {}, w = (0,
            o.iE)(), S = {}, M = null, L = {}, k = {
                filter: 0,
                unpurchased: !1,
                multiple: !1,
                max_points: 10
            };
            !function() {
                let e = (0,
                o.Gw)();
                E = e.fan,
                void 0 !== e.fan_prices && void 0 !== e.fan_prices.filter && (k = e.fan_prices)
            }();
            const B = async()=>{
                (0,
                r.K2)() && (0,
                o.C2)() ? (f || (f = !0,
                (0,
                n.Nj)(m, "fan.html"),
                function() {
                    const e = document.getElementById("chModalFanPurchasesMediaButton")
                      , t = document.getElementById("chModalFanPurchasesPricesButton")
                      , s = document.getElementById("chModalFanProfileButton");
                    e.addEventListener("click", R),
                    t.addEventListener("click", W),
                    s.addEventListener("click", z);
                    const a = document.getElementById("chFanDataNote");
                    !function(e, t, s) {
                        let a;
                        e.addEventListener("input", (function() {
                            clearTimeout(a),
                            a = setTimeout((function() {
                                s(e.value)
                            }
                            ), t)
                        }
                        ))
                    }(a, 1e3, V)
                }()),
                x(),
                (0,
                n.Ok)(m),
                A()) : alert("Error! Need activate")
            }
            ;
            let T = [];
            const x = ()=>{
                const e = (0,
                o.Gw)().settings;
                let t = e?.ext_size ? h[e.ext_size] : 67;
                document.getElementById("chFanDataNote").style.height = t + "px"
            }
              , q = async e=>{
                for (const t of e.list)
                    T[t.id] = t.thumb
            }
              , H = async()=>{
                O() && J(y, 0)
            }
              , I = async()=>{
                document.querySelectorAll(".l-main-content .b-photos__item").forEach((e=>{
                    if (e.classList.contains("ch-item-marked"))
                        return;
                    let t = e.querySelector("img");
                    if (null !== t) {
                        if (!("id"in e.dataset))
                            for (const s in T)
                                if (T[s] === t.src) {
                                    e.dataset.id = Number(s);
                                    break
                                }
                        if ("id"in e.dataset) {
                            if (-1 !== v[y].media.free_ids.indexOf(Number(e.dataset.id)))
                                e.insertAdjacentHTML("beforeend", '<div style="position: absolute;bottom: 0;margin: 10px;background-color: rgb(232 232 232 / 75%);padding: 5px 15px;border-radius: 20px;font-size: 30px;z-index: 10;border: 4px solid #000;"><i class="fa-solid fa-paper-plane"></i></div>');
                            else if (-1 !== v[y].media.not_purchases_ids.indexOf(Number(e.dataset.id)))
                                e.insertAdjacentHTML("beforeend", '<div style="position: absolute;bottom: 0;margin: 10px;background-color: rgb(214 0 0 / 75%);padding: 5px 15px;border-radius: 20px;font-size: 30px;z-index: 10;border: 4px solid #000;"><i class="fa-solid fa-xmark"></i></div>');
                            else {
                                if (-1 === v[y].media.purchases_ids.indexOf(Number(e.dataset.id)))
                                    return;
                                e.insertAdjacentHTML("beforeend", '<div style="position: absolute;bottom: 0;margin: 10px;background-color: rgb(3 214 0 / 75%);padding: 5px 15px;border-radius: 20px;font-size: 30px;z-index: 10;border: 4px solid #000;"><i class="fa fa-check"></i></div>')
                            }
                            e.classList.add("ch-item-marked")
                        }
                    }
                }
                ))
            }
            ;
            function O() {
                return 0 !== y && void 0 !== _[y] && void 0 !== _[y].name
            }
            const A = async()=>{
                if (f) {
                    if (!O()) {
                        if (0 !== y) {
                            ee(await $(y, "u" + y))
                        }
                        if (!O())
                            return void (0,
                            n.hp)("chFanBlock", "chFanNoIssetError", !1)
                    }
                    var e, t;
                    (0,
                    n.hp)("chFanNoIssetError", "chFanBlock", !1),
                    e = 1e3,
                    t = D,
                    clearTimeout(g),
                    g = setTimeout((function() {
                        t()
                    }
                    ), e)
                }
            }
            ;
            async function $(e, t) {
                return void 0 !== b[e] && void 0 !== b[e].id || (b[e] = await (0,
                a.W)("/api2/v2/users/" + t, "GET", null)),
                b[e]
            }
            const D = async()=>{
                if ((0,
                n.Yq)(),
                (0,
                n.Yh)("chFanName", "", !1),
                (0,
                n.Yh)("chFanSubscribed", "", !1),
                (0,
                n.Yh)("chFanSpent", "", !1),
                (0,
                n.Yh)("chFanDuration", "", !1),
                document.getElementById("chFanDataNote").value = "",
                (0,
                n.yG)("chFanName", _[y].name + ' <small><a href="https://onlyfans.com/' + _[y].username + '" target="_blank" rel="nofollow">@' + _[y].username + "</a></small>", !1),
                _[y].subscribedOn ? (0,
                n.Yh)("chFanSubscribed", `${(0,
                o.$t)("yes")} (${_[y].subscribedOnDuration})`, !1) : (0,
                n.Yh)("chFanSubscribed", `${(0,
                o.$t)("no")}`, !1),
                await $(y, _[y].username),
                void 0 === b[y].subscribedOnData)
                    return;
                let e = `\n\t\t<strong id="chFanSpent">\n\t\t\t$${b[y].subscribedOnData?.totalSumm?.toLocaleString("us") || 0}\n\t\t</strong>`
                  , t = `\n\t\t<strong>\n\t\t\t${b[y].subscribedOnDuration || ""}\n\t\t</strong>`;
                if (b[y].subscribedOnData?.totalSumm > 0) {
                    e += `<button \n\t\t\ttype="button" \n\t\t\tclass="btn btn-secondary btn-xs" \n\t\t\tdata-bs-toggle="popover" \n\t\t\tdata-bs-content="\n\t\t\t\t<table class='table table-sm'>\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>${(0,
                    o.$t)("message")}</th>\n\t\t\t\t\t\t\t<th>${(0,
                    o.$t)("posts")}</th>\n\t\t\t\t\t\t\t<th>${(0,
                    o.$t)("tips")}</th>\n\t\t\t\t\t\t\t<th>${(0,
                    o.$t)("subs")}</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<strong>\n\t\t\t\t\t\t\t\t\t$${(0,
                    o.eH)(b[y].subscribedOnData.messagesSumm)}\n\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t${(0,
                    o.eH)(100 / b[y].subscribedOnData.totalSumm * b[y].subscribedOnData.messagesSumm)}%\n\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<strong>\n\t\t\t\t\t\t\t\t\t$${(0,
                    o.eH)(b[y].subscribedOnData.postsSumm)}\n\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t${(0,
                    o.eH)(100 / b[y].subscribedOnData.totalSumm * b[y].subscribedOnData.postsSumm)}%\n\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<strong>\n\t\t\t\t\t\t\t\t\t$${(0,
                    o.eH)(b[y].subscribedOnData.tipsSumm)}\n\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t${(0,
                    o.eH)(100 / b[y].subscribedOnData.totalSumm * b[y].subscribedOnData.tipsSumm)}%\n\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<strong>\n\t\t\t\t\t\t\t\t\t$${(0,
                    o.eH)(b[y].subscribedOnData.subscribesSumm)}\n\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t${(0,
                    o.eH)(100 / b[y].subscribedOnData.totalSumm * b[y].subscribedOnData.subscribesSumm)}%\n\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>">\n\t\t\t\t<i class="fa fa-eye"></i>\n\t\t\t</button>`
                }
                (0,
                n.yG)("chFanSpent", e, !1),
                (0,
                n.yG)("chFanDuration", t, !1);
                let s = "";
                b[y].listsStates.forEach((e=>{
                    "custom" === e.type && (s += '<span class="badge bg-success">' + e.name + "</span> ")
                }
                )),
                (0,
                n.yG)("chFanCustomLists", s, !1),
                await U(),
                await async function() {
                    document.querySelector("#chTodoViewButton")?.addEventListener("click", N);
                    let e = document.getElementById("chCreateFanTodo");
                    e?.addEventListener("click", P),
                    await C()
                }(),
                (0,
                n.Yq)()
            }
            ;
            async function C(e=!0) {
                if (!(0,
                r.K2)() || !(0,
                o.C2)())
                    return;
                let t = {
                    fan_id: e ? y : null
                }
                  , s = await (0,
                c.D)({
                    module: "profile",
                    action: "todos"
                }, t)
                  , a = s.data.todos?.length
                  , i = s.data.todos?.filter((e=>0 === e.done)).length;
                (0,
                n.BB)(".chDoneTodosUndone"),
                (0,
                n.HT)(".chTodosCount", a),
                (0,
                n.HT)(".chDoneTodosCount", i);
                let l = s.data.todos?.filter((e=>e.date && e.date < Math.floor(Date.now() / 1e3) && 0 !== e.done));
                l.length && ((0,
                n.V5)(".chDoneTodosUndone"),
                (0,
                n.HT)(".chDoneTodosUndone", `<i class="fa-solid fa-triangle-exclamation"></i> <span class="text-danger">${l.length} </span>`))
            }
            function N(e=!0, t={}) {
                let s = document.querySelector('[data-bs-target="#tab_todo"]')
                  , a = {
                    status: 1,
                    fan_id: e ? y : null,
                    ...t
                };
                (0,
                d.gB)(s, a)
            }
            async function P() {
                await (0,
                l.N)()
            }
            async function F() {
                let e = await async function() {
                    let e = window.location.pathname;
                    if (!e || 2 !== e.split("/").length)
                        return null;
                    let t = e.replace(/^\//, "")
                      , s = await (0,
                    a.W)(`/api2/v2/users/${t}`, "GET", null);
                    return !s || s.hasOwnProperty("error") ? null : {
                        id: s.id,
                        name: s.name,
                        username: s.username,
                        avatar: s.avatar
                    }
                }();
                return e || (_[y] ? {
                    id: _[y].id,
                    name: _[y].name,
                    username: _[y].username,
                    avatar: _[y].avatar
                } : null)
            }
            async function U(e=!1) {
                let t = await (0,
                c.D)({
                    module: "profile",
                    action: "get"
                }, {
                    fan_id: y
                });
                if (S = t,
                "success" === t.status) {
                    if (void 0 === t.note)
                        return;
                    document.getElementById("chFanDataNote").value = t.note
                }
                !function(e) {
                    let t = "";
                    if (document.getElementById("chFanProfileView").innerHTML = "",
                    j()) {
                        const s = S.info;
                        t = "<div class='popover1'>",
                        (0,
                        n.xb)(s.real_name) || (t += `<i class='fa fa-user'></i> ${(0,
                        n.$_)(s.real_name)} <hr class='m-1'/>`),
                        (0,
                        n.xb)(s.time_zone) || (t += `<i class='fa fa-clock'></i> ${(0,
                        o.yb)(s.time_zone)} <hr class='m-1'/>`),
                        (0,
                        n.xb)(s.where_from) || (t += `<i class='fa fa-globe'></i> ${(0,
                        n.$_)(s.where_from)} <hr class='m-1'/>`),
                        (0,
                        n.xb)(s.age_occupation) || (t += `<i class='fa-solid fa-user-doctor'></i> ${(0,
                        n.$_)(s.age_occupation)} <hr class='m-1'/>`),
                        (0,
                        n.xb)(s.hobbies) || (t += `<i class='fa-solid fa-soccer-ball'></i> ${(0,
                        n.$_)(s.hobbies)} <hr class='m-1'/>`),
                        (0,
                        n.xb)(s.important_info) || (t += `<i class='fa-solid fa-warning'></i> ${(0,
                        n.$_)(s.important_info)} </div>`),
                        e && (0,
                        n.Yq)(),
                        document.getElementById("chFanProfileView").innerHTML = `<button\n\t\t\t\ttype="button"\n\t\t\t\tdata-bs-placement="left"\n\t\t\t\tclass="btn btn-secondary btn-xs"\n\t\t\t\tdata-bs-toggle="popover"\n\t\t\t\tdata-bs-content="${t}"\n\t\t\t>\n\t\t\t\t<i class="fa fa-eye"></i>\n\t\t\t</button>`,
                        e && (0,
                        n.Yq)()
                    }
                }(e)
            }
            function j() {
                const e = S?.info ?? {};
                for (const t in e)
                    if (e.hasOwnProperty(t) && null !== e[t])
                        return !0;
                return !1
            }
            function G(e) {
                const t = S.info;
                !function(e) {
                    let t = document.querySelector('select[name="zone"]')
                      , s = [];
                    e?.forEach((e=>{
                        s.push({
                            name: `${e.countryName}; ${e.zoneName}`,
                            value: e.zoneName
                        })
                    }
                    )),
                    (0,
                    n.f7)(t, s),
                    M = new TomSelect("#chTimeZones",{
                        plugins: ["clear_button"],
                        maxItems: 1
                    })
                }(S.zones),
                j() && (e.querySelector('#chModalFanProfileModal input[name="real_name"]').value = (0,
                n.lr)(t.real_name),
                (0,
                n.xb)(t.where_from) || (e.querySelector('#chModalFanProfileModal input[name="where_from"]').value = (0,
                n.lr)(t.where_from)),
                (0,
                n.xb)(t.age_occupation) || (e.querySelector('#chModalFanProfileModal textarea[name="age_occupation"]').value = (0,
                n.lr)(t.age_occupation)),
                (0,
                n.xb)(t.hobbies) || (e.querySelector('#chModalFanProfileModal textarea[name="hobbies"]').value = (0,
                n.lr)(t.hobbies)),
                (0,
                n.xb)(t.important_info) || (e.querySelector('#chModalFanProfileModal textarea[name="important_info"]').value = (0,
                n.lr)(t.important_info)),
                (0,
                n.xb)(t.time_zone) || M.setValue(t.time_zone))
            }
            async function R() {
                try {
                    let e = await (0,
                    i.Sv)("fan", "purchases_media");
                    L.modal_media = !0,
                    await async function(e) {
                        if (!O())
                            return;
                        let t = e.id;
                        K = [],
                        (0,
                        n.V5)(`#${t} .spinner-border`),
                        J(y, 0),
                        Y()
                    }(e),
                    e.addEventListener("hide.bs.modal", (e=>{
                        L.modal_media = !1
                    }
                    ))
                } catch (e) {
                    console.log(e)
                }
            }
            async function W() {
                try {
                    L.modal_prices = !0;
                    let e = await (0,
                    i.Sv)("fan", "purchases_prices");
                    await async function(e) {
                        if (!O())
                            return;
                        let t = e.id;
                        (0,
                        n.V5)(`#${t} .spinner-border`),
                        e.querySelector(`input[name=ch-fan-prices-filter][value="${k.filter}"]`).checked = !0,
                        e.querySelector("input[name=ch-fan-prices-multiple]").checked = k.multiple,
                        e.querySelector("input[name=ch-fan-prices-unpurchased]").checked = k.unpurchased,
                        e.querySelector("input[name=ch-fan-prices-max-points]").value = k.max_points,
                        e.querySelectorAll("input[name=ch-fan-prices-filter]").forEach((e=>{
                            e.addEventListener("change", (e=>{
                                k.filter = e.target.value,
                                Q(!0)
                            }
                            ))
                        }
                        )),
                        e.querySelector("input[name=ch-fan-prices-unpurchased]").addEventListener("change", (e=>{
                            k.unpurchased = e.target.checked,
                            Q(!0)
                        }
                        )),
                        e.querySelector("input[name=ch-fan-prices-multiple]").addEventListener("change", (e=>{
                            k.multiple = e.target.checked,
                            Q(!0)
                        }
                        )),
                        e.querySelector("input[name=ch-fan-prices-max-points]").addEventListener("keyup", (e=>{
                            k.max_points = e.target.value,
                            Q(!0)
                        }
                        )),
                        Z = {},
                        L.purchases_graph_loaded = !1,
                        await J(y, 0),
                        Q()
                    }(e),
                    e.addEventListener("hide.bs.modal", (e=>{
                        L.modal_prices = !1
                    }
                    ))
                } catch (e) {
                    console.log(e)
                }
            }
            async function z() {
                try {
                    G(await (0,
                    i.Sv)("fan", "profile")),
                    document.getElementById("chModalSaveProfile").addEventListener("click", X)
                } catch (e) {
                    console.log(e)
                }
            }
            async function X() {
                (0,
                n.Xh)("chModalSaveProfile", 1),
                document.getElementById("infoSaved").classList.add("d-none");
                let e = {
                    real_name: document.querySelector('#chModalFanProfileModal input[name="real_name"]').value,
                    where_from: document.querySelector('#chModalFanProfileModal input[name="where_from"]').value,
                    age_occupation: document.querySelector('#chModalFanProfileModal textarea[name="age_occupation"]').value,
                    hobbies: document.querySelector('#chModalFanProfileModal textarea[name="hobbies"]').value,
                    important_info: document.querySelector('#chModalFanProfileModal textarea[name="important_info"]').value,
                    time_zone: M.getValue() ? M.getValue()[0] : null
                };
                await (0,
                c.D)({
                    module: "profile",
                    action: "update"
                }, {
                    fan_id: y,
                    profile: e
                }),
                (0,
                n.Xh)("chModalSaveProfile", 0),
                document.getElementById("infoSaved").src = p,
                document.getElementById("infoSaved").classList.remove("d-none"),
                U(!0),
                (0,
                n.Yq)()
            }
            async function V(e) {
                O() && ("" !== e || confirm("Do you want to delete everything from fan note?")) && await (0,
                c.D)({
                    module: "profile",
                    action: "update_note"
                }, {
                    fan_id: y,
                    note: e
                })
            }
            async function J(e, t) {
                let s = ""
                  , i = 0;
                s = 0 === t ? await (0,
                a.W)("/api2/v2/chats/" + e + "/media/?limit=20&skip_users=all", "GET", null) : await (0,
                a.W)("/api2/v2/chats/" + e + "/media/?last_id=" + t + "&limit=20&skip_users=all", "GET", null),
                Object.keys(s.list).forEach((t=>{
                    -1 === v[e].media.all_ids.indexOf(s.list[t].id) ? (!0 === s.list[t].isFree ? s.list[t].media.forEach((t=>{
                        v[e].media.free_ids.push(Number(t.id))
                    }
                    )) : !1 === s.list[t].isOpened ? s.list[t].media.forEach((t=>{
                        v[e].media.not_purchases_ids.push(Number(t.id))
                    }
                    )) : s.list[t].media.forEach((t=>{
                        v[e].media.purchases_ids.push(Number(t.id))
                    }
                    )),
                    v[e].media.all_ids.push(s.list[t].id),
                    v[e].media.purchases_items.push(s.list[t]),
                    void 0 !== s.list[t].media[0].id && void 0 !== s.list[t].fromUser.id && Number(s.list[t].fromUser.id) === Number(w.account.id) && !0 !== s.list[t].isFree && !1 !== s.list[t].isOpened && (i++,
                    "video" === s.list[t].media[0].type ? v[e].media.counts.video++ : v[e].media.counts.photo++)) : s.hasMore = !1
                }
                )),
                L.modal_prices && i > 0 && Q(),
                L.modal_media && i > 0 && Y(),
                void 0 !== s.hasMore && !0 === s.hasMore ? J(e, s.nextLastId) : function() {
                    L.modal_media && (0,
                    n.BB)("#chModalFanPurchasesMediaModal .spinner-border");
                    L.modal_prices && (0,
                    n.BB)("#chModalFanPurchasesPricesModal .spinner-border");
                    (0,
                    n.BB)("#ModalMediaVault___BV_modal_header_ .spinner")
                }()
            }
            u.Z.on("updateTodos", (e=>C(e?.byFan))),
            u.Z.on("viewTodos", (e=>N(e?.byFan, e)));
            let K = [];
            function Y() {
                let e = ""
                  , t = v[y].media.purchases_items;
                t.length && console.log("Purchases items are empty!"),
                t.forEach((t=>{
                    if (-1 !== K.indexOf(t.id))
                        return;
                    let s, a;
                    if (K.push(t.id),
                    s = "video" === t.media[0].type ? '<i class="fa-solid fa-video"></i>' : '<i class="fa-solid fa-image"></i>',
                    !1 === t.isOpened)
                        return;
                    let i = v[y].media.counts;
                    (0,
                    n.Yh)("#chModalFanPurchasesMediaModal .ch-all-count", i.video + i.photo),
                    (0,
                    n.Yh)("#chModalFanPurchasesMediaModal .ch-photo-count", i.photo),
                    (0,
                    n.Yh)("#chModalFanPurchasesMediaModal .ch-video-count", i.video),
                    a = "" !== t.text ? `\n\t\t\t\t<span \n\t\t\t\t\tclass="position-absolute bottom-0 end-0 badge bg-light m-2 text-dark bg-opacity-75" \n\t\t\t\t\tdata-bs-toggle="tooltip" \n\t\t\t\t\ttitle="${t.text}">\n\t\t\t\t\t<i class="fa-solid fa-message"></i>\n\t\t\t\t</span>` : "",
                    e += `\n\t\t\t<div class="media-item position-relative d-inline-block m-1 rounded">\n\t\t\t\t<span class="position-absolute badge bg-success bg-opacity-75 m-2">${s} $${(0,
                    o.eH)(t.price)}</span>\n\t\t\t\t<a \n\t\t\t\t\thref="https://onlyfans.com/my/chats/chat/${y}?firstId=${t.id}" \n\t\t\t\t\ttarget="_blank" \n\t\t\t\t\tclass="position-absolute bottom-0 badge bg-light m-2 text-dark bg-opacity-75"\n\t\t\t\t>\n\t\t\t\t\t<i class="fa-solid fa-calendar-days"></i> ${(0,
                    o.Ck)(t.createdAt)}\n\t\t\t\t</a>\n\t\t\t\t${a}\n\t\t\t\t<img src="${t.media[0].thumb}" width="145" height="145" data-not-make-blur class="rounded"/>\n\t\t\t</div>`
                }
                )),
                "" !== e && (document.querySelector("#chModalFanPurchasesMediaModal .modal-body").innerHTML += e,
                (0,
                n.WR)("#chModalFanPurchasesMediaModal .modal-body"))
            }
            let Z = {};
            function Q(e=!1) {
                (0,
                o.VP)("fan_prices", k);
                let t = []
                  , s = 0
                  , a = 0
                  , i = 0
                  , r = 0;
                if (!e && L.purchases_graph_loaded)
                    return;
                let c = v[y].media.purchases_items;
                if (!c.length)
                    return void console.log("Purchases items array is empty");
                if (c.forEach((e=>{
                    let n = new Date(e.createdAt).toLocaleString("en", {
                        month: "2-digit",
                        day: "2-digit"
                    });
                    if (!k.unpurchased && !1 === e.isOpened)
                        return;
                    if (a >= k.max_points)
                        return void (L.purchases_graph_loaded = !0);
                    let o = "video" === e.media[0].type ? "Video" : "Photo";
                    1 === Number(k.filter) && "Photo" !== o || 2 === Number(k.filter) && "Video" !== o || (k.multiple || s !== n) && (s = n,
                    !1 === e.isOpened && (o += " (Unpurchased)"),
                    t.push({
                        x: n,
                        y: Number(e.price),
                        title: o,
                        message: e.text,
                        isOpened: e.isOpened
                    }),
                    i < e.price && (i = e.price),
                    r += e.price,
                    a++)
                }
                )),
                (0,
                o.t)(Z, t))
                    return;
                Z = t,
                (0,
                n.C2)("chFanPricesChart", t);
                let l = r && a ? r / a : 0;
                (0,
                n.Yh)("#chModalFanPurchasesPricesModal .ch-max-price", "$" + (0,
                o.eH)(i)),
                (0,
                n.Yh)("#chModalFanPurchasesPricesModal .ch-avg-price", "$" + (0,
                o.eH)(l))
            }
            function ee(e) {
                if ((0,
                r.K2)() && (0,
                o.C2)()) {
                    if (void 0 !== e.id) {
                        let t = e;
                        (e = {})[t.id] = t
                    }
                    if (void 0 !== Object.keys(e)[0] && void 0 !== e[Object.keys(e)[0]].id) {
                        let t = e[Object.keys(e)[0]].id;
                        _[t] = e[t],
                        void 0 === v[t] && (v[t] = {
                            media: {}
                        },
                        v[t].media.counts = {
                            photo: 0,
                            video: 0
                        },
                        v[t].media.purchases_items = [],
                        v[t].media.all_ids = [],
                        v[t].media.purchases_ids = [],
                        v[t].media.not_purchases_ids = [],
                        v[t].media.free_ids = [])
                    }
                }
            }
            function te(e) {
                (0,
                r.K2)() && (0,
                o.C2)() && (y = e)
            }
        }
        ,
        360: (e,t,s)=>{
            s.d(t, {
                D: ()=>B,
                h: ()=>f
            });
            var a = s(808)
              , n = s(878)
              , i = s(783)
              , o = s(60)
              , r = s(776)
              , c = s(928)
              , l = s(76)
              , d = s(983)
              , u = s(686);
            const m = "ch_home";
            let h = null
              , p = !0
              , g = null;
            const f = async()=>{
                p && (p = 0,
                (0,
                n.Nj)(m, "home.html"),
                document.getElementById("activeChAccountButton").addEventListener("click", r.NG),
                document.querySelector("#addOperatorName").addEventListener("click", x),
                document.querySelector("#chOperatorName").addEventListener("change", I),
                document.getElementById("disconnectChAccountButton").addEventListener("click", H),
                document.getElementById("startTrackerTime").addEventListener("click", L),
                document.getElementById("stopTrackerTime").addEventListener("click", k)),
                (0,
                n.Ok)(m),
                (0,
                n.W_)(),
                (0,
                n.Yq)(),
                setTimeout((async()=>{
                    await _(),
                    await async function() {
                        d.Z.emit("updateTodos", {
                            byFan: !1
                        }),
                        (0,
                        a.Oo)(document.querySelector("#chHomeTodoViewButton"), "click", T)
                    }()
                }
                ), 2e3)
            }
            ;
            async function _() {
                if (!(0,
                r.K2)() || !(0,
                a.C2)())
                    return;
                let e = await (0,
                l.D)({
                    module: "tracker",
                    action: "running_tracker"
                });
                if (!e.data.tracker)
                    return h.enable(),
                    (0,
                    a.DW)("#addOperatorName").enableButton(),
                    void (0,
                    n.hp)("stopTrackerTime", "startTrackerTime", !1);
                (0,
                n.hp)("startTrackerTime", "stopTrackerTime", !1),
                O(e.data.tracker.of_operator_id),
                h.setValue(e.data.tracker.of_operator_id),
                h.disable(),
                (0,
                a.DW)("#addOperatorName").disableButton(),
                await v(e.data.tracker),
                b()
            }
            function y(e) {
                return new Date(1e3 * e).toLocaleString("en-GB", {
                    day: "numeric",
                    month: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: !1,
                    timeZone: "UTC"
                }).replace(",", "")
            }
            function b() {
                g || (E(),
                g = setInterval((async()=>{
                    let e = await (0,
                    l.D)({
                        module: "tracker",
                        action: "interval"
                    });
                    e.data.tracker ? await v(e.data.tracker) : M()
                }
                ), 18e5))
            }
            async function v(e) {
                let t = await S(e);
                if (await (0,
                n.iJ)(),
                !t.length)
                    return;
                let s = function() {
                    let e = (0,
                    a.iE)()
                      , t = (0,
                    a.Gw)().operator_id;
                    return e.auth.operators?.find((e=>e.id === Number(t)))
                }()
                  , i = t.map((e=>e.amount)).reduce(((e,t)=>e + t), 0)
                  , o = t.map((e=>e.net)).reduce(((e,t)=>e + t), 0)
                  , r = (o - function(e, t) {
                    if (t > 0) {
                        return e - t / 100 * e
                    }
                    return e
                }(o, s.transaction_percentage)).toFixed(2)
                  , c = t.length;
                E({
                    amount: i,
                    created_at: e.created_at,
                    updated_at: e.updated_at,
                    account_income: o,
                    operator_income: r,
                    transactions_count: c
                })
            }
            function E(e={}) {
                e.created_at && (e.created_at = y(e.created_at)),
                e.updated_at && (e.updated_at = y(e.updated_at));
                const t = {
                    account_income: "0.00",
                    operator_income: "0.00",
                    transactions_count: 0,
                    amount: "0.00",
                    created_at: "00.00 00:00",
                    updated_at: "00.00 00:00",
                    ...e
                };
                Object.keys(t).forEach((e=>{
                    let s = document.querySelectorAll(`.${e}`);
                    s?.forEach((s=>{
                        s.innerHTML = t[e]
                    }
                    ))
                }
                ))
            }
            function w(e, t) {
                const s = {
                    startDate: e.created_at,
                    endDate: e.updated_at,
                    offset: t
                }
                  , a = [];
                for (let e in s)
                    a.push(encodeURIComponent(e) + "=" + encodeURIComponent(s[e]));
                return a.join("&")
            }
            async function S(e) {
                let t, s = 0, a = [];
                do {
                    t = await (0,
                    u.W)("/api2/v2/payouts/transactions?" + w(e, s), "GET", null);
                    let n = t.list?.filter((t=>new Date(t.createdAt) >= new Date(e.created_at) && new Date(t.createdAt) <= new Date(e.updated_at)));
                    n.length && a.push(...n),
                    s += 10
                } while (t?.hasMore);
                return a
            }
            function M() {
                clearTimeout(g),
                g = null
            }
            async function L() {
                try {
                    (0,
                    n.f)();
                    let e = (0,
                    a.$t)("start_shift");
                    (0,
                    n.Xf)("startTrackerTime", `${e}`, 1);
                    let t = document.getElementById("startTrackerTime")
                      , s = (0,
                    a.Gw)();
                    if (!s.operator_id || 0 === Number(s.operator_id))
                        throw new Error((0,
                        a.$t)("please_choose_the_operator"));
                    let i = document.getElementById("stopTrackerTime")
                      , o = await (0,
                    l.D)({
                        module: "tracker",
                        action: "start"
                    });
                    if ("exists" === o.status)
                        throw await _(),
                        new Error(o.message);
                    h.disable(),
                    (0,
                    a.DW)("#addOperatorName").disableButton(),
                    t.classList.toggle("d-none"),
                    i.classList.toggle("d-none"),
                    b()
                } catch (e) {
                    (0,
                    i.cB)(e)
                } finally {
                    let e = (0,
                    a.$t)("start_shift");
                    (0,
                    n.Xf)("startTrackerTime", `<i class="fa-solid fa-play"></i> ${e}`, 0),
                    await (0,
                    n.iJ)()
                }
            }
            async function k() {
                try {
                    let e = (0,
                    a.$t)("end_shift");
                    (0,
                    n.Xf)("stopTrackerTime", `${e}`, 1),
                    (0,
                    n.f)();
                    let t = document.getElementById("startTrackerTime")
                      , s = (0,
                    a.Gw)();
                    if (!s.operator_id || 0 === Number(s.operator_id))
                        throw new Error((0,
                        a.$t)("please_choose_the_operator"));
                    let i = await (0,
                    l.D)({
                        module: "tracker",
                        action: "show"
                    })
                      , o = await S(i.data.tracker)
                      , r = o.map((e=>e.amount)).reduce(((e,t)=>e + t), 0)
                      , c = document.getElementById("stopTrackerTime")
                      , d = await (0,
                    l.D)({
                        module: "tracker",
                        action: "stop"
                    }, {
                        amount: r,
                        transactions: o
                    });
                    M(),
                    h.enable(),
                    (0,
                    a.DW)("#addOperatorName").enableButton(),
                    t.classList.toggle("d-none"),
                    c.classList.toggle("d-none"),
                    E(d.data.tracker)
                } catch (e) {
                    await _(),
                    (0,
                    i.cB)(e)
                } finally {
                    let e = (0,
                    a.$t)("end_shift");
                    (0,
                    n.Xf)("stopTrackerTime", `<i class="fa-solid fa-pause"></i> ${e}`, 0),
                    await (0,
                    n.iJ)()
                }
            }
            function B() {
                let e = document.getElementById("mainWaiting")
                  , t = document.getElementById("chAccountActivate")
                  , s = document.getElementById("chAccountInfo");
                s && (s.classList.add("d-none"),
                e.classList.add("d-none"),
                t.classList.add("d-none"),
                (0,
                r.K2)() && (s.classList.remove("d-none"),
                function() {
                    let e, t = (0,
                    a.iE)();
                    (0,
                    a.Gw)();
                    document.getElementById("chLicenseName").innerText = t.auth.license_name;
                    let s = "";
                    switch (t.subscribe.type) {
                    case "trial":
                        e = '<span class="badge bg-warning"><i class="fa-solid fa-hourglass me-1"></i> Trial</span>',
                        s = (0,
                        a.iO)(new Date(1e3 * t.subscribe.expire));
                        break;
                    case "free":
                        e = '<span class="badge bg-success"><i class="fa-solid fa-check me-1"></i> FREE</span>';
                        break;
                    case "paid":
                        e = '<span class="badge bg-success"><i class="fa-solid fa-check me-1"></i> Paid</span>',
                        s = (0,
                        a.iO)(new Date(1e3 * t.subscribe.expire))
                    }
                    if (document.getElementById("chAccountSubscribeType").innerHTML = e,
                    "" !== s) {
                        let e = `<br/><a href="https://chathelper.ai/onlyfans/accounts" target="_blank" class="btn btn-success btn-xs mt-2"><i class="fa-regular fa-thumbs-up"></i> <span data-locale-key="prolong_subscribe">${(0,
                        a.$t)("prolong_subscribe")}</span></a>`;
                        document.getElementById("chAccountSubscribeEnd").innerHTML = s + e
                    }
                }()),
                (0,
                a.C2)() && !(0,
                r.K2)() && t.classList.remove("d-none"),
                (0,
                a.C2)() || (0,
                r.K2)() || e.classList.remove("d-none"),
                (0,
                c.SP)(),
                _())
            }
            const T = ()=>{
                d.Z.emit("viewTodos", {
                    byFan: !1,
                    status: 1
                })
            }
            ;
            async function x() {
                try {
                    await (0,
                    o.Sv)("home", "operator");
                    document.querySelector("#chOperatorNameStore").addEventListener("click", q)
                } catch (e) {
                    (0,
                    i.cB)(e.message)
                }
            }
            async function q(e) {
                const t = document.querySelector(".operator-name-form");
                if (e.preventDefault(),
                e.stopPropagation(),
                !t.checkValidity())
                    return void (0,
                    i.cB)("Please fill all inputs");
                (0,
                o.GA)("operatorNameModal");
                let s = {
                    name: t.querySelector("#name").value,
                    color: t.querySelector("#color").value
                };
                try {
                    let e = await (0,
                    l.D)({
                        module: "operator",
                        action: "store"
                    }, s);
                    (0,
                    a.Hf)("auth.operators", e.data.operator),
                    h.addOption(e.data.operator),
                    h.setValue(e.data.operator.id),
                    (0,
                    i.t5)()
                } catch (e) {
                    (0,
                    i.cB)(e.message)
                }
                t.classList.add("was-validated")
            }
            async function H() {
                confirm("Are you sure to sign out?") && ((0,
                a.rF)({}, !0),
                (0,
                a.VP)("operator_id", 0),
                await (0,
                r.$N)(),
                B(),
                (0,
                c.SP)())
            }
            function I(e) {
                O(e.target.value)
            }
            function O(e) {
                (0,
                a.VP)("operator_id", e)
            }
            document.addEventListener("updateOperators", (function(e) {
                let t = (0,
                a.Gw)();
                var s, n;
                h || function(e, t) {
                    if (h)
                        return;
                    h = new TomSelect(`#${e}`,{
                        maxItems: 1,
                        valueField: "id",
                        controlInput: null,
                        labelField: "name",
                        closeAfterSelect: !0,
                        hideSelected: !0,
                        hidePlaceholder: !1,
                        options: t,
                        placeholder: (0,
                        a.$t)("select_user"),
                        render: {
                            item: function(e, t) {
                                return `<div>\n\t\t\t\t\t<span\n                        class="ch-dialog-row-color ${0 === e.id ? " d-none" : ""}"\n                        style="background-color:${e.color};position:relative;top:3px"\n                    ></span>\n                    <span class="name" data-locale-key="${0 === e.id ? "select_user" : e.name}">${e.name}</span>\n                </div>`
                            },
                            option: function(e, t) {
                                return `<div class="${0 === e.id ? "d-none" : ""} ">\n\t\t\t\t\t<span\n\t\t\t\t\t\tclass="ch-dialog-row-color"\n\t\t\t\t\t\tstyle="background-color:${e.color};position:relative;top:3px"\n\t\t\t\t\t></span>\n\t\t\t\t\t<span class="label">${e.name}</span>\n\t\t\t\t</div>`
                            }
                        },
                        create: !1
                    })
                }("chOperatorName", e.detail),
                h.clear(),
                h.clearOptions(),
                h.addOption({
                    id: 0,
                    name: (0,
                    a.$t)("select_user")
                }),
                h.addOption(e.detail),
                (0,
                a.Hf)("auth.operators", e.detail, !0),
                t.operator_id && 0 !== Number(t.operator_id) || (s = e.detail,
                n = t.operator_id,
                s.findIndex((e=>e.id === Number(n))) > 0) ? h.setValue(t.operator_id) : h.setValue(0)
            }
            ))
        }
        ,
        686: (__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{
            __webpack_require__.d(__webpack_exports__, {
                W: ()=>apiFetch
            });
            var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(808)
              , _local_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(268)
              , _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76)
              , _toast_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(783)
              , sha1$1 = {
                exports: {}
            };
            (function(module) {
                (function() {
                    var root = "object" == typeof window ? window : {}
                      , NODE_JS = !root.JS_SHA1_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
                    NODE_JS && (root = commonjsGlobal);
                    var COMMON_JS = !root.JS_SHA1_NO_COMMON_JS && module.exports
                      , HEX_CHARS = "0123456789abcdef".split("")
                      , EXTRA = [-2147483648, 8388608, 32768, 128]
                      , SHIFT = [24, 16, 8, 0]
                      , OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"]
                      , blocks = []
                      , createOutputMethod = function(e) {
                        return function(t) {
                            return new Sha1(!0).update(t)[e]()
                        }
                    }
                      , createMethod = function() {
                        var e = createOutputMethod("hex");
                        NODE_JS && (e = nodeWrap(e)),
                        e.create = function() {
                            return new Sha1
                        }
                        ,
                        e.update = function(t) {
                            return e.create().update(t)
                        }
                        ;
                        for (var t = 0; t < OUTPUT_TYPES.length; ++t) {
                            var s = OUTPUT_TYPES[t];
                            e[s] = createOutputMethod(s)
                        }
                        return e
                    }
                      , nodeWrap = function(method) {
                        var crypto = eval("require('crypto')")
                          , Buffer = eval("require('buffer').Buffer")
                          , nodeMethod = function(e) {
                            if ("string" == typeof e)
                                return crypto.createHash("sha1").update(e, "utf8").digest("hex");
                            if (e.constructor === ArrayBuffer)
                                e = new Uint8Array(e);
                            else if (void 0 === e.length)
                                return method(e);
                            return crypto.createHash("sha1").update(new Buffer(e)).digest("hex")
                        };
                        return nodeMethod
                    };
                    function Sha1(e) {
                        e ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0,
                        this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        this.h0 = 1732584193,
                        this.h1 = 4023233417,
                        this.h2 = 2562383102,
                        this.h3 = 271733878,
                        this.h4 = 3285377520,
                        this.block = this.start = this.bytes = this.hBytes = 0,
                        this.finalized = this.hashed = !1,
                        this.first = !0
                    }
                    Sha1.prototype.update = function(e) {
                        if (!this.finalized) {
                            var t = "string" != typeof e;
                            t && e.constructor === root.ArrayBuffer && (e = new Uint8Array(e));
                            for (var s, a, n = 0, i = e.length || 0, o = this.blocks; n < i; ) {
                                if (this.hashed && (this.hashed = !1,
                                o[0] = this.block,
                                o[16] = o[1] = o[2] = o[3] = o[4] = o[5] = o[6] = o[7] = o[8] = o[9] = o[10] = o[11] = o[12] = o[13] = o[14] = o[15] = 0),
                                t)
                                    for (a = this.start; n < i && a < 64; ++n)
                                        o[a >> 2] |= e[n] << SHIFT[3 & a++];
                                else
                                    for (a = this.start; n < i && a < 64; ++n)
                                        (s = e.charCodeAt(n)) < 128 ? o[a >> 2] |= s << SHIFT[3 & a++] : s < 2048 ? (o[a >> 2] |= (192 | s >> 6) << SHIFT[3 & a++],
                                        o[a >> 2] |= (128 | 63 & s) << SHIFT[3 & a++]) : s < 55296 || s >= 57344 ? (o[a >> 2] |= (224 | s >> 12) << SHIFT[3 & a++],
                                        o[a >> 2] |= (128 | s >> 6 & 63) << SHIFT[3 & a++],
                                        o[a >> 2] |= (128 | 63 & s) << SHIFT[3 & a++]) : (s = 65536 + ((1023 & s) << 10 | 1023 & e.charCodeAt(++n)),
                                        o[a >> 2] |= (240 | s >> 18) << SHIFT[3 & a++],
                                        o[a >> 2] |= (128 | s >> 12 & 63) << SHIFT[3 & a++],
                                        o[a >> 2] |= (128 | s >> 6 & 63) << SHIFT[3 & a++],
                                        o[a >> 2] |= (128 | 63 & s) << SHIFT[3 & a++]);
                                this.lastByteIndex = a,
                                this.bytes += a - this.start,
                                a >= 64 ? (this.block = o[16],
                                this.start = a - 64,
                                this.hash(),
                                this.hashed = !0) : this.start = a
                            }
                            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0,
                            this.bytes = this.bytes % 4294967296),
                            this
                        }
                    }
                    ,
                    Sha1.prototype.finalize = function() {
                        if (!this.finalized) {
                            this.finalized = !0;
                            var e = this.blocks
                              , t = this.lastByteIndex;
                            e[16] = this.block,
                            e[t >> 2] |= EXTRA[3 & t],
                            this.block = e[16],
                            t >= 56 && (this.hashed || this.hash(),
                            e[0] = this.block,
                            e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0),
                            e[14] = this.hBytes << 3 | this.bytes >>> 29,
                            e[15] = this.bytes << 3,
                            this.hash()
                        }
                    }
                    ,
                    Sha1.prototype.hash = function() {
                        var e, t, s = this.h0, a = this.h1, n = this.h2, i = this.h3, o = this.h4, r = this.blocks;
                        for (e = 16; e < 80; ++e)
                            t = r[e - 3] ^ r[e - 8] ^ r[e - 14] ^ r[e - 16],
                            r[e] = t << 1 | t >>> 31;
                        for (e = 0; e < 20; e += 5)
                            s = (t = (a = (t = (n = (t = (i = (t = (o = (t = s << 5 | s >>> 27) + (a & n | ~a & i) + o + 1518500249 + r[e] << 0) << 5 | o >>> 27) + (s & (a = a << 30 | a >>> 2) | ~s & n) + i + 1518500249 + r[e + 1] << 0) << 5 | i >>> 27) + (o & (s = s << 30 | s >>> 2) | ~o & a) + n + 1518500249 + r[e + 2] << 0) << 5 | n >>> 27) + (i & (o = o << 30 | o >>> 2) | ~i & s) + a + 1518500249 + r[e + 3] << 0) << 5 | a >>> 27) + (n & (i = i << 30 | i >>> 2) | ~n & o) + s + 1518500249 + r[e + 4] << 0,
                            n = n << 30 | n >>> 2;
                        for (; e < 40; e += 5)
                            s = (t = (a = (t = (n = (t = (i = (t = (o = (t = s << 5 | s >>> 27) + (a ^ n ^ i) + o + 1859775393 + r[e] << 0) << 5 | o >>> 27) + (s ^ (a = a << 30 | a >>> 2) ^ n) + i + 1859775393 + r[e + 1] << 0) << 5 | i >>> 27) + (o ^ (s = s << 30 | s >>> 2) ^ a) + n + 1859775393 + r[e + 2] << 0) << 5 | n >>> 27) + (i ^ (o = o << 30 | o >>> 2) ^ s) + a + 1859775393 + r[e + 3] << 0) << 5 | a >>> 27) + (n ^ (i = i << 30 | i >>> 2) ^ o) + s + 1859775393 + r[e + 4] << 0,
                            n = n << 30 | n >>> 2;
                        for (; e < 60; e += 5)
                            s = (t = (a = (t = (n = (t = (i = (t = (o = (t = s << 5 | s >>> 27) + (a & n | a & i | n & i) + o - 1894007588 + r[e] << 0) << 5 | o >>> 27) + (s & (a = a << 30 | a >>> 2) | s & n | a & n) + i - 1894007588 + r[e + 1] << 0) << 5 | i >>> 27) + (o & (s = s << 30 | s >>> 2) | o & a | s & a) + n - 1894007588 + r[e + 2] << 0) << 5 | n >>> 27) + (i & (o = o << 30 | o >>> 2) | i & s | o & s) + a - 1894007588 + r[e + 3] << 0) << 5 | a >>> 27) + (n & (i = i << 30 | i >>> 2) | n & o | i & o) + s - 1894007588 + r[e + 4] << 0,
                            n = n << 30 | n >>> 2;
                        for (; e < 80; e += 5)
                            s = (t = (a = (t = (n = (t = (i = (t = (o = (t = s << 5 | s >>> 27) + (a ^ n ^ i) + o - 899497514 + r[e] << 0) << 5 | o >>> 27) + (s ^ (a = a << 30 | a >>> 2) ^ n) + i - 899497514 + r[e + 1] << 0) << 5 | i >>> 27) + (o ^ (s = s << 30 | s >>> 2) ^ a) + n - 899497514 + r[e + 2] << 0) << 5 | n >>> 27) + (i ^ (o = o << 30 | o >>> 2) ^ s) + a - 899497514 + r[e + 3] << 0) << 5 | a >>> 27) + (n ^ (i = i << 30 | i >>> 2) ^ o) + s - 899497514 + r[e + 4] << 0,
                            n = n << 30 | n >>> 2;
                        this.h0 = this.h0 + s << 0,
                        this.h1 = this.h1 + a << 0,
                        this.h2 = this.h2 + n << 0,
                        this.h3 = this.h3 + i << 0,
                        this.h4 = this.h4 + o << 0
                    }
                    ,
                    Sha1.prototype.hex = function() {
                        this.finalize();
                        var e = this.h0
                          , t = this.h1
                          , s = this.h2
                          , a = this.h3
                          , n = this.h4;
                        return HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[s >> 28 & 15] + HEX_CHARS[s >> 24 & 15] + HEX_CHARS[s >> 20 & 15] + HEX_CHARS[s >> 16 & 15] + HEX_CHARS[s >> 12 & 15] + HEX_CHARS[s >> 8 & 15] + HEX_CHARS[s >> 4 & 15] + HEX_CHARS[15 & s] + HEX_CHARS[a >> 28 & 15] + HEX_CHARS[a >> 24 & 15] + HEX_CHARS[a >> 20 & 15] + HEX_CHARS[a >> 16 & 15] + HEX_CHARS[a >> 12 & 15] + HEX_CHARS[a >> 8 & 15] + HEX_CHARS[a >> 4 & 15] + HEX_CHARS[15 & a] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n]
                    }
                    ,
                    Sha1.prototype.toString = Sha1.prototype.hex,
                    Sha1.prototype.digest = function() {
                        this.finalize();
                        var e = this.h0
                          , t = this.h1
                          , s = this.h2
                          , a = this.h3
                          , n = this.h4;
                        return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n]
                    }
                    ,
                    Sha1.prototype.array = Sha1.prototype.digest,
                    Sha1.prototype.arrayBuffer = function() {
                        this.finalize();
                        var e = new ArrayBuffer(20)
                          , t = new DataView(e);
                        return t.setUint32(0, this.h0),
                        t.setUint32(4, this.h1),
                        t.setUint32(8, this.h2),
                        t.setUint32(12, this.h3),
                        t.setUint32(16, this.h4),
                        e
                    }
                    ;
                    var exports = createMethod();
                    COMMON_JS ? module.exports = exports : root.sha1 = exports
                }
                )()
            }
            )(sha1$1);
            const sha1 = sha1$1.exports
              , getOnlyFansHash = (e,t,s)=>{
                let a = 0;
                return t.forEach((t=>{
                    a += e.charCodeAt(t)
                }
                )),
                Math.abs(a + s).toString(16)
            }
              , updateRules = async()=>{
                const e = await (0,
                _api_js__WEBPACK_IMPORTED_MODULE_1__.D)({
                    module: "auth",
                    action: "rules"
                });
                (0,
                _helpers_js__WEBPACK_IMPORTED_MODULE_0__.rF)({
                    rules: e.data.rules
                })
            }
              , apiFetch = async(e,t,s)=>{
                const a = JSON.parse((0,
                _local_storage_js__WEBPACK_IMPORTED_MODULE_3__.U2)("ch_config"))
                  , n = (new Date).getTime().toString()
                  , i = [a.rules.static_param, n, e, a.account.id].join("\n")
                  , o = sha1.hex(i)
                  , r = a.rules.start_param + ":" + o + ":" + getOnlyFansHash(o, a.rules.checksum_indexes, a.rules.checksum_constant) + ":" + a.rules.end_param;
                return new Promise((i=>{
                    fetch("https://onlyfans.com" + e, {
                        headers: {
                            accept: "application/json",
                            "user-agent": window.navigator.userAgent,
                            "app-token": a.rules.app_token,
                            sign: r,
                            time: n,
                            "user-id": a.account.id,
                            "Content-Type": "application/json",
                            "x-bc": (0,
                            _local_storage_js__WEBPACK_IMPORTED_MODULE_3__.U2)("bcTokenSha")
                        },
                        referrer: "https://onlyfans.com",
                        referrerPolicy: "strict-origin-when-cross-origin",
                        body: s ? JSON.stringify(s) : null,
                        method: t,
                        mode: "cors",
                        credentials: "include"
                    }).then((async e=>{
                        if (401 === e.status) {
                            let e = Number((0,
                            _local_storage_js__WEBPACK_IMPORTED_MODULE_3__.U2)("rules_update_attempt"));
                            if ((0,
                            _local_storage_js__WEBPACK_IMPORTED_MODULE_3__.t8)("rules_update_attempt", e >= 1 ? ++e : 1),
                            await updateRules(),
                            e && e > 1)
                                throw (0,
                                _toast_js__WEBPACK_IMPORTED_MODULE_2__.cB)('Authentication Error! Please connect with our <a target="_blank" href="https://t.me/chathelper_ai">support</a>'),
                                new Error("");
                            throw window.location.reload(),
                            new Error("")
                        }
                        return 400 === e.status && await updateRules(),
                        e.json()
                    }
                    )).then((e=>{
                        (0,
                        _local_storage_js__WEBPACK_IMPORTED_MODULE_3__.Od)("rules_update_attempt"),
                        i(e)
                    }
                    )).catch((e=>{
                        i({
                            error: "API Error"
                        })
                    }
                    ))
                }
                ))
            }
        }
        ,
        522: (e,t,s)=>{
            s.d(t, {
                n: ()=>f,
                z: ()=>y
            });
            var a = s(686)
              , n = s(268)
              , i = s(878)
              , o = s(808)
              , r = s(776)
              , c = s(783)
              , l = s(76)
              , d = s(60)
              , u = s(983);
            const m = "ch_settings";
            let h = !0
              , p = {}
              , g = {};
            const f = async()=>{
                !(0,
                r.K2)() || (0,
                o.C2)(),
                h && (h = 0,
                (0,
                i.Nj)(m, "settings.html"),
                document.querySelector('#chSettings select[name="ch_settings_ext_position"]').addEventListener("change", k),
                document.querySelector('#chSettings select[name="ch_settings_site_position"]').addEventListener("change", B),
                document.querySelector('#chSettings select[name="ch_settings_ext_size"]').addEventListener("change", L),
                document.querySelector('#chSettings input[name="ch_settings_emojis"]').addEventListener("keyup", M),
                document.getElementById("openGreetingMessageModal").addEventListener("click", E),
                document.querySelector("#chSettingsReset").addEventListener("click", S),
                document.querySelector('select[name="locales"]').addEventListener("change", b),
                document.querySelector('#chSettings input[name="ch_settings_blur"]').addEventListener("change", _),
                function() {
                    let e = (0,
                    o.Gw)()
                      , t = (0,
                    o.iE)();
                    p = e.settings,
                    g = t,
                    (void 0 === p || void 0 === p.emojis) && w();
                    v()
                }()),
                (0,
                i.Ok)(m),
                (0,
                r.K2)() && (0,
                o.C2)() && (document.getElementById("greetingBlock").classList.remove("d-none"),
                (0,
                o.uK)())
            }
            ;
            function _(e) {
                let t = e.target.checked;
                (0,
                o.VP)("make_image_blur", t),
                y()
            }
            const y = ()=>{
                let e = (0,
                o.Gw)();
                !(!e.make_image_blur || 1 != e.make_image_blur) ? document.querySelectorAll("img").forEach((e=>{
                    e.naturalWidth,
                    e.naturalHeight,
                    e.hasAttribute("width") && !e.hasAttribute("data-not-make-blur") && e.classList.add("ch-img-blur")
                }
                )) : document.querySelectorAll("img").forEach((e=>{
                    e.classList.remove("ch-img-blur")
                }
                ))
            }
            ;
            function b(e) {
                let t = e.target.value;
                (0,
                n.t8)("locale", t),
                (0,
                o.FC)(),
                (0,
                o.UH)()
            }
            function v() {
                let e = (0,
                o.Gw)()
                  , t = !(!e.make_image_blur || 1 != e.make_image_blur)
                  , s = (0,
                n.U2)("locale") ?? "en";
                (0,
                o._F)("chSettings", "ch_settings_ext_position", p.ext_position, "select"),
                (0,
                o._F)("chSettings", "ch_settings_site_position", p.site_position, "select"),
                (0,
                o._F)("chSettings", "ch_settings_ext_size", p.ext_size, "select"),
                (0,
                o._F)("chSettings", "ch_settings_emojis", p.emojis),
                (0,
                o._F)("chSettings", "ch_settings_blur", t, "checkbox"),
                (0,
                o._F)("chSettings", "locales", s, "select")
            }
            async function E() {
                try {
                    await (0,
                    d.Sv)("setting", "greeting");
                    const e = await (0,
                    l.D)({
                        module: "setting",
                        action: "open_greeting_form"
                    });
                    document.getElementById("saveGreetingMessage").addEventListener("click", T),
                    (0,
                    i.yG)("greetingModalBody", e.data.content, !1);
                    !0 === (await (0,
                    a.W)("/api2/v2/users/me", "GET")).replyOnSubscribe && document.getElementById("replyOnSubscribeIsEnable").classList.remove("d-none")
                } catch (e) {
                    console.error(e)
                }
            }
            function w() {
                p = {},
                p.emojis = "🥰🍆💦😍❤️🤤🔥😈😘💗🙈🔞😽😹😅😪😭💞🥺🤐🥵😏💕🤝😱😉🤬👅💋😻😼🔥💥✨💫🍑🍒🍌🍓",
                p.site_position = "left",
                p.ext_position = "top_right",
                p.ext_size = "small"
            }
            function S() {
                confirm("Are you sure?") && (w(),
                v(),
                (0,
                i.Ht)(p.ext_size),
                (0,
                i.WY)(p.ext_position),
                (0,
                i.Ef)(p.site_position),
                (0,
                o.VP)("settings", p))
            }
            function M() {
                const e = document.querySelector('#chSettings input[name="ch_settings_emojis"]').value.match(/[^\u0000-\u007F]+/g);
                p.emojis = e,
                (0,
                o.VP)("settings", p)
            }
            function L() {
                let e = document.querySelector('#chSettings select[name="ch_settings_ext_size"]').value;
                (0,
                i.Ht)(e),
                p.ext_size = e,
                (0,
                o.VP)("settings", p)
            }
            function k() {
                let e = document.querySelector('#chSettings select[name="ch_settings_ext_position"]').value;
                (0,
                i.WY)(e),
                p.ext_position = e,
                (0,
                o.VP)("settings", p)
            }
            function B() {
                let e = document.querySelector('#chSettings select[name="ch_settings_site_position"]').value;
                (0,
                i.Ef)(e),
                p.site_position = e,
                (0,
                o.VP)("settings", p)
            }
            async function T() {
                let e = (0,
                o.UL)("greetingMessageForm");
                try {
                    const t = await (0,
                    l.D)({
                        module: "setting",
                        action: "save_greeting"
                    }, e);
                    (0,
                    o.rF)({
                        greeting: t.data.greeting
                    }),
                    (0,
                    c.t5)(),
                    (0,
                    i.Mr)("chGreetingMessage"),
                    (0,
                    o.uK)(),
                    u.Z.emit("greetingStatus", {
                        greeting: t.data.greeting
                    })
                } catch (e) {
                    (0,
                    c.cB)(e)
                }
            }
        }
        ,
        70: (e,t,s)=>{
            s.d(t, {
                N: ()=>M,
                V: ()=>y
            });
            var a = s(776)
              , n = s(808)
              , i = s(783)
              , o = s(878)
              , r = s(60)
              , c = s(76)
              , l = s(983)
              , d = s(686)
              , u = s(329);
            const m = "https://chathelper.ai/uploads/of_avatars/noavatar.jpg"
              , h = "ch_todos";
            let p = {}
              , g = !0
              , f = {}
              , _ = {};
            const y = async(e=null)=>{
                (0,
                a.K2)() && (0,
                n.C2)() ? (g && (g = 0,
                (0,
                o.Nj)(h, "todos.html"),
                E(),
                function() {
                    let e = (0,
                    n.Gw)();
                    f = e.messages
                }()),
                v(e ?? {
                    status: 1
                }),
                0 < Date.now() - 3e5 && (x(),
                b("default")),
                (0,
                o.Ok)(h),
                (0,
                n.UH)()) : (0,
                i.cB)("Error! Need activate")
            }
            ;
            function b(e="default") {
                let t = document.querySelector(`.todo-status-${e}`)
                  , s = document.querySelector("#todoDropdown");
                if (t) {
                    let e = t.querySelector("span").getAttribute("data-locale-key").toLowerCase();
                    s.setAttribute("data-locale-key", e);
                    let a = (0,
                    n.$t)(e);
                    (0,
                    o.Yh)("todoDropdown", `${a}`, !1)
                }
                (0,
                o.hp)("iconUp", "iconDown", !1)
            }
            function v(e=null, t=!1) {
                p = p || {},
                p = t ? {} : {
                    status: 1,
                    sort: "ASC",
                    ...p,
                    ...e
                }
            }
            function E() {
                const e = document.getElementById("chNewTodo")
                  , t = document.getElementById("chTodosUpdate")
                  , s = document.getElementById("chCreateTodoButton");
                e?.addEventListener("click", M),
                t?.addEventListener("click", k),
                s?.addEventListener("click", B)
            }
            async function w() {
                let e = this.getAttribute("data-id")
                  , t = (0,
                n.$t)("edit_todo");
                await (0,
                r.Sv)("todo", "form", !0);
                let s = await (0,
                c.D)({
                    module: "todo",
                    action: "edit"
                }, {
                    id: e
                });
                (0,
                o.yG)('[data-locale-key="new_todo"]', t),
                (0,
                o.yG)(".modal-form", s.data.form),
                flatpickr("#chDatepicker", {}),
                S(),
                L(s.data.todo),
                E()
            }
            function S() {
                _ = new TomSelect("#fan",{
                    valueField: "id",
                    labelField: "name",
                    searchField: "name",
                    plugins: ["clear_button"],
                    persist: !1,
                    maxItems: 1,
                    load: async function(e, t) {
                        try {
                            t((await (0,
                            d.W)(`/api2/v2/subscriptions/subscribers?limit=10&offset=0&format=infinite&type=all&query=${encodeURIComponent(e)}&more=falses`, "GET", null)).list.map((e=>({
                                id: e.id,
                                value: e.id,
                                name: e.name,
                                avatar: e.avatar ?? m,
                                username: e.username
                            }))))
                        } catch (e) {
                            console.error("Error fetching data:", e),
                            t()
                        }
                    },
                    render: {
                        option: function(e, t) {
                            return `<div class="py-2 d-flex">\n\t\t\t\t\t<div class="icon me-3">\n\t\t\t\t\t\t<img src="${e.avatar}" class="rounded-circle shadow-4" style="width: 30px;height:30px" alt="Avatar" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class="mb-1">\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t${t(e.name)}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class="text-muted">@${t(e.username)}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>`
                        },
                        item: function(e, t) {
                            return `<div class="d-flex">\n\t\t\t\t\t<div class="icon me-3">\n\t\t\t\t\t\t<img src="${e.avatar}" class="rounded-circle shadow-4" style="width: 30px;height:30px" alt="Avatar" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="align-self-end">\n\t\t\t\t\t\t<div class="mb-1">\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t${t(e.name)}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class="text-muted">@${t(e.username)}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>`
                        }
                    }
                })
            }
            const M = async(e={})=>{
                try {
                    let t = await (0,
                    u.JW)();
                    e.fan = t ?? {},
                    await (0,
                    r.Sv)("todo", "form", !0);
                    let s = await (0,
                    c.D)({
                        module: "todo",
                        action: "create"
                    }, e);
                    (0,
                    o.yG)(".modal-form", s.data.form),
                    flatpickr("#chDatepicker", {}),
                    E(),
                    S(),
                    (0,
                    n.DW)(".clear-button").exists() && (0,
                    o.yG)(".clear-button", '<i class="fa fa-times"></i>'),
                    L(e)
                } catch (e) {
                    console.log(e)
                }
            }
            ;
            function L(e) {
                e.fan && (e.fan.avatar = e.fan.avatar ?? m,
                _.addOption(e.fan),
                _.setValue(e.fan.id))
            }
            async function k() {
                v(null, !0),
                v({
                    sort: "ASC",
                    status: 1
                }),
                b("default"),
                await x()
            }
            async function B() {
                let e = document.querySelector('#chTodoForm input[name="id"]')
                  , t = (0,
                n.UL)("chTodoForm");
                if (_.getValue()) {
                    let e = _.options[_.getValue()];
                    t.of_user_id = e.id,
                    t.fan = {},
                    t.fan.id = e.id,
                    t.fan.name = e.name,
                    t.fan.username = e.username,
                    t.fan.avatar = e.avatar
                } else
                    t.fan = null,
                    t.of_user_id = null;
                try {
                    e?.value ? await async function(e, t) {
                        t.id = e,
                        await (0,
                        c.D)({
                            module: "todo",
                            action: "update"
                        }, t),
                        (0,
                        o.V_)(".ch-inline-alert");
                        let s = (0,
                        n.$t)("task_is_updated");
                        (0,
                        o.Yh)('[data-locale-key="task_is_created"]', s),
                        T()
                    }(e.value, t) : await async function(e) {
                        await (0,
                        c.D)({
                            module: "todo",
                            action: "store"
                        }, e),
                        (0,
                        o.V_)(".ch-inline-alert");
                        let t = (0,
                        n.$t)("task_is_created");
                        (0,
                        o.Yh)('[data-locale-key="task_is_created"]', t),
                        T()
                    }(t),
                    await x(),
                    (0,
                    r.GA)("chTodoModal"),
                    l.Z.emit("updateTodos", {
                        byFan: !0
                    })
                } catch (e) {
                    (0,
                    i.cB)(e.message)
                }
            }
            function T() {
                setTimeout((()=>{
                    (0,
                    o.e6)(".ch-inline-alert")
                }
                ), 2e3)
            }
            async function x() {
                let e = await (0,
                c.D)({
                    module: "todo",
                    action: "index"
                }, p);
                (0,
                n.DW)("#chTodoTable").exists() && (0,
                o.yG)("chTodoTable", e.data.todos, !1),
                function() {
                    document.querySelectorAll(".edit-todo")?.forEach((e=>{
                        e.addEventListener("click", w)
                    }
                    )),
                    document.querySelectorAll(".destroy-todo")?.forEach((e=>{
                        e.addEventListener("click", O)
                    }
                    )),
                    document.querySelectorAll(".todo-done")?.forEach((e=>{
                        e.addEventListener("click", A)
                    }
                    )),
                    document.querySelectorAll(".fan-link")?.forEach((e=>{
                        e.addEventListener("click", H)
                    }
                    )),
                    document.querySelectorAll(".todo-status")?.forEach((e=>{
                        e.addEventListener("click", I)
                    }
                    )),
                    document.querySelector("#todo #sorting")?.addEventListener("click", q);
                    const e = document.getElementById("chTodoTable")?.querySelectorAll(".open-chat");
                    e?.forEach((e=>{
                        e.removeEventListener("click", (()=>{}
                        )),
                        e.addEventListener("click", (t=>(t.preventDefault(),
                        async function(e) {
                            chrome.runtime.sendMessage({
                                method: "change_route",
                                args: [e]
                            })
                        }(e.dataset.user_id),
                        !1)))
                    }
                    ))
                }()
            }
            async function q() {
                let e = document.getElementById("iconUp")
                  , t = document.getElementById("iconDown");
                e.classList.toggle("d-none"),
                t.classList.toggle("d-none"),
                v({
                    sort: e.classList.contains("d-none") ? "ASC" : "DESC"
                }),
                await x()
            }
            async function H() {
                v({
                    fan_id: this.getAttribute("data-fan-id")
                }),
                await x()
            }
            async function I() {
                v({
                    status: this.getAttribute("data-value")
                }),
                (0,
                o.Yh)("todoDropdown", this.innerText, !1),
                await x()
            }
            async function O() {
                if (!confirm("Are you sure?"))
                    return;
                let e = this.getAttribute("data-id");
                await (0,
                c.D)({
                    module: "todo",
                    action: "destroy"
                }, {
                    id: e
                }),
                await x()
            }
            async function A() {
                let e = this.getAttribute("data-id");
                await (0,
                c.D)({
                    module: "todo",
                    action: "toggle"
                }, {
                    id: e,
                    done: Number(this.checked)
                }),
                await x()
            }
        }
        ,
        783: (e,t,s)=>{
            s.d(t, {
                cB: ()=>i,
                t5: ()=>n,
                uS: ()=>o
            });
            var a = s(808);
            const n = (e="")=>{
                Swal.fire({
                    title: "Success!",
                    icon: "success",
                    html: e || "",
                    confirmButtonText: "Ok"
                })
            }
              , i = (e="",t="error")=>{
                Swal.fire({
                    title: "Error!",
                    icon: t,
                    html: e || "",
                    confirmButtonText: "Ok"
                })
            }
              , o = (e="")=>new Promise(((e,t)=>{
                Swal.fire({
                    title: (0,
                    a.$t)("delete_confirmation"),
                    showCancelButton: !0,
                    cancelButtonColor: "#3085d6",
                    confirmButtonColor: "#d33",
                    confirmButtonText: (0,
                    a.$t)("agree_to_delete"),
                    cancelButtonText: (0,
                    a.$t)("no")
                }).then((t=>{
                    t.isConfirmed ? e() : t.isDenied && Swal.fire("Changes are not saved", "", "info")
                }
                ))
            }
            ))
        }
        ,
        878: (e,t,s)=>{
            s.d(t, {
                $_: ()=>H,
                AH: ()=>n,
                BB: ()=>S,
                C2: ()=>x,
                CB: ()=>v,
                Ef: ()=>k,
                HT: ()=>y,
                Ht: ()=>B,
                JI: ()=>r,
                Mr: ()=>T,
                Nj: ()=>o,
                Ok: ()=>h,
                V5: ()=>g,
                V_: ()=>p,
                WR: ()=>c,
                WY: ()=>L,
                W_: ()=>l,
                Xf: ()=>m,
                Xh: ()=>u,
                Yh: ()=>_,
                Yq: ()=>d,
                e6: ()=>b,
                f: ()=>I,
                f7: ()=>E,
                hb: ()=>w,
                hp: ()=>M,
                iJ: ()=>O,
                lr: ()=>A,
                xb: ()=>q,
                yG: ()=>f,
                zr: ()=>i
            });
            var a = s(808);
            const n = e=>{
                var t = new XMLHttpRequest;
                return t.open("GET", chrome.runtime.getURL(e), !1),
                t.send(),
                t.responseText
            }
              , i = e=>{
                const t = "../../" + e
                  , s = new XMLHttpRequest;
                return s.open("GET", chrome.runtime.getURL(t), !1),
                s.send(),
                JSON.parse(s.responseText)
            }
              , o = (e,t)=>{
                document.getElementById(e).innerHTML = n("../../assets/html/app/tabs/" + t)
            }
              , r = e=>n(`${e}.html`)
              , c = (e=null)=>{
                let t;
                document.querySelectorAll(".tooltip.fade.show.bs-tooltip-end").forEach((e=>e.remove())),
                [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).forEach((s=>{
                    t = null === e ? s.parentNode.parentNode : document.querySelector(e),
                    bootstrap.Tooltip.getOrCreateInstance(s, {
                        container: t
                    })
                }
                ))
            }
              , l = ()=>{
                document.querySelectorAll('[data-bs-toggle="popover"]').forEach((function(e) {
                    e.addEventListener("shown.bs.popover", (function() {
                        (0,
                        a.UH)()
                    }
                    ))
                }
                ))
            }
              , d = ()=>{
                let e = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
                  , t = document.querySelector(".chathelper_panel");
                e.forEach((e=>{
                    bootstrap.Popover.getOrCreateInstance(e, {
                        container: t,
                        html: !0,
                        sanitize: !1
                    }).hide()
                }
                ))
            }
              , u = (e,t)=>{
                document.querySelector(`#${e}`) && (1 === t ? (document.getElementById(e).innerHTML = ' <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>  <span class="button-text">' + document.getElementById(e).innerHTML + "</span>",
                document.getElementById(e).setAttribute("disabled", !0)) : (document.getElementById(e).innerHTML = document.getElementById(e).getElementsByClassName("button-text")[0].innerHTML,
                document.getElementById(e).removeAttribute("disabled")))
            }
              , m = (e,t,s)=>{
                document.querySelector(`#${e}`) && (1 === s ? (document.getElementById(e).innerHTML = `\n\t\t\t<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>  \n\t\t\t<span class="button-text">${t}</span>\n\t\t`,
                document.getElementById(e).setAttribute("disabled", !0)) : (document.getElementById(e).innerHTML = t,
                document.getElementById(e).removeAttribute("disabled")))
            }
              , h = e=>{
                document.getElementById("chatHelperPanel").querySelectorAll(".ch-content").forEach((t=>{
                    t.id !== e && (t.classList.add("d-none"),
                    t.classList.remove("show"))
                }
                )),
                document.getElementById(e).classList.remove("d-none"),
                document.getElementById(e).classList.add("show"),
                setTimeout((()=>{
                    c("#bs-5")
                }
                ), 2e3),
                d(),
                (0,
                a.UH)()
            }
              , p = (e,t=!0)=>{
                t ? document.querySelector(e)?.classList.remove("d-none") : document.getElementById(e)?.classList.remove("d-none")
            }
              , g = e=>{
                document.querySelectorAll(e).forEach((e=>e.classList.remove("d-none")))
            }
              , f = (e,t,s=!0)=>{
                s ? document.querySelector(e).innerHTML = t : document.getElementById(e).innerHTML = t
            }
              , _ = (e,t,s=!0)=>{
                let a;
                s ? (a = document.querySelector(e),
                a && (a.innerText = t)) : (a = document.getElementById(e),
                a && (a.innerHTML = t))
            }
              , y = (e,t)=>{
                document.querySelectorAll(e)?.forEach((e=>{
                    e.innerHTML = t
                }
                ))
            }
              , b = (e,t=!0)=>{
                t ? document.querySelector(e)?.classList.add("d-none") : document.getElementById(e)?.classList.add("d-none")
            }
              , v = e=>e.replace(/<a([^>]*)href=/gi, "<a$1target='_blank' href=")
              , E = (e,t)=>{
                for (let s = 0; s < t.length; s++) {
                    let a = document.createElement("option");
                    a.text = t[s].name,
                    a.value = t[s].value,
                    void 0 !== t[s].disabled && !0 === t[s].disabled && (a.disabled = !0),
                    void 0 !== t[s].selected && !0 === t[s].selected && (a.selected = !0),
                    e.add(a)
                }
            }
              , w = e=>{
                let t = Math.floor(e / 3600)
                  , s = Math.floor(e % 3600 / 60)
                  , n = e % 60
                  , i = "";
                return t > 0 && (i += `${t}${(0,
                a.$t)("h")}) `),
                s > 0 && (i += `${s}${(0,
                a.$t)("m")} `),
                (n > 0 || !i) && (i += `${n}${(0,
                a.$t)("s")}`),
                i
            }
              , S = e=>{
                document.querySelectorAll(e).forEach((e=>e.classList.add("d-none")))
            }
              , M = (e,t,s=!0)=>{
                s ? (b(e),
                p(t)) : (b(e, !1),
                p(t, !1))
            }
              , L = e=>{
                let t;
                switch (document.querySelectorAll(".chathelper_logo, .chathelper_panel").forEach((e=>{
                    e.classList.remove("position-top-right", "position-top-left", "position-bottom-right", "position-bottom-left")
                }
                )),
                e) {
                case "top_right":
                    t = "position-top-right";
                    break;
                case "top_left":
                    t = "position-top-left";
                    break;
                case "bottom_right":
                    t = "position-bottom-right";
                    break;
                case "bottom_left":
                    t = "position-bottom-left"
                }
                document.querySelectorAll(".chathelper_logo, .chathelper_panel").forEach((e=>{
                    e.classList.add(t)
                }
                ))
            }
              , k = e=>{
                switch (document.querySelector(".container").classList.remove("container-left", "container-right"),
                e) {
                case "left":
                    document.querySelector(".container").classList.add("container-left");
                    break;
                case "right":
                    document.querySelector(".container").classList.add("container-right")
                }
            }
              , B = e=>{
                switch (document.querySelector(".chathelper_panel").classList.remove("size-small", "size-medium", "size-large"),
                e) {
                case "medium":
                    document.querySelector(".chathelper_panel").classList.add("size-medium");
                    break;
                case "large":
                    document.querySelector(".chathelper_panel").classList.add("size-large");
                    break;
                default:
                    document.querySelector(".chathelper_panel").classList.add("size-small")
                }
            }
              , T = e=>{
                let t = document.getElementById(e);
                t.classList.remove("show"),
                t.style.display = "none";
                const s = document.querySelector(".modal-backdrop");
                s && s.remove(),
                document.body.style.overflow = "",
                new bootstrap.Modal(document.getElementById(e),{}).dispose()
            }
              , x = (e,t)=>{
                const s = {
                    plugins: [ChartDataLabels],
                    type: "line",
                    data: {
                        datasets: [{
                            label: "Price",
                            data: t,
                            borderColor: "rgb(0,0,0)",
                            fill: !1,
                            pointBackgroundColor: function(e) {
                                try {
                                    return e.raw.isOpened ? "#35a1eb" : "red"
                                } catch (e) {
                                    return "#35a1eb"
                                }
                            }
                        }]
                    },
                    options: {
                        animation: {
                            duration: 0
                        },
                        hover: {
                            animationDuration: 0
                        },
                        responsiveAnimationDuration: 0,
                        title: {
                            display: !1
                        },
                        scales: {
                            y: {
                                ticks: {
                                    display: !1
                                }
                            }
                        },
                        layout: {
                            padding: {
                                top: 40,
                                left: 20,
                                right: 20
                            }
                        },
                        plugins: {
                            tooltip: {
                                backgroundColor: "white",
                                bodyColor: "black",
                                borderColor: "black",
                                borderWidth: 1,
                                callbacks: {
                                    title: function(e) {
                                        return e[0].dataset.data[e[0].dataIndex].title
                                    },
                                    label: function(e) {
                                        try {
                                            return e.dataset.data[e.dataIndex].message.replace(/(<([^>]+)>)/gi, "").match(/.{1,25}/g).slice(0, 4)
                                        } catch (e) {
                                            return ""
                                        }
                                    }
                                },
                                displayColors: !1,
                                titleColor: "black",
                                xAlign: "center",
                                yAlign: "top"
                            },
                            datalabels: {
                                offset: 8,
                                anchor: "end",
                                color: "#000",
                                backgroundColor: "#fff",
                                borderColor: "#000",
                                borderWidth: 1,
                                borderRadius: 5,
                                align: "top",
                                padding: 3,
                                font: {
                                    weight: "bold"
                                },
                                formatter: function(e, t) {
                                    return "$" + (0,
                                    a.eH)(e.y)
                                }
                            },
                            legend: {
                                display: !1,
                                labels: {
                                    usePointStyle: !0
                                }
                            }
                        }
                    }
                };
                let n = Chart.getChart(e);
                void 0 !== n && n.destroy();
                new Chart(document.getElementById(e),s)
            }
              , q = e=>"" === e || null == e
              , H = e=>{
                const t = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#039;"
                };
                return e.replace(/[&<>"']/g, (function(e) {
                    return t[e]
                }
                ))
            }
            ;
            function I() {
                const e = document.querySelectorAll("[data-loading-value]");
                e?.forEach((e=>{
                    e.classList.add("ch-skeleton-row"),
                    e.getAttribute("data-main-color") && e.classList.remove(e.getAttribute("data-main-color"))
                }
                ))
            }
            async function O() {
                const e = document.querySelectorAll("[data-loading-value]");
                await (0,
                a.hE)(2e3),
                e?.forEach((e=>{
                    e.classList.remove("ch-skeleton-row"),
                    e.getAttribute("data-main-color") && e.classList.add(e.getAttribute("data-main-color"))
                }
                ))
            }
            const A = e=>{
                const t = document.createElement("div");
                return t.innerHTML = e,
                t.textContent
            }
        }
    }
      , __webpack_module_cache__ = {};
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t)
            return t.exports;
        var s = __webpack_module_cache__[e] = {
            exports: {}
        };
        return __webpack_modules__[e](s, s.exports, __webpack_require__),
        s.exports
    }
    __webpack_require__.d = (e,t)=>{
        for (var s in t)
            __webpack_require__.o(t, s) && !__webpack_require__.o(e, s) && Object.defineProperty(e, s, {
                enumerable: !0,
                get: t[s]
            })
    }
    ,
    __webpack_require__.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t);
    var __webpack_exports__ = {};
    (()=>{
        var e = __webpack_require__(928)
          , t = __webpack_require__(808)
          , s = __webpack_require__(776)
          , a = __webpack_require__(199)
          , n = __webpack_require__(268)
          , i = __webpack_require__(329)
          , o = __webpack_require__(686)
          , r = __webpack_require__(60)
          , c = __webpack_require__(783)
          , l = __webpack_require__(878)
          , d = __webpack_require__(76);
        const u = ()=>{
            (0,
            r.Sv)("chat", "special_lists").then((e=>{
                m(),
                function(e) {
                    const t = e.querySelectorAll(".form-check-input-special-lists");
                    t.forEach((function(t) {
                        t.addEventListener("click", (async function() {
                            let s = {
                                list_id: t.value,
                                is_active: t.checked
                            };
                            const a = e.querySelector(".refresh-section");
                            try {
                                await (0,
                                d.D)({
                                    module: "dialogs",
                                    action: "lists"
                                }, s);
                                let e = new CustomEvent("addToLists",{
                                    cancelable: !0,
                                    detail: s
                                });
                                document.dispatchEvent(e),
                                a.classList.remove("d-none")
                            } catch (e) {
                                a.classList.add("d-none")
                            }
                        }
                        ))
                    }
                    ))
                }(e),
                function(e) {
                    const s = e.querySelector(".refresh-section");
                    s.addEventListener("click", (()=>{
                        window.location.reload()
                    }
                    ));
                    const a = e.querySelector(".clear-my-labels");
                    let n = (0,
                    t.Gw)();
                    if (!n.operator_id || 0 === Number(n.operator_id))
                        return;
                    const i = {
                        operator_id: n.operator_id
                    };
                    a.addEventListener("click", (()=>{
                        s.classList.remove("d-none"),
                        (0,
                        d.D)({
                            module: "dialogs",
                            action: "clear_operator_labels"
                        }, i).catch((function() {}
                        ))
                    }
                    ))
                }(e)
            }
            )).catch((e=>{
                console.error(e)
            }
            ))
        }
          , m = ()=>{
            (0,
            t.DW)("#special-list-modal-body").empty();
            const e = U()
              , s = e.lists
              , a = e.ofAccountDialogLists;
            let n = "";
            s.forEach((e=>{
                let t = e.id in a && !0 === a[e.id];
                n += `\n\t\t<div class="form-group mb-3">\n\t\t\t<div class="form-check form-switch">\n\t\t\t\t<input class="form-check-input form-check-input-special-lists" ${t ? "checked" : ""} type="checkbox" role="switch" id="special-list-${e.id}" value="${e.id}">\n\t\t\t\t<label class="form-check-label" for="special-list-${e.id}">${e.name}</label>\n\t\t\t</div>\n\t\t</div>`
            }
            )),
            (0,
            t.DW)("#special-list-modal-body") && (0,
            l.yG)("special-list-modal-body", n, !1)
        }
        ;
        const h = chrome.runtime.getURL("assets/img/chatGPT.png")
          , p = chrome.runtime.getURL("assets/img/loading.gif")
          , g = (e,t,s=null,a=!0)=>`<div class="p-0" style="height: 19px" id="${e}-color-btn">\n           ${a ? f(e, t, s) : _(e, t)}\n    </div>`
          , f = (e,t,s)=>` <button\n            type="button"\n            class="btn btn-secondary dropdown-toggle p-0 operator-color-btn"\n            style="padding: 0"\n        >\n            <span\n                data-bs-toggle="tooltip"\n                class="ch-dialog-row-color"\n                id="${e}-dialog-bg-color"\n                title="Operator: ${s ?? "empty name"}"\n                style="background-color:${t}"\n                data-bs-placement="left"\n            ></span>\n        </button>\n    `
          , _ = (e,t)=>` <button\n            type="button"\n            style="padding: 0"\n            class="btn btn-secondary dropdown-toggle p-0 set-operator-color operator-color-btn"\n            data-user-id="${e}"\n            id="${e}-color"\n        >\n            <span\n                data-bs-toggle="tooltip"\n                class="ch-dialog-row-color"\n                id="${e}-dialog-bg-color"\n                style="background-color:${t}"\n            ></span>\n        </button>\n    `;
        let y = (0,
        t.Gw)()
          , b = {}
          , v = []
          , E = !1
          , w = {}
          , S = []
          , M = {}
          , L = []
          , k = []
          , B = []
          , T = !1;
        function x(e) {
            e?.detail?.clear ? M = [] : M[e.detail.list_id] = e.detail.is_active
        }
        async function q(e=!1) {
            const t = await async function() {
                const e = await (0,
                d.D)({
                    module: "chat",
                    action: "models"
                });
                return L = e.data.models,
                e.data
            }();
            let s = "";
            for (const e in t.models)
                s += `\n            <button type="button" class="aiVariants ch-white-space-nowrap" data-id="${t.models[e].id}" data-prompt="${t.models[e].prompt}" data-type="${t.models[e].type}">\n                <span class="pointer-events-none drop-down-button-span">\n                \t<span class="icon-wrapper">\n                \t\t<i class="${t.models[e].icon}"></i>\n\t\t\t\t\t</span>\n                \t<span class="icon-text">\n\t\t\t\t\t\t${t.models[e].type}\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n            </button>\n                `;
            document.querySelectorAll(".aiVariants").forEach((e=>{
                e.remove()
            }
            )),
            document.getElementById("chatgpt-dropdown").insertAdjacentHTML("afterbegin", s),
            e && (0,
            c.t5)(),
            A()
        }
        document.addEventListener("addToLists", x);
        const H = async()=>{
            let e;
            if (void 0 !== y.settings && void 0 !== y.settings.emojis) {
                if (null === y.settings.emojis || "" === y.settings.emojis || 0 === y.settings.emojis.length)
                    return;
                s = y.settings.emojis,
                e = [...(new Intl.Segmenter).segment(s)].map((e=>e.segment))
            } else
                e = ["🥰", "🍆", "💦", "😍", "❤️", "🤤", "🔥", "😈", "😘", "💗", "🙈", "🔞", "😽", "😹", "😅", "😪", "😭", "💞", "🥺", "🤐", "🥵", "😏", "💕", "🤝", "😱", "😉", "🤬", "👅", "💋", "😻", "😼", "🔥", "💥", "✨", "💫", "🍑", "🍒", "🍌", "🍓"];
            var s;
            if (0 === e.length)
                return;
            let a = '<div id="ch-emoji-bar"><div class="ch-emoji-bar-wrapper">';
            e.forEach((e=>{
                a += '<button class="ch-emoji-bar-button" type="button">' + e + "</button>"
            }
            )),
            a += "</div></div>";
            if (!document.querySelector(".m-chats-footer"))
                return;
            if (document.querySelector("#ch-emoji-bar"))
                return;
            document.querySelector(".m-chats-footer").insertAdjacentHTML("beforeend", a);
            document.querySelector(".m-chats-footer").querySelectorAll(".ch-emoji-bar-button").forEach((e=>{
                e.addEventListener("click", (s=>{
                    (0,
                    t.vf)(e.innerText, !1, !1, "new_post_text_input")
                }
                ))
            }
            ))
        }
          , I = async()=>{
            let e = [];
            document.querySelectorAll(".swipeout-list .b-chats__item").forEach((t=>{
                "load"in t.dataset || "marked"in t.dataset || (e.push(t.getAttribute("id")),
                t.dataset.load = "")
            }
            )),
            e.length > 0 && async function(e) {
                let s = await (0,
                d.D)({
                    module: "dialogs",
                    action: "index"
                });
                M = s.data.dialog_lists,
                P(s.data.dialog_colors);
                const n = e.map((e=>`x[]=${e}`)).join("&");
                let i = await (0,
                o.W)("/api2/v2/users/list?" + n, "GET", null);
                await async function() {
                    S = await (0,
                    o.W)("/api2/v2/lists?offset=0&limit=100", "GET", null)
                }(),
                Object.keys(i).forEach((e=>{
                    b[e] = i[e],
                    async function(e) {
                        if (void 0 === b[e])
                            return;
                        let s = document.getElementById(e);
                        const n = (0,
                        t.Gw)();
                        if (null === s)
                            return;
                        if ("marked"in s.dataset)
                            return;
                        s.dataset.marked = "";
                        let i = ""
                          , o = ""
                          , r = ""
                          , c = ""
                          , u = ""
                          , h = "";
                        if (null !== b[e].subscribedOnData && (void 0 !== b[e].subscribedOnData && void 0 !== b[e].subscribedOnData.totalSumm && (i = b[e].subscribedOnData.totalSumm > 1e3 ? '<div class="ch-label-spending purple">$' + (0,
                        t.eH)(b[e].subscribedOnData.totalSumm) + "</div>" : b[e].subscribedOnData.totalSumm > 100 ? '<div class="ch-label-spending blue">$' + (0,
                        t.eH)(b[e].subscribedOnData.totalSumm) + "</div>" : b[e].subscribedOnData.totalSumm > 0 ? '<div class="ch-label-spending green">$' + (0,
                        t.eH)(b[e].subscribedOnData.totalSumm) + "</div>" : '<div class="ch-label-spending">$' + (0,
                        t.eH)(b[e].subscribedOnData.totalSumm) + "</div>"),
                        void 0 !== b[e].subscribedOnData.subscribes[0] && null === b[e].subscribedOnData.renewedAt && b[e].subscribedOnData.price > 0 && (c = '<div class="ch-label-status" style="background:rgb(238, 193, 66); border:1px solid rgb(238, 193, 66);">&nbsp;</div>'),
                        void 0 !== typeof b[e].subscribedOnData.subscribeAt && void 0 !== typeof b[e].subscribedOnData.expiredAt)) {
                            let s = Date.now()
                              , a = Date.parse(b[e].subscribedOnData.subscribeAt);
                            Date.parse(b[e].subscribedOnData.expiredAt) < s && (c = '<div class="ch-label-status" style="background: rgb(236, 64, 122); border: 1px solid rgb(236, 64, 122);">&nbsp;</div>'),
                            a > s - 6048e5 && (o = '<div class="ch-label-new">NEW</div>'),
                            r = '<div class="ch-label-duration">' + (0,
                            t.Kv)(a) + "</div>"
                        }
                        let p = b[e]
                          , y = p?.listsStates || [];
                        y = y.filter((e=>e.hasUser)),
                        y.length && (h = function(e) {
                            let t = "";
                            return e.forEach((e=>{
                                e.id in M && !0 === M[e.id] && (t += ` \n \t\t\t\t<div class="ch-label-spending ch-label-groups">\n\t\t\t\t\t${e.name}\n\t\t\t\t</div>\n\t\t\t`)
                            }
                            )),
                            t
                        }(y));
                        let E = e in v
                          , w = E ? v[e].color : "#8590A2";
                        u = E && v[e].of_operator_id !== Number(n.operator_id) ? g(e, w, v[e].operator_name, !0) : g(e, w, null, !1),
                        s.querySelector(".b-chats__item__link").insertAdjacentHTML("beforeend", `\n\t\t\t<div class="ch-chat-tags">\n\t\t\t\t${i}${o}${c}${r}${h}${u}\n\t\t\t</div>\n\t\t\t`);
                        let S = document.querySelector(`.dropright-${e}`);
                        S && S.addEventListener("click", (function(e) {
                            const t = this.querySelector(".dropdown-menu");
                            var s;
                            s = t,
                            document.querySelectorAll(".dropdown-menu").forEach((e=>{
                                s !== e && e.classList.remove("show")
                            }
                            )),
                            t.classList.toggle("show")
                        }
                        ));
                        (function(e) {
                            let t = (0,
                            a.z)();
                            k.push(`marker-${t}-${e}-change`),
                            B.push(`labels-${t}-clear`)
                        }
                        )(e),
                        T || function() {
                            T = !0;
                            const e = new WebSocket("wss://ws.chathelper.ai:2053");
                            e.addEventListener("message", (e=>{
                                if ((0,
                                t.sO)(e.data)) {
                                    let s = JSON.parse(e.data);
                                    if (k.includes(s.channel)) {
                                        let e = document.getElementById(`${s.body.of_user_id}-color-btn`);
                                        if (!e)
                                            return;
                                        let a = (0,
                                        t.Gw)();
                                        if (Number(a.operator_id) === s.body.of_operator_id)
                                            return;
                                        e.innerHTML = s.body?.operator_name ? f(s.body.of_user_id, s.body.color, s.body.operator_name) : _(s.body.of_user_id, s.body.color),
                                        F(),
                                        (0,
                                        l.WR)(),
                                        async function() {
                                            P((await (0,
                                            d.D)({
                                                module: "dialogs",
                                                action: "index"
                                            })).data.dialog_colors)
                                        }()
                                    }
                                    B.includes(s.channel) && (x({
                                        detail: {
                                            clear: !0
                                        }
                                    }),
                                    m())
                                }
                            }
                            )),
                            e.addEventListener("open", (t=>{
                                e.send((0,
                                a.z)()),
                                console.log("Socket is running...!")
                            }
                            ));
                            setInterval((()=>{
                                e.readyState === e.OPEN && e.send(JSON.stringify({
                                    type: "ping"
                                }))
                            }
                            ), 6e4)
                        }();
                        (0,
                        l.WR)(),
                        F()
                    }(e)
                }
                ))
            }(e)
        }
        ;
        async function O() {
            if (document.querySelector("#chatGPTBtn"))
                return;
            const e = document.querySelector(".b-make-post__actions__btns")
              , s = `\n        <div class="dropdown">\n            <button\n            \tclass="dropbtn g-btn m-flat m-gray m-with-round-hover m-size-md-hover m-default-icon-size m-reset-width has-tooltip size-lg-hover m-width-fluid-hover" \n            \tid="chatGPTBtn"\n            \ttype="button"\n            >\n            <span style="pointer-events: none">\n                <img\n                \tdata-not-make-blur\n                    alt="${h}"\n                    src="${h}" \n                    width="18" \n                    class="rounded"\n                /> \n                    <span id="aiName">ChatGPT</span>\n                    <img\n                    \tdata-not-make-blur\n                        style="display:none"\n                        id="loadingGif"\n                        alt="${p}"\n                        width="35px"\n                        src="${p}" \n                        class="rounded" \n                    />\n                 </span>\n            </button>\n            <div id="chatgpt-dropdown" class="ch-dropdown-content">\n\t\t\t\t<div style="width:95%;background-color: #dfdddd;height:1px;margin: 0 auto;"></div>\n\t\t\t\t<button type="button" id="getOpenaiSettingsModal">\n\t\t\t\t\t<span class="pointer-events-none">\n\t\t\t\t\t\t<span class="icon-wrapper">\n\t\t\t\t\t\t\t<i class="fa fa-pencil"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class="icon-text" data-locale-key="settings">\n\t\t\t\t\t\t\tSettings\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</span>\n\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>`;
            e.insertAdjacentHTML("afterend", s),
            await q(),
            document.getElementById("chatGPTBtn").addEventListener("click", (function() {
                (0,
                t.$p)(),
                document.getElementById("chatgpt-dropdown").classList.toggle("show")
            }
            )),
            document.getElementById("getOpenaiSettingsModal").addEventListener("click", (function() {
                D(),
                w = {}
            }
            )),
            A()
        }
        function A() {
            (0,
            t.mU)("chatgpt-dropdown");
            document.querySelectorAll(".aiVariants").forEach((e=>{
                e.addEventListener("click", (async function(e) {
                    if (E)
                        return;
                    E = !0,
                    document.getElementById("chatGPTBtn").disabled = !0,
                    document.getElementById("chatgpt-dropdown").classList.toggle("show"),
                    document.querySelector("#aiName").style.display = "none",
                    document.querySelector("#loadingGif").style.display = "inline-block";
                    const s = e.target.dataset.type
                      , a = function(e) {
                        return Object.values(L).find((t=>t.id === Number(e)))
                    }(e.target.dataset.id)
                      , i = (0,
                    n.U2)("peer_id");
                    try {
                        let e = a ? a.previews_messages_count : 10
                          , n = [];
                        0 !== Number(e) && (n = await (0,
                        o.W)(`/api2/v2/chats/${i}/messages?limit=20&order=desc&skip_users=all`, "GET"));
                        const r = await (0,
                        d.D)({
                            module: "chat",
                            action: "advice"
                        }, {
                            type: s,
                            messages: n
                        });
                        if (!r.data.answer || !r.data.answer.length)
                            throw new Error("Empty answer from openai");
                        const c = "<button class='attach-button btn btn-primary btn btn-xs btn-light' id='regenerateAnswer'><i id='loadingIcon' class='fa-regular fa-rotate'></i></button>";
                        document.querySelector(".v-text-field__slot").insertAdjacentHTML("beforeend", c),
                        document.getElementById("regenerateAnswer").addEventListener("click", $),
                        (0,
                        t.vf)(r.data.answer, !1, !0, "new_post_text_input")
                    } catch (e) {
                        (0,
                        c.cB)(e.message)
                    } finally {
                        E = !1,
                        document.getElementById("chatGPTBtn").disabled = !1,
                        document.querySelector("#aiName").style.display = "inline-block",
                        document.querySelector("#loadingGif").style.display = "none"
                    }
                }
                ))
            }
            ))
        }
        async function $(e) {
            e.preventDefault();
            const s = document.getElementById("loadingIcon");
            s.classList.add("ext-animate");
            const a = await (0,
            d.D)({
                module: "chat",
                action: "regenerate"
            });
            if (s.classList.remove("ext-animate"),
            !a.data.answer || !a.data.answer.length)
                throw new Error("Empty answer from openai");
            (0,
            t.vf)(a.data.answer, !1, !0, "new_post_text_input")
        }
        const D = async()=>{
            const e = await (0,
            d.D)({
                module: "chat",
                action: "openai_settings"
            });
            await (0,
            r.jB)(e.data.modal);
            document.querySelector("#addNewOpenaiSettingBtn") && document.getElementById("addNewOpenaiSettingBtn").addEventListener("click", (async function() {
                const e = await (0,
                d.D)({
                    module: "chat",
                    action: "prompt_edit_form"
                });
                document.getElementById("openaiEditForm").innerHTML = e.data.form,
                N(),
                document.getElementsByClassName("iconBtns")[0].click(),
                document.getElementById("saveOpenaiSettings").addEventListener("click", (async e=>{
                    try {
                        let e = C();
                        await (0,
                        d.D)({
                            module: "chat",
                            action: "openai_settings_store"
                        }, e),
                        await D(),
                        await q(!0)
                    } catch (e) {
                        (0,
                        c.cB)(e.message, "info")
                    }
                }
                ))
            }
            ));
            document.querySelectorAll(".editOpenaiBtns").forEach((e=>{
                e.addEventListener("click", (async e=>{
                    const t = e.target.dataset.openaiId
                      , s = await (0,
                    d.D)({
                        module: "chat",
                        action: "prompt_edit_form"
                    }, {
                        id: t
                    });
                    document.getElementById("openaiEditForm").innerHTML = s.data.form;
                    let a = document.getElementById("openaiEditForm").querySelector(".active");
                    w.icon = a.getAttribute("data-icon"),
                    N(),
                    document.getElementById("updateExistingOpenaiSettings").addEventListener("click", (async function() {
                        try {
                            let e = C();
                            await (0,
                            d.D)({
                                module: "chat",
                                action: "openai_settings_update"
                            }, e),
                            await D(),
                            await q(!0)
                        } catch (e) {
                            (0,
                            c.cB)(e.message, "info")
                        }
                    }
                    ))
                }
                ))
            }
            ));
            document.querySelectorAll(".destroyOpenaiSettingBtns").forEach((e=>{
                e.addEventListener("click", (async e=>{
                    const t = e.target.dataset.openaiId;
                    try {
                        await (0,
                        c.uS)(),
                        await (0,
                        d.D)({
                            module: "chat",
                            action: "openai_destroy"
                        }, {
                            id: t
                        }),
                        await D(),
                        await q(!0)
                    } catch (e) {
                        (0,
                        c.cB)(e.message, "info")
                    }
                }
                ))
            }
            ))
        }
        ;
        function C() {
            return w.type = document.getElementById("openaiForm").querySelector('input[name="type"]').value,
            w.sort = document.getElementById("openaiForm").querySelector('input[name="sort"]').value,
            w.prompt = document.getElementById("openaiForm").querySelector('textarea[name="prompt"]').value,
            w.model_id = document.getElementById("openaiForm").querySelector('select[name="model_id"]').value,
            w.openai_id = document.getElementById("openaiForm").querySelector('input[name="openai_id"]').value,
            w.previews_messages_count = document.getElementById("openaiForm").querySelector('select[name="previews_messages_count"]').value,
            w
        }
        function N() {
            const e = document.getElementsByClassName("iconBtns");
            for (let t = 0; t < e.length; t++)
                e[t].addEventListener("click", (function(t) {
                    w.icon = t.target.dataset.icon;
                    for (let t = 0; t < e.length; t++)
                        e[t].classList.remove("active");
                    this.classList.add("active")
                }
                ))
        }
        function P(e) {
            e.forEach(((e,t)=>{
                v[e.of_user_id] = e
            }
            ))
        }
        function F() {
            document.querySelectorAll(".set-operator-color").forEach((e=>{
                e.addEventListener("click", (async function(e) {
                    e.preventDefault(),
                    e.stopImmediatePropagation();
                    let s = (0,
                    t.Gw)();
                    if (!s.operator_id || 0 === Number(s.operator_id))
                        return void (0,
                        c.cB)((0,
                        t.$t)("please_choose_the_operator"));
                    let a = {
                        of_user_id: this.getAttribute("data-user-id"),
                        operator_id: s.operator_id
                    };
                    const n = await async function(e) {
                        try {
                            return await (0,
                            d.D)({
                                module: "dialogs",
                                action: "store"
                            }, e)
                        } catch (e) {
                            (0,
                            c.cB)(e.message)
                        }
                    }(a);
                    if ("exists" === n.status) {
                        const e = n.data.dialog;
                        return document.getElementById(`${e.of_user_id}-color-btn`).innerHTML = f(e.of_user_id, e.color, e.operator_name),
                        (0,
                        l.WR)(),
                        void (0,
                        c.cB)(n.message)
                    }
                    document.getElementById(`${n.data.dialog.of_user_id}-dialog-bg-color`).style.backgroundColor = n.data.dialog.color
                }
                ))
            }
            ))
        }
        const U = ()=>({
            lists: S,
            ofAccountDialogLists: M
        });
        (0,
        t.iE)(),
        (0,
        t.Gw)();
        let j = {};
        function G() {
            document.querySelector(".templates")?.remove(),
            (0,
            t.vf)("", !1, !0, "new_post_text_input")
        }
        document.addEventListener("keyup", (function(e) {
            "Escape" === e.key && G()
        }
        ));
        function R() {
            let e = (0,
            t.Rc)("#chTemplateTags");
            return j.tags = e.length ? e.map((e=>e.toLowerCase())) : null,
            j.template_id = document.getElementById("templateModal").querySelector('input[name="template_id"]').value,
            j.title = document.getElementById("templateModal").querySelector('input[name="title"]').value,
            j.body = document.getElementById("templateModal").querySelector('textarea[name="body"]').value,
            j.sort = document.getElementById("templateModal").querySelector('input[name="sort"]').value,
            j
        }
        const W = async()=>{
            const e = await (0,
            d.D)({
                module: "template",
                action: "modal"
            });
            await (0,
            r.jB)(e.data.modal);
            const t = document.querySelector("#addTemplateBtn");
            t && t.addEventListener("click", (async function() {
                const e = await (0,
                d.D)({
                    module: "template",
                    action: "addForm"
                });
                (0,
                l.yG)("templateEditForm", e.data.form, !1),
                z(),
                await X(),
                document.getElementsByClassName("iconBtns")[0].click(),
                new TomSelect("#chTemplateTags",{
                    create: !0,
                    maxItems: 3,
                    createOnBlur: !0,
                    plugins: ["remove_button"]
                }),
                document.getElementById("saveTemplate").addEventListener("click", (async e=>{
                    try {
                        let e = R();
                        await (0,
                        d.D)({
                            module: "template",
                            action: "store"
                        }, e),
                        await W(),
                        await se()
                    } catch (e) {
                        (0,
                        c.cB)(e.message, "info")
                    }
                }
                ))
            }
            ));
            document.querySelectorAll(".editTemplateBtns").forEach((e=>{
                e.addEventListener("click", (async e=>{
                    const t = e.target.dataset.templateId
                      , s = await (0,
                    d.D)({
                        module: "template",
                        action: "editForm"
                    }, {
                        id: t
                    });
                    (0,
                    l.yG)("templateEditForm", s.data.form, !1);
                    let a = document.getElementById("templateEditForm").querySelector(".active");
                    j.icon = a.getAttribute("data-icon"),
                    z(),
                    await X(),
                    new TomSelect("#chTemplateTags",{
                        create: !0,
                        maxItems: 3,
                        createOnBlur: !0,
                        plugins: ["remove_button"]
                    }),
                    document.getElementById("updateTemplate").addEventListener("click", (async function() {
                        try {
                            let e = R();
                            await (0,
                            d.D)({
                                module: "template",
                                action: "update"
                            }, e),
                            await W(),
                            await se()
                        } catch (e) {
                            (0,
                            c.cB)(e.message, "info")
                        }
                    }
                    ))
                }
                ))
            }
            ));
            document.querySelectorAll(".destroyTemplateBtns").forEach((e=>{
                e.addEventListener("click", (async e=>{
                    const t = e.target.dataset.templateId;
                    try {
                        await (0,
                        c.uS)(),
                        await (0,
                        d.D)({
                            module: "template",
                            action: "destroy"
                        }, {
                            id: t
                        }),
                        await W(),
                        await se()
                    } catch (e) {
                        (0,
                        c.cB)(e.message, "info")
                    }
                }
                ))
            }
            ))
        }
        ;
        function z() {
            const e = document.getElementsByClassName("iconBtns");
            for (let t = 0; t < e.length; t++)
                e[t].addEventListener("click", (function(t) {
                    j.icon = t.target.dataset.icon;
                    for (let t = 0; t < e.length; t++)
                        e[t].classList.remove("active");
                    this.classList.add("active")
                }
                ))
        }
        const X = async()=>{
            const e = document.querySelector("#templateBody").querySelectorAll(".ch-template-emoji-bar-button");
            document.getElementById("templateBody");
            e.forEach((e=>{
                e.addEventListener("click", (s=>{
                    (0,
                    t.vf)(e.innerText, !1, !1, "templateBodyTextarea")
                }
                ))
            }
            ))
        }
        ;
        async function V() {
            !function() {
                const e = document.getElementById("new_post_text_input");
                e.addEventListener("keyup", Z),
                e.addEventListener("keydown", Q)
            }()
        }
        let J = null;
        const K = 500
          , Y = ["ArrowUp", "ArrowDown", "Enter", "Tab"];
        function Z(e) {
            const s = e.target.value;
            if ("Escape" === e.key || 0 === s.length)
                return document.querySelector(".templates")?.remove(),
                (0,
                t.vf)("", !1, !0, "new_post_text_input"),
                void clearTimeout(J);
            clearTimeout(J),
            Y.includes(e.key) || ee(s)
        }
        function Q(e) {
            const s = document.querySelector(".template-lists")
              , a = s?.querySelectorAll(".tag-list-item")
              , n = document.querySelector(".tag-list-item.ch-active-template");
            if ("ArrowUp" === e.key || "ArrowDown" === e.key) {
                e.preventDefault();
                let t = n ? [...a].indexOf(n) : -1;
                "ArrowUp" === e.key ? t = (t - 1 + a.length) % a.length : "ArrowDown" === e.key && (t = (t + 1) % a.length),
                n && n.classList.remove("ch-active-template"),
                a[t].classList.add("ch-active-template"),
                a[t].scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                })
            } else if ("Tab" === e.key) {
                e.preventDefault();
                const s = document.querySelector(".tag-list-item.ch-active-template");
                if (s) {
                    const e = s.getAttribute("data-template-body");
                    (0,
                    t.vf)(e, !1, !0, "new_post_text_input")
                }
            }
        }
        function ee(e) {
            e.startsWith("/") && (J = setTimeout((async()=>{
                if (e.length) {
                    const t = e.substring(1);
                    t.length ? await se(t) : await te()
                } else
                    document.querySelector(".templates")?.remove();
                (0,
                t.UH)()
            }
            ), K))
        }
        async function te() {
            if (document.querySelector(".templates"))
                return void await se();
            const e = await (0,
            r.Sv)("template", "bar", !1, !0);
            document.querySelector(".m-chats-footer").insertAdjacentHTML("beforeend", e),
            await se(),
            document.querySelectorAll(".dropdown-toggle").forEach((function(e) {
                new bootstrap.Dropdown(e)
            }
            )),
            ae(),
            (0,
            t.UH)()
        }
        async function se(e="") {
            document.querySelector(".template-lists") && (document.querySelector(".template-lists").innerHTML = ""),
            document.querySelector(".template-lists").style.opacity = 0;
            const s = await (0,
            d.D)({
                module: "template",
                action: "list_betta"
            }, {
                search: e
            });
            document.querySelector(".template-lists").innerHTML = s.data.html,
            document.querySelector("#templates_count").innerHTML = s.data.count,
            document.querySelector("#tags_list").innerHTML = s.data.tags,
            document.querySelector(".template-lists").style.opacity = 1,
            document.querySelectorAll(".apply-template")?.forEach((e=>{
                e.addEventListener("click", (function(e) {
                    let s = this.getAttribute("data-template-body");
                    (0,
                    t.vf)(s, !1, !0, "new_post_text_input")
                }
                ))
            }
            )),
            ae(),
            document.getElementById("getTemplateModal").addEventListener("click", (async function(e) {
                (0,
                l.Xh)("getTemplateModal", 1),
                e.preventDefault(),
                e.stopImmediatePropagation(),
                await W(),
                (0,
                l.Xh)("getTemplateModal", 0),
                j = {}
            }
            )),
            document.querySelector("#template_escape").addEventListener("click", G),
            document.querySelectorAll(".tag-list-item")?.forEach((e=>{
                e.addEventListener("click", (function(e) {
                    (0,
                    t.vf)(this.getAttribute("data-template-body"), !1, !0, "new_post_text_input")
                }
                ))
            }
            ));
            const a = document.querySelectorAll(".tag-list-item");
            a.length > 0 && a[0].classList.add("ch-active-template")
        }
        function ae() {
            document.querySelectorAll(".dropdown-menu a").forEach((function(e) {
                e.addEventListener("click", (async function(e) {
                    (0,
                    l.Yh)('[data-locale-key="all_tags"]', this.innerText, !0),
                    e.preventDefault(),
                    e.stopImmediatePropagation();
                    this.closest(".btn-group").querySelector(".dropdown-toggle").click(),
                    await se(this.getAttribute("data-value"))
                }
                ))
            }
            ))
        }
        var ne = __webpack_require__(360)
          , ie = __webpack_require__(983);
        class oe {
            constructor(e) {
                this.configs = e,
                this.greeting = null,
                this.targetTime = new Date,
                this.baseUrl = "/api2/v2/subscriptions/subscribers/latest",
                console.log("GreetingService is running...")
            }
            async handleSubscriberGreetings() {
                try {
                    let e = await this.getMessage();
                    if (this.greeting = e.data.greeting,
                    (0,
                    t.rF)({
                        greeting: e.data.greeting
                    }),
                    ie.Z.emit("greetingStatus", {
                        greeting: e.data.greeting,
                        forcedStop: "error" === e.data.status
                    }),
                    1 === e.data.greeting.status)
                        return;
                    await this.sendFoundedSubscribers()
                } catch (e) {
                    ie.Z.emit("greetingStatus", {
                        forcedStop: !0
                    }),
                    console.log("GreetingService is stop!!!")
                }
            }
            prepareUrlParams(e=0) {
                const t = {
                    startDate: this.dateByTimeZone(5),
                    endDate: this.dateByTimeZone(),
                    by: "new",
                    offset: e
                }
                  , s = [];
                for (let e in t)
                    s.push(encodeURIComponent(e) + "=" + encodeURIComponent(t[e]));
                return s.join("&")
            }
            dateByTimeZone(e=null) {
                let t = new Date(this.targetTime);
                e && t.setUTCMinutes(t.getUTCMinutes() - e);
                let s = t.getUTCFullYear()
                  , a = t.getUTCMonth() + 1
                  , n = t.getUTCDate()
                  , i = t.getUTCHours()
                  , o = t.getUTCMinutes()
                  , r = t.getUTCSeconds();
                return s + "-" + String(a).padStart(2, "0") + "-" + String(n).padStart(2, "0") + " " + String(i).padStart(2, "0") + ":" + String(o).padStart(2, "0") + ":" + String(r).padStart(2, "0")
            }
            async loadSubscriptions() {
                let e, t = 0, s = [];
                do {
                    e = await (0,
                    o.W)(this.baseUrl + "?" + this.prepareUrlParams(t), "GET", null);
                    const a = e.users?.filter((e=>e.subscribedOnData?.subscribeAt && this.getTimeDifferenceInMinutes(new Date(this.dateByTimeZone().replace(" ", "T") + "Z"), new Date(e.subscribedOnData?.subscribeAt)) <= 5));
                    a.length && s.push(...a),
                    t += 10
                } while (e.hasMore);
                return s
            }
            async checkLastMessage(e) {
                return await (0,
                d.D)({
                    module: "setting",
                    action: "check_last_message"
                }, {
                    subscriber_id: e.id
                })
            }
            async getLastMessage(e) {
                let t, s = await this.checkLastMessage(e);
                if ("not_found" !== s.status)
                    return s.data.message;
                let a = await (0,
                o.W)(`/api2/v2/chats?limit=10&offset=0&skip_users=all&order=recent&query=${e.username}`, "GET", null);
                return t = a?.list?.length ? a?.list[0]?.lastMessage : null,
                await this.saveLastMessage(e.id, t),
                t
            }
            async saveLastMessage(e, t) {
                return await (0,
                d.D)({
                    module: "setting",
                    action: "save_last_message"
                }, {
                    subscriber_id: e,
                    message: t
                })
            }
            async sendFoundedSubscribers() {
                try {
                    let e = await this.loadSubscriptions();
                    const t = 60 * (this.configs?.greeting?.timeout || 1) * 1e3;
                    e?.forEach((e=>{
                        setTimeout((()=>this.sendGreetingMessage(e)), t)
                    }
                    ))
                } catch (e) {
                    console.error("Error in sendFoundedSubscribers:", e)
                }
            }
            getTimeDifferenceInMinutes(e, t) {
                const s = e.getTime() - t.getTime();
                return Math.floor(s / 1e3 / 60)
            }
            lastMessageIsGreetingOrEmpty(e) {
                return !e || e?.fromUser.id === this.configs.account.id && 1e6 === e?.cancelSeconds
            }
            async sendGreetingMessage(e) {
                let t = await this.getLastMessage(e);
                if (!this.lastMessageIsGreetingOrEmpty(t))
                    return;
                const s = await this.saveLog({
                    to: e.id,
                    greeting: this.greeting,
                    response: []
                });
                if ("exists" === s.status)
                    return void console.log("Message already sent");
                let a = this.fillForm(this.greeting.message)
                  , n = await (0,
                o.W)(`/api2/v2/chats/${e.id}/messages`, "POST", a);
                await (0,
                d.D)({
                    module: "setting",
                    action: "update_log"
                }, {
                    id: s.data.id,
                    response: n
                }),
                console.log("Successfully sent")
            }
            async getMessage() {
                return await (0,
                d.D)({
                    module: "setting",
                    action: "get_message"
                }, {
                    id: this.configs?.greeting?.id
                })
            }
            async saveLog(e) {
                let s = (0,
                t.Gw)()
                  , a = {
                    greeting: e?.greeting,
                    activation_key: this.configs?.auth?.activation_key,
                    operator_id: s?.operator_id,
                    of_account_id: e.to,
                    success_sent: e.success_sent,
                    response: e.response
                };
                return await (0,
                d.D)({
                    module: "setting",
                    action: "save_log"
                }, a)
            }
            fillForm(e) {
                return {
                    lockedText: !1,
                    text: e,
                    price: null,
                    isCouplePeopleMedia: !1,
                    isForward: !1,
                    mediaFiles: [],
                    previews: []
                }
            }
        }
        var re = __webpack_require__(522);
        let ce = (0,
        t.Gw)()
          , le = null
          , de = null
          , ue = {}
          , me = !1;
        function he() {
            ue = (0,
            t.iE)()
        }
        function pe(e) {
            e.detail?.isAuth && ve("/api2/v2/users/me", e.detail)
        }
        setTimeout((async()=>{
            let e = (0,
            t.iE)();
            if (chrome.runtime.sendMessage({
                method: "check_auth",
                args: []
            }),
            e?.account?.id) {
                ve("/api2/v2/users/me", await (0,
                o.W)("/api2/v2/users/me", "GET", null))
            } else
                document.addEventListener("check_auth", pe)
        }
        ), 1e3);
        const ge = e=>{
            le !== e && (le = e,
            void 0 !== e.detail.url && void 0 !== e.detail.data && (0,
            t.sO)(e.detail.data) && ve(e.detail.url, JSON.parse(e.detail.data)))
        }
          , fe = e=>{
            if (!(0,
            s.K2)() || !(0,
            t.C2)())
                return;
            const a = function(e) {
                let t = new URL(e);
                return t.paths = t.pathname.split("/"),
                t
            }(e);
            if (-1 !== a.pathname.indexOf("/my/chats/chat/")) {
                const e = a.paths[4];
                (0,
                i.Xz)(e),
                (0,
                n.t8)("peer_id", e),
                (0,
                i.t0)()
            }
        }
          , _e = function(e, t) {
            let s;
            return function(...a) {
                clearTimeout(s),
                s = setTimeout((()=>{
                    clearTimeout(s),
                    e(...a)
                }
                ), t)
            }
        }(re.z, 5)
          , ye = e=>{
            (0,
            s.K2)() && (0,
            t.C2)() && (e.nodeType === Node.ELEMENT_NODE && e.querySelector("div > .container") && (void 0 !== ce.settings && void 0 !== ce.settings.site_position ? (0,
            l.Ef)(ce.settings.site_position) : (0,
            l.Ef)("left")),
            e.nodeType === Node.ELEMENT_NODE && e.querySelector("#attach_file_photo") && H(),
            e.nodeType === Node.ELEMENT_NODE && e.querySelector("#attach_file_photo") && window.location.href.includes("my/chats") && O(),
            e.nodeType === Node.ELEMENT_NODE && e.querySelector("#attach_file_photo") && window.location.href.includes("my/chats") && (!async function() {
                if ((0,
                t.DW)("#templateBtn").exists())
                    return;
                document.querySelector(".b-make-post__actions__btns").insertAdjacentHTML("afterend", '\n        <div class="dropdown">\n            <button \n            \tstyle="margin:0;padding:6px" \n            \tclass="dropbtn g-btn m-flat m-gray m-with-round-hover m-size-md-hover m-default-icon-size m-reset-width has-tooltip size-lg-hover m-width-fluid-hover" \n            \tid="templateBtn"\n            \ttype="button"\n            >\n            <span class="pointer-events-none">\n\t\t\t\t<svg \n\t\t\t\t\tfill="none" \n\t\t\t\t\theight="24" \n\t\t\t\t\tviewBox="0 0 24 24" \n\t\t\t\t\twidth="24" \n\t\t\t\t\txmlns="http://www.w3.org/2000/svg"\n\t\t\t\t\tclass="ch-svg-icon"\n\t\t\t\t>\n\t\t\t\t\t<path d="M2 5.25C2 3.45507 3.45507 2 5.25 2H15.75C17.5449 2 19 3.45507 19 5.25V10.0072C18.9173 10.0024 18.8339 10 18.75 10H17.5V5.25C17.5 4.2835 16.7165 3.5 15.75 3.5H5.25C4.2835 3.5 3.5 4.2835 3.5 5.25V16.75C3.5 17.7165 4.2835 18.5 5.25 18.5H6V18.75C6 19.185 6.06536 19.6048 6.1868 20H5.25C3.45508 20 2 18.5449 2 16.75V5.25ZM6.75 5C6.33579 5 6 5.33579 6 5.75C6 6.16421 6.33579 6.5 6.75 6.5H14.25C14.6642 6.5 15 6.16421 15 5.75C15 5.33579 14.6642 5 14.25 5H6.75ZM8 8.25C8 7.83579 8.33579 7.5 8.75 7.5H14.25C14.6642 7.5 15 7.83579 15 8.25C15 8.66421 14.6642 9 14.25 9H8.75C8.33579 9 8 8.66421 8 8.25ZM7 14.25C7 12.4551 8.45507 11 10.25 11H18.75C20.5449 11 22 12.4551 22 14.25V18.75C22 20.5449 20.5449 22 18.75 22H10.25C8.45507 22 7 20.5449 7 18.75V14.25ZM10.25 12.5C9.74571 12.5 9.29124 12.7133 8.9719 13.0546L14.5001 16.6084L20.0281 13.0546C19.7088 12.7133 19.2543 12.5 18.75 12.5H10.25ZM8.5 18.75C8.5 19.7165 9.2835 20.5 10.25 20.5H18.75C19.7165 20.5 20.5 19.7165 20.5 18.75V14.5345L14.9056 18.1309C14.6586 18.2897 14.3415 18.2897 14.0945 18.1309L8.5 14.5345V18.75Z" fill="#8a96a3"/>\n\t\t\t\t</svg>\n            \t<span id="aiName"></span>\n\t\t\t</span>\n            </button>'),
                document.getElementById("templateBtn").addEventListener("click", te)
            }(),
            V(),
            (0,
            t.UH)()),
            e.nodeType === Node.ELEMENT_NODE && e.querySelector('div[at-attr="users_lists"]') && (0,
            i.Xn)(),
            e.nodeType === Node.ELEMENT_NODE && e.querySelector("div.b-photos__item") && setTimeout((()=>{
                (0,
                i.Jg)()
            }
            ), 2e3),
            e.nodeType === Node.ELEMENT_NODE && e.matches(".b-photos__item") && (0,
            i.Jg)(),
            (e.nodeType === Node.ELEMENT_NODE && e.querySelector("div.swipeout") || e.nodeType === Node.ELEMENT_NODE && e.matches(".swipeout") || e.nodeType === Node.ELEMENT_NODE && e.matches(".b-chats__item")) && I(),
            e.nodeType === Node.ELEMENT_NODE && e.matches(".swipeout-list") && (async()=>{
                if (null === document.querySelector(".ch-label-legend")) {
                    let e = '\n\t\t\t<div class="ch-label-legend">\n\t\t\t\t<div class="ch-legend-style" data-reactroot="">\n    \t\t\t\t<div class="ch-hover-info">\n    \t\t\t\t\t<button class="g-btn m-flat" type="button"><i class="fa fa-info-circle"></i> Labels Info</button>\n    \t\t\t\t\t<div class="ch-info-block">\n   \t \t\t\t\t\t<div>\n   \t \t\t\t\t\t\t<div class="ch-label-spending" style="font-size:10px;min-width:42px;margin-left:2px">$100</div>= spent</div><br/>\n\t\t\t\t\t\t\t<div><div class="ch-label-new" style="font-size:10px">NEW</div>&lt; 7d old</div><br/>\n\t\t\t\t\t\t\t<div><div class="ch-label-status" style="background:rgb(236, 64, 122);padding:0px 4.5px;border:1px solid rgb(236, 64, 122);font-size:9px">&nbsp;</div>= expired</div><br/>\n\t\t\t\t\t\t\t<div><div class="ch-label-status" style="background:rgb(238, 193, 66);padding:0px 4.5px;border:1px solid rgb(238, 193, 66);font-size:9px">&nbsp;</div>= rebill off</div></br>\n\t\t\t\t\t\t\t<div><div class="ch-label-duration">2 months</div>= subscribe duration</div>\n\t\t\t\t\t\t</div>\n    \t\t\t\t</div>\n    \t\t\t\t<div class="mr-2">\n\t\t\t\t\t\t<button \n\t\t\t\t\t\t\tclass="nav-link panel-tab-link float-right" \n\t\t\t\t\t\t\thref="#"\n\t\t\t\t\t\t\tid="specialListBtn"\n\t\t\t\t\t\t\ttype="button"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<i class="fa-regular fa-gear"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>';
                    document.querySelector(".b-users-lists-wrapper").insertAdjacentHTML("afterbegin", e),
                    document.querySelector("#specialListBtn").addEventListener("click", (function() {
                        u()
                    }
                    ))
                }
            }
            )(),
            e.nodeType === Node.ELEMENT_NODE && "ch-emoji-bar" === e.id && (async()=>{
                const e = document.getElementById("new_post_text_input");
                e && 0 !== e.value.length && (await te(),
                ee(e.value))
            }
            )(),
            he(),
            function() {
                if (me)
                    return;
                if (me = !0,
                function() {
                    return ue?.greeting?.message?.length > 0 && 0 === ue?.greeting?.status
                }())
                    return void be();
                de && clearInterval(de)
            }(),
            _e())
        }
        ;
        function be() {
            null === de && (de = setInterval((()=>async function() {
                let e = new oe(ue);
                await e.handleSubscriberGreetings()
            }()), 3e5))
        }
        function ve(n, o) {
            let r = n.split("/");
            if (-1 !== n.indexOf("/api2/v2/users/me") && r.includes("me")) {
                void 0 !== o.id && (0,
                a.q)(o.id);
                let e = (0,
                t.iE)();
                void 0 !== o.name && (null !== e.account && void 0 !== e.account && void 0 !== e.account.id && "" !== e.account.id && Number(o.id) !== Number(e.account.id) && (0,
                t.w7)(),
                async function(e) {
                    let t = document.getElementById("ofAccountName");
                    t && (t.innerHTML = e.name);
                    await (0,
                    s.$N)(),
                    (0,
                    ne.D)(),
                    (0,
                    s.K2)()
                }(o))
            }
            -1 !== n.indexOf("/api2/v2/users/logout") && ((0,
            a.q)(0),
            (0,
            s.$N)(),
            (0,
            e.SP)()),
            (0,
            s.K2)() && (0,
            t.C2)() && (-1 !== n.indexOf("/api2/v2/users/list?m[]=") && ((0,
            i.BD)(o),
            -1 !== window.location.href.indexOf("/my/chats/chat/") && (0,
            i.t0)()),
            -1 !== n.indexOf("/api2/v2/users/") && void 0 !== o.id && (0,
            i.BD)(o),
            -1 !== n.indexOf("/api2/v2/vault/media?limit=24&offset=") && (0,
            i.ot)(o),
            fe(window.location.href))
        }
        ie.Z.on("greetingStatus", (e=>{
            if (he(),
            (0,
            t.uK)(),
            1 === e?.greeting?.status || e?.forcedStop)
                return clearInterval(de),
                void (de = null);
            be()
        }
        ));
        let Ee = window.location.href;
        chrome.runtime.onMessage.addListener((async function(e) {
            return "change-url" === e.method && fe(e.url),
            e.method,
            !0
        }
        )),
        chrome.runtime.sendMessage({
            method: "inject-scripts"
        });
        let we, Se, Me = Date.now();
        async function Le() {
            fe(Ee),
            document.addEventListener("xmlrequests", (function(e) {
                ge(e)
            }
            )),
            Se = setInterval((async function() {
                Me = Date.now(),
                await chrome.runtime.sendMessage({
                    method: "trash"
                })
            }
            ), 1e4),
            we = setInterval((async function() {
                let e = (0,
                t.iE)();
                if (void 0 !== e.account && null !== e.account && void 0 !== e.account.id && void 0 !== e.auth && null !== e.auth && void 0 !== e.auth.id) {
                    let s = await (0,
                    d.D)({
                        module: "auth",
                        action: "check"
                    }, {
                        static_param: e.rules.static_param
                    });
                    "rules"in s && Object.keys(s.rules).length && (0,
                    t.rF)({
                        rules: s.rules
                    }),
                    void 0 !== s.status && "success" === s.status || (0,
                    t.w7)()
                }
            }
            ), 3e5)
        }
        new MutationObserver(((e,t)=>{
            e.forEach((e=>{
                e.addedNodes.forEach((e=>{
                    Ee !== window.location.href && (Ee = window.location.href,
                    fe(Ee)),
                    ye(e),
                    Date.now() - Me > 6e4 && (we && clearInterval(we),
                    Se && clearInterval(we),
                    console.log("Background restarting after idle"),
                    Le())
                }
                ))
            }
            ))
        }
        )).observe(document, {
            childList: !0,
            subtree: !0
        }),
        (0,
        e.jf)(),
        Le()
    }
    )()
}
)();
