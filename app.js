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
      },
      {
        title: "ITom Dev 3D Gallery",
        category: "创意开发案例",
        score: "14/15",
        coverImage: "./assets/covers/itom-gallery.jpg",
        visualLabel: "3D Corridor",
        summary: "把作品集导航做成一条可探索的手绘 3D 走廊，让项目入口成为空间叙事的一部分。",
        description:
          "这个作品集用 WebGL、Three.js、React Three Fiber 和 GSAP 构成可交互场景，并以门、展厅和走廊承载作品、简介与联系入口。它提供了一个有完成度的样本，用来研究沉浸式视觉如何仍然服务于信息架构。",
        action: "先把一个普通作品集的信息拆成“入口、项目、关于、联系”四个空间节点，再判断哪些交互能提升探索感，哪些必须保留直接可见的文字入口。",
        url: "https://itomdev.com/gallery"
      }
    ]
  }
];

const state = {
  mode: "featured",
  layoutMode: "stack",
  issueId: "all",
  activeIndex: 0,
  profileTab: "published",
  session: null,
  sessionState: "loading",
  favoriteIds: new Set(),
  publications: [],
  commentCounts: new Map(),
  comments: [],
  commentResource: null,
  replyingTo: null,
  commentsState: "idle",
  reduceMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  isMobile: window.matchMedia("(max-width: 760px)").matches
};

const carousel = document.querySelector("#carousel");
const pageTitle = document.querySelector("#pageTitle");
const issueLabel = document.querySelector("#issueLabel");
const viewControls = document.querySelector("#viewControls");
const issueFilter = document.querySelector("#issueFilter");
const issueFilterButton = document.querySelector("#issueFilterButton");
const issueFilterValue = document.querySelector("#issueFilterValue");
const issueMenu = document.querySelector("#issueMenu");
const layoutToggle = document.querySelector("#layoutToggle");
const appShell = document.querySelector(".app-shell");
const stage = document.querySelector(".stage");
const tabButtons = [...document.querySelectorAll(".tab-button")];
const profileView = document.querySelector("#profileView");
const profileButton = document.querySelector("#profileButton");
const profileAvatar = document.querySelector("#profileAvatar");
const profileAvatarInitials = document.querySelector("#profileAvatarInitials");
const profileIdentityAvatar = document.querySelector("#profileIdentityAvatar");
const profileName = document.querySelector("#profileName");
const profileEmail = document.querySelector("#profileEmail");
const profileContent = document.querySelector("#profileContent");
const publishedCount = document.querySelector("#publishedCount");
const favoritesCount = document.querySelector("#favoritesCount");
const profileTabButtons = [...document.querySelectorAll(".profile-tab")];
const featuredCommentButton = document.querySelector("#featuredCommentButton");
const commentLayer = document.querySelector("#commentLayer");
const commentClose = document.querySelector("#commentClose");
const commentResourceLabel = document.querySelector("#commentResourceLabel");
const commentDrawerTitle = document.querySelector("#commentDrawerTitle");
const commentList = document.querySelector("#commentList");
const commentForm = document.querySelector("#commentForm");
const commentInput = document.querySelector("#commentInput");
const commentSubmit = document.querySelector("#commentSubmit");
const replyingTo = document.querySelector("#replyingTo");
const replyingToText = document.querySelector("#replyingToText");
const cancelReply = document.querySelector("#cancelReply");

function getLatestIssue() {
  return issues[issues.length - 1];
}

function getSelectedIssue() {
  return issues.find((issue) => issue.id === state.issueId) || getLatestIssue();
}

function getAllResources() {
  return [...issues].reverse().flatMap((issue) => issue.resources);
}

function getResourceId(resource) {
  return resource.title;
}

function getResourceById(resourceId) {
  return getAllResources().find((resource) => getResourceId(resource) === resourceId);
}

function getCurrentResources() {
  if (state.mode === "featured") return getLatestIssue().resources;
  if (state.issueId === "all") return getAllResources();
  return getSelectedIssue().resources;
}

function getCurrentRange() {
  if (state.mode === "featured") return getLatestIssue().range;
  if (state.issueId === "all") return `全部期次 / ${getAllResources().length} 个案例`;
  return getSelectedIssue().range;
}

function getDisplayInitials(name) {
  const cleanName = (name || "").trim();
  if (!cleanName) return "";
  return [...cleanName].slice(0, 2).join("").toUpperCase();
}

