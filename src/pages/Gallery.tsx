import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Images, X } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import vrPreview from "@/assets/vr-preview.jpg";
import arPreview from "@/assets/ar-preview.jpg";

const categories = ["All", "Landscapes", "Culture", "Architecture", "Heritage"];

const galleryImages = [
  { id: 1, src: heroBg, title: "Mukah River Sunset", category: "Landscapes" },
  { id: 2, src: vrPreview, title: "Traditional Village", category: "Architecture" },
  { id: 3, src: arPreview, title: "Cultural Artifact", category: "Heritage" },
  { id: 4, src: heroBg, title: "Rainforest Vista", category: "Landscapes" },
  { id: 5, src: vrPreview, title: "Longhouse Interior", category: "Architecture" },
  { id: 6, src: arPreview, title: "Traditional Carving", category: "Culture" },
  { id: 7, src: heroBg, title: "Waterfront View", category: "Landscapes" },
  { id: 8, src: vrPreview, title: "Village Life", category: "Culture" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6">
              <Images className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Photo <span className="text-gradient-gold">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse our collection of stunning photographs showcasing 
              the beauty and culture of Mukah.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-foreground font-semibold">{image.title}</p>
                    <p className="text-muted-foreground text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-card border-border p-0 overflow-hidden">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-card to-transparent">
                <h3 className="text-lg font-semibold text-foreground">{selectedImage.title}</h3>
                <p className="text-muted-foreground text-sm">{selectedImage.category}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Gallery;
