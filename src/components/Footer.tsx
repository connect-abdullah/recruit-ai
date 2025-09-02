import Link from 'next/link';
import { socialLinks, platformLinks, companyLinks, policyLinks } from '@/constraints/footer';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">RecruitAI</h3>
            </div>
            <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
              Redefining recruitment for the modern era through AI, community, and innovation. 
              Join the future of talent acquisition.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg">Platform</h4>
            <ul className="space-y-3 text-gray-400">
              {platformLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-gray-400">
              {companyLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-gray-400 mb-4 sm:text-sm">
              &copy; 2025 RecruitAI. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-400 text-sm justify-center items-center">
              {policyLinks.map(({ href, label }) => (
                <Link key={label} href={href} className="hover:text-white transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 