import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar searchQuery="" onSearchChange={() => {}} />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2 text-foreground">
          Disclaimer – <span className="text-primary">PAID IPTV BD</span>
        </h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: 12/02/2026</p>

        <p className="text-muted-foreground mb-8">
          Welcome to <strong>PAID IPTV BD</strong>. By accessing or using this website, you acknowledge and agree to the following terms of this Disclaimer. If you do not agree, please discontinue use of this site immediately.
        </p>

        <Section title="1. No Hosting of Content">
          <p>
            PAID IPTV BD <strong>does not host, store, upload, or distribute</strong> any movies, TV shows, live channels, videos, or media files on its own servers. All content available through this website is sourced from third-party platforms, publicly available links, or external streaming providers.
          </p>
          <p className="mt-3">
            We function solely as an <strong>indexing and link-sharing platform</strong> to help users discover content that is already available on the internet. We do <strong>not control, own, or manage</strong> the external servers or the content they provide.
          </p>
        </Section>

        <Section title="2. Third-Party Content Responsibility">
          <p>
            All media, streams, and downloadable files linked on this website are hosted by third-party services. PAID IPTV BD is <strong>not responsible</strong> for:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-muted-foreground">
            <li>The legality, accuracy, or authenticity of the content</li>
            <li>The quality, availability, or uptime of external streams</li>
            <li>Any malware, viruses, or security risks from external sites</li>
            <li>Broken, removed, or expired links</li>
          </ul>
          <p className="mt-3">Users access such content <strong>at their own risk</strong>.</p>
        </Section>

        <Section title="3. Copyright & DMCA Compliance">
          <p>
            PAID IPTV BD respects intellectual property rights. If you believe any content linked on this website violates your copyright, please submit a valid DMCA takedown request with proper proof of ownership to:
          </p>
          <p className="mt-3 text-primary font-semibold">📧 Email: paidiptvbd@gmail.com</p>
          <p className="mt-3">Upon verification, we will <strong>promptly remove</strong> the disputed link from our platform.</p>
        </Section>

        <Section title="4. User Responsibility">
          <p>By using this website, you agree that:</p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-muted-foreground">
            <li>You are solely responsible for how you use the content.</li>
            <li>You will comply with your country's laws regarding streaming and downloading.</li>
            <li>PAID IPTV BD is <strong>not liable</strong> for any legal issues arising from your use of third-party content.</li>
          </ul>
        </Section>

        <Section title="5. No Endorsement of Illegal Activity">
          <p>
            PAID IPTV BD does <strong>not encourage or promote piracy, illegal streaming, or copyright infringement</strong>. This platform exists purely for informational and indexing purposes.
          </p>
        </Section>

        <Section title="6. Limitation of Liability">
          <p>
            Under no circumstances shall PAID IPTV BD, its owner, or affiliates be held liable for any direct, indirect, incidental, or consequential damages resulting from your use of this website or any third-party services linked herein.
          </p>
        </Section>

        <Section title="7. Changes to This Disclaimer">
          <p>
            We reserve the right to modify this Disclaimer at any time without prior notice. Continued use of the website implies acceptance of the updated terms.
          </p>
        </Section>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="font-display text-xl font-bold text-foreground">PAID IPTV <span className="text-primary">BD</span></p>
          <p className="text-sm text-muted-foreground mt-1">Your Gateway to IPTV Links</p>
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

export default Disclaimer;
