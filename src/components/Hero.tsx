import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div id="hero" className="relative bg-[#FCD40B] w-full py-8 sm:py-12 md:py-24 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-16">
        <div className="flex-1 space-y-4 md:space-y-6 z-10 max-w-2xl text-center md:text-left px-4 sm:px-6 md:px-0">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tighter text-black">
            AI 产品经理
            <span className="block text-black mt-1 sm:mt-2">塑造未来体验</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-gray-800 font-medium mx-auto md:mx-0 px-4 sm:px-0">
            我专注于创建以用户为中心的AI产品，通过数据驱动决策和设计思维创造卓越用户体验
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start px-4 sm:px-0">
            <Button size="lg" className="w-full sm:w-auto text-sm sm:text-base py-2 sm:py-3">查看我的作品</Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base py-2 sm:py-3">联系我</Button>
          </div>
        </div>
        <div className="flex-1 relative min-h-[200px] sm:min-h-[300px] md:min-h-[400px] w-full max-w-[300px] sm:max-w-md mx-auto md:mx-0 neobrutalism-shadow bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full p-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            <path d="M3 3l18 18"/>
            <path d="M3 21L21 3"/>
            <rect x="4" y="4" width="16" height="16" rx="2"/>
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 8v8"/>
            <path d="M8 12h8"/>
          </svg>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-[5%] w-8 sm:w-12 h-8 sm:h-12 bg-white neobrutalism-shadow rotate-12 hidden sm:block"></div>
      <div className="absolute bottom-16 left-[10%] w-6 sm:w-8 h-6 sm:h-8 bg-white neobrutalism-shadow -rotate-12 hidden sm:block"></div>
      <div className="absolute top-1/2 left-[20%] w-4 sm:w-6 h-4 sm:h-6 bg-white neobrutalism-shadow rotate-45 hidden sm:block"></div>
    </div>
  );
} 