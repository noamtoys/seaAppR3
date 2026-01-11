import React from 'react';

interface ProjectDetailsProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        {title}
      </h3>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        {description}
      </p>
      {children}
    </div>
  );
};
