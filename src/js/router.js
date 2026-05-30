import { closeBag, closeMenu, mountChrome, refreshReveal, syncNavigationState } from "./layout.js";
import { addToBag } from "./ui.js";
import { renderGrid } from "./ui.js";
import { featured, formatPrice, getByCategory, getProductById, getRelated } from "./products.js";

const FALLBACK_ROUTE_KEY = "lebivest:pending-route";

const ROUTES = {
  "/": {
    source: "/index.html",
    title: "LEBIVEST — Quiet Luxury, Anatolian Thread",
    description:
      "LEBIVEST — a quiet-luxury maison. Anatolian kilim motifs in gold thread, drawn into modern tailoring. The Autumn–Winter 2026 collection.",
    nav: "overlay",
  },
  "/collections": {
    source: "/shop.html",
    title: "The Collection — LEBIVEST",
    description:
      "Shop the LEBIVEST collection — trousers, abayas, gowns and outerwear carrying the signature gold kilim motif.",
    nav: "default",
  },
  "/about": {
    source: "/about.html",
    title: "The Atelier — LEBIVEST",
    description:
      "Inside LEBIVEST — a quiet-luxury maison drawing Anatolian kilim motifs in gold thread onto modern tailoring.",
    nav: "default",
  },
  "/product": {
    source: "/product.html",
    title: "Product — LEBIVEST",
    description:
      "A LEBIVEST piece — quiet-luxury tailoring with the signature gold kilim motif.",
    nav: "default",
  },
};

function canonicalPath(pathname) {
  const clean = pathname.replace(/\/$/, "") || "/";
  if (clean === "/index.html") return "/";
  if (clean === "/shop.html") return "/collections";
  if (clean === "/about.html") return "/about";
  if (clean === "/product.html") return "/product";
  return clean;
}

function resolveRoute(urlLike) {
  const url = new URL(urlLike, window.location.origin);
  const cleanPath = canonicalPath(url.pathname);
  const routeKey = cleanPath === "/collections" || cleanPath.startsWith("/collections/")
    ? "/collections"
    : cleanPath === "/about" || cleanPath.startsWith("/about/")
      ? "/about"
      : cleanPath === "/product" || cleanPath.startsWith("/product/")
        ? "/product"
        : "/";
  return {
    key: routeKey,
    cleanPath: routeKey === "/" ? "/" : routeKey,
    search: url.search,
    hash: url.hash,
    source: ROUTES[routeKey].source,
  };
}

function mainElement() {
  return document.querySelector("main");
}

function updateBodyRoute(route) {
  if (route.nav === "overlay") document.body.dataset.nav = "overlay";
  else delete document.body.dataset.nav;
}

function updateMetaFromDocument(doc, route) {
  document.title = doc.title || route.title;

  const description = doc.querySelector('meta[name="description"]')?.content || route.description;
  let meta = document.head.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "description");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", description);
}

function setUrl(route, replace = false) {
  const nextUrl = `${route.cleanPath}${route.search}${route.hash}`;
  if (replace) history.replaceState(null, "", nextUrl);
  else history.pushState(null, "", nextUrl);
}

function hydrateHome(root = document) {
  const featuredEl = root.querySelector("[data-featured]");
  if (featuredEl) renderGrid(featuredEl, featured());

  const railEl = root.querySelector("[data-rail]");
  if (railEl) renderGrid(railEl, getByCategory("women").slice(0, 6));

  refreshReveal(root);
}

