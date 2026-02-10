import { useState, useEffect } from "react";

const DisclaimerPopup = ({ onClose }: { onClose: () => void }) => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setVisible(false);
        onClose();
      }, 500);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/90 transition-opacity duration-500 ${fading ? 'opacity-0' : 'opacity-100'}`}>
      <div className={`relative w-[95vw] max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-border bg-card p-6 md:p-8 shadow-2xl transition-all duration-500 ${fading ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl text-gradient mb-2">Welcome to PAID IPTV BD !</h1>
          <div className="w-20 h-1 mx-auto rounded-full bg-primary" />
        </div>

        {/* Content */}
        <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
          <p>
            At <span className="text-foreground font-semibold">PAID IPTV BD</span>, we are dedicated to offering our users a <span className="text-accent font-semibold">PREMiUM EXPERiENCE</span> when it comes to accessing a Wide Range of Movies and TV-Shows/WEB-Series. Please take a moment to read our Disclaimer, which outlines our commitment to High-Quality content and Responsible Usage.
          </p>

          <div className="space-y-3">
            <Section title="High-Quality Video and Audio" text="PAID IPTV BD prides itself on providing High-Quality video Resolutions and Exceptional Audio Clarity. We strive to deliver an immersive viewing experience, ensuring that you enjoy your Favorite Movies and Shows in the Best Possible Quality and Size." />
            <Section title="Fast Downloading Links" text="PAID IPTV BD offers High-Speed Downloading Links, allowing you to quickly and easily access the content you love without unnecessary delays. Enjoy Seamless Downloads, so you can Spend More Time Watching & Less Time Waiting." />
            <Section title="Safety First" text="We prioritize your safety online. PAID IPTV BD rigorously checks all files before Providing Access to ensure that they are free of malware, viruses, and any harmful content. You can browse and download with Confidence, knowing that your Device and Identity is Protected." />
            <Section title="First on the Net HDCAMs" text="At PAID IPTV BD, we strive to be at the ForeFront of Entertainment offerings by providing First-On-The-Net high-quality HDCAMs Releases. Whether you prefer Hindi or English-language films, We've got a wide selection for you to Explore." />
            <Section title="Content Accessibility" text="Our Website serves as a User-Friendly Platform that helps users discover a Variety of Films and Television Shows. We cater to diverse tastes and preferences, ensuring that there's something for everyone." />
            <Section title="Respecting Copyright Laws" text="While we provide links to Content, we encourage our users to respect copyright laws in their respective countries. PAID IPTV BD does not host any content on its servers but connects users to other responsible Third-Party Sites." />
            <Section title="Promoting Legal Alternatives" text="Supporting the Creators behind the content we love is Essential. We advocate for the use of official streaming services that ensure artists, filmmakers, and production teams receive fair compensation." />
            <Section title="User Responsibility" text="By using PAID IPTV BD, users acknowledge their responsibility to comply with local regulations. We encourage you to research the legality of accessing various types of content in your jurisdiction." />
            <Section title="Feedback and Improvement" text="We are committed to enhancing your experience. Your feedback is valuable to us, so please reach out with any suggestions or comments on how we can serve you better." />
            <Section title="Educating Users" text="We take pride in informing our users about the importance of fair use and copyright guidelines, promoting a respectful approach to intellectual property that supports a sustainable creative industry." />
          </div>

          <p className="text-center text-foreground font-semibold pt-2">
            Thank you for choosing PAID IPTV BD! Enjoy High-Quality Entertainment. Happy Viewing!
          </p>

          <p className="text-xs text-center text-muted-foreground/70 pt-1">
            <span className="font-semibold">Disclaimer Notices:</span> PAID IPTV BD is not responsible for any direct or indirect actions taken by users concerning the content accessed through external links.
          </p>
        </div>

        {/* Auto-close indicator */}
        <div className="mt-6 flex justify-center">
          <div className="h-1 w-full max-w-xs rounded-full bg-secondary overflow-hidden">
            <div className="h-full bg-primary rounded-full animate-shrink" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, text }: { title: string; text: string }) => (
  <div>
    <span className="text-accent font-semibold">{title}:</span>{" "}
    <span>{text}</span>
  </div>
);

export default DisclaimerPopup;
