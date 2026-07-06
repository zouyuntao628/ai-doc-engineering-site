const papers = [
  {
    href: "papers/five-asset-model.html",
    tag: "主论文",
    title: "AI时代的5类资产模型：源码与文档统一管理指南",
    desc: "提出意图、实现、验证、过程、运行时认知5类资产模型，将源码与文档纳入同仓、同分支、同PR、同版本的统一管理体系。",
    keys: ["5类资产", "统一管理", "源码文档协同"]
  },
  {
    href: "papers/paradigm-shift.html",
    tag: "总论",
    title: "AI 编程时代的软件文档范式转移：从代码附属物到协同界面",
    desc: "讨论文档角色从解释代码转向约束生成、组织认知和支撑人机协同的根本变化。",
    keys: ["文档范式", "人机协同", "知识治理"]
  },
  {
    href: "papers/classification-framework.html",
    tag: "框架",
    title: "面向 AI 辅助软件开发的多维项目分类与文档模型匹配框架",
    desc: "用业务、系统、协作、工程四个维度定义项目特征，并匹配认知沉淀、契约中心、领域中心和智能体编排文档模型。",
    keys: ["四维坐标", "场景匹配", "文档模型"]
  },
  {
    href: "papers/documentation-control-plane.html",
    tag: "理论",
    title: "AI 原生软件工程中的文档即控制面：概念、架构与实践框架",
    desc: "把文档定义为控制 AI 生成边界、工具调用、架构约束和异常升级路径的工程控制面。",
    keys: ["控制面", "生成约束", "AI 原生"]
  },
  {
    href: "papers/vibe-coding-cognition.html",
    tag: "场景 A",
    title: "Vibe Coding 场景下的软件认知沉淀机制研究",
    desc: "面向快速原型和频繁抛弃代码的探索型项目，提出实验日志和结构化提取卡。",
    keys: ["原型探索", "实验日志", "认知资产"]
  },
  {
    href: "papers/contract-microservices.html",
    tag: "场景 B",
    title: "AI 辅助微服务开发中的契约中心文档模型研究",
    desc: "以 OpenAPI、AsyncAPI、事件 Schema 和服务蓝图作为多个团队与 AI 共同遵循的唯一真相源。",
    keys: ["微服务", "API 契约", "质量优先"]
  },
  {
    href: "papers/openapi-consistency.html",
    tag: "技术实证",
    title: "基于 OpenAPI/AsyncAPI 的 AI 代码生成一致性保障机制研究",
    desc: "评估机器可读接口文档对代码生成正确率、集成成功率和兼容性审查的影响。",
    keys: ["OpenAPI", "AsyncAPI", "一致性验证"]
  },
  {
    href: "papers/ddd-documentation.html",
    tag: "场景 C",
    title: "AI 时代领域驱动设计的文档化机制研究",
    desc: "把统一语言、限界上下文、领域事件和业务不变量结构化，使 AI 能稳定理解业务语义。",
    keys: ["DDD", "统一语言", "领域模型"]
  },
  {
    href: "papers/product-line-variation.html",
    tag: "平台治理",
    title: "面向多产品线的软件平台文档模型与变异点管理研究",
    desc: "通过平台能力地图、特性配置矩阵和变异点文档管理多客户、多市场产品差异。",
    keys: ["平台型", "产品线", "变异点"]
  },
  {
    href: "papers/agent-machine-interface.html",
    tag: "场景 D",
    title: "AI Agent 应用开发中的机器界面文档模型研究",
    desc: "提出面向 AI 自身使用的机器界面文档，覆盖工具定义、编排规则、记忆策略和求助协议。",
    keys: ["Agent", "机器界面", "工具 Schema"]
  },
  {
    href: "papers/tool-schema-quality.html",
    tag: "技术实证",
    title: "面向大模型工具调用的函数 Schema 文档质量评价研究",
    desc: "研究工具描述、参数 Schema、示例、反例和错误说明如何影响工具调用一次成功率。",
    keys: ["Function Calling", "Schema", "评价指标"]
  },
  {
    href: "papers/document-quality-metrics.html",
    tag: "度量",
    title: "AI 辅助软件开发中的文档质量度量体系研究",
    desc: "建立人类可理解性、机器可消费性、生成约束能力、可追踪性和演进能力指标。",
    keys: ["质量度量", "成熟度模型", "AI-ready"]
  },
  {
    href: "papers/document-version-management.html",
    tag: "治理",
    title: "从代码版本管理到文档版本管理：AI 编程时代的软件配置管理扩展研究",
    desc: "把配置管理对象从代码扩展到 Prompt、实验日志、契约、领域模型和 Agent 规则。",
    keys: ["版本管理", "配置管理", "文档资产"]
  },
  {
    href: "papers/repository-organization.html",
    tag: "工具",
    title: "面向 AI 编程的软件文档仓库组织模式研究",
    desc: "设计 AI-ready 文档仓库结构，使文档同时服务开发者、AI 助手、CI 检查和长期演进。",
    keys: ["文档仓库", "Docs as Code", "工具链"]
  }
];

const mount = document.querySelector("[data-paper-grid]");

if (mount) {
  mount.innerHTML = papers.map((paper) => `
    <a class="card paper-card" href="${paper.href}">
      <div class="tag-row">
        <span class="tag">${paper.tag}</span>
        ${paper.keys.map((key) => `<span class="tag">${key}</span>`).join("")}
      </div>
      <h3>${paper.title}</h3>
      <p>${paper.desc}</p>
      <span class="read">查看论文页</span>
    </a>
  `).join("");
}
