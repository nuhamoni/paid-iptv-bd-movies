import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CopyrightNotice = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar searchQuery="" onSearchChange={() => {}} />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2 text-foreground">
          Copyright Notice – <span className="text-primary">PAID IPTV BD</span>
        </h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: 12/02/2026</p>

        <p className="text-muted-foreground mb-8">
          This Copyright Notice applies to the website <strong>PAID IPTV BD</strong> ("we," "us," or "our"). By accessing or using this website, you acknowledge and agree to the terms outlined below regarding intellectual property and copyright protection.
        </p>

        <Section title="1. Ownership of Website Content">
          <p>Unless otherwise stated, all original materials on this website — including but not limited to:</p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-muted-foreground">
            <li>Text, descriptions, and written content</li>
            <li>Website design, layout, and structure</li>
            <li>Graphics, logos, icons, and branding elements</li>
            <li>Code, scripts, and technical implementations</li>
          </ul>
          <p className="mt-3">are the intellectual property of <strong>PAID IPTV BD</strong> and are protected under applicable copyright laws.</p>
          <p className="mt-3">Unauthorized copying, reproduction, modification, distribution, or republishing of any original content from this website without prior written permission is strictly prohibited.</p>
        </Section>

        <Section title="2. Third-Party Content & External Links">
          <p>
            PAID IPTV BD <strong>does not host, store, upload, or distribute</strong> movies, TV shows, live channels, or media files on its own servers. All media content accessed through this website originates from third-party platforms or publicly available sources.
          </p>
          <p className="mt-3">We function as an <strong>indexing and link-sharing platform</strong> only. Therefore:</p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-muted-foreground">
            <li>We do <strong>not claim ownership</strong> of any externally hosted media files.</li>
            <li>Copyright of such content belongs to their respective owners, creators, or distributors.</li>
            <li>PAID IPTV BD is <strong>not responsible</strong> for copyright status of third-party hosted content.</li>
          </ul>
        </Section>

        <Section title="3. Use of Content by Visitors">
          <p>Visitors may view or access content for <strong>personal, non-commercial use only.</strong> You may <strong>not</strong>:</p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-muted-foreground">
            <li>Re-upload, redistribute, or mirror linked media files</li>
            <li>Sell, license, or monetize content accessed via this site</li>
            <li>Use any website material for commercial purposes without permission</li>
          </ul>
          <p className="mt-3">Any misuse may result in legal action by the rightful copyright owner.</p>
        </Section>

        <Section title="4. Reporting Copyright Infringement (DMCA)">
          <p>PAID IPTV BD respects intellectual property rights and complies with applicable copyright laws.</p>
          <p className="mt-3">If you believe that any link on our website directs to content that infringes your copyright, please submit a formal DMCA takedown request including:</p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-muted-foreground">
            <li>Your full legal name and contact details</li>
            <li>Proof of ownership</li>
            <li>The exact URL on PAID IPTV BD containing the link</li>
            <li>The original source of your copyrighted work</li>
            <li>A statement of good faith belief of infringement</li>
          </ul>
          <p className="mt-3">Send your notice to:</p>
          <p className="mt-2 text-primary font-semibold">
            📧 Email: <a href="mailto:paidiptvbd@gmail.com" className="underline hover:text-primary/80 transition-colors">paidiptvbd@gmail.com</a>
          </p>
          <p className="mt-3">Upon verification, we will act promptly to remove or disable the disputed link.</p>
        </Section>

        <Section title="5. No Endorsement of Piracy">
          <p>
            PAID IPTV BD does <strong>not endorse or promote piracy, illegal streaming, or copyright infringement.</strong> This platform exists solely for indexing publicly available links for informational purposes.
          </p>
        </Section>

        <Section title="6. Limitation of Liability">
          <p>PAID IPTV BD shall not be held responsible for:</p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-muted-foreground">
            <li>User actions involving copyrighted content</li>
            <li>Legal consequences arising from third-party websites</li>
            <li>Unauthorized use of external media links</li>
          </ul>
          <p className="mt-3">Users access all third-party content at their own risk.</p>
        </Section>

        <Section title="7. Changes to This Notice">
          <p>
            We reserve the right to update this Copyright Notice at any time without prior notice. Continued use of the website implies acceptance of any changes.
          </p>
        </Section>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="font-display text-xl font-bold text-foreground">PAID IPTV <span className="text-primary">BD</span></p>
          <p className="text-sm text-muted-foreground mt-1">Your Trusted IPTV Link Directory</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-8">
    <h2 className="font-display text-xl font-semibold text-foreground mb-3">{title}</h2>
    <div className="text-muted-foreground leading-relaxed">{children}</div>
  </section>
);

export default CopyrightNotice;
