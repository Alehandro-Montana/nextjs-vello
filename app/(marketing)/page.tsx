import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";


import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2"
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
});

const MarketingPage = () => {
  return (
    <div
     
    >
      <div className="flex flex-col items-end max-w-3xl">
        <h1 className="text-3xl md:text-6xl text-neutral-800 mb-5 text-center mr-20">
        Прискорюйте прогрес вашої команди
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 p-2 rounded-md pb-4 w-fit mr-60">
          разом з Vello
        </div>
        <div className="text-sm md:text-xl text-neutral-700 mt-4 max-w-xs md:max-w-2xl text-center" style={{ marginRight: "100px" }}>
        Співпрацюйте, керуйте проектами та досягайте нових вершин продуктивності.
        </div>
        <Button className="mt-6" size="lg"  style={{ marginRight: "370px" }}>
          <Link href="/sign-up">
            Get Vello
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MarketingPage;
