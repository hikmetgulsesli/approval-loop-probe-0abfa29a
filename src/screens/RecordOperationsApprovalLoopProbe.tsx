// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Operations - Approval Loop Probe
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BarChart3, CircleHelp, ListFilter, Pencil, Plus, Search, Settings, Settings2, X } from "lucide-react";


export type RecordOperationsApprovalLoopProbeActionId = "new-record-1" | "new-record-2" | "filter-3" | "edit-4" | "edit-5" | "retry-load-6" | "edit-7" | "close-8" | "review-9" | "approve-10" | "operations-1" | "editor-2" | "insights-3" | "settings-4" | "support-5";

export interface RecordOperationsApprovalLoopProbeProps {
  actions?: Partial<Record<RecordOperationsApprovalLoopProbeActionId, () => void>>;

}

export function RecordOperationsApprovalLoopProbe({ actions }: RecordOperationsApprovalLoopProbeProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="docked h-screen left-0 w-64 border-r border-outline-variant dark:border-outline flat no shadows bg-surface-container-low dark:bg-on-background flex flex-col h-full p-gutter gap-component-gap-sm shrink-0 z-20">
      {/* Header */}
      <div className="flex items-center gap-3 p-2 mb-4">
      <div className="w-8 h-8 rounded bg-primary-container text-on-primary-container flex items-center justify-center font-bold">L</div>
      <div>
      <h1 className="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-surface-bright">Loop Probe</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">V2.4.1-Stable</p>
      </div>
      </div>
      {/* Primary CTA */}
      <button className="w-full bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-label-md text-label-md py-2 px-4 rounded transition-colors mb-6 flex items-center justify-center gap-2" type="button" data-action-id="new-record-1" onClick={actions?.["new-record-1"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                  New Record
              </button>
      {/* Navigation Links */}
      <div className="flex-1 flex flex-col gap-1">
      {/* Active Tab: Operations */}
      <a className="flex items-center gap-3 px-3 py-2 bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary font-semibold rounded-lg active:scale-95 duration-150 font-label-md text-label-md" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <Settings2 className="fill-icon text-[20px]" aria-hidden={true} focusable="false" />
                      Operations
                  </a>
      {/* Inactive Tab: Editor */}
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-variant rounded-lg hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors active:scale-95 duration-150 font-label-md text-label-md" href="#" data-action-id="editor-2" onClick={(event) => { event.preventDefault(); actions?.["editor-2"]?.(); }}>
      <Pencil className="text-[20px]" aria-hidden={true} focusable="false" />
                      Editor
                  </a>
      {/* Inactive Tab: Insights */}
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-variant rounded-lg hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors active:scale-95 duration-150 font-label-md text-label-md" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3 className="text-[20px]" aria-hidden={true} focusable="false" />
                      Insights
                  </a>
      </div>
      {/* Footer Links */}
      <div className="mt-auto border-t border-outline-variant pt-2 flex flex-col gap-1">
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-variant rounded-lg hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors active:scale-95 duration-150 font-label-md text-label-md" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
                      Settings
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-variant rounded-lg hover:bg-surface-container-high dark:hover:bg-surface-variant transition-colors active:scale-95 duration-150 font-label-md text-label-md" href="#" data-action-id="support-5" onClick={(event) => { event.preventDefault(); actions?.["support-5"]?.(); }}>
      <CircleHelp className="text-[20px]" aria-hidden={true} focusable="false" />
                      Support
                  </a>
      </div>
      </nav>
      {/* Main Workspace */}
      <div className="flex-1 flex flex-col min-w-0">
      {/* TopNavBar (Adapted for desktop context, acting as context header) */}
      <header className="docked full-width top-0 border-b border-outline-variant dark:border-outline flat no shadows bg-surface-container-lowest dark:bg-on-background flex justify-between items-center w-full px-container-padding h-row-height-md shrink-0 z-10">
      <div className="flex items-center gap-4">
      <h2 className="font-headline-sm text-headline-sm font-semibold text-primary dark:text-primary-fixed-dim">Approval Loop Probe</h2>
      <div className="h-4 w-px bg-outline-variant"></div>
      <span className="font-label-md text-label-md text-on-surface-variant">Record Operations</span>
      </div>
      <div className="flex items-center gap-4 font-label-md text-label-md">
      <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
      <span className="text-on-surface">Ready/Paused</span>
      </div>
      <div className="text-on-surface-variant">
                          Last Refreshed: 12:45 PM
                      </div>
      </div>
      </header>
      {/* Main Content Area */}
      <main className="flex-1 overflow-auto p-6 flex flex-col gap-6">
      {/* Page Header & Metrics */}
      <div className="flex flex-col gap-4">
      <div className="flex justify-between items-end">
      <div>
      <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface mb-1">Record Operations</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Manage and monitor approval loop records.</p>
      </div>
      <button className="bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-label-md text-label-md py-2 px-4 rounded transition-colors flex items-center gap-2" type="button" data-action-id="new-record-2" onClick={actions?.["new-record-2"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                              New Record
                          </button>
      </div>
      {/* Compact Metric Tiles (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-4 flex flex-col gap-2">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Total Records</span>
      <span className="font-tabular-nums text-tabular-nums text-2xl font-semibold text-on-surface">1,248</span>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-4 flex flex-col gap-2">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Pending Approval</span>
      <span className="font-tabular-nums text-tabular-nums text-2xl font-semibold text-tertiary-container">374</span>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-4 flex flex-col gap-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-error/5"></div>
      <span className="font-label-caps text-label-caps text-error relative z-10 uppercase">Error State</span>
      <span className="font-tabular-nums text-tabular-nums text-2xl font-semibold text-error relative z-10">125</span>
      </div>
      </div>
      </div>
      {/* Workspace Grid (Table + Detail Panel) */}
      <div className="flex-1 flex gap-6 min-h-[500px]">
      {/* Data Table Section */}
      <div className="flex-1 flex flex-col bg-surface-container-lowest border border-outline-variant rounded overflow-hidden shadow-sm">
      {/* Table Toolbar */}
      <div className="p-3 border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
      <div className="relative w-64">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full pl-8 pr-3 py-1.5 text-body-sm font-body-sm border border-outline-variant rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" placeholder="Search records..." type="text" />
      </div>
      <div className="flex gap-2">
      <button className="flex items-center gap-2 px-3 py-1.5 border border-outline-variant rounded bg-surface-container-lowest hover:bg-surface-container-low transition-colors font-label-md text-label-md text-on-surface" type="button" data-action-id="filter-3" onClick={actions?.["filter-3"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" />
                                      Filter
                                  </button>
      </div>
      </div>
      {/* Dense Table */}
      <div className="flex-1 overflow-auto">
      <table className="w-full text-left border-collapse">
      <thead className="sticky top-0 bg-surface-container-low z-10 border-b border-outline-variant font-label-caps text-label-caps text-on-surface-variant uppercase">
      <tr>
      <th className="py-2 px-4 font-semibold">Record ID</th>
      <th className="py-2 px-4 font-semibold">Name</th>
      <th className="py-2 px-4 font-semibold">Priority</th>
      <th className="py-2 px-4 font-semibold">Status</th>
      <th className="py-2 px-4 font-semibold">Last Updated</th>
      <th className="py-2 px-4 font-semibold text-right">Actions</th>
      </tr>
      </thead>
      <tbody className="font-body-sm text-body-sm text-on-surface divide-y divide-surface-container-high">
      {/* Row 1: Selected */}
      <tr className="bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer group">
      <td className="py-2 px-4 font-tabular-nums text-primary font-medium">REC-8921</td>
      <td className="py-2 px-4 font-medium">Q3 Budget Allocation Matrix</td>
      <td className="py-2 px-4"><span className="px-2 py-0.5 bg-tertiary-container/10 text-tertiary-container rounded text-xs font-medium">High</span></td>
      <td className="py-2 px-4">
      <div className="flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span>
                                                  Pending
                                              </div>
      </td>
      <td className="py-2 px-4 font-tabular-nums text-on-surface-variant">10 mins ago</td>
      <td className="py-2 px-4 text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors p-1 rounded hover:bg-surface-container-high opacity-0 group-hover:opacity-100 focus:opacity-100" type="button" aria-label="Edit" data-action-id="edit-4" onClick={actions?.["edit-4"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      {/* Row 2: Approved */}
      <tr className="hover:bg-surface-container-low transition-colors cursor-pointer group">
      <td className="py-2 px-4 font-tabular-nums text-on-surface-variant">REC-8920</td>
      <td className="py-2 px-4">Vendor Contract Setup - Alpha</td>
      <td className="py-2 px-4"><span className="px-2 py-0.5 bg-surface-container-highest text-on-surface-variant rounded text-xs">Normal</span></td>
      <td className="py-2 px-4">
      <div className="flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                                  Approved
                                              </div>
      </td>
      <td className="py-2 px-4 font-tabular-nums text-on-surface-variant">1 hr ago</td>
      <td className="py-2 px-4 text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors p-1 rounded hover:bg-surface-container-high opacity-0 group-hover:opacity-100 focus:opacity-100" type="button" aria-label="Edit" data-action-id="edit-5" onClick={actions?.["edit-5"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      {/* Row 3: Error */}
      <tr className="hover:bg-surface-container-low transition-colors cursor-pointer group">
      <td className="py-2 px-4 font-tabular-nums text-on-surface-variant">REC-8919</td>
      <td className="py-2 px-4">Data Sync Process #442</td>
      <td className="py-2 px-4"><span className="px-2 py-0.5 bg-error/10 text-error rounded text-xs font-medium">Critical</span></td>
      <td className="py-2 px-4">
      <div className="flex items-center gap-1.5 text-error">
      <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                                                  Error
                                              </div>
      </td>
      <td className="py-2 px-4 font-tabular-nums text-on-surface-variant">2 hrs ago</td>
      <td className="py-2 px-4 text-right">
      <button className="text-error hover:text-on-error-container transition-colors p-1 rounded hover:bg-error/10 text-xs font-medium border border-error/30 opacity-0 group-hover:opacity-100 focus:opacity-100" type="button" data-action-id="retry-load-6" onClick={actions?.["retry-load-6"]}>
                                                  Retry Load
                                              </button>
      </td>
      </tr>
      {/* Row 4: Rejected */}
      <tr className="hover:bg-surface-container-low transition-colors cursor-pointer group">
      <td className="py-2 px-4 font-tabular-nums text-on-surface-variant">REC-8918</td>
      <td className="py-2 px-4">Internal Transfer Req</td>
      <td className="py-2 px-4"><span className="px-2 py-0.5 bg-surface-container-highest text-on-surface-variant rounded text-xs">Normal</span></td>
      <td className="py-2 px-4">
      <div className="flex items-center gap-1.5 text-outline">
      <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                                                  Rejected
                                              </div>
      </td>
      <td className="py-2 px-4 font-tabular-nums text-on-surface-variant">5 hrs ago</td>
      <td className="py-2 px-4 text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors p-1 rounded hover:bg-surface-container-high opacity-0 group-hover:opacity-100 focus:opacity-100" type="button" aria-label="Edit" data-action-id="edit-7" onClick={actions?.["edit-7"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      {/* Filler Rows for density */}
      <tr className="hover:bg-surface-container-low transition-colors cursor-pointer"><td className="py-2 px-4 font-tabular-nums text-on-surface-variant">REC-8917</td><td className="py-2 px-4">System Update Log</td><td className="py-2 px-4"><span className="px-2 py-0.5 bg-surface-container-highest text-on-surface-variant rounded text-xs">Normal</span></td><td className="py-2 px-4"><div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Approved</div></td><td className="py-2 px-4 font-tabular-nums text-on-surface-variant">1 day ago</td><td className="py-2 px-4"></td></tr>
      <tr className="hover:bg-surface-container-low transition-colors cursor-pointer"><td className="py-2 px-4 font-tabular-nums text-on-surface-variant">REC-8916</td><td className="py-2 px-4">Policy Revision B</td><td className="py-2 px-4"><span className="px-2 py-0.5 bg-tertiary-container/10 text-tertiary-container rounded text-xs font-medium">High</span></td><td className="py-2 px-4"><div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Approved</div></td><td className="py-2 px-4 font-tabular-nums text-on-surface-variant">1 day ago</td><td className="py-2 px-4"></td></tr>
      </tbody>
      </table>
      </div>
      </div>
      {/* Selection Preview Panel (REC-8921) */}
      <div className="w-80 bg-surface-container-lowest border border-outline-variant rounded flex flex-col shadow-sm shrink-0">
      <div className="p-4 border-b border-outline-variant bg-surface flex justify-between items-start">
      <div>
      <span className="font-label-caps text-label-caps text-primary uppercase block mb-1">Selected Record</span>
      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">REC-8921</h3>
      </div>
      <button className="text-on-surface-variant hover:bg-surface-container-high p-1 rounded transition-colors" type="button" aria-label="Close" data-action-id="close-8" onClick={actions?.["close-8"]}>
      <X className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="p-4 flex-1 overflow-auto flex flex-col gap-6">
      {/* Details */}
      <div>
      <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">Details</h4>
      <div className="flex flex-col gap-2 font-body-sm text-body-sm">
      <div className="flex justify-between">
      <span className="text-on-surface-variant">Name</span>
      <span className="font-medium text-right">Q3 Budget Allocation Matrix</span>
      </div>
      <div className="flex justify-between">
      <span className="text-on-surface-variant">Status</span>
      <span className="font-medium text-tertiary-container">Pending Approval</span>
      </div>
      <div className="flex justify-between">
      <span className="text-on-surface-variant">Owner</span>
      <span className="font-medium">Sarah Jenkins</span>
      </div>
      </div>
      </div>
      {/* Associated Metrics */}
      <div>
      <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">Associated Metrics</h4>
      <div className="grid grid-cols-2 gap-2">
      <div className="bg-surface-container-low p-2 rounded border border-surface-container-high">
      <div className="font-label-caps text-label-caps text-on-surface-variant mb-1">Est. Impact</div>
      <div className="font-tabular-nums text-tabular-nums font-semibold">$45.2K</div>
      </div>
      <div className="bg-surface-container-low p-2 rounded border border-surface-container-high">
      <div className="font-label-caps text-label-caps text-on-surface-variant mb-1">Risk Score</div>
      <div className="font-tabular-nums text-tabular-nums font-semibold text-tertiary-container">Medium (4.2)</div>
      </div>
      </div>
      </div>
      {/* Audit Trail / Timeline */}
      <div>
      <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-3">Activity History</h4>
      <div className="relative pl-3 border-l-2 border-surface-container-highest space-y-4 font-body-sm text-body-sm">
      <div className="relative">
      <span className="absolute -left-[17px] top-1 w-2.5 h-2.5 rounded-full bg-tertiary-container ring-2 ring-surface-container-lowest"></span>
      <div className="text-on-surface font-medium">Approval Requested</div>
      <div className="text-on-surface-variant font-tabular-nums text-xs mt-0.5">Today, 12:35 PM by Sarah J.</div>
      </div>
      <div className="relative">
      <span className="absolute -left-[17px] top-1 w-2.5 h-2.5 rounded-full bg-outline-variant ring-2 ring-surface-container-lowest"></span>
      <div className="text-on-surface font-medium">Record Created</div>
      <div className="text-on-surface-variant font-tabular-nums text-xs mt-0.5">Today, 09:12 AM by System</div>
      </div>
      </div>
      </div>
      </div>
      <div className="p-4 border-t border-outline-variant flex gap-2 bg-surface-container-low">
      <button className="flex-1 bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-high text-on-surface font-label-md text-label-md py-1.5 px-3 rounded transition-colors text-center" type="button" data-action-id="review-9" onClick={actions?.["review-9"]}>
                                  Review
                              </button>
      <button className="flex-1 bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-label-md text-label-md py-1.5 px-3 rounded transition-colors text-center" type="button" data-action-id="approve-10" onClick={actions?.["approve-10"]}>
                                  Approve
                              </button>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
