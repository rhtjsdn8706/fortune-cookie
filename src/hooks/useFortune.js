import { shortJeomsa, detailFortune, luckyKeywords } from '../data/fortuneMap';

const concernKeys = ['money', 'love', 'career', 'relationship'];
const stressKeys = ['media', 'eating', 'sleep', 'zone_out'];

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

  // Q1: 에너지 (0~1 = low, 2~3 = high)
  const energyIndex = answers[0];
  const isHighEnergy = energyIndex >= 2;
  const energyKey = isHighEnergy ? 'high' : 'low';

  // Q2: 사회성 (0 = 외향, 3 = 내향)
  const socialIndex = answers[1];
  const isExtro = socialIndex <= 1;

  // Q3: 핵심 고민 (0=재물, 1=연애, 2=커리어, 3=관계)
  const concernIndex = answers[2];
  const concernKey = concernKeys[concernIndex] || 'money';

  // Q4: 스트레스 해소법
  const stressIndex = answers[3];
  const stressKey = stressKeys[stressIndex] || 'media';

  // Q9: 하루 만족도 (0~1 = good, 2~3 = bad)
  const dayIndex = answers[8];
  const isGoodDay = dayIndex <= 1;
  const dayKey = isGoodDay ? 'good' : 'bad';

  // Q10: 방문 이유 (0=진심, 1=심심, 2=공유, 3=위로)
  const visitIndex = answers[9];

  // ── 짧은 점사 3줄 ──
  const short = shortJeomsa[concernKey]?.[energyKey]?.[dayKey]
    || shortJeomsa.money.low.good;

  // ── 긴 상세 해석 4영역 ──
  const generalKey = `${energyKey}_${dayKey}`;
  const general = detailFortune.general[generalKey];

  // 재물운
  const isMoneyConcern = concernKey === 'money';
  const wealthKey = isMoneyConcern
    ? (isHighEnergy ? 'money_high' : 'money_low')
    : (isHighEnergy ? 'other_high' : 'other_low');
  const wealth = detailFortune.wealth[wealthKey];

  // 관계운
  const socialSuffix = isExtro ? 'extro' : 'intro';
  let relationKey;
  if (concernKey === 'love') {
    relationKey = `love_${socialSuffix}`;
  } else if (concernKey === 'relationship') {
    relationKey = `relationship_${socialSuffix}`;
  } else {
    relationKey = `other_${socialSuffix}`;
  }
  const relation = detailFortune.relation[relationKey];

  // 건강·컨디션
  const health = detailFortune.health[stressKey];

  // ── 행운 키워드 ──
  const energyLucky = isHighEnergy
    ? luckyKeywords.energy.high
    : luckyKeywords.energy.low;
  const concernLucky =
    luckyKeywords.concern[concernKey] || luckyKeywords.concern.money;

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

  // ── 캐릭터 모드 ──
  const isComfort = visitIndex === 3 || dayIndex === 3 || energyIndex <= 1;
  const characterMode = isComfort ? 'burnout' : 'shocked';

  return {
    short,
    detail: { general, wealth, relation, health },
    lucky: { color: luckyColor, number: luckyNumber, time: luckyTime },
    characterMode,
    concernKey,
  };
}
