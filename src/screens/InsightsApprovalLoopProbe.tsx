// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights - Approval Loop Probe
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, CircleAlert, CircleHelp, Download, Gauge, ListFilter, Network, Pencil, Plus, Settings, Settings2, Timer, TriangleAlert } from "lucide-react";


export type InsightsApprovalLoopProbeActionId = "new-record-1" | "filter-2" | "export-summary-3" | "review-4" | "trace-5" | "operations-1" | "editor-2" | "insights-3" | "settings-4" | "support-5";

export interface InsightsApprovalLoopProbeProps {
  actions?: Partial<Record<InsightsApprovalLoopProbeActionId, () => void>>;

}

export function InsightsApprovalLoopProbe({ actions }: InsightsApprovalLoopProbeProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="docked h-screen left-0 w-64 border-r border-outline-variant dark:border-outline bg-surface-container-low dark:bg-on-background flex flex-col p-gutter gap-component-gap-sm shrink-0">
      {/* Header */}
      <div className="flex items-center gap-3 p-2 mb-4">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary">
      <Network style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col">
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-surface-bright">Loop Probe</span>
      <span className="font-label-md text-label-md text-on-surface-variant">V2.4.1-Stable</span>
      </div>
      </div>
      {/* CTA */}
      <button className="w-full h-row-height-md bg-primary text-on-primary rounded font-label-md text-label-md mb-4 flex items-center justify-center gap-2 hover:bg-surface-tint transition-colors" type="button" data-action-id="new-record-1" onClick={actions?.["new-record-1"]}>
      <Plus style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
                  New Record
              </button>
      {/* Main Nav Tabs */}
      <div className="flex flex-col gap-1 flex-1">
      {/* Operations: Inactive */}
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-variant rounded-lg transition-colors active:scale-95 duration-150" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <Settings2 aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Operations</span>
      </a>
      {/* Editor: Inactive */}
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-variant rounded-lg transition-colors active:scale-95 duration-150" href="#" data-action-id="editor-2" onClick={(event) => { event.preventDefault(); actions?.["editor-2"]?.(); }}>
      <Pencil aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Editor</span>
      </a>
      {/* Insights: Active */}
      <a className="flex items-center gap-3 px-3 py-2 bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary font-semibold rounded-lg transition-colors active:scale-95 duration-150" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3 data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      </div>
      {/* Footer Nav Tabs */}
      <div className="flex flex-col gap-1 mt-auto pt-4 border-t border-outline-variant">
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-variant rounded-lg transition-colors active:scale-95 duration-150" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-variant rounded-lg transition-colors active:scale-95 duration-150" href="#" data-action-id="support-5" onClick={(event) => { event.preventDefault(); actions?.["support-5"]?.(); }}>
      <CircleHelp aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Support</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex flex-col flex-1 w-full bg-surface">
      {/* TopNavBar (Responsive, Hidden on md due to SideNav being primary, but requested in prompt as system status bar) */}
      {/* Adjusted to function as a top status bar above the canvas, separate from the primary nav role */}
      <header className="flex justify-between items-center w-full px-container-padding h-row-height-md bg-surface-container-lowest dark:bg-on-background border-b border-outline-variant dark:border-outline shrink-0">
      <div className="flex items-center gap-4">
      <span className="font-headline-sm text-headline-sm font-semibold text-primary dark:text-primary-fixed-dim hidden md:block">Approval Loop Probe</span>
      {/* Optional top nav links for responsive, hidden on desktop since side nav handles it */}
      <nav className="flex gap-4 md:hidden">
      <span className="text-on-surface-variant pb-1 font-label-md text-label-md cursor-pointer hover:bg-surface-container-low transition-colors">Record Operations</span>
      <span className="text-on-surface-variant pb-1 font-label-md text-label-md cursor-pointer hover:bg-surface-container-low transition-colors">Record Editor</span>
      <span className="text-primary border-b-2 border-primary pb-1 font-label-md text-label-md cursor-pointer hover:bg-surface-container-low transition-colors">Insights</span>
      </nav>
      </div>
      <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-secondary"></div>
      <span className="font-label-md text-label-md text-on-surface-variant">Ready/Paused</span>
      </div>
      <span className="font-label-md text-label-md text-outline">Last Refreshed: 12:45 PM</span>
      </div>
      </header>
      {/* Canvas / Dashboard */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-6">
      {/* Page Header & Actions */}
      <div className="flex justify-between items-center mb-2">
      <h1 className="font-headline-sm text-headline-sm text-on-surface m-0 p-0">System Insights</h1>
      <div className="flex gap-3">
      <button className="flex items-center gap-2 h-row-height-sm px-3 border border-outline-variant rounded bg-surface-container-lowest text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-low transition-colors" type="button" data-action-id="filter-2" onClick={actions?.["filter-2"]}>
      <ListFilter style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
                                  Filter
                              </button>
      <button className="flex items-center gap-2 h-row-height-sm px-3 bg-primary text-on-primary rounded font-label-md text-label-md hover:bg-surface-tint transition-colors" type="button" data-action-id="export-summary-3" onClick={actions?.["export-summary-3"]}>
      <Download style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
                                  Export Summary
                              </button>
      </div>
      </div>
      {/* Bento Grid Layout */}
      <div className="dashboard-grid">
      {/* Metrics Row (Full Width, 3 Cols) */}
      <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-gutter">
      {/* Throughput */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 flex flex-col justify-between hover:shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-shadow">
      <div className="flex justify-between items-start mb-2">
      <span className="font-label-caps text-label-caps text-outline uppercase">Throughput</span>
      <Gauge style={{fontSize: "16px"}} className="text-outline" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-end gap-2">
      <span className="font-tabular-nums text-[24px] leading-none text-on-surface">1,248</span>
      <span className="font-label-md text-label-md text-secondary">+12%</span>
      </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Records / Hour</span>
      </div>
      {/* Avg Approval Time */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 flex flex-col justify-between hover:shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-shadow">
      <div className="flex justify-between items-start mb-2">
      <span className="font-label-caps text-label-caps text-outline uppercase">Avg. Approval Time</span>
      <Timer style={{fontSize: "16px"}} className="text-outline" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-end gap-2">
      <span className="font-tabular-nums text-[24px] leading-none text-on-surface">42s</span>
      <span className="font-label-md text-label-md text-outline">-3s</span>
      </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Global average</span>
      </div>
      {/* Error Rate */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 flex flex-col justify-between hover:shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-shadow">
      <div className="flex justify-between items-start mb-2">
      <span className="font-label-caps text-label-caps text-outline uppercase">Error Rate</span>
      <CircleAlert style={{fontSize: "16px"}} className="text-error" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-end gap-2">
      <span className="font-tabular-nums text-[24px] leading-none text-error">0.8%</span>
      <span className="font-label-md text-label-md text-error">+0.2%</span>
      </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Requires intervention</span>
      </div>
      </div>
      {/* Middle Section: State Dist & Actionable Items */}
      <div className="col-span-12 lg:col-span-8 flex flex-col gap-gutter">
      {/* State Distribution */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 flex-1">
      <h2 className="font-label-md text-label-md text-on-surface font-semibold mb-4 border-b border-surface-container pb-2">State Distribution</h2>
      {/* Simple Bar Chart / List hybrid */}
      <div className="flex flex-col gap-4 mt-4">
      {/* Approved */}
      <div className="flex items-center gap-4">
      <div className="w-24 font-label-md text-label-md text-on-surface-variant">Approved</div>
      <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
      <div className="h-full bg-secondary w-[65%]"></div>
      </div>
      <div className="w-12 text-right font-tabular-nums text-tabular-nums">65%</div>
      </div>
      {/* Pending */}
      <div className="flex items-center gap-4">
      <div className="w-24 font-label-md text-label-md text-on-surface-variant">Pending</div>
      <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
      <div className="h-full bg-tertiary-fixed-dim w-[25%]"></div>
      </div>
      <div className="w-12 text-right font-tabular-nums text-tabular-nums">25%</div>
      </div>
      {/* Rejected */}
      <div className="flex items-center gap-4">
      <div className="w-24 font-label-md text-label-md text-on-surface-variant">Rejected</div>
      <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
      <div className="h-full bg-outline w-[8%]"></div>
      </div>
      <div className="w-12 text-right font-tabular-nums text-tabular-nums">8%</div>
      </div>
      {/* Error */}
      <div className="flex items-center gap-4">
      <div className="w-24 font-label-md text-label-md text-on-surface-variant">Error</div>
      <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
      <div className="h-full bg-error w-[2%]"></div>
      </div>
      <div className="w-12 text-right font-tabular-nums text-tabular-nums">2%</div>
      </div>
      </div>
      </div>
      {/* Actionable Follow-ups */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-0 flex-1 overflow-hidden">
      <div className="p-4 border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
      <h2 className="font-label-md text-label-md text-on-surface font-semibold m-0">Action Required</h2>
      <span className="bg-error text-on-error font-label-caps text-label-caps px-2 py-0.5 rounded-full">2 Critical</span>
      </div>
      <ul className="flex flex-col m-0 p-0 list-none">
      <li className="p-4 border-b border-surface-container hover:bg-surface-container-lowest transition-colors flex items-start gap-3">
      <TriangleAlert className="text-tertiary-fixed-dim mt-0.5" aria-hidden={true} focusable="false" />
      <div className="flex-1">
      <div className="font-body-md text-body-md text-on-surface">3 records stuck in Pending &gt; 24h</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Requires manual override or TTL reset.</div>
      </div>
      <button className="h-6 px-2 border border-outline-variant rounded font-label-caps text-label-caps hover:bg-surface-container-low text-on-surface-variant" type="button" data-action-id="review-4" onClick={actions?.["review-4"]}>Review</button>
      </li>
      <li className="p-4 hover:bg-surface-container-lowest transition-colors flex items-start gap-3">
      <BadgeHelp className="text-error mt-0.5" aria-hidden={true} focusable="false" />
      <div className="flex-1">
      <div className="font-body-md text-body-md text-on-surface">Validation schema mismatch on POST</div>
      <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Endpoint /v1/approve rejecting valid JSON.</div>
      </div>
      <button className="h-6 px-2 border border-outline-variant rounded font-label-caps text-label-caps hover:bg-surface-container-low text-on-surface-variant" type="button" data-action-id="trace-5" onClick={actions?.["trace-5"]}>Trace</button>
      </li>
      </ul>
      </div>
      </div>
      {/* Right Column: Recent Activity Timeline */}
      <div className="col-span-12 lg:col-span-4 flex flex-col">
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 h-full flex flex-col">
      <h2 className="font-label-md text-label-md text-on-surface font-semibold mb-4 pb-2 border-b border-surface-container">Recent Activity</h2>
      {/* Timeline Feed */}
      <div className="relative flex-1 pl-4 mt-2">
      {/* Vertical Line */}
      <div className="absolute left-1.5 top-2 bottom-0 w-[2px] bg-surface-container"></div>
      <div className="flex flex-col gap-6">
      {/* Event 1 */}
      <div className="relative pl-6">
      <div className="absolute left-[-11px] top-1 w-3 h-3 rounded-full bg-surface-container-lowest border-2 border-primary z-10"></div>
      <div className="font-tabular-nums text-[11px] text-outline mb-1">12:43:11 PM</div>
      <div className="font-body-sm text-body-sm text-on-surface">Batch Approval Completed</div>
      <div className="font-label-caps text-label-caps text-on-surface-variant mt-1">System • 42 Records</div>
      </div>
      {/* Event 2 */}
      <div className="relative pl-6">
      <div className="absolute left-[-11px] top-1 w-3 h-3 rounded-full bg-surface-container-lowest border-2 border-error z-10"></div>
      <div className="font-tabular-nums text-[11px] text-outline mb-1">12:38:05 PM</div>
      <div className="font-body-sm text-body-sm text-on-surface">Schema Validation Failed</div>
      <div className="font-label-caps text-label-caps text-on-surface-variant mt-1">Service_Auth • ID: #9928</div>
      </div>
      {/* Event 3 */}
      <div className="relative pl-6">
      <div className="absolute left-[-11px] top-1 w-3 h-3 rounded-full bg-surface-container-lowest border-2 border-outline-variant z-10"></div>
      <div className="font-tabular-nums text-[11px] text-outline mb-1">12:15:00 PM</div>
      <div className="font-body-sm text-body-sm text-on-surface">Manual Override Applied</div>
      <div className="font-label-caps text-label-caps text-on-surface-variant mt-1">User: admin_johnd</div>
      </div>
      {/* Event 4 */}
      <div className="relative pl-6">
      <div className="absolute left-[-11px] top-1 w-3 h-3 rounded-full bg-surface-container-lowest border-2 border-outline-variant z-10"></div>
      <div className="font-tabular-nums text-[11px] text-outline mb-1">11:00:22 AM</div>
      <div className="font-body-sm text-body-sm text-on-surface">Scheduled Sync OK</div>
      <div className="font-label-caps text-label-caps text-on-surface-variant mt-1">System</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
