import { Button } from "@/components/ui/button";
import { Rocket, Star, Planet, Satellite } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 text-white">
      <header className="container mx-auto py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Explore the Cosmos</h1>
        <p className="text-xl mb-8">Embark on a journey through the wonders of space</p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Start Your Adventure
        </Button>
      </header>

      <main className="container mx-auto py-16">
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Rocket className="h-12 w-12 mb-4" />, title: "Space Exploration" },
            { icon: <Star className="h-12 w-12 mb-4" />, title: "Stellar Phenomena" },
            { icon: <Planet className="h-12 w-12 mb-4" />, title: "Exoplanets" },
            { icon: <Satellite className="h-12 w-12 mb-4" />, title: "Space Technology" },
          ].map((item, index) => (
            <div key={index} className="bg-blue-800 p-6 rounded-lg text-center">
              {item.icon}
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p>Discover the latest in {item.title.toLowerCase()} and how it's shaping our understanding of the universe.</p>
            </div>
          ))}
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="max-w-2xl mx-auto text-lg">
            We are dedicated to bringing the wonders of space to everyone. Through cutting-edge research, 
            innovative technology, and inspiring education, we aim to push the boundaries of human knowledge 
            and exploration beyond Earth.
          </p>
        </section>
      </main>

      <footer className="bg-blue-900 py-8 text-center">
        <p>&copy; 2024 Space Exploration Initiative. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
