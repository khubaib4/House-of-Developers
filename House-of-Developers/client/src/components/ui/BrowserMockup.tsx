import { useState } from "react";
import { ExternalLink, Loader2 } from "lucide-react";

interface BrowserMockupProps {
  url: string;
  title: string;
}

export function BrowserMockup({ url, title }: BrowserMockupProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fullUrl = url.startsWith("http") ? url : `https://${url}`;

  return (
    <div className="rounded-xl overflow-hidden border border-border bg-background shadow-lg">
      <div className="bg-muted/50 border-b border-border px-4 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-background border border-border rounded-md px-3 py-1.5 text-sm text-muted-foreground truncate">
          {url}
        </div>
        <a
          href={fullUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
          title="Open live site"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="relative h-[350px] md:h-[450px] lg:h-[500px]">
        {isLoading && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/30 z-10">
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <p className="text-sm text-muted-foreground">
                Loading {title}...
              </p>
            </div>
          </div>
        )}

        {hasError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/10">
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-lg font-semibold mb-2">
                Preview unavailable
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                This site doesn't allow embedded previews
              </p>
              <a
                href={fullUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Visit Live Site <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ) : (
          <iframe
            src={fullUrl}
            title={title}
            className="w-full h-full border-0"
            loading="lazy"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        )}
      </div>
    </div>
  );
}
