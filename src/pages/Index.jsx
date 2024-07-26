import { Button } from "@/components/ui/button";
import { Rocket, Star, Globe, Satellite } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[url('/stars-bg.jpg')] bg-cover bg-center text-white">
      <div className="bg-black bg-opacity-50 min-h-screen">
        <header className="container mx-auto py-12 text-center">
          <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Explore the Cosmos
          </h1>
          <p className="text-2xl mb-8 text-blue-200">Embark on a journey through the wonders of space</p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
            Start Your Adventure
          </Button>
        </header>

        <main className="container mx-auto py-16">
          <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Rocket className="h-16 w-16 mb-4 text-blue-400" />, title: "Space Exploration" },
              { icon: <Star className="h-16 w-16 mb-4 text-yellow-400" />, title: "Stellar Phenomena" },
              { icon: <Globe className="h-16 w-16 mb-4 text-green-400" />, title: "Exoplanets" },
              { icon: <Satellite className="h-16 w-16 mb-4 text-purple-400" />, title: "Space Technology" },
            ].map((item, index) => (
              <div key={index} className="bg-gray-900 bg-opacity-50 p-8 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                {item.icon}
                <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                <p className="text-blue-200">Discover the latest in {item.title.toLowerCase()} and how it's shaping our understanding of the universe.</p>
              </div>
            ))}
          </section>

          <section className="mt-24 text-center bg-gray-900 bg-opacity-50 p-12 rounded-lg">
            <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Our Mission</h2>
            <p className="max-w-3xl mx-auto text-xl text-blue-200">
              We are dedicated to bringing the wonders of space to everyone. Through cutting-edge research, 
              innovative technology, and inspiring education, we aim to push the boundaries of human knowledge 
              and exploration beyond Earth.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
