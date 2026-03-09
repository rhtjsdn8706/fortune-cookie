import ContentPage from '../components/Layout/ContentPage';

export default function Terms() {
  return (
    <ContentPage title="이용약관">
      <p className="text-gray-400 text-xs">시행일: 2026년 3월 1일</p>

      <section>
        <h2 className="text-lg font-semibold text-white mb-3">제1조 (목적)</h2>
        <p>
          본 약관은 "오늘의 포춘쿠키"(이하 "서비스")가 제공하는 온라인 운세 엔터테인먼트 서비스의
          이용 조건 및 절차, 이용자와 서비스 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white mb-3">제2조 (서비스의 내용)</h2>
        <p>
          서비스는 이용자가 입력한 생년월일과 10개 문항의 설문 응답을 기반으로
          오락 목적의 운세 결과를 생성하여 제공합니다.
          서비스의 모든 결과는 알고리즘에 의해 생성된 <strong className="text-white">엔터테인먼트 콘텐츠</strong>이며,
          과학적·학술적 근거에 기반하지 않습니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white mb-3">제3조 (면책 조항)</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-400">
          <li>서비스가 제공하는 운세 결과는 순수한 오락 목적으로만 제공됩니다.</li>
          <li>운세 결과는 전문적인 심리 상담, 의료 조언, 법률 자문 또는 재정 자문을 대체할 수 없습니다.</li>
          <li>이용자는 운세 결과를 중요한 의사결정(건강, 재정, 법률 등)의 근거로 사용해서는 안 됩니다.</li>
          <li>서비스는 운세 결과의 정확성, 신뢰성, 완전성에 대해 어떠한 보증도 하지 않습니다.</li>
          <li>운세 결과를 신뢰하여 발생한 어떠한 손해에 대해서도 서비스는 책임을 지지 않습니다.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white mb-3">제4조 (지적재산권)</h2>
        <p>
          서비스에 포함된 텍스트, 그래픽, 디자인, 알고리즘 및 기타 콘텐츠에 대한
          지적재산권은 서비스 운영자에게 귀속됩니다. 이용자는 서비스의 콘텐츠를
          개인적·비상업적 목적으로만 이용할 수 있으며, 서비스 운영자의 사전 동의 없이
          복제, 배포, 수정, 2차 저작물 작성 등의 행위를 할 수 없습니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white mb-3">제5조 (서비스의 변경 및 중단)</h2>
        <p>
          서비스 운영자는 운영상·기술상의 필요에 따라 서비스의 전부 또는 일부를
          변경하거나 중단할 수 있습니다. 서비스 변경 또는 중단 시에는 가능한 한
          사전에 서비스 내 공지를 통해 이용자에게 안내합니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white mb-3">제6조 (이용자의 의무)</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-400">
          <li>이용자는 서비스를 오락 목적으로만 이용해야 합니다.</li>
          <li>이용자는 서비스의 정상적인 운영을 방해하는 행위를 해서는 안 됩니다.</li>
          <li>이용자는 타인의 개인정보를 무단으로 입력하여 서비스를 이용해서는 안 됩니다.</li>
          <li>이용자는 서비스를 통해 얻은 정보를 상업적 목적으로 사용해서는 안 됩니다.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white mb-3">제7조 (준거법 및 관할)</h2>
        <p>
          본 약관의 해석 및 적용에 관하여는 대한민국 법률을 준거법으로 합니다.
          서비스와 관련하여 발생한 분쟁에 대해서는 서비스 운영자의 주소지를 관할하는
          법원을 제1심 관할 법원으로 합니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white mb-3">부칙</h2>
        <p>본 약관은 2026년 3월 1일부터 시행합니다.</p>
      </section>
    </ContentPage>
  );
}
