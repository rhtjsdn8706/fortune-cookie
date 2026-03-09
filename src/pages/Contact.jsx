import ContentPage from '../components/Layout/ContentPage';

export default function Contact() {
  return (
    <ContentPage title="문의">
      <section>
        <h2 className="text-lg font-semibold text-text-main mb-3">연락처</h2>
        <p>
          "행운신령"에 대한 문의사항이 있으시면 아래 이메일로 연락해 주세요.
        </p>
        <p className="mt-3">
          <a
            href="mailto:contact@haengoon-shinryung.com"
            className="text-purple-light hover:text-pink underline text-base"
          >
            contact@haengoon-shinryung.com
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-text-main mb-3">문의 유형별 안내</h2>
        <div className="space-y-4">
          <div className="bg-bg-card rounded-xl p-4 border border-border-card">
            <h3 className="text-text-main font-medium mb-1">서비스 이용 문의</h3>
            <p className="text-sm">
              서비스 이용 중 발생한 오류, 기능 개선 제안, 일반적인 질문 등을 보내주세요.
            </p>
          </div>
          <div className="bg-bg-card rounded-xl p-4 border border-border-card">
            <h3 className="text-text-main font-medium mb-1">개인정보 관련 문의</h3>
            <p className="text-sm">
              개인정보 처리에 관한 문의, 쿠키 설정, 데이터 삭제 요청 등을 보내주세요.
            </p>
          </div>
          <div className="bg-bg-card rounded-xl p-4 border border-border-card">
            <h3 className="text-text-main font-medium mb-1">광고 및 제휴 문의</h3>
            <p className="text-sm">
              광고 게재, 비즈니스 제휴, 협업 관련 문의를 보내주세요.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-text-main mb-3">응답 안내</h2>
        <p>
          문의 접수 후 영업일 기준 <strong className="text-text-main">1~3일 이내</strong>에 답변드리겠습니다.
        </p>
      </section>
    </ContentPage>
  );
}
