import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "AI 客服平台",
      description: "领导开发了一个AI驱动的客服平台，提高客户满意度并减少50%的响应时间",
      image: "https://placehold.co/600x400/FCD40B/000000?text=AI+客服平台",
      tags: ["AI", "产品管理", "用户体验"]
    },
    {
      title: "智能推荐系统",
      description: "设计并推出了基于用户行为的智能推荐系统，将用户参与度提高了35%",
      image: "https://placehold.co/600x400/FCD40B/000000?text=智能推荐系统",
      tags: ["机器学习", "数据分析", "产品策略"]
    },
    {
      title: "语音助手应用",
      description: "从概念到发布管理了一个创新的语音助手应用，优化了多场景语音交互体验",
      image: "https://placehold.co/600x400/FCD40B/000000?text=语音助手应用",
      tags: ["语音识别", "对话设计", "产品开发"]
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 md:px-6 bg-[#f8f8f8]">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">项目经验</h2>
          <p className="text-lg text-gray-700">
            我参与设计和开发的一些AI产品项目展示
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="neobrutalism-shadow bg-white overflow-hidden transition-all hover:-translate-y-2">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4 text-gray-800 font-medium">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-[#FCD40B] text-black text-sm font-bold border-2 border-black">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-full font-bold">查看详情</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 