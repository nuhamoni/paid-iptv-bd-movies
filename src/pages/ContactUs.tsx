import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar searchQuery="" onSearchChange={() => {}} />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-foreground break-words">
          Contact Us – <span className="text-primary">PAID IPTV BD</span>
        </h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: 12/02/2026</p>

        <p className="text-muted-foreground mb-8">
          Thank you for visiting <strong>PAID IPTV BD</strong>. We value clear communication with our users, partners, and copyright holders. If you have any questions, concerns, complaints, or legal requests, you may contact us using the information below.
        </p>

        <Section title="1. General Inquiries">
          <p>
            For general questions about our website, services, or content indexing system, feel free to reach out to us via email. We aim to respond within <strong>24–72 hours</strong> on business days.
          </p>
          <p className="mt-3 text-primary font-semibold">
            📧 Email: <a href="mailto:paidiptvbd@gmail.com" className="underline hover:text-primary/80 transition-colors">paidiptvbd@gmail.com</a>
          </p>
        </Section>

        <Section title="2. DMCA & Copyright Notices">
          <p>If you are submitting a <strong>DMCA takedown request or copyright complaint</strong>, please include:</p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-muted-foreground">
            <li>Your full legal name</li>
            <li>Proof of ownership</li>
            <li>The exact URL on our site</li>
            <li>The original copyrighted source link</li>
            <li>Your contact details</li>
          </ul>
          <p className="mt-3">Send all DMCA-related matters to:</p>
          <p className="mt-2 text-primary font-semibold">
            📧 Email: <a href="mailto:paidiptvbd@gmail.com" className="underline hover:text-primary/80 transition-colors">paidiptvbd@gmail.com</a>
          </p>
          <p className="mt-3">We will review your request and take appropriate action in accordance with applicable laws.</p>
        </Section>

        <Section title="3. Technical Issues">
          <p>If you experience problems such as:</p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-muted-foreground">
            <li>Broken links</li>
            <li>Website errors</li>
            <li>Streaming issues</li>
            <li>Download problems</li>
          </ul>
          <p className="mt-3">Please describe the issue clearly in your email, including:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
            <li>Device type (Mobile/PC/Tablet)</li>
            <li>Browser used</li>
            <li>Exact page or link affected</li>
          </ul>
        </Section>

        <Section title="4. Business & Partnerships">
          <p>
            For advertising, collaborations, or business proposals, contact us with subject line: <strong>"Business Inquiry – PAID IPTV BD"</strong>
          </p>
          <p className="mt-3 text-primary font-semibold">
            📧 Email: <a href="mailto:paidiptvbd@gmail.com" className="underline hover:text-primary/80 transition-colors">paidiptvbd@gmail.com</a>
          </p>
        </Section>

        <Section title="5. Important Notice">
          <p>
            PAID IPTV BD <strong>does not host or upload</strong> any media files. We only index and share publicly available links. For content removal or legal matters, please use the DMCA process above.
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

export default ContactUs;
