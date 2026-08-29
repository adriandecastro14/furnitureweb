/* ============================================================
   NARRA & CO. HOME FURNITURE
   Everything the page needs to be interactive lives in this file.

   If you only ever edit one thing, edit the PRODUCTS list below.
   It builds BOTH the product grid AND the form's dropdown.
   ============================================================ */


/* ============================================================
   ↓↓↓ 1. PASTE YOUR N8N WEBHOOK URL HERE ↓↓↓

   Replace the text between the quotes with your n8n PRODUCTION
   webhook URL. Keep the quotes. Example:
   const WEBHOOK_URL = "https://myname.app.n8n.cloud/webhook/inquiry";

   Until you change it, the form runs in DEMO MODE: it validates
   and shows the success message, but sends nothing anywhere.
   ============================================================ */

const WEBHOOK_URL = "https://adriandecastro.app.n8n.cloud/webhook/narra-inquiry";

/* ↑↑↑ THAT'S THE ONLY LINE YOU NEED TO CHANGE ↑↑↑

   Heads up for later: if the form works on your computer but fails
   once the site is live on a real web address, it is almost always
   a CORS setting on the n8n side, not a bug in this page. In your
   n8n webhook node, allow your site's domain (or "*") in the
   response headers. */


/* ============================================================
   2. THE PRODUCTS
   One line per product. Edit a price or a name here and it
   updates everywhere on the page. Prices are plain numbers —
   no commas, no peso sign; the page adds those for you.
   The two hero banners are deliberately NOT in this list, so
   they never show up as products.
   ============================================================ */

