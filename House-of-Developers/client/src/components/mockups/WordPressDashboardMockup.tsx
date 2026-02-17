import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";

export function WordPressDashboardMockup() {
  const menuItems = [
    { label: "Dashboard", active: false },
    { label: "Posts", active: false },
    { label: "Media", active: false },
    { label: "Pages", active: true },
    { label: "Comments", active: false },
    { label: "Appearance", active: false },
    { label: "Plugins", active: false },
    { label: "Settings", active: false },
  ];

  return (
    <div className="flex h-full min-h-[400px] bg-[#f0f0f1] text-[11px] font-sans" data-testid="wordpress-dashboard-mockup">
      <div className="w-[160px] bg-[#1d2327] text-[#c3c4c7] flex-shrink-0">
        <div className="flex items-center gap-2 px-3 py-3 bg-[#21759B]">
          <FileText className="h-4 w-4 text-white" />
          <span className="text-white font-semibold text-xs truncate">My WordPress Site</span>
        </div>
        <nav className="mt-1">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className={cn(
                "px-3 py-2 text-xs cursor-default",
                item.active
                  ? "bg-[#2271b1] text-white"
                  : "text-[#c3c4c7]"
              )}
            >
              {item.label}
            </div>
          ))}
        </nav>
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <div className="bg-white border-b border-[#c3c4c7] px-4 py-2 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-[#1d2327]">Edit Page</h2>
          <button className="bg-[#2271b1] text-white px-3 py-1 rounded-sm text-xs font-medium" data-testid="button-wp-publish">
            Publish
          </button>
        </div>

        <div className="flex-1 p-4 overflow-hidden">
          <div className="bg-white rounded border border-[#c3c4c7] p-4">
            <div className="flex items-center gap-2 border-b border-[#e0e0e0] pb-2 mb-3">
              {["B", "I", "U"].map((btn) => (
                <span
                  key={btn}
                  className="w-6 h-6 flex items-center justify-center bg-[#f6f7f7] border border-[#dcdcde] rounded-sm text-[10px] font-bold text-[#50575e]"
                >
                  {btn}
                </span>
              ))}
              <span className="w-6 h-6 flex items-center justify-center bg-[#f6f7f7] border border-[#dcdcde] rounded-sm text-[10px] text-[#50575e]">
                H
              </span>
              <div className="flex-1" />
              <span className="text-[10px] text-[#787c82]">Visual</span>
            </div>

            <div className="space-y-3">
              <div className="h-5 bg-[#f0f0f1] rounded w-3/4" />
              <div className="h-3 bg-[#f0f0f1] rounded w-full" />
              <div className="h-3 bg-[#f0f0f1] rounded w-5/6" />
              <div className="h-3 bg-[#f0f0f1] rounded w-full" />
              <div className="mt-4 rounded bg-gradient-to-br from-[#21759B]/10 to-[#21759B]/5 h-24 flex items-center justify-center">
                <span className="text-[10px] text-[#787c82]">Image Block</span>
              </div>
              <div className="h-3 bg-[#f0f0f1] rounded w-full" />
              <div className="h-3 bg-[#f0f0f1] rounded w-2/3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
