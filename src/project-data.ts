export type Project = {
  slug: string;
  title: string;
  category: "AI 应用" | "Agent" | "开发工具";
  year: string;
  description: string;
  value: string;
  introduction: string;
  stack: string[];
  status: string;
  preview: string;
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "knowledge-copilot",
    title: "AI 知识库助手",
    category: "AI 应用",
    year: "2026",
    description: "支持文档上传、语义检索和引用溯源的个人知识问答应用。",
    value: "让零散资料变成可搜索、可追溯的个人知识库。",
    introduction: "这是一个面向个人资料管理的知识问答项目。用户可以上传文档、建立索引，并在回答中查看引用来源。项目重点处理长文档检索、回答依据展示和无答案时的安全回退。",
    stack: ["Vue 3", "FastAPI", "Qdrant", "RAG"],
    status: "持续维护",
    preview: "violet",
    github: "https://github.com/xiaozhanxiaozhan",
  },
  {
    slug: "multi-agent-research",
    title: "多智能体研究工具",
    category: "Agent",
    year: "2026",
    description: "让多个 Agent 分工搜索、分析并整理资料的研究工作台。",
    value: "减少重复搜索与人工整理，提高复杂主题研究效率。",
    introduction: "系统把研究问题拆成若干子任务，由不同 Agent 负责搜索、阅读、核验和汇总，并保留完整来源。用户可以查看任务进度、工具调用和最终引用。",
    stack: ["Python", "LangGraph", "FastAPI", "PostgreSQL"],
    status: "持续开发",
    preview: "mint",
    github: "https://github.com/xiaozhanxiaozhan",
  },
  {
    slug: "model-evaluation",
    title: "模型评测面板",
    category: "AI 应用",
    year: "2025",
    description: "对提示词、模型回答和多模态任务进行对比测试与记录。",
    value: "让模型选择与提示词迭代建立在可复现结果上。",
    introduction: "一个轻量的模型与提示词评测工作台，支持保存数据集、批量运行实验、人工标注和结果对比。适合在接入新模型或更新提示词前进行回归检查。",
    stack: ["FastAPI", "Vue 3", "VLM", "SQLite"],
    status: "可用版本",
    preview: "peach",
    github: "https://github.com/xiaozhanxiaozhan",
  },
  {
    slug: "mcp-toolbox",
    title: "MCP 工具箱",
    category: "开发工具",
    year: "2025",
    description: "一组可复用的 MCP Server，用于文件、数据与工作流自动化。",
    value: "用标准接口复用工具能力，降低 Agent 集成成本。",
    introduction: "项目把常见的文件处理、数据查询和自动化能力封装成独立 MCP Server，提供统一配置、错误处理与日志，便于在不同 Agent 客户端之间复用。",
    stack: ["TypeScript", "MCP", "Node.js", "Zod"],
    status: "开源维护",
    preview: "slate",
    github: "https://github.com/xiaozhanxiaozhan",
  },
  {
    slug: "prompt-regression",
    title: "提示词回归测试",
    category: "开发工具",
    year: "2025",
    description: "在 CI 中批量验证提示词、结构化输出与关键行为。",
    value: "避免提示词改动悄悄破坏已经稳定的 AI 功能。",
    introduction: "面向 AI 应用的回归测试 CLI。它读取版本化测试用例，调用目标模型，并对结构、关键词和语义指标进行检查，可直接接入持续集成流程。",
    stack: ["Python", "Pytest", "GitHub Actions", "LLM"],
    status: "实验项目",
    preview: "blue",
    github: "https://github.com/xiaozhanxiaozhan",
  },
  {
    slug: "cost-router",
    title: "LLM 成本路由器",
    category: "Agent",
    year: "2025",
    description: "根据任务、预算和失败策略选择合适模型的路由服务。",
    value: "在保证基础质量的同时，让多模型调用更容易控制。",
    introduction: "一个面向多模型应用的轻量路由层。支持按任务类型、预算、上下文长度和可用性配置策略，并记录每次决策与调用成本。",
    stack: ["Go", "Redis", "OpenAI API", "Tracing"],
    status: "原型验证",
    preview: "yellow",
    github: "https://github.com/xiaozhanxiaozhan",
  },
];

export const categories = ["全部", "AI 应用", "Agent", "开发工具"] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}



