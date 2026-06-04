import { useState } from "react";

export function LogoMark({ size = 200, className = "" }) {
  const [imageError, setImageError] = useState(false);
  const logoSrc = "/images/logo.png";

  return imageError ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 6C8 6 14 6 18 10C22 14 24 20 24 26"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M24 6C24 6 18 6 14 10C10 14 8 20 8 26"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
    </svg>
  ) : (
    <img
      src={logoSrc}
      alt="Brand logo"
      width={size}
      height={size}
      className={className}
      onError={() => setImageError(true)}
    />
  );
}

export default function BrandLogo({ name, className = "" }) {
  return (
    <div className={`brand-logo ${className}`.trim()}>
      <span className="brand-logo__icon">
        <LogoMark size={200} />
      </span>
      <span className="brand-logo__name">{name}</span>
    </div>
  );
}
