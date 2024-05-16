import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <div
      className="flex items-center justify-end"
      style={{
        backgroundImage: "url('/third.jpg')",
        backgroundSize: "40%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
        
      }}
    >


      
      <main className="pt-40 pb-20 pr-50" >
        
        {children}
      </main>
      <Footer />
    </div>
    </div>
  );
};

export default MarketingLayout;
