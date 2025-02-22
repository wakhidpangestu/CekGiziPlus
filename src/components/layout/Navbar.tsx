import { Home, Calculator, MessageCircle, School } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Calculator, label: "Calculator Gizi", path: "/calculator" },
    { icon: MessageCircle, label: "ChatAI", path: "/chat" },
    { icon: School, label: "Program MBG", path: "/school" },
  ];

  return (
    <>
      {/* Mobile Top Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white/70 backdrop-blur-md border-b border-white/20 z-50 shadow-sm">
        <div className="flex items-center justify-center h-full">
          <span
            className="text-xl font-bold text-[#2196F3] drop-shadow-md"
            style={{
              textShadow: "0 2px 4px rgba(33, 150, 243, 0.2)",
            }}
          >
            CekGizi+
          </span>
        </div>
      </div>
      {/* Mobile Top Spacer */}
      <div className="md:hidden h-16" />
      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm z-50">
        <div className="max-w-7xl mx-auto w-full px-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-[#2196F3]">
            CekGizi+
          </Link>
          <div className="flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${location.pathname === item.path ? "text-[#2196F3]" : "text-gray-600 hover:text-[#2196F3]"}`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-t border-white/20 z-50">
        <div className="grid grid-cols-4 h-full">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center gap-1 ${location.pathname === item.path ? "text-[#2196F3]" : "text-gray-600"}`}
            >
              <item.icon size={24} />
              <span className="text-xs">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
      {/* Spacer for desktop navbar only */}
      <div className="hidden md:block h-16" /> {/* Desktop top spacer */}
    </>
  );
};

export default Navbar;