function hydrateCollections(root = document) {
  const grid = root.querySelector("[data-grid]");
  const countEl = root.querySelector("[data-count]");
  const titleEl = root.querySelector("[data-shop-title]");
  const lineBar = root.querySelector("[data-lines]");
  const sortSel = root.querySelector("[data-sort]");
  const catBar = root.querySelector("[data-cats]");

  const params = new URLSearchParams(window.location.search);
  const state = {
    category: params.get("category") || "all",
    line: params.get("line") || "all",
    sort: params.get("sort") || "featured",
  };

  const titles = { all: "The Collection", women: "Women", men: "Men" };

  function lines(category) {
    const base = getByCategory(category);
    return ["all", ...new Set(base.map((p) => p.line))];
  }

  function chip(label, active, value, attr) {
    return `<button data-${attr}="${value}" class="eyebrow px-4 py-2 border transition-colors ${
      active ? "bg-ink text-cream border-ink" : "border-ink/20 text-stone hover:border-ink hover:text-ink"
    }">${label}</button>`;
  }

  function renderCats() {
    if (!catBar) return;
    const cats = [
      ["all", "All"],
      ["women", "Women"],
      ["men", "Men"],
    ];
    catBar.innerHTML = cats.map(([value, label]) => chip(label, state.category === value, value, "cat")).join("");
    catBar.querySelectorAll("[data-cat]").forEach((button) =>
      button.addEventListener("click", () => {
        state.category = button.dataset.cat;
        state.line = "all";
        renderCats();
        renderLines();
        apply();
      })
    );
  }

  function renderLines() {
    if (!lineBar) return;
    const list = lines(state.category);
    if (list.length <= 2) {
      lineBar.innerHTML = "";
      return;
    }
    lineBar.innerHTML = list
      .map((line) => chip(line === "all" ? "Everything" : line, state.line === line, line, "line"))
      .join("");
    lineBar.querySelectorAll("[data-line]").forEach((button) =>
      button.addEventListener("click", () => {
        state.line = button.dataset.line;
        renderLines();
        apply();
      })
    );
  }

  function apply() {
    let list = getByCategory(state.category);
    if (state.line !== "all") list = list.filter((item) => item.line === state.line);
    if (state.sort === "price-asc") list = list.slice().sort((a, b) => a.price - b.price);
    else if (state.sort === "price-desc") list = list.slice().sort((a, b) => b.price - a.price);

    if (grid) renderGrid(grid, list, { reveal: false });
    if (countEl) countEl.textContent = `${list.length} ${list.length === 1 ? "piece" : "pieces"}`;
    if (titleEl) titleEl.textContent = titles[state.category] || "The Collection";

    const query = new URLSearchParams();
    if (state.category !== "all") query.set("category", state.category);
    if (state.line !== "all") query.set("line", state.line);
    if (state.sort !== "featured") query.set("sort", state.sort);
    const nextQuery = query.toString();
    history.replaceState(null, "", nextQuery ? `/collections?${nextQuery}` : "/collections");

    refreshReveal(root);
  }

  if (sortSel) {
    sortSel.value = state.sort;
    sortSel.addEventListener("change", () => {
      state.sort = sortSel.value;
      apply();
    });
  }

  renderCats();
  renderLines();
  apply();
}

function hydrateAbout(root = document) {
  refreshReveal(root);
}

function hydrateProduct(root = document) {
  const productRoot = root.querySelector("[data-product]");
  const relatedEl = root.querySelector("[data-related]");
  if (!productRoot) return;

  const id = new URLSearchParams(window.location.search).get("id");
  const product = id ? getProductById(id) : null;

  if (!product) {
    productRoot.innerHTML = `
      <div class="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <p class="eyebrow text-stone">404</p>
        <h1 class="mt-4 font-serif text-4xl font-light">This piece could not be found</h1>
        <a href="/collections" class="btn btn-dark mt-8">Return to the collection</a>
      </div>`;
    if (relatedEl) relatedEl.innerHTML = "";
    refreshReveal(root);
    return;
  }

  document.title = `${product.name} — LEBIVEST`;
  let activeSize = null;

  productRoot.innerHTML = `
  <nav class="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 pt-28 md:pt-36 pb-6 text-[0.7rem] tracking-[0.18em] uppercase text-stone">
    <a href="/" class="hover:text-ink transition-colors">Maison</a>
    <span class="mx-2">/</span>
    <a href="/collections?category=${product.category}" class="hover:text-ink transition-colors">${
      product.category === "men" ? "Men" : "Women"
    }</a>
    <span class="mx-2">/</span>
    <span class="text-ink">${product.name}</span>
  </nav>

  <div class="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-10 lg:gap-20 pb-24">
    <div class="lg:sticky lg:top-28 self-start">
      <div class="overflow-hidden bg-sand aspect-[3/4]">
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" />
      </div>
    </div>

    <div class="lg:py-6 max-w-xl">
      ${product.badge ? `<span class="eyebrow text-gold">${product.badge}</span>` : ""}
      <h1 class="display text-4xl md:text-5xl mt-3">${product.name}</h1>
      <p class="mt-2 text-sm tracking-[0.18em] uppercase text-stone">${product.nameTr}</p>
      <p class="mt-6 font-serif text-3xl">${formatPrice(product.price)}</p>

      <p class="mt-8 text-[15px] leading-relaxed text-ink/80">${product.description}</p>

      <div class="mt-8 flex items-center justify-between">
        <span class="eyebrow">Size</span>
        <button class="text-[0.7rem] tracking-[0.18em] uppercase text-stone hover:text-ink transition-colors link-underline" data-size-guide>Size guide</button>
      </div>
      <div class="mt-3 flex flex-wrap gap-2" data-sizes>
        ${product.sizes
          .map(
            (size) =>
              `<button data-size="${size}" class="min-w-[3rem] px-3 h-11 border border-ink/20 text-sm hover:border-ink transition-colors">${size}</button>`
          )
          .join("")}
      </div>
      <p data-size-msg class="mt-2 text-[0.72rem] tracking-wide text-gold h-4"></p>

      <button data-add class="btn btn-dark w-full mt-6">Add to bag — ${formatPrice(product.price)}</button>
      <p class="mt-4 text-center text-[0.7rem] tracking-wide text-stone">Complimentary worldwide shipping & returns</p>

      <dl class="mt-10 border-t border-ink/10 divide-y divide-ink/10">
        <div class="py-4 flex justify-between gap-6 text-sm">
          <dt class="text-stone">Colour</dt><dd class="text-right">${product.color}</dd>
        </div>
        <div class="py-4 flex justify-between gap-6 text-sm">
          <dt class="text-stone">Fabric</dt><dd class="text-right">${product.fabric}</dd>
        </div>
        <div class="py-4 flex justify-between gap-6 text-sm">
          <dt class="text-stone">Details</dt>
          <dd class="text-right"><ul class="space-y-1">${product.details.map((detail) => `<li>${detail}</li>`).join("")}</ul></dd>
        </div>
      </dl>
    </div>
  </div>`;

  const sizeMsg = root.querySelector("[data-size-msg]");
  root.querySelectorAll("[data-size]").forEach((button) =>
    button.addEventListener("click", () => {
      activeSize = button.dataset.size;
      root.querySelectorAll("[data-size]").forEach((item) => item.classList.remove("bg-ink", "text-cream", "border-ink"));
      button.classList.add("bg-ink", "text-cream", "border-ink");
      if (sizeMsg) sizeMsg.textContent = "";
    })
  );

  root.querySelector("[data-size-guide]")?.addEventListener("click", () => {
    if (sizeMsg) sizeMsg.textContent = "Fits true to size. Between sizes? Take the larger.";
  });

  root.querySelector("[data-add]")?.addEventListener("click", () => {
    if (!activeSize) {
      if (sizeMsg) sizeMsg.textContent = "Please select a size.";
      return;
    }
    addToBag(product.id, { size: activeSize });
  });

  if (relatedEl) renderGrid(relatedEl, getRelated(product, 3));
  refreshReveal(root);
}