function setIdentityAvatar(container, session) {
  container.innerHTML = "";
  if (session.avatar) {
    const image = document.createElement("img");
    image.src = session.avatar;
    image.alt = "";
    image.referrerPolicy = "no-referrer";
    container.appendChild(image);
    return;
  }

  const initials = document.createElement("span");
  initials.className = "avatar-initials";
  initials.textContent = getDisplayInitials(session.displayName);
  container.appendChild(initials);
}

function updateSessionUI() {
  const placeholder = profileButton.querySelector(".profile-avatar-placeholder");
  const ready = state.sessionState === "ready" && state.session;

  profileAvatar.hidden = true;
  profileAvatarInitials.textContent = "";
  profileAvatarInitials.hidden = true;
  placeholder.hidden = ready;

  if (!ready) {
    profileName.textContent = state.sessionState === "loading" ? "正在识别成员信息" : "请在 Cowork 内部版本登录";
    profileEmail.textContent = "";
    return;
  }

  const { avatar, displayName, email } = state.session;
  profileName.textContent = displayName;
  profileEmail.textContent = email || "";
  profileButton.setAttribute("aria-label", `进入 ${displayName} 的个人页面`);

  if (avatar) {
    profileAvatar.src = avatar;
    profileAvatar.alt = `${displayName}的头像`;
    profileAvatar.referrerPolicy = "no-referrer";
    profileAvatar.hidden = false;
  } else {
    profileAvatarInitials.textContent = getDisplayInitials(displayName);
    profileAvatarInitials.hidden = false;
  }

  setIdentityAvatar(profileIdentityAvatar, state.session);
}

async function requestJson(path, options = {}) {
  const response = await fetch(path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });

  if (!response.ok) {
    throw new Error(`request failed: ${response.status}`);
  }

  if (response.status === 204) return null;
  return response.json();
}

async function loadMemberData() {
  try {
    state.session = await requestJson("/api/session/me");
    state.sessionState = "ready";
    updateSessionUI();

    const [favoritesPayload, publicationsPayload, commentCountsPayload] = await Promise.all([
      requestJson("/api/favorites"),
      requestJson("/api/publications"),
      requestJson("/api/comment-counts")
    ]);
    state.favoriteIds = new Set(favoritesPayload.resourceIds || []);
    state.publications = publicationsPayload.publications || [];
    state.commentCounts = new Map(Object.entries(commentCountsPayload.counts || {}));
    syncFavoriteButtons();
    syncCommentButtons();
    renderProfile();
  } catch (error) {
    state.sessionState = "unavailable";
    updateSessionUI();
    renderProfile();
  }
}

async function toggleFavorite(resource, button) {
  if (state.sessionState !== "ready") {
    setMode("profile");
    return;
  }

  const resourceId = getResourceId(resource);
  const wasFavorite = state.favoriteIds.has(resourceId);
  button.disabled = true;

  try {
    await requestJson(`/api/favorites/${encodeURIComponent(resourceId)}`, {
      method: wasFavorite ? "DELETE" : "POST"
    });
    if (wasFavorite) {
      state.favoriteIds.delete(resourceId);
    } else {
      state.favoriteIds.add(resourceId);
    }
    syncFavoriteButtons();
    renderProfile();
  } finally {
    button.disabled = false;
  }
}

function updateFavoriteButton(button, resourceId) {
  const selected = state.favoriteIds.has(resourceId);
  button.classList.toggle("is-saved", selected);
  button.setAttribute("aria-pressed", String(selected));
  button.setAttribute("aria-label", selected ? "取消收藏" : "收藏案例");
  button.title = selected ? "取消收藏" : "收藏案例";
}

function syncFavoriteButtons() {
  document.querySelectorAll(".favorite-button").forEach((button) => {
    updateFavoriteButton(button, button.dataset.resourceId);
  });
  favoritesCount.textContent = String(state.favoriteIds.size);
  publishedCount.textContent = String(state.publications.length);
}

function updateCommentButton(button, resourceId) {
  const count = Number(state.commentCounts.get(resourceId) || 0);
  const badge = button.querySelector(".comment-count");
  badge.textContent = count > 99 ? "99+" : String(count);
  badge.hidden = count === 0;
  button.setAttribute("aria-label", count ? `查看 ${count} 条评论` : "查看评论");
}

