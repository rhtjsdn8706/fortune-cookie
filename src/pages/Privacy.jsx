import ContentPage from '../components/Layout/ContentPage';

export default function Privacy() {
  return (
    <ContentPage title="개인정보처리방침">
      <p className="text-gray-400 text-xs">시행일: 2026년 3월 1일</p>

      <section>
        <h2 className="text-lg font-semibold text-white mb-3">1. 개인정보의 수집 항목 및 수집 방법</h2>
        <p>
          "오늘의 포춘쿠키"(이하 "서비스")는 운세 결과를 생성하기 위해 이용자가 직접 입력하는
          <strong className="text-white"> 생년월일(년, 월, 일)</strong> 정보를 수집합니다.
          해당 정보는 이용자의 웹 브라우저 세션 내에서만 일시적으로 사용되며,
          별도의 서버로 전송되거나 데이터베이스에 저장되지 않습니다.
        </p>
        <p className="mt-2">
          설문 응답(10문항 객관식 선택)은 운세 알고리즘 연산에만 사용되며,
          마찬가지로 서버에 저장되지 않습니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white mb-3">2. 개인정보의 이용 목적</h2>
        <p>
          수집된 생년월일 및 설문 응답은 오직 <strong className="text-white">운세 결과 생성</strong> 목적으로만
          사용됩니다. 이 외의 마케팅, 프로파일링, 통계 분석 등의 목적으로는 일절 활용하지 않습니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white mb-3">3. 개인정보의 보유 및 파기</h2>
        <p>
          이용자의 생년월일과 설문 응답은 브라우저 세션 메모리에만 존재하며,
          <strong className="text-white"> 페이지를 닫거나 새로고침하면 즉시 삭제</strong>됩니다.
          서비스는 별도의 회원가입 절차가 없으며, 이용자의 개인정보를 영구적으로 보관하지 않습니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white mb-3">4. 개인정보의 제3자 제공</h2>
        <p>
          서비스는 이용자의 개인정보를 제3자에게 제공하지 않습니다.
          다만, 서비스 운영을 위해 다음과 같은 외부 서비스를 이용할 수 있으며,
          해당 서비스의 개인정보처리방침이 별도로 적용됩니다.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
          <li>Google AdSense: 맞춤형 광고 제공을 위한 쿠키 사용</li>
          <li>Google Analytics: 서비스 이용 통계 분석을 위한 쿠키 사용</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white mb-3">5. 쿠키 및 광고</h2>
        <p>
          서비스는 Google AdSense를 통해 광고를 게재할 수 있습니다.
          Google AdSense는 이용자의 관심사에 기반한 광고를 제공하기 위해 쿠키를 사용합니다.
          이용자는 <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">Google 광고 설정</a>에서
          맞춤 광고를 비활성화할 수 있습니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white mb-3">6. 이용자의 권리</h2>
        <p>이용자는 다음과 같은 권리를 행사할 수 있습니다:</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
          <li>브라우저 설정을 통한 쿠키 삭제 및 차단</li>
          <li>광고 맞춤 설정 변경 (Google 광고 설정 페이지)</li>
          <li>개인정보 관련 문의 및 이의 제기</li>
        </ul>
        <p className="mt-2">
          브라우저별 쿠키 삭제 방법은 각 브라우저의 설정 메뉴에서 "개인정보" 또는 "쿠키" 항목을 확인해 주세요.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white mb-3">7. 개인정보처리방침의 변경</h2>
        <p>
          본 개인정보처리방침이 변경되는 경우, 변경 사항은 서비스 내 공지를 통해 고지하며,
          변경된 방침은 공지한 날로부터 7일 후에 효력이 발생합니다.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-white mb-3">8. 연락처</h2>
        <p>
          개인정보 관련 문의사항이 있으시면 아래 연락처로 문의해 주세요.
        </p>
        <p className="mt-2 text-gray-400">
          이메일: <a href="mailto:contact@fortunecookie.today" className="text-purple-400 hover:text-purple-300 underline">contact@fortunecookie.today</a>
        </p>
      </section>
    </ContentPage>
  );
}
