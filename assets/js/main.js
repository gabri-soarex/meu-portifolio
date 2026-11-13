(function () {
  const d = window.PORTFOLIO;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const ICONS = {
    github: '<svg viewBox="0 0 24 24"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.5V9h3.6v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>',
    email: '<svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.2-8 5-8-5V6l8 5 8-5v2.2z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.2.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.2-9.6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"/></svg>',
    site: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.9 6h-3a15.7 15.7 0 0 0-1.4-3.6A8 8 0 0 1 18.9 8zM12 4c.8 1.2 1.5 2.5 1.9 4h-3.8c.4-1.5 1.1-2.8 1.9-4zM4.3 14a8.2 8.2 0 0 1 0-4h3.4a16.5 16.5 0 0 0 0 4H4.3zm.8 2h3a15.7 15.7 0 0 0 1.4 3.6A8 8 0 0 1 5.1 16zm3-8h-3a8 8 0 0 1 4.3-3.6C8.9 5.5 8.4 6.7 8.1 8zM12 20c-.8-1.2-1.5-2.5-1.9-4h3.8c-.4 1.5-1.1 2.8-1.9 4zm2.3-6H9.7a14.7 14.7 0 0 1 0-4h4.6a14.7 14.7 0 0 1 0 4zm.3 5.6c.6-1.1 1.1-2.3 1.4-3.6h3a8 8 0 0 1-4.4 3.6zM16.3 14a16.5 16.5 0 0 0 0-4h3.4a8.2 8.2 0 0 1 0 4h-3.4z"/></svg>',
  };

  // ---------- Básico ----------
  document.title = `${d.name} — ${d.roles[0]}`;
  $("logo").textContent = d.logo;
  $("heroName").textContent = d.name;
  $("heroSummary").textContent = d.summary;
  $("avatar").onerror = function () { this.onerror = null; this.src = "assets/img/avatar.svg"; };
  $("avatar").src = d.avatar || "assets/img/avatar.svg";
  $("avatar").alt = `Foto de ${d.name}`;
  $("aboutText").innerHTML = d.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("aboutFacts").innerHTML = d.facts.map((f) => `<li><strong>${esc(f.label)}</strong>${esc(f.value)}</li>`).join("");
  $("contactText").textContent = d.contactText;
  $("contactEmail").href = `mailto:${d.email}`;
  $("footerText").innerHTML = `© ${new Date().getFullYear()} ${esc(d.name)}`;

  const cv = $("cvLink");
  if (d.cv) cv.href = d.cv; else cv.remove();

  const socialsHtml = d.socials
    .map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.type)}">${ICONS[s.type] || ICONS.site}</a>`)
    .join("");
  $("heroSocials").innerHTML = socialsHtml;
  $("contactSocials").innerHTML = socialsHtml;

  // ---------- Skills ----------
  $("skillsGrid").innerHTML = d.skills
    .map((g) => `<div class="skill-card reveal${g.wide ? " skill-card--wide" : ""}"><h3>${esc(g.icon)} ${esc(g.group)}</h3><div class="tags">${g.items.map((i) => `<span class="tag">${esc(i)}</span>`).join("")}</div></div>`)
    .join("");

  // ---------- Projetos ----------
  const cats = ["Todos", ...new Set(d.projects.map((p) => p.category))];
  $("filters").innerHTML = cats.map((c, i) => `<button class="filter${i === 0 ? " active" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
  $("projectsGrid").innerHTML = d.projects
    .map((p) => `
      <article class="project reveal" data-cat="${esc(p.category)}">
        <div class="project__img">${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy">` : esc(p.emoji || "🚀")}</div>
        <div class="project__body">
          <h3 class="project__title">${esc(p.title)}</h3>
          <p class="project__desc">${esc(p.description)}</p>
          <div class="tags">${p.tech.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
          <div class="project__links">
            ${p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener">Código ↗</a>` : ""}
            ${p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener">Ver site ↗</a>` : ""}
          </div>
        </div>
      </article>`)
    .join("");

  $("filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    document.querySelectorAll(".filter").forEach((b) => b.classList.toggle("active", b === btn));
    const cat = btn.dataset.cat;
    document.querySelectorAll(".project").forEach((p) => p.classList.toggle("hidden", cat !== "Todos" && p.dataset.cat !== cat));
  });

  // ---------- Certificados ----------
  const certs = d.certificates || [];
  $("certsGrid").innerHTML = certs
    .map((c) => `
      <article class="cert reveal${c.featured ? " cert--featured" : ""}">
        <a class="cert__img" ${c.file ? `href="${esc(c.file)}" target="_blank" rel="noopener"` : ""} aria-label="Certificado: ${esc(c.title)}">
          <img src="${esc(c.image)}" alt="Certificado ${esc(c.title)}" loading="lazy">
          <span class="cert__badge">${c.featured ? "★ " : ""}${esc(c.type || "Certificado")}</span>
        </a>
        <div class="cert__body">
          ${c.status ? `<span class="cert__status">${esc(c.status)}</span>` : ""}
          <h3 class="cert__title">${esc(c.title)}${c.code ? ` <span class="cert__code mono">${esc(c.code)}</span>` : ""}</h3>
          <p class="cert__org">${esc(c.org)}</p>
          ${c.description ? `<p class="cert__desc">${esc(c.description)}</p>` : ""}
          <p class="cert__meta mono">${[c.date, c.hours].filter(Boolean).map(esc).join(" · ")}</p>
          <div class="project__links">
            ${c.file ? `<a href="${esc(c.file)}" target="_blank" rel="noopener">Ver certificado ↗</a>` : ""}
            ${c.verify ? `<a href="${esc(c.verify)}" target="_blank" rel="noopener">Verificar ↗</a>` : ""}
          </div>
        </div>
      </article>`)
    .join("");

  // ---------- Timeline ----------
  $("timeline").innerHTML = d.experience
    .map((x) => `
      <li class="reveal">
        <span class="timeline__period">${esc(x.period)}</span>
        <h3 class="timeline__title">${esc(x.title)} <span class="timeline__org">· ${esc(x.org)}</span></h3>
        <p class="timeline__desc">${esc(x.description)}</p>
      </li>`)
    .join("");

  // ---------- Esconde seções vazias e renumera ----------
  const hideSection = (id) => {
    $(id).remove();
    const link = document.querySelector(`.nav__links a[href="#${id}"]`);
    if (link) link.remove();
  };
  if (!d.experience || !d.experience.length) hideSection("experiencia");
  if (!certs.length) hideSection("certificados");
  if (!d.projects || !d.projects.length) hideSection("projetos");
  if (!d.skills || !d.skills.length) hideSection("skills");
  if (cats.length <= 2) $("filters").remove(); // só uma categoria: filtro não faz sentido
  document.querySelectorAll(".section__title .mono").forEach((el, i) => {
    el.textContent = String(i + 1).padStart(2, "0") + ".";
  });

  // ---------- Efeito de digitação ----------
  const typed = $("typed");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) typed.textContent = d.roles[0];
  else {
    let r = 0, c = 0, del = false;
    (function tick() {
      const word = d.roles[r];
      typed.textContent = word.slice(0, c);
      if (!del && c < word.length) c++;
      else if (del && c > 0) c--;
      else if (!del) { del = true; return setTimeout(tick, 1600); }
      else { del = false; r = (r + 1) % d.roles.length; }
      setTimeout(tick, del ? 40 : 80);
    })();
  }

  // ---------- Tema ----------
  const root = document.documentElement;
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (_) {}
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = saved || (prefersDark ? "dark" : "light");
  $("themeToggle").addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (_) {}
  });

  // ---------- Menu mobile ----------
  const links = $("navLinks");
  $("menuToggle").addEventListener("click", () => links.classList.toggle("open"));
  links.addEventListener("click", (e) => { if (e.target.tagName === "A") links.classList.remove("open"); });

  // ---------- Animação ao rolar ----------
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
