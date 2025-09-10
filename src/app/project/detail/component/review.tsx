export const ReviewSection = ({ review }: { review: string }) => {
  return (
    <>
      {review && (
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">고객리뷰</h2>

          <div className="bg-gray-50 rounded-lg p-6">
            {/* 리뷰 내용 */}
            <p className="text-gray-800 leading-relaxed text-base">{review}</p>
          </div>
        </div>
      )}
    </>
  );
};
