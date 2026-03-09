import { introductions, coreMessages, closings, luckyKeywords } from '../data/fortuneMap';

const concernKeys = ['money', 'love', 'career', 'relationship'];
const closingKeys = ['believer', 'bored', 'shared', 'comfort'];

function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function getDaySeed(birthDate) {
  const today = new Date();
  const dateStr = `${today.getFullYear()}${today.getMonth()}${today.getDate()}`;
  const birthStr = birthDate.replace(/-/g, '');
  return parseInt(dateStr + birthStr, 10);
}

export default function useFortune(answers, birthDate) {
  if (!answers || answers.length < 10 || !birthDate) return null;

  const seed = getDaySeed(birthDate);
  const rand = seededRandom(seed);

  // Q1: 에너지 (0=번아웃쪽, 2=활기, 3=무난)
  const energyIndex = answers[0];
  // Q9: 하루 만족도 (0=좋음, 3=지침)
  const dayIndex = answers[8];
  // Q3: 핵심 고민 (0=재물, 1=연애, 2=커리어, 3=관계)
  const concernIndex = answers[2];
  // Q10: 방문 이유 (0=진심, 1=심심, 2=공유, 3=위로)
  const visitIndex = answers[9];

  // 도입부
  const introKey = `${energyIndex}_${dayIndex}`;
  const intro = introductions[introKey] || introductions['3_2'];

  // 핵심 메시지
  const concernKey = concernKeys[concernIndex] || 'money';
  const corePool = coreMessages[concernKey];
  const coreIdx = Math.floor(rand * corePool.length);
  const core = corePool[coreIdx];

  // 마무리
  const closingKey = closingKeys[visitIndex] || 'bored';
  const closingPool = closings[closingKey];
  const closingIdx = Math.floor(seededRandom(seed + 1) * closingPool.length);
  const closing = closingPool[closingIdx];

  // 행운 키워드
  const isHighEnergy = energyIndex >= 2;
  const energyLucky = isHighEnergy
    ? luckyKeywords.energy.high
    : luckyKeywords.energy.low;
  const concernLucky =
    luckyKeywords.concern[concernKey] || luckyKeywords.concern.money;

  // 에너지 + 고민 조합에서 키워드 선택
  const colorIdx = Math.floor(seededRandom(seed + 2) * 2);
  const luckyColor =
    seededRandom(seed + 3) > 0.5
      ? energyLucky.colors[colorIdx]
      : concernLucky.colors[colorIdx];
  const luckyNumber =
    seededRandom(seed + 4) > 0.5
      ? energyLucky.numbers[colorIdx]
      : concernLucky.numbers[colorIdx];
  const luckyTime =
    seededRandom(seed + 5) > 0.5 ? energyLucky.time : concernLucky.time;

  // 캐릭터 모드 결정
  const isComfort = visitIndex === 3 || dayIndex === 3 || energyIndex <= 1;
  const characterMode = isComfort ? 'burnout' : 'shocked';

  return {
    intro,
    core,
    closing,
    fullText: `${intro}\n\n${core}\n\n${closing}`,
    lucky: {
      color: luckyColor,
      number: luckyNumber,
      time: luckyTime,
    },
    characterMode,
    concernKey,
  };
}
