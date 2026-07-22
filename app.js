const issues = [
  {
    id: "2026-W29",
    label: "第一期（7.8-7.15）",
    range: "2026-W29 / 7.8-7.15",
    resources: [
      {
        title: "Warehouse Management",
        category: "B 端复杂页面",
        score: "14/15",
        coverImage: "./assets/covers/warehouse.png",
        visualLabel: "SaaS Dashboard",
        summary: "用总览指标、人员状态、任务和实时动态拆解仓储运营首页。",
        description:
          "适合研究 B 端首页如何同时承担监控和操作入口，而不只是陈列几张数据卡片。卡片层级、状态颜色和右侧动态流都可以作为后台首页参考。它也展示了如何把高频指令留在首屏，避免用户在明细页与概览页之间来回跳转。",
        action: "拆解它的 Team Overview：记录指标、人员、任务、动态四类信息如何分区，再对照自己的后台首页检查是否有清晰的操作入口。",
        url: "https://www.behance.net/gallery/250635005/Warehouse-Management-SaaS-Dashboard-UX-UI-Design"
      },
      {
        title: "Vela",
        category: "AI App 视觉案例",
        score: "15/15",
        coverImage: "./assets/covers/vela.png",
        visualLabel: "AI Meditation",
        summary: "从用户目标生成专属冥想音频，流程和品牌视觉比较完整。",
        description:
          "它把 AI 产品的输入过程做成柔和的目标表达，而不是传统内容库浏览。适合拆解生成式产品如何降低理解成本和等待焦虑。页面通过低刺激色彩和连续反馈，把生成过程包装成易理解的陪伴式体验。",
        action: "重点看从目标输入到生成结果的流程，提炼每一步如何解释 AI 正在做什么、用户还需要提供什么。",
        url: "https://www.behance.net/gallery/249551547/Vela-AI-Meditation-App-UXUI-Design-Branding"
      },
      {
        title: "Motion",
        category: "AI 动效工具",
        score: "15/15",
        coverImage: "./assets/covers/motion.png",
        visualLabel: "AI Motion",
        summary: "把一句话需求推进到可编辑的脚本、分镜、动效和剪辑流程。",
        description:
          "它的价值不是一次性生成视频，而是保留图层、文字、颜色和尺寸，方便设计师继续修改，接近真实动效交付流程。从结果可回退的编辑入口，到不同阶段的状态提示，都值得作为 AI 创作工具的信息架构参考。",
        action: "用一个产品功能点模拟输入，观察它如何从 Prompt 拆成 Research、Plan、Build、Edit，判断哪些环节能替代手工脚本和分镜。",
        url: "https://motion.so/blog/introducing-motion"
      },
      {
        title: "Framed",
        category: "设计交付工具",
        score: "14/15",
        coverImage: "./assets/covers/framed.jpg",
        visualLabel: "Mockup Studio",
        summary: "把截图、视频和代码片段整理成可发布的产品展示图。",
        description:
          "它对应设计师经常被忽略的交付包装环节，适合团队周报、产品更新、应用商店截图和功能讲解的固定模板沉淀。尤其适合研究如何把一次性素材变成团队可复用的资产，降低发布前临时拼图的成本。",
        action: "拿一张最近的产品截图试做固定模板：设备框、标题、标注和背景风格都保存下来，之后复用到周报和发布图。",
        url: "https://framedmockup.com"
      },
      {
        title: "OpenPencil",
        category: "开源 AI 设计工具",
        score: "15/15",
        coverImage: "./assets/covers/openpencil.png",
        visualLabel: "Open Source",
        summary: "把可视化编辑、设计文件和 AI 自动化放到同一条开放工作流里。",
        description:
          "它可读取 .fig 和 .pen 文件，并提供在线版、桌面版、CLI、SDK 和 MCP，适合探索 AI 设计工具如何进入真实生产链路。它把本地文件、代码产物和模型协作放到同一工作面，适合评估开放工具链的衔接方式。",
        action: "先用非敏感测试文件验证 Token 提取和 JSX/Tailwind 导出，再判断它是否适合加入自己的 AI 设计到开发流程。",
        url: "https://github.com/open-pencil/open-pencil"
      }
    ]
  },
  {
    id: "2026-W30",
    label: "第二期（7.15-7.22）",
    range: "2026-W30 / 7.15-7.22",
    resources: [
      {
        title: "Genspark 6.0",
        category: "AI 设计工作流",
        score: "15/15",
        coverImage: "./assets/covers/genspark.png",
        visualLabel: "Workspace 6.0",
        summary: "把设计、原型、内容生成和协作合并进同一个带记忆的 AI 工作区。",
        description:
          "7 月 20 日发布的 6.0 把 SecondBrain、Design、AgentBase 和 GenTeam 放在同一层级。值得观察它如何把持久上下文作为入口，让品牌规则、已有素材和项目决策不必在每个设计任务里重复说明。",
        action: "用一个真实需求拆成“参考素材、原型、交付素材”三段，记录哪些品牌约束可以交给记忆层，哪些仍必须由设计师逐项审核。",
        url: "https://www.genspark.ai/blog/genspark-ai-workspace-6"
      },
      {
        title: "Loova Ads Studio",
        category: "AI 视觉生产",
        score: "14/15",
        coverImage: "./assets/covers/loova.png",
        visualLabel: "Ads Studio",
        summary: "把商品素材、广告格式和创意方向批量变成可测试的图片与视频版本。",
        description:
          "7 月 20 日上线的 Ads Studio 把 UGC 视频、商品广告、虚拟人和静态视觉放进同一套创意流程。它的价值不只是生成单条素材，而是让不同 Hook、商品和人物替换成为连续的对照实验。",
        action: "选一张已有商品图，先定义三个不同开场 Hook，再比较工具如何保持商品信息一致，以及哪些镜头和文案仍需要人工把关。",
        url: "https://loova.ai"
      },
      {
        title: "V2Fun",
        category: "AI 3D 动效",
        score: "14/15",
        coverImage: "./assets/covers/v2fun.png",
        visualLabel: "3D Pipeline",
        summary: "从文字或参考图生成 3D 角色，再完成绑定、贴图和视频动捕驱动。",
        description:
          "它把图生 3D、自动绑定、动作库和视频动捕串成连续流程，并支持 GLB、FBX、PMX 等文件继续使用。适合研究 3D 资产如何从概念验证进入动效预演，而不是停留在一张渲染图。",
        action: "用一张角色概念图做测试，分别检查模型结构、骨骼节点和动作迁移三个环节，判断它是否能作为前期动效分镜的快速验证工具。",
        url: "https://v2fun.ai"
      },
      {
        title: "Miora",
        category: "AI 创意画布",
        score: "14/15",
        coverImage: "./assets/covers/miora.jpg",
        visualLabel: "Agentic Canvas",
        summary: "在可编辑画布上生成图像、UI、3D 和品牌资产，并将偏好沉淀为可复用 Skill。",
        description:
          "它把一次创意任务中的风格、规则和禁忌自动积累为可编辑记忆，后续内容继续沿用同一套偏好。虽然在本期开始前发布，但仍处于 30 天新鲜度窗口，适合作为“品牌一致性如何被工具保存”的补充样本。",
        action: "为一个虚拟品牌写下颜色、语气和禁用元素，连续生成两轮不同物料，再检查第二轮是否真正继承了第一轮的设计约束。",
        url: "https://miora.design"
      },
      {
        title: "dot.",
        category: "原型反馈工具",
        score: "15/15",
        coverImage: "./assets/covers/dot.jpg",
        visualLabel: "Pinned Feedback",
        summary: "给任意线上页面添加无登录的点击定位评论，并保留每次迭代的版本上下文。",
        description:
          "它允许评审者直接在页面任意位置留下 pin，并用页面元素锚点和百分比坐标降低布局变化后的漂移风险。新上线的版本记录会把评论留在对应迭代上，避免 AI 快速改版后反馈失去上下文。",
        action: "把一个可访问原型生成评审链接，请同事只用点击批注反馈；下一版更新后检查未解决项是否仍能准确定位到原先页面状态。",
        url: "https://www.leaveadot.com"
      }
    ]
  }
];

