const i18n = {
  zh: {
    brandCn: "开放技术枢纽",
    brandEn: "Open Technology Hub",
    navMission: "使命",
    navProjects: "项目",
    navCommunity: "社区",
    navJoin: "加入我们",
    eyebrow: "开源 · 协作 · 中立",
    heroTitle: "连接开发者、企业与生态伙伴，共建开放技术未来",
    heroDesc: "开放技术枢纽（Open Technology Hub）致力于推动开源项目治理、人才培养与产业协同，让创新以开放方式持续发生。",
    heroBtnPrimary: "成为会员",
    heroBtnSecondary: "浏览项目",
    metric1: "开源项目与工作组",
    metric2: "全球社区贡献者",
    metric3: "企业与机构成员",
    missionTitle: "我们的使命",
    missionDesc: "通过中立、可信和可持续的方式支持开放技术发展，帮助项目从创意走向规模化落地。",
    missionCard1Title: "开放治理",
    missionCard1Desc: "建立透明的技术决策机制，确保社区与企业共同参与。",
    missionCard2Title: "生态协同",
    missionCard2Desc: "连接开发者、基金会、企业与高校，形成高效协作网络。",
    missionCard3Title: "人才发展",
    missionCard3Desc: "提供认证、课程与实践平台，培养下一代开源人才。",
    projectsTitle: "重点项目领域",
    projectsDesc: "聚焦基础设施、云原生、安全与 AI 工程化，推动关键技术标准化和产业应用。",
    project1Title: "云原生与平台工程",
    project1Item1: "容器与编排最佳实践",
    project1Item2: "开发者平台与 DevOps 自动化",
    project1Item3: "可观测性与可靠性体系",
    project2Title: "开源安全与合规",
    project2Item1: "供应链安全与签名验证",
    project2Item2: "许可证治理与合规审计",
    project2Item3: "漏洞响应与安全基线",
    project3Title: "AI 与数据基础设施",
    project3Item1: "开源模型工具链",
    project3Item2: "数据治理与隐私保护",
    project3Item3: "推理与部署效率优化",
    communityTitle: "社区与活动",
    communityDesc: "年度峰会、技术工作坊和线上贡献计划，帮助你快速融入全球开源协作网络。",
    communityCard1Title: "年度开放技术峰会",
    communityCard1Desc: "汇聚维护者、架构师与企业决策者，分享最佳实践与路线图。",
    communityCard2Title: "维护者成长计划",
    communityCard2Desc: "从项目治理、发布流程到社区运营，提供系统化支持。",
    communityCard3Title: "开发者贡献挑战",
    communityCard3Desc: "通过任务驱动与导师机制，让首次贡献更简单、更高效。",
    joinTitle: "加入开放技术枢纽，和全球创新者一起共建未来",
    joinDesc: "无论你是个人开发者、初创团队或大型企业，都可以找到合适的参与方式。",
    joinBtn1: "立即申请",
    joinBtn2: "联系合作",
    footerCopy: "© 2026 开放技术枢纽 Open Technology Hub. All rights reserved.",
    footerLink1: "隐私政策",
    footerLink2: "使用条款",
    footerLink3: "媒体资料"
  },
  en: {
    brandCn: "开放技术枢纽",
    brandEn: "Open Technology Hub",
    navMission: "Mission",
    navProjects: "Projects",
    navCommunity: "Community",
    navJoin: "Join Us",
    eyebrow: "Open Source · Collaboration · Neutrality",
    heroTitle: "Connecting developers, enterprises, and ecosystems to shape an open technology future",
    heroDesc: "Open Technology Hub is dedicated to open-source governance, talent development, and industry collaboration—so innovation can scale in the open.",
    heroBtnPrimary: "Become a Member",
    heroBtnSecondary: "Explore Projects",
    metric1: "Open-source projects & working groups",
    metric2: "Global community contributors",
    metric3: "Enterprise & institutional members",
    missionTitle: "Our Mission",
    missionDesc: "Support open technologies in a neutral, trusted, and sustainable way—from early ideas to real-world adoption.",
    missionCard1Title: "Open Governance",
    missionCard1Desc: "Build transparent decision-making processes with shared participation from communities and enterprises.",
    missionCard2Title: "Ecosystem Collaboration",
    missionCard2Desc: "Connect developers, foundations, companies, and universities into an efficient collaboration network.",
    missionCard3Title: "Talent Development",
    missionCard3Desc: "Offer certifications, courses, and hands-on programs to nurture the next generation of open-source talent.",
    projectsTitle: "Key Project Domains",
    projectsDesc: "Focused on infrastructure, cloud native, security, and AI engineering to accelerate standards and adoption.",
    project1Title: "Cloud Native & Platform Engineering",
    project1Item1: "Container and orchestration best practices",
    project1Item2: "Developer platforms and DevOps automation",
    project1Item3: "Observability and reliability systems",
    project2Title: "Open-source Security & Compliance",
    project2Item1: "Software supply chain security and signing",
    project2Item2: "License governance and compliance auditing",
    project2Item3: "Vulnerability response and security baselines",
    project3Title: "AI & Data Infrastructure",
    project3Item1: "Open model toolchains",
    project3Item2: "Data governance and privacy protection",
    project3Item3: "Inference and deployment optimization",
    communityTitle: "Community & Events",
    communityDesc: "Annual summits, workshops, and online contribution programs to help you join global open collaboration.",
    communityCard1Title: "Annual Open Technology Summit",
    communityCard1Desc: "Bring maintainers, architects, and decision-makers together to share roadmaps and best practices.",
    communityCard2Title: "Maintainer Growth Program",
    communityCard2Desc: "Structured support covering governance, release process, and community operations.",
    communityCard3Title: "Developer Contribution Challenge",
    communityCard3Desc: "Task-driven onboarding with mentors to make first-time contributions faster and easier.",
    joinTitle: "Join Open Technology Hub and build the future with global innovators",
    joinDesc: "Whether you're an individual developer, startup team, or large enterprise, there's a way to participate.",
    joinBtn1: "Apply Now",
    joinBtn2: "Partner with Us",
    footerCopy: "© 2026 Open Technology Hub. All rights reserved.",
    footerLink1: "Privacy Policy",
    footerLink2: "Terms of Use",
    footerLink3: "Press Kit"
  }
};

const zhBtn = document.getElementById("btn-zh");
const enBtn = document.getElementById("btn-en");

function setLanguage(lang) {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  zhBtn.classList.toggle("active", lang === "zh");
  enBtn.classList.toggle("active", lang === "en");
}

zhBtn.addEventListener("click", () => setLanguage("zh"));
enBtn.addEventListener("click", () => setLanguage("en"));

setLanguage("zh");