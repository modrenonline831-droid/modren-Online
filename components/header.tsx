"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          MODREN ONLINE
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/portfolio" className="text-foreground hover:text-primary transition-colors">
            كتالوج  
          </Link>
          <Link href="/pricing" className="text-foreground hover:text-primary transition-colors">
            صمم بنفسك
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
            
          </Link>
          <Button variant="default" asChild>
            <Link href="/contact"> التواصل  </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link
                href="/portfolio"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                كتالوج    
              </Link>
              <Link
                href="/pricing"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                صمم بنفسك
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                
              </Link>
              <Button variant="default" asChild className="w-full">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  تواصل   
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
