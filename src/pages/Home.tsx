import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";

type Props = {
  children: React.ReactNode;
  pic: string;
};

const Home = () => {
  const BackgroundLayout = ({ children, pic }: Props) => {
    return (
      <div className="relative h-[35rem] bg-dark transition-all duration-500">
        <div
          className="absolute inset-0 z-0 transition-opacity duration-700"
          style={{
            backgroundImage: pic,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#161616]/80 to-[#161616]/20 transition-all duration-500" />
        </div>
        <div className="relative z-10">{children}</div>
      </div>
    );
  };

  return (
    <div className="font-default">
      <Navbar />
      {/* Background-section */}
      <BackgroundLayout pic="url('/Alta Marketing Hero Image.jpg')">
        <div className="px-padLR text-white py-20 space-y-12">
          <h1 className="font-extrabold text-[56px]">
            Achievement within reach
          </h1>
          <p className="text-2xl">
            Knewton Alta is accessible and affordable adaptive courseware that
            provides students with the support they need at the moment they need
            it.
          </p>
          <div className="flex items-center gap-4">
            <Button className="font-bold text-base rounded-none px-8 py-8 bg-white text-black">
              Get Evaluation Access
            </Button>
            <Button className="font-bold text-base rounded-none px-8 py-8 bg-transparent border border-white">
              See Knewton Alta in Action
            </Button>
          </div>
        </div>
      </BackgroundLayout>

      {/* section 1 */}
      <div className="bg-secwhite">
        <div className="px-padLR">
          <div className="h-96">
            <img src="/Alta Homepage Video Image.png" alt="" className="w-full h-full object-cover object-center"/>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
