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
        category: "创意动效网站",
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
  },
  {
    id: "2026-W31",
    label: "第三期（7.22-7.29）",
    range: "2026-W31 / 7.22-7.29",
    resources: [
      {
        title: "Lunagraph",
        category: "AI 设计到代码",
        score: "15/15",
        coverImage: "./assets/covers/lunagraph.jpg",
        visualLabel: "Code-native Canvas",
        summary: "在熟悉的设计画布里直接编辑真实 React、HTML 和 CSS，让设计与代码保持同一份源文件。",
        description:
          "Lunagraph 将画布元素直接映射为 React 组件，并让 Claude Code 读取和修改同一代码库。它支持在画布与代码间双向调整、沿用现有组件和设计 Token，适合观察“零交接”并不等于省略设计，而是把设计判断直接落到可运行界面。",
        action: "选一个已有页面，把按钮、卡片和 Token 接入同一代码项目；分别从画布和代码修改一次，再检查响应式、组件复用和最终提交是否保持一致。",
        url: "https://www.lunagraph.com/"
      },
      {
        title: "Motionly",
        category: "开源 AI 动效",
        score: "15/15",
        coverImage: "./assets/covers/motionly.jpg",
        visualLabel: "Editable .motion",
        summary: "让 AI 生成可检查、可版本化的 .motion 工程，而不是只交付一段无法继续编辑的视频。",
        description:
          "Motionly 用结构化 .motion 文件保存场景、时间线、素材、缓动和转场，设计师可以在画布或代码中继续修改。项目已开源，并在本期持续更新编辑器和 AI 能力；当前仍由自身运行时渲染，Lottie 等通用格式导出还在探索。",
        action: "用一段 5 秒产品功能动效测试 AI 初稿，手动修改一个关键帧、缓动和文字样式，再比较文件差异是否足够清晰，能否进入团队版本管理。",
        url: "https://www.motionly.site/"
      },
      {
        title: "Rechroma",
        category: "色彩系统工具",
        score: "14/15",
        coverImage: "./assets/covers/rechroma.jpg",
        visualLabel: "OKLCH Tokens",
        summary: "从一张图片或一个颜色建立 OKLCH 色阶，校验对比度并同步为 Figma 变量与代码 Token。",
        description:
          "Rechroma 不只生成几枚色卡，而是把颜色扩展为完整明度阶、语义角色和可访问性检查，并提供情境预览。免费版可完成配色与对比度判断，Pro 才包含工作区保存、Figma 变量同步和 CSS、SCSS、PDF 导出。",
        action: "导入一个品牌主色，先生成 10–99 的色阶，再为背景、文字、边框和状态色分配角色；用同一组 Token 同步到 Figma 与 CSS，检查命名和对比度是否一致。",
        url: "https://rechroma.com/"
      },
      {
        title: "AVE",
        category: "本地 AI 视频工作流",
        score: "15/15",
        coverImage: "./assets/covers/ave.jpg",
        visualLabel: "Reviewable Timeline",
        summary: "先让 AI 生成可审阅的剪辑计划，确认后再落到真实时间线，素材和导出默认留在本机。",
        description:
          "AVE 将 Ask 与 Plan 分开：小问题直接查询，多步骤剪辑先展示计划，再由用户批准实际剪切、字幕、转场和多尺寸序列。它保留完整非线性时间线，并可通过 MCP 连接 Codex 或 Claude Code；目前仅支持 Apple Silicon 与 macOS 14 以上。",
        action: "导入一段产品录屏，要求它生成 30 秒竖屏版本；在执行前逐项检查选段、节奏、字幕和画幅计划，再批准并核对每个时间线改动是否可回退。",
        url: "https://www.aivideoeditor.app/"
      },
      {
        title: "House of Yellow",
        category: "动效作品集",
        score: "14/15",
        coverImage: "./assets/covers/house-of-yellow.webp",
        visualLabel: "Motion Portfolio",
        summary: "用连续运动和全屏影像组织案例，同时把播放量与交付周期放进作品信息，而不只展示效果图。",
        description:
          "House of Yellow 把品牌片、商业内容和 3D 动画做成连续的滚动叙事，案例入口同时呈现项目类型、观看量和制作周期。它适合研究作品集如何把视觉冲击与可比较的项目事实并置，让浏览者快速判断规模、节奏和交付能力。",
        action: "选一个近期项目，除了主视觉再补充项目类型、周期和一个可验证结果；把三项信息与案例入口放在同一屏，测试读者是否能在十秒内理解项目价值。",
        url: "https://houseofyellow.nl/"
      }
    ]
  },
  {
    id: "2026-W32",
    label: "第四期（7.29-8.5）",
    range: "2026-W32 / 7.29-8.5",
    resources: [
      {
        title: "Working Volumes",
        category: "创意交互网站",
        score: "15/15",
        coverImage: "./assets/covers/working-volumes.png",
        visualLabel: "Interactive Library",
        summary: "把七种创作工具做成可翻阅、可旋转的布面书册，让工具介绍成为一段空间化探索。",
        description:
          "这个 Three.js 互动书架把 Codex 等七种创作工具整理成一套可触摸感很强的 field guide。用户可以旋转书架、打开书封并浏览每本书的定位与主题；材质、字体和空间交互保持统一，同时仍保留直接可见的书名与操作提示。",
        action: "选择一组工具或作品，把每项压缩成“一句定位、三个主题、关键属性”三层；再用统一容器和直接导航测试探索感是否影响信息查找。",
        url: "https://mengto.github.io/complete-shelf/"
      },
      {
        title: "Brik",
        category: "AI 设计系统",
        score: "15/15",
        coverImage: "./assets/covers/brik.png",
        visualLabel: "Living Design Tools",
        summary: "把一次性视觉生成转成可复用、可交互和可导出的设计工具，持续沉淀为个人系统。",
        description:
          "Brik 允许用户从描述或素材开始构建图像特效、动态字体、3D 场景、画廊和 Logo 动效，再把结果保留为可继续修改的工具。它更值得关注的不是单次生成，而是如何把风格规则和交互参数变成可复用系统。",
        action: "选一个经常重复制作的视觉效果，先定义输入素材、可调参数和导出格式，再判断它是否值得沉淀成团队可复用工具。",
        url: "https://brik.space/Home"
      },
      {
        title: "The Tie-break",
        category: "互动叙事案例",
        score: "15/15",
        coverImage: "./assets/covers/the-tie-break.png",
        visualLabel: "Interactive Editorial",
        summary: "把网球对打变成浏览联名系列的互动入口，让每次得分同时推进游戏和内容揭示。",
        description:
          "Merci-Michel 为 New Balance × Miu Miu 与 Coco Gauff 制作了这段实时互动体验。页面没有把运动机制当作装饰：发球、回击和计分承担浏览节奏，得分后逐步解锁造型内容；克制的界面层级、颗粒材质和连贯转场让品牌叙事始终处于中心。",
        action: "选择一个需要逐步揭示的产品系列，把内容拆成“进入、操作、反馈、解锁”四个状态；先用简单点击原型验证每次操作是否确实带来新信息，再考虑加入复杂动效。",
        url: "https://thetiebreak.merci-michel.com/eu/en/"
      },
      {
        title: "Canvas UI",
        category: "开源交互组件",
        score: "15/15",
        coverImage: "./assets/covers/canvas-ui.png",
        visualLabel: "WebGL Components",
        summary: "提供可直接复制源码的 WebGL 与 Canvas 交互组件，并覆盖六种前端框架。",
        description:
          "Canvas UI 收录 30 多个可现场体验的视觉组件，包括玻璃折射、粒子揭示、布料、液体和 3D 破碎效果。组件通过 shadcn 协议进入项目，支持 React、Vue、Svelte 等六种实现，并为不支持实验能力的浏览器提供降级方案。",
        action: "从一个组件开始，只替换到非核心视觉区；同时检查移动端、减少动效偏好、离屏暂停和降级状态，再决定是否用于正式页面。",
        url: "https://canvasui.dev/"
      },
      {
        title: "Notate",
        category: "原型反馈工具",
        score: "15/15",
        coverImage: "./assets/covers/notate.png",
        visualLabel: "Screen Annotation",
        summary: "冻结 hover、焦点和动效帧后直接落点批注，并把编号反馈导出给同事或 Coding Agent。",
        description:
          "Notate 面向设计评审和开发协作：它可以冻结当前屏幕或录制一段过程，在任意帧添加编号、箭头和形状，再导出带路径的 Markdown 或合成图片。批注会保存在可重新打开的会话中，同时提供 CLI、Skill 与 MCP 接口，适合把视觉问题直接交给开发代理处理。",
        action: "选一个包含 hover 或动效的页面，冻结最容易描述不清的状态并添加三条编号反馈；导出 Markdown 交给同事或 Coding Agent，比较它与纯文字说明的沟通成本。",
        url: "https://usenotate.app/"
      },
      {
        title: "Flodesk Studio",
        category: "AI 邮件设计",
        score: "14/15",
        coverImage: "./assets/covers/flodesk-studio.png",
        visualLabel: "On-brand Email",
        summary: "从品牌资料和一句提示生成三种邮件方向，再通过对话或手动编辑继续收敛。",
        description:
          "Flodesk Studio 是独立的 AI 邮件设计工具。它先读取品牌与内容，再给出三个经过人工设计模板约束的方向；用户既可以继续对话修改，也可以直接调整模块和控件，最后导出 HTML 或进入 Flodesk 发送。",
        action: "用同一封活动邮件生成三种方向，重点比较品牌一致性、移动端层级和 CTA 清晰度，而不是只选择最吸睛的版式。",
        url: "https://studio.flodesk.com/"
      },
      {
        title: "animos",
        category: "设计动效工具",
        score: "14/15",
        coverImage: "./assets/covers/animos.png",
        visualLabel: "Browser Motion",
        summary: "把静态设计或视频放进预设动效模板，在浏览器里快速导出作品展示片段。",
        description:
          "animos 提供 25 个循环动效模板，支持图片和视频替换、比例调整，并能直接导出 MP4 或 WebM。免费版本可导出 720p，付费版本覆盖 1080p 到 8K，适合发布页、作品集、社交媒体和产品更新素材。",
        action: "选一张近期界面，分别导出横版、方形和竖版；检查动效是否帮助理解界面重点，而不是让展示模板抢走内容本身。",
        url: "https://animos.app/"
      }
    ]
  }
];