const PRODUCTS = [
  { file: "sofa-terracotta.png",         product: "Luna 3-Seater Sofa — Terracotta",  category: "Living Room", price: 24999, colorway: "Terracotta" },
  { file: "sofa-sage.png",               product: "Luna 3-Seater Sofa — Sage",        category: "Living Room", price: 24999, colorway: "Sage" },
  { file: "sofa-navy.png",               product: "Luna 3-Seater Sofa — Navy",        category: "Living Room", price: 24999, colorway: "Navy" },
  { file: "sofa-mustard.png",            product: "Luna 3-Seater Sofa — Mustard",     category: "Living Room", price: 24999, colorway: "Mustard" },

  { file: "armchair-terracotta.png",     product: "Amihan Armchair — Terracotta",     category: "Living Room", price: 12499, colorway: "Terracotta" },
  { file: "armchair-sage.png",           product: "Amihan Armchair — Sage",           category: "Living Room", price: 12499, colorway: "Sage" },
  { file: "armchair-navy.png",           product: "Amihan Armchair — Navy",           category: "Living Room", price: 12499, colorway: "Navy" },
  { file: "armchair-mustard.png",        product: "Amihan Armchair — Mustard",        category: "Living Room", price: 12499, colorway: "Mustard" },

  { file: "coffee-table-terracotta.png", product: "Alon Coffee Table — Terracotta",   category: "Living Room", price: 6499,  colorway: "Terracotta" },
  { file: "coffee-table-sage.png",       product: "Alon Coffee Table — Sage",         category: "Living Room", price: 6499,  colorway: "Sage" },
  { file: "coffee-table-navy.png",       product: "Alon Coffee Table — Navy",         category: "Living Room", price: 6499,  colorway: "Navy" },
  { file: "coffee-table-mustard.png",    product: "Alon Coffee Table — Mustard",      category: "Living Room", price: 6499,  colorway: "Mustard" },

  { file: "tv-console-terracotta.png",   product: "Bayan TV Console — Terracotta",    category: "Living Room", price: 11999, colorway: "Terracotta" },
  { file: "tv-console-sage.png",         product: "Bayan TV Console — Sage",          category: "Living Room", price: 11999, colorway: "Sage" },
  { file: "tv-console-navy.png",         product: "Bayan TV Console — Navy",          category: "Living Room", price: 11999, colorway: "Navy" },
  { file: "tv-console-mustard.png",      product: "Bayan TV Console — Mustard",       category: "Living Room", price: 11999, colorway: "Mustard" },

  { file: "floor-lamp-terracotta.png",   product: "Sinag Floor Lamp — Terracotta",    category: "Lighting",    price: 2999,  colorway: "Terracotta" },
  { file: "floor-lamp-sage.png",         product: "Sinag Floor Lamp — Sage",          category: "Lighting",    price: 2999,  colorway: "Sage" },
  { file: "floor-lamp-navy.png",         product: "Sinag Floor Lamp — Navy",          category: "Lighting",    price: 2999,  colorway: "Navy" },
  { file: "floor-lamp-mustard.png",      product: "Sinag Floor Lamp — Mustard",       category: "Lighting",    price: 2999,  colorway: "Mustard" },

  { file: "dining-table-terracotta.png", product: "Tala Dining Table — Terracotta",   category: "Dining",      price: 18999, colorway: "Terracotta" },
  { file: "dining-table-sage.png",       product: "Tala Dining Table — Sage",         category: "Dining",      price: 18999, colorway: "Sage" },
  { file: "dining-table-navy.png",       product: "Tala Dining Table — Navy",         category: "Dining",      price: 18999, colorway: "Navy" },
  { file: "dining-table-mustard.png",    product: "Tala Dining Table — Mustard",      category: "Dining",      price: 18999, colorway: "Mustard" },

  { file: "dining-chair-terracotta.png", product: "Habi Dining Chair — Terracotta",   category: "Dining",      price: 3499,  colorway: "Terracotta" },
  { file: "dining-chair-sage.png",       product: "Habi Dining Chair — Sage",         category: "Dining",      price: 3499,  colorway: "Sage" },
  { file: "dining-chair-navy.png",       product: "Habi Dining Chair — Navy",         category: "Dining",      price: 3499,  colorway: "Navy" },
  { file: "dining-chair-mustard.png",    product: "Habi Dining Chair — Mustard",      category: "Dining",      price: 3499,  colorway: "Mustard" },

  { file: "bar-stool-terracotta.png",    product: "Bituin Bar Stool — Terracotta",    category: "Dining",      price: 2499,  colorway: "Terracotta" },
  { file: "bar-stool-sage.png",          product: "Bituin Bar Stool — Sage",          category: "Dining",      price: 2499,  colorway: "Sage" },
  { file: "bar-stool-navy.png",          product: "Bituin Bar Stool — Navy",          category: "Dining",      price: 2499,  colorway: "Navy" },
  { file: "bar-stool-mustard.png",       product: "Bituin Bar Stool — Mustard",       category: "Dining",      price: 2499,  colorway: "Mustard" },

  { file: "bed-terracotta.png",          product: "Kalinaw Queen Bed — Terracotta",   category: "Bedroom",     price: 27999, colorway: "Terracotta" },
  { file: "bed-sage.png",                product: "Kalinaw Queen Bed — Sage",         category: "Bedroom",     price: 27999, colorway: "Sage" },
  { file: "bed-navy.png",                product: "Kalinaw Queen Bed — Navy",         category: "Bedroom",     price: 27999, colorway: "Navy" },
  { file: "bed-mustard.png",             product: "Kalinaw Queen Bed — Mustard",      category: "Bedroom",     price: 27999, colorway: "Mustard" },

  { file: "wardrobe-terracotta.png",     product: "Diwa Wardrobe — Terracotta",       category: "Bedroom",     price: 21999, colorway: "Terracotta" },
  { file: "wardrobe-sage.png",           product: "Diwa Wardrobe — Sage",             category: "Bedroom",     price: 21999, colorway: "Sage" },
  { file: "wardrobe-navy.png",           product: "Diwa Wardrobe — Navy",             category: "Bedroom",     price: 21999, colorway: "Navy" },
  { file: "wardrobe-mustard.png",        product: "Diwa Wardrobe — Mustard",          category: "Bedroom",     price: 21999, colorway: "Mustard" },

  { file: "bookshelf-terracotta.png",    product: "Marikit Bookshelf — Terracotta",   category: "Office",      price: 8999,  colorway: "Terracotta" },
  { file: "bookshelf-sage.png",          product: "Marikit Bookshelf — Sage",         category: "Office",      price: 8999,  colorway: "Sage" },
  { file: "bookshelf-navy.png",          product: "Marikit Bookshelf — Navy",         category: "Office",      price: 8999,  colorway: "Navy" },
  { file: "bookshelf-mustard.png",       product: "Marikit Bookshelf — Mustard",      category: "Office",      price: 8999,  colorway: "Mustard" },

  { file: "desk-terracotta.png",         product: "Ligaya Work Desk — Terracotta",    category: "Office",      price: 9999,  colorway: "Terracotta" },
  { file: "desk-sage.png",               product: "Ligaya Work Desk — Sage",          category: "Office",      price: 9999,  colorway: "Sage" },
  { file: "desk-navy.png",               product: "Ligaya Work Desk — Navy",          category: "Office",      price: 9999,  colorway: "Navy" },
  { file: "desk-mustard.png",            product: "Ligaya Work Desk — Mustard",       category: "Office",      price: 9999,  colorway: "Mustard" }
];


