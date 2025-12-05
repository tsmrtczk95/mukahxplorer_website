import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Box, RotateCcw, Maximize } from "lucide-react";
import imgTerendak from "@/assets/3d-img-terendak.jpg";
import imgTibau from "@/assets/3d-img-tibau.png";
import imgSagow from "@/assets/3d-img-sagoworm.png";
import imgJerunei from "@/assets/3d-img-jerunei.png";
import imgCostume from "@/assets/3d_img_costume.png";
import imgKakan from "@/assets/3d-img-kakan.png";

const models = [
  {
    id: 1,
    title: "Terendak",
    description: "A beautifully crafted Melanau traditional headwear worn during cultural ceremonies.",
    category: "Handicraft",
    image: imgTerendak,
    link: "https://tsmrtczk95.github.io/mukahxr_terendak/",
  },
  {
    id: 2,
    title: "Tibau",
    description: "Traditional giant swing made for testing courage and endurance among Melanau people.",
    category: "Heritage Sport",
    image: imgTibau,
    link: "https://tsmrtczk95.github.io/mukahxr_tibau_anim/",
  },
  {
    id: 3,
    title: "Sago Worm",
    description: "A traditional delicacy for the Melanau people, locally known as 'ulat mulong'.",
    category: "Food",
    image: imgSagow,
    link: "https://tsmrtczk95.github.io/mukahxr_sagoworms/",
  },
  {
    id: 4,
    title: "Jerunei",
    description: "A historic wooden totem pole erected as a burial marker for Melanau nobility.",
    category: "Cultural Artifact",
    image: imgJerunei,
    link: "https://tsmrtczk95.github.io/mukahxr_jeruneisgmisan/",
  },
  {
    id: 5,
    title: "Melanau Traditional Attire",
    description: "The Melanau traditional costume often worn during festival and ceremonies.",
    category: "Fashion",
    image: imgCostume,
    link: "https://tsmrtczk95.github.io/mukahxr_melanaudress/index.html",
  },
  {
    id: 6,
    title: "Serahang Kakan",
    description: "The celebration of Serahang Kakan ceremony indicates the beginning of Pesta Kaul.",
    category: "Heritage",
    image: imgKakan,
    link: "https://sketchfab.com/models/b1be0734483446148db8f6ff1263edd5/embed?autostart=1",
  },
  {
    id: 7,
    title: "Tibau",
    description: "Traditional giant swing made for testing courage and endurance among Melanau people.",
    category: "Heritage Sport",
    image: imgTibau,
    link: "https://sketchfab.com/models/b0429baaa9674fba84e954ba4fa32c31/embed?autostart=1",
  },
];

const ThreeDContent = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6">
              <Box className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              3D <span className="text-gradient-gold">AR Models</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore Mukah's cultural heritage through interactive 3D models. 
              View in augmented reality or examine every detail in 3D.
            </p>
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="py-8 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Box className="h-5 w-5 text-primary" />
              <span className="text-sm">View in 3D on any device</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <RotateCcw className="h-5 w-5 text-primary" />
              <span className="text-sm">Rotate to explore</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Maximize className="h-5 w-5 text-primary" />
              <span className="text-sm">Zoom for details</span>
            </div>
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model) => (
              <Card
                key={model.id}
                className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden bg-secondary">
                  <img
                    src={model.image}
                    alt={model.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  
                  {/* 3D Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                      3D
                    </span>
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm rounded-full text-muted-foreground border border-border">
                      {model.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {model.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{model.description}</p>
                  <a 
                    href={model.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="gold" size="sm" className="w-full">
                      <Box className="h-4 w-4" />
                      View 3D
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ThreeDContent;