const filterTaxonomy = [
  {
    id: "product",
    label: "产品与体验",
    tags: [
      { id: "business", label: "B 端与业务" },
      { id: "prototype", label: "原型反馈" },
      { id: "system", label: "体验与系统" }
    ]
  },
  {
    id: "visual",
    label: "视觉与内容",
    tags: [
      { id: "production", label: "视觉生产" },
      { id: "brand", label: "品牌与创意" },
      { id: "showcase", label: "创意网站与作品集" }
    ]
  },
  {
    id: "motion",
    label: "动效与 3D",
    tags: [
      { id: "animation", label: "动效制作" },
      { id: "spatial", label: "3D 生成与资产" },
      { id: "video", label: "视频工作流" }
    ]
  },
  {
    id: "delivery",
    label: "开发与交付",
    tags: [
      { id: "code", label: "设计到代码" },
      { id: "handoff", label: "交付与展示" },
      { id: "opensource", label: "开源工具" }
    ]
  },
  {
    id: "workflow",
    label: "工作流与协作",
    tags: [
      { id: "ai-workflow", label: "AI 工作流" },
      { id: "canvas", label: "创意画布" },
      { id: "collaboration", label: "协作评审" }
    ]
  }
];

const filterScopeIcons = {
  all: `
    <svg class="category-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
      <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
      <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
      <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
    </svg>
  `,
  product: `
    <svg class="category-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2"></rect>
      <path d="M3 9h18M9 21V9"></path>
    </svg>
  `,
  visual: `
    <svg class="category-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <path d="m21 15-5-5L5 21"></path>
    </svg>
  `,
  motion: `
    <svg class="category-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 9 5-9 5-9-5 9-5Z"></path>
      <path d="m3 8 9 5 9-5v8l-9 5-9-5V8Z"></path>
      <path d="M12 13v8"></path>
    </svg>
  `,
  delivery: `
    <svg class="category-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="m18 8 4 4-4 4M6 8l-4 4 4 4M14.5 4l-5 16"></path>
    </svg>
  `,
  workflow: `
    <svg class="category-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="6" height="6" rx="1"></rect>
      <rect x="15" y="15" width="6" height="6" rx="1"></rect>
      <path d="M9 6h6a3 3 0 0 1 3 3v6M15 18H9a3 3 0 0 1-3-3V9"></path>
    </svg>
  `
};

const resourceFilterAssignments = {
  "Warehouse Management": ["product", "business"],
  Vela: ["visual", "brand"],
  Motion: ["motion", "animation"],
  Framed: ["delivery", "handoff"],
  OpenPencil: ["delivery", "opensource"],
  "Genspark 6.0": ["workflow", "ai-workflow"],
  "Loova Ads Studio": ["visual", "production"],
  V2Fun: ["motion", "spatial"],
  Miora: ["workflow", "canvas"],
  "dot.": ["product", "prototype"],
  "ITom Dev 3D Gallery": ["visual", "showcase"],
  Lunagraph: ["delivery", "code"],
  Motionly: ["motion", "animation"],
  Rechroma: ["product", "system"],
  AVE: ["motion", "video"],
  "House of Yellow": ["visual", "showcase"],
  "Working Volumes": ["visual", "showcase"],
  Brik: ["workflow", "ai-workflow"],
  "The Tie-break": ["visual", "showcase"],
  "Canvas UI": ["delivery", "opensource"],
  Notate: ["product", "prototype"],
  "Flodesk Studio": ["visual", "production"],
  animos: ["motion", "animation"]
};

const fallbackFilterRules = [
  { scope: "product", tag: "business", pattern: /B\s*端|后台|业务|管理|SaaS/i },
  { scope: "product", tag: "prototype", pattern: /原型|反馈|评审|批注|可用性/i },
  { scope: "product", tag: "system", pattern: /设计系统|色彩|组件|Token|体验/i },
  { scope: "visual", tag: "showcase", pattern: /作品集|创意网站|案例呈现|Portfolio|Gallery/i },
  { scope: "motion", tag: "spatial", pattern: /3D|三维|空间|WebGL|Three\.?js/i },
  { scope: "motion", tag: "video", pattern: /视频|剪辑|字幕|时间线/i },
  { scope: "motion", tag: "animation", pattern: /动效|动画|Motion|Animation/i },
  { scope: "delivery", tag: "opensource", pattern: /开源|Open\s*Source/i },
  { scope: "delivery", tag: "code", pattern: /代码|开发|React|HTML|CSS|设计到代码/i },
  { scope: "delivery", tag: "handoff", pattern: /交付|展示|Mockup|发布/i },
  { scope: "workflow", tag: "canvas", pattern: /画布|Canvas/i },
  { scope: "workflow", tag: "collaboration", pattern: /协作|团队|评论/i },
  { scope: "workflow", tag: "ai-workflow", pattern: /工作流|流程|Agent|智能体/i },
  { scope: "visual", tag: "production", pattern: /视觉生产|广告|图像|素材|内容生成/i },
  { scope: "visual", tag: "brand", pattern: /品牌|创意|视觉/i }
];

const isStandalonePreview =
  window.location.protocol === "file:" ||
  new URLSearchParams(window.location.search).has("preview");
const previewStorageKeys = {
  comments: "ai-design-resource-sharing.preview-comments.v1",
  favorites: "ai-design-resource-sharing.preview-favorites.v1",
  publications: "ai-design-resource-sharing.preview-publications.v1"
};
const previewMemory = {
  comments: {},
  favorites: [],
  publications: []
};
const previewUser = {
  userId: "local-preview",
  displayName: "预览用户",
  avatar: "",
  email: ""
};

const state = {
  mode: "featured",
  layoutMode: "masonry",
  issueId: "all",
  activeIndex: 0,
  profileTab: "published",
  filters: {
    all: { query: "", scope: "", tag: "" },
    published: { query: "", scope: "", tag: "" },
    favorites: { query: "", scope: "", tag: "" }
  },
  session: null,
  sessionState: "loading",
  favoriteIds: new Set(),
  publications: [],
  commentCounts: new Map(),
  commentCache: new Map(),
  comments: [],
  commentResource: null,
  commentThreadRootId: null,
  commentAnchorPoint: null,
  commentAnchorElement: null,
  commentAnchorViewport: null,
  commentPlacementActive: false,
  pendingCommentPoint: null,
  commentPlacementHintTimer: null,
  commentLoadToken: 0,
  detailResource: null,
  detailTrigger: null,
  publicationTrigger: null,
  publicationPollTimer: null,
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
const allFilterPanel = document.querySelector("#allFilterPanel");
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
const profileFilterPanel = document.querySelector("#profileFilterPanel");
const featuredCommentButton = document.querySelector("#featuredCommentButton");
const commentPinLayer = document.querySelector("#commentPinLayer");
const commentPlacementSurface = document.querySelector("#commentPlacementSurface");
const commentPlacementHint = document.querySelector("#commentPlacementHint");
const commentPlacementHintText = document.querySelector("#commentPlacementHintText");
const commentPointForm = document.querySelector("#commentPointForm");
const commentPointAvatar = document.querySelector("#commentPointAvatar");
const commentPointName = document.querySelector("#commentPointName");
const commentPointInput = document.querySelector("#commentPointInput");
const commentPointCancel = document.querySelector("#commentPointCancel");
const commentPointSubmit = document.querySelector("#commentPointSubmit");
const commentLayer = document.querySelector("#commentLayer");
const commentPopover = document.querySelector("#commentPopover");
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
const resourceDetailLayer = document.querySelector("#resourceDetailLayer");
const resourceDetailBackdrop = document.querySelector("#resourceDetailBackdrop");
const resourceDetailClose = document.querySelector("#resourceDetailClose");
const resourceDetailImage = document.querySelector("#resourceDetailImage");
const resourceDetailVisualLabel = document.querySelector("#resourceDetailVisualLabel");
const resourceDetailCategory = document.querySelector("#resourceDetailCategory");
const resourceDetailScore = document.querySelector("#resourceDetailScore");
const resourceDetailTitle = document.querySelector("#resourceDetailTitle");
const resourceDetailSummary = document.querySelector("#resourceDetailSummary");
const resourceDetailDescription = document.querySelector("#resourceDetailDescription");
const resourceDetailAction = document.querySelector("#resourceDetailAction");
const resourceDetailExternal = document.querySelector("#resourceDetailExternal");
const publicationLayer = document.querySelector("#publicationLayer");
const publicationBackdrop = document.querySelector("#publicationBackdrop");
const publicationClose = document.querySelector("#publicationClose");
const publicationCancel = document.querySelector("#publicationCancel");
const publicationForm = document.querySelector("#publicationForm");
const publicationCategories = document.querySelector("#publicationCategories");
const publicationUrl = document.querySelector("#publicationUrl");
const publicationDescription = document.querySelector("#publicationDescription");
const publicationAction = document.querySelector("#publicationAction");
const publicationFormMessage = document.querySelector("#publicationFormMessage");
const publicationSubmit = document.querySelector("#publicationSubmit");

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
  return resource.resourceId || resource.title;
}

