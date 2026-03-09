import ContentPage from '../components/Layout/ContentPage';

export default function Guide() {
  return (
    <ContentPage title="운세 가이드">
      <section>
        <h2 className="text-lg font-semibold text-white mb-3">운세란 무엇인가?</h2>
        <p>
          운세(運勢)는 한자 그대로 "운(運)의 흐름(勢)"을 뜻합니다.
          동양 철학에서 운세는 천지자연의 기운이 사람에게 미치는 영향을 읽는 것으로,
          수천 년간 동아시아 문화권에서 삶의 일부로 자리 잡아 왔습니다.
        </p>
        <p className="mt-2">
          전통적으로 운세는 사주팔자(四柱八字), 관상, 풍수지리, 주역 등 다양한 방법으로 풀이되었습니다.
          오늘날에는 혈액형 운세, 별자리 운세, 타로 등 현대적인 형태로도 많이 즐기고 있죠.
          "오늘의 포춘쿠키"는 이러한 전통과 현대 사이에서 가장 가볍고 재미있는 방식을 추구합니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white mb-3">생년월일과 운세의 관계</h2>
        <p>
          동양 철학에서 사람이 태어난 날은 그 사람의 기본 성향과 운의 흐름을 결정하는 중요한 요소입니다.
          사주팔자(四柱八字)는 태어난 해, 월, 일, 시를 네 개의 기둥으로 삼아
          각각의 천간(天干)과 지지(地支)로 풀이합니다.
        </p>
        <p className="mt-2">
          음양오행(陰陽五行) 이론에 따르면 모든 것은 목(木), 화(火), 토(土), 금(金), 수(水)
          다섯 가지 원소의 상호작용으로 이루어집니다. 태어난 날의 오행 배치에 따라
          그 사람의 성격, 적성, 운의 흐름이 달라진다고 보는 것이죠.
        </p>
        <p className="mt-2">
          "오늘의 포춘쿠키"에서 생년월일은 매일 바뀌는 운세의 '시드(seed)' 역할을 합니다.
          같은 날 태어난 사람이라도 설문 응답에 따라 결과가 달라지고,
          같은 사람도 날마다 새로운 운세를 받아볼 수 있습니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white mb-3">운세를 보는 올바른 자세</h2>
        <p>
          운세는 인생의 내비게이션이 아니라, 하루를 시작하는 작은 영감입니다.
          좋은 결과가 나오면 기분 좋게 하루를 시작하고, 조심하라는 결과가 나오면
          한 번 더 주의를 기울이는 정도면 충분합니다.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2 text-gray-400">
          <li><strong className="text-white">재미로 즐기세요</strong> — 운세는 엔터테인먼트입니다. 너무 진지하게 받아들이지 않아도 됩니다.</li>
          <li><strong className="text-white">의존하지 마세요</strong> — 중요한 결정은 전문가의 조언과 본인의 판단에 따르세요.</li>
          <li><strong className="text-white">공유하며 즐기세요</strong> — 친구와 결과를 비교하면 대화 소재가 됩니다.</li>
          <li><strong className="text-white">매일 새롭게</strong> — 어제의 운세에 연연하지 말고, 오늘의 운세를 새롭게 받아들이세요.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white mb-3">포춘쿠키의 유래</h2>
        <p>
          포춘쿠키(Fortune Cookie)는 미국 중식당에서 후식으로 제공되는 과자로,
          안에 짧은 운세 메시지가 들어 있습니다. 많은 사람들이 중국에서 유래했다고 생각하지만,
          실제로는 그 기원에 대해 흥미로운 논쟁이 있습니다.
        </p>
        <p className="mt-2">
          <strong className="text-white">일본 기원설:</strong> 19세기 일본 교토의 신사에서 "신이 점지한 과자(辻占煎餅)"라는
          이름으로 운세가 들어간 쌀 과자를 제공한 기록이 있습니다.
          일본 이민자들이 미국에 건너가면서 이 문화를 가져왔다는 설이 유력합니다.
        </p>
        <p className="mt-2">
          <strong className="text-white">미국 발전:</strong> 20세기 초 샌프란시스코와 로스앤젤레스의 일본계 미국인 제과점에서
          포춘쿠키를 만들기 시작했고, 제2차 세계대전 이후 일본계 미국인들이 수용소에 수감되면서
          중국계 미국인들이 제조를 이어받아 중식당 문화의 일부가 되었습니다.
        </p>
        <p className="mt-2">
          오늘날 포춘쿠키는 연간 약 30억 개가 생산되며, 전 세계에서 사랑받는 문화 아이콘이 되었습니다.
          "오늘의 포춘쿠키"는 이 친숙한 경험을 디지털로 옮겨, 언제 어디서나 나만의 운세 메시지를
          받아볼 수 있게 만들었습니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white mb-4">자주 묻는 질문 (FAQ)</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-medium mb-2">Q. 결과가 매일 바뀌나요?</h3>
            <p className="text-gray-400 text-sm">
              네, 결과는 매일 달라집니다. 운세 알고리즘은 오늘 날짜를 기반으로 시드 값을 생성하기 때문에,
              같은 생년월일과 같은 설문 응답이라도 내일은 다른 결과가 나옵니다.
              매일 새로운 운세를 확인해 보세요!
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-medium mb-2">Q. 개인정보는 안전한가요?</h3>
            <p className="text-gray-400 text-sm">
              안전합니다. 입력하신 생년월일과 설문 응답은 서버에 전송되거나 저장되지 않습니다.
              모든 처리는 브라우저 내에서 이루어지며, 페이지를 닫으면 모든 정보가 즉시 삭제됩니다.
              자세한 내용은 개인정보처리방침을 확인해 주세요.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-medium mb-2">Q. 친구와 결과가 다른 이유는?</h3>
            <p className="text-gray-400 text-sm">
              운세 결과는 생년월일과 10개 설문 응답의 조합으로 생성됩니다.
              생년월일이 같더라도 설문에 다르게 답하면 다른 결과가 나옵니다.
              각자의 현재 상태와 성향이 반영되기 때문에, 같은 사람이 다른 날 다른 컨디션으로
              답하면 또 다른 결과를 받게 됩니다.
            </p>
          </div>
        </div>
      </section>
    </ContentPage>
  );
}
