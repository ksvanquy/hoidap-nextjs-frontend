import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      {/* Main*/}
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        {/* Body layout */}
        <main className="flex flex-col md:flex-row">
          {/* Left sidebar */}
          <LeftSidebar />
          {/* Main content */}
          <MainContent />
          {/* Right sidebar giữ nguyên */}
          <RightSidebar />
        </main>
      </div>
      <Footer />
    </div>
  );
}
