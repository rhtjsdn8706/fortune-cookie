import ContentPage from '../components/Layout/ContentPage';
import Character from '../components/Character/Character';

export default function About() {
  return (
    <ContentPage title="소개">
      <div className="flex justify-center mb-6">
        <Character mode="default" size="lg" />
      </div>

      <section>
        <h2 className="text-lg font-semibold text-white mb-3">오늘의 포춘쿠키는?</h2>
        <p>
          "오늘의 포춘쿠키"는 바쁜 일상 속에서 잠깐의 쉼표가 되어주는 운세 엔터테인먼트 서비스입니다.
          무거운 사주팔자나 어려운 점술 대신, 포춘쿠키를 깨듯 가볍고 재미있게 오늘의 운세를 확인해 보세요.
        </p>
        <p className="mt-2">
          2026년, MZ세대를 위한 새로운 운세 경험을 만들고 싶다는 생각에서 시작되었습니다.
          친구에게 고민을 털어놓듯 편하게, 하지만 은근히 "어떻게 알았지?" 싶은 결과를 만나보세요.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white mb-3">어떻게 작동하나요?</h2>
        <p>
          운세 결과는 두 가지 입력을 기반으로 생성됩니다:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
          <li><strong className="text-white">생년월일</strong> — 날짜 기반 시드(seed) 값을 생성하여 매일 다른 결과를 만듭니다.</li>
          <li><strong className="text-white">10개 설문 문항</strong> — 현재 에너지, 인간관계, 고민, 생활 패턴 등을 파악합니다.</li>
        </ul>
        <p className="mt-2">
          이 두 가지 입력을 알고리즘으로 조합하여 당신에게 맞는 오늘의 메시지, 행운의 색상,
          행운의 숫자, 행운의 시간대를 생성합니다. 같은 생년월일이라도 설문 응답에 따라 결과가 달라지고,
          같은 응답이라도 날짜에 따라 매일 새로운 결과가 나옵니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white mb-3">우리의 철학</h2>
        <p>
          운세는 삶의 방향을 결정하는 도구가 아니라, 하루를 시작하는 작은 재미입니다.
          "오늘의 포춘쿠키"는 이용자에게 가벼운 위로와 웃음을 전하는 것을 목표로 합니다.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
          <li>무겁지 않게 — 사주팔자 대신 포춘쿠키의 가벼움</li>
          <li>공유의 즐거움 — 친구와 결과를 비교하며 웃을 수 있도록</li>
          <li>매일 새롭게 — 같은 사람도 날마다 다른 결과</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white mb-3">엔터테인먼트 서비스입니다</h2>
        <p>
          본 서비스의 운세 결과는 순수한 오락 목적으로 제공됩니다.
          과학적·학술적 근거에 기반하지 않으며, 전문적인 상담(심리, 의료, 법률, 재정 등)을
          대체할 수 없습니다. 중요한 결정은 반드시 전문가와 상의해 주세요.
        </p>
      </section>
    </ContentPage>
  );
}
