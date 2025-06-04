// App.tsx
import { useState, useEffect } from 'react';
import './App.css';

// 角色数据池
const CHARACTERS = {
  fiveStar: [
    { name: '刻晴', element: '雷' },
    { name: '莫娜', element: '水' },
    { name: '迪卢克', element: '火' }
  ],
  fourStar: [
    { name: '菲谢尔', element: '雷' },
    { name: '行秋', element: '水' },
    { name: '北斗', element: '雷' }
  ],
  threeStar: [
    '黎明神剑', '黑缨枪', '魔导绪论'
  ]
};

export default function App() {
  const [isWishing, setIsWishing] = useState(false);
  const [result, setResult] = useState<{
    type: '5' | '4' | '3';
    item: string;
    element?: string;
  } | null>(null);
  const [pityCounter, setPityCounter] = useState(0);

  const wish = () => {
    if (isWishing) return;
    
    setIsWishing(true);
    setResult(null);

    // 保底机制（90抽必出5星）
    const guaranteed5Star = pityCounter >= 89;
    
    setTimeout(() => {
      const rand = Math.random();
      let type: '5' | '4' | '3' = '3';

      if (guaranteed5Star || rand < 0.006) {
        type = '5';
        setPityCounter(0);
      } else if (rand < 0.057) {
        type = '4';
      } else {
        setPityCounter(prev => prev + 1);
      }

      // 随机选择结果
      let item = '';
      let element = '';
      if (type === '5') {
        const chars = CHARACTERS.fiveStar;
        const { name, element: el } = chars[Math.floor(Math.random() * chars.length)];
        item = name;
        element = el;
      } else if (type === '4') {
        const { name, element: el } = CHARACTERS.fourStar[
          Math.floor(Math.random() * CHARACTERS.fourStar.length)
        ];
        item = name;
        element = el;
      } else {
        item = CHARACTERS.threeStar[
          Math.floor(Math.random() * CHARACTERS.threeStar.length)
        ];
      }

      setResult({ type, item, element });
      setIsWishing(false);
    }, 2000);
  };

  return (
    <div className="container">
      <h1>原神祈愿模拟器</h1>
      <div className="counter">保底计数: {pityCounter}</div>
      
      <button 
        className={`wish-button ${isWishing ? 'wishing' : ''}`}
        onClick={wish}
        disabled={isWishing}
      >
        {isWishing ? '祈愿中...' : '祈愿一次'}
      </button>

      <div className="animation-container">
        {isWishing && (
          <div className="star-animation">
            <div className="shooting-star"></div>
            <div className="glow"></div>
          </div>
        )}
      </div>

      {result && (
        <div className={`result ${result.type}-star`}>
          <div className={`stars ${result.type}-star`}>
            {Array.from({ length: parseInt(result.type) }, (_, i) => (
              <span key={i} className="star">★</span>
            ))}
          </div>
          <h2 className="item-name">
            {result.item}
            {result.element && (
              <span className={`element ${result.element}`}>
                {result.element}
              </span>
            )}
          </h2>
        </div>
      )}
    </div>
  );
}