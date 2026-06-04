import { Facebook, Instagram, Twitter, Github, Linkedin, Dribbble } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { personal } from "../data/portfolio";

const socials = [
  { icon: Facebook, href: personal.facebook, label: "Facebook" },
  { icon: Instagram, href: personal.instagram, label: "Instagram" },
  // { icon: Twitter, href: "#", label: "Twitter" },
  // { icon: Dribbble, href: "#", label: "Dribbble" },
  { icon: Github, href: personal.github, label: "GitHub" },
  { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
];

const initials = personal.name
  .split(" ")
  .map((n) => n[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

const displayTitle = personal.title.toUpperCase();

export default function ProfileSidebar({ className = "" }) {
  const shortName = personal.name.split(" ").slice(0, 2).join(" ");

  return (
    <aside className={`sidebar-col ${className}`.trim()}>
      {/* <BrandLogo className="profile-brand" /> */}

      <div className="profile-card">
        <div className="profile-avatar-wrap">
          {personal.photo ? (
            <img
              src={personal.photo}
              alt={personal.name}
              className="profile-avatar"
            />
          ) : (
            <div className="profile-avatar-fallback" aria-hidden="true">
              {initials}
            </div>
          )}
        </div>

        <div className="profile-card-inner">
          <h2 className="profile-name">{personal.name}</h2>
          <p className="profile-title">{displayTitle}</p>

          <div className="social-row">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="social-btn"
                aria-label={label}
              >
                <Icon size={15} strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="contact-card">
        <div className="contact-row">
          <p className="contact-label">Phone</p>
          <p className="contact-value">{personal.phone}</p>
        </div>
        <div className="contact-row">
          <p className="contact-label">Email</p>
          <p className="contact-value">{personal.email}</p>
        </div>
        <div className="contact-row">
          <p className="contact-label">Location</p>
          <p className="contact-value">{personal.location}</p>
        </div>
      </div>
    </aside>
  );
}
