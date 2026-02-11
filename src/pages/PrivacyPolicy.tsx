import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar searchQuery="" onSearchChange={() => {}} />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2 text-foreground">
          Privacy Policy – <span className="text-primary">PAID IPTV BD</span>
        </h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: 12/02/2026</p>

        <p className="text-muted-foreground mb-4">
          This Privacy Policy explains how <strong>PAID IPTV BD</strong> ("we," "us," or "our") collects, uses, protects, and manages information when you visit or interact with our website. By using this site, you agree to the practices described in this policy.
        </p>
        <p className="text-muted-foreground mb-8">
          If you do not agree with any part of this policy, please discontinue use of the website.
        </p>

        <Section title="1. Information We Collect">
          <p>We may collect the following types of information:</p>
          <h3 className="font-semibold text-foreground mt-4 mb-2">A. Personal Information You Provide</h3>
          <p>You may voluntarily provide personal information when contacting us, such as:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
            <li>Name</li>
            <li>Email address</li>
            <li>Any details included in messages you send us</li>
          </ul>
          <p className="mt-2">We collect this information <strong>only when you choose to share it.</strong></p>

          <h3 className="font-semibold text-foreground mt-4 mb-2">B. Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
            <li>Your IP address</li>
            <li>Browser type and version</li>
            <li>Device type (mobile, desktop, tablet)</li>
            <li>Pages visited and time spent</li>
            <li>Referring website or source</li>
          </ul>
          <p className="mt-2">This data is used only for analytics and site improvement.</p>
        </Section>

        <Section title="2. Use of Cookies">
          <p>PAID IPTV BD may use cookies to:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
            <li>Improve website performance</li>
            <li>Analyze traffic patterns</li>
            <li>Enhance user experience</li>
          </ul>
          <p className="mt-2">You can disable cookies in your browser settings if you prefer, but some features of the site may not work properly.</p>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We use collected information to:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
            <li>Improve website functionality and performance</li>
            <li>Respond to your inquiries or complaints</li>
            <li>Handle DMCA or copyright-related requests</li>
            <li>Monitor and prevent misuse of the website</li>
            <li>Analyze visitor behavior for better service</li>
          </ul>
          <p className="mt-3">We <strong>do NOT sell or trade your personal information.</strong></p>
        </Section>

        <Section title="4. Third-Party Services">
          <p>
            Our website may contain links to third-party platforms or streaming services. We are <strong>not responsible</strong> for their privacy policies or data practices.
          </p>
          <p className="mt-2">We encourage users to review the privacy policies of any external website they visit.</p>
        </Section>

        <Section title="5. Data Security">
          <p>
            We take reasonable technical and administrative measures to protect your information. However, no online platform is 100% secure, and we cannot guarantee absolute security.
          </p>
          <p className="mt-2">You use this website <strong>at your own risk.</strong></p>
        </Section>

        <Section title="6. Children's Privacy (Under 18)">
          <p>
            PAID IPTV BD is <strong>not intended for children under 18 years of age.</strong> We do not knowingly collect personal information from minors. If we become aware of such data, it will be removed immediately.
          </p>
        </Section>

        <Section title="7. Your Rights">
          <p>You have the right to:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
            <li>Request deletion of your personal data</li>
            <li>Ask what information we have collected about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Opt out of communications</li>
          </ul>
          <p className="mt-2">To exercise these rights, contact us via email below.</p>
        </Section>

        <Section title="8. Changes to This Privacy Policy">
          <p>
            We reserve the right to update this Privacy Policy at any time without prior notice. Continued use of the website implies acceptance of the updated terms.
          </p>
        </Section>

        <Section title="9. Contact Us">
          <p>For any questions regarding this Privacy Policy, contact us at:</p>
          <p className="mt-2 text-primary font-semibold">
            📧 Email: <a href="mailto:paidiptvbd@gmail.com" className="underline hover:text-primary/80 transition-colors">paidiptvbd@gmail.com</a>
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

export default PrivacyPolicy;
