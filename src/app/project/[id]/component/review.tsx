interface Review {
  customerName: string;
  rating: number;
  content: string;
  date: string;
}

interface ReviewSectionProps {
  projectId?: number;
}

export const ReviewSection = ({ projectId }: ReviewSectionProps) => {
  // TODO: API에서 해당 프로젝트의 리뷰 데이터를 가져오기
  const review: Review | null = {
    customerName: "김○○",
    rating: 5,
    date: "2024.12.15",
    content:
      "처음 인테리어를 의뢰했는데 정말 만족스럽습니다. jj-Design는 지인 추천으로 알게 되었는데, 상담부터 시공 완료까지 모든 과정이 체계적이고 전문적이었어요. 특히 주방 공간 리모델링이 가장 만족스럽고, 수납공간이 많아져서 생활이 훨씬 편해졌습니다. 담당자분이 세심하게 관리해주셔서 안심이 되었고, 일정도 정확하게 지켜주셨습니다. 가격 대비 퀄리티가 정말 좋아서 지인들에게도 적극 추천하고 싶습니다.",
  };

  // const renderStars = (rating: number) => {
  //   return (
  //     <div className="flex text-yellow-400 text-lg">
  //       {"★".repeat(rating)}
  //       {"☆".repeat(5 - rating)}
  //     </div>
  //   );
  // };

  return (
    <>
      {review && (
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">고객리뷰</h2>

          <div className="bg-gray-50 rounded-lg p-6">
            {/* 고객 정보 */}
            {/* <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">{review.customerName}</span>
            </div>
            <div>
              {renderStars(review.rating)}
              <span className="text-sm text-gray-600">{review.date}</span>
            </div>
          </div> */}

            {/* 리뷰 내용 */}
            <p className="text-gray-800 leading-relaxed text-base">
              {review.content}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
