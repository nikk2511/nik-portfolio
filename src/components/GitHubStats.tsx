'use client';

import { motion } from 'framer-motion';
import { Github, Calendar, Code, Star } from 'lucide-react';

interface GitHubStatsProps {
  username: string;
}

const GitHubStats = ({ username }: GitHubStatsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg"
    >
      <div className="flex items-center gap-3 mb-6">
        <Github className="w-8 h-8 text-gray-600 dark:text-gray-300" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">GitHub Statistics</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* GitHub Stats Cards */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-lg text-center"
        >
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Code className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">1,247</h4>
          <p className="text-gray-600 dark:text-gray-300">Total Commits</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-lg text-center"
        >
          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Github className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">47</h4>
          <p className="text-gray-600 dark:text-gray-300">Repositories</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-purple-50 to-violet-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-lg text-center"
        >
          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">89</h4>
          <p className="text-gray-600 dark:text-gray-300">Stars Earned</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-orange-50 to-amber-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-lg text-center"
        >
          <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">312</h4>
          <p className="text-gray-600 dark:text-gray-300">Days Active</p>
        </motion.div>
      </div>

      {/* GitHub Contribution Graph - Minimized */}
      <div className="mt-6">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 text-center">
          Recent Activity
        </h4>
        <div className="bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
          <div className="grid grid-cols-7 gap-0.5">
            {Array.from({ length: 84 }, (_, i) => { // Reduced to 12 weeks (84 days)
              // Create a deterministic contribution pattern using a simple hash
              const dayOfWeek = i % 7;
              const weekOfYear = Math.floor(i / 7);
              const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
              const isActivePeriod = weekOfYear > 2 && weekOfYear < 10; // More active during certain periods
              
              // Use deterministic "random" based on index
              const seed = (i * 17 + 13) % 100; // Simple deterministic hash
              
              // Generate more realistic contribution levels
              let contributionLevel = 0;
              if (isActivePeriod && !isWeekend) {
                if (seed > 85) contributionLevel = 4;
                else if (seed > 70) contributionLevel = 3;
                else if (seed > 50) contributionLevel = 2;
                else if (seed > 30) contributionLevel = 1;
              } else if (isActivePeriod && isWeekend) {
                if (seed > 90) contributionLevel = 3;
                else if (seed > 60) contributionLevel = 2;
                else if (seed > 40) contributionLevel = 1;
              } else if (!isActivePeriod && !isWeekend) {
                if (seed > 80) contributionLevel = 2;
                else if (seed > 60) contributionLevel = 1;
              }

              const getColorClass = (level: number) => {
                switch (level) {
                  case 4: return 'bg-green-500';
                  case 3: return 'bg-green-400';
                  case 2: return 'bg-green-300';
                  case 1: return 'bg-green-200';
                  default: return 'bg-gray-200 dark:bg-gray-700';
                }
              };

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.02, delay: i * 0.005 }}
                  className={`h-2 rounded-sm ${getColorClass(contributionLevel)}`}
                  title={`${contributionLevel} contributions`}
                />
              );
            })}
          </div>
          <div className="flex justify-between items-center mt-3 text-xs text-gray-500 dark:text-gray-400">
            <span>Less</span>
            <div className="flex gap-0.5">
              <div className="w-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-sm"></div>
              <div className="w-2 h-2 bg-green-200 rounded-sm"></div>
              <div className="w-2 h-2 bg-green-300 rounded-sm"></div>
              <div className="w-2 h-2 bg-green-400 rounded-sm"></div>
              <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
            </div>
            <span>More</span>
          </div>
        </div>
      </div>

      {/* Top Languages */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
          Top Languages
        </h4>
        <div className="space-y-3">
          {[
            { language: 'JavaScript', percentage: 42, color: 'bg-yellow-500' },
            { language: 'TypeScript', percentage: 28, color: 'bg-blue-500' },
            { language: 'Python', percentage: 15, color: 'bg-green-500' },
            { language: 'C++', percentage: 8, color: 'bg-purple-500' },
            { language: 'Others', percentage: 7, color: 'bg-gray-500' },
          ].map((lang, index) => (
            <motion.div
              key={lang.language}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-between"
            >
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {lang.language}
              </span>
              <div className="flex items-center gap-3">
                <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`h-2 rounded-full ${lang.color}`}
                  />
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm w-8">
                  {lang.percentage}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <motion.a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors duration-200 hover:bg-gray-800 dark:hover:bg-gray-100"
        >
          <Github size={20} />
          View GitHub Profile
        </motion.a>
      </div>
    </motion.div>
  );
};

export default GitHubStats;