/* ============================================================
   3. SETTINGS YOU MIGHT WANT TO TWEAK
   ============================================================ */

// The order the filter buttons appear in. "All" is added automatically.
const CATEGORY_ORDER = ["Living Room", "Dining", "Bedroom", "Office", "Lighting"];

// Products whose name starts with any of these get a "Featured" badge.
const FEATURED = ["Luna 3-Seater Sofa", "Tala Dining Table", "Kalinaw Queen Bed"];

// Where the product images live, relative to index.html.
const IMAGE_FOLDER = "images/";


/* ============================================================
   4. THE PAGE LOGIC — you shouldn't need to edit below here.
   ============================================================ */

// Short helper so we can write $("#thing") instead of the long version.
const $ = (selector) => document.querySelector(selector);

const grid        = $("#productGrid");
const filtersBox  = $("#filters");
const resultCount = $("#resultCount");
const productMenu = $("#product");
const form        = $("#inquiryForm");
const submitBtn   = $("#submitBtn");
const formStatus  = $("#formStatus");
const successPanel= $("#successPanel");

let activeCategory = "All";


/* ---- Money formatting: 24999 becomes ₱24,999 ---- */
function formatPeso(amount) {
  return "₱" + amount.toLocaleString("en-PH", { maximumFractionDigits: 0 });
}

/* ---- Is this one of the featured pieces? ---- */
function isFeatured(item) {
  return FEATURED.some((name) => item.product.startsWith(name));
}

/* ---- Keep any stray characters in product names from breaking the HTML ---- */
function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[ch]);
}


/* ---- Build the filter buttons ---- */
function buildFilters() {
  // Only show a category button if products actually use that category.
  const used = CATEGORY_ORDER.filter((cat) =>
    PRODUCTS.some((item) => item.category === cat)
  );

  // Catch any category in the data that we forgot to list in CATEGORY_ORDER.
  PRODUCTS.forEach((item) => {
    if (!used.includes(item.category)) used.push(item.category);
  });

  const categories = ["All", ...used];

  filtersBox.innerHTML = categories.map((cat) => {
    const count = cat === "All"
      ? PRODUCTS.length
      : PRODUCTS.filter((item) => item.category === cat).length;
    const isOn = cat === activeCategory;
    return `<button type="button" class="filter-btn${isOn ? " is-active" : ""}"
              data-category="${escapeHtml(cat)}" aria-pressed="${isOn}">
              ${escapeHtml(cat)} <span class="filter-count">${count}</span>
            </button>`;
  }).join("");
}


/* ---- Build the product grid ---- */
function renderGrid() {
  const shown = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((item) => item.category === activeCategory);

  resultCount.textContent =
    shown.length === 1 ? "Showing 1 piece" : `Showing ${shown.length} pieces`;

  if (shown.length === 0) {
    grid.innerHTML = `<p class="empty">No pieces in this category yet — try "All".</p>`;
    return;
  }

  grid.innerHTML = shown.map((item) => `
    <article class="card">
      <div class="card-media">
        ${isFeatured(item) ? '<span class="badge">Featured</span>' : ""}
        <img src="${IMAGE_FOLDER}${encodeURIComponent(item.file)}"
             alt="${escapeHtml(item.product)}" loading="lazy" width="600" height="600">
      </div>
      <div class="card-body">
        <p class="card-category">${escapeHtml(item.category)}</p>
        <h3 class="card-title">${escapeHtml(item.product)}</h3>
        <div class="card-foot">
          <span class="card-price">${formatPeso(item.price)}</span>
          <button type="button" class="btn btn-small inquire-btn"
                  data-product="${escapeHtml(item.product)}">Inquire</button>
        </div>
      </div>
    </article>
  `).join("");
}