function syncCommentButtons() {
  const resource =
    state.mode === "featured" ? getCurrentResources()[state.activeIndex] : null;
  if (!resource) {
    featuredCommentButton.dataset.resourceId = "";
    return;
  }

  const resourceId = getResourceId(resource);
  featuredCommentButton.dataset.resourceId = resourceId;
  updateCommentButton(featuredCommentButton, resourceId);
}

function makeProfileResourceCard(resource, options = {}) {
  const article = document.createElement("article");
  article.className = "profile-resource-card";

  const image = document.createElement("img");
  image.src = resource.coverImage;
  image.alt = `${resource.title} 原始页面截图`;
  image.loading = "lazy";
  article.appendChild(image);

  const body = document.createElement("div");
  body.className = "profile-resource-body";

  const meta = document.createElement("span");
  meta.className = "category";
  meta.textContent = resource.category || "设计资源";

  const title = document.createElement("h3");
  title.textContent = resource.title;

  const summary = document.createElement("p");
  summary.textContent = resource.summary || "";

  const actions = document.createElement("div");
  actions.className = "profile-resource-actions";

  const openLink = document.createElement("a");
  openLink.href = resource.url;
  openLink.target = "_blank";
  openLink.rel = "noreferrer";
  openLink.textContent = "查看案例";
  actions.appendChild(openLink);

  if (options.removable) {
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "取消收藏";
    removeButton.addEventListener("click", () => toggleFavorite(resource, removeButton));
    actions.appendChild(removeButton);
  }

  body.append(meta, title, summary, actions);
  article.appendChild(body);
  return article;
}

function renderProfileEmpty(title, description) {
  const empty = document.createElement("div");
  empty.className = "profile-empty";

  const heading = document.createElement("h3");
  heading.textContent = title;

  const copy = document.createElement("p");
  copy.textContent = description;

  empty.append(heading, copy);
  profileContent.replaceChildren(empty);
}

function renderProfile() {
  syncFavoriteButtons();
  profileTabButtons.forEach((button) => {
    const selected = button.dataset.profileTab === state.profileTab;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-selected", String(selected));
  });

  if (state.sessionState === "loading") {
    renderProfileEmpty("正在读取个人资源库", "成员信息确认后会显示你的发布和收藏。");
    return;
  }

  if (state.sessionState !== "ready") {
    renderProfileEmpty("需要内部身份", "请从 Cowork 内部访问地址打开，系统会自动识别你的 Hi 头像和成员身份。");
    return;
  }

  const resources =
    state.profileTab === "favorites"
      ? [...state.favoriteIds].map(getResourceById).filter(Boolean)
      : state.publications;

  if (!resources.length) {
    renderProfileEmpty(
      state.profileTab === "favorites" ? "还没有收藏案例" : "还没有发布内容",
      state.profileTab === "favorites"
        ? "在案例卡片右上角点击收藏图标，内容会保存在这里。"
        : "你发布到资源库的内容会按时间显示在这里。"
    );
    return;
  }

  const grid = document.createElement("div");
  grid.className = "profile-grid";
  resources.forEach((resource) => {
    grid.appendChild(makeProfileResourceCard(resource, { removable: state.profileTab === "favorites" }));
  });
  profileContent.replaceChildren(grid);
}

function formatCommentTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString("zh-CN", {
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function createCommentAvatar(comment) {
  const avatar = document.createElement("div");
  avatar.className = "comment-avatar";
  if (comment.avatar) {
    const image = document.createElement("img");
    image.src = comment.avatar;
    image.alt = "";
    image.referrerPolicy = "no-referrer";
    avatar.appendChild(image);
  } else {
    avatar.textContent = getDisplayInitials(comment.displayName);
  }
  return avatar;
}

function startReply(comment) {
  state.replyingTo = comment;
  replyingTo.classList.remove("is-hidden");
  replyingToText.textContent = `回复 ${comment.displayName}`;
  commentInput.placeholder = `回复 ${comment.displayName}`;
  commentInput.focus();
}

function clearReply() {
  state.replyingTo = null;
  replyingTo.classList.add("is-hidden");
  replyingToText.textContent = "";
  commentInput.placeholder = "写下你的看法";
}

function createCommentItem(comment, childrenByParent, depth = 0) {
  const wrapper = document.createElement("div");
  wrapper.className = "comment-thread";
  if (depth > 0) wrapper.classList.add("is-reply");

  const item = document.createElement("article");
  item.className = "comment-item";

  const body = document.createElement("div");
  body.className = "comment-body";

  const meta = document.createElement("div");
  meta.className = "comment-meta";

  const name = document.createElement("strong");
  name.textContent = comment.displayName;

  const time = document.createElement("time");
  time.dateTime = comment.createdAt;
  time.textContent = formatCommentTime(comment.createdAt);

  const content = document.createElement("p");
  content.textContent = comment.content;

  const replyButton = document.createElement("button");
  replyButton.className = "comment-reply";
  replyButton.type = "button";
  replyButton.textContent = "回复";
  replyButton.addEventListener("click", () => startReply(comment));

  meta.append(name, time);
  body.append(meta, content, replyButton);
  item.append(createCommentAvatar(comment), body);
  wrapper.appendChild(item);

  const children = childrenByParent.get(String(comment.id)) || [];
  children.forEach((child) => {
    wrapper.appendChild(createCommentItem(child, childrenByParent, depth + 1));
  });
  return wrapper;
}

function renderCommentMessage(title, description) {
  const empty = document.createElement("div");
  empty.className = "comment-empty";
  const heading = document.createElement("h3");
  heading.textContent = title;
  const copy = document.createElement("p");
  copy.textContent = description;
  empty.append(heading, copy);
  commentList.replaceChildren(empty);
}

function renderComments() {
  if (state.commentsState === "loading") {
    renderCommentMessage("正在读取评论", "评论加载后会显示在这里。");
    return;
  }

  if (state.commentsState === "unavailable") {
    renderCommentMessage("需要内部身份", "请从 Cowork 内部版本打开，系统会自动识别你的 Hi 身份。");
    return;
  }

  if (!state.comments.length) {
    renderCommentMessage("还没有评论", "成为第一个分享看法的人。");
    return;
  }

  const childrenByParent = new Map();
  const roots = [];
  state.comments.forEach((comment) => {
    if (comment.parentId == null) {
      roots.push(comment);
      return;
    }
    const key = String(comment.parentId);
    if (!childrenByParent.has(key)) childrenByParent.set(key, []);
    childrenByParent.get(key).push(comment);
  });

  const fragment = document.createDocumentFragment();
  roots.forEach((comment) => {
    fragment.appendChild(createCommentItem(comment, childrenByParent));
  });
  commentList.replaceChildren(fragment);
}

async function loadComments(resource) {
  state.commentsState = "loading";
  renderComments();

  if (state.sessionState !== "ready") {
    state.commentsState = "unavailable";
    renderComments();
    return;
  }

  try {
    const resourceId = getResourceId(resource);
    const payload = await requestJson(`/api/comments/${encodeURIComponent(resourceId)}`);
    state.comments = payload.comments || [];
    state.commentsState = "ready";
    state.commentCounts.set(resourceId, Number(payload.count || state.comments.length));
    syncCommentButtons();
    renderComments();
  } catch (error) {
    state.commentsState = "unavailable";
    renderComments();
  }
}

function openComments(resource) {
  state.commentResource = resource;
  state.comments = [];
  clearReply();
  commentInput.value = "";
  commentResourceLabel.textContent = resource.category;
  commentDrawerTitle.textContent = resource.title;
  commentLayer.classList.add("is-open");
  commentLayer.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-comment-open");
  appShell.classList.add("is-comments-expanded");
  document.querySelectorAll(".comment-button").forEach((button) => {
    button.setAttribute(
      "aria-expanded",
      String(button.dataset.resourceId === getResourceId(resource))
    );
  });
  const canComment = state.sessionState === "ready";
  commentInput.disabled = !canComment;
  commentSubmit.disabled = !canComment;
  loadComments(resource);
  requestAnimationFrame(() => {
    commentLayer.scrollIntoView({
      behavior: state.reduceMotion ? "auto" : "smooth",
      block: "nearest"
    });
  });
}

function closeComments() {
  commentLayer.classList.remove("is-open");
  commentLayer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-comment-open");
  appShell.classList.remove("is-comments-expanded");
  document.querySelectorAll(".comment-button").forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });
  clearReply();
}

async function submitComment(event) {
  event.preventDefault();
  if (state.sessionState !== "ready" || !state.commentResource) return;

  const content = commentInput.value.trim();
  if (!content) {
    commentInput.focus();
    return;
  }

  commentSubmit.disabled = true;
  try {
    const resourceId = getResourceId(state.commentResource);
    await requestJson(`/api/comments/${encodeURIComponent(resourceId)}`, {
      method: "POST",
      body: JSON.stringify({
        content,
        parentId: state.replyingTo?.id ?? null
      })
    });
    commentInput.value = "";
    clearReply();
    await loadComments(state.commentResource);
    commentList.scrollTo({ top: commentList.scrollHeight, behavior: "smooth" });
  } finally {
    commentSubmit.disabled = false;
  }
}

