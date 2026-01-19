"use client"

import { Facebook, Instagram, MessageCircle, Music, Send, PinIcon } from "lucide-react"

const socialLinks = [
  {
    name: "واتساب",
    url: "https://wa.me/201015262864",
    icon: MessageCircle,
    label: "كلمنا على واتساب",
    isActive: true,
  },
  {
    name: "فيسبوك",
    url: "https://www.facebook.com/share/1D8fRBtXbc/",
    icon: Facebook,
    label: "تابعنا على فيسبوك",
    isActive: true,
  },
  {
    name: "إنستاجرام",
    url: "#",
    icon: Instagram,
    label: "تابعنا على إنستاجرام",
    isActive: false,
  },
  {
    name: "تيك توك",
    url: "https://www.tiktok.com/@modren.online?_r=1&_t=ZS-938t0JlsY8z",
    icon: Music,
    label: "شوف فيدهاتنا على تيك توك",
    isActive: true,
  },
  {
    name: "بينتريست",
    url: "#",
    icon: PinIcon,
    label: "شوف أفكارنا على بينتريست",
    isActive: false,
  },
  {
    name: "تيليجرام",
    url: "#",
    icon: Send,
    label: "تواصل معنا على تيليجرام",
    isActive: false,
  },
]

export function SocialLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {socialLinks.map((link) => {
        const Icon = link.icon
        return (
          <div
            key={link.name}
            className={`flex flex-col items-center gap-3 p-6 rounded-lg border transition-all ${
              link.isActive
                ? "bg-secondary/50 border-border hover:bg-secondary cursor-pointer group"
                : "bg-muted/30 border-border/50 opacity-70"
            }`}
          >
            {link.isActive ? (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 w-full"
                aria-label={link.label}
                title={link.label}
              >
                <Icon
                  className={`w-8 h-8 ${link.isActive ? "text-primary group-hover:scale-110" : "text-muted-foreground"} transition-transform`}
                />
                <span className="text-sm font-medium text-foreground text-center">{link.name}</span>
              </a>
            ) : (
              <>
                <Icon className="w-8 h-8 text-muted-foreground" />
                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm font-medium text-foreground text-center">{link.name}</span>
                  <span className="text-xs text-muted-foreground">قريباً</span>
                </div>
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}
