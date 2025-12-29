'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, PieChart, ShieldCheck, TrendingUp, Handshake, FileText, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { projects, getProjectsByCategory } from '@/data/projects';

interface SubService {
  id: string;
  title: string;
  titleRu: string;
  description: string;
  descriptionRu: string;
  categoryKey: string;
}

const subServices: SubService[] = [
  // Financial Architecture
  { id: 'feasibility', title: 'Investment Feasibility', titleRu: 'Инвестиционная Осуществимость', description: 'Comprehensive feasibility studies for major infrastructure and industrial projects', descriptionRu: 'Комплексные технико-экономические обоснования для крупных инфраструктурных и промышленных проектов', categoryKey: 'corporate-finance' },
  { id: 'modeling', title: 'Financial Modeling', titleRu: 'Финансовое Моделирование', description: 'Precision cash flow analysis and financial projections for multi-billion dollar ventures', descriptionRu: 'Точный анализ денежных потоков и финансовые прогнозы для многомиллиардных проектов', categoryKey: 'corporate-finance' },
  { id: 'ppp', title: 'PPP Projects', titleRu: 'ГЧП Проекты', description: 'Public-private partnership structuring and government engagement strategies', descriptionRu: 'Структурирование государственно-частных партнерств и стратегии взаимодействия с правительством', categoryKey: 'corporate-finance' },

  // Strategic Mandates
  { id: 'market-entry', title: 'Market Entry', titleRu: 'Вход на Рынок', description: 'Strategic market analysis and entry planning for new ventures', descriptionRu: 'Стратегический анализ рынка и планирование входа для новых предприятий', categoryKey: 'corporate-governance' },
  { id: 'diagnostic', title: 'Diagnostic Audit', titleRu: 'Диагностический Аудит', description: 'Comprehensive business diagnostics and performance optimization', descriptionRu: 'Комплексная бизнес-диагностика и оптимизация производительности', categoryKey: 'risk-analysis' },
  { id: 'growth', title: 'Growth Playbooks', titleRu: 'Стратегии Роста', description: 'Scalable growth strategies and operational excellence frameworks', descriptionRu: 'Масштабируемые стратегии роста и фреймворки операционного превосходства', categoryKey: 'corporate-governance' },

  // Investment Forensics
  { id: 'risk-analysis', title: 'Risk Assessment', titleRu: 'Оценка Рисков', description: 'In-depth risk analysis and mitigation strategies for complex investments', descriptionRu: 'Глубокий анализ рисков и стратегии смягчения для сложных инвестиций', categoryKey: 'risk-analysis' },
  { id: 'independent-review', title: 'Independent Review', titleRu: 'Независимый Обзор', description: 'Unbiased investment evaluation and due diligence services', descriptionRu: 'Непредвятая оценка инвестиций и услуги due diligence', categoryKey: 'financial-forensics' },
  { id: 'market-research', title: 'Market Intelligence', titleRu: 'Рыночная Разведка', description: 'Comprehensive market research and competitive landscape analysis', descriptionRu: 'Комплексные рыночные исследования и анализ конкурентной среды', categoryKey: 'risk-analysis' },

  // Project Assurance
  { id: 'project-audit', title: 'Project Audit', titleRu: 'Аудит Проектов', description: 'Independent project performance audits and milestone verification', descriptionRu: 'Независимый аудит производительности проектов и проверка вех', categoryKey: 'asset-optimization' },
  { id: 'due-diligence', title: 'Due Diligence', titleRu: 'Due Diligence', description: 'Comprehensive due diligence for M&A and investment decisions', descriptionRu: 'Комплексный due diligence для сделок M&A и инвестиционных решений', categoryKey: 'financial-forensics' },
  { id: 'benchmarking', title: 'Performance Benchmarking', titleRu: 'Бенчмаркинг Производительности', description: 'Industry benchmarking and KPI optimization', descriptionRu: 'Отраслевой бенчмаркинг и оптимизация KPI', categoryKey: 'asset-optimization' },

  // Debt Engineering
  { id: 'restructuring', title: 'Debt Restructuring', titleRu: 'Реструктуризация Долга', description: 'Complex debt restructuring and liability management', descriptionRu: 'Сложная реструктуризация долга и управление обязательствами', categoryKey: 'investment-structuring' },
  { id: 'capacity', title: 'Debt Capacity', titleRu: 'Долговая Емкость', description: 'Optimal capital structure analysis and debt capacity planning', descriptionRu: 'Анализ оптимальной структуры капитала и планирование долговой емкости', categoryKey: 'investment-structuring' },
  { id: 'structured-finance', title: 'Structured Finance', titleRu: 'Структурированные Финансы', description: 'Innovative financing structures and capital raising strategies', descriptionRu: 'Инновационные финансовые структуры и стратегии привлечения капитала', categoryKey: 'investment-structuring' },

  // Transaction Advisory
  { id: 'ma-strategy', title: 'M&A Strategy', titleRu: 'Стратегия M&A', description: 'End-to-end M&A support from target identification to post-merger integration', descriptionRu: 'Полная поддержка M&A от поиска целей до пост-интеграционной интеграции', categoryKey: 'corporate-governance' },
  { id: 'valuation', title: 'Asset Valuation', titleRu: 'Оценка Активов', description: 'Institutional-grade business valuation and asset pricing', descriptionRu: 'Институциональная оценка бизнеса и ценообразование активов', categoryKey: 'corporate-finance' },
  { id: 'deal-structuring', title: 'Deal Structuring', titleRu: 'Структурирование Сделок', description: 'Complex deal structuring and negotiation support', descriptionRu: 'Сложное структурирование сделок и поддержка переговоров', categoryKey: 'investment-structuring' },
];

