import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-16 px-4 md:px-6 bg-[#FCD40B]">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">联系我</h2>
          <p className="text-lg text-black font-medium">
            对我的工作感兴趣？请填写以下表格或通过以下方式直接联系我
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="neobrutalism-shadow bg-white p-6">
            <h3 className="text-xl font-bold mb-4">发送消息</h3>
            <form className="space-y-4">
              <div>
                <label className="block mb-2 font-medium" htmlFor="name">姓名</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border-2 border-black focus:ring-2 focus:ring-[#FCD40B] outline-none"
                  placeholder="您的姓名"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium" htmlFor="email">邮箱</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border-2 border-black focus:ring-2 focus:ring-[#FCD40B] outline-none"
                  placeholder="您的邮箱地址"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium" htmlFor="message">消息</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 border-2 border-black focus:ring-2 focus:ring-[#FCD40B] outline-none"
                  placeholder="请输入您的消息"
                ></textarea>
              </div>
              <Button className="w-full font-bold">发送消息</Button>
            </form>
          </div>
          
          <div className="neobrutalism-shadow bg-white p-6">
            <h3 className="text-xl font-bold mb-4">联系方式</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="min-w-[24px] mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">邮箱</h4>
                  <p className="font-medium">contact@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-[24px] mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">电话</h4>
                  <p className="font-medium">+86 123 4567 8910</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-[24px] mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">地址</h4>
                  <p className="font-medium">北京市朝阳区某某路88号</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t-2 border-black">
                <h4 className="font-bold mb-3">社交媒体</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 flex items-center justify-center border-2 border-black hover:bg-[#FCD40B] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center border-2 border-black hover:bg-[#FCD40B] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center border-2 border-black hover:bg-[#FCD40B] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 