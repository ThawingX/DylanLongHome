import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function About() {
  const skills = [
    {
      title: "AI 产品策略",
      description: "开发以用户为中心的AI产品策略，确保产品满足市场需求与用户期望"
    },
    {
      title: "用户研究",
      description: "深入理解用户行为和需求，通过定性与定量研究方法验证产品决策"
    },
    {
      title: "AI 技术理解",
      description: "熟悉机器学习、自然语言处理等AI核心技术，能与技术团队有效沟通"
    },
    {
      title: "产品路线规划",
      description: "制定清晰的产品路线图，平衡短期目标与长期愿景"
    },
    {
      title: "敏捷项目管理",
      description: "在快速迭代环境中领导跨职能团队，确保产品按时高质量交付"
    },
    {
      title: "数据分析",
      description: "利用数据分析工具挖掘洞察，推动数据驱动的产品决策"
    }
  ];

  return (
    <section id="about" className="py-16 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">关于我</h2>
          <p className="text-lg text-gray-700">
            作为一名AI产品经理，我致力于设计以人为本的AI解决方案，平衡技术创新与用户需求，创造出既智能又易用的产品体验。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card key={index} className="hover:-translate-y-2 transition-transform duration-300 hover:bg-[#fffaeb]">
              <CardHeader className="bg-[#FCD40B] border-b-2 border-black">
                <CardTitle className="font-bold text-black">{skill.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-800 font-medium">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 