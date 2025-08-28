import Image from "next/image";

const CompanyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#111827] to-[#7fa5f0] text-white py-15">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">
            JJ Design
          </h1>
          <p className="text-xl opacity-90">
            창의적인 디자인으로 미래를 만들어갑니다
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Company Overview with Image */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-100 min-h-[400px]">
            <div className="flex items-center mb-8">
              <div className="w-4 h-4 bg-[#111827] rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-800">회사 개요</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/image/mock/company-building.png"
                  alt="회사 건물"
                  width={500}
                  height={300}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <p
                  className="text-lg text-gray-600 leading-relaxed mb-6"
                  style={{ whiteSpace: "break-spaces" }}
                >
                  {`저희 JJ Design은 창의적인 디자인과 혁신적인 솔루션을 제공하는\n 디자인 전문 기업입니다.\n\n 고객의 성공을 최우선으로 생각하며, 다양한 프로젝트 경험을 바탕으로 \n 최고의 결과를 만들어냅니다.`}
                </p>
                <div className="space-y-3 pt-3">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#E5E7EB] rounded-full mr-3"></span>
                    <span className="text-gray-700">설립년도: 2020년</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#E5E7EB] rounded-full mr-3"></span>
                    <span className="text-gray-700">직원수: 50명</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#E5E7EB] rounded-full mr-3"></span>
                    <span className="text-gray-700">
                      프로젝트 수행: 200+ 건
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl shadow-lg p-12 border border-gray-100 min-h-[350px]">
            <div className="flex items-center mb-8">
              <div className="w-4 h-4 bg-[#111827] rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-800">비전과 미션</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md transform hover:scale-105 transition-transform min-h-[180px]">
                <div className="w-12 h-12 bg-[#E5E7EB] rounded-full flex items-center justify-center mb-4">
                  <span className="text-gray-600 text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">고객 중심</h3>
                <p className="text-gray-600 text-sm">
                  맞춤형 디자인 서비스 제공
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md transform hover:scale-105 transition-transform min-h-[180px]">
                <div className="w-12 h-12 bg-[#E5E7EB] rounded-full flex items-center justify-center mb-4">
                  <span className="text-gray-600 text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">혁신 추구</h3>
                <p className="text-gray-600 text-sm">지속 가능한 성장과 혁신</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md transform hover:scale-105 transition-transform min-h-[180px]">
                <div className="w-12 h-12 bg-[#E5E7EB] rounded-full flex items-center justify-center mb-4">
                  <span className="text-gray-600 text-2xl">🤝</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">윤리 경영</h3>
                <p className="text-gray-600 text-sm">사회적 책임과 윤리 실천</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-100 min-h-[300px]">
            <div className="flex items-center mb-8">
              <div className="w-4 h-4 bg-[#111827] rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-800">연락처</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center p-6 bg-gray-50 rounded-xl min-h-[120px]">
                <div className="w-10 h-10 bg-[#E5E7EB] rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-600 text-lg">📍</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">주소</p>
                  <p className="text-gray-600 text-sm">
                    서울특별시 강남구 테헤란로 123
                  </p>
                </div>
              </div>
              <div className="flex items-center p-6 bg-gray-50 rounded-xl min-h-[120px]">
                <div className="w-10 h-10 bg-[#E5E7EB] rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-600 text-lg">📞</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">전화</p>
                  <p className="text-gray-600 text-sm">02-1234-5678</p>
                </div>
              </div>
              <div className="flex items-center p-6 bg-gray-50 rounded-xl min-h-[120px]">
                <div className="w-10 h-10 bg-[#E5E7EB] rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-600 text-lg">✉️</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">이메일</p>
                  <p className="text-gray-600 text-sm">info@jjdesign.co.kr</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fade-in-up 1s ease-out;
          }
        `,
        }}
      />
    </div>
  );
};

export default CompanyPage;
