import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, description }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
        {value}
      </div>
      <div className="text-lg font-semibold text-gray-800 mb-2">{label}</div>
      {description && (
        <div className="text-sm text-gray-600">{description}</div>
      )}
    </div>
  );
};

interface StatsGridProps {
  stats: {
    value: string;
    label: string;
    description?: string;
  }[];
}

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};
