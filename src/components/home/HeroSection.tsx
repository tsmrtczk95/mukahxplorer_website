import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Box } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/bridge-mukah.png";
import logo from "@/assets/mukah-logo.png";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg2})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo */}
          <div className="flex justify-center animate-float">
            <img
              src={logo}
              alt="Mukah Xplorer Logo"
              className="h-32 md:h-40 lg:h-48 w-auto drop-shadow-2xl"
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground animate-fade-in">
            Explore <span className="text-gradient-gold">Mukah</span> in
            <br />
            Immersive XR
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Experience the rich culture and stunning landscapes of Mukah through 
            360° virtual reality tours and interactive 3D augmented reality content.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/vr">
                <Play className="h-5 w-5" />
                Explore VR Tours
              </Link>
            </Button>
            <Button variant="gold" size="xl" asChild>
              <Link to="/3d">
                <Box className="h-5 w-5" />
                View 3D Models
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
