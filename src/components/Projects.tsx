import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  image: "snapsnap" | "tonetone" | "voice";
  tags: string[];
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "SnapSnap",
      description: "开发智能图像处理平台，通过AI技术提供专业级照片编辑和优化功能，提升用户创作效率",
      image: "snapsnap",
      tags: ["AI图像处理", "产品设计", "用户体验"]
    },
    {
      title: "ToneTone",
      description: "打造智能音频处理工具，支持音乐创作、音频增强和降噪等功能，为创作者提供专业音频解决方案",
      image: "tonetone",
      tags: ["音频处理", "AI算法", "产品策略"]
    },
    {
      title: "语音助手应用",
      description: "从概念到发布管理了一个创新的语音助手应用，优化了多场景语音交互体验",
      image: "voice",
      tags: ["语音识别", "对话设计", "产品开发"]
    }
  ];

  const renderIcon = (type: Project['image']) => {
    switch (type) {
      case 'snapsnap':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="3"/>
            <path d="M18 8h0"/>
            <path d="M8 6h.01"/>
            <path d="M16 6h.01"/>
            <path d="M6 8h.01"/>
            <path d="M6 16h.01"/>
            <path d="M18 16h.01"/>
            <path d="M8 18h.01"/>
            <path d="M16 18h.01"/>
          </svg>
        );
      case 'tonetone':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2v20"/>
            <path d="M6 6h.01"/>
            <path d="M18 18h.01"/>
            <path d="M18 6h.01"/>
            <path d="M6 18h.01"/>
            <path d="M2 12h20"/>
            <circle cx="12" cy="12" r="4"/>
            <path d="M8 8l8 8"/>
            <path d="M16 8l-8 8"/>
          </svg>
        );
      case 'voice':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            <line x1="12" y1="19" x2="12" y2="22"/>
            <line x1="8" y1="22" x2="16" y2="22"/>
          </svg>
        );
    }
  };

  return (
    <section id="projects" className="py-8 sm:py-12 md:py-16 px-4 md:px-6 bg-[#f8f8f8]">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">项目经验</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 px-4 sm:px-0">
            我参与设计和开发的一些AI产品项目展示
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="neobrutalism-shadow bg-white overflow-hidden transition-all hover:-translate-y-1 sm:hover:-translate-y-2">
              <div className="relative h-36 sm:h-40 md:h-48 w-full bg-gray-50">
                {renderIcon(project.image)}
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 text-gray-700 font-medium">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 bg-[#FCD40B] text-gray-900 text-xs sm:text-sm font-bold border-2 border-black">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-full font-bold text-xs sm:text-sm md:text-base py-1.5 sm:py-2">查看详情</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 