const state = {
  mode: "featured",
  issueId: "2026-W30",
  activeIndex: 0,
  reduceMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  isMobile: window.matchMedia("(max-width: 760px)").matches
};

const carousel = document.querySelector("#carousel");
const pageTitle = document.querySelector("#pageTitle");
const issueLabel = document.querySelector("#issueLabel");
const issueSelect = document.querySelector("#issueSelect");
const issueSelectWrap = document.querySelector("#issueSelectWrap");
const tabButtons = [...document.querySelectorAll(".tab-button")];

function getLatestIssue() {
  return issues[issues.length - 1];
}

function getCurrentIssue() {
  if (state.mode === "featured") return getLatestIssue();
  return issues.find((issue) => issue.id === state.issueId) || getLatestIssue();
}

function animateCardHover(card, index, hovered) {
  if (!window.gsap || state.reduceMotion || state.isMobile || card.getAttribute("aria-hidden") === "true") return;

  const total = getCurrentIssue().resources.length;
  const distance = Math.abs(getOffset(index, state.activeIndex, total));
  const baseY = distance === 0 ? 0 : 14;
  const baseScale = distance === 0 ? 1 : distance === 1 ? 0.76 : 0.52;
  const lift = 9;
  const scaleBump = 0.035;

  card.classList.toggle("is-hovered", hovered);
  gsap.to(card, {
    y: hovered ? baseY - lift : baseY,
    scale: hovered ? baseScale + scaleBump : baseScale,
    duration: hovered ? 0.22 : 0.28,
    ease: "power2.out",
    overwrite: "auto"
  });
}

