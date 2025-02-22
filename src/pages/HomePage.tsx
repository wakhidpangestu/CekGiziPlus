import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Healthy Nutrition for Your Kids
              </h1>
              <p className="text-lg leading-8 text-gray-600">
                Help your children develop healthy eating habits with our smart
                nutrition calculator and AI-powered health assistant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg transform hover:-translate-y-1 transition-all duration-200 backdrop-blur-md bg-opacity-80 border border-white/20 rounded-xl"
                  style={{
                    textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                    boxShadow:
                      "0 8px 20px rgba(33, 150, 243, 0.3), inset 0 1px 1px rgba(255,255,255,0.2)",
                  }}
                >
                  <Link
                    to="/calculator"
                    className="relative z-10 flex items-center"
                  >
                    Try Calculator
                    <ArrowRight className="ml-2 h-5 w-5" />
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 pointer-events-none" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="relative overflow-hidden bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-xl transform hover:-translate-y-1 transition-all duration-200"
                  style={{
                    boxShadow:
                      "0 8px 20px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,0.2)",
                  }}
                >
                  <Link
                    to="/chat"
                    className="relative z-10 flex items-center !text-black hover:!text-black"
                  >
                    Chat with AI
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 pointer-events-none" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <img
                src="https://cdn0-production-images-kly.akamaized.net/MEiS5Adre6cpoP6yl8N3IZrLU5w=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4990639/original/087987800_1730716651-08f3d773-2f44-4b1b-928d-197b1458ed41.jpeg"
                alt="Healthy food"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Latest Health Tips
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn about nutrition and healthy lifestyle for your children.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Healthy Snacks for Kids",
                description:
                  "Discover nutritious and delicious snack ideas that your kids will love.",
                image:
                  "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1932&auto=format&fit=crop",
                date: "Mar 16, 2024",
              },
              {
                title: "Building Healthy Eating Habits",
                description:
                  "Tips for parents to help their children develop good eating habits early.",
                image:
                  "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop",
                date: "Mar 15, 2024",
              },
              {
                title: "The Importance of Breakfast",
                description:
                  "Why breakfast is crucial for your child's development and learning.",
                image:
                  "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=2080&auto=format&fit=crop",
                date: "Mar 14, 2024",
              },
            ].map((post, index) => (
              <article
                key={index}
                className="flex flex-col overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 transform"
                style={{
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(12px)",
                  boxShadow:
                    "0 8px 32px rgba(31, 38, 135, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  perspective: "1000px",
                }}
              >
                <div className="flex-shrink-0 relative group">
                  <img
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    src={post.image}
                    alt={post.title}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 relative z-10 backdrop-blur-sm bg-white/50">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#2196F3]">
                      {post.date}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-gray-900">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button variant="link" className="text-[#2196F3] p-0">
                      Read more →
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
