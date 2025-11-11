import { BrainCircuit, Briefcase, LineChart, ScrollText } from "lucide-react";
import { features } from "./features.js";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-12">Core Features</h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-gray-800 hover:bg-gray-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


export const features = [
  {
    icon: <BrainCircuit className="w-10 h-10 mb-4 text-primary" />,
    title: "AI-Powered Career Guidance",
    description:
      "Get personalized career advice and insights powered by advanced AI technology.",
  },
  {
    icon: <Briefcase className="w-10 h-10 mb-4 text-primary" />,
    title: "Interview Preparation",
    description:
      "Practice with role-specific questions and get instant feedback to improve your performance.",
  },
  {
    icon: <LineChart className="w-10 h-10 mb-4 text-primary" />,
    title: "Industry Insights",
    description:
      "Stay ahead with real-time industry trends, salary data, and market analysis.",
  },
  {
    icon: <ScrollText className="w-10 h-10 mb-4 text-primary" />,
    title: "Smart Resume Creation",
    description: "Generate ATS-optimized resumes with AI assistance.",
  },
];
export default FeaturesSection;
