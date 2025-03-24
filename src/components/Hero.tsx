import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div id="hero" className="relative bg-[#FCD40B] w-full py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        <div className="flex-1 space-y-4 md:space-y-6 z-10 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter text-center md:text-left">
            AI 产品经理
            <span className="block text-black">塑造未来体验</span>
          </h1>
          <p className="text-lg md:text-xl max-w-[600px] text-black font-medium text-center md:text-left">
            我专注于创建以用户为中心的AI产品，通过数据驱动决策和设计思维创造卓越用户体验
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg">查看我的作品</Button>
            <Button variant="outline" size="lg">联系我</Button>
          </div>
        </div>
        <div className="flex-1 relative min-h-[300px] md:min-h-[400px] w-full max-w-md mx-auto md:mx-0 neobrutalism-shadow">
          <Image
            src="https://placehold.co/600x800/FCD40B/000000?text=AI+产品经理"
            alt="Profile"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-[5%] w-16 h-16 bg-white neobrutalism-shadow rotate-12 hidden md:block"></div>
      <div className="absolute bottom-16 left-[10%] w-10 h-10 bg-white neobrutalism-shadow -rotate-12 hidden md:block"></div>
      <div className="absolute top-1/2 left-[20%] w-8 h-8 bg-white neobrutalism-shadow rotate-45 hidden md:block"></div>
    </div>
  );
} 