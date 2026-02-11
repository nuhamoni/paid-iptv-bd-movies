import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DmcaPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar searchQuery="" onSearchChange={() => {}} />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2 text-foreground">
          DMCA Policy – <span className="text-primary">PAID IPTV BD</span>
        </h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: 12/02/2026</p>

        <p className="text-muted-foreground mb-8">
          This Digital Millennium Copyright Act ("DMCA") Policy applies to the website <strong>PAID IPTV BD</strong> ("we," "us," or "our") and outlines our procedures for responding to copyright infringement claims in accordance with the <strong>U.S. Digital Millennium Copyright Act (17 U.S.C. § 512)</strong> and other applicable international copyright laws.
        </p>
        <p className="text-muted-foreground mb-8">
          By using this website, you agree to comply with this policy and acknowledge that PAID IPTV BD takes copyright matters seriously.
        </p>

        <Section title="1. Our Position on Copyright">
          <p>
            PAID IPTV BD <strong>does not host, upload, store, or distribute</strong> any copyrighted movies, TV shows, live channels, or media files on its own servers. All content accessible through our website is hosted on third-party platforms or publicly available sources.
          </p>
          <p className="mt-3">
            We operate strictly as an <strong>indexing and link-sharing platform</strong> that helps users discover content already available elsewhere on the internet. We do <strong>not control</strong> the content on external websites.
          </p>
          <p className="mt-3">
            However, we respect the intellectual property rights of copyright holders and are committed to responding to valid takedown notices in good faith.
          </p>
        </Section>

        <Section title="2. Filing a DMCA Takedown Notice">
          <p>
            If you are a copyright owner (or authorized representative) and believe that any link on PAID IPTV BD leads to content that infringes your copyrighted material, you may submit a formal DMCA takedown request containing the following information:
          </p>
          <p className="mt-3 font-semibold text-foreground">Your notice must include all of the items below:</p>
          <ol className="list-decimal list-inside mt-3 space-y-2 text-muted-foreground">
            <li><strong>Your full legal name and company</strong> (if applicable).</li>
            <li><strong>Your contact details</strong> (email address, phone number, and mailing address).</li>
            <li><strong>Identification of the copyrighted work</strong> you claim has been infringed (e.g., movie title, series name, or official link).</li>
            <li><strong>The exact URL(s) on PAID IPTV BD</strong> that contain the allegedly infringing link(s).</li>
            <li><strong>The original official source URL</strong> of your copyrighted content (if available).</li>
            <li>A statement that: <em>"I have a good faith belief that the use of the material is not authorized by the copyright owner, its agent, or the law."</em></li>
            <li>A statement that: <em>"The information in this notice is accurate, and under penalty of perjury, I am the copyright owner or authorized to act on behalf of the owner."</em></li>
            <li>Your <strong>electronic or physical signature.</strong></li>
          </ol>
          <p className="mt-4">Send your complete notice to:</p>
          <p className="mt-2 text-primary font-semibold">📧 Email: paidiptvbd@gmail.com</p>
          <p className="mt-3 text-sm text-yellow-500/80">⚠️ Incomplete or invalid notices may be ignored or delayed.</p>
        </Section>

        <Section title="3. Our Response Timeline">
          <p>Upon receiving a valid DMCA notice, PAID IPTV BD will:</p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-muted-foreground">
            <li>Review the claim within <strong>24–72 hours</strong></li>
            <li>Temporarily disable or remove the reported link if necessary</li>
            <li>Notify the uploader/source (where applicable)</li>
            <li>Keep records of all notices for legal compliance</li>
          </ul>
          <p className="mt-3">We will act <strong>promptly and reasonably</strong> in accordance with the law.</p>
        </Section>

        <Section title="4. Counter-Notification (If Your Content Was Removed)">
          <p>If your link was removed and you believe it was a mistake, you may submit a <strong>Counter-Notice</strong> that includes:</p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-muted-foreground">
            <li>Your full name and contact information</li>
            <li>The URL that was removed</li>
            <li>A statement under penalty of perjury that the material was removed due to mistake or misidentification</li>
            <li>Your consent to jurisdiction of your local court</li>
            <li>Your signature</li>
          </ul>
          <p className="mt-3">Send counter-notices to the same email above.</p>
        </Section>

        <Section title="5. Repeat Infringers">
          <p>
            PAID IPTV BD reserves the right to block or blacklist sources, links, or contributors who are repeatedly associated with copyright infringement.
          </p>
        </Section>

        <Section title="6. No Legal Advice">
          <p>
            This DMCA policy is provided for informational purposes only and does not constitute legal advice. Copyright holders should consult their legal counsel if necessary.
          </p>
        </Section>

        <Section title="7. Changes to This Policy">
          <p>
            PAID IPTV BD reserves the right to update this DMCA policy at any time without prior notice. Continued use of the website implies acceptance of any changes.
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

export default DmcaPolicy;
