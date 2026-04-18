type Props = { className?: string };

// Exact brand SVG — do not modify.
export const Logo = ({ className }: Props) => (
  <svg
    className={className}
    width="400"
    height="200"
    viewBox="0 0 400 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Srivatsala Silver House"
  >
    <rect width="400" height="200" fill="#001F3F" />
    <path
      d="M70 110C60 110 50 100 50 85C50 70 65 60 80 60C95 60 110 75 110 90C110 105 90 120 75 125C60 130 40 125 40 105C40 85 60 70 85 55C110 40 140 35 170 35C185 35 200 38 215 45"
      stroke="#B76E79"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="218" cy="46" r="3" fill="#B76E79" />
    <circle cx="68" cy="110" r="3" fill="#B76E79" />
    <text x="115" y="105" fill="#B76E79" fontFamily="Playfair Display, serif" fontSize="36" letterSpacing="2">
      RIVATSALA
    </text>
    <text x="250" y="130" textAnchor="middle" fill="#E5E4E2" fontFamily="Montserrat, sans-serif" fontSize="14" letterSpacing="6" fontWeight="300">
      SILVER HOUSE
    </text>
    <text x="250" y="150" textAnchor="middle" fill="#B76E79" fontFamily="Montserrat, sans-serif" fontSize="9" letterSpacing="3" fontWeight="400">
      GOLD &amp; SILVER JEWELLERY
    </text>
  </svg>
);
