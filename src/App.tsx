export function App() {
	return (
		<div className="min-h-screen bg-[var(--section-bg-primary)] text-[var(--text-primary)]">
		{/* Header */}
		<header className="sticky top-0 z-40 border-b border-gray-200 bg-[var(--section-bg-primary)]/90 backdrop-blur">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
			<div className="flex items-center gap-3">
				<img src="/blackbar-logo.svg" alt="Blackbar Logo" className="h-8 w-auto" />
			</div>
			<nav className="hidden gap-6 text-sm md:flex">
				<a href="#platform" className="hover:text-[var(--text-hover)]">Platform</a>
				<a href="#product" className="hover:text-[var(--text-hover)]">Product</a>
				<a href="#solutions" className="hover:text-[var(--text-hover)]">Solutions</a>
				<a href="#compliance" className="hover:text-[var(--text-hover)]">Compliance</a>
				<a href="#resources" className="hover:text-[var(--text-hover)]">Resources</a>
				<a href="#contact" className="hover:text-[var(--text-hover)]">Contact</a>
			</nav>
			<div className="flex items-center gap-3">
				<a href="#investors" className="rounded-xl border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50">Investors</a>
				<a href="#contact" className={"rounded-xl bg-[var(--company-color)] px-3 py-2 text-sm text-white hover:bg-[#00569cff]"}>Request a Demo</a>
			</div>
			</div>
		</header>

		{/* Hero */}
		<section className="relative overflow-hidden">
			<div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-50 to-gray-100" />
			<div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2">
			<div>
				<h1 className="text-4xl font-semibold leading-tight md:text-5xl">
				Visual Data Protection for the Last Unsecured Gap
				</h1>
				<p className="mt-4 max-w-xl text-lg text-[var(--text-secondary)]">
				Blackbar is an endpoint security platform that controls what sensitive data is visible on-screen and prevents analog capture—combining dynamic data masking with intelligent webcam-based threat detection.
				</p>
				<div className="mt-8 flex gap-3">
				<a href="#platform" className="rounded-xl bg-[var(--company-color)] px-4 py-2 text-white hover:bg-[var(--company-color-hover)]">Explore Platform</a>
				<a href="#blackbar-video" className="rounded-xl border border-gray-300 px-4 py-2 hover:bg-gray-50">See Blackbar</a>
				</div>
			</div>
			<div className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
				<div className="grid grid-cols-2 gap-4">
				<div className="rounded-xl border border-gray-200 p-4">
					<h3 className="text-sm font-medium text-[var(--text-heading)]">Blackbar Application Privacy Controls</h3>
					<p className="mt-2 text-sm text-gray-600">Real‑time masking/redaction of PII and sensitive data on the endpoint—no code changes required.</p>
				</div>
				<div className="rounded-xl border border-gray-300 p-4">
					<h3 className="text-sm font-medium text-[var(--text-heading)]">Blackbar – Threat Detection</h3>
					<p className="mt-2 text-sm text-gray-600">Detects phones/cameras & multiple viewers; blocks the screen and logs events instantly.</p>
				</div>
				<div className="rounded-xl border border-gray-300 p-4">
					<h3 className="text-sm font-medium text-[var(--text-heading)]">Cloud‑Managed</h3>
					<p className="mt-2 text-sm text-gray-600">Central policy console with low‑bandwidth telemetry, SIEM forwarding, and audit trails.</p>
				</div>
				<div className="rounded-xl border border-gray-300 p-4">
					<h3 className="text-sm font-medium text-[var(--text-heading)]">Enterprise‑Ready</h3>
					<p className="mt-2 text-sm text-gray-600">AES‑256 at rest, TLS in transit, privacy by design—no continuous video recording.</p>
				</div>
				</div>
			</div>
			{/* Video Section */}
			<div className="col-span-full flex justify-center w-full pt-20">
				<div id="blackbar-video" className="w-1/2">
					<div className="relative pb-[70%]">
						<iframe
							className="absolute inset-0 h-full w-full rounded-xl"
							src="https://www.youtube.com/embed/sNGKDYxHcCM"
							title="Blackbar Platform Overview"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</div>
				</div>
			</div>
			</div>
		</section>

		{/* Platform Overview */}
		<section id="platform" className="border-t border-gray-200 bg-[var(--section-bg-primary)]">
			<div className="mx-auto max-w-7xl px-6 py-16">
			<p className="text-xs uppercase tracking-widest text-[var(--text-tertiary)]">Platform</p>
			<h2 className="mt-2 text-3xl font-semibold text-[var(--text-primary)]">Blackbar Endpoint Security Platform</h2>
			<p className="mt-3 max-w-3xl text-[var(--text-secondary)]">
				Extend DLP to the point of display. Blackbar unifies Application Privacy Controls (dynamic masking) and PhotoShield (visual threat detection) to ensure data stays protected when it’s rendered to the human eye.
			</p>
			<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
				<div className="rounded-2xl border border-gray-300 p-6">
				<h3 className="text-xl font-medium text-[var(--text-heading)]">Application Privacy Controls</h3>
				<ul className="mt-4 space-y-2 text-[var(--text-secondary)]">
					<li>• Policy‑driven masking for PII, account numbers, health/financial data</li>
					<li>• Context rules: user role, geo‑location, device state</li>
					<li>• Temporary reveal with audit logging</li>
					<li>• Works via secure browser extension and desktop agent</li>
				</ul>
				</div>
				<div className="rounded-2xl border border-gray-300 p-6">
				<h3 className="text-xl font-medium text-[var(--text-heading)]">Blackbar – Intelligent Threat Detection</h3>
				<ul className="mt-4 space-y-2 text-gray-600">
					<li>• Detects phones/cameras and shoulder‑surfing in real time</li>
					<li>• Automated responses: screen block, watermark, alert, log</li>
					<li>• Triggers on defined conditions (apps, sites, VPN, labels)</li>
					<li>• Lightweight endpoint agent with central policy control</li>
				</ul>
				</div>
			</div>
			</div>
		</section>

		{/* Product Detail */}
		<section id="product" className="border-t border-gray-200 bg-[var(--section-bg-secondary)]">
			<div className="mx-auto max-w-7xl px-6 py-16">
			<p className="text-xs uppercase tracking-widest text-gray-500">Product</p>
			<h2 className="mt-2 text-3xl font-semibold">Blackbar — Stop the Analog Loophole</h2>
			<div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
				<div className="rounded-2xl border border-gray-300 bg-white p-6">
				<h4 className="font-medium text-[var(--text-heading)]">Real‑Time Monitoring</h4>
				<p className="mt-2 text-sm text-gray-600">Monitors only when policies say: specific apps, URLs, or VPN sessions. No continuous video recording—only event stills with faces blurred.</p>
				</div>
				<div className="rounded-2xl border border-gray-300 bg-white p-6">
				<h4 className="font-medium text-[var(--text-heading)]">Automatic Response</h4>
				<p className="mt-2 text-sm text-gray-600">Instantly blocks the screen, displays deterrence overlays, and routes alerts to your SOC/SIEM with full metadata.</p>
				</div>
				<div className="rounded-2xl border border-gray-300 bg-white p-6">
				<h4 className="font-medium text-[var(--text-heading)]">Enterprise Deployment</h4>
				<p className="mt-2 text-sm text-gray-600">MSI installer; deploy via Intune/SCCM. Minimal CPU and bandwidth footprint; webcam required.</p>
				</div>
			</div>
			</div>
		</section>

		{/* Solutions / Use Cases */}
		<section id="solutions" className="border-t border-gray-200 bg-[var(--section-bg-primary)]">
			<div className="mx-auto max-w-7xl px-6 py-16">
			<p className="text-xs uppercase tracking-widest text-gray-500">Solutions</p>
			<h2 className="mt-2 text-3xl font-semibold">Where Blackbar Delivers</h2>
			<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
				<div className="rounded-2xl border border-gray-300 p-6">
				<h3 className="font-medium text-[var(--text-heading)]">Financial Services</h3>
				<p className="mt-2 text-sm text-[var(--text-secondary)]">Protect PII, account data, and trading screens. Enforce geo‑aware masking for offshore teams.</p>
				</div>
				<div className="rounded-2xl border border-gray-300 p-6">
				<h3 className="font-medium text-[var(--text-heading)]">Healthcare</h3>
				<p className="mt-2 text-sm text-[var(--text-secondary)]">Redact PHI on screen; deter shoulder‑surfing in clinics and remote settings.</p>
				</div>
				<div className="rounded-2xl border border-gray-300 p-6">
				<h3 className="font-medium text-[var(--text-heading)]">Telecom / BPO</h3>
				<p className="mt-2 text-sm text-gray-600">Safely extend access to data‑rich legacy apps without changing them—mask what offshore users can see.</p>
				</div>
			</div>
			<div className="mt-10 rounded-2xl border border-gray-300 p-6">
				<h4 className="text-lg font-medium text-[var(--text-heading)]">Use-Case Example</h4>
				<p className="mt-2 text-sm text-gray-600">Deployed for contingent worker monitoring across vendor ODCs; role‑based policies, incident logging, and phased rollout options.</p>
				<ul className="mt-4 list-disc pl-5 text-sm text-gray-600">
				<li>Direct vendor licensing or enterprise‑purchased seats</li>
				<li>Real‑time alerts, compliance reporting, and playbook automation</li>
				<li>Strict ODC device policies with remote‑work accommodations</li>
				</ul>
			</div>
			</div>
		</section>

		{/* Compliance & Security */}
		<section id="compliance" className="border-t border-gray-200 bg-[var(--section-bg-secondary)]">
			<div className="mx-auto max-w-7xl px-6 py-16">
			<p className="text-xs uppercase tracking-widest text-gray-500">Security & Compliance</p>
			<h2 className="mt-2 text-3xl font-semibold">Privacy‑First Architecture</h2>
			<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
				<div className="rounded-2xl border border-gray-300 bg-white p-6">
				<h3 className="font-medium text-[var(--text-heading)]">Encryption & Transport</h3>
				<p className="mt-2 text-sm text-gray-600">AES‑256 for data at rest and TLS 1.2+ for all communications. Single images per event; faces blurred.</p>
				</div>
				<div className="rounded-2xl border border-gray-300 bg-white p-6">
				<h3 className="font-medium text-[var(--text-heading)]">Governance Alignment</h3>
				<p className="mt-2 text-sm text-gray-600">Designed to align with GDPR, SOC 2, and ISO 27001. Role‑based access in the management console with immutable audit trails.</p>
				</div>
			</div>
			</div>
		</section>

		{/* Resources */}
		<section id="resources" className="border-t border-gray-200 bg-[var(--section-bg-primary)]">
			<div className="mx-auto max-w-7xl px-6 py-16">
			<p className="text-xs uppercase tracking-widest text-gray-500">Resources</p>
			<h2 className="mt-2 text-3xl font-semibold">Downloads & Docs</h2>
			<ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
				<li className="rounded-xl border border-gray-300 p-4">
				<h4 className="font-medium text-[var(--text-heading)]">PhotoShield – Installation Guide</h4>
				<p className="mt-1 text-sm text-gray-600">Endpoint requirements, MSI install steps, and agent configuration.</p>
				</li>
				<li className="rounded-xl border border-gray-300 p-4">
				<h4 className="font-medium text-[var(--text-heading)]">Platform – Technical Overview</h4>
				<p className="mt-1 text-sm text-gray-600">Architecture, policies, masking rules, and deployment options.</p>
				</li>
			</ul>
			</div>
		</section>

		{/* Investors */}
		<section id="investors" className="border-t border-gray-200 bg-[var(--section-bg-secondary)]">
			<div className="mx-auto max-w-7xl px-6 py-16">
			<p className="text-xs uppercase tracking-widest text-gray-500">Investors</p>
			<h2 className="mt-2 text-3xl font-semibold">Investor Inquiry</h2>

			<div className="p-6">
				<div className="rounded-2xl border border-gray-300 bg-white p-6">
				<h4 className="font-medium text-[var(--text-heading)]">Contact Us</h4>
				<p className="mt-1 text-sm text-[var(--text-secondary)]">Blackbar.ai is always entertaining new interests. Please reach out to contact@blackbar.ai if you would like to know more about getting involved.</p>
				</div>
			</div>
			</div>
		</section>

		{/* Contact */}
		<section id="contact" className="border-t border-gray-200 bg-[var(--section-bg-primary)]">
			<div className="mx-auto max-w-7xl px-6 py-16">
			<p className="text-xs uppercase tracking-widest text-gray-500">Contact</p>
			<h2 className="mt-2 text-3xl font-semibold">Let’s talk</h2>
			<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
				<div className="rounded-2xl border border-gray-300 p-6">
				<h4 className="font-medium text-[var(--text-heading)]">General</h4>
				<p className="mt-2 text-sm text-gray-600">info@blackbar.ai</p>
				<p className="mt-1 text-sm text-gray-600">Partnerships & Channels</p>
				<p className="text-sm text-gray-600">partners@blackbar.ai</p>
				</div>
				<form className="rounded-2xl border border-gray-300 p-6">
				<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
					<input placeholder="First name" className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-200" />
					<input placeholder="Last name" className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-200" />
					<input placeholder="Work email" className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-200 md:col-span-2" />
					<textarea placeholder="How can we help?" rows={4} className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-200 md:col-span-2" />
				</div>
				<button type="button" className="mt-4 rounded-xl bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">Submit</button>
				<p className="mt-3 text-xs text-gray-500">By submitting, you agree to our privacy policy.</p>
				</form>
			</div>
			</div>
		</section>

		{/* Footer */}
		<footer className="border-t border-gray-200 bg-[var(--section-bg-primary)]">
			<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
			<p className="text-sm text-[var(--text-tertiary)]">© {new Date().getFullYear()} Blackbar. All rights reserved.</p>
			<div className="flex items-center gap-6 text-sm text-[var(--text-secondary)]">
				<a href="#" className="hover:text-[var(--text-hover)]">Privacy</a>
				<a href="#" className="hover:text-[var(--text-hover)]">Terms</a>
				<a href="#" className="hover:text-[var(--text-hover)]">Security</a>
			</div>
			</div>
		</footer>
		</div>
	)
}
