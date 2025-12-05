import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const values = [
  {
    icon: Heart,
    title: "Cultural Preservation",
    description: "We are dedicated to preserving and promoting the rich cultural heritage of Mukah and its indigenous communities.",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Leveraging cutting-edge XR technology to create immersive experiences that educate and inspire.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Working closely with local communities to ensure authentic representation and sustainable tourism.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the highest quality virtual and augmented reality experiences.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              About <span className="text-gradient-gold">Mukah Xplorer</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Bridging tradition and technology to showcase Mukah's beauty to the world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Our <span className="text-gradient-gold">Mission</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                Mukah Xplorer was founded with a vision to make the stunning beauty and rich 
                cultural heritage of Mukah accessible to everyone, regardless of geographical 
                boundaries.
              </p>
              <p className="text-muted-foreground mb-4">
                Through innovative XR (Extended Reality) technology, we create immersive 
                360° virtual reality tours and interactive 3D augmented reality experiences 
                that bring Mukah's landmarks, traditions, and natural wonders to life.
              </p>
              <p className="text-muted-foreground">
                Our platform serves as a digital gateway to discover the Melanau culture, 
                traditional practices, and the breathtaking landscapes of Sarawak's coastal region.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-gold">
                <img
                  src={heroBg}
                  alt="Mukah landscape"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Our <span className="text-gradient-gold">Values</span>
            </h2>
            <p className="text-muted-foreground">
              The principles that guide our work and commitment to showcasing Mukah.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="bg-background border-border hover:border-primary/50 transition-all">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