function makeCard(resource, index) {
  const article = document.createElement("article");
  article.className = "resource-card";
  article.tabIndex = 0;
  article.dataset.index = String(index);

  article.innerHTML = `
    <div class="cover" data-label="${resource.visualLabel}">
      <img src="${resource.coverImage}" alt="${resource.title} 原始页面截图" loading="lazy" />
    </div>
    <div class="card-body">
      <div class="card-meta">
        <span class="category">${resource.category}</span>
        <span class="score">${resource.score}</span>
      </div>
      <div class="card-title-row">
        <h2 class="card-title">${resource.title}</h2>
        <a class="open-link" href="${resource.url}" target="_blank" rel="noreferrer" aria-label="打开 ${resource.title}">→</a>
      </div>
      <div class="card-details">
        <p class="card-summary">${resource.summary}</p>
        <p class="card-description">${resource.description}</p>
        <p class="card-action"><span>可以怎么用</span>${resource.action}</p>
      </div>
    </div>
  `;

  article.addEventListener("click", (event) => {
    if (event.target.closest("a")) return;
    setActiveIndex(index);
  });

  article.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveIndex(index);
    }
  });

  article.addEventListener("pointerenter", (event) => {
    if (event.pointerType !== "mouse") return;
    animateCardHover(article, index, true);
  });

  article.addEventListener("pointerleave", (event) => {
    if (event.pointerType !== "mouse") return;
    animateCardHover(article, index, false);
  });

  return article;
}

function renderCards() {
  const resources = getCurrentIssue().resources;
  carousel.innerHTML = "";
  resources.forEach((resource, index) => {
    carousel.appendChild(makeCard(resource, index));
  });
  layoutCards(true);
}