function getResourceAliases(resource) {
  return [
    getResourceId(resource),
    resource.title,
    ...(resource.legacyResourceIds || [])
  ]
    .filter(Boolean)
    .map((value) => String(value).trim())
    .filter((value, index, values) => values.indexOf(value) === index);
}

function getResourceById(resourceId) {
  return getAllResources().find((resource) =>
    getResourceAliases(resource).includes(String(resourceId))
  );
}

function getStoredFavoriteId(resource) {
  return getResourceAliases(resource).find((resourceId) =>
    state.favoriteIds.has(resourceId)
  );
}

function isResourceFavorite(resource) {
  return Boolean(getStoredFavoriteId(resource));
}

function getIssueResources() {
  if (state.issueId === "all") return getAllResources();
  return getSelectedIssue().resources;
}

function getTaxonomyScope(scopeId) {
  return filterTaxonomy.find((scope) => scope.id === scopeId);
}

function getResourceFilterMeta(resource) {
  const direct = resourceFilterAssignments[resource.title];
  let scopeId = resource.filterScopeId || direct?.[0];
  let tagId = resource.filterTagId || direct?.[1];

  if (!scopeId) {
    const searchable = [
      resource.title,
      resource.category,
      resource.summary,
      resource.description,
      resource.action,
      resource.visualLabel
    ]
      .filter(Boolean)
      .join(" ");
    const fallback = fallbackFilterRules.find((rule) => rule.pattern.test(searchable));
    scopeId = fallback?.scope || "product";
    tagId = fallback?.tag || "system";
  }

  const scope = getTaxonomyScope(scopeId) || filterTaxonomy[0];
  const tag = scope.tags.find((item) => item.id === tagId) || scope.tags[0];
  return {
    scopeId: scope.id,
    scopeLabel: scope.label,
    tagId: tag.id,
    tagLabel: tag.label
  };
}

function makeCategoryTag(resource, label = resource.category) {
  const meta = getResourceFilterMeta(resource);
  const badge = document.createElement("span");
  const text = document.createElement("span");

  badge.className = `category category-${meta.scopeId}`;
  badge.title = meta.scopeLabel;
  badge.innerHTML = filterScopeIcons[meta.scopeId] || "";
  text.textContent = label;
  badge.appendChild(text);
  return badge;
}

function normalizeSearchValue(value) {
  return String(value || "")
    .toLocaleLowerCase("zh-CN")
    .replace(/\s+/g, " ")
    .trim();
}

function resourceMatchesQuery(resource, query) {
  const normalizedQuery = normalizeSearchValue(query);
  if (!normalizedQuery) return true;
  const meta = getResourceFilterMeta(resource);
  const searchable = normalizeSearchValue(
    [
      resource.title,
      resource.category,
      resource.summary,
      resource.description,
      resource.action,
      resource.visualLabel,
      meta.scopeLabel,
      meta.tagLabel
    ]
      .filter(Boolean)
      .join(" ")
  );
  return normalizedQuery
    .split(" ")
    .filter(Boolean)
    .every((term) => searchable.includes(term));
}

function applyResourceFilters(resources, filter) {
  return resources.filter((resource) => {
    const meta = getResourceFilterMeta(resource);
    if (!resourceMatchesQuery(resource, filter.query)) return false;
    if (filter.scope && meta.scopeId !== filter.scope) return false;
    if (filter.tag && meta.tagId !== filter.tag) return false;
    return true;
  });
}

function getProfileBaseResources(context = state.profileTab) {
  if (context === "favorites") {
    const seen = new Set();
    return [...state.favoriteIds]
      .map(getResourceById)
      .filter((resource) => {
        if (!resource) return false;
        const resourceId = getResourceId(resource);
        if (seen.has(resourceId)) return false;
        seen.add(resourceId);
        return true;
      });
  }
  return state.publications;
}

function getFilterBaseResources(context) {
  return context === "all" ? getIssueResources() : getProfileBaseResources(context);
}

function getFilteredResources(context) {
  return applyResourceFilters(getFilterBaseResources(context), state.filters[context]);
}

function getCurrentResources() {
  if (state.mode === "featured") return getLatestIssue().resources;
  if (state.mode === "all") return getFilteredResources("all");
  return [];
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

function clonePreviewValue(value) {
  return JSON.parse(JSON.stringify(value));
}

function readPreviewData(key, fallbackValue) {
  try {
    const stored = window.localStorage.getItem(key);
    if (!stored) return clonePreviewValue(fallbackValue);
    return JSON.parse(stored);
  } catch (error) {
    return clonePreviewValue(fallbackValue);
  }
}

function writePreviewData(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    if (key === previewStorageKeys.comments) previewMemory.comments = value;
    if (key === previewStorageKeys.favorites) previewMemory.favorites = value;
    if (key === previewStorageKeys.publications) previewMemory.publications = value;
  }
}

function getPreviewCommentsStore() {
  const stored = readPreviewData(
    previewStorageKeys.comments,
    previewMemory.comments
  );
  return stored && typeof stored === "object" ? stored : {};
}

function getPreviewFavorites() {
  const stored = readPreviewData(
    previewStorageKeys.favorites,
    previewMemory.favorites
  );
  return Array.isArray(stored) ? stored : [];
}

function getPreviewPublications() {
  const stored = readPreviewData(
    previewStorageKeys.publications,
    previewMemory.publications
  );
  return Array.isArray(stored) ? stored : [];
}

function persistPreviewPublications(publications) {
  previewMemory.publications = publications;
  writePreviewData(previewStorageKeys.publications, publications);
}

function getPreviewCommentCounts() {
  const commentsByResource = getPreviewCommentsStore();
  return new Map(
    Object.entries(commentsByResource).map(([resourceId, comments]) => [
      resourceId,
      Array.isArray(comments) ? comments.length : 0
    ])
  );
}

async function fetchResourceComments(resourceId) {
  if (!isStandalonePreview) {
    return requestJson(`/api/comments/${encodeURIComponent(resourceId)}`);
  }

  const comments = getPreviewCommentsStore()[resourceId] || [];
  return { comments, count: comments.length };
}

async function createResourceComment(resourceId, payload) {
  if (!isStandalonePreview) {
    return requestJson(`/api/comments/${encodeURIComponent(resourceId)}`, {
      method: "POST",
      body: JSON.stringify(payload)
    });
  }

  const commentsByResource = getPreviewCommentsStore();
  const allComments = Object.values(commentsByResource).flat();
  const nextId =
    allComments.reduce(
      (largestId, comment) => Math.max(largestId, Number(comment.id) || 0),
      0
    ) + 1;
  const comment = {
    id: nextId,
    resourceId,
    parentId: payload.parentId ?? null,
    content: payload.content,
    displayName: state.session?.displayName || previewUser.displayName,
    avatar: state.session?.avatar || "",
    positionX: payload.parentId == null ? payload.positionX ?? null : null,
    positionY: payload.parentId == null ? payload.positionY ?? null : null,
    createdAt: new Date().toISOString()
  };
  const comments = [...(commentsByResource[resourceId] || []), comment];
  commentsByResource[resourceId] = comments;
  previewMemory.comments = commentsByResource;
  writePreviewData(previewStorageKeys.comments, commentsByResource);
  return comment;
}

function getPublicationCategory(categoryId) {
  return filterTaxonomy.find((scope) => scope.id === categoryId) || filterTaxonomy[0];
}