function closeIssueMenu() {
  issueMenu.classList.remove("is-open");
  issueFilterButton.setAttribute("aria-expanded", "false");
}

function updateIssueFilterUI() {
  const allSelected = state.issueId === "all";
  const selectedIssue = allSelected ? null : getSelectedIssue();
  issueFilterValue.textContent = allSelected ? "全部" : selectedIssue.label;

  issueMenu.querySelectorAll(".issue-option").forEach((option) => {
    const selected = option.dataset.issueId === state.issueId;
    option.classList.toggle("is-selected", selected);
    option.setAttribute("aria-selected", String(selected));
  });
}

function renderIssueMenu() {
  const options = [
    {
      id: "all",
      label: "全部",
      meta: `${getAllResources().length} 个案例`
    },
    ...[...issues].reverse().map((issue) => ({
      id: issue.id,
      label: issue.label,
      meta: `${issue.resources.length} 个案例`
    }))
  ];

  issueMenu.innerHTML = options
    .map(
      (option) => `
        <button
          class="issue-option"
          type="button"
          role="option"
          data-issue-id="${option.id}"
          aria-selected="false"
        >
          <span>${option.label}</span>
          <small>${option.meta}</small>
        </button>
      `
    )
    .join("");

  issueMenu.querySelectorAll(".issue-option").forEach((option) => {
    option.addEventListener("click", () => {
      state.issueId = option.dataset.issueId;
      state.activeIndex = 0;
      issueLabel.textContent = getCurrentRange();
      updateIssueFilterUI();
      closeIssueMenu();
      renderCards();
    });
  });

  updateIssueFilterUI();
}

function isMasonryMode() {
  return state.mode === "all" && state.layoutMode === "masonry";
}

function updateLayoutUI() {
  const masonry = isMasonryMode();
  document.body.classList.toggle("is-masonry-view", masonry);
  appShell.classList.toggle("is-masonry-view", masonry);
  stage.classList.toggle("is-masonry-view", masonry);
  carousel.classList.toggle("is-masonry-view", masonry);
  layoutToggle.classList.toggle("is-masonry-active", masonry);
  layoutToggle.setAttribute("aria-pressed", String(masonry));

  const label = masonry ? "切换为叠放排列" : "切换为瀑布流排列";
  layoutToggle.setAttribute("aria-label", label);
  layoutToggle.title = label;
}

function animateCardHover(card, index, hovered) {
  if (!window.gsap || state.reduceMotion || state.isMobile || card.getAttribute("aria-hidden") === "true") return;

  if (isMasonryMode()) {
    card.classList.toggle("is-hovered", hovered);
    gsap.to(card, {
      y: hovered ? -6 : 0,
      scale: hovered ? 1.01 : 1,
      duration: hovered ? 0.22 : 0.28,
      ease: "power2.out",
      overwrite: "auto"
    });
    return;
  }

  const total = getCurrentResources().length;
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
      <button class="favorite-button" type="button" aria-label="收藏案例" aria-pressed="false">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z"></path>
        </svg>
      </button>
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

  const favoriteButton = article.querySelector(".favorite-button");
  favoriteButton.dataset.resourceId = getResourceId(resource);
  updateFavoriteButton(favoriteButton, getResourceId(resource));
  favoriteButton.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleFavorite(resource, favoriteButton);
  });

  article.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) return;
    if (isMasonryMode()) return;
    setActiveIndex(index);
  });

  article.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      if (isMasonryMode()) return;
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
  const resources = getCurrentResources();
  carousel.innerHTML = "";
  resources.forEach((resource, index) => {
    carousel.appendChild(makeCard(resource, index));
  });
  syncCommentButtons();
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
  updateLayoutUI();

  if (isMasonryMode()) {
    cards.forEach((card) => {
      card.classList.remove("is-side", "is-far", "is-hovered");
      card.dataset.active = "false";
      card.setAttribute("aria-hidden", "false");
      card.tabIndex = -1;
      card.style.zIndex = "";
    });

    if (window.gsap) {
      gsap.killTweensOf(cards);
      gsap.set(cards, { clearProps: "transform,opacity,visibility" });
    } else {
      cards.forEach((card) => {
        card.style.transform = "";
        card.style.opacity = "";
        card.style.visibility = "";
      });
    }
    return;
  }

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
    card.dataset.active = String(distance === 0);
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
  if (isMasonryMode()) return;
  if (commentLayer.classList.contains("is-open")) closeComments();
  const total = getCurrentResources().length;
  state.activeIndex = (index + total) % total;
  syncCommentButtons();
  layoutCards();
}

