import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Database, FileSpreadsheet } from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    {
      path: '/gems',
      label: 'GEMS',
      icon: Database,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      path: '/gpf',
      label: 'GPF',
      icon: FileSpreadsheet,
      color: 'from-sky-500 to-cyan-600',
    },
  ];

  return (
    <div className="w-64 bg-slate-900 text-gray-300 min-h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-lg font-bold text-white mb-12 text-center tracking-wider">
          HRMS DASHBOARD
        </h1>
        
        <nav>
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-4">
            MODULES
          </h2>
          
          <div className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname.startsWith(item.path);
              
              return (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                      index === 1 ? 'mt-3' : ''
                    } ${
                      isActive
                        ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                        : 'hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