function getOffset(index, active, total) {
  let offset = index - active;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

function layoutCards(isInitial = false) {
  const cards = [...carousel.querySelectorAll(".resource-card")];
  const total = cards.length;
  const stageWidth = carousel.clientWidth || window.innerWidth;
  const cardWidth = cards[0]?.offsetWidth || 392;
  const sideScale = state.isMobile ? 0.92 : 0.76;
  const farScale = state.isMobile ? 0.86 : 0.52;
  const overlap = Math.min(Math.max(cardWidth * 0.06, 24), 34);
  const sideStep = Math.min(cardWidth * ((1 + sideScale) / 2) - overlap, stageWidth * 0.32);
  const farGap = cardWidth * ((sideScale + farScale) / 2) - overlap;
  const farStep = Math.min(sideStep + farGap, stageWidth * 0.48);

  cards.forEach((card, index) => {
    const offset = getOffset(index, state.activeIndex, total);
    const distance = Math.abs(offset);
    const visible = distance <= (state.isMobile ? 0 : 2);
    const x = state.isMobile ? 0 : Math.sign(offset) * (distance === 2 ? farStep : sideStep);
    const baseY = distance === 0 ? 0 : 14;
    const baseScale = distance === 0 ? 1 : distance === 1 ? sideScale : farScale;
    const autoAlpha = visible ? 1 : 0;
    const zIndex = 10 - distance;
    const hovered = visible && !state.isMobile && !state.reduceMotion && card.matches(":hover");
    const lift = 9;
    const scaleBump = 0.035;
    const y = hovered ? baseY - lift : baseY;
    const scale = hovered ? baseScale + scaleBump : baseScale;

    card.classList.toggle("is-side", distance === 1);
    card.classList.toggle("is-far", distance > 1);
    card.classList.toggle("is-hovered", hovered);
    card.setAttribute("aria-hidden", visible ? "false" : "true");
    card.tabIndex = visible ? 0 : -1;
    card.style.zIndex = String(zIndex);

    const vars = {
      xPercent: -50,
      yPercent: -50,
      x,
      y,
      scale,
      autoAlpha,
      duration: state.reduceMotion || isInitial ? 0 : 0.56,
      ease: "power3.inOut",
      overwrite: "auto"
    };

    if (window.gsap) {
      gsap.to(card, vars);
    } else {
      card.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale})`;
      card.style.opacity = String(autoAlpha);
      card.style.visibility = autoAlpha === 0 ? "hidden" : "visible";
    }
  });
}

function setActiveIndex(index) {
  const total = getCurrentIssue().resources.length;
  state.activeIndex = (index + total) % total;
  layoutCards();
}

function setMode(mode, animate = true) {
  state.mode = mode;
  state.activeIndex = 0;
  const issue = getCurrentIssue();
  pageTitle.textContent = mode === "featured" ? "本期精选" : "所有案例";
  issueLabel.textContent = issue.range;
  issueSelect.value = state.issueId;
  issueSelectWrap.classList.toggle("is-hidden", mode !== "all");
  tabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === mode);
  });
  renderCards();

  if (animate && window.gsap && !state.reduceMotion) {
    gsap.fromTo(
      [pageTitle, carousel],
      { autoAlpha: 0, y: 16 },
      { autoAlpha: 1, y: 0, duration: 0.42, ease: "power2.out", stagger: 0.05, overwrite: "auto" }
    );
  }
}

function bootAnimation() {
  if (!window.gsap || state.reduceMotion) return;
  gsap.defaults({ duration: 0.62, ease: "power2.out" });
  gsap.from(".eyebrow, h1", { y: 22, autoAlpha: 0, stagger: 0.08 });
  gsap.from(".resource-card", {
    y: 42,
    autoAlpha: 0,
    scale: 0.92,
    stagger: { amount: 0.26, from: "center" },
    delay: 0.08,
    clearProps: "visibility"
  });
  gsap.from(".mode-tabs", { autoAlpha: 0, delay: 0.18 });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

issueSelect.addEventListener("change", (event) => {
  state.issueId = event.target.value;
  const issue = getCurrentIssue();
  issueLabel.textContent = issue.range;
  state.activeIndex = 0;
  renderCards();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") setActiveIndex(state.activeIndex + 1);
  if (event.key === "ArrowLeft") setActiveIndex(state.activeIndex - 1);
});

window.addEventListener("resize", () => {
  const nextIsMobile = window.matchMedia("(max-width: 760px)").matches;
  state.isMobile = nextIsMobile;
  layoutCards(true);
});

if (window.gsap) {
  const mm = gsap.matchMedia();
  mm.add(
    {
      isMobile: "(max-width: 760px)",
      reduceMotion: "(prefers-reduced-motion: reduce)"
    },
    (context) => {
      state.isMobile = context.conditions.isMobile;
      state.reduceMotion = context.conditions.reduceMotion;
      layoutCards(true);
    }
  );
}

setMode("featured", false);
bootAnimation();