function setMode(mode, animate = true) {
  if (commentLayer.classList.contains("is-open")) closeComments();
  state.mode = mode;
  state.activeIndex = 0;
  const profileMode = mode === "profile";
  appShell.classList.toggle("is-featured-mode", mode === "featured");

  profileView.classList.toggle("is-hidden", !profileMode);
  stage.classList.toggle("is-hidden", profileMode);
  profileButton.classList.toggle("is-active", profileMode);

  if (profileMode) {
    pageTitle.textContent = "我的";
    issueLabel.textContent = "个人资源库";
    viewControls.classList.add("is-hidden");
    tabButtons.forEach((button) => button.classList.remove("is-active"));
    updateLayoutUI();
    renderProfile();
    if (animate && window.gsap && !state.reduceMotion) {
      gsap.fromTo(
        [pageTitle, profileView],
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.42, ease: "power2.out", stagger: 0.05, overwrite: "auto" }
      );
    }
    return;
  }

  if (mode === "all") state.issueId = "all";
  pageTitle.textContent = mode === "featured" ? "本期精选" : "所有案例";
  issueLabel.textContent = getCurrentRange();
  updateIssueFilterUI();
  closeIssueMenu();
  viewControls.classList.toggle("is-hidden", mode !== "all");
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

function setLayoutMode(layoutMode) {
  const cards = [...carousel.querySelectorAll(".resource-card")];
  const applyLayout = () => {
    state.layoutMode = layoutMode;
    layoutCards(true);

    if (window.gsap && !state.reduceMotion) {
      if (isMasonryMode()) {
        gsap.fromTo(
          cards,
          { autoAlpha: 0, y: 14 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.38,
            ease: "power2.out",
            stagger: { amount: 0.16, from: "start" },
            overwrite: "auto",
            clearProps: "transform,opacity,visibility"
          }
        );
      } else {
        const visibleCards = cards.filter((card) => card.getAttribute("aria-hidden") === "false");
        gsap.fromTo(
          visibleCards,
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            duration: 0.38,
            ease: "power2.out",
            stagger: { amount: 0.16, from: "center" },
            overwrite: "auto",
            clearProps: "opacity,visibility"
          }
        );
      }
    }
  };

  if (window.gsap && !state.reduceMotion) {
    gsap.to(cards, {
      autoAlpha: 0,
      y: 8,
      duration: 0.16,
      ease: "power1.in",
      stagger: { amount: 0.08, from: "center" },
      overwrite: "auto",
      onComplete: applyLayout
    });
  } else {
    applyLayout();
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
  gsap.from(".bottom-dock", { autoAlpha: 0, delay: 0.18 });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

profileButton.addEventListener("click", () => setMode("profile"));

featuredCommentButton.addEventListener("click", () => {
  const resource = getCurrentResources()[state.activeIndex];
  if (commentLayer.classList.contains("is-open")) {
    closeComments();
    return;
  }
  if (state.mode === "featured" && resource) openComments(resource);
});

profileTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.profileTab = button.dataset.profileTab;
    renderProfile();
  });
});

issueFilterButton.addEventListener("click", () => {
  const open = !issueMenu.classList.contains("is-open");
  issueMenu.classList.toggle("is-open", open);
  issueFilterButton.setAttribute("aria-expanded", String(open));
});

document.addEventListener("click", (event) => {
  if (!issueFilter.contains(event.target)) closeIssueMenu();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (commentLayer.classList.contains("is-open")) {
      closeComments();
      return;
    }
    closeIssueMenu();
    issueFilterButton.focus();
  }
});

commentClose.addEventListener("click", closeComments);
cancelReply.addEventListener("click", clearReply);
commentForm.addEventListener("submit", submitComment);

layoutToggle.addEventListener("click", () => {
  setLayoutMode(state.layoutMode === "masonry" ? "stack" : "masonry");
});

window.addEventListener("keydown", (event) => {
  if (isMasonryMode() || state.mode === "profile") return;
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

renderIssueMenu();
setMode("featured", false);
updateSessionUI();
renderProfile();
loadMemberData();
bootAnimation();