const serviceSubServices: Record<string, SubService[]> = {
  'arch': subServices.filter(s => ['feasibility', 'modeling', 'ppp'].includes(s.id)),
  'strat': subServices.filter(s => ['market-entry', 'diagnostic', 'growth'].includes(s.id)),
  'forensics': subServices.filter(s => ['risk-analysis', 'independent-review', 'market-research'].includes(s.id)),
  'assurance': subServices.filter(s => ['project-audit', 'due-diligence', 'benchmarking'].includes(s.id)),
  'debt': subServices.filter(s => ['restructuring', 'capacity', 'structured-finance'].includes(s.id)),
  'advisory': subServices.filter(s => ['ma-strategy', 'valuation', 'deal-structuring'].includes(s.id)),
};

const Services = () => {
    const { t, language } = useLanguage();
    const [hoveredService, setHoveredService] = useState<string | null>(null);
    const [selectedSubService, setSelectedSubService] = useState<SubService | null>(null);
    const [showProjectsModal, setShowProjectsModal] = useState(false);

    const services = [
        {
            key: 'arch',
            title: t('services.items.arch.title'),
            desc: t('services.items.arch.desc'),
            icon: <BarChart3 className="w-8 h-8" />,
            features: t('services.items.arch.features'),
        },
        {
            key: 'strat',
            title: t('services.items.strat.title'),
            desc: t('services.items.strat.desc'),
            icon: <TrendingUp className="w-8 h-8" />,
            features: t('services.items.strat.features'),
        },
        {
            key: 'forensics',
            title: t('services.items.forensics.title'),
            desc: t('services.items.forensics.desc'),
            icon: <PieChart className="w-8 h-8" />,
            features: t('services.items.forensics.features'),
        },
        {
            key: 'assurance',
            title: t('services.items.assurance.title'),
            desc: t('services.items.assurance.desc'),
            icon: <ShieldCheck className="w-8 h-8" />,
            features: t('services.items.assurance.features'),
        },
        {
            key: 'debt',
            title: t('services.items.debt.title'),
            desc: t('services.items.debt.desc'),
            icon: <FileText className="w-8 h-8" />,
            features: t('services.items.debt.features'),
        },
        {
            key: 'advisory',
            title: t('services.items.advisory.title'),
            desc: t('services.items.advisory.desc'),
            icon: <Handshake className="w-8 h-8" />,
            features: t('services.items.advisory.features'),
        },
    ];

    const handleSubServiceClick = (subService: SubService) => {
        setSelectedSubService(subService);
        setShowProjectsModal(true);
    };

    const relatedProjects = selectedSubService
        ? getProjectsByCategory(selectedSubService.categoryKey as any)
        : [];

    return (
        <section id="services" className="py-32 bg-white overflow-hidden relative">
            <div className="max-width-container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-3xl">
                        <span className="text-institutional-gold font-bold uppercase tracking-[0.4em] text-xs block mb-4">
                            {t('services.tagline')}
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-institutional-navy tracking-tight">
                            {t('services.title_start')} <br />
                            <span>{t('services.title_highlight')}</span>
                        </h2>
                    </div>
                    <p className="text-lg text-institutional-slate/80 max-w-sm font-light leading-relaxed">
                        {t('services.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-gray-200 border border-gray-200 shadow-2xl relative">
                    {services.map((service) => (
                        <motion.div
                            key={service.key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white p-12 relative"
                            onMouseEnter={() => setHoveredService(service.key)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            <div className="text-institutional-gold mb-8">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-institutional-navy mb-4">
                                {service.title}
                            </h3>
                            <p className="text-institutional-slate mb-8 leading-relaxed">
                                {service.desc}
                            </p>

                            <ul className="space-y-3">
                                {Array.isArray(service.features) && service.features.map((f: string) => (
                                    <li key={f} className="flex items-center gap-2 text-sm font-medium text-institutional-navy/40 uppercase tracking-widest">
                                        <div className="w-1 h-1 bg-current rounded-full" />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            {/* Sub-services menu */}
                            <AnimatePresence>
                                {hoveredService === service.key && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute top-0 left-0 w-full bg-institutional-navy text-white p-8 z-10 overflow-hidden"
                                    >
                                        <h4 className="text-lg font-bold mb-6 text-institutional-gold uppercase tracking-wider">
                                            {language === 'ru' ? 'Специализации' : 'Specializations'}
                                        </h4>
                                        <div className="space-y-3">
                                            {serviceSubServices[service.key]?.map((sub) => (
                                                <motion.button
                                                    key={sub.id}
                                                    initial={{ x: -20, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: 0.1 }}
                                                    onClick={() => handleSubServiceClick(sub)}
                                                    className="w-full text-left p-3 hover:bg-white/10 rounded transition-all duration-200 flex items-center justify-between group"
                                                >
                                                    <div>
                                                        <div className="font-semibold text-sm">{language === 'ru' ? sub.titleRu : sub.title}</div>
                                                        <div className="text-xs text-white/60 mt-1">{language === 'ru' ? sub.descriptionRu : sub.description}</div>
                                                    </div>
                                                    <ChevronRight className="w-4 h-4 text-institutional-gold group-hover:translate-x-1 transition-transform" />
                                                </motion.button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Projects Modal */}
            <AnimatePresence>
                {showProjectsModal && selectedSubService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
                        onClick={() => setShowProjectsModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="bg-white max-w-5xl w-full max-h-[80vh] overflow-y-auto rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="sticky top-0 bg-institutional-navy text-white p-8 border-b border-institutional-gold">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="text-3xl font-bold mb-2">{language === 'ru' ? selectedSubService.titleRu : selectedSubService.title}</h3>
                                        <p className="text-white/80">{language === 'ru' ? selectedSubService.descriptionRu : selectedSubService.description}</p>
                                    </div>
                                    <button
                                        onClick={() => setShowProjectsModal(false)}
                                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>

                            <div className="p-8">
                                <h4 className="text-xl font-bold text-institutional-navy mb-6 uppercase tracking-wider">
                                    {language === 'ru' ? 'Реализованные Проекты' : 'Related Projects'} ({relatedProjects.length})
                                </h4>

                                {relatedProjects.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {relatedProjects.map((project) => (
                                            <motion.div
                                                key={project.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                                            >
                                                <div className="flex items-start justify-between mb-4">
                                                    <div>
                                                        <h5 className="font-bold text-institutional-navy mb-1">
                                                            {language === 'ru' ? project.titleRu : project.title}
                                                        </h5>
                                                        <div className="text-sm text-institutional-gold font-semibold">{project.client}</div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-lg font-bold text-institutional-navy">{project.investmentSize}</div>
                                                        <div className="text-xs text-institutional-slate">{project.year}</div>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-institutional-slate/80 mb-4 line-clamp-3">
                                                    {language === 'ru' ? project.descriptionRu : project.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tags.slice(0, 4).map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="text-xs px-2 py-1 bg-institutional-navy/5 text-institutional-navy rounded uppercase tracking-wider"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-12 text-institutional-slate">
                                        {language === 'ru' ? 'Проекты не найдены' : 'No projects found'}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Services;
