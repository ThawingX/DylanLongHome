"use client";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-black text-white py-8 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold">AI 产品经理</p>
            <p className="text-sm text-gray-300">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          <div className="flex gap-6">
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
              className="text-gray-300 hover:text-[#FCD40B] transition-colors font-medium"
            >
              首页
            </a>
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              className="text-gray-300 hover:text-[#FCD40B] transition-colors font-medium"
            >
              关于
            </a>
            <a 
              href="#projects" 
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              className="text-gray-300 hover:text-[#FCD40B] transition-colors font-medium"
            >
              项目
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="text-gray-300 hover:text-[#FCD40B] transition-colors font-medium"
            >
              联系
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 