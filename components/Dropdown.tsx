import React, { useState } from "react";
import Text from "@/components/Text";
import Link from "next/link";

export interface DropdownItem {
  label: string;
  href: string;
  subItems?: DropdownItem[];
}

interface DropdownProps {
  label: string;
  items: DropdownItem[];
  className?: string;
  isActive?: boolean;
}

const Dropdown = ({ label, items, className = "", isActive = false }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`relative group ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className={`flex items-center gap-1 transition-colors cursor-pointer ${
        isActive 
          ? "text-blue-600 dark:text-blue-500 font-medium" 
          : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
      }`}>
        <Text>{label}</Text>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div 
        className={`absolute left-0 top-full mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 z-50 
          opacity-0 invisible group-hover:opacity-100 group-hover:visible 
          transform -translate-y-2 group-hover:translate-y-0
          transition-all duration-200 ease-in-out`}
      >
        {/* Dropdown Arrow */}
        <div className="absolute -top-2 left-4 w-4 h-4 bg-white dark:bg-gray-800 border-t border-l border-gray-200 dark:border-gray-700 transform rotate-45"></div>
        
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <Text>{item.label}</Text>
          </Link>
        ))}
      </div>

      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Dropdown; 