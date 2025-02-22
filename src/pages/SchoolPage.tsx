import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { School, BookOpen, PieChart } from "lucide-react";

const SchoolPage = () => {
  const schools = [
    {
      name: "SMP Negeri 1 Jakarta",
      location: "Jakarta Pusat",
      students: 450,
      participationRate: 92,
      image:
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop",
    },
    {
      name: "SMP Negeri 2 Surabaya",
      location: "Surabaya",
      students: 380,
      participationRate: 88,
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2032&auto=format&fit=crop",
    },
    {
      name: "SMP Negeri 3 Bandung",
      location: "Bandung",
      students: 420,
      participationRate: 90,
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop",
    },
  ];

  const stats = [
    { label: "Total Schools", value: "1,234" },
    { label: "Active Students", value: "45,678" },
    { label: "Cities Covered", value: "32" },
    { label: "Success Rate", value: "94%" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center transform hover:scale-105 transition-all duration-300"
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 8px 32px rgba(31, 38, 135, 0.1)",
              }}
            >
              <h3 className="text-4xl font-bold text-[#2196F3]">
                {stat.value}
              </h3>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="schools" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="schools" className="flex items-center gap-2">
              <School className="h-4 w-4" />
              Schools
            </TabsTrigger>
            <TabsTrigger value="blog" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Blog
            </TabsTrigger>
            <TabsTrigger value="stats" className="flex items-center gap-2">
              <PieChart className="h-4 w-4" />
              Statistics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="schools">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {schools.map((school, index) => (
                <Card
                  key={index}
                  className="overflow-hidden transform hover:scale-105 transition-all duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 8px 32px rgba(31, 38, 135, 0.1)",
                  }}
                >
                  <img
                    src={school.image}
                    alt={school.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {school.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{school.location}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Students</p>
                        <p className="text-lg font-semibold text-[#2196F3]">
                          {school.students}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Participation</p>
                        <p className="text-lg font-semibold text-[#2196F3]">
                          {school.participationRate}%
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="blog">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Impact of MBG Program",
                  excerpt:
                    "How our nutrition program is changing lives in schools across Indonesia.",
                  date: "Mar 21, 2024",
                  image:
                    "https://images.unsplash.com/photo-1594394874672-20725a59a75b?q=80&w=2070&auto=format&fit=crop",
                },
                {
                  title: "Success Stories",
                  excerpt:
                    "Read about the transformative effects of proper nutrition on student performance.",
                  date: "Mar 20, 2024",
                  image:
                    "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop",
                },
                {
                  title: "Future of MBG",
                  excerpt:
                    "Our plans to expand the program and reach more schools in Indonesia.",
                  date: "Mar 19, 2024",
                  image:
                    "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?q=80&w=2070&auto=format&fit=crop",
                },
              ].map((post, index) => (
                <Card
                  key={index}
                  className="overflow-hidden transform hover:scale-105 transition-all duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 8px 32px rgba(31, 38, 135, 0.1)",
                  }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <p className="text-sm text-[#2196F3] mb-2">{post.date}</p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600">{post.excerpt}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="stats">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                className="p-6"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 8px 32px rgba(31, 38, 135, 0.1)",
                }}
              >
                <h3 className="text-xl font-semibold mb-4">Program Growth</h3>
                <div className="h-[300px] flex items-center justify-center text-gray-500">
                  [Chart Component Here]
                </div>
              </Card>

              <Card
                className="p-6"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 8px 32px rgba(31, 38, 135, 0.1)",
                }}
              >
                <h3 className="text-xl font-semibold mb-4">Impact Metrics</h3>
                <div className="h-[300px] flex items-center justify-center text-gray-500">
                  [Chart Component Here]
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SchoolPage;
