import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Eye, Clock, MapPin } from "lucide-react";
import vrPreview from "@/assets/vr-preview.jpg";
import _Pesta from "@/assets/360/360-pesta.jpeg";
import _Tapak from "@/assets/360/360-tapak.jpeg";
import _Sapan from "@/assets/360/360-sapan.jpeg";
import _Jerunei from "@/assets/360/360-jerunei.jpeg";

const vrTours = [
  {
    id: 1,
    title: "Pesta Kaul Mukah",
    description: "Experience the stunning waterfront area with panoramic views of the South China Sea.",
    duration: "6 min",
    location: "Pantai Kala Dana",
    image: _Pesta,
    link: "https://tsmrtczk95.github.io/360_pestakaulmukah/",
  },
  {
    id: 2,
    title: "Tapak Pesta Kaul",
    description: "Step inside an authentic Melanau longhouse and discover traditional architecture.",
    duration: "8 min",
    location: "Pantai Kala Dana",
    image: _Tapak,
    link: "https://tsmrtczk95.github.io/360_tapakpestakaul/",
  },
  {
    id: 3,
    title: "Jerunei Sungai Teloh",
    description: "Witness the traditional sago processing methods passed down through generations.",
    duration: "15 min",
    location: "Kampung Telian",
    image: _Jerunei,
    link: "https://tsmrtczk95.github.io/360_sungaiteloh/",
  },
  {
    id: 4,
    title: "Sapan Puloh Museum",
    description: "Explore artifacts and exhibits showcasing Melanau heritage and history.",
    duration: "15 min",
    location: "Kampung Telian",
    image: _Sapan,
    link: "https://tsmrtczk95.github.io/360_sapanpuloh/",
  },
];

const VRContent = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6">
              <Eye className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              360° <span className="text-gradient-gold">VR Tours</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Immerse yourself in breathtaking panoramic experiences. Explore Mukah's 
              landmarks and cultural sites in stunning 360-degree virtual reality.
            </p>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {vrTours.map((tour) => (
              <Card
                key={tour.id}
                className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-4 rounded-full bg-primary/90 shadow-gold">
                      <Play className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm rounded-full text-foreground border border-border">
                      360° VR
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {tour.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{tour.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-primary" />
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-primary" />
                      {tour.location}
                    </span>
                  </div>
                  {tour.link ? (
                    <Button variant="gold" className="w-full" asChild>
                      <a href={tour.link} target="_blank" rel="noopener noreferrer">
                        <Play className="h-4 w-4" />
                        Start Tour
                      </a>
                    </Button>
                  ) : (
                    <Button variant="gold" className="w-full">
                      <Play className="h-4 w-4" />
                      Start Tour
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VRContent;