function makePreviewPublicationMetadata(publication) {
  const hostname = new URL(publication.url).hostname.replace(/^www\./, "");
  const rawName = hostname.split(".")[0].replace(/[-_]+/g, " ").trim();
  const title = rawName
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(" ");
  return {
    ...publication,
    title: title || "新设计资源",
    summary: `一个值得进一步体验和拆解的${publication.category}资源。`,
    description:
      publication.description ||
      `该资源来自 ${hostname}，可用于观察其核心能力、页面结构和典型使用流程，并与现有设计方案进行对照。`,
    action:
      publication.action ||
      "先用一个小范围真实任务体验核心流程，再记录可复用的方法、限制条件和仍需人工判断的环节。",
    visualLabel: publication.category,
    status: "READY",
    updatedAt: new Date().toISOString()
  };
}

function completePreviewPublication(resourceId) {
  window.setTimeout(() => {
    const publications = getPreviewPublications();
    const index = publications.findIndex(
      (publication) => publication.resourceId === resourceId
    );
    if (index < 0 || publications[index].status !== "GENERATING") return;
    publications[index] = makePreviewPublicationMetadata(publications[index]);
    persistPreviewPublications(publications);
    state.publications = publications;
    syncFavoriteButtons();
    if (state.mode === "profile") renderProfile();
  }, 1800);
}

async function createPublication(payload) {
  if (!isStandalonePreview) {
    return requestJson("/api/publications", {
      method: "POST",
      body: JSON.stringify(payload)
    });
  }

  const category = getPublicationCategory(payload.categoryId);
  const now = new Date().toISOString();
  const resourceId = `publication-preview-${Date.now()}`;
  const publication = {
    resourceId,
    title: "AI 正在生成中",
    category: category.label,
    summary: "",
    description: payload.description || "",
    action: payload.action || "",
    url: payload.url,
    coverImage: `https://image.thum.io/get/width/1200/crop/760/noanimate/${payload.url}`,
    visualLabel: category.label,
    filterScopeId: category.id,
    status: "GENERATING",
    createdAt: now,
    updatedAt: now
  };
  const publications = [publication, ...getPreviewPublications()];
  persistPreviewPublications(publications);
  completePreviewPublication(resourceId);
  return publication;
}

async function refreshPublications() {
  if (isStandalonePreview) {
    state.publications = getPreviewPublications();
  } else {
    const payload = await requestJson("/api/publications");
    state.publications = payload.publications || [];
  }
  syncFavoriteButtons();
  if (state.mode === "profile") renderProfile();
  schedulePublicationPolling();
}

function schedulePublicationPolling() {
  if (state.publicationPollTimer) {
    window.clearTimeout(state.publicationPollTimer);
    state.publicationPollTimer = null;
  }
  if (!state.publications.some((publication) => publication.status === "GENERATING")) {
    return;
  }
  state.publicationPollTimer = window.setTimeout(async () => {
    try {
      await refreshPublications();
    } catch (error) {
      schedulePublicationPolling();
    }
  }, 2200);
}

async function loadMemberData() {
  if (isStandalonePreview) {
    state.session = previewUser;
    state.sessionState = "ready";
    state.favoriteIds = new Set(getPreviewFavorites());
    state.publications = getPreviewPublications();
    state.publications
      .filter((publication) => publication.status === "GENERATING")
      .forEach((publication) => completePreviewPublication(publication.resourceId));
    state.commentCounts = getPreviewCommentCounts();
    updateSessionUI();
    updateCommentPointIdentity();
    syncFavoriteButtons();
    syncCommentButtons();
    renderProfile();
    loadActiveResourceComments();
    schedulePublicationPolling();
    return;
  }

  try {
    state.session = await requestJson("/api/session/me");
    state.sessionState = "ready";
    updateSessionUI();
    updateCommentPointIdentity();

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
    loadActiveResourceComments();
    schedulePublicationPolling();
  } catch (error) {
    state.sessionState = "unavailable";
    updateSessionUI();
    updateCommentPointIdentity();
    renderProfile();
    renderCommentPins();
  }
}

async function toggleFavorite(resource, button) {
  if (state.sessionState !== "ready") {
    setMode("profile");
    return;
  }

  const resourceId = getResourceId(resource);
  const storedFavoriteId = getStoredFavoriteId(resource);
  const wasFavorite = Boolean(storedFavoriteId);
  button.disabled = true;

  try {
    if (!isStandalonePreview) {
      await requestJson(
        `/api/favorites/${encodeURIComponent(storedFavoriteId || resourceId)}`,
        {
        method: wasFavorite ? "DELETE" : "POST"
        }
      );
    }
    if (wasFavorite) {
      state.favoriteIds.delete(storedFavoriteId);
    } else {
      state.favoriteIds.add(resourceId);
    }
    if (isStandalonePreview) {
      const favorites = [...state.favoriteIds];
      previewMemory.favorites = favorites;
      writePreviewData(previewStorageKeys.favorites, favorites);
    }
    syncFavoriteButtons();
    renderProfile();
  } finally {
    button.disabled = false;
  }
}

function updateFavoriteButton(button, resourceId) {
  const resource = getResourceById(resourceId);
  const selected = resource
    ? isResourceFavorite(resource)
    : state.favoriteIds.has(resourceId);
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
  button.setAttribute(
    "aria-label",
    count ? `放置评论，当前作品已有 ${count} 条评论` : "在当前作品上放置评论"
  );
}

function syncCommentButtons() {
  const resource =
    state.mode === "featured" ? getCurrentResources()[state.activeIndex] : null;
  if (!resource) {
    featuredCommentButton.dataset.resourceId = "";
    commentPinLayer.replaceChildren();
    return;
  }

  const resourceId = getResourceId(resource);
  featuredCommentButton.dataset.resourceId = resourceId;
  featuredCommentButton.classList.toggle("is-placing", state.commentPlacementActive);
  featuredCommentButton.setAttribute("aria-pressed", String(state.commentPlacementActive));
  featuredCommentButton.setAttribute("aria-expanded", "false");
  featuredCommentButton.querySelector(".comment-button-hint").textContent =
    state.commentPlacementActive ? "点击空白处放置" : "点击后放置评论";
  updateCommentButton(featuredCommentButton, resourceId);
  renderCommentPins();
}

function hasActiveFilter(filter) {
  return Boolean(filter.query.trim() || filter.scope || filter.tag);
}

function buildFilterPanel(panel, context) {
  panel.dataset.filterContext = context;
  panel.innerHTML = `
    <div class="resource-filter-main">
      <label class="filter-search">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="7"></circle>
          <path d="m20 20-4-4"></path>
        </svg>
        <span class="sr-only">搜索案例</span>
        <input
          class="filter-search-input"
          type="search"
          autocomplete="off"
          placeholder="搜索名称、用途或工具"
        />
      </label>
      <div class="filter-scope-list" role="group" aria-label="内容范围"></div>
      <div class="filter-status" aria-live="polite">
        <strong class="filter-result-count"></strong>
        <button class="filter-reset" type="button" hidden>重置</button>
      </div>
    </div>
    <div class="filter-detail-row" hidden>
      <span class="filter-detail-label"></span>
      <div class="filter-tag-list" role="group" aria-label="具体方向"></div>
    </div>
  `;

  if (panel.dataset.filterBound === "true") return;
  panel.dataset.filterBound = "true";

  panel.addEventListener("input", (event) => {
    if (!event.target.matches(".filter-search-input")) return;
    const activeContext = panel.dataset.filterContext;
    state.filters[activeContext].query = event.target.value;
    state.activeIndex = 0;
    renderFilteredContext(activeContext);
  });

  panel.addEventListener("click", (event) => {
    const activeContext = panel.dataset.filterContext;
    const filter = state.filters[activeContext];
    const resetButton = event.target.closest(".filter-reset");
    const scopeButton = event.target.closest("[data-filter-scope]");
    const tagButton = event.target.closest("[data-filter-tag]");

    if (resetButton) {
      filter.query = "";
      filter.scope = "";
      filter.tag = "";
      const input = panel.querySelector(".filter-search-input");
      if (input) input.value = "";
    } else if (scopeButton) {
      filter.scope = scopeButton.dataset.filterScope;
      filter.tag = "";
    } else if (tagButton) {
      filter.tag = tagButton.dataset.filterTag;
    } else {
      return;
    }

    state.activeIndex = 0;
    renderFilteredContext(activeContext);
  });
}

