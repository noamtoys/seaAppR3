import React, { useState } from 'react';
import { TabNavigation } from '../ui/TabNavigation';
import { GreenbrushProject } from './GreenbrushProject';
import { CobmindexProject } from './CobmindexProject';
import { ISMBProject } from './ISMBProject';
import { BurnsProject } from './BurnsProject';
import { PFABotProject } from './PFABotProject';

interface Project {
  id: string;
  name: string;
  shortDescription: string;
  component: React.ComponentType;
}

const projects: Project[] = [
  {
    id: 'greenbrush',
    name: 'Greenbrush – Cleaning Solutions for Solar Systems',
    shortDescription: 'Digital system for managing and maintaining solar energy systems',
    component: GreenbrushProject,
  },
  {
    id: 'cobmindex',
    name: 'COBMINDEX – Medical App for Crohn\'s Patients',
    shortDescription: 'Innovative digital solution for improving quality of life through psychological techniques',
    component: CobmindexProject,
  },
  {
    id: 'ismb',
    name: 'ISMB – Israeli Safety Officers Chamber',
    shortDescription: 'Digital platform for Israel\'s professional association of safety officers',
    component: ISMBProject,
  },
  {
    id: 'burns',
    name: 'BGU Burns Research – AI-Powered Burn Detection',
    shortDescription: 'Advanced AI system for burn identification using secure, censored medical data collection at Ben-Gurion University',
    component: BurnsProject,
  },
  {
    id: 'pfabot',
    name: 'PFABot – Psychological First Aid Chatbot',
    shortDescription: 'AI-powered psychological support chatbot for soldiers and anxiety sufferers in three languages',
    component: PFABotProject,
  },
];

export const ProjectsTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(projects[0].id);

  const activeProject = projects.find((p) => p.id === activeTab);
  const ActiveComponent = activeProject?.component;

  const tabs = projects.map((project) => ({
    id: project.id,
    label: project.name,
  }));

  return (
    <div id="projects" className="relative py-20 md:py-24 bg-white">
      <div className="container-custom relative z-10">
        <div className="mb-12 text-center animate-fade">
          <div className="inline-block mb-4">
            <span className="bg-primary-100 text-primary-700 px-6 py-2 rounded-full text-sm font-bold">
              <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Our Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Selected projects we developed for our clients - from idea to real results
          </p>
        </div>

        <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="mt-8">{ActiveComponent && <ActiveComponent />}</div>
      </div>
    </div>
  );
};
