export interface Project {
  id: string;
  client: string;
  title: string;
  titleRu: string;
  description: string;
  descriptionRu: string;
  investmentSize: string;
  location: string;
  year: number;
  category: ProjectCategory;
  tags: string[];
  featured: boolean;
}

export type ProjectCategory =
  | "corporate-finance"
  | "asset-optimization"
  | "investment-structuring"
  | "risk-analysis"
  | "corporate-governance"
  | "financial-forensics"
  | "fintech"
  | "bankruptcy";

export const projects: Project[] = [
  // CORPORATE FINANCE
  {
    id: "index-consulting",
    client: "Index Consulting",
    title: "Tashkent Sewage Treatment PPP Project",
    titleRu: "Проект ГЧП канализационных очистных сооружений в Ташкенте",
    description: "Development of technical-economic feasibility study for PPP project for construction of sewage treatment facilities. Formed investor consortium including TAQA Group and Suez. Project value: $1.2 billion USD.",
    descriptionRu: "Разработка технико-экономического обоснования проекта ГЧП по строительству канализационных очистных сооружений. Консорциум инвесторов, инициаторы проекта - TAQA Group, Suez. Стоимость проекта: 1,2 млрд USD.",
    investmentSize: "$1.2B",
    location: "Tashkent, Uzbekistan",
    year: 2021,
    category: "corporate-finance",
    tags: ["PPP", "Infrastructure", "International", "Government", "TAQA", "Suez"],
    featured: true
  },
  {
    id: "exchange-one",
    client: "Exchange One",
    title: "Algorithmic Trading & Arbitrage Platform",
    titleRu: "Платформа алгоритмического трейдинга и арбитража",
    description: "Development of algorithmic trading algorithms, arbitrage strategies, and framework design for cryptocurrency exchange access. Implemented sophisticated trading strategies for optimal market execution.",
    descriptionRu: "Разработка алгоритмов алгоритмического трейдинга, арбитражных стратегий. Участие в проектировании фреймворка доступа к криптовалютным биржам. Реализованы сложные торговые стратегии для оптимального исполнения.",
    investmentSize: "Undisclosed",
    location: "International",
    year: 2020,
    category: "corporate-finance",
    tags: ["FinTech", "Crypto", "Algorithmic Trading", "Arbitrage", "Blockchain"],
    featured: true
  },
  {
    id: "ooo-fort",
    client: "OOO Fort",
    title: "N-Butyllithium Production Revival",
    titleRu: "Возобновление производства н-бутиллития",
    description: "Preliminary feasibility assessment for resuming n-butyllithium production at Voronezh branch of FGUP NIISC facilities. Strategic chemical manufacturing project with high barrier to entry.",
    descriptionRu: "Предварительная оценка реализуемости проекта возобновления производства н-бутиллития на мощностях воронежского филиала ФГУП НИИСК. Стратегический проект в химической промышленности с высоким входным барьером.",
    investmentSize: "Undisclosed",
    location: "Voronezh, Russia",
    year: 2020,
    category: "corporate-finance",
    tags: ["Chemical", "Manufacturing", "Industrial", "Feasibility Study"],
    featured: false
  },
  {
    id: "lorenzo-design",
    client: "Lorenzo Design",
    title: "Virtual Interior Design Studio Investment Memorandum",
    titleRu: "Инвестиционный меморандум виртуальной интерьерной студии",
    description: "Development of investment memorandum for virtual interior design studio creation. Concept monetization strategy and cash flow projections for innovative digital-first design venture.",
    descriptionRu: "Разработка инвестиционного меморандума проекта создания интерьерной студии в виртуальном пространстве. Концепция монетизации, расчет денежных потоков для инновационного цифрового проекта.",
    investmentSize: "Undisclosed",
    location: "Russia",
    year: 2020,
    category: "corporate-finance",
    tags: ["VR", "Design", "Startup", "Digital", "Investment Memorandum"],
    featured: false
  },
  {
    id: "insei",
    client: "OOO INSEI",
    title: "Railway Wagon Manufacturing Business Plan",
    titleRu: "Бизнес-план вагоноремонтного производства",
    description: "Comprehensive business plan for investment project to create and develop railway wagon repair (construction) production for railway tank cars in Tatarstan Republic. Industrial scale manufacturing project.",
    descriptionRu: "Создание бизнес-плана инвестиционного проекта по созданию и развитию вагоноремонтного (вагоностроительного) производства железнодорожных цистерн на территории Республики Татарстан. Крупный промышленный проект.",
    investmentSize: "Undisclosed",
    location: "Tatarstan, Russia",
    year: 2019,
    category: "corporate-finance",
    tags: ["Industrial", "Railway", "Manufacturing", "Business Planning"],
    featured: false
  },
  {
    id: "mariinsky-distillery",
    client: "OOO Mariinsky Distillery",
    title: "Anti-Crisis Strategy & Financial Due Diligence",
    titleRu: "Антикризисная стратегия и финансовый due diligence",
    description: "Development of anti-crisis measures, comprehensive financial due diligence, and implementation of investment and operational controlling systems. Strategic turnaround for distillery operations.",
    descriptionRu: "Разработка антикризисных мероприятий, финансовый due diligence, разработка системы инвестиционного и операционного контроллинга. Стратегическое разворачивание бизнеса ликеро-водочного завода.",
    investmentSize: "Undisclosed",
    location: "Rostov-on-Don, Russia",
    year: 2019,
    category: "corporate-finance",
    tags: ["Turnaround", "Due Diligence", "Controlling", "Crisis Management"],
    featured: false
  },

  // ASSET OPTIMIZATION
  {
    id: "rozhdestveno",
    client: "Rozhdestveno Geriatric Hospice",
    title: "Geriatric Hospice Development Business Plan",
    titleRu: "Бизнес-план гериатрического пансионата Рождествено",
    description: "Creation of business plan for geriatric hospice project. Concept of most effective use of territory and project monetization strategy for healthcare real estate development.",
    descriptionRu: "Создание бизнес-плана проекта организации гериатрического пансионата Рождествено. Концепция наиболее эффективного использования территории, монетизация проекта в сфере здравоохранения.",
    investmentSize: "Undisclosed",
    location: "Leningrad Region, Russia",
    year: 2019,
    category: "asset-optimization",
    tags: ["Healthcare", "Real Estate", "Asset Optimization", "Geriatric Care"],
    featured: false
  },
  {
    id: "diomar",
    client: "NPO Diomar",
    title: "Manganese Production Plant Expansion",
    titleRu: "Расширение завода по производству марганца",
    description: "Development of technical-economic justification for second phase construction and most effective use of existing assets for electrolytic manganese Mn997 production plant. Strategic industrial expansion.",
    descriptionRu: "Разработка технико-экономического обоснования строительства второй очереди и наиболее эффективного использования существующих активов завода по производству электролитического марганца Mn997. Стратегическое расширение производства.",
    investmentSize: "Undisclosed",
    location: "Leningrad Region, Russia",
    year: 2019,
    category: "asset-optimization",
    tags: ["Industrial", "Manufacturing", "Asset Optimization", "Expansion"],
    featured: false
  },
  {
    id: "realcom-portal",
    client: "OOO RealCom Portal",
    title: "Youth Recreational Zone Development",
    titleRu: "Рекреационно-курортная зона для молодежи",
    description: "Creation of financial business model and business plan for investment project to create recreational resort zone for youth (10,000 people, 170 hectares). Large-scale leisure development project.",
    descriptionRu: "Создание финансовой модели бизнеса и бизнес-плана инвестиционного проекта по созданию рекреационно-курортной зоны для молодежи (10 000 чел, 170 Га). Крупный проект развития досуговой инфраструктуры.",
    investmentSize: "Undisclosed",
    location: "Saint Petersburg, Russia",
    year: 2019,
    category: "asset-optimization",
    tags: ["Real Estate", "Recreation", "Youth", "Large-Scale Development"],
    featured: false
  },
  {
    id: "omk-group",
    client: "OOO OMK-Group",
    title: "Karelia Waste Management Program",
    titleRu: "Программа обращения с ТБО в Карелии",
    description: "Creation of concept for collection, sorting, and processing of solid municipal waste in Karelia Republic. Business planning for waste processing clusters, financial modeling, ROI assessment.",
    descriptionRu: "Создание концепции сбора, сортировки и переработки ТБО в Республике Карелия. Бизнес-план кластеров переработки ТБО, финансовое моделирование, оценка окупаемости проекта.",
    investmentSize: "Undisclosed",
    location: "Karelia Republic, Russia",
    year: 2018,
    category: "asset-optimization",
    tags: ["Waste Management", "Environmental", "Regional Development", "Clusters"],
    featured: false
  },

  // INVESTMENT STRUCTURING
  {
    id: "iv-service",
    client: "OOO IV Service",
    title: "Truck Service Station Network Financing",
    titleRu: "Финансирование сети СТО грузовых автомобилей",
    description: "Business plan development for truck service station. Cash flow calculations, concept development for the complex. Successfully secured 350 million RUB financing from Rosselkhozbank.",
    descriptionRu: "Разработка бизнес-плана станции технического обслуживания грузовых автомобилей. Расчет денежных потоков, разработка концепции комплекса. Получено финансирование 350 млн руб. в РСХБ.",
    investmentSize: "350M RUB",
    location: "Russia",
    year: 2020,
    category: "investment-structuring",
    tags: ["Automotive", "Service Network", "Financing", "Rosselkhozbank"],
    featured: false
  },
  {
    id: "resource-saving",
    client: "GK Ressursosberezhenie, Spetstrans No.1",
    title: "Waste Processing Plant Network Financing",
    titleRu: "Финансирование сети заводов по переработке ТБО",
    description: "Business model development for network of solid municipal waste processing plants. Deal structuring and financing support in VEB.RF group. Environmental infrastructure project.",
    descriptionRu: "Разработка бизнес-модели проекта создания сети заводов по переработке твердых бытовых отходов. Сопровождение сделки по финансированию проекта в группе ВЭБ. Инфраструктурный экологический проект.",
    investmentSize: "Undisclosed",
    location: "Saint Petersburg, Russia",
    year: 2019,
    category: "investment-structuring",
    tags: ["Waste Management", "Financing", "VEB.RF", "Infrastructure"],
    featured: false
  },
  {
    id: "metalloproduktsiya",
    client: "OOo Metalloproduktsiya - Sheriff",
    title: "Car Protection Products Manufacturing Financing",
    titleRu: "Финансирование производства защиты карьера Шериф",
    description: "Business planning and financing attraction in VTB banks group for car crankcase protection products manufacturer. Automotive accessories market expansion project.",
    descriptionRu: "Бизнес-планирование, привлечение финансирования в группе банков ВТБ для производителя защиты картера автомобилей. Проект расширения на рынке автомобильных аксессуаров.",
    investmentSize: "Undisclosed",
    location: "Saint Petersburg, Russia",
    year: 2019,
    category: "investment-structuring",
    tags: ["Automotive", "Manufacturing", "Financing", "VTB"],
    featured: false
  },
  {
    id: "neon",
    client: "OOO Neon",
    title: "Pharmaceutical Manufacturing Market Entry",
    titleRu: "Выход на рынок фармпрепаратов",
    description: "Business plan and marketing strategy development for new pharmaceutical manufacturing enterprise market entry. Deal structuring for financing in VEB, VTB, Sberbank. Multi-bank financing structure.",
    descriptionRu: "Разработка бизнес-плана и маркетинговой стратегии выхода нового производственного предприятия на рынок фармпрепаратов. Сопровождение сделок по привлечению финансирования в ВЭБ, ВТБ, Сбербанке.",
    investmentSize: "Undisclosed",
    location: "Saint Petersburg, Russia",
    year: 2019,
    category: "investment-structuring",
    tags: ["Pharmaceutical", "Market Entry", "Multi-Bank Financing", "Manufacturing"],
    featured: false
  },
  {
    id: "remos-alpha",
    client: "OOO Remos-Alpha",
    title: "Corrugated Cardboard Production Modernization",
    titleRu: "Модернизация гофрокартонного производства",
    description: "Business plan creation for corrugated cardboard production modernization. Secured 1 billion RUB financing from VTB group. Industrial manufacturing expansion project.",
    descriptionRu: "Создание бизнес-плана проекта модернизации гофрокартонного производства для получения финансирования в группе ВТБ объемом 1 млрд руб. Проект расширения промышленного производства.",
    investmentSize: "1B RUB",
    location: "Russia",
    year: 2018,
    category: "investment-structuring",
    tags: ["Manufacturing", "Modernization", "VTB", "Packaging"],
    featured: false
  },
  {
    id: "kolomyagi",
    client: "ANO FC Kolomyagi",
    title: "Sports Training Center Development",
    titleRu: "Спортивный тренировочный центр Коломяги",
    description: "Financing for modern sports training center creation for Kolomyagi football club. Business planning, financial modeling, and investment attraction from DOM.RF group. Sports infrastructure development.",
    descriptionRu: "Финансирование проекта создания современного спортивного тренировочного центра для футбольного клуба Коломяги. Бизнес-планирование, финансовое моделирование и привлечение инвестиций от группы ДОМ.РФ.",
    investmentSize: "Undisclosed",
    location: "Saint Petersburg, Russia",
    year: 2020,
    category: "investment-structuring",
    tags: ["Sports", "Infrastructure", "DOM.RF", "Football"],
    featured: false
  },

  // RISK ANALYSIS
  {
    id: "kyrgyz-distribution",
    client: "Medical Distribution Center Project",
    title: "Medical Supplies Distribution Center Feasibility",
    titleRu: "Распределительный центр медикаментов в Киргизии",
    description: "Project attractiveness assessment for medical supplies distribution center construction in Kyrgyz Republic. Market volume analysis, creation of enterprise financial model.",
    descriptionRu: "Оценка привлекательности проекта строительства распределительного центра медицинских расходных материалов в республике Киргизия. Оценка объемов рынка, создание финмодели деятельности предприятия.",
    investmentSize: "Undisclosed",
    location: "Kyrgyz Republic",
    year: 2019,
    category: "risk-analysis",
    tags: ["Healthcare", "Distribution", "Market Analysis", "Central Asia"],
    featured: false
  },
  {
    id: "samson-med",
    client: "OOO Samson-Med",
    title: "Poultry Farm Investment Project",
    titleRu: "Инвестиционный проект птицефабрики",
    description: "Business plan creation for investment project of poultry farm construction with 50,000 tons meat annual production capacity. Large-scale agribusiness development.",
    descriptionRu: "Создание бизнес-плана инвестиционного проекта строительства птицефабрики на 50 000 т. мяса в год. Крупный проект развития агробизнеса.",
    investmentSize: "Undisclosed",
    location: "Saint Petersburg, Russia",
    year: 2019,
    category: "risk-analysis",
    tags: ["Agriculture", "Poultry", "Investment Project", "Food Production"],
    featured: false
  },
  {
    id: "growfood",
    client: "GrowFood Group",
    title: "Healthy Meal Delivery Market Research",
    titleRu: "Маркетинговое исследование доставки готового питания",
    description: "Marketing research of ready-made meal sets market comprising daily balanced nutrition delivered home periodically. Consumer behavior analysis and market sizing.",
    descriptionRu: "Маркетинговое исследование рынков готовых наборов питания, составляющих ежедневный сбалансированный рацион питания человека, доставляемых с определенной периодичностью на дом.",
    investmentSize: "Undisclosed",
    location: "Saint Petersburg, Moscow",
    year: 2018,
    category: "risk-analysis",
    tags: ["FoodTech", "Market Research", "Delivery", "Consumer Analysis"],
    featured: false
  },
  {
    id: "pbl-holding-noorus",
    client: "OOO UK PBL Holding",
    title: "Noorus Water Park Development",
    titleRu: "Строительство аквапарка Noorus",
    description: "Development of most effective assets use concept, business idea creation, and business plan for Noorus water park construction in Narva-Joesuu, Estonia. International leisure project.",
    descriptionRu: "Разработка концепции наиболее эффективного использования активов, разработка бизнес-идеи и создание бизнес-плана строительства аквапарка Noorus в г. Нарва-Йесуу, Эстония. Международный досуговый проект.",
    investmentSize: "Undisclosed",
    location: "Narva-Joesuu, Estonia",
    year: 2017,
    category: "risk-analysis",
    tags: ["Leisure", "Water Park", "Estonia", "Real Estate"],
    featured: true
  },
  {
    id: "blockchain-employment",
    client: "Blockchain Employment Startup",
    title: "Blockchain Employment Network Startup",
    titleRu: "Стартап блокчейн-сети трудоустройства",
    description: "Participation as founder in launching startup for employment information exchange network and ricardian contracts registration in blockchain. Innovative HR tech venture.",
    descriptionRu: "Участие в качестве фаундера в запуске стартапа по созданию сети обмена информацией по трудоустройству сотрудников и заключения ими рикардианских контрактов с регистрацией в блокчейне.",
    investmentSize: "Undisclosed",
    location: "International",
    year: 2018,
    category: "risk-analysis",
    tags: ["Blockchain", "HR Tech", "Startup", "Ricardian Contracts"],
    featured: false
  },

  // CORPORATE GOVERNANCE
  {
    id: "penoplex",
    client: "Penoplex Group",
    title: "Strategic Development & Financing",
    titleRu: "Стратегическое развитие и финансирование Пеноплэкс",
    description: "Business planning, financing attraction up to 4.5 billion RUB, marketing justifications for group strategy development. Express analysis of department efficiency, anti-crisis proposals development.",
    descriptionRu: "Бизнес-планирование, привлечение финансирования до 4,5 млрд руб., маркетинговые обоснования к разработке стратегии группы. Экспресс-анализ эффективности работы подразделений, разработка антикризисных предложений.",
    investmentSize: "4.5B RUB",
    location: "Saint Petersburg, Russia",
    year: 2018,
    category: "corporate-governance",
    tags: ["Construction Materials", "Strategy", "Large Financing", "Anti-Crisis"],
    featured: true
  },
  {
    id: "karelia-waste",
    client: "Karelia Republic Waste Management",
    title: "Waste Collection & Utilization Concept",
    titleRu: "Концепция сбора и утилизации ТБО Карелии",
    description: "Development of waste collection and utilization concept for Karelia Republic. Determination of waste collection stations locations, landfill sites, tariff calculations. Regional environmental infrastructure.",
    descriptionRu: "Разработка концепции сбора и утилизации ТБО республики Карелия. Определение местоположения станций сбора ТБО, полигонов утилизации, расчет тарифов.",
    investmentSize: "Undisclosed",
    location: "Karelia Republic, Russia",
    year: 2018,
    category: "corporate-governance",
    tags: ["Waste Management", "Regional", "Tariff Regulation", "Environmental"],
    featured: false
  },
  {
    id: "big-durisol",
    client: "OOo BiG",
    title: "Durisol Formwork Network Expansion",
    titleRu: "Расширение сети заводов Дюрисол",
    description: "Business model development for expanding network of factories producing non-removable construction formwork Durisol. Project presentation in RHS Fund. Construction materials manufacturing expansion.",
    descriptionRu: "Разработка бизнес-модели расширения сети заводов по производству несъемной строительной опалубки Дюрисол, презентация проекта в Фонде РЖС.",
    investmentSize: "Undisclosed",
    location: "Saint Petersburg, Russia",
    year: 2018,
    category: "corporate-governance",
    tags: ["Construction", "Formwork", "Expansion", "RHS Fund"],
    featured: false
  },
  {
    id: "ebrd-murmansk",
    client: "European Bank for Reconstruction and Development",
    title: "Murmansk Water Improvement Feasibility Study",
    titleRu: "ТЭО водоснабжения Мурманской области",
    description: "Comprehensive feasibility study for water infrastructure improvement in Murmansk region (EBRD Ref. 27646). International development project with institutional backing.",
    descriptionRu: "Комплексное технико-экономическое обоснование улучшения водной инфраструктуры Мурманской области (EBRD Ref. 27646). Международный проект развития с поддержкой института развития.",
    investmentSize: "Undisclosed",
    location: "Murmansk Region, Russia",
    year: 2017,
    category: "corporate-governance",
    tags: ["Infrastructure", "EBRD", "Water", "International Development"],
    featured: true
  },

  // FINANCIAL FORENSICS
  {
    id: "piedra-los-martires",
    client: "Piedra Los Mártires S.L.",
    title: "Dairy Factory Financial Due Diligence",
    titleRu: "Финансовый due diligence сыроваренного завода",
    description: "Financial due diligence of cheese factory, assessment of company buyout prospects and risks, audit of reporting and enterprise assets. International forensic analysis in Spain.",
    descriptionRu: "Финансовый дью дилидженс сыроваренного завода, оценка перспектив и рисков выкупа компании, аудит отчетности и активов предприятия. Международный форензик-анализ в Испании.",
    investmentSize: "Undisclosed",
    location: "Castile and Leon, Spain",
    year: 2019,
    category: "financial-forensics",
    tags: ["Due Diligence", "Forensics", "Spain", "Dairy", "M&A"],
    featured: true
  },

  // FINTECH
  {
    id: "worldcore-ico",
    client: "Worldcore ICO",
    title: "FinTech Startup Media Support",
    titleRu: "Медиа-поддержка финтех-стартапа Worldcore",
    description: "Media presence support for fintech startup worldcore.eu. Posting on bitcointalk.org, weekly crypto-themed articles. Publications in Forbes, Kommersant. Strategic communications for ICO.",
    descriptionRu: "Поддержка медиа-присутствия финтех-стартапа worldcore.eu. Постинг на bitcointalk.org, еженедельные статьи на криптовалютную тематику. Публикации в Forbes, Коммерсанте.",
    investmentSize: "Undisclosed",
    location: "International",
    year: 2017,
    category: "fintech",
    tags: ["ICO", "FinTech", "Crypto", "Media Relations", "Forbes"],
    featured: false
  },
  {
    id: "paycrypto",
    client: "Paycrypto.money",
    title: "Scheduled Payment System Development",
    titleRu: "Система платежей по расписанию",
    description: "Development of scheduled payment system, product management, market hypothesis development, module and process design. Innovative payment infrastructure project.",
    descriptionRu: "Разработка системы платежей по расписанию, управление продуктом, разработка рыночных гипотез, проектирование модулей и процессов.",
    investmentSize: "Undisclosed",
    location: "International",
    year: 2018,
    category: "fintech",
    tags: ["FinTech", "Payments", "Product Management", "Innovation"],
    featured: false
  },
  {
    id: "pipsar-bot",
    client: "Pipsar.bot",
    title: "Arbitrage Trading Bot Development",
    titleRu: "Арбитражный трейдинговый бот",
    description: "Algorithm development for arbitrage-trading bot. Quantitative research, trading algorithm analysis and dependent variables. Product management for automated trading solution.",
    descriptionRu: "Разработка алгоритмов работы арбитражно-трейдингового бота. Quantitative research, анализ трейдинговых алгоритмов и зависимых переменных.",
    investmentSize: "Undisclosed",
    location: "International",
    year: 2019,
    category: "fintech",
    tags: ["Trading Bot", "Arbitrage", "Quant", "Algorithmic Trading", "Crypto"],
    featured: false
  },

  // BANKRUPTCY
  {
    id: "iis-bankruptcy",
    client: "AO I.I.S.",
    title: "Bankruptcy Process Financial Management",
    titleRu: "Управление финансами в банкротстве",
    description: "Bankruptcy procedure support and cash flow management to minimize financial risks for company owners and management. Strategic loss mitigation during insolvency proceedings.",
    descriptionRu: "Сопровождение процедуры банкротства и управление денежными потоками для минимизации финансовых рисков собственников компании и ее менеджмента.",
    investmentSize: "Undisclosed",
    location: "Russia",
    year: 2020,
    category: "bankruptcy",
    tags: ["Bankruptcy", "Turnaround", "Cash Flow", "Risk Mitigation"],
    featured: false
  }
];

export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  return projects.filter(p => p.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(p => p.featured);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(p => p.id === id);
};

export const getProjectsByTag = (tag: string): Project[] => {
  return projects.filter(p => p.tags.includes(tag));
};

export const getProjectCategories = (): ProjectCategory[] => {
  return Array.from(new Set(projects.map(p => p.category)));
};

export const getAllTags = (): string[] => {
  const tags = projects.flatMap(p => p.tags);
  return Array.from(new Set(tags)).sort();
};