function syncFilterPanel(panel, context) {
  if (panel.dataset.filterContext !== context) buildFilterPanel(panel, context);

  const filter = state.filters[context];
  const baseResources = getFilterBaseResources(context);
  const queryResources = baseResources.filter((resource) =>
    resourceMatchesQuery(resource, filter.query)
  );
  const selectedScope = getTaxonomyScope(filter.scope);

  if (!selectedScope) {
    filter.scope = "";
    filter.tag = "";
  } else if (filter.tag && !selectedScope.tags.some((tag) => tag.id === filter.tag)) {
    filter.tag = "";
  }

  if (context === "all") {
    appShell.classList.toggle("has-detail-filter", Boolean(selectedScope));
  }

  const input = panel.querySelector(".filter-search-input");
  if (input && document.activeElement !== input) input.value = filter.query;

  const scopeList = panel.querySelector(".filter-scope-list");
  const allScopeButton = document.createElement("button");
  allScopeButton.className = "filter-chip";
  allScopeButton.type = "button";
  allScopeButton.dataset.filterScope = "";
  allScopeButton.setAttribute("aria-pressed", String(!filter.scope));
  allScopeButton.classList.toggle("is-active", !filter.scope);
  allScopeButton.innerHTML = `${filterScopeIcons.all}<span>全部范围</span><small>${queryResources.length}</small>`;

  const scopeButtons = filterTaxonomy.map((scope) => {
    const count = queryResources.filter(
      (resource) => getResourceFilterMeta(resource).scopeId === scope.id
    ).length;
    const button = document.createElement("button");
    button.className = "filter-chip";
    button.type = "button";
    button.dataset.filterScope = scope.id;
    button.disabled = count === 0 && filter.scope !== scope.id;
    button.setAttribute("aria-pressed", String(filter.scope === scope.id));
    button.classList.toggle("is-active", filter.scope === scope.id);
    button.innerHTML = `${filterScopeIcons[scope.id] || ""}<span>${scope.label}</span><small>${count}</small>`;
    return button;
  });
  scopeList.replaceChildren(allScopeButton, ...scopeButtons);

  const detailRow = panel.querySelector(".filter-detail-row");
  const detailLabel = panel.querySelector(".filter-detail-label");
  const tagList = panel.querySelector(".filter-tag-list");
  detailRow.hidden = !selectedScope;
  panel.classList.toggle("has-detail", Boolean(selectedScope));

  if (selectedScope) {
    const scopedResources = queryResources.filter(
      (resource) => getResourceFilterMeta(resource).scopeId === selectedScope.id
    );
    detailLabel.textContent = "具体方向";

    const allTagButton = document.createElement("button");
    allTagButton.className = "filter-chip filter-chip-secondary";
    allTagButton.type = "button";
    allTagButton.dataset.filterTag = "";
    allTagButton.setAttribute("aria-pressed", String(!filter.tag));
    allTagButton.classList.toggle("is-active", !filter.tag);
    allTagButton.innerHTML = `<span>全部</span><small>${scopedResources.length}</small>`;

    const tagButtons = selectedScope.tags.map((tag) => {
      const count = scopedResources.filter(
        (resource) => getResourceFilterMeta(resource).tagId === tag.id
      ).length;
      const button = document.createElement("button");
      button.className = "filter-chip filter-chip-secondary";
      button.type = "button";
      button.dataset.filterTag = tag.id;
      button.disabled = count === 0 && filter.tag !== tag.id;
      button.setAttribute("aria-pressed", String(filter.tag === tag.id));
      button.classList.toggle("is-active", filter.tag === tag.id);
      button.innerHTML = `<span>${tag.label}</span><small>${count}</small>`;
      return button;
    });
    tagList.replaceChildren(allTagButton, ...tagButtons);
  } else {
    tagList.replaceChildren();
  }

  const resultCount = getFilteredResources(context).length;
  panel.querySelector(".filter-result-count").textContent = `${resultCount} 个结果`;
  panel.querySelector(".filter-reset").hidden = !hasActiveFilter(filter);
}

function renderFilteredContext(context) {
  if (context === "all" && state.mode === "all") {
    renderCards();
    return;
  }
  if (state.mode === "profile" && context === state.profileTab) {
    renderProfile();
  }
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

  const filterMeta = getResourceFilterMeta(resource);
  const meta = document.createElement("div");
  meta.className = "profile-resource-meta";

  const scope = makeCategoryTag(resource, filterMeta.scopeLabel);

  const tag = document.createElement("span");
  tag.className = "profile-filter-tag";
  tag.textContent = filterMeta.tagLabel;

  meta.append(scope, tag);

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

function makePublicationCard(resource) {
  const article = document.createElement("article");
  article.className = "profile-publication-card";
  const generating = resource.status === "GENERATING";
  article.classList.toggle("is-generating", generating);

  const media = document.createElement("div");
  media.className = "profile-publication-media";
  if (resource.coverImage) {
    const image = document.createElement("img");
    image.src = resource.coverImage;
    image.alt = generating ? "" : `${resource.title} 页面截图`;
    image.loading = "lazy";
    media.appendChild(image);
  }

  if (generating) {
    const status = document.createElement("span");
    status.className = "profile-publication-status";
    status.innerHTML = `
      <span class="profile-publication-spinner" aria-hidden="true"></span>
      AI 正在生成中
    `;
    media.appendChild(status);
  }

  const title = document.createElement("h3");
  title.textContent = generating ? "正在读取资源" : resource.title;
  article.append(media, title);

  if (!generating) {
    article.tabIndex = 0;
    article.setAttribute("role", "button");
    article.setAttribute("aria-label", `查看 ${resource.title} 详情`);
    article.addEventListener("click", () => openResourceDetail(resource, article));
    article.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openResourceDetail(resource, article);
    });
  } else {
    article.setAttribute("aria-busy", "true");
  }
  return article;
}

