import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

function useCountUp(finalValue, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    let end = typeof finalValue === 'number' ? finalValue : parseInt(finalValue.toString().replace(/[^0-9]/g, ''));
    if (isNaN(end)) end = 0;
    const increment = Math.ceil(end / (duration / 16));
    let current = start;
    const step = () => {
      current += increment;
      if (current >= end) {
        setCount(end);
      } else {
        setCount(current);
        requestAnimationFrame(step);
      }
    };
    step();
    // eslint-disable-next-line
  }, [finalValue, duration]);

  return count;
}

export default function DashboardStatCard({
  title,
  subtitle,
  value,
  icon,
}) {
  // Extract prefix/suffix for modern look
  const match = value.toString().match(/([^0-9]*)([0-9,]+)(.*)/);
  const prefix = match ? match[1] : '';
  const number = match ? parseInt(match[2].replace(/,/g, '')) : value;
  const suffix = match ? match[3] : '';
  const animatedNumber = useCountUp(number, 2000);

  return (
    <div
      className={`flex min-h-[180px] w-full max-w-sm flex-col justify-between rounded-2xl px-6 py-4 shadow-lg bg-white border-2 border-[#EDEAE4]`}
    >
      <div className="mb-2 flex-col items-center justify-start">
        <span className={`text-sm font-bold text-[#89785C]`}>{title}</span>
        {subtitle && (
          <div className="mt-1 flex items-center gap-1">
            <span className="text-xs font-medium text-[#241505]">{subtitle}</span>
            <Icon icon="ep:arrow-down" className="text-[#4C3308]/66" />
          </div>
        )}
      </div>
      <div className="mb-1 flex items-center justify-between">
        {icon && <span className={`gradient-text text-3xl`}>{icon}</span>}
        <span className={`text-4xl font-bold tracking-tight text-[#4C3308]`}>
          {prefix}
          {animatedNumber.toLocaleString()}
          {suffix}
        </span>
      </div>
    </div>
  );
} 