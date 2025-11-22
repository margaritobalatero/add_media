import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_db_server
} from "/build/_shared/chunk-RAKYURNE.js";
import {
  Form,
  useLoaderData
} from "/build/_shared/chunk-S2ROCJBG.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-RLNWSRIU.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/dashboard.jsx
var import_react2 = __toESM(require_react(), 1);
var import_node = __toESM(require_node(), 1);
var import_db_server = __toESM(require_db_server(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\dashboard.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\dashboard.jsx"
  );
}
function getYouTubeEmbedUrl(url) {
  try {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w\-]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  } catch {
    return null;
  }
}
function Dashboard() {
  _s();
  const {
    items,
    search
  } = useLoaderData();
  const [editingId, setEditingId] = (0, import_react2.useState)(null);
  const [detailItem, setDetailItem] = (0, import_react2.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container py-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", { href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css", rel: "stylesheet", integrity: "sha384-ENjdO4Dr2bkBIFxQpeoYz1HIr2z5e2e1sFidk8zZ4yY1pG1lEN5Kq0p2d6Y5p3yz", crossOrigin: "anonymous" }, void 0, false, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mb-4 text-center", children: "\u{1F3A0} Media Grid" }, void 0, false, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "get", className: "d-flex mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "q", defaultValue: search, placeholder: "Search caption...", className: "form-control me-2" }, void 0, false, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "btn btn-primary", children: "Search" }, void 0, false, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 85,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4", children: items.map((item) => {
      const youtubeEmbed = getYouTubeEmbedUrl(item.mediaUrl);
      const isEditing = editingId === item._id;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card h-100 shadow-sm d-flex flex-column", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ratio ratio-16x9", children: item.type === "image" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: item.mediaUrl, className: "card-img-top object-fit-cover", alt: item.caption }, void 0, false, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 98,
          columnNumber: 44
        }, this) : youtubeEmbed ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", { src: youtubeEmbed, allowFullScreen: true, title: item.caption }, void 0, false, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 98,
          columnNumber: 150
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", { src: item.mediaUrl, controls: true, className: "w-100 h-100" }, void 0, false, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 99,
          columnNumber: 31
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 97,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-body d-flex flex-column", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { className: "card-title", children: item.caption }, void 0, false, {
            fileName: "app/routes/dashboard.jsx",
            lineNumber: 104,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-auto d-flex flex-wrap gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "d-inline", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_id", value: item._id }, void 0, false, {
                fileName: "app/routes/dashboard.jsx",
                lineNumber: 109,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "action", value: "delete" }, void 0, false, {
                fileName: "app/routes/dashboard.jsx",
                lineNumber: 110,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "btn btn-danger btn-sm", children: "Delete" }, void 0, false, {
                fileName: "app/routes/dashboard.jsx",
                lineNumber: 111,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard.jsx",
              lineNumber: 108,
              columnNumber: 21
            }, this),
            isEditing ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "d-flex flex-column gap-2 flex-grow-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_id", value: item._id }, void 0, false, {
                fileName: "app/routes/dashboard.jsx",
                lineNumber: 117,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "action", value: "update" }, void 0, false, {
                fileName: "app/routes/dashboard.jsx",
                lineNumber: 118,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "caption", defaultValue: item.caption, className: "form-control form-control-sm", required: true }, void 0, false, {
                fileName: "app/routes/dashboard.jsx",
                lineNumber: 119,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "mediaUrl", defaultValue: item.mediaUrl, className: "form-control form-control-sm", required: true }, void 0, false, {
                fileName: "app/routes/dashboard.jsx",
                lineNumber: 121,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "btn btn-success btn-sm", children: "Save" }, void 0, false, {
                  fileName: "app/routes/dashboard.jsx",
                  lineNumber: 124,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "btn btn-secondary btn-sm", onClick: () => setEditingId(null), children: "Cancel" }, void 0, false, {
                  fileName: "app/routes/dashboard.jsx",
                  lineNumber: 125,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/dashboard.jsx",
                lineNumber: 123,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard.jsx",
              lineNumber: 115,
              columnNumber: 34
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "btn btn-warning btn-sm", onClick: () => setEditingId(item._id), children: "Update" }, void 0, false, {
              fileName: "app/routes/dashboard.jsx",
              lineNumber: 130,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "btn btn-info btn-sm text-white", onClick: () => setDetailItem(item), children: "Details" }, void 0, false, {
              fileName: "app/routes/dashboard.jsx",
              lineNumber: 135,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.jsx",
            lineNumber: 106,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 103,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 96,
        columnNumber: 15
      }, this) }, item._id, false, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 95,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    detailItem && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "modal fade show d-block", style: {
      background: "rgba(0,0,0,0.5)"
    }, onClick: () => setDetailItem(null), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "modal-dialog modal-lg modal-dialog-centered", onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "modal-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "modal-header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { className: "modal-title", children: detailItem.caption }, void 0, false, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 155,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "btn-close", onClick: () => setDetailItem(null) }, void 0, false, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 156,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 154,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "modal-body", children: detailItem.type === "image" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: detailItem.mediaUrl, className: "img-fluid", alt: detailItem.caption }, void 0, false, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 160,
        columnNumber: 48
      }, this) : getYouTubeEmbedUrl(detailItem.mediaUrl) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ratio ratio-16x9", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", { src: getYouTubeEmbedUrl(detailItem.mediaUrl), allowFullScreen: true, title: detailItem.caption }, void 0, false, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 161,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 160,
        columnNumber: 173
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", { src: detailItem.mediaUrl, controls: true, autoPlay: true, className: "w-100" }, void 0, false, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 163,
        columnNumber: 28
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 159,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "modal-footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "btn btn-secondary", onClick: () => setDetailItem(null), children: "Close" }, void 0, false, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 167,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 166,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 153,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 151,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 147,
      columnNumber: 22
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex justify-content-between mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/add", className: "btn btn-success", children: "\u2795 Add Media" }, void 0, false, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 177,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/login", className: "btn btn-outline-secondary", children: "Logout" }, void 0, false, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 180,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 176,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.jsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
}
_s(Dashboard, "QSec/etP5oVt6hWjNvsTwNWLvzw=", false, function() {
  return [useLoaderData];
});
_c = Dashboard;
var _c;
$RefreshReg$(_c, "Dashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Dashboard as default
};
//# sourceMappingURL=/build/routes/dashboard-Q3LD7HWJ.js.map