function makePublishButton(label = "上传设计资源") {
  const button = document.createElement("button");
  button.className = "profile-publish-button";
  button.type = "button";
  button.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5v14M5 12h14"></path>
    </svg>
    <span>${label}</span>
  `;
  button.addEventListener("click", () => openPublicationDialog(button));
  return button;
}

function renderProfileEmpty(title, description, options = {}) {
  const empty = document.createElement("div");
  empty.className = "profile-empty";

  const heading = document.createElement("h3");
  heading.textContent = title;

  const copy = document.createElement("p");
  copy.textContent = description;

  empty.append(heading, copy);
  if (options.action === "publish") {
    empty.appendChild(makePublishButton("上传第一个资源"));
  }
  profileContent.replaceChildren(empty);
}

function renderProfile() {
  syncFavoriteButtons();
  profileFilterPanel.classList.add("is-hidden");
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

  const baseResources = getProfileBaseResources();

  if (!baseResources.length) {
    renderProfileEmpty(
      state.profileTab === "favorites" ? "还没有收藏案例" : "还没有发布内容",
      state.profileTab === "favorites"
        ? "在案例卡片右上角点击收藏图标，内容会保存在这里。"
        : "粘贴一个资源链接，AI 会自动补齐名称、案例解读和使用建议。",
      state.profileTab === "published" ? { action: "publish" } : {}
    );
    return;
  }

  profileFilterPanel.classList.remove("is-hidden");
  syncFilterPanel(profileFilterPanel, state.profileTab);

  const resources = getFilteredResources(state.profileTab);
  if (!resources.length) {
    renderProfileEmpty(
      "没有匹配的案例",
      "调整关键词或筛选范围，或点击上方“清除”恢复全部内容。"
    );
    return;
  }

  const grid = document.createElement("div");
  grid.className =
    state.profileTab === "published"
      ? "profile-publication-grid"
      : "profile-grid";
  resources.forEach((resource) => {
    grid.appendChild(
      state.profileTab === "published"
        ? makePublicationCard(resource)
        : makeProfileResourceCard(resource, { removable: true })
    );
  });
  if (state.profileTab === "published") {
    const toolbar = document.createElement("div");
    toolbar.className = "profile-publication-toolbar";
    const count = document.createElement("span");
    count.textContent = `${resources.length} 个发布`;
    toolbar.append(count, makePublishButton());
    profileContent.replaceChildren(toolbar, grid);
  } else {
    profileContent.replaceChildren(grid);
  }
}

function renderPublicationCategories() {
  const fragment = document.createDocumentFragment();
  filterTaxonomy.forEach((scope, index) => {
    const label = document.createElement("label");
    label.className = "publication-category-option";
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "publicationCategory";
    input.value = scope.id;
    input.required = true;
    input.checked = index === 0;
    const icon = document.createElement("span");
    icon.className = "publication-category-icon";
    icon.innerHTML = filterScopeIcons[scope.id] || "";
    const text = document.createElement("span");
    text.textContent = scope.label;
    label.append(input, icon, text);
    fragment.appendChild(label);
  });
  publicationCategories.replaceChildren(fragment);
}

function openPublicationDialog(trigger) {
  state.publicationTrigger =
    trigger instanceof HTMLElement ? trigger : document.activeElement;
  publicationForm.reset();
  const firstCategory = publicationCategories.querySelector("input");
  if (firstCategory) firstCategory.checked = true;
  publicationFormMessage.textContent = "";
  publicationLayer.classList.add("is-open");
  publicationLayer.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-publication-open");
  requestAnimationFrame(() => publicationUrl.focus());
}

function closePublicationDialog() {
  if (!publicationLayer.classList.contains("is-open")) return;
  publicationLayer.classList.remove("is-open");
  publicationLayer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-publication-open");
  const trigger = state.publicationTrigger;
  state.publicationTrigger = null;
  if (trigger?.isConnected) trigger.focus();
}

async function submitPublication(event) {
  event.preventDefault();
  const categoryInput = publicationForm.querySelector(
    'input[name="publicationCategory"]:checked'
  );
  if (!categoryInput) return;

  publicationSubmit.disabled = true;
  publicationFormMessage.textContent = "正在创建生成任务…";
  publicationFormMessage.classList.remove("is-error");

  try {
    const publication = await createPublication({
      categoryId: categoryInput.value,
      url: publicationUrl.value.trim(),
      description: publicationDescription.value.trim(),
      action: publicationAction.value.trim()
    });
    state.publications = [
      publication,
      ...state.publications.filter(
        (item) => item.resourceId !== publication.resourceId
      )
    ];
    closePublicationDialog();
    state.profileTab = "published";
    syncFavoriteButtons();
    renderProfile();
    schedulePublicationPolling();
  } catch (error) {
    publicationFormMessage.textContent =
      "发布未创建，请检查链接后重试。";
    publicationFormMessage.classList.add("is-error");
  } finally {
    publicationSubmit.disabled = false;
  }
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

function setCommentAvatarVisual(container, person) {
  container.replaceChildren();
  if (person.avatar) {
    const image = document.createElement("img");
    image.src = person.avatar;
    image.alt = "";
    image.referrerPolicy = "no-referrer";
    container.appendChild(image);
    return;
  }
  container.textContent = getDisplayInitials(person.displayName);
}

function createCommentAvatar(comment) {
  const avatar = document.createElement("div");
  avatar.className = "comment-avatar";
  setCommentAvatarVisual(avatar, comment);
  return avatar;
}

function getCommentTree(comments) {
  const childrenByParent = new Map();
  const roots = [];

  comments.forEach((comment) => {
    if (comment.parentId == null) {
      roots.push(comment);
      return;
    }
    const key = String(comment.parentId);
    if (!childrenByParent.has(key)) childrenByParent.set(key, []);
    childrenByParent.get(key).push(comment);
  });

  return { roots, childrenByParent };
}

function countCommentThread(comment, childrenByParent) {
  const children = childrenByParent.get(String(comment.id)) || [];
  return 1 + children.reduce(
    (count, child) => count + countCommentThread(child, childrenByParent),
    0
  );
}

function getCommentPosition(comment, index) {
  const positionX = Number(comment.positionX);
  const positionY = Number(comment.positionY);
  if (
    Number.isFinite(positionX) &&
    Number.isFinite(positionY) &&
    positionX >= 0 &&
    positionX <= 1 &&
    positionY >= 0 &&
    positionY <= 1
  ) {
    return { x: positionX, y: positionY };
  }

  const fallbackPositions = [
    { x: 0.76, y: 0.22 },
    { x: 0.28, y: 0.3 },
    { x: 0.72, y: 0.48 },
    { x: 0.24, y: 0.58 },
    { x: 0.68, y: 0.7 }
  ];
  return fallbackPositions[index % fallbackPositions.length];
}

function renderCommentPins() {
  commentPinLayer.replaceChildren();
  if (state.mode !== "featured") return;

  const resource = getCurrentResources()[state.activeIndex];
  if (!resource) return;

  const resourceId = getResourceId(resource);
  const comments = state.commentCache.get(resourceId) || [];
  const { roots, childrenByParent } = getCommentTree(comments);
  const fragment = document.createDocumentFragment();

  roots.forEach((comment, index) => {
    const position = getCommentPosition(comment, index);
    const threadCount = countCommentThread(comment, childrenByParent);
    const pin = document.createElement("button");
    pin.className = "comment-pin";
    pin.type = "button";
    pin.style.left = `${position.x * 100}%`;
    pin.style.top = `${position.y * 100}%`;
    pin.classList.toggle("is-flipped", position.x > 0.66);
    pin.classList.toggle(
      "is-active",
      commentLayer.classList.contains("is-open") &&
        state.commentThreadRootId === comment.id
    );
    pin.setAttribute(
      "aria-label",
      `查看 ${comment.displayName} 的 ${threadCount} 条讨论`
    );

    const avatarWrap = document.createElement("span");
    avatarWrap.className = "comment-pin-avatar-wrap";
    const avatar = document.createElement("span");
    avatar.className = "comment-pin-avatar";
    setCommentAvatarVisual(avatar, comment);
    const count = document.createElement("span");
    count.className = "comment-pin-count";
    count.textContent = threadCount > 99 ? "99+" : String(threadCount);
    avatarWrap.append(avatar, count);

    const name = document.createElement("span");
    name.className = "comment-pin-name";
    name.textContent = comment.displayName;
    pin.append(avatarWrap, name);
    pin.addEventListener("click", (event) => {
      event.stopPropagation();
      openComments(resource, comment.id, position, pin);
    });
    fragment.appendChild(pin);
  });

  commentPinLayer.appendChild(fragment);
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
  commentInput.placeholder = "写下你对这个案例的看法";
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
  if (commentLayer.classList.contains("is-open")) {
    requestAnimationFrame(() => positionCommentPopover());
  }
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
    renderCommentMessage(
      "还没有评论",
      "关闭详情后，点击评论按钮，在内容区外放置第一条案例评论。"
    );
    return;
  }

  const { roots, childrenByParent } = getCommentTree(state.comments);
  const visibleRoots = state.commentThreadRootId == null
    ? roots
    : roots.filter((comment) => comment.id === state.commentThreadRootId);

  if (!visibleRoots.length) {
    renderCommentMessage("评论不存在", "这条评论可能已被移除，请关闭后重新选择。");
    return;
  }

  const selectedRoot = visibleRoots[0];
  if (state.commentResource) {
    commentResourceLabel.textContent = state.commentResource.title;
    commentDrawerTitle.textContent = `${selectedRoot.displayName} 的讨论`;
  }

  const fragment = document.createDocumentFragment();
  visibleRoots.forEach((comment) => {
    fragment.appendChild(createCommentItem(comment, childrenByParent));
  });
  commentList.replaceChildren(fragment);
  if (commentLayer.classList.contains("is-open")) {
    requestAnimationFrame(() => positionCommentPopover());
  }
}

async function loadComments(resource, { force = false } = {}) {
  const resourceId = getResourceId(resource);
  const cached = state.commentCache.get(resourceId);
  if (cached && !force) {
    if (
      state.commentResource &&
      getResourceId(state.commentResource) === resourceId
    ) {
      state.comments = cached;
      state.commentsState = "ready";
      renderComments();
    }
    renderCommentPins();
    return cached;
  }

  if (state.sessionState !== "ready") {
    if (
      state.commentResource &&
      getResourceId(state.commentResource) === resourceId
    ) {
      state.commentsState = "unavailable";
      renderComments();
    }
    renderCommentPins();
    return [];
  }

  const requestToken = ++state.commentLoadToken;
  if (
    state.commentResource &&
    getResourceId(state.commentResource) === resourceId
  ) {
    state.commentsState = "loading";
    renderComments();
  }

  try {
    const payload = await fetchResourceComments(resourceId);
    const comments = payload.comments || [];
    state.commentCache.set(resourceId, comments);
    state.commentCounts.set(resourceId, Number(payload.count || comments.length));
    syncCommentButtons();
    if (
      state.commentResource &&
      getResourceId(state.commentResource) === resourceId
    ) {
      state.comments = comments;
      state.commentsState = "ready";
      renderComments();
    }
    if (requestToken === state.commentLoadToken) renderCommentPins();
    return comments;
  } catch (error) {
    if (
      state.commentResource &&
      getResourceId(state.commentResource) === resourceId
    ) {
      state.commentsState = "unavailable";
      renderComments();
    }
    return [];
  }
}

function loadActiveResourceComments({ force = false } = {}) {
  if (state.mode !== "featured") {
    renderCommentPins();
    return;
  }
  const resource = getCurrentResources()[state.activeIndex];
  if (!resource) return;
  loadComments(resource, { force });
}

function updateCommentPointIdentity() {
  if (state.sessionState !== "ready" || !state.session) {
    commentPointAvatar.replaceChildren();
    commentPointName.textContent = "";
    return;
  }
  setCommentAvatarVisual(commentPointAvatar, state.session);
  commentPointName.textContent = state.session.displayName;
}

function updateCommentPlacementUI() {
  const active = state.commentPlacementActive && state.mode === "featured";
  commentPlacementSurface.hidden = !active;
  commentPlacementHint.hidden = !active || Boolean(state.pendingCommentPoint);
  stage.classList.toggle("is-comment-placing", active);
  commentPlacementSurface.classList.remove("is-blocked");
  commentPlacementHint.classList.remove("is-error");
  commentPlacementHintText.textContent = "点击内容区外任意位置放置评论";
  if (!active) {
    commentPointForm.hidden = true;
    commentPointInput.value = "";
  }
  syncCommentButtons();
}

function cancelCommentPlacement({ restoreFocus = false } = {}) {
  const wasActive = state.commentPlacementActive;
  if (state.commentPlacementHintTimer) {
    window.clearTimeout(state.commentPlacementHintTimer);
    state.commentPlacementHintTimer = null;
  }
  state.commentPlacementActive = false;
  state.pendingCommentPoint = null;
  updateCommentPlacementUI();
  if (restoreFocus && wasActive) featuredCommentButton.focus();
}

function toggleCommentPlacement() {
  const resource = getCurrentResources()[state.activeIndex];
  if (state.mode !== "featured" || !resource) return;

  if (state.sessionState !== "ready") {
    openComments(resource, null);
    return;
  }

  if (commentLayer.classList.contains("is-open")) closeComments();
  state.commentPlacementActive = !state.commentPlacementActive;
  state.pendingCommentPoint = null;
  updateCommentPointIdentity();
  updateCommentPlacementUI();
}

function getCommentBlockedRegion() {
  const visibleCards = [...carousel.querySelectorAll(".resource-card")].filter(
    (card) => card.getAttribute("aria-hidden") !== "true"
  );
  if (!visibleCards.length) return null;
  const rects = visibleCards
    .map((card) => card.getBoundingClientRect())
    .filter((rect) => rect.width > 0 && rect.height > 0);
  if (!rects.length) return null;

  const padding = 8;
  return {
    left: Math.min(...rects.map((rect) => rect.left)) - padding,
    right: Math.max(...rects.map((rect) => rect.right)) + padding,
    top: Math.min(...rects.map((rect) => rect.top)) - padding,
    bottom: Math.max(...rects.map((rect) => rect.bottom)) + padding
  };
}

function isCommentPlacementBlocked(clientX, clientY) {
  const region = getCommentBlockedRegion();
  if (!region) return false;
  return (
    clientX >= region.left &&
    clientX <= region.right &&
    clientY >= region.top &&
    clientY <= region.bottom
  );
}

function showCommentPlacementError() {
  if (state.commentPlacementHintTimer) {
    window.clearTimeout(state.commentPlacementHintTimer);
  }
  commentPlacementHint.hidden = false;
  commentPlacementHint.classList.add("is-error");
  commentPlacementHintText.textContent = "内容卡片区域不可放置，请选择周围空白处";
  state.commentPlacementHintTimer = window.setTimeout(() => {
    commentPlacementHint.classList.remove("is-error");
    commentPlacementHintText.textContent = "点击内容区外任意位置放置评论";
    state.commentPlacementHintTimer = null;
  }, 1800);
}

function placeCommentComposer(event) {
  if (!state.commentPlacementActive) return;

  const stageRect = stage.getBoundingClientRect();
  const hasPointerPosition = event.clientX > 0 || event.clientY > 0;
  const clientX = hasPointerPosition
    ? event.clientX
    : stageRect.left + stageRect.width / 2;
  const clientY = hasPointerPosition
    ? event.clientY
    : stageRect.top + stageRect.height / 2;
  if (isCommentPlacementBlocked(clientX, clientY)) {
    showCommentPlacementError();
    return;
  }
  const x = Math.min(Math.max((clientX - stageRect.left) / stageRect.width, 0.02), 0.98);
  const y = Math.min(Math.max((clientY - stageRect.top) / stageRect.height, 0.04), 0.96);
  state.pendingCommentPoint = { x, y };

  commentPlacementHint.hidden = true;
  commentPointForm.hidden = false;
  commentPointForm.style.left = "8px";
  commentPointForm.style.top = "8px";

  requestAnimationFrame(() => {
    const composerWidth = commentPointForm.offsetWidth;
    const composerHeight = commentPointForm.offsetHeight;
    const anchorX = x * stageRect.width;
    const anchorY = y * stageRect.height;
    const preferredLeft = x > 0.62
      ? anchorX - composerWidth - 14
      : anchorX + 14;
    const preferredTop = y > 0.62
      ? anchorY - composerHeight - 14
      : anchorY + 14;
    const left = Math.min(
      Math.max(preferredLeft, 8),
      Math.max(8, stageRect.width - composerWidth - 8)
    );
    const top = Math.min(
      Math.max(preferredTop, 8),
      Math.max(8, stageRect.height - composerHeight - 8)
    );
    commentPointForm.style.left = `${left}px`;
    commentPointForm.style.top = `${top}px`;
    commentPointInput.focus();
  });
}

function updateCommentPlacementCursor(event) {
  if (!state.commentPlacementActive) return;
  commentPlacementSurface.classList.toggle(
    "is-blocked",
    isCommentPlacementBlocked(event.clientX, event.clientY)
  );
}

async function submitPointComment(event) {
  event.preventDefault();
  const resource = getCurrentResources()[state.activeIndex];
  if (
    state.sessionState !== "ready" ||
    !resource ||
    !state.pendingCommentPoint
  ) {
    return;
  }

  const content = commentPointInput.value.trim();
  if (!content) {
    commentPointInput.focus();
    return;
  }

  commentPointSubmit.disabled = true;
  try {
    const resourceId = getResourceId(resource);
    await createResourceComment(resourceId, {
      content,
      parentId: null,
      positionX: state.pendingCommentPoint.x,
      positionY: state.pendingCommentPoint.y
    });
    cancelCommentPlacement();
    await loadComments(resource, { force: true });
  } finally {
    commentPointSubmit.disabled = false;
  }
}

function positionCommentPopover(anchorPoint = state.commentAnchorPoint) {
  const viewportPadding = 12;
  commentPopover.style.removeProperty("max-height");
  const popoverWidth = commentPopover.offsetWidth;
  let popoverHeight = commentPopover.offsetHeight;
  const maxLeft = Math.max(
    viewportPadding,
    window.innerWidth - popoverWidth - viewportPadding
  );

  let left = (window.innerWidth - popoverWidth) / 2;
  let top = (window.innerHeight - popoverHeight) / 2;

  const liveAnchor = commentPinLayer.querySelector(".comment-pin.is-active");
  const anchorElement = liveAnchor || state.commentAnchorElement;
  const liveAnchorRect = anchorElement?.isConnected
    ? anchorElement.getBoundingClientRect()
    : null;
  const candidateAnchorRect = liveAnchorRect || state.commentAnchorViewport;
  const anchorRect =
    candidateAnchorRect &&
    candidateAnchorRect.width > 0 &&
    candidateAnchorRect.height > 0
      ? candidateAnchorRect
      : null;

  if (anchorRect || anchorPoint) {
    const stageRect = stage.getBoundingClientRect();
    const anchorX = anchorRect
      ? anchorRect.left + anchorRect.width / 2
      : stageRect.left + anchorPoint.x * stageRect.width;
    const anchorY = anchorRect
      ? anchorRect.top + anchorRect.height / 2
      : stageRect.top + anchorPoint.y * stageRect.height;
    const anchorLeft = anchorRect ? anchorRect.left : anchorX;
    const anchorRight = anchorRect ? anchorRect.right : anchorX;
    const gap = 14;
    const fitsRight =
      anchorRight + gap + popoverWidth <= window.innerWidth - viewportPadding;
    const fitsLeft =
      anchorLeft - gap - popoverWidth >= viewportPadding;

    if (fitsRight) {
      left = anchorRight + gap;
      commentPopover.dataset.placement = "right";
    } else if (fitsLeft) {
      left = anchorLeft - gap - popoverWidth;
      commentPopover.dataset.placement = "left";
    } else {
      left = anchorX - popoverWidth / 2;
      const anchorTop = anchorRect ? anchorRect.top : anchorY;
      const anchorBottom = anchorRect ? anchorRect.bottom : anchorY;
      const availableBelow =
        window.innerHeight - viewportPadding - anchorBottom - gap;
      const availableAbove = anchorTop - gap - viewportPadding;
      const opensBelow = availableBelow >= availableAbove;
      const availableHeight = Math.max(
        160,
        opensBelow ? availableBelow : availableAbove
      );
      if (popoverHeight > availableHeight) {
        commentPopover.style.maxHeight = `${availableHeight}px`;
        popoverHeight = commentPopover.offsetHeight;
      }
      top = opensBelow
        ? anchorBottom + gap
        : anchorTop - gap - popoverHeight;
      commentPopover.dataset.placement = opensBelow ? "bottom" : "top";
    }
    if (fitsRight || fitsLeft) {
      top = anchorY - Math.min(72, popoverHeight * 0.2);
    }
  }

  const maxTop = Math.max(
    viewportPadding,
    window.innerHeight - popoverHeight - viewportPadding
  );
  commentPopover.style.left = `${Math.min(Math.max(left, viewportPadding), maxLeft)}px`;
  commentPopover.style.top = `${Math.min(Math.max(top, viewportPadding), maxTop)}px`;
}

function openComments(resource, rootId, anchorPoint = null, anchorElement = null) {
  cancelCommentPlacement();
  state.commentResource = resource;
  state.commentThreadRootId = rootId;
  state.commentAnchorPoint = anchorPoint;
  state.commentAnchorElement = anchorElement;
  const anchorRect = anchorElement?.getBoundingClientRect();
  state.commentAnchorViewport = anchorRect
    ? {
        left: anchorRect.left,
        top: anchorRect.top,
        width: anchorRect.width,
        height: anchorRect.height
      }
    : null;
  state.comments = state.commentCache.get(getResourceId(resource)) || [];
  state.commentsState = state.commentCache.has(getResourceId(resource))
    ? "ready"
    : state.sessionState === "ready"
      ? "loading"
      : "unavailable";
  clearReply();
  commentInput.value = "";
  commentResourceLabel.textContent = resource.title;
  commentDrawerTitle.textContent = rootId == null ? "作品评论" : "评论详情";
  renderComments();
  commentLayer.classList.add("is-open");
  commentLayer.setAttribute("aria-hidden", "false");
  const canComment = state.sessionState === "ready";
  commentInput.disabled = !canComment;
  commentSubmit.disabled = !canComment;
  renderCommentPins();
  loadComments(resource);
  requestAnimationFrame(() => {
    positionCommentPopover();
    commentClose.focus({ preventScroll: true });
  });
}

function closeComments() {
  commentLayer.classList.remove("is-open");
  commentLayer.setAttribute("aria-hidden", "true");
  state.commentThreadRootId = null;
  state.commentAnchorPoint = null;
  state.commentAnchorElement = null;
  state.commentAnchorViewport = null;
  commentPopover.style.removeProperty("left");
  commentPopover.style.removeProperty("top");
  commentPopover.style.removeProperty("max-height");
  delete commentPopover.dataset.placement;
  clearReply();
  renderCommentPins();
}

function openResourceDetail(resource, trigger) {
  if (commentLayer.classList.contains("is-open")) closeComments();

  state.detailResource = resource;
  state.detailTrigger =
    trigger instanceof HTMLElement ? trigger : document.activeElement;

  resourceDetailImage.src = resource.coverImage;
  resourceDetailImage.alt = `${resource.title} 原始页面截图`;
  resourceDetailVisualLabel.textContent =
    resource.visualLabel || resource.category || "Design Resource";
  resourceDetailCategory.replaceChildren(makeCategoryTag(resource));
  resourceDetailScore.textContent = resource.score || "";
  resourceDetailScore.hidden = !resource.score;
  resourceDetailTitle.textContent = resource.title;
  resourceDetailSummary.textContent =
    resource.summary || "这是一个值得进一步体验和拆解的设计资源。";
  resourceDetailDescription.textContent =
    resource.description || "AI 正在补充这个案例的详细解读。";
  resourceDetailAction.textContent =
    resource.action || "先从一个小范围真实任务开始体验，再判断它是否适合加入现有工作流。";
  resourceDetailExternal.href = resource.url;
  resourceDetailExternal.setAttribute("aria-label", `访问 ${resource.title} 原网站`);
  resourceDetailExternal.hidden = !resource.url;

  resourceDetailLayer.classList.add("is-open");
  resourceDetailLayer.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-detail-open");
  requestAnimationFrame(() => resourceDetailClose.focus());
}

function closeResourceDetail() {
  if (!resourceDetailLayer.classList.contains("is-open")) return;

  resourceDetailLayer.classList.remove("is-open");
  resourceDetailLayer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-detail-open");

  const trigger = state.detailTrigger;
  state.detailResource = null;
  state.detailTrigger = null;
  if (trigger?.isConnected) trigger.focus();
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
    await createResourceComment(resourceId, {
      content,
      parentId: state.replyingTo?.id ?? state.commentThreadRootId ?? null
    });
    commentInput.value = "";
    clearReply();
    await loadComments(state.commentResource, { force: true });
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
  const opensDetails = state.mode === "all";
  const actionControl = opensDetails
    ? `<button class="open-link detail-link" type="button" aria-label="查看 ${resource.title} 详情">→</button>`
    : `<a class="open-link" href="${resource.url}" target="_blank" rel="noreferrer" aria-label="打开 ${resource.title}">→</a>`;
  const scoreControl = opensDetails
    ? ""
    : `<span class="score">${resource.score}</span>`;

  article.className = "resource-card";
  article.tabIndex = 0;
  article.dataset.index = String(index);
  if (opensDetails) article.setAttribute("aria-label", `查看 ${resource.title} 详情`);

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
        <span class="category"></span>
        ${scoreControl}
      </div>
      <div class="card-title-row">
        <h2 class="card-title">${resource.title}</h2>
        ${actionControl}
      </div>
      <div class="card-details">
        <p class="card-summary">${resource.summary}</p>
        <p class="card-description">${resource.description}</p>
        <p class="card-action"><span>可以怎么用</span>${resource.action}</p>
      </div>
    </div>
  `;

  article.querySelector(".category").replaceWith(makeCategoryTag(resource));

  const favoriteButton = article.querySelector(".favorite-button");
  favoriteButton.dataset.resourceId = getResourceId(resource);
  updateFavoriteButton(favoriteButton, getResourceId(resource));
  favoriteButton.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleFavorite(resource, favoriteButton);
  });

  const detailButton = article.querySelector(".detail-link");
  detailButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    openResourceDetail(resource, detailButton);
  });

  article.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) return;
    if (state.mode === "all") {
      if (!isMasonryMode() && article.dataset.active !== "true") {
        setActiveIndex(index);
        return;
      }
      openResourceDetail(resource, article);
      return;
    }
    setActiveIndex(index);
  });

  article.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (state.mode === "all") {
        if (!isMasonryMode() && article.dataset.active !== "true") {
          setActiveIndex(index);
          return;
        }
        openResourceDetail(resource, article);
        return;
      }
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
  if (state.mode === "all") syncFilterPanel(allFilterPanel, "all");
  carousel.classList.toggle(
    "is-sparse-results",
    state.mode === "all" && resources.length > 0 && resources.length <= 4
  );
  carousel.innerHTML = "";

  if (!resources.length) {
    const empty = document.createElement("div");
    empty.className = "resource-empty";
    const title = document.createElement("h2");
    title.textContent = "没有匹配的案例";
    const copy = document.createElement("p");
    copy.textContent = "换一个关键词或筛选方向，或点击上方“重置”查看全部内容。";
    empty.append(title, copy);
    carousel.appendChild(empty);
    syncCommentButtons();
    loadActiveResourceComments();
    layoutCards(true);
    return;
  }

  resources.forEach((resource, index) => {
    carousel.appendChild(makeCard(resource, index));
  });
  syncCommentButtons();
  loadActiveResourceComments();
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
      card.tabIndex = 0;
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
  const total = getCurrentResources().length;
  if (!total) return;
  cancelCommentPlacement();
  if (commentLayer.classList.contains("is-open")) closeComments();
  state.activeIndex = (index + total) % total;
  syncCommentButtons();
  loadActiveResourceComments();
  layoutCards();
}

