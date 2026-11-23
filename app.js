(function () {
  "use strict";

  const MANIFEST = window.FRAGREFINE_MANIFEST || { macro: [], micro: [] };

  const I18N = {
    en: {
      navSub: "Dexterous Physics Retargeting",
      navFeatured: "Showcase",
      navGallery: "Rollout Gallery",
      navMethod: "Method",
      navCite: "Citation",
      navCode: "GitHub",
      venueBadge: "Double-Blind Anonymous Project Page",
      venueSpec: "MuJoCo Pure Physics · 24D / 36D / 56D Dexterous Hands",
      heroTitle:
        '<span class="title-accent">FragRefine</span>: Advantage-Guided Parallel Fragment Refinement for Physics-Based Dexterous Retargeting',
      heroSubtitle:
        "Bridging GPU-parallel short-horizon exploration and full-trajectory physical consistency via learned fragment-edit advantage.",
      heroAuthors: "Anonymous Authors · Under Double-Blind Review",
      ctaGallery: "Explore Rollout Gallery",
      ctaMethod: "Method & Diagrams",
      ctaCode: "GitHub Repo",
      trioTitle: "Cross-Hand Pure-Physics Highlights",
      trioHint: "Click any card for video + stroboscopic comparison",
      mHandsLbl: "Multi-Hand DoFs",
      mHandsSub: "RH56H1 · XHand1 · Sharpa",
      mBenchLbl: "Manipulation Benchmarks",
      mBenchSub: "ARCTIC · ParaHome · DexYCB",
      mEnvLbl: "GPU Parallel Envs",
      mEnvSub: "Short-Horizon + Sparse Full Queries",
      mPhysVal: "0 Assist",
      mPhysLbl: "Pure Rigid Contact",
      mPhysSub: "Zero Kinematic Grafting",
      featKicker: "Interactive Showcase",
      featTitle: "Multi-Stage Articulated & Rigid-Body Manipulation",
      featDesc:
        "Switch seamlessly between live physics video rollouts and 4-keyframe sequences across bimanual articulation and in-hand grasping.",
      galleryKicker: "Physics Rollout Showcase",
      galleryTitle: "Cross-Hand & Cross-Dataset Rollouts",
      galleryDesc:
        "Filter by benchmark or dexterous embodiment, and toggle between looping MuJoCo rollouts and stroboscopic motion trails.",
      tbDataset: "Benchmark",
      dsAll: "All",
      tbHand: "Embodiment",
      handAll: "All Hands",
      tbView: "View",
      viewVideo: "Video",
      viewStrobo: "Stroboscopic",
      tbLayout: "Layout",
      colsGrouped: "Grouped",
      cols6: "6-Col",
      cols3: "3-Col",
      btnPauseAll: "Pause All",
      btnPlayAll: "Play All",
      methodKicker: "Methodology",
      methodTitle: "Advantage-Guided Parallel Fragment Refinement",
      methodDesc:
        "FragRefine links massive short-horizon fragment sampling with sparse full-trajectory physics verification by learning full-trajectory fragment-edit advantage.",
      b1Tag: "01 · FEAC Critic",
      b1Title: "Fragment-Edit Advantage Learning",
      b1Text:
        "Jointly predicts term-wise full-trajectory cost reductions and pairwise candidate preferences anchored at zero-edit rollouts.",
      b2Tag: "02 · Gated Refinement",
      b2Title: "Advantage-Gated Proposal",
      b2Text:
        "Combines short-horizon local descent directions with parent–child FEAC advantage gating before dispatching expensive full rollouts.",
      b3Tag: "03 · Query Scheduling",
      b3Title: "Adaptive Query Scheduling",
      b3Text:
        "Allocates sparse full-physics queries across fragments via residual calibration, marginal gain estimation, and UCB selection.",
      fig1Cap:
        "Fig. 1: FragRefine framework — bridging short-horizon parallel exploration and global full-physics verification. (Click to zoom)",
      fig2Cap: "Fig. 2: Zero-edit anchored FEAC critic architecture.",
      fig3Cap: "Fig. 3: Advantage-gated candidate refinement and adaptive query scheduling.",
      citeKicker: "Citation",
      citeTitle: "BibTeX",
      copyBib: "Copy BibTeX",
      copiedBib: "Copied!",
      footerLeft: "FragRefine · Anonymous Project Page",
      footerRight: "Physics-Based Dexterous Retargeting Showcase",
      tabVideo: "Video",
      tabStrip: "4 Frames",
      featClickInspect: "Click media to inspect",
      handHdrs: {
        RH56E2: "Inspire RH56H1 (24 DoF)",
        XHand: "XHand1 (36 DoF)",
        Sharpa: "Sharpa (56 DoF)",
      },
      dsBands: {
        ARCTIC: "ARCTIC",
        PARAHOME: "ParaHome",
        DEXYCB: "DexYCB",
      },
      featRowLabels: [
        "RH56H1 · ARCTIC Bimanual",
        "XHand1 · ParaHome Household",
        "Sharpa · DexYCB Rigid Grasp",
      ],
      modeBimanual: "Bimanual",
      modeSingle: "Single-Hand",
      lbVideoPane: "MuJoCo Physics Rollout",
      lbStroboPane: "Stroboscopic Trail",
      lbStripPane: "4-Frame Sequence",
      lbFigureBadge: "FragRefine Figure",
      lblDataset: "Benchmark",
      lblHand: "Embodiment",
      lblMotion: "Motion",
      lblMode: "Contact Mode",
      emptyFilter: "No trajectories match this filter.",
    },
    zh: {
      navSub: "物理灵巧手运动重定向",
      navFeatured: "多阶段展示",
      navGallery: "轨迹展示",
      navMethod: "方法框架",
      navCite: "引用格式",
      navCode: "GitHub",
      venueBadge: "双盲评审匿名项目主页",
      venueSpec: "MuJoCo 纯物理仿真 · 24D / 36D / 56D 灵巧手",
      heroTitle:
        '<span class="title-accent">FragRefine</span>：整轨迹优势引导的并行片段精修物理灵巧手重定向框架',
      heroSubtitle:
        "以零修改锚定的片段修改优势学习连接短程并行探索与稀疏整轨迹物理验证，兼顾长程接触一致性与收敛效率。",
      heroAuthors: "匿名作者 · 双盲评审中",
      ctaGallery: "浏览物理轨迹库",
      ctaMethod: "查看框架与机理图",
      ctaCode: "GitHub 仓库",
      trioTitle: "跨手构型纯物理代表轨迹",
      trioHint: "点击卡片即可对比高清视频与时序残影图",
      mHandsLbl: "异构灵巧手",
      mHandsSub: "RH56H1 · XHand1 · Sharpa",
      mBenchLbl: "评测基准",
      mBenchSub: "ARCTIC · ParaHome · DexYCB",
      mEnvLbl: "GPU 并行仿真环境",
      mEnvSub: "短程并发采样 + 稀疏整轨迹查询",
      mPhysVal: "零辅助",
      mPhysLbl: "纯刚体接触",
      mPhysSub: "无任何运动学外力/嫁接",
      featKicker: "交互展示",
      featTitle: "多阶段铰接交互与刚体抓取展示",
      featDesc:
        "支持实时物理回放视频与 4 关键帧序列一键切换，直观呈现长程接触演化。",
      galleryKicker: "纯物理仿真库",
      galleryTitle: "跨手构型 × 跨数据集轨迹矩阵",
      galleryDesc:
        "支持按数据集与灵巧手过滤，并自由切换连续物理视频与起止残影叠加视图。",
      tbDataset: "数据集",
      dsAll: "全部",
      tbHand: "灵巧手",
      handAll: "全部手构型",
      tbView: "视图",
      viewVideo: "实时视频",
      viewStrobo: "残影叠加",
      tbLayout: "排布",
      colsGrouped: "分组视图",
      cols6: "6 列",
      cols3: "3 列",
      btnPauseAll: "全部暂停",
      btnPlayAll: "全部播放",
      methodKicker: "核心方法",
      methodTitle: "整轨迹优势引导的片段精修框架",
      methodDesc:
        "通过学习替换局部动作块前后的完整轨迹代价降幅，将海量短程采样与稀缺整轨迹物理查询紧密耦合。",
      b1Tag: "01 · 优势评估 (FEAC)",
      b1Title: "片段修改优势评估器",
      b1Text:
        "在零修改锚点下联合预测分项整轨迹代价降幅与同上下文候选偏好排序。",
      b2Tag: "02 · 门控精修",
      b2Title: "优势门控候选精修",
      b2Text:
        "融合短程采样拟合的局部下降方向与父子优势门控，高效筛选高价值候选。",
      b3Tag: "03 · 查询调度",
      b3Title: "自适应查询调度",
      b3Text:
        "结合残差校准、跨片段边际收益分配与置信引导选择，精准分配有限整轨迹仿真配额。",
      fig1Cap:
        "图 1：FragRefine 总体架构 — 连接短程并行碎片采样与全局整轨迹物理查询。（点击放大）",
      fig2Cap: "图 2：零修改锚定的片段修改优势评估器（FEAC）架构。",
      fig3Cap: "图 3：优势门控候选精修与自适应整轨迹查询调度。",
      citeKicker: "引用",
      citeTitle: "BibTeX",
      copyBib: "复制 BibTeX",
      copiedBib: "已复制",
      footerLeft: "FragRefine · 匿名项目主页",
      footerRight: "基于纯物理仿真的灵巧手运动重定向",
      tabVideo: "动态视频",
      tabStrip: "四帧序列",
      featClickInspect: "点击画面对比细节",
      handHdrs: {
        RH56E2: "因时 RH56H1 (24 自由度)",
        XHand: "XHand1 (36 自由度)",
        Sharpa: "Sharpa (56 自由度)",
      },
      dsBands: {
        ARCTIC: "ARCTIC",
        PARAHOME: "ParaHome",
        DEXYCB: "DexYCB",
      },
      featRowLabels: [
        "因时 RH56H1 · ARCTIC 双手铰接",
        "XHand1 · ParaHome 居家操作",
        "Sharpa · DexYCB 刚体抓持",
      ],
      modeBimanual: "双手协同",
      modeSingle: "单手操作",
      lbVideoPane: "MuJoCo 纯物理仿真回放",
      lbStroboPane: "起止运动残影对比",
      lbStripPane: "四阶段时序拆解",
      lbFigureBadge: "FragRefine 方法图示",
      lblDataset: "评测基准",
      lblHand: "手构型",
      lblMotion: "动作范围",
      lblMode: "交互模式",
      emptyFilter: "当前筛选条件下无匹配轨迹。",
    },
  };

  const state = {
    lang: "en",
    dataset: "ALL",
    hand: "ALL",
    view: "video",
    cols: "paper",
    playingAll: true,
    lightboxItems: [],
    lightboxIndex: -1,
  };

  let videoObserver = null;

  function t(key) {
    return (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key;
  }

  function handChipClass(hand) {
    if (hand === "RH56E2") return "chip-rh56";
    if (hand === "XHand") return "chip-xhand";
    return "chip-sharpa";
  }

  function dsChipClass(ds) {
    if (ds === "ARCTIC") return "chip-arctic";
    if (ds === "PARAHOME") return "chip-parahome";
    return "chip-dexycb";
  }

  function bandClass(key) {
    if (key === "RH56E2" || key === "ARCTIC") {
      return key === "RH56E2" ? "band-rh56" : "band-arctic";
    }
    if (key === "XHand" || key === "PARAHOME") {
      return key === "XHand" ? "band-xhand" : "band-parahome";
    }
    return key === "Sharpa" ? "band-sharpa" : "band-dexycb";
  }

  function catLabel(item) {
    return state.lang === "zh" ? item.category_zh : item.category_en;
  }

  function motionLabel(item) {
    return state.lang === "zh" ? item.motion_zh : item.motion_en;
  }

  function handLabel(item) {
    return state.lang === "zh" ? item.hand_full_zh : item.hand_full;
  }

  function modeLabel(item) {
    const sides = Array.isArray(item.keep_sides) ? item.keep_sides.length : 1;
    return sides > 1 ? t("modeBimanual") : t("modeSingle");
  }

  function setupVideoObserver() {
    if (videoObserver) {
      videoObserver.disconnect();
    }
    const videos = document.querySelectorAll("video[data-autoplay]");
    if (!("IntersectionObserver" in window)) {
      videos.forEach((v) => {
        if (state.playingAll) v.play().catch(() => {});
      });
      return;
    }
    videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = entry.target;
          if (entry.isIntersecting && state.playingAll) {
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        });
      },
      { threshold: 0.08, rootMargin: "160px 0px" }
    );
    videos.forEach((v) => videoObserver.observe(v));
  }

  function renderHeroTrio() {
    const container = document.getElementById("hero-trio");
    if (!container) return;

    const picks = ["m_r0g0", "m_r1g0", "m_r2g0"]
      .map((id) => MANIFEST.macro.find((m) => m.id === id))
      .filter(Boolean);

    container.innerHTML = picks
      .map(
        (item) => `
      <article class="trio-card" data-open-id="${item.id}" data-kind="macro">
        <div class="trio-media">
          <video data-autoplay muted loop playsinline preload="metadata" poster="${item.poster}" src="${item.video}"></video>
          <div class="trio-overlay-top">
            <span class="chip ${handChipClass(item.hand)}">${item.hand_short} · ${item.dof}</span>
            <span class="chip ${dsChipClass(item.dataset)}">${item.dataset_name}</span>
          </div>
        </div>
        <div class="trio-footer">
          <span class="trio-name">${catLabel(item)}</span>
          <span class="trio-motion">${motionLabel(item)}</span>
        </div>
      </article>`
      )
      .join("");

    container.querySelectorAll(".trio-card").forEach((el) => {
      el.addEventListener("click", () => {
        openTrajectoryLightbox(el.dataset.openId, MANIFEST.macro);
      });
    });
  }

  function renderFeaturedRows() {
    const host = document.getElementById("featured-rows");
    if (!host) return;

    const rows = [0, 1, 2];
    host.innerHTML = rows
      .map((rowIdx) => {
        const items = MANIFEST.macro.filter((m) => m.row === rowIdx);
        if (!items.length) return "";
        const rowTitle = I18N[state.lang].featRowLabels[rowIdx];
        const ds = items[0].dataset;
        const hand = items[0].hand;

        return `
        <div class="feat-row-block">
          <div class="feat-row-hdr">
            <div class="feat-row-left">
              <span class="chip ${handChipClass(hand)}">${items[0].hand_short} · ${items[0].dof}</span>
              <span class="chip ${dsChipClass(ds)}">${items[0].dataset_name}</span>
              <strong>${rowTitle}</strong>
            </div>
          </div>
          <div class="feat-row-grid">
            ${items
              .map(
                (item) => `
              <article class="feat-card" data-macro-id="${item.id}">
                <div class="feat-card-top">
                  <div class="feat-card-title">
                    <span>${catLabel(item)}</span>
                    <span class="trio-motion">${motionLabel(item)}</span>
                  </div>
                  <div class="feat-mode-tabs">
                    <button type="button" class="feat-tab active" data-feat-tab="video">${t("tabVideo")}</button>
                    <button type="button" class="feat-tab" data-feat-tab="strip">${t("tabStrip")}</button>
                  </div>
                </div>
                <div class="feat-media-box" data-open-macro="${item.id}">
                  <video data-autoplay muted loop playsinline preload="metadata" poster="${item.poster}" src="${item.video}"></video>
                  <div class="feat-strip-grid">
                    ${item.strip_frames
                      .map(
                        (src, idx) => `
                      <div class="strip-frame">
                        <img src="${src}" alt="${catLabel(item)} step ${idx + 1}" loading="lazy" />
                        <span class="strip-step-tag">${item.step_labels[idx] || "t" + idx}</span>
                      </div>`
                      )
                      .join("")}
                  </div>
                </div>
                <div class="feat-card-bot">
                  <span>${t("featClickInspect")}</span>
                  <span>${modeLabel(item)}</span>
                </div>
              </article>`
              )
              .join("")}
          </div>
        </div>`;
      })
      .join("");

    host.querySelectorAll(".feat-card").forEach((card) => {
      const box = card.querySelector(".feat-media-box");
      const strip = card.querySelector(".feat-strip-grid");
      const vid = card.querySelector("video");
      card.querySelectorAll(".feat-tab").forEach((tab) => {
        tab.addEventListener("click", (e) => {
          e.stopPropagation();
          card.querySelectorAll(".feat-tab").forEach((b) => b.classList.remove("active"));
          tab.classList.add("active");
          if (tab.dataset.featTab === "strip") {
            box.classList.add("showing-strip");
            strip.classList.add("active");
            if (vid) vid.pause();
          } else {
            box.classList.remove("showing-strip");
            strip.classList.remove("active");
            if (vid && state.playingAll) vid.play().catch(() => {});
          }
        });
      });

      box.addEventListener("click", () => {
        openTrajectoryLightbox(box.dataset.openMacro, MANIFEST.macro);
      });
    });
  }

  function buildTileHTML(item) {
    const isStrobo = state.view === "stroboscopic";
    const mediaHtml = isStrobo
      ? `<img src="${item.stroboscopic}" alt="${catLabel(item)} stroboscopic" loading="lazy" />`
      : `<video data-autoplay muted loop playsinline preload="metadata" poster="${item.poster}" src="${item.video}"></video>`;

    return `
      <article class="m-card" data-open-id="${item.id}" data-kind="micro">
        <div class="m-media">
          ${mediaHtml}
          <span class="m-hover-pill">${item.dataset_name} · ${item.hand_short}</span>
        </div>
        <div class="m-caption">
          <span class="m-cat" title="${catLabel(item)}">${catLabel(item)}</span>
          <span class="m-delta">${motionLabel(item)}</span>
        </div>
      </article>`;
  }

  function renderMatrix() {
    const stage = document.getElementById("matrix-stage");
    if (!stage) return;

    const filtered = MANIFEST.micro.filter((item) => {
      if (state.dataset !== "ALL" && item.dataset !== state.dataset) return false;
      if (state.hand !== "ALL" && item.hand !== state.hand) return false;
      return true;
    });

    if (!filtered.length) {
      stage.innerHTML = `<div class="abstract-card">${t("emptyFilter")}</div>`;
      setupVideoObserver();
      return;
    }

    const useGroupedView =
      state.cols === "paper" && state.dataset === "ALL" && state.hand === "ALL";

    if (useGroupedView) {
      const hdrMap = I18N[state.lang].handHdrs;
      const bandNames = I18N[state.lang].dsBands;
      const datasets = ["ARCTIC", "PARAHOME", "DEXYCB"];

      stage.innerHTML = `
        <div class="paper-matrix-wrap">
          <div class="paper-matrix-inner">
            <div class="pm-col-headers">
              <div></div>
              <div class="pm-col-span band-rh56">${hdrMap.RH56E2}</div>
              <div class="pm-col-span band-xhand">${hdrMap.XHand}</div>
              <div class="pm-col-span band-sharpa">${hdrMap.Sharpa}</div>
            </div>
            ${datasets
              .map((ds) => {
                const items = filtered
                  .filter((it) => it.dataset === ds)
                  .sort((a, b) => a.r - b.r || a.c - b.c);
                return `
                <div class="pm-band">
                  <div class="pm-band-strip ${bandClass(ds)}">${bandNames[ds]}</div>
                  <div class="pm-band-cols">
                    ${items.map(buildTileHTML).join("")}
                  </div>
                </div>`;
              })
              .join("")}
          </div>
        </div>`;
    } else {
      const cols =
        state.cols === "3" ? 3 : state.cols === "6" ? 6 : Math.min(filtered.length >= 9 ? 6 : 3, 6);
      const cls = `flat-grid cols-${cols}`;
      stage.innerHTML = `<div class="${cls}">${filtered.map(buildTileHTML).join("")}</div>`;
    }

    stage.querySelectorAll(".m-card").forEach((card) => {
      card.addEventListener("click", () => {
        openTrajectoryLightbox(card.dataset.openId, filtered);
      });
    });

    setupVideoObserver();
  }

  function applyLanguage(lang) {
    state.lang = lang;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

    document.querySelectorAll(".lang-opt").forEach((el) => {
      el.classList.toggle("active", el.dataset.lang === lang);
    });

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const val = I18N[lang][key];
      if (val !== undefined) {
        if (key === "heroTitle") {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });

    document.querySelectorAll("figure.fig-zoomable").forEach((fig) => {
      fig.dataset.activeCaption =
        lang === "zh" ? fig.dataset.captionZh : fig.dataset.captionEn;
    });

    const btnPlay = document.getElementById("btn-play-all");
    if (btnPlay) {
      btnPlay.textContent = state.playingAll ? t("btnPauseAll") : t("btnPlayAll");
    }

    renderHeroTrio();
    renderFeaturedRows();
    renderMatrix();
    setupVideoObserver();
  }

  function openTrajectoryLightbox(id, list) {
    state.lightboxItems = list || [];
    state.lightboxIndex = state.lightboxItems.findIndex((x) => x.id === id);
    if (state.lightboxIndex < 0) return;
    renderTrajectoryModal();
    document.getElementById("lightbox").classList.add("open");
    document.getElementById("lightbox").setAttribute("aria-hidden", "false");
    document.getElementById("lb-prev").style.display = "inline-flex";
    document.getElementById("lb-next").style.display = "inline-flex";
  }

  function renderTrajectoryModal() {
    const item = state.lightboxItems[state.lightboxIndex];
    if (!item) return;

    const badge = document.getElementById("lb-badge");
    const title = document.getElementById("lb-title");
    const body = document.getElementById("lb-body");

    badge.className = `chip ${handChipClass(item.hand)}`;
    badge.textContent = `${item.dataset_name} · ${item.hand_short} (${item.dof})`;
    title.textContent = `${catLabel(item)} — ${motionLabel(item)}`;

    const rightPane =
      item.kind === "macro"
        ? `
      <div class="lb-pane">
        <div class="lb-pane-lbl">${t("lbStripPane")}</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:10px;background:#fff;">
          ${item.strip_frames
            .map(
              (src, idx) => `
            <div class="strip-frame">
              <img src="${src}" alt="${catLabel(item)} ${idx}" />
              <span class="strip-step-tag">${item.step_labels[idx] || "t" + idx}</span>
            </div>`
            )
            .join("")}
        </div>
      </div>`
        : `
      <div class="lb-pane">
        <div class="lb-pane-lbl">${t("lbStroboPane")}</div>
        <img src="${item.stroboscopic}" alt="${catLabel(item)} stroboscopic" />
      </div>`;

    body.innerHTML = `
      <div class="lb-split">
        <div class="lb-pane">
          <div class="lb-pane-lbl">${t("lbVideoPane")}</div>
          <video src="${item.video}" poster="${item.poster}" autoplay loop muted controls playsinline></video>
        </div>
        ${rightPane}
      </div>
      <div class="lb-meta-row">
        <span><strong>${t("lblDataset")}:</strong> ${item.dataset_name}</span>
        <span><strong>${t("lblHand")}:</strong> ${handLabel(item)}</span>
        <span><strong>${t("lblMotion")}:</strong> ${motionLabel(item)}</span>
        <span><strong>${t("lblMode")}:</strong> ${modeLabel(item)}</span>
      </div>`;
  }

  function openFigureLightbox(figEl) {
    const src = figEl.dataset.fig;
    const cap =
      state.lang === "zh" ? figEl.dataset.captionZh : figEl.dataset.captionEn;

    const badge = document.getElementById("lb-badge");
    const title = document.getElementById("lb-title");
    const body = document.getElementById("lb-body");

    badge.className = "chip chip-rh56";
    badge.textContent = t("lbFigureBadge");
    title.textContent = "";
    body.innerHTML = `
      <img class="lb-zoom-img" src="${src}" alt="Method Figure" />
      <p style="margin:12px 2px 0;font-size:0.9rem;color:#334155;">${cap || ""}</p>`;

    document.getElementById("lb-prev").style.display = "none";
    document.getElementById("lb-next").style.display = "none";
    document.getElementById("lightbox").classList.add("open");
    document.getElementById("lightbox").setAttribute("aria-hidden", "false");
  }

  function closeLightbox() {
    const lb = document.getElementById("lightbox");
    lb.classList.remove("open");
    lb.setAttribute("aria-hidden", "true");
    document.getElementById("lb-body").innerHTML = "";
  }

  function bindEvents() {
    document.getElementById("lang-toggle").addEventListener("click", () => {
      applyLanguage(state.lang === "en" ? "zh" : "en");
    });

    document.getElementById("filter-dataset").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-dataset]");
      if (!btn) return;
      state.dataset = btn.dataset.dataset;
      document
        .querySelectorAll("#filter-dataset .pill")
        .forEach((b) => b.classList.toggle("active", b === btn));
      renderMatrix();
    });

    document.getElementById("filter-hand").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-hand]");
      if (!btn) return;
      state.hand = btn.dataset.hand;
      document
        .querySelectorAll("#filter-hand .pill")
        .forEach((b) => b.classList.toggle("active", b === btn));
      renderMatrix();
    });

    document.getElementById("mode-view").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-view]");
      if (!btn) return;
      state.view = btn.dataset.view;
      document
        .querySelectorAll("#mode-view .pill")
        .forEach((b) => b.classList.toggle("active", b === btn));
      renderMatrix();
    });

    document.getElementById("mode-cols").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-cols]");
      if (!btn) return;
      state.cols = btn.dataset.cols;
      document
        .querySelectorAll("#mode-cols .pill")
        .forEach((b) => b.classList.toggle("active", b === btn));
      renderMatrix();
    });

    document.getElementById("btn-play-all").addEventListener("click", () => {
      state.playingAll = !state.playingAll;
      const btn = document.getElementById("btn-play-all");
      btn.textContent = state.playingAll ? t("btnPauseAll") : t("btnPlayAll");
      document.querySelectorAll("video[data-autoplay]").forEach((v) => {
        if (state.playingAll) v.play().catch(() => {});
        else v.pause();
      });
    });

    document.querySelectorAll("figure.fig-zoomable").forEach((fig) => {
      fig.addEventListener("click", () => openFigureLightbox(fig));
    });

    document.getElementById("lb-close").addEventListener("click", closeLightbox);
    document.getElementById("lb-backdrop").addEventListener("click", closeLightbox);
    document.getElementById("lb-prev").addEventListener("click", () => {
      if (!state.lightboxItems.length) return;
      state.lightboxIndex =
        (state.lightboxIndex - 1 + state.lightboxItems.length) % state.lightboxItems.length;
      renderTrajectoryModal();
    });
    document.getElementById("lb-next").addEventListener("click", () => {
      if (!state.lightboxItems.length) return;
      state.lightboxIndex = (state.lightboxIndex + 1) % state.lightboxItems.length;
      renderTrajectoryModal();
    });

    document.addEventListener("keydown", (e) => {
      const lb = document.getElementById("lightbox");
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") document.getElementById("lb-prev").click();
      if (e.key === "ArrowRight") document.getElementById("lb-next").click();
    });

    document.getElementById("btn-copy-bib").addEventListener("click", () => {
      const text = document.getElementById("bibtex-block").textContent;
      navigator.clipboard?.writeText(text).then(() => {
        const btn = document.getElementById("btn-copy-bib");
        btn.textContent = t("copiedBib");
        setTimeout(() => {
          btn.textContent = t("copyBib");
        }, 1600);
      });
    });
  }

  function init() {
    const params = new URLSearchParams(window.location.search);
    const initialLang = params.get("lang") === "zh" ? "zh" : "en";
    bindEvents();
    applyLanguage(initialLang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