function hydrateRoute(route, root = document) {
  if (route.key === "/") hydrateHome(root);
  else if (route.key === "/collections") hydrateCollections(root);
  else if (route.key === "/about") hydrateAbout(root);
  else hydrateProduct(root);
}

function applyRouteDocument(doc, route) {
  const main = mainElement();
  const incomingMain = doc.querySelector("main");
  if (!main || !incomingMain) return;

  main.innerHTML = incomingMain.innerHTML;
  updateBodyRoute(route);
  updateMetaFromDocument(doc, route);
  hydrateRoute(route, document);
  syncNavigationState();
  window.scrollTo(0, 0);
}

async function fetchRouteDocument(route) {
  const response = await fetch(route.source, { credentials: "same-origin" });
  if (!response.ok) {
    throw new Error(`Failed to load ${route.source}`);
  }
  const html = await response.text();
  return new DOMParser().parseFromString(html, "text/html");
}

async function renderRoute(target, { replace = false } = {}) {
  const route = typeof target === "string" ? resolveRoute(target) : target;
  closeBag();
  closeMenu();

  const doc = await fetchRouteDocument(route);
  const url = `${route.cleanPath}${route.search}${route.hash}`;

  if (document.startViewTransition) {
    await document.startViewTransition(() => {
      if (replace) history.replaceState(null, "", url);
      else history.pushState(null, "", url);
      applyRouteDocument(doc, route);
    }).finished;
    return;
  }

  const main = mainElement();
  main?.classList.add("is-leaving");
  await new Promise((resolve) => requestAnimationFrame(resolve));
  if (replace) history.replaceState(null, "", url);
  else history.pushState(null, "", url);
  applyRouteDocument(doc, route);
  main?.classList.remove("is-leaving");
}

function hydrateCurrentDocument() {
  const route = resolveRoute(window.location.href);
  const url = `${route.cleanPath}${route.search}${route.hash}`;
  history.replaceState(null, "", url);
  updateBodyRoute(route);
  hydrateRoute(route, document);
  syncNavigationState();
  window.scrollTo(0, 0);
}

function wireRouter() {
  document.addEventListener(
    "click",
    (event) => {
      const anchor = event.target.closest("a[href]");
      if (!anchor) return;
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;

      const url = new URL(anchor.getAttribute("href"), window.location.origin);
      if (url.origin !== window.location.origin) return;
      if (url.pathname.startsWith("/images/") || url.pathname.startsWith("/public/") || url.pathname.startsWith("/assets/")) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search && url.hash === window.location.hash) return;

      const route = resolveRoute(url.href);
      event.preventDefault();
      void renderRoute(route);
    },
    true
  );

  window.addEventListener("popstate", () => {
    const route = resolveRoute(window.location.href);
    void renderRoute(route, { replace: true });
  });
}

function consumeFallbackRoute() {
  const pending = sessionStorage.getItem(FALLBACK_ROUTE_KEY);
  if (!pending) return null;
  sessionStorage.removeItem(FALLBACK_ROUTE_KEY);
  return pending;
}

mountChrome();
wireRouter();

const pendingRoute = consumeFallbackRoute();
if (pendingRoute) {
  void renderRoute(pendingRoute, { replace: true });
} else {
  hydrateCurrentDocument();
}