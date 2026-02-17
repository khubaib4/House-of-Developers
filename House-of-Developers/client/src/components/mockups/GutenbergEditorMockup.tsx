import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";

export function GutenbergEditorMockup() {
  return (
    <div className="flex flex-col h-full min-h-[440px] bg-white text-[11px] font-sans" data-testid="gutenberg-editor-mockup">
      <div className="flex items-center justify-between px-3 py-2 bg-white border-b border-[#e0e0e0]">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5" style={{ color: '#21759B' }} />
          <div className="flex items-center gap-1">
            <span className="w-5 h-5 flex items-center justify-center rounded text-[#1e1e1e]">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><rect x="1" y="1" width="3.5" height="3.5" rx="0.5"/><rect x="5.5" y="1" width="3.5" height="3.5" rx="0.5"/><rect x="1" y="5.5" width="3.5" height="3.5" rx="0.5"/><rect x="5.5" y="5.5" width="3.5" height="3.5" rx="0.5"/></svg>
            </span>
            <span className="w-5 h-5 flex items-center justify-center rounded text-[#1e1e1e]">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M2 5h6M5 2v6"/></svg>
            </span>
          </div>
          <span className="text-[10px] text-[#757575] ml-1">Home Page</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[#757575]">Saved</span>
          <button className="bg-[#2271b1] text-white px-3 py-1 rounded-sm text-[10px] font-medium" data-testid="button-gutenberg-publish">
            Publish
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="max-w-[420px] mx-auto py-4 px-3 space-y-3">

          <div className="group relative rounded border border-transparent hover:border-[#2271b1] p-3 transition-colors border-[#2271b1]">
            <span className="absolute -top-2 left-2 bg-[#2271b1] text-white text-[8px] px-1.5 py-0.5 rounded-sm">
              Heading
            </span>
            <h2 className="text-[15px] font-bold text-[#1e1e1e] leading-tight">
              Welcome to Our Agency
            </h2>
          </div>

          <div className="rounded border border-transparent p-3">
            <p className="text-[10px] text-[#575757] leading-relaxed">
              We build custom digital solutions that help businesses grow.
              From WordPress sites to full-scale web applications.
            </p>
          </div>

          <div className="rounded border border-transparent p-2">
            <div className="grid grid-cols-3 gap-2">
              {[
                { n: "150+", l: "Projects" },
                { n: "98%", l: "Satisfaction" },
                { n: "< 2s", l: "Load Time" },
              ].map((s) => (
                <div key={s.l} className="bg-[#f0f6fc] rounded p-2 text-center">
                  <div className="text-[12px] font-bold text-[#2271b1]">{s.n}</div>
                  <div className="text-[8px] text-[#757575] mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
            <span className="text-[8px] text-[#b0b0b0] mt-1 block">Columns Block</span>
          </div>

          <div className="rounded border border-transparent p-2">
            <div className="rounded overflow-hidden bg-gradient-to-br from-[#21759B]/15 via-[#21759B]/5 to-[#135e96]/10 h-[72px] flex items-center justify-center relative">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#93b4cf" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
              <span className="absolute bottom-1 right-2 text-[7px] text-[#93b4cf]">hero-banner.jpg</span>
            </div>
            <span className="text-[8px] text-[#b0b0b0] mt-1 block">Image Block</span>
          </div>

          <div className="rounded border border-transparent p-2">
            <div className="grid grid-cols-2 gap-2">
              {[
                { title: "Web Development", color: "#2271b1" },
                { title: "SEO Services", color: "#135e96" },
              ].map((svc) => (
                <div key={svc.title} className="rounded border border-[#e0e0e0] p-2">
                  <div className="w-5 h-5 rounded bg-[#f0f6fc] flex items-center justify-center mb-1.5">
                    <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: svc.color }} />
                  </div>
                  <div className="text-[9px] font-semibold text-[#1e1e1e]">{svc.title}</div>
                  <div className="h-1.5 bg-[#f0f0f1] rounded w-full mt-1" />
                  <div className="h-1.5 bg-[#f0f0f1] rounded w-3/4 mt-0.5" />
                </div>
              ))}
            </div>
            <span className="text-[8px] text-[#b0b0b0] mt-1 block">Cards Block</span>
          </div>

          <div className="rounded border border-transparent p-2">
            <div className="flex items-center gap-2">
              <div className="bg-[#2271b1] text-white text-[9px] font-medium px-3 py-1.5 rounded-sm">
                Get Started
              </div>
              <div className="border border-[#2271b1] text-[#2271b1] text-[9px] font-medium px-3 py-1.5 rounded-sm">
                Learn More
              </div>
            </div>
            <span className="text-[8px] text-[#b0b0b0] mt-1 block">Buttons Block</span>
          </div>

        </div>
      </div>

      <div className="flex items-center justify-between px-3 py-1.5 border-t border-[#e0e0e0] bg-[#f6f7f7]">
        <div className="flex items-center gap-3">
          <span className="text-[9px] text-[#757575]">6 Blocks</span>
          <span className="text-[9px] text-[#757575]">42 Words</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#00a32a]" />
          <span className="text-[9px] text-[#757575]">SEO: Good</span>
        </div>
      </div>
    </div>
  );
}
