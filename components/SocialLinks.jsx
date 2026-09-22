import Image from "next/image";

const socials = [
  { href: "https://instagram.com", icon: "/images/icon-instagram.jpg", label: "Instagram" },
  { href: "https://wa.me/5490000000000", icon: "/images/icon-whatsapp.jpg", label: "WhatsApp" },
  { href: "https://tiktok.com", icon: "/images/icon-tiktok.jpg", label: "TikTok" },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-4">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="relative h-9 w-9 overflow-hidden rounded-full transition-transform duration-200 hover:scale-110"
        >
          <Image src={social.icon} alt={social.label} fill className="object-cover" />
        </a>
      ))}
    </div>
  );
}
