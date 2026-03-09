import ContentPage from '../components/Layout/ContentPage';

export default function Privacy() {
  return (
    <ContentPage title="개인정보처리방침">
      <p className="text-text-sub/60 text-xs">시행일: 2026년 3월 1일</p>

      <section>
        <h2 className="text-lg font-semibold text-text-main mb-3">1. 개인정보의 수집 항목 및 수집 방법</h2>
        <p>
          "행운신령"(이하 "서비스")는 운세 결과를 생성하기 위해 이용자가 직접 입력하는
          <strong className="text-text-main"> 생년월일(년, 월, 일)</strong> 정보를 수집합니다.
          해당 정보는 이용자의 웹 브라우저 세션 내에서만 일시적으로 사용되며,
          별도의 서버로 전송되거나 데이터베이스에 저장되지 않습니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-text-main mb-3">2. 개인정보의 이용 목적</h2>
        <p>
          수집된 생년월일 및 설문 응답은 오직 <strong className="text-text-main">운세 결과 생성</strong> 목적으로만 사용됩니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-text-main mb-3">3. 개인정보의 보유 및 파기</h2>
        <p>
          이용자의 생년월일과 설문 응답은 브라우저 세션 메모리에만 존재하며,
          <strong className="text-text-main"> 페이지를 닫거나 새로고침하면 즉시 삭제</strong>됩니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-text-main mb-3">4. 개인정보의 제3자 제공</h2>
        <p>서비스는 이용자의 개인정보를 제3자에게 제공하지 않습니다.</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Google AdSense: 맞춤형 광고 제공을 위한 쿠키 사용</li>
          <li>Google Analytics: 서비스 이용 통계 분석을 위한 쿠키 사용</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-text-main mb-3">5. 쿠키 및 광고</h2>
        <p>
          서비스는 Google AdSense를 통해 광고를 게재할 수 있습니다.
          이용자는 Google 광고 설정에서 맞춤 광고를 비활성화할 수 있습니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-text-main mb-3">6. 이용자의 권리</h2>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>브라우저 설정을 통한 쿠키 삭제 및 차단</li>
          <li>광고 맞춤 설정 변경</li>
          <li>개인정보 관련 문의 및 이의 제기</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-text-main mb-3">7. 개인정보처리방침의 변경</h2>
        <p>
          본 개인정보처리방침이 변경되는 경우, 변경 사항은 서비스 내 공지를 통해 고지합니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-text-main mb-3">8. 연락처</h2>
        <p>
          이메일: <a href="mailto:contact@haengoon-shinryung.com" className="text-purple-light hover:text-pink underline">contact@haengoon-shinryung.com</a>
        </p>
      </section>
    </ContentPage>
  );
}
