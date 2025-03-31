import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import { Play } from "lucide-react";
import Footer from "@/components/Footer";

type Props = {
  children: React.ReactNode;
  pic: string;
};

const Home = () => {
  const BackgroundLayout = ({ children, pic }: Props) => {
    return (
      <div className="relative h-[35rem] mdd:h-max ssm:h-[20rem] bg-dark transition-all duration-500">
        <div
          className="absolute inset-0 z-0 transition-opacity duration-700"
          style={{
            backgroundImage: pic,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#161616]/80 ssm:from-[#161616]/20 to-[#161616]/20 transition-all duration-500" />
        </div>
        <div className="relative z-10">{children}</div>
      </div>
    );
  };

  const info = [
    {
      title: "Affordability",
      desc: "We're lowering costs while raising expectations with flexible pricing. Courses are available for just $44.95 per semester, or $10.95 per month.",
    },
    {
      title: "Instructor Control",
      desc: "All the content that students see supports learning objectives the instructor chooses for the course.",
    },
    {
      title: "Integrated Learning Opportunities",
      desc: "Students receive answer feedback, integrated instruction, and dynamic remediation to meet their individual needs and build toward mastery.",
    },
    {
      title: "Adaptive learning technology",
      desc: "Knewton Alta's adaptive technology personalizes learning by continuously diagnosing and adapting to students' proficiency levels with each interaction.",
    },
    {
      title: "Actionable Instructor Analytics",
      desc: "Instructor dashboards deliver data that's actionable, easy-to-review, and easy-to-navigate.",
    },
    {
      title: "Accessible to all",
      desc: "Knewton Alta’s technology, content, and user experience are all WCAG 2.0 AA-level ADA compliant, giving all learners the same chance to succeed.",
    },
  ];

  const reasons = [
    {
      title: "Detailed Answer Explanations",
      description:
        "Knewton Alta provides immediate and detailed feedback tailored to each specific question, regardless of answer correctness, to reinforce key concepts and fill knowledge gaps.",
    },
    {
      title: "Integrated Instructions",
      description:
        "All Knewton Alta's content — including instructional text and videos, examples, and assessment — is organized by learning objective, integrated within the adaptive experience, and served up at the precise moment a student needs it.",
    },
    {
      title: "Dynamic Remediation",
      description:
        "Knewton Alta adapts to students’ proficiency levels with each interaction. If a student struggles on an assignment, Alta recognizes their knowledge gap immediately and provides just-in-time remediation — even when it requires reaching back to prerequisite concepts.",
    },
  ];

  const articleSection = [
    {
      img: "/Alta Adaptive Learning Image.png",
      description:
        "Large groups of students might need individual attention the instructor cannot provide on their own. Adaptive learning courseware can deliver personalized learning activities. But how does adaptive learning work?",
    },
    {
      img: "/Alta Knerd Stories.jpg",
      description:
        "Large groups of students might need individual attention the instructor cannot provide on their own. Adaptive learning courseware can deliver personalized learning activities. But how does adaptive learning work?Interested in hearing from peers? See how Alta has impacted the classroom as some of our instructors share their experiences in our Knerd stories. Knerd Story – Wheeler Conover, SE Kentucky Community College “I have students who say that it’s different than what they’ve done before. And they appreciate the fact that they can learn the material instead of being punished for not learning it. It encourages you to be wrong. It doesn’t penalize you for the wrong answer.",
    },
    {
      img: "/Alta 8 Ways Blog Size.jpg",
      description:
        "8 ways to set up your students for a successful year with Knewton Alta. Make sure you’re ready for whatever this semester throws your way. Learn how to use Knewton Alta to overcome common challenges and empower you to do what you do best – teach!",
    },
  ];

  return (
    <div className="font-default">
      <Navbar />
      {/* Background-section */}
      <BackgroundLayout pic="url('/Alta Marketing Hero Image.jpg')">
        <div className="max-w-screen-2xl mx-auto">
          <div className="px-padLR text-white py-20 space-y-12">
            <h1 className="font-extrabold text-[56px] mdd:text-[48px] ssm:hidden">
              Achievement within reach
            </h1>
            <p className="text-2xl mdd:text-lg ssm:hidden">
              Knewton Alta is accessible and affordable adaptive courseware that
              provides students with the support they need at the moment they
              need it.
            </p>
            <div className="flex items-center gap-4 ssm:hidden">
              <Button className="font-bold text-base rounded-none p-8 bg-white text-black hover:text-white">
                Get Evaluation Access
              </Button>
              <Button className="font-bold text-base rounded-none p-8 bg-transparent border border-white">
                See Knewton Alta in Action
              </Button>
            </div>
          </div>
        </div>
      </BackgroundLayout>

      {/* section 1 */}
      <div className="bg-secwhite">
        <div className="max-w-screen-2xl mx-auto">
          <div className="px-padLR py-20 flex gap-8 mdd:items-start ssm:flex-col ssm:px-7">
            <div className="max-h-[26rem] w-1/2 ssm:w-full">
              <img
                src="/Alta Homepage Video Image.png"
                alt=""
                className="w-full h-full object-cover object-center mdd:object-contain"
              />
            </div>
            <div className="space-y-12 w-1/2 h-max mdd:space-y-6 ssm:w-full">
              <h1 className="font-bold text-title mdd:text-[28px]">
                Personalized learning that's impactful, accessible, and
                affordable
              </h1>
              <p className="text-base font-normal ssm:leading-8">
                The Alta learning experience goes beyond homework – it pairs
                practice with personalized learning that offers detailed answer
                explanations, integrated just-in-time instruction, and
                remediation of prerequisite skill gaps, all based on student
                performance.
              </p>
              <Button className="hover:text-white space-x-4 p-7 bg-transparent border border-gray-500 text-black rounded-none">
                <span className="font-bold text-base">Watch Now</span>
                <span className="border border-black p-1 rounded-full">
                  <Play fill="#000" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-screen-2xl mx-auto mt-20">
        <div className="px-padLR">
          <h1 className="text-center font-bold text-2xl">
            Start where you are. We'll take you where you want to go.
          </h1>
          <div className="mt-10">
            <div className="grid grid-cols-3 grid-rows-2 flex-wrap mdd:grid-cols-2 ssm:grid-cols-1">
              {info.map((info, index) => (
                <div
                  className="border h-[14rem] px-6 py-8 space-y-8"
                  key={index}
                >
                  <h1 className="text-center text-[#18b7fb] font-bold text-lg">
                    {info.title}
                  </h1>
                  <p className="text-priText text-base text-center">
                    {info.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="bg-[#133d80] h-full">
        <div className="max-w-screen-2xl mx-auto mt-20">
          <div className="px-padLR py-20 flex gap-8 mdd:items-center ssm:flex-col">
            <div className="space-y-12 text-white ssm:flex ssm:items-center ssm:flex-col ssm:space-y-6">
              <h1 className="text-title font-bold">
                Explore Knewton Alta course offerings
              </h1>
              <p className="text-base">
                Knewton Alta is available for the following course areas, and
                you can completely customize it to fit the way you teach and
                your students learn.
              </p>
              <Button className="font-bold text-base hover:text-white space-x-4 p-7 bg-white text-black rounded-none">
                Browse Courses
              </Button>
            </div>
            <div className="w-full">
              <div className="grid grid-cols-2 cursor-pointer w-full mdd:grid-cols-1">
                {[
                  "Biology",
                  "Chemistry",
                  "Economics",
                  "Physics",
                  "Mathematics",
                  "Psychology",
                  "Statistics",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border border-[#f5f5f5] bg-[#f5f5f5]/10 h-20 flex items-center justify-center text-center text-white hover:bg-[#f5f5f5] hover:text-priText font-bold "
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 4  */}
      <div className="max-w-screen-2xl mx-auto mt-20">
        <div className="px-padLR space-y-12 text-priText ssm:px-7">
          <div className="space-y-6">
            <h1 className="text-center font-bold text-title">
              Adaptive technology. Data-driven insights. Seamless integration.
            </h1>
            <p className="text-base font-normal text-center">
              Knewton Alta continuously monitors students' mastery and adapts in
              real time to maximize their learning outcomes. When students
              struggle, Knewton Alta recognizes knowledge gaps immediately and
              delivers precisely what students need at the moment they need it.
            </p>
          </div>
          <div className="flex justify-between gap-12 ssm:flex-col">
            <div className="h-[40rem] w-1/2 ssm:w-full">
              <img
                src="/Alta Test Dashboard.png"
                alt=""
                className="h-full w-full"
              />
            </div>
            <div className="flex flex-col justify-between w-1/2 gap-2 ssm:w-full">
              <h1 className="font-bold text-2xl">
                Here's what makes Knewton Alta so powerful
              </h1>
              {reasons.map((reason, index) => (
                <div className="space-y-6" key={index}>
                  <h3 className="font-bold text-base">{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* section 5 */}

      <div className="max-w-screen-2xl mx-auto mt-20 bg-[#1B5BA0] p-16 text-white flex flex-col items-center gap-6">
        <h1 className="text-title font-bold text-center">
          Is your instructor using Alta?
        </h1>
        <h3 className="text-title font-bold text-center">Get started today!</h3>
        <Button className="hover:bg-gray-500 hover:border-none font-bold hover:text-white space-x-4 p-7 bg-white border border-black text-black rounded-none w-max">
          Create a FREE Account Today
        </Button>
      </div>

      {/* section 6 */}
      <div className="">
        <div className="max-w-screen-2xl mx-auto py-34 py-12 bg-secwhite">
          <h1 className="text-center text-title font-bold ssm:px-2">
            What are the instructors saying about Alta?
          </h1>
          <div className="flex gap-4 mt-16 items-center justify-center py-10">
            <div className="flex gap-6 lgg:gap-12 ssm:flex-col">
              <div>
                <div className="flex items-center gap-8 lgg:flex-col">
                  <div className="w-80 h-80">
                    <img
                      src="/Mikelong Video Screenshot Alta.jpg"
                      alt=""
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="space-y-4">
                    <h1 className="text-2xl font-bold text-[#5a5a5a]">
                      Mike Long
                    </h1>
                    <Button className="hover:text-white space-x-4 p-7 bg-transparent border border-gray-500 text-black rounded-none">
                      <span className="font-bold text-base">Watch Now</span>
                      <span className="border border-black p-1 rounded-full">
                        <Play fill="#000" />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-8 lgg:flex-col">
                  <div className="w-80 h-80">
                    <img
                      src="/Alta.jpg"
                      alt=""
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="space-y-4">
                    <h1 className="text-2xl font-bold text-[#5a5a5a]">
                      Shawn Shields
                    </h1>
                    <Button className="hover:text-white space-x-4 p-7 bg-transparent border border-gray-500 text-black rounded-none">
                      <span className="font-bold text-base">Watch Now</span>
                      <span className="border border-black p-1 rounded-full">
                        <Play fill="#000" />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 7 */}
      <div className="max-w-screen-2xl mx-auto my-20">
        <h1 className="font-bold text-title text-center">
          Check out the latest news from Wiley Alta community
        </h1>
        <div className="flex items-center justify-center mt-10">
          <div className="px-padLR flex justify-between gap-12 lgg:gap-6 mdd:flex-wrap ssm:px-6">
            {articleSection.map((article, index) => (
              <div
                className="min-h-[50rem] bg-secwhite py-6 flex flex-col gap-12 w-full border border-gray-100 rounded"
                key={index}
              >
                <img
                  src={article.img}
                  alt=""
                  className="h-[16rem] object-cover object-center"
                />
                <div className="px-6 text-priText leading-8">
                  {article.description}
                </div>
                <a className="px-6 underline cursor-pointer" href="/">
                  Read the Article
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
