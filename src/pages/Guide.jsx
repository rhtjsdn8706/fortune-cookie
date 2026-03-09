import ContentPage from '../components/Layout/ContentPage';

export default function Guide() {
  return (
    <ContentPage title="운세 가이드">
      <section>
        <h2 className="text-lg font-semibold text-text-main mb-3">운세란 무엇인가?</h2>
        <p>
          운세(運勢)는 한자 그대로 "운(運)의 흐름(勢)"을 뜻합니다.
          동양 철학에서 운세는 천지자연의 기운이 사람에게 미치는 영향을 읽는 것으로,
          수천 년간 동아시아 문화권에서 삶의 일부로 자리 잡아 왔습니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-text-main mb-3">생년월일과 운세의 관계</h2>
        <p>
          동양 철학에서 사람이 태어난 날은 그 사람의 기본 성향과 운의 흐름을 결정하는 중요한 요소입니다.
          "오늘의 포춘쿠키"에서 생년월일은 매일 바뀌는 운세의 '시드(seed)' 역할을 합니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-text-main mb-3">운세를 보는 올바른 자세</h2>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li><strong className="text-text-main">재미로 즐기세요</strong> — 운세는 엔터테인먼트입니다.</li>
          <li><strong className="text-text-main">의존하지 마세요</strong> — 중요한 결정은 전문가의 조언에 따르세요.</li>
          <li><strong className="text-text-main">공유하며 즐기세요</strong> — 친구와 결과를 비교하면 대화 소재가 됩니다.</li>
          <li><strong className="text-text-main">매일 새롭게</strong> — 어제의 운세에 연연하지 말고, 오늘의 운세를 받아들이세요.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-text-main mb-3">포춘쿠키의 유래</h2>
        <p>
          포춘쿠키(Fortune Cookie)는 미국 중식당에서 후식으로 제공되는 과자로,
          안에 짧은 운세 메시지가 들어 있습니다.
          19세기 일본 교토의 신사에서 시작되어 미국으로 전해진 것으로 알려져 있습니다.
          오늘날 연간 약 30억 개가 생산되는 전 세계적 문화 아이콘입니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-text-main mb-4">자주 묻는 질문 (FAQ)</h2>
        <div className="space-y-4">
          <div className="bg-bg-card rounded-xl p-4 border border-border-card">
            <h3 className="text-text-main font-medium mb-2">Q. 결과가 매일 바뀌나요?</h3>
            <p className="text-sm">
              네, 결과는 매일 달라집니다. 같은 생년월일과 같은 설문 응답이라도 내일은 다른 결과가 나옵니다.
            </p>
          </div>
          <div className="bg-bg-card rounded-xl p-4 border border-border-card">
            <h3 className="text-text-main font-medium mb-2">Q. 개인정보는 안전한가요?</h3>
            <p className="text-sm">
              안전합니다. 입력하신 정보는 서버에 전송되거나 저장되지 않습니다.
              모든 처리는 브라우저 내에서 이루어지며, 페이지를 닫으면 즉시 삭제됩니다.
            </p>
          </div>
          <div className="bg-bg-card rounded-xl p-4 border border-border-card">
            <h3 className="text-text-main font-medium mb-2">Q. 친구와 결과가 다른 이유는?</h3>
            <p className="text-sm">
              운세 결과는 생년월일과 10개 설문 응답의 조합으로 생성됩니다.
              설문에 다르게 답하면 다른 결과가 나옵니다.
            </p>
          </div>
        </div>
      </section>
    </ContentPage>
  );
}
