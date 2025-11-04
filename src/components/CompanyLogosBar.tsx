import { useEffect, useState } from "react";

/**
 * CompanyLogosBar
 *
 * Behavior:
 * - First, attempt to use build-time discovered assets kept in `src/assets/company_logos`
 *   (discovered via Vite's `import.meta.globEager`).
 * - If none are found, try fetching a runtime manifest at `/company_logos/manifest.json`
 *   (useful when assets live in `public/company_logos`). The manifest should be a JSON
 *   array of filenames, e.g. ["logo1.png","logo2.svg"].
 */

// Build-time glob: put logos in `src/assets/company_logos` to be discovered here.
let buildLogos: Array<any> = [];

export function CompanyLogosBar() {
  const [logos, setLogos] = useState<Array<any>>(buildLogos || []);

  useEffect(() => {
    if (logos.length > 0) return; // already have build-time logos

    // Try to fetch a runtime manifest from public/company_logos/manifest.json
    // Manifest format: ["logo1.png","logo2.svg"]
    let cancelled = false;

    async function fetchManifest() {
      try {
        const res = await fetch("/company_logos/manifest.json");
        if (!res.ok) return;
        const list = await res.json();
        if (!Array.isArray(list)) return;
        const mapped = list.map(([name, isWhite]) => [`/company_logos/${name}`, isWhite]);
        if (!cancelled) setLogos(mapped);
      } catch (err) {
        // silent fallback
      }
    }

    fetchManifest();

    return () => {
      cancelled = true;
    };
  }, [logos]);

  if (!logos || logos.length === 0) return null;

  return (
    <div className="mt-6 w-full">
      <div className="mx-auto max-w-7xl px-6">
        <div className="justify-center rounded-full bg-[var(--container-bg-secondary)]/40 px-4 py-3 flex items-center gap-6 overflow-x-auto no-scrollbar">

          {logos.map((tuple, i) => (
            <div key={i} className="flex-shrink-0 opacity-90 hover:opacity-100 transition-opacity">
              <img
                src={tuple[0]}
                alt={`partner-${i}`}
                className="h-6 max-h-6 object-contain"
                style={tuple[1] ? { filter: "brightness(0) invert(1)" } : undefined}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