function setMode(mode, animate = true) {
  cancelCommentPlacement();
  if (commentLayer.classList.contains("is-open")) closeComments();
  if (resourceDetailLayer.classList.contains("is-open")) closeResourceDetail();
  state.mode = mode;
  state.activeIndex = 0;
  const profileMode = mode === "profile";
  appShell.classList.toggle("is-featured-mode", mode === "featured");
  appShell.classList.toggle("is-all-mode", mode === "all");
  allFilterPanel.classList.toggle("is-hidden", mode !== "all");

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

  if (mode === "all") {
    state.issueId = "all";
    state.layoutMode = "masonry";
  }
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

featuredCommentButton.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleCommentPlacement();
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
    if (state.commentPlacementActive) {
      cancelCommentPlacement({ restoreFocus: true });
      return;
    }
    if (publicationLayer.classList.contains("is-open")) {
      closePublicationDialog();
      return;
    }
    if (resourceDetailLayer.classList.contains("is-open")) {
      closeResourceDetail();
      return;
    }
    if (commentLayer.classList.contains("is-open")) {
      closeComments();
      return;
    }
    closeIssueMenu();
    issueFilterButton.focus();
  }
});

resourceDetailBackdrop.addEventListener("click", closeResourceDetail);
resourceDetailClose.addEventListener("click", closeResourceDetail);
publicationBackdrop.addEventListener("click", closePublicationDialog);
publicationClose.addEventListener("click", closePublicationDialog);
publicationCancel.addEventListener("click", closePublicationDialog);
publicationForm.addEventListener("submit", submitPublication);
commentClose.addEventListener("click", closeComments);
cancelReply.addEventListener("click", clearReply);
commentForm.addEventListener("submit", submitComment);
commentPlacementSurface.addEventListener("click", placeCommentComposer);
commentPlacementSurface.addEventListener("pointermove", updateCommentPlacementCursor);
commentPlacementSurface.addEventListener("pointerleave", () => {
  commentPlacementSurface.classList.remove("is-blocked");
});
commentPointCancel.addEventListener("click", () => {
  cancelCommentPlacement({ restoreFocus: true });
});
commentPointForm.addEventListener("submit", submitPointComment);

document.addEventListener("pointerdown", (event) => {
  if (!commentLayer.classList.contains("is-open")) return;
  if (commentPopover.contains(event.target)) return;
  if (event.target.closest(".comment-pin")) return;
  closeComments();
});

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
  if (state.commentPlacementActive) cancelCommentPlacement();
  layoutCards(true);
  if (commentLayer.classList.contains("is-open")) {
    state.commentAnchorViewport = null;
    positionCommentPopover();
  }
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
renderPublicationCategories();
setMode("featured", false);
updateSessionUI();
renderProfile();
loadMemberData();
bootAnimation();
