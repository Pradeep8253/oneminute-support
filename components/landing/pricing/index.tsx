import { Check } from "lucide-react";

function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 max-w-6xl mx-auto  text-center">
      <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
        Fair , usage based pricing.{" "}
      </h2>
      <p className="text-zinc-500   font-light  mb-16">
        {" "}
        Start free , upgrade as you grow{" "}
      </p>
      <div className="grid grid-cols-1  md:grid-cols-2  gap-6  max-w-4xl mx-auto ">
        <div className="p-8 rounded-3xl  border border-white/5 bg-zinc-900/20  flex  flex-col  items-start text-left  hover:bg-zinc-900/40   transition-colors ">
          <div className="text-sm  font-medium  text-zinc-400 mb-2">
            Starter
          </div>
          <div className="text-4xl  font-medium  text-white  tracking-tight  mb-6">
            $0 <span className="text-zinc-600 text-lg  font-light">/ mo</span>
          </div>
          <ul className="space-y-3  mb-8 text-sm  text-zinc-300  font-light  w-full ">
            <li className="flex  items-center gap-3  ">
              <Check className="w-4 h-4 text-zinc-600" /> 100 conversations/mo
            </li>
            <li className="flex  items-center gap-3  ">
              <Check className="w-4 h-4 text-zinc-600" /> 1 Knowledge Sources
            </li>
            <li className="flex  items-center gap-3  ">
              <Check className="w-4 h-4 text-zinc-600" /> community support
            </li>
          </ul>
          <button className="w-full  py-3 rounded-xl  border  border-white/10    text-white hover:bg-white/5 transition-colors text-sm font-medium  mt-auto cursor-pointer">
            Start Free
          </button>
        </div>
        <div className="relative overflow-hidden p-8 rounded-3xl  border border-white/10 bg-white/3  flex  flex-col  items-start text-left  hover:bg-zinc-900/40   transition-colors ">
          <div className="absolute top-0  right-0 px-4 py-1 bg-white/10 rounded-bl-xl text-[10px]   ">
            Popular{" "}
          </div>
          <div className="text-sm  font-medium  text-indigo-400 mb-2">Pro </div>
          <div className="text-4xl  font-medium  text-white  tracking-tight  mb-6">
            $49<span className="text-zinc-600 text-lg  font-light">/ mo</span>
          </div>
          <ul className="space-y-3  mb-8 text-sm  text-zinc-300  font-light  w-full ">
            <li className="flex  items-center gap-3  ">
              <Check className="w-4 h-4 text-indigo-400" /> Unlimited
              conversations
            </li>
            <li className="flex  items-center gap-3  ">
              <Check className="w-4 h-4 text-indigo-400" /> Unlimited Knowledge
              Sources
            </li>
            <li className="flex  items-center gap-3  ">
              <Check className="w-4 h-4 text-indigo-400" /> community support
            </li>
            <li className="flex  items-center gap-3  ">
              <Check className="w-4 h-4 text-indigo-400" /> custom branding
            </li>
          </ul>
          <button className="w-full  py-3 rounded-xl  border  border-white/10    text-black bg-white hover:bg-zinc-200 transition-colors text-sm font-medium  mt-auto cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
