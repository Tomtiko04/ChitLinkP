import React, { useEffect, useState } from 'react';

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
  iconColor = 'text-amber-500',
  bg = 'bg-white',
  textColor = 'text-amber-900',
}) {
  // Extract prefix/suffix for modern look
  const match = value.toString().match(/([^0-9]*)([0-9,]+)(.*)/);
  const prefix = match ? match[1] : '';
  const number = match ? parseInt(match[2].replace(/,/g, '')) : value;
  const suffix = match ? match[3] : '';
  const animatedNumber = useCountUp(number, 2000);

  return (
    <div className={`rounded-2xl p-6 shadow-lg flex flex-col justify-between min-h-[180px] w-full max-w-sm ${bg}`}>
      <div className="flex items-center justify-between mb-2">
        <span className={`text-sm font-medium ${textColor}`}>{title}</span>
        {icon && <span className={`text-2xl ${iconColor}`}>{icon}</span>}
      </div>
      <div className="mb-1 flex items-center">
        <span className={`text-3xl font-bold tracking-tight ${textColor}`}>
          {prefix}{animatedNumber.toLocaleString()}{suffix}
        </span>
      </div>
      {subtitle && (
        <div className="mt-2">
          <span className="text-xs text-amber-500">{subtitle}</span>
        </div>
      )}
    </div>
  );
} 