/* ---- Build the dropdown in the form, grouped by category ---- */
function buildProductMenu() {
  let html = `<option value="">Not sure yet — just browsing</option>`;

  const groups = [...new Set(PRODUCTS.map((item) => item.category))];
  groups.forEach((cat) => {
    html += `<optgroup label="${escapeHtml(cat)}">`;
    PRODUCTS.filter((item) => item.category === cat).forEach((item) => {
      const label = `${item.product} (${formatPeso(item.price)})`;
      html += `<option value="${escapeHtml(item.product)}">${escapeHtml(label)}</option>`;
    });
    html += `</optgroup>`;
  });

  productMenu.innerHTML = html;
}


/* ---- Clicking "Inquire" on a card: scroll down and pre-select it ---- */
function inquireAbout(productName) {
  productMenu.value = productName;

  // If the name somehow isn't in the list, fall back to "just browsing"
  // instead of leaving the dropdown blank.
  if (productMenu.value !== productName) productMenu.value = "";

  $("#inquire").scrollIntoView({ behavior: "smooth", block: "start" });

  // Give the scroll a moment, then gently highlight the dropdown.
  window.setTimeout(() => {
    productMenu.classList.add("just-set");
    window.setTimeout(() => productMenu.classList.remove("just-set"), 1600);
  }, 500);
}


/* ---- Basic form checking, in plain language ---- */
function validate(data) {
  if (!data.name.trim())  return "Please tell us your name.";
  if (!data.email.trim()) return "Please add an email so we can reply.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
    return "That email address looks incomplete — could you check it?";
  if (!data.phone.trim()) return "Please add a phone number.";
  return null; // null means "all good"
}


/* ---- Sending the form ---- */
async function handleSubmit(event) {
  event.preventDefault();

  // EXACTLY the six fields your n8n workflow expects.
  const payload = {
    name:    $("#name").value,
    email:   $("#email").value,
    phone:   $("#phone").value,
    product: $("#product").value,
    date:    $("#date").value,
    message: $("#message").value
  };

  const problem = validate(payload);
  if (problem) {
    showStatus(problem, "error");
    return;
  }

  setSending(true);
  showStatus("", "");

  try {
    let ok;

    if (WEBHOOK_URL === "PASTE_YOUR_N8N_WEBHOOK_URL_HERE") {
      // DEMO MODE — no webhook set yet, so pretend it worked.
      console.log("DEMO MODE: no webhook set. This is what would be sent:", payload);
      await new Promise((resolve) => window.setTimeout(resolve, 700));
      ok = true;
    } else {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json().catch(() => ({}));
      ok = response.ok && result.success === true;
    }

    if (ok) {
      form.hidden = true;
      successPanel.hidden = false;
      successPanel.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      showStatus("Sorry — that didn't go through. Your details are still here, so please try again in a moment.", "error");
    }
  } catch (err) {
    console.error(err);
    showStatus("We couldn't reach our inbox just now. Please check your connection and try again — nothing you typed was lost.", "error");
  } finally {
    setSending(false);
  }
}

function setSending(isSending) {
  submitBtn.disabled = isSending;
  submitBtn.textContent = isSending ? "Sending…" : "Inquire";
}

function showStatus(message, kind) {
  formStatus.textContent = message;
  formStatus.className = "form-status" + (kind ? " is-" + kind : "");
}


/* ---- Wire everything up when the page loads ---- */
function init() {
  buildFilters();
  renderGrid();
  buildProductMenu();

  // Filter buttons (one listener handles all of them).
  filtersBox.addEventListener("click", (event) => {
    const btn = event.target.closest(".filter-btn");
    if (!btn) return;
    activeCategory = btn.dataset.category;
    buildFilters();
    renderGrid();
  });

  // Inquire buttons on the cards (also one listener for all 48).
  grid.addEventListener("click", (event) => {
    const btn = event.target.closest(".inquire-btn");
    if (btn) inquireAbout(btn.dataset.product);
  });

  form.addEventListener("submit", handleSubmit);

  // "Send another inquiry" brings the empty form back.
  $("#anotherBtn").addEventListener("click", () => {
    form.reset();
    form.hidden = false;
    successPanel.hidden = true;
    showStatus("", "");
    form.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // Don't let people pick a contact date in the past.
  const dateField = $("#date");
  const today = new Date();
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  dateField.min = today.toISOString().slice(0, 10);

  // Year in the footer, so it never goes stale.
  $("#year").textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", init);
