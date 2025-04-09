import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      {/* Top navigation bar */}
      <Header />

      {/* Main container */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        {/* Page layout: sidebars + main content */}
        <main className="flex flex-col md:flex-row">
          {/* Left sidebar: navigation or filters */}
          <LeftSidebar />

          {/* Central main content: questions, answers, etc. */}
          <MainContent />

          {/* Right sidebar: user info, bulletin board, etc. */}
          <RightSidebar />
        </main>
      </div>

      {/* Footer: general info, links, and contact */}
      <Footer />
    </div>
  );
}
