// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Editor - Approval Loop Probe
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, CircleAlert, CircleHelp, CirclePlus, FileText, Info, Pencil, Plus, Settings, Settings2, Trash2, TriangleAlert } from "lucide-react";


export type RecordEditorApprovalLoopProbeActionId = "new-record-1" | "cancel-2" | "save-record-3" | "add-metric-4" | "remove-metric-5" | "remove-metric-6" | "operations-1" | "editor-2" | "insights-3" | "settings-4" | "support-5";

export interface RecordEditorApprovalLoopProbeProps {
  actions?: Partial<Record<RecordEditorApprovalLoopProbeActionId, () => void>>;

}

export function RecordEditorApprovalLoopProbe({ actions }: RecordEditorApprovalLoopProbeProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface-container-low dark:bg-on-background docked h-screen left-0 w-64 border-r border-outline-variant dark:border-outline flat no shadows flex flex-col p-gutter gap-component-gap-sm hidden md:flex z-50 shrink-0">
      <div className="mb-8 px-container-padding pt-4">
      <h1 className="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-surface-bright mb-1 tracking-tight">Loop Probe</h1>
      <p className="font-label-md text-label-md text-on-surface-variant">V2.4.1-Stable</p>
      </div>
      <div className="mb-6 px-2">
      <button className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary py-2 px-4 rounded font-label-md text-label-md hover:bg-surface-tint transition-colors active:scale-95 duration-150" type="button" data-action-id="new-record-1" onClick={actions?.["new-record-1"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                      New Record
                  </button>
      </div>
      <ul className="flex flex-col gap-1 flex-1 px-2">
      <li>
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-variant rounded-lg transition-colors active:scale-95 duration-150 font-label-md text-label-md" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <Settings2 aria-hidden={true} focusable="false" />
                          Operations
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-3 py-2 bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary font-semibold rounded-lg transition-colors active:scale-95 duration-150 font-label-md text-label-md" href="#" data-action-id="editor-2" onClick={(event) => { event.preventDefault(); actions?.["editor-2"]?.(); }}>
      <Pencil data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                          Editor
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-variant rounded-lg transition-colors active:scale-95 duration-150 font-label-md text-label-md" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3 aria-hidden={true} focusable="false" />
                          Insights
                      </a>
      </li>
      </ul>
      <ul className="flex flex-col gap-1 mt-auto px-2 pb-4">
      <li>
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-variant rounded-lg transition-colors active:scale-95 duration-150 font-label-md text-label-md" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings aria-hidden={true} focusable="false" />
                          Settings
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high dark:hover:bg-surface-variant rounded-lg transition-colors active:scale-95 duration-150 font-label-md text-label-md" href="#" data-action-id="support-5" onClick={(event) => { event.preventDefault(); actions?.["support-5"]?.(); }}>
      <CircleHelp aria-hidden={true} focusable="false" />
                          Support
                      </a>
      </li>
      </ul>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-background">
      {/* TopNavBar (Mobile Fallback + Utility) */}
      <header className="bg-surface-container-lowest dark:bg-on-background flex justify-between items-center w-full px-container-padding h-row-height-md border-b border-outline-variant dark:border-outline flat no shadows shrink-0 md:hidden z-40">
      <div className="font-headline-sm text-headline-sm font-semibold text-primary dark:text-primary-fixed-dim">Approval Loop Probe</div>
      <div className="flex items-center gap-4 text-on-surface-variant font-label-md text-label-md">
      <span className="hidden sm:inline">Last Refreshed: 12:45 PM</span>
      <span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-secondary"></span> Ready</span>
      </div>
      </header>
      {/* Unsaved Changes Warning */}
      <div className="bg-error-container text-on-error-container px-container-padding py-2 flex items-center gap-2 border-b border-error/20 shrink-0 font-body-sm text-body-sm">
      <TriangleAlert className="text-[18px]" aria-hidden={true} focusable="false" />
      <span><strong>Unsaved Changes:</strong> You have modifications that need to be saved.</span>
      </div>
      {/* Scrollable Form Area */}
      <div className="flex-1 overflow-y-auto p-container-padding md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-end mb-8 border-b border-outline-variant pb-4">
      <div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Record Editor</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Configure parameters and associate operational metrics.</p>
      </div>
      <div className="flex gap-3">
      <button className="px-4 py-2 bg-surface-container-lowest border border-outline-variant text-on-surface rounded font-label-md text-label-md hover:bg-surface-container-low transition-colors active:scale-95" type="button" data-action-id="cancel-2" onClick={actions?.["cancel-2"]}>Cancel</button>
      <button className="px-4 py-2 bg-primary text-on-primary rounded font-label-md text-label-md hover:bg-surface-tint transition-colors active:scale-95 shadow-[0_2px_4px_rgba(0,0,0,0.1)]" type="button" data-action-id="save-record-3" onClick={actions?.["save-record-3"]}>Save Record</button>
      </div>
      </div>
      <form className="space-y-8">
      {/* Basic Info Section */}
      <section className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant">
      <h3 className="font-label-caps text-label-caps text-outline uppercase mb-6 flex items-center gap-2">
      <Info className="text-[16px]" aria-hidden={true} focusable="false" />
                                  Basic Information
                              </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Record Name */}
      <div className="col-span-1 md:col-span-2">
      <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="recordName">Record Name <span className="text-error">*</span></label>
      <input className="w-full h-[36px] px-3 bg-surface border border-outline-variant rounded font-tabular-nums text-tabular-nums text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow" id="recordName" required={true} type="text" defaultValue="PROBE-OPT-8821" />
      </div>
      {/* Category */}
      <div>
      <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="category">Category <span className="text-error">*</span></label>
      <select className="w-full h-[36px] px-3 bg-surface border border-outline-variant rounded font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none transition-shadow" id="category" required={true}>
      <option value="">Select Category...</option>
      <option value="sys_perf">System Performance</option>
      <option selected={true} value="net_sec">Network Security</option>
      <option value="data_int">Data Integrity</option>
      </select>
      </div>
      {/* Priority */}
      <div>
      <label className="block font-label-md text-label-md text-on-surface mb-2">Priority Level</label>
      <div className="flex gap-4 h-[36px] items-center">
      <label className="flex items-center gap-2 cursor-pointer">
      <input className="text-primary focus:ring-primary" name="priority" type="radio" defaultValue="low" />
      <span className="font-body-sm text-body-sm text-on-surface">Low</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
      <input defaultChecked={true} className="text-primary focus:ring-primary" name="priority" type="radio" defaultValue="medium" />
      <span className="font-body-sm text-body-sm text-on-surface">Medium</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
      <input className="text-primary focus:ring-primary" name="priority" type="radio" defaultValue="high" />
      <span className="font-body-sm text-body-sm text-on-surface">High</span>
      </label>
      </div>
      </div>
      </div>
      </section>
      {/* Specifications Section */}
      <section className="bg-surface-container-lowest p-6 rounded-lg border border-error/50 relative shadow-[0_4px_12px_rgba(186,26,26,0.05)]">
      <h3 className="font-label-caps text-label-caps text-outline uppercase mb-6 flex items-center gap-2">
      <FileText className="text-[16px]" aria-hidden={true} focusable="false" />
                                  Specifications
                              </h3>
      <div>
      <label className="block font-label-md text-label-md text-error mb-2" htmlFor="description">Detailed Description <span className="text-error">*</span></label>
      <textarea className="w-full p-3 bg-error-container/10 border border-error rounded font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-error transition-shadow" id="description" required={true} rows={4}>Initial probe scan</textarea>
      <p className="font-body-sm text-body-sm text-error mt-2 flex items-center gap-1">
      <CircleAlert className="text-[14px]" aria-hidden={true} focusable="false" />
                                      Description must be at least 50 characters long.
                                  </p>
      </div>
      </section>
      {/* Associated Metrics Section */}
      <section className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant">
      <div className="flex justify-between items-center mb-6">
      <h3 className="font-label-caps text-label-caps text-outline uppercase flex items-center gap-2">
      <BadgeHelp className="text-[16px]" aria-hidden={true} focusable="false" />
                                      Associated Metrics
                                  </h3>
      <button className="flex items-center gap-1 text-primary hover:text-primary-fixed-dim font-label-md text-label-md transition-colors" type="button" data-action-id="add-metric-4" onClick={actions?.["add-metric-4"]}>
      <CirclePlus className="text-[16px]" aria-hidden={true} focusable="false" />
                                      Add Metric
                                  </button>
      </div>
      <div className="border border-outline-variant rounded overflow-hidden">
      <table className="w-full text-left border-collapse">
      <thead className="bg-surface-container-low border-b border-outline-variant">
      <tr>
      <th className="py-2 px-4 font-label-caps text-label-caps text-outline w-1/2">Metric Key</th>
      <th className="py-2 px-4 font-label-caps text-label-caps text-outline w-1/2">Value</th>
      <th className="py-2 px-4 font-label-caps text-label-caps text-outline w-16 text-center">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr className="border-b border-outline-variant/50 hover:bg-surface-container-lowest transition-colors">
      <td className="py-2 px-4">
      <input className="w-full h-[32px] px-2 bg-surface border border-transparent hover:border-outline-variant focus:border-primary rounded font-tabular-nums text-tabular-nums text-on-surface transition-colors" placeholder="Key" type="text" defaultValue="latency_ms" />
      </td>
      <td className="py-2 px-4">
      <input className="w-full h-[32px] px-2 bg-surface border border-transparent hover:border-outline-variant focus:border-primary rounded font-tabular-nums text-tabular-nums text-on-surface transition-colors" placeholder="Value" type="text" defaultValue="45.2" />
      </td>
      <td className="py-2 px-4 text-center">
      <button className="text-outline-variant hover:text-error transition-colors p-1 rounded hover:bg-error-container/20" title="Remove Metric" type="button" data-action-id="remove-metric-5" onClick={actions?.["remove-metric-5"]}>
      <Trash2 className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      <tr className="hover:bg-surface-container-lowest transition-colors">
      <td className="py-2 px-4">
      <input className="w-full h-[32px] px-2 bg-surface border border-transparent hover:border-outline-variant focus:border-primary rounded font-tabular-nums text-tabular-nums text-on-surface transition-colors" placeholder="Key" type="text" defaultValue="packet_loss_pct" />
      </td>
      <td className="py-2 px-4">
      <input className="w-full h-[32px] px-2 bg-surface border border-transparent hover:border-outline-variant focus:border-primary rounded font-tabular-nums text-tabular-nums text-on-surface transition-colors" placeholder="Value" type="text" defaultValue="0.01" />
      </td>
      <td className="py-2 px-4 text-center">
      <button className="text-outline-variant hover:text-error transition-colors p-1 rounded hover:bg-error-container/20" title="Remove Metric" type="button" data-action-id="remove-metric-6" onClick={actions?.["remove-metric-6"]}>
      <Trash2 className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 text-right">2 metrics configured</p>
      </section>
      </form>
      </div>
      </div>
      </main>
    </>
  );
}
