import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Smartphone, Globe, ArrowRight } from "lucide-react";
import vrPreview from "@/assets/vr-preview.jpg";
import arPreview from "@/assets/ar-preview.jpg";
import vrCover from "@/assets/museumSapanPuloh.jpeg";
import arCover from "@/assets/modelWireframe.jpg";

const features = [
  {
    icon: Eye,
    title: "360° VR Tours",
    description: "Immerse yourself in panoramic virtual reality tours of Mukah's most iconic locations, cultural sites, and natural wonders.",
    image: vrCover,
    link: "/vr",
    linkText: "Explore VR",
  },
  {
    icon: Smartphone,
    title: "3D AR Models",
    description: "Bring Mukah's cultural heritage to life with interactive 3D augmented reality models you can view anywhere.",
    image: arCover,
    link: "/3d",
    linkText: "View 3D",
  },
];

const highlights = [
  {
    icon: Globe,
    title: "Cultural Heritage",
    description: "Discover the rich traditions and heritage of Mukah's indigenous communities.",
  },
  {
    icon: Eye,
    title: "Stunning Views",
    description: "Experience breathtaking panoramic views of landscapes and architecture.",
  },
  {
    icon: Smartphone,
    title: "Any Device",
    description: "Access our XR content from any device - VR headsets, phones, or desktop.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Experience <span className="text-gradient-gold">Mukah</span> Like Never Before
          </h2>
          <p className="text-muted-foreground">
            Our cutting-edge XR technology brings Mukah's beauty and culture directly to you, 
            creating unforgettable immersive experiences.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <Button variant="gold" asChild>
                  <Link to={feature.link}>
                    {feature.linkText}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                <highlight.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h4>
              <p className="text-muted-foreground text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
