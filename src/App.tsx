import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SIDE_HUSTLES } from './data/hustles';
import { SideHustle, CategoryType } from './types';
import { Navbar, CurrencyType, ThemeType } from './components/Navbar';
import { HustleCard } from './components/HustleCard';
import { HustleDetailModal } from './components/HustleDetailModal';
import { CustomIdeaValidator } from './components/CustomIdeaValidator';
import { FinancialCalculator } from './components/FinancialCalculator';
import { AssetGeneratorModal } from './components/AssetGeneratorModal';
import { RevenueTracker } from './components/RevenueTracker';
import { PayoutDestinationModal } from './components/PayoutDestinationModal';
import { FoolproofAutoLauncherModal } from './components/FoolproofAutoLauncherModal';
import { ExecutionLog } from './components/ExecutionLog';
import { SavedHustleHealthCard } from './components/SavedHustleHealthCard';
import { LocalLlmMcpHubModal } from './components/LocalLlmMcpHubModal';
import { AutomationTourModal } from './components/AutomationTourModal';
import { Day1SaleChallengeModal } from './components/Day1SaleChallengeModal';
import { DailySalesPredictor } from './components/DailySalesPredictor';
import { QuickSetupChecklist } from './components/QuickSetupChecklist';
import { ViralAssetScoutModal } from './components/ViralAssetScoutModal';
import { SaleSuccessModal } from './components/SaleSuccessModal';
import { RecipeMarketplaceModal } from './components/RecipeMarketplaceModal';
import { GlobalMarketHeatmap } from './components/GlobalMarketHeatmap';
import { TaskSchedulerWidget } from './components/TaskSchedulerWidget';
import { GenAIAssetLibraryModal } from './components/GenAIAssetLibraryModal';
import { GrowthAnalyticsChart } from './components/GrowthAnalyticsChart';
import { AutomationProTipToast } from './components/AutomationProTipToast';
import { QuickLaunchMacroWidget, MacroAction } from './components/QuickLaunchMacroWidget';
import { SmartHudOverlay } from './components/SmartHudOverlay';
import { VoiceControlBar } from './components/VoiceControlBar';
import { SetupSnapshotManagerModal } from './components/SetupSnapshotManagerModal';
import { AutomatedFixModal } from './components/AutomatedFixModal';
import { DirectActionLaunchpadModal } from './components/DirectActionLaunchpadModal';
import { SaleNotificationCenter } from './components/SaleNotificationCenter';
import { ReadyProductVaultView } from './components/ReadyProductVaultView';
import { SystemAutomationHealthView } from './components/SystemAutomationHealthView';
import { MultiPlatformExporterModal } from './components/MultiPlatformExporterModal';
import { FinancialCalculatorModal } from './components/FinancialCalculatorModal';
import { LocalLlmHubModal } from './components/LocalLlmHubModal';
import { DeploymentWizard } from './components/DeploymentWizard';
import { MultiChannelSyncDashboard } from './components/MultiChannelSyncDashboard';
import { 
  Sparkles, 
  Bot, 
  TrendingUp, 
  Zap, 
  Bookmark, 
  X, 
  Trash2, 
  ArrowRight,
  ShieldCheck,
  Search,
  DollarSign,
  Clock,
  ChevronRight,
  Activity,
  Download,
  Github,
  Star,
  Package,
  BarChart3,
  Cpu,
  Layers,
  Rocket,
  Globe
} from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currency, setCurrency] = useState<CurrencyType>('GBP');
  const [theme, setTheme] = useState<ThemeType>('emerald');
  
  // Saved Hustles in localStorage
  const [savedHustleIds, setSavedHustleIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('sh_saved_ids');
      return stored ? JSON.parse(stored) : ['ai-outreach-agency', 'niche-micro-saas'];
    } catch (e) {
      return ['ai-outreach-agency', 'niche-micro-saas'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sh_saved_ids', JSON.stringify(savedHustleIds));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }, [savedHustleIds]);

  // Modal States
  const [selectedHustle, setSelectedHustle] = useState<SideHustle | null>(null);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState<boolean>(false);
  const [isValidatorOpen, setIsValidatorOpen] = useState<boolean>(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
  const [isAssetGenOpen, setIsAssetGenOpen] = useState<boolean>(false);
  const [isPayoutModalOpen, setIsPayoutModalOpen] = useState<boolean>(false);
  const [isFoolproofWizardOpen, setIsFoolproofWizardOpen] = useState<boolean>(false);
  const [isLocalLlmHubOpen, setIsLocalLlmHubOpen] = useState<boolean>(false);
  const [isAutomationTourOpen, setIsAutomationTourOpen] = useState<boolean>(false);
  const [is24hChallengeOpen, setIs24hChallengeOpen] = useState<boolean>(false);
  const [isViralScoutOpen, setIsViralScoutOpen] = useState<boolean>(false);
  const [isSaleSuccessOpen, setIsSaleSuccessOpen] = useState<boolean>(false);
  const [isRecipeMarketplaceOpen, setIsRecipeMarketplaceOpen] = useState<boolean>(false);
  const [isGenAIGalleryOpen, setIsGenAIGalleryOpen] = useState<boolean>(false);
  const [isSnapshotModalOpen, setIsSnapshotModalOpen] = useState<boolean>(false);
  const [isAutomatedFixOpen, setIsAutomatedFixOpen] = useState<boolean>(false);
  const [isDirectLaunchpadOpen, setIsDirectLaunchpadOpen] = useState<boolean>(false);
  const [isSaleNotificationsOpen, setIsSaleNotificationsOpen] = useState<boolean>(false);
  const [isMultiExporterOpen, setIsMultiExporterOpen] = useState<boolean>(false);
  const [isFinancialCalculatorOpen, setIsFinancialCalculatorOpen] = useState<boolean>(false);
  const [proTipHustle, setProTipHustle] = useState<SideHustle | null>(null);
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState<'catalog' | 'vault' | 'analytics' | 'system' | 'deploy'>('catalog');

  const handleExecuteMacroAction = (actionType: string) => {
    if (actionType === 'open_genai') setIsGenAIGalleryOpen(true);
    else if (actionType === 'open_recipes') setIsRecipeMarketplaceOpen(true);
    else if (actionType === 'open_challenge') setIs24hChallengeOpen(true);
    else if (actionType === 'open_scout') setIsViralScoutOpen(true);
    else if (actionType === 'open_hub') setIsLocalLlmHubOpen(true);
    else if (actionType === 'open_fix') setIsAutomatedFixOpen(true);
    else if (actionType === 'export_csv') handleExportCSV();
    else if (actionType === 'toggle_focus') {
      if (selectedHustle) {
        // Toggle focus mode on selected hustle
      } else {
        setSelectedHustle(SIDE_HUSTLES[0]);
      }
    }
  };

  const handleRestorePortfolioState = (restoredState: any) => {
    if (restoredState?.savedIds && Array.isArray(restoredState.savedIds)) {
      setSavedHustleIds(restoredState.savedIds);
    }
  };
  useEffect(() => {
    const handleOpenHubEvent = () => {
      setIsLocalLlmHubOpen(true);
    };
    window.addEventListener('sh-open-local-llm-hub', handleOpenHubEvent);
    return () => {
      window.removeEventListener('sh-open-local-llm-hub', handleOpenHubEvent);
    };
  }, []);

  const [isProTipOpen, setIsProTipOpen] = useState<boolean>(false);
  const [hasSeenTour, setHasSeenTour] = useState<boolean>(() => {
    return localStorage.getItem('sh_has_seen_tour') === 'true';
  });
  const [drawerTab, setDrawerTab] = useState<'tracker' | 'items' | 'execution'>('tracker');

  const handleExportCSV = () => {
    if (savedHustles.length === 0) return;

    const headers = ['ID', 'Title', 'Category', 'Difficulty', 'Monthly Potential ($)', 'Automation Score (%)', 'Margin (%)', 'Weekly Hours', 'Recommended Tools'];
    const rows = savedHustles.map(h => [
      `"${h.id}"`,
      `"${h.title.replace(/"/g, '""')}"`,
      `"${h.category}"`,
      `"${h.difficulty}"`,
      h.monthlyRevenuePotential,
      h.automationScore,
      h.marginPercentage,
      h.weeklyHoursNeeded,
      `"${h.recommendedTools.join(', ')}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `hustle_portfolio_execution_log_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const toggleSaveHustle = (id: string) => {
    setSavedHustleIds((prev) => {
      const isSavingNew = !prev.includes(id);
      if (isSavingNew && !hasSeenTour) {
        setIsAutomationTourOpen(true);
        setHasSeenTour(true);
        try {
          localStorage.setItem('sh_has_seen_tour', 'true');
        } catch (e) {
          console.error(e);
        }
      }
      return isSavingNew ? [...prev, id] : prev.filter((item) => item !== id);
    });
  };

  const [selectedDifficulty, setSelectedDifficulty] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All');
  const [selectedTimeCommitment, setSelectedTimeCommitment] = useState<'All' | '< 3 hrs/wk' | '3–5 hrs/wk' | '5+ hrs/wk'>('All');

  // Filtered Hustles
  const filteredHustles = SIDE_HUSTLES.filter((hustle) => {
    const matchesCategory = selectedCategory === 'All' || hustle.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || hustle.difficulty === selectedDifficulty;

    let matchesTime = true;
    if (selectedTimeCommitment === '< 3 hrs/wk') matchesTime = hustle.weeklyHoursNeeded < 3;
    else if (selectedTimeCommitment === '3–5 hrs/wk') matchesTime = hustle.weeklyHoursNeeded >= 3 && hustle.weeklyHoursNeeded <= 5;
    else if (selectedTimeCommitment === '5+ hrs/wk') matchesTime = hustle.weeklyHoursNeeded > 5;

    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      hustle.title.toLowerCase().includes(q) ||
      hustle.tagline.toLowerCase().includes(q) ||
      hustle.category.toLowerCase().includes(q) ||
      hustle.recommendedTools.some((t) => t.toLowerCase().includes(q));

    return matchesCategory && matchesDifficulty && matchesTime && matchesSearch;
  });

  const savedHustles = SIDE_HUSTLES.filter((h) => savedHustleIds.includes(h.id));

  // Portfolio Totals
  const totalMonthlyPotential = savedHustles.reduce((acc, h) => acc + h.monthlyRevenuePotential, 0);
  const avgAutomationScore = savedHustles.length > 0
    ? Math.round(savedHustles.reduce((acc, h) => acc + h.automationScore, 0) / savedHustles.length)
    : 0;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        savedCount={savedHustleIds.length}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
        onOpenValidator={() => setIsValidatorOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenAssetGen={() => setIsAssetGenOpen(true)}
        onOpenPayoutModal={() => setIsPayoutModalOpen(true)}
        onOpenFoolproofWizard={() => setIsFoolproofWizardOpen(true)}
        onOpenLocalLlmHub={() => setIsLocalLlmHubOpen(true)}
        onOpenAutomationTour={() => setIsAutomationTourOpen(true)}
        onOpen24hChallenge={() => setIs24hChallengeOpen(true)}
        onOpenViralScout={() => setIsViralScoutOpen(true)}
        onOpenRecipes={() => setIsRecipeMarketplaceOpen(true)}
        onOpenGenAIGallery={() => setIsGenAIGalleryOpen(true)}
        onOpenSnapshotModal={() => setIsSnapshotModalOpen(true)}
        onOpenAutomatedFixModal={() => setIsAutomatedFixOpen(true)}
        onOpenDirectLaunchpad={() => setIsDirectLaunchpadOpen(true)}
        onOpenSaleNotifications={() => setIsSaleNotificationsOpen(true)}
        onOpenMultiExporter={() => setIsMultiExporterOpen(true)}
        currency={currency}
        onCurrencyChange={setCurrency}
        theme={theme}
        onThemeChange={setTheme}
        voiceControlBar={<VoiceControlBar onExecuteCommand={handleExecuteMacroAction} />}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Master Class Glass Studio Hero Banner */}
        <div className="relative rounded-3xl bg-slate-900/60 backdrop-blur-2xl border border-slate-800/80 p-6 sm:p-8 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2 flex-wrap">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Master Studio 2.0 • Live Automation</span>
                </div>

                <a
                  href="https://github.com/DLinacre/SideHustles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/60 text-xs font-mono font-semibold transition-all hover:scale-105"
                >
                  <Github className="w-3.5 h-3.5 text-white" />
                  <span>GitHub Auto-Sync Active</span>
                  <span className="flex items-center gap-0.5 text-emerald-400 text-[10px] bg-slate-950 px-1.5 py-0.2 rounded-full border border-emerald-500/30">
                    <Star className="w-2.5 h-2.5 fill-emerald-400" />
                    100% Synced
                  </span>
                </a>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Turn Automated Side Hustles into <span className="text-emerald-400">High-Margin £ Payout Engines</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                7 ready-to-sell micro products, 12 4K OLED image assets, and 1-click execution launchpads connected to live payout webhooks.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setIsDirectLaunchpadOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs shadow-lg shadow-emerald-500/10 flex items-center gap-2 transition-all backdrop-blur-md"
                >
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>💰 Direct £ Monetization Launchpad</span>
                </button>

                <button
                  onClick={() => setIsFoolproofWizardOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/60 text-slate-200 font-bold text-xs flex items-center gap-2 transition-all backdrop-blur-md"
                >
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>⚡ 1-Click Auto-Launcher</span>
                </button>

                <button
                  onClick={() => setIsValidatorOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/60 text-slate-200 font-medium text-xs flex items-center gap-2 transition-all backdrop-blur-md"
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>Test Custom Idea with AI</span>
                </button>

                <button
                  onClick={() => setIsCalculatorOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-medium text-xs border border-slate-700/60 flex items-center gap-2 transition-all"
                >
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span>Compare Profit Matrix</span>
                </button>
              </div>
            </div>

            {/* Quick Telemetry Panel */}
            <div className="grid grid-cols-2 gap-3 bg-slate-950/80 border border-slate-800/80 p-4 rounded-2xl shrink-0 w-full lg:w-72">
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase block">Curated Concepts</span>
                <span className="text-2xl font-bold text-white">{SIDE_HUSTLES.length}</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">High-Margin Models</span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase block">Avg. Automation</span>
                <span className="text-2xl font-bold text-emerald-400 flex items-center gap-1">
                  <Bot className="w-4 h-4" />
                  91%
                </span>
                <span className="text-[11px] text-slate-400 block mt-0.5">Hands-off Ops</span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase block">Avg. Net Margin</span>
                <span className="text-2xl font-bold text-emerald-400">89%</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">Low Overhead</span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase block">Weekly Time</span>
                <span className="text-2xl font-bold text-indigo-300">3-5 hrs</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">Flexible Execution</span>
            </div>
          </div>
        </div>
      </div>

        {/* WORKSPACE NAVIGATION TABS BAR */}
        <div className="bg-slate-900/80 backdrop-blur-xl p-1.5 rounded-2xl border border-slate-800/80 flex items-center gap-2 overflow-x-auto scrollbar-none shadow-lg">
          <button
            onClick={() => setActiveWorkspaceTab('catalog')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeWorkspaceTab === 'catalog'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Zap className="w-4 h-4 text-emerald-400" />
            <span>🚀 Side Hustle Blueprints ({SIDE_HUSTLES.length})</span>
          </button>

          <button
            onClick={() => setActiveWorkspaceTab('vault')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeWorkspaceTab === 'vault'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Package className="w-4 h-4 text-purple-400" />
            <span>📦 Ready Products & 4K OLED Vault</span>
          </button>

          <button
            onClick={() => setActiveWorkspaceTab('analytics')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeWorkspaceTab === 'analytics'
                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <BarChart3 className="w-4 h-4 text-indigo-400" />
            <span>📊 Revenue & Sales Analytics</span>
          </button>

          <button
            onClick={() => setActiveWorkspaceTab('system')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeWorkspaceTab === 'system'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Cpu className="w-4 h-4 text-amber-400" />
            <span>⚙️ System & Automation Hub</span>
          </button>

          <button
            onClick={() => setActiveWorkspaceTab('multichannel')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeWorkspaceTab === 'multichannel'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Globe className="w-4 h-4 text-cyan-400" />
            <span>🌐 Multi-Channel Sync Command Center</span>
          </button>

          <button
            onClick={() => setActiveWorkspaceTab('deploy')}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeWorkspaceTab === 'deploy'
                ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Rocket className="w-4 h-4 text-emerald-400" />
            <span>🚀 Deploy & Go Live</span>
          </button>
        </div>

        {/* MULTI-CHANNEL E-COMMERCE TAB */}
        {activeWorkspaceTab === 'multichannel' && (
          <div className="space-y-6 animate-fadeIn">
            <MultiChannelSyncDashboard />
          </div>
        )}

        {/* TAB 1: SIDE HUSTLE CATALOG VIEW */}
        {activeWorkspaceTab === 'catalog' && (
          <div className="space-y-6 animate-fadeIn">
            {/* REUSABLE 1-CLICK QUICK LAUNCH MACRO ENGINE */}
            <QuickLaunchMacroWidget onExecuteAction={handleExecuteMacroAction} />

            {/* Difficulty & Time Commitment Filter Chips */}
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold mr-1">Difficulty:</span>
                {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      selectedDifficulty === diff
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold mr-1">Time Effort:</span>
                {(['All', '< 3 hrs/wk', '3–5 hrs/wk', '5+ hrs/wk'] as const).map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTimeCommitment(time)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      selectedTimeCommitment === time
                        ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Results Summary */}
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2 flex-wrap">
                <span>Exploratory Blueprints ({filteredHustles.length})</span>
                {selectedCategory !== 'All' && (
                  <span className="text-xs font-normal text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                    Category: {selectedCategory}
                  </span>
                )}
                {selectedDifficulty !== 'All' && (
                  <span className="text-xs font-normal text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                    Difficulty: {selectedDifficulty}
                  </span>
                )}
                {selectedTimeCommitment !== 'All' && (
                  <span className="text-xs font-normal text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                    Effort: {selectedTimeCommitment}
                  </span>
                )}
              </h3>

              {(searchQuery || selectedCategory !== 'All' || selectedDifficulty !== 'All' || selectedTimeCommitment !== 'All') && (
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedDifficulty('All');
                    setSelectedTimeCommitment('All');
                    setSearchQuery('');
                  }}
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-bold"
                >
                  Reset All Filters
                </button>
              )}
            </div>

            {/* Responsive Grid Layout - Mobile to 4K Ultrawide Fit */}
            {filteredHustles.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                <AnimatePresence mode="popLayout">
                  {filteredHustles.map((hustle, index) => (
                    <motion.div
                      key={hustle.id}
                      layout
                      initial={{ opacity: 0, y: 20, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ 
                        duration: 0.35, 
                        delay: Math.min(index * 0.05, 0.3),
                        ease: [0.21, 0.47, 0.32, 0.98] 
                      }}
                      whileHover={{ y: -4 }}
                      className="h-full"
                    >
                      <HustleCard
                        hustle={hustle}
                        isSaved={savedHustleIds.includes(hustle.id)}
                        onToggleSave={toggleSaveHustle}
                        onSelectHustle={(h) => {
                          setSelectedHustle(h);
                          setProTipHustle(h);
                          setIsProTipOpen(true);
                        }}
                        onOpenModeler={(h) => {
                          setSelectedHustle(h);
                          setProTipHustle(h);
                          setIsProTipOpen(true);
                        }}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="py-16 text-center bg-slate-900/50 border border-slate-800 rounded-2xl space-y-3">
                <Search className="w-10 h-10 text-slate-600 mx-auto" />
                <h4 className="text-base font-bold text-white">No side hustles matched your query</h4>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Try searching for different keywords or reset your category and difficulty filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedDifficulty('All');
                    setSelectedTimeCommitment('All');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-md"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: READY PRODUCT & IMAGE VAULT VIEW */}
        {activeWorkspaceTab === 'vault' && (
          <ReadyProductVaultView />
        )}

        {/* TAB 3: REVENUE & SALES ANALYTICS VIEW */}
        {activeWorkspaceTab === 'analytics' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Quick Setup Checklist to 1p Sale State */}
            <QuickSetupChecklist
              payoutDestination="https://paypal.me/dlinacre16"
              onOpenPayoutModal={() => setIsPayoutModalOpen(true)}
              onOpen24hChallenge={() => setIs24hChallengeOpen(true)}
              onLogFirstSale={() => setIsSaleSuccessOpen(true)}
            />

            {/* Daily Sales Predictor Service */}
            <DailySalesPredictor
              activeHustleCount={savedHustleIds.length}
              onOpen24hChallenge={() => setIs24hChallengeOpen(true)}
            />

            {/* Growth Analytics Recharts Engine */}
            <GrowthAnalyticsChart
              onOpen24hChallenge={() => setIs24hChallengeOpen(true)}
              onOpenAssetGen={() => setIsAssetGenOpen(true)}
            />

            {/* Global Market Heatmap D3 Engine */}
            <GlobalMarketHeatmap
              onOpen24hChallenge={() => setIs24hChallengeOpen(true)}
              onOpenViralScout={() => setIsViralScoutOpen(true)}
            />
          </div>
        )}

        {/* TAB 4: SYSTEM AUTOMATION & HEALTH HUB VIEW */}
        {activeWorkspaceTab === 'system' && (
          <SystemAutomationHealthView
            onOpenAutomatedFixModal={() => setIsAutomatedFixOpen(true)}
            onOpenLocalLlmHub={() => setIsLocalLlmHubOpen(true)}
          />
        )}

        {/* TAB 5: DEPLOYMENT WIZARD */}
        {activeWorkspaceTab === 'deploy' && (
          <DeploymentWizard />
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="font-bold text-slate-300">SideHustleForge Pro</span>
            <span>— Powered by Gemini 3.6 Flash & Automated Blueprints</span>
          </div>
          <p className="text-slate-600">Built for high-yield solopreneurs and automation developers.</p>
        </div>
      </footer>

      {/* SAVED PORTFOLIO DRAWER */}
      {isSavedDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex justify-end">
          <div className="bg-slate-900 border-l border-slate-800 w-full max-w-md h-full flex flex-col shadow-2xl p-6 overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-amber-400 fill-amber-400" />
                <h3 className="text-base font-bold text-white">My Hustle Portfolio ({savedHustles.length})</h3>
              </div>
              <button
                onClick={() => setIsSavedDrawerOpen(false)}
                className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sub-Tabs: Revenue Tracker vs Saved Items vs Execution Log */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 my-4 text-xs">
              <button
                onClick={() => setDrawerTab('tracker')}
                className={`flex-1 py-1.5 px-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-all ${
                  drawerTab === 'tracker'
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Tracker</span>
              </button>

              <button
                onClick={() => setDrawerTab('items')}
                className={`flex-1 py-1.5 px-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-all ${
                  drawerTab === 'items'
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>Health ({savedHustles.length})</span>
              </button>

              <button
                onClick={() => setDrawerTab('execution')}
                className={`flex-1 py-1.5 px-2 rounded-lg font-semibold flex items-center justify-center gap-1 transition-all ${
                  drawerTab === 'execution'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Bot className="w-3.5 h-3.5 text-amber-300" />
                <span>AI Logs</span>
              </button>
            </div>

            {/* Portfolio Summary / Content */}
            {savedHustles.length > 0 ? (
              <div className="space-y-6 flex-1 flex flex-col justify-between">
                <div>
                  {drawerTab === 'tracker' ? (
                    <RevenueTracker 
                      savedHustles={savedHustles} 
                      onSelectHustle={(hustle) => {
                        setIsSavedDrawerOpen(false);
                        setSelectedHustle(hustle);
                      }} 
                    />
                  ) : drawerTab === 'execution' ? (
                    <ExecutionLog 
                      savedHustles={savedHustles}
                      onSelectHustle={(hustle) => {
                        setIsSavedDrawerOpen(false);
                        setSelectedHustle(hustle);
                      }}
                    />
                  ) : (
                    <div>
                      <div className="grid grid-cols-2 gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800 mb-4">
                        <div>
                          <span className="text-[10px] uppercase font-mono text-slate-500 block">Combined Potential</span>
                          <span className="text-lg font-bold text-emerald-400">${totalMonthlyPotential.toLocaleString()}/mo</span>
                        </div>

                        <div>
                          <span className="text-[10px] uppercase font-mono text-slate-500 block">Avg. Automation</span>
                          <span className="text-lg font-bold text-amber-400">{avgAutomationScore}%</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {savedHustles.map((hustle) => (
                          <SavedHustleHealthCard
                            key={hustle.id}
                            hustle={hustle}
                            onOpenDetail={() => {
                              setIsSavedDrawerOpen(false);
                              setSelectedHustle(hustle);
                            }}
                            onRemove={() => toggleSaveHustle(hustle.id)}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
                  <button
                    onClick={handleExportCSV}
                    className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-emerald-500/30 font-medium text-xs flex items-center justify-center gap-2 transition-all font-mono shadow-sm"
                  >
                    <Download className="w-4 h-4 text-emerald-400" />
                    <span>Download CSV Execution Log ({savedHustles.length} Hustles)</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsSavedDrawerOpen(false);
                      setIsCalculatorOpen(true);
                    }}
                    className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20"
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span>Run Portfolio ROI Comparison</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-16 text-center space-y-3 my-auto">
                <Bookmark className="w-8 h-8 text-slate-600 mx-auto" />
                <p className="text-xs text-slate-400">No side hustles saved yet. Click the bookmark icon on any card to build your custom portfolio.</p>
              </div>
            )}

          </div>
        </div>
      )}

      {/* DETAIL MODAL */}
      <HustleDetailModal
        hustle={selectedHustle}
        onClose={() => setSelectedHustle(null)}
        isSaved={selectedHustle ? savedHustleIds.includes(selectedHustle.id) : false}
        onToggleSave={toggleSaveHustle}
        onSelectUpgradeHustle={(id) => {
          const found = SIDE_HUSTLES.find((h) => h.id === id);
          if (found) setSelectedHustle(found);
        }}
      />

      {/* AI CUSTOM IDEA VALIDATOR MODAL */}
      <CustomIdeaValidator
        isOpen={isValidatorOpen}
        onClose={() => setIsValidatorOpen(false)}
      />

      {/* FINANCIAL CALCULATOR / ROI MATRIX MODAL */}
      <FinancialCalculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        hustles={SIDE_HUSTLES}
        onSelectHustle={(hustle) => setSelectedHustle(hustle)}
      />

      {/* ASSET GENERATOR MODAL */}
      <AssetGeneratorModal
        isOpen={isAssetGenOpen}
        onClose={() => setIsAssetGenOpen(false)}
        hustles={SIDE_HUSTLES}
      />

      {/* BANK & PAYPAL PAYOUT DESTINATION MODAL */}
      <PayoutDestinationModal
        isOpen={isPayoutModalOpen}
        onClose={() => setIsPayoutModalOpen(false)}
      />

      {/* FOOLPROOF 1-CLICK AUTO-LAUNCHER WIZARD */}
      <FoolproofAutoLauncherModal
        isOpen={isFoolproofWizardOpen}
        onClose={() => setIsFoolproofWizardOpen(false)}
        onSelectHustle={(hustle) => setSelectedHustle(hustle)}
      />

      {/* LOCAL LLM, MCP, OBSIDIAN & GITHUB SCRAPER HUB */}
      <LocalLlmMcpHubModal
        isOpen={isLocalLlmHubOpen}
        onClose={() => setIsLocalLlmHubOpen(false)}
        savedHustleIds={savedHustleIds}
        onImportHustle={(importedHustle) => {
          if (!savedHustleIds.includes(importedHustle.id)) {
            toggleSaveHustle(importedHustle.id);
          }
          setSelectedHustle(importedHustle);
        }}
      />

      {/* GUIDED AUTOMATION SETUP TOUR */}
      <AutomationTourModal
        isOpen={isAutomationTourOpen}
        onClose={() => setIsAutomationTourOpen(false)}
        onOpenLocalLlmHub={() => {
          setIsAutomationTourOpen(false);
          setIsLocalLlmHubOpen(true);
        }}
        onOpenPayoutModal={() => {
          setIsAutomationTourOpen(false);
          setIsPayoutModalOpen(true);
        }}
        onOpenExecutionLogs={() => {
          setIsAutomationTourOpen(false);
          setIsSavedDrawerOpen(true);
          setDrawerTab('execution');
        }}
      />

      {/* 24-HOUR 1P MICRO-SALE CHALLENGE MODAL */}
      <Day1SaleChallengeModal
        isOpen={is24hChallengeOpen}
        onClose={() => setIs24hChallengeOpen(false)}
        onOpenPayoutModal={() => {
          setIs24hChallengeOpen(false);
          setIsPayoutModalOpen(true);
        }}
      />

      {/* VIRAL ASSET SCOUT MODAL */}
      <ViralAssetScoutModal
        isOpen={isViralScoutOpen}
        onClose={() => setIsViralScoutOpen(false)}
        onOpen24hChallenge={() => {
          setIsViralScoutOpen(false);
          setIs24hChallengeOpen(true);
        }}
      />

      {/* SALE SUCCESS CONFETTI MODAL */}
      <SaleSuccessModal
        isOpen={isSaleSuccessOpen}
        onClose={() => setIsSaleSuccessOpen(false)}
        onConfirmSale={(amount, platform, notes) => {
          console.log('Logged 1p sale:', amount, platform, notes);
        }}
      />

      {/* RECIPE MARKETPLACE MODAL */}
      <RecipeMarketplaceModal
        isOpen={isRecipeMarketplaceOpen}
        onClose={() => setIsRecipeMarketplaceOpen(false)}
      />

      {/* GENAI ASSET LIBRARY & STUDIO MODAL */}
      <GenAIAssetLibraryModal
        isOpen={isGenAIGalleryOpen}
        onClose={() => setIsGenAIGalleryOpen(false)}
        onOpenRecipes={() => {
          setIsGenAIGalleryOpen(false);
          setIsRecipeMarketplaceOpen(true);
        }}
        onOpen24hChallenge={() => {
          setIsGenAIGalleryOpen(false);
          setIs24hChallengeOpen(true);
        }}
      />

      {/* CONTEXT-AWARE AUTOMATION PRO-TIP TOAST */}
      <AutomationProTipToast
        hustle={proTipHustle}
        isOpen={isProTipOpen}
        onClose={() => setIsProTipOpen(false)}
        onExecuteAction={(actionType) => {
          if (actionType === 'recipes') setIsRecipeMarketplaceOpen(true);
          else if (actionType === '24h') setIs24hChallengeOpen(true);
          else if (actionType === 'scout') setIsViralScoutOpen(true);
          else if (actionType === 'genai') setIsGenAIGalleryOpen(true);
          else if (actionType === 'hub') setIsLocalLlmHubOpen(true);
          else if (actionType === 'payout') setIsPayoutModalOpen(true);
        }}
      />

      {/* AUTOMATED SETUP SNAPSHOT & REVERT ENGINE MODAL */}
      <SetupSnapshotManagerModal
        isOpen={isSnapshotModalOpen}
        onClose={() => setIsSnapshotModalOpen(false)}
        currentPortfolioState={{
          savedIds: savedHustleIds,
          allHustlesCount: SIDE_HUSTLES.length
        }}
        onRestoreState={handleRestorePortfolioState}
      />

      {/* 1-CLICK AUTOMATED DIAGNOSTICS & SYSTEM SELF-HEALING FIX MODAL */}
      <AutomatedFixModal
        isOpen={isAutomatedFixOpen}
        onClose={() => setIsAutomatedFixOpen(false)}
      />

      {/* DIRECT ACTION & MONETIZATION LAUNCHPAD MODAL */}
      <DirectActionLaunchpadModal
        isOpen={isDirectLaunchpadOpen}
        onClose={() => setIsDirectLaunchpadOpen(false)}
        onSelectHustle={(hustle) => setSelectedHustle(hustle)}
      />

      {/* LIVE SALE & PAYOUT NOTIFICATION CENTER */}
      <SaleNotificationCenter
        isOpen={isSaleNotificationsOpen}
        onClose={() => setIsSaleNotificationsOpen(false)}
      />

      {/* MULTI-PLATFORM LISTING & EXPORTER SUITE MODAL */}
      <MultiPlatformExporterModal
        isOpen={isMultiExporterOpen}
        onClose={() => setIsMultiExporterOpen(false)}
      />

      {/* MONTE CARLO SALES FORECASTING SIMULATOR MODAL (Task 16) */}
      <FinancialCalculatorModal
        isOpen={isFinancialCalculatorOpen}
        onClose={() => setIsFinancialCalculatorOpen(false)}
      />

      {/* LOCAL LLM & OBSIDIAN VAULT BRIDGE MODAL (Tasks 13 & 14) */}
      <LocalLlmHubModal
        isOpen={isLocalLlmHubOpen}
        onClose={() => setIsLocalLlmHubOpen(false)}
      />

      {/* FLOATING CONTEXT-SENSITIVE SMART HUD OVERLAY */}
      <SmartHudOverlay
        onOpen24hChallenge={() => setIs24hChallengeOpen(true)}
        onOpenRecipes={() => setIsRecipeMarketplaceOpen(true)}
        onOpenGenAI={() => setIsGenAIGalleryOpen(true)}
        onOpenLocalLlmHub={() => setIsLocalLlmHubOpen(true)}
        onOpenAutomatedFixModal={() => setIsAutomatedFixOpen(true)}
      />

    </div>
  );
}
