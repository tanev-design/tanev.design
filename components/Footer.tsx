"use client";

import { HoverSwapText } from "@/components/HoverSwapText";

const socials = [
  ["GH", "https://github.com/stoyantanev"],
  ["IN", "https://www.linkedin.com/in/stoyan-tanev/"]
] as const;

export function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-opener page-shell">
        <div>
          <div className="eyebrow footer-rotate" role="text">
            <div className="footer-rotate__line">
              <span className="footer-rotate__static">READY TO BUILD SOMETHING</span>
              <span className="footer-rotate__word">FAST?</span>
            </div>
          </div>
          <a className="footer-giant footer-talk" href="#contact" data-contact-trigger data-cursor="CONTACT">
            <HoverSwapText>{"LET'S COLLAB"}</HoverSwapText>
          </a>
        </div>
      </div>

      <div className="footer-bottom page-shell">
        <p>&copy;2026 TANEV.DESIGN</p>
        <a className="footer-back-to-top" href="#top" data-cursor="OPEN">BACK TO TOP</a>
        <nav aria-label="Social links">
          {socials.map(([label, href]) => (
            <a href={href} key={label} target="_blank" rel="noreferrer" data-cursor="OPEN">
              {label}
            </a>
          ))}
          <button type="button" data-contact-trigger data-cursor="CONTACT">
            MAIL
          </button>
        </nav>
      </div>
    </footer>
  );
}
